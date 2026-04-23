<script>
(function() {
  'use strict';

  // 🔧 FIXED: use direct paths instead of imports
  const logoV3 = "/src/badge/assets/logo_v3.png";
  const base44Text = "/src/badge/assets/base44_text.png";
  const badgeCover = "/src/badge/assets/badge-cover.png";

  const XIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

  const LoaderIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="badge-spinner"></svg>';

  function sanitizePlatformUrl(url) {
    if (!url) return null;
    try {
      const parsed = new URL(url);
      if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return null;
      return parsed.origin;
    } catch {
      return null;
    }
  }

  function sanitizeAppId(appId) {
    if (!appId) return null;
    const sanitized = appId.replace(/[^a-zA-Z0-9]/g, '');
    return sanitized || null;
  }

  function trackBadgeEvent(platformUrl, appId, event, properties) {
    fetch(`${platformUrl}/api/apps/public/badge/${appId}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(properties ? { event, properties } : { event }),
    }).catch(() => {});
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function createModal(appId, platformUrl, appName) {
    const modalOverlay = document.createElement('div');
    Object.assign(modalOverlay.style, {
      position: 'fixed',
      inset: '0',
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '1000000'
    });

    const modal = document.createElement('div');
    Object.assign(modal.style, {
      background: '#fff',
      borderRadius: '12px',
      width: '400px',
      padding: '20px',
      textAlign: 'center'
    });

    modal.innerHTML = `
      <button id="closeBtn">${XIcon}</button>
      <img src="${badgeCover}" style="width:100%;border-radius:10px;">
      <h3>${appName ? escapeHtml(appName) : "Built with Base44"}</h3>
      <button id="goBtn">Go to Base44</button>
      <button id="cloneBtn">Clone App</button>
    `;

    modalOverlay.appendChild(modal);

    modal.querySelector('#closeBtn').onclick = () => {
      trackBadgeEvent(platformUrl, appId, 'modal_closed');
      modalOverlay.remove();
    };

    modal.querySelector('#goBtn').onclick = () => {
      trackBadgeEvent(platformUrl, appId, 'go_clicked');
      window.open(platformUrl, '_blank');
    };

    modal.querySelector('#cloneBtn').onclick = () => {
      trackBadgeEvent(platformUrl, appId, 'clone_clicked');
      window.open(platformUrl + '/remix-app/' + appId, '_blank');
    };

    modalOverlay.onclick = () => modalOverlay.remove();
    modal.onclick = e => e.stopPropagation();

    return modalOverlay;
  }

  function createBadge(appId, platformUrl, appName) {
    const badge = document.createElement('div');

    Object.assign(badge.style, {
      position: 'fixed',
      bottom: '16px',
      right: '16px',
      background: '#000',
      color: '#fff',
      padding: '10px',
      borderRadius: '6px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      zIndex: '999999'
    });

    badge.innerHTML = `
      <img src="${logoV3}" width="20">
      <span>Edit with <img src="${base44Text}" height="14"></span>
      <button id="close">${XIcon}</button>
    `;

    badge.onclick = () => {
      document.body.appendChild(createModal(appId, platformUrl, appName));
    };

    badge.querySelector('#close').onclick = (e) => {
      e.stopPropagation();
      trackBadgeEvent(platformUrl, appId, 'badge_closed');
      badge.remove();
    };

    return badge;
  }

  function init() {
    const script = document.currentScript;
    if (!script) return;

    const appId = sanitizeAppId(script.getAttribute('data-app-id'));
    const platformUrl = sanitizePlatformUrl(script.getAttribute('data-platform-url') || 'https://app.base44.com');
    const appName = script.getAttribute('data-app-name');

    if (!appId || !platformUrl) return;

    const badge = createBadge(appId, platformUrl, appName);
    document.body.appendChild(badge);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>
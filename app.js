// ── CONFIG ────────────────────────────────────────────────────────────────────
const GM_ICONS = {
  Overall:  'icons/overall.svg',
  LTMs:     'icons/ltms.svg',
  Vanilla:  'icons/vanilla.svg',
  UHC:      'icons/uhc.svg',
  Pot:      'icons/pot.svg',
  NethOP:   'icons/nethop.svg',
  SMP:      'icons/smp.svg',
  Sword:    'icons/sword.svg',
  Axe:      'icons/axe.svg',
  Mace:     'icons/mace.svg',
  Crystal:  'icons/crystal.svg',
};

// mc-heads.net: accepts username directly, CORS enabled, no UUID needed
function skinUrl(username) {
  return `https://mc-heads.net/avatar/${encodeURIComponent(username)}/56`;
}

// ── STATE ─────────────────────────────────────────────────────────────────────
let data = null;
let activeGm = '';
let editorOpen = false;

// ── BOOT ──────────────────────────────────────────────────────────────────────
async function boot() {
  try {
    const res = await fetch('tierlist.json?' + Date.now());
    data = await res.json();
  } catch(e) {
    console.warn('Could not load tierlist.json, using fallback');
    data = FALLBACK;
  }
  activeGm = data.gamemodes[0];
  renderTabs();
  renderTable();
}

// ── TABS ──────────────────────────────────────────────────────────────────────
function renderTabs() {
  const c = document.getElementById('gmTabs');
  c.innerHTML = '';
  data.gamemodes.forEach(gm => {
    const btn = document.createElement('button');
    btn.className = 'gm-tab' + (gm === activeGm ? ' on' : '');
    const iconSrc = GM_ICONS[gm] || GM_ICONS['Overall'];
    btn.innerHTML = `<img src="${iconSrc}" alt="${gm}" onerror="this.style.display='none'"/><span>${gm}</span>`;
    btn.onclick = () => { activeGm = gm; renderTabs(); renderTable(); };
    c.appendChild(btn);
  });
}

// ── TIER BADGE ────────────────────────────────────────────────────────────────
function badgeTextClass(tier) {
  const n = tier.slice(2);
  if (n === '1') return 'tbt-gold';
  if (n === '2') return 'tbt-silver';
  if (n === '3') return 'tbt-bronze';
  return 'tbt-dark';
}

function makeBadge(tier, gm) {
  if (!tier) {
    return `<div class="tbadge tbadge-empty">
      <div class="tbadge-icon"></div>
      <div class="tbadge-lbl">${gm.slice(0,4)}</div>
    </div>`;
  }
  const isHT = tier.startsWith('H');
  const num  = tier.slice(2);
  const cls  = `tb-${tier}`;
  const txt  = badgeTextClass(tier);
  return `<div class="tbadge">
    <div class="tbadge-icon ${cls}">
      <div style="display:flex;flex-direction:column;align-items:center;line-height:1.1">
        <span style="font-size:7.5px;font-weight:800;${txt === 'tbt-dark' ? 'color:#7888a8' : 'color:rgba(0,0,0,.65)'}">${isHT ? 'HT' : 'LT'}</span>
        <span style="font-size:11px;font-weight:900;${txt === 'tbt-dark' ? 'color:#8898b8' : 'color:rgba(0,0,0,.75)'}">${num}</span>
      </div>
    </div>
    <div class="tbadge-lbl">${gm.slice(0,4)}</div>
  </div>`;
}

// ── TABLE ─────────────────────────────────────────────────────────────────────
function renderTable() {
  const body = document.getElementById('tblBody');
  body.innerHTML = '';

  const players = data.players.filter(p => {
    if (activeGm === 'Overall') return true;
    return p.tiers && p.tiers[activeGm];
  });

  if (!players.length) {
    body.innerHTML = `<div style="padding:40px;text-align:center;color:#2a2e38;font-size:13px">No players ranked in this gamemode</div>`;
    return;
  }

  players.forEach((player, i) => {
    const rank = i + 1;
    const rsClass = rank === 1 ? 'rs-1' : rank === 2 ? 'rs-2' : rank === 3 ? 'rs-3' : 'rs-n';
    const rnClass = rank === 1 ? 'rank-1' : rank === 2 ? 'rank-2' : rank === 3 ? 'rank-3' : '';
    const regionCls = `r-${player.region || 'NA'}`;

    // Build tier badges — show all gamemodes that have a tier
    let badgesHtml = '';
    data.gamemodes.forEach(gm => {
      const t = player.tiers?.[gm];
      if (t) badgesHtml += makeBadge(t, gm);
    });
    if (!badgesHtml) badgesHtml = '<span style="font-size:12px;color:#2a2e38">—</span>';

    const row = document.createElement('div');
    row.className = 'tbl-row fadein';
    row.style.animationDelay = `${i * 35}ms`;

    row.innerHTML = `
      <div class="rank-num ${rnClass}">${rank}.</div>
      <div class="player-cell">
        <div class="rank-strip ${rsClass}">${rank}</div>
        <div class="skin-cell skeleton" id="sc${i}">
          <img
            src="${skinUrl(player.username)}"
            alt="${player.username}"
            onload="document.getElementById('sc${i}').classList.remove('skeleton')"
            onerror="document.getElementById('sc${i}').classList.remove('skeleton');document.getElementById('sc${i}').innerHTML='<div style=width:52px;height:64px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700;color:#2a2e38>${player.username[0].toUpperCase()}</div>'"
          />
        </div>
        <div class="player-info">
          <div class="p-name">${player.username}</div>
          <div class="p-label">
            <img src="icons/rank_diamond.svg" alt="" onerror="this.style.display='none'"/>
            ${player.rank_label || 'Player'}
          </div>
        </div>
      </div>
      <div><span class="region ${regionCls}">${player.region || 'NA'}</span></div>
      <div class="tiers-cell">${badgesHtml}</div>
    `;
    body.appendChild(row);
  });
}

// ── EDITOR ────────────────────────────────────────────────────────────────────
function toggleEditor() {
  editorOpen = !editorOpen;
  const panel = document.getElementById('editorPanel');
  const btn   = document.getElementById('editBtn');
  panel.style.display = editorOpen ? 'block' : 'none';
  btn.classList.toggle('on', editorOpen);
  if (editorOpen) document.getElementById('jsonArea').value = JSON.stringify(data, null, 2);
}

function applyJson() {
  const raw = document.getElementById('jsonArea').value;
  const err = document.getElementById('jsonErr');
  try {
    const p = JSON.parse(raw);
    if (!Array.isArray(p.players))   throw new Error('"players" must be an array');
    if (!Array.isArray(p.gamemodes)) throw new Error('"gamemodes" must be an array');
    data     = p;
    activeGm = data.gamemodes[0];
    err.style.display = 'none';
    renderTabs();
    renderTable();
  } catch(e) {
    err.textContent   = '✗  ' + e.message;
    err.style.display = 'block';
  }
}

function resetDefault() {
  data     = JSON.parse(JSON.stringify(FALLBACK));
  activeGm = data.gamemodes[0];
  document.getElementById('jsonArea').value = JSON.stringify(data, null, 2);
  document.getElementById('jsonErr').style.display = 'none';
  renderTabs();
  renderTable();
}

// ── FALLBACK DATA ─────────────────────────────────────────────────────────────
const FALLBACK = {
  title: "MC Tier List",
  gamemodes: ["Overall","Crystal","Sword","NethOP","UHC","SMP","Pot","Axe"],
  players: [
    {
      username: "_lxd",
      region: "EU",
      rank_label: "Combat Ace",
      tiers: {
        Crystal: "LT4",
        Sword:   "LT3",
        NethOP:  "HT1"
      }
    }
  ]
};

boot();

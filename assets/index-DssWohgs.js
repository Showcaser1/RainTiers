var vg = t => {
    throw TypeError(t)
}
;
var td = (t, e, r) => e.has(t) || vg("Cannot " + r);
var C = (t, e, r) => (td(t, e, "read from private field"),
r ? r.call(t) : e.get(t))
  , oe = (t, e, r) => e.has(t) ? vg("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r)
  , G = (t, e, r, i) => (td(t, e, "write to private field"),
i ? i.call(t, r) : e.set(t, r),
r)
  , Se = (t, e, r) => (td(t, e, "access private method"),
r);
var cl = (t, e, r, i) => ({
    set _(a) {
        G(t, e, a, r)
    },
    get _() {
        return C(t, e, i)
    }
});
function yb(t, e) {
    for (var r = 0; r < e.length; r++) {
        const i = e[r];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const a in i)
                if (a !== "default" && !(a in t)) {
                    const l = Object.getOwnPropertyDescriptor(i, a);
                    l && Object.defineProperty(t, a, l.get ? l : {
                        enumerable: !0,
                        get: () => i[a]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        i(a);
    new MutationObserver(a => {
        for (const l of a)
            if (l.type === "childList")
                for (const c of l.addedNodes)
                    c.tagName === "LINK" && c.rel === "modulepreload" && i(c)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(a) {
        const l = {};
        return a.integrity && (l.integrity = a.integrity),
        a.referrerPolicy && (l.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials" ? l.credentials = "include" : a.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin",
        l
    }
    function i(a) {
        if (a.ep)
            return;
        a.ep = !0;
        const l = r(a);
        fetch(a.href, l)
    }
}
)();
function l0(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var nd = {
    exports: {}
}
  , oo = {}
  , rd = {
    exports: {}
}
  , ke = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wg;
function vb() {
    if (wg)
        return ke;
    wg = 1;
    var t = Symbol.for("react.element")
      , e = Symbol.for("react.portal")
      , r = Symbol.for("react.fragment")
      , i = Symbol.for("react.strict_mode")
      , a = Symbol.for("react.profiler")
      , l = Symbol.for("react.provider")
      , c = Symbol.for("react.context")
      , d = Symbol.for("react.forward_ref")
      , h = Symbol.for("react.suspense")
      , m = Symbol.for("react.memo")
      , g = Symbol.for("react.lazy")
      , y = Symbol.iterator;
    function w(N) {
        return N === null || typeof N != "object" ? null : (N = y && N[y] || N["@@iterator"],
        typeof N == "function" ? N : null)
    }
    var E = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , x = Object.assign
      , k = {};
    function S(N, z, ye) {
        this.props = N,
        this.context = z,
        this.refs = k,
        this.updater = ye || E
    }
    S.prototype.isReactComponent = {},
    S.prototype.setState = function(N, z) {
        if (typeof N != "object" && typeof N != "function" && N != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, N, z, "setState")
    }
    ,
    S.prototype.forceUpdate = function(N) {
        this.updater.enqueueForceUpdate(this, N, "forceUpdate")
    }
    ;
    function R() {}
    R.prototype = S.prototype;
    function U(N, z, ye) {
        this.props = N,
        this.context = z,
        this.refs = k,
        this.updater = ye || E
    }
    var L = U.prototype = new R;
    L.constructor = U,
    x(L, S.prototype),
    L.isPureReactComponent = !0;
    var _ = Array.isArray
      , D = Object.prototype.hasOwnProperty
      , K = {
        current: null
    }
      , Y = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function I(N, z, ye) {
        var ve, ue = {}, he = null, Ne = null;
        if (z != null)
            for (ve in z.ref !== void 0 && (Ne = z.ref),
            z.key !== void 0 && (he = "" + z.key),
            z)
                D.call(z, ve) && !Y.hasOwnProperty(ve) && (ue[ve] = z[ve]);
        var _e = arguments.length - 2;
        if (_e === 1)
            ue.children = ye;
        else if (1 < _e) {
            for (var we = Array(_e), pt = 0; pt < _e; pt++)
                we[pt] = arguments[pt + 2];
            ue.children = we
        }
        if (N && N.defaultProps)
            for (ve in _e = N.defaultProps,
            _e)
                ue[ve] === void 0 && (ue[ve] = _e[ve]);
        return {
            $$typeof: t,
            type: N,
            key: he,
            ref: Ne,
            props: ue,
            _owner: K.current
        }
    }
    function J(N, z) {
        return {
            $$typeof: t,
            type: N.type,
            key: z,
            ref: N.ref,
            props: N.props,
            _owner: N._owner
        }
    }
    function me(N) {
        return typeof N == "object" && N !== null && N.$$typeof === t
    }
    function de(N) {
        var z = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + N.replace(/[=:]/g, function(ye) {
            return z[ye]
        })
    }
    var Ce = /\/+/g;
    function Le(N, z) {
        return typeof N == "object" && N !== null && N.key != null ? de("" + N.key) : z.toString(36)
    }
    function Ae(N, z, ye, ve, ue) {
        var he = typeof N;
        (he === "undefined" || he === "boolean") && (N = null);
        var Ne = !1;
        if (N === null)
            Ne = !0;
        else
            switch (he) {
            case "string":
            case "number":
                Ne = !0;
                break;
            case "object":
                switch (N.$$typeof) {
                case t:
                case e:
                    Ne = !0
                }
            }
        if (Ne)
            return Ne = N,
            ue = ue(Ne),
            N = ve === "" ? "." + Le(Ne, 0) : ve,
            _(ue) ? (ye = "",
            N != null && (ye = N.replace(Ce, "$&/") + "/"),
            Ae(ue, z, ye, "", function(pt) {
                return pt
            })) : ue != null && (me(ue) && (ue = J(ue, ye + (!ue.key || Ne && Ne.key === ue.key ? "" : ("" + ue.key).replace(Ce, "$&/") + "/") + N)),
            z.push(ue)),
            1;
        if (Ne = 0,
        ve = ve === "" ? "." : ve + ":",
        _(N))
            for (var _e = 0; _e < N.length; _e++) {
                he = N[_e];
                var we = ve + Le(he, _e);
                Ne += Ae(he, z, ye, we, ue)
            }
        else if (we = w(N),
        typeof we == "function")
            for (N = we.call(N),
            _e = 0; !(he = N.next()).done; )
                he = he.value,
                we = ve + Le(he, _e++),
                Ne += Ae(he, z, ye, we, ue);
        else if (he === "object")
            throw z = String(N),
            Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
        return Ne
    }
    function De(N, z, ye) {
        if (N == null)
            return N;
        var ve = []
          , ue = 0;
        return Ae(N, ve, "", "", function(he) {
            return z.call(ye, he, ue++)
        }),
        ve
    }
    function xe(N) {
        if (N._status === -1) {
            var z = N._result;
            z = z(),
            z.then(function(ye) {
                (N._status === 0 || N._status === -1) && (N._status = 1,
                N._result = ye)
            }, function(ye) {
                (N._status === 0 || N._status === -1) && (N._status = 2,
                N._result = ye)
            }),
            N._status === -1 && (N._status = 0,
            N._result = z)
        }
        if (N._status === 1)
            return N._result.default;
        throw N._result
    }
    var fe = {
        current: null
    }
      , W = {
        transition: null
    }
      , se = {
        ReactCurrentDispatcher: fe,
        ReactCurrentBatchConfig: W,
        ReactCurrentOwner: K
    };
    function B() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return ke.Children = {
        map: De,
        forEach: function(N, z, ye) {
            De(N, function() {
                z.apply(this, arguments)
            }, ye)
        },
        count: function(N) {
            var z = 0;
            return De(N, function() {
                z++
            }),
            z
        },
        toArray: function(N) {
            return De(N, function(z) {
                return z
            }) || []
        },
        only: function(N) {
            if (!me(N))
                throw Error("React.Children.only expected to receive a single React element child.");
            return N
        }
    },
    ke.Component = S,
    ke.Fragment = r,
    ke.Profiler = a,
    ke.PureComponent = U,
    ke.StrictMode = i,
    ke.Suspense = h,
    ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se,
    ke.act = B,
    ke.cloneElement = function(N, z, ye) {
        if (N == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
        var ve = x({}, N.props)
          , ue = N.key
          , he = N.ref
          , Ne = N._owner;
        if (z != null) {
            if (z.ref !== void 0 && (he = z.ref,
            Ne = K.current),
            z.key !== void 0 && (ue = "" + z.key),
            N.type && N.type.defaultProps)
                var _e = N.type.defaultProps;
            for (we in z)
                D.call(z, we) && !Y.hasOwnProperty(we) && (ve[we] = z[we] === void 0 && _e !== void 0 ? _e[we] : z[we])
        }
        var we = arguments.length - 2;
        if (we === 1)
            ve.children = ye;
        else if (1 < we) {
            _e = Array(we);
            for (var pt = 0; pt < we; pt++)
                _e[pt] = arguments[pt + 2];
            ve.children = _e
        }
        return {
            $$typeof: t,
            type: N.type,
            key: ue,
            ref: he,
            props: ve,
            _owner: Ne
        }
    }
    ,
    ke.createContext = function(N) {
        return N = {
            $$typeof: c,
            _currentValue: N,
            _currentValue2: N,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        N.Provider = {
            $$typeof: l,
            _context: N
        },
        N.Consumer = N
    }
    ,
    ke.createElement = I,
    ke.createFactory = function(N) {
        var z = I.bind(null, N);
        return z.type = N,
        z
    }
    ,
    ke.createRef = function() {
        return {
            current: null
        }
    }
    ,
    ke.forwardRef = function(N) {
        return {
            $$typeof: d,
            render: N
        }
    }
    ,
    ke.isValidElement = me,
    ke.lazy = function(N) {
        return {
            $$typeof: g,
            _payload: {
                _status: -1,
                _result: N
            },
            _init: xe
        }
    }
    ,
    ke.memo = function(N, z) {
        return {
            $$typeof: m,
            type: N,
            compare: z === void 0 ? null : z
        }
    }
    ,
    ke.startTransition = function(N) {
        var z = W.transition;
        W.transition = {};
        try {
            N()
        } finally {
            W.transition = z
        }
    }
    ,
    ke.unstable_act = B,
    ke.useCallback = function(N, z) {
        return fe.current.useCallback(N, z)
    }
    ,
    ke.useContext = function(N) {
        return fe.current.useContext(N)
    }
    ,
    ke.useDebugValue = function() {}
    ,
    ke.useDeferredValue = function(N) {
        return fe.current.useDeferredValue(N)
    }
    ,
    ke.useEffect = function(N, z) {
        return fe.current.useEffect(N, z)
    }
    ,
    ke.useId = function() {
        return fe.current.useId()
    }
    ,
    ke.useImperativeHandle = function(N, z, ye) {
        return fe.current.useImperativeHandle(N, z, ye)
    }
    ,
    ke.useInsertionEffect = function(N, z) {
        return fe.current.useInsertionEffect(N, z)
    }
    ,
    ke.useLayoutEffect = function(N, z) {
        return fe.current.useLayoutEffect(N, z)
    }
    ,
    ke.useMemo = function(N, z) {
        return fe.current.useMemo(N, z)
    }
    ,
    ke.useReducer = function(N, z, ye) {
        return fe.current.useReducer(N, z, ye)
    }
    ,
    ke.useRef = function(N) {
        return fe.current.useRef(N)
    }
    ,
    ke.useState = function(N) {
        return fe.current.useState(N)
    }
    ,
    ke.useSyncExternalStore = function(N, z, ye) {
        return fe.current.useSyncExternalStore(N, z, ye)
    }
    ,
    ke.useTransition = function() {
        return fe.current.useTransition()
    }
    ,
    ke.version = "18.3.1",
    ke
}
var xg;
function Cf() {
    return xg || (xg = 1,
    rd.exports = vb()),
    rd.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sg;
function wb() {
    if (Sg)
        return oo;
    Sg = 1;
    var t = Cf()
      , e = Symbol.for("react.element")
      , r = Symbol.for("react.fragment")
      , i = Object.prototype.hasOwnProperty
      , a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , l = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function c(d, h, m) {
        var g, y = {}, w = null, E = null;
        m !== void 0 && (w = "" + m),
        h.key !== void 0 && (w = "" + h.key),
        h.ref !== void 0 && (E = h.ref);
        for (g in h)
            i.call(h, g) && !l.hasOwnProperty(g) && (y[g] = h[g]);
        if (d && d.defaultProps)
            for (g in h = d.defaultProps,
            h)
                y[g] === void 0 && (y[g] = h[g]);
        return {
            $$typeof: e,
            type: d,
            key: w,
            ref: E,
            props: y,
            _owner: a.current
        }
    }
    return oo.Fragment = r,
    oo.jsx = c,
    oo.jsxs = c,
    oo
}
var bg;
function xb() {
    return bg || (bg = 1,
    nd.exports = wb()),
    nd.exports
}
var b = xb()
  , j = Cf();
const Sb = l0(j)
  , bb = yb({
    __proto__: null,
    default: Sb
}, [j]);
var dl = {}
  , sd = {
    exports: {}
}
  , Ot = {}
  , id = {
    exports: {}
}
  , od = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kg;
function kb() {
    return kg || (kg = 1,
    (function(t) {
        function e(W, se) {
            var B = W.length;
            W.push(se);
            e: for (; 0 < B; ) {
                var N = B - 1 >>> 1
                  , z = W[N];
                if (0 < a(z, se))
                    W[N] = se,
                    W[B] = z,
                    B = N;
                else
                    break e
            }
        }
        function r(W) {
            return W.length === 0 ? null : W[0]
        }
        function i(W) {
            if (W.length === 0)
                return null;
            var se = W[0]
              , B = W.pop();
            if (B !== se) {
                W[0] = B;
                e: for (var N = 0, z = W.length, ye = z >>> 1; N < ye; ) {
                    var ve = 2 * (N + 1) - 1
                      , ue = W[ve]
                      , he = ve + 1
                      , Ne = W[he];
                    if (0 > a(ue, B))
                        he < z && 0 > a(Ne, ue) ? (W[N] = Ne,
                        W[he] = B,
                        N = he) : (W[N] = ue,
                        W[ve] = B,
                        N = ve);
                    else if (he < z && 0 > a(Ne, B))
                        W[N] = Ne,
                        W[he] = B,
                        N = he;
                    else
                        break e
                }
            }
            return se
        }
        function a(W, se) {
            var B = W.sortIndex - se.sortIndex;
            return B !== 0 ? B : W.id - se.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var l = performance;
            t.unstable_now = function() {
                return l.now()
            }
        } else {
            var c = Date
              , d = c.now();
            t.unstable_now = function() {
                return c.now() - d
            }
        }
        var h = []
          , m = []
          , g = 1
          , y = null
          , w = 3
          , E = !1
          , x = !1
          , k = !1
          , S = typeof setTimeout == "function" ? setTimeout : null
          , R = typeof clearTimeout == "function" ? clearTimeout : null
          , U = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function L(W) {
            for (var se = r(m); se !== null; ) {
                if (se.callback === null)
                    i(m);
                else if (se.startTime <= W)
                    i(m),
                    se.sortIndex = se.expirationTime,
                    e(h, se);
                else
                    break;
                se = r(m)
            }
        }
        function _(W) {
            if (k = !1,
            L(W),
            !x)
                if (r(h) !== null)
                    x = !0,
                    xe(D);
                else {
                    var se = r(m);
                    se !== null && fe(_, se.startTime - W)
                }
        }
        function D(W, se) {
            x = !1,
            k && (k = !1,
            R(I),
            I = -1),
            E = !0;
            var B = w;
            try {
                for (L(se),
                y = r(h); y !== null && (!(y.expirationTime > se) || W && !de()); ) {
                    var N = y.callback;
                    if (typeof N == "function") {
                        y.callback = null,
                        w = y.priorityLevel;
                        var z = N(y.expirationTime <= se);
                        se = t.unstable_now(),
                        typeof z == "function" ? y.callback = z : y === r(h) && i(h),
                        L(se)
                    } else
                        i(h);
                    y = r(h)
                }
                if (y !== null)
                    var ye = !0;
                else {
                    var ve = r(m);
                    ve !== null && fe(_, ve.startTime - se),
                    ye = !1
                }
                return ye
            } finally {
                y = null,
                w = B,
                E = !1
            }
        }
        var K = !1
          , Y = null
          , I = -1
          , J = 5
          , me = -1;
        function de() {
            return !(t.unstable_now() - me < J)
        }
        function Ce() {
            if (Y !== null) {
                var W = t.unstable_now();
                me = W;
                var se = !0;
                try {
                    se = Y(!0, W)
                } finally {
                    se ? Le() : (K = !1,
                    Y = null)
                }
            } else
                K = !1
        }
        var Le;
        if (typeof U == "function")
            Le = function() {
                U(Ce)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Ae = new MessageChannel
              , De = Ae.port2;
            Ae.port1.onmessage = Ce,
            Le = function() {
                De.postMessage(null)
            }
        } else
            Le = function() {
                S(Ce, 0)
            }
            ;
        function xe(W) {
            Y = W,
            K || (K = !0,
            Le())
        }
        function fe(W, se) {
            I = S(function() {
                W(t.unstable_now())
            }, se)
        }
        t.unstable_IdlePriority = 5,
        t.unstable_ImmediatePriority = 1,
        t.unstable_LowPriority = 4,
        t.unstable_NormalPriority = 3,
        t.unstable_Profiling = null,
        t.unstable_UserBlockingPriority = 2,
        t.unstable_cancelCallback = function(W) {
            W.callback = null
        }
        ,
        t.unstable_continueExecution = function() {
            x || E || (x = !0,
            xe(D))
        }
        ,
        t.unstable_forceFrameRate = function(W) {
            0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : J = 0 < W ? Math.floor(1e3 / W) : 5
        }
        ,
        t.unstable_getCurrentPriorityLevel = function() {
            return w
        }
        ,
        t.unstable_getFirstCallbackNode = function() {
            return r(h)
        }
        ,
        t.unstable_next = function(W) {
            switch (w) {
            case 1:
            case 2:
            case 3:
                var se = 3;
                break;
            default:
                se = w
            }
            var B = w;
            w = se;
            try {
                return W()
            } finally {
                w = B
            }
        }
        ,
        t.unstable_pauseExecution = function() {}
        ,
        t.unstable_requestPaint = function() {}
        ,
        t.unstable_runWithPriority = function(W, se) {
            switch (W) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                W = 3
            }
            var B = w;
            w = W;
            try {
                return se()
            } finally {
                w = B
            }
        }
        ,
        t.unstable_scheduleCallback = function(W, se, B) {
            var N = t.unstable_now();
            switch (typeof B == "object" && B !== null ? (B = B.delay,
            B = typeof B == "number" && 0 < B ? N + B : N) : B = N,
            W) {
            case 1:
                var z = -1;
                break;
            case 2:
                z = 250;
                break;
            case 5:
                z = 1073741823;
                break;
            case 4:
                z = 1e4;
                break;
            default:
                z = 5e3
            }
            return z = B + z,
            W = {
                id: g++,
                callback: se,
                priorityLevel: W,
                startTime: B,
                expirationTime: z,
                sortIndex: -1
            },
            B > N ? (W.sortIndex = B,
            e(m, W),
            r(h) === null && W === r(m) && (k ? (R(I),
            I = -1) : k = !0,
            fe(_, B - N))) : (W.sortIndex = z,
            e(h, W),
            x || E || (x = !0,
            xe(D))),
            W
        }
        ,
        t.unstable_shouldYield = de,
        t.unstable_wrapCallback = function(W) {
            var se = w;
            return function() {
                var B = w;
                w = se;
                try {
                    return W.apply(this, arguments)
                } finally {
                    w = B
                }
            }
        }
    }
    )(od)),
    od
}
var Eg;
function Eb() {
    return Eg || (Eg = 1,
    id.exports = kb()),
    id.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tg;
function Tb() {
    if (Tg)
        return Ot;
    Tg = 1;
    var t = Cf()
      , e = Eb();
    function r(n) {
        for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
            s += "&args[]=" + encodeURIComponent(arguments[o]);
        return "Minified React error #" + n + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var i = new Set
      , a = {};
    function l(n, s) {
        c(n, s),
        c(n + "Capture", s)
    }
    function c(n, s) {
        for (a[n] = s,
        n = 0; n < s.length; n++)
            i.add(s[n])
    }
    var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , h = Object.prototype.hasOwnProperty
      , m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , g = {}
      , y = {};
    function w(n) {
        return h.call(y, n) ? !0 : h.call(g, n) ? !1 : m.test(n) ? y[n] = !0 : (g[n] = !0,
        !1)
    }
    function E(n, s, o, u) {
        if (o !== null && o.type === 0)
            return !1;
        switch (typeof s) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return u ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5),
            n !== "data-" && n !== "aria-");
        default:
            return !1
        }
    }
    function x(n, s, o, u) {
        if (s === null || typeof s > "u" || E(n, s, o, u))
            return !0;
        if (u)
            return !1;
        if (o !== null)
            switch (o.type) {
            case 3:
                return !s;
            case 4:
                return s === !1;
            case 5:
                return isNaN(s);
            case 6:
                return isNaN(s) || 1 > s
            }
        return !1
    }
    function k(n, s, o, u, f, p, v) {
        this.acceptsBooleans = s === 2 || s === 3 || s === 4,
        this.attributeName = u,
        this.attributeNamespace = f,
        this.mustUseProperty = o,
        this.propertyName = n,
        this.type = s,
        this.sanitizeURL = p,
        this.removeEmptyString = v
    }
    var S = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
        S[n] = new k(n,0,!1,n,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
        var s = n[0];
        S[s] = new k(s,1,!1,n[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
        S[n] = new k(n,2,!1,n.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
        S[n] = new k(n,2,!1,n,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
        S[n] = new k(n,3,!1,n.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(n) {
        S[n] = new k(n,3,!0,n,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(n) {
        S[n] = new k(n,4,!1,n,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(n) {
        S[n] = new k(n,6,!1,n,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(n) {
        S[n] = new k(n,5,!1,n.toLowerCase(),null,!1,!1)
    });
    var R = /[\-:]([a-z])/g;
    function U(n) {
        return n[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
        var s = n.replace(R, U);
        S[s] = new k(s,1,!1,n,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
        var s = n.replace(R, U);
        S[s] = new k(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
        var s = n.replace(R, U);
        S[s] = new k(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(n) {
        S[n] = new k(n,1,!1,n.toLowerCase(),null,!1,!1)
    }),
    S.xlinkHref = new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(n) {
        S[n] = new k(n,1,!1,n.toLowerCase(),null,!0,!0)
    });
    function L(n, s, o, u) {
        var f = S.hasOwnProperty(s) ? S[s] : null;
        (f !== null ? f.type !== 0 : u || !(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (x(s, o, f, u) && (o = null),
        u || f === null ? w(s) && (o === null ? n.removeAttribute(s) : n.setAttribute(s, "" + o)) : f.mustUseProperty ? n[f.propertyName] = o === null ? f.type === 3 ? !1 : "" : o : (s = f.attributeName,
        u = f.attributeNamespace,
        o === null ? n.removeAttribute(s) : (f = f.type,
        o = f === 3 || f === 4 && o === !0 ? "" : "" + o,
        u ? n.setAttributeNS(u, s, o) : n.setAttribute(s, o))))
    }
    var _ = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , D = Symbol.for("react.element")
      , K = Symbol.for("react.portal")
      , Y = Symbol.for("react.fragment")
      , I = Symbol.for("react.strict_mode")
      , J = Symbol.for("react.profiler")
      , me = Symbol.for("react.provider")
      , de = Symbol.for("react.context")
      , Ce = Symbol.for("react.forward_ref")
      , Le = Symbol.for("react.suspense")
      , Ae = Symbol.for("react.suspense_list")
      , De = Symbol.for("react.memo")
      , xe = Symbol.for("react.lazy")
      , fe = Symbol.for("react.offscreen")
      , W = Symbol.iterator;
    function se(n) {
        return n === null || typeof n != "object" ? null : (n = W && n[W] || n["@@iterator"],
        typeof n == "function" ? n : null)
    }
    var B = Object.assign, N;
    function z(n) {
        if (N === void 0)
            try {
                throw Error()
            } catch (o) {
                var s = o.stack.trim().match(/\n( *(at )?)/);
                N = s && s[1] || ""
            }
        return `
` + N + n
    }
    var ye = !1;
    function ve(n, s) {
        if (!n || ye)
            return "";
        ye = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (s)
                if (s = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(s.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(s, [])
                    } catch (F) {
                        var u = F
                    }
                    Reflect.construct(n, [], s)
                } else {
                    try {
                        s.call()
                    } catch (F) {
                        u = F
                    }
                    n.call(s.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (F) {
                    u = F
                }
                n()
            }
        } catch (F) {
            if (F && u && typeof F.stack == "string") {
                for (var f = F.stack.split(`
`), p = u.stack.split(`
`), v = f.length - 1, T = p.length - 1; 1 <= v && 0 <= T && f[v] !== p[T]; )
                    T--;
                for (; 1 <= v && 0 <= T; v--,
                T--)
                    if (f[v] !== p[T]) {
                        if (v !== 1 || T !== 1)
                            do
                                if (v--,
                                T--,
                                0 > T || f[v] !== p[T]) {
                                    var P = `
` + f[v].replace(" at new ", " at ");
                                    return n.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", n.displayName)),
                                    P
                                }
                            while (1 <= v && 0 <= T);
                        break
                    }
            }
        } finally {
            ye = !1,
            Error.prepareStackTrace = o
        }
        return (n = n ? n.displayName || n.name : "") ? z(n) : ""
    }
    function ue(n) {
        switch (n.tag) {
        case 5:
            return z(n.type);
        case 16:
            return z("Lazy");
        case 13:
            return z("Suspense");
        case 19:
            return z("SuspenseList");
        case 0:
        case 2:
        case 15:
            return n = ve(n.type, !1),
            n;
        case 11:
            return n = ve(n.type.render, !1),
            n;
        case 1:
            return n = ve(n.type, !0),
            n;
        default:
            return ""
        }
    }
    function he(n) {
        if (n == null)
            return null;
        if (typeof n == "function")
            return n.displayName || n.name || null;
        if (typeof n == "string")
            return n;
        switch (n) {
        case Y:
            return "Fragment";
        case K:
            return "Portal";
        case J:
            return "Profiler";
        case I:
            return "StrictMode";
        case Le:
            return "Suspense";
        case Ae:
            return "SuspenseList"
        }
        if (typeof n == "object")
            switch (n.$$typeof) {
            case de:
                return (n.displayName || "Context") + ".Consumer";
            case me:
                return (n._context.displayName || "Context") + ".Provider";
            case Ce:
                var s = n.render;
                return n = n.displayName,
                n || (n = s.displayName || s.name || "",
                n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"),
                n;
            case De:
                return s = n.displayName || null,
                s !== null ? s : he(n.type) || "Memo";
            case xe:
                s = n._payload,
                n = n._init;
                try {
                    return he(n(s))
                } catch {}
            }
        return null
    }
    function Ne(n) {
        var s = n.type;
        switch (n.tag) {
        case 24:
            return "Cache";
        case 9:
            return (s.displayName || "Context") + ".Consumer";
        case 10:
            return (s._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return n = s.render,
            n = n.displayName || n.name || "",
            s.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return s;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return he(s);
        case 8:
            return s === I ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof s == "function")
                return s.displayName || s.name || null;
            if (typeof s == "string")
                return s
        }
        return null
    }
    function _e(n) {
        switch (typeof n) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return n;
        case "object":
            return n;
        default:
            return ""
        }
    }
    function we(n) {
        var s = n.type;
        return (n = n.nodeName) && n.toLowerCase() === "input" && (s === "checkbox" || s === "radio")
    }
    function pt(n) {
        var s = we(n) ? "checked" : "value"
          , o = Object.getOwnPropertyDescriptor(n.constructor.prototype, s)
          , u = "" + n[s];
        if (!n.hasOwnProperty(s) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
            var f = o.get
              , p = o.set;
            return Object.defineProperty(n, s, {
                configurable: !0,
                get: function() {
                    return f.call(this)
                },
                set: function(v) {
                    u = "" + v,
                    p.call(this, v)
                }
            }),
            Object.defineProperty(n, s, {
                enumerable: o.enumerable
            }),
            {
                getValue: function() {
                    return u
                },
                setValue: function(v) {
                    u = "" + v
                },
                stopTracking: function() {
                    n._valueTracker = null,
                    delete n[s]
                }
            }
        }
    }
    function Pn(n) {
        n._valueTracker || (n._valueTracker = pt(n))
    }
    function Mr(n) {
        if (!n)
            return !1;
        var s = n._valueTracker;
        if (!s)
            return !0;
        var o = s.getValue()
          , u = "";
        return n && (u = we(n) ? n.checked ? "true" : "false" : n.value),
        n = u,
        n !== o ? (s.setValue(n),
        !0) : !1
    }
    function Kn(n) {
        if (n = n || (typeof document < "u" ? document : void 0),
        typeof n > "u")
            return null;
        try {
            return n.activeElement || n.body
        } catch {
            return n.body
        }
    }
    function Qn(n, s) {
        var o = s.checked;
        return B({}, s, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: o ?? n._wrapperState.initialChecked
        })
    }
    function Th(n, s) {
        var o = s.defaultValue == null ? "" : s.defaultValue
          , u = s.checked != null ? s.checked : s.defaultChecked;
        o = _e(s.value != null ? s.value : o),
        n._wrapperState = {
            initialChecked: u,
            initialValue: o,
            controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null
        }
    }
    function Ch(n, s) {
        s = s.checked,
        s != null && L(n, "checked", s, !1)
    }
    function uu(n, s) {
        Ch(n, s);
        var o = _e(s.value)
          , u = s.type;
        if (o != null)
            u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
        else if (u === "submit" || u === "reset") {
            n.removeAttribute("value");
            return
        }
        s.hasOwnProperty("value") ? cu(n, s.type, o) : s.hasOwnProperty("defaultValue") && cu(n, s.type, _e(s.defaultValue)),
        s.checked == null && s.defaultChecked != null && (n.defaultChecked = !!s.defaultChecked)
    }
    function Ph(n, s, o) {
        if (s.hasOwnProperty("value") || s.hasOwnProperty("defaultValue")) {
            var u = s.type;
            if (!(u !== "submit" && u !== "reset" || s.value !== void 0 && s.value !== null))
                return;
            s = "" + n._wrapperState.initialValue,
            o || s === n.value || (n.value = s),
            n.defaultValue = s
        }
        o = n.name,
        o !== "" && (n.name = ""),
        n.defaultChecked = !!n._wrapperState.initialChecked,
        o !== "" && (n.name = o)
    }
    function cu(n, s, o) {
        (s !== "number" || Kn(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o))
    }
    var Si = Array.isArray;
    function xs(n, s, o, u) {
        if (n = n.options,
        s) {
            s = {};
            for (var f = 0; f < o.length; f++)
                s["$" + o[f]] = !0;
            for (o = 0; o < n.length; o++)
                f = s.hasOwnProperty("$" + n[o].value),
                n[o].selected !== f && (n[o].selected = f),
                f && u && (n[o].defaultSelected = !0)
        } else {
            for (o = "" + _e(o),
            s = null,
            f = 0; f < n.length; f++) {
                if (n[f].value === o) {
                    n[f].selected = !0,
                    u && (n[f].defaultSelected = !0);
                    return
                }
                s !== null || n[f].disabled || (s = n[f])
            }
            s !== null && (s.selected = !0)
        }
    }
    function du(n, s) {
        if (s.dangerouslySetInnerHTML != null)
            throw Error(r(91));
        return B({}, s, {
            value: void 0,
            defaultValue: void 0,
            children: "" + n._wrapperState.initialValue
        })
    }
    function _h(n, s) {
        var o = s.value;
        if (o == null) {
            if (o = s.children,
            s = s.defaultValue,
            o != null) {
                if (s != null)
                    throw Error(r(92));
                if (Si(o)) {
                    if (1 < o.length)
                        throw Error(r(93));
                    o = o[0]
                }
                s = o
            }
            s == null && (s = ""),
            o = s
        }
        n._wrapperState = {
            initialValue: _e(o)
        }
    }
    function Rh(n, s) {
        var o = _e(s.value)
          , u = _e(s.defaultValue);
        o != null && (o = "" + o,
        o !== n.value && (n.value = o),
        s.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)),
        u != null && (n.defaultValue = "" + u)
    }
    function Ah(n) {
        var s = n.textContent;
        s === n._wrapperState.initialValue && s !== "" && s !== null && (n.value = s)
    }
    function Nh(n) {
        switch (n) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function fu(n, s) {
        return n == null || n === "http://www.w3.org/1999/xhtml" ? Nh(s) : n === "http://www.w3.org/2000/svg" && s === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n
    }
    var na, Oh = (function(n) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(s, o, u, f) {
            MSApp.execUnsafeLocalFunction(function() {
                return n(s, o, u, f)
            })
        }
        : n
    }
    )(function(n, s) {
        if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in n)
            n.innerHTML = s;
        else {
            for (na = na || document.createElement("div"),
            na.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>",
            s = na.firstChild; n.firstChild; )
                n.removeChild(n.firstChild);
            for (; s.firstChild; )
                n.appendChild(s.firstChild)
        }
    });
    function bi(n, s) {
        if (s) {
            var o = n.firstChild;
            if (o && o === n.lastChild && o.nodeType === 3) {
                o.nodeValue = s;
                return
            }
        }
        n.textContent = s
    }
    var ki = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , S1 = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ki).forEach(function(n) {
        S1.forEach(function(s) {
            s = s + n.charAt(0).toUpperCase() + n.substring(1),
            ki[s] = ki[n]
        })
    });
    function jh(n, s, o) {
        return s == null || typeof s == "boolean" || s === "" ? "" : o || typeof s != "number" || s === 0 || ki.hasOwnProperty(n) && ki[n] ? ("" + s).trim() : s + "px"
    }
    function Lh(n, s) {
        n = n.style;
        for (var o in s)
            if (s.hasOwnProperty(o)) {
                var u = o.indexOf("--") === 0
                  , f = jh(o, s[o], u);
                o === "float" && (o = "cssFloat"),
                u ? n.setProperty(o, f) : n[o] = f
            }
    }
    var b1 = B({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function hu(n, s) {
        if (s) {
            if (b1[n] && (s.children != null || s.dangerouslySetInnerHTML != null))
                throw Error(r(137, n));
            if (s.dangerouslySetInnerHTML != null) {
                if (s.children != null)
                    throw Error(r(60));
                if (typeof s.dangerouslySetInnerHTML != "object" || !("__html"in s.dangerouslySetInnerHTML))
                    throw Error(r(61))
            }
            if (s.style != null && typeof s.style != "object")
                throw Error(r(62))
        }
    }
    function pu(n, s) {
        if (n.indexOf("-") === -1)
            return typeof s.is == "string";
        switch (n) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var mu = null;
    function gu(n) {
        return n = n.target || n.srcElement || window,
        n.correspondingUseElement && (n = n.correspondingUseElement),
        n.nodeType === 3 ? n.parentNode : n
    }
    var yu = null
      , Ss = null
      , bs = null;
    function Mh(n) {
        if (n = qi(n)) {
            if (typeof yu != "function")
                throw Error(r(280));
            var s = n.stateNode;
            s && (s = Ta(s),
            yu(n.stateNode, n.type, s))
        }
    }
    function Dh(n) {
        Ss ? bs ? bs.push(n) : bs = [n] : Ss = n
    }
    function Ih() {
        if (Ss) {
            var n = Ss
              , s = bs;
            if (bs = Ss = null,
            Mh(n),
            s)
                for (n = 0; n < s.length; n++)
                    Mh(s[n])
        }
    }
    function Fh(n, s) {
        return n(s)
    }
    function Vh() {}
    var vu = !1;
    function Uh(n, s, o) {
        if (vu)
            return n(s, o);
        vu = !0;
        try {
            return Fh(n, s, o)
        } finally {
            vu = !1,
            (Ss !== null || bs !== null) && (Vh(),
            Ih())
        }
    }
    function Ei(n, s) {
        var o = n.stateNode;
        if (o === null)
            return null;
        var u = Ta(o);
        if (u === null)
            return null;
        o = u[s];
        e: switch (s) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (u = !u.disabled) || (n = n.type,
            u = !(n === "button" || n === "input" || n === "select" || n === "textarea")),
            n = !u;
            break e;
        default:
            n = !1
        }
        if (n)
            return null;
        if (o && typeof o != "function")
            throw Error(r(231, s, typeof o));
        return o
    }
    var wu = !1;
    if (d)
        try {
            var Ti = {};
            Object.defineProperty(Ti, "passive", {
                get: function() {
                    wu = !0
                }
            }),
            window.addEventListener("test", Ti, Ti),
            window.removeEventListener("test", Ti, Ti)
        } catch {
            wu = !1
        }
    function k1(n, s, o, u, f, p, v, T, P) {
        var F = Array.prototype.slice.call(arguments, 3);
        try {
            s.apply(o, F)
        } catch (H) {
            this.onError(H)
        }
    }
    var Ci = !1
      , ra = null
      , sa = !1
      , xu = null
      , E1 = {
        onError: function(n) {
            Ci = !0,
            ra = n
        }
    };
    function T1(n, s, o, u, f, p, v, T, P) {
        Ci = !1,
        ra = null,
        k1.apply(E1, arguments)
    }
    function C1(n, s, o, u, f, p, v, T, P) {
        if (T1.apply(this, arguments),
        Ci) {
            if (Ci) {
                var F = ra;
                Ci = !1,
                ra = null
            } else
                throw Error(r(198));
            sa || (sa = !0,
            xu = F)
        }
    }
    function Dr(n) {
        var s = n
          , o = n;
        if (n.alternate)
            for (; s.return; )
                s = s.return;
        else {
            n = s;
            do
                s = n,
                (s.flags & 4098) !== 0 && (o = s.return),
                n = s.return;
            while (n)
        }
        return s.tag === 3 ? o : null
    }
    function Bh(n) {
        if (n.tag === 13) {
            var s = n.memoizedState;
            if (s === null && (n = n.alternate,
            n !== null && (s = n.memoizedState)),
            s !== null)
                return s.dehydrated
        }
        return null
    }
    function zh(n) {
        if (Dr(n) !== n)
            throw Error(r(188))
    }
    function P1(n) {
        var s = n.alternate;
        if (!s) {
            if (s = Dr(n),
            s === null)
                throw Error(r(188));
            return s !== n ? null : n
        }
        for (var o = n, u = s; ; ) {
            var f = o.return;
            if (f === null)
                break;
            var p = f.alternate;
            if (p === null) {
                if (u = f.return,
                u !== null) {
                    o = u;
                    continue
                }
                break
            }
            if (f.child === p.child) {
                for (p = f.child; p; ) {
                    if (p === o)
                        return zh(f),
                        n;
                    if (p === u)
                        return zh(f),
                        s;
                    p = p.sibling
                }
                throw Error(r(188))
            }
            if (o.return !== u.return)
                o = f,
                u = p;
            else {
                for (var v = !1, T = f.child; T; ) {
                    if (T === o) {
                        v = !0,
                        o = f,
                        u = p;
                        break
                    }
                    if (T === u) {
                        v = !0,
                        u = f,
                        o = p;
                        break
                    }
                    T = T.sibling
                }
                if (!v) {
                    for (T = p.child; T; ) {
                        if (T === o) {
                            v = !0,
                            o = p,
                            u = f;
                            break
                        }
                        if (T === u) {
                            v = !0,
                            u = p,
                            o = f;
                            break
                        }
                        T = T.sibling
                    }
                    if (!v)
                        throw Error(r(189))
                }
            }
            if (o.alternate !== u)
                throw Error(r(190))
        }
        if (o.tag !== 3)
            throw Error(r(188));
        return o.stateNode.current === o ? n : s
    }
    function $h(n) {
        return n = P1(n),
        n !== null ? Hh(n) : null
    }
    function Hh(n) {
        if (n.tag === 5 || n.tag === 6)
            return n;
        for (n = n.child; n !== null; ) {
            var s = Hh(n);
            if (s !== null)
                return s;
            n = n.sibling
        }
        return null
    }
    var qh = e.unstable_scheduleCallback
      , Wh = e.unstable_cancelCallback
      , _1 = e.unstable_shouldYield
      , R1 = e.unstable_requestPaint
      , Qe = e.unstable_now
      , A1 = e.unstable_getCurrentPriorityLevel
      , Su = e.unstable_ImmediatePriority
      , Kh = e.unstable_UserBlockingPriority
      , ia = e.unstable_NormalPriority
      , N1 = e.unstable_LowPriority
      , Qh = e.unstable_IdlePriority
      , oa = null
      , mn = null;
    function O1(n) {
        if (mn && typeof mn.onCommitFiberRoot == "function")
            try {
                mn.onCommitFiberRoot(oa, n, void 0, (n.current.flags & 128) === 128)
            } catch {}
    }
    var nn = Math.clz32 ? Math.clz32 : M1
      , j1 = Math.log
      , L1 = Math.LN2;
    function M1(n) {
        return n >>>= 0,
        n === 0 ? 32 : 31 - (j1(n) / L1 | 0) | 0
    }
    var aa = 64
      , la = 4194304;
    function Pi(n) {
        switch (n & -n) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return n & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return n & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return n
        }
    }
    function ua(n, s) {
        var o = n.pendingLanes;
        if (o === 0)
            return 0;
        var u = 0
          , f = n.suspendedLanes
          , p = n.pingedLanes
          , v = o & 268435455;
        if (v !== 0) {
            var T = v & ~f;
            T !== 0 ? u = Pi(T) : (p &= v,
            p !== 0 && (u = Pi(p)))
        } else
            v = o & ~f,
            v !== 0 ? u = Pi(v) : p !== 0 && (u = Pi(p));
        if (u === 0)
            return 0;
        if (s !== 0 && s !== u && (s & f) === 0 && (f = u & -u,
        p = s & -s,
        f >= p || f === 16 && (p & 4194240) !== 0))
            return s;
        if ((u & 4) !== 0 && (u |= o & 16),
        s = n.entangledLanes,
        s !== 0)
            for (n = n.entanglements,
            s &= u; 0 < s; )
                o = 31 - nn(s),
                f = 1 << o,
                u |= n[o],
                s &= ~f;
        return u
    }
    function D1(n, s) {
        switch (n) {
        case 1:
        case 2:
        case 4:
            return s + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return s + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function I1(n, s) {
        for (var o = n.suspendedLanes, u = n.pingedLanes, f = n.expirationTimes, p = n.pendingLanes; 0 < p; ) {
            var v = 31 - nn(p)
              , T = 1 << v
              , P = f[v];
            P === -1 ? ((T & o) === 0 || (T & u) !== 0) && (f[v] = D1(T, s)) : P <= s && (n.expiredLanes |= T),
            p &= ~T
        }
    }
    function bu(n) {
        return n = n.pendingLanes & -1073741825,
        n !== 0 ? n : n & 1073741824 ? 1073741824 : 0
    }
    function Gh() {
        var n = aa;
        return aa <<= 1,
        (aa & 4194240) === 0 && (aa = 64),
        n
    }
    function ku(n) {
        for (var s = [], o = 0; 31 > o; o++)
            s.push(n);
        return s
    }
    function _i(n, s, o) {
        n.pendingLanes |= s,
        s !== 536870912 && (n.suspendedLanes = 0,
        n.pingedLanes = 0),
        n = n.eventTimes,
        s = 31 - nn(s),
        n[s] = o
    }
    function F1(n, s) {
        var o = n.pendingLanes & ~s;
        n.pendingLanes = s,
        n.suspendedLanes = 0,
        n.pingedLanes = 0,
        n.expiredLanes &= s,
        n.mutableReadLanes &= s,
        n.entangledLanes &= s,
        s = n.entanglements;
        var u = n.eventTimes;
        for (n = n.expirationTimes; 0 < o; ) {
            var f = 31 - nn(o)
              , p = 1 << f;
            s[f] = 0,
            u[f] = -1,
            n[f] = -1,
            o &= ~p
        }
    }
    function Eu(n, s) {
        var o = n.entangledLanes |= s;
        for (n = n.entanglements; o; ) {
            var u = 31 - nn(o)
              , f = 1 << u;
            f & s | n[u] & s && (n[u] |= s),
            o &= ~f
        }
    }
    var je = 0;
    function Yh(n) {
        return n &= -n,
        1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var Xh, Tu, Jh, Zh, ep, Cu = !1, ca = [], Gn = null, Yn = null, Xn = null, Ri = new Map, Ai = new Map, Jn = [], V1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function tp(n, s) {
        switch (n) {
        case "focusin":
        case "focusout":
            Gn = null;
            break;
        case "dragenter":
        case "dragleave":
            Yn = null;
            break;
        case "mouseover":
        case "mouseout":
            Xn = null;
            break;
        case "pointerover":
        case "pointerout":
            Ri.delete(s.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Ai.delete(s.pointerId)
        }
    }
    function Ni(n, s, o, u, f, p) {
        return n === null || n.nativeEvent !== p ? (n = {
            blockedOn: s,
            domEventName: o,
            eventSystemFlags: u,
            nativeEvent: p,
            targetContainers: [f]
        },
        s !== null && (s = qi(s),
        s !== null && Tu(s)),
        n) : (n.eventSystemFlags |= u,
        s = n.targetContainers,
        f !== null && s.indexOf(f) === -1 && s.push(f),
        n)
    }
    function U1(n, s, o, u, f) {
        switch (s) {
        case "focusin":
            return Gn = Ni(Gn, n, s, o, u, f),
            !0;
        case "dragenter":
            return Yn = Ni(Yn, n, s, o, u, f),
            !0;
        case "mouseover":
            return Xn = Ni(Xn, n, s, o, u, f),
            !0;
        case "pointerover":
            var p = f.pointerId;
            return Ri.set(p, Ni(Ri.get(p) || null, n, s, o, u, f)),
            !0;
        case "gotpointercapture":
            return p = f.pointerId,
            Ai.set(p, Ni(Ai.get(p) || null, n, s, o, u, f)),
            !0
        }
        return !1
    }
    function np(n) {
        var s = Ir(n.target);
        if (s !== null) {
            var o = Dr(s);
            if (o !== null) {
                if (s = o.tag,
                s === 13) {
                    if (s = Bh(o),
                    s !== null) {
                        n.blockedOn = s,
                        ep(n.priority, function() {
                            Jh(o)
                        });
                        return
                    }
                } else if (s === 3 && o.stateNode.current.memoizedState.isDehydrated) {
                    n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
                    return
                }
            }
        }
        n.blockedOn = null
    }
    function da(n) {
        if (n.blockedOn !== null)
            return !1;
        for (var s = n.targetContainers; 0 < s.length; ) {
            var o = _u(n.domEventName, n.eventSystemFlags, s[0], n.nativeEvent);
            if (o === null) {
                o = n.nativeEvent;
                var u = new o.constructor(o.type,o);
                mu = u,
                o.target.dispatchEvent(u),
                mu = null
            } else
                return s = qi(o),
                s !== null && Tu(s),
                n.blockedOn = o,
                !1;
            s.shift()
        }
        return !0
    }
    function rp(n, s, o) {
        da(n) && o.delete(s)
    }
    function B1() {
        Cu = !1,
        Gn !== null && da(Gn) && (Gn = null),
        Yn !== null && da(Yn) && (Yn = null),
        Xn !== null && da(Xn) && (Xn = null),
        Ri.forEach(rp),
        Ai.forEach(rp)
    }
    function Oi(n, s) {
        n.blockedOn === s && (n.blockedOn = null,
        Cu || (Cu = !0,
        e.unstable_scheduleCallback(e.unstable_NormalPriority, B1)))
    }
    function ji(n) {
        function s(f) {
            return Oi(f, n)
        }
        if (0 < ca.length) {
            Oi(ca[0], n);
            for (var o = 1; o < ca.length; o++) {
                var u = ca[o];
                u.blockedOn === n && (u.blockedOn = null)
            }
        }
        for (Gn !== null && Oi(Gn, n),
        Yn !== null && Oi(Yn, n),
        Xn !== null && Oi(Xn, n),
        Ri.forEach(s),
        Ai.forEach(s),
        o = 0; o < Jn.length; o++)
            u = Jn[o],
            u.blockedOn === n && (u.blockedOn = null);
        for (; 0 < Jn.length && (o = Jn[0],
        o.blockedOn === null); )
            np(o),
            o.blockedOn === null && Jn.shift()
    }
    var ks = _.ReactCurrentBatchConfig
      , fa = !0;
    function z1(n, s, o, u) {
        var f = je
          , p = ks.transition;
        ks.transition = null;
        try {
            je = 1,
            Pu(n, s, o, u)
        } finally {
            je = f,
            ks.transition = p
        }
    }
    function $1(n, s, o, u) {
        var f = je
          , p = ks.transition;
        ks.transition = null;
        try {
            je = 4,
            Pu(n, s, o, u)
        } finally {
            je = f,
            ks.transition = p
        }
    }
    function Pu(n, s, o, u) {
        if (fa) {
            var f = _u(n, s, o, u);
            if (f === null)
                qu(n, s, u, ha, o),
                tp(n, u);
            else if (U1(f, n, s, o, u))
                u.stopPropagation();
            else if (tp(n, u),
            s & 4 && -1 < V1.indexOf(n)) {
                for (; f !== null; ) {
                    var p = qi(f);
                    if (p !== null && Xh(p),
                    p = _u(n, s, o, u),
                    p === null && qu(n, s, u, ha, o),
                    p === f)
                        break;
                    f = p
                }
                f !== null && u.stopPropagation()
            } else
                qu(n, s, u, null, o)
        }
    }
    var ha = null;
    function _u(n, s, o, u) {
        if (ha = null,
        n = gu(u),
        n = Ir(n),
        n !== null)
            if (s = Dr(n),
            s === null)
                n = null;
            else if (o = s.tag,
            o === 13) {
                if (n = Bh(s),
                n !== null)
                    return n;
                n = null
            } else if (o === 3) {
                if (s.stateNode.current.memoizedState.isDehydrated)
                    return s.tag === 3 ? s.stateNode.containerInfo : null;
                n = null
            } else
                s !== n && (n = null);
        return ha = n,
        null
    }
    function sp(n) {
        switch (n) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (A1()) {
            case Su:
                return 1;
            case Kh:
                return 4;
            case ia:
            case N1:
                return 16;
            case Qh:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var Zn = null
      , Ru = null
      , pa = null;
    function ip() {
        if (pa)
            return pa;
        var n, s = Ru, o = s.length, u, f = "value"in Zn ? Zn.value : Zn.textContent, p = f.length;
        for (n = 0; n < o && s[n] === f[n]; n++)
            ;
        var v = o - n;
        for (u = 1; u <= v && s[o - u] === f[p - u]; u++)
            ;
        return pa = f.slice(n, 1 < u ? 1 - u : void 0)
    }
    function ma(n) {
        var s = n.keyCode;
        return "charCode"in n ? (n = n.charCode,
        n === 0 && s === 13 && (n = 13)) : n = s,
        n === 10 && (n = 13),
        32 <= n || n === 13 ? n : 0
    }
    function ga() {
        return !0
    }
    function op() {
        return !1
    }
    function Ft(n) {
        function s(o, u, f, p, v) {
            this._reactName = o,
            this._targetInst = f,
            this.type = u,
            this.nativeEvent = p,
            this.target = v,
            this.currentTarget = null;
            for (var T in n)
                n.hasOwnProperty(T) && (o = n[T],
                this[T] = o ? o(p) : p[T]);
            return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? ga : op,
            this.isPropagationStopped = op,
            this
        }
        return B(s.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var o = this.nativeEvent;
                o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1),
                this.isDefaultPrevented = ga)
            },
            stopPropagation: function() {
                var o = this.nativeEvent;
                o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0),
                this.isPropagationStopped = ga)
            },
            persist: function() {},
            isPersistent: ga
        }),
        s
    }
    var Es = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(n) {
            return n.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Au = Ft(Es), Li = B({}, Es, {
        view: 0,
        detail: 0
    }), H1 = Ft(Li), Nu, Ou, Mi, ya = B({}, Li, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Lu,
        button: 0,
        buttons: 0,
        relatedTarget: function(n) {
            return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget
        },
        movementX: function(n) {
            return "movementX"in n ? n.movementX : (n !== Mi && (Mi && n.type === "mousemove" ? (Nu = n.screenX - Mi.screenX,
            Ou = n.screenY - Mi.screenY) : Ou = Nu = 0,
            Mi = n),
            Nu)
        },
        movementY: function(n) {
            return "movementY"in n ? n.movementY : Ou
        }
    }), ap = Ft(ya), q1 = B({}, ya, {
        dataTransfer: 0
    }), W1 = Ft(q1), K1 = B({}, Li, {
        relatedTarget: 0
    }), ju = Ft(K1), Q1 = B({}, Es, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), G1 = Ft(Q1), Y1 = B({}, Es, {
        clipboardData: function(n) {
            return "clipboardData"in n ? n.clipboardData : window.clipboardData
        }
    }), X1 = Ft(Y1), J1 = B({}, Es, {
        data: 0
    }), lp = Ft(J1), Z1 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, eS = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, tS = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function nS(n) {
        var s = this.nativeEvent;
        return s.getModifierState ? s.getModifierState(n) : (n = tS[n]) ? !!s[n] : !1
    }
    function Lu() {
        return nS
    }
    var rS = B({}, Li, {
        key: function(n) {
            if (n.key) {
                var s = Z1[n.key] || n.key;
                if (s !== "Unidentified")
                    return s
            }
            return n.type === "keypress" ? (n = ma(n),
            n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? eS[n.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Lu,
        charCode: function(n) {
            return n.type === "keypress" ? ma(n) : 0
        },
        keyCode: function(n) {
            return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
        },
        which: function(n) {
            return n.type === "keypress" ? ma(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
        }
    })
      , sS = Ft(rS)
      , iS = B({}, ya, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , up = Ft(iS)
      , oS = B({}, Li, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Lu
    })
      , aS = Ft(oS)
      , lS = B({}, Es, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , uS = Ft(lS)
      , cS = B({}, ya, {
        deltaX: function(n) {
            return "deltaX"in n ? n.deltaX : "wheelDeltaX"in n ? -n.wheelDeltaX : 0
        },
        deltaY: function(n) {
            return "deltaY"in n ? n.deltaY : "wheelDeltaY"in n ? -n.wheelDeltaY : "wheelDelta"in n ? -n.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , dS = Ft(cS)
      , fS = [9, 13, 27, 32]
      , Mu = d && "CompositionEvent"in window
      , Di = null;
    d && "documentMode"in document && (Di = document.documentMode);
    var hS = d && "TextEvent"in window && !Di
      , cp = d && (!Mu || Di && 8 < Di && 11 >= Di)
      , dp = " "
      , fp = !1;
    function hp(n, s) {
        switch (n) {
        case "keyup":
            return fS.indexOf(s.keyCode) !== -1;
        case "keydown":
            return s.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function pp(n) {
        return n = n.detail,
        typeof n == "object" && "data"in n ? n.data : null
    }
    var Ts = !1;
    function pS(n, s) {
        switch (n) {
        case "compositionend":
            return pp(s);
        case "keypress":
            return s.which !== 32 ? null : (fp = !0,
            dp);
        case "textInput":
            return n = s.data,
            n === dp && fp ? null : n;
        default:
            return null
        }
    }
    function mS(n, s) {
        if (Ts)
            return n === "compositionend" || !Mu && hp(n, s) ? (n = ip(),
            pa = Ru = Zn = null,
            Ts = !1,
            n) : null;
        switch (n) {
        case "paste":
            return null;
        case "keypress":
            if (!(s.ctrlKey || s.altKey || s.metaKey) || s.ctrlKey && s.altKey) {
                if (s.char && 1 < s.char.length)
                    return s.char;
                if (s.which)
                    return String.fromCharCode(s.which)
            }
            return null;
        case "compositionend":
            return cp && s.locale !== "ko" ? null : s.data;
        default:
            return null
        }
    }
    var gS = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function mp(n) {
        var s = n && n.nodeName && n.nodeName.toLowerCase();
        return s === "input" ? !!gS[n.type] : s === "textarea"
    }
    function gp(n, s, o, u) {
        Dh(u),
        s = ba(s, "onChange"),
        0 < s.length && (o = new Au("onChange","change",null,o,u),
        n.push({
            event: o,
            listeners: s
        }))
    }
    var Ii = null
      , Fi = null;
    function yS(n) {
        Lp(n, 0)
    }
    function va(n) {
        var s = As(n);
        if (Mr(s))
            return n
    }
    function vS(n, s) {
        if (n === "change")
            return s
    }
    var yp = !1;
    if (d) {
        var Du;
        if (d) {
            var Iu = "oninput"in document;
            if (!Iu) {
                var vp = document.createElement("div");
                vp.setAttribute("oninput", "return;"),
                Iu = typeof vp.oninput == "function"
            }
            Du = Iu
        } else
            Du = !1;
        yp = Du && (!document.documentMode || 9 < document.documentMode)
    }
    function wp() {
        Ii && (Ii.detachEvent("onpropertychange", xp),
        Fi = Ii = null)
    }
    function xp(n) {
        if (n.propertyName === "value" && va(Fi)) {
            var s = [];
            gp(s, Fi, n, gu(n)),
            Uh(yS, s)
        }
    }
    function wS(n, s, o) {
        n === "focusin" ? (wp(),
        Ii = s,
        Fi = o,
        Ii.attachEvent("onpropertychange", xp)) : n === "focusout" && wp()
    }
    function xS(n) {
        if (n === "selectionchange" || n === "keyup" || n === "keydown")
            return va(Fi)
    }
    function SS(n, s) {
        if (n === "click")
            return va(s)
    }
    function bS(n, s) {
        if (n === "input" || n === "change")
            return va(s)
    }
    function kS(n, s) {
        return n === s && (n !== 0 || 1 / n === 1 / s) || n !== n && s !== s
    }
    var rn = typeof Object.is == "function" ? Object.is : kS;
    function Vi(n, s) {
        if (rn(n, s))
            return !0;
        if (typeof n != "object" || n === null || typeof s != "object" || s === null)
            return !1;
        var o = Object.keys(n)
          , u = Object.keys(s);
        if (o.length !== u.length)
            return !1;
        for (u = 0; u < o.length; u++) {
            var f = o[u];
            if (!h.call(s, f) || !rn(n[f], s[f]))
                return !1
        }
        return !0
    }
    function Sp(n) {
        for (; n && n.firstChild; )
            n = n.firstChild;
        return n
    }
    function bp(n, s) {
        var o = Sp(n);
        n = 0;
        for (var u; o; ) {
            if (o.nodeType === 3) {
                if (u = n + o.textContent.length,
                n <= s && u >= s)
                    return {
                        node: o,
                        offset: s - n
                    };
                n = u
            }
            e: {
                for (; o; ) {
                    if (o.nextSibling) {
                        o = o.nextSibling;
                        break e
                    }
                    o = o.parentNode
                }
                o = void 0
            }
            o = Sp(o)
        }
    }
    function kp(n, s) {
        return n && s ? n === s ? !0 : n && n.nodeType === 3 ? !1 : s && s.nodeType === 3 ? kp(n, s.parentNode) : "contains"in n ? n.contains(s) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(s) & 16) : !1 : !1
    }
    function Ep() {
        for (var n = window, s = Kn(); s instanceof n.HTMLIFrameElement; ) {
            try {
                var o = typeof s.contentWindow.location.href == "string"
            } catch {
                o = !1
            }
            if (o)
                n = s.contentWindow;
            else
                break;
            s = Kn(n.document)
        }
        return s
    }
    function Fu(n) {
        var s = n && n.nodeName && n.nodeName.toLowerCase();
        return s && (s === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || s === "textarea" || n.contentEditable === "true")
    }
    function ES(n) {
        var s = Ep()
          , o = n.focusedElem
          , u = n.selectionRange;
        if (s !== o && o && o.ownerDocument && kp(o.ownerDocument.documentElement, o)) {
            if (u !== null && Fu(o)) {
                if (s = u.start,
                n = u.end,
                n === void 0 && (n = s),
                "selectionStart"in o)
                    o.selectionStart = s,
                    o.selectionEnd = Math.min(n, o.value.length);
                else if (n = (s = o.ownerDocument || document) && s.defaultView || window,
                n.getSelection) {
                    n = n.getSelection();
                    var f = o.textContent.length
                      , p = Math.min(u.start, f);
                    u = u.end === void 0 ? p : Math.min(u.end, f),
                    !n.extend && p > u && (f = u,
                    u = p,
                    p = f),
                    f = bp(o, p);
                    var v = bp(o, u);
                    f && v && (n.rangeCount !== 1 || n.anchorNode !== f.node || n.anchorOffset !== f.offset || n.focusNode !== v.node || n.focusOffset !== v.offset) && (s = s.createRange(),
                    s.setStart(f.node, f.offset),
                    n.removeAllRanges(),
                    p > u ? (n.addRange(s),
                    n.extend(v.node, v.offset)) : (s.setEnd(v.node, v.offset),
                    n.addRange(s)))
                }
            }
            for (s = [],
            n = o; n = n.parentNode; )
                n.nodeType === 1 && s.push({
                    element: n,
                    left: n.scrollLeft,
                    top: n.scrollTop
                });
            for (typeof o.focus == "function" && o.focus(),
            o = 0; o < s.length; o++)
                n = s[o],
                n.element.scrollLeft = n.left,
                n.element.scrollTop = n.top
        }
    }
    var TS = d && "documentMode"in document && 11 >= document.documentMode
      , Cs = null
      , Vu = null
      , Ui = null
      , Uu = !1;
    function Tp(n, s, o) {
        var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
        Uu || Cs == null || Cs !== Kn(u) || (u = Cs,
        "selectionStart"in u && Fu(u) ? u = {
            start: u.selectionStart,
            end: u.selectionEnd
        } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(),
        u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset
        }),
        Ui && Vi(Ui, u) || (Ui = u,
        u = ba(Vu, "onSelect"),
        0 < u.length && (s = new Au("onSelect","select",null,s,o),
        n.push({
            event: s,
            listeners: u
        }),
        s.target = Cs)))
    }
    function wa(n, s) {
        var o = {};
        return o[n.toLowerCase()] = s.toLowerCase(),
        o["Webkit" + n] = "webkit" + s,
        o["Moz" + n] = "moz" + s,
        o
    }
    var Ps = {
        animationend: wa("Animation", "AnimationEnd"),
        animationiteration: wa("Animation", "AnimationIteration"),
        animationstart: wa("Animation", "AnimationStart"),
        transitionend: wa("Transition", "TransitionEnd")
    }
      , Bu = {}
      , Cp = {};
    d && (Cp = document.createElement("div").style,
    "AnimationEvent"in window || (delete Ps.animationend.animation,
    delete Ps.animationiteration.animation,
    delete Ps.animationstart.animation),
    "TransitionEvent"in window || delete Ps.transitionend.transition);
    function xa(n) {
        if (Bu[n])
            return Bu[n];
        if (!Ps[n])
            return n;
        var s = Ps[n], o;
        for (o in s)
            if (s.hasOwnProperty(o) && o in Cp)
                return Bu[n] = s[o];
        return n
    }
    var Pp = xa("animationend")
      , _p = xa("animationiteration")
      , Rp = xa("animationstart")
      , Ap = xa("transitionend")
      , Np = new Map
      , Op = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function er(n, s) {
        Np.set(n, s),
        l(s, [n])
    }
    for (var zu = 0; zu < Op.length; zu++) {
        var $u = Op[zu]
          , CS = $u.toLowerCase()
          , PS = $u[0].toUpperCase() + $u.slice(1);
        er(CS, "on" + PS)
    }
    er(Pp, "onAnimationEnd"),
    er(_p, "onAnimationIteration"),
    er(Rp, "onAnimationStart"),
    er("dblclick", "onDoubleClick"),
    er("focusin", "onFocus"),
    er("focusout", "onBlur"),
    er(Ap, "onTransitionEnd"),
    c("onMouseEnter", ["mouseout", "mouseover"]),
    c("onMouseLeave", ["mouseout", "mouseover"]),
    c("onPointerEnter", ["pointerout", "pointerover"]),
    c("onPointerLeave", ["pointerout", "pointerover"]),
    l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Bi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , _S = new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));
    function jp(n, s, o) {
        var u = n.type || "unknown-event";
        n.currentTarget = o,
        C1(u, s, void 0, n),
        n.currentTarget = null
    }
    function Lp(n, s) {
        s = (s & 4) !== 0;
        for (var o = 0; o < n.length; o++) {
            var u = n[o]
              , f = u.event;
            u = u.listeners;
            e: {
                var p = void 0;
                if (s)
                    for (var v = u.length - 1; 0 <= v; v--) {
                        var T = u[v]
                          , P = T.instance
                          , F = T.currentTarget;
                        if (T = T.listener,
                        P !== p && f.isPropagationStopped())
                            break e;
                        jp(f, T, F),
                        p = P
                    }
                else
                    for (v = 0; v < u.length; v++) {
                        if (T = u[v],
                        P = T.instance,
                        F = T.currentTarget,
                        T = T.listener,
                        P !== p && f.isPropagationStopped())
                            break e;
                        jp(f, T, F),
                        p = P
                    }
            }
        }
        if (sa)
            throw n = xu,
            sa = !1,
            xu = null,
            n
    }
    function Fe(n, s) {
        var o = s[Xu];
        o === void 0 && (o = s[Xu] = new Set);
        var u = n + "__bubble";
        o.has(u) || (Mp(s, n, 2, !1),
        o.add(u))
    }
    function Hu(n, s, o) {
        var u = 0;
        s && (u |= 4),
        Mp(o, n, u, s)
    }
    var Sa = "_reactListening" + Math.random().toString(36).slice(2);
    function zi(n) {
        if (!n[Sa]) {
            n[Sa] = !0,
            i.forEach(function(o) {
                o !== "selectionchange" && (_S.has(o) || Hu(o, !1, n),
                Hu(o, !0, n))
            });
            var s = n.nodeType === 9 ? n : n.ownerDocument;
            s === null || s[Sa] || (s[Sa] = !0,
            Hu("selectionchange", !1, s))
        }
    }
    function Mp(n, s, o, u) {
        switch (sp(s)) {
        case 1:
            var f = z1;
            break;
        case 4:
            f = $1;
            break;
        default:
            f = Pu
        }
        o = f.bind(null, s, o, n),
        f = void 0,
        !wu || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (f = !0),
        u ? f !== void 0 ? n.addEventListener(s, o, {
            capture: !0,
            passive: f
        }) : n.addEventListener(s, o, !0) : f !== void 0 ? n.addEventListener(s, o, {
            passive: f
        }) : n.addEventListener(s, o, !1)
    }
    function qu(n, s, o, u, f) {
        var p = u;
        if ((s & 1) === 0 && (s & 2) === 0 && u !== null)
            e: for (; ; ) {
                if (u === null)
                    return;
                var v = u.tag;
                if (v === 3 || v === 4) {
                    var T = u.stateNode.containerInfo;
                    if (T === f || T.nodeType === 8 && T.parentNode === f)
                        break;
                    if (v === 4)
                        for (v = u.return; v !== null; ) {
                            var P = v.tag;
                            if ((P === 3 || P === 4) && (P = v.stateNode.containerInfo,
                            P === f || P.nodeType === 8 && P.parentNode === f))
                                return;
                            v = v.return
                        }
                    for (; T !== null; ) {
                        if (v = Ir(T),
                        v === null)
                            return;
                        if (P = v.tag,
                        P === 5 || P === 6) {
                            u = p = v;
                            continue e
                        }
                        T = T.parentNode
                    }
                }
                u = u.return
            }
        Uh(function() {
            var F = p
              , H = gu(o)
              , q = [];
            e: {
                var $ = Np.get(n);
                if ($ !== void 0) {
                    var X = Au
                      , ee = n;
                    switch (n) {
                    case "keypress":
                        if (ma(o) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        X = sS;
                        break;
                    case "focusin":
                        ee = "focus",
                        X = ju;
                        break;
                    case "focusout":
                        ee = "blur",
                        X = ju;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        X = ju;
                        break;
                    case "click":
                        if (o.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        X = ap;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        X = W1;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        X = aS;
                        break;
                    case Pp:
                    case _p:
                    case Rp:
                        X = G1;
                        break;
                    case Ap:
                        X = uS;
                        break;
                    case "scroll":
                        X = H1;
                        break;
                    case "wheel":
                        X = dS;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        X = X1;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        X = up
                    }
                    var re = (s & 4) !== 0
                      , Ge = !re && n === "scroll"
                      , O = re ? $ !== null ? $ + "Capture" : null : $;
                    re = [];
                    for (var A = F, M; A !== null; ) {
                        M = A;
                        var Q = M.stateNode;
                        if (M.tag === 5 && Q !== null && (M = Q,
                        O !== null && (Q = Ei(A, O),
                        Q != null && re.push($i(A, Q, M)))),
                        Ge)
                            break;
                        A = A.return
                    }
                    0 < re.length && ($ = new X($,ee,null,o,H),
                    q.push({
                        event: $,
                        listeners: re
                    }))
                }
            }
            if ((s & 7) === 0) {
                e: {
                    if ($ = n === "mouseover" || n === "pointerover",
                    X = n === "mouseout" || n === "pointerout",
                    $ && o !== mu && (ee = o.relatedTarget || o.fromElement) && (Ir(ee) || ee[_n]))
                        break e;
                    if ((X || $) && ($ = H.window === H ? H : ($ = H.ownerDocument) ? $.defaultView || $.parentWindow : window,
                    X ? (ee = o.relatedTarget || o.toElement,
                    X = F,
                    ee = ee ? Ir(ee) : null,
                    ee !== null && (Ge = Dr(ee),
                    ee !== Ge || ee.tag !== 5 && ee.tag !== 6) && (ee = null)) : (X = null,
                    ee = F),
                    X !== ee)) {
                        if (re = ap,
                        Q = "onMouseLeave",
                        O = "onMouseEnter",
                        A = "mouse",
                        (n === "pointerout" || n === "pointerover") && (re = up,
                        Q = "onPointerLeave",
                        O = "onPointerEnter",
                        A = "pointer"),
                        Ge = X == null ? $ : As(X),
                        M = ee == null ? $ : As(ee),
                        $ = new re(Q,A + "leave",X,o,H),
                        $.target = Ge,
                        $.relatedTarget = M,
                        Q = null,
                        Ir(H) === F && (re = new re(O,A + "enter",ee,o,H),
                        re.target = M,
                        re.relatedTarget = Ge,
                        Q = re),
                        Ge = Q,
                        X && ee)
                            t: {
                                for (re = X,
                                O = ee,
                                A = 0,
                                M = re; M; M = _s(M))
                                    A++;
                                for (M = 0,
                                Q = O; Q; Q = _s(Q))
                                    M++;
                                for (; 0 < A - M; )
                                    re = _s(re),
                                    A--;
                                for (; 0 < M - A; )
                                    O = _s(O),
                                    M--;
                                for (; A--; ) {
                                    if (re === O || O !== null && re === O.alternate)
                                        break t;
                                    re = _s(re),
                                    O = _s(O)
                                }
                                re = null
                            }
                        else
                            re = null;
                        X !== null && Dp(q, $, X, re, !1),
                        ee !== null && Ge !== null && Dp(q, Ge, ee, re, !0)
                    }
                }
                e: {
                    if ($ = F ? As(F) : window,
                    X = $.nodeName && $.nodeName.toLowerCase(),
                    X === "select" || X === "input" && $.type === "file")
                        var ie = vS;
                    else if (mp($))
                        if (yp)
                            ie = bS;
                        else {
                            ie = xS;
                            var ae = wS
                        }
                    else
                        (X = $.nodeName) && X.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (ie = SS);
                    if (ie && (ie = ie(n, F))) {
                        gp(q, ie, o, H);
                        break e
                    }
                    ae && ae(n, $, F),
                    n === "focusout" && (ae = $._wrapperState) && ae.controlled && $.type === "number" && cu($, "number", $.value)
                }
                switch (ae = F ? As(F) : window,
                n) {
                case "focusin":
                    (mp(ae) || ae.contentEditable === "true") && (Cs = ae,
                    Vu = F,
                    Ui = null);
                    break;
                case "focusout":
                    Ui = Vu = Cs = null;
                    break;
                case "mousedown":
                    Uu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Uu = !1,
                    Tp(q, o, H);
                    break;
                case "selectionchange":
                    if (TS)
                        break;
                case "keydown":
                case "keyup":
                    Tp(q, o, H)
                }
                var le;
                if (Mu)
                    e: {
                        switch (n) {
                        case "compositionstart":
                            var ge = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ge = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ge = "onCompositionUpdate";
                            break e
                        }
                        ge = void 0
                    }
                else
                    Ts ? hp(n, o) && (ge = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (ge = "onCompositionStart");
                ge && (cp && o.locale !== "ko" && (Ts || ge !== "onCompositionStart" ? ge === "onCompositionEnd" && Ts && (le = ip()) : (Zn = H,
                Ru = "value"in Zn ? Zn.value : Zn.textContent,
                Ts = !0)),
                ae = ba(F, ge),
                0 < ae.length && (ge = new lp(ge,n,null,o,H),
                q.push({
                    event: ge,
                    listeners: ae
                }),
                le ? ge.data = le : (le = pp(o),
                le !== null && (ge.data = le)))),
                (le = hS ? pS(n, o) : mS(n, o)) && (F = ba(F, "onBeforeInput"),
                0 < F.length && (H = new lp("onBeforeInput","beforeinput",null,o,H),
                q.push({
                    event: H,
                    listeners: F
                }),
                H.data = le))
            }
            Lp(q, s)
        })
    }
    function $i(n, s, o) {
        return {
            instance: n,
            listener: s,
            currentTarget: o
        }
    }
    function ba(n, s) {
        for (var o = s + "Capture", u = []; n !== null; ) {
            var f = n
              , p = f.stateNode;
            f.tag === 5 && p !== null && (f = p,
            p = Ei(n, o),
            p != null && u.unshift($i(n, p, f)),
            p = Ei(n, s),
            p != null && u.push($i(n, p, f))),
            n = n.return
        }
        return u
    }
    function _s(n) {
        if (n === null)
            return null;
        do
            n = n.return;
        while (n && n.tag !== 5);
        return n || null
    }
    function Dp(n, s, o, u, f) {
        for (var p = s._reactName, v = []; o !== null && o !== u; ) {
            var T = o
              , P = T.alternate
              , F = T.stateNode;
            if (P !== null && P === u)
                break;
            T.tag === 5 && F !== null && (T = F,
            f ? (P = Ei(o, p),
            P != null && v.unshift($i(o, P, T))) : f || (P = Ei(o, p),
            P != null && v.push($i(o, P, T)))),
            o = o.return
        }
        v.length !== 0 && n.push({
            event: s,
            listeners: v
        })
    }
    var RS = /\r\n?/g
      , AS = /\u0000|\uFFFD/g;
    function Ip(n) {
        return (typeof n == "string" ? n : "" + n).replace(RS, `
`).replace(AS, "")
    }
    function ka(n, s, o) {
        if (s = Ip(s),
        Ip(n) !== s && o)
            throw Error(r(425))
    }
    function Ea() {}
    var Wu = null
      , Ku = null;
    function Qu(n, s) {
        return n === "textarea" || n === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null
    }
    var Gu = typeof setTimeout == "function" ? setTimeout : void 0
      , NS = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Fp = typeof Promise == "function" ? Promise : void 0
      , OS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fp < "u" ? function(n) {
        return Fp.resolve(null).then(n).catch(jS)
    }
    : Gu;
    function jS(n) {
        setTimeout(function() {
            throw n
        })
    }
    function Yu(n, s) {
        var o = s
          , u = 0;
        do {
            var f = o.nextSibling;
            if (n.removeChild(o),
            f && f.nodeType === 8)
                if (o = f.data,
                o === "/$") {
                    if (u === 0) {
                        n.removeChild(f),
                        ji(s);
                        return
                    }
                    u--
                } else
                    o !== "$" && o !== "$?" && o !== "$!" || u++;
            o = f
        } while (o);
        ji(s)
    }
    function tr(n) {
        for (; n != null; n = n.nextSibling) {
            var s = n.nodeType;
            if (s === 1 || s === 3)
                break;
            if (s === 8) {
                if (s = n.data,
                s === "$" || s === "$!" || s === "$?")
                    break;
                if (s === "/$")
                    return null
            }
        }
        return n
    }
    function Vp(n) {
        n = n.previousSibling;
        for (var s = 0; n; ) {
            if (n.nodeType === 8) {
                var o = n.data;
                if (o === "$" || o === "$!" || o === "$?") {
                    if (s === 0)
                        return n;
                    s--
                } else
                    o === "/$" && s++
            }
            n = n.previousSibling
        }
        return null
    }
    var Rs = Math.random().toString(36).slice(2)
      , gn = "__reactFiber$" + Rs
      , Hi = "__reactProps$" + Rs
      , _n = "__reactContainer$" + Rs
      , Xu = "__reactEvents$" + Rs
      , LS = "__reactListeners$" + Rs
      , MS = "__reactHandles$" + Rs;
    function Ir(n) {
        var s = n[gn];
        if (s)
            return s;
        for (var o = n.parentNode; o; ) {
            if (s = o[_n] || o[gn]) {
                if (o = s.alternate,
                s.child !== null || o !== null && o.child !== null)
                    for (n = Vp(n); n !== null; ) {
                        if (o = n[gn])
                            return o;
                        n = Vp(n)
                    }
                return s
            }
            n = o,
            o = n.parentNode
        }
        return null
    }
    function qi(n) {
        return n = n[gn] || n[_n],
        !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n
    }
    function As(n) {
        if (n.tag === 5 || n.tag === 6)
            return n.stateNode;
        throw Error(r(33))
    }
    function Ta(n) {
        return n[Hi] || null
    }
    var Ju = []
      , Ns = -1;
    function nr(n) {
        return {
            current: n
        }
    }
    function Ve(n) {
        0 > Ns || (n.current = Ju[Ns],
        Ju[Ns] = null,
        Ns--)
    }
    function Ie(n, s) {
        Ns++,
        Ju[Ns] = n.current,
        n.current = s
    }
    var rr = {}
      , mt = nr(rr)
      , Pt = nr(!1)
      , Fr = rr;
    function Os(n, s) {
        var o = n.type.contextTypes;
        if (!o)
            return rr;
        var u = n.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === s)
            return u.__reactInternalMemoizedMaskedChildContext;
        var f = {}, p;
        for (p in o)
            f[p] = s[p];
        return u && (n = n.stateNode,
        n.__reactInternalMemoizedUnmaskedChildContext = s,
        n.__reactInternalMemoizedMaskedChildContext = f),
        f
    }
    function _t(n) {
        return n = n.childContextTypes,
        n != null
    }
    function Ca() {
        Ve(Pt),
        Ve(mt)
    }
    function Up(n, s, o) {
        if (mt.current !== rr)
            throw Error(r(168));
        Ie(mt, s),
        Ie(Pt, o)
    }
    function Bp(n, s, o) {
        var u = n.stateNode;
        if (s = s.childContextTypes,
        typeof u.getChildContext != "function")
            return o;
        u = u.getChildContext();
        for (var f in u)
            if (!(f in s))
                throw Error(r(108, Ne(n) || "Unknown", f));
        return B({}, o, u)
    }
    function Pa(n) {
        return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || rr,
        Fr = mt.current,
        Ie(mt, n),
        Ie(Pt, Pt.current),
        !0
    }
    function zp(n, s, o) {
        var u = n.stateNode;
        if (!u)
            throw Error(r(169));
        o ? (n = Bp(n, s, Fr),
        u.__reactInternalMemoizedMergedChildContext = n,
        Ve(Pt),
        Ve(mt),
        Ie(mt, n)) : Ve(Pt),
        Ie(Pt, o)
    }
    var Rn = null
      , _a = !1
      , Zu = !1;
    function $p(n) {
        Rn === null ? Rn = [n] : Rn.push(n)
    }
    function DS(n) {
        _a = !0,
        $p(n)
    }
    function sr() {
        if (!Zu && Rn !== null) {
            Zu = !0;
            var n = 0
              , s = je;
            try {
                var o = Rn;
                for (je = 1; n < o.length; n++) {
                    var u = o[n];
                    do
                        u = u(!0);
                    while (u !== null)
                }
                Rn = null,
                _a = !1
            } catch (f) {
                throw Rn !== null && (Rn = Rn.slice(n + 1)),
                qh(Su, sr),
                f
            } finally {
                je = s,
                Zu = !1
            }
        }
        return null
    }
    var js = []
      , Ls = 0
      , Ra = null
      , Aa = 0
      , Ht = []
      , qt = 0
      , Vr = null
      , An = 1
      , Nn = "";
    function Ur(n, s) {
        js[Ls++] = Aa,
        js[Ls++] = Ra,
        Ra = n,
        Aa = s
    }
    function Hp(n, s, o) {
        Ht[qt++] = An,
        Ht[qt++] = Nn,
        Ht[qt++] = Vr,
        Vr = n;
        var u = An;
        n = Nn;
        var f = 32 - nn(u) - 1;
        u &= ~(1 << f),
        o += 1;
        var p = 32 - nn(s) + f;
        if (30 < p) {
            var v = f - f % 5;
            p = (u & (1 << v) - 1).toString(32),
            u >>= v,
            f -= v,
            An = 1 << 32 - nn(s) + f | o << f | u,
            Nn = p + n
        } else
            An = 1 << p | o << f | u,
            Nn = n
    }
    function ec(n) {
        n.return !== null && (Ur(n, 1),
        Hp(n, 1, 0))
    }
    function tc(n) {
        for (; n === Ra; )
            Ra = js[--Ls],
            js[Ls] = null,
            Aa = js[--Ls],
            js[Ls] = null;
        for (; n === Vr; )
            Vr = Ht[--qt],
            Ht[qt] = null,
            Nn = Ht[--qt],
            Ht[qt] = null,
            An = Ht[--qt],
            Ht[qt] = null
    }
    var Vt = null
      , Ut = null
      , Be = !1
      , sn = null;
    function qp(n, s) {
        var o = Gt(5, null, null, 0);
        o.elementType = "DELETED",
        o.stateNode = s,
        o.return = n,
        s = n.deletions,
        s === null ? (n.deletions = [o],
        n.flags |= 16) : s.push(o)
    }
    function Wp(n, s) {
        switch (n.tag) {
        case 5:
            var o = n.type;
            return s = s.nodeType !== 1 || o.toLowerCase() !== s.nodeName.toLowerCase() ? null : s,
            s !== null ? (n.stateNode = s,
            Vt = n,
            Ut = tr(s.firstChild),
            !0) : !1;
        case 6:
            return s = n.pendingProps === "" || s.nodeType !== 3 ? null : s,
            s !== null ? (n.stateNode = s,
            Vt = n,
            Ut = null,
            !0) : !1;
        case 13:
            return s = s.nodeType !== 8 ? null : s,
            s !== null ? (o = Vr !== null ? {
                id: An,
                overflow: Nn
            } : null,
            n.memoizedState = {
                dehydrated: s,
                treeContext: o,
                retryLane: 1073741824
            },
            o = Gt(18, null, null, 0),
            o.stateNode = s,
            o.return = n,
            n.child = o,
            Vt = n,
            Ut = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function nc(n) {
        return (n.mode & 1) !== 0 && (n.flags & 128) === 0
    }
    function rc(n) {
        if (Be) {
            var s = Ut;
            if (s) {
                var o = s;
                if (!Wp(n, s)) {
                    if (nc(n))
                        throw Error(r(418));
                    s = tr(o.nextSibling);
                    var u = Vt;
                    s && Wp(n, s) ? qp(u, o) : (n.flags = n.flags & -4097 | 2,
                    Be = !1,
                    Vt = n)
                }
            } else {
                if (nc(n))
                    throw Error(r(418));
                n.flags = n.flags & -4097 | 2,
                Be = !1,
                Vt = n
            }
        }
    }
    function Kp(n) {
        for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
            n = n.return;
        Vt = n
    }
    function Na(n) {
        if (n !== Vt)
            return !1;
        if (!Be)
            return Kp(n),
            Be = !0,
            !1;
        var s;
        if ((s = n.tag !== 3) && !(s = n.tag !== 5) && (s = n.type,
        s = s !== "head" && s !== "body" && !Qu(n.type, n.memoizedProps)),
        s && (s = Ut)) {
            if (nc(n))
                throw Qp(),
                Error(r(418));
            for (; s; )
                qp(n, s),
                s = tr(s.nextSibling)
        }
        if (Kp(n),
        n.tag === 13) {
            if (n = n.memoizedState,
            n = n !== null ? n.dehydrated : null,
            !n)
                throw Error(r(317));
            e: {
                for (n = n.nextSibling,
                s = 0; n; ) {
                    if (n.nodeType === 8) {
                        var o = n.data;
                        if (o === "/$") {
                            if (s === 0) {
                                Ut = tr(n.nextSibling);
                                break e
                            }
                            s--
                        } else
                            o !== "$" && o !== "$!" && o !== "$?" || s++
                    }
                    n = n.nextSibling
                }
                Ut = null
            }
        } else
            Ut = Vt ? tr(n.stateNode.nextSibling) : null;
        return !0
    }
    function Qp() {
        for (var n = Ut; n; )
            n = tr(n.nextSibling)
    }
    function Ms() {
        Ut = Vt = null,
        Be = !1
    }
    function sc(n) {
        sn === null ? sn = [n] : sn.push(n)
    }
    var IS = _.ReactCurrentBatchConfig;
    function Wi(n, s, o) {
        if (n = o.ref,
        n !== null && typeof n != "function" && typeof n != "object") {
            if (o._owner) {
                if (o = o._owner,
                o) {
                    if (o.tag !== 1)
                        throw Error(r(309));
                    var u = o.stateNode
                }
                if (!u)
                    throw Error(r(147, n));
                var f = u
                  , p = "" + n;
                return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === p ? s.ref : (s = function(v) {
                    var T = f.refs;
                    v === null ? delete T[p] : T[p] = v
                }
                ,
                s._stringRef = p,
                s)
            }
            if (typeof n != "string")
                throw Error(r(284));
            if (!o._owner)
                throw Error(r(290, n))
        }
        return n
    }
    function Oa(n, s) {
        throw n = Object.prototype.toString.call(s),
        Error(r(31, n === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : n))
    }
    function Gp(n) {
        var s = n._init;
        return s(n._payload)
    }
    function Yp(n) {
        function s(O, A) {
            if (n) {
                var M = O.deletions;
                M === null ? (O.deletions = [A],
                O.flags |= 16) : M.push(A)
            }
        }
        function o(O, A) {
            if (!n)
                return null;
            for (; A !== null; )
                s(O, A),
                A = A.sibling;
            return null
        }
        function u(O, A) {
            for (O = new Map; A !== null; )
                A.key !== null ? O.set(A.key, A) : O.set(A.index, A),
                A = A.sibling;
            return O
        }
        function f(O, A) {
            return O = fr(O, A),
            O.index = 0,
            O.sibling = null,
            O
        }
        function p(O, A, M) {
            return O.index = M,
            n ? (M = O.alternate,
            M !== null ? (M = M.index,
            M < A ? (O.flags |= 2,
            A) : M) : (O.flags |= 2,
            A)) : (O.flags |= 1048576,
            A)
        }
        function v(O) {
            return n && O.alternate === null && (O.flags |= 2),
            O
        }
        function T(O, A, M, Q) {
            return A === null || A.tag !== 6 ? (A = Gc(M, O.mode, Q),
            A.return = O,
            A) : (A = f(A, M),
            A.return = O,
            A)
        }
        function P(O, A, M, Q) {
            var ie = M.type;
            return ie === Y ? H(O, A, M.props.children, Q, M.key) : A !== null && (A.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === xe && Gp(ie) === A.type) ? (Q = f(A, M.props),
            Q.ref = Wi(O, A, M),
            Q.return = O,
            Q) : (Q = nl(M.type, M.key, M.props, null, O.mode, Q),
            Q.ref = Wi(O, A, M),
            Q.return = O,
            Q)
        }
        function F(O, A, M, Q) {
            return A === null || A.tag !== 4 || A.stateNode.containerInfo !== M.containerInfo || A.stateNode.implementation !== M.implementation ? (A = Yc(M, O.mode, Q),
            A.return = O,
            A) : (A = f(A, M.children || []),
            A.return = O,
            A)
        }
        function H(O, A, M, Q, ie) {
            return A === null || A.tag !== 7 ? (A = Qr(M, O.mode, Q, ie),
            A.return = O,
            A) : (A = f(A, M),
            A.return = O,
            A)
        }
        function q(O, A, M) {
            if (typeof A == "string" && A !== "" || typeof A == "number")
                return A = Gc("" + A, O.mode, M),
                A.return = O,
                A;
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                case D:
                    return M = nl(A.type, A.key, A.props, null, O.mode, M),
                    M.ref = Wi(O, null, A),
                    M.return = O,
                    M;
                case K:
                    return A = Yc(A, O.mode, M),
                    A.return = O,
                    A;
                case xe:
                    var Q = A._init;
                    return q(O, Q(A._payload), M)
                }
                if (Si(A) || se(A))
                    return A = Qr(A, O.mode, M, null),
                    A.return = O,
                    A;
                Oa(O, A)
            }
            return null
        }
        function $(O, A, M, Q) {
            var ie = A !== null ? A.key : null;
            if (typeof M == "string" && M !== "" || typeof M == "number")
                return ie !== null ? null : T(O, A, "" + M, Q);
            if (typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                case D:
                    return M.key === ie ? P(O, A, M, Q) : null;
                case K:
                    return M.key === ie ? F(O, A, M, Q) : null;
                case xe:
                    return ie = M._init,
                    $(O, A, ie(M._payload), Q)
                }
                if (Si(M) || se(M))
                    return ie !== null ? null : H(O, A, M, Q, null);
                Oa(O, M)
            }
            return null
        }
        function X(O, A, M, Q, ie) {
            if (typeof Q == "string" && Q !== "" || typeof Q == "number")
                return O = O.get(M) || null,
                T(A, O, "" + Q, ie);
            if (typeof Q == "object" && Q !== null) {
                switch (Q.$$typeof) {
                case D:
                    return O = O.get(Q.key === null ? M : Q.key) || null,
                    P(A, O, Q, ie);
                case K:
                    return O = O.get(Q.key === null ? M : Q.key) || null,
                    F(A, O, Q, ie);
                case xe:
                    var ae = Q._init;
                    return X(O, A, M, ae(Q._payload), ie)
                }
                if (Si(Q) || se(Q))
                    return O = O.get(M) || null,
                    H(A, O, Q, ie, null);
                Oa(A, Q)
            }
            return null
        }
        function ee(O, A, M, Q) {
            for (var ie = null, ae = null, le = A, ge = A = 0, at = null; le !== null && ge < M.length; ge++) {
                le.index > ge ? (at = le,
                le = null) : at = le.sibling;
                var Re = $(O, le, M[ge], Q);
                if (Re === null) {
                    le === null && (le = at);
                    break
                }
                n && le && Re.alternate === null && s(O, le),
                A = p(Re, A, ge),
                ae === null ? ie = Re : ae.sibling = Re,
                ae = Re,
                le = at
            }
            if (ge === M.length)
                return o(O, le),
                Be && Ur(O, ge),
                ie;
            if (le === null) {
                for (; ge < M.length; ge++)
                    le = q(O, M[ge], Q),
                    le !== null && (A = p(le, A, ge),
                    ae === null ? ie = le : ae.sibling = le,
                    ae = le);
                return Be && Ur(O, ge),
                ie
            }
            for (le = u(O, le); ge < M.length; ge++)
                at = X(le, O, ge, M[ge], Q),
                at !== null && (n && at.alternate !== null && le.delete(at.key === null ? ge : at.key),
                A = p(at, A, ge),
                ae === null ? ie = at : ae.sibling = at,
                ae = at);
            return n && le.forEach(function(hr) {
                return s(O, hr)
            }),
            Be && Ur(O, ge),
            ie
        }
        function re(O, A, M, Q) {
            var ie = se(M);
            if (typeof ie != "function")
                throw Error(r(150));
            if (M = ie.call(M),
            M == null)
                throw Error(r(151));
            for (var ae = ie = null, le = A, ge = A = 0, at = null, Re = M.next(); le !== null && !Re.done; ge++,
            Re = M.next()) {
                le.index > ge ? (at = le,
                le = null) : at = le.sibling;
                var hr = $(O, le, Re.value, Q);
                if (hr === null) {
                    le === null && (le = at);
                    break
                }
                n && le && hr.alternate === null && s(O, le),
                A = p(hr, A, ge),
                ae === null ? ie = hr : ae.sibling = hr,
                ae = hr,
                le = at
            }
            if (Re.done)
                return o(O, le),
                Be && Ur(O, ge),
                ie;
            if (le === null) {
                for (; !Re.done; ge++,
                Re = M.next())
                    Re = q(O, Re.value, Q),
                    Re !== null && (A = p(Re, A, ge),
                    ae === null ? ie = Re : ae.sibling = Re,
                    ae = Re);
                return Be && Ur(O, ge),
                ie
            }
            for (le = u(O, le); !Re.done; ge++,
            Re = M.next())
                Re = X(le, O, ge, Re.value, Q),
                Re !== null && (n && Re.alternate !== null && le.delete(Re.key === null ? ge : Re.key),
                A = p(Re, A, ge),
                ae === null ? ie = Re : ae.sibling = Re,
                ae = Re);
            return n && le.forEach(function(gb) {
                return s(O, gb)
            }),
            Be && Ur(O, ge),
            ie
        }
        function Ge(O, A, M, Q) {
            if (typeof M == "object" && M !== null && M.type === Y && M.key === null && (M = M.props.children),
            typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                case D:
                    e: {
                        for (var ie = M.key, ae = A; ae !== null; ) {
                            if (ae.key === ie) {
                                if (ie = M.type,
                                ie === Y) {
                                    if (ae.tag === 7) {
                                        o(O, ae.sibling),
                                        A = f(ae, M.props.children),
                                        A.return = O,
                                        O = A;
                                        break e
                                    }
                                } else if (ae.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === xe && Gp(ie) === ae.type) {
                                    o(O, ae.sibling),
                                    A = f(ae, M.props),
                                    A.ref = Wi(O, ae, M),
                                    A.return = O,
                                    O = A;
                                    break e
                                }
                                o(O, ae);
                                break
                            } else
                                s(O, ae);
                            ae = ae.sibling
                        }
                        M.type === Y ? (A = Qr(M.props.children, O.mode, Q, M.key),
                        A.return = O,
                        O = A) : (Q = nl(M.type, M.key, M.props, null, O.mode, Q),
                        Q.ref = Wi(O, A, M),
                        Q.return = O,
                        O = Q)
                    }
                    return v(O);
                case K:
                    e: {
                        for (ae = M.key; A !== null; ) {
                            if (A.key === ae)
                                if (A.tag === 4 && A.stateNode.containerInfo === M.containerInfo && A.stateNode.implementation === M.implementation) {
                                    o(O, A.sibling),
                                    A = f(A, M.children || []),
                                    A.return = O,
                                    O = A;
                                    break e
                                } else {
                                    o(O, A);
                                    break
                                }
                            else
                                s(O, A);
                            A = A.sibling
                        }
                        A = Yc(M, O.mode, Q),
                        A.return = O,
                        O = A
                    }
                    return v(O);
                case xe:
                    return ae = M._init,
                    Ge(O, A, ae(M._payload), Q)
                }
                if (Si(M))
                    return ee(O, A, M, Q);
                if (se(M))
                    return re(O, A, M, Q);
                Oa(O, M)
            }
            return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M,
            A !== null && A.tag === 6 ? (o(O, A.sibling),
            A = f(A, M),
            A.return = O,
            O = A) : (o(O, A),
            A = Gc(M, O.mode, Q),
            A.return = O,
            O = A),
            v(O)) : o(O, A)
        }
        return Ge
    }
    var Ds = Yp(!0)
      , Xp = Yp(!1)
      , ja = nr(null)
      , La = null
      , Is = null
      , ic = null;
    function oc() {
        ic = Is = La = null
    }
    function ac(n) {
        var s = ja.current;
        Ve(ja),
        n._currentValue = s
    }
    function lc(n, s, o) {
        for (; n !== null; ) {
            var u = n.alternate;
            if ((n.childLanes & s) !== s ? (n.childLanes |= s,
            u !== null && (u.childLanes |= s)) : u !== null && (u.childLanes & s) !== s && (u.childLanes |= s),
            n === o)
                break;
            n = n.return
        }
    }
    function Fs(n, s) {
        La = n,
        ic = Is = null,
        n = n.dependencies,
        n !== null && n.firstContext !== null && ((n.lanes & s) !== 0 && (Rt = !0),
        n.firstContext = null)
    }
    function Wt(n) {
        var s = n._currentValue;
        if (ic !== n)
            if (n = {
                context: n,
                memoizedValue: s,
                next: null
            },
            Is === null) {
                if (La === null)
                    throw Error(r(308));
                Is = n,
                La.dependencies = {
                    lanes: 0,
                    firstContext: n
                }
            } else
                Is = Is.next = n;
        return s
    }
    var Br = null;
    function uc(n) {
        Br === null ? Br = [n] : Br.push(n)
    }
    function Jp(n, s, o, u) {
        var f = s.interleaved;
        return f === null ? (o.next = o,
        uc(s)) : (o.next = f.next,
        f.next = o),
        s.interleaved = o,
        On(n, u)
    }
    function On(n, s) {
        n.lanes |= s;
        var o = n.alternate;
        for (o !== null && (o.lanes |= s),
        o = n,
        n = n.return; n !== null; )
            n.childLanes |= s,
            o = n.alternate,
            o !== null && (o.childLanes |= s),
            o = n,
            n = n.return;
        return o.tag === 3 ? o.stateNode : null
    }
    var ir = !1;
    function cc(n) {
        n.updateQueue = {
            baseState: n.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function Zp(n, s) {
        n = n.updateQueue,
        s.updateQueue === n && (s.updateQueue = {
            baseState: n.baseState,
            firstBaseUpdate: n.firstBaseUpdate,
            lastBaseUpdate: n.lastBaseUpdate,
            shared: n.shared,
            effects: n.effects
        })
    }
    function jn(n, s) {
        return {
            eventTime: n,
            lane: s,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function or(n, s, o) {
        var u = n.updateQueue;
        if (u === null)
            return null;
        if (u = u.shared,
        (Pe & 2) !== 0) {
            var f = u.pending;
            return f === null ? s.next = s : (s.next = f.next,
            f.next = s),
            u.pending = s,
            On(n, o)
        }
        return f = u.interleaved,
        f === null ? (s.next = s,
        uc(u)) : (s.next = f.next,
        f.next = s),
        u.interleaved = s,
        On(n, o)
    }
    function Ma(n, s, o) {
        if (s = s.updateQueue,
        s !== null && (s = s.shared,
        (o & 4194240) !== 0)) {
            var u = s.lanes;
            u &= n.pendingLanes,
            o |= u,
            s.lanes = o,
            Eu(n, o)
        }
    }
    function em(n, s) {
        var o = n.updateQueue
          , u = n.alternate;
        if (u !== null && (u = u.updateQueue,
        o === u)) {
            var f = null
              , p = null;
            if (o = o.firstBaseUpdate,
            o !== null) {
                do {
                    var v = {
                        eventTime: o.eventTime,
                        lane: o.lane,
                        tag: o.tag,
                        payload: o.payload,
                        callback: o.callback,
                        next: null
                    };
                    p === null ? f = p = v : p = p.next = v,
                    o = o.next
                } while (o !== null);
                p === null ? f = p = s : p = p.next = s
            } else
                f = p = s;
            o = {
                baseState: u.baseState,
                firstBaseUpdate: f,
                lastBaseUpdate: p,
                shared: u.shared,
                effects: u.effects
            },
            n.updateQueue = o;
            return
        }
        n = o.lastBaseUpdate,
        n === null ? o.firstBaseUpdate = s : n.next = s,
        o.lastBaseUpdate = s
    }
    function Da(n, s, o, u) {
        var f = n.updateQueue;
        ir = !1;
        var p = f.firstBaseUpdate
          , v = f.lastBaseUpdate
          , T = f.shared.pending;
        if (T !== null) {
            f.shared.pending = null;
            var P = T
              , F = P.next;
            P.next = null,
            v === null ? p = F : v.next = F,
            v = P;
            var H = n.alternate;
            H !== null && (H = H.updateQueue,
            T = H.lastBaseUpdate,
            T !== v && (T === null ? H.firstBaseUpdate = F : T.next = F,
            H.lastBaseUpdate = P))
        }
        if (p !== null) {
            var q = f.baseState;
            v = 0,
            H = F = P = null,
            T = p;
            do {
                var $ = T.lane
                  , X = T.eventTime;
                if ((u & $) === $) {
                    H !== null && (H = H.next = {
                        eventTime: X,
                        lane: 0,
                        tag: T.tag,
                        payload: T.payload,
                        callback: T.callback,
                        next: null
                    });
                    e: {
                        var ee = n
                          , re = T;
                        switch ($ = s,
                        X = o,
                        re.tag) {
                        case 1:
                            if (ee = re.payload,
                            typeof ee == "function") {
                                q = ee.call(X, q, $);
                                break e
                            }
                            q = ee;
                            break e;
                        case 3:
                            ee.flags = ee.flags & -65537 | 128;
                        case 0:
                            if (ee = re.payload,
                            $ = typeof ee == "function" ? ee.call(X, q, $) : ee,
                            $ == null)
                                break e;
                            q = B({}, q, $);
                            break e;
                        case 2:
                            ir = !0
                        }
                    }
                    T.callback !== null && T.lane !== 0 && (n.flags |= 64,
                    $ = f.effects,
                    $ === null ? f.effects = [T] : $.push(T))
                } else
                    X = {
                        eventTime: X,
                        lane: $,
                        tag: T.tag,
                        payload: T.payload,
                        callback: T.callback,
                        next: null
                    },
                    H === null ? (F = H = X,
                    P = q) : H = H.next = X,
                    v |= $;
                if (T = T.next,
                T === null) {
                    if (T = f.shared.pending,
                    T === null)
                        break;
                    $ = T,
                    T = $.next,
                    $.next = null,
                    f.lastBaseUpdate = $,
                    f.shared.pending = null
                }
            } while (!0);
            if (H === null && (P = q),
            f.baseState = P,
            f.firstBaseUpdate = F,
            f.lastBaseUpdate = H,
            s = f.shared.interleaved,
            s !== null) {
                f = s;
                do
                    v |= f.lane,
                    f = f.next;
                while (f !== s)
            } else
                p === null && (f.shared.lanes = 0);
            Hr |= v,
            n.lanes = v,
            n.memoizedState = q
        }
    }
    function tm(n, s, o) {
        if (n = s.effects,
        s.effects = null,
        n !== null)
            for (s = 0; s < n.length; s++) {
                var u = n[s]
                  , f = u.callback;
                if (f !== null) {
                    if (u.callback = null,
                    u = o,
                    typeof f != "function")
                        throw Error(r(191, f));
                    f.call(u)
                }
            }
    }
    var Ki = {}
      , yn = nr(Ki)
      , Qi = nr(Ki)
      , Gi = nr(Ki);
    function zr(n) {
        if (n === Ki)
            throw Error(r(174));
        return n
    }
    function dc(n, s) {
        switch (Ie(Gi, s),
        Ie(Qi, n),
        Ie(yn, Ki),
        n = s.nodeType,
        n) {
        case 9:
        case 11:
            s = (s = s.documentElement) ? s.namespaceURI : fu(null, "");
            break;
        default:
            n = n === 8 ? s.parentNode : s,
            s = n.namespaceURI || null,
            n = n.tagName,
            s = fu(s, n)
        }
        Ve(yn),
        Ie(yn, s)
    }
    function Vs() {
        Ve(yn),
        Ve(Qi),
        Ve(Gi)
    }
    function nm(n) {
        zr(Gi.current);
        var s = zr(yn.current)
          , o = fu(s, n.type);
        s !== o && (Ie(Qi, n),
        Ie(yn, o))
    }
    function fc(n) {
        Qi.current === n && (Ve(yn),
        Ve(Qi))
    }
    var ze = nr(0);
    function Ia(n) {
        for (var s = n; s !== null; ) {
            if (s.tag === 13) {
                var o = s.memoizedState;
                if (o !== null && (o = o.dehydrated,
                o === null || o.data === "$?" || o.data === "$!"))
                    return s
            } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
                if ((s.flags & 128) !== 0)
                    return s
            } else if (s.child !== null) {
                s.child.return = s,
                s = s.child;
                continue
            }
            if (s === n)
                break;
            for (; s.sibling === null; ) {
                if (s.return === null || s.return === n)
                    return null;
                s = s.return
            }
            s.sibling.return = s.return,
            s = s.sibling
        }
        return null
    }
    var hc = [];
    function pc() {
        for (var n = 0; n < hc.length; n++)
            hc[n]._workInProgressVersionPrimary = null;
        hc.length = 0
    }
    var Fa = _.ReactCurrentDispatcher
      , mc = _.ReactCurrentBatchConfig
      , $r = 0
      , $e = null
      , tt = null
      , it = null
      , Va = !1
      , Yi = !1
      , Xi = 0
      , FS = 0;
    function gt() {
        throw Error(r(321))
    }
    function gc(n, s) {
        if (s === null)
            return !1;
        for (var o = 0; o < s.length && o < n.length; o++)
            if (!rn(n[o], s[o]))
                return !1;
        return !0
    }
    function yc(n, s, o, u, f, p) {
        if ($r = p,
        $e = s,
        s.memoizedState = null,
        s.updateQueue = null,
        s.lanes = 0,
        Fa.current = n === null || n.memoizedState === null ? zS : $S,
        n = o(u, f),
        Yi) {
            p = 0;
            do {
                if (Yi = !1,
                Xi = 0,
                25 <= p)
                    throw Error(r(301));
                p += 1,
                it = tt = null,
                s.updateQueue = null,
                Fa.current = HS,
                n = o(u, f)
            } while (Yi)
        }
        if (Fa.current = za,
        s = tt !== null && tt.next !== null,
        $r = 0,
        it = tt = $e = null,
        Va = !1,
        s)
            throw Error(r(300));
        return n
    }
    function vc() {
        var n = Xi !== 0;
        return Xi = 0,
        n
    }
    function vn() {
        var n = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return it === null ? $e.memoizedState = it = n : it = it.next = n,
        it
    }
    function Kt() {
        if (tt === null) {
            var n = $e.alternate;
            n = n !== null ? n.memoizedState : null
        } else
            n = tt.next;
        var s = it === null ? $e.memoizedState : it.next;
        if (s !== null)
            it = s,
            tt = n;
        else {
            if (n === null)
                throw Error(r(310));
            tt = n,
            n = {
                memoizedState: tt.memoizedState,
                baseState: tt.baseState,
                baseQueue: tt.baseQueue,
                queue: tt.queue,
                next: null
            },
            it === null ? $e.memoizedState = it = n : it = it.next = n
        }
        return it
    }
    function Ji(n, s) {
        return typeof s == "function" ? s(n) : s
    }
    function wc(n) {
        var s = Kt()
          , o = s.queue;
        if (o === null)
            throw Error(r(311));
        o.lastRenderedReducer = n;
        var u = tt
          , f = u.baseQueue
          , p = o.pending;
        if (p !== null) {
            if (f !== null) {
                var v = f.next;
                f.next = p.next,
                p.next = v
            }
            u.baseQueue = f = p,
            o.pending = null
        }
        if (f !== null) {
            p = f.next,
            u = u.baseState;
            var T = v = null
              , P = null
              , F = p;
            do {
                var H = F.lane;
                if (($r & H) === H)
                    P !== null && (P = P.next = {
                        lane: 0,
                        action: F.action,
                        hasEagerState: F.hasEagerState,
                        eagerState: F.eagerState,
                        next: null
                    }),
                    u = F.hasEagerState ? F.eagerState : n(u, F.action);
                else {
                    var q = {
                        lane: H,
                        action: F.action,
                        hasEagerState: F.hasEagerState,
                        eagerState: F.eagerState,
                        next: null
                    };
                    P === null ? (T = P = q,
                    v = u) : P = P.next = q,
                    $e.lanes |= H,
                    Hr |= H
                }
                F = F.next
            } while (F !== null && F !== p);
            P === null ? v = u : P.next = T,
            rn(u, s.memoizedState) || (Rt = !0),
            s.memoizedState = u,
            s.baseState = v,
            s.baseQueue = P,
            o.lastRenderedState = u
        }
        if (n = o.interleaved,
        n !== null) {
            f = n;
            do
                p = f.lane,
                $e.lanes |= p,
                Hr |= p,
                f = f.next;
            while (f !== n)
        } else
            f === null && (o.lanes = 0);
        return [s.memoizedState, o.dispatch]
    }
    function xc(n) {
        var s = Kt()
          , o = s.queue;
        if (o === null)
            throw Error(r(311));
        o.lastRenderedReducer = n;
        var u = o.dispatch
          , f = o.pending
          , p = s.memoizedState;
        if (f !== null) {
            o.pending = null;
            var v = f = f.next;
            do
                p = n(p, v.action),
                v = v.next;
            while (v !== f);
            rn(p, s.memoizedState) || (Rt = !0),
            s.memoizedState = p,
            s.baseQueue === null && (s.baseState = p),
            o.lastRenderedState = p
        }
        return [p, u]
    }
    function rm() {}
    function sm(n, s) {
        var o = $e
          , u = Kt()
          , f = s()
          , p = !rn(u.memoizedState, f);
        if (p && (u.memoizedState = f,
        Rt = !0),
        u = u.queue,
        Sc(am.bind(null, o, u, n), [n]),
        u.getSnapshot !== s || p || it !== null && it.memoizedState.tag & 1) {
            if (o.flags |= 2048,
            Zi(9, om.bind(null, o, u, f, s), void 0, null),
            ot === null)
                throw Error(r(349));
            ($r & 30) !== 0 || im(o, s, f)
        }
        return f
    }
    function im(n, s, o) {
        n.flags |= 16384,
        n = {
            getSnapshot: s,
            value: o
        },
        s = $e.updateQueue,
        s === null ? (s = {
            lastEffect: null,
            stores: null
        },
        $e.updateQueue = s,
        s.stores = [n]) : (o = s.stores,
        o === null ? s.stores = [n] : o.push(n))
    }
    function om(n, s, o, u) {
        s.value = o,
        s.getSnapshot = u,
        lm(s) && um(n)
    }
    function am(n, s, o) {
        return o(function() {
            lm(s) && um(n)
        })
    }
    function lm(n) {
        var s = n.getSnapshot;
        n = n.value;
        try {
            var o = s();
            return !rn(n, o)
        } catch {
            return !0
        }
    }
    function um(n) {
        var s = On(n, 1);
        s !== null && un(s, n, 1, -1)
    }
    function cm(n) {
        var s = vn();
        return typeof n == "function" && (n = n()),
        s.memoizedState = s.baseState = n,
        n = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ji,
            lastRenderedState: n
        },
        s.queue = n,
        n = n.dispatch = BS.bind(null, $e, n),
        [s.memoizedState, n]
    }
    function Zi(n, s, o, u) {
        return n = {
            tag: n,
            create: s,
            destroy: o,
            deps: u,
            next: null
        },
        s = $e.updateQueue,
        s === null ? (s = {
            lastEffect: null,
            stores: null
        },
        $e.updateQueue = s,
        s.lastEffect = n.next = n) : (o = s.lastEffect,
        o === null ? s.lastEffect = n.next = n : (u = o.next,
        o.next = n,
        n.next = u,
        s.lastEffect = n)),
        n
    }
    function dm() {
        return Kt().memoizedState
    }
    function Ua(n, s, o, u) {
        var f = vn();
        $e.flags |= n,
        f.memoizedState = Zi(1 | s, o, void 0, u === void 0 ? null : u)
    }
    function Ba(n, s, o, u) {
        var f = Kt();
        u = u === void 0 ? null : u;
        var p = void 0;
        if (tt !== null) {
            var v = tt.memoizedState;
            if (p = v.destroy,
            u !== null && gc(u, v.deps)) {
                f.memoizedState = Zi(s, o, p, u);
                return
            }
        }
        $e.flags |= n,
        f.memoizedState = Zi(1 | s, o, p, u)
    }
    function fm(n, s) {
        return Ua(8390656, 8, n, s)
    }
    function Sc(n, s) {
        return Ba(2048, 8, n, s)
    }
    function hm(n, s) {
        return Ba(4, 2, n, s)
    }
    function pm(n, s) {
        return Ba(4, 4, n, s)
    }
    function mm(n, s) {
        if (typeof s == "function")
            return n = n(),
            s(n),
            function() {
                s(null)
            }
            ;
        if (s != null)
            return n = n(),
            s.current = n,
            function() {
                s.current = null
            }
    }
    function gm(n, s, o) {
        return o = o != null ? o.concat([n]) : null,
        Ba(4, 4, mm.bind(null, s, n), o)
    }
    function bc() {}
    function ym(n, s) {
        var o = Kt();
        s = s === void 0 ? null : s;
        var u = o.memoizedState;
        return u !== null && s !== null && gc(s, u[1]) ? u[0] : (o.memoizedState = [n, s],
        n)
    }
    function vm(n, s) {
        var o = Kt();
        s = s === void 0 ? null : s;
        var u = o.memoizedState;
        return u !== null && s !== null && gc(s, u[1]) ? u[0] : (n = n(),
        o.memoizedState = [n, s],
        n)
    }
    function wm(n, s, o) {
        return ($r & 21) === 0 ? (n.baseState && (n.baseState = !1,
        Rt = !0),
        n.memoizedState = o) : (rn(o, s) || (o = Gh(),
        $e.lanes |= o,
        Hr |= o,
        n.baseState = !0),
        s)
    }
    function VS(n, s) {
        var o = je;
        je = o !== 0 && 4 > o ? o : 4,
        n(!0);
        var u = mc.transition;
        mc.transition = {};
        try {
            n(!1),
            s()
        } finally {
            je = o,
            mc.transition = u
        }
    }
    function xm() {
        return Kt().memoizedState
    }
    function US(n, s, o) {
        var u = cr(n);
        if (o = {
            lane: u,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Sm(n))
            bm(s, o);
        else if (o = Jp(n, s, o, u),
        o !== null) {
            var f = Et();
            un(o, n, u, f),
            km(o, s, u)
        }
    }
    function BS(n, s, o) {
        var u = cr(n)
          , f = {
            lane: u,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Sm(n))
            bm(s, f);
        else {
            var p = n.alternate;
            if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = s.lastRenderedReducer,
            p !== null))
                try {
                    var v = s.lastRenderedState
                      , T = p(v, o);
                    if (f.hasEagerState = !0,
                    f.eagerState = T,
                    rn(T, v)) {
                        var P = s.interleaved;
                        P === null ? (f.next = f,
                        uc(s)) : (f.next = P.next,
                        P.next = f),
                        s.interleaved = f;
                        return
                    }
                } catch {} finally {}
            o = Jp(n, s, f, u),
            o !== null && (f = Et(),
            un(o, n, u, f),
            km(o, s, u))
        }
    }
    function Sm(n) {
        var s = n.alternate;
        return n === $e || s !== null && s === $e
    }
    function bm(n, s) {
        Yi = Va = !0;
        var o = n.pending;
        o === null ? s.next = s : (s.next = o.next,
        o.next = s),
        n.pending = s
    }
    function km(n, s, o) {
        if ((o & 4194240) !== 0) {
            var u = s.lanes;
            u &= n.pendingLanes,
            o |= u,
            s.lanes = o,
            Eu(n, o)
        }
    }
    var za = {
        readContext: Wt,
        useCallback: gt,
        useContext: gt,
        useEffect: gt,
        useImperativeHandle: gt,
        useInsertionEffect: gt,
        useLayoutEffect: gt,
        useMemo: gt,
        useReducer: gt,
        useRef: gt,
        useState: gt,
        useDebugValue: gt,
        useDeferredValue: gt,
        useTransition: gt,
        useMutableSource: gt,
        useSyncExternalStore: gt,
        useId: gt,
        unstable_isNewReconciler: !1
    }
      , zS = {
        readContext: Wt,
        useCallback: function(n, s) {
            return vn().memoizedState = [n, s === void 0 ? null : s],
            n
        },
        useContext: Wt,
        useEffect: fm,
        useImperativeHandle: function(n, s, o) {
            return o = o != null ? o.concat([n]) : null,
            Ua(4194308, 4, mm.bind(null, s, n), o)
        },
        useLayoutEffect: function(n, s) {
            return Ua(4194308, 4, n, s)
        },
        useInsertionEffect: function(n, s) {
            return Ua(4, 2, n, s)
        },
        useMemo: function(n, s) {
            var o = vn();
            return s = s === void 0 ? null : s,
            n = n(),
            o.memoizedState = [n, s],
            n
        },
        useReducer: function(n, s, o) {
            var u = vn();
            return s = o !== void 0 ? o(s) : s,
            u.memoizedState = u.baseState = s,
            n = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: n,
                lastRenderedState: s
            },
            u.queue = n,
            n = n.dispatch = US.bind(null, $e, n),
            [u.memoizedState, n]
        },
        useRef: function(n) {
            var s = vn();
            return n = {
                current: n
            },
            s.memoizedState = n
        },
        useState: cm,
        useDebugValue: bc,
        useDeferredValue: function(n) {
            return vn().memoizedState = n
        },
        useTransition: function() {
            var n = cm(!1)
              , s = n[0];
            return n = VS.bind(null, n[1]),
            vn().memoizedState = n,
            [s, n]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(n, s, o) {
            var u = $e
              , f = vn();
            if (Be) {
                if (o === void 0)
                    throw Error(r(407));
                o = o()
            } else {
                if (o = s(),
                ot === null)
                    throw Error(r(349));
                ($r & 30) !== 0 || im(u, s, o)
            }
            f.memoizedState = o;
            var p = {
                value: o,
                getSnapshot: s
            };
            return f.queue = p,
            fm(am.bind(null, u, p, n), [n]),
            u.flags |= 2048,
            Zi(9, om.bind(null, u, p, o, s), void 0, null),
            o
        },
        useId: function() {
            var n = vn()
              , s = ot.identifierPrefix;
            if (Be) {
                var o = Nn
                  , u = An;
                o = (u & ~(1 << 32 - nn(u) - 1)).toString(32) + o,
                s = ":" + s + "R" + o,
                o = Xi++,
                0 < o && (s += "H" + o.toString(32)),
                s += ":"
            } else
                o = FS++,
                s = ":" + s + "r" + o.toString(32) + ":";
            return n.memoizedState = s
        },
        unstable_isNewReconciler: !1
    }
      , $S = {
        readContext: Wt,
        useCallback: ym,
        useContext: Wt,
        useEffect: Sc,
        useImperativeHandle: gm,
        useInsertionEffect: hm,
        useLayoutEffect: pm,
        useMemo: vm,
        useReducer: wc,
        useRef: dm,
        useState: function() {
            return wc(Ji)
        },
        useDebugValue: bc,
        useDeferredValue: function(n) {
            var s = Kt();
            return wm(s, tt.memoizedState, n)
        },
        useTransition: function() {
            var n = wc(Ji)[0]
              , s = Kt().memoizedState;
            return [n, s]
        },
        useMutableSource: rm,
        useSyncExternalStore: sm,
        useId: xm,
        unstable_isNewReconciler: !1
    }
      , HS = {
        readContext: Wt,
        useCallback: ym,
        useContext: Wt,
        useEffect: Sc,
        useImperativeHandle: gm,
        useInsertionEffect: hm,
        useLayoutEffect: pm,
        useMemo: vm,
        useReducer: xc,
        useRef: dm,
        useState: function() {
            return xc(Ji)
        },
        useDebugValue: bc,
        useDeferredValue: function(n) {
            var s = Kt();
            return tt === null ? s.memoizedState = n : wm(s, tt.memoizedState, n)
        },
        useTransition: function() {
            var n = xc(Ji)[0]
              , s = Kt().memoizedState;
            return [n, s]
        },
        useMutableSource: rm,
        useSyncExternalStore: sm,
        useId: xm,
        unstable_isNewReconciler: !1
    };
    function on(n, s) {
        if (n && n.defaultProps) {
            s = B({}, s),
            n = n.defaultProps;
            for (var o in n)
                s[o] === void 0 && (s[o] = n[o]);
            return s
        }
        return s
    }
    function kc(n, s, o, u) {
        s = n.memoizedState,
        o = o(u, s),
        o = o == null ? s : B({}, s, o),
        n.memoizedState = o,
        n.lanes === 0 && (n.updateQueue.baseState = o)
    }
    var $a = {
        isMounted: function(n) {
            return (n = n._reactInternals) ? Dr(n) === n : !1
        },
        enqueueSetState: function(n, s, o) {
            n = n._reactInternals;
            var u = Et()
              , f = cr(n)
              , p = jn(u, f);
            p.payload = s,
            o != null && (p.callback = o),
            s = or(n, p, f),
            s !== null && (un(s, n, f, u),
            Ma(s, n, f))
        },
        enqueueReplaceState: function(n, s, o) {
            n = n._reactInternals;
            var u = Et()
              , f = cr(n)
              , p = jn(u, f);
            p.tag = 1,
            p.payload = s,
            o != null && (p.callback = o),
            s = or(n, p, f),
            s !== null && (un(s, n, f, u),
            Ma(s, n, f))
        },
        enqueueForceUpdate: function(n, s) {
            n = n._reactInternals;
            var o = Et()
              , u = cr(n)
              , f = jn(o, u);
            f.tag = 2,
            s != null && (f.callback = s),
            s = or(n, f, u),
            s !== null && (un(s, n, u, o),
            Ma(s, n, u))
        }
    };
    function Em(n, s, o, u, f, p, v) {
        return n = n.stateNode,
        typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, p, v) : s.prototype && s.prototype.isPureReactComponent ? !Vi(o, u) || !Vi(f, p) : !0
    }
    function Tm(n, s, o) {
        var u = !1
          , f = rr
          , p = s.contextType;
        return typeof p == "object" && p !== null ? p = Wt(p) : (f = _t(s) ? Fr : mt.current,
        u = s.contextTypes,
        p = (u = u != null) ? Os(n, f) : rr),
        s = new s(o,p),
        n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        s.updater = $a,
        n.stateNode = s,
        s._reactInternals = n,
        u && (n = n.stateNode,
        n.__reactInternalMemoizedUnmaskedChildContext = f,
        n.__reactInternalMemoizedMaskedChildContext = p),
        s
    }
    function Cm(n, s, o, u) {
        n = s.state,
        typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(o, u),
        typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(o, u),
        s.state !== n && $a.enqueueReplaceState(s, s.state, null)
    }
    function Ec(n, s, o, u) {
        var f = n.stateNode;
        f.props = o,
        f.state = n.memoizedState,
        f.refs = {},
        cc(n);
        var p = s.contextType;
        typeof p == "object" && p !== null ? f.context = Wt(p) : (p = _t(s) ? Fr : mt.current,
        f.context = Os(n, p)),
        f.state = n.memoizedState,
        p = s.getDerivedStateFromProps,
        typeof p == "function" && (kc(n, s, p, o),
        f.state = n.memoizedState),
        typeof s.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (s = f.state,
        typeof f.componentWillMount == "function" && f.componentWillMount(),
        typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(),
        s !== f.state && $a.enqueueReplaceState(f, f.state, null),
        Da(n, o, f, u),
        f.state = n.memoizedState),
        typeof f.componentDidMount == "function" && (n.flags |= 4194308)
    }
    function Us(n, s) {
        try {
            var o = ""
              , u = s;
            do
                o += ue(u),
                u = u.return;
            while (u);
            var f = o
        } catch (p) {
            f = `
Error generating stack: ` + p.message + `
` + p.stack
        }
        return {
            value: n,
            source: s,
            stack: f,
            digest: null
        }
    }
    function Tc(n, s, o) {
        return {
            value: n,
            source: null,
            stack: o ?? null,
            digest: s ?? null
        }
    }
    function Cc(n, s) {
        try {
            console.error(s.value)
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }
    var qS = typeof WeakMap == "function" ? WeakMap : Map;
    function Pm(n, s, o) {
        o = jn(-1, o),
        o.tag = 3,
        o.payload = {
            element: null
        };
        var u = s.value;
        return o.callback = function() {
            Ya || (Ya = !0,
            Bc = u),
            Cc(n, s)
        }
        ,
        o
    }
    function _m(n, s, o) {
        o = jn(-1, o),
        o.tag = 3;
        var u = n.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var f = s.value;
            o.payload = function() {
                return u(f)
            }
            ,
            o.callback = function() {
                Cc(n, s)
            }
        }
        var p = n.stateNode;
        return p !== null && typeof p.componentDidCatch == "function" && (o.callback = function() {
            Cc(n, s),
            typeof u != "function" && (lr === null ? lr = new Set([this]) : lr.add(this));
            var v = s.stack;
            this.componentDidCatch(s.value, {
                componentStack: v !== null ? v : ""
            })
        }
        ),
        o
    }
    function Rm(n, s, o) {
        var u = n.pingCache;
        if (u === null) {
            u = n.pingCache = new qS;
            var f = new Set;
            u.set(s, f)
        } else
            f = u.get(s),
            f === void 0 && (f = new Set,
            u.set(s, f));
        f.has(o) || (f.add(o),
        n = ib.bind(null, n, s, o),
        s.then(n, n))
    }
    function Am(n) {
        do {
            var s;
            if ((s = n.tag === 13) && (s = n.memoizedState,
            s = s !== null ? s.dehydrated !== null : !0),
            s)
                return n;
            n = n.return
        } while (n !== null);
        return null
    }
    function Nm(n, s, o, u, f) {
        return (n.mode & 1) === 0 ? (n === s ? n.flags |= 65536 : (n.flags |= 128,
        o.flags |= 131072,
        o.flags &= -52805,
        o.tag === 1 && (o.alternate === null ? o.tag = 17 : (s = jn(-1, 1),
        s.tag = 2,
        or(o, s, 1))),
        o.lanes |= 1),
        n) : (n.flags |= 65536,
        n.lanes = f,
        n)
    }
    var WS = _.ReactCurrentOwner
      , Rt = !1;
    function kt(n, s, o, u) {
        s.child = n === null ? Xp(s, null, o, u) : Ds(s, n.child, o, u)
    }
    function Om(n, s, o, u, f) {
        o = o.render;
        var p = s.ref;
        return Fs(s, f),
        u = yc(n, s, o, u, p, f),
        o = vc(),
        n !== null && !Rt ? (s.updateQueue = n.updateQueue,
        s.flags &= -2053,
        n.lanes &= ~f,
        Ln(n, s, f)) : (Be && o && ec(s),
        s.flags |= 1,
        kt(n, s, u, f),
        s.child)
    }
    function jm(n, s, o, u, f) {
        if (n === null) {
            var p = o.type;
            return typeof p == "function" && !Qc(p) && p.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (s.tag = 15,
            s.type = p,
            Lm(n, s, p, u, f)) : (n = nl(o.type, null, u, s, s.mode, f),
            n.ref = s.ref,
            n.return = s,
            s.child = n)
        }
        if (p = n.child,
        (n.lanes & f) === 0) {
            var v = p.memoizedProps;
            if (o = o.compare,
            o = o !== null ? o : Vi,
            o(v, u) && n.ref === s.ref)
                return Ln(n, s, f)
        }
        return s.flags |= 1,
        n = fr(p, u),
        n.ref = s.ref,
        n.return = s,
        s.child = n
    }
    function Lm(n, s, o, u, f) {
        if (n !== null) {
            var p = n.memoizedProps;
            if (Vi(p, u) && n.ref === s.ref)
                if (Rt = !1,
                s.pendingProps = u = p,
                (n.lanes & f) !== 0)
                    (n.flags & 131072) !== 0 && (Rt = !0);
                else
                    return s.lanes = n.lanes,
                    Ln(n, s, f)
        }
        return Pc(n, s, o, u, f)
    }
    function Mm(n, s, o) {
        var u = s.pendingProps
          , f = u.children
          , p = n !== null ? n.memoizedState : null;
        if (u.mode === "hidden")
            if ((s.mode & 1) === 0)
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                Ie(zs, Bt),
                Bt |= o;
            else {
                if ((o & 1073741824) === 0)
                    return n = p !== null ? p.baseLanes | o : o,
                    s.lanes = s.childLanes = 1073741824,
                    s.memoizedState = {
                        baseLanes: n,
                        cachePool: null,
                        transitions: null
                    },
                    s.updateQueue = null,
                    Ie(zs, Bt),
                    Bt |= n,
                    null;
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                u = p !== null ? p.baseLanes : o,
                Ie(zs, Bt),
                Bt |= u
            }
        else
            p !== null ? (u = p.baseLanes | o,
            s.memoizedState = null) : u = o,
            Ie(zs, Bt),
            Bt |= u;
        return kt(n, s, f, o),
        s.child
    }
    function Dm(n, s) {
        var o = s.ref;
        (n === null && o !== null || n !== null && n.ref !== o) && (s.flags |= 512,
        s.flags |= 2097152)
    }
    function Pc(n, s, o, u, f) {
        var p = _t(o) ? Fr : mt.current;
        return p = Os(s, p),
        Fs(s, f),
        o = yc(n, s, o, u, p, f),
        u = vc(),
        n !== null && !Rt ? (s.updateQueue = n.updateQueue,
        s.flags &= -2053,
        n.lanes &= ~f,
        Ln(n, s, f)) : (Be && u && ec(s),
        s.flags |= 1,
        kt(n, s, o, f),
        s.child)
    }
    function Im(n, s, o, u, f) {
        if (_t(o)) {
            var p = !0;
            Pa(s)
        } else
            p = !1;
        if (Fs(s, f),
        s.stateNode === null)
            qa(n, s),
            Tm(s, o, u),
            Ec(s, o, u, f),
            u = !0;
        else if (n === null) {
            var v = s.stateNode
              , T = s.memoizedProps;
            v.props = T;
            var P = v.context
              , F = o.contextType;
            typeof F == "object" && F !== null ? F = Wt(F) : (F = _t(o) ? Fr : mt.current,
            F = Os(s, F));
            var H = o.getDerivedStateFromProps
              , q = typeof H == "function" || typeof v.getSnapshotBeforeUpdate == "function";
            q || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (T !== u || P !== F) && Cm(s, v, u, F),
            ir = !1;
            var $ = s.memoizedState;
            v.state = $,
            Da(s, u, v, f),
            P = s.memoizedState,
            T !== u || $ !== P || Pt.current || ir ? (typeof H == "function" && (kc(s, o, H, u),
            P = s.memoizedState),
            (T = ir || Em(s, o, T, u, $, P, F)) ? (q || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (typeof v.componentWillMount == "function" && v.componentWillMount(),
            typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount()),
            typeof v.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof v.componentDidMount == "function" && (s.flags |= 4194308),
            s.memoizedProps = u,
            s.memoizedState = P),
            v.props = u,
            v.state = P,
            v.context = F,
            u = T) : (typeof v.componentDidMount == "function" && (s.flags |= 4194308),
            u = !1)
        } else {
            v = s.stateNode,
            Zp(n, s),
            T = s.memoizedProps,
            F = s.type === s.elementType ? T : on(s.type, T),
            v.props = F,
            q = s.pendingProps,
            $ = v.context,
            P = o.contextType,
            typeof P == "object" && P !== null ? P = Wt(P) : (P = _t(o) ? Fr : mt.current,
            P = Os(s, P));
            var X = o.getDerivedStateFromProps;
            (H = typeof X == "function" || typeof v.getSnapshotBeforeUpdate == "function") || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (T !== q || $ !== P) && Cm(s, v, u, P),
            ir = !1,
            $ = s.memoizedState,
            v.state = $,
            Da(s, u, v, f);
            var ee = s.memoizedState;
            T !== q || $ !== ee || Pt.current || ir ? (typeof X == "function" && (kc(s, o, X, u),
            ee = s.memoizedState),
            (F = ir || Em(s, o, F, u, $, ee, P) || !1) ? (H || typeof v.UNSAFE_componentWillUpdate != "function" && typeof v.componentWillUpdate != "function" || (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(u, ee, P),
            typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(u, ee, P)),
            typeof v.componentDidUpdate == "function" && (s.flags |= 4),
            typeof v.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof v.componentDidUpdate != "function" || T === n.memoizedProps && $ === n.memoizedState || (s.flags |= 4),
            typeof v.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && $ === n.memoizedState || (s.flags |= 1024),
            s.memoizedProps = u,
            s.memoizedState = ee),
            v.props = u,
            v.state = ee,
            v.context = P,
            u = F) : (typeof v.componentDidUpdate != "function" || T === n.memoizedProps && $ === n.memoizedState || (s.flags |= 4),
            typeof v.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && $ === n.memoizedState || (s.flags |= 1024),
            u = !1)
        }
        return _c(n, s, o, u, p, f)
    }
    function _c(n, s, o, u, f, p) {
        Dm(n, s);
        var v = (s.flags & 128) !== 0;
        if (!u && !v)
            return f && zp(s, o, !1),
            Ln(n, s, p);
        u = s.stateNode,
        WS.current = s;
        var T = v && typeof o.getDerivedStateFromError != "function" ? null : u.render();
        return s.flags |= 1,
        n !== null && v ? (s.child = Ds(s, n.child, null, p),
        s.child = Ds(s, null, T, p)) : kt(n, s, T, p),
        s.memoizedState = u.state,
        f && zp(s, o, !0),
        s.child
    }
    function Fm(n) {
        var s = n.stateNode;
        s.pendingContext ? Up(n, s.pendingContext, s.pendingContext !== s.context) : s.context && Up(n, s.context, !1),
        dc(n, s.containerInfo)
    }
    function Vm(n, s, o, u, f) {
        return Ms(),
        sc(f),
        s.flags |= 256,
        kt(n, s, o, u),
        s.child
    }
    var Rc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Ac(n) {
        return {
            baseLanes: n,
            cachePool: null,
            transitions: null
        }
    }
    function Um(n, s, o) {
        var u = s.pendingProps, f = ze.current, p = !1, v = (s.flags & 128) !== 0, T;
        if ((T = v) || (T = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0),
        T ? (p = !0,
        s.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1),
        Ie(ze, f & 1),
        n === null)
            return rc(s),
            n = s.memoizedState,
            n !== null && (n = n.dehydrated,
            n !== null) ? ((s.mode & 1) === 0 ? s.lanes = 1 : n.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824,
            null) : (v = u.children,
            n = u.fallback,
            p ? (u = s.mode,
            p = s.child,
            v = {
                mode: "hidden",
                children: v
            },
            (u & 1) === 0 && p !== null ? (p.childLanes = 0,
            p.pendingProps = v) : p = rl(v, u, 0, null),
            n = Qr(n, u, o, null),
            p.return = s,
            n.return = s,
            p.sibling = n,
            s.child = p,
            s.child.memoizedState = Ac(o),
            s.memoizedState = Rc,
            n) : Nc(s, v));
        if (f = n.memoizedState,
        f !== null && (T = f.dehydrated,
        T !== null))
            return KS(n, s, v, u, T, f, o);
        if (p) {
            p = u.fallback,
            v = s.mode,
            f = n.child,
            T = f.sibling;
            var P = {
                mode: "hidden",
                children: u.children
            };
            return (v & 1) === 0 && s.child !== f ? (u = s.child,
            u.childLanes = 0,
            u.pendingProps = P,
            s.deletions = null) : (u = fr(f, P),
            u.subtreeFlags = f.subtreeFlags & 14680064),
            T !== null ? p = fr(T, p) : (p = Qr(p, v, o, null),
            p.flags |= 2),
            p.return = s,
            u.return = s,
            u.sibling = p,
            s.child = u,
            u = p,
            p = s.child,
            v = n.child.memoizedState,
            v = v === null ? Ac(o) : {
                baseLanes: v.baseLanes | o,
                cachePool: null,
                transitions: v.transitions
            },
            p.memoizedState = v,
            p.childLanes = n.childLanes & ~o,
            s.memoizedState = Rc,
            u
        }
        return p = n.child,
        n = p.sibling,
        u = fr(p, {
            mode: "visible",
            children: u.children
        }),
        (s.mode & 1) === 0 && (u.lanes = o),
        u.return = s,
        u.sibling = null,
        n !== null && (o = s.deletions,
        o === null ? (s.deletions = [n],
        s.flags |= 16) : o.push(n)),
        s.child = u,
        s.memoizedState = null,
        u
    }
    function Nc(n, s) {
        return s = rl({
            mode: "visible",
            children: s
        }, n.mode, 0, null),
        s.return = n,
        n.child = s
    }
    function Ha(n, s, o, u) {
        return u !== null && sc(u),
        Ds(s, n.child, null, o),
        n = Nc(s, s.pendingProps.children),
        n.flags |= 2,
        s.memoizedState = null,
        n
    }
    function KS(n, s, o, u, f, p, v) {
        if (o)
            return s.flags & 256 ? (s.flags &= -257,
            u = Tc(Error(r(422))),
            Ha(n, s, v, u)) : s.memoizedState !== null ? (s.child = n.child,
            s.flags |= 128,
            null) : (p = u.fallback,
            f = s.mode,
            u = rl({
                mode: "visible",
                children: u.children
            }, f, 0, null),
            p = Qr(p, f, v, null),
            p.flags |= 2,
            u.return = s,
            p.return = s,
            u.sibling = p,
            s.child = u,
            (s.mode & 1) !== 0 && Ds(s, n.child, null, v),
            s.child.memoizedState = Ac(v),
            s.memoizedState = Rc,
            p);
        if ((s.mode & 1) === 0)
            return Ha(n, s, v, null);
        if (f.data === "$!") {
            if (u = f.nextSibling && f.nextSibling.dataset,
            u)
                var T = u.dgst;
            return u = T,
            p = Error(r(419)),
            u = Tc(p, u, void 0),
            Ha(n, s, v, u)
        }
        if (T = (v & n.childLanes) !== 0,
        Rt || T) {
            if (u = ot,
            u !== null) {
                switch (v & -v) {
                case 4:
                    f = 2;
                    break;
                case 16:
                    f = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    f = 32;
                    break;
                case 536870912:
                    f = 268435456;
                    break;
                default:
                    f = 0
                }
                f = (f & (u.suspendedLanes | v)) !== 0 ? 0 : f,
                f !== 0 && f !== p.retryLane && (p.retryLane = f,
                On(n, f),
                un(u, n, f, -1))
            }
            return Kc(),
            u = Tc(Error(r(421))),
            Ha(n, s, v, u)
        }
        return f.data === "$?" ? (s.flags |= 128,
        s.child = n.child,
        s = ob.bind(null, n),
        f._reactRetry = s,
        null) : (n = p.treeContext,
        Ut = tr(f.nextSibling),
        Vt = s,
        Be = !0,
        sn = null,
        n !== null && (Ht[qt++] = An,
        Ht[qt++] = Nn,
        Ht[qt++] = Vr,
        An = n.id,
        Nn = n.overflow,
        Vr = s),
        s = Nc(s, u.children),
        s.flags |= 4096,
        s)
    }
    function Bm(n, s, o) {
        n.lanes |= s;
        var u = n.alternate;
        u !== null && (u.lanes |= s),
        lc(n.return, s, o)
    }
    function Oc(n, s, o, u, f) {
        var p = n.memoizedState;
        p === null ? n.memoizedState = {
            isBackwards: s,
            rendering: null,
            renderingStartTime: 0,
            last: u,
            tail: o,
            tailMode: f
        } : (p.isBackwards = s,
        p.rendering = null,
        p.renderingStartTime = 0,
        p.last = u,
        p.tail = o,
        p.tailMode = f)
    }
    function zm(n, s, o) {
        var u = s.pendingProps
          , f = u.revealOrder
          , p = u.tail;
        if (kt(n, s, u.children, o),
        u = ze.current,
        (u & 2) !== 0)
            u = u & 1 | 2,
            s.flags |= 128;
        else {
            if (n !== null && (n.flags & 128) !== 0)
                e: for (n = s.child; n !== null; ) {
                    if (n.tag === 13)
                        n.memoizedState !== null && Bm(n, o, s);
                    else if (n.tag === 19)
                        Bm(n, o, s);
                    else if (n.child !== null) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === s)
                        break e;
                    for (; n.sibling === null; ) {
                        if (n.return === null || n.return === s)
                            break e;
                        n = n.return
                    }
                    n.sibling.return = n.return,
                    n = n.sibling
                }
            u &= 1
        }
        if (Ie(ze, u),
        (s.mode & 1) === 0)
            s.memoizedState = null;
        else
            switch (f) {
            case "forwards":
                for (o = s.child,
                f = null; o !== null; )
                    n = o.alternate,
                    n !== null && Ia(n) === null && (f = o),
                    o = o.sibling;
                o = f,
                o === null ? (f = s.child,
                s.child = null) : (f = o.sibling,
                o.sibling = null),
                Oc(s, !1, f, o, p);
                break;
            case "backwards":
                for (o = null,
                f = s.child,
                s.child = null; f !== null; ) {
                    if (n = f.alternate,
                    n !== null && Ia(n) === null) {
                        s.child = f;
                        break
                    }
                    n = f.sibling,
                    f.sibling = o,
                    o = f,
                    f = n
                }
                Oc(s, !0, o, null, p);
                break;
            case "together":
                Oc(s, !1, null, null, void 0);
                break;
            default:
                s.memoizedState = null
            }
        return s.child
    }
    function qa(n, s) {
        (s.mode & 1) === 0 && n !== null && (n.alternate = null,
        s.alternate = null,
        s.flags |= 2)
    }
    function Ln(n, s, o) {
        if (n !== null && (s.dependencies = n.dependencies),
        Hr |= s.lanes,
        (o & s.childLanes) === 0)
            return null;
        if (n !== null && s.child !== n.child)
            throw Error(r(153));
        if (s.child !== null) {
            for (n = s.child,
            o = fr(n, n.pendingProps),
            s.child = o,
            o.return = s; n.sibling !== null; )
                n = n.sibling,
                o = o.sibling = fr(n, n.pendingProps),
                o.return = s;
            o.sibling = null
        }
        return s.child
    }
    function QS(n, s, o) {
        switch (s.tag) {
        case 3:
            Fm(s),
            Ms();
            break;
        case 5:
            nm(s);
            break;
        case 1:
            _t(s.type) && Pa(s);
            break;
        case 4:
            dc(s, s.stateNode.containerInfo);
            break;
        case 10:
            var u = s.type._context
              , f = s.memoizedProps.value;
            Ie(ja, u._currentValue),
            u._currentValue = f;
            break;
        case 13:
            if (u = s.memoizedState,
            u !== null)
                return u.dehydrated !== null ? (Ie(ze, ze.current & 1),
                s.flags |= 128,
                null) : (o & s.child.childLanes) !== 0 ? Um(n, s, o) : (Ie(ze, ze.current & 1),
                n = Ln(n, s, o),
                n !== null ? n.sibling : null);
            Ie(ze, ze.current & 1);
            break;
        case 19:
            if (u = (o & s.childLanes) !== 0,
            (n.flags & 128) !== 0) {
                if (u)
                    return zm(n, s, o);
                s.flags |= 128
            }
            if (f = s.memoizedState,
            f !== null && (f.rendering = null,
            f.tail = null,
            f.lastEffect = null),
            Ie(ze, ze.current),
            u)
                break;
            return null;
        case 22:
        case 23:
            return s.lanes = 0,
            Mm(n, s, o)
        }
        return Ln(n, s, o)
    }
    var $m, jc, Hm, qm;
    $m = function(n, s) {
        for (var o = s.child; o !== null; ) {
            if (o.tag === 5 || o.tag === 6)
                n.appendChild(o.stateNode);
            else if (o.tag !== 4 && o.child !== null) {
                o.child.return = o,
                o = o.child;
                continue
            }
            if (o === s)
                break;
            for (; o.sibling === null; ) {
                if (o.return === null || o.return === s)
                    return;
                o = o.return
            }
            o.sibling.return = o.return,
            o = o.sibling
        }
    }
    ,
    jc = function() {}
    ,
    Hm = function(n, s, o, u) {
        var f = n.memoizedProps;
        if (f !== u) {
            n = s.stateNode,
            zr(yn.current);
            var p = null;
            switch (o) {
            case "input":
                f = Qn(n, f),
                u = Qn(n, u),
                p = [];
                break;
            case "select":
                f = B({}, f, {
                    value: void 0
                }),
                u = B({}, u, {
                    value: void 0
                }),
                p = [];
                break;
            case "textarea":
                f = du(n, f),
                u = du(n, u),
                p = [];
                break;
            default:
                typeof f.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Ea)
            }
            hu(o, u);
            var v;
            o = null;
            for (F in f)
                if (!u.hasOwnProperty(F) && f.hasOwnProperty(F) && f[F] != null)
                    if (F === "style") {
                        var T = f[F];
                        for (v in T)
                            T.hasOwnProperty(v) && (o || (o = {}),
                            o[v] = "")
                    } else
                        F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (a.hasOwnProperty(F) ? p || (p = []) : (p = p || []).push(F, null));
            for (F in u) {
                var P = u[F];
                if (T = f != null ? f[F] : void 0,
                u.hasOwnProperty(F) && P !== T && (P != null || T != null))
                    if (F === "style")
                        if (T) {
                            for (v in T)
                                !T.hasOwnProperty(v) || P && P.hasOwnProperty(v) || (o || (o = {}),
                                o[v] = "");
                            for (v in P)
                                P.hasOwnProperty(v) && T[v] !== P[v] && (o || (o = {}),
                                o[v] = P[v])
                        } else
                            o || (p || (p = []),
                            p.push(F, o)),
                            o = P;
                    else
                        F === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0,
                        T = T ? T.__html : void 0,
                        P != null && T !== P && (p = p || []).push(F, P)) : F === "children" ? typeof P != "string" && typeof P != "number" || (p = p || []).push(F, "" + P) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (a.hasOwnProperty(F) ? (P != null && F === "onScroll" && Fe("scroll", n),
                        p || T === P || (p = [])) : (p = p || []).push(F, P))
            }
            o && (p = p || []).push("style", o);
            var F = p;
            (s.updateQueue = F) && (s.flags |= 4)
        }
    }
    ,
    qm = function(n, s, o, u) {
        o !== u && (s.flags |= 4)
    }
    ;
    function eo(n, s) {
        if (!Be)
            switch (n.tailMode) {
            case "hidden":
                s = n.tail;
                for (var o = null; s !== null; )
                    s.alternate !== null && (o = s),
                    s = s.sibling;
                o === null ? n.tail = null : o.sibling = null;
                break;
            case "collapsed":
                o = n.tail;
                for (var u = null; o !== null; )
                    o.alternate !== null && (u = o),
                    o = o.sibling;
                u === null ? s || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null
            }
    }
    function yt(n) {
        var s = n.alternate !== null && n.alternate.child === n.child
          , o = 0
          , u = 0;
        if (s)
            for (var f = n.child; f !== null; )
                o |= f.lanes | f.childLanes,
                u |= f.subtreeFlags & 14680064,
                u |= f.flags & 14680064,
                f.return = n,
                f = f.sibling;
        else
            for (f = n.child; f !== null; )
                o |= f.lanes | f.childLanes,
                u |= f.subtreeFlags,
                u |= f.flags,
                f.return = n,
                f = f.sibling;
        return n.subtreeFlags |= u,
        n.childLanes = o,
        s
    }
    function GS(n, s, o) {
        var u = s.pendingProps;
        switch (tc(s),
        s.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return yt(s),
            null;
        case 1:
            return _t(s.type) && Ca(),
            yt(s),
            null;
        case 3:
            return u = s.stateNode,
            Vs(),
            Ve(Pt),
            Ve(mt),
            pc(),
            u.pendingContext && (u.context = u.pendingContext,
            u.pendingContext = null),
            (n === null || n.child === null) && (Na(s) ? s.flags |= 4 : n === null || n.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024,
            sn !== null && (Hc(sn),
            sn = null))),
            jc(n, s),
            yt(s),
            null;
        case 5:
            fc(s);
            var f = zr(Gi.current);
            if (o = s.type,
            n !== null && s.stateNode != null)
                Hm(n, s, o, u, f),
                n.ref !== s.ref && (s.flags |= 512,
                s.flags |= 2097152);
            else {
                if (!u) {
                    if (s.stateNode === null)
                        throw Error(r(166));
                    return yt(s),
                    null
                }
                if (n = zr(yn.current),
                Na(s)) {
                    u = s.stateNode,
                    o = s.type;
                    var p = s.memoizedProps;
                    switch (u[gn] = s,
                    u[Hi] = p,
                    n = (s.mode & 1) !== 0,
                    o) {
                    case "dialog":
                        Fe("cancel", u),
                        Fe("close", u);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Fe("load", u);
                        break;
                    case "video":
                    case "audio":
                        for (f = 0; f < Bi.length; f++)
                            Fe(Bi[f], u);
                        break;
                    case "source":
                        Fe("error", u);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Fe("error", u),
                        Fe("load", u);
                        break;
                    case "details":
                        Fe("toggle", u);
                        break;
                    case "input":
                        Th(u, p),
                        Fe("invalid", u);
                        break;
                    case "select":
                        u._wrapperState = {
                            wasMultiple: !!p.multiple
                        },
                        Fe("invalid", u);
                        break;
                    case "textarea":
                        _h(u, p),
                        Fe("invalid", u)
                    }
                    hu(o, p),
                    f = null;
                    for (var v in p)
                        if (p.hasOwnProperty(v)) {
                            var T = p[v];
                            v === "children" ? typeof T == "string" ? u.textContent !== T && (p.suppressHydrationWarning !== !0 && ka(u.textContent, T, n),
                            f = ["children", T]) : typeof T == "number" && u.textContent !== "" + T && (p.suppressHydrationWarning !== !0 && ka(u.textContent, T, n),
                            f = ["children", "" + T]) : a.hasOwnProperty(v) && T != null && v === "onScroll" && Fe("scroll", u)
                        }
                    switch (o) {
                    case "input":
                        Pn(u),
                        Ph(u, p, !0);
                        break;
                    case "textarea":
                        Pn(u),
                        Ah(u);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof p.onClick == "function" && (u.onclick = Ea)
                    }
                    u = f,
                    s.updateQueue = u,
                    u !== null && (s.flags |= 4)
                } else {
                    v = f.nodeType === 9 ? f : f.ownerDocument,
                    n === "http://www.w3.org/1999/xhtml" && (n = Nh(o)),
                    n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = v.createElement("div"),
                    n.innerHTML = "<script><\/script>",
                    n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = v.createElement(o, {
                        is: u.is
                    }) : (n = v.createElement(o),
                    o === "select" && (v = n,
                    u.multiple ? v.multiple = !0 : u.size && (v.size = u.size))) : n = v.createElementNS(n, o),
                    n[gn] = s,
                    n[Hi] = u,
                    $m(n, s, !1, !1),
                    s.stateNode = n;
                    e: {
                        switch (v = pu(o, u),
                        o) {
                        case "dialog":
                            Fe("cancel", n),
                            Fe("close", n),
                            f = u;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Fe("load", n),
                            f = u;
                            break;
                        case "video":
                        case "audio":
                            for (f = 0; f < Bi.length; f++)
                                Fe(Bi[f], n);
                            f = u;
                            break;
                        case "source":
                            Fe("error", n),
                            f = u;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Fe("error", n),
                            Fe("load", n),
                            f = u;
                            break;
                        case "details":
                            Fe("toggle", n),
                            f = u;
                            break;
                        case "input":
                            Th(n, u),
                            f = Qn(n, u),
                            Fe("invalid", n);
                            break;
                        case "option":
                            f = u;
                            break;
                        case "select":
                            n._wrapperState = {
                                wasMultiple: !!u.multiple
                            },
                            f = B({}, u, {
                                value: void 0
                            }),
                            Fe("invalid", n);
                            break;
                        case "textarea":
                            _h(n, u),
                            f = du(n, u),
                            Fe("invalid", n);
                            break;
                        default:
                            f = u
                        }
                        hu(o, f),
                        T = f;
                        for (p in T)
                            if (T.hasOwnProperty(p)) {
                                var P = T[p];
                                p === "style" ? Lh(n, P) : p === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0,
                                P != null && Oh(n, P)) : p === "children" ? typeof P == "string" ? (o !== "textarea" || P !== "") && bi(n, P) : typeof P == "number" && bi(n, "" + P) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (a.hasOwnProperty(p) ? P != null && p === "onScroll" && Fe("scroll", n) : P != null && L(n, p, P, v))
                            }
                        switch (o) {
                        case "input":
                            Pn(n),
                            Ph(n, u, !1);
                            break;
                        case "textarea":
                            Pn(n),
                            Ah(n);
                            break;
                        case "option":
                            u.value != null && n.setAttribute("value", "" + _e(u.value));
                            break;
                        case "select":
                            n.multiple = !!u.multiple,
                            p = u.value,
                            p != null ? xs(n, !!u.multiple, p, !1) : u.defaultValue != null && xs(n, !!u.multiple, u.defaultValue, !0);
                            break;
                        default:
                            typeof f.onClick == "function" && (n.onclick = Ea)
                        }
                        switch (o) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            u = !!u.autoFocus;
                            break e;
                        case "img":
                            u = !0;
                            break e;
                        default:
                            u = !1
                        }
                    }
                    u && (s.flags |= 4)
                }
                s.ref !== null && (s.flags |= 512,
                s.flags |= 2097152)
            }
            return yt(s),
            null;
        case 6:
            if (n && s.stateNode != null)
                qm(n, s, n.memoizedProps, u);
            else {
                if (typeof u != "string" && s.stateNode === null)
                    throw Error(r(166));
                if (o = zr(Gi.current),
                zr(yn.current),
                Na(s)) {
                    if (u = s.stateNode,
                    o = s.memoizedProps,
                    u[gn] = s,
                    (p = u.nodeValue !== o) && (n = Vt,
                    n !== null))
                        switch (n.tag) {
                        case 3:
                            ka(u.nodeValue, o, (n.mode & 1) !== 0);
                            break;
                        case 5:
                            n.memoizedProps.suppressHydrationWarning !== !0 && ka(u.nodeValue, o, (n.mode & 1) !== 0)
                        }
                    p && (s.flags |= 4)
                } else
                    u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u),
                    u[gn] = s,
                    s.stateNode = u
            }
            return yt(s),
            null;
        case 13:
            if (Ve(ze),
            u = s.memoizedState,
            n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
                if (Be && Ut !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0)
                    Qp(),
                    Ms(),
                    s.flags |= 98560,
                    p = !1;
                else if (p = Na(s),
                u !== null && u.dehydrated !== null) {
                    if (n === null) {
                        if (!p)
                            throw Error(r(318));
                        if (p = s.memoizedState,
                        p = p !== null ? p.dehydrated : null,
                        !p)
                            throw Error(r(317));
                        p[gn] = s
                    } else
                        Ms(),
                        (s.flags & 128) === 0 && (s.memoizedState = null),
                        s.flags |= 4;
                    yt(s),
                    p = !1
                } else
                    sn !== null && (Hc(sn),
                    sn = null),
                    p = !0;
                if (!p)
                    return s.flags & 65536 ? s : null
            }
            return (s.flags & 128) !== 0 ? (s.lanes = o,
            s) : (u = u !== null,
            u !== (n !== null && n.memoizedState !== null) && u && (s.child.flags |= 8192,
            (s.mode & 1) !== 0 && (n === null || (ze.current & 1) !== 0 ? nt === 0 && (nt = 3) : Kc())),
            s.updateQueue !== null && (s.flags |= 4),
            yt(s),
            null);
        case 4:
            return Vs(),
            jc(n, s),
            n === null && zi(s.stateNode.containerInfo),
            yt(s),
            null;
        case 10:
            return ac(s.type._context),
            yt(s),
            null;
        case 17:
            return _t(s.type) && Ca(),
            yt(s),
            null;
        case 19:
            if (Ve(ze),
            p = s.memoizedState,
            p === null)
                return yt(s),
                null;
            if (u = (s.flags & 128) !== 0,
            v = p.rendering,
            v === null)
                if (u)
                    eo(p, !1);
                else {
                    if (nt !== 0 || n !== null && (n.flags & 128) !== 0)
                        for (n = s.child; n !== null; ) {
                            if (v = Ia(n),
                            v !== null) {
                                for (s.flags |= 128,
                                eo(p, !1),
                                u = v.updateQueue,
                                u !== null && (s.updateQueue = u,
                                s.flags |= 4),
                                s.subtreeFlags = 0,
                                u = o,
                                o = s.child; o !== null; )
                                    p = o,
                                    n = u,
                                    p.flags &= 14680066,
                                    v = p.alternate,
                                    v === null ? (p.childLanes = 0,
                                    p.lanes = n,
                                    p.child = null,
                                    p.subtreeFlags = 0,
                                    p.memoizedProps = null,
                                    p.memoizedState = null,
                                    p.updateQueue = null,
                                    p.dependencies = null,
                                    p.stateNode = null) : (p.childLanes = v.childLanes,
                                    p.lanes = v.lanes,
                                    p.child = v.child,
                                    p.subtreeFlags = 0,
                                    p.deletions = null,
                                    p.memoizedProps = v.memoizedProps,
                                    p.memoizedState = v.memoizedState,
                                    p.updateQueue = v.updateQueue,
                                    p.type = v.type,
                                    n = v.dependencies,
                                    p.dependencies = n === null ? null : {
                                        lanes: n.lanes,
                                        firstContext: n.firstContext
                                    }),
                                    o = o.sibling;
                                return Ie(ze, ze.current & 1 | 2),
                                s.child
                            }
                            n = n.sibling
                        }
                    p.tail !== null && Qe() > $s && (s.flags |= 128,
                    u = !0,
                    eo(p, !1),
                    s.lanes = 4194304)
                }
            else {
                if (!u)
                    if (n = Ia(v),
                    n !== null) {
                        if (s.flags |= 128,
                        u = !0,
                        o = n.updateQueue,
                        o !== null && (s.updateQueue = o,
                        s.flags |= 4),
                        eo(p, !0),
                        p.tail === null && p.tailMode === "hidden" && !v.alternate && !Be)
                            return yt(s),
                            null
                    } else
                        2 * Qe() - p.renderingStartTime > $s && o !== 1073741824 && (s.flags |= 128,
                        u = !0,
                        eo(p, !1),
                        s.lanes = 4194304);
                p.isBackwards ? (v.sibling = s.child,
                s.child = v) : (o = p.last,
                o !== null ? o.sibling = v : s.child = v,
                p.last = v)
            }
            return p.tail !== null ? (s = p.tail,
            p.rendering = s,
            p.tail = s.sibling,
            p.renderingStartTime = Qe(),
            s.sibling = null,
            o = ze.current,
            Ie(ze, u ? o & 1 | 2 : o & 1),
            s) : (yt(s),
            null);
        case 22:
        case 23:
            return Wc(),
            u = s.memoizedState !== null,
            n !== null && n.memoizedState !== null !== u && (s.flags |= 8192),
            u && (s.mode & 1) !== 0 ? (Bt & 1073741824) !== 0 && (yt(s),
            s.subtreeFlags & 6 && (s.flags |= 8192)) : yt(s),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(r(156, s.tag))
    }
    function YS(n, s) {
        switch (tc(s),
        s.tag) {
        case 1:
            return _t(s.type) && Ca(),
            n = s.flags,
            n & 65536 ? (s.flags = n & -65537 | 128,
            s) : null;
        case 3:
            return Vs(),
            Ve(Pt),
            Ve(mt),
            pc(),
            n = s.flags,
            (n & 65536) !== 0 && (n & 128) === 0 ? (s.flags = n & -65537 | 128,
            s) : null;
        case 5:
            return fc(s),
            null;
        case 13:
            if (Ve(ze),
            n = s.memoizedState,
            n !== null && n.dehydrated !== null) {
                if (s.alternate === null)
                    throw Error(r(340));
                Ms()
            }
            return n = s.flags,
            n & 65536 ? (s.flags = n & -65537 | 128,
            s) : null;
        case 19:
            return Ve(ze),
            null;
        case 4:
            return Vs(),
            null;
        case 10:
            return ac(s.type._context),
            null;
        case 22:
        case 23:
            return Wc(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var Wa = !1
      , vt = !1
      , XS = typeof WeakSet == "function" ? WeakSet : Set
      , Z = null;
    function Bs(n, s) {
        var o = n.ref;
        if (o !== null)
            if (typeof o == "function")
                try {
                    o(null)
                } catch (u) {
                    qe(n, s, u)
                }
            else
                o.current = null
    }
    function Lc(n, s, o) {
        try {
            o()
        } catch (u) {
            qe(n, s, u)
        }
    }
    var Wm = !1;
    function JS(n, s) {
        if (Wu = fa,
        n = Ep(),
        Fu(n)) {
            if ("selectionStart"in n)
                var o = {
                    start: n.selectionStart,
                    end: n.selectionEnd
                };
            else
                e: {
                    o = (o = n.ownerDocument) && o.defaultView || window;
                    var u = o.getSelection && o.getSelection();
                    if (u && u.rangeCount !== 0) {
                        o = u.anchorNode;
                        var f = u.anchorOffset
                          , p = u.focusNode;
                        u = u.focusOffset;
                        try {
                            o.nodeType,
                            p.nodeType
                        } catch {
                            o = null;
                            break e
                        }
                        var v = 0
                          , T = -1
                          , P = -1
                          , F = 0
                          , H = 0
                          , q = n
                          , $ = null;
                        t: for (; ; ) {
                            for (var X; q !== o || f !== 0 && q.nodeType !== 3 || (T = v + f),
                            q !== p || u !== 0 && q.nodeType !== 3 || (P = v + u),
                            q.nodeType === 3 && (v += q.nodeValue.length),
                            (X = q.firstChild) !== null; )
                                $ = q,
                                q = X;
                            for (; ; ) {
                                if (q === n)
                                    break t;
                                if ($ === o && ++F === f && (T = v),
                                $ === p && ++H === u && (P = v),
                                (X = q.nextSibling) !== null)
                                    break;
                                q = $,
                                $ = q.parentNode
                            }
                            q = X
                        }
                        o = T === -1 || P === -1 ? null : {
                            start: T,
                            end: P
                        }
                    } else
                        o = null
                }
            o = o || {
                start: 0,
                end: 0
            }
        } else
            o = null;
        for (Ku = {
            focusedElem: n,
            selectionRange: o
        },
        fa = !1,
        Z = s; Z !== null; )
            if (s = Z,
            n = s.child,
            (s.subtreeFlags & 1028) !== 0 && n !== null)
                n.return = s,
                Z = n;
            else
                for (; Z !== null; ) {
                    s = Z;
                    try {
                        var ee = s.alternate;
                        if ((s.flags & 1024) !== 0)
                            switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (ee !== null) {
                                    var re = ee.memoizedProps
                                      , Ge = ee.memoizedState
                                      , O = s.stateNode
                                      , A = O.getSnapshotBeforeUpdate(s.elementType === s.type ? re : on(s.type, re), Ge);
                                    O.__reactInternalSnapshotBeforeUpdate = A
                                }
                                break;
                            case 3:
                                var M = s.stateNode.containerInfo;
                                M.nodeType === 1 ? M.textContent = "" : M.nodeType === 9 && M.documentElement && M.removeChild(M.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(r(163))
                            }
                    } catch (Q) {
                        qe(s, s.return, Q)
                    }
                    if (n = s.sibling,
                    n !== null) {
                        n.return = s.return,
                        Z = n;
                        break
                    }
                    Z = s.return
                }
        return ee = Wm,
        Wm = !1,
        ee
    }
    function to(n, s, o) {
        var u = s.updateQueue;
        if (u = u !== null ? u.lastEffect : null,
        u !== null) {
            var f = u = u.next;
            do {
                if ((f.tag & n) === n) {
                    var p = f.destroy;
                    f.destroy = void 0,
                    p !== void 0 && Lc(s, o, p)
                }
                f = f.next
            } while (f !== u)
        }
    }
    function Ka(n, s) {
        if (s = s.updateQueue,
        s = s !== null ? s.lastEffect : null,
        s !== null) {
            var o = s = s.next;
            do {
                if ((o.tag & n) === n) {
                    var u = o.create;
                    o.destroy = u()
                }
                o = o.next
            } while (o !== s)
        }
    }
    function Mc(n) {
        var s = n.ref;
        if (s !== null) {
            var o = n.stateNode;
            switch (n.tag) {
            case 5:
                n = o;
                break;
            default:
                n = o
            }
            typeof s == "function" ? s(n) : s.current = n
        }
    }
    function Km(n) {
        var s = n.alternate;
        s !== null && (n.alternate = null,
        Km(s)),
        n.child = null,
        n.deletions = null,
        n.sibling = null,
        n.tag === 5 && (s = n.stateNode,
        s !== null && (delete s[gn],
        delete s[Hi],
        delete s[Xu],
        delete s[LS],
        delete s[MS])),
        n.stateNode = null,
        n.return = null,
        n.dependencies = null,
        n.memoizedProps = null,
        n.memoizedState = null,
        n.pendingProps = null,
        n.stateNode = null,
        n.updateQueue = null
    }
    function Qm(n) {
        return n.tag === 5 || n.tag === 3 || n.tag === 4
    }
    function Gm(n) {
        e: for (; ; ) {
            for (; n.sibling === null; ) {
                if (n.return === null || Qm(n.return))
                    return null;
                n = n.return
            }
            for (n.sibling.return = n.return,
            n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
                if (n.flags & 2 || n.child === null || n.tag === 4)
                    continue e;
                n.child.return = n,
                n = n.child
            }
            if (!(n.flags & 2))
                return n.stateNode
        }
    }
    function Dc(n, s, o) {
        var u = n.tag;
        if (u === 5 || u === 6)
            n = n.stateNode,
            s ? o.nodeType === 8 ? o.parentNode.insertBefore(n, s) : o.insertBefore(n, s) : (o.nodeType === 8 ? (s = o.parentNode,
            s.insertBefore(n, o)) : (s = o,
            s.appendChild(n)),
            o = o._reactRootContainer,
            o != null || s.onclick !== null || (s.onclick = Ea));
        else if (u !== 4 && (n = n.child,
        n !== null))
            for (Dc(n, s, o),
            n = n.sibling; n !== null; )
                Dc(n, s, o),
                n = n.sibling
    }
    function Ic(n, s, o) {
        var u = n.tag;
        if (u === 5 || u === 6)
            n = n.stateNode,
            s ? o.insertBefore(n, s) : o.appendChild(n);
        else if (u !== 4 && (n = n.child,
        n !== null))
            for (Ic(n, s, o),
            n = n.sibling; n !== null; )
                Ic(n, s, o),
                n = n.sibling
    }
    var ct = null
      , an = !1;
    function ar(n, s, o) {
        for (o = o.child; o !== null; )
            Ym(n, s, o),
            o = o.sibling
    }
    function Ym(n, s, o) {
        if (mn && typeof mn.onCommitFiberUnmount == "function")
            try {
                mn.onCommitFiberUnmount(oa, o)
            } catch {}
        switch (o.tag) {
        case 5:
            vt || Bs(o, s);
        case 6:
            var u = ct
              , f = an;
            ct = null,
            ar(n, s, o),
            ct = u,
            an = f,
            ct !== null && (an ? (n = ct,
            o = o.stateNode,
            n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : ct.removeChild(o.stateNode));
            break;
        case 18:
            ct !== null && (an ? (n = ct,
            o = o.stateNode,
            n.nodeType === 8 ? Yu(n.parentNode, o) : n.nodeType === 1 && Yu(n, o),
            ji(n)) : Yu(ct, o.stateNode));
            break;
        case 4:
            u = ct,
            f = an,
            ct = o.stateNode.containerInfo,
            an = !0,
            ar(n, s, o),
            ct = u,
            an = f;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!vt && (u = o.updateQueue,
            u !== null && (u = u.lastEffect,
            u !== null))) {
                f = u = u.next;
                do {
                    var p = f
                      , v = p.destroy;
                    p = p.tag,
                    v !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && Lc(o, s, v),
                    f = f.next
                } while (f !== u)
            }
            ar(n, s, o);
            break;
        case 1:
            if (!vt && (Bs(o, s),
            u = o.stateNode,
            typeof u.componentWillUnmount == "function"))
                try {
                    u.props = o.memoizedProps,
                    u.state = o.memoizedState,
                    u.componentWillUnmount()
                } catch (T) {
                    qe(o, s, T)
                }
            ar(n, s, o);
            break;
        case 21:
            ar(n, s, o);
            break;
        case 22:
            o.mode & 1 ? (vt = (u = vt) || o.memoizedState !== null,
            ar(n, s, o),
            vt = u) : ar(n, s, o);
            break;
        default:
            ar(n, s, o)
        }
    }
    function Xm(n) {
        var s = n.updateQueue;
        if (s !== null) {
            n.updateQueue = null;
            var o = n.stateNode;
            o === null && (o = n.stateNode = new XS),
            s.forEach(function(u) {
                var f = ab.bind(null, n, u);
                o.has(u) || (o.add(u),
                u.then(f, f))
            })
        }
    }
    function ln(n, s) {
        var o = s.deletions;
        if (o !== null)
            for (var u = 0; u < o.length; u++) {
                var f = o[u];
                try {
                    var p = n
                      , v = s
                      , T = v;
                    e: for (; T !== null; ) {
                        switch (T.tag) {
                        case 5:
                            ct = T.stateNode,
                            an = !1;
                            break e;
                        case 3:
                            ct = T.stateNode.containerInfo,
                            an = !0;
                            break e;
                        case 4:
                            ct = T.stateNode.containerInfo,
                            an = !0;
                            break e
                        }
                        T = T.return
                    }
                    if (ct === null)
                        throw Error(r(160));
                    Ym(p, v, f),
                    ct = null,
                    an = !1;
                    var P = f.alternate;
                    P !== null && (P.return = null),
                    f.return = null
                } catch (F) {
                    qe(f, s, F)
                }
            }
        if (s.subtreeFlags & 12854)
            for (s = s.child; s !== null; )
                Jm(s, n),
                s = s.sibling
    }
    function Jm(n, s) {
        var o = n.alternate
          , u = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (ln(s, n),
            wn(n),
            u & 4) {
                try {
                    to(3, n, n.return),
                    Ka(3, n)
                } catch (re) {
                    qe(n, n.return, re)
                }
                try {
                    to(5, n, n.return)
                } catch (re) {
                    qe(n, n.return, re)
                }
            }
            break;
        case 1:
            ln(s, n),
            wn(n),
            u & 512 && o !== null && Bs(o, o.return);
            break;
        case 5:
            if (ln(s, n),
            wn(n),
            u & 512 && o !== null && Bs(o, o.return),
            n.flags & 32) {
                var f = n.stateNode;
                try {
                    bi(f, "")
                } catch (re) {
                    qe(n, n.return, re)
                }
            }
            if (u & 4 && (f = n.stateNode,
            f != null)) {
                var p = n.memoizedProps
                  , v = o !== null ? o.memoizedProps : p
                  , T = n.type
                  , P = n.updateQueue;
                if (n.updateQueue = null,
                P !== null)
                    try {
                        T === "input" && p.type === "radio" && p.name != null && Ch(f, p),
                        pu(T, v);
                        var F = pu(T, p);
                        for (v = 0; v < P.length; v += 2) {
                            var H = P[v]
                              , q = P[v + 1];
                            H === "style" ? Lh(f, q) : H === "dangerouslySetInnerHTML" ? Oh(f, q) : H === "children" ? bi(f, q) : L(f, H, q, F)
                        }
                        switch (T) {
                        case "input":
                            uu(f, p);
                            break;
                        case "textarea":
                            Rh(f, p);
                            break;
                        case "select":
                            var $ = f._wrapperState.wasMultiple;
                            f._wrapperState.wasMultiple = !!p.multiple;
                            var X = p.value;
                            X != null ? xs(f, !!p.multiple, X, !1) : $ !== !!p.multiple && (p.defaultValue != null ? xs(f, !!p.multiple, p.defaultValue, !0) : xs(f, !!p.multiple, p.multiple ? [] : "", !1))
                        }
                        f[Hi] = p
                    } catch (re) {
                        qe(n, n.return, re)
                    }
            }
            break;
        case 6:
            if (ln(s, n),
            wn(n),
            u & 4) {
                if (n.stateNode === null)
                    throw Error(r(162));
                f = n.stateNode,
                p = n.memoizedProps;
                try {
                    f.nodeValue = p
                } catch (re) {
                    qe(n, n.return, re)
                }
            }
            break;
        case 3:
            if (ln(s, n),
            wn(n),
            u & 4 && o !== null && o.memoizedState.isDehydrated)
                try {
                    ji(s.containerInfo)
                } catch (re) {
                    qe(n, n.return, re)
                }
            break;
        case 4:
            ln(s, n),
            wn(n);
            break;
        case 13:
            ln(s, n),
            wn(n),
            f = n.child,
            f.flags & 8192 && (p = f.memoizedState !== null,
            f.stateNode.isHidden = p,
            !p || f.alternate !== null && f.alternate.memoizedState !== null || (Uc = Qe())),
            u & 4 && Xm(n);
            break;
        case 22:
            if (H = o !== null && o.memoizedState !== null,
            n.mode & 1 ? (vt = (F = vt) || H,
            ln(s, n),
            vt = F) : ln(s, n),
            wn(n),
            u & 8192) {
                if (F = n.memoizedState !== null,
                (n.stateNode.isHidden = F) && !H && (n.mode & 1) !== 0)
                    for (Z = n,
                    H = n.child; H !== null; ) {
                        for (q = Z = H; Z !== null; ) {
                            switch ($ = Z,
                            X = $.child,
                            $.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                to(4, $, $.return);
                                break;
                            case 1:
                                Bs($, $.return);
                                var ee = $.stateNode;
                                if (typeof ee.componentWillUnmount == "function") {
                                    u = $,
                                    o = $.return;
                                    try {
                                        s = u,
                                        ee.props = s.memoizedProps,
                                        ee.state = s.memoizedState,
                                        ee.componentWillUnmount()
                                    } catch (re) {
                                        qe(u, o, re)
                                    }
                                }
                                break;
                            case 5:
                                Bs($, $.return);
                                break;
                            case 22:
                                if ($.memoizedState !== null) {
                                    tg(q);
                                    continue
                                }
                            }
                            X !== null ? (X.return = $,
                            Z = X) : tg(q)
                        }
                        H = H.sibling
                    }
                e: for (H = null,
                q = n; ; ) {
                    if (q.tag === 5) {
                        if (H === null) {
                            H = q;
                            try {
                                f = q.stateNode,
                                F ? (p = f.style,
                                typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (T = q.stateNode,
                                P = q.memoizedProps.style,
                                v = P != null && P.hasOwnProperty("display") ? P.display : null,
                                T.style.display = jh("display", v))
                            } catch (re) {
                                qe(n, n.return, re)
                            }
                        }
                    } else if (q.tag === 6) {
                        if (H === null)
                            try {
                                q.stateNode.nodeValue = F ? "" : q.memoizedProps
                            } catch (re) {
                                qe(n, n.return, re)
                            }
                    } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === n) && q.child !== null) {
                        q.child.return = q,
                        q = q.child;
                        continue
                    }
                    if (q === n)
                        break e;
                    for (; q.sibling === null; ) {
                        if (q.return === null || q.return === n)
                            break e;
                        H === q && (H = null),
                        q = q.return
                    }
                    H === q && (H = null),
                    q.sibling.return = q.return,
                    q = q.sibling
                }
            }
            break;
        case 19:
            ln(s, n),
            wn(n),
            u & 4 && Xm(n);
            break;
        case 21:
            break;
        default:
            ln(s, n),
            wn(n)
        }
    }
    function wn(n) {
        var s = n.flags;
        if (s & 2) {
            try {
                e: {
                    for (var o = n.return; o !== null; ) {
                        if (Qm(o)) {
                            var u = o;
                            break e
                        }
                        o = o.return
                    }
                    throw Error(r(160))
                }
                switch (u.tag) {
                case 5:
                    var f = u.stateNode;
                    u.flags & 32 && (bi(f, ""),
                    u.flags &= -33);
                    var p = Gm(n);
                    Ic(n, p, f);
                    break;
                case 3:
                case 4:
                    var v = u.stateNode.containerInfo
                      , T = Gm(n);
                    Dc(n, T, v);
                    break;
                default:
                    throw Error(r(161))
                }
            } catch (P) {
                qe(n, n.return, P)
            }
            n.flags &= -3
        }
        s & 4096 && (n.flags &= -4097)
    }
    function ZS(n, s, o) {
        Z = n,
        Zm(n)
    }
    function Zm(n, s, o) {
        for (var u = (n.mode & 1) !== 0; Z !== null; ) {
            var f = Z
              , p = f.child;
            if (f.tag === 22 && u) {
                var v = f.memoizedState !== null || Wa;
                if (!v) {
                    var T = f.alternate
                      , P = T !== null && T.memoizedState !== null || vt;
                    T = Wa;
                    var F = vt;
                    if (Wa = v,
                    (vt = P) && !F)
                        for (Z = f; Z !== null; )
                            v = Z,
                            P = v.child,
                            v.tag === 22 && v.memoizedState !== null ? ng(f) : P !== null ? (P.return = v,
                            Z = P) : ng(f);
                    for (; p !== null; )
                        Z = p,
                        Zm(p),
                        p = p.sibling;
                    Z = f,
                    Wa = T,
                    vt = F
                }
                eg(n)
            } else
                (f.subtreeFlags & 8772) !== 0 && p !== null ? (p.return = f,
                Z = p) : eg(n)
        }
    }
    function eg(n) {
        for (; Z !== null; ) {
            var s = Z;
            if ((s.flags & 8772) !== 0) {
                var o = s.alternate;
                try {
                    if ((s.flags & 8772) !== 0)
                        switch (s.tag) {
                        case 0:
                        case 11:
                        case 15:
                            vt || Ka(5, s);
                            break;
                        case 1:
                            var u = s.stateNode;
                            if (s.flags & 4 && !vt)
                                if (o === null)
                                    u.componentDidMount();
                                else {
                                    var f = s.elementType === s.type ? o.memoizedProps : on(s.type, o.memoizedProps);
                                    u.componentDidUpdate(f, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate)
                                }
                            var p = s.updateQueue;
                            p !== null && tm(s, p, u);
                            break;
                        case 3:
                            var v = s.updateQueue;
                            if (v !== null) {
                                if (o = null,
                                s.child !== null)
                                    switch (s.child.tag) {
                                    case 5:
                                        o = s.child.stateNode;
                                        break;
                                    case 1:
                                        o = s.child.stateNode
                                    }
                                tm(s, v, o)
                            }
                            break;
                        case 5:
                            var T = s.stateNode;
                            if (o === null && s.flags & 4) {
                                o = T;
                                var P = s.memoizedProps;
                                switch (s.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    P.autoFocus && o.focus();
                                    break;
                                case "img":
                                    P.src && (o.src = P.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (s.memoizedState === null) {
                                var F = s.alternate;
                                if (F !== null) {
                                    var H = F.memoizedState;
                                    if (H !== null) {
                                        var q = H.dehydrated;
                                        q !== null && ji(q)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(r(163))
                        }
                    vt || s.flags & 512 && Mc(s)
                } catch ($) {
                    qe(s, s.return, $)
                }
            }
            if (s === n) {
                Z = null;
                break
            }
            if (o = s.sibling,
            o !== null) {
                o.return = s.return,
                Z = o;
                break
            }
            Z = s.return
        }
    }
    function tg(n) {
        for (; Z !== null; ) {
            var s = Z;
            if (s === n) {
                Z = null;
                break
            }
            var o = s.sibling;
            if (o !== null) {
                o.return = s.return,
                Z = o;
                break
            }
            Z = s.return
        }
    }
    function ng(n) {
        for (; Z !== null; ) {
            var s = Z;
            try {
                switch (s.tag) {
                case 0:
                case 11:
                case 15:
                    var o = s.return;
                    try {
                        Ka(4, s)
                    } catch (P) {
                        qe(s, o, P)
                    }
                    break;
                case 1:
                    var u = s.stateNode;
                    if (typeof u.componentDidMount == "function") {
                        var f = s.return;
                        try {
                            u.componentDidMount()
                        } catch (P) {
                            qe(s, f, P)
                        }
                    }
                    var p = s.return;
                    try {
                        Mc(s)
                    } catch (P) {
                        qe(s, p, P)
                    }
                    break;
                case 5:
                    var v = s.return;
                    try {
                        Mc(s)
                    } catch (P) {
                        qe(s, v, P)
                    }
                }
            } catch (P) {
                qe(s, s.return, P)
            }
            if (s === n) {
                Z = null;
                break
            }
            var T = s.sibling;
            if (T !== null) {
                T.return = s.return,
                Z = T;
                break
            }
            Z = s.return
        }
    }
    var eb = Math.ceil
      , Qa = _.ReactCurrentDispatcher
      , Fc = _.ReactCurrentOwner
      , Qt = _.ReactCurrentBatchConfig
      , Pe = 0
      , ot = null
      , Je = null
      , dt = 0
      , Bt = 0
      , zs = nr(0)
      , nt = 0
      , no = null
      , Hr = 0
      , Ga = 0
      , Vc = 0
      , ro = null
      , At = null
      , Uc = 0
      , $s = 1 / 0
      , Mn = null
      , Ya = !1
      , Bc = null
      , lr = null
      , Xa = !1
      , ur = null
      , Ja = 0
      , so = 0
      , zc = null
      , Za = -1
      , el = 0;
    function Et() {
        return (Pe & 6) !== 0 ? Qe() : Za !== -1 ? Za : Za = Qe()
    }
    function cr(n) {
        return (n.mode & 1) === 0 ? 1 : (Pe & 2) !== 0 && dt !== 0 ? dt & -dt : IS.transition !== null ? (el === 0 && (el = Gh()),
        el) : (n = je,
        n !== 0 || (n = window.event,
        n = n === void 0 ? 16 : sp(n.type)),
        n)
    }
    function un(n, s, o, u) {
        if (50 < so)
            throw so = 0,
            zc = null,
            Error(r(185));
        _i(n, o, u),
        ((Pe & 2) === 0 || n !== ot) && (n === ot && ((Pe & 2) === 0 && (Ga |= o),
        nt === 4 && dr(n, dt)),
        Nt(n, u),
        o === 1 && Pe === 0 && (s.mode & 1) === 0 && ($s = Qe() + 500,
        _a && sr()))
    }
    function Nt(n, s) {
        var o = n.callbackNode;
        I1(n, s);
        var u = ua(n, n === ot ? dt : 0);
        if (u === 0)
            o !== null && Wh(o),
            n.callbackNode = null,
            n.callbackPriority = 0;
        else if (s = u & -u,
        n.callbackPriority !== s) {
            if (o != null && Wh(o),
            s === 1)
                n.tag === 0 ? DS(sg.bind(null, n)) : $p(sg.bind(null, n)),
                OS(function() {
                    (Pe & 6) === 0 && sr()
                }),
                o = null;
            else {
                switch (Yh(u)) {
                case 1:
                    o = Su;
                    break;
                case 4:
                    o = Kh;
                    break;
                case 16:
                    o = ia;
                    break;
                case 536870912:
                    o = Qh;
                    break;
                default:
                    o = ia
                }
                o = fg(o, rg.bind(null, n))
            }
            n.callbackPriority = s,
            n.callbackNode = o
        }
    }
    function rg(n, s) {
        if (Za = -1,
        el = 0,
        (Pe & 6) !== 0)
            throw Error(r(327));
        var o = n.callbackNode;
        if (Hs() && n.callbackNode !== o)
            return null;
        var u = ua(n, n === ot ? dt : 0);
        if (u === 0)
            return null;
        if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || s)
            s = tl(n, u);
        else {
            s = u;
            var f = Pe;
            Pe |= 2;
            var p = og();
            (ot !== n || dt !== s) && (Mn = null,
            $s = Qe() + 500,
            Wr(n, s));
            do
                try {
                    rb();
                    break
                } catch (T) {
                    ig(n, T)
                }
            while (!0);
            oc(),
            Qa.current = p,
            Pe = f,
            Je !== null ? s = 0 : (ot = null,
            dt = 0,
            s = nt)
        }
        if (s !== 0) {
            if (s === 2 && (f = bu(n),
            f !== 0 && (u = f,
            s = $c(n, f))),
            s === 1)
                throw o = no,
                Wr(n, 0),
                dr(n, u),
                Nt(n, Qe()),
                o;
            if (s === 6)
                dr(n, u);
            else {
                if (f = n.current.alternate,
                (u & 30) === 0 && !tb(f) && (s = tl(n, u),
                s === 2 && (p = bu(n),
                p !== 0 && (u = p,
                s = $c(n, p))),
                s === 1))
                    throw o = no,
                    Wr(n, 0),
                    dr(n, u),
                    Nt(n, Qe()),
                    o;
                switch (n.finishedWork = f,
                n.finishedLanes = u,
                s) {
                case 0:
                case 1:
                    throw Error(r(345));
                case 2:
                    Kr(n, At, Mn);
                    break;
                case 3:
                    if (dr(n, u),
                    (u & 130023424) === u && (s = Uc + 500 - Qe(),
                    10 < s)) {
                        if (ua(n, 0) !== 0)
                            break;
                        if (f = n.suspendedLanes,
                        (f & u) !== u) {
                            Et(),
                            n.pingedLanes |= n.suspendedLanes & f;
                            break
                        }
                        n.timeoutHandle = Gu(Kr.bind(null, n, At, Mn), s);
                        break
                    }
                    Kr(n, At, Mn);
                    break;
                case 4:
                    if (dr(n, u),
                    (u & 4194240) === u)
                        break;
                    for (s = n.eventTimes,
                    f = -1; 0 < u; ) {
                        var v = 31 - nn(u);
                        p = 1 << v,
                        v = s[v],
                        v > f && (f = v),
                        u &= ~p
                    }
                    if (u = f,
                    u = Qe() - u,
                    u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * eb(u / 1960)) - u,
                    10 < u) {
                        n.timeoutHandle = Gu(Kr.bind(null, n, At, Mn), u);
                        break
                    }
                    Kr(n, At, Mn);
                    break;
                case 5:
                    Kr(n, At, Mn);
                    break;
                default:
                    throw Error(r(329))
                }
            }
        }
        return Nt(n, Qe()),
        n.callbackNode === o ? rg.bind(null, n) : null
    }
    function $c(n, s) {
        var o = ro;
        return n.current.memoizedState.isDehydrated && (Wr(n, s).flags |= 256),
        n = tl(n, s),
        n !== 2 && (s = At,
        At = o,
        s !== null && Hc(s)),
        n
    }
    function Hc(n) {
        At === null ? At = n : At.push.apply(At, n)
    }
    function tb(n) {
        for (var s = n; ; ) {
            if (s.flags & 16384) {
                var o = s.updateQueue;
                if (o !== null && (o = o.stores,
                o !== null))
                    for (var u = 0; u < o.length; u++) {
                        var f = o[u]
                          , p = f.getSnapshot;
                        f = f.value;
                        try {
                            if (!rn(p(), f))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (o = s.child,
            s.subtreeFlags & 16384 && o !== null)
                o.return = s,
                s = o;
            else {
                if (s === n)
                    break;
                for (; s.sibling === null; ) {
                    if (s.return === null || s.return === n)
                        return !0;
                    s = s.return
                }
                s.sibling.return = s.return,
                s = s.sibling
            }
        }
        return !0
    }
    function dr(n, s) {
        for (s &= ~Vc,
        s &= ~Ga,
        n.suspendedLanes |= s,
        n.pingedLanes &= ~s,
        n = n.expirationTimes; 0 < s; ) {
            var o = 31 - nn(s)
              , u = 1 << o;
            n[o] = -1,
            s &= ~u
        }
    }
    function sg(n) {
        if ((Pe & 6) !== 0)
            throw Error(r(327));
        Hs();
        var s = ua(n, 0);
        if ((s & 1) === 0)
            return Nt(n, Qe()),
            null;
        var o = tl(n, s);
        if (n.tag !== 0 && o === 2) {
            var u = bu(n);
            u !== 0 && (s = u,
            o = $c(n, u))
        }
        if (o === 1)
            throw o = no,
            Wr(n, 0),
            dr(n, s),
            Nt(n, Qe()),
            o;
        if (o === 6)
            throw Error(r(345));
        return n.finishedWork = n.current.alternate,
        n.finishedLanes = s,
        Kr(n, At, Mn),
        Nt(n, Qe()),
        null
    }
    function qc(n, s) {
        var o = Pe;
        Pe |= 1;
        try {
            return n(s)
        } finally {
            Pe = o,
            Pe === 0 && ($s = Qe() + 500,
            _a && sr())
        }
    }
    function qr(n) {
        ur !== null && ur.tag === 0 && (Pe & 6) === 0 && Hs();
        var s = Pe;
        Pe |= 1;
        var o = Qt.transition
          , u = je;
        try {
            if (Qt.transition = null,
            je = 1,
            n)
                return n()
        } finally {
            je = u,
            Qt.transition = o,
            Pe = s,
            (Pe & 6) === 0 && sr()
        }
    }
    function Wc() {
        Bt = zs.current,
        Ve(zs)
    }
    function Wr(n, s) {
        n.finishedWork = null,
        n.finishedLanes = 0;
        var o = n.timeoutHandle;
        if (o !== -1 && (n.timeoutHandle = -1,
        NS(o)),
        Je !== null)
            for (o = Je.return; o !== null; ) {
                var u = o;
                switch (tc(u),
                u.tag) {
                case 1:
                    u = u.type.childContextTypes,
                    u != null && Ca();
                    break;
                case 3:
                    Vs(),
                    Ve(Pt),
                    Ve(mt),
                    pc();
                    break;
                case 5:
                    fc(u);
                    break;
                case 4:
                    Vs();
                    break;
                case 13:
                    Ve(ze);
                    break;
                case 19:
                    Ve(ze);
                    break;
                case 10:
                    ac(u.type._context);
                    break;
                case 22:
                case 23:
                    Wc()
                }
                o = o.return
            }
        if (ot = n,
        Je = n = fr(n.current, null),
        dt = Bt = s,
        nt = 0,
        no = null,
        Vc = Ga = Hr = 0,
        At = ro = null,
        Br !== null) {
            for (s = 0; s < Br.length; s++)
                if (o = Br[s],
                u = o.interleaved,
                u !== null) {
                    o.interleaved = null;
                    var f = u.next
                      , p = o.pending;
                    if (p !== null) {
                        var v = p.next;
                        p.next = f,
                        u.next = v
                    }
                    o.pending = u
                }
            Br = null
        }
        return n
    }
    function ig(n, s) {
        do {
            var o = Je;
            try {
                if (oc(),
                Fa.current = za,
                Va) {
                    for (var u = $e.memoizedState; u !== null; ) {
                        var f = u.queue;
                        f !== null && (f.pending = null),
                        u = u.next
                    }
                    Va = !1
                }
                if ($r = 0,
                it = tt = $e = null,
                Yi = !1,
                Xi = 0,
                Fc.current = null,
                o === null || o.return === null) {
                    nt = 1,
                    no = s,
                    Je = null;
                    break
                }
                e: {
                    var p = n
                      , v = o.return
                      , T = o
                      , P = s;
                    if (s = dt,
                    T.flags |= 32768,
                    P !== null && typeof P == "object" && typeof P.then == "function") {
                        var F = P
                          , H = T
                          , q = H.tag;
                        if ((H.mode & 1) === 0 && (q === 0 || q === 11 || q === 15)) {
                            var $ = H.alternate;
                            $ ? (H.updateQueue = $.updateQueue,
                            H.memoizedState = $.memoizedState,
                            H.lanes = $.lanes) : (H.updateQueue = null,
                            H.memoizedState = null)
                        }
                        var X = Am(v);
                        if (X !== null) {
                            X.flags &= -257,
                            Nm(X, v, T, p, s),
                            X.mode & 1 && Rm(p, F, s),
                            s = X,
                            P = F;
                            var ee = s.updateQueue;
                            if (ee === null) {
                                var re = new Set;
                                re.add(P),
                                s.updateQueue = re
                            } else
                                ee.add(P);
                            break e
                        } else {
                            if ((s & 1) === 0) {
                                Rm(p, F, s),
                                Kc();
                                break e
                            }
                            P = Error(r(426))
                        }
                    } else if (Be && T.mode & 1) {
                        var Ge = Am(v);
                        if (Ge !== null) {
                            (Ge.flags & 65536) === 0 && (Ge.flags |= 256),
                            Nm(Ge, v, T, p, s),
                            sc(Us(P, T));
                            break e
                        }
                    }
                    p = P = Us(P, T),
                    nt !== 4 && (nt = 2),
                    ro === null ? ro = [p] : ro.push(p),
                    p = v;
                    do {
                        switch (p.tag) {
                        case 3:
                            p.flags |= 65536,
                            s &= -s,
                            p.lanes |= s;
                            var O = Pm(p, P, s);
                            em(p, O);
                            break e;
                        case 1:
                            T = P;
                            var A = p.type
                              , M = p.stateNode;
                            if ((p.flags & 128) === 0 && (typeof A.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (lr === null || !lr.has(M)))) {
                                p.flags |= 65536,
                                s &= -s,
                                p.lanes |= s;
                                var Q = _m(p, T, s);
                                em(p, Q);
                                break e
                            }
                        }
                        p = p.return
                    } while (p !== null)
                }
                lg(o)
            } catch (ie) {
                s = ie,
                Je === o && o !== null && (Je = o = o.return);
                continue
            }
            break
        } while (!0)
    }
    function og() {
        var n = Qa.current;
        return Qa.current = za,
        n === null ? za : n
    }
    function Kc() {
        (nt === 0 || nt === 3 || nt === 2) && (nt = 4),
        ot === null || (Hr & 268435455) === 0 && (Ga & 268435455) === 0 || dr(ot, dt)
    }
    function tl(n, s) {
        var o = Pe;
        Pe |= 2;
        var u = og();
        (ot !== n || dt !== s) && (Mn = null,
        Wr(n, s));
        do
            try {
                nb();
                break
            } catch (f) {
                ig(n, f)
            }
        while (!0);
        if (oc(),
        Pe = o,
        Qa.current = u,
        Je !== null)
            throw Error(r(261));
        return ot = null,
        dt = 0,
        nt
    }
    function nb() {
        for (; Je !== null; )
            ag(Je)
    }
    function rb() {
        for (; Je !== null && !_1(); )
            ag(Je)
    }
    function ag(n) {
        var s = dg(n.alternate, n, Bt);
        n.memoizedProps = n.pendingProps,
        s === null ? lg(n) : Je = s,
        Fc.current = null
    }
    function lg(n) {
        var s = n;
        do {
            var o = s.alternate;
            if (n = s.return,
            (s.flags & 32768) === 0) {
                if (o = GS(o, s, Bt),
                o !== null) {
                    Je = o;
                    return
                }
            } else {
                if (o = YS(o, s),
                o !== null) {
                    o.flags &= 32767,
                    Je = o;
                    return
                }
                if (n !== null)
                    n.flags |= 32768,
                    n.subtreeFlags = 0,
                    n.deletions = null;
                else {
                    nt = 6,
                    Je = null;
                    return
                }
            }
            if (s = s.sibling,
            s !== null) {
                Je = s;
                return
            }
            Je = s = n
        } while (s !== null);
        nt === 0 && (nt = 5)
    }
    function Kr(n, s, o) {
        var u = je
          , f = Qt.transition;
        try {
            Qt.transition = null,
            je = 1,
            sb(n, s, o, u)
        } finally {
            Qt.transition = f,
            je = u
        }
        return null
    }
    function sb(n, s, o, u) {
        do
            Hs();
        while (ur !== null);
        if ((Pe & 6) !== 0)
            throw Error(r(327));
        o = n.finishedWork;
        var f = n.finishedLanes;
        if (o === null)
            return null;
        if (n.finishedWork = null,
        n.finishedLanes = 0,
        o === n.current)
            throw Error(r(177));
        n.callbackNode = null,
        n.callbackPriority = 0;
        var p = o.lanes | o.childLanes;
        if (F1(n, p),
        n === ot && (Je = ot = null,
        dt = 0),
        (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || Xa || (Xa = !0,
        fg(ia, function() {
            return Hs(),
            null
        })),
        p = (o.flags & 15990) !== 0,
        (o.subtreeFlags & 15990) !== 0 || p) {
            p = Qt.transition,
            Qt.transition = null;
            var v = je;
            je = 1;
            var T = Pe;
            Pe |= 4,
            Fc.current = null,
            JS(n, o),
            Jm(o, n),
            ES(Ku),
            fa = !!Wu,
            Ku = Wu = null,
            n.current = o,
            ZS(o),
            R1(),
            Pe = T,
            je = v,
            Qt.transition = p
        } else
            n.current = o;
        if (Xa && (Xa = !1,
        ur = n,
        Ja = f),
        p = n.pendingLanes,
        p === 0 && (lr = null),
        O1(o.stateNode),
        Nt(n, Qe()),
        s !== null)
            for (u = n.onRecoverableError,
            o = 0; o < s.length; o++)
                f = s[o],
                u(f.value, {
                    componentStack: f.stack,
                    digest: f.digest
                });
        if (Ya)
            throw Ya = !1,
            n = Bc,
            Bc = null,
            n;
        return (Ja & 1) !== 0 && n.tag !== 0 && Hs(),
        p = n.pendingLanes,
        (p & 1) !== 0 ? n === zc ? so++ : (so = 0,
        zc = n) : so = 0,
        sr(),
        null
    }
    function Hs() {
        if (ur !== null) {
            var n = Yh(Ja)
              , s = Qt.transition
              , o = je;
            try {
                if (Qt.transition = null,
                je = 16 > n ? 16 : n,
                ur === null)
                    var u = !1;
                else {
                    if (n = ur,
                    ur = null,
                    Ja = 0,
                    (Pe & 6) !== 0)
                        throw Error(r(331));
                    var f = Pe;
                    for (Pe |= 4,
                    Z = n.current; Z !== null; ) {
                        var p = Z
                          , v = p.child;
                        if ((Z.flags & 16) !== 0) {
                            var T = p.deletions;
                            if (T !== null) {
                                for (var P = 0; P < T.length; P++) {
                                    var F = T[P];
                                    for (Z = F; Z !== null; ) {
                                        var H = Z;
                                        switch (H.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            to(8, H, p)
                                        }
                                        var q = H.child;
                                        if (q !== null)
                                            q.return = H,
                                            Z = q;
                                        else
                                            for (; Z !== null; ) {
                                                H = Z;
                                                var $ = H.sibling
                                                  , X = H.return;
                                                if (Km(H),
                                                H === F) {
                                                    Z = null;
                                                    break
                                                }
                                                if ($ !== null) {
                                                    $.return = X,
                                                    Z = $;
                                                    break
                                                }
                                                Z = X
                                            }
                                    }
                                }
                                var ee = p.alternate;
                                if (ee !== null) {
                                    var re = ee.child;
                                    if (re !== null) {
                                        ee.child = null;
                                        do {
                                            var Ge = re.sibling;
                                            re.sibling = null,
                                            re = Ge
                                        } while (re !== null)
                                    }
                                }
                                Z = p
                            }
                        }
                        if ((p.subtreeFlags & 2064) !== 0 && v !== null)
                            v.return = p,
                            Z = v;
                        else
                            e: for (; Z !== null; ) {
                                if (p = Z,
                                (p.flags & 2048) !== 0)
                                    switch (p.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        to(9, p, p.return)
                                    }
                                var O = p.sibling;
                                if (O !== null) {
                                    O.return = p.return,
                                    Z = O;
                                    break e
                                }
                                Z = p.return
                            }
                    }
                    var A = n.current;
                    for (Z = A; Z !== null; ) {
                        v = Z;
                        var M = v.child;
                        if ((v.subtreeFlags & 2064) !== 0 && M !== null)
                            M.return = v,
                            Z = M;
                        else
                            e: for (v = A; Z !== null; ) {
                                if (T = Z,
                                (T.flags & 2048) !== 0)
                                    try {
                                        switch (T.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ka(9, T)
                                        }
                                    } catch (ie) {
                                        qe(T, T.return, ie)
                                    }
                                if (T === v) {
                                    Z = null;
                                    break e
                                }
                                var Q = T.sibling;
                                if (Q !== null) {
                                    Q.return = T.return,
                                    Z = Q;
                                    break e
                                }
                                Z = T.return
                            }
                    }
                    if (Pe = f,
                    sr(),
                    mn && typeof mn.onPostCommitFiberRoot == "function")
                        try {
                            mn.onPostCommitFiberRoot(oa, n)
                        } catch {}
                    u = !0
                }
                return u
            } finally {
                je = o,
                Qt.transition = s
            }
        }
        return !1
    }
    function ug(n, s, o) {
        s = Us(o, s),
        s = Pm(n, s, 1),
        n = or(n, s, 1),
        s = Et(),
        n !== null && (_i(n, 1, s),
        Nt(n, s))
    }
    function qe(n, s, o) {
        if (n.tag === 3)
            ug(n, n, o);
        else
            for (; s !== null; ) {
                if (s.tag === 3) {
                    ug(s, n, o);
                    break
                } else if (s.tag === 1) {
                    var u = s.stateNode;
                    if (typeof s.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (lr === null || !lr.has(u))) {
                        n = Us(o, n),
                        n = _m(s, n, 1),
                        s = or(s, n, 1),
                        n = Et(),
                        s !== null && (_i(s, 1, n),
                        Nt(s, n));
                        break
                    }
                }
                s = s.return
            }
    }
    function ib(n, s, o) {
        var u = n.pingCache;
        u !== null && u.delete(s),
        s = Et(),
        n.pingedLanes |= n.suspendedLanes & o,
        ot === n && (dt & o) === o && (nt === 4 || nt === 3 && (dt & 130023424) === dt && 500 > Qe() - Uc ? Wr(n, 0) : Vc |= o),
        Nt(n, s)
    }
    function cg(n, s) {
        s === 0 && ((n.mode & 1) === 0 ? s = 1 : (s = la,
        la <<= 1,
        (la & 130023424) === 0 && (la = 4194304)));
        var o = Et();
        n = On(n, s),
        n !== null && (_i(n, s, o),
        Nt(n, o))
    }
    function ob(n) {
        var s = n.memoizedState
          , o = 0;
        s !== null && (o = s.retryLane),
        cg(n, o)
    }
    function ab(n, s) {
        var o = 0;
        switch (n.tag) {
        case 13:
            var u = n.stateNode
              , f = n.memoizedState;
            f !== null && (o = f.retryLane);
            break;
        case 19:
            u = n.stateNode;
            break;
        default:
            throw Error(r(314))
        }
        u !== null && u.delete(s),
        cg(n, o)
    }
    var dg;
    dg = function(n, s, o) {
        if (n !== null)
            if (n.memoizedProps !== s.pendingProps || Pt.current)
                Rt = !0;
            else {
                if ((n.lanes & o) === 0 && (s.flags & 128) === 0)
                    return Rt = !1,
                    QS(n, s, o);
                Rt = (n.flags & 131072) !== 0
            }
        else
            Rt = !1,
            Be && (s.flags & 1048576) !== 0 && Hp(s, Aa, s.index);
        switch (s.lanes = 0,
        s.tag) {
        case 2:
            var u = s.type;
            qa(n, s),
            n = s.pendingProps;
            var f = Os(s, mt.current);
            Fs(s, o),
            f = yc(null, s, u, n, f, o);
            var p = vc();
            return s.flags |= 1,
            typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (s.tag = 1,
            s.memoizedState = null,
            s.updateQueue = null,
            _t(u) ? (p = !0,
            Pa(s)) : p = !1,
            s.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null,
            cc(s),
            f.updater = $a,
            s.stateNode = f,
            f._reactInternals = s,
            Ec(s, u, n, o),
            s = _c(null, s, u, !0, p, o)) : (s.tag = 0,
            Be && p && ec(s),
            kt(null, s, f, o),
            s = s.child),
            s;
        case 16:
            u = s.elementType;
            e: {
                switch (qa(n, s),
                n = s.pendingProps,
                f = u._init,
                u = f(u._payload),
                s.type = u,
                f = s.tag = ub(u),
                n = on(u, n),
                f) {
                case 0:
                    s = Pc(null, s, u, n, o);
                    break e;
                case 1:
                    s = Im(null, s, u, n, o);
                    break e;
                case 11:
                    s = Om(null, s, u, n, o);
                    break e;
                case 14:
                    s = jm(null, s, u, on(u.type, n), o);
                    break e
                }
                throw Error(r(306, u, ""))
            }
            return s;
        case 0:
            return u = s.type,
            f = s.pendingProps,
            f = s.elementType === u ? f : on(u, f),
            Pc(n, s, u, f, o);
        case 1:
            return u = s.type,
            f = s.pendingProps,
            f = s.elementType === u ? f : on(u, f),
            Im(n, s, u, f, o);
        case 3:
            e: {
                if (Fm(s),
                n === null)
                    throw Error(r(387));
                u = s.pendingProps,
                p = s.memoizedState,
                f = p.element,
                Zp(n, s),
                Da(s, u, null, o);
                var v = s.memoizedState;
                if (u = v.element,
                p.isDehydrated)
                    if (p = {
                        element: u,
                        isDehydrated: !1,
                        cache: v.cache,
                        pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
                        transitions: v.transitions
                    },
                    s.updateQueue.baseState = p,
                    s.memoizedState = p,
                    s.flags & 256) {
                        f = Us(Error(r(423)), s),
                        s = Vm(n, s, u, o, f);
                        break e
                    } else if (u !== f) {
                        f = Us(Error(r(424)), s),
                        s = Vm(n, s, u, o, f);
                        break e
                    } else
                        for (Ut = tr(s.stateNode.containerInfo.firstChild),
                        Vt = s,
                        Be = !0,
                        sn = null,
                        o = Xp(s, null, u, o),
                        s.child = o; o; )
                            o.flags = o.flags & -3 | 4096,
                            o = o.sibling;
                else {
                    if (Ms(),
                    u === f) {
                        s = Ln(n, s, o);
                        break e
                    }
                    kt(n, s, u, o)
                }
                s = s.child
            }
            return s;
        case 5:
            return nm(s),
            n === null && rc(s),
            u = s.type,
            f = s.pendingProps,
            p = n !== null ? n.memoizedProps : null,
            v = f.children,
            Qu(u, f) ? v = null : p !== null && Qu(u, p) && (s.flags |= 32),
            Dm(n, s),
            kt(n, s, v, o),
            s.child;
        case 6:
            return n === null && rc(s),
            null;
        case 13:
            return Um(n, s, o);
        case 4:
            return dc(s, s.stateNode.containerInfo),
            u = s.pendingProps,
            n === null ? s.child = Ds(s, null, u, o) : kt(n, s, u, o),
            s.child;
        case 11:
            return u = s.type,
            f = s.pendingProps,
            f = s.elementType === u ? f : on(u, f),
            Om(n, s, u, f, o);
        case 7:
            return kt(n, s, s.pendingProps, o),
            s.child;
        case 8:
            return kt(n, s, s.pendingProps.children, o),
            s.child;
        case 12:
            return kt(n, s, s.pendingProps.children, o),
            s.child;
        case 10:
            e: {
                if (u = s.type._context,
                f = s.pendingProps,
                p = s.memoizedProps,
                v = f.value,
                Ie(ja, u._currentValue),
                u._currentValue = v,
                p !== null)
                    if (rn(p.value, v)) {
                        if (p.children === f.children && !Pt.current) {
                            s = Ln(n, s, o);
                            break e
                        }
                    } else
                        for (p = s.child,
                        p !== null && (p.return = s); p !== null; ) {
                            var T = p.dependencies;
                            if (T !== null) {
                                v = p.child;
                                for (var P = T.firstContext; P !== null; ) {
                                    if (P.context === u) {
                                        if (p.tag === 1) {
                                            P = jn(-1, o & -o),
                                            P.tag = 2;
                                            var F = p.updateQueue;
                                            if (F !== null) {
                                                F = F.shared;
                                                var H = F.pending;
                                                H === null ? P.next = P : (P.next = H.next,
                                                H.next = P),
                                                F.pending = P
                                            }
                                        }
                                        p.lanes |= o,
                                        P = p.alternate,
                                        P !== null && (P.lanes |= o),
                                        lc(p.return, o, s),
                                        T.lanes |= o;
                                        break
                                    }
                                    P = P.next
                                }
                            } else if (p.tag === 10)
                                v = p.type === s.type ? null : p.child;
                            else if (p.tag === 18) {
                                if (v = p.return,
                                v === null)
                                    throw Error(r(341));
                                v.lanes |= o,
                                T = v.alternate,
                                T !== null && (T.lanes |= o),
                                lc(v, o, s),
                                v = p.sibling
                            } else
                                v = p.child;
                            if (v !== null)
                                v.return = p;
                            else
                                for (v = p; v !== null; ) {
                                    if (v === s) {
                                        v = null;
                                        break
                                    }
                                    if (p = v.sibling,
                                    p !== null) {
                                        p.return = v.return,
                                        v = p;
                                        break
                                    }
                                    v = v.return
                                }
                            p = v
                        }
                kt(n, s, f.children, o),
                s = s.child
            }
            return s;
        case 9:
            return f = s.type,
            u = s.pendingProps.children,
            Fs(s, o),
            f = Wt(f),
            u = u(f),
            s.flags |= 1,
            kt(n, s, u, o),
            s.child;
        case 14:
            return u = s.type,
            f = on(u, s.pendingProps),
            f = on(u.type, f),
            jm(n, s, u, f, o);
        case 15:
            return Lm(n, s, s.type, s.pendingProps, o);
        case 17:
            return u = s.type,
            f = s.pendingProps,
            f = s.elementType === u ? f : on(u, f),
            qa(n, s),
            s.tag = 1,
            _t(u) ? (n = !0,
            Pa(s)) : n = !1,
            Fs(s, o),
            Tm(s, u, f),
            Ec(s, u, f, o),
            _c(null, s, u, !0, n, o);
        case 19:
            return zm(n, s, o);
        case 22:
            return Mm(n, s, o)
        }
        throw Error(r(156, s.tag))
    }
    ;
    function fg(n, s) {
        return qh(n, s)
    }
    function lb(n, s, o, u) {
        this.tag = n,
        this.key = o,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = s,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = u,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Gt(n, s, o, u) {
        return new lb(n,s,o,u)
    }
    function Qc(n) {
        return n = n.prototype,
        !(!n || !n.isReactComponent)
    }
    function ub(n) {
        if (typeof n == "function")
            return Qc(n) ? 1 : 0;
        if (n != null) {
            if (n = n.$$typeof,
            n === Ce)
                return 11;
            if (n === De)
                return 14
        }
        return 2
    }
    function fr(n, s) {
        var o = n.alternate;
        return o === null ? (o = Gt(n.tag, s, n.key, n.mode),
        o.elementType = n.elementType,
        o.type = n.type,
        o.stateNode = n.stateNode,
        o.alternate = n,
        n.alternate = o) : (o.pendingProps = s,
        o.type = n.type,
        o.flags = 0,
        o.subtreeFlags = 0,
        o.deletions = null),
        o.flags = n.flags & 14680064,
        o.childLanes = n.childLanes,
        o.lanes = n.lanes,
        o.child = n.child,
        o.memoizedProps = n.memoizedProps,
        o.memoizedState = n.memoizedState,
        o.updateQueue = n.updateQueue,
        s = n.dependencies,
        o.dependencies = s === null ? null : {
            lanes: s.lanes,
            firstContext: s.firstContext
        },
        o.sibling = n.sibling,
        o.index = n.index,
        o.ref = n.ref,
        o
    }
    function nl(n, s, o, u, f, p) {
        var v = 2;
        if (u = n,
        typeof n == "function")
            Qc(n) && (v = 1);
        else if (typeof n == "string")
            v = 5;
        else
            e: switch (n) {
            case Y:
                return Qr(o.children, f, p, s);
            case I:
                v = 8,
                f |= 8;
                break;
            case J:
                return n = Gt(12, o, s, f | 2),
                n.elementType = J,
                n.lanes = p,
                n;
            case Le:
                return n = Gt(13, o, s, f),
                n.elementType = Le,
                n.lanes = p,
                n;
            case Ae:
                return n = Gt(19, o, s, f),
                n.elementType = Ae,
                n.lanes = p,
                n;
            case fe:
                return rl(o, f, p, s);
            default:
                if (typeof n == "object" && n !== null)
                    switch (n.$$typeof) {
                    case me:
                        v = 10;
                        break e;
                    case de:
                        v = 9;
                        break e;
                    case Ce:
                        v = 11;
                        break e;
                    case De:
                        v = 14;
                        break e;
                    case xe:
                        v = 16,
                        u = null;
                        break e
                    }
                throw Error(r(130, n == null ? n : typeof n, ""))
            }
        return s = Gt(v, o, s, f),
        s.elementType = n,
        s.type = u,
        s.lanes = p,
        s
    }
    function Qr(n, s, o, u) {
        return n = Gt(7, n, u, s),
        n.lanes = o,
        n
    }
    function rl(n, s, o, u) {
        return n = Gt(22, n, u, s),
        n.elementType = fe,
        n.lanes = o,
        n.stateNode = {
            isHidden: !1
        },
        n
    }
    function Gc(n, s, o) {
        return n = Gt(6, n, null, s),
        n.lanes = o,
        n
    }
    function Yc(n, s, o) {
        return s = Gt(4, n.children !== null ? n.children : [], n.key, s),
        s.lanes = o,
        s.stateNode = {
            containerInfo: n.containerInfo,
            pendingChildren: null,
            implementation: n.implementation
        },
        s
    }
    function cb(n, s, o, u, f) {
        this.tag = s,
        this.containerInfo = n,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = ku(0),
        this.expirationTimes = ku(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = ku(0),
        this.identifierPrefix = u,
        this.onRecoverableError = f,
        this.mutableSourceEagerHydrationData = null
    }
    function Xc(n, s, o, u, f, p, v, T, P) {
        return n = new cb(n,s,o,T,P),
        s === 1 ? (s = 1,
        p === !0 && (s |= 8)) : s = 0,
        p = Gt(3, null, null, s),
        n.current = p,
        p.stateNode = n,
        p.memoizedState = {
            element: u,
            isDehydrated: o,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        cc(p),
        n
    }
    function db(n, s, o) {
        var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: K,
            key: u == null ? null : "" + u,
            children: n,
            containerInfo: s,
            implementation: o
        }
    }
    function hg(n) {
        if (!n)
            return rr;
        n = n._reactInternals;
        e: {
            if (Dr(n) !== n || n.tag !== 1)
                throw Error(r(170));
            var s = n;
            do {
                switch (s.tag) {
                case 3:
                    s = s.stateNode.context;
                    break e;
                case 1:
                    if (_t(s.type)) {
                        s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                s = s.return
            } while (s !== null);
            throw Error(r(171))
        }
        if (n.tag === 1) {
            var o = n.type;
            if (_t(o))
                return Bp(n, o, s)
        }
        return s
    }
    function pg(n, s, o, u, f, p, v, T, P) {
        return n = Xc(o, u, !0, n, f, p, v, T, P),
        n.context = hg(null),
        o = n.current,
        u = Et(),
        f = cr(o),
        p = jn(u, f),
        p.callback = s ?? null,
        or(o, p, f),
        n.current.lanes = f,
        _i(n, f, u),
        Nt(n, u),
        n
    }
    function sl(n, s, o, u) {
        var f = s.current
          , p = Et()
          , v = cr(f);
        return o = hg(o),
        s.context === null ? s.context = o : s.pendingContext = o,
        s = jn(p, v),
        s.payload = {
            element: n
        },
        u = u === void 0 ? null : u,
        u !== null && (s.callback = u),
        n = or(f, s, v),
        n !== null && (un(n, f, v, p),
        Ma(n, f, v)),
        v
    }
    function il(n) {
        if (n = n.current,
        !n.child)
            return null;
        switch (n.child.tag) {
        case 5:
            return n.child.stateNode;
        default:
            return n.child.stateNode
        }
    }
    function mg(n, s) {
        if (n = n.memoizedState,
        n !== null && n.dehydrated !== null) {
            var o = n.retryLane;
            n.retryLane = o !== 0 && o < s ? o : s
        }
    }
    function Jc(n, s) {
        mg(n, s),
        (n = n.alternate) && mg(n, s)
    }
    function fb() {
        return null
    }
    var gg = typeof reportError == "function" ? reportError : function(n) {
        console.error(n)
    }
    ;
    function Zc(n) {
        this._internalRoot = n
    }
    ol.prototype.render = Zc.prototype.render = function(n) {
        var s = this._internalRoot;
        if (s === null)
            throw Error(r(409));
        sl(n, s, null, null)
    }
    ,
    ol.prototype.unmount = Zc.prototype.unmount = function() {
        var n = this._internalRoot;
        if (n !== null) {
            this._internalRoot = null;
            var s = n.containerInfo;
            qr(function() {
                sl(null, n, null, null)
            }),
            s[_n] = null
        }
    }
    ;
    function ol(n) {
        this._internalRoot = n
    }
    ol.prototype.unstable_scheduleHydration = function(n) {
        if (n) {
            var s = Zh();
            n = {
                blockedOn: null,
                target: n,
                priority: s
            };
            for (var o = 0; o < Jn.length && s !== 0 && s < Jn[o].priority; o++)
                ;
            Jn.splice(o, 0, n),
            o === 0 && np(n)
        }
    }
    ;
    function ed(n) {
        return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11)
    }
    function al(n) {
        return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "))
    }
    function yg() {}
    function hb(n, s, o, u, f) {
        if (f) {
            if (typeof u == "function") {
                var p = u;
                u = function() {
                    var F = il(v);
                    p.call(F)
                }
            }
            var v = pg(s, u, n, 0, null, !1, !1, "", yg);
            return n._reactRootContainer = v,
            n[_n] = v.current,
            zi(n.nodeType === 8 ? n.parentNode : n),
            qr(),
            v
        }
        for (; f = n.lastChild; )
            n.removeChild(f);
        if (typeof u == "function") {
            var T = u;
            u = function() {
                var F = il(P);
                T.call(F)
            }
        }
        var P = Xc(n, 0, !1, null, null, !1, !1, "", yg);
        return n._reactRootContainer = P,
        n[_n] = P.current,
        zi(n.nodeType === 8 ? n.parentNode : n),
        qr(function() {
            sl(s, P, o, u)
        }),
        P
    }
    function ll(n, s, o, u, f) {
        var p = o._reactRootContainer;
        if (p) {
            var v = p;
            if (typeof f == "function") {
                var T = f;
                f = function() {
                    var P = il(v);
                    T.call(P)
                }
            }
            sl(s, v, n, f)
        } else
            v = hb(o, s, n, f, u);
        return il(v)
    }
    Xh = function(n) {
        switch (n.tag) {
        case 3:
            var s = n.stateNode;
            if (s.current.memoizedState.isDehydrated) {
                var o = Pi(s.pendingLanes);
                o !== 0 && (Eu(s, o | 1),
                Nt(s, Qe()),
                (Pe & 6) === 0 && ($s = Qe() + 500,
                sr()))
            }
            break;
        case 13:
            qr(function() {
                var u = On(n, 1);
                if (u !== null) {
                    var f = Et();
                    un(u, n, 1, f)
                }
            }),
            Jc(n, 1)
        }
    }
    ,
    Tu = function(n) {
        if (n.tag === 13) {
            var s = On(n, 134217728);
            if (s !== null) {
                var o = Et();
                un(s, n, 134217728, o)
            }
            Jc(n, 134217728)
        }
    }
    ,
    Jh = function(n) {
        if (n.tag === 13) {
            var s = cr(n)
              , o = On(n, s);
            if (o !== null) {
                var u = Et();
                un(o, n, s, u)
            }
            Jc(n, s)
        }
    }
    ,
    Zh = function() {
        return je
    }
    ,
    ep = function(n, s) {
        var o = je;
        try {
            return je = n,
            s()
        } finally {
            je = o
        }
    }
    ,
    yu = function(n, s, o) {
        switch (s) {
        case "input":
            if (uu(n, o),
            s = o.name,
            o.type === "radio" && s != null) {
                for (o = n; o.parentNode; )
                    o = o.parentNode;
                for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'),
                s = 0; s < o.length; s++) {
                    var u = o[s];
                    if (u !== n && u.form === n.form) {
                        var f = Ta(u);
                        if (!f)
                            throw Error(r(90));
                        Mr(u),
                        uu(u, f)
                    }
                }
            }
            break;
        case "textarea":
            Rh(n, o);
            break;
        case "select":
            s = o.value,
            s != null && xs(n, !!o.multiple, s, !1)
        }
    }
    ,
    Fh = qc,
    Vh = qr;
    var pb = {
        usingClientEntryPoint: !1,
        Events: [qi, As, Ta, Dh, Ih, qc]
    }
      , io = {
        findFiberByHostInstance: Ir,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , mb = {
        bundleType: io.bundleType,
        version: io.version,
        rendererPackageName: io.rendererPackageName,
        rendererConfig: io.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: _.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(n) {
            return n = $h(n),
            n === null ? null : n.stateNode
        },
        findFiberByHostInstance: io.findFiberByHostInstance || fb,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ul.isDisabled && ul.supportsFiber)
            try {
                oa = ul.inject(mb),
                mn = ul
            } catch {}
    }
    return Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pb,
    Ot.createPortal = function(n, s) {
        var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!ed(s))
            throw Error(r(200));
        return db(n, s, null, o)
    }
    ,
    Ot.createRoot = function(n, s) {
        if (!ed(n))
            throw Error(r(299));
        var o = !1
          , u = ""
          , f = gg;
        return s != null && (s.unstable_strictMode === !0 && (o = !0),
        s.identifierPrefix !== void 0 && (u = s.identifierPrefix),
        s.onRecoverableError !== void 0 && (f = s.onRecoverableError)),
        s = Xc(n, 1, !1, null, null, o, !1, u, f),
        n[_n] = s.current,
        zi(n.nodeType === 8 ? n.parentNode : n),
        new Zc(s)
    }
    ,
    Ot.findDOMNode = function(n) {
        if (n == null)
            return null;
        if (n.nodeType === 1)
            return n;
        var s = n._reactInternals;
        if (s === void 0)
            throw typeof n.render == "function" ? Error(r(188)) : (n = Object.keys(n).join(","),
            Error(r(268, n)));
        return n = $h(s),
        n = n === null ? null : n.stateNode,
        n
    }
    ,
    Ot.flushSync = function(n) {
        return qr(n)
    }
    ,
    Ot.hydrate = function(n, s, o) {
        if (!al(s))
            throw Error(r(200));
        return ll(null, n, s, !0, o)
    }
    ,
    Ot.hydrateRoot = function(n, s, o) {
        if (!ed(n))
            throw Error(r(405));
        var u = o != null && o.hydratedSources || null
          , f = !1
          , p = ""
          , v = gg;
        if (o != null && (o.unstable_strictMode === !0 && (f = !0),
        o.identifierPrefix !== void 0 && (p = o.identifierPrefix),
        o.onRecoverableError !== void 0 && (v = o.onRecoverableError)),
        s = pg(s, null, n, 1, o ?? null, f, !1, p, v),
        n[_n] = s.current,
        zi(n),
        u)
            for (n = 0; n < u.length; n++)
                o = u[n],
                f = o._getVersion,
                f = f(o._source),
                s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [o, f] : s.mutableSourceEagerHydrationData.push(o, f);
        return new ol(s)
    }
    ,
    Ot.render = function(n, s, o) {
        if (!al(s))
            throw Error(r(200));
        return ll(null, n, s, !1, o)
    }
    ,
    Ot.unmountComponentAtNode = function(n) {
        if (!al(n))
            throw Error(r(40));
        return n._reactRootContainer ? (qr(function() {
            ll(null, null, n, !1, function() {
                n._reactRootContainer = null,
                n[_n] = null
            })
        }),
        !0) : !1
    }
    ,
    Ot.unstable_batchedUpdates = qc,
    Ot.unstable_renderSubtreeIntoContainer = function(n, s, o, u) {
        if (!al(o))
            throw Error(r(200));
        if (n == null || n._reactInternals === void 0)
            throw Error(r(38));
        return ll(n, s, o, !1, u)
    }
    ,
    Ot.version = "18.3.1-next-f1338f8080-20240426",
    Ot
}
var Cg;
function u0() {
    if (Cg)
        return sd.exports;
    Cg = 1;
    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
            } catch (e) {
                console.error(e)
            }
    }
    return t(),
    sd.exports = Tb(),
    sd.exports
}
var Pg;
function Cb() {
    if (Pg)
        return dl;
    Pg = 1;
    var t = u0();
    return dl.createRoot = t.createRoot,
    dl.hydrateRoot = t.hydrateRoot,
    dl
}
var Pb = Cb();
const _b = l0(Pb)
  , Rb = 20
  , Ab = 1e6
  , zn = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let ad = 0;
function Nb() {
    return ad = (ad + 1) % Number.MAX_VALUE,
    ad.toString()
}
const ld = new Map
  , _g = t => {
    if (ld.has(t))
        return;
    const e = setTimeout( () => {
        ld.delete(t),
        So({
            type: zn.REMOVE_TOAST,
            toastId: t
        })
    }
    , Ab);
    ld.set(t, e)
}
  , Ob = (t, e) => {
    switch (e.type) {
    case zn.ADD_TOAST:
        return {
            ...t,
            toasts: [e.toast, ...t.toasts].slice(0, Rb)
        };
    case zn.UPDATE_TOAST:
        return {
            ...t,
            toasts: t.toasts.map(r => r.id === e.toast.id ? {
                ...r,
                ...e.toast
            } : r)
        };
    case zn.DISMISS_TOAST:
        {
            const {toastId: r} = e;
            return r ? _g(r) : t.toasts.forEach(i => {
                _g(i.id)
            }
            ),
            {
                ...t,
                toasts: t.toasts.map(i => i.id === r || r === void 0 ? {
                    ...i,
                    open: !1
                } : i)
            }
        }
    case zn.REMOVE_TOAST:
        return e.toastId === void 0 ? {
            ...t,
            toasts: []
        } : {
            ...t,
            toasts: t.toasts.filter(r => r.id !== e.toastId)
        }
    }
}
  , Sl = [];
let bl = {
    toasts: []
};
function So(t) {
    bl = Ob(bl, t),
    Sl.forEach(e => {
        e(bl)
    }
    )
}
function jb({...t}) {
    const e = Nb()
      , r = a => So({
        type: zn.UPDATE_TOAST,
        toast: {
            ...a,
            id: e
        }
    })
      , i = () => So({
        type: zn.DISMISS_TOAST,
        toastId: e
    });
    return So({
        type: zn.ADD_TOAST,
        toast: {
            ...t,
            id: e,
            open: !0,
            onOpenChange: a => {
                a || i()
            }
        }
    }),
    {
        id: e,
        dismiss: i,
        update: r
    }
}
function Lb() {
    const [t,e] = j.useState(bl);
    return j.useEffect( () => (Sl.push(e),
    () => {
        const r = Sl.indexOf(e);
        r > -1 && Sl.splice(r, 1)
    }
    ), [t]),
    {
        ...t,
        toast: jb,
        dismiss: r => So({
            type: zn.DISMISS_TOAST,
            toastId: r
        })
    }
}
function c0(t) {
    var e, r, i = "";
    if (typeof t == "string" || typeof t == "number")
        i += t;
    else if (typeof t == "object")
        if (Array.isArray(t)) {
            var a = t.length;
            for (e = 0; e < a; e++)
                t[e] && (r = c0(t[e])) && (i && (i += " "),
                i += r)
        } else
            for (r in t)
                t[r] && (i && (i += " "),
                i += r);
    return i
}
function d0() {
    for (var t, e, r = 0, i = "", a = arguments.length; r < a; r++)
        (t = arguments[r]) && (e = c0(t)) && (i && (i += " "),
        i += e);
    return i
}
const Rg = t => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t
  , Ag = d0
  , Mb = (t, e) => r => {
    var i;
    if ((e == null ? void 0 : e.variants) == null)
        return Ag(t, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
    const {variants: a, defaultVariants: l} = e
      , c = Object.keys(a).map(m => {
        const g = r == null ? void 0 : r[m]
          , y = l == null ? void 0 : l[m];
        if (g === null)
            return null;
        const w = Rg(g) || Rg(y);
        return a[m][w]
    }
    )
      , d = r && Object.entries(r).reduce( (m, g) => {
        let[y,w] = g;
        return w === void 0 || (m[y] = w),
        m
    }
    , {})
      , h = e == null || (i = e.compoundVariants) === null || i === void 0 ? void 0 : i.reduce( (m, g) => {
        let {class: y, className: w, ...E} = g;
        return Object.entries(E).every(x => {
            let[k,S] = x;
            return Array.isArray(S) ? S.includes({
                ...l,
                ...d
            }[k]) : {
                ...l,
                ...d
            }[k] === S
        }
        ) ? [...m, y, w] : m
    }
    , []);
    return Ag(t, c, h, r == null ? void 0 : r.class, r == null ? void 0 : r.className)
}
;
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Db = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , f0 = (...t) => t.filter( (e, r, i) => !!e && e.trim() !== "" && i.indexOf(e) === r).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ib = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fb = j.forwardRef( ({color: t="currentColor", size: e=24, strokeWidth: r=2, absoluteStrokeWidth: i, className: a="", children: l, iconNode: c, ...d}, h) => j.createElement("svg", {
    ref: h,
    ...Ib,
    width: e,
    height: e,
    stroke: t,
    strokeWidth: i ? Number(r) * 24 / Number(e) : r,
    className: f0("lucide", a),
    ...d
}, [...c.map( ([m,g]) => j.createElement(m, g)), ...Array.isArray(l) ? l : [l]]));
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ut = (t, e) => {
    const r = j.forwardRef( ({className: i, ...a}, l) => j.createElement(Fb, {
        ref: l,
        iconNode: e,
        className: f0(`lucide-${Db(t)}`, i),
        ...a
    }));
    return r.displayName = `${t}`,
    r
}
;
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vb = [["path", {
    d: "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9",
    key: "csbz4o"
}], ["path", {
    d: "M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z",
    key: "113wfo"
}]]
  , Ub = ut("Axe", Vb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bb = [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]
  , zb = ut("Check", Bb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $b = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "22",
    x2: "18",
    y1: "12",
    y2: "12",
    key: "l9bcsi"
}], ["line", {
    x1: "6",
    x2: "2",
    y1: "12",
    y2: "12",
    key: "13hhkx"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "6",
    y2: "2",
    key: "10w3f3"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "22",
    y2: "18",
    key: "15g9kq"
}]]
  , Hb = ut("Crosshair", $b);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qb = [["path", {
    d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
    key: "1vdc57"
}], ["path", {
    d: "M5 21h14",
    key: "11awu3"
}]]
  , h0 = ut("Crown", qb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wb = [["path", {
    d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
    key: "96xj49"
}]]
  , Kb = ut("Flame", Wb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qb = [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}]]
  , Gb = ut("Heart", Qb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yb = [["path", {
    d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
    key: "1s6t7t"
}], ["circle", {
    cx: "16.5",
    cy: "7.5",
    r: ".5",
    fill: "currentColor",
    key: "w0ekpg"
}]]
  , Xb = ut("KeyRound", Yb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jb = [["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
}]]
  , ci = ut("LoaderCircle", Jb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zb = [["path", {
    d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
    key: "1a8usu"
}], ["path", {
    d: "m15 5 4 4",
    key: "1mk7zo"
}]]
  , ek = ut("Pencil", Zb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tk = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]
  , p0 = ut("Plus", tk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nk = [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]
  , rk = ut("Search", nk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sk = [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]
  , m0 = ut("Shield", sk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ik = [["circle", {
    cx: "8",
    cy: "21",
    r: "1",
    key: "jimo8o"
}], ["circle", {
    cx: "19",
    cy: "21",
    r: "1",
    key: "13723u"
}], ["path", {
    d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
    key: "9zh506"
}]]
  , ok = ut("ShoppingCart", ik);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ak = [["polyline", {
    points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5",
    key: "1hfsw2"
}], ["line", {
    x1: "13",
    x2: "19",
    y1: "19",
    y2: "13",
    key: "1vrmhu"
}], ["line", {
    x1: "16",
    x2: "20",
    y1: "16",
    y2: "20",
    key: "1bron3"
}], ["line", {
    x1: "19",
    x2: "21",
    y1: "21",
    y2: "19",
    key: "13pww6"
}], ["polyline", {
    points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5",
    key: "hbey2j"
}], ["line", {
    x1: "5",
    x2: "9",
    y1: "14",
    y2: "18",
    key: "1hf58s"
}], ["line", {
    x1: "7",
    x2: "4",
    y1: "17",
    y2: "20",
    key: "pidxm4"
}], ["line", {
    x1: "3",
    x2: "5",
    y1: "19",
    y2: "21",
    key: "1pehsh"
}]]
  , lk = ut("Swords", ak);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uk = [["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
    key: "4alrt4"
}], ["path", {
    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
    key: "v07s0e"
}], ["line", {
    x1: "10",
    x2: "10",
    y1: "11",
    y2: "17",
    key: "1uufr5"
}], ["line", {
    x1: "14",
    x2: "14",
    y1: "11",
    y2: "17",
    key: "xtxkd"
}]]
  , g0 = ut("Trash2", uk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ck = [["path", {
    d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
    key: "17hqa7"
}], ["path", {
    d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
    key: "lmptdp"
}], ["path", {
    d: "M4 22h16",
    key: "57wxv0"
}], ["path", {
    d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
    key: "1nw9bq"
}], ["path", {
    d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
    key: "1np0yb"
}], ["path", {
    d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
    key: "u46fv3"
}]]
  , dk = ut("Trophy", ck);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fk = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , y0 = ut("X", fk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hk = [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]]
  , pk = ut("Zap", hk)
  , mk = (t, e) => {
    const r = new Array(t.length + e.length);
    for (let i = 0; i < t.length; i++)
        r[i] = t[i];
    for (let i = 0; i < e.length; i++)
        r[t.length + i] = e[i];
    return r
}
  , gk = (t, e) => ({
    classGroupId: t,
    validator: e
})
  , v0 = (t=new Map, e=null, r) => ({
    nextPart: t,
    validators: e,
    classGroupId: r
})
  , Ll = "-"
  , Ng = []
  , yk = "arbitrary.."
  , vk = t => {
    const e = xk(t)
      , {conflictingClassGroups: r, conflictingClassGroupModifiers: i} = t;
    return {
        getClassGroupId: c => {
            if (c.startsWith("[") && c.endsWith("]"))
                return wk(c);
            const d = c.split(Ll)
              , h = d[0] === "" && d.length > 1 ? 1 : 0;
            return w0(d, h, e)
        }
        ,
        getConflictingClassGroupIds: (c, d) => {
            if (d) {
                const h = i[c]
                  , m = r[c];
                return h ? m ? mk(m, h) : h : m || Ng
            }
            return r[c] || Ng
        }
    }
}
  , w0 = (t, e, r) => {
    if (t.length - e === 0)
        return r.classGroupId;
    const a = t[e]
      , l = r.nextPart.get(a);
    if (l) {
        const m = w0(t, e + 1, l);
        if (m)
            return m
    }
    const c = r.validators;
    if (c === null)
        return;
    const d = e === 0 ? t.join(Ll) : t.slice(e).join(Ll)
      , h = c.length;
    for (let m = 0; m < h; m++) {
        const g = c[m];
        if (g.validator(d))
            return g.classGroupId
    }
}
  , wk = t => t.slice(1, -1).indexOf(":") === -1 ? void 0 : ( () => {
    const e = t.slice(1, -1)
      , r = e.indexOf(":")
      , i = e.slice(0, r);
    return i ? yk + i : void 0
}
)()
  , xk = t => {
    const {theme: e, classGroups: r} = t;
    return Sk(r, e)
}
  , Sk = (t, e) => {
    const r = v0();
    for (const i in t) {
        const a = t[i];
        Pf(a, r, i, e)
    }
    return r
}
  , Pf = (t, e, r, i) => {
    const a = t.length;
    for (let l = 0; l < a; l++) {
        const c = t[l];
        bk(c, e, r, i)
    }
}
  , bk = (t, e, r, i) => {
    if (typeof t == "string") {
        kk(t, e, r);
        return
    }
    if (typeof t == "function") {
        Ek(t, e, r, i);
        return
    }
    Tk(t, e, r, i)
}
  , kk = (t, e, r) => {
    const i = t === "" ? e : x0(e, t);
    i.classGroupId = r
}
  , Ek = (t, e, r, i) => {
    if (Ck(t)) {
        Pf(t(i), e, r, i);
        return
    }
    e.validators === null && (e.validators = []),
    e.validators.push(gk(r, t))
}
  , Tk = (t, e, r, i) => {
    const a = Object.entries(t)
      , l = a.length;
    for (let c = 0; c < l; c++) {
        const [d,h] = a[c];
        Pf(h, x0(e, d), r, i)
    }
}
  , x0 = (t, e) => {
    let r = t;
    const i = e.split(Ll)
      , a = i.length;
    for (let l = 0; l < a; l++) {
        const c = i[l];
        let d = r.nextPart.get(c);
        d || (d = v0(),
        r.nextPart.set(c, d)),
        r = d
    }
    return r
}
  , Ck = t => "isThemeGetter"in t && t.isThemeGetter === !0
  , Pk = t => {
    if (t < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let e = 0
      , r = Object.create(null)
      , i = Object.create(null);
    const a = (l, c) => {
        r[l] = c,
        e++,
        e > t && (e = 0,
        i = r,
        r = Object.create(null))
    }
    ;
    return {
        get(l) {
            let c = r[l];
            if (c !== void 0)
                return c;
            if ((c = i[l]) !== void 0)
                return a(l, c),
                c
        },
        set(l, c) {
            l in r ? r[l] = c : a(l, c)
        }
    }
}
  , Ld = "!"
  , Og = ":"
  , _k = []
  , jg = (t, e, r, i, a) => ({
    modifiers: t,
    hasImportantModifier: e,
    baseClassName: r,
    maybePostfixModifierPosition: i,
    isExternal: a
})
  , Rk = t => {
    const {prefix: e, experimentalParseClassName: r} = t;
    let i = a => {
        const l = [];
        let c = 0, d = 0, h = 0, m;
        const g = a.length;
        for (let k = 0; k < g; k++) {
            const S = a[k];
            if (c === 0 && d === 0) {
                if (S === Og) {
                    l.push(a.slice(h, k)),
                    h = k + 1;
                    continue
                }
                if (S === "/") {
                    m = k;
                    continue
                }
            }
            S === "[" ? c++ : S === "]" ? c-- : S === "(" ? d++ : S === ")" && d--
        }
        const y = l.length === 0 ? a : a.slice(h);
        let w = y
          , E = !1;
        y.endsWith(Ld) ? (w = y.slice(0, -1),
        E = !0) : y.startsWith(Ld) && (w = y.slice(1),
        E = !0);
        const x = m && m > h ? m - h : void 0;
        return jg(l, E, w, x)
    }
    ;
    if (e) {
        const a = e + Og
          , l = i;
        i = c => c.startsWith(a) ? l(c.slice(a.length)) : jg(_k, !1, c, void 0, !0)
    }
    if (r) {
        const a = i;
        i = l => r({
            className: l,
            parseClassName: a
        })
    }
    return i
}
  , Ak = t => {
    const e = new Map;
    return t.orderSensitiveModifiers.forEach( (r, i) => {
        e.set(r, 1e6 + i)
    }
    ),
    r => {
        const i = [];
        let a = [];
        for (let l = 0; l < r.length; l++) {
            const c = r[l]
              , d = c[0] === "["
              , h = e.has(c);
            d || h ? (a.length > 0 && (a.sort(),
            i.push(...a),
            a = []),
            i.push(c)) : a.push(c)
        }
        return a.length > 0 && (a.sort(),
        i.push(...a)),
        i
    }
}
  , Nk = t => ({
    cache: Pk(t.cacheSize),
    parseClassName: Rk(t),
    sortModifiers: Ak(t),
    ...vk(t)
})
  , Ok = /\s+/
  , jk = (t, e) => {
    const {parseClassName: r, getClassGroupId: i, getConflictingClassGroupIds: a, sortModifiers: l} = e
      , c = []
      , d = t.trim().split(Ok);
    let h = "";
    for (let m = d.length - 1; m >= 0; m -= 1) {
        const g = d[m]
          , {isExternal: y, modifiers: w, hasImportantModifier: E, baseClassName: x, maybePostfixModifierPosition: k} = r(g);
        if (y) {
            h = g + (h.length > 0 ? " " + h : h);
            continue
        }
        let S = !!k
          , R = i(S ? x.substring(0, k) : x);
        if (!R) {
            if (!S) {
                h = g + (h.length > 0 ? " " + h : h);
                continue
            }
            if (R = i(x),
            !R) {
                h = g + (h.length > 0 ? " " + h : h);
                continue
            }
            S = !1
        }
        const U = w.length === 0 ? "" : w.length === 1 ? w[0] : l(w).join(":")
          , L = E ? U + Ld : U
          , _ = L + R;
        if (c.indexOf(_) > -1)
            continue;
        c.push(_);
        const D = a(R, S);
        for (let K = 0; K < D.length; ++K) {
            const Y = D[K];
            c.push(L + Y)
        }
        h = g + (h.length > 0 ? " " + h : h)
    }
    return h
}
  , Lk = (...t) => {
    let e = 0, r, i, a = "";
    for (; e < t.length; )
        (r = t[e++]) && (i = S0(r)) && (a && (a += " "),
        a += i);
    return a
}
  , S0 = t => {
    if (typeof t == "string")
        return t;
    let e, r = "";
    for (let i = 0; i < t.length; i++)
        t[i] && (e = S0(t[i])) && (r && (r += " "),
        r += e);
    return r
}
  , Mk = (t, ...e) => {
    let r, i, a, l;
    const c = h => {
        const m = e.reduce( (g, y) => y(g), t());
        return r = Nk(m),
        i = r.cache.get,
        a = r.cache.set,
        l = d,
        d(h)
    }
      , d = h => {
        const m = i(h);
        if (m)
            return m;
        const g = jk(h, r);
        return a(h, g),
        g
    }
    ;
    return l = c,
    (...h) => l(Lk(...h))
}
  , Dk = []
  , rt = t => {
    const e = r => r[t] || Dk;
    return e.isThemeGetter = !0,
    e
}
  , b0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , k0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , Ik = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/
  , Fk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , Vk = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , Uk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , Bk = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , zk = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , pr = t => Ik.test(t)
  , be = t => !!t && !Number.isNaN(Number(t))
  , mr = t => !!t && Number.isInteger(Number(t))
  , ud = t => t.endsWith("%") && be(t.slice(0, -1))
  , Dn = t => Fk.test(t)
  , E0 = () => !0
  , $k = t => Vk.test(t) && !Uk.test(t)
  , _f = () => !1
  , Hk = t => Bk.test(t)
  , qk = t => zk.test(t)
  , Wk = t => !te(t) && !ne(t)
  , Kk = t => jr(t, P0, _f)
  , te = t => b0.test(t)
  , Gr = t => jr(t, _0, $k)
  , Lg = t => jr(t, tE, be)
  , Qk = t => jr(t, A0, E0)
  , Gk = t => jr(t, R0, _f)
  , Mg = t => jr(t, T0, _f)
  , Yk = t => jr(t, C0, qk)
  , fl = t => jr(t, N0, Hk)
  , ne = t => k0.test(t)
  , ao = t => gs(t, _0)
  , Xk = t => gs(t, R0)
  , Dg = t => gs(t, T0)
  , Jk = t => gs(t, P0)
  , Zk = t => gs(t, C0)
  , hl = t => gs(t, N0, !0)
  , eE = t => gs(t, A0, !0)
  , jr = (t, e, r) => {
    const i = b0.exec(t);
    return i ? i[1] ? e(i[1]) : r(i[2]) : !1
}
  , gs = (t, e, r=!1) => {
    const i = k0.exec(t);
    return i ? i[1] ? e(i[1]) : r : !1
}
  , T0 = t => t === "position" || t === "percentage"
  , C0 = t => t === "image" || t === "url"
  , P0 = t => t === "length" || t === "size" || t === "bg-size"
  , _0 = t => t === "length"
  , tE = t => t === "number"
  , R0 = t => t === "family-name"
  , A0 = t => t === "number" || t === "weight"
  , N0 = t => t === "shadow"
  , nE = () => {
    const t = rt("color")
      , e = rt("font")
      , r = rt("text")
      , i = rt("font-weight")
      , a = rt("tracking")
      , l = rt("leading")
      , c = rt("breakpoint")
      , d = rt("container")
      , h = rt("spacing")
      , m = rt("radius")
      , g = rt("shadow")
      , y = rt("inset-shadow")
      , w = rt("text-shadow")
      , E = rt("drop-shadow")
      , x = rt("blur")
      , k = rt("perspective")
      , S = rt("aspect")
      , R = rt("ease")
      , U = rt("animate")
      , L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , _ = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
      , D = () => [..._(), ne, te]
      , K = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , Y = () => ["auto", "contain", "none"]
      , I = () => [ne, te, h]
      , J = () => [pr, "full", "auto", ...I()]
      , me = () => [mr, "none", "subgrid", ne, te]
      , de = () => ["auto", {
        span: ["full", mr, ne, te]
    }, mr, ne, te]
      , Ce = () => [mr, "auto", ne, te]
      , Le = () => ["auto", "min", "max", "fr", ne, te]
      , Ae = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
      , De = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
      , xe = () => ["auto", ...I()]
      , fe = () => [pr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...I()]
      , W = () => [pr, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...I()]
      , se = () => [pr, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...I()]
      , B = () => [t, ne, te]
      , N = () => [..._(), Dg, Mg, {
        position: [ne, te]
    }]
      , z = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
    }]
      , ye = () => ["auto", "cover", "contain", Jk, Kk, {
        size: [ne, te]
    }]
      , ve = () => [ud, ao, Gr]
      , ue = () => ["", "none", "full", m, ne, te]
      , he = () => ["", be, ao, Gr]
      , Ne = () => ["solid", "dashed", "dotted", "double"]
      , _e = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , we = () => [be, ud, Dg, Mg]
      , pt = () => ["", "none", x, ne, te]
      , Pn = () => ["none", be, ne, te]
      , Mr = () => ["none", be, ne, te]
      , Kn = () => [be, ne, te]
      , Qn = () => [pr, "full", ...I()];
    return {
        cacheSize: 500,
        theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [Dn],
            breakpoint: [Dn],
            color: [E0],
            container: [Dn],
            "drop-shadow": [Dn],
            ease: ["in", "out", "in-out"],
            font: [Wk],
            "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
            "inset-shadow": [Dn],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [Dn],
            shadow: [Dn],
            spacing: ["px", be],
            text: [Dn],
            "text-shadow": [Dn],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", pr, te, ne, S]
            }],
            container: ["container"],
            columns: [{
                columns: [be, te, ne, d]
            }],
            "break-after": [{
                "break-after": L()
            }],
            "break-before": [{
                "break-before": L()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            sr: ["sr-only", "not-sr-only"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: D()
            }],
            overflow: [{
                overflow: K()
            }],
            "overflow-x": [{
                "overflow-x": K()
            }],
            "overflow-y": [{
                "overflow-y": K()
            }],
            overscroll: [{
                overscroll: Y()
            }],
            "overscroll-x": [{
                "overscroll-x": Y()
            }],
            "overscroll-y": [{
                "overscroll-y": Y()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: J()
            }],
            "inset-x": [{
                "inset-x": J()
            }],
            "inset-y": [{
                "inset-y": J()
            }],
            start: [{
                "inset-s": J(),
                start: J()
            }],
            end: [{
                "inset-e": J(),
                end: J()
            }],
            "inset-bs": [{
                "inset-bs": J()
            }],
            "inset-be": [{
                "inset-be": J()
            }],
            top: [{
                top: J()
            }],
            right: [{
                right: J()
            }],
            bottom: [{
                bottom: J()
            }],
            left: [{
                left: J()
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: [mr, "auto", ne, te]
            }],
            basis: [{
                basis: [pr, "full", "auto", d, ...I()]
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["nowrap", "wrap", "wrap-reverse"]
            }],
            flex: [{
                flex: [be, pr, "auto", "initial", "none", te]
            }],
            grow: [{
                grow: ["", be, ne, te]
            }],
            shrink: [{
                shrink: ["", be, ne, te]
            }],
            order: [{
                order: [mr, "first", "last", "none", ne, te]
            }],
            "grid-cols": [{
                "grid-cols": me()
            }],
            "col-start-end": [{
                col: de()
            }],
            "col-start": [{
                "col-start": Ce()
            }],
            "col-end": [{
                "col-end": Ce()
            }],
            "grid-rows": [{
                "grid-rows": me()
            }],
            "row-start-end": [{
                row: de()
            }],
            "row-start": [{
                "row-start": Ce()
            }],
            "row-end": [{
                "row-end": Ce()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": Le()
            }],
            "auto-rows": [{
                "auto-rows": Le()
            }],
            gap: [{
                gap: I()
            }],
            "gap-x": [{
                "gap-x": I()
            }],
            "gap-y": [{
                "gap-y": I()
            }],
            "justify-content": [{
                justify: [...Ae(), "normal"]
            }],
            "justify-items": [{
                "justify-items": [...De(), "normal"]
            }],
            "justify-self": [{
                "justify-self": ["auto", ...De()]
            }],
            "align-content": [{
                content: ["normal", ...Ae()]
            }],
            "align-items": [{
                items: [...De(), {
                    baseline: ["", "last"]
                }]
            }],
            "align-self": [{
                self: ["auto", ...De(), {
                    baseline: ["", "last"]
                }]
            }],
            "place-content": [{
                "place-content": Ae()
            }],
            "place-items": [{
                "place-items": [...De(), "baseline"]
            }],
            "place-self": [{
                "place-self": ["auto", ...De()]
            }],
            p: [{
                p: I()
            }],
            px: [{
                px: I()
            }],
            py: [{
                py: I()
            }],
            ps: [{
                ps: I()
            }],
            pe: [{
                pe: I()
            }],
            pbs: [{
                pbs: I()
            }],
            pbe: [{
                pbe: I()
            }],
            pt: [{
                pt: I()
            }],
            pr: [{
                pr: I()
            }],
            pb: [{
                pb: I()
            }],
            pl: [{
                pl: I()
            }],
            m: [{
                m: xe()
            }],
            mx: [{
                mx: xe()
            }],
            my: [{
                my: xe()
            }],
            ms: [{
                ms: xe()
            }],
            me: [{
                me: xe()
            }],
            mbs: [{
                mbs: xe()
            }],
            mbe: [{
                mbe: xe()
            }],
            mt: [{
                mt: xe()
            }],
            mr: [{
                mr: xe()
            }],
            mb: [{
                mb: xe()
            }],
            ml: [{
                ml: xe()
            }],
            "space-x": [{
                "space-x": I()
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": I()
            }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{
                size: fe()
            }],
            "inline-size": [{
                inline: ["auto", ...W()]
            }],
            "min-inline-size": [{
                "min-inline": ["auto", ...W()]
            }],
            "max-inline-size": [{
                "max-inline": ["none", ...W()]
            }],
            "block-size": [{
                block: ["auto", ...se()]
            }],
            "min-block-size": [{
                "min-block": ["auto", ...se()]
            }],
            "max-block-size": [{
                "max-block": ["none", ...se()]
            }],
            w: [{
                w: [d, "screen", ...fe()]
            }],
            "min-w": [{
                "min-w": [d, "screen", "none", ...fe()]
            }],
            "max-w": [{
                "max-w": [d, "screen", "none", "prose", {
                    screen: [c]
                }, ...fe()]
            }],
            h: [{
                h: ["screen", "lh", ...fe()]
            }],
            "min-h": [{
                "min-h": ["screen", "lh", "none", ...fe()]
            }],
            "max-h": [{
                "max-h": ["screen", "lh", ...fe()]
            }],
            "font-size": [{
                text: ["base", r, ao, Gr]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: [i, eE, Qk]
            }],
            "font-stretch": [{
                "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ud, te]
            }],
            "font-family": [{
                font: [Xk, Gk, e]
            }],
            "font-features": [{
                "font-features": [te]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: [a, ne, te]
            }],
            "line-clamp": [{
                "line-clamp": [be, "none", ne, Lg]
            }],
            leading: [{
                leading: [l, ...I()]
            }],
            "list-image": [{
                "list-image": ["none", ne, te]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "list-style-type": [{
                list: ["disc", "decimal", "none", ne, te]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "placeholder-color": [{
                placeholder: B()
            }],
            "text-color": [{
                text: B()
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...Ne(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: [be, "from-font", "auto", ne, Gr]
            }],
            "text-decoration-color": [{
                decoration: B()
            }],
            "underline-offset": [{
                "underline-offset": [be, "auto", ne, te]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: I()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ne, te]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            wrap: [{
                wrap: ["break-word", "anywhere", "normal"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", ne, te]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: N()
            }],
            "bg-repeat": [{
                bg: z()
            }],
            "bg-size": [{
                bg: ye()
            }],
            "bg-image": [{
                bg: ["none", {
                    linear: [{
                        to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, mr, ne, te],
                    radial: ["", ne, te],
                    conic: [mr, ne, te]
                }, Zk, Yk]
            }],
            "bg-color": [{
                bg: B()
            }],
            "gradient-from-pos": [{
                from: ve()
            }],
            "gradient-via-pos": [{
                via: ve()
            }],
            "gradient-to-pos": [{
                to: ve()
            }],
            "gradient-from": [{
                from: B()
            }],
            "gradient-via": [{
                via: B()
            }],
            "gradient-to": [{
                to: B()
            }],
            rounded: [{
                rounded: ue()
            }],
            "rounded-s": [{
                "rounded-s": ue()
            }],
            "rounded-e": [{
                "rounded-e": ue()
            }],
            "rounded-t": [{
                "rounded-t": ue()
            }],
            "rounded-r": [{
                "rounded-r": ue()
            }],
            "rounded-b": [{
                "rounded-b": ue()
            }],
            "rounded-l": [{
                "rounded-l": ue()
            }],
            "rounded-ss": [{
                "rounded-ss": ue()
            }],
            "rounded-se": [{
                "rounded-se": ue()
            }],
            "rounded-ee": [{
                "rounded-ee": ue()
            }],
            "rounded-es": [{
                "rounded-es": ue()
            }],
            "rounded-tl": [{
                "rounded-tl": ue()
            }],
            "rounded-tr": [{
                "rounded-tr": ue()
            }],
            "rounded-br": [{
                "rounded-br": ue()
            }],
            "rounded-bl": [{
                "rounded-bl": ue()
            }],
            "border-w": [{
                border: he()
            }],
            "border-w-x": [{
                "border-x": he()
            }],
            "border-w-y": [{
                "border-y": he()
            }],
            "border-w-s": [{
                "border-s": he()
            }],
            "border-w-e": [{
                "border-e": he()
            }],
            "border-w-bs": [{
                "border-bs": he()
            }],
            "border-w-be": [{
                "border-be": he()
            }],
            "border-w-t": [{
                "border-t": he()
            }],
            "border-w-r": [{
                "border-r": he()
            }],
            "border-w-b": [{
                "border-b": he()
            }],
            "border-w-l": [{
                "border-l": he()
            }],
            "divide-x": [{
                "divide-x": he()
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": he()
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{
                border: [...Ne(), "hidden", "none"]
            }],
            "divide-style": [{
                divide: [...Ne(), "hidden", "none"]
            }],
            "border-color": [{
                border: B()
            }],
            "border-color-x": [{
                "border-x": B()
            }],
            "border-color-y": [{
                "border-y": B()
            }],
            "border-color-s": [{
                "border-s": B()
            }],
            "border-color-e": [{
                "border-e": B()
            }],
            "border-color-bs": [{
                "border-bs": B()
            }],
            "border-color-be": [{
                "border-be": B()
            }],
            "border-color-t": [{
                "border-t": B()
            }],
            "border-color-r": [{
                "border-r": B()
            }],
            "border-color-b": [{
                "border-b": B()
            }],
            "border-color-l": [{
                "border-l": B()
            }],
            "divide-color": [{
                divide: B()
            }],
            "outline-style": [{
                outline: [...Ne(), "none", "hidden"]
            }],
            "outline-offset": [{
                "outline-offset": [be, ne, te]
            }],
            "outline-w": [{
                outline: ["", be, ao, Gr]
            }],
            "outline-color": [{
                outline: B()
            }],
            shadow: [{
                shadow: ["", "none", g, hl, fl]
            }],
            "shadow-color": [{
                shadow: B()
            }],
            "inset-shadow": [{
                "inset-shadow": ["none", y, hl, fl]
            }],
            "inset-shadow-color": [{
                "inset-shadow": B()
            }],
            "ring-w": [{
                ring: he()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: B()
            }],
            "ring-offset-w": [{
                "ring-offset": [be, Gr]
            }],
            "ring-offset-color": [{
                "ring-offset": B()
            }],
            "inset-ring-w": [{
                "inset-ring": he()
            }],
            "inset-ring-color": [{
                "inset-ring": B()
            }],
            "text-shadow": [{
                "text-shadow": ["none", w, hl, fl]
            }],
            "text-shadow-color": [{
                "text-shadow": B()
            }],
            opacity: [{
                opacity: [be, ne, te]
            }],
            "mix-blend": [{
                "mix-blend": [..._e(), "plus-darker", "plus-lighter"]
            }],
            "bg-blend": [{
                "bg-blend": _e()
            }],
            "mask-clip": [{
                "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
            }, "mask-no-clip"],
            "mask-composite": [{
                mask: ["add", "subtract", "intersect", "exclude"]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [be]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": we()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": we()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": B()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": B()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": we()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": we()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": B()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": B()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": we()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": we()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": B()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": B()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": we()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": we()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": B()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": B()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": we()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": we()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": B()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": B()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": we()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": we()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": B()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": B()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": we()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": we()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": B()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": B()
            }],
            "mask-image-radial": [{
                "mask-radial": [ne, te]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": we()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": we()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": B()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": B()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": ["circle", "ellipse"]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: ["side", "corner"],
                    farthest: ["side", "corner"]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": _()
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [be]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": we()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": we()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": B()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": B()
            }],
            "mask-mode": [{
                mask: ["alpha", "luminance", "match"]
            }],
            "mask-origin": [{
                "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
            }],
            "mask-position": [{
                mask: N()
            }],
            "mask-repeat": [{
                mask: z()
            }],
            "mask-size": [{
                mask: ye()
            }],
            "mask-type": [{
                "mask-type": ["alpha", "luminance"]
            }],
            "mask-image": [{
                mask: ["none", ne, te]
            }],
            filter: [{
                filter: ["", "none", ne, te]
            }],
            blur: [{
                blur: pt()
            }],
            brightness: [{
                brightness: [be, ne, te]
            }],
            contrast: [{
                contrast: [be, ne, te]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", E, hl, fl]
            }],
            "drop-shadow-color": [{
                "drop-shadow": B()
            }],
            grayscale: [{
                grayscale: ["", be, ne, te]
            }],
            "hue-rotate": [{
                "hue-rotate": [be, ne, te]
            }],
            invert: [{
                invert: ["", be, ne, te]
            }],
            saturate: [{
                saturate: [be, ne, te]
            }],
            sepia: [{
                sepia: ["", be, ne, te]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none", ne, te]
            }],
            "backdrop-blur": [{
                "backdrop-blur": pt()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [be, ne, te]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [be, ne, te]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": ["", be, ne, te]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [be, ne, te]
            }],
            "backdrop-invert": [{
                "backdrop-invert": ["", be, ne, te]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [be, ne, te]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [be, ne, te]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": ["", be, ne, te]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": I()
            }],
            "border-spacing-x": [{
                "border-spacing-x": I()
            }],
            "border-spacing-y": [{
                "border-spacing-y": I()
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ne, te]
            }],
            "transition-behavior": [{
                transition: ["normal", "discrete"]
            }],
            duration: [{
                duration: [be, "initial", ne, te]
            }],
            ease: [{
                ease: ["linear", "initial", R, ne, te]
            }],
            delay: [{
                delay: [be, ne, te]
            }],
            animate: [{
                animate: ["none", U, ne, te]
            }],
            backface: [{
                backface: ["hidden", "visible"]
            }],
            perspective: [{
                perspective: [k, ne, te]
            }],
            "perspective-origin": [{
                "perspective-origin": D()
            }],
            rotate: [{
                rotate: Pn()
            }],
            "rotate-x": [{
                "rotate-x": Pn()
            }],
            "rotate-y": [{
                "rotate-y": Pn()
            }],
            "rotate-z": [{
                "rotate-z": Pn()
            }],
            scale: [{
                scale: Mr()
            }],
            "scale-x": [{
                "scale-x": Mr()
            }],
            "scale-y": [{
                "scale-y": Mr()
            }],
            "scale-z": [{
                "scale-z": Mr()
            }],
            "scale-3d": ["scale-3d"],
            skew: [{
                skew: Kn()
            }],
            "skew-x": [{
                "skew-x": Kn()
            }],
            "skew-y": [{
                "skew-y": Kn()
            }],
            transform: [{
                transform: [ne, te, "", "none", "gpu", "cpu"]
            }],
            "transform-origin": [{
                origin: D()
            }],
            "transform-style": [{
                transform: ["3d", "flat"]
            }],
            translate: [{
                translate: Qn()
            }],
            "translate-x": [{
                "translate-x": Qn()
            }],
            "translate-y": [{
                "translate-y": Qn()
            }],
            "translate-z": [{
                "translate-z": Qn()
            }],
            "translate-none": ["translate-none"],
            accent: [{
                accent: B()
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            "caret-color": [{
                caret: B()
            }],
            "color-scheme": [{
                scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ne, te]
            }],
            "field-sizing": [{
                "field-sizing": ["fixed", "content"]
            }],
            "pointer-events": [{
                "pointer-events": ["auto", "none"]
            }],
            resize: [{
                resize: ["none", "", "y", "x"]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": I()
            }],
            "scroll-mx": [{
                "scroll-mx": I()
            }],
            "scroll-my": [{
                "scroll-my": I()
            }],
            "scroll-ms": [{
                "scroll-ms": I()
            }],
            "scroll-me": [{
                "scroll-me": I()
            }],
            "scroll-mbs": [{
                "scroll-mbs": I()
            }],
            "scroll-mbe": [{
                "scroll-mbe": I()
            }],
            "scroll-mt": [{
                "scroll-mt": I()
            }],
            "scroll-mr": [{
                "scroll-mr": I()
            }],
            "scroll-mb": [{
                "scroll-mb": I()
            }],
            "scroll-ml": [{
                "scroll-ml": I()
            }],
            "scroll-p": [{
                "scroll-p": I()
            }],
            "scroll-px": [{
                "scroll-px": I()
            }],
            "scroll-py": [{
                "scroll-py": I()
            }],
            "scroll-ps": [{
                "scroll-ps": I()
            }],
            "scroll-pe": [{
                "scroll-pe": I()
            }],
            "scroll-pbs": [{
                "scroll-pbs": I()
            }],
            "scroll-pbe": [{
                "scroll-pbe": I()
            }],
            "scroll-pt": [{
                "scroll-pt": I()
            }],
            "scroll-pr": [{
                "scroll-pr": I()
            }],
            "scroll-pb": [{
                "scroll-pb": I()
            }],
            "scroll-pl": [{
                "scroll-pl": I()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", ne, te]
            }],
            fill: [{
                fill: ["none", ...B()]
            }],
            "stroke-w": [{
                stroke: [be, ao, Gr, Lg]
            }],
            stroke: [{
                stroke: ["none", ...B()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        },
        orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
}
  , rE = Mk(nE);
function Ho(...t) {
    return rE(d0(t))
}
const O0 = j.forwardRef( ({...t}, e) => b.jsx("div", {
    ref: e,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t
}));
O0.displayName = "ToastProvider";
const j0 = j.forwardRef( ({...t}, e) => b.jsx("div", {
    ref: e,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t
}));
j0.displayName = "ToastViewport";
const sE = Mb("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , L0 = j.forwardRef( ({className: t, variant: e, ...r}, i) => b.jsx("div", {
    ref: i,
    className: Ho(sE({
        variant: e
    }), t),
    ...r
}));
L0.displayName = "Toast";
const iE = j.forwardRef( ({className: t, ...e}, r) => b.jsx("div", {
    ref: r,
    className: Ho("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", t),
    ...e
}));
iE.displayName = "ToastAction";
const M0 = j.forwardRef( ({className: t, ...e}, r) => b.jsx("button", {
    ref: r,
    className: Ho("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", t),
    "toast-close": "",
    ...e,
    children: b.jsx(y0, {
        className: "h-4 w-4"
    })
}));
M0.displayName = "ToastClose";
const D0 = j.forwardRef( ({className: t, ...e}, r) => b.jsx("div", {
    ref: r,
    className: Ho("text-sm font-semibold", t),
    ...e
}));
D0.displayName = "ToastTitle";
const I0 = j.forwardRef( ({className: t, ...e}, r) => b.jsx("div", {
    ref: r,
    className: Ho("text-sm opacity-90", t),
    ...e
}));
I0.displayName = "ToastDescription";
function oE() {
    const {toasts: t} = Lb();
    return b.jsxs(O0, {
        children: [t.map(function({id: e, title: r, description: i, action: a, ...l}) {
            return b.jsxs(L0, {
                ...l,
                children: [b.jsxs("div", {
                    className: "grid gap-1",
                    children: [r && b.jsx(D0, {
                        children: r
                    }), i && b.jsx(I0, {
                        children: i
                    })]
                }), a, b.jsx(M0, {})]
            }, e)
        }), b.jsx(j0, {})]
    })
}
var mi = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(t) {
        return this.listeners.add(t),
        this.onSubscribe(),
        () => {
            this.listeners.delete(t),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
, aE = {
    setTimeout: (t, e) => setTimeout(t, e),
    clearTimeout: t => clearTimeout(t),
    setInterval: (t, e) => setInterval(t, e),
    clearInterval: t => clearInterval(t)
}, vr, Tf, Xv, lE = (Xv = class {
    constructor() {
        oe(this, vr, aE);
        oe(this, Tf, !1)
    }
    setTimeoutProvider(t) {
        G(this, vr, t)
    }
    setTimeout(t, e) {
        return C(this, vr).setTimeout(t, e)
    }
    clearTimeout(t) {
        C(this, vr).clearTimeout(t)
    }
    setInterval(t, e) {
        return C(this, vr).setInterval(t, e)
    }
    clearInterval(t) {
        C(this, vr).clearInterval(t)
    }
}
,
vr = new WeakMap,
Tf = new WeakMap,
Xv), Zr = new lE;
function uE(t) {
    setTimeout(t, 0)
}
var hs = typeof window > "u" || "Deno"in globalThis;
function Ct() {}
function cE(t, e) {
    return typeof t == "function" ? t(e) : t
}
function Md(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0
}
function F0(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0)
}
function _r(t, e) {
    return typeof t == "function" ? t(e) : t
}
function en(t, e) {
    return typeof t == "function" ? t(e) : t
}
function Ig(t, e) {
    const {type: r="all", exact: i, fetchStatus: a, predicate: l, queryKey: c, stale: d} = t;
    if (c) {
        if (i) {
            if (e.queryHash !== Rf(c, e.options))
                return !1
        } else if (!Ao(e.queryKey, c))
            return !1
    }
    if (r !== "all") {
        const h = e.isActive();
        if (r === "active" && !h || r === "inactive" && h)
            return !1
    }
    return !(typeof d == "boolean" && e.isStale() !== d || a && a !== e.state.fetchStatus || l && !l(e))
}
function Fg(t, e) {
    const {exact: r, status: i, predicate: a, mutationKey: l} = t;
    if (l) {
        if (!e.options.mutationKey)
            return !1;
        if (r) {
            if (ps(e.options.mutationKey) !== ps(l))
                return !1
        } else if (!Ao(e.options.mutationKey, l))
            return !1
    }
    return !(i && e.state.status !== i || a && !a(e))
}
function Rf(t, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || ps)(t)
}
function ps(t) {
    return JSON.stringify(t, (e, r) => Dd(r) ? Object.keys(r).sort().reduce( (i, a) => (i[a] = r[a],
    i), {}) : r)
}
function Ao(t, e) {
    return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every(r => Ao(t[r], e[r])) : !1
}
var dE = Object.prototype.hasOwnProperty;
function V0(t, e, r=0) {
    if (t === e)
        return t;
    if (r > 500)
        return e;
    const i = Vg(t) && Vg(e);
    if (!i && !(Dd(t) && Dd(e)))
        return e;
    const l = (i ? t : Object.keys(t)).length
      , c = i ? e : Object.keys(e)
      , d = c.length
      , h = i ? new Array(d) : {};
    let m = 0;
    for (let g = 0; g < d; g++) {
        const y = i ? g : c[g]
          , w = t[y]
          , E = e[y];
        if (w === E) {
            h[y] = w,
            (i ? g < l : dE.call(t, y)) && m++;
            continue
        }
        if (w === null || E === null || typeof w != "object" || typeof E != "object") {
            h[y] = E;
            continue
        }
        const x = V0(w, E, r + 1);
        h[y] = x,
        x === w && m++
    }
    return l === d && m === l ? t : h
}
function Ml(t, e) {
    if (!e || Object.keys(t).length !== Object.keys(e).length)
        return !1;
    for (const r in t)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function Vg(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length
}
function Dd(t) {
    if (!Ug(t))
        return !1;
    const e = t.constructor;
    if (e === void 0)
        return !0;
    const r = e.prototype;
    return !(!Ug(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype)
}
function Ug(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
function fE(t) {
    return new Promise(e => {
        Zr.setTimeout(e, t)
    }
    )
}
function Id(t, e, r) {
    return typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? V0(t, e) : e
}
function hE(t, e, r=0) {
    const i = [...t, e];
    return r && i.length > r ? i.slice(1) : i
}
function pE(t, e, r=0) {
    const i = [e, ...t];
    return r && i.length > r ? i.slice(0, -1) : i
}
var Af = Symbol();
function U0(t, e) {
    return !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === Af ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn
}
function Nf(t, e) {
    return typeof t == "function" ? t(...e) : !!t
}
function mE(t, e, r) {
    let i = !1, a;
    return Object.defineProperty(t, "signal", {
        enumerable: !0,
        get: () => (a ?? (a = e()),
        i || (i = !0,
        a.aborted ? r() : a.addEventListener("abort", r, {
            once: !0
        })),
        a)
    }),
    t
}
var ns, wr, Js, Jv, gE = (Jv = class extends mi {
    constructor() {
        super();
        oe(this, ns);
        oe(this, wr);
        oe(this, Js);
        G(this, Js, e => {
            if (!hs && window.addEventListener) {
                const r = () => e();
                return window.addEventListener("visibilitychange", r, !1),
                () => {
                    window.removeEventListener("visibilitychange", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        C(this, wr) || this.setEventListener(C(this, Js))
    }
    onUnsubscribe() {
        var e;
        this.hasListeners() || ((e = C(this, wr)) == null || e.call(this),
        G(this, wr, void 0))
    }
    setEventListener(e) {
        var r;
        G(this, Js, e),
        (r = C(this, wr)) == null || r.call(this),
        G(this, wr, e(i => {
            typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
        }
        ))
    }
    setFocused(e) {
        C(this, ns) !== e && (G(this, ns, e),
        this.onFocus())
    }
    onFocus() {
        const e = this.isFocused();
        this.listeners.forEach(r => {
            r(e)
        }
        )
    }
    isFocused() {
        var e;
        return typeof C(this, ns) == "boolean" ? C(this, ns) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden"
    }
}
,
ns = new WeakMap,
wr = new WeakMap,
Js = new WeakMap,
Jv), Of = new gE;
function Fd() {
    let t, e;
    const r = new Promise( (a, l) => {
        t = a,
        e = l
    }
    );
    r.status = "pending",
    r.catch( () => {}
    );
    function i(a) {
        Object.assign(r, a),
        delete r.resolve,
        delete r.reject
    }
    return r.resolve = a => {
        i({
            status: "fulfilled",
            value: a
        }),
        t(a)
    }
    ,
    r.reject = a => {
        i({
            status: "rejected",
            reason: a
        }),
        e(a)
    }
    ,
    r
}
var yE = uE;
function vE() {
    let t = []
      , e = 0
      , r = d => {
        d()
    }
      , i = d => {
        d()
    }
      , a = yE;
    const l = d => {
        e ? t.push(d) : a( () => {
            r(d)
        }
        )
    }
      , c = () => {
        const d = t;
        t = [],
        d.length && a( () => {
            i( () => {
                d.forEach(h => {
                    r(h)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: d => {
            let h;
            e++;
            try {
                h = d()
            } finally {
                e--,
                e || c()
            }
            return h
        }
        ,
        batchCalls: d => (...h) => {
            l( () => {
                d(...h)
            }
            )
        }
        ,
        schedule: l,
        setNotifyFunction: d => {
            r = d
        }
        ,
        setBatchNotifyFunction: d => {
            i = d
        }
        ,
        setScheduler: d => {
            a = d
        }
    }
}
var st = vE(), Zs, xr, ei, Zv, wE = (Zv = class extends mi {
    constructor() {
        super();
        oe(this, Zs, !0);
        oe(this, xr);
        oe(this, ei);
        G(this, ei, e => {
            if (!hs && window.addEventListener) {
                const r = () => e(!0)
                  , i = () => e(!1);
                return window.addEventListener("online", r, !1),
                window.addEventListener("offline", i, !1),
                () => {
                    window.removeEventListener("online", r),
                    window.removeEventListener("offline", i)
                }
            }
        }
        )
    }
    onSubscribe() {
        C(this, xr) || this.setEventListener(C(this, ei))
    }
    onUnsubscribe() {
        var e;
        this.hasListeners() || ((e = C(this, xr)) == null || e.call(this),
        G(this, xr, void 0))
    }
    setEventListener(e) {
        var r;
        G(this, ei, e),
        (r = C(this, xr)) == null || r.call(this),
        G(this, xr, e(this.setOnline.bind(this)))
    }
    setOnline(e) {
        C(this, Zs) !== e && (G(this, Zs, e),
        this.listeners.forEach(i => {
            i(e)
        }
        ))
    }
    isOnline() {
        return C(this, Zs)
    }
}
,
Zs = new WeakMap,
xr = new WeakMap,
ei = new WeakMap,
Zv), Dl = new wE;
function xE(t) {
    return Math.min(1e3 * 2 ** t, 3e4)
}
function B0(t) {
    return (t ?? "online") === "online" ? Dl.isOnline() : !0
}
var Vd = class extends Error {
    constructor(t) {
        super("CancelledError"),
        this.revert = t == null ? void 0 : t.revert,
        this.silent = t == null ? void 0 : t.silent
    }
}
;
function z0(t) {
    let e = !1, r = 0, i;
    const a = Fd()
      , l = () => a.status !== "pending"
      , c = k => {
        var S;
        if (!l()) {
            const R = new Vd(k);
            w(R),
            (S = t.onCancel) == null || S.call(t, R)
        }
    }
      , d = () => {
        e = !0
    }
      , h = () => {
        e = !1
    }
      , m = () => Of.isFocused() && (t.networkMode === "always" || Dl.isOnline()) && t.canRun()
      , g = () => B0(t.networkMode) && t.canRun()
      , y = k => {
        l() || (i == null || i(),
        a.resolve(k))
    }
      , w = k => {
        l() || (i == null || i(),
        a.reject(k))
    }
      , E = () => new Promise(k => {
        var S;
        i = R => {
            (l() || m()) && k(R)
        }
        ,
        (S = t.onPause) == null || S.call(t)
    }
    ).then( () => {
        var k;
        i = void 0,
        l() || (k = t.onContinue) == null || k.call(t)
    }
    )
      , x = () => {
        if (l())
            return;
        let k;
        const S = r === 0 ? t.initialPromise : void 0;
        try {
            k = S ?? t.fn()
        } catch (R) {
            k = Promise.reject(R)
        }
        Promise.resolve(k).then(y).catch(R => {
            var K;
            if (l())
                return;
            const U = t.retry ?? (hs ? 0 : 3)
              , L = t.retryDelay ?? xE
              , _ = typeof L == "function" ? L(r, R) : L
              , D = U === !0 || typeof U == "number" && r < U || typeof U == "function" && U(r, R);
            if (e || !D) {
                w(R);
                return
            }
            r++,
            (K = t.onFail) == null || K.call(t, r, R),
            fE(_).then( () => m() ? void 0 : E()).then( () => {
                e ? w(R) : x()
            }
            )
        }
        )
    }
    ;
    return {
        promise: a,
        status: () => a.status,
        cancel: c,
        continue: () => (i == null || i(),
        a),
        cancelRetry: d,
        continueRetry: h,
        canStart: g,
        start: () => (g() ? x() : E().then(x),
        a)
    }
}
var rs, e0, $0 = (e0 = class {
    constructor() {
        oe(this, rs)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Md(this.gcTime) && G(this, rs, Zr.setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(t) {
        this.gcTime = Math.max(this.gcTime || 0, t ?? (hs ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        C(this, rs) && (Zr.clearTimeout(C(this, rs)),
        G(this, rs, void 0))
    }
}
,
rs = new WeakMap,
e0), ss, ti, Zt, is, lt, Vo, os, dn, In, t0, SE = (t0 = class extends $0 {
    constructor(e) {
        super();
        oe(this, dn);
        oe(this, ss);
        oe(this, ti);
        oe(this, Zt);
        oe(this, is);
        oe(this, lt);
        oe(this, Vo);
        oe(this, os);
        G(this, os, !1),
        G(this, Vo, e.defaultOptions),
        this.setOptions(e.options),
        this.observers = [],
        G(this, is, e.client),
        G(this, Zt, C(this, is).getQueryCache()),
        this.queryKey = e.queryKey,
        this.queryHash = e.queryHash,
        G(this, ss, zg(this.options)),
        this.state = e.state ?? C(this, ss),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var e;
        return (e = C(this, lt)) == null ? void 0 : e.promise
    }
    setOptions(e) {
        if (this.options = {
            ...C(this, Vo),
            ...e
        },
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0) {
            const r = zg(this.options);
            r.data !== void 0 && (this.setState(Bg(r.data, r.dataUpdatedAt)),
            G(this, ss, r))
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && C(this, Zt).remove(this)
    }
    setData(e, r) {
        const i = Id(this.state.data, e, this.options);
        return Se(this, dn, In).call(this, {
            data: i,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual
        }),
        i
    }
    setState(e, r) {
        Se(this, dn, In).call(this, {
            type: "setState",
            state: e,
            setStateOptions: r
        })
    }
    cancel(e) {
        var i, a;
        const r = (i = C(this, lt)) == null ? void 0 : i.promise;
        return (a = C(this, lt)) == null || a.cancel(e),
        r ? r.then(Ct).catch(Ct) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(C(this, ss))
    }
    isActive() {
        return this.observers.some(e => en(e.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Af || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(e => _r(e.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(e=0) {
        return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !F0(this.state.dataUpdatedAt, e)
    }
    onFocus() {
        var r;
        const e = this.observers.find(i => i.shouldFetchOnWindowFocus());
        e == null || e.refetch({
            cancelRefetch: !1
        }),
        (r = C(this, lt)) == null || r.continue()
    }
    onOnline() {
        var r;
        const e = this.observers.find(i => i.shouldFetchOnReconnect());
        e == null || e.refetch({
            cancelRefetch: !1
        }),
        (r = C(this, lt)) == null || r.continue()
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e),
        this.clearGcTimeout(),
        C(this, Zt).notify({
            type: "observerAdded",
            query: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.observers.includes(e) && (this.observers = this.observers.filter(r => r !== e),
        this.observers.length || (C(this, lt) && (C(this, os) ? C(this, lt).cancel({
            revert: !0
        }) : C(this, lt).cancelRetry()),
        this.scheduleGc()),
        C(this, Zt).notify({
            type: "observerRemoved",
            query: this,
            observer: e
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Se(this, dn, In).call(this, {
            type: "invalidate"
        })
    }
    async fetch(e, r) {
        var h, m, g, y, w, E, x, k, S, R, U, L;
        if (this.state.fetchStatus !== "idle" && ((h = C(this, lt)) == null ? void 0 : h.status()) !== "rejected") {
            if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (C(this, lt))
                return C(this, lt).continueRetry(),
                C(this, lt).promise
        }
        if (e && this.setOptions(e),
        !this.options.queryFn) {
            const _ = this.observers.find(D => D.options.queryFn);
            _ && this.setOptions(_.options)
        }
        const i = new AbortController
          , a = _ => {
            Object.defineProperty(_, "signal", {
                enumerable: !0,
                get: () => (G(this, os, !0),
                i.signal)
            })
        }
          , l = () => {
            const _ = U0(this.options, r)
              , K = ( () => {
                const Y = {
                    client: C(this, is),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return a(Y),
                Y
            }
            )();
            return G(this, os, !1),
            this.options.persister ? this.options.persister(_, K, this) : _(K)
        }
          , d = ( () => {
            const _ = {
                fetchOptions: r,
                options: this.options,
                queryKey: this.queryKey,
                client: C(this, is),
                state: this.state,
                fetchFn: l
            };
            return a(_),
            _
        }
        )();
        (m = this.options.behavior) == null || m.onFetch(d, this),
        G(this, ti, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((g = d.fetchOptions) == null ? void 0 : g.meta)) && Se(this, dn, In).call(this, {
            type: "fetch",
            meta: (y = d.fetchOptions) == null ? void 0 : y.meta
        }),
        G(this, lt, z0({
            initialPromise: r == null ? void 0 : r.initialPromise,
            fn: d.fetchFn,
            onCancel: _ => {
                _ instanceof Vd && _.revert && this.setState({
                    ...C(this, ti),
                    fetchStatus: "idle"
                }),
                i.abort()
            }
            ,
            onFail: (_, D) => {
                Se(this, dn, In).call(this, {
                    type: "failed",
                    failureCount: _,
                    error: D
                })
            }
            ,
            onPause: () => {
                Se(this, dn, In).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Se(this, dn, In).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: d.options.retry,
            retryDelay: d.options.retryDelay,
            networkMode: d.options.networkMode,
            canRun: () => !0
        }));
        try {
            const _ = await C(this, lt).start();
            if (_ === void 0)
                throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(_),
            (E = (w = C(this, Zt).config).onSuccess) == null || E.call(w, _, this),
            (k = (x = C(this, Zt).config).onSettled) == null || k.call(x, _, this.state.error, this),
            _
        } catch (_) {
            if (_ instanceof Vd) {
                if (_.silent)
                    return C(this, lt).promise;
                if (_.revert) {
                    if (this.state.data === void 0)
                        throw _;
                    return this.state.data
                }
            }
            throw Se(this, dn, In).call(this, {
                type: "error",
                error: _
            }),
            (R = (S = C(this, Zt).config).onError) == null || R.call(S, _, this),
            (L = (U = C(this, Zt).config).onSettled) == null || L.call(U, this.state.data, _, this),
            _
        } finally {
            this.scheduleGc()
        }
    }
}
,
ss = new WeakMap,
ti = new WeakMap,
Zt = new WeakMap,
is = new WeakMap,
lt = new WeakMap,
Vo = new WeakMap,
os = new WeakMap,
dn = new WeakSet,
In = function(e) {
    const r = i => {
        switch (e.type) {
        case "failed":
            return {
                ...i,
                fetchFailureCount: e.failureCount,
                fetchFailureReason: e.error
            };
        case "pause":
            return {
                ...i,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...i,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...i,
                ...H0(i.data, this.options),
                fetchMeta: e.meta ?? null
            };
        case "success":
            const a = {
                ...i,
                ...Bg(e.data, e.dataUpdatedAt),
                dataUpdateCount: i.dataUpdateCount + 1,
                ...!e.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
            return G(this, ti, e.manual ? a : void 0),
            a;
        case "error":
            const l = e.error;
            return {
                ...i,
                error: l,
                errorUpdateCount: i.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: i.fetchFailureCount + 1,
                fetchFailureReason: l,
                fetchStatus: "idle",
                status: "error",
                isInvalidated: !0
            };
        case "invalidate":
            return {
                ...i,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...i,
                ...e.state
            }
        }
    }
    ;
    this.state = r(this.state),
    st.batch( () => {
        this.observers.forEach(i => {
            i.onQueryUpdate()
        }
        ),
        C(this, Zt).notify({
            query: this,
            type: "updated",
            action: e
        })
    }
    )
}
,
t0);
function H0(t, e) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: B0(e.networkMode) ? "fetching" : "paused",
        ...t === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Bg(t, e) {
    return {
        data: t,
        dataUpdatedAt: e ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}
function zg(t) {
    const e = typeof t.initialData == "function" ? t.initialData() : t.initialData
      , r = e !== void 0
      , i = r ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
    return {
        data: e,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? i ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var jt, Ee, Uo, Tt, as, ni, Fn, Sr, Bo, ri, si, ls, us, br, ii, Oe, po, Ud, Bd, zd, $d, Hd, qd, Wd, q0, n0, bE = (n0 = class extends mi {
    constructor(e, r) {
        super();
        oe(this, Oe);
        oe(this, jt);
        oe(this, Ee);
        oe(this, Uo);
        oe(this, Tt);
        oe(this, as);
        oe(this, ni);
        oe(this, Fn);
        oe(this, Sr);
        oe(this, Bo);
        oe(this, ri);
        oe(this, si);
        oe(this, ls);
        oe(this, us);
        oe(this, br);
        oe(this, ii, new Set);
        this.options = r,
        G(this, jt, e),
        G(this, Sr, null),
        G(this, Fn, Fd()),
        this.bindMethods(),
        this.setOptions(r)
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (C(this, Ee).addObserver(this),
        $g(C(this, Ee), this.options) ? Se(this, Oe, po).call(this) : this.updateResult(),
        Se(this, Oe, $d).call(this))
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return Kd(C(this, Ee), this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return Kd(C(this, Ee), this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set,
        Se(this, Oe, Hd).call(this),
        Se(this, Oe, qd).call(this),
        C(this, Ee).removeObserver(this)
    }
    setOptions(e) {
        const r = this.options
          , i = C(this, Ee);
        if (this.options = C(this, jt).defaultQueryOptions(e),
        this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof en(this.options.enabled, C(this, Ee)) != "boolean")
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        Se(this, Oe, Wd).call(this),
        C(this, Ee).setOptions(this.options),
        r._defaulted && !Ml(this.options, r) && C(this, jt).getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: C(this, Ee),
            observer: this
        });
        const a = this.hasListeners();
        a && Hg(C(this, Ee), i, this.options, r) && Se(this, Oe, po).call(this),
        this.updateResult(),
        a && (C(this, Ee) !== i || en(this.options.enabled, C(this, Ee)) !== en(r.enabled, C(this, Ee)) || _r(this.options.staleTime, C(this, Ee)) !== _r(r.staleTime, C(this, Ee))) && Se(this, Oe, Ud).call(this);
        const l = Se(this, Oe, Bd).call(this);
        a && (C(this, Ee) !== i || en(this.options.enabled, C(this, Ee)) !== en(r.enabled, C(this, Ee)) || l !== C(this, br)) && Se(this, Oe, zd).call(this, l)
    }
    getOptimisticResult(e) {
        const r = C(this, jt).getQueryCache().build(C(this, jt), e)
          , i = this.createResult(r, e);
        return EE(this, i) && (G(this, Tt, i),
        G(this, ni, this.options),
        G(this, as, C(this, Ee).state)),
        i
    }
    getCurrentResult() {
        return C(this, Tt)
    }
    trackResult(e, r) {
        return new Proxy(e,{
            get: (i, a) => (this.trackProp(a),
            r == null || r(a),
            a === "promise" && (this.trackProp("data"),
            !this.options.experimental_prefetchInRender && C(this, Fn).status === "pending" && C(this, Fn).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),
            Reflect.get(i, a))
        })
    }
    trackProp(e) {
        C(this, ii).add(e)
    }
    getCurrentQuery() {
        return C(this, Ee)
    }
    refetch({...e}={}) {
        return this.fetch({
            ...e
        })
    }
    fetchOptimistic(e) {
        const r = C(this, jt).defaultQueryOptions(e)
          , i = C(this, jt).getQueryCache().build(C(this, jt), r);
        return i.fetch().then( () => this.createResult(i, r))
    }
    fetch(e) {
        return Se(this, Oe, po).call(this, {
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }).then( () => (this.updateResult(),
        C(this, Tt)))
    }
    createResult(e, r) {
        var J;
        const i = C(this, Ee)
          , a = this.options
          , l = C(this, Tt)
          , c = C(this, as)
          , d = C(this, ni)
          , m = e !== i ? e.state : C(this, Uo)
          , {state: g} = e;
        let y = {
            ...g
        }, w = !1, E;
        if (r._optimisticResults) {
            const me = this.hasListeners()
              , de = !me && $g(e, r)
              , Ce = me && Hg(e, i, r, a);
            (de || Ce) && (y = {
                ...y,
                ...H0(g.data, e.options)
            }),
            r._optimisticResults === "isRestoring" && (y.fetchStatus = "idle")
        }
        let {error: x, errorUpdatedAt: k, status: S} = y;
        E = y.data;
        let R = !1;
        if (r.placeholderData !== void 0 && E === void 0 && S === "pending") {
            let me;
            l != null && l.isPlaceholderData && r.placeholderData === (d == null ? void 0 : d.placeholderData) ? (me = l.data,
            R = !0) : me = typeof r.placeholderData == "function" ? r.placeholderData((J = C(this, si)) == null ? void 0 : J.state.data, C(this, si)) : r.placeholderData,
            me !== void 0 && (S = "success",
            E = Id(l == null ? void 0 : l.data, me, r),
            w = !0)
        }
        if (r.select && E !== void 0 && !R)
            if (l && E === (c == null ? void 0 : c.data) && r.select === C(this, Bo))
                E = C(this, ri);
            else
                try {
                    G(this, Bo, r.select),
                    E = r.select(E),
                    E = Id(l == null ? void 0 : l.data, E, r),
                    G(this, ri, E),
                    G(this, Sr, null)
                } catch (me) {
                    G(this, Sr, me)
                }
        C(this, Sr) && (x = C(this, Sr),
        E = C(this, ri),
        k = Date.now(),
        S = "error");
        const U = y.fetchStatus === "fetching"
          , L = S === "pending"
          , _ = S === "error"
          , D = L && U
          , K = E !== void 0
          , I = {
            status: S,
            fetchStatus: y.fetchStatus,
            isPending: L,
            isSuccess: S === "success",
            isError: _,
            isInitialLoading: D,
            isLoading: D,
            data: E,
            dataUpdatedAt: y.dataUpdatedAt,
            error: x,
            errorUpdatedAt: k,
            failureCount: y.fetchFailureCount,
            failureReason: y.fetchFailureReason,
            errorUpdateCount: y.errorUpdateCount,
            isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
            isFetchedAfterMount: y.dataUpdateCount > m.dataUpdateCount || y.errorUpdateCount > m.errorUpdateCount,
            isFetching: U,
            isRefetching: U && !L,
            isLoadingError: _ && !K,
            isPaused: y.fetchStatus === "paused",
            isPlaceholderData: w,
            isRefetchError: _ && K,
            isStale: jf(e, r),
            refetch: this.refetch,
            promise: C(this, Fn),
            isEnabled: en(r.enabled, e) !== !1
        };
        if (this.options.experimental_prefetchInRender) {
            const me = I.data !== void 0
              , de = I.status === "error" && !me
              , Ce = De => {
                de ? De.reject(I.error) : me && De.resolve(I.data)
            }
              , Le = () => {
                const De = G(this, Fn, I.promise = Fd());
                Ce(De)
            }
              , Ae = C(this, Fn);
            switch (Ae.status) {
            case "pending":
                e.queryHash === i.queryHash && Ce(Ae);
                break;
            case "fulfilled":
                (de || I.data !== Ae.value) && Le();
                break;
            case "rejected":
                (!de || I.error !== Ae.reason) && Le();
                break
            }
        }
        return I
    }
    updateResult() {
        const e = C(this, Tt)
          , r = this.createResult(C(this, Ee), this.options);
        if (G(this, as, C(this, Ee).state),
        G(this, ni, this.options),
        C(this, as).data !== void 0 && G(this, si, C(this, Ee)),
        Ml(r, e))
            return;
        G(this, Tt, r);
        const i = () => {
            if (!e)
                return !0;
            const {notifyOnChangeProps: a} = this.options
              , l = typeof a == "function" ? a() : a;
            if (l === "all" || !l && !C(this, ii).size)
                return !0;
            const c = new Set(l ?? C(this, ii));
            return this.options.throwOnError && c.add("error"),
            Object.keys(C(this, Tt)).some(d => {
                const h = d;
                return C(this, Tt)[h] !== e[h] && c.has(h)
            }
            )
        }
        ;
        Se(this, Oe, q0).call(this, {
            listeners: i()
        })
    }
    onQueryUpdate() {
        this.updateResult(),
        this.hasListeners() && Se(this, Oe, $d).call(this)
    }
}
,
jt = new WeakMap,
Ee = new WeakMap,
Uo = new WeakMap,
Tt = new WeakMap,
as = new WeakMap,
ni = new WeakMap,
Fn = new WeakMap,
Sr = new WeakMap,
Bo = new WeakMap,
ri = new WeakMap,
si = new WeakMap,
ls = new WeakMap,
us = new WeakMap,
br = new WeakMap,
ii = new WeakMap,
Oe = new WeakSet,
po = function(e) {
    Se(this, Oe, Wd).call(this);
    let r = C(this, Ee).fetch(this.options, e);
    return e != null && e.throwOnError || (r = r.catch(Ct)),
    r
}
,
Ud = function() {
    Se(this, Oe, Hd).call(this);
    const e = _r(this.options.staleTime, C(this, Ee));
    if (hs || C(this, Tt).isStale || !Md(e))
        return;
    const i = F0(C(this, Tt).dataUpdatedAt, e) + 1;
    G(this, ls, Zr.setTimeout( () => {
        C(this, Tt).isStale || this.updateResult()
    }
    , i))
}
,
Bd = function() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(C(this, Ee)) : this.options.refetchInterval) ?? !1
}
,
zd = function(e) {
    Se(this, Oe, qd).call(this),
    G(this, br, e),
    !(hs || en(this.options.enabled, C(this, Ee)) === !1 || !Md(C(this, br)) || C(this, br) === 0) && G(this, us, Zr.setInterval( () => {
        (this.options.refetchIntervalInBackground || Of.isFocused()) && Se(this, Oe, po).call(this)
    }
    , C(this, br)))
}
,
$d = function() {
    Se(this, Oe, Ud).call(this),
    Se(this, Oe, zd).call(this, Se(this, Oe, Bd).call(this))
}
,
Hd = function() {
    C(this, ls) && (Zr.clearTimeout(C(this, ls)),
    G(this, ls, void 0))
}
,
qd = function() {
    C(this, us) && (Zr.clearInterval(C(this, us)),
    G(this, us, void 0))
}
,
Wd = function() {
    const e = C(this, jt).getQueryCache().build(C(this, jt), this.options);
    if (e === C(this, Ee))
        return;
    const r = C(this, Ee);
    G(this, Ee, e),
    G(this, Uo, e.state),
    this.hasListeners() && (r == null || r.removeObserver(this),
    e.addObserver(this))
}
,
q0 = function(e) {
    st.batch( () => {
        e.listeners && this.listeners.forEach(r => {
            r(C(this, Tt))
        }
        ),
        C(this, jt).getQueryCache().notify({
            query: C(this, Ee),
            type: "observerResultsUpdated"
        })
    }
    )
}
,
n0);
function kE(t, e) {
    return en(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1)
}
function $g(t, e) {
    return kE(t, e) || t.state.data !== void 0 && Kd(t, e, e.refetchOnMount)
}
function Kd(t, e, r) {
    if (en(e.enabled, t) !== !1 && _r(e.staleTime, t) !== "static") {
        const i = typeof r == "function" ? r(t) : r;
        return i === "always" || i !== !1 && jf(t, e)
    }
    return !1
}
function Hg(t, e, r, i) {
    return (t !== e || en(i.enabled, t) === !1) && (!r.suspense || t.state.status !== "error") && jf(t, r)
}
function jf(t, e) {
    return en(e.enabled, t) !== !1 && t.isStaleByTime(_r(e.staleTime, t))
}
function EE(t, e) {
    return !Ml(t.getCurrentResult(), e)
}
function qg(t) {
    return {
        onFetch: (e, r) => {
            var g, y, w, E, x;
            const i = e.options
              , a = (w = (y = (g = e.fetchOptions) == null ? void 0 : g.meta) == null ? void 0 : y.fetchMore) == null ? void 0 : w.direction
              , l = ((E = e.state.data) == null ? void 0 : E.pages) || []
              , c = ((x = e.state.data) == null ? void 0 : x.pageParams) || [];
            let d = {
                pages: [],
                pageParams: []
            }
              , h = 0;
            const m = async () => {
                let k = !1;
                const S = L => {
                    mE(L, () => e.signal, () => k = !0)
                }
                  , R = U0(e.options, e.fetchOptions)
                  , U = async (L, _, D) => {
                    if (k)
                        return Promise.reject();
                    if (_ == null && L.pages.length)
                        return Promise.resolve(L);
                    const Y = ( () => {
                        const de = {
                            client: e.client,
                            queryKey: e.queryKey,
                            pageParam: _,
                            direction: D ? "backward" : "forward",
                            meta: e.options.meta
                        };
                        return S(de),
                        de
                    }
                    )()
                      , I = await R(Y)
                      , {maxPages: J} = e.options
                      , me = D ? pE : hE;
                    return {
                        pages: me(L.pages, I, J),
                        pageParams: me(L.pageParams, _, J)
                    }
                }
                ;
                if (a && l.length) {
                    const L = a === "backward"
                      , _ = L ? TE : Wg
                      , D = {
                        pages: l,
                        pageParams: c
                    }
                      , K = _(i, D);
                    d = await U(D, K, L)
                } else {
                    const L = t ?? l.length;
                    do {
                        const _ = h === 0 ? c[0] ?? i.initialPageParam : Wg(i, d);
                        if (h > 0 && _ == null)
                            break;
                        d = await U(d, _),
                        h++
                    } while (h < L)
                }
                return d
            }
            ;
            e.options.persister ? e.fetchFn = () => {
                var k, S;
                return (S = (k = e.options).persister) == null ? void 0 : S.call(k, m, {
                    client: e.client,
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal
                }, r)
            }
            : e.fetchFn = m
        }
    }
}
function Wg(t, {pages: e, pageParams: r}) {
    const i = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[i], e, r[i], r) : void 0
}
function TE(t, {pages: e, pageParams: r}) {
    var i;
    return e.length > 0 ? (i = t.getPreviousPageParam) == null ? void 0 : i.call(t, e[0], e, r[0], r) : void 0
}
var zo, xn, wt, cs, Sn, gr, r0, CE = (r0 = class extends $0 {
    constructor(e) {
        super();
        oe(this, Sn);
        oe(this, zo);
        oe(this, xn);
        oe(this, wt);
        oe(this, cs);
        G(this, zo, e.client),
        this.mutationId = e.mutationId,
        G(this, wt, e.mutationCache),
        G(this, xn, []),
        this.state = e.state || W0(),
        this.setOptions(e.options),
        this.scheduleGc()
    }
    setOptions(e) {
        this.options = e,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        C(this, xn).includes(e) || (C(this, xn).push(e),
        this.clearGcTimeout(),
        C(this, wt).notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        G(this, xn, C(this, xn).filter(r => r !== e)),
        this.scheduleGc(),
        C(this, wt).notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        C(this, xn).length || (this.state.status === "pending" ? this.scheduleGc() : C(this, wt).remove(this))
    }
    continue() {
        var e;
        return ((e = C(this, cs)) == null ? void 0 : e.continue()) ?? this.execute(this.state.variables)
    }
    async execute(e) {
        var c, d, h, m, g, y, w, E, x, k, S, R, U, L, _, D, K, Y;
        const r = () => {
            Se(this, Sn, gr).call(this, {
                type: "continue"
            })
        }
          , i = {
            client: C(this, zo),
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        G(this, cs, z0({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e, i) : Promise.reject(new Error("No mutationFn found")),
            onFail: (I, J) => {
                Se(this, Sn, gr).call(this, {
                    type: "failed",
                    failureCount: I,
                    error: J
                })
            }
            ,
            onPause: () => {
                Se(this, Sn, gr).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => C(this, wt).canRun(this)
        }));
        const a = this.state.status === "pending"
          , l = !C(this, cs).canStart();
        try {
            if (a)
                r();
            else {
                Se(this, Sn, gr).call(this, {
                    type: "pending",
                    variables: e,
                    isPaused: l
                }),
                C(this, wt).config.onMutate && await C(this, wt).config.onMutate(e, this, i);
                const J = await ((d = (c = this.options).onMutate) == null ? void 0 : d.call(c, e, i));
                J !== this.state.context && Se(this, Sn, gr).call(this, {
                    type: "pending",
                    context: J,
                    variables: e,
                    isPaused: l
                })
            }
            const I = await C(this, cs).start();
            return await ((m = (h = C(this, wt).config).onSuccess) == null ? void 0 : m.call(h, I, e, this.state.context, this, i)),
            await ((y = (g = this.options).onSuccess) == null ? void 0 : y.call(g, I, e, this.state.context, i)),
            await ((E = (w = C(this, wt).config).onSettled) == null ? void 0 : E.call(w, I, null, this.state.variables, this.state.context, this, i)),
            await ((k = (x = this.options).onSettled) == null ? void 0 : k.call(x, I, null, e, this.state.context, i)),
            Se(this, Sn, gr).call(this, {
                type: "success",
                data: I
            }),
            I
        } catch (I) {
            try {
                await ((R = (S = C(this, wt).config).onError) == null ? void 0 : R.call(S, I, e, this.state.context, this, i))
            } catch (J) {
                Promise.reject(J)
            }
            try {
                await ((L = (U = this.options).onError) == null ? void 0 : L.call(U, I, e, this.state.context, i))
            } catch (J) {
                Promise.reject(J)
            }
            try {
                await ((D = (_ = C(this, wt).config).onSettled) == null ? void 0 : D.call(_, void 0, I, this.state.variables, this.state.context, this, i))
            } catch (J) {
                Promise.reject(J)
            }
            try {
                await ((Y = (K = this.options).onSettled) == null ? void 0 : Y.call(K, void 0, I, e, this.state.context, i))
            } catch (J) {
                Promise.reject(J)
            }
            throw Se(this, Sn, gr).call(this, {
                type: "error",
                error: I
            }),
            I
        } finally {
            C(this, wt).runNext(this)
        }
    }
}
,
zo = new WeakMap,
xn = new WeakMap,
wt = new WeakMap,
cs = new WeakMap,
Sn = new WeakSet,
gr = function(e) {
    const r = i => {
        switch (e.type) {
        case "failed":
            return {
                ...i,
                failureCount: e.failureCount,
                failureReason: e.error
            };
        case "pause":
            return {
                ...i,
                isPaused: !0
            };
        case "continue":
            return {
                ...i,
                isPaused: !1
            };
        case "pending":
            return {
                ...i,
                context: e.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: e.isPaused,
                status: "pending",
                variables: e.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...i,
                data: e.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...i,
                data: void 0,
                error: e.error,
                failureCount: i.failureCount + 1,
                failureReason: e.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = r(this.state),
    st.batch( () => {
        C(this, xn).forEach(i => {
            i.onMutationUpdate(e)
        }
        ),
        C(this, wt).notify({
            mutation: this,
            type: "updated",
            action: e
        })
    }
    )
}
,
r0);
function W0() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Vn, fn, $o, s0, PE = (s0 = class extends mi {
    constructor(e={}) {
        super();
        oe(this, Vn);
        oe(this, fn);
        oe(this, $o);
        this.config = e,
        G(this, Vn, new Set),
        G(this, fn, new Map),
        G(this, $o, 0)
    }
    build(e, r, i) {
        const a = new CE({
            client: e,
            mutationCache: this,
            mutationId: ++cl(this, $o)._,
            options: e.defaultMutationOptions(r),
            state: i
        });
        return this.add(a),
        a
    }
    add(e) {
        C(this, Vn).add(e);
        const r = pl(e);
        if (typeof r == "string") {
            const i = C(this, fn).get(r);
            i ? i.push(e) : C(this, fn).set(r, [e])
        }
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        if (C(this, Vn).delete(e)) {
            const r = pl(e);
            if (typeof r == "string") {
                const i = C(this, fn).get(r);
                if (i)
                    if (i.length > 1) {
                        const a = i.indexOf(e);
                        a !== -1 && i.splice(a, 1)
                    } else
                        i[0] === e && C(this, fn).delete(r)
            }
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const r = pl(e);
        if (typeof r == "string") {
            const i = C(this, fn).get(r)
              , a = i == null ? void 0 : i.find(l => l.state.status === "pending");
            return !a || a === e
        } else
            return !0
    }
    runNext(e) {
        var i;
        const r = pl(e);
        if (typeof r == "string") {
            const a = (i = C(this, fn).get(r)) == null ? void 0 : i.find(l => l !== e && l.state.isPaused);
            return (a == null ? void 0 : a.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        st.batch( () => {
            C(this, Vn).forEach(e => {
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }
            ),
            C(this, Vn).clear(),
            C(this, fn).clear()
        }
        )
    }
    getAll() {
        return Array.from(C(this, Vn))
    }
    find(e) {
        const r = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => Fg(r, i))
    }
    findAll(e={}) {
        return this.getAll().filter(r => Fg(e, r))
    }
    notify(e) {
        st.batch( () => {
            this.listeners.forEach(r => {
                r(e)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const e = this.getAll().filter(r => r.state.isPaused);
        return st.batch( () => Promise.all(e.map(r => r.continue().catch(Ct))))
    }
}
,
Vn = new WeakMap,
fn = new WeakMap,
$o = new WeakMap,
s0);
function pl(t) {
    var e;
    return (e = t.options.scope) == null ? void 0 : e.id
}
var Un, kr, Lt, Bn, qn, kl, Qd, i0, _E = (i0 = class extends mi {
    constructor(r, i) {
        super();
        oe(this, qn);
        oe(this, Un);
        oe(this, kr);
        oe(this, Lt);
        oe(this, Bn);
        G(this, Un, r),
        this.setOptions(i),
        this.bindMethods(),
        Se(this, qn, kl).call(this)
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this),
        this.reset = this.reset.bind(this)
    }
    setOptions(r) {
        var a;
        const i = this.options;
        this.options = C(this, Un).defaultMutationOptions(r),
        Ml(this.options, i) || C(this, Un).getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: C(this, Lt),
            observer: this
        }),
        i != null && i.mutationKey && this.options.mutationKey && ps(i.mutationKey) !== ps(this.options.mutationKey) ? this.reset() : ((a = C(this, Lt)) == null ? void 0 : a.state.status) === "pending" && C(this, Lt).setOptions(this.options)
    }
    onUnsubscribe() {
        var r;
        this.hasListeners() || (r = C(this, Lt)) == null || r.removeObserver(this)
    }
    onMutationUpdate(r) {
        Se(this, qn, kl).call(this),
        Se(this, qn, Qd).call(this, r)
    }
    getCurrentResult() {
        return C(this, kr)
    }
    reset() {
        var r;
        (r = C(this, Lt)) == null || r.removeObserver(this),
        G(this, Lt, void 0),
        Se(this, qn, kl).call(this),
        Se(this, qn, Qd).call(this)
    }
    mutate(r, i) {
        var a;
        return G(this, Bn, i),
        (a = C(this, Lt)) == null || a.removeObserver(this),
        G(this, Lt, C(this, Un).getMutationCache().build(C(this, Un), this.options)),
        C(this, Lt).addObserver(this),
        C(this, Lt).execute(r)
    }
}
,
Un = new WeakMap,
kr = new WeakMap,
Lt = new WeakMap,
Bn = new WeakMap,
qn = new WeakSet,
kl = function() {
    var i;
    const r = ((i = C(this, Lt)) == null ? void 0 : i.state) ?? W0();
    G(this, kr, {
        ...r,
        isPending: r.status === "pending",
        isSuccess: r.status === "success",
        isError: r.status === "error",
        isIdle: r.status === "idle",
        mutate: this.mutate,
        reset: this.reset
    })
}
,
Qd = function(r) {
    st.batch( () => {
        var i, a, l, c, d, h, m, g;
        if (C(this, Bn) && this.hasListeners()) {
            const y = C(this, kr).variables
              , w = C(this, kr).context
              , E = {
                client: C(this, Un),
                meta: this.options.meta,
                mutationKey: this.options.mutationKey
            };
            if ((r == null ? void 0 : r.type) === "success") {
                try {
                    (a = (i = C(this, Bn)).onSuccess) == null || a.call(i, r.data, y, w, E)
                } catch (x) {
                    Promise.reject(x)
                }
                try {
                    (c = (l = C(this, Bn)).onSettled) == null || c.call(l, r.data, null, y, w, E)
                } catch (x) {
                    Promise.reject(x)
                }
            } else if ((r == null ? void 0 : r.type) === "error") {
                try {
                    (h = (d = C(this, Bn)).onError) == null || h.call(d, r.error, y, w, E)
                } catch (x) {
                    Promise.reject(x)
                }
                try {
                    (g = (m = C(this, Bn)).onSettled) == null || g.call(m, void 0, r.error, y, w, E)
                } catch (x) {
                    Promise.reject(x)
                }
            }
        }
        this.listeners.forEach(y => {
            y(C(this, kr))
        }
        )
    }
    )
}
,
i0), bn, o0, RE = (o0 = class extends mi {
    constructor(e={}) {
        super();
        oe(this, bn);
        this.config = e,
        G(this, bn, new Map)
    }
    build(e, r, i) {
        const a = r.queryKey
          , l = r.queryHash ?? Rf(a, r);
        let c = this.get(l);
        return c || (c = new SE({
            client: e,
            queryKey: a,
            queryHash: l,
            options: e.defaultQueryOptions(r),
            state: i,
            defaultOptions: e.getQueryDefaults(a)
        }),
        this.add(c)),
        c
    }
    add(e) {
        C(this, bn).has(e.queryHash) || (C(this, bn).set(e.queryHash, e),
        this.notify({
            type: "added",
            query: e
        }))
    }
    remove(e) {
        const r = C(this, bn).get(e.queryHash);
        r && (e.destroy(),
        r === e && C(this, bn).delete(e.queryHash),
        this.notify({
            type: "removed",
            query: e
        }))
    }
    clear() {
        st.batch( () => {
            this.getAll().forEach(e => {
                this.remove(e)
            }
            )
        }
        )
    }
    get(e) {
        return C(this, bn).get(e)
    }
    getAll() {
        return [...C(this, bn).values()]
    }
    find(e) {
        const r = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => Ig(r, i))
    }
    findAll(e={}) {
        const r = this.getAll();
        return Object.keys(e).length > 0 ? r.filter(i => Ig(e, i)) : r
    }
    notify(e) {
        st.batch( () => {
            this.listeners.forEach(r => {
                r(e)
            }
            )
        }
        )
    }
    onFocus() {
        st.batch( () => {
            this.getAll().forEach(e => {
                e.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        st.batch( () => {
            this.getAll().forEach(e => {
                e.onOnline()
            }
            )
        }
        )
    }
}
,
bn = new WeakMap,
o0), We, Er, Tr, oi, ai, Cr, li, ui, a0, AE = (a0 = class {
    constructor(t={}) {
        oe(this, We);
        oe(this, Er);
        oe(this, Tr);
        oe(this, oi);
        oe(this, ai);
        oe(this, Cr);
        oe(this, li);
        oe(this, ui);
        G(this, We, t.queryCache || new RE),
        G(this, Er, t.mutationCache || new PE),
        G(this, Tr, t.defaultOptions || {}),
        G(this, oi, new Map),
        G(this, ai, new Map),
        G(this, Cr, 0)
    }
    mount() {
        cl(this, Cr)._++,
        C(this, Cr) === 1 && (G(this, li, Of.subscribe(async t => {
            t && (await this.resumePausedMutations(),
            C(this, We).onFocus())
        }
        )),
        G(this, ui, Dl.subscribe(async t => {
            t && (await this.resumePausedMutations(),
            C(this, We).onOnline())
        }
        )))
    }
    unmount() {
        var t, e;
        cl(this, Cr)._--,
        C(this, Cr) === 0 && ((t = C(this, li)) == null || t.call(this),
        G(this, li, void 0),
        (e = C(this, ui)) == null || e.call(this),
        G(this, ui, void 0))
    }
    isFetching(t) {
        return C(this, We).findAll({
            ...t,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(t) {
        return C(this, Er).findAll({
            ...t,
            status: "pending"
        }).length
    }
    getQueryData(t) {
        var r;
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return (r = C(this, We).get(e.queryHash)) == null ? void 0 : r.state.data
    }
    ensureQueryData(t) {
        const e = this.defaultQueryOptions(t)
          , r = C(this, We).build(this, e)
          , i = r.state.data;
        return i === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && r.isStaleByTime(_r(e.staleTime, r)) && this.prefetchQuery(e),
        Promise.resolve(i))
    }
    getQueriesData(t) {
        return C(this, We).findAll(t).map( ({queryKey: e, state: r}) => {
            const i = r.data;
            return [e, i]
        }
        )
    }
    setQueryData(t, e, r) {
        const i = this.defaultQueryOptions({
            queryKey: t
        })
          , a = C(this, We).get(i.queryHash)
          , l = a == null ? void 0 : a.state.data
          , c = cE(e, l);
        if (c !== void 0)
            return C(this, We).build(this, i).setData(c, {
                ...r,
                manual: !0
            })
    }
    setQueriesData(t, e, r) {
        return st.batch( () => C(this, We).findAll(t).map( ({queryKey: i}) => [i, this.setQueryData(i, e, r)]))
    }
    getQueryState(t) {
        var r;
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return (r = C(this, We).get(e.queryHash)) == null ? void 0 : r.state
    }
    removeQueries(t) {
        const e = C(this, We);
        st.batch( () => {
            e.findAll(t).forEach(r => {
                e.remove(r)
            }
            )
        }
        )
    }
    resetQueries(t, e) {
        const r = C(this, We);
        return st.batch( () => (r.findAll(t).forEach(i => {
            i.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...t
        }, e)))
    }
    cancelQueries(t, e={}) {
        const r = {
            revert: !0,
            ...e
        }
          , i = st.batch( () => C(this, We).findAll(t).map(a => a.cancel(r)));
        return Promise.all(i).then(Ct).catch(Ct)
    }
    invalidateQueries(t, e={}) {
        return st.batch( () => (C(this, We).findAll(t).forEach(r => {
            r.invalidate()
        }
        ),
        (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...t,
            type: (t == null ? void 0 : t.refetchType) ?? (t == null ? void 0 : t.type) ?? "active"
        }, e)))
    }
    refetchQueries(t, e={}) {
        const r = {
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }
          , i = st.batch( () => C(this, We).findAll(t).filter(a => !a.isDisabled() && !a.isStatic()).map(a => {
            let l = a.fetch(void 0, r);
            return r.throwOnError || (l = l.catch(Ct)),
            a.state.fetchStatus === "paused" ? Promise.resolve() : l
        }
        ));
        return Promise.all(i).then(Ct)
    }
    fetchQuery(t) {
        const e = this.defaultQueryOptions(t);
        e.retry === void 0 && (e.retry = !1);
        const r = C(this, We).build(this, e);
        return r.isStaleByTime(_r(e.staleTime, r)) ? r.fetch(e) : Promise.resolve(r.state.data)
    }
    prefetchQuery(t) {
        return this.fetchQuery(t).then(Ct).catch(Ct)
    }
    fetchInfiniteQuery(t) {
        return t.behavior = qg(t.pages),
        this.fetchQuery(t)
    }
    prefetchInfiniteQuery(t) {
        return this.fetchInfiniteQuery(t).then(Ct).catch(Ct)
    }
    ensureInfiniteQueryData(t) {
        return t.behavior = qg(t.pages),
        this.ensureQueryData(t)
    }
    resumePausedMutations() {
        return Dl.isOnline() ? C(this, Er).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return C(this, We)
    }
    getMutationCache() {
        return C(this, Er)
    }
    getDefaultOptions() {
        return C(this, Tr)
    }
    setDefaultOptions(t) {
        G(this, Tr, t)
    }
    setQueryDefaults(t, e) {
        C(this, oi).set(ps(t), {
            queryKey: t,
            defaultOptions: e
        })
    }
    getQueryDefaults(t) {
        const e = [...C(this, oi).values()]
          , r = {};
        return e.forEach(i => {
            Ao(t, i.queryKey) && Object.assign(r, i.defaultOptions)
        }
        ),
        r
    }
    setMutationDefaults(t, e) {
        C(this, ai).set(ps(t), {
            mutationKey: t,
            defaultOptions: e
        })
    }
    getMutationDefaults(t) {
        const e = [...C(this, ai).values()]
          , r = {};
        return e.forEach(i => {
            Ao(t, i.mutationKey) && Object.assign(r, i.defaultOptions)
        }
        ),
        r
    }
    defaultQueryOptions(t) {
        if (t._defaulted)
            return t;
        const e = {
            ...C(this, Tr).queries,
            ...this.getQueryDefaults(t.queryKey),
            ...t,
            _defaulted: !0
        };
        return e.queryHash || (e.queryHash = Rf(e.queryKey, e)),
        e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"),
        e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
        !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
        e.queryFn === Af && (e.enabled = !1),
        e
    }
    defaultMutationOptions(t) {
        return t != null && t._defaulted ? t : {
            ...C(this, Tr).mutations,
            ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
            ...t,
            _defaulted: !0
        }
    }
    clear() {
        C(this, We).clear(),
        C(this, Er).clear()
    }
}
,
We = new WeakMap,
Er = new WeakMap,
Tr = new WeakMap,
oi = new WeakMap,
ai = new WeakMap,
Cr = new WeakMap,
li = new WeakMap,
ui = new WeakMap,
a0), K0 = j.createContext(void 0), Wl = t => {
    const e = j.useContext(K0);
    if (!e)
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return e
}
, NE = ({client: t, children: e}) => (j.useEffect( () => (t.mount(),
() => {
    t.unmount()
}
), [t]),
b.jsx(K0.Provider, {
    value: t,
    children: e
})), Q0 = j.createContext(!1), OE = () => j.useContext(Q0);
Q0.Provider;
function jE() {
    let t = !1;
    return {
        clearReset: () => {
            t = !1
        }
        ,
        reset: () => {
            t = !0
        }
        ,
        isReset: () => t
    }
}
var LE = j.createContext(jE())
  , ME = () => j.useContext(LE)
  , DE = (t, e, r) => {
    const i = r != null && r.state.error && typeof t.throwOnError == "function" ? Nf(t.throwOnError, [r.state.error, r]) : t.throwOnError;
    (t.suspense || t.experimental_prefetchInRender || i) && (e.isReset() || (t.retryOnMount = !1))
}
  , IE = t => {
    j.useEffect( () => {
        t.clearReset()
    }
    , [t])
}
  , FE = ({result: t, errorResetBoundary: e, throwOnError: r, query: i, suspense: a}) => t.isError && !e.isReset() && !t.isFetching && i && (a && t.data === void 0 || Nf(r, [t.error, i]))
  , VE = t => {
    if (t.suspense) {
        const r = a => a === "static" ? a : Math.max(a ?? 1e3, 1e3)
          , i = t.staleTime;
        t.staleTime = typeof i == "function" ? (...a) => r(i(...a)) : r(i),
        typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3))
    }
}
  , UE = (t, e) => t.isLoading && t.isFetching && !e
  , BE = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending
  , Kg = (t, e, r) => e.fetchOptimistic(t).catch( () => {
    r.clearReset()
}
);
function zE(t, e, r) {
    var w, E, x, k;
    const i = OE()
      , a = ME()
      , l = Wl()
      , c = l.defaultQueryOptions(t);
    (E = (w = l.getDefaultOptions().queries) == null ? void 0 : w._experimental_beforeQuery) == null || E.call(w, c);
    const d = l.getQueryCache().get(c.queryHash);
    c._optimisticResults = i ? "isRestoring" : "optimistic",
    VE(c),
    DE(c, a, d),
    IE(a);
    const h = !l.getQueryCache().get(c.queryHash)
      , [m] = j.useState( () => new e(l,c))
      , g = m.getOptimisticResult(c)
      , y = !i && t.subscribed !== !1;
    if (j.useSyncExternalStore(j.useCallback(S => {
        const R = y ? m.subscribe(st.batchCalls(S)) : Ct;
        return m.updateResult(),
        R
    }
    , [m, y]), () => m.getCurrentResult(), () => m.getCurrentResult()),
    j.useEffect( () => {
        m.setOptions(c)
    }
    , [c, m]),
    BE(c, g))
        throw Kg(c, m, a);
    if (FE({
        result: g,
        errorResetBoundary: a,
        throwOnError: c.throwOnError,
        query: d,
        suspense: c.suspense
    }))
        throw g.error;
    if ((k = (x = l.getDefaultOptions().queries) == null ? void 0 : x._experimental_afterQuery) == null || k.call(x, c, g),
    c.experimental_prefetchInRender && !hs && UE(g, i)) {
        const S = h ? Kg(c, m, a) : d == null ? void 0 : d.promise;
        S == null || S.catch(Ct).finally( () => {
            m.updateResult()
        }
        )
    }
    return c.notifyOnChangeProps ? g : m.trackResult(g)
}
function Kl(t, e) {
    return zE(t, bE)
}
function bo(t, e) {
    const r = Wl()
      , [i] = j.useState( () => new _E(r,t));
    j.useEffect( () => {
        i.setOptions(t)
    }
    , [i, t]);
    const a = j.useSyncExternalStore(j.useCallback(c => i.subscribe(st.batchCalls(c)), [i]), () => i.getCurrentResult(), () => i.getCurrentResult())
      , l = j.useCallback( (c, d) => {
        i.mutate(c, d).catch(Ct)
    }
    , [i]);
    if (a.error && Nf(i.options.throwOnError, [a.error]))
        throw a.error;
    return {
        ...a,
        mutate: l,
        mutateAsync: a.mutate
    }
}
const $E = new AE({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: 1
        }
    }
});
u0();
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function No() {
    return No = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }
    ,
    No.apply(this, arguments)
}
var Pr;
(function(t) {
    t.Pop = "POP",
    t.Push = "PUSH",
    t.Replace = "REPLACE"
}
)(Pr || (Pr = {}));
const Qg = "popstate";
function HE(t) {
    t === void 0 && (t = {});
    function e(i, a) {
        let {pathname: l, search: c, hash: d} = i.location;
        return Gd("", {
            pathname: l,
            search: c,
            hash: d
        }, a.state && a.state.usr || null, a.state && a.state.key || "default")
    }
    function r(i, a) {
        return typeof a == "string" ? a : Il(a)
    }
    return WE(e, r, null, t)
}
function et(t, e) {
    if (t === !1 || t === null || typeof t > "u")
        throw new Error(e)
}
function Lf(t, e) {
    if (!t) {
        typeof console < "u" && console.warn(e);
        try {
            throw new Error(e)
        } catch {}
    }
}
function qE() {
    return Math.random().toString(36).substr(2, 8)
}
function Gg(t, e) {
    return {
        usr: t.state,
        key: t.key,
        idx: e
    }
}
function Gd(t, e, r, i) {
    return r === void 0 && (r = null),
    No({
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: ""
    }, typeof e == "string" ? gi(e) : e, {
        state: r,
        key: e && e.key || i || qE()
    })
}
function Il(t) {
    let {pathname: e="/", search: r="", hash: i=""} = t;
    return r && r !== "?" && (e += r.charAt(0) === "?" ? r : "?" + r),
    i && i !== "#" && (e += i.charAt(0) === "#" ? i : "#" + i),
    e
}
function gi(t) {
    let e = {};
    if (t) {
        let r = t.indexOf("#");
        r >= 0 && (e.hash = t.substr(r),
        t = t.substr(0, r));
        let i = t.indexOf("?");
        i >= 0 && (e.search = t.substr(i),
        t = t.substr(0, i)),
        t && (e.pathname = t)
    }
    return e
}
function WE(t, e, r, i) {
    i === void 0 && (i = {});
    let {window: a=document.defaultView, v5Compat: l=!1} = i
      , c = a.history
      , d = Pr.Pop
      , h = null
      , m = g();
    m == null && (m = 0,
    c.replaceState(No({}, c.state, {
        idx: m
    }), ""));
    function g() {
        return (c.state || {
            idx: null
        }).idx
    }
    function y() {
        d = Pr.Pop;
        let S = g()
          , R = S == null ? null : S - m;
        m = S,
        h && h({
            action: d,
            location: k.location,
            delta: R
        })
    }
    function w(S, R) {
        d = Pr.Push;
        let U = Gd(k.location, S, R);
        m = g() + 1;
        let L = Gg(U, m)
          , _ = k.createHref(U);
        try {
            c.pushState(L, "", _)
        } catch (D) {
            if (D instanceof DOMException && D.name === "DataCloneError")
                throw D;
            a.location.assign(_)
        }
        l && h && h({
            action: d,
            location: k.location,
            delta: 1
        })
    }
    function E(S, R) {
        d = Pr.Replace;
        let U = Gd(k.location, S, R);
        m = g();
        let L = Gg(U, m)
          , _ = k.createHref(U);
        c.replaceState(L, "", _),
        l && h && h({
            action: d,
            location: k.location,
            delta: 0
        })
    }
    function x(S) {
        let R = a.location.origin !== "null" ? a.location.origin : a.location.href
          , U = typeof S == "string" ? S : Il(S);
        return U = U.replace(/ $/, "%20"),
        et(R, "No window.location.(origin|href) available to create URL for href: " + U),
        new URL(U,R)
    }
    let k = {
        get action() {
            return d
        },
        get location() {
            return t(a, c)
        },
        listen(S) {
            if (h)
                throw new Error("A history only accepts one active listener");
            return a.addEventListener(Qg, y),
            h = S,
            () => {
                a.removeEventListener(Qg, y),
                h = null
            }
        },
        createHref(S) {
            return e(a, S)
        },
        createURL: x,
        encodeLocation(S) {
            let R = x(S);
            return {
                pathname: R.pathname,
                search: R.search,
                hash: R.hash
            }
        },
        push: w,
        replace: E,
        go(S) {
            return c.go(S)
        }
    };
    return k
}
var Yg;
(function(t) {
    t.data = "data",
    t.deferred = "deferred",
    t.redirect = "redirect",
    t.error = "error"
}
)(Yg || (Yg = {}));
function KE(t, e, r) {
    return r === void 0 && (r = "/"),
    QE(t, e, r)
}
function QE(t, e, r, i) {
    let a = typeof e == "string" ? gi(e) : e
      , l = Mf(a.pathname || "/", r);
    if (l == null)
        return null;
    let c = G0(t);
    GE(c);
    let d = null;
    for (let h = 0; d == null && h < c.length; ++h) {
        let m = aT(l);
        d = sT(c[h], m)
    }
    return d
}
function G0(t, e, r, i) {
    e === void 0 && (e = []),
    r === void 0 && (r = []),
    i === void 0 && (i = "");
    let a = (l, c, d) => {
        let h = {
            relativePath: d === void 0 ? l.path || "" : d,
            caseSensitive: l.caseSensitive === !0,
            childrenIndex: c,
            route: l
        };
        h.relativePath.startsWith("/") && (et(h.relativePath.startsWith(i), 'Absolute route path "' + h.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        h.relativePath = h.relativePath.slice(i.length));
        let m = Rr([i, h.relativePath])
          , g = r.concat(h);
        l.children && l.children.length > 0 && (et(l.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + m + '".')),
        G0(l.children, e, g, m)),
        !(l.path == null && !l.index) && e.push({
            path: m,
            score: nT(m, l.index),
            routesMeta: g
        })
    }
    ;
    return t.forEach( (l, c) => {
        var d;
        if (l.path === "" || !((d = l.path) != null && d.includes("?")))
            a(l, c);
        else
            for (let h of Y0(l.path))
                a(l, c, h)
    }
    ),
    e
}
function Y0(t) {
    let e = t.split("/");
    if (e.length === 0)
        return [];
    let[r,...i] = e
      , a = r.endsWith("?")
      , l = r.replace(/\?$/, "");
    if (i.length === 0)
        return a ? [l, ""] : [l];
    let c = Y0(i.join("/"))
      , d = [];
    return d.push(...c.map(h => h === "" ? l : [l, h].join("/"))),
    a && d.push(...c),
    d.map(h => t.startsWith("/") && h === "" ? "/" : h)
}
function GE(t) {
    t.sort( (e, r) => e.score !== r.score ? r.score - e.score : rT(e.routesMeta.map(i => i.childrenIndex), r.routesMeta.map(i => i.childrenIndex)))
}
const YE = /^:[\w-]+$/
  , XE = 3
  , JE = 2
  , ZE = 1
  , eT = 10
  , tT = -2
  , Xg = t => t === "*";
function nT(t, e) {
    let r = t.split("/")
      , i = r.length;
    return r.some(Xg) && (i += tT),
    e && (i += JE),
    r.filter(a => !Xg(a)).reduce( (a, l) => a + (YE.test(l) ? XE : l === "" ? ZE : eT), i)
}
function rT(t, e) {
    return t.length === e.length && t.slice(0, -1).every( (i, a) => i === e[a]) ? t[t.length - 1] - e[e.length - 1] : 0
}
function sT(t, e, r) {
    let {routesMeta: i} = t
      , a = {}
      , l = "/"
      , c = [];
    for (let d = 0; d < i.length; ++d) {
        let h = i[d]
          , m = d === i.length - 1
          , g = l === "/" ? e : e.slice(l.length) || "/"
          , y = iT({
            path: h.relativePath,
            caseSensitive: h.caseSensitive,
            end: m
        }, g)
          , w = h.route;
        if (!y)
            return null;
        Object.assign(a, y.params),
        c.push({
            params: a,
            pathname: Rr([l, y.pathname]),
            pathnameBase: fT(Rr([l, y.pathnameBase])),
            route: w
        }),
        y.pathnameBase !== "/" && (l = Rr([l, y.pathnameBase]))
    }
    return c
}
function iT(t, e) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let[r,i] = oT(t.path, t.caseSensitive, t.end)
      , a = e.match(r);
    if (!a)
        return null;
    let l = a[0]
      , c = l.replace(/(.)\/+$/, "$1")
      , d = a.slice(1);
    return {
        params: i.reduce( (m, g, y) => {
            let {paramName: w, isOptional: E} = g;
            if (w === "*") {
                let k = d[y] || "";
                c = l.slice(0, l.length - k.length).replace(/(.)\/+$/, "$1")
            }
            const x = d[y];
            return E && !x ? m[w] = void 0 : m[w] = (x || "").replace(/%2F/g, "/"),
            m
        }
        , {}),
        pathname: l,
        pathnameBase: c,
        pattern: t
    }
}
function oT(t, e, r) {
    e === void 0 && (e = !1),
    r === void 0 && (r = !0),
    Lf(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
    let i = []
      , a = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (c, d, h) => (i.push({
        paramName: d,
        isOptional: h != null
    }),
    h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return t.endsWith("*") ? (i.push({
        paramName: "*"
    }),
    a += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : t !== "" && t !== "/" && (a += "(?:(?=\\/|$))"),
    [new RegExp(a,e ? void 0 : "i"), i]
}
function aT(t) {
    try {
        return t.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
    } catch (e) {
        return Lf(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")),
        t
    }
}
function Mf(t, e) {
    if (e === "/")
        return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase()))
        return null;
    let r = e.endsWith("/") ? e.length - 1 : e.length
      , i = t.charAt(r);
    return i && i !== "/" ? null : t.slice(r) || "/"
}
const lT = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , uT = t => lT.test(t);
function cT(t, e) {
    e === void 0 && (e = "/");
    let {pathname: r, search: i="", hash: a=""} = typeof t == "string" ? gi(t) : t, l;
    if (r)
        if (uT(r))
            l = r;
        else {
            if (r.includes("//")) {
                let c = r;
                r = r.replace(/\/\/+/g, "/"),
                Lf(!1, "Pathnames cannot have embedded double slashes - normalizing " + (c + " -> " + r))
            }
            r.startsWith("/") ? l = Jg(r.substring(1), "/") : l = Jg(r, e)
        }
    else
        l = e;
    return {
        pathname: l,
        search: hT(i),
        hash: pT(a)
    }
}
function Jg(t, e) {
    let r = e.replace(/\/+$/, "").split("/");
    return t.split("/").forEach(a => {
        a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a)
    }
    ),
    r.length > 1 ? r.join("/") : "/"
}
function cd(t, e, r, i) {
    return "Cannot include a '" + t + "' character in a manually specified " + ("`to." + e + "` field [" + JSON.stringify(i) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function dT(t) {
    return t.filter( (e, r) => r === 0 || e.route.path && e.route.path.length > 0)
}
function X0(t, e) {
    let r = dT(t);
    return e ? r.map( (i, a) => a === r.length - 1 ? i.pathname : i.pathnameBase) : r.map(i => i.pathnameBase)
}
function J0(t, e, r, i) {
    i === void 0 && (i = !1);
    let a;
    typeof t == "string" ? a = gi(t) : (a = No({}, t),
    et(!a.pathname || !a.pathname.includes("?"), cd("?", "pathname", "search", a)),
    et(!a.pathname || !a.pathname.includes("#"), cd("#", "pathname", "hash", a)),
    et(!a.search || !a.search.includes("#"), cd("#", "search", "hash", a)));
    let l = t === "" || a.pathname === "", c = l ? "/" : a.pathname, d;
    if (c == null)
        d = r;
    else {
        let y = e.length - 1;
        if (!i && c.startsWith("..")) {
            let w = c.split("/");
            for (; w[0] === ".."; )
                w.shift(),
                y -= 1;
            a.pathname = w.join("/")
        }
        d = y >= 0 ? e[y] : "/"
    }
    let h = cT(a, d)
      , m = c && c !== "/" && c.endsWith("/")
      , g = (l || c === ".") && r.endsWith("/");
    return !h.pathname.endsWith("/") && (m || g) && (h.pathname += "/"),
    h
}
const Rr = t => t.join("/").replace(/\/\/+/g, "/")
  , fT = t => t.replace(/\/+$/, "").replace(/^\/*/, "/")
  , hT = t => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t
  , pT = t => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t;
function mT(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data"in t
}
const Z0 = ["post", "put", "patch", "delete"];
new Set(Z0);
const gT = ["get", ...Z0];
new Set(gT);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Oo() {
    return Oo = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }
    ,
    Oo.apply(this, arguments)
}
const Df = j.createContext(null)
  , yT = j.createContext(null)
  , ys = j.createContext(null)
  , Ql = j.createContext(null)
  , vs = j.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , ew = j.createContext(null);
function vT(t, e) {
    let {relative: r} = e === void 0 ? {} : e;
    qo() || et(!1);
    let {basename: i, navigator: a} = j.useContext(ys)
      , {hash: l, pathname: c, search: d} = nw(t, {
        relative: r
    })
      , h = c;
    return i !== "/" && (h = c === "/" ? i : Rr([i, c])),
    a.createHref({
        pathname: h,
        search: d,
        hash: l
    })
}
function qo() {
    return j.useContext(Ql) != null
}
function Wo() {
    return qo() || et(!1),
    j.useContext(Ql).location
}
function tw(t) {
    j.useContext(ys).static || j.useLayoutEffect(t)
}
function Gl() {
    let {isDataRoute: t} = j.useContext(vs);
    return t ? NT() : wT()
}
function wT() {
    qo() || et(!1);
    let t = j.useContext(Df)
      , {basename: e, future: r, navigator: i} = j.useContext(ys)
      , {matches: a} = j.useContext(vs)
      , {pathname: l} = Wo()
      , c = JSON.stringify(X0(a, r.v7_relativeSplatPath))
      , d = j.useRef(!1);
    return tw( () => {
        d.current = !0
    }
    ),
    j.useCallback(function(m, g) {
        if (g === void 0 && (g = {}),
        !d.current)
            return;
        if (typeof m == "number") {
            i.go(m);
            return
        }
        let y = J0(m, JSON.parse(c), l, g.relative === "path");
        t == null && e !== "/" && (y.pathname = y.pathname === "/" ? e : Rr([e, y.pathname])),
        (g.replace ? i.replace : i.push)(y, g.state, g)
    }, [e, i, c, l, t])
}
function nw(t, e) {
    let {relative: r} = e === void 0 ? {} : e
      , {future: i} = j.useContext(ys)
      , {matches: a} = j.useContext(vs)
      , {pathname: l} = Wo()
      , c = JSON.stringify(X0(a, i.v7_relativeSplatPath));
    return j.useMemo( () => J0(t, JSON.parse(c), l, r === "path"), [t, c, l, r])
}
function xT(t, e) {
    return ST(t, e)
}
function ST(t, e, r, i) {
    qo() || et(!1);
    let {navigator: a} = j.useContext(ys)
      , {matches: l} = j.useContext(vs)
      , c = l[l.length - 1]
      , d = c ? c.params : {};
    c && c.pathname;
    let h = c ? c.pathnameBase : "/";
    c && c.route;
    let m = Wo(), g;
    if (e) {
        var y;
        let S = typeof e == "string" ? gi(e) : e;
        h === "/" || (y = S.pathname) != null && y.startsWith(h) || et(!1),
        g = S
    } else
        g = m;
    let w = g.pathname || "/"
      , E = w;
    if (h !== "/") {
        let S = h.replace(/^\//, "").split("/");
        E = "/" + w.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let x = KE(t, {
        pathname: E
    })
      , k = CT(x && x.map(S => Object.assign({}, S, {
        params: Object.assign({}, d, S.params),
        pathname: Rr([h, a.encodeLocation ? a.encodeLocation(S.pathname).pathname : S.pathname]),
        pathnameBase: S.pathnameBase === "/" ? h : Rr([h, a.encodeLocation ? a.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
    })), l, r, i);
    return e && k ? j.createElement(Ql.Provider, {
        value: {
            location: Oo({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, g),
            navigationType: Pr.Pop
        }
    }, k) : k
}
function bT() {
    let t = AT()
      , e = mT(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t)
      , r = t instanceof Error ? t.stack : null
      , a = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return j.createElement(j.Fragment, null, j.createElement("h2", null, "Unexpected Application Error!"), j.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, e), r ? j.createElement("pre", {
        style: a
    }, r) : null, null)
}
const kT = j.createElement(bT, null);
class ET extends j.Component {
    constructor(e) {
        super(e),
        this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, r) {
        return r.location !== e.location || r.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error !== void 0 ? e.error : r.error,
            location: r.location,
            revalidation: e.revalidation || r.revalidation
        }
    }
    componentDidCatch(e, r) {
        console.error("React Router caught the following error during render", e, r)
    }
    render() {
        return this.state.error !== void 0 ? j.createElement(vs.Provider, {
            value: this.props.routeContext
        }, j.createElement(ew.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function TT(t) {
    let {routeContext: e, match: r, children: i} = t
      , a = j.useContext(Df);
    return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id),
    j.createElement(vs.Provider, {
        value: e
    }, i)
}
function CT(t, e, r, i) {
    var a;
    if (e === void 0 && (e = []),
    r === void 0 && (r = null),
    i === void 0 && (i = null),
    t == null) {
        var l;
        if (!r)
            return null;
        if (r.errors)
            t = r.matches;
        else if ((l = i) != null && l.v7_partialHydration && e.length === 0 && !r.initialized && r.matches.length > 0)
            t = r.matches;
        else
            return null
    }
    let c = t
      , d = (a = r) == null ? void 0 : a.errors;
    if (d != null) {
        let g = c.findIndex(y => y.route.id && (d == null ? void 0 : d[y.route.id]) !== void 0);
        g >= 0 || et(!1),
        c = c.slice(0, Math.min(c.length, g + 1))
    }
    let h = !1
      , m = -1;
    if (r && i && i.v7_partialHydration)
        for (let g = 0; g < c.length; g++) {
            let y = c[g];
            if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (m = g),
            y.route.id) {
                let {loaderData: w, errors: E} = r
                  , x = y.route.loader && w[y.route.id] === void 0 && (!E || E[y.route.id] === void 0);
                if (y.route.lazy || x) {
                    h = !0,
                    m >= 0 ? c = c.slice(0, m + 1) : c = [c[0]];
                    break
                }
            }
        }
    return c.reduceRight( (g, y, w) => {
        let E, x = !1, k = null, S = null;
        r && (E = d && y.route.id ? d[y.route.id] : void 0,
        k = y.route.errorElement || kT,
        h && (m < 0 && w === 0 ? (OT("route-fallback"),
        x = !0,
        S = null) : m === w && (x = !0,
        S = y.route.hydrateFallbackElement || null)));
        let R = e.concat(c.slice(0, w + 1))
          , U = () => {
            let L;
            return E ? L = k : x ? L = S : y.route.Component ? L = j.createElement(y.route.Component, null) : y.route.element ? L = y.route.element : L = g,
            j.createElement(TT, {
                match: y,
                routeContext: {
                    outlet: g,
                    matches: R,
                    isDataRoute: r != null
                },
                children: L
            })
        }
        ;
        return r && (y.route.ErrorBoundary || y.route.errorElement || w === 0) ? j.createElement(ET, {
            location: r.location,
            revalidation: r.revalidation,
            component: k,
            error: E,
            children: U(),
            routeContext: {
                outlet: null,
                matches: R,
                isDataRoute: !0
            }
        }) : U()
    }
    , null)
}
var rw = (function(t) {
    return t.UseBlocker = "useBlocker",
    t.UseRevalidator = "useRevalidator",
    t.UseNavigateStable = "useNavigate",
    t
}
)(rw || {})
  , sw = (function(t) {
    return t.UseBlocker = "useBlocker",
    t.UseLoaderData = "useLoaderData",
    t.UseActionData = "useActionData",
    t.UseRouteError = "useRouteError",
    t.UseNavigation = "useNavigation",
    t.UseRouteLoaderData = "useRouteLoaderData",
    t.UseMatches = "useMatches",
    t.UseRevalidator = "useRevalidator",
    t.UseNavigateStable = "useNavigate",
    t.UseRouteId = "useRouteId",
    t
}
)(sw || {});
function PT(t) {
    let e = j.useContext(Df);
    return e || et(!1),
    e
}
function _T(t) {
    let e = j.useContext(yT);
    return e || et(!1),
    e
}
function RT(t) {
    let e = j.useContext(vs);
    return e || et(!1),
    e
}
function iw(t) {
    let e = RT()
      , r = e.matches[e.matches.length - 1];
    return r.route.id || et(!1),
    r.route.id
}
function AT() {
    var t;
    let e = j.useContext(ew)
      , r = _T()
      , i = iw();
    return e !== void 0 ? e : (t = r.errors) == null ? void 0 : t[i]
}
function NT() {
    let {router: t} = PT(rw.UseNavigateStable)
      , e = iw(sw.UseNavigateStable)
      , r = j.useRef(!1);
    return tw( () => {
        r.current = !0
    }
    ),
    j.useCallback(function(a, l) {
        l === void 0 && (l = {}),
        r.current && (typeof a == "number" ? t.navigate(a) : t.navigate(a, Oo({
            fromRouteId: e
        }, l)))
    }, [t, e])
}
const Zg = {};
function OT(t, e, r) {
    Zg[t] || (Zg[t] = !0)
}
function jT(t, e) {
    t == null || t.v7_startTransition,
    t == null || t.v7_relativeSplatPath
}
function Ws(t) {
    et(!1)
}
function LT(t) {
    let {basename: e="/", children: r=null, location: i, navigationType: a=Pr.Pop, navigator: l, static: c=!1, future: d} = t;
    qo() && et(!1);
    let h = e.replace(/^\/*/, "/")
      , m = j.useMemo( () => ({
        basename: h,
        navigator: l,
        static: c,
        future: Oo({
            v7_relativeSplatPath: !1
        }, d)
    }), [h, d, l, c]);
    typeof i == "string" && (i = gi(i));
    let {pathname: g="/", search: y="", hash: w="", state: E=null, key: x="default"} = i
      , k = j.useMemo( () => {
        let S = Mf(g, h);
        return S == null ? null : {
            location: {
                pathname: S,
                search: y,
                hash: w,
                state: E,
                key: x
            },
            navigationType: a
        }
    }
    , [h, g, y, w, E, x, a]);
    return k == null ? null : j.createElement(ys.Provider, {
        value: m
    }, j.createElement(Ql.Provider, {
        children: r,
        value: k
    }))
}
function MT(t) {
    let {children: e, location: r} = t;
    return xT(Yd(e), r)
}
new Promise( () => {}
);
function Yd(t, e) {
    e === void 0 && (e = []);
    let r = [];
    return j.Children.forEach(t, (i, a) => {
        if (!j.isValidElement(i))
            return;
        let l = [...e, a];
        if (i.type === j.Fragment) {
            r.push.apply(r, Yd(i.props.children, l));
            return
        }
        i.type !== Ws && et(!1),
        !i.props.index || !i.props.children || et(!1);
        let c = {
            id: i.props.id || l.join("-"),
            caseSensitive: i.props.caseSensitive,
            element: i.props.element,
            Component: i.props.Component,
            index: i.props.index,
            path: i.props.path,
            loader: i.props.loader,
            action: i.props.action,
            errorElement: i.props.errorElement,
            ErrorBoundary: i.props.ErrorBoundary,
            hasErrorBoundary: i.props.ErrorBoundary != null || i.props.errorElement != null,
            shouldRevalidate: i.props.shouldRevalidate,
            handle: i.props.handle,
            lazy: i.props.lazy
        };
        i.props.children && (c.children = Yd(i.props.children, l)),
        r.push(c)
    }
    ),
    r
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Xd() {
    return Xd = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }
    ,
    Xd.apply(this, arguments)
}
function DT(t, e) {
    if (t == null)
        return {};
    var r = {}, i = Object.keys(t), a, l;
    for (l = 0; l < i.length; l++)
        a = i[l],
        !(e.indexOf(a) >= 0) && (r[a] = t[a]);
    return r
}
function IT(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
}
function FT(t, e) {
    return t.button === 0 && (!e || e === "_self") && !IT(t)
}
const VT = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , UT = "6";
try {
    window.__reactRouterVersion = UT
} catch {}
const BT = "startTransition"
  , ey = bb[BT];
function zT(t) {
    let {basename: e, children: r, future: i, window: a} = t
      , l = j.useRef();
    l.current == null && (l.current = HE({
        window: a,
        v5Compat: !0
    }));
    let c = l.current
      , [d,h] = j.useState({
        action: c.action,
        location: c.location
    })
      , {v7_startTransition: m} = i || {}
      , g = j.useCallback(y => {
        m && ey ? ey( () => h(y)) : h(y)
    }
    , [h, m]);
    return j.useLayoutEffect( () => c.listen(g), [c, g]),
    j.useEffect( () => jT(i), [i]),
    j.createElement(LT, {
        basename: e,
        children: r,
        location: d.location,
        navigationType: d.action,
        navigator: c,
        future: i
    })
}
const $T = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , HT = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , lo = j.forwardRef(function(e, r) {
    let {onClick: i, relative: a, reloadDocument: l, replace: c, state: d, target: h, to: m, preventScrollReset: g, viewTransition: y} = e, w = DT(e, VT), {basename: E} = j.useContext(ys), x, k = !1;
    if (typeof m == "string" && HT.test(m) && (x = m,
    $T))
        try {
            let L = new URL(window.location.href)
              , _ = m.startsWith("//") ? new URL(L.protocol + m) : new URL(m)
              , D = Mf(_.pathname, E);
            _.origin === L.origin && D != null ? m = D + _.search + _.hash : k = !0
        } catch {}
    let S = vT(m, {
        relative: a
    })
      , R = qT(m, {
        replace: c,
        state: d,
        target: h,
        preventScrollReset: g,
        relative: a,
        viewTransition: y
    });
    function U(L) {
        i && i(L),
        L.defaultPrevented || R(L)
    }
    return j.createElement("a", Xd({}, w, {
        href: x || S,
        onClick: k || l ? i : U,
        ref: r,
        target: h
    }))
});
var ty;
(function(t) {
    t.UseScrollRestoration = "useScrollRestoration",
    t.UseSubmit = "useSubmit",
    t.UseSubmitFetcher = "useSubmitFetcher",
    t.UseFetcher = "useFetcher",
    t.useViewTransitionState = "useViewTransitionState"
}
)(ty || (ty = {}));
var ny;
(function(t) {
    t.UseFetcher = "useFetcher",
    t.UseFetchers = "useFetchers",
    t.UseScrollRestoration = "useScrollRestoration"
}
)(ny || (ny = {}));
function qT(t, e) {
    let {target: r, replace: i, state: a, preventScrollReset: l, relative: c, viewTransition: d} = e === void 0 ? {} : e
      , h = Gl()
      , m = Wo()
      , g = nw(t, {
        relative: c
    });
    return j.useCallback(y => {
        if (FT(y, r)) {
            y.preventDefault();
            let w = i !== void 0 ? i : Il(m) === Il(g);
            h(t, {
                replace: w,
                state: a,
                preventScrollReset: l,
                relative: c,
                viewTransition: d
            })
        }
    }
    , [m, h, g, i, a, r, t, l, c, d])
}
function ow(t, e) {
    return function() {
        return t.apply(e, arguments)
    }
}
const {toString: WT} = Object.prototype
  , {getPrototypeOf: If} = Object
  , {iterator: Yl, toStringTag: aw} = Symbol
  , Xl = (t => e => {
    const r = WT.call(e);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , pn = t => (t = t.toLowerCase(),
e => Xl(e) === t)
  , Jl = t => e => typeof e === t
  , {isArray: yi} = Array
  , di = Jl("undefined");
function Ko(t) {
    return t !== null && !di(t) && t.constructor !== null && !di(t.constructor) && Dt(t.constructor.isBuffer) && t.constructor.isBuffer(t)
}
const lw = pn("ArrayBuffer");
function KT(t) {
    let e;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && lw(t.buffer),
    e
}
const QT = Jl("string")
  , Dt = Jl("function")
  , uw = Jl("number")
  , Qo = t => t !== null && typeof t == "object"
  , GT = t => t === !0 || t === !1
  , El = t => {
    if (Xl(t) !== "object")
        return !1;
    const e = If(t);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(aw in t) && !(Yl in t)
}
  , YT = t => {
    if (!Qo(t) || Ko(t))
        return !1;
    try {
        return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype
    } catch {
        return !1
    }
}
  , XT = pn("Date")
  , JT = pn("File")
  , ZT = pn("Blob")
  , eC = pn("FileList")
  , tC = t => Qo(t) && Dt(t.pipe)
  , nC = t => {
    let e;
    return t && (typeof FormData == "function" && t instanceof FormData || Dt(t.append) && ((e = Xl(t)) === "formdata" || e === "object" && Dt(t.toString) && t.toString() === "[object FormData]"))
}
  , rC = pn("URLSearchParams")
  , [sC,iC,oC,aC] = ["ReadableStream", "Request", "Response", "Headers"].map(pn)
  , lC = t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Go(t, e, {allOwnKeys: r=!1}={}) {
    if (t === null || typeof t > "u")
        return;
    let i, a;
    if (typeof t != "object" && (t = [t]),
    yi(t))
        for (i = 0,
        a = t.length; i < a; i++)
            e.call(null, t[i], i, t);
    else {
        if (Ko(t))
            return;
        const l = r ? Object.getOwnPropertyNames(t) : Object.keys(t)
          , c = l.length;
        let d;
        for (i = 0; i < c; i++)
            d = l[i],
            e.call(null, t[d], d, t)
    }
}
function cw(t, e) {
    if (Ko(t))
        return null;
    e = e.toLowerCase();
    const r = Object.keys(t);
    let i = r.length, a;
    for (; i-- > 0; )
        if (a = r[i],
        e === a.toLowerCase())
            return a;
    return null
}
const es = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , dw = t => !di(t) && t !== es;
function Jd() {
    const {caseless: t, skipUndefined: e} = dw(this) && this || {}
      , r = {}
      , i = (a, l) => {
        if (l === "__proto__" || l === "constructor" || l === "prototype")
            return;
        const c = t && cw(r, l) || l;
        El(r[c]) && El(a) ? r[c] = Jd(r[c], a) : El(a) ? r[c] = Jd({}, a) : yi(a) ? r[c] = a.slice() : (!e || !di(a)) && (r[c] = a)
    }
    ;
    for (let a = 0, l = arguments.length; a < l; a++)
        arguments[a] && Go(arguments[a], i);
    return r
}
const uC = (t, e, r, {allOwnKeys: i}={}) => (Go(e, (a, l) => {
    r && Dt(a) ? Object.defineProperty(t, l, {
        value: ow(a, r),
        writable: !0,
        enumerable: !0,
        configurable: !0
    }) : Object.defineProperty(t, l, {
        value: a,
        writable: !0,
        enumerable: !0,
        configurable: !0
    })
}
, {
    allOwnKeys: i
}),
t)
  , cC = t => (t.charCodeAt(0) === 65279 && (t = t.slice(1)),
t)
  , dC = (t, e, r, i) => {
    t.prototype = Object.create(e.prototype, i),
    Object.defineProperty(t.prototype, "constructor", {
        value: t,
        writable: !0,
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(t, "super", {
        value: e.prototype
    }),
    r && Object.assign(t.prototype, r)
}
  , fC = (t, e, r, i) => {
    let a, l, c;
    const d = {};
    if (e = e || {},
    t == null)
        return e;
    do {
        for (a = Object.getOwnPropertyNames(t),
        l = a.length; l-- > 0; )
            c = a[l],
            (!i || i(c, t, e)) && !d[c] && (e[c] = t[c],
            d[c] = !0);
        t = r !== !1 && If(t)
    } while (t && (!r || r(t, e)) && t !== Object.prototype);
    return e
}
  , hC = (t, e, r) => {
    t = String(t),
    (r === void 0 || r > t.length) && (r = t.length),
    r -= e.length;
    const i = t.indexOf(e, r);
    return i !== -1 && i === r
}
  , pC = t => {
    if (!t)
        return null;
    if (yi(t))
        return t;
    let e = t.length;
    if (!uw(e))
        return null;
    const r = new Array(e);
    for (; e-- > 0; )
        r[e] = t[e];
    return r
}
  , mC = (t => e => t && e instanceof t)(typeof Uint8Array < "u" && If(Uint8Array))
  , gC = (t, e) => {
    const i = (t && t[Yl]).call(t);
    let a;
    for (; (a = i.next()) && !a.done; ) {
        const l = a.value;
        e.call(t, l[0], l[1])
    }
}
  , yC = (t, e) => {
    let r;
    const i = [];
    for (; (r = t.exec(e)) !== null; )
        i.push(r);
    return i
}
  , vC = pn("HTMLFormElement")
  , wC = t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, i, a) {
    return i.toUpperCase() + a
})
  , ry = ( ({hasOwnProperty: t}) => (e, r) => t.call(e, r))(Object.prototype)
  , xC = pn("RegExp")
  , fw = (t, e) => {
    const r = Object.getOwnPropertyDescriptors(t)
      , i = {};
    Go(r, (a, l) => {
        let c;
        (c = e(a, l, t)) !== !1 && (i[l] = c || a)
    }
    ),
    Object.defineProperties(t, i)
}
  , SC = t => {
    fw(t, (e, r) => {
        if (Dt(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
            return !1;
        const i = t[r];
        if (Dt(i)) {
            if (e.enumerable = !1,
            "writable"in e) {
                e.writable = !1;
                return
            }
            e.set || (e.set = () => {
                throw Error("Can not rewrite read-only method '" + r + "'")
            }
            )
        }
    }
    )
}
  , bC = (t, e) => {
    const r = {}
      , i = a => {
        a.forEach(l => {
            r[l] = !0
        }
        )
    }
    ;
    return yi(t) ? i(t) : i(String(t).split(e)),
    r
}
  , kC = () => {}
  , EC = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function TC(t) {
    return !!(t && Dt(t.append) && t[aw] === "FormData" && t[Yl])
}
const CC = t => {
    const e = new Array(10)
      , r = (i, a) => {
        if (Qo(i)) {
            if (e.indexOf(i) >= 0)
                return;
            if (Ko(i))
                return i;
            if (!("toJSON"in i)) {
                e[a] = i;
                const l = yi(i) ? [] : {};
                return Go(i, (c, d) => {
                    const h = r(c, a + 1);
                    !di(h) && (l[d] = h)
                }
                ),
                e[a] = void 0,
                l
            }
        }
        return i
    }
    ;
    return r(t, 0)
}
  , PC = pn("AsyncFunction")
  , _C = t => t && (Qo(t) || Dt(t)) && Dt(t.then) && Dt(t.catch)
  , hw = ( (t, e) => t ? setImmediate : e ? ( (r, i) => (es.addEventListener("message", ({source: a, data: l}) => {
    a === es && l === r && i.length && i.shift()()
}
, !1),
a => {
    i.push(a),
    es.postMessage(r, "*")
}
))(`axios@${Math.random()}`, []) : r => setTimeout(r))(typeof setImmediate == "function", Dt(es.postMessage))
  , RC = typeof queueMicrotask < "u" ? queueMicrotask.bind(es) : typeof process < "u" && process.nextTick || hw
  , AC = t => t != null && Dt(t[Yl])
  , V = {
    isArray: yi,
    isArrayBuffer: lw,
    isBuffer: Ko,
    isFormData: nC,
    isArrayBufferView: KT,
    isString: QT,
    isNumber: uw,
    isBoolean: GT,
    isObject: Qo,
    isPlainObject: El,
    isEmptyObject: YT,
    isReadableStream: sC,
    isRequest: iC,
    isResponse: oC,
    isHeaders: aC,
    isUndefined: di,
    isDate: XT,
    isFile: JT,
    isBlob: ZT,
    isRegExp: xC,
    isFunction: Dt,
    isStream: tC,
    isURLSearchParams: rC,
    isTypedArray: mC,
    isFileList: eC,
    forEach: Go,
    merge: Jd,
    extend: uC,
    trim: lC,
    stripBOM: cC,
    inherits: dC,
    toFlatObject: fC,
    kindOf: Xl,
    kindOfTest: pn,
    endsWith: hC,
    toArray: pC,
    forEachEntry: gC,
    matchAll: yC,
    isHTMLForm: vC,
    hasOwnProperty: ry,
    hasOwnProp: ry,
    reduceDescriptors: fw,
    freezeMethods: SC,
    toObjectSet: bC,
    toCamelCase: wC,
    noop: kC,
    toFiniteNumber: EC,
    findKey: cw,
    global: es,
    isContextDefined: dw,
    isSpecCompliantForm: TC,
    toJSONObject: CC,
    isAsyncFn: PC,
    isThenable: _C,
    setImmediate: hw,
    asap: RC,
    isIterable: AC
};
let pe = class pw extends Error {
    static from(e, r, i, a, l, c) {
        const d = new pw(e.message,r || e.code,i,a,l);
        return d.cause = e,
        d.name = e.name,
        c && Object.assign(d, c),
        d
    }
    constructor(e, r, i, a, l) {
        super(e),
        this.name = "AxiosError",
        this.isAxiosError = !0,
        r && (this.code = r),
        i && (this.config = i),
        a && (this.request = a),
        l && (this.response = l,
        this.status = l.status)
    }
    toJSON() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: V.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
}
;
pe.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
pe.ERR_BAD_OPTION = "ERR_BAD_OPTION";
pe.ECONNABORTED = "ECONNABORTED";
pe.ETIMEDOUT = "ETIMEDOUT";
pe.ERR_NETWORK = "ERR_NETWORK";
pe.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
pe.ERR_DEPRECATED = "ERR_DEPRECATED";
pe.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
pe.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
pe.ERR_CANCELED = "ERR_CANCELED";
pe.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
pe.ERR_INVALID_URL = "ERR_INVALID_URL";
const NC = null;
function Zd(t) {
    return V.isPlainObject(t) || V.isArray(t)
}
function mw(t) {
    return V.endsWith(t, "[]") ? t.slice(0, -2) : t
}
function sy(t, e, r) {
    return t ? t.concat(e).map(function(a, l) {
        return a = mw(a),
        !r && l ? "[" + a + "]" : a
    }).join(r ? "." : "") : e
}
function OC(t) {
    return V.isArray(t) && !t.some(Zd)
}
const jC = V.toFlatObject(V, {}, null, function(e) {
    return /^is[A-Z]/.test(e)
});
function Zl(t, e, r) {
    if (!V.isObject(t))
        throw new TypeError("target must be an object");
    e = e || new FormData,
    r = V.toFlatObject(r, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(k, S) {
        return !V.isUndefined(S[k])
    });
    const i = r.metaTokens
      , a = r.visitor || g
      , l = r.dots
      , c = r.indexes
      , h = (r.Blob || typeof Blob < "u" && Blob) && V.isSpecCompliantForm(e);
    if (!V.isFunction(a))
        throw new TypeError("visitor must be a function");
    function m(x) {
        if (x === null)
            return "";
        if (V.isDate(x))
            return x.toISOString();
        if (V.isBoolean(x))
            return x.toString();
        if (!h && V.isBlob(x))
            throw new pe("Blob is not supported. Use a Buffer instead.");
        return V.isArrayBuffer(x) || V.isTypedArray(x) ? h && typeof Blob == "function" ? new Blob([x]) : Buffer.from(x) : x
    }
    function g(x, k, S) {
        let R = x;
        if (x && !S && typeof x == "object") {
            if (V.endsWith(k, "{}"))
                k = i ? k : k.slice(0, -2),
                x = JSON.stringify(x);
            else if (V.isArray(x) && OC(x) || (V.isFileList(x) || V.endsWith(k, "[]")) && (R = V.toArray(x)))
                return k = mw(k),
                R.forEach(function(L, _) {
                    !(V.isUndefined(L) || L === null) && e.append(c === !0 ? sy([k], _, l) : c === null ? k : k + "[]", m(L))
                }),
                !1
        }
        return Zd(x) ? !0 : (e.append(sy(S, k, l), m(x)),
        !1)
    }
    const y = []
      , w = Object.assign(jC, {
        defaultVisitor: g,
        convertValue: m,
        isVisitable: Zd
    });
    function E(x, k) {
        if (!V.isUndefined(x)) {
            if (y.indexOf(x) !== -1)
                throw Error("Circular reference detected in " + k.join("."));
            y.push(x),
            V.forEach(x, function(R, U) {
                (!(V.isUndefined(R) || R === null) && a.call(e, R, V.isString(U) ? U.trim() : U, k, w)) === !0 && E(R, k ? k.concat(U) : [U])
            }),
            y.pop()
        }
    }
    if (!V.isObject(t))
        throw new TypeError("data must be an object");
    return E(t),
    e
}
function iy(t) {
    const e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(i) {
        return e[i]
    })
}
function Ff(t, e) {
    this._pairs = [],
    t && Zl(t, this, e)
}
const gw = Ff.prototype;
gw.append = function(e, r) {
    this._pairs.push([e, r])
}
;
gw.toString = function(e) {
    const r = e ? function(i) {
        return e.call(this, i, iy)
    }
    : iy;
    return this._pairs.map(function(a) {
        return r(a[0]) + "=" + r(a[1])
    }, "").join("&")
}
;
function LC(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
}
function yw(t, e, r) {
    if (!e)
        return t;
    const i = r && r.encode || LC
      , a = V.isFunction(r) ? {
        serialize: r
    } : r
      , l = a && a.serialize;
    let c;
    if (l ? c = l(e, a) : c = V.isURLSearchParams(e) ? e.toString() : new Ff(e,a).toString(i),
    c) {
        const d = t.indexOf("#");
        d !== -1 && (t = t.slice(0, d)),
        t += (t.indexOf("?") === -1 ? "?" : "&") + c
    }
    return t
}
class oy {
    constructor() {
        this.handlers = []
    }
    use(e, r, i) {
        return this.handlers.push({
            fulfilled: e,
            rejected: r,
            synchronous: i ? i.synchronous : !1,
            runWhen: i ? i.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(e) {
        V.forEach(this.handlers, function(i) {
            i !== null && e(i)
        })
    }
}
const Vf = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0
}
  , MC = typeof URLSearchParams < "u" ? URLSearchParams : Ff
  , DC = typeof FormData < "u" ? FormData : null
  , IC = typeof Blob < "u" ? Blob : null
  , FC = {
    isBrowser: !0,
    classes: {
        URLSearchParams: MC,
        FormData: DC,
        Blob: IC
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , Uf = typeof window < "u" && typeof document < "u"
  , ef = typeof navigator == "object" && navigator || void 0
  , VC = Uf && (!ef || ["ReactNative", "NativeScript", "NS"].indexOf(ef.product) < 0)
  , UC = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , BC = Uf && window.location.href || "http://localhost"
  , zC = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: Uf,
    hasStandardBrowserEnv: VC,
    hasStandardBrowserWebWorkerEnv: UC,
    navigator: ef,
    origin: BC
}, Symbol.toStringTag, {
    value: "Module"
}))
  , St = {
    ...zC,
    ...FC
};
function $C(t, e) {
    return Zl(t, new St.classes.URLSearchParams, {
        visitor: function(r, i, a, l) {
            return St.isNode && V.isBuffer(r) ? (this.append(i, r.toString("base64")),
            !1) : l.defaultVisitor.apply(this, arguments)
        },
        ...e
    })
}
function HC(t) {
    return V.matchAll(/\w+|\[(\w*)]/g, t).map(e => e[0] === "[]" ? "" : e[1] || e[0])
}
function qC(t) {
    const e = {}
      , r = Object.keys(t);
    let i;
    const a = r.length;
    let l;
    for (i = 0; i < a; i++)
        l = r[i],
        e[l] = t[l];
    return e
}
function vw(t) {
    function e(r, i, a, l) {
        let c = r[l++];
        if (c === "__proto__")
            return !0;
        const d = Number.isFinite(+c)
          , h = l >= r.length;
        return c = !c && V.isArray(a) ? a.length : c,
        h ? (V.hasOwnProp(a, c) ? a[c] = [a[c], i] : a[c] = i,
        !d) : ((!a[c] || !V.isObject(a[c])) && (a[c] = []),
        e(r, i, a[c], l) && V.isArray(a[c]) && (a[c] = qC(a[c])),
        !d)
    }
    if (V.isFormData(t) && V.isFunction(t.entries)) {
        const r = {};
        return V.forEachEntry(t, (i, a) => {
            e(HC(i), a, r, 0)
        }
        ),
        r
    }
    return null
}
function WC(t, e, r) {
    if (V.isString(t))
        try {
            return (e || JSON.parse)(t),
            V.trim(t)
        } catch (i) {
            if (i.name !== "SyntaxError")
                throw i
        }
    return (r || JSON.stringify)(t)
}
const Yo = {
    transitional: Vf,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(e, r) {
        const i = r.getContentType() || ""
          , a = i.indexOf("application/json") > -1
          , l = V.isObject(e);
        if (l && V.isHTMLForm(e) && (e = new FormData(e)),
        V.isFormData(e))
            return a ? JSON.stringify(vw(e)) : e;
        if (V.isArrayBuffer(e) || V.isBuffer(e) || V.isStream(e) || V.isFile(e) || V.isBlob(e) || V.isReadableStream(e))
            return e;
        if (V.isArrayBufferView(e))
            return e.buffer;
        if (V.isURLSearchParams(e))
            return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            e.toString();
        let d;
        if (l) {
            if (i.indexOf("application/x-www-form-urlencoded") > -1)
                return $C(e, this.formSerializer).toString();
            if ((d = V.isFileList(e)) || i.indexOf("multipart/form-data") > -1) {
                const h = this.env && this.env.FormData;
                return Zl(d ? {
                    "files[]": e
                } : e, h && new h, this.formSerializer)
            }
        }
        return l || a ? (r.setContentType("application/json", !1),
        WC(e)) : e
    }
    ],
    transformResponse: [function(e) {
        const r = this.transitional || Yo.transitional
          , i = r && r.forcedJSONParsing
          , a = this.responseType === "json";
        if (V.isResponse(e) || V.isReadableStream(e))
            return e;
        if (e && V.isString(e) && (i && !this.responseType || a)) {
            const c = !(r && r.silentJSONParsing) && a;
            try {
                return JSON.parse(e, this.parseReviver)
            } catch (d) {
                if (c)
                    throw d.name === "SyntaxError" ? pe.from(d, pe.ERR_BAD_RESPONSE, this, null, this.response) : d
            }
        }
        return e
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: St.classes.FormData,
        Blob: St.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
V.forEach(["delete", "get", "head", "post", "put", "patch"], t => {
    Yo.headers[t] = {}
}
);
const KC = V.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , QC = t => {
    const e = {};
    let r, i, a;
    return t && t.split(`
`).forEach(function(c) {
        a = c.indexOf(":"),
        r = c.substring(0, a).trim().toLowerCase(),
        i = c.substring(a + 1).trim(),
        !(!r || e[r] && KC[r]) && (r === "set-cookie" ? e[r] ? e[r].push(i) : e[r] = [i] : e[r] = e[r] ? e[r] + ", " + i : i)
    }),
    e
}
  , ay = Symbol("internals");
function uo(t) {
    return t && String(t).trim().toLowerCase()
}
function Tl(t) {
    return t === !1 || t == null ? t : V.isArray(t) ? t.map(Tl) : String(t)
}
function GC(t) {
    const e = Object.create(null)
      , r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let i;
    for (; i = r.exec(t); )
        e[i[1]] = i[2];
    return e
}
const YC = t => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function dd(t, e, r, i, a) {
    if (V.isFunction(i))
        return i.call(this, e, r);
    if (a && (e = r),
    !!V.isString(e)) {
        if (V.isString(i))
            return e.indexOf(i) !== -1;
        if (V.isRegExp(i))
            return i.test(e)
    }
}
function XC(t) {
    return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, i) => r.toUpperCase() + i)
}
function JC(t, e) {
    const r = V.toCamelCase(" " + e);
    ["get", "set", "has"].forEach(i => {
        Object.defineProperty(t, i + r, {
            value: function(a, l, c) {
                return this[i].call(this, e, a, l, c)
            },
            configurable: !0
        })
    }
    )
}
let It = class {
    constructor(e) {
        e && this.set(e)
    }
    set(e, r, i) {
        const a = this;
        function l(d, h, m) {
            const g = uo(h);
            if (!g)
                throw new Error("header name must be a non-empty string");
            const y = V.findKey(a, g);
            (!y || a[y] === void 0 || m === !0 || m === void 0 && a[y] !== !1) && (a[y || h] = Tl(d))
        }
        const c = (d, h) => V.forEach(d, (m, g) => l(m, g, h));
        if (V.isPlainObject(e) || e instanceof this.constructor)
            c(e, r);
        else if (V.isString(e) && (e = e.trim()) && !YC(e))
            c(QC(e), r);
        else if (V.isObject(e) && V.isIterable(e)) {
            let d = {}, h, m;
            for (const g of e) {
                if (!V.isArray(g))
                    throw TypeError("Object iterator must return a key-value pair");
                d[m = g[0]] = (h = d[m]) ? V.isArray(h) ? [...h, g[1]] : [h, g[1]] : g[1]
            }
            c(d, r)
        } else
            e != null && l(r, e, i);
        return this
    }
    get(e, r) {
        if (e = uo(e),
        e) {
            const i = V.findKey(this, e);
            if (i) {
                const a = this[i];
                if (!r)
                    return a;
                if (r === !0)
                    return GC(a);
                if (V.isFunction(r))
                    return r.call(this, a, i);
                if (V.isRegExp(r))
                    return r.exec(a);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(e, r) {
        if (e = uo(e),
        e) {
            const i = V.findKey(this, e);
            return !!(i && this[i] !== void 0 && (!r || dd(this, this[i], i, r)))
        }
        return !1
    }
    delete(e, r) {
        const i = this;
        let a = !1;
        function l(c) {
            if (c = uo(c),
            c) {
                const d = V.findKey(i, c);
                d && (!r || dd(i, i[d], d, r)) && (delete i[d],
                a = !0)
            }
        }
        return V.isArray(e) ? e.forEach(l) : l(e),
        a
    }
    clear(e) {
        const r = Object.keys(this);
        let i = r.length
          , a = !1;
        for (; i--; ) {
            const l = r[i];
            (!e || dd(this, this[l], l, e, !0)) && (delete this[l],
            a = !0)
        }
        return a
    }
    normalize(e) {
        const r = this
          , i = {};
        return V.forEach(this, (a, l) => {
            const c = V.findKey(i, l);
            if (c) {
                r[c] = Tl(a),
                delete r[l];
                return
            }
            const d = e ? XC(l) : String(l).trim();
            d !== l && delete r[l],
            r[d] = Tl(a),
            i[d] = !0
        }
        ),
        this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        const r = Object.create(null);
        return V.forEach(this, (i, a) => {
            i != null && i !== !1 && (r[a] = e && V.isArray(i) ? i.join(", ") : i)
        }
        ),
        r
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([e,r]) => e + ": " + r).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static concat(e, ...r) {
        const i = new this(e);
        return r.forEach(a => i.set(a)),
        i
    }
    static accessor(e) {
        const i = (this[ay] = this[ay] = {
            accessors: {}
        }).accessors
          , a = this.prototype;
        function l(c) {
            const d = uo(c);
            i[d] || (JC(a, c),
            i[d] = !0)
        }
        return V.isArray(e) ? e.forEach(l) : l(e),
        this
    }
}
;
It.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
V.reduceDescriptors(It.prototype, ({value: t}, e) => {
    let r = e[0].toUpperCase() + e.slice(1);
    return {
        get: () => t,
        set(i) {
            this[r] = i
        }
    }
}
);
V.freezeMethods(It);
function fd(t, e) {
    const r = this || Yo
      , i = e || r
      , a = It.from(i.headers);
    let l = i.data;
    return V.forEach(t, function(d) {
        l = d.call(r, l, a.normalize(), e ? e.status : void 0)
    }),
    a.normalize(),
    l
}
function ww(t) {
    return !!(t && t.__CANCEL__)
}
let Xo = class extends pe {
    constructor(e, r, i) {
        super(e ?? "canceled", pe.ERR_CANCELED, r, i),
        this.name = "CanceledError",
        this.__CANCEL__ = !0
    }
}
;
function xw(t, e, r) {
    const i = r.config.validateStatus;
    !r.status || !i || i(r.status) ? t(r) : e(new pe("Request failed with status code " + r.status,[pe.ERR_BAD_REQUEST, pe.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],r.config,r.request,r))
}
function ZC(t) {
    const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return e && e[1] || ""
}
function eP(t, e) {
    t = t || 10;
    const r = new Array(t)
      , i = new Array(t);
    let a = 0, l = 0, c;
    return e = e !== void 0 ? e : 1e3,
    function(h) {
        const m = Date.now()
          , g = i[l];
        c || (c = m),
        r[a] = h,
        i[a] = m;
        let y = l
          , w = 0;
        for (; y !== a; )
            w += r[y++],
            y = y % t;
        if (a = (a + 1) % t,
        a === l && (l = (l + 1) % t),
        m - c < e)
            return;
        const E = g && m - g;
        return E ? Math.round(w * 1e3 / E) : void 0
    }
}
function tP(t, e) {
    let r = 0, i = 1e3 / e, a, l;
    const c = (m, g=Date.now()) => {
        r = g,
        a = null,
        l && (clearTimeout(l),
        l = null),
        t(...m)
    }
    ;
    return [ (...m) => {
        const g = Date.now()
          , y = g - r;
        y >= i ? c(m, g) : (a = m,
        l || (l = setTimeout( () => {
            l = null,
            c(a)
        }
        , i - y)))
    }
    , () => a && c(a)]
}
const Fl = (t, e, r=3) => {
    let i = 0;
    const a = eP(50, 250);
    return tP(l => {
        const c = l.loaded
          , d = l.lengthComputable ? l.total : void 0
          , h = c - i
          , m = a(h)
          , g = c <= d;
        i = c;
        const y = {
            loaded: c,
            total: d,
            progress: d ? c / d : void 0,
            bytes: h,
            rate: m || void 0,
            estimated: m && d && g ? (d - c) / m : void 0,
            event: l,
            lengthComputable: d != null,
            [e ? "download" : "upload"]: !0
        };
        t(y)
    }
    , r)
}
  , ly = (t, e) => {
    const r = t != null;
    return [i => e[0]({
        lengthComputable: r,
        total: t,
        loaded: i
    }), e[1]]
}
  , uy = t => (...e) => V.asap( () => t(...e))
  , nP = St.hasStandardBrowserEnv ? ( (t, e) => r => (r = new URL(r,St.origin),
t.protocol === r.protocol && t.host === r.host && (e || t.port === r.port)))(new URL(St.origin), St.navigator && /(msie|trident)/i.test(St.navigator.userAgent)) : () => !0
  , rP = St.hasStandardBrowserEnv ? {
    write(t, e, r, i, a, l, c) {
        if (typeof document > "u")
            return;
        const d = [`${t}=${encodeURIComponent(e)}`];
        V.isNumber(r) && d.push(`expires=${new Date(r).toUTCString()}`),
        V.isString(i) && d.push(`path=${i}`),
        V.isString(a) && d.push(`domain=${a}`),
        l === !0 && d.push("secure"),
        V.isString(c) && d.push(`SameSite=${c}`),
        document.cookie = d.join("; ")
    },
    read(t) {
        if (typeof document > "u")
            return null;
        const e = document.cookie.match(new RegExp("(?:^|; )" + t + "=([^;]*)"));
        return e ? decodeURIComponent(e[1]) : null
    },
    remove(t) {
        this.write(t, "", Date.now() - 864e5, "/")
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function sP(t) {
    return typeof t != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
}
function iP(t, e) {
    return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t
}
function Sw(t, e, r) {
    let i = !sP(e);
    return t && (i || r == !1) ? iP(t, e) : e
}
const cy = t => t instanceof It ? {
    ...t
} : t;
function ms(t, e) {
    e = e || {};
    const r = {};
    function i(m, g, y, w) {
        return V.isPlainObject(m) && V.isPlainObject(g) ? V.merge.call({
            caseless: w
        }, m, g) : V.isPlainObject(g) ? V.merge({}, g) : V.isArray(g) ? g.slice() : g
    }
    function a(m, g, y, w) {
        if (V.isUndefined(g)) {
            if (!V.isUndefined(m))
                return i(void 0, m, y, w)
        } else
            return i(m, g, y, w)
    }
    function l(m, g) {
        if (!V.isUndefined(g))
            return i(void 0, g)
    }
    function c(m, g) {
        if (V.isUndefined(g)) {
            if (!V.isUndefined(m))
                return i(void 0, m)
        } else
            return i(void 0, g)
    }
    function d(m, g, y) {
        if (y in e)
            return i(m, g);
        if (y in t)
            return i(void 0, m)
    }
    const h = {
        url: l,
        method: l,
        data: l,
        baseURL: c,
        transformRequest: c,
        transformResponse: c,
        paramsSerializer: c,
        timeout: c,
        timeoutMessage: c,
        withCredentials: c,
        withXSRFToken: c,
        adapter: c,
        responseType: c,
        xsrfCookieName: c,
        xsrfHeaderName: c,
        onUploadProgress: c,
        onDownloadProgress: c,
        decompress: c,
        maxContentLength: c,
        maxBodyLength: c,
        beforeRedirect: c,
        transport: c,
        httpAgent: c,
        httpsAgent: c,
        cancelToken: c,
        socketPath: c,
        responseEncoding: c,
        validateStatus: d,
        headers: (m, g, y) => a(cy(m), cy(g), y, !0)
    };
    return V.forEach(Object.keys({
        ...t,
        ...e
    }), function(g) {
        if (g === "__proto__" || g === "constructor" || g === "prototype")
            return;
        const y = V.hasOwnProp(h, g) ? h[g] : a
          , w = y(t[g], e[g], g);
        V.isUndefined(w) && y !== d || (r[g] = w)
    }),
    r
}
const bw = t => {
    const e = ms({}, t);
    let {data: r, withXSRFToken: i, xsrfHeaderName: a, xsrfCookieName: l, headers: c, auth: d} = e;
    if (e.headers = c = It.from(c),
    e.url = yw(Sw(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer),
    d && c.set("Authorization", "Basic " + btoa((d.username || "") + ":" + (d.password ? unescape(encodeURIComponent(d.password)) : ""))),
    V.isFormData(r)) {
        if (St.hasStandardBrowserEnv || St.hasStandardBrowserWebWorkerEnv)
            c.setContentType(void 0);
        else if (V.isFunction(r.getHeaders)) {
            const h = r.getHeaders()
              , m = ["content-type", "content-length"];
            Object.entries(h).forEach( ([g,y]) => {
                m.includes(g.toLowerCase()) && c.set(g, y)
            }
            )
        }
    }
    if (St.hasStandardBrowserEnv && (i && V.isFunction(i) && (i = i(e)),
    i || i !== !1 && nP(e.url))) {
        const h = a && l && rP.read(l);
        h && c.set(a, h)
    }
    return e
}
  , oP = typeof XMLHttpRequest < "u"
  , aP = oP && function(t) {
    return new Promise(function(r, i) {
        const a = bw(t);
        let l = a.data;
        const c = It.from(a.headers).normalize();
        let {responseType: d, onUploadProgress: h, onDownloadProgress: m} = a, g, y, w, E, x;
        function k() {
            E && E(),
            x && x(),
            a.cancelToken && a.cancelToken.unsubscribe(g),
            a.signal && a.signal.removeEventListener("abort", g)
        }
        let S = new XMLHttpRequest;
        S.open(a.method.toUpperCase(), a.url, !0),
        S.timeout = a.timeout;
        function R() {
            if (!S)
                return;
            const L = It.from("getAllResponseHeaders"in S && S.getAllResponseHeaders())
              , D = {
                data: !d || d === "text" || d === "json" ? S.responseText : S.response,
                status: S.status,
                statusText: S.statusText,
                headers: L,
                config: t,
                request: S
            };
            xw(function(Y) {
                r(Y),
                k()
            }, function(Y) {
                i(Y),
                k()
            }, D),
            S = null
        }
        "onloadend"in S ? S.onloadend = R : S.onreadystatechange = function() {
            !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(R)
        }
        ,
        S.onabort = function() {
            S && (i(new pe("Request aborted",pe.ECONNABORTED,t,S)),
            S = null)
        }
        ,
        S.onerror = function(_) {
            const D = _ && _.message ? _.message : "Network Error"
              , K = new pe(D,pe.ERR_NETWORK,t,S);
            K.event = _ || null,
            i(K),
            S = null
        }
        ,
        S.ontimeout = function() {
            let _ = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
            const D = a.transitional || Vf;
            a.timeoutErrorMessage && (_ = a.timeoutErrorMessage),
            i(new pe(_,D.clarifyTimeoutError ? pe.ETIMEDOUT : pe.ECONNABORTED,t,S)),
            S = null
        }
        ,
        l === void 0 && c.setContentType(null),
        "setRequestHeader"in S && V.forEach(c.toJSON(), function(_, D) {
            S.setRequestHeader(D, _)
        }),
        V.isUndefined(a.withCredentials) || (S.withCredentials = !!a.withCredentials),
        d && d !== "json" && (S.responseType = a.responseType),
        m && ([w,x] = Fl(m, !0),
        S.addEventListener("progress", w)),
        h && S.upload && ([y,E] = Fl(h),
        S.upload.addEventListener("progress", y),
        S.upload.addEventListener("loadend", E)),
        (a.cancelToken || a.signal) && (g = L => {
            S && (i(!L || L.type ? new Xo(null,t,S) : L),
            S.abort(),
            S = null)
        }
        ,
        a.cancelToken && a.cancelToken.subscribe(g),
        a.signal && (a.signal.aborted ? g() : a.signal.addEventListener("abort", g)));
        const U = ZC(a.url);
        if (U && St.protocols.indexOf(U) === -1) {
            i(new pe("Unsupported protocol " + U + ":",pe.ERR_BAD_REQUEST,t));
            return
        }
        S.send(l || null)
    }
    )
}
  , lP = (t, e) => {
    const {length: r} = t = t ? t.filter(Boolean) : [];
    if (e || r) {
        let i = new AbortController, a;
        const l = function(m) {
            if (!a) {
                a = !0,
                d();
                const g = m instanceof Error ? m : this.reason;
                i.abort(g instanceof pe ? g : new Xo(g instanceof Error ? g.message : g))
            }
        };
        let c = e && setTimeout( () => {
            c = null,
            l(new pe(`timeout of ${e}ms exceeded`,pe.ETIMEDOUT))
        }
        , e);
        const d = () => {
            t && (c && clearTimeout(c),
            c = null,
            t.forEach(m => {
                m.unsubscribe ? m.unsubscribe(l) : m.removeEventListener("abort", l)
            }
            ),
            t = null)
        }
        ;
        t.forEach(m => m.addEventListener("abort", l));
        const {signal: h} = i;
        return h.unsubscribe = () => V.asap(d),
        h
    }
}
  , uP = function*(t, e) {
    let r = t.byteLength;
    if (r < e) {
        yield t;
        return
    }
    let i = 0, a;
    for (; i < r; )
        a = i + e,
        yield t.slice(i, a),
        i = a
}
  , cP = async function*(t, e) {
    for await(const r of dP(t))
        yield*uP(r, e)
}
  , dP = async function*(t) {
    if (t[Symbol.asyncIterator]) {
        yield*t;
        return
    }
    const e = t.getReader();
    try {
        for (; ; ) {
            const {done: r, value: i} = await e.read();
            if (r)
                break;
            yield i
        }
    } finally {
        await e.cancel()
    }
}
  , dy = (t, e, r, i) => {
    const a = cP(t, e);
    let l = 0, c, d = h => {
        c || (c = !0,
        i && i(h))
    }
    ;
    return new ReadableStream({
        async pull(h) {
            try {
                const {done: m, value: g} = await a.next();
                if (m) {
                    d(),
                    h.close();
                    return
                }
                let y = g.byteLength;
                if (r) {
                    let w = l += y;
                    r(w)
                }
                h.enqueue(new Uint8Array(g))
            } catch (m) {
                throw d(m),
                m
            }
        },
        cancel(h) {
            return d(h),
            a.return()
        }
    },{
        highWaterMark: 2
    })
}
  , fy = 64 * 1024
  , {isFunction: ml} = V
  , fP = ( ({Request: t, Response: e}) => ({
    Request: t,
    Response: e
}))(V.global)
  , {ReadableStream: hy, TextEncoder: py} = V.global
  , my = (t, ...e) => {
    try {
        return !!t(...e)
    } catch {
        return !1
    }
}
  , hP = t => {
    t = V.merge.call({
        skipUndefined: !0
    }, fP, t);
    const {fetch: e, Request: r, Response: i} = t
      , a = e ? ml(e) : typeof fetch == "function"
      , l = ml(r)
      , c = ml(i);
    if (!a)
        return !1;
    const d = a && ml(hy)
      , h = a && (typeof py == "function" ? (x => k => x.encode(k))(new py) : async x => new Uint8Array(await new r(x).arrayBuffer()))
      , m = l && d && my( () => {
        let x = !1;
        const k = new r(St.origin,{
            body: new hy,
            method: "POST",
            get duplex() {
                return x = !0,
                "half"
            }
        }).headers.has("Content-Type");
        return x && !k
    }
    )
      , g = c && d && my( () => V.isReadableStream(new i("").body))
      , y = {
        stream: g && (x => x.body)
    };
    a && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(x => {
        !y[x] && (y[x] = (k, S) => {
            let R = k && k[x];
            if (R)
                return R.call(k);
            throw new pe(`Response type '${x}' is not supported`,pe.ERR_NOT_SUPPORT,S)
        }
        )
    }
    );
    const w = async x => {
        if (x == null)
            return 0;
        if (V.isBlob(x))
            return x.size;
        if (V.isSpecCompliantForm(x))
            return (await new r(St.origin,{
                method: "POST",
                body: x
            }).arrayBuffer()).byteLength;
        if (V.isArrayBufferView(x) || V.isArrayBuffer(x))
            return x.byteLength;
        if (V.isURLSearchParams(x) && (x = x + ""),
        V.isString(x))
            return (await h(x)).byteLength
    }
      , E = async (x, k) => {
        const S = V.toFiniteNumber(x.getContentLength());
        return S ?? w(k)
    }
    ;
    return async x => {
        let {url: k, method: S, data: R, signal: U, cancelToken: L, timeout: _, onDownloadProgress: D, onUploadProgress: K, responseType: Y, headers: I, withCredentials: J="same-origin", fetchOptions: me} = bw(x)
          , de = e || fetch;
        Y = Y ? (Y + "").toLowerCase() : "text";
        let Ce = lP([U, L && L.toAbortSignal()], _)
          , Le = null;
        const Ae = Ce && Ce.unsubscribe && ( () => {
            Ce.unsubscribe()
        }
        );
        let De;
        try {
            if (K && m && S !== "get" && S !== "head" && (De = await E(I, R)) !== 0) {
                let N = new r(k,{
                    method: "POST",
                    body: R,
                    duplex: "half"
                }), z;
                if (V.isFormData(R) && (z = N.headers.get("content-type")) && I.setContentType(z),
                N.body) {
                    const [ye,ve] = ly(De, Fl(uy(K)));
                    R = dy(N.body, fy, ye, ve)
                }
            }
            V.isString(J) || (J = J ? "include" : "omit");
            const xe = l && "credentials"in r.prototype
              , fe = {
                ...me,
                signal: Ce,
                method: S.toUpperCase(),
                headers: I.normalize().toJSON(),
                body: R,
                duplex: "half",
                credentials: xe ? J : void 0
            };
            Le = l && new r(k,fe);
            let W = await (l ? de(Le, me) : de(k, fe));
            const se = g && (Y === "stream" || Y === "response");
            if (g && (D || se && Ae)) {
                const N = {};
                ["status", "statusText", "headers"].forEach(ue => {
                    N[ue] = W[ue]
                }
                );
                const z = V.toFiniteNumber(W.headers.get("content-length"))
                  , [ye,ve] = D && ly(z, Fl(uy(D), !0)) || [];
                W = new i(dy(W.body, fy, ye, () => {
                    ve && ve(),
                    Ae && Ae()
                }
                ),N)
            }
            Y = Y || "text";
            let B = await y[V.findKey(y, Y) || "text"](W, x);
            return !se && Ae && Ae(),
            await new Promise( (N, z) => {
                xw(N, z, {
                    data: B,
                    headers: It.from(W.headers),
                    status: W.status,
                    statusText: W.statusText,
                    config: x,
                    request: Le
                })
            }
            )
        } catch (xe) {
            throw Ae && Ae(),
            xe && xe.name === "TypeError" && /Load failed|fetch/i.test(xe.message) ? Object.assign(new pe("Network Error",pe.ERR_NETWORK,x,Le,xe && xe.response), {
                cause: xe.cause || xe
            }) : pe.from(xe, xe && xe.code, x, Le, xe && xe.response)
        }
    }
}
  , pP = new Map
  , kw = t => {
    let e = t && t.env || {};
    const {fetch: r, Request: i, Response: a} = e
      , l = [i, a, r];
    let c = l.length, d = c, h, m, g = pP;
    for (; d--; )
        h = l[d],
        m = g.get(h),
        m === void 0 && g.set(h, m = d ? new Map : hP(e)),
        g = m;
    return m
}
;
kw();
const Bf = {
    http: NC,
    xhr: aP,
    fetch: {
        get: kw
    }
};
V.forEach(Bf, (t, e) => {
    if (t) {
        try {
            Object.defineProperty(t, "name", {
                value: e
            })
        } catch {}
        Object.defineProperty(t, "adapterName", {
            value: e
        })
    }
}
);
const gy = t => `- ${t}`
  , mP = t => V.isFunction(t) || t === null || t === !1;
function gP(t, e) {
    t = V.isArray(t) ? t : [t];
    const {length: r} = t;
    let i, a;
    const l = {};
    for (let c = 0; c < r; c++) {
        i = t[c];
        let d;
        if (a = i,
        !mP(i) && (a = Bf[(d = String(i)).toLowerCase()],
        a === void 0))
            throw new pe(`Unknown adapter '${d}'`);
        if (a && (V.isFunction(a) || (a = a.get(e))))
            break;
        l[d || "#" + c] = a
    }
    if (!a) {
        const c = Object.entries(l).map( ([h,m]) => `adapter ${h} ` + (m === !1 ? "is not supported by the environment" : "is not available in the build"));
        let d = r ? c.length > 1 ? `since :
` + c.map(gy).join(`
`) : " " + gy(c[0]) : "as no adapter specified";
        throw new pe("There is no suitable adapter to dispatch the request " + d,"ERR_NOT_SUPPORT")
    }
    return a
}
const Ew = {
    getAdapter: gP,
    adapters: Bf
};
function hd(t) {
    if (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
        throw new Xo(null,t)
}
function yy(t) {
    return hd(t),
    t.headers = It.from(t.headers),
    t.data = fd.call(t, t.transformRequest),
    ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1),
    Ew.getAdapter(t.adapter || Yo.adapter, t)(t).then(function(i) {
        return hd(t),
        i.data = fd.call(t, t.transformResponse, i),
        i.headers = It.from(i.headers),
        i
    }, function(i) {
        return ww(i) || (hd(t),
        i && i.response && (i.response.data = fd.call(t, t.transformResponse, i.response),
        i.response.headers = It.from(i.response.headers))),
        Promise.reject(i)
    })
}
const Tw = "1.13.5"
  , eu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (t, e) => {
    eu[t] = function(i) {
        return typeof i === t || "a" + (e < 1 ? "n " : " ") + t
    }
}
);
const vy = {};
eu.transitional = function(e, r, i) {
    function a(l, c) {
        return "[Axios v" + Tw + "] Transitional option '" + l + "'" + c + (i ? ". " + i : "")
    }
    return (l, c, d) => {
        if (e === !1)
            throw new pe(a(c, " has been removed" + (r ? " in " + r : "")),pe.ERR_DEPRECATED);
        return r && !vy[c] && (vy[c] = !0,
        console.warn(a(c, " has been deprecated since v" + r + " and will be removed in the near future"))),
        e ? e(l, c, d) : !0
    }
}
;
eu.spelling = function(e) {
    return (r, i) => (console.warn(`${i} is likely a misspelling of ${e}`),
    !0)
}
;
function yP(t, e, r) {
    if (typeof t != "object")
        throw new pe("options must be an object",pe.ERR_BAD_OPTION_VALUE);
    const i = Object.keys(t);
    let a = i.length;
    for (; a-- > 0; ) {
        const l = i[a]
          , c = e[l];
        if (c) {
            const d = t[l]
              , h = d === void 0 || c(d, l, t);
            if (h !== !0)
                throw new pe("option " + l + " must be " + h,pe.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (r !== !0)
            throw new pe("Unknown option " + l,pe.ERR_BAD_OPTION)
    }
}
const Cl = {
    assertOptions: yP,
    validators: eu
}
  , Yt = Cl.validators;
let ds = class {
    constructor(e) {
        this.defaults = e || {},
        this.interceptors = {
            request: new oy,
            response: new oy
        }
    }
    async request(e, r) {
        try {
            return await this._request(e, r)
        } catch (i) {
            if (i instanceof Error) {
                let a = {};
                Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error;
                const l = a.stack ? a.stack.replace(/^.+\n/, "") : "";
                try {
                    i.stack ? l && !String(i.stack).endsWith(l.replace(/^.+\n.+\n/, "")) && (i.stack += `
` + l) : i.stack = l
                } catch {}
            }
            throw i
        }
    }
    _request(e, r) {
        typeof e == "string" ? (r = r || {},
        r.url = e) : r = e || {},
        r = ms(this.defaults, r);
        const {transitional: i, paramsSerializer: a, headers: l} = r;
        i !== void 0 && Cl.assertOptions(i, {
            silentJSONParsing: Yt.transitional(Yt.boolean),
            forcedJSONParsing: Yt.transitional(Yt.boolean),
            clarifyTimeoutError: Yt.transitional(Yt.boolean),
            legacyInterceptorReqResOrdering: Yt.transitional(Yt.boolean)
        }, !1),
        a != null && (V.isFunction(a) ? r.paramsSerializer = {
            serialize: a
        } : Cl.assertOptions(a, {
            encode: Yt.function,
            serialize: Yt.function
        }, !0)),
        r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0),
        Cl.assertOptions(r, {
            baseUrl: Yt.spelling("baseURL"),
            withXsrfToken: Yt.spelling("withXSRFToken")
        }, !0),
        r.method = (r.method || this.defaults.method || "get").toLowerCase();
        let c = l && V.merge(l.common, l[r.method]);
        l && V.forEach(["delete", "get", "head", "post", "put", "patch", "common"], x => {
            delete l[x]
        }
        ),
        r.headers = It.concat(c, l);
        const d = [];
        let h = !0;
        this.interceptors.request.forEach(function(k) {
            if (typeof k.runWhen == "function" && k.runWhen(r) === !1)
                return;
            h = h && k.synchronous;
            const S = r.transitional || Vf;
            S && S.legacyInterceptorReqResOrdering ? d.unshift(k.fulfilled, k.rejected) : d.push(k.fulfilled, k.rejected)
        });
        const m = [];
        this.interceptors.response.forEach(function(k) {
            m.push(k.fulfilled, k.rejected)
        });
        let g, y = 0, w;
        if (!h) {
            const x = [yy.bind(this), void 0];
            for (x.unshift(...d),
            x.push(...m),
            w = x.length,
            g = Promise.resolve(r); y < w; )
                g = g.then(x[y++], x[y++]);
            return g
        }
        w = d.length;
        let E = r;
        for (; y < w; ) {
            const x = d[y++]
              , k = d[y++];
            try {
                E = x(E)
            } catch (S) {
                k.call(this, S);
                break
            }
        }
        try {
            g = yy.call(this, E)
        } catch (x) {
            return Promise.reject(x)
        }
        for (y = 0,
        w = m.length; y < w; )
            g = g.then(m[y++], m[y++]);
        return g
    }
    getUri(e) {
        e = ms(this.defaults, e);
        const r = Sw(e.baseURL, e.url, e.allowAbsoluteUrls);
        return yw(r, e.params, e.paramsSerializer)
    }
}
;
V.forEach(["delete", "get", "head", "options"], function(e) {
    ds.prototype[e] = function(r, i) {
        return this.request(ms(i || {}, {
            method: e,
            url: r,
            data: (i || {}).data
        }))
    }
});
V.forEach(["post", "put", "patch"], function(e) {
    function r(i) {
        return function(l, c, d) {
            return this.request(ms(d || {}, {
                method: e,
                headers: i ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: l,
                data: c
            }))
        }
    }
    ds.prototype[e] = r(),
    ds.prototype[e + "Form"] = r(!0)
});
let vP = class Cw {
    constructor(e) {
        if (typeof e != "function")
            throw new TypeError("executor must be a function.");
        let r;
        this.promise = new Promise(function(l) {
            r = l
        }
        );
        const i = this;
        this.promise.then(a => {
            if (!i._listeners)
                return;
            let l = i._listeners.length;
            for (; l-- > 0; )
                i._listeners[l](a);
            i._listeners = null
        }
        ),
        this.promise.then = a => {
            let l;
            const c = new Promise(d => {
                i.subscribe(d),
                l = d
            }
            ).then(a);
            return c.cancel = function() {
                i.unsubscribe(l)
            }
            ,
            c
        }
        ,
        e(function(l, c, d) {
            i.reason || (i.reason = new Xo(l,c,d),
            r(i.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return
        }
        this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners)
            return;
        const r = this._listeners.indexOf(e);
        r !== -1 && this._listeners.splice(r, 1)
    }
    toAbortSignal() {
        const e = new AbortController
          , r = i => {
            e.abort(i)
        }
        ;
        return this.subscribe(r),
        e.signal.unsubscribe = () => this.unsubscribe(r),
        e.signal
    }
    static source() {
        let e;
        return {
            token: new Cw(function(a) {
                e = a
            }
            ),
            cancel: e
        }
    }
}
;
function wP(t) {
    return function(r) {
        return t.apply(null, r)
    }
}
function xP(t) {
    return V.isObject(t) && t.isAxiosError === !0
}
const tf = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries(tf).forEach( ([t,e]) => {
    tf[e] = t
}
);
function Pw(t) {
    const e = new ds(t)
      , r = ow(ds.prototype.request, e);
    return V.extend(r, ds.prototype, e, {
        allOwnKeys: !0
    }),
    V.extend(r, e, null, {
        allOwnKeys: !0
    }),
    r.create = function(a) {
        return Pw(ms(t, a))
    }
    ,
    r
}
const Xe = Pw(Yo);
Xe.Axios = ds;
Xe.CanceledError = Xo;
Xe.CancelToken = vP;
Xe.isCancel = ww;
Xe.VERSION = Tw;
Xe.toFormData = Zl;
Xe.AxiosError = pe;
Xe.Cancel = Xe.CanceledError;
Xe.all = function(e) {
    return Promise.all(e)
}
;
Xe.spread = wP;
Xe.isAxiosError = xP;
Xe.mergeConfig = ms;
Xe.AxiosHeaders = It;
Xe.formToJSON = t => vw(V.isHTMLForm(t) ? new FormData(t) : t);
Xe.getAdapter = Ew.getAdapter;
Xe.HttpStatusCode = tf;
Xe.default = Xe;
const {Axios: XO, AxiosError: JO, CanceledError: ZO, isCancel: ej, CancelToken: tj, VERSION: nj, all: rj, Cancel: sj, isAxiosError: ij, spread: oj, toFormData: aj, AxiosHeaders: lj, HttpStatusCode: uj, formToJSON: cj, getAdapter: dj, mergeConfig: fj} = Xe
  , SP = typeof window > "u"
  , wy = !SP && window.self !== window.top
  , pd = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  , ft = [];
for (let t = 0; t < 256; ++t)
    ft.push((t + 256).toString(16).slice(1));
function bP(t, e=0) {
    return (ft[t[e + 0]] + ft[t[e + 1]] + ft[t[e + 2]] + ft[t[e + 3]] + "-" + ft[t[e + 4]] + ft[t[e + 5]] + "-" + ft[t[e + 6]] + ft[t[e + 7]] + "-" + ft[t[e + 8]] + ft[t[e + 9]] + "-" + ft[t[e + 10]] + ft[t[e + 11]] + ft[t[e + 12]] + ft[t[e + 13]] + ft[t[e + 14]] + ft[t[e + 15]]).toLowerCase()
}
let md;
const kP = new Uint8Array(16);
function EP() {
    if (!md) {
        if (typeof crypto > "u" || !crypto.getRandomValues)
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        md = crypto.getRandomValues.bind(crypto)
    }
    return md(kP)
}
const TP = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  , xy = {
    randomUUID: TP
};
function CP(t, e, r) {
    var a;
    t = t || {};
    const i = t.random ?? ((a = t.rng) == null ? void 0 : a.call(t)) ?? EP();
    if (i.length < 16)
        throw new Error("Random bytes length must be >= 16");
    return i[6] = i[6] & 15 | 64,
    i[8] = i[8] & 63 | 128,
    bP(i)
}
function PP(t, e, r) {
    return xy.randomUUID && !t ? xy.randomUUID() : CP(t)
}
class _P extends Error {
    constructor(e, r, i, a, l) {
        super(e),
        this.name = "Base44Error",
        this.status = r,
        this.code = i,
        this.data = a,
        this.originalError = l
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            code: this.code,
            data: this.data
        }
    }
}
function mo({baseURL: t, headers: e={}, token: r, interceptResponses: i=!0, onError: a}) {
    const l = Xe.create({
        baseURL: t,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...e
        }
    });
    return r && (l.defaults.headers.common.Authorization = `Bearer ${r}`),
    l.interceptors.request.use(c => {
        typeof window < "u" && c.headers.set("X-Origin-URL", window.location.href);
        const d = PP();
        if (c.requestId = d,
        wy)
            try {
                window.parent.postMessage({
                    type: "api-request-start",
                    requestId: d,
                    data: {
                        url: t + c.url,
                        method: c.method,
                        body: c.data instanceof FormData ? "[FormData object]" : c.data
                    }
                }, "*")
            } catch {}
        return c
    }
    ),
    i && l.interceptors.response.use(c => {
        var d;
        const h = (d = c.config) === null || d === void 0 ? void 0 : d.requestId;
        try {
            wy && h && window.parent.postMessage({
                type: "api-request-end",
                requestId: h,
                data: {
                    statusCode: c.status,
                    response: c.data
                }
            }, "*")
        } catch {}
        return c.data
    }
    , c => {
        var d, h, m, g, y, w, E, x;
        const k = ((h = (d = c.response) === null || d === void 0 ? void 0 : d.data) === null || h === void 0 ? void 0 : h.message) || ((g = (m = c.response) === null || m === void 0 ? void 0 : m.data) === null || g === void 0 ? void 0 : g.detail) || c.message
          , S = new _P(k,(y = c.response) === null || y === void 0 ? void 0 : y.status,(E = (w = c.response) === null || w === void 0 ? void 0 : w.data) === null || E === void 0 ? void 0 : E.code,(x = c.response) === null || x === void 0 ? void 0 : x.data,c);
        return a == null || a(S),
        Promise.reject(S)
    }
    ),
    l
}
function Sy(t) {
    const {axios: e, appId: r, getSocket: i} = t;
    return new Proxy({},{
        get(a, l) {
            if (!(typeof l != "string" || l === "then" || l.startsWith("_")))
                return AP(e, r, l, i)
        }
    })
}
function RP(t) {
    var e;
    try {
        const r = JSON.parse(t);
        return {
            type: r.type,
            data: r.data,
            id: r.id || ((e = r.data) === null || e === void 0 ? void 0 : e.id),
            timestamp: r.timestamp || new Date().toISOString()
        }
    } catch (r) {
        return console.warn("[Base44 SDK] Failed to parse realtime message:", r),
        null
    }
}
function AP(t, e, r, i) {
    const a = `/apps/${e}/entities/${r}`;
    return {
        async list(l, c, d, h) {
            const m = {};
            return l && (m.sort = l),
            c && (m.limit = c),
            d && (m.skip = d),
            h && (m.fields = Array.isArray(h) ? h.join(",") : h),
            t.get(a, {
                params: m
            })
        },
        async filter(l, c, d, h, m) {
            const g = {
                q: JSON.stringify(l)
            };
            return c && (g.sort = c),
            d && (g.limit = d),
            h && (g.skip = h),
            m && (g.fields = Array.isArray(m) ? m.join(",") : m),
            t.get(a, {
                params: g
            })
        },
        async get(l) {
            return t.get(`${a}/${l}`)
        },
        async create(l) {
            return t.post(a, l)
        },
        async update(l, c) {
            return t.put(`${a}/${l}`, c)
        },
        async delete(l) {
            return t.delete(`${a}/${l}`)
        },
        async deleteMany(l) {
            return t.delete(a, {
                data: l
            })
        },
        async bulkCreate(l) {
            return t.post(`${a}/bulk`, l)
        },
        async updateMany(l, c) {
            return t.patch(`${a}/update-many`, {
                query: l,
                data: c
            })
        },
        async bulkUpdate(l) {
            return t.put(`${a}/bulk`, l)
        },
        async importEntities(l) {
            const c = new FormData;
            return c.append("file", l, l.name),
            t.post(`${a}/import`, c, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        },
        subscribe(l) {
            const c = `entities:${e}:${r}`;
            return i().subscribeToRoom(c, {
                update_model: m => {
                    const g = RP(m.data);
                    if (g)
                        try {
                            l(g)
                        } catch (y) {
                            console.error("[Base44 SDK] Subscription callback error:", y)
                        }
                }
            })
        }
    }
}
function NP(t, e) {
    return {
        async call(r, i, a) {
            if (!(r != null && r.trim()))
                throw new Error("Integration slug is required and cannot be empty");
            if (!(i != null && i.trim()))
                throw new Error("Operation ID is required and cannot be empty");
            const {pathParams: l, queryParams: c, ...d} = a ?? {}
              , h = {
                ...d,
                ...l && {
                    path_params: l
                },
                ...c && {
                    query_params: c
                }
            };
            return await t.post(`/apps/${e}/integrations/custom/${r}/${i}`, h)
        }
    }
}
function by(t, e) {
    const r = NP(t, e);
    return new Proxy({},{
        get(i, a) {
            if (!(typeof a != "string" || a === "then" || a.startsWith("_")))
                return a === "custom" ? r : new Proxy({},{
                    get(l, c) {
                        if (!(typeof c != "string" || c === "then" || c.startsWith("_")))
                            return async d => {
                                if (typeof d == "string")
                                    throw new Error(`Integration ${c} must receive an object with named parameters, received: ${d}`);
                                let h, m;
                                return d instanceof FormData || d && Object.values(d).some(g => g instanceof File) ? (h = new FormData,
                                Object.keys(d).forEach(g => {
                                    d[g]instanceof File ? h.append(g, d[g], d[g].name) : typeof d[g] == "object" && d[g] !== null ? h.append(g, JSON.stringify(d[g])) : h.append(g, d[g])
                                }
                                ),
                                m = "multipart/form-data") : (h = d,
                                m = "application/json"),
                                a === "Core" ? t.post(`/apps/${e}/integration-endpoints/Core/${c}`, h || d, {
                                    headers: {
                                        "Content-Type": m
                                    }
                                }) : t.post(`/apps/${e}/integration-endpoints/installable/${a}/integration-endpoints/${c}`, h || d, {
                                    headers: {
                                        "Content-Type": m
                                    }
                                })
                            }
                    }
                })
        }
    })
}
function OP() {
    return typeof window > "u" ? !1 : window !== window.parent
}
function jP(t, e, r) {
    const l = Math.round(window.screenX + (window.outerWidth - 500) / 2)
      , c = Math.round(window.screenY + (window.outerHeight - 600) / 2)
      , d = window.open(t, "base44_auth", `width=500,height=600,left=${l},top=${c},resizable=yes,scrollbars=yes`);
    if (!d)
        return;
    const h = () => {
        window.removeEventListener("message", m),
        clearInterval(g),
        d.closed || d.close()
    }
      , m = y => {
        var w;
        if (y.origin !== r || y.source !== d || !(!((w = y.data) === null || w === void 0) && w.access_token))
            return;
        h();
        const E = new URL(e)
          , {access_token: x, is_new_user: k} = y.data;
        E.searchParams.set("access_token", x),
        k != null && E.searchParams.set("is_new_user", String(k)),
        window.location.href = E.toString()
    }
      , g = setInterval( () => {
        d.closed && h()
    }
    , 500);
    window.addEventListener("message", m)
}
function LP(t, e, r, i) {
    return {
        async me() {
            return t.get(`/apps/${r}/entities/User/me`)
        },
        async updateMe(a) {
            return t.put(`/apps/${r}/entities/User/me`, a)
        },
        redirectToLogin(a) {
            if (typeof window > "u")
                throw new Error("Login method can only be used in a browser environment");
            const l = a ? new URL(a,window.location.origin).toString() : window.location.href
              , c = `${i.appBaseUrl}/login?from_url=${encodeURIComponent(l)}`;
            window.location.href = c
        },
        loginWithProvider(a, l="/") {
            const c = new URL(l,window.location.origin).toString()
              , d = `app_id=${r}&from_url=${encodeURIComponent(c)}`;
            let h;
            a === "sso" ? h = `/apps/${r}/auth/sso/login` : h = `/apps/auth${a === "google" ? "" : `/${a}`}/login`;
            const m = `${i.appBaseUrl}/api${h}?${d}`;
            if (OP()) {
                const g = `${m}&popup_origin=${encodeURIComponent(window.location.origin)}`;
                return jP(g, c, window.location.origin)
            }
            window.location.href = m
        },
        logout(a) {
            if (delete t.defaults.headers.common.Authorization,
            typeof window < "u") {
                if (window.localStorage)
                    try {
                        window.localStorage.removeItem("base44_access_token"),
                        window.localStorage.removeItem("token")
                    } catch (d) {
                        console.error("Failed to remove token from localStorage:", d)
                    }
                const l = a || window.location.href
                  , c = `${i.appBaseUrl}/api/apps/auth/logout?from_url=${encodeURIComponent(l)}`;
                window.location.href = c
            }
        },
        setToken(a, l=!0) {
            if (a && (t.defaults.headers.common.Authorization = `Bearer ${a}`,
            e.defaults.headers.common.Authorization = `Bearer ${a}`,
            l && typeof window < "u" && window.localStorage))
                try {
                    window.localStorage.setItem("base44_access_token", a),
                    window.localStorage.setItem("token", a)
                } catch (c) {
                    console.error("Failed to save token to localStorage:", c)
                }
        },
        async loginViaEmailPassword(a, l, c) {
            var d;
            try {
                const h = await t.post(`/apps/${r}/auth/login`, {
                    email: a,
                    password: l,
                    ...c && {
                        turnstile_token: c
                    }
                })
                  , {access_token: m, user: g} = h;
                return m && this.setToken(m),
                {
                    access_token: m,
                    user: g
                }
            } catch (h) {
                throw ((d = h.response) === null || d === void 0 ? void 0 : d.status) === 401 && await this.logout(),
                h
            }
        },
        async isAuthenticated() {
            try {
                return await this.me(),
                !0
            } catch {
                return !1
            }
        },
        inviteUser(a, l) {
            return t.post(`/apps/${r}/users/invite-user`, {
                user_email: a,
                role: l
            })
        },
        register(a) {
            return t.post(`/apps/${r}/auth/register`, a)
        },
        verifyOtp({email: a, otpCode: l}) {
            return t.post(`/apps/${r}/auth/verify-otp`, {
                email: a,
                otp_code: l
            })
        },
        resendOtp(a) {
            return t.post(`/apps/${r}/auth/resend-otp`, {
                email: a
            })
        },
        resetPasswordRequest(a) {
            return t.post(`/apps/${r}/auth/reset-password-request`, {
                email: a
            })
        },
        resetPassword({resetToken: a, newPassword: l}) {
            return t.post(`/apps/${r}/auth/reset-password`, {
                reset_token: a,
                new_password: l
            })
        },
        changePassword({userId: a, currentPassword: l, newPassword: c}) {
            return t.post(`/apps/${r}/auth/change-password`, {
                user_id: a,
                current_password: l,
                new_password: c
            })
        }
    }
}
function MP(t, e) {
    return {
        async getAccessToken(r) {
            const i = `/apps/${e}/auth/sso/accesstoken/${r}`;
            return t.get(i)
        }
    }
}
function DP(t, e) {
    return {
        async getAccessToken(r) {
            if (!r || typeof r != "string")
                throw new Error("Integration type is required and must be a string");
            return (await t.get(`/apps/${e}/external-auth/tokens/${r}`)).access_token
        },
        async getConnection(r) {
            var i;
            if (!r || typeof r != "string")
                throw new Error("Integration type is required and must be a string");
            const l = await t.get(`/apps/${e}/external-auth/tokens/${r}`);
            return {
                accessToken: l.access_token,
                connectionConfig: (i = l.connection_config) !== null && i !== void 0 ? i : null
            }
        },
        async getCurrentAppUserAccessToken(r) {
            if (!r || typeof r != "string")
                throw new Error("Connector ID is required and must be a string");
            return (await t.get(`/apps/${e}/app-user-auth/connectors/${r}/token`)).access_token
        },
        async getCurrentAppUserConnection(r) {
            var i;
            if (!r || typeof r != "string")
                throw new Error("Connector ID is required and must be a string");
            const l = await t.get(`/apps/${e}/app-user-auth/connectors/${r}/token`);
            return {
                accessToken: l.access_token,
                connectionConfig: (i = l.connection_config) !== null && i !== void 0 ? i : null
            }
        }
    }
}
function IP(t, e) {
    return {
        async connectAppUser(r) {
            if (!r || typeof r != "string")
                throw new Error("Connector ID is required and must be a string");
            return (await t.post(`/apps/${e}/app-user-auth/connectors/${r}/initiate`)).redirect_url
        },
        async disconnectAppUser(r) {
            if (!r || typeof r != "string")
                throw new Error("Connector ID is required and must be a string");
            await t.delete(`/apps/${e}/app-user-auth/connectors/${r}`)
        }
    }
}
function jo(t={}) {
    const {storageKey: e="base44_access_token", paramName: r="access_token", saveToStorage: i=!0, removeFromUrl: a=!0} = t;
    let l = null;
    if (typeof window < "u" && window.location)
        try {
            const c = new URLSearchParams(window.location.search);
            if (l = c.get(r),
            l) {
                if (i && FP(l, {
                    storageKey: e
                }),
                a) {
                    c.delete(r);
                    const d = `${window.location.pathname}${c.toString() ? `?${c.toString()}` : ""}${window.location.hash}`;
                    window.history.replaceState({}, document.title, d)
                }
                return l
            }
        } catch (c) {
            console.error("Error retrieving token from URL:", c)
        }
    if (typeof window < "u" && window.localStorage)
        try {
            return l = window.localStorage.getItem(e),
            l
        } catch (c) {
            console.error("Error retrieving token from local storage:", c)
        }
    return null
}
function FP(t, e) {
    const {storageKey: r="base44_access_token"} = e;
    if (typeof window > "u" || !window.localStorage || !t)
        return !1;
    try {
        return window.localStorage.setItem(r, t),
        window.localStorage.setItem("token", t),
        !0
    } catch (i) {
        return console.error("Error saving token to local storage:", i),
        !1
    }
}
function ky(t, e, r) {
    const i = (l, c) => l ? `${String(l).replace(/\/$/, "")}${c}` : c
      , a = l => {
        const c = new Headers;
        if (r != null && r.getAuthHeaders) {
            const d = r.getAuthHeaders();
            Object.entries(d).forEach( ([h,m]) => {
                m != null && c.set(h, String(m))
            }
            )
        }
        return l && new Headers(l).forEach( (d, h) => {
            c.set(h, d)
        }
        ),
        c
    }
    ;
    return {
        async invoke(l, c) {
            if (typeof c == "string")
                throw new Error(`Function ${l} must receive an object with named parameters, received: ${c}`);
            let d, h;
            return c instanceof FormData || c && Object.values(c).some(m => m instanceof File) ? (d = new FormData,
            Object.keys(c).forEach(m => {
                c[m]instanceof File ? d.append(m, c[m], c[m].name) : typeof c[m] == "object" && c[m] !== null ? d.append(m, JSON.stringify(c[m])) : d.append(m, c[m])
            }
            ),
            h = "multipart/form-data") : (d = c,
            h = "application/json"),
            t.post(`/apps/${e}/functions/${l}`, d || c, {
                headers: {
                    "Content-Type": h
                }
            })
        },
        async fetch(l, c={}) {
            const h = `/functions${l.startsWith("/") ? l : `/${l}`}`
              , m = a(c.headers)
              , g = {
                ...c,
                headers: m
            };
            return await fetch(i(r == null ? void 0 : r.baseURL, h), g)
        }
    }
}
function Ey({axios: t, getSocket: e, appId: r, serverUrl: i, token: a}) {
    const l = `/apps/${r}/agents`
      , c = {}
      , d = () => t.get(`${l}/conversations`)
      , h = k => t.get(`${l}/conversations/${k}`);
    return {
        getConversations: d,
        getConversation: h,
        listConversations: k => t.get(`${l}/conversations`, {
            params: k
        }),
        createConversation: k => t.post(`${l}/conversations`, k),
        addMessage: async (k, S) => t.post(`${l}/conversations/v2/${k.id}/messages`, S),
        subscribeToConversation: (k, S) => {
            const R = `/agent-conversations/${k}`
              , U = e()
              , L = h(k).then(_ => (c[k] = _,
            _));
            return U.subscribeToRoom(R, {
                connect: () => {}
                ,
                update_model: async ({data: _}) => {
                    const D = JSON.parse(_);
                    if (D._message) {
                        await L;
                        const K = D._message
                          , Y = c[k];
                        if (Y) {
                            const I = Y.messages || []
                              , J = I.findIndex(de => de.id === K.id)
                              , me = J !== -1 ? I.map( (de, Ce) => Ce === J ? K : de) : [...I, K];
                            c[k] = {
                                ...Y,
                                messages: me
                            },
                            S == null || S(c[k])
                        }
                    }
                }
            })
        }
        ,
        getWhatsAppConnectURL: k => {
            const S = `${i}/api/apps/${r}/agents/${encodeURIComponent(k)}/whatsapp`
              , R = a ?? jo();
            return R ? `${S}?token=${R}` : S
        }
        ,
        getTelegramConnectURL: k => {
            const S = `${i}/api/apps/${r}/agents/${encodeURIComponent(k)}/telegram`
              , R = a ?? jo();
            return R ? `${S}?token=${R}` : S
        }
    }
}
function Ty(t, e) {
    const r = `/app-logs/${e}`;
    return {
        async logUserInApp(i) {
            await t.post(`${r}/log-user-in-app/${i}`)
        },
        async fetchLogs(i={}) {
            return await t.get(r, {
                params: i
            })
        },
        async getStats(i={}) {
            return await t.get(`${r}/stats`, {
                params: i
            })
        }
    }
}
function VP(t, e) {
    return {
        async inviteUser(r, i) {
            if (i !== "user" && i !== "admin")
                throw new Error(`Invalid role: "${i}". Role must be either "user" or "admin".`);
            return await t.post(`/apps/${e}/runtime/users/invite-user`, {
                user_email: r,
                role: i
            })
        }
    }
}
const Cn = Object.create(null);
Cn.open = "0";
Cn.close = "1";
Cn.ping = "2";
Cn.pong = "3";
Cn.message = "4";
Cn.upgrade = "5";
Cn.noop = "6";
const Pl = Object.create(null);
Object.keys(Cn).forEach(t => {
    Pl[Cn[t]] = t
}
);
const nf = {
    type: "error",
    data: "parser error"
}
  , _w = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]"
  , Rw = typeof ArrayBuffer == "function"
  , Aw = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer
  , zf = ({type: t, data: e}, r, i) => _w && e instanceof Blob ? r ? i(e) : Cy(e, i) : Rw && (e instanceof ArrayBuffer || Aw(e)) ? r ? i(e) : Cy(new Blob([e]), i) : i(Cn[t] + (e || ""))
  , Cy = (t, e) => {
    const r = new FileReader;
    return r.onload = function() {
        const i = r.result.split(",")[1];
        e("b" + (i || ""))
    }
    ,
    r.readAsDataURL(t)
}
;
function Py(t) {
    return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer,t.byteOffset,t.byteLength)
}
let gd;
function UP(t, e) {
    if (_w && t.data instanceof Blob)
        return t.data.arrayBuffer().then(Py).then(e);
    if (Rw && (t.data instanceof ArrayBuffer || Aw(t.data)))
        return e(Py(t.data));
    zf(t, !1, r => {
        gd || (gd = new TextEncoder),
        e(gd.encode(r))
    }
    )
}
const _y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , go = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < _y.length; t++)
    go[_y.charCodeAt(t)] = t;
const BP = t => {
    let e = t.length * .75, r = t.length, i, a = 0, l, c, d, h;
    t[t.length - 1] === "=" && (e--,
    t[t.length - 2] === "=" && e--);
    const m = new ArrayBuffer(e)
      , g = new Uint8Array(m);
    for (i = 0; i < r; i += 4)
        l = go[t.charCodeAt(i)],
        c = go[t.charCodeAt(i + 1)],
        d = go[t.charCodeAt(i + 2)],
        h = go[t.charCodeAt(i + 3)],
        g[a++] = l << 2 | c >> 4,
        g[a++] = (c & 15) << 4 | d >> 2,
        g[a++] = (d & 3) << 6 | h & 63;
    return m
}
  , zP = typeof ArrayBuffer == "function"
  , $f = (t, e) => {
    if (typeof t != "string")
        return {
            type: "message",
            data: Nw(t, e)
        };
    const r = t.charAt(0);
    return r === "b" ? {
        type: "message",
        data: $P(t.substring(1), e)
    } : Pl[r] ? t.length > 1 ? {
        type: Pl[r],
        data: t.substring(1)
    } : {
        type: Pl[r]
    } : nf
}
  , $P = (t, e) => {
    if (zP) {
        const r = BP(t);
        return Nw(r, e)
    } else
        return {
            base64: !0,
            data: t
        }
}
  , Nw = (t, e) => {
    switch (e) {
    case "blob":
        return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
        return t instanceof ArrayBuffer ? t : t.buffer
    }
}
  , Ow = ""
  , HP = (t, e) => {
    const r = t.length
      , i = new Array(r);
    let a = 0;
    t.forEach( (l, c) => {
        zf(l, !1, d => {
            i[c] = d,
            ++a === r && e(i.join(Ow))
        }
        )
    }
    )
}
  , qP = (t, e) => {
    const r = t.split(Ow)
      , i = [];
    for (let a = 0; a < r.length; a++) {
        const l = $f(r[a], e);
        if (i.push(l),
        l.type === "error")
            break
    }
    return i
}
;
function WP() {
    return new TransformStream({
        transform(t, e) {
            UP(t, r => {
                const i = r.length;
                let a;
                if (i < 126)
                    a = new Uint8Array(1),
                    new DataView(a.buffer).setUint8(0, i);
                else if (i < 65536) {
                    a = new Uint8Array(3);
                    const l = new DataView(a.buffer);
                    l.setUint8(0, 126),
                    l.setUint16(1, i)
                } else {
                    a = new Uint8Array(9);
                    const l = new DataView(a.buffer);
                    l.setUint8(0, 127),
                    l.setBigUint64(1, BigInt(i))
                }
                t.data && typeof t.data != "string" && (a[0] |= 128),
                e.enqueue(a),
                e.enqueue(r)
            }
            )
        }
    })
}
let yd;
function gl(t) {
    return t.reduce( (e, r) => e + r.length, 0)
}
function yl(t, e) {
    if (t[0].length === e)
        return t.shift();
    const r = new Uint8Array(e);
    let i = 0;
    for (let a = 0; a < e; a++)
        r[a] = t[0][i++],
        i === t[0].length && (t.shift(),
        i = 0);
    return t.length && i < t[0].length && (t[0] = t[0].slice(i)),
    r
}
function KP(t, e) {
    yd || (yd = new TextDecoder);
    const r = [];
    let i = 0
      , a = -1
      , l = !1;
    return new TransformStream({
        transform(c, d) {
            for (r.push(c); ; ) {
                if (i === 0) {
                    if (gl(r) < 1)
                        break;
                    const h = yl(r, 1);
                    l = (h[0] & 128) === 128,
                    a = h[0] & 127,
                    a < 126 ? i = 3 : a === 126 ? i = 1 : i = 2
                } else if (i === 1) {
                    if (gl(r) < 2)
                        break;
                    const h = yl(r, 2);
                    a = new DataView(h.buffer,h.byteOffset,h.length).getUint16(0),
                    i = 3
                } else if (i === 2) {
                    if (gl(r) < 8)
                        break;
                    const h = yl(r, 8)
                      , m = new DataView(h.buffer,h.byteOffset,h.length)
                      , g = m.getUint32(0);
                    if (g > Math.pow(2, 21) - 1) {
                        d.enqueue(nf);
                        break
                    }
                    a = g * Math.pow(2, 32) + m.getUint32(4),
                    i = 3
                } else {
                    if (gl(r) < a)
                        break;
                    const h = yl(r, a);
                    d.enqueue($f(l ? h : yd.decode(h), e)),
                    i = 0
                }
                if (a === 0 || a > t) {
                    d.enqueue(nf);
                    break
                }
            }
        }
    })
}
const jw = 4;
function Ze(t) {
    if (t)
        return QP(t)
}
function QP(t) {
    for (var e in Ze.prototype)
        t[e] = Ze.prototype[e];
    return t
}
Ze.prototype.on = Ze.prototype.addEventListener = function(t, e) {
    return this._callbacks = this._callbacks || {},
    (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
    this
}
;
Ze.prototype.once = function(t, e) {
    function r() {
        this.off(t, r),
        e.apply(this, arguments)
    }
    return r.fn = e,
    this.on(t, r),
    this
}
;
Ze.prototype.off = Ze.prototype.removeListener = Ze.prototype.removeAllListeners = Ze.prototype.removeEventListener = function(t, e) {
    if (this._callbacks = this._callbacks || {},
    arguments.length == 0)
        return this._callbacks = {},
        this;
    var r = this._callbacks["$" + t];
    if (!r)
        return this;
    if (arguments.length == 1)
        return delete this._callbacks["$" + t],
        this;
    for (var i, a = 0; a < r.length; a++)
        if (i = r[a],
        i === e || i.fn === e) {
            r.splice(a, 1);
            break
        }
    return r.length === 0 && delete this._callbacks["$" + t],
    this
}
;
Ze.prototype.emit = function(t) {
    this._callbacks = this._callbacks || {};
    for (var e = new Array(arguments.length - 1), r = this._callbacks["$" + t], i = 1; i < arguments.length; i++)
        e[i - 1] = arguments[i];
    if (r) {
        r = r.slice(0);
        for (var i = 0, a = r.length; i < a; ++i)
            r[i].apply(this, e)
    }
    return this
}
;
Ze.prototype.emitReserved = Ze.prototype.emit;
Ze.prototype.listeners = function(t) {
    return this._callbacks = this._callbacks || {},
    this._callbacks["$" + t] || []
}
;
Ze.prototype.hasListeners = function(t) {
    return !!this.listeners(t).length
}
;
const tu = typeof Promise == "function" && typeof Promise.resolve == "function" ? e => Promise.resolve().then(e) : (e, r) => r(e, 0)
  , tn = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")()
  , GP = "arraybuffer";
function Lw(t, ...e) {
    return e.reduce( (r, i) => (t.hasOwnProperty(i) && (r[i] = t[i]),
    r), {})
}
const YP = tn.setTimeout
  , XP = tn.clearTimeout;
function nu(t, e) {
    e.useNativeTimers ? (t.setTimeoutFn = YP.bind(tn),
    t.clearTimeoutFn = XP.bind(tn)) : (t.setTimeoutFn = tn.setTimeout.bind(tn),
    t.clearTimeoutFn = tn.clearTimeout.bind(tn))
}
const JP = 1.33;
function ZP(t) {
    return typeof t == "string" ? e_(t) : Math.ceil((t.byteLength || t.size) * JP)
}
function e_(t) {
    let e = 0
      , r = 0;
    for (let i = 0, a = t.length; i < a; i++)
        e = t.charCodeAt(i),
        e < 128 ? r += 1 : e < 2048 ? r += 2 : e < 55296 || e >= 57344 ? r += 3 : (i++,
        r += 4);
    return r
}
function Mw() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}
function t_(t) {
    let e = "";
    for (let r in t)
        t.hasOwnProperty(r) && (e.length && (e += "&"),
        e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
    return e
}
function n_(t) {
    let e = {}
      , r = t.split("&");
    for (let i = 0, a = r.length; i < a; i++) {
        let l = r[i].split("=");
        e[decodeURIComponent(l[0])] = decodeURIComponent(l[1])
    }
    return e
}
class r_ extends Error {
    constructor(e, r, i) {
        super(e),
        this.description = r,
        this.context = i,
        this.type = "TransportError"
    }
}
class Hf extends Ze {
    constructor(e) {
        super(),
        this.writable = !1,
        nu(this, e),
        this.opts = e,
        this.query = e.query,
        this.socket = e.socket,
        this.supportsBinary = !e.forceBase64
    }
    onError(e, r, i) {
        return super.emitReserved("error", new r_(e,r,i)),
        this
    }
    open() {
        return this.readyState = "opening",
        this.doOpen(),
        this
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(),
        this.onClose()),
        this
    }
    send(e) {
        this.readyState === "open" && this.write(e)
    }
    onOpen() {
        this.readyState = "open",
        this.writable = !0,
        super.emitReserved("open")
    }
    onData(e) {
        const r = $f(e, this.socket.binaryType);
        this.onPacket(r)
    }
    onPacket(e) {
        super.emitReserved("packet", e)
    }
    onClose(e) {
        this.readyState = "closed",
        super.emitReserved("close", e)
    }
    pause(e) {}
    createUri(e, r={}) {
        return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(r)
    }
    _hostname() {
        const e = this.opts.hostname;
        return e.indexOf(":") === -1 ? e : "[" + e + "]"
    }
    _port() {
        return this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
    }
    _query(e) {
        const r = t_(e);
        return r.length ? "?" + r : ""
    }
}
class s_ extends Hf {
    constructor() {
        super(...arguments),
        this._polling = !1
    }
    get name() {
        return "polling"
    }
    doOpen() {
        this._poll()
    }
    pause(e) {
        this.readyState = "pausing";
        const r = () => {
            this.readyState = "paused",
            e()
        }
        ;
        if (this._polling || !this.writable) {
            let i = 0;
            this._polling && (i++,
            this.once("pollComplete", function() {
                --i || r()
            })),
            this.writable || (i++,
            this.once("drain", function() {
                --i || r()
            }))
        } else
            r()
    }
    _poll() {
        this._polling = !0,
        this.doPoll(),
        this.emitReserved("poll")
    }
    onData(e) {
        const r = i => {
            if (this.readyState === "opening" && i.type === "open" && this.onOpen(),
            i.type === "close")
                return this.onClose({
                    description: "transport closed by the server"
                }),
                !1;
            this.onPacket(i)
        }
        ;
        qP(e, this.socket.binaryType).forEach(r),
        this.readyState !== "closed" && (this._polling = !1,
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll())
    }
    doClose() {
        const e = () => {
            this.write([{
                type: "close"
            }])
        }
        ;
        this.readyState === "open" ? e() : this.once("open", e)
    }
    write(e) {
        this.writable = !1,
        HP(e, r => {
            this.doWrite(r, () => {
                this.writable = !0,
                this.emitReserved("drain")
            }
            )
        }
        )
    }
    uri() {
        const e = this.opts.secure ? "https" : "http"
          , r = this.query || {};
        return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = Mw()),
        !this.supportsBinary && !r.sid && (r.b64 = 1),
        this.createUri(e, r)
    }
}
let Dw = !1;
try {
    Dw = typeof XMLHttpRequest < "u" && "withCredentials"in new XMLHttpRequest
} catch {}
const i_ = Dw;
function o_() {}
class a_ extends s_ {
    constructor(e) {
        if (super(e),
        typeof location < "u") {
            const r = location.protocol === "https:";
            let i = location.port;
            i || (i = r ? "443" : "80"),
            this.xd = typeof location < "u" && e.hostname !== location.hostname || i !== e.port
        }
    }
    doWrite(e, r) {
        const i = this.request({
            method: "POST",
            data: e
        });
        i.on("success", r),
        i.on("error", (a, l) => {
            this.onError("xhr post error", a, l)
        }
        )
    }
    doPoll() {
        const e = this.request();
        e.on("data", this.onData.bind(this)),
        e.on("error", (r, i) => {
            this.onError("xhr poll error", r, i)
        }
        ),
        this.pollXhr = e
    }
}
class kn extends Ze {
    constructor(e, r, i) {
        super(),
        this.createRequest = e,
        nu(this, i),
        this._opts = i,
        this._method = i.method || "GET",
        this._uri = r,
        this._data = i.data !== void 0 ? i.data : null,
        this._create()
    }
    _create() {
        var e;
        const r = Lw(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        r.xdomain = !!this._opts.xd;
        const i = this._xhr = this.createRequest(r);
        try {
            i.open(this._method, this._uri, !0);
            try {
                if (this._opts.extraHeaders) {
                    i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
                    for (let a in this._opts.extraHeaders)
                        this._opts.extraHeaders.hasOwnProperty(a) && i.setRequestHeader(a, this._opts.extraHeaders[a])
                }
            } catch {}
            if (this._method === "POST")
                try {
                    i.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch {}
            try {
                i.setRequestHeader("Accept", "*/*")
            } catch {}
            (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(i),
            "withCredentials"in i && (i.withCredentials = this._opts.withCredentials),
            this._opts.requestTimeout && (i.timeout = this._opts.requestTimeout),
            i.onreadystatechange = () => {
                var a;
                i.readyState === 3 && ((a = this._opts.cookieJar) === null || a === void 0 || a.parseCookies(i.getResponseHeader("set-cookie"))),
                i.readyState === 4 && (i.status === 200 || i.status === 1223 ? this._onLoad() : this.setTimeoutFn( () => {
                    this._onError(typeof i.status == "number" ? i.status : 0)
                }
                , 0))
            }
            ,
            i.send(this._data)
        } catch (a) {
            this.setTimeoutFn( () => {
                this._onError(a)
            }
            , 0);
            return
        }
        typeof document < "u" && (this._index = kn.requestsCount++,
        kn.requests[this._index] = this)
    }
    _onError(e) {
        this.emitReserved("error", e, this._xhr),
        this._cleanup(!0)
    }
    _cleanup(e) {
        if (!(typeof this._xhr > "u" || this._xhr === null)) {
            if (this._xhr.onreadystatechange = o_,
            e)
                try {
                    this._xhr.abort()
                } catch {}
            typeof document < "u" && delete kn.requests[this._index],
            this._xhr = null
        }
    }
    _onLoad() {
        const e = this._xhr.responseText;
        e !== null && (this.emitReserved("data", e),
        this.emitReserved("success"),
        this._cleanup())
    }
    abort() {
        this._cleanup()
    }
}
kn.requestsCount = 0;
kn.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function")
        attachEvent("onunload", Ry);
    else if (typeof addEventListener == "function") {
        const t = "onpagehide"in tn ? "pagehide" : "unload";
        addEventListener(t, Ry, !1)
    }
}
function Ry() {
    for (let t in kn.requests)
        kn.requests.hasOwnProperty(t) && kn.requests[t].abort()
}
const l_ = (function() {
    const t = Iw({
        xdomain: !1
    });
    return t && t.responseType !== null
}
)();
class u_ extends a_ {
    constructor(e) {
        super(e);
        const r = e && e.forceBase64;
        this.supportsBinary = l_ && !r
    }
    request(e={}) {
        return Object.assign(e, {
            xd: this.xd
        }, this.opts),
        new kn(Iw,this.uri(),e)
    }
}
function Iw(t) {
    const e = t.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!e || i_))
            return new XMLHttpRequest
    } catch {}
    if (!e)
        try {
            return new tn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch {}
}
const Fw = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class c_ extends Hf {
    get name() {
        return "websocket"
    }
    doOpen() {
        const e = this.uri()
          , r = this.opts.protocols
          , i = Fw ? {} : Lw(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(e, r, i)
        } catch (a) {
            return this.emitReserved("error", a)
        }
        this.ws.binaryType = this.socket.binaryType,
        this.addEventListeners()
    }
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(),
            this.onOpen()
        }
        ,
        this.ws.onclose = e => this.onClose({
            description: "websocket connection closed",
            context: e
        }),
        this.ws.onmessage = e => this.onData(e.data),
        this.ws.onerror = e => this.onError("websocket error", e)
    }
    write(e) {
        this.writable = !1;
        for (let r = 0; r < e.length; r++) {
            const i = e[r]
              , a = r === e.length - 1;
            zf(i, this.supportsBinary, l => {
                try {
                    this.doWrite(i, l)
                } catch {}
                a && tu( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.onerror = () => {}
        ,
        this.ws.close(),
        this.ws = null)
    }
    uri() {
        const e = this.opts.secure ? "wss" : "ws"
          , r = this.query || {};
        return this.opts.timestampRequests && (r[this.opts.timestampParam] = Mw()),
        this.supportsBinary || (r.b64 = 1),
        this.createUri(e, r)
    }
}
const vd = tn.WebSocket || tn.MozWebSocket;
class d_ extends c_ {
    createSocket(e, r, i) {
        return Fw ? new vd(e,r,i) : r ? new vd(e,r) : new vd(e)
    }
    doWrite(e, r) {
        this.ws.send(r)
    }
}
class f_ extends Hf {
    get name() {
        return "webtransport"
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])
        } catch (e) {
            return this.emitReserved("error", e)
        }
        this._transport.closed.then( () => {
            this.onClose()
        }
        ).catch(e => {
            this.onError("webtransport error", e)
        }
        ),
        this._transport.ready.then( () => {
            this._transport.createBidirectionalStream().then(e => {
                const r = KP(Number.MAX_SAFE_INTEGER, this.socket.binaryType)
                  , i = e.readable.pipeThrough(r).getReader()
                  , a = WP();
                a.readable.pipeTo(e.writable),
                this._writer = a.writable.getWriter();
                const l = () => {
                    i.read().then( ({done: d, value: h}) => {
                        d || (this.onPacket(h),
                        l())
                    }
                    ).catch(d => {}
                    )
                }
                ;
                l();
                const c = {
                    type: "open"
                };
                this.query.sid && (c.data = `{"sid":"${this.query.sid}"}`),
                this._writer.write(c).then( () => this.onOpen())
            }
            )
        }
        )
    }
    write(e) {
        this.writable = !1;
        for (let r = 0; r < e.length; r++) {
            const i = e[r]
              , a = r === e.length - 1;
            this._writer.write(i).then( () => {
                a && tu( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        var e;
        (e = this._transport) === null || e === void 0 || e.close()
    }
}
const h_ = {
    websocket: d_,
    webtransport: f_,
    polling: u_
}
  , p_ = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  , m_ = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function rf(t) {
    if (t.length > 8e3)
        throw "URI too long";
    const e = t
      , r = t.indexOf("[")
      , i = t.indexOf("]");
    r != -1 && i != -1 && (t = t.substring(0, r) + t.substring(r, i).replace(/:/g, ";") + t.substring(i, t.length));
    let a = p_.exec(t || "")
      , l = {}
      , c = 14;
    for (; c--; )
        l[m_[c]] = a[c] || "";
    return r != -1 && i != -1 && (l.source = e,
    l.host = l.host.substring(1, l.host.length - 1).replace(/;/g, ":"),
    l.authority = l.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
    l.ipv6uri = !0),
    l.pathNames = g_(l, l.path),
    l.queryKey = y_(l, l.query),
    l
}
function g_(t, e) {
    const r = /\/{2,9}/g
      , i = e.replace(r, "/").split("/");
    return (e.slice(0, 1) == "/" || e.length === 0) && i.splice(0, 1),
    e.slice(-1) == "/" && i.splice(i.length - 1, 1),
    i
}
function y_(t, e) {
    const r = {};
    return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, a, l) {
        a && (r[a] = l)
    }),
    r
}
const sf = typeof addEventListener == "function" && typeof removeEventListener == "function"
  , _l = [];
sf && addEventListener("offline", () => {
    _l.forEach(t => t())
}
, !1);
class Ar extends Ze {
    constructor(e, r) {
        if (super(),
        this.binaryType = GP,
        this.writeBuffer = [],
        this._prevBufferLen = 0,
        this._pingInterval = -1,
        this._pingTimeout = -1,
        this._maxPayload = -1,
        this._pingTimeoutTime = 1 / 0,
        e && typeof e == "object" && (r = e,
        e = null),
        e) {
            const i = rf(e);
            r.hostname = i.host,
            r.secure = i.protocol === "https" || i.protocol === "wss",
            r.port = i.port,
            i.query && (r.query = i.query)
        } else
            r.host && (r.hostname = rf(r.host).host);
        nu(this, r),
        this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:",
        r.hostname && !r.port && (r.port = this.secure ? "443" : "80"),
        this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"),
        this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"),
        this.transports = [],
        this._transportsByName = {},
        r.transports.forEach(i => {
            const a = i.prototype.name;
            this.transports.push(a),
            this._transportsByName[a] = i
        }
        ),
        this.opts = Object.assign({
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: !1
        }, r),
        this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""),
        typeof this.opts.query == "string" && (this.opts.query = n_(this.opts.query)),
        sf && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(),
            this.transport.close())
        }
        ,
        addEventListener("beforeunload", this._beforeunloadEventListener, !1)),
        this.hostname !== "localhost" && (this._offlineEventListener = () => {
            this._onClose("transport close", {
                description: "network connection lost"
            })
        }
        ,
        _l.push(this._offlineEventListener))),
        this.opts.withCredentials && (this._cookieJar = void 0),
        this._open()
    }
    createTransport(e) {
        const r = Object.assign({}, this.opts.query);
        r.EIO = jw,
        r.transport = e,
        this.id && (r.sid = this.id);
        const i = Object.assign({}, this.opts, {
            query: r,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[e]);
        return new this._transportsByName[e](i)
    }
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn( () => {
                this.emitReserved("error", "No transports available")
            }
            , 0);
            return
        }
        const e = this.opts.rememberUpgrade && Ar.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const r = this.createTransport(e);
        r.open(),
        this.setTransport(r)
    }
    setTransport(e) {
        this.transport && this.transport.removeAllListeners(),
        this.transport = e,
        e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", r => this._onClose("transport close", r))
    }
    onOpen() {
        this.readyState = "open",
        Ar.priorWebsocketSuccess = this.transport.name === "websocket",
        this.emitReserved("open"),
        this.flush()
    }
    _onPacket(e) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
            switch (this.emitReserved("packet", e),
            this.emitReserved("heartbeat"),
            e.type) {
            case "open":
                this.onHandshake(JSON.parse(e.data));
                break;
            case "ping":
                this._sendPacket("pong"),
                this.emitReserved("ping"),
                this.emitReserved("pong"),
                this._resetPingTimeout();
                break;
            case "error":
                const r = new Error("server error");
                r.code = e.data,
                this._onError(r);
                break;
            case "message":
                this.emitReserved("data", e.data),
                this.emitReserved("message", e.data);
                break
            }
    }
    onHandshake(e) {
        this.emitReserved("handshake", e),
        this.id = e.sid,
        this.transport.query.sid = e.sid,
        this._pingInterval = e.pingInterval,
        this._pingTimeout = e.pingTimeout,
        this._maxPayload = e.maxPayload,
        this.onOpen(),
        this.readyState !== "closed" && this._resetPingTimeout()
    }
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const e = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + e,
        this._pingTimeoutTimer = this.setTimeoutFn( () => {
            this._onClose("ping timeout")
        }
        , e),
        this.opts.autoUnref && this._pingTimeoutTimer.unref()
    }
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen),
        this._prevBufferLen = 0,
        this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
    }
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const e = this._getWritablePackets();
            this.transport.send(e),
            this._prevBufferLen = e.length,
            this.emitReserved("flush")
        }
    }
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
            return this.writeBuffer;
        let r = 1;
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const a = this.writeBuffer[i].data;
            if (a && (r += ZP(a)),
            i > 0 && r > this._maxPayload)
                return this.writeBuffer.slice(0, i);
            r += 2
        }
        return this.writeBuffer
    }
    _hasPingExpired() {
        if (!this._pingTimeoutTime)
            return !0;
        const e = Date.now() > this._pingTimeoutTime;
        return e && (this._pingTimeoutTime = 0,
        tu( () => {
            this._onClose("ping timeout")
        }
        , this.setTimeoutFn)),
        e
    }
    write(e, r, i) {
        return this._sendPacket("message", e, r, i),
        this
    }
    send(e, r, i) {
        return this._sendPacket("message", e, r, i),
        this
    }
    _sendPacket(e, r, i, a) {
        if (typeof r == "function" && (a = r,
        r = void 0),
        typeof i == "function" && (a = i,
        i = null),
        this.readyState === "closing" || this.readyState === "closed")
            return;
        i = i || {},
        i.compress = i.compress !== !1;
        const l = {
            type: e,
            data: r,
            options: i
        };
        this.emitReserved("packetCreate", l),
        this.writeBuffer.push(l),
        a && this.once("flush", a),
        this.flush()
    }
    close() {
        const e = () => {
            this._onClose("forced close"),
            this.transport.close()
        }
          , r = () => {
            this.off("upgrade", r),
            this.off("upgradeError", r),
            e()
        }
          , i = () => {
            this.once("upgrade", r),
            this.once("upgradeError", r)
        }
        ;
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing",
        this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? i() : e()
        }
        ) : this.upgrading ? i() : e()),
        this
    }
    _onError(e) {
        if (Ar.priorWebsocketSuccess = !1,
        this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
            return this.transports.shift(),
            this._open();
        this.emitReserved("error", e),
        this._onClose("transport error", e)
    }
    _onClose(e, r) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            if (this.clearTimeoutFn(this._pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            sf && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1),
            this._offlineEventListener)) {
                const i = _l.indexOf(this._offlineEventListener);
                i !== -1 && _l.splice(i, 1)
            }
            this.readyState = "closed",
            this.id = null,
            this.emitReserved("close", e, r),
            this.writeBuffer = [],
            this._prevBufferLen = 0
        }
    }
}
Ar.protocol = jw;
class v_ extends Ar {
    constructor() {
        super(...arguments),
        this._upgrades = []
    }
    onOpen() {
        if (super.onOpen(),
        this.readyState === "open" && this.opts.upgrade)
            for (let e = 0; e < this._upgrades.length; e++)
                this._probe(this._upgrades[e])
    }
    _probe(e) {
        let r = this.createTransport(e)
          , i = !1;
        Ar.priorWebsocketSuccess = !1;
        const a = () => {
            i || (r.send([{
                type: "ping",
                data: "probe"
            }]),
            r.once("packet", y => {
                if (!i)
                    if (y.type === "pong" && y.data === "probe") {
                        if (this.upgrading = !0,
                        this.emitReserved("upgrading", r),
                        !r)
                            return;
                        Ar.priorWebsocketSuccess = r.name === "websocket",
                        this.transport.pause( () => {
                            i || this.readyState !== "closed" && (g(),
                            this.setTransport(r),
                            r.send([{
                                type: "upgrade"
                            }]),
                            this.emitReserved("upgrade", r),
                            r = null,
                            this.upgrading = !1,
                            this.flush())
                        }
                        )
                    } else {
                        const w = new Error("probe error");
                        w.transport = r.name,
                        this.emitReserved("upgradeError", w)
                    }
            }
            ))
        }
        ;
        function l() {
            i || (i = !0,
            g(),
            r.close(),
            r = null)
        }
        const c = y => {
            const w = new Error("probe error: " + y);
            w.transport = r.name,
            l(),
            this.emitReserved("upgradeError", w)
        }
        ;
        function d() {
            c("transport closed")
        }
        function h() {
            c("socket closed")
        }
        function m(y) {
            r && y.name !== r.name && l()
        }
        const g = () => {
            r.removeListener("open", a),
            r.removeListener("error", c),
            r.removeListener("close", d),
            this.off("close", h),
            this.off("upgrading", m)
        }
        ;
        r.once("open", a),
        r.once("error", c),
        r.once("close", d),
        this.once("close", h),
        this.once("upgrading", m),
        this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn( () => {
            i || r.open()
        }
        , 200) : r.open()
    }
    onHandshake(e) {
        this._upgrades = this._filterUpgrades(e.upgrades),
        super.onHandshake(e)
    }
    _filterUpgrades(e) {
        const r = [];
        for (let i = 0; i < e.length; i++)
            ~this.transports.indexOf(e[i]) && r.push(e[i]);
        return r
    }
}
let w_ = class extends v_ {
    constructor(e, r={}) {
        const i = typeof e == "object" ? e : r;
        (!i.transports || i.transports && typeof i.transports[0] == "string") && (i.transports = (i.transports || ["polling", "websocket", "webtransport"]).map(a => h_[a]).filter(a => !!a)),
        super(e, i)
    }
}
;
function x_(t, e="", r) {
    let i = t;
    r = r || typeof location < "u" && location,
    t == null && (t = r.protocol + "//" + r.host),
    typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = r.protocol + t : t = r.host + t),
    /^(https?|wss?):\/\//.test(t) || (typeof r < "u" ? t = r.protocol + "//" + t : t = "https://" + t),
    i = rf(t)),
    i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")),
    i.path = i.path || "/";
    const l = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
    return i.id = i.protocol + "://" + l + ":" + i.port + e,
    i.href = i.protocol + "://" + l + (r && r.port === i.port ? "" : ":" + i.port),
    i
}
const S_ = typeof ArrayBuffer == "function"
  , b_ = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer
  , Vw = Object.prototype.toString
  , k_ = typeof Blob == "function" || typeof Blob < "u" && Vw.call(Blob) === "[object BlobConstructor]"
  , E_ = typeof File == "function" || typeof File < "u" && Vw.call(File) === "[object FileConstructor]";
function qf(t) {
    return S_ && (t instanceof ArrayBuffer || b_(t)) || k_ && t instanceof Blob || E_ && t instanceof File
}
function Rl(t, e) {
    if (!t || typeof t != "object")
        return !1;
    if (Array.isArray(t)) {
        for (let r = 0, i = t.length; r < i; r++)
            if (Rl(t[r]))
                return !0;
        return !1
    }
    if (qf(t))
        return !0;
    if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
        return Rl(t.toJSON(), !0);
    for (const r in t)
        if (Object.prototype.hasOwnProperty.call(t, r) && Rl(t[r]))
            return !0;
    return !1
}
function T_(t) {
    const e = []
      , r = t.data
      , i = t;
    return i.data = of(r, e),
    i.attachments = e.length,
    {
        packet: i,
        buffers: e
    }
}
function of(t, e) {
    if (!t)
        return t;
    if (qf(t)) {
        const r = {
            _placeholder: !0,
            num: e.length
        };
        return e.push(t),
        r
    } else if (Array.isArray(t)) {
        const r = new Array(t.length);
        for (let i = 0; i < t.length; i++)
            r[i] = of(t[i], e);
        return r
    } else if (typeof t == "object" && !(t instanceof Date)) {
        const r = {};
        for (const i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (r[i] = of(t[i], e));
        return r
    }
    return t
}
function C_(t, e) {
    return t.data = af(t.data, e),
    delete t.attachments,
    t
}
function af(t, e) {
    if (!t)
        return t;
    if (t && t._placeholder === !0) {
        if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
            return e[t.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(t))
        for (let r = 0; r < t.length; r++)
            t[r] = af(t[r], e);
    else if (typeof t == "object")
        for (const r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (t[r] = af(t[r], e));
    return t
}
const P_ = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
var Te;
(function(t) {
    t[t.CONNECT = 0] = "CONNECT",
    t[t.DISCONNECT = 1] = "DISCONNECT",
    t[t.EVENT = 2] = "EVENT",
    t[t.ACK = 3] = "ACK",
    t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR",
    t[t.BINARY_EVENT = 5] = "BINARY_EVENT",
    t[t.BINARY_ACK = 6] = "BINARY_ACK"
}
)(Te || (Te = {}));
class __ {
    constructor(e) {
        this.replacer = e
    }
    encode(e) {
        return (e.type === Te.EVENT || e.type === Te.ACK) && Rl(e) ? this.encodeAsBinary({
            type: e.type === Te.EVENT ? Te.BINARY_EVENT : Te.BINARY_ACK,
            nsp: e.nsp,
            data: e.data,
            id: e.id
        }) : [this.encodeAsString(e)]
    }
    encodeAsString(e) {
        let r = "" + e.type;
        return (e.type === Te.BINARY_EVENT || e.type === Te.BINARY_ACK) && (r += e.attachments + "-"),
        e.nsp && e.nsp !== "/" && (r += e.nsp + ","),
        e.id != null && (r += e.id),
        e.data != null && (r += JSON.stringify(e.data, this.replacer)),
        r
    }
    encodeAsBinary(e) {
        const r = T_(e)
          , i = this.encodeAsString(r.packet)
          , a = r.buffers;
        return a.unshift(i),
        a
    }
}
class Wf extends Ze {
    constructor(e) {
        super(),
        this.reviver = e
    }
    add(e) {
        let r;
        if (typeof e == "string") {
            if (this.reconstructor)
                throw new Error("got plaintext data when reconstructing a packet");
            r = this.decodeString(e);
            const i = r.type === Te.BINARY_EVENT;
            i || r.type === Te.BINARY_ACK ? (r.type = i ? Te.EVENT : Te.ACK,
            this.reconstructor = new R_(r),
            r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r)
        } else if (qf(e) || e.base64)
            if (this.reconstructor)
                r = this.reconstructor.takeBinaryData(e),
                r && (this.reconstructor = null,
                super.emitReserved("decoded", r));
            else
                throw new Error("got binary data when not reconstructing a packet");
        else
            throw new Error("Unknown type: " + e)
    }
    decodeString(e) {
        let r = 0;
        const i = {
            type: Number(e.charAt(0))
        };
        if (Te[i.type] === void 0)
            throw new Error("unknown packet type " + i.type);
        if (i.type === Te.BINARY_EVENT || i.type === Te.BINARY_ACK) {
            const l = r + 1;
            for (; e.charAt(++r) !== "-" && r != e.length; )
                ;
            const c = e.substring(l, r);
            if (c != Number(c) || e.charAt(r) !== "-")
                throw new Error("Illegal attachments");
            i.attachments = Number(c)
        }
        if (e.charAt(r + 1) === "/") {
            const l = r + 1;
            for (; ++r && !(e.charAt(r) === "," || r === e.length); )
                ;
            i.nsp = e.substring(l, r)
        } else
            i.nsp = "/";
        const a = e.charAt(r + 1);
        if (a !== "" && Number(a) == a) {
            const l = r + 1;
            for (; ++r; ) {
                const c = e.charAt(r);
                if (c == null || Number(c) != c) {
                    --r;
                    break
                }
                if (r === e.length)
                    break
            }
            i.id = Number(e.substring(l, r + 1))
        }
        if (e.charAt(++r)) {
            const l = this.tryParse(e.substr(r));
            if (Wf.isPayloadValid(i.type, l))
                i.data = l;
            else
                throw new Error("invalid payload")
        }
        return i
    }
    tryParse(e) {
        try {
            return JSON.parse(e, this.reviver)
        } catch {
            return !1
        }
    }
    static isPayloadValid(e, r) {
        switch (e) {
        case Te.CONNECT:
            return Ay(r);
        case Te.DISCONNECT:
            return r === void 0;
        case Te.CONNECT_ERROR:
            return typeof r == "string" || Ay(r);
        case Te.EVENT:
        case Te.BINARY_EVENT:
            return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && P_.indexOf(r[0]) === -1);
        case Te.ACK:
        case Te.BINARY_ACK:
            return Array.isArray(r)
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(),
        this.reconstructor = null)
    }
}
class R_ {
    constructor(e) {
        this.packet = e,
        this.buffers = [],
        this.reconPack = e
    }
    takeBinaryData(e) {
        if (this.buffers.push(e),
        this.buffers.length === this.reconPack.attachments) {
            const r = C_(this.reconPack, this.buffers);
            return this.finishedReconstruction(),
            r
        }
        return null
    }
    finishedReconstruction() {
        this.reconPack = null,
        this.buffers = []
    }
}
function Ay(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
const A_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    Decoder: Wf,
    Encoder: __,
    get PacketType() {
        return Te
    }
}, Symbol.toStringTag, {
    value: "Module"
}));
function hn(t, e, r) {
    return t.on(e, r),
    function() {
        t.off(e, r)
    }
}
const N_ = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
});
class Uw extends Ze {
    constructor(e, r, i) {
        super(),
        this.connected = !1,
        this.recovered = !1,
        this.receiveBuffer = [],
        this.sendBuffer = [],
        this._queue = [],
        this._queueSeq = 0,
        this.ids = 0,
        this.acks = {},
        this.flags = {},
        this.io = e,
        this.nsp = r,
        i && i.auth && (this.auth = i.auth),
        this._opts = Object.assign({}, i),
        this.io._autoConnect && this.open()
    }
    get disconnected() {
        return !this.connected
    }
    subEvents() {
        if (this.subs)
            return;
        const e = this.io;
        this.subs = [hn(e, "open", this.onopen.bind(this)), hn(e, "packet", this.onpacket.bind(this)), hn(e, "error", this.onerror.bind(this)), hn(e, "close", this.onclose.bind(this))]
    }
    get active() {
        return !!this.subs
    }
    connect() {
        return this.connected ? this : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this)
    }
    open() {
        return this.connect()
    }
    send(...e) {
        return e.unshift("message"),
        this.emit.apply(this, e),
        this
    }
    emit(e, ...r) {
        var i, a, l;
        if (N_.hasOwnProperty(e))
            throw new Error('"' + e.toString() + '" is a reserved event name');
        if (r.unshift(e),
        this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
            return this._addToQueue(r),
            this;
        const c = {
            type: Te.EVENT,
            data: r
        };
        if (c.options = {},
        c.options.compress = this.flags.compress !== !1,
        typeof r[r.length - 1] == "function") {
            const g = this.ids++
              , y = r.pop();
            this._registerAckCallback(g, y),
            c.id = g
        }
        const d = (a = (i = this.io.engine) === null || i === void 0 ? void 0 : i.transport) === null || a === void 0 ? void 0 : a.writable
          , h = this.connected && !(!((l = this.io.engine) === null || l === void 0) && l._hasPingExpired());
        return this.flags.volatile && !d || (h ? (this.notifyOutgoingListeners(c),
        this.packet(c)) : this.sendBuffer.push(c)),
        this.flags = {},
        this
    }
    _registerAckCallback(e, r) {
        var i;
        const a = (i = this.flags.timeout) !== null && i !== void 0 ? i : this._opts.ackTimeout;
        if (a === void 0) {
            this.acks[e] = r;
            return
        }
        const l = this.io.setTimeoutFn( () => {
            delete this.acks[e];
            for (let d = 0; d < this.sendBuffer.length; d++)
                this.sendBuffer[d].id === e && this.sendBuffer.splice(d, 1);
            r.call(this, new Error("operation has timed out"))
        }
        , a)
          , c = (...d) => {
            this.io.clearTimeoutFn(l),
            r.apply(this, d)
        }
        ;
        c.withError = !0,
        this.acks[e] = c
    }
    emitWithAck(e, ...r) {
        return new Promise( (i, a) => {
            const l = (c, d) => c ? a(c) : i(d);
            l.withError = !0,
            r.push(l),
            this.emit(e, ...r)
        }
        )
    }
    _addToQueue(e) {
        let r;
        typeof e[e.length - 1] == "function" && (r = e.pop());
        const i = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: e,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        e.push( (a, ...l) => (this._queue[0],
        a !== null ? i.tryCount > this._opts.retries && (this._queue.shift(),
        r && r(a)) : (this._queue.shift(),
        r && r(null, ...l)),
        i.pending = !1,
        this._drainQueue())),
        this._queue.push(i),
        this._drainQueue()
    }
    _drainQueue(e=!1) {
        if (!this.connected || this._queue.length === 0)
            return;
        const r = this._queue[0];
        r.pending && !e || (r.pending = !0,
        r.tryCount++,
        this.flags = r.flags,
        this.emit.apply(this, r.args))
    }
    packet(e) {
        e.nsp = this.nsp,
        this.io._packet(e)
    }
    onopen() {
        typeof this.auth == "function" ? this.auth(e => {
            this._sendConnectPacket(e)
        }
        ) : this._sendConnectPacket(this.auth)
    }
    _sendConnectPacket(e) {
        this.packet({
            type: Te.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, e) : e
        })
    }
    onerror(e) {
        this.connected || this.emitReserved("connect_error", e)
    }
    onclose(e, r) {
        this.connected = !1,
        delete this.id,
        this.emitReserved("disconnect", e, r),
        this._clearAcks()
    }
    _clearAcks() {
        Object.keys(this.acks).forEach(e => {
            if (!this.sendBuffer.some(i => String(i.id) === e)) {
                const i = this.acks[e];
                delete this.acks[e],
                i.withError && i.call(this, new Error("socket has been disconnected"))
            }
        }
        )
    }
    onpacket(e) {
        if (e.nsp === this.nsp)
            switch (e.type) {
            case Te.CONNECT:
                e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case Te.EVENT:
            case Te.BINARY_EVENT:
                this.onevent(e);
                break;
            case Te.ACK:
            case Te.BINARY_ACK:
                this.onack(e);
                break;
            case Te.DISCONNECT:
                this.ondisconnect();
                break;
            case Te.CONNECT_ERROR:
                this.destroy();
                const i = new Error(e.data.message);
                i.data = e.data.data,
                this.emitReserved("connect_error", i);
                break
            }
    }
    onevent(e) {
        const r = e.data || [];
        e.id != null && r.push(this.ack(e.id)),
        this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r))
    }
    emitEvent(e) {
        if (this._anyListeners && this._anyListeners.length) {
            const r = this._anyListeners.slice();
            for (const i of r)
                i.apply(this, e)
        }
        super.emit.apply(this, e),
        this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1])
    }
    ack(e) {
        const r = this;
        let i = !1;
        return function(...a) {
            i || (i = !0,
            r.packet({
                type: Te.ACK,
                id: e,
                data: a
            }))
        }
    }
    onack(e) {
        const r = this.acks[e.id];
        typeof r == "function" && (delete this.acks[e.id],
        r.withError && e.data.unshift(null),
        r.apply(this, e.data))
    }
    onconnect(e, r) {
        this.id = e,
        this.recovered = r && this._pid === r,
        this._pid = r,
        this.connected = !0,
        this.emitBuffered(),
        this._drainQueue(!0),
        this.emitReserved("connect")
    }
    emitBuffered() {
        this.receiveBuffer.forEach(e => this.emitEvent(e)),
        this.receiveBuffer = [],
        this.sendBuffer.forEach(e => {
            this.notifyOutgoingListeners(e),
            this.packet(e)
        }
        ),
        this.sendBuffer = []
    }
    ondisconnect() {
        this.destroy(),
        this.onclose("io server disconnect")
    }
    destroy() {
        this.subs && (this.subs.forEach(e => e()),
        this.subs = void 0),
        this.io._destroy(this)
    }
    disconnect() {
        return this.connected && this.packet({
            type: Te.DISCONNECT
        }),
        this.destroy(),
        this.connected && this.onclose("io client disconnect"),
        this
    }
    close() {
        return this.disconnect()
    }
    compress(e) {
        return this.flags.compress = e,
        this
    }
    get volatile() {
        return this.flags.volatile = !0,
        this
    }
    timeout(e) {
        return this.flags.timeout = e,
        this
    }
    onAny(e) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.push(e),
        this
    }
    prependAny(e) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.unshift(e),
        this
    }
    offAny(e) {
        if (!this._anyListeners)
            return this;
        if (e) {
            const r = this._anyListeners;
            for (let i = 0; i < r.length; i++)
                if (e === r[i])
                    return r.splice(i, 1),
                    this
        } else
            this._anyListeners = [];
        return this
    }
    listenersAny() {
        return this._anyListeners || []
    }
    onAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.push(e),
        this
    }
    prependAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.unshift(e),
        this
    }
    offAnyOutgoing(e) {
        if (!this._anyOutgoingListeners)
            return this;
        if (e) {
            const r = this._anyOutgoingListeners;
            for (let i = 0; i < r.length; i++)
                if (e === r[i])
                    return r.splice(i, 1),
                    this
        } else
            this._anyOutgoingListeners = [];
        return this
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }
    notifyOutgoingListeners(e) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const r = this._anyOutgoingListeners.slice();
            for (const i of r)
                i.apply(this, e.data)
        }
    }
}
function vi(t) {
    t = t || {},
    this.ms = t.min || 100,
    this.max = t.max || 1e4,
    this.factor = t.factor || 2,
    this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0,
    this.attempts = 0
}
vi.prototype.duration = function() {
    var t = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var e = Math.random()
          , r = Math.floor(e * this.jitter * t);
        t = (Math.floor(e * 10) & 1) == 0 ? t - r : t + r
    }
    return Math.min(t, this.max) | 0
}
;
vi.prototype.reset = function() {
    this.attempts = 0
}
;
vi.prototype.setMin = function(t) {
    this.ms = t
}
;
vi.prototype.setMax = function(t) {
    this.max = t
}
;
vi.prototype.setJitter = function(t) {
    this.jitter = t
}
;
class lf extends Ze {
    constructor(e, r) {
        var i;
        super(),
        this.nsps = {},
        this.subs = [],
        e && typeof e == "object" && (r = e,
        e = void 0),
        r = r || {},
        r.path = r.path || "/socket.io",
        this.opts = r,
        nu(this, r),
        this.reconnection(r.reconnection !== !1),
        this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0),
        this.reconnectionDelay(r.reconnectionDelay || 1e3),
        this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3),
        this.randomizationFactor((i = r.randomizationFactor) !== null && i !== void 0 ? i : .5),
        this.backoff = new vi({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }),
        this.timeout(r.timeout == null ? 2e4 : r.timeout),
        this._readyState = "closed",
        this.uri = e;
        const a = r.parser || A_;
        this.encoder = new a.Encoder,
        this.decoder = new a.Decoder,
        this._autoConnect = r.autoConnect !== !1,
        this._autoConnect && this.open()
    }
    reconnection(e) {
        return arguments.length ? (this._reconnection = !!e,
        e || (this.skipReconnect = !0),
        this) : this._reconnection
    }
    reconnectionAttempts(e) {
        return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e,
        this)
    }
    reconnectionDelay(e) {
        var r;
        return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e,
        (r = this.backoff) === null || r === void 0 || r.setMin(e),
        this)
    }
    randomizationFactor(e) {
        var r;
        return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e,
        (r = this.backoff) === null || r === void 0 || r.setJitter(e),
        this)
    }
    reconnectionDelayMax(e) {
        var r;
        return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e,
        (r = this.backoff) === null || r === void 0 || r.setMax(e),
        this)
    }
    timeout(e) {
        return arguments.length ? (this._timeout = e,
        this) : this._timeout
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }
    open(e) {
        if (~this._readyState.indexOf("open"))
            return this;
        this.engine = new w_(this.uri,this.opts);
        const r = this.engine
          , i = this;
        this._readyState = "opening",
        this.skipReconnect = !1;
        const a = hn(r, "open", function() {
            i.onopen(),
            e && e()
        })
          , l = d => {
            this.cleanup(),
            this._readyState = "closed",
            this.emitReserved("error", d),
            e ? e(d) : this.maybeReconnectOnOpen()
        }
          , c = hn(r, "error", l);
        if (this._timeout !== !1) {
            const d = this._timeout
              , h = this.setTimeoutFn( () => {
                a(),
                l(new Error("timeout")),
                r.close()
            }
            , d);
            this.opts.autoUnref && h.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(h)
            }
            )
        }
        return this.subs.push(a),
        this.subs.push(c),
        this
    }
    connect(e) {
        return this.open(e)
    }
    onopen() {
        this.cleanup(),
        this._readyState = "open",
        this.emitReserved("open");
        const e = this.engine;
        this.subs.push(hn(e, "ping", this.onping.bind(this)), hn(e, "data", this.ondata.bind(this)), hn(e, "error", this.onerror.bind(this)), hn(e, "close", this.onclose.bind(this)), hn(this.decoder, "decoded", this.ondecoded.bind(this)))
    }
    onping() {
        this.emitReserved("ping")
    }
    ondata(e) {
        try {
            this.decoder.add(e)
        } catch (r) {
            this.onclose("parse error", r)
        }
    }
    ondecoded(e) {
        tu( () => {
            this.emitReserved("packet", e)
        }
        , this.setTimeoutFn)
    }
    onerror(e) {
        this.emitReserved("error", e)
    }
    socket(e, r) {
        let i = this.nsps[e];
        return i ? this._autoConnect && !i.active && i.connect() : (i = new Uw(this,e,r),
        this.nsps[e] = i),
        i
    }
    _destroy(e) {
        const r = Object.keys(this.nsps);
        for (const i of r)
            if (this.nsps[i].active)
                return;
        this._close()
    }
    _packet(e) {
        const r = this.encoder.encode(e);
        for (let i = 0; i < r.length; i++)
            this.engine.write(r[i], e.options)
    }
    cleanup() {
        this.subs.forEach(e => e()),
        this.subs.length = 0,
        this.decoder.destroy()
    }
    _close() {
        this.skipReconnect = !0,
        this._reconnecting = !1,
        this.onclose("forced close")
    }
    disconnect() {
        return this._close()
    }
    onclose(e, r) {
        var i;
        this.cleanup(),
        (i = this.engine) === null || i === void 0 || i.close(),
        this.backoff.reset(),
        this._readyState = "closed",
        this.emitReserved("close", e, r),
        this._reconnection && !this.skipReconnect && this.reconnect()
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const e = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
            this.emitReserved("reconnect_failed"),
            this._reconnecting = !1;
        else {
            const r = this.backoff.duration();
            this._reconnecting = !0;
            const i = this.setTimeoutFn( () => {
                e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts),
                !e.skipReconnect && e.open(a => {
                    a ? (e._reconnecting = !1,
                    e.reconnect(),
                    this.emitReserved("reconnect_error", a)) : e.onreconnect()
                }
                ))
            }
            , r);
            this.opts.autoUnref && i.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(i)
            }
            )
        }
    }
    onreconnect() {
        const e = this.backoff.attempts;
        this._reconnecting = !1,
        this.backoff.reset(),
        this.emitReserved("reconnect", e)
    }
}
const co = {};
function Al(t, e) {
    typeof t == "object" && (e = t,
    t = void 0),
    e = e || {};
    const r = x_(t, e.path || "/socket.io")
      , i = r.source
      , a = r.id
      , l = r.path
      , c = co[a] && l in co[a].nsps
      , d = e.forceNew || e["force new connection"] || e.multiplex === !1 || c;
    let h;
    return d ? h = new lf(i,e) : (co[a] || (co[a] = new lf(i,e)),
    h = co[a]),
    r.query && !e.query && (e.query = r.queryKey),
    h.socket(r.path, e)
}
Object.assign(Al, {
    Manager: lf,
    Socket: Uw,
    io: Al,
    connect: Al
});
function Ny(t, e) {
    var r;
    const i = Al(t.serverUrl, {
        path: t.mountPath,
        transports: t.transports,
        query: {
            app_id: t.appId,
            token: (r = t.token) !== null && r !== void 0 ? r : jo()
        }
    });
    return i.on("connect", async () => {
        var a;
        return console.log("connect", i.id),
        (a = e.connect) === null || a === void 0 ? void 0 : a.call(e)
    }
    ),
    i.on("update_model", async a => {
        var l;
        return (l = e.update_model) === null || l === void 0 ? void 0 : l.call(e, a)
    }
    ),
    i.on("error", async a => {
        var l;
        return (l = e.error) === null || l === void 0 ? void 0 : l.call(e, a)
    }
    ),
    i.on("connect_error", async a => {
        var l;
        return console.error("connect_error", a),
        (l = e.error) === null || l === void 0 ? void 0 : l.call(e, a)
    }
    ),
    i
}
function O_({config: t}) {
    let e = {
        ...t
    };
    const r = {}
      , i = {
        connect: async () => {
            const E = [];
            Object.keys(r).forEach(x => {
                h(x);
                const k = y(x);
                k == null || k.forEach( ({connect: S}) => {
                    const R = async () => S == null ? void 0 : S();
                    E.push(R())
                }
                )
            }
            ),
            await Promise.all(E)
        }
        ,
        update_model: async E => {
            const k = y(E.room).map(S => {
                var R;
                return (R = S.update_model) === null || R === void 0 ? void 0 : R.call(S, E)
            }
            );
            await Promise.all(k)
        }
        ,
        error: async E => {
            console.error("error", E);
            const x = Object.values(r).flat().map(k => {
                var S;
                return (S = k.error) === null || S === void 0 ? void 0 : S.call(k, E)
            }
            );
            await Promise.all(x)
        }
    };
    let a = Ny(t, i);
    function l() {
        c()
    }
    function c() {
        a && a.disconnect()
    }
    function d(E) {
        l(),
        e = {
            ...e,
            ...E
        },
        a = Ny(e, i)
    }
    function h(E) {
        a.emit("join", E)
    }
    function m(E) {
        a.emit("leave", E)
    }
    async function g(E, x) {
        var k;
        const S = JSON.stringify(x);
        return (k = i.update_model) === null || k === void 0 ? void 0 : k.call(i, {
            room: E,
            data: S
        })
    }
    function y(E) {
        return r[E]
    }
    return {
        socket: a,
        subscribeToRoom: (E, x) => (r[E] || (h(E),
        r[E] = []),
        r[E].push(x),
        () => {
            var k, S;
            r[E] = (S = (k = r[E]) === null || k === void 0 ? void 0 : k.filter(R => R !== x)) !== null && S !== void 0 ? S : [],
            r[E].length === 0 && m(E)
        }
        ),
        updateConfig: d,
        updateModel: g,
        disconnect: c
    }
}
const fo = typeof window < "u" ? window : {
    base44SharedInstances: {}
};
function j_(t, e) {
    return fo.base44SharedInstances || (fo.base44SharedInstances = {}),
    fo.base44SharedInstances[t] || (fo.base44SharedInstances[t] = {
        instance: e()
    }),
    fo.base44SharedInstances[t].instance
}
const L_ = "__user_heartbeat_event__"
  , M_ = "__initialization_event__"
  , D_ = "__session_duration_event__"
  , Oy = "analytics-enable"
  , jy = "base44_analytics_session_id"
  , I_ = {
    enabled: !0,
    maxQueueSize: 1e3,
    throttleTime: 1e3,
    batchSize: 30,
    heartBeatInterval: 60 * 1e3
}
  , F_ = "analytics"
  , Me = j_(F_, () => ({
    requestsQueue: [],
    isProcessing: !1,
    isHeartBeatProcessing: !1,
    wasInitializationTracked: !1,
    sessionContext: null,
    sessionStartTime: null,
    config: {
        ...I_,
        ...W_()
    }
}))
  , V_ = ({axiosClient: t, serverUrl: e, appId: r, userAuthModule: i}) => {
    var a;
    const {maxQueueSize: l, throttleTime: c, batchSize: d} = Me.config;
    if (!(!((a = Me.config) === null || a === void 0) && a.enabled))
        return {
            track: () => {}
            ,
            cleanup: () => {}
        };
    let h;
    const m = `${e}/api/apps/${r}/analytics/track/batch`
      , g = async L => {
        await t.request({
            method: "POST",
            url: `/apps/${r}/analytics/track/batch`,
            data: {
                events: L
            }
        })
    }
      , y = L => {
        try {
            const _ = JSON.stringify({
                events: L
            })
              , D = new Blob([_],{
                type: "application/json"
            });
            return typeof navigator > "u" || _.length > 6e4 || !navigator.sendBeacon(m, D)
        } catch {
            return !1
        }
    }
      , w = async (L, _={}) => {
        if (L.length === 0)
            return;
        const D = await q_(i)
          , K = L.map(H_(D));
        try {
            (!_.isBeacon || !y(K)) && await g(K)
        } catch {}
    }
      , E = () => {
        My(w, {
            throttleTime: c,
            batchSize: d
        })
    }
      , x = L => {
        if (Me.requestsQueue.length >= l)
            return;
        const _ = $_();
        Me.requestsQueue.push({
            ...L,
            ..._
        }),
        E()
    }
      , k = () => {
        My(w, {
            throttleTime: c,
            batchSize: d
        }),
        h = Dy(x),
        B_()
    }
      , S = () => {
        Ly(),
        h == null || h(),
        z_(x);
        const L = Me.requestsQueue.splice(0);
        w(L, {
            isBeacon: !0
        })
    }
      , R = () => {
        typeof window > "u" || (document.visibilityState === "hidden" ? S() : document.visibilityState === "visible" && k())
    }
      , U = () => {
        Ly(),
        h == null || h(),
        typeof window < "u" && window.removeEventListener("visibilitychange", R)
    }
    ;
    return E(),
    h = Dy(x),
    U_(x),
    typeof window < "u" && window.addEventListener("visibilitychange", R),
    {
        track: x,
        cleanup: U
    }
}
;
function Ly() {
    Me.isProcessing = !1
}
async function My(t, e) {
    if (Me.isProcessing)
        return;
    Me.isProcessing = !0;
    const {throttleTime: r=1e3, batchSize: i=30} = e ?? {};
    for (; Me.isProcessing && Me.requestsQueue.length > 0; ) {
        const a = Me.requestsQueue.splice(0, i);
        a.length && await t(a),
        await new Promise(l => setTimeout(l, r))
    }
    Me.isProcessing = !1
}
function Dy(t) {
    var e;
    if (Me.isHeartBeatProcessing || ((e = Me.config.heartBeatInterval) !== null && e !== void 0 ? e : 0) < 10)
        return () => {}
        ;
    Me.isHeartBeatProcessing = !0;
    const r = setInterval( () => {
        t({
            eventName: L_
        })
    }
    , Me.config.heartBeatInterval);
    return () => {
        clearInterval(r),
        Me.isHeartBeatProcessing = !1
    }
}
function U_(t) {
    typeof window > "u" || Me.wasInitializationTracked || (Me.wasInitializationTracked = !0,
    t({
        eventName: M_,
        properties: {
            referrer: document == null ? void 0 : document.referrer
        }
    }))
}
function B_() {
    typeof window > "u" || Me.sessionStartTime !== null || (Me.sessionStartTime = new Date().toISOString())
}
function z_(t) {
    if (typeof window > "u" || Me.sessionStartTime === null)
        return;
    const e = new Date().getTime() - new Date(Me.sessionStartTime).getTime();
    Me.sessionStartTime = null,
    t({
        eventName: D_,
        properties: {
            sessionDuration: e
        }
    })
}
function $_() {
    return {
        timestamp: new Date().toISOString(),
        pageUrl: typeof window < "u" ? window.location.pathname : null
    }
}
function H_(t) {
    return e => ({
        event_name: e.eventName,
        properties: e.properties,
        timestamp: e.timestamp,
        page_url: e.pageUrl,
        ...t
    })
}
let wd = null;
async function q_(t) {
    if (!Me.sessionContext) {
        if (!wd) {
            const e = K_();
            wd = t.me().then(r => ({
                user_id: r.id,
                session_id: e
            })).catch( () => ({
                user_id: null,
                session_id: e
            }))
        }
        Me.sessionContext = await wd
    }
    return Me.sessionContext
}
function W_() {
    if (typeof window > "u")
        return;
    const e = new URLSearchParams(window.location.search).get(Oy);
    if (e == null || !e.length)
        return;
    const r = new URLSearchParams(window.location.search);
    r.delete(Oy);
    const i = window.location.pathname + (r.toString() ? "?" + r.toString() : "");
    return window.history.replaceState({}, "", i),
    {
        enabled: e === "true"
    }
}
function K_() {
    if (typeof window > "u")
        return pd();
    try {
        const t = localStorage.getItem(jy);
        if (!t) {
            const e = pd();
            return localStorage.setItem(jy, e),
            e
        }
        return t
    } catch {
        return pd()
    }
}
function Q_(t) {
    var e, r;
    const {serverUrl: i="https://base44.app", appId: a, token: l, serviceToken: c, requiresAuth: d=!1, appBaseUrl: h, options: m, functionsVersion: g, headers: y} = t
      , w = typeof h == "string" ? h : ""
      , E = {
        serverUrl: i,
        mountPath: "/ws-user-apps/socket.io/",
        transports: ["websocket"],
        appId: a,
        token: l
    };
    let x = null;
    const k = () => (x || (x = O_({
        config: E
    })),
    x)
      , S = {
        ...y,
        "X-App-Id": String(a)
    }
      , R = g ? {
        ...S,
        "Base44-Functions-Version": g
    } : S
      , U = mo({
        baseURL: `${i}/api`,
        headers: S,
        token: l,
        onError: m == null ? void 0 : m.onError
    })
      , L = mo({
        baseURL: `${i}/api`,
        headers: R,
        token: l,
        interceptResponses: !1,
        onError: m == null ? void 0 : m.onError
    })
      , _ = {
        ...S,
        ...l ? {
            "on-behalf-of": `Bearer ${l}`
        } : {}
    }
      , D = mo({
        baseURL: `${i}/api`,
        headers: _,
        token: c,
        onError: m == null ? void 0 : m.onError
    })
      , K = mo({
        baseURL: `${i}/api`,
        headers: R,
        token: c,
        interceptResponses: !1
    })
      , Y = LP(U, L, a, {
        appBaseUrl: w
    })
      , I = {
        entities: Sy({
            axios: U,
            appId: a,
            getSocket: k
        }),
        integrations: by(U, a),
        connectors: IP(U, a),
        auth: Y,
        functions: ky(L, a, {
            getAuthHeaders: () => {
                const de = {}
                  , Ce = l || jo();
                return Ce && (de.Authorization = `Bearer ${Ce}`),
                de
            }
            ,
            baseURL: (e = L.defaults) === null || e === void 0 ? void 0 : e.baseURL
        }),
        agents: Ey({
            axios: U,
            getSocket: k,
            appId: a,
            serverUrl: i,
            token: l
        }),
        appLogs: Ty(U, a),
        users: VP(U, a),
        analytics: V_({
            axiosClient: U,
            serverUrl: i,
            appId: a,
            userAuthModule: Y
        }),
        cleanup: () => {
            I.analytics.cleanup(),
            x && x.disconnect()
        }
    }
      , J = {
        entities: Sy({
            axios: D,
            appId: a,
            getSocket: k
        }),
        integrations: by(D, a),
        sso: MP(D, a),
        connectors: DP(D, a),
        functions: ky(K, a, {
            getAuthHeaders: () => {
                const de = {};
                return c && (de.Authorization = `Bearer ${c}`),
                de
            }
            ,
            baseURL: (r = K.defaults) === null || r === void 0 ? void 0 : r.baseURL
        }),
        agents: Ey({
            axios: D,
            getSocket: k,
            appId: a,
            serverUrl: i,
            token: l
        }),
        appLogs: Ty(D, a),
        cleanup: () => {
            x && x.disconnect()
        }
    };
    if (typeof window < "u") {
        const de = l || jo();
        de && I.auth.setToken(de)
    }
    return d && typeof window < "u" && setTimeout(async () => {
        try {
            await I.auth.isAuthenticated() || I.auth.redirectToLogin(window.location.href)
        } catch (de) {
            console.error("Authentication check failed:", de),
            I.auth.redirectToLogin(window.location.href)
        }
    }
    , 0),
    {
        ...I,
        setToken(de) {
            I.auth.setToken(de),
            x && x.updateConfig({
                token: de
            }),
            E.token = de
        },
        getConfig() {
            return {
                serverUrl: i,
                appId: a,
                requiresAuth: d
            }
        },
        get asServiceRole() {
            if (!c)
                throw new Error("Service token is required to use asServiceRole. Please provide a serviceToken when creating the client.");
            return J
        }
    }
}
const Bw = typeof window > "u"
  , G_ = Bw ? {
    localStorage: new Map
} : window
  , ko = G_.localStorage
  , Y_ = t => t.replace(/([A-Z])/g, "_$1").toLowerCase()
  , qs = (t, {defaultValue: e=void 0, removeFromUrl: r=!1}={}) => {
    if (Bw)
        return e;
    const i = `base44_${Y_(t)}`
      , a = new URLSearchParams(window.location.search)
      , l = a.get(t);
    if (r) {
        a.delete(t);
        const d = `${window.location.pathname}${a.toString() ? `?${a.toString()}` : ""}${window.location.hash}`;
        window.history.replaceState({}, document.title, d)
    }
    if (l)
        return ko.setItem(i, l),
        l;
    if (e)
        return ko.setItem(i, e),
        e;
    const c = ko.getItem(i);
    return c || null
}
  , X_ = () => (qs("clear_access_token") === "true" && (ko.removeItem("base44_access_token"),
ko.removeItem("token")),
{
    appId: qs("app_id", {
        defaultValue: "69db7b293bde51b0308fcf26"
    }),
    token: qs("access_token", {
        removeFromUrl: !0
    }),
    fromUrl: qs("from_url", {
        defaultValue: window.location.href
    }),
    functionsVersion: qs("functions_version", {
        defaultValue: "prod"
    }),
    appBaseUrl: qs("app_base_url", {
        defaultValue: void 0
    })
})
  , yo = {
    ...X_()
}
  , {appId: J_, token: Z_, functionsVersion: eR, appBaseUrl: tR} = yo
  , Mt = Q_({
    appId: J_,
    token: Z_,
    functionsVersion: eR,
    serverUrl: "",
    requiresAuth: !1,
    appBaseUrl: tR
});
function nR({}) {
    var a;
    const e = Wo().pathname.substring(1)
      , {data: r, isFetched: i} = Kl({
        queryKey: ["user"],
        queryFn: async () => {
            try {
                return {
                    user: await Mt.auth.me(),
                    isAuthenticated: !0
                }
            } catch {
                return {
                    user: null,
                    isAuthenticated: !1
                }
            }
        }
    });
    return b.jsx("div", {
        className: "min-h-screen flex items-center justify-center p-6 bg-slate-50",
        children: b.jsx("div", {
            className: "max-w-md w-full",
            children: b.jsxs("div", {
                className: "text-center space-y-6",
                children: [b.jsxs("div", {
                    className: "space-y-2",
                    children: [b.jsx("h1", {
                        className: "text-7xl font-light text-slate-300",
                        children: "404"
                    }), b.jsx("div", {
                        className: "h-0.5 w-16 bg-slate-200 mx-auto"
                    })]
                }), b.jsxs("div", {
                    className: "space-y-3",
                    children: [b.jsx("h2", {
                        className: "text-2xl font-medium text-slate-800",
                        children: "Page Not Found"
                    }), b.jsxs("p", {
                        className: "text-slate-600 leading-relaxed",
                        children: ["The page ", b.jsxs("span", {
                            className: "font-medium text-slate-700",
                            children: ['"', e, '"']
                        }), " could not be found in this application."]
                    })]
                }), i && r.isAuthenticated && ((a = r.user) == null ? void 0 : a.role) === "admin" && b.jsx("div", {
                    className: "mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200",
                    children: b.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [b.jsx("div", {
                            className: "flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5",
                            children: b.jsx("div", {
                                className: "w-2 h-2 rounded-full bg-orange-400"
                            })
                        }), b.jsxs("div", {
                            className: "text-left space-y-1",
                            children: [b.jsx("p", {
                                className: "text-sm font-medium text-slate-700",
                                children: "Admin Note"
                            }), b.jsx("p", {
                                className: "text-sm text-slate-600 leading-relaxed",
                                children: "This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat."
                            })]
                        })]
                    })
                }), b.jsx("div", {
                    className: "pt-6",
                    children: b.jsxs("button", {
                        onClick: () => window.location.href = "/",
                        className: "inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500",
                        children: [b.jsx("svg", {
                            className: "w-4 h-4 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: b.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            })
                        }), "Go Home"]
                    })
                })]
            })
        })
    })
}
const zw = j.createContext()
  , rR = ({children: t}) => {
    const [e,r] = j.useState(null)
      , [i,a] = j.useState(!1)
      , [l,c] = j.useState(!0)
      , [d,h] = j.useState(!0)
      , [m,g] = j.useState(null)
      , [y,w] = j.useState(null);
    j.useEffect( () => {
        E()
    }
    , []);
    const E = async () => {
        var R, U;
        try {
            h(!0),
            g(null);
            const L = mo({
                baseURL: "/api/apps/public",
                headers: {
                    "X-App-Id": yo.appId
                },
                token: yo.token,
                interceptResponses: !0
            });
            try {
                const _ = await L.get(`/prod/public-settings/by-id/${yo.appId}`);
                w(_),
                yo.token ? await x() : (c(!1),
                a(!1)),
                h(!1)
            } catch (_) {
                if (console.error("App state check failed:", _),
                _.status === 403 && ((U = (R = _.data) == null ? void 0 : R.extra_data) != null && U.reason)) {
                    const D = _.data.extra_data.reason;
                    g(D === "auth_required" ? {
                        type: "auth_required",
                        message: "Authentication required"
                    } : D === "user_not_registered" ? {
                        type: "user_not_registered",
                        message: "User not registered for this app"
                    } : {
                        type: D,
                        message: _.message
                    })
                } else
                    g({
                        type: "unknown",
                        message: _.message || "Failed to load app"
                    });
                h(!1),
                c(!1)
            }
        } catch (L) {
            console.error("Unexpected error:", L),
            g({
                type: "unknown",
                message: L.message || "An unexpected error occurred"
            }),
            h(!1),
            c(!1)
        }
    }
      , x = async () => {
        try {
            c(!0);
            const R = await Mt.auth.me();
            r(R),
            a(!0),
            c(!1)
        } catch (R) {
            console.error("User auth check failed:", R),
            c(!1),
            a(!1),
            (R.status === 401 || R.status === 403) && g({
                type: "auth_required",
                message: "Authentication required"
            })
        }
    }
      , k = (R=!0) => {
        r(null),
        a(!1),
        R ? Mt.auth.logout(window.location.href) : Mt.auth.logout()
    }
      , S = () => {
        Mt.auth.redirectToLogin(window.location.href)
    }
    ;
    return b.jsx(zw.Provider, {
        value: {
            user: e,
            isAuthenticated: i,
            isLoadingAuth: l,
            isLoadingPublicSettings: d,
            authError: m,
            appPublicSettings: y,
            logout: k,
            navigateToLogin: S,
            checkAppState: E
        },
        children: t
    })
}
  , ru = () => {
    const t = j.useContext(zw);
    if (!t)
        throw new Error("useAuth must be used within an AuthProvider");
    return t
}
  , sR = () => b.jsx("div", {
    className: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50",
    children: b.jsx("div", {
        className: "max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100",
        children: b.jsxs("div", {
            className: "text-center",
            children: [b.jsx("div", {
                className: "inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100",
                children: b.jsx("svg", {
                    className: "w-8 h-8 text-orange-600",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: b.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    })
                })
            }), b.jsx("h1", {
                className: "text-3xl font-bold text-slate-900 mb-4",
                children: "Access Restricted"
            }), b.jsx("p", {
                className: "text-slate-600 mb-8",
                children: "You are not registered to use this application. Please contact the app administrator to request access."
            }), b.jsxs("div", {
                className: "p-4 bg-slate-50 rounded-md text-sm text-slate-600",
                children: [b.jsx("p", {
                    children: "If you believe this is an error, you can:"
                }), b.jsxs("ul", {
                    className: "list-disc list-inside mt-2 space-y-1",
                    children: [b.jsx("li", {
                        children: "Verify you are logged in with the correct account"
                    }), b.jsx("li", {
                        children: "Contact the app administrator for access"
                    }), b.jsx("li", {
                        children: "Try logging out and back in again"
                    })]
                })]
            })]
        })
    })
})
  , iR = "https://media.base44.com/images/public/user_68c04fee4b37d3d290b22a9a/a2e057fd8_image.png";
function oR({onSearch: t}) {
    const [e,r] = j.useState("")
      , {user: i} = ru()
      , l = !!localStorage.getItem("admin_session") || (i == null ? void 0 : i.role) === "admin" || (i == null ? void 0 : i.role) === "owner"
      , c = d => {
        r(d.target.value),
        t == null || t(d.target.value)
    }
    ;
    return b.jsx("nav", {
        className: "sticky top-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80",
        children: b.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: b.jsxs("div", {
                className: "flex items-center justify-between h-16",
                children: [b.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [(i == null ? void 0 : i.role) === "owner" && b.jsx(lo, {
                        to: "/owner",
                        className: "hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/15 border border-primary/30 text-xs font-bold text-primary hover:bg-primary/25 transition-colors uppercase tracking-wider",
                        children: "Dashboard"
                    }), b.jsxs(lo, {
                        to: "/",
                        className: "flex items-center gap-3 group",
                        children: [b.jsx("img", {
                            src: iR,
                            alt: "RainTiers",
                            className: "w-9 h-9 rounded-lg object-cover ring-1 ring-primary/30 group-hover:ring-primary/60 transition-all"
                        }), b.jsx("span", {
                            className: "font-heading text-2xl font-bold tracking-wide bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent",
                            children: "RainTiers"
                        })]
                    })]
                }), b.jsxs("div", {
                    className: "hidden md:flex items-center gap-6",
                    children: [b.jsx(lo, {
                        to: "/",
                        className: "text-sm font-medium text-foreground/80 hover:text-foreground transition-colors",
                        children: "Home"
                    }), l && b.jsx(lo, {
                        to: "/admin",
                        className: "text-sm font-medium text-primary hover:text-primary/80 transition-colors",
                        children: "Admin"
                    }), (i == null ? void 0 : i.role) === "owner" && b.jsx(lo, {
                        to: "/owner",
                        className: "text-sm font-medium text-yellow-400 hover:text-yellow-300 transition-colors",
                        children: "Owner"
                    }), b.jsxs("a", {
                        href: "https://discord.gg",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors",
                        children: [b.jsx("svg", {
                            className: "w-4 h-4",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            children: b.jsx("path", {
                                d: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"
                            })
                        }), "Discord"]
                    })]
                }), b.jsxs("div", {
                    className: "relative",
                    children: [b.jsx(rk, {
                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                    }), b.jsx("input", {
                        type: "text",
                        placeholder: "Search player name...",
                        value: e,
                        onChange: c,
                        className: "w-48 sm:w-64 pl-9 pr-4 py-2 text-sm bg-secondary/60 border border-border/50 rounded-lg placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                    })]
                })]
            })
        })
    })
}
const $w = j.createContext({});
function aR(t) {
    const e = j.useRef(null);
    return e.current === null && (e.current = t()),
    e.current
}
const Kf = j.createContext(null)
  , Hw = j.createContext({
    transformPagePoint: t => t,
    isStatic: !1,
    reducedMotion: "never"
});
function lR(t=!0) {
    const e = j.useContext(Kf);
    if (e === null)
        return [!0, null];
    const {isPresent: r, onExitComplete: i, register: a} = e
      , l = j.useId();
    j.useEffect( () => {
        t && a(l)
    }
    , [t]);
    const c = j.useCallback( () => t && i && i(l), [l, i, t]);
    return !r && i ? [!1, c] : [!0]
}
const Qf = typeof window < "u"
  , uR = Qf ? j.useLayoutEffect : j.useEffect
  , zt = t => t;
let qw = zt;
function Gf(t) {
    let e;
    return () => (e === void 0 && (e = t()),
    e)
}
const fi = (t, e, r) => {
    const i = e - t;
    return i === 0 ? 1 : (r - t) / i
}
  , $n = t => t * 1e3
  , Hn = t => t / 1e3
  , cR = {
    useManualTiming: !1
};
function dR(t) {
    let e = new Set
      , r = new Set
      , i = !1
      , a = !1;
    const l = new WeakSet;
    let c = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function d(m) {
        l.has(m) && (h.schedule(m),
        t()),
        m(c)
    }
    const h = {
        schedule: (m, g=!1, y=!1) => {
            const E = y && i ? e : r;
            return g && l.add(m),
            E.has(m) || E.add(m),
            m
        }
        ,
        cancel: m => {
            r.delete(m),
            l.delete(m)
        }
        ,
        process: m => {
            if (c = m,
            i) {
                a = !0;
                return
            }
            i = !0,
            [e,r] = [r, e],
            e.forEach(d),
            e.clear(),
            i = !1,
            a && (a = !1,
            h.process(m))
        }
    };
    return h
}
const vl = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , fR = 40;
function Ww(t, e) {
    let r = !1
      , i = !0;
    const a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = () => r = !0
      , c = vl.reduce( (R, U) => (R[U] = dR(l),
    R), {})
      , {read: d, resolveKeyframes: h, update: m, preRender: g, render: y, postRender: w} = c
      , E = () => {
        const R = performance.now();
        r = !1,
        a.delta = i ? 1e3 / 60 : Math.max(Math.min(R - a.timestamp, fR), 1),
        a.timestamp = R,
        a.isProcessing = !0,
        d.process(a),
        h.process(a),
        m.process(a),
        g.process(a),
        y.process(a),
        w.process(a),
        a.isProcessing = !1,
        r && e && (i = !1,
        t(E))
    }
      , x = () => {
        r = !0,
        i = !0,
        a.isProcessing || t(E)
    }
    ;
    return {
        schedule: vl.reduce( (R, U) => {
            const L = c[U];
            return R[U] = (_, D=!1, K=!1) => (r || x(),
            L.schedule(_, D, K)),
            R
        }
        , {}),
        cancel: R => {
            for (let U = 0; U < vl.length; U++)
                c[vl[U]].cancel(R)
        }
        ,
        state: a,
        steps: c
    }
}
const {schedule: Ue, cancel: Nr, state: ht, steps: xd} = Ww(typeof requestAnimationFrame < "u" ? requestAnimationFrame : zt, !0)
  , Kw = j.createContext({
    strict: !1
})
  , Iy = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , hi = {};
for (const t in Iy)
    hi[t] = {
        isEnabled: e => Iy[t].some(r => !!e[r])
    };
function hR(t) {
    for (const e in t)
        hi[e] = {
            ...hi[e],
            ...t[e]
        }
}
const pR = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Vl(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || pR.has(t)
}
let Qw = t => !Vl(t);
function mR(t) {
    t && (Qw = e => e.startsWith("on") ? !Vl(e) : t(e))
}
try {
    mR(require("@emotion/is-prop-valid").default)
} catch {}
function gR(t, e, r) {
    const i = {};
    for (const a in t)
        a === "values" && typeof t.values == "object" || (Qw(a) || r === !0 && Vl(a) || !e && !Vl(a) || t.draggable && a.startsWith("onDrag")) && (i[a] = t[a]);
    return i
}
function yR(t) {
    if (typeof Proxy > "u")
        return t;
    const e = new Map
      , r = (...i) => t(...i);
    return new Proxy(r,{
        get: (i, a) => a === "create" ? t : (e.has(a) || e.set(a, t(a)),
        e.get(a))
    })
}
const su = j.createContext({});
function Lo(t) {
    return typeof t == "string" || Array.isArray(t)
}
function iu(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
const Yf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Xf = ["initial", ...Yf];
function ou(t) {
    return iu(t.animate) || Xf.some(e => Lo(t[e]))
}
function Gw(t) {
    return !!(ou(t) || t.variants)
}
function vR(t, e) {
    if (ou(t)) {
        const {initial: r, animate: i} = t;
        return {
            initial: r === !1 || Lo(r) ? r : void 0,
            animate: Lo(i) ? i : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}
function wR(t) {
    const {initial: e, animate: r} = vR(t, j.useContext(su));
    return j.useMemo( () => ({
        initial: e,
        animate: r
    }), [Fy(e), Fy(r)])
}
function Fy(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const xR = Symbol.for("motionComponentSymbol");
function Ks(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
function SR(t, e, r) {
    return j.useCallback(i => {
        i && t.onMount && t.onMount(i),
        e && (i ? e.mount(i) : e.unmount()),
        r && (typeof r == "function" ? r(i) : Ks(r) && (r.current = i))
    }
    , [e])
}
const Jf = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , bR = "framerAppearId"
  , Yw = "data-" + Jf(bR)
  , {schedule: Zf} = Ww(queueMicrotask, !1)
  , Xw = j.createContext({});
function kR(t, e, r, i, a) {
    var l, c;
    const {visualElement: d} = j.useContext(su)
      , h = j.useContext(Kw)
      , m = j.useContext(Kf)
      , g = j.useContext(Hw).reducedMotion
      , y = j.useRef(null);
    i = i || h.renderer,
    !y.current && i && (y.current = i(t, {
        visualState: e,
        parent: d,
        props: r,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: g
    }));
    const w = y.current
      , E = j.useContext(Xw);
    w && !w.projection && a && (w.type === "html" || w.type === "svg") && ER(y.current, r, a, E);
    const x = j.useRef(!1);
    j.useInsertionEffect( () => {
        w && x.current && w.update(r, m)
    }
    );
    const k = r[Yw]
      , S = j.useRef(!!k && !(!((l = window.MotionHandoffIsComplete) === null || l === void 0) && l.call(window, k)) && ((c = window.MotionHasOptimisedAnimation) === null || c === void 0 ? void 0 : c.call(window, k)));
    return uR( () => {
        w && (x.current = !0,
        window.MotionIsMounted = !0,
        w.updateFeatures(),
        Zf.render(w.render),
        S.current && w.animationState && w.animationState.animateChanges())
    }
    ),
    j.useEffect( () => {
        w && (!S.current && w.animationState && w.animationState.animateChanges(),
        S.current && (queueMicrotask( () => {
            var R;
            (R = window.MotionHandoffMarkAsComplete) === null || R === void 0 || R.call(window, k)
        }
        ),
        S.current = !1))
    }
    ),
    w
}
function ER(t, e, r, i) {
    const {layoutId: a, layout: l, drag: c, dragConstraints: d, layoutScroll: h, layoutRoot: m} = e;
    t.projection = new r(t.latestValues,e["data-framer-portal-id"] ? void 0 : Jw(t.parent)),
    t.projection.setOptions({
        layoutId: a,
        layout: l,
        alwaysMeasureLayout: !!c || d && Ks(d),
        visualElement: t,
        animationType: typeof l == "string" ? l : "both",
        initialPromotionConfig: i,
        layoutScroll: h,
        layoutRoot: m
    })
}
function Jw(t) {
    if (t)
        return t.options.allowProjection !== !1 ? t.projection : Jw(t.parent)
}
function TR({preloadedFeatures: t, createVisualElement: e, useRender: r, useVisualState: i, Component: a}) {
    var l, c;
    t && hR(t);
    function d(m, g) {
        let y;
        const w = {
            ...j.useContext(Hw),
            ...m,
            layoutId: CR(m)
        }
          , {isStatic: E} = w
          , x = wR(m)
          , k = i(m, E);
        if (!E && Qf) {
            PR();
            const S = _R(w);
            y = S.MeasureLayout,
            x.visualElement = kR(a, k, w, e, S.ProjectionNode)
        }
        return b.jsxs(su.Provider, {
            value: x,
            children: [y && x.visualElement ? b.jsx(y, {
                visualElement: x.visualElement,
                ...w
            }) : null, r(a, m, SR(k, x.visualElement, g), k, E, x.visualElement)]
        })
    }
    d.displayName = `motion.${typeof a == "string" ? a : `create(${(c = (l = a.displayName) !== null && l !== void 0 ? l : a.name) !== null && c !== void 0 ? c : ""})`}`;
    const h = j.forwardRef(d);
    return h[xR] = a,
    h
}
function CR({layoutId: t}) {
    const e = j.useContext($w).id;
    return e && t !== void 0 ? e + "-" + t : t
}
function PR(t, e) {
    j.useContext(Kw).strict
}
function _R(t) {
    const {drag: e, layout: r} = hi;
    if (!e && !r)
        return {};
    const i = {
        ...e,
        ...r
    };
    return {
        MeasureLayout: e != null && e.isEnabled(t) || r != null && r.isEnabled(t) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
const RR = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function eh(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(RR.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
function Vy(t) {
    const e = [{}, {}];
    return t == null || t.values.forEach( (r, i) => {
        e[0][i] = r.get(),
        e[1][i] = r.getVelocity()
    }
    ),
    e
}
function th(t, e, r, i) {
    if (typeof e == "function") {
        const [a,l] = Vy(i);
        e = e(r !== void 0 ? r : t.custom, a, l)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function") {
        const [a,l] = Vy(i);
        e = e(r !== void 0 ? r : t.custom, a, l)
    }
    return e
}
const uf = t => Array.isArray(t)
  , AR = t => !!(t && typeof t == "object" && t.mix && t.toValue)
  , NR = t => uf(t) ? t[t.length - 1] || 0 : t
  , bt = t => !!(t && t.getVelocity);
function Nl(t) {
    const e = bt(t) ? t.get() : t;
    return AR(e) ? e.toValue() : e
}
function OR({scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: r}, i, a, l) {
    const c = {
        latestValues: jR(i, a, l, t),
        renderState: e()
    };
    return r && (c.onMount = d => r({
        props: i,
        current: d,
        ...c
    }),
    c.onUpdate = d => r(d)),
    c
}
const Zw = t => (e, r) => {
    const i = j.useContext(su)
      , a = j.useContext(Kf)
      , l = () => OR(t, e, i, a);
    return r ? l() : aR(l)
}
;
function jR(t, e, r, i) {
    const a = {}
      , l = i(t, {});
    for (const w in l)
        a[w] = Nl(l[w]);
    let {initial: c, animate: d} = t;
    const h = ou(t)
      , m = Gw(t);
    e && m && !h && t.inherit !== !1 && (c === void 0 && (c = e.initial),
    d === void 0 && (d = e.animate));
    let g = r ? r.initial === !1 : !1;
    g = g || c === !1;
    const y = g ? d : c;
    if (y && typeof y != "boolean" && !iu(y)) {
        const w = Array.isArray(y) ? y : [y];
        for (let E = 0; E < w.length; E++) {
            const x = th(t, w[E]);
            if (x) {
                const {transitionEnd: k, transition: S, ...R} = x;
                for (const U in R) {
                    let L = R[U];
                    if (Array.isArray(L)) {
                        const _ = g ? L.length - 1 : 0;
                        L = L[_]
                    }
                    L !== null && (a[U] = L)
                }
                for (const U in k)
                    a[U] = k[U]
            }
        }
    }
    return a
}
const wi = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , ws = new Set(wi)
  , ex = t => e => typeof e == "string" && e.startsWith(t)
  , tx = ex("--")
  , LR = ex("var(--")
  , nh = t => LR(t) ? MR.test(t.split("/*")[0].trim()) : !1
  , MR = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , nx = (t, e) => e && typeof t == "number" ? e.transform(t) : t
  , Wn = (t, e, r) => r > e ? e : r < t ? t : r
  , xi = {
    test: t => typeof t == "number",
    parse: parseFloat,
    transform: t => t
}
  , Mo = {
    ...xi,
    transform: t => Wn(0, 1, t)
}
  , wl = {
    ...xi,
    default: 1
}
  , Jo = t => ({
    test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: e => `${e}${t}`
})
  , yr = Jo("deg")
  , En = Jo("%")
  , ce = Jo("px")
  , DR = Jo("vh")
  , IR = Jo("vw")
  , Uy = {
    ...En,
    parse: t => En.parse(t) / 100,
    transform: t => En.transform(t * 100)
}
  , FR = {
    borderWidth: ce,
    borderTopWidth: ce,
    borderRightWidth: ce,
    borderBottomWidth: ce,
    borderLeftWidth: ce,
    borderRadius: ce,
    radius: ce,
    borderTopLeftRadius: ce,
    borderTopRightRadius: ce,
    borderBottomRightRadius: ce,
    borderBottomLeftRadius: ce,
    width: ce,
    maxWidth: ce,
    height: ce,
    maxHeight: ce,
    top: ce,
    right: ce,
    bottom: ce,
    left: ce,
    padding: ce,
    paddingTop: ce,
    paddingRight: ce,
    paddingBottom: ce,
    paddingLeft: ce,
    margin: ce,
    marginTop: ce,
    marginRight: ce,
    marginBottom: ce,
    marginLeft: ce,
    backgroundPositionX: ce,
    backgroundPositionY: ce
}
  , VR = {
    rotate: yr,
    rotateX: yr,
    rotateY: yr,
    rotateZ: yr,
    scale: wl,
    scaleX: wl,
    scaleY: wl,
    scaleZ: wl,
    skew: yr,
    skewX: yr,
    skewY: yr,
    distance: ce,
    translateX: ce,
    translateY: ce,
    translateZ: ce,
    x: ce,
    y: ce,
    z: ce,
    perspective: ce,
    transformPerspective: ce,
    opacity: Mo,
    originX: Uy,
    originY: Uy,
    originZ: ce
}
  , By = {
    ...xi,
    transform: Math.round
}
  , rh = {
    ...FR,
    ...VR,
    zIndex: By,
    size: ce,
    fillOpacity: Mo,
    strokeOpacity: Mo,
    numOctaves: By
}
  , UR = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , BR = wi.length;
function zR(t, e, r) {
    let i = ""
      , a = !0;
    for (let l = 0; l < BR; l++) {
        const c = wi[l]
          , d = t[c];
        if (d === void 0)
            continue;
        let h = !0;
        if (typeof d == "number" ? h = d === (c.startsWith("scale") ? 1 : 0) : h = parseFloat(d) === 0,
        !h || r) {
            const m = nx(d, rh[c]);
            if (!h) {
                a = !1;
                const g = UR[c] || c;
                i += `${g}(${m}) `
            }
            r && (e[c] = m)
        }
    }
    return i = i.trim(),
    r ? i = r(e, a ? "" : i) : a && (i = "none"),
    i
}
function sh(t, e, r) {
    const {style: i, vars: a, transformOrigin: l} = t;
    let c = !1
      , d = !1;
    for (const h in e) {
        const m = e[h];
        if (ws.has(h)) {
            c = !0;
            continue
        } else if (tx(h)) {
            a[h] = m;
            continue
        } else {
            const g = nx(m, rh[h]);
            h.startsWith("origin") ? (d = !0,
            l[h] = g) : i[h] = g
        }
    }
    if (e.transform || (c || r ? i.transform = zR(e, t.transform, r) : i.transform && (i.transform = "none")),
    d) {
        const {originX: h="50%", originY: m="50%", originZ: g=0} = l;
        i.transformOrigin = `${h} ${m} ${g}`
    }
}
const $R = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , HR = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function qR(t, e, r=1, i=0, a=!0) {
    t.pathLength = 1;
    const l = a ? $R : HR;
    t[l.offset] = ce.transform(-i);
    const c = ce.transform(e)
      , d = ce.transform(r);
    t[l.array] = `${c} ${d}`
}
function zy(t, e, r) {
    return typeof t == "string" ? t : ce.transform(e + r * t)
}
function WR(t, e, r) {
    const i = zy(e, t.x, t.width)
      , a = zy(r, t.y, t.height);
    return `${i} ${a}`
}
function ih(t, {attrX: e, attrY: r, attrScale: i, originX: a, originY: l, pathLength: c, pathSpacing: d=1, pathOffset: h=0, ...m}, g, y) {
    if (sh(t, m, y),
    g) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style,
    t.style = {};
    const {attrs: w, style: E, dimensions: x} = t;
    w.transform && (x && (E.transform = w.transform),
    delete w.transform),
    x && (a !== void 0 || l !== void 0 || E.transform) && (E.transformOrigin = WR(x, a !== void 0 ? a : .5, l !== void 0 ? l : .5)),
    e !== void 0 && (w.x = e),
    r !== void 0 && (w.y = r),
    i !== void 0 && (w.scale = i),
    c !== void 0 && qR(w, c, d, h, !1)
}
const oh = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , rx = () => ({
    ...oh(),
    attrs: {}
})
  , ah = t => typeof t == "string" && t.toLowerCase() === "svg";
function sx(t, {style: e, vars: r}, i, a) {
    Object.assign(t.style, e, a && a.getProjectionStyles(i));
    for (const l in r)
        t.style.setProperty(l, r[l])
}
const ix = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function ox(t, e, r, i) {
    sx(t, e, void 0, i);
    for (const a in e.attrs)
        t.setAttribute(ix.has(a) ? a : Jf(a), e.attrs[a])
}
const Ul = {};
function KR(t) {
    Object.assign(Ul, t)
}
function ax(t, {layout: e, layoutId: r}) {
    return ws.has(t) || t.startsWith("origin") || (e || r !== void 0) && (!!Ul[t] || t === "opacity")
}
function lh(t, e, r) {
    var i;
    const {style: a} = t
      , l = {};
    for (const c in a)
        (bt(a[c]) || e.style && bt(e.style[c]) || ax(c, t) || ((i = r == null ? void 0 : r.getValue(c)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (l[c] = a[c]);
    return l
}
function lx(t, e, r) {
    const i = lh(t, e, r);
    for (const a in t)
        if (bt(t[a]) || bt(e[a])) {
            const l = wi.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
            i[l] = t[a]
        }
    return i
}
function QR(t, e) {
    try {
        e.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
    } catch {
        e.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const $y = ["x", "y", "width", "height", "cx", "cy", "r"]
  , GR = {
    useVisualState: Zw({
        scrapeMotionValuesFromProps: lx,
        createRenderState: rx,
        onUpdate: ({props: t, prevProps: e, current: r, renderState: i, latestValues: a}) => {
            if (!r)
                return;
            let l = !!t.drag;
            if (!l) {
                for (const d in a)
                    if (ws.has(d)) {
                        l = !0;
                        break
                    }
            }
            if (!l)
                return;
            let c = !e;
            if (e)
                for (let d = 0; d < $y.length; d++) {
                    const h = $y[d];
                    t[h] !== e[h] && (c = !0)
                }
            c && Ue.read( () => {
                QR(r, i),
                Ue.render( () => {
                    ih(i, a, ah(r.tagName), t.transformTemplate),
                    ox(r, i)
                }
                )
            }
            )
        }
    })
}
  , YR = {
    useVisualState: Zw({
        scrapeMotionValuesFromProps: lh,
        createRenderState: oh
    })
};
function ux(t, e, r) {
    for (const i in e)
        !bt(e[i]) && !ax(i, r) && (t[i] = e[i])
}
function XR({transformTemplate: t}, e) {
    return j.useMemo( () => {
        const r = oh();
        return sh(r, e, t),
        Object.assign({}, r.vars, r.style)
    }
    , [e])
}
function JR(t, e) {
    const r = t.style || {}
      , i = {};
    return ux(i, r, t),
    Object.assign(i, XR(t, e)),
    i
}
function ZR(t, e) {
    const r = {}
      , i = JR(t, e);
    return t.drag && t.dragListener !== !1 && (r.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0),
    r.style = i,
    r
}
function eA(t, e, r, i) {
    const a = j.useMemo( () => {
        const l = rx();
        return ih(l, e, ah(i), t.transformTemplate),
        {
            ...l.attrs,
            style: {
                ...l.style
            }
        }
    }
    , [e]);
    if (t.style) {
        const l = {};
        ux(l, t.style, t),
        a.style = {
            ...l,
            ...a.style
        }
    }
    return a
}
function tA(t=!1) {
    return (r, i, a, {latestValues: l}, c) => {
        const h = (eh(r) ? eA : ZR)(i, l, c, r)
          , m = gR(i, typeof r == "string", t)
          , g = r !== j.Fragment ? {
            ...m,
            ...h,
            ref: a
        } : {}
          , {children: y} = i
          , w = j.useMemo( () => bt(y) ? y.get() : y, [y]);
        return j.createElement(r, {
            ...g,
            children: w
        })
    }
}
function nA(t, e) {
    return function(i, {forwardMotionProps: a}={
        forwardMotionProps: !1
    }) {
        const c = {
            ...eh(i) ? GR : YR,
            preloadedFeatures: t,
            useRender: tA(a),
            createVisualElement: e,
            Component: i
        };
        return TR(c)
    }
}
function cx(t, e) {
    if (!Array.isArray(e))
        return !1;
    const r = e.length;
    if (r !== t.length)
        return !1;
    for (let i = 0; i < r; i++)
        if (e[i] !== t[i])
            return !1;
    return !0
}
function au(t, e, r) {
    const i = t.getProps();
    return th(i, e, r !== void 0 ? r : i.custom, t)
}
const rA = Gf( () => window.ScrollTimeline !== void 0);
class sA {
    constructor(e) {
        this.stop = () => this.runAll("stop"),
        this.animations = e.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(e => "finished"in e ? e.finished : e))
    }
    getAll(e) {
        return this.animations[0][e]
    }
    setAll(e, r) {
        for (let i = 0; i < this.animations.length; i++)
            this.animations[i][e] = r
    }
    attachTimeline(e, r) {
        const i = this.animations.map(a => {
            if (rA() && a.attachTimeline)
                return a.attachTimeline(e);
            if (typeof r == "function")
                return r(a)
        }
        );
        return () => {
            i.forEach( (a, l) => {
                a && a(),
                this.animations[l].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(e) {
        this.setAll("time", e)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(e) {
        this.setAll("speed", e)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let e = 0;
        for (let r = 0; r < this.animations.length; r++)
            e = Math.max(e, this.animations[r].duration);
        return e
    }
    runAll(e) {
        this.animations.forEach(r => r[e]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class iA extends sA {
    then(e, r) {
        return Promise.all(this.animations).then(e).catch(r)
    }
}
function uh(t, e) {
    return t ? t[e] || t.default || t : void 0
}
const cf = 2e4;
function dx(t) {
    let e = 0;
    const r = 50;
    let i = t.next(e);
    for (; !i.done && e < cf; )
        e += r,
        i = t.next(e);
    return e >= cf ? 1 / 0 : e
}
function ch(t) {
    return typeof t == "function"
}
function Hy(t, e) {
    t.timeline = e,
    t.onfinish = null
}
const dh = t => Array.isArray(t) && typeof t[0] == "number"
  , oA = {
    linearEasing: void 0
};
function aA(t, e) {
    const r = Gf(t);
    return () => {
        var i;
        return (i = oA[e]) !== null && i !== void 0 ? i : r()
    }
}
const Bl = aA( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , fx = (t, e, r=10) => {
    let i = "";
    const a = Math.max(Math.round(e / r), 2);
    for (let l = 0; l < a; l++)
        i += t(fi(0, a - 1, l)) + ", ";
    return `linear(${i.substring(0, i.length - 2)})`
}
;
function hx(t) {
    return !!(typeof t == "function" && Bl() || !t || typeof t == "string" && (t in df || Bl()) || dh(t) || Array.isArray(t) && t.every(hx))
}
const vo = ([t,e,r,i]) => `cubic-bezier(${t}, ${e}, ${r}, ${i})`
  , df = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: vo([0, .65, .55, 1]),
    circOut: vo([.55, 0, 1, .45]),
    backIn: vo([.31, .01, .66, -.59]),
    backOut: vo([.33, 1.53, .69, .99])
};
function px(t, e) {
    if (t)
        return typeof t == "function" && Bl() ? fx(t, e) : dh(t) ? vo(t) : Array.isArray(t) ? t.map(r => px(r, e) || df.easeOut) : df[t]
}
const cn = {
    x: !1,
    y: !1
};
function mx() {
    return cn.x || cn.y
}
function lA(t, e, r) {
    var i;
    if (t instanceof Element)
        return [t];
    if (typeof t == "string") {
        let a = document;
        const l = (i = void 0) !== null && i !== void 0 ? i : a.querySelectorAll(t);
        return l ? Array.from(l) : []
    }
    return Array.from(t)
}
function gx(t, e) {
    const r = lA(t)
      , i = new AbortController
      , a = {
        passive: !0,
        ...e,
        signal: i.signal
    };
    return [r, a, () => i.abort()]
}
function qy(t) {
    return e => {
        e.pointerType === "touch" || mx() || t(e)
    }
}
function uA(t, e, r={}) {
    const [i,a,l] = gx(t, r)
      , c = qy(d => {
        const {target: h} = d
          , m = e(d);
        if (typeof m != "function" || !h)
            return;
        const g = qy(y => {
            m(y),
            h.removeEventListener("pointerleave", g)
        }
        );
        h.addEventListener("pointerleave", g, a)
    }
    );
    return i.forEach(d => {
        d.addEventListener("pointerenter", c, a)
    }
    ),
    l
}
const yx = (t, e) => e ? t === e ? !0 : yx(t, e.parentElement) : !1
  , fh = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1
  , cA = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function dA(t) {
    return cA.has(t.tagName) || t.tabIndex !== -1
}
const wo = new WeakSet;
function Wy(t) {
    return e => {
        e.key === "Enter" && t(e)
    }
}
function Sd(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const fA = (t, e) => {
    const r = t.currentTarget;
    if (!r)
        return;
    const i = Wy( () => {
        if (wo.has(r))
            return;
        Sd(r, "down");
        const a = Wy( () => {
            Sd(r, "up")
        }
        )
          , l = () => Sd(r, "cancel");
        r.addEventListener("keyup", a, e),
        r.addEventListener("blur", l, e)
    }
    );
    r.addEventListener("keydown", i, e),
    r.addEventListener("blur", () => r.removeEventListener("keydown", i), e)
}
;
function Ky(t) {
    return fh(t) && !mx()
}
function hA(t, e, r={}) {
    const [i,a,l] = gx(t, r)
      , c = d => {
        const h = d.currentTarget;
        if (!Ky(d) || wo.has(h))
            return;
        wo.add(h);
        const m = e(d)
          , g = (E, x) => {
            window.removeEventListener("pointerup", y),
            window.removeEventListener("pointercancel", w),
            !(!Ky(E) || !wo.has(h)) && (wo.delete(h),
            typeof m == "function" && m(E, {
                success: x
            }))
        }
          , y = E => {
            g(E, r.useGlobalTarget || yx(h, E.target))
        }
          , w = E => {
            g(E, !1)
        }
        ;
        window.addEventListener("pointerup", y, a),
        window.addEventListener("pointercancel", w, a)
    }
    ;
    return i.forEach(d => {
        !dA(d) && d.getAttribute("tabindex") === null && (d.tabIndex = 0),
        (r.useGlobalTarget ? window : d).addEventListener("pointerdown", c, a),
        d.addEventListener("focus", m => fA(m, a), a)
    }
    ),
    l
}
function pA(t) {
    return t === "x" || t === "y" ? cn[t] ? null : (cn[t] = !0,
    () => {
        cn[t] = !1
    }
    ) : cn.x || cn.y ? null : (cn.x = cn.y = !0,
    () => {
        cn.x = cn.y = !1
    }
    )
}
const vx = new Set(["width", "height", "top", "left", "right", "bottom", ...wi]);
let Ol;
function mA() {
    Ol = void 0
}
const Tn = {
    now: () => (Ol === void 0 && Tn.set(ht.isProcessing || cR.useManualTiming ? ht.timestamp : performance.now()),
    Ol),
    set: t => {
        Ol = t,
        queueMicrotask(mA)
    }
};
function hh(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}
function ph(t, e) {
    const r = t.indexOf(e);
    r > -1 && t.splice(r, 1)
}
class mh {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return hh(this.subscriptions, e),
        () => ph(this.subscriptions, e)
    }
    notify(e, r, i) {
        const a = this.subscriptions.length;
        if (a)
            if (a === 1)
                this.subscriptions[0](e, r, i);
            else
                for (let l = 0; l < a; l++) {
                    const c = this.subscriptions[l];
                    c && c(e, r, i)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
function wx(t, e) {
    return e ? t * (1e3 / e) : 0
}
const Qy = 30
  , gA = t => !isNaN(parseFloat(t));
class yA {
    constructor(e, r={}) {
        this.version = "11.18.2",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (i, a=!0) => {
            const l = Tn.now();
            this.updatedAt !== l && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(i),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            a && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(e),
        this.owner = r.owner
    }
    setCurrent(e) {
        this.current = e,
        this.updatedAt = Tn.now(),
        this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = gA(this.current))
    }
    setPrevFrameValue(e=this.current) {
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, r) {
        this.events[e] || (this.events[e] = new mh);
        const i = this.events[e].add(r);
        return e === "change" ? () => {
            i(),
            Ue.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : i
    }
    clearListeners() {
        for (const e in this.events)
            this.events[e].clear()
    }
    attach(e, r) {
        this.passiveEffect = e,
        this.stopPassiveEffect = r
    }
    set(e, r=!0) {
        !r || !this.passiveEffect ? this.updateAndNotify(e, r) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, r, i) {
        this.set(r),
        this.prev = void 0,
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt - i
    }
    jump(e, r=!0) {
        this.updateAndNotify(e),
        this.prev = e,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        r && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const e = Tn.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Qy)
            return 0;
        const r = Math.min(this.updatedAt - this.prevUpdatedAt, Qy);
        return wx(parseFloat(this.current) - parseFloat(this.prevFrameValue), r)
    }
    start(e) {
        return this.stop(),
        new Promise(r => {
            this.hasAnimated = !0,
            this.animation = e(r),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Do(t, e) {
    return new yA(t,e)
}
function vA(t, e, r) {
    t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, Do(r))
}
function wA(t, e) {
    const r = au(t, e);
    let {transitionEnd: i={}, transition: a={}, ...l} = r || {};
    l = {
        ...l,
        ...i
    };
    for (const c in l) {
        const d = NR(l[c]);
        vA(t, c, d)
    }
}
function xA(t) {
    return !!(bt(t) && t.add)
}
function ff(t, e) {
    const r = t.getValue("willChange");
    if (xA(r))
        return r.add(e)
}
function xx(t) {
    return t.props[Yw]
}
const Sx = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t
  , SA = 1e-7
  , bA = 12;
function kA(t, e, r, i, a) {
    let l, c, d = 0;
    do
        c = e + (r - e) / 2,
        l = Sx(c, i, a) - t,
        l > 0 ? r = c : e = c;
    while (Math.abs(l) > SA && ++d < bA);
    return c
}
function Zo(t, e, r, i) {
    if (t === e && r === i)
        return zt;
    const a = l => kA(l, 0, 1, t, r);
    return l => l === 0 || l === 1 ? l : Sx(a(l), e, i)
}
const bx = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
  , kx = t => e => 1 - t(1 - e)
  , Ex = Zo(.33, 1.53, .69, .99)
  , gh = kx(Ex)
  , Tx = bx(gh)
  , Cx = t => (t *= 2) < 1 ? .5 * gh(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
  , yh = t => 1 - Math.sin(Math.acos(t))
  , Px = kx(yh)
  , _x = bx(yh)
  , Rx = t => /^0[^.\s]+$/u.test(t);
function EA(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Rx(t) : !0
}
const Eo = t => Math.round(t * 1e5) / 1e5
  , vh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function TA(t) {
    return t == null
}
const CA = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , wh = (t, e) => r => !!(typeof r == "string" && CA.test(r) && r.startsWith(t) || e && !TA(r) && Object.prototype.hasOwnProperty.call(r, e))
  , Ax = (t, e, r) => i => {
    if (typeof i != "string")
        return i;
    const [a,l,c,d] = i.match(vh);
    return {
        [t]: parseFloat(a),
        [e]: parseFloat(l),
        [r]: parseFloat(c),
        alpha: d !== void 0 ? parseFloat(d) : 1
    }
}
  , PA = t => Wn(0, 255, t)
  , bd = {
    ...xi,
    transform: t => Math.round(PA(t))
}
  , ts = {
    test: wh("rgb", "red"),
    parse: Ax("red", "green", "blue"),
    transform: ({red: t, green: e, blue: r, alpha: i=1}) => "rgba(" + bd.transform(t) + ", " + bd.transform(e) + ", " + bd.transform(r) + ", " + Eo(Mo.transform(i)) + ")"
};
function _A(t) {
    let e = ""
      , r = ""
      , i = ""
      , a = "";
    return t.length > 5 ? (e = t.substring(1, 3),
    r = t.substring(3, 5),
    i = t.substring(5, 7),
    a = t.substring(7, 9)) : (e = t.substring(1, 2),
    r = t.substring(2, 3),
    i = t.substring(3, 4),
    a = t.substring(4, 5),
    e += e,
    r += r,
    i += i,
    a += a),
    {
        red: parseInt(e, 16),
        green: parseInt(r, 16),
        blue: parseInt(i, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1
    }
}
const hf = {
    test: wh("#"),
    parse: _A,
    transform: ts.transform
}
  , Qs = {
    test: wh("hsl", "hue"),
    parse: Ax("hue", "saturation", "lightness"),
    transform: ({hue: t, saturation: e, lightness: r, alpha: i=1}) => "hsla(" + Math.round(t) + ", " + En.transform(Eo(e)) + ", " + En.transform(Eo(r)) + ", " + Eo(Mo.transform(i)) + ")"
}
  , xt = {
    test: t => ts.test(t) || hf.test(t) || Qs.test(t),
    parse: t => ts.test(t) ? ts.parse(t) : Qs.test(t) ? Qs.parse(t) : hf.parse(t),
    transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? ts.transform(t) : Qs.transform(t)
}
  , RA = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function AA(t) {
    var e, r;
    return isNaN(t) && typeof t == "string" && (((e = t.match(vh)) === null || e === void 0 ? void 0 : e.length) || 0) + (((r = t.match(RA)) === null || r === void 0 ? void 0 : r.length) || 0) > 0
}
const Nx = "number"
  , Ox = "color"
  , NA = "var"
  , OA = "var("
  , Gy = "${}"
  , jA = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Io(t) {
    const e = t.toString()
      , r = []
      , i = {
        color: [],
        number: [],
        var: []
    }
      , a = [];
    let l = 0;
    const d = e.replace(jA, h => (xt.test(h) ? (i.color.push(l),
    a.push(Ox),
    r.push(xt.parse(h))) : h.startsWith(OA) ? (i.var.push(l),
    a.push(NA),
    r.push(h)) : (i.number.push(l),
    a.push(Nx),
    r.push(parseFloat(h))),
    ++l,
    Gy)).split(Gy);
    return {
        values: r,
        split: d,
        indexes: i,
        types: a
    }
}
function jx(t) {
    return Io(t).values
}
function Lx(t) {
    const {split: e, types: r} = Io(t)
      , i = e.length;
    return a => {
        let l = "";
        for (let c = 0; c < i; c++)
            if (l += e[c],
            a[c] !== void 0) {
                const d = r[c];
                d === Nx ? l += Eo(a[c]) : d === Ox ? l += xt.transform(a[c]) : l += a[c]
            }
        return l
    }
}
const LA = t => typeof t == "number" ? 0 : t;
function MA(t) {
    const e = jx(t);
    return Lx(t)(e.map(LA))
}
const Or = {
    test: AA,
    parse: jx,
    createTransformer: Lx,
    getAnimatableNone: MA
}
  , DA = new Set(["brightness", "contrast", "saturate", "opacity"]);
function IA(t) {
    const [e,r] = t.slice(0, -1).split("(");
    if (e === "drop-shadow")
        return t;
    const [i] = r.match(vh) || [];
    if (!i)
        return t;
    const a = r.replace(i, "");
    let l = DA.has(e) ? 1 : 0;
    return i !== r && (l *= 100),
    e + "(" + l + a + ")"
}
const FA = /\b([a-z-]*)\(.*?\)/gu
  , pf = {
    ...Or,
    getAnimatableNone: t => {
        const e = t.match(FA);
        return e ? e.map(IA).join(" ") : t
    }
}
  , VA = {
    ...rh,
    color: xt,
    backgroundColor: xt,
    outlineColor: xt,
    fill: xt,
    stroke: xt,
    borderColor: xt,
    borderTopColor: xt,
    borderRightColor: xt,
    borderBottomColor: xt,
    borderLeftColor: xt,
    filter: pf,
    WebkitFilter: pf
}
  , xh = t => VA[t];
function Mx(t, e) {
    let r = xh(t);
    return r !== pf && (r = Or),
    r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
}
const UA = new Set(["auto", "none", "0"]);
function BA(t, e, r) {
    let i = 0, a;
    for (; i < t.length && !a; ) {
        const l = t[i];
        typeof l == "string" && !UA.has(l) && Io(l).values.length && (a = t[i]),
        i++
    }
    if (a && r)
        for (const l of e)
            t[l] = Mx(r, a)
}
const Yy = t => t === xi || t === ce
  , Xy = (t, e) => parseFloat(t.split(", ")[e])
  , Jy = (t, e) => (r, {transform: i}) => {
    if (i === "none" || !i)
        return 0;
    const a = i.match(/^matrix3d\((.+)\)$/u);
    if (a)
        return Xy(a[1], e);
    {
        const l = i.match(/^matrix\((.+)\)$/u);
        return l ? Xy(l[1], t) : 0
    }
}
  , zA = new Set(["x", "y", "z"])
  , $A = wi.filter(t => !zA.has(t));
function HA(t) {
    const e = [];
    return $A.forEach(r => {
        const i = t.getValue(r);
        i !== void 0 && (e.push([r, i.get()]),
        i.set(r.startsWith("scale") ? 1 : 0))
    }
    ),
    e
}
const pi = {
    width: ({x: t}, {paddingLeft: e="0", paddingRight: r="0"}) => t.max - t.min - parseFloat(e) - parseFloat(r),
    height: ({y: t}, {paddingTop: e="0", paddingBottom: r="0"}) => t.max - t.min - parseFloat(e) - parseFloat(r),
    top: (t, {top: e}) => parseFloat(e),
    left: (t, {left: e}) => parseFloat(e),
    bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
    right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
    x: Jy(4, 13),
    y: Jy(5, 14)
};
pi.translateX = pi.x;
pi.translateY = pi.y;
const fs = new Set;
let mf = !1
  , gf = !1;
function Dx() {
    if (gf) {
        const t = Array.from(fs).filter(i => i.needsMeasurement)
          , e = new Set(t.map(i => i.element))
          , r = new Map;
        e.forEach(i => {
            const a = HA(i);
            a.length && (r.set(i, a),
            i.render())
        }
        ),
        t.forEach(i => i.measureInitialState()),
        e.forEach(i => {
            i.render();
            const a = r.get(i);
            a && a.forEach( ([l,c]) => {
                var d;
                (d = i.getValue(l)) === null || d === void 0 || d.set(c)
            }
            )
        }
        ),
        t.forEach(i => i.measureEndState()),
        t.forEach(i => {
            i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY)
        }
        )
    }
    gf = !1,
    mf = !1,
    fs.forEach(t => t.complete()),
    fs.clear()
}
function Ix() {
    fs.forEach(t => {
        t.readKeyframes(),
        t.needsMeasurement && (gf = !0)
    }
    )
}
function qA() {
    Ix(),
    Dx()
}
class Sh {
    constructor(e, r, i, a, l, c=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...e],
        this.onComplete = r,
        this.name = i,
        this.motionValue = a,
        this.element = l,
        this.isAsync = c
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (fs.add(this),
        mf || (mf = !0,
        Ue.read(Ix),
        Ue.resolveKeyframes(Dx))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, name: r, element: i, motionValue: a} = this;
        for (let l = 0; l < e.length; l++)
            if (e[l] === null)
                if (l === 0) {
                    const c = a == null ? void 0 : a.get()
                      , d = e[e.length - 1];
                    if (c !== void 0)
                        e[0] = c;
                    else if (i && r) {
                        const h = i.readValue(r, d);
                        h != null && (e[0] = h)
                    }
                    e[0] === void 0 && (e[0] = d),
                    a && c === void 0 && a.set(e[0])
                } else
                    e[l] = e[l - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        fs.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        fs.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Fx = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
  , WA = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function KA(t) {
    const e = WA.exec(t);
    if (!e)
        return [, ];
    const [,r,i,a] = e;
    return [`--${r ?? i}`, a]
}
function Vx(t, e, r=1) {
    const [i,a] = KA(t);
    if (!i)
        return;
    const l = window.getComputedStyle(e).getPropertyValue(i);
    if (l) {
        const c = l.trim();
        return Fx(c) ? parseFloat(c) : c
    }
    return nh(a) ? Vx(a, e, r + 1) : a
}
const Ux = t => e => e.test(t)
  , QA = {
    test: t => t === "auto",
    parse: t => t
}
  , Bx = [xi, ce, En, yr, IR, DR, QA]
  , Zy = t => Bx.find(Ux(t));
class zx extends Sh {
    constructor(e, r, i, a, l) {
        super(e, r, i, a, l, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, element: r, name: i} = this;
        if (!r || !r.current)
            return;
        super.readKeyframes();
        for (let h = 0; h < e.length; h++) {
            let m = e[h];
            if (typeof m == "string" && (m = m.trim(),
            nh(m))) {
                const g = Vx(m, r.current);
                g !== void 0 && (e[h] = g),
                h === e.length - 1 && (this.finalKeyframe = m)
            }
        }
        if (this.resolveNoneKeyframes(),
        !vx.has(i) || e.length !== 2)
            return;
        const [a,l] = e
          , c = Zy(a)
          , d = Zy(l);
        if (c !== d)
            if (Yy(c) && Yy(d))
                for (let h = 0; h < e.length; h++) {
                    const m = e[h];
                    typeof m == "string" && (e[h] = parseFloat(m))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: e, name: r} = this
          , i = [];
        for (let a = 0; a < e.length; a++)
            EA(e[a]) && i.push(a);
        i.length && BA(e, i, r)
    }
    measureInitialState() {
        const {element: e, unresolvedKeyframes: r, name: i} = this;
        if (!e || !e.current)
            return;
        i === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = pi[i](e.measureViewportBox(), window.getComputedStyle(e.current)),
        r[0] = this.measuredOrigin;
        const a = r[r.length - 1];
        a !== void 0 && e.getValue(i, a).jump(a, !1)
    }
    measureEndState() {
        var e;
        const {element: r, name: i, unresolvedKeyframes: a} = this;
        if (!r || !r.current)
            return;
        const l = r.getValue(i);
        l && l.jump(this.measuredOrigin, !1);
        const c = a.length - 1
          , d = a[c];
        a[c] = pi[i](r.measureViewportBox(), window.getComputedStyle(r.current)),
        d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
        !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach( ([h,m]) => {
            r.getValue(h).set(m)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const ev = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Or.test(t) || t === "0") && !t.startsWith("url("));
function GA(t) {
    const e = t[0];
    if (t.length === 1)
        return !0;
    for (let r = 0; r < t.length; r++)
        if (t[r] !== e)
            return !0
}
function YA(t, e, r, i) {
    const a = t[0];
    if (a === null)
        return !1;
    if (e === "display" || e === "visibility")
        return !0;
    const l = t[t.length - 1]
      , c = ev(a, e)
      , d = ev(l, e);
    return !c || !d ? !1 : GA(t) || (r === "spring" || ch(r)) && i
}
const XA = t => t !== null;
function lu(t, {repeat: e, repeatType: r="loop"}, i) {
    const a = t.filter(XA)
      , l = e && r !== "loop" && e % 2 === 1 ? 0 : a.length - 1;
    return !l || i === void 0 ? a[l] : i
}
const JA = 40;
class $x {
    constructor({autoplay: e=!0, delay: r=0, type: i="keyframes", repeat: a=0, repeatDelay: l=0, repeatType: c="loop", ...d}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = Tn.now(),
        this.options = {
            autoplay: e,
            delay: r,
            type: i,
            repeat: a,
            repeatDelay: l,
            repeatType: c,
            ...d
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > JA ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && qA(),
        this._resolved
    }
    onKeyframesResolved(e, r) {
        this.resolvedAt = Tn.now(),
        this.hasAttemptedResolve = !0;
        const {name: i, type: a, velocity: l, delay: c, onComplete: d, onUpdate: h, isGenerator: m} = this.options;
        if (!m && !YA(e, i, a, l))
            if (c)
                this.options.duration = 0;
            else {
                h && h(lu(e, this.options, r)),
                d && d(),
                this.resolveFinishedPromise();
                return
            }
        const g = this.initPlayback(e, r);
        g !== !1 && (this._resolved = {
            keyframes: e,
            finalKeyframe: r,
            ...g
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(e, r) {
        return this.currentFinishedPromise.then(e, r)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(e => {
            this.resolveFinishedPromise = e
        }
        )
    }
}
const He = (t, e, r) => t + (e - t) * r;
function kd(t, e, r) {
    return r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
}
function ZA({hue: t, saturation: e, lightness: r, alpha: i}) {
    t /= 360,
    e /= 100,
    r /= 100;
    let a = 0
      , l = 0
      , c = 0;
    if (!e)
        a = l = c = r;
    else {
        const d = r < .5 ? r * (1 + e) : r + e - r * e
          , h = 2 * r - d;
        a = kd(h, d, t + 1 / 3),
        l = kd(h, d, t),
        c = kd(h, d, t - 1 / 3)
    }
    return {
        red: Math.round(a * 255),
        green: Math.round(l * 255),
        blue: Math.round(c * 255),
        alpha: i
    }
}
function zl(t, e) {
    return r => r > 0 ? e : t
}
const Ed = (t, e, r) => {
    const i = t * t
      , a = r * (e * e - i) + i;
    return a < 0 ? 0 : Math.sqrt(a)
}
  , e2 = [hf, ts, Qs]
  , t2 = t => e2.find(e => e.test(t));
function tv(t) {
    const e = t2(t);
    if (!e)
        return !1;
    let r = e.parse(t);
    return e === Qs && (r = ZA(r)),
    r
}
const nv = (t, e) => {
    const r = tv(t)
      , i = tv(e);
    if (!r || !i)
        return zl(t, e);
    const a = {
        ...r
    };
    return l => (a.red = Ed(r.red, i.red, l),
    a.green = Ed(r.green, i.green, l),
    a.blue = Ed(r.blue, i.blue, l),
    a.alpha = He(r.alpha, i.alpha, l),
    ts.transform(a))
}
  , n2 = (t, e) => r => e(t(r))
  , ea = (...t) => t.reduce(n2)
  , yf = new Set(["none", "hidden"]);
function r2(t, e) {
    return yf.has(t) ? r => r <= 0 ? t : e : r => r >= 1 ? e : t
}
function s2(t, e) {
    return r => He(t, e, r)
}
function bh(t) {
    return typeof t == "number" ? s2 : typeof t == "string" ? nh(t) ? zl : xt.test(t) ? nv : a2 : Array.isArray(t) ? Hx : typeof t == "object" ? xt.test(t) ? nv : i2 : zl
}
function Hx(t, e) {
    const r = [...t]
      , i = r.length
      , a = t.map( (l, c) => bh(l)(l, e[c]));
    return l => {
        for (let c = 0; c < i; c++)
            r[c] = a[c](l);
        return r
    }
}
function i2(t, e) {
    const r = {
        ...t,
        ...e
    }
      , i = {};
    for (const a in r)
        t[a] !== void 0 && e[a] !== void 0 && (i[a] = bh(t[a])(t[a], e[a]));
    return a => {
        for (const l in i)
            r[l] = i[l](a);
        return r
    }
}
function o2(t, e) {
    var r;
    const i = []
      , a = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let l = 0; l < e.values.length; l++) {
        const c = e.types[l]
          , d = t.indexes[c][a[c]]
          , h = (r = t.values[d]) !== null && r !== void 0 ? r : 0;
        i[l] = h,
        a[c]++
    }
    return i
}
const a2 = (t, e) => {
    const r = Or.createTransformer(e)
      , i = Io(t)
      , a = Io(e);
    return i.indexes.var.length === a.indexes.var.length && i.indexes.color.length === a.indexes.color.length && i.indexes.number.length >= a.indexes.number.length ? yf.has(t) && !a.values.length || yf.has(e) && !i.values.length ? r2(t, e) : ea(Hx(o2(i, a), a.values), r) : zl(t, e)
}
;
function qx(t, e, r) {
    return typeof t == "number" && typeof e == "number" && typeof r == "number" ? He(t, e, r) : bh(t)(t, e)
}
const l2 = 5;
function Wx(t, e, r) {
    const i = Math.max(e - l2, 0);
    return wx(r - t(i), e - i)
}
const Ke = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , Td = .001;
function u2({duration: t=Ke.duration, bounce: e=Ke.bounce, velocity: r=Ke.velocity, mass: i=Ke.mass}) {
    let a, l, c = 1 - e;
    c = Wn(Ke.minDamping, Ke.maxDamping, c),
    t = Wn(Ke.minDuration, Ke.maxDuration, Hn(t)),
    c < 1 ? (a = m => {
        const g = m * c
          , y = g * t
          , w = g - r
          , E = vf(m, c)
          , x = Math.exp(-y);
        return Td - w / E * x
    }
    ,
    l = m => {
        const y = m * c * t
          , w = y * r + r
          , E = Math.pow(c, 2) * Math.pow(m, 2) * t
          , x = Math.exp(-y)
          , k = vf(Math.pow(m, 2), c);
        return (-a(m) + Td > 0 ? -1 : 1) * ((w - E) * x) / k
    }
    ) : (a = m => {
        const g = Math.exp(-m * t)
          , y = (m - r) * t + 1;
        return -Td + g * y
    }
    ,
    l = m => {
        const g = Math.exp(-m * t)
          , y = (r - m) * (t * t);
        return g * y
    }
    );
    const d = 5 / t
      , h = d2(a, l, d);
    if (t = $n(t),
    isNaN(h))
        return {
            stiffness: Ke.stiffness,
            damping: Ke.damping,
            duration: t
        };
    {
        const m = Math.pow(h, 2) * i;
        return {
            stiffness: m,
            damping: c * 2 * Math.sqrt(i * m),
            duration: t
        }
    }
}
const c2 = 12;
function d2(t, e, r) {
    let i = r;
    for (let a = 1; a < c2; a++)
        i = i - t(i) / e(i);
    return i
}
function vf(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const f2 = ["duration", "bounce"]
  , h2 = ["stiffness", "damping", "mass"];
function rv(t, e) {
    return e.some(r => t[r] !== void 0)
}
function p2(t) {
    let e = {
        velocity: Ke.velocity,
        stiffness: Ke.stiffness,
        damping: Ke.damping,
        mass: Ke.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!rv(t, h2) && rv(t, f2))
        if (t.visualDuration) {
            const r = t.visualDuration
              , i = 2 * Math.PI / (r * 1.2)
              , a = i * i
              , l = 2 * Wn(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(a);
            e = {
                ...e,
                mass: Ke.mass,
                stiffness: a,
                damping: l
            }
        } else {
            const r = u2(t);
            e = {
                ...e,
                ...r,
                mass: Ke.mass
            },
            e.isResolvedFromDuration = !0
        }
    return e
}
function Kx(t=Ke.visualDuration, e=Ke.bounce) {
    const r = typeof t != "object" ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: e
    } : t;
    let {restSpeed: i, restDelta: a} = r;
    const l = r.keyframes[0]
      , c = r.keyframes[r.keyframes.length - 1]
      , d = {
        done: !1,
        value: l
    }
      , {stiffness: h, damping: m, mass: g, duration: y, velocity: w, isResolvedFromDuration: E} = p2({
        ...r,
        velocity: -Hn(r.velocity || 0)
    })
      , x = w || 0
      , k = m / (2 * Math.sqrt(h * g))
      , S = c - l
      , R = Hn(Math.sqrt(h / g))
      , U = Math.abs(S) < 5;
    i || (i = U ? Ke.restSpeed.granular : Ke.restSpeed.default),
    a || (a = U ? Ke.restDelta.granular : Ke.restDelta.default);
    let L;
    if (k < 1) {
        const D = vf(R, k);
        L = K => {
            const Y = Math.exp(-k * R * K);
            return c - Y * ((x + k * R * S) / D * Math.sin(D * K) + S * Math.cos(D * K))
        }
    } else if (k === 1)
        L = D => c - Math.exp(-R * D) * (S + (x + R * S) * D);
    else {
        const D = R * Math.sqrt(k * k - 1);
        L = K => {
            const Y = Math.exp(-k * R * K)
              , I = Math.min(D * K, 300);
            return c - Y * ((x + k * R * S) * Math.sinh(I) + D * S * Math.cosh(I)) / D
        }
    }
    const _ = {
        calculatedDuration: E && y || null,
        next: D => {
            const K = L(D);
            if (E)
                d.done = D >= y;
            else {
                let Y = 0;
                k < 1 && (Y = D === 0 ? $n(x) : Wx(L, D, K));
                const I = Math.abs(Y) <= i
                  , J = Math.abs(c - K) <= a;
                d.done = I && J
            }
            return d.value = d.done ? c : K,
            d
        }
        ,
        toString: () => {
            const D = Math.min(dx(_), cf)
              , K = fx(Y => _.next(D * Y).value, D, 30);
            return D + "ms " + K
        }
    };
    return _
}
function sv({keyframes: t, velocity: e=0, power: r=.8, timeConstant: i=325, bounceDamping: a=10, bounceStiffness: l=500, modifyTarget: c, min: d, max: h, restDelta: m=.5, restSpeed: g}) {
    const y = t[0]
      , w = {
        done: !1,
        value: y
    }
      , E = I => d !== void 0 && I < d || h !== void 0 && I > h
      , x = I => d === void 0 ? h : h === void 0 || Math.abs(d - I) < Math.abs(h - I) ? d : h;
    let k = r * e;
    const S = y + k
      , R = c === void 0 ? S : c(S);
    R !== S && (k = R - y);
    const U = I => -k * Math.exp(-I / i)
      , L = I => R + U(I)
      , _ = I => {
        const J = U(I)
          , me = L(I);
        w.done = Math.abs(J) <= m,
        w.value = w.done ? R : me
    }
    ;
    let D, K;
    const Y = I => {
        E(w.value) && (D = I,
        K = Kx({
            keyframes: [w.value, x(w.value)],
            velocity: Wx(L, I, w.value),
            damping: a,
            stiffness: l,
            restDelta: m,
            restSpeed: g
        }))
    }
    ;
    return Y(0),
    {
        calculatedDuration: null,
        next: I => {
            let J = !1;
            return !K && D === void 0 && (J = !0,
            _(I),
            Y(I)),
            D !== void 0 && I >= D ? K.next(I - D) : (!J && _(I),
            w)
        }
    }
}
const m2 = Zo(.42, 0, 1, 1)
  , g2 = Zo(0, 0, .58, 1)
  , Qx = Zo(.42, 0, .58, 1)
  , y2 = t => Array.isArray(t) && typeof t[0] != "number"
  , v2 = {
    linear: zt,
    easeIn: m2,
    easeInOut: Qx,
    easeOut: g2,
    circIn: yh,
    circInOut: _x,
    circOut: Px,
    backIn: gh,
    backInOut: Tx,
    backOut: Ex,
    anticipate: Cx
}
  , iv = t => {
    if (dh(t)) {
        qw(t.length === 4);
        const [e,r,i,a] = t;
        return Zo(e, r, i, a)
    } else if (typeof t == "string")
        return v2[t];
    return t
}
;
function w2(t, e, r) {
    const i = []
      , a = r || qx
      , l = t.length - 1;
    for (let c = 0; c < l; c++) {
        let d = a(t[c], t[c + 1]);
        if (e) {
            const h = Array.isArray(e) ? e[c] || zt : e;
            d = ea(h, d)
        }
        i.push(d)
    }
    return i
}
function x2(t, e, {clamp: r=!0, ease: i, mixer: a}={}) {
    const l = t.length;
    if (qw(l === e.length),
    l === 1)
        return () => e[0];
    if (l === 2 && e[0] === e[1])
        return () => e[1];
    const c = t[0] === t[1];
    t[0] > t[l - 1] && (t = [...t].reverse(),
    e = [...e].reverse());
    const d = w2(e, i, a)
      , h = d.length
      , m = g => {
        if (c && g < t[0])
            return e[0];
        let y = 0;
        if (h > 1)
            for (; y < t.length - 2 && !(g < t[y + 1]); y++)
                ;
        const w = fi(t[y], t[y + 1], g);
        return d[y](w)
    }
    ;
    return r ? g => m(Wn(t[0], t[l - 1], g)) : m
}
function S2(t, e) {
    const r = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
        const a = fi(0, e, i);
        t.push(He(r, 1, a))
    }
}
function b2(t) {
    const e = [0];
    return S2(e, t.length - 1),
    e
}
function k2(t, e) {
    return t.map(r => r * e)
}
function E2(t, e) {
    return t.map( () => e || Qx).splice(0, t.length - 1)
}
function $l({duration: t=300, keyframes: e, times: r, ease: i="easeInOut"}) {
    const a = y2(i) ? i.map(iv) : iv(i)
      , l = {
        done: !1,
        value: e[0]
    }
      , c = k2(r && r.length === e.length ? r : b2(e), t)
      , d = x2(c, e, {
        ease: Array.isArray(a) ? a : E2(e, a)
    });
    return {
        calculatedDuration: t,
        next: h => (l.value = d(h),
        l.done = h >= t,
        l)
    }
}
const T2 = t => {
    const e = ({timestamp: r}) => t(r);
    return {
        start: () => Ue.update(e, !0),
        stop: () => Nr(e),
        now: () => ht.isProcessing ? ht.timestamp : Tn.now()
    }
}
  , C2 = {
    decay: sv,
    inertia: sv,
    tween: $l,
    keyframes: $l,
    spring: Kx
}
  , P2 = t => t / 100;
class kh extends $x {
    constructor(e) {
        super(e),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: h} = this.options;
            h && h()
        }
        ;
        const {name: r, motionValue: i, element: a, keyframes: l} = this.options
          , c = (a == null ? void 0 : a.KeyframeResolver) || Sh
          , d = (h, m) => this.onKeyframesResolved(h, m);
        this.resolver = new c(l,d,r,i,a),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(e) {
        const {type: r="keyframes", repeat: i=0, repeatDelay: a=0, repeatType: l, velocity: c=0} = this.options
          , d = ch(r) ? r : C2[r] || $l;
        let h, m;
        d !== $l && typeof e[0] != "number" && (h = ea(P2, qx(e[0], e[1])),
        e = [0, 100]);
        const g = d({
            ...this.options,
            keyframes: e
        });
        l === "mirror" && (m = d({
            ...this.options,
            keyframes: [...e].reverse(),
            velocity: -c
        })),
        g.calculatedDuration === null && (g.calculatedDuration = dx(g));
        const {calculatedDuration: y} = g
          , w = y + a
          , E = w * (i + 1) - a;
        return {
            generator: g,
            mirroredGenerator: m,
            mapPercentToKeyframes: h,
            calculatedDuration: y,
            resolvedDuration: w,
            totalDuration: E
        }
    }
    onPostResolved() {
        const {autoplay: e=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
    }
    tick(e, r=!1) {
        const {resolved: i} = this;
        if (!i) {
            const {keyframes: I} = this.options;
            return {
                done: !0,
                value: I[I.length - 1]
            }
        }
        const {finalKeyframe: a, generator: l, mirroredGenerator: c, mapPercentToKeyframes: d, keyframes: h, calculatedDuration: m, totalDuration: g, resolvedDuration: y} = i;
        if (this.startTime === null)
            return l.next(0);
        const {delay: w, repeat: E, repeatType: x, repeatDelay: k, onUpdate: S} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - g / this.speed, this.startTime)),
        r ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
        const R = this.currentTime - w * (this.speed >= 0 ? 1 : -1)
          , U = this.speed >= 0 ? R < 0 : R > g;
        this.currentTime = Math.max(R, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = g);
        let L = this.currentTime
          , _ = l;
        if (E) {
            const I = Math.min(this.currentTime, g) / y;
            let J = Math.floor(I)
              , me = I % 1;
            !me && I >= 1 && (me = 1),
            me === 1 && J--,
            J = Math.min(J, E + 1),
            !!(J % 2) && (x === "reverse" ? (me = 1 - me,
            k && (me -= k / y)) : x === "mirror" && (_ = c)),
            L = Wn(0, 1, me) * y
        }
        const D = U ? {
            done: !1,
            value: h[0]
        } : _.next(L);
        d && (D.value = d(D.value));
        let {done: K} = D;
        !U && m !== null && (K = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
        const Y = this.holdTime === null && (this.state === "finished" || this.state === "running" && K);
        return Y && a !== void 0 && (D.value = lu(h, this.options, a)),
        S && S(D.value),
        Y && this.finish(),
        D
    }
    get duration() {
        const {resolved: e} = this;
        return e ? Hn(e.calculatedDuration) : 0
    }
    get time() {
        return Hn(this.currentTime)
    }
    set time(e) {
        e = $n(e),
        this.currentTime = e,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        const r = this.playbackSpeed !== e;
        this.playbackSpeed = e,
        r && (this.time = Hn(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: e=T2, onPlay: r, startTime: i} = this.options;
        this.driver || (this.driver = e(l => this.tick(l))),
        r && r();
        const a = this.driver.now();
        this.holdTime !== null ? this.startTime = a - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = a) : this.startTime = i ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var e;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: e} = this.options;
        e && e()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0,
        this.tick(e, !0)
    }
}
const _2 = new Set(["opacity", "clipPath", "filter", "transform"]);
function R2(t, e, r, {delay: i=0, duration: a=300, repeat: l=0, repeatType: c="loop", ease: d="easeInOut", times: h}={}) {
    const m = {
        [e]: r
    };
    h && (m.offset = h);
    const g = px(d, a);
    return Array.isArray(g) && (m.easing = g),
    t.animate(m, {
        delay: i,
        duration: a,
        easing: Array.isArray(g) ? "linear" : g,
        fill: "both",
        iterations: l + 1,
        direction: c === "reverse" ? "alternate" : "normal"
    })
}
const A2 = Gf( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , Hl = 10
  , N2 = 2e4;
function O2(t) {
    return ch(t.type) || t.type === "spring" || !hx(t.ease)
}
function j2(t, e) {
    const r = new kh({
        ...e,
        keyframes: t,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let i = {
        done: !1,
        value: t[0]
    };
    const a = [];
    let l = 0;
    for (; !i.done && l < N2; )
        i = r.sample(l),
        a.push(i.value),
        l += Hl;
    return {
        times: void 0,
        keyframes: a,
        duration: l - Hl,
        ease: "linear"
    }
}
const Gx = {
    anticipate: Cx,
    backInOut: Tx,
    circInOut: _x
};
function L2(t) {
    return t in Gx
}
class ov extends $x {
    constructor(e) {
        super(e);
        const {name: r, motionValue: i, element: a, keyframes: l} = this.options;
        this.resolver = new zx(l, (c, d) => this.onKeyframesResolved(c, d),r,i,a),
        this.resolver.scheduleResolve()
    }
    initPlayback(e, r) {
        let {duration: i=300, times: a, ease: l, type: c, motionValue: d, name: h, startTime: m} = this.options;
        if (!d.owner || !d.owner.current)
            return !1;
        if (typeof l == "string" && Bl() && L2(l) && (l = Gx[l]),
        O2(this.options)) {
            const {onComplete: y, onUpdate: w, motionValue: E, element: x, ...k} = this.options
              , S = j2(e, k);
            e = S.keyframes,
            e.length === 1 && (e[1] = e[0]),
            i = S.duration,
            a = S.times,
            l = S.ease,
            c = "keyframes"
        }
        const g = R2(d.owner.current, h, e, {
            ...this.options,
            duration: i,
            times: a,
            ease: l
        });
        return g.startTime = m ?? this.calcStartTime(),
        this.pendingTimeline ? (Hy(g, this.pendingTimeline),
        this.pendingTimeline = void 0) : g.onfinish = () => {
            const {onComplete: y} = this.options;
            d.set(lu(e, this.options, r)),
            y && y(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: g,
            duration: i,
            times: a,
            type: c,
            ease: l,
            keyframes: e
        }
    }
    get duration() {
        const {resolved: e} = this;
        if (!e)
            return 0;
        const {duration: r} = e;
        return Hn(r)
    }
    get time() {
        const {resolved: e} = this;
        if (!e)
            return 0;
        const {animation: r} = e;
        return Hn(r.currentTime || 0)
    }
    set time(e) {
        const {resolved: r} = this;
        if (!r)
            return;
        const {animation: i} = r;
        i.currentTime = $n(e)
    }
    get speed() {
        const {resolved: e} = this;
        if (!e)
            return 1;
        const {animation: r} = e;
        return r.playbackRate
    }
    set speed(e) {
        const {resolved: r} = this;
        if (!r)
            return;
        const {animation: i} = r;
        i.playbackRate = e
    }
    get state() {
        const {resolved: e} = this;
        if (!e)
            return "idle";
        const {animation: r} = e;
        return r.playState
    }
    get startTime() {
        const {resolved: e} = this;
        if (!e)
            return null;
        const {animation: r} = e;
        return r.startTime
    }
    attachTimeline(e) {
        if (!this._resolved)
            this.pendingTimeline = e;
        else {
            const {resolved: r} = this;
            if (!r)
                return zt;
            const {animation: i} = r;
            Hy(i, e)
        }
        return zt
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: r} = e;
        r.playState === "finished" && this.updateFinishedPromise(),
        r.play()
    }
    pause() {
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: r} = e;
        r.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: r, keyframes: i, duration: a, type: l, ease: c, times: d} = e;
        if (r.playState === "idle" || r.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: m, onUpdate: g, onComplete: y, element: w, ...E} = this.options
              , x = new kh({
                ...E,
                keyframes: i,
                duration: a,
                type: l,
                ease: c,
                times: d,
                isGenerator: !0
            })
              , k = $n(this.time);
            m.setWithVelocity(x.sample(k - Hl).value, x.sample(k).value, Hl)
        }
        const {onStop: h} = this.options;
        h && h(),
        this.cancel()
    }
    complete() {
        const {resolved: e} = this;
        e && e.animation.finish()
    }
    cancel() {
        const {resolved: e} = this;
        e && e.animation.cancel()
    }
    static supports(e) {
        const {motionValue: r, name: i, repeatDelay: a, repeatType: l, damping: c, type: d} = e;
        if (!r || !r.owner || !(r.owner.current instanceof HTMLElement))
            return !1;
        const {onUpdate: h, transformTemplate: m} = r.owner.getProps();
        return A2() && i && _2.has(i) && !h && !m && !a && l !== "mirror" && c !== 0 && d !== "inertia"
    }
}
const M2 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , D2 = t => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , I2 = {
    type: "keyframes",
    duration: .8
}
  , F2 = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , V2 = (t, {keyframes: e}) => e.length > 2 ? I2 : ws.has(t) ? t.startsWith("scale") ? D2(e[1]) : M2 : F2;
function U2({when: t, delay: e, delayChildren: r, staggerChildren: i, staggerDirection: a, repeat: l, repeatType: c, repeatDelay: d, from: h, elapsed: m, ...g}) {
    return !!Object.keys(g).length
}
const Eh = (t, e, r, i={}, a, l) => c => {
    const d = uh(i, t) || {}
      , h = d.delay || i.delay || 0;
    let {elapsed: m=0} = i;
    m = m - $n(h);
    let g = {
        keyframes: Array.isArray(r) ? r : [null, r],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...d,
        delay: -m,
        onUpdate: w => {
            e.set(w),
            d.onUpdate && d.onUpdate(w)
        }
        ,
        onComplete: () => {
            c(),
            d.onComplete && d.onComplete()
        }
        ,
        name: t,
        motionValue: e,
        element: l ? void 0 : a
    };
    U2(d) || (g = {
        ...g,
        ...V2(t, g)
    }),
    g.duration && (g.duration = $n(g.duration)),
    g.repeatDelay && (g.repeatDelay = $n(g.repeatDelay)),
    g.from !== void 0 && (g.keyframes[0] = g.from);
    let y = !1;
    if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (g.duration = 0,
    g.delay === 0 && (y = !0)),
    y && !l && e.get() !== void 0) {
        const w = lu(g.keyframes, d);
        if (w !== void 0)
            return Ue.update( () => {
                g.onUpdate(w),
                g.onComplete()
            }
            ),
            new iA([])
    }
    return !l && ov.supports(g) ? new ov(g) : new kh(g)
}
;
function B2({protectedKeys: t, needsAnimating: e}, r) {
    const i = t.hasOwnProperty(r) && e[r] !== !0;
    return e[r] = !1,
    i
}
function Yx(t, e, {delay: r=0, transitionOverride: i, type: a}={}) {
    var l;
    let {transition: c=t.getDefaultTransition(), transitionEnd: d, ...h} = e;
    i && (c = i);
    const m = []
      , g = a && t.animationState && t.animationState.getState()[a];
    for (const y in h) {
        const w = t.getValue(y, (l = t.latestValues[y]) !== null && l !== void 0 ? l : null)
          , E = h[y];
        if (E === void 0 || g && B2(g, y))
            continue;
        const x = {
            delay: r,
            ...uh(c || {}, y)
        };
        let k = !1;
        if (window.MotionHandoffAnimation) {
            const R = xx(t);
            if (R) {
                const U = window.MotionHandoffAnimation(R, y, Ue);
                U !== null && (x.startTime = U,
                k = !0)
            }
        }
        ff(t, y),
        w.start(Eh(y, w, E, t.shouldReduceMotion && vx.has(y) ? {
            type: !1
        } : x, t, k));
        const S = w.animation;
        S && m.push(S)
    }
    return d && Promise.all(m).then( () => {
        Ue.update( () => {
            d && wA(t, d)
        }
        )
    }
    ),
    m
}
function wf(t, e, r={}) {
    var i;
    const a = au(t, e, r.type === "exit" ? (i = t.presenceContext) === null || i === void 0 ? void 0 : i.custom : void 0);
    let {transition: l=t.getDefaultTransition() || {}} = a || {};
    r.transitionOverride && (l = r.transitionOverride);
    const c = a ? () => Promise.all(Yx(t, a, r)) : () => Promise.resolve()
      , d = t.variantChildren && t.variantChildren.size ? (m=0) => {
        const {delayChildren: g=0, staggerChildren: y, staggerDirection: w} = l;
        return z2(t, e, g + m, y, w, r)
    }
    : () => Promise.resolve()
      , {when: h} = l;
    if (h) {
        const [m,g] = h === "beforeChildren" ? [c, d] : [d, c];
        return m().then( () => g())
    } else
        return Promise.all([c(), d(r.delay)])
}
function z2(t, e, r=0, i=0, a=1, l) {
    const c = []
      , d = (t.variantChildren.size - 1) * i
      , h = a === 1 ? (m=0) => m * i : (m=0) => d - m * i;
    return Array.from(t.variantChildren).sort($2).forEach( (m, g) => {
        m.notify("AnimationStart", e),
        c.push(wf(m, e, {
            ...l,
            delay: r + h(g)
        }).then( () => m.notify("AnimationComplete", e)))
    }
    ),
    Promise.all(c)
}
function $2(t, e) {
    return t.sortNodePosition(e)
}
function H2(t, e, r={}) {
    t.notify("AnimationStart", e);
    let i;
    if (Array.isArray(e)) {
        const a = e.map(l => wf(t, l, r));
        i = Promise.all(a)
    } else if (typeof e == "string")
        i = wf(t, e, r);
    else {
        const a = typeof e == "function" ? au(t, e, r.custom) : e;
        i = Promise.all(Yx(t, a, r))
    }
    return i.then( () => {
        t.notify("AnimationComplete", e)
    }
    )
}
const q2 = Xf.length;
function Xx(t) {
    if (!t)
        return;
    if (!t.isControllingVariants) {
        const r = t.parent ? Xx(t.parent) || {} : {};
        return t.props.initial !== void 0 && (r.initial = t.props.initial),
        r
    }
    const e = {};
    for (let r = 0; r < q2; r++) {
        const i = Xf[r]
          , a = t.props[i];
        (Lo(a) || a === !1) && (e[i] = a)
    }
    return e
}
const W2 = [...Yf].reverse()
  , K2 = Yf.length;
function Q2(t) {
    return e => Promise.all(e.map( ({animation: r, options: i}) => H2(t, r, i)))
}
function G2(t) {
    let e = Q2(t)
      , r = av()
      , i = !0;
    const a = h => (m, g) => {
        var y;
        const w = au(t, g, h === "exit" ? (y = t.presenceContext) === null || y === void 0 ? void 0 : y.custom : void 0);
        if (w) {
            const {transition: E, transitionEnd: x, ...k} = w;
            m = {
                ...m,
                ...k,
                ...x
            }
        }
        return m
    }
    ;
    function l(h) {
        e = h(t)
    }
    function c(h) {
        const {props: m} = t
          , g = Xx(t.parent) || {}
          , y = []
          , w = new Set;
        let E = {}
          , x = 1 / 0;
        for (let S = 0; S < K2; S++) {
            const R = W2[S]
              , U = r[R]
              , L = m[R] !== void 0 ? m[R] : g[R]
              , _ = Lo(L)
              , D = R === h ? U.isActive : null;
            D === !1 && (x = S);
            let K = L === g[R] && L !== m[R] && _;
            if (K && i && t.manuallyAnimateOnMount && (K = !1),
            U.protectedKeys = {
                ...E
            },
            !U.isActive && D === null || !L && !U.prevProp || iu(L) || typeof L == "boolean")
                continue;
            const Y = Y2(U.prevProp, L);
            let I = Y || R === h && U.isActive && !K && _ || S > x && _
              , J = !1;
            const me = Array.isArray(L) ? L : [L];
            let de = me.reduce(a(R), {});
            D === !1 && (de = {});
            const {prevResolvedValues: Ce={}} = U
              , Le = {
                ...Ce,
                ...de
            }
              , Ae = fe => {
                I = !0,
                w.has(fe) && (J = !0,
                w.delete(fe)),
                U.needsAnimating[fe] = !0;
                const W = t.getValue(fe);
                W && (W.liveStyle = !1)
            }
            ;
            for (const fe in Le) {
                const W = de[fe]
                  , se = Ce[fe];
                if (E.hasOwnProperty(fe))
                    continue;
                let B = !1;
                uf(W) && uf(se) ? B = !cx(W, se) : B = W !== se,
                B ? W != null ? Ae(fe) : w.add(fe) : W !== void 0 && w.has(fe) ? Ae(fe) : U.protectedKeys[fe] = !0
            }
            U.prevProp = L,
            U.prevResolvedValues = de,
            U.isActive && (E = {
                ...E,
                ...de
            }),
            i && t.blockInitialAnimation && (I = !1),
            I && (!(K && Y) || J) && y.push(...me.map(fe => ({
                animation: fe,
                options: {
                    type: R
                }
            })))
        }
        if (w.size) {
            const S = {};
            w.forEach(R => {
                const U = t.getBaseTarget(R)
                  , L = t.getValue(R);
                L && (L.liveStyle = !0),
                S[R] = U ?? null
            }
            ),
            y.push({
                animation: S
            })
        }
        let k = !!y.length;
        return i && (m.initial === !1 || m.initial === m.animate) && !t.manuallyAnimateOnMount && (k = !1),
        i = !1,
        k ? e(y) : Promise.resolve()
    }
    function d(h, m) {
        var g;
        if (r[h].isActive === m)
            return Promise.resolve();
        (g = t.variantChildren) === null || g === void 0 || g.forEach(w => {
            var E;
            return (E = w.animationState) === null || E === void 0 ? void 0 : E.setActive(h, m)
        }
        ),
        r[h].isActive = m;
        const y = c(h);
        for (const w in r)
            r[w].protectedKeys = {};
        return y
    }
    return {
        animateChanges: c,
        setActive: d,
        setAnimateFunction: l,
        getState: () => r,
        reset: () => {
            r = av(),
            i = !0
        }
    }
}
function Y2(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !cx(e, t) : !1
}
function Yr(t=!1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function av() {
    return {
        animate: Yr(!0),
        whileInView: Yr(),
        whileHover: Yr(),
        whileTap: Yr(),
        whileDrag: Yr(),
        whileFocus: Yr(),
        exit: Yr()
    }
}
class Lr {
    constructor(e) {
        this.isMounted = !1,
        this.node = e
    }
    update() {}
}
class X2 extends Lr {
    constructor(e) {
        super(e),
        e.animationState || (e.animationState = G2(e))
    }
    updateAnimationControlsSubscription() {
        const {animate: e} = this.node.getProps();
        iu(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: e} = this.node.getProps()
          , {animate: r} = this.node.prevProps || {};
        e !== r && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var e;
        this.node.animationState.reset(),
        (e = this.unmountControls) === null || e === void 0 || e.call(this)
    }
}
let J2 = 0;
class Z2 extends Lr {
    constructor() {
        super(...arguments),
        this.id = J2++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: e, onExitComplete: r} = this.node.presenceContext
          , {isPresent: i} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === i)
            return;
        const a = this.node.animationState.setActive("exit", !e);
        r && !e && a.then( () => r(this.id))
    }
    mount() {
        const {register: e} = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const eN = {
    animation: {
        Feature: X2
    },
    exit: {
        Feature: Z2
    }
};
function Fo(t, e, r, i={
    passive: !0
}) {
    return t.addEventListener(e, r, i),
    () => t.removeEventListener(e, r)
}
function ta(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
const tN = t => e => fh(e) && t(e, ta(e));
function To(t, e, r, i) {
    return Fo(t, e, tN(r), i)
}
const lv = (t, e) => Math.abs(t - e);
function nN(t, e) {
    const r = lv(t.x, e.x)
      , i = lv(t.y, e.y);
    return Math.sqrt(r ** 2 + i ** 2)
}
class Jx {
    constructor(e, r, {transformPagePoint: i, contextWindow: a, dragSnapToOrigin: l=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const y = Pd(this.lastMoveEventInfo, this.history)
              , w = this.startEvent !== null
              , E = nN(y.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!w && !E)
                return;
            const {point: x} = y
              , {timestamp: k} = ht;
            this.history.push({
                ...x,
                timestamp: k
            });
            const {onStart: S, onMove: R} = this.handlers;
            w || (S && S(this.lastMoveEvent, y),
            this.startEvent = this.lastMoveEvent),
            R && R(this.lastMoveEvent, y)
        }
        ,
        this.handlePointerMove = (y, w) => {
            this.lastMoveEvent = y,
            this.lastMoveEventInfo = Cd(w, this.transformPagePoint),
            Ue.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (y, w) => {
            this.end();
            const {onEnd: E, onSessionEnd: x, resumeAnimation: k} = this.handlers;
            if (this.dragSnapToOrigin && k && k(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const S = Pd(y.type === "pointercancel" ? this.lastMoveEventInfo : Cd(w, this.transformPagePoint), this.history);
            this.startEvent && E && E(y, S),
            x && x(y, S)
        }
        ,
        !fh(e))
            return;
        this.dragSnapToOrigin = l,
        this.handlers = r,
        this.transformPagePoint = i,
        this.contextWindow = a || window;
        const c = ta(e)
          , d = Cd(c, this.transformPagePoint)
          , {point: h} = d
          , {timestamp: m} = ht;
        this.history = [{
            ...h,
            timestamp: m
        }];
        const {onSessionStart: g} = r;
        g && g(e, Pd(d, this.history)),
        this.removeListeners = ea(To(this.contextWindow, "pointermove", this.handlePointerMove), To(this.contextWindow, "pointerup", this.handlePointerUp), To(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Nr(this.updatePoint)
    }
}
function Cd(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}
function uv(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}
function Pd({point: t}, e) {
    return {
        point: t,
        delta: uv(t, Zx(e)),
        offset: uv(t, rN(e)),
        velocity: sN(e, .1)
    }
}
function rN(t) {
    return t[0]
}
function Zx(t) {
    return t[t.length - 1]
}
function sN(t, e) {
    if (t.length < 2)
        return {
            x: 0,
            y: 0
        };
    let r = t.length - 1
      , i = null;
    const a = Zx(t);
    for (; r >= 0 && (i = t[r],
    !(a.timestamp - i.timestamp > $n(e))); )
        r--;
    if (!i)
        return {
            x: 0,
            y: 0
        };
    const l = Hn(a.timestamp - i.timestamp);
    if (l === 0)
        return {
            x: 0,
            y: 0
        };
    const c = {
        x: (a.x - i.x) / l,
        y: (a.y - i.y) / l
    };
    return c.x === 1 / 0 && (c.x = 0),
    c.y === 1 / 0 && (c.y = 0),
    c
}
const e1 = 1e-4
  , iN = 1 - e1
  , oN = 1 + e1
  , t1 = .01
  , aN = 0 - t1
  , lN = 0 + t1;
function $t(t) {
    return t.max - t.min
}
function uN(t, e, r) {
    return Math.abs(t - e) <= r
}
function cv(t, e, r, i=.5) {
    t.origin = i,
    t.originPoint = He(e.min, e.max, t.origin),
    t.scale = $t(r) / $t(e),
    t.translate = He(r.min, r.max, t.origin) - t.originPoint,
    (t.scale >= iN && t.scale <= oN || isNaN(t.scale)) && (t.scale = 1),
    (t.translate >= aN && t.translate <= lN || isNaN(t.translate)) && (t.translate = 0)
}
function Co(t, e, r, i) {
    cv(t.x, e.x, r.x, i ? i.originX : void 0),
    cv(t.y, e.y, r.y, i ? i.originY : void 0)
}
function dv(t, e, r) {
    t.min = r.min + e.min,
    t.max = t.min + $t(e)
}
function cN(t, e, r) {
    dv(t.x, e.x, r.x),
    dv(t.y, e.y, r.y)
}
function fv(t, e, r) {
    t.min = e.min - r.min,
    t.max = t.min + $t(e)
}
function Po(t, e, r) {
    fv(t.x, e.x, r.x),
    fv(t.y, e.y, r.y)
}
function dN(t, {min: e, max: r}, i) {
    return e !== void 0 && t < e ? t = i ? He(e, t, i.min) : Math.max(t, e) : r !== void 0 && t > r && (t = i ? He(r, t, i.max) : Math.min(t, r)),
    t
}
function hv(t, e, r) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: r !== void 0 ? t.max + r - (t.max - t.min) : void 0
    }
}
function fN(t, {top: e, left: r, bottom: i, right: a}) {
    return {
        x: hv(t.x, r, a),
        y: hv(t.y, e, i)
    }
}
function pv(t, e) {
    let r = e.min - t.min
      , i = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([r,i] = [i, r]),
    {
        min: r,
        max: i
    }
}
function hN(t, e) {
    return {
        x: pv(t.x, e.x),
        y: pv(t.y, e.y)
    }
}
function pN(t, e) {
    let r = .5;
    const i = $t(t)
      , a = $t(e);
    return a > i ? r = fi(e.min, e.max - i, t.min) : i > a && (r = fi(t.min, t.max - a, e.min)),
    Wn(0, 1, r)
}
function mN(t, e) {
    const r = {};
    return e.min !== void 0 && (r.min = e.min - t.min),
    e.max !== void 0 && (r.max = e.max - t.min),
    r
}
const xf = .35;
function gN(t=xf) {
    return t === !1 ? t = 0 : t === !0 && (t = xf),
    {
        x: mv(t, "left", "right"),
        y: mv(t, "top", "bottom")
    }
}
function mv(t, e, r) {
    return {
        min: gv(t, e),
        max: gv(t, r)
    }
}
function gv(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const yv = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Gs = () => ({
    x: yv(),
    y: yv()
})
  , vv = () => ({
    min: 0,
    max: 0
})
  , Ye = () => ({
    x: vv(),
    y: vv()
});
function Jt(t) {
    return [t("x"), t("y")]
}
function n1({top: t, left: e, right: r, bottom: i}) {
    return {
        x: {
            min: e,
            max: r
        },
        y: {
            min: t,
            max: i
        }
    }
}
function yN({x: t, y: e}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}
function vN(t, e) {
    if (!e)
        return t;
    const r = e({
        x: t.left,
        y: t.top
    })
      , i = e({
        x: t.right,
        y: t.bottom
    });
    return {
        top: r.y,
        left: r.x,
        bottom: i.y,
        right: i.x
    }
}
function _d(t) {
    return t === void 0 || t === 1
}
function Sf({scale: t, scaleX: e, scaleY: r}) {
    return !_d(t) || !_d(e) || !_d(r)
}
function Xr(t) {
    return Sf(t) || r1(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}
function r1(t) {
    return wv(t.x) || wv(t.y)
}
function wv(t) {
    return t && t !== "0%"
}
function ql(t, e, r) {
    const i = t - r
      , a = e * i;
    return r + a
}
function xv(t, e, r, i, a) {
    return a !== void 0 && (t = ql(t, a, i)),
    ql(t, r, i) + e
}
function bf(t, e=0, r=1, i, a) {
    t.min = xv(t.min, e, r, i, a),
    t.max = xv(t.max, e, r, i, a)
}
function s1(t, {x: e, y: r}) {
    bf(t.x, e.translate, e.scale, e.originPoint),
    bf(t.y, r.translate, r.scale, r.originPoint)
}
const Sv = .999999999999
  , bv = 1.0000000000001;
function wN(t, e, r, i=!1) {
    const a = r.length;
    if (!a)
        return;
    e.x = e.y = 1;
    let l, c;
    for (let d = 0; d < a; d++) {
        l = r[d],
        c = l.projectionDelta;
        const {visualElement: h} = l.options;
        h && h.props.style && h.props.style.display === "contents" || (i && l.options.layoutScroll && l.scroll && l !== l.root && Xs(t, {
            x: -l.scroll.offset.x,
            y: -l.scroll.offset.y
        }),
        c && (e.x *= c.x.scale,
        e.y *= c.y.scale,
        s1(t, c)),
        i && Xr(l.latestValues) && Xs(t, l.latestValues))
    }
    e.x < bv && e.x > Sv && (e.x = 1),
    e.y < bv && e.y > Sv && (e.y = 1)
}
function Ys(t, e) {
    t.min = t.min + e,
    t.max = t.max + e
}
function kv(t, e, r, i, a=.5) {
    const l = He(t.min, t.max, a);
    bf(t, e, r, l, i)
}
function Xs(t, e) {
    kv(t.x, e.x, e.scaleX, e.scale, e.originX),
    kv(t.y, e.y, e.scaleY, e.scale, e.originY)
}
function i1(t, e) {
    return n1(vN(t.getBoundingClientRect(), e))
}
function xN(t, e, r) {
    const i = i1(t, r)
      , {scroll: a} = e;
    return a && (Ys(i.x, a.offset.x),
    Ys(i.y, a.offset.y)),
    i
}
const o1 = ({current: t}) => t ? t.ownerDocument.defaultView : null
  , SN = new WeakMap;
class bN {
    constructor(e) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Ye(),
        this.visualElement = e
    }
    start(e, {snapToCursor: r=!1}={}) {
        const {presenceContext: i} = this.visualElement;
        if (i && i.isPresent === !1)
            return;
        const a = g => {
            const {dragSnapToOrigin: y} = this.getProps();
            y ? this.pauseAnimation() : this.stopAnimation(),
            r && this.snapToCursor(ta(g).point)
        }
          , l = (g, y) => {
            const {drag: w, dragPropagation: E, onDragStart: x} = this.getProps();
            if (w && !E && (this.openDragLock && this.openDragLock(),
            this.openDragLock = pA(w),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Jt(S => {
                let R = this.getAxisMotionValue(S).get() || 0;
                if (En.test(R)) {
                    const {projection: U} = this.visualElement;
                    if (U && U.layout) {
                        const L = U.layout.layoutBox[S];
                        L && (R = $t(L) * (parseFloat(R) / 100))
                    }
                }
                this.originPoint[S] = R
            }
            ),
            x && Ue.postRender( () => x(g, y)),
            ff(this.visualElement, "transform");
            const {animationState: k} = this.visualElement;
            k && k.setActive("whileDrag", !0)
        }
          , c = (g, y) => {
            const {dragPropagation: w, dragDirectionLock: E, onDirectionLock: x, onDrag: k} = this.getProps();
            if (!w && !this.openDragLock)
                return;
            const {offset: S} = y;
            if (E && this.currentDirection === null) {
                this.currentDirection = kN(S),
                this.currentDirection !== null && x && x(this.currentDirection);
                return
            }
            this.updateAxis("x", y.point, S),
            this.updateAxis("y", y.point, S),
            this.visualElement.render(),
            k && k(g, y)
        }
          , d = (g, y) => this.stop(g, y)
          , h = () => Jt(g => {
            var y;
            return this.getAnimationState(g) === "paused" && ((y = this.getAxisMotionValue(g).animation) === null || y === void 0 ? void 0 : y.play())
        }
        )
          , {dragSnapToOrigin: m} = this.getProps();
        this.panSession = new Jx(e,{
            onSessionStart: a,
            onStart: l,
            onMove: c,
            onSessionEnd: d,
            resumeAnimation: h
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: m,
            contextWindow: o1(this.visualElement)
        })
    }
    stop(e, r) {
        const i = this.isDragging;
        if (this.cancel(),
        !i)
            return;
        const {velocity: a} = r;
        this.startAnimation(a);
        const {onDragEnd: l} = this.getProps();
        l && Ue.postRender( () => l(e, r))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: e, animationState: r} = this.visualElement;
        e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: i} = this.getProps();
        !i && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        r && r.setActive("whileDrag", !1)
    }
    updateAxis(e, r, i) {
        const {drag: a} = this.getProps();
        if (!i || !xl(e, a, this.currentDirection))
            return;
        const l = this.getAxisMotionValue(e);
        let c = this.originPoint[e] + i[e];
        this.constraints && this.constraints[e] && (c = dN(c, this.constraints[e], this.elastic[e])),
        l.set(c)
    }
    resolveConstraints() {
        var e;
        const {dragConstraints: r, dragElastic: i} = this.getProps()
          , a = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout
          , l = this.constraints;
        r && Ks(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && a ? this.constraints = fN(a.layoutBox, r) : this.constraints = !1,
        this.elastic = gN(i),
        l !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && Jt(c => {
            this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = mN(a.layoutBox[c], this.constraints[c]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: e, onMeasureDragConstraints: r} = this.getProps();
        if (!e || !Ks(e))
            return !1;
        const i = e.current
          , {projection: a} = this.visualElement;
        if (!a || !a.layout)
            return !1;
        const l = xN(i, a.root, this.visualElement.getTransformPagePoint());
        let c = hN(a.layout.layoutBox, l);
        if (r) {
            const d = r(yN(c));
            this.hasMutatedConstraints = !!d,
            d && (c = n1(d))
        }
        return c
    }
    startAnimation(e) {
        const {drag: r, dragMomentum: i, dragElastic: a, dragTransition: l, dragSnapToOrigin: c, onDragTransitionEnd: d} = this.getProps()
          , h = this.constraints || {}
          , m = Jt(g => {
            if (!xl(g, r, this.currentDirection))
                return;
            let y = h && h[g] || {};
            c && (y = {
                min: 0,
                max: 0
            });
            const w = a ? 200 : 1e6
              , E = a ? 40 : 1e7
              , x = {
                type: "inertia",
                velocity: i ? e[g] : 0,
                bounceStiffness: w,
                bounceDamping: E,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...l,
                ...y
            };
            return this.startAxisValueAnimation(g, x)
        }
        );
        return Promise.all(m).then(d)
    }
    startAxisValueAnimation(e, r) {
        const i = this.getAxisMotionValue(e);
        return ff(this.visualElement, e),
        i.start(Eh(e, i, 0, r, this.visualElement, !1))
    }
    stopAnimation() {
        Jt(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        Jt(e => {
            var r;
            return (r = this.getAxisMotionValue(e).animation) === null || r === void 0 ? void 0 : r.pause()
        }
        )
    }
    getAnimationState(e) {
        var r;
        return (r = this.getAxisMotionValue(e).animation) === null || r === void 0 ? void 0 : r.state
    }
    getAxisMotionValue(e) {
        const r = `_drag${e.toUpperCase()}`
          , i = this.visualElement.getProps()
          , a = i[r];
        return a || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        Jt(r => {
            const {drag: i} = this.getProps();
            if (!xl(r, i, this.currentDirection))
                return;
            const {projection: a} = this.visualElement
              , l = this.getAxisMotionValue(r);
            if (a && a.layout) {
                const {min: c, max: d} = a.layout.layoutBox[r];
                l.set(e[r] - He(c, d, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: e, dragConstraints: r} = this.getProps()
          , {projection: i} = this.visualElement;
        if (!Ks(r) || !i || !this.constraints)
            return;
        this.stopAnimation();
        const a = {
            x: 0,
            y: 0
        };
        Jt(c => {
            const d = this.getAxisMotionValue(c);
            if (d && this.constraints !== !1) {
                const h = d.get();
                a[c] = pN({
                    min: h,
                    max: h
                }, this.constraints[c])
            }
        }
        );
        const {transformTemplate: l} = this.visualElement.getProps();
        this.visualElement.current.style.transform = l ? l({}, "") : "none",
        i.root && i.root.updateScroll(),
        i.updateLayout(),
        this.resolveConstraints(),
        Jt(c => {
            if (!xl(c, e, null))
                return;
            const d = this.getAxisMotionValue(c)
              , {min: h, max: m} = this.constraints[c];
            d.set(He(h, m, a[c]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        SN.set(this.visualElement, this);
        const e = this.visualElement.current
          , r = To(e, "pointerdown", h => {
            const {drag: m, dragListener: g=!0} = this.getProps();
            m && g && this.start(h)
        }
        )
          , i = () => {
            const {dragConstraints: h} = this.getProps();
            Ks(h) && h.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: a} = this.visualElement
          , l = a.addEventListener("measure", i);
        a && !a.layout && (a.root && a.root.updateScroll(),
        a.updateLayout()),
        Ue.read(i);
        const c = Fo(window, "resize", () => this.scalePositionWithinConstraints())
          , d = a.addEventListener("didUpdate", ( ({delta: h, hasLayoutChanged: m}) => {
            this.isDragging && m && (Jt(g => {
                const y = this.getAxisMotionValue(g);
                y && (this.originPoint[g] += h[g].translate,
                y.set(y.get() + h[g].translate))
            }
            ),
            this.visualElement.render())
        }
        ));
        return () => {
            c(),
            r(),
            l(),
            d && d()
        }
    }
    getProps() {
        const e = this.visualElement.getProps()
          , {drag: r=!1, dragDirectionLock: i=!1, dragPropagation: a=!1, dragConstraints: l=!1, dragElastic: c=xf, dragMomentum: d=!0} = e;
        return {
            ...e,
            drag: r,
            dragDirectionLock: i,
            dragPropagation: a,
            dragConstraints: l,
            dragElastic: c,
            dragMomentum: d
        }
    }
}
function xl(t, e, r) {
    return (e === !0 || e === t) && (r === null || r === t)
}
function kN(t, e=10) {
    let r = null;
    return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"),
    r
}
class EN extends Lr {
    constructor(e) {
        super(e),
        this.removeGroupControls = zt,
        this.removeListeners = zt,
        this.controls = new bN(e)
    }
    mount() {
        const {dragControls: e} = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || zt
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const Ev = t => (e, r) => {
    t && Ue.postRender( () => t(e, r))
}
;
class TN extends Lr {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = zt
    }
    onPointerDown(e) {
        this.session = new Jx(e,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: o1(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: e, onPanStart: r, onPan: i, onPanEnd: a} = this.node.getProps();
        return {
            onSessionStart: Ev(e),
            onStart: Ev(r),
            onMove: i,
            onEnd: (l, c) => {
                delete this.session,
                a && Ue.postRender( () => a(l, c))
            }
        }
    }
    mount() {
        this.removePointerDownListener = To(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const jl = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function Tv(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const ho = {
    correct: (t, e) => {
        if (!e.target)
            return t;
        if (typeof t == "string")
            if (ce.test(t))
                t = parseFloat(t);
            else
                return t;
        const r = Tv(t, e.target.x)
          , i = Tv(t, e.target.y);
        return `${r}% ${i}%`
    }
}
  , CN = {
    correct: (t, {treeScale: e, projectionDelta: r}) => {
        const i = t
          , a = Or.parse(t);
        if (a.length > 5)
            return i;
        const l = Or.createTransformer(t)
          , c = typeof a[0] != "number" ? 1 : 0
          , d = r.x.scale * e.x
          , h = r.y.scale * e.y;
        a[0 + c] /= d,
        a[1 + c] /= h;
        const m = He(d, h, .5);
        return typeof a[2 + c] == "number" && (a[2 + c] /= m),
        typeof a[3 + c] == "number" && (a[3 + c] /= m),
        l(a)
    }
};
class PN extends j.Component {
    componentDidMount() {
        const {visualElement: e, layoutGroup: r, switchLayoutGroup: i, layoutId: a} = this.props
          , {projection: l} = e;
        KR(_N),
        l && (r.group && r.group.add(l),
        i && i.register && a && i.register(l),
        l.root.didUpdate(),
        l.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        l.setOptions({
            ...l.options,
            onExitComplete: () => this.safeToRemove()
        })),
        jl.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {layoutDependency: r, visualElement: i, drag: a, isPresent: l} = this.props
          , c = i.projection;
        return c && (c.isPresent = l,
        a || e.layoutDependency !== r || r === void 0 ? c.willUpdate() : this.safeToRemove(),
        e.isPresent !== l && (l ? c.promote() : c.relegate() || Ue.postRender( () => {
            const d = c.getStack();
            (!d || !d.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: e} = this.props.visualElement;
        e && (e.root.didUpdate(),
        Zf.postRender( () => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: e, layoutGroup: r, switchLayoutGroup: i} = this.props
          , {projection: a} = e;
        a && (a.scheduleCheckAfterUnmount(),
        r && r.group && r.group.remove(a),
        i && i.deregister && i.deregister(a))
    }
    safeToRemove() {
        const {safeToRemove: e} = this.props;
        e && e()
    }
    render() {
        return null
    }
}
function a1(t) {
    const [e,r] = lR()
      , i = j.useContext($w);
    return b.jsx(PN, {
        ...t,
        layoutGroup: i,
        switchLayoutGroup: j.useContext(Xw),
        isPresent: e,
        safeToRemove: r
    })
}
const _N = {
    borderRadius: {
        ...ho,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: ho,
    borderTopRightRadius: ho,
    borderBottomLeftRadius: ho,
    borderBottomRightRadius: ho,
    boxShadow: CN
};
function RN(t, e, r) {
    const i = bt(t) ? t : Do(t);
    return i.start(Eh("", i, e, r)),
    i.animation
}
function AN(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}
const NN = (t, e) => t.depth - e.depth;
class ON {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(e) {
        hh(this.children, e),
        this.isDirty = !0
    }
    remove(e) {
        ph(this.children, e),
        this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(NN),
        this.isDirty = !1,
        this.children.forEach(e)
    }
}
function jN(t, e) {
    const r = Tn.now()
      , i = ({timestamp: a}) => {
        const l = a - r;
        l >= e && (Nr(i),
        t(l - e))
    }
    ;
    return Ue.read(i, !0),
    () => Nr(i)
}
const l1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , LN = l1.length
  , Cv = t => typeof t == "string" ? parseFloat(t) : t
  , Pv = t => typeof t == "number" || ce.test(t);
function MN(t, e, r, i, a, l) {
    a ? (t.opacity = He(0, r.opacity !== void 0 ? r.opacity : 1, DN(i)),
    t.opacityExit = He(e.opacity !== void 0 ? e.opacity : 1, 0, IN(i))) : l && (t.opacity = He(e.opacity !== void 0 ? e.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, i));
    for (let c = 0; c < LN; c++) {
        const d = `border${l1[c]}Radius`;
        let h = _v(e, d)
          , m = _v(r, d);
        if (h === void 0 && m === void 0)
            continue;
        h || (h = 0),
        m || (m = 0),
        h === 0 || m === 0 || Pv(h) === Pv(m) ? (t[d] = Math.max(He(Cv(h), Cv(m), i), 0),
        (En.test(m) || En.test(h)) && (t[d] += "%")) : t[d] = m
    }
    (e.rotate || r.rotate) && (t.rotate = He(e.rotate || 0, r.rotate || 0, i))
}
function _v(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const DN = u1(0, .5, Px)
  , IN = u1(.5, .95, zt);
function u1(t, e, r) {
    return i => i < t ? 0 : i > e ? 1 : r(fi(t, e, i))
}
function Rv(t, e) {
    t.min = e.min,
    t.max = e.max
}
function Xt(t, e) {
    Rv(t.x, e.x),
    Rv(t.y, e.y)
}
function Av(t, e) {
    t.translate = e.translate,
    t.scale = e.scale,
    t.originPoint = e.originPoint,
    t.origin = e.origin
}
function Nv(t, e, r, i, a) {
    return t -= e,
    t = ql(t, 1 / r, i),
    a !== void 0 && (t = ql(t, 1 / a, i)),
    t
}
function FN(t, e=0, r=1, i=.5, a, l=t, c=t) {
    if (En.test(e) && (e = parseFloat(e),
    e = He(c.min, c.max, e / 100) - c.min),
    typeof e != "number")
        return;
    let d = He(l.min, l.max, i);
    t === l && (d -= e),
    t.min = Nv(t.min, e, r, d, a),
    t.max = Nv(t.max, e, r, d, a)
}
function Ov(t, e, [r,i,a], l, c) {
    FN(t, e[r], e[i], e[a], e.scale, l, c)
}
const VN = ["x", "scaleX", "originX"]
  , UN = ["y", "scaleY", "originY"];
function jv(t, e, r, i) {
    Ov(t.x, e, VN, r ? r.x : void 0, i ? i.x : void 0),
    Ov(t.y, e, UN, r ? r.y : void 0, i ? i.y : void 0)
}
function Lv(t) {
    return t.translate === 0 && t.scale === 1
}
function c1(t) {
    return Lv(t.x) && Lv(t.y)
}
function Mv(t, e) {
    return t.min === e.min && t.max === e.max
}
function BN(t, e) {
    return Mv(t.x, e.x) && Mv(t.y, e.y)
}
function Dv(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}
function d1(t, e) {
    return Dv(t.x, e.x) && Dv(t.y, e.y)
}
function Iv(t) {
    return $t(t.x) / $t(t.y)
}
function Fv(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class zN {
    constructor() {
        this.members = []
    }
    add(e) {
        hh(this.members, e),
        e.scheduleRender()
    }
    remove(e) {
        if (ph(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead) {
            const r = this.members[this.members.length - 1];
            r && this.promote(r)
        }
    }
    relegate(e) {
        const r = this.members.findIndex(a => e === a);
        if (r === 0)
            return !1;
        let i;
        for (let a = r; a >= 0; a--) {
            const l = this.members[a];
            if (l.isPresent !== !1) {
                i = l;
                break
            }
        }
        return i ? (this.promote(i),
        !0) : !1
    }
    promote(e, r) {
        const i = this.lead;
        if (e !== i && (this.prevLead = i,
        this.lead = e,
        e.show(),
        i)) {
            i.instance && i.scheduleRender(),
            e.scheduleRender(),
            e.resumeFrom = i,
            r && (e.resumeFrom.preserveOpacity = !0),
            i.snapshot && (e.snapshot = i.snapshot,
            e.snapshot.latestValues = i.animationValues || i.latestValues),
            e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {crossfade: a} = e.options;
            a === !1 && i.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {options: r, resumingFrom: i} = e;
            r.onExitComplete && r.onExitComplete(),
            i && i.options.onExitComplete && i.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function $N(t, e, r) {
    let i = "";
    const a = t.x.translate / e.x
      , l = t.y.translate / e.y
      , c = (r == null ? void 0 : r.z) || 0;
    if ((a || l || c) && (i = `translate3d(${a}px, ${l}px, ${c}px) `),
    (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `),
    r) {
        const {transformPerspective: m, rotate: g, rotateX: y, rotateY: w, skewX: E, skewY: x} = r;
        m && (i = `perspective(${m}px) ${i}`),
        g && (i += `rotate(${g}deg) `),
        y && (i += `rotateX(${y}deg) `),
        w && (i += `rotateY(${w}deg) `),
        E && (i += `skewX(${E}deg) `),
        x && (i += `skewY(${x}deg) `)
    }
    const d = t.x.scale * e.x
      , h = t.y.scale * e.y;
    return (d !== 1 || h !== 1) && (i += `scale(${d}, ${h})`),
    i || "none"
}
const Jr = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , xo = typeof window < "u" && window.MotionDebug !== void 0
  , Rd = ["", "X", "Y", "Z"]
  , HN = {
    visibility: "hidden"
}
  , Vv = 1e3;
let qN = 0;
function Ad(t, e, r, i) {
    const {latestValues: a} = e;
    a[t] && (r[t] = a[t],
    e.setStaticValue(t, 0),
    i && (i[t] = 0))
}
function f1(t) {
    if (t.hasCheckedOptimisedAppear = !0,
    t.root === t)
        return;
    const {visualElement: e} = t.options;
    if (!e)
        return;
    const r = xx(e);
    if (window.MotionHasOptimisedAnimation(r, "transform")) {
        const {layout: a, layoutId: l} = t.options;
        window.MotionCancelOptimisedAnimation(r, "transform", Ue, !(a || l))
    }
    const {parent: i} = t;
    i && !i.hasCheckedOptimisedAppear && f1(i)
}
function h1({attachResizeListener: t, defaultParent: e, measureScroll: r, checkIsScrollRoot: i, resetTransform: a}) {
    return class {
        constructor(c={}, d=e == null ? void 0 : e()) {
            this.id = qN++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                xo && (Jr.totalNodes = Jr.resolvedTargetDeltas = Jr.recalculatedProjection = 0),
                this.nodes.forEach(QN),
                this.nodes.forEach(ZN),
                this.nodes.forEach(eO),
                this.nodes.forEach(GN),
                xo && window.MotionDebug.record(Jr)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = c,
            this.root = d ? d.root || d : this,
            this.path = d ? [...d.path, d] : [],
            this.parent = d,
            this.depth = d ? d.depth + 1 : 0;
            for (let h = 0; h < this.path.length; h++)
                this.path[h].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ON)
        }
        addEventListener(c, d) {
            return this.eventHandlers.has(c) || this.eventHandlers.set(c, new mh),
            this.eventHandlers.get(c).add(d)
        }
        notifyListeners(c, ...d) {
            const h = this.eventHandlers.get(c);
            h && h.notify(...d)
        }
        hasListeners(c) {
            return this.eventHandlers.has(c)
        }
        mount(c, d=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = AN(c),
            this.instance = c;
            const {layoutId: h, layout: m, visualElement: g} = this.options;
            if (g && !g.current && g.mount(c),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            d && (m || h) && (this.isLayoutDirty = !0),
            t) {
                let y;
                const w = () => this.root.updateBlockedByResize = !1;
                t(c, () => {
                    this.root.updateBlockedByResize = !0,
                    y && y(),
                    y = jN(w, 250),
                    jl.hasAnimatedSinceResize && (jl.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Bv))
                }
                )
            }
            h && this.root.registerSharedNode(h, this),
            this.options.animate !== !1 && g && (h || m) && this.addEventListener("didUpdate", ({delta: y, hasLayoutChanged: w, hasRelativeTargetChanged: E, layout: x}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const k = this.options.transition || g.getDefaultTransition() || iO
                  , {onLayoutAnimationStart: S, onLayoutAnimationComplete: R} = g.getProps()
                  , U = !this.targetLayout || !d1(this.targetLayout, x) || E
                  , L = !w && E;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || L || w && (U || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(y, L);
                    const _ = {
                        ...uh(k, "layout"),
                        onPlay: S,
                        onComplete: R
                    };
                    (g.shouldReduceMotion || this.options.layoutRoot) && (_.delay = 0,
                    _.type = !1),
                    this.startAnimation(_)
                } else
                    w || Bv(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = x
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const c = this.getStack();
            c && c.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            Nr(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(tO),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: c} = this.options;
            return c && c.getProps().transformTemplate
        }
        willUpdate(c=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && f1(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let g = 0; g < this.path.length; g++) {
                const y = this.path[g];
                y.shouldResetTransform = !0,
                y.updateScroll("snapshot"),
                y.options.layoutRoot && y.willUpdate(!1)
            }
            const {layoutId: d, layout: h} = this.options;
            if (d === void 0 && !h)
                return;
            const m = this.getTransformTemplate();
            this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            c && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Uv);
                return
            }
            this.isUpdating || this.nodes.forEach(XN),
            this.isUpdating = !1,
            this.nodes.forEach(JN),
            this.nodes.forEach(WN),
            this.nodes.forEach(KN),
            this.clearAllSnapshots();
            const d = Tn.now();
            ht.delta = Wn(0, 1e3 / 60, d - ht.timestamp),
            ht.timestamp = d,
            ht.isProcessing = !0,
            xd.update.process(ht),
            xd.preRender.process(ht),
            xd.render.process(ht),
            ht.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Zf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(YN),
            this.sharedNodes.forEach(nO)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Ue.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Ue.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let h = 0; h < this.path.length; h++)
                    this.path[h].updateScroll();
            const c = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = Ye(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: d} = this.options;
            d && d.notify("LayoutMeasure", this.layout.layoutBox, c ? c.layoutBox : void 0)
        }
        updateScroll(c="measure") {
            let d = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === c && (d = !1),
            d) {
                const h = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: c,
                    isRoot: h,
                    offset: r(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : h
                }
            }
        }
        resetTransform() {
            if (!a)
                return;
            const c = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , d = this.projectionDelta && !c1(this.projectionDelta)
              , h = this.getTransformTemplate()
              , m = h ? h(this.latestValues, "") : void 0
              , g = m !== this.prevTransformTemplateValue;
            c && (d || Xr(this.latestValues) || g) && (a(this.instance, m),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(c=!0) {
            const d = this.measurePageBox();
            let h = this.removeElementScroll(d);
            return c && (h = this.removeTransform(h)),
            oO(h),
            {
                animationId: this.root.animationId,
                measuredBox: d,
                layoutBox: h,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var c;
            const {visualElement: d} = this.options;
            if (!d)
                return Ye();
            const h = d.measureViewportBox();
            if (!(((c = this.scroll) === null || c === void 0 ? void 0 : c.wasRoot) || this.path.some(aO))) {
                const {scroll: g} = this.root;
                g && (Ys(h.x, g.offset.x),
                Ys(h.y, g.offset.y))
            }
            return h
        }
        removeElementScroll(c) {
            var d;
            const h = Ye();
            if (Xt(h, c),
            !((d = this.scroll) === null || d === void 0) && d.wasRoot)
                return h;
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m]
                  , {scroll: y, options: w} = g;
                g !== this.root && y && w.layoutScroll && (y.wasRoot && Xt(h, c),
                Ys(h.x, y.offset.x),
                Ys(h.y, y.offset.y))
            }
            return h
        }
        applyTransform(c, d=!1) {
            const h = Ye();
            Xt(h, c);
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m];
                !d && g.options.layoutScroll && g.scroll && g !== g.root && Xs(h, {
                    x: -g.scroll.offset.x,
                    y: -g.scroll.offset.y
                }),
                Xr(g.latestValues) && Xs(h, g.latestValues)
            }
            return Xr(this.latestValues) && Xs(h, this.latestValues),
            h
        }
        removeTransform(c) {
            const d = Ye();
            Xt(d, c);
            for (let h = 0; h < this.path.length; h++) {
                const m = this.path[h];
                if (!m.instance || !Xr(m.latestValues))
                    continue;
                Sf(m.latestValues) && m.updateSnapshot();
                const g = Ye()
                  , y = m.measurePageBox();
                Xt(g, y),
                jv(d, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, g)
            }
            return Xr(this.latestValues) && jv(d, this.latestValues),
            d
        }
        setTargetDelta(c) {
            this.targetDelta = c,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(c) {
            this.options = {
                ...this.options,
                ...c,
                crossfade: c.crossfade !== void 0 ? c.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ht.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(c=!1) {
            var d;
            const h = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
            const m = !!this.resumingFrom || this !== h;
            if (!(c || m && this.isSharedProjectionDirty || this.isProjectionDirty || !((d = this.parent) === null || d === void 0) && d.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: y, layoutId: w} = this.options;
            if (!(!this.layout || !(y || w))) {
                if (this.resolvedRelativeTargetAt = ht.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const E = this.getClosestProjectingParent();
                    E && E.layout && this.animationProgress !== 1 ? (this.relativeParent = E,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Ye(),
                    this.relativeTargetOrigin = Ye(),
                    Po(this.relativeTargetOrigin, this.layout.layoutBox, E.layout.layoutBox),
                    Xt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Ye(),
                    this.targetWithTransforms = Ye()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    cN(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Xt(this.target, this.layout.layoutBox),
                    s1(this.target, this.targetDelta)) : Xt(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const E = this.getClosestProjectingParent();
                        E && !!E.resumingFrom == !!this.resumingFrom && !E.options.layoutScroll && E.target && this.animationProgress !== 1 ? (this.relativeParent = E,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = Ye(),
                        this.relativeTargetOrigin = Ye(),
                        Po(this.relativeTargetOrigin, this.target, E.target),
                        Xt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    xo && Jr.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Sf(this.parent.latestValues) || r1(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var c;
            const d = this.getLead()
              , h = !!this.resumingFrom || this !== d;
            let m = !0;
            if ((this.isProjectionDirty || !((c = this.parent) === null || c === void 0) && c.isProjectionDirty) && (m = !1),
            h && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1),
            this.resolvedRelativeTargetAt === ht.timestamp && (m = !1),
            m)
                return;
            const {layout: g, layoutId: y} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(g || y))
                return;
            Xt(this.layoutCorrected, this.layout.layoutBox);
            const w = this.treeScale.x
              , E = this.treeScale.y;
            wN(this.layoutCorrected, this.treeScale, this.path, h),
            d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox,
            d.targetWithTransforms = Ye());
            const {target: x} = d;
            if (!x) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Av(this.prevProjectionDelta.x, this.projectionDelta.x),
            Av(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Co(this.projectionDelta, this.layoutCorrected, x, this.latestValues),
            (this.treeScale.x !== w || this.treeScale.y !== E || !Fv(this.projectionDelta.x, this.prevProjectionDelta.x) || !Fv(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", x)),
            xo && Jr.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(c=!0) {
            var d;
            if ((d = this.options.visualElement) === null || d === void 0 || d.scheduleRender(),
            c) {
                const h = this.getStack();
                h && h.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Gs(),
            this.projectionDelta = Gs(),
            this.projectionDeltaWithTransform = Gs()
        }
        setAnimationOrigin(c, d=!1) {
            const h = this.snapshot
              , m = h ? h.latestValues : {}
              , g = {
                ...this.latestValues
            }
              , y = Gs();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !d;
            const w = Ye()
              , E = h ? h.source : void 0
              , x = this.layout ? this.layout.source : void 0
              , k = E !== x
              , S = this.getStack()
              , R = !S || S.members.length <= 1
              , U = !!(k && !R && this.options.crossfade === !0 && !this.path.some(sO));
            this.animationProgress = 0;
            let L;
            this.mixTargetDelta = _ => {
                const D = _ / 1e3;
                zv(y.x, c.x, D),
                zv(y.y, c.y, D),
                this.setTargetDelta(y),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Po(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                rO(this.relativeTarget, this.relativeTargetOrigin, w, D),
                L && BN(this.relativeTarget, L) && (this.isProjectionDirty = !1),
                L || (L = Ye()),
                Xt(L, this.relativeTarget)),
                k && (this.animationValues = g,
                MN(g, m, this.latestValues, D, U, R)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = D
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(c) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (Nr(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Ue.update( () => {
                jl.hasAnimatedSinceResize = !0,
                this.currentAnimation = RN(0, Vv, {
                    ...c,
                    onUpdate: d => {
                        this.mixTargetDelta(d),
                        c.onUpdate && c.onUpdate(d)
                    }
                    ,
                    onComplete: () => {
                        c.onComplete && c.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const c = this.getStack();
            c && c.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Vv),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const c = this.getLead();
            let {targetWithTransforms: d, target: h, layout: m, latestValues: g} = c;
            if (!(!d || !h || !m)) {
                if (this !== c && this.layout && m && p1(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
                    h = this.target || Ye();
                    const y = $t(this.layout.layoutBox.x);
                    h.x.min = c.target.x.min,
                    h.x.max = h.x.min + y;
                    const w = $t(this.layout.layoutBox.y);
                    h.y.min = c.target.y.min,
                    h.y.max = h.y.min + w
                }
                Xt(d, h),
                Xs(d, g),
                Co(this.projectionDeltaWithTransform, this.layoutCorrected, d, g)
            }
        }
        registerSharedNode(c, d) {
            this.sharedNodes.has(c) || this.sharedNodes.set(c, new zN),
            this.sharedNodes.get(c).add(d);
            const m = d.options.initialPromotionConfig;
            d.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(d) : void 0
            })
        }
        isLead() {
            const c = this.getStack();
            return c ? c.lead === this : !0
        }
        getLead() {
            var c;
            const {layoutId: d} = this.options;
            return d ? ((c = this.getStack()) === null || c === void 0 ? void 0 : c.lead) || this : this
        }
        getPrevLead() {
            var c;
            const {layoutId: d} = this.options;
            return d ? (c = this.getStack()) === null || c === void 0 ? void 0 : c.prevLead : void 0
        }
        getStack() {
            const {layoutId: c} = this.options;
            if (c)
                return this.root.sharedNodes.get(c)
        }
        promote({needsReset: c, transition: d, preserveFollowOpacity: h}={}) {
            const m = this.getStack();
            m && m.promote(this, h),
            c && (this.projectionDelta = void 0,
            this.needsReset = !0),
            d && this.setOptions({
                transition: d
            })
        }
        relegate() {
            const c = this.getStack();
            return c ? c.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: c} = this.options;
            if (!c)
                return;
            let d = !1;
            const {latestValues: h} = c;
            if ((h.z || h.rotate || h.rotateX || h.rotateY || h.rotateZ || h.skewX || h.skewY) && (d = !0),
            !d)
                return;
            const m = {};
            h.z && Ad("z", c, m, this.animationValues);
            for (let g = 0; g < Rd.length; g++)
                Ad(`rotate${Rd[g]}`, c, m, this.animationValues),
                Ad(`skew${Rd[g]}`, c, m, this.animationValues);
            c.render();
            for (const g in m)
                c.setStaticValue(g, m[g]),
                this.animationValues && (this.animationValues[g] = m[g]);
            c.scheduleRender()
        }
        getProjectionStyles(c) {
            var d, h;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return HN;
            const m = {
                visibility: ""
            }
              , g = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                m.opacity = "",
                m.pointerEvents = Nl(c == null ? void 0 : c.pointerEvents) || "",
                m.transform = g ? g(this.latestValues, "") : "none",
                m;
            const y = this.getLead();
            if (!this.projectionDelta || !this.layout || !y.target) {
                const k = {};
                return this.options.layoutId && (k.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                k.pointerEvents = Nl(c == null ? void 0 : c.pointerEvents) || ""),
                this.hasProjected && !Xr(this.latestValues) && (k.transform = g ? g({}, "") : "none",
                this.hasProjected = !1),
                k
            }
            const w = y.animationValues || y.latestValues;
            this.applyTransformsToTarget(),
            m.transform = $N(this.projectionDeltaWithTransform, this.treeScale, w),
            g && (m.transform = g(w, m.transform));
            const {x: E, y: x} = this.projectionDelta;
            m.transformOrigin = `${E.origin * 100}% ${x.origin * 100}% 0`,
            y.animationValues ? m.opacity = y === this ? (h = (d = w.opacity) !== null && d !== void 0 ? d : this.latestValues.opacity) !== null && h !== void 0 ? h : 1 : this.preserveOpacity ? this.latestValues.opacity : w.opacityExit : m.opacity = y === this ? w.opacity !== void 0 ? w.opacity : "" : w.opacityExit !== void 0 ? w.opacityExit : 0;
            for (const k in Ul) {
                if (w[k] === void 0)
                    continue;
                const {correct: S, applyTo: R} = Ul[k]
                  , U = m.transform === "none" ? w[k] : S(w[k], y);
                if (R) {
                    const L = R.length;
                    for (let _ = 0; _ < L; _++)
                        m[R[_]] = U
                } else
                    m[k] = U
            }
            return this.options.layoutId && (m.pointerEvents = y === this ? Nl(c == null ? void 0 : c.pointerEvents) || "" : "none"),
            m
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(c => {
                var d;
                return (d = c.currentAnimation) === null || d === void 0 ? void 0 : d.stop()
            }
            ),
            this.root.nodes.forEach(Uv),
            this.root.sharedNodes.clear()
        }
    }
}
function WN(t) {
    t.updateLayout()
}
function KN(t) {
    var e;
    const r = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
        const {layoutBox: i, measuredBox: a} = t.layout
          , {animationType: l} = t.options
          , c = r.source !== t.layout.source;
        l === "size" ? Jt(y => {
            const w = c ? r.measuredBox[y] : r.layoutBox[y]
              , E = $t(w);
            w.min = i[y].min,
            w.max = w.min + E
        }
        ) : p1(l, r.layoutBox, i) && Jt(y => {
            const w = c ? r.measuredBox[y] : r.layoutBox[y]
              , E = $t(i[y]);
            w.max = w.min + E,
            t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
            t.relativeTarget[y].max = t.relativeTarget[y].min + E)
        }
        );
        const d = Gs();
        Co(d, i, r.layoutBox);
        const h = Gs();
        c ? Co(h, t.applyTransform(a, !0), r.measuredBox) : Co(h, i, r.layoutBox);
        const m = !c1(d);
        let g = !1;
        if (!t.resumeFrom) {
            const y = t.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {snapshot: w, layout: E} = y;
                if (w && E) {
                    const x = Ye();
                    Po(x, r.layoutBox, w.layoutBox);
                    const k = Ye();
                    Po(k, i, E.layoutBox),
                    d1(x, k) || (g = !0),
                    y.options.layoutRoot && (t.relativeTarget = k,
                    t.relativeTargetOrigin = x,
                    t.relativeParent = y)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: r,
            delta: h,
            layoutDelta: d,
            hasLayoutChanged: m,
            hasRelativeTargetChanged: g
        })
    } else if (t.isLead()) {
        const {onExitComplete: i} = t.options;
        i && i()
    }
    t.options.transition = void 0
}
function QN(t) {
    xo && Jr.totalNodes++,
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function GN(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function YN(t) {
    t.clearSnapshot()
}
function Uv(t) {
    t.clearMeasurements()
}
function XN(t) {
    t.isLayoutDirty = !1
}
function JN(t) {
    const {visualElement: e} = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform()
}
function Bv(t) {
    t.finishAnimation(),
    t.targetDelta = t.relativeTarget = t.target = void 0,
    t.isProjectionDirty = !0
}
function ZN(t) {
    t.resolveTargetDelta()
}
function eO(t) {
    t.calcProjection()
}
function tO(t) {
    t.resetSkewAndRotation()
}
function nO(t) {
    t.removeLeadSnapshot()
}
function zv(t, e, r) {
    t.translate = He(e.translate, 0, r),
    t.scale = He(e.scale, 1, r),
    t.origin = e.origin,
    t.originPoint = e.originPoint
}
function $v(t, e, r, i) {
    t.min = He(e.min, r.min, i),
    t.max = He(e.max, r.max, i)
}
function rO(t, e, r, i) {
    $v(t.x, e.x, r.x, i),
    $v(t.y, e.y, r.y, i)
}
function sO(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const iO = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Hv = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
  , qv = Hv("applewebkit/") && !Hv("chrome/") ? Math.round : zt;
function Wv(t) {
    t.min = qv(t.min),
    t.max = qv(t.max)
}
function oO(t) {
    Wv(t.x),
    Wv(t.y)
}
function p1(t, e, r) {
    return t === "position" || t === "preserve-aspect" && !uN(Iv(e), Iv(r), .2)
}
function aO(t) {
    var e;
    return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
}
const lO = h1({
    attachResizeListener: (t, e) => Fo(t, "resize", e),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Nd = {
    current: void 0
}
  , m1 = h1({
    measureScroll: t => ({
        x: t.scrollLeft,
        y: t.scrollTop
    }),
    defaultParent: () => {
        if (!Nd.current) {
            const t = new lO({});
            t.mount(window),
            t.setOptions({
                layoutScroll: !0
            }),
            Nd.current = t
        }
        return Nd.current
    }
    ,
    resetTransform: (t, e) => {
        t.style.transform = e !== void 0 ? e : "none"
    }
    ,
    checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
})
  , uO = {
    pan: {
        Feature: TN
    },
    drag: {
        Feature: EN,
        ProjectionNode: m1,
        MeasureLayout: a1
    }
};
function Kv(t, e, r) {
    const {props: i} = t;
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", r === "Start");
    const a = "onHover" + r
      , l = i[a];
    l && Ue.postRender( () => l(e, ta(e)))
}
class cO extends Lr {
    mount() {
        const {current: e} = this.node;
        e && (this.unmount = uA(e, r => (Kv(this.node, r, "Start"),
        i => Kv(this.node, i, "End"))))
    }
    unmount() {}
}
class dO extends Lr {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }
        !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = ea(Fo(this.node.current, "focus", () => this.onFocus()), Fo(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Qv(t, e, r) {
    const {props: i} = t;
    t.animationState && i.whileTap && t.animationState.setActive("whileTap", r === "Start");
    const a = "onTap" + (r === "End" ? "" : r)
      , l = i[a];
    l && Ue.postRender( () => l(e, ta(e)))
}
class fO extends Lr {
    mount() {
        const {current: e} = this.node;
        e && (this.unmount = hA(e, r => (Qv(this.node, r, "Start"),
        (i, {success: a}) => Qv(this.node, i, a ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const kf = new WeakMap
  , Od = new WeakMap
  , hO = t => {
    const e = kf.get(t.target);
    e && e(t)
}
  , pO = t => {
    t.forEach(hO)
}
;
function mO({root: t, ...e}) {
    const r = t || document;
    Od.has(r) || Od.set(r, {});
    const i = Od.get(r)
      , a = JSON.stringify(e);
    return i[a] || (i[a] = new IntersectionObserver(pO,{
        root: t,
        ...e
    })),
    i[a]
}
function gO(t, e, r) {
    const i = mO(e);
    return kf.set(t, r),
    i.observe(t),
    () => {
        kf.delete(t),
        i.unobserve(t)
    }
}
const yO = {
    some: 0,
    all: 1
};
class vO extends Lr {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: e={}} = this.node.getProps()
          , {root: r, margin: i, amount: a="some", once: l} = e
          , c = {
            root: r ? r.current : void 0,
            rootMargin: i,
            threshold: typeof a == "number" ? a : yO[a]
        }
          , d = h => {
            const {isIntersecting: m} = h;
            if (this.isInView === m || (this.isInView = m,
            l && !m && this.hasEnteredView))
                return;
            m && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", m);
            const {onViewportEnter: g, onViewportLeave: y} = this.node.getProps()
              , w = m ? g : y;
            w && w(h)
        }
        ;
        return gO(this.node.current, c, d)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: e, prevProps: r} = this.node;
        ["amount", "margin", "root"].some(wO(e, r)) && this.startObserver()
    }
    unmount() {}
}
function wO({viewport: t={}}, {viewport: e={}}={}) {
    return r => t[r] !== e[r]
}
const xO = {
    inView: {
        Feature: vO
    },
    tap: {
        Feature: fO
    },
    focus: {
        Feature: dO
    },
    hover: {
        Feature: cO
    }
}
  , SO = {
    layout: {
        ProjectionNode: m1,
        MeasureLayout: a1
    }
}
  , Ef = {
    current: null
}
  , g1 = {
    current: !1
};
function bO() {
    if (g1.current = !0,
    !!Qf)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)")
              , e = () => Ef.current = t.matches;
            t.addListener(e),
            e()
        } else
            Ef.current = !1
}
const kO = [...Bx, xt, Or]
  , EO = t => kO.find(Ux(t))
  , Gv = new WeakMap;
function TO(t, e, r) {
    for (const i in e) {
        const a = e[i]
          , l = r[i];
        if (bt(a))
            t.addValue(i, a);
        else if (bt(l))
            t.addValue(i, Do(a, {
                owner: t
            }));
        else if (l !== a)
            if (t.hasValue(i)) {
                const c = t.getValue(i);
                c.liveStyle === !0 ? c.jump(a) : c.hasAnimated || c.set(a)
            } else {
                const c = t.getStaticValue(i);
                t.addValue(i, Do(c !== void 0 ? c : a, {
                    owner: t
                }))
            }
    }
    for (const i in r)
        e[i] === void 0 && t.removeValue(i);
    return e
}
const Yv = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class CO {
    scrapeMotionValuesFromProps(e, r, i) {
        return {}
    }
    constructor({parent: e, props: r, presenceContext: i, reducedMotionConfig: a, blockInitialAnimation: l, visualState: c}, d={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = Sh,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const E = Tn.now();
            this.renderScheduledAt < E && (this.renderScheduledAt = E,
            Ue.render(this.render, !1, !0))
        }
        ;
        const {latestValues: h, renderState: m, onUpdate: g} = c;
        this.onUpdate = g,
        this.latestValues = h,
        this.baseTarget = {
            ...h
        },
        this.initialValues = r.initial ? {
            ...h
        } : {},
        this.renderState = m,
        this.parent = e,
        this.props = r,
        this.presenceContext = i,
        this.depth = e ? e.depth + 1 : 0,
        this.reducedMotionConfig = a,
        this.options = d,
        this.blockInitialAnimation = !!l,
        this.isControllingVariants = ou(r),
        this.isVariantNode = Gw(r),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(e && e.current);
        const {willChange: y, ...w} = this.scrapeMotionValuesFromProps(r, {}, this);
        for (const E in w) {
            const x = w[E];
            h[E] !== void 0 && bt(x) && x.set(h[E], !1)
        }
    }
    mount(e) {
        this.current = e,
        Gv.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (r, i) => this.bindToMotionValue(i, r)),
        g1.current || bO(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ef.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        Gv.delete(this.current),
        this.projection && this.projection.unmount(),
        Nr(this.notifyUpdate),
        Nr(this.render),
        this.valueSubscriptions.forEach(e => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const e in this.events)
            this.events[e].clear();
        for (const e in this.features) {
            const r = this.features[e];
            r && (r.unmount(),
            r.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(e, r) {
        this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
        const i = ws.has(e)
          , a = r.on("change", d => {
            this.latestValues[e] = d,
            this.props.onUpdate && Ue.preRender(this.notifyUpdate),
            i && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , l = r.on("renderRequest", this.scheduleRender);
        let c;
        window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, e, r)),
        this.valueSubscriptions.set(e, () => {
            a(),
            l(),
            c && c(),
            r.owner && r.stop()
        }
        )
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
        let e = "animation";
        for (e in hi) {
            const r = hi[e];
            if (!r)
                continue;
            const {isEnabled: i, Feature: a} = r;
            if (!this.features[e] && a && i(this.props) && (this.features[e] = new a(this)),
            this.features[e]) {
                const l = this.features[e];
                l.isMounted ? l.update() : (l.mount(),
                l.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ye()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, r) {
        this.latestValues[e] = r
    }
    update(e, r) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = e,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = r;
        for (let i = 0; i < Yv.length; i++) {
            const a = Yv[i];
            this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](),
            delete this.propEventSubscriptions[a]);
            const l = "on" + a
              , c = e[l];
            c && (this.propEventSubscriptions[a] = this.on(a, c))
        }
        this.prevMotionValues = TO(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(e) {
        const r = this.getClosestVariantNode();
        if (r)
            return r.variantChildren && r.variantChildren.add(e),
            () => r.variantChildren.delete(e)
    }
    addValue(e, r) {
        const i = this.values.get(e);
        r !== i && (i && this.removeValue(e),
        this.bindToMotionValue(e, r),
        this.values.set(e, r),
        this.latestValues[e] = r.get())
    }
    removeValue(e) {
        this.values.delete(e);
        const r = this.valueSubscriptions.get(e);
        r && (r(),
        this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, r) {
        if (this.props.values && this.props.values[e])
            return this.props.values[e];
        let i = this.values.get(e);
        return i === void 0 && r !== void 0 && (i = Do(r === null ? void 0 : r, {
            owner: this
        }),
        this.addValue(e, i)),
        i
    }
    readValue(e, r) {
        var i;
        let a = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (i = this.getBaseTargetFromProps(this.props, e)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, e, this.options);
        return a != null && (typeof a == "string" && (Fx(a) || Rx(a)) ? a = parseFloat(a) : !EO(a) && Or.test(r) && (a = Mx(e, r)),
        this.setBaseTarget(e, bt(a) ? a.get() : a)),
        bt(a) ? a.get() : a
    }
    setBaseTarget(e, r) {
        this.baseTarget[e] = r
    }
    getBaseTarget(e) {
        var r;
        const {initial: i} = this.props;
        let a;
        if (typeof i == "string" || typeof i == "object") {
            const c = th(this.props, i, (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom);
            c && (a = c[e])
        }
        if (i && a !== void 0)
            return a;
        const l = this.getBaseTargetFromProps(this.props, e);
        return l !== void 0 && !bt(l) ? l : this.initialValues[e] !== void 0 && a === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, r) {
        return this.events[e] || (this.events[e] = new mh),
        this.events[e].add(r)
    }
    notify(e, ...r) {
        this.events[e] && this.events[e].notify(...r)
    }
}
class y1 extends CO {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = zx
    }
    sortInstanceNodePosition(e, r) {
        return e.compareDocumentPosition(r) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, r) {
        return e.style ? e.style[r] : void 0
    }
    removeValueFromRenderState(e, {vars: r, style: i}) {
        delete r[e],
        delete i[e]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: e} = this.props;
        bt(e) && (this.childSubscription = e.on("change", r => {
            this.current && (this.current.textContent = `${r}`)
        }
        ))
    }
}
function PO(t) {
    return window.getComputedStyle(t)
}
class _O extends y1 {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = sx
    }
    readValueFromInstance(e, r) {
        if (ws.has(r)) {
            const i = xh(r);
            return i && i.default || 0
        } else {
            const i = PO(e)
              , a = (tx(r) ? i.getPropertyValue(r) : i[r]) || 0;
            return typeof a == "string" ? a.trim() : a
        }
    }
    measureInstanceViewportBox(e, {transformPagePoint: r}) {
        return i1(e, r)
    }
    build(e, r, i) {
        sh(e, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, r, i) {
        return lh(e, r, i)
    }
}
class RO extends y1 {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Ye
    }
    getBaseTargetFromProps(e, r) {
        return e[r]
    }
    readValueFromInstance(e, r) {
        if (ws.has(r)) {
            const i = xh(r);
            return i && i.default || 0
        }
        return r = ix.has(r) ? r : Jf(r),
        e.getAttribute(r)
    }
    scrapeMotionValuesFromProps(e, r, i) {
        return lx(e, r, i)
    }
    build(e, r, i) {
        ih(e, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(e, r, i, a) {
        ox(e, r, i, a)
    }
    mount(e) {
        this.isSVGTag = ah(e.tagName),
        super.mount(e)
    }
}
const AO = (t, e) => eh(t) ? new RO(e) : new _O(e,{
    allowProjection: t !== j.Fragment
})
  , NO = nA({
    ...eN,
    ...xO,
    ...uO,
    ...SO
}, AO)
  , v1 = yR(NO)
  , OO = [{
    id: "overall",
    label: "Overall",
    icon: dk,
    color: "text-purple-400"
}, {
    id: "vanilla",
    label: "Vanilla",
    icon: m0,
    color: "text-blue-400"
}, {
    id: "uhc",
    label: "UHC",
    icon: Gb,
    color: "text-red-400"
}, {
    id: "pot",
    label: "Pot",
    icon: Kb,
    color: "text-pink-400"
}, {
    id: "netherop",
    label: "NetherOP",
    icon: pk,
    color: "text-orange-400"
}, {
    id: "smp",
    label: "SMP",
    icon: h0,
    color: "text-yellow-400"
}, {
    id: "sword",
    label: "Sword",
    icon: lk,
    color: "text-cyan-400"
}, {
    id: "axe",
    label: "Axe",
    icon: Ub,
    color: "text-green-400"
}, {
    id: "mace",
    label: "Mace",
    icon: Hb,
    color: "text-violet-400"
}, {
    id: "cart",
    label: "Cart",
    icon: ok,
    color: "text-amber-400"
}];
function jO({activeCategory: t, onCategoryChange: e}) {
    return b.jsx("div", {
        className: "flex items-center gap-1 sm:gap-2 overflow-x-auto pb-2 scrollbar-hide px-1",
        children: OO.map(r => {
            const i = r.icon
              , a = t === r.id;
            return b.jsxs("button", {
                onClick: () => e(r.id),
                className: `relative flex flex-col items-center gap-1.5 px-4 py-3 rounded-xl transition-all duration-200 min-w-[72px] group ${a ? "bg-primary/15 text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`,
                children: [a && b.jsx(v1.div, {
                    layoutId: "activeTab",
                    className: "absolute inset-0 rounded-xl bg-primary/15 border border-primary/30",
                    transition: {
                        type: "spring",
                        bounce: .2,
                        duration: .4
                    }
                }), b.jsx(i, {
                    className: `w-5 h-5 relative z-10 ${a ? r.color : ""} transition-colors`
                }), b.jsx("span", {
                    className: "text-xs font-medium relative z-10 whitespace-nowrap",
                    children: r.label
                })]
            }, r.id)
        }
        )
    })
}
function w1({player: t, size: e=36}) {
    if (t.cracked)
        return b.jsxs("div", {
            className: "rounded-md flex-shrink-0 flex items-center justify-center bg-gray-800 border border-red-500/50 relative overflow-hidden",
            style: {
                width: e,
                height: e,
                minWidth: e
            },
            children: [b.jsx("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: b.jsx("span", {
                    className: "font-heading font-black text-red-500 text-center leading-none select-none",
                    style: {
                        fontSize: e * .22,
                        letterSpacing: "-0.5px"
                    },
                    children: "CRACKED"
                })
            }), b.jsxs("svg", {
                className: "absolute inset-0 w-full h-full opacity-30",
                viewBox: "0 0 40 40",
                children: [b.jsx("line", {
                    x1: "5",
                    y1: "0",
                    x2: "20",
                    y2: "40",
                    stroke: "#ef4444",
                    strokeWidth: "1"
                }), b.jsx("line", {
                    x1: "25",
                    y1: "0",
                    x2: "10",
                    y2: "40",
                    stroke: "#ef4444",
                    strokeWidth: "0.5"
                }), b.jsx("line", {
                    x1: "35",
                    y1: "5",
                    x2: "15",
                    y2: "35",
                    stroke: "#ef4444",
                    strokeWidth: "0.5"
                })]
            })]
        });
    const r = t.avatar_url || `https://mc-heads.net/avatar/${encodeURIComponent(t.username)}/${e}`;
    return b.jsx("img", {
        src: r,
        alt: t.username,
        className: "rounded-md object-cover ring-1 ring-border/50 flex-shrink-0",
        style: {
            width: e,
            height: e,
            minWidth: e
        },
        onError: i => {
            i.target.src = `https://crafatar.com/avatars/${encodeURIComponent(t.username)}?size=${e}&overlay`,
            i.target.onerror = () => {
                i.target.src = `https://ui-avatars.com/api/?name=${t.username}&background=8b5cf6&color=fff&size=${e}`,
                i.target.onerror = null
            }
        }
    })
}
const _o = {
    HT1: 1e3,
    LT1: 900,
    HT2: 800,
    LT2: 700,
    HT3: 600,
    LT3: 500,
    HT4: 400,
    LT4: 300,
    HT5: 200,
    LT5: 100
}
  , Ro = {
    HT1: {
        label: "bg-yellow-500",
        text: "text-yellow-400"
    },
    LT1: {
        label: "bg-yellow-600",
        text: "text-yellow-500"
    },
    HT2: {
        label: "bg-orange-500",
        text: "text-orange-400"
    },
    LT2: {
        label: "bg-orange-600",
        text: "text-orange-500"
    },
    HT3: {
        label: "bg-purple-500",
        text: "text-purple-400"
    },
    LT3: {
        label: "bg-purple-600",
        text: "text-purple-500"
    },
    HT4: {
        label: "bg-blue-500",
        text: "text-blue-400"
    },
    LT4: {
        label: "bg-blue-600",
        text: "text-blue-500"
    },
    HT5: {
        label: "bg-green-500",
        text: "text-green-400"
    },
    LT5: {
        label: "bg-gray-500",
        text: "text-gray-400"
    }
}
  , LO = {
    overall: {
        short: "OVR",
        full: "Overall"
    },
    vanilla: {
        short: "VAN",
        full: "Vanilla"
    },
    uhc: {
        short: "UHC",
        full: "UHC"
    },
    pot: {
        short: "POT",
        full: "Pot"
    },
    netherop: {
        short: "NOP",
        full: "NetherOP"
    },
    smp: {
        short: "SMP",
        full: "SMP"
    },
    sword: {
        short: "SWD",
        full: "Sword"
    },
    axe: {
        short: "AXE",
        full: "Axe"
    },
    mace: {
        short: "MCE",
        full: "Mace"
    },
    cart: {
        short: "CRT",
        full: "Cart"
    }
};
function MO({tier: t, label: e}) {
    const r = Ro[t] || Ro.LT5;
    return b.jsxs("div", {
        className: "flex flex-col items-center gap-0.5",
        children: [b.jsx("span", {
            className: `inline-block px-1.5 py-0.5 rounded text-[10px] font-heading font-bold text-white ${r.label}`,
            children: t
        }), b.jsx("span", {
            className: "text-[9px] text-muted-foreground font-medium",
            children: e
        })]
    })
}
function DO({rank: t}) {
    return t === 1 ? b.jsx("div", {
        className: "w-9 h-9 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-md shadow-yellow-500/30 flex-shrink-0",
        children: b.jsx("span", {
            className: "font-heading font-bold text-black text-sm",
            children: t
        })
    }) : t === 2 ? b.jsx("div", {
        className: "w-9 h-9 rounded-lg bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center shadow-md shadow-gray-400/20 flex-shrink-0",
        children: b.jsx("span", {
            className: "font-heading font-bold text-black text-sm",
            children: t
        })
    }) : t === 3 ? b.jsx("div", {
        className: "w-9 h-9 rounded-lg bg-gradient-to-br from-orange-400 to-amber-700 flex items-center justify-center shadow-md shadow-orange-500/20 flex-shrink-0",
        children: b.jsx("span", {
            className: "font-heading font-bold text-black text-sm",
            children: t
        })
    }) : b.jsx("div", {
        className: "w-9 h-9 rounded-lg bg-secondary/60 border border-border/40 flex items-center justify-center flex-shrink-0",
        children: b.jsx("span", {
            className: "font-heading font-semibold text-muted-foreground text-sm",
            children: t
        })
    })
}
function IO({players: t, activeCategory: e="overall"}) {
    if (t.length === 0)
        return b.jsx("div", {
            className: "flex items-center justify-center py-16 text-muted-foreground/40 italic text-sm",
            children: "No players found"
        });
    const r = e === "overall";
    return b.jsxs("div", {
        className: "rounded-xl border border-border/40 overflow-hidden",
        children: [b.jsxs("div", {
            className: "flex items-center gap-3 px-4 py-2.5 bg-secondary/40 border-b border-border/40 text-xs font-medium uppercase tracking-wider text-muted-foreground",
            children: [b.jsx("span", {
                className: "w-9 text-center flex-shrink-0",
                children: "Rank"
            }), b.jsx("span", {
                className: "w-8 flex-shrink-0"
            }), b.jsx("span", {
                className: "flex-1",
                children: "Player"
            }), r ? b.jsx("span", {
                className: "text-right",
                children: "Tiers"
            }) : b.jsxs(b.Fragment, {
                children: [b.jsx("span", {
                    className: "w-16 text-center",
                    children: "Tier"
                }), b.jsx("span", {
                    className: "w-14 text-right",
                    children: "Points"
                })]
            })]
        }), b.jsx("div", {
            className: "divide-y divide-border/20",
            children: t.map( (i, a) => {
                var g;
                const l = (g = i.tiers) == null ? void 0 : g[e]
                  , c = l && Ro[l] || Ro.LT5
                  , d = l && _o[l] || 0
                  , h = a + 1
                  , m = Object.entries(i.tiers || {}).filter( ([,y]) => !!y);
                return b.jsxs(v1.div, {
                    initial: {
                        opacity: 0,
                        y: 6
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: a * .02
                    },
                    className: `flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/4 ${h <= 3 ? "bg-card/60" : ""}`,
                    children: [b.jsx(DO, {
                        rank: h
                    }), b.jsx(w1, {
                        player: i,
                        size: 36
                    }), b.jsxs("div", {
                        className: "flex flex-col min-w-0 flex-1",
                        children: [b.jsxs("span", {
                            className: "font-heading text-sm font-semibold tracking-wide truncate leading-none",
                            children: [i.username, i.cracked && b.jsx("span", {
                                className: "ml-1.5 text-[10px] text-red-400 font-normal",
                                children: "cracked"
                            })]
                        }), i.title && b.jsx("span", {
                            className: `text-xs leading-none mt-0.5 truncate ${l ? c.text : "text-muted-foreground"}`,
                            children: i.title
                        }), r && m.length > 0 && b.jsx("div", {
                            className: "flex flex-wrap gap-1.5 mt-1.5",
                            children: m.map( ([y,w]) => {
                                var E;
                                return b.jsx(MO, {
                                    tier: w,
                                    label: ((E = LO[y]) == null ? void 0 : E.short) || y.toUpperCase()
                                }, y)
                            }
                            )
                        })]
                    }), !r && l && b.jsxs(b.Fragment, {
                        children: [b.jsx("div", {
                            className: "w-16 flex justify-center flex-shrink-0",
                            children: b.jsx("span", {
                                className: `inline-block px-2 py-0.5 rounded-md text-xs font-heading font-bold text-white ${c.label}`,
                                children: l
                            })
                        }), b.jsxs("div", {
                            className: "w-14 text-right flex-shrink-0",
                            children: [b.jsx("span", {
                                className: `font-heading font-bold text-sm ${c.text}`,
                                children: d
                            }), b.jsx("span", {
                                className: "text-muted-foreground text-xs ml-0.5",
                                children: "pts"
                            })]
                        })]
                    }), r && b.jsxs("div", {
                        className: "flex-shrink-0 text-right",
                        children: [b.jsx("span", {
                            className: "font-heading font-bold text-sm text-primary",
                            children: m.reduce( (y, [,w]) => y + (_o[w] || 0), 0)
                        }), b.jsx("span", {
                            className: "text-muted-foreground text-xs ml-0.5",
                            children: "pts"
                        })]
                    })]
                }, i.id)
            }
            )
        })]
    })
}
function FO() {
    const [t,e] = j.useState("overall")
      , [r,i] = j.useState("")
      , {data: a=[], isLoading: l} = Kl({
        queryKey: ["players"],
        queryFn: () => Mt.entities.Player.list("-created_date", 500)
    })
      , c = j.useMemo( () => {
        const d = t === "overall";
        let h = a.filter(m => {
            var g;
            return d ? m.tiers && Object.values(m.tiers).some(y => !!y) : !!((g = m.tiers) != null && g[t])
        }
        );
        return r.trim() && (h = h.filter(m => {
            var g;
            return (g = m.username) == null ? void 0 : g.toLowerCase().includes(r.toLowerCase())
        }
        )),
        h = [...h].sort( (m, g) => {
            var E, x;
            if (d) {
                const k = S => Object.values(S.tiers || {}).reduce( (R, U) => R + (_o[U] || 0), 0);
                return k(g) - k(m)
            }
            const y = _o[(E = m.tiers) == null ? void 0 : E[t]] || 0;
            return (_o[(x = g.tiers) == null ? void 0 : x[t]] || 0) - y
        }
        ),
        h
    }
    , [a, r, t]);
    return b.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [b.jsx(oR, {
            onSearch: i
        }), b.jsx("div", {
            className: "absolute top-16 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-primary/6 rounded-full blur-3xl pointer-events-none"
        }), b.jsxs("div", {
            className: "relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16",
            children: [b.jsx("div", {
                className: "flex justify-center mb-8",
                children: b.jsx(jO, {
                    activeCategory: t,
                    onCategoryChange: e
                })
            }), l ? b.jsxs("div", {
                className: "flex items-center justify-center py-20",
                children: [b.jsx(ci, {
                    className: "w-6 h-6 animate-spin text-primary"
                }), b.jsx("span", {
                    className: "ml-3 text-sm text-muted-foreground",
                    children: "Loading leaderboard..."
                })]
            }) : b.jsx(IO, {
                players: c,
                activeCategory: t
            })]
        })]
    })
}
const VO = ["", "HT1", "LT1", "HT2", "LT2", "HT3", "LT3", "HT4", "LT4", "HT5", "LT5"]
  , UO = ["overall", "vanilla", "uhc", "pot", "netherop", "smp", "sword", "axe", "mace", "cart"]
  , x1 = {
    overall: "",
    vanilla: "",
    uhc: "",
    pot: "",
    netherop: "",
    smp: "",
    sword: "",
    axe: "",
    mace: "",
    cart: ""
}
  , jd = {
    username: "",
    tiers: {
        ...x1
    },
    title: "",
    wins: 0,
    losses: 0,
    cracked: !1
};
function BO() {
    const {user: t} = ru()
      , e = Gl()
      , r = Wl()
      , [i,a] = j.useState(jd)
      , [l,c] = j.useState(null)
      , [d,h] = j.useState(!1)
      , {data: m=[], isLoading: g} = Kl({
        queryKey: ["players"],
        queryFn: () => Mt.entities.Player.list("-created_date", 500)
    })
      , y = bo({
        mutationFn: _ => Mt.entities.Player.create(_),
        onSuccess: () => {
            r.invalidateQueries(["players"]),
            k()
        }
    })
      , w = bo({
        mutationFn: ({id: _, data: D}) => Mt.entities.Player.update(_, D),
        onSuccess: () => {
            r.invalidateQueries(["players"]),
            k()
        }
    })
      , E = bo({
        mutationFn: _ => Mt.entities.Player.delete(_),
        onSuccess: () => r.invalidateQueries(["players"])
    });
    if (!!!localStorage.getItem("admin_session") && (!t || t.role !== "admin" && t.role !== "owner"))
        return b.jsx("div", {
            className: "min-h-screen bg-background flex items-center justify-center",
            children: b.jsxs("div", {
                className: "text-center",
                children: [b.jsx("h1", {
                    className: "text-2xl font-heading font-bold text-red-400 mb-2",
                    children: "Access Denied"
                }), b.jsx("p", {
                    className: "text-muted-foreground mb-4",
                    children: "You don't have permission to view this page."
                }), b.jsx("button", {
                    onClick: () => e("/"),
                    className: "px-4 py-2 bg-primary text-white rounded-lg text-sm",
                    children: "Go Home"
                })]
            })
        });
    const k = () => {
        a(jd),
        c(null),
        h(!1)
    }
      , S = _ => {
        a({
            username: _.username,
            tiers: {
                ...x1,
                ..._.tiers || {}
            },
            title: _.title || "",
            wins: _.wins || 0,
            losses: _.losses || 0,
            cracked: _.cracked || !1
        }),
        c(_.id),
        h(!0)
    }
      , R = _ => {
        _.preventDefault();
        const D = {};
        Object.entries(i.tiers).forEach( ([Y,I]) => {
            I && (D[Y] = I)
        }
        );
        const K = {
            ...i,
            tiers: D
        };
        l ? w.mutate({
            id: l,
            data: K
        }) : y.mutate(K)
    }
      , U = (_, D) => {
        a(K => ({
            ...K,
            tiers: {
                ...K.tiers,
                [_]: D
            }
        }))
    }
      , L = y.isPending || w.isPending;
    return b.jsx("div", {
        className: "min-h-screen bg-background",
        children: b.jsxs("div", {
            className: "max-w-5xl mx-auto px-4 py-8",
            children: [b.jsxs("div", {
                className: "flex items-center justify-between mb-8",
                children: [b.jsxs("div", {
                    children: [b.jsx("h1", {
                        className: "font-heading text-3xl font-bold text-foreground",
                        children: "Admin Dashboard"
                    }), b.jsx("p", {
                        className: "text-muted-foreground text-sm mt-1",
                        children: "Manage player tier rankings"
                    })]
                }), b.jsxs("div", {
                    className: "flex gap-3",
                    children: [t.role === "owner" && b.jsx("button", {
                        onClick: () => e("/owner"),
                        className: "px-4 py-2 bg-secondary border border-border/50 text-sm rounded-lg hover:bg-secondary/80 transition-colors",
                        children: "Owner Panel"
                    }), b.jsx("button", {
                        onClick: () => e("/"),
                        className: "px-4 py-2 bg-secondary border border-border/50 text-sm rounded-lg hover:bg-secondary/80 transition-colors",
                        children: "View Site"
                    }), b.jsxs("button", {
                        onClick: () => {
                            h(!0),
                            c(null),
                            a(jd)
                        }
                        ,
                        className: "flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-primary/90 transition-colors",
                        children: [b.jsx(p0, {
                            className: "w-4 h-4"
                        }), " Add Player"]
                    })]
                })]
            }), d && b.jsx("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm",
                children: b.jsxs("div", {
                    className: "bg-card border border-border rounded-2xl p-6 w-full max-w-lg mx-4 shadow-2xl max-h-[90vh] overflow-y-auto",
                    children: [b.jsxs("div", {
                        className: "flex items-center justify-between mb-5",
                        children: [b.jsx("h2", {
                            className: "font-heading text-xl font-bold",
                            children: l ? "Edit Player" : "Add Player"
                        }), b.jsx("button", {
                            onClick: k,
                            className: "text-muted-foreground hover:text-foreground",
                            children: b.jsx(y0, {
                                className: "w-5 h-5"
                            })
                        })]
                    }), b.jsxs("form", {
                        onSubmit: R,
                        className: "flex flex-col gap-4",
                        children: [b.jsxs("div", {
                            children: [b.jsx("label", {
                                className: "text-xs text-muted-foreground font-medium mb-1 block",
                                children: "Username *"
                            }), b.jsx("input", {
                                required: !0,
                                value: i.username,
                                onChange: _ => a(D => ({
                                    ...D,
                                    username: _.target.value
                                })),
                                className: "w-full px-3 py-2 bg-secondary border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40",
                                placeholder: "PlayerName"
                            })]
                        }), b.jsxs("div", {
                            children: [b.jsx("label", {
                                className: "text-xs text-muted-foreground font-medium mb-2 block",
                                children: "Tiers per Gamemode"
                            }), b.jsx("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: UO.map(_ => b.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [b.jsx("span", {
                                        className: "text-xs text-muted-foreground w-16 capitalize flex-shrink-0",
                                        children: _
                                    }), b.jsxs("select", {
                                        value: i.tiers[_] || "",
                                        onChange: D => U(_, D.target.value),
                                        className: "flex-1 px-2 py-1.5 bg-secondary border border-border/50 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-primary/40",
                                        children: [b.jsx("option", {
                                            value: "",
                                            children: "— none —"
                                        }), VO.filter(D => D).map(D => b.jsx("option", {
                                            value: D,
                                            children: D
                                        }, D))]
                                    })]
                                }, _))
                            })]
                        }), b.jsxs("div", {
                            children: [b.jsx("label", {
                                className: "text-xs text-muted-foreground font-medium mb-1 block",
                                children: "Title"
                            }), b.jsx("input", {
                                value: i.title,
                                onChange: _ => a(D => ({
                                    ...D,
                                    title: _.target.value
                                })),
                                className: "w-full px-3 py-2 bg-secondary border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40",
                                placeholder: "e.g. Combat Specialist"
                            })]
                        }), b.jsxs("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [b.jsxs("div", {
                                children: [b.jsx("label", {
                                    className: "text-xs text-muted-foreground font-medium mb-1 block",
                                    children: "Wins"
                                }), b.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    value: i.wins,
                                    onChange: _ => a(D => ({
                                        ...D,
                                        wins: Number(_.target.value)
                                    })),
                                    className: "w-full px-3 py-2 bg-secondary border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                                })]
                            }), b.jsxs("div", {
                                children: [b.jsx("label", {
                                    className: "text-xs text-muted-foreground font-medium mb-1 block",
                                    children: "Losses"
                                }), b.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    value: i.losses,
                                    onChange: _ => a(D => ({
                                        ...D,
                                        losses: Number(_.target.value)
                                    })),
                                    className: "w-full px-3 py-2 bg-secondary border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                                })]
                            })]
                        }), b.jsxs("div", {
                            className: "flex items-center gap-3 p-3 bg-secondary/50 rounded-lg border border-border/40",
                            children: [b.jsx("input", {
                                type: "checkbox",
                                id: "cracked",
                                checked: i.cracked,
                                onChange: _ => a(D => ({
                                    ...D,
                                    cracked: _.target.checked
                                })),
                                className: "w-4 h-4 accent-red-500 cursor-pointer"
                            }), b.jsxs("label", {
                                htmlFor: "cracked",
                                className: "text-sm font-medium cursor-pointer select-none",
                                children: ["Cracked Player ", b.jsx("span", {
                                    className: "text-xs text-red-400 ml-1",
                                    children: "(no Minecraft account)"
                                })]
                            })]
                        }), b.jsxs("div", {
                            className: "flex gap-3 mt-2",
                            children: [b.jsx("button", {
                                type: "button",
                                onClick: k,
                                className: "flex-1 px-4 py-2 bg-secondary border border-border/50 rounded-lg text-sm hover:bg-secondary/80 transition-colors",
                                children: "Cancel"
                            }), b.jsxs("button", {
                                type: "submit",
                                disabled: L,
                                className: "flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition-colors disabled:opacity-50",
                                children: [L ? b.jsx(ci, {
                                    className: "w-4 h-4 animate-spin"
                                }) : b.jsx(zb, {
                                    className: "w-4 h-4"
                                }), l ? "Save Changes" : "Add Player"]
                            })]
                        })]
                    })]
                })
            }), g ? b.jsx("div", {
                className: "flex items-center justify-center py-20",
                children: b.jsx(ci, {
                    className: "w-6 h-6 animate-spin text-primary"
                })
            }) : b.jsxs("div", {
                className: "rounded-xl border border-border/40 overflow-hidden",
                children: [b.jsxs("div", {
                    className: "grid grid-cols-[1fr_1fr_80px_80px_80px] gap-2 px-4 py-2.5 bg-secondary/40 border-b border-border/40 text-xs font-medium uppercase tracking-wider text-muted-foreground",
                    children: [b.jsx("span", {
                        children: "Player"
                    }), b.jsx("span", {
                        children: "Tiers"
                    }), b.jsx("span", {
                        children: "Wins"
                    }), b.jsx("span", {
                        children: "Losses"
                    }), b.jsx("span", {
                        className: "text-right",
                        children: "Actions"
                    })]
                }), b.jsxs("div", {
                    className: "divide-y divide-border/20",
                    children: [m.map(_ => b.jsxs("div", {
                        className: "grid grid-cols-[1fr_1fr_80px_80px_80px] gap-2 items-center px-4 py-3 hover:bg-white/4 transition-colors",
                        children: [b.jsxs("div", {
                            className: "flex items-center gap-3 min-w-0",
                            children: [b.jsx(w1, {
                                player: _,
                                size: 32
                            }), b.jsxs("div", {
                                className: "min-w-0",
                                children: [b.jsxs("div", {
                                    className: "font-heading text-sm font-semibold truncate",
                                    children: [_.username, _.cracked && b.jsx("span", {
                                        className: "ml-1.5 text-xs text-red-400 font-normal",
                                        children: "cracked"
                                    })]
                                }), _.title && b.jsx("div", {
                                    className: "text-xs text-muted-foreground truncate",
                                    children: _.title
                                })]
                            })]
                        }), b.jsxs("div", {
                            className: "flex flex-wrap gap-1",
                            children: [_.tiers && Object.entries(_.tiers).filter( ([,D]) => D).map( ([D,K]) => b.jsxs("span", {
                                className: "text-xs bg-primary/15 text-primary px-1.5 py-0.5 rounded font-heading font-bold",
                                children: [D[0].toUpperCase(), ": ", K]
                            }, D)), (!_.tiers || Object.values(_.tiers).every(D => !D)) && b.jsx("span", {
                                className: "text-xs text-muted-foreground/50 italic",
                                children: "no tiers"
                            })]
                        }), b.jsx("span", {
                            className: "text-sm text-green-400",
                            children: _.wins || 0
                        }), b.jsx("span", {
                            className: "text-sm text-red-400",
                            children: _.losses || 0
                        }), b.jsxs("div", {
                            className: "flex items-center gap-2 justify-end",
                            children: [b.jsx("button", {
                                onClick: () => S(_),
                                className: "p-1.5 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors",
                                children: b.jsx(ek, {
                                    className: "w-3.5 h-3.5"
                                })
                            }), b.jsx("button", {
                                onClick: () => E.mutate(_.id),
                                className: "p-1.5 rounded-md hover:bg-red-500/15 text-muted-foreground hover:text-red-400 transition-colors",
                                children: b.jsx(g0, {
                                    className: "w-3.5 h-3.5"
                                })
                            })]
                        })]
                    }, _.id)), m.length === 0 && b.jsx("div", {
                        className: "text-center py-10 text-muted-foreground/50 text-sm italic",
                        children: "No players yet. Add your first player!"
                    })]
                })]
            })]
        })
    })
}
function zO() {
    const [t,e] = j.useState("")
      , [r,i] = j.useState("")
      , [a,l] = j.useState(!1)
      , [c,d] = j.useState(!1)
      , h = Gl()
      , m = async g => {
        g.preventDefault(),
        d(!0),
        l(!1);
        const w = (await Mt.entities.AdminAccount.filter({
            username: t
        })).find(E => E.username === t && E.password === r);
        w ? (localStorage.setItem("admin_session", JSON.stringify({
            username: w.username
        })),
        h("/admin")) : l(!0),
        d(!1)
    }
    ;
    return b.jsx("div", {
        className: "min-h-screen bg-background flex items-center justify-center",
        children: b.jsxs("div", {
            className: "bg-card border border-border/40 rounded-2xl p-8 w-full max-w-sm shadow-2xl",
            children: [b.jsx("h1", {
                className: "font-heading text-2xl font-bold text-center mb-1",
                children: "Admin Login"
            }), b.jsx("p", {
                className: "text-muted-foreground text-xs text-center mb-6",
                children: "Enter your admin credentials"
            }), b.jsxs("form", {
                onSubmit: m,
                className: "flex flex-col gap-4",
                children: [b.jsx("input", {
                    type: "text",
                    value: t,
                    onChange: g => {
                        e(g.target.value),
                        l(!1)
                    }
                    ,
                    placeholder: "Username",
                    autoFocus: !0,
                    required: !0,
                    className: "w-full px-4 py-3 bg-secondary border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                }), b.jsx("input", {
                    type: "password",
                    value: r,
                    onChange: g => {
                        i(g.target.value),
                        l(!1)
                    }
                    ,
                    placeholder: "Password",
                    required: !0,
                    className: "w-full px-4 py-3 bg-secondary border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                }), a && b.jsx("p", {
                    className: "text-red-400 text-xs text-center",
                    children: "Invalid username or password."
                }), b.jsxs("button", {
                    type: "submit",
                    disabled: c,
                    className: "w-full py-3 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2",
                    children: [c && b.jsx(ci, {
                        className: "w-4 h-4 animate-spin"
                    }), "Login"]
                })]
            })]
        })
    })
}
function $O() {
    const {user: t} = ru()
      , e = Gl()
      , r = Wl()
      , [i,a] = j.useState("")
      , [l,c] = j.useState("")
      , [d,h] = j.useState(null)
      , {data: m=[], isLoading: g} = Kl({
        queryKey: ["adminAccounts"],
        queryFn: () => Mt.entities.AdminAccount.list()
    })
      , y = bo({
        mutationFn: x => Mt.entities.AdminAccount.create(x),
        onSuccess: () => {
            r.invalidateQueries(["adminAccounts"]),
            a(""),
            c(""),
            h({
                type: "success",
                text: "Admin account created!"
            }),
            setTimeout( () => h(null), 3e3)
        }
    })
      , w = bo({
        mutationFn: x => Mt.entities.AdminAccount.delete(x),
        onSuccess: () => r.invalidateQueries(["adminAccounts"])
    });
    if (!t || t.role !== "owner")
        return b.jsx("div", {
            className: "min-h-screen bg-background flex items-center justify-center",
            children: b.jsxs("div", {
                className: "text-center",
                children: [b.jsx("h1", {
                    className: "text-2xl font-heading font-bold text-red-400 mb-2",
                    children: "Access Denied"
                }), b.jsx("p", {
                    className: "text-muted-foreground mb-4",
                    children: "Only the owner can access this page."
                }), b.jsx("button", {
                    onClick: () => e("/"),
                    className: "px-4 py-2 bg-primary text-white rounded-lg text-sm",
                    children: "Go Home"
                })]
            })
        });
    const E = x => {
        x.preventDefault(),
        !(!i.trim() || !l.trim()) && y.mutate({
            username: i.trim(),
            password: l.trim()
        })
    }
    ;
    return b.jsx("div", {
        className: "min-h-screen bg-background",
        children: b.jsxs("div", {
            className: "max-w-4xl mx-auto px-4 py-8",
            children: [b.jsxs("div", {
                className: "flex items-center justify-between mb-8",
                children: [b.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [b.jsx("div", {
                        className: "w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center",
                        children: b.jsx(h0, {
                            className: "w-5 h-5 text-black"
                        })
                    }), b.jsxs("div", {
                        children: [b.jsx("h1", {
                            className: "font-heading text-3xl font-bold text-foreground",
                            children: "Owner Dashboard"
                        }), b.jsx("p", {
                            className: "text-muted-foreground text-sm",
                            children: "Manage admin accounts"
                        })]
                    })]
                }), b.jsxs("div", {
                    className: "flex gap-3",
                    children: [b.jsx("button", {
                        onClick: () => e("/admin"),
                        className: "px-4 py-2 bg-secondary border border-border/50 text-sm rounded-lg hover:bg-secondary/80 transition-colors",
                        children: "Admin Panel"
                    }), b.jsx("button", {
                        onClick: () => e("/"),
                        className: "px-4 py-2 bg-secondary border border-border/50 text-sm rounded-lg hover:bg-secondary/80 transition-colors",
                        children: "View Site"
                    })]
                })]
            }), b.jsxs("div", {
                className: "bg-card border border-border/40 rounded-2xl p-6 mb-6",
                children: [b.jsxs("h2", {
                    className: "font-heading text-lg font-bold mb-4 flex items-center gap-2",
                    children: [b.jsx(Xb, {
                        className: "w-5 h-5 text-primary"
                    }), " Create Admin Account"]
                }), b.jsxs("form", {
                    onSubmit: E,
                    className: "flex gap-3 flex-wrap",
                    children: [b.jsx("input", {
                        type: "text",
                        required: !0,
                        value: i,
                        onChange: x => a(x.target.value),
                        placeholder: "Username",
                        className: "flex-1 min-w-[140px] px-3 py-2 bg-secondary border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    }), b.jsx("input", {
                        type: "text",
                        required: !0,
                        value: l,
                        onChange: x => c(x.target.value),
                        placeholder: "Password",
                        className: "flex-1 min-w-[140px] px-3 py-2 bg-secondary border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    }), b.jsxs("button", {
                        type: "submit",
                        disabled: y.isPending,
                        className: "flex items-center gap-2 px-5 py-2 bg-primary text-white text-sm rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50",
                        children: [y.isPending ? b.jsx(ci, {
                            className: "w-4 h-4 animate-spin"
                        }) : b.jsx(p0, {
                            className: "w-4 h-4"
                        }), "Create"]
                    })]
                }), d && b.jsx("p", {
                    className: `mt-3 text-sm ${d.type === "success" ? "text-green-400" : "text-red-400"}`,
                    children: d.text
                })]
            }), b.jsxs("div", {
                className: "bg-card border border-border/40 rounded-2xl overflow-hidden",
                children: [b.jsxs("div", {
                    className: "px-6 py-4 border-b border-border/40 flex items-center gap-2",
                    children: [b.jsx(m0, {
                        className: "w-4 h-4 text-primary"
                    }), b.jsx("h2", {
                        className: "font-heading text-lg font-bold",
                        children: "Admin Accounts"
                    }), b.jsxs("span", {
                        className: "ml-auto text-xs text-muted-foreground",
                        children: [m.length, " accounts"]
                    })]
                }), g ? b.jsx("div", {
                    className: "flex justify-center py-10",
                    children: b.jsx(ci, {
                        className: "w-5 h-5 animate-spin text-primary"
                    })
                }) : m.length === 0 ? b.jsx("div", {
                    className: "text-center py-10 text-muted-foreground/50 text-sm italic",
                    children: "No admin accounts yet. Create one above."
                }) : b.jsx("div", {
                    className: "divide-y divide-border/20",
                    children: m.map(x => {
                        var k, S, R;
                        return b.jsxs("div", {
                            className: "flex items-center gap-4 px-6 py-4",
                            children: [b.jsx("div", {
                                className: "w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary flex-shrink-0",
                                children: ((S = (k = x.username) == null ? void 0 : k[0]) == null ? void 0 : S.toUpperCase()) || "A"
                            }), b.jsxs("div", {
                                className: "flex-1 min-w-0",
                                children: [b.jsx("div", {
                                    className: "font-medium text-sm",
                                    children: x.username
                                }), b.jsxs("div", {
                                    className: "text-xs text-muted-foreground",
                                    children: ["Password: ", "•".repeat(((R = x.password) == null ? void 0 : R.length) || 6)]
                                })]
                            }), b.jsx("button", {
                                onClick: () => w.mutate(x.id),
                                className: "p-1.5 rounded-md hover:bg-red-500/15 text-muted-foreground hover:text-red-400 transition-colors",
                                title: "Delete account",
                                children: b.jsx(g0, {
                                    className: "w-3.5 h-3.5"
                                })
                            })]
                        }, x.id)
                    }
                    )
                })]
            })]
        })
    })
}
const HO = () => {
    const {isLoadingAuth: t, isLoadingPublicSettings: e, authError: r, navigateToLogin: i} = ru();
    if (e || t)
        return b.jsx("div", {
            className: "fixed inset-0 flex items-center justify-center",
            children: b.jsx("div", {
                className: "w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"
            })
        });
    if (r) {
        if (r.type === "user_not_registered")
            return b.jsx(sR, {});
        if (r.type === "auth_required")
            return i(),
            null
    }
    return b.jsxs(MT, {
        children: [b.jsx(Ws, {
            path: "/",
            element: b.jsx(FO, {})
        }), b.jsx(Ws, {
            path: "/admin",
            element: b.jsx(BO, {})
        }), b.jsx(Ws, {
            path: "/admin-login",
            element: b.jsx(zO, {})
        }), b.jsx(Ws, {
            path: "/owner",
            element: b.jsx($O, {})
        }), b.jsx(Ws, {
            path: "*",
            element: b.jsx(nR, {})
        })]
    })
}
;
function qO() {
    return b.jsx(rR, {
        children: b.jsxs(NE, {
            client: $E,
            children: [b.jsx(zT, {
                children: b.jsx(HO, {})
            }), b.jsx(oE, {})]
        })
    })
}
_b.createRoot(document.getElementById("root")).render(b.jsx(qO, {}));

"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [86942], {
        472535: (e, t, r) => {
            var n = r(756237),
                o = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                u = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                c = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                s = {};

            function a(e) {
                return n.isMemo(e) ? c : s[e.$$typeof] || o
            }
            s[n.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, s[n.Memo] = c;
            var i = Object.defineProperty,
                f = Object.getOwnPropertyNames,
                l = Object.getOwnPropertySymbols,
                p = Object.getOwnPropertyDescriptor,
                d = Object.getPrototypeOf,
                y = Object.prototype;
            e.exports = function e(t, r, n) {
                if ("string" != typeof r) {
                    if (y) {
                        var o = d(r);
                        o && o !== y && e(t, o, n)
                    }
                    var c = f(r);
                    l && (c = c.concat(l(r)));
                    for (var s = a(t), m = a(r), S = 0; S < c.length; ++S) {
                        var b = c[S];
                        if (!(u[b] || n && n[b] || m && m[b] || s && s[b])) {
                            var v = p(r, b);
                            try {
                                i(t, b, v)
                            } catch (e) {}
                        }
                    }
                }
                return t
            }
        },
        760198: (e, t) => {
            var r = "function" == typeof Symbol && Symbol.for,
                n = r ? Symbol.for("react.element") : 60103,
                o = r ? Symbol.for("react.portal") : 60106,
                u = r ? Symbol.for("react.fragment") : 60107,
                c = r ? Symbol.for("react.strict_mode") : 60108,
                s = r ? Symbol.for("react.profiler") : 60114,
                a = r ? Symbol.for("react.provider") : 60109,
                i = r ? Symbol.for("react.context") : 60110,
                f = r ? Symbol.for("react.async_mode") : 60111,
                l = r ? Symbol.for("react.concurrent_mode") : 60111,
                p = r ? Symbol.for("react.forward_ref") : 60112,
                d = r ? Symbol.for("react.suspense") : 60113,
                y = r ? Symbol.for("react.suspense_list") : 60120,
                m = r ? Symbol.for("react.memo") : 60115,
                S = r ? Symbol.for("react.lazy") : 60116,
                b = r ? Symbol.for("react.block") : 60121,
                v = r ? Symbol.for("react.fundamental") : 60117,
                h = r ? Symbol.for("react.responder") : 60118,
                g = r ? Symbol.for("react.scope") : 60119;

            function w(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case n:
                            switch (e = e.type) {
                                case f:
                                case l:
                                case u:
                                case s:
                                case c:
                                case d:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case i:
                                        case p:
                                        case S:
                                        case m:
                                        case a:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case o:
                            return t
                    }
                }
            }

            function P(e) {
                return w(e) === l
            }
            t.AsyncMode = f, t.ConcurrentMode = l, t.ContextConsumer = i, t.ContextProvider = a, t.Element = n, t.ForwardRef = p, t.Fragment = u, t.Lazy = S, t.Memo = m, t.Portal = o, t.Profiler = s, t.StrictMode = c, t.Suspense = d, t.isAsyncMode = function(e) {
                return P(e) || w(e) === f
            }, t.isConcurrentMode = P, t.isContextConsumer = function(e) {
                return w(e) === i
            }, t.isContextProvider = function(e) {
                return w(e) === a
            }, t.isElement = function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === n
            }, t.isForwardRef = function(e) {
                return w(e) === p
            }, t.isFragment = function(e) {
                return w(e) === u
            }, t.isLazy = function(e) {
                return w(e) === S
            }, t.isMemo = function(e) {
                return w(e) === m
            }, t.isPortal = function(e) {
                return w(e) === o
            }, t.isProfiler = function(e) {
                return w(e) === s
            }, t.isStrictMode = function(e) {
                return w(e) === c
            }, t.isSuspense = function(e) {
                return w(e) === d
            }, t.isValidElementType = function(e) {
                return "string" == typeof e || "function" == typeof e || e === u || e === l || e === s || e === c || e === d || e === y || "object" == typeof e && null !== e && (e.$$typeof === S || e.$$typeof === m || e.$$typeof === a || e.$$typeof === i || e.$$typeof === p || e.$$typeof === v || e.$$typeof === h || e.$$typeof === g || e.$$typeof === b)
            }, t.typeOf = w
        },
        756237: (e, t, r) => {
            e.exports = r(760198)
        },
        811195: (e, t) => {
            var r, n = Symbol.for("react.element"),
                o = Symbol.for("react.portal"),
                u = Symbol.for("react.fragment"),
                c = Symbol.for("react.strict_mode"),
                s = Symbol.for("react.profiler"),
                a = Symbol.for("react.provider"),
                i = Symbol.for("react.context"),
                f = Symbol.for("react.server_context"),
                l = Symbol.for("react.forward_ref"),
                p = Symbol.for("react.suspense"),
                d = Symbol.for("react.suspense_list"),
                y = Symbol.for("react.memo"),
                m = Symbol.for("react.lazy"),
                S = Symbol.for("react.offscreen");

            function b(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case n:
                            switch (e = e.type) {
                                case u:
                                case s:
                                case c:
                                case p:
                                case d:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case f:
                                        case i:
                                        case l:
                                        case m:
                                        case y:
                                        case a:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case o:
                            return t
                    }
                }
            }
            r = Symbol.for("react.module.reference"), t.isContextConsumer = function(e) {
                return b(e) === i
            }
        },
        361357: (e, t, r) => {
            e.exports = r(811195)
        },
        386942: (e, t, r) => {
            r.r(t), r.d(t, {
                Provider: () => V,
                ReactReduxContext: () => i,
                batch: () => u.unstable_batchedUpdates,
                connect: () => B,
                createDispatchHook: () => L,
                createSelectorHook: () => y,
                createStoreHook: () => W,
                shallowEqual: () => N,
                useDispatch: () => U,
                useSelector: () => m,
                useStore: () => z
            });
            var n = r(104322),
                o = r(107231),
                u = r(500962);
            let c = function(e) {
                e()
            };
            const s = () => c;
            var a = r(50959);
            const i = (0, a.createContext)(null);

            function f() {
                return (0, a.useContext)(i)
            }
            const l = () => {
                throw new Error("uSES not initialized!")
            };
            let p = l;
            const d = (e, t) => e === t;

            function y(e = i) {
                const t = e === i ? f : () => (0, a.useContext)(e);
                return function(e, r = d) {
                    const {
                        store: n,
                        subscription: o,
                        getServerState: u
                    } = t(), c = p(o.addNestedSub, n.getState, u || n.getState, e, r);
                    return (0, a.useDebugValue)(c), c
                }
            }
            const m = y();
            var S = r(315882),
                b = r(330950),
                v = r(472535),
                h = r.n(v),
                g = r(361357);
            const w = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];

            function P(e, t, r, n, {
                areStatesEqual: o,
                areOwnPropsEqual: u,
                areStatePropsEqual: c
            }) {
                let s, a, i, f, l, p = !1;

                function d(p, d) {
                    const y = !u(d, a),
                        m = !o(p, s, d, a);
                    return s = p, a = d, y && m ? (i = e(s, a), t.dependsOnOwnProps && (f = t(n, a)), l = r(i, f, a), l) : y ? (e.dependsOnOwnProps && (i = e(s, a)), t.dependsOnOwnProps && (f = t(n, a)), l = r(i, f, a), l) : m ? function() {
                        const t = e(s, a),
                            n = !c(t, i);
                        return i = t, n && (l = r(i, f, a)), l
                    }() : l
                }
                return function(o, u) {
                    return p ? d(o, u) : (s = o, a = u, i = e(s, a), f = t(n, a), l = r(i, f, a), p = !0, l)
                }
            }

            function x(e) {
                return function(t) {
                    const r = e(t);

                    function n() {
                        return r
                    }
                    return n.dependsOnOwnProps = !1, n
                }
            }

            function O(e) {
                return e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length
            }

            function E(e, t) {
                return function(t, {
                    displayName: r
                }) {
                    const n = function(e, t) {
                        return n.dependsOnOwnProps ? n.mapToProps(e, t) : n.mapToProps(e, void 0)
                    };
                    return n.dependsOnOwnProps = !0, n.mapToProps = function(t, r) {
                        n.mapToProps = e, n.dependsOnOwnProps = O(e);
                        let o = n(t, r);
                        return "function" == typeof o && (n.mapToProps = o, n.dependsOnOwnProps = O(o), o = n(t, r)), o
                    }, n
                }
            }

            function $(e, t) {
                return (r, n) => {
                    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`)
                }
            }

            function C(e, t, r) {
                return (0, S.default)({}, r, e, t)
            }
            const M = {
                notify() {},
                get: () => []
            };

            function R(e, t) {
                let r, n = M;

                function o() {
                    c.onStateChange && c.onStateChange()
                }

                function u() {
                    r || (r = t ? t.addNestedSub(o) : e.subscribe(o), n = function() {
                        const e = s();
                        let t = null,
                            r = null;
                        return {
                            clear() {
                                t = null, r = null
                            },
                            notify() {
                                e((() => {
                                    let e = t;
                                    for (; e;) e.callback(), e = e.next
                                }))
                            },
                            get() {
                                let e = [],
                                    r = t;
                                for (; r;) e.push(r), r = r.next;
                                return e
                            },
                            subscribe(e) {
                                let n = !0,
                                    o = r = {
                                        callback: e,
                                        next: null,
                                        prev: r
                                    };
                                return o.prev ? o.prev.next = o : t = o,
                                    function() {
                                        n && null !== t && (n = !1, o.next ? o.next.prev = o.prev : r = o.prev, o.prev ? o.prev.next = o.next : t = o.next)
                                    }
                            }
                        }
                    }())
                }
                const c = {
                    addNestedSub: function(e) {
                        return u(), n.subscribe(e)
                    },
                    notifyNestedSubs: function() {
                        n.notify()
                    },
                    handleChangeWrapper: o,
                    isSubscribed: function() {
                        return Boolean(r)
                    },
                    trySubscribe: u,
                    tryUnsubscribe: function() {
                        r && (r(), r = void 0, n.clear(), n = M)
                    },
                    getListeners: () => n
                };
                return c
            }
            const T = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement) ? a.useLayoutEffect : a.useEffect;

            function j(e, t) {
                return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
            }

            function N(e, t) {
                if (j(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                const r = Object.keys(e),
                    n = Object.keys(t);
                if (r.length !== n.length) return !1;
                for (let n = 0; n < r.length; n++)
                    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !j(e[r[n]], t[r[n]])) return !1;
                return !0
            }
            const k = ["reactReduxForwardedRef"];
            let q = l;
            const D = [null, null];

            function _(e, t, r, n, o, u) {
                e.current = n, r.current = !1, o.current && (o.current = null, u())
            }

            function F(e, t) {
                return e === t
            }
            const B = function(e, t, r, {
                pure: n,
                areStatesEqual: o = F,
                areOwnPropsEqual: u = N,
                areStatePropsEqual: c = N,
                areMergedPropsEqual: s = N,
                forwardRef: f = !1,
                context: l = i
            } = {}) {
                const p = l,
                    d = function(e) {
                        return e ? "function" == typeof e ? E(e) : $(e, "mapStateToProps") : x((() => ({})))
                    }(e),
                    y = function(e) {
                        return e && "object" == typeof e ? x((t => function(e, t) {
                            const r = {};
                            for (const n in e) {
                                const o = e[n];
                                "function" == typeof o && (r[n] = (...e) => t(o(...e)))
                            }
                            return r
                        }(e, t))) : e ? "function" == typeof e ? E(e) : $(e, "mapDispatchToProps") : x((e => ({
                            dispatch: e
                        })))
                    }(t),
                    m = function(e) {
                        return e ? "function" == typeof e ? function(e) {
                            return function(t, {
                                displayName: r,
                                areMergedPropsEqual: n
                            }) {
                                let o, u = !1;
                                return function(t, r, c) {
                                    const s = e(t, r, c);
                                    return u ? n(s, o) || (o = s) : (u = !0, o = s), o
                                }
                            }
                        }(e) : $(e, "mergeProps") : () => C
                    }(r),
                    v = Boolean(e);
                return e => {
                    const t = e.displayName || e.name || "Component",
                        r = `Connect(${t})`,
                        n = {
                            shouldHandleStateChanges: v,
                            displayName: r,
                            wrappedComponentName: t,
                            WrappedComponent: e,
                            initMapStateToProps: d,
                            initMapDispatchToProps: y,
                            initMergeProps: m,
                            areStatesEqual: o,
                            areStatePropsEqual: c,
                            areOwnPropsEqual: u,
                            areMergedPropsEqual: s
                        };

                    function i(t) {
                        const [r, o, u] = (0, a.useMemo)((() => {
                            const {
                                reactReduxForwardedRef: e
                            } = t, r = (0, b.default)(t, k);
                            return [t.context, e, r]
                        }), [t]), c = (0, a.useMemo)((() => r && r.Consumer && (0, g.isContextConsumer)(a.createElement(r.Consumer, null)) ? r : p), [r, p]), s = (0, a.useContext)(c), i = Boolean(t.store) && Boolean(t.store.getState) && Boolean(t.store.dispatch), f = Boolean(s) && Boolean(s.store);
                        const l = i ? t.store : s.store,
                            d = f ? s.getServerState : l.getState,
                            y = (0, a.useMemo)((() => function(e, t) {
                                let {
                                    initMapStateToProps: r,
                                    initMapDispatchToProps: n,
                                    initMergeProps: o
                                } = t, u = (0, b.default)(t, w);
                                return P(r(e, u), n(e, u), o(e, u), e, u)
                            }(l.dispatch, n)), [l]),
                            [m, h] = (0, a.useMemo)((() => {
                                if (!v) return D;
                                const e = R(l, i ? void 0 : s.subscription),
                                    t = e.notifyNestedSubs.bind(e);
                                return [e, t]
                            }), [l, i, s]),
                            x = (0, a.useMemo)((() => i ? s : (0, S.default)({}, s, {
                                subscription: m
                            })), [i, s, m]),
                            O = (0, a.useRef)(),
                            E = (0, a.useRef)(u),
                            $ = (0, a.useRef)(),
                            C = (0, a.useRef)(!1),
                            M = ((0, a.useRef)(!1), (0, a.useRef)(!1)),
                            j = (0, a.useRef)();
                        T((() => (M.current = !0, () => {
                            M.current = !1
                        })), []);
                        const N = (0, a.useMemo)((() => () => $.current && u === E.current ? $.current : y(l.getState(), u)), [l, u]),
                            F = (0, a.useMemo)((() => e => m ? function(e, t, r, n, o, u, c, s, a, i, f) {
                                if (!e) return () => {};
                                let l = !1,
                                    p = null;
                                const d = () => {
                                    if (l || !s.current) return;
                                    const e = t.getState();
                                    let r, d;
                                    try {
                                        r = n(e, o.current)
                                    } catch (e) {
                                        d = e, p = e
                                    }
                                    d || (p = null), r === u.current ? c.current || i() : (u.current = r, a.current = r, c.current = !0, f())
                                };
                                return r.onStateChange = d, r.trySubscribe(), d(), () => {
                                    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, p) throw p
                                }
                            }(v, l, m, y, E, O, C, M, $, h, e) : () => {}), [m]);
                        var B, V, W;
                        let z;
                        B = _, V = [E, O, C, u, $, h], T((() => B(...V)), W);
                        try {
                            z = q(F, N, d ? () => y(d(), u) : N)
                        } catch (e) {
                            throw j.current && (e.message += `\nThe error may be correlated with this previous error:\n${j.current.stack}\n\n`), e
                        }
                        T((() => {
                            j.current = void 0, $.current = void 0, O.current = z
                        }));
                        const L = (0, a.useMemo)((() => a.createElement(e, (0, S.default)({}, z, {
                            ref: o
                        }))), [o, e, z]);
                        return (0, a.useMemo)((() => v ? a.createElement(c.Provider, {
                            value: x
                        }, L) : L), [c, L, x])
                    }
                    const l = a.memo(i);
                    if (l.WrappedComponent = e, l.displayName = i.displayName = r, f) {
                        const t = a.forwardRef((function(e, t) {
                            return a.createElement(l, (0, S.default)({}, e, {
                                reactReduxForwardedRef: t
                            }))
                        }));
                        return t.displayName = r, t.WrappedComponent = e, h()(t, e)
                    }
                    return h()(l, e)
                }
            };
            const V = function({
                store: e,
                context: t,
                children: r,
                serverState: n
            }) {
                const o = (0, a.useMemo)((() => {
                        const t = R(e);
                        return {
                            store: e,
                            subscription: t,
                            getServerState: n ? () => n : void 0
                        }
                    }), [e, n]),
                    u = (0, a.useMemo)((() => e.getState()), [e]);
                T((() => {
                    const {
                        subscription: t
                    } = o;
                    return t.onStateChange = t.notifyNestedSubs, t.trySubscribe(), u !== e.getState() && t.notifyNestedSubs(), () => {
                        t.tryUnsubscribe(), t.onStateChange = void 0
                    }
                }), [o, u]);
                const c = t || i;
                return a.createElement(c.Provider, {
                    value: o
                }, r)
            };

            function W(e = i) {
                const t = e === i ? f : () => (0, a.useContext)(e);
                return function() {
                    const {
                        store: e
                    } = t();
                    return e
                }
            }
            const z = W();

            function L(e = i) {
                const t = e === i ? z : W(e);
                return function() {
                    return t().dispatch
                }
            }
            const U = L();
            var H, A;
            H = o.useSyncExternalStoreWithSelector, p = H, (e => {
                q = e
            })(n.useSyncExternalStore), A = u.unstable_batchedUpdates, c = A
        },
        12415: (e, t, r) => {
            var n = r(50959);
            var o = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                u = n.useState,
                c = n.useEffect,
                s = n.useLayoutEffect,
                a = n.useDebugValue;

            function i(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var r = t();
                    return !o(e, r)
                } catch (e) {
                    return !0
                }
            }
            var f = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var r = t(),
                    n = u({
                        inst: {
                            value: r,
                            getSnapshot: t
                        }
                    }),
                    o = n[0].inst,
                    f = n[1];
                return s((function() {
                    o.value = r, o.getSnapshot = t, i(o) && f({
                        inst: o
                    })
                }), [e, r, t]), c((function() {
                    return i(o) && f({
                        inst: o
                    }), e((function() {
                        i(o) && f({
                            inst: o
                        })
                    }))
                }), [e]), a(r), r
            };
            t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : f
        },
        102179: (e, t, r) => {
            var n = r(50959),
                o = r(104322);
            var u = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                c = o.useSyncExternalStore,
                s = n.useRef,
                a = n.useEffect,
                i = n.useMemo,
                f = n.useDebugValue;
            t.useSyncExternalStoreWithSelector = function(e, t, r, n, o) {
                var l = s(null);
                if (null === l.current) {
                    var p = {
                        hasValue: !1,
                        value: null
                    };
                    l.current = p
                } else p = l.current;
                l = i((function() {
                    function e(e) {
                        if (!a) {
                            if (a = !0, c = e, e = n(e), void 0 !== o && p.hasValue) {
                                var t = p.value;
                                if (o(t, e)) return s = t
                            }
                            return s = e
                        }
                        if (t = s, u(c, e)) return t;
                        var r = n(e);
                        return void 0 !== o && o(t, r) ? t : (c = e, s = r)
                    }
                    var c, s, a = !1,
                        i = void 0 === r ? null : r;
                    return [function() {
                        return e(t())
                    }, null === i ? void 0 : function() {
                        return e(i())
                    }]
                }), [t, r, n, o]);
                var d = c(e, l[0], l[1]);
                return a((function() {
                    p.hasValue = !0, p.value = d
                }), [d]), f(d), d
            }
        },
        104322: (e, t, r) => {
            e.exports = r(12415)
        },
        107231: (e, t, r) => {
            e.exports = r(102179)
        }
    }
]);
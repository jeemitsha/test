"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [26300], {
        826300: (t, e, r) => {
            r.d(e, {
                configureStore: () => A,
                createAction: () => E,
                createAsyncThunk: () => F,
                createSlice: () => D,
                nanoid: () => k
            });
            var n = r(438253),
                o = (r(377145), r(691622));

            function i(t) {
                return function(e) {
                    var r = e.dispatch,
                        n = e.getState;
                    return function(e) {
                        return function(o) {
                            return "function" == typeof o ? o(r, n, t) : e(o)
                        }
                    }
                }
            }
            var u = i();
            u.withExtraArgument = i;
            const a = u;
            var c, f = (c = function(t, e) {
                    return c = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                    }, c(t, e)
                }, function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function r() {
                        this.constructor = t
                    }
                    c(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                }),
                l = function(t, e) {
                    var r, n, o, i, u = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return u.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            u.label++, n = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = u.ops.pop(), u.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = u.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                u.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && u.label < o[1]) {
                                                u.label = o[1], o = i;
                                                break
                                            }
                                            if (o && u.label < o[2]) {
                                                u.label = o[2], u.ops.push(i);
                                                break
                                            }
                                            o[2] && u.ops.pop(), u.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, u)
                                } catch (t) {
                                    i = [6, t], n = 0
                                } finally {
                                    r = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                },
                s = function(t, e) {
                    for (var r = 0, n = e.length, o = t.length; r < n; r++, o++) t[o] = e[r];
                    return t
                },
                p = Object.defineProperty,
                d = Object.defineProperties,
                v = Object.getOwnPropertyDescriptors,
                y = Object.getOwnPropertySymbols,
                h = Object.prototype.hasOwnProperty,
                b = Object.prototype.propertyIsEnumerable,
                g = function(t, e, r) {
                    return e in t ? p(t, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: r
                    }) : t[e] = r
                },
                m = function(t, e) {
                    for (var r in e || (e = {})) h.call(e, r) && g(t, r, e[r]);
                    if (y)
                        for (var n = 0, o = y(e); n < o.length; n++) {
                            r = o[n];
                            b.call(e, r) && g(t, r, e[r])
                        }
                    return t
                },
                w = function(t, e) {
                    return d(t, v(e))
                },
                O = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
                    if (0 !== arguments.length) return "object" == typeof arguments[0] ? o.compose : o.compose.apply(null, arguments)
                };
            "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;

            function P(t) {
                if ("object" != typeof t || null === t) return !1;
                for (var e = t; null !== Object.getPrototypeOf(e);) e = Object.getPrototypeOf(e);
                return Object.getPrototypeOf(t) === e
            }
            var j = function(t) {
                function e() {
                    for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                    var o = t.apply(this, r) || this;
                    return Object.setPrototypeOf(o, e.prototype), o
                }
                return f(e, t), Object.defineProperty(e, Symbol.species, {
                    get: function() {
                        return e
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.concat = function() {
                    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                    return t.prototype.concat.apply(this, e)
                }, e.prototype.prepend = function() {
                    for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                    return 1 === t.length && Array.isArray(t[0]) ? new(e.bind.apply(e, s([void 0], t[0].concat(this)))) : new(e.bind.apply(e, s([void 0], t.concat(this))))
                }, e
            }(Array);

            function S() {
                return function(t) {
                    return function(t) {
                        void 0 === t && (t = {});
                        var e = t.thunk,
                            r = void 0 === e || e,
                            n = (t.immutableCheck, t.serializableCheck, new j);
                        r && ("boolean" == typeof r ? n.push(a) : n.push(a.withExtraArgument(r.extraArgument)));
                        0;
                        return n
                    }(t)
                }
            }

            function A(t) {
                var e, r = S(),
                    n = t || {},
                    i = n.reducer,
                    u = void 0 === i ? void 0 : i,
                    a = n.middleware,
                    c = void 0 === a ? r() : a,
                    f = n.devTools,
                    l = void 0 === f || f,
                    p = n.preloadedState,
                    d = void 0 === p ? void 0 : p,
                    v = n.enhancers,
                    y = void 0 === v ? void 0 : v;
                if ("function" == typeof u) e = u;
                else {
                    if (!P(u)) throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
                    e = (0, o.combineReducers)(u)
                }
                var h = c;
                "function" == typeof h && (h = h(r));
                var b = o.applyMiddleware.apply(void 0, h),
                    g = o.compose;
                l && (g = O(m({
                    trace: !1
                }, "object" == typeof l && l)));
                var w = [b];
                Array.isArray(y) ? w = s([b], y) : "function" == typeof y && (w = y(w));
                var j = g.apply(void 0, w);
                return (0, o.createStore)(e, d, j)
            }

            function E(t, e) {
                function r() {
                    for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                    if (e) {
                        var o = e.apply(void 0, r);
                        if (!o) throw new Error("prepareAction did not return an object");
                        return m(m({
                            type: t,
                            payload: o.payload
                        }, "meta" in o && {
                            meta: o.meta
                        }), "error" in o && {
                            error: o.error
                        })
                    }
                    return {
                        type: t,
                        payload: r[0]
                    }
                }
                return r.toString = function() {
                    return "" + t
                }, r.type = t, r.match = function(e) {
                    return e.type === t
                }, r
            }

            function _(t) {
                var e, r = {},
                    n = [],
                    o = {
                        addCase: function(t, e) {
                            var n = "string" == typeof t ? t : t.type;
                            if (n in r) throw new Error("addCase cannot be called with two reducers for the same action type");
                            return r[n] = e, o
                        },
                        addMatcher: function(t, e) {
                            return n.push({
                                matcher: t,
                                reducer: e
                            }), o
                        },
                        addDefaultCase: function(t) {
                            return e = t, o
                        }
                    };
                return t(o), [r, n, e]
            }

            function D(t) {
                var e = t.name,
                    r = t.initialState;
                if (!e) throw new Error("`name` is a required option for createSlice");
                var o = t.reducers || {},
                    i = "function" == typeof t.extraReducers ? _(t.extraReducers) : [t.extraReducers],
                    u = i[0],
                    a = void 0 === u ? {} : u,
                    c = i[1],
                    f = void 0 === c ? [] : c,
                    l = i[2],
                    p = void 0 === l ? void 0 : l,
                    d = Object.keys(o),
                    v = {},
                    y = {},
                    h = {};
                d.forEach((function(t) {
                    var r, n, i = o[t],
                        u = e + "/" + t;
                    "reducer" in i ? (r = i.reducer, n = i.prepare) : r = i, v[t] = r, y[u] = r, h[t] = n ? E(u, n) : E(u)
                }));
                var b = function(t, e, r, o) {
                    void 0 === r && (r = []);
                    var i = "function" == typeof e ? _(e) : [e, r, o],
                        u = i[0],
                        a = i[1],
                        c = i[2],
                        f = (0, n.default)(t, (function() {}));
                    return function(t, e) {
                        void 0 === t && (t = f);
                        var r = s([u[e.type]], a.filter((function(t) {
                            return (0, t.matcher)(e)
                        })).map((function(t) {
                            return t.reducer
                        })));
                        return 0 === r.filter((function(t) {
                                return !!t
                            })).length && (r = [c]),
                            r.reduce((function(t, r) {
                                if (r) {
                                    var o;
                                    if ((0, n.isDraft)(t)) return void 0 === (o = r(t, e)) ? t : o;
                                    if ((0, n.isDraftable)(t)) return (0, n.default)(t, (function(t) {
                                        return r(t, e)
                                    }));
                                    if (void 0 === (o = r(t, e))) {
                                        if (null === t) return t;
                                        throw Error("A case reducer on a non-draftable value must not return undefined")
                                    }
                                    return o
                                }
                                return t
                            }), t)
                    }
                }(r, m(m({}, a), y), f, p);
                return {
                    name: e,
                    reducer: b,
                    actions: h,
                    caseReducers: v
                }
            }
            var k = function(t) {
                    void 0 === t && (t = 21);
                    for (var e = "", r = t; r--;) e += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW" [64 * Math.random() | 0];
                    return e
                },
                x = ["name", "message", "stack", "code"],
                R = function(t, e) {
                    this.payload = t, this.meta = e
                },
                I = function(t, e) {
                    this.payload = t, this.meta = e
                },
                C = function(t) {
                    if ("object" == typeof t && null !== t) {
                        for (var e = {}, r = 0, n = x; r < n.length; r++) {
                            var o = n[r];
                            "string" == typeof t[o] && (e[o] = t[o])
                        }
                        return e
                    }
                    return {
                        message: String(t)
                    }
                };

            function F(t, e, r) {
                var n = E(t + "/fulfilled", (function(t, e, r, n) {
                        return {
                            payload: t,
                            meta: w(m({}, n || {}), {
                                arg: r,
                                requestId: e,
                                requestStatus: "fulfilled"
                            })
                        }
                    })),
                    o = E(t + "/pending", (function(t, e, r) {
                        return {
                            payload: void 0,
                            meta: w(m({}, r || {}), {
                                arg: e,
                                requestId: t,
                                requestStatus: "pending"
                            })
                        }
                    })),
                    i = E(t + "/rejected", (function(t, e, n, o, i) {
                        return {
                            payload: o,
                            error: (r && r.serializeError || C)(t || "Rejected"),
                            meta: w(m({}, i || {}), {
                                arg: n,
                                requestId: e,
                                rejectedWithValue: !!o,
                                requestStatus: "rejected",
                                aborted: "AbortError" === (null == t ? void 0 : t.name),
                                condition: "ConditionError" === (null == t ? void 0 : t.name)
                            })
                        }
                    })),
                    u = "undefined" != typeof AbortController ? AbortController : function() {
                        function t() {
                            this.signal = {
                                aborted: !1,
                                addEventListener: function() {},
                                dispatchEvent: function() {
                                    return !1
                                },
                                onabort: function() {},
                                removeEventListener: function() {}
                            }
                        }
                        return t.prototype.abort = function() {
                            0
                        }, t
                    }();
                return Object.assign((function(t) {
                    return function(a, c, f) {
                        var s, p, d = (null != (s = null == r ? void 0 : r.idGenerator) ? s : k)(),
                            v = new u,
                            y = new Promise((function(t, e) {
                                return v.signal.addEventListener("abort", (function() {
                                    return e({
                                        name: "AbortError",
                                        message: p || "Aborted"
                                    })
                                }))
                            })),
                            h = !1;
                        var b = function() {
                            return u = this, s = null, p = function() {
                                var u, s, p;
                                return l(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            if (l.trys.push([0, 2, , 3]), r && r.condition && !1 === r.condition(t, {
                                                    getState: c,
                                                    extra: f
                                                })) throw {
                                                name: "ConditionError",
                                                message: "Aborted due to condition callback returning false."
                                            };
                                            return h = !0, a(o(d, t, null == (u = null == r ? void 0 : r.getPendingMeta) ? void 0 : u.call(r, {
                                                requestId: d,
                                                arg: t
                                            }, {
                                                getState: c,
                                                extra: f
                                            }))), [4, Promise.race([y, Promise.resolve(e(t, {
                                                dispatch: a,
                                                getState: c,
                                                extra: f,
                                                requestId: d,
                                                signal: v.signal,
                                                rejectWithValue: function(t, e) {
                                                    return new R(t, e)
                                                },
                                                fulfillWithValue: function(t, e) {
                                                    return new I(t, e)
                                                }
                                            })).then((function(e) {
                                                if (e instanceof R) throw e;
                                                return e instanceof I ? n(e.payload, d, t, e.meta) : n(e, d, t)
                                            }))])];
                                        case 1:
                                            return s = l.sent(), [3, 3];
                                        case 2:
                                            return p = l.sent(), s = p instanceof R ? i(null, d, t, p.payload, p.meta) : i(p, d, t), [3, 3];
                                        case 3:
                                            return r && !r.dispatchConditionRejection && i.match(s) && s.meta.condition || a(s), [2, s]
                                    }
                                }))
                            }, new Promise((function(t, e) {
                                var r = function(t) {
                                        try {
                                            o(p.next(t))
                                        } catch (t) {
                                            e(t)
                                        }
                                    },
                                    n = function(t) {
                                        try {
                                            o(p.throw(t))
                                        } catch (t) {
                                            e(t)
                                        }
                                    },
                                    o = function(e) {
                                        return e.done ? t(e.value) : Promise.resolve(e.value).then(r, n)
                                    };
                                o((p = p.apply(u, s)).next())
                            }));
                            var u, s, p
                        }();
                        return Object.assign(b, {
                            abort: function(t) {
                                h && (p = t, v.abort())
                            },
                            requestId: d,
                            arg: t,
                            unwrap: function() {
                                return b.then(M)
                            }
                        })
                    }
                }), {
                    pending: o,
                    rejected: i,
                    fulfilled: n,
                    typePrefix: t
                })
            }

            function M(t) {
                if (t.meta && t.meta.rejectedWithValue) throw t.payload;
                if (t.error) throw t.error;
                return t.payload
            }(0, n.enableES5)()
        },
        438253: (t, e, r) => {
            function n(t) {
                for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                throw Error("[Immer] minified error nr: " + t + (r.length ? " " + r.map((function(t) {
                    return "'" + t + "'"
                })).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
            }

            function o(t) {
                return !!t && !!t[$]
            }

            function i(t) {
                return !!t && (function(t) {
                    if (!t || "object" != typeof t) return !1;
                    var e = Object.getPrototypeOf(t);
                    if (null === e) return !0;
                    var r = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
                    return r === Object || "function" == typeof r && Function.toString.call(r) === B
                }(t) || Array.isArray(t) || !!t[J] || !!t.constructor[J] || d(t) || v(t))
            }

            function u(t) {
                return o(t) || n(23, t), t[$].t
            }

            function a(t, e, r) {
                void 0 === r && (r = !1), 0 === c(t) ? (r ? Object.keys : H)(t).forEach((function(n) {
                    r && "symbol" == typeof n || e(n, t[n], t)
                })) : t.forEach((function(r, n) {
                    return e(n, r, t)
                }))
            }

            function c(t) {
                var e = t[$];
                return e ? e.i > 3 ? e.i - 4 : e.i : Array.isArray(t) ? 1 : d(t) ? 2 : v(t) ? 3 : 0
            }

            function f(t, e) {
                return 2 === c(t) ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e)
            }

            function l(t, e) {
                return 2 === c(t) ? t.get(e) : t[e]
            }

            function s(t, e, r) {
                var n = c(t);
                2 === n ? t.set(e, r) : 3 === n ? (t.delete(e), t.add(r)) : t[e] = r
            }

            function p(t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
            }

            function d(t) {
                return K && t instanceof Map
            }

            function v(t) {
                return L && t instanceof Set
            }

            function y(t) {
                return t.o || t.t
            }

            function h(t) {
                if (Array.isArray(t)) return Array.prototype.slice.call(t);
                var e = Q(t);
                delete e[$];
                for (var r = H(e), n = 0; n < r.length; n++) {
                    var o = r[n],
                        i = e[o];
                    !1 === i.writable && (i.writable = !0, i.configurable = !0), (i.get || i.set) && (e[o] = {
                        configurable: !0,
                        writable: !0,
                        enumerable: i.enumerable,
                        value: t[o]
                    })
                }
                return Object.create(Object.getPrototypeOf(t), e)
            }

            function b(t, e) {
                return void 0 === e && (e = !1), m(t) || o(t) || !i(t) || (c(t) > 1 && (t.set = t.add = t.clear = t.delete = g), Object.freeze(t), e && a(t, (function(t, e) {
                    return b(e, !0)
                }), !0)), t
            }

            function g() {
                n(2)
            }

            function m(t) {
                return null == t || "object" != typeof t || Object.isFrozen(t)
            }

            function w(t) {
                var e = Y[t];
                return e || n(18, t), e
            }

            function O(t, e) {
                Y[t] || (Y[t] = e)
            }

            function P() {
                return V
            }

            function j(t, e) {
                e && (w("Patches"), t.u = [], t.s = [], t.v = e)
            }

            function S(t) {
                A(t), t.p.forEach(_), t.p = null
            }

            function A(t) {
                t === V && (V = t.l)
            }

            function E(t) {
                return V = {
                    p: [],
                    l: V,
                    h: t,
                    m: !0,
                    _: 0
                }
            }

            function _(t) {
                var e = t[$];
                0 === e.i || 1 === e.i ? e.j() : e.O = !0
            }

            function D(t, e) {
                e._ = e.p.length;
                var r = e.p[0],
                    o = void 0 !== t && t !== r;
                return e.h.g || w("ES5").S(e, t, o), o ? (r[$].P && (S(e), n(4)), i(t) && (t = k(e, t), e.l || R(e, t)), e.u && w("Patches").M(r[$], t, e.u, e.s)) : t = k(e, r, []), S(e), e.u && e.v(e.u, e.s), t !== G ? t : void 0
            }

            function k(t, e, r) {
                if (m(e)) return e;
                var n = e[$];
                if (!n) return a(e, (function(o, i) {
                    return x(t, n, e, o, i, r)
                }), !0), e;
                if (n.A !== t) return e;
                if (!n.P) return R(t, n.t, !0), n.t;
                if (!n.I) {
                    n.I = !0, n.A._--;
                    var o = 4 === n.i || 5 === n.i ? n.o = h(n.k) : n.o;
                    a(3 === n.i ? new Set(o) : o, (function(e, i) {
                        return x(t, n, o, e, i, r)
                    })), R(t, o, !1), r && t.u && w("Patches").R(n, r, t.u, t.s)
                }
                return n.o
            }

            function x(t, e, r, n, u, a) {
                if (o(u)) {
                    var c = k(t, u, a && e && 3 !== e.i && !f(e.D, n) ? a.concat(n) : void 0);
                    if (s(r, n, c), !o(c)) return;
                    t.m = !1
                }
                if (i(u) && !m(u)) {
                    if (!t.h.F && t._ < 1) return;
                    k(t, u), e && e.A.l || R(t, u)
                }
            }

            function R(t, e, r) {
                void 0 === r && (r = !1), t.h.F && t.m && b(e, r)
            }

            function I(t, e) {
                var r = t[$];
                return (r ? y(r) : t)[e]
            }

            function C(t, e) {
                if (e in t)
                    for (var r = Object.getPrototypeOf(t); r;) {
                        var n = Object.getOwnPropertyDescriptor(r, e);
                        if (n) return n;
                        r = Object.getPrototypeOf(r)
                    }
            }

            function F(t) {
                t.P || (t.P = !0, t.l && F(t.l))
            }

            function M(t) {
                t.o || (t.o = h(t.t))
            }

            function T(t, e, r) {
                var n = d(e) ? w("MapSet").N(e, r) : v(e) ? w("MapSet").T(e, r) : t.g ? function(t, e) {
                    var r = Array.isArray(t),
                        n = {
                            i: r ? 1 : 0,
                            A: e ? e.A : P(),
                            P: !1,
                            I: !1,
                            D: {},
                            l: e,
                            t,
                            k: null,
                            o: null,
                            j: null,
                            C: !1
                        },
                        o = n,
                        i = Z;
                    r && (o = [n], i = tt);
                    var u = Proxy.revocable(o, i),
                        a = u.revoke,
                        c = u.proxy;
                    return n.k = c, n.j = a, c
                }(e, r) : w("ES5").J(e, r);
                return (r ? r.A : P()).p.push(n), n
            }

            function q(t) {
                return o(t) || n(22, t),
                    function t(e) {
                        if (!i(e)) return e;
                        var r, n = e[$],
                            o = c(e);
                        if (n) {
                            if (!n.P && (n.i < 4 || !w("ES5").K(n))) return n.t;
                            n.I = !0, r = N(e, o), n.I = !1
                        } else r = N(e, o);
                        return a(r, (function(e, o) {
                            n && l(n.t, e) === o || s(r, e, t(o))
                        })), 3 === o ? new Set(r) : r
                    }(t)
            }

            function N(t, e) {
                switch (e) {
                    case 2:
                        return new Map(t);
                    case 3:
                        return Array.from(t)
                }
                return h(t)
            }

            function z() {
                function t(t, e) {
                    var r = i[t];
                    return r ? r.enumerable = e : i[t] = r = {
                        configurable: !0,
                        enumerable: e,
                        get: function() {
                            var e = this[$];
                            return Z.get(e, t)
                        },
                        set: function(e) {
                            var r = this[$];
                            Z.set(r, t, e)
                        }
                    }, r
                }

                function e(t) {
                    for (var e = t.length - 1; e >= 0; e--) {
                        var o = t[e][$];
                        if (!o.P) switch (o.i) {
                            case 5:
                                n(o) && F(o);
                                break;
                            case 4:
                                r(o) && F(o)
                        }
                    }
                }

                function r(t) {
                    for (var e = t.t, r = t.k, n = H(r), o = n.length - 1; o >= 0; o--) {
                        var i = n[o];
                        if (i !== $) {
                            var u = e[i];
                            if (void 0 === u && !f(e, i)) return !0;
                            var a = r[i],
                                c = a && a[$];
                            if (c ? c.t !== u : !p(a, u)) return !0
                        }
                    }
                    var l = !!e[$];
                    return n.length !== H(e).length + (l ? 0 : 1)
                }

                function n(t) {
                    var e = t.k;
                    if (e.length !== t.t.length) return !0;
                    var r = Object.getOwnPropertyDescriptor(e, e.length - 1);
                    return !(!r || r.get)
                }
                var i = {};
                O("ES5", {
                    J: function(e, r) {
                        var n = Array.isArray(e),
                            o = function(e, r) {
                                if (e) {
                                    for (var n = Array(r.length), o = 0; o < r.length; o++) Object.defineProperty(n, "" + o, t(o, !0));
                                    return n
                                }
                                var i = Q(r);
                                delete i[$];
                                for (var u = H(i), a = 0; a < u.length; a++) {
                                    var c = u[a];
                                    i[c] = t(c, e || !!i[c].enumerable)
                                }
                                return Object.create(Object.getPrototypeOf(r), i)
                            }(n, e),
                            i = {
                                i: n ? 5 : 4,
                                A: r ? r.A : P(),
                                P: !1,
                                I: !1,
                                D: {},
                                l: r,
                                t: e,
                                k: o,
                                o: null,
                                O: !1,
                                C: !1
                            };
                        return Object.defineProperty(o, $, {
                            value: i,
                            writable: !0
                        }), o
                    },
                    S: function(t, r, i) {
                        i ? o(r) && r[$].A === t && e(t.p) : (t.u && function t(e) {
                            if (e && "object" == typeof e) {
                                var r = e[$];
                                if (r) {
                                    var o = r.t,
                                        i = r.k,
                                        u = r.D,
                                        c = r.i;
                                    if (4 === c) a(i, (function(e) {
                                        e !== $ && (void 0 !== o[e] || f(o, e) ? u[e] || t(i[e]) : (u[e] = !0, F(r)))
                                    })), a(o, (function(t) {
                                        void 0 !== i[t] || f(i, t) || (u[t] = !1, F(r))
                                    }));
                                    else if (5 === c) {
                                        if (n(r) && (F(r), u.length = !0), i.length < o.length)
                                            for (var l = i.length; l < o.length; l++) u[l] = !1;
                                        else
                                            for (var s = o.length; s < i.length; s++) u[s] = !0;
                                        for (var p = Math.min(i.length, o.length), d = 0; d < p; d++) void 0 === u[d] && t(i[d])
                                    }
                                }
                            }
                        }(t.p[0]), e(t.p))
                    },
                    K: function(t) {
                        return 4 === t.i ? r(t) : n(t)
                    }
                })
            }
            r.d(e, {
                default: () => ot,
                enableES5: () => z,
                isDraft: () => o,
                isDraftable: () => i,
                original: () => u
            });
            var X, V, W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
                K = "undefined" != typeof Map,
                L = "undefined" != typeof Set,
                U = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
                G = W ? Symbol.for("immer-nothing") : ((X = {})["immer-nothing"] = !0, X),
                J = W ? Symbol.for("immer-draftable") : "__$immer_draftable",
                $ = W ? Symbol.for("immer-state") : "__$immer_state",
                B = ("undefined" != typeof Symbol && Symbol.iterator, "" + Object.prototype.constructor),
                H = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(t) {
                    return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
                } : Object.getOwnPropertyNames,
                Q = Object.getOwnPropertyDescriptors || function(t) {
                    var e = {};
                    return H(t).forEach((function(r) {
                        e[r] = Object.getOwnPropertyDescriptor(t, r)
                    })), e
                },
                Y = {},
                Z = {
                    get: function(t, e) {
                        if (e === $) return t;
                        var r = y(t);
                        if (!f(r, e)) return function(t, e, r) {
                            var n, o = C(e, r);
                            return o ? "value" in o ? o.value : null === (n = o.get) || void 0 === n ? void 0 : n.call(t.k) : void 0
                        }(t, r, e);
                        var n = r[e];
                        return t.I || !i(n) ? n : n === I(t.t, e) ? (M(t), t.o[e] = T(t.A.h, n, t)) : n
                    },
                    has: function(t, e) {
                        return e in y(t)
                    },
                    ownKeys: function(t) {
                        return Reflect.ownKeys(y(t))
                    },
                    set: function(t, e, r) {
                        var n = C(y(t), e);
                        if (null == n ? void 0 : n.set) return n.set.call(t.k, r), !0;
                        if (!t.P) {
                            var o = I(y(t), e),
                                i = null == o ? void 0 : o[$];
                            if (i && i.t === r) return t.o[e] = r, t.D[e] = !1, !0;
                            if (p(r, o) && (void 0 !== r || f(t.t, e))) return !0;
                            M(t), F(t)
                        }
                        return t.o[e] === r && "number" != typeof r && (void 0 !== r || e in t.o) || (t.o[e] = r, t.D[e] = !0, !0)
                    },
                    deleteProperty: function(t, e) {
                        return void 0 !== I(t.t, e) || e in t.t ? (t.D[e] = !1, M(t), F(t)) : delete t.D[e], t.o && delete t.o[e], !0
                    },
                    getOwnPropertyDescriptor: function(t, e) {
                        var r = y(t),
                            n = Reflect.getOwnPropertyDescriptor(r, e);
                        return n ? {
                            writable: !0,
                            configurable: 1 !== t.i || "length" !== e,
                            enumerable: n.enumerable,
                            value: r[e]
                        } : n
                    },
                    defineProperty: function() {
                        n(11)
                    },
                    getPrototypeOf: function(t) {
                        return Object.getPrototypeOf(t.t)
                    },
                    setPrototypeOf: function() {
                        n(12)
                    }
                },
                tt = {};
            a(Z, (function(t, e) {
                tt[t] = function() {
                    return arguments[0] = arguments[0][0], e.apply(this, arguments)
                }
            })), tt.deleteProperty = function(t, e) {
                return Z.deleteProperty.call(this, t[0], e)
            }, tt.set = function(t, e, r) {
                return Z.set.call(this, t[0], e, r, t[0])
            };
            var et = function() {
                    function t(t) {
                        var e = this;
                        this.g = U, this.F = !0, this.produce = function(t, r, o) {
                            if ("function" == typeof t && "function" != typeof r) {
                                var u = r;
                                r = t;
                                var a = e;
                                return function(t) {
                                    var e = this;
                                    void 0 === t && (t = u);
                                    for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
                                    return a.produce(t, (function(t) {
                                        var n;
                                        return (n = r).call.apply(n, [e, t].concat(o))
                                    }))
                                }
                            }
                            var c;
                            if ("function" != typeof r && n(6), void 0 !== o && "function" != typeof o && n(7), i(t)) {
                                var f = E(e),
                                    l = T(e, t, void 0),
                                    s = !0;
                                try {
                                    c = r(l), s = !1
                                } finally {
                                    s ? S(f) : A(f)
                                }
                                return "undefined" != typeof Promise && c instanceof Promise ? c.then((function(t) {
                                    return j(f, o), D(t, f)
                                }), (function(t) {
                                    throw S(f), t
                                })) : (j(f, o), D(c, f))
                            }
                            if (!t || "object" != typeof t) {
                                if ((c = r(t)) === G) return;
                                return void 0 === c && (c = t), e.F && b(c, !0), c
                            }
                            n(21, t)
                        }, this.produceWithPatches = function(t, r) {
                            return "function" == typeof t ? function(r) {
                                for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
                                return e.produceWithPatches(r, (function(e) {
                                    return t.apply(void 0, [e].concat(o))
                                }))
                            } : [e.produce(t, r, (function(t, e) {
                                n = t, o = e
                            })), n, o];
                            var n, o
                        }, "boolean" == typeof(null == t ? void 0 : t.useProxies) && this.setUseProxies(t.useProxies), "boolean" == typeof(null == t ? void 0 : t.autoFreeze) && this.setAutoFreeze(t.autoFreeze)
                    }
                    var e = t.prototype;
                    return e.createDraft = function(t) {
                        i(t) || n(8), o(t) && (t = q(t));
                        var e = E(this),
                            r = T(this, t, void 0);
                        return r[$].C = !0, A(e), r
                    }, e.finishDraft = function(t, e) {
                        var r = (t && t[$]).A;
                        return j(r, e), D(void 0, r)
                    }, e.setAutoFreeze = function(t) {
                        this.F = t
                    }, e.setUseProxies = function(t) {
                        t && !U && n(20), this.g = t
                    }, e.applyPatches = function(t, e) {
                        var r;
                        for (r = e.length - 1; r >= 0; r--) {
                            var n = e[r];
                            if (0 === n.path.length && "replace" === n.op) {
                                t = n.value;
                                break
                            }
                        }
                        r > -1 && (e = e.slice(r + 1));
                        var i = w("Patches").$;
                        return o(t) ? i(t, e) : this.produce(t, (function(t) {
                            return i(t, e)
                        }))
                    }, t
                }(),
                rt = new et,
                nt = rt.produce;
            rt.produceWithPatches.bind(rt), rt.setAutoFreeze.bind(rt), rt.setUseProxies.bind(rt), rt.applyPatches.bind(rt), rt.createDraft.bind(rt), rt.finishDraft.bind(rt);
            const ot = nt
        },
        377145: (t, e, r) => {
            function n(t, e) {
                return t === e
            }

            function o(t, e, r) {
                if (null === e || null === r || e.length !== r.length) return !1;
                for (var n = e.length, o = 0; o < n; o++)
                    if (!t(e[o], r[o])) return !1;
                return !0
            }

            function i(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n,
                    r = null,
                    i = null;
                return function() {
                    return o(e, r, arguments) || (i = t.apply(null, arguments)), r = arguments, i
                }
            }

            function u(t) {
                var e = Array.isArray(t[0]) ? t[0] : t;
                if (!e.every((function(t) {
                        return "function" == typeof t
                    }))) {
                    var r = e.map((function(t) {
                        return typeof t
                    })).join(", ");
                    throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + r + "]")
                }
                return e
            }
            r.d(e, {
                defaultMemoize: () => i,
                createSelector: () => a
            });
            var a = function(t) {
                for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                return function() {
                    for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                    var i = 0,
                        a = n.pop(),
                        c = u(n),
                        f = t.apply(void 0, [function() {
                            return i++, a.apply(null, arguments)
                        }].concat(r)),
                        l = t((function() {
                            for (var t = [], e = c.length, r = 0; r < e; r++) t.push(c[r].apply(null, arguments));
                            return f.apply(null, t)
                        }));
                    return l.resultFunc = a, l.dependencies = c, l.recomputations = function() {
                        return i
                    }, l.resetRecomputations = function() {
                        return i = 0
                    }, l
                }
            }(i)
        }
    }
]);
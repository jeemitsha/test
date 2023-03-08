"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [29594], {
        90932: (n, t, e) => {
            e.d(t, {
                A: () => M,
                B: () => g,
                C: () => P,
                D: () => C,
                E: () => f,
                F: () => K,
                G: () => Y,
                H: () => _,
                J: () => H,
                K: () => W,
                L: () => nn,
                M: () => en,
                N: () => $,
                O: () => on,
                P: () => R,
                Q: () => x,
                R: () => q,
                S: () => F,
                T: () => j,
                U: () => cn,
                Y: () => X,
                _: () => V,
                a: () => U,
                a2: () => tn,
                a3: () => rn,
                b: () => D,
                d: () => G,
                e: () => I,
                f: () => B,
                g: () => z,
                h: () => J,
                i: () => E,
                j: () => N,
                k: () => a,
                l: () => m,
                m: () => A,
                n: () => k,
                o: () => d,
                p: () => l,
                q: () => y,
                r: () => v,
                s: () => b,
                t: () => i,
                u: () => s,
                v: () => w,
                y: () => T,
                z: () => S
            });
            var r = e(749209),
                o = e(315882),
                c = e(375880);
            const u = function(n, t) {
                var e;
                void 0 === t && (t = !0);
                var o = new Promise((function(r) {
                    e = setTimeout(r, n, t)
                }));
                return o[r.CANCEL] = function() {
                    clearTimeout(e)
                }, o
            };
            var a = function(n) {
                    return function() {
                        return n
                    }
                }(!0),
                i = function() {};
            var f = function(n) {
                return n
            };
            "function" == typeof Symbol && Symbol.asyncIterator && Symbol.asyncIterator;
            var l = function(n, t) {
                    (0, o.default)(n, t), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach((function(e) {
                        n[e] = t[e]
                    }))
                },
                s = function(n, t) {
                    var e;
                    return (e = []).concat.apply(e, t.map(n))
                };

            function v(n, t) {
                var e = n.indexOf(t);
                e >= 0 && n.splice(e, 1)
            }

            function d(n) {
                var t = !1;
                return function() {
                    t || (t = !0, n())
                }
            }
            var p = function(n) {
                    throw n
                },
                h = function(n) {
                    return {
                        value: n,
                        done: !0
                    }
                };

            function y(n, t, e) {
                void 0 === t && (t = p), void 0 === e && (e = "iterator");
                var r = {
                    meta: {
                        name: e
                    },
                    next: n,
                    throw: t,
                    return: h,
                    isSagaIterator: !0
                };
                return "undefined" != typeof Symbol && (r[Symbol.iterator] = function() {
                    return r
                }), r
            }

            function g(n, t) {
                var e = t.sagaStack;
                console.error(n), console.error(e)
            }
            var E = function(n) {
                    return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " + n + "\n")
                },
                A = function(n) {
                    return Array.apply(null, new Array(n))
                },
                C = function(n) {
                    return function(t) {
                        return n(Object.defineProperty(t, r.SAGA_ACTION, {
                            value: !0
                        }))
                    }
                },
                S = function(n) {
                    return n === r.TERMINATE
                },
                T = function(n) {
                    return n === r.TASK_CANCEL
                },
                b = function(n) {
                    return S(n) || T(n)
                };

            function m(n, t) {
                var e = Object.keys(n),
                    r = e.length;
                var o, u = 0,
                    a = (0, c.array)(n) ? A(r) : {},
                    f = {};
                return e.forEach((function(n) {
                    var e = function(e, c) {
                        o || (c || b(e) ? (t.cancel(), t(e, c)) : (a[n] = e, ++u === r && (o = !0, t(a))))
                    };
                    e.cancel = i, f[n] = e
                })), t.cancel = function() {
                    o || (o = !0, e.forEach((function(n) {
                        return f[n].cancel()
                    })))
                }, f
            }

            function N(n) {
                return {
                    name: n.name || "anonymous",
                    location: w(n)
                }
            }

            function w(n) {
                return n[r.SAGA_LOCATION]
            }
            var L = {
                isEmpty: a,
                put: i,
                take: i
            };

            function O(n, t) {
                void 0 === n && (n = 10);
                var e = new Array(n),
                    r = 0,
                    o = 0,
                    c = 0,
                    u = function(t) {
                        e[o] = t, o = (o + 1) % n, r++
                    },
                    a = function() {
                        if (0 != r) {
                            var t = e[c];
                            return e[c] = null, r--, c = (c + 1) % n, t
                        }
                    },
                    i = function() {
                        for (var n = []; r;) n.push(a());
                        return n
                    };
                return {
                    isEmpty: function() {
                        return 0 == r
                    },
                    put: function(a) {
                        var f;
                        if (r < n) u(a);
                        else switch (t) {
                            case 1:
                                throw new Error("Channel's Buffer overflow!");
                            case 3:
                                e[o] = a, c = o = (o + 1) % n;
                                break;
                            case 4:
                                f = 2 * n, e = i(), r = e.length, o = e.length, c = 0, e.length = f, n = f, u(a)
                        }
                    },
                    take: a,
                    flush: i
                }
            }
            var k = function() {
                    return L
                },
                x = function(n) {
                    return O(n, 3)
                },
                I = function(n) {
                    return O(n, 4)
                },
                _ = Object.freeze({
                    __proto__: null,
                    none: k,
                    fixed: function(n) {
                        return O(n, 1)
                    },
                    dropping: function(n) {
                        return O(n, 2)
                    },
                    sliding: x,
                    expanding: I
                }),
                j = "TAKE",
                R = "PUT",
                M = "ALL",
                q = "RACE",
                P = "CALL",
                U = "CPS",
                K = "FORK",
                H = "JOIN",
                D = "CANCEL",
                F = "SELECT",
                G = "ACTION_CHANNEL",
                B = "CANCELLED",
                z = "FLUSH",
                Y = "GET_CONTEXT",
                J = "SET_CONTEXT",
                Q = function(n, t) {
                    var e;
                    return (e = {})[r.IO] = !0, e.combinator = !1, e.type = n, e.payload = t, e
                };

            function W(n, t) {
                return void 0 === n && (n = "*"), (0, c.pattern)(n) ? Q(j, {
                    pattern: n
                }) : (0, c.multicast)(n) && (0, c.notUndef)(t) && (0, c.pattern)(t) ? Q(j, {
                    channel: n,
                    pattern: t
                }) : (0, c.channel)(n) ? Q(j, {
                    channel: n
                }) : void 0
            }

            function X(n, t) {
                return (0, c.undef)(t) && (t = n, n = void 0), Q(R, {
                    channel: n,
                    action: t
                })
            }

            function V(n) {
                var t = Q(M, n);
                return t.combinator = !0, t
            }

            function Z(n, t) {
                var e, r = null;
                return (0, c.func)(n) ? e = n : ((0, c.array)(n) ? (r = n[0], e = n[1]) : (r = n.context, e = n.fn), r && (0, c.string)(e) && (0, c.func)(r[e]) && (e = r[e])), {
                    context: r,
                    fn: e,
                    args: t
                }
            }

            function $(n) {
                for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) e[r - 1] = arguments[r];
                return Q(P, Z(n, e))
            }

            function nn(n) {
                for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) e[r - 1] = arguments[r];
                return Q(K, Z(n, e))
            }

            function tn(n) {
                return Q(H, n)
            }

            function en(n) {
                return void 0 === n && (n = r.SELF_CANCELLATION), Q(D, n)
            }

            function rn(n) {
                void 0 === n && (n = f);
                for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) e[r - 1] = arguments[r];
                return Q(F, {
                    selector: n,
                    args: e
                })
            }

            function on(n, t) {
                return Q(G, {
                    pattern: n,
                    buffer: t
                })
            }
            var cn = $.bind(null, u)
        },
        375880: (n, t, e) => {
            e.d(t, {
                array: () => i,
                channel: () => v,
                func: () => u,
                iterator: () => l,
                multicast: () => h,
                notUndef: () => c,
                pattern: () => s,
                promise: () => f,
                string: () => a,
                stringableFunc: () => d,
                symbol: () => p,
                undef: () => o
            });
            var r = e(749209),
                o = function(n) {
                    return null == n
                },
                c = function(n) {
                    return null != n
                },
                u = function(n) {
                    return "function" == typeof n
                },
                a = function(n) {
                    return "string" == typeof n
                },
                i = Array.isArray,
                f = function(n) {
                    return n && u(n.then)
                },
                l = function(n) {
                    return n && u(n.next) && u(n.throw)
                },
                s = function n(t) {
                    return t && (a(t) || p(t) || u(t) || i(t) && t.every(n))
                },
                v = function(n) {
                    return n && u(n.take) && u(n.close)
                },
                d = function(n) {
                    return u(n) && n.hasOwnProperty("toString")
                },
                p = function(n) {
                    return Boolean(n) && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype
                },
                h = function(n) {
                    return v(n) && n[r.MULTICAST]
                }
        },
        749209: (n, t, e) => {
            e.d(t, {
                CANCEL: () => o,
                CHANNEL_END_TYPE: () => c,
                IO: () => u,
                MATCH: () => a,
                MULTICAST: () => i,
                SAGA_ACTION: () => f,
                SAGA_LOCATION: () => p,
                SELF_CANCELLATION: () => l,
                TASK: () => s,
                TASK_CANCEL: () => v,
                TERMINATE: () => d
            });
            var r = function(n) {
                    return "@@redux-saga/" + n
                },
                o = r("CANCEL_PROMISE"),
                c = r("CHANNEL_END"),
                u = r("IO"),
                a = r("MATCH"),
                i = r("MULTICAST"),
                f = r("SAGA_ACTION"),
                l = r("SELF_CANCELLATION"),
                s = r("TASK"),
                v = r("TASK_CANCEL"),
                d = r("TERMINATE"),
                p = r("LOCATION")
        },
        254773: (n, t, e) => {
            e.d(t, {
                buffers: () => a.H,
                default: () => Q,
                eventChannel: () => O
            });
            var r = e(749209),
                o = e(315882),
                c = e(330950),
                u = e(375880),
                a = e(90932),
                i = e(721153);

            function f() {
                var n = {};
                return n.promise = new Promise((function(t, e) {
                    n.resolve = t, n.reject = e
                })), n
            }
            const l = f;
            var s = [],
                v = 0;

            function d(n) {
                try {
                    y(), n()
                } finally {
                    g()
                }
            }

            function p(n) {
                s.push(n), v || (y(), E())
            }

            function h(n) {
                try {
                    return y(), n()
                } finally {
                    E()
                }
            }

            function y() {
                v++
            }

            function g() {
                v--
            }

            function E() {
                var n;
                for (g(); !v && void 0 !== (n = s.shift());) d(n)
            }
            var A = function(n) {
                    return function(t) {
                        return n.some((function(n) {
                            return m(n)(t)
                        }))
                    }
                },
                C = function(n) {
                    return function(t) {
                        return n(t)
                    }
                },
                S = function(n) {
                    return function(t) {
                        return t.type === String(n)
                    }
                },
                T = function(n) {
                    return function(t) {
                        return t.type === n
                    }
                },
                b = function() {
                    return a.k
                };

            function m(n) {
                var t = "*" === n ? b : (0, u.string)(n) ? S : (0, u.array)(n) ? A : (0, u.stringableFunc)(n) ? S : (0, u.func)(n) ? C : (0, u.symbol)(n) ? T : null;
                if (null === t) throw new Error("invalid pattern: " + n);
                return t(n)
            }
            var N = {
                    type: r.CHANNEL_END_TYPE
                },
                w = function(n) {
                    return n && n.type === r.CHANNEL_END_TYPE
                };

            function L(n) {
                void 0 === n && (n = (0, a.e)());
                var t = !1,
                    e = [];
                return {
                    take: function(r) {
                        t && n.isEmpty() ? r(N) : n.isEmpty() ? (e.push(r), r.cancel = function() {
                            (0, a.r)(e, r)
                        }) : r(n.take())
                    },
                    put: function(r) {
                        if (!t) {
                            if (0 === e.length) return n.put(r);
                            e.shift()(r)
                        }
                    },
                    flush: function(e) {
                        t && n.isEmpty() ? e(N) : e(n.flush())
                    },
                    close: function() {
                        if (!t) {
                            t = !0;
                            var n = e;
                            e = [];
                            for (var r = 0, o = n.length; r < o; r++) {
                                (0, n[r])(N)
                            }
                        }
                    }
                }
            }

            function O(n, t) {
                void 0 === t && (t = (0, a.n)());
                var e, r = !1,
                    o = L(t),
                    c = function() {
                        r || (r = !0, (0, u.func)(e) && e(), o.close())
                    };
                return e = n((function(n) {
                    w(n) ? c() : o.put(n)
                })), e = (0, a.o)(e), r && e(), {
                    take: o.take,
                    flush: o.flush,
                    close: c
                }
            }

            function k() {
                var n, t, e, o, c, u, i = (t = !1, o = e = [], c = function() {
                        o === e && (o = e.slice())
                    }, u = function() {
                        t = !0;
                        var n = e = o;
                        o = [], n.forEach((function(n) {
                            n(N)
                        }))
                    }, (n = {})[r.MULTICAST] = !0, n.put = function(n) {
                        if (!t)
                            if (w(n)) u();
                            else
                                for (var c = e = o, a = 0, i = c.length; a < i; a++) {
                                    var f = c[a];
                                    f[r.MATCH](n) && (f.cancel(), f(n))
                                }
                    }, n.take = function(n, e) {
                        void 0 === e && (e = b), t ? n(N) : (n[r.MATCH] = e, c(), o.push(n), n.cancel = (0, a.o)((function() {
                            c(), (0, a.r)(o, n)
                        })))
                    }, n.close = u, n),
                    f = i.put;
                return i.put = function(n) {
                    n[r.SAGA_ACTION] ? f(n) : p((function() {
                        f(n)
                    }))
                }, i
            }

            function x(n, t) {
                var e = n[r.CANCEL];
                (0, u.func)(e) && (t.cancel = e), n.then(t, (function(n) {
                    t(n, !0)
                }))
            }
            var I, _ = 0,
                j = function() {
                    return ++_
                };

            function R(n) {
                n.isRunning() && n.cancel()
            }
            var M = ((I = {})[a.T] = function(n, t, e) {
                var o = t.channel,
                    c = void 0 === o ? n.channel : o,
                    a = t.pattern,
                    i = t.maybe,
                    f = function(n) {
                        n instanceof Error ? e(n, !0) : !w(n) || i ? e(n) : e(r.TERMINATE)
                    };
                try {
                    c.take(f, (0, u.notUndef)(a) ? m(a) : null)
                } catch (n) {
                    return void e(n, !0)
                }
                e.cancel = f.cancel
            }, I[a.P] = function(n, t, e) {
                var r = t.channel,
                    o = t.action,
                    c = t.resolve;
                p((function() {
                    var t;
                    try {
                        t = (r ? r.put : n.dispatch)(o)
                    } catch (n) {
                        return void e(n, !0)
                    }
                    c && (0, u.promise)(t) ? x(t, e) : e(t)
                }))
            }, I[a.A] = function(n, t, e, r) {
                var o = r.digestEffect,
                    c = _,
                    i = Object.keys(t);
                if (0 !== i.length) {
                    var f = (0, a.l)(t, e);
                    i.forEach((function(n) {
                        o(t[n], c, f[n], n)
                    }))
                } else e((0, u.array)(t) ? [] : {})
            }, I[a.R] = function(n, t, e, r) {
                var o = r.digestEffect,
                    c = _,
                    i = Object.keys(t),
                    f = (0, u.array)(t) ? (0, a.m)(i.length) : {},
                    l = {},
                    s = !1;
                i.forEach((function(n) {
                    var t = function(t, r) {
                        s || (r || (0, a.s)(t) ? (e.cancel(), e(t, r)) : (e.cancel(), s = !0, f[n] = t, e(f)))
                    };
                    t.cancel = a.t, l[n] = t
                })), e.cancel = function() {
                    s || (s = !0, i.forEach((function(n) {
                        return l[n].cancel()
                    })))
                }, i.forEach((function(n) {
                    s || o(t[n], c, l[n], n)
                }))
            }, I[a.C] = function(n, t, e, r) {
                var o = t.context,
                    c = t.fn,
                    i = t.args,
                    f = r.task;
                try {
                    var l = c.apply(o, i);
                    if ((0, u.promise)(l)) return void x(l, e);
                    if ((0, u.iterator)(l)) return void z(n, l, f.context, _, (0, a.j)(c), !1, e);
                    e(l)
                } catch (n) {
                    e(n, !0)
                }
            }, I[a.a] = function(n, t, e) {
                var r = t.context,
                    o = t.fn,
                    c = t.args;
                try {
                    var a = function(n, t) {
                        (0, u.undef)(n) ? e(t): e(n, !0)
                    };
                    o.apply(r, c.concat(a)), a.cancel && (e.cancel = a.cancel)
                } catch (n) {
                    e(n, !0)
                }
            }, I[a.F] = function(n, t, e, r) {
                var o = t.context,
                    c = t.fn,
                    i = t.args,
                    f = t.detached,
                    l = r.task,
                    s = function(n) {
                        var t = n.context,
                            e = n.fn,
                            r = n.args;
                        try {
                            var o = e.apply(t, r);
                            if ((0, u.iterator)(o)) return o;
                            var c = !1;
                            return (0, a.q)((function(n) {
                                return c ? {
                                    value: n,
                                    done: !0
                                } : (c = !0, {
                                    value: o,
                                    done: !(0, u.promise)(o)
                                })
                            }))
                        } catch (n) {
                            return (0, a.q)((function() {
                                throw n
                            }))
                        }
                    }({
                        context: o,
                        fn: c,
                        args: i
                    }),
                    v = function(n, t) {
                        return n.isSagaIterator ? {
                            name: n.meta.name
                        } : (0, a.j)(t)
                    }(s, c);
                h((function() {
                    var t = z(n, s, l.context, _, v, f, void 0);
                    f ? e(t) : t.isRunning() ? (l.queue.addTask(t), e(t)) : t.isAborted() ? l.queue.abort(t.error()) : e(t)
                }))
            }, I[a.J] = function(n, t, e, r) {
                var o = r.task,
                    c = function(n, t) {
                        if (n.isRunning()) {
                            var e = {
                                task: o,
                                cb: t
                            };
                            t.cancel = function() {
                                n.isRunning() && (0, a.r)(n.joiners, e)
                            }, n.joiners.push(e)
                        } else n.isAborted() ? t(n.error(), !0) : t(n.result())
                    };
                if ((0, u.array)(t)) {
                    if (0 === t.length) return void e([]);
                    var i = (0, a.l)(t, e);
                    t.forEach((function(n, t) {
                        c(n, i[t])
                    }))
                } else c(t, e)
            }, I[a.b] = function(n, t, e, o) {
                var c = o.task;
                t === r.SELF_CANCELLATION ? R(c) : (0, u.array)(t) ? t.forEach(R) : R(t), e()
            }, I[a.S] = function(n, t, e) {
                var r = t.selector,
                    o = t.args;
                try {
                    e(r.apply(void 0, [n.getState()].concat(o)))
                } catch (n) {
                    e(n, !0)
                }
            }, I[a.d] = function(n, t, e) {
                var r = t.pattern,
                    o = L(t.buffer),
                    c = m(r),
                    u = function t(e) {
                        w(e) || n.channel.take(t, c), o.put(e)
                    },
                    a = o.close;
                o.close = function() {
                    u.cancel(), a()
                }, n.channel.take(u, c), e(o)
            }, I[a.f] = function(n, t, e, r) {
                e(r.task.isCancelled())
            }, I[a.g] = function(n, t, e) {
                t.flush(e)
            }, I[a.G] = function(n, t, e, r) {
                e(r.task.context[t])
            }, I[a.h] = function(n, t, e, r) {
                var o = r.task;
                (0, a.p)(o.context, t), e()
            }, I);

            function q(n, t) {
                return n + "?" + t
            }

            function P(n) {
                var t = n.name,
                    e = n.location;
                return e ? t + "  " + q(e.fileName, e.lineNumber) : t
            }

            function U(n) {
                var t = (0, a.u)((function(n) {
                    return n.cancelledTasks
                }), n);
                return t.length ? ["Tasks cancelled due to error:"].concat(t).join("\n") : ""
            }
            var K = null,
                H = [],
                D = function(n) {
                    n.crashedEffect = K, H.push(n)
                },
                F = function() {
                    K = null, H.length = 0
                },
                G = function() {
                    var n = H[0],
                        t = H.slice(1),
                        e = n.crashedEffect ? function(n) {
                            var t = (0, a.v)(n);
                            return t ? t.code + "  " + q(t.fileName, t.lineNumber) : ""
                        }(n.crashedEffect) : null;
                    return ["The above error occurred in task " + P(n.meta) + (e ? " \n when executing effect " + e : "")].concat(t.map((function(n) {
                        return "    created by " + P(n.meta)
                    })), [U(H)]).join("\n")
                };

            function B(n, t, e, o, c, u, i) {
                var f;
                void 0 === i && (i = a.t);
                var s, v, d = 0,
                    p = null,
                    h = [],
                    y = Object.create(e),
                    g = function(n, t, e) {
                        var r, o = [],
                            c = !1;

                        function u(n) {
                            t(), f(), e(n, !0)
                        }

                        function i(t) {
                            o.push(t), t.cont = function(i, f) {
                                c || ((0, a.r)(o, t), t.cont = a.t, f ? u(i) : (t === n && (r = i), o.length || (c = !0, e(r))))
                            }
                        }

                        function f() {
                            c || (c = !0, o.forEach((function(n) {
                                n.cont = a.t, n.cancel()
                            })), o = [])
                        }
                        return i(n), {
                            addTask: i,
                            cancelAll: f,
                            abort: u,
                            getTasks: function() {
                                return o
                            }
                        }
                    }(t, (function() {
                        h.push.apply(h, g.getTasks().map((function(n) {
                            return n.meta.name
                        })))
                    }), E);

                function E(t, e) {
                    if (e) {
                        if (d = 2, D({
                                meta: c,
                                cancelledTasks: h
                            }), A.isRoot) {
                            var o = G();
                            F(), n.onError(t, {
                                sagaStack: o
                            })
                        }
                        v = t, p && p.reject(t)
                    } else t === r.TASK_CANCEL ? d = 1 : 1 !== d && (d = 3), s = t, p && p.resolve(t);
                    A.cont(t, e), A.joiners.forEach((function(n) {
                        n.cb(t, e)
                    })), A.joiners = null
                }
                var A = ((f = {})[r.TASK] = !0, f.id = o, f.meta = c, f.isRoot = u, f.context = y, f.joiners = [], f.queue = g, f.cancel = function() {
                    0 === d && (d = 1, g.cancelAll(), E(r.TASK_CANCEL, !1))
                }, f.cont = i, f.end = E, f.setContext = function(n) {
                    (0, a.p)(y, n)
                }, f.toPromise = function() {
                    return p || (p = l(), 2 === d ? p.reject(v) : 0 !== d && p.resolve(s)), p.promise
                }, f.isRunning = function() {
                    return 0 === d
                }, f.isCancelled = function() {
                    return 1 === d || 0 === d && 1 === t.status
                }, f.isAborted = function() {
                    return 2 === d
                }, f.result = function() {
                    return s
                }, f.error = function() {
                    return v
                }, f);
                return A
            }

            function z(n, t, e, o, c, i, f) {
                var l = n.finalizeRunEffect((function(t, e, o) {
                    if ((0, u.promise)(t)) x(t, o);
                    else if ((0, u.iterator)(t)) z(n, t, v.context, e, c, !1, o);
                    else if (t && t[r.IO]) {
                        (0, M[t.type])(n, t.payload, o, d)
                    } else o(t)
                }));
                p.cancel = a.t;
                var s = {
                        meta: c,
                        cancel: function() {
                            0 === s.status && (s.status = 1, p(r.TASK_CANCEL))
                        },
                        status: 0
                    },
                    v = B(n, s, e, o, c, i, f),
                    d = {
                        task: v,
                        digestEffect: h
                    };
                return f && (f.cancel = v.cancel), p(), v;

                function p(n, e) {
                    try {
                        var c;
                        e ? (c = t.throw(n), F()) : (0, a.y)(n) ? (s.status = 1, p.cancel(), c = (0, u.func)(t.return) ? t.return(r.TASK_CANCEL) : {
                            done: !0,
                            value: r.TASK_CANCEL
                        }) : c = (0, a.z)(n) ? (0, u.func)(t.return) ? t.return() : {
                            done: !0
                        } : t.next(n), c.done ? (1 !== s.status && (s.status = 3), s.cont(c.value)) : h(c.value, o, p)
                    } catch (n) {
                        if (1 === s.status) throw n;
                        s.status = 2, s.cont(n, !0)
                    }
                }

                function h(t, e, r, o) {
                    void 0 === o && (o = "");
                    var c, u = j();

                    function i(e, o) {
                        c || (c = !0, r.cancel = a.t, n.sagaMonitor && (o ? n.sagaMonitor.effectRejected(u, e) : n.sagaMonitor.effectResolved(u, e)), o && function(n) {
                            K = n
                        }(t), r(e, o))
                    }
                    n.sagaMonitor && n.sagaMonitor.effectTriggered({
                        effectId: u,
                        parentEffectId: e,
                        label: o,
                        effect: t
                    }), i.cancel = a.t, r.cancel = function() {
                        c || (c = !0, i.cancel(), i.cancel = a.t, n.sagaMonitor && n.sagaMonitor.effectCancelled(u))
                    }, l(t, u, i)
                }
            }

            function Y(n, t) {
                var e = n.channel,
                    r = void 0 === e ? k() : e,
                    o = n.dispatch,
                    c = n.getState,
                    u = n.context,
                    f = void 0 === u ? {} : u,
                    l = n.sagaMonitor,
                    s = n.effectMiddlewares,
                    v = n.onError,
                    d = void 0 === v ? a.B : v;
                for (var p = arguments.length, y = new Array(p > 2 ? p - 2 : 0), g = 2; g < p; g++) y[g - 2] = arguments[g];
                var E = t.apply(void 0, y);
                var A, C = j();
                if (l && (l.rootSagaStarted = l.rootSagaStarted || a.t, l.effectTriggered = l.effectTriggered || a.t, l.effectResolved = l.effectResolved || a.t, l.effectRejected = l.effectRejected || a.t, l.effectCancelled = l.effectCancelled || a.t, l.actionDispatched = l.actionDispatched || a.t, l.rootSagaStarted({
                        effectId: C,
                        saga: t,
                        args: y
                    })), s) {
                    var S = i.compose.apply(void 0, s);
                    A = function(n) {
                        return function(t, e, r) {
                            return S((function(t) {
                                return n(t, e, r)
                            }))(t)
                        }
                    }
                } else A = a.E;
                var T = {
                    channel: r,
                    dispatch: (0, a.D)(o),
                    getState: c,
                    sagaMonitor: l,
                    onError: d,
                    finalizeRunEffect: A
                };
                return h((function() {
                    var n = z(T, E, f, C, (0, a.j)(t), !0, void 0);
                    return l && l.effectResolved(C, n), n
                }))
            }
            const J = function(n) {
                    var t, e = void 0 === n ? {} : n,
                        r = e.context,
                        u = void 0 === r ? {} : r,
                        i = e.channel,
                        f = void 0 === i ? k() : i,
                        l = e.sagaMonitor,
                        s = (0, c.default)(e, ["context", "channel", "sagaMonitor"]);

                    function v(n) {
                        var e = n.getState,
                            r = n.dispatch;
                        return t = Y.bind(null, (0, o.default)({}, s, {
                                context: u,
                                channel: f,
                                dispatch: r,
                                getState: e,
                                sagaMonitor: l
                            })),
                            function(n) {
                                return function(t) {
                                    l && l.actionDispatched && l.actionDispatched(t);
                                    var e = n(t);
                                    return f.put(t), e
                                }
                            }
                    }
                    return v.run = function() {
                        return t.apply(void 0, arguments)
                    }, v.setContext = function(n) {
                        (0, a.p)(u, n)
                    }, v
                },
                Q = J
        },
        336349: (n, t, e) => {
            e.d(t, {
                all: () => o._,
                call: () => o.N,
                cancel: () => o.M,
                delay: () => o.U,
                fork: () => o.L,
                join: () => o.a2,
                put: () => o.Y,
                select: () => o.a3,
                take: () => o.K,
                takeEvery: () => v,
                takeLatest: () => d,
                throttle: () => p
            });
            var r = e(375880),
                o = e(90932),
                c = function(n) {
                    return {
                        done: !0,
                        value: n
                    }
                },
                u = {};

            function a(n) {
                return (0, r.channel)(n) ? "channel" : (0, r.stringableFunc)(n) ? String(n) : (0, r.func)(n) ? n.name : String(n)
            }

            function i(n, t, e) {
                var r, a, i, f = t;

                function l(t, e) {
                    if (f === u) return c(t);
                    if (e && !a) throw f = u, e;
                    r && r(t);
                    var o = e ? n[a](e) : n[f]();
                    return f = o.nextState, i = o.effect, r = o.stateUpdater, a = o.errorState, f === u ? c(t) : i
                }
                return (0, o.q)(l, (function(n) {
                    return l(null, n)
                }), e)
            }

            function f(n, t) {
                for (var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), c = 2; c < e; c++) r[c - 2] = arguments[c];
                var u, f = {
                        done: !1,
                        value: (0, o.K)(n)
                    },
                    l = function(n) {
                        return {
                            done: !1,
                            value: o.L.apply(void 0, [t].concat(r, [n]))
                        }
                    },
                    s = function(n) {
                        return u = n
                    };
                return i({
                    q1: function() {
                        return {
                            nextState: "q2",
                            effect: f,
                            stateUpdater: s
                        }
                    },
                    q2: function() {
                        return {
                            nextState: "q1",
                            effect: l(u)
                        }
                    }
                }, "q1", "takeEvery(" + a(n) + ", " + t.name + ")")
            }

            function l(n, t) {
                for (var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), c = 2; c < e; c++) r[c - 2] = arguments[c];
                var u, f, l = {
                        done: !1,
                        value: (0, o.K)(n)
                    },
                    s = function(n) {
                        return {
                            done: !1,
                            value: o.L.apply(void 0, [t].concat(r, [n]))
                        }
                    },
                    v = function(n) {
                        return {
                            done: !1,
                            value: (0, o.M)(n)
                        }
                    },
                    d = function(n) {
                        return u = n
                    },
                    p = function(n) {
                        return f = n
                    };
                return i({
                    q1: function() {
                        return {
                            nextState: "q2",
                            effect: l,
                            stateUpdater: p
                        }
                    },
                    q2: function() {
                        return u ? {
                            nextState: "q3",
                            effect: v(u)
                        } : {
                            nextState: "q1",
                            effect: s(f),
                            stateUpdater: d
                        }
                    },
                    q3: function() {
                        return {
                            nextState: "q1",
                            effect: s(f),
                            stateUpdater: d
                        }
                    }
                }, "q1", "takeLatest(" + a(n) + ", " + t.name + ")")
            }

            function s(n, t, e) {
                for (var r = arguments.length, c = new Array(r > 3 ? r - 3 : 0), u = 3; u < r; u++) c[u - 3] = arguments[u];
                var f, l, s = {
                        done: !1,
                        value: (0, o.O)(t, (0, o.Q)(1))
                    },
                    v = function() {
                        return {
                            done: !1,
                            value: (0, o.K)(l)
                        }
                    },
                    d = function(n) {
                        return {
                            done: !1,
                            value: o.L.apply(void 0, [e].concat(c, [n]))
                        }
                    },
                    p = {
                        done: !1,
                        value: (0, o.U)(n)
                    },
                    h = function(n) {
                        return f = n
                    },
                    y = function(n) {
                        return l = n
                    };
                return i({
                    q1: function() {
                        return {
                            nextState: "q2",
                            effect: s,
                            stateUpdater: y
                        }
                    },
                    q2: function() {
                        return {
                            nextState: "q3",
                            effect: v(),
                            stateUpdater: h
                        }
                    },
                    q3: function() {
                        return {
                            nextState: "q4",
                            effect: d(f)
                        }
                    },
                    q4: function() {
                        return {
                            nextState: "q2",
                            effect: p
                        }
                    }
                }, "q1", "throttle(" + a(t) + ", " + e.name + ")")
            }

            function v(n, t) {
                for (var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), c = 2; c < e; c++) r[c - 2] = arguments[c];
                return o.L.apply(void 0, [f, n, t].concat(r))
            }

            function d(n, t) {
                for (var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), c = 2; c < e; c++) r[c - 2] = arguments[c];
                return o.L.apply(void 0, [l, n, t].concat(r))
            }

            function p(n, t, e) {
                for (var r = arguments.length, c = new Array(r > 3 ? r - 3 : 0), u = 3; u < r; u++) c[u - 3] = arguments[u];
                return o.L.apply(void 0, [s, n, t, e].concat(c))
            }
        },
        721153: (n, t, e) => {
            function r(n) {
                return "Minified Redux error #" + n + "; visit https://redux.js.org/Errors?code=" + n + " for the full message or use the non-minified dev environment for full errors. "
            }
            e.d(t, {
                compose: () => f,
                createStore: () => i
            });
            var o = "function" == typeof Symbol && Symbol.observable || "@@observable",
                c = function() {
                    return Math.random().toString(36).substring(7).split("").join(".")
                },
                u = {
                    INIT: "@@redux/INIT" + c(),
                    REPLACE: "@@redux/REPLACE" + c(),
                    PROBE_UNKNOWN_ACTION: function() {
                        return "@@redux/PROBE_UNKNOWN_ACTION" + c()
                    }
                };

            function a(n) {
                if ("object" != typeof n || null === n) return !1;
                for (var t = n; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(n) === t
            }

            function i(n, t, e) {
                var c;
                if ("function" == typeof t && "function" == typeof e || "function" == typeof e && "function" == typeof arguments[3]) throw new Error(r(0));
                if ("function" == typeof t && void 0 === e && (e = t, t = void 0), void 0 !== e) {
                    if ("function" != typeof e) throw new Error(r(1));
                    return e(i)(n, t)
                }
                if ("function" != typeof n) throw new Error(r(2));
                var f = n,
                    l = t,
                    s = [],
                    v = s,
                    d = !1;

                function p() {
                    v === s && (v = s.slice())
                }

                function h() {
                    if (d) throw new Error(r(3));
                    return l
                }

                function y(n) {
                    if ("function" != typeof n) throw new Error(r(4));
                    if (d) throw new Error(r(5));
                    var t = !0;
                    return p(), v.push(n),
                        function() {
                            if (t) {
                                if (d) throw new Error(r(6));
                                t = !1, p();
                                var e = v.indexOf(n);
                                v.splice(e, 1), s = null
                            }
                        }
                }

                function g(n) {
                    if (!a(n)) throw new Error(r(7));
                    if (void 0 === n.type) throw new Error(r(8));
                    if (d) throw new Error(r(9));
                    try {
                        d = !0, l = f(l, n)
                    } finally {
                        d = !1
                    }
                    for (var t = s = v, e = 0; e < t.length; e++) {
                        (0, t[e])()
                    }
                    return n
                }

                function E(n) {
                    if ("function" != typeof n) throw new Error(r(10));
                    f = n, g({
                        type: u.REPLACE
                    })
                }

                function A() {
                    var n, t = y;
                    return (n = {
                        subscribe: function(n) {
                            if ("object" != typeof n || null === n) throw new Error(r(11));

                            function e() {
                                n.next && n.next(h())
                            }
                            return e(), {
                                unsubscribe: t(e)
                            }
                        }
                    })[o] = function() {
                        return this
                    }, n
                }
                return g({
                    type: u.INIT
                }), (c = {
                    dispatch: g,
                    subscribe: y,
                    getState: h,
                    replaceReducer: E
                })[o] = A, c
            }

            function f() {
                for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++) t[e] = arguments[e];
                return 0 === t.length ? function(n) {
                    return n
                } : 1 === t.length ? t[0] : t.reduce((function(n, t) {
                    return function() {
                        return n(t.apply(void 0, arguments))
                    }
                }))
            }
        },
        315882: (n, t, e) => {
            function r() {
                return r = Object.assign ? Object.assign.bind() : function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }, r.apply(this, arguments)
            }
            e.d(t, {
                default: () => r
            })
        },
        330950: (n, t, e) => {
            function r(n, t) {
                if (null == n) return {};
                var e, r, o = {},
                    c = Object.keys(n);
                for (r = 0; r < c.length; r++) e = c[r], t.indexOf(e) >= 0 || (o[e] = n[e]);
                return o
            }
            e.d(t, {
                default: () => r
            })
        }
    }
]);
"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [13130], {
        423869: (e, r, n) => {
            n.d(r, {
                EMPTY: () => t
            });
            var t = new(n(815544).Observable)((function(e) {
                return e.complete()
            }))
        },
        839874: (e, r, n) => {
            n.d(r, {
                from: () => x
            });
            var t = n(771035),
                u = n(72117),
                o = n(116217),
                i = n(138966);

            function c(e, r) {
                return void 0 === r && (r = 0), (0, o.operate)((function(n, t) {
                    n.subscribe(new i.OperatorSubscriber(t, (function(n) {
                        return (0, u.executeSchedule)(t, e, (function() {
                            return t.next(n)
                        }), r)
                    }), (function() {
                        return (0, u.executeSchedule)(t, e, (function() {
                            return t.complete()
                        }), r)
                    }), (function(n) {
                        return (0, u.executeSchedule)(t, e, (function() {
                            return t.error(n)
                        }), r)
                    })))
                }))
            }

            function a(e, r) {
                return void 0 === r && (r = 0), (0, o.operate)((function(n, t) {
                    t.add(e.schedule((function() {
                        return n.subscribe(t)
                    }), r))
                }))
            }
            var s = n(815544);
            var l = n(844299),
                f = n(38323);

            function b(e, r) {
                if (!e) throw new Error("Iterable cannot be null");
                return new s.Observable((function(n) {
                    (0, u.executeSchedule)(n, r, (function() {
                        var t = e[Symbol.asyncIterator]();
                        (0, u.executeSchedule)(n, r, (function() {
                            t.next().then((function(e) {
                                e.done ? n.complete() : n.next(e.value)
                            }))
                        }), 0, !0)
                    }))
                }))
            }
            var d = n(921139),
                v = n(844400),
                p = n(931474),
                h = n(889606),
                m = n(740335),
                y = n(188605),
                w = n(456311);

            function S(e, r) {
                if (null != e) {
                    if ((0, d.isInteropObservable)(e)) return function(e, r) {
                        return (0, t.innerFrom)(e).pipe(a(r), c(r))
                    }(e, r);
                    if ((0, p.isArrayLike)(e)) return function(e, r) {
                        return new s.Observable((function(n) {
                            var t = 0;
                            return r.schedule((function() {
                                t === e.length ? n.complete() : (n.next(e[t++]), n.closed || this.schedule())
                            }))
                        }))
                    }(e, r);
                    if ((0, v.isPromise)(e)) return function(e, r) {
                        return (0, t.innerFrom)(e).pipe(a(r), c(r))
                    }(e, r);
                    if ((0, m.isAsyncIterable)(e)) return b(e, r);
                    if ((0, h.isIterable)(e)) return function(e, r) {
                        return new s.Observable((function(n) {
                            var t;
                            return (0, u.executeSchedule)(n, r, (function() {
                                    t = e[l.iterator](), (0, u.executeSchedule)(n, r, (function() {
                                        var e, r, u;
                                        try {
                                            r = (e = t.next()).value, u = e.done
                                        } catch (e) {
                                            return void n.error(e)
                                        }
                                        u ? n.complete() : n.next(r)
                                    }), 0, !0)
                                })),
                                function() {
                                    return (0, f.isFunction)(null == t ? void 0 : t.return) && t.return()
                                }
                        }))
                    }(e, r);
                    if ((0, w.isReadableStreamLike)(e)) return function(e, r) {
                        return b((0, w.readableStreamLikeToAsyncGenerator)(e), r)
                    }(e, r)
                }
                throw (0, y.createInvalidObservableTypeError)(e)
            }

            function x(e, r) {
                return r ? S(e, r) : (0, t.innerFrom)(e)
            }
        },
        771035: (e, r, n) => {
            n.d(r, {
                innerFrom: () => p
            });
            var t = n(446685),
                u = n(931474),
                o = n(844400),
                i = n(815544),
                c = n(921139),
                a = n(740335),
                s = n(188605),
                l = n(889606),
                f = n(456311),
                b = n(38323),
                d = n(880842),
                v = n(836080);

            function p(e) {
                if (e instanceof i.Observable) return e;
                if (null != e) {
                    if ((0, c.isInteropObservable)(e)) return y = e, new i.Observable((function(e) {
                        var r = y[v.observable]();
                        if ((0, b.isFunction)(r.subscribe)) return r.subscribe(e);
                        throw new TypeError("Provided object does not correctly implement Symbol.observable")
                    }));
                    if ((0, u.isArrayLike)(e)) return m = e, new i.Observable((function(e) {
                        for (var r = 0; r < m.length && !e.closed; r++) e.next(m[r]);
                        e.complete()
                    }));
                    if ((0, o.isPromise)(e)) return p = e, new i.Observable((function(e) {
                        p.then((function(r) {
                            e.closed || (e.next(r), e.complete())
                        }), (function(r) {
                            return e.error(r)
                        })).then(null, d.reportUnhandledError)
                    }));
                    if ((0, a.isAsyncIterable)(e)) return h(e);
                    if ((0, l.isIterable)(e)) return n = e, new i.Observable((function(e) {
                        var r, u;
                        try {
                            for (var o = (0, t.__values)(n), i = o.next(); !i.done; i = o.next()) {
                                var c = i.value;
                                if (e.next(c), e.closed) return
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                i && !i.done && (u = o.return) && u.call(o)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        e.complete()
                    }));
                    if ((0, f.isReadableStreamLike)(e)) return r = e, h((0, f.readableStreamLikeToAsyncGenerator)(r))
                }
                var r, n, p, m, y;
                throw (0, s.createInvalidObservableTypeError)(e)
            }

            function h(e) {
                return new i.Observable((function(r) {
                    (function(e, r) {
                        var n, u, o, i;
                        return (0, t.__awaiter)(this, void 0, void 0, (function() {
                            var c, a;
                            return (0, t.__generator)(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        s.trys.push([0, 5, 6, 11]), n = (0, t.__asyncValues)(e), s.label = 1;
                                    case 1:
                                        return [4, n.next()];
                                    case 2:
                                        if ((u = s.sent()).done) return [3, 4];
                                        if (c = u.value, r.next(c), r.closed) return [2];
                                        s.label = 3;
                                    case 3:
                                        return [3, 1];
                                    case 4:
                                        return [3, 11];
                                    case 5:
                                        return a = s.sent(), o = {
                                            error: a
                                        }, [3, 11];
                                    case 6:
                                        return s.trys.push([6, , 9, 10]), u && !u.done && (i = n.return) ? [4, i.call(n)] : [3, 8];
                                    case 7:
                                        s.sent(), s.label = 8;
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        if (o) throw o.error;
                                        return [7];
                                    case 10:
                                        return [7];
                                    case 11:
                                        return r.complete(), [2]
                                }
                            }))
                        }))
                    })(e, r).catch((function(e) {
                        return r.error(e)
                    }))
                }))
            }
        },
        169977: (e, r, n) => {
            n.d(r, {
                filter: () => o
            });
            var t = n(116217),
                u = n(138966);

            function o(e, r) {
                return (0, t.operate)((function(n, t) {
                    var o = 0;
                    n.subscribe(new u.OperatorSubscriber(t, (function(n) {
                        return e.call(r, n, o++) && t.next(n)
                    })))
                }))
            }
        },
        997345: (e, r, n) => {
            n.d(r, {
                map: () => o
            });
            var t = n(116217),
                u = n(138966);

            function o(e, r) {
                return (0, t.operate)((function(n, t) {
                    var o = 0;
                    n.subscribe(new u.OperatorSubscriber(t, (function(n) {
                        t.next(e.call(r, n, o++))
                    })))
                }))
            }
        },
        114501: (e, r, n) => {
            n.d(r, {
                mergeMap: () => s
            });
            var t = n(997345),
                u = n(771035),
                o = n(116217),
                i = n(72117),
                c = n(138966);
            var a = n(38323);

            function s(e, r, n) {
                return void 0 === n && (n = 1 / 0), (0, a.isFunction)(r) ? s((function(n, o) {
                    return (0, t.map)((function(e, t) {
                        return r(n, e, o, t)
                    }))((0, u.innerFrom)(e(n, o)))
                }), n) : ("number" == typeof r && (n = r), (0, o.operate)((function(r, t) {
                    return function(e, r, n, t, o, a, s, l) {
                        var f = [],
                            b = 0,
                            d = 0,
                            v = !1,
                            p = function() {
                                !v || f.length || b || r.complete()
                            },
                            h = function(e) {
                                return b < t ? m(e) : f.push(e)
                            },
                            m = function(e) {
                                a && r.next(e), b++;
                                var l = !1;
                                (0, u.innerFrom)(n(e, d++)).subscribe(new c.OperatorSubscriber(r, (function(e) {
                                    null == o || o(e), a ? h(e) : r.next(e)
                                }), (function() {
                                    l = !0
                                }), void 0, (function() {
                                    if (l) try {
                                        b--;
                                        for (var e = function() {
                                                var e = f.shift();
                                                s ? (0, i.executeSchedule)(r, s, (function() {
                                                    return m(e)
                                                })) : m(e)
                                            }; f.length && b < t;) e();
                                        p()
                                    } catch (e) {
                                        r.error(e)
                                    }
                                })))
                            };
                        return e.subscribe(new c.OperatorSubscriber(r, h, (function() {
                                v = !0, p()
                            }))),
                            function() {
                                null == l || l()
                            }
                    }(r, t, e, n)
                })))
            }
        },
        346502: (e, r, n) => {
            n.d(r, {
                take: () => i
            });
            var t = n(423869),
                u = n(116217),
                o = n(138966);

            function i(e) {
                return e <= 0 ? function() {
                    return t.EMPTY
                } : (0, u.operate)((function(r, n) {
                    var t = 0;
                    r.subscribe(new o.OperatorSubscriber(n, (function(r) {
                        ++t <= e && (n.next(r), e <= t && n.complete())
                    })))
                }))
            }
        },
        844299: (e, r, n) => {
            n.d(r, {
                iterator: () => t
            });
            var t = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
        },
        45143: (e, r, n) => {
            n.d(r, {
                EmptyError: () => t
            });
            var t = (0, n(530634).createErrorClass)((function(e) {
                return function() {
                    e(this), this.name = "EmptyError", this.message = "no elements in sequence"
                }
            }))
        },
        595940: (e, r, n) => {
            n.d(r, {
                popResultSelector: () => i,
                popScheduler: () => c,
                popNumber: () => a
            });
            var t = n(38323),
                u = n(337160);

            function o(e) {
                return e[e.length - 1]
            }

            function i(e) {
                return (0, t.isFunction)(o(e)) ? e.pop() : void 0
            }

            function c(e) {
                return (0, u.isScheduler)(o(e)) ? e.pop() : void 0
            }

            function a(e, r) {
                return "number" == typeof o(e) ? e.pop() : r
            }
        },
        72117: (e, r, n) => {
            function t(e, r, n, t, u) {
                void 0 === t && (t = 0), void 0 === u && (u = !1);
                var o = r.schedule((function() {
                    n(), u ? e.add(this.schedule(null, t)) : this.unsubscribe()
                }), t);
                if (e.add(o), !u) return o
            }
            n.d(r, {
                executeSchedule: () => t
            })
        },
        931474: (e, r, n) => {
            n.d(r, {
                isArrayLike: () => t
            });
            var t = function(e) {
                return e && "number" == typeof e.length && "function" != typeof e
            }
        },
        740335: (e, r, n) => {
            n.d(r, {
                isAsyncIterable: () => u
            });
            var t = n(38323);

            function u(e) {
                return Symbol.asyncIterator && (0, t.isFunction)(null == e ? void 0 : e[Symbol.asyncIterator])
            }
        },
        921139: (e, r, n) => {
            n.d(r, {
                isInteropObservable: () => o
            });
            var t = n(836080),
                u = n(38323);

            function o(e) {
                return (0, u.isFunction)(e[t.observable])
            }
        },
        889606: (e, r, n) => {
            n.d(r, {
                isIterable: () => o
            });
            var t = n(844299),
                u = n(38323);

            function o(e) {
                return (0, u.isFunction)(null == e ? void 0 : e[t.iterator])
            }
        },
        844400: (e, r, n) => {
            n.d(r, {
                isPromise: () => u
            });
            var t = n(38323);

            function u(e) {
                return (0, t.isFunction)(null == e ? void 0 : e.then)
            }
        },
        456311: (e, r, n) => {
            n.d(r, {
                readableStreamLikeToAsyncGenerator: () => o,
                isReadableStreamLike: () => i
            });
            var t = n(446685),
                u = n(38323);

            function o(e) {
                return (0, t.__asyncGenerator)(this, arguments, (function() {
                    var r, n, u;
                    return (0, t.__generator)(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                r = e.getReader(), o.label = 1;
                            case 1:
                                o.trys.push([1, , 9, 10]), o.label = 2;
                            case 2:
                                return [4, (0, t.__await)(r.read())];
                            case 3:
                                return n = o.sent(), u = n.value, n.done ? [4, (0, t.__await)(void 0)] : [3, 5];
                            case 4:
                                return [2, o.sent()];
                            case 5:
                                return [4, (0, t.__await)(u)];
                            case 6:
                                return [4, o.sent()];
                            case 7:
                                return o.sent(), [3, 2];
                            case 8:
                                return [3, 10];
                            case 9:
                                return r.releaseLock(), [7];
                            case 10:
                                return [2]
                        }
                    }))
                }))
            }

            function i(e) {
                return (0, u.isFunction)(null == e ? void 0 : e.getReader)
            }
        },
        337160: (e, r, n) => {
            n.d(r, {
                isScheduler: () => u
            });
            var t = n(38323);

            function u(e) {
                return e && (0, t.isFunction)(e.schedule)
            }
        },
        188605: (e, r, n) => {
            function t(e) {
                return new TypeError("You provided " + (null !== e && "object" == typeof e ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
            }
            n.d(r, {
                createInvalidObservableTypeError: () => t
            })
        }
    }
]);
"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [47488], {
        947488: (r, t, e) => {
            e.d(t, {
                BehaviorSubject: () => o
            });
            var n = e(446685),
                o = function(r) {
                    function t(t) {
                        var e = r.call(this) || this;
                        return e._value = t, e
                    }
                    return (0, n.__extends)(t, r), Object.defineProperty(t.prototype, "value", {
                        get: function() {
                            return this.getValue()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype._subscribe = function(t) {
                        var e = r.prototype._subscribe.call(this, t);
                        return !e.closed && t.next(this._value), e
                    }, t.prototype.getValue = function() {
                        var r = this,
                            t = r.hasError,
                            e = r.thrownError,
                            n = r._value;
                        if (t) throw e;
                        return this._throwIfClosed(), n
                    }, t.prototype.next = function(t) {
                        r.prototype.next.call(this, this._value = t)
                    }, t
                }(e(737538).Subject)
        },
        815544: (r, t, e) => {
            e.d(t, {
                Observable: () => f
            });
            var n = e(620210),
                o = e(303448),
                i = e(836080),
                u = e(472484);

            function s(r) {
                return 0 === r.length ? u.identity : 1 === r.length ? r[0] : function(t) {
                    return r.reduce((function(r, t) {
                        return t(r)
                    }), t)
                }
            }
            var c = e(777254),
                a = e(38323),
                l = e(263535),
                f = function() {
                    function r(r) {
                        r && (this._subscribe = r)
                    }
                    return r.prototype.lift = function(t) {
                        var e = new r;
                        return e.source = this, e.operator = t, e
                    }, r.prototype.subscribe = function(r, t, e) {
                        var i, u = this,
                            s = (i = r) && i instanceof n.Subscriber || function(r) {
                                return r && (0, a.isFunction)(r.next) && (0, a.isFunction)(r.error) && (0, a.isFunction)(r.complete)
                            }(i) && (0, o.isSubscription)(i) ? r : new n.SafeSubscriber(r, t, e);
                        return (0, l.errorContext)((function() {
                            var r = u,
                                t = r.operator,
                                e = r.source;
                            s.add(t ? t.call(s, e) : e ? u._subscribe(s) : u._trySubscribe(s))
                        })), s
                    }, r.prototype._trySubscribe = function(r) {
                        try {
                            return this._subscribe(r)
                        } catch (t) {
                            r.error(t)
                        }
                    }, r.prototype.forEach = function(r, t) {
                        var e = this;
                        return new(t = p(t))((function(t, n) {
                            var o;
                            o = e.subscribe((function(t) {
                                try {
                                    r(t)
                                } catch (r) {
                                    n(r), null == o || o.unsubscribe()
                                }
                            }), n, t)
                        }))
                    }, r.prototype._subscribe = function(r) {
                        var t;
                        return null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(r)
                    }, r.prototype[i.observable] = function() {
                        return this
                    }, r.prototype.pipe = function() {
                        for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
                        return s(r)(this)
                    }, r.prototype.toPromise = function(r) {
                        var t = this;
                        return new(r = p(r))((function(r, e) {
                            var n;
                            t.subscribe((function(r) {
                                return n = r
                            }), (function(r) {
                                return e(r)
                            }), (function() {
                                return r(n)
                            }))
                        }))
                    }, r.create = function(t) {
                        return new r(t)
                    }, r
                }();

            function p(r) {
                var t;
                return null !== (t = null != r ? r : c.config.Promise) && void 0 !== t ? t : Promise
            }
        },
        737538: (r, t, e) => {
            e.d(t, {
                Subject: () => a
            });
            var n = e(446685),
                o = e(815544),
                i = e(303448),
                u = (0, e(530634).createErrorClass)((function(r) {
                    return function() {
                        r(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"
                    }
                })),
                s = e(3955),
                c = e(263535),
                a = function(r) {
                    function t() {
                        var t = r.call(this) || this;
                        return t.closed = !1, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t
                    }
                    return (0, n.__extends)(t, r), t.prototype.lift = function(r) {
                        var t = new l(this, this);
                        return t.operator = r, t
                    }, t.prototype._throwIfClosed = function() {
                        if (this.closed) throw new u
                    }, t.prototype.next = function(r) {
                        var t = this;
                        (0, c.errorContext)((function() {
                            var e, o;
                            if (t._throwIfClosed(), !t.isStopped) {
                                var i = t.observers.slice();
                                try {
                                    for (var u = (0,
                                            n.__values)(i), s = u.next(); !s.done; s = u.next()) {
                                        s.value.next(r)
                                    }
                                } catch (r) {
                                    e = {
                                        error: r
                                    }
                                } finally {
                                    try {
                                        s && !s.done && (o = u.return) && o.call(u)
                                    } finally {
                                        if (e) throw e.error
                                    }
                                }
                            }
                        }))
                    }, t.prototype.error = function(r) {
                        var t = this;
                        (0, c.errorContext)((function() {
                            if (t._throwIfClosed(), !t.isStopped) {
                                t.hasError = t.isStopped = !0, t.thrownError = r;
                                for (var e = t.observers; e.length;) e.shift().error(r)
                            }
                        }))
                    }, t.prototype.complete = function() {
                        var r = this;
                        (0, c.errorContext)((function() {
                            if (r._throwIfClosed(), !r.isStopped) {
                                r.isStopped = !0;
                                for (var t = r.observers; t.length;) t.shift().complete()
                            }
                        }))
                    }, t.prototype.unsubscribe = function() {
                        this.isStopped = this.closed = !0, this.observers = null
                    }, Object.defineProperty(t.prototype, "observed", {
                        get: function() {
                            var r;
                            return (null === (r = this.observers) || void 0 === r ? void 0 : r.length) > 0
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype._trySubscribe = function(t) {
                        return this._throwIfClosed(), r.prototype._trySubscribe.call(this, t)
                    }, t.prototype._subscribe = function(r) {
                        return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r)
                    }, t.prototype._innerSubscribe = function(r) {
                        var t = this,
                            e = t.hasError,
                            n = t.isStopped,
                            o = t.observers;
                        return e || n ? i.EMPTY_SUBSCRIPTION : (o.push(r), new i.Subscription((function() {
                            return (0, s.arrRemove)(o, r)
                        })))
                    }, t.prototype._checkFinalizedStatuses = function(r) {
                        var t = this,
                            e = t.hasError,
                            n = t.thrownError,
                            o = t.isStopped;
                        e ? r.error(n) : o && r.complete()
                    }, t.prototype.asObservable = function() {
                        var r = new o.Observable;
                        return r.source = this, r
                    }, t.create = function(r, t) {
                        return new l(r, t)
                    }, t
                }(o.Observable),
                l = function(r) {
                    function t(t, e) {
                        var n = r.call(this) || this;
                        return n.destination = t, n.source = e, n
                    }
                    return (0, n.__extends)(t, r), t.prototype.next = function(r) {
                        var t, e;
                        null === (e = null === (t = this.destination) || void 0 === t ? void 0 : t.next) || void 0 === e || e.call(t, r)
                    }, t.prototype.error = function(r) {
                        var t, e;
                        null === (e = null === (t = this.destination) || void 0 === t ? void 0 : t.error) || void 0 === e || e.call(t, r)
                    }, t.prototype.complete = function() {
                        var r, t;
                        null === (t = null === (r = this.destination) || void 0 === r ? void 0 : r.complete) || void 0 === t || t.call(r)
                    }, t.prototype._subscribe = function(r) {
                        var t, e;
                        return null !== (e = null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(r)) && void 0 !== e ? e : i.EMPTY_SUBSCRIPTION
                    }, t
                }(a)
        },
        620210: (r, t, e) => {
            e.d(t, {
                SafeSubscriber: () => d,
                Subscriber: () => h
            });
            var n = e(446685),
                o = e(38323),
                i = e(303448),
                u = e(777254),
                s = e(880842),
                c = e(177441),
                a = l("C", void 0, void 0);

            function l(r, t, e) {
                return {
                    kind: r,
                    value: t,
                    error: e
                }
            }
            var f = e(692402),
                p = e(263535),
                h = function(r) {
                    function t(t) {
                        var e = r.call(this) || this;
                        return e.isStopped = !1, t ? (e.destination = t, (0, i.isSubscription)(t) && t.add(e)) : e.destination = _, e
                    }
                    return (0, n.__extends)(t, r), t.create = function(r, t, e) {
                            return new d(r, t, e)
                        }, t.prototype.next = function(r) {
                            this.isStopped ? y(function(r) {
                                return l("N", r, void 0)
                            }(r), this) : this._next(r)
                        }, t.prototype.error = function(r) {
                            this.isStopped ? y(l("E", void 0, r), this) : (this.isStopped = !0, this._error(r))
                        }, t.prototype.complete = function() {
                            this.isStopped ? y(a, this) : (this.isStopped = !0, this._complete())
                        }, t.prototype.unsubscribe = function() {
                            this.closed || (this.isStopped = !0, r.prototype.unsubscribe.call(this), this.destination = null)
                        },
                        t.prototype._next = function(r) {
                            this.destination.next(r)
                        }, t.prototype._error = function(r) {
                            try {
                                this.destination.error(r)
                            } finally {
                                this.unsubscribe()
                            }
                        }, t.prototype._complete = function() {
                            try {
                                this.destination.complete()
                            } finally {
                                this.unsubscribe()
                            }
                        }, t
                }(i.Subscription),
                d = function(r) {
                    function t(t, e, n) {
                        var i, s = r.call(this) || this;
                        if ((0, o.isFunction)(t)) i = t;
                        else if (t) {
                            var a;
                            i = t.next, e = t.error, n = t.complete, s && u.config.useDeprecatedNextContext ? (a = Object.create(t)).unsubscribe = function() {
                                return s.unsubscribe()
                            } : a = t, i = null == i ? void 0 : i.bind(a), e = null == e ? void 0 : e.bind(a), n = null == n ? void 0 : n.bind(a)
                        }
                        return s.destination = {
                            next: i ? v(i, s) : c.noop,
                            error: v(null != e ? e : b, s),
                            complete: n ? v(n, s) : c.noop
                        }, s
                    }
                    return (0, n.__extends)(t, r), t
                }(h);

            function v(r, t) {
                return function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    try {
                        r.apply(void 0, (0, n.__spreadArray)([], (0, n.__read)(t), !1))
                    } catch (r) {
                        u.config.useDeprecatedSynchronousErrorHandling ? (0, p.captureError)(r) : (0, s.reportUnhandledError)(r)
                    }
                }
            }

            function b(r) {
                throw r
            }

            function y(r, t) {
                var e = u.config.onStoppedNotification;
                e && f.timeoutProvider.setTimeout((function() {
                    return e(r, t)
                }))
            }
            var _ = {
                closed: !0,
                next: c.noop,
                error: b,
                complete: c.noop
            }
        },
        303448: (r, t, e) => {
            e.d(t, {
                EMPTY_SUBSCRIPTION: () => c,
                Subscription: () => s,
                isSubscription: () => a
            });
            var n = e(446685),
                o = e(38323),
                i = (0, e(530634).createErrorClass)((function(r) {
                    return function(t) {
                        r(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map((function(r, t) {
                            return t + 1 + ") " + r.toString()
                        })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t
                    }
                })),
                u = e(3955),
                s = function() {
                    function r(r) {
                        this.initialTeardown = r, this.closed = !1, this._parentage = null, this._teardowns = null
                    }
                    var t;
                    return r.prototype.unsubscribe = function() {
                        var r, t, e, u, s;
                        if (!this.closed) {
                            this.closed = !0;
                            var c = this._parentage;
                            if (c)
                                if (this._parentage = null, Array.isArray(c)) try {
                                    for (var a = (0, n.__values)(c), f = a.next(); !f.done; f = a.next()) {
                                        f.value.remove(this)
                                    }
                                } catch (t) {
                                    r = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        f && !f.done && (t = a.return) && t.call(a)
                                    } finally {
                                        if (r) throw r.error
                                    }
                                } else c.remove(this);
                            var p = this.initialTeardown;
                            if ((0, o.isFunction)(p)) try {
                                p()
                            } catch (r) {
                                s = r instanceof i ? r.errors : [r]
                            }
                            var h = this._teardowns;
                            if (h) {
                                this._teardowns = null;
                                try {
                                    for (var d = (0, n.__values)(h), v = d.next(); !v.done; v = d.next()) {
                                        var b = v.value;
                                        try {
                                            l(b)
                                        } catch (r) {
                                            s = null != s ? s : [], r instanceof i ? s = (0, n.__spreadArray)((0, n.__spreadArray)([], (0, n.__read)(s), !1), (0, n.__read)(r.errors), !1) : s.push(r)
                                        }
                                    }
                                } catch (r) {
                                    e = {
                                        error: r
                                    }
                                } finally {
                                    try {
                                        v && !v.done && (u = d.return) && u.call(d)
                                    } finally {
                                        if (e) throw e.error
                                    }
                                }
                            }
                            if (s) throw new i(s)
                        }
                    }, r.prototype.add = function(t) {
                        var e;
                        if (t && t !== this)
                            if (this.closed) l(t);
                            else {
                                if (t instanceof r) {
                                    if (t.closed || t._hasParent(this)) return;
                                    t._addParent(this)
                                }(this._teardowns = null !== (e = this._teardowns) && void 0 !== e ? e : []).push(t)
                            }
                    }, r.prototype._hasParent = function(r) {
                        var t = this._parentage;
                        return t === r || Array.isArray(t) && t.includes(r)
                    }, r.prototype._addParent = function(r) {
                        var t = this._parentage;
                        this._parentage = Array.isArray(t) ? (t.push(r), t) : t ? [t, r] : r
                    }, r.prototype._removeParent = function(r) {
                        var t = this._parentage;
                        t === r ? this._parentage = null : Array.isArray(t) && (0,
                            u.arrRemove)(t, r)
                    }, r.prototype.remove = function(t) {
                        var e = this._teardowns;
                        e && (0, u.arrRemove)(e, t), t instanceof r && t._removeParent(this)
                    }, r.EMPTY = ((t = new r).closed = !0, t), r
                }(),
                c = s.EMPTY;

            function a(r) {
                return r instanceof s || r && "closed" in r && (0, o.isFunction)(r.remove) && (0, o.isFunction)(r.add) && (0, o.isFunction)(r.unsubscribe)
            }

            function l(r) {
                (0, o.isFunction)(r) ? r(): r.unsubscribe()
            }
        },
        777254: (r, t, e) => {
            e.d(t, {
                config: () => n
            });
            var n = {
                onUnhandledError: null,
                onStoppedNotification: null,
                Promise: void 0,
                useDeprecatedSynchronousErrorHandling: !1,
                useDeprecatedNextContext: !1
            }
        },
        692402: (r, t, e) => {
            e.d(t, {
                timeoutProvider: () => o
            });
            var n = e(446685),
                o = {
                    setTimeout: function() {
                        for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
                        var e = o.delegate;
                        return ((null == e ? void 0 : e.setTimeout) || setTimeout).apply(void 0, (0, n.__spreadArray)([], (0, n.__read)(r), !1))
                    },
                    clearTimeout: function(r) {
                        var t = o.delegate;
                        return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(r)
                    },
                    delegate: void 0
                }
        },
        836080: (r, t, e) => {
            e.d(t, {
                observable: () => n
            });
            var n = "function" == typeof Symbol && Symbol.observable || "@@observable"
        },
        3955: (r, t, e) => {
            function n(r, t) {
                if (r) {
                    var e = r.indexOf(t);
                    0 <= e && r.splice(e, 1)
                }
            }
            e.d(t, {
                arrRemove: () => n
            })
        },
        530634: (r, t, e) => {
            function n(r) {
                var t = r((function(r) {
                    Error.call(r), r.stack = (new Error).stack
                }));
                return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t
            }
            e.d(t, {
                createErrorClass: () => n
            })
        },
        263535: (r, t, e) => {
            e.d(t, {
                errorContext: () => i,
                captureError: () => u
            });
            var n = e(777254),
                o = null;

            function i(r) {
                if (n.config.useDeprecatedSynchronousErrorHandling) {
                    var t = !o;
                    if (t && (o = {
                            errorThrown: !1,
                            error: null
                        }), r(), t) {
                        var e = o,
                            i = e.errorThrown,
                            u = e.error;
                        if (o = null, i) throw u
                    }
                } else r()
            }

            function u(r) {
                n.config.useDeprecatedSynchronousErrorHandling && o && (o.errorThrown = !0, o.error = r)
            }
        },
        472484: (r, t, e) => {
            function n(r) {
                return r
            }
            e.d(t, {
                identity: () => n
            })
        },
        38323: (r, t, e) => {
            function n(r) {
                return "function" == typeof r
            }
            e.d(t, {
                isFunction: () => n
            })
        },
        177441: (r, t, e) => {
            function n() {}
            e.d(t, {
                noop: () => n
            })
        },
        880842: (r, t, e) => {
            e.d(t, {
                reportUnhandledError: () => i
            });
            var n = e(777254),
                o = e(692402);

            function i(r) {
                o.timeoutProvider.setTimeout((function() {
                    var t = n.config.onUnhandledError;
                    if (!t) throw r;
                    t(r)
                }))
            }
        },
        446685: (r, t, e) => {
            e.d(t, {
                __extends: () => o,
                __awaiter: () => i,
                __generator: () => u,
                __values: () => s,
                __read: () => c,
                __spreadArray: () => a,
                __await: () => l,
                __asyncGenerator: () => f,
                __asyncValues: () => p
            });
            var n = function(r, t) {
                return n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(r, t) {
                    r.__proto__ = t
                } || function(r, t) {
                    for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e])
                }, n(r, t)
            };

            function o(r, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function e() {
                    this.constructor = r
                }
                n(r, t), r.prototype = null === t ? Object.create(t) : (e.prototype = t.prototype, new e)
            }

            function i(r, t, e, n) {
                return new(e || (e = Promise))((function(o, i) {
                    function u(r) {
                        try {
                            c(n.next(r))
                        } catch (r) {
                            i(r)
                        }
                    }

                    function s(r) {
                        try {
                            c(n.throw(r))
                        } catch (r) {
                            i(r)
                        }
                    }

                    function c(r) {
                        var t;
                        r.done ? o(r.value) : (t = r.value, t instanceof e ? t : new e((function(r) {
                            r(t)
                        }))).then(u, s)
                    }
                    c((n = n.apply(r, t || [])).next())
                }))
            }

            function u(r, t) {
                var e, n, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
                        return function(i) {
                            if (e) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (e = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
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
                                i = t.call(r, u)
                            } catch (r) {
                                i = [6, r], n = 0
                            } finally {
                                e = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, s])
                    }
                }
            }
            Object.create;

            function s(r) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    e = t && r[t],
                    n = 0;
                if (e) return e.call(r);
                if (r && "number" == typeof r.length) return {
                    next: function() {
                        return r && n >= r.length && (r = void 0), {
                            value: r && r[n++],
                            done: !r
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function c(r, t) {
                var e = "function" == typeof Symbol && r[Symbol.iterator];
                if (!e) return r;
                var n, o, i = e.call(r),
                    u = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = i.next()).done;) u.push(n.value)
                } catch (r) {
                    o = {
                        error: r
                    }
                } finally {
                    try {
                        n && !n.done && (e = i.return) && e.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return u
            }

            function a(r, t) {
                for (var e = 0, n = t.length, o = r.length; e < n; e++, o++) r[o] = t[e];
                return r
            }

            function l(r) {
                return this instanceof l ? (this.v = r, this) : new l(r)
            }

            function f(r, t, e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, o = e.apply(r, t || []),
                    i = [];
                return n = {}, u("next"), u("throw"), u("return"), n[Symbol.asyncIterator] = function() {
                    return this
                }, n;

                function u(r) {
                    o[r] && (n[r] = function(t) {
                        return new Promise((function(e, n) {
                            i.push([r, t, e, n]) > 1 || s(r, t)
                        }))
                    })
                }

                function s(r, t) {
                    try {
                        (e = o[r](t)).value instanceof l ? Promise.resolve(e.value.v).then(c, a) : f(i[0][2], e)
                    } catch (r) {
                        f(i[0][3], r)
                    }
                    var e
                }

                function c(r) {
                    s("next", r)
                }

                function a(r) {
                    s("throw", r)
                }

                function f(r, t) {
                    r(t), i.shift(), i.length && s(i[0][0], i[0][1])
                }
            }

            function p(r) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, e = r[Symbol.asyncIterator];
                return e ? e.call(r) : (r = s(r), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function n(e) {
                    t[e] = r[e] && function(t) {
                        return new Promise((function(n, o) {
                            (function(r, t, e, n) {
                                Promise.resolve(n).then((function(t) {
                                    r({
                                        value: t,
                                        done: e
                                    })
                                }), t)
                            })(n, o, (t = r[e](t)).done, t.value)
                        }))
                    }
                }
            }
            Object.create
        }
    }
]);
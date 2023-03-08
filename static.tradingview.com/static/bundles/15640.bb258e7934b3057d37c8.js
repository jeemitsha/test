(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [15640, 59255, 90890, 28557, 9796, 35608], {
        159255: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => M
            });
            var r = function() {
                    if ("undefined" != typeof Map) return Map;

                    function t(t, e) {
                        var n = -1;
                        return t.some((function(t, r) {
                            return t[0] === e && (n = r, !0)
                        })), n
                    }
                    return function() {
                        function e() {
                            this.__entries__ = []
                        }
                        return Object.defineProperty(e.prototype, "size", {
                            get: function() {
                                return this.__entries__.length
                            },
                            enumerable: !0,
                            configurable: !0
                        }), e.prototype.get = function(e) {
                            var n = t(this.__entries__, e),
                                r = this.__entries__[n];
                            return r && r[1]
                        }, e.prototype.set = function(e, n) {
                            var r = t(this.__entries__, e);
                            ~r ? this.__entries__[r][1] = n : this.__entries__.push([e, n])
                        }, e.prototype.delete = function(e) {
                            var n = this.__entries__,
                                r = t(n, e);
                            ~r && n.splice(r, 1)
                        }, e.prototype.has = function(e) {
                            return !!~t(this.__entries__, e)
                        }, e.prototype.clear = function() {
                            this.__entries__.splice(0)
                        }, e.prototype.forEach = function(t, e) {
                            void 0 === e && (e = null);
                            for (var n = 0, r = this.__entries__; n < r.length; n++) {
                                var o = r[n];
                                t.call(e, o[1], o[0])
                            }
                        }, e
                    }()
                }(),
                o = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                i = void 0 !== n.g && n.g.Math === Math ? n.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                s = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(i) : function(t) {
                    return setTimeout((function() {
                        return t(Date.now())
                    }), 1e3 / 60)
                };
            var c = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                a = "undefined" != typeof MutationObserver,
                u = function() {
                    function t() {
                        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, e) {
                            var n = !1,
                                r = !1,
                                o = 0;

                            function i() {
                                n && (n = !1, t()), r && a()
                            }

                            function c() {
                                s(i)
                            }

                            function a() {
                                var t = Date.now();
                                if (n) {
                                    if (t - o < 2) return;
                                    r = !0
                                } else n = !0, r = !1, setTimeout(c, e);
                                o = t
                            }
                            return a
                        }(this.refresh.bind(this), 20)
                    }
                    return t.prototype.addObserver = function(t) {
                        ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
                    }, t.prototype.removeObserver = function(t) {
                        var e = this.observers_,
                            n = e.indexOf(t);
                        ~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_()
                    }, t.prototype.refresh = function() {
                        this.updateObservers_() && this.refresh()
                    }, t.prototype.updateObservers_ = function() {
                        var t = this.observers_.filter((function(t) {
                            return t.gatherActive(), t.hasActive()
                        }));
                        return t.forEach((function(t) {
                            return t.broadcastActive()
                        })), t.length > 0
                    }, t.prototype.connect_ = function() {
                        o && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), a ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                    }, t.prototype.disconnect_ = function() {
                        o && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_),
                            window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                    }, t.prototype.onTransitionEnd_ = function(t) {
                        var e = t.propertyName,
                            n = void 0 === e ? "" : e;
                        c.some((function(t) {
                            return !!~n.indexOf(t)
                        })) && this.refresh()
                    }, t.getInstance = function() {
                        return this.instance_ || (this.instance_ = new t), this.instance_
                    }, t.instance_ = null, t
                }(),
                h = function(t, e) {
                    for (var n = 0, r = Object.keys(e); n < r.length; n++) {
                        var o = r[n];
                        Object.defineProperty(t, o, {
                            value: e[o],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return t
                },
                d = function(t) {
                    return t && t.ownerDocument && t.ownerDocument.defaultView || i
                },
                f = m(0, 0, 0, 0);

            function l(t) {
                return parseFloat(t) || 0
            }

            function v(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                return e.reduce((function(e, n) {
                    return e + l(t["border-" + n + "-width"])
                }), 0)
            }

            function p(t) {
                var e = t.clientWidth,
                    n = t.clientHeight;
                if (!e && !n) return f;
                var r = d(t).getComputedStyle(t),
                    o = function(t) {
                        for (var e = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                            var o = r[n],
                                i = t["padding-" + o];
                            e[o] = l(i)
                        }
                        return e
                    }(r),
                    i = o.left + o.right,
                    s = o.top + o.bottom,
                    c = l(r.width),
                    a = l(r.height);
                if ("border-box" === r.boxSizing && (Math.round(c + i) !== e && (c -= v(r, "left", "right") + i), Math.round(a + s) !== n && (a -= v(r, "top", "bottom") + s)), ! function(t) {
                        return t === d(t).document.documentElement
                    }(t)) {
                    var u = Math.round(c + i) - e,
                        h = Math.round(a + s) - n;
                    1 !== Math.abs(u) && (c -= u), 1 !== Math.abs(h) && (a -= h)
                }
                return m(o.left, o.top, c, a)
            }
            var _ = "undefined" != typeof SVGGraphicsElement ? function(t) {
                return t instanceof d(t).SVGGraphicsElement
            } : function(t) {
                return t instanceof d(t).SVGElement && "function" == typeof t.getBBox
            };

            function b(t) {
                return o ? _(t) ? function(t) {
                    var e = t.getBBox();
                    return m(0, 0, e.width, e.height)
                }(t) : p(t) : f
            }

            function m(t, e, n, r) {
                return {
                    x: t,
                    y: e,
                    width: n,
                    height: r
                }
            }
            var g = function() {
                    function t(t) {
                        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = m(0, 0, 0, 0), this.target = t
                    }
                    return t.prototype.isActive = function() {
                        var t = b(this.target);
                        return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
                    }, t.prototype.broadcastRect = function() {
                        var t = this.contentRect_;
                        return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
                    }, t
                }(),
                y = function(t, e) {
                    var n, r, o, i, s, c, a, u = (r = (n = e).x, o = n.y, i = n.width, s = n.height, c = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, a = Object.create(c.prototype), h(a, {
                        x: r,
                        y: o,
                        width: i,
                        height: s,
                        top: o,
                        right: r + i,
                        bottom: s + o,
                        left: r
                    }), a);
                    h(this, {
                        target: t,
                        contentRect: u
                    })
                },
                w = function() {
                    function t(t, e, n) {
                        if (this.activeObservations_ = [], this.observations_ = new r, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
                        this.callback_ = t, this.controller_ = e, this.callbackCtx_ = n
                    }
                    return t.prototype.observe = function(t) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof d(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var e = this.observations_;
                            e.has(t) || (e.set(t, new g(t)), this.controller_.addObserver(this), this.controller_.refresh())
                        }
                    }, t.prototype.unobserve = function(t) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof d(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var e = this.observations_;
                            e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
                        }
                    }, t.prototype.disconnect = function() {
                        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                    }, t.prototype.gatherActive = function() {
                        var t = this;
                        this.clearActive(), this.observations_.forEach((function(e) {
                            e.isActive() && t.activeObservations_.push(e)
                        }))
                    }, t.prototype.broadcastActive = function() {
                        if (this.hasActive()) {
                            var t = this.callbackCtx_,
                                e = this.activeObservations_.map((function(t) {
                                    return new y(t.target, t.broadcastRect())
                                }));
                            this.callback_.call(t, e, t), this.clearActive()
                        }
                    }, t.prototype.clearActive = function() {
                        this.activeObservations_.splice(0)
                    }, t.prototype.hasActive = function() {
                        return this.activeObservations_.length > 0
                    }, t
                }(),
                E = "undefined" != typeof WeakMap ? new WeakMap : new r,
                O = function t(e) {
                    if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    var n = u.getInstance(),
                        r = new w(e, n, this);
                    E.set(this, r)
                };
            ["observe", "unobserve", "disconnect"].forEach((function(t) {
                O.prototype[t] = function() {
                    var e;
                    return (e = E.get(this))[t].apply(e, arguments)
                }
            }));
            const M = void 0 !== i.ResizeObserver ? i.ResizeObserver : O
        },
        259142: function(t, e) {
            var n, r, o;
            r = [e], n = function(t) {
                "use strict";

                function e(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                        return n
                    }
                    return Array.from(t)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = !1;
                if ("undefined" != typeof window) {
                    var r = {
                        get passive() {
                            n = !0
                        }
                    };
                    window.addEventListener("testPassive", null, r), window.removeEventListener("testPassive", null, r)
                }
                var o = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
                    i = [],
                    s = !1,
                    c = -1,
                    a = void 0,
                    u = void 0,
                    h = function(t) {
                        return i.some((function(e) {
                            return !(!e.options.allowTouchMove || !e.options.allowTouchMove(t))
                        }))
                    },
                    d = function(t) {
                        var e = t || window.event;
                        return !!h(e.target) || 1 < e.touches.length || (e.preventDefault && e.preventDefault(), !1)
                    },
                    f = function() {
                        setTimeout((function() {
                            void 0 !== u && (document.body.style.paddingRight = u, u = void 0), void 0 !== a && (document.body.style.overflow = a, a = void 0)
                        }))
                    };
                t.disableBodyScroll = function(t, r) {
                    if (o) {
                        if (!t) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
                        if (t && !i.some((function(e) {
                                return e.targetElement === t
                            }))) {
                            var f = {
                                targetElement: t,
                                options: r || {}
                            };
                            i = [].concat(e(i), [f]), t.ontouchstart = function(t) {
                                1 === t.targetTouches.length && (c = t.targetTouches[0].clientY)
                            }, t.ontouchmove = function(e) {
                                var n, r, o, i;
                                1 === e.targetTouches.length && (r = t, i = (n = e).targetTouches[0].clientY - c, !h(n.target) && (r && 0 === r.scrollTop && 0 < i || (o = r) && o.scrollHeight - o.scrollTop <= o.clientHeight && i < 0 ? d(n) : n.stopPropagation()))
                            }, s || (document.addEventListener("touchmove", d, n ? {
                                passive: !1
                            } : void 0), s = !0)
                        }
                    } else {
                        v = r, setTimeout((function() {
                            if (void 0 === u) {
                                var t = !!v && !0 === v.reserveScrollBarGap,
                                    e = window.innerWidth - document.documentElement.clientWidth;
                                t && 0 < e && (u = document.body.style.paddingRight, document.body.style.paddingRight = e + "px")
                            }
                            void 0 === a && (a = document.body.style.overflow, document.body.style.overflow = "hidden")
                        }));
                        var l = {
                            targetElement: t,
                            options: r || {}
                        };
                        i = [].concat(e(i), [l])
                    }
                    var v
                }, t.clearAllBodyScrollLocks = function() {
                    o ? (i.forEach((function(t) {
                        t.targetElement.ontouchstart = null, t.targetElement.ontouchmove = null
                    })), s && (document.removeEventListener("touchmove", d, n ? {
                        passive: !1
                    } : void 0), s = !1), i = [], c = -1) : (f(), i = [])
                }, t.enableBodyScroll = function(t) {
                    if (o) {
                        if (!t) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                        t.ontouchstart = null, t.ontouchmove = null, i = i.filter((function(e) {
                            return e.targetElement !== t
                        })), s && 0 === i.length && (document.removeEventListener("touchmove", d, n ? {
                            passive: !1
                        } : void 0), s = !1)
                    } else 1 === i.length && i[0].targetElement === t ? (f(), i = []) : i = i.filter((function(e) {
                        return e.targetElement !== t
                    }))
                }
            }, void 0 === (o = "function" == typeof n ? n.apply(e, r) : n) || (t.exports = o)
        },
        519624: (t, e, n) => {
            "use strict";

            function r() {
                return r = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, r.apply(this, arguments)
            }
            n.d(e, {
                default: () => r
            })
        }
    }
]);
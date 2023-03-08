(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [21754, 78703, 91859, 73580, 802, 17314, 91622, 57965, 59255, 15640, 90890, 28557, 9001, 36249, 86918, 9796, 35608], {
        159255: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => I
            });
            var r = function() {
                    if ("undefined" != typeof Map) return Map;

                    function e(e, t) {
                        var n = -1;
                        return e.some((function(e, r) {
                            return e[0] === t && (n = r, !0)
                        })), n
                    }
                    return function() {
                        function t() {
                            this.__entries__ = []
                        }
                        return Object.defineProperty(t.prototype, "size", {
                            get: function() {
                                return this.__entries__.length
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.prototype.get = function(t) {
                            var n = e(this.__entries__, t),
                                r = this.__entries__[n];
                            return r && r[1]
                        }, t.prototype.set = function(t, n) {
                            var r = e(this.__entries__, t);
                            ~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n])
                        }, t.prototype.delete = function(t) {
                            var n = this.__entries__,
                                r = e(n, t);
                            ~r && n.splice(r, 1)
                        }, t.prototype.has = function(t) {
                            return !!~e(this.__entries__, t)
                        }, t.prototype.clear = function() {
                            this.__entries__.splice(0)
                        }, t.prototype.forEach = function(e, t) {
                            void 0 === t && (t = null);
                            for (var n = 0, r = this.__entries__; n < r.length; n++) {
                                var i = r[n];
                                e.call(t, i[1], i[0])
                            }
                        }, t
                    }()
                }(),
                i = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                a = void 0 !== n.g && n.g.Math === Math ? n.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                o = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(a) : function(e) {
                    return setTimeout((function() {
                        return e(Date.now())
                    }), 1e3 / 60)
                };
            var s = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                l = "undefined" != typeof MutationObserver,
                u = function() {
                    function e() {
                        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e, t) {
                            var n = !1,
                                r = !1,
                                i = 0;

                            function a() {
                                n && (n = !1, e()), r && l()
                            }

                            function s() {
                                o(a)
                            }

                            function l() {
                                var e = Date.now();
                                if (n) {
                                    if (e - i < 2) return;
                                    r = !0
                                } else n = !0, r = !1, setTimeout(s, t);
                                i = e
                            }
                            return l
                        }(this.refresh.bind(this), 20)
                    }
                    return e.prototype.addObserver = function(e) {
                        ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
                    }, e.prototype.removeObserver = function(e) {
                        var t = this.observers_,
                            n = t.indexOf(e);
                        ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
                    }, e.prototype.refresh = function() {
                        this.updateObservers_() && this.refresh()
                    }, e.prototype.updateObservers_ = function() {
                        var e = this.observers_.filter((function(e) {
                            return e.gatherActive(), e.hasActive()
                        }));
                        return e.forEach((function(e) {
                            return e.broadcastActive()
                        })), e.length > 0
                    }, e.prototype.connect_ = function() {
                        i && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), l ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                    }, e.prototype.disconnect_ = function() {
                        i && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                    }, e.prototype.onTransitionEnd_ = function(e) {
                        var t = e.propertyName,
                            n = void 0 === t ? "" : t;
                        s.some((function(e) {
                            return !!~n.indexOf(e)
                        })) && this.refresh()
                    }, e.getInstance = function() {
                        return this.instance_ || (this.instance_ = new e), this.instance_
                    }, e.instance_ = null, e
                }(),
                c = function(e, t) {
                    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                        var i = r[n];
                        Object.defineProperty(e, i, {
                            value: t[i],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return e
                },
                d = function(e) {
                    return e && e.ownerDocument && e.ownerDocument.defaultView || a
                },
                h = _(0, 0, 0, 0);

            function p(e) {
                return parseFloat(e) || 0
            }

            function m(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                return t.reduce((function(t, n) {
                    return t + p(e["border-" + n + "-width"])
                }), 0)
            }

            function v(e) {
                var t = e.clientWidth,
                    n = e.clientHeight;
                if (!t && !n) return h;
                var r = d(e).getComputedStyle(e),
                    i = function(e) {
                        for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                            var i = r[n],
                                a = e["padding-" + i];
                            t[i] = p(a)
                        }
                        return t
                    }(r),
                    a = i.left + i.right,
                    o = i.top + i.bottom,
                    s = p(r.width),
                    l = p(r.height);
                if ("border-box" === r.boxSizing && (Math.round(s + a) !== t && (s -= m(r, "left", "right") + a), Math.round(l + o) !== n && (l -= m(r, "top", "bottom") + o)), ! function(e) {
                        return e === d(e).document.documentElement
                    }(e)) {
                    var u = Math.round(s + a) - t,
                        c = Math.round(l + o) - n;
                    1 !== Math.abs(u) && (s -= u), 1 !== Math.abs(c) && (l -= c)
                }
                return _(i.left, i.top, s, l)
            }
            var g = "undefined" != typeof SVGGraphicsElement ? function(e) {
                return e instanceof d(e).SVGGraphicsElement
            } : function(e) {
                return e instanceof d(e).SVGElement && "function" == typeof e.getBBox
            };

            function f(e) {
                return i ? g(e) ? function(e) {
                    var t = e.getBBox();
                    return _(0, 0, t.width, t.height)
                }(e) : v(e) : h
            }

            function _(e, t, n, r) {
                return {
                    x: e,
                    y: t,
                    width: n,
                    height: r
                }
            }
            var y = function() {
                    function e(e) {
                        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = _(0, 0, 0, 0), this.target = e
                    }
                    return e.prototype.isActive = function() {
                        var e = f(this.target);
                        return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                    }, e.prototype.broadcastRect = function() {
                        var e = this.contentRect_;
                        return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
                    }, e
                }(),
                S = function(e, t) {
                    var n, r, i, a, o, s, l, u = (r = (n = t).x, i = n.y, a = n.width, o = n.height, s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, l = Object.create(s.prototype), c(l, {
                        x: r,
                        y: i,
                        width: a,
                        height: o,
                        top: i,
                        right: r + a,
                        bottom: o + i,
                        left: r
                    }), l);
                    c(this, {
                        target: e,
                        contentRect: u
                    })
                },
                E = function() {
                    function e(e, t, n) {
                        if (this.activeObservations_ = [], this.observations_ = new r, "function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
                        this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
                    }
                    return e.prototype.observe = function(e) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(e instanceof d(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var t = this.observations_;
                            t.has(e) || (t.set(e, new y(e)), this.controller_.addObserver(this), this.controller_.refresh())
                        }
                    }, e.prototype.unobserve = function(e) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(e instanceof d(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var t = this.observations_;
                            t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
                        }
                    }, e.prototype.disconnect = function() {
                        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                    }, e.prototype.gatherActive = function() {
                        var e = this;
                        this.clearActive(), this.observations_.forEach((function(t) {
                            t.isActive() && e.activeObservations_.push(t)
                        }))
                    }, e.prototype.broadcastActive = function() {
                        if (this.hasActive()) {
                            var e = this.callbackCtx_,
                                t = this.activeObservations_.map((function(e) {
                                    return new S(e.target, e.broadcastRect())
                                }));
                            this.callback_.call(e, t, e), this.clearActive()
                        }
                    }, e.prototype.clearActive = function() {
                        this.activeObservations_.splice(0)
                    }, e.prototype.hasActive = function() {
                        return this.activeObservations_.length > 0
                    }, e
                }(),
                b = "undefined" != typeof WeakMap ? new WeakMap : new r,
                T = function e(t) {
                    if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    var n = u.getInstance(),
                        r = new E(t, n, this);
                    b.set(this, r)
                };
            ["observe", "unobserve", "disconnect"].forEach((function(e) {
                T.prototype[e] = function() {
                    var t;
                    return (t = b.get(this))[e].apply(t, arguments)
                }
            }));
            const I = void 0 !== a.ResizeObserver ? a.ResizeObserver : T
        },
        259142: function(e, t) {
            var n, r, i;
            r = [t], n = function(e) {
                "use strict";

                function t(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }
                Object.defineProperty(e, "__esModule", {
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
                var i = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
                    a = [],
                    o = !1,
                    s = -1,
                    l = void 0,
                    u = void 0,
                    c = function(e) {
                        return a.some((function(t) {
                            return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e))
                        }))
                    },
                    d = function(e) {
                        var t = e || window.event;
                        return !!c(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1)
                    },
                    h = function() {
                        setTimeout((function() {
                            void 0 !== u && (document.body.style.paddingRight = u, u = void 0), void 0 !== l && (document.body.style.overflow = l, l = void 0)
                        }))
                    };
                e.disableBodyScroll = function(e, r) {
                    if (i) {
                        if (!e) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
                        if (e && !a.some((function(t) {
                                return t.targetElement === e
                            }))) {
                            var h = {
                                targetElement: e,
                                options: r || {}
                            };
                            a = [].concat(t(a), [h]), e.ontouchstart = function(e) {
                                1 === e.targetTouches.length && (s = e.targetTouches[0].clientY)
                            }, e.ontouchmove = function(t) {
                                var n, r, i, a;
                                1 === t.targetTouches.length && (r = e, a = (n = t).targetTouches[0].clientY - s, !c(n.target) && (r && 0 === r.scrollTop && 0 < a || (i = r) && i.scrollHeight - i.scrollTop <= i.clientHeight && a < 0 ? d(n) : n.stopPropagation()))
                            }, o || (document.addEventListener("touchmove", d, n ? {
                                passive: !1
                            } : void 0), o = !0)
                        }
                    } else {
                        m = r, setTimeout((function() {
                            if (void 0 === u) {
                                var e = !!m && !0 === m.reserveScrollBarGap,
                                    t = window.innerWidth - document.documentElement.clientWidth;
                                e && 0 < t && (u = document.body.style.paddingRight, document.body.style.paddingRight = t + "px")
                            }
                            void 0 === l && (l = document.body.style.overflow, document.body.style.overflow = "hidden")
                        }));
                        var p = {
                            targetElement: e,
                            options: r || {}
                        };
                        a = [].concat(t(a), [p])
                    }
                    var m
                }, e.clearAllBodyScrollLocks = function() {
                    i ? (a.forEach((function(e) {
                        e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null
                    })), o && (document.removeEventListener("touchmove", d, n ? {
                        passive: !1
                    } : void 0), o = !1), a = [], s = -1) : (h(), a = [])
                }, e.enableBodyScroll = function(e) {
                    if (i) {
                        if (!e) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                        e.ontouchstart = null, e.ontouchmove = null, a = a.filter((function(t) {
                            return t.targetElement !== e
                        })), o && 0 === a.length && (document.removeEventListener("touchmove", d, n ? {
                            passive: !1
                        } : void 0), o = !1)
                    } else 1 === a.length && a[0].targetElement === e ? (h(), a = []) : a = a.filter((function(t) {
                        return t.targetElement !== e
                    }))
                }
            }, void 0 === (i = "function" == typeof n ? n.apply(t, r) : n) || (e.exports = i)
        },
        266783: e => {
            "use strict";
            var t = Object.prototype.hasOwnProperty;

            function n(e, t) {
                return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
            }
            e.exports = function(e, r) {
                if (n(e, r)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof r || null === r) return !1;
                var i = Object.keys(e),
                    a = Object.keys(r);
                if (i.length !== a.length) return !1;
                for (var o = 0; o < i.length; o++)
                    if (!t.call(r, i[o]) || !n(e[i[o]], r[i[o]])) return !1;
                return !0
            }
        },
        302399: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => s
            });
            var r = n(601141);
            const i = function(e) {
                return this.__data__.set(e, "__lodash_hash_undefined__"), this
            };
            const a = function(e) {
                return this.__data__.has(e)
            };

            function o(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.__data__ = new r.default; ++t < n;) this.add(e[t])
            }
            o.prototype.add = o.prototype.push = i, o.prototype.has = a;
            const s = o
        },
        517487: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => L
            });
            var r = n(396335),
                i = n(302399);
            const a = function(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                    if (t(e[n], n, e)) return !0;
                return !1
            };
            var o = n(817651);
            const s = function(e, t, n, r, s, l) {
                var u = 1 & n,
                    c = e.length,
                    d = t.length;
                if (c != d && !(u && d > c)) return !1;
                var h = l.get(e);
                if (h && l.get(t)) return h == t;
                var p = -1,
                    m = !0,
                    v = 2 & n ? new i.default : void 0;
                for (l.set(e, t), l.set(t, e); ++p < c;) {
                    var g = e[p],
                        f = t[p];
                    if (r) var _ = u ? r(f, g, p, t, e, l) : r(g, f, p, e, t, l);
                    if (void 0 !== _) {
                        if (_) continue;
                        m = !1;
                        break
                    }
                    if (v) {
                        if (!a(t, (function(e, t) {
                                if (!(0, o.default)(v, t) && (g === e || s(g, e, n, r, l))) return v.push(t)
                            }))) {
                            m = !1;
                            break
                        }
                    } else if (g !== f && !s(g, f, n, r, l)) {
                        m = !1;
                        break
                    }
                }
                return l.delete(e), l.delete(t), m
            };
            var l = n(503060),
                u = n(735246),
                c = n(872575);
            const d = function(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach((function(e, r) {
                    n[++t] = [r, e]
                })), n
            };
            var h = n(870729),
                p = l.default ? l.default.prototype : void 0,
                m = p ? p.valueOf : void 0;
            const v = function(e, t, n, r, i, a, o) {
                switch (n) {
                    case "[object DataView]":
                        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                        e = e.buffer, t = t.buffer;
                    case "[object ArrayBuffer]":
                        return !(e.byteLength != t.byteLength || !a(new u.default(e), new u.default(t)));
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                        return (0, c.default)(+e, +t);
                    case "[object Error]":
                        return e.name == t.name && e.message == t.message;
                    case "[object RegExp]":
                    case "[object String]":
                        return e == t + "";
                    case "[object Map]":
                        var l = d;
                    case "[object Set]":
                        var p = 1 & r;
                        if (l || (l = h.default), e.size != t.size && !p) return !1;
                        var v = o.get(e);
                        if (v) return v == t;
                        r |= 2, o.set(e, t);
                        var g = s(l(e), l(t), r, i, a, o);
                        return o.delete(e), g;
                    case "[object Symbol]":
                        if (m) return m.call(e) == m.call(t)
                }
                return !1
            };
            var g = n(885747),
                f = Object.prototype.hasOwnProperty;
            const _ = function(e, t, n, r, i, a) {
                var o = 1 & n,
                    s = (0, g.default)(e),
                    l = s.length;
                if (l != (0, g.default)(t).length && !o) return !1;
                for (var u = l; u--;) {
                    var c = s[u];
                    if (!(o ? c in t : f.call(t, c))) return !1
                }
                var d = a.get(e);
                if (d && a.get(t)) return d == t;
                var h = !0;
                a.set(e, t), a.set(t, e);
                for (var p = o; ++u < l;) {
                    var m = e[c = s[u]],
                        v = t[c];
                    if (r) var _ = o ? r(v, m, c, t, e, a) : r(m, v, c, e, t, a);
                    if (!(void 0 === _ ? m === v || i(m, v, n, r, a) : _)) {
                        h = !1;
                        break
                    }
                    p || (p = "constructor" == c)
                }
                if (h && !p) {
                    var y = e.constructor,
                        S = t.constructor;
                    y == S || !("constructor" in e) || !("constructor" in t) || "function" == typeof y && y instanceof y && "function" == typeof S && S instanceof S || (h = !1)
                }
                return a.delete(e), a.delete(t), h
            };
            var y = n(903427),
                S = n(854814),
                E = n(925247),
                b = n(54744),
                T = "[object Arguments]",
                I = "[object Array]",
                k = "[object Object]",
                C = Object.prototype.hasOwnProperty;
            const N = function(e, t, n, i, a, o) {
                var l = (0, S.default)(e),
                    u = (0, S.default)(t),
                    c = l ? I : (0, y.default)(e),
                    d = u ? I : (0, y.default)(t),
                    h = (c = c == T ? k : c) == k,
                    p = (d = d == T ? k : d) == k,
                    m = c == d;
                if (m && (0, E.default)(e)) {
                    if (!(0, E.default)(t)) return !1;
                    l = !0, h = !1
                }
                if (m && !h) return o || (o = new r.default), l || (0, b.default)(e) ? s(e, t, n, i, a, o) : v(e, t, c, n, i, a, o);
                if (!(1 & n)) {
                    var g = h && C.call(e, "__wrapped__"),
                        f = p && C.call(t, "__wrapped__");
                    if (g || f) {
                        var N = g ? e.value() : e,
                            w = f ? t.value() : t;
                        return o || (o = new r.default), a(N, w, n, i, o)
                    }
                }
                return !!m && (o || (o = new r.default), _(e, t, n, i, a, o))
            };
            var w = n(383527);
            const L = function e(t, n, r, i, a) {
                return t === n || (null == t || null == n || !(0, w.default)(t) && !(0, w.default)(n) ? t != t && n != n : N(t, n, r, i, e, a))
            }
        },
        817651: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => r
            });
            const r = function(e, t) {
                return e.has(t)
            }
        },
        870729: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => r
            });
            const r = function(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach((function(e) {
                    n[++t] = e
                })), n
            }
        },
        316230: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => i
            });
            var r = n(517487);
            const i = function(e, t) {
                return (0, r.default)(e, t)
            }
        },
        906189: e => {
            e.exports = {
                "nav-button": "nav-button-iiT1LQPc",
                link: "link-iiT1LQPc",
                background: "background-iiT1LQPc",
                icon: "icon-iiT1LQPc",
                "flip-icon": "flip-icon-iiT1LQPc",
                "size-large": "size-large-iiT1LQPc",
                "preserve-paddings": "preserve-paddings-iiT1LQPc",
                "size-medium": "size-medium-iiT1LQPc",
                "size-small": "size-small-iiT1LQPc",
                "size-xsmall": "size-xsmall-iiT1LQPc",
                "size-xxsmall": "size-xxsmall-iiT1LQPc",
                "visually-hidden": "visually-hidden-iiT1LQPc"
            }
        },
        428146: e => {
            e.exports = {
                button: "button-OvB35Th_",
                content: "content-OvB35Th_",
                "icon-only": "icon-only-OvB35Th_",
                link: "link-OvB35Th_",
                "color-brand": "color-brand-OvB35Th_",
                "variant-primary": "variant-primary-OvB35Th_",
                "variant-secondary": "variant-secondary-OvB35Th_",
                "color-gray": "color-gray-OvB35Th_",
                "color-green": "color-green-OvB35Th_",
                "color-red": "color-red-OvB35Th_",
                "size-xsmall": "size-xsmall-OvB35Th_",
                "with-start-icon": "with-start-icon-OvB35Th_",
                "with-end-icon": "with-end-icon-OvB35Th_",
                "start-icon-wrap": "start-icon-wrap-OvB35Th_",
                "end-icon-wrap": "end-icon-wrap-OvB35Th_",
                "size-small": "size-small-OvB35Th_",
                "size-medium": "size-medium-OvB35Th_",
                "size-large": "size-large-OvB35Th_",
                "size-xlarge": "size-xlarge-OvB35Th_",
                animated: "animated-OvB35Th_",
                stretch: "stretch-OvB35Th_",
                grouped: "grouped-OvB35Th_",
                "adjust-position": "adjust-position-OvB35Th_",
                "first-row": "first-row-OvB35Th_",
                "first-col": "first-col-OvB35Th_",
                "no-corner-top-left": "no-corner-top-left-OvB35Th_",
                "no-corner-top-right": "no-corner-top-right-OvB35Th_",
                "no-corner-bottom-right": "no-corner-bottom-right-OvB35Th_",
                "no-corner-bottom-left": "no-corner-bottom-left-OvB35Th_"
            }
        },
        733319: e => {
            e.exports = {
                loader: "loader-PZ4hqS2H",
                static: "static-PZ4hqS2H",
                item: "item-PZ4hqS2H",
                "tv-button-loader": "tv-button-loader-PZ4hqS2H",
                medium: "medium-PZ4hqS2H",
                small: "small-PZ4hqS2H",
                black: "black-PZ4hqS2H",
                white: "white-PZ4hqS2H",
                gray: "gray-PZ4hqS2H",
                primary: "primary-PZ4hqS2H",
                "loader-initial": "loader-initial-PZ4hqS2H",
                "loader-appear": "loader-appear-PZ4hqS2H"
            }
        },
        286625: e => {
            e.exports = {
                "tv-spinner__container-rotate": "tv-spinner__container-rotate-OAzoNsnS"
            }
        },
        531428: e => {
            e.exports = {}
        },
        982730: e => {
            e.exports = {}
        },
        409790: e => {
            e.exports = {
                menuWrap: "menuWrap-biWYdsXC",
                isMeasuring: "isMeasuring-biWYdsXC",
                scrollWrap: "scrollWrap-biWYdsXC",
                momentumBased: "momentumBased-biWYdsXC",
                menuBox: "menuBox-biWYdsXC",
                isHidden: "isHidden-biWYdsXC"
            }
        },
        655498: e => {
            e.exports = {
                "tablet-small-breakpoint": "screen and (max-width: 430px)",
                item: "item-RhC5uhZw",
                hovered: "hovered-RhC5uhZw",
                isDisabled: "isDisabled-RhC5uhZw",
                isActive: "isActive-RhC5uhZw",
                shortcut: "shortcut-RhC5uhZw",
                toolbox: "toolbox-RhC5uhZw",
                withIcon: "withIcon-RhC5uhZw",
                icon: "icon-RhC5uhZw",
                labelRow: "labelRow-RhC5uhZw",
                label: "label-RhC5uhZw",
                showOnHover: "showOnHover-RhC5uhZw"
            }
        },
        844662: e => {
            e.exports = {
                container: "container-f2q4yHCG",
                content: "content-f2q4yHCG",
                arrowHolder: "arrowHolder-f2q4yHCG",
                "arrowHolder--below": "arrowHolder--below-f2q4yHCG",
                "arrowHolder--above": "arrowHolder--above-f2q4yHCG",
                "arrowHolder--before": "arrowHolder--before-f2q4yHCG",
                "arrowHolder--after": "arrowHolder--after-f2q4yHCG",
                "arrowHolder--above-fix": "arrowHolder--above-fix-f2q4yHCG",
                "arrowHolder--before-rtl-fix": "arrowHolder--before-rtl-fix-f2q4yHCG",
                "arrowHolder--after-ltr-fix": "arrowHolder--after-ltr-fix-f2q4yHCG",
                label: "label-f2q4yHCG",
                closeButton: "closeButton-f2q4yHCG"
            }
        },
        173777: (e, t, n) => {
            "use strict";
            n.d(t, {
                SEPARATOR_PREFIX: () => r,
                isSeparatorItem: () => i
            });
            const r = "###";

            function i(e) {
                return e.startsWith(r)
            }
        },
        897782: (e, t, n) => {
            "use strict";
            n.d(t, {
                NavButton: () => u
            });
            var r = n(50959),
                i = n(497754),
                a = n(83436),
                o = n(906189);

            function s(e) {
                const {
                    size: t = "large",
                    preservePaddings: n,
                    isLink: r,
                    flipIconOnRtl: a,
                    className: s
                } = e;
                return i(o["nav-button"], o[`size-${t}`], n && o["preserve-paddings"], a && o["flip-icon"], r && o.link, s)
            }

            function l(e) {
                const {
                    children: t,
                    icon: n
                } = e;
                return r.createElement(r.Fragment, null, r.createElement("span", {
                    className: o.background
                }), r.createElement(a.Icon, {
                    icon: n,
                    className: o.icon,
                    "aria-hidden": !0
                }), t && r.createElement("span", {
                    className: o["visually-hidden"]
                }, t))
            }
            const u = (0, r.forwardRef)(((e, t) => {
                const {
                    icon: n,
                    type: i = "button",
                    preservePaddings: a,
                    flipIconOnRtl: o,
                    size: u,
                    "aria-label": c,
                    ...d
                } = e;
                return r.createElement("button", { ...d,
                    className: s({ ...e,
                        children: c
                    }),
                    ref: t,
                    type: i
                }, r.createElement(l, {
                    icon: n
                }, c))
            }));
            u.displayName = "NavButton";
            var c = n(14388),
                d = n(551080);
            (0, r.forwardRef)(((e, t) => {
                const {
                    icon: n,
                    renderComponent: i,
                    "aria-label": a,
                    ...o
                } = e, u = null != i ? i : c.CustomComponentDefaultLink;
                return r.createElement(u, { ...o,
                    className: s({ ...e,
                        children: a,
                        isLink: !0
                    }),
                    reference: (0, d.isomorphicRef)(t)
                }, r.createElement(l, {
                    icon: n
                }, a))
            })).displayName = "NavAnchorButton"
        },
        915812: (e, t, n) => {
            "use strict";
            n.d(t, {
                SquareButton: () => r.SquareButton,
                SquareAnchorButton: () => i.SquareAnchorButton
            });
            n(221191);
            var r = n(422175),
                i = n(951144)
        },
        951144: (e, t, n) => {
            "use strict";
            n.d(t, {
                SquareAnchorButton: () => l
            });
            var r = n(50959),
                i = n(301792),
                a = n(8626),
                o = n(221191);

            function s(e) {
                const {
                    className: t,
                    color: n,
                    variant: r,
                    size: i,
                    stretch: o,
                    animated: s,
                    icon: l,
                    iconOnly: u,
                    startIcon: c,
                    endIcon: d,
                    ...h
                } = e;
                return { ...h,
                    ...(0, a.filterDataProps)(e),
                    ...(0, a.filterAriaProps)(e)
                }
            }

            function l(e) {
                const {
                    reference: t
                } = e, {
                    isGrouped: n,
                    cellState: a,
                    disablePositionAdjustment: l
                } = (0, r.useContext)(i.ControlGroupContext), u = (0, o.getSquareButtonClasses)({ ...e,
                    isGrouped: n,
                    cellState: a,
                    disablePositionAdjustment: l,
                    isAnchor: !0
                });
                return r.createElement("a", { ...s(e),
                    className: u,
                    ref: t
                }, r.createElement(o.SquareButtonContent, { ...e
                }))
            }
        },
        221191: (e, t, n) => {
            "use strict";
            n.d(t, {
                getSquareButtonClasses: () => u,
                SquareButtonContent: () => c
            });
            var r = n(50959),
                i = n(497754),
                a = n(307754),
                o = n(83436),
                s = n(428146),
                l = n.n(s);

            function u(e) {
                const {
                    color: t = "brand",
                    size: n = "medium",
                    variant: r = "primary",
                    stretch: o = !1,
                    icon: s,
                    startIcon: u,
                    endIcon: c,
                    iconOnly: d = !1,
                    className: h,
                    isGrouped: p,
                    cellState: m,
                    disablePositionAdjustment: v = !1,
                    isAnchor: g = !1
                } = e, f = function(e) {
                    let t = "";
                    return 0 !== e && (1 & e && (t = i(t, l()["no-corner-top-left"])), 2 & e && (t = i(t, l()["no-corner-top-right"])), 4 & e && (t = i(t, l()["no-corner-bottom-right"])), 8 & e && (t = i(t, l()["no-corner-bottom-left"]))), t
                }((0, a.getGroupCellRemoveRoundBorders)(m));
                return i(h, l().button, l()[`size-${n}`], l()[`color-${t}`], l()[`variant-${r}`], o && l().stretch, (s || u) && l()["with-start-icon"], c && l()["with-end-icon"], d && l()["icon-only"], f, p && l().grouped, p && !v && l()["adjust-position"], p && m.isTop && l()["first-row"], p && m.isLeft && l()["first-col"], g && l().link)
            }

            function c(e) {
                const {
                    startIcon: t,
                    icon: n,
                    iconOnly: i,
                    children: a,
                    endIcon: s
                } = e, u = null != t ? t : n;
                return r.createElement(r.Fragment, null, u && r.createElement(o.Icon, {
                    icon: u,
                    className: l()["start-icon-wrap"]
                }), a && r.createElement("span", {
                    className: l().content
                }, a), s && !i && r.createElement(o.Icon, {
                    icon: s,
                    className: l()["end-icon-wrap"]
                }))
            }
        },
        422175: (e, t, n) => {
            "use strict";
            n.d(t, {
                SquareButton: () => l
            });
            var r = n(50959),
                i = n(301792),
                a = n(8626),
                o = n(221191);

            function s(e) {
                const {
                    className: t,
                    color: n,
                    variant: r,
                    size: i,
                    stretch: o,
                    animated: s,
                    icon: l,
                    iconOnly: u,
                    startIcon: c,
                    endIcon: d,
                    ...h
                } = e;
                return { ...h,
                    ...(0, a.filterDataProps)(e),
                    ...(0, a.filterAriaProps)(e)
                }
            }

            function l(e) {
                const {
                    reference: t,
                    ...n
                } = e, {
                    isGrouped: a,
                    cellState: l,
                    disablePositionAdjustment: u
                } = (0, r.useContext)(i.ControlGroupContext), c = (0, o.getSquareButtonClasses)({ ...n,
                    isGrouped: a,
                    cellState: l,
                    disablePositionAdjustment: u
                });
                return r.createElement("button", { ...s(n),
                    className: c,
                    ref: t
                }, r.createElement(o.SquareButtonContent, { ...n
                }))
            }
        },
        301792: (e, t, n) => {
            "use strict";
            n.d(t, {
                ControlGroupContext: () => r
            });
            const r = n(50959).createContext({
                isGrouped: !1,
                cellState: {
                    isTop: !0,
                    isRight: !0,
                    isBottom: !0,
                    isLeft: !0
                }
            })
        },
        307754: (e, t, n) => {
            "use strict";

            function r(e) {
                let t = 0;
                return e.isTop && e.isLeft || (t += 1), e.isTop && e.isRight || (t += 2), e.isBottom && e.isLeft || (t += 8), e.isBottom && e.isRight || (t += 4), t
            }
            n.d(t, {
                getGroupCellRemoveRoundBorders: () => r
            })
        },
        834995: (e, t, n) => {
            "use strict";

            function r(e) {
                const {
                    reference: t,
                    ...n
                } = e;
                return { ...n,
                    ref: t
                }
            }
            n.d(t, {
                renameRef: () => r
            })
        },
        14388: (e, t, n) => {
            "use strict";
            n.d(t, {
                CustomComponentDefaultLink: () => a
            });
            var r = n(50959),
                i = n(834995);

            function a(e) {
                return r.createElement("a", { ...(0, i.renameRef)(e)
                })
            }
            r.PureComponent
        },
        267521: (e, t, n) => {
            "use strict";
            n.d(t, {
                useFunctionalRefObject: () => a
            });
            var r = n(50959),
                i = n(774218);

            function a(e) {
                const t = (0, r.useMemo)((() => function(e) {
                        const t = n => {
                            e(n), t.current = n
                        };
                        return t.current = null, t
                    }((e => {
                        s.current(e)
                    }))), []),
                    n = (0, r.useRef)(null),
                    a = t => {
                        if (null === t) return o(n.current, t), void(n.current = null);
                        n.current !== e && (n.current = e, o(n.current, t))
                    },
                    s = (0, r.useRef)(a);
                return s.current = a, (0, i.useIsomorphicLayoutEffect)((() => {
                    if (null !== t.current) return s.current(t.current), () => s.current(null)
                }), [e]), t
            }

            function o(e, t) {
                null !== e && ("function" == typeof e ? e(t) : e.current = t)
            }
        },
        774218: (e, t, n) => {
            "use strict";
            n.d(t, {
                useIsomorphicLayoutEffect: () => i
            });
            var r = n(50959);

            function i(e, t) {
                ("undefined" == typeof window ? r.useEffect : r.useLayoutEffect)(e, t)
            }
        },
        444530: (e, t, n) => {
            "use strict";
            n.d(t, {
                useResizeObserver: () => s
            });
            var r = n(50959),
                i = n(159255),
                a = n(774218),
                o = n(267521);

            function s(e, t = []) {
                const {
                    callback: n,
                    ref: s = null
                } = function(e) {
                    return "function" == typeof e ? {
                        callback: e
                    } : e
                }(e), l = (0, r.useRef)(null), u = (0, r.useRef)(n);
                u.current = n;
                const c = (0, o.useFunctionalRefObject)(s),
                    d = (0, r.useCallback)((e => {
                        c(e), null !== l.current && (l.current.disconnect(), null !== e && l.current.observe(e))
                    }), [c, l]);
                return (0, a.useIsomorphicLayoutEffect)((() => (l.current = new i.default(((e, t) => {
                    u.current(e, t)
                })), c.current && d(c.current), () => {
                    var e;
                    null === (e = l.current) || void 0 === e || e.disconnect()
                })), [c, ...t]), d
            }
        },
        612247: (e, t, n) => {
            "use strict";
            n.d(t, {
                Loader: () => u
            });
            var r, i = n(50959),
                a = n(497754),
                o = n(745269),
                s = n(733319),
                l = n.n(s);
            ! function(e) {
                e[e.Initial = 0] = "Initial", e[e.Appear = 1] = "Appear", e[e.Active = 2] = "Active"
            }(r || (r = {}));
            class u extends i.PureComponent {
                constructor(e) {
                    super(e),
                        this._stateChangeTimeout = null, this.state = {
                            state: r.Initial
                        }
                }
                render() {
                    const {
                        className: e,
                        color: t = "black",
                        size: n = "medium",
                        staticPosition: r
                    } = this.props, o = a(l().item, l()[t], l()[n]);
                    return i.createElement("span", {
                        className: a(l().loader, r && l().static, this._getStateClass(), e)
                    }, i.createElement("span", {
                        className: o
                    }), i.createElement("span", {
                        className: o
                    }), i.createElement("span", {
                        className: o
                    }))
                }
                componentDidMount() {
                    this.setState({
                        state: r.Appear
                    }), this._stateChangeTimeout = setTimeout((() => {
                        this.setState({
                            state: r.Active
                        })
                    }), 2 * o.dur)
                }
                componentWillUnmount() {
                    this._stateChangeTimeout && (clearTimeout(this._stateChangeTimeout), this._stateChangeTimeout = null)
                }
                _getStateClass() {
                    switch (this.state.state) {
                        case r.Initial:
                            return l()["loader-initial"];
                        case r.Appear:
                            return l()["loader-appear"];
                        default:
                            return ""
                    }
                }
            }
        },
        8626: (e, t, n) => {
            "use strict";

            function r(e) {
                return a(e, o)
            }

            function i(e) {
                return a(e, s)
            }

            function a(e, t) {
                const n = Object.entries(e).filter(t),
                    r = {};
                for (const [e, t] of n) r[e] = t;
                return r
            }

            function o(e) {
                const [t, n] = e;
                return 0 === t.indexOf("data-") && "string" == typeof n
            }

            function s(e) {
                return 0 === e[0].indexOf("aria-")
            }
            n.d(t, {
                filterDataProps: () => r,
                filterAriaProps: () => i,
                filterProps: () => a,
                isDataAttribute: () => o,
                isAriaAttribute: () => s
            })
        },
        551080: (e, t, n) => {
            "use strict";

            function r(e) {
                return t => {
                    e.forEach((e => {
                        "function" == typeof e ? e(t) : null != e && (e.current = t)
                    }))
                }
            }

            function i(e) {
                return r([e])
            }
            n.d(t, {
                mergeRefs: () => r,
                isomorphicRef: () => i
            })
        },
        607436: (e, t, n) => {
            "use strict";
            n.d(t, {
                DEFAULT_SIZE: () => r,
                spinnerSizeMap: () => i
            });
            const r = "large",
                i = {
                    mini: "xsmall",
                    xsmall: "xsmall",
                    small: "small",
                    medium: "medium",
                    large: "large"
                }
        },
        531327: (e, t, n) => {
            "use strict";

            function r(e) {
                return i() ? 0 : a() ? 46 : Math.min(Math.max(e, 46), 450)
            }
            n.d(t, {
                getWidgetBarPadding: () => r,
                isWidgetBarFullscreen: () => i
            });
            const i = () => !window.matchMedia("screen and (min-width: 768px)").matches,
                a = () => !window.matchMedia("screen and (min-width: 1280px)").matches
        },
        314308: (e, t, n) => {
            "use strict";

            function r(e, t, n, r, i) {
                function a(i) {
                    if (e > i.timeStamp) return;
                    const a = i.target;
                    void 0 !== n && null !== t && null !== a && a.ownerDocument === r && (t.contains(a) || n(i))
                }
                return i.click && r.addEventListener("click", a, !1), i.mouseDown && r.addEventListener("mousedown", a, !1), i.touchEnd && r.addEventListener("touchend", a, !1), i.touchStart && r.addEventListener("touchstart", a, !1), () => {
                    r.removeEventListener("click", a, !1), r.removeEventListener("mousedown", a, !1), r.removeEventListener("touchend", a, !1), r.removeEventListener("touchstart", a, !1)
                }
            }
            n.d(t, {
                addOutsideEventListener: () => r
            })
        },
        709404: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                getExchanges: () => i
            });
            var r = n(486759);

            function i() {
                return r
            }
        },
        515312: (e, t, n) => {
            "use strict";
            n.d(t, {
                isNativeUIInteraction: () => r.isNativeUIInteraction,
                isTextEditingField: () => r.isTextEditingField
            });
            var r = n(607423)
        },
        675128: (e, t, n) => {
            "use strict";

            function r(e) {
                let t = null;
                return () => (null === t && (t = e()), t)
            }
            n.d(t, {
                lazyValue: () => r
            })
        },
        76107: (e, t, n) => {
            "use strict";
            n.d(t, {
                getScrollbarWidth: () => r,
                matchMediaMinMax: () => i,
                getContentWidth: () => a,
                setStyle: () => o,
                getCSSProperty: () => s,
                getCSSPropertyNumericValue: () => l
            });
            const r = (() => {
                let e;
                return () => {
                    var t;
                    if (void 0 === e) {
                        const n = document.createElement("div"),
                            r = n.style;
                        r.visibility = "hidden", r.width = "100px", r.msOverflowStyle = "scrollbar", document.body.appendChild(n);
                        const i = n.offsetWidth;
                        n.style.overflow = "scroll";
                        const a = document.createElement("div");
                        a.style.width = "100%", n.appendChild(a);
                        const o = a.offsetWidth;
                        null === (t = n.parentNode) || void 0 === t || t.removeChild(n), e = i - o
                    }
                    return e
                }
            })();

            function i(e, t) {
                return t === 1 / 0 ? window.matchMedia(`(min-width: ${e}px)`) : window.matchMedia(`(min-width: ${e}px) and (max-width: ${t}px)`)
            }

            function a(e) {
                return l(e, "width") - l(e, "padding-left") - l(e, "padding-right")
            }

            function o(e, t, n) {
                null !== e && e.style.setProperty(t, n)
            }

            function s(e, t) {
                return getComputedStyle(e, null).getPropertyValue(t)
            }

            function l(e, t) {
                return parseInt(s(e, t))
            }
        },
        575658: (e, t, n) => {
            "use strict";
            n.d(t, {
                setFixedBodyState: () => s
            });
            var r = n(76107),
                i = n(531327);
            let a = 0,
                o = !1;

            function s(e) {
                const {
                    body: t
                } = document, n = t.querySelector(".widgetbar-wrap");
                if (e && 1 == ++a) {
                    const e = (0, r.getCSSProperty)(t, "overflow"),
                        i = (0, r.getCSSPropertyNumericValue)(t, "padding-right");
                    "hidden" !== e.toLowerCase() && t.scrollHeight > t.offsetHeight && ((0, r.setStyle)(n, "right", `${(0,r.getScrollbarWidth)()}px`), t.style.paddingRight = `${i+(0,r.getScrollbarWidth)()}px`, o = !0), t.classList.add("i-no-scroll")
                } else if (!e && a > 0 && 0 == --a && (t.classList.remove("i-no-scroll"), o)) {
                    (0, r.setStyle)(n, "right", "0px");
                    let e = 0;
                    e = n ? (0, i.getWidgetBarPadding)((0, r.getContentWidth)(n)) : 0, t.scrollHeight <= t.clientHeight && (e -= (0, r.getScrollbarWidth)()), t.style.paddingRight = (e < 0 ? 0 : e) + "px", o = !1
                }
            }
        },
        237037: (e, t, n) => {
            "use strict";

            function r(e, t = !1) {
                if (e && e.startsWith("exchange-")) return function(e, t = !1) {
                    const n = window.pro,
                        r = n.getProduct(e);
                    return !!n.isProductDefined(r) && (t ? !!r.idc_service_codes_delay : !!r.idc_service_codes)
                }(e, t);
                const n = (e || "").toLowerCase();
                return window.pro.getIDCExchanges(t).includes(n)
            }
            n.d(t, {
                isIDCExchange: () => r
            })
        },
        519073: (e, t, n) => {
            "use strict";

            function r(e, t) {
                return t.includes("crypto") || ["bitcoin", "crypto"].includes(e)
            }

            function i(e, t) {
                return "stock" === e && t.includes("right") || "right" === e
            }

            function a(e, t) {
                return "fund" === e && t.includes("etf") || "stock" === e && t.includes("fund") && t.includes("etf")
            }

            function o(e) {
                return "economic" === e
            }
            n.d(t, {
                hasCryptoTypespec: () => r,
                isRight: () => i,
                isEtf: () => a,
                isEconomicSymbol: () => o
            })
        },
        526225: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                syncUserData: () => c,
                syncUserConversionData: () => d
            });
            var r = n(272001),
                i = n(345848),
                a = n(890740),
                o = n(152198);
            const s = (0, r.getLogger)("User.Sync");

            function l(e) {
                return `${e}_${window.user&&window.user.username||""}`
            }

            function u(e, t, n) {
                n !== window.user.pro_plan && (window.user.pro_plan = n, window.user.is_pro = Boolean(n), (0, i.trackEvent)("Sync User Data", "Different Pro Plan", l(e))), t !== window.is_authenticated && (window.is_authenticated = t, window.loginStateChange.fire(), (0, i.trackEvent)("Sync User Data", "Different Auth", l(e)))
            }
            async function c(e) {
                try {
                    u(e, !0, (await (0, o.getProPlanDetailsForUser)()).pro_plan)
                } catch (t) {
                    ! function(e, t) {
                        403 === t.status && ["not_authenticated", "login_required"].includes(t.type || "") ? u(e, !1, void 0) : s.logError(t.message)
                    }(e, t)
                }
            }
            async function d(e) {
                const t = await (0,
                        a.fetch)("/gopro/"),
                    n = await t.json();
                return u(e, n.is_authenticated, n.user.pro_plan), n
            }
        },
        909740: (e, t, n) => {
            "use strict";
            n.d(t, {
                setTheme: () => a,
                watchedTheme: () => i
            });
            var r = n(988411);
            const i = new(n.n(r)());

            function a(e) {
                i.setValue(e)
            }
            i.subscribe((e => {
                ! function(e, t = window) {
                    const n = "theme-" + e,
                        r = t.document.documentElement.classList;
                    for (const e of Array.from(r)) e.startsWith("theme-") && e !== n && r.remove(e);
                    r.add(n)
                }(e, window)
            }))
        },
        822714: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                convertToCustomSymbolList: () => o,
                convertToMarkedSymbolList: () => s,
                convertToSymbolList: () => l,
                getCustomWatchLists: () => u,
                getAllWatchLists: () => c,
                renameWatchList: () => d,
                removeWatchList: () => h,
                addSymbols: () => p,
                removeSymbols: () => m,
                replaceSymbols: () => v,
                createWatchList: () => g,
                putWatchList: () => f,
                setActive: () => _,
                getActive: () => y,
                changeDescription: () => S
            });
            var r = n(650151),
                i = n(890740),
                a = n(658583);

            function o(e) {
                var t;
                return {
                    type: "custom",
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    symbols: null !== (t = e.symbols) && void 0 !== t ? t : [],
                    shared: e.shared
                }
            }

            function s(e) {
                var t, n;
                const i = (0, r.ensureNotNull)(e.color);
                return {
                    type: "colored",
                    id: i,
                    color: i,
                    name: null !== (t = e.name) && void 0 !== t ? t : null,
                    description: e.description,
                    symbols: null !== (n = e.symbols) && void 0 !== n ? n : [],
                    shared: e.shared
                }
            }

            function l(e) {
                return "custom" === e.type ? o(e) : s(e)
            }

            function u() {
                return (0, i.fetch)("/api/v1/symbols_list/custom/").then(a.handleJSON).then((e => e.map(o)))
            }

            function c() {
                return (0, i.fetch)("/api/v1/symbols_list/all/").then(a.handleJSON).then((e => e.map(l)))
            }

            function d(e, t) {
                return (0, i.fetch)(`/api/v1/symbols_list/custom/${e.id}/rename/`, {
                    method: "POST",
                    body: JSON.stringify({
                        name: t
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(a.handleJSON)
            }

            function h(e) {
                return (0, i.fetch)(`/api/v1/symbols_list/custom/${e.id}/`, {
                    method: "DELETE"
                }).then(a.handleJSON)
            }

            function p(e, t) {
                return (0, i.fetch)(`/api/v1/symbols_list/custom/${e.id}/append/`, {
                    method: "POST",
                    body: JSON.stringify(t),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(a.handleJSON)
            }

            function m(e, t) {
                return (0, i.fetch)(`/api/v1/symbols_list/custom/${e.id}/remove/`, {
                    method: "POST",
                    body: JSON.stringify(t),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(a.handleJSON)
            }

            function v(e, t) {
                return (0, i.fetch)(`/api/v1/symbols_list/custom/${e.id}/replace/?unsafe=true`, {
                    method: "POST",
                    body: JSON.stringify(t),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(a.handleJSON)
            }

            function g(e) {
                return (0, i.fetch)("/api/v1/symbols_list/custom/", {
                    method: "POST",
                    body: JSON.stringify({
                        name: e.name,
                        symbols: e.symbols
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(a.handleJSON).then(o)
            }

            function f(e) {
                throw new Error("not implemented")
            }

            function _(e) {
                return (0, i.fetch)(`/api/v1/symbols_list/active/${e}/`, {
                    method: "POST"
                })
            }
            async function y() {
                if ((0, a.isDesktopWatchlistAvailable)(window.TVD)) {
                    const e = await window.TVD.getActiveWatchlistId();
                    if (e) {
                        const t = await c(),
                            n = t.find((t => t.id === e));
                        return null != n ? n : t[0]
                    }
                }
                return (0, i.fetch)("/api/v1/symbols_list/active/", {
                    method: "GET"
                }).then(a.handleJSON).then(l)
            }

            function S(e, t) {
                return (0, i.fetch)(`/api/v1/symbols_list/custom/${e}/update_meta/`, {
                    method: "POST",
                    body: JSON.stringify({
                        description: t
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(a.handleJSON).then(l)
            }
        },
        658583: (e, t, n) => {
            "use strict";
            n.d(t, {
                handleJSON: () => i,
                isDesktopWatchlistAvailable: () => a
            });
            var r = n(638456);

            function i(e) {
                return e.ok ? 204 === e.status ? Promise.resolve() : e.json() : e.json().then((e => {
                    const t = new Error(e.detail || "not ok");
                    throw e.code && (t.name = `ApiError:${e.code}`), t
                }))
            }

            function a(e) {
                return Boolean((0, r.isDesktopApp)() && e && "getActiveWatchlistId" in e && "onActiveWatchlistIdChange" in e)
            }
        },
        72368: (e, t, n) => {
            "use strict";
            n.d(t, {
                isMobile: () => o,
                isPlatformMobile: () => s,
                canShowNewSymbolSearch: () => l,
                getCurrentLocaleInfoCountry: () => u
            });
            var r = n(314802),
                i = n(495046),
                a = n(638456);

            function o() {
                const e = window.matchMedia("(min-width: 602px) and (min-height: 445px)").matches;
                return a.CheckMobile.any() && !e
            }

            function s() {
                return !(0, r.isOnMobileAppPage)("any") && o()
            }

            function l() {
                return !i.enabled("widget") && !(0, r.isOnMobileAppPage)("any")
            }

            function u() {
                var e, t;
                return null === (t = null === (e = window.initData) || void 0 === e ? void 0 : e.currentLocaleInfo) || void 0 === t ? void 0 : t.flag.toUpperCase()
            }
        },
        332450: (e, t, n) => {
            "use strict";
            n.d(t, {
                CLOSE_POPUPS_AND_DIALOGS_COMMAND: () => r,
                breakpointList: () => i
            });
            const r = "CLOSE_POPUPS_AND_DIALOGS_COMMAND",
                i = [1920, 1440, 1280, 1024, 768, 480, 0]
        },
        261309: (e, t, n) => {
            "use strict";
            n.d(t, {
                SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE: () => r
            });
            const r = {
                id: "SymbolListRepositoryBackend"
            }
        },
        440498: (e, t, n) => {
            "use strict";
            n.d(t, {
                DELETED_SYMBOLS_LIST_ID: () => s,
                isDeletedSymbolsList: () => u,
                DeletedSymbolsList: () => c
            });
            var r = n(49437),
                i = n(738600);
            const a = "deleted_symbols_list",
                o = "is_deleted_symbols_list_active",
                s = "deleted_symbols_list_id",
                l = "There was an error during attempt to set local storage value",
                u = e => e === s;
            class c {
                constructor() {
                    this._logError = (e, t) => {
                        e instanceof Error ? i.logger.logError(e.message) : i.logger.logError(t)
                    }
                }
                createList(e) {
                    this._setList(e)
                }
                removeList() {
                    try {
                        r.TVLocalStorage.removeItem(a)
                    } catch (e) {
                        this._logError(e, "There was an error during local storage item removal")
                    }
                }
                addSymbols(e) {
                    const t = this.getList();
                    if (!t) return;
                    const n = new Set(t.symbols);
                    for (const t of e) n.add(t);
                    const r = Array.from(n);
                    r.length > 100 ? t.symbols = r.reverse().slice(0, 100).reverse() : t.symbols = r, this._setList(t)
                }
                removeSymbols(e) {
                    const t = this.getList();
                    if (!t) return;
                    const n = new Set(t.symbols);
                    for (const t of e) n.delete(t);
                    t.symbols = Array.from(n), this._setList(t)
                }
                replaceSymbols(e) {
                    const t = this.getList();
                    t && (t.symbols = e, this._setList(t))
                }
                getIsActive() {
                    try {
                        return "true" === r.TVLocalStorage.getItem(o)
                    } catch (e) {
                        return this._logError(e, l), !1
                    }
                }
                setIsActive(e) {
                    try {
                        r.TVLocalStorage.setItem(o, String(e))
                    } catch (e) {
                        this._logError(e, l)
                    }
                }
                getList() {
                    try {
                        const e = r.TVLocalStorage.getItem(a);
                        return e ? JSON.parse(e) : null
                    } catch (e) {
                        return this._logError(e, "There was an error during attempt to get local storage value"), null
                    }
                }
                _setList(e) {
                    try {
                        r.TVLocalStorage.setItem(a, JSON.stringify(e))
                    } catch (e) {
                        this._logError(e, l)
                    }
                }
            }
        },
        738600: (e, t, n) => {
            "use strict";
            n.d(t, {
                logger: () => r
            });
            const r = (0, n(272001).getLogger)("Platform.Model.Watchlist")
        },
        888778: (e, t, n) => {
            "use strict";
            n.d(t, {
                initSymbolListService: () => a
            });
            var r = n(564894);
            const i = {
                id: "SymbolListService"
            };

            function a() {
                return Promise.all([Promise.all([n.e(88230), n.e(18619), n.e(81910), n.e(86256), n.e(12275), n.e(33335), n.e(91901), n.e(83772), n.e(71140), n.e(54819), n.e(59302), n.e(36812), n.e(69273), n.e(75514), n.e(26300), n.e(29594), n.e(91622), n.e(745), n.e(86584), n.e(35883), n.e(19333), n.e(1026)]).then(n.bind(n, 63299)), Promise.all([n.e(88230), n.e(18619), n.e(81910), n.e(86256), n.e(12275), n.e(33335), n.e(91901), n.e(83772), n.e(71140), n.e(54819), n.e(59302), n.e(36812), n.e(69273), n.e(75514), n.e(26300), n.e(29594), n.e(91622), n.e(745), n.e(86584), n.e(35883), n.e(19333), n.e(1026)]).then(n.bind(n, 38506)), Promise.all([n.e(88230), n.e(18619), n.e(81910), n.e(86256), n.e(12275), n.e(33335), n.e(91901), n.e(83772), n.e(71140), n.e(54819), n.e(59302), n.e(36812), n.e(69273), n.e(75514), n.e(26300), n.e(29594), n.e(91622), n.e(745), n.e(86584), n.e(35883), n.e(19333), n.e(1026)]).then(n.bind(n, 850935)), Promise.all([n.e(88230), n.e(18619), n.e(81910), n.e(86256), n.e(12275), n.e(33335), n.e(91901), n.e(83772), n.e(71140), n.e(54819), n.e(59302), n.e(36812), n.e(69273), n.e(75514), n.e(26300), n.e(29594), n.e(91622), n.e(745), n.e(86584), n.e(35883), n.e(19333), n.e(1026)]).then(n.bind(n, 244692))]).then((([e, t, n, a]) => {
                    if ((0, r.hasService)(i)) return (0, r.service)(i);
                    const {
                        store: o,
                        runner: s
                    } = e.configureStore(), l = s.run(t.symbolListRepositorySaga);
                    return (0, r.registerService)(i, {
                        store: o,
                        runner: s,
                        actions: {
                            addSymbols: a.addSymbolsThunk,
                            initWidget: n.initWidget,
                            saveListAs: a.saveListAsThunk,
                            createNewWatchList: a.userCreateWatchlistThunk
                        },
                        task: l
                    }), (0, r.service)(i)
                }))
            }
        },
        826939: (e, t, n) => {
            "use strict";
            n.d(t, {
                WATCHLIST_WIDGET_ID: () => r
            });
            const r = "watchlist-widget"
        },
        889267: (e, t, n) => {
            "use strict";
            n.d(t, {
                symbolTokenEscapeRe: () => o,
                tokenize: () => u
            });
            var r = n(495046),
                i = n(173777);
            const a = r.enabled("charting_library_base") ? /(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF^])(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!:.&])*|'.+?'/ : /(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF])(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&])*|'.+?'/,
                o = /[+\-/*]/,
                s = {
                    number: /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
                    incompleteNumber: /\./,
                    symbol: a,
                    incompleteSymbol: /'[^']*/,
                    separatorPrefix: i.SEPARATOR_PREFIX,
                    openBrace: "(",
                    closeBrace: ")",
                    plus: "+",
                    minus: "-",
                    multiply: "*",
                    divide: "/",
                    power: "^",
                    whitespace: /[\0-\x20\s]+/,
                    unparsed: null
                },
                l = new RegExp(Object.values(s).map((e => {
                    return null === e ? "" : `(${"string"==typeof e?(t=e,t.replace(/[\^$()[\]{}*+?|\\]/g,"\\$&")):e.source})`;
                    var t
                })).filter((e => "" !== e)).concat(".").join("|"), "g");

            function u(e) {
                if (!e) return [];
                const t = [],
                    n = Object.keys(s);
                let r;
                for (; r = l.exec(e);) {
                    let e = !1;
                    for (let i = n.length; i--;)
                        if (r[i + 1]) {
                            n[i] && t.push({
                                value: r[i + 1],
                                type: n[i],
                                precedence: 0,
                                offset: r.index
                            }), e = !0;
                            break
                        }
                    e || t.push({
                        value: r[0],
                        type: "unparsed",
                        precedence: 0,
                        offset: r.index
                    })
                }
                return t
            }
        },
        892093: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                getLogoUrlsHook: () => s,
                removeUsdAndStableCoinFromCryptoPairLogos: () => l,
                resolveLogoUrls: () => o
            });
            var r = n(849204);
            const i = JSON.parse('["XTVCUSDT","XTVCDAI","XTVCBUSD","XTVCTUSD","XTVCUSDC","XTVCDGX","XTVCHUSD"]'),
                a = (0,
                    r.getLogoUrlResolver)();

            function o(e, t = r.LogoSize.Medium) {
                const n = e.logoid,
                    i = e["base-currency-logoid"],
                    o = e["currency-logoid"],
                    s = n && a.getSymbolLogoUrl(n, t);
                if (s) return [s];
                const l = i && a.getSymbolLogoUrl(i, t),
                    u = o && a.getSymbolLogoUrl(o, t);
                return l && u ? [l, u] : l ? [l] : u ? [u] : []
            }

            function s(e, t) {
                let n = !1;
                return (r, i, a) => {
                    const s = r["currency-logoid"] && r["base-currency-logoid"];
                    if (!n && (r.logoid || s || a)) {
                        n = !0;
                        const i = l(o({
                            logoid: r.logoid,
                            "base-currency-logoid": r["base-currency-logoid"],
                            "currency-logoid": r["currency-logoid"]
                        }, t));
                        e(i)
                    }
                }
            }

            function l(e) {
                return 2 !== e.length ? e : function(e) {
                    return e.some((e => u(e)))
                }(e) && ! function(e) {
                    return e.some((e => e.includes("country") && !u(e)))
                }(e) ? e.filter((e => !u(e))) : function(e) {
                    return e.some((e => d(e)))
                }(e) && function(e) {
                    return e.some((e => c(e)))
                }(e) ? e.filter((e => c(e))) : e
            }

            function u(e) {
                return e.includes("country/US")
            }

            function c(e) {
                return e.includes("crypto") && !d(e)
            }

            function d(e) {
                return i.some((t => e.includes(t)))
            }
        },
        46926: (e, t, n) => {
            "use strict";
            n.d(t, {
                CircleLogoPair: () => a
            });
            var r = n(50959),
                i = n(439378);
            n(531428);

            function a(e) {
                const {
                    primaryLogoUrl: t,
                    secondaryLogoUrl: n,
                    size: a,
                    className: s
                } = e;
                return r.createElement("span", {
                    className: (0, i.getBlockStyleClasses)(a, s),
                    title: e.title
                }, r.createElement(o, {
                    logoUrl: n,
                    size: a
                }), r.createElement(o, {
                    logoUrl: t,
                    size: a
                }))
            }

            function o(e) {
                const {
                    logoUrl: t,
                    size: n
                } = e, a = (0, i.getLogoStyleClasses)(n);
                return void 0 === t ? r.createElement("span", {
                    className: a
                }) : r.createElement("img", {
                    className: a,
                    src: t,
                    alt: ""
                })
            }
        },
        439378: (e, t, n) => {
            "use strict";
            n.d(t, {
                getBlockStyleClasses: () => i,
                getLogoStyleClasses: () => a
            });
            var r = n(497754);

            function i(e, t) {
                return r("tv-circle-logo-pair", `tv-circle-logo-pair--${e}`, t)
            }

            function a(e, t) {
                return r("tv-circle-logo-pair__logo", `tv-circle-logo-pair__logo--${e}`, !t && "tv-circle-logo-pair__logo-empty")
            }
        },
        495217: (e, t, n) => {
            "use strict";
            n.d(t, {
                CircleLogo: () => a
            });
            var r = n(50959),
                i = n(783036);
            n(982730);

            function a(e) {
                var t, n;
                const a = (0, i.getStyleClasses)(e.size, e.className),
                    o = null !== (n = null !== (t = e.alt) && void 0 !== t ? t : e.title) && void 0 !== n ? n : "";
                return (0, i.isCircleLogoWithUrlProps)(e) ? r.createElement("img", {
                    className: a,
                    src: e.logoUrl,
                    alt: o,
                    title: e.title,
                    loading: e.loading
                }) : r.createElement("span", {
                    className: a,
                    title: e.title
                }, e.placeholderLetter)
            }
        },
        783036: (e, t, n) => {
            "use strict";
            n.d(t, {
                getStyleClasses: () => i,
                isCircleLogoWithUrlProps: () => a
            });
            var r = n(497754);

            function i(e, t) {
                return r("tv-circle-logo", `tv-circle-logo--${e}`, t)
            }

            function a(e) {
                return "logoUrl" in e && void 0 !== e.logoUrl && 0 !== e.logoUrl.length
            }
        },
        951292: (e, t, n) => {
            "use strict";
            n.d(t, {
                useOutsideEvent: () => a
            });
            var r = n(50959),
                i = n(314308);

            function a(e) {
                const {
                    click: t,
                    mouseDown: n,
                    touchEnd: a,
                    touchStart: o,
                    handler: s,
                    reference: l,
                    ownerDocument: u = document
                } = e, c = (0, r.useRef)(null), d = (0, r.useRef)(new CustomEvent("timestamp").timeStamp);
                return (0, r.useLayoutEffect)((() => {
                    const e = {
                            click: t,
                            mouseDown: n,
                            touchEnd: a,
                            touchStart: o
                        },
                        r = l ? l.current : c.current;
                    return (0, i.addOutsideEventListener)(d.current, r, s, u, e)
                }), [t, n, a, o, s]), l || c
            }
        },
        18182: (e, t, n) => {
            "use strict";
            n.d(t, {
                MatchMedia: () => i
            });
            var r = n(50959);
            class i extends r.PureComponent {
                constructor(e) {
                    super(e),
                        this._handleChange = () => {
                            this.forceUpdate()
                        }, this.state = {
                            query: window.matchMedia(this.props.rule)
                        }
                }
                componentDidMount() {
                    this._subscribe(this.state.query)
                }
                componentDidUpdate(e, t) {
                    this.state.query !== t.query && (this._unsubscribe(t.query), this._subscribe(this.state.query))
                }
                componentWillUnmount() {
                    this._unsubscribe(this.state.query)
                }
                render() {
                    return this.props.children(this.state.query.matches)
                }
                static getDerivedStateFromProps(e, t) {
                    return e.rule !== t.query.media ? {
                        query: window.matchMedia(e.rule)
                    } : null
                }
                _subscribe(e) {
                    e.addListener(this._handleChange)
                }
                _unsubscribe(e) {
                    e.removeListener(this._handleChange)
                }
            }
        },
        377318: (e, t, n) => {
            "use strict";
            n.d(t, {
                MenuContext: () => r
            });
            const r = n(50959).createContext(null)
        },
        175071: (e, t, n) => {
            "use strict";
            n.d(t, {
                DEFAULT_MENU_THEME: () => g,
                Menu: () => f
            });
            var r = n(50959),
                i = n(497754),
                a = n.n(i),
                o = n(650151),
                s = n(43329),
                l = n(587080),
                u = n(670797),
                c = n(224743),
                d = n(829725),
                h = n(799786),
                p = n(787684),
                m = n(377318),
                v = n(409790);
            const g = v;
            class f extends r.PureComponent {
                constructor(e) {
                    super(e), this._containerRef = null, this._scrollWrapRef = null, this._raf = null, this._scrollRaf = null, this._scrollTimeout = void 0, this._manager = new d.OverlapManager, this._hotkeys = null, this._scroll = 0, this._handleContainerRef = e => {
                        this._containerRef = e, this.props.reference && ("function" == typeof this.props.reference && this.props.reference(e), "object" == typeof this.props.reference && (this.props.reference.current = e))
                    }, this._handleScrollWrapRef = e => {
                        this._scrollWrapRef = e, "function" == typeof this.props.scrollWrapReference && this.props.scrollWrapReference(e), "object" == typeof this.props.scrollWrapReference && (this.props.scrollWrapReference.current = e)
                    }, this._handleMeasure = ({
                        callback: e,
                        forceRecalcPosition: t
                    } = {}) => {
                        var n, r, i, a, l, u, c, d, h, p, m, v;
                        if (this.state.isMeasureValid && !t) return;
                        const {
                            position: g
                        } = this.props, f = (0, o.ensureNotNull)(this._containerRef);
                        let _ = f.getBoundingClientRect();
                        const y = document.documentElement.clientHeight,
                            S = document.documentElement.clientWidth,
                            E = null !== (n = this.props.closeOnScrollOutsideOffset) && void 0 !== n ? n : 0;
                        let b = y - 0 - E;
                        const T = _.height > b;
                        if (T) {
                            (0, o.ensureNotNull)(this._scrollWrapRef).style.overflowY = "scroll", _ = f.getBoundingClientRect()
                        }
                        const {
                            width: I,
                            height: k
                        } = _, C = "function" == typeof g ? g(I, k, y) : g, N = null !== (i = null === (r = null == C ? void 0 : C.indentFromWindow) || void 0 === r ? void 0 : r.left) && void 0 !== i ? i : 0, w = S - (null !== (a = C.overrideWidth) && void 0 !== a ? a : I) - (null !== (u = null === (l = null == C ? void 0 : C.indentFromWindow) || void 0 === l ? void 0 : l.right) && void 0 !== u ? u : 0), L = (0, s.clamp)(C.x, N, Math.max(N, w)), A = (null !== (d = null === (c = null == C ? void 0 : C.indentFromWindow) || void 0 === c ? void 0 : c.top) && void 0 !== d ? d : 0) + E, M = y - (null !== (h = C.overrideHeight) && void 0 !== h ? h : k) - (null !== (m = null === (p = null == C ? void 0 : C.indentFromWindow) || void 0 === p ? void 0 : p.bottom) && void 0 !== m ? m : 0);
                        let z = (0, s.clamp)(C.y, A, Math.max(A, M));
                        if (C.forbidCorrectYCoord && z < C.y && (b -= C.y - z, z = C.y), t && void 0 !== this.props.closeOnScrollOutsideOffset && C.y <= this.props.closeOnScrollOutsideOffset) return void this._handleGlobalClose(!0);
                        const x = null !== (v = C.overrideHeight) && void 0 !== v ? v : T ? b : void 0;
                        this.setState({
                            appearingMenuHeight: t ? this.state.appearingMenuHeight : x,
                            appearingMenuWidth: t ? this.state.appearingMenuWidth : C.overrideWidth,
                            appearingPosition: {
                                x: L,
                                y: z
                            },
                            isMeasureValid: !0
                        }, (() => {
                            this._restoreScrollPosition(), e && e()
                        }))
                    }, this._restoreScrollPosition = () => {
                        const e = document.activeElement,
                            t = (0, o.ensureNotNull)(this._containerRef);
                        if (null !== e && t.contains(e)) try {
                            e.scrollIntoView()
                        } catch (e) {} else(0, o.ensureNotNull)(this._scrollWrapRef).scrollTop = this._scroll
                    }, this._resizeForced = () => {
                        this.setState({
                            appearingMenuHeight: void 0,
                            appearingMenuWidth: void 0,
                            appearingPosition: void 0,
                            isMeasureValid: void 0
                        })
                    }, this._resize = () => {
                        null === this._raf && (this._raf = requestAnimationFrame((() => {
                            this.setState({
                                appearingMenuHeight: void 0,
                                appearingMenuWidth: void 0,
                                appearingPosition: void 0,
                                isMeasureValid: void 0
                            }), this._raf = null
                        })))
                    }, this._handleGlobalClose = e => {
                        this.props.onClose(e)
                    }, this._handleSlot = e => {
                        this._manager.setContainer(e)
                    }, this._handleScroll = () => {
                        this._scroll = (0, o.ensureNotNull)(this._scrollWrapRef).scrollTop
                    }, this._handleScrollOutsideEnd = () => {
                        clearTimeout(this._scrollTimeout), this._scrollTimeout = setTimeout((() => {
                            this._handleMeasure({
                                forceRecalcPosition: !0
                            })
                        }), 80)
                    }, this._handleScrollOutside = e => {
                        e.target !== this._scrollWrapRef && (this._handleScrollOutsideEnd(), null === this._scrollRaf && (this._scrollRaf = requestAnimationFrame((() => {
                            this._handleMeasure({
                                forceRecalcPosition: !0
                            }), this._scrollRaf = null
                        }))))
                    }, this.state = {}
                }
                componentDidMount() {
                    this._handleMeasure({
                        callback: this.props.onOpen
                    });
                    const {
                        customCloseDelegate: e = c.globalCloseDelegate
                    } = this.props;
                    e.subscribe(this, this._handleGlobalClose), window.addEventListener("resize", this._resize);
                    const t = null !== this.context;
                    this._hotkeys || t || (this._hotkeys = h.createGroup({
                        desc: "Popup menu"
                    }), this._hotkeys.add({
                        desc: "Close",
                        hotkey: 27,
                        handler: () => {
                            this.props.onKeyboardClose && this.props.onKeyboardClose(), this._handleGlobalClose()
                        }
                    })), this.props.repositionOnScroll && window.addEventListener("scroll", this._handleScrollOutside, {
                        capture: !0
                    })
                }
                componentDidUpdate() {
                    this._handleMeasure()
                }
                componentWillUnmount() {
                    const {
                        customCloseDelegate: e = c.globalCloseDelegate
                    } = this.props;
                    e.unsubscribe(this, this._handleGlobalClose), window.removeEventListener("resize", this._resize), window.removeEventListener("scroll", this._handleScrollOutside, {
                        capture: !0
                    }), this._hotkeys && (this._hotkeys.destroy(), this._hotkeys = null), null !== this._raf && (cancelAnimationFrame(this._raf), this._raf = null), null !== this._scrollRaf && (cancelAnimationFrame(this._scrollRaf), this._scrollRaf = null), this._scrollTimeout && clearTimeout(this._scrollTimeout)
                }
                render() {
                    const {
                        id: e,
                        role: t,
                        "aria-label": n,
                        "aria-labelledby": i,
                        "aria-activedescendant": o,
                        "aria-hidden": s,
                        children: c,
                        minWidth: d,
                        theme: h = v,
                        className: g,
                        maxHeight: f,
                        onMouseOver: y,
                        onMouseOut: S,
                        onKeyDown: E,
                        onFocus: b,
                        onBlur: T
                    } = this.props, {
                        appearingMenuHeight: I,
                        appearingMenuWidth: k,
                        appearingPosition: C,
                        isMeasureValid: N
                    } = this.state;
                    return r.createElement(m.MenuContext.Provider, {
                        value: this
                    }, r.createElement(p.SubmenuHandler, null, r.createElement(u.SlotContext.Provider, {
                        value: this._manager
                    }, r.createElement("div", {
                        id: e,
                        role: t,
                        "aria-label": n,
                        "aria-labelledby": i,
                        "aria-activedescendant": o,
                        "aria-hidden": s,
                        className: a()(g, h.menuWrap, !N && h.isMeasuring),
                        style: {
                            height: I,
                            left: C && C.x,
                            minWidth: d,
                            position: "fixed",
                            top: C && C.y,
                            width: k
                        },
                        "data-name": this.props["data-name"],
                        ref: this._handleContainerRef,
                        onScrollCapture: this.props.onScroll,
                        onContextMenu: l.preventDefaultForContextMenu,
                        tabIndex: this.props.tabIndex,
                        onMouseOver: y,
                        onMouseOut: S,
                        onKeyDown: E,
                        onFocus: b,
                        onBlur: T
                    }, r.createElement("div", {
                        className: a()(h.scrollWrap, !this.props.noMomentumBasedScroll && h.momentumBased),
                        style: {
                            overflowY: void 0 !== I ? "scroll" : "auto",
                            maxHeight: f
                        },
                        onScrollCapture: this._handleScroll,
                        ref: this._handleScrollWrapRef
                    }, r.createElement(_, {
                        className: h.menuBox
                    }, c)))), r.createElement(u.Slot, {
                        reference: this._handleSlot
                    })))
                }
                update(e) {
                    e ? this._resizeForced() : this._resize()
                }
            }

            function _(e) {
                const t = (0, o.ensureNotNull)((0, r.useContext)(p.SubmenuContext)),
                    n = r.useRef(null);
                return r.createElement("div", {
                    ref: n,
                    className: e.className,
                    onMouseOver: function(e) {
                        if (!(null !== t.current && e.target instanceof Node && (r = e.target, null === (i = n.current) || void 0 === i ? void 0 : i.contains(r)))) return;
                        var r, i;
                        t.isSubmenuNode(e.target) || t.setCurrent(null)
                    },
                    "data-name": "menu-inner"
                }, e.children)
            }
            f.contextType = p.SubmenuContext
        },
        829725: (e, t, n) => {
            "use strict";
            n.d(t, {
                OverlapManager: () => a,
                getRootOverlapManager: () => s
            });
            var r = n(650151);
            class i {
                constructor() {
                    this._storage = []
                }
                add(e) {
                    this._storage.push(e)
                }
                remove(e) {
                    this._storage = this._storage.filter((t => e !== t))
                }
                has(e) {
                    return this._storage.includes(e)
                }
                getItems() {
                    return this._storage
                }
            }
            class a {
                constructor(e = document) {
                    this._storage = new i, this._windows = new Map, this._index = 0, this._document = e, this._container = e.createDocumentFragment()
                }
                setContainer(e) {
                    const t = this._container,
                        n = null === e ? this._document.createDocumentFragment() : e;
                    ! function(e, t) {
                        Array.from(e.childNodes).forEach((e => {
                            e.nodeType === Node.ELEMENT_NODE && t.appendChild(e)
                        }))
                    }(t, n), this._container = n
                }
                registerWindow(e) {
                    this._storage.has(e) || this._storage.add(e)
                }
                ensureWindow(e, t = {
                    position: "fixed",
                    direction: "normal"
                }) {
                    const n = this._windows.get(e);
                    if (void 0 !== n) return n;
                    this.registerWindow(e);
                    const r = this._document.createElement("div");
                    if (r.style.position = t.position, r.style.zIndex = this._index.toString(), r.dataset.id = e, void 0 !== t.index) {
                        const e = this._container.childNodes.length;
                        if (t.index >= e) this._container.appendChild(r);
                        else if (t.index <= 0) this._container.insertBefore(r, this._container.firstChild);
                        else {
                            const e = this._container.childNodes[t.index];
                            this._container.insertBefore(r, e)
                        }
                    } else "reverse" === t.direction ? this._container.insertBefore(r, this._container.firstChild) : this._container.appendChild(r);
                    return this._windows.set(e, r), ++this._index, r
                }
                unregisterWindow(e) {
                    this._storage.remove(e);
                    const t = this._windows.get(e);
                    void 0 !== t && (null !== t.parentElement && t.parentElement.removeChild(t), this._windows.delete(e))
                }
                getZindex(e) {
                    const t = this.ensureWindow(e);
                    return parseInt(t.style.zIndex || "0")
                }
                moveToTop(e) {
                    if (this.getZindex(e) !== this._index) {
                        this.ensureWindow(e).style.zIndex = (++this._index).toString()
                    }
                }
                removeWindow(e) {
                    this.unregisterWindow(e)
                }
            }
            const o = new WeakMap;

            function s(e = document) {
                const t = e.getElementById("overlap-manager-root");
                if (null !== t) return (0, r.ensureDefined)(o.get(t)); {
                    const t = new a(e),
                        n = function(e) {
                            const t = e.createElement("div");
                            return t.style.position = "absolute", t.style.zIndex = 150..toString(), t.style.top = "0px", t.style.left = "0px", t.id = "overlap-manager-root", t
                        }(e);
                    return o.set(n, t), t.setContainer(n), e.body.appendChild(n), t
                }
            }
        },
        634993: (e, t, n) => {
            "use strict";
            n.d(t, {
                DEFAULT_POPUP_MENU_ITEM_THEME: () => u,
                PopupMenuItem: () => d
            });
            var r = n(50959),
                i = n(497754),
                a = n(224743),
                o = n(345848),
                s = n(8626),
                l = n(655498);
            const u = l;

            function c(e) {
                e.stopPropagation()
            }

            function d(e) {
                const {
                    id: t,
                    role: n,
                    "aria-label": u,
                    "aria-selected": d,
                    "aria-checked": h,
                    className: p,
                    title: m,
                    labelRowClassName: v,
                    labelClassName: g,
                    shortcut: f,
                    forceShowShortcuts: _,
                    icon: y,
                    isActive: S,
                    isDisabled: E,
                    isHovered: b,
                    appearAsDisabled: T,
                    label: I,
                    link: k,
                    showToolboxOnHover: C,
                    target: N,
                    rel: w,
                    toolbox: L,
                    reference: A,
                    onMouseOut: M,
                    onMouseOver: z,
                    onKeyDown: x,
                    suppressToolboxClick: D = !0,
                    theme: R = l,
                    tabIndex: U,
                    tagName: P,
                    renderComponent: O
                } = e, B = (0, s.filterDataProps)(e), H = (0, r.useRef)(null), F = (0, r.useMemo)((() => function(e) {
                    function t(t) {
                        const {
                            reference: n,
                            ...i
                        } = t, a = null != e ? e : i.href ? "a" : "div", o = "a" === a ? i : function(e) {
                            const {
                                download: t,
                                href: n,
                                hrefLang: r,
                                media: i,
                                ping: a,
                                rel: o,
                                target: s,
                                type: l,
                                referrerPolicy: u,
                                ...c
                            } = e;
                            return c
                        }(i);
                        return r.createElement(a, { ...o,
                            ref: n
                        })
                    }
                    return t.displayName = `DefaultComponent(${e})`, t
                }(P)), [P]), W = null != O ? O : F;
                return r.createElement(W, { ...B,
                    id: t,
                    role: n,
                    "aria-label": u,
                    "aria-selected": d,
                    "aria-checked": h,
                    className: i(p, R.item, y && R.withIcon, {
                        [R.isActive]: S,
                        [R.isDisabled]: E || T,
                        [R.hovered]: b
                    }),
                    title: m,
                    href: k,
                    target: N,
                    rel: w,
                    reference: function(e) {
                        H.current = e, "function" == typeof A && A(e);
                        "object" == typeof A && (A.current = e)
                    },
                    onClick: function(t) {
                        const {
                            dontClosePopup: n,
                            onClick: r,
                            onClickArg: i,
                            trackEventObject: s
                        } = e;
                        if (E) return;
                        s && (0, o.trackEvent)(s.category, s.event, s.label);
                        r && r(i, t);
                        n || (0, a.globalCloseMenu)()
                    },
                    onContextMenu: function(t) {
                        const {
                            trackEventObject: n,
                            trackRightClick: r
                        } = e;
                        n && r && (0, o.trackEvent)(n.category, n.event, `${n.label}_rightClick`)
                    },
                    onMouseUp: function(t) {
                        const {
                            trackEventObject: n,
                            trackMouseWheelClick: r
                        } = e;
                        if (1 === t.button && k && n) {
                            let e = n.label;
                            r && (e += "_mouseWheelClick"), (0, o.trackEvent)(n.category, n.event, e)
                        }
                    },
                    onMouseOver: z,
                    onMouseOut: M,
                    onKeyDown: x,
                    tabIndex: U
                }, void 0 !== y && r.createElement("span", {
                    className: R.icon,
                    dangerouslySetInnerHTML: {
                        __html: y
                    }
                }), r.createElement("span", {
                    className: i(R.labelRow, v)
                }, r.createElement("span", {
                    className: i(R.label, g)
                }, I)), (void 0 !== f || _) && r.createElement("span", {
                    className: R.shortcut
                }, (j = f) && j.split("+").join(" + ")), void 0 !== L && r.createElement("span", {
                    onClick: D ? c : void 0,
                    className: i(R.toolbox, {
                        [R.showOnHover]: C
                    })
                }, L));
                var j
            }
        },
        320116: (e, t, n) => {
            "use strict";
            n.d(t, {
                CloseDelegateContext: () => a
            });
            var r = n(50959),
                i = n(224743);
            const a = r.createContext(i.globalCloseDelegate)
        },
        45968: (e, t, n) => {
            "use strict";
            n.d(t, {
                PopupMenu: () => c
            });
            var r = n(50959),
                i = n(500962),
                a = n(162942),
                o = n(707533),
                s = n(175071),
                l = n(320116),
                u = n(951292);

            function c(e) {
                const {
                    controller: t,
                    children: n,
                    isOpened: c,
                    closeOnClickOutside: d = !0,
                    doNotCloseOn: h,
                    onClickOutside: p,
                    onClose: m,
                    onKeyboardClose: v,
                    "data-name": g = "popup-menu-container",
                    ...f
                } = e, _ = (0, r.useContext)(l.CloseDelegateContext), y = (0, u.useOutsideEvent)({
                    handler: function(e) {
                        p && p(e);
                        if (!d) return;
                        const t = (0, a.default)(h) ? h() : h;
                        if (t && e.target instanceof Node) {
                            const n = i.findDOMNode(t);
                            if (n instanceof Node && n.contains(e.target)) return
                        }
                        m()
                    },
                    mouseDown: !0,
                    touchStart: !0
                });
                return c ? r.createElement(o.Portal, {
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    pointerEvents: "none"
                }, r.createElement("span", {
                    ref: y,
                    style: {
                        pointerEvents: "auto"
                    }
                }, r.createElement(s.Menu, { ...f,
                    onClose: m,
                    onKeyboardClose: v,
                    onScroll: function(t) {
                        const {
                            onScroll: n
                        } = e;
                        n && n(t)
                    },
                    customCloseDelegate: _,
                    ref: t,
                    "data-name": g
                }, n))) : null
            }
        },
        707533: (e, t, n) => {
            "use strict";
            n.d(t, {
                Portal: () => l,
                PortalContext: () => u
            });
            var r = n(50959),
                i = n(500962),
                a = n(777491),
                o = n(829725),
                s = n(670797);
            class l extends r.PureComponent {
                constructor() {
                    super(...arguments), this._uuid = (0, a.guid)()
                }
                componentWillUnmount() {
                    this._manager().removeWindow(this._uuid)
                }
                render() {
                    const e = this._manager().ensureWindow(this._uuid, this.props.layerOptions);
                    return e.style.top = this.props.top || "", e.style.bottom = this.props.bottom || "", e.style.left = this.props.left || "", e.style.right = this.props.right || "", e.style.pointerEvents = this.props.pointerEvents || "", i.createPortal(r.createElement(u.Provider, {
                        value: this
                    }, this.props.children), e)
                }
                moveToTop() {
                    this._manager().moveToTop(this._uuid)
                }
                _manager() {
                    return null === this.context ? (0, o.getRootOverlapManager)() : this.context
                }
            }
            l.contextType = s.SlotContext;
            const u = r.createContext(null)
        },
        670797: (e, t, n) => {
            "use strict";
            n.d(t, {
                Slot: () => i,
                SlotContext: () => a
            });
            var r = n(50959);
            class i extends r.Component {
                shouldComponentUpdate() {
                    return !1
                }
                render() {
                    return r.createElement("div", {
                        style: {
                            position: "fixed",
                            zIndex: 150,
                            left: 0,
                            top: 0
                        },
                        ref: this.props.reference
                    })
                }
            }
            const a = r.createContext(null)
        },
        787684: (e, t, n) => {
            "use strict";
            n.d(t, {
                SubmenuContext: () => i,
                SubmenuHandler: () => a
            });
            var r = n(50959);
            const i = r.createContext(null);

            function a(e) {
                const [t, n] = (0, r.useState)(null), a = (0, r.useRef)(null), o = (0, r.useRef)(new Map);
                return (0, r.useEffect)((() => () => {
                    null !== a.current && clearTimeout(a.current)
                }), []), r.createElement(i.Provider, {
                    value: {
                        current: t,
                        setCurrent: function(e) {
                            null !== a.current && (clearTimeout(a.current), a.current = null);
                            null === t ? n(e) : a.current = setTimeout((() => {
                                a.current = null, n(e)
                            }), 100)
                        },
                        registerSubmenu: function(e, t) {
                            return o.current.set(e, t), () => {
                                o.current.delete(e)
                            }
                        },
                        isSubmenuNode: function(e) {
                            return Array.from(o.current.values()).some((t => t(e)))
                        }
                    }
                }, e.children)
            }
        },
        12173: (e, t, n) => {
            "use strict";
            n.d(t, {
                TooltipWizard: () => u,
                TooltipWidget: () => c
            });
            var r = n(50959),
                i = n(497754),
                a = n(83436),
                o = n(707533),
                s = n(333765),
                l = n(844662);
            class u extends r.PureComponent {
                render() {
                    const {
                        children: e,
                        popperChildrenProps: t,
                        onClose: n,
                        reference: a,
                        containerClassName: s,
                        arrowClassName: u
                    } = this.props;
                    return r.createElement(o.Portal, null, r.createElement("div", {
                        ref: a
                    }, r.createElement(c, {
                        reference: t.ref,
                        style: t.style,
                        arrowClassName: i(l.arrowHolder, this._getArrowDirectionClass(), u),
                        arrowReference: t.arrowProps.ref,
                        arrowStyle: t.arrowProps.style,
                        "data-placement": t.placement,
                        onClose: n,
                        containerClassName: s
                    }, e)))
                }
                _getArrowDirectionClass() {
                    const {
                        popperChildrenProps: e
                    } = this.props;
                    switch (e.placement) {
                        case "left":
                        case "left-start":
                            return i(l["arrowHolder--after"], l["arrowHolder--after-ltr-fix"]);
                        case "top":
                            return i(l["arrowHolder--above"], l["arrowHolder--above-fix"]);
                        case "bottom":
                        case "bottom-start":
                        case "bottom-end":
                            return l["arrowHolder--below"];
                        default:
                            return i(l["arrowHolder--before"], l["arrowHolder--before-rtl-fix"])
                    }
                }
            }

            function c(e) {
                const {
                    className: t,
                    containerClassName: n,
                    contentClassName: o,
                    reference: u,
                    style: c,
                    arrow: d = !0,
                    arrowClassName: h,
                    arrowReference: p,
                    onClose: m,
                    arrowStyle: v,
                    children: g,
                    ...f
                } = e;
                return r.createElement("div", { ...f,
                    className: t,
                    ref: u,
                    style: c
                }, d && r.createElement("div", {
                    className: h,
                    ref: p,
                    style: v
                }), r.createElement("div", {
                    className: i(l.container, n)
                }, r.createElement("div", {
                    className: i(l.content, o)
                }, g), m && r.createElement(a.Icon, {
                    className: l.closeButton,
                    icon: s,
                    onClick: m
                })))
            }
        },
        995683: (e, t, n) => {
            "use strict";

            function r(e, t, n = {}) {
                return Object.assign({}, e, function(e, t, n = {}) {
                    const r = Object.assign({}, t);
                    for (const i of Object.keys(t)) {
                        const a = n[i] || i;
                        a in e && (r[i] = [e[a], t[i]].join(" "))
                    }
                    return r
                }(e, t, n))
            }
            n.d(t, {
                mergeThemes: () => r
            })
        },
        906132: (e, t, n) => {
            "use strict";
            var r = n(522134);

            function i() {}

            function a() {}
            a.resetWarningCache = i, e.exports = function() {
                function e(e, t, n, i, a, o) {
                    if (o !== r) {
                        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation", s
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: a,
                    resetWarningCache: i
                };
                return n.PropTypes = n, n
            }
        },
        719036: (e, t, n) => {
            e.exports = n(906132)()
        },
        522134: e => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        691622: (e, t, n) => {
            "use strict";

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) {
                        r(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function o(e) {
                return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
            }
            n.d(t, {
                applyMiddleware: () => g,
                bindActionCreators: () => m,
                combineReducers: () => h,
                compose: () => v,
                createStore: () => d
            });
            var s = "function" == typeof Symbol && Symbol.observable || "@@observable",
                l = function() {
                    return Math.random().toString(36).substring(7).split("").join(".")
                },
                u = {
                    INIT: "@@redux/INIT" + l(),
                    REPLACE: "@@redux/REPLACE" + l(),
                    PROBE_UNKNOWN_ACTION: function() {
                        return "@@redux/PROBE_UNKNOWN_ACTION" + l()
                    }
                };

            function c(e) {
                if ("object" != typeof e || null === e) return !1;
                for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t
            }

            function d(e, t, n) {
                var r;
                if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw new Error(o(0));
                if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
                    if ("function" != typeof n) throw new Error(o(1));
                    return n(d)(e, t)
                }
                if ("function" != typeof e) throw new Error(o(2));
                var i = e,
                    a = t,
                    l = [],
                    h = l,
                    p = !1;

                function m() {
                    h === l && (h = l.slice())
                }

                function v() {
                    if (p) throw new Error(o(3));
                    return a
                }

                function g(e) {
                    if ("function" != typeof e) throw new Error(o(4));
                    if (p) throw new Error(o(5));
                    var t = !0;
                    return m(), h.push(e),
                        function() {
                            if (t) {
                                if (p) throw new Error(o(6));
                                t = !1, m();
                                var n = h.indexOf(e);
                                h.splice(n, 1), l = null
                            }
                        }
                }

                function f(e) {
                    if (!c(e)) throw new Error(o(7));
                    if (void 0 === e.type) throw new Error(o(8));
                    if (p) throw new Error(o(9));
                    try {
                        p = !0, a = i(a, e)
                    } finally {
                        p = !1
                    }
                    for (var t = l = h, n = 0; n < t.length; n++) {
                        (0, t[n])()
                    }
                    return e
                }

                function _(e) {
                    if ("function" != typeof e) throw new Error(o(10));
                    i = e, f({
                        type: u.REPLACE
                    })
                }

                function y() {
                    var e, t = g;
                    return (e = {
                        subscribe: function(e) {
                            if ("object" != typeof e || null === e) throw new Error(o(11));

                            function n() {
                                e.next && e.next(v())
                            }
                            return n(), {
                                unsubscribe: t(n)
                            }
                        }
                    })[s] = function() {
                        return this
                    }, e
                }
                return f({
                    type: u.INIT
                }), (r = {
                    dispatch: f,
                    subscribe: g,
                    getState: v,
                    replaceReducer: _
                })[s] = y, r
            }

            function h(e) {
                for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                    var i = t[r];
                    0, "function" == typeof e[i] && (n[i] = e[i])
                }
                var a, s = Object.keys(n);
                try {
                    ! function(e) {
                        Object.keys(e).forEach((function(t) {
                            var n = e[t];
                            if (void 0 === n(void 0, {
                                    type: u.INIT
                                })) throw new Error(o(12));
                            if (void 0 === n(void 0, {
                                    type: u.PROBE_UNKNOWN_ACTION()
                                })) throw new Error(o(13))
                        }))
                    }(n)
                } catch (e) {
                    a = e
                }
                return function(e, t) {
                    if (void 0 === e && (e = {}), a) throw a;
                    for (var r = !1, i = {}, l = 0; l < s.length; l++) {
                        var u = s[l],
                            c = n[u],
                            d = e[u],
                            h = c(d, t);
                        if (void 0 === h) {
                            t && t.type;
                            throw new Error(o(14))
                        }
                        i[u] = h, r = r || h !== d
                    }
                    return (r = r || s.length !== Object.keys(e).length) ? i : e
                }
            }

            function p(e, t) {
                return function() {
                    return t(e.apply(this, arguments))
                }
            }

            function m(e, t) {
                if ("function" == typeof e) return p(e, t);
                if ("object" != typeof e || null === e) throw new Error(o(16));
                var n = {};
                for (var r in e) {
                    var i = e[r];
                    "function" == typeof i && (n[r] = p(i, t))
                }
                return n
            }

            function v() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return 0 === t.length ? function(e) {
                    return e
                } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
                    return function() {
                        return e(t.apply(void 0, arguments))
                    }
                }))
            }

            function g() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function(e) {
                    return function() {
                        var n = e.apply(void 0, arguments),
                            r = function() {
                                throw new Error(o(15))
                            },
                            i = {
                                getState: n.getState,
                                dispatch: function() {
                                    return r.apply(void 0, arguments)
                                }
                            },
                            s = t.map((function(e) {
                                return e(i)
                            }));
                        return r = v.apply(void 0, s)(n.dispatch), a(a({}, n), {}, {
                            dispatch: r
                        })
                    }
                }
            }
        },
        486759: (e, t, n) => {
            e.exports = [{
                value: "",
                name: "All Exchanges",
                desc: n(777754).t(null, void 0, n(18383)),
                flag: "",
                country: "",
                group: "AllExchanges",
                providerId: ""
            }, {
                value: "BITHUMB",
                name: "Bithumb",
                desc: n(777754).t(null, void 0, n(906984)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bithumb"
            }, {
                value: "BITKUB",
                name: "BITKUB",
                desc: n(777754).t(null, void 0, n(973073)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitkub"
            }, {
                value: "BITRUE",
                name: "Bitrue",
                desc: n(777754).t(null, void 0, n(921076)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitrue"
            }, {
                value: "COINMETRICS",
                name: "Coin Metrics",
                desc: n(777754).t(null, void 0, n(476804)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "coinmetrics"
            }, {
                value: "MEXC",
                name: "MEXC Global",
                desc: n(777754).t(null, void 0, n(42257)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "mexc"
            }, {
                value: "GATEIO",
                name: "Gate.io",
                desc: n(777754).t(null, void 0, n(434055)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "gateio"
            }, {
                value: "796",
                name: "796",
                desc: n(777754).t(null, void 0, n(883762)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "COINFLOOR",
                name: "Coinfloor",
                desc: n(777754).t(null, void 0, n(487749)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "coinfloor"
            }, {
                value: "DERIBIT",
                name: "Deribit",
                desc: n(777754).t(null, void 0, n(864518)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "deribit"
            }, {
                value: "DEFILLAMA",
                name: "Defi Llama",
                desc: n(777754).t(null, void 0, n(70240)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "defillama"
            }, {
                value: "CURRENCYCOM",
                name: "Currencycom",
                desc: n(777754).t(null, void 0, n(148545)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "currencycom"
            }, {
                value: "GLASSNODE",
                name: "Glassnode",
                desc: n(777754).t(null, void 0, n(934859)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "glassnode"
            }, {
                value: "OKX",
                name: "OKX",
                desc: n(777754).t(null, void 0, n(308995)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "okx"
            }, {
                value: "PANGOLIN",
                name: "Pangolin (Avalanche)",
                desc: n(777754).t(null, void 0, n(880397)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "pangolin"
            }, {
                value: "PANCAKESWAP",
                name: "PancakeSwap",
                desc: n(777754).t(null, void 0, n(243391)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "pancakeswap"
            }, {
                value: "PYTH",
                name: "Pyth",
                desc: n(777754).t(null, void 0, n(403221)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "pyth"
            }, {
                value: "SPOOKYSWAP",
                name: "SpookySwap (Fantom)",
                desc: n(777754).t(null, void 0, n(746542)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "spookyswap"
            }, {
                value: "WHITEBIT",
                name: "WhiteBIT",
                desc: n(777754).t(null, void 0, n(592774)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "whitebit"
            }, {
                value: "WOONETWORK",
                name: "WOO",
                desc: n(777754).t(null, void 0, n(839751)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "woonetwork"
            }, {
                value: "DYDX",
                name: "dYdX",
                desc: n(777754).t(null, void 0, n(105453)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "dydx"
            }, {
                value: "ADX",
                name: "ADX",
                desc: n(777754).t(null, void 0, n(936934)),
                flag: "ae",
                group: "Middle East / Africa",
                country: "ae",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(975308)), n(777754).t(null, void 0, n(287916))]
            }, {
                value: "DFM",
                name: "DFM",
                desc: n(777754).t(null, void 0, n(535232)),
                flag: "ae",
                group: "Middle East / Africa",
                country: "ae",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(975308)), n(777754).t(null, void 0, n(287916))]
            }, {
                value: "LSE",
                name: "LSE",
                desc: n(777754).t(null, void 0, n(454623)),
                flag: "uk",
                group: "Europe",
                country: "uk",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(846792)), n(777754).t(null, void 0, n(606994))]
            }, {
                value: "LSIN",
                name: "LSIN",
                desc: n(777754).t(null, void 0, n(249934)),
                flag: "uk",
                group: "Europe",
                country: "uk",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(846792)), n(777754).t(null, void 0, n(606994))]
            }, {
                value: "TURQUOISE",
                name: "Turquoise",
                desc: n(777754).t(null, void 0, n(258419)),
                flag: "uk",
                group: "Europe",
                country: "uk",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(846792)), n(777754).t(null, void 0, n(606994))]
            }, {
                value: "EUREX",
                name: "EUREX",
                desc: n(777754).t(null, void 0, n(376029)),
                flag: "europe",
                group: "Europe",
                country: "eu",
                providerId: ""
            }, {
                value: "MGEX",
                name: "MGEX",
                desc: n(777754).t(null, void 0, n(14406)),
                flag: "usa",
                hideInSymbolSearch: !0,
                group: "North America",
                country: "us",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "NASDAQ",
                name: "NASDAQ",
                desc: n(777754).t(null, void 0, n(227691)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 1,
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "NYSE",
                name: "NYSE",
                desc: n(777754).t(null, void 0, n(872667)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 2,
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "AMEX",
                name: "Arca",
                desc: n(777754).t(null, void 0, n(468841)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 3,
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "OTC",
                name: "OTC",
                desc: n(777754).t(null, void 0, n(448920)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 4,
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "DJ",
                name: "DJ",
                desc: n(777754).t(null, void 0, n(623778)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 5,
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "SP",
                name: "SP",
                desc: n(777754).t(null, void 0, n(662397)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 6,
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "CBOE",
                name: "CBOE",
                desc: n(777754).t(null, void 0, n(1596)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 7,
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "CBOEEU",
                name: "CBOE EU",
                desc: n(777754).t(null, void 0, n(975674)),
                flag: "europe",
                group: "Europe",
                country: "eu",
                providerId: ""
            }, {
                value: "CBOT",
                name: "CBOT",
                desc: n(777754).t(null, void 0, n(581563)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 8,
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "CME",
                name: "CME GLOBEX",
                desc: n(777754).t(null, void 0, n(425193)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 9,
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "COMEX",
                name: "COMEX",
                desc: n(777754).t(null, void 0, n(584533)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 10,
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "NYMEX",
                name: "NYMEX",
                desc: n(777754).t(null, void 0, n(336499)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 11,
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "ICEUS",
                name: "ICEUS",
                desc: n(777754).t(null, void 0, n(403509)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 12,
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "FAIRX",
                name: "FairX",
                desc: n(777754).t(null, void 0, n(187464)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 13,
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "CSE",
                name: "CSE",
                desc: n(777754).t(null, void 0, n(465782)),
                flag: "canada",
                group: "North America",
                country: "ca",
                priorityInGroup: 13,
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(280206))]
            }, {
                value: "NEO",
                name: "NEO",
                desc: n(777754).t(null, void 0, n(278436)),
                flag: "canada",
                group: "North America",
                country: "ca",
                priorityInGroup: 14,
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(280206))]
            }, {
                value: "TSX",
                name: "TSX",
                desc: n(777754).t(null, void 0, n(949042)),
                flag: "canada",
                group: "North America",
                country: "ca",
                priorityInGroup: 15,
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(280206))]
            }, {
                value: "TSXV",
                name: "TSXV",
                desc: n(777754).t(null, void 0, n(12815)),
                flag: "canada",
                group: "North America",
                country: "ca",
                priorityInGroup: 16,
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(280206))]
            }, {
                value: "MOEX",
                name: "MOEX",
                desc: n(777754).t(null, void 0, n(73467)),
                flag: "russia",
                group: "Europe",
                country: "ru",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(238201))]
            }, {
                value: "MYX",
                name: "MYX",
                desc: n(777754).t(null, void 0, n(887964)),
                flag: "malaysia",
                group: "Asia / Pacific",
                country: "my",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(622622))]
            }, {
                value: "FTSEMYX",
                name: "FTSE",
                desc: n(777754).t(null, void 0, n(40698)),
                flag: "malaysia",
                group: "Asia / Pacific",
                country: "my",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(622622))]
            }, {
                value: "HOSE",
                name: "HOSE",
                desc: n(777754).t(null, void 0, n(34416)),
                flag: "vietnam",
                group: "Asia / Pacific",
                country: "vn",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(450049))]
            }, {
                value: "HNX",
                name: "HNX",
                desc: n(777754).t(null, void 0, n(653194)),
                flag: "vietnam",
                group: "Asia / Pacific",
                country: "vn",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(450049))]
            }, {
                value: "UPCOM",
                name: "HNX",
                desc: n(777754).t(null, void 0, n(696591)),
                flag: "vietnam",
                group: "Asia / Pacific",
                country: "vn",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(450049))]
            }, {
                value: "CSELK",
                name: "CSE",
                desc: n(777754).t(null, void 0, n(429971)),
                flag: "sri_lanka",
                group: "Asia / Pacific",
                country: "lk",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(567835))]
            }, {
                value: "BITSTAMP",
                name: "Bitstamp",
                desc: n(777754).t(null, void 0, n(42285)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitstamp"
            }, {
                value: "ACTIVTRADES",
                name: "ActivTrades",
                desc: n(777754).t(null, void 0, n(34342)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "activtrades"
            }, {
                value: "BLACKBULL",
                name: "BlackBull Markets",
                desc: n(777754).t(null, void 0, n(802620)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "blackbullmarkets"
            }, {
                value: "VANTAGE",
                name: "Vantage FX",
                desc: n(777754).t(null, void 0, n(757399)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "vantagefx"
            }, {
                value: "VELOCITY",
                name: "Velocity Trade",
                desc: n(777754).t(null, void 0, n(650469)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "velocitytrade"
            }, {
                value: "FX",
                name: "FXCM",
                desc: n(777754).t(null, void 0, n(592901)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "fxcm"
            }, {
                value: "FXOPEN",
                name: "FXOpen",
                desc: n(777754).t(null, void 0, n(638398)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "fxopen"
            }, {
                value: "EIGHTCAP",
                name: "Eightcap",
                desc: n(777754).t(null, void 0, n(910807)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "eightcap"
            }, {
                value: "BTCE",
                name: "BTC-e",
                desc: n(777754).t(null, void 0, n(675334)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "HONEYSWAP",
                name: "Honeyswap (xDai)",
                desc: n(777754).t(null, void 0, n(499767)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "honeyswap"
            }, {
                value: "HONEYSWAPPOLYGON",
                name: "Honeyswap (Polygon)",
                desc: n(777754).t(null, void 0, n(880739)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "honeyswap"
            }, {
                value: "BSE",
                name: "BSE",
                desc: n(777754).t(null, void 0, n(799931)),
                flag: "india",
                group: "Asia / Pacific",
                country: "in",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(16207))]
            }, {
                value: "NYMEX_MINI",
                name: "NYMEX E-mini",
                desc: n(777754).t(null, void 0, n(232852)),
                flag: "usa",
                group: "North America",
                hideInSymbolSearch: !0,
                country: "us",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "COMEX_MINI",
                name: "COMEX E-mini",
                desc: n(777754).t(null, void 0, n(695270)),
                flag: "usa",
                group: "North America",
                hideInSymbolSearch: !0,
                country: "us",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "ICEEUR",
                name: "ICEEUR",
                desc: n(777754).t(null, void 0, n(947701)),
                flag: "europe",
                group: "Europe",
                country: "eu",
                providerId: ""
            }, {
                value: "NSE",
                name: "NSE",
                desc: n(777754).t(null, void 0, n(803867)),
                flag: "india",
                group: "Asia / Pacific",
                country: "in",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(16207))]
            }, {
                value: "MCX",
                name: "MCX",
                desc: n(777754).t(null, void 0, n(753577)),
                flag: "india",
                group: "Asia / Pacific",
                country: "in",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(16207))]
            }, {
                value: "NCDEX",
                name: "NCDEX",
                desc: n(777754).t(null, void 0, n(915091)),
                flag: "india",
                group: "Asia / Pacific",
                country: "in",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(16207))]
            }, {
                value: "KCBT",
                name: "KCBT",
                desc: n(777754).t(null, void 0, n(610871)),
                flag: "usa",
                hideInSymbolSearch: !0,
                group: "North America",
                country: "us",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "OKCOIN",
                name: "OKCoin",
                desc: n(777754).t(null, void 0, n(798361)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "okcoin"
            }, {
                value: "CBOT_MINI",
                name: "CBOT E-mini",
                desc: n(777754).t(null, void 0, n(123780)),
                flag: "usa",
                group: "North America",
                hideInSymbolSearch: !0,
                country: "us",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "KRAKEN",
                name: "Kraken",
                desc: n(777754).t(null, void 0, n(961932)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "kraken"
            }, {
                value: "KUCOIN",
                name: "KuCoin",
                desc: n(777754).t(null, void 0, n(850627)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "kucoin"
            }, {
                value: "XEXCHANGE",
                name: "xExchange",
                desc: n(777754).t(null, void 0, n(734830)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "xexchange"
            }, {
                value: "CME_MINI",
                name: "CME E-mini",
                desc: n(777754).t(null, void 0, n(378106)),
                flag: "usa",
                group: "North America",
                hideInSymbolSearch: !0,
                country: "us",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "DJ",
                name: "DJ",
                desc: n(777754).t(null, void 0, n(973151)),
                flag: "usa",
                hideInSymbolSearch: !0,
                group: "North America",
                country: "us",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "SP",
                name: "SP",
                desc: n(777754).t(null, void 0, n(869919)),
                flag: "usa",
                hideInSymbolSearch: !0,
                group: "North America",
                country: "us",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "BTCCHINA",
                name: "BTC China",
                desc: n(777754).t(null, void 0, n(599193)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "KORBIT",
                name: "Korbit",
                desc: n(777754).t(null, void 0, n(281254)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "korbit"
            }, {
                value: "THEROCKTRADING",
                name: "The Rock Trading",
                desc: n(777754).t(null, void 0, n(217714)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "therocktrading"
            }, {
                value: "TIMEX",
                name: "TimeX",
                desc: n(777754).t(null, void 0, n(773557)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "timex"
            }, {
                value: "ANX",
                name: "ANX",
                desc: n(777754).t(null, void 0, n(198372)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "MEXBT",
                name: "meXBT",
                desc: n(777754).t(null, void 0, n(668490)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "GEMINI",
                name: "Gemini",
                desc: n(777754).t(null, void 0, n(201367)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "gemini"
            }, {
                value: "BITVC",
                name: "BitVC",
                desc: n(777754).t(null, void 0, n(357531)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "BITYES",
                name: "BitYes",
                desc: n(777754).t(null, void 0, n(945663)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "BNC",
                name: "BNC",
                desc: n(777754).t(null, void 0, n(364180)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "BITFLYER",
                name: "bitFlyer",
                desc: n(777754).t(null, void 0, n(704862)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitflyer"
            }, {
                value: "BYBIT",
                name: "Bybit",
                desc: n(777754).t(null, void 0, n(801800)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bybit"
            }, {
                value: "BITMEX",
                name: "BitMEX",
                desc: n(777754).t(null, void 0, n(890561)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitmex"
            }, {
                value: "BITPANDAPRO",
                name: "Bitpanda Pro",
                desc: n(777754).t(null, void 0, n(555437)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitpanda"
            }, {
                value: "CAPITALCOM",
                name: "Capital.com",
                desc: n(777754).t(null, void 0, n(148674)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "capitalcom"
            }, {
                value: "COINEX",
                name: "CoinEx",
                desc: n(777754).t(null, void 0, n(328681)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "coinex"
            }, {
                value: "EXMO",
                name: "EXMO",
                desc: n(777754).t(null, void 0, n(924753)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "exmo2"
            }, {
                value: "INTOTHEBLOCK",
                name: "IntoTheBlock",
                desc: n(777754).t(null, void 0, n(830996)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "intotheblock"
            }, {
                value: "EASYMARKETS",
                name: "easyMarkets",
                desc: n(777754).t(null, void 0, n(339210)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "easymarkets"
            }, {
                value: "FOREXCOM",
                name: "FOREX.com",
                desc: n(777754).t(null, void 0, n(395068)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "gain"
            }, {
                value: "FX_IDC",
                name: "ICE",
                desc: n(777754).t(null, void 0, n(89446)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "ice"
            }, {
                value: "GLOBALPRIME",
                name: "GLOBALPRIME",
                desc: n(777754).t(null, void 0, n(572057)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "globalprime"
            }, {
                value: "IBROKER",
                name: "iBroker",
                desc: n(777754).t(null, void 0, n(51966)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "ibroker"
            }, {
                value: "CEXIO",
                name: "CEX.IO",
                desc: n(777754).t(null, void 0, n(885953)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "cexio"
            }, {
                value: "BITSO",
                name: "Bitso",
                desc: n(777754).t(null, void 0, n(414630)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitso"
            }, {
                value: "BITFINEX",
                name: "Bitfinex",
                desc: n(777754).t(null, void 0, n(572762)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitfinex"
            }, {
                value: "MTGOX",
                name: "Mt.Gox",
                desc: n(777754).t(null, void 0, n(808754)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: "mtgox"
            }, {
                value: "PHEMEX",
                name: "Phemex",
                desc: n(777754).t(null, void 0, n(972718)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "phemex"
            }, {
                value: "POLONIEX",
                name: "Poloniex",
                desc: n(777754).t(null, void 0, n(311014)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "poloniex"
            }, {
                value: "QUICKSWAP",
                name: "QuickSwap (Polygon)",
                desc: n(777754).t(null, void 0, n(478675)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "quickswap"
            }, {
                value: "SUSHISWAP",
                name: "SushiSwap (Ethereum)",
                desc: n(777754).t(null, void 0, n(656920)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "sushiswap"
            }, {
                value: "SUSHISWAPPOLYGON",
                name: "SushiSwap (Polygon)",
                desc: n(777754).t(null, void 0, n(568905)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "sushiswap"
            }, {
                value: "TRADERJOE",
                name: "Trader Joe (Avalanche)",
                desc: n(777754).t(null, void 0, n(319746)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "traderjoe"
            }, {
                value: "TRADESTATION",
                name: "TradeStation",
                desc: n(777754).t(null, void 0, n(437523)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "tradestation"
            }, {
                value: "UNISWAP",
                name: "Uniswap v2 (Ethereum)",
                desc: n(777754).t(null, void 0, n(725990)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "uniswap"
            }, {
                value: "UNISWAP3ETH",
                name: "Uniswap v3 (Ethereum)",
                desc: n(777754).t(null, void 0, n(670485)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "uniswap"
            }, {
                value: "UNISWAP3POLYGON",
                name: "Uniswap v3 (Polygon)",
                desc: n(777754).t(null, void 0, n(506595)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "uniswap"
            }, {
                value: "UNISWAP3ARBITRUM",
                name: "Uniswap v3 (Arbitrum)",
                desc: n(777754).t(null, void 0, n(419861)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "uniswap"
            }, {
                value: "UPBIT",
                name: "UpBit",
                desc: n(777754).t(null, void 0, n(310430)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "upbit"
            }, {
                value: "BINGX",
                name: "BingX",
                desc: n(777754).t(null, void 0, n(932032)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bingx"
            }, {
                value: "BTSE",
                name: "BTSE",
                desc: n(777754).t(null, void 0, n(621363)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "btse"
            }, {
                value: "BITTREX",
                name: "Bittrex",
                desc: n(777754).t(null, void 0, n(611622)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bittrex"
            }, {
                value: "BINANCE",
                name: "Binance",
                desc: n(777754).t(null, void 0, n(778260)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "binance"
            }, {
                value: "BITGET",
                name: "Bitget",
                desc: n(777754).t(null, void 0, n(151805)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitget"
            }, {
                value: "BINANCEUS",
                name: "Binance US",
                desc: n(777754).t(null, void 0, n(376868)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "binance"
            }, {
                value: "DELTA",
                name: "Delta",
                desc: n(777754).t(null, void 0, n(527223)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "delta"
            }, {
                value: "BCBA",
                name: "BYMA",
                desc: n(777754).t(null, void 0, n(731613)),
                flag: "argentina",
                group: "Mexico and South America",
                country: "ar",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(834742))]
            }, {
                value: "MATBAROFEX",
                name: "ROFEX",
                desc: n(777754).t(null, void 0, n(477911)),
                flag: "argentina",
                group: "Mexico and South America",
                country: "ar",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(834742))]
            }, {
                value: "BMFBOVESPA",
                name: "B3",
                desc: n(777754).t(null, void 0, n(866247)),
                flag: "brasil",
                group: "Mexico and South America",
                country: "br",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(228867))]
            }, {
                value: "BMV",
                name: "BMV",
                desc: n(777754).t(null, void 0, n(203947)),
                flag: "mexico",
                group: "Mexico and South America",
                country: "mx",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(555087))]
            }, {
                value: "BVL",
                name: "BVL",
                desc: n(777754).t(null, void 0, n(505138)),
                flag: "peru",
                group: "Mexico and South America",
                country: "pe",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(622979))]
            }, {
                value: "BCS",
                name: "SSE",
                desc: n(777754).t(null, void 0, n(949722)),
                flag: "chile",
                group: "Mexico and South America",
                country: "cl",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(141840))]
            }, {
                value: "BVC",
                name: "BVC",
                desc: n(777754).t(null, void 0, n(388142)),
                flag: "colombia",
                group: "Mexico and South America",
                country: "co",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(731144))]
            }, {
                value: "BVCV",
                name: "BVC",
                desc: n(777754).t(null, void 0, n(478271)),
                flag: "venezuela",
                group: "Mexico and South America",
                country: "ve",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(739055))]
            }, {
                value: "NAG",
                name: "NSE",
                desc: n(777754).t(null, void 0, n(862549)),
                flag: "japan",
                group: "Asia / Pacific",
                country: "jp",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(692443))]
            }, {
                value: "TSE",
                name: "TSE",
                desc: n(777754).t(null, void 0, n(453617)),
                flag: "japan",
                group: "Asia / Pacific",
                country: "jp",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(692443))]
            }, {
                value: "TFEX",
                name: "TFEX",
                desc: n(777754).t(null, void 0, n(197400)),
                flag: "thailand",
                group: "Asia / Pacific",
                country: "th",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(433138))]
            }, {
                value: "TFX",
                name: "TFX",
                desc: n(777754).t(null, void 0, n(753572)),
                flag: "japan",
                group: "Asia / Pacific",
                country: "jp",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(692443))]
            }, {
                value: "TOCOM",
                name: "TOCOM",
                desc: n(777754).t(null, void 0, n(30453)),
                flag: "japan",
                group: "Asia / Pacific",
                country: "jp",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(692443))]
            }, {
                value: "OSE",
                name: "OSE",
                desc: n(777754).t(null, void 0, n(517199)),
                flag: "japan",
                group: "Asia / Pacific",
                country: "jp",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(692443))]
            }, {
                value: "SGX",
                name: "SGX",
                desc: n(777754).t(null, void 0, n(919973)),
                flag: "singapore",
                group: "Asia / Pacific",
                country: "sg",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(156683))]
            }, {
                value: "ICESG",
                name: "ICE Futures Singapore",
                desc: n(777754).t(null, void 0, n(448044)),
                flag: "singapore",
                group: "Asia / Pacific",
                country: "sg",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(156683))]
            }, {
                value: "SAPSE",
                name: "SSE",
                desc: n(777754).t(null, void 0, n(253961)),
                flag: "japan",
                group: "Asia / Pacific",
                country: "jp",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(692443))]
            }, {
                value: "FSE",
                name: "FSE",
                desc: n(777754).t(null, void 0, n(461659)),
                flag: "japan",
                group: "Asia / Pacific",
                country: "jp",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(692443))]
            }, {
                value: "TPEX",
                name: "TPEx",
                desc: n(777754).t(null, void 0, n(215751)),
                flag: "taiwan",
                group: "Asia / Pacific",
                country: "tw",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(460919))]
            }, {
                value: "TWSE",
                name: "TWSE",
                desc: n(777754).t(null, void 0, n(974013)),
                flag: "taiwan",
                group: "Asia / Pacific",
                country: "tw",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(460919))]
            }, {
                value: "SET",
                name: "SET",
                desc: n(777754).t(null, void 0, n(905107)),
                flag: "thailand",
                group: "Asia / Pacific",
                country: "th",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(433138))]
            }, {
                value: "KRX",
                name: "KRX",
                desc: n(777754).t(null, void 0, n(116699)),
                flag: "south_korea",
                group: "Asia / Pacific",
                country: "kr",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(173160))]
            }, {
                value: "BAHRAIN",
                name: "BHB",
                desc: n(777754).t(null, void 0, n(98343)),
                flag: "bahrain",
                group: "Middle East / Africa",
                country: "bh",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(53260))]
            }, {
                value: "KSE",
                name: "KSE",
                desc: n(777754).t(null, void 0, n(542319)),
                flag: "kuwait",
                group: "Middle East / Africa",
                country: "kw",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(872374))]
            }, {
                value: "CSECY",
                name: "CSE",
                desc: n(777754).t(null, void 0, n(4287)),
                flag: "cyprus",
                group: "Europe",
                country: "cy",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(551017))]
            }, {
                value: "BVMT",
                name: "BVMT",
                desc: n(777754).t(null, void 0, n(923628)),
                flag: "tunisia",
                group: "Middle East / Africa",
                country: "tn",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(420638))]
            }, {
                value: "ATHEX",
                name: "ATHEX",
                desc: n(777754).t(null, void 0, n(852002)),
                flag: "greece",
                group: "Europe",
                country: "gr",
                providerId: ""
            }, {
                value: "BELEX",
                name: "BELEX",
                desc: n(777754).t(null, void 0, n(525246)),
                flag: "serbia",
                group: "Europe",
                country: "rs",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(896573))]
            }, {
                value: "EGX",
                name: "EGX",
                desc: n(777754).t(null, void 0, n(493792)),
                flag: "egypt",
                group: "Middle East / Africa",
                country: "eg",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(205390))]
            }, {
                value: "TADAWUL",
                name: "Tadawul",
                desc: n(777754).t(null, void 0, n(807722)),
                flag: "saudi_arabia",
                group: "Middle East / Africa",
                country: "sa",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(936261))]
            }, {
                value: "IDX",
                name: "IDX",
                desc: n(777754).t(null, void 0, n(75088)),
                flag: "indonesia",
                group: "Asia / Pacific",
                country: "id",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(609759))]
            }, {
                value: "HSI",
                name: "HSI",
                desc: n(777754).t(null, void 0, n(259952)),
                flag: "hong_kong",
                group: "Asia / Pacific",
                country: "hk",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(532918))]
            }, {
                value: "QSE",
                name: "QSE",
                desc: n(777754).t(null, void 0, n(844449)),
                flag: "qatar",
                group: "Middle East / Africa",
                country: "qa",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(619056))]
            }, {
                value: "OANDA",
                name: "OANDA",
                desc: n(777754).t(null, void 0, n(398585)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "oanda"
            }, {
                value: "SAXO",
                name: "Saxo",
                desc: n(777754).t(null, void 0, n(780276)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "saxobank"
            }, {
                value: "PEPPERSTONE",
                name: "Pepperstone",
                desc: n(777754).t(null, void 0, n(341557)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "pepperstone"
            }, {
                value: "PHILLIPNOVA",
                name: "Phillip Nova",
                desc: n(777754).t(null, void 0, n(574893)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "phillipnova"
            }, {
                value: "SKILLING",
                name: "SKILLING",
                desc: n(777754).t(null, void 0, n(434119)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "skilling"
            }, {
                value: "SPREADEX",
                name: "Spreadex",
                desc: n(777754).t(null, void 0, n(822963)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "spreadex"
            }, {
                value: "EURONEXT",
                name: "Euronext",
                desc: n(777754).t(null, void 0, n(70082)),
                flag: "europe",
                group: "Europe",
                country: "eu",
                providerId: ""
            }, {
                value: "EURONEXTAMS",
                name: "EURONEXTAMS",
                desc: n(777754).t(null, void 0, n(841444)),
                flag: "netherlands",
                group: "Europe",
                country: "nl",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(353770))]
            }, {
                value: "EURONEXTBRU",
                name: "EURONEXTBRU",
                desc: n(777754).t(null, void 0, n(166201)),
                flag: "belgium",
                group: "Europe",
                country: "be",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(637653))]
            }, {
                value: "EURONEXTLIS",
                name: "EURONEXTLIS",
                desc: n(777754).t(null, void 0, n(232729)),
                flag: "portugal",
                group: "Europe",
                country: "pt",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(123496))]
            }, {
                value: "EURONEXTPAR",
                name: "EURONEXTPAR",
                desc: n(777754).t(null, void 0, n(515894)),
                flag: "france",
                group: "Europe",
                country: "fr",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(696013))]
            }, {
                value: "OSL",
                name: "EURONEXTOSE",
                desc: n(777754).t(null, void 0, n(255361)),
                flag: "norway",
                group: "Europe",
                country: "no",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(145075))]
            }, {
                value: "OMX",
                name: "OMX",
                desc: n(777754).t(null, void 0, n(74125)),
                flag: "europe",
                group: "Europe",
                country: "eu",
                providerId: ""
            }, {
                value: "FWB",
                name: "FWB",
                desc: n(777754).t(null, void 0, n(670183)),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(159985))]
            }, {
                value: "FRA",
                name: "FRA",
                desc: n(777754).t(null, void 0, n(551785)),
                flag: "germany",
                hideInSymbolSearch: !0,
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(159985))]
            }, {
                value: "SWB",
                name: "SWB",
                desc: n(777754).t(null, void 0, n(17644)),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(159985))]
            }, {
                value: "XETR",
                name: "XETR",
                desc: n(777754).t(null, void 0, n(141173)),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(159985))]
            }, {
                value: "BME",
                name: "BME",
                desc: n(777754).t(null, void 0, n(889143)),
                flag: "spain",
                group: "Europe",
                country: "es",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(792334))]
            }, {
                value: "BSSE",
                name: "BSSE",
                desc: n(777754).t(null, void 0, n(433137)),
                flag: "slovakia",
                group: "Europe",
                country: "sk",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(506262))]
            }, {
                value: "BVB",
                name: "BVB",
                desc: n(777754).t(null, void 0, n(273573)),
                flag: "romania",
                group: "Europe",
                country: "ro",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(385646))]
            }, {
                value: "BET",
                name: "BET",
                desc: n(777754).t(null, void 0, n(386479)),
                flag: "hungary",
                group: "Europe",
                country: "hu",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(930646))]
            }, {
                value: "GPW",
                name: "GPW",
                desc: n(777754).t(null, void 0, n(128008)),
                flag: "poland",
                group: "Europe",
                country: "pl",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(210119))]
            }, {
                value: "NEWCONNECT",
                name: "GPW — NewConnect",
                desc: n(777754).t(null, void 0, n(253127)),
                flag: "poland",
                group: "Europe",
                country: "pl",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(210119))]
            }, {
                value: "LUXSE",
                name: "LUXSE",
                desc: n(777754).t(null, void 0, n(299724)),
                flag: "luxembourg",
                group: "Europe",
                country: "lu",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(164352))]
            }, {
                value: "MIL",
                name: "MIL",
                desc: n(777754).t(null, void 0, n(16930)),
                flag: "italy",
                group: "Europe",
                country: "it",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(43246))]
            }, {
                value: "NGM",
                name: "NGM",
                desc: n(777754).t(null, void 0, n(414327)),
                flag: "sweden",
                group: "Europe",
                country: "se",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(182404))]
            }, {
                value: "BER",
                name: "BER",
                desc: n(777754).t(null, void 0, n(320197)),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(159985))]
            }, {
                value: "DUS",
                name: "DUS",
                desc: n(777754).t(null, void 0, n(803884)),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(159985))]
            }, {
                value: "HAM",
                name: "HAM",
                desc: n(777754).t(null, void 0, n(373414)),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(159985))]
            }, {
                value: "HAN",
                name: "HAN",
                desc: n(777754).t(null, void 0, n(726147)),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(159985))]
            }, {
                value: "MUN",
                name: "MUN",
                desc: n(777754).t(null, void 0, n(186042)),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(159985))]
            }, {
                value: "TRADEGATE",
                name: "TRADEGATE",
                desc: n(777754).t(null, void 0, n(280394)),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(159985))]
            }, {
                value: "GETTEX",
                name: "GETTEX",
                desc: n(777754).t(null, void 0, n(881365)),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "finanzen",
                searchTerms: [n(777754).t(null, void 0, n(159985))]
            }, {
                value: "MILSEDEX",
                name: "MILSEDEX",
                desc: n(777754).t(null, void 0, n(948741)),
                flag: "italy",
                group: "Europe",
                hideInSymbolSearch: !0,
                country: "it",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(43246))]
            }, {
                value: "IST",
                name: "IST",
                desc: n(777754).t(null, void 0, n(757451)),
                flag: "turkey",
                hideInSymbolSearch: !0,
                group: "Europe",
                country: "tr",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(694398))]
            }, {
                value: "BIST",
                name: "BIST",
                desc: n(777754).t(null, void 0, n(833187)),
                flag: "turkey",
                group: "Europe",
                country: "tr",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(694398))]
            }, {
                value: "TASE",
                name: "TASE",
                desc: n(777754).t(null, void 0, n(932457)),
                flag: "israel",
                group: "Middle East / Africa",
                country: "il",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(261935))]
            }, {
                value: "SIX",
                name: "SIX",
                desc: n(777754).t(null, void 0, n(460854)),
                flag: "switzerland",
                group: "Europe",
                country: "ch",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(440414))]
            }, {
                value: "BX",
                name: "BX",
                desc: n(777754).t(null, void 0, n(283300)),
                flag: "switzerland",
                group: "Europe",
                country: "ch",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(440414))]
            }, {
                value: "ASX",
                name: "ASX",
                desc: n(777754).t(null, void 0, n(252673)),
                flag: "australia",
                group: "Asia / Pacific",
                country: "au",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(50132))]
            }, {
                value: "CHIXAU",
                name: "Cboe Australia",
                desc: n(777754).t(null, void 0, n(685147)),
                flag: "australia",
                group: "Asia / Pacific",
                country: "au",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(50132))]
            }, {
                value: "NZX",
                name: "NZX",
                desc: n(777754).t(null, void 0, n(164062)),
                flag: "new_zealand",
                group: "Asia / Pacific",
                country: "nz",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(824143))]
            }, {
                value: "SSE",
                name: "SSE",
                desc: n(777754).t(null, void 0, n(531385)),
                flag: "china",
                group: "Asia / Pacific",
                country: "cn",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(420844))]
            }, {
                value: "SZSE",
                name: "SZSE",
                desc: n(777754).t(null, void 0, n(117992)),
                flag: "china",
                group: "Asia / Pacific",
                country: "cn",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(420844))]
            }, {
                value: "HKEX",
                name: "HKEX",
                desc: n(777754).t(null, void 0, n(686471)),
                flag: "hong_kong",
                group: "Asia / Pacific",
                country: "hk",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(532918))]
            }, {
                value: "PSE",
                name: "PSE",
                desc: n(777754).t(null, void 0, n(300290)),
                flag: "philippines",
                group: "Asia / Pacific",
                country: "ph",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(226813))]
            }, {
                value: "NSENG",
                name: "NSE",
                desc: n(777754).t(null, void 0, n(410100)),
                flag: "nigeria",
                group: "Middle East / Africa",
                country: "ng",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(62410))]
            }, {
                value: "NSEKE",
                name: "NSE",
                desc: n(777754).t(null, void 0, n(297570)),
                flag: "kenya",
                group: "Middle East / Africa",
                country: "ke",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(89080))]
            }, {
                value: "JSE",
                name: "JSE",
                desc: n(777754).t(null, void 0, n(456781)),
                flag: "south_africa",
                group: "Middle East / Africa",
                country: "za",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(528900))]
            }, {
                value: "COINBASE",
                name: "Coinbase",
                desc: n(777754).t(null, void 0, n(740182)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "coinbase"
            }, {
                value: "CITYINDEX",
                name: "City Index",
                desc: n(777754).t(null, void 0, n(858746)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "cityindex"
            }, {
                value: "USI",
                name: "USI",
                desc: n(777754).t(null, void 0, n(787839)),
                flag: "usa",
                hideInSymbolSearch: !0,
                group: "North America",
                country: "us",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "OMXHEX",
                name: "HEX",
                desc: n(777754).t(null, void 0, n(261969)),
                flag: "finland",
                group: "Europe",
                country: "fi",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(936693))]
            }, {
                value: "OMXICE",
                name: "ICEX",
                desc: n(777754).t(null, void 0, n(443662)),
                flag: "iceland",
                group: "Europe",
                country: "is",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(664150))]
            }, {
                value: "OMXCOP",
                name: "CSE",
                desc: n(777754).t(null, void 0, n(290311)),
                flag: "denmark",
                group: "Europe",
                country: "dk",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(64901))]
            }, {
                value: "OMXSTO",
                name: "STO",
                desc: n(777754).t(null, void 0, n(826846)),
                flag: "sweden",
                group: "Europe",
                country: "se",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(182404))]
            }, {
                value: "OMXVSE",
                name: "VSE",
                desc: n(777754).t(null, void 0, n(453525)),
                flag: "lithuania",
                group: "Europe",
                country: "lt",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(529113))]
            }, {
                value: "OMXTSE",
                name: "TALSE",
                desc: n(777754).t(null, void 0, n(807486)),
                flag: "estonia",
                group: "Europe",
                country: "ee",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(959823))]
            }, {
                value: "OMXRSE",
                name: "OMXR",
                desc: n(777754).t(null, void 0, n(268976)),
                flag: "latvia",
                group: "Europe",
                country: "lv",
                providerId: "",
                searchTerms: [n(777754).t(null, void 0, n(484045))]
            }, {
                value: "OMXNORDIC",
                name: "OMXNORDIC",
                desc: n(777754).t(null, void 0, n(641835)),
                flag: "europe",
                hideInSymbolSearch: !0,
                group: "Europe",
                country: "eu",
                providerId: ""
            }, {
                value: "OMXBALTIC",
                name: "OMXBALTIC",
                desc: n(777754).t(null, void 0, n(220309)),
                flag: "europe",
                hideInSymbolSearch: !0,
                group: "Europe",
                country: "eu",
                providerId: ""
            }, {
                value: "FRED",
                name: "FRED",
                desc: n(777754).t(null, void 0, n(90661)),
                flag: "usa",
                group: "Economy",
                country: "",
                providerId: "fred2",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "ISM",
                name: "ISM",
                desc: n(777754).t(null, void 0, n(647511)),
                flag: "usa",
                group: "Economy",
                country: "",
                providerId: "quandl_ism",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "FRBNY",
                name: "FRBNY",
                desc: n(777754).t(null, void 0, n(889838)),
                flag: "usa",
                group: "Economy",
                country: "",
                providerId: "quandl_frbny",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "FRBP",
                name: "FRBP",
                desc: n(777754).t(null, void 0, n(343244)),
                flag: "usa",
                group: "Economy",
                country: "",
                providerId: "quandl_frbp",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }, {
                value: "ECONOMICS",
                name: "Trading Economics",
                desc: n(777754).t(null, void 0, n(651425)),
                flag: "usa",
                group: "Economy",
                country: "",
                providerId: "economics",
                searchTerms: [n(777754).t(null, void 0, n(787935)), n(777754).t(null, void 0, n(216977))]
            }]
        },
        711242: (e, t, n) => {
            e.exports = [{
                name: n(777754).t(null, void 0, n(695271)),
                value: "",
                search_type: "undefined"
            }, {
                name: n(777754).t(null, void 0, n(426294)),
                value: "stocks",
                search_type: "stocks"
            }, {
                name: n(777754).t(null, void 0, n(301992)),
                value: "funds",
                search_type: "funds"
            }, {
                name: n(777754).t(null, void 0, n(468631)),
                value: "futures",
                search_type: "futures"
            }, {
                name: n(777754).t(null, void 0, n(324241)),
                value: "forex",
                search_type: "forex"
            }, {
                name: n(777754).t(null, void 0, n(494695)),
                value: "cfd",
                search_type: "cfd"
            }, {
                name: n(777754).t(null, void 0, n(612760)),
                value: "bitcoin,crypto",
                search_type: "crypto"
            }, {
                name: n(777754).t(null, void 0, n(433468)),
                value: "index",
                search_type: "index"
            }, {
                name: n(777754).t(null, void 0, n(290368)),
                value: "bond",
                search_type: "bond"
            }, {
                name: n(777754).t(null, void 0, n(337556)),
                value: "economic",
                search_type: "economic"
            }]
        },
        366276: (e, t, n) => {
            "use strict";
            n.d(t, {
                CLIENT_TO_SERVER_FIELD_MAPPING: () => r,
                mapServerQuoteValuesToClient: () => a
            });
            const r = new Map([
                    ["change", "ch"],
                    ["last_price", "lp"],
                    ["change_percent", "chp"]
                ]),
                i = new Map([
                    ["ch", "change"],
                    ["lp", "last_price"],
                    ["chp", "change_percent"]
                ]);

            function a(e) {
                var t;
                const n = {};
                for (const [r, a] of Object.entries(e)) {
                    n[null !== (t = i.get(r)) && void 0 !== t ? t : r] = a
                }
                return n
            }
        },
        611998: (e, t, n) => {
            "use strict";
            n.d(t, {
                QuoteSessionSnapshoter: () => d
            });
            var r = n(801669),
                i = n(869403),
                a = n.n(i),
                o = n(462282),
                s = n(777491),
                l = n(736844),
                u = n(461909),
                c = n(366276);
            class d {
                constructor(e) {
                    if (this._onSymbolData = new(a()), this._incomplete = new Set, this._connected = !1, this._batcher = null, this._handler = e => {
                            switch (e.method) {
                                case "connected":
                                    this._connected || (this._connected = !0, this._handleConnected());
                                    break;
                                case "quote_symbol_data":
                                    this._connected && this._handleSymbolData(e.params[0]);
                                    break;
                                case "quote_completed":
                                    this._connected && this._handleCompleteData(e.params[0]);
                                    break;
                                case "disconnected":
                                    this._connected && (this._connected = !1, this._batcher = null)
                            }
                        }, 0 === e.fields.length) throw new Error('Support for empty "fields" array is not implemented');
                    const {
                        provider: t = r.QuoteSession
                    } = e;
                    this._fields = new Set(e.fields), this._session = new t(window.ChartApiInstance, ["snapshoter", e.name, (0, s.randomHash)()].filter(Boolean).join("_")), this._session.connect(this._handler)
                }
                getSnapshotSync(e, t) {
                    const n = d.cache.get(e);
                    return n && this._isSnapshotReady(n, t) ? n : null
                }
                getSnapshotsForAllSync(e, t) {
                    return e.map((e => this.getSnapshotSync(e, t)))
                }
                getSnapshot(e, t, n) {
                    var r;
                    const i = null !== (r = null == n ? void 0 : n.signal) && void 0 !== r ? r : null;
                    return new Promise(((n, r) => {
                        if (i && i.aborted) throw (0, o.createAbortError)();
                        const a = () => {
                                this._onSymbolData.unsubscribe(this, s), r((0, o.createAbortError)())
                            },
                            s = (r = e) => {
                                if (r !== e) return !1;
                                const o = d.cache.get(e);
                                return !(!o || !this._isSnapshotReady(o, t)) && (this._onSymbolData.unsubscribe(this, s), null == i || i.removeEventListener("abort", a), n(o), !0)
                            };
                        if (!s() && (null == i || i.addEventListener("abort", a, {
                                once: !0
                            }), this._onSymbolData.subscribe(this, s), !this._incomplete.has(e))) {
                            if (this._incomplete.add(e), !this._connected) return;
                            if (null === this._batcher) {
                                const t = this._batcher = {
                                    symbols: new Set([e]),
                                    promise: Promise.resolve().then((() => {
                                        this._batcher === t && (this._session.quoteAddSymbols([...t.symbols]), this._batcher = null)
                                    }))
                                }
                            } else this._batcher.symbols.add(e)
                        }
                    }))
                }
                getSnapshotsForAll(e, t, n) {
                    return Promise.all(e.map((e => this.getSnapshot(e, t, n))))
                }
                static relax(e) {
                    return e
                }
                static isSuccess(e) {
                    return "error" !== e.status
                }
                static hasAllFields(e, t) {
                    for (const n of Array.from(t))
                        if (!e.hasOwnProperty(n)) return !1;
                    return !0
                }
                _isSnapshotReady(e, t) {
                    return "error" === e.status || this._hasAllFields(e, t)
                }
                _hasAllFields(e, t) {
                    return d.hasAllFields(e.values, Array.from(t))
                }
                _handleConnected() {
                    if (this._fields.size > 0) {
                        const e = [...this._fields].map((e => {
                            var t;
                            return null !== (t = c.CLIENT_TO_SERVER_FIELD_MAPPING.get(e)) && void 0 !== t ? t : e
                        }));
                        this._session.quoteSetFields(e)
                    }
                    this._incomplete.size > 0 && this._session.quoteAddSymbols([...this._incomplete])
                }
                _handleCompleteData(e) {
                    var t;
                    const n = null !== (t = d.cache.get(e)) && void 0 !== t ? t : {
                        symbolname: e,
                        status: "ok",
                        values: {}
                    };
                    d.cache.update(n, this._fields, !0), this._session.quoteRemoveSymbols([e]),
                        this._incomplete.delete(e), this._onSymbolData.fire(e)
                }
                _handleSymbolData(e) {
                    (0, u.normalizeUpdateMode)(e.values);
                    const t = e.symbolname;
                    d.cache.update(e, this._fields, !1), "error" === e.status ? this._handleCompleteData(t) : this._onSymbolData.fire(t)
                }
            }
            d.cache = l.QUOTE_FIELDS_CACHE
        },
        202339: (e, t, n) => {
            "use strict";
            n.d(t, {
                triesTranslateCountrieName: () => i
            });
            var r = n(777754);

            function i(e) {
                return a.get(e) || e
            }
            const a = new Map([
                ["Africa", r.t(null, void 0, n(655312))],
                ["Americas", r.t(null, void 0, n(958290))],
                ["Asia", r.t(null, void 0, n(161768))],
                ["Europe", r.t(null, void 0, n(559592))],
                ["Pacific", r.t(null, void 0, n(632715))],
                ["Middle East", r.t(null, void 0, n(372560))],
                ["Afghanistan", r.t(null, void 0, n(488561))],
                ["Åland Islands", r.t(null, void 0, n(574177))],
                ["Albania", r.t(null, void 0, n(131898))],
                ["Algeria", r.t(null, void 0, n(181053))],
                ["American Samoa", r.t(null, void 0, n(655410))],
                ["Andorra", r.t(null, void 0, n(682079))],
                ["Angola", r.t(null, void 0, n(476342))],
                ["Anguilla", r.t(null, void 0, n(768063))],
                ["Antarctica", r.t(null, void 0, n(314840))],
                ["Antigua and Barbuda", r.t(null, void 0, n(349809))],
                ["Argentina", r.t(null, void 0, n(834742))],
                ["Armenia", r.t(null, void 0, n(384290))],
                ["Aruba", r.t(null, void 0, n(399659))],
                ["Australia", r.t(null, void 0, n(50132))],
                ["Austria", r.t(null, void 0, n(226505))],
                ["Azerbaijan", r.t(null, void 0, n(751361))],
                ["Bahamas", r.t(null, void 0, n(755169))],
                ["Bahrain", r.t(null, void 0, n(53260))],
                ["Bangladesh", r.t(null, void 0, n(61587))],
                ["Barbados", r.t(null, void 0, n(560803))],
                ["Belarus", r.t(null, void 0, n(909293))],
                ["Belgium", r.t(null, void 0, n(637653))],
                ["Belize", r.t(null, void 0, n(577138))],
                ["Benin", r.t(null, void 0, n(800662))],
                ["Bermuda", r.t(null, void 0, n(852424))],
                ["Bhutan", r.t(null, void 0, n(624751))],
                ["Bolivia", r.t(null, void 0, n(984615))],
                ["Bonaire, Sint Eustatius and Saba", r.t(null, void 0, n(661033))],
                ["Bosnia and Herzegovina", r.t(null, void 0, n(41448))],
                ["Botswana", r.t(null, void 0, n(746406))],
                ["Bouvet Island", r.t(null, void 0, n(896497))],
                ["Brazil", r.t(null, void 0, n(228867))],
                ["British Indian Ocean Territory", r.t(null, void 0, n(660635))],
                ["British Virgin Islands", r.t(null, void 0, n(667354))],
                ["Brunei", r.t(null, void 0, n(660484))],
                ["Bulgaria", r.t(null, void 0, n(801685))],
                ["Burkina Faso", r.t(null, void 0, n(713026))],
                ["Burundi", r.t(null, void 0, n(238912))],
                ["Cabo Verde", r.t(null, void 0, n(996415))],
                ["Cambodia", r.t(null, void 0, n(551054))],
                ["Cameroon", r.t(null, void 0, n(201132))],
                ["Canada", r.t(null, void 0, n(280206))],
                ["Cayman Islands", r.t(null, void 0, n(290207))],
                ["Central African Republic", r.t(null, void 0, n(145112))],
                ["Chad", r.t(null, void 0, n(137093))],
                ["Chile", r.t(null, void 0, n(141840))],
                ["China", r.t(null, void 0, n(420844))],
                ["Christmas Island", r.t(null, void 0, n(180144))],
                ["Cocos (Keeling) Islands", r.t(null, void 0, n(269358))],
                ["Colombia", r.t(null, void 0, n(731144))],
                ["Comoros", r.t(null, void 0, n(408646))],
                ["Congo", r.t(null, void 0, n(601406))],
                ["Congo (the Democratic Republic of the)", r.t(null, void 0, n(167291))],
                ["Cook Islands", r.t(null, void 0, n(453679))],
                ["Curacao", r.t(null, void 0, n(495937))],
                ["Costa Rica", r.t(null, void 0, n(708897))],
                ["Côte d'Ivoire", r.t(null, void 0, n(743648))],
                ["Croatia", r.t(null, void 0, n(663849))],
                ["Cuba", r.t(null, void 0, n(987240))],
                ["Curaçao", r.t(null, void 0, n(289599))],
                ["Cyprus", r.t(null, void 0, n(551017))],
                ["Czechia", r.t(null, void 0, n(471406))],
                ["Czech Republic", r.t(null, void 0, n(342054))],
                ["Denmark", r.t(null, void 0, n(64901))],
                ["Djibouti", r.t(null, void 0, n(439687))],
                ["Dominica", r.t(null, void 0, n(887461))],
                ["Dominican Republic", r.t(null, void 0, n(863314))],
                ["Ecuador", r.t(null, void 0, n(593004))],
                ["Egypt", r.t(null, void 0, n(205390))],
                ["El Salvador", r.t(null, void 0, n(444228))],
                ["Equatorial Guinea", r.t(null, void 0, n(802376))],
                ["Eritrea", r.t(null, void 0, n(33356))],
                ["Estonia", r.t(null, void 0, n(959823))],
                ["Falkland Islands", r.t(null, void 0, n(903181))],
                ["Eswatini", r.t(null, void 0, n(871985))],
                ["Ethiopia", r.t(null, void 0, n(698440))],
                ["European Union", r.t(null, void 0, n(600442))],
                ["Falkland Islands (Malvinas)", r.t(null, void 0, n(464588))],
                ["Faroe Islands", r.t(null, void 0, n(246844))],
                ["Fiji", r.t(null, void 0, n(979981))],
                ["Finland", r.t(null, void 0, n(936693))],
                ["France", r.t(null, void 0, n(696013))],
                ["French Guiana", r.t(null, void 0, n(345206))],
                ["French Polynesia", r.t(null, void 0, n(400778))],
                ["French Southern Territories", r.t(null, void 0, n(35328))],
                ["Gabon", r.t(null, void 0, n(281273))],
                ["Gambia", r.t(null, void 0, n(680793))],
                ["Georgia", r.t(null, void 0, n(118059))],
                ["Germany", r.t(null, void 0, n(159985))],
                ["Ghana", r.t(null, void 0, n(848856))],
                ["Gibraltar", r.t(null, void 0, n(423151))],
                ["Greece", r.t(null, void 0, n(480411))],
                ["Greenland", r.t(null, void 0, n(17026))],
                ["Grenada", r.t(null, void 0, n(882614))],
                ["Guadeloupe", r.t(null, void 0, n(72606))],
                ["Guam", r.t(null, void 0, n(967946))],
                ["Guatemala", r.t(null, void 0, n(673613))],
                ["Guernsey", r.t(null, void 0, n(639445))],
                ["Guinea", r.t(null, void 0, n(236877))],
                ["Guinea-Bissau", r.t(null, void 0, n(193786))],
                ["Guyana", r.t(null, void 0, n(431526))],
                ["Haiti", r.t(null, void 0, n(409073))],
                ["Heard Island and McDonald Islands", r.t(null, void 0, n(941177))],
                ["Holy See", r.t(null, void 0, n(609984))],
                ["Honduras", r.t(null, void 0, n(351863))],
                ["Hong Kong", r.t(null, void 0, n(532918))],
                ["Hungary", r.t(null, void 0, n(930646))],
                ["Iceland", r.t(null, void 0, n(664150))],
                ["India", r.t(null, void 0, n(16207))],
                ["Indonesia", r.t(null, void 0, n(609759))],
                ["Iraq", r.t(null, void 0, n(351834))],
                ["Ireland", r.t(null, void 0, n(328408))],
                ["Isle of Man", r.t(null, void 0, n(582452))],
                ["Israel", r.t(null, void 0, n(261935))],
                ["Italy", r.t(null, void 0, n(43246))],
                ["Jamaica", r.t(null, void 0, n(516243))],
                ["Japan", r.t(null, void 0, n(692443))],
                ["Jersey", r.t(null, void 0, n(119803))],
                ["Jordan", r.t(null, void 0, n(418556))],
                ["Kazakhstan", r.t(null, void 0, n(17904))],
                ["Kenya", r.t(null, void 0, n(89080))],
                ["Kiribati", r.t(null, void 0, n(593442))],
                ["Kosovo", r.t(null, void 0, n(695873))],
                ["Kuwait", r.t(null, void 0, n(872374))],
                ["Kyrgyzstan", r.t(null, void 0, n(357872))],
                ["Laos", r.t(null, void 0, n(446984))],
                ["Latvia", r.t(null, void 0, n(484045))],
                ["Lebanon", r.t(null, void 0, n(249647))],
                ["Lesotho", r.t(null, void 0, n(491338))],
                ["Liberia", r.t(null, void 0, n(244568))],
                ["Libya", r.t(null, void 0, n(687451))],
                ["Liechtenstein", r.t(null, void 0, n(148202))],
                ["Lithuania", r.t(null, void 0, n(529113))],
                ["Luxembourg", r.t(null, void 0, n(164352))],
                ["Macau", r.t(null, void 0, n(881206))],
                ["Macao", r.t(null, void 0, n(316450))],
                ["Madagascar", r.t(null, void 0, n(975621))],
                ["Malawi", r.t(null, void 0, n(652371))],
                ["Malaysia", r.t(null, void 0, n(622622))],
                ["Maldives", r.t(null, void 0, n(704255))],
                ["Mali", r.t(null, void 0, n(410127))],
                ["Malta", r.t(null, void 0, n(334190))],
                ["Marshall Islands", r.t(null, void 0, n(991727))],
                ["Martinique", r.t(null, void 0, n(65413))],
                ["Mauritania", r.t(null, void 0, n(335075))],
                ["Mauritius", r.t(null, void 0, n(902616))],
                ["Mayotte", r.t(null, void 0, n(36227))],
                ["Mexico", r.t(null, void 0, n(555087))],
                ["Micronesia (Federated States of)", r.t(null, void 0, n(178455))],
                ["Moldova", r.t(null, void 0, n(503427))],
                ["Monaco", r.t(null, void 0, n(904982))],
                ["Mongolia", r.t(null, void 0, n(927963))],
                ["Montenegro", r.t(null, void 0, n(990370))],
                ["Montserrat", r.t(null, void 0, n(153868))],
                ["Morocco", r.t(null, void 0, n(216641))],
                ["Mozambique", r.t(null, void 0, n(158266))],
                ["Myanmar", r.t(null, void 0, n(830146))],
                ["Namibia", r.t(null, void 0, n(714417))],
                ["Nauru", r.t(null, void 0, n(223060))],
                ["Nepal", r.t(null, void 0, n(128228))],
                ["Netherlands", r.t(null, void 0, n(353770))],
                ["New Caledonia", r.t(null, void 0, n(748447))],
                ["New Zealand", r.t(null, void 0, n(824143))],
                ["Nicaragua", r.t(null, void 0, n(972215))],
                ["Niger", r.t(null, void 0, n(374005))],
                ["Nigeria", r.t(null, void 0, n(62410))],
                ["Niue", r.t(null, void 0, n(136995))],
                ["Norfolk Island", r.t(null, void 0, n(99203))],
                ["North Macedonia", r.t(null, void 0, n(420385))],
                ["Northern Mariana Islands", r.t(null, void 0, n(498923))],
                ["Norway", r.t(null, void 0, n(145075))],
                ["Oman", r.t(null, void 0, n(552456))],
                ["Pakistan", r.t(null, void 0, n(49145))],
                ["Palau", r.t(null, void 0, n(986532))],
                ["Palestine, State of", r.t(null, void 0, n(103738))],
                ["Panama", r.t(null, void 0, n(747908))],
                ["Papua New Guinea", r.t(null, void 0, n(666802))],
                ["Paraguay", r.t(null, void 0, n(33773))],
                ["Peru", r.t(null, void 0, n(622979))],
                ["Philippines", r.t(null, void 0, n(226813))],
                ["Pitcairn", r.t(null, void 0, n(539338))],
                ["Poland", r.t(null, void 0, n(210119))],
                ["Portugal", r.t(null, void 0, n(123496))],
                ["Puerto Rico", r.t(null, void 0, n(651330))],
                ["Qatar", r.t(null, void 0, n(619056))],
                ["Réunion", r.t(null, void 0, n(102711))],
                ["Romania", r.t(null, void 0, n(385646))],
                ["Russia", r.t(null, void 0, n(230799))],
                ["Russian Federation", r.t(null, void 0, n(238201))],
                ["SINT MAARTEN (DUTCH PART)", r.t(null, void 0, n(262681))],
                ["Rwanda", r.t(null, void 0, n(242890))],
                ["Saint Barthélemy", r.t(null, void 0, n(2679))],
                ["Saint Helena, Ascension and Tristan da Cunha", r.t(null, void 0, n(499829))],
                ["Saint Kitts and Nevis", r.t(null, void 0, n(317639))],
                ["Saint Lucia", r.t(null, void 0, n(174215))],
                ["Saint Martin (French part)", r.t(null, void 0, n(566083))],
                ["Saint Pierre and Miquelon", r.t(null, void 0, n(779773))],
                ["Saint Vincent and the Grenadines", r.t(null, void 0, n(189466))],
                ["Samoa", r.t(null, void 0, n(855735))],
                ["San Marino", r.t(null, void 0, n(935297))],
                ["Sao Tome and Principe", r.t(null, void 0, n(767112))],
                ["Saudi Arabia", r.t(null, void 0, n(936261))],
                ["Senegal", r.t(null, void 0, n(415882))],
                ["Serbia", r.t(null, void 0, n(896573))],
                ["Seychelles", r.t(null, void 0, n(959609))],
                ["Sierra Leone", r.t(null, void 0, n(338217))],
                ["Singapore", r.t(null, void 0, n(156683))],
                ["Sint Maarten (Dutch part)", r.t(null, void 0, n(236150))],
                ["Slovakia", r.t(null, void 0, n(506262))],
                ["Slovenia", r.t(null, void 0, n(42141))],
                ["Solomon Islands", r.t(null, void 0, n(495446))],
                ["Somalia", r.t(null, void 0, n(334373))],
                ["South Africa", r.t(null, void 0, n(528900))],
                ["South Georgia and the South Sandwich Islands", r.t(null, void 0, n(638670))],
                ["South Korea", r.t(null, void 0, n(173160))],
                ["South Sudan", r.t(null, void 0, n(197758))],
                ["Spain", r.t(null, void 0, n(792334))],
                ["Sri Lanka", r.t(null, void 0, n(567835))],
                ["Sudan", r.t(null, void 0, n(162923))],
                ["Suriname", r.t(null, void 0, n(281528))],
                ["Svalbard and Jan Mayen", r.t(null, void 0, n(705904))],
                ["Sweden", r.t(null, void 0, n(182404))],
                ["Switzerland", r.t(null, void 0, n(440414))],
                ["Syria", r.t(null, void 0, n(443174))],
                ["Taiwan", r.t(null, void 0, n(460919))],
                ["Tajikistan", r.t(null, void 0, n(826553))],
                ["Tanzania", r.t(null, void 0, n(185494))],
                ["Thailand", r.t(null, void 0, n(433138))],
                ["Timor-Leste", r.t(null, void 0, n(655802))],
                ["Togo", r.t(null, void 0, n(574871))],
                ["Tokelau", r.t(null, void 0, n(520466))],
                ["Tonga", r.t(null, void 0, n(724580))],
                ["Trinidad and Tobago", r.t(null, void 0, n(333041))],
                ["Tunisia", r.t(null, void 0, n(420638))],
                ["Turkey", r.t(null, void 0, n(694398))],
                ["Turkmenistan", r.t(null, void 0, n(616831))],
                ["Turks and Caicos Islands", r.t(null, void 0, n(555526))],
                ["Tuvalu", r.t(null, void 0, n(626449))],
                ["U.S. Virgin Islands", r.t(null, void 0, n(728542))],
                ["UAE", r.t(null, void 0, n(975308))],
                ["USA", r.t(null, void 0, n(787935))],
                ["Uganda", r.t(null, void 0, n(308395))],
                ["Ukraine", r.t(null, void 0, n(263018))],
                ["United Arab Emirates", r.t(null, void 0, n(287916))],
                ["United Kingdom", r.t(null, void 0, n(606994))],
                ["United States", r.t(null, void 0, n(411176))],
                ["United States Minor Outlying Islands", r.t(null, void 0, n(431860))],
                ["Uruguay", r.t(null, void 0, n(124991))],
                ["USA", r.t(null, void 0, n(787935))],
                ["Uzbekistan", r.t(null, void 0, n(730902))],
                ["Vanuatu", r.t(null, void 0, n(863837))],
                ["Venezuela", r.t(null, void 0, n(739055))],
                ["Vietnam", r.t(null, void 0, n(450049))],
                ["Virgin Islands (British)", r.t(null, void 0, n(159002))],
                ["Virgin Islands (U.S.)", r.t(null, void 0, n(707897))],
                ["Wallis and Futuna", r.t(null, void 0, n(258159))],
                ["Western Sahara", r.t(null, void 0, n(419992))],
                ["Yemen", r.t(null, void 0, n(242175))],
                ["Zambia", r.t(null, void 0, n(239478))],
                ["Zimbabwe", r.t(null, void 0, n(58309))]
            ])
        },
        696828: (e, t, n) => {
            "use strict";
            var r = n(495046),
                i = [{
                    d: "E-Mini S&P 500",
                    t: "ES"
                }, {
                    d: "E-Mini Nasdaq 100",
                    t: "NQ"
                }, {
                    d: "Gold",
                    t: "GC"
                }, {
                    d: "Silver",
                    t: "SI"
                }, {
                    d: "Crude Oil WTI",
                    t: "CL"
                }, {
                    d: "Natural Gas",
                    t: "NG"
                }, {
                    d: "Australian Dollar",
                    t: "6A"
                }, {
                    d: "Australian Dollar (Floor)",
                    t: "AD"
                }, {
                    d: "Euro FX",
                    t: "6E"
                }, {
                    d: "Euro FX (Floor)",
                    t: "EC"
                }, {
                    d: "Corn",
                    t: "ZC"
                }, {
                    d: "Corn (Floor)",
                    t: "C"
                }, {
                    d: "Eurodollar",
                    t: "GE"
                }, {
                    d: "Eurodollar (Floor)",
                    t: "ED"
                }],
                a = function() {
                    var e = [{
                        pattern: "(",
                        ctor: o
                    }, {
                        pattern: ")",
                        ctor: s
                    }, {
                        pattern: "+",
                        ctor: u
                    }, {
                        pattern: "-",
                        ctor: c
                    }, {
                        pattern: "*",
                        ctor: d
                    }, {
                        pattern: "/",
                        ctor: h
                    }, {
                        pattern: "^",
                        ctor: p
                    }, {
                        pattern: /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
                        ctor: f
                    }, {
                        pattern: /\./,
                        ctor: S
                    }, {
                        pattern: r.enabled("charting_library_base") ? /[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF^][a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!:.&]*|'.+?'/ : /[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF][a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&]*|'.+?'/,
                        ctor: g
                    }, {
                        pattern: /'[^']*/,
                        ctor: y
                    }, {
                        pattern: /[\0-\x20\s]+/,
                        ctor: a
                    }];

                    function t(e, t) {
                        var n = function() {};
                        return n.prototype = t.prototype, e.prototype = new n, e
                    }

                    function n() {}

                    function a(e) {
                        this.value = e
                    }

                    function o() {}

                    function s() {}

                    function l() {}

                    function u() {}

                    function c() {}

                    function d() {}

                    function h() {}

                    function p() {}
                    n.prototype.toString = function() {
                        return this.value
                    }, t(a, n), t(o, n), o.prototype.value = "(", t(s, n), s.prototype.value = ")", t(l, n), t(u, l), u.prototype.value = "+", u.prototype.precedence = 0, u.prototype.commutative = !0, t(c, l), c.prototype.value = "-", c.prototype.precedence = 0, c.prototype.commutative = !1, t(d, l), d.prototype.value = "*", d.prototype.precedence = 1, d.prototype.commutative = !0, t(h, l), h.prototype.value = "/", h.prototype.precedence = 1, h.prototype.commutative = !1, t(p, l), p.prototype.value = "^", p.prototype.precedence = 2, p.prototype.commutative = !1;
                    var m = /^'?(?:([A-Z0-9_]+):)?(.*?)'?$/i,
                        v = /[+\-/*]/;

                    function g(e) {
                        this.value = e
                    }

                    function f(e) {
                        this.value = e
                    }

                    function _(e) {
                        this.value = e
                    }

                    function y() {
                        g.apply(this, arguments)
                    }

                    function S() {
                        f.apply(this, arguments)
                    }
                    t(g, n), g.prototype.toString = function() {
                        if (this.hasOwnProperty("_ticker")) {
                            var e = v.test(this._ticker) ? "'" : "";
                            return e + (this._exchange ? this._exchange + ":" : "") + this._ticker + e
                        }
                        return this.value
                    }, g.prototype.parse = function() {
                        var e = m.exec(this.value);
                        e[1] && (this._exchange = e[1]), this._ticker = e[2]
                    }, g.prototype.parseAsFutures = function() {
                        this.hasOwnProperty("_ticker") || this.parse();
                        for (var e = function(e) {
                                return i.some((function(t) {
                                    return t.t === e
                                }))
                            }, t = 2; t >= 1; --t) {
                            var n = this._ticker.slice(0, t);
                            if (e(n)) {
                                this._root = n, this._contract = this._ticker.slice(t);
                                break
                            }
                        }
                    }, g.prototype.exchange = function(e) {
                        if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._exchange;
                        null == e ? delete this._exchange : this._exchange = e + ""
                    }, g.prototype.ticker = function(e) {
                        if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._ticker;
                        null == e ? delete this._ticker : this._ticker = e + "", delete this._root, delete this._contract
                    }, g.prototype.root = function(e) {
                        if (this.hasOwnProperty("_root") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
                        null == e ? delete this._root : (this._root = e + "",
                            this._root && (this._ticker = this._root + (this._contract || "")))
                    }, g.prototype.contract = function(e) {
                        if (this.hasOwnProperty("_contract") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
                        null == e ? delete this._contract : (this._contract = e + "", this._root && (this._ticker = this._root + this._contract))
                    }, t(f, n), f.prototype.toString = function() {
                        return this.hasOwnProperty("_normalizedValue") ? this._normalizedValue : this.value
                    }, f.prototype.parse = function() {
                        this._normalizedValue = this.value.replace(/^0+|\.0*$/g, "").replace(/(\.\d*?)0+$/, "$1").replace(/^(\.|$)/, "0$1")
                    }, _.prototype.toString = function() {
                        return this.value
                    }, t(y, g), y.prototype.isIncomplete = !0, y.prototype.incompleteSuggest = function() {
                        if ("'" !== this.value) return String("'")
                    }, t(S, f), S.prototype.isIncomplete = !0;
                    var E = new RegExp(e.map((function(e) {
                        return "(" + ("string" == typeof e.pattern ? e.pattern.replace(/[\^$()[\]{}*+?|\\]/g, "\\$&") : e.pattern.source) + ")"
                    })).concat(".").join("|"), "g");

                    function b(t, n) {
                        var r, i = [];
                        e: for (; r = E.exec(t);) {
                            for (var o = e.length; o--;)
                                if (r[o + 1]) {
                                    if (e[o].ctor) {
                                        var s = new e[o].ctor(r[o + 1]);
                                        s._offset = r.index, i.push(s)
                                    }
                                    continue e
                                }
                            var l = new _(r[0]);
                            l._offset = r.index, i.push(l)
                        }
                        if (n && n.recover) {
                            var u;
                            for (o = i.length; o--;) {
                                var c = i[o];
                                if (c instanceof f || c instanceof g) {
                                    if (void 0 !== u) {
                                        var d = new g(""),
                                            h = i.splice(o, u - o + 1, d);
                                        d.value = h.map((function(e) {
                                            return e.value
                                        })).join("")
                                    }
                                    u = o
                                } else c instanceof a || (u = void 0)
                            }
                        }
                        return i
                    }

                    function T(e) {
                        for (var t = [], n = 0; n < e.length; n++) e[n] instanceof a || t.push(e[n]);
                        return t
                    }

                    function I(e) {
                        e = T(e);
                        for (var t, n = [], r = [], i = 0; i < e.length; i++) {
                            var a = e[i];
                            if (a instanceof l) r.length && r[r.length - 1].minPrecedence > a.precedence && (r[r.length - 1].minPrecedence = a.precedence);
                            else if (a instanceof o) r.push(t = {
                                minPrecedence: 1 / 0,
                                openBraceIndex: i
                            });
                            else if (a instanceof s) {
                                var u = e[(t = r.pop()).openBraceIndex - 1],
                                    c = e[i + 1];
                                c instanceof l && !(c.precedence <= t.minPrecedence) || !(!(u instanceof l) || u.precedence < t.minPrecedence || u.precedence === t.minPrecedence && u.commutative) || (n.unshift(t.openBraceIndex), n.push(i), r.length && r[r.length - 1].minPrecedence > t.minPrecedence && (r[r.length - 1].minPrecedence = t.minPrecedence))
                            }
                        }
                        for (i = n.length; i--;) e.splice(n[i], 1);
                        return e
                    }

                    function k(e) {
                        if ("string" != typeof e) throw new TypeError("expression must be a string");
                        return (e = b(e)).filter((function(e) {
                            return e instanceof g
                        })).map((function(e) {
                            return e.exchange()
                        })).filter((function(e) {
                            return e
                        }))
                    }

                    function C(e) {
                        return 1 !== (e = k(e)).length ? null : e[0]
                    }

                    function N(e, t) {
                        return (e = k(e)).some((function(e) {
                            return t.includes((e || "").toUpperCase())
                        }))
                    }

                    function w(e) {
                        return e.join("")
                    }
                    return {
                        tokenize: b,
                        validate: function(e) {
                            if (r.enabled("charting_library_base")) return {
                                currentState: "var"
                            };
                            for (var t = "init", n = "var", i = t, u = {
                                    warnings: [],
                                    errors: [],
                                    isEmpty: !0
                                }, c = [], d = 0; d < e.length; d++) {
                                if (!((p = e[d]) instanceof a)) {
                                    if (delete u.isEmpty, p.isIncomplete) {
                                        var h = {
                                            status: "incomplete",
                                            reason: "incomplete_token",
                                            offset: p._offset,
                                            token: p
                                        };
                                        if (p.incompleteSuggest && (h.recover = {
                                                append: p.incompleteSuggest()
                                            }), u.warnings.push(h), d !== e.length - 1) {
                                            h.status = "error";
                                            continue
                                        }
                                    }
                                    if (p instanceof g || p instanceof f) {
                                        if (i === n) {
                                            u.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: p._offset,
                                                token: p
                                            });
                                            continue
                                        }
                                        i = n
                                    } else if (p instanceof l) {
                                        if (i !== n) {
                                            u.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: p._offset,
                                                token: p
                                            });
                                            continue
                                        }
                                        i = "operator"
                                    } else if (p instanceof o) {
                                        if (i === n) {
                                            u.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: p._offset,
                                                token: p
                                            });
                                            continue
                                        }
                                        c.push(p), i = t
                                    } else if (p instanceof s) {
                                        if (i !== n) {
                                            u.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: p._offset,
                                                token: p
                                            });
                                            continue
                                        }
                                        c.pop() || u.errors.push({
                                            status: "error",
                                            reason: "unbalanced_brace",
                                            offset: p._offset,
                                            token: p,
                                            recover: {
                                                prepend: new o
                                            }
                                        }), i = n
                                    } else p instanceof _ && u.errors.push({
                                        status: "error",
                                        reason: "unparsed_entity",
                                        offset: p._offset,
                                        token: p
                                    })
                                }
                            }
                            for (u.braceBalance = c.length, i !== n && u.warnings.push({
                                    status: "incomplete"
                                }); c.length;) {
                                var p;
                                h = {
                                    status: "incomplete",
                                    reason: "unbalanced_brace",
                                    offset: (p = c.pop())._offset,
                                    token: p
                                };
                                i === n && (h.recover = {
                                    append: new s
                                }), u.warnings.push(h)
                            }
                            return u.currentState = i, 0 === u.warnings.length && delete u.warnings, 0 === u.errors.length && delete u.errors, u
                        },
                        factorOutBraces: I,
                        normalizeTokens: function(e) {
                            for (var t = 0; t < e.length; t++) e[t].parse && e[t].parse();
                            return e
                        },
                        flip: function(e) {
                            var t = function(e) {
                                for (var t, n = 0, r = 1, i = 2, u = 3, c = n, d = 0, p = 0; p < e.length; p++) {
                                    var m = e[p];
                                    if (!(m instanceof a)) switch (c) {
                                        case n:
                                            if (!(m instanceof f && 1 == +m.value)) return !1;
                                            c = r;
                                            break;
                                        case r:
                                            if (!(c === r && m instanceof h)) return !1;
                                            c = i, t = p + 1;
                                            break;
                                        case i:
                                            if (m instanceof o) c = u, d = 1;
                                            else if (m instanceof l) return !1;
                                            break;
                                        case u:
                                            m instanceof o ? d++ : m instanceof s && --d <= 0 && (c = i)
                                    }
                                }
                                return e.slice(t)
                            }(e);
                            return I(t || [new f("1"), new h, new o].concat(e).concat(new s))
                        },
                        hasBatsSymbols: function(e) {
                            return N(e, ["BATS"])
                        },
                        hasEodSymbols: function(e) {
                            return (e = C(e)) && -1 !== e.toUpperCase().indexOf("_EOD")
                        },
                        hasChxjpySymbols: function(e) {
                            return N(e, ["CHXJPY"])
                        },
                        hasFreeDelaySymbols: function(e) {
                            return N(e, pro.getProductsByType(pro.PRODUCT_TYPES.exchange).map((function(e) {
                                return e.exchange.toUpperCase() + "_DLY"
                            })))
                        },
                        getExchange: C,
                        getExchanges: k,
                        isExchange: function(e, t) {
                            return !!(e = C(e)) && e.substring(0, t.length) === t
                        },
                        SymbolToken: g,
                        IncompleteSymbolToken: y,
                        NumberToken: f,
                        BinaryOperatorToken: l,
                        OpenBraceToken: o,
                        CloseBraceToken: s,
                        ticker: function(e) {
                            return new g(e).ticker()
                        },
                        shortName: function(e) {
                            if ("string" != typeof e) throw new TypeError("expression must be a string");
                            var t = I(T(b(e)));
                            return t.forEach((function(e) {
                                e instanceof g && e.exchange(null)
                            })), w(t)
                        },
                        normalize: function(e) {
                            if ("string" != typeof e) throw new TypeError("expression must be a string");
                            return w(I(T(b(e))))
                        }
                    }
                }();
            e.exports = a
        },
        898930: (e, t, n) => {
            "use strict";
            n.d(t, {
                VerticalAttachEdge: () => r,
                HorizontalAttachEdge: () => i,
                VerticalDropDirection: () => a,
                HorizontalDropDirection: () => o,
                getPopupPositioner: () => u
            });
            var r, i, a, o, s = n(650151);
            ! function(e) {
                e[e.Top = 0] = "Top", e[e.Bottom = 1] = "Bottom"
            }(r || (r = {})),
            function(e) {
                e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
            }(i || (i = {})),
            function(e) {
                e[e.FromTopToBottom = 0] = "FromTopToBottom", e[e.FromBottomToTop = 1] = "FromBottomToTop"
            }(a || (a = {})),
            function(e) {
                e[e.FromLeftToRight = 0] = "FromLeftToRight", e[e.FromRightToLeft = 1] = "FromRightToLeft"
            }(o || (o = {}));
            const l = {
                verticalAttachEdge: r.Bottom,
                horizontalAttachEdge: i.Left,
                verticalDropDirection: a.FromTopToBottom,
                horizontalDropDirection: o.FromLeftToRight,
                verticalMargin: 0,
                horizontalMargin: 0,
                matchButtonAndListboxWidths: !1
            };

            function u(e, t) {
                return (n, u) => {
                    const c = (0, s.ensureNotNull)(e).getBoundingClientRect(),
                        {
                            verticalAttachEdge: d = l.verticalAttachEdge,
                            verticalDropDirection: h = l.verticalDropDirection,
                            horizontalAttachEdge: p = l.horizontalAttachEdge,
                            horizontalDropDirection: m = l.horizontalDropDirection,
                            horizontalMargin: v = l.horizontalMargin,
                            verticalMargin: g = l.verticalMargin,
                            matchButtonAndListboxWidths: f = l.matchButtonAndListboxWidths
                        } = t,
                        _ = d === r.Top ? -1 * g : g,
                        y = p === i.Right ? c.right : c.left,
                        S = d === r.Top ? c.top : c.bottom,
                        E = {
                            x: y - (m === o.FromRightToLeft ? n : 0) + v,
                            y: S - (h === a.FromBottomToTop ? u : 0) + _
                        };
                    return f && (E.overrideWidth = c.width), E
                }
            }
        },
        310399: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                Action: () => l,
                ActionAsync: () => u,
                Separator: () => c,
                Loader: () => d
            });
            var r = n(650151),
                i = n(869403),
                a = n.n(i),
                o = n(470316),
                s = n(777491);
            class l {
                constructor(e, t = s.guid()) {
                    this.type = "action", this._destroyed = !1, this._binding = null, (0, r.assert)(void 0 !== e.actionId, "actionId must be defined"), this.id = t, this._onUpdate = new(a()), this._options = e, this.update(e)
                }
                execute() {
                    this._options.checkable && this.update({
                        checked: !this._options.checked
                    }), this._options.onExecute && this._options.onExecute(this)
                }
                getLabel() {
                    return this._options.label || ""
                }
                getSubItems() {
                    return this._options.subItems || []
                }
                isDisabled() {
                    return !0 === this._options.disabled
                }
                isActive() {
                    return !0 === this._options.active
                }
                isCheckable() {
                    return !0 === this._options.checkable
                }
                isChecked() {
                    return !0 === this._options.checked
                }
                isLoading() {
                    return !0 === this._options.loading
                }
                getSize() {
                    var e;
                    return null !== (e = this._options.size) && void 0 !== e ? e : "normal"
                }
                getPayload() {
                    return this._options.payload
                }
                update(e) {
                    this._destroyed || (this._unbindShortcut(), e.hotkeyHash && (this._options.shortcutHint = (0, o.humanReadableHash)(e.hotkeyHash)), this._options = Object.assign(this._options, e), this._bindShortcut(), this._onUpdate.fire(this))
                }
                onUpdate() {
                    return this._onUpdate
                }
                getState() {
                    return {
                        actionId: this._options.actionId,
                        label: this.getLabel(),
                        disabled: this.isDisabled(),
                        active: this.isActive(),
                        subItems: this.getSubItems(),
                        checkable: this.isCheckable(),
                        checked: this.isChecked(),
                        loading: this.isLoading(),
                        size: this.getSize(),
                        doNotCloseOnClick: this._options.doNotCloseOnClick || !1,
                        shortcutHint: this._options.shortcutHint,
                        hint: this._options.hint,
                        icon: this._options.icon,
                        iconChecked: this._options.iconChecked,
                        toolbox: this._options.toolbox,
                        showToolboxOnHover: this._options.showToolboxOnHover || !1,
                        statName: this._options.statName,
                        name: this._options.name,
                        invisibleHotkey: this._options.invisibleHotkey,
                        noInteractive: this._options.noInteractive
                    }
                }
                getBinding() {
                    return this._binding
                }
                setBinding(e) {
                    this._binding = e
                }
                destroy() {
                    var e, t;
                    this._destroyed = !0, this._onUpdate.destroy(), null !== this._binding && this._binding.destroy(), this._unbindShortcut(), null === (t = (e = this._options).onDestroy) || void 0 === t || t.call(e)
                }
                options() {
                    return this._options
                }
                _bindShortcut() {
                    if (!this._options.hotkeyGroup || !this._options.hotkeyHash) return;
                    const e = "string" == typeof this._options.label ? this._options.label : this._options.name;
                    this._hotkeyAction = this._options.hotkeyGroup.add({
                        hotkey: this._options.hotkeyHash,
                        desc: e,
                        handler: () => this.execute(),
                        isDisabled: () => this.isDisabled()
                    })
                }
                _unbindShortcut() {
                    this._hotkeyAction && (this._hotkeyAction.destroy(), delete this._hotkeyAction)
                }
            }
            class u extends l {
                constructor(e, t, n) {
                    super({
                        actionId: e
                    }, n), this._loader = t, this._loaded = !1
                }
                loadOptions() {
                    return this._loadingPromise || (this._loadingPromise = this._loader().then((e => {
                        this._loaded = !0, this.update(e)
                    }))), this._loadingPromise
                }
                getState() {
                    return this.loadOptions(), super.getState()
                }
                isLoading() {
                    return !this.isLoaded()
                }
                isLoaded() {
                    return this._loaded
                }
            }
            class c {
                constructor(e) {
                    this.type = "separator", this.id = s.guid(), this._hint = e
                }
                getHint() {
                    return this._hint
                }
            }
            class d extends l {
                constructor(e) {
                    super({
                        actionId: e
                    })
                }
                isLoading() {
                    return !0
                }
                getSize() {
                    return "big"
                }
            }
        },
        973580: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                TVAction: () => i,
                TVActionAsync: () => a,
                TVLoader: () => o
            });
            var r = n(310399);
            class i extends r.Action {
                constructor(e, t) {
                    super({ ...e,
                        actionId: "TVActionId"
                    }, t)
                }
                getState() {
                    return { ...super.getState(),
                        jsxLabel: this._options.jsxLabel
                    }
                }
            }
            class a extends r.ActionAsync {
                constructor(e) {
                    super("TVActionId", e)
                }
            }
            class o extends i {
                constructor() {
                    super({})
                }
                isLoading() {
                    return !0
                }
                getSize() {
                    return "big"
                }
            }
        },
        272473: (e, t, n) => {
            "use strict";
            n.d(t, {
                DELAY_WITHOUT_AGREEMENT: () => d,
                isBats: () => h,
                firstReplacedByBatsExchange: () => p,
                isEod: () => m,
                isYield: () => v,
                isDelay: () => g,
                witoutRealtime: () => f,
                isTickByTick: () => _,
                isDelayForGuest: () => y,
                isDelayWithoutMarketAgreement: () => S,
                getExchange: () => E
            });
            var r = n(650151),
                i = n(696828),
                a = n.n(i),
                o = n(833813),
                s = n(632446),
                l = n(720444);
            const u = ["DJ", "CBOE", "JSE"],
                c = ["NZX"],
                d = ["ICESG"];

            function h(e) {
                return a().hasBatsSymbols(e.full_name)
            }

            function p(e) {
                const t = a().getExchanges(e.pro_name),
                    n = a().getExchanges(e.full_name);
                for (let e = 0; e < n.length; ++e)
                    if ("BATS" === n[e].toUpperCase()) return t[e];
                return null
            }

            function m(e, t) {
                return a().hasEodSymbols(e.full_name) || 6 === t
            }

            function v(e) {
                var t;
                return Boolean(null === (t = e.typespecs) || void 0 === t ? void 0 : t.includes("yield"))
            }

            function g(e) {
                return void 0 !== e && e > 0
            }

            function f(e) {
                return "index" === e.type && u.includes(e.listed_exchange) || "futures" === e.type && c.includes(e.listed_exchange)
            }

            function _(e, t) {
                return !((0, s.enabled)(o.ProductFeatures.TICK_BY_TICK_PUSH_DATA) || g(e.delay) || m(e, t) || (0, l.isCryptoSymbol)(e))
            }

            function y(e, t) {
                return t.listed_exchange === e && !window.is_authenticated
            }

            function S(e) {
                return d.includes(e.listed_exchange)
            }
            async function E(e) {
                {
                    const t = (0, r.ensureDefined)(window.pro);
                    await new Promise((e => {
                        t.runOrUpdate(e)
                    }));
                    const n = t.getProduct(function(e) {
                            return `exchange-${e.pro_perm}`
                        }(e)),
                        i = function(e) {
                            let t;
                            if (!window.pro) throw new Error("Pro module not defined");
                            t = window.pro.getProductsByType(window.pro.PRODUCT_TYPES.exchange).find((t => Boolean(t.included_exchanges && t.included_exchanges.includes(e))));
                            return t || null
                        }(n.exchange || "");
                    return i && "cme-full" === i.exchange ? n : i || n
                }
            }
        },
        547e3: (e, t, n) => {
            "use strict";
            n.d(t, {
                canShowSpreadActions: () => i,
                globalKeypressMatches: () => a
            });
            n(495046), n(991826),
                n(583912);
            var r = n(516986);
            new RegExp("^" + r.types.QUANDL, "i");

            function i() {
                let e = !1;
                return e = "cme" !== window.TradingView.widgetCustomer && "bovespa" !== window.TradingView.widgetCustomer, e
            }

            function a(e) {
                if (e.ctrlKey) return !1;
                if (e.metaKey) return !1;
                if (!e.charCode) return !1;
                if (!e.which || e.which <= 32) return !1;
                const t = e.target;
                if (t && (/^(input|textarea)$/i.test(t.tagName) || "listbox" === t.getAttribute("role"))) return !1; {
                    const e = n.c[839694];
                    if (e && e.exports.isOpenedModals()) return !1
                }
                return !0
            }
        },
        136916: (e, t, n) => {
            "use strict";
            var r, i, a, o, s, l, u, c, d, h, p, m, v, g, f;
            n.r(t), n.d(t, {
                    CONNECTSTATUSES: () => r,
                    ORDERTYPE: () => i,
                    SIDE: () => a,
                    ORDERSTATUS: () => o,
                    ORDERSTATUSFILTER: () => s,
                    TradingEntityType: () => l,
                    PARENTTYPE: () => u,
                    BracketType: () => c,
                    TICKETFOCUS: () => d,
                    NOTIFICATION: () => h,
                    OrderOrPositionMessageType: () => p,
                    AccountType: () => m,
                    DisconnectType: () => v,
                    PipValueType: () => g,
                    RestrictionType: () => f
                }),
                function(e) {
                    e[e.CONNECTED = 1] = "CONNECTED", e[e.CONNECTING = 2] = "CONNECTING", e[e.DISCONNECTED = 3] = "DISCONNECTED", e[e.ERROR = 4] = "ERROR"
                }(r || (r = {})),
                function(e) {
                    e[e.LIMIT = 1] = "LIMIT", e[e.MARKET = 2] = "MARKET", e[e.STOP = 3] = "STOP", e[e.STOPLIMIT = 4] = "STOPLIMIT"
                }(i || (i = {})),
                function(e) {
                    e[e.BUY = 1] = "BUY", e[e.SELL = -1] = "SELL"
                }(a || (a = {})),
                function(e) {
                    e[e.CANCELED = 1] = "CANCELED", e[e.FILLED = 2] = "FILLED", e[e.INACTIVE = 3] = "INACTIVE", e[e.PLACING = 4] = "PLACING", e[e.REJECTED = 5] = "REJECTED", e[e.WORKING = 6] = "WORKING"
                }(o || (o = {})),
                function(e) {
                    e[e.ALL = 0] = "ALL", e[e.CANCELED = 1] = "CANCELED", e[e.FILLED = 2] = "FILLED", e[e.INACTIVE = 3] = "INACTIVE", e[e.REJECTED = 5] = "REJECTED", e[e.WORKING = 6] = "WORKING"
                }(s || (s = {})),
                function(e) {
                    e[e.Order = 1] = "Order", e[e.Position = 2] = "Position"
                }(l || (l = {})),
                function(e) {
                    e[e.ORDER = 1] = "ORDER", e[e.POSITION = 2] = "POSITION"
                }(u || (u = {})),
                function(e) {
                    e[e.StopLoss = 0] = "StopLoss", e[e.TakeProfit = 1] = "TakeProfit", e[e.TrailingStop = 2] = "TrailingStop"
                }(c || (c = {})),
                function(e) {
                    e[e.LIMITPRICE = 1] = "LIMITPRICE", e[e.STOPPRICE = 2] = "STOPPRICE", e[e.TAKEPROFIT = 3] = "TAKEPROFIT", e[e.STOPLOSS = 4] = "STOPLOSS"
                }(d || (d = {})),
                function(e) {
                    e[e.ERROR = 0] = "ERROR", e[e.SUCCESS = 1] = "SUCCESS"
                }(h || (h = {})),
                function(e) {
                    e.Information = "information", e.Warning = "warning", e.Error = "error"
                }(p || (p = {})),
                function(e) {
                    e.Demo = "demo", e.Live = "live"
                }(m || (m = {})),
                function(e) {
                    e[e.LogOut = 0] = "LogOut", e[e.FailedRestoring = 1] = "FailedRestoring", e[e.Offline = 2] = "Offline", e[e.APIError = 3] = "APIError", e[e.TwoFactorRequired = 4] = "TwoFactorRequired", e[e.CancelAuthorization = 5] = "CancelAuthorization", e[e.TimeOutForAuthorization = 6] = "TimeOutForAuthorization", e[e.OauthError = 7] = "OauthError", e[e.BrokenConnection = 8] = "BrokenConnection"
                }(v || (v = {})),
                function(e) {
                    e[e.None = 0] = "None", e[e.Pips = 1] = "Pips", e[e.Ticks = 2] = "Ticks"
                }(g || (g = {})),
                function(e) {
                    e.Halted = "HALTED", e.NotShortable = "NOT-SHORTABLE", e.HardToBorrow = "HARD-TO-BORROW"
                }(f || (f = {}))
        },
        893271: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                TRADING_SERVICE: () => i,
                tradingService: () => a,
                waitTradingService: () => o
            });
            var r = n(564894);
            const i = {
                id: "TradingService"
            };

            function a() {
                return (0, r.hasService)(i) ? (0, r.service)(i) : null
            }

            function o() {
                return (0, r.waitServiceRegistered)(i)
            }
        },
        824317: (e, t, n) => {
            "use strict";

            function r(e) {
                return e ? ["AMEX"].includes(e) ? "Arca" : ["NYSE ARCA & MKT"].includes(e) ? "NYSE Arca" : e : ""
            }
            n.d(t, {
                redefineExchangeName: () => r
            })
        },
        991826: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                normalizeIntervalString: () => y,
                isAvailable: () => S,
                setLastUsedResolution: () => E,
                getRangeResolution: () => b,
                getTimeBasedResolution: () => T,
                getDefaultResolution: () => I,
                getResolutionByChartStyle: () => k,
                getApplicableIntervalForFrequency: () => C,
                getServerInterval: () => N,
                isResolutionMultiplierValid: () => w,
                getMaxResolutionValue: () => A,
                getResolutionsFromSettings: () => M,
                convertResolutionsFromSettings: () => z,
                mergeResolutions: () => x,
                sortResolutions: () => D,
                compareResolutions: () => U,
                getCustomResolutions: () => P,
                getTranslatedResolution: () => O,
                getTranslatedResolutionModel: () => B,
                isSecondsEnabled: () => F,
                isTicksEnabled: () => W,
                isIntervalEnabled: () => j,
                parseIntervalValue: () => K,
                intervalIsSupported: () => G
            });
            var r = n(777754),
                i = n(568450),
                a = n(720444),
                o = n(62802),
                s = n(583912),
                l = n(588565),
                u = n(638456),
                c = n(125226),
                d = n(758337),
                h = n(495046);
            const p = [1, 5, 10, 15, 30],
                m = [1, 10, 100, 1e3],
                v = (0, c.isFeatureEnabled)("tick_intervals") && !(0, u.onWidget)(),
                g = {
                    [i.ResolutionKind.Ticks]: 1,
                    [i.ResolutionKind.Seconds]: 60,
                    [i.ResolutionKind.Minutes]: 1440,
                    [i.SpecialResolutionKind.Hours]: 24,
                    [i.ResolutionKind.Days]: 365,
                    [i.ResolutionKind.Weeks]: 52,
                    [i.ResolutionKind.Months]: 12,
                    [i.ResolutionKind.Range]: 1e6,
                    [i.ResolutionKind.Invalid]: NaN
                },
                f = {
                    [i.ResolutionKind.Ticks]: 0,
                    [i.ResolutionKind.Seconds]: 1,
                    [i.ResolutionKind.Minutes]: 2,
                    [i.SpecialResolutionKind.Hours]: 3,
                    [i.ResolutionKind.Days]: 4,
                    [i.ResolutionKind.Weeks]: 5,
                    [i.ResolutionKind.Months]: 6,
                    [i.ResolutionKind.Range]: 7,
                    [i.ResolutionKind.Invalid]: 8
                },
                _ = {
                    [i.ResolutionKind.Invalid]: "",
                    [i.ResolutionKind.Ticks]: r.t(null, {
                        context: "interval_short"
                    }, n(959231)),
                    [i.ResolutionKind.Seconds]: r.t(null, {
                        context: "interval_short"
                    }, n(2949)),
                    [i.ResolutionKind.Minutes]: r.t(null, {
                        context: "interval_short"
                    }, n(806791)),
                    [i.SpecialResolutionKind.Hours]: r.t(null, {
                        context: "interval_short"
                    }, n(113994)),
                    [i.ResolutionKind.Days]: r.t(null, {
                        context: "interval_short"
                    }, n(713395)),
                    [i.ResolutionKind.Weeks]: r.t(null, {
                        context: "interval_short"
                    }, n(185521)),
                    [i.ResolutionKind.Months]: r.t(null, {
                        context: "interval_short"
                    }, n(137720)),
                    [i.ResolutionKind.Range]: r.t(null, {
                        context: "interval_short"
                    }, n(269838))
                };

            function y(e) {
                return i.Interval.parse(e).value()
            }

            function S(e) {
                const t = i.Interval.parse(e);
                if (t.isRange()) return s.linking.range.value();
                const n = t.value(),
                    r = s.linking.dataFrequencyResolution.value();
                if (void 0 !== r && U(n, r) < 0) return !1;
                const a = s.linking.supportedResolutions.value();
                return void 0 !== a ? void 0 !== a.find((e => y(e) === n)) : t.isIntraday() ? Boolean(s.linking.intraday.value()) : t.isDWM()
            }

            function E(e) {
                i.Interval.isValid(e) && (i.Interval.isRange(e) ? o.setValue("chart.lastUsedRangeResolution", e) : o.setValue("chart.lastUsedTimeBasedResolution", e))
            }

            function b(e) {
                const t = o.getValue("chart.lastUsedRangeResolution");
                if (void 0 !== t && i.Interval.isRange(t)) return t;
                let n = "100R";
                for (const t of e) {
                    const e = i.Interval.parse(t);
                    if (e.isRange()) {
                        const t = e.value();
                        if ("100R" === t) return t;
                        n = t
                    }
                }
                return n
            }

            function T(e) {
                const t = o.getValue("chart.lastUsedTimeBasedResolution");
                if (void 0 !== t && i.Interval.isTimeBased(t)) return t;
                let n = "1D";
                for (const t of e) {
                    const e = i.Interval.parse(t);
                    if (e.isTimeBased()) {
                        const t = e.value();
                        if ("1D" === t) return t;
                        n = t
                    }
                }
                return n
            }

            function I(e) {
                return e ? "100R" : "1D"
            }

            function k(e, t, n) {
                const r = a.isRangeStyle(e),
                    o = i.Interval.isRange(t);
                return !r && o ? T(n) : r && !o ? b(n) : t
            }

            function C(e, t) {
                return U(t, e) >= 0 ? t : e
            }

            function N(e) {
                return i.Interval.isRange(e) ? "1" : e
            }

            function w(e) {
                const {
                    interval: t,
                    guiResolutionKind: n
                } = i.Interval.parseExt(e);
                if (!t.isValid()) return !1;
                const r = t.multiplier();
                if (n === i.ResolutionKind.Seconds) return p.includes(r);
                if (v && n === i.ResolutionKind.Ticks) return m.includes(r);
                return (n === i.SpecialResolutionKind.Hours ? r / 60 : r) <= L(n)
            }

            function L(e) {
                const t = g[e];
                return Number.isNaN(t) ? 1 : t
            }

            function A(e) {
                return L(i.Interval.parseExt(e).guiResolutionKind)
            }

            function M(e) {
                const t = z(o.getJSON(e, []));
                return (0, l.uniq)(t.filter(w).map(y))
            }

            function z(e) {
                return Array.isArray(e) ? e : Object.keys(e).map(i.Interval.normalize).filter(d.notNull)
            }

            function x(...e) {
                let t = [].concat(...e);
                return t = (0, l.uniq)(t.filter(w).map(y)), D(t)
            }

            function D(e) {
                return e.sort(U)
            }

            function R(e) {
                const t = i.Interval.parse(e),
                    n = t.multiplier() || 1;
                return t.isMinuteHours() ? [i.SpecialResolutionKind.Hours, n / 60] : [t.kind(), n]
            }

            function U(e, t) {
                if (e === t) return 0;
                const [n, r] = R(e), [i, a] = R(t);
                return n !== i ? f[n] - f[i] : r - a
            }

            function P() {
                let e = [];
                return window.user.is_pro && (e = M("IntervalWidget.intervals")), e
            }

            function O(e) {
                const {
                    multiplier: t,
                    shortKind: n
                } = B(e);
                return `${t}${n}`
            }

            function B(e, t) {
                const n = i.Interval.parse(e);
                let r = n.multiplier(),
                    a = n.kind();
                if (!n.isValid()) {
                    if (t) return null;
                    throw new TypeError("Can't translate invalid interval")
                }
                return n.isMinuteHours() && (r = Math.floor(r / 60), a = i.SpecialResolutionKind.Hours), {
                    multiplier: r.toString(),
                    shortKind: H(a),
                    hint: `${r} ${H(a,r)}`,
                    mayOmitMultiplier: n.isDWM() && 1 === r,
                    mayOmitShortKind: n.isMinutes() && !n.isMinuteHours()
                }
            }

            function H(e, t) {
                if (!t) return _[e];
                switch (e) {
                    case i.ResolutionKind.Ticks:
                        return r.t(null, {
                            plural: "ticks",
                            count: t
                        }, n(699136));
                    case i.ResolutionKind.Days:
                        return r.t(null, {
                            plural: "days",
                            count: t
                        }, n(730572));
                    case i.ResolutionKind.Weeks:
                        return r.t(null, {
                            plural: "weeks",
                            count: t
                        }, n(947966));
                    case i.ResolutionKind.Months:
                        return r.t(null, {
                            plural: "months",
                            count: t
                        }, n(99062));
                    case i.ResolutionKind.Seconds:
                        return r.t(null, {
                            plural: "seconds",
                            count: t
                        }, n(671787));
                    case i.ResolutionKind.Minutes:
                        return r.t(null, {
                            plural: "minutes",
                            count: t
                        }, n(569143));
                    case i.SpecialResolutionKind.Hours:
                        return r.t(null, {
                            plural: "hours",
                            count: t
                        }, n(52254));
                    case i.ResolutionKind.Range:
                        return r.t(null, {
                            plural: "ranges",
                            count: t
                        }, n(682797));
                    default:
                        return e
                }
            }

            function F() {
                return !0
            }

            function W() {
                return v
            }

            function j(e) {
                return !0
            }

            function K(e) {
                let t;
                t = v ? /^[,\s]*(^[1-9][0-9]*)?\s*([hdwmsrt]?)\s*$/i : /^[,\s]*(^[1-9][0-9]*)?\s*([hdwmsr]?)\s*$/i;
                const n = t.exec(e) || [],
                    r = ~~n[1],
                    i = n[2] && n[2].toUpperCase() || null,
                    a = {
                        qty: !r && i ? 1 : r,
                        unit: i
                    };
                return a.error = !r && !i, a.intraday = !(a.error || a.unit && "H" !== a.unit && "S" !== a.unit && "T" !== a.unit), a.range = "R" === a.unit, a
            }

            function G(e) {
                if (h.enabled("allow_supported_resolutions_set_only")) {
                    const t = i.Interval.normalize(e);
                    return null !== t && S(t)
                } {
                    const t = K(e);
                    if (t.error) return !1;
                    if (!h.enabled("custom_resolutions")) {
                        const t = i.Interval.normalize(e),
                            n = window.ChartApiInstance.defaultResolutions().filter(j);
                        if (!t || -1 === n.indexOf(t)) return !1
                    }
                    const n = s.linking.dataFrequencyResolution.value();
                    if (void 0 !== n && null !== t.unit && C(n, t.unit) !== t.unit) return !1;
                    if (t.range) return s.linking.range.value();
                    if (t.intraday) return s.linking.intraday.value(); {
                        const e = s.linking.supportedResolutions.value();
                        return !e || null !== t.unit && !!~e.indexOf(t.unit)
                    }
                }
            }
        },
        36715: (e, t, n) => {
            "use strict";
            n.d(t, {
                isCurrencySymbol: () => i
            });
            var r = n(519073);

            function i(e, t) {
                return "forex" === e || (0, r.hasCryptoTypespec)(e, null != t ? t : [])
            }
        },
        812191: (e, t, n) => {
            "use strict";
            n.d(t, {
                getSymbolPagePath: () => s,
                makeSymbolChartUrl: () => v,
                makeSymbolFinancialsPageUrl: () => g,
                makeSymbolPageUrl: () => m,
                makeSymbolTimelinePageUrl: () => f,
                makeTemplateSymbolUrl: () => h
            });
            var r = n(384809);
            var i = n(620031),
                a = n(36715),
                o = n(889267);

            function s(e, t) {
                if ("spread" === e.type || "expression" === e.type) {
                    const t = e.shortName && l(e.shortName),
                        n = e.proName && l(e.proName);
                    e = { ...e,
                        type: void 0,
                        shortName: t,
                        proName: n
                    }
                }
                return c(d(e, t), u(e))
            }

            function l(e) {
                var t;
                return null === (t = (0, o.tokenize)(e).find((e => "symbol" === e.type))) || void 0 === t ? void 0 : t.value
            }

            function u(e) {
                const t = {
                    shortName: e.shortName,
                    exchange: e.exchange,
                    proName: e.proName,
                    type: e.type
                };
                return e.proName && e.proName.includes(":") && ([t.exchange, t.shortName] = e.proName.split(":")), t
            }

            function c(e, t) {
                const n = encodeURIComponent(t.shortName || ""),
                    r = encodeURIComponent(t.exchange || ""),
                    i = encodeURIComponent(t.proName || "");
                return e.replace("{tvexchange}", r).replace("{tvsymbol}", n).replace("{tvprosymbol}", i)
            }

            function d(e, t = "") {
                const n = ["UKOIL", "USOIL", "XAGAUD", "XAGCAD", "XAGCHF", "XAGEUR", "XAGGBP", "XAGHKD", "XAGJPY", "XAGUSD", "XAUAUD", "XAUCAD", "XAUCHF", "XAUEUR", "XAUGBP", "XAUHKD", "XAUJPY", "XAUNZD", "XAUUSD", "XPDUSD", "XPTUSD", "SPX"];
                return void 0 === e.shortName && void 0 === e.proName ? (console.warn("Params missed"), "/") : _(e) ? e.exchange ? "/symbols/{tvsymbol}/?exchange={tvexchange}" : `/symbols/{tvsymbol}/${t}` : e.exchange || e.proName ? e.shortName && n.includes(e.shortName) ? `/symbols/{tvsymbol}/${t}` : `/symbols/{tvexchange}-{tvsymbol}/${t}` : `/symbols/{tvsymbol}/${t}`
            }

            function h(e, t) {
                let n = e;
                if (!/{tvsymbol}|{tvexchange}|{tvprosymbol}/.test(e)) {
                    let r = "tvprosymbol";
                    void 0 === t.proName && (r = "tvsymbol"), n = `${e}?tvwidgetsymbol={${r}}`
                }
                const r = c(n, u(t));
                if (!(0, i.isSafeUrl)(r)) throw new Error(`The symbol URL ${r} is not allowed.`);
                return r
            }

            function p(e, t, n, i) {
                const a = window.locale_domains ? function(e, t) {
                        const n = t || window.locale || "en";
                        let r = e[n] ? e[n] : e.en;
                        return r = "tradingview.com" === r ? "www.tradingview.com" : r, r ? document.location.protocol + "//" + r : ""
                    }(window.locale_domains, i) : window.location.origin,
                    o = a + c(e, u(t));
                return n ? (0, r.addUtmToUrl)(o, n) : o
            }

            function m(e, t, n, r) {
                return p(d(e, r), e, t, n)
            }

            function v(e, t) {
                return p("/chart/?symbol={tvprosymbol}", e, t)
            }

            function g(e, t, n) {
                return m(e, t, n, "financials-overview/")
            }

            function f(e, t, n) {
                return p(function(e) {
                    return e.exchange && !_(e) ? "/symbols/{tvexchange}-{tvsymbol}/history-timeline/" : "/symbols/{tvsymbol}/history-timeline/"
                }(e), e, t, n)
            }

            function _(e) {
                return !!e.type && (0, a.isCurrencySymbol)(e.type, e.typespecs)
            }
        },
        152198: (e, t, n) => {
            "use strict";
            n.d(t, {
                getMinimalProPlanForFeature: () => c,
                getProPlanDetailsForUser: () => d
            });
            var r = n(960254),
                i = n(632446),
                a = n(833813),
                o = n(919490),
                s = n(890740),
                l = n(897649);

            function u(e) {
                return window.pro ? e === r.ProPlans.Free ? -1 : window.pro.getProduct((0, o.getProductForTrial)(e)).upgrade_weight : 0
            }

            function c(e) {
                const t = function(e) {
                    return Object.values(r.ProPlans).filter((t => {
                        const n = (0, i.getConfig)(e, (0, o.getProductForTrial)(t));
                        return n && !((0, o.isTrialProduct)(t) && n[a.ProductFeatures.DISABLE_ON_TRIAL])
                    }))
                }(e).filter((e => !(0, o.isTrialProduct)(e)));
                return function(e) {
                    return e.sort(((e, t) => u(e) - u(t)))
                }(t)[0] || null
            }
            async function d() {
                const e = await (0, s.fetch)("/pro-plans/profile/"),
                    t = await e.json();
                if (e.ok) return t;
                if (403 === e.status) {
                    const n = t;
                    throw new l.ApiError(n.detail, e.status, n.code)
                }
                throw new Error(`Unable to handle unexpected response: ${String(e.text())}`)
            }
        },
        535799: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                htmlEscape: () => a,
                removeTags: () => o,
                removeSpaces: () => s,
                capitalizeFirstLetterInWord: () => l
            });
            const r = /[<"'&>]/g,
                i = e => `&#${e.charCodeAt(0)};`;

            function a(e) {
                return e.replace(r, i)
            }

            function o(e = "") {
                return e.replace(/(<([^>]+)>)/gi, "")
            }

            function s(e = "") {
                return e.replace(/\s+/g, "")
            }

            function l(e = "") {
                return e.replace(/\b\w/g, (e => e.toUpperCase()))
            }
        },
        620031: (e, t, n) => {
            "use strict";

            function r(e) {
                const t = new URL(e, document.baseURI);
                return l(t) && s(t) && o(t)
            }

            function i(e) {
                const t = new URL(e, document.baseURI);
                return s(t) && o(t)
            }

            function a(e) {
                return !e.split(/(\s+)/).filter((e => e.trim().length > 0)).some((e => {
                    try {
                        const t = new URL(e);
                        return !(!t || !t.hostname.length) && !i(e)
                    } catch (e) {
                        return !1
                    }
                }))
            }
            n.d(t, {
                isInternalUrl: () => r,
                isSafeUrl: () => i,
                validateUrlsInText: () => a,
                isInternalHost: () => u,
                isTvLink: () => c
            });
            const o = e => !e.username,
                s = e => "http:" === e.protocol || "https:" === e.protocol,
                l = e => e.hostname === location.hostname || !/^\d+\.\d+\.\d+\.\d+$/.test(e.hostname) && u(e.hostname);

            function u(e, t = window.location.hostname) {
                const n = "." === t.slice(-1) ? 3 : 2,
                    r = t.toLowerCase().split(".").slice(-n),
                    i = e.toLowerCase().split(".").slice(-r.length);
                return r.join(".") === i.join(".")
            }

            function c(e) {
                try {
                    return e.startsWith("/") || u(new URL(e).hostname, "tradingview.com")
                } catch (e) {
                    return !1
                }
            }
        },
        384809: (e, t, n) => {
            "use strict";
            n.d(t, {
                addUtmToUrl: () => i
            });
            var r = n(186521);

            function i(e, t) {
                if (!/([a-zA-Z0-9.-]*tradingview.com)|localhost/.test(e)) return e;
                const n = (0, r.buildUtmQueryString)(t);
                if ("" === n) return e;
                const i = e.indexOf("?"),
                    a = e.indexOf("#"),
                    o = -1 !== a;
                if (-1 !== i && (!o || i < a)) {
                    return `${e.slice(0,i)}?${o?e.slice(i+1,a):e.slice(i+1)}&${n}${o?e.slice(a):""}`
                }
                if (o) {
                    return `${e.slice(0,a)}?${n}${e.slice(a)}`
                }
                return `${e}?${n}`
            }
        },
        186521: (e, t, n) => {
            "use strict";
            n.d(t, {
                filterUtmInfo: () => o,
                buildUtmQueryString: () => s,
                buildUtmQueryStringFromUrlParams: () => l
            });
            var r = n(798062),
                i = n(535799);
            const a = ["utm_source", "utm_medium", "utm_campaign"];

            function o(e) {
                const t = {};
                return a.forEach((n => {
                    const r = e[n];
                    "string" == typeof r && "" !== r && (t[n] = (0, i.htmlEscape)(r))
                })), t
            }

            function s(e, t = !1) {
                const n = (0, r.createUrlParams)(e);
                return n && t ? "?" + n : n
            }

            function l(e) {
                return s(o((0, r.getUrlParams)()), e)
            }
        },
        333765: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>'
        },
        519624: (e, t, n) => {
            "use strict";

            function r() {
                return r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, r.apply(this, arguments)
            }
            n.d(t, {
                default: () => r
            })
        },
        959941: e => {
            "use strict";
            e.exports = JSON.parse('{"us":{"title":"USA","screenerName":"america","screenerTimezone":"America/New_York","defaultExchange":"US","exchangesForHotlist":["AMEX","NASDAQ","NYSE","OTC","US"],"exchangesStocks":["NASDAQ","NYSE","NYSE ARCA","OTC"],"group":"North America"},"ae":{"title":"United Arab Emirates","screenerName":"uae","screenerTimezone":"Asia/Dubai","exchangesStocks":["DFM","ADX"],"group":"Middle East / Africa"},"ar":{"title":"Argentina","screenerName":"argentina","screenerTimezone":"America/Argentina/Buenos_Aires","exchangesForHotlist":["BCBA"],"exchangesStocks":["BYMA"],"defaultExchange":"BCBA","group":"Mexico and South America"},"at":{"title":"Austria"},"au":{"title":"Australia","screenerName":"australia","screenerTimezone":"Australia/Sydney","exchangesStocks":["ASX"],"group":"Asia / Pacific"},"be":{"title":"Belgium","screenerName":"belgium","screenerTimezone":"Europe/Brussels","exchangesForHotlist":["EURONEXT_BRU"],"exchangesStocks":["EURONEXTBRU"],"defaultExchange":"EURONEXT_BRU","group":"Europe"},"bh":{"title":"Bahrain","screenerName":"bahrain","screenerTimezone":"Asia/Bahrain","exchangesStocks":["BAHRAIN"],"group":"Middle East / Africa"},"br":{"title":"Brazil","screenerName":"brazil","screenerTimezone":"America/Sao_Paulo","exchangesStocks":["BMFBOVESPA"],"group":"Mexico and South America"},"ca":{"title":"Canada","screenerName":"canada","screenerTimezone":"America/Toronto","exchangesStocks":["TSX","TSXV","CSE","NEO"],"group":"North America"},"ch":{"title":"Switzerland","screenerName":"switzerland","screenerTimezone":"Europe/Zurich","exchangesStocks":["SIX","BX"],"group":"Europe"},"cl":{"title":"Chile","screenerName":"chile","screenerTimezone":"America/Santiago","exchangesStocks":["BCS"],"group":"Mexico and South America"},"cn":{"title":"China","tvLocale":"zh_CN","screenerName":"china","screenerTimezone":"Asia/Hong_Kong","exchangesStocks":["SSE","SZSE"],"group":"Asia / Pacific"},"co":{"title":"Colombia","screenerName":"colombia","screenerTimezone":"America/Bogota","exchangesStocks":["BVC"],"group":"Mexico and South America"},"cy":{"title":"Cyprus","screenerName":"cyprus","screenerTimezone":"Europe/Cyprus","exchangesStocks":["CSECY"],"exchangesForHotlist":["CSECY"],"group":"Europe"},"cz":{"title":"Czech Republic"},"de":{"title":"Germany","tvLocale":"de_DE","screenerName":"germany","screenerTimezone":"Europe/Berlin","defaultExchange":"XETR","exchangesStocks":["FWB","SWB","XETR","BER","DUS","HAM","HAN","MUN","TRADEGATE"],"group":"Europe"},"dk":{"title":"Denmark","screenerName":"denmark","screenerTimezone":"Europe/Copenhagen","exchangesStocks":["OMXCOP"],"group":"Europe"},"ee":{"title":"Estonia","screenerName":"estonia","screenerTimezone":"Europe/Tallinn","exchangesStocks":["OMXTSE"],"group":"Europe"},"eg":{"title":"Egypt","screenerName":"egypt","screenerTimezone":"Africa/Cairo","exchangesStocks":["EGX"],"group":"Middle East / Africa"},"es":{"title":"Spain","screenerName":"spain","screenerTimezone":"Europe/Madrid","exchangesStocks":["BME"],"group":"Europe"},"eu":{"title":"European Union","screenerName":"euronext","screenerTimezone":"Europe/Paris","exchangesForHotlist":[],"exchangesStocks":["EURONEXT"]},"fi":{"title":"Finland","screenerName":"finland","screenerTimezone":"Europe/Helsinki","exchangesStocks":["OMXHEX"],"group":"Europe"},"fr":{"title":"France","screenerName":"france","screenerTimezone":"Europe/Paris","exchangesForHotlist":["EURONEXT_PAR"],"exchangesStocks":["EURONEXTPAR"],"defaultExchange":"EURONEXT_PAR","group":"Europe"},"ge":{"title":"Georgia"},"gr":{"title":"Greece","screenerName":"greece","screenerTimezone":"Europe/Athens","exchangesStocks":["ATHEX"],"group":"Europe"},"hk":{"title":"Hong Kong","screenerName":"hongkong","screenerTimezone":"Asia/Hong_Kong","exchangesStocks":["HKEX"],"group":"Asia / Pacific"},"hu":{"title":"Hungary","screenerName":"hungary","screenerTimezone":"Europe/Budapest","exchangesStocks":["BET"],"exchangesForHotlist":["BET"],"defaultExchange":"BET","group":"Europe"},"id":{"title":"Indonesia","screenerName":"indonesia","screenerTimezone":"Asia/Jakarta","exchangesStocks":["IDX"],"group":"Asia / Pacific"},"ie":{"title":"Ireland"},"il":{"title":"Israel","screenerName":"israel","screenerTimezone":"Asia/Jerusalem","exchangesStocks":["TASE"],"group":"Middle East / Africa"},"in":{"title":"India","screenerName":"india","screenerTimezone":"Asia/Kolkata","exchangesStocks":["BSE","NSE"],"group":"Asia / Pacific"},"ir":{"title":"Iran"},"is":{"title":"Iceland","screenerName":"iceland","screenerTimezone":"Atlantic/Reykjavik","exchangesStocks":["OMXICE"],"group":"Europe"},"it":{"title":"Italy","screenerName":"italy","screenerTimezone":"Europe/Rome","exchangesForHotlist":["MIL"],"exchangesStocks":["MIL"],"group":"Europe"},"jp":{"title":"Japan","tvLocale":"ja","screenerName":"japan","screenerTimezone":"Asia/Tokyo","defaultExchange":"TSE","exchangesForHotlist":["NAG","TSE"],"exchangesStocks":["TSE","NAG","FSE","SAPSE"],"group":"Asia / Pacific"},"ke":{"title":"Kenya","screenerName":"kenya","screenerTimezone":"Africa/Nairobi","exchangesStocks":["NSEKE"],"group":"Middle East / Africa"},"kp":{"title":"Noth Korea"},"kr":{"title":"South Korea","tvLocale":"kr","screenerName":"korea","screenerTimezone":"Asia/Seoul","exchangesStocks":["KRX"],"group":"Asia / Pacific"},"kw":{"title":"Kuwait","screenerName":"kuwait","screenerTimezone":"Asia/Kuwait","exchangesStocks":["KSE"],"group":"Middle East / Africa"},"lk":{"title":"Sri Lanka","screenerName":"srilanka","screenerTimezone":"Asia/Colombo","exchangesStocks":["CSELK"],"group":"Asia / Pacific"},"lt":{"title":"Lithuania","screenerName":"lithuania","screenerTimezone":"Europe/Vilnius","exchangesStocks":["OMXVSE"],"group":"Europe"},"lv":{"title":"Latvia","screenerName":"latvia","screenerTimezone":"Europe/Riga","exchangesStocks":["OMXRSE"],"group":"Europe"},"lu":{"title":"Luxembourg","screenerName":"luxembourg","screenerTimezone":"Europe/Luxembourg","exchangesStocks":["LUXSE"],"exchangesForHotlist":["LUXSE"],"defaultExchange":"LUXSE","group":"Europe"},"mx":{"title":"Mexico","screenerName":"mexico","screenerTimezone":"America/Mexico_City","exchangesStocks":["BMV"],"group":"Mexico and South America"},"my":{"title":"Malaysia","tvLocale":"ms_MY","screenerName":"malaysia","screenerTimezone":"Asia/Singapore","exchangesStocks":["MYX"],"group":"Asia / Pacific"},"ng":{"title":"Nigeria","screenerName":"nigeria","screenerTimezone":"Africa/Lagos","exchangesStocks":["NSENG"],"group":"Middle East / Africa"},"nl":{"title":"Netherlands","screenerName":"netherlands","screenerTimezone":"Europe/Amsterdam","exchangesForHotlist":["EURONEXT_AMS"],"exchangesStocks":["EURONEXTAMS"],"defaultExchange":"EURONEXT_AMS","group":"Europe"},"no":{"title":"Norway","screenerName":"norway","screenerTimezone":"Europe/Oslo","exchangesForHotlist":["OSL"],"exchangesStocks":["EURONEXTOSE"],"defaultExchange":"OSL","group":"Europe"},"nz":{"title":"New Zealand","screenerName":"newzealand","screenerTimezone":"Pacific/Auckland","exchangesStocks":["NZX"],"group":"Asia / Pacific"},"pe":{"title":"Peru","screenerName":"peru","screenerTimezone":"America/Lima","exchangesStocks":["BVL"],"group":"Mexico and South America"},"ph":{"title":"Philippines","screenerName":"philippines","screenerTimezone":"Philippines/Manila","exchangesStocks":["PSE"],"group":"Asia / Pacific"},"pl":{"title":"Poland","screenerName":"poland","screenerTimezone":"Europe/Warsaw","exchangesStocks":["GPW","NEWCONNECT"],"group":"Europe"},"pt":{"title":"Portugal","screenerName":"portugal","screenerTimezone":"Europe/Lisbon","exchangesForHotlist":["EURONEXT_LIS"],"exchangesStocks":["EURONEXTLIS"],"defaultExchange":"EURONEXT_LIS","group":"Europe"},"qa":{"title":"Qatar","screenerName":"qatar","screenerTimezone":"Asia/Qatar","exchangesStocks":["QSE"],"group":"Middle East / Africa"},"ro":{"title":"Romania","screenerName":"romania","screenerTimezone":"Europe/Bucharest","exchangesStocks":["BVB"],"exchangesForHotlist":["BVB"],"defaultExchange":"BVB","group":"Europe"},"rs":{"title":"Serbia","screenerName":"serbia","screenerTimezone":"Europe/Belgrade","exchangesStocks":["BELEX"],"group":"Europe"},"ru":{"title":"Russia","screenerName":"russia","screenerTimezone":"Europe/Moscow","exchangesStocks":["MOEX"],"group":"Europe"},"sa":{"title":"Saudi Arabia","tvLocale":"ar_AE","screenerName":"ksa","screenerTimezone":"Asia/Riyadh","exchangesStocks":["TADAWUL"],"group":"Middle East / Africa"},"se":{"title":"Sweden","tvLocale":"sv_SE","screenerName":"sweden","screenerTimezone":"Europe/Stockholm","exchangesStocks":["NGM","OMXSTO"],"exchangesForHotlist":["NGM","OMXSTO"],"group":"Europe"},"sg":{"title":"Singapore","screenerName":"singapore","screenerTimezone":"Asia/Singapore","exchangesStocks":["SGX"],"group":"Asia / Pacific"},"sk":{"title":"Slovakia","screenerName":"slovakia","screenerTimezone":"Europe/Bratislava","exchangesStocks":["BSSE"],"group":"Europe"},"th":{"title":"Thailand","tvLocale":"th_TH","screenerName":"thailand","screenerTimezone":"Asia/Bangkok","exchangesStocks":["SET"],"group":"Asia / Pacific"},"tn":{"title":"Tunisia","screenerName":"tunisia","screenerTimezone":"Africa/Tunis","exchangesStocks":["BVMT"],"group":"Middle East / Africa"},"tr":{"title":"Turkey","screenerName":"turkey","screenerTimezone":"Europe/Istanbul","exchangesStocks":["BIST"],"group":"Europe"},"tw":{"title":"Taiwan","tvLocale":"zh_TW","screenerName":"taiwan","screenerTimezone":"Asia/Taipei","exchangesStocks":["TWSE","TPEX"],"group":"Asia / Pacific"},"uk":{"title":"United Kingdom","screenerName":"uk","screenerTimezone":"Europe/London","defaultExchange":"LSE","exchangesStocks":["LSE","LSIN"],"group":"Europe"},"ve":{"title":"Venezuela","screenerName":"venezuela","screenerTimezone":"America/Caracas","exchangesStocks":["BVCV"],"group":"Mexico and South America"},"vn":{"title":"Vietnam","tvLocale":"vi_VN","screenerName":"vietnam","screenerTimezone":"Asia/Ho_Chi_Minh","exchangesStocks":["HOSE","HNX","UPCOM"],"group":"Asia / Pacific"},"za":{"title":"South Africa","screenerName":"rsa","screenerTimezone":"Africa/Johannesburg","exchangesStocks":["JSE"],"group":"Middle East / Africa"},"ww":{"title":"Worldwide"}}')
        },
        713395: e => {
            e.exports = {
                ar: ["يوم"],
                ca_ES: "D",
                cs: "D",
                de: ["T"],
                el: "D",
                en: "D",
                es: "D",
                fa: "D",
                fr: "D",
                he_IL: ["יום"],
                hu_HU: ["N"],
                id_ID: "D",
                it: "D",
                ja: ["日"],
                ko: ["날"],
                ms_MY: "D",
                nl_NL: "D",
                pl: "D",
                pt: "D",
                ro: "D",
                ru: ["Д"],
                sv: "D",
                th: "D",
                tr: ["G"],
                vi: "D",
                zh: ["天"],
                zh_TW: ["天"]
            }
        },
        137720: e => {
            e.exports = {
                ar: ["شهر"],
                ca_ES: "M",
                cs: "M",
                de: "M",
                el: "M",
                en: "M",
                es: "M",
                fa: "M",
                fr: "M",
                he_IL: ["חודש"],
                hu_HU: "M",
                id_ID: "M",
                it: "M",
                ja: ["月"],
                ko: ["달"],
                ms_MY: "M",
                nl_NL: "M",
                pl: "M",
                pt: "M",
                ro: "M",
                ru: ["Мес"],
                sv: "M",
                th: "M",
                tr: ["A"],
                vi: "M",
                zh: ["月"],
                zh_TW: ["月"]
            }
        },
        269838: e => {
            e.exports = {
                ar: ["نطاق"],
                ca_ES: "R",
                cs: "R",
                de: "R",
                el: "R",
                en: "R",
                es: "R",
                fa: "R",
                fr: "R",
                he_IL: "R",
                hu_HU: "R",
                id_ID: "R",
                it: "R",
                ja: ["レンジ"],
                ko: "R",
                ms_MY: "R",
                nl_NL: "R",
                pl: "R",
                pt: "R",
                ro: "R",
                ru: "R",
                sv: "R",
                th: "R",
                tr: ["A"],
                vi: "R",
                zh: "R",
                zh_TW: "R"
            }
        },
        959231: e => {
            e.exports = {
                ar: "T",
                ca_ES: "T",
                cs: "T",
                de: "T",
                el: "T",
                en: "T",
                es: "T",
                fa: "T",
                fr: "T",
                he_IL: "T",
                hu_HU: "T",
                id_ID: "T",
                it: "T",
                ja: "T",
                ko: "T",
                ms_MY: "T",
                nl_NL: "T",
                pl: "T",
                pt: "T",
                ro: "T",
                ru: ["Т"],
                sv: "T",
                th: "T",
                tr: ["Z"],
                vi: "T",
                zh: "T",
                zh_TW: "T"
            }
        },
        185521: e => {
            e.exports = {
                ar: ["أسبوع"],
                ca_ES: ["S"],
                cs: "W",
                de: "W",
                el: "W",
                en: "W",
                es: ["S"],
                fa: "W",
                fr: "W",
                he_IL: ["שבוע"],
                hu_HU: "W",
                id_ID: "W",
                it: "W",
                ja: ["週"],
                ko: ["주"],
                ms_MY: "W",
                nl_NL: "W",
                pl: ["T"],
                pt: ["S"],
                ro: "W",
                ru: ["Н"],
                sv: "W",
                th: "W",
                tr: ["H"],
                vi: "W",
                zh: ["周"],
                zh_TW: ["周"]
            }
        },
        113994: e => {
            e.exports = {
                ar: ["ساعة"],
                ca_ES: "h",
                cs: "h",
                de: ["Std."],
                el: "h",
                en: "h",
                es: "h",
                fa: "h",
                fr: "h",
                he_IL: ["שעה"],
                hu_HU: "h",
                id_ID: "h",
                it: "h",
                ja: ["時間"],
                ko: ["시간"],
                ms_MY: "h",
                nl_NL: "h",
                pl: ["g"],
                pt: "h",
                ro: "h",
                ru: ["Ч"],
                sv: "h",
                th: "h",
                tr: ["s"],
                vi: "h",
                zh: ["小时"],
                zh_TW: ["小時"]
            }
        },
        806791: e => {
            e.exports = {
                ar: ["دقيقة"],
                ca_ES: "m",
                cs: "m",
                de: "m",
                el: "m",
                en: "m",
                es: "m",
                fa: "m",
                fr: "m",
                he_IL: ["דקה"],
                hu_HU: "m",
                id_ID: "m",
                it: "m",
                ja: ["分"],
                ko: ["분"],
                ms_MY: "m",
                nl_NL: "m",
                pl: "m",
                pt: "m",
                ro: "m",
                ru: ["М"],
                sv: "m",
                th: ["นาที"],
                tr: ["d"],
                vi: "m",
                zh: ["分"],
                zh_TW: ["分"]
            }
        },
        2949: e => {
            e.exports = {
                ar: "s",
                ca_ES: "s",
                cs: "s",
                de: "s",
                el: "s",
                en: "s",
                es: "s",
                fa: "s",
                fr: "s",
                he_IL: "s",
                hu_HU: "s",
                id_ID: "s",
                it: "s",
                ja: ["秒"],
                ko: ["초"],
                ms_MY: "s",
                nl_NL: "s",
                pl: "s",
                pt: "s",
                ro: "s",
                ru: ["С"],
                sv: ["K"],
                th: "s",
                tr: "s",
                vi: ["giây"],
                zh: ["秒"],
                zh_TW: ["秒"]
            }
        },
        494695: e => {
            e.exports = {
                ar: ["عقود الفروقات"],
                ca_ES: "CFD",
                cs: "CFD",
                de: "CFD",
                el: "CFD",
                en: "CFD",
                es: "CFD",
                fa: "CFD",
                fr: "CFD",
                he_IL: ["חוזה הפרשים"],
                hu_HU: "CFD",
                id_ID: "CFD",
                it: "CFD",
                ja: "CFD",
                ko: "CFD",
                ms_MY: "CFD",
                nl_NL: "CFD",
                pl: "CFD",
                pt: "CFD",
                ro: "CFD",
                ru: "CFD",
                sv: ["CFD-kontrakt"],
                th: ["สินค้าโภคภัณฑ์"],
                tr: ["KFS"],
                vi: ["Hợp đồng Chênh lệch"],
                zh: ["差价合约"],
                zh_TW: ["差價合約"]
            }
        },
        731144: e => {
            e.exports = {
                ar: ["كولومبيا"],
                ca_ES: ["Colòmbia"],
                cs: "Colombia",
                de: ["Kolumbien"],
                el: "Colombia",
                en: "Colombia",
                es: "Colombia",
                fa: "Colombia",
                fr: ["Colombie"],
                he_IL: ["קולומביה"],
                hu_HU: ["Kolumbia"],
                id_ID: ["Kolombia"],
                it: "Colombia",
                ja: ["コロンビア"],
                ko: ["콜럼비아"],
                ms_MY: "Colombia",
                nl_NL: "Colombia",
                pl: ["Kolumbia"],
                pt: ["Colômbia"],
                ro: "Colombia",
                ru: ["Колумбия"],
                sv: "Colombia",
                th: ["โคลอมเบีย"],
                tr: ["Kolombiya"],
                vi: "Colombia",
                zh: ["哥伦比亚"],
                zh_TW: ["哥倫比亞"]
            }
        },
        238185: e => {
            e.exports = {
                ar: ["الخدمات التجارية"],
                ca_ES: "Commercial Services",
                cs: "Commercial Services",
                de: ["Gewerbliche Dienstleistungen"],
                el: "Commercial Services",
                en: "Commercial Services",
                es: ["Servicios comerciales"],
                fa: "Commercial Services",
                fr: ["Services Commerciaux"],
                he_IL: ["שירותי פרסום"],
                hu_HU: "Commercial Services",
                id_ID: ["Layanan Komersil"],
                it: ["Servizi commerciali"],
                ja: ["商業サービス"],
                ko: ["코머셜 서비스"],
                ms_MY: ["Perkhidmatan Komersial"],
                nl_NL: "Commercial Services",
                pl: ["Usługi komercyjne"],
                pt: ["Serviços Comerciais"],
                ro: "Commercial Services",
                ru: ["Коммерческие услуги"],
                sv: ["Kommersiella tjänster"],
                th: ["บริการเชิงพาณิชย์"],
                tr: ["Ticari Hizmetler"],
                vi: ["Dịch vụ Thương mại"],
                zh: ["商业服务"],
                zh_TW: ["商業服務"]
            }
        },
        521490: e => {
            e.exports = {
                ar: ["الاتصالات"],
                ca_ES: "Communications",
                cs: "Communications",
                de: ["Kommunikation"],
                el: "Communications",
                en: "Communications",
                es: ["Comunicaciones"],
                fa: "Communications",
                fr: "Communications",
                he_IL: ["תקשורת"],
                hu_HU: "Communications",
                id_ID: ["Komunikasi"],
                it: ["Comunicazione"],
                ja: ["通信"],
                ko: ["커뮤니케이션"],
                ms_MY: ["Komunikasi"],
                nl_NL: "Communications",
                pl: ["Komunikacja"],
                pt: ["Comunicações"],
                ro: "Communications",
                ru: ["Связь"],
                sv: ["Kommunikationer"],
                th: ["การสื่อสาร"],
                tr: ["İletişim"],
                vi: ["Truyền thông"],
                zh: ["通讯"],
                zh_TW: ["通訊"]
            }
        },
        994443: e => {
            e.exports = {
                ar: ["تأكيد"],
                ca_ES: ["Confirmació"],
                cs: ["Potvrzení"],
                de: ["Bestätigung"],
                el: ["Επιβεβαίωση"],
                en: "Confirmation",
                es: ["Confirmación"],
                fa: ["تاییدیه"],
                fr: "Confirmation",
                he_IL: ["אישור"],
                hu_HU: ["Megerősítés"],
                id_ID: ["Konfirmasi"],
                it: ["Conferma"],
                ja: ["確認"],
                ko: ["확인"],
                ms_MY: ["Pengesahan"],
                nl_NL: ["Bevestig"],
                pl: ["Potwierdzenie"],
                pt: ["Confirmação"],
                ro: "Confirmation",
                ru: ["Подтвердите действие"],
                sv: ["Bekräftelse"],
                th: ["การยืนยัน"],
                tr: ["Onaylama"],
                vi: ["Xác nhận"],
                zh: ["确认"],
                zh_TW: ["確認"]
            }
        },
        51897: e => {
            e.exports = {
                ar: ["السلع الاستهلاكية المُعمرة"],
                ca_ES: "Consumer Durables",
                cs: "Consumer Durables",
                de: ["Gebrauchsgüter"],
                el: "Consumer Durables",
                en: "Consumer Durables",
                es: ["Bienes de consumo duraderos"],
                fa: "Consumer Durables",
                fr: ["Biens de consommation durables"],
                he_IL: ["בני קיימא לצרכן"],
                hu_HU: "Consumer Durables",
                id_ID: ["Konsumen Tahan Lama"],
                it: ["Beni di consumo durevoli"],
                ja: ["耐久消費財"],
                ko: ["소비자 내구재"],
                ms_MY: ["Barangan Pengguna Tahan Lama"],
                nl_NL: "Consumer Durables",
                pl: ["Trwałe dobra konsumpcyjne"],
                pt: ["Consumíveis Duráveis"],
                ro: "Consumer Durables",
                ru: ["Потребительские товары длительного пользования"],
                sv: ["Konsumentvaror"],
                th: ["สินค้าอุปโภคบริโภคที่คงทนถาวร"],
                tr: ["Dayanıklı Tüketim Malları"],
                vi: ["Khách hàng Lâu năm"],
                zh: ["耐用消费品"],
                zh_TW: ["耐用消費品"]
            }
        },
        964300: e => {
            e.exports = {
                ar: ["مستهلك - غير معمرة"],
                ca_ES: "Consumer Non-Durables",
                cs: "Consumer Non-Durables",
                de: ["Verbrauchsgüter"],
                el: "Consumer Non-Durables",
                en: "Consumer Non-Durables",
                es: ["Consumibles perecederos"],
                fa: "Consumer Non-Durables",
                fr: ["Produits de consommation non durables"],
                he_IL: ["מוצרי צריכה שאינם בני-קיימא"],
                hu_HU: "Consumer Non-Durables",
                id_ID: ["Konsumen Tidak Tahan Lama"],
                it: ["Beni di consumo non durevoli"],
                ja: ["非耐久消費財"],
                ko: ["컨슈머 논-듀어러블즈"],
                ms_MY: ["Barang Tidak Tahan Lama"],
                nl_NL: "Consumer Non-Durables",
                pl: ["Dobra konsumpcyjne nietrwałe"],
                pt: ["Consumo de Não Duráveis"],
                ro: "Consumer Non-Durables",
                ru: ["Потребительские товары недлительного пользования"],
                sv: ["Icke hållbara konsumentprodukter"],
                th: ["สินค้าอุปโภคบริโภคที่ไม่คงทนถาวร"],
                tr: ["Dayanıklı Olmayan Tüketici Ürünleri"],
                vi: ["Hàng tiêu dùng không lâu bền"],
                zh: ["非耐用消费品"],
                zh_TW: ["非耐用消費品"]
            }
        },
        964613: e => {
            e.exports = {
                ar: ["خدمات المستهلك"],
                ca_ES: "Consumer Services",
                cs: "Consumer Services",
                de: ["Verbraucher Dienstleistungen"],
                el: "Consumer Services",
                en: "Consumer Services",
                es: ["Servicios al consumidor"],
                fa: "Consumer Services",
                fr: ["Services au consommateur"],
                he_IL: ["שרותים לצרכן"],
                hu_HU: "Consumer Services",
                id_ID: ["Layanan Konsumen"],
                it: ["Servizi al consumatore"],
                ja: ["消費者サービス"],
                ko: ["컨슈머 서비스"],
                ms_MY: ["Perkhidmatan Pengguna"],
                nl_NL: "Consumer Services",
                pl: ["Usługi konsumenckie"],
                pt: ["Consumo de Serviços"],
                ro: "Consumer Services",
                ru: ["Потребительские услуги"],
                sv: ["Konsumentservice"],
                th: ["บริการผู้บริโภค"],
                tr: ["Tüketici Hizmetleri"],
                vi: ["Dịch vụ Khách hàng"],
                zh: ["消费者服务"],
                zh_TW: ["消費者服務"]
            }
        },
        620036: e => {
            e.exports = {
                ar: ["إلغاء"],
                ca_ES: ["Cancel·la"],
                cs: ["Zrušit"],
                de: ["Abbrechen"],
                el: ["Άκυρο"],
                en: "Cancel",
                es: ["Cancelar"],
                fa: ["لغو"],
                fr: ["Annuler"],
                he_IL: ["ביטול"],
                hu_HU: ["Törlés"],
                id_ID: ["Batal"],
                it: ["Annulla"],
                ja: ["キャンセル"],
                ko: ["취소"],
                ms_MY: ["Batal"],
                nl_NL: ["Annuleren"],
                pl: ["Anuluj"],
                pt: ["Cancelar"],
                ro: "Cancel",
                ru: ["Отмена"],
                sv: ["Avbryt"],
                th: ["ยกเลิก"],
                tr: ["İptal"],
                vi: ["Hủy bỏ"],
                zh: ["取消"],
                zh_TW: ["取消"]
            }
        },
        280206: e => {
            e.exports = {
                ar: ["كندا"],
                ca_ES: ["Canadà"],
                cs: "Canada",
                de: ["Kanada"],
                el: "Canada",
                en: "Canada",
                es: ["Canadá"],
                fa: "Canada",
                fr: "Canada",
                he_IL: ["קנדה"],
                hu_HU: "Canada",
                id_ID: ["Kanada"],
                it: "Canada",
                ja: ["カナダ"],
                ko: ["캐나다"],
                ms_MY: ["Kanada"],
                nl_NL: "Canada",
                pl: ["Kanada"],
                pt: ["Canadá"],
                ro: "Canada",
                ru: ["Канада"],
                sv: ["Kanada"],
                th: ["แคนาดา"],
                tr: ["Kanada"],
                vi: "Canada",
                zh: ["加拿大"],
                zh_TW: ["加拿大"]
            }
        },
        141840: e => {
            e.exports = {
                ar: ["تشيلي"],
                ca_ES: ["Xile"],
                cs: "Chile",
                de: "Chile",
                el: "Chile",
                en: "Chile",
                es: "Chile",
                fa: "Chile",
                fr: ["Chili"],
                he_IL: ["צ'לה"],
                hu_HU: "Chile",
                id_ID: ["Chili"],
                it: ["Cile"],
                ja: ["チリ"],
                ko: ["칠레"],
                ms_MY: "Chile",
                nl_NL: "Chile",
                pl: "Chile",
                pt: "Chile",
                ro: "Chile",
                ru: ["Чили"],
                sv: "Chile",
                th: ["ชิลี"],
                tr: ["Şili"],
                vi: "Chile",
                zh: ["智利"],
                zh_TW: ["智利"]
            }
        },
        420844: e => {
            e.exports = {
                ar: ["الصين"],
                ca_ES: ["Xina"],
                cs: "China",
                de: "China",
                el: "China",
                en: "China",
                es: "China",
                fa: "China",
                fr: ["Chine"],
                he_IL: ["סין"],
                hu_HU: "China",
                id_ID: ["Cina"],
                it: ["Cina"],
                ja: ["中国"],
                ko: ["중국"],
                ms_MY: "China",
                nl_NL: "China",
                pl: ["Chiny"],
                pt: "China",
                ro: "China",
                ru: ["Китай"],
                sv: ["Kina"],
                th: ["จีน"],
                tr: ["Çin"],
                vi: ["Trung Quốc"],
                zh: ["中国"],
                zh_TW: ["中國"]
            }
        },
        612760: e => {
            e.exports = {
                ar: ["العملات الرقمية"],
                ca_ES: ["Cripto"],
                cs: "Crypto",
                de: ["Krypto"],
                el: "Crypto",
                en: "Crypto",
                es: ["Cripto"],
                fa: "Crypto",
                fr: "Crypto",
                he_IL: ["קריפטו"],
                hu_HU: ["Kripto"],
                id_ID: "Crypto",
                it: ["Cripto"],
                ja: ["暗号"],
                ko: ["크립토"],
                ms_MY: ["Kripto"],
                nl_NL: "Crypto",
                pl: ["Krypto"],
                pt: ["Cripto"],
                ro: "Crypto",
                ru: ["Криптовалюты"],
                sv: ["Krypto"],
                th: ["คริปโต"],
                tr: ["Kripto"],
                vi: ["Tiền điện tử"],
                zh: ["加密货币"],
                zh_TW: ["加密"]
            }
        },
        881520: e => {
            e.exports = {
                ar: ["العملات"],
                ca_ES: ["Divises"],
                cs: ["Měny"],
                de: ["Devisen"],
                el: "Currencies",
                en: "Currencies",
                es: ["Divisas"],
                fa: ["ارزها"],
                fr: ["Devises"],
                he_IL: ['מט"ח'],
                hu_HU: ["Devizák"],
                id_ID: ["Mata Uang"],
                it: ["Valute"],
                ja: ["通貨"],
                ko: ["통화"],
                ms_MY: ["Mata Wang"],
                nl_NL: ["Valuta"],
                pl: ["Waluty"],
                pt: ["Moedas"],
                ro: "Currencies",
                ru: ["Валюты"],
                sv: ["Valutor"],
                th: ["สกุลเงิน"],
                tr: ["Döviz"],
                vi: ["Tiền tệ"],
                zh: ["外汇"],
                zh_TW: ["貨幣"]
            }
        },
        240527: e => {
            e.exports = {
                ar: ["قائمة زرقاء"],
                ca_ES: ["Llista cian"],
                cs: "Cyan list",
                de: ["Cyan-Liste"],
                el: "Cyan list",
                en: "Cyan list",
                es: ["Lista cian"],
                fa: "Cyan list",
                fr: ["Liste cyan"],
                he_IL: ["רשימת Cyan"],
                hu_HU: "Cyan list",
                id_ID: ["Daftar cyan"],
                it: ["Lista celeste"],
                ja: ["シアンリスト"],
                ko: ["시안색 목록"],
                ms_MY: ["Senarai cyan"],
                nl_NL: "Cyan list",
                pl: ["Niebieska lista"],
                pt: ["Lista ciano"],
                ro: "Cyan list",
                ru: ["Голубой"],
                sv: ["Cyanlista"],
                th: ["รายการสีฟ้า"],
                tr: ["Açık mavi liste"],
                vi: ["Danh sách màu lục lam"],
                zh: ["青色列表"],
                zh_TW: ["青色清單"]
            }
        },
        551017: e => {
            e.exports = {
                ar: ["قبرص"],
                ca_ES: "Cyprus",
                cs: "Cyprus",
                de: ["Zypern"],
                el: "Cyprus",
                en: "Cyprus",
                es: ["Chipre"],
                fa: "Cyprus",
                fr: ["Chypre"],
                he_IL: ["קַפרִיסִין"],
                hu_HU: "Cyprus",
                id_ID: ["Siprus"],
                it: ["Cipro"],
                ja: ["キプロス共和国"],
                ko: ["사이프러스"],
                ms_MY: "Cyprus",
                nl_NL: "Cyprus",
                pl: ["Cypr"],
                pt: ["Chipre"],
                ro: "Cyprus",
                ru: ["Кипр"],
                sv: ["Cypern"],
                th: ["ไซปรัส"],
                tr: ["Kıbrıs"],
                vi: ["Đảo Síp"],
                zh: ["塞浦路斯"],
                zh_TW: ["塞浦路斯"]
            }
        },
        342054: e => {
            e.exports = {
                ar: ["التشيك"],
                ca_ES: ["República Txeca"],
                cs: "Czech Republic",
                de: ["Tschechische Republik"],
                el: "Czech Republic",
                en: "Czech Republic",
                es: ["República Checa"],
                fa: "Czech Republic",
                fr: ["République Tchèque"],
                he_IL: ["הרפובליקה הצ'כית"],
                hu_HU: "Czech Republic",
                id_ID: ["Republik Ceko"],
                it: ["Repubblica Ceca"],
                ja: ["チェコ共和国"],
                ko: ["체코"],
                ms_MY: ["Republik Czechoslovakia"],
                nl_NL: "Czech Republic",
                pl: ["Czechy"],
                pt: ["República Tcheca"],
                ro: "Czech Republic",
                ru: ["Чехия"],
                sv: ["Tjeckien"],
                th: ["สาธารณรัฐเชค"],
                tr: ["Çek Cumhuriyeti"],
                vi: ["Cộng Hòa Séc"],
                zh: ["捷克"],
                zh_TW: ["捷克"]
            }
        },
        476342: e => {
            e.exports = {
                ar: ["أنجولا"],
                ca_ES: "Angola",
                cs: "Angola",
                de: "Angola",
                el: "Angola",
                en: "Angola",
                es: "Angola",
                fa: "Angola",
                fr: "Angola",
                he_IL: ["אנגוליה"],
                hu_HU: "Angola",
                id_ID: "Angola",
                it: "Angola",
                ja: ["アンゴラ"],
                ko: ["앙골라"],
                ms_MY: "Angola",
                nl_NL: "Angola",
                pl: "Angola",
                pt: "Angola",
                ro: "Angola",
                ru: ["Ангола"],
                sv: "Angola",
                th: ["แองโกลา"],
                tr: "Angola",
                vi: "Angola",
                zh: ["安哥拉"],
                zh_TW: ["安哥拉"]
            }
        },
        445976: e => {
            e.exports = {
                ar: ["أضف إلى قائمة المراقبة"],
                ca_ES: ["Afegeix a la llista de seguiment"],
                cs: "Add to Watchlist",
                de: ["Zur Watchlist hinzufügen"],
                el: "Add to Watchlist",
                en: "Add to Watchlist",
                es: ["Añadir a la lista de seguimiento"],
                fa: "Add to Watchlist",
                fr: ["Ajouter à la liste de surveillance"],
                he_IL: ["הוסף רשימת מעקב"],
                hu_HU: "Add to Watchlist",
                id_ID: ["Tambah ke Daftar Pantau"],
                it: ["Aggiungi alla watchlist"],
                ja: ["ウォッチリストに追加"],
                ko: ["왓치리스트에 넣기"],
                ms_MY: ["Tambah ke Senarai Amatan"],
                nl_NL: "Add to Watchlist",
                pl: ["Dodaj do listy obserwowanych"],
                pt: ["Adicionar à lista de observação"],
                ro: "Add to Watchlist",
                ru: ["Добавить в Список котировок"],
                sv: ["Lägg till i Bevakningslista"],
                th: ["เพิ่มไปในรายการเฝ้าระวัง"],
                tr: ["Watchlist'e ekle"],
                vi: ["Thêm vào danh sách theo dõi"],
                zh: ["添加到自选表"],
                zh_TW: ["增加到觀察清單"]
            }
        },
        695271: e => {
            e.exports = {
                ar: ["كل"],
                ca_ES: ["Tots"],
                cs: ["Vše"],
                de: ["Alle"],
                el: "All",
                en: "All",
                es: ["Todos"],
                fa: ["همه"],
                fr: ["Tout"],
                he_IL: ["הכל"],
                hu_HU: ["Összes"],
                id_ID: ["Seluruhnya"],
                it: ["Tutto"],
                ja: ["すべて"],
                ko: ["전체"],
                ms_MY: ["Semua"],
                nl_NL: "All",
                pl: ["Wszystko"],
                pt: ["Todos"],
                ro: "All",
                ru: ["Все"],
                sv: ["Alla"],
                th: ["ทั้งหมด"],
                tr: ["Tümü"],
                vi: ["Tất cả"],
                zh: ["全部"],
                zh_TW: ["全部"]
            }
        },
        834742: e => {
            e.exports = {
                ar: ["الأرجنتين"],
                ca_ES: "Argentina",
                cs: "Argentina",
                de: ["Argentinien"],
                el: "Argentina",
                en: "Argentina",
                es: "Argentina",
                fa: "Argentina",
                fr: ["Argentine"],
                he_IL: ["ארגנטינה"],
                hu_HU: "Argentina",
                id_ID: "Argentina",
                it: "Argentina",
                ja: ["アルゼンチン"],
                ko: ["아르헨티나"],
                ms_MY: "Argentina",
                nl_NL: "Argentina",
                pl: ["Argentyna"],
                pt: "Argentina",
                ro: "Argentina",
                ru: ["Аргентина"],
                sv: "Argentina",
                th: ["อาร์เจนตินา"],
                tr: ["Arjantin"],
                vi: "Argentina",
                zh: ["阿根廷"],
                zh_TW: ["阿根廷"]
            }
        },
        50132: e => {
            e.exports = {
                ar: ["أستراليا"],
                ca_ES: ["Austràlia"],
                cs: "Australia",
                de: ["Australien"],
                el: "Australia",
                en: "Australia",
                es: "Australia",
                fa: "Australia",
                fr: ["Australie"],
                he_IL: ["‏אוסטרליה"],
                hu_HU: ["Ausztrália"],
                id_ID: "Australia",
                it: "Australia",
                ja: ["オーストラリア"],
                ko: ["호주"],
                ms_MY: "Australia",
                nl_NL: "Australia",
                pl: "Australia",
                pt: ["Austrália"],
                ro: "Australia",
                ru: ["Австралия"],
                sv: ["Australien"],
                th: ["ออสเตรเลีย"],
                tr: ["Avustralya"],
                vi: ["Nước Úc"],
                zh: ["澳大利亚"],
                zh_TW: ["澳洲"]
            }
        },
        226505: e => {
            e.exports = {
                ar: ["أستراليا"],
                ca_ES: ["Àustria"],
                cs: "Austria",
                de: ["Österreich"],
                el: "Austria",
                en: "Austria",
                es: "Austria",
                fa: "Austria",
                fr: ["Autriche"],
                he_IL: ["אוסטריה"],
                hu_HU: "Austria",
                id_ID: "Austria",
                it: "Austria",
                ja: ["オーストリア"],
                ko: ["오스트리아"],
                ms_MY: "Austria",
                nl_NL: "Austria",
                pl: "Austria",
                pt: ["Áustria"],
                ro: "Austria",
                ru: ["Австрия"],
                sv: ["Österrike"],
                th: ["ออสเตรีย"],
                tr: ["Avusturya"],
                vi: ["Úc"],
                zh: ["奥地利"],
                zh_TW: ["奧地利"]
            }
        },
        746406: e => {
            e.exports = {
                ar: ["بتسوانا"],
                ca_ES: "Botswana",
                cs: "Botswana",
                de: "Botswana",
                el: "Botswana",
                en: "Botswana",
                es: "Botswana",
                fa: "Botswana",
                fr: "Botswana",
                he_IL: ["בוטסואנה"],
                hu_HU: "Botswana",
                id_ID: "Botswana",
                it: "Botswana",
                ja: ["ボツワナ"],
                ko: ["보스와나"],
                ms_MY: "Botswana",
                nl_NL: "Botswana",
                pl: "Botswana",
                pt: ["Botsuana"],
                ro: "Botswana",
                ru: ["Ботсвана"],
                sv: "Botswana",
                th: ["บอสวาน่า"],
                tr: "Botswana",
                vi: "Botswana",
                zh: ["博兹瓦纳"],
                zh_TW: ["波札那"]
            }
        },
        290368: e => {
            e.exports = {
                ar: ["السندات"],
                ca_ES: ["Bons"],
                cs: ["Dluhopisy"],
                de: ["Anleihen"],
                el: "Bonds",
                en: "Bonds",
                es: ["Bonos"],
                fa: ["اوراق بهادار"],
                fr: ["Obligations"],
                he_IL: ['אג"ח'],
                hu_HU: ["Kötvények"],
                id_ID: ["Obligasi"],
                it: ["Obbligazioni"],
                ja: ["債券"],
                ko: ["채권"],
                ms_MY: ["Bon"],
                nl_NL: ["Obligaties"],
                pl: ["Obligacje"],
                pt: ["Títulos"],
                ro: "Bonds",
                ru: ["Облигации"],
                sv: ["Obligationer"],
                th: ["พันธบัตร"],
                tr: ["Tahvil"],
                vi: ["Trái phiếu"],
                zh: ["债券"],
                zh_TW: ["債券"]
            }
        },
        53260: e => {
            e.exports = {
                ar: ["البحرين"],
                ca_ES: "Bahrain",
                cs: "Bahrain",
                de: "Bahrain",
                el: "Bahrain",
                en: "Bahrain",
                es: ["Bahrein"],
                fa: "Bahrain",
                fr: ["Bahrein"],
                he_IL: ["בחריין"],
                hu_HU: "Bahrain",
                id_ID: "Bahrain",
                it: ["Bahrein"],
                ja: ["バーレーン王国"],
                ko: ["바레인"],
                ms_MY: "Bahrain",
                nl_NL: "Bahrain",
                pl: "Bahrain",
                pt: ["Barein"],
                ro: "Bahrain",
                ru: ["Бахрейн"],
                sv: "Bahrain",
                th: ["บาห์เรน"],
                tr: ["Bahreyn"],
                vi: "Bahrain",
                zh: ["巴林"],
                zh_TW: ["巴林"]
            }
        },
        637653: e => {
            e.exports = {
                ar: ["بلجيكا"],
                ca_ES: ["Bèlgica"],
                cs: "Belgium",
                de: ["Belgien"],
                el: "Belgium",
                en: "Belgium",
                es: ["Bélgica"],
                fa: "Belgium",
                fr: ["Belgique"],
                he_IL: ["בלגיה"],
                hu_HU: "Belgium",
                id_ID: ["Belgia"],
                it: ["Belgio"],
                ja: ["ベルギー"],
                ko: ["벨기에"],
                ms_MY: "Belgium",
                nl_NL: "Belgium",
                pl: ["Belgia"],
                pt: ["Bélgica"],
                ro: "Belgium",
                ru: ["Бельгия"],
                sv: ["Belgien"],
                th: ["เบลเยียม"],
                tr: ["Belçika"],
                vi: ["Bỉ"],
                zh: ["比利时"],
                zh_TW: ["比利時"]
            }
        },
        992447: e => {
            e.exports = {
                ar: ["القائمة الزرقاء"],
                ca_ES: ["Llista blava"],
                cs: "Blue list",
                de: ["Blaue Liste"],
                el: "Blue list",
                en: "Blue list",
                es: ["Lista azul"],
                fa: "Blue list",
                fr: ["Liste bleue"],
                he_IL: ["רשימה כחולה"],
                hu_HU: "Blue list",
                id_ID: ["Daftar Biru"],
                it: ["Lista blu"],
                ja: ["ブルーリスト"],
                ko: ["블루 리스트"],
                ms_MY: ["Senarai biru"],
                nl_NL: "Blue list",
                pl: ["Niebieska lista"],
                pt: ["Lista azul"],
                ro: "Blue list",
                ru: ["Синий"],
                sv: ["Blå lista"],
                th: "Blue list",
                tr: ["Mavi liste"],
                vi: ["Danh sách xanh da trời"],
                zh: ["蓝色列表"],
                zh_TW: ["藍色清單"]
            }
        },
        228867: e => {
            e.exports = {
                ar: ["البرازيل"],
                ca_ES: ["Brasil"],
                cs: "Brazil",
                de: ["Brasilien"],
                el: "Brazil",
                en: "Brazil",
                es: ["Brasil"],
                fa: "Brazil",
                fr: ["Brésil"],
                he_IL: ["ברזיל‏"],
                hu_HU: ["Brazília"],
                id_ID: "Brazil",
                it: ["Brasile"],
                ja: ["ブラジル"],
                ko: ["브라질"],
                ms_MY: "Brazil",
                nl_NL: "Brazil",
                pl: ["Brazylia"],
                pt: ["Brasil"],
                ro: "Brazil",
                ru: ["Бразилия"],
                sv: ["Brasilien"],
                th: ["บราซิล"],
                tr: ["Brezilya"],
                vi: ["Nước Brazil"],
                zh: ["巴西"],
                zh_TW: ["巴西"]
            }
        },
        708682: e => {
            e.exports = {
                ar: ["انتقل إلى الرمز"],
                ca_ES: ["Ves al símbol"],
                cs: "Go to symbol",
                de: ["Gehe zu Symbol"],
                el: "Go to symbol",
                en: "Go to symbol",
                es: ["Ir al símbolo"],
                fa: "Go to symbol",
                fr: ["Aller au symbole"],
                he_IL: ["עבור לסימול"],
                hu_HU: "Go to symbol",
                id_ID: ["Menuju simbol"],
                it: ["Vai al simbolo"],
                ja: ["シンボルに移動"],
                ko: ["심볼로 가기"],
                ms_MY: ["Pergi ke simbol"],
                nl_NL: "Go to symbol",
                pl: ["Przejdź do symbolu"],
                pt: ["Vá para o símbolo"],
                ro: "Go to symbol",
                ru: ["Перейти к символу"],
                sv: ["Gå till symbolen"],
                th: ["ไปที่สัญลักษณ์"],
                tr: ["Sembole git"],
                vi: ["Tới mã giao dịch"],
                zh: ["前往商品"],
                zh_TW: ["前往商品"]
            }
        },
        715822: e => {
            e.exports = {
                ar: ["الحكومة"],
                ca_ES: "Government",
                cs: "Government",
                de: ["Regierung"],
                el: "Government",
                en: "Government",
                es: ["Gobierno"],
                fa: "Government",
                fr: ["Gouvernement"],
                he_IL: ["ממשלה"],
                hu_HU: "Government",
                id_ID: ["Pemerintah"],
                it: ["Governo"],
                ja: ["政府"],
                ko: ["정부"],
                ms_MY: ["Kerajaan"],
                nl_NL: "Government",
                pl: ["Instytucje państwowe"],
                pt: ["Governo"],
                ro: "Government",
                ru: ["Государственные компании"],
                sv: ["Regering"],
                th: ["รัฐบาล"],
                tr: ["Hükümet"],
                vi: ["Chính phủ"],
                zh: ["政府部门"],
                zh_TW: ["政府"]
            }
        },
        159985: e => {
            e.exports = {
                ar: ["ألمانيا"],
                ca_ES: ["Alemanya"],
                cs: "Germany",
                de: ["Deutschland"],
                el: "Germany",
                en: "Germany",
                es: ["Alemania"],
                fa: "Germany",
                fr: ["Allemagne"],
                he_IL: ["גרמניה"],
                hu_HU: "Germany",
                id_ID: ["Jerman"],
                it: ["Germania"],
                ja: ["ドイツ"],
                ko: ["독일"],
                ms_MY: ["Jerman"],
                nl_NL: "Germany",
                pl: ["Niemcy"],
                pt: ["Alemanha"],
                ro: "Germany",
                ru: ["Германия"],
                sv: ["Tyskland"],
                th: ["เยอรมัน"],
                tr: ["Almanya"],
                vi: ["Đức"],
                zh: ["德国"],
                zh_TW: ["德國"]
            }
        },
        848856: e => {
            e.exports = {
                ar: ["غانا"],
                ca_ES: "Ghana",
                cs: "Ghana",
                de: "Ghana",
                el: "Ghana",
                en: "Ghana",
                es: "Ghana",
                fa: "Ghana",
                fr: "Ghana",
                he_IL: ["גאנה"],
                hu_HU: "Ghana",
                id_ID: "Ghana",
                it: "Ghana",
                ja: ["ガーナ"],
                ko: ["가나"],
                ms_MY: "Ghana",
                nl_NL: "Ghana",
                pl: "Ghana",
                pt: ["Gana"],
                ro: "Ghana",
                ru: ["Гана"],
                sv: "Ghana",
                th: ["กานา"],
                tr: ["Gana"],
                vi: "Ghana",
                zh: ["加纳"],
                zh_TW: ["迦納"]
            }
        },
        971464: e => {
            e.exports = {
                ar: ["القائمة الخضراء"],
                ca_ES: ["Llista verda"],
                cs: "Green list",
                de: ["Grüne Liste"],
                el: "Green list",
                en: "Green list",
                es: ["Lista verde"],
                fa: "Green list",
                fr: ["Liste verte"],
                he_IL: ["רשימה ירוקה"],
                hu_HU: "Green list",
                id_ID: ["Daftar Hijau"],
                it: ["Lista verde"],
                ja: ["グリーンリスト"],
                ko: ["그린 리스트"],
                ms_MY: ["Senarai hijau"],
                nl_NL: "Green list",
                pl: ["Zielona lista"],
                pt: ["Lista verde"],
                ro: "Green list",
                ru: ["Зелёный"],
                sv: ["Grön lista"],
                th: "Green list",
                tr: ["Yeşil liste"],
                vi: ["Danh sách xanh"],
                zh: ["绿色列表"],
                zh_TW: ["綠色清單"]
            }
        },
        480411: e => {
            e.exports = {
                ar: ["اليونان"],
                ca_ES: ["Grècia"],
                cs: "Greece",
                de: ["Griechenland"],
                el: "Greece",
                en: "Greece",
                es: ["Grecia"],
                fa: "Greece",
                fr: ["Grèce"],
                he_IL: ["יוון"],
                hu_HU: "Greece",
                id_ID: ["Yunani"],
                it: ["Grecia"],
                ja: ["ギリシャ"],
                ko: ["그리스"],
                ms_MY: "Greece",
                nl_NL: "Greece",
                pl: ["Grecja"],
                pt: ["Grécia"],
                ro: "Greece",
                ru: ["Греция"],
                sv: ["Grekland"],
                th: ["กรีซ"],
                tr: ["Yunanistan"],
                vi: ["Hy Lạp"],
                zh: ["希腊"],
                zh_TW: ["希臘"]
            }
        },
        64901: e => {
            e.exports = {
                ar: ["الدنمارك"],
                ca_ES: ["Dinamarca"],
                cs: "Denmark",
                de: ["Dänemark"],
                el: "Denmark",
                en: "Denmark",
                es: ["Dinamarca"],
                fa: "Denmark",
                fr: ["Danemark"],
                he_IL: ["דנמרק"],
                hu_HU: "Denmark",
                id_ID: "Denmark",
                it: ["Danimarca"],
                ja: ["デンマーク"],
                ko: ["덴마크"],
                ms_MY: "Denmark",
                nl_NL: "Denmark",
                pl: ["Dania"],
                pt: ["Dinamarca"],
                ro: "Denmark",
                ru: ["Дания"],
                sv: ["Danmark"],
                th: ["เดนมาร์ค"],
                tr: ["Danimarka"],
                vi: ["Đan Mạch"],
                zh: ["丹麦"],
                zh_TW: ["丹麥"]
            }
        },
        629601: e => {
            e.exports = {
                ar: ["الوصف"],
                ca_ES: ["Descripció"],
                cs: ["Popis"],
                de: ["Beschreibung"],
                el: "Description",
                en: "Description",
                es: ["Descripción"],
                fa: ["شرح"],
                fr: "Description",
                he_IL: ["תיאור"],
                hu_HU: ["Leírás"],
                id_ID: ["Deskripsi"],
                it: ["Descrizione"],
                ja: ["詳細"],
                ko: ["설명"],
                ms_MY: ["Huraian"],
                nl_NL: ["Beschrijving"],
                pl: ["Opis"],
                pt: ["Descrição"],
                ro: "Description",
                ru: ["Описание"],
                sv: ["Beskrivning"],
                th: ["คำอธิบาย"],
                tr: ["Açıklama"],
                vi: ["Mô tả"],
                zh: ["描述"],
                zh_TW: ["描述"]
            }
        },
        151254: e => {
            e.exports = {
                ar: ["خدمات التوزيع"],
                ca_ES: "Distribution Services",
                cs: "Distribution Services",
                de: ["Vertriebsdienstleistungen"],
                el: "Distribution Services",
                en: "Distribution Services",
                es: ["Servicios de distribución"],
                fa: "Distribution Services",
                fr: ["Services de Distribution"],
                he_IL: ["שירותי הפצה"],
                hu_HU: "Distribution Services",
                id_ID: ["Layanan Distribusi"],
                it: ["Servizi di distribuzione"],
                ja: ["流通サービス"],
                ko: ["디스트리뷰션 서비스"],
                ms_MY: ["Khidmat Pengagihan"],
                nl_NL: "Distribution Services",
                pl: ["Usługi dystrybucyjne"],
                pt: ["Serviços de Logistica"],
                ro: "Distribution Services",
                ru: ["Дистрибуция"],
                sv: ["Distributionstjänster"],
                th: ["บริการการกระจายสินค้า"],
                tr: ["Dağıtım Servisleri"],
                vi: ["Dịch vụ Phân phối"],
                zh: ["配送服务"],
                zh_TW: ["配送服務"]
            }
        },
        730816: e => {
            e.exports = {
                ar: ["صناديق الاستثمار المتداولة (ETF)"],
                ca_ES: "ETF",
                cs: "ETF",
                de: "ETF",
                el: "ETF",
                en: "ETF",
                es: "ETF",
                fa: "ETF",
                fr: "ETF",
                he_IL: "ETF",
                hu_HU: "ETF",
                id_ID: "ETF",
                it: "ETF",
                ja: "ETF",
                ko: "ETF",
                ms_MY: "ETF",
                nl_NL: "ETF",
                pl: "ETF",
                pt: "ETF",
                ro: "ETF",
                ru: "ETF",
                sv: "ETF",
                th: "ETF",
                tr: ["BYF"],
                vi: ["Quỹ ETF"],
                zh: "ETF",
                zh_TW: "ETF"
            }
        },
        618383: e => {
            e.exports = {
                ar: ["طاقة"],
                ca_ES: "Energy",
                cs: "Energy",
                de: ["Energie"],
                el: "Energy",
                en: "Energy",
                es: ["Energía"],
                fa: "Energy",
                fr: ["Énergie"],
                he_IL: ["אנרגיה"],
                hu_HU: ["Energia"],
                id_ID: ["Energi"],
                it: ["Energia"],
                ja: ["エネルギー"],
                ko: ["에너지"],
                ms_MY: ["Tenaga"],
                nl_NL: "Energy",
                pl: ["Surowce energetyczne"],
                pt: ["Energia"],
                ro: "Energy",
                ru: ["Энергетика"],
                sv: ["Energi"],
                th: ["พลังงาน"],
                tr: ["Enerji"],
                vi: ["Năng lượng"],
                zh: ["能源"],
                zh_TW: ["能源"]
            }
        },
        503332: e => {
            e.exports = {
                ar: ["معادن الطاقة"],
                ca_ES: "Energy Minerals",
                cs: "Energy Minerals",
                de: ["Energie Mineralien"],
                el: "Energy Minerals",
                en: "Energy Minerals",
                es: ["Minerales energéticos"],
                fa: "Energy Minerals",
                fr: ["Minéraux énergétiques"],
                he_IL: ["מינרלים אנרגיה"],
                hu_HU: "Energy Minerals",
                id_ID: ["Mineral Energi"],
                it: ["Minerali energetici"],
                ja: ["エネルギー鉱物"],
                ko: ["에너지 미네랄"],
                ms_MY: ["Tenaga Mineral"],
                nl_NL: "Energy Minerals",
                pl: ["Minerały energetyczne"],
                pt: ["Minerais Energéticos"],
                ro: "Energy Minerals",
                ru: ["Энергетические и минеральные ресурсы"],
                sv: ["Energimineraler"],
                th: ["แร่พลังงาน"],
                tr: ["Enerji Mineralleri"],
                vi: ["Năng lượng Mỏ"],
                zh: ["能源矿产"],
                zh_TW: ["能源礦產"]
            }
        },
        337556: e => {
            e.exports = {
                ar: ["اقتصاد"],
                ca_ES: ["Economia"],
                cs: "Economy",
                de: ["Ökonomie"],
                el: "Economy",
                en: "Economy",
                es: ["Economía"],
                fa: "Economy",
                fr: ["Économie"],
                he_IL: ["כלכלה"],
                hu_HU: ["Gazdaság"],
                id_ID: ["Ekonomi"],
                it: ["Economia"],
                ja: ["経済指標"],
                ko: ["경제"],
                ms_MY: ["Ekonomi"],
                nl_NL: "Economy",
                pl: ["Gospodarka"],
                pt: ["Economia"],
                ro: "Economy",
                ru: ["Экономика"],
                sv: ["Ekonomi"],
                th: ["เศรษฐกิจ"],
                tr: ["Ekonomi"],
                vi: ["Nền kinh tế"],
                zh: ["经济"],
                zh_TW: ["經濟"]
            }
        },
        205390: e => {
            e.exports = {
                ar: ["مصر"],
                ca_ES: ["Egipte"],
                cs: "Egypt",
                de: ["Ägypten"],
                el: "Egypt",
                en: "Egypt",
                es: ["Egipto"],
                fa: "Egypt",
                fr: ["Egypte"],
                he_IL: ["מצרים"],
                hu_HU: "Egypt",
                id_ID: ["Mesir"],
                it: ["Egitto"],
                ja: ["エジプト"],
                ko: ["이집트"],
                ms_MY: ["Mesir"],
                nl_NL: "Egypt",
                pl: ["Egipt"],
                pt: ["Egito"],
                ro: "Egypt",
                ru: ["Египет"],
                sv: ["Egypten"],
                th: ["อียิปต์"],
                tr: ["Mısır"],
                vi: ["Ai Cập"],
                zh: ["埃及"],
                zh_TW: ["埃及"]
            }
        },
        225255: e => {
            e.exports = {
                ar: ["التكنولوجيا الإلكترونية"],
                ca_ES: "Electronic Technology",
                cs: "Electronic Technology",
                de: ["Elektronik Technologie"],
                el: "Electronic Technology",
                en: "Electronic Technology",
                es: ["Tecnología electrónica"],
                fa: "Electronic Technology",
                fr: ["Technologie électronique"],
                he_IL: ["טכנולוגיה אלקטרונית"],
                hu_HU: "Electronic Technology",
                id_ID: ["Teknologi Elektronik"],
                it: ["Tecnologia elettronica"],
                ja: ["電子テクノロジー"],
                ko: ["일렉트로닉 테크놀로지"],
                ms_MY: ["Teknologi Elektronik"],
                nl_NL: "Electronic Technology",
                pl: ["Technologia elektroniczna"],
                pt: ["Tecnologia Eletrônica"],
                ro: "Electronic Technology",
                ru: ["Электронные технологии"],
                sv: ["Elektronisk teknik"],
                th: ["เทคโนโลยีอิเลคทรอนิกส์"],
                tr: ["Elektronik Teknoloji"],
                vi: ["Công nghệ Điện tử"],
                zh: ["电子科技"],
                zh_TW: ["電子科技"]
            }
        },
        959823: e => {
            e.exports = {
                ar: ["إستونيا"],
                ca_ES: ["Estònia"],
                cs: "Estonia",
                de: ["Estland"],
                el: "Estonia",
                en: "Estonia",
                es: "Estonia",
                fa: "Estonia",
                fr: ["Estonie"],
                he_IL: ["אסטוניה"],
                hu_HU: "Estonia",
                id_ID: "Estonia",
                it: "Estonia",
                ja: ["エストニア共和国"],
                ko: ["에스토니아"],
                ms_MY: "Estonia",
                nl_NL: "Estonia",
                pl: "Estonia",
                pt: ["Estônia"],
                ro: "Estonia",
                ru: ["Эстония"],
                sv: ["Estland"],
                th: ["เอสโตเนีย"],
                tr: ["Estonya"],
                vi: "Estonia",
                zh: ["爱沙尼亚"],
                zh_TW: ["愛沙尼亞"]
            }
        },
        698440: e => {
            e.exports = {
                ar: ["إثيوبيا"],
                ca_ES: ["Etiòpia"],
                cs: "Ethiopia",
                de: ["Äthiopien"],
                el: "Ethiopia",
                en: "Ethiopia",
                es: ["Etiopía"],
                fa: "Ethiopia",
                fr: ["Ethiopie"],
                he_IL: ["אתיופיה"],
                hu_HU: "Ethiopia",
                id_ID: ["Etiopia"],
                it: ["Etiopia"],
                ja: ["エチオピア"],
                ko: ["이디오피아"],
                ms_MY: "Ethiopia",
                nl_NL: "Ethiopia",
                pl: ["Etiopia"],
                pt: ["Etiópia"],
                ro: "Ethiopia",
                ru: ["Эфиопия"],
                sv: ["Etiopien"],
                th: ["เอธิโอเปีย"],
                tr: ["Etiyopya"],
                vi: "Ethiopia",
                zh: ["埃塞尔比亚"],
                zh_TW: ["衣索比亞"]
            }
        },
        600442: e => {
            e.exports = {
                ar: ["الاتحاد الاوربي"],
                ca_ES: ["Unió Europea"],
                cs: "European Union",
                de: ["Europäische Union"],
                el: "European Union",
                en: "European Union",
                es: ["Unión Europea"],
                fa: "European Union",
                fr: ["Union Européenne"],
                he_IL: ["האיחוד האירופאי"],
                hu_HU: ["Európa Unió"],
                id_ID: ["Uni Eropa"],
                it: ["Unione Europea"],
                ja: ["欧州連合"],
                ko: ["유럽연합"],
                ms_MY: ["Kesatuan Eropah"],
                nl_NL: "European Union",
                pl: ["Unia Europejska"],
                pt: ["União Européia"],
                ro: "European Union",
                ru: ["Европейский союз"],
                sv: ["Europeiska Unionen"],
                th: ["กลุ่มสหภาพยุโรป"],
                tr: ["Avrupa Birliği"],
                vi: ["Liên minh Châu Âu"],
                zh: ["欧盟"],
                zh_TW: ["歐盟"]
            }
        },
        324241: e => {
            e.exports = {
                ar: ["فوركس"],
                ca_ES: "Forex",
                cs: "Forex",
                de: ["Devisen"],
                el: "Forex",
                en: "Forex",
                es: "Forex",
                fa: ["فارکس"],
                fr: "Forex",
                he_IL: ['מט"ח'],
                hu_HU: "Forex",
                id_ID: "Forex",
                it: "Forex",
                ja: ["FX"],
                ko: ["외환"],
                ms_MY: "Forex",
                nl_NL: "Forex",
                pl: "Forex",
                pt: "Forex",
                ro: "Forex",
                ru: ["Форекс"],
                sv: ["Valuta"],
                th: ["ฟอเร็กซ์"],
                tr: ["Döviz"],
                vi: ["Ngoại hối"],
                zh: ["外汇"],
                zh_TW: ["外匯"]
            }
        },
        909228: e => {
            e.exports = {
                ar: ["القطاع المالي"],
                ca_ES: "Finance",
                cs: "Finance",
                de: ["Finanzwesen"],
                el: "Finance",
                en: "Finance",
                es: ["Finanzas"],
                fa: "Finance",
                fr: "Finance",
                he_IL: ["פיננסי"],
                hu_HU: "Finance",
                id_ID: ["Finansial"],
                it: ["Finanza"],
                ja: ["金融"],
                ko: ["파이낸스"],
                ms_MY: ["Kewangan"],
                nl_NL: "Finance",
                pl: ["Finanse"],
                pt: ["Financeiro"],
                ro: "Finance",
                ru: ["Финансы"],
                sv: ["Finans"],
                th: ["การเงิน"],
                tr: ["Finans"],
                vi: ["Tài chính"],
                zh: ["金融"],
                zh_TW: ["金融"]
            }
        },
        936693: e => {
            e.exports = {
                ar: ["فنلندا"],
                ca_ES: ["Finlàndia"],
                cs: "Finland",
                de: ["Finnland"],
                el: "Finland",
                en: "Finland",
                es: ["Finlandia"],
                fa: "Finland",
                fr: ["Finlande"],
                he_IL: ["פינלנד"],
                hu_HU: "Finland",
                id_ID: ["Finlandia"],
                it: ["Finlandia"],
                ja: ["フィンランド"],
                ko: ["핀란드"],
                ms_MY: "Finland",
                nl_NL: "Finland",
                pl: ["Finlandia"],
                pt: ["Finlândia"],
                ro: "Finland",
                ru: ["Финляндия"],
                sv: "Finland",
                th: ["ฟินแลนด์"],
                tr: ["Finlandiya"],
                vi: ["Phần Lan"],
                zh: ["芬兰"],
                zh_TW: ["芬蘭"]
            }
        },
        696013: e => {
            e.exports = {
                ar: ["فرنسا"],
                ca_ES: ["França"],
                cs: "France",
                de: ["Frankreich"],
                el: "France",
                en: "France",
                es: ["Francia"],
                fa: "France",
                fr: "France",
                he_IL: ["צרפת"],
                hu_HU: "France",
                id_ID: ["Perancis"],
                it: ["Francia"],
                ja: ["フランス"],
                ko: ["프랑스"],
                ms_MY: ["Perancis"],
                nl_NL: "France",
                pl: ["Francja"],
                pt: ["França"],
                ro: "France",
                ru: ["Франция"],
                sv: ["Frankrike"],
                th: ["ฝรั่งเศส"],
                tr: ["Fransa"],
                vi: ["Pháp"],
                zh: ["法国"],
                zh_TW: ["法國"]
            }
        },
        468631: e => {
            e.exports = {
                ar: ["العقود الآجلة"],
                ca_ES: ["Futurs"],
                cs: ["Termínované kontrakty"],
                de: "Futures",
                el: ["Παράγωγα"],
                en: "Futures",
                es: ["Futuros"],
                fa: ["آتی"],
                fr: ["Contrats à terme"],
                he_IL: ["חוזים עתידיים"],
                hu_HU: ["Határidősök"],
                id_ID: ["Kontrak Berjangka"],
                it: "Futures",
                ja: ["先物"],
                ko: ["선물"],
                ms_MY: ["Hadapan"],
                nl_NL: "Futures",
                pl: ["Kontrakty terminowe"],
                pt: ["Futuros"],
                ro: "Futures",
                ru: ["Фьючерсы"],
                sv: ["Terminskontrakt"],
                th: ["ฟิวเจอร์ส"],
                tr: ["Vadeli"],
                vi: ["Hợp đồng Tương lai"],
                zh: ["期货"],
                zh_TW: ["期貨"]
            }
        },
        301992: e => {
            e.exports = {
                ar: ["أموال"],
                ca_ES: "Funds",
                cs: "Funds",
                de: ["Geldmittel"],
                el: "Funds",
                en: "Funds",
                es: ["Fondos"],
                fa: "Funds",
                fr: ["Fonds"],
                he_IL: ["קרנות"],
                hu_HU: "Funds",
                id_ID: ["Dana"],
                it: ["Fondi"],
                ja: ["ファンド"],
                ko: ["펀드"],
                ms_MY: ["Dana"],
                nl_NL: "Funds",
                pl: ["Fundusze"],
                pt: ["Fundos"],
                ro: "Funds",
                ru: ["Фонды"],
                sv: ["Fonder"],
                th: "Funds",
                tr: ["Fonlar"],
                vi: ["Quỹ"],
                zh: ["基金"],
                zh_TW: ["基金"]
            }
        },
        89080: e => {
            e.exports = {
                ar: ["كينيا"],
                ca_ES: ["Kènia"],
                cs: "Kenya",
                de: ["Kenia"],
                el: "Kenya",
                en: "Kenya",
                es: ["Kenia"],
                fa: "Kenya",
                fr: "Kenya",
                he_IL: ["קניה"],
                hu_HU: "Kenya",
                id_ID: "Kenya",
                it: "Kenya",
                ja: ["ケニア"],
                ko: ["케냐"],
                ms_MY: "Kenya",
                nl_NL: "Kenya",
                pl: ["Kenia"],
                pt: ["Quênia"],
                ro: "Kenya",
                ru: ["Кения"],
                sv: "Kenya",
                th: ["เคนยา"],
                tr: "Kenya",
                vi: "Kenya",
                zh: ["肯尼亚"],
                zh_TW: ["肯亞"]
            }
        },
        872374: e => {
            e.exports = {
                ar: ["الكويت"],
                ca_ES: "Kuwait",
                cs: "Kuwait",
                de: "Kuwait",
                el: "Kuwait",
                en: "Kuwait",
                es: "Kuwait",
                fa: "Kuwait",
                fr: ["Koweit"],
                he_IL: ["כווית"],
                hu_HU: "Kuwait",
                id_ID: "Kuwait",
                it: "Kuwait",
                ja: ["クウェート"],
                ko: ["쿠웨이트"],
                ms_MY: "Kuwait",
                nl_NL: "Kuwait",
                pl: ["Kuwejt"],
                pt: "Kuwait",
                ro: "Kuwait",
                ru: ["Кувейт"],
                sv: "Kuwait",
                th: ["คูเวต"],
                tr: ["Kuveyt"],
                vi: "Kuwait",
                zh: ["科威特"],
                zh_TW: ["科威特"]
            }
        },
        532918: e => {
            e.exports = {
                ar: ["هونج كونج"],
                ca_ES: "Hong Kong",
                cs: "Hong Kong",
                de: ["Hongkong"],
                el: "Hong Kong",
                en: "Hong Kong",
                es: "Hong Kong",
                fa: ["هنگ کنگ"],
                fr: "Hong Kong",
                he_IL: ["הונג קונג"],
                hu_HU: "Hong Kong",
                id_ID: "Hong Kong",
                it: "Hong Kong",
                ja: ["香港"],
                ko: ["홍콩"],
                ms_MY: "Hong Kong",
                nl_NL: "Hong Kong",
                pl: ["Hongkong"],
                pt: "Hong Kong",
                ro: "Hong Kong",
                ru: ["Гонконг"],
                sv: ["Hongkong"],
                th: ["ฮ่องกง"],
                tr: "Hong Kong",
                vi: ["Hồng Kông"],
                zh: ["中国香港"],
                zh_TW: ["香港"]
            }
        },
        617047: e => {
            e.exports = {
                ar: ["الخدمات الصحية"],
                ca_ES: "Health Services",
                cs: "Health Services",
                de: ["Gesundheitswesen"],
                el: "Health Services",
                en: "Health Services",
                es: ["Servicios de salud"],
                fa: "Health Services",
                fr: ["Services de santé"],
                he_IL: ["שירותי בריאות"],
                hu_HU: "Health Services",
                id_ID: ["Layanan Kesehatan"],
                it: ["Servizi sanitari"],
                ja: ["ヘルスサービス"],
                ko: ["헬쓰 서비스"],
                ms_MY: ["Khidmat Kesihatan"],
                nl_NL: "Health Services",
                pl: ["Usługi zdrowotne"],
                pt: ["Serviços de Saúde"],
                ro: "Health Services",
                ru: ["Здравоохранение"],
                sv: ["Hälsotjänster"],
                th: ["บริการเกี่ยวกับสุขภาพ"],
                tr: ["Sağlık Hizmetleri"],
                vi: ["Dịch vụ chăm sóc Sức khỏe"],
                zh: ["健康服务"],
                zh_TW: ["健康服務"]
            }
        },
        792105: e => {
            e.exports = {
                ar: ["تكنولوجيا الصحة"],
                ca_ES: "Health Technology",
                cs: "Health Technology",
                de: ["Gesundheit Technologie"],
                el: "Health Technology",
                en: "Health Technology",
                es: ["Tecnologías sanitarias"],
                fa: "Health Technology",
                fr: ["Technologie de la santé"],
                he_IL: ["טכנולוגיית בריאות"],
                hu_HU: "Health Technology",
                id_ID: ["Teknologi Kesehatan"],
                it: ["Tecnologia sanitaria"],
                ja: ["ヘルステクノロジー"],
                ko: ["헬쓰 테크놀로지"],
                ms_MY: ["Teknologi Kesihatan"],
                nl_NL: "Health Technology",
                pl: ["Technologie medyczne"],
                pt: ["Tecnologia em Saúde"],
                ro: "Health Technology",
                ru: ["Медицинские технологии"],
                sv: ["Hälsoteknik"],
                th: ["เทคโนโลยีเกี่ยวกับสุขภาพ"],
                tr: ["Sağlık Teknolojisi"],
                vi: ["Công nghệ Sức khỏe"],
                zh: ["健康科技"],
                zh_TW: ["健康科技"]
            }
        },
        930646: e => {
            e.exports = {
                ar: ["المجر"],
                ca_ES: ["Hongria"],
                cs: "Hungary",
                de: ["Ungarn"],
                el: "Hungary",
                en: "Hungary",
                es: ["Hungría"],
                fa: "Hungary",
                fr: ["Hongrie"],
                he_IL: ["הונגריה"],
                hu_HU: "Hungary",
                id_ID: ["Hungaria"],
                it: ["Ungheria"],
                ja: ["ハンガリー"],
                ko: ["헝가리"],
                ms_MY: "Hungary",
                nl_NL: "Hungary",
                pl: ["Węgry"],
                pt: ["Hungria"],
                ro: "Hungary",
                ru: ["Венгрия"],
                sv: ["Ungern"],
                th: ["ฮังการี"],
                tr: ["Macaristan"],
                vi: "Hungary",
                zh: ["匈牙利"],
                zh_TW: ["匈牙利"]
            }
        },
        99391: e => {
            e.exports = {
                ar: ["مؤشر"],
                ca_ES: ["Índex"],
                cs: "Index",
                de: "Index",
                el: ["Δείκτης"],
                en: "Index",
                es: ["Índice"],
                fa: ["شاخص"],
                fr: ["Indice"],
                he_IL: ["מדד"],
                hu_HU: "Index",
                id_ID: ["Indeks"],
                it: ["Indice"],
                ja: ["指数"],
                ko: ["지수"],
                ms_MY: ["Indeks"],
                nl_NL: "Index",
                pl: ["Indeks"],
                pt: ["Índice"],
                ro: "Index",
                ru: ["Индексы"],
                sv: "Index",
                th: ["ดัชนี"],
                tr: ["Endeks"],
                vi: ["Chỉ số"],
                zh: ["指数"],
                zh_TW: ["指數"]
            }
        },
        16207: e => {
            e.exports = {
                ar: ["الهند"],
                ca_ES: ["Índia"],
                cs: "India",
                de: ["Indien"],
                el: "India",
                en: "India",
                es: "India",
                fa: "India",
                fr: ["Inde"],
                he_IL: ["הודו‏"],
                hu_HU: "India",
                id_ID: "India",
                it: "India",
                ja: ["インド"],
                ko: ["인도"],
                ms_MY: "India",
                nl_NL: "India",
                pl: ["Indie"],
                pt: ["Índia"],
                ro: "India",
                ru: ["Индия"],
                sv: ["Indien"],
                th: ["อินเดีย"],
                tr: ["Hindistan"],
                vi: ["Ấn Độ"],
                zh: ["印度"],
                zh_TW: ["印度"]
            }
        },
        433468: e => {
            e.exports = {
                ar: ["المؤشرات"],
                ca_ES: ["Índex"],
                cs: ["Indexy"],
                de: ["Indizes"],
                el: "Indices",
                en: "Indices",
                es: ["Índices"],
                fa: ["شاخص ها"],
                fr: "Indices",
                he_IL: ["מדדים"],
                hu_HU: ["Indexek"],
                id_ID: ["Indeks"],
                it: ["Indici"],
                ja: ["指数"],
                ko: ["지수"],
                ms_MY: ["Indeks"],
                nl_NL: "Indices",
                pl: ["Indeksy"],
                pt: ["Índices"],
                ro: "Indices",
                ru: ["Индексы"],
                sv: ["Index"],
                th: ["ดัชนี"],
                tr: ["Endeks"],
                vi: ["Các chỉ số"],
                zh: ["指数"],
                zh_TW: ["指數"]
            }
        },
        609759: e => {
            e.exports = {
                ar: ["أندونيسيا"],
                ca_ES: ["Indonèsia"],
                cs: "Indonesia",
                de: ["Indonesien"],
                el: "Indonesia",
                en: "Indonesia",
                es: "Indonesia",
                fa: "Indonesia",
                fr: ["Indonésie"],
                he_IL: ["אינדונזיה"],
                hu_HU: "Indonesia",
                id_ID: "Indonesia",
                it: "Indonesia",
                ja: ["インドネシア"],
                ko: ["인도네시아"],
                ms_MY: "Indonesia",
                nl_NL: "Indonesia",
                pl: ["Indonezja"],
                pt: ["Indonésia"],
                ro: "Indonesia",
                ru: ["Индонезия"],
                sv: ["Indonesien"],
                th: ["อินโดนีเซีย"],
                tr: ["Endonezya"],
                vi: "Indonesia",
                zh: ["印度尼西亚"],
                zh_TW: ["印尼"]
            }
        },
        685674: e => {
            e.exports = {
                ar: ["الخدمات الصناعية"],
                ca_ES: "Industrial Services",
                cs: "Industrial Services",
                de: ["Industrielle Services"],
                el: "Industrial Services",
                en: "Industrial Services",
                es: ["Servicios industriales"],
                fa: "Industrial Services",
                fr: ["Services Industriels"],
                he_IL: ["שירותים תעשייתיים"],
                hu_HU: "Industrial Services",
                id_ID: ["Layanan Industri"],
                it: ["Servizi industriali"],
                ja: ["工業サービス"],
                ko: ["인더스트리얼 서비스"],
                ms_MY: ["Perkhidmatan Industri"],
                nl_NL: "Industrial Services",
                pl: ["Usługi przemysłowe"],
                pt: ["Serviços Industriais"],
                ro: "Industrial Services",
                ru: ["Производственно-технические услуги"],
                sv: ["Industriella tjänster"],
                th: ["บริการเกี่ยวกับอุตสาหกรรม"],
                tr: ["Endüstriyel Hizmetler"],
                vi: ["Dịch vụ Công nghiệp"],
                zh: ["工业服务"],
                zh_TW: ["工業服務"]
            }
        },
        664150: e => {
            e.exports = {
                ar: ["أيسلندا"],
                ca_ES: ["Islàndia"],
                cs: "Iceland",
                de: ["Island"],
                el: "Iceland",
                en: "Iceland",
                es: ["Islandia"],
                fa: "Iceland",
                fr: ["Islande"],
                he_IL: ["איסלנד"],
                hu_HU: "Iceland",
                id_ID: "Iceland",
                it: ["Islanda"],
                ja: ["アイスランド"],
                ko: ["아이스랜드"],
                ms_MY: "Iceland",
                nl_NL: "Iceland",
                pl: ["Islandia"],
                pt: ["Islândia"],
                ro: "Iceland",
                ru: ["Исландия"],
                sv: ["Island"],
                th: ["ไอซ์แลนด์"],
                tr: ["İzlanda"],
                vi: "Iceland",
                zh: ["冰岛"],
                zh_TW: ["冰島"]
            }
        },
        328408: e => {
            e.exports = {
                ar: ["أيرلندا"],
                ca_ES: ["Irlanda"],
                cs: "Ireland",
                de: ["Irland"],
                el: "Ireland",
                en: "Ireland",
                es: ["Irlanda"],
                fa: "Ireland",
                fr: ["Irlande"],
                he_IL: ["אירלנד"],
                hu_HU: "Ireland",
                id_ID: ["Irlandia"],
                it: ["Irlanda"],
                ja: ["アイルランド"],
                ko: ["아일랜드"],
                ms_MY: "Ireland",
                nl_NL: "Ireland",
                pl: ["Irlandia"],
                pt: ["Irlanda"],
                ro: "Ireland",
                ru: ["Ирландия"],
                sv: ["Irland"],
                th: ["ไอร์แลนด์"],
                tr: ["İrlanda"],
                vi: "Ireland",
                zh: ["爱尔兰"],
                zh_TW: ["愛爾蘭"]
            }
        },
        261935: e => {
            e.exports = {
                ar: ["اسرائيل"],
                ca_ES: "Israel",
                cs: "Israel",
                de: "Israel",
                el: "Israel",
                en: "Israel",
                es: "Israel",
                fa: "Israel",
                fr: ["Israël"],
                he_IL: ["ישראל"],
                hu_HU: "Israel",
                id_ID: "Israel",
                it: ["Israele"],
                ja: ["イスラエル"],
                ko: ["이스라엘"],
                ms_MY: "Israel",
                nl_NL: "Israel",
                pl: ["Izrael"],
                pt: "Israel",
                ro: "Israel",
                ru: ["Израиль"],
                sv: "Israel",
                th: ["อิสราเอล"],
                tr: ["İsrail"],
                vi: "Israel",
                zh: ["以色列"],
                zh_TW: ["以色列"]
            }
        },
        43246: e => {
            e.exports = {
                ar: ["إيطاليا"],
                ca_ES: ["Itàlia"],
                cs: "Italy",
                de: ["Italien"],
                el: "Italy",
                en: "Italy",
                es: ["Italia"],
                fa: "Italy",
                fr: ["Italie"],
                he_IL: ["איטליה"],
                hu_HU: "Italy",
                id_ID: ["Italia"],
                it: ["Italia"],
                ja: ["イタリア"],
                ko: ["이태리"],
                ms_MY: ["Itali"],
                nl_NL: "Italy",
                pl: ["Włochy"],
                pt: ["Itália"],
                ro: "Italy",
                ru: ["Италия"],
                sv: ["Italien"],
                th: ["อิตาลี"],
                tr: ["İtalya"],
                vi: "Italy",
                zh: ["意大利"],
                zh_TW: ["義大利"]
            }
        },
        692443: e => {
            e.exports = {
                ar: ["اليابان"],
                ca_ES: ["Japó"],
                cs: "Japan",
                de: "Japan",
                el: "Japan",
                en: "Japan",
                es: ["Japón"],
                fa: "Japan",
                fr: ["Japon"],
                he_IL: ["יפן‏"],
                hu_HU: ["Japán"],
                id_ID: ["Jepang"],
                it: ["Giappone"],
                ja: ["日本"],
                ko: ["일본"],
                ms_MY: ["Jepun"],
                nl_NL: "Japan",
                pl: ["Japonia"],
                pt: ["Japão"],
                ro: "Japan",
                ru: ["Япония"],
                sv: "Japan",
                th: ["ญี่ปุ่น"],
                tr: ["Japonya"],
                vi: ["Nhật Bản"],
                zh: ["日本"],
                zh_TW: ["日本"]
            }
        },
        552456: e => {
            e.exports = {
                ar: ["عمان"],
                ca_ES: "Oman",
                cs: "Oman",
                de: "Oman",
                el: "Oman",
                en: "Oman",
                es: ["Omán"],
                fa: "Oman",
                fr: "Oman",
                he_IL: ["עמאן"],
                hu_HU: "Oman",
                id_ID: "Oman",
                it: "Oman",
                ja: ["オマーン"],
                ko: ["오만"],
                ms_MY: "Oman",
                nl_NL: "Oman",
                pl: "Oman",
                pt: ["Omã"],
                ro: "Oman",
                ru: ["Оман"],
                sv: "Oman",
                th: ["โอมาน"],
                tr: "Oman",
                vi: "Oman",
                zh: ["阿曼"],
                zh_TW: ["阿曼"]
            }
        },
        141393: e => {
            e.exports = {
                ar: ["القائمة البرتقالية"],
                ca_ES: ["Llista taronja"],
                cs: "Orange list",
                de: ["Orangene Liste"],
                el: "Orange list",
                en: "Orange list",
                es: ["Lista naranja"],
                fa: "Orange list",
                fr: ["Liste orange"],
                he_IL: ["רשימה כתומה"],
                hu_HU: "Orange list",
                id_ID: ["Daftar Oranye"],
                it: ["Lista arancio"],
                ja: ["オレンジリスト"],
                ko: ["오렌지 리스트"],
                ms_MY: ["Senarai jingga"],
                nl_NL: "Orange list",
                pl: ["Pomarańczowa lista"],
                pt: ["Lista laranja"],
                ro: "Orange list",
                ru: ["Оранжевый"],
                sv: ["Orange lista"],
                th: "Orange list",
                tr: ["Turuncu liste"],
                vi: ["Danh sách cam"],
                zh: ["橙色列表"],
                zh_TW: ["橙色清單"]
            }
        },
        484045: e => {
            e.exports = {
                ar: ["لاتفيا"],
                ca_ES: ["Letònia"],
                cs: "Latvia",
                de: ["Lettland"],
                el: "Latvia",
                en: "Latvia",
                es: "Latvia",
                fa: "Latvia",
                fr: ["Lettonie"],
                he_IL: ["לטביה"],
                hu_HU: "Latvia",
                id_ID: "Latvia",
                it: ["Lettonia"],
                ja: ["ラトビア"],
                ko: ["라트비아"],
                ms_MY: "Latvia",
                nl_NL: "Latvia",
                pl: ["Łotwa"],
                pt: ["Letônia"],
                ro: "Latvia",
                ru: ["Латвия"],
                sv: ["Lettland"],
                th: ["แลตเวีย"],
                tr: ["Letonya"],
                vi: "Latvia",
                zh: ["拉脱维亚"],
                zh_TW: ["拉脫維亞"]
            }
        },
        529113: e => {
            e.exports = {
                ar: ["ليتوانيا"],
                ca_ES: ["Lituània"],
                cs: "Lithuania",
                de: ["Litauen"],
                el: "Lithuania",
                en: "Lithuania",
                es: ["Lituania"],
                fa: "Lithuania",
                fr: ["Lithuanie"],
                he_IL: ["ליטא"],
                hu_HU: "Lithuania",
                id_ID: ["Lituania"],
                it: ["Lituania"],
                ja: ["リトアニア"],
                ko: ["리투아니아"],
                ms_MY: "Lithuania",
                nl_NL: "Lithuania",
                pl: ["Litwa"],
                pt: ["Lituânia"],
                ro: "Lithuania",
                ru: ["Литва"],
                sv: ["Litauen"],
                th: ["ลิธัวเนีย"],
                tr: ["Litvanya"],
                vi: "Lithuania",
                zh: ["立陶宛"],
                zh_TW: ["立陶宛"]
            }
        },
        164352: e => {
            e.exports = {
                ar: ["لوكسمبورغ"],
                ca_ES: ["Luxemburg"],
                cs: "Luxembourg",
                de: ["Luxemburg"],
                el: "Luxembourg",
                en: "Luxembourg",
                es: ["Luxemburgo"],
                fa: "Luxembourg",
                fr: "Luxembourg",
                he_IL: ["לוקסמבורג"],
                hu_HU: "Luxembourg",
                id_ID: "Luxembourg",
                it: ["Lussemburgo"],
                ja: ["ルクセンブルク"],
                ko: ["룩셈부르크"],
                ms_MY: "Luxembourg",
                nl_NL: "Luxembourg",
                pl: ["Luksemburg"],
                pt: ["Luxemburgo"],
                ro: "Luxembourg",
                ru: ["Люксембург"],
                sv: ["Luxemburg"],
                th: ["ลักเซมเบิร์ก"],
                tr: ["Lüksemburg"],
                vi: "Luxembourg",
                zh: ["卢森堡"],
                zh_TW: ["盧森堡"]
            }
        },
        158266: e => {
            e.exports = {
                ar: ["موزانبيق"],
                ca_ES: ["Moçambic"],
                cs: "Mozambique",
                de: ["Mosambik"],
                el: "Mozambique",
                en: "Mozambique",
                es: "Mozambique",
                fa: "Mozambique",
                fr: "Mozambique",
                he_IL: ["מוזמביק"],
                hu_HU: "Mozambique",
                id_ID: "Mozambique",
                it: ["Mozabico"],
                ja: ["モザンビーク"],
                ko: ["모잠비크"],
                ms_MY: "Mozambique",
                nl_NL: "Mozambique",
                pl: ["Mozambik"],
                pt: ["Moçambique"],
                ro: "Mozambique",
                ru: ["Мозамбик"],
                sv: ["Moçambique"],
                th: ["โมซัมบิก"],
                tr: ["Mozambik"],
                vi: "Mozambique",
                zh: ["莫桑比克"],
                zh_TW: ["莫三比克"]
            }
        },
        902616: e => {
            e.exports = {
                ar: ["موريشيوس"],
                ca_ES: ["Maurici"],
                cs: "Mauritius",
                de: "Mauritius",
                el: "Mauritius",
                en: "Mauritius",
                es: ["Mauricio"],
                fa: "Mauritius",
                fr: ["Ile Maurice"],
                he_IL: ["מאוריציוס"],
                hu_HU: "Mauritius",
                id_ID: "Mauritius",
                it: "Mauritius",
                ja: ["モーリシャス"],
                ko: ["모리티우스"],
                ms_MY: "Mauritius",
                nl_NL: "Mauritius",
                pl: "Mauritius",
                pt: ["Maurício"],
                ro: "Mauritius",
                ru: ["Маврикий"],
                sv: "Mauritius",
                th: ["มอริเชียส"],
                tr: ["Maritus"],
                vi: "Mauritius",
                zh: ["毛里求斯"],
                zh_TW: ["模里西斯"]
            }
        },
        652371: e => {
            e.exports = {
                ar: ["ملاوي"],
                ca_ES: "Malawi",
                cs: "Malawi",
                de: "Malawi",
                el: "Malawi",
                en: "Malawi",
                es: "Malawi",
                fa: "Malawi",
                fr: "Malawi",
                he_IL: ["מלאווי"],
                hu_HU: "Malawi",
                id_ID: "Malawi",
                it: "Malawi",
                ja: ["マラウイ"],
                ko: ["말라위"],
                ms_MY: "Malawi",
                nl_NL: "Malawi",
                pl: "Malawi",
                pt: ["Malauí"],
                ro: "Malawi",
                ru: ["Малави"],
                sv: "Malawi",
                th: ["มาลาวี"],
                tr: ["Malavi"],
                vi: "Malawi",
                zh: ["马拉维"],
                zh_TW: ["馬拉威"]
            }
        },
        622622: e => {
            e.exports = {
                ar: ["ماليزيا"],
                ca_ES: ["Malàisia"],
                cs: "Malaysia",
                de: "Malaysia",
                el: "Malaysia",
                en: "Malaysia",
                es: ["Malasia"],
                fa: "Malaysia",
                fr: ["Malaisie"],
                he_IL: ["מלזיה"],
                hu_HU: "Malaysia",
                id_ID: "Malaysia",
                it: ["Malesia"],
                ja: ["マレーシア"],
                ko: ["말레이시아"],
                ms_MY: "Malaysia",
                nl_NL: "Malaysia",
                pl: ["Malezja"],
                pt: ["Malásia"],
                ro: "Malaysia",
                ru: ["Малайзия"],
                sv: "Malaysia",
                th: ["มาเลเซีย"],
                tr: ["Malezya"],
                vi: "Malaysia",
                zh: ["马来西亚"],
                zh_TW: ["馬來西亞"]
            }
        },
        334190: e => {
            e.exports = {
                ar: ["مالطا"],
                ca_ES: "Malta",
                cs: "Malta",
                de: "Malta",
                el: "Malta",
                en: "Malta",
                es: "Malta",
                fa: "Malta",
                fr: ["Malte"],
                he_IL: ["מלטה"],
                hu_HU: "Malta",
                id_ID: "Malta",
                it: "Malta",
                ja: ["マルタ"],
                ko: ["몰타"],
                ms_MY: "Malta",
                nl_NL: "Malta",
                pl: "Malta",
                pt: "Malta",
                ro: "Malta",
                ru: ["Мальта"],
                sv: "Malta",
                th: ["มอลตา"],
                tr: "Malta",
                vi: "Malta",
                zh: ["马耳他"],
                zh_TW: ["馬爾他"]
            }
        },
        555087: e => {
            e.exports = {
                ar: ["المكسيك"],
                ca_ES: ["Mèxic"],
                cs: "Mexico",
                de: ["Mexiko"],
                el: "Mexico",
                en: "Mexico",
                es: ["México"],
                fa: "Mexico",
                fr: ["Mexique"],
                he_IL: ["מקסיקו"],
                hu_HU: "Mexico",
                id_ID: ["Meksiko"],
                it: ["Messico"],
                ja: ["メキシコ"],
                ko: ["멕시코"],
                ms_MY: "Mexico",
                nl_NL: "Mexico",
                pl: ["Meksyk"],
                pt: ["México"],
                ro: "Mexico",
                ru: ["Мексика"],
                sv: ["Mexiko"],
                th: ["เม็กซิโก"],
                tr: ["Meksika"],
                vi: "Mexico",
                zh: ["墨西哥"],
                zh_TW: ["墨西哥"]
            }
        },
        78144: e => {
            e.exports = {
                ar: ["متفرقات"],
                ca_ES: "Miscellaneous",
                cs: "Miscellaneous",
                de: ["Sonstige"],
                el: "Miscellaneous",
                en: "Miscellaneous",
                es: ["Miscelánea"],
                fa: "Miscellaneous",
                fr: ["Divers"],
                he_IL: ["שונות"],
                hu_HU: "Miscellaneous",
                id_ID: ["Lain-lain"],
                it: ["Varie"],
                ja: ["その他"],
                ko: ["기타 (Miscellaneous)"],
                ms_MY: ["Lain-lain"],
                nl_NL: "Miscellaneous",
                pl: ["Różne"],
                pt: ["Miscelânea"],
                ro: "Miscellaneous",
                ru: ["Разное"],
                sv: ["Diverse"],
                th: ["อื่นๆ"],
                tr: ["Çeşitli Hizmetler"],
                vi: ["Hỗn hợp"],
                zh: ["其他"],
                zh_TW: ["其他類"]
            }
        },
        218146: e => {
            e.exports = {
                ar: ["صندوق استثمار مشترك"],
                ca_ES: ["Fons d'inversió"],
                cs: "Mutual fund",
                de: ["Offener Investmentfond"],
                el: "Mutual fund",
                en: "Mutual fund",
                es: ["Fondo de inversión"],
                fa: "Mutual fund",
                fr: ["Fonds mutuel"],
                he_IL: ["קרן נאמנות"],
                hu_HU: "Mutual fund",
                id_ID: ["Reksa dana / Mutual fund"],
                it: ["Fondi comuni"],
                ja: ["ミューチュアル・ファンド"],
                ko: ["뮤츄얼 펀드"],
                ms_MY: ["Dana bersama"],
                nl_NL: "Mutual fund",
                pl: "Mutual fund",
                pt: ["Fundo mútuo"],
                ro: "Mutual fund",
                ru: ["Паевой фонд"],
                sv: ["Andelsfond"],
                th: ["กองทุนรวม"],
                tr: ["Ortak fon"],
                vi: ["Quỹ chung"],
                zh: ["共同基金"],
                zh_TW: ["共同基金"]
            }
        },
        606255: e => {
            e.exports = {
                ar: ["لا"],
                ca_ES: "No",
                cs: ["Ne"],
                de: ["Nein"],
                el: "No",
                en: "No",
                es: "No",
                fa: "No",
                fr: ["Non"],
                he_IL: ["לא"],
                hu_HU: ["Nem"],
                id_ID: ["Tidak"],
                it: "No",
                ja: ["いいえ"],
                ko: ["아니오"],
                ms_MY: ["Tidak"],
                nl_NL: "No",
                pl: ["Nie"],
                pt: ["Não"],
                ro: "No",
                ru: ["Нет"],
                sv: ["Nej"],
                th: ["ไม่"],
                tr: ["Hayır"],
                vi: ["Không"],
                zh: ["否"],
                zh_TW: ["否"]
            }
        },
        349011: e => {
            e.exports = {
                ar: ["لا توجد بيانات لهذا الرمز"],
                ca_ES: ["No existeixen dades per a aquest símbol"],
                cs: "No data for this symbol",
                de: ["Keine Daten für diese Symbol"],
                el: "No data for this symbol",
                en: "No data for this symbol",
                es: ["No existen datos para este símbolo"],
                fa: "No data for this symbol",
                fr: ["Aucune donnée pour ce symbole"],
                he_IL: ["אין נתונים עבור סימול זה"],
                hu_HU: "No data for this symbol",
                id_ID: ["Tidak ada data untuk simbol ini"],
                it: ["Non ci sono dati per questo simbolo"],
                ja: ["このシンボルのデータはありません"],
                ko: ["이 심볼 데이터 없음"],
                ms_MY: ["Tiada data untuk simbol ini"],
                nl_NL: "No data for this symbol",
                pl: ["Brak danych dla tego symbolu"],
                pt: ["Sem dados para esse símbolo"],
                ro: "No data for this symbol",
                ru: ["Нет данных для этого символа"],
                sv: ["Inga uppgifter om den här symbolen"],
                th: ["ไม่มีข้อมูลสำหรับตัวย่อนี้"],
                tr: ["Bu sembol için veri yok"],
                vi: ["Không có dữ liệu cho mã này"],
                zh: ["该商品代码无数据"],
                zh_TW: ["該商品無數據"]
            }
        },
        578234: e => {
            e.exports = {
                ar: ["المعادن الأخرى - غير مصادر الطاقة"],
                ca_ES: "Non-Energy Minerals",
                cs: "Non-Energy Minerals",
                de: ["Nicht Energie Mineralien"],
                el: "Non-Energy Minerals",
                en: "Non-Energy Minerals",
                es: ["Minerales no energéticos"],
                fa: "Non-Energy Minerals",
                fr: ["Minéraux non-énergétiques"],
                he_IL: ["מינרלים שאינם אנרגיה"],
                hu_HU: "Non-Energy Minerals",
                id_ID: ["Mineral Non-Energi"],
                it: ["Minerali non energetici"],
                ja: ["非エネルギー鉱物"],
                ko: ["비에너지 미네럴"],
                ms_MY: ["Mineral Bukan Tenaga"],
                nl_NL: "Non-Energy Minerals",
                pl: ["Minerały nieenergetyczne"],
                pt: ["Minerais não Energéticos"],
                ro: "Non-Energy Minerals",
                ru: ["Несырьевые полезные ископаемые"],
                sv: ["Icke-energimineraler"],
                th: ["แร่ธาตุไม่ให้พลังงาน"],
                tr: ["Enerji-dışı Mineraller"],
                vi: ["Khoáng sản phi năng lượng"],
                zh: ["非能源矿业"],
                zh_TW: ["非能源礦產"]
            }
        },
        99203: e => {
            e.exports = {
                ar: ["جزيرة نورفولك"],
                ca_ES: ["Illa de Norfolk"],
                cs: "Norfolk Island",
                de: "Norfolk Island",
                el: "Norfolk Island",
                en: "Norfolk Island",
                es: ["Isla de Norfolk"],
                fa: "Norfolk Island",
                fr: "Norfolk Island",
                he_IL: ["אי נורפולק"],
                hu_HU: "Norfolk Island",
                id_ID: ["Pulai Norfolk"],
                it: ["Isola Norfolk"],
                ja: ["ノーフォーク島"],
                ko: ["노포크 아일랜드"],
                ms_MY: "Norfolk Island",
                nl_NL: "Norfolk Island",
                pl: ["Norfolk"],
                pt: ["Ilha Norfolk"],
                ro: "Norfolk Island",
                ru: ["Остров Норфолк"],
                sv: "Norfolk Island",
                th: ["เกาะนอร์ฟอล์ก"],
                tr: ["Norfolk Adaları"],
                vi: ["Đảo Norfolk"],
                zh: ["诺福克岛"],
                zh_TW: "Norfolk Island"
            }
        },
        145075: e => {
            e.exports = {
                ar: ["النرويج"],
                ca_ES: ["Noruega"],
                cs: "Norway",
                de: ["Norwegen"],
                el: "Norway",
                en: "Norway",
                es: ["Noruega"],
                fa: "Norway",
                fr: ["Norvège"],
                he_IL: ["נורבגיה"],
                hu_HU: "Norway",
                id_ID: ["Norwegia"],
                it: ["Norvegia"],
                ja: ["ノルウェー"],
                ko: ["노르웨이"],
                ms_MY: "Norway",
                nl_NL: "Norway",
                pl: ["Norwegia"],
                pt: ["Noruega"],
                ro: "Norway",
                ru: ["Норвегия"],
                sv: ["Norge"],
                th: ["นอร์เวย์"],
                tr: ["Norveç"],
                vi: ["Na Uy"],
                zh: ["挪威"],
                zh_TW: ["挪威"]
            }
        },
        714417: e => {
            e.exports = {
                ar: ["ناميبيا"],
                ca_ES: ["Namíbia"],
                cs: "Namibia",
                de: "Namibia",
                el: "Namibia",
                en: "Namibia",
                es: "Namibia",
                fa: "Namibia",
                fr: ["Namibie"],
                he_IL: ["נמיביה"],
                hu_HU: "Namibia",
                id_ID: "Namibia",
                it: "Namibia",
                ja: ["ナミビア"],
                ko: ["나미비아"],
                ms_MY: "Namibia",
                nl_NL: "Namibia",
                pl: "Namibia",
                pt: ["Namíbia"],
                ro: "Namibia",
                ru: ["Намибия"],
                sv: "Namibia",
                th: ["นามิเบีย"],
                tr: ["Namibya"],
                vi: "Namibia",
                zh: ["纳米比亚"],
                zh_TW: ["納米比亞"]
            }
        },
        353770: e => {
            e.exports = {
                ar: ["هولندا"],
                ca_ES: ["Països Baixos"],
                cs: "Netherlands",
                de: ["Niederlande"],
                el: "Netherlands",
                en: "Netherlands",
                es: ["Países Bajos"],
                fa: "Netherlands",
                fr: ["Pays-Bas"],
                he_IL: ["הולנד"],
                hu_HU: "Netherlands",
                id_ID: ["Belanda"],
                it: ["Olanda"],
                ja: ["オランダ"],
                ko: ["네덜란드"],
                ms_MY: ["Belanda"],
                nl_NL: "Netherlands",
                pl: ["Holandia"],
                pt: ["Holanda"],
                ro: "Netherlands",
                ru: ["Нидерланды"],
                sv: ["Nederländerna"],
                th: ["เนเธอร์แลนด์"],
                tr: ["Hollanda"],
                vi: ["Hà Lan"],
                zh: ["荷兰"],
                zh_TW: ["荷蘭"]
            }
        },
        824143: e => {
            e.exports = {
                ar: ["نيوزلندا"],
                ca_ES: ["Nova Zelanda"],
                cs: "New Zealand",
                de: ["Neuseeland"],
                el: "New Zealand",
                en: "New Zealand",
                es: ["Nueva Zelanda"],
                fa: "New Zealand",
                fr: ["Nouvelle-Zélande"],
                he_IL: ["ניו זילנד‏"],
                hu_HU: ["Új-Zéland"],
                id_ID: ["Selandia Baru"],
                it: ["Nuova Zelanda"],
                ja: ["ニュージーランド"],
                ko: ["뉴질랜드"],
                ms_MY: "New Zealand",
                nl_NL: "New Zealand",
                pl: ["Nowa Zelandia"],
                pt: ["Nova Zelândia"],
                ro: "New Zealand",
                ru: ["Новая Зеландия"],
                sv: ["Nya Zeeland"],
                th: ["นิวซีแลนด์"],
                tr: ["Yeni Zelanda"],
                vi: "New Zealand",
                zh: ["新西兰"],
                zh_TW: ["紐西蘭"]
            }
        },
        62410: e => {
            e.exports = {
                ar: ["نيجيريا"],
                ca_ES: ["Nigèria"],
                cs: "Nigeria",
                de: "Nigeria",
                el: "Nigeria",
                en: "Nigeria",
                es: "Nigeria",
                fa: "Nigeria",
                fr: "Nigeria",
                he_IL: ["ניגריה"],
                hu_HU: "Nigeria",
                id_ID: "Nigeria",
                it: "Nigeria",
                ja: ["ナイジェリア"],
                ko: ["나이지리아"],
                ms_MY: "Nigeria",
                nl_NL: "Nigeria",
                pl: "Nigeria",
                pt: ["Nigéria"],
                ro: "Nigeria",
                ru: ["Нигерия"],
                sv: "Nigeria",
                th: ["ไนจีเรีย"],
                tr: ["Nijerya"],
                vi: "Nigeria",
                zh: ["尼日利亚"],
                zh_TW: ["奈及利亞"]
            }
        },
        528900: e => {
            e.exports = {
                ar: ["جنوب أفريقيا"],
                ca_ES: ["Sud-àfrica"],
                cs: "South Africa",
                de: ["Südafrika"],
                el: "South Africa",
                en: "South Africa",
                es: ["Sudáfrica"],
                fa: "South Africa",
                fr: ["Afrique du Sud"],
                he_IL: ["צפון אפריקה"],
                hu_HU: "South Africa",
                id_ID: ["Afrika Selatan"],
                it: ["Sud Africa"],
                ja: ["南アフリカ"],
                ko: ["남아프리카"],
                ms_MY: ["Afrika Selatan"],
                nl_NL: "South Africa",
                pl: ["Afryka Południowa"],
                pt: ["África do Sul"],
                ro: "South Africa",
                ru: ["Южная Африка"],
                sv: ["Sydafrika"],
                th: ["แอฟริกาใต้"],
                tr: ["Güney Afrika"],
                vi: ["Nam Phi"],
                zh: ["南非"],
                zh_TW: ["南非"]
            }
        },
        173160: e => {
            e.exports = {
                ar: ["كوريا الجنوبية"],
                ca_ES: ["Corea del Sud"],
                cs: "South Korea",
                de: ["Südkorea"],
                el: "South Korea",
                en: "South Korea",
                es: ["Corea del Sur"],
                fa: "South Korea",
                fr: ["Corée du sud"],
                he_IL: ["דרום קוריאה"],
                hu_HU: "South Korea",
                id_ID: ["Korea Selatan"],
                it: ["Corea del Sud"],
                ja: ["韓国"],
                ko: ["대한민국"],
                ms_MY: ["Korea Selatan"],
                nl_NL: "South Korea",
                pl: ["Korea Południowa"],
                pt: ["Coréia do Sul"],
                ro: "South Korea",
                ru: ["Южная Корея"],
                sv: ["Sydkorea"],
                th: ["เกาหลีใต้"],
                tr: ["Güney Korea"],
                vi: ["Hàn Quốc"],
                zh: ["韩国"],
                zh_TW: ["南韓"]
            }
        },
        936261: e => {
            e.exports = {
                ar: ["السعودية"],
                ca_ES: ["Aràbia Saudita"],
                cs: "Saudi Arabia",
                de: ["Saudi Arabien"],
                el: "Saudi Arabia",
                en: "Saudi Arabia",
                es: ["Arabia Saudí"],
                fa: "Saudi Arabia",
                fr: ["Arabie Saoudite"],
                he_IL: ["ערב הסעודית"],
                hu_HU: "Saudi Arabia",
                id_ID: ["Arab Saudi"],
                it: ["Arabia Saudita"],
                ja: ["サウジアラビア"],
                ko: ["사우디아라비아"],
                ms_MY: ["Arab Saudi"],
                nl_NL: "Saudi Arabia",
                pl: ["Arabia Saudyjska"],
                pt: ["Arábia Saudita"],
                ro: "Saudi Arabia",
                ru: ["Саудовская Аравия"],
                sv: ["Saudiarabien"],
                th: ["ซาอุดี อาระเบีย"],
                tr: ["Suudi Arabistan"],
                vi: "Saudi Arabia",
                zh: ["沙特阿拉伯"],
                zh_TW: ["沙烏地阿拉伯"]
            }
        },
        959609: e => {
            e.exports = {
                ar: ["سيشل"],
                ca_ES: "Seychelles",
                cs: "Seychelles",
                de: ["Seychellen"],
                el: "Seychelles",
                en: "Seychelles",
                es: "Seychelles",
                fa: "Seychelles",
                fr: "Seychelles",
                he_IL: ["סיישל"],
                hu_HU: "Seychelles",
                id_ID: "Seychelles",
                it: "Seychelles",
                ja: ["セーシェル"],
                ko: ["세이셸"],
                ms_MY: "Seychelles",
                nl_NL: "Seychelles",
                pl: ["Seszele"],
                pt: ["Seicheles"],
                ro: "Seychelles",
                ru: ["Сейшелы"],
                sv: ["Seychellerna"],
                th: ["เซเชลส์"],
                tr: ["Seyşeller"],
                vi: "Seychelles",
                zh: ["塞舌尔"],
                zh_TW: ["塞席爾"]
            }
        },
        896573: e => {
            e.exports = {
                ar: ["صربيا"],
                ca_ES: ["Sèrbia"],
                cs: "Serbia",
                de: ["Serbien"],
                el: "Serbia",
                en: "Serbia",
                es: "Serbia",
                fa: "Serbia",
                fr: ["Serbie"],
                he_IL: ["סרביה"],
                hu_HU: "Serbia",
                id_ID: "Serbia",
                it: "Serbia",
                ja: ["セルビア"],
                ko: ["세르비아"],
                ms_MY: "Serbia",
                nl_NL: "Serbia",
                pl: "Serbia",
                pt: ["Sérvia"],
                ro: "Serbia",
                ru: ["Сербия"],
                sv: ["Serbien"],
                th: ["เซอร์เบีย"],
                tr: ["Sırbistan"],
                vi: "Serbia",
                zh: ["塞尔维亚"],
                zh_TW: ["塞爾維亞"]
            }
        },
        156683: e => {
            e.exports = {
                ar: ["سنغافورة"],
                ca_ES: ["Singapur"],
                cs: ["Singapur"],
                de: ["Singapur"],
                el: "Singapore",
                en: "Singapore",
                es: ["Singapur"],
                fa: ["سنگاپور"],
                fr: ["Singapour"],
                he_IL: ["סינגפור"],
                hu_HU: ["Szingapúr"],
                id_ID: ["Singapura"],
                it: "Singapore",
                ja: ["シンガポール"],
                ko: ["싱가폴"],
                ms_MY: ["Singapura"],
                nl_NL: "Singapore",
                pl: ["Singapur"],
                pt: ["Singapura"],
                ro: "Singapore",
                ru: ["Сингапур"],
                sv: "Singapore",
                th: ["สิงค์โปร์"],
                tr: ["Singapur"],
                vi: "Singapore",
                zh: ["新加坡"],
                zh_TW: ["新加坡"]
            }
        },
        506262: e => {
            e.exports = {
                ar: ["سلوفاكيا"],
                ca_ES: ["Eslovàquia"],
                cs: "Slovakia",
                de: ["Slowakei"],
                el: "Slovakia",
                en: "Slovakia",
                es: ["Eslovaquia"],
                fa: "Slovakia",
                fr: ["Slovaquie"],
                he_IL: ["סלובקיה"],
                hu_HU: "Slovakia",
                id_ID: "Slovakia",
                it: ["Slovacchia"],
                ja: ["スロバキア共和国"],
                ko: ["슬로바키아"],
                ms_MY: "Slovakia",
                nl_NL: "Slovakia",
                pl: ["Słowacja"],
                pt: ["Eslováquia"],
                ro: "Slovakia",
                ru: ["Словакия"],
                sv: ["Slovakien"],
                th: ["สโลวะเกีย"],
                tr: ["Slovakya"],
                vi: "Slovakia",
                zh: ["斯洛伐克"],
                zh_TW: ["斯洛伐克"]
            }
        },
        792334: e => {
            e.exports = {
                ar: ["إسبانيا"],
                ca_ES: ["Espanya"],
                cs: "Spain",
                de: ["Spanien"],
                el: "Spain",
                en: "Spain",
                es: ["España"],
                fa: "Spain",
                fr: ["Espagne"],
                he_IL: ["ספרד‏"],
                hu_HU: ["Spanyolország"],
                id_ID: ["Spanyol"],
                it: ["Spagna"],
                ja: ["スペイン"],
                ko: ["스페인"],
                ms_MY: ["Sepanyol"],
                nl_NL: "Spain",
                pl: ["Hiszpania"],
                pt: ["Espanha"],
                ro: "Spain",
                ru: ["Испания"],
                sv: ["Spanien"],
                th: ["สเปน"],
                tr: ["İspanya"],
                vi: ["Tây Ban Nha"],
                zh: ["西班牙"],
                zh_TW: ["西班牙"]
            }
        },
        567835: e => {
            e.exports = {
                ar: ["سريلانكا"],
                ca_ES: "Sri Lanka",
                cs: "Sri Lanka",
                de: "Sri Lanka",
                el: "Sri Lanka",
                en: "Sri Lanka",
                es: "Sri Lanka",
                fa: "Sri Lanka",
                fr: "Sri Lanka",
                he_IL: ["סרי לנקה"],
                hu_HU: "Sri Lanka",
                id_ID: "Sri Lanka",
                it: "Sri Lanka",
                ja: ["スリランカ"],
                ko: ["스리랑카"],
                ms_MY: "Sri Lanka",
                nl_NL: "Sri Lanka",
                pl: "Sri Lanka",
                pt: ["Siri Lanka"],
                ro: "Sri Lanka",
                ru: ["Шри-Ланка"],
                sv: "Sri Lanka",
                th: ["ศรีลังกา"],
                tr: "Sri Lanka",
                vi: "Sri Lanka",
                zh: ["斯里兰卡"],
                zh_TW: ["斯里蘭卡"]
            }
        },
        426294: e => {
            e.exports = {
                ar: ["الأسهم"],
                ca_ES: ["Accions"],
                cs: ["Akcie"],
                de: ["Aktien"],
                el: "Stocks",
                en: "Stocks",
                es: ["Acciones"],
                fa: ["سهام"],
                fr: ["Actions"],
                he_IL: ["מניות‏"],
                hu_HU: ["Részvények"],
                id_ID: ["Saham"],
                it: ["Azioni"],
                ja: ["株式"],
                ko: ["주식"],
                ms_MY: ["Saham"],
                nl_NL: ["Aandelen"],
                pl: ["Akcje giełdowe"],
                pt: ["Ações"],
                ro: "Stocks",
                ru: ["Акции"],
                sv: ["Aktier"],
                th: ["หุ้น"],
                tr: ["Hisse"],
                vi: ["Cổ phiếu"],
                zh: ["股票"],
                zh_TW: ["股票"]
            }
        },
        182404: e => {
            e.exports = {
                ar: ["السويد"],
                ca_ES: ["Suècia"],
                cs: "Sweden",
                de: ["Schweden"],
                el: "Sweden",
                en: "Sweden",
                es: ["Suecia"],
                fa: "Sweden",
                fr: ["Suède"],
                he_IL: ["שוודיה"],
                hu_HU: "Sweden",
                id_ID: ["Swedia"],
                it: ["Svezia"],
                ja: ["スウェーデン"],
                ko: ["스웨덴"],
                ms_MY: "Sweden",
                nl_NL: "Sweden",
                pl: ["Szwecja"],
                pt: ["Suécia"],
                ro: "Sweden",
                ru: ["Швеция"],
                sv: ["Sverige"],
                th: ["สวีเดน"],
                tr: ["İsveç"],
                vi: ["Thụy Điển"],
                zh: ["瑞典"],
                zh_TW: ["瑞典"]
            }
        },
        440414: e => {
            e.exports = {
                ar: ["سويسرا"],
                ca_ES: ["Suïssa"],
                cs: "Switzerland",
                de: ["Schweiz"],
                el: "Switzerland",
                en: "Switzerland",
                es: ["Suiza"],
                fa: "Switzerland",
                fr: ["Suisse"],
                he_IL: ["שוויץ"],
                hu_HU: "Switzerland",
                id_ID: ["Swiss"],
                it: ["Svizzera"],
                ja: ["スイス"],
                ko: ["스위스"],
                ms_MY: "Switzerland",
                nl_NL: "Switzerland",
                pl: ["Szwajcaria"],
                pt: ["Suiça"],
                ro: "Switzerland",
                ru: ["Швейцария"],
                sv: ["Schweiz"],
                th: ["สวิตเซอร์แลนด์"],
                tr: ["İsviçre"],
                vi: ["Thụy Sĩ"],
                zh: ["瑞士"],
                zh_TW: ["瑞士"]
            }
        },
        589053: e => {
            e.exports = {
                ar: ["رمز"],
                ca_ES: ["Símbol"],
                cs: "Symbol",
                de: "Symbol",
                el: ["Σύμβολο"],
                en: "Symbol",
                es: ["Símbolo"],
                fa: ["نماد"],
                fr: ["Symbole"],
                he_IL: ["סימול"],
                hu_HU: ["Szimbólum"],
                id_ID: ["Simbol"],
                it: ["Simbolo"],
                ja: ["シンボル"],
                ko: ["심볼"],
                ms_MY: ["Simbol"],
                nl_NL: ["Symbool"],
                pl: "Symbol",
                pt: ["Símbolo"],
                ro: "Symbol",
                ru: ["Инструмент"],
                sv: "Symbol",
                th: ["สัญลักษณ์"],
                tr: ["Sembol"],
                vi: ["Mã"],
                zh: ["商品代码"],
                zh_TW: ["商品代碼"]
            }
        },
        83796: e => {
            e.exports = {
                ar: ["اسم قائمة الرموز"],
                ca_ES: ["Nom de la llista de símbols"],
                cs: "Symbol list name",
                de: ["Name der Symbolliste"],
                el: "Symbol list name",
                en: "Symbol list name",
                es: ["Nombre de la lista de símbolos"],
                fa: "Symbol list name",
                fr: ["Liste de noms des symboles"],
                he_IL: ["שם רשימת הסימולים"],
                hu_HU: ["Szimbólum lista neve"],
                id_ID: ["Nama daftar simbol"],
                it: ["Nome lista simboli"],
                ja: ["シンボルのリスト名"],
                ko: ["심볼 리스트 이름"],
                ms_MY: ["Nama senarai simbol"],
                nl_NL: "Symbol list name",
                pl: ["Nazwa listy symboli"],
                pt: ["Nome na listagem de símbolos"],
                ro: "Symbol list name",
                ru: ["Имя списка инструментов"],
                sv: ["Symbolers namnlista"],
                th: ["ชื่อรายการสัญลักษณ์"],
                tr: ["Sembol listesin adı"],
                vi: ["Danh sách tên Mã giao dịch"],
                zh: ["商品列表名称"],
                zh_TW: ["商品列表名稱"]
            }
        },
        210119: e => {
            e.exports = {
                ar: ["بولندا"],
                ca_ES: ["Polònia"],
                cs: "Poland",
                de: ["Polen"],
                el: "Poland",
                en: "Poland",
                es: ["Polonia"],
                fa: "Poland",
                fr: ["Pologne"],
                he_IL: ["פולין"],
                hu_HU: "Poland",
                id_ID: ["Polandia"],
                it: ["Polonia"],
                ja: ["ポーランド"],
                ko: ["폴란드"],
                ms_MY: "Poland",
                nl_NL: "Poland",
                pl: ["Polska"],
                pt: ["Polônia"],
                ro: "Poland",
                ru: ["Польша"],
                sv: ["Polen"],
                th: ["โปแลนด์"],
                tr: ["Polonya"],
                vi: ["Ba Lan"],
                zh: ["波兰"],
                zh_TW: ["波蘭"]
            }
        },
        123496: e => {
            e.exports = {
                ar: ["البرتغال"],
                ca_ES: "Portugal",
                cs: "Portugal",
                de: "Portugal",
                el: "Portugal",
                en: "Portugal",
                es: "Portugal",
                fa: "Portugal",
                fr: "Portugal",
                he_IL: ["פיליפינים"],
                hu_HU: "Portugal",
                id_ID: "Portugal",
                it: ["Portogallo"],
                ja: ["ポルトガル"],
                ko: ["포르투갈"],
                ms_MY: "Portugal",
                nl_NL: "Portugal",
                pl: ["Portugalia"],
                pt: "Portugal",
                ro: "Portugal",
                ru: ["Португалия"],
                sv: "Portugal",
                th: ["โปรตุเกส"],
                tr: ["Portekiz"],
                vi: ["Bồ Đào Nha"],
                zh: ["葡萄牙"],
                zh_TW: ["葡萄牙"]
            }
        },
        622979: e => {
            e.exports = {
                ar: ["بيرو"],
                ca_ES: ["Perú"],
                cs: "Peru",
                de: "Peru",
                el: "Peru",
                en: "Peru",
                es: ["Perú"],
                fa: "Peru",
                fr: ["Pérou"],
                he_IL: ["פרו"],
                hu_HU: "Peru",
                id_ID: "Peru",
                it: ["Perù"],
                ja: ["ペルー"],
                ko: ["페루"],
                ms_MY: "Peru",
                nl_NL: "Peru",
                pl: "Peru",
                pt: "Peru",
                ro: "Peru",
                ru: ["Перу"],
                sv: "Peru",
                th: ["เปรู"],
                tr: "Peru",
                vi: "Peru",
                zh: ["秘鲁"],
                zh_TW: ["秘魯"]
            }
        },
        226813: e => {
            e.exports = {
                ar: ["الفلبين"],
                ca_ES: ["Filipines"],
                cs: "Philippines",
                de: ["Philippinen"],
                el: "Philippines",
                en: "Philippines",
                es: ["Filipinas"],
                fa: "Philippines",
                fr: "Philippines",
                he_IL: ["פיליפינים"],
                hu_HU: "Philippines",
                id_ID: ["Filipina"],
                it: ["Filippine"],
                ja: ["フィリピン"],
                ko: ["필리핀"],
                ms_MY: ["Filipina"],
                nl_NL: "Philippines",
                pl: ["Filipiny"],
                pt: ["Filipinas"],
                ro: "Philippines",
                ru: ["Филиппины"],
                sv: ["Filippinerna"],
                th: ["ฟิลิปปินส์"],
                tr: ["Filipinler"],
                vi: "Philippines",
                zh: ["菲律宾"],
                zh_TW: ["菲律賓"]
            }
        },
        816786: e => {
            e.exports = {
                ar: ["قائمة وردية"],
                ca_ES: ["Llista rosa"],
                cs: "Pink list",
                de: ["Pinke Liste"],
                el: "Pink list",
                en: "Pink list",
                es: ["Lista rosa"],
                fa: "Pink list",
                fr: ["Liste rose"],
                he_IL: ["רשימה ורודה"],
                hu_HU: "Pink list",
                id_ID: ["Daftar pink"],
                it: ["Lista rosa"],
                ja: ["ピンクリスト"],
                ko: ["핑크색 목록"],
                ms_MY: ["Senarai merah jambu"],
                nl_NL: "Pink list",
                pl: ["Różowa lista"],
                pt: ["Lista rosa"],
                ro: "Pink list",
                ru: ["Розовый"],
                sv: ["Rosa lista"],
                th: ["รายการสีชมพู"],
                tr: ["Pembe liste"],
                vi: ["Danh sách màu hồng"],
                zh: ["粉色列表"],
                zh_TW: ["粉色清單"]
            }
        },
        946140: e => {
            e.exports = {
                ar: ["الصناعات التحويلية"],
                ca_ES: "Process Industries",
                cs: "Process Industries",
                de: ["Verarbeitende Industrie"],
                el: "Process Industries",
                en: "Process Industries",
                es: ["Industrias de proceso"],
                fa: "Process Industries",
                fr: ["Industries de transformation"],
                he_IL: ["תעשיות תהליכים"],
                hu_HU: "Process Industries",
                id_ID: ["Industri Proses"],
                it: ["Industrie di trasformazione"],
                ja: ["素材産業"],
                ko: ["프로세스 인더스트리"],
                ms_MY: ["Industri Pemprosesan"],
                nl_NL: "Process Industries",
                pl: ["Przemysł przetwórczy"],
                pt: ["Industrias de Processamento"],
                ro: "Process Industries",
                ru: ["Обрабатывающая промышленность"],
                sv: ["Processindustrier"],
                th: ["อุตสาหกรรมเชิงกระบวนการ"],
                tr: ["İşlenebilen Endüstriler"],
                vi: ["Công nghiệp Chế biến"],
                zh: ["加工制造业"],
                zh_TW: ["加工業"]
            }
        },
        536289: e => {
            e.exports = {
                ar: ["الصناعات الموجهة للمنتجين"],
                ca_ES: "Producer Manufacturing",
                cs: "Producer Manufacturing",
                de: ["Hersteller Produktion"],
                el: "Producer Manufacturing",
                en: "Producer Manufacturing",
                es: ["Fabricación de productos"],
                fa: "Producer Manufacturing",
                fr: ["Producteurs-fabricants"],
                he_IL: ["הפקת ייצור"],
                hu_HU: "Producer Manufacturing",
                id_ID: ["Produsen Pabrikan"],
                it: ["Filiera di fabbricazione"],
                ja: ["製造加工"],
                ko: ["프로듀서 매뉴팩처링"],
                ms_MY: ["Kilang Pengeluar"],
                nl_NL: "Producer Manufacturing",
                pl: ["Przemysł produkcyjny"],
                pt: ["Produtor Manufatureiro"],
                ro: "Producer Manufacturing",
                ru: ["Промышленное производство"],
                sv: ["Producenttillverkning"],
                th: ["การผลิตของผู้ผลิต"],
                tr: ["Üretici İmalatı"],
                vi: ["Sản xuất Chế tạo"],
                zh: ["制造业"],
                zh_TW: ["生產製造"]
            }
        },
        53171: e => {
            e.exports = {
                ar: ["القائمة البنفسجية"],
                ca_ES: ["Llista morada"],
                cs: "Purple list",
                de: ["Lila Liste"],
                el: "Purple list",
                en: "Purple list",
                es: ["Lista morada"],
                fa: "Purple list",
                fr: ["Liste violette"],
                he_IL: ["רשימה סגולה"],
                hu_HU: "Purple list",
                id_ID: ["Daftar Ungu"],
                it: ["Lista viola"],
                ja: ["パープルリスト"],
                ko: ["퍼플 리스트"],
                ms_MY: ["Senarai ungu"],
                nl_NL: "Purple list",
                pl: ["Fioletowa lista"],
                pt: ["Lista Lilás"],
                ro: "Purple list",
                ru: ["Фиолетовый"],
                sv: ["Lila lista"],
                th: "Purple list",
                tr: ["Mor liste"],
                vi: ["Danh sách tím"],
                zh: ["紫色列表"],
                zh_TW: ["紫色清單"]
            }
        },
        619056: e => {
            e.exports = {
                ar: ["قطر"],
                ca_ES: "Qatar",
                cs: "Qatar",
                de: ["Katar"],
                el: "Qatar",
                en: "Qatar",
                es: ["Catar"],
                fa: "Qatar",
                fr: "Qatar",
                he_IL: ["קטאר"],
                hu_HU: "Qatar",
                id_ID: "Qatar",
                it: "Qatar",
                ja: ["カタール"],
                ko: ["카타르"],
                ms_MY: "Qatar",
                nl_NL: "Qatar",
                pl: ["Katar"],
                pt: ["Catar"],
                ro: "Qatar",
                ru: ["Катар"],
                sv: "Qatar",
                th: ["กาตาร์"],
                tr: ["Katar"],
                vi: "Qatar",
                zh: ["卡塔尔"],
                zh_TW: ["卡達"]
            }
        },
        712431: e => {
            e.exports = {
                ar: "REIT",
                ca_ES: "REIT",
                cs: "REIT",
                de: "REIT",
                el: "REIT",
                en: "REIT",
                es: "REIT",
                fa: "REIT",
                fr: "REIT",
                he_IL: "REIT",
                hu_HU: "REIT",
                id_ID: "REIT",
                it: "REIT",
                ja: ["リート"],
                ko: "REIT",
                ms_MY: "REIT",
                nl_NL: "REIT",
                pl: "REIT",
                pt: "REIT",
                ro: "REIT",
                ru: "REIT",
                sv: "REIT",
                th: "REIT",
                tr: "REIT",
                vi: "REIT",
                zh: "REIT",
                zh_TW: "REIT"
            }
        },
        385646: e => {
            e.exports = {
                ar: ["رومانيا"],
                ca_ES: "Romania",
                cs: "Romania",
                de: ["Rumänien"],
                el: "Romania",
                en: "Romania",
                es: ["Rumanía"],
                fa: "Romania",
                fr: ["Roumanie"],
                he_IL: ["רומניה"],
                hu_HU: "Romania",
                id_ID: ["Rumania"],
                it: "Romania",
                ja: ["ルーマニア"],
                ko: ["루마니아"],
                ms_MY: "Romania",
                nl_NL: "Romania",
                pl: ["Rumunia"],
                pt: ["Romênia"],
                ro: "Romania",
                ru: ["Румыния"],
                sv: ["Rumänien"],
                th: ["โรมาเนีย"],
                tr: ["Romanya"],
                vi: "Romania",
                zh: ["罗马尼亚"],
                zh_TW: ["羅馬尼亞"]
            }
        },
        801197: e => {
            e.exports = {
                ar: ["تجارة التجزئة"],
                ca_ES: "Retail Trade",
                cs: "Retail Trade",
                de: ["Einzelhandel"],
                el: "Retail Trade",
                en: "Retail Trade",
                es: ["Comercio minorista"],
                fa: "Retail Trade",
                fr: ["Commerce de détail"],
                he_IL: ["מסחר קמעונאי"],
                hu_HU: "Retail Trade",
                id_ID: ["Perdagangan Ritel"],
                it: ["Vendita al dettaglio"],
                ja: ["小売業"],
                ko: ["리테일 트레이드"],
                ms_MY: ["Dagangan Runcit"],
                nl_NL: "Retail Trade",
                pl: ["Handel detaliczny"],
                pt: ["Comercio de Varejo"],
                ro: "Retail Trade",
                ru: ["Розничная торговля"],
                sv: ["Detaljhandel"],
                th: ["การค้าปลีก"],
                tr: ["Perakende Satış"],
                vi: ["Bán Lẻ"],
                zh: ["零售行业"],
                zh_TW: ["零售業"]
            }
        },
        97525: e => {
            e.exports = {
                ar: ["القائمة الحمراء"],
                ca_ES: ["Llista vermella"],
                cs: "Red list",
                de: ["Rote Liste"],
                el: "Red list",
                en: "Red list",
                es: ["Lista roja"],
                fa: "Red list",
                fr: ["Liste rouge"],
                he_IL: ["רשימה אדומה"],
                hu_HU: "Red list",
                id_ID: ["Daftar Merah"],
                it: ["Lista rossa"],
                ja: ["レッドリスト"],
                ko: ["레드 리스트"],
                ms_MY: ["Senarai merah"],
                nl_NL: "Red list",
                pl: ["Czerwona lista"],
                pt: ["Lista de selecionados"],
                ro: "Red list",
                ru: ["Красный"],
                sv: ["Röd lista"],
                th: "Red list",
                tr: ["Kırmızı liste"],
                vi: ["Danh sách đỏ"],
                zh: ["红色列表"],
                zh_TW: ["紅色清單"]
            }
        },
        366702: e => {
            e.exports = {
                ar: ["حذف من قائمة المراقبة"],
                ca_ES: ["Elimina de la llista de seguiment"],
                cs: "Remove from Watchlist",
                de: ["Von Watchlist entfernen"],
                el: "Remove from Watchlist",
                en: "Remove from Watchlist",
                es: ["Eliminar de la lista de seguimiento"],
                fa: "Remove from Watchlist",
                fr: ["Supprimer de la liste de surveillance"],
                he_IL: ["הסר מרשימת המעקב"],
                hu_HU: "Remove from Watchlist",
                id_ID: ["Hilangkan dari Daftar Pantau"],
                it: ["Rimuovi da watchlist"],
                ja: ["ウォッチリストから削除"],
                ko: ["왓치리스트에서 없애기"],
                ms_MY: ["Keluarkan dari Senarai Amatan"],
                nl_NL: "Remove from Watchlist",
                pl: ["Usuń z Listy Obserwowanych"],
                pt: ["Remova da lista de observação"],
                ro: "Remove from Watchlist",
                ru: ["Удалить из списка котировок"],
                sv: ["Ta bort från Bevakningslista"],
                th: ["ลบออกจากรายการเฝ้าระวัง"],
                tr: ["Watchlist'ten Kaldır"],
                vi: ["Loại bỏ khỏi Danh sách theo dõi"],
                zh: ["從觀察清單中刪除"],
                zh_TW: ["從觀察清單中移除"]
            }
        },
        238201: e => {
            e.exports = {
                ar: ["روسيا الاتحادية"],
                ca_ES: ["Federació de Rússia"],
                cs: "Russian Federation",
                de: ["Russische Föderation"],
                el: "Russian Federation",
                en: "Russian Federation",
                es: ["Federación de Rusia"],
                fa: "Russian Federation",
                fr: ["Fédération russe"],
                he_IL: ["הפדרציה הרוסית"],
                hu_HU: "Russian Federation",
                id_ID: ["Federasi Rusia"],
                it: ["Federazione Russa"],
                ja: ["ロシア連邦"],
                ko: ["러시아 연방"],
                ms_MY: ["Persekutuan Rusia"],
                nl_NL: "Russian Federation",
                pl: ["Federacja Rosyjska"],
                pt: ["Federação Russa"],
                ro: "Russian Federation",
                ru: ["Россия"],
                sv: ["Ryssland"],
                th: ["รัสเซีย"],
                tr: ["Rusya Federasyonu"],
                vi: ["Liên Bang Nga"],
                zh: ["俄罗斯"],
                zh_TW: ["俄羅斯聯邦"]
            }
        },
        242890: e => {
            e.exports = {
                ar: ["رواندا"],
                ca_ES: ["Ruanda"],
                cs: "Rwanda",
                de: ["Ruanda"],
                el: "Rwanda",
                en: "Rwanda",
                es: ["Ruanda"],
                fa: "Rwanda",
                fr: "Rwanda",
                he_IL: ["רואנדה"],
                hu_HU: "Rwanda",
                id_ID: "Rwanda",
                it: "Rwanda",
                ja: ["ルワンダ"],
                ko: ["르완다"],
                ms_MY: "Rwanda",
                nl_NL: "Rwanda",
                pl: "Rwanda",
                pt: ["Ruanda"],
                ro: "Rwanda",
                ru: ["Руанда"],
                sv: "Rwanda",
                th: ["รวันดา"],
                tr: ["Ruanda"],
                vi: "Rwanda",
                zh: ["卢旺达"],
                zh_TW: ["盧安達"]
            }
        },
        847746: e => {
            e.exports = {
                ar: ["لا يمكن إضافة المزيد إلى قائمة المراقبة."],
                ca_ES: ["La llista de seguiment està completa!"],
                cs: "Watchlist cannot take anymore, Cap'n",
                de: ["Die Watchlist kann keine weiteren Einträge mehr aufnehmen"],
                el: "Watchlist cannot take anymore, Cap'n",
                en: "Watchlist cannot take anymore, Cap'n",
                es: ["¡La lista de seguimiento está completa!"],
                fa: "Watchlist cannot take anymore, Cap'n",
                fr: ["La liste de surveillance n'en peut plus !"],
                he_IL: ["רשימת הצפייה לא יכולה לקחת יותר, קפטן"],
                hu_HU: "Watchlist cannot take anymore, Cap'n",
                id_ID: ["Daftar pantau sudah penuh Kapten!"],
                it: ["La watchlist non regge nuovi strumenti"],
                ja: ["ウォッチリストはもう限界です"],
                ko: ["왓치리스트가 꽉 찼습니다, 캡틴"],
                ms_MY: ["Senarai amatan tidak dapat ditambah lagi, Kapten"],
                nl_NL: "Watchlist cannot take anymore, Cap'n",
                pl: ["Lista obserwowanych jest pełna Kapitanie"],
                pt: ["A lista de observação não suporta mais, Cap'n"],
                ro: "Watchlist cannot take anymore, Cap'n",
                ru: ["В список котировок больше уже не помещается"],
                sv: ["De kan inte ta mer, Kapten"],
                th: ["รายการเฝ้าระวังไม่สามารถรับเพิ่มได้อีกแล้วนะคุณ"],
                tr: ["Watchlist daha fazla dayanamaz, Kaptan"],
                vi: ["Danh sách theo dõi không thể sử dụng được nữa, Cap'n"],
                zh: ["报告船长，自选表已满"],
                zh_TW: ["報告船長，觀察清單已滿"]
            }
        },
        66596: e => {
            e.exports = {
                ar: ["المعذرة، لا يمكنك إضافة أكثر من {number} رموز وفواصل إلى قائمة المراقبة."],
                ca_ES: ["Vaja, no podeu afegir més de {number} símbols i separadors a una llista de seguiment: som enginyers, però no fem miracles."],
                cs: "Whoa there, you can't go adding over {number} symbols and separators to a watchlist – we're engineers not miracle workers.",
                de: ["Whoa, Sie können doch nicht einfach so {number} Symbole und Trennzeichen in eine Watchlist einfügen – wir sind Ingenieure und keine Wundertäter."],
                el: "Whoa there, you can't go adding over {number} symbols and separators to a watchlist – we're engineers not miracle workers.",
                en: "Whoa there, you can't go adding over {number} symbols and separators to a watchlist – we're engineers not miracle workers.",
                es: ["Vaya, no puede añadir más de {number} símbolos y separadores a una lista de seguimiento: somos ingenieros, pero no obramos milagros."],
                fa: "Whoa there, you can't go adding over {number} symbols and separators to a watchlist – we're engineers not miracle workers.",
                fr: ["Oh la, vous ne pouvez pas ajouter plus de {number} symboles et séparateurs à une liste de surveillance - nous sommes des ingénieurs, pas des magiciens."],
                he_IL: ["אתה לא יכול להוסיף יותר מ- {number} סימולים ומפרידים לרשימת המעקב - אנחנו מהנדסים לא מחוללי ניסים."],
                hu_HU: "Whoa there, you can't go adding over {number} symbols and separators to a watchlist – we're engineers not miracle workers.",
                id_ID: ["Woww woww, anda tidak dapat menabahkan {number} simbol dan separator kedalam daftar pantau - kami adalah teknisi, bukan pembuat keajaiban."],
                it: ["Wow, non puoi pretendere di aggiungere più di {number} elementi tra separatori e simboli su una singola watchlist – siamo programmatori, non maghi."],
                ja: ["お待ちください、{number}以上のシンボルとセパレーターをウォッチリストに追加する事はできません – 私たちは奇跡を起こす人ではなくエンジニアです。"],
                ko: ["왓치리스트에 {number} 이 넘는 심볼 및 세퍼레이터를 넣을 수 없습니다  – 우리는 미라클 워커가 아니라 엔지니어입니다."],
                ms_MY: ["Woh, anda tidak dapat menambah lagi {number} simbol-simbol dan pemisah-pemisah ke senarai amatan – kami adalah jurutera dan bukannya pekerja ajaib."],
                nl_NL: "Whoa there, you can't go adding over {number} symbols and separators to a watchlist – we're engineers not miracle workers.",
                pl: ["Niestety do listy obserwowanych nie możesz dodać więcej niż {number} symboli i separatorów — jesteśmy programistami, a nie magikami."],
                pt: ["Epa, você não pode ir adicionando símbolos {number} e separadores a uma lista de observação - somos engenheiros, mas não fazemos milagres."],
                ro: "Whoa there, you can't go adding over {number} symbols and separators to a watchlist – we're engineers not miracle workers.",
                ru: ["Вы не можете добавлять более {number} символов и разделителей в список котировок."],
                sv: ["Du kan inte lägga till över {number} symboler och separatorer till en bevakningslista – vi är ingenjörer och inga mirakelarbetare."],
                th: ["โว้ว คุณไม่สามารถทำการเพิ่มมากกว่า {number} สัญลักษณ์และตัวแบ่งในรายการเฝ้าระวังได้ – เราคือวิศวกร ไม่ใช่พระเจ้า"],
                tr: ["Vay canına, bir wathclist'e {number} simgeden fazla sembol ve ayırıcı ekleyemezsiniz – biz mühendisiz, mucize işçisi değil."],
                vi: ["Rất tiếc, bạn không thể thêm quá {number} mã giao dịch và dấu phân cách vào danh sách theo dõi - chúng tôi là kỹ sư không phải công nhân thần kỳ."],
                zh: ["哇哦，您不能将超过{number}个商品和分隔符添加到自选表中 — 我们是工程师，而非魔术师。"],
                zh_TW: ["哇，您不能將超過{number}個商品和分隔符增加到觀察清單中 – 我們是工程師不是魔術師。"]
            }
        },
        520466: e => {
            e.exports = {
                ar: "Tokelau",
                ca_ES: "Tokelau",
                cs: "Tokelau",
                de: "Tokelau",
                el: "Tokelau",
                en: "Tokelau",
                es: "Tokelau",
                fa: "Tokelau",
                fr: "Tokelau",
                he_IL: ["טוקלאו"],
                hu_HU: "Tokelau",
                id_ID: "Tokelau",
                it: "Tokelau",
                ja: ["トケラウ"],
                ko: ["토켈라우"],
                ms_MY: "Tokelau",
                nl_NL: "Tokelau",
                pl: "Tokelau",
                pt: "Tokelau",
                ro: "Tokelau",
                ru: ["Токелау"],
                sv: "Tokelau",
                th: ["โทเคอเลา"],
                tr: "Tokelau",
                vi: "Tokelau",
                zh: ["托克劳群岛"],
                zh_TW: ["托克勞群島"]
            }
        },
        460919: e => {
            e.exports = {
                ar: ["تايوان"],
                ca_ES: "Taiwan",
                cs: "Taiwan",
                de: "Taiwan",
                el: "Taiwan",
                en: "Taiwan",
                es: ["Taiwán"],
                fa: "Taiwan",
                fr: ["Taïwan"],
                he_IL: ["טייוואן"],
                hu_HU: "Taiwan",
                id_ID: "Taiwan",
                it: "Taiwan",
                ja: ["台湾"],
                ko: ["대만"],
                ms_MY: "Taiwan",
                nl_NL: "Taiwan",
                pl: ["Tajwan"],
                pt: "Taiwan",
                ro: "Taiwan",
                ru: ["Тайвань"],
                sv: "Taiwan",
                th: ["ไต้หวัน"],
                tr: ["Tayvan"],
                vi: ["Đài Loan"],
                zh: ["中国台湾"],
                zh_TW: ["台灣"]
            }
        },
        237826: e => {
            e.exports = {
                ar: ["خدمات التكنولوجيا"],
                ca_ES: "Technology Services",
                cs: "Technology Services",
                de: ["Technologie Dienstleistungen"],
                el: "Technology Services",
                en: "Technology Services",
                es: ["Servicios tecnológicos"],
                fa: "Technology Services",
                fr: ["Services technologiques"],
                he_IL: ["שירותי טכנולוגיה"],
                hu_HU: "Technology Services",
                id_ID: ["Layanan Teknologi"],
                it: ["Servizi tecnologici"],
                ja: ["テクノロジーサービス"],
                ko: ["테크놀로지 서비스"],
                ms_MY: ["Perkhidmatan Teknologi"],
                nl_NL: "Technology Services",
                pl: ["Usługi technologiczne"],
                pt: ["Serviços de Tecnologia"],
                ro: "Technology Services",
                ru: ["Технологии"],
                sv: ["Tekniska tjänster"],
                th: ["บริการทางด้านเทคโนโลยี"],
                tr: ["Teknoloji Hizmetleri"],
                vi: ["Dịch vụ Công nghệ"],
                zh: ["科技服务"],
                zh_TW: ["科技服務"]
            }
        },
        433138: e => {
            e.exports = {
                ar: ["تايلاند"],
                ca_ES: ["Tailàndia"],
                cs: "Thailand",
                de: "Thailand",
                el: "Thailand",
                en: "Thailand",
                es: ["Tailandia"],
                fa: "Thailand",
                fr: ["Thaïlande"],
                he_IL: ["תאילנד"],
                hu_HU: "Thailand",
                id_ID: "Thailand",
                it: ["Thailandia"],
                ja: ["タイ"],
                ko: ["태국"],
                ms_MY: "Thailand",
                nl_NL: "Thailand",
                pl: ["Tajlandia"],
                pt: ["Tailândia"],
                ro: "Thailand",
                ru: ["Таиланд"],
                sv: "Thailand",
                th: ["ประเทศไทย"],
                tr: ["Tayland"],
                vi: ["Thái Lan"],
                zh: ["泰国"],
                zh_TW: ["泰國"]
            }
        },
        793481: e => {
            e.exports = {
                ar: ["وسائل النقل"],
                ca_ES: ["Transport"],
                cs: "Transportation",
                de: ["Transportmittel"],
                el: "Transportation",
                en: "Transportation",
                es: ["Transporte"],
                fa: "Transportation",
                fr: ["Transports"],
                he_IL: ["הוֹבָלָה"],
                hu_HU: "Transportation",
                id_ID: ["Transportasi"],
                it: ["Trasporti"],
                ja: ["交通・輸送"],
                ko: ["이송/배달"],
                ms_MY: ["Pengangkutan"],
                nl_NL: "Transportation",
                pl: ["Transport"],
                pt: ["Transportes"],
                ro: "Transportation",
                ru: ["Транспорт"],
                sv: ["Transporter"],
                th: ["ระบบขนส่ง"],
                tr: ["Taşımacılık"],
                vi: ["Vận chuyển"],
                zh: ["运输"],
                zh_TW: ["運輸"]
            }
        },
        420638: e => {
            e.exports = {
                ar: ["تونس"],
                ca_ES: "Tunisia",
                cs: "Tunisia",
                de: ["Tunesien"],
                el: "Tunisia",
                en: "Tunisia",
                es: ["Túnez"],
                fa: "Tunisia",
                fr: ["Tunisie"],
                he_IL: ["תוניסיה"],
                hu_HU: "Tunisia",
                id_ID: "Tunisia",
                it: "Tunisia",
                ja: ["チュニジア"],
                ko: ["튀니지아"],
                ms_MY: "Tunisia",
                nl_NL: "Tunisia",
                pl: ["Tunezja"],
                pt: ["Tunísia"],
                ro: "Tunisia",
                ru: ["Тунис"],
                sv: ["Tunisien"],
                th: ["ตูนิเซีย"],
                tr: ["Tunus"],
                vi: "Tunisia",
                zh: ["突尼斯"],
                zh_TW: ["突尼西亞"]
            }
        },
        694398: e => {
            e.exports = {
                ar: ["تركيا"],
                ca_ES: ["Turquia"],
                cs: "Turkey",
                de: ["Türkei"],
                el: "Turkey",
                en: "Turkey",
                es: ["Turquía"],
                fa: "Turkey",
                fr: ["Turquie"],
                he_IL: ["טורקיה"],
                hu_HU: "Turkey",
                id_ID: ["Turki"],
                it: ["Turchia"],
                ja: ["トルコ"],
                ko: ["터키"],
                ms_MY: ["Turki"],
                nl_NL: "Turkey",
                pl: ["Turcja"],
                pt: ["Turquia"],
                ro: "Turkey",
                ru: ["Турция"],
                sv: ["Turkiet"],
                th: ["ตุรกี"],
                tr: ["Türkiye"],
                vi: ["Thổ Nhĩ Kỳ"],
                zh: ["土耳其"],
                zh_TW: ["土耳其"]
            }
        },
        651847: e => {
            e.exports = {
                ar: ["اكتب اسم الرمز الذي تبحث عنه"],
                ca_ES: ["Escriviu per cercar el símbol"],
                cs: "Type to search for symbol",
                de: ["Tippen um ein Symbol zu suchen"],
                el: "Type to search for symbol",
                en: "Type to search for symbol",
                es: ["Escriba para buscar el símbolo"],
                fa: "Type to search for symbol",
                fr: ["Tapez pour rechercher le symbole"],
                he_IL: ["הקלד כדי לחפש סימול"],
                hu_HU: "Type to search for symbol",
                id_ID: ["Ketik untuk mencari simbol"],
                it: ["Scrivi per cercare un simbolo"],
                ja: ["入力してシンボルを検索"],
                ko: ["서치할 심볼을 치시오"],
                ms_MY: ["Taip untuk mencari simbol"],
                nl_NL: "Type to search for symbol",
                pl: ["Wpisz symbol do wyszukania"],
                pt: ["Digite para pesquisar o simbolo"],
                ro: "Type to search for symbol",
                ru: ["Введите символ для поиска"],
                sv: ["Skriv för att söka symbol"],
                th: ["พิมพ์เพื่อค้นหาตัวย่อ"],
                tr: ["Sembol aramak için yazın"],
                vi: ["Nhập để tìm kiếm cho mã"],
                zh: ["输入以搜索代码"],
                zh_TW: ["鍵入以搜尋商品"]
            }
        },
        975308: e => {
            e.exports = {
                ar: ["الإمارات العربية المتحدة"],
                ca_ES: "UAE",
                cs: "UAE",
                de: "UAE",
                el: "UAE",
                en: "UAE",
                es: ["EAU"],
                fa: "UAE",
                fr: "UAE",
                he_IL: ["איחוד האמירויות UAE"],
                hu_HU: "UAE",
                id_ID: "UAE",
                it: ["EAU"],
                ja: "UAE",
                ko: ["아랍에미리트연합"],
                ms_MY: "UAE",
                nl_NL: "UAE",
                pl: ["ZEA"],
                pt: "UAE",
                ro: "UAE",
                ru: ["ОАЭ"],
                sv: "UAE",
                th: "UAE",
                tr: ["BAE"],
                vi: "UAE",
                zh: "UAE",
                zh_TW: "UAE"
            }
        },
        846792: e => {
            e.exports = {
                ar: ["المملكة المتحدة"],
                ca_ES: ["Regne Unit"],
                cs: "UK",
                de: "UK",
                el: "UK",
                en: "UK",
                es: ["Reino Unido"],
                fa: "UK",
                fr: ["GB"],
                he_IL: ["הממלכה המאוחדת"],
                hu_HU: "UK",
                id_ID: "UK",
                it: "UK",
                ja: ["英国"],
                ko: ["영국"],
                ms_MY: "UK",
                nl_NL: "UK",
                pl: "UK",
                pt: "UK",
                ro: "UK",
                ru: ["Великобритания"],
                sv: ["Storbritannien"],
                th: "UK",
                tr: ["İngiltere"],
                vi: ["Vương quốc Anh"],
                zh: ["英国"],
                zh_TW: "UK"
            }
        },
        787935: e => {
            e.exports = {
                ar: ["أمريكا"],
                ca_ES: ["EUA"],
                cs: "USA",
                de: "USA",
                el: "USA",
                en: "USA",
                es: ["EE. UU."],
                fa: "USA",
                fr: "USA",
                he_IL: ['ארה"ב‏'],
                hu_HU: "USA",
                id_ID: ["AS"],
                it: ["Stati Uniti"],
                ja: ["米国"],
                ko: ["미국"],
                ms_MY: ["Amerika Syarikat"],
                nl_NL: "USA",
                pl: "USA",
                pt: ["EUA"],
                ro: "USA",
                ru: ["США"],
                sv: "USA",
                th: ["สหรัฐอเมริกา"],
                tr: ["ABD"],
                vi: ["Mỹ"],
                zh: ["美国"],
                zh_TW: ["美國"]
            }
        },
        287916: e => {
            e.exports = {
                ar: ["الإمارات العربية المتحدة"],
                ca_ES: ["Emirats Àrabs Units"],
                cs: "United Arab Emirates",
                de: ["Vereinigte Arabische Emirate"],
                el: "United Arab Emirates",
                en: "United Arab Emirates",
                es: ["Emiratos Árabes Unidos"],
                fa: "United Arab Emirates",
                fr: ["Emirats Arabes Unis"],
                he_IL: ["איחוד האמירויות הערביות"],
                hu_HU: "United Arab Emirates",
                id_ID: ["Uni Emirat Arab"],
                it: ["Emirati Arabi Uniti"],
                ja: ["アラブ首長国連邦"],
                ko: ["아랍 에미리트 연합"],
                ms_MY: ["Emiriah Arab Bersatu"],
                nl_NL: "United Arab Emirates",
                pl: ["Zjednoczone Emiraty Arabskie"],
                pt: ["Emirados Árabes Unidos"],
                ro: "United Arab Emirates",
                ru: ["Объединённые Арабские Эмираты"],
                sv: ["Förenade arabemiraten"],
                th: ["สหรัฐอาหรับเอมิเรตส์"],
                tr: ["Birleşik Arap Emirlikleri"],
                vi: ["Các Tiểu Vương quốc Ả Rập Thống nhất"],
                zh: ["阿拉伯联合酋长国"],
                zh_TW: ["阿拉伯聯合大公國"]
            }
        },
        606994: e => {
            e.exports = {
                ar: ["المملكة المتحدة"],
                ca_ES: ["Regne Unit"],
                cs: "United Kingdom",
                de: ["Vereinigtes Königreich"],
                el: "United Kingdom",
                en: "United Kingdom",
                es: ["Reino Unido"],
                fa: "United Kingdom",
                fr: ["Royaume Uni"],
                he_IL: ["הממלכה המאוחדת"],
                hu_HU: ["Egyesült Királyság"],
                id_ID: ["Inggris"],
                it: ["Regno Unito"],
                ja: ["イギリス"],
                ko: ["영국"],
                ms_MY: "United Kingdom",
                nl_NL: "United Kingdom",
                pl: ["Wielka Brytania"],
                pt: ["Reino Unido"],
                ro: "United Kingdom",
                ru: ["Великобритания"],
                sv: ["Storbritannien"],
                th: ["สหราชอาณาจักร"],
                tr: ["Birleşik Krallık"],
                vi: ["Anh Quốc"],
                zh: ["英国"],
                zh_TW: ["英國"]
            }
        },
        411176: e => {
            e.exports = {
                ar: ["الولايات المتحدة الأمريكية"],
                ca_ES: ["Estats Units"],
                cs: "United States",
                de: ["Vereinigte Staaten"],
                el: "United States",
                en: "United States",
                es: ["Estados Unidos"],
                fa: "United States",
                fr: ["Etats-Unis"],
                he_IL: ["ארצות הברית"],
                hu_HU: "United States",
                id_ID: ["Amerika Serikat"],
                it: ["Stati Uniti"],
                ja: ["米国"],
                ko: ["미국"],
                ms_MY: ["Amerika Syarikat"],
                nl_NL: "United States",
                pl: ["Stany Zjednoczone"],
                pt: ["Estados Unidos"],
                ro: "United States",
                ru: ["США"],
                sv: ["USA"],
                th: ["สหรัฐอเมริกา"],
                tr: ["Birleşik Devletler"],
                vi: ["Hoa Kỳ"],
                zh: ["美国"],
                zh_TW: ["美國"]
            }
        },
        308395: e => {
            e.exports = {
                ar: ["أوغندا"],
                ca_ES: "Uganda",
                cs: "Uganda",
                de: "Uganda",
                el: "Uganda",
                en: "Uganda",
                es: "Uganda",
                fa: "Uganda",
                fr: ["Ouganda"],
                he_IL: ["אוגנדה"],
                hu_HU: "Uganda",
                id_ID: "Uganda",
                it: "Uganda",
                ja: ["ウガンダ"],
                ko: ["우간다"],
                ms_MY: "Uganda",
                nl_NL: "Uganda",
                pl: "Uganda",
                pt: "Uganda",
                ro: "Uganda",
                ru: ["Уганда"],
                sv: "Uganda",
                th: ["ยูกันดา"],
                tr: "Uganda",
                vi: "Uganda",
                zh: ["乌干达"],
                zh_TW: ["烏干達"]
            }
        },
        263018: e => {
            e.exports = {
                ar: ["أوكرانيا"],
                ca_ES: ["Ucraïna"],
                cs: "Ukraine",
                de: "Ukraine",
                el: "Ukraine",
                en: "Ukraine",
                es: ["Ucrania"],
                fa: "Ukraine",
                fr: "Ukraine",
                he_IL: ["אוקראינה"],
                hu_HU: "Ukraine",
                id_ID: ["Ukraina"],
                it: ["Ucraina"],
                ja: ["ウクライナ"],
                ko: ["우크라이나"],
                ms_MY: "Ukraine",
                nl_NL: "Ukraine",
                pl: ["Ukraina"],
                pt: ["Ucrânia"],
                ro: "Ukraine",
                ru: ["Украина"],
                sv: ["Ukraina"],
                th: ["ยูเครน"],
                tr: ["Ukrayna"],
                vi: ["Nước Ukraine"],
                zh: ["乌克兰"],
                zh_TW: ["烏克蘭"]
            }
        },
        112332: e => {
            e.exports = {
                ar: ["خدمات"],
                ca_ES: "Utilities",
                cs: "Utilities",
                de: ["Versorgungseinrichtungen"],
                el: "Utilities",
                en: "Utilities",
                es: ["Servicios públicos"],
                fa: "Utilities",
                fr: ["Services publics"],
                he_IL: ["כלי עזר"],
                hu_HU: "Utilities",
                id_ID: ["Utilitas"],
                it: ["Utenze"],
                ja: ["公益事業"],
                ko: ["유틸리티"],
                ms_MY: ["Utiliti"],
                nl_NL: "Utilities",
                pl: ["Usługi komunalne"],
                pt: ["Serviços Públicos"],
                ro: "Utilities",
                ru: ["Коммунальные услуги"],
                sv: ["Verktyg"],
                th: ["สาธารณูปโภค"],
                tr: ["Elektrik, Su, Gaz Hizmetleri"],
                vi: ["Công ty dịch vụ công cộng"],
                zh: ["公用事业"],
                zh_TW: ["公用事業"]
            }
        },
        739055: e => {
            e.exports = {
                ar: ["فنزويلا"],
                ca_ES: "Venezuela",
                cs: "Venezuela",
                de: "Venezuela",
                el: "Venezuela",
                en: "Venezuela",
                es: "Venezuela",
                fa: "Venezuela",
                fr: "Venezuela",
                he_IL: ["ונצואלה"],
                hu_HU: "Venezuela",
                id_ID: "Venezuela",
                it: "Venezuela",
                ja: ["ベネズエラ"],
                ko: ["베네주엘라"],
                ms_MY: "Venezuela",
                nl_NL: "Venezuela",
                pl: ["Wenezuela"],
                pt: "Venezuela",
                ro: "Venezuela",
                ru: ["Венесуэла"],
                sv: "Venezuela",
                th: ["เวเนซุเอลา"],
                tr: "Venezuela",
                vi: "Venezuela",
                zh: ["委内瑞拉"],
                zh_TW: ["委內瑞拉"]
            }
        },
        450049: e => {
            e.exports = {
                ar: ["فيتنام"],
                ca_ES: "Vietnam",
                cs: "Vietnam",
                de: "Vietnam",
                el: "Vietnam",
                en: "Vietnam",
                es: "Vietnam",
                fa: "Vietnam",
                fr: "Vietnam",
                he_IL: ["ויטנאם"],
                hu_HU: "Vietnam",
                id_ID: "Vietnam",
                it: "Vietnam",
                ja: ["ベトナム"],
                ko: ["베트남"],
                ms_MY: "Vietnam",
                nl_NL: "Vietnam",
                pl: ["Wietnam"],
                pt: ["Vietnã"],
                ro: "Vietnam",
                ru: ["Вьетнам"],
                sv: "Vietnam",
                th: ["เวียดนาม"],
                tr: "Vietnam",
                vi: ["Việt Nam"],
                zh: ["越南"],
                zh_TW: ["越南"]
            }
        },
        879831: e => {
            e.exports = {
                ar: ["نعم"],
                ca_ES: ["Sí"],
                cs: ["Ano"],
                de: ["Ja"],
                el: "Yes",
                en: "Yes",
                es: ["Sí"],
                fa: "Yes",
                fr: ["Oui"],
                he_IL: ["כן"],
                hu_HU: ["Igen"],
                id_ID: ["Ya"],
                it: ["Sì"],
                ja: ["はい"],
                ko: ["예"],
                ms_MY: ["Ya"],
                nl_NL: "Yes",
                pl: ["Tak"],
                pt: ["Sim"],
                ro: "Yes",
                ru: ["Да"],
                sv: ["Ja"],
                th: ["ใช่"],
                tr: ["Evet"],
                vi: ["Có"],
                zh: ["是"],
                zh_TW: ["是"]
            }
        },
        239478: e => {
            e.exports = {
                ar: ["زامبيا"],
                ca_ES: ["Zàmbia"],
                cs: "Zambia",
                de: ["Sambia"],
                el: "Zambia",
                en: "Zambia",
                es: "Zambia",
                fa: "Zambia",
                fr: ["Zambie"],
                he_IL: ["זמביה"],
                hu_HU: "Zambia",
                id_ID: "Zambia",
                it: "Zambia",
                ja: ["ザンビア"],
                ko: ["잠비아"],
                ms_MY: "Zambia",
                nl_NL: "Zambia",
                pl: "Zambia",
                pt: ["Zâmbia"],
                ro: "Zambia",
                ru: ["Замбия"],
                sv: "Zambia",
                th: ["แซมเบีย"],
                tr: ["Zambiya"],
                vi: "Zambia",
                zh: ["赞比亚"],
                zh_TW: ["尚比亞"]
            }
        },
        58309: e => {
            e.exports = {
                ar: ["زيمباوي"],
                ca_ES: ["Zimbàbue"],
                cs: "Zimbabwe",
                de: ["Simbabwe"],
                el: "Zimbabwe",
                en: "Zimbabwe",
                es: ["Zimbabue"],
                fa: "Zimbabwe",
                fr: "Zimbabwe",
                he_IL: ["זימבבואה"],
                hu_HU: "Zimbabwe",
                id_ID: "Zimbabwe",
                it: "Zimbabwe",
                ja: ["ジンバブエ"],
                ko: ["짐바브웨"],
                ms_MY: "Zimbabwe",
                nl_NL: "Zimbabwe",
                pl: "Zimbabwe",
                pt: ["Zimbábue"],
                ro: "Zimbabwe",
                ru: ["Зимбабве"],
                sv: "Zimbabwe",
                th: ["ซิมบับเว"],
                tr: ["Zimbabve"],
                vi: "Zimbabwe",
                zh: ["津巴布韦"],
                zh_TW: ["辛巴威"]
            }
        },
        222045: e => {
            e.exports = {
                ar: ["هل تريد حقًا حذف الرمز ‎{count}‎ المحدد؟", "هل تريد حقًا حذف الرمز ‎{count}‎ المحدد؟", "هل تريد حقًا حذف الرمز ‎{count}‎ المحدد؟", "هل تريد حقًا حذف الرموز ‎{count}‎ المحددة؟", "هل تريد حقًا حذف الرموز ‎{count}‎ المحددة؟", "هل تريد حقًا حذف الرموز ‎{count}‎ المحددة؟"],
                ca_ES: ["Realment voleu eliminar {count} símbol seleccionat?", "Realment voleu eliminar {count} símbols seleccionats?"],
                cs: "Do you really want to delete {count} selected symbol?",
                de: ["Möchten Sie wirklich das ausgewählte Symbol {count} löschen?", "Möchten Sie wirklich das ausgewählte Symbole {count} löschen?"],
                el: "Do you really want to delete {count} selected symbol?",
                en: "Do you really want to delete {count} selected symbol?",
                es: ["¿Realmente desea eliminar {count} símbolo seleccionado?", "¿Realmente desea eliminar {count} símbolos seleccionados?"],
                fa: ["Do you really want to delete {count} selected symbols?"],
                fr: ["Voulez-vous vraiment supprimer {count} symbole sélectionné?", "Voulez-vous vraiment supprimer {count} symboles sélectionnés?"],
                he_IL: ["האם אתה באמת רוצה למחוק {count} סימול נבחר?", "האם אתה באמת רוצה למחוק {count} סימולים נבחרים?", "האם אתה באמת רוצה למחוק {count} סימולים נבחרים?", "האם אתה באמת רוצה למחוק {count} סימולים נבחרים?"],
                hu_HU: ["Do you really want to delete {count} selected symbols?"],
                id_ID: ["Apakah anda benar-benar ingin menghapus {count} simbol yang dipilih ?"],
                it: ["Vuoi davvero eliminare {count} simbolo selezionato?", "Vuoi davvero eliminare i {count} simboli selezionati?"],
                ja: ["本当に選択した{count}個のシンボルを削除しますか？"],
                ko: ["선택한 종목 {count}개를 정말로 삭제하시겠습니까?"],
                ms_MY: ["Adakah anda pasti untuk memadamkan {count} simbol yang dipilih?"],
                nl_NL: "Do you really want to delete {count} selected symbol?",
                pl: ["Czy na pewno chcesz usunąć {count} wybrany symbol?", "Czy na pewno chcesz usunąć {count} wybrane symbole?", "Czy na pewno chcesz usunąć {count} wybranych symboli?", "Czy na pewno chcesz usunąć {count} wybranych symboli?"],
                pt: ["Você realmente quer deletar o {count} símbolo selecionado?", "Você realmente quer deletar os {count} símbolos selecionados?"],
                ro: "Do you really want to delete {count} selected symbol?",
                ru: "Do you really want to delete {count} selected symbol?",
                sv: ["Vill du verkligen radera {count} symbol?", "Vill du verkligen radera {count} symboler?"],
                th: ["คุณต้องการลบ {count} สัญลักษณ์ที่เลือกจริง ๆ หรือไม่?"],
                tr: ["Seçilen {count} sembolü gerçekten silmek istiyor musunuz?", "Seçilen {count} sembolü gerçekten silmek istiyor musunuz?"],
                vi: ["Bạn có thực sự muốn xóa {count} mã đã chọn?"],
                zh: ["您真的要删除{count}个选定的商品吗？"],
                zh_TW: ["您真的要刪除{count}個選定的商品嗎？"]
            }
        },
        730572: e => {
            e.exports = {
                ar: ["يوم", "يوم", "يومين", "أيام", "يوم", "يوم"],
                ca_ES: ["dia", "dies"],
                cs: "day",
                de: ["Tag", "Tage"],
                el: "day",
                en: "day",
                es: ["día", "días"],
                fa: ["days"],
                fr: ["jour", "jours"],
                he_IL: ["יום", "יומיים", "ימים", "ימים"],
                hu_HU: ["nap"],
                id_ID: ["hari"],
                it: ["giorno", "giorni"],
                ja: ["日"],
                ko: ["날"],
                ms_MY: ["hari"],
                nl_NL: "day",
                pl: ["dzień", "dni", "dni", "dni"],
                pt: ["dia", "dias"],
                ro: "day",
                ru: ["день", "дня", "дней", "дней"],
                sv: ["dag", "dagar"],
                th: ["วัน"],
                tr: ["gün", "gün"],
                vi: ["ngày"],
                zh: ["日"],
                zh_TW: ["天"]
            }
        },
        52254: e => {
            e.exports = {
                ar: ["ساعة", "ساعة", "ساعة", "ساعات", "ساعة", "ساعة"],
                ca_ES: ["hora", "hores"],
                cs: "hour",
                de: ["Stunde", "Stunden"],
                el: "hour",
                en: "hour",
                es: ["hora", "horas"],
                fa: ["hours"],
                fr: ["heure", "heures"],
                he_IL: ["שעה", "שעות", "שעות", "שעות"],
                hu_HU: ["óra"],
                id_ID: ["jam"],
                it: ["ora", "ore"],
                ja: ["時間"],
                ko: ["시간"],
                ms_MY: ["jam"],
                nl_NL: "hour",
                pl: ["godzina", "godziny", "godzin", "godziny"],
                pt: ["hora", "horas"],
                ro: "hour",
                ru: ["час", "часа", "часов", "часов"],
                sv: ["timme", "timmar"],
                th: ["ชั่วโมง"],
                tr: ["saat", "saat"],
                vi: ["giờ"],
                zh: ["小时"],
                zh_TW: ["小時"]
            }
        },
        569143: e => {
            e.exports = {
                ar: ["دقيقة", "دقيقة", "دقيقتين", "دقائق", "دقيقة", "دقيقة"],
                ca_ES: ["minut", "minuts"],
                cs: "minute",
                de: ["Minute", "Minuten"],
                el: "minute",
                en: "minute",
                es: ["minuto", "minutos"],
                fa: ["minutes"],
                fr: "minute",
                he_IL: ["דקה", "דקות", "דקות", "דקות"],
                hu_HU: ["perc"],
                id_ID: ["menit"],
                it: ["minuto", "minuti"],
                ja: ["分"],
                ko: ["분"],
                ms_MY: ["minit"],
                nl_NL: "minute",
                pl: ["minuta", "minuty", "minut", "minut"],
                pt: ["minuto", "minutos"],
                ro: "minute",
                ru: ["минута", "минуты", "минут", "минут"],
                sv: ["minut", "minuter"],
                th: ["นาที"],
                tr: ["dakika", "dakika"],
                vi: ["phút"],
                zh: ["分钟"],
                zh_TW: ["分鐘"]
            }
        },
        671787: e => {
            e.exports = {
                ar: ["ثانية", "ثانية", "ثانيتان", "ثوان", "ثانية", "ثانية"],
                ca_ES: ["segon", "segons"],
                cs: "second",
                de: ["Sekunde", "Sekunden"],
                el: "second",
                en: "second",
                es: ["segundo", "segundos"],
                fa: ["seconds"],
                fr: ["seconde", "secondes"],
                he_IL: ["שניה", "שניות", "שניות", "שניות"],
                hu_HU: ["seconds"],
                id_ID: ["detik"],
                it: ["secondo", "secondi"],
                ja: ["秒"],
                ko: ["초"],
                ms_MY: ["saat"],
                nl_NL: "second",
                pl: ["sekunda", "sekundy", "sekund", "sekund"],
                pt: ["segundo", "segundos"],
                ro: "second",
                ru: ["секунда", "секунды", "секунд", "секунд"],
                sv: ["sekund", "sekunder"],
                th: ["วินาที"],
                tr: ["saniye", "saniye"],
                vi: ["giây"],
                zh: ["秒"],
                zh_TW: ["秒"]
            }
        },
        682797: e => {
            e.exports = {
                ar: ["نطاق", "نطاق", "نطاق", "نطاقات", "نطاق", "نطاق"],
                ca_ES: ["rang", "rangs"],
                cs: "range",
                de: ["Bereich", "Bereiche"],
                el: "range",
                en: "range",
                es: ["rango", "rangos"],
                fa: ["ranges"],
                fr: ["plage", "plages"],
                he_IL: ["טווח", "טווחים", "טווחים", "טווחים"],
                hu_HU: ["ranges"],
                id_ID: ["rentang"],
                it: "range",
                ja: ["レンジ"],
                ko: ["레인지"],
                ms_MY: ["julat"],
                nl_NL: "range",
                pl: ["zakres", "zakresy", "zakresów", "zakresów"],
                pt: "range",
                ro: "range",
                ru: "range",
                sv: ["Intervall", "Intervall"],
                th: ["ช่วง"],
                tr: ["aralık", "aralık"],
                vi: ["phạm vi"],
                zh: ["范围"],
                zh_TW: ["範圍"]
            }
        },
        947966: e => {
            e.exports = {
                ar: ["أسبوع", "أسبوع", "أسبوعين", "أسابيع", "أسبوع", "أسبوع"],
                ca_ES: ["setmana", "setmanes"],
                cs: "week",
                de: ["Woche", "Wochen"],
                el: "week",
                en: "week",
                es: ["semana", "semanas"],
                fa: ["weeks"],
                fr: ["semaine", "semaines"],
                he_IL: ["שבוע", "שבועות", "שבועות", "שבועות"],
                hu_HU: ["weeks"],
                id_ID: ["minggu"],
                it: ["settimana", "settimane"],
                ja: ["週"],
                ko: ["주"],
                ms_MY: ["minggu"],
                nl_NL: "week",
                pl: ["tydzień", "tygodnie", "tygodni", "tygodni"],
                pt: ["semana", "semanas"],
                ro: "week",
                ru: ["неделя", "недели", "недель", "недель"],
                sv: ["Vecka", "Veckor"],
                th: ["สัปดาห์"],
                tr: ["hafta", "hafta"],
                vi: ["tuần"],
                zh: ["周"],
                zh_TW: ["周"]
            }
        },
        699136: e => {
            e.exports = {
                ar: ["تيك", "تيك", "تيك", "تيك", "تيك", "تيك"],
                ca_ES: "tick",
                cs: "tick",
                de: ["Tick", "Ticks"],
                el: "tick",
                en: "tick",
                es: "tick",
                fa: ["ticks"],
                fr: "tick",
                he_IL: ["טיק", "טיקים", "טיקים", "טיקים"],
                hu_HU: ["ticks"],
                id_ID: "tick",
                it: "tick",
                ja: ["ティック"],
                ko: ["틱"],
                ms_MY: "tick",
                nl_NL: "tick",
                pl: "tick",
                pt: "tick",
                ro: "tick",
                ru: ["тик", "тика", "тиков", "тиков"],
                sv: "tick",
                th: ["เลือก"],
                tr: ["Kademe", "Kademe"],
                vi: "tick",
                zh: ["ticks"],
                zh_TW: ["ticks"]
            }
        }
    }
]);
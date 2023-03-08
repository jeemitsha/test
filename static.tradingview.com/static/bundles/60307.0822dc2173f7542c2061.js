"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [60307, 59255, 28557, 35608], {
        159255: (d, u, e) => {
            e.r(u), e.d(u, {
                default: () => k
            });
            var t = function() {
                    if ("undefined" != typeof Map) return Map;

                    function d(d, u) {
                        var e = -1;
                        return d.some((function(d, t) {
                            return d[0] === u && (e = t, !0)
                        })), e
                    }
                    return function() {
                        function u() {
                            this.__entries__ = []
                        }
                        return Object.defineProperty(u.prototype, "size", {
                            get: function() {
                                return this.__entries__.length
                            },
                            enumerable: !0,
                            configurable: !0
                        }), u.prototype.get = function(u) {
                            var e = d(this.__entries__, u),
                                t = this.__entries__[e];
                            return t && t[1]
                        }, u.prototype.set = function(u, e) {
                            var t = d(this.__entries__, u);
                            ~t ? this.__entries__[t][1] = e : this.__entries__.push([u, e])
                        }, u.prototype.delete = function(u) {
                            var e = this.__entries__,
                                t = d(e, u);
                            ~t && e.splice(t, 1)
                        }, u.prototype.has = function(u) {
                            return !!~d(this.__entries__, u)
                        }, u.prototype.clear = function() {
                            this.__entries__.splice(0)
                        }, u.prototype.forEach = function(d, u) {
                            void 0 === u && (u = null);
                            for (var e = 0, t = this.__entries__; e < t.length; e++) {
                                var f = t[e];
                                d.call(u, f[1], f[0])
                            }
                        }, u
                    }()
                }(),
                f = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                n = void 0 !== e.g && e.g.Math === Math ? e.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                c = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(n) : function(d) {
                    return setTimeout((function() {
                        return d(Date.now())
                    }), 1e3 / 60)
                };
            var r = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                i = "undefined" != typeof MutationObserver,
                o = function() {
                    function d() {
                        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(d, u) {
                            var e = !1,
                                t = !1,
                                f = 0;

                            function n() {
                                e && (e = !1, d()), t && i()
                            }

                            function r() {
                                c(n)
                            }

                            function i() {
                                var d = Date.now();
                                if (e) {
                                    if (d - f < 2) return;
                                    t = !0
                                } else e = !0, t = !1, setTimeout(r, u);
                                f = d
                            }
                            return i
                        }(this.refresh.bind(this), 20)
                    }
                    return d.prototype.addObserver = function(d) {
                        ~this.observers_.indexOf(d) || this.observers_.push(d), this.connected_ || this.connect_()
                    }, d.prototype.removeObserver = function(d) {
                        var u = this.observers_,
                            e = u.indexOf(d);
                        ~e && u.splice(e, 1), !u.length && this.connected_ && this.disconnect_()
                    }, d.prototype.refresh = function() {
                        this.updateObservers_() && this.refresh()
                    }, d.prototype.updateObservers_ = function() {
                        var d = this.observers_.filter((function(d) {
                            return d.gatherActive(), d.hasActive()
                        }));
                        return d.forEach((function(d) {
                            return d.broadcastActive()
                        })), d.length > 0
                    }, d.prototype.connect_ = function() {
                        f && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), i ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                    }, d.prototype.disconnect_ = function() {
                        f && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_),
                            window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                    }, d.prototype.onTransitionEnd_ = function(d) {
                        var u = d.propertyName,
                            e = void 0 === u ? "" : u;
                        r.some((function(d) {
                            return !!~e.indexOf(d)
                        })) && this.refresh()
                    }, d.getInstance = function() {
                        return this.instance_ || (this.instance_ = new d), this.instance_
                    }, d.instance_ = null, d
                }(),
                a = function(d, u) {
                    for (var e = 0, t = Object.keys(u); e < t.length; e++) {
                        var f = t[e];
                        Object.defineProperty(d, f, {
                            value: u[f],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return d
                },
                s = function(d) {
                    return d && d.ownerDocument && d.ownerDocument.defaultView || n
                },
                l = m(0, 0, 0, 0);

            function h(d) {
                return parseFloat(d) || 0
            }

            function b(d) {
                for (var u = [], e = 1; e < arguments.length; e++) u[e - 1] = arguments[e];
                return u.reduce((function(u, e) {
                    return u + h(d["border-" + e + "-width"])
                }), 0)
            }

            function v(d) {
                var u = d.clientWidth,
                    e = d.clientHeight;
                if (!u && !e) return l;
                var t = s(d).getComputedStyle(d),
                    f = function(d) {
                        for (var u = {}, e = 0, t = ["top", "right", "bottom", "left"]; e < t.length; e++) {
                            var f = t[e],
                                n = d["padding-" + f];
                            u[f] = h(n)
                        }
                        return u
                    }(t),
                    n = f.left + f.right,
                    c = f.top + f.bottom,
                    r = h(t.width),
                    i = h(t.height);
                if ("border-box" === t.boxSizing && (Math.round(r + n) !== u && (r -= b(t, "left", "right") + n), Math.round(i + c) !== e && (i -= b(t, "top", "bottom") + c)), ! function(d) {
                        return d === s(d).document.documentElement
                    }(d)) {
                    var o = Math.round(r + n) - u,
                        a = Math.round(i + c) - e;
                    1 !== Math.abs(o) && (r -= o), 1 !== Math.abs(a) && (i -= a)
                }
                return m(f.left, f.top, r, i)
            }
            var p = "undefined" != typeof SVGGraphicsElement ? function(d) {
                return d instanceof s(d).SVGGraphicsElement
            } : function(d) {
                return d instanceof s(d).SVGElement && "function" == typeof d.getBBox
            };

            function _(d) {
                return f ? p(d) ? function(d) {
                    var u = d.getBBox();
                    return m(0, 0, u.width, u.height)
                }(d) : v(d) : l
            }

            function m(d, u, e, t) {
                return {
                    x: d,
                    y: u,
                    width: e,
                    height: t
                }
            }
            var g = function() {
                    function d(d) {
                        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = m(0, 0, 0, 0), this.target = d
                    }
                    return d.prototype.isActive = function() {
                        var d = _(this.target);
                        return this.contentRect_ = d, d.width !== this.broadcastWidth || d.height !== this.broadcastHeight
                    }, d.prototype.broadcastRect = function() {
                        var d = this.contentRect_;
                        return this.broadcastWidth = d.width, this.broadcastHeight = d.height, d
                    }, d
                }(),
                y = function(d, u) {
                    var e, t, f, n, c, r, i, o = (t = (e = u).x, f = e.y, n = e.width, c = e.height, r = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, i = Object.create(r.prototype), a(i, {
                        x: t,
                        y: f,
                        width: n,
                        height: c,
                        top: f,
                        right: t + n,
                        bottom: c + f,
                        left: t
                    }), i);
                    a(this, {
                        target: d,
                        contentRect: o
                    })
                },
                w = function() {
                    function d(d, u, e) {
                        if (this.activeObservations_ = [], this.observations_ = new t, "function" != typeof d) throw new TypeError("The callback provided as parameter 1 is not a function.");
                        this.callback_ = d, this.controller_ = u, this.callbackCtx_ = e
                    }
                    return d.prototype.observe = function(d) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(d instanceof s(d).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var u = this.observations_;
                            u.has(d) || (u.set(d, new g(d)), this.controller_.addObserver(this), this.controller_.refresh())
                        }
                    }, d.prototype.unobserve = function(d) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(d instanceof s(d).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var u = this.observations_;
                            u.has(d) && (u.delete(d), u.size || this.controller_.removeObserver(this))
                        }
                    }, d.prototype.disconnect = function() {
                        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                    }, d.prototype.gatherActive = function() {
                        var d = this;
                        this.clearActive(), this.observations_.forEach((function(u) {
                            u.isActive() && d.activeObservations_.push(u)
                        }))
                    }, d.prototype.broadcastActive = function() {
                        if (this.hasActive()) {
                            var d = this.callbackCtx_,
                                u = this.activeObservations_.map((function(d) {
                                    return new y(d.target, d.broadcastRect())
                                }));
                            this.callback_.call(d, u, d), this.clearActive()
                        }
                    }, d.prototype.clearActive = function() {
                        this.activeObservations_.splice(0)
                    }, d.prototype.hasActive = function() {
                        return this.activeObservations_.length > 0
                    }, d
                }(),
                O = "undefined" != typeof WeakMap ? new WeakMap : new t,
                E = function d(u) {
                    if (!(this instanceof d)) throw new TypeError("Cannot call a class as a function.");
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    var e = o.getInstance(),
                        t = new w(u, e, this);
                    O.set(this, t)
                };
            ["observe", "unobserve", "disconnect"].forEach((function(d) {
                E.prototype[d] = function() {
                    var u;
                    return (u = O.get(this))[d].apply(u, arguments)
                }
            }));
            const k = void 0 !== n.ResizeObserver ? n.ResizeObserver : E
        },
        302399: (d, u, e) => {
            e.d(u, {
                default: () => r
            });
            var t = e(601141);
            const f = function(d) {
                return this.__data__.set(d, "__lodash_hash_undefined__"), this
            };
            const n = function(d) {
                return this.__data__.has(d)
            };

            function c(d) {
                var u = -1,
                    e = null == d ? 0 : d.length;
                for (this.__data__ = new t.default; ++u < e;) this.add(d[u])
            }
            c.prototype.add = c.prototype.push = f, c.prototype.has = n;
            const r = c
        },
        597888: (d, u, e) => {
            e.d(u, {
                default: () => n
            });
            var t = e(638684),
                f = e(29419);
            const n = function(d, u) {
                return function(e, t) {
                    if (null == e) return e;
                    if (!(0, f.default)(e)) return d(e, t);
                    for (var n = e.length, c = u ? n : -1, r = Object(e);
                        (u ? c-- : ++c < n) && !1 !== t(r[c], c, r););
                    return e
                }
            }(t.default)
        },
        638684: (d, u, e) => {
            e.d(u, {
                default: () => n
            });
            var t = e(429718),
                f = e(933358);
            const n = function(d, u) {
                return d && (0, t.default)(d, u, f.default)
            }
        },
        517487: (d, u, e) => {
            e.d(u, {
                default: () => C
            });
            var t = e(396335),
                f = e(302399);
            const n = function(d, u) {
                for (var e = -1, t = null == d ? 0 : d.length; ++e < t;)
                    if (u(d[e], e, d)) return !0;
                return !1
            };
            var c = e(817651);
            const r = function(d, u, e, t, r, i) {
                var o = 1 & e,
                    a = d.length,
                    s = u.length;
                if (a != s && !(o && s > a)) return !1;
                var l = i.get(d);
                if (l && i.get(u)) return l == u;
                var h = -1,
                    b = !0,
                    v = 2 & e ? new f.default : void 0;
                for (i.set(d, u), i.set(u, d); ++h < a;) {
                    var p = d[h],
                        _ = u[h];
                    if (t) var m = o ? t(_, p, h, u, d, i) : t(p, _, h, d, u, i);
                    if (void 0 !== m) {
                        if (m) continue;
                        b = !1;
                        break
                    }
                    if (v) {
                        if (!n(u, (function(d, u) {
                                if (!(0, c.default)(v, u) && (p === d || r(p, d, e, t, i))) return v.push(u)
                            }))) {
                            b = !1;
                            break
                        }
                    } else if (p !== _ && !r(p, _, e, t, i)) {
                        b = !1;
                        break
                    }
                }
                return i.delete(d), i.delete(u), b
            };
            var i = e(503060),
                o = e(735246),
                a = e(872575);
            const s = function(d) {
                var u = -1,
                    e = Array(d.size);
                return d.forEach((function(d, t) {
                    e[++u] = [t, d]
                })), e
            };
            var l = e(870729),
                h = i.default ? i.default.prototype : void 0,
                b = h ? h.valueOf : void 0;
            const v = function(d, u, e, t, f, n, c) {
                switch (e) {
                    case "[object DataView]":
                        if (d.byteLength != u.byteLength || d.byteOffset != u.byteOffset) return !1;
                        d = d.buffer, u = u.buffer;
                    case "[object ArrayBuffer]":
                        return !(d.byteLength != u.byteLength || !n(new o.default(d), new o.default(u)));
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                        return (0, a.default)(+d, +u);
                    case "[object Error]":
                        return d.name == u.name && d.message == u.message;
                    case "[object RegExp]":
                    case "[object String]":
                        return d == u + "";
                    case "[object Map]":
                        var i = s;
                    case "[object Set]":
                        var h = 1 & t;
                        if (i || (i = l.default), d.size != u.size && !h) return !1;
                        var v = c.get(d);
                        if (v) return v == u;
                        t |= 2, c.set(d, u);
                        var p = r(i(d), i(u), t, f, n, c);
                        return c.delete(d), p;
                    case "[object Symbol]":
                        if (b) return b.call(d) == b.call(u)
                }
                return !1
            };
            var p = e(885747),
                _ = Object.prototype.hasOwnProperty;
            const m = function(d, u, e, t, f, n) {
                var c = 1 & e,
                    r = (0, p.default)(d),
                    i = r.length;
                if (i != (0, p.default)(u).length && !c) return !1;
                for (var o = i; o--;) {
                    var a = r[o];
                    if (!(c ? a in u : _.call(u, a))) return !1
                }
                var s = n.get(d);
                if (s && n.get(u)) return s == u;
                var l = !0;
                n.set(d, u), n.set(u, d);
                for (var h = c; ++o < i;) {
                    var b = d[a = r[o]],
                        v = u[a];
                    if (t) var m = c ? t(v, b, a, u, d, n) : t(b, v, a, d, u, n);
                    if (!(void 0 === m ? b === v || f(b, v, e, t, n) : m)) {
                        l = !1;
                        break
                    }
                    h || (h = "constructor" == a)
                }
                if (l && !h) {
                    var g = d.constructor,
                        y = u.constructor;
                    g == y || !("constructor" in d) || !("constructor" in u) || "function" == typeof g && g instanceof g && "function" == typeof y && y instanceof y || (l = !1)
                }
                return n.delete(d), n.delete(u), l
            };
            var g = e(903427),
                y = e(854814),
                w = e(925247),
                O = e(54744),
                E = "[object Arguments]",
                k = "[object Array]",
                x = "[object Object]",
                j = Object.prototype.hasOwnProperty;
            const A = function(d, u, e, f, n, c) {
                var i = (0, y.default)(d),
                    o = (0, y.default)(u),
                    a = i ? k : (0, g.default)(d),
                    s = o ? k : (0, g.default)(u),
                    l = (a = a == E ? x : a) == x,
                    h = (s = s == E ? x : s) == x,
                    b = a == s;
                if (b && (0, w.default)(d)) {
                    if (!(0, w.default)(u)) return !1;
                    i = !0, l = !1
                }
                if (b && !l) return c || (c = new t.default), i || (0, O.default)(d) ? r(d, u, e, f, n, c) : v(d, u, a, e, f, n, c);
                if (!(1 & e)) {
                    var p = l && j.call(d, "__wrapped__"),
                        _ = h && j.call(u, "__wrapped__");
                    if (p || _) {
                        var A = p ? d.value() : d,
                            M = _ ? u.value() : u;
                        return c || (c = new t.default), n(A, M, e, f, c)
                    }
                }
                return !!b && (c || (c = new t.default), m(d, u, e, f, n, c))
            };
            var M = e(383527);
            const C = function d(u, e, t, f, n) {
                return u === e || (null == u || null == e || !(0, M.default)(u) && !(0, M.default)(e) ? u != u && e != e : A(u, e, t, f, d, n))
            }
        },
        498827: (d, u, e) => {
            e.d(u, {
                default: () => E
            });
            var t = e(396335),
                f = e(517487);
            const n = function(d, u, e, n) {
                var c = e.length,
                    r = c,
                    i = !n;
                if (null == d) return !r;
                for (d = Object(d); c--;) {
                    var o = e[c];
                    if (i && o[2] ? o[1] !== d[o[0]] : !(o[0] in d)) return !1
                }
                for (; ++c < r;) {
                    var a = (o = e[c])[0],
                        s = d[a],
                        l = o[1];
                    if (i && o[2]) {
                        if (void 0 === s && !(a in d)) return !1
                    } else {
                        var h = new t.default;
                        if (n) var b = n(s, l, a, d, u, h);
                        if (!(void 0 === b ? (0, f.default)(l, s, 3, n, h) : b)) return !1
                    }
                }
                return !0
            };
            var c = e(598279);
            const r = function(d) {
                return d == d && !(0, c.default)(d)
            };
            var i = e(933358);
            const o = function(d) {
                for (var u = (0, i.default)(d), e = u.length; e--;) {
                    var t = u[e],
                        f = d[t];
                    u[e] = [t, f, r(f)]
                }
                return u
            };
            const a = function(d, u) {
                return function(e) {
                    return null != e && (e[d] === u && (void 0 !== u || d in Object(e)))
                }
            };
            const s = function(d) {
                var u = o(d);
                return 1 == u.length && u[0][2] ? a(u[0][0], u[0][1]) : function(e) {
                    return e === d || n(e, d, u)
                }
            };
            var l = e(580838);
            const h = function(d, u, e) {
                var t = null == d ? void 0 : (0, l.default)(d, u);
                return void 0 === t ? e : t
            };
            var b = e(22321),
                v = e(973204),
                p = e(887844);
            const _ = function(d, u) {
                return (0, v.default)(d) && r(u) ? a((0, p.default)(d), u) : function(e) {
                    var t = h(e, d);
                    return void 0 === t && t === u ? (0, b.default)(e, d) : (0, f.default)(u, t, 3)
                }
            };
            var m = e(999097),
                g = e(854814),
                y = e(77046);
            const w = function(d) {
                return function(u) {
                    return (0, l.default)(u, d)
                }
            };
            const O = function(d) {
                return (0, v.default)(d) ? (0, y.default)((0, p.default)(d)) : w(d)
            };
            const E = function(d) {
                return "function" == typeof d ? d : null == d ? m.default : "object" == typeof d ? (0, g.default)(d) ? _(d[0], d[1]) : s(d) : O(d)
            }
        },
        77046: (d, u, e) => {
            e.d(u, {
                default: () => t
            });
            const t = function(d) {
                return function(u) {
                    return null == u ? void 0 : u[d]
                }
            }
        },
        817651: (d, u, e) => {
            e.d(u, {
                default: () => t
            });
            const t = function(d, u) {
                return d.has(u)
            }
        },
        870729: (d, u, e) => {
            e.d(u, {
                default: () => t
            });
            const t = function(d) {
                var u = -1,
                    e = Array(d.size);
                return d.forEach((function(d) {
                    e[++u] = d
                })), e
            }
        },
        316230: (d, u, e) => {
            e.d(u, {
                default: () => f
            });
            var t = e(517487);
            const f = function(d, u) {
                return (0, t.default)(d, u)
            }
        },
        230148: (d, u, e) => {
            var t = e(823127);
            e(415784),
                function(d) {
                    var u = !1,
                        e = document.body || document.documentElement,
                        t = "animation",
                        f = "Webkit Moz O ms Khtml".split(" "),
                        n = "";
                    if (void 0 !== e.style.animationName && (u = !0), !1 === u)
                        for (var c = 0; c < f.length; c++)
                            if (void 0 !== e.style[f[c] + "AnimationName"]) {
                                n = f[c], t = n + "Animation", "-" + n.toLowerCase() + "-", u = !0;
                                break
                            }
                    var r = ["webkit", "moz", "MS", "o", ""];
                    var i = "flicker-enable",
                        o = "flicker-options";

                    function a(d) {
                        d.stop(!0), d.css("background-color", ""), d.removeData(i), d.removeData(o)
                    }

                    function s(u) {
                        var e = u.data(i);
                        e && (!0 !== e ? --e ? (l(u), u.data(i, e)) : function(u) {
                            var e = u.data(o).complete;
                            a(u), e && d.isFunction(e) && e()
                        }(u) : l(u))
                    }

                    function l(d) {
                        var u = d.css("background-color"),
                            e = d.data(o),
                            t = e.highlightColor || "#fbf8e9",
                            f = e.duration || 400,
                            n = e.easing || "swing";
                        d.animate({
                            "background-color": t
                        }, f, n).animate({
                            "background-color": u
                        }, f, n, s.bind(d, d))
                    }
                    d.fn.highlight = function(e, f) {
                        return !1 === e ? this.each((function() {
                            u ? this.style[t] = "" : a(d(this))
                        })) : (e = void 0 === e || e, this.each((function() {
                            if (u) {
                                e = !0 === e ? "infinite" : e,
                                    function(d, u, e) {
                                        for (var t = 0; t < r.length; t++) r[t] || (u = u.toLowerCase()), d.addEventListener(r[t] + u, e, !1)
                                    }(this, "AnimationEnd", (function() {
                                        this.style[t] = ""
                                    })), document.getElementsByTagName("html")[0].classList.contains("theme-dark") ? this.style[t] = "highlight-animation-theme-dark 0.4s ease-in-out " + e + " alternate" : this.style[t] = "highlight-animation 0.4s ease-in-out " + e + " alternate"
                            } else {
                                var n = d(this);
                                n.data(i, e), n.data(o, d.extend({}, f || {})), n.is(":animated") || l(n)
                            }
                        })))
                    }
                }(t)
        },
        818438: (d, u, e) => {
            e.d(u, {
                default: () => t
            });
            const t = function() {
                var d = {
                        base: "https://twemoji.maxcdn.com/v/13.0.1/",
                        ext: ".png",
                        size: "72x72",
                        className: "emoji",
                        convert: {
                            fromCodePoint: function(d) {
                                var u = "string" == typeof d ? parseInt(d, 16) : d;
                                if (u < 65536) return r(u);
                                return r(55296 + ((u -= 65536) >> 10), 56320 + (1023 & u))
                            },
                            toCodePoint: _
                        },
                        onerror: function() {
                            this.parentNode && this.parentNode.replaceChild(i(this.alt, !1), this)
                        },
                        parse: function(u, e) {
                            e && "function" != typeof e || (e = {
                                callback: e
                            });
                            return ("string" == typeof u ? h : l)(u, {
                                callback: e.callback || o,
                                attributes: "function" == typeof e.attributes ? e.attributes : v,
                                base: "string" == typeof e.base ? e.base : d.base,
                                ext: e.ext || d.ext,
                                size: e.folder || (t = e.size || d.size, "number" == typeof t ? t + "x" + t : t),
                                className: e.className || d.className,
                                onerror: e.onerror || d.onerror
                            });
                            var t
                        },
                        replace: p,
                        test: function(d) {
                            e.lastIndex = 0;
                            var u = e.test(d);
                            return e.lastIndex = 0, u
                        }
                    },
                    u = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        "'": "&#39;",
                        '"': "&quot;"
                    },
                    e = /(?:\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udeeb\udeec\udef4-\udefc\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78\udd7a-\uddb4\uddb7\uddba\uddbc-\uddcb\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,
                    t = /\uFE0F/g,
                    f = String.fromCharCode(8205),
                    n = /[&<>'"]/g,
                    c = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/,
                    r = String.fromCharCode;
                return d;

                function i(d, u) {
                    return document.createTextNode(u ? d.replace(t, "") : d)
                }

                function o(d, u) {
                    return "".concat(u.base, u.size, "/", d, u.ext)
                }

                function a(d, u) {
                    for (var e, t, f = d.childNodes, n = f.length; n--;) 3 === (t = (e = f[n]).nodeType) ? u.push(e) : 1 !== t || "ownerSVGElement" in e || c.test(e.nodeName.toLowerCase()) || a(e, u);
                    return u
                }

                function s(d) {
                    return _(d.indexOf(f) < 0 ? d.replace(t, "") : d)
                }

                function l(d, u) {
                    for (var t, f, n, c, r, o, l, h, b, v, p, _, m, g = a(d, []), y = g.length; y--;) {
                        for (n = !1, c = document.createDocumentFragment(), o = (r = g[y]).nodeValue, h = 0; l = e.exec(o);) {
                            if ((b = l.index) !== h && c.appendChild(i(o.slice(h, b), !0)), _ = s(p = l[0]), h = b + p.length, m = u.callback(_, u), _ && m) {
                                for (f in (v = new Image).onerror = u.onerror, v.setAttribute("draggable", "false"), t = u.attributes(p, _)) t.hasOwnProperty(f) && 0 !== f.indexOf("on") && !v.hasAttribute(f) && v.setAttribute(f, t[f]);
                                v.className = u.className, v.alt = p, v.src = m, n = !0, c.appendChild(v)
                            }
                            v || c.appendChild(i(p, !1)), v = null
                        }
                        n && (h < o.length && c.appendChild(i(o.slice(h), !0)), r.parentNode.replaceChild(c, r))
                    }
                    return d
                }

                function h(d, u) {
                    return p(d, (function(d) {
                        var e, t, f = d,
                            c = s(d),
                            r = u.callback(c, u);
                        if (c && r) {
                            for (t in f = "<img ".concat('class="', u.className, '" ', 'draggable="false" ', 'alt="', d, '"', ' src="', r, '"'), e = u.attributes(d, c)) e.hasOwnProperty(t) && 0 !== t.indexOf("on") && -1 === f.indexOf(" " + t + "=") && (f = f.concat(" ", t, '="', e[t].replace(n, b), '"'));
                            f = f.concat("/>")
                        }
                        return f
                    }))
                }

                function b(d) {
                    return u[d]
                }

                function v() {
                    return null
                }

                function p(d, u) {
                    return String(d).replace(e, u)
                }

                function _(d, u) {
                    for (var e = [], t = 0, f = 0, n = 0; n < d.length;) t = d.charCodeAt(n++), f ? (e.push((65536 + (f - 55296 << 10) + (t - 56320)).toString(16)), f = 0) : 55296 <= t && t <= 56319 ? f = t : e.push(t.toString(16));
                    return e.join(u || "-")
                }
            }()
        }
    }
]);
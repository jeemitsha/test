"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [40215, 59255, 28557, 35608], {
        159255: (t, e, n) => {
            n.r(e), n.d(e, {
                default: () => O
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
                                var i = r[n];
                                t.call(e, i[1], i[0])
                            }
                        }, e
                    }()
                }(),
                i = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                o = void 0 !== n.g && n.g.Math === Math ? n.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                u = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(o) : function(t) {
                    return setTimeout((function() {
                        return t(Date.now())
                    }), 1e3 / 60)
                };
            var s = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                c = "undefined" != typeof MutationObserver,
                a = function() {
                    function t() {
                        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, e) {
                            var n = !1,
                                r = !1,
                                i = 0;

                            function o() {
                                n && (n = !1, t()), r && c()
                            }

                            function s() {
                                u(o)
                            }

                            function c() {
                                var t = Date.now();
                                if (n) {
                                    if (t - i < 2) return;
                                    r = !0
                                } else n = !0, r = !1, setTimeout(s, e);
                                i = t
                            }
                            return c
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
                        i && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), c ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                    }, t.prototype.disconnect_ = function() {
                        i && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_),
                            window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                    }, t.prototype.onTransitionEnd_ = function(t) {
                        var e = t.propertyName,
                            n = void 0 === e ? "" : e;
                        s.some((function(t) {
                            return !!~n.indexOf(t)
                        })) && this.refresh()
                    }, t.getInstance = function() {
                        return this.instance_ || (this.instance_ = new t), this.instance_
                    }, t.instance_ = null, t
                }(),
                f = function(t, e) {
                    for (var n = 0, r = Object.keys(e); n < r.length; n++) {
                        var i = r[n];
                        Object.defineProperty(t, i, {
                            value: e[i],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return t
                },
                h = function(t) {
                    return t && t.ownerDocument && t.ownerDocument.defaultView || o
                },
                d = m(0, 0, 0, 0);

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
                if (!e && !n) return d;
                var r = h(t).getComputedStyle(t),
                    i = function(t) {
                        for (var e = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                            var i = r[n],
                                o = t["padding-" + i];
                            e[i] = l(o)
                        }
                        return e
                    }(r),
                    o = i.left + i.right,
                    u = i.top + i.bottom,
                    s = l(r.width),
                    c = l(r.height);
                if ("border-box" === r.boxSizing && (Math.round(s + o) !== e && (s -= v(r, "left", "right") + o), Math.round(c + u) !== n && (c -= v(r, "top", "bottom") + u)), ! function(t) {
                        return t === h(t).document.documentElement
                    }(t)) {
                    var a = Math.round(s + o) - e,
                        f = Math.round(c + u) - n;
                    1 !== Math.abs(a) && (s -= a), 1 !== Math.abs(f) && (c -= f)
                }
                return m(i.left, i.top, s, c)
            }
            var b = "undefined" != typeof SVGGraphicsElement ? function(t) {
                return t instanceof h(t).SVGGraphicsElement
            } : function(t) {
                return t instanceof h(t).SVGElement && "function" == typeof t.getBBox
            };

            function _(t) {
                return i ? b(t) ? function(t) {
                    var e = t.getBBox();
                    return m(0, 0, e.width, e.height)
                }(t) : p(t) : d
            }

            function m(t, e, n, r) {
                return {
                    x: t,
                    y: e,
                    width: n,
                    height: r
                }
            }
            var y = function() {
                    function t(t) {
                        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = m(0, 0, 0, 0), this.target = t
                    }
                    return t.prototype.isActive = function() {
                        var t = _(this.target);
                        return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
                    }, t.prototype.broadcastRect = function() {
                        var t = this.contentRect_;
                        return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
                    }, t
                }(),
                g = function(t, e) {
                    var n, r, i, o, u, s, c, a = (r = (n = e).x, i = n.y, o = n.width, u = n.height, s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, c = Object.create(s.prototype), f(c, {
                        x: r,
                        y: i,
                        width: o,
                        height: u,
                        top: i,
                        right: r + o,
                        bottom: u + i,
                        left: r
                    }), c);
                    f(this, {
                        target: t,
                        contentRect: a
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
                            if (!(t instanceof h(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var e = this.observations_;
                            e.has(t) || (e.set(t, new y(t)), this.controller_.addObserver(this), this.controller_.refresh())
                        }
                    }, t.prototype.unobserve = function(t) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof h(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
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
                                    return new g(t.target, t.broadcastRect())
                                }));
                            this.callback_.call(t, e, t), this.clearActive()
                        }
                    }, t.prototype.clearActive = function() {
                        this.activeObservations_.splice(0)
                    }, t.prototype.hasActive = function() {
                        return this.activeObservations_.length > 0
                    }, t
                }(),
                x = "undefined" != typeof WeakMap ? new WeakMap : new r,
                E = function t(e) {
                    if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    var n = a.getInstance(),
                        r = new w(e, n, this);
                    x.set(this, r)
                };
            ["observe", "unobserve", "disconnect"].forEach((function(t) {
                E.prototype[t] = function() {
                    var e;
                    return (e = x.get(this))[t].apply(e, arguments)
                }
            }));
            const O = void 0 !== o.ResizeObserver ? o.ResizeObserver : E
        },
        839391: t => {
            function e(t) {
                return "function" == typeof t ? t() : t
            }

            function n() {
                var t = {};
                return t.promise = new Promise((function(e, n) {
                    t.resolve = e, t.reject = n
                })), t
            }
            t.exports = function(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    o = void 0,
                    u = void 0,
                    s = void 0,
                    c = [];
                return function() {
                    var f = e(r),
                        h = (new Date).getTime(),
                        d = !o || h - o > f;
                    o = h;
                    for (var l = arguments.length, v = Array(l), p = 0; p < l; p++) v[p] = arguments[p];
                    if (d && i.leading) return i.accumulate ? Promise.resolve(t.call(this, [v])).then((function(t) {
                        return t[0]
                    })) : Promise.resolve(t.call.apply(t, [this].concat(v)));
                    if (u ? clearTimeout(s) : u = n(), c.push(v), s = setTimeout(a.bind(this), f), i.accumulate) {
                        var b = c.length - 1;
                        return u.promise.then((function(t) {
                            return t[b]
                        }))
                    }
                    return u.promise
                };

                function a() {
                    var e = u;
                    clearTimeout(s), Promise.resolve(i.accumulate ? t.call(this, c) : t.apply(this, c[c.length - 1])).then(e.resolve, e.reject), c = [], u = null
                }
            }
        },
        116193: (t, e, n) => {
            n.d(e, {
                default: () => i
            });
            var r = n(144315);
            const i = function(t) {
                return (0, r.default)(t, 4)
            }
        },
        480802: (t, e, n) => {
            n.d(e, {
                default: () => P
            });
            var r = n(298243);
            const i = function(t) {
                return function(e) {
                    return null == t ? void 0 : t[e]
                }
            }({
                À: "A",
                Á: "A",
                Â: "A",
                Ã: "A",
                Ä: "A",
                Å: "A",
                à: "a",
                á: "a",
                â: "a",
                ã: "a",
                ä: "a",
                å: "a",
                Ç: "C",
                ç: "c",
                Ð: "D",
                ð: "d",
                È: "E",
                É: "E",
                Ê: "E",
                Ë: "E",
                è: "e",
                é: "e",
                ê: "e",
                ë: "e",
                Ì: "I",
                Í: "I",
                Î: "I",
                Ï: "I",
                ì: "i",
                í: "i",
                î: "i",
                ï: "i",
                Ñ: "N",
                ñ: "n",
                Ò: "O",
                Ó: "O",
                Ô: "O",
                Õ: "O",
                Ö: "O",
                Ø: "O",
                ò: "o",
                ó: "o",
                ô: "o",
                õ: "o",
                ö: "o",
                ø: "o",
                Ù: "U",
                Ú: "U",
                Û: "U",
                Ü: "U",
                ù: "u",
                ú: "u",
                û: "u",
                ü: "u",
                Ý: "Y",
                ý: "y",
                ÿ: "y",
                Æ: "Ae",
                æ: "ae",
                Þ: "Th",
                þ: "th",
                ß: "ss",
                Ā: "A",
                Ă: "A",
                Ą: "A",
                ā: "a",
                ă: "a",
                ą: "a",
                Ć: "C",
                Ĉ: "C",
                Ċ: "C",
                Č: "C",
                ć: "c",
                ĉ: "c",
                ċ: "c",
                č: "c",
                Ď: "D",
                Đ: "D",
                ď: "d",
                đ: "d",
                Ē: "E",
                Ĕ: "E",
                Ė: "E",
                Ę: "E",
                Ě: "E",
                ē: "e",
                ĕ: "e",
                ė: "e",
                ę: "e",
                ě: "e",
                Ĝ: "G",
                Ğ: "G",
                Ġ: "G",
                Ģ: "G",
                ĝ: "g",
                ğ: "g",
                ġ: "g",
                ģ: "g",
                Ĥ: "H",
                Ħ: "H",
                ĥ: "h",
                ħ: "h",
                Ĩ: "I",
                Ī: "I",
                Ĭ: "I",
                Į: "I",
                İ: "I",
                ĩ: "i",
                ī: "i",
                ĭ: "i",
                į: "i",
                ı: "i",
                Ĵ: "J",
                ĵ: "j",
                Ķ: "K",
                ķ: "k",
                ĸ: "k",
                Ĺ: "L",
                Ļ: "L",
                Ľ: "L",
                Ŀ: "L",
                Ł: "L",
                ĺ: "l",
                ļ: "l",
                ľ: "l",
                ŀ: "l",
                ł: "l",
                Ń: "N",
                Ņ: "N",
                Ň: "N",
                Ŋ: "N",
                ń: "n",
                ņ: "n",
                ň: "n",
                ŋ: "n",
                Ō: "O",
                Ŏ: "O",
                Ő: "O",
                ō: "o",
                ŏ: "o",
                ő: "o",
                Ŕ: "R",
                Ŗ: "R",
                Ř: "R",
                ŕ: "r",
                ŗ: "r",
                ř: "r",
                Ś: "S",
                Ŝ: "S",
                Ş: "S",
                Š: "S",
                ś: "s",
                ŝ: "s",
                ş: "s",
                š: "s",
                Ţ: "T",
                Ť: "T",
                Ŧ: "T",
                ţ: "t",
                ť: "t",
                ŧ: "t",
                Ũ: "U",
                Ū: "U",
                Ŭ: "U",
                Ů: "U",
                Ű: "U",
                Ų: "U",
                ũ: "u",
                ū: "u",
                ŭ: "u",
                ů: "u",
                ű: "u",
                ų: "u",
                Ŵ: "W",
                ŵ: "w",
                Ŷ: "Y",
                ŷ: "y",
                Ÿ: "Y",
                Ź: "Z",
                Ż: "Z",
                Ž: "Z",
                ź: "z",
                ż: "z",
                ž: "z",
                Ĳ: "IJ",
                ĳ: "ij",
                Œ: "Oe",
                œ: "oe",
                ŉ: "'n",
                ſ: "s"
            });
            var o = n(824018),
                u = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                s = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
            const c = function(t) {
                return (t = (0, o.default)(t)) && t.replace(u, i).replace(s, "")
            };
            var a = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
            const f = function(t) {
                return t.match(a) || []
            };
            var h = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
            const d = function(t) {
                return h.test(t)
            };
            var l = "\\u2700-\\u27bf",
                v = "a-z\\xdf-\\xf6\\xf8-\\xff",
                p = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                b = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                _ = "[" + b + "]",
                m = "\\d+",
                y = "[\\u2700-\\u27bf]",
                g = "[" + v + "]",
                w = "[^\\ud800-\\udfff" + b + m + l + v + p + "]",
                x = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                E = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                O = "[" + p + "]",
                A = "(?:" + g + "|" + w + ")",
                T = "(?:" + O + "|" + w + ")",
                S = "(?:['’](?:d|ll|m|re|s|t|ve))?",
                M = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
                z = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
                R = "[\\ufe0e\\ufe0f]?",
                j = R + z + ("(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", x, E].join("|") + ")" + R + z + ")*"),
                k = "(?:" + [y, x, E].join("|") + ")" + j,
                D = RegExp([O + "?" + g + "+" + S + "(?=" + [_, O, "$"].join("|") + ")", T + "+" + M + "(?=" + [_, O + A, "$"].join("|") + ")", O + "?" + A + "+" + S, O + "+" + M, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", m, k].join("|"), "g");
            const C = function(t) {
                return t.match(D) || []
            };
            const L = function(t, e, n) {
                return t = (0, o.default)(t), void 0 === (e = n ? void 0 : e) ? d(t) ? C(t) : f(t) : t.match(e) || []
            };
            var I = RegExp("['’]", "g");
            const P = function(t) {
                return function(e) {
                    return (0, r.default)(L(c(e).replace(I, "")), t, "")
                }
            }((function(t, e, n) {
                return t + (n ? "-" : "") + e.toLowerCase()
            }))
        },
        265728: (t, e, n) => {
            n.d(e, {
                ReplaySubject: () => u
            });
            var r = n(446685),
                i = n(737538),
                o = n(712813),
                u = function(t) {
                    function e(e, n, r) {
                        void 0 === e && (e = 1 / 0), void 0 === n && (n = 1 / 0), void 0 === r && (r = o.dateTimestampProvider);
                        var i = t.call(this) || this;
                        return i._bufferSize = e, i._windowTime = n, i._timestampProvider = r, i._buffer = [], i._infiniteTimeWindow = !0,
                            i._infiniteTimeWindow = n === 1 / 0, i._bufferSize = Math.max(1, e), i._windowTime = Math.max(1, n), i
                    }
                    return (0, r.__extends)(e, t), e.prototype.next = function(e) {
                        var n = this,
                            r = n.isStopped,
                            i = n._buffer,
                            o = n._infiniteTimeWindow,
                            u = n._timestampProvider,
                            s = n._windowTime;
                        r || (i.push(e), !o && i.push(u.now() + s)), this._trimBuffer(), t.prototype.next.call(this, e)
                    }, e.prototype._subscribe = function(t) {
                        this._throwIfClosed(), this._trimBuffer();
                        for (var e = this._innerSubscribe(t), n = this._infiniteTimeWindow, r = this._buffer.slice(), i = 0; i < r.length && !t.closed; i += n ? 1 : 2) t.next(r[i]);
                        return this._checkFinalizedStatuses(t), e
                    }, e.prototype._trimBuffer = function() {
                        var t = this,
                            e = t._bufferSize,
                            n = t._timestampProvider,
                            r = t._buffer,
                            i = t._infiniteTimeWindow,
                            o = (i ? 1 : 2) * e;
                        if (e < 1 / 0 && o < r.length && r.splice(0, r.length - o), !i) {
                            for (var u = n.now(), s = 0, c = 1; c < r.length && r[c] <= u; c += 2) s = c;
                            s && r.splice(0, s + 1)
                        }
                    }, e
                }(i.Subject)
        },
        410923: (t, e, n) => {
            n.d(e, {
                firstValueFrom: () => o
            });
            var r = n(45143),
                i = n(620210);

            function o(t, e) {
                var n = "object" == typeof e;
                return new Promise((function(o, u) {
                    var s = new i.SafeSubscriber({
                        next: function(t) {
                            o(t), s.unsubscribe()
                        },
                        error: u,
                        complete: function() {
                            n ? o(e.defaultValue) : u(new r.EmptyError)
                        }
                    });
                    t.subscribe(s)
                }))
            }
        },
        323002: (t, e, n) => {
            n.d(e, {
                merge: () => c
            });
            var r = n(925186),
                i = n(771035),
                o = n(423869),
                u = n(595940),
                s = n(839874);

            function c() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = (0, u.popScheduler)(t),
                    c = (0, u.popNumber)(t, 1 / 0),
                    a = t;
                return a.length ? 1 === a.length ? (0, i.innerFrom)(a[0]) : (0, r.mergeAll)(c)((0, s.from)(a, n)) : o.EMPTY
            }
        },
        138966: (t, e, n) => {
            n.d(e, {
                OperatorSubscriber: () => i
            });
            var r = n(446685),
                i = function(t) {
                    function e(e, n, r, i, o) {
                        var u = t.call(this, e) || this;
                        return u.onFinalize = o, u._next = n ? function(t) {
                            try {
                                n(t)
                            } catch (t) {
                                e.error(t)
                            }
                        } : t.prototype._next, u._error = i ? function(t) {
                            try {
                                i(t)
                            } catch (t) {
                                e.error(t)
                            } finally {
                                this.unsubscribe()
                            }
                        } : t.prototype._error, u._complete = r ? function() {
                            try {
                                r()
                            } catch (t) {
                                e.error(t)
                            } finally {
                                this.unsubscribe()
                            }
                        } : t.prototype._complete, u
                    }
                    return (0, r.__extends)(e, t), e.prototype.unsubscribe = function() {
                        var e, n = this.closed;
                        t.prototype.unsubscribe.call(this), !n && (null === (e = this.onFinalize) || void 0 === e || e.call(this))
                    }, e
                }(n(620210).Subscriber)
        },
        218286: (t, e, n) => {
            n.d(e, {
                distinctUntilChanged: () => u
            });
            var r = n(472484),
                i = n(116217),
                o = n(138966);

            function u(t, e) {
                return void 0 === e && (e = r.identity), t = null != t ? t : s, (0, i.operate)((function(n, r) {
                    var i, u = !0;
                    n.subscribe(new o.OperatorSubscriber(r, (function(n) {
                        var o = e(n);
                        !u && t(i, o) || (u = !1, i = o, r.next(n))
                    })))
                }))
            }

            function s(t, e) {
                return t === e
            }
        },
        925186: (t, e, n) => {
            n.d(e, {
                mergeAll: () => o
            });
            var r = n(114501),
                i = n(472484);

            function o(t) {
                return void 0 === t && (t = 1 / 0), (0, r.mergeMap)(i.identity, t)
            }
        },
        312694: (t, e, n) => {
            n.d(e, {
                share: () => a
            });
            var r = n(446685),
                i = n(839874),
                o = n(346502),
                u = n(737538),
                s = n(620210),
                c = n(116217);

            function a(t) {
                void 0 === t && (t = {});
                var e = t.connector,
                    n = void 0 === e ? function() {
                        return new u.Subject
                    } : e,
                    r = t.resetOnError,
                    o = void 0 === r || r,
                    a = t.resetOnComplete,
                    h = void 0 === a || a,
                    d = t.resetOnRefCountZero,
                    l = void 0 === d || d;
                return function(t) {
                    var e = null,
                        r = null,
                        u = null,
                        a = 0,
                        d = !1,
                        v = !1,
                        p = function() {
                            null == r || r.unsubscribe(), r = null
                        },
                        b = function() {
                            p(), e = u = null, d = v = !1
                        },
                        _ = function() {
                            var t = e;
                            b(), null == t || t.unsubscribe()
                        };
                    return (0, c.operate)((function(t, c) {
                        a++, v || d || p();
                        var m = u = null != u ? u : n();
                        c.add((function() {
                            0 !== --a || v || d || (r = f(_, l))
                        })), m.subscribe(c), e || (e = new s.SafeSubscriber({
                            next: function(t) {
                                return m.next(t)
                            },
                            error: function(t) {
                                v = !0, p(), r = f(b, o, t), m.error(t)
                            },
                            complete: function() {
                                d = !0, p(), r = f(b, h), m.complete()
                            }
                        }), (0, i.from)(t).subscribe(e))
                    }))(t)
                }
            }

            function f(t, e) {
                for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
                return !0 === e ? (t(), null) : !1 === e ? null : e.apply(void 0, (0, r.__spreadArray)([], (0, r.__read)(n), !1)).pipe((0, o.take)(1)).subscribe((function() {
                    return t()
                }))
            }
        },
        173587: (t, e, n) => {
            n.d(e, {
                skip: () => i
            });
            var r = n(169977);

            function i(t) {
                return (0, r.filter)((function(e, n) {
                    return t <= n
                }))
            }
        },
        757604: (t, e, n) => {
            n.d(e, {
                startWith: () => a
            });
            var r = n(925186);

            function i() {
                return (0, r.mergeAll)(1)
            }
            var o = n(595940),
                u = n(839874);

            function s() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return i()((0, u.from)(t, (0, o.popScheduler)(t)))
            }
            var c = n(116217);

            function a() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = (0, o.popScheduler)(t);
                return (0, c.operate)((function(e, r) {
                    (n ? s(t, e, n) : s(t, e)).subscribe(r)
                }))
            }
        },
        233064: (t, e, n) => {
            n.d(e, {
                switchMap: () => u
            });
            var r = n(771035),
                i = n(116217),
                o = n(138966);

            function u(t, e) {
                return (0, i.operate)((function(n, i) {
                    var u = null,
                        s = 0,
                        c = !1,
                        a = function() {
                            return c && !u && i.complete()
                        };
                    n.subscribe(new o.OperatorSubscriber(i, (function(n) {
                        null == u || u.unsubscribe();
                        var c = 0,
                            f = s++;
                        (0, r.innerFrom)(t(n, f)).subscribe(u = new o.OperatorSubscriber(i, (function(t) {
                            return i.next(e ? e(n, t, f, c++) : t)
                        }), (function() {
                            u = null, a()
                        })))
                    }), (function() {
                        c = !0, a()
                    })))
                }))
            }
        },
        482165: (t, e, n) => {
            n.d(e, {
                tap: () => s
            });
            var r = n(38323),
                i = n(116217),
                o = n(138966),
                u = n(472484);

            function s(t, e, n) {
                var s = (0, r.isFunction)(t) || e || n ? {
                    next: t,
                    error: e,
                    complete: n
                } : t;
                return s ? (0, i.operate)((function(t, e) {
                    var n;
                    null === (n = s.subscribe) || void 0 === n || n.call(s);
                    var r = !0;
                    t.subscribe(new o.OperatorSubscriber(e, (function(t) {
                        var n;
                        null === (n = s.next) || void 0 === n || n.call(s, t), e.next(t)
                    }), (function() {
                        var t;
                        r = !1, null === (t = s.complete) || void 0 === t || t.call(s), e.complete()
                    }), (function(t) {
                        var n;
                        r = !1, null === (n = s.error) || void 0 === n || n.call(s, t), e.error(t)
                    }), (function() {
                        var t, e;
                        r && (null === (t = s.unsubscribe) || void 0 === t || t.call(s)), null === (e = s.finalize) || void 0 === e || e.call(s)
                    })))
                })) : u.identity
            }
        },
        712813: (t, e, n) => {
            n.d(e, {
                dateTimestampProvider: () => r
            });
            var r = {
                now: function() {
                    return (r.delegate || Date).now()
                },
                delegate: void 0
            }
        },
        116217: (t, e, n) => {
            n.d(e, {
                operate: () => i
            });
            var r = n(38323);

            function i(t) {
                return function(e) {
                    if (function(t) {
                            return (0, r.isFunction)(null == t ? void 0 : t.lift)
                        }(e)) return e.lift((function(e) {
                        try {
                            return t(e, this)
                        } catch (t) {
                            this.error(t)
                        }
                    }));
                    throw new TypeError("Unable to lift unknown Observable type")
                }
            }
        }
    }
]);
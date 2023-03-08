(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [91046, 46670], {
        130551: (e, t) => {
            "use strict";
            t.hasProperty = t.isObject = void 0, t.isObject = function(e) {
                var t = typeof e;
                return null !== e && ("object" === t || "function" === t)
            }, t.hasProperty = function(e, t) {
                return t in e
            }
        },
        407193: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => u
            });
            var r = n(920883),
                o = n(503060),
                i = n(553822),
                a = n(854814),
                s = o.default ? o.default.isConcatSpreadable : void 0;
            const l = function(e) {
                return (0, a.default)(e) || (0, i.default)(e) || !!(s && e && e[s])
            };
            const u = function e(t, n, o, i, a) {
                var s = -1,
                    u = t.length;
                for (o || (o = l), a || (a = []); ++s < u;) {
                    var c = t[s];
                    n > 0 && o(c) ? n > 1 ? e(c, n - 1, o, i, a) : (0, r.default)(a, c) : i || (a[a.length] = c)
                }
                return a
            }
        },
        77046: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => r
            });
            const r = function(e) {
                return function(t) {
                    return null == t ? void 0 : t[e]
                }
            }
        },
        43688: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => r
            });
            const r = function(e, t, n) {
                var r = -1,
                    o = e.length;
                t < 0 && (t = -t > o ? 0 : o + t), (n = n > o ? o : n) < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
                for (var i = Array(o); ++r < o;) i[r] = e[r + t];
                return i
            }
        },
        677013: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => u
            });
            var r = n(9757);
            const o = function(e) {
                var t = null == e ? 0 : e.length;
                return t ? e[t - 1] : void 0
            };
            var i = n(580838),
                a = n(43688);
            const s = function(e, t) {
                return t.length < 2 ? e : (0, i.default)(e, (0, a.default)(t, 0, -1))
            };
            var l = n(887844);
            const u = function(e, t) {
                return t = (0, r.default)(t, e), null == (e = s(e, t)) || delete e[(0, l.default)(o(t))]
            }
        },
        892821: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => a
            });
            var r = n(833713),
                o = n(893298),
                i = n(826554);
            const a = function(e) {
                return (0, i.default)((0, o.default)(e, void 0, r.default), e + "")
            }
        },
        106605: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => o
            });
            var r = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
            const o = function(e) {
                return r.test(e)
            }
        },
        257401: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => b
            });
            const r = (0, n(77046).default)("length");
            var o = n(106605),
                i = "[\\ud800-\\udfff]",
                a = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                s = "\\ud83c[\\udffb-\\udfff]",
                l = "[^\\ud800-\\udfff]",
                u = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                c = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                f = "(?:" + a + "|" + s + ")" + "?",
                d = "[\\ufe0e\\ufe0f]?",
                h = d + f + ("(?:\\u200d(?:" + [l, u, c].join("|") + ")" + d + f + ")*"),
                p = "(?:" + [l + a + "?", a, u, c, i].join("|") + ")",
                m = RegExp(s + "(?=" + s + ")|" + p + h, "g");
            const g = function(e) {
                for (var t = m.lastIndex = 0; m.test(e);) ++t;
                return t
            };
            const b = function(e) {
                return (0, o.default)(e) ? g(e) : r(e)
            }
        },
        833713: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => o
            });
            var r = n(407193);
            const o = function(e) {
                return (null == e ? 0 : e.length) ? (0, r.default)(e, 1) : []
            }
        },
        827147: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => a
            });
            var r = n(128177),
                o = n(854814),
                i = n(383527);
            const a = function(e) {
                return "string" == typeof e || !(0, o.default)(e) && (0, i.default)(e) && "[object String]" == (0, r.default)(e)
            }
        },
        484156: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => d
            });
            var r = n(292893),
                o = n(144315),
                i = n(677013),
                a = n(9757),
                s = n(175969),
                l = n(56736);
            const u = function(e) {
                return (0, l.default)(e) ? void 0 : e
            };
            var c = n(892821),
                f = n(847651);
            const d = (0, c.default)((function(e, t) {
                var n = {};
                if (null == e) return n;
                var l = !1;
                t = (0, r.default)(t, (function(t) {
                    return t = (0, a.default)(t, e), l || (l = t.length > 1), t
                })), (0,
                    s.default)(e, (0, f.default)(e), n), l && (n = (0, o.default)(n, 7, u));
                for (var c = t.length; c--;)(0, i.default)(n, t[c]);
                return n
            }))
        },
        895171: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => i
            });
            var r = n(745582);
            const o = function(e, t) {
                var n;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                return e = (0, r.default)(e),
                    function() {
                        return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = void 0), n
                    }
            };
            const i = function(e) {
                return o(2, e)
            }
        },
        899156: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => h
            });
            var r = n(580838),
                o = n(866934),
                i = n(9757),
                a = n(817104),
                s = n(598279),
                l = n(887844);
            const u = function(e, t, n, r) {
                if (!(0, s.default)(e)) return e;
                for (var u = -1, c = (t = (0, i.default)(t, e)).length, f = c - 1, d = e; null != d && ++u < c;) {
                    var h = (0, l.default)(t[u]),
                        p = n;
                    if (u != f) {
                        var m = d[h];
                        void 0 === (p = r ? r(m, h, d) : void 0) && (p = (0, s.default)(m) ? m : (0, a.default)(t[u + 1]) ? [] : {})
                    }(0, o.default)(d, h, p), d = d[h]
                }
                return e
            };
            const c = function(e, t, n) {
                for (var o = -1, a = t.length, s = {}; ++o < a;) {
                    var l = t[o],
                        c = (0, r.default)(e, l);
                    n(c, l) && u(s, (0, i.default)(l, e), c)
                }
                return s
            };
            var f = n(22321);
            const d = function(e, t) {
                return c(e, t, (function(t, n) {
                    return (0, f.default)(e, n)
                }))
            };
            const h = (0, n(892821).default)((function(e, t) {
                return null == e ? {} : d(e, t)
            }))
        },
        745582: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => a
            });
            var r = n(968877),
                o = 1 / 0;
            const i = function(e) {
                return e ? (e = (0, r.default)(e)) === o || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
            };
            const a = function(e) {
                var t = i(e),
                    n = t % 1;
                return t == t ? n ? t - n : t : 0
            }
        },
        155040: (e, t, n) => {
            "use strict";
            var r = n(779665).pushStreamMultiplexer,
                o = n(226722).TVXWindowEvents,
                i = n(345848).trackEvent,
                a = function() {
                    var e = "tvdesktopnotifications.",
                        t = "tabs-hidden";
                    o.on("desktop-notification-tab-visibility-request", (function() {
                        "true" === TVLocalStorage.getItem(e + t) && TVLocalStorage.setItem(e + t, document.hidden)
                    }));

                    function n(e) {
                        var t = e.split("\n");
                        return t.length > 1 && (e = t[0]), ((e = e.trim()).length > 30 || t.length > 1) && (e = e.substring(0, 30) + "..."), e
                    }

                    function a() {
                        return window.Notification.permission
                    }

                    function s(e) {
                        var t = a();
                        "granted" === t && "function" == typeof e ? e() : "default" === t && window.Notification.requestPermission((function(t) {
                            "granted" === t && "function" == typeof e && e()
                        }))
                    }
                    return window.Notification ? {
                        show: function(l, u, c, f) {
                            r.ownPushStream() && (i("Desktop Notifications", "Notification Show Attempt"), "denied" !== a() && s((function() {
                                TVLocalStorage.setItem(e + t, document.hidden), o.emit("desktop-notification-tab-visibility-request"), setTimeout((function() {
                                    "false" !== TVLocalStorage.getItem(e + t) && document.hidden ? (function(e, t, r, o) {
                                        var i = new window.Notification(e, {
                                            body: n(t),
                                            icon: r || "/static/images/desktop-notification.png"
                                        });
                                        i.onclick = function() {
                                            window.focus(), "function" == typeof o && o()
                                        }, setTimeout(i.close.bind(i), 5e3)
                                    }(l, u, c, f), i("Desktop Notifications", "Notification Show Success")) : i("Desktop Notifications", "Notification Show Tab Visible")
                                }), 100)
                            })))
                        },
                        askPermission: s
                    } : {
                        show: function() {},
                        askPermission: function() {}
                    }
                }();
            e.exports = a
        },
        359663: (e, t, n) => {
            "use strict";
            n.d(t, {
                FeatureToggleWatchedValue: () => a
            });
            var r = n(125226),
                o = n(988411),
                i = n.n(o);
            class a extends(i()) {
                constructor(e, t) {
                    super(function(e, t) {
                        return (0, r.isFeatureEnabled)(e)
                    }(e)), (0,
                        r.onFeaturesStateChanged)().subscribe(this, (t => {
                        e === t && this.setValue((0, r.isFeatureEnabled)(e))
                    }))
                }
                destroy() {
                    (0, r.onFeaturesStateChanged)().unsubscribeAll(this)
                }
            }
        },
        61005: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                DEFAULT_SOUNDS: () => A,
                availableSounds: () => w,
                alertSounds: () => F,
                play: () => P,
                stop: () => E,
                onStopped: () => T,
                isPlaying: () => N,
                enableAlertSoundsForMobile: () => I,
                enableForMobile: () => x
            });
            var r = n(777754),
                o = n(314802),
                i = n(272001),
                a = n(988411),
                s = n.n(a),
                l = n(585161),
                u = n(673503),
                c = n(795192),
                f = n(297868),
                d = n(926109),
                h = n(797300),
                p = n(549907),
                m = n(840928),
                g = n(878947),
                b = n(77433),
                _ = n(621031),
                v = n(313763),
                y = n(421422),
                C = n(522997);
            const S = (0, i.getLogger)("Lib.Sound", {
                    color: "#dea433"
                }),
                A = {
                    sound: "notification/notification",
                    alert: "alert/fired"
                },
                w = [{
                    title: r.t(null, void 0, n(792586)),
                    path: "alert/alarm_clock",
                    soundForAlerts: !0,
                    filePath: l
                }];
            w.unshift({
                path: A.sound,
                title: r.t(null, void 0, n(204329)),
                common: !0,
                filePath: v
            }, {
                title: r.t(null, void 0, n(274471)),
                path: "chat/message",
                filePath: _,
                common: !0
            }, {
                title: r.t(null, void 0, n(307769)),
                path: "chat/popup",
                filePath: y,
                common: !0
            }, {
                title: r.t(null, void 0, n(514561)),
                path: "chat/call",
                filePath: d
            }, {
                title: r.t(null, void 0, n(74210)),
                path: "chat/calling",
                filePath: f
            }, {
                title: r.t(null, void 0, n(719791)),
                path: "chat/hangup",
                filePath: b
            }, {
                title: r.t(null, void 0, n(7246)),
                path: A.alert,
                filePath: m,
                soundForAlerts: !0
            }, {
                title: r.t(null, void 0, n(829406)),
                path: "alert/3_notes_reverb",
                filePath: C,
                soundForAlerts: !0
            }), w.push({
                title: r.t(null, void 0, n(476002)),
                path: "alert/beep_beep",
                filePath: u,
                soundForAlerts: !0
            }, {
                title: r.t(null, void 0, n(115390)),
                path: "alert/calling",
                filePath: c,
                soundForAlerts: !0
            }, {
                title: r.t(null, void 0, n(114579)),
                path: "alert/chirpy",
                filePath: h,
                soundForAlerts: !0
            }, {
                title: r.t(null, void 0, n(926559)),
                path: "alert/fault",
                filePath: p,
                soundForAlerts: !0
            }, {
                title: r.t(null, void 0, n(120021)),
                path: "alert/hand_bell",
                filePath: g,
                soundForAlerts: !0
            });
            const k = {};

            function F() {
                return w.filter((e => !!e.soundForAlerts))
            }

            function P(e = A.sound, t) {
                if ((0, o.isOnMobileAppPage)("any")) return Promise.resolve();
                S.logNormal(`Sound play attempt for "${e}" duration-${t}s;`);
                return L(e).play(t)
            }

            function E(e) {
                if ((0, o.isOnMobileAppPage)("any")) return;
                let t = [];
                e ? t.push(L(e)) : t = Object.values(k), t.forEach((e => {
                    e.stop()
                }))
            }

            function T(e, t) {
                (0, o.isOnMobileAppPage)("any") || L(e).playing.subscribe((e => {
                    e || t()
                }), {
                    once: !0
                })
            }

            function N(e) {
                return !(0, o.isOnMobileAppPage)("any") && L(e).playing.value()
            }

            function I() {
                x(F().map((e => e.path)))
            }

            function x(e) {
                if ((0, o.isOnMobileAppPage)("any")) return;
                if (!e) return;
                if (!/iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(window.navigator.userAgent)) return;
                if (Array.isArray(e) || (e = [e]), 0 === (e = e.filter((e => {
                        const t = L(e);
                        return !(!t || !t.el.load || t._mobilePreloadActive) && (t._mobilePreloadActive = !0, !0)
                    }))).length) return void S.logNormal("enableForMobile no sounds passed");
                const t = () => {
                        const r = [];
                        Array.isArray(e) && e.forEach((e => {
                            const t = L(e);
                            t.el.load();
                            const n = t.play().catch((e => {
                                if ("AbortError" !== e.name) throw S.logError(`enableForMobile for "${t.el.src}" preload error: - ${e.message}`), e
                            }));
                            t.el.pause(), r.push(n)
                        })), Promise.all(r).then((() => {
                            S.logNormal("enableForMobile sounds initialized")
                        })), n.forEach((e => {
                            document.removeEventListener(e, t, !0)
                        }))
                    },
                    n = ["click", "touchend", "keydown"];
                n.forEach((e => {
                    document.addEventListener(e, t, !0)
                }))
            }
            const L = e => {
                if (e in k) return k[e];
                S.logNormal(`requested sound  ${e} not cached, building a new audio element`);
                const t = w.find((t => t.path === e));
                if (void 0 === t) throw new Error(`Cannot find sound "${e}"`);
                const n = new Audio(t.filePath),
                    r = {
                        el: n,
                        playing: new(s())(!1),
                        play: (t = 0) => r.playing.value() ? (S.logNormal("sound already playing"), Promise.reject("already playing")) : (r.playing.setValue(!0), new Promise(((n, o) => {
                            let i = t > 0;
                            const a = () => {
                                const t = function(e) {
                                    try {
                                        S.logNormal(`"${e.el.src}" triggering html5 play method, readyState - ${e.el.readyState}; muted - ${e.el.muted}; volume - ${e.el.volume}; currentTime - ${e.el.currentTime}`);
                                        let t = e.el.play();
                                        return t || (t = Promise.resolve()), t
                                    } catch (t) {
                                        return S.logError(`play method for "${e.el.src}" catch error - ${t.message}`), Promise.reject(t)
                                    }
                                }(r);
                                t.catch((t => {
                                    S.logNormal(`stop counting sound "${e}"; as playing due to an error: ${t.message}`), r.stop(), o(t)
                                }))
                            };
                            r._onEnded = () => {
                                i ? a() : (r.stop(), n())
                            }, r.el.addEventListener("ended", r._onEnded), i && setTimeout((() => {
                                S.logNormal(`"${e}" repeat timeout - ${t}s off`), i = !1
                            }), 1e3 * t), a()
                        }))),
                        stop: () => {
                            r.el.pause(), r.playing.setValue(!1), r._onEnded && r.el.removeEventListener("ended", r._onEnded)
                        }
                    };
                k[e] = r;
                return ["canplaythrough", "error"].forEach((t => {
                    n.addEventListener(t, (() => {
                        S.logNormal(`for sound "${e}", event - ${t} is fired`)
                    }), !1)
                })), S.logNormal(`canPlayType - ${n.canPlayType("audio/mp3")}`), k[e]
            };
            x(w.filter((e => !!e.common)).map((e => e.path)))
        },
        696828: (e, t, n) => {
            "use strict";
            var r = n(495046),
                o = [{
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
                i = function() {
                    var e = [{
                        pattern: "(",
                        ctor: a
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
                        ctor: f
                    }, {
                        pattern: "/",
                        ctor: d
                    }, {
                        pattern: "^",
                        ctor: h
                    }, {
                        pattern: /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
                        ctor: b
                    }, {
                        pattern: /\./,
                        ctor: y
                    }, {
                        pattern: r.enabled("charting_library_base") ? /[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF^][a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!:.&]*|'.+?'/ : /[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF][a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&]*|'.+?'/,
                        ctor: g
                    }, {
                        pattern: /'[^']*/,
                        ctor: v
                    }, {
                        pattern: /[\0-\x20\s]+/,
                        ctor: i
                    }];

                    function t(e, t) {
                        var n = function() {};
                        return n.prototype = t.prototype, e.prototype = new n, e
                    }

                    function n() {}

                    function i(e) {
                        this.value = e
                    }

                    function a() {}

                    function s() {}

                    function l() {}

                    function u() {}

                    function c() {}

                    function f() {}

                    function d() {}

                    function h() {}
                    n.prototype.toString = function() {
                            return this.value
                        }, t(i, n), t(a, n), a.prototype.value = "(", t(s, n), s.prototype.value = ")", t(l, n), t(u, l), u.prototype.value = "+", u.prototype.precedence = 0, u.prototype.commutative = !0, t(c, l),
                        c.prototype.value = "-", c.prototype.precedence = 0, c.prototype.commutative = !1, t(f, l), f.prototype.value = "*", f.prototype.precedence = 1, f.prototype.commutative = !0, t(d, l), d.prototype.value = "/", d.prototype.precedence = 1, d.prototype.commutative = !1, t(h, l), h.prototype.value = "^", h.prototype.precedence = 2, h.prototype.commutative = !1;
                    var p = /^'?(?:([A-Z0-9_]+):)?(.*?)'?$/i,
                        m = /[+\-/*]/;

                    function g(e) {
                        this.value = e
                    }

                    function b(e) {
                        this.value = e
                    }

                    function _(e) {
                        this.value = e
                    }

                    function v() {
                        g.apply(this, arguments)
                    }

                    function y() {
                        b.apply(this, arguments)
                    }
                    t(g, n), g.prototype.toString = function() {
                        if (this.hasOwnProperty("_ticker")) {
                            var e = m.test(this._ticker) ? "'" : "";
                            return e + (this._exchange ? this._exchange + ":" : "") + this._ticker + e
                        }
                        return this.value
                    }, g.prototype.parse = function() {
                        var e = p.exec(this.value);
                        e[1] && (this._exchange = e[1]), this._ticker = e[2]
                    }, g.prototype.parseAsFutures = function() {
                        this.hasOwnProperty("_ticker") || this.parse();
                        for (var e = function(e) {
                                return o.some((function(t) {
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
                        null == e ? delete this._root : (this._root = e + "", this._root && (this._ticker = this._root + (this._contract || "")))
                    }, g.prototype.contract = function(e) {
                        if (this.hasOwnProperty("_contract") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
                        null == e ? delete this._contract : (this._contract = e + "", this._root && (this._ticker = this._root + this._contract))
                    }, t(b, n), b.prototype.toString = function() {
                        return this.hasOwnProperty("_normalizedValue") ? this._normalizedValue : this.value
                    }, b.prototype.parse = function() {
                        this._normalizedValue = this.value.replace(/^0+|\.0*$/g, "").replace(/(\.\d*?)0+$/, "$1").replace(/^(\.|$)/, "0$1")
                    }, _.prototype.toString = function() {
                        return this.value
                    }, t(v, g), v.prototype.isIncomplete = !0, v.prototype.incompleteSuggest = function() {
                        if ("'" !== this.value) return String("'")
                    }, t(y, b), y.prototype.isIncomplete = !0;
                    var C = new RegExp(e.map((function(e) {
                        return "(" + ("string" == typeof e.pattern ? e.pattern.replace(/[\^$()[\]{}*+?|\\]/g, "\\$&") : e.pattern.source) + ")"
                    })).concat(".").join("|"), "g");

                    function S(t, n) {
                        var r, o = [];
                        e: for (; r = C.exec(t);) {
                            for (var a = e.length; a--;)
                                if (r[a + 1]) {
                                    if (e[a].ctor) {
                                        var s = new e[a].ctor(r[a + 1]);
                                        s._offset = r.index, o.push(s)
                                    }
                                    continue e
                                }
                            var l = new _(r[0]);
                            l._offset = r.index, o.push(l)
                        }
                        if (n && n.recover) {
                            var u;
                            for (a = o.length; a--;) {
                                var c = o[a];
                                if (c instanceof b || c instanceof g) {
                                    if (void 0 !== u) {
                                        var f = new g(""),
                                            d = o.splice(a, u - a + 1, f);
                                        f.value = d.map((function(e) {
                                            return e.value
                                        })).join("")
                                    }
                                    u = a
                                } else c instanceof i || (u = void 0)
                            }
                        }
                        return o
                    }

                    function A(e) {
                        for (var t = [], n = 0; n < e.length; n++) e[n] instanceof i || t.push(e[n]);
                        return t
                    }

                    function w(e) {
                        e = A(e);
                        for (var t, n = [], r = [], o = 0; o < e.length; o++) {
                            var i = e[o];
                            if (i instanceof l) r.length && r[r.length - 1].minPrecedence > i.precedence && (r[r.length - 1].minPrecedence = i.precedence);
                            else if (i instanceof a) r.push(t = {
                                minPrecedence: 1 / 0,
                                openBraceIndex: o
                            });
                            else if (i instanceof s) {
                                var u = e[(t = r.pop()).openBraceIndex - 1],
                                    c = e[o + 1];
                                c instanceof l && !(c.precedence <= t.minPrecedence) || !(!(u instanceof l) || u.precedence < t.minPrecedence || u.precedence === t.minPrecedence && u.commutative) || (n.unshift(t.openBraceIndex), n.push(o), r.length && r[r.length - 1].minPrecedence > t.minPrecedence && (r[r.length - 1].minPrecedence = t.minPrecedence))
                            }
                        }
                        for (o = n.length; o--;) e.splice(n[o], 1);
                        return e
                    }

                    function k(e) {
                        if ("string" != typeof e) throw new TypeError("expression must be a string");
                        return (e = S(e)).filter((function(e) {
                            return e instanceof g
                        })).map((function(e) {
                            return e.exchange()
                        })).filter((function(e) {
                            return e
                        }))
                    }

                    function F(e) {
                        return 1 !== (e = k(e)).length ? null : e[0]
                    }

                    function P(e, t) {
                        return (e = k(e)).some((function(e) {
                            return t.includes((e || "").toUpperCase())
                        }))
                    }

                    function E(e) {
                        return e.join("")
                    }
                    return {
                        tokenize: S,
                        validate: function(e) {
                            if (r.enabled("charting_library_base")) return {
                                currentState: "var"
                            };
                            for (var t = "init", n = "var", o = t, u = {
                                    warnings: [],
                                    errors: [],
                                    isEmpty: !0
                                }, c = [], f = 0; f < e.length; f++) {
                                if (!((h = e[f]) instanceof i)) {
                                    if (delete u.isEmpty, h.isIncomplete) {
                                        var d = {
                                            status: "incomplete",
                                            reason: "incomplete_token",
                                            offset: h._offset,
                                            token: h
                                        };
                                        if (h.incompleteSuggest && (d.recover = {
                                                append: h.incompleteSuggest()
                                            }), u.warnings.push(d), f !== e.length - 1) {
                                            d.status = "error";
                                            continue
                                        }
                                    }
                                    if (h instanceof g || h instanceof b) {
                                        if (o === n) {
                                            u.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: h._offset,
                                                token: h
                                            });
                                            continue
                                        }
                                        o = n
                                    } else if (h instanceof l) {
                                        if (o !== n) {
                                            u.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: h._offset,
                                                token: h
                                            });
                                            continue
                                        }
                                        o = "operator"
                                    } else if (h instanceof a) {
                                        if (o === n) {
                                            u.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: h._offset,
                                                token: h
                                            });
                                            continue
                                        }
                                        c.push(h), o = t
                                    } else if (h instanceof s) {
                                        if (o !== n) {
                                            u.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: h._offset,
                                                token: h
                                            });
                                            continue
                                        }
                                        c.pop() || u.errors.push({
                                            status: "error",
                                            reason: "unbalanced_brace",
                                            offset: h._offset,
                                            token: h,
                                            recover: {
                                                prepend: new a
                                            }
                                        }), o = n
                                    } else h instanceof _ && u.errors.push({
                                        status: "error",
                                        reason: "unparsed_entity",
                                        offset: h._offset,
                                        token: h
                                    })
                                }
                            }
                            for (u.braceBalance = c.length, o !== n && u.warnings.push({
                                    status: "incomplete"
                                }); c.length;) {
                                var h;
                                d = {
                                    status: "incomplete",
                                    reason: "unbalanced_brace",
                                    offset: (h = c.pop())._offset,
                                    token: h
                                };
                                o === n && (d.recover = {
                                    append: new s
                                }), u.warnings.push(d)
                            }
                            return u.currentState = o, 0 === u.warnings.length && delete u.warnings, 0 === u.errors.length && delete u.errors, u
                        },
                        factorOutBraces: w,
                        normalizeTokens: function(e) {
                            for (var t = 0; t < e.length; t++) e[t].parse && e[t].parse();
                            return e
                        },
                        flip: function(e) {
                            var t = function(e) {
                                for (var t, n = 0, r = 1, o = 2, u = 3, c = n, f = 0, h = 0; h < e.length; h++) {
                                    var p = e[h];
                                    if (!(p instanceof i)) switch (c) {
                                        case n:
                                            if (!(p instanceof b && 1 == +p.value)) return !1;
                                            c = r;
                                            break;
                                        case r:
                                            if (!(c === r && p instanceof d)) return !1;
                                            c = o, t = h + 1;
                                            break;
                                        case o:
                                            if (p instanceof a) c = u, f = 1;
                                            else if (p instanceof l) return !1;
                                            break;
                                        case u:
                                            p instanceof a ? f++ : p instanceof s && --f <= 0 && (c = o)
                                    }
                                }
                                return e.slice(t)
                            }(e);
                            return w(t || [new b("1"), new d, new a].concat(e).concat(new s))
                        },
                        hasBatsSymbols: function(e) {
                            return P(e, ["BATS"])
                        },
                        hasEodSymbols: function(e) {
                            return (e = F(e)) && -1 !== e.toUpperCase().indexOf("_EOD")
                        },
                        hasChxjpySymbols: function(e) {
                            return P(e, ["CHXJPY"])
                        },
                        hasFreeDelaySymbols: function(e) {
                            return P(e, pro.getProductsByType(pro.PRODUCT_TYPES.exchange).map((function(e) {
                                return e.exchange.toUpperCase() + "_DLY"
                            })))
                        },
                        getExchange: F,
                        getExchanges: k,
                        isExchange: function(e, t) {
                            return !!(e = F(e)) && e.substring(0, t.length) === t
                        },
                        SymbolToken: g,
                        IncompleteSymbolToken: v,
                        NumberToken: b,
                        BinaryOperatorToken: l,
                        OpenBraceToken: a,
                        CloseBraceToken: s,
                        ticker: function(e) {
                            return new g(e).ticker()
                        },
                        shortName: function(e) {
                            if ("string" != typeof e) throw new TypeError("expression must be a string");
                            var t = w(A(S(e)));
                            return t.forEach((function(e) {
                                e instanceof g && e.exchange(null)
                            })), E(t)
                        },
                        normalize: function(e) {
                            if ("string" != typeof e) throw new TypeError("expression must be a string");
                            return E(w(A(S(e))))
                        }
                    }
                }();
            e.exports = i
        },
        304241: (e, t, n) => {
            "use strict";
            n.d(t, {
                alertsMaintenanceTracker: () => s
            });
            var r = n(988411),
                o = n.n(r),
                i = n(125226),
                a = n(359663);
            const s = new class {
                constructor() {
                    this._state = new(o())((0, i.isFeatureEnabled)("alerts-maintenance")), this._maintenanceFeatureState = new a.FeatureToggleWatchedValue("alerts-maintenance", this._state.value()), this._autoreloadWidgetsFeatureState = new a.FeatureToggleWatchedValue("alerts-maintenance-autoreload-widgets", !1), this._unsetMaintenanceTimeoutId = null, this._maintenanceFeatureState.subscribe((e => {
                        !e && this._autoreloadWidgetsFeatureState.value() && (this._unsetMaintenanceTimeoutId = setTimeout((() => this.sync()), function() {
                            const e = 3e4,
                                t = 18e5;
                            return Math.floor(Math.random() * (t - e) + e)
                        }()))
                    })), this._autoreloadWidgetsFeatureState.subscribe((e => {
                        e || this._clearMaintenanceUnsetTimeout()
                    }))
                }
                value() {
                    return this._state.value()
                }
                subscribe(e) {
                    this._state.subscribe(e)
                }
                unsubscribe(e) {
                    this._state.unsubscribe(e)
                }
                sync() {
                    this._clearMaintenanceUnsetTimeout(), this._state.setValue((0, i.isFeatureEnabled)("alerts-maintenance"))
                }
                _clearMaintenanceUnsetTimeout() {
                    this._unsetMaintenanceTimeoutId && (clearTimeout(this._unsetMaintenanceTimeoutId), this._unsetMaintenanceTimeoutId = null)
                }
            }
        },
        240158: (e, t, n) => {
            "use strict";
            n.d(t, {
                getPriceAlertsDispatcher: () => o,
                getPriceAlertsDispatcherIfExists: () => i,
                setPriceAlertsDispatcherIfNotExists: () => a
            });
            n(659863);
            let r = null;

            function o() {
                return new Promise((e => {
                    null === r ? Promise.all([n.e(57901), n.e(58194), n.e(1327), n.e(25977), n.e(68647), n.e(98850), n.e(8837), n.e(72685), n.e(96796), n.e(21350), n.e(48158)]).then(n.bind(n, 396796)).then((t => {
                        null === r && (r = new t.AlertsDispatcher), e(r)
                    })) : e(r)
                }))
            }

            function i() {
                return r
            }

            function a(e) {
                return null === r && (r = e, !0)
            }
        },
        220412: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                    AlertCategory: () => r
                }),
                function(e) {
                    e.Price = "price", e.Screener = "screener"
                }(r || (r = {}))
        },
        903973: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                    AlertNotificationType: () => r
                }),
                function(e) {
                    e.Fired = "fired", e.FireControl = "fire_control"
                }(r || (r = {}))
        },
        938908: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                tryInitAlertsNotifications: () => H
            });
            var r = n(869403),
                o = n.n(r),
                i = n(7628),
                a = n(583912),
                s = n(226722),
                l = n(61005),
                u = n(155040),
                c = n(240158),
                f = n(50959),
                d = n(500962),
                h = n(272001);
            const p = (0, h.getLogger)("Alerts.DialogNotifier");

            function m(e, t) {
                return class {
                    constructor() {
                        this._onClose = new(o()), this._onActionSelect = new(o()), this._callbacks = {
                            onActionSelect: (e, t) => this._onActionSelect.fire(e, t),
                            onClose: () => this.close()
                        }, this.close = (e = !0) => {
                            this._root && (d.unmountComponentAtNode(this._root), delete this._root, this._onClose.fire(), e && s.TVXWindowEvents.emit(`${t}.close`))
                        }, this._onXWindowClose = () => {
                            p.logNormal(`Received TVXWindow event ${t}.close`), this.close(!1)
                        }, s.TVXWindowEvents.on(`${t}.close`, this._onXWindowClose)
                    }
                    destroy() {
                        s.TVXWindowEvents.off(`${t}.close`, this._onXWindowClose), this._onClose.destroy(), this._onActionSelect.destroy()
                    }
                    render(t) {
                        this._root || (this._root = document.createElement("div")), d.render(f.createElement(f.Suspense, {
                            fallback: null
                        }, f.createElement(e, { ...t,
                            callbacks: this._callbacks
                        })), this._root)
                    }
                    onClose() {
                        return this._onClose
                    }
                    onActionSelect() {
                        return this._onActionSelect
                    }
                }
            }
            const g = m(f.lazy((async () => ({
                    default: (await Promise.all([n.e(88230), n.e(18619), n.e(81910), n.e(86256), n.e(91901), n.e(1428), n.e(48484), n.e(62839), n.e(56652), n.e(89646), n.e(98365), n.e(51352), n.e(51516), n.e(61820), n.e(745), n.e(95499), n.e(11177)]).then(n.bind(n, 189413))).FireNotificationsDialog
                }))), "Alerts.FireNotificationsDialog"),
                b = m(f.lazy((async () => ({
                    default: (await Promise.all([n.e(88230), n.e(18619), n.e(81910), n.e(86256), n.e(91901), n.e(1428), n.e(48484), n.e(56652), n.e(98365), n.e(51352), n.e(51516), n.e(82794), n.e(745), n.e(95499), n.e(96758)]).then(n.bind(n, 228226))).FireControlNotificationsDialog
                }))), "Alerts.FireControlNotificationsDialog");
            var _ = n(950777),
                v = (n(659863), n(721890)),
                y = n(930527),
                C = n(484156),
                S = n(899156),
                A = n(7492),
                w = n(903427),
                k = n(29419),
                F = n(827147),
                P = n(257401);
            const E = function(e) {
                if (null == e) return 0;
                if ((0, k.default)(e)) return (0, F.default)(e) ? (0, P.default)(e) : e.length;
                var t = (0, w.default)(e);
                return "[object Map]" == t || "[object Set]" == t ? e.size : (0, A.default)(e).length
            };
            var T = n(988411),
                N = n.n(T);
            const I = {
                notifications: {}
            };
            var x = n(462282);
            const L = {
                notifications: {},
                restartingIds: new Set
            };
            var B = n(777754),
                M = n(696828),
                z = n.n(M),
                D = n(903973),
                O = n(220412);

            function j(e, t, n, r) {
                return e.on("add", o), t.subscribe(null, i), () => {
                    e.off("add", o), t.unsubscribe(null, i)
                };

                function o(e) {
                    for (const t of Object.values(e)) {
                        const e = r(t);
                        e && n.setNotification(e)
                    }
                }

                function i() {
                    n.setNotificationViewed()
                }
            }

            function $(e) {
                const t = e.latestFire;
                if (!t.popup && !t.soundFile) return null;
                const r = (0, i.unwrapSimpleSymbol)(t.symbol),
                    o = z().shortName(r);
                return {
                    id: `fired:price:${t.fireId}`,
                    fired: t.fireTime,
                    type: D.AlertNotificationType.Fired,
                    symbol: r,
                    desktopNotificationTitle: B.t(null, void 0, n(745726)).format({
                        shortSymbol: o
                    }),
                    dialogTitle: B.t(null, void 0, n(745726)).format({
                        shortSymbol: `<a data-symbol="${r}" class="js-symbol" href="${(0,_.getChartSymbolPageUrl)(r)}" target="_blank">${o}</span>`
                    }),
                    dialogSubTitle: t.name || "",
                    description: t.description,
                    title: o,
                    alertId: t.alertId,
                    alertCategory: O.AlertCategory.Price,
                    alertName: t.name || "",
                    eventId: t.fireId,
                    notifyWith: {
                        popup: t.popup,
                        sound: Boolean(t.soundFile)
                    },
                    soundParams: {
                        duration: t.soundDuration,
                        name: t.soundFile || l.DEFAULT_SOUNDS.alert
                    }
                }
            }

            function R(e) {
                const t = (0, i.unwrapSimpleSymbol)(e.symbol),
                    r = z().shortName(t),
                    o = new Date(6e4 * Math.round(Date.now() / 6e4));
                return {
                    id: `fire_control:price:${e.alertId}`,
                    fired: o,
                    type: D.AlertNotificationType.FireControl,
                    symbol: (0, i.unwrapSimpleSymbol)(e.symbol),
                    desktopNotificationTitle: r + B.t(null, void 0, n(362681)),
                    description: e.description,
                    title: r,
                    alertId: e.alertId,
                    alertCategory: O.AlertCategory.Price,
                    alertName: e.name || "",
                    notifyWith: {
                        popup: !0
                    }
                }
            }
            var V = n(740474);
            const W = (0, h.getLogger)("Alerts.Notifications");
            let U = null;

            function H() {
                if (U) return W.logWarn("Attempted to init alerts notifications more than once"), U;
                const e = function(e) {
                    let t = window.user.id;
                    const n = (0, V.getAlertsTokenManager)();
                    return n.invalidated.subscribe(null, r), () => n.invalidated.unsubscribe(null, r);

                    function r() {
                        window.user.id !== t && (t = window.user.id, e())
                    }
                }(t);
                return t(), () => {
                    e(), null == U || U()
                };

                function t() {
                    null == U || U(), U = window.is_authenticated ? function() {
                        const e = (0, v.getUnreadFiresBuffer)(),
                            t = (0, v.getUnreadFireControlsBuffer)();
                        e.requestOfflineEvents(), t.requestOfflineEvents();
                        const r = (0, y.getUnreadFiresCounter)();
                        r.bindUnreadFiresBuffer(e), (0, c.getPriceAlertsDispatcher)().then((e => {
                            e.alerts.on("remove", (e => {
                                d.fire([e.id])
                            }))
                        }));
                        const a = new(o()),
                            f = new(o()),
                            d = new(o()),
                            h = new g,
                            p = function(e, t, n, r, o) {
                                const i = new(N())(I);
                                return i.subscribe(d), e.on("add", a), r.on("removeNotification", c), t.onActionSelect().subscribe(null, s), t.onClose().subscribe(null, l), n.subscribe(null, f), () => {
                                    e.off("add", a), r.off("removeNotification", c), t.onActionSelect().unsubscribe(null, s), t.onClose().unsubscribe(null, l), n.unsubscribe(null, f), t.close(!1)
                                };

                                function a(e) {
                                    const t = {};
                                    for (const n of Object.values(e)) n.latestFire.popup && (t[n.latestFire.alertId] = n);
                                    if (0 === E(t)) return;
                                    const {
                                        notifications: n
                                    } = i.value();
                                    i.setValue({
                                        notifications: { ...n,
                                            ...t
                                        }
                                    })
                                }

                                function s(t, n) {
                                    const {
                                        notifications: a
                                    } = i.value();
                                    switch (e.markRead([t]), n) {
                                        case 0:
                                            o.openChart(a[t].latestFire.symbol, a[t].latestFire.crossInterval ? void 0 : a[t].latestFire.resolution);
                                            break;
                                        case 1:
                                            o.editAlert(t);
                                            break;
                                        case 2:
                                            u([t]), r.emit("removeNotification", t)
                                    }
                                }

                                function l() {
                                    const {
                                        notifications: t
                                    } = i.value(), n = Array.from(Object.keys(t), Number);
                                    e.markRead(n), i.unsubscribe(d), i.setValue(I), i.subscribe(d), n.length > 0 && o.onNotificationsRemoved(t)
                                }

                                function u(e) {
                                    const {
                                        notifications: t
                                    } = i.value(), n = (0, S.default)(t, e);
                                    E(n) > 0 && (i.setValue({
                                        notifications: (0, C.default)(t, e)
                                    }), o.onNotificationsRemoved(n))
                                }

                                function c(e) {
                                    u([Number(e)])
                                }

                                function f(e) {
                                    u(e)
                                }

                                function d() {
                                    t.render(i.value())
                                }
                            }(e, h, d, (0, s.getScopedTVXWindowEvents)("Alerts.FireDialogNotifier"), { ...q,
                                onNotificationsRemoved: e => {
                                    a.fire(e)
                                }
                            }),
                            m = new b,
                            _ = function(e, t, n, r, o) {
                                const i = new(N())(L);
                                i.subscribe(b);
                                const a = {};
                                return e.on("add", s), r.on("restartPending", h), r.on("restartSuccess", p), r.on("restartFailure", m), t.onActionSelect().subscribe(null, l), t.onClose().subscribe(null, u),
                                    n.subscribe(null, g), () => {
                                        _(), e.off("add", s), r.off("restartPending", h), r.off("restartSuccess", p), r.off("restartFailure", m), t.onActionSelect().unsubscribe(null, l), t.onClose().unsubscribe(null, u), n.unsubscribe(null, g), t.close(!1)
                                    };

                                function s(e) {
                                    const t = {};
                                    for (const n of Object.values(e)) t[n.alertId] = n;
                                    const {
                                        notifications: n,
                                        restartingIds: r
                                    } = i.value();
                                    i.setValue({
                                        restartingIds: r,
                                        notifications: { ...n,
                                            ...t
                                        }
                                    })
                                }

                                function l(n, s) {
                                    switch (e.markRead([n]), s) {
                                        case 0:
                                            o.openChart(i.value().notifications[n].symbol);
                                            break;
                                        case 2:
                                            o.editAlert(n);
                                            break;
                                        case 1:
                                            a[n] = new AbortController, (0, x.respectAbort)(a[n].signal, o.restartAlert(n)).catch(x.skipAbortError).then((() => {
                                                1 !== E(i.value().notifications) ? (f(n), r.emit("restartSuccess", n)) : t.close()
                                            })).catch((() => {
                                                d(n), r.emit("restartFailure", n)
                                            })).finally((() => {
                                                delete a[n]
                                            })), c(n), r.emit("restartPending", n)
                                    }
                                }

                                function u() {
                                    const t = i.value().notifications,
                                        n = Array.from(Object.keys(t), Number);
                                    e.markRead(n), _(), i.unsubscribe(b), i.setValue(L), i.subscribe(b), n.length > 0 && o.onNotificationsRemoved(t)
                                }

                                function c(e) {
                                    const {
                                        notifications: t,
                                        restartingIds: n
                                    } = i.value();
                                    i.setValue({
                                        notifications: t,
                                        restartingIds: new Set(n).add(e)
                                    })
                                }

                                function f(e) {
                                    const {
                                        notifications: t,
                                        restartingIds: n
                                    } = i.value(), r = new Set(n);
                                    r.delete(e), i.setValue({
                                        notifications: (0, C.default)(t, e),
                                        restartingIds: r
                                    })
                                }

                                function d(e) {
                                    const {
                                        notifications: t,
                                        restartingIds: n
                                    } = i.value(), r = new Set(n);
                                    r.delete(e), i.setValue({
                                        notifications: t,
                                        restartingIds: r
                                    })
                                }

                                function h(e) {
                                    c(Number(e))
                                }

                                function p(e) {
                                    f(Number(e))
                                }

                                function m(e) {
                                    d(Number(e))
                                }

                                function g(e) {
                                    var t;
                                    const {
                                        notifications: n,
                                        restartingIds: r
                                    } = i.value(), s = new Set(r);
                                    for (const n of e) null === (t = a[n]) || void 0 === t || t.abort(), s.delete(n);
                                    const l = (0, S.default)(n, e);
                                    E(l) > 0 && (i.setValue({
                                        notifications: (0, C.default)(n, e),
                                        restartingIds: s
                                    }), o.onNotificationsRemoved(l))
                                }

                                function b() {
                                    t.render(i.value())
                                }

                                function _() {
                                    for (const e of Object.values(a)) e.abort()
                                }
                            }(t, m, d, (0, s.getScopedTVXWindowEvents)("Alerts.FireControlDialogNotifier"), { ...q,
                                onNotificationsRemoved: () => f.fire()
                            });
                        let A, w, k;
                        window.TVD ? (F = e, P = a, T = window.TVD, A = j(F, P, T, $), w = function(e, t, n) {
                            return j(e, t, n, R)
                        }(t, f, window.TVD)) : (k = function(e, t, n) {
                            return t.enableAlertSoundsForMobile(), e.on("add", r), n.subscribe(null, o), () => {
                                e.off("add", r), n.unsubscribe(null, o)
                            };

                            function r(e) {
                                for (const n of Object.values(e))
                                    if (n.latestFire.soundFile) {
                                        const e = n.latestFire.soundFile;
                                        t.isPlaying(e) && t.stop(e), t.play(e, n.latestFire.soundDuration)
                                    }
                            }

                            function o(e) {
                                const n = new Set(Array.from(Object.values(e), (e => e.latestFire.soundFile)).filter(Boolean));
                                for (const e of n) t.stop(e)
                            }
                        }(e, l, a), A = function(e, t) {
                            return e.on("add", r), () => e.off("add", r);

                            function r(e) {
                                for (const r of Object.values(e)) {
                                    const e = r.latestFire;
                                    if (e.popup || e.soundFile) {
                                        const r = z().shortName((0, i.unwrapSimpleSymbol)(e.symbol));
                                        t.show(B.t(null, void 0, n(745726)).format({
                                            shortSymbol: r
                                        }), e.name || e.description)
                                    }
                                }
                            }
                        }(e, u), w = function(e, t) {
                            return e.on("add", r), () => e.off("add", r);

                            function r(e) {
                                for (const r of Object.values(e)) {
                                    const e = z().shortName((0, i.unwrapSimpleSymbol)(r.symbol));
                                    t.show(B.t(null, void 0, n(277659)).format({
                                        shortSymbol: e
                                    }), r.name || r.description)
                                }
                            }
                        }(t, u));
                        var F, P, T;
                        return () => {
                            null == k || k(), A(), w(), p(), _(), r.unbindUnreadFiresBuffer(), h.destroy(), m.destroy()
                        }
                    }() : null
                }
            }
            const q = {
                openChart: (e, t) => {
                    const n = (0, i.unwrapSimpleSymbol)(e);
                    window.TradingView.onChartPage ? (a.linking.symbol.setValue(n, !0), t && a.linking.interval.setValue(t)) : window.open((0, _.getChartSymbolPageUrl)(n, t), "_blank", "noopener")
                },
                editAlert: async e => {
                    (await (0, c.getPriceAlertsDispatcher)()).openEditDialog(e, {
                        actionSource: "alert_notifier_edit"
                    })
                },
                restartAlert: async e => {
                    const t = await (0, c.getPriceAlertsDispatcher)();
                    await t.restartAlert(e, {
                        actionSource: "alert_notifier_restart"
                    })
                }
            }
        },
        721890: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                getUnreadFireControlsBuffer: () => S,
                getUnreadFiresBuffer: () => C
            });
            var r = n(895171),
                o = n(226722),
                i = (n(659863), n(145003)),
                a = n(212702),
                s = n(7628),
                l = n(685459),
                u = n.n(l),
                c = n(484156),
                f = n(729584),
                d = n(272001),
                h = n(462282),
                p = n(125226);
            const m = (0, d.getLogger)("Alerts.ClearOfflineEventsMerger");
            class g {
                constructor(e, t, n) {
                    this._mergedIds = new Set, this._abortController = null, this._delay = e, this._apiCallback = t, this._offlineEventName = n
                }
                mergeRequest(e) {
                    if (e.forEach((e => this._mergedIds.add(e))), this._abortController) return void m.logDebug(`Merge request for ${this._offlineEventName} has already been scheduled`);
                    this._abortController = new AbortController;
                    const t = this._abortController.signal,
                        n = async () => {
                            var e;
                            await (e = this._delay, new Promise((t => {
                                setTimeout(t, e)
                            }))), t.aborted || await this._apiCallback({
                                alert_id: Array.from(this._mergedIds)
                            })
                        };
                    let r;
                    (0, p.isFeatureEnabled)("alerts-restrict-offline-clear-requests") && navigator.locks ? (m.logNormal(`Trying to merge ${this._offlineEventName} clear requests using Web Locks API`), r = navigator.locks.request("alerts-offline-clear-requests-lock", {
                        ifAvailable: !0
                    }, (e => {
                        if (e) return (0, h.respectAbort)(t, n());
                        m.logDebug(`Lock to merge ${this._offlineEventName} clear requests has already been acquired`)
                    }))) : (m.logNormal(`Trying to merge ${this._offlineEventName} clear requests without Web Locks API`), r = (0, h.respectAbort)(t, n())), r.catch((e => {
                        (0, h.isAbortError)(e) || m.logError(`Failed to clear ${this._offlineEventName} for alert ids ${this._mergedIds}: ${e}`)
                    })).finally((() => {
                        this._abortController = null, this._mergedIds.clear()
                    }))
                }
                undoRequest() {
                    var e;
                    null === (e = this._abortController) || void 0 === e || e.abort(), this._abortController = null, this._mergedIds.clear()
                }
            }
            const b = (0, d.getLogger)("Alerts.UnreadBuffers");
            class _ extends(u()) {
                constructor(e, t, n) {
                    super(), this._abortController = new AbortController, this._notifications = {}, this._restApi = e, this._pushApi = t, this._classNameForLogger = n, this._unsubscribePushApi = this._subscribePushApi(this._pushApi), this._clearOfflineEventsMerger = new g(1e3, this._getClearOfflineEventsCallback(this._restApi), this._classNameForLogger)
                }
                async requestOfflineEvents() {
                    return (0, h.respectAbort)(this._abortController.signal, this._restApiGetOfflineEvents(this._restApi).then((e => {
                        this._processOfflineEvents(e, this._notifications)
                    })).catch((e => {
                        throw b.logError(`Getting offline ${this._classNameForLogger} failed`), e
                    })))
                }
                destroy() {
                    (0,
                        f.assertNoEmitterListeners)(this, ["add", "remove"]), this._abortController.abort(), this._clearOfflineEventsMerger.undoRequest(), this._unsubscribePushApi()
                }
                markRead(e) {
                    const t = new Set;
                    for (const n of e) this._notifications[n] && t.add(n);
                    if (t.size) {
                        const e = Array.from(t);
                        this._notifications = (0, c.default)(this._notifications, e), this.emit("remove", e), this._clearOfflineEventsMerger.mergeRequest(e)
                    }
                }
                value() {
                    return this._notifications
                }
                _addNotifications(e) {
                    this._notifications = { ...this._notifications,
                        ...e
                    }, this.emit("add", e)
                }
            }

            function v(e) {
                const t = e.latest_fire;
                return {
                    firesCount: e.fires_count,
                    latestFire: {
                        fireId: t.fire_id,
                        alertId: t.alert_id,
                        resolution: t.resolution,
                        description: t.message,
                        soundFile: t.sound_file,
                        soundDuration: t.sound_duration,
                        popup: t.popup,
                        crossInterval: t.cross_interval,
                        name: t.name,
                        symbol: (0, s.decodeExtendedSymbol)(t.symbol),
                        fireTime: new Date(t.fire_time),
                        barTime: new Date(t.bar_time)
                    }
                }
            }

            function y(e) {
                return {
                    alertId: e.alert_id,
                    symbol: (0, s.decodeExtendedSymbol)(e.symbol),
                    description: e.message,
                    name: e.name
                }
            }
            const C = A(class extends _ {
                    constructor(e, t) {
                        super(e, t, "fires")
                    }
                    _getClearOfflineEventsCallback(e) {
                        return e.clearOfflineFires.bind(e)
                    }
                    _subscribePushApi(e) {
                        const t = e => {
                            var t, n;
                            const r = null !== (n = null === (t = this.value()[e.alert_id]) || void 0 === t ? void 0 : t.firesCount) && void 0 !== n ? n : 0,
                                o = {
                                    [e.alert_id]: v({
                                        fires_count: r + 1,
                                        latest_fire: e
                                    })
                                };
                            this._addNotifications(o)
                        };
                        return e.on("alert_fired", t), () => {
                            e.off("alert_fired", t)
                        }
                    }
                    _restApiGetOfflineEvents(e) {
                        return e.getOfflineFires()
                    }
                    _processOfflineEvents(e, t) {
                        const n = {};
                        for (const r of e) {
                            const e = r.latest_fire.alert_id;
                            t[e] ? n[e] = {
                                firesCount: t[e].firesCount + r.fires_count,
                                latestFire: t[e].latestFire
                            } : n[e] = v(r)
                        }
                        Object.keys(n).length && this._addNotifications(n)
                    }
                }, "alerts-unread-fires-buffer"),
                S = A(class extends _ {
                    constructor(e, t) {
                        super(e, t, "fire controls")
                    }
                    _getClearOfflineEventsCallback(e) {
                        return e.clearOfflineFireControls.bind(e)
                    }
                    _subscribePushApi(e) {
                        const t = e => {
                            const t = {};
                            for (const n of e) n.active || "fire_control" !== n.last_stop_reason || (t[n.alert_id] = y({
                                alert_id: n.alert_id,
                                symbol: n.symbol,
                                name: n.name,
                                message: n.message
                            }));
                            Object.keys(t).length > 0 && this._addNotifications(t)
                        };
                        return e.on("alerts_updated", t), () => {
                            e.off("alerts_updated", t)
                        }
                    }
                    _restApiGetOfflineEvents(e) {
                        return e.getOfflineFireControls()
                    }
                    _processOfflineEvents(e, t) {
                        const n = {};
                        for (const r of e) t[r.alert_id] || (n[r.alert_id] = y(r));
                        Object.keys(n).length > 0 && this._addNotifications(n)
                    }
                }, "alerts-unread-fire-controls-buffer");

            function A(e, t) {
                return (0, r.default)((() => {
                    const n = new e((0, i.getAlertsRestApi)(), (0, a.getAlertsPushApi)());
                    return function(e, t, n) {
                        const r = `${n}.remove`;

                        function o(e) {
                            t.emit(r, JSON.stringify(e))
                        }

                        function i(t) {
                            e.markRead(JSON.parse(t))
                        }
                        e.on("remove", o), t.on(r, i)
                    }(n, o.TVXWindowEvents, t), n
                }))
            }
        },
        930527: (e, t, n) => {
            "use strict";
            n.d(t, {
                getUnreadFiresCounter: () => s
            });
            var r = n(895171),
                o = (n(659863), n(988411)),
                i = n.n(o);
            class a {
                constructor() {
                    this._counter = new(i())(0), this._syncCounter = () => {
                        if (!this._unreadBuffer) return void this._counter.setValue(0);
                        let e = 0;
                        const t = this._unreadBuffer.value();
                        for (const n of Object.values(t)) e += n.firesCount;
                        this._counter.setValue(e)
                    }
                }
                bindUnreadFiresBuffer(e) {
                    this._unreadBuffer = e, this._unreadBuffer.on("add", this._syncCounter), this._unreadBuffer.on("remove", this._syncCounter), this._syncCounter()
                }
                unbindUnreadFiresBuffer() {
                    this._unreadBuffer && (this._unreadBuffer.off("add", this._syncCounter), this._unreadBuffer.off("remove", this._syncCounter), this._unreadBuffer = null, this._syncCounter())
                }
                value() {
                    return this._counter.value()
                }
                destroy() {
                    var e, t, n, r;
                    null === (t = (e = this._counter).assertNoSubscriptions) || void 0 === t || t.call(e), this._counter.unsubscribe(), null === (n = this._unreadBuffer) || void 0 === n || n.off("add", this._syncCounter), null === (r = this._unreadBuffer) || void 0 === r || r.off("remove", this._syncCounter)
                }
                subscribe(e) {
                    this._counter.subscribe(e)
                }
                unsubscribe(e) {
                    this._counter.unsubscribe(e)
                }
            }
            const s = (0, r.default)((() => new a))
        },
        950777: (e, t, n) => {
            "use strict";

            function r(e, t) {
                const n = new URL("chart", window.location.origin);
                return n.searchParams.append("symbol", e), t && n.searchParams.append("interval", t), n.toString()
            }
            n.d(t, {
                getChartSymbolPageUrl: () => r
            })
        },
        522997: (e, t, n) => {
            "use strict";
            e.exports = n.p + "3_notes_reverb.dc905347b1eda03c1db2.mp3"
        },
        585161: (e, t, n) => {
            "use strict";
            e.exports = n.p + "alarm_clock.ba219c712b5dce956b08.mp3"
        },
        795192: (e, t, n) => {
            "use strict";
            e.exports = n.p + "alert_calling.205c6b5ccb0a10decbc1.mp3"
        },
        673503: (e, t, n) => {
            "use strict";
            e.exports = n.p + "beep_beep.cddbb5d281594d0b4b8d.mp3"
        },
        797300: (e, t, n) => {
            "use strict";
            e.exports = n.p + "chirpy.bcc136ad76d4496efe29.mp3"
        },
        549907: (e, t, n) => {
            "use strict";
            e.exports = n.p + "fault.ca1f77478c28a528be67.mp3"
        },
        840928: (e, t, n) => {
            "use strict";
            e.exports = n.p + "fired.aaee45a643068df3a94b.mp3"
        },
        878947: (e, t, n) => {
            "use strict";
            e.exports = n.p + "hand_bell.bd1c77bbd21a64aa4fe8.mp3"
        },
        926109: (e, t, n) => {
            "use strict";
            e.exports = n.p + "call.6d2888370f40fbb8cd8d.mp3"
        },
        297868: (e, t, n) => {
            "use strict";
            e.exports = n.p + "chat_calling.067c844a001001872f78.mp3"
        },
        77433: (e, t, n) => {
            "use strict";
            e.exports = n.p + "hangup.0a486c8d934145d68c11.mp3"
        },
        621031: (e, t, n) => {
            "use strict";
            e.exports = n.p + "message.c44275a460737d0d50ff.mp3"
        },
        421422: (e, t, n) => {
            "use strict";
            e.exports = n.p + "popup.184287feaec7efccbb27.mp3"
        },
        313763: (e, t, n) => {
            "use strict";
            e.exports = n.p + "notification.01a81746825289ed9423.mp3"
        },
        829406: e => {
            e.exports = {
                ar: ["3 ملاحظات تابعة"],
                ca_ES: ["Reverberació de 3 notes"],
                cs: "3 Notes Reverb",
                de: ["3 Noten Hall"],
                el: "3 Notes Reverb",
                en: "3 Notes Reverb",
                es: ["Reverberación de 3 notas"],
                fa: "3 Notes Reverb",
                fr: ["Réverbération de 3 Notes"],
                he_IL: ["3 הערות Reverb"],
                hu_HU: ["3 Megjegyzés Reverb"],
                id_ID: ["3 Catatan Reverb"],
                it: ["Riverbero 3-note"],
                ja: ["リヴァーブ"],
                ko: ["3음에코"],
                ms_MY: ["3 Nota Berkumandang"],
                nl_NL: "3 Notes Reverb",
                pl: "3 Notes Reverb",
                pt: ["Reverb notas 3"],
                ro: "3 Notes Reverb",
                ru: ["3 ноты"],
                sv: "3 Notes Reverb",
                th: ["3 ข้อจดจำ"],
                tr: ["3 Nota Yankısı"],
                vi: ["3 Ghi chú Nhắc lại"],
                zh: ["3音混响"],
                zh_TW: ["3音混響"]
            }
        },
        115390: e => {
            e.exports = {
                ar: ["اتصال"],
                ca_ES: ["Trucada en curs"],
                cs: "Calling",
                de: "Calling",
                el: "Calling",
                en: "Calling",
                es: ["Llamada en curso"],
                fa: "Calling",
                fr: "Calling",
                he_IL: ["מתקשר"],
                hu_HU: ["Hívás"],
                id_ID: ["Memanggil"],
                it: ["Richiamo"],
                ja: ["コール"],
                ko: ["띵동"],
                ms_MY: ["Memanggil"],
                nl_NL: "Calling",
                pl: ["Wywoływać"],
                pt: ["Ligando"],
                ro: "Calling",
                ru: ["Звонок"],
                sv: "Calling",
                th: ["กำลังเรียก"],
                tr: ["Çağrı"],
                vi: ["Đang gọi"],
                zh: ["呼叫"],
                zh_TW: ["呼叫"]
            }
        },
        514561: e => {
            e.exports = {
                ar: ["مكالمة للتحدث"],
                ca_ES: ["Trucada de xat"],
                cs: "Chat Call",
                de: ["Chat Anruf"],
                el: "Chat Call",
                en: "Chat Call",
                es: ["Llamada de chat"],
                fa: "Chat Call",
                fr: ["Appel via chat"],
                he_IL: ["שיחת צ'ט"],
                hu_HU: ["Chat Hívás"],
                id_ID: ["Panggilan Obrolan"],
                it: ["Chiamata chat"],
                ja: ["チャットコール"],
                ko: ["채팅 요청"],
                ms_MY: ["Panggilan Perbualan"],
                nl_NL: "Chat Call",
                pl: ["Czat Telefon"],
                pt: ["Ligação da conversa"],
                ro: "Chat Call",
                ru: ["Вызов чата"],
                sv: ["Chattsamtal"],
                th: ["เรียกแชท"],
                tr: ["Sohbet Çağrısı"],
                vi: ["Gọi Hội Thoại"],
                zh: ["聊天呼叫"],
                zh_TW: ["聊天呼叫"]
            }
        },
        74210: e => {
            e.exports = {
                ar: ["اتصال للتحدث"],
                ca_ES: ["Trucada de xat en curs"],
                cs: "Chat Calling",
                de: ["Chat Ruf"],
                el: "Chat Calling",
                en: "Chat Calling",
                es: ["Llamada de chat en curso"],
                fa: "Chat Calling",
                fr: ["Appel chat"],
                he_IL: ["צ'ט מתקשר"],
                hu_HU: ["Chat Hívás"],
                id_ID: ["Memanggil Obrolan"],
                it: ["Chiamando chat"],
                ja: ["チャットコール中"],
                ko: ["채팅 요청중"],
                ms_MY: ["Panggilan Perbualan"],
                nl_NL: "Chat Calling",
                pl: ["Czat Dzwoni"],
                pt: ["Conversa ligando"],
                ro: "Chat Calling",
                ru: ["Чат вызывает"],
                sv: ["Inkommande Chattsamtal"],
                th: ["กำลังเรียกแชท"],
                tr: ["Sohbet Çağırma"],
                vi: ["Đang gọi hội thoại"],
                zh: ["聊天呼叫"],
                zh_TW: ["聊天呼叫"]
            }
        },
        719791: e => {
            e.exports = {
                ar: ["إنهاء الحديث"],
                ca_ES: ["Penjar trucada de xat"],
                cs: "Chat Hangup",
                de: ["Chat aufgehängt"],
                el: "Chat Hangup",
                en: "Chat Hangup",
                es: ["Colgar llamada de chat"],
                fa: "Chat Hangup",
                fr: ["Terminer le chat"],
                he_IL: ["נתק צ'ט"],
                hu_HU: ["Chat Bezárása"],
                id_ID: ["Menutup Obrolan"],
                it: ["Chiudi chat"],
                ja: ["チャット切断"],
                ko: ["채팅 끊기"],
                ms_MY: ["Perbualan Tergantung"],
                nl_NL: "Chat Hangup",
                pl: ["Czat przerwany"],
                pt: ["A conversa desligou"],
                ro: "Chat Hangup",
                ru: ["Завершение чата"],
                sv: ["Lägg på Chattsamtal"],
                th: ["วางสายการแชท"],
                tr: ["Sohbeti Kapatma"],
                vi: ["Dừng cuộc Trò chuyện"],
                zh: ["聊天结束"],
                zh_TW: ["聊天結束"]
            }
        },
        274471: e => {
            e.exports = {
                ar: ["رسالة تحدث"],
                ca_ES: ["Missatge de xat"],
                cs: "Chat Message",
                de: ["Chatnachricht"],
                el: "Chat Message",
                en: "Chat Message",
                es: ["Mensaje de chat"],
                fa: "Chat Message",
                fr: ["Message chat"],
                he_IL: ["הודעת צ'ט"],
                hu_HU: ["Chat Üzenet"],
                id_ID: ["Pesan Obrolan"],
                it: ["Messaggio chat"],
                ja: ["チャットメッセージ"],
                ko: ["채팅메시지"],
                ms_MY: ["Mesej Perbualan"],
                nl_NL: "Chat Message",
                pl: ["Wiadomość czatu"],
                pt: ["Mensagem da conversa"],
                ro: "Chat Message",
                ru: ["Сообщение в чате"],
                sv: ["Chattmeddelande"],
                th: ["ข้อควมแชท"],
                tr: ["Sohbet Mesajı"],
                vi: ["Tin nhắn Trò chuyện"],
                zh: ["聊天信息"],
                zh_TW: ["聊天訊息"]
            }
        },
        307769: e => {
            e.exports = {
                ar: ["ظهور نافذة التحدث"],
                ca_ES: ["Quadre emergent de xat"],
                cs: "Chat Popup",
                de: ["Chat Pop-up"],
                el: "Chat Popup",
                en: "Chat Popup",
                es: ["Cuadro emergente de chat"],
                fa: "Chat Popup",
                fr: ["Popup du chat"],
                he_IL: ["חלונית הצ'ט"],
                hu_HU: ["Chat Felugró"],
                id_ID: ["Popup Obrolan"],
                it: ["Popup chat"],
                ja: ["チャットのポップアップ"],
                ko: ["채팅 팝업"],
                ms_MY: ["Tetingkap Timbul Sembang"],
                nl_NL: "Chat Popup",
                pl: "Chat Popup",
                pt: ["Popup da conversa"],
                ro: "Chat Popup",
                ru: ["Всплывающее окно чата"],
                sv: ["Chatt Popup"],
                th: ["แชทป็อพอัพ"],
                tr: ["Sohbet Penceresi"],
                vi: ["Popup Hội thoại"],
                zh: ["聊天弹窗"],
                zh_TW: ["聊天彈出視窗"]
            }
        },
        114579: e => {
            e.exports = {
                ar: ["مرح"],
                ca_ES: ["Alegre"],
                cs: "Chirpy",
                de: ["Zwitschern"],
                el: "Chirpy",
                en: "Chirpy",
                es: ["Alegre"],
                fa: "Chirpy",
                fr: ["Joyeux"],
                he_IL: "Chirpy",
                hu_HU: ["Jókedvű"],
                id_ID: "Chirpy",
                it: ["Gioioso"],
                ja: ["さえずり"],
                ko: ["짹"],
                ms_MY: ["Riang"],
                nl_NL: "Chirpy",
                pl: ["Żwawy"],
                pt: ["Animado"],
                ro: "Chirpy",
                ru: ["Весёлый"],
                sv: "Chirpy",
                th: ["ร่าเริง"],
                tr: ["Cıvıl cıvıl"],
                vi: ["Vui vẻ"],
                zh: ["轻快"],
                zh_TW: ["輕快"]
            }
        },
        792586: e => {
            e.exports = {
                ar: ["ساعة المنبه"],
                ca_ES: ["Rellotge d'alarma"],
                cs: "Alarm Clock",
                de: ["Wecker"],
                el: "Alarm Clock",
                en: "Alarm Clock",
                es: ["Reloj de alarma"],
                fa: "Alarm Clock",
                fr: ["Alarme"],
                he_IL: ["שעון מעורר"],
                hu_HU: ["Ébresztőóra"],
                id_ID: ["Jam Weker"],
                it: ["Sveglia"],
                ja: ["クロック"],
                ko: ["시계알람"],
                ms_MY: ["Jam penggera"],
                nl_NL: "Alarm Clock",
                pl: ["Alert"],
                pt: ["Alarme"],
                ro: "Alarm Clock",
                ru: ["Будильник"],
                sv: ["Alarmklocka"],
                th: ["นาฬิกาปลุก"],
                tr: ["Saat Alarmı"],
                vi: ["Đồng hồ Báo thức"],
                zh: ["闹铃"],
                zh_TW: ["鬧鐘"]
            }
        },
        745726: e => {
            e.exports = {
                ar: ["إنشاء تنبيه عن‎{shortSymbol}‎"],
                ca_ES: "Alert on {shortSymbol}",
                cs: "Alert on {shortSymbol}",
                de: ["Alarm für {shortSymbol}"],
                el: "Alert on {shortSymbol}",
                en: "Alert on {shortSymbol}",
                es: ["Alerta en {shortSymbol}"],
                fa: "Alert on {shortSymbol}",
                fr: ["Alerte pour {shortSymbol}"],
                he_IL: ["התראה על {shortSymbol}"],
                hu_HU: "Alert on {shortSymbol}",
                id_ID: ["Peringatan pada {shortSymbol}"],
                it: ["Alert su {shortSymbol}"],
                ja: ["{shortSymbol}のアラート"],
                ko: ["{shortSymbol} 얼러트"],
                ms_MY: ["Makluman untuk {shortSymbol}"],
                nl_NL: "Alert on {shortSymbol}",
                pl: ["Alarm dla  {shortSymbol}"],
                pt: ["Alerta em {shortSymbol}"],
                ro: "Alert on {shortSymbol}",
                ru: ["Оповещение для {shortSymbol}"],
                sv: ["Alarm på {shortSymbol}"],
                th: ["แจ้งเตือนบน{shortSymbol}"],
                tr: ["{shortSymbol} Alarmı"],
                vi: ["Cảnh báo về {shortSymbol}"],
                zh: ["{shortSymbol}警报"],
                zh_TW: ["{shortSymbol}快訊"]
            }
        },
        277659: e => {
            e.exports = {
                ar: ["يتم تشغيل التنبيه على {shortSymbol} كثيرًا"],
                ca_ES: "Alert on {shortSymbol} is triggered too often",
                cs: "Alert on {shortSymbol} is triggered too often",
                de: ["Alarm für {shortSymbol} wird zu oft ausgelöst"],
                el: "Alert on {shortSymbol} is triggered too often",
                en: "Alert on {shortSymbol} is triggered too often",
                es: ["La alerta de {shortSymbol} se activa con demasiada frecuencia"],
                fa: "Alert on {shortSymbol} is triggered too often",
                fr: ["L'alerte sur {shortSymbol} est déclenchée trop souvent"],
                he_IL: ["התראה על {shortSymbol} מופעלת לעתים קרובות מדי"],
                hu_HU: "Alert on {shortSymbol} is triggered too often",
                id_ID: ["Peringatan pada {shortSymbol} terpicu terlalu sering"],
                it: ["L'alert su {shortSymbol} si attiva troppo spesso"],
                ja: ["{shortSymbol}のアラートがあまりにも頻繁にトリガーされています。"],
                ko: ["{shortSymbol} 얼러트가 너무 자주 트리거됩니다"],
                ms_MY: ["Pemberitahuan pada {shortSymbol} adalah terlalu berulang kali"],
                nl_NL: "Alert on {shortSymbol} is triggered too often",
                pl: ["Alert dla {shortSymbol} jest uruchamiany zbyt często"],
                pt: ["O alerta no {shortSymbol} é acionado com muita frequência"],
                ro: "Alert on {shortSymbol} is triggered too often",
                ru: ["Оповещение для {shortSymbol} срабатывает слишком часто"],
                sv: ["Alarm för {shortSymbol} triggas för ofta"],
                th: ["แจ้งเตือน {shortSymbol} ถูกสั่งการบ่อยเกินไป"],
                tr: ["{shortSymbol} 'da alarm çok sık tetiklendi"],
                vi: ["Cảnh báo về {shortSymbol} được kích hoạt quá thường xuyên"],
                zh: ["触发{shortSymbol}上的警报太频繁"],
                zh_TW: ["觸發{shortSymbol}上的快訊太頻繁"]
            }
        },
        476002: e => {
            e.exports = {
                ar: ["بيب-بيب"],
                ca_ES: ["Bip-bip"],
                cs: "Beep-beep",
                de: ["Beep-Beep"],
                el: "Beep-beep",
                en: "Beep-beep",
                es: "Beep-beep",
                fa: "Beep-beep",
                fr: ["Bip-bip"],
                he_IL: ["ביפ-ביפ"],
                hu_HU: "Beep-beep",
                id_ID: "Beep-beep",
                it: "Beep-beep",
                ja: ["ブーブー"],
                ko: ["삐빅"],
                ms_MY: ["Bip-bip"],
                nl_NL: "Beep-beep",
                pl: ["Sygnał dźwiękowy"],
                pt: ["Bip-bip"],
                ro: "Beep-beep",
                ru: ["Гудок"],
                sv: "Beep-beep",
                th: ["ปี้บ-ปี้บ"],
                tr: ["Bip-bip"],
                vi: ["Tiếng Bíp Bíp"],
                zh: ["哔哔"],
                zh_TW: ["嗶嗶"]
            }
        },
        204329: e => {
            e.exports = {
                ar: ["افتراضي"],
                ca_ES: ["Predeterminat"],
                cs: ["Standardní"],
                de: ["Standard"],
                el: ["Προεπιλογή"],
                en: "Default",
                es: ["Predeterminado"],
                fa: ["پیش‌فرض"],
                fr: ["Par Défaut"],
                he_IL: ["ברירת מחדל"],
                hu_HU: ["Alapértelmezett"],
                id_ID: ["Bawaan"],
                it: ["Predefinito"],
                ja: ["デフォルト"],
                ko: ["기본설정"],
                ms_MY: ["Lalai"],
                nl_NL: ["Standaard"],
                pl: ["Domyślnie"],
                pt: ["Padrão"],
                ro: "Default",
                ru: ["Не задано"],
                sv: ["Standard"],
                th: ["ค่าเริ่มต้น"],
                tr: ["Varsayılan"],
                vi: ["Mặc định"],
                zh: ["系统预设"],
                zh_TW: ["系統預設"]
            }
        },
        926559: e => {
            e.exports = {
                ar: ["خطأ"],
                ca_ES: ["Error"],
                cs: "Fault",
                de: ["Fehler"],
                el: "Fault",
                en: "Fault",
                es: ["Fallo"],
                fa: "Fault",
                fr: ["Faute"],
                he_IL: ["טעות"],
                hu_HU: ["Hiba"],
                id_ID: ["Kesalahan"],
                it: ["Errore"],
                ja: ["フォルト"],
                ko: ["폴트"],
                ms_MY: ["Kesalahan"],
                nl_NL: "Fault",
                pl: ["Błąd"],
                pt: ["Falha"],
                ro: "Fault",
                ru: ["Ошибка"],
                sv: ["Fel"],
                th: ["ผิด"],
                tr: ["Hata"],
                vi: ["Lỗi"],
                zh: ["故障"],
                zh_TW: ["故障"]
            }
        },
        120021: e => {
            e.exports = {
                ar: ["نموذج الجرس"],
                ca_ES: ["Campaneta"],
                cs: "Hand Bell",
                de: ["Handglocke"],
                el: "Hand Bell",
                en: "Hand Bell",
                es: ["Campanilla"],
                fa: "Hand Bell",
                fr: ["Cloche"],
                he_IL: "Hand Bell",
                hu_HU: ["Csengő"],
                id_ID: ["Bel Tangan"],
                it: ["Campanello"],
                ja: ["ハンドベル"],
                ko: ["손종"],
                ms_MY: ["Loceng Tangan"],
                nl_NL: "Hand Bell",
                pl: "Hand Bell",
                pt: ["Sino de mão"],
                ro: "Hand Bell",
                ru: ["Колокольчик"],
                sv: "Hand Bell",
                th: ["กระดิ่งมือ"],
                tr: ["El Zili"],
                vi: ["Chuông tay"],
                zh: ["手铃"],
                zh_TW: ["手鈴"]
            }
        },
        362681: e => {
            e.exports = {
                ar: ["تم تشغيل التنبيه كثيرًا"],
                ca_ES: "The alert is triggered too often",
                cs: "The alert is triggered too often",
                de: ["Der Alarm wird zu oft ausgelöst"],
                el: "The alert is triggered too often",
                en: "The alert is triggered too often",
                es: ["La alerta se activa con demasiada frecuencia"],
                fa: "The alert is triggered too often",
                fr: ["L'alerte se déclenche trop souvent!"],
                he_IL: ["ההתראה מופעלת לעתים קרובות מדי!"],
                hu_HU: "The alert is triggered too often",
                id_ID: ["Peringatannya terpicu terlalu sering"],
                it: ["L'alert viene attivato troppo spesso"],
                ja: ["アラートがあまりにも頻繁にトリガーされています"],
                ko: ["이 얼러특가 너무 자주 트리거되고 있습니다"],
                ms_MY: ["Pemberitahuan terlalu kerap dicetuskan"],
                nl_NL: "The alert is triggered too often",
                pl: ["Alert aktywuje się zbyt często"],
                pt: ["O alerta foi acionado com muita frequência"],
                ro: "The alert is triggered too often",
                ru: ["Оповещение срабатывает слишком часто"],
                sv: ["Alarmet är triggad för ofta"],
                th: ["การแจ้งเตือนถูกเตือนบ่อยเกินไป"],
                tr: ["Alarm çok sık tetiklendi"],
                vi: ["Cảnh báo được kích hoạt quá nhiều lần"],
                zh: ["这个警报触发过于频繁"],
                zh_TW: ["這個快訊觸發過於頻繁"]
            }
        },
        7246: e => {
            e.exports = {
                ar: ["رفيع"],
                ca_ES: ["Fi"],
                cs: "Thin",
                de: ["Fein"],
                el: "Thin",
                en: "Thin",
                es: ["Fino"],
                fa: "Thin",
                fr: ["Mince"],
                he_IL: "Thin",
                hu_HU: ["Vékony"],
                id_ID: ["Tipis"],
                it: ["Debole"],
                ja: ["ピー"],
                ko: ["띵"],
                ms_MY: ["Kurus"],
                nl_NL: "Thin",
                pl: "Thin",
                pt: ["Fino"],
                ro: "Thin",
                ru: ["Высокий"],
                sv: ["Tunn"],
                th: ["บาง"],
                tr: ["İnce"],
                vi: ["Nhỏ"],
                zh: ["单音"],
                zh_TW: ["單音"]
            }
        }
    }
]);
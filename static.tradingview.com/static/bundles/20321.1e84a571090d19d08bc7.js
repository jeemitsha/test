(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [20321, 73580], {
        502807: t => {
            t.exports = {}
        },
        70860: t => {
            t.exports = {}
        },
        54120: t => {
            t.exports = {}
        },
        398514: t => {
            t.exports = {}
        },
        428902: t => {
            t.exports = {}
        },
        393339: t => {
            t.exports = {}
        },
        473775: t => {
            t.exports = {
                "like-highlight-animation": "like-highlight-animation-p6K8Ut9z"
            }
        },
        171347: t => {
            t.exports = {
                userNameHintList: "userNameHintList-qZLn4RWz"
            }
        },
        667638: t => {
            t.exports = {
                defaultBanner: "defaultBanner-cvr5CoS7",
                mindsBanner: "mindsBanner-cvr5CoS7",
                closeIcon: "closeIcon-cvr5CoS7",
                icon: "icon-cvr5CoS7",
                text: "text-cvr5CoS7",
                button: "button-cvr5CoS7",
                buttonHover: "buttonHover-cvr5CoS7"
            }
        },
        543272: t => {
            t.exports = {}
        },
        931954: t => {
            t.exports = {}
        },
        504637: (t, e, i) => {
            "use strict";
            i.d(e, {
                template: () => o
            });
            var s = i(634527);
            const o = '<div data-id="{{chartId}}" class="tv-widget-chart-like-button apply-common-tooltip {{typeClass}}" title="{{titleTooltip}}"><span class="tv-widget-chart-like-button__icon-place">' + s + '</span><span class="js-likes-counter"></span></div>'
        },
        33070: (t, e, i) => {
            "use strict";
            i.d(e, {
                WidgetSource: () => s,
                WidgetBanner: () => _
            });
            var s, o = i(50959),
                n = i(497754),
                a = i.n(n),
                r = i(83436),
                h = i(201465),
                d = i(897782),
                l = i(49437),
                c = i(776734),
                u = i(777754),
                p = i(663346),
                m = i.n(p),
                g = i(667638);

            function _(t) {
                const {
                    text: e,
                    icon: n,
                    buttonText: c,
                    storageKey: p,
                    source: _,
                    placement: f,
                    bridge: b,
                    onActionClick: y,
                    widgetIsVisible: w
                } = t, [C, M] = (0, o.useState)((() => null === l.TVLocalStorage.getItem(p))), S = (0, o.useCallback)((() => {
                    const t = null == b ? void 0 : b.visible.value();
                    C && t && x()
                }), [C]);
                (0, o.useEffect)((() => {
                    (C && f === s.Streams || w) && x(), null == b || b.visible.subscribe(S)
                }), [w]);
                const $ = a()(g.defaultBanner, {
                    [g.mindsBanner]: _ === s.Minds
                });
                return o.createElement(o.Fragment, null, C && o.createElement("div", {
                    className: $
                }, o.createElement(d.NavButton, {
                    icon: m(),
                    size: "xsmall",
                    className: g.closeIcon,
                    "aria-label": u.t(null, {
                        context: "input"
                    }, i(309633)),
                    onClick: function() {
                        l.TVLocalStorage.setItem(p, "0"), M(!1)
                    }
                }), o.createElement(r.Icon, {
                    icon: n,
                    className: g.icon
                }), o.createElement("p", {
                    className: g.text
                }, e), o.createElement(h.RoundButton, {
                    size: "medium",
                    variant: "quiet-primary",
                    className: a()(g.button, g.buttonHover),
                    onClick: () => {
                        y && y(), v("click", p.toLowerCase(), f)
                    }
                }, c)));

                function x() {
                    v("show", p.toLowerCase(), f)
                }
            }
            async function v(t, e, i) {
                var s;
                const o = window.is_authenticated ? null !== (s = window.user.pro_plan) && void 0 !== s ? s : "free" : "visitor",
                    n = await (0, c.getTracker)();
                n && n.trackToastDialog(e, t, e, i, o)
            }! function(t) {
                t.Streams = "streams", t.Minds = "minds", t.Chats = "chats"
            }(s || (s = {}))
        },
        155040: (t, e, i) => {
            "use strict";
            var s = i(779665).pushStreamMultiplexer,
                o = i(226722).TVXWindowEvents,
                n = i(345848).trackEvent,
                a = function() {
                    var t = "tvdesktopnotifications.",
                        e = "tabs-hidden";
                    o.on("desktop-notification-tab-visibility-request", (function() {
                        "true" === TVLocalStorage.getItem(t + e) && TVLocalStorage.setItem(t + e, document.hidden)
                    }));

                    function i(t) {
                        var e = t.split("\n");
                        return e.length > 1 && (t = e[0]), ((t = t.trim()).length > 30 || e.length > 1) && (t = t.substring(0, 30) + "..."), t
                    }

                    function a() {
                        return window.Notification.permission
                    }

                    function r(t) {
                        var e = a();
                        "granted" === e && "function" == typeof t ? t() : "default" === e && window.Notification.requestPermission((function(e) {
                            "granted" === e && "function" == typeof t && t()
                        }))
                    }
                    return window.Notification ? {
                        show: function(h, d, l, c) {
                            s.ownPushStream() && (n("Desktop Notifications", "Notification Show Attempt"), "denied" !== a() && r((function() {
                                TVLocalStorage.setItem(t + e, document.hidden), o.emit("desktop-notification-tab-visibility-request"), setTimeout((function() {
                                    "false" !== TVLocalStorage.getItem(t + e) && document.hidden ? (function(t, e, s, o) {
                                        var n = new window.Notification(t, {
                                            body: i(e),
                                            icon: s || "/static/images/desktop-notification.png"
                                        });
                                        n.onclick = function() {
                                            window.focus(), "function" == typeof o && o()
                                        }, setTimeout(n.close.bind(n), 5e3)
                                    }(h, d, l, c), n("Desktop Notifications", "Notification Show Success")) : n("Desktop Notifications", "Notification Show Tab Visible")
                                }), 100)
                            })))
                        },
                        askPermission: r
                    } : {
                        show: function() {},
                        askPermission: function() {}
                    }
                }();
            t.exports = a
        },
        61005: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                DEFAULT_SOUNDS: () => M,
                availableSounds: () => S,
                alertSounds: () => x,
                play: () => T,
                stop: () => R,
                onStopped: () => k,
                isPlaying: () => B,
                enableAlertSoundsForMobile: () => A,
                enableForMobile: () => I
            });
            var s = i(777754),
                o = i(314802),
                n = i(272001),
                a = i(988411),
                r = i.n(a),
                h = i(585161),
                d = i(673503),
                l = i(795192),
                c = i(297868),
                u = i(926109),
                p = i(797300),
                m = i(549907),
                g = i(840928),
                _ = i(878947),
                v = i(77433),
                f = i(621031),
                b = i(313763),
                y = i(421422),
                w = i(522997);
            const C = (0, n.getLogger)("Lib.Sound", {
                    color: "#dea433"
                }),
                M = {
                    sound: "notification/notification",
                    alert: "alert/fired"
                },
                S = [{
                    title: s.t(null, void 0, i(792586)),
                    path: "alert/alarm_clock",
                    soundForAlerts: !0,
                    filePath: h
                }];
            S.unshift({
                path: M.sound,
                title: s.t(null, void 0, i(204329)),
                common: !0,
                filePath: b
            }, {
                title: s.t(null, void 0, i(274471)),
                path: "chat/message",
                filePath: f,
                common: !0
            }, {
                title: s.t(null, void 0, i(307769)),
                path: "chat/popup",
                filePath: y,
                common: !0
            }, {
                title: s.t(null, void 0, i(514561)),
                path: "chat/call",
                filePath: u
            }, {
                title: s.t(null, void 0, i(74210)),
                path: "chat/calling",
                filePath: c
            }, {
                title: s.t(null, void 0, i(719791)),
                path: "chat/hangup",
                filePath: v
            }, {
                title: s.t(null, void 0, i(7246)),
                path: M.alert,
                filePath: g,
                soundForAlerts: !0
            }, {
                title: s.t(null, void 0, i(829406)),
                path: "alert/3_notes_reverb",
                filePath: w,
                soundForAlerts: !0
            }), S.push({
                title: s.t(null, void 0, i(476002)),
                path: "alert/beep_beep",
                filePath: d,
                soundForAlerts: !0
            }, {
                title: s.t(null, void 0, i(115390)),
                path: "alert/calling",
                filePath: l,
                soundForAlerts: !0
            }, {
                title: s.t(null, void 0, i(114579)),
                path: "alert/chirpy",
                filePath: p,
                soundForAlerts: !0
            }, {
                title: s.t(null, void 0, i(926559)),
                path: "alert/fault",
                filePath: m,
                soundForAlerts: !0
            }, {
                title: s.t(null, void 0, i(120021)),
                path: "alert/hand_bell",
                filePath: _,
                soundForAlerts: !0
            });
            const $ = {};

            function x() {
                return S.filter((t => !!t.soundForAlerts))
            }

            function T(t = M.sound, e) {
                if ((0, o.isOnMobileAppPage)("any")) return Promise.resolve();
                C.logNormal(`Sound play attempt for "${t}" duration-${e}s;`);
                return E(t).play(e)
            }

            function R(t) {
                if ((0, o.isOnMobileAppPage)("any")) return;
                let e = [];
                t ? e.push(E(t)) : e = Object.values($), e.forEach((t => {
                    t.stop()
                }))
            }

            function k(t, e) {
                (0, o.isOnMobileAppPage)("any") || E(t).playing.subscribe((t => {
                    t || e()
                }), {
                    once: !0
                })
            }

            function B(t) {
                return !(0,
                    o.isOnMobileAppPage)("any") && E(t).playing.value()
            }

            function A() {
                I(x().map((t => t.path)))
            }

            function I(t) {
                if ((0, o.isOnMobileAppPage)("any")) return;
                if (!t) return;
                if (!/iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(window.navigator.userAgent)) return;
                if (Array.isArray(t) || (t = [t]), 0 === (t = t.filter((t => {
                        const e = E(t);
                        return !(!e || !e.el.load || e._mobilePreloadActive) && (e._mobilePreloadActive = !0, !0)
                    }))).length) return void C.logNormal("enableForMobile no sounds passed");
                const e = () => {
                        const s = [];
                        Array.isArray(t) && t.forEach((t => {
                            const e = E(t);
                            e.el.load();
                            const i = e.play().catch((t => {
                                if ("AbortError" !== t.name) throw C.logError(`enableForMobile for "${e.el.src}" preload error: - ${t.message}`), t
                            }));
                            e.el.pause(), s.push(i)
                        })), Promise.all(s).then((() => {
                            C.logNormal("enableForMobile sounds initialized")
                        })), i.forEach((t => {
                            document.removeEventListener(t, e, !0)
                        }))
                    },
                    i = ["click", "touchend", "keydown"];
                i.forEach((t => {
                    document.addEventListener(t, e, !0)
                }))
            }
            const E = t => {
                if (t in $) return $[t];
                C.logNormal(`requested sound  ${t} not cached, building a new audio element`);
                const e = S.find((e => e.path === t));
                if (void 0 === e) throw new Error(`Cannot find sound "${t}"`);
                const i = new Audio(e.filePath),
                    s = {
                        el: i,
                        playing: new(r())(!1),
                        play: (e = 0) => s.playing.value() ? (C.logNormal("sound already playing"), Promise.reject("already playing")) : (s.playing.setValue(!0), new Promise(((i, o) => {
                            let n = e > 0;
                            const a = () => {
                                const e = function(t) {
                                    try {
                                        C.logNormal(`"${t.el.src}" triggering html5 play method, readyState - ${t.el.readyState}; muted - ${t.el.muted}; volume - ${t.el.volume}; currentTime - ${t.el.currentTime}`);
                                        let e = t.el.play();
                                        return e || (e = Promise.resolve()), e
                                    } catch (e) {
                                        return C.logError(`play method for "${t.el.src}" catch error - ${e.message}`), Promise.reject(e)
                                    }
                                }(s);
                                e.catch((e => {
                                    C.logNormal(`stop counting sound "${t}"; as playing due to an error: ${e.message}`), s.stop(), o(e)
                                }))
                            };
                            s._onEnded = () => {
                                n ? a() : (s.stop(), i())
                            }, s.el.addEventListener("ended", s._onEnded), n && setTimeout((() => {
                                C.logNormal(`"${t}" repeat timeout - ${e}s off`), n = !1
                            }), 1e3 * e), a()
                        }))),
                        stop: () => {
                            s.el.pause(), s.playing.setValue(!1), s._onEnded && s.el.removeEventListener("ended", s._onEnded)
                        }
                    };
                $[t] = s;
                return ["canplaythrough", "error"].forEach((e => {
                    i.addEventListener(e, (() => {
                        C.logNormal(`for sound "${t}", event - ${e} is fired`)
                    }), !1)
                })), C.logNormal(`canPlayType - ${i.canPlayType("audio/mp3")}`), $[t]
            };
            I(S.filter((t => !!t.common)).map((t => t.path)))
        },
        903974: (t, e, i) => {
            "use strict";
            i.d(e, {
                renderBadgeAccountWithoutFeaturedBroker: () => a,
                getBadgeAccountNameWithoutFeaturedBroker: () => r
            });
            var s = i(970704),
                o = i(461495),
                n = i(527800);

            function a(t, e) {
                const {
                    badges: i,
                    size: s,
                    getTitle: o,
                    getLink: a
                } = e, h = r(i);
                h && (0, n.renderBadgeAccount)(t, {
                    name: h,
                    title: o && o(i),
                    href: a && a(h),
                    size: s
                })
            }

            function r(t) {
                const e = t.filter((t => !(0, s.isFeaturedBroker)(t.name)));
                return (0, o.getBadgeAccountName)(e)
            }
        },
        296633: (t, e, i) => {
            "use strict";
            i.d(e, {
                convertToBadgeAccountProps: () => h
            });
            i(984919);
            var s = i(777754),
                o = i(781014),
                n = i(919490);
            const a = s.t(null, void 0, i(150522)),
                r = s.t(null, void 0, i(619449));

            function h(t) {
                if (Array.isArray(t.badges)) return t.badges;
                const e = [];
                return t.is_pine_wizard && e.push({
                    name: "pine_wizard",
                    verbose_name: r
                }), t.is_featured && e.push({
                    name: o.BadgeBrokerNames.BrokerExtraFeatured,
                    verbose_name: ""
                }), t.broker_plan && e.push({
                    name: `broker:${t.broker_plan}`,
                    verbose_name: ""
                }), t.is_moderator && !t.hide_mod_badge && e.push({
                    name: "moderator",
                    verbose_name: a
                }), t.is_pro && t.pro_plan && e.push({
                    name: `pro:${t.pro_plan}`,
                    verbose_name: (0, n.getPlanName)(t.pro_plan)
                }), e
            }
        },
        973580: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                TVAction: () => o,
                TVActionAsync: () => n,
                TVLoader: () => a
            });
            var s = i(310399);
            class o extends s.Action {
                constructor(t, e) {
                    super({ ...t,
                        actionId: "TVActionId"
                    }, e)
                }
                getState() {
                    return { ...super.getState(),
                        jsxLabel: this._options.jsxLabel
                    }
                }
            }
            class n extends s.ActionAsync {
                constructor(t) {
                    super("TVActionId", t)
                }
            }
            class a extends o {
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
        76040: (t, e, i) => {
            "use strict";
            var s = i(823127),
                o = i(791325).ESC,
                n = i(777491).guid,
                a = i(778785).mobiletouch,
                r = i(829725).getRootOverlapManager;
            i(428902);
            var h = function(t, e, d) {
                var l, c, u = ".popup-menu";
                t = s(t), (d = d || {}).activeClass = d.activeClass || "", l = (d.event || "click") + u, d.hideEvent && (c = d.hideEvent + u);
                var p = function() {},
                    m = p,
                    g = {},
                    _ = function(l, u, _) {
                        var v = n(),
                            f = l.target.ownerDocument,
                            b = f.defaultView,
                            y = r(f),
                            w = u || e;
                        if ("function" == typeof w && (w = w()), s(this).hasClass("open") || s(this).hasClass("active")) return l.preventDefault(), m(), void(E = g.scrollTop);

                        function C(e) {
                            var i = s(e.target).parents().andSelf();
                            i.is($) || i.is(t) || i.is(".charts-popup-tab-headers, .charts-popup-itemheader") || m()
                        }

                        function M(t) {
                            if (g.preventFirstProcessClick) g.preventFirstProcessClick = !1;
                            else {
                                var e = s(t.target).parents().andSelf();
                                e.is(".charts-popup-tab-headers, .charts-popup-itemheader") || d.notCloseOnButtons && e.is(".icon-delete") || m()
                            }
                        }

                        function S(t) {
                            t.keyCode === o && m()
                        }
                        m = function() {
                            g.scrollTop = $.scrollTop(), $.remove(), y.removeWindow(v), t.removeClass("active open " + d.activeClass), t.data("popup-menu", null), s(f).off("click", M), s(f).off("mousedown", C), a && s(f).off("touchstart.chartgui", C), s(f).off("selectstart..popup-menu"), f.removeEventListener("keydown", S, !1), m = p, d.onRemove && d.onRemove()
                        }, t.addClass("active open " + d.activeClass);
                        var $ = s('<div class="charts-popup-list">');
                        d.addClass && $.addClass(d.addClass), d.zIndex && $.css("z-index", d.zIndex);
                        var x = $;

                        function T(e, o, n) {
                            if (e instanceof h.TabGroup) {
                                if (!e.tabs || !e.tabs.length) return;
                                if (1 === e.tabs.length && !e.tabs[0].title) return void s.each(e.tabs[0].items, (function() {
                                    T(this, void 0, n)
                                }));
                                var a = s('<div class="charts-popup-tab-group"></div>').appendTo(n),
                                    r = s('<div class="charts-popup-tab-headers"></div>').appendTo(a),
                                    l = null;
                                s.each(e.tabs || [], (function(t, i) {
                                    if (i.items && i.items.length) {
                                        var o = s('<div class="charts-popup-tab"></div>').hide().appendTo(a);
                                        s.each(i.items, (function() {
                                            T(this, void 0, o)
                                        }));
                                        var n = s('<span class="charts-popup-tab-header">').append(s('<a href="javascript://" class="charts-popup-tab-header-label">').text(i.name)).appendTo(r);
                                        n.on("click", (function(t) {
                                            n.is(".active") || (r.find(".charts-popup-tab-header.active").removeClass("active"), n.addClass("active"), a.find(".charts-popup-tab").hide(), o.show(),
                                                t && t.preventDefault(), "function" == typeof e.onChange && e.onChange.call(e, i.name))
                                        })), l && !i.active || (l = n, r.find(".charts-popup-tab-header.active").removeClass("active"), n.addClass("active"), a.find(".charts-popup-tab").hide(), o.show())
                                    }
                                }))
                            } else if (e instanceof h.Group) {
                                var c = s('<div class="charts-popup-group"></div>').appendTo(n);
                                if (e.title) {
                                    var u = s('<div class="charts-popup-itemheader"></div>').text(e.title).prepend(s('<span class="charts-popup-itemheader-icon"></span>'));
                                    e.collapsible && (c.addClass("charts-popup-group-collapsible"), c.toggleClass("collapsed", e.collapsed), u.on("click", (function() {
                                        c.toggleClass("collapsed"), "function" == typeof e.onChange && e.onChange(c.hasClass("collapsed")), $.height() === parseInt($.css("max-height")) ? $.addClass("popup-menu-scroll-y") : $.height() < parseInt($.css("max-height")) && $.removeClass("popup-menu-scroll-y")
                                    }))), c.append(u)
                                }
                                s.each(e.items, (function(t) {
                                    T(this, 1, c)
                                }))
                            } else if (e instanceof h.Header) n.append(s('<div class="charts-popup-itemheader"></div>').text(e.title));
                            else if (e.separator) {
                                var p = s('<span class="separator"></span>');
                                n.append(p)
                            } else {
                                var m;
                                p = s('<a class="item">');
                                if (e.url && p.attr("href", e.url), e.target && p.attr("target", e.target), o || p.addClass("first"), "function" == typeof e.active ? e.active(e) && p.addClass("active") : e.active && p.addClass("active"), e.addClass && p.addClass(e.addClass), e.addData && p.data(e.addData), e.disabled && p.addClass("disabled"), "function" == typeof e.action) {
                                    var g = e.action,
                                        _ = function(t) {
                                            var i = s(t.target).parents().andSelf();
                                            i.is(w) || (g.apply(p, arguments), !e.url && t && "function" == typeof t.preventDefault && t.preventDefault())
                                        };
                                    d.upAction ? p.bind("mouseup", _) : p.bind("click", _)
                                }
                                if (e.date) m = s('<span class="title"></span>').appendTo(p), s('<span class="date"></span>').text(e.date || "").appendTo(p);
                                else if (e.icon && !d.svg) {
                                    var v = s('<span class="icon"></span>').appendTo(p);
                                    v.css("background-image", e.icon.image || ""), e.icon.offset && v.css("background-position", "string" == typeof e.icon.offset ? e.icon.offset : e.icon.offset.x + "px " + e.icon.offset.y + "px"), m = s('<span class="title"></span>').appendTo(p)
                                } else !0 === d.svg && e.svg ? (d.wrapIcon ? p.append(s('<span class="icon-wrap">').addClass(e.iconClass).append(e.svg)) : p.append(e.svg), m = s('<span class="title"></span>').appendTo(p)) : e.iconClass ? (p.append(s('<span class="icon"></span>').addClass(e.iconClass)), m = s('<span class="title"></span>').appendTo(p)) : m = s('<span class="title-expanded"></span>').appendTo(p);
                                e.html ? m.html(e.html) : m.text(TradingView.clean(e.title, !0) || "");
                                var f = s('<span class="shortcut"></span>').appendTo(p);
                                if (e.shortcut && f.text(e.shortcut.keys), "function" == typeof e.deleteAction) {
                                    var b = e.deleteAction,
                                        y = e.deleteAction.title || i(777754).t(null, void 0, i(614319)),
                                        w = s('<span class="icon-delete">');
                                    w.html(i(608636)), w.attr("title", y), w.on("click", (function(t) {
                                        b.apply(p, arguments), t.preventDefault()
                                    })), p.append(w)
                                }
                                if (e.externalLink) {
                                    var C = s('<span class="icon-external">');
                                    C.html(i(78620)), p.append(C)
                                }
                                if (e.buttons instanceof Array && e.buttons.length && e.buttons.forEach((function(t) {
                                        t.el instanceof s || (t.el = s(t.el)), t.el.appendTo(p),
                                            t.handler && t.el.on("click", (function(e) {
                                                t.handler.apply(p, arguments)
                                            }))
                                    })), void 0 !== e.counter)
                                    if ("function" == typeof e.counter) {
                                        s('<span class="counter"></span>').html(e.counter()).appendTo(p)
                                    } else {
                                        var M = e.counterBlue ? "blue" : "";
                                        s('<span class="counter"></span>').text(e.counter + "").addClass(M).appendTo(p)
                                    }
                                e.name && p.attr("data-name", e.name), n.append(p), t.data("popup-menu", n)
                            }
                        }
                        d.listInner && (x = s('<div class="list-inner">').appendTo(x)), d.listTable && (x = s('<div class="list-table">').appendTo(x)), s.each(w, (function(t) {
                            T(this, t, x)
                        })), c || (g.preventFirstProcessClick = !0), s(f).on("click", M), s(f).on("mousedown", C), f.addEventListener("keydown", S, !1), a && s(f).on("touchstart.chartgui", C), d.upAction && s(f).on("selectstart.popup-menu", (function() {
                            return !1
                        })), $.appendTo(y.ensureWindow(v));
                        var R = f.documentElement.clientWidth,
                            k = f.documentElement.clientHeight,
                            B = t.outerWidth(),
                            A = t.outerHeight(),
                            I = t.offset(),
                            E = s(b).scrollTop() || 0;
                        I.top -= E, I.top = Math.round(I.top), I.left = Math.round(I.left);
                        var W = $.outerWidth(),
                            L = $.outerHeight(),
                            D = void 0 !== d.viewportSpacing ? d.viewportSpacing : 10,
                            P = d.popupSpacing ? ~~d.popupSpacing : 1,
                            z = d.popupDrift ? ~~d.popupDrift : 0,
                            H = L - $.height(),
                            N = "down";
                        d.direction && (N = "function" == typeof d.direction ? d.direction() : d.direction);
                        var V = !!d.reverse;
                        if ("down" === N) {
                            var F = k - I.top - A - P - D - H,
                                O = I.top - P - D - H;
                            F < Math.max(L || 0, 100) && O > F && (N = "up")
                        } else if ("right" === N) {
                            var j = R - I.left - B - P - D - H,
                                U = I.left - P - D - H;
                            j < Math.max(W || 0, 100) && U > j && (N = "left")
                        }
                        switch (N) {
                            case "down":
                            case "up":
                                "down" === N ? $.css("top", I.top + A + P + "px") : $.css("bottom", k - I.top + P + "px").css("top", "auto"), V ? $.css("left", Math.max(I.left + z + B - W, D) + "px").css("right", "auto") : $.css("left", I.left + z + "px").css("right", "auto");
                                break;
                            case "right":
                            case "left":
                                P = Math.max(P, 4), "right" === N ? $.css("left", Math.floor(I.left + B + P) + "px").css("right", "auto") : $.css("left", Math.floor(Math.max(I.left - W - P, D)) + "px").css("right", "auto"), V ? $.css("top", Math.floor(Math.max(I.top + z + A - L, D)) + "px") : $.css("top", Math.floor(I.top + z) + "px")
                        }
                        $.show();
                        var X = I.top;
                        if ("up" === N || {
                                left: 1,
                                right: 1
                            }[N] && V ? "up" !== N ? X += A : X -= A + P + H + D : X = k - X - A - 2 * P - H, $.height() > X && $.addClass("popup-menu-scroll-y"), $.css("max-height", X + "px"), d.careRightBorder) {
                            var G = R + s(b).scrollLeft();
                            parseInt($.css("left")) + $.width() + D > G && $.css("left", G - $.width() - D + "px").css("right", "auto")
                        }
                        d.careBottomBorder && parseInt($.css("top")) + $.height() + D > k + E && $.css("top", k - $.height() - D + E + "px");
                        var K = $.offset();
                        $.css({
                            position: "fixed",
                            left: K.left - s(f).scrollLeft(),
                            right: "auto"
                        }), $[0].scrollHeight > $.height() && $.addClass("popup-with-scroll"), l && l.preventDefault()
                    };
                l && t.bind(l, _), c && t.bind(c, (function() {
                    m()
                })), d.runOpened && _()
            };
            h.TabGroup = function t(e) {
                if (!(this instanceof t)) return new t(e);
                e = e || {}, this.tabs = [], "function" == typeof e.onChange && (this.onChange = e.onChange)
            }, h.TabGroup.prototype.appendTab = function(t, e, i) {
                if (null == t ? t = "" : t += "", e || (e = []), i || (i = {}), !Array.isArray(e)) throw new TypeError("items must be an array");
                return this.tabs.push({
                    name: t,
                    items: e,
                    active: !!i.active
                }), e
            }, h.Header = function t(e) {
                if (!(this instanceof t)) return new t(e);
                this.title = e
            }, h.Group = function t(e) {
                if (!(this instanceof t)) return new t(e);
                e = e || {}, this.items = [], this.title = null == e.title ? "" : e.title + "", this.collapsible = !!e.collapsible, this.collapsed = !!e.collapsed, "function" == typeof e.onChange && (this.onChange = e.onChange)
            }, h.Group.prototype.push = function() {
                this.items.push.apply(this.items, arguments)
            }, e.bindPopupMenu = h
        },
        955310: (t, e, i) => {
            "use strict";
            i.d(e, {
                ChatMessageTypeCustomizer: () => s
            });
            class s {
                constructor(t, e) {
                    this._types = t, this._onChangeCb = e
                }
                add(t) {
                    this._types = Object.assign(this._types, t), this._onChangeCb()
                }
                remove(t) {
                    delete this._types[t], this._onChangeCb()
                }
                getTypeNames() {
                    return Object.keys(this._types)
                }
                getHandler(t) {
                    return this._types[t].handler
                }
                onMessage(t) {
                    var e;
                    const i = null === (e = this._types[t.type]) || void 0 === e ? void 0 : e.onMessage;
                    i && i(t)
                }
                getHandlers(t) {
                    const e = {};
                    return Object.keys(this._types).forEach((i => {
                        e[i] = this.getHandler(i) || t
                    })), e
                }
                onCreateMessage(t, e) {
                    const {
                        onCreateMessage: i
                    } = this._types[e.type];
                    i && i(t, e)
                }
                isTypeExists(t) {
                    return Boolean(this._types[t])
                }
            }
        },
        511497: (t, e, i) => {
            "use strict";
            var s = i(823127),
                o = i(213398),
                n = i(298297);
            i(786575), i(965426), i(230148), i(70860), i(543272), i(475805);
            var a = i(171347),
                r = i(633202).default,
                h = i(779923).showWarning,
                d = i(233313).getUserProfilePath,
                l = i(161088),
                c = i(265570).getUsernameHintList,
                u = i(265570).getUserChatSuggestListHandler,
                p = i(265570).destroyUsernameHintList,
                m = i(152033),
                g = i(500521).pushChartPage,
                _ = i(310399).Separator,
                v = i(973580).TVAction,
                f = i(263221).ContextMenuManager,
                b = i(809062).takeChartSnapshot,
                y = i(61005),
                w = i(103537),
                C = i(698065),
                M = i(251135),
                S = M.showBanUserDialog,
                $ = M.showUnbanUserDialog,
                x = i(401493).getViolations,
                T = i(187084).openPMDialog,
                R = i(517598).showReportModal,
                k = i(663989).SidebarCustomScroll,
                B = i(76040).bindPopupMenu,
                A = i(660512).emoji,
                I = i(218333).showNoticeDialog,
                E = i(779923).showConfirm,
                W = i(983772);
            const {
                isLatin: L
            } = i(205937);
            var D = i(941285).Spinner,
                P = i(345848).trackEvent,
                z = i(94683).trackChatEvent,
                {
                    trackSocialNetworkEvent: H,
                    FeatureId: N,
                    DialogAction: V,
                    errorCode: F,
                    createExtendedSolution: O
                } = i(46277),
                j = i(488427),
                U = i(728811),
                X = i(733647),
                G = i(168895).parseBBCode,
                K = i(186521).buildUtmQueryStringFromUrlParams,
                q = i(504637).template,
                Q = i(779647).lazyFancybox;
            i(404561);
            var J = i(768038).detectAutoDirection,
                Z = i(296633).convertToBadgeAccountProps,
                Y = i(180184).BadgeSize,
                tt = i(903974).renderBadgeAccountWithoutFeaturedBroker,
                et = i(461495).getBadgeAccountTitle,
                it = i(712797).getBadgeAccountLink,
                st = i(955310).ChatMessageTypeCustomizer,
                ot = i(713984),
                nt = i(535799).htmlEscape,
                at = i(620031).validateUrlsInText,
                rt = i(470316).hashFromEvent,
                ht = i(470316).Modifiers,
                dt = i(791325),
                lt = i(778785).mobiletouch,
                ct = i(777754).t(null, {
                    context: "like_button"
                }, i(288711));

            function ut(t) {
                var e = function() {
                    window.user._chatInputs || (window.user._chatInputs = {})
                };
                e(), loginStateChange.subscribe(this, e), this._bridge = t;
                var i = t.$body;
                this._model = null;
                var s = this._bridge.visible.value();
                this.isPrivate() ? this._model = W.makePrivateModel() : this._bridge.live && this._bridge.rooms ? this._model = W.makeLiveSeparateModel(this._bridge.rooms) : (this._model = W.makePublicModel("en" === window.language), "en" !== window.language && (s = !0)),
                    this._model.messageReceived().subscribe(this, this._onMessageWrapper), this._model.messageDeleted().subscribe(this, this._onMessageDeleted), this._model.roomChanged().subscribe(this, this._onRoomChanged), this._model.setActive(s), this._isHistoryEnded = !1, this._markNewMessagesAsUnread = !1, this._invisibleMessagesNumber = 0, this._inputDisabled = !1, this.MESSAGES_CONCATENATION_TIMEOUT = 12e4, this.MAX_MESSAGES = 100, this.MAX_HIGHLIGHTED_MESSAGES = 10, this.USERLINK_POPUP_TIMEOUT = 1e3, this.META_VERSION = "0.2", this._init_history_loading = !0, this._init_history_loaded = !1, this._onBridgeVisibleChange = null, this._onSymbolChanged = null, this._onIntervalChanged = null, this._onResize = null, this._onMaximized = null, this._standalone = !t || !!t.standalone, this._embedded = !t || !!t.embedded, this._noAutoFocus = !!t.noAutoFocus, this.utm = K(!1), this.isPrivate() || (this._updateMessageBatches(), this.updateLikesHandlers(), this.canHandleLikes = !0), this._hintListElement = null, this.prepareLayout(i), this.toggleSnaphotPreview(TVSettings.getBool("chat.show_snapshot_preview", !0));
                var o = null;
                this._standalone && t.activeRoom ? o = t.activeRoom : t && t.properties && (o = (t.properties.value() || {}).room || o), this.likeButtonTemplate = q, this._messageTypeCustomizer = new st(this._bridge.typeHandlers || {}, this._updateMessageContext), this._updateMessageContext(), (this.isPrivate() || this._standalone && this._model.getRoomById(o) || this._bridge.live) && this.selectChannel(o), t && (t.symbol && (this._onSymbolChanged = this.update.bind(this), t.symbol.subscribe(this._onSymbolChanged, {
                    callWithLast: !0
                })), t.interval && (this._onIntervalChanged = this.update.bind(this), t.interval.subscribe(this._onIntervalChanged, {
                    callWithLast: !0
                })), this._onResize = this.resize.bind(this), t.height && t.height.subscribe(this._onResize), t.width && t.width.subscribe(this._onResize), t.onMessage && !t.live && t.onMessage(this.onBridgeMessage.bind(this)))
            }
            ut.prototype._onMessageWrapper = function(t, e, i) {
                this.onMessage(t, i)
            }, ut.prototype.currentRoom = function() {
                return this._model.room()
            }, ut.prototype.enablePosting = function() {
                this._postingDisabled && (this._hiddenElements && this._hiddenElements.forEach((function(t) {
                    t.css("display", "")
                })), this._$inputNoPostingMessage && this._$inputNoPostingMessage.remove(), this.resizeHeader(), this._postingDisabled = !1)
            }, ut.prototype.onBridgeMessage = function(t, e) {
                "chat_set_sound_state" === t ? e.isPrivate === this.isPrivate() && this.sound.set(e.state) : "toggle_snaphot_preview" === t && this.toggleSnaphotPreview(), this.isPrivate() ? "private_chat_hidden" === t ? this._markMessagesAsUnread(!0) : "private_chat_visible" === t ? (this._scroll.checkContentVisibility(), this._markMessagesAsUnread(!1)) : "private_chat_msgs_read" === t && this._markAsRead(e.idString) : "chat_select_channel" === t ? (this._newMessagesToHighlight = e.new_msgs, this.selectChannel(e.room_id)) : "chat_edit_room" === t ? this.editRoom(this._model.getRoomById(e)) : "chat_delete_room" === t && this.deleteRoom(this._model.getRoomById(e))
            }, ut.prototype.playSound = function(t) {
                this.sound.state[t] && (this.isPrivate() ? y.play("chat/popup") : y.play("chat/message"))
            }, ut.prototype._clearExcessiveMessages = function() {
                var t = this._$data.find(".ch-item");
                return t.length > this.MAX_MESSAGES && ((t = t.slice(0, t.length - this.MAX_MESSAGES)).add(".ch-item-empty"), j.jQueryCompatibleDestroy(t), t.remove()), this._history_hide_timeout && (clearTimeout(this._history_hide_timeout), this._history_hide_timeout = null), !!t.length
            }, ut.prototype._markAsRead = function(t) {
                var e = t.split(":");
                this._scroll.triggerVisibilityCallbacks((function(t) {
                    var i = e.indexOf(t.id);
                    return i >= 0 && (e.splice(i, 1), !0)
                }))
            }, ut.prototype._markMessagesAsUnread = function(t) {
                t && this._markNewMessagesAsUnread !== t && (this._prepareUnreadMarker = !0), this._markNewMessagesAsUnread = t
            }, ut.prototype._shouldPlaceUnreadMarkerNow = function() {
                var t = this._prepareUnreadMarker;
                return this._prepareUnreadMarker = !1, this._markNewMessagesAsUnread && t
            }, ut.prototype.onMessage = function(t, e) {
                if (!(this._model.ignoredUsers().includes(t.user_id) || t.id && this._lastMessageId === t.id)) {
                    this._lastMessageId = t.id;
                    var i = t.user_id !== window.user.id,
                        s = i && this._shouldPlaceUnreadMarkerNow();
                    s && this._$data.append(this._getNewUnreadMarker()), this.isPrivate() && this._bridge.visible.value() && this._bridge.postMessage("private_message_read", {
                        id: "marker"
                    }), (this._isMessageFromIgnoredUser(t) || mt(t)) && this._invisibleMessagesNumber++;
                    var o = this.createMessage(t, {
                            markAsUnread: this._markNewMessagesAsUnread,
                            forceFullMessage: s,
                            batch: 1
                        }),
                        n = o[0].querySelector(".js-badge-wrapper");
                    if (null !== n && tt(n, {
                            badges: Z(t),
                            size: Y.XSmall,
                            getTitle: et,
                            getLink: it
                        }), o.data("short")) {
                        var a = this.getLastMessages(1);
                        o.insertAfter(a.find(".ch-item-text:last"))
                    } else this._$data.removeClass("no-messages"), o.appendTo(this._$data);
                    this._scroll.atEnd(2 * o.height()) && this._clearExcessiveMessages.apply(this), i && this._bridge && (t.meta.service_msg || (!this.isStandalone() && !this.isPrivate() || e || this.playSound(o.data("is_reply") ? "onMessageForUser" : "onMessage"), this.highlightMessage(o, t.id))), this._scroll.atEnd(2 * o.height()) && this._scroll.scrollToEnd(), this._messageTypeCustomizer.onMessage(t)
                }
            }, ut.prototype.highlightMessage = function(t, e) {
                var i = this;
                this._bridge.visible.value() ? this.isPrivate() && this._bridge.postMessage("private_message_read", {
                    id: e
                }) : this.isPrivate() || (this._messagesToHighlight ? this._messagesToHighlight = this._messagesToHighlight.concat(t.attr("id")).slice(-this.MAX_HIGHLIGHTED_MESSAGES) : (this._messagesToHighlight = [t.attr("id")], this._bridge.visible.when((function() {
                    var t = i._messagesToHighlight;
                    delete i._messagesToHighlight, i._$data.find("#" + t.join(", #")).highlight(5)
                })), t = null))
            }, ut.prototype._onMessageDeletedBySelf = function(t) {
                this._slidingUp || (this._slidingUp = []), this._slidingUp.push(t), t.slideUp({
                    queue: !1,
                    complete: function() {
                        this._slidingUp.splice(this._slidingUp.indexOf(t), 1), this._slidingUp.length || delete this._slidingUp, this.removeMessage(t)
                    }.bind(this)
                })
            }, ut.prototype._onMessageDeleted = function(t) {
                var e = s("#ch-item-" + t.id);
                if (e.hasClass("ch-item-text") && (e = e.closest(".ch-item")), e.length > 0 && this._messagesIdsToBeDeletedBySelf && this.getMessagesData(e)[0] === this._messagesIdsToBeDeletedBySelf[0]) return this._messagesIdsToBeDeletedBySelf = null, this._onMessageDeletedBySelf(e);
                e.length > 0 && (window.is_authenticated && window.user.id === t.user_id ? this.highlightAsModerated(e) : this.removeMessage(e), this._scroll.resize())
            }, ut.prototype._onRoomChanged = function() {
                this.isPrivate() && this._$addButton.find(".msg-window-members-count").text(this._bridge.membersCount())
            }, ut.prototype.removeMessage = function(t) {
                j.jQueryCompatibleDestroy(t), t.remove()
            }, ut.prototype.highlightAsModerated = function(t) {
                t.prepend('<div class="ch-message-moderated-layout"><div class="ch-overlap">' + i(777754).t(null, void 0, i(705198)) + "</div></div>").addClass("ch-message-moderated")
            }, ut.prototype.getLastMessages = function(t, e) {
                var i = e instanceof DocumentFragment ? s(e.childNodes).filter(".ch-item") : (e || this._$data).find(".ch-item");
                return i.slice(i.length - t)
            }, ut.prototype.getFirstMessages = function(t, e) {
                return (e instanceof DocumentFragment ? s(e.childNodes).filter(".ch-item") : (e || this._$data).find(".ch-item")).slice(0, t)
            }, ut.prototype.update = function() {
                this._bridge && this._bridge.symbol && this._model.setStatSymbol(this._bridge.symbol.value() || void 0), this._bridge && this._bridge.interval && this._model.setStatInterval(this._bridge.interval.value() || void 0)
            }, ut.prototype._clearMessageBatch = function(t) {
                this._messageBatches[t].count > 0 && (this._messageBatches[t] = pt(t))
            }, ut.prototype._putMessageInBatch = function(t, e) {
                this._messageBatches[t].clearAfterTriggering && this._messageBatches[t].visibilityCallbacksFired && this._clearMessageBatch(t), this._messageBatches[t].messages[e] = !0, this._messageBatches[t].count++
            }, ut.prototype._checkMessageBatchQuantity = function(t) {
                return this._messageBatches[t].visibilityCallbacksFired || this._onMessagesVisibility(t), this._messageBatches[t].fireAlt
            };

            function pt(t) {
                var e = {
                    messages: {},
                    count: 0,
                    visibilityCallbacksFired: !1,
                    fireAlt: !1
                };
                return 1 === t && (e.clearAfterTriggering = !0), e
            }

            function mt(t) {
                return "create_room" === t.type || "edit_room" === t.type
            }

            function gt(t) {
                return JSON.parse(t).id
            }

            function _t(t) {
                if (window.getSelection().toString()) return !0;
                var e = s(t);
                if (e.is("img, a, path")) return !0;
                var i = e.closest("div");
                return i.hasClass("js-snapshot-like") || i.hasClass("js-chart-like")
            }
            ut.prototype._onMessagesVisibility = function(t) {
                    this._messageBatches[t].visibilityCallbacksFired = !0, this._messageBatches[t].count <= 5 && (this._messageBatches[t].fireAlt = !0)
                }, ut.prototype._updateMessageBatches = function() {
                    this._messageBatches && delete this._messageBatches, this._messageBatches = [pt(0), pt(1)]
                }, ut.prototype._canLoadHistoryMessages = function() {
                    return this._scroll.isContentShort() && !this._isHistoryEnded && this._bridge.visible.value()
                }, ut.prototype._loadChatHistory = function() {
                    let t = !1;
                    this._history_loading = !0, this._$data.addClass("loading"), this._model.loadHistory(this._$data.find(".ch-item-text").length + this._invisibleMessagesNumber, ((e, i) => {
                        this._scroll.save(), m.isSymbolRoom(this._model.room()) && i && (e.messages.push(m.defaultSymbolRoomMesssage()), t = !0), this.prependMessages(e.messages, (() => {
                            t || this._scroll.restore(), this._history_loading = !1, this._isHistoryEnded = i, this._$data.removeClass("loading"),
                                this._history_hide_timeout && clearTimeout(this._history_hide_timeout), this._history_hide_timeout = setTimeout((() => {
                                    this._clearExcessiveMessages.apply(this) && (this._scroll.scrollToEnd(), this._isHistoryEnded = !1)
                                }), 24e5), this._canLoadHistoryMessages() && this._loadChatHistory()
                        }))
                    }))
                }, ut.prototype.updateRoom = function(t) {
                    this._invisibleMessagesNumber = 0, this._isHistoryEnded = !1, this._$data.addClass("loading"), this._spinner || (this._spinner = new D("mini").spin(this._$scrollContainer.get(0))), this._init_history_loading = !0, this.isPrivate() && (this.updateLikesHandlers(), this._updateMessageBatches()), this._$inputDisabledMessage.hide(), this._$invalidLinkMessage.hide();
                    this._model.setRoom(t, ((t, e, i) => {
                        this.isPrivate() && this._bridge.xWindowDataSync && "function" == typeof this._bridge.xWindowDataSync && this._bridge.xWindowDataSync(t), j.jQueryCompatibleDestroy(this._$data), this._$data.empty(), this.resizeHeader(), this.isPrivate() && !i && (this._lastVisited = 1e3 * t.last_visited), this._isHistoryEnded = e, t.messages.length && (this._lastMessageId = t.messages[0].id), m.isSymbolRoom(this._model.room()) && e && t.messages.push(m.defaultSymbolRoomMesssage()), this.prependMessages(t.messages, (() => {
                            if (this.updateTitle(), this._$data.removeClass("loading"), this._spinner && (this._spinner.stop(), delete this._spinner), this._scroll.scrollToEnd(), this._newMessagesToHighlight && t.messages.length > 0) {
                                var e = Math.min(this._newMessagesToHighlight, this.MAX_HIGHLIGHTED_MESSAGES);
                                m.highlightNewMessages(this._$data, e, 5), this._newMessagesToHighlight = 0
                            }
                            this._init_history_loading = !1, this.isPrivate() && this.restoreInputText(), this._init_history_loaded && this.inputEditFocus(), this._init_history_loaded = !0, this._canLoadHistoryMessages() && this._loadChatHistory()
                        }))
                    }))
                }, ut.prototype.getRoomTitle = function(t) {
                    var e = this._model.getRoomById(t);
                    return e ? e.title : ""
                }, ut.prototype.isStandalone = function() {
                    return !!this._standalone
                }, ut.prototype.isEmbedded = function() {
                    return !!this._embedded
                }, ut.prototype.isPrivate = function() {
                    return this._bridge && !!this._bridge.private_chat
                }, ut.prototype._updateMessageContext = function() {
                    this.messageContext = this.getMessageContext()
                }, ut.prototype.getMessageContext = function() {
                    var t = this;
                    return Object.assign({
                        join: function(t) {
                            return {
                                text: "<i>" + i(777754).t(null, {
                                    replace: {
                                        username: nt(t.username)
                                    }
                                }, i(1310)) + "</i>",
                                isService: !0
                            }
                        },
                        leave: function(t) {
                            return {
                                text: "<i>" + i(777754).t(null, {
                                    replace: {
                                        username: nt(t.username)
                                    }
                                }, i(141985)) + "</i>",
                                isService: !0
                            }
                        },
                        delete_room: function(t) {
                            return {
                                text: "<i>" + i(777754).t(null, {
                                    replace: {
                                        title: nt(t.meta.room_title)
                                    }
                                }, i(287147)) + "</i>",
                                isService: !0
                            }
                        },
                        warning: function(e) {
                            return s.extend(t.normalMessageContext(e), {
                                isService: !0,
                                isWarning: !0
                            })
                        },
                        normal: t.normalMessageContext,
                        get: function(e) {
                            return e.type && this[e.type] ? this[e.type](e) : t.normalMessageContext(e)
                        }
                    }, this._messageTypeCustomizer.getHandlers(t.normalMessageContext))
                }, ut.prototype.normalMessageContext = function(t) {
                    var e, s = t.meta && "snapshot" === t.meta.type,
                        n = this.META_VERSION === t.meta.version,
                        a = t.meta.temp;
                    return e = n ? this.renderText(t).replace(/\n/g, "<br/>") : C.urlizeAndParseQuotesAndClean(t.text || "").replace(/\n/g, "<br/>"), s && (e && (e += "<br/>"), e += o.render('<div class="ch-item-preview-wrap"><div class="ch-item-snapshot-link"><i class="icon icon-snapshot-small" title="{{title}}"></i> <a href="{{url}}" target="_blank">{{metaText}}</a></div><div class="ch-item-snapshot-preview"><a href="{{url}}" target="_blank"><img src="{{previewURL}}" loading="lazy" class = "snapshot-preview" alt=""/></a></div>{{#chartId}}{{> ideaLikesButton }}{{/chartId}}</div>', {
                        title: i(777754).t(null, void 0, i(511938)),
                        url: TradingView.clean(t.meta.url),
                        metaText: i(777754).t(null, void 0, i(511938)),
                        previewURL: TradingView.clean(t.meta.preview_url ? t.meta.preview_url : t.meta.url),
                        chartId: !(this.isPrivate() || !a) && t.id,
                        typeClass: "js-snapshot-like",
                        titleTooltip: ct
                    }, {
                        ideaLikesButton: this.likeButtonTemplate
                    })), {
                        text: e,
                        showAuthor: !t.meta.service_msg,
                        isAuthor: user.id === t.user_id,
                        isReport: t.meta.report_type,
                        isModNotification: t.meta.mod_notification,
                        isBanNotification: t.meta.ban_notification,
                        newMeta: n,
                        tempMeta: a,
                        snapshotAttached: s
                    }
                }, ut.prototype.renderText = function(t) {
                    var e = this.utm ? "?" + this.utm : "",
                        s = new C.UrlizeBuffer(TradingView.clean(t.text), t.utm);
                    if (s = C.obsceneWords(s), t.meta.links.charts) {
                        var n = t.meta.links.charts.occurences,
                            a = t.meta.links.charts.data;
                        n.forEach((function(t) {
                            var n = a[t.id],
                                r = TradingView.clean(t.match);
                            s.text.indexOf(r) >= 0 && (s.text = s.text.replace(r, "<" + s.count++ + ">"), s.values.push(o.render('{{#showLikesButton}}<div class="ch-item-preview-wrap">{{/showLikesButton}}<div class="ch-item-chart-link"><i class="icon icon-snapshot-small" title="{{publishedIdea}}"></i> <a href="{{href}}" target="_blank" data-id="{{chartId}}" data-symbol="{{symbol}}" data-url="{{href}}">{{publishedIdea}}</a></div><div class="ch-item-chart-preview"><a  href="{{href}}" target="_blank" data-id="{{chartId}}" data-symbol="{{symbol}}" data-url="{{href}}"><div class="tv-idea-preview-button__container"><img src="{{imageUrl}}" loading="lazy" alt="" class="idea-preview"/>{{#isVideo}}<div class="tv-idea-preview-button__play-icon">' + i(3044) + '</div>{{/isVideo}}{{#videoCam}}<div class="tv-idea-preview-button__video-cam">' + i(205128) + "</div>{{/videoCam}}</div></a></div>{{#showLikesButton}}{{> ideaLikesButton }}{{/showLikesButton}}{{#showLikesButton}}</div>{{/showLikesButton}}", {
                                href: n.published_chart_url + e,
                                publishedIdea: i(777754).t(null, void 0, i(442537)),
                                title: n.name,
                                symbol: n.symbol.split(":")[1],
                                imageUrl: U.createPublishedChartImageUrl(n.image_url),
                                showLikesButton: !this.isPrivate(),
                                chartId: n.image_url,
                                typeClass: "js-chart-like",
                                titleTooltip: ct,
                                isVideo: n.is_video,
                                videoCam: n.video_cam
                            }, {
                                ideaLikesButton: this.likeButtonTemplate
                            })))
                        }), this)
                    }
                    s.text = X.parseQuotes(s.text), s.text = G(s.text);
                    var r = C.chainedUrlize(s, C.commonFunctors);
                    return r = A.parseNativeEmoji(r)
                }, ut.prototype._isMessageFromIgnoredUser = function(t) {
                    return this._model.ignoredUsers().includes(t.user_id)
                }, ut.prototype.createMessage = function(t, e, n) {
                    if (this._isMessageFromIgnoredUser(t) || mt(t)) return s();
                    var a, r = this.messageContext.get(t),
                        h = t.meta.interval ? " " + t.meta.interval : "",
                        l = document.createElement("div");
                    l.innerHTML = r.text;
                    for (var c = 0; c < l.childNodes.length && (l.childNodes[c].nodeType !== Node.TEXT_NODE || !(a = J(l.childNodes[c].textContent))); c += 1);
                    var p = s(o.render('<div class="ch-item ch-item-user-{{userID}} js-userlink-popup-anchor" id="ch-item-{{messageID}}"><a class="ch-item-userpic ch-item-userpic-{{userID}}" href="{{profileUrl}}" data-username="{{username}}" data-userlinkpopup-timeout="{{userlinkPopupTimeout}}" target="_blank"><img src="{{userPic}}" loading="lazy" alt="Avatar"/></a><div class="ch-item-content">{{#showHeader}}<div class="ch-item-header">{{#showAuthor}}<span class="ch-item-author"><a href="{{profileUrl}}" target="_blank" class="ch-userlink selectable js-chat-suggest" data-username="{{username}}" data-userlinkpopup-timeout="{{userlinkPopupTimeout}}">{{username}}</a><span class="ch-userlink__badge-wrapper js-badge-wrapper"></span></span>{{/showAuthor}}<span class="ch-item-info">{{{symbolInterval}}}<span class="ch-item-time"><time></time></span></span>{{#showActions}}<div class="ch-item-actions js-actions"></div>{{/showActions}}</div>{{/showHeader}}<div class="ch-item-text selectable {{^showHeader}}ch-item-text-no-header{{/showHeader}} js-text"{{#autoDirection}}dir={{autoDirection}}{{/autoDirection}}>{{{text}}}</div></div></div>', {
                            userID: t.user_id,
                            messageID: t.id,
                            username: t.username,
                            userPic: t.user_pic,
                            userlinkPopupTimeout: this.USERLINK_POPUP_TIMEOUT,
                            showHeader: !("join" === t.type),
                            showAuthor: r.showAuthor,
                            symbolInterval: "" !== t.symbol ? '<span class="ch-item-symbol">' + nt(t.symbol.substring(t.symbol.indexOf(":") + 1) + h) + ",</span>" : "",
                            showActions: !r.isService,
                            text: r.text,
                            autoDirection: a,
                            profileUrl: d({
                                username: t.username,
                                is_broker: t.is_broker
                            }, {
                                query: this.utm
                            })
                        })),
                        m = this;
                    if (p.find(".ch-item-userpic img").one("error", (function() {
                            this.src = ot
                        })), e.markAsUnread && !r.isAuthor && (this._putMessageInBatch(e.batch, t.id), p.addClass("js-unread-message"), this._scroll.subscribeToContentVisible(t.id, p[0], (function(i) {
                            if (i || m._bridge.postMessage("private_message_read", {
                                    id: t.id
                                }), m._checkMessageBatchQuantity(e.batch)) return p.removeClass("js-unread-message"), void p.highlight(5);
                            p.addClass("js-read-message"), p.removeClass("js-unread-message"), setTimeout((function() {
                                p.removeClass("js-read-message")
                            }), 2500)
                        }))), r.isService) return p.addClass("ch-message-service"), r.isWarning && p.addClass("ch-message-type-warning"), p;
                    this._messageTypeCustomizer.isTypeExists(t.type) && this._messageTypeCustomizer.onCreateMessage(p[0], t);
                    var b = p.find(".js-text");
                    if (0 === b.text().length && 1 === b.children().length && (b.children().hasClass("emoji") || b.children().hasClass("tv-emoji-wrapper")) && b.addClass("ch-item-text-emoji"), this.canHandleLikes && r.tempMeta) {
                        if (r.snapshotAttached) {
                            var y = t.meta.temp.message_likes;
                            y && this._snapshotMessagesLikesHandler.addIdea(p.find(".js-snapshot-like")[0], t.id, y.count, y.voted)
                        }
                        if (r.newMeta && t.meta.links.charts && t.meta.temp.chart_likes) {
                            c = 0;
                            var w = t.meta.temp.chart_likes;
                            p.find(".js-chart-like").each((function() {
                                var e = s(this).data("id");
                                e === t.meta.links.charts.occurences[c++].id && m._chartLikesHandler.addIdea(this, e, w[e].count, w[e].voted)
                            }))
                        }
                    }
                    var C, M = p.find(".js-actions");
                    if (M.append(s('<a class="ch-item-action" title="' + i(777754).t(null, void 0, i(460407)) + '">')).children().last().append(s(i(15989)).attr({
                            width: 12,
                            height: 12
                        })).on("click", (function(e) {
                            e.stopPropagation(), m.insertQuote(p, t)
                        })), r.isAuthor || M.append(s('<a class="ch-item-action ch-item-action-report" title="' + i(777754).t(null, void 0, i(773326)) + '">')).children().last().append(s(i(822353)).attr({
                            width: 12,
                            height: 12
                        })).on("click", (function(e) {
                            e.preventDefault(), m.showReportDialog(p, t)
                        })), M.append(s('<a class="ch-item-action js-settings" title="' + i(777754).t(null, void 0, i(473771)) + '">')).children().last().append(s(i(214729)).attr({
                            width: 12,
                            height: 12
                        })), M.on("contextmenu", (function(t) {
                            t.preventDefault(), t.stopPropagation()
                        })), this.bindMessageMenu(p, t), this.isEmbedded() || p.find(".js-chat-suggest").on("click", function(e) {
                            e.preventDefault(), e.stopPropagation(), u().then((function(e) {
                                e.onUserSelect({
                                    id: t.user_id,
                                    username: t.username,
                                    userpic: t.user_pic
                                })
                            })), this.insertAtCursorPosition("@" + t.username.replace(/\s/g, " ") + " ")
                        }.bind(this)), !this.isStandalone()) {
                        var S = p.find(".ch-item-snapshot-link a, .ch-item-snapshot-preview a");
                        Q({
                            elem: S,
                            type: "image",
                            live: !1
                        }), p.find(".ch-item-chart-link a, .ch-item-chart-preview a").click((function() {
                            var t = s(this).data("url"),
                                e = s(this).data("id"),
                                o = s(this).data("symbol"),
                                n = m._bridge.getChartWidgetCollection();
                            if (t) g({
                                chartId: e,
                                chartName: i(777754).t(null, void 0, i(442537)),
                                publishedUrl: t,
                                shortSymbol: o,
                                chartWidgetCollection: n
                            });
                            else if (o) {
                                var a = U.createPublishedChartUrl(e, o);
                                g({
                                    chartId: e,
                                    chartName: i(777754).t(null, void 0, i(442537)),
                                    publishedUrl: a,
                                    shortSymbol: o,
                                    chartWidgetCollection: n
                                })
                            } else g({
                                chartId: e,
                                chartName: i(777754).t(null, void 0, i(442537)),
                                chartWidgetCollection: n
                            });
                            return !1
                        }))
                    }
                    this.isStandalone() || this.isEmbedded() || p.on("contextmenu", (function(e) {
                        _t(e.target) || (e.preventDefault(), m._model.getBanStatus(t, (function(i, s) {
                            t.is_banned = i && s;
                            var o = m.prepareMessageMenu(p, t).map((function(t) {
                                return t.separator ? new _ : new v({
                                    label: t.title,
                                    onExecute: t.action
                                })
                            }));
                            f.showMenu(o, e)
                        })))
                    })), j.jQueryCompatibleAgoDateFormatter(p.find(".ch-item-time time"), this._parseMessageTime(t.time)), p.data("message", JSON.stringify(t)).data("alive", !0), this.isStandalone() && p.data("ch-is-standalone", !0), is_authenticated && (!m.isEmbedded() && r.isAuthor ? p.addClass("ch-is-author") : r.isReport ? (p.addClass("ch-is-report"), e.forceFullMessage = !0) : r.isModNotification ? (p.addClass("ch-mod-notification"), e.forceFullMessage = !0, r.isBanNotification && p.addClass("ch-ban-notification")) : t.text && p.text().indexOf("@" + user.username.replace(/\s/g, " ")) > -1 && (p.addClass("ch-is-reply").data("is_reply", !0), C = !0));
                    var $ = this.getLastMessages(1, n),
                        x = $ && !$.hasClass("ch-message-moderated") && $.data("message");
                    if (x) try {
                        x = JSON.parse(x)
                    } catch (t) {
                        x = null
                    }
                    return !e.forceFullMessage && x && t.username === x.username && !x.type && t.symbol === x.symbol && t.interval === x.interval && C === $.data("is_reply") && new Date(t.time) - new Date(x.time) < this.MESSAGES_CONCATENATION_TIMEOUT && !this._messageTypeCustomizer.getTypeNames().includes(t.type) ? ($.find(".ch-item-symbol").replaceWith(p.find(".ch-item-symbol")), $.find(".ch-item-time time").replaceWith(p.find(".ch-item-time time")), p.find(".ch-item-text").data(p.data()).data("short", !0).addClass("js-message-concatenated").attr("id", p.attr("id"))) : p
                }, ut.prototype.getMessagesData = function(t) {
                    var e = [gt(t.data("message"))];
                    return t.find(".ch-item-text[id]").each((function(t, i) {
                        var o = s(i).data("message");
                        o && e.push(gt(o))
                    })), e
                }, ut.prototype.insertQuote = function(t, e) {
                    var i = this._$inputEdit.val().trim();
                    this._$inputEdit.focus(), this._$inputEdit.val(i + (i.length ? "\n" : "") + '[quote="' + e.username.replace(/\s/g, " ") + '"]' + this.getFullMessage(t, e) + "[/quote]\n"), r.update(this._$inputEdit)
                }, ut.prototype.getFullMessage = function(t, e, i) {
                    var o = [],
                        n = i ? X.removeBBCodes : X.removeQuotes;
                    return o.push(n(e.text)), "snapshot" === e.meta.type && o.push(e.meta.url), t.find(".js-message-concatenated").each((function() {
                        var t = JSON.parse(s(this).data("message"));
                        o.push(n(t.text)), "snapshot" === t.meta.type && o.push(t.meta.url)
                    })), o.filter((function(t) {
                        return t
                    })).join("\n")
                }, ut.prototype.bindMessageMenu = function(t, e) {
                    var i = this,
                        s = t.find(".js-settings");
                    s.on("click", (function(o) {
                        o.stopPropagation(), s.hasClass("open") ? s.trigger("hide-popup") : i.createMessageMenu(t, e, (function(t) {
                            s.trigger("show-popup", [t, !0])
                        }))
                    })), B(s, null, {
                        event: "show-popup",
                        hideEvent: "hide-popup",
                        addClass: "ch-popup ch-item-settings-popup",
                        careBottomBorder: !0,
                        careRightBorder: !0
                    })
                }, ut.prototype.showReportDialog = function(t, e) {
                    var s = this.getFullMessage(t, e, !0),
                        o = {};
                    this.isPrivate() || (o.additionalText = i(777754).t(null, void 0, i(205415)).format({
                        title: this._roomTitle
                    })), runOrSignIn(R.bind(null, e.username, "message", e.id.replace(/-/g, ""), s, e.id, o), {
                        source: "Chat report message",
                        verifiedPhoneRequired: !0
                    })
                }, ut.prototype.prepareMessageMenu = function(t, e) {
                    var s = [],
                        o = this;
                    s.push({
                        title: i(777754).t(null, void 0, i(460407)),
                        action: function() {
                            o.insertQuote(t, e)
                        }
                    });
                    const n = o.isPrivate() ? i(777754).t(null, void 0, i(635117)) : i(777754).t(null, void 0, i(8435));
                    if (s.push({
                            title: n,
                            action: function() {
                                o.isPrivate() ? window.open("/chat/m/" + e.id.replace(/-/g, "") + "/") : window.open(o._getChatHistoryLink(new Date(e.time)) + "&msgid=" + e.id)
                            }
                        }), user.id === e.user_id || this.isPrivate() || o.isStandalone() || s.push({
                            title: i(777754).t(null, void 0, i(773326)),
                            action: this.showReportDialog.bind(this, t, e)
                        }), (user.permissions.can_moderate_public_chats || user.id === e.user_id) && s.push({
                            title: i(777754).t(null, void 0, i(564414)),
                            action: function() {
                                var e = o.getMessagesData(t);
                                o._messagesIdsToBeDeletedBySelf = e, o._model.deleteMessage(e, null, (function() {
                                    o._messagesIdsToBeDeletedBySelf = null
                                }))
                            }
                        }), s.push({
                            separator: !0
                        }), user.permissions.can_ban_people && user.id !== e.user_id && !e.is_moderator) {
                        var a = !!e.is_banned,
                            r = {
                                unban: i(777754).t(null, {
                                    replace: {
                                        username: e.username
                                    }
                                }, i(483228)),
                                ban: i(777754).t(null, {
                                    replace: {
                                        username: e.username
                                    }
                                }, i(768408))
                            },
                            h = {
                                title: a ? r.unban : r.ban,
                                action: function() {
                                    a ? $(e.user_id, e.username, (function() {
                                        h.title = r.ban, a = !1
                                    })) : S(o.getFullMessage(t, e, !0), e, {
                                        modal: !0
                                    }, (function() {
                                        h.title = r.unban, a = !0
                                    }))
                                }
                            };
                        s.push(h), t.find(".ch-userlink, ch-item-userpic").on("userbanchange", (function(t, e) {
                            a = e, h.title = a ? r.unban : r.ban
                        }))
                    }
                    if (window.user.id !== e.user_id && !e.is_moderator) {
                        var d = !!this._model.ignoredUsers().includes(e.user_id),
                            l = {
                                ignore: i(777754).t(null, {
                                    replace: {
                                        username: e.username
                                    }
                                }, i(920268)),
                                unignore: i(777754).t(null, {
                                    replace: {
                                        username: e.username
                                    }
                                }, i(420420))
                            },
                            c = {
                                title: d ? l.unignore : l.ignore,
                                action: function() {
                                    d ? o._model.ignoreUserV2(e, !1, (function() {
                                        c.title = l.ignore, d = !1
                                    }), (function(t) {
                                        t && I({
                                            title: i(777754).t(null, void 0, i(482751)),
                                            content: t.message
                                        })
                                    })) : E({
                                        text: i(777754).t(null, {
                                            replace: {
                                                username: e.username
                                            }
                                        }, i(898331)),
                                        onConfirm: function(t) {
                                            return new Promise((function(s) {
                                                o._model.ignoreUserV2(e, !0, (function() {
                                                    s(), t.dialogClose(), c.title = l.unignore, d = !0
                                                }), (function(e) {
                                                    s(), t.dialogClose(), e && I({
                                                        title: i(777754).t(null, void 0, i(482751)),
                                                        content: e.message
                                                    })
                                                }))
                                            }))
                                        }
                                    })
                                }
                            };
                        s.push(c), t.find(".ch-userlink, ch-item-userpic").on("userignorechange", (function(t, e) {
                            d = e, c.title = d ? l.unignore : l.ignore
                        }))
                    }
                    var u;
                    (o.isStandalone() || o.isPrivate() || user.id === e.user_id || s.push({
                        title: i(777754).t(null, {
                            replace: {
                                username: e.username
                            }
                        }, i(972090)),
                        action: function() {
                            runOrSignIn(T.bind(this, e.user_id, e.username), {
                                source: "Chat send private message",
                                verifiedPhoneRequired: !0,
                                doNotCheckSuspicious: !0
                            })
                        }
                    }), o.isPrivate()) || (u = user.id === e.user_id ? i(777754).t(null, void 0, i(508167)) : i(777754).t(null, {
                        replace: {
                            username: e.username
                        }
                    }, i(534522)), s.push({
                        title: u,
                        action: function() {
                            window.open(o._getChatHistoryLink(new Date, e.username))
                        }
                    }));
                    return s[s.length - 1].separator && s.pop(), s
                }, ut.prototype.createMessageMenu = function(t, e, i) {
                    var s = this;
                    this._model.getBanStatus(e, (function(o, n) {
                        e.type && !s._messageTypeCustomizer.getTypeNames().includes(e.type) || (e.is_banned = o && n, i(s.prepareMessageMenu(t, e)))
                    }))
                }, ut.prototype._getChatHistoryLink = function(t, e) {
                    var i = t.getMonth() + 1,
                        s = t.getDate(),
                        o = t.getMinutes(),
                        n = t.getHours(),
                        a = (n < 10 ? "0" : "") + n + "%3A" + (o < 10 ? "0" : "") + o,
                        r = t.getFullYear() + "-" + (i < 10 ? "0" : "") + i + "-" + (s < 10 ? "0" : "") + s,
                        h = "/chat/history/?room=" + this._model.room() + "&date=" + r + "&tzoffset=" + t.getTimezoneOffset();
                    return e ? h + "&usernames=" + e : h + "&timefrom=" + a
                }, ut.prototype._messageUnread = function(t) {
                    return new Date(t) > new Date(this._lastVisited)
                }, ut.prototype.prependMessages = function(t, e) {
                    if (t.length) {
                        var i, o = this.getFirstMessages(1),
                            n = o && o.data("message");
                        if (n) try {
                            i = (n = JSON.parse(n)).username
                        } catch (t) {}
                        var a, r, h, d = document.createDocumentFragment(),
                            l = !1,
                            c = !!this._lastVisited,
                            u = t.reverse();
                        if (u.forEach((function(t) {
                                var e = c && this._messageUnread(t.time);
                                if (e) {
                                    var i = this._updateUnreadMarker(0);
                                    d.appendChild(i.get(0)), l = !0, c = !1
                                }(this._isMessageFromIgnoredUser(t) || mt(t)) && this._invisibleMessagesNumber++;
                                var s = this.createMessage(t, {
                                    markAsUnread: l,
                                    forceFullMessage: e,
                                    batch: 0
                                }, d);
                                if (s.length)
                                    if (s.data("short")) {
                                        var o = this.getLastMessages(1, d).find(".ch-item-text:last");
                                        s.insertAfter(o)
                                    } else d.appendChild(s.get(0)), a = s
                            }), this), this._messageUnread(u[0].time) || delete this._lastVisited, i && a && (r = a.data("message"))) {
                            try {
                                h = (r = JSON.parse(r)).username
                            } catch (t) {}
                            if (h && h === i && new Date(n.time) - new Date(r.time) < this.MESSAGES_CONCATENATION_TIMEOUT) {
                                var p = o.find(".ch-item-text");
                                p.eq(0).attr("id", o.attr("id")), p.eq(0).data(o.data()), p.insertAfter(a.find(".ch-item-text:last")), o.remove()
                            }
                        }
                        for (var m = Object.values(d.childNodes), g = 0; g < m.length; g++) {
                            var _ = m[g],
                                v = _.querySelector(".js-badge-wrapper");
                            if (null !== v) {
                                var f = s(_).data("message");
                                if (f && 0 !== f.length) {
                                    var b = JSON.parse(f);
                                    tt(v, {
                                        badges: Z(b),
                                        size: Y.XSmall,
                                        getTitle: et,
                                        getLink: it
                                    })
                                }
                            }
                        }
                        var y = this._$data.get(0);
                        y.insertBefore(d, y.firstChild), e()
                    } else e()
                }, ut.prototype._getNewUnreadMarker = function() {
                    return this._$unreadMarker ? s() : this._updateUnreadMarker(1)
                }, ut.prototype._resetUnreadMarker = function() {
                    this._$unreadMarker && (this._$unreadMarker.remove(), delete this._$unreadMarker)
                }, ut.prototype._updateUnreadMarker = function(t) {
                    return this._resetUnreadMarker(), this._$unreadMarker = s('<div class="js-unread-marker ch-unread-marker">'), this._scroll.subscribeToContentVisible("__marker__", this._$unreadMarker[0], function(e) {
                        if (e || this._bridge.postMessage("private_message_read", {
                                id: "__marker__"
                            }), this._checkMessageBatchQuantity(t)) this._$unreadMarker.remove();
                        else {
                            this._$unreadMarker.addClass("js-vanish");
                            var i = this._$unreadMarker;
                            setTimeout((function() {
                                i.remove()
                            }), 2500)
                        }
                        delete this._$unreadMarker
                    }.bind(this)), this._$unreadMarker
                }, ut.prototype._parseMessageTime = function(t) {
                    return n.utc(t, "ddd MMM DD hh:mm:ss YYYY", "en").toDate()
                }, ut.prototype.insertAtCursorPosition = function(t) {
                    var e = this._$inputEdit.val(),
                        i = this._$inputEdit.prop("selectionStart");
                    this._$inputEdit.val(e.slice(0, i) + t + e.slice(i)), this._$inputEdit.putCursorAtPosition(i + t.length), r.update(this._$inputEdit).focus()
                }, ut.prototype.prepareLayout = function(t) {
                    var e = this;
                    if (this._$container = t, this._$widget = s('<div class="tv-chat">').appendTo(t), this._$scrollContainer = s('<div class="tv-chat-scroll-container">').appendTo(this._$widget), this._$scrollContainer.on("contextmenu", (function(t) {
                            t.target.classList.contains("tv-chat-scroll-container") && t.preventDefault()
                        })), this._$data = s('<div class="ch-data no-messages">').appendTo(this._$scrollContainer), this._$data.on("click", ".ch-item", (function(t) {
                            _t(t.target) || e.toggleHighlightUserMessages(s(t.currentTarget))
                        })).on("mouseenter", ".ch-item", (function() {
                            var t = s(this),
                                e = t.find(".ch-item-info");
                            t.find(".ch-item-header").width() - (t.find(".ch-item-author").width() + e.width()) < t.find(".js-actions").width() && e.addClass("js-hidden")
                        })).on("mouseleave", ".ch-item", (function() {
                            s(this).find(".ch-item-info").removeClass("js-hidden")
                        })), this._$input = s(), !this.isEmbedded()) {
                        if (this._bridge && this._bridge.$headerspace)
                            if (this.isPrivate() || this.isStandalone() || (this._$mentionsButton = s('<a class="button apply-common-tooltip" title="' + i(777754).t(null, void 0, i(766178)) + '" data-role="button" data-name="mentions"></a>').append(s(i(844786)).attr({
                                    width: 17,
                                    height: 17
                                })).appendTo(this._bridge.$headerspace), this._$mentionsButton.on("click", (function(t) {
                                    return e.toggleMentionsOnly(), !1
                                }))), this._bridge.hideMaximize || (this._bridge.options || {}).hideMaximize || "function" != typeof this._bridge.toggleMaximize || (this._$maximizeButton = s('<a class="button apply-common-tooltip" title="' + i(777754).t(null, void 0, i(720365)) + '" data-role="button" data-name="maximize"></a>').append(s(i(216413)).attr({
                                    width: 8,
                                    height: 18
                                })).appendTo(this._bridge.$headerspace), this._$maximizeButton.on("click", (function(t) {
                                    e._bridge.toggleMaximize(), t.preventDefault()
                                })), this._bridge.hideDetach || this._$maximizeButton.addClass("button-half"), this._bridge.maximized && (this._onMaximized = function(t) {
                                    e._$maximizeButton.toggleClass("active", !!t), e.resizeHeader(), e.resize()
                                }, this._bridge.maximized.subscribe(this._onMaximized), this._bridge.maximized.value() && this._$maximizeButton.addClass("active"))), this._bridge.hideDetach || (this._$detachButton = s('<a class="button apply-common-tooltip svg-detach" title="' + i(777754).t(null, void 0, i(306038)) + '" data-role="button" data-name="detach"></a>').append(s(i(772501)).attr({
                                    width: 10,
                                    height: 10
                                })).appendTo(this._bridge.$headerspace), this._$detachButton.on("click touchend", (function(t) {
                                    t.preventDefault(), ut.openBoundWindow({
                                        roomId: e.currentRoom(),
                                        isPrivate: function() {
                                            return e.isPrivate()
                                        }
                                    })
                                })), this._$maximizeButton && this._$detachButton.addClass("button-half button-nomarginleft")), this.isPrivate()) {
                                var o = this._bridge.isAuthor ? i(777754).t(null, void 0, i(293643)) : i(777754).t(null, void 0, i(615880));
                                this._$addButton = s('<a class="button apply-common-tooltip" id="add-people" title="' + o + '" data-role="button" data-name="add-people">').append(s(i(384998)).attr({
                                    width: 17,
                                    height: 17
                                })).append(s('<span class="msg-window-members-count">').text(e._bridge.membersCount())).prependTo(this._bridge.$headerspace), this._$addButton.on("click", (function(t) {
                                    t.preventDefault(), e._bridge.addPeople()
                                }))
                            }
                        this._$inputWrap = s('<div class="ch-input">').appendTo(this._$widget), this._$progressBarWrap = s('<div class="progress-bar-wrap">').appendTo(this._$inputWrap), this._$progressBar = s('<div class="progress-bar">').appendTo(this._$progressBarWrap), this._$input = s('<div class="wrap">').appendTo(this._$inputWrap), this._$inputDisabledMessage = s('<div class="ch-disabled-message">' + i(777754).t(null, void 0, i(187513)) + "</div>").prependTo(this._$inputWrap), this._$invalidLinkMessage = s('<div class="ch-disabled-message">' + i(777754).t(null, void 0, i(541392)) + "</div>").prependTo(this._$inputWrap), this._$inputSnapshotLink = s('<div class="ch-snapshot-link"><a><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="Screenshot preview"></a><i class="icon icon-snapshot-small" title="Chart Snapshot"></i> <a target="_blank">' + i(777754).t(null, void 0, i(645888)) + '</a><i class="icon icon-snapshot-delete" title="' + i(777754).t(null, void 0, i(614319)) + '"></i> </div>').prependTo(this._$inputWrap), this._$inputSnapshotLink.find(".icon-snapshot-delete").on("click", this.attachSnapshot.bind(this)),
                            this._$inputEditSizer = s('<div class="ch-textarea-sizer"></div>').appendTo(this._$input);
                        var n = this.isPrivate() ? i(777754).t(null, void 0, i(146686)) : i(777754).t(null, void 0, i(757808));
                        this._$inputEdit = s('<textarea class="message-input" autocomplete="off" enterkeyhint="send"></textarea>'), this._$inputEdit.appendTo(this._$inputEditSizer), r(this._$inputEdit), this._$inputEdit.on("autosize:resized", (function() {
                            var t = e._$inputEdit.height();
                            if (t !== e._header_height) {
                                var i = e._$inputEdit.outerHeight();
                                e._header_height = t, e._$input.height(i), e.resizeHeader()
                            }
                        })), this._$inputEdit.attr("placeholder", n), c(this._getHintListOptions()).then((function(t) {
                            e._hintListElement = t;
                            var i = e._$container.parent().parent();
                            s(e._hintListElement).appendTo(i), e._$inputEdit[0].addEventListener("keydown", (function(t) {
                                var i = rt(t);
                                if (i !== dt.ENTER || t.defaultPrevented || (t.preventDefault(), e.post()), i === dt.ENTER + ht.Mod || i === dt.ENTER + ht.Shift) {
                                    t.preventDefault();
                                    var s = e._$inputEdit.val(),
                                        o = e._$inputEdit.prop("selectionStart");
                                    e._$inputEdit.val(s.slice(0, o) + "\n" + s.slice(o)).putCursorAtPosition(o + 1), r.update(e._$inputEdit)
                                }
                            })), e._$inputEdit[0].addEventListener("paste", (function() {
                                setTimeout((function() {
                                    e.checkInput()
                                }), 0)
                            }))
                        })), this._$snapshotButton = s('<span class="ch-snapshot-button" title="' + i(777754).t(null, void 0, i(549428)) + '"></span>').append(s(i(661963)).attr({
                            width: 16,
                            height: 13
                        })).on("click", this.attachSnapshot.bind(this)).on("contextmenu", (function(t) {
                            t.preventDefault()
                        })).appendTo(this._$inputEditSizer), this._$smilesButton = s('<span class="ch-smiles-button" title="' + i(777754).t(null, void 0, i(767217)) + '"></span>').append(s(i(505895)).attr({
                            width: 15,
                            height: 14
                        })).on("click", this.showSmilesPopup.bind(this)).on("contextmenu", (function(t) {
                            t.preventDefault()
                        })).appendTo(this._$inputEditSizer), this._bridge && this._bridge.getChartWidget && this._bridge.getChartWidget() || (this._$snapshotButton.hide(), this._$smilesButton.addClass("off-chart")), this._scroll = new k(this._$scrollContainer[0], this._$data[0], {
                            vAlignBottom: !0,
                            headerHeight: 0
                        }), this._onBridgeVisibleChange = function(t) {
                            if (t) {
                                if (setTimeout((function() {
                                        e._model && e._model.setActive(t)
                                    }), 1e3), !e.isPrivate()) {
                                    var i = e._model.room();
                                    e._model.setRoom(""), e.updateRoom(i)
                                }
                            } else e._model.setActive(t);
                            t && e.isPrivate() && e._model.setMessagesRead(), t && (e._$inputEdit && r.update(e._$inputEdit), e.resizeHeader(), e._notInitialVisible || (e._scroll.scrollToEnd(), e._notInitialVisible = !0), e.inputEditFocus())
                        }, this._bridge.visible.subscribe(this._onBridgeVisibleChange), s(window).on("visibilitychange", (function(t, i) {
                            i && e.inputEditBlur()
                        })), this._bridge.visible.value() && (this._notInitialVisible = !0), this._scroll.scrolltostart.subscribe(this, (function() {
                            e._model.isHistoryLoading() || e._isHistoryEnded || e._init_history_loading || e._loadChatHistory()
                        })), is_authenticated && user && user.is_moderator && this.prepareModeratorLayout(), this.sound = new l.ChatSoundControl(this.isPrivate() ? "privatemessages.sound" : "chat.sound"), this.progressBar = new l.ChatProgressBar(this._$progressBar, 200, 90, 5, [200, 200, 400])
                    }
                }, ut.prototype._getHintListOptions = function() {
                    var t = this,
                        e = this.isStandalone() ? this._$container.parent()[0] : this._$container.parent().parent().parent()[0];
                    return {
                        fullBorder: !0,
                        maxItems: 5,
                        suggestLimit: 5,
                        className: a.userNameHintList,
                        closeOnMouseOutClick: !0,
                        input: this._$inputEdit[0],
                        container: e,
                        onItemSelected: function(e, i, s) {
                            t._$inputEdit.val(i).putCursorAtPosition(s), r.update(t._$inputEdit)
                        }
                    }
                }, ut.prototype.prepareModeratorLayout = function() {
                    this._$warningTemplates = s('<a class="ch-button ch-warning-templates-button" title="' + i(777754).t(null, void 0, i(575271)) + '"><i>' + i(138581) + "</i></a>").on("click", this.warningTemplatesPopup.bind(this)).insertBefore(this._$inputEditSizer), this._$widget.addClass("moderator-layout"), this._$inputEdit.on("autosize:resized", function() {
                        this._$inputEdit && this._$warningTemplates.height(this._$inputEdit.height() + 2)
                    }.bind(this)), B(this._$warningTemplates, null, {
                        event: "show-popup",
                        hideEvent: "hide-popup",
                        addClass: "ch-popup ch-warning-templates-popup",
                        careRightBorder: !0,
                        viewportSpacing: 2,
                        reverse: !0,
                        popupDrift: 68
                    })
                }, ut.prototype.warningTemplatesPopup = function(t) {
                    var e = x().map(function(t) {
                        return {
                            title: t.name,
                            action: this.initMessageTypeWarning.bind(this, t.text, t.id)
                        }
                    }.bind(this));
                    e.push({
                        title: i(777754).t(null, void 0, i(610264)),
                        action: this.initMessageTypeWarning.bind(this, "", null)
                    }), e.push({
                        separator: !0
                    }), e.push({
                        title: i(777754).t(null, void 0, i(620036)),
                        action: this.resetMessageType.bind(this)
                    }), s(t.target).trigger("show-popup", [e]), t.stopPropagation()
                }, ut.prototype.initMessageTypeWarning = function(t, e) {
                    (t = (this._$inputEdit.val() ? this._$inputEdit.val() + " " : "") + t) && (this._$inputEdit.val(t), r.update(this._$inputEdit).putCursorAtEnd()), this._$inputWrap.addClass("custom-message-warning"), setTimeout(function() {
                        this._$warningTemplates.addClass("active")
                    }.bind(this), 0), this._messageType = "warning", this._warningType = e
                }, ut.prototype.resetMessageType = function(t) {
                    this._$inputWrap[0].className = this._$inputWrap[0].className.replace(/\bcustom-message-.*?\b/g, ""), this._$warningTemplates.removeClass("active"), delete this._messageType, delete this._warningType
                }, ut.prototype._showSettingsDialog = function(t, e) {
                    return s(t.delegateTarget).hasClass("open") ? (s(t.delegateTarget).trigger("hide-popup"), !1) : (new l.ChatSettingsDialog(this._bridge, (function(e, i) {
                        s(t.delegateTarget).trigger("show-popup", [e, i])
                    }), e || this._model.getRooms()), t.preventDefault(), !1)
                }, ut.prototype.editRoom = function(t) {
                    i(351507).prototype.showEditRoomDialog.call(this, t)
                }, ut.prototype.deleteRoom = function(t) {
                    var e = this;
                    E({
                        text: i(777754).t(null, void 0, i(255905)).format({
                            name: t.title
                        }),
                        onConfirm: function(s) {
                            return new Promise((function(o) {
                                e._model.deleteRoom(t.room_id, (function(t) {
                                    o(), s.dialogClose(), t.error && I({
                                        title: i(777754).t(null, void 0, i(482751)),
                                        content: t.error
                                    })
                                }))
                            }))
                        }
                    })
                }, ut.prototype.saveInputText = function() {
                    var t = this._$inputEdit.val().trim();
                    t && (window.user._chatInputs[this.currentRoom()] = t)
                }, ut.prototype.restoreInputText = function() {
                    this.currentRoom() in window.user._chatInputs && (this._$inputEdit.val(window.user._chatInputs[this.currentRoom()]), r.update(this._$inputEdit),
                        delete window.user._chatInputs[this.currentRoom()])
                }, ut.prototype.selectChannel = function(t) {
                    if (!this._checkRoom(t)) throw new Error("Chat room not found");
                    if (this._roomTitle = this.getRoomTitle(t), this._bridge && this._bridge.properties && this._bridge.properties.setValue) {
                        var e = this._bridge.properties.value() || {};
                        e.room = t, this._bridge.properties.setValue(e)
                    }
                    this.updateRoom(t)
                }, ut.prototype._checkRoom = function(t) {
                    return !!(this._model.getRoomById(t) || t.match(/pm_*/) || t.match(/live_*/))
                }, ut.prototype.getText = function(t) {
                    return this._$inputEdit.val() || t
                }, ut.prototype.clearInput = function() {
                    this._$inputEdit.val("")
                }, ut.prototype.post = function(t) {
                    var e = this,
                        s = e._postMeta || {
                            text: ""
                        };
                    if (this.checkInput(), !this._inputDisabled) {
                        var o = this.currentRoom(),
                            n = this._model.getRoomById(o);
                        e._sheduledSending = function() {
                            var a = t || e._$inputEdit.val();
                            if (!a && !s.text) return !1;
                            e._$inputEdit.val(""), r.update(e._$inputEdit), "snapshot" !== s.type && a && e.inputEditFocus();
                            var d = {};
                            e._messageType && (d.messageType = e._messageType, e._warningType && (d.warningType = e._warningType), e.resetMessageType());
                            var l = (new Date).getTime();
                            e.progressBar.start(l), e._model.sendMessageToRoom(o, a, s, d, (function(t) {
                                var o = t.error || t.warning;
                                if (o) {
                                    var d = t.title;
                                    let s;
                                    t.code === F && (s = O(o, N.CreateMessageChat), H(N.CreateMessageChat, V.Open)), "phone_not_verified" === t.code ? (e.inputEditBlur(), e._$inputEdit.val(a), r.update(e._$inputEdit), e.progressBar.finishOnError(l)) : h({
                                        title: t.error ? d || i(777754).t(null, void 0, i(482751)) : d || i(777754).t(null, void 0, i(533603)),
                                        html: s || o,
                                        onClose: function() {
                                            e.inputEditFocus()
                                        }
                                    }).then((function() {
                                        e.inputEditBlur(), e._$inputEdit.val(a), r.update(e._$inputEdit), e.progressBar.finishOnError(l)
                                    }))
                                } else e.progressBar.finish(l), z(n, a, s)
                            }), (function() {
                                e.progressBar.finishOnError(l), I({
                                    title: i(777754).t(null, void 0, i(482751)),
                                    content: i(777754).t(null, void 0, i(744268))
                                }), e._$inputEdit.val(a), r.update(e._$inputEdit)
                            })), e._postMeta = null, e._$snapshotButton.removeClass("active"), e._$inputSnapshotLink.hide(), e.resizeHeader()
                        };
                        var a = {
                            source: "Chat post message",
                            sourceMeta: this.getChartWidgetCollection() ? "Chart" : null,
                            verifiedPhoneRequired: !0,
                            doNotCheckSuspicious: !0
                        };
                        return runOrSignIn((function() {
                            e._sheduledSending && e._sheduledSending(), e._sheduledSending = null
                        }), a), !1
                    }
                }, ut.prototype.resize = function(t) {
                    this._scroll.resize(), this._$inputEdit && r.update(this._$inputEdit)
                }, ut.prototype.updateTitle = function(t) {
                    this._bridge && this._bridge.setTitle && this._bridge.setTitle(this._roomTitle)
                }, ut.prototype.validateLanguageCheck = function(t) {
                    var e = !1;
                    if ("en" === window.language) {
                        var i = this._model.getRoomById(this.currentRoom());
                        e = !!i && !!i.pinned && !L(t)
                    }
                    return e
                }, ut.prototype.checkInput = function() {
                    var t = this._$inputEdit.val(),
                        e = this.validateLanguageCheck(t),
                        i = at(t);
                    this._$inputEdit.toggleClass("disabled", e || !i), this._$inputDisabledMessage.toggle(e), this._$invalidLinkMessage.toggle(!i), e !== this._inputDisabled && this.resizeHeader(), this._inputDisabled = e || !i
                }, ut.prototype.resizeHeader = function() {
                    this._$scrollContainer.css("bottom", this._$inputWrap.outerHeight()), this._scroll.resize()
                },
                ut.prototype.getChartWidgetCollection = function() {
                    return this._bridge && this._bridge.getChartWidgetCollection && this._bridge.getChartWidgetCollection()
                }, ut.prototype.attachSnapshot = function() {
                    var t = this,
                        e = this.getChartWidgetCollection();
                    if (e) {
                        if (t._postMeta) t._postMeta = null, t._$snapshotButton.removeClass("active"), t._$inputSnapshotLink.hide(), t.resizeHeader();
                        else {
                            var s = function() {
                                    t._$snapshotButton.removeClass("loading")
                                },
                                o = {
                                    previews: ["thumb"],
                                    onInvalidSnapshotImage: s
                                };
                            t._$snapshotButton.addClass("loading"), b(e, (function(e) {
                                var s = U.createSnapshotImageUrls(e);
                                t._postMeta = {
                                    text: i(777754).t(null, void 0, i(511938)),
                                    url: s.url,
                                    preview_url: s.preview,
                                    type: "snapshot"
                                }, t._$snapshotButton.removeClass("loading").addClass("active");
                                var o = t._$inputSnapshotLink.show().find("a");
                                o.attr("href", s.url), Q({
                                    elem: o,
                                    type: "image",
                                    live: !1
                                }), t._$inputSnapshotLink.find("img").attr("src", s.url).on("load", t.resizeHeader.bind(t)), t.inputEditFocus()
                            }), s, o)
                        }
                        return !1
                    }
                }, ut.prototype.toggleSnaphotPreview = function(t) {
                    this._showSnapshotPreview = void 0 !== t ? t : !this._showSnapshotPreview, TVSettings.setValue("chat.show_snapshot_preview", this._showSnapshotPreview), this._$widget.toggleClass("show-snapshot-preview", this._showSnapshotPreview), this.resize()
                }, ut.prototype.toggleHighlightUserMessages = function(t) {
                    var e = t.attr("class").match(/ch-item-user-(\d+)/)[1],
                        i = !t.hasClass("ch-highlight-user");
                    s(".ch-item").removeClass("ch-highlight-user"), e && i && this._$data.find(".ch-item-user-" + e).addClass("ch-highlight-user")
                }, ut.prototype.destroy = function() {
                    this._isHistoryEnded = !0, this.isPrivate() && this.saveInputText(), this._sheduledSending && (this._sheduledSending(), this._sheduledSending = null), this._model.messageReceived().unsubscribe(this, this._onMessageWrapper), this._model.messageDeleted().unsubscribe(this, this._onMessageDeleted), this._model.roomChanged().unsubscribe(this, this._onRoomChanged), this._model.destroy(), this._model = null, window.loginStateChange.unsubscribeAll(this), this._scroll.scrolltostart.unsubscribeAll(this), this._bridge.visible.unsubscribe(this._onBridgeVisibleChange), this._bridge.symbol && this._onSymbolChanged && this._bridge.symbol.unsubscribe(this._onSymbolChanged), this._bridge.interval && this._onIntervalChanged && this._bridge.interval.unsubscribe(this._onIntervalChanged), this._bridge.height && this._onResize && this._bridge.height.unsubscribe(this._onResize), this._bridge.width && this._onResize && this._bridge.width.unsubscribe(this._onResize), this._bridge.maximized && this._onMaximized && this._bridge.maximized.unsubscribe(this._onMaximized), this.destroyLikesHandlers(), j.jQueryCompatibleDestroy(this._$data), this.sound.destroy(), this._bridge && this._bridge.$headerspace && this._bridge.$headerspace.empty(), p(this._hintListElement)
                }, ut.openBoundWindow = function(t) {
                    var e = "";
                    e = t.isPrivate() ? "/chat/" + t.roomId + "/" : "/chat/#" + t.roomId, w.open({
                        url: e,
                        parameters: {
                            menubar: !1,
                            location: !1,
                            status: !1,
                            directories: !1,
                            width: 470,
                            height: 600
                        }
                    }), P("GUI", "Chat Detached")
                }, ut.prototype.toggleMentionsOnly = function() {
                    this._mentionsOnly = !this._mentionsOnly, this._$data.toggleClass("mentions-only"),
                        this._scroll.scrollToEnd(), this._$mentionsButton.toggleClass("active")
                }, ut.prototype.showSmilesPopup = function(t) {
                    var e = this,
                        i = s('<div class="ch-smiles-popup">').appendTo(document.body);
                    A.each((function(t) {
                        if (t.showInPopUp) {
                            var e = s('<div class="emoji-container js-emoji" title="' + t.code + '">');
                            e.data("code", t.code), e.append(A.getElement(t)), e.appendTo(i)
                        }
                    })), i.on("click", ".js-emoji", (function(t) {
                        var o = e._$inputEdit.val(),
                            n = e._$inputEdit.prop("selectionStart"),
                            a = n > 0 && " " !== o.charAt(n - 1) ? " " : "",
                            r = n < o.length && " " !== o.charAt(n) ? " " : "";
                        e.insertAtCursorPosition(a + s(t.target).closest(".js-emoji").data("code") + r), i.remove()
                    }));
                    var o = this._$smilesButton.offset(),
                        n = this._$smilesButton.outerWidth(),
                        a = this._$smilesButton.outerHeight(),
                        r = o.top + a / 2,
                        h = o.left + n / 2,
                        d = 15,
                        l = i.outerHeight(),
                        c = i.outerWidth(),
                        u = "top",
                        p = !0,
                        m = h - c / 2,
                        g = s(document).width(),
                        _ = s(window).width();
                    m + c + 10 > _ && (m = _ - (c + 10), g - h < 20 && (p = !1, d = 10));
                    var v = r + d,
                        f = s(window).height(),
                        b = s(window).scrollTop(),
                        y = s(window).scrollLeft();
                    v - b + l + d > f && (v = r - l - d, u = "bottom"), p && s('<div class="ch-smiles-caret ch-smiles-caret-' + u + '">').css("left", h - m - y).prependTo(i), i.css({
                        left: m + y,
                        top: v
                    }).on("mousedownoutside", (function() {
                        i.remove()
                    }))
                }, ut.prototype.inputEditFocus = function() {
                    lt || this._noAutoFocus || this._$inputEdit && this._$inputEdit.focus()
                }, ut.prototype.inputEditBlur = function() {
                    this._$inputEdit && this._$inputEdit.blur()
                }, ut.getLaunchInSeparateWindowAction = function(t, e) {
                    return {
                        title: i(777754).t(null, void 0, i(655721)),
                        action: function() {
                            ut.openBoundWindow({
                                roomId: t,
                                isPrivate: e
                            })
                        }
                    }
                }, ut.prototype.destroyLikesHandlers = function() {
                    this._chartLikesHandler && this._chartLikesHandler.destroy(), this._snapshotMessagesLikesHandler && this._snapshotMessagesLikesHandler.destroy()
                }, ut.prototype.updateLikesHandlers = function() {
                    this.destroyLikesHandlers(), this._chartLikesHandler = l.ChatLikesHandler.getChartsHandler(), this._snapshotMessagesLikesHandler = l.ChatLikesHandler.getMessagesSnapshotsHandler()
                }, t.exports = ut
        },
        94683: (t, e, i) => {
            "use strict";
            i.d(e, {
                trackChatEvent: () => c
            });
            var s = i(345848),
                o = i(660512);
            const n = /((https?:\/\/)|(www\.))(-\.)?([^\s/?.#]+\.)+([^\s<>]*)?/g,
                a = /^(https?:\/\/).*tradingview.com/,
                r = /tradingview.com\/(chart|script)\//,
                h = /(image|i)\/([0-9a-zA-Z]{8})\/$/,
                d = /x\/([0-9a-zA-Z]{8})\/(.+?)?\/?$/,
                l = /^pm_.{16}/;

            function c(t, e, i) {
                const c = l.test(t.room_id),
                    u = c ? "pm" : "public chat",
                    p = function(t) {
                        const e = [];
                        return o.emoji.each((i => {
                            t.search(i.re) >= 0 && e.push(i.code)
                        })), e
                    }(e),
                    m = p.length > 0,
                    g = function(t) {
                        const e = {
                                snapshot: 0,
                                chart: 0,
                                internal: 0,
                                external: 0
                            },
                            i = t.match(n);
                        return null !== i && i.forEach((t => {
                            a.test(t) ? d.test(t) || h.test(t) ? e.snapshot++ : r.test(t) ? e.chart++ : e.internal++ : e.external++
                        })), e
                    }(e);
                e && c ? (0, s.trackEvent)("Chat", `Send message to ${u}`) : e && !c && (0, s.trackEvent)("Chat", `Send message to ${u}`, String(t.title)), (i && "snapshot" === i.type || g.snapshot > 0) && (0, s.trackEvent)("Chat", "Send chart snapshot", u), g.chart > 0 && (0, s.trackEvent)("Chat", "Send chart link", u), g.internal > 0 && (0, s.trackEvent)("Chat", "Send internal link", u), g.external > 0 && (0, s.trackEvent)("Chat", "Send external link", u), m && p.forEach((t => {
                    (0,
                        s.trackEvent)("Chat", "Send emoji", t)
                }))
            }
        },
        161088: (t, e, i) => {
            "use strict";
            var s = i(823127),
                o = i(953816).openIgnoreUsersDialog,
                n = i(514262).whenVerified,
                a = i(983772),
                r = i(627025).regExpEscape,
                h = i(226722).TVXWindowEvents,
                d = i(868151).appendEllipsis,
                l = i(890740).fetch;

            function c(t, e, i, s, o) {
                this._$bar = t, this._value = 0, this._state = "off", this._halt = i, this._tick = s, this._step = this._halt * this._tick / e, this._animations = o
            }

            function u(t, e, s) {
                var o = i(351507);
                this._bridge = t, this._handler = e, this._rooms = s, this.favoritesSettings = o.prototype.getLocalizedJsonSetting("publiccharts.favorites", {}), this.state = {
                    slowMode: !1
                }, this.getAsyncState().then((t => {
                    this.state = { ...this.state,
                        ...t
                    }, this._handler(this.getMenu())
                }))
            }

            function p(t) {
                this._title = i(777754).t(null, void 0, i(416449)), this._settingsKey = "messages.show_onsite_notifications", this._eventKey = "messages.toggleonsitenotifications", t ? (this._emailKey = "privatemessages.send_email_notifications", this._emailTitle = i(777754).t(null, void 0, i(269299))) : (this._emailKey = "publicchats.send_email_notifications", this._emailTitle = i(777754).t(null, void 0, i(341074))), this._isOn = TVSettings.getBool(this._settingsKey, !0), this._isOnEmail = TVSettings.getBool(this._emailKey, !0), h.on(this._eventKey, this._toggle.bind(this))
            }

            function m(t) {
                this._settingsKey = t, this.state = this._getState(), this._updateSettingsListener = this._setFromAnother.bind(this), h.on("chat-sound-control-changed", this._updateSettingsListener), loginStateChange.subscribe(null, this._updateSettingsListener)
            }

            function g(t, e) {
                this.parentWidget = t, this.isParentDependent = e, this.isOn = !1
            }

            function _(t) {
                this.voteSender = t, this.ideas = []
            }
            c.prototype.start = function(t) {
                    "running" === this._state && this.stop(), this._transaction = t, this._$bar.css("opacity", "1"), this._$bar.css("background-color", "#18BE8A"), this._state = "running", this._intervalID = setInterval(this.update.bind(this), this._tick)
                }, c.prototype.stop = function() {
                    clearInterval(this._intervalID), this._value = 0
                }, c.prototype.update = function() {
                    this._value >= this._halt ? this.stop() : "running" === this._state && (this._value += this._step, this._$bar.width(this._value + "%"))
                }, c.prototype.finish = function(t, e) {
                    "off" !== this._state && this._transaction === t && (this.stop(), this.transaction = -1, e && this._$bar.css("background-color", "red"), this._state = "off", this._$bar.animate({
                        width: "100%"
                    }, this._animations[0]), this._$bar.animate({
                        opacity: "0"
                    }, e ? this._animations[2] : this._animations[1], function() {
                        this._$bar.width(0)
                    }.bind(this)))
                }, c.prototype.finishOnError = function(t) {
                    this.finish(t, !0)
                }, u.prototype.soundSettings = [{
                    title: i(777754).t(null, void 0, i(464142)),
                    state: {
                        onMessage: !0,
                        onMessageForUser: !0
                    }
                }, {
                    title: i(777754).t(null, void 0, i(285022)),
                    state: {
                        onMessage: !1,
                        onMessageForUser: !0
                    }
                }, {
                    title: i(777754).t(null, void 0, i(550420)),
                    state: {
                        onMessage: !1,
                        onMessageForUser: !1
                    }
                }], u.prototype.getAsyncState = function() {
                    return new Promise((t => {
                        !this._bridge.private_chat && window.is_authenticated && window.user.permissions.can_moderate_public_chats ? l(`/chats/public/state/${this._bridge._room}/`).then((t => {
                            if (t.ok) return t.json()
                        })).then((e => {
                            e && void 0 !== e.slow_mode ? t({
                                slowMode: e.slow_mode
                            }) : t(this.state)
                        })) : t(this.state)
                    }))
                }, u.prototype.toggleSlowMode = function() {
                    const t = {
                        slow_mode: !this.state.slowMode
                    };
                    l(`/chats/public/state/${this._bridge._room}/`, {
                        method: "POST",
                        body: JSON.stringify(t)
                    })
                }, u.prototype.getMenu = function() {
                    var t = [],
                        e = this,
                        s = i(511497),
                        n = i(351507);
                    if (this._bridge.private_chat && !this._bridge.standalone && (t = t.concat(this._bridge.privateMenuItems().multiUserActions)).length && t.push({
                            separator: !0
                        }), (t = t.concat(this.soundMenuItems(this.soundSettings, TVSettings.getJSON(this._bridge.private_chat ? "privatemessages.sound" : "chat.sound", m.prototype._default_state)))).push({
                            separator: !0
                        }), this._bridge.standalone || this._bridge.options && this._bridge.options.layoutWithSelect || (this._bridge.private_chat || t.push(this._bridge.chatNotificationControl.onsiteMenuItem()), t.push(this._bridge.chatNotificationControl.emailMenuItem()), t.push({
                            separator: !0
                        })), t.push({
                            title: i(777754).t(null, void 0, i(613531)),
                            icon: {
                                image: "url('/static/images/dialogs/checkbox.png')",
                                offset: TVSettings.getBool("chat.show_snapshot_preview") ? "0 -16px" : void 0
                            },
                            action: function(t) {
                                this._bridge.postMessage("toggle_snaphot_preview")
                            }.bind(this)
                        }), !this._bridge.private_chat && window.is_authenticated && window.user.permissions.can_moderate_public_chats && t.push({
                            title: i(777754).t(null, void 0, i(569920)),
                            icon: {
                                image: "url('/static/images/dialogs/checkbox.png')",
                                offset: this.state.slowMode ? "0 -16px" : void 0
                            },
                            action: () => this.toggleSlowMode()
                        }), this._bridge.private_chat || this._bridge.standalone || t.push({
                            title: i(777754).t(null, void 0, i(930863)),
                            icon: {
                                image: "url('/static/images/dialogs/checkbox.png')",
                                offset: TVSettings.getBool("chat.show_only_favorites") ? "0 -16px" : void 0
                            },
                            action: function(t) {
                                this._bridge.postMessage("toggle_show_only_favorites")
                            }.bind(this)
                        }), this._bridge.private_chat && t.push({
                            title: i(777754).t(null, void 0, i(793242)),
                            icon: {
                                image: "url('/static/images/dialogs/checkbox.png')",
                                offset: TVSettings.getBool("chat.show_unread_top") ? "0 -16px" : void 0
                            },
                            action: function(t) {
                                this._bridge.postMessage("toggle_show_unread_top")
                            }.bind(this)
                        }), t.push({
                            separator: !0
                        }), this._bridge.private_chat && !this._bridge.standalone && t.push(this._bridge.privateMenuItems().hideConversation), t.push({
                            title: d(i(777754).t(null, void 0, i(965668))),
                            action: function(t) {
                                o()
                            }
                        }), !this._bridge.standalone) {
                        for (var a, r = (!this._bridge.private_chat && this._bridge._room in this.favoritesSettings), h = 0; h < this._rooms.length; h++)
                            if (this._rooms[h].room_id === this._bridge._room) {
                                a = this._rooms[h];
                                break
                            }
                        if (a) {
                            t.push({
                                separator: !0
                            });
                            var l = s.getLaunchInSeparateWindowAction(e._bridge._room, (function() {
                                return !!e._bridge.private_chat
                            }));
                            this._bridge.private_chat ? t.push(l) : (a.pinned || t.push({
                                title: r ? i(777754).t(null, void 0, i(823057)) : i(777754).t(null, void 0, i(445847)),
                                action: function(t) {
                                    this._bridge.postMessage("toggle_favorite_room", t)
                                }.bind(this, this._bridge._room)
                            }), (t = t.concat(n.publicMenuItems(this._bridge._room, this._bridge))).push(l), a.pinned || ((a.user_id === user.id || window.user.permissions.can_moderate_public_chats) && t.push({
                                title: d(i(777754).t(null, void 0, i(446315))),
                                action: function(t) {
                                    this._bridge.postMessage("chat_edit_room", this._bridge._room)
                                }.bind(this)
                            }), window.user.permissions.can_moderate_public_chats && t.push({
                                title: i(777754).t(null, void 0, i(177517)),
                                action: function(t) {
                                    this._bridge.postMessage("chat_delete_room", this._bridge._room)
                                }.bind(this)
                            })))
                        }
                    }
                    return t
                }, u.prototype.update = function() {
                    this._handler(this.getMenu(), !0)
                }, u.prototype._radioIcon = "data:image/gif;base64,R0lGODlhBgAGAMIGAIuMjo+QkpOUlrS1tra2uLe4uf///////yH5BAEKAAcALAAAAAAGAAYAAAMQeCVSRyACEiQIVYZhx2NOAgA7", u.prototype.soundMenuItems = function(t, e) {
                    return "boolean" == typeof e && (e = s.extend(m.prototype._default_state, {
                        onMessage: e
                    })), t.map(function(t) {
                        var i = !0;
                        for (var s in e)
                            if ((s in t.state || !e[s]) && t.state[s] !== e[s]) {
                                i = !1;
                                break
                            }
                        return t.icon = {
                            image: "url(" + this._radioIcon + ")"
                        }, t.icon.offset = i ? {
                            x: 5,
                            y: 5
                        } : {
                            x: -30,
                            y: -30
                        }, t.action = function(e) {
                            this._bridge.postMessage("chat_set_sound_state", {
                                isPrivate: !!this._bridge.private_chat,
                                state: t.state
                            })
                        }.bind(this), t
                    }.bind(this))
                }, p.prototype.destroy = function() {
                    h.off(this._eventKey, this._toggle.bind(this))
                }, p.prototype._toggle = function(t) {
                    this._isOn = "true" === t
                }, p.prototype.onsiteMenuItem = function() {
                    var t = TVSettings.getBool(this._settingsKey);
                    return t = void 0 !== t ? t : this._isOn, {
                        title: this._title,
                        icon: {
                            image: "url('" + i(762966) + "')",
                            offset: t ? "0 -16px" : void 0
                        },
                        action: function(e) {
                            this._isOn = !t, TradingView.profile && TradingView.profile.$settings.find('input[name="notification_mention_in_chat_onsite"]').prop("checked", this._isOn), TVSettings.setValue(this._settingsKey, this._isOn, {
                                forceFlush: !0
                            })
                        }.bind(this)
                    }
                }, p.prototype.emailMenuItem = function() {
                    var t = TVSettings.getBool(this._emailKey);
                    return t = void 0 !== t ? t : this._isOnEmail, {
                        title: this._emailTitle,
                        icon: {
                            image: "url('" + i(762966) + "')",
                            offset: t ? "0 -16px" : void 0
                        },
                        action: function(e) {
                            this._isOnEmail = !t, TradingView.profile && "privatemessages.send_email_notifications" !== this._emailKey && TradingView.profile.$settings.find('input[name="notification_mention_in_chat_email"]').prop("checked", this._isOnEmail), TVSettings.setValue(this._emailKey, this._isOnEmail, {
                                forceFlush: !0
                            })
                        }.bind(this)
                    }
                }, m.prototype._default_state = {
                    onMessage: !1,
                    onMessageForUser: !0
                }, m.prototype._getState = function(t) {
                    var e = s.extend({}, this._default_state),
                        i = TVSettings.getJSON(this._settingsKey, null, t);
                    return null !== i && ("boolean" == typeof i ? s.extend(e, {
                        onMessage: i
                    }) : s.extend(e, i)), e
                }, m.prototype.set = function(t) {
                    this._set(t), TVSettings.setJSON(this._settingsKey, this.state), h.emit("chat-sound-control-changed")
                }, m.prototype._setFromAnother = function() {
                    this._set(this._getState(!0))
                }, m.prototype._set = function(t) {
                    this.state = s.extend({}, this._default_state, t)
                }, m.prototype.destroy = function() {
                    this._updateSettingsListener && (h.off("chat-sound-control-changed", this._updateSettingsListener), loginStateChange.unsubscribe(null, this._updateSettingsListener))
                }, g.prototype.appendInput = function(t) {
                    this._$searchInputWrap = s('<div class="msg-input-wrap js-hidden">').appendTo(t), this._$searchInput = s('<div class="msg-input">').appendTo(this._$searchInputWrap),
                        this._$searchInputText = s('<input type="text" placeholder="' + i(777754).t(null, void 0, i(417690)) + '"></textarea>').appendTo(this._$searchInput), this._$searchInputReset = s('<a class="input-reset js-hidden">').appendTo(this._$searchInput);
                    var e = this;
                    this._$searchInputText.on("keydown", (function(t) {
                        if (13 === t.which || 38 === t.which || 40 === t.which) return !1
                    })).on("keyup", (function(t) {
                        var i = e._$searchInputText.val(),
                            o = new RegExp(i.split("").map(r).join(".*"), "i");
                        if (27 === t.which) "" === e._$searchInputText.val() && (e.isOn = !1, e._$searchInputWrap.addClass("js-hidden"), e.parentWidget.resize(), e._$searchButton.removeClass("active"), e.newRoom ? (e.parentWidget._scroll.animateTo(e.newRoom.position().top), delete e.newRoom) : e.parentWidget._scroll.restore()), e._$searchInputText.val(""), e.showRooms(), e._$searchInputReset.addClass("js-hidden");
                        else {
                            if (e.hideRooms(), 0 === e._$searchInputText.val().length) return e._$searchInputReset.addClass("js-hidden"), void e.showRooms();
                            e._$searchInputReset.removeClass("js-hidden"), e.parentWidget._scroll.scrollToStart(), e._$data.find(".title").each((function() {
                                o.test(s(this).text()) && e.canShowRoom(s(this).parent()) && s(this).parent().removeClass("js-hidden")
                            }))
                        }
                    })), this._$searchInputReset.on("click", (function(t) {
                        e._$searchInputText.val(""), e._$searchInputReset.addClass("js-hidden"), e.showRooms(), e._$searchInputText.focus()
                    }))
                }, g.prototype.appendButton = function(t) {
                    var e = this;
                    this._$searchButton = s('<a class="button apply-common-tooltip" title="' + i(777754).t(null, void 0, i(417690)) + '" data-role="button" data-name="search">').append(s(i(106535)).attr({
                        width: 17,
                        height: 17
                    })).appendTo(t), this._$searchButton.on("click", (function(t) {
                        e.isOn ? (e.isOn = !1, e._$searchButton.removeClass("active"), e._$searchInputWrap.addClass("js-hidden"), e._$searchInputText.val(""), e._$searchInputReset.addClass("js-hidden"), e.showRooms(), e.parentWidget.resize(), e.newRoom ? (e.parentWidget._scroll.animateTo(e.newRoom.position().top), e.newRoom = "") : e.parentWidget._scroll.restore()) : (e.isOn = !0, e._$searchButton.addClass("active"), e.parentWidget._scroll.save(), e._$searchInputWrap.removeClass("js-hidden"), e.parentWidget.resize(), e._$searchInputText.focus(), e._onOpenCallback && e._onOpenCallback())
                    }))
                }, g.prototype.setRoomList = function(t) {
                    this._$data = t
                }, g.prototype.setOpenCallback = function(t) {
                    this._onOpenCallback = t
                }, g.prototype.hideRooms = function() {
                    this._$data.children().addClass("js-hidden")
                }, g.prototype.showRooms = function() {
                    var t = this;
                    this._$data.children().each((function() {
                        t.canShowRoom(s(this)) && s(this).removeClass("js-hidden")
                    }))
                }, g.prototype.canShowRoom = function(t) {
                    return !t.data("hidden-conversation")
                }, g.prototype.getButton = function() {
                    return this._$searchButton
                }, g.prototype.hideInput = function() {
                    this._$searchButton.removeClass("active"), this._$searchInputWrap.addClass("js-hidden"), this._$searchInputText.val(""), this._$searchInputReset.removeClass("js-hidden"), this.showRooms(), this.parentWidget.resize()
                }, g.prototype.getInputHeight = function() {
                    return this._$searchInputWrap.hasClass("js-hidden") ? 0 : this._$searchInputWrap.outerHeight()
                },
                g.prototype.isOpen = function() {
                    return this.isOn
                }, g.prototype.setNewRoom = function(t) {
                    this.newRoom = t
                }, _._likesMonitoringModel = null, _._createLikesMonitoringModelIfNeeded = function() {
                    null === _._likesMonitoringModel && (_._likesMonitoringModel = a.makePublicModel())
                }, _.getChartsHandler = function() {
                    _._createLikesMonitoringModelIfNeeded();
                    var t = _._likesMonitoringModel;
                    return new _(t.voteForChart.bind(t))
                }, _.getMessagesSnapshotsHandler = function() {
                    _._createLikesMonitoringModelIfNeeded();
                    var t = _._likesMonitoringModel;
                    return new _(t.voteForMessageWithSnapshot.bind(t))
                }, _.prototype.getIdeaByID = function(t, e) {
                    for (var i = 0; i < this.ideas.length; i++)
                        if (this.ideas[i].id === t) return e ? i : this.ideas[i];
                    return !1
                }, _.prototype.addIdea = function(t, e, i, o, n) {
                    var a = this.getIdeaByID(e);
                    a ? a.elements.push(t) : (a = new _.Idea(e, i, o, t, n), this.ideas.push(a)), s(t).on("click", this.onClickUpdateVote.bind(this, a)), a.updateView()
                }, _.prototype.onClickUpdateVote = function(t) {
                    if (window.user.id) {
                        var e = this;
                        n({
                            showDialog: !0,
                            source: "Widgetbar vote"
                        }).done((function() {
                            if (!(t.blocked || t.voteStatus < 0)) {
                                t.blocked = !0;
                                var i = 1 - t.voteStatus;
                                e.voteSender(t, i, (function(s) {
                                    e.onData(t, i, s.score)
                                }))
                            }
                        }))
                    } else runOrSignIn(function() {
                        this.voteSender(t, 1)
                    }.bind(this), {
                        source: "Widgetbar vote",
                        verifiedPhoneRequired: !0
                    })
                }, _.prototype.onData = function(t, e, i) {
                    t.likes = i, t.voteStatus >= 0 && (t.voteStatus = e, t.blocked = !1), t.updateView(!1)
                }, _.prototype.destroy = function() {}, _.Idea = function(t, e, i, s) {
                    this.id = t, this.likes = e, this.voteStatus = i, this.elements = [s]
                }, _.Idea.prototype.updateView = function(t) {
                    var e = s(this.elements);
                    e.toggleClass("js-has-likes", !!this.likes), setTimeout(function() {
                        e.find(".js-likes-counter").text(this.likes ? this.likes : "")
                    }.bind(this), 75), e.toggleClass("active", !!this.voteStatus), t && (e.removeClass("js-like-highlight"), setTimeout((function() {
                        e.addClass("js-like-highlight")
                    }), 10))
                }, e.ChatProgressBar = c, e.ChatSettingsDialog = u, e.ChatNotificationControl = p, e.ChatSoundControl = m, e.ChatRoomListSearchFilter = g, e.ChatLikesHandler = _
        },
        334148: (t, e, i) => {
            "use strict";

            function s(t, e, s, o) {
                return Promise.all([i.e(36956), i.e(4100), i.e(50251), i.e(85783), i.e(96190), i.e(78672), i.e(35015), i.e(32999), i.e(68950), i.e(25977), i.e(39694), i.e(31549)]).then(i.bind(i, 503412)).then((i => i.showDialogImpl(t, e, s, o)))
            }
            i.d(e, {
                showDialog: () => s
            })
        },
        265570: (t, e, i) => {
            "use strict";
            i.d(e, {
                getUsernameHintList: () => a,
                getUserChatSuggestListHandler: () => r,
                destroyUsernameHintList: () => h
            });
            var s = i(50959),
                o = i(500962),
                n = i(650151);
            async function a(t) {
                const e = await Promise.all([i.e(86279), i.e(96911)]).then(i.bind(i, 820107)),
                    n = document.createElement("div");
                return o.render(s.createElement(e.UsernameHintList, t), n), n
            }
            async function r(t) {
                return (await Promise.all([i.e(86279), i.e(96911)]).then(i.bind(i, 820107))).getUserChatSuggestListHandler()
            }

            function h(t) {
                o.unmountComponentAtNode((0, n.ensureNotNull)(t))
            }
        },
        841287: (t, e, i) => {
            "use strict";
            var s = i(988411),
                o = i(869403),
                n = i(823127),
                a = i(213398);
            i(230148), i(54120);
            var r = i(171347),
                h = i(351507),
                d = i(511497),
                l = i(161088),
                c = i(265570).getUsernameHintList,
                u = i(973580).TVAction,
                p = i(263221).ContextMenuManager,
                m = i(61005),
                g = i(155040),
                _ = i(187084).newPrivateChatDialog,
                v = i(663989).SidebarCustomScroll,
                f = i(76040).bindPopupMenu,
                b = i(983772),
                y = i(779923),
                w = y.showConfirm,
                C = y.showRename,
                M = y.showWarning,
                S = i(778070);
            const {
                NotificationSettings: $
            } = i(556699);
            var x = i(488427),
                T = i(733647),
                R = i(226722).TVXWindowEvents,
                k = i(94683).trackChatEvent,
                B = i(778785).mobiletouch,
                A = i(583912).linking,
                I = i(180184).BadgeSize,
                E = i(903974).renderBadgeAccountWithoutFeaturedBroker,
                W = i(461495).getBadgeAccountTitle,
                L = i(712797).getBadgeAccountLink;
            i(393339);
            var D = "chat.show_unread_top";

            function P(t) {
                this._bridge = t, this._container = t.$body, this._visible = !1, this._notificationCount = 0, this._init_history_loaded = !1, this._unreadFlag = !1, this._model = H(), this._model.roomAdded().subscribe(this, this._onRoomAdded), this._model.roomChanged().subscribe(this, this._onRoomChanged), this._model.roomDeleted().subscribe(this, this._onRoomDeleted), this._model.roomsChanged().subscribe(this, this._onRoomsChanged), this._model.otherRoomMessagesRead().subscribe(this, this._onRoomMessagesRead), this._model.messageReceivedInOtherRoom().subscribe(this, this._onChatMessage), this._chatMaximized = new s, this.layoutWithSelect() || this._chatMaximized.subscribe((function(t) {
                    TVSettings.setValue("privatemessages.chatmaximized", t)
                })), this._standalone = !!t.standalone || !!(t.options || {}).standalone, this._layoutWithSelect = !!t.layoutWithSelect || !!(t.options || {}).layoutWithSelect, this._chatNotificationControl = new l.ChatNotificationControl(!0), this.layoutWithSelect() ? (h.prototype.prepareLayoutWithSelect.call(this, !0, this._$notAuthMessage()), this.roomChange = new o) : this.prepareLayout(), 0 !== this._model.getRooms().length && this._onRoomsChanged(this._model.getRooms(), []), this.connect(), this.resize(), t.onMessage && t.onMessage(this.onBridgeMessage.bind(this)), t.visible.subscribe(function(e) {
                    if (this._visible = e, e) {
                        this._bridge.postMessage("private_chat_visible"), this.resize();
                        var i = TVSettings.getValue("privatemessages.activechat", "");
                        this._visibilityToggled ? this._visibilityToggled = !1 : i && this.getRoomById(i) && this.openChat(i), this._model.getRooms().forEach(function(t) {
                            t._notifyFired && (n("#msg-item-" + t.room_id).highlight(1), this.isCurrentRoom(t.room_id) && n("#msg-item-" + t.room_id + " .counter").text("0").removeClass("active")), t._notifyFired = !1
                        }.bind(this)), t.notify(null, {
                            stopHighlightTab: !0,
                            force: !0
                        }), this.updateNotifications()
                    } else this._bridge.postMessage("private_chat_hidden")
                }.bind(this), {
                    callWithLast: !0
                }), t.height && t.height.subscribe(this.onWindowResize.bind(this)), t.width && t.width.subscribe(this.resizeChat.bind(this)), TradingView.messagesWidget = this, setInterval(this.checkUnreadRooms.bind(this), 1e3)
            }
            let z;

            function H() {
                return z || (z = b.makePrivateModel()), z
            }

            function N(t, e, s, o, n) {
                if (s === window.user.id) return;
                const a = function(t, e) {
                    for (var i in t) {
                        var s = t[i].members_info;
                        if (2 === s.length && (s[0].user_id === e || s[1].user_id === e)) return t[i]
                    }
                    return null
                }(t.getRooms(), s);
                var r = function(s) {
                    t.getRoomInfo(s, (function(n) {
                        k(n, e), t.sendMessageToRoom(s, e, {}, null, (function(t) {
                            var e = t.error || t.warning;
                            if (e) {
                                var n = t.title;
                                M({
                                    title: t.error ? n || i(777754).t(null, void 0, i(482751)) : n || i(777754).t(null, void 0, i(533603)),
                                    html: e
                                })
                            }
                            "function" == typeof o && o(s)
                        }), (function() {
                            M({
                                title: i(777754).t(null, void 0, i(482751)),
                                text: i(777754).t(null, void 0, i(682468))
                            })
                        }))
                    }))
                };
                "function" == typeof n && n(), a ? r(a.room_id) : t.createRoom("", "", [s], (function(t) {
                    t.error ? M({
                        title: t.errorTitle || i(777754).t(null, void 0, i(482751)),
                        html: t.error
                    }) : r(t.room.room_id)
                }))
            }
            P.prototype._emitXWindowOnNewMessagesRead = function(t) {
                    this._xWindowNewMessagesReadBuffer ? this._xWindowNewMessagesReadBuffer.push(t) : (this._xWindowNewMessagesReadBuffer = [t], setTimeout(function() {
                        var t = this._xWindowNewMessagesReadBuffer.join(":");
                        R.emit("messages.newmessagesread", t), delete this._xWindowNewMessagesReadBuffer
                    }.bind(this), 500))
                }, P.prototype.toggleUnreadTopMessages = function() {
                    this._showUnreadTopMessages = TVSettings.getBool(D), TVSettings.setValue(D, !this._showUnreadTopMessages), this._model.updateRooms()
                }, P.prototype.onBridgeMessage = function(t, e) {
                    "private_message_read" === t && this._emitXWindowOnNewMessagesRead(e.id), "toggle_show_unread_top" === t && this.toggleUnreadTopMessages()
                }, P.prototype.updateNotifications = function() {
                    var t = this._$data.find(".counter.active").length;
                    0 === t && (this._notificationCount = 0), this._bridge.notify(1, {
                        notificationValue: t,
                        clear: !t,
                        force: !0,
                        highlightTab: !1
                    })
                }, P.prototype.checkUnreadRooms = function() {
                    this._$data.find(".counter.active").length ? this._unreadFlag || (this._unreadFlag = !0, S.setTabIcon(S.TAB_ICON_URLS.UNREAD_MESSAGES)) : this._unreadFlag && (this._unreadFlag = !1, S.setTabIcon(S.TAB_ICON_URLS.DEFAULT))
                }, P.prototype.prepareLayout = function() {
                    var t = this;
                    this._$widget = n('<div class="tv-messages">').appendTo(this._container), this._$addChatButton = n('<a class="button apply-common-tooltip" title="' + i(777754).t(null, void 0, i(693049)) + '" data-role="button" data-name="new-chat">').append(n(i(2837)).attr({
                            width: 17,
                            height: 17
                        })).click((function(t) {
                            runOrSignIn(_, {
                                source: "Private message dialog",
                                verifiedPhoneRequired: !0
                            })
                        })).appendTo(this._bridge.$headerspace), this._searchFilter = new l.ChatRoomListSearchFilter(this, !0), this._searchFilter.appendButton(this._bridge.$headerspace), this._searchFilter.appendInput(this._$widget), this._$dataWrap = n('<div class="msg-data-wrap">').appendTo(this._$widget), this._$dataWrap.on("contextmenu", (function(t) {
                            t.target.classList.contains("msg-data-wrap") && t.preventDefault()
                        })), this._$data = n('<div class="msg-data">').appendTo(this._$dataWrap), this._$data.on("click", ".msg-item", (function(e) {
                            t._searchFilter && t._searchFilter.isOpen() && t._searchFilter.setNewRoom(n("#msg-item-" + n(this).data("room"))), t.openChat(n(this).data("room"))
                        })).on("contextmenu", ".msg-item", (function(e) {
                            e.preventDefault(), t.showRoomContextMenu(e, n(this).data("room"))
                        })), this._searchFilter.setRoomList(this._$data), this._searchFilter.setOpenCallback((function() {
                            t._model.loadMoreRooms(1e3)
                        })), is_authenticated || this._$notAuthMessage().appendTo(this._$data),
                        this._scroll = new v(this._$dataWrap[0], this._$data[0]), this._scroll.scrolltoend.subscribe(this, (function() {
                            this._model.loadMoreRooms()
                        }))
                }, P.prototype._onRoomAdded = function(t) {
                    if (!this._model.ignoredUsers().includes(t.user_id)) {
                        this.addRoom(t, !0);
                        var e = t.room_id;
                        this._roomToBeOpenedWhenAdded && this._roomToBeOpenedWhenAdded === e && (this._roomToBeOpenedWhenAdded = null, this._scroll.animateTo(n("#msg-item-" + e).position().top), this.openChat(e)), this.isStandalone() && this._bridge.notify(null, {
                            roomsCount: this._model.getRooms().length
                        })
                    }
                }, P.prototype._onRoomChanged = function(t) {
                    this._model.ignoredUsers().includes(t.user_id) || this.setRoomTitleById(t.room_id, this.roomTitle(t))
                }, P.prototype._onRoomDeleted = function(t) {
                    n("#msg-item-" + t.room_id).remove()
                }, P.prototype._sortRooms = function(t) {
                    return TVSettings.getBool(D) ? t.slice().sort(this._sortFilter.bind(this)) : t.slice()
                }, P.prototype._sortFilter = function(t, e) {
                    return t.new_msgs > 0 && 0 === e.new_msgs ? -1 : 0 === t.new_msgs && e.new_msgs > 0 ? 1 : t.updated > e.updated ? -1 : t.updated < e.updated ? 1 : 0
                }, P.prototype._onRoomsChanged = function(t, e) {
                    if (window.is_authenticated)
                        if (this._$data.empty(), t.length) {
                            this.isStandalone() && this._bridge.notify(null, {
                                roomsCount: t.length
                            });
                            var i = 0 === e.length && 0 !== t.length,
                                s = 0;
                            if ((t = this._sortRooms(t)).forEach((function(t) {
                                    s += this.addRoom(t, !1, i)
                                }), this), s) {
                                var o = this.layoutWithSelect() && this._bridge.activeRoom ? this._bridge.activeRoom : TVSettings.getValue("privatemessages.activechat", "");
                                i && this._visible && o && this.getRoomById(o) && this.openChat(o), i || !o || this.getRoomById(o) || this.closeChat()
                            } else this.appendPlaceholder("hidden")
                        } else this.isStandalone() ? this._bridge.notify(null, {
                            roomsCount: 0
                        }) : this.appendPlaceholder("empty");
                    else this.isStandalone() && this._bridge.notify(null, {
                        roomsCount: 0
                    })
                }, P.prototype._onChatMessage = function(t, e, i) {
                    var s = this;
                    if (!this._model.ignoredUsers().includes(t.user_id)) {
                        var o = n("#msg-item-" + e);
                        o.prependTo(this._$data), !t.type && this._model.isRoomHidden(e) && o.hasClass("js-hidden") && this._showRoom(e, o);
                        var a = o.find(".desc");
                        a.find(".last-message").text(t.username + ": " + T.removeBBCodes(t.text));
                        var r = a.find("time");
                        r.length ? x.jQueryCompatibleDestroy(r) : (r = n("<time>")).insertAfter(o.find(".js-last-message")), x.jQueryCompatibleAgoDateFormatter(r, new Date(t.time));
                        var h = t.user_id !== window.user.id,
                            d = this._model.getRoomById(e),
                            l = new $;
                        l.ready.then((function() {
                            var n = l.data.notification_popup;
                            if (h && (!s.isCurrentRoom(e) || !s._visible)) {
                                var a, r;
                                if (h && !i && !t.type && !s.isStandalone() && !s.layoutWithSelect() && n && document.hidden) d.members_info.length > 2 ? (r = s.roomTitle(d), a = t.username + ": " + T.removeBBCodes(t.text)) : (r = t.username, a = T.removeBBCodes(t.text)), g.show(r, a, t.user_pic);
                                var c = s._$data.find('div[data-room="' + e + '"] .counter'),
                                    u = parseInt(c.text(), 10);
                                c.addClass("active").text(u + 1), s._notificationCount++, o.highlight(1), s.updateNotifications();
                                var p = TVSettings.getJSON("privatemessages.sound", null),
                                    _ = t.text && T.removeBBCodes(t.text).indexOf("@" + window.user.username) > -1;
                                h && !i && (!p || p.onMessage || _ && p.onMessageForUser) && m.play("chat/popup")
                            }
                            d._notifyFired || s._visible || (s.updateNotifications(), d._notifyFired = !0)
                        }))
                    }
                }, P.prototype.connect = function() {
                    this._onXWindowChatOpen = this.onXWindowChatOpen.bind(this), this._onXWindowChatStatus = this.onXWindowChatStatus.bind(this), this._onXWindowChatVisibility = this.onXWindowChatVisibility.bind(this), this._onXWindowNewMessagesRead = this.onXWindowNewMessagesRead.bind(this), R.on("messages.newmessagesread", this._onXWindowNewMessagesRead), this.isStandalone() || (R.on("messages.openchat", this._onXWindowChatOpen), R.on("messages.chatstatus", this._onXWindowChatStatus), R.on("messages.chatvisibility", this._onXWindowChatVisibility))
                }, P.prototype.onXWindowNewMessagesRead = function(t) {
                    this._bridge.postMessage("private_chat_msgs_read", {
                        idString: t
                    })
                }, P.prototype.onXWindowChatOpen = function(t) {
                    if (this._model.getRooms().length) {
                        var e = t.indexOf(":"),
                            i = t.indexOf("@"),
                            s = t.substr(e + 1, i - e - 1);
                        this.openChat(s, !0)
                    }
                }, P.prototype.onXWindowChatStatus = function(t) {
                    if (this._model.getRooms().length) {
                        var e = t.split(":")[1];
                        n("#msg-item-" + e + " .counter").text("0").removeClass("active"), this.updateNotifications()
                    }
                }, P.prototype.onXWindowChatVisibility = function(t) {
                    if (this._model.getRooms().length) {
                        var e = t.split(":")[0],
                            i = t.split(":")[1];
                        this.getRoomById(e) && "hide" === i && this._hideRoom(e, !0)
                    }
                }, P.prototype.destroy = function() {
                    this._chatWidget && (this._chatWidget.destroy(), this._chatWidget = null), this._model.roomAdded().unsubscribe(this, this._onRoomAdded), this._model.roomChanged().unsubscribe(this, this._onRoomChanged), this._model.roomDeleted().unsubscribe(this, this._onRoomDeleted), this._model.roomsChanged().unsubscribe(this, this._onRoomsChanged), this._model.otherRoomMessagesRead().unsubscribe(this, this._onRoomMessagesRead), this._model.messageReceivedInOtherRoom().unsubscribe(this, this._onChatMessage), this._model.destroy(), this._model = null, R.off("messages.openchat", this._onXWindowChatOpen), R.off("messages.chatstatus", this._onXWindowChatStatus), R.off("messages.chatvisibility", this._onXWindowChatVisibility), R.off("messages.newmessagesread", this._onXWindowNewMessagesRead)
                }, P.prototype.removePlaceholder = function(t) {
                    t && t.find(".js-placeholder-message").remove(), this.isStandalone() ? (this._bridge.$header.show(), this._bridge.$body.find(".js-placeholder-message").remove()) : this._$data.find(".js-placeholder-message").remove()
                }, P.prototype.appendPlaceholder = function(t, e) {
                    var s, o;
                    e ? o = e : this.isStandalone() ? (this._bridge.$header.hide(), o = this._bridge.$body) : o = this._$data, "empty" === t ? s = i(777754).t(null, void 0, i(958801)) : "hidden" === t && (o.is(".chat-body") && n(document.body).addClass("no-chats"), s = i(777754).t(null, void 0, i(933004))), o.append('<div class="msg-empty tv-widget-empty-message js-placeholder-message">' + s + "</div>")
                }, P.prototype.getRoomById = function(t) {
                    return this._model.getRoomById(t)
                }, P.prototype.roomTitle = function(t, e) {
                    if (!t) return "";
                    if (t.title) {
                        var i = TradingView.clean(t.title);
                        return e ? "<strong>" + i + "</strong>" : i
                    }
                    var s, o = [];
                    t.members_info.forEach((function(t) {
                        t.username !== window.user.username && o.push(t.username)
                    }));
                    var n = o.slice(0, 4);
                    return e && (n = n.map((function(t) {
                        return "<strong>" + TradingView.clean(t) + "</strong>"
                    }))), s = n.join(", "), o.length > 4 && (s += ", +" + (o.length - 4)), s
                }, P.prototype.getRoomTitleById = function(t, e) {
                    return this.roomTitle(this.getRoomById(t), e)
                }, P.prototype.setRoomTitleById = function(t, e) {
                    e = TradingView.clean(e), this._bridge.setTitle(e), n("#msg-item-" + t + " .title").text(e)
                }, P.prototype.addRoom = function(t, e, i) {
                    var s = this._model.isRoomHidden(t.room_id);
                    s && t.new_msgs && (this._model.removeHiddenRoom(t.room_id), s = !1);
                    var o = t.last_message ? T.removeBBCodes(TradingView.clean(t.last_message)) : "",
                        r = {
                            roomId: t.room_id,
                            isHidden: s,
                            title: TradingView.clean(this.roomTitle(t)),
                            lastMessage: o
                        },
                        h = n(a.render('<div data-room="{{roomId}}"{{#isHidden}} data-hidden-conversation="true"{{/isHidden}} id="msg-item-{{roomId}}" class="msg-item{{#isHidden}} js-hidden{{/isHidden}}"><div class="title"><div>{{title}}</div><div class="js-badge-wrapper badge"></div></div><div class="desc"><span class="last-message js-last-message">{{lastMessage}}</span></div><div class="counter">0</div></div>', r));
                    if (o.length) {
                        var d = n("<time>");
                        d.insertAfter(h.find(".js-last-message")), x.jQueryCompatibleAgoDateFormatter(d, new Date(1e3 * t.updated || Date.now()))
                    }
                    this.isCurrentRoom(t.room_id) && h.addClass("active");
                    for (var l, c = n('<div class="userpics"></div>').prependTo(h), u = 0, p = 0; p < t.members_info.length; p++)
                        if ((l = t.members_info[p]).username !== window.user.username) {
                            var m = h[0].querySelector(".js-badge-wrapper");
                            t.title || 2 !== t.members_info.length || null === m || void 0 === l.badges || E(m, {
                                badges: l.badges,
                                size: I.XSmall,
                                getTitle: W,
                                getLink: L
                            }), u < 4 && (u++, n('<i class="userpic userpic-' + u + (l.online ? " online" : "") + '"><img src="' + l.user_pic + '"/></i>').appendTo(c))
                        }
                    return c.addClass("layout-" + u), e ? h.prependTo(this._$data).highlight(1) : h.appendTo(this._$data), t.new_msgs && !this.isCurrentRoom(t.room_id) && (h.find(".counter").addClass("active").text(t.new_msgs), this._notificationCount += t.new_msgs, i && (t._notifyFired = !0), this.updateNotifications()), this._$data.find(".js-placeholder-message").remove(), s ? 0 : 1
                }, P.prototype._onRoomMessagesRead = function(t) {
                    this.markChatAsRead(t.room_id), this.updateNotifications()
                }, P.prototype.markChatAsRead = function(t) {
                    var e = n("#msg-item-" + t + " .counter"),
                        i = parseInt(e.text(), 10);
                    return e.text("0").removeClass("active"), i && (this._notificationCount = Math.max(0, this._notificationCount - i)), i
                }, P.prototype.openChat = function(t, e) {
                    this._$data.find("div.msg-item").removeClass("active"), n("#msg-item-" + t).addClass("active"), this.markChatAsRead(t), (this._visible || e) && this.updateNotifications(), this.isCurrentRoom(t) || (this.layoutWithSelect() || this.flipWidgets(), this.isStandalone() && R.emit("messages.chatstatus", +new Date + ":" + t), this._bridge.setTitle(this.getRoomTitleById(t)), this.layoutWithSelect() && this._$select && this._$select.html(this.getRoomTitleById(t, !0)), this.removePlaceholder(this._$chat), this.closeChat(), this._createChatWidget(t, e), this._chatWidget.resize(), this.resize(), this.isStandalone() || TVSettings.setValue("privatemessages.activechat", t),
                        this.layoutWithSelect() || this.toggleMaximize(TVSettings.getBool("privatemessages.chatmaximized")), this.layoutWithSelect() && this.roomChange.fire(t))
                }, P.prototype.membersFilter = function(t) {
                    return t.username !== window.user.username
                }, P.prototype._membersCount = function(t) {
                    var e = this._model.getRoomById(t);
                    return e ? e.members_info.length > 2 ? e.members_info.filter(this.membersFilter).length : "" : 0
                }, P.prototype._createChatWidget = function(t, e) {
                    var i = this.layoutWithSelect() && this._bridge.$body ? this._bridge.$body : this._$chat;
                    this._$chatWidgetContainer = n('<div class="msg-window" id="msg-window-' + t + '" data-room="' + t + '"></div>').appendTo(i), this._$chatBody = n('<div class="msg-window-body chat-page"></div>').appendTo(this._$chatWidgetContainer), this.layoutWithSelect() && this._$chatBody.css("height", "100%"), this._createUsernameHint(t), this.symbolLinking = A.symbol.spawn(), this.intervalLinking = A.interval.spawn();
                    var s = this._model.getRoomById(t),
                        o = n.extend(!0, {}, this._bridge.options);
                    o.hideMaximize = o.hideMaximize || this.layoutWithSelect(), this._chatBridge = {
                        $body: this._$chatBody,
                        _room: t,
                        properties: {
                            value: function() {
                                return {
                                    room: t
                                }
                            }
                        },
                        options: o,
                        visible: this._bridge.visible,
                        $headerspace: this._bridge.$headerspace,
                        $header: this._bridge.$header,
                        private_chat: !0,
                        privateMenuItems: function() {
                            return this.getPrivateRoomActions(s)
                        }.bind(this),
                        getChartWidget: this._bridge.getChartWidget,
                        postMessage: this._bridge.postMessage,
                        onMessage: this._bridge.onMessage,
                        chatNotificationControl: this._chatNotificationControl,
                        getChartWidgetCollection: this._bridge.getChartWidgetCollection,
                        addPeople: this.addPeople.bind(this),
                        membersCount: this._membersCount.bind(this, t),
                        hideDetach: this._standalone,
                        standalone: this._standalone || this.layoutWithSelect(),
                        toggleMaximize: this.toggleMaximize.bind(this),
                        maximized: this._chatMaximized.readonly(),
                        symbol: this.symbolLinking,
                        interval: this.intervalLinking,
                        isAuthor: s.is_author
                    }, this.isStandalone() || e || (this._chatBridge.xWindowDataSync = function(e) {
                        R.emit("messages.openchat", +new Date + ":" + t + "@" + JSON.stringify(e))
                    }), this._chatWidget = new d(this._chatBridge), B || this.layoutWithSelect() || this._$chat.find(".message-input").focus()
                }, P.prototype.toggleMaximize = function(t) {
                    if ("boolean" != typeof t) t = !this._chatMaximized.value();
                    else if (t === this._chatMaximized.value()) return;
                    this._$chat.toggleClass("msg-chat-maximized", t), this._chatMaximized.setValue(t), this._chatWidget.resize()
                }, P.prototype._isCurrentUserAuthor = function(t) {
                    var e = this.getRoomById(t || this._currentRoom());
                    return window.is_authenticated && e && e.is_author
                }, P.prototype._getHintListOptions = function() {
                    return {
                        container: this._$chatWidgetContainer.parent().parent()[0],
                        input: this._$inputText[0],
                        fullBorder: !0,
                        simpleMode: !0,
                        className: r.userNameHintList,
                        closeOnMouseOutClick: !0,
                        onMouseDownOutside: function() {
                            this._$inputText.val("")
                        }.bind(this),
                        onItemSelected: function(t) {
                            this.addNewRecipient(t)
                        }.bind(this)
                    }
                }, P.prototype._createUsernameHint = function(t) {
                    var e = this._isCurrentUserAuthor(t) || window.user.is_moderator || window.user.is_staff;
                    if (this._$chatMembers = n(a.render('<div class="msg-members">{{#canEditMembers}}<div class="msg-input-wrap js-hidden"><div class="msg-input"><textarea placeholder="{{ placeholderText }}"></textarea></div></div>{{/canEditMembers}}<div class="msg-chat-members{{#canEditMembers}} msg-chat-members--height_decreased{{/canEditMembers}}"></div><div class="msg-username-hint-actions{{^canEditMembers}} msg-username-hint-actions--one-button{{/canEditMembers}}">{{#canEditMembers}}<a class="_tv-button cancel">' + i(777754).t(null, void 0, i(620036)) + '</a><a class="_tv-button ok">' + i(777754).t(null, void 0, i(758901)) + '</a>{{/canEditMembers}}{{^canEditMembers}}<a class="_tv-button cancel">' + i(777754).t(null, {
                            context: "input"
                        }, i(309633)) + "</a>{{/canEditMembers}}</div></div>", {
                            canEditMembers: e,
                            placeholderText: i(777754).t(null, void 0, i(511963))
                        })), this._$chatMembers.appendTo(this._$chatBody), this._$inputWrap = this._$chatMembers.find(".msg-input-wrap"), this._$input = this._$chatMembers.find(".msg-input"), this._$inputText = this._$chatMembers.find("textarea"), this._$chatMembersContent = this._$chatMembers.find(".msg-chat-members"), this._$membersActions = this._$chatMembers.find(".msg-username-hint-actions"), this._$chatHeadingHeaderspace = this._bridge.$headerspace, e) {
                        var s = this;
                        c(this._getHintListOptions()).then((function(t) {
                            var e = s._$chatWidgetContainer.parent().parent();
                            n(t).appendTo(e)
                        }))
                    }
                    if (e) {
                        var o = this;
                        this._$chatMembersContent.on("click", ".remove", (function(t) {
                            return t.stopPropagation(), t.preventDefault(), o.removeNewRecipient(n(this).parent().data("id")), o.syncDeleteButtonVisibility(), !1
                        }))
                    }
                    this._$membersActions.on("click", ".ok", function() {
                        var t = this._$membersActions.find(".ok");
                        t.hasClass("i-disabled") || (t.addClass("i-disabled"), this.saveRecipients(this.getCurrentRecipients()).then((function() {
                            t.removeClass("i-disabled")
                        })))
                    }.bind(this)), this._$membersActions.on("click", ".cancel", function() {
                        this._$chatHeadingHeaderspace.find("#add-people").removeClass("active"), this._$inputWrap.addClass("js-hidden"), this._$chatMembers.hide()
                    }.bind(this))
                }, P.prototype.addPeople = function() {
                    var t = this._$chatHeadingHeaderspace.find("#add-people");
                    t.hasClass("active") ? (t.removeClass("active"), this._$inputWrap.addClass("js-hidden"), this._$chatMembers.hide()) : (t.addClass("active"), this._$inputWrap.removeClass("js-hidden"), this._$chatMembers.show(), this._$inputText.val("").focus(), this._showMembersList())
                }, P.prototype._showMembersList = function() {
                    var t = this;
                    this._$chatMembersContent.empty().css("height", ""), this._model.updateRoomInfo(this._currentRoom(), function() {
                        var e = this._model.getRoomById(this._currentRoom()).members_info.sort((function(t, e) {
                                return t.online ? -1 : 1
                            })).filter(this.membersFilter).map((function(t) {
                                return {
                                    username: t.username,
                                    online: t.online,
                                    userpic: t.user_pic,
                                    id: t.user_id
                                }
                            })),
                            i = t.renderRecipients(e);
                        this._$chatMembersContent.append(i), t.syncDeleteButtonVisibility()
                    }.bind(this))
                }, P.prototype.syncDeleteButtonVisibility = function() {
                    var t = this._$chatMembersContent.find(".recipient").length,
                        e = this._$chatMembersContent.find(".remove");
                    t > 1 ? e.show() : e.hide()
                },
                P.prototype.addNewRecipient = function(t) {
                    if (this._$inputText.val("").focus(), -1 === this.getCurrentRecipients().indexOf(t.id)) {
                        var e = n.extend({}, t);
                        this.renderRecipients([e]).prependTo(this._$chatMembersContent), this.syncDeleteButtonVisibility()
                    } else M({
                        title: i(777754).t(null, void 0, i(934739)),
                        text: i(777754).t(null, void 0, i(936400)).format({
                            name: t.username
                        })
                    })
                }, P.prototype.renderRecipients = function(t) {
                    var e = this._isCurrentUserAuthor();
                    return n(a.render('{{#recipients}}<a href="/u/{{ username }}/" target="_blank" class="recipient{{#online}} online{{/online}}" data-id="{{ id }}"><img src="{{ userpic }}"/><span class="recipient-username">{{ username }}</span>{{#showDeleteButton}}<i class="remove"></i>{{/showDeleteButton}}</a>{{/recipients}}', {
                        recipients: t,
                        showDeleteButton: e || window.user.is_moderator || window.user.is_staff
                    }))
                }, P.prototype.removeNewRecipient = function(t) {
                    n('.recipient[data-id="' + t + '"]').remove(), this._$inputText.focus()
                }, P.prototype.saveRecipients = function(t) {
                    return new Promise(function(e) {
                        if (t.length) {
                            var s = this._currentRoom();
                            new Promise(function(e) {
                                this._model.getRoomInfo(s, (function(s) {
                                    2 === s.members_info.length && t.length > 2 ? w({
                                        title: i(777754).t(null, void 0, i(97764)),
                                        text: i(777754).t(null, void 0, i(467180)),
                                        mainButtonText: i(777754).t(null, void 0, i(913254)),
                                        cancelButtonText: i(777754).t(null, void 0, i(979595)),
                                        onConfirm: function(t) {
                                            e(!1), t.dialogClose()
                                        },
                                        onCancel: function(t) {
                                            e(!0), t.dialogClose()
                                        }
                                    }) : e(!0)
                                }))
                            }.bind(this)).then(function(i) {
                                this.saveRecipientsImpl(s, t, i, e)
                            }.bind(this))
                        } else e()
                    }.bind(this))
                }, P.prototype.saveRecipientsImpl = function(t, e, s, o) {
                    this._model.updateRoomUsers(t, e, function(t) {
                        if (t.error) return M({
                            title: i(777754).t(null, void 0, i(482751)),
                            html: t.error
                        }), void o();
                        this._$inputWrap.addClass("js-hidden"), this._$chatHeadingHeaderspace.find("#add-people").removeClass("active"), this._$chatMembers.hide();
                        var e = t.room;
                        if (e.existing) return this.openChat(e.room_id), void o();
                        this.isCurrentRoom(e.room_id) || this.isStandalone() || (this._roomToBeOpenedWhenAdded = e.room_id), o()
                    }.bind(this), {
                        updateExistingRoom: s
                    })
                }, P.prototype.flipWidgets = function() {
                    if (!this._flipped) {
                        var t = this._container.height(),
                            e = parseFloat(TVSettings.getValue("privatemessages.paneratio", "0.5")),
                            s = Math.round(e * t);
                        this._bridge.visible.value() || this._bridge.visible.subscribe(function(i) {
                            t = this._container.height(), s = Math.round(e * t), this._$chat.height(s), this._$widget.height(t - s), this.resize()
                        }.bind(this), {
                            once: !0
                        }), this._$headerWrap = n('<div class="tv-messages-header">').prependTo(this._$widget), this._$headerWrap.on("contextmenu", (function(t) {
                            t.preventDefault()
                        }));
                        var o = n('<div class="widgetbar-widgetheader"><div class="widgetbar-widgettitle">' + i(777754).t(null, void 0, i(769708)) + "</div></div>").appendTo(this._$headerWrap),
                            a = n('<div class="widgetbar-headerspace">').append(this._$addChatButton).append(this._searchFilter.getButton()).prependTo(o);
                        this._$settingsButton = n('<a class="button apply-common-tooltip" title="' + i(777754).t(null, void 0, i(389517)) + '" data-role="button" data-name="settings">').append(n(i(888991)).attr({
                            width: 17,
                            height: 17
                        })).appendTo(a), this._$settingsButton.on("click", function(t) {
                            this._chatWidget && this._chatWidget._showSettingsDialog(t, this._model.getRooms())
                        }.bind(this)), f(this._$settingsButton, null, {
                            event: "show-popup",
                            addClass: "ch-popup ch-settings-popup",
                            careBottomBorder: !0,
                            careRightBorder: !0,
                            viewportSpacing: 2,
                            reverse: !0
                        }), this._$chat = n('<div class="msg-chat-wrap">').insertBefore(this._$widget), this._$chat.height(s), this._$widget.height(t - s), this._$chat.data("heightRatio", e), this._$resizeHandle = n('<div class="msg-window-handle"></div>').on("mousedown touchstart", this.onWidgetResizeHandleMousedown.bind(this)).appendTo(this._$widget), this._flipped = !0
                    }
                }, P.prototype.onWidgetResizeHandleMousedown = function(t) {
                    if (!t.isDefaultPrevented()) {
                        t.preventDefault();
                        var e, i = this,
                            s = this._$chat,
                            o = this._$widget;
                        e = t.originalEvent.touches ? t.originalEvent.touches[0].clientY : t.pageY;
                        var a, r = s.height(),
                            h = this._container.height(),
                            d = function(t) {
                                var n = (t.originalEvent.touches ? t.originalEvent.touches[0].clientY : t.pageY) - e,
                                    d = Math.max(0, Math.min(r + n, h - i._$headerWrap.outerHeight()));
                                a !== d && (a = d, s.data("heightRatio", (d / h).toFixed(2)), s.height(d), o.height(h - d), i.resize())
                            },
                            l = function(t) {
                                n(document.documentElement).off("mousemove touchmove", d).off("mouseup touchend", l), a !== r && TVSettings.setValue("privatemessages.paneratio", s.data("heightRatio"))
                            };
                        n(document.documentElement).on("mousemove touchmove", d).one("mouseup touchend", l)
                    }
                }, P.prototype.resize = function() {
                    if (!this.layoutWithSelect()) {
                        var t = this._$widget.height();
                        t -= this._searchFilter.getInputHeight(), this._$headerWrap && (t -= this._$headerWrap.outerHeight()), this._$dataWrap.height(t), this._scroll.resize()
                    }
                    this.resizeChat()
                }, P.prototype.resizeChat = function() {
                    this._chatWidget && this._chatWidget.resize()
                }, P.prototype.onWindowResize = function() {
                    if (this._chatWidget)
                        if (this.layoutWithSelect()) this._chatWidget.resize();
                        else {
                            var t = this._$chat.data("heightRatio"),
                                e = this._container.height();
                            this._$chat.height(e * t), this._$widget.height(e * (1 - t)), this.resize()
                        }
                }, P.prototype.closeChat = function(t) {
                    this._chatWidget && (this._chatWidget.destroy(), this._chatWidget = null), this._$chatWidgetContainer && (this._$chatWidgetContainer.remove(), this._$chatWidgetContainer = null), this._$chatHeadingHeaderspace && this._$chatHeadingHeaderspace.empty(), t && (this._bridge.setTitle(i(777754).t(null, void 0, i(538730))), this.appendPlaceholder("hidden", this._$chat)), this.isStandalone() || TVSettings.setValue("privatemessages.activechat", "")
                }, P.prototype.sendMessageToUser = function(t, e) {
                    return N(this._model, t, e, this._onMessageSentSuccess.bind(this), (() => {
                        this._visibilityToggled = !0
                    }))
                }, P.prototype._onMessageSentSuccess = function(t) {
                    this.openChat(t), window.widgetbar && window.widgetbar.setPage("pm_chats"), this._scroll && this._scroll.scrollToStart()
                }, P.prototype._currentRoom = function() {
                    return this._chatWidget && this._chatWidget.currentRoom() || ""
                }, P.prototype.isCurrentRoom = function(t) {
                    return this._currentRoom() === t
                }, P.prototype.isStandalone = function() {
                    return this._standalone
                }, P.prototype.layoutWithSelect = function() {
                    return this._layoutWithSelect
                },
                P.prototype._$notAuthMessage = function() {
                    var t = n('<div class="ch-item-empty">' + i(777754).t(null, {
                        replace: {
                            signInLink: '<a href="#signin">' + i(777754).t(null, void 0, i(601346)) + "</a>"
                        }
                    }, i(732812)) + "</div>");
                    return t.on("click", (function() {
                        return runOrSignIn((function() {}), {
                            source: "Private messages widget placeholder",
                            sourceMeta: "Chart"
                        }), !1
                    })), t
                }, P.prototype.setRoomTitle = function(t) {
                    var e = this;
                    C({
                        title: i(777754).t(null, void 0, i(667961)),
                        initValue: this.getRoomTitleById(t),
                        maxLength: 128,
                        onRename: function(s) {
                            return new Promise((function(o) {
                                var n = s.newValue;
                                n ? e._model.editRoom(t, n, "", (function(t) {
                                    t.error && M({
                                        title: t.errorTitle || i(777754).t(null, void 0, i(482751)),
                                        text: t.error
                                    }), o(), s.dialogClose()
                                })) : o()
                            }))
                        }
                    })
                }, P.prototype._showRoom = function(t, e) {
                    e.removeClass("js-hidden"), e.data("hidden-conversation", !1), this.removePlaceholder(), this._model.removeHiddenRoom(t)
                }, P.prototype._hideRoom = function(t, e) {
                    if (!this._model.isRoomHidden(t)) {
                        var i = this._$data.find("#msg-item-" + t),
                            s = this.isCurrentRoom(t),
                            o = this._$data.find(".msg-item").not(".js-hidden");
                        i.addClass("js-hidden"), i.removeClass("active"), i.data("hidden-conversation", !0), 1 === o.length && this.appendPlaceholder("hidden"), s && (this.closeChat(!0), this._scroll.scrollToStart()), this._model.addHiddenRoom(t), e || R.emit("messages.chatvisibility", t + ":hide")
                    }
                }, P.prototype.showRoomContextMenu = function(t, e) {
                    var i = this.getRoomById(e),
                        s = this.getPrivateRoomActions(i),
                        o = [s.hideConversation];
                    (o = o.concat(s.multiUserActions)).push(d.getLaunchInSeparateWindowAction(e, (function() {
                        return !0
                    }))), p.showMenu(o.map((function(t) {
                        return new u({
                            label: t.title,
                            onExecute: t.action
                        })
                    })), t)
                }, P.prototype.getPrivateRoomActions = function(t) {
                    var e = this,
                        s = {},
                        o = t.room_id;
                    return s.hideConversation = {
                        title: i(777754).t(null, void 0, i(957656)),
                        action: function() {
                            e._hideRoom(o)
                        }
                    }, s.multiUserActions = [], t.members_info.length > 2 && s.multiUserActions.push({
                        title: i(777754).t(null, void 0, i(737792)),
                        action: function() {
                            e.setRoomTitle(o)
                        }
                    }, {
                        title: i(777754).t(null, void 0, i(607986)),
                        action: function() {
                            w({
                                text: i(777754).t(null, void 0, i(716541)),
                                onConfirm: function(t) {
                                    return new Promise((function(s) {
                                        e._model.leaveFromRoom(o, (function(n) {
                                            if (s(), n.error) return M({
                                                title: n.errorTitle || i(777754).t(null, void 0, i(482751)),
                                                text: n.error
                                            }), void t.dialogClose();
                                            e.isCurrentRoom(o) && e.closeChat(!0), e.resize(), t.dialogClose()
                                        }))
                                    }))
                                }
                            })
                        }
                    }), s
                }, P.prototype.getCurrentRecipients = function() {
                    var t = this._$chatMembersContent.find(".recipient").toArray().map((function(t) {
                        return Number(t.getAttribute("data-id"))
                    }));
                    return t.push(window.user.id), t
                }, t.exports = {
                    Widget: P,
                    sendMessageToUser: function(t, e) {
                        return TradingView.messagesWidget ? TradingView.messagesWidget.sendMessageToUser(t, e) : N(H(), t, e)
                    }
                }
        },
        556699: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                NotificationSettings: () => a
            });
            var s = i(890740),
                o = !1;
            const n = {
                data: {},
                ready: null
            };
            class a {
                constructor() {
                    return window.is_authenticated ? !1 === o && (o = !0, n.ready = (0, s.fetch)("/notifications-data/?widget_type=user", {
                        credentials: "same-origin"
                    }).then((t => {
                        t.json().then((t => {
                            n.data = t.settings
                        }))
                    }))) : (o = !1, n.ready = Promise.resolve()), n
                }
            }
        },
        351507: (t, e, i) => {
            "use strict";
            var s = i(823127);
            i(230148);
            var o = i(50959),
                n = i(500962),
                a = i(511497),
                r = i(161088),
                h = i(152033),
                d = i(973580).TVAction,
                l = i(263221).ContextMenuManager,
                c = i(125226).isFeatureEnabled,
                u = i(61005),
                p = i(155040),
                m = i(583912).linking,
                g = i(663989).SidebarCustomScroll,
                _ = i(76040).bindPopupMenu,
                v = i(983772),
                f = i(334148).showDialog;
            const {
                NotificationSettings: b
            } = i(556699);
            var y = i(488427),
                w = i(733647),
                C = i(868151).appendEllipsis,
                M = i(779665).pushStreamMultiplexer,
                S = i(632446).enabled,
                $ = i(833813).ProductFeatures,
                x = i(33070).WidgetBanner,
                T = i(33070).WidgetSource,
                R = i(508846).createGoProDialog;
            const {
                htmlEscape: k
            } = i(535799), {
                copyToClipboard: B
            } = i(963239), A = i(309103), I = i(653063);

            function E(t) {
                this._bridge = t, this._container = t.$body, this._rooms_obj = {}, this._visible = !1, this._notificationCount = 0, this._currentSymbol = "", this.SORT_ROOMS_INTERVAL = 5e3, this._model = v.makePublicModel(), this._model.roomAdded().subscribe(this, this._onRoomAdded), this._model.roomChanged().subscribe(this, this._onRoomChanged), this._model.roomDeleted().subscribe(this, this._onRoomDeleted), this._model.roomsChanged().subscribe(this, this._onRoomsChanged), this._model.messageReceivedInOtherRoom().subscribe(this, this._onEventInOtherRooms), this._symbolHandler = () => this.sortRooms(), m.seriesShortSymbol.subscribe(this._symbolHandler), this._standalone = !!t.standalone, this._layoutWithSelect = !!t.layoutWithSelect || !!(t.options || {}).layoutWithSelect, this._bridge.chatNotificationControl = this._chatNotificationControl = new r.ChatNotificationControl(!1), t.visible && (this._visible = t.visible.value(), t.visible.subscribe(this.onVisibilityChange.bind(this))), t.height && t.height.subscribe(this.resize.bind(this)), t.width && t.width.subscribe(this.resize.bind(this)), this._bridge.onMessage(function(t, e) {
                    switch (t) {
                        case "toggle_favorite_room":
                            this.toggleFavoriteForRoom(e);
                            break;
                        case "toggle_room_notifications":
                            this.toggleNotificationsForRoom(e)
                    }
                }.bind(this)), this.layoutWithSelect() ? this.prepareLayoutWithSelect() : this.prepareLayout(), this.setSortRoomsInterval(), loginStateChange.subscribe(this, function() {
                    this._sortRoomsIntervalID && clearInterval(this._sortRoomsIntervalID)
                }.bind(this)), 0 !== this._model.getRooms().length && this._onRoomsChanged(this._model.getRooms(), []), this.layoutWithSelect() && this._createChatWidget(), this.connect(), this.resize(), this._mindsCurrentChannel = "", this._mindsReconnectTimeout = null, this._mindsHandler = () => this.testMindsConnections(), m.proSymbol.subscribe(this._mindsHandler), this.testMindsConnections()
            }
            i(398514), E.prototype._onRoomAddedBySelf = function(t) {
                return !!this._model.getRoomById(t) && (this.scrollToRoom(t), this.openChat(t), !0)
            }, E.prototype._onRoomAdded = function(t) {
                this.sortRooms(), t.user_id === window.user.id && this._needScrollToAddedRoom && (this._onRoomAddedBySelf(t.room_id), this._needScrollToAddedRoom = !1)
            }, E.prototype._onRoomChanged = function(t) {
                this.updateRoomCounter(t.room_id);
                var e = s("#pc-item-" + t.room_id);
                e.find(".title-text").text(t.title), e.find(".desc span").text(t.description)
            }, E.prototype._onRoomDeleted = function(t) {
                var e = s("#pc-item-" + t.room_id);
                y.jQueryCompatibleDestroy(e), e.remove(),
                    this.resize(), this._bridge._room === t.room_id && this.openChat(this.getDefaultRoom())
            }, E.prototype._addWidgetBanner = function() {
                this._$mindsBanner = s('<div class="tv-minds-banner">').appendTo(this._$data), n.render(o.createElement(x, {
                    text: i(777754).t(null, void 0, i(706239)),
                    buttonText: i(777754).t(null, void 0, i(950569)),
                    icon: I,
                    storageKey: "show_minds_banner",
                    source: T.Minds,
                    placement: T.Chats,
                    onActionClick: () => window.widgetbar.setPage(T.Minds),
                    bridge: this._bridge,
                    widgetIsVisible: this._bridge.visible.value()
                }), this._$mindsBanner[0])
            }, E.prototype._onRoomsChanged = function(t, e) {
                var i, s = 0 === e.length && 0 !== t.length;
                this._notificationCount = 0, s && (this._$data.empty(), this._addWidgetBanner(), this._rooms_obj = {}), this.initNotificationsSettings(), i = this.layoutWithSelect() && this._bridge.activeRoom ? this._bridge.activeRoom : this.getActiveRoom(), this.sortRooms(s, i), this.toggleFavoritesVisibility(), s && i && (this.layoutWithSelect() && this._rooms_obj[i] && this._$select.html("<strong>" + k(this._rooms_obj[i].title) + "</strong>" + (this._rooms_obj[i].description ? ": " + k(this._rooms_obj[i].description) : "")), this.isStandAlone() || setTimeout(function() {
                    this.openChat(this._model.getRoomById(i) ? i : this.getDefaultRoom())
                }.bind(this), 0))
            }, E.prototype._onEventInOtherRooms = function(t, e, i) {
                var o = this,
                    n = this._rooms_obj[t.room_id];
                if (n) {
                    var a = s("#pc-item-" + n.room_id);
                    if (this.updateRoomCounter(t.room_id), t.type || this.updateRoomDescMsg(n.room_id, t.username, t.text), t.user_id !== window.user.id && this.roomNotificationsOn(n)) {
                        var h, d, l = TVSettings.getJSON("chat.sound", r.ChatSoundControl.prototype._default_state, !0);
                        t.text && (d = w.removeBBCodes(t.text), h = d.indexOf("@" + user.username) > -1), !i && (!0 === l || l.onMessage || h && l.onMessageForUser) && u.play("chat/message");
                        var c = new b;
                        c.ready.then((function() {
                            var e = c.data.notification_popup;
                            if (h && !i && !o._standalone && !o.layoutWithSelect() && e && document.hidden && p.show(n.title, t.username + ": " + d, t.user_pic), !o.isCurrentRoom(n.room_id) || !o._visible) {
                                var s = o._$data.find('a[data-room="' + n.room_id + '"] .counter'),
                                    r = parseInt(s.text(), 10);
                                s.addClass("active").text(r + 1), o._notificationCount++, a.highlight(1)
                            }
                            o.updateNotifications()
                        }))
                    }
                }
            }, E.prototype.settingsKey = function(t) {
                return "en" !== window.language && (t += "." + window.locale), t
            }, E.prototype.getLocalizedSetting = function(t, e) {
                return TVSettings.getValue(this.settingsKey(t), e)
            }, E.prototype.getLocalizedJsonSetting = function(t, e) {
                return TVSettings.getJSON(this.settingsKey(t), e)
            }, E.prototype.setTVSettings = function(t, e) {
                return "en" !== window.language && (t += "." + window.locale), TVSettings.setValue(t, e)
            }, E.prototype.setJsonSetting = function(t, e) {
                return TVSettings.setJSON(this.settingsKey(t), e)
            }, E.prototype.onVisibilityChange = function(t) {
                this._visible = t, t && this._bridge._room && s("#pc-item-" + this._bridge._room + " .counter").text("0").removeClass("active"), this.updateNotifications()
            }, E.prototype.initNotificationsSettings = function() {
                this.notificationsSettings = this.getLocalizedJsonSetting("publiccharts.notifications"), this.notificationsSettings || (this.notificationsSettings = this._model.getRooms().reduce((function(t, e) {
                    return e.pinned && (t[e.room_id] = 1), t
                }), {}))
            }, E.prototype.setupDataEvents = function() {
                var t = this;
                this._$data.on("click touchend", ".pc-item, .msg-item", (function(e) {
                    t._touch_scroll || (t._searchFilter && t._searchFilter.isOpen() && t._searchFilter.setNewRoom(s("#pc-item-" + s(this).data("room"))), t.openChat(s(this).data("room")), e.preventDefault())
                })).on("touchstart", (function() {
                    t._touch_scroll = !1
                })).on("touchmove", (function(e) {
                    t._touch_scroll = !0
                })).on("contextmenu", ".pc-item", (function(e) {
                    e.preventDefault(), t.showRoomContextMenu(e, s(this).data("room"))
                })), this.isStandAlone && !this.isStandAlone() && this._$data.on("click touchend", ".pc-item .fav", (function(e) {
                    t.toggleFavoriteForRoom(s(this).data("room")), e.stopPropagation(), e.preventDefault()
                })).on("click touchend", ".pc-item .notifications-toggle", (function(e) {
                    t.toggleNotificationsForRoom(s(this).data("room")), e.stopPropagation(), e.preventDefault()
                }))
            }, E.prototype.showRoomContextMenu = function(t, e) {
                var i = E.publicMenuItems(e, this._bridge, this);
                i.push(a.getLaunchInSeparateWindowAction(e, (function() {
                    return !1
                }))), l.showMenu(i.map((function(t) {
                    return new d({
                        label: t.title,
                        onExecute: t.action
                    })
                })), t)
            }, E.prototype.prepareLayout = function() {
                var t = this;
                this._$widget = s('<div class="tv-publicchats">').appendTo(this._container), t._touch_scroll = !1, this._searchFilter = new r.ChatRoomListSearchFilter(this, !1), this._searchFilter.appendInput(this._$widget), this._$dataWrap = s('<div class="pc-data-wrap">').appendTo(this._$widget), this._$dataWrap.on("contextmenu", (function(t) {
                    t.target.classList.contains("pc-data-wrap") && t.preventDefault()
                })), this._$data = s('<div class="pc-data">').appendTo(this._$dataWrap), this._$noFavoritesMessage = s("<div>"), this._$noFavoritesMessage.addClass("tv-widget-empty-message js-hidden"), this._$noFavoritesMessage.text(i(777754).t(null, void 0, i(112039))), this._$noFavoritesMessage.appendTo(this._$dataWrap), this._searchFilter.setRoomList(this._$data), this.setupDataEvents(), (c("enable_new_custom_public_chats") || window.user.permissions && window.user.permissions.can_create_public_chats) && (this._$addButton = s('<a class="button apply-common-tooltip" title="' + i(777754).t(null, void 0, i(876509)) + '" data-role="button" data-name="create">').append(s(i(376583)).attr({
                    width: 17,
                    height: 17
                })).appendTo(this._bridge.$headerspace), this._$addButton.on("click", (function(e) {
                    e.preventDefault(), t.showEditRoomDialog()
                }))), this._searchFilter.appendButton(this._bridge.$headerspace), this._$settingsButton = s('<a class="button apply-common-tooltip" title="' + i(777754).t(null, void 0, i(389517)) + '" data-role="button" data-name="settings">').append(s(i(888991)).attr({
                    width: 17,
                    height: 17
                })).appendTo(this._bridge.$headerspace), this._$settingsButton.on("click", a.prototype._showSettingsDialog.bind(this)), _(this._$settingsButton, null, {
                    event: "show-popup",
                    hideEvent: "hide-popup",
                    addClass: "ch-popup ch-settings-popup",
                    careBottomBorder: !0,
                    careRightBorder: !0,
                    viewportSpacing: 2,
                    reverse: !0
                }), this._scroll = new g(this._$dataWrap[0], this._$data[0])
            }, E.prototype.prepareLayoutWithSelect = function(t, e) {
                var o = this,
                    n = !1;
                if (t && !is_authenticated) return this._bridge.$header.hide(), void(this._$data = this._bridge.$body.append(e instanceof s ? e : '<div>Please <a href="#signin" onclick="runOrSignIn(function(){}, { source: "Public chat widget" }); return false;">' + i(777754).t(null, void 0, i(601346)) + "</a></div>"));

                function r(t) {
                    var e = s(t.target).parents().andSelf();
                    e.is(o._$select) || e.is(o._$data) || o._toggleList()
                }
                this._bridge.$header.show(), this._bridge.$body.empty(), this._bridge.$header.addClass("chat-select-container"), this._$select = s('<div class="standalone-chat-select">').appendTo(this._bridge.$header), this._toggleList = function() {
                    if (n) o._$data.stop().height("auto").removeClass("sliding open");
                    else {
                        o._$data.height("auto").addClass("sliding");
                        var t = Math.min(s(window).height() - o._$data.offset().top - 5, o._$data.height());
                        o._$data.height(0).animate({
                            height: t
                        }, {
                            duration: 200,
                            height: t,
                            complete: function() {
                                o._$data.addClass("open").removeClass("sliding")
                            }
                        })
                    }
                    o._$select[n ? "removeClass" : "addClass"]("active"), s(document)[n ? "off" : "on"]("mousedown touchstart", r), n = !n
                }, this._$select.click((function(t) {
                    t.preventDefault(), t.stopPropagation(), o._toggleList()
                })), this._$settingsButton = s('<a class="button apply-common-tooltip" title="' + i(777754).t(null, void 0, i(389517)) + '"></a>').append(s(i(648449)).attr({
                    width: 17,
                    height: 17
                })).appendTo(this._bridge.$header).click((function(t) {
                    o instanceof i(841287).Widget && o._chatWidget ? o._chatWidget._showSettingsDialog(t) : o instanceof E && a.prototype._showSettingsDialog.call(o, t)
                })), _(this._$settingsButton, null, {
                    event: "show-popup",
                    addClass: "ch-popup ch-settings-popup",
                    careBottomBorder: !0,
                    careRightBorder: !0,
                    viewportSpacing: 2,
                    reverse: !0
                }), this._$data = s('<div class="standalone-chat-list msg-data pc-data">').appendTo(this._bridge.$header).on("click touchend", (function(t) {
                    o._touch_scroll || o._toggleList()
                })), E.prototype.setupDataEvents.call(this)
            }, E.prototype.connect = function() {
                this._bridge.onMessage(function(t, e) {
                    "toggle_show_only_favorites" === t && (this._model.toggleShownOnlyFavorites(), this.toggleFavoritesVisibility(), this.resize())
                }.bind(this))
            }, E.prototype.destroy = function() {
                clearInterval(this._roomUpdateInterval), clearInterval(this._roomStatusInterval), this._model.roomAdded().unsubscribe(this, this._onRoomAdded), this._model.roomChanged().unsubscribe(this, this._onRoomChanged), this._model.roomDeleted().unsubscribe(this, this._onRoomDeleted), this._model.roomsChanged().unsubscribe(this, this._onRoomsChanged), this._model.messageReceivedInOtherRoom().unsubscribe(this, this._onEventInOtherRooms), m.seriesShortSymbol.unsubscribe(this._symbolHandler), m.proSymbol.unsubscribe(this._mindsHandler), this._model.destroy(), this._model = null
            }, E.prototype.getDefaultRoom = function() {
                for (var t, e = this._model.getRooms(), i = e.length - 1; i >= 0; i--) e[i].is_default && (t = e[i].room_id);
                return t = t || ("en" !== window.language ? "general_" + window.locale : "general")
            }, E.prototype.getActiveRoom = function() {
                var t = this.getLocalizedSetting("publicchats.activechat");
                return t || (t = this.getDefaultRoom()), t
            }, E.prototype.updateRoomCounter = function(t, e) {
                var s = this._rooms_obj[t],
                    o = (new Date).getDate();
                if (s && !s.isSymbol) {
                    !0 !== e ? (s.msgs_total++, s.msgs_date !== o ? (s.msgs_date = o, s.msgs_days++, s.msgs_today = 1, s.msgs_average = Math.round((s.msgs_total - 1) / s.msgs_days)) : s.msgs_today++) : s.msgs_date = o;
                    var n = function(t) {
                            if (t < 1e3) return String(t);
                            var e = Math.floor(Math.log(t) / Math.log(1e3));
                            return Math.round(t / Math.pow(1e3, e) * Math.pow(10, 1)) / Math.pow(10, 1) + "KMGTPE".charAt(e - 1)
                        }(~~s.msgs_total),
                        a = this._$data.find("#pc-item-" + t);
                    a.find(".title-total").text(n), this.layoutWithSelect() || a.find(".title-text, .title-total").addClass("apply-common-tooltip common-tooltip-html").attr("title", k(s.description) + "<br><small>" + i(777754).t(null, void 0, i(219934)).format({
                        messagesCount: s.msgs_total
                    }) + "<br>" + i(777754).t(null, void 0, i(340354)).format({
                        messagesCount: s.msgs_today
                    }) + "<br>" + (0 === s.msgs_average ? i(777754).t(null, void 0, i(796637)) : i(777754).t(null, void 0, i(515155)).format({
                        messagesCount: s.msgs_average
                    })) + "</small>")
                }
            }, E.prototype.addRoom = function(t, e) {
                var o = s('<a href="#" data-room="' + k(t.room_id) + '" id="pc-item-' + k(t.room_id) + '" class="pc-item' + (e ? " active" : "") + (t.pinned ? " pinned" : "") + (this._model.isRoomFavorite(t.room_id) ? " favorite" : "") + '"><div class="title">' + (t.symbol ? '<span class="title-icon"></span>' : "") + '<span class="title-text">' + k(t.title) + "</span>" + (t.isSymbol ? "" : ' <span class="title-total">0</span>') + '</div><div class="desc' + (t.symbol ? " with-icon" : "") + '"><span>' + k(t.description) + '</span></div><div class="counter">0</div>' + (this.isStandAlone() ? "" : '<div class="notifications-toggle' + (this.roomNotificationsOn(t) ? " active" : "") + '" data-room="' + k(t.room_id) + '" title="' + i(777754).t(null, void 0, i(907194)) + '">' + i(667130) + '</div><i class="fav' + (this._model.isRoomFavorite(t.room_id) ? " active" : "") + '" data-room="' + k(t.room_id) + '" title="' + i(777754).t(null, void 0, i(757469)) + '">' + i(372665) + "</i>") + "</div></a>");
                if (o.appendTo(this._$data), t.symbol) {
                    const e = o.find(".title-icon")[0];
                    h.renderIconTemplate(t.symbol, e)
                }
                if (this.updateRoomCounter(t.room_id, !0), t.msgs_last_ts && (t.last_message_time = 1e3 * +t.msgs_last_ts), t.msgs_last_text) {
                    var n = t.msgs_last_text.split(": ");
                    this.updateRoomDescMsg(t.room_id, n[0], n[1])
                }
            }, E.prototype.updateRoom = function(t) {
                s("#pc-item-" + t.room_id).appendTo(this._$data)
            }, E.prototype.deleteRoomById = function(t) {
                s("#pc-item-" + t).remove(), delete this._rooms_obj[t]
            }, E.prototype.updateRoomDescMsg = function(t, e, i) {
                var o = this._rooms_obj[t];
                if (o) {
                    var n = s("#pc-item-" + t).find(".desc");
                    y.jQueryCompatibleDestroy(n);
                    var a = n.find("time");
                    a.length || (a = s("<time>").appendTo(n)), n.find("span").text(e + ": " + w.removeBBCodes(i)), y.jQueryCompatibleAgoDateFormatter(a, new Date(o.last_message_time || Date.now()))
                }
            }, E.prototype.updateNotifications = function() {
                var t = this._$data.find(".counter.active").length;
                this._bridge.notify(1, {
                    notificationValue: t,
                    clear: !t,
                    force: !0,
                    room: this._model.getRoomById(this._bridge._room)
                })
            }, E.prototype.openChat = function(t, e) {
                if (!this._bridge._room || t !== this._bridge._room) {
                    this._$data.find("a").removeClass("active"), s("#pc-item-" + t).addClass("active");
                    var i = s("#pc-item-" + t + " .counter"),
                        o = parseInt(i.text(), 10);
                    if (i.text("0").removeClass("active"), this._bridge.postMessage("chat_select_channel", {
                            room_id: t,
                            new_msgs: o
                        }), o && (this._notificationCount = Math.max(0, this._notificationCount - o)), this._bridge._room = t, this.isStandAlone() || this.setTVSettings("publicchats.activechat", t), this.layoutWithSelect()) {
                        var n = this._model.getRoomById(t);
                        this._$select.html("<strong>" + k(n.title) + "</strong>" + (n.description ? ": " + k(n.description) : ""))
                    }
                    this.updateNotifications()
                }
            }, E.prototype.resize = function() {
                this.layoutWithSelect() ? this.chatWidget.resize() : this._scroll.resize()
            }, E.prototype.isCurrentRoom = function(t) {
                return this._bridge._room === t
            }, E.prototype.scrollToRoom = function(t) {
                this._scroll.animateTo(s("#pc-item-" + t).position().top - 10)
            }, E.prototype.toggleFavoritesVisibility = function() {
                if (!this.isStandAlone()) {
                    this._$data.toggleClass("js-only-favorites", this._model.isShownOnlyFavorites());
                    var t = this._model.isShownOnlyFavorites() && 0 === this._$data.find(".favorite").length;
                    this.layoutWithSelect() || this._$noFavoritesMessage.toggleClass("js-hidden", !t)
                }
            }, E.prototype.toggleFavoriteForRoom = function(t) {
                var e = !1;
                this._model.isRoomFavorite(t) ? (this._model.removeFavoriteRoom(t), e = !1) : (this._model.addFavoriteRoom(t), e = !0);
                var i = s("#pc-item-" + t);
                i.toggleClass("favorite", e), i.find(".fav").toggleClass("active", e), this.toggleFavoritesVisibility()
            }, E.prototype.setSortRoomsInterval = function() {
                if (!this._sortRoomsIntervalID) {
                    var t = this;
                    (this._$dataWrap || this._$data).on("mouseenter", (function() {
                        t._pointerInsideData = !0
                    })).on("mouseleave", (function() {
                        t._pointerInsideData = !1
                    })), this._sortRoomsIntervalID = setInterval((function() {
                        t._pointerInsideData || t._bridge && t._bridge.visible && !t._bridge.visible.value() || t.sortRooms()
                    }), this.SORT_ROOMS_INTERVAL)
                }
            }, E.prototype.sortRooms = function(t, e) {
                e || (e = this.getActiveRoom());
                var i = this._model.getRooms();
                c("chat_by_symbol") && this.addSymbolRooms(e), i.sort(this.sortRoomsFilter.bind(this)), i.forEach((function(i) {
                    t || !(i.room_id in this._rooms_obj) ? (this._rooms_obj[i.room_id] = i, this.addRoom(i, e === i.room_id)) : this.updateRoom(i)
                }), this)
            }, E.prototype.addSymbolRooms = function(t) {
                var e = this._model.getRooms();
                [t, ...this._model.favoriteRooms()].forEach((t => {
                    h.isSymbolRoom(t) && this.addSymbolRoom(h.symbolFromChatRoomId(t))
                }));
                var i = m.seriesShortSymbol.value();
                if (i && this._currentSymbol !== i) {
                    var s = h.symbolRoomId(this._currentSymbol);
                    if (this._currentSymbol && !this._model.isRoomFavorite(s)) {
                        this.deleteRoomById(s);
                        var o = e.findIndex((t => t.room_id === s));
                        e.splice(o, 1)
                    }
                    this.addSymbolRoom(i), this._currentSymbol = i
                }
            }, E.prototype.addSymbolRoom = function(t) {
                const e = h.symbolRoomId(t);
                this._model.getRoomById(e) || this._model.getRooms().push({
                    room_id: e,
                    title: i(777754).t(null, {
                        replace: {
                            symbol: t
                        }
                    }, i(365674)),
                    description: i(777754).t(null, {
                        replace: {
                            symbol: t
                        }
                    }, i(657484)),
                    isSymbol: !0,
                    pinned: !0,
                    symbol: t
                })
            }, E.prototype.testMindsConnections = function() {
                const t = m.proSymbol.value();
                if (!c("test_minds_connections") || !t) return;
                const e = h.symbolRoomId(t, "");
                this._mindsCurrentChannel !== e && (this._mindsCurrentChannel && M.removeChannel(`minds.${this._mindsCurrentChannel}`), clearTimeout(this._mindsReconnectTimeout), this._mindsReconnectTimeout = setTimeout((() => {
                    M.addChannel(`minds.${e}`), this._mindsCurrentChannel = e
                }), 1e3))
            }, E.prototype.sortRoomsFilter = function(t, e) {
                return t.isSymbol && !e.isSymbol ? -1 : !t.isSymbol && e.isSymbol ? 1 : t.isSymbol && e.isSymbol ? t.symbol === this._currentSymbol ? -1 : 1 : t.pinned && !e.pinned ? -1 : !t.pinned && e.pinned ? 1 : t.pinned && e.pinned ? t.title.toLowerCase() > e.title.toLowerCase() ? 1 : -1 : this._model.isRoomFavorite(t.room_id) && !this._model.isRoomFavorite(e.room_id) ? -1 : !this._model.isRoomFavorite(t.room_id) && this._model.isRoomFavorite(e.room_id) ? 1 : "number" == typeof t.last_message_time && "number" != typeof e.last_message_time ? -1 : "number" != typeof t.last_message_time && "number" == typeof e.last_message_time ? 1 : "number" == typeof t.last_message_time && "number" == typeof e.last_message_time && t.last_message_time > e.last_message_time ? -1 : "number" == typeof t.last_message_time && "number" == typeof e.last_message_time && t.last_message_time < e.last_message_time || t.title.toLowerCase() > e.title.toLowerCase() ? 1 : -1
            }, E.prototype.toggleNotificationsForRoom = function(t) {
                t in this.notificationsSettings ? delete this.notificationsSettings[t] : this.notificationsSettings[t] = 1, this.setJsonSetting("publiccharts.notifications", this.notificationsSettings), s("#pc-item-" + t + " .notifications-toggle").toggleClass("active", t in this.notificationsSettings)
            }, E.prototype.roomNotificationsOn = function(t) {
                return this.notificationsSettings || this.initNotificationsSettings(), t.room_id in this.notificationsSettings
            }, E.prototype.showEditRoomDialog = function(t) {
                var e = this;
                runOrSignIn((function() {
                    window.user.permissions.can_moderate_public_chats || S($.CAN_EDIT_PUBLIC_CHATS) ? f(t, e._model.createRoom.bind(e._model), e._model.editRoom.bind(e._model), (function(i) {
                        t || e._onRoomAddedBySelf(i.room.room_id) || (e._needScrollToAddedRoom = !0)
                    })) : R({
                        feature: "editCreatePublicChat",
                        isTrialAvailable: !0,
                        upgradeMessage: i(777754).t(null, void 0, i(993550))
                    })
                }), {
                    source: "Public chat widget",
                    verifiedPhoneRequired: !0
                })
            }, E.prototype.isStandAlone = function() {
                return this._standalone
            }, E.prototype.layoutWithSelect = function() {
                return this._layoutWithSelect
            }, E.copyLinkToRoom = async function(t) {
                const e = new URL("/chat/#" + t, location.href).href;
                await B({
                    text: e
                });
                const o = s("#pc-item-" + t)[0];
                o && (A.showOnElement(o, {
                    content: {
                        type: "text",
                        data: i(777754).t(null, void 0, i(679732))
                    }
                }), setTimeout((() => {
                    A.hide()
                }), 1500))
            }, E.prototype._createChatWidget = function() {
                var t = s.extend(!0, {}, this._bridge, {
                    $header: null,
                    publicMenuItems: this.publicMenuItems,
                    hideMaximize: (this._bridge.options || {}).hideMaximize || this._layoutWithSelect,
                    standalone: this.isStandAlone() || this.layoutWithSelect()
                });
                this.chatWidget = new a(t)
            }, E.publicMenuItems = function(t, e) {
                var s = [];
                return s.push({
                    title: i(777754).t(null, void 0, i(892503)),
                    action: function() {
                        e.postMessage("toggle_room_notifications", t)
                    }
                }), s.push({
                    title: C(i(777754).t(null, void 0, i(74420))),
                    action: function() {
                        E.copyLinkToRoom(t)
                    }
                }), s.push({
                    title: C(i(777754).t(null, void 0, i(491936))),
                    action: function() {
                        var e = new Date,
                            i = e.getMonth() + 1,
                            s = e.getDate(),
                            o = e.getFullYear() + "-" + (i < 10 ? "0" : "") + i + "-" + (s < 10 ? "0" : "") + s;
                        window.open("/chat/history/?room=" + t + "&date=" + o + "&tzoffset=" + e.getTimezoneOffset())
                    }
                }), s
            }, t.exports = E
        },
        809062: (t, e, i) => {
            "use strict";
            i.d(e, {
                takeChartSnapshotPromise: () => r,
                takeChartSnapshot: () => h,
                makeSnapshotRequest: () => d
            });
            i(984919);
            var s = i(777754),
                o = i(495046),
                n = i(229534),
                a = i(890740);

            function r(t, e = {}) {
                return new Promise(((i, s) => {
                    h(t, i, s, e)
                }))
            }
            async function h(t, e, i, s = {}) {
                var o;
                const n = new FormData;
                if (void 0 !== s.previews)
                    for (const t of s.previews) n.append("previews[]", t);
                void 0 !== s.cme && n.append("cme", String(s.cme)), void 0 !== s.wl && n.append("wl", String(s.wl)), void 0 !== s.onWidget && n.append("onWidget", String(s.onWidget)), s.isReport && n.append("isReport", String(s.isReport)), s.asyncSave && n.append("asyncSave", String(s.asyncSave));
                const a = window.urlParams;
                a && a.locale && n.append("language", a.locale);
                const r = t.activeChartWidget.value(),
                    h = r.widgetCustomer();
                void 0 !== h && n.append("customer", h);
                let l = r.properties().childs().timezone.value();
                "exchange" === l && (l = (null === (o = r.model().mainSeries().symbolInfo()) || void 0 === o ? void 0 : o.timezone) || l), n.append("timezone", l), n.append("symbol", r.model().mainSeries().symbol());
                const c = await t.clientSnapshot({
                        showHeaderMainSymbol: s.showHeaderMainSymbol
                    }),
                    u = await new Promise((t => c.toBlob(t)));
                null !== u && n.append("preparedImage", u), d(n, e, i, s)
            }
            async function d(t, e, r, h = {}) {
                const d = o.enabled("charting_library_base") ? h.snapshotUrl || "https://www.tradingview.com/snapshot/" : "/snapshot/";
                try {
                    const o = await (0, a.fetch)(d, {
                            body: t,
                            method: "POST",
                            credentials: "same-origin"
                        }),
                        l = await o.text();
                    if (o.ok) e(l);
                    else {
                        if ("suspicious_chart_snapshots_error" === l) {
                            const t = s.t(null, void 0, i(347362)).format({
                                start_link: '<a class="tv-dialog__link js-send-report-link" href="#" data-issue-type="other">',
                                end_link: "</a>"
                            });
                            h.onInvalidSnapshotImage && h.onInvalidSnapshotImage();
                            return (0, n.createErrorDialog)({
                                title: s.t(null, void 0, i(567137)),
                                content: t,
                                btnType: "danger"
                            }).then((t => {
                                t.on("afterOpen", (() => {
                                    i.e(1484).then(i.bind(i, 742603)).then((({
                                        bugDialogCreationHandler: e
                                    }) => {
                                        e(), t.$el.find(".js-send-report-link").click((() => {
                                            t.close()
                                        }))
                                    }))
                                })), t.open()
                            }))
                        }
                        r()
                    }
                } catch (t) {
                    r()
                }
            }
        },
        404561: (t, e, i) => {
            "use strict";
            i.r(e);
            i(823127);
            var s = i(823127),
                o = i(823127);
            s.fn.putCursorAtEnd = function() {
                return this.each((function() {
                    if (o(this).focus(), this.setSelectionRange) {
                        const t = 2 * o(this).val().length;
                        this.setSelectionRange(t, t)
                    } else o(this).val(o(this).val());
                    this.scrollTop = 999999
                }))
            }, s.fn.putCursorAtPosition = function(t) {
                return this.each((function() {
                    o(this).focus(), this.setSelectionRange && this.setSelectionRange(t, t)
                }))
            }
        },
        401493: (t, e, i) => {
            "use strict";
            i.d(e, {
                getViolations: () => n
            });
            var s = i(777754);
            let o = null;

            function n() {
                if (null === o) {
                    const t = window.location.protocol + "//" + window.location.host,
                        e = t + "/house-rules/",
                        n = t + "/advertising-info/";
                    o = [{
                        name: s.t(null, void 0, i(375445)),
                        text: s.t(null, void 0, i(476659)),
                        id: "multi_acc"
                    }, {
                        name: s.t(null, void 0, i(494238)),
                        text: s.t(null, void 0, i(808911)),
                        id: "links"
                    }, {
                        name: s.t(null, void 0, i(559831)),
                        text: s.t(null, void 0, i(110312)),
                        id: "hate_speech"
                    }, {
                        name: s.t(null, void 0, i(617816)),
                        text: s.t(null, void 0, i(286283)),
                        id: "language"
                    }, {
                        name: s.t(null, void 0, i(780697)),
                        text: s.t(null, void 0, i(21673)),
                        id: "personal_info"
                    }, {
                        name: s.t(null, void 0, i(353)),
                        text: s.t(null, void 0, i(40676)),
                        id: "illicit_content"
                    }, {
                        name: s.t(null, void 0, i(809494)),
                        text: s.t(null, void 0, i(186251)),
                        id: "copyright"
                    }, {
                        name: s.t(null, void 0, i(746424)),
                        text: s.t(null, void 0, i(265905)).format({
                            link: n
                        }),
                        id: "ads"
                    }, {
                        name: s.t(null, void 0, i(739762)),
                        text: s.t(null, {
                            replace: {
                                link: e
                            }
                        }, i(129759)),
                        id: "recidive"
                    }, {
                        name: s.t(null, void 0, i(405156)),
                        text: s.t(null, void 0, i(657959)).format({
                            link: e
                        }),
                        id: "script_publishing"
                    }]
                }
                return o
            }
        },
        953816: (t, e, i) => {
            "use strict";

            function s() {
                return Promise.all([i.e(88230), i.e(81910), i.e(86256), i.e(91901), i.e(1428), i.e(1011), i.e(52701), i.e(48484), i.e(24091), i.e(62839), i.e(89619), i.e(63594), i.e(58269), i.e(79098), i.e(39659), i.e(20803), i.e(7107), i.e(17140), i.e(30979), i.e(49175), i.e(745), i.e(81385), i.e(94398)]).then(i.bind(i, 612257)).then((t => t.createIgnoreUsersDialog()))
            }
            i.d(e, {
                openIgnoreUsersDialog: () => s
            })
        },
        517598: (t, e, i) => {
            "use strict";

            function s(t, e, s, o, n, a) {
                return Promise.all([i.e(36037), i.e(36956), i.e(4100), i.e(50251), i.e(85783), i.e(35015), i.e(25977), i.e(39694), i.e(59356)]).then(i.bind(i, 315618)).then((i => i.showReportModal(t, e, s, o, n, a)))
            }
            i.d(e, {
                showReportModal: () => s
            })
        },
        778070: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                TAB_ICON_URLS: () => o,
                setTabIcon: () => n
            });
            var s = i(823127);
            const o = {
                UNREAD_MESSAGES: "/static/images/favicon/unread_messages/favicon.ico",
                DEFAULT: "/favicon.ico"
            };

            function n(t) {
                s('link[rel="icon"]').attr("href", t)
            }
        },
        868151: (t, e, i) => {
            "use strict";

            function s(t) {
                return t + "…"
            }
            i.r(e), i.d(e, {
                appendEllipsis: () => s
            })
        },
        103537: t => {
            "use strict";
            var e, i = [];

            function s() {
                for (var t = !1, s = i.length; s--;) {
                    var o = i[s].onclose;
                    i[s].wnd.closed ? (o && o.call(i[s].wnd), i.splice(s, 1)) : o && (t = !0)
                }!t && e && (clearInterval(e), e = void 0)
            }
            t.exports = {
                open: function(t) {
                    "string" == typeof t ? t = {
                        url: t
                    } : null == t && (t = {}), null != t.url && "" !== t.url || (t.url = "about:blank"), null == t.name && (t.name = void 0);
                    var o = window.open(t.url, t.name, function(t) {
                            if (null == t) return "";
                            if ("object" == typeof t) {
                                var e = "";
                                for (var i in t) {
                                    var s = t[i];
                                    if ("boolean" == typeof s) s = s ? "yes" : "no";
                                    else if (null == s) continue;
                                    e += (e ? "," : "") + i + "=" + s
                                }
                                return e
                            }
                            return t + ""
                        }(t.parameters)),
                        n = void 0 !== t.data,
                        a = {
                            wnd: o,
                            data: t.data
                        };
                    return "function" == typeof t.onclose && (a.onclose = t.onclose, n = !0), "function" == typeof t.onbound && (a.onbound = t.onbound, n = !0), n && (i.push(a), !e && a.onclose && (e = setInterval(s, 1e3))), o
                },
                getData: function(t) {
                    for (var e = i.length; e--;)
                        if (i[e].wnd === t) return i[e].onbound && (i[e].onbound.call(t), i[e].onbound = null), i[e].data
                }
            }
        },
        138581: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 5" width="9" height="5"><path fill="currentColor" d="M0 0h9L4.5 5z"/></svg>'
        },
        106535: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 973.125"><path d="M960 832L710.875 582.875C746.438 524.812 768 457.155 768 384 768 171.97 596 0 384 0 171.97 0 0 171.97 0 384c0 212 171.97 384 384 384 73.156 0 140.812-21.562 198.875-57L832 960c17.5 17.5 46.5 17.375 64 0l64-64c17.5-17.5 17.5-46.5 0-64zM384 640c-141.375 0-256-114.625-256-256s114.625-256 256-256 256 114.625 256 256-114.625 256-256 256z"/></svg>'
        },
        888991: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16"><path d="M15.09 6.857s-.571 0-.724-.533c-.114-.457-.305-.876-.533-1.295-.229-.495.152-.876.152-.876l.571-.571c.229-.229.229-.61 0-.876l-.762-.762c-.229-.229-.61-.229-.876 0l-.571.571s-.381.381-.876.152c-.419-.229-.838-.419-1.295-.533-.533-.152-.533-.724-.533-.724v-.8a.602.602 0 0 0-.61-.61H7.966a.602.602 0 0 0-.61.61v.8s0 .571-.533.724c-.457.114-.876.305-1.295.533-.495.229-.876-.152-.876-.152l-.571-.571c-.229-.229-.61-.229-.876 0l-.762.762c-.229.229-.229.61 0 .876l.571.571s.381.381.152.876c-.229.419-.419.838-.533 1.295-.152.495-.724.533-.724.533h-.8a.602.602 0 0 0-.61.61v1.067c0 .343.267.61.61.61h.8s.571 0 .724.533c.114.457.305.876.533 1.295.229.495-.152.876-.152.876l-.571.571c-.229.229-.229.61 0 .876l.762.762c.229.229.61.229.876 0l.571-.571s.381-.381.876-.152c.419.229.838.419 1.295.533.495.152.533.724.533.724v.8c0 .343.267.61.61.61h1.067c.343 0 .61-.267.61-.61v-.8s0-.571.533-.724c.457-.114.876-.305 1.295-.533.495-.229.876.152.876.152l.571.571c.229.229.61.229.876 0l.762-.762c.229-.229.229-.61 0-.876l-.571-.571s-.381-.381-.152-.876c.229-.419.419-.838.533-1.295.152-.495.724-.533.724-.533h.8c.343 0 .61-.267.61-.61V7.467a.602.602 0 0 0-.61-.61h-.8zM8.5 11.555a3.541 3.541 0 0 1-3.556-3.556A3.541 3.541 0 0 1 8.5 4.443a3.541 3.541 0 0 1 3.556 3.556A3.561 3.561 0 0 1 8.5 11.555z"/></svg>'
        },
        772501: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 586.09999 586.09996" width="586.1" height="586.1" enable-background="new 0 0 595.3 841.9"><path d="M0 586.1h117.2l351.7-351.7 117.2 117.3V0H234.4l117.3 117.2L0 468.9z"/></svg>'
        },
        216413: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 18" width="8" height="18"><path d="M3 8V4H-.5L4-.5 8.5 4H5v4zM3 10h2v4h3.5L4 18.5-.5 14H3z"/></svg>'
        },
        844786: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.888672 15.336914" width="14.889" height="15.337" enable-background="new 0 0 32 32"><path d="M14.062 7.54q0 1.085-.32 2.1-.313 1.017-.9 1.853H9.406l-.21-.907q-.58.47-1.11.72-.53.25-1.22.25-1.31 0-2.1-.993-.782-.992-.782-2.773 0-1.774.96-2.83.962-1.053 2.298-1.053.572 0 1.01.133.437.125.944.382v-.375h1.243v6.578h1.89q.33-.585.49-1.46.17-.883.17-1.58 0-1.28-.36-2.327-.35-1.047-1.04-1.797-.686-.75-1.7-1.14-1.014-.41-2.3-.41-1.25 0-2.29.457-1.03.454-1.775 1.22-.75.765-1.18 1.836-.42 1.06-.42 2.265 0 1.29.402 2.36.404 1.063 1.146 1.82.775.79 1.814 1.188 1.04.41 2.267.41.67 0 1.383-.085.72-.086 1.376-.274v1.11q-.76.163-1.416.217-.656.06-1.35.06-1.454 0-2.697-.5-1.242-.49-2.132-1.38-.9-.898-1.4-2.156-.5-1.26-.5-2.78 0-1.448.526-2.69.525-1.25 1.43-2.164.908-.914 2.15-1.438 1.244-.53 2.66-.53 1.53 0 2.733.484 1.2.484 2.03 1.36.83.874 1.26 2.11.445 1.225.445 2.733zM9.18 9.532V5.485q-.493-.227-.884-.32-.39-.102-.836-.102-1.008 0-1.578.703-.57.703-.57 2 0 1.274.453 1.93.453.648 1.414.648.52 0 1.04-.242t.95-.57z" font-family="Arial-BoldMT" font-size="16"/></svg>'
        },
        667130: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12"><path d="M5 .7C3 .7 2 3 2 5c0 4 0 4-2 5h12c-2-1-2-1-2-5C10 3 9 .7 7 .7c0-.9-2-.9-2 0zM4 11c0 1 1 1 2 1s2 0 2-1z"/></svg>'
        },
        376583: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17"><path d="M7 2h3v13H7M2 7h13v3H2z"/></svg>'
        },
        648449: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M14 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M5.005 16A1.003 1.003 0 0 1 4 14.992v-1.984A.998.998 0 0 1 5 12h1.252a7.87 7.87 0 0 1 .853-2.06l-.919-.925c-.356-.397-.348-1 .03-1.379l1.42-1.42a1 1 0 0 1 1.416.007l.889.882A7.96 7.96 0 0 1 12 6.253V5c0-.514.46-1 1-1h2c.557 0 1 .44 1 1v1.253a7.96 7.96 0 0 1 2.06.852l.888-.882a1 1 0 0 1 1.416-.006l1.42 1.42a.999.999 0 0 1 .029 1.377s-.4.406-.918.926a7.87 7.87 0 0 1 .853 2.06H23c.557 0 1 .447 1 1.008v1.984A.998.998 0 0 1 23 16h-1.252a7.87 7.87 0 0 1-.853 2.06l.882.888a1 1 0 0 1 .006 1.416l-1.42 1.42a1 1 0 0 1-1.415-.007l-.889-.882a7.96 7.96 0 0 1-2.059.852v1.248c0 .56-.45 1.005-1.008 1.005h-1.984A1.004 1.004 0 0 1 12 22.995v-1.248a7.96 7.96 0 0 1-2.06-.852l-.888.882a1 1 0 0 1-1.416.006l-1.42-1.42a1 1 0 0 1 .007-1.415l.882-.888A7.87 7.87 0 0 1 6.252 16H5.005zm3.378-6.193l-.227.34A6.884 6.884 0 0 0 7.14 12.6l-.082.4H5.005C5.002 13 5 13.664 5 14.992c0 .005.686.008 2.058.008l.082.4c.18.883.52 1.71 1.016 2.453l.227.34-1.45 1.46c-.004.003.466.477 1.41 1.422l1.464-1.458.34.227a6.959 6.959 0 0 0 2.454 1.016l.399.083v2.052c0 .003.664.005 1.992.005.005 0 .008-.686.008-2.057l.399-.083a6.959 6.959 0 0 0 2.454-1.016l.34-.227 1.46 1.45c.003.004.477-.466 1.422-1.41l-1.458-1.464.227-.34A6.884 6.884 0 0 0 20.86 15.4l.082-.4h2.053c.003 0 .005-.664.005-1.992 0-.005-.686-.008-2.058-.008l-.082-.4a6.884 6.884 0 0 0-1.016-2.453l-.227-.34 1.376-1.384.081-.082-1.416-1.416-1.465 1.458-.34-.227a6.959 6.959 0 0 0-2.454-1.016L15 7.057V5c0-.003-.664-.003-1.992 0-.005 0-.008.686-.008 2.057l-.399.083a6.959 6.959 0 0 0-2.454 1.016l-.34.227-1.46-1.45c-.003-.004-.477.466-1.421 1.408l1.457 1.466z"/></g></svg>'
        },
        505895: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 586.70002 595.19999" width="586.7" height="595.2" enable-background="new 0 0 595.3 841.9"><path d="M293.4 0C131.8 0 0 131.8 0 297.6s131.8 297.6 293.4 297.6 293.3-131.8 293.3-297.6S454.9 0 293.4 0zm68 182.8h85v93.5h-85v-93.5zm-212.6 0h85v93.5h-85v-93.5zm148.8 306.1c-136 0-187.1-106.3-187.1-106.3h378.4s-55.2 106.3-191.3 106.3z"/></svg>'
        },
        661963: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 11.5" width="20" height="16"><path d="M7.5 4.8c-1.1 0-1.9.9-1.9 1.9s.9 1.9 1.9 1.9c1.1 0 1.9-.9 1.9-1.9s-.9-1.9-1.9-1.9zM13 1.9h-2.2c0-1-.9-1.9-2-1.9H6.1C5 0 4.2.9 4.2 1.9H1.9c-1 0-1.9.9-1.9 2v5.7c0 1.1.9 1.9 1.9 1.9H13c1.1 0 1.9-.9 1.9-1.9V3.9c.1-1.1-.8-2-1.9-2zm-5.5 8.3C5.6 10.2 4 8.6 4 6.7s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4c.1 1.9-1.4 3.5-3.3 3.5z"/></svg>'
        },
        372665: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path d="M10.893 9.512l.458 3.624c.014.105-.006.16-.02.176-.028.03-.109.005-.182-.03L7.812 11.73a1.973 1.973 0 0 0-.811-.16c-.302 0-.59.057-.81.16l-3.338 1.552c-.118.056-.164.051-.182.03-.014-.016-.034-.07-.02-.178L3.11 9.51c.06-.503-.162-1.18-.505-1.54L.087 5.302c-.085-.091-.09-.148-.086-.158.003-.01.04-.053.16-.077l3.621-.689c.491-.09 1.069-.506 1.315-.948L7.004 0l1.902 3.43c.246.442.824.859 1.312.947l3.617.69c.123.024.162.068.164.077.003.01-.003.066-.089.157L11.4 7.97c-.348.367-.57 1.045-.506 1.543z"/></svg>'
        },
        384998: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17px" height="17px"><circle cx="10" cy="6" r="3"/><path d="M10 10c-4.575 0-6 3.333-6 3.333V15h12v-1.667S14.575 10 10 10zM2 5v6h2V5zm4 2v2H0V7z"/></svg>'
        },
        2837: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" width="34px" height="34px"><path d="M21.197 2.06c-7.07 0-12.8 5.83-12.8 13.027 0 7.14 5.644 12.934 12.638 13.024v5.545l8.747-8.902A13.208 13.208 0 0 0 34 15.03C34 7.832 28.267 2 21.197 2zM10.463 27.674v-1.58l-1.275-.017c-3.642-.046-6.606-3.1-6.606-6.806 0-3.052 1.986-5.643 4.71-6.504.16-.984.417-1.935.764-2.844C3.518 10.52 0 14.45 0 19.246c0 4.7 3.433 8.64 7.88 9.33V34l6.377-6.49a14.307 14.307 0 0 1-2.146-1.533l-1.643 1.674z"/></svg>'
        },
        15989: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" width="32px" height="24px"><path d="M32 24V0L20 12v12zm-20 0V0L0 12v12z"/></svg>'
        },
        822353: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12px" height="12px" fill="currentColor"><path d="M10.37.6c-.43.053-.97.13-1.55.13C7.918.73 7.1.52 6.273.35 5.433.175 4.566 0 3.648 0 1.816 0 1.195.38 1.133.42L1 .51V12h.625V6.626c.234-.094.85-.26 2.027-.26.852.002 1.65.313 2.496.49.86.175 1.75.36 2.715.36.574 0 1.082-.076 1.512-.125.234-.023.44-.05.625-.08V.506c-.184.035-.395.065-.63.095z"/></svg>'
        },
        214729: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" width="42px" height="42px"><path d="M38.626 17.554h-2.81c-.354-1.755-1.055-3.157-1.756-4.566l1.756-1.755c1.4-1.4 1.4-3.51 0-4.912s-3.51-1.4-4.912 0l-1.756 1.76c-1.4-.7-2.81-1.4-4.565-1.752V3.51c0-2.11-1.402-3.51-3.51-3.51s-3.52 1.41-3.52 3.51v2.81c-1.754.355-3.156 1.056-4.565 1.756L11.233 6.32c-1.4-1.4-3.51-1.4-4.912 0s-1.4 3.512 0 4.913l1.76 1.755c-.7 1.402-1.4 2.81-1.753 4.566H3.51c-2.1 0-3.51 1.41-3.51 3.51s1.4 3.512 3.51 3.512h2.81c.355 1.755 1.056 3.156 1.756 4.565L6.32 30.9c-1.4 1.402-1.4 3.51 0 4.913s3.512 1.4 4.913 0l1.755-1.756c1.402.7 2.81 1.402 4.566 1.756v2.815c0 2.11 1.4 3.51 3.51 3.51s3.51-1.4 3.51-3.51v-2.81c1.757-.354 3.158-1.055 4.567-1.756l1.76 1.754c1.4 1.4 3.51 1.4 4.915 0s1.4-3.51 0-4.912l-1.756-1.756c.7-1.4 1.4-2.81 1.755-4.565h2.81c2.107 0 3.51-1.4 3.51-3.51.006-2.11-1.403-3.52-3.505-3.52zm-17.56 14.05c-5.968 0-10.534-4.565-10.534-10.532s4.566-10.54 10.533-10.54 10.532 4.566 10.532 10.533-4.558 10.54-10.532 10.54zm0-14.05c-2.11 0-3.512 1.4-3.512 3.51s1.4 3.512 3.51 3.512 3.51-1.402 3.51-3.51-1.4-3.512-3.51-3.512z"/></svg>'
        },
        78620: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11" width="11" height="11"><path fill="none" stroke="currentColor" d="M10.5 6v3.5a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1H5m5.5 0L6 5M7 .5h3.5V4"/></svg>'
        },
        3044: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50"><path d="M20 17.995c0-1.102.753-1.51 1.69-.91l10.62 6.83c.934.6.937 1.57 0 2.17l-10.62 6.83c-.934.6-1.69.192-1.69-.91v-14.01z"/></svg>'
        },
        205128: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="27" height="16"><g fill="none"><rect width="27" height="16" fill="#2962FF" rx="8"/><path stroke="#FFF" stroke-linejoin="round" d="M8.5 3.5h6a2 2 0 0 1 2 2v1l4-2v7l-4-2v1a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2z"/><path fill="#FFF" fill-rule="nonzero" d="M20 5.309l-3.276 1.638A.5.5 0 0 1 16 6.5v-1A1.5 1.5 0 0 0 14.5 4h-6A1.5 1.5 0 0 0 7 5.5v5A1.5 1.5 0 0 0 8.5 12h6a1.5 1.5 0 0 0 1.5-1.5v-1a.5.5 0 0 1 .724-.447L20 10.69V5.309zM17 10.5a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 6 10.5v-5A2.5 2.5 0 0 1 8.5 3h6A2.5 2.5 0 0 1 17 5.5v.191l3.276-1.638A.5.5 0 0 1 21 4.5v7a.5.5 0 0 1-.724.447L17 10.31v.191z"/></g></svg>'
        },
        653063: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 14" width="56" height="14"><path fill="currentColor" d="M10.49 6.48c.95 0 1.72-.8 1.72-1.8 0-.99-.77-1.8-1.72-1.8s-1.73.81-1.73 1.8c0 1 .78 1.8 1.73 1.8Zm3.9 5.52h-4.01l3.61-9H18l-3.62 9ZM7.9 3v9H4.45V6.6H1V3h6.9ZM25.75 10.04l2.69-3.73V12h2.08V2.77h-1.89l-2.88 3.98-2.89-3.98h-1.88V12h2.06V6.3l2.7 3.74Zm6.89-5.42a1.22 1.22 0 1 0 0-2.45c-.67 0-1.23.55-1.23 1.22 0 .68.56 1.23 1.23 1.23ZM31.66 12h1.96V5.5h-1.96V12Zm3.06 0h1.96V8.84c0-1.17.58-1.7 1.32-1.7.7 0 1.05.54 1.05 1.44V12h1.96V8.24c0-1.7-.92-2.88-2.52-2.88-.84 0-1.5.36-1.8.8V5.5h-1.97V12Zm9.93.14c.87 0 1.5-.44 1.77-.79V12h1.96V2.25h-1.96v3.9c-.26-.35-.9-.8-1.77-.8-1.7 0-3.02 1.55-3.02 3.4 0 1.85 1.31 3.4 3.02 3.4Zm.44-1.78c-.88 0-1.48-.67-1.48-1.61 0-.94.6-1.61 1.48-1.61s1.48.67 1.48 1.61c0 .94-.6 1.61-1.48 1.61Zm6.62 1.78c1.43 0 2.53-.9 2.53-2.16 0-1.17-.72-1.74-1.9-2.05l-.6-.15c-.5-.14-.55-.33-.55-.47 0-.25.29-.34.53-.34.38 0 .73.14 1.03.52l1.27-1.05a2.66 2.66 0 0 0-2.28-1.08c-1.42 0-2.47.79-2.5 2-.03 1.04.61 1.83 1.85 2.13l.42.1c.68.17.8.3.8.51 0 .26-.3.37-.6.37-.6 0-1.1-.25-1.4-.68L49 10.97c.6.8 1.57 1.17 2.7 1.17Z"/></svg>'
        },
        713984: (t, e, i) => {
            "use strict";
            t.exports = i.p + "avatar.4c0c4f3044bab1770420.png"
        },
        762966: (t, e, i) => {
            "use strict";
            t.exports = i.p + "checkbox.f1829e98f3f3d9ed7ead.png"
        },
        522997: (t, e, i) => {
            "use strict";
            t.exports = i.p + "3_notes_reverb.dc905347b1eda03c1db2.mp3"
        },
        585161: (t, e, i) => {
            "use strict";
            t.exports = i.p + "alarm_clock.ba219c712b5dce956b08.mp3"
        },
        795192: (t, e, i) => {
            "use strict";
            t.exports = i.p + "alert_calling.205c6b5ccb0a10decbc1.mp3"
        },
        673503: (t, e, i) => {
            "use strict";
            t.exports = i.p + "beep_beep.cddbb5d281594d0b4b8d.mp3"
        },
        797300: (t, e, i) => {
            "use strict";
            t.exports = i.p + "chirpy.bcc136ad76d4496efe29.mp3"
        },
        549907: (t, e, i) => {
            "use strict";
            t.exports = i.p + "fault.ca1f77478c28a528be67.mp3"
        },
        840928: (t, e, i) => {
            "use strict";
            t.exports = i.p + "fired.aaee45a643068df3a94b.mp3"
        },
        878947: (t, e, i) => {
            "use strict";
            t.exports = i.p + "hand_bell.bd1c77bbd21a64aa4fe8.mp3"
        },
        926109: (t, e, i) => {
            "use strict";
            t.exports = i.p + "call.6d2888370f40fbb8cd8d.mp3"
        },
        297868: (t, e, i) => {
            "use strict";
            t.exports = i.p + "chat_calling.067c844a001001872f78.mp3"
        },
        77433: (t, e, i) => {
            "use strict";
            t.exports = i.p + "hangup.0a486c8d934145d68c11.mp3"
        },
        621031: (t, e, i) => {
            "use strict";
            t.exports = i.p + "message.c44275a460737d0d50ff.mp3"
        },
        421422: (t, e, i) => {
            "use strict";
            t.exports = i.p + "popup.184287feaec7efccbb27.mp3"
        },
        313763: (t, e, i) => {
            "use strict";
            t.exports = i.p + "notification.01a81746825289ed9423.mp3"
        }
    }
]);
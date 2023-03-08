(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [36935], {
        629084: e => {
            e.exports = {
                badge: "badge-TRXznVu1",
                content: "content-TRXznVu1",
                anchor: "anchor-TRXznVu1",
                button: "button-TRXznVu1",
                "size-xsmall": "size-xsmall-TRXznVu1",
                "size-small": "size-small-TRXznVu1",
                "size-medium": "size-medium-TRXznVu1",
                "size-large": "size-large-TRXznVu1",
                "size-xlarge": "size-xlarge-TRXznVu1"
            }
        },
        682335: e => {
            e.exports = {
                switcher: "switcher-Wv0rGnT8",
                "thumb-wrapper": "thumb-wrapper-Wv0rGnT8",
                "size-small": "size-small-Wv0rGnT8",
                "size-medium": "size-medium-Wv0rGnT8",
                "size-large": "size-large-Wv0rGnT8",
                input: "input-Wv0rGnT8",
                "intent-default": "intent-default-Wv0rGnT8",
                "disable-active-state-styles": "disable-active-state-styles-Wv0rGnT8",
                "intent-select": "intent-select-Wv0rGnT8",
                track: "track-Wv0rGnT8",
                thumb: "thumb-Wv0rGnT8"
            }
        },
        374486: e => {
            e.exports = {
                "badge-user": "badge-user-FpgDFPAn",
                "pro-premium": "pro-premium-FpgDFPAn",
                "pro-realtime": "pro-realtime-FpgDFPAn",
                pro: "pro-FpgDFPAn",
                moderator: "moderator-FpgDFPAn",
                trial: "trial-FpgDFPAn",
                "pine-wizard": "pine-wizard-FpgDFPAn",
                employee: "employee-FpgDFPAn",
                "employee-logo-icon": "employee-logo-icon-FpgDFPAn",
                "size-xsmall": "size-xsmall-FpgDFPAn",
                "size-small": "size-small-FpgDFPAn",
                "size-medium": "size-medium-FpgDFPAn",
                "size-large": "size-large-FpgDFPAn",
                "size-xlarge": "size-xlarge-FpgDFPAn"
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
        545829: e => {
            e.exports = {
                separator: "separator-w5iW5vBm",
                small: "small-w5iW5vBm",
                normal: "normal-w5iW5vBm",
                large: "large-w5iW5vBm"
            }
        },
        774465: (e, a, t) => {
            "use strict";
            t.d(a, {
                AnchorBadge: () => p,
                Badge: () => d,
                BadgeSize: () => o.BadgeSize
            });
            var r = t(50959),
                n = t(497754),
                i = t.n(n),
                o = t(105573),
                s = t(629084),
                l = t.n(s);

            function c(e) {
                const {
                    size: a = o.BadgeSize.Medium,
                    className: t
                } = e;
                return i()(l().badge, a && l()[`size-${a}`], t)
            }

            function m(e) {
                return i()(c(e), l().anchor)
            }

            function u(e) {
                const {
                    children: a,
                    contentClassName: t
                } = e;
                return r.createElement("span", {
                    className: i()(l().content, t)
                }, a)
            }

            function d(e) {
                const {
                    size: a,
                    children: t,
                    className: n,
                    contentClassName: i,
                    ...o
                } = e;
                return r.createElement("span", { ...o,
                    className: c({
                        size: a,
                        className: n
                    })
                }, r.createElement(u, {
                    contentClassName: i
                }, t))
            }

            function p(e) {
                const {
                    size: a,
                    children: t,
                    className: n,
                    contentClassName: i,
                    ...o
                } = e;
                return r.createElement("a", { ...o,
                    className: m({
                        size: a,
                        className: n
                    })
                }, r.createElement(u, {
                    contentClassName: i
                }, t))
            }
        },
        105573: (e, a, t) => {
            "use strict";
            var r;
            t.d(a, {
                    BadgeSize: () => r
                }),
                function(e) {
                    e.XSmall = "xsmall", e.Small = "small", e.Medium = "medium", e.Large = "large", e.XLarge = "xlarge"
                }(r || (r = {}))
        },
        728804: (e, a, t) => {
            "use strict";
            t.d(a, {
                CustomBehaviourContext: () => r,
                presetDefault: () => n,
                presetPlatform: () => i
            });
            const r = (0, t(50959).createContext)({
                enableActiveStateStyles: !0
            });
            r.displayName = "CustomBehaviourContext";
            const n = {
                    enableActiveStateStyles: !0
                },
                i = {
                    enableActiveStateStyles: !1
                }
        },
        694553: (e, a, t) => {
            "use strict";
            t.d(a, {
                Switch: () => c
            });
            var r = t(50959),
                n = t(497754),
                i = t(728804),
                o = t(682335),
                s = t.n(o);

            function l(e) {
                const a = (0, r.useContext)(i.CustomBehaviourContext),
                    {
                        className: t,
                        intent: o = "default",
                        size: l = "small",
                        enableActiveStateStyles: c = a.enableActiveStateStyles
                    } = e;
                return n(t, s().switcher, s()[`size-${l}`], s()[`intent-${o}`], !c && s()["disable-active-state-styles"])
            }

            function c(e) {
                var a;
                const {
                    reference: t,
                    size: n,
                    intent: i,
                    role: o,
                    "aria-checked": c,
                    checked: m,
                    defaultChecked: u,
                    onKeyDown: d,
                    ...p
                } = e, g = (0, r.useCallback)((e => {
                    13 === e.keyCode && e.target.click(), d && d(e)
                }), [d]);
                return r.createElement("span", {
                    className: l(e)
                }, r.createElement("input", { ...p,
                    type: "checkbox",
                    className: s().input,
                    ref: t,
                    role: null != o ? o : "switch",
                    "aria-checked": null !== (a = null != c ? c : m) && void 0 !== a ? a : u,
                    checked: m,
                    defaultChecked: u,
                    onKeyDown: g
                }), r.createElement("span", {
                    className: s()["thumb-wrapper"]
                }, r.createElement("span", {
                    className: s().track
                }), r.createElement("span", {
                    className: s().thumb
                })))
            }
        },
        735218: (e, a, t) => {
            "use strict";
            t.d(a, {
                LanguageSelector: () => o
            });
            var r = t(50959),
                n = t(812352),
                i = t(634993);

            function o(e) {
                return r.createElement(r.Fragment, null, Object.entries((0, n.getLocales)()).map((([a, {
                    language_name: t
                }]) => r.createElement(i.PopupMenuItem, { ...e,
                    key: a,
                    label: t,
                    isActive: window.locale === a,
                    onClick: function() {
                        e.onClick && e.onClick(a);
                        window.TVD ? window.TVD.setLocale(a) : function(e) {
                            const a = document.createElement("form");
                            a.action = "/change_language/", a.method = "POST";
                            const t = document.createElement("input");
                            t.name = "language", t.value = e, a.appendChild(t), document.body.appendChild(a), a.submit(), document.body.removeChild(a)
                        }(a)
                    },
                    reference: e.itemReference ? e.itemReference(a) : void 0,
                    "aria-checked": e.setAriaChecked ? window.locale === a : void 0
                }))))
            }
        },
        409648: (e, a, t) => {
            "use strict";
            t.d(a, {
                numberToLocalesString: () => i
            });
            var r = t(768038);

            function n(e) {
                return e.split("").reverse().join("")
            }

            function i(e, a = "en") {
                const {
                    digitGroupSeparator: t,
                    decimalSeparator: i
                } = function(e) {
                    return ["en", "us", "in", "zh_CN", "zh_TW", "ms_MY", "th_TH", "kr", "ja", "uk", "he_IL"].includes(e) ? {
                        digitGroupSeparator: ",",
                        decimalSeparator: "."
                    } : {
                        digitGroupSeparator: " ",
                        decimalSeparator: ","
                    }
                }(a), o = e.toString(), [s, l = ""] = o.split("."), c = n(s).match(/.{1,3}/g), m = null === c ? "0" : c.map(n).reverse().join(t);
                return (0, r.forceLTRStrSsr)(`${m}${""===l?"":i}${l}`)
            }
        },
        812352: (e, a, t) => {
            "use strict";
            t.d(a, {
                getLocales: () => o,
                getLocale: () => s,
                getLocaleIso: () => l
            });
            var r = t(650151),
                n = t(448641);
            const i = function() {
                const e = document.querySelectorAll("link[rel~=link-locale][data-locale]");
                if (0 === e.length) return n;
                const a = {};
                return e.forEach((e => {
                    const t = (0, r.ensureNotNull)(e.getAttribute("data-locale"));
                    a[t] = { ...n[t],
                        href: e.href
                    }
                })), a
            }();

            function o() {
                return i
            }

            function s(e) {
                return e = e || window.locale, i[e]
            }

            function l(e) {
                var a;
                return e = e || window.locale, null === (a = i[e]) || void 0 === a ? void 0 : a.iso
            }
        },
        540935: (e, a, t) => {
            "use strict";
            var r;
            t.d(a, {
                    BadgeUserNames: () => r
                }),
                function(e) {
                    e.Moderator = "moderator", e.Employee = "employee", e.PineWizard = "pine_wizard", e.ProPremium = "pro:pro_premium", e.ProPremiumTrial = "pro:pro_premium_trial",
                        e.ProRealTime = "pro:pro_realtime", e.ProRealTimeTrial = "pro:pro_realtime_trial", e.Pro = "pro:pro", e.ProTrial = "pro:pro_trial"
                }(r || (r = {}))
        },
        271402: (e, a, t) => {
            "use strict";
            t.d(a, {
                BadgeUser: () => c
            });
            var r = t(50959),
                n = t(497754),
                i = t(359984),
                o = t(558470),
                s = t(987763),
                l = t(374486);

            function c(e) {
                const {
                    name: a,
                    size: t = o.BadgeSize.Small,
                    href: n,
                    title: c,
                    className: d,
                    ...p
                } = e;
                return n ? r.createElement(o.AnchorBadge, { ...p,
                    className: m(a, t, c, d),
                    title: (0, i.isBadgeUserWithTitle)(a) ? c : void 0,
                    "aria-label": (0, i.isEmployee)(a) && (0, i.isBadgeUserWithTitle)(a) ? c : void 0,
                    size: t,
                    href: n,
                    target: "_blank"
                }, u(a), (0, i.isEmployee)(a) && r.createElement("img", {
                    src: s,
                    className: l["employee-logo-icon"],
                    role: "presentation",
                    loading: "lazy"
                })) : r.createElement(o.Badge, {
                    className: m(a, t, c, d),
                    title: (0, i.isBadgeUserWithTitle)(a) ? c : void 0,
                    "aria-label": (0, i.isEmployee)(a) && (0, i.isBadgeUserWithTitle)(a) ? c : void 0,
                    size: t,
                    ...p
                }, u(a), (0, i.isEmployee)(a) && r.createElement("img", {
                    src: s,
                    className: l["employee-logo-icon"],
                    role: "presentation",
                    loading: "lazy"
                }))
            }

            function m(e, a = o.BadgeSize.Small, t, r) {
                return n(l["badge-user"], l[`size-${a}`], (0, i.isProPremium)(e) && l["pro-premium"], (0, i.isProRealtime)(e) && l["pro-realtime"], (0, i.isPro)(e) && l.pro, (0, i.isModerator)(e) && l.moderator, (0, i.isEmployee)(e) && l.employee, (0, i.isPineWizard)(e) && l["pine-wizard"], (0, i.isTrial)(e) && l.trial, t && "apply-common-tooltip", r)
            }

            function u(e) {
                return (0, i.isProPremium)(e) ? "Premium" : (0, i.isProRealtime)(e) ? "Pro+" : (0, i.isPro)(e) ? "Pro" : (0, i.isModerator)(e) ? "Mod" : (0, i.isPineWizard)(e) ? "Wizard" : ""
            }
        },
        359984: (e, a, t) => {
            "use strict";
            t.d(a, {
                isBadgeUserWithTitle: () => i,
                isBadgeUser: () => s,
                isModerator: () => l,
                isProPremium: () => c,
                isProRealtime: () => m,
                isPro: () => u,
                isEmployee: () => d,
                isPineWizard: () => p,
                isTrial: () => g
            });
            var r = t(540935);
            const n = new Set([r.BadgeUserNames.Employee, r.BadgeUserNames.PineWizard, r.BadgeUserNames.Moderator, r.BadgeUserNames.ProPremiumTrial, r.BadgeUserNames.ProRealTimeTrial, r.BadgeUserNames.ProTrial]);

            function i(e) {
                return n.has(e)
            }
            const o = new Set(Object.values(r.BadgeUserNames));

            function s(e) {
                return o.has(e)
            }

            function l(e) {
                return r.BadgeUserNames.Moderator === e
            }

            function c(e) {
                return r.BadgeUserNames.ProPremium === e || r.BadgeUserNames.ProPremiumTrial === e
            }

            function m(e) {
                return r.BadgeUserNames.ProRealTime === e || r.BadgeUserNames.ProRealTimeTrial === e
            }

            function u(e) {
                return r.BadgeUserNames.Pro === e || r.BadgeUserNames.ProTrial === e
            }

            function d(e) {
                return r.BadgeUserNames.Employee === e
            }

            function p(e) {
                return r.BadgeUserNames.PineWizard === e
            }

            function g(e) {
                return r.BadgeUserNames.ProPremiumTrial === e || r.BadgeUserNames.ProRealTimeTrial === e || r.BadgeUserNames.ProTrial === e
            }
        },
        558470: (e, a, t) => {
            "use strict";
            t.d(a, {
                AnchorBadge: () => r.AnchorBadge,
                Badge: () => r.Badge,
                BadgeSize: () => r.BadgeSize
            });
            var r = t(774465)
        },
        634993: (e, a, t) => {
            "use strict";
            t.d(a, {
                DEFAULT_POPUP_MENU_ITEM_THEME: () => c,
                PopupMenuItem: () => u
            });
            var r = t(50959),
                n = t(497754),
                i = t(224743),
                o = t(345848),
                s = t(8626),
                l = t(655498);
            const c = l;

            function m(e) {
                e.stopPropagation()
            }

            function u(e) {
                const {
                    id: a,
                    role: t,
                    "aria-label": c,
                    "aria-selected": u,
                    "aria-checked": d,
                    className: p,
                    title: g,
                    labelRowClassName: h,
                    labelClassName: v,
                    shortcut: b,
                    forceShowShortcuts: f,
                    icon: w,
                    isActive: P,
                    isDisabled: z,
                    isHovered: N,
                    appearAsDisabled: C,
                    label: T,
                    link: y,
                    showToolboxOnHover: E,
                    target: B,
                    rel: k,
                    toolbox: R,
                    reference: A,
                    onMouseOut: S,
                    onMouseOver: _,
                    onKeyDown: W,
                    suppressToolboxClick: x = !0,
                    theme: D = l,
                    tabIndex: M,
                    tagName: U,
                    renderComponent: F
                } = e, G = (0, s.filterDataProps)(e), I = (0, r.useRef)(null), O = (0, r.useMemo)((() => function(e) {
                    function a(a) {
                        const {
                            reference: t,
                            ...n
                        } = a, i = null != e ? e : n.href ? "a" : "div", o = "a" === i ? n : function(e) {
                            const {
                                download: a,
                                href: t,
                                hrefLang: r,
                                media: n,
                                ping: i,
                                rel: o,
                                target: s,
                                type: l,
                                referrerPolicy: c,
                                ...m
                            } = e;
                            return m
                        }(n);
                        return r.createElement(i, { ...o,
                            ref: t
                        })
                    }
                    return a.displayName = `DefaultComponent(${e})`, a
                }(U)), [U]), H = null != F ? F : O;
                return r.createElement(H, { ...G,
                    id: a,
                    role: t,
                    "aria-label": c,
                    "aria-selected": u,
                    "aria-checked": d,
                    className: n(p, D.item, w && D.withIcon, {
                        [D.isActive]: P,
                        [D.isDisabled]: z || C,
                        [D.hovered]: N
                    }),
                    title: g,
                    href: y,
                    target: B,
                    rel: k,
                    reference: function(e) {
                        I.current = e, "function" == typeof A && A(e);
                        "object" == typeof A && (A.current = e)
                    },
                    onClick: function(a) {
                        const {
                            dontClosePopup: t,
                            onClick: r,
                            onClickArg: n,
                            trackEventObject: s
                        } = e;
                        if (z) return;
                        s && (0, o.trackEvent)(s.category, s.event, s.label);
                        r && r(n, a);
                        t || (0, i.globalCloseMenu)()
                    },
                    onContextMenu: function(a) {
                        const {
                            trackEventObject: t,
                            trackRightClick: r
                        } = e;
                        t && r && (0, o.trackEvent)(t.category, t.event, `${t.label}_rightClick`)
                    },
                    onMouseUp: function(a) {
                        const {
                            trackEventObject: t,
                            trackMouseWheelClick: r
                        } = e;
                        if (1 === a.button && y && t) {
                            let e = t.label;
                            r && (e += "_mouseWheelClick"), (0, o.trackEvent)(t.category, t.event, e)
                        }
                    },
                    onMouseOver: _,
                    onMouseOut: S,
                    onKeyDown: W,
                    tabIndex: M
                }, void 0 !== w && r.createElement("span", {
                    className: D.icon,
                    dangerouslySetInnerHTML: {
                        __html: w
                    }
                }), r.createElement("span", {
                    className: n(D.labelRow, h)
                }, r.createElement("span", {
                    className: n(D.label, v)
                }, T)), (void 0 !== b || f) && r.createElement("span", {
                    className: D.shortcut
                }, (L = b) && L.split("+").join(" + ")), void 0 !== R && r.createElement("span", {
                    onClick: x ? m : void 0,
                    className: n(D.toolbox, {
                        [D.showOnHover]: E
                    })
                }, R));
                var L
            }
        },
        93916: (e, a, t) => {
            "use strict";
            t.d(a, {
                PopupMenuSeparator: () => s
            });
            var r = t(50959),
                n = t(497754),
                i = t.n(n),
                o = t(545829);

            function s(e) {
                const {
                    size: a = "normal",
                    className: t,
                    ariaHidden: n = !1
                } = e;
                return r.createElement("div", {
                    className: i()(o.separator, "small" === a && o.small, "normal" === a && o.normal, "large" === a && o.large, t),
                    role: "separator",
                    "aria-hidden": n
                })
            }
        },
        206001: e => {
            e.exports = {
                wrapper: "wrapper-n_GqAsy6",
                hovered: "hovered-n_GqAsy6",
                withIcon: "withIcon-n_GqAsy6",
                labelRow: "labelRow-n_GqAsy6",
                label: "label-n_GqAsy6",
                switchWrap: "switchWrap-n_GqAsy6",
                icon: "icon-n_GqAsy6",
                labelHint: "labelHint-n_GqAsy6",
                labelOn: "labelOn-n_GqAsy6"
            }
        },
        320711: (e, a, t) => {
            "use strict";
            t.d(a, {
                DEFAULT_MENU_ITEM_SWITCHER_THEME: () => m,
                MenuItemSwitcher: () => u
            });
            var r = t(50959),
                n = t(497754),
                i = t.n(n),
                o = t(694553),
                s = t(83436),
                l = t(8626),
                c = t(206001);
            const m = c;

            function u(e) {
                const {
                    className: a,
                    checked: t,
                    id: n,
                    label: m,
                    labelDescription: u,
                    value: d,
                    preventLabelHighlight: p,
                    reference: g,
                    switchReference: h,
                    theme: v = c,
                    disabled: b,
                    icon: f
                } = e, w = i()(v.label, t && !p && v.labelOn), P = i()(a, v.wrapper, t && v.wrapperWithOnLabel, u && v.wrapperWithDescription);
                return r.createElement("label", {
                    className: i()(P, f && v.withIcon),
                    htmlFor: n,
                    ref: g
                }, void 0 !== f && r.createElement(s.Icon, {
                    className: v.icon,
                    icon: f
                }), r.createElement("div", {
                    className: v.labelRow
                }, r.createElement("div", {
                    className: w
                }, m), u && r.createElement("div", {
                    className: v.labelHint
                }, u)), r.createElement("div", {
                    className: c.switchWrap
                }, r.createElement(o.Switch, {
                    disabled: b,
                    className: v.switch,
                    reference: h,
                    checked: t,
                    onChange: function(a) {
                        const t = a.target.checked;
                        void 0 !== e.onChange && e.onChange(t)
                    },
                    value: d,
                    tabIndex: -1,
                    id: n,
                    role: e.switchRole,
                    ...(0, l.filterDataProps)(e)
                })))
            }
        },
        407523: (e, a, t) => {
            "use strict";
            t.d(a, {
                showTVCoinsDialog: () => n
            });
            var r = t(962725);

            function n(e) {
                Promise.all([t.e(36037), t.e(36956), t.e(4100), t.e(50251), t.e(85783), t.e(31872), t.e(75514), t.e(25977), t.e(93477), t.e(39437), t.e(28458)]).then(t.bind(t, 283961)).then((a => {
                    const {
                        page: t = r.CoinsPage.Main,
                        tab: n = r.MainTab.GetCoins,
                        productId: i = r.ProductId.Coin500,
                        ...o
                    } = e || {};
                    new a.TVCoinsDialog({
                        page: t,
                        tab: n,
                        ...o
                    }).open()
                }))
            }
        },
        962725: (e, a, t) => {
            "use strict";
            var r, n, i;
            t.d(a, {
                    ProductId: () => r,
                    CoinsPage: () => n,
                    MainTab: () => i
                }),
                function(e) {
                    e.TestCoins = "100_coins", e.Coin500 = "500_coins", e.Coin1000 = "1000_coins", e.BagAndCoin = "5000_coins"
                }(r || (r = {})),
                function(e) {
                    e.Buy = "Buy", e.Main = "Main"
                }(n || (n = {})),
                function(e) {
                    e.About = "About", e.PartnerProgram = "Partner program", e.Refer = "Refer", e.GetCoins = "Get coins", e.History = "History", e.Redeem = "Redeem"
                }(i || (i = {}))
        },
        987763: (e, a, t) => {
            "use strict";
            e.exports = t.p + "logo-tradingview.f3af8e3579cc12751704.svg"
        }
    }
]);
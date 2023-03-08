(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [89568, 78703, 95848, 802], {
        633202: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => h
            });
            var i, o, r = "function" == typeof Map ? new Map : (i = [], o = [], {
                    has: function(t) {
                        return i.indexOf(t) > -1
                    },
                    get: function(t) {
                        return o[i.indexOf(t)]
                    },
                    set: function(t, e) {
                        -1 === i.indexOf(t) && (i.push(t), o.push(e))
                    },
                    delete: function(t) {
                        var e = i.indexOf(t);
                        e > -1 && (i.splice(e, 1), o.splice(e, 1))
                    }
                }),
                s = function(t) {
                    return new Event(t, {
                        bubbles: !0
                    })
                };
            try {
                new Event("test")
            } catch (i) {
                s = function(t) {
                    var e = document.createEvent("Event");
                    return e.initEvent(t, !0, !1), e
                }
            }

            function a(t) {
                var e = r.get(t);
                e && e.destroy()
            }

            function l(t) {
                var e = r.get(t);
                e && e.update()
            }
            var c = null;
            "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((c = function(t) {
                return t
            }).destroy = function(t) {
                return t
            }, c.update = function(t) {
                return t
            }) : ((c = function(t, e) {
                return t && Array.prototype.forEach.call(t.length ? t : [t], (function(t) {
                    return function(t) {
                        if (t && t.nodeName && "TEXTAREA" === t.nodeName && !r.has(t)) {
                            var e, n = null,
                                i = null,
                                o = null,
                                a = function() {
                                    t.clientWidth !== i && u()
                                },
                                l = function(e) {
                                    window.removeEventListener("resize", a, !1), t.removeEventListener("input", u, !1), t.removeEventListener("keyup", u, !1), t.removeEventListener("autosize:destroy", l, !1), t.removeEventListener("autosize:update", u, !1), Object.keys(e).forEach((function(n) {
                                        t.style[n] = e[n]
                                    })), r.delete(t)
                                }.bind(t, {
                                    height: t.style.height,
                                    resize: t.style.resize,
                                    overflowY: t.style.overflowY,
                                    overflowX: t.style.overflowX,
                                    wordWrap: t.style.wordWrap
                                });
                            t.addEventListener("autosize:destroy", l, !1), "onpropertychange" in t && "oninput" in t && t.addEventListener("keyup", u, !1), window.addEventListener("resize", a, !1), t.addEventListener("input", u, !1), t.addEventListener("autosize:update", u, !1), t.style.overflowX = "hidden", t.style.wordWrap = "break-word", r.set(t, {
                                destroy: l,
                                update: u
                            }), "vertical" === (e = window.getComputedStyle(t, null)).resize ? t.style.resize = "none" : "both" === e.resize && (t.style.resize = "horizontal"), n = "content-box" === e.boxSizing ? -(parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)) : parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth), isNaN(n) && (n = 0), u()
                        }

                        function c(e) {
                            var n = t.style.width;
                            t.style.width = "0px", t.style.width = n, t.style.overflowY = e
                        }

                        function h() {
                            if (0 !== t.scrollHeight) {
                                var e = function(t) {
                                        for (var e = []; t && t.parentNode && t.parentNode instanceof Element;) t.parentNode.scrollTop && e.push({
                                            node: t.parentNode,
                                            scrollTop: t.parentNode.scrollTop
                                        }), t = t.parentNode;
                                        return e
                                    }(t),
                                    o = document.documentElement && document.documentElement.scrollTop;
                                t.style.height = "", t.style.height = t.scrollHeight + n + "px", i = t.clientWidth, e.forEach((function(t) {
                                    t.node.scrollTop = t.scrollTop
                                })), o && (document.documentElement.scrollTop = o)
                            }
                        }

                        function u() {
                            h();
                            var e = Math.round(parseFloat(t.style.height)),
                                n = window.getComputedStyle(t, null),
                                i = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : t.offsetHeight;
                            if (i < e ? "hidden" === n.overflowY && (c("scroll"), h(), i = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight) : "hidden" !== n.overflowY && (c("hidden"), h(),
                                    i = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight), o !== i) {
                                o = i;
                                var r = s("autosize:resized");
                                try {
                                    t.dispatchEvent(r)
                                } catch (t) {}
                            }
                        }
                    }(t)
                })), t
            }).destroy = function(t) {
                return t && Array.prototype.forEach.call(t.length ? t : [t], a), t
            }, c.update = function(t) {
                return t && Array.prototype.forEach.call(t.length ? t : [t], l), t
            });
            const h = c
        },
        471194: t => {
            t.exports = {}
        },
        629084: t => {
            t.exports = {
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
        906189: t => {
            t.exports = {
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
        103327: t => {
            t.exports = {
                "round-button": "round-button-Ma_jZLM8",
                icon: "icon-Ma_jZLM8",
                content: "content-Ma_jZLM8",
                link: "link-Ma_jZLM8",
                "color-brand": "color-brand-Ma_jZLM8",
                "variant-primary": "variant-primary-Ma_jZLM8",
                "disable-themes": "disable-themes-Ma_jZLM8",
                "variant-quiet-primary": "variant-quiet-primary-Ma_jZLM8",
                "variant-secondary": "variant-secondary-Ma_jZLM8",
                "variant-ghost": "variant-ghost-Ma_jZLM8",
                "color-gray": "color-gray-Ma_jZLM8",
                "color-red": "color-red-Ma_jZLM8",
                "size-xsmall": "size-xsmall-Ma_jZLM8",
                "icon-only": "icon-only-Ma_jZLM8",
                "size-small": "size-small-Ma_jZLM8",
                "size-medium": "size-medium-Ma_jZLM8",
                "size-large": "size-large-Ma_jZLM8",
                "size-xlarge": "size-xlarge-Ma_jZLM8",
                "size-xxlarge": "size-xxlarge-Ma_jZLM8",
                animated: "animated-Ma_jZLM8",
                stretch: "stretch-Ma_jZLM8"
            }
        },
        428146: t => {
            t.exports = {
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
        733319: t => {
            t.exports = {
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
        53182: t => {
            t.exports = {
                hidden: "hidden-dY7nIKs1",
                buttonIcon: "buttonIcon-dY7nIKs1"
            }
        },
        286625: t => {
            t.exports = {
                "tv-spinner__container-rotate": "tv-spinner__container-rotate-OAzoNsnS"
            }
        },
        777680: t => {
            t.exports = {
                buttonInner: "buttonInner-_lBBkIFe",
                button: "button-_lBBkIFe",
                hidden: "hidden-_lBBkIFe",
                checked: "checked-_lBBkIFe",
                unchecked: "unchecked-_lBBkIFe",
                uncheckHint: "uncheckHint-_lBBkIFe",
                "i-checked": "i-checked-_lBBkIFe"
            }
        },
        454312: t => {
            t.exports = {}
        },
        107631: t => {
            t.exports = {
                wrapper: "wrapper-NSBB5lqy",
                touch: "touch-NSBB5lqy"
            }
        },
        415784: t => {
            t.exports = {}
        },
        692214: t => {
            t.exports = {
                "badge-broker": "badge-broker-YnwYte0E",
                featured: "featured-YnwYte0E",
                platinum: "platinum-YnwYte0E",
                link: "link-YnwYte0E",
                gold: "gold-YnwYte0E",
                silver: "silver-YnwYte0E"
            }
        },
        374486: t => {
            t.exports = {
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
        931651: t => {
            t.exports = {
                childrenWrapper: "childrenWrapper-qQM_QN_m",
                shown: "shown-qQM_QN_m",
                loader: "loader-qQM_QN_m"
            }
        },
        531428: t => {
            t.exports = {}
        },
        982730: t => {
            t.exports = {}
        },
        173777: (t, e, n) => {
            "use strict";
            n.d(e, {
                SEPARATOR_PREFIX: () => i,
                isSeparatorItem: () => o
            });
            const i = "###";

            function o(t) {
                return t.startsWith(i)
            }
        },
        774465: (t, e, n) => {
            "use strict";
            n.d(e, {
                AnchorBadge: () => p,
                Badge: () => d,
                BadgeSize: () => s.BadgeSize
            });
            var i = n(50959),
                o = n(497754),
                r = n.n(o),
                s = n(105573),
                a = n(629084),
                l = n.n(a);

            function c(t) {
                const {
                    size: e = s.BadgeSize.Medium,
                    className: n
                } = t;
                return r()(l().badge, e && l()[`size-${e}`], n)
            }

            function h(t) {
                return r()(c(t), l().anchor)
            }

            function u(t) {
                const {
                    children: e,
                    contentClassName: n
                } = t;
                return i.createElement("span", {
                    className: r()(l().content, n)
                }, e)
            }

            function d(t) {
                const {
                    size: e,
                    children: n,
                    className: o,
                    contentClassName: r,
                    ...s
                } = t;
                return i.createElement("span", { ...s,
                    className: c({
                        size: e,
                        className: o
                    })
                }, i.createElement(u, {
                    contentClassName: r
                }, n))
            }

            function p(t) {
                const {
                    size: e,
                    children: n,
                    className: o,
                    contentClassName: r,
                    ...s
                } = t;
                return i.createElement("a", { ...s,
                    className: h({
                        size: e,
                        className: o
                    })
                }, i.createElement(u, {
                    contentClassName: r
                }, n))
            }
        },
        105573: (t, e, n) => {
            "use strict";
            var i;
            n.d(e, {
                    BadgeSize: () => i
                }),
                function(t) {
                    t.XSmall = "xsmall", t.Small = "small", t.Medium = "medium", t.Large = "large", t.XLarge = "xlarge"
                }(i || (i = {}))
        },
        540975: (t, e, n) => {
            "use strict";
            n.d(e, {
                AnchorButton: () => u,
                Button: () => c
            });
            var i = n(50959),
                o = n(915812);

            function r(t = "default") {
                switch (t) {
                    case "default":
                        return "primary";
                    case "stroke":
                        return "secondary"
                }
            }

            function s(t = "primary") {
                switch (t) {
                    case "primary":
                        return "brand";
                    case "success":
                        return "green";
                    case "default":
                        return "gray";
                    case "danger":
                        return "red"
                }
            }

            function a(t = "m") {
                switch (t) {
                    case "s":
                        return "xsmall";
                    case "m":
                        return "small";
                    case "l":
                        return "large"
                }
            }

            function l(t) {
                const {
                    intent: e,
                    size: n,
                    appearance: i,
                    useFullWidth: o,
                    icon: l,
                    ...c
                } = t;
                return { ...c,
                    color: s(e),
                    size: a(n),
                    variant: r(i),
                    stretch: o,
                    startIcon: l
                }
            }

            function c(t) {
                return i.createElement(o.SquareButton, { ...l(t)
                })
            }

            function h(t) {
                const {
                    intent: e,
                    size: n,
                    appearance: i,
                    useFullWidth: o,
                    icon: l,
                    ...c
                } = t;
                return { ...c,
                    color: s(e),
                    size: a(n),
                    variant: r(i),
                    stretch: o,
                    startIcon: l
                }
            }

            function u(t) {
                return i.createElement(o.SquareAnchorButton, { ...h(t)
                })
            }
        },
        87745: (t, e, n) => {
            "use strict";

            function i(t, e) {
                return e || null == t || ("string" == typeof t || Array.isArray(t)) && 0 === t.length
            }
            n.d(e, {
                isIconOnly: () => i
            })
        },
        897782: (t, e, n) => {
            "use strict";
            n.d(e, {
                NavButton: () => c
            });
            var i = n(50959),
                o = n(497754),
                r = n(83436),
                s = n(906189);

            function a(t) {
                const {
                    size: e = "large",
                    preservePaddings: n,
                    isLink: i,
                    flipIconOnRtl: r,
                    className: a
                } = t;
                return o(s["nav-button"], s[`size-${e}`], n && s["preserve-paddings"], r && s["flip-icon"], i && s.link, a)
            }

            function l(t) {
                const {
                    children: e,
                    icon: n
                } = t;
                return i.createElement(i.Fragment, null, i.createElement("span", {
                    className: s.background
                }), i.createElement(r.Icon, {
                    icon: n,
                    className: s.icon,
                    "aria-hidden": !0
                }), e && i.createElement("span", {
                    className: s["visually-hidden"]
                }, e))
            }
            const c = (0, i.forwardRef)(((t, e) => {
                const {
                    icon: n,
                    type: o = "button",
                    preservePaddings: r,
                    flipIconOnRtl: s,
                    size: c,
                    "aria-label": h,
                    ...u
                } = t;
                return i.createElement("button", { ...u,
                    className: a({ ...t,
                        children: h
                    }),
                    ref: e,
                    type: o
                }, i.createElement(l, {
                    icon: n
                }, h))
            }));
            c.displayName = "NavButton";
            var h = n(14388),
                u = n(551080);
            (0, i.forwardRef)(((t, e) => {
                const {
                    icon: n,
                    renderComponent: o,
                    "aria-label": r,
                    ...s
                } = t, c = null != o ? o : h.CustomComponentDefaultLink;
                return i.createElement(c, { ...s,
                    className: a({ ...t,
                        children: r,
                        isLink: !0
                    }),
                    reference: (0, u.isomorphicRef)(e)
                }, i.createElement(l, {
                    icon: n
                }, r))
            })).displayName = "NavAnchorButton"
        },
        201465: (t, e, n) => {
            "use strict";
            n.d(e, {
                RoundAnchorButton: () => _,
                RoundButton: () => d
            });
            var i = n(497754);

            function o(t, e) {
                const {
                    className: n,
                    color: o = "brand",
                    variant: r = "primary",
                    size: s = "xlarge",
                    stretch: a,
                    animated: l = !1,
                    disableThemes: c = !1,
                    iconOnly: h = !1,
                    isAnchor: u = !1
                } = e;
                return i(n, t["round-button"], t[`color-${o}`], t[`variant-${r}`], t[`size-${s}`], l && t.animated, a && t.stretch, c && t["disable-themes"], h && t["icon-only"], u && t.link)
            }
            var r = n(50959),
                s = n(83436),
                a = n(8626),
                l = n(87745),
                c = n(103327),
                h = n.n(c);

            function u(t) {
                const {
                    className: e,
                    color: n,
                    variant: i,
                    size: o,
                    stretch: r,
                    animated: s,
                    disableThemes: l,
                    ...c
                } = t;
                return { ...c,
                    ...(0, a.filterDataProps)(t),
                    ...(0, a.filterAriaProps)(t)
                }
            }

            function d(t) {
                const {
                    reference: e,
                    children: n,
                    iconOnly: i,
                    endIcon: a,
                    ...c
                } = t, d = o(h(), t);
                return r.createElement("button", { ...u(c),
                    className: d,
                    ref: e
                }, !(0, l.isIconOnly)(n, i) && r.createElement("span", {
                    className: h().content
                }, n), a && r.createElement(s.Icon, {
                    className: h().icon,
                    icon: a
                }))
            }
            var p = n(14388),
                m = n(551080);

            function g(t) {
                const {
                    className: e,
                    color: n,
                    variant: i,
                    size: o,
                    stretch: r,
                    animated: s,
                    disableThemes: l,
                    ...c
                } = t;
                return { ...c,
                    ...(0, a.filterDataProps)(t),
                    ...(0,
                        a.filterAriaProps)(t)
                }
            }

            function _(t) {
                const {
                    reference: e,
                    children: n,
                    renderComponent: i,
                    iconOnly: a,
                    endIcon: c,
                    ...u
                } = t, d = o(h(), { ...t,
                    isAnchor: !0
                }), _ = null != i ? i : p.CustomComponentDefaultLink;
                return r.createElement(_, { ...g(u),
                    className: d,
                    reference: (0, m.isomorphicRef)(e)
                }, !(0, l.isIconOnly)(n, a) && r.createElement("span", {
                    className: h().content
                }, n), c && r.createElement(s.Icon, {
                    className: h().icon,
                    icon: c
                }))
            }
        },
        915812: (t, e, n) => {
            "use strict";
            n.d(e, {
                SquareButton: () => i.SquareButton,
                SquareAnchorButton: () => o.SquareAnchorButton
            });
            n(221191);
            var i = n(422175),
                o = n(951144)
        },
        951144: (t, e, n) => {
            "use strict";
            n.d(e, {
                SquareAnchorButton: () => l
            });
            var i = n(50959),
                o = n(301792),
                r = n(8626),
                s = n(221191);

            function a(t) {
                const {
                    className: e,
                    color: n,
                    variant: i,
                    size: o,
                    stretch: s,
                    animated: a,
                    icon: l,
                    iconOnly: c,
                    startIcon: h,
                    endIcon: u,
                    ...d
                } = t;
                return { ...d,
                    ...(0, r.filterDataProps)(t),
                    ...(0, r.filterAriaProps)(t)
                }
            }

            function l(t) {
                const {
                    reference: e
                } = t, {
                    isGrouped: n,
                    cellState: r,
                    disablePositionAdjustment: l
                } = (0, i.useContext)(o.ControlGroupContext), c = (0, s.getSquareButtonClasses)({ ...t,
                    isGrouped: n,
                    cellState: r,
                    disablePositionAdjustment: l,
                    isAnchor: !0
                });
                return i.createElement("a", { ...a(t),
                    className: c,
                    ref: e
                }, i.createElement(s.SquareButtonContent, { ...t
                }))
            }
        },
        221191: (t, e, n) => {
            "use strict";
            n.d(e, {
                getSquareButtonClasses: () => c,
                SquareButtonContent: () => h
            });
            var i = n(50959),
                o = n(497754),
                r = n(307754),
                s = n(83436),
                a = n(428146),
                l = n.n(a);

            function c(t) {
                const {
                    color: e = "brand",
                    size: n = "medium",
                    variant: i = "primary",
                    stretch: s = !1,
                    icon: a,
                    startIcon: c,
                    endIcon: h,
                    iconOnly: u = !1,
                    className: d,
                    isGrouped: p,
                    cellState: m,
                    disablePositionAdjustment: g = !1,
                    isAnchor: _ = !1
                } = t, f = function(t) {
                    let e = "";
                    return 0 !== t && (1 & t && (e = o(e, l()["no-corner-top-left"])), 2 & t && (e = o(e, l()["no-corner-top-right"])), 4 & t && (e = o(e, l()["no-corner-bottom-right"])), 8 & t && (e = o(e, l()["no-corner-bottom-left"]))), e
                }((0, r.getGroupCellRemoveRoundBorders)(m));
                return o(d, l().button, l()[`size-${n}`], l()[`color-${e}`], l()[`variant-${i}`], s && l().stretch, (a || c) && l()["with-start-icon"], h && l()["with-end-icon"], u && l()["icon-only"], f, p && l().grouped, p && !g && l()["adjust-position"], p && m.isTop && l()["first-row"], p && m.isLeft && l()["first-col"], _ && l().link)
            }

            function h(t) {
                const {
                    startIcon: e,
                    icon: n,
                    iconOnly: o,
                    children: r,
                    endIcon: a
                } = t, c = null != e ? e : n;
                return i.createElement(i.Fragment, null, c && i.createElement(s.Icon, {
                    icon: c,
                    className: l()["start-icon-wrap"]
                }), r && i.createElement("span", {
                    className: l().content
                }, r), a && !o && i.createElement(s.Icon, {
                    icon: a,
                    className: l()["end-icon-wrap"]
                }))
            }
        },
        422175: (t, e, n) => {
            "use strict";
            n.d(e, {
                SquareButton: () => l
            });
            var i = n(50959),
                o = n(301792),
                r = n(8626),
                s = n(221191);

            function a(t) {
                const {
                    className: e,
                    color: n,
                    variant: i,
                    size: o,
                    stretch: s,
                    animated: a,
                    icon: l,
                    iconOnly: c,
                    startIcon: h,
                    endIcon: u,
                    ...d
                } = t;
                return { ...d,
                    ...(0, r.filterDataProps)(t),
                    ...(0, r.filterAriaProps)(t)
                }
            }

            function l(t) {
                const {
                    reference: e,
                    ...n
                } = t, {
                    isGrouped: r,
                    cellState: l,
                    disablePositionAdjustment: c
                } = (0, i.useContext)(o.ControlGroupContext), h = (0, s.getSquareButtonClasses)({ ...n,
                    isGrouped: r,
                    cellState: l,
                    disablePositionAdjustment: c
                });
                return i.createElement("button", { ...a(n),
                    className: h,
                    ref: e
                }, i.createElement(s.SquareButtonContent, { ...n
                }))
            }
        },
        301792: (t, e, n) => {
            "use strict";
            n.d(e, {
                ControlGroupContext: () => i
            });
            const i = n(50959).createContext({
                isGrouped: !1,
                cellState: {
                    isTop: !0,
                    isRight: !0,
                    isBottom: !0,
                    isLeft: !0
                }
            })
        },
        307754: (t, e, n) => {
            "use strict";

            function i(t) {
                let e = 0;
                return t.isTop && t.isLeft || (e += 1), t.isTop && t.isRight || (e += 2), t.isBottom && t.isLeft || (e += 8), t.isBottom && t.isRight || (e += 4), e
            }
            n.d(e, {
                getGroupCellRemoveRoundBorders: () => i
            })
        },
        834995: (t, e, n) => {
            "use strict";

            function i(t) {
                const {
                    reference: e,
                    ...n
                } = t;
                return { ...n,
                    ref: e
                }
            }
            n.d(e, {
                renameRef: () => i
            })
        },
        14388: (t, e, n) => {
            "use strict";
            n.d(e, {
                CustomComponentDefaultLink: () => r
            });
            var i = n(50959),
                o = n(834995);

            function r(t) {
                return i.createElement("a", { ...(0, o.renameRef)(t)
                })
            }
            i.PureComponent
        },
        640027: (t, e, n) => {
            "use strict";
            n.d(e, {
                useIsMounted: () => o
            });
            var i = n(50959);
            const o = () => {
                const t = (0, i.useRef)(!1);
                return (0, i.useEffect)((() => (t.current = !0, () => {
                    t.current = !1
                })), []), t
            }
        },
        612247: (t, e, n) => {
            "use strict";
            n.d(e, {
                Loader: () => c
            });
            var i, o = n(50959),
                r = n(497754),
                s = n(745269),
                a = n(733319),
                l = n.n(a);
            ! function(t) {
                t[t.Initial = 0] = "Initial", t[t.Appear = 1] = "Appear", t[t.Active = 2] = "Active"
            }(i || (i = {}));
            class c extends o.PureComponent {
                constructor(t) {
                    super(t), this._stateChangeTimeout = null, this.state = {
                        state: i.Initial
                    }
                }
                render() {
                    const {
                        className: t,
                        color: e = "black",
                        size: n = "medium",
                        staticPosition: i
                    } = this.props, s = r(l().item, l()[e], l()[n]);
                    return o.createElement("span", {
                        className: r(l().loader, i && l().static, this._getStateClass(), t)
                    }, o.createElement("span", {
                        className: s
                    }), o.createElement("span", {
                        className: s
                    }), o.createElement("span", {
                        className: s
                    }))
                }
                componentDidMount() {
                    this.setState({
                        state: i.Appear
                    }), this._stateChangeTimeout = setTimeout((() => {
                        this.setState({
                            state: i.Active
                        })
                    }), 2 * s.dur)
                }
                componentWillUnmount() {
                    this._stateChangeTimeout && (clearTimeout(this._stateChangeTimeout), this._stateChangeTimeout = null)
                }
                _getStateClass() {
                    switch (this.state.state) {
                        case i.Initial:
                            return l()["loader-initial"];
                        case i.Appear:
                            return l()["loader-appear"];
                        default:
                            return ""
                    }
                }
            }
        },
        8626: (t, e, n) => {
            "use strict";

            function i(t) {
                return r(t, s)
            }

            function o(t) {
                return r(t, a)
            }

            function r(t, e) {
                const n = Object.entries(t).filter(e),
                    i = {};
                for (const [t, e] of n) i[t] = e;
                return i
            }

            function s(t) {
                const [e, n] = t;
                return 0 === e.indexOf("data-") && "string" == typeof n
            }

            function a(t) {
                return 0 === t[0].indexOf("aria-")
            }
            n.d(e, {
                filterDataProps: () => i,
                filterAriaProps: () => o,
                filterProps: () => r,
                isDataAttribute: () => s,
                isAriaAttribute: () => a
            })
        },
        746326: (t, e, n) => {
            "use strict";

            function i(t) {
                const {
                    paddingTop: e,
                    paddingBottom: n
                } = window.getComputedStyle(t);
                return [e, n].reduce(((t, e) => t - Number((e || "").replace("px", ""))), t.clientHeight)
            }

            function o(t, e = !1) {
                const n = getComputedStyle(t),
                    i = [n.height];
                return "border-box" !== n.boxSizing && i.push(n.paddingTop, n.paddingBottom, n.borderTopWidth, n.borderBottomWidth), e && i.push(n.marginTop, n.marginBottom), i.reduce(((t, e) => t + (parseFloat(e) || 0)), 0)
            }

            function r(t, e = !1) {
                const n = getComputedStyle(t),
                    i = [n.width];
                return "border-box" !== n.boxSizing && i.push(n.paddingLeft, n.paddingRight, n.borderLeftWidth, n.borderRightWidth), e && i.push(n.marginLeft, n.marginRight), i.reduce(((t, e) => t + (parseFloat(e) || 0)), 0)
            }
            n.d(e, {
                contentHeight: () => i,
                outerHeight: () => o,
                outerWidth: () => r
            })
        },
        551080: (t, e, n) => {
            "use strict";

            function i(t) {
                return e => {
                    t.forEach((t => {
                        "function" == typeof t ? t(e) : null != t && (t.current = e)
                    }))
                }
            }

            function o(t) {
                return i([t])
            }
            n.d(e, {
                mergeRefs: () => i,
                isomorphicRef: () => o
            })
        },
        248443: (t, e, n) => {
            "use strict";
            n.d(e, {
                DonationButton: () => u
            });
            var i = n(50959),
                o = n(777754),
                r = n(303177),
                s = n(968675),
                a = n(345848),
                l = n(224286),
                c = n(633881),
                h = n(53182);

            function u(t) {
                const {
                    donationUserInfo: e,
                    targetObjectId: u,
                    hidden: d,
                    onMount: p,
                    onUnmount: m,
                    action: g,
                    donationKind: _,
                    closeOnEsc: f,
                    size: v = "small"
                } = t, w = (0, i.useCallback)((() => new Promise((t => {
                    g && g(), window.runOrSignIn((() => {
                        (0, s.openDonationPopup)({
                            donationUserInfo: e,
                            donationKind: _,
                            targetObjectId: u,
                            onMount: () => {
                                p && p()
                            },
                            onUnmount: () => {
                                m && m()
                            },
                            onOpen: t,
                            closeOnEsc: null == f || f
                        }), (0, a.trackEvent)("Donation", "Open donation dialog")
                    }), {
                        source: "Stream chat donate button"
                    })
                }))), []);
                return i.createElement(r.ButtonWithLock, {
                    onClick: w,
                    variant: "primary",
                    className: d && h.hidden,
                    icon: "medium" === v ? l : c,
                    size: v
                }, o.t(null, void 0, n(490289)))
            }
        },
        830375: (t, e, n) => {
            "use strict";
            n.d(e, {
                renderDonationButton: () => c,
                renderFollowButton: () => h,
                renderMessageButton: () => u
            });
            var i = n(50959),
                o = n(500962),
                r = n(777754),
                s = n(248443),
                a = n(248684),
                l = n(540975);

            function c(t) {
                const {
                    container: e,
                    donationUserInfo: n,
                    action: r,
                    donationKind: a,
                    targetObjectId: l
                } = t;
                o.render(i.createElement(s.DonationButton, {
                    donationUserInfo: n,
                    action: r,
                    donationKind: a,
                    targetObjectId: l
                }), e)
            }

            function h(t) {
                const {
                    container: e,
                    isFollowed: n,
                    userId: r
                } = t;
                o.render(i.createElement(a.FollowButton, {
                    isFollowed: n,
                    authorId: r,
                    color: "green",
                    variant: "secondary"
                }), e)
            }

            function u(t) {
                const {
                    container: e,
                    action: s
                } = t;
                o.render(i.createElement(l.Button, {
                    intent: "primary",
                    appearance: "stroke",
                    onClick: s
                }, r.t(null, {
                    context: "userprofile_PM_button"
                }, n(535116))), e)
            }
        },
        229534: (t, e, n) => {
            "use strict";
            async function i(t) {
                return (await Promise.all([n.e(36037), n.e(43082), n.e(36956), n.e(4100), n.e(50251), n.e(85783), n.e(1670), n.e(25977), n.e(4907), n.e(39694), n.e(37757)]).then(n.bind(n, 173403))).createDialog(t)
            }

            function o(t) {
                i(t).then((t => t.open()))
            }
            n.d(e, {
                createErrorDialog: () => i,
                showErrorDialog: () => o
            })
        },
        500521: (t, e, n) => {
            "use strict";
            t.exports.pushChartPage = async function(t) {
                const {
                    default: e
                } = await Promise.all([n.e(36037), n.e(43082), n.e(36956), n.e(4100), n.e(50251), n.e(85783), n.e(53444), n.e(25977), n.e(50762), n.e(39694), n.e(34629)]).then(n.t.bind(n, 55244, 23)), i = new e.ChartPage(t);
                TradingView.historyManager.push(i)
            }
        },
        791325: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                LEFT_ARROW: () => i,
                UP_ARROW: () => o,
                RIGHT_ARROW: () => r,
                DOWN_ARROW: () => s,
                ENTER: () => a,
                ESC: () => l,
                SPACE: () => c,
                SLASH: () => h
            });
            const i = 37,
                o = 38,
                r = 39,
                s = 40,
                a = 13,
                l = 27,
                c = 32,
                h = 47
        },
        607436: (t, e, n) => {
            "use strict";
            n.d(e, {
                DEFAULT_SIZE: () => i,
                spinnerSizeMap: () => o
            });
            const i = "large",
                o = {
                    mini: "xsmall",
                    xsmall: "xsmall",
                    small: "small",
                    medium: "medium",
                    large: "large"
                }
        },
        941285: (t, e, n) => {
            "use strict";
            n.d(e, {
                Spinner: () => s
            });
            n(286625);
            var i = n(878134),
                o = n(607436);
            const r = (0, i.parseHtmlElement)(function(t = "") {
                return `<div class="tv-spinner ${t}" role="progressbar"></div>`
            }());
            class s {
                constructor(t) {
                    this._shown = !1, this._el = r.cloneNode(!0),
                        this.setSize(o.spinnerSizeMap[t || o.DEFAULT_SIZE])
                }
                spin(t) {
                    return this._el.classList.add("tv-spinner--shown"), void 0 === this._container && (this._container = t, void 0 !== t && t.appendChild(this._el)), this._shown = !0, this
                }
                stop(t) {
                    return t && void 0 !== this._container && this._container.removeChild(this._el), this._el.classList.remove("tv-spinner--shown"), this._shown = !1, this
                }
                setStyle(t) {
                    return Object.keys(t).forEach((e => {
                        const n = t[e];
                        void 0 !== n && this._el.style.setProperty(e, n)
                    })), this
                }
                style() {
                    return this._el.style
                }
                setSize(t) {
                    const e = void 0 !== t ? `tv-spinner--size_${t}` : "";
                    return this._el.className = `tv-spinner ${e} ${this._shown?"tv-spinner--shown":""}`, this
                }
                getEl() {
                    return this._el
                }
                destroy() {
                    this.stop(), delete this._el, delete this._container
                }
            }
        },
        349896: (t, e, n) => {
            "use strict";
            var i, o, r;
            n.d(e, {
                    Size: () => i,
                    StarFill: () => o,
                    StarColor: () => r
                }),
                function(t) {
                    t.Small = "small", t.Medium = "medium", t.Large = "large"
                }(i || (i = {})),
                function(t) {
                    t.Full = "full", t.Half = "half", t.Empty = "empty", t.Hidden = "hidden"
                }(o || (o = {})),
                function(t) {
                    t.Blue = "blue", t.White = "white"
                }(r || (r = {}))
        },
        295670: (t, e, n) => {
            "use strict";

            function i(t, e) {
                return Promise.all([n.e(3616), n.e(9303)]).then(n.bind(n, 127353)).then((n => n.renderStarsRatingElementImpl(t, e)))
            }
            n.d(e, {
                renderStarsRatingElement: () => i
            })
        },
        248684: (t, e, n) => {
            "use strict";
            n.d(e, {
                FollowButton: () => l
            });
            var i = n(50959),
                o = n(777754),
                r = n(497754),
                s = n(915812),
                a = n(777680);
            class l extends i.PureComponent {
                constructor(t) {
                    super(t), this._buttonRef = i.createRef(), this._mutationObserver = null, this._observerCallback = (t, e) => {
                        const {
                            followed: n
                        } = this.state;
                        for (const e of t) {
                            if ("attributes" !== e.type || "class" !== e.attributeName) return;
                            const t = e.target.classList;
                            if (t.contains("js-follow-user--followed") && !n) return this.setState({
                                followed: !0
                            });
                            if (!t.contains("js-follow-user--followed") && n) return this.setState({
                                followed: !1
                            })
                        }
                    }, this.state = {
                        followed: this.props.isFollowed
                    }
                }
                componentDidMount() {
                    this._buttonRef && this._buttonRef.current && (this._mutationObserver = new MutationObserver(this._observerCallback), this._mutationObserver.observe(this._buttonRef.current, {
                        attributes: !0
                    }))
                }
                componentDidUpdate(t) {
                    t.isFollowed !== this.props.isFollowed && this.setState({
                        followed: this.props.isFollowed
                    })
                }
                componentWillUnmount() {
                    this._mutationObserver && this._mutationObserver.disconnect()
                }
                render() {
                    const {
                        authorId: t,
                        hidden: e,
                        size: l = "small",
                        variant: c = "secondary",
                        color: h = "brand",
                        className: u
                    } = this.props, {
                        followed: d
                    } = this.state;
                    return i.createElement("div", {
                        "data-id": t,
                        className: r("js-follow-user", `js-follow-user-${t}`, d && "js-follow-user--followed", e && a.hidden, u),
                        ref: this._buttonRef
                    }, i.createElement(s.SquareButton, {
                        className: r(a.button, d && a["i-checked"]),
                        variant: c,
                        color: h,
                        size: l
                    }, i.createElement("div", {
                        className: a.buttonInner
                    }, i.createElement("span", {
                        className: a.unchecked
                    }, o.t(null, void 0, n(93210))), i.createElement("span", {
                        className: a.checked
                    }, o.t(null, {
                        context: "follow_status"
                    }, n(687479))), i.createElement("span", {
                        className: a.uncheckHint
                    }, o.t(null, void 0, n(18751))))))
                }
            }
        },
        373074: (t, e, n) => {
            "use strict";
            n.d(e, {
                template: () => a
            });
            var i = n(777754),
                o = n(738540),
                r = n(759530),
                s = n(989148);
            const a = `<div class="tv-user-link-popup i-hidden" data-id="{{ id }}">\n\t\t<div class="tv-user-link-popup__general">\n\t\t\t<a href="{{ profile_link }}" class="tv-user-link-popup__avatar"{{#hrefTarget}} target="{{hrefTarget}}"{{/hrefTarget}}>\n\t\t\t\t<img src="{{mid_picture_url}}" alt="" class="tv-user-link-popup__avatar-img">\n\t\t\t</a>\n\t\t\t<div class="tv-user-link-popup__profile">\n\t\t\t\t<div class="tv-user-link-popup__name">\n\t\t\t\t\t<a href="{{ profile_link }}" class="tv-user-link-popup__name-link apply-overflow-tooltip"{{#hrefTarget}} target="{{hrefTarget}}"{{/hrefTarget}}>{{ username }}</a>\n\t\t\t\t\t<span class="tv-user-link-popup__badge-wrapper js-badge-wrapper"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class="tv-user-link-popup__info">\n\t\t\t\t\t{{#show_broker_rating_block}}\n\t\t\t\t\t<span class="tv-user-link-popup__rating-number">{{ broker_rating }}</span>\n\t\t\t\t\t<span class="js-stars-rating-wrapper"></span>\n\t\t\t\t\t{{/show_broker_rating_block}}\n\t\t\t\t\t{{^broker_plan}}\n\t\t\t\t\t<span class="tv-user-link-popup__info-item tv-user-link-popup__info-item--users">\n\t\t\t\t\t\t<span class="tv-user-link-popup__info-icon apply-common-tooltip" title="${i.t(null,void 0,n(394502))}">${o}</span>\n\t\t\t\t\t\t<span class="tv-user-link-popup__info-value apply-overflow-tooltip">{{ followers_count }}</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class="tv-user-link-popup__info-item tv-user-link-popup__info-item--comment">\n\t\t\t\t\t\t<span class="tv-user-link-popup__info-icon apply-common-tooltip" title="${i.t(null,void 0,n(870840))}">${r}</span>\n\t\t\t\t\t\t<span class="tv-user-link-popup__info-value apply-overflow-tooltip">{{ charts_count }}</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class="tv-user-link-popup__info-item tv-user-link-popup__info-item--chart">\n\t\t\t\t\t\t<span class="tv-user-link-popup__info-icon apply-common-tooltip" title="${i.t(null,void 0,n(441799))}">\n\t\t\t\t\t\t\t${s}</span>\n\t\t\t\t\t\t<span class="tv-user-link-popup__info-value apply-overflow-tooltip">{{ reputation }}</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t{{/broker_plan}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t{{#status}}\n\t\t\t<div class="tv-user-link-popup__status js-status">{{ status }}</div>\n\t\t{{/status}}\n\t\t{{#showButtons}}\n\t\t\t<div class="tv-user-link-popup__actions">\n\t\t\t\t<span class="tv-user-link-popup__button js-follow-wrapper"></span>\n\t\t\t\t<span class="tv-user-link-popup__button js-message-wrapper" data-username="{{ username }}" data-id="{{ id }}"></span>\n\t\t\t\t<span class="tv-user-link-popup__button js-donation-wrapper"></span>\n\t\t\t</div>\n\t\t{{/showButtons}}\n\t</div>`
        },
        201880: (t, e, n) => {
            "use strict";
            var i = n(823127),
                o = n(213398),
                r = n(500962),
                s = n(455567),
                a = n(186521).buildUtmQueryStringFromUrlParams,
                l = n(373074).template,
                c = n(187084).openPMDialog,
                h = n(527800).renderBadgeAccount,
                u = n(970704).isFeaturedBroker,
                d = n(461495).getBadgeAccountTitle,
                p = n(461495).getBadgeAccountName,
                m = n(712797).getBadgeAccountLink,
                g = n(349896).Size,
                _ = n(295670).renderStarsRatingElement,
                f = n(233313).getUserProfilePath,
                v = n(830375).renderDonationButton,
                w = n(830375).renderFollowButton,
                b = n(830375).renderMessageButton,
                y = n(841287).sendMessageToUser,
                k = n(778785).mobiletouch;
            const B = n(495046);
            ! function() {
                var t, e = i(window),
                    n = i(document);

                function C() {
                    var e, o;
                    B.enabled("disable_userlink_popup") || (t = this, n.on("mouseenter", ".js-userlink-popup, .userlink, .ch-userlink, .ch-item-userpic", (function() {
                        o && clearTimeout(o);
                        var n = i(this);
                        o = setTimeout((function() {
                            o = void 0, t.isActiveTarget(n) ? t.open() : e = i.ajax({
                                url: "/u/" + (n.data("username") || n.text()) + "/info/",
                                type: "POST",
                                success: function(e) {
                                    if (e && !e.error) {
                                        n.is('[target="_blank"]') && (e.hrefTarget = "_blank"), t.update(n, e);
                                        var i = t.$el[0].querySelector(".js-follow-wrapper");
                                        null !== i && w({
                                            container: i,
                                            isFollowed: t.data.follow_status,
                                            userId: t.data.id
                                        });
                                        var o = t.$el[0].querySelector(".js-message-wrapper");
                                        if (null !== o && b({
                                                container: o,
                                                action: function() {
                                                    runOrSignIn((function() {
                                                        c(t.data.id, t.data.username)
                                                    }), {
                                                        source: "Private message from userlink popup",
                                                        verifiedPhoneRequired: !0
                                                    })
                                                }
                                            }), !e.is_broker) {
                                            var r = {
                                                    id: e.id,
                                                    username: e.username,
                                                    avatars: {
                                                        small: e.picture_url
                                                    },
                                                    is_broker: e.is_broker,
                                                    badges: e.badges
                                                },
                                                s = t.$el[0].querySelector(".js-donation-wrapper");
                                            null !== s && v({
                                                container: s,
                                                donationUserInfo: r,
                                                donationKind: "profile_popup",
                                                action: function() {
                                                    t.close()
                                                }
                                            })
                                        }
                                        var a = t.$el[0].querySelector(".js-badge-wrapper");
                                        if (null !== a) {
                                            var l = e.badges.filter((function(t) {
                                                return !u(t.name)
                                            }));
                                            if (l.length > 0) {
                                                var f = p(l);
                                                f && h(a, {
                                                    name: f,
                                                    title: d(l),
                                                    href: m(f)
                                                })
                                            }
                                        }
                                        if (e.broker_plan && e.broker_rating) {
                                            var y = t.$el[0].querySelector(".js-stars-rating-wrapper");
                                            _(y, {
                                                rating: e.broker_rating,
                                                size: g.Medium
                                            }).then((function() {
                                                t.open()
                                            }))
                                        } else t.open()
                                    }
                                }
                            })
                        }), parseInt(n.data("userlinkpopup-timeout"), 10) || s.dur)
                    })).on("mouseleave", ".js-userlink-popup, .userlink, .ch-userlink, .ch-item-userpic", (function() {
                        e && e.abort(), o && clearTimeout(o), t.close(200)
                    })))
                }
                k || (C.prototype.clearCloseTimeout = function() {
                    this.closeTimeout && (clearTimeout(this.closeTimeout), this.closeTimeout = void 0)
                }, C.prototype.isInDOM = function() {
                    return !!this.$el && i.contains(document.body, this.$el[0])
                }, C.prototype.getSizes = function() {
                    if (!this.$el) return {
                        width: 0,
                        height: 0
                    };
                    var t = this.isInDOM(),
                        e = this.$el.hasClass("i-hidden");
                    this.$el.removeClass("i-hidden"), t || this.$el.css("position", "fixed").appendTo(document.body);
                    var n = {
                        width: this.$el.outerWidth(),
                        height: this.$el.outerHeight()
                    };
                    return t || this.$el.css("position", "").detach(), e && this.$el.addClass("i-hidden"), n
                }, C.prototype.sendMessage = function() {
                    var t = this.$el.find('[name="message-text"]'),
                        e = String(t.val()).replace(/^\s+|\s+$/g, "");
                    e ? (y(e, this.data.id), this.close()) : t.css("border-color", "#E0735E").focus()
                }, C.prototype.isActiveTarget = function(t) {
                    return this.$el && this.$target && this.$target.is(t)
                }, C.prototype.isSameUser = function(t) {
                    var e = t.data();
                    return e && this.data && e.id === this.data.id
                }, C.prototype.update = function(t, e) {
                    if (this.isActiveTarget(t) || this.isSameUser(t)) return this.clearCloseTimeout(), this;
                    open && this.close();
                    var n = this;
                    n.$target = t, n.data = e || t.data(), n.data.showButtons = n.data.username !== window.user.username && !(n.data.banned_permanently || n.data.inactive), n.data.show_add_status_btn = !window.user.status && is_authenticated, n.data.show_broker_rating_block = n.data.broker_plan && n.data.broker_rating;
                    var r = a(!1);
                    n.data.profile_link = f({
                        username: n.data.username,
                        is_broker: n.data.is_broker
                    }, {
                        query: r
                    });
                    var s = n.data.broker_rating && n.data.broker_rating.toFixed(2);
                    return n.$el = i(o.render(l, Object.assign({}, n.data, {
                        broker_rating: s
                    }))).on("mouseenter", (function() {
                        n.clearCloseTimeout()
                    })).on("mouseleave", (function(t) {
                        n.close(n.lastDelay || 500)
                    })).on("click", "a, .tv-button", (function() {
                        n.close()
                    })), n
                }, C.prototype.open = function() {
                    if (this.clearCloseTimeout(), this.opened || !this.$el) return this;
                    var t = this.$target.closest(".js-userlink-popup-anchor"),
                        n = this.$target[0].getBoundingClientRect(),
                        i = t.length ? t[0].getBoundingClientRect().left : n.left - 20,
                        o = this.getSizes();
                    i + o.width > e.width() - 10 && (i = e.width() - o.width - 10);
                    var r = {
                        top: n.top - o.height - 5,
                        left: i
                    };
                    r.top < 0 && (r.top = n.top + this.$target.height() + 5), this.$el.css(r).appendTo(document.body).removeClass("i-hidden").addClass("i-opening"), this.$el.find(".js-status").width(this.$el.width());
                    var a = this;
                    return setTimeout((function() {
                        a.$el.addClass("i-opened"), setTimeout((function() {
                            a.$el.removeClass("i-opening")
                        }), s.dur)
                    }), 20), this.opened = !0, this
                }, C.prototype.close = function(t) {
                    if (t && "number" == typeof t) return this.closeTimeout = setTimeout(this.close.bind(this), t), this.lastDelay = t, this;
                    if (this.clearCloseTimeout(), !this.opened) return this;
                    this.$el.addClass("i-closing");
                    var e = this;
                    return setTimeout((function() {
                        e.$el && (e._unmountComponentsAtNodes(), e.$el.remove()), e.$el = e.$target = e.data = void 0, e.opened = !1
                    }), .5 * s.dur), this
                }, C.prototype.getPosition = function() {
                    return !!this.$el && {
                        top: this.$el.offset().top - i(window).scrollTop(),
                        left: this.$el.offset().left - i(window).scrollLeft()
                    }
                }, C.prototype._unmountComponentsAtNodes = function() {
                    var t = this.$el[0].querySelector(".js-badge-wrapper");
                    null !== t && r.unmountComponentAtNode(t);
                    var e = this.$el[0].querySelector(".js-stars-rating-wrapper");
                    null !== e && r.unmountComponentAtNode(e)
                }, t = new C)
            }()
        },
        963239: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                copyToClipboard: () => o,
                writeImpl: () => r,
                writePromiseUsingApi: () => a
            });
            var i = n(793993);

            function o(t) {
                return r(t, null)
            }

            function r(t, e) {
                const n = t.files && t.files.length > 0;
                if (!n && e && e.eventPhase > 0) return s(e, t), Promise.resolve();
                if (!n) {
                    let e = !1;
                    const n = n => {
                        n.stopImmediatePropagation(), s(n, t), e = !0
                    };
                    try {
                        document.addEventListener("copy", n, !0), document.execCommand("copy")
                    } finally {
                        document.removeEventListener("copy", n, !0)
                    }
                    if (e) return Promise.resolve()
                }
                return async function(t) {
                    const e = (0, i.getClipboard)();
                    if (!e || !e.write || !window.ClipboardItem) throw new DOMException("ClipboardApi is not supported", "NotSupportedError");
                    const n = {};
                    for (const e of t.files || []) n[e.type] = e;
                    t.text && (n["text/plain"] = t.text);
                    t.html && (n["text/html"] = t.html);
                    return e.write([new window.ClipboardItem(n)])
                }(t)
            }

            function s(t, e) {
                t.preventDefault();
                const n = t.clipboardData;
                e.text && n.setData("text/plain", e.text), e.html && n.setData("text/html", e.html)
            }
            async function a(t, e) {
                const n = (0, i.getClipboard)();
                if ("text/plain" === e && !n.write) {
                    const e = await t;
                    return n.writeText(await e.text())
                }
                if (!n || !n.write || !window.ClipboardItem) throw new DOMException("ClipboardApi is not supported", "NotSupportedError");
                let o = null;
                try {
                    o = new window.ClipboardItem({
                        [e]: t
                    })
                } catch (n) {
                    o = new window.ClipboardItem({
                        [e]: await t
                    })
                }
                if (o) return n.write([o]);
                throw new Error("ClipboardApi is not supported")
            }
        },
        404573: (t, e, n) => {
            "use strict";
            n.d(e, {
                Draggable: () => a,
                PointerBackend: () => l
            });
            var i = n(650151),
                o = n(318557),
                r = n(638456),
                s = n(778785);
            class a {
                constructor(t) {
                    var e, n;
                    this._helper = null, this._handleDragStart = t => {
                        var e;
                        if (null !== this._helper) return;
                        const n = this._source;
                        n.classList.add("ui-draggable-dragging");
                        const [i, r] = [(0, o.outerWidth)(n), (0, o.outerHeight)(n)];
                        this._helper = {
                            startTop: parseFloat(n.style.top) || 0,
                            startLeft: parseFloat(n.style.left) || 0,
                            nextTop: null,
                            nextLeft: null,
                            raf: null,
                            size: [i, r],
                            containment: this._containment instanceof HTMLElement ? [parseInt(getComputedStyle(this._containment).borderLeftWidth) + parseInt(getComputedStyle(this._containment).paddingLeft), parseInt(getComputedStyle(this._containment).borderTopWidth) + parseInt(getComputedStyle(this._containment).paddingTop), this._containment.offsetWidth - parseInt(getComputedStyle(this._containment).borderRightWidth) - parseInt(getComputedStyle(this._containment).paddingRight) - parseInt(getComputedStyle(n).marginLeft) - parseInt(getComputedStyle(n).marginRight) - i, this._containment.offsetHeight - parseInt(getComputedStyle(this._containment).borderBottomWidth) - parseInt(getComputedStyle(this._containment).paddingBottom) - parseInt(getComputedStyle(n).marginTop) - parseInt(getComputedStyle(n).marginBottom) - r] : "window" === this._containment ? [window.scrollX, window.scrollY, window.scrollX + document.documentElement.offsetWidth - i, window.scrollY + document.documentElement.offsetHeight - r] : null
                        }, null === (e = this._start) || void 0 === e || e.call(this)
                    }, this._handleDragMove = t => {
                        var e;
                        if (null === this._helper) return;
                        const {
                            current: n,
                            initial: i
                        } = t.detail, o = this._source, r = this._helper.nextTop, s = this._helper.nextLeft, a = "y" === this._axis || !1 === this._axis || 0 !== n.movementY;
                        if (a) {
                            const t = this._helper.startTop;
                            isFinite(t) && (this._helper.nextTop = n.clientY - i.clientY + t)
                        }
                        const l = "x" === this._axis || !1 === this._axis || 0 !== n.movementY;
                        if (l) {
                            const t = this._helper.startLeft;
                            isFinite(t) && (this._helper.nextLeft = n.clientX - i.clientX + t)
                        }
                        if (null !== this._helper.containment) {
                            const [t, e, n, i] = this._helper.containment;
                            a && this._helper.nextTop && (this._helper.nextTop = Math.min(this._helper.nextTop, i), this._helper.nextTop = Math.max(this._helper.nextTop, e)),
                                l && this._helper.nextLeft && (this._helper.nextLeft = Math.min(this._helper.nextLeft, n), this._helper.nextLeft = Math.max(this._helper.nextLeft, t))
                        }
                        null !== this._helper.raf || r === this._helper.nextTop && s === this._helper.nextLeft || (this._helper.raf = requestAnimationFrame((() => {
                            null !== this._helper && (null !== this._helper.nextTop && (o.style.top = this._helper.nextTop + "px", this._helper.nextTop = null), null !== this._helper.nextLeft && (o.style.left = this._helper.nextLeft + "px", this._helper.nextLeft = null), this._helper.raf = null)
                        }))), null === (e = this._drag) || void 0 === e || e.call(this)
                    }, this._handleDragStop = t => {
                        var e;
                        if (null === this._helper) return;
                        this._source.classList.remove("ui-draggable-dragging"), this._helper = null, null === (e = this._stop) || void 0 === e || e.call(this)
                    };
                    const i = this._source = t.source;
                    i.classList.add("ui-draggable");
                    const r = this._handle = null !== (e = t.handle ? i.querySelector(t.handle) : null) && void 0 !== e ? e : i;
                    r.classList.add("ui-draggable-handle"), this._start = t.start, this._stop = t.stop, this._drag = t.drag, this._backend = new l({
                        handle: r,
                        onDragStart: this._handleDragStart,
                        onDragMove: this._handleDragMove,
                        onDragStop: this._handleDragStop
                    }), this._axis = null !== (n = t.axis) && void 0 !== n && n, this._containment = t.containment
                }
                destroy() {
                    const t = this._source;
                    t.classList.remove("ui-draggable"), t.classList.remove("ui-draggable-dragging");
                    this._handle.classList.remove("ui-draggable-handle"), this._backend.destroy(), null !== this._helper && (this._helper.raf && cancelAnimationFrame(this._helper.raf), this._helper = null)
                }
            }
            class l {
                constructor(t) {
                    this._initial = null, this._handlePointerDown = t => {
                        if (null !== this._initial) return;
                        if (!(t.target instanceof Element && this._handle.contains(t.target))) return;
                        if (this._initial = t, !this._dispatchEvent(this._createEvent("pointer-drag-start", t))) return void(this._initial = null);
                        t.preventDefault();
                        const e = this._getEventTarget();
                        e.addEventListener("pointermove", this._handlePointerMove), e.addEventListener("pointerup", this._handlePointerUp), e.addEventListener("pointercancel", this._handlePointerUp), e.addEventListener("lostpointercapture", this._handlePointerUp), e.setPointerCapture(t.pointerId)
                    }, this._handlePointerMove = t => {
                        null !== this._initial && this._initial.pointerId === t.pointerId && (t.preventDefault(), this._dispatchEvent(this._createEvent("pointer-drag-move", t)))
                    }, this._handlePointerUp = t => {
                        if (null === this._initial || this._initial.pointerId !== t.pointerId) return;
                        t.preventDefault();
                        const e = this._getEventTarget();
                        e.removeEventListener("pointermove", this._handlePointerMove), e.removeEventListener("pointerup", this._handlePointerUp), e.removeEventListener("pointercancel", this._handlePointerUp), e.removeEventListener("lostpointercapture", this._handlePointerUp), e.releasePointerCapture(this._initial.pointerId), this._dispatchEvent(this._createEvent("pointer-drag-stop", t)), this._initial = null
                    };
                    const e = this._handle = t.handle;
                    this._onDragStart = t.onDragStart, this._onDragMove = t.onDragMove, this._onDragStop = t.onDragStop, e.style.touchAction = "none";
                    this._getEventTarget().addEventListener("pointerdown", this._handlePointerDown)
                }
                destroy() {
                    this._handle.style.touchAction = "";
                    const t = this._getEventTarget();
                    t.removeEventListener("pointerdown", this._handlePointerDown), t.removeEventListener("pointermove", this._handlePointerMove), t.removeEventListener("pointerup", this._handlePointerUp), t.removeEventListener("pointercancel", this._handlePointerUp), t.removeEventListener("lostpointercapture", this._handlePointerUp), null !== this._initial && (t.releasePointerCapture(this._initial.pointerId), this._initial = null)
                }
                _getEventTarget() {
                    return r.CheckMobile.iOS() || (0, r.isMac)() && s.touch ? window.document.documentElement : this._handle
                }
                _dispatchEvent(t) {
                    switch (t.type) {
                        case "pointer-drag-start":
                            this._onDragStart(t);
                            break;
                        case "pointer-drag-move":
                            this._onDragMove(t);
                            break;
                        case "pointer-drag-stop":
                            this._onDragStop(t)
                    }
                    return !t.defaultPrevented
                }
                _createEvent(t, e) {
                    return (0, i.assert)(null !== this._initial), new CustomEvent(t, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            backend: this,
                            initial: this._initial,
                            current: e
                        }
                    })
                }
            }
        },
        793993: (t, e, n) => {
            "use strict";

            function i() {
                var t;
                return null !== (t = navigator.androidClipboard) && void 0 !== t ? t : navigator.clipboard
            }
            n.d(e, {
                getClipboard: () => i
            })
        },
        728811: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                createPublishedChartUrl: () => c,
                parsePublishedChartUrl: () => h,
                createPublishedChartImageUrl: () => u,
                createSnapshotImageUrls: () => d,
                isSnapshotUrl: () => p
            });
            var i = n(418638),
                o = n(66974);
            const r = new RegExp(i.urlsRegExp.publishedChartOld),
                s = new RegExp(i.urlsRegExp.publishedChart),
                a = new RegExp(i.urlsRegExp.publishedScript),
                l = new RegExp(i.urlsRegExp.imageUrl);

            function c(t, e, n) {
                if (!t || !/[0-9a-zA-Z]{8}/.test(t)) return "";
                if (t && e) {
                    return `/chart/${e}/${t}${n?`-${n}`:""}/`
                }
                return `/v/${t}/`
            }

            function h(t) {
                if (r.test(t)) {
                    return {
                        image_url: (t.match(r) || [])[1]
                    }
                }
                if (s.test(t)) {
                    const e = t.match(s) || [];
                    return {
                        image_url: e[2],
                        symbol: e[1],
                        title: e[3]
                    }
                }
                if (a.test(t)) {
                    const e = t.match(a) || [];
                    return {
                        image_url: e[1],
                        title: e[2]
                    }
                }
                return l.test(t) ? {
                    image_url: t
                } : {}
            }

            function u(t) {
                if (!t || !/[0-9a-zA-Z]{8}/.test(t)) return "";
                const e = (0, o.environment)();
                if ("battle" === e || "staging" === e) {
                    const e = t.charAt(0).toLowerCase();
                    return `${window.AWS_S3_CDN}/${e}/${t}.png`
                }
                return `/i/${t}/`
            }

            function d(t) {
                if (!t || !/[0-9a-zA-Z]{8}/.test(t)) return null;
                const e = (0, o.environment)();
                if ("battle" === e || "staging" === e) {
                    const e = t.charAt(0).toLowerCase(),
                        n = `${window.AWS_S3_CDN}/snapshots/${e}`;
                    return {
                        preview: `${n}/${t}_thumb.png`,
                        url: `${n}/${t}.png`
                    }
                } {
                    const e = `${window.location.protocol}//${window.location.host}`;
                    return {
                        preview: `${e}/x/${t}/s/`,
                        url: `${e}/x/${t}/`
                    }
                }
            }

            function p(t) {
                try {
                    const e = new URL(t),
                        n = /^\/x\/([0-9a-zA-Z]{8})\/?(?:$|(?=[\s;,.]))\/?$/;
                    return e.hostname.endsWith(window.location.hostname) && n.test(e.pathname)
                } catch (t) {
                    return !1
                }
            }
        },
        318557: (t, e, n) => {
            "use strict";
            n.d(e, {
                contentHeight: () => o.contentHeight,
                outerHeight: () => o.outerHeight,
                outerWidth: () => o.outerWidth,
                unwrap: () => r,
                html: () => s,
                position: () => l
            });
            var i = n(650151),
                o = n(746326);

            function r(t) {
                return t[0]
            }

            function s(t, e) {
                return void 0 === e || (null === e && (t.innerHTML = ""), "string" != typeof e && "number" != typeof e || (t.innerHTML = String(e))), t
            }

            function a(t) {
                if (!t.getClientRects().length) return {
                    top: 0,
                    left: 0
                };
                const e = t.getBoundingClientRect(),
                    n = (0,
                        i.ensureNotNull)(t.ownerDocument.defaultView);
                return {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }
            }

            function l(t) {
                const e = getComputedStyle(t);
                let n, i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === e.position) n = t.getBoundingClientRect();
                else {
                    n = a(t);
                    const e = t.ownerDocument;
                    let o = t.offsetParent || e.documentElement;
                    for (; o && (o === e.body || o === e.documentElement) && "static" === getComputedStyle(o).position;) o = o.parentElement;
                    o && o !== t && 1 === o.nodeType && (i = a(o), i.top += parseFloat(getComputedStyle(o).borderTopWidth), i.left += parseFloat(getComputedStyle(o).borderLeftWidth))
                }
                return {
                    top: n.top - i.top - parseFloat(e.marginTop),
                    left: n.left - i.left - parseFloat(e.marginLeft)
                }
            }
        },
        519073: (t, e, n) => {
            "use strict";

            function i(t, e) {
                return e.includes("crypto") || ["bitcoin", "crypto"].includes(t)
            }

            function o(t, e) {
                return "stock" === t && e.includes("right") || "right" === t
            }

            function r(t, e) {
                return "fund" === t && e.includes("etf") || "stock" === t && e.includes("fund") && e.includes("etf")
            }

            function s(t) {
                return "economic" === t
            }
            n.d(e, {
                hasCryptoTypespec: () => i,
                isRight: () => o,
                isEtf: () => r,
                isEconomicSymbol: () => s
            })
        },
        909740: (t, e, n) => {
            "use strict";
            n.d(e, {
                setTheme: () => r,
                watchedTheme: () => o
            });
            var i = n(988411);
            const o = new(n.n(i)());

            function r(t) {
                o.setValue(t)
            }
            o.subscribe((t => {
                ! function(t, e = window) {
                    const n = "theme-" + t,
                        i = e.document.documentElement.classList;
                    for (const t of Array.from(i)) t.startsWith("theme-") && t !== n && i.remove(t);
                    i.add(n)
                }(t, window)
            }))
        },
        889267: (t, e, n) => {
            "use strict";
            n.d(e, {
                symbolTokenEscapeRe: () => s,
                tokenize: () => c
            });
            var i = n(495046),
                o = n(173777);
            const r = i.enabled("charting_library_base") ? /(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF^])(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!:.&])*|'.+?'/ : /(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF])(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&])*|'.+?'/,
                s = /[+\-/*]/,
                a = {
                    number: /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
                    incompleteNumber: /\./,
                    symbol: r,
                    incompleteSymbol: /'[^']*/,
                    separatorPrefix: o.SEPARATOR_PREFIX,
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
                l = new RegExp(Object.values(a).map((t => {
                    return null === t ? "" : `(${"string"==typeof t?(e=t,e.replace(/[\^$()[\]{}*+?|\\]/g,"\\$&")):t.source})`;
                    var e
                })).filter((t => "" !== t)).concat(".").join("|"), "g");

            function c(t) {
                if (!t) return [];
                const e = [],
                    n = Object.keys(a);
                let i;
                for (; i = l.exec(t);) {
                    let t = !1;
                    for (let o = n.length; o--;)
                        if (i[o + 1]) {
                            n[o] && e.push({
                                value: i[o + 1],
                                type: n[o],
                                precedence: 0,
                                offset: i.index
                            }), t = !0;
                            break
                        }
                    t || e.push({
                        value: i[0],
                        type: "unparsed",
                        precedence: 0,
                        offset: i.index
                    })
                }
                return e
            }
        },
        712797: (t, e, n) => {
            "use strict";
            n.d(e, {
                getBadgeAccountLink: () => r
            });
            var i = n(359984);
            var o = n(970704);

            function r(t) {
                return (0, i.isBadgeUser)(t) ? function(t) {
                    if ((0, i.isPineWizard)(t)) return "/pine-wizards/";
                    if ((0, i.isModerator)(t)) return "/moderators/";
                    if ((0, i.isProPremium)(t) || (0, i.isProRealtime)(t) || (0, i.isPro)(t) || (0, i.isTrial)(t)) return `/gopro/?source=badge&feature=${t.split(":")[1]}`
                }(t) : (0, o.isBadgeBroker)(t) ? function(t) {
                    return (0, o.isBadgeBrokerWithLink)(t) ? "/brokers/" : void 0
                }(t) : void 0
            }
        },
        527800: (t, e, n) => {
            "use strict";
            n.d(e, {
                BadgeAccount: () => c,
                renderBadgeAccount: () => h
            });
            var i = n(50959),
                o = n(500962),
                r = n(271402),
                s = n(465872),
                a = n(359984),
                l = n(970704);

            function c(t) {
                const {
                    name: e,
                    href: n,
                    ...o
                } = t;
                return (0, a.isBadgeUser)(e) ? i.createElement(r.BadgeUser, {
                    name: e,
                    href: n,
                    ...o
                }) : (0, l.isBadgeBroker)(e) ? i.createElement(s.BadgeBroker, {
                    name: e,
                    href: n,
                    ...o
                }) : null
            }

            function h(t, e) {
                o.render(i.createElement(c, { ...e
                }), t)
            }
        },
        461495: (t, e, n) => {
            "use strict";
            n.d(e, {
                getBadgeAccountName: () => r,
                getBadgeAccountTitle: () => s
            });
            var i = n(781014),
                o = n(540935);

            function r(t) {
                var e;
                if (0 !== t.length) return null === (e = t.find((t => {
                    return e = t.name, a.has(e);
                    var e
                }))) || void 0 === e ? void 0 : e.name
            }

            function s(t) {
                return t.map((t => t.verbose_name)).join(" | ")
            }
            const a = new Set(Object.values({ ...i.BadgeBrokerNames,
                ...o.BadgeUserNames
            }))
        },
        781014: (t, e, n) => {
            "use strict";
            var i;
            n.d(e, {
                    BadgeBrokerNames: () => i
                }),
                function(t) {
                    t.BrokerExtraFeatured = "broker_extra:featured", t.BrokerPlatinum = "broker:platinum", t.BrokerGold = "broker:gold", t.BrokerSilver = "broker:silver"
                }(i || (i = {}))
        },
        465872: (t, e, n) => {
            "use strict";
            n.d(e, {
                BadgeBroker: () => h
            });
            var i = n(50959),
                o = n(497754),
                r = n(777754),
                s = n(781014),
                a = n(558470),
                l = n(970704),
                c = n(692214);

            function h(t) {
                const {
                    name: e,
                    size: n = a.BadgeSize.Small,
                    className: o,
                    title: r,
                    href: s,
                    ...c
                } = t;
                return s ? i.createElement(a.AnchorBadge, { ...c,
                    className: u(e, s, r, o),
                    title: (0, l.isBadgeBrokerWithTitle)(e) ? r : void 0,
                    size: n,
                    href: s,
                    target: "_blank"
                }, d(e)) : i.createElement(a.Badge, { ...c,
                    className: u(e, s, r, o),
                    title: (0, l.isBadgeBrokerWithTitle)(e) ? r : void 0,
                    size: n
                }, d(e))
            }

            function u(t, e, n, i) {
                return o(c["badge-broker"], t === s.BadgeBrokerNames.BrokerExtraFeatured && c.featured, t === s.BadgeBrokerNames.BrokerPlatinum && c.platinum, t === s.BadgeBrokerNames.BrokerGold && c.gold, t === s.BadgeBrokerNames.BrokerSilver && c.silver, e && c.link, n && "apply-common-tooltip", i)
            }

            function d(t) {
                return t === s.BadgeBrokerNames.BrokerExtraFeatured ? r.t(null, void 0, n(824010)) : r.t(null, void 0, n(285842))
            }
        },
        970704: (t, e, n) => {
            "use strict";
            n.d(e, {
                isBadgeBroker: () => r,
                isFeaturedBroker: () => s,
                isBadgeBrokerWithLink: () => l,
                isBadgeBrokerWithTitle: () => h
            });
            var i = n(781014);
            const o = new Set(Object.values(i.BadgeBrokerNames));

            function r(t) {
                return o.has(t)
            }

            function s(t) {
                return t === i.BadgeBrokerNames.BrokerExtraFeatured
            }
            const a = new Set([i.BadgeBrokerNames.BrokerPlatinum, i.BadgeBrokerNames.BrokerGold, i.BadgeBrokerNames.BrokerSilver]);

            function l(t) {
                return a.has(t)
            }
            const c = new Set([i.BadgeBrokerNames.BrokerPlatinum, i.BadgeBrokerNames.BrokerGold, i.BadgeBrokerNames.BrokerSilver]);

            function h(t) {
                return c.has(t)
            }
        },
        540935: (t, e, n) => {
            "use strict";
            var i;
            n.d(e, {
                    BadgeUserNames: () => i
                }),
                function(t) {
                    t.Moderator = "moderator", t.Employee = "employee", t.PineWizard = "pine_wizard", t.ProPremium = "pro:pro_premium", t.ProPremiumTrial = "pro:pro_premium_trial", t.ProRealTime = "pro:pro_realtime", t.ProRealTimeTrial = "pro:pro_realtime_trial", t.Pro = "pro:pro", t.ProTrial = "pro:pro_trial"
                }(i || (i = {}))
        },
        271402: (t, e, n) => {
            "use strict";
            n.d(e, {
                BadgeUser: () => c
            });
            var i = n(50959),
                o = n(497754),
                r = n(359984),
                s = n(558470),
                a = n(987763),
                l = n(374486);

            function c(t) {
                const {
                    name: e,
                    size: n = s.BadgeSize.Small,
                    href: o,
                    title: c,
                    className: d,
                    ...p
                } = t
                ;
                return o ? i.createElement(s.AnchorBadge, { ...p,
                    className: h(e, n, c, d),
                    title: (0, r.isBadgeUserWithTitle)(e) ? c : void 0,
                    "aria-label": (0, r.isEmployee)(e) && (0, r.isBadgeUserWithTitle)(e) ? c : void 0,
                    size: n,
                    href: o,
                    target: "_blank"
                }, u(e), (0, r.isEmployee)(e) && i.createElement("img", {
                    src: a,
                    className: l["employee-logo-icon"],
                    role: "presentation",
                    loading: "lazy"
                })) : i.createElement(s.Badge, {
                    className: h(e, n, c, d),
                    title: (0, r.isBadgeUserWithTitle)(e) ? c : void 0,
                    "aria-label": (0, r.isEmployee)(e) && (0, r.isBadgeUserWithTitle)(e) ? c : void 0,
                    size: n,
                    ...p
                }, u(e), (0, r.isEmployee)(e) && i.createElement("img", {
                    src: a,
                    className: l["employee-logo-icon"],
                    role: "presentation",
                    loading: "lazy"
                }))
            }

            function h(t, e = s.BadgeSize.Small, n, i) {
                return o(l["badge-user"], l[`size-${e}`], (0, r.isProPremium)(t) && l["pro-premium"], (0, r.isProRealtime)(t) && l["pro-realtime"], (0, r.isPro)(t) && l.pro, (0, r.isModerator)(t) && l.moderator, (0, r.isEmployee)(t) && l.employee, (0, r.isPineWizard)(t) && l["pine-wizard"], (0, r.isTrial)(t) && l.trial, n && "apply-common-tooltip", i)
            }

            function u(t) {
                return (0, r.isProPremium)(t) ? "Premium" : (0, r.isProRealtime)(t) ? "Pro+" : (0, r.isPro)(t) ? "Pro" : (0, r.isModerator)(t) ? "Mod" : (0, r.isPineWizard)(t) ? "Wizard" : ""
            }
        },
        359984: (t, e, n) => {
            "use strict";
            n.d(e, {
                isBadgeUserWithTitle: () => r,
                isBadgeUser: () => a,
                isModerator: () => l,
                isProPremium: () => c,
                isProRealtime: () => h,
                isPro: () => u,
                isEmployee: () => d,
                isPineWizard: () => p,
                isTrial: () => m
            });
            var i = n(540935);
            const o = new Set([i.BadgeUserNames.Employee, i.BadgeUserNames.PineWizard, i.BadgeUserNames.Moderator, i.BadgeUserNames.ProPremiumTrial, i.BadgeUserNames.ProRealTimeTrial, i.BadgeUserNames.ProTrial]);

            function r(t) {
                return o.has(t)
            }
            const s = new Set(Object.values(i.BadgeUserNames));

            function a(t) {
                return s.has(t)
            }

            function l(t) {
                return i.BadgeUserNames.Moderator === t
            }

            function c(t) {
                return i.BadgeUserNames.ProPremium === t || i.BadgeUserNames.ProPremiumTrial === t
            }

            function h(t) {
                return i.BadgeUserNames.ProRealTime === t || i.BadgeUserNames.ProRealTimeTrial === t
            }

            function u(t) {
                return i.BadgeUserNames.Pro === t || i.BadgeUserNames.ProTrial === t
            }

            function d(t) {
                return i.BadgeUserNames.Employee === t
            }

            function p(t) {
                return i.BadgeUserNames.PineWizard === t
            }

            function m(t) {
                return i.BadgeUserNames.ProPremiumTrial === t || i.BadgeUserNames.ProRealTimeTrial === t || i.BadgeUserNames.ProTrial === t
            }
        },
        558470: (t, e, n) => {
            "use strict";
            n.d(e, {
                AnchorBadge: () => i.AnchorBadge,
                Badge: () => i.Badge,
                BadgeSize: () => i.BadgeSize
            });
            var i = n(774465)
        },
        180184: (t, e, n) => {
            "use strict";
            n.d(e, {
                BadgeSize: () => i.BadgeSize
            });
            var i = n(105573)
        },
        303177: (t, e, n) => {
            "use strict";
            n.d(e, {
                ButtonWithLock: () => g,
                RoundButtonWithLock: () => _
            });
            var i, o = n(50959),
                r = n(497754),
                s = n(640027);
            ! function(t) {
                t.Untouched = "untouched", t.Unsettled = "unsettled", t.Resolved = "resolved", t.Rejected = "rejected"
            }(i || (i = {}));
            var a = n(201465),
                l = n(909740),
                c = n(919346),
                h = n(612247),
                u = n(915812),
                d = n(931651);

            function p(t) {
                const {
                    onClick: e,
                    loaderColor: n,
                    disabled: a,
                    showLoader: h = !1
                } = t, [u, p] = function(t) {
                    const [e, n] = (0, o.useState)(i.Untouched), r = (0, s.useIsMounted)(), a = (0, o.useCallback)(((...e) => {
                        t && (l(i.Unsettled), t(...e).then((() => l(i.Resolved))).catch((() => l(i.Rejected))))
                    }), [t]), l = (0, o.useCallback)((t => {
                        r.current && n(t)
                    }), []);
                    return [a, e]
                }(e), [m, g] = (0, o.useState)(!1);
                (0, o.useEffect)((() => {
                    g(p === i.Unsettled && h)
                }), [p]);
                const _ = r(d.childrenWrapper, !m && d.shown),
                    f = r(d.loader, m && d.shown);
                return {
                    onClickhandler: u,
                    disabled: a || p === i.Unsettled,
                    childrenWrapperClassNames: _,
                    laoderClassNames: f,
                    loaderColor: null != n ? n : l.watchedTheme.value() === c.StdTheme.Light ? "white" : "gray"
                }
            }

            function m(t) {
                const {
                    disabled: e,
                    showLoader: n,
                    loaderColor: i,
                    onClick: o,
                    ...r
                } = t;
                return r
            }

            function g(t) {
                const {
                    onClickhandler: e,
                    disabled: n,
                    childrenWrapperClassNames: i,
                    laoderClassNames: r,
                    loaderColor: s
                } = p(t), {
                    children: a,
                    size: l = "small",
                    ...c
                } = t;
                return o.createElement(u.SquareButton, { ...m(c),
                    disabled: n,
                    onClick: e,
                    size: l
                }, o.createElement("span", {
                    className: i
                }, a), o.createElement(h.Loader, {
                    className: r,
                    color: s
                }))
            }

            function _(t) {
                const {
                    onClickhandler: e,
                    disabled: n,
                    childrenWrapperClassNames: i,
                    laoderClassNames: r,
                    loaderColor: s
                } = p(t), {
                    children: l,
                    ...c
                } = t;
                return o.createElement(a.RoundButton, { ...m(c),
                    disabled: n,
                    onClick: e
                }, o.createElement("span", {
                    className: i
                }, l), o.createElement(h.Loader, {
                    className: r,
                    color: s
                }))
            }
        },
        160742: (t, e, n) => {
            "use strict";
            n.d(e, {
                CircleLogoAny: () => s
            });
            var i = n(50959),
                o = n(46926),
                r = n(495217);

            function s(t) {
                const {
                    logoUrls: e
                } = t;
                return 1 === e.length ? i.createElement(r.CircleLogo, { ...t,
                    logoUrl: e[0]
                }) : 2 === e.length ? i.createElement(o.CircleLogoPair, { ...t,
                    primaryLogoUrl: e[0],
                    secondaryLogoUrl: e[1]
                }) : i.createElement(r.CircleLogo, { ...t,
                    logoUrl: void 0
                })
            }
        },
        892093: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                getLogoUrlsHook: () => a,
                removeUsdAndStableCoinFromCryptoPairLogos: () => l,
                resolveLogoUrls: () => s
            });
            var i = n(849204);
            const o = JSON.parse('["XTVCUSDT","XTVCDAI","XTVCBUSD","XTVCTUSD","XTVCUSDC","XTVCDGX","XTVCHUSD"]'),
                r = (0, i.getLogoUrlResolver)();

            function s(t, e = i.LogoSize.Medium) {
                const n = t.logoid,
                    o = t["base-currency-logoid"],
                    s = t["currency-logoid"],
                    a = n && r.getSymbolLogoUrl(n, e);
                if (a) return [a];
                const l = o && r.getSymbolLogoUrl(o, e),
                    c = s && r.getSymbolLogoUrl(s, e);
                return l && c ? [l, c] : l ? [l] : c ? [c] : []
            }

            function a(t, e) {
                let n = !1;
                return (i, o, r) => {
                    const a = i["currency-logoid"] && i["base-currency-logoid"];
                    if (!n && (i.logoid || a || r)) {
                        n = !0;
                        const o = l(s({
                            logoid: i.logoid,
                            "base-currency-logoid": i["base-currency-logoid"],
                            "currency-logoid": i["currency-logoid"]
                        }, e));
                        t(o)
                    }
                }
            }

            function l(t) {
                return 2 !== t.length ? t : function(t) {
                    return t.some((t => c(t)))
                }(t) && ! function(t) {
                    return t.some((t => t.includes("country") && !c(t)))
                }(t) ? t.filter((t => !c(t))) : function(t) {
                    return t.some((t => u(t)))
                }(t) && function(t) {
                    return t.some((t => h(t)))
                }(t) ? t.filter((t => h(t))) : t
            }

            function c(t) {
                return t.includes("country/US")
            }

            function h(t) {
                return t.includes("crypto") && !u(t)
            }

            function u(t) {
                return o.some((e => t.includes(e)))
            }
        },
        46926: (t, e, n) => {
            "use strict";
            n.d(e, {
                CircleLogoPair: () => r
            });
            var i = n(50959),
                o = n(439378);
            n(531428);

            function r(t) {
                const {
                    primaryLogoUrl: e,
                    secondaryLogoUrl: n,
                    size: r,
                    className: a
                } = t;
                return i.createElement("span", {
                    className: (0, o.getBlockStyleClasses)(r, a),
                    title: t.title
                }, i.createElement(s, {
                    logoUrl: n,
                    size: r
                }), i.createElement(s, {
                    logoUrl: e,
                    size: r
                }))
            }

            function s(t) {
                const {
                    logoUrl: e,
                    size: n
                } = t, r = (0, o.getLogoStyleClasses)(n);
                return void 0 === e ? i.createElement("span", {
                    className: r
                }) : i.createElement("img", {
                    className: r,
                    src: e,
                    alt: ""
                })
            }
        },
        439378: (t, e, n) => {
            "use strict";
            n.d(e, {
                getBlockStyleClasses: () => o,
                getLogoStyleClasses: () => r
            });
            var i = n(497754);

            function o(t, e) {
                return i("tv-circle-logo-pair", `tv-circle-logo-pair--${t}`, e)
            }

            function r(t, e) {
                return i("tv-circle-logo-pair__logo", `tv-circle-logo-pair__logo--${t}`, !e && "tv-circle-logo-pair__logo-empty")
            }
        },
        495217: (t, e, n) => {
            "use strict";
            n.d(e, {
                CircleLogo: () => r
            });
            var i = n(50959),
                o = n(783036);
            n(982730);

            function r(t) {
                var e, n;
                const r = (0, o.getStyleClasses)(t.size, t.className),
                    s = null !== (n = null !== (e = t.alt) && void 0 !== e ? e : t.title) && void 0 !== n ? n : "";
                return (0, o.isCircleLogoWithUrlProps)(t) ? i.createElement("img", {
                    className: r,
                    src: t.logoUrl,
                    alt: s,
                    title: t.title,
                    loading: t.loading
                }) : i.createElement("span", {
                    className: r,
                    title: t.title
                }, t.placeholderLetter)
            }
        },
        783036: (t, e, n) => {
            "use strict";
            n.d(e, {
                getStyleClasses: () => o,
                isCircleLogoWithUrlProps: () => r
            });
            var i = n(497754);

            function o(t, e) {
                return i("tv-circle-logo", `tv-circle-logo--${t}`, e)
            }

            function r(t) {
                return "logoUrl" in t && void 0 !== t.logoUrl && 0 !== t.logoUrl.length
            }
        },
        829725: (t, e, n) => {
            "use strict";
            n.d(e, {
                OverlapManager: () => r,
                getRootOverlapManager: () => a
            });
            var i = n(650151);
            class o {
                constructor() {
                    this._storage = []
                }
                add(t) {
                    this._storage.push(t)
                }
                remove(t) {
                    this._storage = this._storage.filter((e => t !== e))
                }
                has(t) {
                    return this._storage.includes(t)
                }
                getItems() {
                    return this._storage
                }
            }
            class r {
                constructor(t = document) {
                    this._storage = new o, this._windows = new Map, this._index = 0, this._document = t, this._container = t.createDocumentFragment()
                }
                setContainer(t) {
                    const e = this._container,
                        n = null === t ? this._document.createDocumentFragment() : t;
                    ! function(t, e) {
                        Array.from(t.childNodes).forEach((t => {
                            t.nodeType === Node.ELEMENT_NODE && e.appendChild(t)
                        }))
                    }(e, n), this._container = n
                }
                registerWindow(t) {
                    this._storage.has(t) || this._storage.add(t)
                }
                ensureWindow(t, e = {
                    position: "fixed",
                    direction: "normal"
                }) {
                    const n = this._windows.get(t);
                    if (void 0 !== n) return n;
                    this.registerWindow(t);
                    const i = this._document.createElement("div");
                    if (i.style.position = e.position, i.style.zIndex = this._index.toString(), i.dataset.id = t, void 0 !== e.index) {
                        const t = this._container.childNodes.length;
                        if (e.index >= t) this._container.appendChild(i);
                        else if (e.index <= 0) this._container.insertBefore(i, this._container.firstChild);
                        else {
                            const t = this._container.childNodes[e.index];
                            this._container.insertBefore(i, t)
                        }
                    } else "reverse" === e.direction ? this._container.insertBefore(i, this._container.firstChild) : this._container.appendChild(i);
                    return this._windows.set(t, i), ++this._index, i
                }
                unregisterWindow(t) {
                    this._storage.remove(t);
                    const e = this._windows.get(t);
                    void 0 !== e && (null !== e.parentElement && e.parentElement.removeChild(e), this._windows.delete(t))
                }
                getZindex(t) {
                    const e = this.ensureWindow(t);
                    return parseInt(e.style.zIndex || "0")
                }
                moveToTop(t) {
                    if (this.getZindex(t) !== this._index) {
                        this.ensureWindow(t).style.zIndex = (++this._index).toString()
                    }
                }
                removeWindow(t) {
                    this.unregisterWindow(t)
                }
            }
            const s = new WeakMap;

            function a(t = document) {
                const e = t.getElementById("overlap-manager-root");
                if (null !== e) return (0, i.ensureDefined)(s.get(e)); {
                    const e = new r(t),
                        n = function(t) {
                            const e = t.createElement("div");
                            return e.style.position = "absolute", e.style.zIndex = 150..toString(), e.style.top = "0px", e.style.left = "0px", e.id = "overlap-manager-root", e
                        }(t);
                    return s.set(n, e), e.setContainer(n), t.body.appendChild(n), e
                }
            }
        },
        320335: (t, e, n) => {
            "use strict";
            n.d(e, {
                getPixelsFromEvent: () => o
            });
            const i = [() => navigator.userAgent.includes("Win") && navigator.userAgent.includes("Chrome") ? 1 / window.devicePixelRatio : 1, () => 16, (t = (() => 0)) => {
                var e;
                return .8 * (null !== (e = t()) && void 0 !== e ? e : 0)
            }];

            function o(t, e = (() => ({}))) {
                return {
                    x: t.deltaX * i[t.deltaMode]((() => e().width)),
                    y: t.deltaY * i[t.deltaMode]((() => e().height))
                }
            }
        },
        310399: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                Action: () => l,
                ActionAsync: () => c,
                Separator: () => h,
                Loader: () => u
            });
            var i = n(650151),
                o = n(869403),
                r = n.n(o),
                s = n(470316),
                a = n(777491);
            class l {
                constructor(t, e = a.guid()) {
                    this.type = "action", this._destroyed = !1, this._binding = null, (0, i.assert)(void 0 !== t.actionId, "actionId must be defined"), this.id = e, this._onUpdate = new(r()), this._options = t, this.update(t)
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
                    var t;
                    return null !== (t = this._options.size) && void 0 !== t ? t : "normal"
                }
                getPayload() {
                    return this._options.payload
                }
                update(t) {
                    this._destroyed || (this._unbindShortcut(), t.hotkeyHash && (this._options.shortcutHint = (0, s.humanReadableHash)(t.hotkeyHash)), this._options = Object.assign(this._options, t), this._bindShortcut(), this._onUpdate.fire(this))
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
                setBinding(t) {
                    this._binding = t
                }
                destroy() {
                    var t, e;
                    this._destroyed = !0, this._onUpdate.destroy(), null !== this._binding && this._binding.destroy(), this._unbindShortcut(), null === (e = (t = this._options).onDestroy) || void 0 === e || e.call(t)
                }
                options() {
                    return this._options
                }
                _bindShortcut() {
                    if (!this._options.hotkeyGroup || !this._options.hotkeyHash) return;
                    const t = "string" == typeof this._options.label ? this._options.label : this._options.name;
                    this._hotkeyAction = this._options.hotkeyGroup.add({
                        hotkey: this._options.hotkeyHash,
                        desc: t,
                        handler: () => this.execute(),
                        isDisabled: () => this.isDisabled()
                    })
                }
                _unbindShortcut() {
                    this._hotkeyAction && (this._hotkeyAction.destroy(), delete this._hotkeyAction)
                }
            }
            class c extends l {
                constructor(t, e, n) {
                    super({
                        actionId: t
                    }, n), this._loader = e, this._loaded = !1
                }
                loadOptions() {
                    return this._loadingPromise || (this._loadingPromise = this._loader().then((t => {
                        this._loaded = !0, this.update(t)
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
            class h {
                constructor(t) {
                    this.type = "separator", this.id = a.guid(), this._hint = t
                }
                getHint() {
                    return this._hint
                }
            }
            class u extends l {
                constructor(t) {
                    super({
                        actionId: t
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
        263221: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                ContextMenuManager: () => i
            });
            var i, o = n(310399),
                r = n(224743);
            ! function(t) {
                let e = null,
                    i = null;
                const s = [],
                    a = {
                        createAction: t => new o.Action({ ...t,
                            actionId: "Chart.CustomActionId"
                        }),
                        createAsyncAction: t => new o.ActionAsync("Chart.CustomActionId", t),
                        createSeparator: () => new o.Separator
                    };
                async function l(t, o = {}, r = {
                    menuName: ""
                }, l) {
                    let h;
                    null !== e && (t = await e(t, a));
                    const u = () => {
                        const t = s.indexOf(h); - 1 !== t && s.splice(t, 1), void 0 !== l && l()
                    };
                    if (null !== i) h = await i(t, r, u), c();
                    else {
                        const e = await Promise.all([n.e(7624), n.e(71140), n.e(85761), n.e(6092), n.e(45639), n.e(288), n.e(8009), n.e(44412), n.e(15602), n.e(75514), n.e(27284), n.e(91584)]).then(n.bind(n, 260175));
                        h = new e.ContextMenuRenderer(t, o, u, c)
                    }
                    return s.push(h), h
                }

                function c() {
                    (0, r.globalCloseMenu)()
                }
                t.createMenu = l, t.showMenu = function(t, e, n = {}, i, o) {
                    return l(t, n, i, o).then((t => t.show(e)))
                }, t.setCustomRendererFactory = function(t) {
                    i = t
                }, t.setCustomItemsProcessor = function(t) {
                    e = t
                }, t.hideAll = c, t.getShown = function() {
                    for (let t = 0; t < s.length; t++)
                        if (s[t].isShown()) return s[t];
                    return null
                }
            }(i || (i = {}))
        },
        663989: (t, e, n) => {
            "use strict";
            n.d(e, {
                SidebarCustomScroll: () => d
            });
            var i = n(778785),
                o = n(869403),
                r = n.n(o),
                s = n(318557),
                a = n(368791),
                l = n(404573),
                c = n(320335),
                h = (n(454312), n(107631));
            const u = {
                headerHeight: 0,
                additionalClass: "",
                alwaysVisible: !1,
                showBottomShadow: !0,
                scrollMarginTop: 1,
                bubbleScrollEvent: !1
            };
            class d {
                constructor(t, e, n = {}) {
                    if (this.scrolled = new(r()), this.scrolltoend = new(r()), this.scrolltostart = new(r()), this.visibilityCallbacks = [], this._scrollTargetTop = 0, this._scrollSpeed = 40, this._shadowOffset = 10, this._shadowTop = null, this._shadowBottom = null, this._dragInitialized = !1, this._dragging = !1, this._draggable = null, this._atStart = !1, this._atEnd = !1, this._stickyBottom = null, this._animation = null, this._saved = null, this._options = { ...u,
                            ...n
                        }, this._wrapper = t, this._wrapper.classList.add(h.wrapper), this._content = e, this._headerHeight = this._options.headerHeight, this._scrollMarginTop = this._options.scrollMarginTop, this._scrollBar = document.createElement("div"), this._scrollBar.classList.add("sb-scrollbar", "sb-scrollbar-body"), this._options.additionalClass && this._scrollBar.classList.add(this._options.additionalClass), this._scrollBar.classList.toggle("active-always", this._options.alwaysVisible), this._scrollBarWrapper = document.createElement("div"), this._scrollBarWrapper.classList.add("sb-scrollbar-wrap"), this._touch = i.touch,
                        this._touch) return this._content.style.position = "relative", this._wrapper.classList.add(h.touch), void this._wrapper.addEventListener("scroll", (() => this._onScroll()));
                    this._wrapper.style.overflow = "hidden", this._unsubscribe = (() => {
                        const t = () => {
                                this._dragging || (this._options.alwaysVisible || this._scrollBar.classList.add("active"), this._onScroll())
                            },
                            e = () => {
                                this._dragging || (this._options.alwaysVisible || this._scrollBar.classList.remove("active"), this._onScroll())
                            },
                            n = t => {
                                if (!t.defaultPrevented) {
                                    const e = (0, c.getPixelsFromEvent)(t, (() => ({
                                        height: this._wrapper.clientHeight
                                    }))).y;
                                    this.scroll(-e, 1) || (t.stopPropagation(), t.preventDefault())
                                }
                            };
                        return this._wrapper.addEventListener("mouseenter", t), this._wrapper.addEventListener("mouseleave", e), this._wrapper.addEventListener("wheel", n), () => {
                            this._wrapper.removeEventListener("mouseenter", t), this._wrapper.removeEventListener("mouseleave", e), this._wrapper.removeEventListener("wheel", n)
                        }
                    })(), !1 !== this._options.showTopShadow && (this._shadowTop = document.createElement("div"), this._shadowTop.classList.add("sb-inner-shadow", "top", "i-invisible"), this._wrapper.appendChild(this._shadowTop)), !1 !== this._options.showBottomShadow && (this._shadowBottom = document.createElement("div"), this._shadowBottom.classList.add("sb-inner-shadow"), this._wrapper.appendChild(this._shadowBottom)), this._shadowTop && this._headerHeight && (this._shadowTop.style.top = this._headerHeight - this._shadowOffset + "px"), this._wrapper.appendChild(this._scrollBarWrapper), this._scrollBarWrapper.appendChild(this._scrollBar), this._onScroll()
                }
                isTouch() {
                    return this._touch
                }
                getScrollBar() {
                    return this._scrollBar
                }
                initDraggable() {
                    return this._dragInitialized || (this._draggable = new l.Draggable({
                        axis: "y",
                        source: this._scrollBar,
                        containment: this._scrollBarWrapper,
                        start: () => {
                            this._dragging = !0
                        },
                        stop: () => {
                            this._dragging = !1
                        },
                        drag: () => {
                            this.updateScroll()
                        }
                    }), this._dragInitialized = !0), this
                }
                updateScroll() {
                    if (this._touch) return this;
                    const t = Math.ceil((0, s.position)(this._scrollBar).top - this._scrollMarginTop - this._headerHeight),
                        e = this.getContainerHeightWithoutHeader(),
                        n = (0, s.outerHeight)(this._content),
                        i = n - e - 1;
                    return e <= 0 || (this._scrollTargetTop = i <= 0 ? this._headerHeight : Math.min(-t * n / e + this._headerHeight, this._headerHeight), t + (0, s.contentHeight)(this._scrollBar) + 2 >= e ? this.scrollToEnd() : (this._content.style.top = this._scrollTargetTop + "px", this._onScroll())), this
                }
                getContainerHeightWithoutHeader() {
                    return this._wrapper.getBoundingClientRect().height - this._headerHeight
                }
                getContainerHeight() {
                    return this._wrapper.getBoundingClientRect().height
                }
                getContentHeight() {
                    return this._content.getBoundingClientRect().height
                }
                updateScrollBar() {
                    if (this._touch) return this;
                    const t = (0, s.position)(this._content).top,
                        e = this.getContentHeight(),
                        n = this.getContainerHeight(),
                        i = this.getContainerHeightWithoutHeader(),
                        o = 1 + this._headerHeight,
                        r = i - 2,
                        a = (Math.abs(t) - this._headerHeight) * r / e,
                        l = n * n / e;
                    return this.isContentShort() ? (this._scrollBar.classList.add("js-hidden"), this._wrapper.classList.remove("sb-scroll-active")) : (this._scrollBar.classList.remove("js-hidden"), this._scrollBar.style.height = l + "px",
                        this._scrollBar.style.top = o + a + "px", this._wrapper.classList.add("sb-scroll-active"), this.initDraggable()), this
                }
                scroll(t, e) {
                    const n = (0, s.position)(this._content).top,
                        i = (0, s.outerHeight)(this._content) - this.getContainerHeightWithoutHeader() - 1,
                        o = e || this._scrollSpeed;
                    return i <= 0 || (this._scrollTargetTop = Math.max(-i + this._headerHeight, Math.min(this._headerHeight, n + t * o)), this.setContentTop(this._scrollTargetTop), this._onScroll())
                }
                animateTo(t) {
                    if (this._touch) return this;
                    const e = (0, s.outerHeight)(this._content) - this.getContainerHeightWithoutHeader() - 1;
                    if (e <= 0) return !0;
                    this._scrollTargetTop = Math.max(-e + this._headerHeight, Math.min(this._headerHeight, -t)), this._animation && this._animation.stop(), this._animation = (0, a.doAnimate)({
                        duration: 500,
                        from: parseFloat(getComputedStyle(this._content).top),
                        to: this._scrollTargetTop,
                        onStep: (t, e) => {
                            this._content.style.top = e + "px"
                        },
                        onComplete: () => {
                            this._onScroll()
                        }
                    })
                }
                resize() {
                    const t = (0, s.outerHeight)(this._content),
                        e = (0, s.outerHeight)(this._wrapper);
                    !this._options.vAlignBottom && t < e ? this.atStart() || this.scrollToStart() : this.atEnd() ? this.scrollToEnd() : "number" == typeof this._stickyBottom && this.setContentTop(Math.min(0, this._stickyBottom + (0, s.outerHeight)(this._wrapper) - (0, s.outerHeight)(this._content)))
                }
                resizeHeader(t) {
                    const e = t - this._headerHeight;
                    this._headerHeight = t, this._scrollTargetTop += e, this._shadowTop && (this._shadowTop.style.top = this._headerHeight - this._shadowOffset + "px"), this.resize()
                }
                scrollTo(t, e) {
                    const n = {
                        position: "visible",
                        areaHeight: t instanceof HTMLElement ? (0, s.contentHeight)(t) : 0,
                        ...e
                    };
                    t instanceof HTMLElement && (t = n.offsetTop || (0, s.position)(t).top);
                    const i = (0, s.position)(this._content).top,
                        o = this._content.getBoundingClientRect().height,
                        r = this.getContainerHeightWithoutHeader();
                    if (o - r - 1 <= 0) return !0;
                    const a = -1 * (i - this._headerHeight),
                        l = a + r;
                    let c = 0;
                    if ("visible" === n.position) {
                        if (t > a && t + n.areaHeight < l) return !1;
                        c = t + n.areaHeight > l ? l - t - n.areaHeight : a - t
                    } else "top" === n.position && (c = a - t);
                    return this.scroll(c, 1), this._onScroll(), !1
                }
                scrollToEnd() {
                    const t = (0, s.position)(this._content).top,
                        e = (0, s.outerHeight)(this._content),
                        n = (0, s.outerHeight)(this._wrapper),
                        i = e > n ? t + (n - (e + t)) + 1 : 1;
                    return this.setContentTop(i), this._onScroll(), this
                }
                scrollToStart() {
                    return this.setContentTop(this._headerHeight), this._onScroll(), this
                }
                currentPosition() {
                    return Math.round((0, s.position)(this._content).top)
                }
                atStart() {
                    return Math.round((0, s.position)(this._content).top) >= this._headerHeight
                }
                atEnd(t) {
                    "number" == typeof t && isFinite(t) || (t = 0);
                    const e = Math.round((0, s.position)(this._content).top),
                        n = Math.floor((0, s.outerHeight)(this._content)),
                        i = Math.floor((0, s.outerHeight)(this._wrapper));
                    return n - Math.abs(e) - 1 <= i + t
                }
                checkContentVisibility() {
                    this._onContentVisible()
                }
                subscribeToContentVisible(t, e, n) {
                    this.visibilityCallbacks.push({
                        id: t,
                        element: e,
                        callback: n
                    })
                }
                triggerVisibilityCallbacks(t) {
                    this._onContentVisible(t)
                }
                save() {
                    return this._saved = {
                        top: (0, s.position)(this._content).top,
                        height: (0, s.outerHeight)(this._content)
                    }, this
                }
                restore() {
                    if (this._saved) {
                        if (this._saved.top === (0, s.position)(this._content).top && this._saved.height === (0,
                                s.outerHeight)(this._content)) return this._saved = null, this;
                        this._options.vAlignBottom && (this._saved.top -= (0, s.outerHeight)(this._content) - this._saved.height, this._saved.top > this._headerHeight && (this._saved.top = this._headerHeight)), this.setContentTop(this._saved.top), this._saved = null, this._onScroll(!0)
                    }
                    return this
                }
                setContentTop(t) {
                    return this._touch ? this._options.vAlignBottom && (0, s.outerHeight)(this._content) < (0, s.outerHeight)(this._wrapper) ? (this._wrapper.style.overflowY = "visible", this._content.style.position = "absolute", this._content.style.bottom = "0px") : (this._content.style.position = "relative", this._content.style.position = "auto", this._wrapper.style.overflowY = "auto", this._wrapper.scrollTop = -t) : this._content.style.top = t + "px", this
                }
                isContentShort() {
                    return this.getContentHeight() <= this.getContainerHeightWithoutHeader()
                }
                destroy() {
                    var t;
                    this._animation && this._animation.stop(), this._scrollBarWrapper && this._scrollBarWrapper.remove(), this._shadowBottom && this._shadowBottom.remove(), this._shadowTop && this._shadowTop.remove(), this._draggable && (this._draggable.destroy(), this._draggable = null), this._content.style.cssText = "", this._wrapper.style.cssText = "", null === (t = this._unsubscribe) || void 0 === t || t.call(this)
                }
                _onScroll(t) {
                    this._touch || (this._content.style.bottom = "auto"), this.scrolled.fire(), this._dragging && !0 !== t || this.updateScrollBar();
                    const e = this.atStart(),
                        n = this.atEnd();
                    return this._shadowTop && this._shadowTop.classList.toggle("i-invisible", !!e), this._shadowBottom && this._shadowBottom.classList.toggle("i-invisible", !!n), this._onContentVisible(), !this._atStart && e ? (this._atStart = !0, this.scrolltostart.fire()) : this._atStart && !e && (this._atStart = !1), !this._atEnd && n ? (this._atEnd = !0, this.scrolltoend.fire()) : this._atEnd && !n && (this._atEnd = !1), this._options.vAlignBottom && (this._stickyBottom = (0, s.outerHeight)(this._content) - Math.abs((0, s.position)(this._content).top) - (0, s.outerHeight)(this._wrapper)), (this._atStart || this._atEnd) && ("function" == typeof this._options.bubbleScrollEvent ? Boolean(this._options.bubbleScrollEvent()) : Boolean(this._options.bubbleScrollEvent))
                }
                _contentIsVisible(t) {
                    return (0, s.position)(t.element).top > -1 * this.currentPosition()
                }
                _onContentVisible(t) {
                    if (!this.visibilityCallbacks.length) return;
                    const e = t || this._contentIsVisible.bind(this),
                        n = [],
                        i = this.visibilityCallbacks.filter(((t, i) => {
                            if (!this._content.contains(t.element)) return !1;
                            const o = e(t);
                            return o && n.push(i), !o
                        }));
                    n.forEach((e => {
                        this.visibilityCallbacks[e].callback(!!t)
                    })), this.visibilityCallbacks = i
                }
            }
        },
        230148: (t, e, n) => {
            "use strict";
            var i = n(823127);
            n(415784),
                function(t) {
                    var e = !1,
                        n = document.body || document.documentElement,
                        i = "animation",
                        o = "Webkit Moz O ms Khtml".split(" "),
                        r = "";
                    if (void 0 !== n.style.animationName && (e = !0), !1 === e)
                        for (var s = 0; s < o.length; s++)
                            if (void 0 !== n.style[o[s] + "AnimationName"]) {
                                r = o[s], i = r + "Animation", "-" + r.toLowerCase() + "-", e = !0;
                                break
                            }
                    var a = ["webkit", "moz", "MS", "o", ""];
                    var l = "flicker-enable",
                        c = "flicker-options";

                    function h(t) {
                        t.stop(!0), t.css("background-color", ""), t.removeData(l), t.removeData(c)
                    }

                    function u(e) {
                        var n = e.data(l);
                        n && (!0 !== n ? --n ? (d(e),
                            e.data(l, n)) : function(e) {
                            var n = e.data(c).complete;
                            h(e), n && t.isFunction(n) && n()
                        }(e) : d(e))
                    }

                    function d(t) {
                        var e = t.css("background-color"),
                            n = t.data(c),
                            i = n.highlightColor || "#fbf8e9",
                            o = n.duration || 400,
                            r = n.easing || "swing";
                        t.animate({
                            "background-color": i
                        }, o, r).animate({
                            "background-color": e
                        }, o, r, u.bind(t, t))
                    }
                    t.fn.highlight = function(n, o) {
                        return !1 === n ? this.each((function() {
                            e ? this.style[i] = "" : h(t(this))
                        })) : (n = void 0 === n || n, this.each((function() {
                            if (e) {
                                n = !0 === n ? "infinite" : n,
                                    function(t, e, n) {
                                        for (var i = 0; i < a.length; i++) a[i] || (e = e.toLowerCase()), t.addEventListener(a[i] + e, n, !1)
                                    }(this, "AnimationEnd", (function() {
                                        this.style[i] = ""
                                    })), document.getElementsByTagName("html")[0].classList.contains("theme-dark") ? this.style[i] = "highlight-animation-theme-dark 0.4s ease-in-out " + n + " alternate" : this.style[i] = "highlight-animation 0.4s ease-in-out " + n + " alternate"
                            } else {
                                var r = t(this);
                                r.data(l, n), r.data(c, t.extend({}, o || {})), r.is(":animated") || d(r)
                            }
                        })))
                    }
                }(i)
        },
        786575: (t, e, n) => {
            "use strict";
            var i, o, r, s = n(823127);
            i = s, void 0 !== document.hidden ? (o = "hidden", r = "visibilitychange") : void 0 !== document.mozHidden ? (o = "mozHidden", r = "mozvisibilitychange") : void 0 !== document.msHidden ? (o = "msHidden", r = "msvisibilitychange") : void 0 !== document.webkitHidden && (o = "webkitHidden", r = "webkitvisibilitychange"), i.tabvisible = !0, r && (i(document).on(r, (function(t) {
                i.tabvisible = !document[o], i(window).trigger("visibilitychange", !document[o])
            })), i(document).trigger(r)), i.whenTabVisible = function(t) {
                !r || i.tabvisible ? t() : i(window).one("visibilitychange", t)
            }
        },
        779647: (t, e, n) => {
            "use strict";
            n.d(e, {
                lazyFancybox: () => o
            });
            n(823127), n(931954);
            var i = n(823127);

            function o(t) {
                const {
                    elem: e
                } = t, n = e ? i(e) : void 0, o = e => {
                    const s = i(e.currentTarget);
                    e.preventDefault(), e.stopPropagation(), r((() => {
                        void 0 !== n && (n.off({
                            click: o
                        }), n.fancybox(t)), s.click()
                    }))
                };
                "function" != typeof i.fancybox ? void 0 !== n ? n.one({
                    click: o
                }) : r((() => {
                    i.fancybox(t)
                })) : void 0 !== n ? n.fancybox(t) : i.fancybox(t)
            }

            function r(t) {
                Promise.all([n.e(36037), n.e(26554)]).then((e => {
                    n(626554), t()
                }).bind(null, n)).catch(n.oe)
            }
        },
        368791: (t, e, n) => {
            "use strict";
            n.d(e, {
                doAnimate: () => r
            });
            const i = {
                from: 0,
                duration: 250,
                easing: n(455567).easingFunc.easeOutCubic
            };
            class o {
                constructor(t) {
                    this._doing = !0, this._completed = !1, this._options = { ...i,
                        ...t
                    };
                    const e = performance.now();
                    window.requestAnimationFrame((t => {
                        this._animation(e, this._options.from, t)
                    }))
                }
                stop() {
                    this._doing = !1
                }
                completed() {
                    return this._completed
                }
                _animation(t, e, n) {
                    if (!this._doing) return void this._finishAnimation();
                    const i = (n = !n || n < 1e12 ? performance.now() : n) - t,
                        o = i >= this._options.duration || e === this._options.to,
                        r = (s = this._options.from, a = this._options.to, l = this._options.easing(i / this._options.duration), s * (1 - l) + a * l);
                    var s, a, l;
                    const c = o ? this._options.to : r,
                        h = c - e;
                    this._options.onStep(h, c), o ? this._finishAnimation() : window.requestAnimationFrame((e => {
                        this._animation(t, c, e)
                    }))
                }
                _finishAnimation() {
                    this._options.onComplete && this._options.onComplete(), this._completed = !0
                }
            }

            function r(t) {
                return new o(t)
            }
        },
        418638: (t, e, n) => {
            "use strict";
            n.d(e, {
                urlsRegExp: () => i
            });
            const i = {
                amazonawsLinks: "(?:https://|http://)(s3\\.(amazonaws|tradingview)\\.com(\\/tradingview(_staging)?)?\\/snapshots)\\/(?:\\S*?)\\.(png|bmp|jpg|jpeg)",
                imageUrl: "^[0-9a-zA-Z]{8}$",
                publishedChart: "/chart/(.+?)/([0-9a-zA-Z]{8})(?:-([^/]+))?/?",
                publishedChartOld: "/v/([0-9a-zA-Z]{8})/?",
                publishedImage: "/(?:i|x)/([0-9a-zA-Z]{8})/?",
                publishedScript: "/script/([0-9a-zA-Z]{8})(?:-([^/]+))?/?",
                externalLinks: "((http://|https://)|(www\\.))[\\w.\\-]+"
            }
        },
        36715: (t, e, n) => {
            "use strict";
            n.d(e, {
                isCurrencySymbol: () => o
            });
            var i = n(519073);

            function o(t, e) {
                return "forex" === t || (0, i.hasCryptoTypespec)(t, null != e ? e : [])
            }
        },
        251135: (t, e, n) => {
            "use strict";

            function i() {
                return Promise.all([n.e(20146), n.e(20241), n.e(36956), n.e(85931), n.e(4100), n.e(50251), n.e(85783), n.e(66949), n.e(97676), n.e(9725), n.e(13871), n.e(27488), n.e(35015), n.e(99039), n.e(38184), n.e(69893), n.e(68950), n.e(43576), n.e(25977), n.e(20651), n.e(39694), n.e(98065), n.e(5952), n.e(20321), n.e(67198)]).then(n.bind(n, 956583))
            }

            function o(t, e, n, o) {
                i().then((i => {
                    new i.BanUserDialog(t, e, n, o).show()
                }))
            }

            function r(t, e, n) {
                i().then((i => {
                    new i.UnbanUserDialog(t, e, n).show()
                }))
            }
            n.r(e), n.d(e, {
                showBanUserDialog: () => o,
                showUnbanUserDialog: () => r
            })
        },
        968675: (t, e, n) => {
            "use strict";

            function i(t) {
                return Promise.all([n.e(12275), n.e(33335), n.e(96246), n.e(83186), n.e(97676), n.e(57653), n.e(12768), n.e(32676), n.e(40968), n.e(82163)]).then(n.bind(n, 291559)).then((e => {
                    e.renderDonationPopup(t)
                }))
            }
            n.d(e, {
                openDonationPopup: () => i
            })
        },
        812191: (t, e, n) => {
            "use strict";
            n.d(e, {
                getSymbolPagePath: () => a,
                makeSymbolChartUrl: () => g,
                makeSymbolFinancialsPageUrl: () => _,
                makeSymbolPageUrl: () => m,
                makeSymbolTimelinePageUrl: () => f,
                makeTemplateSymbolUrl: () => d
            });
            var i = n(384809);
            var o = n(620031),
                r = n(36715),
                s = n(889267);

            function a(t, e) {
                if ("spread" === t.type || "expression" === t.type) {
                    const e = t.shortName && l(t.shortName),
                        n = t.proName && l(t.proName);
                    t = { ...t,
                        type: void 0,
                        shortName: e,
                        proName: n
                    }
                }
                return h(u(t, e), c(t))
            }

            function l(t) {
                var e;
                return null === (e = (0, s.tokenize)(t).find((t => "symbol" === t.type))) || void 0 === e ? void 0 : e.value
            }

            function c(t) {
                const e = {
                    shortName: t.shortName,
                    exchange: t.exchange,
                    proName: t.proName,
                    type: t.type
                };
                return t.proName && t.proName.includes(":") && ([e.exchange, e.shortName] = t.proName.split(":")), e
            }

            function h(t, e) {
                const n = encodeURIComponent(e.shortName || ""),
                    i = encodeURIComponent(e.exchange || ""),
                    o = encodeURIComponent(e.proName || "");
                return t.replace("{tvexchange}", i).replace("{tvsymbol}", n).replace("{tvprosymbol}", o)
            }

            function u(t, e = "") {
                const n = ["UKOIL", "USOIL", "XAGAUD", "XAGCAD", "XAGCHF", "XAGEUR", "XAGGBP", "XAGHKD", "XAGJPY", "XAGUSD", "XAUAUD", "XAUCAD", "XAUCHF", "XAUEUR", "XAUGBP", "XAUHKD", "XAUJPY", "XAUNZD", "XAUUSD", "XPDUSD", "XPTUSD", "SPX"];
                return void 0 === t.shortName && void 0 === t.proName ? (console.warn("Params missed"), "/") : v(t) ? t.exchange ? "/symbols/{tvsymbol}/?exchange={tvexchange}" : `/symbols/{tvsymbol}/${e}` : t.exchange || t.proName ? t.shortName && n.includes(t.shortName) ? `/symbols/{tvsymbol}/${e}` : `/symbols/{tvexchange}-{tvsymbol}/${e}` : `/symbols/{tvsymbol}/${e}`
            }

            function d(t, e) {
                let n = t;
                if (!/{tvsymbol}|{tvexchange}|{tvprosymbol}/.test(t)) {
                    let i = "tvprosymbol";
                    void 0 === e.proName && (i = "tvsymbol"), n = `${t}?tvwidgetsymbol={${i}}`
                }
                const i = h(n, c(e));
                if (!(0, o.isSafeUrl)(i)) throw new Error(`The symbol URL ${i} is not allowed.`);
                return i
            }

            function p(t, e, n, o) {
                const r = window.locale_domains ? function(t, e) {
                        const n = e || window.locale || "en";
                        let i = t[n] ? t[n] : t.en;
                        return i = "tradingview.com" === i ? "www.tradingview.com" : i, i ? document.location.protocol + "//" + i : ""
                    }(window.locale_domains, o) : window.location.origin,
                    s = r + h(t, c(e));
                return n ? (0, i.addUtmToUrl)(s, n) : s
            }

            function m(t, e, n, i) {
                return p(u(t, i), t, e, n)
            }

            function g(t, e) {
                return p("/chart/?symbol={tvprosymbol}", t, e)
            }

            function _(t, e, n) {
                return m(t, e, n, "financials-overview/")
            }

            function f(t, e, n) {
                return p(function(t) {
                    return t.exchange && !v(t) ? "/symbols/{tvexchange}-{tvsymbol}/history-timeline/" : "/symbols/{tvsymbol}/history-timeline/"
                }(t), t, e, n)
            }

            function v(t) {
                return !!t.type && (0, r.isCurrencySymbol)(t.type, t.typespecs)
            }
        },
        205937: (t, e, n) => {
            "use strict";

            function i(t) {
                return !/[\u0370-\u1FFF\u2E80-\uFDFF\uFE20-\uFFFF]/gu.test(t)
            }
            n.r(e), n.d(e, {
                isLatin: () => i
            })
        },
        535799: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                htmlEscape: () => r,
                removeTags: () => s,
                removeSpaces: () => a,
                capitalizeFirstLetterInWord: () => l
            });
            const i = /[<"'&>]/g,
                o = t => `&#${t.charCodeAt(0)};`;

            function r(t) {
                return t.replace(i, o)
            }

            function s(t = "") {
                return t.replace(/(<([^>]+)>)/gi, "")
            }

            function a(t = "") {
                return t.replace(/\s+/g, "")
            }

            function l(t = "") {
                return t.replace(/\b\w/g, (t => t.toUpperCase()))
            }
        },
        620031: (t, e, n) => {
            "use strict";

            function i(t) {
                const e = new URL(t, document.baseURI);
                return l(e) && a(e) && s(e)
            }

            function o(t) {
                const e = new URL(t, document.baseURI);
                return a(e) && s(e)
            }

            function r(t) {
                return !t.split(/(\s+)/).filter((t => t.trim().length > 0)).some((t => {
                    try {
                        const e = new URL(t);
                        return !(!e || !e.hostname.length) && !o(t)
                    } catch (t) {
                        return !1
                    }
                }))
            }
            n.d(e, {
                isInternalUrl: () => i,
                isSafeUrl: () => o,
                validateUrlsInText: () => r,
                isInternalHost: () => c,
                isTvLink: () => h
            });
            const s = t => !t.username,
                a = t => "http:" === t.protocol || "https:" === t.protocol,
                l = t => t.hostname === location.hostname || !/^\d+\.\d+\.\d+\.\d+$/.test(t.hostname) && c(t.hostname);

            function c(t, e = window.location.hostname) {
                const n = "." === e.slice(-1) ? 3 : 2,
                    i = e.toLowerCase().split(".").slice(-n),
                    o = t.toLowerCase().split(".").slice(-i.length);
                return i.join(".") === o.join(".")
            }

            function h(t) {
                try {
                    return t.startsWith("/") || c(new URL(t).hostname, "tradingview.com")
                } catch (t) {
                    return !1
                }
            }
        },
        384809: (t, e, n) => {
            "use strict";
            n.d(e, {
                addUtmToUrl: () => o
            });
            var i = n(186521);

            function o(t, e) {
                if (!/([a-zA-Z0-9.-]*tradingview.com)|localhost/.test(t)) return t;
                const n = (0, i.buildUtmQueryString)(e);
                if ("" === n) return t;
                const o = t.indexOf("?"),
                    r = t.indexOf("#"),
                    s = -1 !== r;
                if (-1 !== o && (!s || o < r)) {
                    return `${t.slice(0,o)}?${s?t.slice(o+1,r):t.slice(o+1)}&${n}${s?t.slice(r):""}`
                }
                if (s) {
                    return `${t.slice(0,r)}?${n}${t.slice(r)}`
                }
                return `${t}?${n}`
            }
        },
        186521: (t, e, n) => {
            "use strict";
            n.d(e, {
                filterUtmInfo: () => s,
                buildUtmQueryString: () => a,
                buildUtmQueryStringFromUrlParams: () => l
            });
            var i = n(798062),
                o = n(535799);
            const r = ["utm_source", "utm_medium", "utm_campaign"];

            function s(t) {
                const e = {};
                return r.forEach((n => {
                    const i = t[n];
                    "string" == typeof i && "" !== i && (e[n] = (0, o.htmlEscape)(i))
                })), e
            }

            function a(t, e = !1) {
                const n = (0, i.createUrlParams)(t);
                return n && e ? "?" + n : n
            }

            function l(t) {
                return a(s((0, i.getUrlParams)()), t)
            }
        },
        633881: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M3.25 9a5.75 5.75 0 0 1 9.79-4.1.75.75 0 1 0 1.05-1.07 7.25 7.25 0 0 0-12.18 6.7.75.75 0 1 0 1.47-.32c-.09-.4-.13-.8-.13-1.21zm12.78-1.78a.75.75 0 0 0-1.45.36A5.77 5.77 0 0 1 4.87 13a.75.75 0 0 0-1.08 1.05 7.25 7.25 0 0 0 12.24-6.82zm-7.68.07a.75.75 0 0 0-1.06 0L5.22 9.36a.75.75 0 1 0 1.06 1.06l1.54-1.54 1.54 1.54a.75.75 0 0 0 1.06 0l2.06-2.07a.75.75 0 0 0-1.06-1.06L9.9 8.83 8.35 7.29z"/></svg>'
        },
        224286: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M3.75 14a10.25 10.25 0 0 1 18.24-6.42.75.75 0 0 0 1.17-.95A11.75 11.75 0 0 0 2.69 17.2a.75.75 0 1 0 1.44-.4c-.25-.89-.38-1.82-.38-2.79zm21.42-3.66a.75.75 0 1 0-1.43.47A10.24 10.24 0 0 1 14 24.25c-3.5 0-6.6-1.76-8.45-4.45a.75.75 0 0 0-1.24.85A11.74 11.74 0 0 0 25.75 14c0-1.28-.2-2.5-.58-3.66zm-12.6 1.13a.75.75 0 0 0-1.06 0l-3.93 3.92a.75.75 0 0 0 1.06 1.06l3.4-3.39 3.4 3.4c.28.29.76.29 1.05 0l3.93-3.93a.75.75 0 1 0-1.06-1.06l-3.4 3.4-3.4-3.4z"/></svg>'
        },
        634527: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="m23.91 4.1.04.67c.07 1.08-.05 3.04-.58 5.12a13.12 13.12 0 0 1-3.17 6.06c-3.18 3.18-6.18 4.74-7.37 5.14l-.44.14-5.6-5.6.15-.44c.4-1.2 1.95-4.19 5.13-7.37a13.12 13.12 0 0 1 6.06-3.17c2.09-.53 4.04-.64 5.12-.58l.66.04Zm-5.66 9.2a2.5 2.5 0 1 1-3.53-3.53 2.5 2.5 0 0 1 3.53 3.53Z"/><path fill="currentColor" d="M10.2 7.6H8.04l-5.42 5.42 3.27.76a24.86 24.86 0 0 1 4.3-6.18ZM10.12 21.08l1.06 1.06-1.59 1.6-1.06-1.07 1.6-1.59ZM9.06 20.02 8 18.96l-3 3 1.06 1.07 3-3.01ZM5.88 16.84l1.06 1.06-1.6 1.59-1.05-1.06 1.59-1.6ZM20.42 17.82a24.85 24.85 0 0 1-6.18 4.31L15 25.4l5.42-5.42v-2.16Z"/></svg>'
        },
        663346: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 9 9m0-9-9 9"/></svg>'
        },
        759530: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16"><g fill="none" stroke="currentcolor"><path d="M9.52 10.226a5.5 5.5 0 1 0-6.983.048"/><path stroke-linecap="square" d="M4.5 14.4v.601c0 .276.216.499.495.499h2.01a.504.504 0 0 0 .495-.499V14.4m-5-4.9v3.51c0 .27.233.49.503.49h5.994a.494.494 0 0 0 .503-.49V9.5h-7z"/><path d="M3 11.5h6"/></g></svg>'
        },
        608636: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="currentColor" d="M5.18 6.6L1.3 2.7.6 2 2 .59l.7.7 3.9 3.9 3.89-3.9.7-.7L12.61 2l-.71.7L8 6.6l3.89 3.89.7.7-1.4 1.42-.71-.71L6.58 8 2.72 11.9l-.71.7-1.41-1.4.7-.71 3.9-3.9z"/></svg>'
        },
        738540: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" width="14" height="15"><path fill="none" stroke="currentcolor" stroke-linejoin="round" d="m.5 14.5a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5zm6.5-7a1 1 0 0 1 0-7 1 1 0 0 1 0 7z"/></svg>'
        },
        989148: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 15" width="13" height="15"><g fill="none"><path d="M-5-5h24v24H-5z"/><path stroke="currentcolor" stroke-linejoin="round" d="M.5 7.5h4v7h-4zm4-7h4v14h-4zm4 5h4v9h-4z"/></g></svg>'
        },
        987763: (t, e, n) => {
            "use strict";
            t.exports = n.p + "logo-tradingview.f3af8e3579cc12751704.svg"
        },
        687479: t => {
            t.exports = {
                ar: ["تُتابع"],
                ca_ES: "Following",
                cs: "Following",
                de: ["Ich folge"],
                el: "Following",
                en: "Following",
                es: ["Siguiendo"],
                fa: "Following",
                fr: ["Suivi(e)"],
                he_IL: ["עוקב"],
                hu_HU: "Following",
                id_ID: ["Mengikuti"],
                it: ["Seguito"],
                ja: ["フォロー中"],
                ko: ["팔로잉"],
                ms_MY: ["Mengikuti"],
                nl_NL: "Following",
                pl: ["Obserwujesz"],
                pt: ["Seguindo"],
                ro: "Following",
                ru: ["Вы подписаны"],
                sv: ["Följer"],
                th: ["กำลังติดตาม"],
                tr: ["Takipte"],
                vi: ["Đang theo dõi"],
                zh: ["正在关注"],
                zh_TW: ["正在關注"]
            }
        },
        288711: t => {
            t.exports = {
                ar: ["دعم"],
                ca_ES: "Boost",
                cs: "Boost",
                de: "Boost",
                el: "Boost",
                en: "Boost",
                es: "Boost",
                fa: "Boost",
                fr: ["Booster"],
                he_IL: ["מנף"],
                hu_HU: "Boost",
                id_ID: "Boost",
                it: "Boost",
                ja: ["ブースト"],
                ko: ["부스트"],
                ms_MY: ["Menggalakkan"],
                nl_NL: "Boost",
                pl: ["Doładuj"],
                pt: "Boost",
                ro: "Boost",
                ru: ["Оценить"],
                sv: ["Boosta"],
                th: ["ส่งเสริม"],
                tr: ["Yükselt"],
                vi: ["Tăng cường"],
                zh: ["提升"],
                zh_TW: ["提升"]
            }
        },
        535116: t => {
            t.exports = {
                ar: ["مراسلة"],
                ca_ES: "Message",
                cs: "Message",
                de: ["Nachricht senden"],
                el: "Message",
                en: "Message",
                es: ["Mensaje"],
                fa: "Message",
                fr: "Message",
                he_IL: ["שלח הודעה"],
                hu_HU: "Message",
                id_ID: ["Pesan"],
                it: ["Contatta"],
                ja: ["メッセージ"],
                ko: ["메시지"],
                ms_MY: ["Mesej"],
                nl_NL: "Message",
                pl: ["Wyślij wiadomość"],
                pt: ["Mensagem"],
                ro: "Message",
                ru: ["Написать"],
                sv: ["Meddelande"],
                th: ["ข้อความ"],
                tr: ["Mesaj at"],
                vi: ["Nhắn tin"],
                zh: ["消息"],
                zh_TW: ["消息"]
            }
        },
        620036: t => {
            t.exports = {
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
        490289: t => {
            t.exports = {
                ar: ["تشجيع"],
                ca_ES: "Cheer",
                cs: "Cheer",
                de: ["Applaus"],
                el: "Cheer",
                en: "Cheer",
                es: ["Animar"],
                fa: "Cheer",
                fr: ["Féliciter"],
                he_IL: ["פרגן"],
                hu_HU: "Cheer",
                id_ID: "Cheer",
                it: ["Festeggia"],
                ja: ["応援"],
                ko: ["환호"],
                ms_MY: ["Bersorak"],
                nl_NL: "Cheer",
                pl: ["Dopinguj"],
                pt: ["Apoie"],
                ro: "Cheer",
                ru: ["Поддержать"],
                sv: ["Heja"],
                th: ["ชื่นชม"],
                tr: ["Bravo"],
                vi: ["Chúc mừng"],
                zh: ["打赏"],
                zh_TW: ["贊助"]
            }
        },
        285842: t => {
            t.exports = {
                ar: ["الوسيط"],
                ca_ES: "Broker",
                cs: "Broker",
                de: "Broker",
                el: "Broker",
                en: "Broker",
                es: "Broker",
                fa: "Broker",
                fr: ["Courtier"],
                he_IL: ["ברוקר"],
                hu_HU: "Broker",
                id_ID: "Broker",
                it: "Broker",
                ja: ["ブローカー"],
                ko: ["브로커"],
                ms_MY: "Broker",
                nl_NL: "Broker",
                pl: "Broker",
                pt: ["Corretora"],
                ro: "Broker",
                ru: ["Брокер"],
                sv: ["Mäklare"],
                th: ["โบรกเกอร์"],
                tr: ["Aracı Kurum"],
                vi: ["Nhà môi giới"],
                zh: ["经纪商"],
                zh_TW: ["經紀商"]
            }
        },
        614319: t => {
            t.exports = {
                ar: ["مسح"],
                ca_ES: ["Eliminar"],
                cs: ["Odstranit"],
                de: ["Löschen"],
                el: ["Διαγραφή"],
                en: "Delete",
                es: ["Eliminar"],
                fa: ["حذف"],
                fr: ["Effacer"],
                he_IL: ["מחק"],
                hu_HU: ["Törlés"],
                id_ID: ["Hapus"],
                it: ["Elimina"],
                ja: ["削除"],
                ko: ["지움"],
                ms_MY: ["Padam"],
                nl_NL: ["Verwijderen"],
                pl: ["Usuń"],
                pt: ["Remover"],
                ro: "Delete",
                ru: ["Удалить"],
                sv: ["Ta bort"],
                th: ["ลบ"],
                tr: ["Sil"],
                vi: ["Xóa"],
                zh: ["删除"],
                zh_TW: ["删除"]
            }
        },
        93210: t => {
            t.exports = {
                ar: ["تابع"],
                ca_ES: "Follow",
                cs: "Follow",
                de: ["Folgen"],
                el: "Follow",
                en: "Follow",
                es: ["Seguir"],
                fa: "Follow",
                fr: ["Suivre"],
                he_IL: ["עקוב"],
                hu_HU: ["Követés"],
                id_ID: ["Ikuti"],
                it: ["Segui"],
                ja: ["フォロー"],
                ko: ["팔로우"],
                ms_MY: ["Ikut"],
                nl_NL: ["Volgen"],
                pl: ["Obserwuj"],
                pt: ["Seguir"],
                ro: "Follow",
                ru: ["Подписаться"],
                sv: ["Följ"],
                th: ["ติดตาม"],
                tr: ["Takip Et"],
                vi: ["Theo dõi"],
                zh: ["关注"],
                zh_TW: ["關注"]
            }
        },
        394502: t => {
            t.exports = {
                ar: ["المتابعون"],
                ca_ES: "Followers",
                cs: "Followers",
                de: "Followers",
                el: "Followers",
                en: "Followers",
                es: ["Seguidores"],
                fa: "Followers",
                fr: "Followers",
                he_IL: ["עוקבים"],
                hu_HU: ["Követők"],
                id_ID: ["Pengikut"],
                it: ["Follower"],
                ja: ["フォロワー"],
                ko: ["팔로어"],
                ms_MY: ["Pengikut"],
                nl_NL: ["Volgers"],
                pl: ["Obserwujący"],
                pt: ["Seguidores"],
                ro: "Followers",
                ru: ["Подписчики"],
                sv: ["Följare"],
                th: ["ผู้ติดตาม"],
                tr: ["Takip Edenler"],
                vi: ["Người theo dõi"],
                zh: ["粉丝"],
                zh_TW: ["粉絲"]
            }
        },
        824010: t => {
            t.exports = {
                ar: ["مُتميّز"],
                ca_ES: ["Destacat"],
                cs: "Featured",
                de: "Featured",
                el: "Featured",
                en: "Featured",
                es: ["Destacado"],
                fa: "Featured",
                fr: ["En vedette:"],
                he_IL: ["תכונות"],
                hu_HU: "Featured",
                id_ID: ["Pilihan"],
                it: ["In evidenza"],
                ja: ["注目"],
                ko: ["포함된"],
                ms_MY: ["Ciri penuh"],
                nl_NL: "Featured",
                pl: ["Zalecane"],
                pt: ["Destaque"],
                ro: "Featured",
                ru: ["Рекомендованный"],
                sv: ["Uppvisad"],
                th: ["ที่น่าสนใจ"],
                tr: ["Özellikli"],
                vi: ["Nổi bật"],
                zh: ["精选"],
                zh_TW: ["精選"]
            }
        },
        870840: t => {
            t.exports = {
                ar: ["التحاليل"],
                ca_ES: "Ideas",
                cs: "Ideas",
                de: ["Ideen"],
                el: "Ideas",
                en: "Ideas",
                es: "Ideas",
                fa: "Ideas",
                fr: ["Idées"],
                he_IL: ["רעיונות"],
                hu_HU: ["Ötletek"],
                id_ID: ["Ide-Ide"],
                it: ["Idee"],
                ja: ["アイデア"],
                ko: ["아이디어"],
                ms_MY: ["Idea"],
                nl_NL: ["Ideeën"],
                pl: ["Pomysły"],
                pt: ["Ideias"],
                ro: "Ideas",
                ru: ["Идеи"],
                sv: ["Idéer"],
                th: ["ไอเดีย"],
                tr: ["Fikirler"],
                vi: ["Ý tưởng"],
                zh: ["观点"],
                zh_TW: ["投資想法"]
            }
        },
        758901: t => {
            t.exports = {
                ar: ["موافق"],
                ca_ES: ["Acceptar"],
                cs: "OK",
                de: "OK",
                el: "OK",
                en: "OK",
                es: ["Aceptar"],
                fa: ["تایید"],
                fr: "OK",
                he_IL: ["אישור"],
                hu_HU: ["Rendben"],
                id_ID: "OK",
                it: "OK",
                ja: "OK",
                ko: ["확인"],
                ms_MY: "OK",
                nl_NL: ["Oké"],
                pl: "OK",
                pt: "OK",
                ro: "OK",
                ru: ["ОК"],
                sv: "OK",
                th: ["ยืนยัน"],
                tr: ["Tamam"],
                vi: ["Đồng ý"],
                zh: ["确认"],
                zh_TW: ["確認"]
            }
        },
        679732: t => {
            t.exports = {
                ar: ["تم نسخ الرابط إلى الحافظة"],
                ca_ES: ["Enllaç copiat al porta-retalls"],
                cs: "Link copied to clipboard",
                de: ["Link in Zwischenablage kopiert"],
                el: "Link copied to clipboard",
                en: "Link copied to clipboard",
                es: ["Enlace copiado al portapapeles"],
                fa: "Link copied to clipboard",
                fr: ["Lien copié dans le presse-papier"],
                he_IL: ["הקישור הועתק ללוח"],
                hu_HU: "Link copied to clipboard",
                id_ID: ["Tautan disalin ke papan klip"],
                it: ["Link copiato"],
                ja: ["リンクがクリップボードにコピーされました"],
                ko: ["클립보드에 링크 카피되었음"],
                ms_MY: ["Pautan disalin kepada papan keratan"],
                nl_NL: "Link copied to clipboard",
                pl: ["Link skopiowany do schowka"],
                pt: ["Link copiado para a área de transferência"],
                ro: "Link copied to clipboard",
                ru: ["Ссылка скопирована в буфер"],
                sv: ["Länken har kopierats till Urklipp"],
                th: ["ลิงค์ถูกก็อปปี้ไปยังคลิปบอร์ด"],
                tr: ["Bağlantı panoya kopyalandı"],
                vi: ["Liên kết được sao chép vào bộ nhớ tạm"],
                zh: ["链接复制到剪贴板"],
                zh_TW: ["鏈接複製到剪貼簿"]
            }
        },
        769708: t => {
            t.exports = {
                ar: ["الرسوم البيانية الأخيرة"],
                ca_ES: ["Últims xats"],
                cs: "Recent Chats",
                de: ["Letzte Chats"],
                el: "Recent Chats",
                en: "Recent Chats",
                es: ["Chats recientes"],
                fa: "Recent Chats",
                fr: ["Chats récents"],
                he_IL: ["שיחות אחרונות"],
                hu_HU: ["Legutóbbi Chartok"],
                id_ID: ["Obrolan Terbaru"],
                it: ["Chat recenti"],
                ja: ["最近のチャット"],
                ko: ["최근채팅"],
                ms_MY: ["Sesi Sembang Terkini"],
                nl_NL: ["Recente chats"],
                pl: ["Najnowsze Czaty"],
                pt: ["Conversas recentes"],
                ro: "Recent Chats",
                ru: ["Последние чаты"],
                sv: ["Senaste chattar"],
                th: ["แชทล่าสุด"],
                tr: ["En Son Sohbetler"],
                vi: ["Cuộc trò chuyện gần đây"],
                zh: ["最近的聊天"],
                zh_TW: ["最近的聊天"]
            }
        },
        441799: t => {
            t.exports = {
                ar: ["سمعة"],
                ca_ES: "Reputation",
                cs: "Reputation",
                de: "Reputation",
                el: "Reputation",
                en: "Reputation",
                es: ["Reputación"],
                fa: "Reputation",
                fr: ["Réputation"],
                he_IL: ["מוניטין"],
                hu_HU: ["Név"],
                id_ID: ["Reputasi"],
                it: ["Reputazione"],
                ja: ["評価"],
                ko: ["명성"],
                ms_MY: ["Reputasi"],
                nl_NL: "Reputation",
                pl: ["Reputacja"],
                pt: ["Reputação"],
                ro: "Reputation",
                ru: ["Репутация"],
                sv: ["Rykte"],
                th: ["ชื่อเสียง"],
                tr: ["İtibar"],
                vi: ["Danh tiếng"],
                zh: ["荣誉值"],
                zh_TW: ["聲譽值"]
            }
        },
        18751: t => {
            t.exports = {
                ar: ["إلغاء المتابعه"],
                ca_ES: "Unfollow",
                cs: "Unfollow",
                de: ["Nicht mehr folgen"],
                el: "Unfollow",
                en: "Unfollow",
                es: ["Dejar de seguir"],
                fa: "Unfollow",
                fr: ["Ne plus suivre"],
                he_IL: ["בטל עוקב"],
                hu_HU: ["Követés visszavonása"],
                id_ID: ["Berhenti Mengikuti"],
                it: ["Non seguire più"],
                ja: ["フォローしない"],
                ko: ["언팔로우"],
                ms_MY: ["Tidak mengikut"],
                nl_NL: "Unfollow",
                pl: ["Przestań obserwować"],
                pt: ["Desseguir"],
                ro: "Unfollow",
                ru: ["Отписаться"],
                sv: ["Sluta följa"],
                th: ["ยกเลิกการติดตาม"],
                tr: ["Takibi bırak"],
                vi: ["Bỏ theo dõi"],
                zh: ["取消关注"],
                zh_TW: ["取消關注"]
            }
        }
    }
]);
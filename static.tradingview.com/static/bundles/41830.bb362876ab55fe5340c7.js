(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [41830, 745], {
        259142: function(e, t) {
            var o, n, i;
            n = [t], o = function(e) {
                "use strict";

                function t(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, o = Array(e.length); t < e.length; t++) o[t] = e[t];
                        return o
                    }
                    return Array.from(e)
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var o = !1;
                if ("undefined" != typeof window) {
                    var n = {
                        get passive() {
                            o = !0
                        }
                    };
                    window.addEventListener("testPassive", null, n), window.removeEventListener("testPassive", null, n)
                }
                var i = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
                    r = [],
                    s = !1,
                    a = -1,
                    l = void 0,
                    c = void 0,
                    d = function(e) {
                        return r.some((function(t) {
                            return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e))
                        }))
                    },
                    u = function(e) {
                        var t = e || window.event;
                        return !!d(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1)
                    },
                    h = function() {
                        setTimeout((function() {
                            void 0 !== c && (document.body.style.paddingRight = c, c = void 0), void 0 !== l && (document.body.style.overflow = l, l = void 0)
                        }))
                    };
                e.disableBodyScroll = function(e, n) {
                    if (i) {
                        if (!e) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
                        if (e && !r.some((function(t) {
                                return t.targetElement === e
                            }))) {
                            var h = {
                                targetElement: e,
                                options: n || {}
                            };
                            r = [].concat(t(r), [h]), e.ontouchstart = function(e) {
                                1 === e.targetTouches.length && (a = e.targetTouches[0].clientY)
                            }, e.ontouchmove = function(t) {
                                var o, n, i, r;
                                1 === t.targetTouches.length && (n = e, r = (o = t).targetTouches[0].clientY - a, !d(o.target) && (n && 0 === n.scrollTop && 0 < r || (i = n) && i.scrollHeight - i.scrollTop <= i.clientHeight && r < 0 ? u(o) : o.stopPropagation()))
                            }, s || (document.addEventListener("touchmove", u, o ? {
                                passive: !1
                            } : void 0), s = !0)
                        }
                    } else {
                        m = n, setTimeout((function() {
                            if (void 0 === c) {
                                var e = !!m && !0 === m.reserveScrollBarGap,
                                    t = window.innerWidth - document.documentElement.clientWidth;
                                e && 0 < t && (c = document.body.style.paddingRight, document.body.style.paddingRight = t + "px")
                            }
                            void 0 === l && (l = document.body.style.overflow, document.body.style.overflow = "hidden")
                        }));
                        var p = {
                            targetElement: e,
                            options: n || {}
                        };
                        r = [].concat(t(r), [p])
                    }
                    var m
                }, e.clearAllBodyScrollLocks = function() {
                    i ? (r.forEach((function(e) {
                        e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null
                    })), s && (document.removeEventListener("touchmove", u, o ? {
                        passive: !1
                    } : void 0), s = !1), r = [], a = -1) : (h(), r = [])
                }, e.enableBodyScroll = function(e) {
                    if (i) {
                        if (!e) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                        e.ontouchstart = null, e.ontouchmove = null, r = r.filter((function(t) {
                            return t.targetElement !== e
                        })), s && 0 === r.length && (document.removeEventListener("touchmove", u, o ? {
                            passive: !1
                        } : void 0), s = !1)
                    } else 1 === r.length && r[0].targetElement === e ? (h(), r = []) : r = r.filter((function(t) {
                        return t.targetElement !== e
                    }))
                }
            }, void 0 === (i = "function" == typeof o ? o.apply(t, n) : o) || (e.exports = i)
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
        645469: e => {
            e.exports = {
                "tablet-normal-breakpoint": "screen and (max-width: 768px)",
                "small-height-breakpoint": "screen and (max-height: 360px)",
                "tablet-small-breakpoint": "screen and (max-width: 430px)"
            }
        },
        849361: e => {
            e.exports = {
                dialog: "dialog-o2xKpnz8",
                wrapper: "wrapper-o2xKpnz8",
                separator: "separator-o2xKpnz8"
            }
        },
        424810: e => {
            e.exports = {
                "small-height-breakpoint": "screen and (max-height: 360px)",
                container: "container-HS2PTQRJ",
                unsetAlign: "unsetAlign-HS2PTQRJ",
                title: "title-HS2PTQRJ",
                subtitle: "subtitle-HS2PTQRJ",
                textWrap: "textWrap-HS2PTQRJ",
                ellipsis: "ellipsis-HS2PTQRJ",
                close: "close-HS2PTQRJ",
                icon: "icon-HS2PTQRJ"
            }
        },
        536612: e => {
            e.exports = {
                dialog: "dialog-nnDbXk_L",
                rounded: "rounded-nnDbXk_L",
                shadowed: "shadowed-nnDbXk_L",
                fullscreen: "fullscreen-nnDbXk_L",
                darker: "darker-nnDbXk_L",
                backdrop: "backdrop-nnDbXk_L"
            }
        },
        419283: e => {
            e.exports = {
                "tablet-normal-breakpoint": "screen and (max-width: 768px)",
                "tooltip-offset": "20px",
                dialog: "dialog-UExGRfA_",
                dragging: "dragging-UExGRfA_",
                dialogAnimatedAppearance: "dialogAnimatedAppearance-UExGRfA_",
                dialogAnimation: "dialogAnimation-UExGRfA_",
                dialogTooltip: "dialogTooltip-UExGRfA_"
            }
        },
        945966: e => {
            e.exports = {
                "default-drawer-min-top-distance": "100px",
                wrap: "wrap-yBUNQyVA",
                positionBottom: "positionBottom-yBUNQyVA",
                backdrop: "backdrop-yBUNQyVA",
                drawer: "drawer-yBUNQyVA",
                positionLeft: "positionLeft-yBUNQyVA"
            }
        },
        164429: e => {
            e.exports = {
                favorite: "favorite-TPXOIXOJ",
                disabled: "disabled-TPXOIXOJ",
                active: "active-TPXOIXOJ",
                checked: "checked-TPXOIXOJ"
            }
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
        94725: e => {
            e.exports = {
                separator: "separator-LQ6E1iWj"
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
        190948: e => {
            e.exports = {
                icon: "icon-XIHzWm6B",
                dropped: "dropped-XIHzWm6B"
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
        540975: (e, t, o) => {
            "use strict";
            o.d(t, {
                AnchorButton: () => u,
                Button: () => c
            });
            var n = o(50959),
                i = o(915812);

            function r(e = "default") {
                switch (e) {
                    case "default":
                        return "primary";
                    case "stroke":
                        return "secondary"
                }
            }

            function s(e = "primary") {
                switch (e) {
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

            function a(e = "m") {
                switch (e) {
                    case "s":
                        return "xsmall";
                    case "m":
                        return "small";
                    case "l":
                        return "large"
                }
            }

            function l(e) {
                const {
                    intent: t,
                    size: o,
                    appearance: n,
                    useFullWidth: i,
                    icon: l,
                    ...c
                } = e;
                return { ...c,
                    color: s(t),
                    size: a(o),
                    variant: r(n),
                    stretch: i,
                    startIcon: l
                }
            }

            function c(e) {
                return n.createElement(i.SquareButton, { ...l(e)
                })
            }

            function d(e) {
                const {
                    intent: t,
                    size: o,
                    appearance: n,
                    useFullWidth: i,
                    icon: l,
                    ...c
                } = e;
                return { ...c,
                    color: s(t),
                    size: a(o),
                    variant: r(n),
                    stretch: i,
                    startIcon: l
                }
            }

            function u(e) {
                return n.createElement(i.SquareAnchorButton, { ...d(e)
                })
            }
        },
        915812: (e, t, o) => {
            "use strict";
            o.d(t, {
                SquareButton: () => n.SquareButton,
                SquareAnchorButton: () => i.SquareAnchorButton
            });
            o(221191);
            var n = o(422175),
                i = o(951144)
        },
        951144: (e, t, o) => {
            "use strict";
            o.d(t, {
                SquareAnchorButton: () => l
            });
            var n = o(50959),
                i = o(301792),
                r = o(8626),
                s = o(221191);

            function a(e) {
                const {
                    className: t,
                    color: o,
                    variant: n,
                    size: i,
                    stretch: s,
                    animated: a,
                    icon: l,
                    iconOnly: c,
                    startIcon: d,
                    endIcon: u,
                    ...h
                } = e;
                return { ...h,
                    ...(0, r.filterDataProps)(e),
                    ...(0, r.filterAriaProps)(e)
                }
            }

            function l(e) {
                const {
                    reference: t
                } = e, {
                    isGrouped: o,
                    cellState: r,
                    disablePositionAdjustment: l
                } = (0, n.useContext)(i.ControlGroupContext), c = (0, s.getSquareButtonClasses)({ ...e,
                    isGrouped: o,
                    cellState: r,
                    disablePositionAdjustment: l,
                    isAnchor: !0
                });
                return n.createElement("a", { ...a(e),
                    className: c,
                    ref: t
                }, n.createElement(s.SquareButtonContent, { ...e
                }))
            }
        },
        221191: (e, t, o) => {
            "use strict";
            o.d(t, {
                getSquareButtonClasses: () => c,
                SquareButtonContent: () => d
            });
            var n = o(50959),
                i = o(497754),
                r = o(307754),
                s = o(83436),
                a = o(428146),
                l = o.n(a);

            function c(e) {
                const {
                    color: t = "brand",
                    size: o = "medium",
                    variant: n = "primary",
                    stretch: s = !1,
                    icon: a,
                    startIcon: c,
                    endIcon: d,
                    iconOnly: u = !1,
                    className: h,
                    isGrouped: p,
                    cellState: m,
                    disablePositionAdjustment: g = !1,
                    isAnchor: v = !1
                } = e, f = function(e) {
                    let t = "";
                    return 0 !== e && (1 & e && (t = i(t, l()["no-corner-top-left"])), 2 & e && (t = i(t, l()["no-corner-top-right"])), 4 & e && (t = i(t, l()["no-corner-bottom-right"])), 8 & e && (t = i(t, l()["no-corner-bottom-left"]))), t
                }((0, r.getGroupCellRemoveRoundBorders)(m));
                return i(h, l().button, l()[`size-${o}`], l()[`color-${t}`], l()[`variant-${n}`], s && l().stretch, (a || c) && l()["with-start-icon"], d && l()["with-end-icon"], u && l()["icon-only"], f, p && l().grouped, p && !g && l()["adjust-position"], p && m.isTop && l()["first-row"], p && m.isLeft && l()["first-col"], v && l().link)
            }

            function d(e) {
                const {
                    startIcon: t,
                    icon: o,
                    iconOnly: i,
                    children: r,
                    endIcon: a
                } = e, c = null != t ? t : o;
                return n.createElement(n.Fragment, null, c && n.createElement(s.Icon, {
                    icon: c,
                    className: l()["start-icon-wrap"]
                }), r && n.createElement("span", {
                    className: l().content
                }, r), a && !i && n.createElement(s.Icon, {
                    icon: a,
                    className: l()["end-icon-wrap"]
                }))
            }
        },
        422175: (e, t, o) => {
            "use strict";
            o.d(t, {
                SquareButton: () => l
            });
            var n = o(50959),
                i = o(301792),
                r = o(8626),
                s = o(221191);

            function a(e) {
                const {
                    className: t,
                    color: o,
                    variant: n,
                    size: i,
                    stretch: s,
                    animated: a,
                    icon: l,
                    iconOnly: c,
                    startIcon: d,
                    endIcon: u,
                    ...h
                } = e;
                return { ...h,
                    ...(0, r.filterDataProps)(e),
                    ...(0, r.filterAriaProps)(e)
                }
            }

            function l(e) {
                const {
                    reference: t,
                    ...o
                } = e, {
                    isGrouped: r,
                    cellState: l,
                    disablePositionAdjustment: c
                } = (0, n.useContext)(i.ControlGroupContext), d = (0, s.getSquareButtonClasses)({ ...o,
                    isGrouped: r,
                    cellState: l,
                    disablePositionAdjustment: c
                });
                return n.createElement("button", { ...a(o),
                    className: d,
                    ref: t
                }, n.createElement(s.SquareButtonContent, { ...o
                }))
            }
        },
        301792: (e, t, o) => {
            "use strict";
            o.d(t, {
                ControlGroupContext: () => n
            });
            const n = o(50959).createContext({
                isGrouped: !1,
                cellState: {
                    isTop: !0,
                    isRight: !0,
                    isBottom: !0,
                    isLeft: !0
                }
            })
        },
        307754: (e, t, o) => {
            "use strict";

            function n(e) {
                let t = 0;
                return e.isTop && e.isLeft || (t += 1), e.isTop && e.isRight || (t += 2), e.isBottom && e.isLeft || (t += 8), e.isBottom && e.isRight || (t += 4), t
            }
            o.d(t, {
                getGroupCellRemoveRoundBorders: () => n
            })
        },
        8626: (e, t, o) => {
            "use strict";

            function n(e) {
                return r(e, s)
            }

            function i(e) {
                return r(e, a)
            }

            function r(e, t) {
                const o = Object.entries(e).filter(t),
                    n = {};
                for (const [e, t] of o) n[e] = t;
                return n
            }

            function s(e) {
                const [t, o] = e;
                return 0 === t.indexOf("data-") && "string" == typeof o
            }

            function a(e) {
                return 0 === e[0].indexOf("aria-")
            }
            o.d(t, {
                filterDataProps: () => n,
                filterAriaProps: () => i,
                filterProps: () => r,
                isDataAttribute: () => s,
                isAriaAttribute: () => a
            })
        },
        746326: (e, t, o) => {
            "use strict";

            function n(e) {
                const {
                    paddingTop: t,
                    paddingBottom: o
                } = window.getComputedStyle(e);
                return [t, o].reduce(((e, t) => e - Number((t || "").replace("px", ""))), e.clientHeight)
            }

            function i(e, t = !1) {
                const o = getComputedStyle(e),
                    n = [o.height];
                return "border-box" !== o.boxSizing && n.push(o.paddingTop, o.paddingBottom, o.borderTopWidth, o.borderBottomWidth), t && n.push(o.marginTop, o.marginBottom), n.reduce(((e, t) => e + (parseFloat(t) || 0)), 0)
            }

            function r(e, t = !1) {
                const o = getComputedStyle(e),
                    n = [o.width];
                return "border-box" !== o.boxSizing && n.push(o.paddingLeft, o.paddingRight, o.borderLeftWidth, o.borderRightWidth), t && n.push(o.marginLeft, o.marginRight), n.reduce(((e, t) => e + (parseFloat(t) || 0)), 0)
            }
            o.d(t, {
                contentHeight: () => n,
                outerHeight: () => i,
                outerWidth: () => r
            })
        },
        551080: (e, t, o) => {
            "use strict";

            function n(e) {
                return t => {
                    e.forEach((e => {
                        "function" == typeof e ? e(t) : null != e && (e.current = t)
                    }))
                }
            }

            function i(e) {
                return n([e])
            }
            o.d(t, {
                mergeRefs: () => n,
                isomorphicRef: () => i
            })
        },
        531327: (e, t, o) => {
            "use strict";

            function n(e) {
                return i() ? 0 : r() ? 46 : Math.min(Math.max(e, 46), 450)
            }
            o.d(t, {
                getWidgetBarPadding: () => n,
                isWidgetBarFullscreen: () => i
            });
            const i = () => !window.matchMedia("screen and (min-width: 768px)").matches,
                r = () => !window.matchMedia("screen and (min-width: 1280px)").matches
        },
        314308: (e, t, o) => {
            "use strict";

            function n(e, t, o, n, i) {
                function r(i) {
                    if (e > i.timeStamp) return;
                    const r = i.target;
                    void 0 !== o && null !== t && null !== r && r.ownerDocument === n && (t.contains(r) || o(i))
                }
                return i.click && n.addEventListener("click", r, !1), i.mouseDown && n.addEventListener("mousedown", r, !1), i.touchEnd && n.addEventListener("touchend", r, !1), i.touchStart && n.addEventListener("touchstart", r, !1), () => {
                    n.removeEventListener("click", r, !1), n.removeEventListener("mousedown", r, !1), n.removeEventListener("touchend", r, !1), n.removeEventListener("touchstart", r, !1)
                }
            }
            o.d(t, {
                addOutsideEventListener: () => n
            })
        },
        575658: (e, t, o) => {
            "use strict";
            o.d(t, {
                setFixedBodyState: () => a
            });
            var n = o(76107),
                i = o(531327);
            let r = 0,
                s = !1;

            function a(e) {
                const {
                    body: t
                } = document, o = t.querySelector(".widgetbar-wrap");
                if (e && 1 == ++r) {
                    const e = (0, n.getCSSProperty)(t, "overflow"),
                        i = (0, n.getCSSPropertyNumericValue)(t, "padding-right");
                    "hidden" !== e.toLowerCase() && t.scrollHeight > t.offsetHeight && ((0, n.setStyle)(o, "right", `${(0,n.getScrollbarWidth)()}px`), t.style.paddingRight = `${i+(0,n.getScrollbarWidth)()}px`, s = !0), t.classList.add("i-no-scroll")
                } else if (!e && r > 0 && 0 == --r && (t.classList.remove("i-no-scroll"), s)) {
                    (0, n.setStyle)(o, "right", "0px");
                    let e = 0;
                    e = o ? (0, i.getWidgetBarPadding)((0, n.getContentWidth)(o)) : 0, t.scrollHeight <= t.clientHeight && (e -= (0, n.getScrollbarWidth)()), t.style.paddingRight = (e < 0 ? 0 : e) + "px", s = !1
                }
            }
        },
        642709: (e, t, o) => {
            "use strict";
            o.d(t, {
                DialogBreakpoints: () => i
            });
            var n = o(645469);
            const i = {
                SmallHeight: n["small-height-breakpoint"],
                TabletSmall: n["tablet-small-breakpoint"],
                TabletNormal: n["tablet-normal-breakpoint"]
            }
        },
        619027: (e, t, o) => {
            "use strict";
            o.d(t, {
                AdaptivePopupDialog: () => S
            });
            var n = o(50959),
                i = o(650151),
                r = o(424720),
                s = o(497754),
                a = o.n(s),
                l = o(470316),
                c = o(515312),
                d = o(500745),
                u = o(221155),
                h = o(642709),
                p = o(18182),
                m = o(8629),
                g = o(744359),
                v = o(332450),
                f = o(251954),
                _ = o(772626),
                b = o(551080),
                w = o(849361);
            const y = {
                    vertical: 20
                },
                C = {
                    vertical: 0
                };
            class S extends n.PureComponent {
                constructor() {
                    super(...arguments), this._controller = null, this._reference = null, this._orientationMediaQuery = null, this._renderChildren = (e, t) => (this._controller = e, this.props.render({
                        requestResize: this._requestResize,
                        centerAndFit: this._centerAndFit,
                        isSmallWidth: t
                    })), this._handleReference = e => this._reference = e, this._handleCloseBtnClick = () => {
                        this.props.onKeyboardClose && this.props.onKeyboardClose(), this._handleClose()
                    }, this._handleClose = () => {
                        this.props.onClose()
                    }, this._handleOpen = () => {
                        void 0 !== this.props.onOpen && this.props.isOpened && this.props.onOpen(this.props.fullScreen || window.matchMedia(h.DialogBreakpoints.TabletSmall).matches)
                    }, this._handleKeyDown = e => {
                        if (!e.defaultPrevented) {
                            if (this.props.onKeyDown && this.props.onKeyDown(e), 27 === (0, l.hashFromEvent)(e)) {
                                if (e.defaultPrevented) return;
                                if (this.props.forceCloseOnEsc && this.props.forceCloseOnEsc()) return this.props.onKeyboardClose && this.props.onKeyboardClose(), void this._handleClose();
                                const {
                                    activeElement: o
                                } = document, n = (0, i.ensureNotNull)(this._reference);
                                if (null !== o) {
                                    if (e.preventDefault(), "true" === (t = o).getAttribute("data-haspopup") && "true" !== t.getAttribute("data-expanded")) return void this._handleClose();
                                    if ((0, c.isTextEditingField)(o)) return void n.focus();
                                    if (n.contains(o)) return this.props.onKeyboardClose && this.props.onKeyboardClose(), void this._handleClose()
                                }
                            }
                            var t;
                            (function(e) {
                                if ("function" == typeof e) return e();
                                return Boolean(e)
                            })(this.props.disableTabNavigationContainment) || (0, g.containTabNavigation)(e)
                        }
                    }, this._requestResize = () => {
                        null !== this._controller && this._controller.recalculateBounds()
                    }, this._centerAndFit = () => {
                        null !== this._controller && this._controller.centerAndFit()
                    }
                }
                componentDidMount() {
                    this.props.ignoreClosePopupsAndDialog || f.subscribe(v.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._handleClose, null), this._handleOpen(), void 0 !== this.props.onOpen && (this._orientationMediaQuery = window.matchMedia("(orientation: portrait)"), (0, r.mediaQueryAddEventListener)(this._orientationMediaQuery, this._handleOpen))
                }
                componentWillUnmount() {
                    this.props.ignoreClosePopupsAndDialog || f.unsubscribe(v.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._handleClose, null), null !== this._orientationMediaQuery && (0, r.mediaQueryRemoveEventListener)(this._orientationMediaQuery, this._handleOpen)
                }
                focus() {
                    (0, i.ensureNotNull)(this._reference).focus()
                }
                getElement() {
                    return this._reference
                }
                contains(e) {
                    var t, o;
                    return null !== (o = null === (t = this._reference) || void 0 === t ? void 0 : t.contains(e)) && void 0 !== o && o
                }
                render() {
                    const {
                        className: e,
                        wrapperClassName: t,
                        headerClassName: o,
                        isOpened: i,
                        title: r,
                        titleTextWrap: s,
                        dataName: l,
                        onClickOutside: c,
                        additionalElementPos: g,
                        additionalHeaderElement: v,
                        backdrop: f,
                        shouldForceFocus: S = !0,
                        showSeparator: E,
                        subtitle: D,
                        draggable: x = !0,
                        fullScreen: T = !1,
                        showCloseIcon: M = !0,
                        rounded: B = !0,
                        isAnimationEnabled: O,
                        growPoint: A,
                        dialogTooltip: N,
                        unsetHeaderAlign: R,
                        onDragStart: P,
                        dataDialogName: k,
                        closeAriaLabel: F,
                        containerAriaLabel: W,
                        reference: L,
                        containerTabIndex: H,
                        closeButtonReference: I,
                        onCloseButtonKeyDown: z
                    } = this.props, q = "after" !== g ? v : void 0, U = "after" === g ? v : void 0, G = "string" == typeof r ? r : k || "", V = (0, b.mergeRefs)([this._handleReference, L]);
                    return n.createElement(p.MatchMedia, {
                        rule: h.DialogBreakpoints.SmallHeight
                    }, (g => n.createElement(p.MatchMedia, {
                        rule: h.DialogBreakpoints.TabletSmall
                    }, (h => n.createElement(d.PopupDialog, {
                        rounded: !(h || T) && B,
                        className: a()(w.dialog, e),
                        isOpened: i,
                        reference: V,
                        onKeyDown: this._handleKeyDown,
                        onClickOutside: c,
                        onClickBackdrop: c,
                        fullscreen: h || T,
                        guard: g ? C : y,
                        boundByScreen: h || T,
                        shouldForceFocus: S,
                        backdrop: f,
                        draggable: x,
                        isAnimationEnabled: O,
                        growPoint: A,
                        name: this.props.dataName,
                        dialogTooltip: N,
                        onDragStart: P,
                        containerAriaLabel: W,
                        containerTabIndex: H
                    }, n.createElement("div", {
                        className: a()(w.wrapper, t),
                        "data-name": l,
                        "data-dialog-name": G
                    }, void 0 !== r && n.createElement(_.DialogHeader, {
                        draggable: x && !(h || T),
                        onClose: this._handleCloseBtnClick,
                        renderAfter: U,
                        renderBefore: q,
                        subtitle: D,
                        title: r,
                        titleTextWrap: s,
                        showCloseIcon: M,
                        className: o,
                        unsetAlign: R,
                        closeAriaLabel: F,
                        closeButtonReference: I,
                        onCloseButtonKeyDown: z
                    }), E && n.createElement(u.Separator, {
                        className: w.separator
                    }), n.createElement(m.PopupContext.Consumer, null, (e => this._renderChildren(e, h || T)))))))))
                }
            }
        },
        909591: (e, t, o) => {
            "use strict";
            o.d(t, {
                DialogHeaderContext: () => n
            });
            const n = o(50959).createContext({
                setHideClose: () => {}
            })
        },
        772626: (e, t, o) => {
            "use strict";
            o.d(t, {
                DialogHeader: () => d
            });
            var n = o(50959),
                i = o(497754),
                r = o.n(i),
                s = o(83436),
                a = o(909591),
                l = o(507720),
                c = o(424810);

            function d(e) {
                const {
                    title: t,
                    titleTextWrap: o = !1,
                    subtitle: i,
                    showCloseIcon: d = !0,
                    onClose: u,
                    onCloseButtonKeyDown: h,
                    renderBefore: p,
                    renderAfter: m,
                    draggable: g,
                    className: v,
                    unsetAlign: f,
                    closeAriaLabel: _,
                    closeButtonReference: b
                } = e, [w, y] = (0, n.useState)(!1);
                return n.createElement(a.DialogHeaderContext.Provider, {
                    value: {
                        setHideClose: y
                    }
                }, n.createElement("div", {
                    className: r()(c.container, v, (i || f) && c.unsetAlign)
                }, p, n.createElement("div", {
                    "data-dragg-area": g,
                    className: c.title
                }, n.createElement("div", {
                    className: r()(o ? c.textWrap : c.ellipsis)
                }, t), i && n.createElement("div", {
                    className: r()(c.ellipsis, c.subtitle)
                }, i)), m, d && !w && n.createElement("button", {
                    className: c.close,
                    onClick: u,
                    onKeyDown: h,
                    "data-name": "close",
                    "aria-label": _,
                    type: "button",
                    ref: b
                }, n.createElement(s.Icon, {
                    className: c.icon,
                    icon: l,
                    "data-name": "close",
                    "data-role": "button"
                }))))
            }
        },
        697989: (e, t, o) => {
            "use strict";
            o.d(t, {
                Dialog: () => c
            });
            var n = o(50959),
                i = o(497754),
                r = o(670797),
                s = o(829725),
                a = o(8626),
                l = o(536612);
            class c extends n.PureComponent {
                constructor() {
                    super(...arguments), this._manager = new s.OverlapManager, this._handleSlot = e => {
                        this._manager.setContainer(e)
                    }
                }
                render() {
                    const {
                        rounded: e = !0,
                        shadowed: t = !0,
                        fullscreen: o = !1,
                        darker: s = !1,
                        className: c,
                        backdrop: d,
                        containerTabIndex: u = -1
                    } = this.props, h = i(c, l.dialog, e && l.rounded, t && l.shadowed, o && l.fullscreen, s && l.darker), p = (0, a.filterDataProps)(this.props), m = this.props.style ? { ...this._createStyles(),
                        ...this.props.style
                    } : this._createStyles();
                    return n.createElement(n.Fragment, null, n.createElement(r.SlotContext.Provider, {
                        value: this._manager
                    }, d && n.createElement("div", {
                        onClick: this.props.onClickBackdrop,
                        className: l.backdrop
                    }), n.createElement("div", { ...p,
                        className: h,
                        style: m,
                        ref: this.props.reference,
                        onFocus: this.props.onFocus,
                        onMouseDown: this.props.onMouseDown,
                        onMouseUp: this.props.onMouseUp,
                        onClick: this.props.onClick,
                        onKeyDown: this.props.onKeyDown,
                        tabIndex: u,
                        "aria-label": this.props.containerAriaLabel
                    }, this.props.children)), n.createElement(r.Slot, {
                        reference: this._handleSlot
                    }))
                }
                _createStyles() {
                    const {
                        bottom: e,
                        left: t,
                        width: o,
                        right: n,
                        top: i,
                        zIndex: r,
                        height: s
                    } = this.props;
                    return {
                        bottom: e,
                        left: t,
                        right: n,
                        top: i,
                        zIndex: r,
                        maxWidth: o,
                        height: s
                    }
                }
            }
        },
        488653: (e, t, o) => {
            "use strict";
            o.d(t, {
                DragHandler: () => i
            });
            var n = o(686668);
            class i {
                constructor(e, t, o = {
                    boundByScreen: !0
                }) {
                    this._drag = null, this._canBeTouchClick = !1, this._frame = null, this._onMouseDragStart = e => {
                        if (0 !== e.button || this._isTargetNoDraggable(e)) return;
                        e.preventDefault(), document.addEventListener("mousemove", this._onMouseDragMove), document.addEventListener("mouseup", this._onMouseDragEnd);
                        const t = (0, n.clampPosition)((0,
                            n.positionFromMouseEvent)(e));
                        this._dragStart(t)
                    }, this._onTouchDragStart = e => {
                        if (this._isTargetNoDraggable(e)) return;
                        this._canBeTouchClick = !0, e.preventDefault(), this._header.addEventListener("touchmove", this._onTouchDragMove, {
                            passive: !1
                        });
                        const t = (0, n.clampPosition)((0, n.positionFromTouchEvent)(e));
                        this._dragStart(t)
                    }, this._onMouseDragEnd = e => {
                        e.target instanceof Node && this._header.contains(e.target) && e.preventDefault(), document.removeEventListener("mousemove", this._onMouseDragMove), document.removeEventListener("mouseup", this._onMouseDragEnd), this._onDragStop()
                    }, this._onTouchDragEnd = e => {
                        this._header.removeEventListener("touchmove", this._onTouchDragMove), this._onDragStop(), this._canBeTouchClick && (this._canBeTouchClick = !1, (0, n.simulateClick)(e.target))
                    }, this._onMouseDragMove = e => {
                        const t = (0, n.clampPosition)((0, n.positionFromMouseEvent)(e));
                        this._dragMove(t)
                    }, this._onTouchDragMove = e => {
                        this._canBeTouchClick = !1, e.preventDefault();
                        const t = (0, n.clampPosition)((0, n.positionFromTouchEvent)(e));
                        this._dragMove(t)
                    }, this._onDragStop = () => {
                        this._drag = null, this._header.classList.remove("dragging"), this._options.onDragEnd && this._options.onDragEnd()
                    }, this._dialog = e, this._header = t, this._options = o, this._header.addEventListener("mousedown", this._onMouseDragStart), this._header.addEventListener("touchstart", this._onTouchDragStart), this._header.addEventListener("touchend", this._onTouchDragEnd)
                }
                destroy() {
                    null !== this._frame && cancelAnimationFrame(this._frame), this._header.removeEventListener("mousedown", this._onMouseDragStart), document.removeEventListener("mouseup", this._onMouseDragEnd), this._header.removeEventListener("touchstart", this._onTouchDragStart), this._header.removeEventListener("touchend", this._onTouchDragEnd), document.removeEventListener("mouseleave", this._onMouseDragEnd)
                }
                updateOptions(e) {
                    this._options = e
                }
                _dragStart(e) {
                    const t = this._dialog.getBoundingClientRect();
                    this._drag = {
                        startX: e.x,
                        startY: e.y,
                        finishX: e.x,
                        finishY: e.y,
                        dialogX: t.left,
                        dialogY: t.top
                    };
                    const o = Math.round(t.left),
                        n = Math.round(t.top);
                    this._dialog.style.transform = `translate(${o}px, ${n}px)`, this._header.classList.add("dragging"), this._options.onDragStart && this._options.onDragStart()
                }
                _dragMove(e) {
                    if (this._drag) {
                        if (this._drag.finishX = e.x, this._drag.finishY = e.y, null !== this._frame) return;
                        this._frame = requestAnimationFrame((() => {
                            if (this._drag) {
                                const t = e.x - this._drag.startX,
                                    o = e.y - this._drag.startY;
                                this._moveDialog(this._drag.dialogX + t, this._drag.dialogY + o)
                            }
                            this._frame = null
                        }))
                    }
                }
                _moveDialog(e, t) {
                    const o = this._dialog.getBoundingClientRect(),
                        {
                            boundByScreen: i
                        } = this._options,
                        r = (0, n.clampSegment)(e, o.width, i ? 0 : -1 / 0, i ? window.innerWidth : 1 / 0),
                        s = (0, n.clampSegment)(t, o.height, i ? 0 : -1 / 0, i ? window.innerHeight : 1 / 0);
                    this._dialog.style.transform = `translate(${Math.round(r)}px, ${Math.round(s)}px)`
                }
                _isTargetNoDraggable(e) {
                    return e.target instanceof Element && null !== e.target.closest("[data-disable-drag]")
                }
            }
        },
        8629: (e, t, o) => {
            "use strict";
            o.d(t, {
                PopupContext: () => n
            });
            const n = o(50959).createContext(null)
        },
        500745: (e, t, o) => {
            "use strict";
            o.d(t, {
                PopupDialog: () => w
            });
            var n = o(50959),
                i = o(497754),
                r = o(650151),
                s = o(697989),
                a = o(368337),
                l = o(157490),
                c = o(488653),
                d = o(686668);
            const u = {
                vertical: 0
            };
            class h {
                constructor(e, t) {
                    this._frame = null, this._isFullscreen = !1, this._handleResize = () => {
                        null === this._frame && (this._frame = requestAnimationFrame((() => {
                            this.recalculateBounds(), this._frame = null
                        })))
                    }, this._dialog = e, this._guard = t.guard || u, this._calculateDialogPosition = t.calculateDialogPosition, this._initialHeight = e.style.height, window.addEventListener("resize", this._handleResize)
                }
                updateOptions(e) {
                    this._guard = e.guard || u, this._calculateDialogPosition = e.calculateDialogPosition
                }
                setFullscreen(e) {
                    this._isFullscreen !== e && (this._isFullscreen = e, this.recalculateBounds())
                }
                centerAndFit() {
                    const {
                        x: e,
                        y: t
                    } = this.getDialogsTopLeftCoordinates(), o = this._calcAvailableHeight(), n = this._calcDialogHeight();
                    if (o === n)
                        if (this._calculateDialogPosition) {
                            const {
                                left: e,
                                top: t
                            } = this._calculateDialogPosition(this._dialog, document.documentElement, this._guard);
                            this._dialog.style.transform = `translate(${Math.round(e)}px, ${Math.round(t)}px)`
                        } else this._dialog.style.height = n + "px";
                    this._dialog.style.top = "0px", this._dialog.style.left = "0px", this._dialog.style.transform = `translate(${e}px, ${t}px)`
                }
                getDialogsTopLeftCoordinates() {
                    const {
                        clientHeight: e,
                        clientWidth: t
                    } = document.documentElement, o = this._calcDialogHeight(), n = t / 2 - this._dialog.clientWidth / 2, i = e / 2 - o / 2;
                    return {
                        x: Math.round(n),
                        y: Math.round(i)
                    }
                }
                recalculateBounds() {
                    const {
                        clientHeight: e,
                        clientWidth: t
                    } = document.documentElement;
                    if (this._isFullscreen) this._dialog.style.top = "0px", this._dialog.style.left = "0px", this._dialog.style.width = "100%", this._dialog.style.height = "100%", this._dialog.style.transform = "none";
                    else {
                        const {
                            vertical: o
                        } = this._guard;
                        if (this._calculateDialogPosition) {
                            const n = this._calculateDialogPosition(this._dialog, {
                                    clientWidth: t,
                                    clientHeight: e
                                }, {
                                    vertical: o
                                }),
                                {
                                    left: i,
                                    top: r
                                } = n;
                            this._dialog.style.transform = `translate(${Math.round(i)}px, ${Math.round(r)}px)`
                        } else {
                            this._dialog.style.width = "", this._dialog.style.height = "";
                            const n = this._dialog.getBoundingClientRect(),
                                i = e - 2 * o,
                                r = (0, d.clampSegment)(n.left, n.width, 0, t),
                                s = (0, d.clampSegment)(n.top, n.height, o, e);
                            this._dialog.style.top = "0px", this._dialog.style.left = "0px", this._dialog.style.transform = `translate(${Math.round(r)}px, ${Math.round(s)}px)`, this._dialog.style.height = i < n.height ? i + "px" : this._initialHeight
                        }
                    }
                }
                destroy() {
                    window.removeEventListener("resize", this._handleResize), null !== this._frame && (cancelAnimationFrame(this._frame), this._frame = null)
                }
                _calcDialogHeight() {
                    const e = this._calcAvailableHeight();
                    return e < this._dialog.clientHeight ? e : this._dialog.clientHeight
                }
                _calcAvailableHeight() {
                    return document.documentElement.clientHeight - 2 * this._guard.vertical
                }
            }
            var p = o(707533),
                m = o(8629),
                g = o(575658),
                v = o(12173),
                f = o(419283);
            const _ = f["tooltip-offset"];
            class b extends n.PureComponent {
                constructor(e) {
                    super(e), this._dialog = null, this._cleanUpFunctions = [], this._prevActiveElement = null, this._handleDialogRef = e => {
                            const {
                                reference: t
                            } = this.props;
                            this._dialog = e, "function" == typeof t && t(e)
                        }, this._handleFocus = e => {
                            this._moveToTop()
                        }, this._handleMouseDown = e => {
                            this._moveToTop()
                        },
                        this._handleTouchStart = e => {
                            this._moveToTop()
                        }, this.state = {
                            canFitTooltip: !1
                        }
                }
                render() {
                    return n.createElement(m.PopupContext.Provider, {
                        value: this
                    }, n.createElement(l.OutsideEvent, {
                        mouseDown: !0,
                        touchStart: !0,
                        handler: this.props.onClickOutside
                    }, (e => n.createElement("div", {
                        ref: e,
                        "data-outside-boundary-for": this.props.name,
                        onFocus: this._handleFocus,
                        onMouseDown: this._handleMouseDown,
                        onTouchStart: this._handleTouchStart,
                        "data-dialog-name": this.props["data-dialog-name"]
                    }, n.createElement(s.Dialog, {
                        style: this._applyAnimationCSSVariables(),
                        ...this.props,
                        reference: this._handleDialogRef,
                        className: i(f.dialog, this.props.className)
                    }, this.props.dialogTooltip && this.state.canFitTooltip && n.createElement(v.TooltipWidget, {
                        className: f.dialogTooltip
                    }, this.props.dialogTooltip), this.props.children)))))
                }
                componentDidMount() {
                    const {
                        draggable: e,
                        boundByScreen: t,
                        onDragStart: o
                    } = this.props, n = (0, r.ensureNotNull)(this._dialog);
                    if (e) {
                        const e = n.querySelector("[data-dragg-area]");
                        if (e && e instanceof HTMLElement) {
                            const i = new c.DragHandler(n, e, {
                                boundByScreen: Boolean(t),
                                onDragStart: o
                            });
                            this._cleanUpFunctions.push((() => i.destroy())), this._drag = i
                        }
                    }
                    this._prevActiveElement = document.activeElement, this.props.autofocus && !n.contains(document.activeElement) && n.focus(), (this._isFullScreen() || this.props.fixedBody) && (0, g.setFixedBodyState)(!0);
                    const {
                        guard: i,
                        calculateDialogPosition: s
                    } = this.props;
                    if (this.props.resizeHandler) this._resize = this.props.resizeHandler;
                    else {
                        const e = new h(n, {
                            guard: i,
                            calculateDialogPosition: s
                        });
                        this._cleanUpFunctions.push((() => e.destroy())), this._resize = e
                    }
                    this.props.isAnimationEnabled && this.props.growPoint && this._applyAppearanceAnimation(this.props.growPoint), this.props.centeredOnMount && this._resize.centerAndFit(), this._resize.setFullscreen(this._isFullScreen()), this.props.dialogTooltip && this._handleTooltipFit(), this.props.shouldForceFocus && n.focus()
                }
                componentDidUpdate() {
                    if (this._resize) {
                        const {
                            guard: e,
                            calculateDialogPosition: t
                        } = this.props;
                        this._resize.updateOptions({
                            guard: e,
                            calculateDialogPosition: t
                        }), this._resize.setFullscreen(this._isFullScreen())
                    }
                    this._drag && this._drag.updateOptions({
                        boundByScreen: Boolean(this.props.boundByScreen),
                        onDragStart: this.props.onDragStart
                    })
                }
                componentWillUnmount() {
                    var e;
                    if (this._prevActiveElement && document.body.contains(this._prevActiveElement) && (null === document.activeElement || document.activeElement === document.body || (null === (e = this._dialog) || void 0 === e ? void 0 : e.contains(document.activeElement)))) try {
                        this._prevActiveElement.focus({
                            preventScroll: !0
                        })
                    } catch (e) {}
                    for (const e of this._cleanUpFunctions) e();
                    (this._isFullScreen() || this.props.fixedBody) && (0, g.setFixedBodyState)(!1)
                }
                focus() {
                    this._dialog && this._dialog.focus()
                }
                centerAndFit() {
                    this._resize && this._resize.centerAndFit()
                }
                recalculateBounds() {
                    this._resize && this._resize.recalculateBounds()
                }
                _moveToTop() {
                    null !== this.context && this.context.moveToTop()
                }
                _applyAnimationCSSVariables() {
                    return {
                        "--animationTranslateStartX": null,
                        "--animationTranslateStartY": null,
                        "--animationTranslateEndX": null,
                        "--animationTranslateEndY": null
                    }
                }
                _applyAppearanceAnimation(e) {
                    if (this._resize && this._dialog) {
                        const {
                            x: t,
                            y: o
                        } = e, {
                            x: n,
                            y: i
                        } = this._resize.getDialogsTopLeftCoordinates();
                        this._dialog.style.setProperty("--animationTranslateStartX", `${t}px`), this._dialog.style.setProperty("--animationTranslateStartY", `${o}px`), this._dialog.style.setProperty("--animationTranslateEndX", `${n}px`), this._dialog.style.setProperty("--animationTranslateEndY", `${i}px`), this._dialog.classList.add(f.dialogAnimatedAppearance)
                    }
                }
                _handleTooltipFit() {
                    if (this._resize) {
                        const e = this._resize.getDialogsTopLeftCoordinates().y - parseInt(_) >= 0;
                        this.setState({
                            canFitTooltip: e
                        })
                    }
                }
                _isFullScreen() {
                    return Boolean(this.props.fullscreen)
                }
            }
            b.contextType = p.PortalContext, b.defaultProps = {
                boundByScreen: !0,
                draggable: !0,
                centeredOnMount: !0
            };
            const w = (0, a.makeOverlapable)(b)
        },
        686668: (e, t, o) => {
            "use strict";
            o.d(t, {
                clampSegment: () => i,
                clampPosition: () => r,
                simulateClick: () => s,
                positionFromMouseEvent: () => a,
                positionFromTouchEvent: () => l
            });
            var n = o(43329);

            function i(e, t, o, n) {
                return e + t > n && (e = n - t), e < o && (e = o), e
            }

            function r(e) {
                return {
                    x: (0, n.clamp)(e.x, 20, document.documentElement.clientWidth - 20),
                    y: (0, n.clamp)(e.y, 20, window.innerHeight - 20)
                }
            }

            function s(e) {
                if (e instanceof SVGElement) {
                    const t = document.createEvent("SVGEvents");
                    t.initEvent("click", !0, !0), e.dispatchEvent(t)
                }
                e instanceof HTMLElement && e.click()
            }

            function a(e) {
                return {
                    x: e.clientX,
                    y: e.clientY
                }
            }

            function l(e) {
                return {
                    x: e.touches[0].clientX,
                    y: e.touches[0].clientY
                }
            }
        },
        332585: (e, t, o) => {
            "use strict";
            o.d(t, {
                DrawerManager: () => r,
                DrawerContext: () => s
            });
            var n = o(50959),
                i = o(575658);
            class r extends n.PureComponent {
                constructor(e) {
                    super(e), this._isBodyFixed = !1, this._addDrawer = e => {
                        this.setState((t => ({
                            stack: [...t.stack, e]
                        })))
                    }, this._removeDrawer = e => {
                        this.setState((t => ({
                            stack: t.stack.filter((t => t !== e))
                        })))
                    }, this.state = {
                        stack: []
                    }
                }
                componentDidUpdate(e, t) {
                    !t.stack.length && this.state.stack.length && ((0, i.setFixedBodyState)(!0), this._isBodyFixed = !0), t.stack.length && !this.state.stack.length && this._isBodyFixed && ((0, i.setFixedBodyState)(!1), this._isBodyFixed = !1)
                }
                componentWillUnmount() {
                    this.state.stack.length && this._isBodyFixed && (0, i.setFixedBodyState)(!1)
                }
                render() {
                    return n.createElement(s.Provider, {
                        value: {
                            addDrawer: this._addDrawer,
                            removeDrawer: this._removeDrawer,
                            currentDrawer: this.state.stack.length ? this.state.stack[this.state.stack.length - 1] : null
                        }
                    }, this.props.children)
                }
            }
            const s = n.createContext(null)
        },
        762852: (e, t, o) => {
            "use strict";
            o.d(t, {
                Drawer: () => h
            });
            var n = o(50959),
                i = o(650151),
                r = o(497754),
                s = o(777491),
                a = o(707533),
                l = o(332585),
                c = o(320116),
                d = o(150881),
                u = o(945966);

            function h(e) {
                const {
                    position: t = "Bottom",
                    onClose: o,
                    children: h,
                    className: p,
                    theme: m = u
                } = e, g = (0, i.ensureNotNull)((0, n.useContext)(l.DrawerContext)), [v] = (0, n.useState)((() => (0, s.randomHash)())), f = (0, n.useRef)(null), _ = (0, n.useContext)(c.CloseDelegateContext);
                return (0, n.useLayoutEffect)((() => ((0, i.ensureNotNull)(f.current).focus({
                    preventScroll: !0
                }), _.subscribe(g, o), g.addDrawer(v), () => {
                    g.removeDrawer(v), _.unsubscribe(g, o)
                })), []), n.createElement(a.Portal, null, n.createElement("div", {
                    className: r(u.wrap, u[`position${t}`])
                }, v === g.currentDrawer && n.createElement("div", {
                    className: u.backdrop,
                    onClick: o
                }), n.createElement(d.TouchScrollContainer, {
                    className: r(u.drawer, m.drawer, u[`position${t}`], p),
                    tabIndex: -1,
                    ref: f,
                    "data-name": e["data-name"]
                }, h)))
            }
        },
        852668: (e, t, o) => {
            "use strict";
            o.d(t, {
                FavoriteButton: () => u
            });
            var n = o(777754),
                i = o(50959),
                r = o(497754),
                s = o(83436),
                a = o(239146),
                l = o(648010),
                c = o(164429);
            const d = {
                add: n.t(null, void 0, o(44629)),
                remove: n.t(null, void 0, o(572482))
            };

            function u(e) {
                const {
                    className: t,
                    isFilled: o,
                    isActive: n,
                    onClick: u,
                    ...h
                } = e;
                return i.createElement(s.Icon, { ...h,
                    className: r(c.favorite, "apply-common-tooltip", o && c.checked, n && c.active, t),
                    icon: o ? a : l,
                    onClick: u,
                    title: o ? d.remove : d.add
                })
            }
        },
        951292: (e, t, o) => {
            "use strict";
            o.d(t, {
                useOutsideEvent: () => r
            });
            var n = o(50959),
                i = o(314308);

            function r(e) {
                const {
                    click: t,
                    mouseDown: o,
                    touchEnd: r,
                    touchStart: s,
                    handler: a,
                    reference: l,
                    ownerDocument: c = document
                } = e, d = (0, n.useRef)(null), u = (0, n.useRef)(new CustomEvent("timestamp").timeStamp);
                return (0, n.useLayoutEffect)((() => {
                    const e = {
                            click: t,
                            mouseDown: o,
                            touchEnd: r,
                            touchStart: s
                        },
                        n = l ? l.current : d.current;
                    return (0, i.addOutsideEventListener)(u.current, n, a, c, e)
                }), [t, o, r, s, a]), l || d
            }
        },
        18182: (e, t, o) => {
            "use strict";
            o.d(t, {
                MatchMedia: () => i
            });
            var n = o(50959);
            class i extends n.PureComponent {
                constructor(e) {
                    super(e), this._handleChange = () => {
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
        377318: (e, t, o) => {
            "use strict";
            o.d(t, {
                MenuContext: () => n
            });
            const n = o(50959).createContext(null)
        },
        175071: (e, t, o) => {
            "use strict";
            o.d(t, {
                DEFAULT_MENU_THEME: () => v,
                Menu: () => f
            });
            var n = o(50959),
                i = o(497754),
                r = o.n(i),
                s = o(650151),
                a = o(43329),
                l = o(587080),
                c = o(670797),
                d = o(224743),
                u = o(829725),
                h = o(799786),
                p = o(787684),
                m = o(377318),
                g = o(409790);
            const v = g;
            class f extends n.PureComponent {
                constructor(e) {
                    super(e), this._containerRef = null, this._scrollWrapRef = null, this._raf = null, this._scrollRaf = null, this._scrollTimeout = void 0, this._manager = new u.OverlapManager, this._hotkeys = null, this._scroll = 0, this._handleContainerRef = e => {
                        this._containerRef = e, this.props.reference && ("function" == typeof this.props.reference && this.props.reference(e), "object" == typeof this.props.reference && (this.props.reference.current = e))
                    }, this._handleScrollWrapRef = e => {
                        this._scrollWrapRef = e, "function" == typeof this.props.scrollWrapReference && this.props.scrollWrapReference(e), "object" == typeof this.props.scrollWrapReference && (this.props.scrollWrapReference.current = e)
                    }, this._handleMeasure = ({
                        callback: e,
                        forceRecalcPosition: t
                    } = {}) => {
                        var o, n, i, r, l, c, d, u, h, p, m, g;
                        if (this.state.isMeasureValid && !t) return;
                        const {
                            position: v
                        } = this.props, f = (0, s.ensureNotNull)(this._containerRef);
                        let _ = f.getBoundingClientRect();
                        const b = document.documentElement.clientHeight,
                            w = document.documentElement.clientWidth,
                            y = null !== (o = this.props.closeOnScrollOutsideOffset) && void 0 !== o ? o : 0;
                        let C = b - 0 - y;
                        const S = _.height > C;
                        if (S) {
                            (0, s.ensureNotNull)(this._scrollWrapRef).style.overflowY = "scroll", _ = f.getBoundingClientRect()
                        }
                        const {
                            width: E,
                            height: D
                        } = _, x = "function" == typeof v ? v(E, D, b) : v, T = null !== (i = null === (n = null == x ? void 0 : x.indentFromWindow) || void 0 === n ? void 0 : n.left) && void 0 !== i ? i : 0, M = w - (null !== (r = x.overrideWidth) && void 0 !== r ? r : E) - (null !== (c = null === (l = null == x ? void 0 : x.indentFromWindow) || void 0 === l ? void 0 : l.right) && void 0 !== c ? c : 0), B = (0, a.clamp)(x.x, T, Math.max(T, M)), O = (null !== (u = null === (d = null == x ? void 0 : x.indentFromWindow) || void 0 === d ? void 0 : d.top) && void 0 !== u ? u : 0) + y, A = b - (null !== (h = x.overrideHeight) && void 0 !== h ? h : D) - (null !== (m = null === (p = null == x ? void 0 : x.indentFromWindow) || void 0 === p ? void 0 : p.bottom) && void 0 !== m ? m : 0);
                        let N = (0, a.clamp)(x.y, O, Math.max(O, A));
                        if (x.forbidCorrectYCoord && N < x.y && (C -= x.y - N, N = x.y), t && void 0 !== this.props.closeOnScrollOutsideOffset && x.y <= this.props.closeOnScrollOutsideOffset) return void this._handleGlobalClose(!0);
                        const R = null !== (g = x.overrideHeight) && void 0 !== g ? g : S ? C : void 0;
                        this.setState({
                            appearingMenuHeight: t ? this.state.appearingMenuHeight : R,
                            appearingMenuWidth: t ? this.state.appearingMenuWidth : x.overrideWidth,
                            appearingPosition: {
                                x: B,
                                y: N
                            },
                            isMeasureValid: !0
                        }, (() => {
                            this._restoreScrollPosition(), e && e()
                        }))
                    }, this._restoreScrollPosition = () => {
                        const e = document.activeElement,
                            t = (0, s.ensureNotNull)(this._containerRef);
                        if (null !== e && t.contains(e)) try {
                            e.scrollIntoView()
                        } catch (e) {} else(0, s.ensureNotNull)(this._scrollWrapRef).scrollTop = this._scroll
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
                        this._scroll = (0, s.ensureNotNull)(this._scrollWrapRef).scrollTop
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
                        customCloseDelegate: e = d.globalCloseDelegate
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
                        })),
                        this.props.repositionOnScroll && window.addEventListener("scroll", this._handleScrollOutside, {
                            capture: !0
                        })
                }
                componentDidUpdate() {
                    this._handleMeasure()
                }
                componentWillUnmount() {
                    const {
                        customCloseDelegate: e = d.globalCloseDelegate
                    } = this.props;
                    e.unsubscribe(this, this._handleGlobalClose), window.removeEventListener("resize", this._resize), window.removeEventListener("scroll", this._handleScrollOutside, {
                        capture: !0
                    }), this._hotkeys && (this._hotkeys.destroy(), this._hotkeys = null), null !== this._raf && (cancelAnimationFrame(this._raf), this._raf = null), null !== this._scrollRaf && (cancelAnimationFrame(this._scrollRaf), this._scrollRaf = null), this._scrollTimeout && clearTimeout(this._scrollTimeout)
                }
                render() {
                    const {
                        id: e,
                        role: t,
                        "aria-label": o,
                        "aria-labelledby": i,
                        "aria-activedescendant": s,
                        "aria-hidden": a,
                        children: d,
                        minWidth: u,
                        theme: h = g,
                        className: v,
                        maxHeight: f,
                        onMouseOver: b,
                        onMouseOut: w,
                        onKeyDown: y,
                        onFocus: C,
                        onBlur: S
                    } = this.props, {
                        appearingMenuHeight: E,
                        appearingMenuWidth: D,
                        appearingPosition: x,
                        isMeasureValid: T
                    } = this.state;
                    return n.createElement(m.MenuContext.Provider, {
                        value: this
                    }, n.createElement(p.SubmenuHandler, null, n.createElement(c.SlotContext.Provider, {
                        value: this._manager
                    }, n.createElement("div", {
                        id: e,
                        role: t,
                        "aria-label": o,
                        "aria-labelledby": i,
                        "aria-activedescendant": s,
                        "aria-hidden": a,
                        className: r()(v, h.menuWrap, !T && h.isMeasuring),
                        style: {
                            height: E,
                            left: x && x.x,
                            minWidth: u,
                            position: "fixed",
                            top: x && x.y,
                            width: D
                        },
                        "data-name": this.props["data-name"],
                        ref: this._handleContainerRef,
                        onScrollCapture: this.props.onScroll,
                        onContextMenu: l.preventDefaultForContextMenu,
                        tabIndex: this.props.tabIndex,
                        onMouseOver: b,
                        onMouseOut: w,
                        onKeyDown: y,
                        onFocus: C,
                        onBlur: S
                    }, n.createElement("div", {
                        className: r()(h.scrollWrap, !this.props.noMomentumBasedScroll && h.momentumBased),
                        style: {
                            overflowY: void 0 !== E ? "scroll" : "auto",
                            maxHeight: f
                        },
                        onScrollCapture: this._handleScroll,
                        ref: this._handleScrollWrapRef
                    }, n.createElement(_, {
                        className: h.menuBox
                    }, d)))), n.createElement(c.Slot, {
                        reference: this._handleSlot
                    })))
                }
                update(e) {
                    e ? this._resizeForced() : this._resize()
                }
            }

            function _(e) {
                const t = (0, s.ensureNotNull)((0, n.useContext)(p.SubmenuContext)),
                    o = n.useRef(null);
                return n.createElement("div", {
                    ref: o,
                    className: e.className,
                    onMouseOver: function(e) {
                        if (!(null !== t.current && e.target instanceof Node && (n = e.target, null === (i = o.current) || void 0 === i ? void 0 : i.contains(n)))) return;
                        var n, i;
                        t.isSubmenuNode(e.target) || t.setCurrent(null)
                    },
                    "data-name": "menu-inner"
                }, e.children)
            }
            f.contextType = p.SubmenuContext
        },
        221155: (e, t, o) => {
            "use strict";
            o.d(t, {
                Separator: () => s
            });
            var n = o(50959),
                i = o(497754),
                r = o(94725);

            function s(e) {
                return n.createElement("div", {
                    className: i(r.separator, e.className)
                })
            }
        },
        157490: (e, t, o) => {
            "use strict";
            o.d(t, {
                OutsideEvent: () => i
            });
            var n = o(951292);

            function i(e) {
                const {
                    children: t,
                    ...o
                } = e;
                return t((0, n.useOutsideEvent)(o))
            }
        },
        829725: (e, t, o) => {
            "use strict";
            o.d(t, {
                OverlapManager: () => r,
                getRootOverlapManager: () => a
            });
            var n = o(650151);
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
            class r {
                constructor(e = document) {
                    this._storage = new i, this._windows = new Map, this._index = 0, this._document = e, this._container = e.createDocumentFragment()
                }
                setContainer(e) {
                    const t = this._container,
                        o = null === e ? this._document.createDocumentFragment() : e;
                    ! function(e, t) {
                        Array.from(e.childNodes).forEach((e => {
                            e.nodeType === Node.ELEMENT_NODE && t.appendChild(e)
                        }))
                    }(t, o), this._container = o
                }
                registerWindow(e) {
                    this._storage.has(e) || this._storage.add(e)
                }
                ensureWindow(e, t = {
                    position: "fixed",
                    direction: "normal"
                }) {
                    const o = this._windows.get(e);
                    if (void 0 !== o) return o;
                    this.registerWindow(e);
                    const n = this._document.createElement("div");
                    if (n.style.position = t.position, n.style.zIndex = this._index.toString(), n.dataset.id = e, void 0 !== t.index) {
                        const e = this._container.childNodes.length;
                        if (t.index >= e) this._container.appendChild(n);
                        else if (t.index <= 0) this._container.insertBefore(n, this._container.firstChild);
                        else {
                            const e = this._container.childNodes[t.index];
                            this._container.insertBefore(n, e)
                        }
                    } else "reverse" === t.direction ? this._container.insertBefore(n, this._container.firstChild) : this._container.appendChild(n);
                    return this._windows.set(e, n), ++this._index, n
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
            const s = new WeakMap;

            function a(e = document) {
                const t = e.getElementById("overlap-manager-root");
                if (null !== t) return (0, n.ensureDefined)(s.get(t)); {
                    const t = new r(e),
                        o = function(e) {
                            const t = e.createElement("div");
                            return t.style.position = "absolute", t.style.zIndex = 150..toString(), t.style.top = "0px", t.style.left = "0px", t.id = "overlap-manager-root", t
                        }(e);
                    return s.set(o, t), t.setContainer(o), e.body.appendChild(o), t
                }
            }
        },
        368337: (e, t, o) => {
            "use strict";
            o.d(t, {
                makeOverlapable: () => r
            });
            var n = o(50959),
                i = o(707533);

            function r(e) {
                return class extends n.PureComponent {
                    render() {
                        const {
                            isOpened: t,
                            root: o
                        } = this.props;
                        if (!t) return null;
                        const r = n.createElement(e, { ...this.props,
                            zIndex: 150
                        });
                        return "parent" === o ? r : n.createElement(i.Portal, null, r)
                    }
                }
            }
        },
        634993: (e, t, o) => {
            "use strict";
            o.d(t, {
                DEFAULT_POPUP_MENU_ITEM_THEME: () => c,
                PopupMenuItem: () => u
            });
            var n = o(50959),
                i = o(497754),
                r = o(224743),
                s = o(345848),
                a = o(8626),
                l = o(655498);
            const c = l;

            function d(e) {
                e.stopPropagation()
            }

            function u(e) {
                const {
                    id: t,
                    role: o,
                    "aria-label": c,
                    "aria-selected": u,
                    "aria-checked": h,
                    className: p,
                    title: m,
                    labelRowClassName: g,
                    labelClassName: v,
                    shortcut: f,
                    forceShowShortcuts: _,
                    icon: b,
                    isActive: w,
                    isDisabled: y,
                    isHovered: C,
                    appearAsDisabled: S,
                    label: E,
                    link: D,
                    showToolboxOnHover: x,
                    target: T,
                    rel: M,
                    toolbox: B,
                    reference: O,
                    onMouseOut: A,
                    onMouseOver: N,
                    onKeyDown: R,
                    suppressToolboxClick: P = !0,
                    theme: k = l,
                    tabIndex: F,
                    tagName: W,
                    renderComponent: L
                } = e, H = (0, a.filterDataProps)(e), I = (0, n.useRef)(null), z = (0, n.useMemo)((() => function(e) {
                    function t(t) {
                        const {
                            reference: o,
                            ...i
                        } = t, r = null != e ? e : i.href ? "a" : "div", s = "a" === r ? i : function(e) {
                            const {
                                download: t,
                                href: o,
                                hrefLang: n,
                                media: i,
                                ping: r,
                                rel: s,
                                target: a,
                                type: l,
                                referrerPolicy: c,
                                ...d
                            } = e;
                            return d
                        }(i);
                        return n.createElement(r, { ...s,
                            ref: o
                        })
                    }
                    return t.displayName = `DefaultComponent(${e})`, t
                }(W)), [W]), q = null != L ? L : z;
                return n.createElement(q, { ...H,
                    id: t,
                    role: o,
                    "aria-label": c,
                    "aria-selected": u,
                    "aria-checked": h,
                    className: i(p, k.item, b && k.withIcon, {
                        [k.isActive]: w,
                        [k.isDisabled]: y || S,
                        [k.hovered]: C
                    }),
                    title: m,
                    href: D,
                    target: T,
                    rel: M,
                    reference: function(e) {
                        I.current = e, "function" == typeof O && O(e);
                        "object" == typeof O && (O.current = e)
                    },
                    onClick: function(t) {
                        const {
                            dontClosePopup: o,
                            onClick: n,
                            onClickArg: i,
                            trackEventObject: a
                        } = e;
                        if (y) return;
                        a && (0, s.trackEvent)(a.category, a.event, a.label);
                        n && n(i, t);
                        o || (0, r.globalCloseMenu)()
                    },
                    onContextMenu: function(t) {
                        const {
                            trackEventObject: o,
                            trackRightClick: n
                        } = e;
                        o && n && (0, s.trackEvent)(o.category, o.event, `${o.label}_rightClick`)
                    },
                    onMouseUp: function(t) {
                        const {
                            trackEventObject: o,
                            trackMouseWheelClick: n
                        } = e;
                        if (1 === t.button && D && o) {
                            let e = o.label;
                            n && (e += "_mouseWheelClick"), (0, s.trackEvent)(o.category, o.event, e)
                        }
                    },
                    onMouseOver: N,
                    onMouseOut: A,
                    onKeyDown: R,
                    tabIndex: F
                }, void 0 !== b && n.createElement("span", {
                    className: k.icon,
                    dangerouslySetInnerHTML: {
                        __html: b
                    }
                }), n.createElement("span", {
                    className: i(k.labelRow, g)
                }, n.createElement("span", {
                    className: i(k.label, v)
                }, E)), (void 0 !== f || _) && n.createElement("span", {
                    className: k.shortcut
                }, (U = f) && U.split("+").join(" + ")), void 0 !== B && n.createElement("span", {
                    onClick: P ? d : void 0,
                    className: i(k.toolbox, {
                        [k.showOnHover]: x
                    })
                }, B));
                var U
            }
        },
        320116: (e, t, o) => {
            "use strict";
            o.d(t, {
                CloseDelegateContext: () => r
            });
            var n = o(50959),
                i = o(224743);
            const r = n.createContext(i.globalCloseDelegate)
        },
        45968: (e, t, o) => {
            "use strict";
            o.d(t, {
                PopupMenu: () => d
            });
            var n = o(50959),
                i = o(500962),
                r = o(162942),
                s = o(707533),
                a = o(175071),
                l = o(320116),
                c = o(951292);

            function d(e) {
                const {
                    controller: t,
                    children: o,
                    isOpened: d,
                    closeOnClickOutside: u = !0,
                    doNotCloseOn: h,
                    onClickOutside: p,
                    onClose: m,
                    onKeyboardClose: g,
                    "data-name": v = "popup-menu-container",
                    ...f
                } = e, _ = (0, n.useContext)(l.CloseDelegateContext), b = (0, c.useOutsideEvent)({
                    handler: function(e) {
                        p && p(e);
                        if (!u) return;
                        const t = (0, r.default)(h) ? h() : h;
                        if (t && e.target instanceof Node) {
                            const o = i.findDOMNode(t);
                            if (o instanceof Node && o.contains(e.target)) return
                        }
                        m()
                    },
                    mouseDown: !0,
                    touchStart: !0
                });
                return d ? n.createElement(s.Portal, {
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    pointerEvents: "none"
                }, n.createElement("span", {
                    ref: b,
                    style: {
                        pointerEvents: "auto"
                    }
                }, n.createElement(a.Menu, { ...f,
                    onClose: m,
                    onKeyboardClose: g,
                    onScroll: function(t) {
                        const {
                            onScroll: o
                        } = e;
                        o && o(t)
                    },
                    customCloseDelegate: _,
                    ref: t,
                    "data-name": v
                }, o))) : null
            }
        },
        707533: (e, t, o) => {
            "use strict";
            o.d(t, {
                Portal: () => l,
                PortalContext: () => c
            });
            var n = o(50959),
                i = o(500962),
                r = o(777491),
                s = o(829725),
                a = o(670797);
            class l extends n.PureComponent {
                constructor() {
                    super(...arguments), this._uuid = (0, r.guid)()
                }
                componentWillUnmount() {
                    this._manager().removeWindow(this._uuid)
                }
                render() {
                    const e = this._manager().ensureWindow(this._uuid, this.props.layerOptions);
                    return e.style.top = this.props.top || "", e.style.bottom = this.props.bottom || "", e.style.left = this.props.left || "", e.style.right = this.props.right || "",
                        e.style.pointerEvents = this.props.pointerEvents || "", i.createPortal(n.createElement(c.Provider, {
                            value: this
                        }, this.props.children), e)
                }
                moveToTop() {
                    this._manager().moveToTop(this._uuid)
                }
                _manager() {
                    return null === this.context ? (0, s.getRootOverlapManager)() : this.context
                }
            }
            l.contextType = a.SlotContext;
            const c = n.createContext(null)
        },
        670797: (e, t, o) => {
            "use strict";
            o.d(t, {
                Slot: () => i,
                SlotContext: () => r
            });
            var n = o(50959);
            class i extends n.Component {
                shouldComponentUpdate() {
                    return !1
                }
                render() {
                    return n.createElement("div", {
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
            const r = n.createContext(null)
        },
        443549: (e, t, o) => {
            "use strict";
            o.d(t, {
                Spinner: () => s
            });
            var n = o(50959),
                i = o(497754),
                r = o(607436);
            o(286625);

            function s(e) {
                const t = i(e.className, "tv-spinner", "tv-spinner--shown", `tv-spinner--size_${r.spinnerSizeMap[e.size||r.DEFAULT_SIZE]}`);
                return n.createElement("div", {
                    className: t,
                    style: e.style,
                    role: "progressbar"
                })
            }
        },
        787684: (e, t, o) => {
            "use strict";
            o.d(t, {
                SubmenuContext: () => i,
                SubmenuHandler: () => r
            });
            var n = o(50959);
            const i = n.createContext(null);

            function r(e) {
                const [t, o] = (0, n.useState)(null), r = (0, n.useRef)(null), s = (0, n.useRef)(new Map);
                return (0, n.useEffect)((() => () => {
                    null !== r.current && clearTimeout(r.current)
                }), []), n.createElement(i.Provider, {
                    value: {
                        current: t,
                        setCurrent: function(e) {
                            null !== r.current && (clearTimeout(r.current), r.current = null);
                            null === t ? o(e) : r.current = setTimeout((() => {
                                r.current = null, o(e)
                            }), 100)
                        },
                        registerSubmenu: function(e, t) {
                            return s.current.set(e, t), () => {
                                s.current.delete(e)
                            }
                        },
                        isSubmenuNode: function(e) {
                            return Array.from(s.current.values()).some((t => t(e)))
                        }
                    }
                }, e.children)
            }
        },
        416293: (e, t, o) => {
            "use strict";
            o.d(t, {
                ToolWidgetCaret: () => l
            });
            var n = o(50959),
                i = o(497754),
                r = o(83436),
                s = o(190948),
                a = o(100578);

            function l(e) {
                const {
                    dropped: t,
                    className: o
                } = e;
                return n.createElement(r.Icon, {
                    className: i(o, s.icon, {
                        [s.dropped]: t
                    }),
                    icon: a
                })
            }
        },
        12173: (e, t, o) => {
            "use strict";
            o.d(t, {
                TooltipWizard: () => c,
                TooltipWidget: () => d
            });
            var n = o(50959),
                i = o(497754),
                r = o(83436),
                s = o(707533),
                a = o(333765),
                l = o(844662);
            class c extends n.PureComponent {
                render() {
                    const {
                        children: e,
                        popperChildrenProps: t,
                        onClose: o,
                        reference: r,
                        containerClassName: a,
                        arrowClassName: c
                    } = this.props;
                    return n.createElement(s.Portal, null, n.createElement("div", {
                        ref: r
                    }, n.createElement(d, {
                        reference: t.ref,
                        style: t.style,
                        arrowClassName: i(l.arrowHolder, this._getArrowDirectionClass(), c),
                        arrowReference: t.arrowProps.ref,
                        arrowStyle: t.arrowProps.style,
                        "data-placement": t.placement,
                        onClose: o,
                        containerClassName: a
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

            function d(e) {
                const {
                    className: t,
                    containerClassName: o,
                    contentClassName: s,
                    reference: c,
                    style: d,
                    arrow: u = !0,
                    arrowClassName: h,
                    arrowReference: p,
                    onClose: m,
                    arrowStyle: g,
                    children: v,
                    ...f
                } = e
                ;
                return n.createElement("div", { ...f,
                    className: t,
                    ref: c,
                    style: d
                }, u && n.createElement("div", {
                    className: h,
                    ref: p,
                    style: g
                }), n.createElement("div", {
                    className: i(l.container, o)
                }, n.createElement("div", {
                    className: i(l.content, s)
                }, v), m && n.createElement(r.Icon, {
                    className: l.closeButton,
                    icon: a,
                    onClick: m
                })))
            }
        },
        150881: (e, t, o) => {
            "use strict";
            o.d(t, {
                TouchScrollContainer: () => a
            });
            var n = o(50959),
                i = o(259142),
                r = o(650151),
                s = o(638456);
            const a = (0, n.forwardRef)(((e, t) => {
                const {
                    children: o,
                    ...r
                } = e, a = (0, n.useRef)(null);
                return (0, n.useImperativeHandle)(t, (() => a.current)), (0, n.useLayoutEffect)((() => {
                    if (s.CheckMobile.iOS()) return null !== a.current && (0, i.disableBodyScroll)(a.current, {
                        allowTouchMove: l(a)
                    }), () => {
                        null !== a.current && (0, i.enableBodyScroll)(a.current)
                    }
                }), []), n.createElement("div", {
                    ref: a,
                    ...r
                }, o)
            }));

            function l(e) {
                return t => {
                    const o = (0, r.ensureNotNull)(e.current),
                        n = document.activeElement;
                    return !o.contains(t) || null !== n && o.contains(n) && n.contains(t)
                }
            }
        },
        744359: (e, t, o) => {
            "use strict";
            o.d(t, {
                containTabNavigation: () => i
            });
            var n = o(470316);

            function i(e) {
                [9, n.Modifiers.Shift + 9].includes((0, n.hashFromEvent)(e)) && e.stopPropagation()
            }
        },
        977907: e => {
            e.exports = {
                title: "title-t_2RnW3_"
            }
        },
        17049: e => {
            e.exports = {
                button: "button-reABrhVR",
                hover: "hover-reABrhVR",
                arrow: "arrow-reABrhVR",
                arrowWrap: "arrowWrap-reABrhVR",
                isOpened: "isOpened-reABrhVR"
            }
        },
        898930: (e, t, o) => {
            "use strict";
            o.d(t, {
                VerticalAttachEdge: () => n,
                HorizontalAttachEdge: () => i,
                VerticalDropDirection: () => r,
                HorizontalDropDirection: () => s,
                getPopupPositioner: () => c
            });
            var n, i, r, s, a = o(650151);
            ! function(e) {
                e[e.Top = 0] = "Top", e[e.Bottom = 1] = "Bottom"
            }(n || (n = {})),
            function(e) {
                e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
            }(i || (i = {})),
            function(e) {
                e[e.FromTopToBottom = 0] = "FromTopToBottom", e[e.FromBottomToTop = 1] = "FromBottomToTop"
            }(r || (r = {})),
            function(e) {
                e[e.FromLeftToRight = 0] = "FromLeftToRight", e[e.FromRightToLeft = 1] = "FromRightToLeft"
            }(s || (s = {}));
            const l = {
                verticalAttachEdge: n.Bottom,
                horizontalAttachEdge: i.Left,
                verticalDropDirection: r.FromTopToBottom,
                horizontalDropDirection: s.FromLeftToRight,
                verticalMargin: 0,
                horizontalMargin: 0,
                matchButtonAndListboxWidths: !1
            };

            function c(e, t) {
                return (o, c) => {
                    const d = (0, a.ensureNotNull)(e).getBoundingClientRect(),
                        {
                            verticalAttachEdge: u = l.verticalAttachEdge,
                            verticalDropDirection: h = l.verticalDropDirection,
                            horizontalAttachEdge: p = l.horizontalAttachEdge,
                            horizontalDropDirection: m = l.horizontalDropDirection,
                            horizontalMargin: g = l.horizontalMargin,
                            verticalMargin: v = l.verticalMargin,
                            matchButtonAndListboxWidths: f = l.matchButtonAndListboxWidths
                        } = t,
                        _ = u === n.Top ? -1 * v : v,
                        b = p === i.Right ? d.right : d.left,
                        w = u === n.Top ? d.top : d.bottom,
                        y = {
                            x: b - (m === s.FromRightToLeft ? o : 0) + g,
                            y: w - (h === r.FromBottomToTop ? c : 0) + _
                        };
                    return f && (y.overrideWidth = d.width), y
                }
            }
        },
        928089: (e, t, o) => {
            "use strict";
            o.d(t, {
                ToolWidgetMenuSummary: () => s
            });
            var n = o(50959),
                i = o(497754),
                r = o(977907);

            function s(e) {
                return n.createElement("div", {
                    className: i(e.className, r.title)
                }, e.children)
            }
        },
        575296: (e, t, o) => {
            "use strict";
            o.d(t, {
                DEFAULT_TOOL_WIDGET_MENU_THEME: () => m,
                ToolWidgetMenu: () => g
            });
            var n = o(50959),
                i = o(497754),
                r = o(591800),
                s = o(45968),
                a = o(416293),
                l = o(8626),
                c = o(332585),
                d = o(762852),
                u = o(898930),
                h = o(18182),
                p = o(17049);
            const m = p;
            class g extends n.PureComponent {
                constructor(e) {
                    super(e), this._wrapperRef = null, this._controller = n.createRef(), this._handleWrapperRef = e => {
                        this._wrapperRef = e, this.props.reference && this.props.reference(e)
                    }, this._handleClick = e => {
                        e.target instanceof Node && e.currentTarget.contains(e.target) && (this._handleToggleDropdown(), this.props.onClick && this.props.onClick(e, !this.state.isOpened))
                    }, this._handleToggleDropdown = e => {
                        const {
                            onClose: t,
                            onOpen: o
                        } = this.props, {
                            isOpened: n
                        } = this.state, i = "boolean" == typeof e ? e : !n;
                        this.setState({
                            isOpened: i
                        }), i && o && o(), !i && t && t()
                    }, this._handleClose = () => {
                        this.close()
                    }, this._handleKeyDown = e => {
                        27 === (0, r.hashFromEvent)(e) && this.state.isOpened && this.props.closeOnEsc && (e.preventDefault(), e.stopPropagation(), this._handleToggleDropdown())
                    }, this.state = {
                        isOpened: !1
                    }
                }
                render() {
                    const {
                        id: e,
                        arrow: t,
                        content: o,
                        isDisabled: r,
                        isDrawer: s,
                        isShowTooltip: c,
                        title: d,
                        className: u,
                        hotKey: p,
                        theme: m,
                        drawerBreakpoint: g,
                        tabIndex: v
                    } = this.props, {
                        isOpened: f
                    } = this.state, _ = i(u, m.button, {
                        "apply-common-tooltip": c || !r,
                        [m.isDisabled]: r,
                        [m.isOpened]: f
                    });
                    return n.createElement("div", {
                        id: e,
                        className: _,
                        onClick: r ? void 0 : this._handleClick,
                        title: d,
                        "data-tooltip-hotkey": p,
                        ref: this._handleWrapperRef,
                        "data-role": "button",
                        tabIndex: v,
                        onKeyDown: this._handleKeyDown,
                        ...(0, l.filterDataProps)(this.props)
                    }, o, t && n.createElement("div", {
                        className: m.arrow
                    }, n.createElement("div", {
                        className: m.arrowWrap
                    }, n.createElement(a.ToolWidgetCaret, {
                        dropped: f
                    }))), this.state.isOpened && (g ? n.createElement(h.MatchMedia, {
                        rule: g
                    }, (e => this._renderContent(e))) : this._renderContent(s)))
                }
                close() {
                    this._handleToggleDropdown(!1)
                }
                update() {
                    null !== this._controller.current && this._controller.current.update()
                }
                _renderContent(e) {
                    const {
                        menuDataName: t,
                        minWidth: o,
                        menuClassName: i,
                        maxHeight: r,
                        drawerPosition: a = "Bottom",
                        children: l
                    } = this.props, {
                        isOpened: h
                    } = this.state, p = {
                        horizontalMargin: this.props.horizontalMargin || 0,
                        verticalMargin: this.props.verticalMargin || 2,
                        verticalAttachEdge: this.props.verticalAttachEdge,
                        horizontalAttachEdge: this.props.horizontalAttachEdge,
                        verticalDropDirection: this.props.verticalDropDirection,
                        horizontalDropDirection: this.props.horizontalDropDirection,
                        matchButtonAndListboxWidths: this.props.matchButtonAndListboxWidths
                    }, m = Boolean(h && e && a), g = function(e) {
                        return "function" == typeof e
                    }(l) ? l({
                        isDrawer: m
                    }) : l;
                    return m ? n.createElement(c.DrawerManager, null, n.createElement(d.Drawer, {
                        onClose: this._handleClose,
                        position: a,
                        "data-name": t
                    }, g)) : n.createElement(s.PopupMenu, {
                        controller: this._controller,
                        closeOnClickOutside: this.props.closeOnClickOutside,
                        doNotCloseOn: this,
                        isOpened: h,
                        minWidth: o,
                        onClose: this._handleClose,
                        position: (0, u.getPopupPositioner)(this._wrapperRef, p),
                        className: i,
                        maxHeight: r,
                        "data-name": t
                    }, g)
                }
            }
            g.defaultProps = {
                arrow: !0,
                closeOnClickOutside: !0,
                theme: p
            }
        },
        219423: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                FavoriteScriptsModel: () => h
            });
            var n = o(62802),
                i = o(226722),
                r = o(619276),
                s = o(971417);
            const a = JSON.parse('{"ACCD@tv-basicstudies":"STD;Accumulation_Distribution","studyADR@tv-basicstudies":"STD;Advance_Decline_Ratio_Bars","AROON@tv-basicstudies":"STD;Aroon","ATR@tv-basicstudies":"STD;Average_True_Range","AwesomeOscillator@tv-basicstudies":"STD;Awesome_Oscillator","BB@tv-basicstudies":"STD;Bollinger_Bands","BollingerBandsR@tv-basicstudies":"STD;Bollinger_Bands_B","BollingerBandsWidth@tv-basicstudies":"STD;Bollinger_Bands_Width","CMF@tv-basicstudies":"STD;Chaikin_Money_Flow","ChaikinOscillator@tv-basicstudies":"STD;Chaikin_Oscillator","ChoppinessIndex@tv-basicstudies":"STD;Choppiness_Index","DoubleEMA@tv-basicstudies":"STD;DEMA","WilliamR@tv-basicstudies":"STD;Willams_R","CCI@tv-basicstudies":"STD;CCI","CRSI@tv-basicstudies":"STD;Connors_RSI","DetrendedPriceOscillator@tv-basicstudies":"STD;DPO","DM@tv-basicstudies":"STD;DMI","DONCH@tv-basicstudies":"STD;Donchian_Channels","EaseOfMovement@tv-basicstudies":"STD;EOM","EFI@tv-basicstudies":"STD;EFI","ENV@tv-basicstudies":"STD;ENV","FisherTransform@tv-basicstudies":"STD;Fisher_Transform","HV@tv-basicstudies":"STD;Historical_Volatility","KLTNR@tv-basicstudies":"STD;Keltner_Channels","MOM@tv-basicstudies":"STD;Momentum","MF@tv-basicstudies":"STD;Money_Flow","UltimateOsc@tv-basicstudies":"STD;Ultimate_Oscillator","Trix@tv-basicstudies":"STD;TRIX","Stochastic@tv-basicstudies":"STD;Stochastic","StochasticRSI@tv-basicstudies":"STD;Stochastic_RSI","RSI@tv-basicstudies":"STD;RSI","ROC@tv-basicstudies":"STD;ROC","PriceOsc@tv-basicstudies":"STD;Price_Oscillator","MASimple@tv-basicstudies":"STD;SMA","OBV@tv-basicstudies":"STD;On_Balance_Volume","PSAR@tv-basicstudies":"STD;PSAR","VigorIndex@tv-basicstudies":"STD;Relative_Vigor_Index","VolatilityIndex@tv-basicstudies":"STD;Relative_Volatility_Index","SMIErgodicIndicator@tv-basicstudies":"STD;SMI_Ergodic_Indicator_Oscillator","SMIErgodicOscillator@tv-basicstudies":"STD;SMI_Ergodic_Oscillator","MACD@tv-basicstudies":"STD;MACD","MAWeighted@tv-basicstudies":"STD;WMA","MAExp@tv-basicstudies":"STD;EMA","hullMA@tv-basicstudies":"STD;Hull%1MA","chandeMO@tv-basicstudies":"STD;Chande_Momentum_Oscillator","TripleEMA@tv-basicstudies":"STD;TEMA","MAVolumeWeighted@tv-basicstudies":"STD;VWMA","WilliamsAlligator@tv-basicstudies":"STD;Williams_Alligator","WilliamsFractal@tv-basicstudies":"STD;Whilliams_Fractals"}');
            var l = o(869403),
                c = o.n(l);
            const d = a;
            let u = null;
            class h {
                constructor(e = n) {
                    this._favorites = [], this._favoritesChanged = new(c()), this._settings = e, i.TVXWindowEvents.on("StudyFavoritesChanged", (e => {
                        const t = JSON.parse(e);
                        this._loadFromState(t.favorites || [])
                    })), this._settings.onSync.subscribe(this, this._loadFavs), this._loadFavs()
                }
                isFav(e) {
                    const t = this.favId(e);
                    return -1 !== this._findFavIndex(t)
                }
                toggleFavorite(e) {
                    this.isFav(e) ? this.removeFavorite(e) : this.addFavorite(e)
                }
                addFavorite(e) {
                    const t = this.favId(e);
                    this._favorites.push(m(t)), this._favoritesChanged.fire(), this._saveFavs()
                }
                removeFavorite(e) {
                    const t = this.favId(e),
                        o = this._findFavIndex(t); - 1 !== o && (this._favorites.splice(o, 1), this._favoritesChanged.fire()), this._saveFavs()
                }
                favId(e) {
                    return (0, s.isPineIdString)(e) ? e : (0, s.extractPineId)(e) || (0, r.extractStudyId)(e)
                }
                favorites() {
                    return this._favorites
                }
                favoritePineIds() {
                    return this._favorites.filter((e => "pine" === e.type)).map((e => e.pineId))
                }
                favoritesChanged() {
                    return this._favoritesChanged
                }
                static getInstance() {
                    return null === u && (u = new h), u
                }
                static create(e) {
                    return new h(e)
                }
                _loadFavs() {
                    const e = this._settings.getJSON("studyMarket.favorites", []);
                    this._loadFromState(e)
                }
                _saveFavs() {
                    const e = this._stateToSave();
                    this._settings.setJSON("studyMarket.favorites", e, {
                        forceFlush: !0
                    }), i.TVXWindowEvents.emit("StudyFavoritesChanged", JSON.stringify({
                        favorites: e
                    }))
                }
                _stateToSave() {
                    return this._favorites.map(p)
                }
                _loadFromState(e) {
                    this._favorites = e.map((e => m(function(e) {
                        return e in d ? d[e] : e
                    }(e)))), this._favoritesChanged.fire()
                }
                _findFavIndex(e) {
                    return this._favorites.findIndex((t => e === p(t)))
                }
            }

            function p(e) {
                return "java" === e.type ? e.studyId : e.pineId
            }

            function m(e) {
                return (0, s.isPineIdString)(e) ? {
                    type: "pine",
                    pineId: e
                } : {
                    type: "java",
                    studyId: e
                }
            }
        },
        424720: (e, t, o) => {
            "use strict";
            o.d(t, {
                mediaQueryAddEventListener: () => n,
                mediaQueryRemoveEventListener: () => i
            });
            const n = (e, t) => {
                    (null == e ? void 0 : e.addEventListener) ? e.addEventListener("change", t): e.addListener(t)
                },
                i = (e, t) => {
                    (null == e ? void 0 : e.removeEventListener) ? e.removeEventListener("change", t): e.removeListener(t)
                }
        },
        530162: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM9 4c-.79 0-1.38.7-1.25 1.48l.67 4.03a.59.59 0 0 0 1.16 0l.67-4.03A1.27 1.27 0 0 0 9 4Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/></svg>'
        },
        315130: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 15 15m0-15-15 15"/></svg>'
        },
        100578: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>'
        },
        333765: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>'
        },
        507720: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="currentColor"><path d="m.58 1.42.82-.82 15 15-.82.82z"/><path d="m.58 15.58 15-15 .82.82-15 15z"/></svg>'
        },
        239146: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>'
        },
        648010: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>'
        }
    }
]);
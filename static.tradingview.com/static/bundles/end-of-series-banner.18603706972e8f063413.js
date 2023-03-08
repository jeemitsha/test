(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [66849, 91859], {
        259142: function(e, t) {
            var n, r, a;
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
                var a = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
                    i = [],
                    o = !1,
                    s = -1,
                    l = void 0,
                    u = void 0,
                    c = function(e) {
                        return i.some((function(t) {
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
                    if (a) {
                        if (!e) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
                        if (e && !i.some((function(t) {
                                return t.targetElement === e
                            }))) {
                            var h = {
                                targetElement: e,
                                options: r || {}
                            };
                            i = [].concat(t(i), [h]), e.ontouchstart = function(e) {
                                1 === e.targetTouches.length && (s = e.targetTouches[0].clientY)
                            }, e.ontouchmove = function(t) {
                                var n, r, a, i;
                                1 === t.targetTouches.length && (r = e, i = (n = t).targetTouches[0].clientY - s, !c(n.target) && (r && 0 === r.scrollTop && 0 < i || (a = r) && a.scrollHeight - a.scrollTop <= a.clientHeight && i < 0 ? d(n) : n.stopPropagation()))
                            }, o || (document.addEventListener("touchmove", d, n ? {
                                passive: !1
                            } : void 0), o = !0)
                        }
                    } else {
                        p = r, setTimeout((function() {
                            if (void 0 === u) {
                                var e = !!p && !0 === p.reserveScrollBarGap,
                                    t = window.innerWidth - document.documentElement.clientWidth;
                                e && 0 < t && (u = document.body.style.paddingRight, document.body.style.paddingRight = t + "px")
                            }
                            void 0 === l && (l = document.body.style.overflow, document.body.style.overflow = "hidden")
                        }));
                        var m = {
                            targetElement: e,
                            options: r || {}
                        };
                        i = [].concat(t(i), [m])
                    }
                    var p
                }, e.clearAllBodyScrollLocks = function() {
                    a ? (i.forEach((function(e) {
                        e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null
                    })), o && (document.removeEventListener("touchmove", d, n ? {
                        passive: !1
                    } : void 0), o = !1), i = [], s = -1) : (h(), i = [])
                }, e.enableBodyScroll = function(e) {
                    if (a) {
                        if (!e) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                        e.ontouchstart = null, e.ontouchmove = null, i = i.filter((function(t) {
                            return t.targetElement !== e
                        })), o && 0 === i.length && (document.removeEventListener("touchmove", d, n ? {
                            passive: !1
                        } : void 0), o = !1)
                    } else 1 === i.length && i[0].targetElement === e ? (h(), i = []) : i = i.filter((function(t) {
                        return t.targetElement !== e
                    }))
                }
            }, void 0 === (a = "function" == typeof n ? n.apply(t, r) : n) || (e.exports = a)
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
        645469: e => {
            e.exports = {
                "tablet-normal-breakpoint": "screen and (max-width: 768px)",
                "small-height-breakpoint": "screen and (max-height: 360px)",
                "tablet-small-breakpoint": "screen and (max-width: 430px)"
            }
        },
        856433: e => {
            e.exports = {
                actionButton: "actionButton-NwOkSfvs",
                small: "small-NwOkSfvs",
                hiddenTitle: "hiddenTitle-NwOkSfvs"
            }
        },
        806730: e => {
            e.exports = {
                popupDialog: "popupDialog-MQCwyEL_",
                wrap: "wrap-MQCwyEL_",
                main: "main-MQCwyEL_",
                small: "small-MQCwyEL_",
                title: "title-MQCwyEL_",
                content: "content-MQCwyEL_",
                html: "html-MQCwyEL_",
                footer: "footer-MQCwyEL_",
                close: "close-MQCwyEL_",
                marginWithoutCloseButton: "marginWithoutCloseButton-MQCwyEL_"
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
        540975: (e, t, n) => {
            "use strict";
            n.d(t, {
                AnchorButton: () => d,
                Button: () => u
            });
            var r = n(50959),
                a = n(915812);

            function i(e = "default") {
                switch (e) {
                    case "default":
                        return "primary";
                    case "stroke":
                        return "secondary"
                }
            }

            function o(e = "primary") {
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

            function s(e = "m") {
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
                    size: n,
                    appearance: r,
                    useFullWidth: a,
                    icon: l,
                    ...u
                } = e;
                return { ...u,
                    color: o(t),
                    size: s(n),
                    variant: i(r),
                    stretch: a,
                    startIcon: l
                }
            }

            function u(e) {
                return r.createElement(a.SquareButton, { ...l(e)
                })
            }

            function c(e) {
                const {
                    intent: t,
                    size: n,
                    appearance: r,
                    useFullWidth: a,
                    icon: l,
                    ...u
                } = e;
                return { ...u,
                    color: o(t),
                    size: s(n),
                    variant: i(r),
                    stretch: a,
                    startIcon: l
                }
            }

            function d(e) {
                return r.createElement(a.SquareAnchorButton, { ...c(e)
                })
            }
        },
        915812: (e, t, n) => {
            "use strict";
            n.d(t, {
                SquareButton: () => r.SquareButton,
                SquareAnchorButton: () => a.SquareAnchorButton
            });
            n(221191);
            var r = n(422175),
                a = n(951144)
        },
        951144: (e, t, n) => {
            "use strict";
            n.d(t, {
                SquareAnchorButton: () => l
            });
            var r = n(50959),
                a = n(301792),
                i = n(8626),
                o = n(221191);

            function s(e) {
                const {
                    className: t,
                    color: n,
                    variant: r,
                    size: a,
                    stretch: o,
                    animated: s,
                    icon: l,
                    iconOnly: u,
                    startIcon: c,
                    endIcon: d,
                    ...h
                } = e;
                return { ...h,
                    ...(0, i.filterDataProps)(e),
                    ...(0, i.filterAriaProps)(e)
                }
            }

            function l(e) {
                const {
                    reference: t
                } = e, {
                    isGrouped: n,
                    cellState: i,
                    disablePositionAdjustment: l
                } = (0, r.useContext)(a.ControlGroupContext), u = (0, o.getSquareButtonClasses)({ ...e,
                    isGrouped: n,
                    cellState: i,
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
                a = n(497754),
                i = n(307754),
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
                    isGrouped: m,
                    cellState: p,
                    disablePositionAdjustment: v = !1,
                    isAnchor: f = !1
                } = e, g = function(e) {
                    let t = "";
                    return 0 !== e && (1 & e && (t = a(t, l()["no-corner-top-left"])), 2 & e && (t = a(t, l()["no-corner-top-right"])), 4 & e && (t = a(t, l()["no-corner-bottom-right"])), 8 & e && (t = a(t, l()["no-corner-bottom-left"]))), t
                }((0, i.getGroupCellRemoveRoundBorders)(p));
                return a(h, l().button, l()[`size-${n}`], l()[`color-${t}`], l()[`variant-${r}`], o && l().stretch, (s || u) && l()["with-start-icon"], c && l()["with-end-icon"], d && l()["icon-only"], g, m && l().grouped, m && !v && l()["adjust-position"], m && p.isTop && l()["first-row"], m && p.isLeft && l()["first-col"], f && l().link)
            }

            function c(e) {
                const {
                    startIcon: t,
                    icon: n,
                    iconOnly: a,
                    children: i,
                    endIcon: s
                } = e, u = null != t ? t : n;
                return r.createElement(r.Fragment, null, u && r.createElement(o.Icon, {
                    icon: u,
                    className: l()["start-icon-wrap"]
                }), i && r.createElement("span", {
                    className: l().content
                }, i), s && !a && r.createElement(o.Icon, {
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
                a = n(301792),
                i = n(8626),
                o = n(221191);

            function s(e) {
                const {
                    className: t,
                    color: n,
                    variant: r,
                    size: a,
                    stretch: o,
                    animated: s,
                    icon: l,
                    iconOnly: u,
                    startIcon: c,
                    endIcon: d,
                    ...h
                } = e;
                return { ...h,
                    ...(0, i.filterDataProps)(e),
                    ...(0, i.filterAriaProps)(e)
                }
            }

            function l(e) {
                const {
                    reference: t,
                    ...n
                } = e, {
                    isGrouped: i,
                    cellState: l,
                    disablePositionAdjustment: u
                } = (0, r.useContext)(a.ControlGroupContext), c = (0, o.getSquareButtonClasses)({ ...n,
                    isGrouped: i,
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
        640027: (e, t, n) => {
            "use strict";
            n.d(t, {
                useIsMounted: () => a
            });
            var r = n(50959);
            const a = () => {
                const e = (0, r.useRef)(!1);
                return (0, r.useEffect)((() => (e.current = !0, () => {
                    e.current = !1
                })), []), e
            }
        },
        612247: (e, t, n) => {
            "use strict";
            n.d(t, {
                Loader: () => u
            });
            var r, a = n(50959),
                i = n(497754),
                o = n(745269),
                s = n(733319),
                l = n.n(s);
            ! function(e) {
                e[e.Initial = 0] = "Initial", e[e.Appear = 1] = "Appear", e[e.Active = 2] = "Active"
            }(r || (r = {}));
            class u extends a.PureComponent {
                constructor(e) {
                    super(e), this._stateChangeTimeout = null, this.state = {
                        state: r.Initial
                    }
                }
                render() {
                    const {
                        className: e,
                        color: t = "black",
                        size: n = "medium",
                        staticPosition: r
                    } = this.props, o = i(l().item, l()[t], l()[n]);
                    return a.createElement("span", {
                        className: i(l().loader, r && l().static, this._getStateClass(), e)
                    }, a.createElement("span", {
                        className: o
                    }), a.createElement("span", {
                        className: o
                    }), a.createElement("span", {
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
                return i(e, o)
            }

            function a(e) {
                return i(e, s)
            }

            function i(e, t) {
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
                filterAriaProps: () => a,
                filterProps: () => i,
                isDataAttribute: () => o,
                isAriaAttribute: () => s
            })
        },
        531327: (e, t, n) => {
            "use strict";

            function r(e) {
                return a() ? 0 : i() ? 46 : Math.min(Math.max(e, 46), 450)
            }
            n.d(t, {
                getWidgetBarPadding: () => r,
                isWidgetBarFullscreen: () => a
            });
            const a = () => !window.matchMedia("screen and (min-width: 768px)").matches,
                i = () => !window.matchMedia("screen and (min-width: 1280px)").matches
        },
        314308: (e, t, n) => {
            "use strict";

            function r(e, t, n, r, a) {
                function i(a) {
                    if (e > a.timeStamp) return;
                    const i = a.target;
                    void 0 !== n && null !== t && null !== i && i.ownerDocument === r && (t.contains(i) || n(a))
                }
                return a.click && r.addEventListener("click", i, !1), a.mouseDown && r.addEventListener("mousedown", i, !1), a.touchEnd && r.addEventListener("touchend", i, !1), a.touchStart && r.addEventListener("touchstart", i, !1), () => {
                    r.removeEventListener("click", i, !1), r.removeEventListener("mousedown", i, !1), r.removeEventListener("touchend", i, !1), r.removeEventListener("touchstart", i, !1)
                }
            }
            n.d(t, {
                addOutsideEventListener: () => r
            })
        },
        575658: (e, t, n) => {
            "use strict";
            n.d(t, {
                setFixedBodyState: () => s
            });
            var r = n(76107),
                a = n(531327);
            let i = 0,
                o = !1;

            function s(e) {
                const {
                    body: t
                } = document, n = t.querySelector(".widgetbar-wrap");
                if (e && 1 == ++i) {
                    const e = (0,
                            r.getCSSProperty)(t, "overflow"),
                        a = (0, r.getCSSPropertyNumericValue)(t, "padding-right");
                    "hidden" !== e.toLowerCase() && t.scrollHeight > t.offsetHeight && ((0, r.setStyle)(n, "right", `${(0,r.getScrollbarWidth)()}px`), t.style.paddingRight = `${a+(0,r.getScrollbarWidth)()}px`, o = !0), t.classList.add("i-no-scroll")
                } else if (!e && i > 0 && 0 == --i && (t.classList.remove("i-no-scroll"), o)) {
                    (0, r.setStyle)(n, "right", "0px");
                    let e = 0;
                    e = n ? (0, a.getWidgetBarPadding)((0, r.getContentWidth)(n)) : 0, t.scrollHeight <= t.clientHeight && (e -= (0, r.getScrollbarWidth)()), t.style.paddingRight = (e < 0 ? 0 : e) + "px", o = !1
                }
            }
        },
        642709: (e, t, n) => {
            "use strict";
            n.d(t, {
                DialogBreakpoints: () => a
            });
            var r = n(645469);
            const a = {
                SmallHeight: r["small-height-breakpoint"],
                TabletSmall: r["tablet-small-breakpoint"],
                TabletNormal: r["tablet-normal-breakpoint"]
            }
        },
        332450: (e, t, n) => {
            "use strict";
            n.d(t, {
                CLOSE_POPUPS_AND_DIALOGS_COMMAND: () => r,
                breakpointList: () => a
            });
            const r = "CLOSE_POPUPS_AND_DIALOGS_COMMAND",
                a = [1920, 1440, 1280, 1024, 768, 480, 0]
        },
        303616: (e, t, n) => {
            "use strict";
            n.d(t, {
                SimpleDialogContext: () => r
            });
            const r = n(50959).createContext({
                isSmallTablet: !1,
                dialogCloseHandler: () => {}
            })
        },
        927582: (e, t, n) => {
            "use strict";
            n.d(t, {
                SimpleDialog: () => S
            });
            var r = n(50959),
                a = n(497754),
                i = n(83436),
                o = n(251954),
                s = n(500745),
                l = n(470316),
                u = n(18182),
                c = n(332450),
                d = n(642709),
                h = n(150881),
                m = n(540975),
                p = n(612247),
                v = n(650151),
                f = n(640027),
                g = n(670797),
                _ = n(303616),
                b = n(856433);

            function w(e) {
                const {
                    disabled: t,
                    name: n,
                    title: i,
                    appearance: o,
                    intent: s,
                    handler: l,
                    reference: u
                } = e, {
                    isSmallTablet: c,
                    dialogCloseHandler: d
                } = (0, r.useContext)(_.SimpleDialogContext), h = (0, v.ensureNotNull)((0, r.useContext)(g.SlotContext)), w = (0, f.useIsMounted)(), [y, C] = (0, r.useState)(!1);
                return r.createElement(m.Button, {
                    disabled: t,
                    reference: u,
                    className: a(b.actionButton, c && b.small),
                    name: n,
                    size: c ? "l" : void 0,
                    appearance: o,
                    intent: s,
                    onClick: function() {
                        if (y) return;
                        const e = l({
                            dialogClose: d,
                            innerManager: h
                        });
                        e && (C(!0), e.then((() => {
                            w.current && C(!1)
                        })))
                    }
                }, r.createElement("span", {
                    className: a(y && b.hiddenTitle)
                }, i), y && r.createElement(p.Loader, {
                    color: "white"
                }))
            }
            var y = n(507720),
                C = n(806730);

            function S(e) {
                const {
                    title: t,
                    onClose: n,
                    actions: m,
                    dataName: p,
                    popupDialogClassName: v,
                    contentClassName: f,
                    wrapperClassName: g,
                    backdrop: b,
                    closeOnOutsideClick: S = !0,
                    showCloseButton: E = !0,
                    closeOnEscapePress: L = !0
                } = e;
                (0, r.useEffect)((() => (o.subscribe(c.CLOSE_POPUPS_AND_DIALOGS_COMMAND, n, null), () => {
                    o.unsubscribe(c.CLOSE_POPUPS_AND_DIALOGS_COMMAND, n, null)
                })), [n]);
                const [k, x] = (0, r.useState)(!0), z = (0, r.useRef)(null);
                return r.createElement(u.MatchMedia, {
                    rule: d.DialogBreakpoints.TabletSmall
                }, (o => r.createElement(_.SimpleDialogContext.Provider, {
                    value: {
                        isSmallTablet: o,
                        dialogCloseHandler: n
                    }
                }, r.createElement(s.PopupDialog, {
                    className: a(C.popupDialog, v),
                    isOpened: k,
                    backdrop: b,
                    onClickBackdrop: D,
                    onClickOutside: S ? D : void 0,
                    onKeyDown: T,
                    autofocus: !0,
                    fixedBody: !0
                }, r.createElement("div", {
                    className: a(C.wrap, g),
                    "data-name": p
                }, r.createElement("div", {
                    className: a(C.main, !E && C.marginWithoutCloseButton, o && C.small)
                }, t && r.createElement("div", {
                    className: a(C.title, o && C.small)
                }, t), function(t) {
                    if ("html" in e) return r.createElement(h.TouchScrollContainer, {
                        className: a(C.content, t && C.small, C.html, f),
                        dangerouslySetInnerHTML: {
                            __html: e.html
                        }
                    });
                    if ("content" in e) return r.createElement(h.TouchScrollContainer, {
                        className: a(C.content, t && C.small, f)
                    }, e.content);
                    return null
                }(o), m && m.length > 0 && r.createElement("div", {
                    className: a(C.footer, o && C.small)
                }, m.map(((e, t) => r.createElement(w, { ...e,
                    key: e.name,
                    reference: 0 === t ? z : void 0
                }))))), E && r.createElement(i.Icon, {
                    className: a(C.close, o && C.small),
                    icon: y,
                    onClick: D,
                    "data-name": "close",
                    "data-role": "button"
                }))))));

                function T(e) {
                    switch ((0, l.hashFromEvent)(e)) {
                        case 27:
                            k && L && (e.preventDefault(), n());
                            break;
                        case 13:
                            if (k && m && m.length) {
                                e.preventDefault();
                                const t = z.current;
                                t && t.click()
                            }
                    }
                }

                function D() {
                    x(!1), n()
                }
            }
        },
        951292: (e, t, n) => {
            "use strict";
            n.d(t, {
                useOutsideEvent: () => i
            });
            var r = n(50959),
                a = n(314308);

            function i(e) {
                const {
                    click: t,
                    mouseDown: n,
                    touchEnd: i,
                    touchStart: o,
                    handler: s,
                    reference: l,
                    ownerDocument: u = document
                } = e, c = (0, r.useRef)(null), d = (0, r.useRef)(new CustomEvent("timestamp").timeStamp);
                return (0, r.useLayoutEffect)((() => {
                    const e = {
                            click: t,
                            mouseDown: n,
                            touchEnd: i,
                            touchStart: o
                        },
                        r = l ? l.current : c.current;
                    return (0, a.addOutsideEventListener)(d.current, r, s, u, e)
                }), [t, n, i, o, s]), l || c
            }
        },
        50430: (e, t, n) => {
            "use strict";
            n.d(t, {
                useTheme: () => i
            });
            var r = n(631078),
                a = n(909740);

            function i() {
                return (0, r.useWatchedValueReadonly)({
                    watchedValue: a.watchedTheme
                })
            }
        },
        631078: (e, t, n) => {
            "use strict";
            n.d(t, {
                useWatchedValueReadonly: () => a
            });
            var r = n(50959);
            const a = (e, t = !1) => {
                const n = "watchedValue" in e ? e.watchedValue : void 0,
                    a = "defaultValue" in e ? e.defaultValue : e.watchedValue.value(),
                    [i, o] = (0, r.useState)(n ? n.value() : a);
                return (t ? r.useLayoutEffect : r.useEffect)((() => {
                    if (n) {
                        o(n.value());
                        const e = e => o(e);
                        return n.subscribe(e), () => n.unsubscribe(e)
                    }
                    return () => {}
                }), [n]), i
            }
        },
        18182: (e, t, n) => {
            "use strict";
            n.d(t, {
                MatchMedia: () => a
            });
            var r = n(50959);
            class a extends r.PureComponent {
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
        157490: (e, t, n) => {
            "use strict";
            n.d(t, {
                OutsideEvent: () => a
            });
            var r = n(951292);

            function a(e) {
                const {
                    children: t,
                    ...n
                } = e;
                return t((0, r.useOutsideEvent)(n))
            }
        },
        829725: (e, t, n) => {
            "use strict";
            n.d(t, {
                OverlapManager: () => i,
                getRootOverlapManager: () => s
            });
            var r = n(650151);
            class a {
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
            class i {
                constructor(e = document) {
                    this._storage = new a, this._windows = new Map, this._index = 0, this._document = e, this._container = e.createDocumentFragment()
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
                    const t = new i(e),
                        n = function(e) {
                            const t = e.createElement("div");
                            return t.style.position = "absolute", t.style.zIndex = 150..toString(), t.style.top = "0px", t.style.left = "0px", t.id = "overlap-manager-root", t
                        }(e);
                    return o.set(n, t), t.setContainer(n), e.body.appendChild(n), t
                }
            }
        },
        368337: (e, t, n) => {
            "use strict";
            n.d(t, {
                makeOverlapable: () => i
            });
            var r = n(50959),
                a = n(707533);

            function i(e) {
                return class extends r.PureComponent {
                    render() {
                        const {
                            isOpened: t,
                            root: n
                        } = this.props;
                        if (!t) return null;
                        const i = r.createElement(e, { ...this.props,
                            zIndex: 150
                        });
                        return "parent" === n ? i : r.createElement(a.Portal, null, i)
                    }
                }
            }
        },
        707533: (e, t, n) => {
            "use strict";
            n.d(t, {
                Portal: () => l,
                PortalContext: () => u
            });
            var r = n(50959),
                a = n(500962),
                i = n(777491),
                o = n(829725),
                s = n(670797);
            class l extends r.PureComponent {
                constructor() {
                    super(...arguments), this._uuid = (0, i.guid)()
                }
                componentWillUnmount() {
                    this._manager().removeWindow(this._uuid)
                }
                render() {
                    const e = this._manager().ensureWindow(this._uuid, this.props.layerOptions);
                    return e.style.top = this.props.top || "", e.style.bottom = this.props.bottom || "", e.style.left = this.props.left || "", e.style.right = this.props.right || "", e.style.pointerEvents = this.props.pointerEvents || "", a.createPortal(r.createElement(u.Provider, {
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
                Slot: () => a,
                SlotContext: () => i
            });
            var r = n(50959);
            class a extends r.Component {
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
            const i = r.createContext(null)
        },
        12173: (e, t, n) => {
            "use strict";
            n.d(t, {
                TooltipWizard: () => u,
                TooltipWidget: () => c
            });
            var r = n(50959),
                a = n(497754),
                i = n(83436),
                o = n(707533),
                s = n(333765),
                l = n(844662);
            class u extends r.PureComponent {
                render() {
                    const {
                        children: e,
                        popperChildrenProps: t,
                        onClose: n,
                        reference: i,
                        containerClassName: s,
                        arrowClassName: u
                    } = this.props;
                    return r.createElement(o.Portal, null, r.createElement("div", {
                        ref: i
                    }, r.createElement(c, {
                        reference: t.ref,
                        style: t.style,
                        arrowClassName: a(l.arrowHolder, this._getArrowDirectionClass(), u),
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
                            return a(l["arrowHolder--after"], l["arrowHolder--after-ltr-fix"]);
                        case "top":
                            return a(l["arrowHolder--above"], l["arrowHolder--above-fix"]);
                        case "bottom":
                        case "bottom-start":
                        case "bottom-end":
                            return l["arrowHolder--below"];
                        default:
                            return a(l["arrowHolder--before"], l["arrowHolder--before-rtl-fix"])
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
                    arrowReference: m,
                    onClose: p,
                    arrowStyle: v,
                    children: f,
                    ...g
                } = e;
                return r.createElement("div", { ...g,
                    className: t,
                    ref: u,
                    style: c
                }, d && r.createElement("div", {
                    className: h,
                    ref: m,
                    style: v
                }), r.createElement("div", {
                    className: a(l.container, n)
                }, r.createElement("div", {
                    className: a(l.content, o)
                }, f), p && r.createElement(i.Icon, {
                    className: l.closeButton,
                    icon: s,
                    onClick: p
                })))
            }
        },
        150881: (e, t, n) => {
            "use strict";
            n.d(t, {
                TouchScrollContainer: () => s
            });
            var r = n(50959),
                a = n(259142),
                i = n(650151),
                o = n(638456);
            const s = (0, r.forwardRef)(((e, t) => {
                const {
                    children: n,
                    ...i
                } = e, s = (0, r.useRef)(null);
                return (0, r.useImperativeHandle)(t, (() => s.current)), (0, r.useLayoutEffect)((() => {
                    if (o.CheckMobile.iOS()) return null !== s.current && (0, a.disableBodyScroll)(s.current, {
                        allowTouchMove: l(s)
                    }), () => {
                        null !== s.current && (0, a.enableBodyScroll)(s.current)
                    }
                }), []), r.createElement("div", {
                    ref: s,
                    ...i
                }, n)
            }));

            function l(e) {
                return t => {
                    const n = (0, i.ensureNotNull)(e.current),
                        r = document.activeElement;
                    return !n.contains(t) || null !== r && n.contains(r) && r.contains(t)
                }
            }
        },
        163194: e => {
            e.exports = {
                wrapper: "wrapper-bYDWvo47",
                dialog: "dialog-bYDWvo47",
                wrapper_size_tiny: "wrapper_size_tiny-bYDWvo47",
                wrapper_size_small: "wrapper_size_small-bYDWvo47",
                wrapper_size_medium: "wrapper_size_medium-bYDWvo47",
                wrapper_size_large: "wrapper_size_large-bYDWvo47",
                caption: "caption-bYDWvo47",
                caption__icon: "caption__icon-bYDWvo47",
                caption__header: "caption__header-bYDWvo47",
                banner: "banner-bYDWvo47",
                banner__body: "banner__body-bYDWvo47",
                banner__button: "banner__button-bYDWvo47",
                offer: "offer-bYDWvo47",
                offer__title: "offer__title-bYDWvo47",
                offer__body: "offer__body-bYDWvo47",
                offer__text: "offer__text-bYDWvo47",
                offer__text_topOffer: "offer__text_topOffer-bYDWvo47",
                offer__icon: "offer__icon-bYDWvo47",
                icon: "icon-bYDWvo47",
                dialog__header: "dialog__header-bYDWvo47",
                dialog__icon: "dialog__icon-bYDWvo47",
                dialog__body: "dialog__body-bYDWvo47",
                blueLink: "blueLink-bYDWvo47"
            }
        },
        775323: (e, t, n) => {
            "use strict";
            n.d(t, {
                BannerContent: () => k
            });
            var r = n(50959),
                a = n(497754),
                i = n.n(a),
                o = n(951144),
                s = n(83436),
                l = n(638456),
                u = n(777754),
                c = (n(984919), n(50430)),
                d = n(919346),
                h = n(75222),
                m = n(163194),
                p = n(319448),
                v = n(70329),
                f = n(116108),
                g = n(930264),
                _ = n(776734);
            const b = u.t(null, void 0, n(827186)),
                w = u.t(null, void 0, n(74678)),
                y = u.t(null, void 0, n(127290)),
                C = u.t(null, void 0, n(887942)),
                S = new Map([
                    [1, m.wrapper_size_tiny],
                    [2, m.wrapper_size_small],
                    [3, m.wrapper_size_medium],
                    [4, m.wrapper_size_large]
                ]);
            const E = l.CheckMobile.any();

            function L(e) {
                const {
                    title: t,
                    limit: n,
                    isTopOffer: a,
                    useDarkTheme: o
                } = e;
                return r.createElement("div", {
                    className: i()(m.offer, o && m.offer_themed_dark)
                }, r.createElement("div", {
                    className: m.offer__title
                }, t), r.createElement("div", {
                    className: m.offer__body
                }, r.createElement("div", {
                    className: i()(m.offer__text, a && m.offer__text_topOffer)
                }, (0, h.formatBarsLimit)(n), " bars will be available"), r.createElement(s.Icon, {
                    className: m.offer__icon,
                    icon: a ? g : f
                })))
            }

            function k(e) {
                const {
                    size: t,
                    reason: {
                        offers: a
                    },
                    currentLimit: l,
                    background: f,
                    dialogMode: g
                } = e, k = (0, c.useTheme)() === d.StdTheme.Dark, x = (0, r.useMemo)((() => a.reduce(((e, t) => Math.max(e, t.limit)), 0)), [a]), z = (0, r.useMemo)((() => function(e) {
                    return {
                        "--endofseries-largeheight": "380px",
                        "--endofseries-mediumheight": "180px",
                        "--endofseries-smallheight": "251px",
                        "--endofseries-tinyheight": "130px",
                        "--endofseries-bannerwidth": (E ? 160 : 340) + "px",
                        "--endofseries-planofferheight": "76px",
                        "--endofseries-planoffermargin": "12px",
                        "--endofseries-background": e,
                        "--endofseries-vertblur": "20px",
                        "--endofseries-horzblur": "20px"
                    }
                }(f)), [f]), T = 4 === t ? g ? v : p : null;
                return r.createElement("div", {
                    style: z,
                    className: i()(m.wrapper, S.get(t), g && m.dialog)
                }, r.createElement("div", {
                    className: i()(m.banner, k && m.banner_themed_dark)
                }, r.createElement("div", {
                    className: m.caption
                }, T && r.createElement(s.Icon, {
                    className: m.caption__icon,
                    icon: T
                }), t > 1 && r.createElement("div", {
                    className: m.caption__header
                }, b)), r.createElement("div", {
                    className: m.banner__body
                }, w.format({
                    barsLimit: (0, h.formatBarsLimit)(l)
                })), t < 3 ? null : a.map((({
                    limit: e,
                    plans: t
                }) => r.createElement(L, {
                    key: e,
                    title: t.map((e => function(e) {
                        const t = e.toLowerCase().substring(1);
                        return e[0].toUpperCase() + t
                    }(e.name))).join(` ${u.t(null,void 0,n(96921))} `),
                    limit: e,
                    isTopOffer: x === e,
                    useDarkTheme: k
                }))), r.createElement(o.SquareAnchorButton, {
                    href: "/gopro/",
                    target: "_blank",
                    onClick: () => {
                        (0, _.getTracker)().then((e => {
                            null == e || e.trackShowDinoDialog((0, h.currentPlanName)(), "go pro")
                        }))
                    },
                    className: i()(m.banner__button, 4 === t && m.banner__button_large)
                }, a.length > 1 ? y : C)))
            }
        },
        265354: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                EndOfSeriesBanner: () => p
            });
            var r = n(50959),
                a = n(500962),
                i = n(650151),
                o = n(776734),
                s = n(632446),
                l = n(833813),
                u = n(775323),
                c = n(638456),
                d = n(75222);
            const h = new Map([
                    [1, 90],
                    [2, 211],
                    [3, 140],
                    [4, 340]
                ]),
                m = c.CheckMobile.any();
            class p {
                constructor() {
                    this._currentReason = null, this._currentSize = null, this._couldBeShown = !1, this._currentHeight = 0, this._pane = null, this._currentBackColor = null, this._lastRebuildSize = null, this._hasPendingTrackEvent = !1,
                        this._element = document.createElement("div"), this._element.style.position = "absolute", this._element.style.pointerEvents = "none", this._rebuild()
                }
                element() {
                    return this._element
                }
                currentSize() {
                    return this._currentSize
                }
                update(e, t, n, r) {
                    var a;
                    if (null === r) return this._currentReason = null, void this._rebuild();
                    this._pane = e;
                    const o = (0, d.calculateReason)(r);
                    if (2 !== o.reason || 0 === o.offers.length) return this._currentReason = null, void this._rebuild();
                    const s = e.height(),
                        l = function(e, t, n) {
                            if (t < 130 || e < 150) return 0;
                            if (m) return t >= 212 ? 1 : 0;
                            return t <= 251 ? 1 : t <= 356 ? 2 : 0 === n.reason || 1 === n.reason ? 3 : t > 88 * Math.max(2, n.offers.length) + (0, i.ensureDefined)(h.get(4)) + 40 ? 4 : t > 88 * Math.max(2, n.offers.length) + (0, i.ensureDefined)(h.get(3)) + 40 ? 3 : 2
                        }(this._pane.model().timeScale().width(), s - t, o),
                        u = this._calculateBackgroundColor(),
                        c = {
                            paneHeight: s,
                            topOffset: t
                        },
                        p = null === this._lastRebuildSize || (v = this._lastRebuildSize, f = c, v.paneHeight !== f.paneHeight || Math.abs(v.topOffset - f.topOffset) > 32);
                    var v, f;
                    (this._currentSize !== l && p || (null === (a = this._currentReason) || void 0 === a ? void 0 : a.reason) !== o.reason || u !== this._currentBackColor) && (this._currentSize = l, this._currentReason = o, this._rebuild());
                    const g = m ? 160 : 340;
                    if (this._element.style.left = n - g - 20 - 20 + "px", p) {
                        const e = (s - this._currentHeight - t) / 2;
                        this._element.style.top = `${t+e+20}px`, this._lastRebuildSize = c
                    }
                }
                setVisible(e) {
                    this._couldBeShown !== e && (this._couldBeShown = e, this._hasPendingTrackEvent = e, this._rebuild())
                }
                _rebuild() {
                    var e, t;
                    this._element.style.visibility = "hidden", this._currentHeight = 0, null !== this._currentReason && null !== this._currentSize && 0 !== this._currentSize && this._couldBeShown ? (this._hasPendingTrackEvent && ((0, o.getTracker)().then((e => {
                        null == e || e.trackShowDinoDialog("free", "show paywall")
                    })), this._hasPendingTrackEvent = !1), this._element.style.visibility = "visible", this._currentHeight = function(e, t) {
                        switch (t) {
                            case 0:
                                return 0;
                            case 1:
                                return m ? 212 : (0, i.ensureDefined)(h.get(1)) + 40;
                            case 2:
                                return (0, i.ensureDefined)(h.get(2)) + 40;
                            case 3:
                                return 88 * Math.max(2, e.offers.length) + (0, i.ensureDefined)(h.get(3)) + 40;
                            case 4:
                                return 88 * Math.max(2, e.offers.length) + (0, i.ensureDefined)(h.get(4)) + 40
                        }
                    }(this._currentReason, this._currentSize), this._currentBackColor = this._calculateBackgroundColor(), (0, a.render)(r.createElement(u.BannerContent, {
                        reason: this._currentReason,
                        size: this._currentSize,
                        background: this._currentBackColor,
                        currentLimit: null !== (t = null === (e = (0, s.getConfig)(l.ProductFeatures.HISTORICAL_BARS)) || void 0 === e ? void 0 : e.limit) && void 0 !== t ? t : 0,
                        dialogMode: !1
                    }), this._element)) : (0, a.unmountComponentAtNode)(this._element)
                }
                _calculateBackgroundColor() {
                    if (!this._pane) return "";
                    return this._pane.model().backgroundColorAtYPercentFromTop(.5)
                }
            }
        },
        11718: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                EndOfDataLollipopPaneView: () => O
            });
            var r = n(86441),
                a = n(50959),
                i = n(500962),
                o = n(83436),
                s = n(777754),
                l = n(75222),
                u = n(927582),
                c = n(664224),
                d = n(775323),
                h = n(632446),
                m = n(833813),
                p = n(286293),
                v = n(522660),
                f = n(129681),
                g = n(163194);
            const _ = new Map([
                    [1, s.t(null, void 0, n(863489)) + " "],
                    [0, s.t(null, void 0, n(502503)) + " "]
                ]),
                b = new Map([
                    [1, s.t(null, void 0, n(487566))],
                    [0, s.t(null, void 0, n(57700))]
                ]);

            function w(e) {
                var t, r, i;
                const {
                    onClose: w,
                    reason: y
                } = e, C = 0 === y.reason ? f : v, S = (0, a.useMemo)((() => (0, l.currentBarsLimit)()), []), E = y.offers.length ? a.createElement(d.BannerContent, {
                    reason: y,
                    size: 4,
                    background: "transparent",
                    currentLimit: null !== (r = null === (t = (0, h.getConfig)(m.ProductFeatures.HISTORICAL_BARS)) || void 0 === t ? void 0 : t.limit) && void 0 !== r ? r : 0,
                    dialogMode: !0
                }) : a.createElement("div", {
                    className: g.dialog
                }, a.createElement("div", {
                    className: g.dialog__header
                }, a.createElement(o.Icon, {
                    className: g.dialog__icon,
                    icon: C
                }), a.createElement("span", {
                    className: g.dialog__header
                }, b.get(y.reason))), a.createElement("div", {
                    className: g.dialog__body
                }, null === (i = _.get(y.reason)) || void 0 === i ? void 0 : i.format({
                    barsLimit: (0, l.formatBarsLimit)(S)
                }), 2 !== y.reason ? a.createElement("span", {
                    className: g.blueLink,
                    onClick: function(e, t) {
                        t.preventDefault();
                        const n = 1 === e ? p.solutionIds.I_CANT_SEE_ALL_HIST_DATA_ON_RES_LOWER_THAN_DAY : p.solutionIds.HOW_TO_SEE_THE_DEEPEST_HIST_DATA;
                        (0, c.showSupportDialog)({
                            solutionId: n
                        }), w()
                    }.bind(null, y.reason)
                }, s.t(null, void 0, n(718429))) : null));
                return a.createElement(u.SimpleDialog, {
                    closeOnOutsideClick: !1,
                    title: "",
                    content: E,
                    onClose: w
                })
            }
            var y = n(777491),
                C = n(776734),
                S = n(858063),
                E = n(327714),
                L = n(650151),
                k = n(934026),
                x = n(314967),
                z = n(904244);
            const T = new Map([
                    [0, {
                        path: new Path2D("M20.5 1.5a3 3 0 0 0-3 3h4V15H20v-.01l-.03-.03c-2.17-1.88-4.86-3.06-7.64-2.34-2.18.57-3.3 2.6-4.58 4.27a33.34 33.34 0 0 1-4.18 4.55l-.07.06h5v3h2v-3h7v3h2V20l.62-.27a5.61 5.61 0 0 0 3.38-5.15V4.5a3 3 0 0 0-3-3Zm4.49 13.46H25V4.5a4.5 4.5 0 1 0-9 0V6h4v7.1c-2.42-1.65-5.13-2.58-8-1.83-2.55.66-3.94 2.74-5.44 4.71C4.7 18.41 2.1 20.8 0 23h7v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2h4v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4.03a7.11 7.11 0 0 0 3.99-6.01Z"),
                        size: (0, E.size)({
                            width: 25,
                            height: 26
                        }),
                        fillRule: "evenodd"
                    }],
                    [1, {
                        path: new Path2D("M2.76 0h-.75v4H0v10h2v10h6V14h10v10h6V14h2V4h-2V0h-6v4H8V0H2.76ZM19.5 22.5V14h3v8.5h-3Zm3-21V4h-3V1.5h3ZM6.5 4V1.5H3.51V4H6.5Zm0 10h-3v8.5h3V14Zm-5-1.5v-7h6.28l-4.97 7H1.5Zm3.15 0h5.7-.13l4.9-7h-5.5l-4.97 7Zm12.55 0H12l4.94-7h5.24l-5 7Zm1.84 0h5.46v-7h-.47l-5 7Z"),
                        size: (0, E.size)({
                            width: 26,
                            height: 24
                        }),
                        fillRule: "evenodd"
                    }],
                    [2, {
                        path: new Path2D("m14 0 7.37 10.82L28 4v21H0V4l6.63 6.82L14 0Zm0 2.5L6.87 13 1.5 7.81V19h25V7.81l-5.37 5.37L14 2.5Zm-12.5 21v-3h25v3h-25ZM14 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"),
                        size: (0, E.size)({
                            width: 28,
                            height: 25
                        }),
                        fillRule: "evenodd"
                    }]
                ]),
                D = (0, x.getHexColorByName)("color-cold-gray-900"),
                P = (0, x.getHexColorByName)("color-cold-gray-200"),
                B = (0, x.getHexColorByName)("color-tv-blue-500");
            class H extends z.MediaCoordinatesPaneRenderer {
                constructor() {
                    super(...arguments), this._data = null
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e, t) {
                    const n = this._data;
                    if (!n) return null;
                    const a = (0, L.ensureDefined)(T.get(n.iconType));
                    return (0, k.pointInBox)(e, (0, r.box)((0, r.point)(n.point.x - a.size.width, n.point.y - a.size.height), n.point)) ? n.hittest : null
                }
                _drawImpl(e) {
                    const t = this._data;
                    if (!t) return;
                    const n = e.context,
                        r = t.isHovered ? B : t.isDarkTheme ? P : D;
                    n.fillStyle = r;
                    const a = (0, L.ensureDefined)(T.get(t.iconType));
                    n.translate(t.point.x - a.size.width, t.point.y - a.size.height),
                        n.fill(a.path, a.fillRule)
                }
            }
            const N = (0, y.guid)();
            class O {
                constructor(e) {
                    this._invalidated = !0, this._rendererData = null, this._renderer = null, this._dialogCloseFunction = null, this._series = e
                }
                update() {
                    this._invalidated = !0
                }
                renderer(e, t) {
                    return this._invalidated && (this._validate(), this._invalidated = !1), this._renderer
                }
                _prepareDataForValidtion() {
                    const e = this._series.model().timeScale(),
                        t = this._series.priceScale();
                    if (!t || e.isEmpty() || this._series.data().isEmpty()) return null;
                    if (2 === this._series.status() || this._series.requestMoreDataAvailable()) return null;
                    const n = this._series.bars().firstIndex();
                    if (null === n) return null;
                    const r = this._series.endOfDataType();
                    if (null === r) return null;
                    const a = (0, l.calculateReason)(r);
                    return !window.user.is_pro && 2 === a.reason && a.offers.length > 0 ? null : {
                        ps: t,
                        ts: e,
                        endOfDataType: r,
                        firstIndex: n,
                        reason: a
                    }
                }
                _validate() {
                    var e, t;
                    const n = this._series.model().timeScale(),
                        a = this._series.priceScale(),
                        i = this._prepareDataForValidtion();
                    if (null === i || "end" === i.endOfDataType && this._series.data().size() < 400) return this._renderer = null, null === (e = this._dialogCloseFunction) || void 0 === e || e.call(this), void(this._dialogCloseFunction = null);
                    let o;
                    o = "limit" === i.endOfDataType ? window.user.is_pro && i.reason.offers.length > 0 ? 2 : 1 : 0;
                    const s = this._series.model().isDark(),
                        l = n.indexToCoordinate(i.firstIndex) - n.barSpacing() - 20,
                        u = a.height() - 1,
                        c = this._clickHandler.bind(this, i.reason, o),
                        d = {
                            activeItem: N,
                            clickHandler: c,
                            tapHandler: c
                        },
                        h = new S.HitTestResult(S.HitTestResult.REGULAR, d),
                        m = Boolean(this._dialogCloseFunction) || (null === (t = this._series.model().lastHittestData()) || void 0 === t ? void 0 : t.activeItem) === N;
                    this._rendererData ? (this._rendererData.point = (0, r.point)(l, u), this._rendererData.isDarkTheme = s, this._rendererData.isHovered = m, this._rendererData.iconType = o, this._rendererData.hittest = h) : this._rendererData = {
                        point: (0, r.point)(l, u),
                        isDarkTheme: s,
                        iconType: o,
                        isHovered: m,
                        hittest: h
                    }, this._renderer || (this._renderer = new H), this._renderer.setData(this._rendererData)
                }
                _clickHandler(e, t) {
                    this._dialogCloseFunction || (2 === t && (0, C.getTracker)().then((e => {
                        null == e || e.trackShowDinoDialog((0, l.currentPlanName)(), "show paywall")
                    })), this._dialogCloseFunction = function(e) {
                        const t = document.createElement("div"),
                            n = {
                                reason: e.reason,
                                onClose: () => {
                                    var n;
                                    i.unmountComponentAtNode(t), null === (n = e.onClose) || void 0 === n || n.call(e)
                                }
                            };
                        return i.render(a.createElement(w, { ...n
                        }), t), n.onClose
                    }({
                        reason: e,
                        onClose: () => {
                            this._series.model().lightUpdate(), this._dialogCloseFunction = null
                        }
                    }))
                }
            }
        },
        75222: (e, t, n) => {
            "use strict";
            n.d(t, {
                calculateReason: () => l,
                formatBarsLimit: () => u,
                currentBarsLimit: () => c,
                currentPlanName: () => d
            });
            var r = n(650151),
                a = n(632446),
                i = n(833813);

            function o(e, t = []) {
                return {
                    reason: e,
                    offers: t
                }
            }
            const s = ["pro", "pro_realtime", "pro_premium"];

            function l(e) {
                var t, n;
                if ("end" === e) return o(0);
                const l = null !== (n = null === (t = (0, a.getConfig)(i.ProductFeatures.HISTORICAL_BARS)) || void 0 === t ? void 0 : t.limit) && void 0 !== n ? n : 0,
                    u = (0, r.ensureDefined)(window.pro),
                    c = u.getProductsByType(u.PRODUCT_TYPES.pro_plan).filter((e => {
                        var t;
                        return s.includes(null !== (t = e.id) && void 0 !== t ? t : "")
                    })).map((e => ({
                        id: e.id,
                        name: e.name
                    })));
                if (0 === c.length) return o(1);
                const d = [];
                c.forEach((e => {
                    var t, n;
                    const r = null !== (n = null === (t = (0, a.getConfig)(i.ProductFeatures.HISTORICAL_BARS, e.id)) || void 0 === t ? void 0 : t.limit) && void 0 !== n ? n : 0;
                    if (r <= l) return;
                    const o = d.find((e => e.limit === r));
                    o ? o.plans.push(e) : d.push({
                        limit: r,
                        plans: [e]
                    })
                })), d.sort(((e, t) => e.limit - t.limit));
                const h = d.length ? d[d.length - 1].limit : null;
                return null === h || h === l ? o(1) : o(2, d)
            }

            function u(e) {
                return (1e3 * e).toLocaleString()
            }

            function c() {
                var e, t;
                return null !== (t = null === (e = (0, a.getConfig)(i.ProductFeatures.HISTORICAL_BARS)) || void 0 === e ? void 0 : e.limit) && void 0 !== t ? t : 0
            }

            function d() {
                var e, t, n;
                if (!window.user.is_pro) return "free";
                const a = (0, r.ensureDefined)(window.pro);
                return null !== (n = null !== (t = null === (e = a.getProductsByType(a.PRODUCT_TYPES.pro_plan).find((e => e.id === window.user.pro_plan))) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : window.user.pro_plan) && void 0 !== n ? n : ""
            }
        },
        70329: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 48" width="52" height="48"><path fill="#131722" d="M25.63 23.35c1.2 0 2.17-.97 2.17-2.16 0-1.2-.97-2.16-2.17-2.16s-2.17.96-2.17 2.16c0 1.19.97 2.16 2.17 2.16Z"/><path fill="currentColor" fill-rule="evenodd" d="m26 .25 14.09 20.16L52 7.61V48H0V7.62l11.91 12.8L26 .24Zm0 3.5L12.13 23.59 2 12.7V37h48V12.7L39.87 23.59 26 3.75ZM2 46v-7h48v7H2Z"/></svg>'
        },
        319448: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 69" width="73" height="69"><path fill="currentColor" fill-rule="evenodd" d="m36.5.47 1.65 2.4L56 28.8l13.52-14.73L73 10.28V69H0V10.28l3.47 3.79L17 28.8 34.85 2.87 36.5.47Zm0 7.06-17.64 25.6-1.43 2.07-1.7-1.85L4 20.55v31.45h65V20.56l-11.74 12.8-1.7 1.84-1.42-2.07L36.5 7.53ZM4 65v-9h65v9H4Zm32-31a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>'
        },
        129681: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 64" width="58" height="64"><path fill="currentColor" fill-rule="evenodd" d="M48 2a8 8 0 0 0-8 8v4h8v22h-2v-.04c-5.27-5-12.31-5.84-19.16-4.07-7.4 1.92-12.09 10.77-17.62 15.64L5.27 51H18v11h8V51h13v11h8V49.05l-.02-.05.35-.15c5.2-2.18 8.6-7.23 8.67-12.85V10a8 8 0 0 0-8-8Zm10 33.81V10a10 10 0 1 0-20 0v6h8v17.32c-5.69-4.55-12.76-5.15-19.66-3.37-7.92 2.06-12.56 10.9-18.44 16.07l-5.95 5.23L0 53h16v9.39c0 .89.72 1.6 1.61 1.6h8.78c.89 0 1.6-.71 1.6-1.6V53H37v9.39c0 .89.72 1.61 1.61 1.61h8.78c.89 0 1.61-.72 1.61-1.61v-12.1a16.14 16.14 0 0 0 8.98-13.58H58V35.81Z"/></svg>'
        },
        116108: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="#089981" fill-rule="evenodd" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm3.69 5.22a.67.67 0 0 0-1.16-.66l-3.12 5.46-2.05-2.05a.67.67 0 1 0-.94.95l2.66 2.66a.67.67 0 0 0 1.05-.14l3.56-6.22Z"/></svg>'
        },
        522660: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 54" width="56" height="54"><path fill="currentColor" d="M4 0h12v10h24V0h12v10h4v20h-4v24H40V30H16v23H4V30H0V10h4V0Zm2 10h8V2H6v8Zm0 20v21h8V30H6Zm3-2h14l11-16H19L9 28Zm8-16H2v16h5l10-16Zm19 0L25 28h14l11-16H36Zm16 0L41 28h13V12h-2ZM42 30v22h8V30h-8Zm8-20V2h-8v8h8Z"/></svg>'
        },
        930264: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><g clip-path="url(#ae5bzk021)"><path fill="#FF9800" fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM5 6.5 3 5v3h10V5l-2 1.5-3-3-3 3ZM13 9v2H3V9h10Z"/></g><defs><clipPath id="ae5bzk021"><rect width="16" height="16" rx="8"/></clipPath></defs></svg>'
        },
        333765: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>'
        },
        507720: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="currentColor"><path d="m.58 1.42.82-.82 15 15-.82.82z"/><path d="m.58 15.58 15-15 .82.82-15 15z"/></svg>'
        },
        127290: e => {
            e.exports = {
                ar: ["اختر عضوية"],
                ca_ES: ["Escolliu un pla"],
                cs: "Choose a plan",
                de: ["Abonnement auswählen"],
                el: "Choose a plan",
                en: "Choose a plan",
                es: ["Escoja un plan"],
                fa: "Choose a plan",
                fr: ["Choisissez un plan"],
                he_IL: ["בחר תוכנית"],
                hu_HU: "Choose a plan",
                id_ID: ["Pilih skema anda"],
                it: ["Scegli un abbonamento"],
                ja: ["プランを選択"],
                ko: ["플랜을 고르시오"],
                ms_MY: ["Pilih satu pelan"],
                nl_NL: "Choose a plan",
                pl: ["Wybierz plan"],
                pt: ["Escolha um plano"],
                ro: "Choose a plan",
                ru: ["Выбрать подписку"],
                sv: ["Välj ett abonnemang"],
                th: ["เลือกแผน"],
                tr: ["Bir plan seçin"],
                vi: ["Chọn một gói"],
                zh: ["选择一个方案"],
                zh_TW: ["選擇一個方案"]
            }
        },
        863489: e => {
            e.exports = {
                ar: ["لكن‎{barsLimit}‎ هو عدد الأعمدة الأقصى لما يمكن للمستخدمين مشاهدته الآن."],
                ca_ES: ["El límit actual de barres que poden verure els nostres usuaris és de {barsLimit}."],
                cs: "But {barsLimit} bars is the limit of what users can view right now.",
                de: ["Aber {barsLimit} Balken ist die Grenze dessen, was die Benutzer im Moment sehen können."],
                el: "But {barsLimit} bars is the limit of what users can view right now.",
                en: "But {barsLimit} bars is the limit of what users can view right now.",
                es: ["El límite actual de barras que pueden ver nuestros usuarios es de {barsLimit}."],
                fa: "But {barsLimit} bars is the limit of what users can view right now.",
                fr: ["Mais {barsLimit} bars est la limite de ce que les utilisateurs peuvent voir en ce moment."],
                he_IL: ["אבל {barsLimit} ברים הם הגבול של מה שמשתמשים יכולים לראות עכשיו."],
                hu_HU: "But {barsLimit} bars is the limit of what users can view right now.",
                id_ID: ["Namun {barsLimit} bar adalah batasan yang dapat pengguna lihat saat ini."],
                it: ["Ma {barsLimit} bars è il limite di ciò che gli utenti possono visualizzare in questo momento."],
                ja: ["{barsLimit}本のバーが表示可能な上限です。"],
                ko: ["그러나 {barsLimit} 바가 유저가 지금 볼 수 있는 제한 입니다."],
                ms_MY: ["Tetapi {barsLimit} bar ialah had yang pengguna boleh lihat sekarang."],
                nl_NL: "But {barsLimit} bars is the limit of what users can view right now.",
                pl: ["{barsLimit} słupków to limit tego, co użytkownicy mogą teraz zobaczyć."],
                pt: ["Mas {barsLimit} barras é o limite que os usuários podem ver no momento."],
                ro: "But {barsLimit} bars is the limit of what users can view right now.",
                ru: ["Максимальное число баров, доступных для просмотра на данный момент — {barsLimit}."],
                sv: ["Men {barsLimit} staplar är gränsen för vad användarna kan se just nu."],
                th: ["แต่แถบ {barsLimit} คือขีดจำกัดของสิ่งที่ผู้ใช้จะดูได้ในขณะนี้"],
                tr: ["Ancak {barsLimit} çubuk, kullanıcıların şu anda görüntüleyebileceklerinin sınırıdır."],
                vi: ["Nhưng {barsLimit} thanh là giới hạn những gì người dùng có thể xem ngay bây giờ."],
                zh: ["但{barsLimit}根K线是用户目前可以查看的最大限制。"],
                zh_TW: ["但是{barsLimit}根K線是用戶現在可以查看的最大限制。"]
            }
        },
        887942: e => {
            e.exports = {
                ar: ["احصل على العضوية Premium"],
                ca_ES: ["Feu-vos Premium"],
                cs: "Go Premium",
                de: ["Auf Premium upgraden"],
                el: "Go Premium",
                en: "Go Premium",
                es: ["Hágase Premium"],
                fa: "Go Premium",
                fr: ["Passez au Premium"],
                he_IL: ["עבור לפרימיום"],
                hu_HU: "Go Premium",
                id_ID: ["Jadilah Premium"],
                it: ["Diventa Premium"],
                ja: ["Premiumを申し込む"],
                ko: ["프리미엄으로 가기"],
                ms_MY: ["Pergi Premium"],
                nl_NL: "Go Premium",
                pl: ["Przejdź na Premium"],
                pt: ["Seja Premium"],
                ro: "Go Premium",
                ru: ["Подписаться на Premium"],
                sv: ["Bli Premium-användare"],
                th: ["เลือกไปที่พรีเมี่ยม"],
                tr: ["Premium'a geçin"],
                vi: ["Lên gói Cao cấp"],
                zh: ["前往Premium"],
                zh_TW: ["前往Premium"]
            }
        },
        718429: e => {
            e.exports = {
                ar: ["تعرف على المزيد"],
                ca_ES: ["Més informació"],
                cs: ["Přečtěte si více"],
                de: ["Mehr erfahren"],
                el: "Learn more",
                en: "Learn more",
                es: ["Más información"],
                fa: "Learn more",
                fr: ["En savoir plus"],
                he_IL: ["למד עוד"],
                hu_HU: ["Tudj meg többet"],
                id_ID: ["Pelajari lebih lanjut"],
                it: ["Scopri di più"],
                ja: ["詳細を確認"],
                ko: ["자세히 보기"],
                ms_MY: ["Ketahui lebih lanjut"],
                nl_NL: "Learn more",
                pl: ["Dowiedz się więcej"],
                pt: ["Saiba mais"],
                ro: "Learn more",
                ru: ["Узнать больше"],
                sv: ["Läs mer"],
                th: ["เรียนรู้เพิ่มเติม"],
                tr: ["Daha fazla öğren"],
                vi: ["Tìm hiểu thêm"],
                zh: ["了解更多"],
                zh_TW: ["了解更多"]
            }
        },
        827186: e => {
            e.exports = {
                ar: ["عزز عضويتك"],
                ca_ES: ["Actualitzeu el vostre pla"],
                cs: "Power up your plan",
                de: ["Verleihen Sie Ihrem Trading mehr Power"],
                el: "Power up your plan",
                en: "Power up your plan",
                es: ["Actualice su plan"],
                fa: "Power up your plan",
                fr: ["Optimisez votre plan"],
                he_IL: ["הפעל את התוכנית שלך"],
                hu_HU: "Power up your plan",
                id_ID: ["Tingkatkan skema anda"],
                it: ["Migliora il tuo piano"],
                ja: ["プランをパワーアップ"],
                ko: ["플랜을 강화하세요"],
                ms_MY: ["Perkasakan pelan anda"],
                nl_NL: "Power up your plan",
                pl: ["Wzmocnij swój plan"],
                pt: ["Potencialize seu plano"],
                ro: "Power up your plan",
                ru: ["Прокачайте свою подписку"],
                sv: ["Ge ditt abonnemang mer kraft"],
                th: ["เพิ่มพลังให้แผนของคุณ"],
                tr: ["Planınızı güçlendirin"],
                vi: ["Nâng cấp gói của bạn"],
                zh: ["加强您的方案"],
                zh_TW: ["加強您的方案"]
            }
        },
        487566: e => {
            e.exports = {
                ar: ["نود أن نعرض لك المزيد"],
                ca_ES: ["Ens agradaria poder-vos-en mostrar més"],
                cs: "We’d love to show you more",
                de: ["Wir würden Ihnen gerne mehr zeigen"],
                el: "We’d love to show you more",
                en: "We’d love to show you more",
                es: ["Nos encantaría poder mostrarle más"],
                fa: "We’d love to show you more",
                fr: ["Nous serions ravis de vous en montrer plus"],
                he_IL: ["נשמח להראות לך עוד"],
                hu_HU: "We’d love to show you more",
                id_ID: ["Kami ingin menunjukkan lebih banyak kepada anda"],
                it: ["Ci piacerebbe darti più dati"],
                ja: ["もっとお見せしたいのですが"],
                ko: ["더 많이 보여 드리고 싶습니다."],
                ms_MY: ["Kami berbesar hati untuk menunjukkan kepada anda lebih lagi"],
                nl_NL: "We’d love to show you more",
                pl: ["Chętnie pokażemy Ci więcej"],
                pt: ["Adoraríamos te mostrar mais"],
                ro: "We’d love to show you more",
                ru: ["Мы хотели бы показывать больше данных"],
                sv: ["Vi vill gärna visa dig mer"],
                th: ["เราพร้อมที่จะแสดงให้คุณเห็นมากขึ้น"],
                tr: ["Size daha fazlasını göstermek isteriz"],
                vi: ["Chúng tôi muốn cho bạn thấy thêm nữa"],
                zh: ["我们很乐意向您展示更多"],
                zh_TW: ["我們很樂意向您展示更多"]
            }
        },
        57700: e => {
            e.exports = {
                ar: ["هذه هي البداية"],
                ca_ES: ["Aquest és el principi"],
                cs: "This is the very beginning",
                de: ["Hier gehts nicht weiter"],
                el: "This is the very beginning",
                en: "This is the very beginning",
                es: ["Este es el comienzo"],
                fa: "This is the very beginning",
                fr: ["C'est le tout début"],
                he_IL: ["זו ממש ההתחלה"],
                hu_HU: "This is the very beginning",
                id_ID: ["Ini adalah titik permulaannya"],
                it: ["Questo è l'inizio"],
                ja: ["こちらが最初のデータです"],
                ko: ["이제 겨우 시작일 뿐입니다."],
                ms_MY: ["Di sini segalanya bermula"],
                nl_NL: "This is the very beginning",
                pl: ["To dopiero początek"],
                pt: ["Este é o começo"],
                ro: "This is the very beginning",
                ru: ["Добро пожаловать в начало"],
                sv: ["Det här är början"],
                th: ["นี่คือจุดเริ่มต้น"],
                tr: ["Bu ilk başlangıç noktası"],
                vi: ["Đây là khởi đầu"],
                zh: ["这是最开始的地方"],
                zh_TW: ["這是最開始的地方"]
            }
        },
        502503: e => {
            e.exports = {
                ar: ["لقد شققت طريقك من خلال جميع البيانات المتاحة. نأمل أن يكون ذلك مفيدًا لك — فنحن نركز دائمًا على تزويدك بأكثر البيانات شمولا."],
                ca_ES: "You’ve made your way through all available data. We hope it was useful – we’re always focused on providing you with the most complete data.",
                cs: "You’ve made your way through all available data. We hope it was useful – we’re always focused on providing you with the most complete data.",
                de: ["Sie haben sich alle erhältlichen Daten angesehen. Wir hoffen, dass es sich für Sie als nützlich erwiesen hat. Es ist eine unserer Prioritäten, Sie mit vollständigen Daten zu versorgen."],
                el: "You’ve made your way through all available data. We hope it was useful – we’re always focused on providing you with the most complete data.",
                en: "You’ve made your way through all available data. We hope it was useful – we’re always focused on providing you with the most complete data.",
                es: ["Ya ha consultado todos los datos disponibles. Esperamos que le haya resultado útil: siempre nos centramos en proporcionarle los datos más completos."],
                fa: "You’ve made your way through all available data. We hope it was useful – we’re always focused on providing you with the most complete data.",
                fr: ["Vous avez parcouru toutes les données disponibles. Nous espérons qu'elles vous ont été utiles - nous nous efforçons toujours de vous fournir les données les plus complètes."],
                he_IL: ["עשית את דרכך בכל הנתונים הזמינים. אנו מקווים שזה היה שימושי - אנו תמיד מתמקדים בלספק לך את הנתונים המלאים ביותר."],
                hu_HU: "You’ve made your way through all available data. We hope it was useful – we’re always focused on providing you with the most complete data.",
                id_ID: ["Anda telah menelusuri seluruh data yang tersedia. Kami harap ini berguna untuk anda - kami selalu berfokus dalam menyediakan data terlengkap untuk anda."],
                it: ["Hai consultato tutti i dati disponibili. Ci auguriamo che sia stato utile: siamo sempre impegnati a fornirti i dati più esaustivi e completi."],
                ja: ["ここまでが利用可能なデータのすべてです。お役に立てば幸いです – 私たちは常に完全なデータを提供することに注力しています。"],
                ko: ["사용 가능한 모든 데이터를 확인했습니다. 도움이 되었기를 바랍니다. 저희는 항상 가장 완전한 데이터를 제공하는 데 주력하고 있습니다."],
                ms_MY: ["Anda telah melalui semua data yang ada. Kami harap ia berguna – kami sentiasa fokus untuk memberikan anda data yang paling lengkap."],
                nl_NL: "You’ve made your way through all available data. We hope it was useful – we’re always focused on providing you with the most complete data.",
                pl: ["Przejrzałeś wszystkie dostępne dane. Mamy nadzieję, że było to przydatne – zawsze koncentrujemy się na dostarczaniu jak najbardziej kompletnych danych."],
                pt: ["Você percorreu todos os dados disponíveis. Esperamos que tenha sido útil – estamos sempre empenhados em fornecer os dados mais completos para você."],
                ro: "You’ve made your way through all available data. We hope it was useful – we’re always focused on providing you with the most complete data.",
                ru: ["Вы просмотрели все доступные данные. Надеемся, они были вам полезны — мы постараемся добавить ещё."],
                sv: ["Du har kommit igenom all tillgänglig data. Vi hoppas att den varit användbar – vi har alltid fokus på att du ska få den mest kompletta datan."],
                th: ["คุณได้รับข้อมูลที่มีอยู่ทั้งหมดแล้ว เราหวังว่าข้อมูลนี้จะเป็นประโยชน์ เรามุ่งเน้นที่จะให้ข้อมูลที่สมบูรณ์ที่สุดแก่คุณเสมอ"],
                tr: ["Mevcut tüm verileri gözden geçirdiniz. Umarız faydalı olmuştur - size her zaman en eksiksiz verileri sağlamaya odaklanıyoruz."],
                vi: ["Bạn đã thành công với tất cả dữ liệu sẵn có. Chúng tôi hi vọng dữ liệu hữu ích. Chúng tôi luôn ưu tiên nỗ lực cung cấp cho bạn dữ liệu hoàn thiện nhất."],
                zh: ["您已经浏览了所有可用数据。我们希望它有用 — 我们始终专注于为您提供最完整的数据。"],
                zh_TW: ["您已經瀏覽了所有可用數據。我們希望它是實用的 — 我們始終專注於為您提供最完整的數據。"]
            }
        },
        74678: e => {
            e.exports = {
                ar: ["لا تسمح عضويتك سوى بمشاهدة ‎{barsLimit} عمود. عد بالزمن إلى الوراء أكثر من خلال ترقية عضويتك اليوم."],
                ca_ES: ["Amb el vostre pla només podeu veure {barsLimit} barres. Retrocediu més en el temps actualitzant el compte avui mateix."],
                cs: "Your plan only sees {barsLimit} bars. Go further back in time by upgrading your plan today.",
                de: ["Ihr Abonnement umfasst nur {barsLimit} Balken. Reisen Sie weiter zurück in die Vergangenheit, indem Sie Ihr Abonnement noch heute aktualisieren."],
                el: "Your plan only sees {barsLimit} bars. Go further back in time by upgrading your plan today.",
                en: "Your plan only sees {barsLimit} bars. Go further back in time by upgrading your plan today.",
                es: ["Con su plan solo puede ver {barsLimit} barras. Retroceda más en el tiempo actualizando su cuenta hoy mismo."],
                fa: "Your plan only sees {barsLimit} bars. Go further back in time by upgrading your plan today.",
                fr: ["Votre plan ne voit que {barsLimit} barres. Remontez plus loin dans le temps en mettant votre plan à niveau dès aujourd'hui."],
                he_IL: ["התוכנית שלך רואה רק {barsLimit} ברים. חזור אחורה בזמן על ידי שדרוג התוכנית שלך היום."],
                hu_HU: "Your plan only sees {barsLimit} bars. Go further back in time by upgrading your plan today.",
                id_ID: ["Skema anda hanya melihat {barsLimit} bar. Pergi lebih jauh ke masa lalu dengan mengupgrade skema anda hari ini."],
                it: ["Il vostro piano di abbonamento prevede solo {barsLimit} barre. Tornate indietro nel tempo aggiornando il vostro piano oggi stesso."],
                ja: ["ご利用のプランでは、{barsLimit}本のバーの表示が上限です。今すぐプランをアップグレードして、さらに過去にさかのぼりましょう。"],
                ko: ["당신의 현재 요금제로는 {barsLimit} 개의 바만 표시됩니다. 지금 요금제를 업그레이드하여 더 많은 기간을 보세요."],
                ms_MY: ["Pelan anda hanya melihat {barsLimit} bar. Pergi semula ke masa terdahulu dengan menaik taraf pelan anda hari ini."],
                nl_NL: "Your plan only sees {barsLimit} bars. Go further back in time by upgrading your plan today.",
                pl: ["W Twoim planie widocznych jest jedynie {barsLimit} słupków. Uzyskaj dostęp do szerszego zakresu przechodząc na płatny plan."],
                pt: ["Seu plano só dispões de {barsLimit} barras. Acesse mais dados anteriores atualizando hoje o seu plano."],
                ro: "Your plan only sees {barsLimit} bars. Go further back in time by upgrading your plan today.",
                ru: ["Ваша подписка позволяет видеть только {barsLimit} баров. Улучшите свою подписку, чтобы получить больше данных."],
                sv: ["Ditt abonnemang ser endast {barsLimit} staplar. Gå längre bakåt i tiden genom att uppgradera ditt abonnemang i dag."],
                th: ["แผนของคุณเห็นแถบ {barsLimit} เท่านั้น ย้อนเวลากลับไปให้มากขึ้นด้วยการอัปเกรดแผนของคุณวันนี้"],
                tr: ["Planınız yalnızca {barsLimit} çubuk görüntüler. Planınızı bugün yükselterek zamanda daha da geriye gidin."],
                vi: ["Gói của bạn chỉ có thể nhìn thấy các thanh {barsLimit}. Hãy quay lại kịp thời để nâng cấp gói của bạn ngay hôm nay."],
                zh: ["您的方案只能看到{barsLimit}根K线。立即升级您的方案，让时光倒流更远。"],
                zh_TW: ["您的方案只能看到{barsLimit}個K線圖。立即升級您的方案，讓時光倒流更遠。"]
            }
        },
        96921: e => {
            e.exports = {
                ar: ["أو"],
                ca_ES: ["o"],
                cs: "or",
                de: ["oder"],
                el: "or",
                en: "or",
                es: ["o"],
                fa: "or",
                fr: ["ou"],
                he_IL: ["או"],
                hu_HU: ["vagy"],
                id_ID: ["atau"],
                it: ["o"],
                ja: ["または"],
                ko: ["또는"],
                ms_MY: ["atau"],
                nl_NL: "or",
                pl: ["lub"],
                pt: ["ou"],
                ro: "or",
                ru: ["или"],
                sv: ["eller"],
                th: ["หรือ"],
                tr: ["veya"],
                vi: ["hoặc"],
                zh: ["或者"],
                zh_TW: ["或"]
            }
        }
    }
]);
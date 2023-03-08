(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [12878], {
        8898: e => {
            e.exports = {
                placeHolder: "placeHolder-eofQCKh2",
                hidden: "hidden-eofQCKh2"
            }
        },
        497915: e => {
            e.exports = {
                wrapper: "wrapper-qhzz_scW",
                title: "title-qhzz_scW",
                text: "text-qhzz_scW",
                button: "button-qhzz_scW"
            }
        },
        267158: e => {
            e.exports = {
                item: "item-pso1R1PY",
                label: "label-pso1R1PY",
                labelRow: "labelRow-pso1R1PY",
                toolbox: "toolbox-pso1R1PY"
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
        662464: (e, t, o) => {
            "use strict";
            o.d(t, {
                useHover: () => n,
                hoverMouseEventFilter: () => s,
                useAccurateHover: () => a
            });
            var i = o(50959);

            function n() {
                const [e, t] = (0, i.useState)(!1);
                return [e, {
                    onMouseOver: function(e) {
                        s(e) && t(!0)
                    },
                    onMouseOut: function(e) {
                        s(e) && t(!1)
                    }
                }]
            }

            function s(e) {
                return !e.currentTarget.contains(e.relatedTarget)
            }

            function a(e) {
                const [t, o] = (0, i.useState)(!1);
                return (0, i.useEffect)((() => {
                    const t = t => {
                        if (null === e.current) return;
                        const i = e.current.contains(t.target);
                        o(i)
                    };
                    return document.addEventListener("mouseover", t), () => document.removeEventListener("mouseover", t)
                }), []), t
            }
        },
        640027: (e, t, o) => {
            "use strict";
            o.d(t, {
                useIsMounted: () => n
            });
            var i = o(50959);
            const n = () => {
                const e = (0, i.useRef)(!1);
                return (0, i.useEffect)((() => (e.current = !0, () => {
                    e.current = !1
                })), []), e
            }
        },
        389401: (e, t, o) => {
            "use strict";
            o.d(t, {
                Measure: () => n
            });
            var i = o(444530);

            function n(e) {
                const {
                    children: t,
                    onResize: o
                } = e;
                return t((0, i.useResizeObserver)(o || (() => {}), [null === o]))
            }
        },
        24154: (e, t, o) => {
            "use strict";
            o.d(t, {
                HintReferenceable: () => r,
                defaultHintStateHandler: () => d
            });
            var i = o(50959),
                n = o(497754),
                s = o(62802),
                a = o(399749),
                l = o(8898);
            const r = i.forwardRef(((e, t) => {
                const {
                    theme: s,
                    placeHolderClassName: a,
                    smallPlaceHolderClassName: r,
                    settingsHintKey: h,
                    placement: u,
                    onClick: m,
                    reference: p,
                    buttonText: g,
                    text: v,
                    title: b,
                    escapeWithReference: C,
                    overflowPadding: _,
                    boundariesElement: f,
                    hintStateHandler: w = d,
                    containerClassName: y,
                    hideWithReference: T = !1,
                    enableFlip: k = !0
                } = e, S = (0, i.useRef)(null), [E, A] = (0, i.useState)(null), [M, D] = (0, i.useState)((() => w.getHintState(h))), [N, x] = (0, i.useState)(!1), [B, W] = (0, i.useState)(!1), P = (0, i.useMemo)((() => ({
                    close(e = !1) {
                        D(!1), e && w.setHintState(h)
                    }
                })), [w]);
                if ((0, i.useImperativeHandle)(t, (() => P), [P]), (0, i.useEffect)((() => (M && (S.current = Promise.all([o.e(1387), o.e(87553)]).then(o.bind(o, 49656)), S.current.then((e => {
                        S.current && A(e)
                    }))), () => {
                        S.current = null
                    })), []), M && E) {
                    const {
                        Manager: e,
                        Reference: t,
                        Popper: o
                    } = E;
                    return i.createElement(e, null, i.createElement(t, null, (e => i.createElement("div", {
                        ref: e.ref,
                        className: n(l.placeHolder, a, N && r)
                    }))), i.createElement(o, {
                        placement: u,
                        strategy: "fixed",
                        modifiers: [{
                            name: "offset",
                            options: {
                                offset: [0, 5]
                            }
                        }, {
                            name: "preventOverflow",
                            options: {
                                rootBoundary: f || "viewport",
                                altBoundary: C || !1,
                                padding: _
                            }
                        }, {
                            name: "flip",
                            enabled: k,
                            options: {
                                fallbackPlacements: ["left", "bottom"]
                            }
                        }, {
                            name: "hideWithReference",
                            enabled: T,
                            phase: "main",
                            fn: e => {
                                var t;
                                const {
                                    state: o
                                } = e, i = Boolean(null === (t = o.modifiersData.hide) || void 0 === t ? void 0 : t.isReferenceHidden);
                                B !== i && W(i)
                            }
                        }]
                    }, (e => i.createElement(c, {
                        setSmallSize: x,
                        text: v,
                        buttonText: g,
                        reference: p,
                        popperChildrenProps: e,
                        onClick: I,
                        title: b,
                        theme: s,
                        arrowClassName: n(B && l.hidden),
                        containerClassName: n(y, B && l.hidden)
                    }))))
                }
                return null;

                function I() {
                    P.close(!0), m && m()
                }
            }));

            function c(e) {
                const {
                    setSmallSize: t,
                    popperChildrenProps: o,
                    ...n
                } = e;
                return (0, i.useLayoutEffect)((() => {
                    t(o.placement && o.placement.startsWith("bottom"))
                }), [t, o]), i.createElement(a.HintWizard, { ...n,
                    popperChildrenProps: o
                })
            }
            const d = {
                getHintState: e => {
                    if (!e) return !0;
                    const t = s.getBool(e);
                    return window.is_authenticated && (t || void 0 === t)
                },
                setHintState: e => {
                    e && s.setValue(e, !1, {
                        forceFlush: !0
                    })
                }
            }
        },
        399749: (e, t, o) => {
            "use strict";
            o.d(t, {
                DEFAULT_HINT_THEME: () => r,
                HintWizard: () => c
            });
            var i = o(50959),
                n = o(777754),
                s = o(12173),
                a = o(915812),
                l = o(497915);
            const r = l;

            function c(e) {
                const {
                    popperChildrenProps: t,
                    onClick: r,
                    reference: c,
                    text: d,
                    buttonText: h,
                    title: u,
                    theme: m = l,
                    containerClassName: p,
                    arrowClassName: g
                } = e;
                return i.createElement(s.TooltipWizard, {
                    reference: c,
                    popperChildrenProps: t,
                    containerClassName: p,
                    arrowClassName: g
                }, i.createElement("div", {
                    className: m.wrapper
                }, u && i.createElement("div", {
                    className: m.title
                }, u), i.createElement("div", {
                    className: m.text
                }, d), r && i.createElement(a.SquareButton, {
                    className: m.button,
                    size: "xsmall",
                    onClick: r
                }, h || n.t(null, void 0, o(758901)))))
            }
        },
        962624: (e, t, o) => {
            "use strict";
            o.d(t, {
                hoverMouseEventFilter: () => i.hoverMouseEventFilter,
                useAccurateHover: () => i.useAccurateHover,
                useHover: () => i.useHover
            });
            var i = o(662464)
        },
        631078: (e, t, o) => {
            "use strict";
            o.d(t, {
                useWatchedValueReadonly: () => n
            });
            var i = o(50959);
            const n = (e, t = !1) => {
                const o = "watchedValue" in e ? e.watchedValue : void 0,
                    n = "defaultValue" in e ? e.defaultValue : e.watchedValue.value(),
                    [s, a] = (0, i.useState)(o ? o.value() : n);
                return (t ? i.useLayoutEffect : i.useEffect)((() => {
                    if (o) {
                        a(o.value());
                        const e = e => a(e);
                        return o.subscribe(e), () => o.unsubscribe(e)
                    }
                    return () => {}
                }), [o]), s
            }
        },
        62804: (e, t, o) => {
            "use strict";
            o.d(t, {
                multilineLabelWithIconAndToolboxTheme: () => a
            });
            var i = o(995683),
                n = o(655498),
                s = o(267158);
            const a = (0, i.mergeThemes)(n, s)
        },
        12173: (e, t, o) => {
            "use strict";
            o.d(t, {
                TooltipWizard: () => c,
                TooltipWidget: () => d
            });
            var i = o(50959),
                n = o(497754),
                s = o(83436),
                a = o(707533),
                l = o(333765),
                r = o(844662);
            class c extends i.PureComponent {
                render() {
                    const {
                        children: e,
                        popperChildrenProps: t,
                        onClose: o,
                        reference: s,
                        containerClassName: l,
                        arrowClassName: c
                    } = this.props;
                    return i.createElement(a.Portal, null, i.createElement("div", {
                        ref: s
                    }, i.createElement(d, {
                        reference: t.ref,
                        style: t.style,
                        arrowClassName: n(r.arrowHolder, this._getArrowDirectionClass(), c),
                        arrowReference: t.arrowProps.ref,
                        arrowStyle: t.arrowProps.style,
                        "data-placement": t.placement,
                        onClose: o,
                        containerClassName: l
                    }, e)))
                }
                _getArrowDirectionClass() {
                    const {
                        popperChildrenProps: e
                    } = this.props;
                    switch (e.placement) {
                        case "left":
                        case "left-start":
                            return n(r["arrowHolder--after"], r["arrowHolder--after-ltr-fix"]);
                        case "top":
                            return n(r["arrowHolder--above"], r["arrowHolder--above-fix"]);
                        case "bottom":
                        case "bottom-start":
                        case "bottom-end":
                            return r["arrowHolder--below"];
                        default:
                            return n(r["arrowHolder--before"], r["arrowHolder--before-rtl-fix"])
                    }
                }
            }

            function d(e) {
                const {
                    className: t,
                    containerClassName: o,
                    contentClassName: a,
                    reference: c,
                    style: d,
                    arrow: h = !0,
                    arrowClassName: u,
                    arrowReference: m,
                    onClose: p,
                    arrowStyle: g,
                    children: v,
                    ...b
                } = e;
                return i.createElement("div", { ...b,
                    className: t,
                    ref: c,
                    style: d
                }, h && i.createElement("div", {
                    className: u,
                    ref: m,
                    style: g
                }), i.createElement("div", {
                    className: n(r.container, o)
                }, i.createElement("div", {
                    className: n(r.content, a)
                }, v), p && i.createElement(s.Icon, {
                    className: r.closeButton,
                    icon: l,
                    onClick: p
                })))
            }
        },
        906132: (e, t, o) => {
            "use strict";
            var i = o(522134);

            function n() {}

            function s() {}
            s.resetWarningCache = n, e.exports = function() {
                function e(e, t, o, n, s, a) {
                    if (a !== i) {
                        var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw l.name = "Invariant Violation", l
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var o = {
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
                    checkPropTypes: s,
                    resetWarningCache: n
                };
                return o.PropTypes = o, o
            }
        },
        719036: (e, t, o) => {
            e.exports = o(906132)()
        },
        522134: e => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        184463: e => {
            e.exports = {
                button: "button-mOEOjod4",
                hover: "hover-mOEOjod4",
                bg: "bg-mOEOjod4",
                icon: "icon-mOEOjod4",
                isActive: "isActive-mOEOjod4",
                isTransparent: "isTransparent-mOEOjod4",
                isGrayed: "isGrayed-mOEOjod4",
                isHidden: "isHidden-mOEOjod4"
            }
        },
        373380: e => {
            e.exports = {
                dropdown: "dropdown-ckSKjGRJ",
                buttonWrap: "buttonWrap-ckSKjGRJ",
                control: "control-ckSKjGRJ",
                arrow: "arrow-ckSKjGRJ",
                arrowIcon: "arrowIcon-ckSKjGRJ",
                isOpened: "isOpened-ckSKjGRJ",
                hover: "hover-ckSKjGRJ",
                isGrayed: "isGrayed-ckSKjGRJ"
            }
        },
        46949: e => {
            e.exports = {
                hidden: "hidden-K_dNKcEL"
            }
        },
        832924: e => {
            e.exports = {
                "tablet-small-breakpoint": "screen and (max-width: 430px)",
                item: "item-TtgC6v1y",
                withIcon: "withIcon-TtgC6v1y",
                shortcut: "shortcut-TtgC6v1y",
                loading: "loading-TtgC6v1y",
                icon: "icon-TtgC6v1y"
            }
        },
        372998: e => {
            e.exports = {
                item: "item-_6u5bx_C",
                label: "label-_6u5bx_C"
            }
        },
        284400: e => {
            e.exports = {
                drawingToolbar: "drawingToolbar-gmpTgcxI",
                isHidden: "isHidden-gmpTgcxI",
                inner: "inner-gmpTgcxI",
                group: "group-gmpTgcxI",
                lastGroup: "lastGroup-gmpTgcxI",
                fill: "fill-gmpTgcxI"
            }
        },
        277613: e => {
            e.exports = {
                drawer: "drawer-ujlqtSsK",
                menuBox: "menuBox-ujlqtSsK"
            }
        },
        732556: e => {
            e.exports = {
                wrapper: "wrapper-hKq7Iog_"
            }
        },
        585450: e => {
            e.exports = {
                toolButtonMagnet: "toolButtonMagnet-ndi4EWeE",
                toolButtonMagnet__menuItem: "toolButtonMagnet__menuItem-ndi4EWeE",
                toolButtonMagnet__hintPlaceholder: "toolButtonMagnet__hintPlaceholder-ndi4EWeE"
            }
        },
        636554: e => {
            e.exports = {
                "is-active": "is-active-ErUVKxHU",
                icon: "icon-ErUVKxHU",
                hover: "hover-ErUVKxHU"
            }
        },
        195150: e => {
            e.exports = {
                popupMenuItem: "popupMenuItem-CFIe47FF"
            }
        },
        272744: e => {
            e.exports = {
                wrap: "wrap-g7ay5OPA",
                scrollWrap: "scrollWrap-g7ay5OPA",
                noScrollBar: "noScrollBar-g7ay5OPA",
                content: "content-g7ay5OPA",
                icon: "icon-g7ay5OPA",
                scrollBot: "scrollBot-g7ay5OPA",
                scrollTop: "scrollTop-g7ay5OPA",
                isVisible: "isVisible-g7ay5OPA",
                iconWrap: "iconWrap-g7ay5OPA",
                fadeBot: "fadeBot-g7ay5OPA",
                fadeTop: "fadeTop-g7ay5OPA"
            }
        },
        991605: (e, t, o) => {
            "use strict";
            o.d(t, {
                ToolButton: () => r
            });
            var i = o(50959),
                n = o(497754),
                s = o(83436),
                a = o(8626),
                l = o(184463);

            function r(e) {
                const {
                    id: t,
                    activeClass: o,
                    children: r,
                    className: c,
                    icon: d,
                    isActive: h,
                    isGrayed: u,
                    isHidden: m,
                    isTransparent: p,
                    theme: g = l,
                    onClick: v,
                    title: b,
                    buttonHotKey: C,
                    tooltipPosition: _ = "vertical"
                } = e;
                return i.createElement("div", {
                    id: t,
                    className: n(g.button, c, h && o, {
                        "apply-common-tooltip": Boolean(b),
                        "common-tooltip-vertical": Boolean(b) && "vertical" === _,
                        [g.isActive]: h,
                        [g.isGrayed]: u,
                        [g.isHidden]: m,
                        [g.isTransparent]: p
                    }),
                    onClick: v,
                    title: b,
                    "data-role": "button",
                    "data-tooltip-hotkey": C,
                    ...(0, a.filterDataProps)(e)
                }, i.createElement("div", {
                    className: g.bg
                }, d && ("string" == typeof d ? i.createElement(s.Icon, {
                    className: g.icon,
                    icon: d
                }) : i.createElement("span", {
                    className: g.icon
                }, d)), r))
            }
        },
        653929: (e, t, o) => {
            "use strict";
            o.d(t, {
                ToolWidgetScreenshotContent: () => S
            });
            var i = o(50959),
                n = o(777754),
                s = o(497754),
                a = o(503595),
                l = o(963239),
                r = o(470316),
                c = o(251954),
                d = o(139583),
                h = o(634993),
                u = o(224743),
                m = o(995683),
                p = o(612247),
                g = o(46949);

            function v(e) {
                const t = s(e.isLoading && g.hidden),
                    o = s(!e.isLoading && g.hidden);
                return i.createElement("div", null, i.createElement("span", {
                    className: t
                }, e.children), i.createElement("span", {
                    className: o
                }, i.createElement(p.Loader, null)))
            }
            var b = o(640027),
                C = o(884502),
                _ = o(201457),
                f = o(323595),
                w = o(929414),
                y = o(899280),
                T = o(832924);
            const k = (0, m.mergeThemes)(h.DEFAULT_POPUP_MENU_ITEM_THEME, T);

            function S(e) {
                const {
                    serverSnapshot: t,
                    clientSnapshot: m,
                    hideShortcuts: p
                } = e, [g, S] = (0, i.useState)(!1), [E, A] = (0, i.useState)(!1), [M, D] = (0, i.useState)(!1), N = (0, b.useIsMounted)(), x = (0, i.useCallback)((async () => {
                    var e;
                    const t = m(),
                        o = t.then((e => new Promise((t => e.canvas.toBlob((e => {
                            null !== e && t(e)
                        }))))));
                    try {
                        await (0, l.writePromiseUsingApi)(o, "image/png"), c.emit("onClientScreenshotCopiedToClipboard")
                    } catch (o) {
                        const {
                            canvas: i
                        } = await t;
                        null === (e = window.open()) || void 0 === e || e.document.write(`<img width="100%" src="${i.toDataURL()}"/>`)
                    }
                }), [m]), B = (0, i.useCallback)((async () => {
                    const e = await m(),
                        t = await
                    function(e) {
                        return new Promise((t => {
                            try {
                                e.canvas.toBlob((e => {
                                    if (null === e) throw new Error("Unable to generate blob");
                                    t(URL.createObjectURL(e))
                                }))
                            } catch (o) {
                                t(e.canvas.toDataURL())
                            }
                        }))
                    }(e);
                    t && (0, d.downloadFile)(`${e.name}.png`, t)
                }), [m]), W = e => (0, a.asyncWindowOpen)(e.then((e => e.imageUrl))), P = (0, i.useCallback)((async (e = !1) => {
                    const o = t();
                    try {
                        if (e) await W(o);
                        else {
                            const e = o.then((e => new Blob([e.imageUrl], {
                                type: "text/plain"
                            })));
                            await (0, l.writePromiseUsingApi)(e, "text/plain"), c.emit("onServerScreenshotCopiedToClipboard")
                        }
                        return !0
                    } catch (e) {
                        return W(o), !0
                    } finally {
                        N.current && (A(!1), S(!1), (0, u.globalCloseMenu)())
                    }
                }), [t]), I = (0, i.useCallback)((async () => {
                    D(!0);
                    const [e, i] = await Promise.all([o.e(4665).then(o.bind(o, 600546)), t()]);
                    e.Twitter.shareSnapshotInstantly(i.symbol, i.imageUrl), N.current && (D(!1), (0, u.globalCloseMenu)())
                }), [t]);
                return i.createElement(i.Fragment, null, i.createElement(h.PopupMenuItem, {
                    "data-name": "save-chart-image",
                    label: n.t(null, void 0, o(757352)),
                    icon: f,
                    onClick: B,
                    shortcut: p ? void 0 : (0, r.humanReadableHash)(r.Modifiers.Mod + r.Modifiers.Alt + 83),
                    theme: k
                }), i.createElement(h.PopupMenuItem, {
                    "data-name": "copy-chart-image",
                    label: n.t(null, void 0, o(196935)),
                    icon: _,
                    onClick: x,
                    shortcut: p ? void 0 : (0, r.humanReadableHash)(r.Modifiers.Mod + r.Modifiers.Shift + 83),
                    theme: k
                }), i.createElement(h.PopupMenuItem, {
                    "data-name": "copy-link-to-the-chart-image",
                    label: i.createElement(v, {
                        isLoading: g
                    }, n.t(null, void 0, o(715803))),
                    icon: w,
                    onClick: () => {
                        S(!0), P(!1)
                    },
                    dontClosePopup: !0,
                    isDisabled: g,
                    shortcut: p ? void 0 : (0, r.humanReadableHash)(r.Modifiers.Alt + 83),
                    className: s(g && T.loading),
                    theme: k
                }), i.createElement(h.PopupMenuItem, {
                    "data-name": "open-image-in-new-tab",
                    label: i.createElement(v, {
                        isLoading: E
                    }, n.t(null, void 0, o(102226))),
                    icon: y,
                    onClick: () => {
                        A(!0), P(!0)
                    },
                    dontClosePopup: !0,
                    isDisabled: E,
                    className: s(E && T.loading),
                    theme: k
                }), i.createElement(h.PopupMenuItem, {
                    "data-name": "tweet-chart-image",
                    label: i.createElement(v, {
                        isLoading: M
                    }, n.t(null, void 0, o(509765))),
                    icon: C,
                    onClick: I,
                    dontClosePopup: !0,
                    isDisabled: M,
                    className: s(M && T.loading),
                    theme: k
                }))
            }
        },
        298023: (e, t, o) => {
            "use strict";
            o.d(t, {
                bindScreenshot: () => p
            });
            var i = o(777754),
                n = o(50959),
                s = o(719036),
                a = o(495046),
                l = o(231656),
                r = o(238066),
                c = o(147279),
                d = o(696828);
            const h = new c.DateTimeFormatter({
                    dateTimeSeparator: "_",
                    timeFormat: "%h-%m-%s"
                }),
                u = {
                    takeSnapshot: i.t(null, void 0, o(588513))
                },
                m = (0, l.registryContextType)();

            function p(e) {
                var t;
                return (t = class extends n.PureComponent {
                    constructor(e, t) {
                        super(e, t), this._clientSnapshot = async () => {
                            const e = this.context.chartWidgetCollection.activeChartWidget.value().model().mainSeries().actualSymbol();
                            return {
                                canvas: await this.context.chartWidgetCollection.clientSnapshot(),
                                name: `${(0,d.shortName)(e)}_${h.formatLocal(new Date)}`
                            }
                        }, this._serverSnapshot = async () => {
                            const e = this.context.chartWidgetCollection.activeChartWidget.value().model().mainSeries().actualSymbol(),
                                t = await this.context.chartWidgetCollection.takeScreenshot(),
                                o = a.enabled("charting_library_base") && void 0 !== this.context.snapshotUrl ? t : (0, r.convertImageNameToUrl)(t);
                            return {
                                symbol: (0, d.shortName)(e),
                                imageUrl: o
                            }
                        }, (0, l.validateRegistry)(t, {
                            chartWidgetCollection: s.any.isRequired
                        })
                    }
                    render() {
                        const {
                            className: t,
                            id: o
                        } = this.props;
                        return n.createElement(e, {
                            id: o,
                            className: t,
                            tooltip: u.takeSnapshot,
                            serverSnapshot: this._serverSnapshot,
                            clientSnapshot: this._clientSnapshot
                        })
                    }
                }).contextType = m, t
            }
        },
        1574: (e, t, o) => {
            "use strict";
            o.d(t, {
                trackButtonClick: () => n
            });
            var i = o(776734);

            function n(e, t, o, n) {
                (0, i.getTracker)().then((i => {
                    null !== i && i.trackToolbarButtonClick(e, o ? `${t} ${o}` : t, n)
                }))
            }
        },
        64277: (e, t, o) => {
            "use strict";
            var i;
            o.d(t, {
                    DrawingToolbarComponentIds: () => i
                }),
                function(e) {
                    e.Screenshot = "drawing-toolbar-screenshot", e.FavoriteDrawings = "drawing-toolbar-favorite-drawings", e.ObjectTree = "drawing-toolbar-object-tree"
                }(i || (i = {}))
        },
        46729: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                DrawingToolbarRenderer: () => pt
            });
            var i = o(50959),
                n = o(500962),
                s = o(650151),
                a = o(497754),
                l = o(778785),
                r = o(62802),
                c = o(495046),
                d = o(480071),
                h = o(251954),
                u = o(869403),
                m = o.n(u),
                p = o(638456),
                g = o(314802),
                v = o(551065);
            class b {
                constructor(e) {
                    this._drawingsAccess = e || {
                        tools: [],
                        type: "black"
                    }
                }
                isToolEnabled(e) {
                    const t = this._findTool(e);
                    return !(!t || !t.grayed) || ("black" === this._drawingsAccess.type ? !t : !!t)
                }
                isToolGrayed(e) {
                    const t = this._findTool(e);
                    return Boolean(t && t.grayed)
                }
                _findTool(e) {
                    return this._drawingsAccess.tools.find((t => t.name === e))
                }
            }
            var C = o(589015),
                _ = o(259316),
                f = o(814644),
                w = o(799786),
                y = o(224743),
                T = o(991605);

            function k(e) {
                const {
                    id: t,
                    action: o,
                    isActive: n,
                    isHidden: s,
                    isTransparent: a,
                    toolName: l
                } = e;
                return i.createElement(T.ToolButton, {
                    id: t,
                    icon: v.lineToolsInfo[l].icon,
                    isActive: n,
                    isHidden: s,
                    isTransparent: a,
                    onClick: o,
                    title: v.lineToolsInfo[l].localizedName,
                    "data-name": l
                })
            }
            var S = o(777754),
                E = o(8626),
                A = o(1574),
                M = o(849049),
                D = o(907899),
                N = o(83436),
                x = o(45968),
                B = o(762852),
                W = o(175071),
                P = o(995683),
                I = o(214665);
            const H = o(373380);
            class O extends i.PureComponent {
                constructor(e) {
                    super(e), this._toggleDropdown = e => {
                        this.setState({
                            isOpened: void 0 !== e ? e : !this.state.isOpened
                        })
                    }, this._handleClose = () => {
                        this._toggleDropdown(!1)
                    }, this._getDropdownPosition = () => {
                        if (!this._control) return {
                            x: 0,
                            y: 0
                        };
                        const e = this._control.getBoundingClientRect();
                        return {
                            x: e.left + e.width + 1,
                            y: e.top - 6
                        }
                    }, this._handleClickArrow = () => {
                        var e, t;
                        null === (t = (e = this.props).onArrowClick) || void 0 === t || t.call(e), this._toggleDropdown()
                    }, this._handleTouchStart = () => {
                        this.props.onClickButton && this.props.onClickButton(), this._toggleDropdown()
                    }, this._handlePressStart = () => {
                        if (l.mobiletouch && !this.props.checkable) !this._longPressDelay && this.props.onClickButton && this.props.onClickButton();
                        else {
                            if (this._doubleClickDelay) return clearTimeout(this._doubleClickDelay), delete this._doubleClickDelay, void this._toggleDropdown(!0);
                            this._doubleClickDelay = setTimeout((() => {
                                delete this._doubleClickDelay, !this._longPressDelay && this.props.onClickButton && this.props.onClickButton()
                            }), 175)
                        }
                        this._longPressDelay = setTimeout((() => {
                            delete this._longPressDelay, this._toggleDropdown(!0)
                        }), 300)
                    }, this._cancelAllTimeouts = () => {
                        clearTimeout(this._longPressDelay), delete this._longPressDelay, clearTimeout(this._doubleClickDelay), delete this._doubleClickDelay
                    }, this._handleTouchPressEnd = e => {
                        e.cancelable && e.preventDefault(), this._handlePressEnd()
                    }, this._handlePressEnd = () => {
                        this._longPressDelay && (clearTimeout(this._longPressDelay), delete this._longPressDelay, this.state.isOpened ? this._toggleDropdown(!1) : this.props.checkable || this.state.isOpened || l.mobiletouch || !this.props.isActive && !this.props.openDropdownByClick ? !this._doubleClickDelay && this.props.onClickButton && this.props.onClickButton() : this._toggleDropdown(!0))
                    }, this.state = {
                        isOpened: !1
                    }
                }
                render() {
                    const {
                        buttonActiveClass: e,
                        buttonClass: t,
                        buttonIcon: o,
                        buttonTitle: n,
                        buttonHotKey: s,
                        dropdownTooltip: r,
                        children: c,
                        isActive: d,
                        isGrayed: h,
                        onClickWhenGrayed: u,
                        checkable: m,
                        isSmallTablet: p,
                        theme: g = H
                    } = this.props, {
                        isOpened: v
                    } = this.state, b = (0, E.filterDataProps)(this.props), C = (0, P.mergeThemes)(W.DEFAULT_MENU_THEME, {
                        menuBox: g.menuBox
                    });
                    return i.createElement("div", {
                        className: a(g.dropdown, {
                            [g.isGrayed]: h,
                            [g.isActive]: d,
                            [g.isOpened]: v
                        }),
                        onClick: h ? u : void 0
                    }, i.createElement("div", { ...b,
                        ref: e => this._control = e,
                        className: g.control
                    }, i.createElement("div", { ...this._getButtonHandlers(),
                        className: a(g.buttonWrap, {
                            "apply-common-tooltip common-tooltip-vertical": Boolean(n || s)
                        }),
                        "data-tooltip-hotkey": s,
                        "data-tooltip-delay": 1500,
                        "data-role": "button",
                        title: n
                    }, i.createElement(T.ToolButton, {
                        activeClass: e,
                        className: t,
                        icon: o,
                        isActive: d,
                        isGrayed: h,
                        isTransparent: !m
                    })), !h && !l.mobiletouch && i.createElement("div", {
                        className: a(g.arrow, r && "apply-common-tooltip common-tooltip-vertical"),
                        title: r,
                        onClick: this._handleClickArrow,
                        "data-role": "menu-handle"
                    }, i.createElement(N.Icon, {
                        className: g.arrowIcon,
                        icon: I
                    }))), !h && (p ? v && i.createElement(B.Drawer, {
                        className: g.drawer,
                        onClose: this._handleClose,
                        position: "Bottom"
                    }, c) : i.createElement(x.PopupMenu, {
                        theme: C,
                        doNotCloseOn: this,
                        isOpened: v,
                        onClose: this._handleClose,
                        position: this._getDropdownPosition
                    }, c)))
                }
                _getButtonHandlers() {
                    const {
                        isGrayed: e,
                        checkable: t
                    } = this.props;
                    return e ? {} : l.mobiletouch ? t ? {
                        onTouchStart: this._handlePressStart,
                        onTouchEnd: this._handleTouchPressEnd,
                        onTouchMove: this._cancelAllTimeouts
                    } : {
                        onClick: this._handleTouchStart
                    } : {
                        onMouseDown: this._handlePressStart,
                        onMouseUp: this._handlePressEnd
                    }
                }
            }
            var V = o(689754),
                R = o(291256),
                F = o(258385),
                L = o(277613);
            const U = {
                    icon: S.t(null, void 0, o(326579)),
                    dropdownTooltip: S.t(null, void 0, o(792464))
                },
                z = (0, P.mergeThemes)(H, {
                    menuBox: L.menuBox,
                    drawer: L.drawer
                }),
                G = parseInt(F["default-drawer-min-top-distance"]);
            class j extends i.Component {
                constructor(e) {
                    super(e), this._onChangeDrawingStateTool = () => {
                        this.setState({
                            isActive: this._isActive()
                        })
                    }, this._onChangeActiveCategory = e => {
                        const {
                            toolName: t
                        } = R.TABS_DEFINITIONS[e];
                        this.setState({
                            category: e,
                            toolName: t
                        })
                    }, this._handleClick = () => {
                        this._trackClick()
                    }, this._handleArrowClick = () => {
                        this._trackClick("menu")
                    };
                    const {
                        toolName: t
                    } = R.TABS_DEFINITIONS[M.activeCategory.value()];
                    this.state = {
                        category: M.activeCategory.value(),
                        toolName: t,
                        isActive: d.tool.value() === t
                    }
                }
                componentDidMount() {
                    d.tool.subscribe(this._onChangeDrawingStateTool), M.activeCategory.subscribe(this._onChangeActiveCategory)
                }
                componentWillUnmount() {
                    d.tool.unsubscribe(this._onChangeDrawingStateTool), M.activeCategory.unsubscribe(this._onChangeActiveCategory)
                }
                render() {
                    const {
                        isGrayed: e,
                        isSmallTablet: t
                    } = this.props, {
                        isActive: o,
                        category: n,
                        toolName: s
                    } = this.state, a = (0, E.filterDataProps)(this.props);
                    return i.createElement(O, {
                        theme: z,
                        buttonIcon: D.categoryIconsMap[n],
                        buttonTitle: U.icon,
                        dropdownTooltip: U.dropdownTooltip,
                        isActive: o,
                        isGrayed: e,
                        isSmallTablet: t,
                        onClickButton: this._handleClick,
                        onClickWhenGrayed: () => (0, h.emit)("onGrayedObjectClicked", {
                            type: "drawing",
                            name: v.lineToolsInfo[s].localizedName
                        }),
                        onArrowClick: this._handleArrowClick,
                        openDropdownByClick: !0,
                        ...a
                    }, i.createElement(V.IconsContent, {
                        isSmallTablet: t,
                        maxHeight: t ? Math.min(679, window.innerHeight - G) : 679
                    }))
                }
                _isActive() {
                    return d.tool.value() === this.state.toolName
                }
                _trackClick(e) {
                    (0, A.trackButtonClick)("left toolbar", "icons", e)
                }
            }
            var K = o(87225);
            class q extends i.PureComponent {
                constructor(e) {
                    super(e), this._handleClick = () => {
                        this.props.saveDefaultOnChange && (0, K.saveDefaultProperties)(!0);
                        const e = !this.props.property.value();
                        this.props.property.setValue(e), this.props.saveDefaultOnChange && (0, K.saveDefaultProperties)(!1), this.props.onClick && this.props.onClick(e)
                    }, this.state = {
                        isActive: this.props.property.value()
                    }
                }
                componentDidMount() {
                    this.props.property.subscribe(this, this._onChange)
                }
                componentWillUnmount() {
                    this.props.property.unsubscribe(this, this._onChange)
                }
                render() {
                    const {
                        toolName: e
                    } = this.props, {
                        isActive: t
                    } = this.state, o = v.lineToolsInfo[e];
                    return i.createElement(T.ToolButton, {
                        icon: t && o.iconActive ? o.iconActive : o.icon,
                        isActive: t,
                        onClick: this._handleClick,
                        title: o.localizedName,
                        buttonHotKey: o.hotKey,
                        "data-name": e
                    })
                }
                _onChange(e) {
                    this.setState({
                        isActive: e.value()
                    })
                }
            }
            class Z extends i.PureComponent {
                constructor(e) {
                    super(e), this._handleClick = () => {
                        var e, t;
                        d.tool.setValue(this.props.toolName), null === (t = (e = this.props).onClick) || void 0 === t || t.call(e)
                    }, this._onChange = () => {
                        this.setState({
                            isActive: d.tool.value() === this.props.toolName
                        })
                    }, this.state = {
                        isActive: d.tool.value() === this.props.toolName
                    }
                }
                componentDidMount() {
                    d.tool.subscribe(this._onChange)
                }
                componentWillUnmount() {
                    d.tool.unsubscribe(this._onChange)
                }
                render() {
                    const {
                        toolName: e
                    } = this.props, {
                        isActive: t
                    } = this.state, o = v.lineToolsInfo[e];
                    return i.createElement(T.ToolButton, {
                        icon: v.lineToolsInfo[e].icon,
                        isActive: t,
                        isTransparent: !0,
                        onClick: this._handleClick,
                        title: o.localizedName,
                        buttonHotKey: o.hotKey,
                        "data-name": e
                    })
                }
            }
            class $ extends i.PureComponent {
                constructor(e) {
                    super(e), this._boundUndoModel = null, this._handleClick = () => {
                        const e = this._activeChartWidget();
                        e.hasModel() && e.model().zoomFromViewport(), (0, A.trackButtonClick)("left toolbar", "zoom out")
                    }, this._syncUnzoomButton = () => {
                        const e = this._activeChartWidget();
                        let t = !1;
                        if (e.hasModel()) {
                            const o = e.model();
                            this._boundUndoModel !== o && (this._boundUndoModel && this._boundUndoModel.zoomStack().onChange().unsubscribe(null, this._syncUnzoomButton), o.zoomStack().onChange().subscribe(null, this._syncUnzoomButton), this._boundUndoModel = o), t = !o.zoomStack().isEmpty()
                        } else e.withModel(null, this._syncUnzoomButton);
                        this.setState({
                            isVisible: t
                        })
                    }, this.state = {
                        isVisible: !1
                    }
                }
                componentDidMount() {
                    this.props.chartWidgetCollection.activeChartWidget.subscribe(this._syncUnzoomButton, {
                        callWithLast: !0
                    })
                }
                componentWillUnmount() {
                    this.props.chartWidgetCollection.activeChartWidget.unsubscribe(this._syncUnzoomButton)
                }
                render() {
                    return this.state.isVisible ? i.createElement(k, {
                        action: this._handleClick,
                        isTransparent: !0,
                        toolName: "zoom-out"
                    }) : i.createElement("div", null)
                }
                _activeChartWidget() {
                    return this.props.chartWidgetCollection.activeChartWidget.value()
                }
            }
            var J = o(181317),
                Y = o(852668),
                Q = o(634993),
                X = o(62804),
                ee = o(470316);
            class te extends i.PureComponent {
                constructor(e) {
                    super(e), this._onChangeDrawingState = () => {
                        const e = this._getActiveToolIndex();
                        this.setState({
                            current: -1 !== e ? e : this.state.current,
                            isActive: -1 !== e
                        })
                    }, this._handleClickButton = () => {
                        if (this._trackClick(), p.CheckMobile.any()) return;
                        const e = this._getCurrentToolName();
                        this._selectTool(e)
                    }, this._handleClickItem = e => {
                        this._selectTool(e)
                    }, this._handleGrayedClick = e => {
                        (0, h.emit)("onGrayedObjectClicked", {
                            type: "drawing",
                            name: v.lineToolsInfo[e].localizedName
                        })
                    }, this._handleClickFavorite = e => {
                        this.state.favState && this.state.favState[e] ? J.LinetoolsFavoritesStore.removeFavorite(e) : J.LinetoolsFavoritesStore.addFavorite(e)
                    }, this._onAddFavorite = e => {
                        this.setState({
                            favState: { ...this.state.favState,
                                [e]: !0
                            }
                        })
                    }, this._onRemoveFavorite = e => {
                        this.setState({
                            favState: { ...this.state.favState,
                                [e]: !1
                            }
                        })
                    }, this._onSyncFavorites = () => {
                        this.setState({
                            favState: this._composeFavState()
                        })
                    }, this._handleArrowClick = () => {
                        this._trackClick("menu")
                    }, this._trackClick = e => {
                        const {
                            trackLabel: t
                        } = this.props;
                        t && (0, A.trackButtonClick)("left toolbar", t, e)
                    };
                    const t = this._getActiveToolIndex();
                    this.state = {
                        current: -1 === t ? this._firstNonGrayedTool() : t,
                        favState: this._composeFavState(),
                        isActive: -1 !== t
                    }
                }
                componentDidMount() {
                    d.tool.subscribe(this._onChangeDrawingState), J.LinetoolsFavoritesStore.favoriteAdded.subscribe(null, this._onAddFavorite), J.LinetoolsFavoritesStore.favoriteRemoved.subscribe(null, this._onRemoveFavorite), J.LinetoolsFavoritesStore.favoritesSynced.subscribe(null, this._onSyncFavorites)
                }
                componentWillUnmount() {
                    d.tool.unsubscribe(this._onChangeDrawingState), J.LinetoolsFavoritesStore.favoriteAdded.unsubscribe(null, this._onAddFavorite), J.LinetoolsFavoritesStore.favoriteRemoved.unsubscribe(null, this._onRemoveFavorite), J.LinetoolsFavoritesStore.favoritesSynced.unsubscribe(null, this._onSyncFavorites)
                }
                componentDidUpdate(e, t) {
                    e.lineTools !== this.props.lineTools && this.setState({
                        favState: this._composeFavState()
                    })
                }
                render() {
                    const {
                        favoriting: e,
                        grayedTools: t,
                        lineTools: o,
                        dropdownTooltip: n,
                        isSmallTablet: s
                    } = this.props, {
                        current: a,
                        favState: l,
                        isActive: r
                    } = this.state, c = this._getCurrentToolName(), d = v.lineToolsInfo[c], h = this._showShortcuts(), u = (0, E.filterDataProps)(this.props);
                    return i.createElement("span", null, i.createElement(O, {
                        buttonIcon: d.icon,
                        buttonTitle: d.localizedName,
                        buttonHotKey: d.hotKey,
                        dropdownTooltip: n,
                        isActive: r,
                        onClickButton: this._handleClickButton,
                        onArrowClick: this._handleArrowClick,
                        isSmallTablet: s,
                        ...u
                    }, o.map(((o, n) => {
                        const c = o.name,
                            d = v.lineToolsInfo[c],
                            u = t[c];
                        return i.createElement(Q.PopupMenuItem, {
                            key: c,
                            "data-name": o.name,
                            theme: s ? X.multilineLabelWithIconAndToolboxTheme : void 0,
                            dontClosePopup: u,
                            forceShowShortcuts: h,
                            shortcut: !s && o.hotkeyHash ? (0, ee.humanReadableHash)(o.hotkeyHash) : void 0,
                            icon: d.icon,
                            isActive: r && a === n,
                            appearAsDisabled: u,
                            label: d.localizedName,
                            onClick: u ? this._handleGrayedClick : this._handleClickItem,
                            onClickArg: c,
                            showToolboxOnHover: !l[c],
                            toolbox: e && !u ? i.createElement(Y.FavoriteButton, {
                                isActive: r && a === n,
                                isFilled: l[c],
                                onClick: () => this._handleClickFavorite(c)
                            }) : void 0
                        })
                    }))))
                }
                _getCurrentToolName() {
                    const {
                        current: e
                    } = this.state, {
                        lineTools: t
                    } = this.props;
                    return t[e || 0].name
                }
                _firstNonGrayedTool() {
                    const {
                        grayedTools: e,
                        lineTools: t
                    } = this.props;
                    return t.findIndex((t => !e[t.name]))
                }
                _getActiveToolIndex() {
                    return this.props.lineTools.findIndex((e => e.name === d.tool.value()))
                }
                _showShortcuts() {
                    return this.props.lineTools.some((e => "shortcut" in e))
                }
                _selectTool(e) {
                    d.tool.setValue(e)
                }
                _composeFavState() {
                    const e = {};
                    return this.props.lineTools.forEach((t => {
                        e[t.name] = J.LinetoolsFavoritesStore.isFavorite(t.name)
                    })), e
                }
            }
            var oe = o(345848),
                ie = o(372998);
            const ne = (0, P.mergeThemes)(Q.DEFAULT_POPUP_MENU_ITEM_THEME, ie);
            var se = o(289397),
                ae = o(562726);
            const le = !0;
            class re extends i.PureComponent {
                constructor(e) {
                    super(e), this._handleRemoveToolClick = () => {
                        l.mobiletouch, de()
                    }, this._handleRemoveDrawings = () => {
                        ce("remove drawing"), this.props.chartWidgetCollection.activeChartWidget.value().removeAllDrawingTools()
                    }, this._handleRemoveStudies = () => {
                        ce("remove indicator"), this.props.chartWidgetCollection.activeChartWidget.value().removeAllStudies()
                    }, this._handleRemoveAll = () => {
                        ce("remove all"), this.props.chartWidgetCollection.activeChartWidget.value().removeAllStudiesDrawingTools()
                    }, this._handleActiveChartWidgetChanged = e => {
                        this._activeChartWidget && this._unsubscribeToModelChanges(this._activeChartWidget), e && this._subscribeToModelChanges(e), this._activeChartWidget = e, this._handleCollectionChanged()
                    }, this._handleCollectionChanged = () => {
                        this.setState(this._getActualState())
                    }, this._getActualState = () => {
                        if (!this._activeChartWidget || !this._activeChartWidget.hasModel()) return {
                            numOfDrawings: 0,
                            numOfIndicators: 0
                        };
                        const e = this._activeChartWidget.model().dataSources(),
                            t = e.filter(se.isLineTool).filter((e => e.isActualSymbol() && e.isUserDeletable())),
                            o = e.filter(ae.isStudy).filter((e => e.removeByRemoveAllStudies()));
                        return {
                            numOfDrawings: t.length,
                            numOfIndicators: o.length
                        }
                    }, this._activeChartWidget = this.props.chartWidgetCollection.activeChartWidget.value(), this.state = this._getActualState()
                }
                componentDidMount() {
                    this.props.chartWidgetCollection.activeChartWidget.subscribe(this._handleActiveChartWidgetChanged, {
                        callWithLast: !0
                    })
                }
                componentWillUnmount() {
                    this._activeChartWidget && this._unsubscribeToModelChanges(this._activeChartWidget), this.props.chartWidgetCollection.activeChartWidget.unsubscribe(this._handleActiveChartWidgetChanged)
                }
                render() {
                    const e = this.props.isSmallTablet ? ne : void 0,
                        {
                            numOfDrawings: t,
                            numOfIndicators: n
                        } = this.state,
                        s = S.t(null, {
                            plural: "{amount} drawings",
                            count: t,
                            replace: {
                                amount: t.toString()
                            }
                        }, o(293030)),
                        a = S.t(null, {
                            plural: "{amount} indicators",
                            count: n,
                            replace: {
                                amount: n.toString()
                            }
                        }, o(580437)),
                        l = S.t(null, {
                            replace: {
                                drawings: s
                            }
                        }, o(630513)),
                        r = S.t(null, {
                            replace: {
                                indicators: a
                            }
                        }, o(355084)),
                        c = S.t(null, {
                            replace: {
                                drawings: s,
                                indicators: a
                            }
                        }, o(710049));
                    return i.createElement(O, {
                        buttonIcon: v.lineToolsInfo[this.props.toolName].icon,
                        buttonTitle: S.t(null, void 0, o(345286)),
                        onClickButton: this._handleRemoveToolClick,
                        isSmallTablet: this.props.isSmallTablet,
                        "data-name": this.props.toolName,
                        onArrowClick: this._handleArrowClick,
                        openDropdownByClick: le
                    }, i.createElement(Q.PopupMenuItem, {
                        "data-name": "remove-drawing-tools",
                        label: l,
                        onClick: this._handleRemoveDrawings,
                        theme: e
                    }), i.createElement(Q.PopupMenuItem, {
                        "data-name": "remove-studies",
                        label: r,
                        onClick: this._handleRemoveStudies,
                        theme: e
                    }), i.createElement(Q.PopupMenuItem, {
                        "data-name": "remove-all",
                        label: c,
                        onClick: this._handleRemoveAll,
                        theme: e
                    }))
                }
                _handleArrowClick() {
                    de("menu")
                }
                _subscribeToModelChanges(e) {
                    e.withModel(this, (() => {
                        this._handleCollectionChanged(), e.model().model().dataSourceCollectionChanged().subscribe(this, this._handleCollectionChanged)
                    }))
                }
                _unsubscribeToModelChanges(e) {
                    e.hasModel() && e.model().model().dataSourceCollectionChanged().unsubscribe(this, this._handleCollectionChanged), e.modelCreated().unsubscribeAll(this)
                }
            }

            function ce(e) {
                (0, oe.trackEvent)("GUI", "Chart Left Toolbar", e)
            }

            function de(e) {
                (0, A.trackButtonClick)("left toolbar", "remove", e)
            }
            var he = o(602492),
                ue = o(951713),
                me = o(597101);
            const pe = i.createContext({
                hideMode: "drawings",
                isActive: !1
            });

            function ge(e) {
                const {
                    hideMode: t,
                    option: {
                        label: o,
                        dataName: n,
                        getBoxedValue: s
                    },
                    isSmallTablet: a,
                    onClick: l
                } = e, {
                    hideMode: r,
                    isActive: c
                } = (0, i.useContext)(pe), d = null == s ? void 0 : s();
                return "all" === t || d ? i.createElement(Q.PopupMenuItem, {
                    label: o,
                    isActive: r === t && c,
                    onClick: function() {
                        l(t, (0, ue.toggleHideMode)(t))
                    },
                    "data-name": n,
                    theme: a ? ne : void 0
                }) : i.createElement(i.Fragment, null)
            }
            const ve = {
                drawings: {
                    active: he.drawingToolsIcons.hideAllDrawingToolsActive,
                    inactive: he.drawingToolsIcons.hideAllDrawingTools
                },
                indicators: {
                    active: he.drawingToolsIcons.hideAllIndicatorsActive,
                    inactive: he.drawingToolsIcons.hideAllIndicators
                },
                positions: {
                    active: he.drawingToolsIcons.hideAllPositionsToolsActive,
                    inactive: he.drawingToolsIcons.hideAllPositionsTools
                },
                all: {
                    active: he.drawingToolsIcons.hideAllDrawingsActive,
                    inactive: he.drawingToolsIcons.hideAllDrawings
                }
            };

            function be(e) {
                const {
                    isSmallTablet: t
                } = e, [{
                    isActive: o,
                    hideMode: n
                }, a] = (0, i.useState)((() => ({
                    isActive: !1,
                    hideMode: (0, ue.getSavedHideMode)()
                })));
                (0, i.useEffect)((() => (me.hideStateChange.subscribe(null, a), () => {
                    me.hideStateChange.unsubscribe(null, a)
                })), []);
                const l = v.lineToolsInfo.hideAllDrawings,
                    {
                        trackLabel: r,
                        tooltip: c,
                        dataName: d
                    } = (0, s.ensureDefined)((0, ue.getHideOptions)().get(n)),
                    h = ve[n][o ? "active" : "inactive"],
                    u = o ? c.active : c.inactive;
                return i.createElement(O, {
                    buttonIcon: h,
                    buttonTitle: u,
                    buttonHotKey: l.hotKey,
                    onClickButton: function() {
                        (0, ue.toggleHideMode)(n), Ce(r, !o), _e(o ? "on" : "off")
                    },
                    isSmallTablet: t,
                    isActive: o,
                    checkable: !0,
                    "data-name": "hide-all",
                    "data-type": d,
                    onArrowClick: function() {
                        _e("menu")
                    }
                }, i.createElement(pe.Provider, {
                    value: {
                        isActive: o,
                        hideMode: n
                    }
                }, Array.from((0, ue.getHideOptions)()).map((([e, o]) => i.createElement(ge, {
                    key: e,
                    hideMode: e,
                    option: o,
                    isSmallTablet: t,
                    onClick: m
                })))));

                function m(e, t) {
                    Ce((0, s.ensureDefined)((0, ue.getHideOptions)().get(e)).trackLabel, t)
                }
            }

            function Ce(e, t) {
                (0, oe.trackEvent)("GUI", "Chart Left Toolbar", `${e} ${t?"on":"off"}`)
            }

            function _e(e) {
                (0, A.trackButtonClick)("left toolbar", "hide", e)
            }
            var fe = o(412611),
                we = o(751445);
            const ye = S.t(null, void 0, o(149616));
            class Te extends i.PureComponent {
                constructor() {
                    super(...arguments), this._instance = null, this._promise = null, this._bindedForceUpdate = () => this.forceUpdate(), this._handleClick = () => {
                        null !== this._instance && (this._instance.isVisible() ? (this._instance.hideAndSaveSettingsValue(), this._trackClick(!1)) : (this._instance.showAndSaveSettingsValue(), this._trackClick(!0)))
                    }
                }
                componentDidMount() {
                    const e = this._promise = (0, s.ensureNotNull)((0, fe.getFavoriteDrawingToolbarPromise)());
                    e.then((t => {
                        this._promise === e && (this._instance = t, this._instance.canBeShown().subscribe(this._bindedForceUpdate), this._instance.visibility().subscribe(this._bindedForceUpdate), this.forceUpdate())
                    }))
                }
                componentWillUnmount() {
                    this._promise = null, null !== this._instance && (this._instance.canBeShown().unsubscribe(this._bindedForceUpdate), this._instance.visibility().unsubscribe(this._bindedForceUpdate), this._instance = null)
                }
                render() {
                    return null !== this._instance && this._instance.canBeShown().value() ? i.createElement(T.ToolButton, {
                        id: this.props.id,
                        icon: we,
                        isActive: this._instance.isVisible(),
                        onClick: this._handleClick,
                        title: ye
                    }) : null
                }
                _trackClick(e) {
                    (0, A.trackButtonClick)("left toolbar", "favorite toolbar", e ? "on" : "off")
                }
            }
            var ke = o(24154),
                Se = o(399749),
                Ee = o(732556);
            const Ae = (0, P.mergeThemes)(Se.DEFAULT_HINT_THEME, Ee),
                Me = { ...ke.defaultHintStateHandler,
                    getHintState: e => !e || r.getBool(e, !0)
                };

            function De(e) {
                return i.createElement(ke.HintReferenceable, {
                    theme: Ae,
                    text: S.t(null, void 0, o(939003)),
                    placement: "auto",
                    settingsHintKey: "hint.magnet",
                    buttonText: S.t(null, void 0, o(766238)),
                    placeHolderClassName: e.className,
                    hintStateHandler: Me
                })
            }
            var Ne = o(631078),
                xe = o(59703),
                Be = o(9304),
                We = o(585450);
            const Pe = {
                [xe.MagnetMode.WeakMagnet]: {
                    id: xe.MagnetMode.WeakMagnet,
                    name: "weakMagnet",
                    icon: he.drawingToolsIcons.magnet,
                    localizedName: S.t(null, void 0, o(245265))
                },
                [xe.MagnetMode.StrongMagnet]: {
                    id: xe.MagnetMode.StrongMagnet,
                    name: "strongMagnet",
                    icon: he.drawingToolsIcons.strongMagnet,
                    localizedName: S.t(null, void 0, o(685422))
                }
            };

            function Ie(e) {
                const {
                    isSmallTablet: t
                } = e, o = (0, Ne.useWatchedValueReadonly)({
                    watchedValue: (0, Be.magnetEnabled)()
                }), n = (0, Ne.useWatchedValueReadonly)({
                    watchedValue: (0, Be.magnetMode)()
                });
                return i.createElement("div", {
                    className: We.toolButtonMagnet
                }, i.createElement(O, {
                    "data-name": "magnet-button",
                    buttonIcon: Pe[n].icon,
                    buttonTitle: v.lineToolsInfo.magnet.localizedName,
                    isActive: o,
                    onClickButton: function() {
                        const e = !o;
                        (0, oe.trackEvent)("GUI", "Chart Left Toolbar", "magnet mode " + (e ? "on" : "off")), (0, A.trackButtonClick)("left toolbar", "magnet mode", e ? "on" : "off");
                        (0, Be.setIsMagnetEnabled)(e)
                    },
                    buttonHotKey: v.lineToolsInfo.magnet.hotKey,
                    checkable: !0,
                    isSmallTablet: t,
                    onArrowClick: function() {
                        (0, A.trackButtonClick)("left toolbar", "magnet mode", "menu")
                    }
                }, Object.values(Pe).map((({
                    id: e,
                    name: a,
                    localizedName: l,
                    icon: r
                }) => i.createElement(Q.PopupMenuItem, {
                    key: e,
                    className: t ? We.toolButtonMagnet__menuItem : void 0,
                    "data-name": a,
                    icon: r,
                    isActive: o && n === e,
                    label: l,
                    onClick: s,
                    onClickArg: e
                })))), o && i.createElement(De, {
                    className: We.toolButtonMagnet__hintPlaceholder
                }));

                function s(e) {
                    void 0 !== e && ((0, oe.trackEvent)("GUI", "Magnet mode", e === xe.MagnetMode.WeakMagnet ? "Weak" : "Strong"), (0, Be.setMagnetMode)(e))
                }
            }
            var He = o(64277),
                Oe = o(962624),
                Ve = o(587080),
                Re = o(569689),
                Fe = o(320116),
                Le = o(125226),
                Ue = o(298023),
                ze = o(653929),
                Ge = o(642709),
                je = o(18182),
                Ke = o(636554),
                qe = o(272644);
            const Ze = (0, Ue.bindScreenshot)((function(e) {
                return i.createElement(je.MatchMedia, {
                    rule: Ge.DialogBreakpoints.TabletSmall
                }, (t => i.createElement(O, {
                    "data-name": e.id,
                    buttonTitle: e.tooltip,
                    buttonIcon: i.createElement(N.Icon, {
                        icon: qe,
                        className: Ke.icon
                    }),
                    isSmallTablet: t,
                    buttonActiveClass: Ke["is-active"],
                    isActive: !0
                }, i.createElement(ze.ToolWidgetScreenshotContent, { ...e
                }))))
            }));
            var $e = o(628922),
                Je = o(439235),
                Ye = o(53806),
                Qe = o(195150);
            const Xe = {
                1: {
                    id: 1,
                    name: "layoutDrawingSync",
                    icon: Je,
                    localizedName: S.t(null, void 0, o(477989)),
                    tooltip: S.t(null, void 0, o(736551))
                },
                2: {
                    id: 2,
                    name: "globalDrawingSync",
                    icon: Ye,
                    localizedName: S.t(null, void 0, o(319407)),
                    tooltip: S.t(null, void 0, o(837431))
                }
            };

            function et(e) {
                const {
                    isSmallTablet: t = !1
                } = e, {
                    state: {
                        drawOnAllCharts: n,
                        drawOnAllChartsMode: s
                    },
                    toggleDrawingsSyncMode: a,
                    setDrawingsSyncMode: l
                } = function() {
                    const {
                        drawOnAllChartsMode: e,
                        drawOnAllCharts: t
                    } = (0, d.properties)().childs(), [o, n] = (0, i.useState)(s());
                    return i.useEffect((() => {
                        const o = {};

                        function i() {
                            n(s())
                        }
                        return e.subscribe(o, i), t.subscribe(o, i), () => {
                            e.unsubscribe(o, i), t.unsubscribe(o, i)
                        }
                    }), []), i.useMemo((() => ({
                        state: o,
                        toggleDrawingsSyncMode: a,
                        setDrawingsSyncMode: l
                    })), [o]);

                    function s() {
                        return {
                            drawOnAllChartsMode: e.value(),
                            drawOnAllCharts: t.value()
                        }
                    }

                    function a() {
                        (0, $e.toggleDrawingSync)();
                        const e = (0, d.properties)().childs().drawOnAllCharts.value();
                        (0, oe.trackEvent)("GUI", "Chart Left Toolbar", "sync " + (e ? "on" : "off")), (0, A.trackButtonClick)("left toolbar", "sync", e ? "on" : "off")
                    }

                    function l(e) {
                        void 0 !== e && ((0, $e.setDrawingSyncMode)(e), (0, oe.trackEvent)("GUI", "Chart Left Toolbar", `sync mode ${e}`))
                    }
                }(), r = Xe[s];
                return i.createElement(O, {
                    "data-name": "drawingSyncMode-button",
                    buttonIcon: r.icon,
                    buttonTitle: n ? r.tooltip : S.t(null, void 0, o(229125)),
                    onClickButton: a,
                    isSmallTablet: t,
                    isActive: n,
                    checkable: !0
                }, Object.values(Xe).map((({
                    id: e,
                    name: o,
                    icon: a,
                    localizedName: r
                }) => i.createElement(Q.PopupMenuItem, {
                    key: e,
                    "data-name": o,
                    icon: a,
                    isActive: n && e === s,
                    label: r,
                    onClick: l,
                    onClickArg: e,
                    className: t ? Qe.popupMenuItem : void 0
                }))))
            }
            var tt = o(598104);
            class ot extends i.PureComponent {
                constructor(e) {
                    super(e), this._syncVisibleState = () => {
                        this.setState({
                            isVisible: this._isMultipleLayout()
                        })
                    }, this.state = {
                        isVisible: this._isMultipleLayout()
                    }
                }
                componentDidMount() {
                    this.props.layout.subscribe(this._syncVisibleState)
                }
                componentWillUnmount() {
                    this.props.layout.unsubscribe(this._syncVisibleState)
                }
                render() {
                    return this.state.isVisible ? this.props.children : i.createElement("div", null)
                }
                _isMultipleLayout() {
                    return (0, tt.isMultipleLayout)(this.props.layout.value())
                }
            }
            var it = o(332585);
            const nt = {
                chartWidgetCollection: o(719036).any.isRequired
            };
            var st = o(231656),
                at = o(284400);
            const lt = (0, Le.isFeatureEnabled)("save_shared_line_tools") && !!window.user.is_pro,
                rt = (c.enabled("right_toolbar"), c.enabled("keep_object_tree_widget_in_right_toolbar"), (0, p.onWidget)()),
                ct = new(m()),
                dt = oe.trackEvent.bind(null, "GUI", "Chart Left Toolbar"),
                ht = (e, t) => dt(`${e} ${t?"on":"off"}`);
            class ut extends i.PureComponent {
                constructor(e) {
                    var t;
                    super(e), this._grayedTools = {}, this._handleMeasureClick = () => {
                            mt("measure")
                        }, this._handleZoomInClick = () => {
                            mt("zoom in")
                        }, this._handleDrawingClick = e => {
                            ht("drawing mode", e), mt("drawing mode", e ? "on" : "off")
                        }, this._handleLockClick = e => {
                            ht("lock all drawing", e), mt("lock", e ? "on" : "off")
                        }, this._handleSyncClick = e => {
                            ht("sync", e), mt("sync", e ? "on" : "off")
                        },
                        this._handleObjectsTreeClick = () => {
                            this._activeChartWidget().showObjectsTreeDialog(), mt("object tree")
                        }, this._handleMouseOver = e => {
                            (0, Oe.hoverMouseEventFilter)(e) && this.setState({
                                isHovered: !0
                            })
                        }, this._handleMouseOut = e => {
                            (0, Oe.hoverMouseEventFilter)(e) && this.setState({
                                isHovered: !1
                            })
                        }, this._handleChangeVisibility = e => {
                            this.setState({
                                isVisible: e
                            })
                        }, this._handleEsc = () => {
                            d.resetToCursor(!0)
                        }, this._handleWidgetbarSettled = e => {
                            var t;
                            this.setState({
                                isWidgetbarVisible: Boolean(null === (t = window.widgetbar) || void 0 === t ? void 0 : t.visible().value()),
                                widgetbarSettled: e
                            })
                        }, this._handleWidgetbarVisible = e => {
                            this.setState({
                                isWidgetbarVisible: e
                            })
                        }, d.init(), this._toolsFilter = new b(this.props.drawingsAccess), this._filteredLineTools = C.lineTools.map((e => ({
                            id: e.id,
                            title: e.title,
                            items: e.items.filter((e => this._toolsFilter.isToolEnabled(v.lineToolsInfo[e.name].localizedName))),
                            trackLabel: e.trackLabel
                        }))).filter((e => 0 !== e.items.length)), this._filteredLineTools.forEach((e => e.items.forEach((e => {
                            this._grayedTools[e.name] = this._toolsFilter.isToolGrayed(v.lineToolsInfo[e.name].localizedName)
                        })))), this.state = {
                            isHovered: !1,
                            isVisible: _.isDrawingToolbarVisible.value(),
                            isWidgetbarVisible: Boolean(null === (t = window.widgetbar) || void 0 === t ? void 0 : t.visible().value()),
                            widgetbarSettled: void 0 !== window.widgetbar
                        }, this._features = {
                            favoriting: !rt && c.enabled("items_favoriting"),
                            multicharts: c.enabled("support_multicharts"),
                            tools: !rt || c.enabled("charting_library_base")
                        }, this._registry = {
                            chartWidgetCollection: this.props.chartWidgetCollection
                        }, this._negotiateResizer()
                }
                componentDidMount() {
                    var e;
                    _.isDrawingToolbarVisible.subscribe(this._handleChangeVisibility), y.globalCloseDelegate.subscribe(this, this._handleGlobalClose), this._tool = d.tool.spawn(), this._tool.subscribe(this._updateHotkeys.bind(this)), this._initHotkeys(), this.props.widgetbarSettled && (this.props.widgetbarSettled.subscribe(this, this._handleWidgetbarSettled), p.CheckMobile.any() && (null === (e = window.widgetbar) || void 0 === e || e.visible().subscribe(this._handleWidgetbarVisible)))
                }
                componentWillUnmount() {
                    var e;
                    null === (e = window.widgetbar) || void 0 === e || e.visible().unsubscribe(this._handleWidgetbarVisible), _.isDrawingToolbarVisible.unsubscribe(this._handleChangeVisibility), y.globalCloseDelegate.unsubscribe(this, this._handleGlobalClose), this._tool.destroy(), this._hotkeys.destroy()
                }
                componentDidUpdate(e, t) {
                    var o;
                    const {
                        isVisible: i,
                        widgetbarSettled: n
                    } = this.state;
                    i !== t.isVisible && (h.emit("toggle_sidebar", !i), r.setValue("ChartDrawingToolbarWidget.visible", i), this._negotiateResizer()), t.widgetbarSettled !== n && n && p.CheckMobile.any() && (null === (o = window.widgetbar) || void 0 === o || o.visible().subscribe(this._handleWidgetbarVisible))
                }
                render() {
                    const {
                        bgColor: e,
                        chartWidgetCollection: t,
                        readOnly: o
                    } = this.props, {
                        isHovered: n,
                        isVisible: s
                    } = this.state, r = {
                        backgroundColor: e && `#${e}`
                    };
                    const c = () => !!this._features.tools && (!this.state.isWidgetbarVisible && p.CheckMobile.any() || (0, g.isOnMobileAppPage)("new"));
                    return i.createElement(st.RegistryProvider, {
                        validation: nt,
                        value: this._registry
                    }, i.createElement(Fe.CloseDelegateContext.Provider, {
                        value: ct
                    }, i.createElement(it.DrawerManager, null, i.createElement(je.MatchMedia, {
                        rule: Ge.DialogBreakpoints.TabletSmall
                    }, (e => i.createElement("div", {
                        id: "drawing-toolbar",
                        className: a(at.drawingToolbar, {
                            [at.isHidden]: !s
                        }),
                        style: r,
                        onClick: this.props.onClick,
                        onContextMenu: Ve.preventDefaultForContextMenu
                    }, i.createElement(f.VerticalScroll, {
                        onScroll: this._handleGlobalClose,
                        isVisibleFade: l.mobiletouch,
                        isVisibleButtons: !l.mobiletouch && n,
                        isVisibleScrollbar: !1,
                        onMouseOver: this._handleMouseOver,
                        onMouseOut: this._handleMouseOut
                    }, i.createElement("div", {
                        className: at.inner
                    }, !o && i.createElement("div", {
                        className: at.group,
                        style: r
                    }, this._filteredLineTools.map(((o, n) => i.createElement(te, {
                        "data-name": o.id,
                        chartWidgetCollection: t,
                        favoriting: this._features.favoriting && !("linetool-group-cursors" === o.id && (0, g.isOnMobileAppPage)("any")),
                        grayedTools: this._grayedTools,
                        key: n,
                        dropdownTooltip: o.title,
                        lineTools: o.items,
                        isSmallTablet: e,
                        trackLabel: o.trackLabel
                    }))), this._toolsFilter.isToolEnabled("Font Icons") && i.createElement(j, {
                        "data-name": "linetool-group-font-icons",
                        isGrayed: this._grayedTools["Font Icons"],
                        isSmallTablet: e
                    })), !o && i.createElement("div", {
                        className: at.group,
                        style: r
                    }, i.createElement(Z, {
                        toolName: "measure",
                        onClick: this._handleMeasureClick
                    }), i.createElement(Z, {
                        toolName: "zoom",
                        onClick: this._handleZoomInClick
                    }), i.createElement($, {
                        chartWidgetCollection: t
                    })), !o && i.createElement("div", {
                        className: at.group,
                        style: r
                    }, i.createElement(Ie, {
                        isSmallTablet: e
                    }), this._features.tools && i.createElement(q, {
                        property: d.properties().childs().stayInDrawingMode,
                        saveDefaultOnChange: !0,
                        toolName: "drawginmode",
                        onClick: this._handleDrawingClick
                    }), this._features.tools && i.createElement(q, {
                        property: d.lockDrawings(),
                        toolName: "lockAllDrawings",
                        onClick: this._handleLockClick
                    }), this._features.tools && i.createElement(be, {
                        isSmallTablet: e
                    }), this._features.tools && this._features.multicharts && (lt ? i.createElement(et, {
                        isSmallTablet: e
                    }) : i.createElement(ot, {
                        layout: t.layout
                    }, i.createElement(q, {
                        property: d.drawOnAllCharts(),
                        saveDefaultOnChange: !0,
                        toolName: "SyncDrawing",
                        onClick: this._handleSyncClick
                    })))), !o && this._features.tools && i.createElement("div", {
                        className: at.group,
                        style: r
                    }, i.createElement(re, {
                        chartWidgetCollection: t,
                        isSmallTablet: e,
                        toolName: "removeAllDrawingTools"
                    })), i.createElement("div", {
                        className: at.fill,
                        style: r
                    }), !o && (this._features.tools || this.props.screenshotButton) && i.createElement("div", {
                        className: a(at.group, at.lastGroup),
                        style: r
                    }, this.props.screenshotButton && i.createElement(Ze, {
                        id: He.DrawingToolbarComponentIds.Screenshot
                    }), this._features.tools && this._features.favoriting && i.createElement(Te, {
                        id: He.DrawingToolbarComponentIds.FavoriteDrawings
                    }), c() && i.createElement(k, {
                        id: He.DrawingToolbarComponentIds.ObjectTree,
                        action: this._handleObjectsTreeClick,
                        toolName: "showObjectsTree"
                    }))))))), undefined)))
                }
                _activeChartWidget() {
                    return this.props.chartWidgetCollection.activeChartWidget.value()
                }
                _negotiateResizer() {
                    this.props.resizerBridge.negotiateWidth(this.state.isVisible ? Re.TOOLBAR_WIDTH_EXPANDED : 0)
                }
                _handleGlobalClose() {
                    ct.fire()
                }
                _updateHotkeys() {
                    this._hotkeys.promote()
                }
                _initHotkeys() {
                    this._hotkeys = w.createGroup({
                        desc: "Drawing Toolbar"
                    }), this._hotkeys.add({
                        desc: "Reset",
                        hotkey: 27,
                        handler: () => this._handleEsc(),
                        isDisabled: () => d.toolIsCursor(d.tool.value())
                    })
                }
            }

            function mt(e, t) {
                (0, A.trackButtonClick)("left toolbar", e, t)
            }
            class pt {
                constructor(e, t) {
                    this._component = null, this._handleRef = e => {
                        this._component = e
                    }, this._container = e, n.render(i.createElement(ut, { ...t,
                        ref: this._handleRef
                    }), this._container)
                }
                destroy() {
                    n.unmountComponentAtNode(this._container)
                }
                getComponent() {
                    return (0, s.ensureNotNull)(this._component)
                }
            }
        },
        814644: (e, t, o) => {
            "use strict";
            o.d(t, {
                VerticalScroll: () => u
            });
            var i = o(50959),
                n = o(497754),
                s = o.n(n),
                a = o(83436),
                l = o(368791),
                r = o(455567),
                c = o(389401),
                d = o(272744),
                h = o(661380);
            class u extends i.PureComponent {
                constructor(e) {
                    super(e), this._scroll = null, this._handleScrollTop = () => {
                        this.animateTo(Math.max(0, this.currentPosition() - (this.state.heightWrap - 50)))
                    }, this._handleScrollBot = () => {
                        this.animateTo(Math.min((this.state.heightContent || 0) - (this.state.heightWrap || 0), this.currentPosition() + (this.state.heightWrap - 50)))
                    }, this._handleResizeWrap = ([e]) => {
                        this.setState({
                            heightWrap: e.contentRect.height
                        })
                    }, this._handleResizeContent = ([e]) => {
                        this.setState({
                            heightContent: e.contentRect.height
                        })
                    }, this._handleScroll = () => {
                        const {
                            onScroll: e
                        } = this.props;
                        e && e(this.currentPosition(), this.isAtTop(), this.isAtBot()), this._checkButtonsVisibility()
                    }, this._checkButtonsVisibility = () => {
                        const {
                            isVisibleTopButton: e,
                            isVisibleBotButton: t
                        } = this.state, o = this.isAtTop(), i = this.isAtBot();
                        o || e ? o && e && this.setState({
                            isVisibleTopButton: !1
                        }) : this.setState({
                            isVisibleTopButton: !0
                        }), i || t ? i && t && this.setState({
                            isVisibleBotButton: !1
                        }) : this.setState({
                            isVisibleBotButton: !0
                        })
                    }, this.state = {
                        heightContent: 0,
                        heightWrap: 0,
                        isVisibleBotButton: !1,
                        isVisibleTopButton: !1
                    }
                }
                componentDidMount() {
                    this._checkButtonsVisibility()
                }
                componentDidUpdate(e, t) {
                    t.heightWrap === this.state.heightWrap && t.heightContent === this.state.heightContent || this._handleScroll()
                }
                currentPosition() {
                    return this._scroll ? this._scroll.scrollTop : 0
                }
                isAtTop() {
                    return this.currentPosition() <= 1
                }
                isAtBot() {
                    return this.currentPosition() + this.state.heightWrap >= this.state.heightContent - 1
                }
                animateTo(e, t = r.dur) {
                    const o = this._scroll;
                    o && (0, l.doAnimate)({
                        onStep(e, t) {
                            o.scrollTop = t
                        },
                        from: o.scrollTop,
                        to: Math.round(e),
                        easing: r.easingFunc.easeInOutCubic,
                        duration: t
                    })
                }
                render() {
                    const {
                        children: e,
                        isVisibleScrollbar: t,
                        isVisibleFade: o,
                        isVisibleButtons: n,
                        onMouseOver: l,
                        onMouseOut: r
                    } = this.props, {
                        heightContent: u,
                        heightWrap: m,
                        isVisibleBotButton: p,
                        isVisibleTopButton: g
                    } = this.state;
                    return i.createElement(c.Measure, {
                        onResize: this._handleResizeWrap
                    }, (v => i.createElement("div", {
                        className: d.wrap,
                        onMouseOver: l,
                        onMouseOut: r,
                        ref: v
                    }, i.createElement("div", {
                        className: s()(d.scrollWrap, {
                            [d.noScrollBar]: !t
                        }),
                        onScroll: this._handleScroll,
                        ref: e => this._scroll = e
                    }, i.createElement(c.Measure, {
                        onResize: this._handleResizeContent
                    }, (t => i.createElement("div", {
                        className: d.content,
                        ref: t
                    }, e)))), o && i.createElement("div", {
                        className: s()(d.fadeTop, {
                            [d.isVisible]: g && u > m
                        })
                    }), o && i.createElement("div", {
                        className: s()(d.fadeBot, {
                            [d.isVisible]: p && u > m
                        })
                    }), n && i.createElement("div", {
                        className: s()(d.scrollTop, {
                            [d.isVisible]: g && u > m
                        }),
                        onClick: this._handleScrollTop
                    }, i.createElement("div", {
                        className: d.iconWrap
                    }, i.createElement(a.Icon, {
                        icon: h,
                        className: d.icon
                    }))), n && i.createElement("div", {
                        className: s()(d.scrollBot, {
                            [d.isVisible]: p && u > m
                        }),
                        onClick: this._handleScrollBot
                    }, i.createElement("div", {
                        className: d.iconWrap
                    }, i.createElement(a.Icon, {
                        icon: h,
                        className: d.icon
                    }))))))
                }
            }
            u.defaultProps = {
                isVisibleScrollbar: !0
            }
        },
        231656: (e, t, o) => {
            "use strict";
            o.d(t, {
                validateRegistry: () => l,
                RegistryProvider: () => r,
                useRegistry: () => c,
                registryContextType: () => d
            });
            var i = o(50959),
                n = o(719036),
                s = o.n(n);
            const a = i.createContext({});

            function l(e, t) {
                s().checkPropTypes(t, e, "context", "RegistryContext")
            }

            function r(e) {
                const {
                    validation: t,
                    value: o
                } = e;
                return l(o, t), i.createElement(a.Provider, {
                    value: o
                }, e.children)
            }

            function c(e) {
                const t = (0, i.useContext)(a);
                return l(t, e), t
            }

            function d() {
                return a
            }
        },
        238066: (e, t, o) => {
            "use strict";
            o.d(t, {
                convertImageNameToUrl: () => s
            });
            var i = o(495046),
                n = o(66974);

            function s(e) {
                return i.enabled("charting_library_base") || (0, n.isProd)() ? "https://www.tradingview.com/x/" + e + "/" : window.location.protocol + "//" + window.location.host + "/x/" + e + "/"
            }
        },
        628922: (e, t, o) => {
            "use strict";
            o.d(t, {
                setDrawingSyncMode: () => s,
                toggleDrawingSync: () => a
            });
            var i = o(480071),
                n = o(87225);

            function s(e) {
                const {
                    drawOnAllCharts: t,
                    drawOnAllChartsMode: o
                } = (0, i.properties)().childs();
                (0, n.saveDefaultProperties)(!0), o.setValue(e), t.setValue(!0), (0, n.saveDefaultProperties)(!1)
            }

            function a() {
                const {
                    drawOnAllCharts: e
                } = (0, i.properties)().childs();
                (0, n.saveDefaultProperties)(!0), e.setValue(!e.value()), (0, n.saveDefaultProperties)(!1)
            }
        },
        139583: (e, t, o) => {
            "use strict";

            function i(e, t) {
                const o = document.createElement("a");
                o.style.display = "none", o.href = t, o.download = e, o.click()
            }
            o.d(t, {
                downloadFile: () => i
            })
        },
        899280: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.5 6A2.5 2.5 0 0 0 6 8.5v11A2.5 2.5 0 0 0 8.5 22h11a2.5 2.5 0 0 0 2.5-2.5v-3h-1v3c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 7 19.5v-11C7 7.67 7.67 7 8.5 7h3V6h-3zm7 1h4.8l-7.49 7.48.71.7L21 7.72v4.79h1V6h-6.5v1z"/></svg>'
        },
        661380: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" width="20" height="10"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 1l8 8 8-8"/></svg>'
        },
        272644: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.118 6a.5.5 0 0 0-.447.276L9.809 8H5.5A1.5 1.5 0 0 0 4 9.5v10A1.5 1.5 0 0 0 5.5 21h16a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 21.5 8h-4.309l-.862-1.724A.5.5 0 0 0 15.882 6h-4.764zm-1.342-.17A1.5 1.5 0 0 1 11.118 5h4.764a1.5 1.5 0 0 1 1.342.83L17.809 7H21.5A2.5 2.5 0 0 1 24 9.5v10a2.5 2.5 0 0 1-2.5 2.5h-16A2.5 2.5 0 0 1 3 19.5v-10A2.5 2.5 0 0 1 5.5 7h3.691l.585-1.17z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/></svg>'
        },
        751445: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.103.687a1 1 0 0 1 1.794 0l2.374 4.81 5.309.772a1 1 0 0 1 .554 1.706l-3.841 3.745.906 5.287a1 1 0 0 1-1.45 1.054L10 15.565 5.252 18.06A1 1 0 0 1 3.8 17.007l.907-5.287L.866 7.975a1 1 0 0 1 .554-1.706l5.31-.771L9.102.688zM10 1.13L7.393 6.412l-5.829.847 4.218 4.111-.996 5.806L10 14.436l5.214 2.74-.996-5.805 4.218-4.112-5.83-.847L10 1.13z"/></svg>'
        },
        53806: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M12.65 5.1a9.07 9.07 0 0 1 2.7 0 12.44 12.44 0 0 1 2.13 4.61c-1.06.2-2.24.29-3.48.29a18.6 18.6 0 0 1-3.48-.3 12.44 12.44 0 0 1 2.13-4.6Zm-.53-.92a10 10 0 0 0 0 19.65 10.05 10.05 0 0 0 3.76 0 10 10 0 0 0 0-19.65 10.05 10.05 0 0 0-3.76 0Zm4.68 1.26a14.4 14.4 0 0 1 1.66 4.05 7.06 7.06 0 0 0 2.5-1.2 9.01 9.01 0 0 0-4.16-2.85Zm4.75 3.66a8.12 8.12 0 0 1-2.88 1.37 18.93 18.93 0 0 1 0 7.06c1.1.3 2.08.74 2.88 1.37a8.96 8.96 0 0 0 0-9.8Zm-.59 10.6a7.05 7.05 0 0 0-2.5-1.19 14.1 14.1 0 0 1-1.65 4.04 9.01 9.01 0 0 0 4.15-2.85Zm-5.61 3.2a12.27 12.27 0 0 0 2.14-4.61c-1.07-.2-2.25-.29-3.49-.29-1.25 0-2.42.09-3.49.3a12.27 12.27 0 0 0 2.14 4.6 9.06 9.06 0 0 0 2.7 0Zm-4.16-.35a14.1 14.1 0 0 1-1.65-4.03c-.96.27-1.8.66-2.5 1.19a9.01 9.01 0 0 0 4.15 2.84ZM6.45 18.9a8.57 8.57 0 0 1 2.87-1.35 19.19 19.19 0 0 1 .01-7.1A8.58 8.58 0 0 1 6.45 9.1a8.96 8.96 0 0 0 0 9.8Zm.6-10.6a9.01 9.01 0 0 1 4.15-2.86 14.38 14.38 0 0 0-1.65 4.04 7.54 7.54 0 0 1-2.5-1.19ZM10 14c0-1.15.1-2.27.3-3.32 1.17.23 2.42.32 3.7.32 1.27 0 2.53-.09 3.7-.3a17.93 17.93 0 0 1 0 6.61A20 20 0 0 0 14 17c-1.29 0-2.54.09-3.7.32A18.2 18.2 0 0 1 10 14Z"/></svg>'
        },
        439235: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M15.08 5.75a5.07 5.07 0 0 1 7.17 7.17l-3.23 3.23-.7-.7 3.22-3.24a4.07 4.07 0 1 0-5.75-5.75l-3.23 3.23-.7-.71 3.22-3.23Zm-9.33 9.33a5.07 5.07 0 1 0 7.17 7.17l3.23-3.23-.7-.7-3.24 3.22a4.07 4.07 0 1 1-5.75-5.75l3.23-3.23-.71-.7-3.23 3.22Zm10.77-4.3-5.74 5.74.7.7 5.75-5.74-.71-.7Z"/></svg>'
        },
        323595: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M6.5 16v4.5a1 1 0 001 1h14a1 1 0 001-1V16M14.5 5V17m-4-3.5l4 4l4-4"/></svg>'
        },
        929414: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M19 15l2.5-2.5c1-1 1.5-3.5-.5-5.5s-4.5-1.5-5.5-.5L13 9M10 12l-2.5 2.5c-1 1-1.5 3.5.5 5.5s4.5 1.5 5.5.5L16 18M17 11l-5 5"/></svg>'
        },
        884502: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="#1DA1F2" d="M10.28 22.26c7.55 0 11.68-6.26 11.68-11.67v-.53c.8-.58 1.49-1.3 2.04-2.13-.74.33-1.53.54-2.36.65.85-.5 1.5-1.32 1.8-2.28-.78.48-1.66.81-2.6 1a4.1 4.1 0 00-7 3.74c-3.4-.17-6.43-1.8-8.46-4.29a4.1 4.1 0 001.28 5.48c-.68-.02-1.3-.2-1.86-.5v.05a4.11 4.11 0 003.29 4.02 4 4 0 01-1.85.08 4.1 4.1 0 003.83 2.85A8.23 8.23 0 014 20.43a11.67 11.67 0 006.28 1.83z"/></svg>'
        }
    }
]);
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [84871], {
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
        288798: e => {
            e.exports = {
                "icon-wrapper": "icon-wrapper-Y27sEArj",
                "no-active-state": "no-active-state-Y27sEArj",
                "with-tooltip": "with-tooltip-Y27sEArj",
                "intent-default": "intent-default-Y27sEArj",
                "intent-danger": "intent-danger-Y27sEArj",
                "intent-warning": "intent-warning-Y27sEArj",
                "intent-success": "intent-success-Y27sEArj",
                icon: "icon-Y27sEArj"
            }
        },
        281427: e => {
            e.exports = {
                wrap: "wrap-jVaj_zta",
                icon: "icon-jVaj_zta",
                text: "text-jVaj_zta",
                disabled: "disabled-jVaj_zta"
            }
        },
        151567: e => {
            e.exports = {
                hasTooltip: "hasTooltip-_jOPqs8j",
                uppercase: "uppercase-_jOPqs8j"
            }
        },
        507697: e => {
            e.exports = {
                wrap: "wrap-CcYH2FIb"
            }
        },
        306815: e => {
            e.exports = {
                checkbox: "checkbox-mzBlcrjf",
                title: "title-mzBlcrjf"
            }
        },
        609896: e => {
            e.exports = {
                hintButton: "hintButton-BoIR13Nf"
            }
        },
        531428: e => {
            e.exports = {}
        },
        982730: e => {
            e.exports = {}
        },
        600201: e => {
            e.exports = {
                container: "container-tw1GGG9z",
                icon: "icon-tw1GGG9z",
                tooltip: "tooltip-tw1GGG9z",
                date: "date-tw1GGG9z",
                time: "time-tw1GGG9z"
            }
        },
        324808: e => {
            e.exports = {
                tooltip: "tooltip-EMjdjo5B"
            }
        },
        287429: e => {
            e.exports = {
                wrap: "wrap-MeRSNRqP",
                input: "input-MeRSNRqP"
            }
        },
        862774: e => {
            e.exports = {
                icon: "icon-FGiNit7J"
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
        897782: (e, t, n) => {
            "use strict";
            n.d(t, {
                NavButton: () => c
            });
            var o = n(50959),
                r = n(497754),
                a = n(83436),
                l = n(906189);

            function s(e) {
                const {
                    size: t = "large",
                    preservePaddings: n,
                    isLink: o,
                    flipIconOnRtl: a,
                    className: s
                } = e;
                return r(l["nav-button"], l[`size-${t}`], n && l["preserve-paddings"], a && l["flip-icon"], o && l.link, s)
            }

            function i(e) {
                const {
                    children: t,
                    icon: n
                } = e;
                return o.createElement(o.Fragment, null, o.createElement("span", {
                    className: l.background
                }), o.createElement(a.Icon, {
                    icon: n,
                    className: l.icon,
                    "aria-hidden": !0
                }), t && o.createElement("span", {
                    className: l["visually-hidden"]
                }, t))
            }
            const c = (0, o.forwardRef)(((e, t) => {
                const {
                    icon: n,
                    type: r = "button",
                    preservePaddings: a,
                    flipIconOnRtl: l,
                    size: c,
                    "aria-label": u,
                    ...p
                } = e;
                return o.createElement("button", { ...p,
                    className: s({ ...e,
                        children: u
                    }),
                    ref: t,
                    type: r
                }, o.createElement(i, {
                    icon: n
                }, u))
            }));
            c.displayName = "NavButton";
            var u = n(14388),
                p = n(551080);
            (0, o.forwardRef)(((e, t) => {
                const {
                    icon: n,
                    renderComponent: r,
                    "aria-label": a,
                    ...l
                } = e, c = null != r ? r : u.CustomComponentDefaultLink;
                return o.createElement(c, { ...l,
                    className: s({ ...e,
                        children: a,
                        isLink: !0
                    }),
                    reference: (0, p.isomorphicRef)(t)
                }, o.createElement(i, {
                    icon: n
                }, a))
            })).displayName = "NavAnchorButton"
        },
        238718: (e, t, n) => {
            "use strict";
            n.d(t, {
                useRefsMap: () => r
            });
            var o = n(50959);

            function r() {
                const e = (0, o.useRef)(new Map),
                    t = (0, o.useCallback)((t => n => {
                        null !== n ? e.current.set(t, n) : e.current.delete(t)
                    }), [e]);
                return [e, t]
            }
        },
        480192: (e, t, n) => {
            "use strict";
            n.d(t, {
                IconQuestionInformation: () => w,
                IconQuestionInformationButton: () => y,
                IconQuestionInformationLink: () => C
            });
            var o = n(50959),
                r = n(497754),
                a = n.n(r),
                l = n(83436),
                s = n(167175);

            function i() {
                const [e, t] = (0, o.useState)(!1);
                return (0, o.useEffect)((() => {
                    t(s.mobiletouch)
                }), []), e
            }
            var c = n(834995),
                u = n(662929),
                p = n(482353),
                d = n(527941),
                m = n(499084),
                f = n(530162),
                h = n(288798),
                g = n.n(h);
            const v = {
                info: d,
                question: p,
                check: m,
                exclamation: f
            };

            function b(e) {
                return o.createElement("span", { ...(0, c.renameRef)(e),
                    className: r(e.className, g()["no-active-state"])
                })
            }

            function w(e) {
                const {
                    icon: t,
                    intent: n = "default",
                    ariaLabel: a,
                    tooltip: s,
                    className: c,
                    reference: p,
                    showTooltipOnTouch: d = !0,
                    renderComponent: m = b,
                    showTooltip: f,
                    hideTooltip: h,
                    onFocus: w,
                    onBlur: C,
                    onClick: y
                } = e, E = i() ? d : Boolean(s), N = o.useRef(null), T = (0, u.useMergedRefs)([p, N]), S = function(e) {
                    const {
                        showTooltip: t,
                        hideTooltip: n,
                        onFocus: r,
                        onBlur: a,
                        onClick: l,
                        ref: s
                    } = e, c = i();
                    return {
                        onBlur: (0, o.useCallback)((e => {
                            n && n(), a && a(e)
                        }), [n, a]),
                        onFocus: (0, o.useCallback)((e => {
                            t && t(e.currentTarget, {
                                tooltipDelay: 200
                            }), r && r(e)
                        }), [t, r]),
                        onClick: (0, o.useCallback)((e => {
                            var t;
                            c && (null === (t = s.current) || void 0 === t || t.focus()), l && l(e)
                        }), [l]),
                        tabIndex: 0
                    }
                }({
                    showTooltip: f,
                    hideTooltip: h,
                    onFocus: w,
                    onBlur: C,
                    onClick: y,
                    ref: N
                }), x = o.useMemo((() => function(e, t) {
                    return t ? v[t] : "success" === e ? v.check : v.exclamation
                }(n, t)), [t, n]);
                return o.createElement(m, {
                    className: r(c, g()["icon-wrapper"], g()[`intent-${n}`], E && s && g()["with-tooltip"], E && s && "apply-common-tooltip"),
                    title: E ? s : void 0,
                    "aria-label": a,
                    reference: T,
                    ...S
                }, o.createElement(l.Icon, {
                    "aria-hidden": !0,
                    icon: x,
                    className: g().icon
                }))
            }

            function C(e) {
                const {
                    href: t,
                    rel: n,
                    target: r,
                    ...a
                } = e, l = (0, o.useMemo)((() => e => o.createElement("a", {
                    href: t,
                    rel: n,
                    target: r,
                    ...(0, c.renameRef)(e)
                })), [t, n, r]);
                return o.createElement(w, { ...a,
                    renderComponent: l,
                    showTooltipOnTouch: !1
                })
            }

            function y(e) {
                const {
                    withActiveState: t = !1,
                    className: n,
                    ...r
                } = e, l = (0, o.useMemo)((() => e => o.createElement("button", { ...(0, c.renameRef)(e),
                    type: "button"
                })), []);
                return o.createElement(w, { ...r,
                    renderComponent: l,
                    className: a()(n, !t && g()["no-active-state"])
                })
            }
        },
        318383: (e, t, n) => {
            "use strict";
            n.d(t, {
                EditButton: () => i
            });
            var o = n(50959),
                r = n(497754),
                a = n(83436),
                l = n(93929),
                s = n(281427);

            function i(e) {
                const {
                    value: t,
                    onClick: n,
                    className: i,
                    startSlot: c,
                    disabled: u = !1
                } = e;
                return o.createElement("div", {
                    className: r(s.wrap, u && s.disabled, i),
                    onClick: n,
                    "data-name": "edit-button"
                }, o.createElement("div", {
                    className: r(s.text, "apply-overflow-tooltip")
                }, void 0 !== c && c, o.createElement("span", null, t)), o.createElement(a.Icon, {
                    icon: l,
                    className: s.icon
                }))
            }
        },
        364979: (e, t, n) => {
            "use strict";
            n.d(t, {
                SymbolInputsButton: () => E
            });
            var o = n(50959),
                r = n(497754),
                a = n.n(r),
                l = n(777754),
                s = n(650151),
                i = n(670797),
                c = n(8629),
                u = n(495046),
                p = n(381720),
                d = n(944586),
                m = n(831350),
                f = n(318383),
                h = n(545566),
                g = n(419471),
                v = n(889267),
                b = n(296652),
                w = n(494966),
                C = n(151567);

            function y(e) {
                const {
                    symbol: t,
                    onSymbolChanged: r,
                    disabled: s,
                    className: p
                } = e, [h, g] = (0, o.useState)(t), y = (0, o.useContext)(i.SlotContext), E = (0, o.useContext)(c.PopupContext);
                return o.createElement(f.EditButton, {
                    value: h,
                    onClick: function() {
                        const e = function(e) {
                                const t = (0, v.tokenize)(e);
                                return (0, b.isSpread)(t)
                            }(h) ? h : (0, w.safeShortName)(h),
                            t = (0, d.getSymbolSearchCompleteOverrideFunction)();
                        (0, m.showSymbolSearchItemsDialog)({
                            onSearchComplete: e => {
                                t(e[0].symbol, e[0].result).then((e => {
                                    r(e.symbol), g(e.name)
                                }))
                            },
                            dialogTitle: l.t(null, void 0, n(423398)),
                            defaultValue: e,
                            manager: y,
                            onClose: () => {
                                E && E.focus()
                            },
                            showSpreadActions: u.enabled("show_spread_operators") && u.enabled("studies_symbol_search_spread_operators")
                        })
                    },
                    disabled: s,
                    className: a()(p, u.enabled("uppercase_instrument_names") && C.uppercase)
                })
            }

            function E(e) {
                if ("definition" in e) {
                    const {
                        propType: t,
                        properties: n,
                        id: r,
                        title: a = "",
                        solutionId: l
                    } = e.definition, i = n[t], c = i.value() || "", u = e => {
                        i.setValue(e)
                    };
                    return o.createElement(h.CommonSection, {
                        id: r,
                        title: a,
                        solutionId: l
                    }, o.createElement(g.CellWrap, null, o.createElement(y, {
                        symbol: (0, s.ensureDefined)(c),
                        onSymbolChanged: u
                    })))
                } {
                    const {
                        study: t,
                        value: n,
                        input: {
                            id: r,
                            name: l
                        },
                        onChange: i,
                        disabled: c,
                        hasTooltip: u
                    } = e, d = e => {
                        const n = (0, p.getInternalSymbolName)(e, t);
                        i(n, r, l)
                    };
                    return o.createElement(y, {
                        symbol: (0, s.ensureDefined)(n),
                        onSymbolChanged: d,
                        disabled: c,
                        className: a()(u && C.hasTooltip)
                    })
                }
            }
        },
        831350: (e, t, n) => {
            "use strict";
            n.d(t, {
                showSymbolSearchItemsDialog: () => c
            });
            var o = n(50959),
                r = n(500962),
                a = n(670797),
                l = n(322654),
                s = n(963644),
                i = n(950186);

            function c(e) {
                const {
                    initialMode: t = "symbolSearch",
                    autofocus: n = !0,
                    defaultValue: c,
                    showSpreadActions: u,
                    selectSearchOnInit: p,
                    onSearchComplete: d,
                    dialogTitle: m,
                    placeholder: f,
                    fullscreen: h,
                    initialScreen: g,
                    wrapper: v,
                    dialog: b,
                    contentItem: w,
                    onClose: C,
                    footer: y,
                    symbolTypes: E,
                    searchInput: N,
                    emptyState: T,
                    hideMarkedListFlag: S,
                    dialogWidth: x = "auto",
                    manager: I
                } = e;
                if (l.dialogsOpenerManager.isOpened("SymbolSearch") || l.dialogsOpenerManager.isOpened("ChangeIntervalDialog") || (0, s.isSignModalOpen)()) return;
                const k = document.createElement("div"),
                    R = o.createElement(a.SlotContext.Provider, {
                        value: null != I ? I : null
                    }, o.createElement(i.SymbolSearchItemsDialog, {
                        onClose: P,
                        initialMode: t,
                        defaultValue: c,
                        showSpreadActions: u,
                        hideMarkedListFlag: S,
                        selectSearchOnInit: p,
                        onSearchComplete: d,
                        dialogTitle: m,
                        placeholder: f,
                        fullscreen: h,
                        initialScreen: g,
                        wrapper: v,
                        dialog: b,
                        contentItem: w,
                        footer: y,
                        symbolTypes: E,
                        searchInput: N,
                        emptyState: T,
                        autofocus: n,
                        dialogWidth: x
                    }));

                function P() {
                    r.unmountComponentAtNode(k), l.dialogsOpenerManager.setAsClosed("SymbolSearch"), C && C()
                }
                return r.render(R, k), l.dialogsOpenerManager.setAsOpened("SymbolSearch"), {
                    close: P
                }
            }
        },
        52498: (e, t, n) => {
            "use strict";
            n.d(t, {
                createAdapter: () => a
            });
            var o = n(289397),
                r = n(562726);

            function a(e) {
                if ((0, o.isLineTool)(e)) return {
                    isPine: () => !1,
                    isStandardPine: () => !1,
                    canOverrideMinTick: () => !1,
                    resolvedSymbolInfoBySymbol: () => {
                        throw new TypeError("Only study is supported.")
                    },
                    symbolsResolved: () => {
                        throw new TypeError("Only study is supported.")
                    },
                    parentSources: () => {
                        throw new TypeError("Only study is supported.")
                    },
                    getAllChildren: () => [],
                    sourceId: () => {
                        throw new TypeError("Only study is supported.")
                    },
                    inputs: () => ({}),
                    parentSourceForInput: () => {
                        throw new TypeError("Only study is supported.")
                    }
                };
                if ((0, r.isStudy)(e)) return e;
                if ("isInputsStudy" in e) return e;
                throw new TypeError("Unsupported source type.")
            }
        },
        120610: (e, t, n) => {
            "use strict";
            n.d(t, {
                useDefinitionProperty: () => a
            });
            var o = n(50959),
                r = n(898005);
            const a = e => {
                const t = "property" in e ? e.property : void 0,
                    n = "defaultValue" in e ? e.defaultValue : e.property.value(),
                    [a, l] = (0, o.useState)(t ? t.value() : n);
                (0, o.useEffect)((() => {
                    if (t) {
                        const n = {};
                        return l(t.value()), t.subscribe(n, (t => {
                            const n = t.value();
                            e.handler && e.handler(n), l(n)
                        })), () => t.unsubscribeAll(n)
                    }
                    return () => {}
                }), [t]);
                return [a, e => {
                    if (void 0 !== t) {
                        const n = t.value();
                        r.logger.logNormal(`Changing property value from "${n}" to "${e}"`), t.setValue(e)
                    }
                }]
            }
        },
        419471: (e, t, n) => {
            "use strict";
            n.d(t, {
                CellWrap: () => s
            });
            var o = n(50959),
                r = n(497754),
                a = n.n(r),
                l = n(507697);

            function s(e) {
                return o.createElement("div", {
                    className: a()(l.wrap, e.className)
                }, e.children)
            }
        },
        451505: (e, t, n) => {
            "use strict";
            n.d(t, {
                CheckableTitle: () => c
            });
            var o = n(50959),
                r = n(182120),
                a = n(120610);

            function l(e) {
                const {
                    property: t,
                    ...n
                } = e, [l, s] = (0, a.useDefinitionProperty)({
                    property: t
                }), i = "mixed" === l;
                return o.createElement(r.Checkbox, { ...n,
                    name: "toggle-enabled",
                    checked: i || l,
                    indeterminate: i,
                    onChange: function() {
                        s("mixed" === l || !l)
                    }
                })
            }
            var s = n(419471),
                i = n(306815);

            function c(e) {
                const {
                    property: t,
                    disabled: n,
                    title: r,
                    className: a,
                    name: c
                } = e, u = o.createElement("span", {
                    className: i.title
                }, r);
                return o.createElement(s.CellWrap, {
                    className: a
                }, t ? o.createElement(l, {
                    name: c,
                    className: i.checkbox,
                    property: t,
                    disabled: n,
                    label: u,
                    labelAlignBaseline: !0
                }) : u)
            }
        },
        545566: (e, t, n) => {
            "use strict";
            n.d(t, {
                CommonSection: () => i
            });
            var o = n(50959),
                r = n(561709),
                a = n(451505),
                l = n(330213),
                s = n(609896);

            function i(e) {
                const {
                    id: t,
                    offset: n,
                    disabled: i,
                    checked: c,
                    title: u,
                    children: p,
                    solutionId: d
                } = e;
                return o.createElement(r.PropertyTable.Row, null, o.createElement(r.PropertyTable.Cell, {
                    placement: "first",
                    verticalAlign: "adaptive",
                    offset: n,
                    "data-section-name": t,
                    colSpan: Boolean(p) ? void 0 : 2,
                    checkableTitle: !0
                }, o.createElement(a.CheckableTitle, {
                    name: `is-enabled-${t}`,
                    title: u,
                    disabled: i,
                    property: c
                }), d && !Boolean(p) && o.createElement(l.HintButton, {
                    solutionId: d,
                    className: s.hintButton
                })), Boolean(p) && o.createElement(r.PropertyTable.Cell, {
                    placement: "last",
                    "data-section-name": t
                }, p, d && o.createElement(l.HintButton, {
                    solutionId: d,
                    className: s.hintButton
                })))
            }
        },
        898005: (e, t, n) => {
            "use strict";
            n.d(t, {
                logger: () => o
            });
            const o = (0, n(272001).getLogger)("Platform.GUI.PropertyDefinitionTrace")
        },
        495450: (e, t, n) => {
            "use strict";
            n.d(t, {
                getTimezoneName: () => a,
                getChartTimezoneOffsetMs: () => l,
                getChartTimezoneOffsetSec: () => s
            });
            var o = n(747342),
                r = n.n(o);

            function a(e) {
                const t = e.model().timezone();
                if ("exchange" !== t) return t;
                const n = e.model().mainSeries().symbolInfo();
                return null == n ? void 0 : n.timezone
            }

            function l(e, t) {
                if (void 0 === t) return 0;
                return r().get_timezone(t).offset_utc(e)
            }

            function s(e, t) {
                return l(1e3 * e, t) / 1e3
            }
        },
        46926: (e, t, n) => {
            "use strict";
            n.d(t, {
                CircleLogoPair: () => a
            });
            var o = n(50959),
                r = n(439378);
            n(531428);

            function a(e) {
                const {
                    primaryLogoUrl: t,
                    secondaryLogoUrl: n,
                    size: a,
                    className: s
                } = e;
                return o.createElement("span", {
                    className: (0, r.getBlockStyleClasses)(a, s),
                    title: e.title
                }, o.createElement(l, {
                    logoUrl: n,
                    size: a
                }), o.createElement(l, {
                    logoUrl: t,
                    size: a
                }))
            }

            function l(e) {
                const {
                    logoUrl: t,
                    size: n
                } = e, a = (0, r.getLogoStyleClasses)(n);
                return void 0 === t ? o.createElement("span", {
                    className: a
                }) : o.createElement("img", {
                    className: a,
                    src: t,
                    alt: ""
                })
            }
        },
        439378: (e, t, n) => {
            "use strict";
            n.d(t, {
                getBlockStyleClasses: () => r,
                getLogoStyleClasses: () => a
            });
            var o = n(497754);

            function r(e, t) {
                return o("tv-circle-logo-pair", `tv-circle-logo-pair--${e}`, t)
            }

            function a(e, t) {
                return o("tv-circle-logo-pair__logo", `tv-circle-logo-pair__logo--${e}`, !t && "tv-circle-logo-pair__logo-empty")
            }
        },
        495217: (e, t, n) => {
            "use strict";
            n.d(t, {
                CircleLogo: () => a
            });
            var o = n(50959),
                r = n(783036);
            n(982730);

            function a(e) {
                var t, n;
                const a = (0, r.getStyleClasses)(e.size, e.className),
                    l = null !== (n = null !== (t = e.alt) && void 0 !== t ? t : e.title) && void 0 !== n ? n : "";
                return (0, r.isCircleLogoWithUrlProps)(e) ? o.createElement("img", {
                    className: a,
                    src: e.logoUrl,
                    alt: l,
                    title: e.title,
                    loading: e.loading
                }) : o.createElement("span", {
                    className: a,
                    title: e.title
                }, e.placeholderLetter)
            }
        },
        783036: (e, t, n) => {
            "use strict";
            n.d(t, {
                getStyleClasses: () => r,
                isCircleLogoWithUrlProps: () => a
            });
            var o = n(497754);

            function r(e, t) {
                return o("tv-circle-logo", `tv-circle-logo--${e}`, t)
            }

            function a(e) {
                return "logoUrl" in e && void 0 !== e.logoUrl && 0 !== e.logoUrl.length
            }
        },
        668669: (e, t, n) => {
            "use strict";
            n.d(t, {
                DEFAULT_INPUT_DATE_THEME: () => m,
                DateInput: () => f
            });
            var o = n(50959),
                r = n(777754),
                a = n(83436),
                l = n(514420),
                s = n(342353),
                i = n(497754),
                c = n.n(i),
                u = n(324808);

            function p(e) {
                const {
                    className: t,
                    text: n
                } = e;
                return o.createElement("span", {
                    className: c()(u.tooltip, t)
                }, n)
            }
            var d = n(598475);
            const m = n(600201);

            function f(e) {
                const {
                    hasErrors: t,
                    onClick: i,
                    errors: c,
                    className: u,
                    theme: f = m,
                    ...h
                } = e;
                return o.createElement("div", {
                    className: f.container,
                    onClick: i
                }, o.createElement(s.FormInput, { ...h,
                    className: f.date,
                    hasErrors: t,
                    errors: [],
                    endSlot: !t && o.createElement(l.EndSlot, {
                        icon: !0,
                        interactive: !1
                    }, o.createElement(a.Icon, {
                        icon: d,
                        className: f.icon
                    }))
                }), t && o.createElement(p, {
                    text: r.t(null, void 0, n(732457)),
                    className: f.tooltip
                }))
            }
        },
        330213: (e, t, n) => {
            "use strict";
            n.d(t, {
                HintButton: () => i
            });
            var o = n(50959),
                r = n(777754),
                a = n(834995),
                l = n(480192),
                s = n(664224);

            function i(e) {
                const {
                    solutionId: t,
                    title: a = r.t(null, void 0, n(576273)),
                    className: s
                } = e;
                return o.createElement(l.IconQuestionInformation, {
                    icon: "question",
                    ariaLabel: a,
                    tooltip: a,
                    className: s,
                    renderComponent: c(t)
                })
            }

            function c(e) {
                return n => o.createElement("a", { ...(0, a.renameRef)(n),
                    href: `?solution=${e}`,
                    onClick: t
                });

                function t(t) {
                    t.preventDefault(), (0, s.showSupportDialog)({
                        solutionId: e
                    })
                }
            }
        },
        170140: (e, t, n) => {
            "use strict";
            n.d(t, {
                TimeInput: () => D
            });
            var o = n(638456),
                r = n(50959),
                a = n(497754),
                l = n.n(a),
                s = n(650151),
                i = n(763341),
                c = n(514420),
                u = n(142135),
                p = n(83436),
                d = n(862774),
                m = n(595096);

            function f(e) {
                return r.createElement(p.Icon, {
                    className: d.icon,
                    icon: m
                })
            }
            var h = n(405964),
                g = n(287429);
            var v = n(951292),
                b = n(43329);
            const w = {
                0: {
                    pattern: /\d/
                },
                9: {
                    pattern: /\d/,
                    optional: !0
                },
                "#": {
                    pattern: /\d/,
                    recursive: !0
                },
                A: {
                    pattern: /[a-zA-Z0-9]/
                },
                S: {
                    pattern: /[a-zA-Z]/
                }
            };

            function C(e, t, n) {
                const o = [],
                    r = n;
                let a = 0,
                    l = 0;
                const s = e.length,
                    i = r.length;
                let c = -1,
                    u = 0;
                const p = [],
                    d = s - 1,
                    m = [];
                let f;
                for (; a < s && l < i;) {
                    const n = e.charAt(a),
                        s = r.charAt(l),
                        i = w[n];
                    i ? (s.match(i.pattern) ? (o.push(s), i.recursive && (-1 === c ? c = a : a === d && a !== c && (a = c - 1), d === c && (a -= 1)), a += 1) : s === f ? (u--, f = void 0) : i.optional ? (a += 1, l -= 1) : i.fallback ? (o.push(i.fallback), a += 1, l -= 1) : m.push({
                        p: l,
                        v: s,
                        e: i.pattern
                    }), l += 1) : (t || o.push(n), s === n ? (p.push(l), l += 1) : (f = n, p.push(l + u), u++), a += 1)
                }
                const h = e.charAt(d);
                s !== i + 1 || w[h] || o.push(h);
                const g = o.join(""),
                    v = function(e, t) {
                        const n = 0,
                            o = {};
                        for (let e = 0; e < t.length; e++) o[t[e] + n] = 1;
                        return o
                    }(0, p);
                return [g, v, m]
            }

            function y(e, t, n) {
                const o = function(e) {
                        let t = !0;
                        for (let n = 0; n < e.length; n++) {
                            const o = w[e.charAt(n)];
                            if (o && o.recursive) {
                                t = !1;
                                break
                            }
                        }
                        return t ? e.length : void 0
                    }(e),
                    [a, l] = C(e, !1, t),
                    [i, c] = (0, r.useState)(a),
                    [u, p] = (0, r.useState)(0),
                    [d, m] = (0, r.useState)(!1),
                    f = (0, r.useRef)(l),
                    h = (0, r.useRef)(i);
                return (0, r.useEffect)((() => {
                    const [n, o] = C(e, !1, t);
                    c(n), g(o)
                }), [t, e]), (0, r.useLayoutEffect)((() => {
                    const e = (0, s.ensureNotNull)(n.current);
                    d && (e.setSelectionRange(u, u), m(!1)), p(E(e))
                }), [d]), [t, h, {
                    onChange: function() {
                        const t = (0, s.ensureNotNull)(n.current),
                            o = t.value,
                            [r, a] = C(e, !1, o);
                        c(r), h.current = r;
                        const l = g(a),
                            d = function(e, t, n, o, r, a) {
                                if (e !== t) {
                                    const l = t.length,
                                        s = e.length;
                                    let i = 0,
                                        c = 0,
                                        u = 0,
                                        p = 0,
                                        d = 0;
                                    for (d = o; d < l && r[d]; d++) c++;
                                    for (d = o - 1; d >= 0 && r[d]; d--) i++;
                                    for (d = o - 1; d >= 0; d--) r[d] && u++;
                                    for (d = n - 1; d >= 0; d--) a[d] && p++;
                                    if (o > s) o = 10 * l;
                                    else if (n >= o && n !== s) {
                                        if (a[o]) {
                                            const e = o;
                                            o -= p - u, r[o -= i] && (o = e)
                                        }
                                    } else o > n && (o += u - p, o += c)
                                }
                                return o
                            }(i, r, u, E(t), a, l);
                        p(d), m(!0)
                    },
                    onSelect: function() {
                        const e = (0, s.ensureNotNull)(n.current);
                        p(E(e))
                    },
                    maxLength: o
                }];

                function g(e) {
                    const t = f.current;
                    return f.current = e, t
                }
            }

            function E(e) {
                return e.selectionStart || 0
            }

            function N(e) {
                const {
                    value: t,
                    mask: n,
                    onChange: o,
                    ...a
                } = e, l = (0, r.useRef)(null), [s, i, c] = y(n, t, l);
                return (0, r.useLayoutEffect)((() => {
                    void 0 !== e.reference && (e.reference.current = l.current)
                }), [e.reference]), r.createElement(u.InputControl, { ...a,
                    maxLength: c.maxLength,
                    value: s,
                    autoComplete: "off",
                    reference: function(e) {
                        l.current = e
                    },
                    onChange: function() {
                        c.onChange(), o(i.current)
                    },
                    onSelect: c.onSelect
                })
            }
            var T = n(470316),
                S = n(45968),
                x = n(634993),
                I = n(923195);
            const k = (() => {
                const e = [];
                for (let t = 0; t < 24; ++t)
                    for (let n = 0; n < 60; n += 15) {
                        const [o, r] = [L(t.toString()), L(n.toString())], a = `${o}:${r}`, l = z(a) ? a : B(a);
                        e.push(l)
                    }
                return e
            })();

            function R(e) {
                let t = !1;
                const n = (0, r.useRef)(null),
                    o = (0, r.useRef)(null),
                    a = (0, r.useRef)(null),
                    i = (0, r.useRef)(null),
                    [u, p] = (0, h.useFocus)(),
                    [d, m] = (0, r.useState)(e.value),
                    g = P(d),
                    w = z(g) ? g : B(g),
                    [C, y] = (0, r.useState)(w),
                    E = u || G().some((e => null !== e && e.contains(document.activeElement)));
                (0, r.useLayoutEffect)((() => m(e.value)), [e.value]), (0, r.useLayoutEffect)((() => y(w)), [d, E]), (0, r.useEffect)((() => _(C === w ? "auto" : "smooth")), [C]);
                const R = (0, I.lowerbound)(k, w, ((e, t) => e < t));
                let L = k;
                k[R] !== w && (L = [...k], L.splice(R, 0, w));
                const A = (0,
                    v.useOutsideEvent)({
                    mouseDown: !0,
                    touchStart: !0,
                    handler: function(e) {
                        null !== o.current && E && e.target instanceof Node && null !== a.current && !a.current.contains(e.target) && o.current.blur()
                    }
                });
                return r.createElement("div", {
                    className: l()(e.className),
                    onKeyDown: function(e) {
                        if (e.defaultPrevented) return;
                        const t = (0, T.hashFromEvent)(e.nativeEvent);
                        if (38 === t) {
                            e.preventDefault();
                            const t = (L.indexOf(C) + L.length - 1) % L.length;
                            y(L[t])
                        }
                        if (40 === t) {
                            e.preventDefault();
                            const t = (L.indexOf(C) + L.length + 1) % L.length;
                            y(L[t])
                        }
                    },
                    onFocus: function(e) {
                        j(e) || p.onFocus(e)
                    },
                    onBlur: function(e) {
                        j(e) || p.onBlur(e)
                    },
                    ref: A
                }, r.createElement(N, {
                    disabled: e.disabled,
                    name: e.name,
                    endSlot: r.createElement(c.EndSlot, {
                        icon: !0
                    }, r.createElement(f, null)),
                    reference: o,
                    containerReference: n,
                    mask: "09:00",
                    value: d,
                    onFocus: function(e) {
                        setTimeout(O, 0)
                    },
                    onBlur: function(e) {
                        j(e) || D(d)
                    },
                    onChange: function(t) {
                        m(t), e.onInput && e.onInput(t)
                    },
                    onKeyDown: function(e) {
                        if (e.defaultPrevented) return;
                        const t = (0, T.hashFromEvent)(e.nativeEvent);
                        13 === t && (e.preventDefault(), D(C), (0, s.ensureNotNull)(o.current).blur());
                        27 === t && (e.preventDefault(), (0, s.ensureNotNull)(o.current).blur())
                    }
                }), r.createElement(S.PopupMenu, {
                    onOpen: function() {
                        _()
                    },
                    onClose: function() {},
                    position: function() {
                        const e = (0, s.ensureNotNull)(n.current).getBoundingClientRect(),
                            t = window.innerHeight - e.bottom,
                            o = e.top;
                        let r = 231,
                            a = e.bottom;
                        if (r > o && r > t) {
                            const n = (0, b.clamp)(r, 0, o),
                                l = (0, b.clamp)(r, 0, t);
                            r = Math.max(n, l), a = n > l ? e.top - n : e.bottom
                        } else r > t && (a = e.top - r);
                        return {
                            x: e.left,
                            y: a,
                            overrideWidth: e.width,
                            overrideHeight: r
                        }
                    },
                    closeOnClickOutside: !1,
                    isOpened: E,
                    tabIndex: -1,
                    reference: a
                }, L.map((e => r.createElement(x.PopupMenuItem, {
                    key: e,
                    label: e,
                    isActive: e === w,
                    isHovered: e === C,
                    reference: e === C ? H : void 0,
                    onClick: M,
                    onClickArg: e
                })))));

                function D(n) {
                    const o = P(n),
                        r = z(o) ? o : B(o);
                    m(r), t || (t = !0, e.onChange(r))
                }

                function H(e) {
                    i.current = e
                }

                function M(e) {
                    D((0, s.ensureDefined)(e)), (0, s.ensureNotNull)(a.current).blur()
                }

                function j(e) {
                    return u && (null !== V(document.activeElement) || null !== V(e.relatedTarget))
                }

                function V(e) {
                    return e instanceof Node && G().find((t => null !== t && t.contains(e))) || null
                }

                function G() {
                    return [a.current, o.current]
                }

                function _(e = "auto") {
                    if (null !== i.current) {
                        const t = (0, s.ensureNotNull)(a.current).getBoundingClientRect(),
                            n = i.current.getBoundingClientRect();
                        (t.top > n.top || t.bottom < n.bottom) && i.current.scrollIntoView({
                            behavior: e
                        })
                    }
                }

                function O() {
                    const e = o.current;
                    if (null !== e) {
                        const t = e.value || "";
                        e.setSelectionRange(0, t.length)
                    }
                }
            }

            function P(e) {
                const [t = "", n = ""] = e.split(":"), [o, r] = [L(t), A(n)];
                return `${o}:${r}`
            }

            function z(e) {
                return /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/g.test(e)
            }

            function B(e) {
                const [t, n] = e.split(":"), [o, r] = [(0, b.clamp)(parseInt(t), 0, 23), (0, b.clamp)(parseInt(n), 0, 59)], [a, l] = [L(o.toString()), A(r.toString())];
                return `${a}:${l}`
            }

            function L(e) {
                return e.slice(0, 2).padStart(2, "0")
            }

            function A(e) {
                return e.slice(0, 2).padEnd(2, "0")
            }
            const D = o.CheckMobile.any() ? function(e) {
                const {
                    onChange: t,
                    onFocus: n,
                    value: o,
                    className: a,
                    ...p
                } = e, d = (0, r.useRef)(null), [m, v] = (0, h.useFocus)(), b = (0, i.createSafeMulticastEventHandler)(v.onBlur, (function() {
                    d.current && o && (d.current.defaultValue = o)
                }));
                return (0, r.useLayoutEffect)((() => {
                    d.current && o && (d.current.defaultValue = o)
                }), []), (0, r.useLayoutEffect)((() => {
                    d.current && o && (d.current.value = o)
                }), [o]), r.createElement("div", {
                    className: l()(g.wrap, a)
                }, r.createElement(u.InputControl, { ...p,
                    type: "text",
                    endSlot: r.createElement(c.EndSlot, {
                        icon: !0
                    }, r.createElement(f, null)),
                    value: o,
                    highlight: m,
                    intent: m ? "primary" : void 0,
                    onFocus: function(e) {
                        (0, s.ensureNotNull)(d.current).focus(), n && n(e)
                    },
                    onChange: function() {}
                }), r.createElement("input", { ...v,
                    disabled: e.disabled,
                    className: g.input,
                    type: "time",
                    onBlur: b,
                    onChange: function(e) {
                        const {
                            value: n
                        } = e.currentTarget;
                        t && n && t(n)
                    },
                    ref: d
                }))
            } : R
        },
        12173: (e, t, n) => {
            "use strict";
            n.d(t, {
                TooltipWizard: () => c,
                TooltipWidget: () => u
            });
            var o = n(50959),
                r = n(497754),
                a = n(83436),
                l = n(707533),
                s = n(333765),
                i = n(844662);
            class c extends o.PureComponent {
                render() {
                    const {
                        children: e,
                        popperChildrenProps: t,
                        onClose: n,
                        reference: a,
                        containerClassName: s,
                        arrowClassName: c
                    } = this.props;
                    return o.createElement(l.Portal, null, o.createElement("div", {
                        ref: a
                    }, o.createElement(u, {
                        reference: t.ref,
                        style: t.style,
                        arrowClassName: r(i.arrowHolder, this._getArrowDirectionClass(), c),
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
                            return r(i["arrowHolder--after"], i["arrowHolder--after-ltr-fix"]);
                        case "top":
                            return r(i["arrowHolder--above"], i["arrowHolder--above-fix"]);
                        case "bottom":
                        case "bottom-start":
                        case "bottom-end":
                            return i["arrowHolder--below"];
                        default:
                            return r(i["arrowHolder--before"], i["arrowHolder--before-rtl-fix"])
                    }
                }
            }

            function u(e) {
                const {
                    className: t,
                    containerClassName: n,
                    contentClassName: l,
                    reference: c,
                    style: u,
                    arrow: p = !0,
                    arrowClassName: d,
                    arrowReference: m,
                    onClose: f,
                    arrowStyle: h,
                    children: g,
                    ...v
                } = e;
                return o.createElement("div", { ...v,
                    className: t,
                    ref: c,
                    style: u
                }, p && o.createElement("div", {
                    className: d,
                    ref: m,
                    style: h
                }), o.createElement("div", {
                    className: r(i.container, n)
                }, o.createElement("div", {
                    className: r(i.content, l)
                }, g), f && o.createElement(a.Icon, {
                    className: i.closeButton,
                    icon: s,
                    onClick: f
                })))
            }
        },
        995683: (e, t, n) => {
            "use strict";

            function o(e, t, n = {}) {
                return Object.assign({}, e, function(e, t, n = {}) {
                    const o = Object.assign({}, t);
                    for (const r of Object.keys(t)) {
                        const a = n[r] || r;
                        a in e && (o[r] = [e[a], t[r]].join(" "))
                    }
                    return o
                }(e, t, n))
            }
            n.d(t, {
                mergeThemes: () => o
            })
        },
        555386: e => {
            e.exports = {
                input: "input-dV7I8XN5",
                symbol: "symbol-dV7I8XN5",
                checkbox: "checkbox-dV7I8XN5",
                label: "label-dV7I8XN5",
                dropdownMenu: "dropdownMenu-dV7I8XN5",
                sessionStart: "sessionStart-dV7I8XN5",
                sessionEnd: "sessionEnd-dV7I8XN5",
                sessionInputContainer: "sessionInputContainer-dV7I8XN5",
                sessionDash: "sessionDash-dV7I8XN5",
                inputGroup: "inputGroup-dV7I8XN5",
                textarea: "textarea-dV7I8XN5",
                inlineGroup: "inlineGroup-dV7I8XN5",
                hasTooltip: "hasTooltip-dV7I8XN5"
            }
        },
        520374: e => {
            e.exports = {
                content: "content-mTbR5jYu",
                cell: "cell-mTbR5jYu",
                inner: "inner-mTbR5jYu",
                first: "first-mTbR5jYu",
                inlineCell: "inlineCell-mTbR5jYu",
                fill: "fill-mTbR5jYu",
                top: "top-mTbR5jYu",
                topCenter: "topCenter-mTbR5jYu",
                offset: "offset-mTbR5jYu",
                inlineRow: "inlineRow-mTbR5jYu",
                grouped: "grouped-mTbR5jYu",
                separator: "separator-mTbR5jYu",
                groupSeparator: "groupSeparator-mTbR5jYu",
                big: "big-mTbR5jYu",
                adaptive: "adaptive-mTbR5jYu",
                checkableTitle: "checkableTitle-mTbR5jYu"
            }
        },
        898930: (e, t, n) => {
            "use strict";
            n.d(t, {
                VerticalAttachEdge: () => o,
                HorizontalAttachEdge: () => r,
                VerticalDropDirection: () => a,
                HorizontalDropDirection: () => l,
                getPopupPositioner: () => c
            });
            var o, r, a, l, s = n(650151);
            ! function(e) {
                e[e.Top = 0] = "Top", e[e.Bottom = 1] = "Bottom"
            }(o || (o = {})),
            function(e) {
                e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
            }(r || (r = {})),
            function(e) {
                e[e.FromTopToBottom = 0] = "FromTopToBottom", e[e.FromBottomToTop = 1] = "FromBottomToTop"
            }(a || (a = {})),
            function(e) {
                e[e.FromLeftToRight = 0] = "FromLeftToRight", e[e.FromRightToLeft = 1] = "FromRightToLeft"
            }(l || (l = {}));
            const i = {
                verticalAttachEdge: o.Bottom,
                horizontalAttachEdge: r.Left,
                verticalDropDirection: a.FromTopToBottom,
                horizontalDropDirection: l.FromLeftToRight,
                verticalMargin: 0,
                horizontalMargin: 0,
                matchButtonAndListboxWidths: !1
            };

            function c(e, t) {
                return (n, c) => {
                    const u = (0, s.ensureNotNull)(e).getBoundingClientRect(),
                        {
                            verticalAttachEdge: p = i.verticalAttachEdge,
                            verticalDropDirection: d = i.verticalDropDirection,
                            horizontalAttachEdge: m = i.horizontalAttachEdge,
                            horizontalDropDirection: f = i.horizontalDropDirection,
                            horizontalMargin: h = i.horizontalMargin,
                            verticalMargin: g = i.verticalMargin,
                            matchButtonAndListboxWidths: v = i.matchButtonAndListboxWidths
                        } = t,
                        b = p === o.Top ? -1 * g : g,
                        w = m === r.Right ? u.right : u.left,
                        C = p === o.Top ? u.top : u.bottom,
                        y = {
                            x: w - (f === l.FromRightToLeft ? n : 0) + h,
                            y: C - (d === a.FromBottomToTop ? c : 0) + b
                        };
                    return v && (y.overrideWidth = u.width), y
                }
            }
        },
        791367: (e, t, n) => {
            "use strict";
            n.d(t, {
                bind: () => l,
                setter: () => s
            });
            var o = n(50959),
                r = n(139856),
                a = n(495450);

            function l(e) {
                var t;
                return t = class extends o.PureComponent {
                    constructor() {
                        super(...arguments), this._onChange = (e, t, n) => {
                            const {
                                setValue: o
                            } = this.context, {
                                onChange: r
                            } = this.props;
                            s(o, r)(e, t, n)
                        }
                    }
                    render() {
                        const {
                            input: t
                        } = this.props, {
                            values: n,
                            model: r
                        } = this.context;
                        return o.createElement(e, { ...this.props,
                            value: n[t.id],
                            tzName: (0, a.getTimezoneName)(r),
                            onChange: this._onChange
                        })
                    }
                }, t.contextType = r.PropertyContext, t
            }

            function s(e, t) {
                return (n, o, r) => {
                    e(o, n, r), t && t(n, o, r)
                }
            }
        },
        139856: (e, t, n) => {
            "use strict";
            n.d(t, {
                PropertyContext: () => c,
                PropertyContainer: () => u
            });
            var o = n(50959),
                r = n(650151),
                a = n(777754),
                l = n(683890);
            const s = (0, n(272001).getLogger)("Platform.GUI.StudyInputPropertyContainer"),
                i = new l.TranslatedString("change {propertyName} property", a.t(null, void 0, n(18567))),
                c = o.createContext(null);
            class u extends o.PureComponent {
                constructor(e) {
                    super(e), this._setValue = (e, t, o) => {
                        const {
                            property: c,
                            model: u
                        } = this.props, p = (0, r.ensureDefined)(c.child(e));
                        s.logNormal(`Changing property "${e}" value from "${c.value()}" to "${t}"`);
                        const d = new l.TranslatedString(o, function(e) {
                            return a.t(e, {
                                context: "input"
                            }, n(788601))
                        }(o));
                        u.setProperty(p, t, i.format({
                            propertyName: d
                        }))
                    };
                    const {
                        property: t
                    } = e, o = {};
                    t.childNames().forEach((e => {
                        const n = (0, r.ensureDefined)(t.child(e));
                        o.hasOwnProperty(e) || (o[e] = n.value())
                    })), this.state = o
                }
                componentDidMount() {
                    const {
                        property: e,
                        onStudyInputChange: t
                    } = this.props;
                    e.childNames().forEach((n => {
                        (0,
                            r.ensureDefined)(e.child(n)).subscribe(this, (e => {
                            const o = e.value();
                            s.logNormal(`Property "${n}" updated to value "${o}"`), this.setState({
                                [n]: o
                            }), null == t || t(o, n)
                        }))
                    }))
                }
                componentWillUnmount() {
                    const {
                        property: e
                    } = this.props;
                    e.childNames().forEach((t => {
                        (0, r.ensureDefined)(e.child(t)).unsubscribeAll(this)
                    }))
                }
                render() {
                    const {
                        study: e,
                        model: t,
                        children: n
                    } = this.props, r = {
                        study: e,
                        model: t,
                        values: this.state,
                        setValue: this._setValue
                    };
                    return o.createElement(c.Provider, {
                        value: r
                    }, n)
                }
            }
        },
        546399: (e, t, n) => {
            "use strict";
            n.d(t, {
                isGroup: () => r,
                isInputInlines: () => a,
                getInputGroups: () => l
            });
            var o = n(650151);

            function r(e) {
                return e.hasOwnProperty("groupType")
            }

            function a(e) {
                return r(e) && "inline" === e.groupType
            }

            function l(e) {
                const t = [],
                    n = new Map,
                    r = new Map;
                return r.set(void 0, new Map), e.forEach((e => {
                    const {
                        group: a,
                        inline: l
                    } = e;
                    if (void 0 !== a || void 0 !== l)
                        if (void 0 !== a)
                            if (void 0 !== l)
                                if (n.has(a)) {
                                    const t = (0, o.ensureDefined)(n.get(a));
                                    let i;
                                    r.has(t) ? i = (0, o.ensureDefined)(r.get(t)) : (i = new Map, r.set(t, i)), s(e, "inline", l, i, t.children)
                                } else {
                                    const o = {
                                            id: l,
                                            groupType: "inline",
                                            children: [e]
                                        },
                                        s = {
                                            id: a,
                                            groupType: "group",
                                            children: [o]
                                        },
                                        i = new Map;
                                    i.set(l, o), r.set(s, i), n.set(a, s), t.push(s)
                                }
                    else s(e, "group", a, n, t);
                    else {
                        const n = (0, o.ensureDefined)(r.get(void 0));
                        s(e, "inline", (0, o.ensureDefined)(l), n, t)
                    } else t.push(e)
                })), t
            }

            function s(e, t, n, r, a) {
                if (r.has(n))(0, o.ensureDefined)(r.get(n)).children.push(e);
                else {
                    const o = {
                        id: n,
                        groupType: t,
                        children: [e]
                    };
                    r.set(n, o), a.push(o)
                }
            }
        },
        843321: (e, t, n) => {
            "use strict";
            n.d(t, {
                InputGroup: () => s
            });
            var o = n(50959),
                r = n(497754),
                a = n(561709),
                l = n(555386);

            function s(e) {
                const {
                    className: t
                } = e, n = (0, o.useContext)(a.PropertyTable.InlineRowContext);
                return o.createElement("div", {
                    className: r(l.inputGroup, n && l.inlineGroup, t)
                }, e.children)
            }
        },
        957376: (e, t, n) => {
            "use strict";
            n.d(t, {
                parseValue: () => p,
                SessionInput: () => m
            });
            var o = n(50959),
                r = n(497754),
                a = n.n(r),
                l = n(650151),
                s = n(791367),
                i = n(843321),
                c = n(170140),
                u = n(555386);

            function p(e = "") {
                const [, t = "", n = "", o = "", r = ""] = Array.from(e.match(/^(\d\d)(\d\d)-(\d\d)(\d\d)/) || []);
                return [`${t}:${n}`, `${o}:${r}`]
            }
            class d extends o.PureComponent {
                constructor(e) {
                    super(e), this._onStartPick = e => {
                        this.setState({
                            startTime: e
                        }, this._onChange)
                    }, this._onEndPick = e => {
                        this.setState({
                            endTime: e
                        }, this._onChange)
                    }, this._onChange = () => {
                        const {
                            input: {
                                id: e,
                                name: t
                            },
                            onChange: n
                        } = this.props, {
                            startTime: o,
                            endTime: r
                        } = this.state;
                        n(o.replace(":", "") + "-" + r.replace(":", ""), e, t)
                    };
                    const t = e.value || e.input.defval,
                        [n, o] = p(t);
                    this.state = {
                        prevValue: t,
                        startTime: n,
                        endTime: o
                    }
                }
                render() {
                    const {
                        startTime: e,
                        endTime: t
                    } = this.state, {
                        hasTooltip: n,
                        disabled: r
                    } = this.props;
                    return o.createElement(i.InputGroup, {
                        className: a()(n && u.hasTooltip)
                    }, o.createElement("div", {
                        className: u.sessionStart
                    }, o.createElement(c.TimeInput, {
                        className: a()(u.input, u.sessionInputContainer),
                        name: "start",
                        value: (0, l.ensureDefined)(e),
                        onChange: this._onStartPick,
                        disabled: r
                    }), o.createElement("span", {
                        className: u.sessionDash
                    }, " — ")), o.createElement("div", {
                        className: u.sessionEnd
                    }, o.createElement(c.TimeInput, {
                        className: a()(u.input, u.sessionInputContainer),
                        name: "end",
                        value: (0, l.ensureDefined)(t),
                        onChange: this._onEndPick,
                        disabled: r
                    })))
                }
                static getDerivedStateFromProps(e, t) {
                    if (e.value === t.prevValue) return t;
                    const [n, o] = p(e.value);
                    return {
                        prevValue: e.value,
                        startTime: n,
                        endTime: o
                    }
                }
            }
            const m = (0, s.bind)(d)
        },
        381720: (e, t, n) => {
            "use strict";
            n.d(t, {
                getInternalSymbolName: () => c,
                SymbolInput: () => p
            });
            var o = n(50959),
                r = n(650151),
                a = n(139856),
                l = n(791367),
                s = n(52498),
                i = n(364979);

            function c(e, t) {
                const n = (0, s.createAdapter)(t).resolvedSymbolInfoBySymbol(e);
                return n && (n.ticker || n.full_name) ? n.ticker || n.full_name : e
            }

            function u(e, t) {
                return c(e, t)
            }
            const p = (0, l.bind)((function(e) {
                const t = (0, o.useContext)(a.PropertyContext),
                    {
                        study: n
                    } = (0, r.ensureNotNull)(t),
                    {
                        input: {
                            defval: l
                        },
                        value: s
                    } = e;
                return o.createElement(i.SymbolInputsButton, { ...e,
                    value: u(s || l || "", n),
                    study: n
                })
            }))
        },
        561709: (e, t, n) => {
            "use strict";
            n.d(t, {
                PropertyTable: () => i
            });
            var o = n(50959),
                r = n(497754),
                a = n(8626),
                l = n(520374);
            const s = o.createContext(!1);
            class i extends o.PureComponent {
                render() {
                    return o.createElement("div", {
                        ref: this.props.reference,
                        className: r(l.content, this.props.className)
                    }, this.props.children)
                }
            }
            i.InlineRowContext = s, i.Row = function(e) {
                const {
                    children: t
                } = e;
                return (0, o.useContext)(s) ? o.createElement("span", {
                    className: l.inlineRow
                }, t) : o.createElement(o.Fragment, null, t)
            }, i.Cell = function(e) {
                const t = (0, o.useContext)(s),
                    n = r(l.cell, e.offset && l.offset, e.grouped && l.grouped, t && l.inlineCell, "top" === e.verticalAlign && l.top, "topCenter" === e.verticalAlign && l.topCenter, "adaptive" === e.verticalAlign && l.adaptive, e.checkableTitle && l.checkableTitle, 2 === e.colSpan && l.fill, "first" === e.placement && 2 !== e.colSpan && l.first, "last" === e.placement && 2 !== e.colSpan && l.last),
                    i = (0, a.filterDataProps)(e);
                return o.createElement("div", { ...i,
                    className: n
                }, o.createElement("div", {
                    className: r(l.inner, e.className)
                }, e.children))
            }, i.Separator = function(e) {
                return o.createElement(i.Row, null, o.createElement("div", {
                    className: r(l.cell, l.separator, l.fill)
                }))
            }, i.GroupSeparator = function(e) {
                const t = e.size || 0;
                return o.createElement(i.Row, null, o.createElement("div", {
                    className: r(l.cell, l.groupSeparator, l.fill, 1 === t && l.big)
                }))
            }
        },
        944586: (e, t, n) => {
            "use strict";
            n.d(t, {
                getSymbolSearchCompleteOverrideFunction: () => r
            });
            let o = (e, t) => Promise.resolve({
                symbol: e,
                name: e
            });

            function r() {
                return o
            }
        },
        499084: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm3.87-12.15c.36.2.49.66.28 1.02l-4 7a.75.75 0 0 1-1.18.16l-3-3a.75.75 0 1 1 1.06-1.06l2.3 2.3 3.52-6.14a.75.75 0 0 1 1.02-.28Z"/></svg>'
        },
        530162: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM9 4c-.79 0-1.38.7-1.25 1.48l.67 4.03a.59.59 0 0 0 1.16 0l.67-4.03A1.27 1.27 0 0 0 9 4Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/></svg>'
        },
        527941: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM8 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 2c.49 0 1 .59 1 1v3.01c0 .42-.51.99-1 .99s-1-.57-1-.99V9c0-.41.51-1 1-1Z"/></svg>'
        },
        482353: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM6 7.5a3 3 0 1 1 6 0c0 .96-.6 1.48-1.17 1.98-.55.48-1.08.95-1.08 1.77h-1.5c0-1.37.7-1.9 1.33-2.38.49-.38.92-.71.92-1.37C10.5 6.67 9.82 6 9 6s-1.5.67-1.5 1.5H6Z"/></svg>'
        },
        598475: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10 4h1v2h6V4h1v2h2.5A2.5 2.5 0 0 1 23 8.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 5 19.5v-11A2.5 2.5 0 0 1 7.5 6H10V4zm8 3H7.5C6.67 7 6 7.67 6 8.5v11c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5H18zm-3 2h-2v2h2V9zm-7 4h2v2H8v-2zm12-4h-2v2h2V9zm-7 4h2v2h-2v-2zm-3 4H8v2h2v-2zm3 0h2v2h-2v-2zm7-4h-2v2h2v-2z"/></svg>'
        },
        333765: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>'
        },
        93929: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M13.5 7l1.65-1.65a.5.5 0 0 0 0-.7l-1.8-1.8a.5.5 0 0 0-.7 0L11 4.5M13.5 7L11 4.5M13.5 7l-8.35 8.35a.5.5 0 0 1-.36.15H2.5v-2.3a.5.5 0 0 1 .15-.35L11 4.5"/></svg>'
        },
        595096: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17"><path fill="currentColor" d="M1 8.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0zM8.5 0a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM9 9V3H8v5H5v1h4z"/></svg>'
        }
    }
]);
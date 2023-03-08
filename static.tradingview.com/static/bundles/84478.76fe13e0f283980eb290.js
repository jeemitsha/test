(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [84478], {
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
        915812: (e, o, l) => {
            "use strict";
            l.d(o, {
                SquareButton: () => n.SquareButton,
                SquareAnchorButton: () => i.SquareAnchorButton
            });
            l(221191);
            var n = l(422175),
                i = l(951144)
        },
        951144: (e, o, l) => {
            "use strict";
            l.d(o, {
                SquareAnchorButton: () => r
            });
            var n = l(50959),
                i = l(301792),
                t = l(8626),
                a = l(221191);

            function s(e) {
                const {
                    className: o,
                    color: l,
                    variant: n,
                    size: i,
                    stretch: a,
                    animated: s,
                    icon: r,
                    iconOnly: c,
                    startIcon: d,
                    endIcon: h,
                    ...m
                } = e;
                return { ...m,
                    ...(0, t.filterDataProps)(e),
                    ...(0, t.filterAriaProps)(e)
                }
            }

            function r(e) {
                const {
                    reference: o
                } = e, {
                    isGrouped: l,
                    cellState: t,
                    disablePositionAdjustment: r
                } = (0, n.useContext)(i.ControlGroupContext), c = (0, a.getSquareButtonClasses)({ ...e,
                    isGrouped: l,
                    cellState: t,
                    disablePositionAdjustment: r,
                    isAnchor: !0
                });
                return n.createElement("a", { ...s(e),
                    className: c,
                    ref: o
                }, n.createElement(a.SquareButtonContent, { ...e
                }))
            }
        },
        221191: (e, o, l) => {
            "use strict";
            l.d(o, {
                getSquareButtonClasses: () => c,
                SquareButtonContent: () => d
            });
            var n = l(50959),
                i = l(497754),
                t = l(307754),
                a = l(83436),
                s = l(428146),
                r = l.n(s);

            function c(e) {
                const {
                    color: o = "brand",
                    size: l = "medium",
                    variant: n = "primary",
                    stretch: a = !1,
                    icon: s,
                    startIcon: c,
                    endIcon: d,
                    iconOnly: h = !1,
                    className: m,
                    isGrouped: u,
                    cellState: T,
                    disablePositionAdjustment: L = !1,
                    isAnchor: v = !1
                } = e, g = function(e) {
                    let o = "";
                    return 0 !== e && (1 & e && (o = i(o, r()["no-corner-top-left"])), 2 & e && (o = i(o, r()["no-corner-top-right"])), 4 & e && (o = i(o, r()["no-corner-bottom-right"])), 8 & e && (o = i(o, r()["no-corner-bottom-left"]))), o
                }((0, t.getGroupCellRemoveRoundBorders)(T));
                return i(m, r().button, r()[`size-${l}`], r()[`color-${o}`], r()[`variant-${n}`], a && r().stretch, (s || c) && r()["with-start-icon"], d && r()["with-end-icon"], h && r()["icon-only"], g, u && r().grouped, u && !L && r()["adjust-position"], u && T.isTop && r()["first-row"], u && T.isLeft && r()["first-col"], v && r().link)
            }

            function d(e) {
                const {
                    startIcon: o,
                    icon: l,
                    iconOnly: i,
                    children: t,
                    endIcon: s
                } = e, c = null != o ? o : l;
                return n.createElement(n.Fragment, null, c && n.createElement(a.Icon, {
                    icon: c,
                    className: r()["start-icon-wrap"]
                }), t && n.createElement("span", {
                    className: r().content
                }, t), s && !i && n.createElement(a.Icon, {
                    icon: s,
                    className: r()["end-icon-wrap"]
                }))
            }
        },
        422175: (e, o, l) => {
            "use strict";
            l.d(o, {
                SquareButton: () => r
            });
            var n = l(50959),
                i = l(301792),
                t = l(8626),
                a = l(221191);

            function s(e) {
                const {
                    className: o,
                    color: l,
                    variant: n,
                    size: i,
                    stretch: a,
                    animated: s,
                    icon: r,
                    iconOnly: c,
                    startIcon: d,
                    endIcon: h,
                    ...m
                } = e;
                return { ...m,
                    ...(0, t.filterDataProps)(e),
                    ...(0, t.filterAriaProps)(e)
                }
            }

            function r(e) {
                const {
                    reference: o,
                    ...l
                } = e, {
                    isGrouped: t,
                    cellState: r,
                    disablePositionAdjustment: c
                } = (0, n.useContext)(i.ControlGroupContext), d = (0, a.getSquareButtonClasses)({ ...l,
                    isGrouped: t,
                    cellState: r,
                    disablePositionAdjustment: c
                });
                return n.createElement("button", { ...s(l),
                    className: d,
                    ref: o
                }, n.createElement(a.SquareButtonContent, { ...l
                }))
            }
        },
        301792: (e, o, l) => {
            "use strict";
            l.d(o, {
                ControlGroupContext: () => n
            });
            const n = l(50959).createContext({
                isGrouped: !1,
                cellState: {
                    isTop: !0,
                    isRight: !0,
                    isBottom: !0,
                    isLeft: !0
                }
            })
        },
        307754: (e, o, l) => {
            "use strict";

            function n(e) {
                let o = 0;
                return e.isTop && e.isLeft || (o += 1), e.isTop && e.isRight || (o += 2), e.isBottom && e.isLeft || (o += 8), e.isBottom && e.isRight || (o += 4), o
            }
            l.d(o, {
                getGroupCellRemoveRoundBorders: () => n
            })
        },
        612247: (e, o, l) => {
            "use strict";
            l.d(o, {
                Loader: () => c
            });
            var n, i = l(50959),
                t = l(497754),
                a = l(745269),
                s = l(733319),
                r = l.n(s);
            ! function(e) {
                e[e.Initial = 0] = "Initial", e[e.Appear = 1] = "Appear", e[e.Active = 2] = "Active"
            }(n || (n = {}));
            class c extends i.PureComponent {
                constructor(e) {
                    super(e), this._stateChangeTimeout = null, this.state = {
                        state: n.Initial
                    }
                }
                render() {
                    const {
                        className: e,
                        color: o = "black",
                        size: l = "medium",
                        staticPosition: n
                    } = this.props, a = t(r().item, r()[o], r()[l]);
                    return i.createElement("span", {
                        className: t(r().loader, n && r().static, this._getStateClass(), e)
                    }, i.createElement("span", {
                        className: a
                    }), i.createElement("span", {
                        className: a
                    }), i.createElement("span", {
                        className: a
                    }))
                }
                componentDidMount() {
                    this.setState({
                        state: n.Appear
                    }), this._stateChangeTimeout = setTimeout((() => {
                        this.setState({
                            state: n.Active
                        })
                    }), 2 * a.dur)
                }
                componentWillUnmount() {
                    this._stateChangeTimeout && (clearTimeout(this._stateChangeTimeout), this._stateChangeTimeout = null)
                }
                _getStateClass() {
                    switch (this.state.state) {
                        case n.Initial:
                            return r()["loader-initial"];
                        case n.Appear:
                            return r()["loader-appear"];
                        default:
                            return ""
                    }
                }
            }
        },
        8626: (e, o, l) => {
            "use strict";

            function n(e) {
                return t(e, a)
            }

            function i(e) {
                return t(e, s)
            }

            function t(e, o) {
                const l = Object.entries(e).filter(o),
                    n = {};
                for (const [e, o] of l) n[e] = o;
                return n
            }

            function a(e) {
                const [o, l] = e;
                return 0 === o.indexOf("data-") && "string" == typeof l
            }

            function s(e) {
                return 0 === e[0].indexOf("aria-")
            }
            l.d(o, {
                filterDataProps: () => n,
                filterAriaProps: () => i,
                filterProps: () => t,
                isDataAttribute: () => a,
                isAriaAttribute: () => s
            })
        },
        531327: (e, o, l) => {
            "use strict";

            function n(e) {
                return i() ? 0 : t() ? 46 : Math.min(Math.max(e, 46), 450)
            }
            l.d(o, {
                getWidgetBarPadding: () => n,
                isWidgetBarFullscreen: () => i
            });
            const i = () => !window.matchMedia("screen and (min-width: 768px)").matches,
                t = () => !window.matchMedia("screen and (min-width: 1280px)").matches
        },
        314308: (e, o, l) => {
            "use strict";

            function n(e, o, l, n, i) {
                function t(i) {
                    if (e > i.timeStamp) return;
                    const t = i.target;
                    void 0 !== l && null !== o && null !== t && t.ownerDocument === n && (o.contains(t) || l(i))
                }
                return i.click && n.addEventListener("click", t, !1), i.mouseDown && n.addEventListener("mousedown", t, !1), i.touchEnd && n.addEventListener("touchend", t, !1), i.touchStart && n.addEventListener("touchstart", t, !1), () => {
                    n.removeEventListener("click", t, !1), n.removeEventListener("mousedown", t, !1), n.removeEventListener("touchend", t, !1), n.removeEventListener("touchstart", t, !1)
                }
            }
            l.d(o, {
                addOutsideEventListener: () => n
            })
        },
        575658: (e, o, l) => {
            "use strict";
            l.d(o, {
                setFixedBodyState: () => s
            });
            var n = l(76107),
                i = l(531327);
            let t = 0,
                a = !1;

            function s(e) {
                const {
                    body: o
                } = document, l = o.querySelector(".widgetbar-wrap");
                if (e && 1 == ++t) {
                    const e = (0, n.getCSSProperty)(o, "overflow"),
                        i = (0, n.getCSSPropertyNumericValue)(o, "padding-right");
                    "hidden" !== e.toLowerCase() && o.scrollHeight > o.offsetHeight && ((0, n.setStyle)(l, "right", `${(0,n.getScrollbarWidth)()}px`), o.style.paddingRight = `${i+(0,n.getScrollbarWidth)()}px`, a = !0), o.classList.add("i-no-scroll")
                } else if (!e && t > 0 && 0 == --t && (o.classList.remove("i-no-scroll"), a)) {
                    (0, n.setStyle)(l, "right", "0px");
                    let e = 0;
                    e = l ? (0, i.getWidgetBarPadding)((0, n.getContentWidth)(l)) : 0, o.scrollHeight <= o.clientHeight && (e -= (0, n.getScrollbarWidth)()), o.style.paddingRight = (e < 0 ? 0 : e) + "px", a = !1
                }
            }
        },
        852668: (e, o, l) => {
            "use strict";
            l.d(o, {
                FavoriteButton: () => h
            });
            var n = l(777754),
                i = l(50959),
                t = l(497754),
                a = l(83436),
                s = l(239146),
                r = l(648010),
                c = l(164429);
            const d = {
                add: n.t(null, void 0, l(44629)),
                remove: n.t(null, void 0, l(572482))
            };

            function h(e) {
                const {
                    className: o,
                    isFilled: l,
                    isActive: n,
                    onClick: h,
                    ...m
                } = e;
                return i.createElement(a.Icon, { ...m,
                    className: t(c.favorite, "apply-common-tooltip", l && c.checked, n && c.active, o),
                    icon: l ? s : r,
                    onClick: h,
                    title: l ? d.remove : d.add
                })
            }
        },
        951292: (e, o, l) => {
            "use strict";
            l.d(o, {
                useOutsideEvent: () => t
            });
            var n = l(50959),
                i = l(314308);

            function t(e) {
                const {
                    click: o,
                    mouseDown: l,
                    touchEnd: t,
                    touchStart: a,
                    handler: s,
                    reference: r,
                    ownerDocument: c = document
                } = e, d = (0, n.useRef)(null), h = (0,
                    n.useRef)(new CustomEvent("timestamp").timeStamp);
                return (0, n.useLayoutEffect)((() => {
                    const e = {
                            click: o,
                            mouseDown: l,
                            touchEnd: t,
                            touchStart: a
                        },
                        n = r ? r.current : d.current;
                    return (0, i.addOutsideEventListener)(h.current, n, s, c, e)
                }), [o, l, t, a, s]), r || d
            }
        },
        377318: (e, o, l) => {
            "use strict";
            l.d(o, {
                MenuContext: () => n
            });
            const n = l(50959).createContext(null)
        },
        175071: (e, o, l) => {
            "use strict";
            l.d(o, {
                DEFAULT_MENU_THEME: () => v,
                Menu: () => g
            });
            var n = l(50959),
                i = l(497754),
                t = l.n(i),
                a = l(650151),
                s = l(43329),
                r = l(587080),
                c = l(670797),
                d = l(224743),
                h = l(829725),
                m = l(799786),
                u = l(787684),
                T = l(377318),
                L = l(409790);
            const v = L;
            class g extends n.PureComponent {
                constructor(e) {
                    super(e), this._containerRef = null, this._scrollWrapRef = null, this._raf = null, this._scrollRaf = null, this._scrollTimeout = void 0, this._manager = new h.OverlapManager, this._hotkeys = null, this._scroll = 0, this._handleContainerRef = e => {
                        this._containerRef = e, this.props.reference && ("function" == typeof this.props.reference && this.props.reference(e), "object" == typeof this.props.reference && (this.props.reference.current = e))
                    }, this._handleScrollWrapRef = e => {
                        this._scrollWrapRef = e, "function" == typeof this.props.scrollWrapReference && this.props.scrollWrapReference(e), "object" == typeof this.props.scrollWrapReference && (this.props.scrollWrapReference.current = e)
                    }, this._handleMeasure = ({
                        callback: e,
                        forceRecalcPosition: o
                    } = {}) => {
                        var l, n, i, t, r, c, d, h, m, u, T, L;
                        if (this.state.isMeasureValid && !o) return;
                        const {
                            position: v
                        } = this.props, g = (0, a.ensureNotNull)(this._containerRef);
                        let p = g.getBoundingClientRect();
                        const z = document.documentElement.clientHeight,
                            f = document.documentElement.clientWidth,
                            w = null !== (l = this.props.closeOnScrollOutsideOffset) && void 0 !== l ? l : 0;
                        let N = z - 0 - w;
                        const C = p.height > N;
                        if (C) {
                            (0, a.ensureNotNull)(this._scrollWrapRef).style.overflowY = "scroll", p = g.getBoundingClientRect()
                        }
                        const {
                            width: x,
                            height: b
                        } = p, M = "function" == typeof v ? v(x, b, z) : v, A = null !== (i = null === (n = null == M ? void 0 : M.indentFromWindow) || void 0 === n ? void 0 : n.left) && void 0 !== i ? i : 0, y = f - (null !== (t = M.overrideWidth) && void 0 !== t ? t : x) - (null !== (c = null === (r = null == M ? void 0 : M.indentFromWindow) || void 0 === r ? void 0 : r.right) && void 0 !== c ? c : 0), I = (0, s.clamp)(M.x, A, Math.max(A, y)), S = (null !== (h = null === (d = null == M ? void 0 : M.indentFromWindow) || void 0 === d ? void 0 : d.top) && void 0 !== h ? h : 0) + w, _ = z - (null !== (m = M.overrideHeight) && void 0 !== m ? m : b) - (null !== (T = null === (u = null == M ? void 0 : M.indentFromWindow) || void 0 === u ? void 0 : u.bottom) && void 0 !== T ? T : 0);
                        let P = (0, s.clamp)(M.y, S, Math.max(S, _));
                        if (M.forbidCorrectYCoord && P < M.y && (N -= M.y - P, P = M.y), o && void 0 !== this.props.closeOnScrollOutsideOffset && M.y <= this.props.closeOnScrollOutsideOffset) return void this._handleGlobalClose(!0);
                        const R = null !== (L = M.overrideHeight) && void 0 !== L ? L : C ? N : void 0;
                        this.setState({
                            appearingMenuHeight: o ? this.state.appearingMenuHeight : R,
                            appearingMenuWidth: o ? this.state.appearingMenuWidth : M.overrideWidth,
                            appearingPosition: {
                                x: I,
                                y: P
                            },
                            isMeasureValid: !0
                        }, (() => {
                            this._restoreScrollPosition(), e && e()
                        }))
                    }, this._restoreScrollPosition = () => {
                        const e = document.activeElement,
                            o = (0, a.ensureNotNull)(this._containerRef);
                        if (null !== e && o.contains(e)) try {
                            e.scrollIntoView()
                        } catch (e) {} else(0,
                            a.ensureNotNull)(this._scrollWrapRef).scrollTop = this._scroll
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
                        this._scroll = (0, a.ensureNotNull)(this._scrollWrapRef).scrollTop
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
                    const o = null !== this.context;
                    this._hotkeys || o || (this._hotkeys = m.createGroup({
                        desc: "Popup menu"
                    }), this._hotkeys.add({
                        desc: "Close",
                        hotkey: 27,
                        handler: () => {
                            this.props.onKeyboardClose && this.props.onKeyboardClose(), this._handleGlobalClose()
                        }
                    })), this.props.repositionOnScroll && window.addEventListener("scroll", this._handleScrollOutside, {
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
                        role: o,
                        "aria-label": l,
                        "aria-labelledby": i,
                        "aria-activedescendant": a,
                        "aria-hidden": s,
                        children: d,
                        minWidth: h,
                        theme: m = L,
                        className: v,
                        maxHeight: g,
                        onMouseOver: z,
                        onMouseOut: f,
                        onKeyDown: w,
                        onFocus: N,
                        onBlur: C
                    } = this.props, {
                        appearingMenuHeight: x,
                        appearingMenuWidth: b,
                        appearingPosition: M,
                        isMeasureValid: A
                    } = this.state;
                    return n.createElement(T.MenuContext.Provider, {
                        value: this
                    }, n.createElement(u.SubmenuHandler, null, n.createElement(c.SlotContext.Provider, {
                        value: this._manager
                    }, n.createElement("div", {
                        id: e,
                        role: o,
                        "aria-label": l,
                        "aria-labelledby": i,
                        "aria-activedescendant": a,
                        "aria-hidden": s,
                        className: t()(v, m.menuWrap, !A && m.isMeasuring),
                        style: {
                            height: x,
                            left: M && M.x,
                            minWidth: h,
                            position: "fixed",
                            top: M && M.y,
                            width: b
                        },
                        "data-name": this.props["data-name"],
                        ref: this._handleContainerRef,
                        onScrollCapture: this.props.onScroll,
                        onContextMenu: r.preventDefaultForContextMenu,
                        tabIndex: this.props.tabIndex,
                        onMouseOver: z,
                        onMouseOut: f,
                        onKeyDown: w,
                        onFocus: N,
                        onBlur: C
                    }, n.createElement("div", {
                        className: t()(m.scrollWrap, !this.props.noMomentumBasedScroll && m.momentumBased),
                        style: {
                            overflowY: void 0 !== x ? "scroll" : "auto",
                            maxHeight: g
                        },
                        onScrollCapture: this._handleScroll,
                        ref: this._handleScrollWrapRef
                    }, n.createElement(p, {
                        className: m.menuBox
                    }, d)))), n.createElement(c.Slot, {
                        reference: this._handleSlot
                    })))
                }
                update(e) {
                    e ? this._resizeForced() : this._resize()
                }
            }

            function p(e) {
                const o = (0, a.ensureNotNull)((0, n.useContext)(u.SubmenuContext)),
                    l = n.useRef(null);
                return n.createElement("div", {
                    ref: l,
                    className: e.className,
                    onMouseOver: function(e) {
                        if (!(null !== o.current && e.target instanceof Node && (n = e.target, null === (i = l.current) || void 0 === i ? void 0 : i.contains(n)))) return;
                        var n, i;
                        o.isSubmenuNode(e.target) || o.setCurrent(null)
                    },
                    "data-name": "menu-inner"
                }, e.children)
            }
            g.contextType = u.SubmenuContext
        },
        829725: (e, o, l) => {
            "use strict";
            l.d(o, {
                OverlapManager: () => t,
                getRootOverlapManager: () => s
            });
            var n = l(650151);
            class i {
                constructor() {
                    this._storage = []
                }
                add(e) {
                    this._storage.push(e)
                }
                remove(e) {
                    this._storage = this._storage.filter((o => e !== o))
                }
                has(e) {
                    return this._storage.includes(e)
                }
                getItems() {
                    return this._storage
                }
            }
            class t {
                constructor(e = document) {
                    this._storage = new i, this._windows = new Map, this._index = 0, this._document = e, this._container = e.createDocumentFragment()
                }
                setContainer(e) {
                    const o = this._container,
                        l = null === e ? this._document.createDocumentFragment() : e;
                    ! function(e, o) {
                        Array.from(e.childNodes).forEach((e => {
                            e.nodeType === Node.ELEMENT_NODE && o.appendChild(e)
                        }))
                    }(o, l), this._container = l
                }
                registerWindow(e) {
                    this._storage.has(e) || this._storage.add(e)
                }
                ensureWindow(e, o = {
                    position: "fixed",
                    direction: "normal"
                }) {
                    const l = this._windows.get(e);
                    if (void 0 !== l) return l;
                    this.registerWindow(e);
                    const n = this._document.createElement("div");
                    if (n.style.position = o.position, n.style.zIndex = this._index.toString(), n.dataset.id = e, void 0 !== o.index) {
                        const e = this._container.childNodes.length;
                        if (o.index >= e) this._container.appendChild(n);
                        else if (o.index <= 0) this._container.insertBefore(n, this._container.firstChild);
                        else {
                            const e = this._container.childNodes[o.index];
                            this._container.insertBefore(n, e)
                        }
                    } else "reverse" === o.direction ? this._container.insertBefore(n, this._container.firstChild) : this._container.appendChild(n);
                    return this._windows.set(e, n), ++this._index, n
                }
                unregisterWindow(e) {
                    this._storage.remove(e);
                    const o = this._windows.get(e);
                    void 0 !== o && (null !== o.parentElement && o.parentElement.removeChild(o), this._windows.delete(e))
                }
                getZindex(e) {
                    const o = this.ensureWindow(e);
                    return parseInt(o.style.zIndex || "0")
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
            const a = new WeakMap;

            function s(e = document) {
                const o = e.getElementById("overlap-manager-root");
                if (null !== o) return (0, n.ensureDefined)(a.get(o)); {
                    const o = new t(e),
                        l = function(e) {
                            const o = e.createElement("div");
                            return o.style.position = "absolute", o.style.zIndex = 150..toString(), o.style.top = "0px", o.style.left = "0px", o.id = "overlap-manager-root", o
                        }(e);
                    return a.set(l, o), o.setContainer(l), e.body.appendChild(l), o
                }
            }
        },
        634993: (e, o, l) => {
            "use strict";
            l.d(o, {
                DEFAULT_POPUP_MENU_ITEM_THEME: () => c,
                PopupMenuItem: () => h
            });
            var n = l(50959),
                i = l(497754),
                t = l(224743),
                a = l(345848),
                s = l(8626),
                r = l(655498);
            const c = r;

            function d(e) {
                e.stopPropagation()
            }

            function h(e) {
                const {
                    id: o,
                    role: l,
                    "aria-label": c,
                    "aria-selected": h,
                    "aria-checked": m,
                    className: u,
                    title: T,
                    labelRowClassName: L,
                    labelClassName: v,
                    shortcut: g,
                    forceShowShortcuts: p,
                    icon: z,
                    isActive: f,
                    isDisabled: w,
                    isHovered: N,
                    appearAsDisabled: C,
                    label: x,
                    link: b,
                    showToolboxOnHover: M,
                    target: A,
                    rel: y,
                    toolbox: I,
                    reference: S,
                    onMouseOut: _,
                    onMouseOver: P,
                    onKeyDown: R,
                    suppressToolboxClick: k = !0,
                    theme: E = r,
                    tabIndex: B,
                    tagName: F,
                    renderComponent: O
                } = e, D = (0, s.filterDataProps)(e), H = (0, n.useRef)(null), W = (0, n.useMemo)((() => function(e) {
                    function o(o) {
                        const {
                            reference: l,
                            ...i
                        } = o, t = null != e ? e : i.href ? "a" : "div", a = "a" === t ? i : function(e) {
                            const {
                                download: o,
                                href: l,
                                hrefLang: n,
                                media: i,
                                ping: t,
                                rel: a,
                                target: s,
                                type: r,
                                referrerPolicy: c,
                                ...d
                            } = e;
                            return d
                        }(i);
                        return n.createElement(t, { ...a,
                            ref: l
                        })
                    }
                    return o.displayName = `DefaultComponent(${e})`, o
                }(F)), [F]), K = null != O ? O : W;
                return n.createElement(K, { ...D,
                    id: o,
                    role: l,
                    "aria-label": c,
                    "aria-selected": h,
                    "aria-checked": m,
                    className: i(u, E.item, z && E.withIcon, {
                        [E.isActive]: f,
                        [E.isDisabled]: w || C,
                        [E.hovered]: N
                    }),
                    title: T,
                    href: b,
                    target: A,
                    rel: y,
                    reference: function(e) {
                        H.current = e, "function" == typeof S && S(e);
                        "object" == typeof S && (S.current = e)
                    },
                    onClick: function(o) {
                        const {
                            dontClosePopup: l,
                            onClick: n,
                            onClickArg: i,
                            trackEventObject: s
                        } = e;
                        if (w) return;
                        s && (0, a.trackEvent)(s.category, s.event, s.label);
                        n && n(i, o);
                        l || (0, t.globalCloseMenu)()
                    },
                    onContextMenu: function(o) {
                        const {
                            trackEventObject: l,
                            trackRightClick: n
                        } = e;
                        l && n && (0, a.trackEvent)(l.category, l.event, `${l.label}_rightClick`)
                    },
                    onMouseUp: function(o) {
                        const {
                            trackEventObject: l,
                            trackMouseWheelClick: n
                        } = e;
                        if (1 === o.button && b && l) {
                            let e = l.label;
                            n && (e += "_mouseWheelClick"), (0, a.trackEvent)(l.category, l.event, e)
                        }
                    },
                    onMouseOver: P,
                    onMouseOut: _,
                    onKeyDown: R,
                    tabIndex: B
                }, void 0 !== z && n.createElement("span", {
                    className: E.icon,
                    dangerouslySetInnerHTML: {
                        __html: z
                    }
                }), n.createElement("span", {
                    className: i(E.labelRow, L)
                }, n.createElement("span", {
                    className: i(E.label, v)
                }, x)), (void 0 !== g || p) && n.createElement("span", {
                    className: E.shortcut
                }, (G = g) && G.split("+").join(" + ")), void 0 !== I && n.createElement("span", {
                    onClick: k ? d : void 0,
                    className: i(E.toolbox, {
                        [E.showOnHover]: M
                    })
                }, I));
                var G
            }
        },
        320116: (e, o, l) => {
            "use strict";
            l.d(o, {
                CloseDelegateContext: () => t
            });
            var n = l(50959),
                i = l(224743);
            const t = n.createContext(i.globalCloseDelegate)
        },
        45968: (e, o, l) => {
            "use strict";
            l.d(o, {
                PopupMenu: () => d
            });
            var n = l(50959),
                i = l(500962),
                t = l(162942),
                a = l(707533),
                s = l(175071),
                r = l(320116),
                c = l(951292);

            function d(e) {
                const {
                    controller: o,
                    children: l,
                    isOpened: d,
                    closeOnClickOutside: h = !0,
                    doNotCloseOn: m,
                    onClickOutside: u,
                    onClose: T,
                    onKeyboardClose: L,
                    "data-name": v = "popup-menu-container",
                    ...g
                } = e, p = (0, n.useContext)(r.CloseDelegateContext), z = (0, c.useOutsideEvent)({
                    handler: function(e) {
                        u && u(e);
                        if (!h) return;
                        const o = (0, t.default)(m) ? m() : m;
                        if (o && e.target instanceof Node) {
                            const l = i.findDOMNode(o);
                            if (l instanceof Node && l.contains(e.target)) return
                        }
                        T()
                    },
                    mouseDown: !0,
                    touchStart: !0
                });
                return d ? n.createElement(a.Portal, {
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    pointerEvents: "none"
                }, n.createElement("span", {
                    ref: z,
                    style: {
                        pointerEvents: "auto"
                    }
                }, n.createElement(s.Menu, { ...g,
                    onClose: T,
                    onKeyboardClose: L,
                    onScroll: function(o) {
                        const {
                            onScroll: l
                        } = e;
                        l && l(o)
                    },
                    customCloseDelegate: p,
                    ref: o,
                    "data-name": v
                }, l))) : null
            }
        },
        707533: (e, o, l) => {
            "use strict";
            l.d(o, {
                Portal: () => r,
                PortalContext: () => c
            });
            var n = l(50959),
                i = l(500962),
                t = l(777491),
                a = l(829725),
                s = l(670797);
            class r extends n.PureComponent {
                constructor() {
                    super(...arguments), this._uuid = (0, t.guid)()
                }
                componentWillUnmount() {
                    this._manager().removeWindow(this._uuid)
                }
                render() {
                    const e = this._manager().ensureWindow(this._uuid, this.props.layerOptions);
                    return e.style.top = this.props.top || "", e.style.bottom = this.props.bottom || "", e.style.left = this.props.left || "", e.style.right = this.props.right || "", e.style.pointerEvents = this.props.pointerEvents || "", i.createPortal(n.createElement(c.Provider, {
                        value: this
                    }, this.props.children), e)
                }
                moveToTop() {
                    this._manager().moveToTop(this._uuid)
                }
                _manager() {
                    return null === this.context ? (0, a.getRootOverlapManager)() : this.context
                }
            }
            r.contextType = s.SlotContext;
            const c = n.createContext(null)
        },
        670797: (e, o, l) => {
            "use strict";
            l.d(o, {
                Slot: () => i,
                SlotContext: () => t
            });
            var n = l(50959);
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
            const t = n.createContext(null)
        },
        787684: (e, o, l) => {
            "use strict";
            l.d(o, {
                SubmenuContext: () => i,
                SubmenuHandler: () => t
            });
            var n = l(50959);
            const i = n.createContext(null);

            function t(e) {
                const [o, l] = (0, n.useState)(null), t = (0, n.useRef)(null), a = (0, n.useRef)(new Map);
                return (0, n.useEffect)((() => () => {
                    null !== t.current && clearTimeout(t.current)
                }), []), n.createElement(i.Provider, {
                    value: {
                        current: o,
                        setCurrent: function(e) {
                            null !== t.current && (clearTimeout(t.current), t.current = null);
                            null === o ? l(e) : t.current = setTimeout((() => {
                                t.current = null, l(e)
                            }), 100)
                        },
                        registerSubmenu: function(e, o) {
                            return a.current.set(e, o), () => {
                                a.current.delete(e)
                            }
                        },
                        isSubmenuNode: function(e) {
                            return Array.from(a.current.values()).some((o => o(e)))
                        }
                    }
                }, e.children)
            }
        },
        995683: (e, o, l) => {
            "use strict";

            function n(e, o, l = {}) {
                return Object.assign({}, e, function(e, o, l = {}) {
                    const n = Object.assign({}, o);
                    for (const i of Object.keys(o)) {
                        const t = l[i] || i;
                        t in e && (n[i] = [e[t], o[i]].join(" "))
                    }
                    return n
                }(e, o, l))
            }
            l.d(o, {
                mergeThemes: () => n
            })
        },
        602492: (e, o, l) => {
            "use strict";
            l.d(o, {
                drawingToolsIcons: () => n
            });
            const n = {
                SyncDrawing: l(299088),
                arrow: l(363743),
                cursor: l(418953),
                dot: l(372196),
                drawginmode: l(53950),
                drawginmodeActive: l(401532),
                eraser: l(927999),
                group: l(134059),
                hideAllDrawings: l(245820),
                hideAllDrawingsActive: l(484959),
                hideAllIndicators: l(842321),
                hideAllIndicatorsActive: l(875895),
                hideAllDrawingTools: l(193756),
                hideAllDrawingToolsActive: l(842650),
                hideAllPositionsTools: l(157313),
                hideAllPositionsToolsActive: l(265162),
                lockAllDrawings: l(691244),
                lockAllDrawingsActive: l(665186),
                magnet: l(268385),
                heart: l(10862),
                smile: l(507636),
                strongMagnet: l(146049),
                measure: l(688518),
                removeAllDrawingTools: l(535149),
                showObjectTree: l(36515),
                zoom: l(6894),
                "zoom-out": l(745360)
            }
        },
        589015: (e, o, l) => {
            "use strict";
            l.d(o, {
                lineTools: () => r
            });
            var n = l(777754),
                i = l(638456),
                t = l(125226),
                a = l(470316);
            const s = !(0, i.onWidget)(),
                r = [{
                    id: "linetool-group-cursors",
                    title: n.t(null, void 0, l(682401)),
                    items: [{
                        name: "cursor"
                    }, {
                        name: "dot"
                    }, {
                        name: "arrow"
                    }, {
                        name: "eraser"
                    }],
                    trackLabel: "cursors"
                }, {
                    id: "linetool-group-trend-line",
                    title: n.t(null, void 0, l(852899)),
                    items: [{
                        name: "LineToolTrendLine",
                        hotkeyHash: a.Modifiers.Alt + 84
                    }, {
                        name: "LineToolArrow"
                    }, {
                        name: "LineToolRay"
                    }, {
                        name: "LineToolInfoLine"
                    }, {
                        name: "LineToolExtended"
                    }, {
                        name: "LineToolTrendAngle"
                    }, {
                        name: "LineToolHorzLine",
                        hotkeyHash: a.Modifiers.Alt + 72
                    }, {
                        name: "LineToolHorzRay",
                        hotkeyHash: a.Modifiers.Alt + 74
                    }, {
                        name: "LineToolVertLine",
                        hotkeyHash: a.Modifiers.Alt + 86
                    }, {
                        name: "LineToolCrossLine",
                        hotkeyHash: a.Modifiers.Alt + 67
                    }, {
                        name: "LineToolParallelChannel"
                    }, {
                        name: "LineToolRegressionTrend"
                    }, {
                        name: "LineToolFlatBottom"
                    }, {
                        name: "LineToolDisjointAngle"
                    }, {
                        name: "LineToolAnchoredVWAP"
                    }].filter(Boolean),
                    trackLabel: "trend line tools"
                }, {
                    id: "linetool-group-gann-and-fibonacci",
                    title: n.t(null, void 0, l(875377)),
                    items: [{
                        name: "LineToolFibRetracement",
                        hotkeyHash: a.Modifiers.Alt + 70
                    }, {
                        name: "LineToolTrendBasedFibExtension"
                    }, {
                        name: "LineToolPitchfork"
                    }, {
                        name: "LineToolSchiffPitchfork2"
                    }, {
                        name: "LineToolSchiffPitchfork"
                    }, {
                        name: "LineToolInsidePitchfork"
                    }, {
                        name: "LineToolFibChannel"
                    }, {
                        name: "LineToolFibTimeZone"
                    }, {
                        name: "LineToolGannSquare"
                    }, {
                        name: "LineToolGannFixed"
                    }, {
                        name: "LineToolGannComplex"
                    }, {
                        name: "LineToolGannFan"
                    }, {
                        name: "LineToolFibSpeedResistanceFan"
                    }, {
                        name: "LineToolTrendBasedFibTime"
                    }, {
                        name: "LineToolFibCircles"
                    }, {
                        name: "LineToolPitchfan"
                    }, {
                        name: "LineToolFibSpiral"
                    }, {
                        name: "LineToolFibSpeedResistanceArcs"
                    }, {
                        name: "LineToolFibWedge"
                    }],
                    trackLabel: "gan and fib tools"
                }, {
                    id: "linetool-group-geometric-shapes",
                    title: n.t(null, void 0, l(995537)),
                    items: [{
                        name: "LineToolBrush"
                    }, {
                        name: "LineToolHighlighter"
                    }, {
                        name: "LineToolRectangle"
                    }, {
                        name: "LineToolCircle"
                    }, {
                        name: "LineToolEllipse"
                    }, {
                        name: "LineToolPath"
                    }, {
                        name: "LineToolBezierQuadro"
                    }, {
                        name: "LineToolPolyline"
                    }, {
                        name: "LineToolTriangle"
                    }, {
                        name: "LineToolRotatedRectangle"
                    }, {
                        name: "LineToolArc"
                    }, {
                        name: "LineToolBezierCubic"
                    }],
                    trackLabel: "geometric shapes"
                }, {
                    id: "linetool-group-annotation",
                    title: n.t(null, void 0, l(799878)),
                    items: [{
                        name: "LineToolText"
                    }, {
                        name: "LineToolTextAbsolute"
                    }, {
                        name: "LineToolNote"
                    }, {
                        name: "LineToolNoteAbsolute"
                    }, {
                        name: "LineToolSignpost"
                    }, s && !(0, t.isFeatureEnabled)("hide_tweet_drawingtool") ? {
                        name: "LineToolTweet"
                    } : null, s ? {
                        name: "LineToolIdea"
                    } : null, s ? {
                        name: "LineToolImage"
                    } : null, {
                        name: "LineToolCallout"
                    }, {
                        name: "LineToolComment"
                    }, {
                        name: "LineToolPriceLabel"
                    }, {
                        name: "LineToolPriceNote"
                    }, {
                        name: "LineToolArrowMarker"
                    }, {
                        name: "LineToolArrowMarkLeft"
                    }, {
                        name: "LineToolArrowMarkRight"
                    }, {
                        name: "LineToolArrowMarkUp"
                    }, {
                        name: "LineToolArrowMarkDown"
                    }, {
                        name: "LineToolFlagMark"
                    }].filter(Boolean),
                    trackLabel: "annotation tools"
                }, {
                    id: "linetool-group-patterns",
                    title: n.t(null, void 0, l(219693)),
                    items: [{
                        name: "LineTool5PointsPattern"
                    }, {
                        name: "LineToolCypherPattern"
                    }, {
                        name: "LineToolABCD"
                    }, {
                        name: "LineToolTrianglePattern"
                    }, {
                        name: "LineToolThreeDrivers"
                    }, {
                        name: "LineToolHeadAndShoulders"
                    }, {
                        name: "LineToolElliottImpulse"
                    }, {
                        name: "LineToolElliottTriangle"
                    }, {
                        name: "LineToolElliottTripleCombo"
                    }, {
                        name: "LineToolElliottCorrection"
                    }, {
                        name: "LineToolElliottDoubleCombo"
                    }, {
                        name: "LineToolCircleLines"
                    }, {
                        name: "LineToolTimeCycles"
                    }, {
                        name: "LineToolSineLine"
                    }],
                    trackLabel: "patterns"
                }, {
                    id: "linetool-group-prediction-and-measurement",
                    title: n.t(null, void 0, l(410234)),
                    items: [{
                        name: "LineToolRiskRewardLong"
                    }, {
                        name: "LineToolRiskRewardShort"
                    }, {
                        name: "LineToolPrediction"
                    }, {
                        name: "LineToolDateRange"
                    }, {
                        name: "LineToolPriceRange"
                    }, {
                        name: "LineToolDateAndPriceRange"
                    }, {
                        name: "LineToolBarsPattern"
                    }, (0, t.isFeatureEnabled)("remove-line-tool-ghost-feed") ? null : {
                        name: "LineToolGhostFeed"
                    }, {
                        name: "LineToolProjection"
                    }, {
                        name: "LineToolFixedRangeVolumeProfile"
                    }].filter(Boolean),
                    trackLabel: "prediction tools"
                }]
        },
        551065: (e, o, l) => {
            "use strict";
            l.d(o, {
                lineToolsInfo: () => v
            });
            var n = l(777754),
                i = l(125226),
                t = l(604286),
                a = (l(984919), l(94710)),
                s = l(602492),
                r = l(51782),
                c = l(470316);
            const d = (0, c.humanReadableModifiers)(c.Modifiers.Shift, !1),
                h = (0, c.humanReadableModifiers)(c.Modifiers.Alt, !1),
                m = (0, c.humanReadableModifiers)(c.Modifiers.Mod, !1),
                u = {
                    keys: [d],
                    text: n.t(null, void 0, l(240234))
                },
                T = {
                    keys: [d],
                    text: n.t(null, void 0, l(468125))
                },
                L = {
                    keys: [d],
                    text: n.t(null, void 0, l(481591))
                },
                v = {
                    LineTool5PointsPattern: {
                        icon: a.lineToolsIcons.LineTool5PointsPattern,
                        localizedName: r.lineToolsLocalizedNames.LineTool5PointsPattern
                    },
                    LineToolABCD: {
                        icon: a.lineToolsIcons.LineToolABCD,
                        localizedName: r.lineToolsLocalizedNames.LineToolABCD
                    },
                    LineToolArc: {
                        icon: a.lineToolsIcons.LineToolArc,
                        localizedName: r.lineToolsLocalizedNames.LineToolArc
                    },
                    LineToolArrow: {
                        icon: a.lineToolsIcons.LineToolArrow,
                        localizedName: r.lineToolsLocalizedNames.LineToolArrow
                    },
                    LineToolArrowMarkDown: {
                        icon: a.lineToolsIcons.LineToolArrowMarkDown,
                        localizedName: r.lineToolsLocalizedNames.LineToolArrowMarkDown
                    },
                    LineToolArrowMarkLeft: {
                        icon: a.lineToolsIcons.LineToolArrowMarkLeft,
                        localizedName: r.lineToolsLocalizedNames.LineToolArrowMarkLeft
                    },
                    LineToolArrowMarkRight: {
                        icon: a.lineToolsIcons.LineToolArrowMarkRight,
                        localizedName: r.lineToolsLocalizedNames.LineToolArrowMarkRight
                    },
                    LineToolArrowMarkUp: {
                        icon: a.lineToolsIcons.LineToolArrowMarkUp,
                        localizedName: r.lineToolsLocalizedNames.LineToolArrowMarkUp
                    },
                    LineToolBalloon: {
                        icon: a.lineToolsIcons.LineToolBalloon,
                        localizedName: r.lineToolsLocalizedNames.LineToolBalloon
                    },
                    LineToolComment: {
                        icon: a.lineToolsIcons.LineToolComment,
                        localizedName: r.lineToolsLocalizedNames.LineToolComment
                    },
                    LineToolBarsPattern: {
                        icon: a.lineToolsIcons.LineToolBarsPattern,
                        localizedName: r.lineToolsLocalizedNames.LineToolBarsPattern
                    },
                    LineToolBezierCubic: {
                        icon: a.lineToolsIcons.LineToolBezierCubic,
                        localizedName: r.lineToolsLocalizedNames.LineToolBezierCubic
                    },
                    LineToolBezierQuadro: {
                        icon: a.lineToolsIcons.LineToolBezierQuadro,
                        localizedName: r.lineToolsLocalizedNames.LineToolBezierQuadro
                    },
                    LineToolBrush: {
                        icon: a.lineToolsIcons.LineToolBrush,
                        localizedName: r.lineToolsLocalizedNames.LineToolBrush
                    },
                    LineToolCallout: {
                        icon: a.lineToolsIcons.LineToolCallout,
                        localizedName: r.lineToolsLocalizedNames.LineToolCallout
                    },
                    LineToolCircleLines: {
                        icon: a.lineToolsIcons.LineToolCircleLines,
                        localizedName: r.lineToolsLocalizedNames.LineToolCircleLines
                    },
                    LineToolCypherPattern: {
                        icon: a.lineToolsIcons.LineToolCypherPattern,
                        localizedName: r.lineToolsLocalizedNames.LineToolCypherPattern
                    },
                    LineToolDateAndPriceRange: {
                        icon: a.lineToolsIcons.LineToolDateAndPriceRange,
                        localizedName: r.lineToolsLocalizedNames.LineToolDateAndPriceRange
                    },
                    LineToolDateRange: {
                        icon: a.lineToolsIcons.LineToolDateRange,
                        localizedName: r.lineToolsLocalizedNames.LineToolDateRange
                    },
                    LineToolDisjointAngle: {
                        icon: a.lineToolsIcons.LineToolDisjointAngle,
                        localizedName: r.lineToolsLocalizedNames.LineToolDisjointAngle,
                        hotKey: (0, t.hotKeySerialize)(u)
                    },
                    LineToolElliottCorrection: {
                        icon: a.lineToolsIcons.LineToolElliottCorrection,
                        localizedName: r.lineToolsLocalizedNames.LineToolElliottCorrection
                    },
                    LineToolElliottDoubleCombo: {
                        icon: a.lineToolsIcons.LineToolElliottDoubleCombo,
                        localizedName: r.lineToolsLocalizedNames.LineToolElliottDoubleCombo
                    },
                    LineToolElliottImpulse: {
                        icon: a.lineToolsIcons.LineToolElliottImpulse,
                        localizedName: r.lineToolsLocalizedNames.LineToolElliottImpulse
                    },
                    LineToolElliottTriangle: {
                        icon: a.lineToolsIcons.LineToolElliottTriangle,
                        localizedName: r.lineToolsLocalizedNames.LineToolElliottTriangle
                    },
                    LineToolElliottTripleCombo: {
                        icon: a.lineToolsIcons.LineToolElliottTripleCombo,
                        localizedName: r.lineToolsLocalizedNames.LineToolElliottTripleCombo
                    },
                    LineToolEllipse: {
                        icon: a.lineToolsIcons.LineToolEllipse,
                        localizedName: r.lineToolsLocalizedNames.LineToolEllipse,
                        hotKey: (0, t.hotKeySerialize)(T)
                    },
                    LineToolExtended: {
                        icon: a.lineToolsIcons.LineToolExtended,
                        localizedName: r.lineToolsLocalizedNames.LineToolExtended
                    },
                    LineToolFibChannel: {
                        icon: a.lineToolsIcons.LineToolFibChannel,
                        localizedName: r.lineToolsLocalizedNames.LineToolFibChannel
                    },
                    LineToolFibCircles: {
                        icon: a.lineToolsIcons.LineToolFibCircles,
                        localizedName: r.lineToolsLocalizedNames.LineToolFibCircles,
                        hotKey: (0, t.hotKeySerialize)(T)
                    },
                    LineToolFibRetracement: {
                        icon: a.lineToolsIcons.LineToolFibRetracement,
                        localizedName: r.lineToolsLocalizedNames.LineToolFibRetracement
                    },
                    LineToolFibSpeedResistanceArcs: {
                        icon: a.lineToolsIcons.LineToolFibSpeedResistanceArcs,
                        localizedName: r.lineToolsLocalizedNames.LineToolFibSpeedResistanceArcs
                    },
                    LineToolFibSpeedResistanceFan: {
                        icon: a.lineToolsIcons.LineToolFibSpeedResistanceFan,
                        localizedName: r.lineToolsLocalizedNames.LineToolFibSpeedResistanceFan,
                        hotKey: (0, t.hotKeySerialize)(L)
                    },
                    LineToolFibSpiral: {
                        icon: a.lineToolsIcons.LineToolFibSpiral,
                        localizedName: r.lineToolsLocalizedNames.LineToolFibSpiral
                    },
                    LineToolFibTimeZone: {
                        icon: a.lineToolsIcons.LineToolFibTimeZone,
                        localizedName: r.lineToolsLocalizedNames.LineToolFibTimeZone
                    },
                    LineToolFibWedge: {
                        icon: a.lineToolsIcons.LineToolFibWedge,
                        localizedName: r.lineToolsLocalizedNames.LineToolFibWedge
                    },
                    LineToolFlagMark: {
                        icon: a.lineToolsIcons.LineToolFlagMark,
                        localizedName: r.lineToolsLocalizedNames.LineToolFlagMark
                    },
                    LineToolImage: {
                        icon: a.lineToolsIcons.LineToolImage,
                        localizedName: r.lineToolsLocalizedNames.LineToolImage
                    },
                    LineToolFlatBottom: {
                        icon: a.lineToolsIcons.LineToolFlatBottom,
                        localizedName: r.lineToolsLocalizedNames.LineToolFlatBottom,
                        hotKey: (0, t.hotKeySerialize)(u)
                    },
                    LineToolAnchoredVWAP: {
                        icon: a.lineToolsIcons.LineToolAnchoredVWAP,
                        localizedName: r.lineToolsLocalizedNames.LineToolAnchoredVWAP
                    },
                    LineToolGannComplex: {
                        icon: a.lineToolsIcons.LineToolGannComplex,
                        localizedName: r.lineToolsLocalizedNames.LineToolGannComplex
                    },
                    LineToolGannFixed: {
                        icon: a.lineToolsIcons.LineToolGannFixed,
                        localizedName: r.lineToolsLocalizedNames.LineToolGannFixed
                    },
                    LineToolGannFan: {
                        icon: a.lineToolsIcons.LineToolGannFan,
                        localizedName: r.lineToolsLocalizedNames.LineToolGannFan
                    },
                    LineToolGannSquare: {
                        icon: a.lineToolsIcons.LineToolGannSquare,
                        localizedName: r.lineToolsLocalizedNames.LineToolGannSquare,
                        hotKey: (0, t.hotKeySerialize)({
                            keys: [d],
                            text: n.t(null, void 0, l(510289))
                        })
                    },
                    LineToolHeadAndShoulders: {
                        icon: a.lineToolsIcons.LineToolHeadAndShoulders,
                        localizedName: r.lineToolsLocalizedNames.LineToolHeadAndShoulders
                    },
                    LineToolHorzLine: {
                        icon: a.lineToolsIcons.LineToolHorzLine,
                        localizedName: r.lineToolsLocalizedNames.LineToolHorzLine,
                        hotKey: (0, t.hotKeySerialize)({
                            keys: [h, "H"],
                            text: "{0} + {1}"
                        })
                    },
                    LineToolHorzRay: {
                        icon: a.lineToolsIcons.LineToolHorzRay,
                        localizedName: r.lineToolsLocalizedNames.LineToolHorzRay
                    },
                    LineToolIcon: {
                        icon: a.lineToolsIcons.LineToolIcon,
                        localizedName: r.lineToolsLocalizedNames.LineToolIcon
                    },
                    LineToolEmoji: {
                        icon: a.lineToolsIcons.LineToolEmoji,
                        localizedName: r.lineToolsLocalizedNames.LineToolEmoji
                    },
                    LineToolInsidePitchfork: {
                        icon: a.lineToolsIcons.LineToolInsidePitchfork,
                        localizedName: r.lineToolsLocalizedNames.LineToolInsidePitchfork
                    },
                    LineToolNote: {
                        icon: a.lineToolsIcons.LineToolNote,
                        localizedName: r.lineToolsLocalizedNames.LineToolNote
                    },
                    LineToolNoteAbsolute: {
                        icon: a.lineToolsIcons.LineToolNoteAbsolute,
                        localizedName: r.lineToolsLocalizedNames.LineToolNoteAbsolute
                    },
                    LineToolSignpost: {
                        icon: a.lineToolsIcons.LineToolSignpost,
                        localizedName: r.lineToolsLocalizedNames.LineToolSignpost
                    },
                    LineToolParallelChannel: {
                        icon: a.lineToolsIcons.LineToolParallelChannel,
                        localizedName: r.lineToolsLocalizedNames.LineToolParallelChannel,
                        hotKey: (0, t.hotKeySerialize)(u)
                    },
                    LineToolPitchfan: {
                        icon: a.lineToolsIcons.LineToolPitchfan,
                        localizedName: r.lineToolsLocalizedNames.LineToolPitchfan
                    },
                    LineToolPitchfork: {
                        icon: a.lineToolsIcons.LineToolPitchfork,
                        localizedName: r.lineToolsLocalizedNames.LineToolPitchfork
                    },
                    LineToolPolyline: {
                        icon: a.lineToolsIcons.LineToolPolyline,
                        localizedName: r.lineToolsLocalizedNames.LineToolPolyline
                    },
                    LineToolPath: {
                        icon: a.lineToolsIcons.LineToolPath,
                        localizedName: r.lineToolsLocalizedNames.LineToolPath
                    },
                    LineToolPrediction: {
                        icon: a.lineToolsIcons.LineToolPrediction,
                        localizedName: r.lineToolsLocalizedNames.LineToolPrediction
                    },
                    LineToolPriceLabel: {
                        icon: a.lineToolsIcons.LineToolPriceLabel,
                        localizedName: r.lineToolsLocalizedNames.LineToolPriceLabel
                    },
                    LineToolPriceNote: {
                        icon: a.lineToolsIcons.LineToolPriceNote,
                        localizedName: r.lineToolsLocalizedNames.LineToolPriceNote,
                        hotKey: (0, t.hotKeySerialize)(u)
                    },
                    LineToolArrowMarker: {
                        icon: a.lineToolsIcons.LineToolArrowMarker,
                        localizedName: r.lineToolsLocalizedNames.LineToolArrowMarker
                    },
                    LineToolPriceRange: {
                        icon: a.lineToolsIcons.LineToolPriceRange,
                        localizedName: r.lineToolsLocalizedNames.LineToolPriceRange
                    },
                    LineToolProjection: {
                        icon: a.lineToolsIcons.LineToolProjection,
                        localizedName: r.lineToolsLocalizedNames.LineToolProjection
                    },
                    LineToolRay: {
                        icon: a.lineToolsIcons.LineToolRay,
                        localizedName: r.lineToolsLocalizedNames.LineToolRay
                    },
                    LineToolRectangle: {
                        icon: a.lineToolsIcons.LineToolRectangle,
                        localizedName: r.lineToolsLocalizedNames.LineToolRectangle,
                        hotKey: (0, t.hotKeySerialize)({
                            keys: [d],
                            text: n.t(null, void 0, l(481591))
                        })
                    },
                    LineToolCircle: {
                        icon: a.lineToolsIcons.LineToolCircle,
                        localizedName: r.lineToolsLocalizedNames.LineToolCircle
                    },
                    LineToolRegressionTrend: {
                        icon: a.lineToolsIcons.LineToolRegressionTrend,
                        localizedName: r.lineToolsLocalizedNames.LineToolRegressionTrend
                    },
                    LineToolRiskRewardLong: {
                        icon: a.lineToolsIcons.LineToolRiskRewardLong,
                        localizedName: r.lineToolsLocalizedNames.LineToolRiskRewardLong
                    },
                    LineToolRiskRewardShort: {
                        icon: a.lineToolsIcons.LineToolRiskRewardShort,
                        localizedName: r.lineToolsLocalizedNames.LineToolRiskRewardShort
                    },
                    LineToolFixedRangeVolumeProfile: {
                        icon: a.lineToolsIcons.LineToolFixedRangeVolumeProfile,
                        localizedName: r.lineToolsLocalizedNames.LineToolFixedRangeVolumeProfile
                    },
                    LineToolRotatedRectangle: {
                        icon: a.lineToolsIcons.LineToolRotatedRectangle,
                        localizedName: r.lineToolsLocalizedNames.LineToolRotatedRectangle,
                        hotKey: (0, t.hotKeySerialize)(u)
                    },
                    LineToolSchiffPitchfork: {
                        icon: a.lineToolsIcons.LineToolSchiffPitchfork,
                        localizedName: r.lineToolsLocalizedNames.LineToolSchiffPitchfork
                    },
                    LineToolSchiffPitchfork2: {
                        icon: a.lineToolsIcons.LineToolSchiffPitchfork2,
                        localizedName: r.lineToolsLocalizedNames.LineToolSchiffPitchfork2
                    },
                    LineToolSineLine: {
                        icon: a.lineToolsIcons.LineToolSineLine,
                        localizedName: r.lineToolsLocalizedNames.LineToolSineLine
                    },
                    LineToolText: {
                        icon: a.lineToolsIcons.LineToolText,
                        localizedName: r.lineToolsLocalizedNames.LineToolText
                    },
                    LineToolTextAbsolute: {
                        icon: a.lineToolsIcons.LineToolTextAbsolute,
                        localizedName: r.lineToolsLocalizedNames.LineToolTextAbsolute
                    },
                    LineToolThreeDrivers: {
                        icon: a.lineToolsIcons.LineToolThreeDrivers,
                        localizedName: r.lineToolsLocalizedNames.LineToolThreeDrivers
                    },
                    LineToolTimeCycles: {
                        icon: a.lineToolsIcons.LineToolTimeCycles,
                        localizedName: r.lineToolsLocalizedNames.LineToolTimeCycles
                    },
                    LineToolTrendAngle: {
                        icon: a.lineToolsIcons.LineToolTrendAngle,
                        localizedName: r.lineToolsLocalizedNames.LineToolTrendAngle,
                        hotKey: (0, t.hotKeySerialize)(u)
                    },
                    LineToolTrendBasedFibExtension: {
                        icon: a.lineToolsIcons.LineToolTrendBasedFibExtension,
                        localizedName: r.lineToolsLocalizedNames.LineToolTrendBasedFibExtension
                    },
                    LineToolTrendBasedFibTime: {
                        icon: a.lineToolsIcons.LineToolTrendBasedFibTime,
                        localizedName: r.lineToolsLocalizedNames.LineToolTrendBasedFibTime
                    },
                    LineToolTrendLine: {
                        icon: a.lineToolsIcons.LineToolTrendLine,
                        localizedName: r.lineToolsLocalizedNames.LineToolTrendLine,
                        hotKey: (0, t.hotKeySerialize)(u)
                    },
                    LineToolInfoLine: {
                        icon: a.lineToolsIcons.LineToolInfoLine,
                        localizedName: r.lineToolsLocalizedNames.LineToolInfoLine
                    },
                    LineToolTriangle: {
                        icon: a.lineToolsIcons.LineToolTriangle,
                        localizedName: r.lineToolsLocalizedNames.LineToolTriangle
                    },
                    LineToolTrianglePattern: {
                        icon: a.lineToolsIcons.LineToolTrianglePattern,
                        localizedName: r.lineToolsLocalizedNames.LineToolTrianglePattern
                    },
                    LineToolVertLine: {
                        icon: a.lineToolsIcons.LineToolVertLine,
                        localizedName: r.lineToolsLocalizedNames.LineToolVertLine,
                        hotKey: (0, t.hotKeySerialize)({
                            keys: [h, "V"],
                            text: "{0} + {1}"
                        })
                    },
                    LineToolCrossLine: {
                        icon: a.lineToolsIcons.LineToolCrossLine,
                        localizedName: r.lineToolsLocalizedNames.LineToolCrossLine
                    },
                    LineToolHighlighter: {
                        icon: a.lineToolsIcons.LineToolHighlighter,
                        localizedName: r.lineToolsLocalizedNames.LineToolHighlighter
                    },
                    SyncDrawing: {
                        icon: s.drawingToolsIcons.SyncDrawing,
                        iconActive: s.drawingToolsIcons.SyncDrawingActive,
                        localizedName: n.t(null, void 0, l(736551))
                    },
                    arrow: {
                        icon: s.drawingToolsIcons.arrow,
                        localizedName: n.t(null, void 0, l(696237))
                    },
                    cursor: {
                        icon: s.drawingToolsIcons.cursor,
                        localizedName: n.t(null, void 0, l(429908))
                    },
                    dot: {
                        icon: s.drawingToolsIcons.dot,
                        localizedName: n.t(null, void 0, l(860925))
                    },
                    drawginmode: {
                        icon: s.drawingToolsIcons.drawginmode,
                        iconActive: s.drawingToolsIcons.drawginmodeActive,
                        localizedName: n.t(null, void 0, l(749421))
                    },
                    eraser: {
                        icon: s.drawingToolsIcons.eraser,
                        localizedName: n.t(null, void 0, l(299289))
                    },
                    group: {
                        icon: s.drawingToolsIcons.group,
                        localizedName: n.t(null, void 0, l(691977))
                    },
                    hideAllDrawings: {
                        icon: s.drawingToolsIcons.hideAllDrawings,
                        iconActive: s.drawingToolsIcons.hideAllDrawingsActive,
                        localizedName: n.t(null, void 0, l(717517)),
                        hotKey: (0, t.hotKeySerialize)({
                            keys: [m, h, "H"],
                            text: "{0} + {1} + {2}"
                        })
                    },
                    lockAllDrawings: {
                        icon: s.drawingToolsIcons.lockAllDrawings,
                        iconActive: s.drawingToolsIcons.lockAllDrawingsActive,
                        localizedName: n.t(null, void 0, l(537057))
                    },
                    magnet: {
                        icon: s.drawingToolsIcons.magnet,
                        localizedName: n.t(null, void 0, l(937140)),
                        hotKey: (0, t.hotKeySerialize)({
                            keys: [m],
                            text: "{0}"
                        })
                    },
                    measure: {
                        icon: s.drawingToolsIcons.measure,
                        localizedName: n.t(null, void 0, l(659607)),
                        hotKey: (0, t.hotKeySerialize)({
                            keys: [d],
                            text: n.t(null, void 0, l(132868))
                        })
                    },
                    removeAllDrawingTools: {
                        icon: s.drawingToolsIcons.removeAllDrawingTools,
                        localizedName: n.t(null, void 0, l(376091))
                    },
                    showObjectsTree: {
                        icon: s.drawingToolsIcons.showObjectTree,
                        localizedName: n.t(null, void 0, l(551072))
                    },
                    zoom: {
                        icon: s.drawingToolsIcons.zoom,
                        localizedName: n.t(null, void 0, l(38925))
                    },
                    "zoom-out": {
                        icon: s.drawingToolsIcons["zoom-out"],
                        localizedName: n.t(null, void 0, l(949895))
                    }
                };
            (0, i.isFeatureEnabled)("remove-line-tool-ghost-feed") || (v.LineToolGhostFeed = {
                icon: a.lineToolsIcons.LineToolGhostFeed,
                localizedName: r.lineToolsLocalizedNames.LineToolGhostFeed
            }), (0, i.isFeatureEnabled)("hide_tweet_drawingtool") || (v.LineToolTweet = {
                icon: a.lineToolsIcons.LineToolTweet,
                localizedName: r.lineToolsLocalizedNames.LineToolTweet
            }), v.LineToolIdea = {
                icon: a.lineToolsIcons.LineToolIdea,
                localizedName: r.lineToolsLocalizedNames.LineToolIdea
            }
        },
        181317: (e, o, l) => {
            "use strict";
            l.d(o, {
                LinetoolsFavoritesStore: () => d
            });
            var n = l(869403),
                i = l.n(n),
                t = l(125226),
                a = l(62802);
            const s = ["LineToolBalloon"],
                r = (0, t.isFeatureEnabled)("hide_tweet_drawingtool");
            var c, d;
            ! function(e) {
                function o() {
                    e.favorites = [];
                    let o = !1;
                    (0, a.getJSON)("chart.favoriteDrawings", []).forEach(((n, i) => {
                        const t = n.tool || n;
                        l(t) ? s.includes(t) ? o = !0 : e.favorites.push(t) : "LineToolTweet" === t && (e.tweetToolPosition = i)
                    })), o && n(), e.favoritesSynced.fire()
                }

                function l(e) {
                    return "string" == typeof e && "" !== e && !(r && "LineToolTweet" === e)
                }

                function n(o) {
                    const l = e.favorites.slice();
                    null !== e.tweetToolPosition && l.splice(e.tweetToolPosition, 0, "LineToolTweet"), (0, a.setJSON)("chart.favoriteDrawings", l, o)
                }
                e.favorites = [], e.favoritesSynced = new(i()), e.tweetToolPosition = null, e.favoriteIndex = function(o) {
                    return e.favorites.indexOf(o)
                }, e.isValidLineToolName = l, e.saveFavorites = n, o(), a.onSync.subscribe(null, o)
            }(c || (c = {})),
            function(e) {
                function o(e) {
                    return c.isValidLineToolName(e)
                }

                function l() {
                    return c.favorites.length
                }

                function n(e) {
                    return -1 !== c.favoriteIndex(e)
                }
                e.favoriteAdded = new(i()), e.favoriteRemoved = new(i()), e.favoriteMoved = new(i()), e.favoritesSynced = c.favoritesSynced, e.favorites = function() {
                    return c.favorites.slice()
                }, e.isValidLineToolName = o, e.favoritesCount = l, e.favorite = function(e) {
                    return e < 0 || e >= l() ? "" : c.favorites[e]
                }, e.addFavorite = function(l, i) {
                    return !(n(l) || !o(l)) && (c.favorites.push(l), c.saveFavorites(i), e.favoriteAdded.fire(l), !0)
                }, e.removeFavorite = function(o, l) {
                    const n = c.favoriteIndex(o);
                    if (-1 === n) return !1;
                    c.favorites.splice(n, 1);
                    const i = c.tweetToolPosition;
                    return null !== i && i > n && (c.tweetToolPosition = i - 1), c.saveFavorites(l), e.favoriteRemoved.fire(o), !0
                }, e.isFavorite = n, e.moveFavorite = function(n, i, t) {
                    if (i < 0 || i >= l() || !o(n)) return !1;
                    const a = c.favoriteIndex(n);
                    if (-1 === a || i === a) return !1;
                    let s = c.tweetToolPosition;
                    return null !== s && (a < s && i > s ? s-- : i < s && a > s && s++, c.tweetToolPosition = s), c.favorites.splice(a, 1), c.favorites.splice(i, 0, n), c.saveFavorites(t), e.favoriteMoved.fire(n, a, i), !0
                }
            }(d || (d = {}))
        },
        134059: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30"><path fill="currentColor" d="M5.5 13A2.5 2.5 0 0 0 3 15.5 2.5 2.5 0 0 0 5.5 18 2.5 2.5 0 0 0 8 15.5 2.5 2.5 0 0 0 5.5 13zm9.5 0a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 15 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 15 13zm9.5 0a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5z"/></svg>'
        },
        363743: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M11.682 16.09l3.504 6.068 1.732-1-3.497-6.057 3.595-2.1L8 7.74v10.512l3.682-2.163zm-.362 1.372L7 20V6l12 7-4.216 2.462 3.5 6.062-3.464 2-3.5-6.062z"/></svg>'
        },
        418953: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor"><path d="M18 15h8v-1h-8z"/><path d="M14 18v8h1v-8zM14 3v8h1v-8zM3 15h8v-1h-8z"/></g></svg>'
        },
        372196: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><circle fill="currentColor" cx="14" cy="14" r="3"/></svg>'
        },
        401532: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M23.002 23C23 23 23 18.003 23 18.003L15.998 18C16 18 16 22.997 16 22.997l7.002.003zM15 18.003A1 1 0 0 1 15.998 17h7.004c.551 0 .998.438.998 1.003v4.994A1 1 0 0 1 23.002 24h-7.004A.993.993 0 0 1 15 22.997v-4.994z"/><path d="M19 20h1v2h-1z"/><path fill-rule="nonzero" d="M22 17.5v-2a2.5 2.5 0 0 0-5 0v2h1v-2a1.5 1.5 0 0 1 3 0v2h1z"/><g fill-rule="nonzero"><path d="M3 14.707A1 1 0 0 1 3.293 14L14.439 2.854a1.5 1.5 0 0 1 2.122 0l2.585 2.585a1.5 1.5 0 0 1 0 2.122L8 18.707a1 1 0 0 1-.707.293H4a1 1 0 0 1-1-1v-3.293zm1 0V18h3.293L18.439 6.854a.5.5 0 0 0 0-.708l-2.585-2.585a.5.5 0 0 0-.708 0L4 14.707z"/><path d="M13.146 4.854l4 4 .708-.708-4-4zm-9 9l4 4 .708-.708-4-4z"/><path d="M15.146 6.146l-9 9 .708.708 9-9z"/></g></g></svg>'
        },
        53950: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M23.002 23C23 23 23 18.003 23 18.003L15.998 18C16 18 16 22.997 16 22.997l7.002.003zM15 18.003A1 1 0 0 1 15.998 17h7.004c.551 0 .998.438.998 1.003v4.994A1 1 0 0 1 23.002 24h-7.004A.993.993 0 0 1 15 22.997v-4.994z"/><path d="M19 20h1v2h-1z"/><path fill-rule="nonzero" d="M22 14.5a2.5 2.5 0 0 0-5 0v3h1v-3a1.5 1.5 0 0 1 3 0v.5h1v-.5z"/><g fill-rule="nonzero"><path d="M3 14.707A1 1 0 0 1 3.293 14L14.439 2.854a1.5 1.5 0 0 1 2.122 0l2.585 2.585a1.5 1.5 0 0 1 0 2.122L8 18.707a1 1 0 0 1-.707.293H4a1 1 0 0 1-1-1v-3.293zm1 0V18h3.293L18.439 6.854a.5.5 0 0 0 0-.708l-2.585-2.585a.5.5 0 0 0-.708 0L4 14.707z"/><path d="M13.146 4.854l4 4 .708-.708-4-4zm-9 9l4 4 .708-.708-4-4z"/><path d="M15.146 6.146l-9 9 .708.708 9-9z"/></g></g></svg>'
        },
        927999: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 31" width="29" height="31"><g fill="currentColor" fill-rule="nonzero"><path d="M15.3 22l8.187-8.187c.394-.394.395-1.028.004-1.418l-4.243-4.243c-.394-.394-1.019-.395-1.407-.006l-11.325 11.325c-.383.383-.383 1.018.007 1.407l1.121 1.121h7.656zm-9.484-.414c-.781-.781-.779-2.049-.007-2.821l11.325-11.325c.777-.777 2.035-.78 2.821.006l4.243 4.243c.781.781.78 2.048-.004 2.832l-8.48 8.48h-8.484l-1.414-1.414z"/><path d="M13.011 22.999h7.999v-1h-7.999zM13.501 11.294l6.717 6.717.707-.707-6.717-6.717z"/></g></svg>'
        },
        10862: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M24.13 14.65a6.2 6.2 0 0 0-.46-9.28c-2.57-2.09-6.39-1.71-8.75.6l-.92.91-.92-.9c-2.36-2.32-6.18-2.7-8.75-.61a6.2 6.2 0 0 0-.46 9.28l9.07 8.92c.58.57 1.53.57 2.12 0l9.07-8.92Zm-9.77 8.2 9.07-8.91a5.2 5.2 0 0 0-.39-7.8c-2.13-1.73-5.38-1.45-7.42.55L14 8.29l-1.62-1.6c-2.03-2-5.29-2.28-7.42-.55a5.2 5.2 0 0 0-.4 7.8l9.08 8.91c.2.2.52.2.72 0Z"/></svg>'
        },
        268385: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M14 10a2 2 0 0 0-2 2v11H6V12c0-4.416 3.584-8 8-8s8 3.584 8 8v11h-6V12a2 2 0 0 0-2-2zm-3 2a3 3 0 0 1 6 0v10h4V12c0-3.864-3.136-7-7-7s-7 3.136-7 7v10h4V12z"/><path d="M6.5 18h5v1h-5zm10 0h5v1h-5z"/></g></svg>'
        },
        688518: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" d="M2 9.75a1.5 1.5 0 0 0-1.5 1.5v5.5a1.5 1.5 0 0 0 1.5 1.5h24a1.5 1.5 0 0 0 1.5-1.5v-5.5a1.5 1.5 0 0 0-1.5-1.5zm0 1h3v2.5h1v-2.5h3.25v3.9h1v-3.9h3.25v2.5h1v-2.5h3.25v3.9h1v-3.9H22v2.5h1v-2.5h3a.5.5 0 0 1 .5.5v5.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-5.5a.5.5 0 0 1 .5-.5z" transform="rotate(-45 14 14)"/></svg>'
        },
        36515: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor"><path fill-rule="nonzero" d="M14 18.634l-.307-.239-7.37-5.73-2.137-1.665 9.814-7.633 9.816 7.634-.509.394-1.639 1.269-7.667 5.969zm7.054-6.759l1.131-.876-8.184-6.366-8.186 6.367 1.123.875 7.063 5.491 7.054-5.492z"/><path d="M7 14.5l-1 .57 8 6.43 8-6.5-1-.5-7 5.5z"/><path d="M7 17.5l-1 .57 8 6.43 8-6.5-1-.5-7 5.5z"/></g></svg>'
        },
        507636: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M4.05 14a9.95 9.95 0 1 1 19.9 0 9.95 9.95 0 0 1-19.9 0ZM14 3a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm-3 13.03a.5.5 0 0 1 .64.3 2.5 2.5 0 0 0 4.72 0 .5.5 0 0 1 .94.34 3.5 3.5 0 0 1-6.6 0 .5.5 0 0 1 .3-.64Zm.5-4.53a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/></svg>'
        },
        146049: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="nonzero" d="M14 5a7 7 0 0 0-7 7v3h4v-3a3 3 0 1 1 6 0v3h4v-3a7 7 0 0 0-7-7zm7 11h-4v3h4v-3zm-10 0H7v3h4v-3zm-5-4a8 8 0 1 1 16 0v8h-6v-8a2 2 0 1 0-4 0v8H6v-8zm3.293 11.294l-1.222-2.037.858-.514 1.777 2.963-2 1 1.223 2.037-.858.514-1.778-2.963 2-1zm9.778-2.551l.858.514-1.223 2.037 2 1-1.777 2.963-.858-.514 1.223-2.037-2-1 1.777-2.963z"/></svg>'
        },
        299088: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor"><path fill-rule="nonzero" d="M15.039 5.969l-.019-.019-2.828 2.828.707.707 2.474-2.474c1.367-1.367 3.582-1.367 4.949 0s1.367 3.582 0 4.949l-2.474 2.474.707.707 2.828-2.828-.019-.019c1.415-1.767 1.304-4.352-.334-5.99-1.638-1.638-4.224-1.749-5.99-.334zM5.97 15.038l-.019-.019 2.828-2.828.707.707-2.475 2.475c-1.367 1.367-1.367 3.582 0 4.949s3.582 1.367 4.949 0l2.474-2.474.707.707-2.828 2.828-.019-.019c-1.767 1.415-4.352 1.304-5.99-.334-1.638-1.638-1.749-4.224-.334-5.99z"/><path d="M10.485 16.141l5.656-5.656.707.707-5.656 5.656z"/></g></svg>'
        },
        842650: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M19.76 6.07l-.7.7a13.4 13.4 0 011.93 2.47c.19.3.33.55.42.72l.03.04-.03.04a15 15 0 01-2.09 2.9c-1.47 1.6-3.6 3.12-6.32 3.12-.98 0-1.88-.2-2.7-.52l-.77.76c1.03.47 2.18.76 3.47.76 3.12 0 5.5-1.75 7.06-3.44a16 16 0 002.38-3.38v-.02h.01L22 10l.45.22.1-.22-.1-.22L22 10l.45-.22-.01-.02a5.1 5.1 0 00-.15-.28 16 16 0 00-2.53-3.41zM6.24 13.93l.7-.7-.27-.29a15 15 0 01-2.08-2.9L4.56 10l.03-.04a15 15 0 012.09-2.9c1.47-1.6 3.6-3.12 6.32-3.12.98 0 1.88.2 2.7.52l.77-.76A8.32 8.32 0 0013 2.94c-3.12 0-5.5 1.75-7.06 3.44a16 16 0 00-2.38 3.38v.02h-.01L4 10l-.45-.22-.1.22.1.22L4 10l-.45.22.01.02a5.5 5.5 0 00.15.28 16 16 0 002.53 3.41zm6.09-.43a3.6 3.6 0 004.24-4.24l-.93.93a2.6 2.6 0 01-2.36 2.36l-.95.95zm-1.97-3.69l-.93.93a3.6 3.6 0 014.24-4.24l-.95.95a2.6 2.6 0 00-2.36 2.36zm11.29 7.84l-.8.79a1.5 1.5 0 000 2.12l.59.59a1.5 1.5 0 002.12 0l1.8-1.8-.71-.7-1.8 1.79a.5.5 0 01-.7 0l-.59-.59a.5.5 0 010-.7l.8-.8-.71-.7zm-5.5 3.5l.35.35-.35-.35.01-.02.02-.02.02-.02a4.68 4.68 0 01.65-.5c.4-.27 1-.59 1.65-.59.66 0 1.28.33 1.73.77.44.45.77 1.07.77 1.73a2.5 2.5 0 01-.77 1.73 2.5 2.5 0 01-1.73.77h-4a.5.5 0 01-.42-.78l1-1.5 1-1.5a.5.5 0 01.07-.07zm.74.67a3.46 3.46 0 01.51-.4c.35-.24.75-.42 1.1-.42.34 0 .72.17 1.02.48.3.3.48.68.48 1.02 0 .34-.17.72-.48 1.02-.3.3-.68.48-1.02.48h-3.07l.49-.72.97-1.46zM21.2 2.5L5.5 18.2l-.7-.7L20.5 1.8l.7.7z"/></svg>'
        },
        875895: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" d="M16.47 3.7A8.32 8.32 0 0013 2.94c-3.12 0-5.5 1.75-7.06 3.44a16 16 0 00-2.38 3.38v.02h-.01L4 10l-.45-.22-.1.22.1.22L4 10l-.45.22.01.02a5.5 5.5 0 00.15.28 16 16 0 002.53 3.41l.7-.7-.27-.29a15 15 0 01-2.08-2.9L4.56 10l.03-.04a15 15 0 012.09-2.9c1.47-1.6 3.6-3.12 6.32-3.12.98 0 1.88.2 2.7.52l.77-.76zm-7.04 7.04l.93-.93a2.6 2.6 0 012.36-2.36l.95-.95a3.6 3.6 0 00-4.24 4.24zm.1 5.56c1.03.47 2.18.76 3.47.76 3.12 0 5.5-1.75 7.06-3.44a16 16 0 002.38-3.38v-.02h.01L22 10l.45.22.1-.22-.1-.22L22 10l.45-.22-.01-.02-.02-.03-.01-.03a9.5 9.5 0 00-.57-1 16 16 0 00-2.08-2.63l-.7.7.27.29a15.01 15.01 0 012.08 2.9l.03.04-.03.04a15 15 0 01-2.09 2.9c-1.47 1.6-3.6 3.12-6.32 3.12-.98 0-1.88-.2-2.7-.52l-.77.76zm2.8-2.8a3.6 3.6 0 004.24-4.24l-.93.93a2.6 2.6 0 01-2.36 2.36l-.95.95zm7.9 3.73c-.12.12-.23.35-.23.77v2h1v1h-1v2c0 .58-.14 1.1-.52 1.48-.38.38-.9.52-1.48.52s-1.1-.14-1.48-.52c-.38-.38-.52-.9-.52-1.48h1c0 .42.1.65.23.77.12.12.35.23.77.23.42 0 .65-.1.77-.23.12-.12.23-.35.23-.77v-2h-1v-1h1v-2c0-.58.14-1.1.52-1.48.38-.38.9-.52 1.48-.52s1.1.14 1.48.52c.38.38.52.9.52 1.48h-1c0-.42-.1-.65-.23-.77-.12-.12-.35-.23-.77-.23-.42 0-.65.1-.77.23zm2.56 6.27l-1.14-1.15.7-.7 1.15 1.14 1.15-1.14.7.7-1.14 1.15 1.14 1.15-.7.7-1.15-1.14-1.15 1.14-.7-.7 1.14-1.15zM21.2 2.5L5.5 18.2l-.7-.7L20.5 1.8l.7.7z"/></svg>'
        },
        265162: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M5.5 18.2L21.2 2.5l-.7-.7L4.8 17.5l.7.7zM19.05 6.78l.71-.7a14.26 14.26 0 0 1 2.08 2.64 14.26 14.26 0 0 1 .6 1.05v.02h.01L22 10l.45.22-.01.02a5.18 5.18 0 0 1-.15.28 16 16 0 0 1-2.23 3.1c-1.56 1.69-3.94 3.44-7.06 3.44-1.29 0-2.44-.3-3.47-.76l.76-.76c.83.32 1.73.52 2.71.52 2.73 0 4.85-1.53 6.33-3.12a15.01 15.01 0 0 0 2.08-2.9l.03-.04-.03-.04a15 15 0 0 0-2.36-3.18zM22 10l.45-.22.1.22-.1.22L22 10zM6.94 13.23l-.7.7a14.24 14.24 0 0 1-2.08-2.64 14.28 14.28 0 0 1-.6-1.05v-.02h-.01L4 10l-.45-.22.01-.02a5.55 5.55 0 0 1 .15-.28 16 16 0 0 1 2.23-3.1C7.5 4.69 9.88 2.94 13 2.94c1.29 0 2.44.3 3.47.76l-.76.76A7.27 7.27 0 0 0 13 3.94c-2.73 0-4.85 1.53-6.33 3.12a15 15 0 0 0-2.08 2.9l-.03.04.03.04a15.01 15.01 0 0 0 2.36 3.18zM4 10l-.45.22-.1-.22.1-.22L4 10zm9 3.56c-.23 0-.46-.02-.67-.06l.95-.95a2.6 2.6 0 0 0 2.36-2.36l.93-.93a3.6 3.6 0 0 1-3.57 4.3zm-3.57-2.82l.93-.93a2.6 2.6 0 0 1 2.36-2.36l.95-.95a3.6 3.6 0 0 0-4.24 4.24zM17.5 21.9l3.28 2.18a.5.5 0 1 1-.56.84L17.5 23.1l-2.72 1.82a.5.5 0 1 1-.56-.84l3.28-2.18zM18.58 19.22a.5.5 0 0 1 .7-.14L22 20.9l2.72-1.82a.5.5 0 0 1 .56.84L22 22.1l-3.28-2.18a.5.5 0 0 1-.14-.7z"/></svg>'
        },
        665186: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M14 6a3 3 0 0 0-3 3v3h6V9a3 3 0 0 0-3-3zm4 6V9a4 4 0 0 0-8 0v3H8.5A2.5 2.5 0 0 0 6 14.5v7A2.5 2.5 0 0 0 8.5 24h11a2.5 2.5 0 0 0 2.5-2.5v-7a2.5 2.5 0 0 0-2.5-2.5H18zm-5 5a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2zm-6-2.5c0-.83.67-1.5 1.5-1.5h11c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 7 21.5v-7z"/></svg>'
        },
        691244: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M14 6a3 3 0 0 0-3 3v3h8.5a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 6 21.5v-7A2.5 2.5 0 0 1 8.5 12H10V9a4 4 0 0 1 8 0h-1a3 3 0 0 0-3-3zm-1 11a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2zm-6-2.5c0-.83.67-1.5 1.5-1.5h11c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 7 21.5v-7z"/></svg>'
        },
        245820: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M4.56 14a10.05 10.05 0 00.52.91c.41.69 1.04 1.6 1.85 2.5C8.58 19.25 10.95 21 14 21c3.05 0 5.42-1.76 7.07-3.58A17.18 17.18 0 0023.44 14a9.47 9.47 0 00-.52-.91c-.41-.69-1.04-1.6-1.85-2.5C19.42 8.75 17.05 7 14 7c-3.05 0-5.42 1.76-7.07 3.58A17.18 17.18 0 004.56 14zM24 14l.45-.21-.01-.03a7.03 7.03 0 00-.16-.32c-.11-.2-.28-.51-.5-.87-.44-.72-1.1-1.69-1.97-2.65C20.08 7.99 17.45 6 14 6c-3.45 0-6.08 2-7.8 3.92a18.18 18.18 0 00-2.64 3.84v.02h-.01L4 14l-.45-.21-.1.21.1.21L4 14l-.45.21.01.03a5.85 5.85 0 00.16.32c.11.2.28.51.5.87.44.72 1.1 1.69 1.97 2.65C7.92 20.01 10.55 22 14 22c3.45 0 6.08-2 7.8-3.92a18.18 18.18 0 002.64-3.84v-.02h.01L24 14zm0 0l.45.21.1-.21-.1-.21L24 14zm-10-3a3 3 0 100 6 3 3 0 000-6zm-4 3a4 4 0 118 0 4 4 0 01-8 0z"/></svg>'
        },
        193756: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M5 10.76l-.41-.72-.03-.04.03-.04a15 15 0 012.09-2.9c1.47-1.6 3.6-3.12 6.32-3.12 2.73 0 4.85 1.53 6.33 3.12a15.01 15.01 0 012.08 2.9l.03.04-.03.04a15 15 0 01-2.09 2.9c-1.47 1.6-3.6 3.12-6.32 3.12-2.73 0-4.85-1.53-6.33-3.12a15 15 0 01-1.66-2.18zm17.45-.98L22 10l.45.22-.01.02a5.04 5.04 0 01-.15.28 16.01 16.01 0 01-2.23 3.1c-1.56 1.69-3.94 3.44-7.06 3.44-3.12 0-5.5-1.75-7.06-3.44a16 16 0 01-2.38-3.38v-.02h-.01L4 10l-.45-.22.01-.02a5.4 5.4 0 01.15-.28 16 16 0 012.23-3.1C7.5 4.69 9.88 2.94 13 2.94c3.12 0 5.5 1.75 7.06 3.44a16.01 16.01 0 012.38 3.38v.02h.01zM22 10l.45-.22.1.22-.1.22L22 10zM3.55 9.78L4 10l-.45.22-.1-.22.1-.22zm6.8.22A2.6 2.6 0 0113 7.44 2.6 2.6 0 0115.65 10 2.6 2.6 0 0113 12.56 2.6 2.6 0 0110.35 10zM13 6.44A3.6 3.6 0 009.35 10 3.6 3.6 0 0013 13.56c2 0 3.65-1.58 3.65-3.56A3.6 3.6 0 0013 6.44zm7.85 12l.8-.8.7.71-.79.8a.5.5 0 000 .7l.59.59c.2.2.5.2.7 0l1.8-1.8.7.71-1.79 1.8a1.5 1.5 0 01-2.12 0l-.59-.59a1.5 1.5 0 010-2.12zM16.5 21.5l-.35-.35a.5.5 0 00-.07.07l-1 1.5-1 1.5a.5.5 0 00.42.78h4a2.5 2.5 0 001.73-.77A2.5 2.5 0 0021 22.5a2.5 2.5 0 00-.77-1.73A2.5 2.5 0 0018.5 20a3.1 3.1 0 00-1.65.58 5.28 5.28 0 00-.69.55v.01h-.01l.35.36zm.39.32l-.97 1.46-.49.72h3.07c.34 0 .72-.17 1.02-.48.3-.3.48-.68.48-1.02 0-.34-.17-.72-.48-1.02-.3-.3-.68-.48-1.02-.48-.35 0-.75.18-1.1.42a4.27 4.27 0 00-.51.4z"/></svg>'
        },
        842321: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M5 10.76a13.27 13.27 0 01-.41-.72L4.56 10l.03-.04a15 15 0 012.08-2.9c1.48-1.6 3.6-3.12 6.33-3.12s4.85 1.53 6.33 3.12a15.01 15.01 0 012.08 2.9l.03.04-.03.04a15 15 0 01-2.08 2.9c-1.48 1.6-3.6 3.12-6.33 3.12s-4.85-1.53-6.33-3.12a15 15 0 01-1.66-2.18zm17.45-.98L22 10l.45.22-.01.02a14.3 14.3 0 01-.6 1.05c-.4.64-1 1.48-1.78 2.33-1.56 1.7-3.94 3.44-7.06 3.44s-5.5-1.75-7.06-3.44a16 16 0 01-2.23-3.1 9.39 9.39 0 01-.15-.28v-.02h-.01L4 10l-.45-.22.01-.02a5.59 5.59 0 01.15-.28 16 16 0 012.23-3.1C7.5 4.69 9.87 2.94 13 2.94c3.12 0 5.5 1.75 7.06 3.44a16 16 0 012.23 3.1 9.5 9.5 0 01.15.28v.01l.01.01zM22 10l.45-.22.1.22-.1.22L22 10zM3.55 9.78L4 10l-.45.22-.1-.22.1-.22zm6.8.22A2.6 2.6 0 0113 7.44 2.6 2.6 0 0115.65 10 2.6 2.6 0 0113 12.56 2.6 2.6 0 0110.35 10zM13 6.44A3.6 3.6 0 009.35 10c0 1.98 1.65 3.56 3.65 3.56s3.65-1.58 3.65-3.56A3.6 3.6 0 0013 6.44zM20 18c0-.42.1-.65.23-.77.12-.13.35-.23.77-.23.42 0 .65.1.77.23.13.12.23.35.23.77h1c0-.58-.14-1.1-.52-1.48-.38-.38-.9-.52-1.48-.52s-1.1.14-1.48.52c-.37.38-.52.9-.52 1.48v2h-1v1h1v2c0 .42-.1.65-.23.77-.12.13-.35.23-.77.23-.42 0-.65-.1-.77-.23-.13-.12-.23-.35-.23-.77h-1c0 .58.14 1.1.52 1.48.38.37.9.52 1.48.52s1.1-.14 1.48-.52c.37-.38.52-.9.52-1.48v-2h1v-1h-1v-2zm1.65 4.35l1.14 1.15-1.14 1.15.7.7 1.15-1.14 1.15 1.14.7-.7-1.14-1.15 1.14-1.15-.7-.7-1.15 1.14-1.15-1.14-.7.7z"/></svg>'
        },
        157313: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M4.5 10a8.46 8.46 0 0 0 .46.8c.38.6.94 1.4 1.68 2.19 1.48 1.6 3.62 3.13 6.36 3.13s4.88-1.53 6.36-3.13A15.07 15.07 0 0 0 21.5 10a7.41 7.41 0 0 0-.46-.8c-.38-.6-.94-1.4-1.68-2.19-1.48-1.6-3.62-3.13-6.36-3.13S8.12 5.4 6.64 7A15.07 15.07 0 0 0 4.5 10zM22 10l.41-.19-.4.19zm0 0l.41.19-.4-.19zm.41.19l.09-.19-.09-.19-.01-.02a6.86 6.86 0 0 0-.15-.28c-.1-.18-.25-.45-.45-.76-.4-.64-.99-1.48-1.77-2.32C18.47 4.74 16.11 3 13 3 9.89 3 7.53 4.74 5.97 6.43A15.94 15.94 0 0 0 3.6 9.79v.02h-.01L3.5 10l.09.19.01.02a6.59 6.59 0 0 0 .15.28c.1.18.25.45.45.76.4.64.99 1.48 1.77 2.32C7.53 15.26 9.89 17 13 17c3.11 0 5.47-1.74 7.03-3.43a15.94 15.94 0 0 0 2.37-3.36v-.02h.01zM4 10l-.41-.19.4.19zm9-2.63c-1.5 0-2.7 1.18-2.7 2.63s1.2 2.63 2.7 2.63c1.5 0 2.7-1.18 2.7-2.63S14.5 7.37 13 7.37zM9.4 10C9.4 8.07 11 6.5 13 6.5s3.6 1.57 3.6 3.5S15 13.5 13 13.5A3.55 3.55 0 0 1 9.4 10zm8.1 11.9l3.28 2.18a.5.5 0 1 1-.56.84L17.5 23.1l-2.72 1.82a.5.5 0 1 1-.56-.84l3.28-2.18zm1.78-2.82a.5.5 0 0 0-.56.84L22 22.1l3.28-2.18a.5.5 0 1 0-.56-.84L22 20.9l-2.72-1.82z"/></svg>'
        },
        6894: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17.646 18.354l4 4 .708-.708-4-4z"/><path d="M12.5 21a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm0-1a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z"/><path d="M9 13h7v-1H9z"/><path d="M13 16V9h-1v7z"/></svg>'
        },
        745360: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17.646 18.354l4 4 .708-.708-4-4z"/><path d="M12.5 21a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm0-1a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z"/><path d="M9 13h7v-1H9z"/></svg>'
        },
        333765: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>'
        },
        214665: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16" width="10" height="16"><path d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z"/></svg>'
        },
        239146: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>'
        },
        648010: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>'
        }
    }
]);
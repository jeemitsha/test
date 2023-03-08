(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [1972], {
        259142: function(t, e) {
            var o, r, i;
            r = [e], o = function(t) {
                "use strict";

                function e(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, o = Array(t.length); e < t.length; e++) o[e] = t[e];
                        return o
                    }
                    return Array.from(t)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = !1;
                if ("undefined" != typeof window) {
                    var r = {
                        get passive() {
                            o = !0
                        }
                    };
                    window.addEventListener("testPassive", null, r), window.removeEventListener("testPassive", null, r)
                }
                var i = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
                    l = [],
                    s = !1,
                    a = -1,
                    n = void 0,
                    c = void 0,
                    d = function(t) {
                        return l.some((function(e) {
                            return !(!e.options.allowTouchMove || !e.options.allowTouchMove(t))
                        }))
                    },
                    u = function(t) {
                        var e = t || window.event;
                        return !!d(e.target) || 1 < e.touches.length || (e.preventDefault && e.preventDefault(), !1)
                    },
                    h = function() {
                        setTimeout((function() {
                            void 0 !== c && (document.body.style.paddingRight = c, c = void 0), void 0 !== n && (document.body.style.overflow = n, n = void 0)
                        }))
                    };
                t.disableBodyScroll = function(t, r) {
                    if (i) {
                        if (!t) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
                        if (t && !l.some((function(e) {
                                return e.targetElement === t
                            }))) {
                            var h = {
                                targetElement: t,
                                options: r || {}
                            };
                            l = [].concat(e(l), [h]), t.ontouchstart = function(t) {
                                1 === t.targetTouches.length && (a = t.targetTouches[0].clientY)
                            }, t.ontouchmove = function(e) {
                                var o, r, i, l;
                                1 === e.targetTouches.length && (r = t, l = (o = e).targetTouches[0].clientY - a, !d(o.target) && (r && 0 === r.scrollTop && 0 < l || (i = r) && i.scrollHeight - i.scrollTop <= i.clientHeight && l < 0 ? u(o) : o.stopPropagation()))
                            }, s || (document.addEventListener("touchmove", u, o ? {
                                passive: !1
                            } : void 0), s = !0)
                        }
                    } else {
                        _ = r, setTimeout((function() {
                            if (void 0 === c) {
                                var t = !!_ && !0 === _.reserveScrollBarGap,
                                    e = window.innerWidth - document.documentElement.clientWidth;
                                t && 0 < e && (c = document.body.style.paddingRight, document.body.style.paddingRight = e + "px")
                            }
                            void 0 === n && (n = document.body.style.overflow, document.body.style.overflow = "hidden")
                        }));
                        var p = {
                            targetElement: t,
                            options: r || {}
                        };
                        l = [].concat(e(l), [p])
                    }
                    var _
                }, t.clearAllBodyScrollLocks = function() {
                    i ? (l.forEach((function(t) {
                        t.targetElement.ontouchstart = null, t.targetElement.ontouchmove = null
                    })), s && (document.removeEventListener("touchmove", u, o ? {
                        passive: !1
                    } : void 0), s = !1), l = [], a = -1) : (h(), l = [])
                }, t.enableBodyScroll = function(t) {
                    if (i) {
                        if (!t) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                        t.ontouchstart = null, t.ontouchmove = null, l = l.filter((function(e) {
                            return e.targetElement !== t
                        })), s && 0 === l.length && (document.removeEventListener("touchmove", u, o ? {
                            passive: !1
                        } : void 0), s = !1)
                    } else 1 === l.length && l[0].targetElement === t ? (h(), l = []) : l = l.filter((function(e) {
                        return e.targetElement !== t
                    }))
                }
            }, void 0 === (i = "function" == typeof o ? o.apply(e, r) : o) || (t.exports = i)
        },
        945966: t => {
            t.exports = {
                "default-drawer-min-top-distance": "100px",
                wrap: "wrap-yBUNQyVA",
                positionBottom: "positionBottom-yBUNQyVA",
                backdrop: "backdrop-yBUNQyVA",
                drawer: "drawer-yBUNQyVA",
                positionLeft: "positionLeft-yBUNQyVA"
            }
        },
        409790: t => {
            t.exports = {
                menuWrap: "menuWrap-biWYdsXC",
                isMeasuring: "isMeasuring-biWYdsXC",
                scrollWrap: "scrollWrap-biWYdsXC",
                momentumBased: "momentumBased-biWYdsXC",
                menuBox: "menuBox-biWYdsXC",
                isHidden: "isHidden-biWYdsXC"
            }
        },
        655498: t => {
            t.exports = {
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
        332585: (t, e, o) => {
            "use strict";
            o.d(e, {
                DrawerManager: () => l,
                DrawerContext: () => s
            });
            var r = o(50959),
                i = o(575658);
            class l extends r.PureComponent {
                constructor(t) {
                    super(t), this._isBodyFixed = !1, this._addDrawer = t => {
                        this.setState((e => ({
                            stack: [...e.stack, t]
                        })))
                    }, this._removeDrawer = t => {
                        this.setState((e => ({
                            stack: e.stack.filter((e => e !== t))
                        })))
                    }, this.state = {
                        stack: []
                    }
                }
                componentDidUpdate(t, e) {
                    !e.stack.length && this.state.stack.length && ((0, i.setFixedBodyState)(!0), this._isBodyFixed = !0), e.stack.length && !this.state.stack.length && this._isBodyFixed && ((0, i.setFixedBodyState)(!1), this._isBodyFixed = !1)
                }
                componentWillUnmount() {
                    this.state.stack.length && this._isBodyFixed && (0, i.setFixedBodyState)(!1)
                }
                render() {
                    return r.createElement(s.Provider, {
                        value: {
                            addDrawer: this._addDrawer,
                            removeDrawer: this._removeDrawer,
                            currentDrawer: this.state.stack.length ? this.state.stack[this.state.stack.length - 1] : null
                        }
                    }, this.props.children)
                }
            }
            const s = r.createContext(null)
        },
        762852: (t, e, o) => {
            "use strict";
            o.d(e, {
                Drawer: () => h
            });
            var r = o(50959),
                i = o(650151),
                l = o(497754),
                s = o(777491),
                a = o(707533),
                n = o(332585),
                c = o(320116),
                d = o(150881),
                u = o(945966);

            function h(t) {
                const {
                    position: e = "Bottom",
                    onClose: o,
                    children: h,
                    className: p,
                    theme: _ = u
                } = t, f = (0, i.ensureNotNull)((0, r.useContext)(n.DrawerContext)), [v] = (0, r.useState)((() => (0, s.randomHash)())), y = (0, r.useRef)(null), b = (0, r.useContext)(c.CloseDelegateContext);
                return (0, r.useLayoutEffect)((() => ((0, i.ensureNotNull)(y.current).focus({
                    preventScroll: !0
                }), b.subscribe(f, o), f.addDrawer(v), () => {
                    f.removeDrawer(v), b.unsubscribe(f, o)
                })), []), r.createElement(a.Portal, null, r.createElement("div", {
                    className: l(u.wrap, u[`position${e}`])
                }, v === f.currentDrawer && r.createElement("div", {
                    className: u.backdrop,
                    onClick: o
                }), r.createElement(d.TouchScrollContainer, {
                    className: l(u.drawer, _.drawer, u[`position${e}`], p),
                    tabIndex: -1,
                    ref: y,
                    "data-name": t["data-name"]
                }, h)))
            }
        },
        377318: (t, e, o) => {
            "use strict";
            o.d(e, {
                MenuContext: () => r
            });
            const r = o(50959).createContext(null)
        },
        175071: (t, e, o) => {
            "use strict";
            o.d(e, {
                DEFAULT_MENU_THEME: () => v,
                Menu: () => y
            });
            var r = o(50959),
                i = o(497754),
                l = o.n(i),
                s = o(650151),
                a = o(43329),
                n = o(587080),
                c = o(670797),
                d = o(224743),
                u = o(829725),
                h = o(799786),
                p = o(787684),
                _ = o(377318),
                f = o(409790);
            const v = f;
            class y extends r.PureComponent {
                constructor(t) {
                    super(t), this._containerRef = null, this._scrollWrapRef = null, this._raf = null, this._scrollRaf = null, this._scrollTimeout = void 0, this._manager = new u.OverlapManager, this._hotkeys = null, this._scroll = 0, this._handleContainerRef = t => {
                        this._containerRef = t, this.props.reference && ("function" == typeof this.props.reference && this.props.reference(t), "object" == typeof this.props.reference && (this.props.reference.current = t))
                    }, this._handleScrollWrapRef = t => {
                        this._scrollWrapRef = t, "function" == typeof this.props.scrollWrapReference && this.props.scrollWrapReference(t), "object" == typeof this.props.scrollWrapReference && (this.props.scrollWrapReference.current = t)
                    }, this._handleMeasure = ({
                        callback: t,
                        forceRecalcPosition: e
                    } = {}) => {
                        var o, r, i, l, n, c, d, u, h, p, _, f;
                        if (this.state.isMeasureValid && !e) return;
                        const {
                            position: v
                        } = this.props, y = (0, s.ensureNotNull)(this._containerRef);
                        let b = y.getBoundingClientRect();
                        const C = document.documentElement.clientHeight,
                            m = document.documentElement.clientWidth,
                            g = null !== (o = this.props.closeOnScrollOutsideOffset) && void 0 !== o ? o : 0;
                        let P = C - 0 - g;
                        const T = b.height > P;
                        if (T) {
                            (0, s.ensureNotNull)(this._scrollWrapRef).style.overflowY = "scroll", b = y.getBoundingClientRect()
                        }
                        const {
                            width: k,
                            height: x
                        } = b, M = "function" == typeof v ? v(k, x, C) : v, w = null !== (i = null === (r = null == M ? void 0 : M.indentFromWindow) || void 0 === r ? void 0 : r.left) && void 0 !== i ? i : 0, S = m - (null !== (l = M.overrideWidth) && void 0 !== l ? l : k) - (null !== (c = null === (n = null == M ? void 0 : M.indentFromWindow) || void 0 === n ? void 0 : n.right) && void 0 !== c ? c : 0), B = (0, a.clamp)(M.x, w, Math.max(w, S)), D = (null !== (u = null === (d = null == M ? void 0 : M.indentFromWindow) || void 0 === d ? void 0 : d.top) && void 0 !== u ? u : 0) + g, W = C - (null !== (h = M.overrideHeight) && void 0 !== h ? h : x) - (null !== (_ = null === (p = null == M ? void 0 : M.indentFromWindow) || void 0 === p ? void 0 : p.bottom) && void 0 !== _ ? _ : 0);
                        let R = (0, a.clamp)(M.y, D, Math.max(D, W));
                        if (M.forbidCorrectYCoord && R < M.y && (P -= M.y - R, R = M.y), e && void 0 !== this.props.closeOnScrollOutsideOffset && M.y <= this.props.closeOnScrollOutsideOffset) return void this._handleGlobalClose(!0);
                        const O = null !== (f = M.overrideHeight) && void 0 !== f ? f : T ? P : void 0;
                        this.setState({
                            appearingMenuHeight: e ? this.state.appearingMenuHeight : O,
                            appearingMenuWidth: e ? this.state.appearingMenuWidth : M.overrideWidth,
                            appearingPosition: {
                                x: B,
                                y: R
                            },
                            isMeasureValid: !0
                        }, (() => {
                            this._restoreScrollPosition(), t && t()
                        }))
                    }, this._restoreScrollPosition = () => {
                        const t = document.activeElement,
                            e = (0, s.ensureNotNull)(this._containerRef);
                        if (null !== t && e.contains(t)) try {
                            t.scrollIntoView()
                        } catch (t) {} else(0, s.ensureNotNull)(this._scrollWrapRef).scrollTop = this._scroll
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
                    }, this._handleGlobalClose = t => {
                        this.props.onClose(t)
                    }, this._handleSlot = t => {
                        this._manager.setContainer(t)
                    }, this._handleScroll = () => {
                        this._scroll = (0, s.ensureNotNull)(this._scrollWrapRef).scrollTop
                    }, this._handleScrollOutsideEnd = () => {
                        clearTimeout(this._scrollTimeout), this._scrollTimeout = setTimeout((() => {
                            this._handleMeasure({
                                forceRecalcPosition: !0
                            })
                        }), 80)
                    }, this._handleScrollOutside = t => {
                        t.target !== this._scrollWrapRef && (this._handleScrollOutsideEnd(), null === this._scrollRaf && (this._scrollRaf = requestAnimationFrame((() => {
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
                        customCloseDelegate: t = d.globalCloseDelegate
                    } = this.props;
                    t.subscribe(this, this._handleGlobalClose), window.addEventListener("resize", this._resize);
                    const e = null !== this.context;
                    this._hotkeys || e || (this._hotkeys = h.createGroup({
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
                        customCloseDelegate: t = d.globalCloseDelegate
                    } = this.props;
                    t.unsubscribe(this, this._handleGlobalClose), window.removeEventListener("resize", this._resize), window.removeEventListener("scroll", this._handleScrollOutside, {
                        capture: !0
                    }), this._hotkeys && (this._hotkeys.destroy(), this._hotkeys = null), null !== this._raf && (cancelAnimationFrame(this._raf), this._raf = null), null !== this._scrollRaf && (cancelAnimationFrame(this._scrollRaf), this._scrollRaf = null), this._scrollTimeout && clearTimeout(this._scrollTimeout)
                }
                render() {
                    const {
                        id: t,
                        role: e,
                        "aria-label": o,
                        "aria-labelledby": i,
                        "aria-activedescendant": s,
                        "aria-hidden": a,
                        children: d,
                        minWidth: u,
                        theme: h = f,
                        className: v,
                        maxHeight: y,
                        onMouseOver: C,
                        onMouseOut: m,
                        onKeyDown: g,
                        onFocus: P,
                        onBlur: T
                    } = this.props, {
                        appearingMenuHeight: k,
                        appearingMenuWidth: x,
                        appearingPosition: M,
                        isMeasureValid: w
                    } = this.state;
                    return r.createElement(_.MenuContext.Provider, {
                        value: this
                    }, r.createElement(p.SubmenuHandler, null, r.createElement(c.SlotContext.Provider, {
                        value: this._manager
                    }, r.createElement("div", {
                        id: t,
                        role: e,
                        "aria-label": o,
                        "aria-labelledby": i,
                        "aria-activedescendant": s,
                        "aria-hidden": a,
                        className: l()(v, h.menuWrap, !w && h.isMeasuring),
                        style: {
                            height: k,
                            left: M && M.x,
                            minWidth: u,
                            position: "fixed",
                            top: M && M.y,
                            width: x
                        },
                        "data-name": this.props["data-name"],
                        ref: this._handleContainerRef,
                        onScrollCapture: this.props.onScroll,
                        onContextMenu: n.preventDefaultForContextMenu,
                        tabIndex: this.props.tabIndex,
                        onMouseOver: C,
                        onMouseOut: m,
                        onKeyDown: g,
                        onFocus: P,
                        onBlur: T
                    }, r.createElement("div", {
                        className: l()(h.scrollWrap, !this.props.noMomentumBasedScroll && h.momentumBased),
                        style: {
                            overflowY: void 0 !== k ? "scroll" : "auto",
                            maxHeight: y
                        },
                        onScrollCapture: this._handleScroll,
                        ref: this._handleScrollWrapRef
                    }, r.createElement(b, {
                        className: h.menuBox
                    }, d)))), r.createElement(c.Slot, {
                        reference: this._handleSlot
                    })))
                }
                update(t) {
                    t ? this._resizeForced() : this._resize()
                }
            }

            function b(t) {
                const e = (0, s.ensureNotNull)((0, r.useContext)(p.SubmenuContext)),
                    o = r.useRef(null);
                return r.createElement("div", {
                    ref: o,
                    className: t.className,
                    onMouseOver: function(t) {
                        if (!(null !== e.current && t.target instanceof Node && (r = t.target, null === (i = o.current) || void 0 === i ? void 0 : i.contains(r)))) return;
                        var r, i;
                        e.isSubmenuNode(t.target) || e.setCurrent(null)
                    },
                    "data-name": "menu-inner"
                }, t.children)
            }
            y.contextType = p.SubmenuContext
        },
        634993: (t, e, o) => {
            "use strict";
            o.d(e, {
                DEFAULT_POPUP_MENU_ITEM_THEME: () => c,
                PopupMenuItem: () => u
            });
            var r = o(50959),
                i = o(497754),
                l = o(224743),
                s = o(345848),
                a = o(8626),
                n = o(655498);
            const c = n;

            function d(t) {
                t.stopPropagation()
            }

            function u(t) {
                const {
                    id: e,
                    role: o,
                    "aria-label": c,
                    "aria-selected": u,
                    "aria-checked": h,
                    className: p,
                    title: _,
                    labelRowClassName: f,
                    labelClassName: v,
                    shortcut: y,
                    forceShowShortcuts: b,
                    icon: C,
                    isActive: m,
                    isDisabled: g,
                    isHovered: P,
                    appearAsDisabled: T,
                    label: k,
                    link: x,
                    showToolboxOnHover: M,
                    target: w,
                    rel: S,
                    toolbox: B,
                    reference: D,
                    onMouseOut: W,
                    onMouseOver: R,
                    onKeyDown: O,
                    suppressToolboxClick: L = !0,
                    theme: I = n,
                    tabIndex: H,
                    tagName: E,
                    renderComponent: N
                } = t, A = (0, a.filterDataProps)(t), q = (0, r.useRef)(null), F = (0, r.useMemo)((() => function(t) {
                    function e(e) {
                        const {
                            reference: o,
                            ...i
                        } = e, l = null != t ? t : i.href ? "a" : "div", s = "a" === l ? i : function(t) {
                            const {
                                download: e,
                                href: o,
                                hrefLang: r,
                                media: i,
                                ping: l,
                                rel: s,
                                target: a,
                                type: n,
                                referrerPolicy: c,
                                ...d
                            } = t;
                            return d
                        }(i);
                        return r.createElement(l, { ...s,
                            ref: o
                        })
                    }
                    return e.displayName = `DefaultComponent(${t})`, e
                }(E)), [E]), V = null != N ? N : F;
                return r.createElement(V, { ...A,
                    id: e,
                    role: o,
                    "aria-label": c,
                    "aria-selected": u,
                    "aria-checked": h,
                    className: i(p, I.item, C && I.withIcon, {
                        [I.isActive]: m,
                        [I.isDisabled]: g || T,
                        [I.hovered]: P
                    }),
                    title: _,
                    href: x,
                    target: w,
                    rel: S,
                    reference: function(t) {
                        q.current = t, "function" == typeof D && D(t);
                        "object" == typeof D && (D.current = t)
                    },
                    onClick: function(e) {
                        const {
                            dontClosePopup: o,
                            onClick: r,
                            onClickArg: i,
                            trackEventObject: a
                        } = t;
                        if (g) return;
                        a && (0, s.trackEvent)(a.category, a.event, a.label);
                        r && r(i, e);
                        o || (0, l.globalCloseMenu)()
                    },
                    onContextMenu: function(e) {
                        const {
                            trackEventObject: o,
                            trackRightClick: r
                        } = t;
                        o && r && (0, s.trackEvent)(o.category, o.event, `${o.label}_rightClick`)
                    },
                    onMouseUp: function(e) {
                        const {
                            trackEventObject: o,
                            trackMouseWheelClick: r
                        } = t;
                        if (1 === e.button && x && o) {
                            let t = o.label;
                            r && (t += "_mouseWheelClick"), (0, s.trackEvent)(o.category, o.event, t)
                        }
                    },
                    onMouseOver: R,
                    onMouseOut: W,
                    onKeyDown: O,
                    tabIndex: H
                }, void 0 !== C && r.createElement("span", {
                    className: I.icon,
                    dangerouslySetInnerHTML: {
                        __html: C
                    }
                }), r.createElement("span", {
                    className: i(I.labelRow, f)
                }, r.createElement("span", {
                    className: i(I.label, v)
                }, k)), (void 0 !== y || b) && r.createElement("span", {
                    className: I.shortcut
                }, (Q = y) && Q.split("+").join(" + ")), void 0 !== B && r.createElement("span", {
                    onClick: L ? d : void 0,
                    className: i(I.toolbox, {
                        [I.showOnHover]: M
                    })
                }, B));
                var Q
            }
        },
        320116: (t, e, o) => {
            "use strict";
            o.d(e, {
                CloseDelegateContext: () => l
            });
            var r = o(50959),
                i = o(224743);
            const l = r.createContext(i.globalCloseDelegate)
        },
        45968: (t, e, o) => {
            "use strict";
            o.d(e, {
                PopupMenu: () => d
            });
            var r = o(50959),
                i = o(500962),
                l = o(162942),
                s = o(707533),
                a = o(175071),
                n = o(320116),
                c = o(951292);

            function d(t) {
                const {
                    controller: e,
                    children: o,
                    isOpened: d,
                    closeOnClickOutside: u = !0,
                    doNotCloseOn: h,
                    onClickOutside: p,
                    onClose: _,
                    onKeyboardClose: f,
                    "data-name": v = "popup-menu-container",
                    ...y
                } = t, b = (0, r.useContext)(n.CloseDelegateContext), C = (0, c.useOutsideEvent)({
                    handler: function(t) {
                        p && p(t);
                        if (!u) return;
                        const e = (0, l.default)(h) ? h() : h;
                        if (e && t.target instanceof Node) {
                            const o = i.findDOMNode(e);
                            if (o instanceof Node && o.contains(t.target)) return
                        }
                        _()
                    },
                    mouseDown: !0,
                    touchStart: !0
                });
                return d ? r.createElement(s.Portal, {
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    pointerEvents: "none"
                }, r.createElement("span", {
                    ref: C,
                    style: {
                        pointerEvents: "auto"
                    }
                }, r.createElement(a.Menu, { ...y,
                    onClose: _,
                    onKeyboardClose: f,
                    onScroll: function(e) {
                        const {
                            onScroll: o
                        } = t;
                        o && o(e)
                    },
                    customCloseDelegate: b,
                    ref: e,
                    "data-name": v
                }, o))) : null
            }
        },
        787684: (t, e, o) => {
            "use strict";
            o.d(e, {
                SubmenuContext: () => i,
                SubmenuHandler: () => l
            });
            var r = o(50959);
            const i = r.createContext(null);

            function l(t) {
                const [e, o] = (0, r.useState)(null), l = (0, r.useRef)(null), s = (0, r.useRef)(new Map);
                return (0, r.useEffect)((() => () => {
                    null !== l.current && clearTimeout(l.current)
                }), []), r.createElement(i.Provider, {
                    value: {
                        current: e,
                        setCurrent: function(t) {
                            null !== l.current && (clearTimeout(l.current), l.current = null);
                            null === e ? o(t) : l.current = setTimeout((() => {
                                l.current = null, o(t)
                            }), 100)
                        },
                        registerSubmenu: function(t, e) {
                            return s.current.set(t, e), () => {
                                s.current.delete(t)
                            }
                        },
                        isSubmenuNode: function(t) {
                            return Array.from(s.current.values()).some((e => e(t)))
                        }
                    }
                }, t.children)
            }
        },
        150881: (t, e, o) => {
            "use strict";
            o.d(e, {
                TouchScrollContainer: () => a
            });
            var r = o(50959),
                i = o(259142),
                l = o(650151),
                s = o(638456);
            const a = (0, r.forwardRef)(((t, e) => {
                const {
                    children: o,
                    ...l
                } = t, a = (0, r.useRef)(null);
                return (0, r.useImperativeHandle)(e, (() => a.current)), (0, r.useLayoutEffect)((() => {
                    if (s.CheckMobile.iOS()) return null !== a.current && (0, i.disableBodyScroll)(a.current, {
                        allowTouchMove: n(a)
                    }), () => {
                        null !== a.current && (0, i.enableBodyScroll)(a.current)
                    }
                }), []), r.createElement("div", {
                    ref: a,
                    ...l
                }, o)
            }));

            function n(t) {
                return e => {
                    const o = (0, l.ensureNotNull)(t.current),
                        r = document.activeElement;
                    return !o.contains(e) || null !== r && o.contains(r) && r.contains(e)
                }
            }
        },
        114032: (t, e, o) => {
            "use strict";
            o.d(e, {
                priceToPips: () => i,
                riskInCurrencyToPips: () => l,
                riskInPercentToPips: () => s,
                pipsToPrice: () => a,
                pipsToRiskInCurrency: () => n,
                pipsToRiskInPercent: () => c
            });
            var r = o(960521);

            function i(t, e, o, i) {
                return (0, r.Big)(t).minus(e).div(i).div(o).toNumber()
            }

            function l(t, e, o, i, l) {
                const s = (0, r.Big)(o).mul(e).mul(l || 1);
                if (s.eq(0)) return 0;
                const a = (0, r.Big)(t).div(s).mul(i).toNumber();
                return Math.floor(a)
            }

            function s(t, e, o, i, l, s) {
                const a = (0, r.Big)(i).mul(e).mul(s || 1).mul(100);
                if (a.eq(0)) return 0;
                const n = (0, r.Big)(t).mul(o).div(a).mul(l).toNumber();
                return Math.floor(n)
            }

            function a(t, e, o, i) {
                return (0, r.Big)(o).mul(t).mul(i).plus(e).toNumber()
            }

            function n(t, e, o, i, l) {
                return (0, r.Big)(t).mul(o).mul(e).mul(l || 1).div(i).toNumber()
            }

            function c(t, e, o, i, l, s) {
                return o ? (0, r.Big)(t).mul(i).mul(e).mul(s || 1).mul(100).div(o).div(l).toNumber() : 0
            }
        },
        321491: (t, e, o) => {
            "use strict";
            o.d(e, {
                plSign: () => v,
                BaseItem: () => m
            });
            var r = o(650151),
                i = o(777754),
                l = o(927592),
                s = o(758337),
                a = o(869403),
                n = o.n(a),
                c = o(894042),
                d = o(335144),
                u = o(951512),
                h = o(768038),
                p = o(96841),
                _ = o(136916),
                f = o(114032);

            function v(t, e) {
                return `${t>0?"+":t<0?"−":""}${e?" ":""}`
            }
            const y = {
                    integerFormatter: new u.NumericFormatter(0),
                    oneDecimalFormatter: new u.NumericFormatter(1),
                    twoDecimalFormatter: new u.NumericFormatter(2)
                },
                b = i.t(null, void 0, o(618156)),
                C = i.t(null, void 0, o(392553));
            class m {
                constructor(t, e, o, r, i, l, s) {
                    this._contextMenu = null, this._profitLossChanged = new(n()), this._mainSeries = o,
                        this._source = e, this._symbolDataProvider = r, this._gaOrigin = i, this._infoGetters = l, this._itemCommands = s, this.setData(t)
                }
                destroy() {
                    var t, e, o;
                    null === (t = this._formatPlWV) || void 0 === t || t.destroy(), null === (e = this._plColorWV) || void 0 === e || e.destroy(), this._profitLossChanged.destroy(), null === (o = this._contextMenu) || void 0 === o || o.hide()
                }
                data() {
                    return this._data
                }
                price() {
                    return this._data.price
                }
                setData(t) {
                    this._data = (0, s.clone)(t)
                }
                priceText() {
                    return (0, r.ensureNotNull)(this._symbolDataProvider.symbolData()).priceFormatter.format((0, r.ensureNotNull)(this.price()))
                }
                supportBrackets() {
                    return this._data.supportBrackets
                }
                supportOnlyPairBrackets() {
                    return !1
                }
                plColorWV() {
                    return void 0 === this._plColorWV && (this._plColorWV = (0, c.createWVFromGetterAndSubscription)((() => this.profitLossTextColor()), this._profitLossChanged)), this._plColorWV
                }
                formatPlWV() {
                    return void 0 === this._formatPlWV && (this._formatPlWV = (0, c.createWVFromGetterAndSubscription)((() => this.profitLossText()), this._profitLossChanged)), this._formatPlWV
                }
                hasContextMenu() {
                    return this.supportModify() || this.supportClose()
                }
                useMinTickFormatter() {
                    return !0
                }
                isBuyDirection() {
                    return 1 === this._data.side
                }
                isVisible() {
                    return this._infoGetters.visibility()
                }
                fireProfitLossChange() {
                    this._profitLossChanged.fire()
                }
                profitLossText(t) {
                    if (!this._data) return "";
                    const e = this._potentialProfitLoss();
                    if (null === e) return "";
                    let o;
                    switch (this._infoGetters.displayMode.value()) {
                        case d.PlDisplay.Money:
                            o = this.moneyText(e, !0);
                            break;
                        case d.PlDisplay.Pips:
                            o = this.pipsText(e, !0);
                            break;
                        case d.PlDisplay.Percentage:
                            o = this.percentageText(e, !0)
                    }
                    return (0, h.startWithLTR)(o)
                }
                percentageText(t, e) {
                    var o;
                    const r = v(t, e),
                        i = this._source.baseItem(),
                        s = null !== (o = null == i ? void 0 : i.price()) && void 0 !== o ? o : null;
                    if (null === s) return "";
                    const a = 100 * t / s * this._data.side;
                    return `${r}${(0,l.splitThousands)(y.twoDecimalFormatter.format(Math.abs(a))," ")}%`
                }
                moneyText(t, e) {
                    const o = this._symbolDataProvider.pipValue();
                    if (null === o) return "";
                    const i = v(t, e),
                        l = (0, r.ensureNotNull)(this._symbolDataProvider.symbolData()),
                        s = t / (l.pipSize || l.minTick) * this._data.side,
                        a = this.isBuyDirection() ? o.buyPipValue : o.sellPipValue,
                        n = Math.abs((0, f.pipsToRiskInCurrency)(s, this._data.qty, a, l.priceMagnifier, l.lotSize));
                    return `${i}${y.twoDecimalFormatter.format(n)} ${this.currency()}`
                }
                pipsText(t, e) {
                    const s = v(t, e),
                        a = (0, r.ensureNotNull)(this._symbolDataProvider.symbolData()),
                        n = isFinite(a.pipSize) && a.pipSize !== a.minTick ? y.oneDecimalFormatter : y.integerFormatter,
                        c = parseFloat(n.format(t / (a.pipSize || a.minTick))) * this._data.side;
                    switch (this._symbolDataProvider.pipValueType()) {
                        case _.PipValueType.Pips:
                            return `${s}${i.t(null,{plural:"{pips} pips",count:Math.abs(c)},o(777772)).replace("{pips}",(0,l.splitThousands)(Math.abs(c).toFixed(1)," "))}`;
                        case _.PipValueType.Ticks:
                            return `${s}${i.t(null,{plural:"{ticks} ticks",count:Math.abs(c)},o(564225)).replace("{ticks}",(0,l.splitThousands)(Math.abs(c).toFixed(0)," "))}`
                    }
                    return ""
                }
                tryBasePlOnLast() {
                    return !1
                }
                lineStyle() {
                    return p.LineStyle.Solid
                }
                confirmText(t) {
                    const e = 1 === this._data.side ? b : C;
                    return t ? e : `${e} ${this.qtyText()} @ ${this.priceText()}`
                }
                _trackEventGA(t) {
                    const {
                        origin: e = this._gaOrigin,
                        event: o,
                        label: i
                    } = t;
                    (0, r.assert)(!!o, "GA Event shouldn' be empty"), this._itemCommands.trackEvent(e, o, i)
                }
                _quantityText(t) {
                    return (0, r.ensureNotNull)(this._symbolDataProvider.symbolData()).quantityFormatter.format(t)
                }
            }
        },
        665704: (t, e, o) => {
            "use strict";
            o.d(e, {
                BasePaneViewItem: () => p
            });
            var r = o(150335),
                i = o(650151),
                l = o(96841),
                s = o(114123),
                a = o(768038),
                n = o(927592),
                c = o(646228),
                d = o(313178),
                u = o(209402),
                h = o(506787);
            class p {
                constructor(t, e, o, r, i, l) {
                    this._item = t, this._source = e, this._chartModel = o, this._mainItemStyle = r, this._isNoOverlapMode = i.isNoOverlapMode, this._displayMode = i.displayMode, this._rightPadding = i.rightPadding, this._groupLineColor = i.groupLineColor, this._y = i.y, this._externalCallbacks = l
                }
                _isProfitLossHidden() {
                    return 0 === this._displayMode
                }
                _isProfitLossShorten() {
                    return 2 !== this._displayMode
                }
                _isCloseVisible() {
                    return 0 !== this._displayMode
                }
                _minQtyWidth() {
                    return 0 === this._displayMode ? 30 : 0
                }
                _isHoveredItem(t) {
                    var e;
                    return (null === (e = this._source.hoveredItem()) || void 0 === e ? void 0 : e.id) === t.id()
                }
                _isHoveredItemPart(t, e) {
                    var o;
                    return this._isHoveredItem(t) && (null === (o = this._source.hoveredItem()) || void 0 === o ? void 0 : o.part) === e
                }
                _isSelectedItem(t) {
                    var e;
                    return (null === (e = this._source.selectedItem()) || void 0 === e ? void 0 : e.id) === t.id()
                }
                _isHoveredItemWithButtons(t) {
                    if (!t) return !1;
                    const {
                        takeProfit: e,
                        stopLoss: o,
                        trailingStop: r
                    } = (0, d.bracketsByType)(this._source.items().projectionBrackets);
                    return this._isHoveredItem(t) || Boolean(e && this._isHoveredItem(e)) || Boolean(o && this._isHoveredItem(o)) || Boolean(r && this._isHoveredItem(r))
                }
                _isHoveredStopItemStopLimit() {
                    const t = this._source.items().main,
                        e = this._source.items().stopLimit;
                    return !!(t && e && (0, u.isLimitPartStopLimitOrderItem)(e)) && this._isHoveredItem(t)
                }
                _isActiveSource() {
                    return this._source.isHovered() || this._source.isSelected()
                }
                _itemWithButtons() {
                    if (!this._isNoOverlapMode) return this._source.baseItem()
                }
                _projectionBracketsForItem(t) {
                    return t !== this._itemWithButtons() ? [] : this._source.items().projectionBrackets
                }
                _renderDataForTPSLButtons(t) {
                    if (t !== this._itemWithButtons()) return {};
                    const e = {
                            borderStyle: this._source.isPlaced() ? t.lineStyle() : (0, i.ensureDefined)(this._source.mainItem()).lineStyle()
                        },
                        o = {},
                        {
                            takeProfit: r,
                            stopLoss: l,
                            trailingStop: a
                        } = (0, d.bracketsByType)(this._source.items().projectionBrackets);
                    if (r) {
                        const t = null === r.price(),
                            i = this._isHoveredItemPart(r, 5),
                            l = (0, c.getDefaultStyleForOrderItem)(r, this._source, (() => this._chartModel.isDark()), e);
                        o.tp = {
                            id: r.id(),
                            visibility: t && this._isMainButtonsVisible() ? 1 : 0,
                            text: r.qtyText(),
                            title: r.tooltip(),
                            underlineText: !1,
                            textColor: t ? l.text.buttonTextColor : l.text.textColor,
                            backgroundColor: l.text.backgroundColor,
                            borderColor: l.borderColor,
                            borderStyle: l.borderStyle,
                            active: {
                                visible: i,
                                backgroundColor: l.text.backgroundColor
                            }
                        }
                    }
                    const n = l || a;
                    if (n) {
                        const t = null === n.price(),
                            r = this._isHoveredItemPart(n, 6),
                            i = (0, c.getDefaultStyleForOrderItem)(n, this._source, (() => this._chartModel.isDark()), e),
                            l = (0, s.generateColor)(i.borderColor, 85);
                        o.sl = {
                            id: n.id(),
                            visibility: t && this._isMainButtonsVisible() ? 1 : 0,
                            text: n.qtyText(),
                            title: n.tooltip(),
                            underlineText: this._source.isTrailingStopSupported(),
                            textColor: t ? i.text.buttonTextColor : i.text.textColor,
                            backgroundColor: i.text.backgroundColor,
                            borderColor: i.borderColor,
                            borderStyle: i.borderStyle,
                            active: {
                                visible: r,
                                backgroundColor: this._source.isTrailingStopSupported() ? l : i.text.backgroundColor
                            }
                        }
                    }
                    return o
                }
                _renderDataForLine(t) {
                    return {
                        drawOnTop: this._isActiveSource() && !this._isNoOverlapMode,
                        thickness: this._source.lineWidth(),
                        style: t.lineStyle,
                        color: t.lineColor,
                        extend: this._source.isLineExtended()
                    }
                }
                _renderDataForQty(t, e) {
                    return {
                        text: (o = this._item.qtyText(), null === o ? "0" : ((0, r.isNumber)(o) && o < 0 && (o = `− ${Math.abs(o)}`), (0, a.forceLTRStr)((0, n.splitThousands)(o, " ")))),
                        minTextWidth: this._minQtyWidth(),
                        textColor: t.textColor,
                        backgroundColor: t.backgroundColor,
                        dividerColor: t.dividerColor,
                        isDividerVisible: !0,
                        active: {
                            visible: this._isHoveredItemPart(this._item, 1),
                            backgroundColor: e
                        }
                    };
                    var o
                }
                _renderDataForText(t, e) {
                    return {
                        text: this._isProfitLossHidden() ? "" : this._item.profitLossText(this._isProfitLossShorten()),
                        textColor: t.textColor,
                        backgroundColor: t.backgroundColor,
                        dividerColor: t.dividerColor,
                        active: {
                            visible: this._isHoveredItemPart(this._item, 2),
                            backgroundColor: e
                        }
                    }
                }
                _renderDataForPoint() {
                    const {
                        takeProfit: t,
                        stopLoss: e,
                        trailingStop: o
                    } = (0, d.bracketsByType)(this._source.items().projectionBrackets), r = e || o, i = this._item === this._itemWithButtons(), l = i && t && null === t.price() && this._isHoveredItem(t), s = i && r && null === r.price() && this._isHoveredItem(r), a = this._isHoveredItem(this._item) || l || s ? this._mainItemStyle.pointShadowColor : void 0;
                    return {
                        visible: this._isActiveSource(),
                        backgroundColor: this._isSelectedItem(this._item) ? this._groupLineColor : this._mainItemStyle.pointBackgroundColor,
                        borderStyle: this._mainItemStyle.lineStyle,
                        borderColor: this._groupLineColor,
                        shadowColor: a
                    }
                }
                _renderDataForClose(t, e) {
                    if (this._item.supportClose() && this._isCloseVisible()) return {
                        backgroundColor: t.backgroundColor,
                        iconColor: t.iconColor,
                        active: {
                            visible: this._isHoveredItemPart(this._item, 3),
                            backgroundColor: e
                        }
                    }
                }
                _renderDataForConfirm() {
                    if (this._item !== this._itemWithConfirmButton() || !this._isMainButtonsVisible()) return;
                    (0, i.assert)((0, h.isOrderLikeItem)(this._item));
                    const t = (0, c.getDefaultStyleForOrderItem)(this._item, this._source, (() => this._chartModel.isDark())),
                        e = (0, i.ensureDefined)(t.confirm),
                        o = this._isHoveredItemPart(this._item, 7),
                        r = !this._source.hasError(),
                        s = r ? e.backgroundColor : e.disableBackgroundColor,
                        a = r ? (0, i.ensureDefined)(e.borderColor) : e.disableBackgroundColor,
                        n = r ? e.textColor : e.disableTextColor;
                    return {
                        text: this._confirmButtonText(),
                        textColor: n,
                        backgroundColor: s,
                        borderColor: a,
                        borderStyle: l.LineStyle.Solid,
                        active: {
                            visible: o && r,
                            backgroundColor: e.activeColor,
                            borderColor: e.activeColor
                        }
                    }
                }
                _renderDataGeneral(t) {
                    var e;
                    return {
                        y: this._y,
                        visible: this._item.isVisible(),
                        sortingIndex: null !== (e = this._item.price()) && void 0 !== e ? e : 0,
                        id: this._item.id(),
                        disabled: this._source.disabled(),
                        borderBackgroundColor: this._borderBackgroundColor(t),
                        borderColor: t.borderColor,
                        borderStyle: t.borderStyle,
                        bodyAlignment: this._source.horizontalAlignment(),
                        rightPadding: this._rightPadding
                    }
                }
                _callbacks(t = []) {
                    const e = {},
                        o = {
                            label: `[${this._modeGaLabel()}]`
                        };
                    this._item.hasContextMenu() && (e.onContextMenu = t => this._item.onContextMenu(t, o));
                    const {
                        takeProfit: r,
                        stopLoss: i,
                        trailingStop: l
                    } = (0, d.bracketsByType)(t), s = i || l;
                    return r && (e.onMoveProjectionTP = t => this._source.onMove(r.id(), t), e.onFinishMoveTP = () => this._source.onFinishMoveProjectionBracket(r.id(), { ...o,
                        event: "Add bracket from button"
                    })), s && (e.onMoveProjectionSL = t => this._source.onMove(s.id(), t), e.onFinishMoveSL = () => this._source.onFinishMoveProjectionBracket(s.id(), { ...o,
                        event: "Add bracket from button"
                    }), this._source.isTrailingStopSupported() && (e.onClickSL = (t, e) => s.toggleType(t, e, o))), this._isNoOverlapMode && (e.allInteractionsHandler = () => this._externalCallbacks.setNoOverlapMode(!1)), this._isMainButtonsVisible() && (e.onConfirm = () => this._source.onConfirm(this._item.id(), o)), e
                }
                _isMainButtonsVisible() {
                    return !this._source.isPlaced() && this._source.isActiveSource() || this._isHoveredItemWithButtons(this._item) || this._isHoveredStopItemStopLimit() || this._source.isSelected()
                }
                _borderBackgroundColor(t) {
                    return t.borderStyle === l.LineStyle.Solid ? "transparent" : t.borderBackgroundColor
                }
                _modeGaLabel() {
                    switch (this._displayMode) {
                        case 2:
                            return "Standard view";
                        case 1:
                            return "Medium view";
                        case 0:
                            return "Minimal view"
                    }
                }
                _confirmButtonText() {
                    return this._item.confirmText(2 !== this._displayMode)
                }
                _itemWithConfirmButton() {
                    if (!this._source.isPlaced() && !this._source.isConfirmButtonOnDomWidget()) return this._itemWithButtons()
                }
            }
        },
        16719: (t, e, o) => {
            "use strict";
            o.d(e, {
                ItemPriceAxisView: () => l
            });
            var r = o(841404);
            const i = (0, o(125226).isFeatureEnabled)("do_not_round_price_scale_label");
            class l extends r.PriceAxisView {
                constructor(t, e, o, r) {
                    super(), this._model = t, this._data = e, this._priceScaleFormatter = o, this._styleGetter = r
                }
                itemId() {
                    return this._data.id()
                }
                _updateRendererData(t, e, o) {
                    if (t.visible = !1, !this._data.isVisible()) return;
                    const r = this._model.mainSeries(),
                        i = r.priceScale(),
                        l = r.firstValue();
                    if (null === l) return;
                    const s = this._data.price();
                    if (null === s) return;
                    const a = this._styleGetter();
                    o.background = a.qty.backgroundColor, o.borderColor = a.labelBorderVisible ? a.borderColor : void 0, o.borderStyle = a.labelBorderVisible ? a.borderStyle : void 0, o.textColor = a.qty.textColor, o.coordinate = i.priceToCoordinate(s, l), t.borderVisible = a.labelBorderVisible, t.text = this._formatPrice(s), t.tickColor = a.labelTickColor, t.visible = !0
                }
                _formatPrice(t) {
                    const e = i && !this._data.useMinTickFormatter();
                    return this._priceScaleFormatter().format(t, void 0, void 0, void 0, void 0, e)
                }
            }
        },
        769459: (t, e, o) => {
            "use strict";
            o.d(e, {
                isItemWithTPSLRendererRect: () => d,
                TPSLItemRenderer: () => u
            });
            var r = o(650151),
                i = o(86441),
                l = o(858063),
                s = o(854905),
                a = o(914679),
                n = o(335144),
                c = o(785409);

            function d(t) {
                return t.hasOwnProperty("tp") && t.hasOwnProperty("sl")
            }
            class u extends c.ItemRenderer {
                constructor() {
                    super(...arguments), this._wasTPMoved = !1, this._wasSLMoved = !1
                }
                hitTest(t, e) {
                    var o, a;
                    const n = e.pixelRatio,
                        c = this.rectWithOffsets(e),
                        d = Math.round(t.x * n),
                        u = Math.round(t.y * n),
                        h = d >= c.left,
                        p = d <= c.right,
                        _ = h && p;
                    if (!(u >= c.top && u <= c.bottom) || !_) return null;
                    const f = {
                        cursorType: s.PaneCursorType.Default,
                        hideCrosshairLinesOnHover: !0,
                        activeItem: {
                            id: this._data.id,
                            part: 8
                        },
                        contextMenuHandler: this._data.callbacks.onContextMenu,
                        touchContextMenuHandler: this._data.callbacks.onContextMenu
                    };
                    if (this._data.disabled) return new l.HitTestResult(l.HitTestResult.CUSTOM, f);
                    const v = Math.round(c.top / n),
                        y = void 0 !== this._data.callbacks.onMoveProjectionTP && 1 === (null === (o = this._data.tp) || void 0 === o ? void 0 : o.visibility);
                    if (y && d >= c.tp.left && d < c.tp.left + c.tp.width) {
                        const t = Math.round(c.tp.left / n),
                            e = Math.round(c.tp.width / n),
                            o = t => {
                                this._data.callbacks.onMoveProjectionTP && this._data.callbacks.onMoveProjectionTP(t), this._wasTPMoved = !0
                            },
                            i = () => {
                                this._wasTPMoved && this._data.callbacks.onFinishMoveTP && this._data.callbacks.onFinishMoveTP(), this._wasTPMoved = !1
                            };
                        return new l.HitTestResult(l.HitTestResult.CUSTOM, { ...f,
                            cursorType: s.PaneCursorType.Pointer,
                            activeItem: {
                                id: (0, r.ensureDefined)(this._data.tp).id,
                                part: 5
                            },
                            pressedMouseMoveHandler: o,
                            touchMoveHandler: o,
                            mouseUpHandler: i,
                            touchEndHandler: i,
                            tooltip: {
                                extendMargin: !0,
                                text: (0, r.ensureDefined)(this._data.tp).title,
                                rect: {
                                    x: t,
                                    y: v,
                                    w: e,
                                    h: this._height
                                }
                            }
                        })
                    }
                    const b = c.sl.left + c.sl.width,
                        C = void 0 !== this._data.callbacks.onMoveProjectionSL && 1 === (null === (a = this._data.sl) || void 0 === a ? void 0 : a.visibility);
                    if (C && d >= c.sl.left && d < b) {
                        const t = Math.round(c.sl.width / n),
                            e = Math.round(c.sl.left / n),
                            o = Math.round(c.bottom / n),
                            a = t => {
                                this._data.callbacks.onMoveProjectionSL && this._data.callbacks.onMoveProjectionSL(t), this._wasSLMoved = !0
                            },
                            d = () => {
                                this._wasSLMoved && this._data.callbacks.onFinishMoveSL && this._data.callbacks.onFinishMoveSL(), this._wasSLMoved = !1
                            };
                        let u, h;
                        const p = this._data.callbacks.onClickSL;
                        if (void 0 !== p) {
                            const r = r => {
                                const l = r.clientX - r.localX,
                                    s = r.clientY - r.localY,
                                    a = new i.Point(e + l, o + s);
                                p((r => r.x > e && r.x <= e + t && r.y > v && r.y <= o), a)
                            };
                            u = r, h = t => {
                                t.preventDefault(), r(t)
                            }
                        }
                        return new l.HitTestResult(l.HitTestResult.CUSTOM, { ...f,
                            cursorType: p ? s.PaneCursorType.Default : s.PaneCursorType.Pointer,
                            activeItem: {
                                id: (0, r.ensureDefined)(this._data.sl).id,
                                part: 6
                            },
                            pressedMouseMoveHandler: a,
                            touchMoveHandler: a,
                            mouseUpHandler: d,
                            touchEndHandler: d,
                            clickHandler: u,
                            tapHandler: h,
                            tooltip: {
                                extendMargin: !0,
                                text: (0, r.ensureDefined)(this._data.sl).title,
                                rect: {
                                    x: e,
                                    y: v,
                                    w: t,
                                    h: this._height
                                }
                            }
                        })
                    }
                    const m = b - c.body.left < 0 ? d >= b && d < c.body.left : d >= c.body.right && d < c.tp.left;
                    if ((y || C) && m) return new l.HitTestResult(l.HitTestResult.CUSTOM, f);
                    if (this._hasConfirmButton() && (0, r.ensureDefined)(this._data.confirm)) {
                        const t = c.confirm.left + c.confirm.width;
                        if (d >= c.confirm.left && d < t) {
                            let t = {};
                            if (void 0 !== this._data.callbacks.onMove) {
                                const e = t => {
                                        this._data.callbacks.onMove && this._data.callbacks.onMove(t), this._wasSourceMoved = !0
                                    },
                                    o = () => {
                                        this._wasSourceMoved && this._data.callbacks.onFinishMove && this._data.callbacks.onFinishMove(), this._wasSourceMoved = !1
                                    };
                                t = {
                                    pressedMouseMoveHandler: e,
                                    touchMoveHandler: e,
                                    mouseUpHandler: o,
                                    touchEndHandler: o
                                }
                            }
                            return new l.HitTestResult(l.HitTestResult.CUSTOM, { ...f,
                                ...t,
                                activeItem: {
                                    id: this._data.id,
                                    part: 7
                                },
                                clickHandler: this._data.callbacks.onConfirm,
                                tapHandler: this._data.callbacks.onConfirm
                            })
                        }
                        const o = this._calcConfirmRect(e.pixelRatio, c.borderWidth).offset;
                        if (t - c.body.left < 0 ? d >= t && d < c.tp.left : d >= c.confirm.left - o && d < c.confirm.left) return new l.HitTestResult(l.HitTestResult.CUSTOM, f)
                    }
                    return super.hitTest(t, e)
                }
                draw(t, e) {
                    if (super.draw(t, e), !this._isDataVisibleInViewport(e) || !this._data.visible) return;
                    const o = this.rectWithOffsets(e),
                        i = o.bottom - o.top,
                        l = o.yMid;
                    this._isTPSLVisible() && (0 !== o.tp.width && 1 === (0, r.ensureDefined)(this._data.tp).visibility && this._drawButton(t, e, i, o.borderRadius, l, o.tp, this._data.tp), 0 !== o.sl.width && 1 === (0, r.ensureDefined)(this._data.sl).visibility && this._drawButton(t, e, i, o.borderRadius, l, o.sl, this._data.sl)), this._hasConfirmButton() && this._drawButton(t, e, i, o.borderRadius, l, o.confirm, this._data.confirm)
                }
                rect(t) {
                    return super.rect(t)
                }
                rectWithOffsets(t) {
                    return super.rectWithOffsets(t)
                }
                _calculateCacheRectWithOffsets(t) {
                    let e = super._calculateCacheRectWithOffsets(t);
                    return e = { ...e,
                        tp: { ...e.tp,
                            left: this._calcCoordinateWithOffset(e.tp.left, e.tp.left + e.tp.width).left
                        },
                        sl: { ...e.sl,
                            left: this._calcCoordinateWithOffset(e.sl.left, e.sl.left + e.sl.width).left
                        }
                    }, void 0 !== e.confirm && (e.confirm = { ...e.confirm,
                        left: this._calcCoordinateWithOffset(e.confirm.left, e.confirm.left + e.confirm.width).left
                    }), e
                }
                _calculateCacheRect(t) {
                    const e = super._calculateCacheRect(t),
                        o = this._calcTPSLRect(t.pixelRatio, e.borderWidth),
                        r = this._calcConfirmRect(t.pixelRatio, e.borderWidth);
                    let i = 0,
                        l = 0;
                    const s = this._data.bodyAlignment === n.TradedGroupHorizontalAlignment.Left;
                    s ? (l = e.body.right + o.offset, i = l + o.tp - (o.tp > 0 ? e.borderWidth : 0)) : (i = e.body.left - o.offset - o.sl, l = i - (o.tp > 0 ? o.tp - e.borderWidth : 0));
                    let a = 0;
                    r.confirm > 0 && (a = s ? i + o.sl + r.offset : l - r.confirm - r.offset - e.borderWidth);
                    let c = a || l,
                        d = e.right;
                    return s && (c = e.left, d = a > 0 ? a + r.confirm : i + o.sl), { ...e,
                        left: c,
                        right: d,
                        tp: {
                            width: o.tp,
                            left: l
                        },
                        sl: {
                            width: o.sl,
                            left: i
                        },
                        confirm: {
                            width: r.confirm,
                            left: a
                        }
                    }
                }
                _drawLine(t, e) {
                    var o, r;
                    if (!this._data.callbacks.onFinishMoveSL && !this._data.callbacks.onFinishMoveTP) return void super._drawLine(t, e);
                    const i = e.pixelRatio,
                        l = this.rectWithOffsets(e),
                        s = Math.round(e.physicalWidth);
                    if (t.save(), t.strokeStyle = this._data.line.color, t.lineWidth = Math.max(1, Math.floor(this._data.line.thickness * i)), (0, a.setLineStyle)(t, this._data.line.style), (0, a.drawHorizontalLine)(t, l.yMid, l.body.right, s), this._data.line.extend)(0, a.drawHorizontalLine)(t, l.yMid, 0, l.body.left);
                    else {
                        const e = 1 === (null === (o = this._data.tp) || void 0 === o ? void 0 : o.visibility),
                            i = 1 === (null === (r = this._data.sl) || void 0 === r ? void 0 : r.visibility);
                        if (e || i) {
                            const e = i ? l.sl.left + l.sl.width : l.tp.left + l.tp.width;
                            (0, a.drawHorizontalLine)(t, l.yMid, e, l.body.left)
                        }
                        if (this._hasConfirmButton()) {
                            const e = l.confirm.left + l.confirm.width;
                            (0, a.drawHorizontalLine)(t, l.yMid, e, l.body.left)
                        }
                    }
                    t.restore()
                }
                _calcAllWidth(t, e, o, r, i, l) {
                    const s = super._calcAllWidth(t, e, o, r, i, l);
                    if (!this._data.tp && !this._data.sl && !this._hasConfirmButton()) return s;
                    const a = this._calcTPSLRect(t, l),
                        n = this._calcConfirmRect(t, l);
                    return s + a.tp + a.sl + a.offset + n.confirm + n.offset
                }
                _calcConfirmRect(t, e) {
                    if (!this._hasConfirmButton()) return {
                        confirm: 0,
                        offset: 0
                    };
                    const o = 2 * e,
                        i = Math.round(11 * t),
                        l = this._textWidth(this._ctxInternal, (0,
                            r.ensureDefined)(this._data.confirm).text);
                    return {
                        confirm: Math.round(l * t) + (l && o) + (l && i),
                        offset: Math.round(10 * t)
                    }
                }
                _calcTPSLRect(t, e) {
                    const o = 2 * e,
                        r = this._textWidth(this._ctxInternal, void 0 !== this._data.tp ? this._data.tp.text : ""),
                        i = Math.round(r * t) + (r && o),
                        l = this._textWidth(this._ctxInternal, void 0 !== this._data.sl ? this._data.sl.text : ""),
                        s = Math.round(l * t) + (l && o);
                    return {
                        tp: i,
                        sl: s,
                        offset: s > 0 || i > 0 ? Math.round(10 * t) : 0
                    }
                }
                _drawButton(t, e, o, r, i, l, s) {
                    if (void 0 === s) return;
                    const n = this.rectWithOffsets(e);
                    (0, a.drawRoundRectWithInnerBorder)(t, l.left, n.top, l.width, o, s.backgroundColor, r), s.active.visible && (0, a.drawRoundRectWithInnerBorder)(t, l.left, n.top, l.width, o, s.active.backgroundColor, r);
                    const c = s.active.visible && void 0 !== s.active.borderColor ? s.active.borderColor : s.borderColor;
                    (0, a.drawRoundRectWithInnerBorder)(t, l.left, n.top, l.width, o, "transparent", r, n.borderWidth, c, s.borderStyle);
                    const d = l.left + l.width / 2;
                    s.underlineText ? this._drawUnderlinedText(t, e.pixelRatio, s.text, s.textColor, d, i) : this._drawText(t, e.pixelRatio, s.text, s.textColor, d, i)
                }
                _isTPSLVisible() {
                    return Boolean(this._data.tp) || Boolean(this._data.sl)
                }
                _hasConfirmButton() {
                    return Boolean(this._data.callbacks.onConfirm && this._data.confirm)
                }
            }
        },
        785409: (t, e, o) => {
            "use strict";
            o.d(e, {
                ItemsRendererType: () => r,
                ItemRenderer: () => _
            });
            var r, i = o(650151),
                l = o(86441),
                s = o(858063),
                a = o(854905),
                n = o(638456),
                c = o(914679),
                d = o(335144),
                u = o(715073);

            function h(t, e, o, r, i, l) {
                t.save(), t.fillStyle = l, t.fillRect(e, o, r, i), t.restore()
            }! function(t) {
                t[t.Position = 0] = "Position", t[t.WithBracketButtons = 1] = "WithBracketButtons", t[t.Projection = 2] = "Projection", t[t.Default = 3] = "Default"
            }(r || (r = {}));
            const p = n.CheckMobile.any();
            class _ {
                constructor(t, e, o, r) {
                    this._height = p ? 23 : 19, this._bodyBorderRadius = 4, this._font = null, this._offsets = null, this._alignedTop = null, this._wasSourceMoved = !1, this._cache = null, this._cacheWithOffset = null, this._textWidthCache = e, this._minMainTextWidthGetter = r, this._data = t, this._font = o, this._initCtx()
                }
                setFont(t) {
                    this._font !== t && (this._font = t, this.clearCache())
                }
                data() {
                    return this._data
                }
                clearCache() {
                    this._cache = null, this._cacheWithOffset = null
                }
                applyOffset(t) {
                    this._offsets = t, this.clearCache()
                }
                setAlignedTopCoordinate(t) {
                    this._alignedTop = t
                }
                hitTest(t, e) {
                    var o;
                    const r = this.rectWithOffsets(e),
                        n = e.pixelRatio,
                        c = Math.round(t.x * n),
                        d = Math.round(t.y * n),
                        u = c >= r.body.left,
                        h = c <= r.body.right,
                        p = u && h;
                    if (!(d >= r.top && d <= r.bottom) || !p) return null;
                    const _ = {
                        cursorType: a.PaneCursorType.Default,
                        hideCrosshairLinesOnHover: !0,
                        activeItem: {
                            id: this._data.id,
                            part: 8
                        }
                    };
                    if (this._data.disabled) return new s.HitTestResult(s.HitTestResult.CUSTOM, _);
                    let f = {};
                    if (void 0 !== this._data.callbacks.onMove) {
                        const t = t => {
                                this._data.callbacks.onMove && this._data.callbacks.onMove(t), this._wasSourceMoved = !0
                            },
                            e = () => {
                                this._wasSourceMoved && this._data.callbacks.onFinishMove && this._data.callbacks.onFinishMove(), this._wasSourceMoved = !1
                            };
                        f = {
                            cursorType: a.PaneCursorType.Pointer,
                            pressedMouseMoveHandler: t,
                            touchMoveHandler: t,
                            mouseUpHandler: e,
                            touchEndHandler: e
                        }
                    }
                    const v = this._data.callbacks.onContextMenu,
                        y = this._data.callbacks.onContextMenu,
                        b = { ..._,
                            ...f,
                            hasOwnShortcutsBehaviourFor: {
                                shiftKey: !0
                            },
                            contextMenuHandler: v,
                            touchContextMenuHandler: y
                        },
                        C = Math.round(r.body.left / n),
                        m = Math.round(r.top / n);
                    if (c >= r.close.left && h && void 0 !== this._data.callbacks.onClose) {
                        const t = Math.round(r.body.right / n),
                            e = Math.round(r.close.left / n);
                        return new s.HitTestResult(s.HitTestResult.CUSTOM, { ...b,
                            activeItem: {
                                id: this._data.id,
                                part: 3
                            },
                            cursorType: a.PaneCursorType.Default,
                            clickHandler: this._data.callbacks.onClose,
                            tapHandler: this._data.callbacks.onClose,
                            tooltip: {
                                extendMargin: !0,
                                text: (0, i.ensureDefined)(this._data.close).title,
                                rect: {
                                    x: e,
                                    y: m,
                                    w: t - e,
                                    h: this._height
                                }
                            }
                        })
                    }
                    if (null === (o = this._data.callbacks) || void 0 === o ? void 0 : o.allInteractionsHandler) return new s.HitTestResult(s.HitTestResult.CUSTOM, { ..._,
                        clickHandler: this._data.callbacks.allInteractionsHandler,
                        tapHandler: this._data.callbacks.allInteractionsHandler,
                        contextMenuHandler: this._data.callbacks.allInteractionsHandler,
                        touchContextMenuHandler: this._data.callbacks.allInteractionsHandler
                    });
                    if (c >= r.text.left && c < r.close.left) {
                        const t = Math.round(r.text.left / n),
                            e = Math.round(r.bottom / n),
                            o = Math.round(r.text.width / n),
                            i = this._data.callbacks.onText;
                        if (void 0 !== i) {
                            const r = r => {
                                    const s = r.clientX - r.localX,
                                        a = r.clientY - r.localY,
                                        n = new l.Point(t + s, e + a);
                                    i((r => r.x > t && r.x <= t + o && r.y > m && r.y <= e), n)
                                },
                                n = r,
                                c = t => {
                                    t.preventDefault(), r(t)
                                };
                            return new s.HitTestResult(s.HitTestResult.CUSTOM, { ...b,
                                activeItem: {
                                    id: this._data.id,
                                    part: 2
                                },
                                cursorType: a.PaneCursorType.Default,
                                clickHandler: n,
                                tapHandler: c,
                                tooltip: {
                                    extendMargin: !0,
                                    text: this._data.text.title,
                                    rect: {
                                        x: t,
                                        y: m,
                                        w: o,
                                        h: this._height
                                    }
                                }
                            })
                        }
                        const c = Math.round(r.close.left / n);
                        return new s.HitTestResult(s.HitTestResult.CUSTOM, { ...b,
                            tooltip: {
                                extendMargin: !0,
                                text: this._data.text.title,
                                rect: {
                                    x: t,
                                    y: m,
                                    w: c - t,
                                    h: this._height
                                }
                            }
                        })
                    }
                    const g = this._data.callbacks.onQtyModify;
                    if (c > r.qty.left && c < r.text.left && void 0 !== g) {
                        const t = Math.round(r.qty.left / n),
                            e = Math.round(r.bottom / n),
                            o = Math.round(r.qty.width / n),
                            c = r => {
                                const i = r.clientX - r.localX,
                                    s = r.clientY - r.localY,
                                    a = new l.Point(t + o + i, e + s);
                                g((r => r.x > t && r.x <= t + o && r.y > m && r.y <= e), a)
                            },
                            d = c,
                            u = t => {
                                t.preventDefault(), c(t)
                            },
                            h = Math.round(r.text.left / n);
                        return new s.HitTestResult(s.HitTestResult.CUSTOM, { ..._,
                            ...f,
                            activeItem: {
                                id: this._data.id,
                                part: 1
                            },
                            cursorType: a.PaneCursorType.Default,
                            clickHandler: d,
                            tapHandler: u,
                            tooltip: {
                                extendMargin: !0,
                                text: (0, i.ensureDefined)(this._data.qty).title,
                                rect: {
                                    x: t,
                                    y: m,
                                    w: h - t,
                                    h: this._height
                                }
                            }
                        })
                    }
                    if (u && c < r.text.left && void 0 !== this._data.callbacks.onModify) {
                        const t = Math.round(r.text.left / n);
                        return new s.HitTestResult(s.HitTestResult.CUSTOM, { ...b,
                            activeItem: {
                                id: this._data.id,
                                part: 1
                            },
                            cursorType: a.PaneCursorType.Default,
                            clickHandler: this._data.callbacks.onModify,
                            tapHandler: this._data.callbacks.onModify,
                            tooltip: {
                                extendMargin: !0,
                                text: (0, i.ensureDefined)(this._data.qty).title,
                                rect: {
                                    x: C,
                                    y: m,
                                    w: t - C,
                                    h: this._height
                                }
                            }
                        })
                    }
                    return new s.HitTestResult(s.HitTestResult.CUSTOM, b)
                }
                drawBackground(t, e) {
                    !this._data.line.drawOnTop && this._data.visible && this._drawLine(t, e)
                }
                drawLine(t, e) {
                    this._isDataVisibleInViewport(e) && this._data.line.drawOnTop && this._data.visible && this._drawLine(t, e)
                }
                drawPointOnLine(t, e, o) {
                    if (!this._isDataVisibleInViewport(e) || !this._data.point.visible || !this._data.visible) return;
                    const r = this.rectWithOffsets(e),
                        i = Math.round(3 * e.pixelRatio),
                        l = Math.max(1, Math.floor(1 * e.pixelRatio)),
                        s = l / 2,
                        a = 2.5 * e.pixelRatio + s,
                        n = o + (s % 1 == 0 ? 0 : .5),
                        u = r.yMid + (s % 1 == 0 ? 0 : .5);
                    this._data.line.extend || this._data.bodyAlignment !== d.TradedGroupHorizontalAlignment.Left || (t.save(), t.strokeStyle = this._data.line.color, t.lineWidth = Math.max(1, Math.floor(this._data.line.thickness * e.pixelRatio)), (0, c.setLineStyle)(t, this._data.line.style), (0, c.drawHorizontalLine)(t, r.yMid, n, r.left), t.restore()), t.save(), t.lineWidth = l, (0, c.setLineStyle)(t, this._data.point.borderStyle), this._data.point.shadowColor && !this._data.disabled && (t.fillStyle = this._data.point.shadowColor, (0, c.createCircle)(t, n, u, a + i), t.fill()), t.strokeStyle = this._data.point.borderColor, t.fillStyle = this._data.point.backgroundColor, (0, c.createCircle)(t, n, u, a), t.fill(), t.stroke(), t.restore()
                }
                draw(t, e) {
                    if (!this._data.visible) return;
                    const o = e.pixelRatio,
                        r = this.rectWithOffsets(e);
                    if (!this._isDataVisibleInViewport(e)) return;
                    const l = 0 !== r.qty.width,
                        s = 0 !== r.text.width,
                        a = 0 !== r.close.width,
                        n = r.body.right - r.body.left,
                        d = r.bottom - r.top,
                        u = r.top + r.borderWidth,
                        p = d - 2 * r.borderWidth,
                        _ = r.borderRadius - r.borderWidth;
                    (0, c.drawRoundRectWithInnerBorder)(t, r.body.left, r.top, n, d, this._data.borderBackgroundColor, r.borderRadius, r.borderWidth, this._data.borderColor, this._data.borderStyle);
                    let f = r.body.left + r.borderWidth;
                    if (l) {
                        const e = (0, i.ensureDefined)(this._data.qty);
                        this._drawQtyWithBackground(t, o, r, !0, !a && !s), f += r.qty.width, r.qty.rightDividerWidth && (h(t, f, u, r.qty.rightDividerWidth, p, e.dividerColor), f += r.qty.rightDividerWidth)
                    }
                    if (s && (this._drawTextWithBackground(t, o, r, !l, !a), f += r.text.width, r.text.rightDividerWidth && (h(t, f, u, r.text.rightDividerWidth, p, this._data.text.dividerColor), f += r.text.rightDividerWidth)), a) {
                        const e = (0, i.ensureDefined)(this._data.close),
                            l = r.body.right - f - r.borderWidth;
                        (0, c.drawRoundRectWithInnerBorder)(t, f, u, l, p, e.backgroundColor, [0, _, _, 0]), e.active.visible && (0, c.drawRoundRectWithInnerBorder)(t, f, u, l, p, e.active.backgroundColor, [0, _, _, 0]), this._drawCloseButton(t, o, f, r.top, r.close.width, d, r.borderWidth)
                    }
                }
                rect(t) {
                    return null === this._cache && (this._cache = this._calculateCacheRect(t)), this._cache
                }
                rectWithOffsets(t) {
                    return null === this._cacheWithOffset && (this._cacheWithOffset = this._calculateCacheRectWithOffsets(t)), this._cacheWithOffset
                }
                _calculateCacheRect(t) {
                    var e;
                    const o = t.pixelRatio,
                        r = Math.round(t.cssWidth * o),
                        i = Math.max(1, Math.floor(1 * o)),
                        l = this._bodyBorderRadius,
                        s = Math.max(l, Math.floor(l * o)),
                        a = this._quantityWidth(this._ctxInternal),
                        n = Math.round(a * o),
                        c = this._mainTextWidth(this._ctxInternal),
                        u = Math.round(c * o),
                        h = this._data.callbacks.onClose ? this._closeWidth() : 0,
                        p = Math.round(h * o);
                    let _ = 0;
                    const f = a && (c || h),
                        v = c && h;
                    _ += f && 1, _ += v && 1;
                    const y = n + u + p + i * _ + 2 * i;
                    let b = Math.round(this._height * o);
                    const C = Math.max(1, Math.floor(o));
                    b % 2 != C % 2 && (b += 1);
                    const m = Math.round(this._data.y * o),
                        g = Math.floor(m + C / 2 - b / 2) - Math.floor(.5 * o),
                        P = this._data.bodyAlignment === d.TradedGroupHorizontalAlignment.Center ? Math.round(40 * r / 100) : Math.round(this._data.rightPadding * o);
                    let T = P;
                    this._data.bodyAlignment === d.TradedGroupHorizontalAlignment.Left && (T = r - P - y);
                    const k = r - T,
                        x = k - y,
                        M = x + n + (n && i) + (n && i),
                        w = M + u + (u && i);
                    return {
                        borderWidth: i,
                        borderRadius: s,
                        yMid: m,
                        top: g,
                        bottom: g + b,
                        left: x,
                        right: k,
                        body: {
                            left: x,
                            right: k
                        },
                        qty: {
                            width: n,
                            left: x + (n && i),
                            rightDividerWidth: f && (null === (e = this._data.qty) || void 0 === e ? void 0 : e.isDividerVisible) ? i : 0
                        },
                        text: {
                            width: u,
                            left: M,
                            rightDividerWidth: v ? i : 0
                        },
                        close: {
                            width: p,
                            left: w
                        }
                    }
                }
                _calculateCacheRectWithOffsets(t) {
                    const e = this.rect(t),
                        {
                            left: o,
                            right: r
                        } = this._calcCoordinateWithOffset(e.left, e.right),
                        {
                            left: i,
                            right: l
                        } = this._calcCoordinateWithOffset(e.body.left, e.body.right);
                    return { ...e,
                        left: o,
                        right: r,
                        top: this._alignedTop ? this._alignedTop : e.top,
                        bottom: this._alignedTop ? this._alignedTop + (e.bottom - e.top) : e.bottom,
                        body: { ...e.body,
                            left: i,
                            right: l
                        },
                        qty: { ...e.qty,
                            left: this._calcCoordinateWithOffset(e.qty.left, e.qty.left + e.qty.width).left
                        },
                        text: { ...e.text,
                            left: this._calcCoordinateWithOffset(e.text.left, e.text.left + e.text.width).left
                        },
                        close: { ...e.close,
                            left: this._calcCoordinateWithOffset(e.close.left, e.close.left + e.close.width).left
                        }
                    }
                }
                _calcCoordinateWithOffset(t, e) {
                    var o, r, i, l;
                    if (null !== this._cache) {
                        const s = null !== (r = null === (o = this._offsets) || void 0 === o ? void 0 : o.leftmostForItemOffset) && void 0 !== r ? r : null;
                        if (null !== s) {
                            const o = t - (this._cache.left - s);
                            return {
                                left: o,
                                right: o + (e - t)
                            }
                        }
                        const a = null !== (l = null === (i = this._offsets) || void 0 === i ? void 0 : i.rightmostForItemOffset) && void 0 !== l ? l : null;
                        if (null !== a) {
                            const o = e + (a - this._cache.right);
                            return {
                                left: o - (e - t),
                                right: o
                            }
                        }
                    }
                    return {
                        left: t,
                        right: e
                    }
                }
                _calcAllWidth(t, e, o, r, i, l) {
                    return e + o + r + i + 2 * l
                }
                _isDataVisibleInViewport(t) {
                    const e = Math.ceil(this._height / 2);
                    return this._data.y >= -e && this._data.y <= t.cssHeight + e
                }
                _mainTextWidth(t) {
                    return this._data.text.text ? this._minMainTextWidthGetter(this._data, t) + 14 : 0
                }
                _closeWidth() {
                    return 23
                }
                _measureTextWidth(t, e) {
                    if (!e) return 0;
                    const o = t.font;
                    t.font = (0, i.ensureNotNull)(this._font);
                    const r = Math.ceil(this._textWidthCache.measureText(t, e));
                    return t.font = o, r
                }
                _textWidth(t, e) {
                    const o = this._measureTextWidth(t, e);
                    return o ? Math.round(14 + o) : 0
                }
                _quantityWidth(t) {
                    var e, o, r;
                    const i = this._measureTextWidth(t, null === (e = this._data.qty) || void 0 === e ? void 0 : e.text);
                    return Math.round(Math.max(this._height, 14 + i, null !== (r = null === (o = this._data.qty) || void 0 === o ? void 0 : o.minTextWidth) && void 0 !== r ? r : 0))
                }
                _drawLine(t, e) {
                    const o = e.pixelRatio,
                        r = this.rectWithOffsets(e),
                        i = Math.round(e.physicalWidth);
                    t.save(), t.strokeStyle = this._data.line.color, t.lineWidth = Math.max(1, Math.floor(this._data.line.thickness * o)), (0, c.setLineStyle)(t, this._data.line.style), (0, c.drawHorizontalLine)(t, r.yMid, r.body.right, i), this._data.line.extend && (0, c.drawHorizontalLine)(t, r.yMid, 0, r.body.right), t.restore()
                }
                _drawQtyBackground(t, e, o, r, l) {
                    const s = (0, i.ensureDefined)(this._data.qty),
                        a = o.bottom - o.top,
                        n = o.top + o.borderWidth,
                        d = a - 2 * o.borderWidth,
                        u = o.borderRadius - o.borderWidth;
                    let h = 0;
                    l ? h = r ? u : [0, u, u, 0] : r && (h = [u, 0, 0, u]), (0, c.drawRoundRectWithInnerBorder)(t, o.qty.left, n, o.qty.width, d, s.backgroundColor, h), s.active.visible && (0, c.drawRoundRectWithInnerBorder)(t, o.qty.left, n, o.qty.width, d, s.active.backgroundColor, h)
                }
                _drawQtyWithBackground(t, e, o, r, l) {
                    const s = (0, i.ensureDefined)(this._data.qty);
                    this._drawQtyBackground(t, e, o, r, l);
                    const a = (o.top + o.bottom) / 2,
                        n = o.qty.left + o.qty.width / 2;
                    this._drawText(t, e, s.text, s.textColor, n, a)
                }
                _drawTextWithBackground(t, e, o, r, l) {
                    const s = o.bottom - o.top,
                        a = o.top + o.borderWidth,
                        n = s - 2 * o.borderWidth,
                        d = o.borderRadius - o.borderWidth;
                    let h = 0;
                    l ? h = r ? d : [0, d, d, 0] : r && (h = [d, 0, 0, d]), (0, c.drawRoundRectWithInnerBorder)(t, o.text.left, a, o.text.width, n, this._data.text.backgroundColor, h), this._data.text.active.visible && (0, c.drawRoundRectWithInnerBorder)(t, o.text.left, a, o.text.width, n, this._data.text.active.backgroundColor, h);
                    const p = o.top + s / 2,
                        _ = o.text.left + o.text.width / 2,
                        f = (this._data.qty || this._data.text).text,
                        v = this._getTextYMidCorrection(t, f) * e;
                    (0, u.drawText)(t, e, this._data.text.text, _, p, v, this._data.text.textColor, (0, i.ensureNotNull)(this._font))
                }
                _drawText(t, e, o, r, l, s, a) {
                    const n = o.split("@").join("").toUpperCase(),
                        c = this._getTextYMidCorrection(t, n) * e;
                    (0, u.drawText)(t, e, o, l, s, c, r, (0, i.ensureNotNull)(this._font), a)
                }
                _drawUnderlinedText(t, e, o, r, l, s) {
                    const a = this._getTextYMidCorrection(t, o) * e,
                        n = this._getTextMetrics(t, o);
                    (0, u.drawUnderlinedText)(t, e, o, l, s, a, r, (0, i.ensureNotNull)(this._font), n)
                }
                _getTextYMidCorrection(t, e) {
                    const o = t.font;
                    t.font = (0, i.ensureNotNull)(this._font);
                    const r = this._textWidthCache.yMidCorrection(t, e);
                    return t.font = o, r
                }
                _getTextMetrics(t, e) {
                    const o = t.font;
                    t.font = (0, i.ensureNotNull)(this._font);
                    const r = this._textWidthCache.getMetrics(t, e);
                    return t.font = o, r
                }
                _drawCloseButton(t, e, o, r, s, a, n) {
                    const d = (0, i.ensureDefined)(this._data.close);
                    t.save(), t.lineWidth = n, t.strokeStyle = d.iconColor;
                    const u = r + a,
                        h = Math.max(1, Math.ceil(7 * e)),
                        p = Math.round((s - h) / 2),
                        _ = Math.round((a - h) / 2);
                    (0, c.drawPoly)(t, [new l.Point(o + p, r + _), new l.Point(o + p + h, u - _)], !0), (0, c.drawPoly)(t, [new l.Point(o + p + h, r + _), new l.Point(o + p, u - _)], !0), t.restore()
                }
                _initCtx() {
                    const t = document.createElement("canvas");
                    t.width = 0, t.height = 0, this._ctxInternal = (0, i.ensureNotNull)(t.getContext("2d"))
                }
            }
        },
        669129: (t, e, o) => {
            "use strict";
            o.d(e, {
                OrderBaseItem: () => B
            });
            var r = o(777754),
                i = o(868151),
                l = o(650151),
                s = o(150335),
                a = o(86441),
                n = o(758337),
                c = o(310399),
                d = o(96841),
                u = o(691520),
                h = o(335144),
                p = o(136916),
                _ = o(547623),
                f = o(703819),
                v = o(791402),
                y = o(524774);
            var b = o(113258),
                C = o(249110),
                m = o(313178),
                g = o(125226),
                P = o(506787),
                T = o(321491);
            const k = (0, g.isFeatureEnabled)("allow_trailing_stop_profit_loss"),
                x = (0, i.appendEllipsis)(r.t(null, void 0, o(305806))),
                M = r.t(null, void 0, o(709498)),
                w = r.t(null, void 0, o(555937)),
                S = r.t(null, void 0, o(937385));
            class B extends T.BaseItem {
                constructor(t, e, o, r, i, s, a, n = "Chart Order") {
                    super(t, e, o, r, n, i, s), this._inEdit = !1, this._isQtyModifyOpened = !1, this._handleQtyModifyClose = (t, e) => {
                        t(e) ? this.applyQty(this.data().qty) : this._handleQtyModifyDestroy()
                    }, this._handleQtyModifyDestroy = () => {
                        this.applyQty(this.data().qty), this._isQtyModifyOpened = !1,
                            this._closeQtyCalc()
                    }, this._isBracket() && this._source.bracketsDisplayMode().subscribe(this, this.fireProfitLossChange), a && (this._qtyModifyCallbacks = {
                        onQtyApplyHandler: a.onQtyApplyHandler,
                        onToggleQtyCalcHandler: a.onToggleQtyCalcHandler,
                        qtyInfoGetter: a.qtyInfoGetter
                    }, this._qtyProvider = a.qtyProvider, this._suggestedQty = this._qtyProvider.suggestedQty().spawn(), this._suggestedQty.subscribe((0, l.ensureDefined)(this._qtyModifyCallbacks.onQtyApplyHandler)))
                }
                destroy() {
                    var t, e;
                    this._isQtyModifyOpened = !1, this._closeQtyCalc(), this._source.bracketsDisplayMode().unsubscribe(this, this.fireProfitLossChange), null === (t = this._contextMenu) || void 0 === t || t.hide(), null === (e = this._suggestedQty) || void 0 === e || e.destroy(), super.destroy()
                }
                canQtyCalcModify() {
                    return Boolean(this._qtyProvider)
                }
                toggleQtyModify(t, e, o = {}) {
                    this.canQtyCalcModify() && (this._isQtyModifyOpened = !this._isQtyModifyOpened, this._toggleQtyCalc(t, e, o))
                }
                modifyQty(t) {
                    this.canQtyCalcModify() && (0, l.ensureDefined)(this._qtyModifyCallbacks).onQtyApplyHandler(t)
                }
                applyQty(t) {
                    var e;
                    this.modifyQty(t), null === (e = this._qtyProvider) || void 0 === e || e.applySuggestedQty(this._data.qty)
                }
                currency() {
                    var t;
                    return null !== (t = this._symbolDataProvider.orderCurrency()) && void 0 !== t ? t : ""
                }
                canSwitchType() {
                    return !1
                }
                id() {
                    return this._id
                }
                setData(t) {
                    this._inEdit || (super.setData(t), this.fireProfitLossChange(), this._id = this._calcId())
                }
                setInEdit(t) {
                    this._inEdit = t
                }
                type() {
                    return this._data.type
                }
                bracketType() {
                    return this._isBracket() ? (0, m.getBracketType)(this._data) : null
                }
                qty() {
                    return this._data.qty
                }
                profitLossText(t) {
                    var e;
                    return this._data && this._isBracket() && (null === (e = this._source.isBracketsPLVisible()) || void 0 === e ? void 0 : e.value()) && (this.bracketType() !== p.BracketType.TrailingStop || k) ? super.profitLossText(t) : this._bracketTypeText(t)
                }
                profitLossTextColor() {
                    if (!this._data) return "";
                    const t = this.style();
                    if (!this._isBracket()) return t.text.textColor;
                    const e = this._potentialProfitLoss();
                    return null === e ? t.text.textColor : e > 0 ? t.positivePlColor : e < 0 ? t.negativePlColor : t.text.textColor
                }
                profitLossTooltip() {
                    var t;
                    const e = this._source.mainItem(),
                        o = null == e ? void 0 : e.price();
                    if (null == o || !this._isBracket()) return "";
                    const r = this._potentialProfitLoss();
                    if (null === r) return `${this._bracketTypeText()}`;
                    if (!(null === (t = this._source.isBracketsPLVisible()) || void 0 === t ? void 0 : t.value()) || this.bracketType() === p.BracketType.TrailingStop && !k) return "";
                    switch (this._infoGetters.displayMode.value()) {
                        case h.PlDisplay.Money:
                            return `${this._bracketTypeText()} ${this.percentageText(r)} ${this.pipsText(r)}`;
                        case h.PlDisplay.Percentage:
                            return `${this._bracketTypeText()} ${this.moneyText(r)} ${this.pipsText(r)}`;
                        case h.PlDisplay.Pips:
                            return `${this._bracketTypeText()} ${this.moneyText(r)} ${this.percentageText(r)}`;
                        default:
                            return `${this._bracketTypeText()} ${this.pipsText(r)} ${this.percentageText(r)} ${this.moneyText(r)}`
                    }
                }
                lineStyle() {
                    return this.isWorking() ? d.LineStyle.Solid : d.LineStyle.Dotted
                }
                calcPriceDiff(t) {
                    const e = new a.Point(t.localX, t.localY),
                        o = this._mainSeries.priceScale(),
                        r = this._mainSeries.firstValue();
                    if (null === r) return null;
                    const i = (0,
                        l.ensureNotNull)(this.price());
                    return o.coordinateToPrice(e.y, r) - i
                }
                applyPriceDiff(t) {
                    this._inEdit = !0, this._data.price = this._calcPriceByDiff(t)
                }
                onMove(t) {
                    const e = this.calcPriceDiff(t);
                    null !== e && (this.applyPriceDiff(e), t.isTouch && (0, l.ensureDefined)(this._itemCommands.exitTrackingMode)())
                }
                async onFinishMove(t = {}, e = {}, o = !0, r, i = !0) {
                    var s, a, c;
                    o && this._source.setIsBlocked(!0);
                    const d = (0, n.clone)(this._data),
                        u = (0, l.ensureNotNull)(this.price());
                    d.limitPrice = null !== (s = e.limitPrice) && void 0 !== s ? s : d.limitPrice, d.takeProfit = null !== (a = e.takeProfit) && void 0 !== a ? a : d.takeProfit, d.stopLoss = null !== (c = e.stopLoss) && void 0 !== c ? c : d.stopLoss, d.stopPrice ? d.stopPrice = u : d.limitPrice && (d.limitPrice = u), this._addTrailingStopPipsData(d, e.trailingStop), this._trackEventGA(t);
                    const h = await this._onFinishMoveOrder(d, r, i);
                    return this._inEdit = !1, h
                }
                hasContextMenu() {
                    return super.hasContextMenu() || this.isMovingEnabled()
                }
                async onContextMenu(t, e) {
                    this.fireProfitLossChange(), e = (0, C.mergeGaParams)(e, {
                        origin: "Chart Order Context Menu"
                    });
                    const o = this._composeContextMenuActions(e),
                        r = {
                            side: (0, f.sideToText)(this._data.side),
                            qty: this.qtyText(),
                            price: this.priceText(),
                            orderType: (0, f.orderTypeToText)({
                                orderType: this._data.type
                            }),
                            formatPlWV: this._isBracket() ? this.formatPlWV() : void 0
                        },
                        i = await async function(t, e) {
                            const o = [],
                                r = await (0, y.createContextMenuTitle)(e);
                            r && o.push(r);
                            for (const {
                                    actionId: e,
                                    label: r,
                                    onExecute: i
                                } of t) o.push(new c.Action({
                                actionId: e,
                                label: r,
                                onExecute: i
                            }));
                            return o
                        }(o, r),
                        l = this._infoGetters.noOverlapAction(e, (t => this._trackEventGA(t)));
                    l && (i.push(new c.Separator), i.push(l)), this._contextMenu = await (0, y.showContextMenu)(i, t, (() => {
                        this._contextMenu = null
                    }))
                }
                _composeContextMenuActions(t) {
                    const e = [];
                    return this.supportModify() && e.push({
                        actionId: "Trading.EditOrder",
                        label: this._source.isPlaced() ? x : S,
                        onExecute: () => this.onModify(t)
                    }), this.supportClose() && e.push({
                        actionId: "Trading.CancelOrder",
                        label: this._source.isPlaced() ? M : w,
                        onExecute: () => this.onClose(t)
                    }), e
                }
                _calcPriceByDiff(t) {
                    const {
                        minTick: e,
                        variableMinTickData: o
                    } = (0, l.ensureNotNull)(this._symbolDataProvider.symbolData()), r = t + (0, l.ensureNotNull)(this.price()), i = (0, u.getMinTick)({
                        minTick: e,
                        price: r,
                        variableMinTickData: o
                    });
                    return (0, s.fixComputationError)(i * Math.round(r / i))
                }
                _addTrailingStopPipsData(t, e) {
                    const o = this._source.mainItem();
                    if (o) {
                        const {
                            side: r,
                            stopPrice: i,
                            limitPrice: s
                        } = o.data(), {
                            pipSize: a
                        } = (0, l.ensureNotNull)(this._symbolDataProvider.symbolData());
                        if (void 0 !== e) {
                            const o = (0, l.ensureDefined)(t.stopPrice || t.limitPrice);
                            t.trailingStopPips = (0, v.calcPipsByPrice)(e, o, r, a)
                        } else if ((0, b.isBracketOrderRawData)(t) && t.parentId && t.stopType === _.StopType.TrailingStop) {
                            const {
                                bid: e,
                                ask: n
                            } = (0, l.ensureNotNull)(this._symbolDataProvider.lastData());
                            let c;
                            if ((0, P.isPositionLikeItem)(o)) c = 1 === r ? e : n;
                            else {
                                c = 3 === o.data().type ? i : s
                            }
                            t.trailingStopPips = (0, v.calcPipsByPrice)((0, l.ensureDefined)(t.stopPrice || t.limitPrice), (0, l.ensureDefined)(c), r, a)
                        }
                    }
                    return t
                }
                _bracketTypeText(t) {
                    if (!this._data) return "";
                    if (this._isBracket()) {
                        const e = (0, m.getBracketTypeToText)(this._data.type, this._data.stopType, t);
                        if (null !== e) return e
                    }
                    return t ? (0,
                        f.orderTypeToText)({
                        orderType: this._data.type,
                        uppercase: !0,
                        shorten: !0
                    }) : `${(0,f.sideToText)(this._data.side)} ${(0,f.orderTypeToText)({orderType:this._data.type,uppercase:!1})}`
                }
                _potentialProfitLoss() {
                    const t = this._source.baseItem();
                    if (!this._data || !t) return null;
                    const e = this.price(),
                        {
                            ask: o,
                            bid: r
                        } = this._symbolDataProvider.lastData() || {},
                        i = t.tryBasePlOnLast() && 3 === this._data.type && this._data.stopType === _.StopType.TrailingStop;
                    if (!(0, n.isNumber)(e)) return null;
                    const l = i ? this.isBuyDirection() ? o : r : t.price();
                    return (0, n.isNumber)(l) ? (l - e) * this._data.side : null
                }
                _isBracket() {
                    const t = this.data();
                    if (!(0, b.isBracketOrderRawData)(t)) return !1;
                    const e = this._source.mainItem();
                    return 1 !== t.parentType || void 0 !== e && e.data().side !== this._data.side
                }
                _closeQtyCalc() {
                    this._toggleQtyCalc((() => !1), new a.Point(0, 0))
                }
                _toggleQtyCalc(t, e = new a.Point(0, 0), o = {}) {
                    if (!this.canQtyCalcModify()) return;
                    const {
                        onToggleQtyCalcHandler: r,
                        qtyInfoGetter: i
                    } = (0, l.ensureDefined)(this._qtyModifyCallbacks);
                    r(this._isQtyModifyOpened, e, i, (() => this.data().qty), (t => this.modifyQty(t)), (e => this._handleQtyModifyClose(t, e)), this._handleQtyModifyDestroy)
                }
            }
        },
        339514: (t, e, o) => {
            "use strict";
            o.d(e, {
                OrderWithMenuItem: () => s
            });
            var r = o(650151),
                i = o(86441),
                l = o(669129);
            class s extends l.OrderBaseItem {
                constructor(t, e, o, r, i, l, s, a) {
                    super(t, e, o, r, i, l, a), this._isTypeMenuOpened = !1, this._handleTypeMenuClose = (t, e) => {
                        t(e) || this._handleTypeMenuDestroy()
                    }, this._handleTypeMenuDestroy = () => {
                        this._isTypeMenuOpened = !1
                    }, this._typeMenuCallbacks = s
                }
                destroy() {
                    var t;
                    null === (t = this._typeMenuCallbacks) || void 0 === t || t.closeDropdownMenuHandler(), super.destroy()
                }
                isMovingEnabled() {
                    return !0
                }
                toggleType(t, e, o = {}) {
                    this._typeMenuCallbacks && (this._isTypeMenuOpened = !this._isTypeMenuOpened, this._toggleTypeMenu(t, e, o))
                }
                async onClose(t) {}
                async onModify(t) {
                    return !1
                }
                async _onFinishMoveOrder(t, e, o = !0) {
                    return !0
                }
                _toggleTypeMenu(t, e = new i.Point(0, 0), o = {}) {
                    (0, r.ensureDefined)(this._typeMenuCallbacks).onToggleTypeMenuHandler(this._isTypeMenuOpened, e, o, (e => this._handleTypeMenuClose(t, e)), this._handleTypeMenuDestroy)
                }
            }
        },
        506787: (t, e, o) => {
            "use strict";

            function r(t) {
                return "profitState" in t && "onReverse" in t
            }

            function i(t) {
                return function(t) {
                    return "isMovingEnabled" in t && "onMove" in t && "onFinishMove" in t
                }(t) && "bracketType" in t && "isWorking" in t
            }

            function l(t) {
                return "Position" === t.dataType
            }

            function s(t) {
                return "PreOrder" === t.dataType
            }

            function a(t) {
                return "Order" === t.dataType
            }
            o.d(e, {
                isPositionLikeItem: () => r,
                isOrderLikeItem: () => i,
                isPositionItemRawData: () => l,
                isPreOrderItemRawData: () => s,
                isOrderItemRawData: () => a
            })
        },
        209402: (t, e, o) => {
            "use strict";
            o.d(e, {
                isPositionItem: () => n,
                isOrderItem: () => c,
                isPreOrderItem: () => d,
                isLimitPartStopLimitOrderItem: () => u,
                isProjectionBracketItem: () => h
            });
            var r = o(771453),
                i = o(396907),
                l = o(628891),
                s = o(933359),
                a = o(61284);

            function n(t) {
                return t instanceof s.PositionItem
            }

            function c(t) {
                return t instanceof l.OrderItem
            }

            function d(t) {
                return t instanceof a.PreOrderItem
            }

            function u(t) {
                return t instanceof i.LimitPartStopLimitOrderItem
            }

            function h(t) {
                return t instanceof r.ProjectionBracketItem
            }
        },
        396907: (t, e, o) => {
            "use strict";
            o.d(e, {
                LimitPartStopLimitOrderItem: () => a
            });
            var r = o(650151),
                i = o(758337),
                l = o(703819),
                s = o(628891);
            class a extends s.OrderItem {
                isWorking() {
                    return !1
                }
                async onFinishMove(t, e = {}, o = !0, l) {
                    this._source.setIsBlocked(o);
                    const s = (0, i.clone)(this.data()),
                        a = (0, r.ensureNotNull)(s.price);
                    s.limitPrice = a, s.takeProfit = e.takeProfit || s.takeProfit, s.stopLoss = e.stopLoss || s.stopLoss, await this._addTrailingStopPipsData(s), void 0 === l && (l = 1), this._trackEventGA(t);
                    const n = await (0, r.ensureDefined)(this._data.callbacks.moveOrder)(s.id, s, l);
                    return this._inEdit = !1, this._source.setIsBlocked(!1), this._source.syncData(), n
                }
                profitLossText(t) {
                    return this._source.isPlaced() ? this._bracketTypeText(t) : (0, l.orderTypeToText)({
                        orderType: this.data().type,
                        uppercase: t,
                        shorten: t
                    })
                }
                supportClose() {
                    return !1
                }
                _calcId() {
                    return this.data().type
                }
            }
        },
        628891: (t, e, o) => {
            "use strict";
            o.d(e, {
                OrderItem: () => p
            });
            var r = o(650151),
                i = o(758337),
                l = o(495046),
                s = o(136916),
                a = o(249110),
                n = o(125226),
                c = o(669129),
                d = o(313178);
            const u = l.enabled("chart_hide_close_order_button"),
                h = (0, n.isFeatureEnabled)("allow_trailing_stop_profit_loss");
            class p extends c.OrderBaseItem {
                style() {
                    return this._infoGetters.style(this)
                }
                isMovingEnabled() {
                    return this._data.supportMove
                }
                supportClose() {
                    return !u && Boolean(this._data.callbacks.cancelOrder)
                }
                supportModify() {
                    return Boolean(this._data.callbacks.modifyOrder)
                }
                isWorking() {
                    return 6 === this._data.status
                }
                qtyText() {
                    return super._quantityText(this._data.considerFilledQty ? this._data.qty - (this._data.filledQty || 0) : this._data.qty)
                }
                profitLossText(t) {
                    var e;
                    return this._data && this._isBracket() && (null === (e = this._source.isBracketsPLVisible()) || void 0 === e ? void 0 : e.value()) && (this.bracketType() !== s.BracketType.TrailingStop || h) ? super.profitLossText(t) : this._bracketTypeText(t)
                }
                async onModify(t = {}, e, o) {
                    this._source.setIsBlocked(!0);
                    const l = (0, i.clone)(this._data);
                    await this._addTrailingStopPipsData(l), this._trackEventGA((0, a.mergeGaParams)(t, {
                        event: "Edit Order"
                    }));
                    const s = await (0, r.ensureDefined)(this._data.callbacks.modifyOrder)(l.id, l, e, o);
                    return this._source.setIsBlocked(!1), this._source.syncData(), s
                }
                async onClose(t = {}) {
                    this._source.isBlocked() || (this._source.setIsBlocked(!0), this._trackEventGA((0, a.mergeGaParams)(t, {
                        event: "Cancel Order"
                    })), await (0, r.ensureDefined)(this._data.callbacks.cancelOrder)(this._data.id), this._source.setIsBlocked(!1), this._source.syncData())
                }
                _onFinishMoveOrder(t, e, o = !0) {
                    return this._data.callbacks.moveOrder || this._data.supportModifyOrderPrice ? (0, r.ensureDefined)(this._data.callbacks.moveOrder)(t.id, t, e) : (0, r.ensureDefined)(this._data.callbacks.modifyOrder)(t.id, t, e, o)
                }
                _calcId() {
                    return void 0 !== this._data.parentId ? (0, r.ensureNotNull)((0, d.getBracketType)(this._data)) : this._data.id
                }
            }
        },
        296238: (t, e, o) => {
            "use strict";
            o.d(e, {
                buyActiveColor: () => s,
                sellActiveColor: () => a,
                takeProfitActiveColor: () => n,
                stopLossActiveColor: () => c,
                buyPointShadowColor: () => d,
                sellPointShadowColor: () => u,
                overlayColor: () => _,
                darkTheme: () => C
            });
            var r = o(314967),
                i = o(114123),
                l = o(528474);
            const s = (0, i.generateColor)(r.colorsPalette["color-tv-blue-500"], 85),
                a = ((0,
                    i.generateColor)(r.colorsPalette["color-tv-blue-500"], 80), (0, i.generateColor)(r.colorsPalette["color-ripe-red-500"], 85)),
                n = ((0, i.generateColor)(r.colorsPalette["color-ripe-red-500"], 80), (0, i.generateColor)(r.colorsPalette["color-minty-green-500"], 85)),
                c = ((0, i.generateColor)(r.colorsPalette["color-minty-green-500"], 80), (0, i.generateColor)(r.colorsPalette["color-tan-orange-500"], 85)),
                d = ((0, i.generateColor)(r.colorsPalette["color-tan-orange-500"], 80), (0, i.generateColor)(r.colorsPalette["color-tv-blue-500"], 70)),
                u = (0, i.generateColor)(r.colorsPalette["color-ripe-red-500"], 70),
                h = (0, i.generateColor)(r.colorsPalette["color-minty-green-500"], 70),
                p = (0, i.generateColor)(r.colorsPalette["color-tan-orange-500"], 70),
                _ = (0, i.generateColor)(r.colorsPalette["color-cold-gray-900"], 50),
                f = {
                    pointShadowColor: d,
                    labelTickColor: r.colorsPalette["color-tv-blue-500"],
                    lineColor: r.colorsPalette["color-tv-blue-500"],
                    borderBackgroundColor: r.colorsPalette["color-cold-gray-900"],
                    borderColor: r.colorsPalette["color-tv-blue-500"],
                    pointBackgroundColor: r.colorsPalette["color-cold-gray-900"],
                    disabledLineColor: r.colorsPalette["color-tv-blue-a700"],
                    positivePlColor: r.colorsPalette["color-minty-green-500"],
                    negativePlColor: r.colorsPalette["color-ripe-red-500"],
                    qty: {
                        backgroundColor: r.colorsPalette["color-cold-gray-900"],
                        textColor: r.colorsPalette["color-tv-blue-500"],
                        dividerColor: r.colorsPalette["color-tv-blue-a800"],
                        activeColor: s
                    },
                    text: {
                        backgroundColor: r.colorsPalette["color-cold-gray-900"],
                        textColor: r.colorsPalette["color-tv-blue-500"],
                        dividerColor: r.colorsPalette["color-tv-blue-a800"],
                        buttonTextColor: r.colorsPalette["color-tv-blue-500"]
                    },
                    close: {
                        backgroundColor: r.colorsPalette["color-cold-gray-900"],
                        iconColor: r.colorsPalette["color-tv-blue-500"],
                        activeColor: s
                    },
                    confirm: {
                        disableBackgroundColor: r.colorsPalette["color-cold-gray-750"],
                        backgroundColor: r.colorsPalette["color-tv-blue-500"],
                        borderColor: r.colorsPalette["color-tv-blue-500"],
                        textColor: r.colorsPalette["color-white"],
                        disableTextColor: r.colorsPalette["color-cold-gray-600"],
                        activeColor: r.colorsPalette["color-tv-blue-600"]
                    }
                },
                v = {
                    pointShadowColor: u,
                    labelTickColor: r.colorsPalette["color-ripe-red-500"],
                    lineColor: r.colorsPalette["color-ripe-red-500"],
                    borderBackgroundColor: r.colorsPalette["color-cold-gray-900"],
                    borderColor: r.colorsPalette["color-ripe-red-500"],
                    pointBackgroundColor: r.colorsPalette["color-cold-gray-900"],
                    disabledLineColor: r.colorsPalette["color-ripe-red-a800"],
                    positivePlColor: r.colorsPalette["color-minty-green-500"],
                    negativePlColor: r.colorsPalette["color-ripe-red-500"],
                    qty: {
                        backgroundColor: r.colorsPalette["color-cold-gray-900"],
                        textColor: r.colorsPalette["color-ripe-red-500"],
                        dividerColor: r.colorsPalette["color-ripe-red-a800"],
                        activeColor: a
                    },
                    text: {
                        backgroundColor: r.colorsPalette["color-cold-gray-900"],
                        textColor: r.colorsPalette["color-ripe-red-500"],
                        dividerColor: r.colorsPalette["color-ripe-red-a800"],
                        buttonTextColor: r.colorsPalette["color-ripe-red-500"]
                    },
                    close: {
                        backgroundColor: r.colorsPalette["color-cold-gray-900"],
                        iconColor: r.colorsPalette["color-ripe-red-500"],
                        activeColor: a
                    },
                    confirm: {
                        disableBackgroundColor: r.colorsPalette["color-cold-gray-750"],
                        backgroundColor: r.colorsPalette["color-ripe-red-500"],
                        borderColor: r.colorsPalette["color-ripe-red-500"],
                        textColor: r.colorsPalette["color-white"],
                        disableTextColor: r.colorsPalette["color-cold-gray-600"],
                        activeColor: r.colorsPalette["color-ripe-red-600"]
                    }
                },
                y = {
                    pointShadowColor: h,
                    labelTickColor: r.colorsPalette["color-minty-green-500"],
                    lineColor: r.colorsPalette["color-minty-green-500"],
                    borderBackgroundColor: r.colorsPalette["color-cold-gray-900"],
                    borderColor: r.colorsPalette["color-minty-green-500"],
                    pointBackgroundColor: r.colorsPalette["color-cold-gray-900"],
                    positivePlColor: r.colorsPalette["color-minty-green-500"],
                    negativePlColor: r.colorsPalette["color-ripe-red-500"],
                    qty: {
                        backgroundColor: r.colorsPalette["color-cold-gray-900"],
                        textColor: r.colorsPalette["color-minty-green-500"],
                        dividerColor: "#0D3D41",
                        activeColor: n
                    },
                    text: {
                        backgroundColor: r.colorsPalette["color-cold-gray-900"],
                        textColor: r.colorsPalette["color-minty-green-500"],
                        dividerColor: "#0D3D41",
                        buttonTextColor: r.colorsPalette["color-minty-green-500"]
                    },
                    close: {
                        backgroundColor: r.colorsPalette["color-cold-gray-900"],
                        iconColor: r.colorsPalette["color-minty-green-500"],
                        activeColor: n
                    }
                },
                b = {
                    pointShadowColor: p,
                    labelTickColor: r.colorsPalette["color-tan-orange-500"],
                    lineColor: r.colorsPalette["color-tan-orange-500"],
                    borderBackgroundColor: r.colorsPalette["color-cold-gray-900"],
                    borderColor: r.colorsPalette["color-tan-orange-500"],
                    pointBackgroundColor: r.colorsPalette["color-cold-gray-900"],
                    positivePlColor: r.colorsPalette["color-minty-green-500"],
                    negativePlColor: r.colorsPalette["color-ripe-red-500"],
                    qty: {
                        backgroundColor: r.colorsPalette["color-cold-gray-900"],
                        textColor: r.colorsPalette["color-tan-orange-500"],
                        dividerColor: "#453826",
                        activeColor: c
                    },
                    text: {
                        backgroundColor: r.colorsPalette["color-cold-gray-900"],
                        textColor: r.colorsPalette["color-tan-orange-500"],
                        dividerColor: "#453826",
                        buttonTextColor: r.colorsPalette["color-tan-orange-500"]
                    },
                    close: {
                        backgroundColor: r.colorsPalette["color-cold-gray-900"],
                        iconColor: r.colorsPalette["color-tan-orange-500"],
                        activeColor: c
                    }
                },
                C = {
                    buy: {
                        normal: f,
                        disabled: (0, l.generateBlendColors)(f, _)
                    },
                    sell: {
                        normal: v,
                        disabled: (0, l.generateBlendColors)(v, _)
                    },
                    takeProfit: {
                        normal: y,
                        disabled: (0, l.generateBlendColors)(y, _)
                    },
                    stopLoss: {
                        normal: b,
                        disabled: (0, l.generateBlendColors)(b, _)
                    }
                }
        },
        979948: (t, e, o) => {
            "use strict";
            o.d(e, {
                buyPointShadowColor: () => a,
                sellPointShadowColor: () => n,
                overlayColor: () => u,
                lightTheme: () => v
            });
            var r = o(314967),
                i = o(114123),
                l = o(528474),
                s = o(296238);
            const a = (0, i.generateColor)(r.colorsPalette["color-tv-blue-500"], 80),
                n = (0, i.generateColor)(r.colorsPalette["color-ripe-red-500"], 80),
                c = (0, i.generateColor)(r.colorsPalette["color-minty-green-500"], 80),
                d = (0, i.generateColor)(r.colorsPalette["color-tan-orange-500"], 80),
                u = (0, i.generateColor)(r.colorsPalette["color-white"], 50),
                h = {
                    pointShadowColor: a,
                    labelTickColor: r.colorsPalette["color-tv-blue-500"],
                    lineColor: r.colorsPalette["color-tv-blue-500"],
                    borderBackgroundColor: r.colorsPalette["color-white"],
                    borderColor: r.colorsPalette["color-tv-blue-500"],
                    pointBackgroundColor: r.colorsPalette["color-white"],
                    disabledLineColor: r.colorsPalette["color-tv-blue-100"],
                    positivePlColor: r.colorsPalette["color-minty-green-500"],
                    negativePlColor: r.colorsPalette["color-ripe-red-500"],
                    qty: {
                        backgroundColor: r.colorsPalette["color-white"],
                        textColor: r.colorsPalette["color-tv-blue-500"],
                        dividerColor: r.colorsPalette["color-tv-blue-50"],
                        activeColor: s.buyActiveColor
                    },
                    text: {
                        backgroundColor: r.colorsPalette["color-white"],
                        textColor: r.colorsPalette["color-tv-blue-500"],
                        dividerColor: r.colorsPalette["color-tv-blue-50"],
                        buttonTextColor: r.colorsPalette["color-tv-blue-500"]
                    },
                    close: {
                        backgroundColor: r.colorsPalette["color-white"],
                        iconColor: r.colorsPalette["color-tv-blue-500"],
                        activeColor: s.buyActiveColor
                    },
                    confirm: {
                        disableBackgroundColor: r.colorsPalette["color-cold-gray-150"],
                        backgroundColor: r.colorsPalette["color-tv-blue-500"],
                        borderColor: r.colorsPalette["color-tv-blue-500"],
                        textColor: r.colorsPalette["color-white"],
                        disableTextColor: r.colorsPalette["color-cold-gray-300"],
                        activeColor: r.colorsPalette["color-tv-blue-600"]
                    }
                },
                p = {
                    pointShadowColor: n,
                    labelTickColor: r.colorsPalette["color-ripe-red-500"],
                    lineColor: r.colorsPalette["color-ripe-red-500"],
                    borderBackgroundColor: r.colorsPalette["color-white"],
                    borderColor: r.colorsPalette["color-ripe-red-500"],
                    pointBackgroundColor: r.colorsPalette["color-white"],
                    disabledLineColor: r.colorsPalette["color-ripe-red-100"],
                    positivePlColor: r.colorsPalette["color-minty-green-500"],
                    negativePlColor: r.colorsPalette["color-ripe-red-500"],
                    qty: {
                        backgroundColor: r.colorsPalette["color-white"],
                        textColor: r.colorsPalette["color-ripe-red-500"],
                        dividerColor: r.colorsPalette["color-ripe-red-50"],
                        activeColor: s.sellActiveColor
                    },
                    text: {
                        backgroundColor: r.colorsPalette["color-white"],
                        textColor: r.colorsPalette["color-ripe-red-500"],
                        dividerColor: r.colorsPalette["color-ripe-red-50"],
                        buttonTextColor: r.colorsPalette["color-ripe-red-500"]
                    },
                    close: {
                        backgroundColor: r.colorsPalette["color-white"],
                        iconColor: r.colorsPalette["color-ripe-red-500"],
                        activeColor: s.sellActiveColor
                    },
                    confirm: {
                        disableBackgroundColor: r.colorsPalette["color-cold-gray-150"],
                        backgroundColor: r.colorsPalette["color-ripe-red-500"],
                        borderColor: r.colorsPalette["color-ripe-red-500"],
                        textColor: r.colorsPalette["color-white"],
                        disableTextColor: r.colorsPalette["color-cold-gray-300"],
                        activeColor: r.colorsPalette["color-ripe-red-600"]
                    }
                },
                _ = {
                    pointShadowColor: c,
                    labelTickColor: r.colorsPalette["color-minty-green-500"],
                    lineColor: r.colorsPalette["color-minty-green-500"],
                    borderBackgroundColor: r.colorsPalette["color-white"],
                    borderColor: r.colorsPalette["color-minty-green-500"],
                    pointBackgroundColor: r.colorsPalette["color-white"],
                    positivePlColor: r.colorsPalette["color-minty-green-500"],
                    negativePlColor: r.colorsPalette["color-ripe-red-500"],
                    qty: {
                        backgroundColor: r.colorsPalette["color-white"],
                        textColor: r.colorsPalette["color-minty-green-500"],
                        dividerColor: r.colorsPalette["color-minty-green-50"],
                        activeColor: s.takeProfitActiveColor
                    },
                    text: {
                        backgroundColor: r.colorsPalette["color-white"],
                        textColor: r.colorsPalette["color-minty-green-500"],
                        dividerColor: r.colorsPalette["color-minty-green-50"],
                        buttonTextColor: r.colorsPalette["color-minty-green-500"]
                    },
                    close: {
                        backgroundColor: r.colorsPalette["color-white"],
                        iconColor: r.colorsPalette["color-minty-green-500"],
                        activeColor: s.takeProfitActiveColor
                    }
                },
                f = {
                    pointShadowColor: d,
                    labelTickColor: r.colorsPalette["color-tan-orange-500"],
                    lineColor: r.colorsPalette["color-tan-orange-500"],
                    borderBackgroundColor: r.colorsPalette["color-white"],
                    borderColor: r.colorsPalette["color-tan-orange-500"],
                    pointBackgroundColor: r.colorsPalette["color-white"],
                    positivePlColor: r.colorsPalette["color-minty-green-500"],
                    negativePlColor: r.colorsPalette["color-ripe-red-500"],
                    qty: {
                        backgroundColor: r.colorsPalette["color-white"],
                        textColor: r.colorsPalette["color-tan-orange-500"],
                        dividerColor: r.colorsPalette["color-tan-orange-50"],
                        activeColor: s.stopLossActiveColor
                    },
                    text: {
                        backgroundColor: r.colorsPalette["color-white"],
                        textColor: r.colorsPalette["color-tan-orange-500"],
                        dividerColor: r.colorsPalette["color-tan-orange-50"],
                        buttonTextColor: r.colorsPalette["color-tan-orange-500"]
                    },
                    close: {
                        backgroundColor: r.colorsPalette["color-white"],
                        iconColor: r.colorsPalette["color-tan-orange-500"],
                        activeColor: s.stopLossActiveColor
                    }
                },
                v = {
                    buy: {
                        normal: h,
                        disabled: (0, l.generateBlendColors)(h, u)
                    },
                    sell: {
                        normal: p,
                        disabled: (0, l.generateBlendColors)(p, u)
                    },
                    takeProfit: {
                        normal: _,
                        disabled: (0, l.generateBlendColors)(_, u)
                    },
                    stopLoss: {
                        normal: f,
                        disabled: (0, l.generateBlendColors)(f, u)
                    }
                }
        },
        646228: (t, e, o) => {
            "use strict";
            o.d(e, {
                getDefaultStyleForOrderItem: () => a,
                getStyleForOppositeDirection: () => n
            });
            var r = o(96841),
                i = o(136916),
                l = o(979948),
                s = o(296238);

            function a(t, e, o, a = {}) {
                const n = o() ? s.darkTheme : l.lightTheme;
                let c;
                const d = t.bracketType();
                c = null !== d ? d === i.BracketType.TakeProfit ? n.takeProfit : n.stopLoss : t.isBuyDirection() ? n.buy : n.sell;
                const u = e.disabled() ? c.disabled : c.normal,
                    h = e.isPlaced() ? t.lineStyle() : r.LineStyle.Dashed;
                return { ...u,
                    lineStyle: h,
                    borderStyle: h,
                    labelBorderVisible: !0,
                    ...a
                }
            }

            function n(t, e, o) {
                const i = o() ? s.darkTheme : l.lightTheme,
                    a = t.isBuyDirection() ? i.sell : i.buy;
                return { ...e.disabled() ? a.disabled : a.normal,
                    lineStyle: t.isWorking() ? e.lineStyle() : r.LineStyle.Dotted,
                    borderStyle: t.isWorking() ? r.LineStyle.Solid : r.LineStyle.Dotted,
                    labelBorderVisible: !0
                }
            }
        },
        772602: (t, e, o) => {
            "use strict";
            o.d(e, {
                contextMenuItems: () => d
            });
            var r = o(777754),
                i = o(310399),
                l = o(868151),
                s = o(524774);
            const a = (0, l.appendEllipsis)(r.t(null, void 0, o(888310))),
                n = r.t(null, void 0, o(424356)),
                c = r.t(null, void 0, o(920848));
            async function d(t, e) {
                const o = [],
                    r = await (0, s.createContextMenuTitle)(e);
                return r && o.push(r), void 0 !== t.modifyPosition && o.push(new i.Action({
                    actionId: "Trading.ModifyPosition",
                    label: a,
                    onExecute: t.modifyPosition
                })), void 0 !== t.closePosition && o.push(new i.Action({
                    actionId: "Trading.ClosePosition",
                    label: n,
                    onExecute: t.closePosition
                })), void 0 !== t.reversePosition && o.push(new i.Action({
                    actionId: "Trading.ReversePosition",
                    label: c,
                    onExecute: t.reversePosition
                })), o
            }
        },
        726267: (t, e, o) => {
            "use strict";
            o.d(e, {
                PositionItemRenderer: () => d
            });
            var r = o(650151),
                i = o(858063),
                l = o(854905),
                s = o(335144),
                a = o(914679),
                n = o(715073),
                c = o(769459);
            class d extends c.TPSLItemRenderer {
                constructor() {
                    super(...arguments), this._bodyBorderRadius = 4
                }
                hitTest(t, e) {
                    const o = e.pixelRatio,
                        s = this.rectWithOffsets(e),
                        a = Math.round(t.x * o),
                        n = Math.round(t.y * o),
                        c = a >= s.left,
                        d = a <= s.right,
                        u = c && d,
                        h = n >= s.top && n <= s.bottom,
                        p = Math.round(s.top / o);
                    if (!h || !u) return null;
                    const _ = {
                        cursorType: l.PaneCursorType.Default,
                        hideCrosshairLinesOnHover: !0,
                        activeItem: {
                            id: this._data.id,
                            part: 8
                        }
                    };
                    if (this._data.disabled) return new i.HitTestResult(i.HitTestResult.CUSTOM, _);
                    const f = this._hasReverseButton() && (0, r.ensureDefined)(this._data.reverse);
                    if (f && 1 === f.visibility) {
                        const t = s.reverse.left + s.reverse.width;
                        if (a >= s.reverse.left && a < t) {
                            const t = Math.round(s.reverse.left / o),
                                e = Math.round(s.reverse.width / o);
                            return new i.HitTestResult(i.HitTestResult.CUSTOM, {
                                activeItem: {
                                    id: this._data.id,
                                    part: 4
                                },
                                cursorType: l.PaneCursorType.Default,
                                hideCrosshairLinesOnHover: !0,
                                contextMenuHandler: this._data.callbacks.onContextMenu,
                                touchContextMenuHandler: this._data.callbacks.onContextMenu,
                                clickHandler: this._data.callbacks.onReverse,
                                tapHandler: this._data.callbacks.onReverse,
                                tooltip: {
                                    text: f.title,
                                    rect: {
                                        x: t,
                                        y: p,
                                        w: e,
                                        h: this._height
                                    }
                                }
                            })
                        }
                        const r = this._calcReverseRect(e.pixelRatio).offset;
                        if (t - s.body.left < 0 ? a >= t && a < s.tp.left : a >= s.reverse.left - r && a < s.reverse.left) return new i.HitTestResult(i.HitTestResult.CUSTOM, _)
                    }
                    return super.hitTest(t, e)
                }
                draw(t, e) {
                    if (super.draw(t, e), !this._isReverseVisible() || !this._isDataVisibleInViewport(e) || !this._data.visible) return;
                    const o = this.rectWithOffsets(e);
                    this._drawReverseButton(t, e.pixelRatio, o.reverse.left, o.top, o.reverse.width, o.bottom - o.top, o.borderWidth, o.borderRadius)
                }
                rect(t) {
                    return super.rect(t)
                }
                rectWithOffsets(t) {
                    return super.rectWithOffsets(t)
                }
                _calculateCacheRectWithOffsets(t) {
                    const e = super._calculateCacheRectWithOffsets(t);
                    return { ...e,
                        reverse: { ...e.reverse,
                            left: this._calcCoordinateWithOffset(e.reverse.left, e.reverse.left + e.reverse.width).left
                        }
                    }
                }
                _calculateCacheRect(t) {
                    var e;
                    const o = super._calculateCacheRect(t);
                    if (!(null === (e = this._data) || void 0 === e ? void 0 : e.callbacks.onReverse) || !this._hasReverseButton()) return { ...o,
                        reverse: {
                            width: 0,
                            left: 0
                        }
                    };
                    const r = this._calcReverseRect(t.pixelRatio),
                        i = this._data.bodyAlignment === s.TradedGroupHorizontalAlignment.Left,
                        l = i ? o.right + r.offset : o.left - r.width - r.offset,
                        a = i ? o.left : l,
                        n = i ? l + r.width : o.right;
                    return { ...o,
                        left: a,
                        right: n,
                        reverse: {
                            width: r.width,
                            left: l
                        }
                    }
                }
                _calcAllWidth(t, e, o, r, i, l) {
                    var s;
                    const a = super._calcAllWidth(t, e, o, r, i, l);
                    if (!(null === (s = this._data) || void 0 === s ? void 0 : s.callbacks.onReverse) || !this._hasReverseButton()) return a;
                    const n = this._calcReverseRect(t);
                    return a + n.width + n.offset
                }
                _drawLine(t, e) {
                    var o;
                    if (!(null === (o = this._data) || void 0 === o ? void 0 : o.callbacks.onReverse)) return void super._drawLine(t, e);
                    const r = e.pixelRatio,
                        i = this.rectWithOffsets(e),
                        l = Math.round(e.physicalWidth),
                        s = i.reverse.left + i.reverse.width;
                    if (t.save(), t.strokeStyle = this._data.line.color, t.lineWidth = Math.max(1, Math.floor(this._data.line.thickness * r)), (0, a.setLineStyle)(t, this._data.line.style), (0, a.drawHorizontalLine)(t, i.yMid, i.body.right, l), this._isReverseVisible() && (0,
                            a.drawHorizontalLine)(t, i.yMid, s, i.body.left), this._data.line.extend) {
                        const e = this._isReverseVisible() ? i.reverse.left : i.body.left;
                        (0, a.drawHorizontalLine)(t, i.yMid, 0, e)
                    }
                    t.restore()
                }
                _calcReverseRect(t) {
                    return {
                        width: Math.round(29 * t),
                        offset: Math.round(10 * t)
                    }
                }
                _drawReverseButton(t, e, o, i, l, s, c, d) {
                    const u = (0, r.ensureDefined)(this._data.reverse),
                        h = u.active;
                    t.save(), (0, a.drawRoundRectWithInnerBorder)(t, o, i, l, s, u.backgroundColor, d, c, this._data.borderColor), h.visible && (0, a.drawRoundRectWithInnerBorder)(t, o, i, l, s, h.backgroundColor, d, c, "transparent");
                    const p = Math.round(3 * e),
                        _ = Math.round(3 * e),
                        f = Math.round(9 * e),
                        v = Math.round(o + (l - p) / 2),
                        y = Math.round(v + p),
                        b = i + c + Math.round((s - f) / 2 - c),
                        C = b + f,
                        m = u.iconColor;
                    t.lineWidth = c, (0, n.drawHalfArrow)(t, v, b, m, !1, f, _), (0, n.drawHalfArrow)(t, y, C, m, !0, f, _), t.restore()
                }
                _isReverseVisible() {
                    return this._hasReverseButton() && 1 === (0, r.ensureDefined)(this._data.reverse).visibility
                }
                _hasReverseButton() {
                    return Boolean(this._data.callbacks.onReverse && this._data.reverse)
                }
            }
        },
        933359: (t, e, o) => {
            "use strict";
            o.d(e, {
                PositionItem: () => b
            });
            var r = o(650151),
                i = o(335144),
                l = o(310399),
                s = o(495046),
                a = o(758337),
                n = o(72822),
                c = o(272001),
                d = o(703819),
                u = o(524774),
                h = o(791402),
                p = o(249110),
                _ = o(321491),
                f = o(772602);
            const v = (0, c.getLogger)("Trading.Positions"),
                y = s.enabled("chart_hide_close_position_button");
            class b extends _.BaseItem {
                constructor(t, e, o, r, i, l) {
                    super(t, e, o, r, "Chart Position", i, l), this._source.positionDisplayMode().subscribe(this, this.fireProfitLossChange)
                }
                destroy() {
                    this._source.positionDisplayMode().unsubscribe(this, this.fireProfitLossChange), super.destroy()
                }
                currency() {
                    var t;
                    return null !== (t = this._symbolDataProvider.positionCurrency()) && void 0 !== t ? t : ""
                }
                profitLossTextColor() {
                    if (!this._data) return "";
                    const t = this._infoGetters.style(this);
                    switch (this._data.profitState) {
                        case "negative":
                            return t.negativePlColor;
                        case "positive":
                            return t.positivePlColor;
                        default:
                            return t.text.textColor
                    }
                }
                id() {
                    return this._data.id
                }
                setData(t) {
                    var e;
                    const o = null === (e = this.data()) || void 0 === e ? void 0 : e.pl;
                    super.setData(t), this.data().pl !== o && this.fireProfitLossChange()
                }
                qtyText() {
                    return super._quantityText(this._data.qtyBySide)
                }
                qty() {
                    return this._data.qtyBySide
                }
                profitState() {
                    return this._data.profitState
                }
                supportOnlyPairBrackets() {
                    return this._data.supportOnlyPairBrackets
                }
                supportReverse() {
                    return this._data.supportReverse
                }
                async onReverse(t = {}) {
                    t = (0, p.mergeGaParams)(t, {
                        event: "Reverse Position"
                    }), await this._doActionWithBlock("reversePosition", !0, t)
                }
                supportClose() {
                    return !y && this._data.supportClose
                }
                async onClose(t = {}) {
                    t = (0, p.mergeGaParams)(t, {
                        event: "Close Position"
                    }), await this._doActionWithBlock("closePosition", !0, t)
                }
                supportModify() {
                    return this._data.supportBrackets
                }
                async onModify(t = {}) {
                    return t = (0, p.mergeGaParams)(t, {
                        event: "Edit Position"
                    }), this._doActionWithBlock("modifyPosition", !0, t, void 0, void 0, !1)
                }
                useMinTickFormatter() {
                    return !1
                }
                async onModifyWithBracket(t = {}, e = {}, o = !0, i, l = !0) {
                    var s, a;
                    const n = this._symbolDataProvider.lastData(),
                        c = null !== (s = null == n ? void 0 : n.bid) && void 0 !== s ? s : null,
                        d = null !== (a = null == n ? void 0 : n.ask) && void 0 !== a ? a : null;
                    if (void 0 !== e.trailingStop && c && d) {
                        const t = 1 === this._data.side ? c : d,
                            {
                                pipSize: o
                            } = (0, r.ensureNotNull)(this._symbolDataProvider.symbolData());
                        e.trailingStopPips = (0, h.calcPipsByPrice)(e.trailingStop, t, this._data.side, o), e.trailingStop = void 0
                    }
                    return this._doActionWithBlock("modifyPosition", o, t, e, i, l)
                }
                hasContextMenu() {
                    return super.hasContextMenu() || this.supportReverse()
                }
                moneyText(t, e) {
                    return `${(0,_.plSign)(t,e)}${Math.abs(t).toFixed(2)} ${this.currency()}`
                }
                async onContextMenu(t, e) {
                    this.fireProfitLossChange();
                    const o = {};
                    e = (0, p.mergeGaParams)(e, {
                        origin: "Chart Position Context Menu"
                    }), this.supportClose() && (o.closePosition = this.onClose.bind(this, e)), this.supportReverse() && (o.reversePosition = this.onReverse.bind(this, e)), this.supportModify() && (o.modifyPosition = this.onModify.bind(this, e));
                    const r = {
                            side: (0, d.sideToText)(this._data.side),
                            qty: this.qtyText(),
                            price: this.priceText(),
                            formatPlWV: this.formatPlWV(),
                            plColorWV: this.plColorWV()
                        },
                        i = await (0, f.contextMenuItems)(o, r),
                        s = this._infoGetters.noOverlapAction(e, (t => this._trackEventGA(t)));
                    s && (i.push(new l.Separator), i.push(s)), this._contextMenu = await (0, u.showContextMenu)(i, t, (() => {
                        this._contextMenu = null
                    }))
                }
                tryBasePlOnLast() {
                    return !0
                }
                _potentialProfitLoss() {
                    var t;
                    if (!this._source.isPositionPLVisible().value() || !this._data) return null;
                    const {
                        pl: e,
                        side: o,
                        price: r
                    } = this._data;
                    if (null === e) return null;
                    if (this._infoGetters.displayMode.value() === i.PlDisplay.Money) return e;
                    const {
                        trade: l,
                        ask: s,
                        bid: n
                    } = this._symbolDataProvider.lastData() || {}, c = null !== (t = this._data.plBasedOnLast ? l : this.isBuyDirection() ? n : s) && void 0 !== t ? t : r;
                    return (0, a.isNumber)(c) ? (c - r) * o : null
                }
                async _doActionWithBlock(t, e, o = {}, i = {}, l, s) {
                    if (void 0 === this._data.callbacks[t]) return !1;
                    e && this._source.setIsBlocked(!0), this._trackEventGA(o);
                    let a = !1;
                    try {
                        a = "modifyPosition" === t ? await (0, r.ensureDefined)(this._data.callbacks.modifyPosition)(this._data.id, i, l, s) : await (0, r.ensureDefined)(this._data.callbacks[t])(this._data.id)
                    } catch (e) {
                        v.logWarn(`Try to ${t}, but got error: ${(0,n.errorToString)(e)}`)
                    } finally {
                        e && (this._source.setIsBlocked(!1), this._source.syncData())
                    }
                    return a
                }
            }
        },
        423029: (t, e, o) => {
            "use strict";
            o.d(e, {
                reverseTitle: () => c,
                closeTitle: () => d,
                PositionPaneViewItem: () => u
            });
            var r = o(777754),
                i = o(868151),
                l = o(665704),
                s = o(785409),
                a = o(123911);
            const n = (0, i.appendEllipsis)(r.t(null, void 0, o(911810))),
                c = r.t(null, void 0, o(419780)),
                d = r.t(null, void 0, o(437431));
            class u extends l.BasePaneViewItem {
                rendererData() {
                    const t = (0, a.getDefaultStyleForPositionItem)(this._item.isBuyDirection(), this._source.isBlocked(), (() => this._chartModel.isDark()), this._item.lineStyle());
                    let e;
                    const o = this._renderDataForClose(t.close, t.close.activeColor);
                    return void 0 !== o && (e = { ...o,
                        title: d
                    }), {
                        type: s.ItemsRendererType.Position,
                        ...this._renderDataGeneral(t),
                        ...this._renderDataForTPSLButtons(this._item),
                        callbacks: this._callbacks(this._projectionBracketsForItem(this._item)),
                        line: this._renderDataForLine(t),
                        qty: { ...this._renderDataForQty(t.qty, t.qty.activeColor),
                            title: n
                        },
                        text: { ...this._renderDataForText(t.text, t.qty.activeColor),
                            title: "",
                            textColor: this._item.profitLossTextColor(),
                            active: {
                                visible: !1,
                                backgroundColor: t.qty.activeColor
                            }
                        },
                        point: this._renderDataForPoint(),
                        close: e,
                        reverse: this._renderDataForReverse(t.reverse)
                    }
                }
                _callbacks(t = []) {
                    const e = super._callbacks(t),
                        o = {
                            label: `[${this._modeGaLabel()}]`
                        };
                    return this._item.supportClose() && this._isCloseVisible() && (e.onClose = () => this._item.onClose(o)), this._shouldReverseShown() && (e.onReverse = () => this._item.onReverse(o)), this._item.supportModify() && (e.onModify = () => this._item.onModify(o)), e
                }
                _renderDataForReverse(t) {
                    if (!this._shouldReverseShown()) return;
                    const e = this._isHoveredItemWithButtons(this._item) || this._source.isSelected();
                    return {
                        title: c,
                        visibility: e ? 1 : 0,
                        backgroundColor: t.backgroundColor,
                        iconColor: t.iconColor,
                        active: {
                            visible: this._isHoveredItemPart(this._item, 4),
                            backgroundColor: t.activeColor
                        }
                    }
                }
                _shouldReverseShown() {
                    return this._item.supportReverse() && this._source.isReverseVisible() && this._isReverseVisible()
                }
                _isReverseVisible() {
                    return 2 === this._displayMode && !this._isNoOverlapMode
                }
            }
        },
        123911: (t, e, o) => {
            "use strict";
            o.d(e, {
                getDefaultStyleForPositionItem: () => _
            });
            var r = o(96841),
                i = o(314967),
                l = o(296238),
                s = o(528474);
            const a = {
                    pointShadowColor: l.buyPointShadowColor,
                    lineColor: i.colorsPalette["color-tv-blue-500"],
                    borderBackgroundColor: i.colorsPalette["color-cold-gray-900"],
                    borderColor: i.colorsPalette["color-tv-blue-500"],
                    pointBackgroundColor: i.colorsPalette["color-cold-gray-900"],
                    disabledLineColor: i.colorsPalette["color-tv-blue-a700"],
                    positivePlColor: i.colorsPalette["color-minty-green-500"],
                    negativePlColor: i.colorsPalette["color-ripe-red-500"],
                    qty: {
                        backgroundColor: i.colorsPalette["color-tv-blue-500"],
                        textColor: i.colorsPalette["color-white"],
                        dividerColor: i.colorsPalette["color-tv-blue-500"],
                        activeColor: i.colorsPalette["color-tv-blue-600"]
                    },
                    text: {
                        backgroundColor: i.colorsPalette["color-cold-gray-900"],
                        textColor: i.colorsPalette["color-cold-gray-600"],
                        dividerColor: i.colorsPalette["color-tv-blue-a800"]
                    },
                    close: {
                        backgroundColor: i.colorsPalette["color-cold-gray-900"],
                        iconColor: i.colorsPalette["color-tv-blue-500"],
                        activeColor: l.buyActiveColor
                    },
                    reverse: {
                        backgroundColor: i.colorsPalette["color-cold-gray-900"],
                        borderColor: i.colorsPalette["color-tv-blue-500"],
                        iconColor: i.colorsPalette["color-tv-blue-500"],
                        activeColor: l.buyActiveColor
                    },
                    confirm: {
                        disableBackgroundColor: i.colorsPalette["color-cold-gray-750"],
                        backgroundColor: i.colorsPalette["color-tv-blue-500"],
                        borderColor: i.colorsPalette["color-tv-blue-500"],
                        textColor: i.colorsPalette["color-white"],
                        disableTextColor: i.colorsPalette["color-cold-gray-600"],
                        activeColor: i.colorsPalette["color-tv-blue-600"]
                    }
                },
                n = {
                    pointShadowColor: l.sellPointShadowColor,
                    lineColor: i.colorsPalette["color-ripe-red-500"],
                    borderBackgroundColor: i.colorsPalette["color-cold-gray-900"],
                    borderColor: i.colorsPalette["color-ripe-red-500"],
                    pointBackgroundColor: i.colorsPalette["color-cold-gray-900"],
                    disabledLineColor: i.colorsPalette["color-ripe-red-a800"],
                    positivePlColor: i.colorsPalette["color-minty-green-500"],
                    negativePlColor: i.colorsPalette["color-ripe-red-500"],
                    qty: {
                        backgroundColor: i.colorsPalette["color-ripe-red-500"],
                        textColor: i.colorsPalette["color-white"],
                        dividerColor: i.colorsPalette["color-ripe-red-500"],
                        activeColor: i.colorsPalette["color-ripe-red-600"]
                    },
                    text: {
                        backgroundColor: i.colorsPalette["color-cold-gray-900"],
                        textColor: i.colorsPalette["color-cold-gray-600"],
                        dividerColor: i.colorsPalette["color-ripe-red-a800"]
                    },
                    close: {
                        backgroundColor: i.colorsPalette["color-cold-gray-900"],
                        iconColor: i.colorsPalette["color-ripe-red-500"],
                        activeColor: l.sellActiveColor
                    },
                    reverse: {
                        backgroundColor: i.colorsPalette["color-cold-gray-900"],
                        borderColor: i.colorsPalette["color-ripe-red-500"],
                        iconColor: i.colorsPalette["color-ripe-red-500"],
                        activeColor: l.sellActiveColor
                    },
                    confirm: {
                        disableBackgroundColor: i.colorsPalette["color-cold-gray-750"],
                        backgroundColor: i.colorsPalette["color-ripe-red-500"],
                        borderColor: i.colorsPalette["color-ripe-red-500"],
                        textColor: i.colorsPalette["color-white"],
                        disableTextColor: i.colorsPalette["color-cold-gray-600"],
                        activeColor: i.colorsPalette["color-ripe-red-600"]
                    }
                },
                c = {
                    buy: {
                        normal: a,
                        disabled: (0, s.generateBlendColors)(a, l.overlayColor)
                    },
                    sell: {
                        normal: n,
                        disabled: (0, s.generateBlendColors)(n, l.overlayColor)
                    }
                };
            var d = o(979948);
            const u = {
                    pointShadowColor: d.buyPointShadowColor,
                    lineColor: i.colorsPalette["color-tv-blue-500"],
                    borderBackgroundColor: i.colorsPalette["color-white"],
                    borderColor: i.colorsPalette["color-tv-blue-500"],
                    pointBackgroundColor: i.colorsPalette["color-white"],
                    disabledLineColor: i.colorsPalette["color-tv-blue-100"],
                    positivePlColor: i.colorsPalette["color-minty-green-500"],
                    negativePlColor: i.colorsPalette["color-ripe-red-500"],
                    qty: {
                        backgroundColor: i.colorsPalette["color-tv-blue-500"],
                        textColor: i.colorsPalette["color-white"],
                        dividerColor: i.colorsPalette["color-tv-blue-500"],
                        activeColor: i.colorsPalette["color-tv-blue-600"]
                    },
                    text: {
                        backgroundColor: i.colorsPalette["color-white"],
                        textColor: i.colorsPalette["color-cold-gray-300"],
                        dividerColor: i.colorsPalette["color-tv-blue-50"]
                    },
                    close: {
                        backgroundColor: i.colorsPalette["color-white"],
                        iconColor: i.colorsPalette["color-tv-blue-500"],
                        activeColor: l.buyActiveColor
                    },
                    reverse: {
                        backgroundColor: i.colorsPalette["color-white"],
                        borderColor: i.colorsPalette["color-tv-blue-500"],
                        iconColor: i.colorsPalette["color-tv-blue-500"],
                        activeColor: l.buyActiveColor
                    },
                    confirm: {
                        disableBackgroundColor: i.colorsPalette["color-cold-gray-150"],
                        backgroundColor: i.colorsPalette["color-tv-blue-500"],
                        borderColor: i.colorsPalette["color-tv-blue-500"],
                        textColor: i.colorsPalette["color-white"],
                        disableTextColor: i.colorsPalette["color-cold-gray-300"],
                        activeColor: i.colorsPalette["color-tv-blue-600"]
                    }
                },
                h = {
                    pointShadowColor: d.sellPointShadowColor,
                    lineColor: i.colorsPalette["color-ripe-red-500"],
                    borderBackgroundColor: i.colorsPalette["color-white"],
                    borderColor: i.colorsPalette["color-ripe-red-500"],
                    pointBackgroundColor: i.colorsPalette["color-white"],
                    disabledLineColor: i.colorsPalette["color-ripe-red-100"],
                    positivePlColor: i.colorsPalette["color-minty-green-500"],
                    negativePlColor: i.colorsPalette["color-ripe-red-500"],
                    qty: {
                        backgroundColor: i.colorsPalette["color-ripe-red-500"],
                        textColor: i.colorsPalette["color-white"],
                        dividerColor: i.colorsPalette["color-ripe-red-500"],
                        activeColor: i.colorsPalette["color-ripe-red-600"]
                    },
                    text: {
                        backgroundColor: i.colorsPalette["color-white"],
                        textColor: i.colorsPalette["color-cold-gray-300"],
                        dividerColor: i.colorsPalette["color-ripe-red-50"]
                    },
                    close: {
                        backgroundColor: i.colorsPalette["color-white"],
                        iconColor: i.colorsPalette["color-ripe-red-500"],
                        activeColor: l.sellActiveColor
                    },
                    reverse: {
                        backgroundColor: i.colorsPalette["color-white"],
                        borderColor: i.colorsPalette["color-ripe-red-500"],
                        iconColor: i.colorsPalette["color-ripe-red-500"],
                        activeColor: l.sellActiveColor
                    },
                    confirm: {
                        disableBackgroundColor: i.colorsPalette["color-cold-gray-150"],
                        backgroundColor: i.colorsPalette["color-ripe-red-500"],
                        borderColor: i.colorsPalette["color-ripe-red-500"],
                        textColor: i.colorsPalette["color-white"],
                        disableTextColor: i.colorsPalette["color-cold-gray-300"],
                        activeColor: i.colorsPalette["color-ripe-red-600"]
                    }
                },
                p = {
                    buy: {
                        normal: u,
                        disabled: (0, s.generateBlendColors)(u, d.overlayColor)
                    },
                    sell: {
                        normal: h,
                        disabled: (0, s.generateBlendColors)(h, d.overlayColor)
                    }
                };

            function _(t, e, o, i = r.LineStyle.Solid) {
                const l = o() ? c : p,
                    s = t ? l.buy : l.sell;
                return { ...e ? s.disabled : s.normal,
                    lineStyle: i,
                    borderStyle: i,
                    labelBorderVisible: !1
                }
            }
        },
        61284: (t, e, o) => {
            "use strict";
            o.d(e, {
                PreOrderItem: () => n
            });
            var r = o(777754),
                i = o(96841),
                l = o(703819),
                s = o(339514);
            const a = r.t(null, void 0, o(502861));
            class n extends s.OrderWithMenuItem {
                constructor() {
                    super(...arguments), this._supportedOrderTypes = []
                }
                qtyText() {
                    return super._quantityText(this._data.qty)
                }
                style() {
                    return this._infoGetters.style(this)
                }
                setSupportOrderType(t) {
                    this._supportedOrderTypes = t
                }
                canSwitchType() {
                    return this._supportedOrderTypes.length > 1
                }
                orderTypesItems() {
                    return this._supportedOrderTypes.map((t => ({
                        type: t,
                        typeText: (0, l.orderTypeToText)({
                            orderType: t
                        })
                    })))
                }
                isWorking() {
                    return !0
                }
                profitLossText(t) {
                    return (0, l.orderTypeToText)({
                        orderType: this.data().type,
                        uppercase: t,
                        shorten: t
                    })
                }
                profitLossTooltip() {
                    return a
                }
                lineStyle() {
                    return i.LineStyle.Dashed
                }
                supportClose() {
                    return !0
                }
                supportModify() {
                    return this._data.supportModify
                }
                async onClose(t) {
                    var e, o;
                    null === (o = (e = this._source).onClose) || void 0 === o || o.call(e, t)
                }
                async onModify(t) {
                    var e, o;
                    return null === (o = (e = this._source).onModify) || void 0 === o || o.call(e, t), !0
                }
                _calcId() {
                    return "preOrder"
                }
            }
        },
        771453: (t, e, o) => {
            "use strict";
            o.d(e, {
                ProjectionBracketItem: () => m
            });
            var r = o(650151),
                i = o(150335),
                l = o(86441),
                s = o(777754),
                a = o(758337),
                n = o(96841),
                c = o(136916),
                d = o(547623),
                u = o(339514),
                h = o(125226);
            const p = s.t(null, {
                    context: "Stop loss"
                }, o(653315)),
                _ = s.t(null, {
                    context: "Trailing stop"
                }, o(668694)),
                f = s.t(null, {
                    context: "Take profit"
                }, o(645560)),
                v = s.t(null, void 0, o(223754)),
                y = s.t(null, void 0, o(46742)),
                b = s.t(null, void 0, o(416976)),
                C = (0, h.isFeatureEnabled)("allow_trailing_stop_profit_loss");
            class m extends u.OrderWithMenuItem {
                style() {
                    return this._infoGetters.style(this)
                }
                setPrice(t) {
                    const {
                        minTick: e
                    } = (0, r.ensureNotNull)(this._symbolDataProvider.symbolData());
                    null !== t && (t = (0, i.fixComputationError)(e * Math.round(t / e))), this.setData({ ...(0, a.clone)(this.data()),
                        price: t
                    })
                }
                data() {
                    return super.data()
                }
                qtyText() {
                    return this._bracketTypeText(!0)
                }
                tooltip() {
                    switch (this.bracketType()) {
                        case c.BracketType.TakeProfit:
                            return v;
                        case c.BracketType.StopLoss:
                            return y;
                        case c.BracketType.TrailingStop:
                            return b;
                        default:
                            throw new Error("Unknown bracket type")
                    }
                }
                isWorking() {
                    return !0
                }
                supportClose() {
                    return !1
                }
                supportModify() {
                    return !0
                }
                profitLossText(t) {
                    var e;
                    return !(null === (e = this._source.isBracketsPLVisible()) || void 0 === e ? void 0 : e.value()) || this.bracketType() === c.BracketType.TrailingStop && !C ? "" : super.profitLossText(t)
                }
                isMinifyMode() {
                    return null === this.price()
                }
                bracketType() {
                    return this.data().bracketType
                }
                async onMove(t) {
                    const e = new l.Point(t.localX, t.localY),
                        o = this._mainSeries.priceScale(),
                        i = this._mainSeries.firstValue();
                    if (null === i) return;
                    const s = o.coordinateToPrice(e.y, i);
                    this.setPrice(s), t.isTouch && (0, r.ensureDefined)(this._itemCommands.exitTrackingMode)()
                }
                lineStyle() {
                    return n.LineStyle.Dashed
                }
                _isBracket() {
                    return !0
                }
                _calcId() {
                    return this._data.id
                }
                _bracketTypeText(t) {
                    return this._data ? this.bracketType() === c.BracketType.TakeProfit ? f : this._source.bracketStopType() === d.StopType.TrailingStop ? _ : p : ""
                }
            }
        },
        791402: (t, e, o) => {
            "use strict";
            o.d(e, {
                calcPipsByPrice: () => i
            });
            var r = o(960521);

            function i(t, e, o, i) {
                return (0, r.Big)(t).minus(e).div(i).mul(1 === o ? -1 : 1).toNumber()
            }
        },
        249110: (t, e, o) => {
            "use strict";
            o.d(e, {
                mergeGaParams: () => i
            });
            var r = o(650151);

            function i(t, e) {
                (0, r.assert)(!(t.origin && e.origin && t.origin !== e.origin || t.event && e.event && t.event !== e.event), "origin and event should be only in one params object");
                const o = { ...t,
                    ...e
                };
                return t.label && e.label && (o.label = `${t.label} ${e.label}`), o
            }
        },
        313178: (t, e, o) => {
            "use strict";
            o.d(e, {
                getBracketType: () => _,
                getBracketTypeToText: () => f,
                bracketsByType: () => v,
                buildProjectionBracketData: () => y,
                getOrderPriceByType: () => b
            });
            var r = o(650151),
                i = o(777754),
                l = o(136916),
                s = o(547623),
                a = o(506787);
            const n = i.t(null, void 0, o(86430)),
                c = i.t(null, void 0, o(241648)),
                d = i.t(null, void 0, o(129266)),
                u = i.t(null, {
                    context: "Trailing stop"
                }, o(668694)),
                h = i.t(null, {
                    context: "Stop loss"
                }, o(653315)),
                p = i.t(null, {
                    context: "Take profit"
                }, o(645560));

            function _(t) {
                return 3 === t.type ? t.stopType === s.StopType.TrailingStop ? l.BracketType.TrailingStop : l.BracketType.StopLoss : 1 === t.type ? l.BracketType.TakeProfit : null
            }

            function f(t, e, o) {
                return 3 === t ? e === s.StopType.TrailingStop ? o ? u : n : o ? h : c : 1 === t ? o ? p : d : null
            }

            function v(t) {
                let e, o, r;
                return t.forEach((t => {
                    switch ((0, a.isOrderLikeItem)(t) ? t.bracketType() : _(t)) {
                        case l.BracketType.TakeProfit:
                            e = t;
                            break;
                        case l.BracketType.TrailingStop:
                            r = t;
                            break;
                        case l.BracketType.StopLoss:
                            o = t
                    }
                })), {
                    takeProfit: e,
                    trailingStop: r,
                    stopLoss: o
                }
            }

            function y(t, e, o) {
                const r = e === l.BracketType.TrailingStop ? s.StopType.TrailingStop : void 0,
                    i = e === l.BracketType.TakeProfit ? 1 : 3,
                    a = -1 === o.side ? 1 : -1;
                return {
                    dataType: "Order",
                    id: e === l.BracketType.TakeProfit ? `${t}TakeProfit` : e === l.BracketType.StopLoss ? `${t}StopLoss` : `${t}TrailingStop`,
                    price: null,
                    type: i,
                    stopType: r,
                    side: a,
                    bracketType: e,
                    qty: o.qty,
                    status: 6,
                    symbol: o.symbol,
                    plBasedOnLast: "plBasedOnLast" in o && o.plBasedOnLast,
                    considerFilledQty: !1,
                    supportModify: !1,
                    supportModifyOrderPrice: !1,
                    supportMove: !0,
                    supportCancel: !1,
                    supportBrackets: !1,
                    callbacks: {}
                }
            }

            function b(t) {
                return 1 === t.type ? (0,
                    r.ensureDefined)(t.limitPrice, "limit price for order") : (0, r.ensureDefined)(t.stopPrice, "stop price for order")
            }
        },
        524774: (t, e, o) => {
            "use strict";
            o.d(e, {
                createContextMenuTitle: () => p,
                createNoOverlapMenuAction: () => u,
                showContextMenu: () => h
            });
            var r = o(777754),
                i = o(310399),
                l = o(263221),
                s = o(973580);
            var a = o(125226),
                n = o(249110);
            const c = (0, a.isFeatureEnabled)("no_overlap_mode_enabled"),
                d = r.t(null, void 0, o(376303));

            function u(t, e, o) {
                if (!c) return null;
                const r = (0, n.mergeGaParams)(e, {
                    event: "No overlap orders and positions"
                });
                return new i.Action({
                    actionId: "Trading.NoOverlapMode",
                    label: d,
                    onExecute: () => {
                        o(r), t.setNoOverlapMode(!0)
                    },
                    disabled: !t.isItemsOverlap()
                })
            }
            async function h(t, e, o) {
                return l.ContextMenuManager.createMenu(t, {}, {
                    menuName: "TradingOrderContextMenu"
                }, o).then((t => (t.show(e), t)))
            }
            async function p(t) {
                return async function(t) {
                    const {
                        renderItemContextMenuTitle: e
                    } = await Promise.all([o.e(27096), o.e(79704)]).then(o.bind(o, 287075));
                    return new s.TVAction({
                        jsxLabel: e(t),
                        noInteractive: !0,
                        doNotCloseOnClick: !0
                    })
                }(t)
            }
        },
        715073: (t, e, o) => {
            "use strict";
            o.d(e, {
                drawArrow: () => s,
                drawOutlinedArrowHead: () => a,
                drawHalfArrow: () => n,
                drawText: () => c,
                drawUnderlinedText: () => d,
                drawOutlinedText: () => u
            });
            var r = o(96841),
                i = o(914679),
                l = o(741341);

            function s(t, e, o, r, i, l, s, a, n) {
                t.save();
                const c = t.lineWidth,
                    d = t.lineWidth % 2 ? .5 : 0;
                t.translate(e + d, o + d), l && t.scale(1, -1);
                const u = Math.round(a / 2),
                    h = u,
                    p = u;
                n && (t.strokeStyle = i, t.lineWidth = 2 * t.lineWidth, t.lineCap = "square", t.beginPath(), t.moveTo(0, u), t.lineTo(h, 0), t.lineTo(a, u), t.stroke(), t.lineCap = "butt", t.beginPath(), t.moveTo(p, s + (t.lineWidth - c) / 2), t.lineTo(h, 0), t.stroke()), t.lineWidth = c, t.strokeStyle = r, t.lineCap = "square", t.beginPath(), t.moveTo(0, u), t.lineTo(h, 0), t.lineTo(a, u), t.stroke(), t.lineCap = "butt", t.beginPath(), t.moveTo(p, s), t.lineTo(h, 0), t.stroke(), t.restore()
            }

            function a(t, e, o, r, i, l, s, a = 90) {
                t.save();
                const n = t.lineWidth,
                    c = 2 * t.lineWidth,
                    d = t.lineWidth % 2 ? .5 : 0;
                t.translate(e + d + s / 2 - n, o + d), t.rotate(a * Math.PI / 180);
                const u = Math.round(s / 2);
                t.lineCap = "square", t.lineWidth = c, t.strokeStyle = i, t.beginPath(), t.moveTo(0, u), t.lineTo(u, 0), t.lineTo(s, u), t.stroke(), t.lineCap = "square", t.lineWidth = n, t.strokeStyle = r, t.beginPath(), t.moveTo(0, u), t.lineTo(u, 0), t.lineTo(s, u), t.stroke(), t.restore()
            }

            function n(t, e, o, r, i, l, s) {
                t.save(), t.strokeStyle = r, t.lineJoin = "miter";
                const a = t.lineWidth % 2 ? .5 : 0,
                    n = Math.round(l / 3);
                t.translate(e + a, o + a), i && t.scale(-1, -1), t.beginPath(), t.moveTo(0, l), t.lineTo(0, 0), t.lineTo(-s, n), t.stroke(), t.restore()
            }

            function c(t, e, o, r, i, s, a, n, c = "center") {
                t.save(), t.textAlign = c, t.textBaseline = "middle", t.fillStyle = a, t.font = n, t.translate(r, i + s), (0, l.drawScaled)(t, e, (() => {
                    t.fillText(o, 0, 0)
                })), t.restore()
            }

            function d(t, e, o, s, a, n, c, d, u) {
                t.save(), t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = c, t.font = d;
                const h = 1,
                    p = 1,
                    _ = (r.LineStyle.Dashed, Math.round(10 * e) / 2),
                    f = Math.max(1, Math.floor(p * e)),
                    v = u.width * e,
                    y = Math.max(1, Math.floor(h * e)),
                    b = Math.round(s - v / 2),
                    C = Math.round(a + _ + y);
                t.strokeStyle = c, t.lineWidth = f;
                const m = Math.round(3 * t.lineWidth),
                    g = Math.round(3 * t.lineWidth / 2),
                    P = Math.round(2 * t.lineWidth);
                let T = Math.trunc(v / (m + P));
                const k = Math.trunc(v % (m + P) / 2),
                    x = [];
                for (x.push(g + k); T > 1;) x.push(P, m), T--;
                x.push(P, g + k), t.setLineDash(x), (0, i.drawHorizontalLine)(t, C, b, b + Math.round(v)), t.translate(s, a + n), (0, l.drawScaled)(t, e, (() => {
                    t.fillText(o, 0, 0)
                })), t.restore()
            }

            function u(t, e, o, r, i, s, a, n, c) {
                t.save(), t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = a, t.font = n, t.lineJoin = "round", t.translate(r, i + s), (0, l.drawScaled)(t, e, (() => {
                    t.strokeStyle = c, t.strokeText(o, 0, 0), t.fillText(o, 0, 0)
                })), t.restore()
            }
        }
    }
]);
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [37707], {
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
        8626: (e, t, n) => {
            "use strict";

            function i(e) {
                return s(e, r)
            }

            function o(e) {
                return s(e, a)
            }

            function s(e, t) {
                const n = Object.entries(e).filter(t),
                    i = {};
                for (const [e, t] of n) i[e] = t;
                return i
            }

            function r(e) {
                const [t, n] = e;
                return 0 === t.indexOf("data-") && "string" == typeof n
            }

            function a(e) {
                return 0 === e[0].indexOf("aria-")
            }
            n.d(t, {
                filterDataProps: () => i,
                filterAriaProps: () => o,
                filterProps: () => s,
                isDataAttribute: () => r,
                isAriaAttribute: () => a
            })
        },
        314308: (e, t, n) => {
            "use strict";

            function i(e, t, n, i, o) {
                function s(o) {
                    if (e > o.timeStamp) return;
                    const s = o.target;
                    void 0 !== n && null !== t && null !== s && s.ownerDocument === i && (t.contains(s) || n(o))
                }
                return o.click && i.addEventListener("click", s, !1), o.mouseDown && i.addEventListener("mousedown", s, !1), o.touchEnd && i.addEventListener("touchend", s, !1), o.touchStart && i.addEventListener("touchstart", s, !1), () => {
                    i.removeEventListener("click", s, !1), i.removeEventListener("mousedown", s, !1), i.removeEventListener("touchend", s, !1), i.removeEventListener("touchstart", s, !1)
                }
            }
            n.d(t, {
                addOutsideEventListener: () => i
            })
        },
        951292: (e, t, n) => {
            "use strict";
            n.d(t, {
                useOutsideEvent: () => s
            });
            var i = n(50959),
                o = n(314308);

            function s(e) {
                const {
                    click: t,
                    mouseDown: n,
                    touchEnd: s,
                    touchStart: r,
                    handler: a,
                    reference: l,
                    ownerDocument: u = document
                } = e, c = (0, i.useRef)(null), h = (0, i.useRef)(new CustomEvent("timestamp").timeStamp);
                return (0, i.useLayoutEffect)((() => {
                    const e = {
                            click: t,
                            mouseDown: n,
                            touchEnd: s,
                            touchStart: r
                        },
                        i = l ? l.current : c.current;
                    return (0, o.addOutsideEventListener)(h.current, i, a, u, e)
                }), [t, n, s, r, a]), l || c
            }
        },
        377318: (e, t, n) => {
            "use strict";
            n.d(t, {
                MenuContext: () => i
            });
            const i = n(50959).createContext(null)
        },
        175071: (e, t, n) => {
            "use strict";
            n.d(t, {
                DEFAULT_MENU_THEME: () => g,
                Menu: () => f
            });
            var i = n(50959),
                o = n(497754),
                s = n.n(o),
                r = n(650151),
                a = n(43329),
                l = n(587080),
                u = n(670797),
                c = n(224743),
                h = n(829725),
                d = n(799786),
                p = n(787684),
                m = n(377318),
                v = n(409790);
            const g = v;
            class f extends i.PureComponent {
                constructor(e) {
                    super(e), this._containerRef = null, this._scrollWrapRef = null, this._raf = null, this._scrollRaf = null, this._scrollTimeout = void 0, this._manager = new h.OverlapManager, this._hotkeys = null, this._scroll = 0, this._handleContainerRef = e => {
                        this._containerRef = e, this.props.reference && ("function" == typeof this.props.reference && this.props.reference(e), "object" == typeof this.props.reference && (this.props.reference.current = e))
                    }, this._handleScrollWrapRef = e => {
                        this._scrollWrapRef = e, "function" == typeof this.props.scrollWrapReference && this.props.scrollWrapReference(e),
                            "object" == typeof this.props.scrollWrapReference && (this.props.scrollWrapReference.current = e)
                    }, this._handleMeasure = ({
                        callback: e,
                        forceRecalcPosition: t
                    } = {}) => {
                        var n, i, o, s, l, u, c, h, d, p, m, v;
                        if (this.state.isMeasureValid && !t) return;
                        const {
                            position: g
                        } = this.props, f = (0, r.ensureNotNull)(this._containerRef);
                        let _ = f.getBoundingClientRect();
                        const b = document.documentElement.clientHeight,
                            M = document.documentElement.clientWidth,
                            w = null !== (n = this.props.closeOnScrollOutsideOffset) && void 0 !== n ? n : 0;
                        let C = b - 0 - w;
                        const x = _.height > C;
                        if (x) {
                            (0, r.ensureNotNull)(this._scrollWrapRef).style.overflowY = "scroll", _ = f.getBoundingClientRect()
                        }
                        const {
                            width: k,
                            height: E
                        } = _, W = "function" == typeof g ? g(k, E, b) : g, z = null !== (o = null === (i = null == W ? void 0 : W.indentFromWindow) || void 0 === i ? void 0 : i.left) && void 0 !== o ? o : 0, y = M - (null !== (s = W.overrideWidth) && void 0 !== s ? s : k) - (null !== (u = null === (l = null == W ? void 0 : W.indentFromWindow) || void 0 === l ? void 0 : l.right) && void 0 !== u ? u : 0), N = (0, a.clamp)(W.x, z, Math.max(z, y)), T = (null !== (h = null === (c = null == W ? void 0 : W.indentFromWindow) || void 0 === c ? void 0 : c.top) && void 0 !== h ? h : 0) + w, S = b - (null !== (d = W.overrideHeight) && void 0 !== d ? d : E) - (null !== (m = null === (p = null == W ? void 0 : W.indentFromWindow) || void 0 === p ? void 0 : p.bottom) && void 0 !== m ? m : 0);
                        let O = (0, a.clamp)(W.y, T, Math.max(T, S));
                        if (W.forbidCorrectYCoord && O < W.y && (C -= W.y - O, O = W.y), t && void 0 !== this.props.closeOnScrollOutsideOffset && W.y <= this.props.closeOnScrollOutsideOffset) return void this._handleGlobalClose(!0);
                        const B = null !== (v = W.overrideHeight) && void 0 !== v ? v : x ? C : void 0;
                        this.setState({
                            appearingMenuHeight: t ? this.state.appearingMenuHeight : B,
                            appearingMenuWidth: t ? this.state.appearingMenuWidth : W.overrideWidth,
                            appearingPosition: {
                                x: N,
                                y: O
                            },
                            isMeasureValid: !0
                        }, (() => {
                            this._restoreScrollPosition(), e && e()
                        }))
                    }, this._restoreScrollPosition = () => {
                        const e = document.activeElement,
                            t = (0, r.ensureNotNull)(this._containerRef);
                        if (null !== e && t.contains(e)) try {
                            e.scrollIntoView()
                        } catch (e) {} else(0, r.ensureNotNull)(this._scrollWrapRef).scrollTop = this._scroll
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
                        this._scroll = (0, r.ensureNotNull)(this._scrollWrapRef).scrollTop
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
                        customCloseDelegate: e = c.globalCloseDelegate
                    } = this.props;
                    e.subscribe(this, this._handleGlobalClose), window.addEventListener("resize", this._resize);
                    const t = null !== this.context;
                    this._hotkeys || t || (this._hotkeys = d.createGroup({
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
                        customCloseDelegate: e = c.globalCloseDelegate
                    } = this.props;
                    e.unsubscribe(this, this._handleGlobalClose), window.removeEventListener("resize", this._resize), window.removeEventListener("scroll", this._handleScrollOutside, {
                        capture: !0
                    }), this._hotkeys && (this._hotkeys.destroy(), this._hotkeys = null), null !== this._raf && (cancelAnimationFrame(this._raf), this._raf = null), null !== this._scrollRaf && (cancelAnimationFrame(this._scrollRaf), this._scrollRaf = null), this._scrollTimeout && clearTimeout(this._scrollTimeout)
                }
                render() {
                    const {
                        id: e,
                        role: t,
                        "aria-label": n,
                        "aria-labelledby": o,
                        "aria-activedescendant": r,
                        "aria-hidden": a,
                        children: c,
                        minWidth: h,
                        theme: d = v,
                        className: g,
                        maxHeight: f,
                        onMouseOver: b,
                        onMouseOut: M,
                        onKeyDown: w,
                        onFocus: C,
                        onBlur: x
                    } = this.props, {
                        appearingMenuHeight: k,
                        appearingMenuWidth: E,
                        appearingPosition: W,
                        isMeasureValid: z
                    } = this.state;
                    return i.createElement(m.MenuContext.Provider, {
                        value: this
                    }, i.createElement(p.SubmenuHandler, null, i.createElement(u.SlotContext.Provider, {
                        value: this._manager
                    }, i.createElement("div", {
                        id: e,
                        role: t,
                        "aria-label": n,
                        "aria-labelledby": o,
                        "aria-activedescendant": r,
                        "aria-hidden": a,
                        className: s()(g, d.menuWrap, !z && d.isMeasuring),
                        style: {
                            height: k,
                            left: W && W.x,
                            minWidth: h,
                            position: "fixed",
                            top: W && W.y,
                            width: E
                        },
                        "data-name": this.props["data-name"],
                        ref: this._handleContainerRef,
                        onScrollCapture: this.props.onScroll,
                        onContextMenu: l.preventDefaultForContextMenu,
                        tabIndex: this.props.tabIndex,
                        onMouseOver: b,
                        onMouseOut: M,
                        onKeyDown: w,
                        onFocus: C,
                        onBlur: x
                    }, i.createElement("div", {
                        className: s()(d.scrollWrap, !this.props.noMomentumBasedScroll && d.momentumBased),
                        style: {
                            overflowY: void 0 !== k ? "scroll" : "auto",
                            maxHeight: f
                        },
                        onScrollCapture: this._handleScroll,
                        ref: this._handleScrollWrapRef
                    }, i.createElement(_, {
                        className: d.menuBox
                    }, c)))), i.createElement(u.Slot, {
                        reference: this._handleSlot
                    })))
                }
                update(e) {
                    e ? this._resizeForced() : this._resize()
                }
            }

            function _(e) {
                const t = (0, r.ensureNotNull)((0, i.useContext)(p.SubmenuContext)),
                    n = i.useRef(null);
                return i.createElement("div", {
                    ref: n,
                    className: e.className,
                    onMouseOver: function(e) {
                        if (!(null !== t.current && e.target instanceof Node && (i = e.target, null === (o = n.current) || void 0 === o ? void 0 : o.contains(i)))) return;
                        var i, o;
                        t.isSubmenuNode(e.target) || t.setCurrent(null)
                    },
                    "data-name": "menu-inner"
                }, e.children)
            }
            f.contextType = p.SubmenuContext
        },
        829725: (e, t, n) => {
            "use strict";
            n.d(t, {
                OverlapManager: () => s,
                getRootOverlapManager: () => a
            });
            var i = n(650151);
            class o {
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
            class s {
                constructor(e = document) {
                    this._storage = new o, this._windows = new Map, this._index = 0, this._document = e, this._container = e.createDocumentFragment()
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
                    const i = this._document.createElement("div");
                    if (i.style.position = t.position, i.style.zIndex = this._index.toString(), i.dataset.id = e, void 0 !== t.index) {
                        const e = this._container.childNodes.length;
                        if (t.index >= e) this._container.appendChild(i);
                        else if (t.index <= 0) this._container.insertBefore(i, this._container.firstChild);
                        else {
                            const e = this._container.childNodes[t.index];
                            this._container.insertBefore(i, e)
                        }
                    } else "reverse" === t.direction ? this._container.insertBefore(i, this._container.firstChild) : this._container.appendChild(i);
                    return this._windows.set(e, i), ++this._index, i
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
            const r = new WeakMap;

            function a(e = document) {
                const t = e.getElementById("overlap-manager-root");
                if (null !== t) return (0, i.ensureDefined)(r.get(t)); {
                    const t = new s(e),
                        n = function(e) {
                            const t = e.createElement("div");
                            return t.style.position = "absolute", t.style.zIndex = 150..toString(), t.style.top = "0px", t.style.left = "0px", t.id = "overlap-manager-root", t
                        }(e);
                    return r.set(n, t), t.setContainer(n), e.body.appendChild(n), t
                }
            }
        },
        634993: (e, t, n) => {
            "use strict";
            n.d(t, {
                DEFAULT_POPUP_MENU_ITEM_THEME: () => u,
                PopupMenuItem: () => h
            });
            var i = n(50959),
                o = n(497754),
                s = n(224743),
                r = n(345848),
                a = n(8626),
                l = n(655498);
            const u = l;

            function c(e) {
                e.stopPropagation()
            }

            function h(e) {
                const {
                    id: t,
                    role: n,
                    "aria-label": u,
                    "aria-selected": h,
                    "aria-checked": d,
                    className: p,
                    title: m,
                    labelRowClassName: v,
                    labelClassName: g,
                    shortcut: f,
                    forceShowShortcuts: _,
                    icon: b,
                    isActive: M,
                    isDisabled: w,
                    isHovered: C,
                    appearAsDisabled: x,
                    label: k,
                    link: E,
                    showToolboxOnHover: W,
                    target: z,
                    rel: y,
                    toolbox: N,
                    reference: T,
                    onMouseOut: S,
                    onMouseOver: O,
                    onKeyDown: B,
                    suppressToolboxClick: P = !0,
                    theme: R = l,
                    tabIndex: D,
                    tagName: H,
                    renderComponent: A
                } = e, I = (0, a.filterDataProps)(e), L = (0, i.useRef)(null), F = (0, i.useMemo)((() => function(e) {
                    function t(t) {
                        const {
                            reference: n,
                            ...o
                        } = t, s = null != e ? e : o.href ? "a" : "div", r = "a" === s ? o : function(e) {
                            const {
                                download: t,
                                href: n,
                                hrefLang: i,
                                media: o,
                                ping: s,
                                rel: r,
                                target: a,
                                type: l,
                                referrerPolicy: u,
                                ...c
                            } = e;
                            return c
                        }(o);
                        return i.createElement(s, { ...r,
                            ref: n
                        })
                    }
                    return t.displayName = `DefaultComponent(${e})`, t
                }(H)), [H]), j = null != A ? A : F;
                return i.createElement(j, { ...I,
                    id: t,
                    role: n,
                    "aria-label": u,
                    "aria-selected": h,
                    "aria-checked": d,
                    className: o(p, R.item, b && R.withIcon, {
                        [R.isActive]: M,
                        [R.isDisabled]: w || x,
                        [R.hovered]: C
                    }),
                    title: m,
                    href: E,
                    target: z,
                    rel: y,
                    reference: function(e) {
                        L.current = e, "function" == typeof T && T(e);
                        "object" == typeof T && (T.current = e)
                    },
                    onClick: function(t) {
                        const {
                            dontClosePopup: n,
                            onClick: i,
                            onClickArg: o,
                            trackEventObject: a
                        } = e;
                        if (w) return;
                        a && (0, r.trackEvent)(a.category, a.event, a.label);
                        i && i(o, t);
                        n || (0, s.globalCloseMenu)()
                    },
                    onContextMenu: function(t) {
                        const {
                            trackEventObject: n,
                            trackRightClick: i
                        } = e;
                        n && i && (0, r.trackEvent)(n.category, n.event, `${n.label}_rightClick`)
                    },
                    onMouseUp: function(t) {
                        const {
                            trackEventObject: n,
                            trackMouseWheelClick: i
                        } = e;
                        if (1 === t.button && E && n) {
                            let e = n.label;
                            i && (e += "_mouseWheelClick"), (0, r.trackEvent)(n.category, n.event, e)
                        }
                    },
                    onMouseOver: O,
                    onMouseOut: S,
                    onKeyDown: B,
                    tabIndex: D
                }, void 0 !== b && i.createElement("span", {
                    className: R.icon,
                    dangerouslySetInnerHTML: {
                        __html: b
                    }
                }), i.createElement("span", {
                    className: o(R.labelRow, v)
                }, i.createElement("span", {
                    className: o(R.label, g)
                }, k)), (void 0 !== f || _) && i.createElement("span", {
                    className: R.shortcut
                }, (V = f) && V.split("+").join(" + ")), void 0 !== N && i.createElement("span", {
                    onClick: P ? c : void 0,
                    className: o(R.toolbox, {
                        [R.showOnHover]: W
                    })
                }, N));
                var V
            }
        },
        320116: (e, t, n) => {
            "use strict";
            n.d(t, {
                CloseDelegateContext: () => s
            });
            var i = n(50959),
                o = n(224743);
            const s = i.createContext(o.globalCloseDelegate)
        },
        45968: (e, t, n) => {
            "use strict";
            n.d(t, {
                PopupMenu: () => c
            });
            var i = n(50959),
                o = n(500962),
                s = n(162942),
                r = n(707533),
                a = n(175071),
                l = n(320116),
                u = n(951292);

            function c(e) {
                const {
                    controller: t,
                    children: n,
                    isOpened: c,
                    closeOnClickOutside: h = !0,
                    doNotCloseOn: d,
                    onClickOutside: p,
                    onClose: m,
                    onKeyboardClose: v,
                    "data-name": g = "popup-menu-container",
                    ...f
                } = e, _ = (0, i.useContext)(l.CloseDelegateContext), b = (0, u.useOutsideEvent)({
                    handler: function(e) {
                        p && p(e);
                        if (!h) return;
                        const t = (0, s.default)(d) ? d() : d;
                        if (t && e.target instanceof Node) {
                            const n = o.findDOMNode(t);
                            if (n instanceof Node && n.contains(e.target)) return
                        }
                        m()
                    },
                    mouseDown: !0,
                    touchStart: !0
                });
                return c ? i.createElement(r.Portal, {
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    pointerEvents: "none"
                }, i.createElement("span", {
                    ref: b,
                    style: {
                        pointerEvents: "auto"
                    }
                }, i.createElement(a.Menu, { ...f,
                    onClose: m,
                    onKeyboardClose: v,
                    onScroll: function(t) {
                        const {
                            onScroll: n
                        } = e;
                        n && n(t)
                    },
                    customCloseDelegate: _,
                    ref: t,
                    "data-name": g
                }, n))) : null
            }
        },
        707533: (e, t, n) => {
            "use strict";
            n.d(t, {
                Portal: () => l,
                PortalContext: () => u
            });
            var i = n(50959),
                o = n(500962),
                s = n(777491),
                r = n(829725),
                a = n(670797);
            class l extends i.PureComponent {
                constructor() {
                    super(...arguments), this._uuid = (0, s.guid)()
                }
                componentWillUnmount() {
                    this._manager().removeWindow(this._uuid)
                }
                render() {
                    const e = this._manager().ensureWindow(this._uuid, this.props.layerOptions);
                    return e.style.top = this.props.top || "", e.style.bottom = this.props.bottom || "", e.style.left = this.props.left || "", e.style.right = this.props.right || "", e.style.pointerEvents = this.props.pointerEvents || "", o.createPortal(i.createElement(u.Provider, {
                        value: this
                    }, this.props.children), e)
                }
                moveToTop() {
                    this._manager().moveToTop(this._uuid)
                }
                _manager() {
                    return null === this.context ? (0, r.getRootOverlapManager)() : this.context
                }
            }
            l.contextType = a.SlotContext;
            const u = i.createContext(null)
        },
        670797: (e, t, n) => {
            "use strict";
            n.d(t, {
                Slot: () => o,
                SlotContext: () => s
            });
            var i = n(50959);
            class o extends i.Component {
                shouldComponentUpdate() {
                    return !1
                }
                render() {
                    return i.createElement("div", {
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
            const s = i.createContext(null)
        },
        787684: (e, t, n) => {
            "use strict";
            n.d(t, {
                SubmenuContext: () => o,
                SubmenuHandler: () => s
            });
            var i = n(50959);
            const o = i.createContext(null);

            function s(e) {
                const [t, n] = (0, i.useState)(null), s = (0, i.useRef)(null), r = (0, i.useRef)(new Map);
                return (0, i.useEffect)((() => () => {
                    null !== s.current && clearTimeout(s.current)
                }), []), i.createElement(o.Provider, {
                    value: {
                        current: t,
                        setCurrent: function(e) {
                            null !== s.current && (clearTimeout(s.current), s.current = null);
                            null === t ? n(e) : s.current = setTimeout((() => {
                                s.current = null, n(e)
                            }), 100)
                        },
                        registerSubmenu: function(e, t) {
                            return r.current.set(e, t), () => {
                                r.current.delete(e)
                            }
                        },
                        isSubmenuNode: function(e) {
                            return Array.from(r.current.values()).some((t => t(e)))
                        }
                    }
                }, e.children)
            }
        },
        542378: e => {
            e.exports = {
                tabbar: "tabbar-uqXh1Q3i",
                tabs: "tabs-uqXh1Q3i",
                fakeTabs: "fakeTabs-uqXh1Q3i",
                tab: "tab-uqXh1Q3i",
                menuButtonWrap: "menuButtonWrap-uqXh1Q3i",
                hover: "hover-uqXh1Q3i",
                active: "active-uqXh1Q3i",
                title: "title-uqXh1Q3i",
                menuButton: "menuButton-uqXh1Q3i",
                titleText: "titleText-uqXh1Q3i"
            }
        },
        415013: e => {
            e.exports = {
                "css-value-footer-widget-horizontal-margin": "4px"
            }
        },
        281426: e => {
            e.exports = {
                "css-value-footer-widget-horizontal-margin": "4px",
                footerPanel: "footerPanel-tv5d_rvz",
                buttons: "buttons-tv5d_rvz",
                hidden: "hidden-tv5d_rvz",
                button: "button-tv5d_rvz",
                hover: "hover-tv5d_rvz",
                overlap: "overlap-tv5d_rvz"
            }
        },
        35611: (e, t, n) => {
            "use strict";
            n.d(t, {
                trackBottomPanelButtonClick: () => l,
                trackStrategyTesterButtonClick: () => u
            });
            var i = n(776734),
                o = n(632446),
                s = n(833813);
            const r = {
                Overview: "overview",
                "List of Trades": "list_of_trades",
                "Performance Summary": "performance_summary",
                Properties: "properties"
            };

            function a(e) {
                (0, i.getTracker)().then((t => {
                    null !== t && t.trackBottomToolbarButtonClick(e)
                }))
            }

            function l(e) {
                const t = [e.button];
                e.visibility && t.push(e.visibility), e.option && t.push(e.option), a(t.join(" "))
            }

            function u(e, t) {
                const n = ["strategy_tester"];
                if ((0, o.enabled)(s.ProductFeatures.DEEP_HISTORY_BACKTEST) && n.push(e), (null == t ? void 0 : t.activeTab) && n.push(r[t.activeTab]), null == t ? void 0 : t.button) {
                    const e = function(e) {
                            switch (e) {
                                case "Overview":
                                case "List of Trades":
                                case "Performance Summary":
                                case "Properties":
                                    return r[e];
                                default:
                                    return e
                            }
                        }(t.button),
                        i = t.isButtonOpen ? `${e}_open` : e;
                    n.push(i)
                }
                a(n.join(" "))
            }
        },
        781925: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                FooterWidgetRenderer: () => B
            });
            var i = n(50959),
                o = n(500962),
                s = n(497754),
                r = n(45968),
                a = n(634993),
                l = n(83436),
                u = n(650151),
                c = n(345848),
                h = n(542378);
            class d extends i.PureComponent {
                constructor() {
                    super(...arguments), this._ref = e => {
                        const {
                            name: t,
                            reference: n
                        } = this.props;
                        n && n(t, e)
                    }, this._onToggle = () => {
                        this._toggleWidget()
                    }, this._activationCallback = () => {
                        this._toggleWidget(!0)
                    }
                }
                render() {
                    const {
                        name: e,
                        isActive: t,
                        title: n,
                        customTitleComponent: o,
                        buttonOpenTooltip: r,
                        buttonCloseTooltip: a,
                        dataName: l,
                        className: u
                    } = this.props, c = t ? a : r, d = o;
                    return i.createElement("div", {
                        className: s(h.tab, d && h.customTab, t && h.active, u),
                        ref: this._ref
                    }, d ? i.createElement(d, {
                        onClick: this._onToggle,
                        activationCallback: this._activationCallback,
                        isActive: t,
                        dataName: l,
                        tooltip: c
                    }) : i.createElement("div", {
                        onClick: this._onToggle,
                        className: s(h.title, c && "apply-common-tooltip"),
                        "data-name": this.props.dataName,
                        "data-active": t,
                        title: c
                    }, i.createElement("span", {
                        className: h.titleText
                    }, n || e)))
                }
                _toggleWidget(e) {
                    const {
                        name: t,
                        onToggle: n,
                        _gaEvent: i
                    } = this.props;
                    i && (0, c.trackEvent)("Platform widgets", i), n(t, e)
                }
            }
            var p = n(833813),
                m = n(632446),
                v = n(35611),
                g = n(844996);
            class f extends i.PureComponent {
                constructor(e) {
                    super(e), this._menuButton = null, this._fakeTabs = {}, this._fakeMenuButton = null, this._refFakeTabs = (e, t) => {
                        this._fakeTabs[e] = t
                    }, this._refFakeMenuButton = e => {
                        this._fakeMenuButton = e
                    }, this._refMenuButton = e => {
                        this._menuButton = e
                    }, this._resize = e => {
                        if (!e) return;
                        const t = (0, u.ensureNotNull)(this._fakeMenuButton).offsetWidth,
                            {
                                activeWidgetName: n
                            } = this.props;
                        let i = [],
                            o = [],
                            s = 0;
                        "string" == typeof n && (o = [n], s = (0, u.ensureNotNull)(this._fakeTabs[n]).offsetWidth);
                        const r = this.props.widgets.map((e => e.name)),
                            a = r.filter((e => e !== n));
                        let l = !1;
                        a.forEach((n => {
                            if (!this._fakeTabs[n]) return;
                            const a = (0, u.ensureNotNull)(this._fakeTabs[n]).offsetWidth,
                                c = r.length - o.length == 1 ? e : e - t;
                            !l && s + a < c ? (s += a, o.push(n)) : (l = !0, i.push(n))
                        })), 0 === o.length && (o = [r[0]], i = i.filter((e => e !== r[0]))), o = r.filter((e => o.includes(e))), this.setState({
                            visibleTabs: o,
                            hiddenTabs: i
                        })
                    }, this._onToggle = (e, t) => {
                        void 0 !== e && (this._trackButtonClick(e), (0, o.flushSync)((() => this.props.setActiveWidget(e, t))), this._resize(this.props.width))
                    }, this._getDropdownPosition = () => {
                        const e = (0, u.ensureNotNull)(this._menuButton).getBoundingClientRect();
                        return {
                            x: e.left + 4,
                            y: e.top + e.height
                        }
                    }, this._onMenuItemClick = e => {
                        this._onToggle(e, !0)
                    }, this._handleMenuClick = () => {
                        this._trackButtonClick("menu"), this._toggleMenu()
                    }, this._toggleMenu = () => {
                        this.setState((e => ({
                            isMenuOpened: !e.isMenuOpened
                        })))
                    }, this._trackButtonClick = e => {
                        switch (e) {
                            case "screener":
                                return void(0, v.trackBottomPanelButtonClick)({
                                    button: "screener"
                                });
                            case "scripteditor":
                                return void(0, v.trackBottomPanelButtonClick)({
                                    button: "pine_editor"
                                });
                            case "backtesting":
                                return void((0, m.enabled)(p.ProductFeatures.DEEP_HISTORY_BACKTEST) ? (0, v.trackBottomPanelButtonClick)({
                                    button: "strategy_tester deep_history_beta"
                                }) : (0, v.trackBottomPanelButtonClick)({
                                    button: "strategy_tester"
                                }));
                            case "paper_trading":
                                return void(0, v.trackBottomPanelButtonClick)({
                                    button: "trading_panel"
                                });
                            case "menu":
                                return void(0, v.trackBottomPanelButtonClick)({
                                    button: "more"
                                })
                        }
                    }, this.state = {
                        visibleTabs: [],
                        hiddenTabs: [],
                        isMenuOpened: !1
                    }
                }
                componentDidMount() {
                    this._resize(this.props.width)
                }
                componentDidUpdate(e) {
                    const {
                        widgets: t,
                        activeWidgetName: n,
                        width: i
                    } = this.props;
                    e.widgets === t && e.activeWidgetName === n && e.width === i || this._resize(i)
                }
                getMinWidth() {
                    const e = this.props.activeWidgetName || this.props.widgets[0].name;
                    return (0, u.ensureNotNull)(this._fakeTabs[e]).offsetWidth + (0, u.ensureNotNull)(this._fakeMenuButton).offsetWidth
                }
                render() {
                    const {
                        visibleTabs: e
                    } = this.state, {
                        widgets: t
                    } = this.props, n = t.filter((t => e.includes(t.name)));
                    return i.createElement("div", {
                        className: h.tabbar
                    }, i.createElement("div", {
                        className: h.tabs
                    }, this._renderTabs(n, !1)), i.createElement("div", {
                        className: s(h.tabs, h.fakeTabs)
                    }, this._renderTabs(t, !0)))
                }
                _renderTabs(e, t) {
                    const {
                        activeWidgetName: n
                    } = this.props, {
                        hiddenTabs: o,
                        isMenuOpened: r
                    } = this.state, a = e.map((e => i.createElement(d, { ...e,
                        key: e.name,
                        isActive: n === e.name,
                        onToggle: this._onToggle,
                        dataName: t ? void 0 : e.name,
                        reference: t ? this._refFakeTabs : void 0,
                        className: "screener" === e.name && h.screenerTab
                    })));
                    return (t || o.length > 0) && a.push(i.createElement("div", {
                        key: "menu-button",
                        className: h.menuButtonWrap,
                        ref: t ? this._refFakeMenuButton : this._refMenuButton
                    }, i.createElement("div", {
                        className: s(h.menuButton, r && h.active),
                        onClick: this._handleMenuClick
                    }, i.createElement(l.Icon, {
                        icon: g
                    })))), !t && o.length > 0 && a.push(this._renderMenu()), a
                }
                _renderMenu() {
                    const {
                        hiddenTabs: e,
                        isMenuOpened: t
                    } = this.state, {
                        widgets: n
                    } = this.props, o = n.filter((t => e.includes(t.name))).map((e => i.createElement(a.PopupMenuItem, {
                        key: e.name,
                        onClick: this._onMenuItemClick,
                        onClickArg: e.name,
                        label: e.title || e.name
                    })));
                    return i.createElement(r.PopupMenu, {
                        key: "menu-dropdown",
                        isOpened: t,
                        doNotCloseOn: this._menuButton,
                        onClose: this._toggleMenu,
                        position: this._getDropdownPosition
                    }, o)
                }
            }
            var _ = n(587080),
                b = n(415013);
            const M = parseInt(b["css-value-footer-widget-horizontal-margin"]);
            var w = n(777754),
                C = n(544460),
                x = n(19182),
                k = n(597268),
                E = n(236992),
                W = n(281426);
            const z = w.t(null, void 0, n(368144)),
                y = w.t(null, void 0, n(670151)),
                N = w.t(null, void 0, n(402949)),
                T = w.t(null, void 0, n(298205));
            class S extends i.PureComponent {
                constructor(e) {
                    super(e), this._updateMode = () => {
                        this.setState({
                            mode: this.props.mode.value()
                        })
                    }, this.state = {
                        mode: e.mode.value()
                    }
                }
                componentDidMount() {
                    this.props.mode.subscribe(this._updateMode)
                }
                componentWillUnmount() {
                    this.props.mode.unsubscribe(this._updateMode)
                }
                render() {
                    const {
                        toggleMinimize: e,
                        toggleMaximize: t
                    } = this.props, {
                        mode: n
                    } = this.state, o = "minimized" === n, r = "maximized" === n;
                    return i.createElement(i.Fragment, null, i.createElement("button", {
                        className: s(W.button, W.minimizeButton, "apply-common-tooltip"),
                        title: o ? z : y,
                        onClick: e,
                        tabIndex: -1,
                        "data-name": "toggle-visibility-button",
                        "data-active": o
                    }, i.createElement(l.Icon, {
                        icon: o ? x : C
                    })), i.createElement("button", {
                        className: s(W.button, W.maximizeButton, "apply-common-tooltip", {
                            [W.active]: r
                        }),
                        title: r ? T : N,
                        onClick: t,
                        tabIndex: -1,
                        "data-name": "toggle-maximize-button",
                        "data-active": r
                    }, i.createElement(l.Icon, {
                        icon: r ? E : k
                    })))
                }
            }
            class O extends i.PureComponent {
                constructor(e) {
                    super(e), this._buttons = null, this._refButtons = e => {
                        this._buttons = e
                    }, this._handleMode = e => {
                        this.setState({
                            isOpened: "minimized" !== e
                        })
                    }, this._handleOverlap = e => {
                        this.setState({
                            isOverlap: e
                        })
                    }, this._handleActiveWidgetName = e => {
                        const {
                            resizerBridge: t
                        } = this.props;
                        this.setState({
                            activeWidgetName: e
                        }, (() => this._resize(t.width.value())))
                    }, this._setActiveWidget = (e, t, n) => {
                        this.props.bottomWidgetBar.toggleWidget(e, t, n)
                    }, this._resize = e => {
                        e && (e -= M + M, this.setState({
                            width: e
                        }))
                    };
                    const {
                        bottomWidgetBar: t,
                        resizerBridge: n
                    } = this.props;
                    this.state = {
                        isOpened: "minimized" !== t.mode().value(),
                        isOverlap: t.isOverlap().value(),
                        activeWidgetName: t.activeWidget().value(),
                        width: n.width.value()
                    }
                }
                componentDidMount() {
                    const {
                        bottomWidgetBar: e,
                        resizerBridge: t
                    } = this.props;
                    e.mode().subscribe(this._handleMode), e.isOverlap().subscribe(this._handleOverlap), e.activeWidget().subscribe(this._handleActiveWidgetName, {
                        callWithLast: !0
                    }), t.width.subscribe(this._resize), this._resize(t.width.value())
                }
                componentWillUnmount() {
                    const {
                        bottomWidgetBar: e,
                        resizerBridge: t
                    } = this.props;
                    e.mode().unsubscribe(this._handleMode), e.isOverlap().unsubscribe(this._handleOverlap), e.activeWidget().unsubscribe(this._handleActiveWidgetName), t.width.unsubscribe(this._resize)
                }
                render() {
                    const {
                        bottomWidgetBar: e
                    } = this.props, {
                        isOverlap: t,
                        activeWidgetName: n,
                        width: o
                    } = this.state, r = this._buttons ? this._buttons.offsetWidth : 0, a = e.enabledWidgets(), l = "minimized" !== e.mode().value() && n;
                    return i.createElement("div", {
                        id: "footer-chart-panel",
                        className: s(W.footerPanel, t && W.overlap),
                        onContextMenu: _.preventDefault
                    }, i.createElement(f, {
                        widgets: a,
                        activeWidgetName: l,
                        setActiveWidget: this._setActiveWidget,
                        settingsActiveWidget: n,
                        close: e.close,
                        width: o - r
                    }), i.createElement("div", {
                        className: W.buttons,
                        ref: this._refButtons
                    }, i.createElement(S, {
                        toggleMinimize: e.toggleMinimize,
                        toggleMaximize: e.toggleMaximize,
                        mode: e.mode()
                    })))
                }
            }
            class B {
                constructor(e, t, n) {
                    this._component = null, this._handleRef = e => this._component = e, this._container = e;
                    const s = i.createElement(O, {
                        resizerBridge: t,
                        bottomWidgetBar: n,
                        ref: this._handleRef
                    });
                    o.render(s, this._container)
                }
                getComponent() {
                    return (0, u.ensureNotNull)(this._component)
                }
                destroy() {
                    o.unmountComponentAtNode(this._container)
                }
            }
        },
        597268: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.5 6A2.5 2.5 0 0 0 6 8.5V11h1V8.5C7 7.67 7.67 7 8.5 7H11V6H8.5zM6 17v2.5A2.5 2.5 0 0 0 8.5 22H11v-1H8.5A1.5 1.5 0 0 1 7 19.5V17H6zM19.5 7H17V6h2.5A2.5 2.5 0 0 1 22 8.5V11h-1V8.5c0-.83-.67-1.5-1.5-1.5zM22 19.5V17h-1v2.5c0 .83-.67 1.5-1.5 1.5H17v1h2.5a2.5 2.5 0 0 0 2.5-2.5z"/></svg>'
        },
        236992: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M17 6v2.5a2.5 2.5 0 0 0 2.5 2.5H22v-1h-2.5A1.5 1.5 0 0 1 18 8.5V6h-1zm2.5 11a2.5 2.5 0 0 0-2.5 2.5V22h1v-2.5c0-.83.67-1.5 1.5-1.5H22v-1h-2.5zm-11 1H6v-1h2.5a2.5 2.5 0 0 1 2.5 2.5V22h-1v-2.5c0-.83-.67-1.5-1.5-1.5zM11 8.5V6h-1v2.5c0 .83-.67 1.5-1.5 1.5H6v1h2.5A2.5 2.5 0 0 0 11 8.5z"/></svg>'
        },
        544460: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" d="M7 20h14v1H7z"/></svg>'
        },
        19182: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" fill="none"><path stroke="currentColor" d="M1 8l8.5-6.5L18 8"/></svg>'
        },
        844996: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM19 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"/></svg>'
        },
        670151: e => {
            e.exports = {
                ar: ["إخفاء اللوحة"],
                ca_ES: "Hide panel",
                cs: "Hide panel",
                de: ["Panel verbergen"],
                el: "Hide panel",
                en: "Hide panel",
                es: ["Ocultar el panel"],
                fa: "Hide panel",
                fr: ["Masquer le panneau"],
                he_IL: ["הסתר פאנל"],
                hu_HU: "Hide panel",
                id_ID: ["Sembunyikan panel"],
                it: ["Nascondi pannello"],
                ja: ["パネルを非表示"],
                ko: ["패널 숨기기"],
                ms_MY: ["Sembunyi panel"],
                nl_NL: "Hide panel",
                pl: ["Ukryj panel"],
                pt: ["Ocultar painel"],
                ro: "Hide panel",
                ru: ["Скрыть панель"],
                sv: ["Dölj panel"],
                th: ["ซ่อนพาเนล"],
                tr: ["Paneli gizle"],
                vi: ["Ẩn bảng điều khiển"],
                zh: ["隐藏面板"],
                zh_TW: ["隱藏面板"]
            }
        },
        402949: e => {
            e.exports = {
                ar: ["تكبير اللوحة"],
                ca_ES: "Maximize panel",
                cs: "Maximize panel",
                de: ["Panel maximieren"],
                el: "Maximize panel",
                en: "Maximize panel",
                es: ["Maximizar el panel"],
                fa: "Maximize panel",
                fr: ["Maximiser le panneau"],
                he_IL: ["הגדל את הפאנל"],
                hu_HU: "Maximize panel",
                id_ID: ["Perbesar panel"],
                it: ["Massimizza pannello"],
                ja: ["パネルを最大化"],
                ko: ["패널 최대화"],
                ms_MY: ["Maksimumkan panel"],
                nl_NL: "Maximize panel",
                pl: ["Maksymalizuj panel"],
                pt: ["Maximizar painel"],
                ro: "Maximize panel",
                ru: ["Развернуть панель"],
                sv: ["Maximera panel"],
                th: ["พาเนลสูงสุด"],
                tr: ["Paneli büyüt"],
                vi: ["Phóng to bảng điều khiển"],
                zh: ["最大化面板"],
                zh_TW: ["最大化面板"]
            }
        },
        298205: e => {
            e.exports = {
                ar: ["تصغير اللوحة"],
                ca_ES: "Minimize panel",
                cs: "Minimize panel",
                de: ["Panel minimieren"],
                el: "Minimize panel",
                en: "Minimize panel",
                es: ["Minimizar el panel"],
                fa: "Minimize panel",
                fr: ["Minimiser le panneau"],
                he_IL: ["צמצם את הפאנל"],
                hu_HU: "Minimize panel",
                id_ID: ["Perkecil panel"],
                it: ["Minimizza pannello"],
                ja: ["パネルを最小化"],
                ko: ["패널 최소화"],
                ms_MY: ["Minimumkan panel"],
                nl_NL: "Minimize panel",
                pl: ["Minimalizuj panel"],
                pt: ["Minimizar painel"],
                ro: "Minimize panel",
                ru: ["Свернуть панель"],
                sv: ["Minimera panel"],
                th: ["พาเนลต่ำสุด"],
                tr: ["Paneli simge durumuna küçült"],
                vi: ["Thu nhỏ bảng điều khiển"],
                zh: ["最小化面板"],
                zh_TW: ["最小化面板"]
            }
        },
        368144: e => {
            e.exports = {
                ar: ["عرض اللوحة"],
                ca_ES: "Show panel",
                cs: "Show panel",
                de: ["Panel anzeigen"],
                el: "Show panel",
                en: "Show panel",
                es: ["Mostrar el panel"],
                fa: "Show panel",
                fr: ["Afficher le panneau"],
                he_IL: ["הצג פאנל"],
                hu_HU: "Show panel",
                id_ID: ["Tampilkan panel"],
                it: ["Mostra pannello"],
                ja: ["パネルを表示"],
                ko: ["패널 보이기"],
                ms_MY: ["Tunjuk panel"],
                nl_NL: "Show panel",
                pl: ["Pokaż panel"],
                pt: ["Mostrar painel"],
                ro: "Show panel",
                ru: ["Показать панель"],
                sv: ["Visa panel"],
                th: ["แสดงพาเนล"],
                tr: ["Paneli göster"],
                vi: ["Hiển thị bảng điều khiển"],
                zh: ["显示面板"],
                zh_TW: ["顯示面板"]
            }
        }
    }
]);
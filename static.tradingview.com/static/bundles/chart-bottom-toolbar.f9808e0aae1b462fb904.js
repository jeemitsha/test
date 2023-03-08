(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [47260], {
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
        545829: e => {
            e.exports = {
                separator: "separator-w5iW5vBm",
                small: "small-w5iW5vBm",
                normal: "normal-w5iW5vBm",
                large: "large-w5iW5vBm"
            }
        },
        8626: (e, t, s) => {
            "use strict";

            function n(e) {
                return a(e, o)
            }

            function i(e) {
                return a(e, r)
            }

            function a(e, t) {
                const s = Object.entries(e).filter(t),
                    n = {};
                for (const [e, t] of s) n[e] = t;
                return n
            }

            function o(e) {
                const [t, s] = e;
                return 0 === t.indexOf("data-") && "string" == typeof s
            }

            function r(e) {
                return 0 === e[0].indexOf("aria-")
            }
            s.d(t, {
                filterDataProps: () => n,
                filterAriaProps: () => i,
                filterProps: () => a,
                isDataAttribute: () => o,
                isAriaAttribute: () => r
            })
        },
        314308: (e, t, s) => {
            "use strict";

            function n(e, t, s, n, i) {
                function a(i) {
                    if (e > i.timeStamp) return;
                    const a = i.target;
                    void 0 !== s && null !== t && null !== a && a.ownerDocument === n && (t.contains(a) || s(i))
                }
                return i.click && n.addEventListener("click", a, !1), i.mouseDown && n.addEventListener("mousedown", a, !1), i.touchEnd && n.addEventListener("touchend", a, !1), i.touchStart && n.addEventListener("touchstart", a, !1), () => {
                    n.removeEventListener("click", a, !1), n.removeEventListener("mousedown", a, !1), n.removeEventListener("touchend", a, !1), n.removeEventListener("touchstart", a, !1)
                }
            }
            s.d(t, {
                addOutsideEventListener: () => n
            })
        },
        170873: (e, t, s) => {
            "use strict";
            s.d(t, {
                FragmentMap: () => i
            });
            var n = s(50959);

            function i(e) {
                if (e.map) {
                    return n.Children.toArray(e.children).map(e.map)
                }
                return e.children
            }
        },
        951292: (e, t, s) => {
            "use strict";
            s.d(t, {
                useOutsideEvent: () => a
            });
            var n = s(50959),
                i = s(314308);

            function a(e) {
                const {
                    click: t,
                    mouseDown: s,
                    touchEnd: a,
                    touchStart: o,
                    handler: r,
                    reference: l,
                    ownerDocument: d = document
                } = e, c = (0, n.useRef)(null), u = (0, n.useRef)(new CustomEvent("timestamp").timeStamp);
                return (0, n.useLayoutEffect)((() => {
                    const e = {
                            click: t,
                            mouseDown: s,
                            touchEnd: a,
                            touchStart: o
                        },
                        n = l ? l.current : c.current;
                    return (0, i.addOutsideEventListener)(u.current, n, r, d, e)
                }), [t, s, a, o, r]), l || c
            }
        },
        18182: (e, t, s) => {
            "use strict";
            s.d(t, {
                MatchMedia: () => i
            });
            var n = s(50959);
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
        377318: (e, t, s) => {
            "use strict";
            s.d(t, {
                MenuContext: () => n
            });
            const n = s(50959).createContext(null)
        },
        175071: (e, t, s) => {
            "use strict";
            s.d(t, {
                DEFAULT_MENU_THEME: () => v,
                Menu: () => b
            });
            var n = s(50959),
                i = s(497754),
                a = s.n(i),
                o = s(650151),
                r = s(43329),
                l = s(587080),
                d = s(670797),
                c = s(224743),
                u = s(829725),
                h = s(799786),
                m = s(787684),
                p = s(377318),
                g = s(409790);
            const v = g;
            class b extends n.PureComponent {
                constructor(e) {
                    super(e), this._containerRef = null, this._scrollWrapRef = null, this._raf = null, this._scrollRaf = null, this._scrollTimeout = void 0, this._manager = new u.OverlapManager, this._hotkeys = null, this._scroll = 0, this._handleContainerRef = e => {
                            this._containerRef = e, this.props.reference && ("function" == typeof this.props.reference && this.props.reference(e), "object" == typeof this.props.reference && (this.props.reference.current = e))
                        }, this._handleScrollWrapRef = e => {
                            this._scrollWrapRef = e, "function" == typeof this.props.scrollWrapReference && this.props.scrollWrapReference(e), "object" == typeof this.props.scrollWrapReference && (this.props.scrollWrapReference.current = e)
                        }, this._handleMeasure = ({
                            callback: e,
                            forceRecalcPosition: t
                        } = {}) => {
                            var s, n, i, a, l, d, c, u, h, m, p, g;
                            if (this.state.isMeasureValid && !t) return;
                            const {
                                position: v
                            } = this.props, b = (0, o.ensureNotNull)(this._containerRef);
                            let _ = b.getBoundingClientRect();
                            const C = document.documentElement.clientHeight,
                                y = document.documentElement.clientWidth,
                                f = null !== (s = this.props.closeOnScrollOutsideOffset) && void 0 !== s ? s : 0;
                            let S = C - 0 - f;
                            const x = _.height > S;
                            if (x) {
                                (0, o.ensureNotNull)(this._scrollWrapRef).style.overflowY = "scroll", _ = b.getBoundingClientRect()
                            }
                            const {
                                width: k,
                                height: A
                            } = _, M = "function" == typeof v ? v(k, A, C) : v, E = null !== (i = null === (n = null == M ? void 0 : M.indentFromWindow) || void 0 === n ? void 0 : n.left) && void 0 !== i ? i : 0, w = y - (null !== (a = M.overrideWidth) && void 0 !== a ? a : k) - (null !== (d = null === (l = null == M ? void 0 : M.indentFromWindow) || void 0 === l ? void 0 : l.right) && void 0 !== d ? d : 0), j = (0, r.clamp)(M.x, E, Math.max(E, w)), W = (null !== (u = null === (c = null == M ? void 0 : M.indentFromWindow) || void 0 === c ? void 0 : c.top) && void 0 !== u ? u : 0) + f, R = C - (null !== (h = M.overrideHeight) && void 0 !== h ? h : A) - (null !== (p = null === (m = null == M ? void 0 : M.indentFromWindow) || void 0 === m ? void 0 : m.bottom) && void 0 !== p ? p : 0);
                            let T = (0, r.clamp)(M.y, W, Math.max(W, R));
                            if (M.forbidCorrectYCoord && T < M.y && (S -= M.y - T, T = M.y), t && void 0 !== this.props.closeOnScrollOutsideOffset && M.y <= this.props.closeOnScrollOutsideOffset) return void this._handleGlobalClose(!0);
                            const z = null !== (g = M.overrideHeight) && void 0 !== g ? g : x ? S : void 0;
                            this.setState({
                                appearingMenuHeight: t ? this.state.appearingMenuHeight : z,
                                appearingMenuWidth: t ? this.state.appearingMenuWidth : M.overrideWidth,
                                appearingPosition: {
                                    x: j,
                                    y: T
                                },
                                isMeasureValid: !0
                            }, (() => {
                                this._restoreScrollPosition(), e && e()
                            }))
                        }, this._restoreScrollPosition = () => {
                            const e = document.activeElement,
                                t = (0, o.ensureNotNull)(this._containerRef);
                            if (null !== e && t.contains(e)) try {
                                e.scrollIntoView()
                            } catch (e) {} else(0, o.ensureNotNull)(this._scrollWrapRef).scrollTop = this._scroll
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
                        },
                        this._handleGlobalClose = e => {
                            this.props.onClose(e)
                        }, this._handleSlot = e => {
                            this._manager.setContainer(e)
                        }, this._handleScroll = () => {
                            this._scroll = (0, o.ensureNotNull)(this._scrollWrapRef).scrollTop
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
                    this._hotkeys || t || (this._hotkeys = h.createGroup({
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
                        "aria-label": s,
                        "aria-labelledby": i,
                        "aria-activedescendant": o,
                        "aria-hidden": r,
                        children: c,
                        minWidth: u,
                        theme: h = g,
                        className: v,
                        maxHeight: b,
                        onMouseOver: C,
                        onMouseOut: y,
                        onKeyDown: f,
                        onFocus: S,
                        onBlur: x
                    } = this.props, {
                        appearingMenuHeight: k,
                        appearingMenuWidth: A,
                        appearingPosition: M,
                        isMeasureValid: E
                    } = this.state;
                    return n.createElement(p.MenuContext.Provider, {
                        value: this
                    }, n.createElement(m.SubmenuHandler, null, n.createElement(d.SlotContext.Provider, {
                        value: this._manager
                    }, n.createElement("div", {
                        id: e,
                        role: t,
                        "aria-label": s,
                        "aria-labelledby": i,
                        "aria-activedescendant": o,
                        "aria-hidden": r,
                        className: a()(v, h.menuWrap, !E && h.isMeasuring),
                        style: {
                            height: k,
                            left: M && M.x,
                            minWidth: u,
                            position: "fixed",
                            top: M && M.y,
                            width: A
                        },
                        "data-name": this.props["data-name"],
                        ref: this._handleContainerRef,
                        onScrollCapture: this.props.onScroll,
                        onContextMenu: l.preventDefaultForContextMenu,
                        tabIndex: this.props.tabIndex,
                        onMouseOver: C,
                        onMouseOut: y,
                        onKeyDown: f,
                        onFocus: S,
                        onBlur: x
                    }, n.createElement("div", {
                        className: a()(h.scrollWrap, !this.props.noMomentumBasedScroll && h.momentumBased),
                        style: {
                            overflowY: void 0 !== k ? "scroll" : "auto",
                            maxHeight: b
                        },
                        onScrollCapture: this._handleScroll,
                        ref: this._handleScrollWrapRef
                    }, n.createElement(_, {
                        className: h.menuBox
                    }, c)))), n.createElement(d.Slot, {
                        reference: this._handleSlot
                    })))
                }
                update(e) {
                    e ? this._resizeForced() : this._resize()
                }
            }

            function _(e) {
                const t = (0, o.ensureNotNull)((0, n.useContext)(m.SubmenuContext)),
                    s = n.useRef(null);
                return n.createElement("div", {
                    ref: s,
                    className: e.className,
                    onMouseOver: function(e) {
                        if (!(null !== t.current && e.target instanceof Node && (n = e.target, null === (i = s.current) || void 0 === i ? void 0 : i.contains(n)))) return;
                        var n, i;
                        t.isSubmenuNode(e.target) || t.setCurrent(null)
                    },
                    "data-name": "menu-inner"
                }, e.children)
            }
            b.contextType = m.SubmenuContext
        },
        157490: (e, t, s) => {
            "use strict";
            s.d(t, {
                OutsideEvent: () => i
            });
            var n = s(951292);

            function i(e) {
                const {
                    children: t,
                    ...s
                } = e;
                return t((0, n.useOutsideEvent)(s))
            }
        },
        829725: (e, t, s) => {
            "use strict";
            s.d(t, {
                OverlapManager: () => a,
                getRootOverlapManager: () => r
            });
            var n = s(650151);
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
            class a {
                constructor(e = document) {
                    this._storage = new i, this._windows = new Map, this._index = 0, this._document = e, this._container = e.createDocumentFragment()
                }
                setContainer(e) {
                    const t = this._container,
                        s = null === e ? this._document.createDocumentFragment() : e;
                    ! function(e, t) {
                        Array.from(e.childNodes).forEach((e => {
                            e.nodeType === Node.ELEMENT_NODE && t.appendChild(e)
                        }))
                    }(t, s), this._container = s
                }
                registerWindow(e) {
                    this._storage.has(e) || this._storage.add(e)
                }
                ensureWindow(e, t = {
                    position: "fixed",
                    direction: "normal"
                }) {
                    const s = this._windows.get(e);
                    if (void 0 !== s) return s;
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
            const o = new WeakMap;

            function r(e = document) {
                const t = e.getElementById("overlap-manager-root");
                if (null !== t) return (0, n.ensureDefined)(o.get(t)); {
                    const t = new a(e),
                        s = function(e) {
                            const t = e.createElement("div");
                            return t.style.position = "absolute", t.style.zIndex = 150..toString(), t.style.top = "0px", t.style.left = "0px", t.id = "overlap-manager-root", t
                        }(e);
                    return o.set(s, t), t.setContainer(s), e.body.appendChild(s), t
                }
            }
        },
        368337: (e, t, s) => {
            "use strict";
            s.d(t, {
                makeOverlapable: () => a
            });
            var n = s(50959),
                i = s(707533);

            function a(e) {
                return class extends n.PureComponent {
                    render() {
                        const {
                            isOpened: t,
                            root: s
                        } = this.props;
                        if (!t) return null;
                        const a = n.createElement(e, { ...this.props,
                            zIndex: 150
                        });
                        return "parent" === s ? a : n.createElement(i.Portal, null, a)
                    }
                }
            }
        },
        93916: (e, t, s) => {
            "use strict";
            s.d(t, {
                PopupMenuSeparator: () => r
            });
            var n = s(50959),
                i = s(497754),
                a = s.n(i),
                o = s(545829);

            function r(e) {
                const {
                    size: t = "normal",
                    className: s,
                    ariaHidden: i = !1
                } = e;
                return n.createElement("div", {
                    className: a()(o.separator, "small" === t && o.small, "normal" === t && o.normal, "large" === t && o.large, s),
                    role: "separator",
                    "aria-hidden": i
                })
            }
        },
        320116: (e, t, s) => {
            "use strict";
            s.d(t, {
                CloseDelegateContext: () => a
            });
            var n = s(50959),
                i = s(224743);
            const a = n.createContext(i.globalCloseDelegate)
        },
        45968: (e, t, s) => {
            "use strict";
            s.d(t, {
                PopupMenu: () => c
            });
            var n = s(50959),
                i = s(500962),
                a = s(162942),
                o = s(707533),
                r = s(175071),
                l = s(320116),
                d = s(951292);

            function c(e) {
                const {
                    controller: t,
                    children: s,
                    isOpened: c,
                    closeOnClickOutside: u = !0,
                    doNotCloseOn: h,
                    onClickOutside: m,
                    onClose: p,
                    onKeyboardClose: g,
                    "data-name": v = "popup-menu-container",
                    ...b
                } = e, _ = (0, n.useContext)(l.CloseDelegateContext), C = (0, d.useOutsideEvent)({
                    handler: function(e) {
                        m && m(e);
                        if (!u) return;
                        const t = (0, a.default)(h) ? h() : h;
                        if (t && e.target instanceof Node) {
                            const s = i.findDOMNode(t);
                            if (s instanceof Node && s.contains(e.target)) return
                        }
                        p()
                    },
                    mouseDown: !0,
                    touchStart: !0
                });
                return c ? n.createElement(o.Portal, {
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    pointerEvents: "none"
                }, n.createElement("span", {
                    ref: C,
                    style: {
                        pointerEvents: "auto"
                    }
                }, n.createElement(r.Menu, { ...b,
                    onClose: p,
                    onKeyboardClose: g,
                    onScroll: function(t) {
                        const {
                            onScroll: s
                        } = e;
                        s && s(t)
                    },
                    customCloseDelegate: _,
                    ref: t,
                    "data-name": v
                }, s))) : null
            }
        },
        707533: (e, t, s) => {
            "use strict";
            s.d(t, {
                Portal: () => l,
                PortalContext: () => d
            });
            var n = s(50959),
                i = s(500962),
                a = s(777491),
                o = s(829725),
                r = s(670797);
            class l extends n.PureComponent {
                constructor() {
                    super(...arguments), this._uuid = (0, a.guid)()
                }
                componentWillUnmount() {
                    this._manager().removeWindow(this._uuid)
                }
                render() {
                    const e = this._manager().ensureWindow(this._uuid, this.props.layerOptions);
                    return e.style.top = this.props.top || "", e.style.bottom = this.props.bottom || "", e.style.left = this.props.left || "", e.style.right = this.props.right || "", e.style.pointerEvents = this.props.pointerEvents || "", i.createPortal(n.createElement(d.Provider, {
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
            l.contextType = r.SlotContext;
            const d = n.createContext(null)
        },
        670797: (e, t, s) => {
            "use strict";
            s.d(t, {
                Slot: () => i,
                SlotContext: () => a
            });
            var n = s(50959);
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
            const a = n.createContext(null)
        },
        787684: (e, t, s) => {
            "use strict";
            s.d(t, {
                SubmenuContext: () => i,
                SubmenuHandler: () => a
            });
            var n = s(50959);
            const i = n.createContext(null);

            function a(e) {
                const [t, s] = (0, n.useState)(null), a = (0, n.useRef)(null), o = (0, n.useRef)(new Map);
                return (0, n.useEffect)((() => () => {
                    null !== a.current && clearTimeout(a.current)
                }), []), n.createElement(i.Provider, {
                    value: {
                        current: t,
                        setCurrent: function(e) {
                            null !== a.current && (clearTimeout(a.current), a.current = null);
                            null === t ? s(e) : a.current = setTimeout((() => {
                                a.current = null,
                                    s(e)
                            }), 100)
                        },
                        registerSubmenu: function(e, t) {
                            return o.current.set(e, t), () => {
                                o.current.delete(e)
                            }
                        },
                        isSubmenuNode: function(e) {
                            return Array.from(o.current.values()).some((t => t(e)))
                        }
                    }
                }, e.children)
            }
        },
        995683: (e, t, s) => {
            "use strict";

            function n(e, t, s = {}) {
                return Object.assign({}, e, function(e, t, s = {}) {
                    const n = Object.assign({}, t);
                    for (const i of Object.keys(t)) {
                        const a = s[i] || i;
                        a in e && (n[i] = [e[a], t[i]].join(" "))
                    }
                    return n
                }(e, t, s))
            }
            s.d(t, {
                mergeThemes: () => n
            })
        },
        906132: (e, t, s) => {
            "use strict";
            var n = s(522134);

            function i() {}

            function a() {}
            a.resetWarningCache = i, e.exports = function() {
                function e(e, t, s, i, a, o) {
                    if (o !== n) {
                        var r = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw r.name = "Invariant Violation", r
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var s = {
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
                    checkPropTypes: a,
                    resetWarningCache: i
                };
                return s.PropTypes = s, s
            }
        },
        719036: (e, t, s) => {
            e.exports = s(906132)()
        },
        522134: e => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        978838: e => {
            e.exports = {
                button: "button-MHRXYii0",
                hover: "hover-MHRXYii0",
                inner: "inner-MHRXYii0"
            }
        },
        126756: e => {
            e.exports = {
                toolbar: "toolbar-uWw2aReP",
                dateRangeWrapper: "dateRangeWrapper-uWw2aReP",
                seriesControlWrapper: "seriesControlWrapper-uWw2aReP",
                dateRangeExpanded: "dateRangeExpanded-uWw2aReP",
                dateRangeCollapsed: "dateRangeCollapsed-uWw2aReP",
                item: "item-uWw2aReP",
                first: "first-uWw2aReP",
                last: "last-uWw2aReP",
                inline: "inline-uWw2aReP",
                timezone: "timezone-uWw2aReP",
                session: "session-uWw2aReP",
                icon: "icon-uWw2aReP",
                hidden: "hidden-uWw2aReP",
                collapsed: "collapsed-uWw2aReP"
            }
        },
        40816: e => {
            e.exports = {
                container: "container-yUKUQsJO",
                backdrop: "backdrop-yUKUQsJO",
                swatchContainerBackdrop: "swatchContainerBackdrop-yUKUQsJO",
                swatchContainer: "swatchContainer-yUKUQsJO",
                column: "column-yUKUQsJO",
                twoColumns: "twoColumns-yUKUQsJO",
                bottomToolbarContainer: "bottomToolbarContainer-yUKUQsJO",
                bottomToolbarButton: "bottomToolbarButton-yUKUQsJO"
            }
        },
        418857: e => {
            e.exports = {
                swatch: "swatch-PQzCTqvA",
                active: "active-PQzCTqvA",
                swatchInner: "swatchInner-PQzCTqvA",
                text: "text-PQzCTqvA",
                resolution: "resolution-PQzCTqvA"
            }
        },
        546632: e => {
            e.exports = {
                button: "button-rgQ5VWWu",
                hover: "hover-rgQ5VWWu",
                icon: "icon-rgQ5VWWu"
            }
        },
        792194: e => {
            e.exports = {
                separator: "separator-tdPP3m5x"
            }
        },
        987017: e => {
            e.exports = {
                headerMenuText: "headerMenuText-kxGYI1CJ"
            }
        },
        487457: e => {
            e.exports = {
                button: "button-WB93ygW4"
            }
        },
        882492: (e, t, s) => {
            "use strict";
            s.d(t, {
                bindRanges: () => c
            });
            var n = s(50959),
                i = s(719036),
                a = s(650151),
                o = s(345848),
                r = s(231656),
                l = s(675791);
            const d = (0, r.registryContextType)();

            function c(e) {
                var t;
                return (t = class extends n.PureComponent {
                    constructor(e, t) {
                        super(e, t), this._handleUpdate = e => {
                            this.setState(e)
                        }, this._handleSelectRange = e => {
                            var t, s;
                            (0, o.trackEvent)("GUI", "Chart Bottom Toolbar", `range ${e.value}`), null === (s = (t = this.props).onSelectRange) || void 0 === s || s.call(t, e), this._binding.selectRange(e)
                        }, (0,
                            r.validateRegistry)(t, {
                            availableTimeFrames: i.any.isRequired,
                            chartWidgetCollection: i.any.isRequired,
                            chartWidget: i.any.isRequired
                        }), u.has(t.chartWidget) || u.set(t.chartWidget, new l.RangeBinding(t));
                        const s = this._binding = (0, a.ensureDefined)(u.get(t.chartWidget));
                        this.state = s.state()
                    }
                    componentDidMount() {
                        this._binding.onChange().subscribe(this, this._handleUpdate)
                    }
                    componentWillUnmount() {
                        this._binding.onChange().unsubscribe(this, this._handleUpdate)
                    }
                    render() {
                        return n.createElement(e, {
                            goToDateButton: this.props.goToDateButton,
                            className: this.props.className,
                            ranges: this.state.ranges,
                            activeRange: this.state.activeRange,
                            onSelectRange: this._handleSelectRange
                        })
                    }
                }).contextType = d, t
            }
            const u = new WeakMap
        },
        240895: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                BottomToolbarRenderer: () => xt
            });
            var n = s(50959),
                i = s(500962),
                a = s(777754),
                o = s(719036),
                r = s(497754),
                l = s(495046),
                d = s(575296),
                c = s(898930),
                u = s(224743),
                h = s(18182),
                m = s(634993),
                p = s(93916),
                g = s(882492),
                v = s(452709),
                b = s(231656),
                _ = s(21619),
                C = s(868151),
                y = s(1574),
                f = s(635900);
            const S = {
                    title: a.t(null, void 0, s(660222)),
                    goToDate: (0, C.appendEllipsis)(a.t(null, void 0, s(369)))
                },
                x = (0, b.registryContextType)();
            class k extends n.PureComponent {
                constructor(e, t) {
                    super(e, t), this._handleGoToDateClick = () => {
                        const {
                            chartWidget: e
                        } = this.context;
                        (0, v.showGoToDateDialog)(e), (0, u.globalCloseMenu)()
                    }, this._handleRangeSelect = e => {
                        e && this.props.onSelectRange && this.props.onSelectRange(e), (0, u.globalCloseMenu)()
                    }, this._renderChildren = e => {
                        const {
                            ranges: t,
                            activeRange: s,
                            goToDateButton: i
                        } = this.props;
                        return e ? n.createElement(n.Fragment, null, n.createElement(_.DateRangeDrawerRanges, {
                            ranges: t,
                            activeRange: s,
                            onSelectRange: this._handleRangeSelect
                        }), i && n.createElement(_.DateRangeDrawerGoTo, {
                            onGoToDateClick: this._handleGoToDateClick
                        })) : n.createElement(n.Fragment, null, t.map((e => n.createElement(m.PopupMenuItem, {
                            key: e.value.value,
                            label: e.description || e.text,
                            isActive: s === e.value.value,
                            onClick: this._handleRangeSelect,
                            onClickArg: e
                        }))), i && n.createElement(p.PopupMenuSeparator, null), i && n.createElement(m.PopupMenuItem, {
                            label: S.goToDate,
                            onClick: this._handleGoToDateClick
                        }))
                    }, (0, b.validateRegistry)(t, {
                        chartWidget: o.any.isRequired
                    })
                }
                render() {
                    return n.createElement(h.MatchMedia, {
                        rule: "screen and (max-width: 430px)"
                    }, (e => n.createElement(d.ToolWidgetMenu, {
                        className: f.button,
                        content: S.title,
                        arrow: !0,
                        verticalAttachEdge: c.VerticalAttachEdge.Top,
                        verticalDropDirection: c.VerticalDropDirection.FromBottomToTop,
                        horizontalMargin: 4,
                        "data-name": "date-ranges-menu",
                        isDrawer: e,
                        onClick: this._trackClick
                    }, this._renderChildren(e))))
                }
                _trackClick() {
                    (0, y.trackButtonClick)("bottom toolbar", "date range")
                }
            }
            k.contextType = x;
            const A = (0, g.bindRanges)(k);
            var M = s(157345);
            const E = (0, g.bindRanges)(M.ToolWidgetDateRangeView);
            var w = s(83436),
                j = s(604286),
                W = s(345848),
                R = s(470316),
                T = s(915270),
                z = s(546632);
            const B = (0, j.hotKeySerialize)({
                    keys: [(0, R.humanReadableModifiers)(R.Modifiers.Alt, !1), "G"],
                    text: "{0} + {1}"
                }),
                D = (0, b.registryContextType)();
            class P extends n.PureComponent {
                constructor(e, t) {
                    super(e, t), this._handleClick = () => {
                        const {
                            chartWidget: e
                        } = this.context;
                        (0, W.trackEvent)("GUI", "Chart Bottom Toolbar", "go to"), (0,
                            y.trackButtonClick)("bottom toolbar", "go to"), (0, v.showGoToDateDialog)(e)
                    }, (0, b.validateRegistry)(t, {
                        chartWidget: o.any.isRequired
                    })
                }
                render() {
                    const {
                        className: e,
                        ranges: t
                    } = this.props;
                    return t.length > 0 && n.createElement("div", {
                        className: r("apply-common-tooltip", z.button, e),
                        "data-name": "go-to-date",
                        "data-tooltip-hotkey": B,
                        onClick: this._handleClick,
                        title: a.t(null, void 0, s(369))
                    }, n.createElement(w.Icon, {
                        className: z.icon,
                        icon: T
                    }))
                }
            }
            P.contextType = D;
            const N = (0, g.bindRanges)(P);
            var L = s(650151),
                F = s(978838);

            function O(e) {
                const {
                    reference: t,
                    className: s,
                    children: i,
                    ...a
                } = e;
                return n.createElement("button", { ...a,
                    className: r(s, F.button),
                    ref: t
                }, n.createElement("span", {
                    className: F.inner
                }, i))
            }
            var H = s(12046),
                I = s(164280),
                U = s(310399),
                V = s(263221);
            class q extends n.PureComponent {
                constructor(e) {
                    super(e), this._element = null, this._menuShown = !1, this._preventShowingMenu = !1, this._handleRef = e => {
                        this._element = e
                    }, this._onMouseDown = () => {
                        this._preventShowingMenu = this._menuShown
                    }, this._showMenu = () => {
                        if (this._preventShowingMenu) return void V.ContextMenuManager.hideAll();
                        const {
                            getActions: e
                        } = this.props, t = (0, L.ensureNotNull)(this._element), s = e();
                        if (0 === s.length) return;
                        const n = t.getBoundingClientRect();
                        V.ContextMenuManager.showMenu(s, {
                            clientX: n.left,
                            clientY: n.top,
                            attachToYBy: "bottom"
                        }, void 0, {
                            menuName: "TimezoneMenuContextMenu"
                        }, (() => {
                            this._menuShown = !1
                        })).then((() => {
                            this._menuShown = !0
                        }))
                    }
                }
                render() {
                    const {
                        children: e
                    } = this.props;
                    return n.createElement("span", {
                        onClick: this._showMenu,
                        onMouseDown: this._onMouseDown,
                        ref: this._handleRef
                    }, e)
                }
            }
            var G = s(747342),
                Y = s(941167),
                K = s(971244),
                Z = s(487457);
            const Q = {
                hint: a.t(null, void 0, s(587492))
            };
            const J = (0, b.registryContextType)();
            class X extends n.PureComponent {
                constructor(e, t) {
                    super(e, t), this._timeFormatter = new I.TimeFormatter((0, Y.getHourMinuteSecondFormat)(K.timeHoursFormatProperty.value())), this._tickInterval = void 0, this._tickClock = () => {
                        const {
                            chartApiInstance: e
                        } = this.context;
                        if (void 0 !== this._timezone) {
                            const t = (0, G.utc_to_cal)(this._timezone, e.serverTime());
                            this.setState({
                                time: this._timeFormatter.format(t)
                            })
                        }
                    }, this._getActions = () => {
                        if (!this.props.withMenu) return [];
                        const {
                            chartWidget: e
                        } = this.context;
                        return function(e) {
                            e.updateActions();
                            const t = e.actions();
                            return t && t.applyTimeZone instanceof U.Action ? t.applyTimeZone.getSubItems() : []
                        }(e)
                    }, (0, b.validateRegistry)(t, {
                        chartWidget: o.any.isRequired,
                        chartApiInstance: o.any.isRequired
                    }), this.state = {
                        time: ""
                    }
                }
                componentDidMount() {
                    const {
                        chartWidget: e
                    } = this.context;
                    this._tickInterval = setInterval(this._tickClock, 1e3), e.withModel(null, (() => {
                        const t = e.model();
                        t.model().mainSeries().dataEvents().symbolResolved().subscribe(this, this.updateTimezonesButton), t.model().properties().childs().timezone.subscribe(this, this.updateTimezonesButton), K.timeHoursFormatProperty.subscribe(this, this._timeHoursFormatPropertyChanged)
                    }))
                }
                componentWillUnmount() {
                    const {
                        chartWidget: e
                    } = this.context;
                    clearInterval(this._tickInterval), e.withModel(null, (() => {
                        const t = e.model();
                        t.model().mainSeries().dataEvents().symbolResolved().unsubscribe(this, this.updateTimezonesButton),
                            t.model().properties().childs().timezone.unsubscribe(this, this.updateTimezonesButton), K.timeHoursFormatProperty.unsubscribe(this, this._timeHoursFormatPropertyChanged)
                    }))
                }
                render() {
                    const {
                        className: e,
                        withMenu: t
                    } = this.props, {
                        time: s
                    } = this.state, i = void 0 !== this._timezone ? (0, H.parseTzOffset)(this._timezone.name()).string : null;
                    return n.createElement(q, {
                        getActions: this._getActions
                    }, n.createElement(O, {
                        className: r(e, Z.button, "apply-common-tooltip"),
                        title: t ? Q.hint : void 0,
                        disabled: !t,
                        "data-name": "time-zone-menu"
                    }, s && i && `${s} (${i})`))
                }
                updateTimezonesButton() {
                    const {
                        chartWidget: e
                    } = this.context;
                    if (!e.hasModel()) return;
                    if (null === e.model().mainSeries().symbolInfo()) return;
                    let t = e.model().model().timezone();
                    if ("exchange" === t) {
                        const s = (0, L.ensureNotNull)(e.model().mainSeries().symbolInfo()).timezone;
                        s && (t = s)
                    }
                    this._timezone = (0, G.get_timezone)(t), this._tickClock()
                }
                _timeHoursFormatPropertyChanged() {
                    this._timeFormatter = new I.TimeFormatter((0, Y.getHourMinuteSecondFormat)(K.timeHoursFormatProperty.value())), this.updateTimezonesButton()
                }
            }
            X.contextType = J;
            var $ = s(591419),
                ee = s(983731),
                te = s(683890),
                se = s(638456);
            class ne {
                constructor(e, t, s) {
                    this._highlighted = !1, this._chartWidget = e, this._priceScaleGetter = t, this._owner = s, this._setHighlight = this._setHighlight.bind(this), this._removeHighlight = this._removeHighlight.bind(this)
                }
                destroy() {
                    this._highlighted && this._removeHighlight()
                }
                handlers() {
                    const e = se.CheckMobile.any();
                    return {
                        onMouseEnter: e ? void 0 : this._setHighlight,
                        onMouseLeave: e ? void 0 : this._removeHighlight
                    }
                }
                _setHighlight() {
                    if (!this._chartWidget.hasModel()) return;
                    const e = this._chartWidget.model().model(),
                        t = e.paneForSource(e.mainSeries()),
                        s = this._priceScaleGetter();
                    if (null === t || null === s) return;
                    const n = this._chartWidget.paneByState(t);
                    if (null !== n) {
                        const t = n.rightPriceAxisesContainer().findAxisWidgetForScale(s);
                        let i = null;
                        null !== t && (i = t.axisInfo());
                        const a = n.leftPriceAxisesContainer().findAxisWidgetForScale(s);
                        null !== a && (i = a.axisInfo());
                        const o = n.highlightedPriceAxis();
                        null !== i && o.value().axis !== i && (o.setValue({
                            owner: this._owner,
                            axis: i
                        }), e.lightUpdate(), this._highlighted = !0)
                    }
                }
                _removeHighlight() {
                    if (!this._chartWidget.hasModel()) return;
                    const e = this._chartWidget.model().model(),
                        t = e.paneForSource(e.mainSeries());
                    if (null === t) return;
                    const s = this._chartWidget.paneByState(t);
                    if (null !== s) {
                        const t = s.highlightedPriceAxis(),
                            n = t.value();
                        null !== n.axis && n.owner === this._owner && (t.setValue({
                            owner: this._owner,
                            axis: null
                        }), e.lightUpdate(), this._highlighted = !1)
                    }
                }
            }
            const ie = (0, b.registryContextType)(),
                ae = new te.TranslatedString("toggle log scale", a.t(null, void 0, s(160166)));
            const oe = (0, b.registryContextType)(),
                re = new te.TranslatedString("toggle auto scale", a.t(null, void 0, s(863060)));
            const le = (0, b.registryContextType)(),
                de = new te.TranslatedString("toggle percentage scale", a.t(null, void 0, s(568642)));
            var ce = s(906125),
                ue = s(251954),
                he = s(598104);
            const me = {
                1: void 0,
                2: s(972855),
                3: s(890442),
                4: s(689558),
                5: s(992320),
                6: s(643745),
                8: s(257294)
            };
            var pe = s(368337),
                ge = s(157490),
                ve = s(991826),
                be = s(418857);
            const _e = (0, b.registryContextType)();
            class Ce extends n.PureComponent {
                constructor(e, t) {
                    super(e, t), this._handleChartSelect = () => {
                        const {
                            chart: e,
                            onSelect: t
                        } = this.props;
                        e.requestFullscreen(), t && t()
                    }, this._handleActiveChartChange = () => this.forceUpdate(), (0, b.validateRegistry)(t, {
                        chartWidgetCollection: o.any.isRequired
                    })
                }
                componentDidMount() {
                    const {
                        chartWidgetCollection: e
                    } = this.context;
                    e.activeChartWidget.subscribe(this._handleActiveChartChange)
                }
                componentWillUnmount() {
                    const {
                        chartWidgetCollection: e
                    } = this.context;
                    e.activeChartWidget.unsubscribe(this._handleActiveChartChange)
                }
                render() {
                    const {
                        chart: e,
                        width: t,
                        height: s
                    } = this.props, {
                        chartWidgetCollection: i
                    } = this.context, a = i.activeChartWidget.value() === e;
                    let o, l;
                    if (e.hasModel()) {
                        const t = (0, L.ensureDefined)(e.model().mainSeries());
                        o = t.symbol(), l = t.interval()
                    } else {
                        const t = e.properties().childs().mainSeriesProperties.childs();
                        o = t.symbol.value(), l = t.interval.value()
                    }
                    return n.createElement("div", {
                        className: r(be.swatch, a && be.active),
                        style: {
                            maxWidth: t,
                            width: t,
                            height: s
                        },
                        onClick: this._handleChartSelect
                    }, n.createElement(n.Fragment, null, n.createElement("div", {
                        className: be.swatchInner
                    }, n.createElement("div", {
                        className: r(be.text, a && be.active)
                    }, o)), n.createElement("div", {
                        className: r(be.resolution, a && be.active)
                    }, (0, ve.getTranslatedResolution)(l))))
                }
            }
            Ce.contextType = _e;
            var ye = s(21212),
                fe = s(40816);
            const Se = a.t(null, {
                    context: "input"
                }, s(309633)),
                xe = (0, b.registryContextType)();
            class ke extends n.PureComponent {
                constructor(e, t) {
                    super(e, t), this._preventPhoneLayoutButtonClick = () => {
                        const {
                            onClose: e
                        } = this.props, {
                            resizerDetacher: t,
                            chartWidgetCollection: s
                        } = this.context;
                        s.setViewMode(ce.CollectionViewMode.Multichart), t.exitFullscreen(), e && e()
                    }, (0, b.validateRegistry)(t, {
                        onContentBoxChanged: o.any.isRequired,
                        computeContentBox: o.any.isRequired,
                        chartWidgetCollection: o.any.isRequired,
                        resizerDetacher: o.any.isRequired
                    })
                }
                componentDidMount() {
                    const {
                        onContentBoxChanged: e
                    } = this.context;
                    e.subscribe(this, this.forceUpdate)
                }
                componentWillUnmount() {
                    const {
                        onContentBoxChanged: e
                    } = this.context;
                    e.unsubscribe(this, this.forceUpdate)
                }
                render() {
                    const {
                        onClose: e
                    } = this.props, {
                        chartWidgetCollection: t,
                        computeContentBox: s
                    } = this.context, {
                        top: i,
                        left: a,
                        height: o,
                        width: l
                    } = s(), d = he.layouts[t.layout.value()].count, c = t.getAll().slice(0, d), u = o - 2, h = l + 4, m = h < u, p = c.length > 3, g = p ? 2 : 1, v = Math.ceil(c.length / g), b = m ? g : v, _ = m ? v : g, C = p || !m ? (h - 4 * b) / b : void 0, y = p || m ? (u - 4 * _) / _ : void 0;
                    return n.createElement("div", {
                        className: fe.container
                    }, n.createElement("div", {
                        className: fe.swatchContainerBackdrop,
                        style: {
                            top: i,
                            left: a,
                            height: o + 39,
                            width: l
                        }
                    }), n.createElement("div", {
                        className: fe.backdrop
                    }), n.createElement(ge.OutsideEvent, {
                        click: !0,
                        handler: e
                    }, (t => n.createElement("span", {
                        ref: t
                    }, n.createElement("div", {
                        className: r(fe.swatchContainer, m && !p && fe.column, p && fe.twoColumns),
                        style: {
                            top: i,
                            left: a,
                            height: u,
                            width: h
                        }
                    }, c.map(((t, s) => n.createElement(Ce, {
                        key: s,
                        width: C,
                        height: y,
                        chart: t,
                        onSelect: e
                    })))), n.createElement("div", {
                        className: fe.bottomToolbarContainer,
                        style: {
                            top: i + o,
                            left: a,
                            height: 39,
                            width: l
                        }
                    }, n.createElement(ee.ToolWidgetButton, {
                        className: fe.bottomToolbarButton,
                        isActive: !0,
                        icon: me[d],
                        title: Se,
                        onClick: e
                    }), n.createElement(ee.ToolWidgetButton, {
                        icon: ye,
                        className: fe.bottomToolbarButton,
                        onClick: this._preventPhoneLayoutButtonClick
                    }))))))
                }
            }
            ke.contextType = xe;
            const Ae = (0, pe.makeOverlapable)(ke);
            var Me = s(629902);
            const Ee = a.t(null, void 0, s(335397)),
                we = (0, b.registryContextType)();
            class je extends n.PureComponent {
                constructor(e, t) {
                    super(e, t), this._handleClick = () => {
                        const {
                            isOpened: e
                        } = this.state, t = e ? "mobileChartPickerClose" : "mobileChartPickerOpen";
                        ue.emit(t), this.setState({
                            isOpened: !e
                        })
                    }, this._handleLayoutChange = e => {
                        this.setState({
                            layoutChartsCount: he.layouts[e].count
                        })
                    }, this._handleLayoutChangeGlobalOpen = () => {
                        this.setState({
                            isOpened: !0
                        })
                    }, this._handleLayoutChangeGlobalClose = () => {
                        this.setState({
                            isOpened: !1
                        })
                    }, (0, b.validateRegistry)(t, {
                        chartWidgetCollection: o.any.isRequired
                    });
                    const {
                        chartWidgetCollection: s
                    } = t;
                    this.state = {
                        isOpened: !1,
                        layoutChartsCount: he.layouts[s.layout.value()].count
                    }
                }
                componentDidMount() {
                    const {
                        chartWidgetCollection: e
                    } = this.context;
                    e.layout.subscribe(this._handleLayoutChange), ue.subscribe(Me.openMobileChartPickerCommand, this._handleLayoutChangeGlobalOpen, null), ue.subscribe(Me.closeMobileChartPickerCommand, this._handleLayoutChangeGlobalClose, null)
                }
                componentWillUnmount() {
                    const {
                        chartWidgetCollection: e
                    } = this.context;
                    e.layout.unsubscribe(this._handleLayoutChange), ue.unsubscribe(Me.openMobileChartPickerCommand, this._handleLayoutChangeGlobalOpen, null), ue.unsubscribe(Me.closeMobileChartPickerCommand, this._handleLayoutChangeGlobalClose, null)
                }
                render() {
                    const {
                        className: e
                    } = this.props, {
                        isOpened: t,
                        layoutChartsCount: s
                    } = this.state, i = (0, L.ensureDefined)(me[s]);
                    return n.createElement(n.Fragment, null, n.createElement(ee.ToolWidgetButton, {
                        icon: i,
                        className: r("apply-common-tooltip", e),
                        title: Ee,
                        onClick: this._handleClick
                    }), n.createElement(Ae, {
                        isOpened: t,
                        onClose: this._handleClick
                    }))
                }
            }
            je.contextType = we;
            var We = s(850775);
            const Re = (0, b.registryContextType)();
            var Te = s(170873),
                ze = s(587080),
                Be = s(928089),
                De = s(132571),
                Pe = s(987017);
            const Ne = new te.TranslatedString("change session", a.t(null, void 0, s(765303))),
                Le = {
                    hint: a.t(null, void 0, s(25866)),
                    headerMenuText: a.t(null, void 0, s(644794))
                },
                Fe = (0, b.registryContextType)();
            class Oe extends n.PureComponent {
                constructor(e, t) {
                    super(e, t), (0, b.validateRegistry)(t, {
                        chartWidget: o.any.isRequired,
                        chartApiInstance: o.any.isRequired
                    }), this.state = {
                        availableSessions: []
                    }
                }
                componentDidMount() {
                    const {
                        chartWidget: e
                    } = this.context;
                    e.withModel(null, (() => {
                        const t = e.model();
                        t.model().mainSeries().dataEvents().symbolResolved().subscribe(this, this.updateSessionButton), t.model().mainSeries().properties().childs().sessionId.subscribe(this, this.updateSessionButton), this.updateSessionButton()
                    }))
                }
                componentWillUnmount() {
                    const {
                        chartWidget: e
                    } = this.context;
                    e.withModel(null, (() => {
                        const t = e.model();
                        t.model().mainSeries().dataEvents().symbolResolved().unsubscribe(this, this.updateSessionButton), t.model().mainSeries().properties().childs().sessionId.unsubscribe(this, this.updateSessionButton)
                    }))
                }
                render() {
                    const {
                        className: e,
                        withMenu: t
                    } = this.props, {
                        sessionName: s
                    } = this.state;
                    return n.createElement(d.ToolWidgetMenu, {
                        arrow: !1,
                        isDisabled: !t,
                        content: s,
                        className: e,
                        closeOnClickOutside: !0,
                        title: t ? Le.hint : void 0,
                        "data-name": "session-menu",
                        verticalDropDirection: c.VerticalDropDirection.FromBottomToTop,
                        verticalAttachEdge: c.VerticalAttachEdge.Top,
                        onClick: this._trackClick
                    }, this._menuItems())
                }
                updateSessionButton() {
                    var e, t;
                    const {
                        chartWidget: s
                    } = this.context;
                    if (!s.model()) return;
                    const n = s.model().mainSeries().symbolInfo();
                    if (null === n) return;
                    const i = n.subsession_id,
                        a = null !== (t = null === (e = n.subsessions) || void 0 === e ? void 0 : e.filter((e => !e.private))) && void 0 !== t ? t : [],
                        o = a.find((e => e.id === i));
                    this.setState({
                        sessionId: i,
                        sessionName: (0, De.translateSessionShortDescription)((null == o ? void 0 : o.description) || ""),
                        availableSessions: a
                    })
                }
                _menuItems() {
                    if (!this.props.withMenu) return [];
                    const {
                        chartWidget: e
                    } = this.context, {
                        availableSessions: t
                    } = this.state;
                    if (!e.model()) return [];
                    const s = e.model().mainSeries(),
                        i = [n.createElement(Be.ToolWidgetMenuSummary, {
                            key: "header_menu_text",
                            className: Pe.headerMenuText
                        }, Le.headerMenuText.toUpperCase())];
                    for (const a of t) {
                        const t = {
                                category: "SetSession",
                                event: a.id
                            },
                            o = () => {
                                e.model().setProperty(s.properties().childs().sessionId, a.id, Ne)
                            };
                        i.push(n.createElement(m.PopupMenuItem, {
                            key: a.id,
                            label: (0, De.translateSessionDescription)(a.description),
                            isActive: this.state.sessionId === a.id,
                            trackEventObject: t,
                            onClick: o
                        }))
                    }
                    return i
                }
                _trackClick() {
                    (0, y.trackButtonClick)("bottom toolbar", "session")
                }
            }
            Oe.contextType = Fe;
            const He = (0, b.registryContextType)(),
                Ie = new te.TranslatedString("adjust for contract changes", a.t(null, void 0, s(399511)));
            const Ue = (0, b.registryContextType)(),
                Ve = new te.TranslatedString("use settlement as close on daily interval", a.t(null, void 0, s(398402)));
            var qe = s(354145);
            const Ge = new te.TranslatedString("adjust data for dividends", a.t(null, void 0, s(342390)));

            function Ye(e) {
                var t, s, n, i;
                const a = null !== (s = null === (t = e.mainSeries().symbolInfo()) || void 0 === t ? void 0 : t.allowed_adjustment) && void 0 !== s ? s : "none";
                if ("dividends" === a || "splits" === a) return a;
                let o = "none";
                for (const t of e.symbolSources().filter(qe.isActingAsSymbolSource)) {
                    if (t.symbolHibernated().value()) continue;
                    const e = null !== (i = null === (n = t.symbolInfo()) || void 0 === n ? void 0 : n.allowed_adjustment) && void 0 !== i ? i : "none";
                    if ("any" === e) return "any";
                    "splits" === e && "dividends" !== o && (o = "splits"), "dividends" === e && (o = "dividends")
                }
                return o
            }
            const Ke = (0, b.registryContextType)();
            const Ze = (0, b.registryContextType)();
            class Qe extends n.PureComponent {
                constructor(e, t) {
                    super(e, t), this._handleClick = () => {
                        const {
                            resizerDetacher: e,
                            chartWidgetCollection: t
                        } = this.context;
                        t.setViewMode(ce.CollectionViewMode.Multichart), e.exitFullscreen()
                    }, (0, b.validateRegistry)(t, {
                        chartWidgetCollection: o.any.isRequired,
                        resizerDetacher: o.any.isRequired
                    })
                }
                render() {
                    const {
                        className: e
                    } = this.props;
                    return n.createElement(ee.ToolWidgetButton, {
                        icon: ye,
                        className: e,
                        onClick: this._handleClick
                    })
                }
            }
            Qe.contextType = Ze;
            var Je = s(821868),
                Xe = s(383863),
                $e = s(126756);
            const et = {
                    extLabel: a.t(null, void 0, s(208877)),
                    extHint: a.t(null, void 0, s(441421)),
                    percentageHint: a.t(null, void 0, s(843737)),
                    logLabel: a.t(null, {
                        context: "scale"
                    }, s(700885)),
                    logHint: a.t(null, void 0, s(21329)),
                    autoLabel: a.t(null, {
                        context: "scale"
                    }, s(399247)),
                    autoHint: a.t(null, void 0, s(860879)),
                    fullscreenHint: a.t(null, void 0, s(98948)),
                    adjLabel: a.t(null, {
                        context: "adjustments"
                    }, s(338219)),
                    adjHint: a.t(null, void 0, s(909994)),
                    adjForDividendsOnlyHint: a.t(null, void 0, s(601217)),
                    adjForSplitsOnlyHint: a.t(null, void 0, s(418540)),
                    backAdjustLabel: a.t(null, {
                        context: "adjustments"
                    }, s(153457)),
                    backAdjustHint: a.t(null, void 0, s(710989)),
                    settlementAsCloseLabel: a.t(null, {
                        context: "adjustments"
                    }, s(417077)),
                    settlementAsCloseHint: a.t(null, void 0, s(999983))
                },
                tt = {
                    any: et.adjHint,
                    dividends: et.adjForDividendsOnlyHint,
                    splits: et.adjForSplitsOnlyHint,
                    none: ""
                },
                st = (nt = e => n.createElement(ee.ToolWidgetButton, {
                    text: et.logLabel,
                    title: et.logHint,
                    className: e.className,
                    isActive: e.isLogarithm,
                    isGrouped: !0,
                    onClick: bt(e.onClick, "log", e.isLogarithm),
                    onMouseEnter: e.onMouseEnter,
                    onMouseLeave: e.onMouseLeave,
                    "data-name": "logarithm"
                }), (it = class extends n.PureComponent {
                    constructor(e, t) {
                        super(e, t), this._priceScale = null, this._handleSelect = () => {
                            const e = this.context.chartWidget.model(),
                                t = (0, L.ensureNotNull)(this.state.series),
                                s = t.priceScale(),
                                n = s.mode();
                            t.priceScale().isLockScale() || e.setPriceScaleMode({
                                log: !n.log
                            }, s, ae)
                        }, (0, b.validateRegistry)(t, {
                            chartWidget: o.any.isRequired
                        }), this.state = {
                            isActive: !1,
                            series: null
                        }, this._priceAxisHighlighter = new ne(this.context.chartWidget, (() => this._priceScale), "logarithm")
                    }
                    componentDidMount() {
                        const e = this.context.chartWidget;
                        e.withModel(null, (() => {
                            const t = e.model().mainSeries(),
                                s = t.priceScale();
                            this._handleMainSeriesPriceScaleChanged(s), t.priceScaleChanged().subscribe(this, this._handleMainSeriesPriceScaleChanged), this._handleModeChanged({}, s.mode()), this.setState({
                                isActive: t.priceScale().isLog(),
                                series: t
                            })
                        }))
                    }
                    componentWillUnmount() {
                        const e = this.context.chartWidget;
                        e.withModel(null, (() => {
                            e.model().mainSeries().priceScaleChanged().unsubscribe(this, this._handleMainSeriesPriceScaleChanged)
                        })), null !== this._priceScale && (this._priceScale.modeChanged().unsubscribeAll(this), this._priceScale = null), this._priceAxisHighlighter.destroy()
                    }
                    render() {
                        const {
                            className: e
                        } = this.props, {
                            isActive: t,
                            series: s
                        } = this.state;
                        return n.createElement(nt, { ...this._priceAxisHighlighter.handlers(),
                            className: e,
                            isLogarithm: t,
                            isDisabled: null === s,
                            onClick: this._handleSelect
                        })
                    }
                    _handleMainSeriesPriceScaleChanged(e) {
                        null !== this._priceScale && this._priceScale.modeChanged().unsubscribe(this, this._handleModeChanged), this._priceScale = e, this._priceScale.modeChanged().subscribe(this, this._handleModeChanged), this._handleModeChanged({}, e.mode())
                    }
                    _handleModeChanged(e, t) {
                        Boolean(t.log) !== this.state.isActive && this.setState({
                            isActive: Boolean(t.log)
                        })
                    }
                }).contextType = ie, it);
            var nt, it;
            const at = function(e) {
                    var t;
                    return (t = class extends n.PureComponent {
                        constructor(e, t) {
                            super(e, t), this._priceScale = null, this._handleSelect = () => {
                                const e = this.context.chartWidget.model(),
                                    t = (0, L.ensureNotNull)(this.state.series).priceScale(),
                                    s = t.mode();
                                e.setPriceScaleMode({
                                    autoScale: !s.autoScale
                                }, t, re)
                            }, (0, b.validateRegistry)(t, {
                                chartWidget: o.any.isRequired
                            }), this.state = {
                                isActive: !1,
                                series: null
                            }, this._priceAxisHighlighter = new ne(this.context.chartWidget, (() => this._priceScale), "auto")
                        }
                        componentDidMount() {
                            const e = this.context.chartWidget;
                            e.withModel(null, (() => {
                                const t = e.model().mainSeries(),
                                    s = t.priceScale();
                                this._handleMainSeriesPriceScaleChanged(s), t.priceScaleChanged().subscribe(this, this._handleMainSeriesPriceScaleChanged), this._handleModeChanged({}, s.mode()), this.setState({
                                    isActive: t.priceScale().isAutoScale(),
                                    series: t
                                })
                            }))
                        }
                        componentWillUnmount() {
                            const e = this.context.chartWidget;
                            e.withModel(null, (() => {
                                e.model().mainSeries().priceScaleChanged().unsubscribe(this, this._handleMainSeriesPriceScaleChanged)
                            })), null !== this._priceScale && (this._priceScale.modeChanged().unsubscribeAll(this), this._priceScale = null), this._priceAxisHighlighter.destroy()
                        }
                        render() {
                            const {
                                className: t
                            } = this.props, {
                                isActive: s,
                                series: i
                            } = this.state;
                            return n.createElement(e, { ...this._priceAxisHighlighter.handlers(),
                                className: t,
                                isAuto: s,
                                isDisabled: null === i,
                                onClick: this._handleSelect
                            })
                        }
                        _handleMainSeriesPriceScaleChanged(e) {
                            null !== this._priceScale && this._priceScale.modeChanged().unsubscribe(this, this._handleModeChanged), this._priceScale = e, this._priceScale.modeChanged().subscribe(this, this._handleModeChanged), this._handleModeChanged({}, e.mode())
                        }
                        _handleModeChanged(e, t) {
                            Boolean(t.autoScale) !== this.state.isActive && this.setState({
                                isActive: Boolean(t.autoScale)
                            })
                        }
                    }).contextType = oe, t
                }((e => n.createElement(ee.ToolWidgetButton, {
                    text: et.autoLabel,
                    title: et.autoHint,
                    className: e.className,
                    isActive: e.isAuto,
                    isGrouped: !0,
                    onClick: bt(e.onClick, "auto", e.isAuto),
                    onMouseEnter: e.onMouseEnter,
                    onMouseLeave: e.onMouseLeave,
                    "data-name": "auto"
                }))),
                ot = function(e) {
                    var t;
                    return (t = class extends n.PureComponent {
                        constructor(e, t) {
                            super(e, t), this._priceScale = null, this._handleSelect = () => {
                                const e = this.context.chartWidget.model(),
                                    t = (0, L.ensureNotNull)(this.state.series),
                                    s = t.priceScale(),
                                    n = s.mode();
                                t.priceScale().isLockScale() || e.setPriceScaleMode({
                                    percentage: !n.percentage
                                }, s, de)
                            }, (0, b.validateRegistry)(t, {
                                chartWidget: o.any.isRequired
                            }), this.state = {
                                isActive: !1,
                                series: null
                            }, this._priceAxisHighlighter = new ne(this.context.chartWidget, (() => this._priceScale), "percentage")
                        }
                        componentDidMount() {
                            const e = this.context.chartWidget;
                            e.withModel(null, (() => {
                                const t = e.model().mainSeries(),
                                    s = t.priceScale();
                                this._handleMainSeriesPriceScaleChanged(s), t.priceScaleChanged().subscribe(this, this._handleMainSeriesPriceScaleChanged), this._handleScaleChange({}, s.mode()), this.setState({
                                    isActive: t.priceScale().isPercentage(),
                                    series: t
                                })
                            }))
                        }
                        componentWillUnmount() {
                            const e = this.context.chartWidget;
                            e.withModel(null, (() => {
                                e.model().mainSeries().priceScaleChanged().unsubscribe(this, this._handleMainSeriesPriceScaleChanged)
                            })), null !== this._priceScale && (this._priceScale.modeChanged().unsubscribeAll(this), this._priceScale = null), this._priceAxisHighlighter.destroy()
                        }
                        render() {
                            const {
                                className: t
                            } = this.props, {
                                isActive: s,
                                series: i
                            } = this.state;
                            return n.createElement(e, { ...this._priceAxisHighlighter.handlers(),
                                className: t,
                                isPercentage: s,
                                isDisabled: null === i,
                                onClick: this._handleSelect
                            })
                        }
                        _handleMainSeriesPriceScaleChanged(e) {
                            null !== this._priceScale && this._priceScale.modeChanged().unsubscribe(this, this._handleScaleChange), this._priceScale = e,
                                this._priceScale.modeChanged().subscribe(this, this._handleScaleChange), this._handleScaleChange({}, e.mode())
                        }
                        _handleScaleChange(e, t) {
                            Boolean(t.percentage) !== this.state.isActive && this.setState({
                                isActive: Boolean(t.percentage)
                            })
                        }
                    }).contextType = le, t
                }((e => n.createElement(ee.ToolWidgetButton, {
                    icon: Je,
                    title: et.percentageHint,
                    className: e.className,
                    isActive: e.isPercentage,
                    isDisabled: e.isDisabled,
                    isGrouped: !0,
                    onClick: bt(e.onClick, "percent", e.isPercentage),
                    onMouseEnter: e.onMouseEnter,
                    onMouseLeave: e.onMouseLeave,
                    "data-name": "percentage"
                })));
            let rt, lt, dt;
            rt = function(e) {
                var t;
                return (t = class extends n.PureComponent {
                    constructor(e, t) {
                        super(e, t), this._handleAdjustChange = () => {
                            const e = (0, L.ensureNotNull)(this.state.undoModel).model();
                            this.setState({
                                allowedAdjustment: Ye(e),
                                adjustForDividendsEnabled: e.adjustForDividendsEnabled().value(),
                                adjustForDividendsAvailability: e.adjustForDividendsAvailability().value()
                            })
                        }, this._handleSelect = () => {
                            const e = this.context.chartWidget.model(),
                                t = e.mainSeries().properties().childs();
                            e.setProperty(t.dividendsAdjustment, !t.dividendsAdjustment.value(), Ge)
                        }, (0, b.validateRegistry)(t, {
                            chartWidget: o.any.isRequired
                        }), this.state = {
                            adjustForDividendsAvailability: 0,
                            adjustForDividendsEnabled: !1,
                            allowedAdjustment: "none",
                            undoModel: null
                        }
                    }
                    componentDidMount() {
                        const e = this.context.chartWidget;
                        e.withModel(null, (() => {
                            const t = e.model(),
                                s = t.model();
                            s.mainSeries().properties().childs().dividendsAdjustment.subscribe(this, this._handleAdjustChange), s.adjustForDividendsAvailability().subscribe(this._handleAdjustChange), s.adjustForDividendsEnabled().subscribe(this._handleAdjustChange), s.symbolSourceCollectionChanged().subscribe(this, this._handleAdjustChange), this.setState({
                                adjustForDividendsAvailability: s.adjustForDividendsAvailability().value(),
                                adjustForDividendsEnabled: s.adjustForDividendsEnabled().value(),
                                allowedAdjustment: Ye(s),
                                undoModel: t
                            })
                        }))
                    }
                    componentWillUnmount() {
                        const e = this.context.chartWidget;
                        e.withModel(null, (() => {
                            const t = e.model();
                            t.mainSeries().properties().childs().dividendsAdjustment.unsubscribeAll(this), t.model().adjustForDividendsAvailability().unsubscribe(this._handleAdjustChange), t.model().adjustForDividendsEnabled().unsubscribe(this._handleAdjustChange), t.model().symbolSourceCollectionChanged().unsubscribeAll(this)
                        }))
                    }
                    render() {
                        const {
                            className: t
                        } = this.props;
                        return n.createElement(e, {
                            className: t,
                            allowedAdjustment: this.state.allowedAdjustment,
                            adjustForDividendsEnabled: this.state.adjustForDividendsEnabled,
                            adjustForDividendsAvailability: this.state.adjustForDividendsAvailability,
                            onClick: this._handleSelect
                        })
                    }
                }).contextType = Ke, t
            }((e => n.createElement(ee.ToolWidgetButton, {
                text: et.adjLabel,
                title: tt[e.allowedAdjustment],
                className: e.className,
                isActive: e.adjustForDividendsEnabled,
                isDisabled: e.adjustForDividendsAvailability < 3,
                isGrouped: !0,
                onClick: bt(e.onClick, "adj", e.adjustForDividendsEnabled),
                "data-name": "adj"
            }))), lt = function(e) {
                var t;
                return (t = class extends n.PureComponent {
                    constructor(e, t) {
                        super(e, t), this._handleClick = () => {
                            const e = this.context.chartWidget.model(),
                                t = (0, L.ensureNotNull)(this.state.series).properties().childs();
                            (0,
                                W.trackEvent)("Continuous data options", "Adjust for contract changes - Toolbar", t.backAdjustment.value() ? "Off" : "On"), e.setProperty(t.backAdjustment, !t.backAdjustment.value(), Ie)
                        }, (0, b.validateRegistry)(t, {
                            chartWidget: o.any.isRequired
                        }), this.state = {
                            backAdjustmentAvailable: !1,
                            backAdjustmentEnabled: !1,
                            series: null
                        }
                    }
                    componentDidMount() {
                        const e = this.context.chartWidget;
                        e.withModel(null, (() => {
                            const t = e.model().mainSeries(),
                                s = t.properties().childs();
                            s.backAdjustment.subscribe(this, this._handleBackAdjustmentChange), t.isBackAdjustmentForbiddenProperty().subscribe(this, this._handleBackAdjustmentChange);
                            const n = !t.isBackAdjustmentForbiddenProperty().value();
                            this.setState({
                                backAdjustmentEnabled: n && s.backAdjustment.value(),
                                backAdjustmentAvailable: n,
                                series: t
                            })
                        }))
                    }
                    componentWillUnmount() {
                        const e = this.context.chartWidget;
                        e.withModel(null, (() => {
                            const t = e.model().mainSeries();
                            t.properties().childs().backAdjustment.unsubscribeAll(this), t.isBackAdjustmentForbiddenProperty().unsubscribeAll(this)
                        }))
                    }
                    render() {
                        const {
                            className: t
                        } = this.props, {
                            backAdjustmentAvailable: s,
                            backAdjustmentEnabled: i,
                            series: a
                        } = this.state;
                        return n.createElement(e, {
                            className: t,
                            backAdjustmentEnabled: i,
                            backAdjustmentAvailable: null !== a && s,
                            onClick: this._handleClick
                        })
                    }
                    _handleBackAdjustmentChange() {
                        const e = (0, L.ensureNotNull)(this.state.series),
                            t = e.properties().childs(),
                            s = !e.isBackAdjustmentForbiddenProperty().value();
                        this.setState({
                            backAdjustmentEnabled: s && t.backAdjustment.value(),
                            backAdjustmentAvailable: s
                        })
                    }
                }).contextType = He, t
            }((e => n.createElement(ee.ToolWidgetButton, {
                text: et.backAdjustLabel,
                title: et.backAdjustHint,
                className: e.className,
                isActive: e.backAdjustmentEnabled,
                isDisabled: !e.backAdjustmentAvailable,
                isGrouped: !0,
                onClick: e.onClick,
                "data-name": "backAdj"
            }))), dt = function(e) {
                var t;
                return (t = class extends n.PureComponent {
                    constructor(e, t) {
                        super(e, t), this._handleClick = () => {
                            const e = this.context.chartWidget.model(),
                                t = (0, L.ensureNotNull)(this.state.series).properties().childs();
                            (0, W.trackEvent)("Continuous data options", "Use settlement as close on daily interval - Toolbar", t.settlementAsClose.value() ? "Off" : "On"), e.setProperty(t.settlementAsClose, !t.settlementAsClose.value(), Ve)
                        }, (0, b.validateRegistry)(t, {
                            chartWidget: o.any.isRequired
                        }), this.state = {
                            settlementAsCloseAvailable: !1,
                            settlementAsCloseEnabled: !1,
                            series: null
                        }
                    }
                    componentDidMount() {
                        const e = this.context.chartWidget;
                        e.withModel(null, (() => {
                            const t = e.model().mainSeries(),
                                s = t.properties().childs();
                            s.settlementAsClose.subscribe(this, this._handleUseSettlementAsCloseChange), t.isSettlementAsCloseForbiddenProperty().subscribe(this, this._handleUseSettlementAsCloseChange);
                            const n = !t.isSettlementAsCloseForbiddenProperty().value();
                            this.setState({
                                settlementAsCloseEnabled: n && s.settlementAsClose.value(),
                                settlementAsCloseAvailable: n,
                                series: t
                            })
                        }))
                    }
                    componentWillUnmount() {
                        const e = this.context.chartWidget;
                        e.withModel(null, (() => {
                            const t = e.model().mainSeries();
                            t.properties().childs().settlementAsClose.unsubscribeAll(this), t.isSettlementAsCloseForbiddenProperty().unsubscribeAll(this)
                        }))
                    }
                    render() {
                        const {
                            className: t
                        } = this.props, {
                            settlementAsCloseAvailable: s,
                            settlementAsCloseEnabled: i,
                            series: a
                        } = this.state;
                        return n.createElement(e, {
                            className: t,
                            settlementAsCloseEnabled: i,
                            settlementAsCloseAvailable: null !== a && s,
                            onClick: this._handleClick
                        })
                    }
                    _handleUseSettlementAsCloseChange() {
                        const e = (0, L.ensureNotNull)(this.state.series),
                            t = e.properties().childs(),
                            s = !e.isSettlementAsCloseForbiddenProperty().value();
                        this.setState({
                            settlementAsCloseEnabled: s && t.settlementAsClose.value(),
                            settlementAsCloseAvailable: s
                        })
                    }
                }).contextType = Ue, t
            }((e => n.createElement(ee.ToolWidgetButton, {
                text: et.settlementAsCloseLabel,
                title: et.settlementAsCloseHint,
                className: e.className,
                isActive: e.settlementAsCloseEnabled,
                isDisabled: !e.settlementAsCloseAvailable,
                isGrouped: !0,
                onClick: e.onClick,
                "data-name": "settlementAsClose"
            })));
            const ct = (0, j.hotKeySerialize)({
                    keys: [(0, R.humanReadableModifiers)(R.Modifiers.Alt, !1), "Enter"],
                    text: "{0} + {1}"
                }),
                ut = function(e) {
                    var t;
                    return (t = class extends n.PureComponent {
                        constructor(e, t) {
                            super(e, t), this._handleClick = e => {
                                const {
                                    resizerDetacher: t,
                                    chartWidgetCollection: s
                                } = this.context;
                                e.shiftKey && t.detachable.value() ? t.detach() : this.state.isFullscreen ? t.exitFullscreen() : (s.setViewMode(ce.CollectionViewMode.ForceFullscreen), t.requestFullscreen())
                            }, this._handleLayoutChange = e => {
                                this.setState({
                                    isFullscreen: e
                                })
                            }, this._handlePhoneSize = () => {
                                this.setState({
                                    isChangeLayoutButton: this._isChangeLayoutButton()
                                })
                            }, (0, b.validateRegistry)(t, {
                                chartWidgetCollection: o.any.isRequired,
                                resizerDetacher: o.any.isRequired
                            });
                            const {
                                resizerDetacher: s
                            } = t;
                            this.state = {
                                isFullscreen: s.fullscreen.value(),
                                isChangeLayoutButton: this._isChangeLayoutButton()
                            }
                        }
                        componentDidMount() {
                            const {
                                resizerDetacher: e,
                                chartWidgetCollection: t
                            } = this.context, {
                                mobileChangeLayoutEnabled: s
                            } = this.props;
                            e.fullscreen.subscribe(this._handleLayoutChange), s && (t.viewMode.subscribe(this._handlePhoneSize), We.mediaState.on("changeDevice", this._handlePhoneSize))
                        }
                        componentWillUnmount() {
                            const {
                                resizerDetacher: e,
                                chartWidgetCollection: t
                            } = this.context, {
                                mobileChangeLayoutEnabled: s
                            } = this.props;
                            e.fullscreen.unsubscribe(this._handleLayoutChange), s && (t.viewMode.unsubscribe(this._handlePhoneSize), We.mediaState.off("changeDevice", this._handlePhoneSize))
                        }
                        render() {
                            const {
                                className: t
                            } = this.props, {
                                isFullscreen: s,
                                isChangeLayoutButton: i
                            } = this.state;
                            return i ? n.createElement(je, {
                                className: t
                            }) : n.createElement(e, {
                                className: t,
                                isFullscreen: s,
                                onClick: this._handleClick
                            })
                        }
                        _isChangeLayoutButton() {
                            {
                                const {
                                    chartWidgetCollection: e
                                } = this.context, {
                                    mobileChangeLayoutEnabled: t
                                } = this.props;
                                return Boolean(t) && We.mediaState.isPhoneSizeDevice() && e.viewMode.value() === ce.CollectionViewMode.ForceFullscreen
                            }
                        }
                    }).contextType = Re, t
                }((e => n.createElement(ee.ToolWidgetButton, {
                    icon: Xe,
                    title: et.fullscreenHint,
                    className: e.className,
                    isActive: e.isFullscreen,
                    onClick: bt(e.onClick, "maximize chart", e.isFullscreen),
                    "data-tooltip-hotkey": ct,
                    "data-name": "fullscreen"
                }))),
                ht = {
                    properties: !0,
                    fullscreen: !0,
                    preventPhoneLayout: !0
                },
                mt = {
                    fullscreen: Number.MIN_SAFE_INTEGER,
                    preventPhoneLayout: Number.MIN_SAFE_INTEGER,
                    properties: Number.MIN_SAFE_INTEGER,
                    separator: -2,
                    timeZones: -1,
                    auto: 0,
                    logarithm: 1,
                    percentage: 2,
                    session: 3,
                    adj: 4,
                    backAdj: 5,
                    settlementAsClose: 6
                },
                pt = (() => {
                    const e = new Map;
                    return e.set(st, "logarithm"), e.set(ot, "percentage"), e.set(at, "auto"), e.set(Oe, "session"), void 0 !== lt && e.set(lt, "backAdj"), void 0 !== dt && e.set(dt, "settlementAsClose"), void 0 !== rt && e.set(rt, "adj"), e.set(ut, "fullscreen"), e.set(Qe, "preventPhoneLayout"), e
                })(),
                gt = {
                    "1D": "1d",
                    "5D": "5d",
                    "1M": "1m",
                    "3M": "3m",
                    "6M": "6m",
                    YTD: "ytd",
                    "12M": "1y",
                    "60M": "5y",
                    ALL: "all"
                };

            function vt(e) {
                (0, W.trackEvent)("GUI", "Chart Bottom Toolbar", e)
            }

            function bt(e, t, s) {
                return n => {
                    e(n); {
                        const e = s ? "off" : "on";
                        (0, y.trackButtonClick)("bottom toolbar", t, e)
                    }
                }
            }
            const _t = {
                    dateRangeMode: "hidden",
                    separator: !0,
                    timeZones: !0,
                    fullscreen: !0,
                    preventPhoneLayout: !0,
                    properties: !0,
                    auto: !0,
                    logarithm: !0,
                    percentage: !0,
                    session: !0,
                    adj: !0,
                    backAdj: !0,
                    settlementAsClose: !0
                },
                Ct = (0, b.registryContextType)();
            class yt extends n.PureComponent {
                constructor(e, t) {
                    var s, a;
                    super(e, t), this._timezoneButtonRef = null, this._layout = Object.assign({}, _t), this._raf = null, this._toolbar = null, this._rangeExpanded = null, this._rangeCollapsed = null, this._seriesComponents = {}, this._resizeObserver = null, this._injector = (s = () => this._layout, a = (e, t) => this._seriesComponents[t] = e, (e, t, i) => {
                        if (n.isValidElement(e) && "string" != typeof e.type) {
                            const {
                                props: o
                            } = e;
                            if ("string" == typeof o.className) {
                                const l = {
                                        className: r(o.className, 0 === t && $e.first, t === i.length - 1 && $e.last)
                                    },
                                    d = s(),
                                    c = (0, L.ensureDefined)(pt.get(e.type));
                                return n.createElement("div", {
                                    key: null === e.key ? void 0 : e.key,
                                    className: r($e.inline, d[c] && $e.collapsed),
                                    ref: e => a(e, c),
                                    onClick: () => vt(c)
                                }, n.cloneElement(e, l))
                            }
                        }
                        return e
                    }), this._updateButtonsVisibility = () => {
                        const {
                            chartWidget: e
                        } = this.context, t = e.model().model(), s = t.mainSeries(), n = s.symbolInfo(), i = !s.isDWMProperty().value();
                        if (s.symbolResolvingActive().value()) return void this._setStateWithResize({
                            intervalAllowsSessionButton: i
                        });
                        const a = ((null == n ? void 0 : n.subsessions) || []).filter((e => !e.private)).length > 1;
                        const o = !s.isBackAdjustmentForbiddenProperty().value(),
                            r = !s.isSettlementAsCloseForbiddenProperty().value();
                        if (t.symbolSourceResolvingActive().value()) return void this._setStateWithResize({
                            intervalAllowsSessionButton: i,
                            symbolAllowsSessionButton: a,
                            symbolAllowsBackAdjustment: o,
                            symbolAllowsSettlementAsClose: r
                        });
                        const l = t.adjustForDividendsAvailability().value() > 0;
                        this._setStateWithResize({
                            intervalAllowsSessionButton: i,
                            symbolAllowsSessionButton: a,
                            symbolAllowsBackAdjustment: o,
                            symbolAllowsSettlementAsClose: r,
                            symbolAllowsAdjButton: l
                        })
                    }, this._handleResize = () => {
                        null === this._raf && (this._raf = requestAnimationFrame((() => {
                            const e = this._layout,
                                t = (0, L.ensureNotNull)(this._toolbar),
                                s = (0, L.ensureNotNull)(this._rangeExpanded),
                                n = (a = function(e) {
                                    const t = {};
                                    return Object.keys(e).forEach((s => {
                                        const n = e[s];
                                        if (null !== n) {
                                            const e = i.findDOMNode(n);
                                            null !== e && (t[s] = e)
                                        }
                                    })), t
                                }(this._seriesComponents), Object.keys(a).map((e => ({
                                    name: e,
                                    width: a[e].offsetWidth
                                }))).sort(((e, t) => mt[e.name] - mt[t.name])));
                            var a;
                            const o = t.offsetWidth,
                                r = n.reduce(((e, t) => e + t.width), 0),
                                l = s.offsetWidth,
                                d = !Boolean(s.textContent) || o - r - l <= 0 ? "collapsed" : "expanded";
                            if (Object.assign(e, {
                                    dateRangeMode: d
                                }),
                                "expanded" !== d) {
                                const t = o - (0, L.ensureNotNull)(this._rangeCollapsed).offsetWidth - 0;
                                let s = 0,
                                    i = 0;
                                for (const a of n) s += a.width, a.name in ht ? (i += a.width, Object.assign(e, {
                                    [a.name]: !1
                                })) : Object.assign(e, {
                                    [a.name]: t <= s
                                });
                                t <= i && Object.assign(e, {
                                    dateRangeMode: "hidden"
                                })
                            } else Object.assign(e, {
                                separator: !1,
                                timeZones: !1,
                                fullscreen: !1,
                                preventPhoneLayout: !1,
                                properties: !1,
                                auto: !1,
                                logarithm: !1,
                                percentage: !1,
                                session: !1,
                                adj: !1,
                                settlementAsClose: !1,
                                backAdj: !1
                            });
                            this._applyResizing(), this._raf = null
                        })))
                    }, this._handleTimezoneButtonRef = e => {
                        this._timezoneButtonRef = e
                    }, this._handleMeasure = () => {
                        null !== this._toolbar && this.resizeUI()
                    }, this._handleFullscreenableChange = e => {
                        this._setStateWithResize({
                            isFullscreenable: e
                        }), this._handlePreventPhoneLayoutButtonVisibility()
                    }, this._handlePreventPhoneLayoutButtonVisibility = () => {
                        this._setStateWithResize({
                            isPreventPhoneLayoutButton: this._isPreventPhoneLayoutButton()
                        })
                    }, this._handleToolbarRef = e => this._toolbar = e, this._handleRangeCollapsedRef = e => this._rangeCollapsed = e, this._handleRangeExpandedRef = e => {
                        this._updateResizeObserver(this._rangeExpanded, e), this._rangeExpanded = e
                    }, this._handleTimeZonesRef = e => {
                        this._updateResizeObserver(this._seriesComponents.timeZones, e), this._seriesComponents.timeZones = e
                    }, this._handleSessionsRef = e => {
                        this._updateResizeObserver(this._seriesComponents.session, e), this._seriesComponents.session = e
                    }, this._handleSeparatorRef = e => {
                        this._seriesComponents.separator = e
                    }, this._updateResizeObserver = (e, t) => {
                        this._resizeObserver && e !== t && (e && this._resizeObserver.unobserve(e), t && this._resizeObserver.observe(t))
                    }, (0, b.validateRegistry)(t, {
                        onContentBoxChanged: o.any.isRequired,
                        chartApiInstance: o.any.isRequired,
                        chartWidget: o.any.isRequired,
                        chartWidgetCollection: o.any.isRequired,
                        resizerDetacher: o.any.isRequired
                    });
                    const {
                        resizerDetacher: l
                    } = this.context;
                    this.state = {
                        isFullscreenable: l.fullscreenable.value(),
                        isPreventPhoneLayoutButton: this._isPreventPhoneLayoutButton()
                    }, this._resizeObserver = new ResizeObserver(this._handleMeasure)
                }
                componentDidMount() {
                    const {
                        onContentBoxChanged: e,
                        resizerDetacher: t,
                        chartWidgetCollection: s,
                        chartWidget: n
                    } = this.context;
                    e.subscribe(this, this._handleResize), We.mediaState.on("changeDevice", this._handlePreventPhoneLayoutButtonVisibility), s.viewMode.subscribe(this._handlePreventPhoneLayoutButtonVisibility), t.fullscreenable.subscribe(this._handleFullscreenableChange), n.withModel(null, (() => {
                        const e = n.model(),
                            t = e.model();
                        e.mainSeries().isDWMProperty().subscribe(this, this._updateButtonsVisibility), t.symbolSourceResolvingActive().subscribe(this._updateButtonsVisibility), t.symbolSourceCollectionChanged().subscribe(this, this._updateButtonsVisibility), e.mainSeries().isBackAdjustmentForbiddenProperty().subscribe(this, this._updateButtonsVisibility), e.mainSeries().isSettlementAsCloseForbiddenProperty().subscribe(this, this._updateButtonsVisibility), this._updateButtonsVisibility()
                    })), this.updateTimezonesButton(), this.resizeUI()
                }
                componentWillUnmount() {
                    var e;
                    const {
                        onContentBoxChanged: t,
                        resizerDetacher: s,
                        chartWidgetCollection: n,
                        chartWidget: i
                    } = this.context;
                    t.unsubscribe(this, this._handleResize),
                        We.mediaState.off("changeDevice", this._handlePreventPhoneLayoutButtonVisibility), n.viewMode.unsubscribe(this._handlePreventPhoneLayoutButtonVisibility), s.fullscreenable.unsubscribe(this._handleFullscreenableChange), null === (e = this._resizeObserver) || void 0 === e || e.disconnect(), i.withModel(null, (() => {
                            const e = i.model(),
                                t = e.model();
                            e.mainSeries().isDWMProperty().unsubscribe(this, this._updateButtonsVisibility), e.mainSeries().isBackAdjustmentForbiddenProperty().unsubscribe(this, this._updateButtonsVisibility), e.mainSeries().isSettlementAsCloseForbiddenProperty().unsubscribe(this, this._updateButtonsVisibility), t.symbolSourceCollectionChanged().unsubscribe(this, this._updateButtonsVisibility), t.symbolSourceResolvingActive().unsubscribe(this._updateButtonsVisibility)
                        })), null !== this._raf && (cancelAnimationFrame(this._raf), this._raf = null)
                }
                render() {
                    const e = this._layout,
                        {
                            timeFramesWidgetEnabled: t,
                            timeWidgetEnabled: s,
                            percentageScaleButtonEnabled: i,
                            logScaleButtonEnabled: a,
                            autoScaleButtonEnabled: o,
                            fullscreenButtonEnabled: d
                        } = this.props;
                    return n.createElement("div", {
                        className: $e.toolbar,
                        ref: this._handleToolbarRef,
                        onContextMenu: ze.preventDefault
                    }, t && n.createElement(Te.FragmentMap, null, n.createElement("div", {
                        className: r($e.dateRangeWrapper, "collapsed" !== e.dateRangeMode && $e.collapsed),
                        ref: this._handleRangeCollapsedRef
                    }, n.createElement("div", {
                        className: r($e.dateRangeCollapsed)
                    }, n.createElement(A, {
                        goToDateButton: this.props.goToDateEnabled
                    }))), n.createElement("div", {
                        className: r($e.dateRangeWrapper, "expanded" !== e.dateRangeMode && $e.collapsed),
                        ref: this._handleRangeExpandedRef
                    }, n.createElement("div", {
                        className: r($e.dateRangeExpanded)
                    }, n.createElement(E, {
                        onSelectRange: this._trackRangeButtonClick
                    }), this.props.goToDateEnabled && n.createElement($.Separator, null), this.props.goToDateEnabled && n.createElement(N, null)))), n.createElement("div", {
                        className: $e.seriesControlWrapper
                    }, s && n.createElement("div", {
                        className: r($e.inline, e.timeZones && $e.collapsed),
                        ref: this._handleTimeZonesRef
                    }, n.createElement("div", {
                        className: $e.inline,
                        onClick: this._trackTimezonesButtonClick
                    }, n.createElement(X, {
                        className: $e.timezone,
                        withMenu: this.props.timezoneMenuEnabled,
                        ref: this._handleTimezoneButtonRef
                    }))), this.props.sessionIdButtonEnabled && this.state.symbolAllowsSessionButton && this.state.intervalAllowsSessionButton && n.createElement("div", {
                        className: r($e.inline, e.session && $e.collapsed),
                        ref: this._handleSessionsRef
                    }, n.createElement("div", {
                        className: $e.inline
                    }, n.createElement(Oe, {
                        className: $e.session,
                        withMenu: this.props.sessionIdButtonEnabled
                    }))), n.createElement("div", {
                        ref: this._handleSeparatorRef,
                        className: r($e.inline, e.separator && $e.collapsed)
                    }, n.createElement($.Separator, null)), n.createElement(Te.FragmentMap, {
                        map: this._injector
                    }, void 0 !== rt && this.props.adjustForDividendsButtonEnabled && this.state.symbolAllowsAdjButton && n.createElement(rt, {
                        className: $e.item
                    }), void 0 !== lt && this.props.backAdjustmentButtonEnabled && this.state.symbolAllowsBackAdjustment && n.createElement(lt, {
                        className: $e.item
                    }), void 0 !== dt && this.props.settlementAsCloseButtonEnabled && this.state.symbolAllowsSettlementAsClose && n.createElement(dt, {
                        className: $e.item
                    }), i && !l.enabled("fundamental_widget") && n.createElement(ot, {
                        className: $e.icon
                    }), a && n.createElement(st, {
                        className: $e.item
                    }), o && n.createElement(at, {
                        className: $e.item
                    }), d && this.state.isFullscreenable && n.createElement(ut, {
                        className: $e.icon,
                        mobileChangeLayoutEnabled: this.props.mobileChangeLayoutEnabled
                    }), this.props.fullscreenButtonEnabled && this.props.mobileChangeLayoutEnabled && this.state.isPreventPhoneLayoutButton && n.createElement(Qe, {
                        className: $e.icon
                    }))))
                }
                updateTimezonesButton() {
                    null !== this._timezoneButtonRef && this._timezoneButtonRef.updateTimezonesButton()
                }
                resizeUI() {
                    this._handleResize()
                }
                _trackRangeButtonClick(e) {
                    {
                        const t = gt[e.value.value];
                        t && (0, y.trackButtonClick)("bottom toolbar", t)
                    }
                }
                _trackTimezonesButtonClick() {
                    vt("timeZones"), (0, y.trackButtonClick)("bottom toolbar", "timezone")
                }
                _setStateWithResize(e) {
                    Object.assign(this._layout, _t), this._applyResizing(), this.setState(e, (() => this._handleResize()))
                }
                _applyResizing() {
                    const {
                        dateRangeMode: e,
                        ...t
                    } = this._layout;
                    this._rangeExpanded && this._rangeExpanded.classList.toggle($e.collapsed, "expanded" !== e), this._rangeCollapsed && this._rangeCollapsed.classList.toggle($e.collapsed, "collapsed" !== e), Object.keys(t).forEach((e => {
                        const s = e,
                            n = this._seriesComponents[s];
                        n && n.classList.toggle($e.collapsed, t[s])
                    }))
                }
                _isPreventPhoneLayoutButton() {
                    {
                        const {
                            chartWidgetCollection: e,
                            resizerDetacher: t
                        } = this.context;
                        return t.fullscreenable.value() && se.CheckMobile.any() && We.mediaState.isPhoneSizeDevice() && e.viewMode.value() === ce.CollectionViewMode.ForceFullscreen
                    }
                }
            }
            yt.contextType = Ct;
            const ft = {
                onContentBoxChanged: o.any,
                computeContentBox: o.any,
                chartWidget: o.any,
                chartApiInstance: o.any,
                chartWidgetCollection: o.any,
                resizerDetacher: o.any,
                availableTimeFrames: o.any
            };
            class St extends n.PureComponent {
                constructor(e) {
                    super(e), this._setActiveChart = e => {
                        this._defineRegistry(e), this.setState({
                            chartWidget: e
                        })
                    };
                    const t = this.props.chartWidgetCollection.activeChartWidget.value();
                    this.state = {
                        chartWidget: t
                    }, this._defineRegistry(t)
                }
                componentDidMount() {
                    this.props.chartWidgetCollection.activeChartWidget.subscribe(this._setActiveChart)
                }
                componentWillUnmount() {
                    this.props.chartWidgetCollection.activeChartWidget.unsubscribe(this._setActiveChart)
                }
                render() {
                    const {
                        chartWidget: e
                    } = this.state;
                    if (!e) return null;
                    const {
                        options: t
                    } = this.props, s = {
                        timeFramesWidgetEnabled: t.timeFramesWidgetEnabled,
                        goToDateEnabled: t.timeFramesWidget.goToDateEnabled,
                        timeWidgetEnabled: t.timeWidgetEnabled,
                        timezoneMenuEnabled: t.timeWidget && t.timeWidget.timezoneMenuEnabled,
                        sessionIdButtonEnabled: t.sessionIdButtonEnabled,
                        backAdjustmentButtonEnabled: t.backAdjustmentButtonEnabled,
                        settlementAsCloseButtonEnabled: t.settlementAsCloseButtonEnabled,
                        adjustForDividendsButtonEnabled: t.adjustForDividendsButtonEnabled,
                        logScaleButtonEnabled: t.logScaleButtonEnabled,
                        percentageScaleButtonEnabled: t.percentageScaleButtonEnabled,
                        autoScaleButtonEnabled: t.autoScaleButtonEnabled,
                        fullscreenButtonEnabled: t.fullscreenButtonEnabled,
                        mobileChangeLayoutEnabled: t.mobileChangeLayoutEnabled
                    };
                    return n.createElement(b.RegistryProvider, {
                        validation: ft,
                        value: this._registry
                    }, n.createElement(yt, {
                        key: e.id(),
                        ...s
                    }))
                }
                _defineRegistry(e) {
                    const {
                        onContentBoxChanged: t,
                        computeContentBox: s,
                        chartApiInstance: n,
                        chartWidgetCollection: i,
                        options: {
                            timeFramesWidgetEnabled: a,
                            timeFramesWidget: o
                        }
                    } = this.props, r = a ? o.availableTimeFrames : void 0;
                    this._registry = {
                        onContentBoxChanged: t,
                        computeContentBox: s,
                        chartWidget: e,
                        availableTimeFrames: r,
                        chartApiInstance: n,
                        chartWidgetCollection: i,
                        resizerDetacher: e.getResizerDetacher()
                    }
                }
            }
            class xt {
                constructor(e, t, s, a, o, r, l) {
                    this._container = e;
                    const d = n.createElement(St, {
                        onContentBoxChanged: t,
                        computeContentBox: s,
                        chartWidgetCollection: a,
                        chartApiInstance: o,
                        chartWidgetOptions: r,
                        options: l
                    });
                    i.render(d, e), e.setAttribute("data-initialized", "true")
                }
                destroy() {
                    i.unmountComponentAtNode(this._container), this._container.removeAttribute("data-initialized")
                }
            }
        },
        629902: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                openMobileChartPickerCommand: () => n,
                closeMobileChartPickerCommand: () => i
            });
            const n = "OPEN_MOBILE_CHART_PICKER_COMMAND",
                i = "CLOSE_MOBILE_CHART_PICKER_COMMAND"
        },
        591419: (e, t, s) => {
            "use strict";
            s.d(t, {
                Separator: () => o
            });
            var n = s(50959),
                i = s(497754),
                a = s(792194);

            function o(e) {
                return n.createElement("span", {
                    className: i(a.separator, e.className)
                })
            }
        },
        1574: (e, t, s) => {
            "use strict";
            s.d(t, {
                trackButtonClick: () => i
            });
            var n = s(776734);

            function i(e, t, s, i) {
                (0, n.getTracker)().then((n => {
                    null !== n && n.trackToolbarButtonClick(e, s ? `${t} ${s}` : t, i)
                }))
            }
        },
        675791: (e, t, s) => {
            "use strict";
            s.d(t, {
                RangeBinding: () => o
            });
            var n = s(869403),
                i = s.n(n),
                a = s(495046);
            class o {
                constructor(e) {
                    this._state = {
                        ranges: []
                    }, this._change = new(i()), this._rangeChangedListenerBound = this._onRangeChanged.bind(this);
                    const {
                        chartWidget: t
                    } = this._context = e;
                    t.withModel(null, (() => {
                        const e = t.model(),
                            s = e.mainSeries();
                        s.onStatusChanged().subscribe(this, this._updateAvailableRanges), a.enabled("update_timeframes_set_on_symbol_resolve") && s.dataEvents().symbolResolved().subscribe(this, this._updateAvailableRanges), s.priceScale().properties().childs().lockScale.subscribe(this, this._updateAvailableRanges);
                        const n = e.model().appliedTimeFrame();
                        n.subscribe(this._rangeChangedListenerBound), this._rangeChangedListenerBound(n.value()), this._updateAvailableRanges()
                    }))
                }
                state() {
                    return this._state
                }
                onChange() {
                    return this._change
                }
                selectRange(e) {
                    this._setState({
                        activeRange: e.value.value
                    });
                    const {
                        chartWidgetCollection: t
                    } = this._context, s = {
                        val: e.value,
                        res: e.targetResolution
                    };
                    t.setTimeFrame(s)
                }
                destroy() {
                    const {
                        chartWidget: e
                    } = this._context;
                    e.withModel(null, (() => {
                        const t = e.model(),
                            s = t.mainSeries();
                        s.onStatusChanged().unsubscribe(this, this._updateAvailableRanges), a.enabled("update_timeframes_set_on_symbol_resolve") && s.dataEvents().symbolResolved().unsubscribe(this, this._updateAvailableRanges), s.priceScale().properties().childs().lockScale.unsubscribe(this, this._updateAvailableRanges), t.model().appliedTimeFrame().unsubscribe(this._rangeChangedListenerBound)
                    })), this._change.destroy()
                }
                _setState(e) {
                    this._state = Object.assign({}, this._state, e), this._change.fire(this._state)
                }
                _onRangeChanged(e) {
                    let t;
                    null !== e && "period-back" === e.val.type && (t = e.val.value), this._setState({
                        activeRange: t
                    })
                }
                _updateAvailableRanges() {
                    const {
                        availableTimeFrames: e,
                        chartWidget: t
                    } = this._context;
                    if (!t.hasModel()) return;
                    const s = t.model().mainSeries(),
                        n = s.status();
                    if (2 === n || 1 === n) return;
                    const i = e(s.symbolInfo(), s.status());
                    0 !== i.length && this._setState({
                        ranges: i
                    })
                }
            }
        },
        231656: (e, t, s) => {
            "use strict";
            s.d(t, {
                validateRegistry: () => r,
                RegistryProvider: () => l,
                useRegistry: () => d,
                registryContextType: () => c
            });
            var n = s(50959),
                i = s(719036),
                a = s.n(i);
            const o = n.createContext({});

            function r(e, t) {
                a().checkPropTypes(t, e, "context", "RegistryContext")
            }

            function l(e) {
                const {
                    validation: t,
                    value: s
                } = e;
                return r(s, t), n.createElement(o.Provider, {
                    value: s
                }, e.children)
            }

            function d(e) {
                const t = (0, n.useContext)(o);
                return r(t, e), t
            }

            function c() {
                return o
            }
        },
        383863: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="none" stroke="currentColor" d="M11 1.5h3.5a2 2 0 0 1 2 2V7m0 5v2.5a2 2 0 0 1-2 2H11m-4 0H3.5a2 2 0 0 1-2-2V11m0-4V3.5a2 2 0 0 1 2-2H7"/></svg>'
        },
        257294: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="none" stroke="currentColor" d="M11 1.5h3.5a2 2 0 0 1 2 2V7m0 5v2.5a2 2 0 0 1-2 2H11m-4 0H3.5a2 2 0 0 1-2-2V11m0-4V3.5a2 2 0 0 1 2-2H7"/><path fill="currentColor" d="M8.012 8.623a2.238 2.238 0 0 1-.817-.747 1.766 1.766 0 0 1-.317-.988c0-.584.197-1.046.591-1.386.398-.34.91-.51 1.536-.51.677 0 1.202.17 1.574.51.372.34.559.804.559 1.391 0 .344-.113.695-.339 1.053-.225.354-.487.616-.784.784.945.53 1.418 1.226 1.418 2.09 0 .726-.218 1.29-.655 1.691-.437.398-1.037.596-1.8.596-1.59 0-2.384-.762-2.384-2.288 0-.44.136-.873.408-1.3.272-.426.609-.725 1.01-.896zm1.316-.333c.487-.459.73-.933.73-1.424 0-.293-.098-.526-.295-.698-.194-.175-.446-.263-.758-.263-.701 0-1.052.324-1.052.972 0 .48.458.95 1.375 1.413zm-.478.8c-.788.426-1.182 1.002-1.182 1.73 0 .39.122.717.365.982.244.262.559.392.946.392.4 0 .73-.129.988-.386.261-.258.392-.588.392-.989 0-.29-.09-.562-.269-.816-.179-.258-.592-.562-1.24-.913z"/></svg>'
        },
        992320: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="none" stroke="currentColor" d="M11 1.5h3.5a2 2 0 0 1 2 2V7m0 5v2.5a2 2 0 0 1-2 2H11m-4 0H3.5a2 2 0 0 1-2-2V11m0-4V3.5a2 2 0 0 1 2-2H7"/><path fill="currentColor" d="M7.362 9.16l-.365-.253V5.1h3.915v.913H8.017v1.912c.265-.197.602-.295 1.01-.295.73 0 1.287.218 1.67.655.387.437.58 1.058.58 1.864 0 1.973-.879 2.96-2.637 2.96-.734 0-1.343-.205-1.826-.613l.414-.897c.487.398.956.596 1.407.596 1.01 0 1.514-.63 1.514-1.89 0-1.175-.497-1.762-1.493-1.762-.48 0-.911.206-1.294.618z"/></svg>'
        },
        689558: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="none" stroke="currentColor" d="M11 1.5h3.5a2 2 0 0 1 2 2V7m0 5v2.5a2 2 0 0 1-2 2H11m-4 0H3.5a2 2 0 0 1-2-2V11m0-4V3.5a2 2 0 0 1 2-2H7"/><path fill="currentColor" d="M10.853 10.857V13h-1.02v-2.143H6.25v-.612l4.227-5.146h.376v4.93h.795v.828h-.795zm-1.02-3.615l-2.31 2.788h2.31V7.242z"/></svg>'
        },
        21212: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M11 2v2.5A2.5 2.5 0 0 0 13.5 7H16V6h-2.5A1.5 1.5 0 0 1 12 4.5V2h-1zm2.5 9a2.5 2.5 0 0 0-2.5 2.5V16h1v-2.5c0-.83.67-1.5 1.5-1.5H16v-1h-2.5zm-9 1H2v-1h2.5A2.5 2.5 0 0 1 7 13.5V16H6v-2.5c0-.83-.67-1.5-1.5-1.5zM7 4.5V2H6v2.5C6 5.33 5.33 6 4.5 6H2v1h2.5A2.5 2.5 0 0 0 7 4.5z"/></svg>'
        },
        643745: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="none" stroke="currentColor" d="M11 1.5h3.5a2 2 0 0 1 2 2V7m0 5v2.5a2 2 0 0 1-2 2H11m-4 0H3.5a2 2 0 0 1-2-2V11m0-4V3.5a2 2 0 0 1 2-2H7"/><path fill="currentColor" d="M9.725 4.992l.521.574c-.315.126-.772.55-1.37 1.273-.594.72-.923 1.275-.988 1.665.297-.286.711-.43 1.24-.43.696 0 1.252.223 1.671.667.42.444.629 1.054.629 1.831 0 .77-.217 1.39-.65 1.859-.43.469-.97.703-1.622.703-1.726 0-2.59-1.144-2.59-3.432 0-.952.337-1.926 1.01-2.922.677-.999 1.394-1.595 2.15-1.788zm-2.03 5.548c0 1.12.46 1.681 1.38 1.681.387 0 .691-.145.913-.435.226-.293.339-.68.339-1.16 0-.498-.118-.895-.355-1.192a1.114 1.114 0 0 0-.913-.446c-.91 0-1.364.517-1.364 1.552z"/></svg>'
        },
        890442: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="none" stroke="currentColor" d="M11 1.5h3.5a2 2 0 0 1 2 2V7m0 5v2.5a2 2 0 0 1-2 2H11m-4 0H3.5a2 2 0 0 1-2-2V11m0-4V3.5a2 2 0 0 1 2-2H7"/><path fill="currentColor" d="M6.701 12.441l.516-.827c.35.387.795.58 1.332.58.995 0 1.493-.487 1.493-1.46 0-.445-.145-.804-.435-1.08-.29-.28-.675-.42-1.155-.42h-.086v-.87h.049c.91 0 1.364-.4 1.364-1.202 0-.838-.428-1.257-1.284-1.257-.465 0-.836.156-1.112.467l-.478-.73c.333-.434.89-.65 1.67-.65.688 0 1.249.184 1.682.553.433.365.65.834.65 1.407 0 .437-.122.824-.366 1.16-.24.337-.522.562-.848.677.451.147.81.398 1.074.752.269.35.403.777.403 1.278 0 .73-.231 1.295-.693 1.692-.462.398-1.11.596-1.944.596-.351 0-.695-.064-1.032-.193-.336-.132-.603-.29-.8-.473z"/></svg>'
        },
        972855: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="none" stroke="currentColor" d="M11 1.5h3.5a2 2 0 0 1 2 2V7m0 5v2.5a2 2 0 0 1-2 2H11m-4 0H3.5a2 2 0 0 1-2-2V11m0-4V3.5a2 2 0 0 1 2-2H7"/><path fill="currentColor" d="M6.486 13v-.215L8.952 9.01c.515-.791.773-1.462.773-2.014 0-.727-.41-1.09-1.23-1.09-.29 0-.562.077-.816.23-.255.151-.439.343-.554.575l-.692-.569c.121-.35.36-.63.714-.838.358-.207.79-.311 1.294-.311.756 0 1.347.175 1.773.526.426.347.639.84.639 1.477 0 .59-.283 1.336-.849 2.234l-1.767 2.804h3.083V13H6.486z"/></svg>'
        },
        915270: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M1.5 8V6.5m7.5 9h5.5a2 2 0 0 0 2-2v-7m-15 0v-2c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v2m-15 0h15"/><path fill="currentColor" d="M5 1h1v3H5V1zM12 1h1v3h-1V1z"/><path stroke="currentColor" d="M0 12.5h7.5m0 0L4 16m3.5-3.5L4 9"/></svg>'
        },
        338219: e => {
            e.exports = {
                ar: ["تعديل"],
                ca_ES: ["aj"],
                cs: "adj",
                de: ["Anp."],
                el: "adj",
                en: "adj",
                es: ["aj"],
                fa: "adj",
                fr: "adj",
                he_IL: ["התאם"],
                hu_HU: "adj",
                id_ID: ["penyesuaian"],
                it: ["adg"],
                ja: ["調整"],
                ko: ["조정"],
                ms_MY: ["laras"],
                nl_NL: "adj",
                pl: "adj",
                pt: ["ajustes"],
                ro: "adj",
                ru: ["коррект."],
                sv: "adj",
                th: "adj",
                tr: ["dzlt"],
                vi: ["đ.chỉnh"],
                zh: ["调整"],
                zh_TW: ["調整"]
            }
        },
        153457: e => {
            e.exports = {
                ar: "b-adj",
                ca_ES: "b-adj",
                cs: "b-adj",
                de: "b-adj",
                el: "b-adj",
                en: "b-adj",
                es: "b-adj",
                fa: "b-adj",
                fr: "b-adj",
                he_IL: "b-adj",
                hu_HU: "b-adj",
                id_ID: "b-adj",
                it: ["b-adg"],
                ja: "b-adj",
                ko: "b-adj",
                ms_MY: "b-adj",
                nl_NL: "b-adj",
                pl: "b-adj",
                pt: "b-adj",
                ro: "b-adj",
                ru: ["корр"],
                sv: "b-adj",
                th: "b-adj",
                tr: "b-adj",
                vi: "b-adj",
                zh: ["b-调整"],
                zh_TW: ["b-調整"]
            }
        },
        417077: e => {
            e.exports = {
                ar: ["ضبط"],
                ca_ES: "set",
                cs: "set",
                de: ["setzen"],
                el: "set",
                en: "set",
                es: "set",
                fa: "set",
                fr: ["fixer"],
                he_IL: ["הגדר"],
                hu_HU: "set",
                id_ID: ["SET"],
                it: "set",
                ja: "set",
                ko: ["셋"],
                ms_MY: "set",
                nl_NL: "set",
                pl: ["ustaw"],
                pt: ["definir"],
                ro: "set",
                ru: ["расч.цена"],
                sv: ["ställ in"],
                th: "set",
                tr: "set",
                vi: "set",
                zh: ["清算价"],
                zh_TW: ["清算價"]
            }
        },
        309633: e => {
            e.exports = {
                ar: ["إغلاق"],
                ca_ES: ["Tancament"],
                cs: "Close",
                de: "Close",
                el: "Close",
                en: "Close",
                es: ["Cierre"],
                fa: "Close",
                fr: ["Fermeture"],
                he_IL: ["סגירה"],
                hu_HU: ["Zárás"],
                id_ID: ["Tutup"],
                it: ["Chiudi"],
                ja: ["閉じる"],
                ko: ["닫기"],
                ms_MY: ["Tutup"],
                nl_NL: "Close",
                pl: ["Zamknij"],
                pt: ["Fechar"],
                ro: "Close",
                ru: ["Закрыть"],
                sv: ["Stängning"],
                th: ["ปิด"],
                tr: ["Kapat"],
                vi: ["Đóng"],
                zh: ["关闭"],
                zh_TW: ["關閉"]
            }
        },
        399247: e => {
            e.exports = {
                ar: ["تلقائي"],
                ca_ES: "auto",
                cs: ["automatické"],
                de: "auto",
                el: ["αυτοματο"],
                en: "auto",
                es: "auto",
                fa: ["خودکار"],
                fr: ["automatique"],
                he_IL: ["אוטומטי"],
                hu_HU: "auto",
                id_ID: "auto",
                it: "auto",
                ja: ["自動"],
                ko: ["자동"],
                ms_MY: "auto",
                nl_NL: "auto",
                pl: "auto",
                pt: "auto",
                ro: "auto",
                ru: ["авто"],
                sv: "auto",
                th: ["อัตโนมัติ"],
                tr: ["otomatik"],
                vi: ["tự động"],
                zh: ["自动"],
                zh_TW: ["自動"]
            }
        },
        909994: e => {
            e.exports = {
                ar: ["تعديل البيانات لأرباح الأسهم"],
                ca_ES: ["Ajusta dades dels dividends"],
                cs: "Adjust data for dividends",
                de: ["Daten für Dividenden anpassen"],
                el: "Adjust data for dividends",
                en: "Adjust data for dividends",
                es: ["Ajustar datos de los dividendos"],
                fa: "Adjust data for dividends",
                fr: ["Ajuster les données pour les dividendes"],
                he_IL: ["התאם נתונים לדיבידנדים"],
                hu_HU: "Adjust data for dividends",
                id_ID: ["Sesuaikan data untuk dividen"],
                it: ["Adegua i dati a seconda dei dividendi"],
                ja: ["配当でデータを調整"],
                ko: ["배당에 따른 데이터 조정"],
                ms_MY: ["Laras data untuk dividen"],
                nl_NL: "Adjust data for dividends",
                pl: ["Dopasuj dane według dywidend"],
                pt: ["Ajustar dados de dividendos"],
                ro: "Adjust data for dividends",
                ru: ["Корректировать данные на дивиденды"],
                sv: ["Justera data för utdelning"],
                th: ["ปรับเปลี่ยนข้อมูลเนื่องจากเงินปันผล"],
                tr: ["Verileri temettülere göre düzelt"],
                vi: ["Điều chỉnh dữ liệu cho Cổ tức"],
                zh: ["调整股息数据"],
                zh_TW: ["調整股息數據"]
            }
        },
        710989: e => {
            e.exports = {
                ar: ["ضبط لتغييرات العقود"],
                ca_ES: ["Ajusta els canvis dels contractes"],
                cs: "Adjust for contract changes",
                de: ["Veränderungen der Kontraktgrößen und Verfalltage"],
                el: "Adjust for contract changes",
                en: "Adjust for contract changes",
                es: ["Ajustar los cambios de los contratos"],
                fa: "Adjust for contract changes",
                fr: ["Ajustement pour les changements de contrat"],
                he_IL: ["התאם לשינויים בחוזה"],
                hu_HU: "Adjust for contract changes",
                id_ID: ["Penyesuaian untuk perubahan kontrak"],
                it: ["Incorpora variazioni dovute al cambio di contratto"],
                ja: ["限月の切り替えを調整"],
                ko: ["컨트랙트 변경 조절"],
                ms_MY: ["Laraskan untuk perubahan-perubahan kontrak"],
                nl_NL: "Adjust for contract changes",
                pl: ["Dostosuj do zmian w kontrakcie"],
                pt: ["Ajustes para mudanças no contrato"],
                ro: "Adjust for contract changes",
                ru: ["Корректировать с учётом изменений контрактов"],
                sv: ["Förändringar i avtalens storlek och datum för upphörande"],
                th: ["ปรับตามการเปลี่ยนแปลงสัญญา"],
                tr: ["Sözleşme değişiklikleri için ayarlama"],
                vi: ["Điều chỉnh để thay đổi hợp đồng"],
                zh: ["根据合约变更调整"],
                zh_TW: ["調整合約變更"]
            }
        },
        601217: e => {
            e.exports = {
                ar: ["يتم ضبط بيانات الرمز الرئيسي لتوزيعات الأرباح فقط"],
                ca_ES: ["Les dades del símbol principal s'ajusten només als dividends"],
                cs: "Main symbol data is adjusted for dividends only",
                de: ["Die Daten des Hauptsymbols sind nur für die Dividenden angepasst"],
                el: "Main symbol data is adjusted for dividends only",
                en: "Main symbol data is adjusted for dividends only",
                es: ["Los datos del símbolo principal se ajustan solo a los dividendos"],
                fa: "Main symbol data is adjusted for dividends only",
                fr: ["Les données du symbole principal sont ajustées pour les dividendes uniquement"],
                he_IL: ["הנתונים של הסימול הראשי מותאמים לדיבידנדים בלבד"],
                hu_HU: "Main symbol data is adjusted for dividends only",
                id_ID: ["Data simbol utama disesuaikan hanya untuk deviden"],
                it: ["I dati del simbolo principale sono adeguati solo per lo stacco dei dividendi"],
                ja: ["メインシンボルのデータは配当のみで調整されています。"],
                ko: ["메인 심볼 데이터는 디비든드에 대해서만 조정됩니다"],
                ms_MY: ["Data utama simbol adalah diselaraskan untuk dividend sahaja"],
                nl_NL: "Main symbol data is adjusted for dividends only",
                pl: ["Dane głównego symbolu są dostosowywane tylko do dywidend"],
                pt: ["Os dados do símbolo principal são ajustados apenas para dividendos"],
                ro: "Main symbol data is adjusted for dividends only",
                ru: ["Данные по основному инструменту корректируются только для дивидендов"],
                sv: ["Uppgifterna om huvudsymbolen justeras endast för utdelningar."],
                th: ["ข้อมูลสัญลักษณ์หลักถูกปรับเป็นเงินปันผลเท่านั้น"],
                tr: ["Ana sembol verileri yalnızca temettüler için ayarlanır"],
                vi: ["Dữ liệu của mã chính chỉ được điều chỉnh cho cổ tức"],
                zh: ["主要商品数据仅针对股息进行调整"],
                zh_TW: ["主要商品數據僅針對股息進行調整"]
            }
        },
        418540: e => {
            e.exports = {
                ar: ["يتم ضبط بيانات الرمز الرئيسي للتقسيمات فقط"],
                ca_ES: ["Les dades del símbol principal s'ajusten només als splits"],
                cs: "Main symbol data is adjusted for splits only",
                de: ["Die Daten des Hauptsymbols werden nur für Splits angepasst"],
                el: "Main symbol data is adjusted for splits only",
                en: "Main symbol data is adjusted for splits only",
                es: ["Los datos del símbolo principal se ajustan solo a los splits"],
                fa: "Main symbol data is adjusted for splits only",
                fr: ["Les données du symbole principal sont ajustées pour les fractions uniquement"],
                he_IL: ["הנתונים של הסימול הראשי מותאמים לספליטים בלבד"],
                hu_HU: "Main symbol data is adjusted for splits only",
                id_ID: ["Data simbol utama disesuaikan hanya untuk pecahan."],
                it: ["I dati del simbolo principale sono adeguati solo per i frazionamenti"],
                ja: ["メインシンボルのデータは株式分割でのみ調整されています。"],
                ko: ["메인 심볼 데이터는 스플릿에 대해서만 조정됩니다"],
                ms_MY: ["Data utama simbol adalah diselaraskan untuk pembahagian sahaja"],
                nl_NL: "Main symbol data is adjusted for splits only",
                pl: ["Dane głównego symbolu są dostosowywane tylko do podziałów"],
                pt: ["Os dados do símbolo principal são ajustados apenas para desdobramentos"],
                ro: "Main symbol data is adjusted for splits only",
                ru: ["Данные по основному инструменту корректируются только для сплитов"],
                sv: ["Uppgifter om huvudsymbolen justeras endast för splits."],
                th: ["ข้อมูลสัญลักษณ์หลักถูกปรับสำหรับการแยกเท่านั้น"],
                tr: ["Ana sembol verileri yalnızca bölmeler için ayarlanır"],
                vi: ["Dữ liệu của mã chính chỉ được điều chỉnh để tách"],
                zh: ["主要商品数据仅针对拆分进行调整"],
                zh_TW: ["主要商品數據僅針對拆分進行調整"]
            }
        },
        335397: e => {
            e.exports = {
                ar: ["اختر الرسم البياني"],
                ca_ES: ["Selecciona gràfic"],
                cs: "Select Chart",
                de: ["Chart auswählen"],
                el: "Select Chart",
                en: "Select Chart",
                es: ["Seleccionar gráfico"],
                fa: "Select Chart",
                fr: ["Sélectionner le graphique"],
                he_IL: ["בחר גרף"],
                hu_HU: "Select Chart",
                id_ID: ["Pilih Chart"],
                it: ["Seleziona grafico"],
                ja: ["チャートを選択"],
                ko: ["차트 고르기"],
                ms_MY: ["Pilih Carta"],
                nl_NL: "Select Chart",
                pl: ["Wybierz wykres"],
                pt: ["Selecionar o gráfico"],
                ro: "Select Chart",
                ru: ["Выбрать график"],
                sv: ["Välj diagram"],
                th: ["เลือกชาร์ต"],
                tr: ["Grafiği Seçin"],
                vi: ["Lựa chọn Biểu đồ"],
                zh: ["选择图表"],
                zh_TW: ["選擇圖表"]
            }
        },
        98948: e => {
            e.exports = {
                ar: ["تبديل تكبير الرسم البياني"],
                ca_ES: ["Alterna maximitzar gràfic"],
                cs: "Toggle Maximize Chart",
                de: ["Auf maximierten Chart umschalten"],
                el: "Toggle Maximize Chart",
                en: "Toggle Maximize Chart",
                es: ["Alternar maximizar gráfico"],
                fa: "Toggle Maximize Chart",
                fr: ["Agrandir le graphique"],
                he_IL: ["החלף לגרף מקסימלי"],
                hu_HU: ["Maximális Chat Kiterjesztése"],
                id_ID: ["Toggle Memperbesar Chart"],
                it: ["Espandi/riduci grafico"],
                ja: ["チャート最大化切り替え"],
                ko: ["차트최대화토글"],
                ms_MY: ["Carta Memaksimumkan Togol"],
                nl_NL: "Toggle Maximize Chart",
                pl: ["Maksymalizuj wykres"],
                pt: ["Alternar para gráfico maximizado"],
                ro: "Toggle Maximize Chart",
                ru: ["Развернуть/свернуть график"],
                sv: ["Slå på/av maximering av diagram"],
                th: ["สลับเป็นชาร์ตขนาดใหญ่ที่สุด"],
                tr: ["Grafik Maksimize Değiştir"],
                vi: ["Chuyển đổi Tối đa hoá Biểu đồ"],
                zh: ["切换为最大化图表"],
                zh_TW: ["切換最大化圖表"]
            }
        },
        860879: e => {
            e.exports = {
                ar: ["نطاق قياس تلقائي"],
                ca_ES: ["Alterna l'escala automàtica"],
                cs: ["Přepnout na Auto Stupnici"],
                de: ["Auf automatische Skalierung umschalten"],
                el: ["Αυτόματη κλίμακα"],
                en: "Toggle Auto Scale",
                es: ["Alternar escala automática"],
                fa: "Toggle Auto Scale",
                fr: ["Mise à l'échelle automatique"],
                he_IL: ["הפעל/כבה קנה מידה אוטומטיות"],
                hu_HU: ["Váltás Automata Méretezés"],
                id_ID: ["Toggle Skala Otomatis"],
                it: ["Seleziona/deseleziona scala automatica"],
                ja: ["自動スケール切り替え"],
                ko: ["자동눈금토글"],
                ms_MY: ["Skala Auto Togol"],
                nl_NL: ["Schakel autoschaal"],
                pl: ["Włącz skalę automatyczną"],
                pt: ["Alternar Para Escala Automática"],
                ro: "Toggle Auto Scale",
                ru: ["Автоматический масштаб вкл/выкл"],
                sv: ["Växla skala automatiskt"],
                th: ["สลับเป็นสเกลอัตโนมัติ"],
                tr: ["Otomatik Ölçeklendirmeyi Aç/Kapat"],
                vi: ["Chuyển đổi Tỷ lệ tự động"],
                zh: ["切换为自动坐标"],
                zh_TW: ["切換為自動刻度"]
            }
        },
        587492: e => {
            e.exports = {
                ar: ["توقيت"],
                ca_ES: ["Zona horària"],
                cs: ["Časové pásmo"],
                de: ["Zeitzone"],
                el: "Timezone",
                en: "Timezone",
                es: ["Zona horaria"],
                fa: "Timezone",
                fr: ["Fuseau horaire"],
                he_IL: ["אזור זמן"],
                hu_HU: ["Időzóna"],
                id_ID: ["Zona waktu"],
                it: ["Fuso orario"],
                ja: ["タイムゾーン"],
                ko: ["타임존"],
                ms_MY: ["Zon Waktu"],
                nl_NL: "Timezone",
                pl: ["Strefa czasowa"],
                pt: ["Fuso Horário"],
                ro: "Timezone",
                ru: ["Часовой пояс"],
                sv: ["Tidszon"],
                th: ["เขตเวลา"],
                tr: ["Saat Dilimi"],
                vi: ["Múi giờ"],
                zh: ["时区"],
                zh_TW: ["時區"]
            }
        },
        999983: e => {
            e.exports = {
                ar: ["استخدم التسوية في أقرب وقت على الفاصل الزمني اليومي"],
                ca_ES: ["Fer servir la liquidació com a tancament en intervals diaris"],
                cs: "Use settlement as close on daily interval",
                de: ["Settlement als Schlusskurs im Tagesintervall verwenden"],
                el: "Use settlement as close on daily interval",
                en: "Use settlement as close on daily interval",
                es: ["Utilizar la liquidación como cierre en intervalos diarios"],
                fa: "Use settlement as close on daily interval",
                fr: ["Utiliser le règlement comme proche de l'intervalle quotidien"],
                he_IL: ["השתמש בסליקה כסגירה באינטרוול יומי"],
                hu_HU: "Use settlement as close on daily interval",
                id_ID: ["Gunakan penyelesaian sedekat mungkin pada interval harian"],
                it: ["Usa il settlement come chiusura nel giornaliero"],
                ja: ["日足で清算価格を終値として利用"],
                ko: ["데일리 클로즈를 청산가로 쓰기"],
                ms_MY: ["Gunakan penyelesaian sebagai penutup pada selang masa harian"],
                nl_NL: "Use settlement as close on daily interval",
                pl: ["Użyj ceny rozliczenia jako dziennej ceny zamknięcia"],
                pt: ["Usar a liquidação como fechamento no intervalo diário"],
                ro: "Use settlement as close on daily interval",
                ru: ["Использовать расчетную цену для цены закрытия на дневном интервале"],
                sv: ["Använd avräkning så nära daglig intervallängd"],
                th: ["ใช้การชำระราคาที่ใกล้เคียงกันในแต่ละวัน"],
                tr: ["Ödemeyi günlük aralıklarla yakın olarak kullanma"],
                vi: ["Sử dụng giải quyết càng gần vào khoảng thời gian hàng ngày"],
                zh: ["使用结算价作为每日周期的收盘价"],
                zh_TW: ["使用結算價做為日圖的收盤價"]
            }
        },
        342390: e => {
            e.exports = {
                ar: ["ضبط لبيانات توزيعات الأرباح"],
                ca_ES: ["ajusta dades dels dividends"],
                cs: "adjust data for dividends",
                de: ["Daten für Dividenden anpassen"],
                el: "adjust data for dividends",
                en: "adjust data for dividends",
                es: ["ajustar datos de los dividendos"],
                fa: "adjust data for dividends",
                fr: ["ajuster les données pour les dividendes"],
                he_IL: ["להתאים נתונים לדיבידנדים"],
                hu_HU: "adjust data for dividends",
                id_ID: ["sesuaikan data untuk dividen"],
                it: ["adegua i dati a seconda dei dividendi"],
                ja: ["配当でデータの調整"],
                ko: ["배당금을 위한 데이터 조정"],
                ms_MY: ["laras data untuk dividen"],
                nl_NL: "adjust data for dividends",
                pl: ["dostosuj dane według dywidend"],
                pt: ["ajustar dados de dividendos"],
                ro: "adjust data for dividends",
                ru: ["корректировку данных на дивиденды"],
                sv: ["justera uppgifterna för utdelningar"],
                th: ["ปรับเปลี่ยนข้อมูลเนื่องจากเงินปันผล"],
                tr: ["temettü verilerini ayarlayın"],
                vi: ["Điều chỉnh dữ liệu cho Cổ tức"],
                zh: ["调整股息数据"],
                zh_TW: ["調整股息數據"]
            }
        },
        399511: e => {
            e.exports = {
                ar: ["ضبط لتغييرات العقد"],
                ca_ES: ["ajusta per a canvis de contractes"],
                cs: "adjust for contract changes",
                de: ["Veränderungen der Kontraktgrößen und Verfalltage"],
                el: "adjust for contract changes",
                en: "adjust for contract changes",
                es: ["ajustar para cambios de contratos"],
                fa: "adjust for contract changes",
                fr: ["ajuster pour les changements de contrat"],
                he_IL: ["התאם לשינויים בחוזה"],
                hu_HU: "adjust for contract changes",
                id_ID: ["Penyesuaian untuk perubahan kontrak"],
                it: ["incorpora variazioni dovute a cambio di contratti"],
                ja: ["限月の切り替えの調整"],
                ko: ["컨트랙트 변경 조절"],
                ms_MY: ["laraskan untuk perubahan-perubahan kontrak"],
                nl_NL: "adjust for contract changes",
                pl: ["dostosuj do zmian w kontrakcie"],
                pt: ["ajustes para mudanças no contrato"],
                ro: "adjust for contract changes",
                ru: ["корректировку с учетом изменений контрактов"],
                sv: ["justera för kontraktändringar"],
                th: ["ปรับตามการเปลี่ยนแปลงสัญญา"],
                tr: ["sözleşme değişikliklerini ayarla"],
                vi: ["Điều chỉnh để thay đổi hợp đồng"],
                zh: ["根据合约变更调整"],
                zh_TW: ["調整合約變更"]
            }
        },
        398402: e => {
            e.exports = {
                ar: ["استخدام التسوية عند الإغلاق على الفاصل الزمني اليومي"],
                ca_ES: ["fes servir la liquidació com a tancament en intervals diaris"],
                cs: "use settlement as close on daily interval",
                de: ["Settlement als Schlusskurs im Tagesintervall verwenden"],
                el: "use settlement as close on daily interval",
                en: "use settlement as close on daily interval",
                es: ["utilizar la liquidación como cierre en intervalos diarios"],
                fa: "use settlement as close on daily interval",
                fr: ["utiliser le règlement comme clôture sur l'intervalle quotidien"],
                he_IL: ["השתמש בסליקה כסגירה באינטרוול יומי"],
                hu_HU: "use settlement as close on daily interval",
                id_ID: ["Gunakan penyelesaian sedekat mungkin pada interval harian"],
                it: ["usa il settlement come chiusura nel giornaliero"],
                ja: ["日足で清算価格を終値として利用"],
                ko: ["데일리 클로즈를 청산가로 쓰기"],
                ms_MY: ["gunakan penyelesaian sebagai penutup pada selang masa harian"],
                nl_NL: "use settlement as close on daily interval",
                pl: ["użyj rozliczenia jako zamknięcia na interwale dziennym"],
                pt: ["usar a liquidação como próximo no intervalo diário"],
                ro: "use settlement as close on daily interval",
                ru: ["использование расчетной цены для цены закрытия на дневном интервале"],
                sv: ["använd avräkning så nära daglig intervallängd"],
                th: ["ใช้การชำระราคาที่ใกล้เคียงกันในแต่ละวัน"],
                tr: ["yerleşimi günlük aralıklara yakın olarak kullan"],
                vi: ["Sử dụng giải quyết đóng tại khoảng thời gian hàng ngày"],
                zh: ["使用结算价作为每日周期的收盘价"],
                zh_TW: ["使用結算價做為日圖的收盤價"]
            }
        }
    }
]);
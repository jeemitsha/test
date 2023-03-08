(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [11402], {
        259142: function(e, t) {
            var o, r, a;
            r = [t], o = function(e) {
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
                    var r = {
                        get passive() {
                            o = !0
                        }
                    };
                    window.addEventListener("testPassive", null, r), window.removeEventListener("testPassive", null, r)
                }
                var a = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
                    n = [],
                    i = !1,
                    s = -1,
                    l = void 0,
                    c = void 0,
                    d = function(e) {
                        return n.some((function(t) {
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
                e.disableBodyScroll = function(e, r) {
                    if (a) {
                        if (!e) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
                        if (e && !n.some((function(t) {
                                return t.targetElement === e
                            }))) {
                            var h = {
                                targetElement: e,
                                options: r || {}
                            };
                            n = [].concat(t(n), [h]), e.ontouchstart = function(e) {
                                1 === e.targetTouches.length && (s = e.targetTouches[0].clientY)
                            }, e.ontouchmove = function(t) {
                                var o, r, a, n;
                                1 === t.targetTouches.length && (r = e, n = (o = t).targetTouches[0].clientY - s, !d(o.target) && (r && 0 === r.scrollTop && 0 < n || (a = r) && a.scrollHeight - a.scrollTop <= a.clientHeight && n < 0 ? u(o) : o.stopPropagation()))
                            }, i || (document.addEventListener("touchmove", u, o ? {
                                passive: !1
                            } : void 0), i = !0)
                        }
                    } else {
                        m = r, setTimeout((function() {
                            if (void 0 === c) {
                                var e = !!m && !0 === m.reserveScrollBarGap,
                                    t = window.innerWidth - document.documentElement.clientWidth;
                                e && 0 < t && (c = document.body.style.paddingRight, document.body.style.paddingRight = t + "px")
                            }
                            void 0 === l && (l = document.body.style.overflow, document.body.style.overflow = "hidden")
                        }));
                        var p = {
                            targetElement: e,
                            options: r || {}
                        };
                        n = [].concat(t(n), [p])
                    }
                    var m
                }, e.clearAllBodyScrollLocks = function() {
                    a ? (n.forEach((function(e) {
                        e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null
                    })), i && (document.removeEventListener("touchmove", u, o ? {
                        passive: !1
                    } : void 0), i = !1), n = [], s = -1) : (h(), n = [])
                }, e.enableBodyScroll = function(e) {
                    if (a) {
                        if (!e) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                        e.ontouchstart = null, e.ontouchmove = null, n = n.filter((function(t) {
                            return t.targetElement !== e
                        })), i && 0 === n.length && (document.removeEventListener("touchmove", u, o ? {
                            passive: !1
                        } : void 0), i = !1)
                    } else 1 === n.length && n[0].targetElement === e ? (h(), n = []) : n = n.filter((function(t) {
                        return t.targetElement !== e
                    }))
                }
            }, void 0 === (a = "function" == typeof o ? o.apply(t, r) : o) || (e.exports = a)
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
        768550: e => {
            e.exports = {
                item: "item-bWEYVlEJ",
                interactive: "interactive-bWEYVlEJ",
                hovered: "hovered-bWEYVlEJ",
                disabled: "disabled-bWEYVlEJ",
                active: "active-bWEYVlEJ",
                shortcut: "shortcut-bWEYVlEJ",
                normal: "normal-bWEYVlEJ",
                big: "big-bWEYVlEJ",
                iconCell: "iconCell-bWEYVlEJ",
                icon: "icon-bWEYVlEJ",
                checkmark: "checkmark-bWEYVlEJ",
                content: "content-bWEYVlEJ",
                label: "label-bWEYVlEJ",
                checked: "checked-bWEYVlEJ",
                toolbox: "toolbox-bWEYVlEJ",
                showToolboxOnHover: "showToolboxOnHover-bWEYVlEJ",
                arrowIcon: "arrowIcon-bWEYVlEJ",
                subMenu: "subMenu-bWEYVlEJ",
                invisibleHotkey: "invisibleHotkey-bWEYVlEJ"
            }
        },
        503651: e => {
            e.exports = {
                item: "item-X2LmiiGx",
                emptyIcons: "emptyIcons-X2LmiiGx",
                loading: "loading-X2LmiiGx",
                disabled: "disabled-X2LmiiGx",
                interactive: "interactive-X2LmiiGx",
                hovered: "hovered-X2LmiiGx",
                normal: "normal-X2LmiiGx",
                big: "big-X2LmiiGx",
                icon: "icon-X2LmiiGx",
                label: "label-X2LmiiGx",
                title: "title-X2LmiiGx",
                nested: "nested-X2LmiiGx",
                shortcut: "shortcut-X2LmiiGx",
                remove: "remove-X2LmiiGx"
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
        586355: e => {
            e.exports = {
                tabs: "tabs-g47ZTMzc",
                tab: "tab-g47ZTMzc",
                noBorder: "noBorder-g47ZTMzc",
                disabled: "disabled-g47ZTMzc",
                active: "active-g47ZTMzc",
                defaultCursor: "defaultCursor-g47ZTMzc",
                slider: "slider-g47ZTMzc",
                content: "content-g47ZTMzc"
            }
        },
        190948: e => {
            e.exports = {
                icon: "icon-XIHzWm6B",
                dropped: "dropped-XIHzWm6B"
            }
        },
        612247: (e, t, o) => {
            "use strict";
            o.d(t, {
                Loader: () => c
            });
            var r, a = o(50959),
                n = o(497754),
                i = o(745269),
                s = o(733319),
                l = o.n(s);
            ! function(e) {
                e[e.Initial = 0] = "Initial", e[e.Appear = 1] = "Appear", e[e.Active = 2] = "Active"
            }(r || (r = {}));
            class c extends a.PureComponent {
                constructor(e) {
                    super(e), this._stateChangeTimeout = null, this.state = {
                        state: r.Initial
                    }
                }
                render() {
                    const {
                        className: e,
                        color: t = "black",
                        size: o = "medium",
                        staticPosition: r
                    } = this.props, i = n(l().item, l()[t], l()[o]);
                    return a.createElement("span", {
                        className: n(l().loader, r && l().static, this._getStateClass(), e)
                    }, a.createElement("span", {
                        className: i
                    }), a.createElement("span", {
                        className: i
                    }), a.createElement("span", {
                        className: i
                    }))
                }
                componentDidMount() {
                    this.setState({
                        state: r.Appear
                    }), this._stateChangeTimeout = setTimeout((() => {
                        this.setState({
                            state: r.Active
                        })
                    }), 2 * i.dur)
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
        531327: (e, t, o) => {
            "use strict";

            function r(e) {
                return a() ? 0 : n() ? 46 : Math.min(Math.max(e, 46), 450)
            }
            o.d(t, {
                getWidgetBarPadding: () => r,
                isWidgetBarFullscreen: () => a
            });
            const a = () => !window.matchMedia("screen and (min-width: 768px)").matches,
                n = () => !window.matchMedia("screen and (min-width: 1280px)").matches
        },
        575658: (e, t, o) => {
            "use strict";
            o.d(t, {
                setFixedBodyState: () => s
            });
            var r = o(76107),
                a = o(531327);
            let n = 0,
                i = !1;

            function s(e) {
                const {
                    body: t
                } = document, o = t.querySelector(".widgetbar-wrap");
                if (e && 1 == ++n) {
                    const e = (0, r.getCSSProperty)(t, "overflow"),
                        a = (0, r.getCSSPropertyNumericValue)(t, "padding-right");
                    "hidden" !== e.toLowerCase() && t.scrollHeight > t.offsetHeight && ((0, r.setStyle)(o, "right", `${(0,r.getScrollbarWidth)()}px`), t.style.paddingRight = `${a+(0,r.getScrollbarWidth)()}px`, i = !0), t.classList.add("i-no-scroll")
                } else if (!e && n > 0 && 0 == --n && (t.classList.remove("i-no-scroll"), i)) {
                    (0, r.setStyle)(o, "right", "0px");
                    let e = 0;
                    e = o ? (0, a.getWidgetBarPadding)((0, r.getContentWidth)(o)) : 0, t.scrollHeight <= t.clientHeight && (e -= (0, r.getScrollbarWidth)()), t.style.paddingRight = (e < 0 ? 0 : e) + "px", i = !1
                }
            }
        },
        582997: (e, t, o) => {
            "use strict";
            o.d(t, {
                Hint: () => s
            });
            var r = o(50959),
                a = o(497754),
                n = o.n(a),
                i = o(768550);

            function s(e) {
                const {
                    text: t = "",
                    className: o
                } = e;
                return r.createElement("span", {
                    className: n()(i.shortcut, o)
                }, t)
            }
        },
        886004: (e, t, o) => {
            "use strict";
            o.d(t, {
                ContextMenuItem: () => m
            });
            var r = o(50959),
                a = o(497754),
                n = o.n(a),
                i = o(83436),
                s = o(612247),
                l = o(302478),
                c = o(582997),
                d = o(339750),
                u = o(379978),
                h = o(69311),
                p = o(503651);

            function m(e) {
                const {
                    isTitle: t,
                    isLoading: o,
                    isHovered: a,
                    active: m,
                    checkable: g,
                    disabled: v,
                    checked: f,
                    icon: b,
                    iconChecked: E,
                    hint: w,
                    subItems: x,
                    label: y,
                    onClick: k,
                    children: C,
                    toolbox: _,
                    jsxLabel: T,
                    size: D = "normal"
                } = e, S = (0, r.useContext)(l.EmptyIconsContext), L = !!x.length;
                return o ? r.createElement("li", {
                    className: n()(p.item, p.loading, p[D])
                }, r.createElement(s.Loader, null)) : r.createElement("li", {
                    className: n()(p.item, p.interactive, t && p.title, v && p.disabled, a && p.hovered, m && p.active, S && p.emptyIcons, p[D]),
                    onClick: k
                }, r.createElement(i.Icon, {
                    className: n()(p.icon),
                    icon: function() {
                        if (g && f) return E || b || d;
                        return b
                    }()
                }), r.createElement("span", {
                    className: n()(p.label)
                }, null != T ? T : y), !!_ && r.createElement(i.Icon, {
                    onClick: function() {
                        _ && _.action()
                    },
                    className: p.remove,
                    icon: h
                }), !L && w && r.createElement(c.Hint, {
                    className: p.shortcut,
                    text: w
                }), L && r.createElement(i.Icon, {
                    className: p.nested,
                    icon: u
                }), C)
            }
        },
        302478: (e, t, o) => {
            "use strict";
            o.d(t, {
                EmptyIconsContext: () => r
            });
            const r = o(50959).createContext(!1)
        },
        332585: (e, t, o) => {
            "use strict";
            o.d(t, {
                DrawerManager: () => n,
                DrawerContext: () => i
            });
            var r = o(50959),
                a = o(575658);
            class n extends r.PureComponent {
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
                    !t.stack.length && this.state.stack.length && ((0, a.setFixedBodyState)(!0), this._isBodyFixed = !0), t.stack.length && !this.state.stack.length && this._isBodyFixed && ((0,
                        a.setFixedBodyState)(!1), this._isBodyFixed = !1)
                }
                componentWillUnmount() {
                    this.state.stack.length && this._isBodyFixed && (0, a.setFixedBodyState)(!1)
                }
                render() {
                    return r.createElement(i.Provider, {
                        value: {
                            addDrawer: this._addDrawer,
                            removeDrawer: this._removeDrawer,
                            currentDrawer: this.state.stack.length ? this.state.stack[this.state.stack.length - 1] : null
                        }
                    }, this.props.children)
                }
            }
            const i = r.createContext(null)
        },
        762852: (e, t, o) => {
            "use strict";
            o.d(t, {
                Drawer: () => h
            });
            var r = o(50959),
                a = o(650151),
                n = o(497754),
                i = o(777491),
                s = o(707533),
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
                } = e, g = (0, a.ensureNotNull)((0, r.useContext)(l.DrawerContext)), [v] = (0, r.useState)((() => (0, i.randomHash)())), f = (0, r.useRef)(null), b = (0, r.useContext)(c.CloseDelegateContext);
                return (0, r.useLayoutEffect)((() => ((0, a.ensureNotNull)(f.current).focus({
                    preventScroll: !0
                }), b.subscribe(g, o), g.addDrawer(v), () => {
                    g.removeDrawer(v), b.unsubscribe(g, o)
                })), []), r.createElement(s.Portal, null, r.createElement("div", {
                    className: n(u.wrap, u[`position${t}`])
                }, v === g.currentDrawer && r.createElement("div", {
                    className: u.backdrop,
                    onClick: o
                }), r.createElement(d.TouchScrollContainer, {
                    className: n(u.drawer, m.drawer, u[`position${t}`], p),
                    tabIndex: -1,
                    ref: f,
                    "data-name": e["data-name"]
                }, h)))
            }
        },
        221155: (e, t, o) => {
            "use strict";
            o.d(t, {
                Separator: () => i
            });
            var r = o(50959),
                a = o(497754),
                n = o(94725);

            function i(e) {
                return r.createElement("div", {
                    className: a(n.separator, e.className)
                })
            }
        },
        634993: (e, t, o) => {
            "use strict";
            o.d(t, {
                DEFAULT_POPUP_MENU_ITEM_THEME: () => c,
                PopupMenuItem: () => u
            });
            var r = o(50959),
                a = o(497754),
                n = o(224743),
                i = o(345848),
                s = o(8626),
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
                    forceShowShortcuts: b,
                    icon: E,
                    isActive: w,
                    isDisabled: x,
                    isHovered: y,
                    appearAsDisabled: k,
                    label: C,
                    link: _,
                    showToolboxOnHover: T,
                    target: D,
                    rel: S,
                    toolbox: L,
                    reference: N,
                    onMouseOut: M,
                    onMouseOver: A,
                    onKeyDown: H,
                    suppressToolboxClick: W = !0,
                    theme: I = l,
                    tabIndex: z,
                    tagName: B,
                    renderComponent: R
                } = e, O = (0, s.filterDataProps)(e), P = (0, r.useRef)(null), V = (0, r.useMemo)((() => function(e) {
                    function t(t) {
                        const {
                            reference: o,
                            ...a
                        } = t, n = null != e ? e : a.href ? "a" : "div", i = "a" === n ? a : function(e) {
                            const {
                                download: t,
                                href: o,
                                hrefLang: r,
                                media: a,
                                ping: n,
                                rel: i,
                                target: s,
                                type: l,
                                referrerPolicy: c,
                                ...d
                            } = e;
                            return d
                        }(a);
                        return r.createElement(n, { ...i,
                            ref: o
                        })
                    }
                    return t.displayName = `DefaultComponent(${e})`, t
                }(B)), [B]), F = null != R ? R : V;
                return r.createElement(F, { ...O,
                    id: t,
                    role: o,
                    "aria-label": c,
                    "aria-selected": u,
                    "aria-checked": h,
                    className: a(p, I.item, E && I.withIcon, {
                        [I.isActive]: w,
                        [I.isDisabled]: x || k,
                        [I.hovered]: y
                    }),
                    title: m,
                    href: _,
                    target: D,
                    rel: S,
                    reference: function(e) {
                        P.current = e, "function" == typeof N && N(e);
                        "object" == typeof N && (N.current = e)
                    },
                    onClick: function(t) {
                        const {
                            dontClosePopup: o,
                            onClick: r,
                            onClickArg: a,
                            trackEventObject: s
                        } = e;
                        if (x) return;
                        s && (0, i.trackEvent)(s.category, s.event, s.label);
                        r && r(a, t);
                        o || (0, n.globalCloseMenu)()
                    },
                    onContextMenu: function(t) {
                        const {
                            trackEventObject: o,
                            trackRightClick: r
                        } = e
                        ;
                        o && r && (0, i.trackEvent)(o.category, o.event, `${o.label}_rightClick`)
                    },
                    onMouseUp: function(t) {
                        const {
                            trackEventObject: o,
                            trackMouseWheelClick: r
                        } = e;
                        if (1 === t.button && _ && o) {
                            let e = o.label;
                            r && (e += "_mouseWheelClick"), (0, i.trackEvent)(o.category, o.event, e)
                        }
                    },
                    onMouseOver: A,
                    onMouseOut: M,
                    onKeyDown: H,
                    tabIndex: z
                }, void 0 !== E && r.createElement("span", {
                    className: I.icon,
                    dangerouslySetInnerHTML: {
                        __html: E
                    }
                }), r.createElement("span", {
                    className: a(I.labelRow, g)
                }, r.createElement("span", {
                    className: a(I.label, v)
                }, C)), (void 0 !== f || b) && r.createElement("span", {
                    className: I.shortcut
                }, (U = f) && U.split("+").join(" + ")), void 0 !== L && r.createElement("span", {
                    onClick: W ? d : void 0,
                    className: a(I.toolbox, {
                        [I.showOnHover]: T
                    })
                }, L));
                var U
            }
        },
        524174: (e, t, o) => {
            "use strict";
            o.d(t, {
                DEFAULT_SLIDER_THEME: () => s,
                SliderItem: () => l,
                factory: () => c,
                SliderRow: () => d
            });
            var r = o(50959),
                a = o(497754),
                n = o(650151),
                i = o(586355);
            const s = i;

            function l(e) {
                const t = a(e.className, i.tab, {
                    [i.active]: e.isActive,
                    [i.disabled]: e.isDisabled,
                    [i.defaultCursor]: !!e.shouldUseDefaultCursor,
                    [i.noBorder]: !!e.noBorder
                });
                return r.createElement("div", {
                    className: t,
                    onClick: e.onClick,
                    ref: e.reference,
                    "data-type": "tab-item",
                    "data-value": e.value,
                    "data-name": "tab-item-" + e.value.toString().toLowerCase()
                }, e.children)
            }

            function c(e) {
                return class extends r.PureComponent {
                    constructor() {
                        super(...arguments), this.activeTab = {
                            current: null
                        }
                    }
                    componentDidUpdate() {
                        (0, n.ensureNotNull)(this._slider).style.transition = "transform 350ms", this._componentDidUpdate()
                    }
                    componentDidMount() {
                        this._componentDidUpdate()
                    }
                    render() {
                        const {
                            className: t
                        } = this.props, o = this._generateTabs();
                        return r.createElement("div", {
                            className: a(t, i.tabs),
                            "data-name": this.props["data-name"]
                        }, o, r.createElement(e, {
                            reference: e => {
                                this._slider = e
                            }
                        }))
                    }
                    _generateTabs() {
                        return this.activeTab.current = null, r.Children.map(this.props.children, (e => {
                            const t = e,
                                o = Boolean(t.props.isActive),
                                a = {
                                    reference: e => {
                                        o && (this.activeTab.current = e), t.props.reference && t.props.reference(e)
                                    }
                                };
                            return r.cloneElement(t, a)
                        }))
                    }
                    _componentDidUpdate() {
                        const e = (0, n.ensureNotNull)(this._slider).style;
                        if (this.activeTab.current) {
                            const t = this.activeTab.current.offsetWidth,
                                o = this.activeTab.current.offsetLeft;
                            e.transform = `translateX(${o}px)`, e.width = `${t}px`, e.opacity = "1"
                        } else e.opacity = "0"
                    }
                }
            }
            const d = c((function(e) {
                return r.createElement("div", {
                    className: i.slider,
                    ref: e.reference
                })
            }))
        },
        416293: (e, t, o) => {
            "use strict";
            o.d(t, {
                ToolWidgetCaret: () => l
            });
            var r = o(50959),
                a = o(497754),
                n = o(83436),
                i = o(190948),
                s = o(100578);

            function l(e) {
                const {
                    dropped: t,
                    className: o
                } = e;
                return r.createElement(n.Icon, {
                    className: a(o, i.icon, {
                        [i.dropped]: t
                    }),
                    icon: s
                })
            }
        },
        150881: (e, t, o) => {
            "use strict";
            o.d(t, {
                TouchScrollContainer: () => s
            });
            var r = o(50959),
                a = o(259142),
                n = o(650151),
                i = o(638456);
            const s = (0, r.forwardRef)(((e, t) => {
                const {
                    children: o,
                    ...n
                } = e, s = (0, r.useRef)(null);
                return (0, r.useImperativeHandle)(t, (() => s.current)), (0, r.useLayoutEffect)((() => {
                    if (i.CheckMobile.iOS()) return null !== s.current && (0, a.disableBodyScroll)(s.current, {
                        allowTouchMove: l(s)
                    }), () => {
                        null !== s.current && (0, a.enableBodyScroll)(s.current)
                    }
                }), []), r.createElement("div", {
                    ref: s,
                    ...n
                }, o)
            }));

            function l(e) {
                return t => {
                    const o = (0, n.ensureNotNull)(e.current),
                        r = document.activeElement;
                    return !o.contains(t) || null !== r && o.contains(r) && r.contains(t)
                }
            }
        },
        635194: e => {
            e.exports = {
                button: "button-uO7HM85b",
                hover: "hover-uO7HM85b",
                isInteractive: "isInteractive-uO7HM85b",
                isGrouped: "isGrouped-uO7HM85b",
                isActive: "isActive-uO7HM85b",
                isOpened: "isOpened-uO7HM85b",
                isDisabled: "isDisabled-uO7HM85b",
                text: "text-uO7HM85b",
                icon: "icon-uO7HM85b"
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
        635900: e => {
            e.exports = {
                button: "button-wVK1yQmF",
                separator: "separator-wVK1yQmF"
            }
        },
        381195: e => {
            e.exports = {
                item: "item-Jc9IXW74",
                hover: "hover-Jc9IXW74",
                isActive: "isActive-Jc9IXW74",
                isFirst: "isFirst-Jc9IXW74",
                isLast: "isLast-Jc9IXW74"
            }
        },
        807595: e => {
            e.exports = {
                slider: "slider-yrq2LKUD",
                inner: "inner-yrq2LKUD"
            }
        },
        419731: e => {
            e.exports = {
                sliderRow: "sliderRow-hx8kZa1R"
            }
        },
        898930: (e, t, o) => {
            "use strict";
            o.d(t, {
                VerticalAttachEdge: () => r,
                HorizontalAttachEdge: () => a,
                VerticalDropDirection: () => n,
                HorizontalDropDirection: () => i,
                getPopupPositioner: () => c
            });
            var r, a, n, i, s = o(650151);
            ! function(e) {
                e[e.Top = 0] = "Top", e[e.Bottom = 1] = "Bottom"
            }(r || (r = {})),
            function(e) {
                e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
            }(a || (a = {})),
            function(e) {
                e[e.FromTopToBottom = 0] = "FromTopToBottom", e[e.FromBottomToTop = 1] = "FromBottomToTop"
            }(n || (n = {})),
            function(e) {
                e[e.FromLeftToRight = 0] = "FromLeftToRight", e[e.FromRightToLeft = 1] = "FromRightToLeft"
            }(i || (i = {}));
            const l = {
                verticalAttachEdge: r.Bottom,
                horizontalAttachEdge: a.Left,
                verticalDropDirection: n.FromTopToBottom,
                horizontalDropDirection: i.FromLeftToRight,
                verticalMargin: 0,
                horizontalMargin: 0,
                matchButtonAndListboxWidths: !1
            };

            function c(e, t) {
                return (o, c) => {
                    const d = (0, s.ensureNotNull)(e).getBoundingClientRect(),
                        {
                            verticalAttachEdge: u = l.verticalAttachEdge,
                            verticalDropDirection: h = l.verticalDropDirection,
                            horizontalAttachEdge: p = l.horizontalAttachEdge,
                            horizontalDropDirection: m = l.horizontalDropDirection,
                            horizontalMargin: g = l.horizontalMargin,
                            verticalMargin: v = l.verticalMargin,
                            matchButtonAndListboxWidths: f = l.matchButtonAndListboxWidths
                        } = t,
                        b = u === r.Top ? -1 * v : v,
                        E = p === a.Right ? d.right : d.left,
                        w = u === r.Top ? d.top : d.bottom,
                        x = {
                            x: E - (m === i.FromRightToLeft ? o : 0) + g,
                            y: w - (h === n.FromBottomToTop ? c : 0) + b
                        };
                    return f && (x.overrideWidth = d.width), x
                }
            }
        },
        983731: (e, t, o) => {
            "use strict";
            o.d(t, {
                DEFAULT_TOOL_WIDGET_BUTTON_THEME: () => s,
                ToolWidgetButton: () => l
            });
            var r = o(50959),
                a = o(497754),
                n = o(83436),
                i = o(635194);
            const s = i,
                l = r.forwardRef(((e, t) => {
                    const {
                        icon: o,
                        isActive: s,
                        isOpened: l,
                        isDisabled: c,
                        isGrouped: d,
                        isHovered: u,
                        onClick: h,
                        text: p,
                        textBeforeIcon: m,
                        title: g,
                        theme: v = i,
                        className: f,
                        forceInteractive: b,
                        "data-name": E,
                        ...w
                    } = e, x = a(f, v.button, g && "apply-common-tooltip", {
                        [v.isActive]: s,
                        [v.isOpened]: l,
                        [v.isInteractive]: (b || Boolean(h)) && !c,
                        [v.isDisabled]: c,
                        [v.isGrouped]: d,
                        [v.hover]: u
                    }), y = o && ("string" == typeof o ? r.createElement(n.Icon, {
                        className: v.icon,
                        icon: o
                    }) : r.cloneElement(o, {
                        className: a(v.icon, o.props.className)
                    }));
                    return r.createElement("div", { ...w,
                        ref: t,
                        "data-role": "button",
                        className: x,
                        onClick: c ? void 0 : h,
                        title: g,
                        "data-name": E
                    }, m && p && r.createElement("div", {
                        className: a("js-button-text", v.text)
                    }, p), y, !m && p && r.createElement("div", {
                        className: a("js-button-text", v.text)
                    }, p))
                }))
        },
        928089: (e, t, o) => {
            "use strict";
            o.d(t, {
                ToolWidgetMenuSummary: () => i
            });
            var r = o(50959),
                a = o(497754),
                n = o(977907);

            function i(e) {
                return r.createElement("div", {
                    className: a(e.className, n.title)
                }, e.children)
            }
        },
        575296: (e, t, o) => {
            "use strict";
            o.d(t, {
                DEFAULT_TOOL_WIDGET_MENU_THEME: () => m,
                ToolWidgetMenu: () => g
            });
            var r = o(50959),
                a = o(497754),
                n = o(591800),
                i = o(45968),
                s = o(416293),
                l = o(8626),
                c = o(332585),
                d = o(762852),
                u = o(898930),
                h = o(18182),
                p = o(17049);
            const m = p;
            class g extends r.PureComponent {
                constructor(e) {
                    super(e), this._wrapperRef = null, this._controller = r.createRef(), this._handleWrapperRef = e => {
                        this._wrapperRef = e, this.props.reference && this.props.reference(e)
                    }, this._handleClick = e => {
                        e.target instanceof Node && e.currentTarget.contains(e.target) && (this._handleToggleDropdown(), this.props.onClick && this.props.onClick(e, !this.state.isOpened))
                    }, this._handleToggleDropdown = e => {
                        const {
                            onClose: t,
                            onOpen: o
                        } = this.props, {
                            isOpened: r
                        } = this.state, a = "boolean" == typeof e ? e : !r;
                        this.setState({
                            isOpened: a
                        }), a && o && o(), !a && t && t()
                    }, this._handleClose = () => {
                        this.close()
                    }, this._handleKeyDown = e => {
                        27 === (0, n.hashFromEvent)(e) && this.state.isOpened && this.props.closeOnEsc && (e.preventDefault(), e.stopPropagation(), this._handleToggleDropdown())
                    }, this.state = {
                        isOpened: !1
                    }
                }
                render() {
                    const {
                        id: e,
                        arrow: t,
                        content: o,
                        isDisabled: n,
                        isDrawer: i,
                        isShowTooltip: c,
                        title: d,
                        className: u,
                        hotKey: p,
                        theme: m,
                        drawerBreakpoint: g,
                        tabIndex: v
                    } = this.props, {
                        isOpened: f
                    } = this.state, b = a(u, m.button, {
                        "apply-common-tooltip": c || !n,
                        [m.isDisabled]: n,
                        [m.isOpened]: f
                    });
                    return r.createElement("div", {
                        id: e,
                        className: b,
                        onClick: n ? void 0 : this._handleClick,
                        title: d,
                        "data-tooltip-hotkey": p,
                        ref: this._handleWrapperRef,
                        "data-role": "button",
                        tabIndex: v,
                        onKeyDown: this._handleKeyDown,
                        ...(0, l.filterDataProps)(this.props)
                    }, o, t && r.createElement("div", {
                        className: m.arrow
                    }, r.createElement("div", {
                        className: m.arrowWrap
                    }, r.createElement(s.ToolWidgetCaret, {
                        dropped: f
                    }))), this.state.isOpened && (g ? r.createElement(h.MatchMedia, {
                        rule: g
                    }, (e => this._renderContent(e))) : this._renderContent(i)))
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
                        menuClassName: a,
                        maxHeight: n,
                        drawerPosition: s = "Bottom",
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
                    }, m = Boolean(h && e && s), g = function(e) {
                        return "function" == typeof e
                    }(l) ? l({
                        isDrawer: m
                    }) : l;
                    return m ? r.createElement(c.DrawerManager, null, r.createElement(d.Drawer, {
                        onClose: this._handleClose,
                        position: s,
                        "data-name": t
                    }, g)) : r.createElement(i.PopupMenu, {
                        controller: this._controller,
                        closeOnClickOutside: this.props.closeOnClickOutside,
                        doNotCloseOn: this,
                        isOpened: h,
                        minWidth: o,
                        onClose: this._handleClose,
                        position: (0, u.getPopupPositioner)(this._wrapperRef, p),
                        className: a,
                        maxHeight: n,
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
        21619: (e, t, o) => {
            "use strict";
            o.d(t, {
                DateRangeDrawerRanges: () => u,
                DateRangeDrawerGoTo: () => h
            });
            var r = o(50959),
                a = o(777754),
                n = o(886004),
                i = o(221155),
                s = o(224743),
                l = o(868151),
                c = o(290752),
                d = o(635900);

            function u(e) {
                const {
                    ranges: t,
                    activeRange: o,
                    onSelectRange: a
                } = e;
                return r.createElement(r.Fragment, null, t.map((e => r.createElement(n.ContextMenuItem, {
                    key: e.value.value,
                    label: e.description || e.text,
                    active: o === e.value.value,
                    checked: o === e.value.value,
                    checkable: !0,
                    disabled: !1,
                    onClick: i.bind(null, e),
                    doNotCloseOnClick: !1,
                    subItems: []
                }))));

                function i(e) {
                    e && a && a(e), (0, s.globalCloseMenu)()
                }
            }

            function h(e) {
                const {
                    onGoToDateClick: t
                } = e;
                return r.createElement(r.Fragment, null, r.createElement(i.Separator, {
                    className: d.separator
                }), r.createElement(n.ContextMenuItem, {
                    icon: c,
                    label: (0, l.appendEllipsis)(a.t(null, void 0, o(369))),
                    onClick: t,
                    active: !1,
                    checked: !1,
                    checkable: !1,
                    disabled: !1,
                    doNotCloseOnClick: !1,
                    subItems: []
                }))
            }
        },
        157345: (e, t, o) => {
            "use strict";
            o.d(t, {
                ToolWidgetDateRangeView: () => p
            });
            var r = o(50959),
                a = o(497754),
                n = o(524174),
                i = o(381195);

            function s(e) {
                const t = a(e.className, i.item, {
                    [i.isActive]: e.isActive,
                    [i.isFirst]: e.isFirst,
                    [i.isLast]: e.isLast
                });
                return r.createElement("div", {
                    className: t,
                    onClick: e.onClick,
                    ref: e.reference
                }, e.children)
            }
            var l = o(995683),
                c = o(807595);
            const d = (0, l.mergeThemes)(n.DEFAULT_SLIDER_THEME, c);
            var u = o(419731);
            const h = (0, n.factory)((function(e) {
                return r.createElement("div", {
                    className: a(e.className, d.slider),
                    ref: e.reference
                }, r.createElement("div", {
                    className: d.inner
                }))
            }));

            function p(e) {
                const {
                    className: t,
                    ranges: o,
                    activeRange: n,
                    onSelectRange: i
                } = e;
                return r.createElement(h, {
                    className: a(u.sliderRow, t),
                    "data-name": "date-ranges-tabs"
                }, o.map(((e, t) => r.createElement(s, {
                    key: e.value.value,
                    value: e.value.value,
                    isFirst: 0 === t,
                    isLast: t === o.length - 1,
                    isActive: n === e.value.value,
                    onClick: i && i.bind(null, e)
                }, r.createElement("div", {
                    title: e.description || e.text,
                    className: "apply-common-tooltip"
                }, e.text)))))
            }
        },
        100578: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>'
        },
        379978: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>'
        },
        821868: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><g fill="none" stroke="currentColor"><circle cx="3.5" cy="3.5" r="2"/><circle cx="10.5" cy="10.5" r="2"/><path stroke-linecap="square" d="M9.5 1.5l-5 11"/></g></svg>'
        },
        339750: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 15l5 5L23 9"/></svg>'
        },
        69311: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.7 9l4.65-4.65-.7-.7L9 8.29 4.35 3.65l-.7.7L8.29 9l-4.64 4.65.7.7L9 9.71l4.65 4.64.7-.7L9.71 9z"/></svg>'
        },
        290752: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 13v-2.5m8.5 11h6.5a2 2 0 0 0 2-2v-9m-17 0v-2c0-1.1.9-2 2-2h13a2 2 0 0 1 2 2v2m-17 0h17"/><path fill="currentColor" d="M10 4h1v4h-1V4zM17 4h1v4h-1V4z"/><path stroke="currentColor" d="M4 18.5h7.5m0 0L8 22m3.5-3.5L8 15"/></svg>'
        },
        700885: e => {
            e.exports = {
                ar: ["لوغاريتمي"],
                ca_ES: "log",
                cs: "log",
                de: "log",
                el: "log",
                en: "log",
                es: "log",
                fa: "log",
                fr: "log",
                he_IL: ["לוג"],
                hu_HU: "log",
                id_ID: "log",
                it: "log",
                ja: ["ログスケール"],
                ko: ["로그"],
                ms_MY: "log",
                nl_NL: "log",
                pl: "log",
                pt: "log",
                ro: "log",
                ru: ["лог"],
                sv: ["logg"],
                th: ["ล็อก"],
                tr: "log",
                vi: "log",
                zh: "log",
                zh_TW: "log"
            }
        },
        369: e => {
            e.exports = {
                ar: ["الذهاب إلى"],
                ca_ES: ["Anar a"],
                cs: "Go to",
                de: ["Gehe zu"],
                el: "Go to",
                en: "Go to",
                es: ["Ir a"],
                fa: ["برو به"],
                fr: ["Aller à"],
                he_IL: ["עבור ל"],
                hu_HU: ["Ugrás ide:"],
                id_ID: ["Menuju ke"],
                it: ["Vai a"],
                ja: ["移動"],
                ko: ["가기"],
                ms_MY: ["Pergi ke"],
                nl_NL: "Go to",
                pl: ["Idź do..."],
                pt: ["Ir para"],
                ro: "Go to",
                ru: ["Перейти к дате"],
                sv: ["Hoppa till"],
                th: ["ไปที่"],
                tr: ["Tarihe git"],
                vi: ["Đến"],
                zh: ["前往到"],
                zh_TW: ["前往到"]
            }
        },
        441421: e => {
            e.exports = {
                ar: ["ساعات التداول المُمددة متاحة فقط على النطاقات الصغرى خلال اليوم للرسوم البيانية"],
                ca_ES: ["L'horari ampliat només està disponible per a gràfics intradia"],
                cs: "Extended Hours is available only for intraday charts",
                de: ["Verlängerte Handelszeiten sind nur für Intraday-Charts verfügbar"],
                el: "Extended Hours is available only for intraday charts",
                en: "Extended Hours is available only for intraday charts",
                es: ["El horario ampliado solo se encuentra disponible para gráficos intradía"],
                fa: "Extended Hours is available only for intraday charts",
                fr: ["L'option Horaires étendus est disponible uniquement pour les graphiques intrajournaliers"],
                he_IL: ["שעות מורחבות זמינות רק עבור גרפים תוך-יומיים"],
                hu_HU: "Extended Hours is available only for intraday charts",
                id_ID: ["Jam Perpanjangan hanya tersedia bagi chart intrahari"],
                it: ["Gli orari di negoziazione estesi sono disponibili solo per i grafici intraday"],
                ja: ["時間外取引の機能は、イントラデイのチャートでのみ利用できます"],
                ko: ["확장시간은 인트라데이 차트에서만 가능합니다"],
                ms_MY: ["Waktu Dilanjutkan hanya tersedia untuk carta intra hari"],
                nl_NL: "Extended Hours is available only for intraday charts",
                pl: ["Sesja rozszerzona dostępna jest wyłącznie dla wykresów intraday"],
                pt: ["O Horário Estendido está disponível apenas para gráficos intradiário"],
                ro: "Extended Hours is available only for intraday charts",
                ru: ["Функция расширенных торговых часов доступна только для внутридневных графиков"],
                sv: ["Utökade timmar är endast tillgänglig för intradagsdiagram"],
                th: ["ชั่วโมงที่เพิ่มเติมขึ้นมาใช้ได้สำหรับกราฟแบบระหว่างวันเท่านั้น"],
                tr: ["Uzatılmış saatler sadece gün içi grafiklerde kullanılabilir"],
                vi: ["Tính năng Thời gian Giao dịch Ngoài giờ chỉ có sẵn cho các biểu đồ trong ngày"],
                zh: ["延长时段仅适用于日内图表"],
                zh_TW: ["延長時段僅適用於日內圖表"]
            }
        },
        644794: e => {
            e.exports = {
                ar: ["الجلسات"],
                ca_ES: "Sessions",
                cs: "Sessions",
                de: "Sessions",
                el: "Sessions",
                en: "Sessions",
                es: ["Sesiones"],
                fa: "Sessions",
                fr: "Sessions",
                he_IL: ["סשנים"],
                hu_HU: "Sessions",
                id_ID: ["Sesi"],
                it: ["Sessioni"],
                ja: ["セッション"],
                ko: ["세션"],
                ms_MY: ["Sesi-sesi"],
                nl_NL: "Sessions",
                pl: ["Sesje"],
                pt: ["Sessões"],
                ro: "Sessions",
                ru: ["Сессии"],
                sv: ["Sessioner"],
                th: ["เซสชั่น"],
                tr: ["Oturum"],
                vi: ["Phiên"],
                zh: ["交易时段"],
                zh_TW: ["交易時段"]
            }
        },
        21329: e => {
            e.exports = {
                ar: ["نطاق قياس لوغاريتمي"],
                ca_ES: ["Alterna l'escala logarítmica"],
                cs: ["Přepnout Log Měřítko"],
                de: ["Auf logarithmische Skalierung umschalten"],
                el: ["Λογαριθμική κλίμακα"],
                en: "Toggle Log Scale",
                es: ["Alternar escala logarítmica"],
                fa: "Toggle Log Scale",
                fr: ["Mise à l'échelle logarithmique"],
                he_IL: ["הפעל/כבה סקאלה לוגריתמית"],
                hu_HU: ["Váltás Log Skála"],
                id_ID: ["Toggle Skala Log"],
                it: ["Seleziona/Deseleziona scala logaritmica"],
                ja: ["ログスケール切り替え"],
                ko: ["로그눈금토글"],
                ms_MY: ["Skala Log Togol"],
                nl_NL: ["Schakel log schaal"],
                pl: ["Przełącz na skalę logarytmiczną"],
                pt: ["Alternar Para Escala Logarítmica"],
                ro: "Toggle Log Scale",
                ru: ["Логарифмическая шкала вкл/выкл"],
                sv: ["Slå på/av Log-skala"],
                th: ["สลับเป็นมาตราแบบล๊อก"],
                tr: ["Logaritmik Ölçeklendirmeyi Aç/Kapat"],
                vi: ["Chuyển đổi Quy mô Đăng nhập"],
                zh: ["切换为对数坐标"],
                zh_TW: ["切換為對數刻度"]
            }
        },
        843737: e => {
            e.exports = {
                ar: ["نطاق قياس النسبة المئوية"],
                ca_ES: ["Altarna percentatge"],
                cs: ["Přepnout na Procenta"],
                de: ["Auf Prozent umschalten"],
                el: ["Ποσοστιαία κλίμακα"],
                en: "Toggle Percentage",
                es: ["Alternar porcentaje"],
                fa: "Toggle Percentage",
                fr: ["Echelle en pourcentage"],
                he_IL: ["החלף אחוזים"],
                hu_HU: ["Váltás Százalék"],
                id_ID: ["Toggle Persentase"],
                it: ["Seleziona/Deseleziona percentuale"],
                ja: ["％スケール切り替え"],
                ko: ["백분율토글"],
                ms_MY: ["Peratusan Togol"],
                nl_NL: ["Schakel percentage"],
                pl: ["Włącz skalę procentową"],
                pt: ["Alternar Para Percentagem"],
                ro: "Toggle Percentage",
                ru: ["Процентная шкала вкл/выкл"],
                sv: ["Slå på/av procentsats"],
                th: ["สลับเป็นเปอร์เซ็นต์"],
                tr: ["Yüzde Olarak Değiştir"],
                vi: ["Chuyển đồi Phần trăm"],
                zh: ["切换为百分比坐标"],
                zh_TW: ["切換為百分比"]
            }
        },
        208877: e => {
            e.exports = {
                ar: "ext",
                ca_ES: "ext",
                cs: "ext",
                de: ["verl."],
                el: "ext",
                en: "ext",
                es: "ext",
                fa: "ext",
                fr: "ext",
                he_IL: ["הרחב"],
                hu_HU: "ext",
                id_ID: ["perp"],
                it: ["est"],
                ja: ["時間外"],
                ko: ["확장"],
                ms_MY: ["dilanjutkan"],
                nl_NL: "ext",
                pl: ["rozsz"],
                pt: ["est"],
                ro: "ext",
                ru: ["расш"],
                sv: ["utökad"],
                th: ["ต่อ"],
                tr: ["ek"],
                vi: ["mở rộng"],
                zh: ["延时"],
                zh_TW: ["延時"]
            }
        }
    }
]);
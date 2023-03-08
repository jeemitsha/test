(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [87839], {
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
        480849: t => {
            t.exports = {
                button: "button-VE6mnNFT"
            }
        },
        915812: (t, e, r) => {
            "use strict";
            r.d(e, {
                SquareButton: () => n.SquareButton,
                SquareAnchorButton: () => i.SquareAnchorButton
            });
            r(221191);
            var n = r(422175),
                i = r(951144)
        },
        951144: (t, e, r) => {
            "use strict";
            r.d(e, {
                SquareAnchorButton: () => c
            });
            var n = r(50959),
                i = r(301792),
                o = r(8626),
                s = r(221191);

            function a(t) {
                const {
                    className: e,
                    color: r,
                    variant: n,
                    size: i,
                    stretch: s,
                    animated: a,
                    icon: c,
                    iconOnly: u,
                    startIcon: l,
                    endIcon: d,
                    ...h
                } = t;
                return { ...h,
                    ...(0, o.filterDataProps)(t),
                    ...(0, o.filterAriaProps)(t)
                }
            }

            function c(t) {
                const {
                    reference: e
                } = t, {
                    isGrouped: r,
                    cellState: o,
                    disablePositionAdjustment: c
                } = (0, n.useContext)(i.ControlGroupContext), u = (0, s.getSquareButtonClasses)({ ...t,
                    isGrouped: r,
                    cellState: o,
                    disablePositionAdjustment: c,
                    isAnchor: !0
                });
                return n.createElement("a", { ...a(t),
                    className: u,
                    ref: e
                }, n.createElement(s.SquareButtonContent, { ...t
                }))
            }
        },
        221191: (t, e, r) => {
            "use strict";
            r.d(e, {
                getSquareButtonClasses: () => u,
                SquareButtonContent: () => l
            });
            var n = r(50959),
                i = r(497754),
                o = r(307754),
                s = r(83436),
                a = r(428146),
                c = r.n(a);

            function u(t) {
                const {
                    color: e = "brand",
                    size: r = "medium",
                    variant: n = "primary",
                    stretch: s = !1,
                    icon: a,
                    startIcon: u,
                    endIcon: l,
                    iconOnly: d = !1,
                    className: h,
                    isGrouped: p,
                    cellState: m,
                    disablePositionAdjustment: v = !1,
                    isAnchor: f = !1
                } = t, g = function(t) {
                    let e = "";
                    return 0 !== t && (1 & t && (e = i(e, c()["no-corner-top-left"])), 2 & t && (e = i(e, c()["no-corner-top-right"])), 4 & t && (e = i(e, c()["no-corner-bottom-right"])), 8 & t && (e = i(e, c()["no-corner-bottom-left"]))), e
                }((0, o.getGroupCellRemoveRoundBorders)(m));
                return i(h, c().button, c()[`size-${r}`], c()[`color-${e}`], c()[`variant-${n}`], s && c().stretch, (a || u) && c()["with-start-icon"], l && c()["with-end-icon"], d && c()["icon-only"], g, p && c().grouped, p && !v && c()["adjust-position"], p && m.isTop && c()["first-row"], p && m.isLeft && c()["first-col"], f && c().link)
            }

            function l(t) {
                const {
                    startIcon: e,
                    icon: r,
                    iconOnly: i,
                    children: o,
                    endIcon: a
                } = t, u = null != e ? e : r;
                return n.createElement(n.Fragment, null, u && n.createElement(s.Icon, {
                    icon: u,
                    className: c()["start-icon-wrap"]
                }), o && n.createElement("span", {
                    className: c().content
                }, o), a && !i && n.createElement(s.Icon, {
                    icon: a,
                    className: c()["end-icon-wrap"]
                }))
            }
        },
        422175: (t, e, r) => {
            "use strict";
            r.d(e, {
                SquareButton: () => c
            });
            var n = r(50959),
                i = r(301792),
                o = r(8626),
                s = r(221191);

            function a(t) {
                const {
                    className: e,
                    color: r,
                    variant: n,
                    size: i,
                    stretch: s,
                    animated: a,
                    icon: c,
                    iconOnly: u,
                    startIcon: l,
                    endIcon: d,
                    ...h
                } = t;
                return { ...h,
                    ...(0, o.filterDataProps)(t),
                    ...(0, o.filterAriaProps)(t)
                }
            }

            function c(t) {
                const {
                    reference: e,
                    ...r
                } = t, {
                    isGrouped: o,
                    cellState: c,
                    disablePositionAdjustment: u
                } = (0, n.useContext)(i.ControlGroupContext), l = (0, s.getSquareButtonClasses)({ ...r,
                    isGrouped: o,
                    cellState: c,
                    disablePositionAdjustment: u
                });
                return n.createElement("button", { ...a(r),
                    className: l,
                    ref: e
                }, n.createElement(s.SquareButtonContent, { ...r
                }))
            }
        },
        301792: (t, e, r) => {
            "use strict";
            r.d(e, {
                ControlGroupContext: () => n
            });
            const n = r(50959).createContext({
                isGrouped: !1,
                cellState: {
                    isTop: !0,
                    isRight: !0,
                    isBottom: !0,
                    isLeft: !0
                }
            })
        },
        307754: (t, e, r) => {
            "use strict";

            function n(t) {
                let e = 0;
                return t.isTop && t.isLeft || (e += 1), t.isTop && t.isRight || (e += 2), t.isBottom && t.isLeft || (e += 8), t.isBottom && t.isRight || (e += 4), e
            }
            r.d(e, {
                getGroupCellRemoveRoundBorders: () => n
            })
        },
        8626: (t, e, r) => {
            "use strict";

            function n(t) {
                return o(t, s)
            }

            function i(t) {
                return o(t, a)
            }

            function o(t, e) {
                const r = Object.entries(t).filter(e),
                    n = {};
                for (const [t, e] of r) n[t] = e;
                return n
            }

            function s(t) {
                const [e, r] = t;
                return 0 === e.indexOf("data-") && "string" == typeof r
            }

            function a(t) {
                return 0 === t[0].indexOf("aria-")
            }
            r.d(e, {
                filterDataProps: () => n,
                filterAriaProps: () => i,
                filterProps: () => o,
                isDataAttribute: () => s,
                isAriaAttribute: () => a
            })
        },
        551080: (t, e, r) => {
            "use strict";

            function n(t) {
                return e => {
                    t.forEach((t => {
                        "function" == typeof t ? t(e) : null != t && (t.current = e)
                    }))
                }
            }

            function i(t) {
                return n([t])
            }
            r.d(e, {
                mergeRefs: () => n,
                isomorphicRef: () => i
            })
        },
        98470: (t, e, r) => {
            "use strict";
            r.d(e, {
                ButtonType: () => n,
                Button: () => s
            });
            var n, i = r(50959),
                o = r(480849);
            ! function(t) {
                t[t.PlusValue = 0] = "PlusValue", t[t.IncDec = 1] = "IncDec", t[t.Clear = 2] = "Clear", t[t.Default = 3] = "Default"
            }(n || (n = {}));
            class s extends i.PureComponent {
                constructor(t) {
                    super(t), this._createClickHandler = (t, e = n.Default) => () => {
                        this.props.onClick(t, e)
                    }
                }
                render() {
                    let t;
                    switch (this.props.type) {
                        case n.PlusValue:
                        case n.IncDec:
                            t = this.props.value;
                            break;
                        case n.Clear:
                            t = "clear";
                            break;
                        case n.Default:
                            t = "default"
                    }
                    return i.createElement("div", {
                        className: o.button,
                        "data-value": t,
                        "data-name": `qtyButtonCalculator-${t}`,
                        onClick: this._createClickHandler(this.props.value, this.props.type)
                    }, this.props.icon || this.props.value)
                }
            }
        },
        531327: (t, e, r) => {
            "use strict";

            function n(t) {
                return i() ? 0 : o() ? 46 : Math.min(Math.max(t, 46), 450)
            }
            r.d(e, {
                getWidgetBarPadding: () => n,
                isWidgetBarFullscreen: () => i
            });
            const i = () => !window.matchMedia("screen and (min-width: 768px)").matches,
                o = () => !window.matchMedia("screen and (min-width: 1280px)").matches
        },
        314308: (t, e, r) => {
            "use strict";

            function n(t, e, r, n, i) {
                function o(i) {
                    if (t > i.timeStamp) return;
                    const o = i.target;
                    void 0 !== r && null !== e && null !== o && o.ownerDocument === n && (e.contains(o) || r(i))
                }
                return i.click && n.addEventListener("click", o, !1), i.mouseDown && n.addEventListener("mousedown", o, !1), i.touchEnd && n.addEventListener("touchend", o, !1), i.touchStart && n.addEventListener("touchstart", o, !1), () => {
                    n.removeEventListener("click", o, !1), n.removeEventListener("mousedown", o, !1), n.removeEventListener("touchend", o, !1), n.removeEventListener("touchstart", o, !1)
                }
            }
            r.d(e, {
                addOutsideEventListener: () => n
            })
        },
        575658: (t, e, r) => {
            "use strict";
            r.d(e, {
                setFixedBodyState: () => a
            });
            var n = r(76107),
                i = r(531327);
            let o = 0,
                s = !1;

            function a(t) {
                const {
                    body: e
                } = document, r = e.querySelector(".widgetbar-wrap");
                if (t && 1 == ++o) {
                    const t = (0, n.getCSSProperty)(e, "overflow"),
                        i = (0, n.getCSSPropertyNumericValue)(e, "padding-right");
                    "hidden" !== t.toLowerCase() && e.scrollHeight > e.offsetHeight && ((0, n.setStyle)(r, "right", `${(0,n.getScrollbarWidth)()}px`), e.style.paddingRight = `${i+(0,n.getScrollbarWidth)()}px`, s = !0), e.classList.add("i-no-scroll")
                } else if (!t && o > 0 && 0 == --o && (e.classList.remove("i-no-scroll"), s)) {
                    (0, n.setStyle)(r, "right", "0px");
                    let t = 0;
                    t = r ? (0, i.getWidgetBarPadding)((0, n.getContentWidth)(r)) : 0, e.scrollHeight <= e.clientHeight && (t -= (0, n.getScrollbarWidth)()), e.style.paddingRight = (t < 0 ? 0 : t) + "px", s = !1
                }
            }
        },
        951292: (t, e, r) => {
            "use strict";
            r.d(e, {
                useOutsideEvent: () => o
            });
            var n = r(50959),
                i = r(314308);

            function o(t) {
                const {
                    click: e,
                    mouseDown: r,
                    touchEnd: o,
                    touchStart: s,
                    handler: a,
                    reference: c,
                    ownerDocument: u = document
                } = t, l = (0, n.useRef)(null), d = (0, n.useRef)(new CustomEvent("timestamp").timeStamp);
                return (0, n.useLayoutEffect)((() => {
                    const t = {
                            click: e,
                            mouseDown: r,
                            touchEnd: o,
                            touchStart: s
                        },
                        n = c ? c.current : l.current;
                    return (0, i.addOutsideEventListener)(d.current, n, a, u, t)
                }), [e, r, o, s, a]), c || l
            }
        },
        18182: (t, e, r) => {
            "use strict";
            r.d(e, {
                MatchMedia: () => i
            });
            var n = r(50959);
            class i extends n.PureComponent {
                constructor(t) {
                    super(t), this._handleChange = () => {
                        this.forceUpdate()
                    }, this.state = {
                        query: window.matchMedia(this.props.rule)
                    }
                }
                componentDidMount() {
                    this._subscribe(this.state.query)
                }
                componentDidUpdate(t, e) {
                    this.state.query !== e.query && (this._unsubscribe(e.query), this._subscribe(this.state.query))
                }
                componentWillUnmount() {
                    this._unsubscribe(this.state.query)
                }
                render() {
                    return this.props.children(this.state.query.matches)
                }
                static getDerivedStateFromProps(t, e) {
                    return t.rule !== e.query.media ? {
                        query: window.matchMedia(t.rule)
                    } : null
                }
                _subscribe(t) {
                    t.addListener(this._handleChange)
                }
                _unsubscribe(t) {
                    t.removeListener(this._handleChange)
                }
            }
        },
        829725: (t, e, r) => {
            "use strict";
            r.d(e, {
                OverlapManager: () => o,
                getRootOverlapManager: () => a
            });
            var n = r(650151);
            class i {
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
            class o {
                constructor(t = document) {
                    this._storage = new i, this._windows = new Map, this._index = 0, this._document = t, this._container = t.createDocumentFragment()
                }
                setContainer(t) {
                    const e = this._container,
                        r = null === t ? this._document.createDocumentFragment() : t;
                    ! function(t, e) {
                        Array.from(t.childNodes).forEach((t => {
                            t.nodeType === Node.ELEMENT_NODE && e.appendChild(t)
                        }))
                    }(e, r), this._container = r
                }
                registerWindow(t) {
                    this._storage.has(t) || this._storage.add(t)
                }
                ensureWindow(t, e = {
                    position: "fixed",
                    direction: "normal"
                }) {
                    const r = this._windows.get(t);
                    if (void 0 !== r) return r;
                    this.registerWindow(t);
                    const n = this._document.createElement("div");
                    if (n.style.position = e.position, n.style.zIndex = this._index.toString(), n.dataset.id = t, void 0 !== e.index) {
                        const t = this._container.childNodes.length;
                        if (e.index >= t) this._container.appendChild(n);
                        else if (e.index <= 0) this._container.insertBefore(n, this._container.firstChild);
                        else {
                            const t = this._container.childNodes[e.index];
                            this._container.insertBefore(n, t)
                        }
                    } else "reverse" === e.direction ? this._container.insertBefore(n, this._container.firstChild) : this._container.appendChild(n);
                    return this._windows.set(t, n), ++this._index, n
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
                if (null !== e) return (0, n.ensureDefined)(s.get(e)); {
                    const e = new o(t),
                        r = function(t) {
                            const e = t.createElement("div");
                            return e.style.position = "absolute", e.style.zIndex = 150..toString(), e.style.top = "0px", e.style.left = "0px", e.id = "overlap-manager-root", e
                        }(t);
                    return s.set(r, e), e.setContainer(r), t.body.appendChild(r), e
                }
            }
        },
        368337: (t, e, r) => {
            "use strict";
            r.d(e, {
                makeOverlapable: () => o
            });
            var n = r(50959),
                i = r(707533);

            function o(t) {
                return class extends n.PureComponent {
                    render() {
                        const {
                            isOpened: e,
                            root: r
                        } = this.props;
                        if (!e) return null;
                        const o = n.createElement(t, { ...this.props,
                            zIndex: 150
                        });
                        return "parent" === r ? o : n.createElement(i.Portal, null, o)
                    }
                }
            }
        },
        707533: (t, e, r) => {
            "use strict";
            r.d(e, {
                Portal: () => c,
                PortalContext: () => u
            });
            var n = r(50959),
                i = r(500962),
                o = r(777491),
                s = r(829725),
                a = r(670797);
            class c extends n.PureComponent {
                constructor() {
                    super(...arguments), this._uuid = (0, o.guid)()
                }
                componentWillUnmount() {
                    this._manager().removeWindow(this._uuid)
                }
                render() {
                    const t = this._manager().ensureWindow(this._uuid, this.props.layerOptions);
                    return t.style.top = this.props.top || "", t.style.bottom = this.props.bottom || "", t.style.left = this.props.left || "", t.style.right = this.props.right || "", t.style.pointerEvents = this.props.pointerEvents || "", i.createPortal(n.createElement(u.Provider, {
                        value: this
                    }, this.props.children), t)
                }
                moveToTop() {
                    this._manager().moveToTop(this._uuid)
                }
                _manager() {
                    return null === this.context ? (0, s.getRootOverlapManager)() : this.context
                }
            }
            c.contextType = a.SlotContext;
            const u = n.createContext(null)
        },
        670797: (t, e, r) => {
            "use strict";
            r.d(e, {
                Slot: () => i,
                SlotContext: () => o
            });
            var n = r(50959);
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
            const o = n.createContext(null)
        },
        778371: (t, e, r) => {
            "use strict";
            r.d(e, {
                BrokerService: () => i
            });
            var n = r(650151);
            class i {
                constructor(t) {
                    this._activeBroker = null, this._trading = t, this._trading.onConnectionStatusChange.subscribe(this, this._onStatusChange), this._onStatusChange(this._trading.connectStatus())
                }
                activeBroker() {
                    return this._activeBroker
                }
                trading() {
                    return this._trading
                }
                _stopService() {
                    this.stopService(), (0, n.ensureNotNull)(this._activeBroker).currentAccountUpdate.unsubscribeAll(this)
                }
                _startService() {
                    this.startService(), (0, n.ensureNotNull)(this._activeBroker).currentAccountUpdate.subscribe(this, this._onCurrentAccountUpdate)
                }
                _onStatusChange(t) {
                    const e = this._trading.activeBroker();
                    this._activeBroker === e && 1 === t || (null !== this._activeBroker && (this._stopService(), this._activeBroker = null), null !== e && 1 === t && (this._activeBroker = e, this._startService(), this._lastAccountId = e.currentAccount()))
                }
                _onCurrentAccountUpdate() {
                    const t = (0, n.ensureNotNull)(this._activeBroker);
                    this._lastAccountId !== t.currentAccount() && (this.stopService(), this.startService(), this._lastAccountId = t.currentAccount())
                }
            }
        },
        22625: (t, e, r) => {
            "use strict";
            r.d(e, {
                makeSubjectFromWatchedValue: () => f,
                comparator: () => g,
                shouldShowTotal: () => _,
                displayedLeverage: () => y,
                calculatePipValue: () => b,
                calculateTradeValue: () => B,
                calculateTradeValueByBigPointValue: () => w,
                calculateUsedMargin: () => O,
                calculatedMarginRatio: () => T,
                formatInfoValue: () => S,
                formatRiskReward: () => k,
                alignQuotesToMinTick: () => C,
                checkPriceByOrderType: () => E,
                prepareCalculatorEventText: () => P,
                i18nOrderResultText: () => A,
                createCustomFieldModels: () => I,
                prepareTradableSolution: () => q,
                convertToBaseMonetaryUnit: () => M,
                formatValue: () => D
            });
            var n = r(777754),
                i = r(583912),
                o = r(947488),
                s = r(960521),
                a = r(869403),
                c = r.n(a),
                u = r(988411),
                l = r.n(u),
                d = r(758337),
                h = r(927592),
                p = r(738023),
                m = r(98470),
                v = r(691520);

            function f(t) {
                const e = new o.BehaviorSubject(t.value()),
                    r = t => {
                        e.next(t)
                    };
                return t.subscribe(r), {
                    subject: e,
                    unsubscribe: () => t.unsubscribe(r)
                }
            }

            function g(t, e) {
                return (0, d.deepEquals)(t, e)[0]
            }

            function _(t) {
                return void 0 !== t && Boolean(t.showTotal)
            }

            function y(t, e) {
                if (void 0 !== t) return t;
                if (void 0 !== e) {
                    const t = Math.round(1 / e);
                    return String(t) + ":1"
                }
                return null
            }

            function b(t, e, r) {
                return null !== t ? (void 0 !== r ? t * r : t) * e : 0
            }

            function B(t, e, r, n, i) {
                return w(t, e, r / n, i)
            }

            function w(t, e, r, n) {
                return t * e * r * (n || 1)
            }

            function O(t, e) {
                return void 0 !== e ? t * e : 0
            }

            function T(t, e) {
                const r = 0 !== e ? 100 * t / e : 0;
                return r > 100 ? 100 : r
            }

            function S(t) {
                if ("number" == typeof t) {
                    const e = (0, h.splitThousands)((t || 0).toFixed(2), " ");
                    return Number.isInteger(t) || t >= 1 ? e : function(t) {
                        if (Number.isInteger(t)) return t + "";
                        return t < 1 ? function(t) {
                            const e = (t + "").split(".")[1] || "";
                            let r = e.length;
                            for (let t = 0; t < e.length; t++)
                                if ("0" !== e[t]) {
                                    r = t + 1;
                                    break
                                }
                            return t.toFixed(r)
                        }(t) : t.toFixed(2)
                    }(t)
                }
                return (0, h.splitThousands)(t, " ")
            }
            const x = new p.VolumeFormatter(2);

            function k(t, e) {
                return null !== t && null !== e && t / e > 0 ? x.format(t / e) : ""
            }

            function C(t, e, r) {
                const n = Object.assign({}, t);
                return ["trade", "ask", "bid"].forEach((t => {
                    const i = n[t];
                    if (void 0 !== i) {
                        const o = (0, v.getMinTick)({
                            minTick: e,
                            price: i,
                            variableMinTickData: r
                        });
                        n[t] = function(t, e) {
                            return e > 1 ? t : (0, s.Big)(t).div(e).round(0, 1).mul(e).toNumber()
                        }(i, o)
                    }
                })), n
            }

            function E(t, e, r) {
                return 4 === t ? null === e || null === r : 3 === t ? null === r : null === e
            }

            function P(t, e) {
                switch (e) {
                    case m.ButtonType.IncDec:
                        return t < 0 ? "-" : "+";
                    case m.ButtonType.PlusValue:
                        return String(t);
                    case m.ButtonType.Clear:
                        return "Clear";
                    default:
                        return "Default"
                }
            }
            const N = " ",
                A = {
                    buy: {
                        market: (t, e) => n.t(null, void 0, r(447088)).format({
                            qty: t,
                            symbol: e,
                            whitespaceNoBreak: N
                        }),
                        stop: (t, e, i) => n.t(null, void 0, r(996188)).format({
                            qty: t,
                            symbol: e,
                            stopPrice: i,
                            whitespaceNoBreak: N
                        }),
                        limit: (t, e, i) => n.t(null, void 0, r(227858)).format({
                            qty: t,
                            symbol: e,
                            limitPrice: i,
                            whitespaceNoBreak: N
                        }),
                        stopLimit: (t, e, i, o) => n.t(null, void 0, r(409718)).format({
                            qty: t,
                            symbol: e,
                            stopPrice: i,
                            limitPrice: o,
                            whitespaceNoBreak: N
                        })
                    },
                    sell: {
                        market: (t, e) => n.t(null, void 0, r(575976)).format({
                            qty: t,
                            symbol: e,
                            whitespaceNoBreak: N
                        }),
                        stop: (t, e, i) => n.t(null, void 0, r(481577)).format({
                            qty: t,
                            symbol: e,
                            stopPrice: i,
                            whitespaceNoBreak: N
                        }),
                        limit: (t, e, i) => n.t(null, void 0, r(55500)).format({
                            qty: t,
                            symbol: e,
                            limitPrice: i,
                            whitespaceNoBreak: N
                        }),
                        stopLimit: (t, e, i, o) => n.t(null, void 0, r(530809)).format({
                            qty: t,
                            symbol: e,
                            stopPrice: i,
                            limitPrice: o,
                            whitespaceNoBreak: N
                        })
                    }
                };

            function I(t, e, r, n, i) {
                const o = [];
                return void 0 !== n && Array.isArray(n.customFields) && n.customFields.forEach((n => {
                    if ("TextWithCheckBox" === n.inputType && o.push({
                            id: n.id,
                            type: n.inputType,
                            inputType: n.customInfo.asterix ? "password" : "text",
                            placeholder: n.placeHolder || "",
                            title: n.title || "",
                            checkboxTitle: n.customInfo.checkboxTitle,
                            text: new(l())(n.value.text),
                            checked: new(l())(n.value.checked),
                            status: e,
                            onControlFocused: new(c())
                        }), "Checkbox" === n.inputType) {
                        let r;
                        const s = null == i ? void 0 : i[n.id];
                        try {
                            r = JSON.parse(s)
                        } catch (t) {
                            r = s
                        }
                        o.push({
                            id: n.id,
                            type: n.inputType,
                            title: n.title,
                            help: n.help,
                            checked: new(l())(null != r ? r : n.value),
                            status: e,
                            onControlFocused: new(c()),
                            disabled: t && !n.supportModify,
                            saveToSettings: n.saveToSettings
                        })
                    }
                    if ("ComboBox" === n.inputType && Array.isArray(n.items)) {
                        let e = n.items[0];
                        if (i && n.id in i) {
                            const t = i[n.id],
                                r = n.items.find((e => e.value === t));
                            void 0 !== r && (e = r)
                        } else n.forceUserEnterInitialValue && !t && (e = void 0);
                        o.push({
                            id: n.id,
                            type: n.inputType,
                            title: n.title,
                            items: n.preventModify && t && e ? [e] : n.items,
                            selectedItem: new(l())(null == e ? void 0 : e.value),
                            onControlFocused: new(c()),
                            saveToSettings: n.saveToSettings,
                            isRequired: Boolean(n.forceUserEnterInitialValue),
                            alwaysShowAttachedErrors: r
                        })
                    }
                })), o
            }
            async function q(t, e) {
                if (void 0 !== t.solutions) {
                    let o, s;
                    if ("changeSymbol" in t.solutions) {
                        const e = t.solutions.changeSymbol;
                        o = n.t(null, void 0, r(562030)), s = () => i.linking.symbol.setValue(e)
                    } else {
                        const i = t.solutions.changeAccount,
                            a = (await e.accountsMetainfo()).filter((t => t.id === i))[0].name;
                        o = n.t(null, void 0, r(134542)).replace("{accountName}", a), s = () => e.setCurrentAccount(i)
                    }
                    return {
                        title: o,
                        apply: s
                    }
                }
            }

            function M(t, e) {
                return void 0 === e ? t : (0, s.Big)(t).div(e).toNumber()
            }

            function D(t, e) {
                if (null === t) return null;
                const r = e.format(t);
                if (e.parse) {
                    const t = e.parse(r);
                    if (t.res) return t.value
                }
                return parseFloat(r)
            }
        },
        113258: (t, e, r) => {
            "use strict";
            r.d(e, {
                isBracketOrderRawData: () => h,
                cropOrderData: () => m,
                OrdersService: () => v
            });
            var n = r(650151),
                i = r(869403),
                o = r.n(i),
                s = r(758337),
                a = r(272001),
                c = r(778371),
                u = r(910368),
                l = r(328875);
            const d = (0, a.getLogger)("Trading.OrderService");

            function h(t) {
                return "parentId" in t && void 0 !== t.parentId && "parentType" in t && void 0 !== t.parentType
            }

            function p(t) {
                return 1 === t.type ? (0, n.ensureDefined)(t.limitPrice) : (0, n.ensureDefined)(t.stopPrice)
            }

            function m(t) {
                return {
                    id: t.id,
                    parentId: t.parentId,
                    parentType: t.parentType,
                    symbol: t.symbol,
                    type: t.type,
                    side: t.side,
                    avgPrice: t.avgPrice,
                    limitPrice: t.limitPrice,
                    stopPrice: t.stopPrice,
                    price: t.price,
                    stopLoss: t.stopLoss,
                    trailingStopPips: t.trailingStopPips,
                    stopType: t.stopType,
                    takeProfit: t.takeProfit,
                    status: t.status,
                    qty: t.qty
                }
            }
            class v extends c.BrokerService {
                constructor() {
                    super(...arguments), this._existingOrdersIds = new Set, this._activeOrders = new Map, this._activeOrderUpdate = new(o()), this._activeOrdersRemoved = new(o()), this._ordersRejected = new(o())
                }
                destroy() {
                    this.stopService()
                }
                async getCurrency() {
                    const t = (0, n.ensureNotNull)(this.activeBroker()),
                        e = await t.accountMetainfo();
                    return (0, u.getCurrency)(e, !0) || "USD"
                }
                orders() {
                    return (0, n.ensureNotNull)(this.activeBroker()).orders()
                }
                find(t) {
                    return this._activeOrders.get(t) || null
                }
                activeOrders() {
                    return Array.from(this._activeOrders.values())
                }
                activeOrdersUpdated() {
                    return this._activeOrderUpdate
                }
                activeOrdersRemoved() {
                    return this._activeOrdersRemoved
                }
                orderRejected() {
                    return this._ordersRejected
                }
                stopService() {
                    this._clearOrders();
                    (0, n.ensureNotNull)(this.activeBroker()).orderUpdate.unsubscribeAll(this)
                }
                startService() {
                    this._clearOrders(), this._requestOrders()
                }
                _clearOrders() {
                    const t = Array.from(this._activeOrders.keys());
                    this._activeOrders.clear(), this._existingOrdersIds.clear(), t.length > 0 && d.logNormal(`All orders removed, id's: ${t}`), this._activeOrdersRemoved.fire(t)
                }
                async _requestOrders() {
                    const t = this.activeBroker();
                    if (!t) return;
                    const e = await t.orders();
                    for (const t of e) this._addActiveOrder(t);
                    t.orderUpdate.unsubscribeAll(this), t.orderUpdate.subscribe(this, this._addActiveOrder)
                }
                _addActiveOrder(t) {
                    this._logOrderUpdate(t);
                    const e = t.id,
                        r = this._activeOrders.has(e),
                        n = 5 === t.status,
                        i = 6 !== t.status && 3 !== t.status,
                        o = 2 === t.type;
                    if (r) {
                        if (i || o) return this._activeOrders.delete(e), void this._activeOrdersRemoved.fire([e])
                    } else {
                        if (o || i && !n) return;
                        if (n) return void this._ordersRejected.fire(p(t))
                    }
                    const s = this._getOrderData(t);
                    this._activeOrders.set(e, s), this._activeOrderUpdate.fire(s)
                }
                _logOrderUpdate(t) {
                    const e = t.id;
                    let r = "update";
                    this._existingOrdersIds.has(e) || (r = "add", this._existingOrdersIds.add(e)),
                        function(t, e) {
                            e(JSON.stringify(m(t)))
                        }(t, (t => {
                            d.logNormal(`Order ${r}: ${t}`)
                        }))
                }
                _getOrderData(t) {
                    const e = p(t);
                    (0, s.isNumber)(e) || d.logError("order price is not defined");
                    const r = (0, n.ensureNotNull)(this.activeBroker()).metainfo().configFlags,
                        i = Boolean(r.supportOrderBrackets && r.supportModifyBrackets && r.supportAddBracketsToExistingOrder);
                    return (0, s.merge)((0, s.clone)(t), {
                        price: e,
                        considerFilledQty: !0,
                        supportModify: (0, u.isModifyOrderSupported)(t, r),
                        supportMove: (0, u.isMoveOrderSupported)(t, r),
                        supportCancel: !0,
                        supportBrackets: i,
                        supportModifyOrderPrice: Boolean(r.supportModifyOrderPrice),
                        supportTrailingStop: i && (0, l.checkTrailingStopAvailability)(r)
                    })
                }
            }
        },
        328875: (t, e, r) => {
            "use strict";
            r.d(e, {
                checkTrailingStopAvailability: () => s,
                profitStateByPL: () => a
            });
            var n = r(125226);
            const i = (0, n.isFeatureEnabled)("trailing_stop_from_chart"),
                o = (0, n.isFeatureEnabled)("enable_ts_while_brokers_dont_support_ts_modify");

            function s(t) {
                return Boolean(t.supportTrailingStop && t.supportAddBracketsToExistingOrder && (o || t.supportModifyTrailingStop) && i)
            }

            function a(t) {
                const e = null === t ? 0 : Math.round(100 * t) / 100;
                return e > 0 ? "positive" : e < 0 ? "negative" : "neutral"
            }
        },
        954760: (t, e, r) => {
            "use strict";
            r.d(e, {
                abbreviatedNumber: () => o
            });
            var n = r(951512);
            const i = ["", "K", "M", "G", "T", "Y"];

            function o(t) {
                if (t < 1) return n.NumericFormatter.formatNoE(t);
                let e = 0,
                    r = +t;
                if (isFinite(r))
                    for (; r >= 1e3 && r % 100 == 0;) e++, r /= 1e3;
                return r + (e < i.length ? i[e] : "e" + 3 * e)
            }
        }
    }
]);
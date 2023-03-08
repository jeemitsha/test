(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [97276, 34136, 94291, 78703, 83639], {
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
        44342: e => {
            e.exports = {
                toast: "toast-r9bFT7mJ",
                "intent-success": "intent-success-r9bFT7mJ",
                "intent-warning": "intent-warning-r9bFT7mJ",
                "intent-danger": "intent-danger-r9bFT7mJ",
                image: "image-r9bFT7mJ",
                "main-content": "main-content-r9bFT7mJ",
                title: "title-r9bFT7mJ",
                "main-text": "main-text-r9bFT7mJ",
                "secondary-text": "secondary-text-r9bFT7mJ",
                actions: "actions-r9bFT7mJ",
                "close-icon": "close-icon-r9bFT7mJ",
                "close-button": "close-button-r9bFT7mJ",
                "adjust-for-close-button": "adjust-for-close-button-r9bFT7mJ"
            }
        },
        587914: e => {
            e.exports = {
                toast: "toast-P_aSOGQA"
            }
        },
        540975: (e, t, n) => {
            "use strict";
            n.d(t, {
                AnchorButton: () => m,
                Button: () => u
            });
            var o = n(50959),
                r = n(915812);

            function a(e = "default") {
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

            function i(e = "m") {
                switch (e) {
                    case "s":
                        return "xsmall";
                    case "m":
                        return "small";
                    case "l":
                        return "large"
                }
            }

            function c(e) {
                const {
                    intent: t,
                    size: n,
                    appearance: o,
                    useFullWidth: r,
                    icon: c,
                    ...u
                } = e;
                return { ...u,
                    color: s(t),
                    size: i(n),
                    variant: a(o),
                    stretch: r,
                    startIcon: c
                }
            }

            function u(e) {
                return o.createElement(r.SquareButton, { ...c(e)
                })
            }

            function l(e) {
                const {
                    intent: t,
                    size: n,
                    appearance: o,
                    useFullWidth: r,
                    icon: c,
                    ...u
                } = e;
                return { ...u,
                    color: s(t),
                    size: i(n),
                    variant: a(o),
                    stretch: r,
                    startIcon: c
                }
            }

            function m(e) {
                return o.createElement(r.SquareAnchorButton, { ...l(e)
                })
            }
        },
        915812: (e, t, n) => {
            "use strict";
            n.d(t, {
                SquareButton: () => o.SquareButton,
                SquareAnchorButton: () => r.SquareAnchorButton
            });
            n(221191);
            var o = n(422175),
                r = n(951144)
        },
        951144: (e, t, n) => {
            "use strict";
            n.d(t, {
                SquareAnchorButton: () => c
            });
            var o = n(50959),
                r = n(301792),
                a = n(8626),
                s = n(221191);

            function i(e) {
                const {
                    className: t,
                    color: n,
                    variant: o,
                    size: r,
                    stretch: s,
                    animated: i,
                    icon: c,
                    iconOnly: u,
                    startIcon: l,
                    endIcon: m,
                    ...d
                } = e;
                return { ...d,
                    ...(0,
                        a.filterDataProps)(e),
                    ...(0, a.filterAriaProps)(e)
                }
            }

            function c(e) {
                const {
                    reference: t
                } = e, {
                    isGrouped: n,
                    cellState: a,
                    disablePositionAdjustment: c
                } = (0, o.useContext)(r.ControlGroupContext), u = (0, s.getSquareButtonClasses)({ ...e,
                    isGrouped: n,
                    cellState: a,
                    disablePositionAdjustment: c,
                    isAnchor: !0
                });
                return o.createElement("a", { ...i(e),
                    className: u,
                    ref: t
                }, o.createElement(s.SquareButtonContent, { ...e
                }))
            }
        },
        221191: (e, t, n) => {
            "use strict";
            n.d(t, {
                getSquareButtonClasses: () => u,
                SquareButtonContent: () => l
            });
            var o = n(50959),
                r = n(497754),
                a = n(307754),
                s = n(83436),
                i = n(428146),
                c = n.n(i);

            function u(e) {
                const {
                    color: t = "brand",
                    size: n = "medium",
                    variant: o = "primary",
                    stretch: s = !1,
                    icon: i,
                    startIcon: u,
                    endIcon: l,
                    iconOnly: m = !1,
                    className: d,
                    isGrouped: h,
                    cellState: p,
                    disablePositionAdjustment: f = !1,
                    isAnchor: g = !1
                } = e, v = function(e) {
                    let t = "";
                    return 0 !== e && (1 & e && (t = r(t, c()["no-corner-top-left"])), 2 & e && (t = r(t, c()["no-corner-top-right"])), 4 & e && (t = r(t, c()["no-corner-bottom-right"])), 8 & e && (t = r(t, c()["no-corner-bottom-left"]))), t
                }((0, a.getGroupCellRemoveRoundBorders)(p));
                return r(d, c().button, c()[`size-${n}`], c()[`color-${t}`], c()[`variant-${o}`], s && c().stretch, (i || u) && c()["with-start-icon"], l && c()["with-end-icon"], m && c()["icon-only"], v, h && c().grouped, h && !f && c()["adjust-position"], h && p.isTop && c()["first-row"], h && p.isLeft && c()["first-col"], g && c().link)
            }

            function l(e) {
                const {
                    startIcon: t,
                    icon: n,
                    iconOnly: r,
                    children: a,
                    endIcon: i
                } = e, u = null != t ? t : n;
                return o.createElement(o.Fragment, null, u && o.createElement(s.Icon, {
                    icon: u,
                    className: c()["start-icon-wrap"]
                }), a && o.createElement("span", {
                    className: c().content
                }, a), i && !r && o.createElement(s.Icon, {
                    icon: i,
                    className: c()["end-icon-wrap"]
                }))
            }
        },
        422175: (e, t, n) => {
            "use strict";
            n.d(t, {
                SquareButton: () => c
            });
            var o = n(50959),
                r = n(301792),
                a = n(8626),
                s = n(221191);

            function i(e) {
                const {
                    className: t,
                    color: n,
                    variant: o,
                    size: r,
                    stretch: s,
                    animated: i,
                    icon: c,
                    iconOnly: u,
                    startIcon: l,
                    endIcon: m,
                    ...d
                } = e;
                return { ...d,
                    ...(0, a.filterDataProps)(e),
                    ...(0, a.filterAriaProps)(e)
                }
            }

            function c(e) {
                const {
                    reference: t,
                    ...n
                } = e, {
                    isGrouped: a,
                    cellState: c,
                    disablePositionAdjustment: u
                } = (0, o.useContext)(r.ControlGroupContext), l = (0, s.getSquareButtonClasses)({ ...n,
                    isGrouped: a,
                    cellState: c,
                    disablePositionAdjustment: u
                });
                return o.createElement("button", { ...i(n),
                    className: l,
                    ref: t
                }, o.createElement(s.SquareButtonContent, { ...n
                }))
            }
        },
        301792: (e, t, n) => {
            "use strict";
            n.d(t, {
                ControlGroupContext: () => o
            });
            const o = n(50959).createContext({
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

            function o(e) {
                let t = 0;
                return e.isTop && e.isLeft || (t += 1), e.isTop && e.isRight || (t += 2), e.isBottom && e.isLeft || (t += 8), e.isBottom && e.isRight || (t += 4), t
            }
            n.d(t, {
                getGroupCellRemoveRoundBorders: () => o
            })
        },
        878003: (e, t, n) => {
            "use strict";
            n.d(t, {
                Toast: () => c
            });
            var o = n(50959),
                r = n(497754),
                a = n(901767),
                s = n(44342),
                i = n.n(s);
            const c = o.memo((e => {
                const {
                    title: t,
                    text: n,
                    secondaryText: s,
                    image: c,
                    actions: u,
                    intent: l,
                    role: m = "status",
                    showCloseButton: d = !1,
                    onClose: h,
                    onAutoFocus: p,
                    className: f
                } = e, g = o.useRef(null), v = d && !c ? i()["adjust-for-close-button"] : void 0, w = !d || c || t ? void 0 : i()["adjust-for-close-button"];
                return o.useEffect((() => {
                    "alert" === m && (void 0 !== p ? p() : null !== g.current && g.current.focus())
                }), []), o.createElement(a.ToastContainer, {
                    intent: l,
                    className: f
                }, d && o.createElement(a.CloseButton, {
                    ref: g,
                    onClick: h
                }), c && o.createElement(a.ToastImage, null, c), o.createElement("div", {
                    className: r(i()["main-content"], d && i()["with-close-button"])
                }, t && o.createElement(a.ToastTitle, {
                    className: v
                }, t), n && o.createElement(a.ToastMainText, {
                    className: w
                }, n), u && o.createElement(a.ToastActions, null, u), s && o.createElement(a.ToastSecondaryText, null, s)))
            }))
        },
        410864: (e, t, n) => {
            "use strict";
            var o;
            n.d(t, {
                    ToastIntent: () => o
                }),
                function(e) {
                    e.Default = "default", e.Success = "success", e.Warning = "warning", e.Danger = "danger"
                }(o || (o = {}))
        },
        901767: (e, t, n) => {
            "use strict";
            n.d(t, {
                CloseButton: () => l,
                ToastContainer: () => m,
                ToastImage: () => d,
                ToastTitle: () => h,
                ToastMainText: () => p,
                ToastActions: () => f,
                ToastSecondaryText: () => g
            });
            var o = n(50959),
                r = n(497754),
                a = n(410864),
                s = n(83436),
                i = n(238822),
                c = n(44342),
                u = n.n(c);
            const l = o.forwardRef(((e, t) => {
                const {
                    className: n,
                    onClick: a,
                    tabIndex: c
                } = e;
                return o.createElement("button", {
                    type: "button",
                    className: r(u()["close-button"], n),
                    tabIndex: c,
                    onClick: a,
                    ref: t
                }, o.createElement(s.Icon, {
                    icon: i,
                    className: u()["close-icon"]
                }))
            }));

            function m(e) {
                const {
                    children: t,
                    role: n,
                    className: s,
                    intent: i = a.ToastIntent.Default
                } = e, c = r(u().toast, i !== a.ToastIntent.Default && u()[`intent-${i}`], s);
                return o.createElement("article", {
                    className: c,
                    role: n
                }, t)
            }

            function d(e) {
                const {
                    children: t
                } = e;
                return o.createElement("div", {
                    className: u().image
                }, t)
            }

            function h(e) {
                const {
                    children: t,
                    className: n
                } = e;
                return o.createElement("h2", {
                    className: r(u().title, n)
                }, t)
            }

            function p(e) {
                const {
                    children: t,
                    className: n
                } = e;
                return o.createElement("p", {
                    className: r(u()["main-text"], n)
                }, t)
            }

            function f(e) {
                const {
                    children: t
                } = e;
                return o.createElement("div", {
                    className: u().actions
                }, t)
            }

            function g(e) {
                const {
                    children: t
                } = e;
                return o.createElement("p", {
                    className: u()["secondary-text"]
                }, t)
            }
        },
        8626: (e, t, n) => {
            "use strict";

            function o(e) {
                return a(e, s)
            }

            function r(e) {
                return a(e, i)
            }

            function a(e, t) {
                const n = Object.entries(e).filter(t),
                    o = {};
                for (const [e, t] of n) o[e] = t;
                return o
            }

            function s(e) {
                const [t, n] = e;
                return 0 === t.indexOf("data-") && "string" == typeof n
            }

            function i(e) {
                return 0 === e[0].indexOf("aria-")
            }
            n.d(t, {
                filterDataProps: () => o,
                filterAriaProps: () => r,
                filterProps: () => a,
                isDataAttribute: () => s,
                isAriaAttribute: () => i
            })
        },
        193e3: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                initNotification: () => y
            });
            var o = n(50959),
                r = n(777754),
                a = (n(984919), n(779665)),
                s = n(239401),
                i = n(878003),
                c = n(540975),
                u = n(13830),
                l = n(631078),
                m = n(909740),
                d = n(919346),
                h = n(187084),
                p = (n(659863), n(226722)),
                f = n(587914),
                g = n(830123),
                v = n(729942);
            const w = "donateNotificationClose";
            let x = null;

            function _(e) {
                const {
                    onRemove: t
                } = e, {
                    coins: a,
                    fromUsername: s,
                    fromId: u,
                    text: x
                } = e.data, _ = (0, l.useWatchedValueReadonly)({
                    watchedValue: m.watchedTheme
                }), y = r.t(null, void 0, n(401356)), T = r.t(null, void 0, n(899336)).format({
                    amount: a.toString(),
                    username: s
                }), b = (0, o.useCallback)((() => {
                    (0, h.openPMDialog)(u, s), k()
                }), [u]), k = (0, o.useCallback)((() => {
                    p.TVXWindowEvents.emit(w), t()
                }), [t]), B = o.createElement("img", {
                    src: _ === d.StdTheme.Dark ? v : g,
                    role: "presentation"
                }), S = o.createElement(c.Button, {
                    onClick: b,
                    size: "s"
                }, r.t(null, void 0, n(273397)).format({
                    username: s
                }));
                return o.createElement(i.Toast, {
                    className: f.toast,
                    title: T,
                    text: x || y,
                    image: B,
                    onClose: k,
                    actions: S,
                    showCloseButton: !0
                })
            }

            function y() {
                a.pushStreamMultiplexer.on("donations", (e => {
                    "visible" === document.visibilityState && (x = (0, u.showToast)({
                        priority: s.ToastPriority.High,
                        render: t => o.createElement(_, {
                            data: e,
                            ...t
                        })
                    }))
                })), p.TVXWindowEvents.on(w, (() => {
                    null !== x && x()
                }))
            }
        },
        909740: (e, t, n) => {
            "use strict";
            n.d(t, {
                setTheme: () => a,
                watchedTheme: () => r
            });
            var o = n(988411);
            const r = new(n.n(o)());

            function a(e) {
                r.setValue(e)
            }
            r.subscribe((e => {
                ! function(e, t = window) {
                    const n = "theme-" + e,
                        o = t.document.documentElement.classList;
                    for (const e of Array.from(o)) e.startsWith("theme-") && e !== n && o.remove(e);
                    o.add(n)
                }(e, window)
            }))
        },
        56537: (e, t, n) => {
            "use strict";
            n.d(t, {
                useForceUpdate: () => r
            });
            var o = n(50959);
            const r = () => {
                const [, e] = (0, o.useReducer)((e => e + 1), 0);
                return e
            }
        },
        631078: (e, t, n) => {
            "use strict";
            n.d(t, {
                useWatchedValueReadonly: () => r
            });
            var o = n(50959);
            const r = (e, t = !1) => {
                const n = "watchedValue" in e ? e.watchedValue : void 0,
                    r = "defaultValue" in e ? e.defaultValue : e.watchedValue.value(),
                    [a, s] = (0, o.useState)(n ? n.value() : r);
                return (t ? o.useLayoutEffect : o.useEffect)((() => {
                    if (n) {
                        s(n.value());
                        const e = e => s(e);
                        return n.subscribe(e), () => n.unsubscribe(e)
                    }
                    return () => {}
                }), [n]), a
            }
        },
        829725: (e, t, n) => {
            "use strict";
            n.d(t, {
                OverlapManager: () => a,
                getRootOverlapManager: () => i
            });
            var o = n(650151);
            class r {
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
                    this._storage = new r, this._windows = new Map, this._index = 0, this._document = e, this._container = e.createDocumentFragment()
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
                    const o = this._document.createElement("div");
                    if (o.style.position = t.position, o.style.zIndex = this._index.toString(), o.dataset.id = e, void 0 !== t.index) {
                        const e = this._container.childNodes.length;
                        if (t.index >= e) this._container.appendChild(o);
                        else if (t.index <= 0) this._container.insertBefore(o, this._container.firstChild);
                        else {
                            const e = this._container.childNodes[t.index];
                            this._container.insertBefore(o, e)
                        }
                    } else "reverse" === t.direction ? this._container.insertBefore(o, this._container.firstChild) : this._container.appendChild(o);
                    return this._windows.set(e, o), ++this._index, o
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

            function i(e = document) {
                const t = e.getElementById("overlap-manager-root");
                if (null !== t) return (0, o.ensureDefined)(s.get(t)); {
                    const t = new a(e),
                        n = function(e) {
                            const t = e.createElement("div");
                            return t.style.position = "absolute", t.style.zIndex = 150..toString(), t.style.top = "0px", t.style.left = "0px", t.id = "overlap-manager-root", t
                        }(e);
                    return s.set(n, t), t.setContainer(n), e.body.appendChild(n), t
                }
            }
        },
        707533: (e, t, n) => {
            "use strict";
            n.d(t, {
                Portal: () => c,
                PortalContext: () => u
            });
            var o = n(50959),
                r = n(500962),
                a = n(777491),
                s = n(829725),
                i = n(670797);
            class c extends o.PureComponent {
                constructor() {
                    super(...arguments), this._uuid = (0, a.guid)()
                }
                componentWillUnmount() {
                    this._manager().removeWindow(this._uuid)
                }
                render() {
                    const e = this._manager().ensureWindow(this._uuid, this.props.layerOptions);
                    return e.style.top = this.props.top || "", e.style.bottom = this.props.bottom || "", e.style.left = this.props.left || "", e.style.right = this.props.right || "", e.style.pointerEvents = this.props.pointerEvents || "", r.createPortal(o.createElement(u.Provider, {
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
            c.contextType = i.SlotContext;
            const u = o.createContext(null)
        },
        670797: (e, t, n) => {
            "use strict";
            n.d(t, {
                Slot: () => r,
                SlotContext: () => a
            });
            var o = n(50959);
            class r extends o.Component {
                shouldComponentUpdate() {
                    return !1
                }
                render() {
                    return o.createElement("div", {
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
            const a = o.createContext(null)
        },
        238822: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 11 11m0-11-11 11"/></svg>'
        },
        729942: (e, t, n) => {
            "use strict";
            e.exports = n.p + "donation-dark.df7a99c6789b833ef0d9.svg"
        },
        830123: (e, t, n) => {
            "use strict";
            e.exports = n.p + "donation-light.5c994bab093e5e49dd6a.svg"
        },
        586240: e => {
            "use strict";
            e.exports = JSON.parse('{"size-header-height":"64px","size-sticky-symbol-header-height":"64px","media-tablet":"screen and (max-width: 1019px)","media-phone":"screen and (max-width: 767px)","media-phone-vertical":"screen and (max-width: 479px)","media-extreme-thin":"screen and (max-width: 329px)","media-mf-legacy-phone":"screen and (min-width: 480px)","media-mf-legacy-notebook":"screen and (min-width: 1020px)","media-mf-phone-vertical":"screen and (min-width: 320px)","media-mf-phone-landscape":"screen and (min-width: 568px)","media-mf-tablet-vertical":"screen and (min-width: 768px)","media-mf-tablet-landscape":"screen and (min-width: 1024px)","media-mf-laptop":"screen and (min-width: 1280px)","media-mf-desktop-medium":"screen and (min-width: 1440px)","media-mf-desktop-large":"screen and (min-width: 1920px)","media-mf-desktop-extra-large":"screen and (min-width: 2560px)","z-index-sticky-search-bar":101}')
        },
        401356: e => {
            e.exports = {
                ar: ["شخص ما يقدر عملك الرائع."],
                ca_ES: "Someone's appreciating your epic work.",
                cs: "Someone's appreciating your epic work.",
                de: ["Jemand weiß Ihr episches Werk zu schätzen."],
                el: "Someone's appreciating your epic work.",
                en: "Someone's appreciating your epic work.",
                es: ["Alguien está valorando su trabajo."],
                fa: "Someone's appreciating your epic work.",
                fr: ["Quelqu'un apprécie votre travail héroïque."],
                he_IL: ["מישהו מעריך את העבודה המעולה שלך."],
                hu_HU: "Someone's appreciating your epic work.",
                id_ID: ["Seseorang telah menghargai pekerjaan baik anda."],
                it: ["Qualcuno apprezza i tuoi sforzi"],
                ja: ["あなたの壮大な仕事に感謝の意を表しています。"],
                ko: ["누군가 여러분의 멋진 작품을 고마워합니다."],
                ms_MY: ["Ada seseorang menghargai kerja anda yang epik."],
                nl_NL: "Someone's appreciating your epic work.",
                pl: ["Ktoś docenia Twoją wspaniałą pracę."],
                pt: ["Alguém está gostando de seu trabalho sensacional."],
                ro: "Someone's appreciating your epic work.",
                ru: ["Кто-то оценил вашу отличную работу."],
                sv: ["Någon uppskattar ditt episka arbete."],
                th: ["บางคนกำลังชื่นชมกับผลงานอันยอดเยี่ยมของคุณ"],
                tr: ["Birisi epik çalışmanızı takdir ediyor."],
                vi: ["Có người đánh giá cao công việc của bạn."],
                zh: ["有人欣赏您的佳作。"],
                zh_TW: ["有人欣賞您的佳作。"]
            }
        },
        273397: e => {
            e.exports = {
                ar: ["قل شكراً لـ‎{username}‎"],
                ca_ES: "Say thanks to {username}",
                cs: "Say thanks to {username}",
                de: ["Bedanken Sie sich bei {username}"],
                el: "Say thanks to {username}",
                en: "Say thanks to {username}",
                es: ["Envíe su agradecimiento a {username}"],
                fa: "Say thanks to {username}",
                fr: ["Dites merci à {username}"],
                he_IL: ["אמור תודה ל- {username}"],
                hu_HU: "Say thanks to {username}",
                id_ID: ["Berikan terima kasih kepada {username}"],
                it: ["Ringrazia {username}"],
                ja: ["{username} に感謝を伝えましょう"],
                ko: ["{username}에게 고마움을 전하십시오"],
                ms_MY: ["Ucapkan terima kasih kepada {username}"],
                nl_NL: "Say thanks to {username}",
                pl: ["Podziękuj użytkownikowi {username}"],
                pt: ["Agradeça a {username}"],
                ro: "Say thanks to {username}",
                ru: ["Вы можете поблагодарить {username}"],
                sv: ["Säg tack till {username}"],
                th: ["กล่าวขอบคุณถึง {username}"],
                tr: ["{username} adlı kullanıcıya teşekkür edin"],
                vi: ["Nói cảm ơn đến {username}"],
                zh: ["对{username}表示感谢"],
                zh_TW: ["對{username}表示感謝"]
            }
        },
        899336: e => {
            e.exports = {
                ar: ["‎{username}‎ أرسل لك ‎{amount}‎ عملة"],
                ca_ES: "{username} sent you {amount} coins",
                cs: "{username} sent you {amount} coins",
                de: ["{username} hat Ihnen {amount} Coins geschickt"],
                el: "{username} sent you {amount} coins",
                en: "{username} sent you {amount} coins",
                es: ["{username} le envió {amount} monedas"],
                fa: "{username} sent you {amount} coins",
                fr: ["{username} vous a envoyé {amount} coins"],
                he_IL: ["{username} שלח לך ‎{amount}‎מטבעות"],
                hu_HU: "{username} sent you {amount} coins",
                id_ID: ["{username} mengirim anda {amount} koin"],
                it: ["{username} ti ha inviato {amount} coin"],
                ja: ["{username} があなたに{amount}コインを贈りました"],
                ko: ["{username} 이 님에게 {amount} 코인을 보냈습니다"],
                ms_MY: ["{username} menghantar anda {amount} syiling"],
                nl_NL: "{username} sent you {amount} coins",
                pl: ["{username} przesłał Ci {amount} monet"],
                pt: ["{username} lhe enviou {amount} moedas"],
                ro: "{username} sent you {amount} coins",
                ru: ["{username} отправил(а) вам {amount} монет"],
                sv: ["{username} skickade {amount} mynt till dig"],
                th: ["{username} ได้ส่ง {amount} เหรียญให้คุณ"],
                tr: ["{username} size {amount} koin yolladı"],
                vi: ["{username} đã gửi bạn {amount} coins"],
                zh: ["{username}向您发送了{amount}个代币"],
                zh_TW: ["{username}向您發送了{amount}個代幣"]
            }
        }
    }
]);
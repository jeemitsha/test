(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [32077], {
        981193: e => {
            e.exports = {
                container: "container-Mtq7m9Yl",
                "intent-default": "intent-default-Mtq7m9Yl",
                focused: "focused-Mtq7m9Yl",
                readonly: "readonly-Mtq7m9Yl",
                disabled: "disabled-Mtq7m9Yl",
                "with-highlight": "with-highlight-Mtq7m9Yl",
                grouped: "grouped-Mtq7m9Yl",
                "adjust-position": "adjust-position-Mtq7m9Yl",
                "first-row": "first-row-Mtq7m9Yl",
                "first-col": "first-col-Mtq7m9Yl",
                stretch: "stretch-Mtq7m9Yl",
                "font-size-medium": "font-size-medium-Mtq7m9Yl",
                "font-size-large": "font-size-large-Mtq7m9Yl",
                "no-corner-top-left": "no-corner-top-left-Mtq7m9Yl",
                "no-corner-top-right": "no-corner-top-right-Mtq7m9Yl",
                "no-corner-bottom-right": "no-corner-bottom-right-Mtq7m9Yl",
                "no-corner-bottom-left": "no-corner-bottom-left-Mtq7m9Yl",
                "size-small": "size-small-Mtq7m9Yl",
                "size-medium": "size-medium-Mtq7m9Yl",
                "size-large": "size-large-Mtq7m9Yl",
                "intent-success": "intent-success-Mtq7m9Yl",
                "intent-warning": "intent-warning-Mtq7m9Yl",
                "intent-danger": "intent-danger-Mtq7m9Yl",
                "intent-primary": "intent-primary-Mtq7m9Yl",
                "border-none": "border-none-Mtq7m9Yl",
                "border-thin": "border-thin-Mtq7m9Yl",
                "border-thick": "border-thick-Mtq7m9Yl",
                highlight: "highlight-Mtq7m9Yl",
                shown: "shown-Mtq7m9Yl"
            }
        },
        484684: e => {
            e.exports = {
                "inner-slot": "inner-slot-yJbunXPO",
                interactive: "interactive-yJbunXPO",
                icon: "icon-yJbunXPO",
                "inner-middle-slot": "inner-middle-slot-yJbunXPO",
                "before-slot": "before-slot-yJbunXPO",
                "after-slot": "after-slot-yJbunXPO"
            }
        },
        358089: e => {
            e.exports = {
                input: "input-oiYdY6I4",
                "with-start-slot": "with-start-slot-oiYdY6I4",
                "with-end-slot": "with-end-slot-oiYdY6I4"
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
        452395: (e, t, n) => {
            "use strict";
            n.d(t, {
                ControlSkeleton: () => y,
                InputClasses: () => p
            });
            var r = n(50959),
                o = n(497754),
                i = n(650151),
                a = n(662929),
                s = n(8626),
                l = n(301792),
                u = n(307754);
            var c = n(981193),
                d = n.n(c);

            function m(e) {
                let t = "";
                return 0 !== e && (1 & e && (t = o(t, d()["no-corner-top-left"])), 2 & e && (t = o(t, d()["no-corner-top-right"])), 4 & e && (t = o(t, d()["no-corner-bottom-right"])), 8 & e && (t = o(t, d()["no-corner-bottom-left"]))), t
            }

            function h(e, t, n, r) {
                const {
                    removeRoundBorder: i,
                    className: a,
                    intent: s = "default",
                    borderStyle: l = "thin",
                    size: c,
                    highlight: h,
                    disabled: f,
                    readonly: p,
                    stretch: g,
                    noReadonlyStyles: v,
                    isFocused: y
                } = e, H = m(null != i ? i : (0, u.getGroupCellRemoveRoundBorders)(n));
                return o(d().container, d()[`intent-${s}`], d()[`border-${l}`], c && d()[`size-${c}`], H, h && d()["with-highlight"], f && d().disabled, p && !v && d().readonly, y && d().focused, g && d().stretch, t && d().grouped, !r && d()["adjust-position"], n.isTop && d()["first-row"], n.isLeft && d()["first-col"], a)
            }

            function f(e, t) {
                const {
                    highlight: n,
                    highlightRemoveRoundBorder: r
                } = e;
                if (!n) return d().highlight;
                const i = m(null != r ? r : (0, u.getGroupCellRemoveRoundBorders)(t));
                return o(d().highlight, d().shown, i)
            }
            const p = {
                    FontSizeMedium: (0, i.ensureDefined)(d()["font-size-medium"]),
                    FontSizeLarge: (0, i.ensureDefined)(d()["font-size-large"])
                },
                g = {
                    passive: !1
                };

            function v(e, t) {
                const {
                    style: n,
                    id: o,
                    role: i,
                    onFocus: u,
                    onBlur: c,
                    onMouseOver: d,
                    onMouseOut: m,
                    onMouseDown: p,
                    onMouseUp: v,
                    onKeyDown: y,
                    onClick: H,
                    tabIndex: b,
                    startSlot: w,
                    middleSlot: M,
                    endSlot: D,
                    onWheel: k,
                    onWheelNoPassive: S = null
                } = e, {
                    isGrouped: C,
                    cellState: W,
                    disablePositionAdjustment: x = !1
                } = (0, r.useContext)(l.ControlGroupContext), E = function(e, t = null, n) {
                    const o = (0, r.useRef)(null),
                        i = (0, r.useRef)(null),
                        a = (0, r.useCallback)((() => {
                            if (null === o.current || null === i.current) return;
                            const [e, t, n] = i.current;
                            null !== t && o.current.addEventListener(e, t, n)
                        }), []),
                        s = (0, r.useCallback)((() => {
                            if (null === o.current || null === i.current) return;
                            const [e, t, n] = i.current;
                            null !== t && o.current.removeEventListener(e, t, n)
                        }), []),
                        l = (0, r.useCallback)((e => {
                            s(), o.current = e, a()
                        }), []);
                    return (0, r.useEffect)((() => (i.current = [e, t, n], a(), s)), [e, t, n]), l
                }("wheel", S, g);
                return r.createElement("span", {
                    style: n,
                    id: o,
                    role: i,
                    className: h(e, C, W, x),
                    tabIndex: b,
                    ref: (0, a.useMergedRefs)([t, E]),
                    onFocus: u,
                    onBlur: c,
                    onMouseOver: d,
                    onMouseOut: m,
                    onMouseDown: p,
                    onMouseUp: v,
                    onKeyDown: y,
                    onClick: H,
                    onWheel: k,
                    ...(0, s.filterDataProps)(e),
                    ...(0, s.filterAriaProps)(e)
                }, w, M, D, r.createElement("span", {
                    className: f(e, W)
                }))
            }
            v.displayName = "ControlSkeleton";
            const y = r.forwardRef(v)
        },
        514420: (e, t, n) => {
            "use strict";
            n.d(t, {
                BeforeSlot: () => s,
                StartSlot: () => l,
                MiddleSlot: () => u,
                EndSlot: () => c,
                AfterSlot: () => d
            });
            var r = n(50959),
                o = n(497754),
                i = n(484684),
                a = n.n(i);

            function s(e) {
                const {
                    className: t,
                    children: n
                } = e;
                return r.createElement("span", {
                    className: o(a()["before-slot"], t)
                }, n)
            }

            function l(e) {
                const {
                    className: t,
                    interactive: n = !0,
                    icon: i = !1,
                    children: s
                } = e;
                return r.createElement("span", {
                    className: o(a()["inner-slot"], n && a().interactive, i && a().icon, t)
                }, s)
            }

            function u(e) {
                const {
                    className: t,
                    children: n
                } = e;
                return r.createElement("span", {
                    className: o(a()["inner-slot"], a()["inner-middle-slot"], t)
                }, n)
            }

            function c(e) {
                const {
                    className: t,
                    interactive: n = !0,
                    icon: i = !1,
                    children: s
                } = e;
                return r.createElement("span", {
                    className: o(a()["inner-slot"], n && a().interactive, i && a().icon, t)
                }, s)
            }

            function d(e) {
                const {
                    className: t,
                    children: n
                } = e;
                return r.createElement("span", {
                    className: o(a()["after-slot"], t)
                }, n)
            }
        },
        142135: (e, t, n) => {
            "use strict";
            n.d(t, {
                Input: () => r.Input,
                InputControl: () => r.InputControl
            });
            var r = n(314551)
        },
        314551: (e, t, n) => {
            "use strict";
            n.d(t, {
                Input: () => v,
                InputControl: () => y
            });
            var r = n(50959),
                o = n(497754),
                i = n(8626),
                a = n(763341),
                s = n(151057),
                l = n(662929),
                u = n(207357),
                c = n(405964),
                d = n(633750),
                m = n(452395),
                h = n(514420),
                f = n(358089),
                p = n.n(f);

            function g(e) {
                return !(0, i.isAriaAttribute)(e) && !(0, i.isDataAttribute)(e)
            }

            function v(e) {
                const {
                    id: t,
                    title: n,
                    role: a,
                    tabIndex: s,
                    placeholder: l,
                    name: u,
                    type: c,
                    value: d,
                    defaultValue: f,
                    draggable: v,
                    autoComplete: y,
                    autoFocus: H,
                    maxLength: b,
                    min: w,
                    max: M,
                    step: D,
                    pattern: k,
                    inputMode: S,
                    onSelect: C,
                    onFocus: W,
                    onBlur: x,
                    onKeyDown: E,
                    onKeyUp: _,
                    onKeyPress: N,
                    onChange: O,
                    onDragStart: I,
                    size: q = "medium",
                    className: z,
                    inputClassName: T,
                    disabled: B,
                    readonly: P,
                    containerTabIndex: R,
                    startSlot: L,
                    endSlot: Y,
                    reference: A,
                    containerReference: F,
                    onContainerFocus: j,
                    ...G
                } = e, U = (0, i.filterProps)(G, g), V = { ...(0, i.filterAriaProps)(G),
                    ...(0, i.filterDataProps)(G),
                    id: t,
                    title: n,
                    role: a,
                    tabIndex: s,
                    placeholder: l,
                    name: u,
                    type: c,
                    value: d,
                    defaultValue: f,
                    draggable: v,
                    autoComplete: y,
                    autoFocus: H,
                    maxLength: b,
                    min: w,
                    max: M,
                    step: D,
                    pattern: k,
                    inputMode: S,
                    onSelect: C,
                    onFocus: W,
                    onBlur: x,
                    onKeyDown: E,
                    onKeyUp: _,
                    onKeyPress: N,
                    onChange: O,
                    onDragStart: I
                };
                return r.createElement(m.ControlSkeleton, { ...U,
                    disabled: B,
                    readonly: P,
                    tabIndex: R,
                    className: o(p().container, z),
                    size: q,
                    ref: F,
                    onFocus: j,
                    startSlot: L,
                    middleSlot: r.createElement(h.MiddleSlot, null, r.createElement("input", { ...V,
                        className: o(p().input, T, L && p()["with-start-slot"], Y && p()["with-end-slot"]),
                        disabled: B,
                        readOnly: P,
                        ref: A
                    })),
                    endSlot: Y
                })
            }

            function y(e) {
                e = (0, u.useControl)(e);
                const {
                    disabled: t,
                    autoSelectOnFocus: n,
                    tabIndex: o = 0,
                    onFocus: i,
                    onBlur: m,
                    reference: h,
                    containerReference: f = null
                } = e, p = (0, r.useRef)(null), g = (0, r.useRef)(null), [y, H] = (0, c.useFocus)(), b = t ? void 0 : y ? -1 : o, w = t ? void 0 : y ? o : -1, {
                    isMouseDown: M,
                    handleMouseDown: D,
                    handleMouseUp: k
                } = (0, d.useIsMouseDown)(), S = (0, a.createSafeMulticastEventHandler)(H.onFocus, (function(e) {
                    n && !M.current && (0, s.selectAllContent)(e.currentTarget)
                }), i), C = (0, a.createSafeMulticastEventHandler)(H.onBlur, m), W = (0, r.useCallback)((e => {
                    p.current = e, h && ("function" == typeof h && h(e), "object" == typeof h && (h.current = e))
                }), [p, h]);
                return r.createElement(v, { ...e,
                    isFocused: y,
                    containerTabIndex: b,
                    tabIndex: w,
                    onContainerFocus: function(e) {
                        g.current === e.target && null !== p.current && p.current.focus()
                    },
                    onFocus: S,
                    onBlur: C,
                    reference: W,
                    containerReference: (0, l.useMergedRefs)([g, f]),
                    onMouseDown: D,
                    onMouseUp: k
                })
            }
        },
        207357: (e, t, n) => {
            "use strict";
            n.d(t, {
                useControl: () => i
            });
            var r = n(763341),
                o = n(405964);

            function i(e) {
                const {
                    onFocus: t,
                    onBlur: n,
                    intent: i,
                    highlight: a,
                    disabled: s
                } = e, [l, u] = (0, o.useFocus)(void 0, s), c = (0, r.createSafeMulticastEventHandler)(s ? void 0 : u.onFocus, t), d = (0, r.createSafeMulticastEventHandler)(s ? void 0 : u.onBlur, n);
                return { ...e,
                    intent: i || (l ? "primary" : "default"),
                    highlight: null != a ? a : l,
                    onFocus: c,
                    onBlur: d
                }
            }
        },
        405964: (e, t, n) => {
            "use strict";
            n.d(t, {
                useFocus: () => o
            });
            var r = n(50959);

            function o(e, t) {
                const [n, o] = (0, r.useState)(!1);
                (0, r.useEffect)((() => {
                    t && n && o(!1)
                }), [t, n]);
                const i = {
                    onFocus: (0, r.useCallback)((function(t) {
                        void 0 !== e && e.current !== t.target || o(!0)
                    }), [e]),
                    onBlur: (0, r.useCallback)((function(t) {
                        void 0 !== e && e.current !== t.target || o(!1)
                    }), [e])
                };
                return [n, i]
            }
        },
        633750: (e, t, n) => {
            "use strict";
            n.d(t, {
                useIsMouseDown: () => o
            });
            var r = n(50959);

            function o() {
                const e = (0, r.useRef)(!1),
                    t = (0, r.useCallback)((() => {
                        e.current = !0
                    }), [e]),
                    n = (0, r.useCallback)((() => {
                        e.current = !1
                    }), [e]);
                return {
                    isMouseDown: e,
                    handleMouseDown: t,
                    handleMouseUp: n
                }
            }
        },
        662929: (e, t, n) => {
            "use strict";
            n.d(t, {
                useMergedRefs: () => i
            });
            var r = n(50959),
                o = n(551080);

            function i(e) {
                return (0, r.useCallback)((0, o.mergeRefs)(e), e)
            }
        },
        8626: (e, t, n) => {
            "use strict";

            function r(e) {
                return i(e, a)
            }

            function o(e) {
                return i(e, s)
            }

            function i(e, t) {
                const n = Object.entries(e).filter(t),
                    r = {};
                for (const [e, t] of n) r[e] = t;
                return r
            }

            function a(e) {
                const [t, n] = e;
                return 0 === t.indexOf("data-") && "string" == typeof n
            }

            function s(e) {
                return 0 === e[0].indexOf("aria-")
            }
            n.d(t, {
                filterDataProps: () => r,
                filterAriaProps: () => o,
                filterProps: () => i,
                isDataAttribute: () => a,
                isAriaAttribute: () => s
            })
        },
        151057: (e, t, n) => {
            "use strict";

            function r(e) {
                null !== e && e.setSelectionRange(0, e.value.length)
            }
            n.d(t, {
                selectAllContent: () => r
            })
        },
        551080: (e, t, n) => {
            "use strict";

            function r(e) {
                return t => {
                    e.forEach((e => {
                        "function" == typeof e ? e(t) : null != e && (e.current = t)
                    }))
                }
            }

            function o(e) {
                return r([e])
            }
            n.d(t, {
                mergeRefs: () => r,
                isomorphicRef: () => o
            })
        },
        763341: (e, t, n) => {
            "use strict";

            function r(...e) {
                return t => {
                    for (const n of e) void 0 !== n && n(t)
                }
            }
            n.d(t, {
                createSafeMulticastEventHandler: () => r
            })
        },
        531327: (e, t, n) => {
            "use strict";

            function r(e) {
                return o() ? 0 : i() ? 46 : Math.min(Math.max(e, 46), 450)
            }
            n.d(t, {
                getWidgetBarPadding: () => r,
                isWidgetBarFullscreen: () => o
            });
            const o = () => !window.matchMedia("screen and (min-width: 768px)").matches,
                i = () => !window.matchMedia("screen and (min-width: 1280px)").matches
        },
        314308: (e, t, n) => {
            "use strict";

            function r(e, t, n, r, o) {
                function i(o) {
                    if (e > o.timeStamp) return;
                    const i = o.target;
                    void 0 !== n && null !== t && null !== i && i.ownerDocument === r && (t.contains(i) || n(o))
                }
                return o.click && r.addEventListener("click", i, !1), o.mouseDown && r.addEventListener("mousedown", i, !1), o.touchEnd && r.addEventListener("touchend", i, !1), o.touchStart && r.addEventListener("touchstart", i, !1), () => {
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
                o = n(531327);
            let i = 0,
                a = !1;

            function s(e) {
                const {
                    body: t
                } = document, n = t.querySelector(".widgetbar-wrap");
                if (e && 1 == ++i) {
                    const e = (0, r.getCSSProperty)(t, "overflow"),
                        o = (0, r.getCSSPropertyNumericValue)(t, "padding-right");
                    "hidden" !== e.toLowerCase() && t.scrollHeight > t.offsetHeight && ((0, r.setStyle)(n, "right", `${(0,r.getScrollbarWidth)()}px`), t.style.paddingRight = `${o+(0,r.getScrollbarWidth)()}px`, a = !0), t.classList.add("i-no-scroll")
                } else if (!e && i > 0 && 0 == --i && (t.classList.remove("i-no-scroll"), a)) {
                    (0, r.setStyle)(n, "right", "0px");
                    let e = 0;
                    e = n ? (0, o.getWidgetBarPadding)((0, r.getContentWidth)(n)) : 0, t.scrollHeight <= t.clientHeight && (e -= (0, r.getScrollbarWidth)()), t.style.paddingRight = (e < 0 ? 0 : e) + "px", a = !1
                }
            }
        },
        322654: (e, t, n) => {
            "use strict";
            n.d(t, {
                DialogsOpenerManager: () => r,
                dialogsOpenerManager: () => o
            });
            class r {
                constructor() {
                    this._storage = new Map
                }
                setAsOpened(e, t) {
                    this._storage.set(e, t)
                }
                setAsClosed(e) {
                    this._storage.delete(e)
                }
                isOpened(e) {
                    return this._storage.has(e)
                }
                getDialogPayload(e) {
                    return this._storage.get(e)
                }
            }
            const o = new r
        },
        951292: (e, t, n) => {
            "use strict";
            n.d(t, {
                useOutsideEvent: () => i
            });
            var r = n(50959),
                o = n(314308);

            function i(e) {
                const {
                    click: t,
                    mouseDown: n,
                    touchEnd: i,
                    touchStart: a,
                    handler: s,
                    reference: l,
                    ownerDocument: u = document
                } = e, c = (0, r.useRef)(null), d = (0, r.useRef)(new CustomEvent("timestamp").timeStamp);
                return (0, r.useLayoutEffect)((() => {
                    const e = {
                            click: t,
                            mouseDown: n,
                            touchEnd: i,
                            touchStart: a
                        },
                        r = l ? l.current : c.current;
                    return (0, o.addOutsideEventListener)(d.current, r, s, u, e)
                }), [t, n, i, a, s]), l || c
            }
        },
        157490: (e, t, n) => {
            "use strict";
            n.d(t, {
                OutsideEvent: () => o
            });
            var r = n(951292);

            function o(e) {
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
            class i {
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
            const a = new WeakMap;

            function s(e = document) {
                const t = e.getElementById("overlap-manager-root");
                if (null !== t) return (0, r.ensureDefined)(a.get(t)); {
                    const t = new i(e),
                        n = function(e) {
                            const t = e.createElement("div");
                            return t.style.position = "absolute", t.style.zIndex = 150..toString(), t.style.top = "0px", t.style.left = "0px", t.id = "overlap-manager-root", t
                        }(e);
                    return a.set(n, t), t.setContainer(n), e.body.appendChild(n), t
                }
            }
        },
        368337: (e, t, n) => {
            "use strict";
            n.d(t, {
                makeOverlapable: () => i
            });
            var r = n(50959),
                o = n(707533);

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
                        return "parent" === n ? i : r.createElement(o.Portal, null, i)
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
                o = n(500962),
                i = n(777491),
                a = n(829725),
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
                    return e.style.top = this.props.top || "", e.style.bottom = this.props.bottom || "", e.style.left = this.props.left || "", e.style.right = this.props.right || "", e.style.pointerEvents = this.props.pointerEvents || "", o.createPortal(r.createElement(u.Provider, {
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
            l.contextType = s.SlotContext;
            const u = r.createContext(null)
        },
        670797: (e, t, n) => {
            "use strict";
            n.d(t, {
                Slot: () => o,
                SlotContext: () => i
            });
            var r = n(50959);
            class o extends r.Component {
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
                o = n(497754),
                i = n(83436),
                a = n(707533),
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
                    return r.createElement(a.Portal, null, r.createElement("div", {
                        ref: i
                    }, r.createElement(c, {
                        reference: t.ref,
                        style: t.style,
                        arrowClassName: o(l.arrowHolder, this._getArrowDirectionClass(), u),
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
                            return o(l["arrowHolder--after"], l["arrowHolder--after-ltr-fix"]);
                        case "top":
                            return o(l["arrowHolder--above"], l["arrowHolder--above-fix"]);
                        case "bottom":
                        case "bottom-start":
                        case "bottom-end":
                            return l["arrowHolder--below"];
                        default:
                            return o(l["arrowHolder--before"], l["arrowHolder--before-rtl-fix"])
                    }
                }
            }

            function c(e) {
                const {
                    className: t,
                    containerClassName: n,
                    contentClassName: a,
                    reference: u,
                    style: c,
                    arrow: d = !0,
                    arrowClassName: m,
                    arrowReference: h,
                    onClose: f,
                    arrowStyle: p,
                    children: g,
                    ...v
                } = e;
                return r.createElement("div", { ...v,
                    className: t,
                    ref: u,
                    style: c
                }, d && r.createElement("div", {
                    className: m,
                    ref: h,
                    style: p
                }), r.createElement("div", {
                    className: o(l.container, n)
                }, r.createElement("div", {
                    className: o(l.content, a)
                }, g), f && r.createElement(i.Icon, {
                    className: l.closeButton,
                    icon: s,
                    onClick: f
                })))
            }
        },
        878618: e => {
            e.exports = {
                dialog: "dialog-PgBQq9Tl",
                dialogInner: "dialogInner-PgBQq9Tl",
                titleWrapper: "titleWrapper-PgBQq9Tl",
                title: "title-PgBQq9Tl",
                infoHint: "infoHint-PgBQq9Tl",
                form: "form-PgBQq9Tl",
                inputWrapper: "inputWrapper-PgBQq9Tl",
                input: "input-PgBQq9Tl",
                hint: "hint-PgBQq9Tl",
                error: "error-PgBQq9Tl"
            }
        },
        59641: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                showChangeIntervalDialog: () => M
            });
            var r = n(50959),
                o = n(500962),
                i = n(497754),
                a = n.n(i),
                s = n(777754),
                l = n(142135),
                u = n(452395),
                c = n(583912),
                d = n(500745),
                m = n(83436),
                h = n(785508);
            const f = s.t(null, void 0, n(252143)),
                p = s.t(null, void 0, n(135668));

            function g(e) {
                const {
                    className: t,
                    isSecondsEnabled: n
                } = e;
                return r.createElement(m.Icon, {
                    icon: h,
                    className: a()("apply-common-tooltip", t),
                    title: n ? p : f
                })
            }
            var v = n(991826),
                y = n(568450);
            var H = n(878618);

            function b(e) {
                const {
                    initVal: t,
                    selectOnInit: o,
                    onClose: i
                } = e, m = (0, r.useRef)(null), [h, f] = (0, r.useState)(t.toUpperCase()), p = (0, r.useMemo)((() => (0, v.parseIntervalValue)(h)), [h]), b = function(e, t) {
                    return (0, r.useMemo)((() => {
                        if (t.error || !(0, v.intervalIsSupported)(e)) return !1;
                        const n = y.Interval.normalize(e);
                        return null !== n && (0, v.isResolutionMultiplierValid)(n)
                    }), [e, t])
                }(h, p), w = (0, r.useMemo)((() => {
                    if (!b) return null;
                    const e = p.qty + (p.unit || "");
                    return (0, v.getTranslatedResolutionModel)(e).hint
                }), [b, p]);
                return (0, r.useLayoutEffect)((() => {
                    var e, t;
                    o ? null === (e = m.current) || void 0 === e || e.select() : null === (t = m.current) || void 0 === t || t.focus()
                }), [o]), r.createElement(d.PopupDialog, {
                    className: H.dialog,
                    "data-dialog-name": "change-interval-dialog",
                    isOpened: !0,
                    onClickOutside: i,
                    onFocus: function() {
                        var e;
                        null === (e = m.current) || void 0 === e || e.focus()
                    },
                    onKeyDown: function(e) {
                        27 === e.keyCode && (null == i || i())
                    }
                }, r.createElement("div", {
                    className: H.dialogInner
                }, r.createElement("div", {
                    className: H.titleWrapper
                }, r.createElement("div", {
                    className: H.title
                }, s.t(null, void 0, n(699374))), r.createElement(g, {
                    className: H.infoHint,
                    isSecondsEnabled: (0, v.isSecondsEnabled)()
                })), r.createElement("form", {
                    className: H.form,
                    onSubmit: function(e) {
                        e.preventDefault();
                        const t = c.linking.interval.value(),
                            n = y.Interval.normalize(h);
                        n && t !== n && b && (r = n, (0, v.setLastUsedResolution)(r), c.linking.interval.setValue(r));
                        var r;
                        null == i || i()
                    }
                }, r.createElement(l.InputControl, {
                    className: a()(H.inputWrapper, u.InputClasses.FontSizeLarge),
                    inputClassName: H.input,
                    type: "text",
                    size: "large",
                    reference: m,
                    value: h,
                    maxLength: 8,
                    intent: b ? void 0 : "danger",
                    onChange: function(e) {
                        const {
                            value: t
                        } = e.target;
                        f(t.toUpperCase())
                    }
                })), b ? r.createElement("div", {
                    className: H.hint
                }, w) : r.createElement("div", {
                    className: a()(H.hint, H.error)
                }, s.t(null, void 0, n(972572)))))
            }
            var w = n(322654);

            function M(e) {
                if (w.dialogsOpenerManager.isOpened("ChangeIntervalDialog") || w.dialogsOpenerManager.isOpened("SymbolSearch")) return;
                const t = document.createElement("div"),
                    {
                        initVal: n,
                        selectOnInit: i,
                        onClose: a
                    } = e,
                    s = r.createElement(b, {
                        initVal: n,
                        selectOnInit: i,
                        onClose: function() {
                            o.unmountComponentAtNode(t), w.dialogsOpenerManager.setAsClosed("ChangeIntervalDialog"), null == a || a()
                        }
                    });
                o.render(s, t), w.dialogsOpenerManager.setAsOpened("ChangeIntervalDialog")
            }
        },
        333765: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>'
        },
        785508: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 8.5h1.5V14"/><circle fill="currentColor" cx="9" cy="5" r="1"/><path stroke="currentColor" d="M16.5 9a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"/></svg>'
        },
        972572: e => {
            e.exports = {
                ar: ["???? ???????? ????????????"],
                ca_ES: ["No aplicable"],
                cs: ["Nelze pou????t"],
                de: ["Nicht anwendbar"],
                el: ["???? ????????????????????"],
                en: "Not applicable",
                es: ["No aplicable"],
                fa: ["?????? ???????? ????????"],
                fr: ["Non applicable"],
                he_IL: ["???????? ????????"],
                hu_HU: ["Nem alkalmazhat??"],
                id_ID: ["Tidak dapat diterapkan"],
                it: ["Non applicabile"],
                ja: ["?????????????????????"],
                ko: ["??? ??? ??????"],
                ms_MY: ["Tidak berkenaan"],
                nl_NL: ["Niet van toepassingen"],
                pl: ["Nie dotyczy"],
                pt: ["N??o aplic??vel"],
                ro: "Not applicable",
                ru: ["???? ????????????????????????????"],
                sv: ["Ej applicerbar"],
                th: ["?????????????????????????????????????????????"],
                tr: ["Uygun De??il"],
                vi: ["Kh??ng ??p d???ng ???????c"],
                zh: ["?????????"],
                zh_TW: ["?????????"]
            }
        },
        252143: e => {
            e.exports = {
                ar: ["???????? ?????? ???????????? ???????????? ?????????? ?????????????? ???????????? (???????? ???????? ?????? 5 ?????? ?????? ?????????? ?????????????? ???????? ??????????). ???? ???????? ?????? ???????????? ?????? ?????? ?? ?????? ?????? H (????????????)?? ?? ?????? ?????? D (??????????)?? ?? ?????? ??????W (??????????????)?? ?? ?????? ?????? M (??????????) ?????????? (D ???? 2H)."],
                ca_ES: ["Escriviu el n??mero d'interval per a gr??fics de minuts (??s a dir, 5 si ser?? un gr??fic de cinc minuts). O n??mero m??s lletra per a H (per hora), D (diari), S (setmanal), M (mensual) intervals (es a dir, D o 2H)."],
                cs: "Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
                de: ["Geben Sie die Intervall-Nummer f??r Minuten-Charts ein (z.B. 5, wenn es sich um einen F??nf-Minuten-Chart handelt). Oder Zahl plus Buchstabe f??r H (st??ndlich), D (t??glich), W (w??chentlich), M (monatlich) Intervalle (d.h. D oder 2H)"],
                el: "Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
                en: "Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
                es: ["Escriba el n??mero de intervalo para gr??ficos de minutos (es decir, 5 si va a ser un gr??fico de cinco minutos). O n??mero m??s letra para H (por hora), D (diario), S (semanal), M (mensual) intervalos (es decir, D o 2H)"],
                fa: "Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
                fr: ["Tapez le num??ro d'intervalle pour les diagrammes de minutes (c'est-??-dire 5 si le graphique doit ??tre de cinq minutes). Ou un nombre plus une lettre pour les intervalles H (horaires), D (journaliers), W (hebdomadaires), M (mensuels) (c'est-??-dire D ou 2H)"],
                he_IL: ["???????? ???? ???????? ??????????????????  ???????? ?????? (??????????, 5 ?????????? ?????? ?????? ?????? ????????). ???? ???????? ???????? ?????? H (????????), D (??????), W (????????) M (????????) ????????????????????. (?????????? D ???????? ???? 2H ??2????????)"],
                hu_HU: "Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
                id_ID: ["Ketik angka interval untuk chart menit (cth: 5 untuk chart lima menit). Atau tanda plus untuk interval H (Jam), D (Harian), W (Mingguan), M (Bulanan) (cth: D atau 2H)."],
                it: ["Scrivi il numero di minuti del timeframe desiderato (ad esempio, scrivi 5 se vuoi il grafico a 5 minuti). Altrimenti aggiungi la lettera per gli altri timeframe: 'H' per l'orario, 'D' per il giornaliero, 'W' per il settimanale, 'M' per il mensile (ad esempio, puoi scrivere 'D' o '2H')"],
                ja: ["????????????????????????????????????????????????5???????????????????????????????????????5???????????????????????????????????????????????????????????????????????????H (??????)???D (???)???W (???)???M (???)????????????????????????????????????D ??? 2H??????"],
                ko: ["??? ????????? ?????? ????????? ????????? ????????????????????? (??????: 5??? ????????? 5). ?????? ????????? ?????? H (??????), D(???), W(???), M(???) ??????????????? ??????????????? (??????: D ?????? 2H)"],
                ms_MY: ["Masukkan angka selang masa untuk carta minit (contohnya seperti 5 jika anda perlukan carta 5 minit). Atau nombor dengan abjad untuk J (Jam), H (Harian), M (Mingguan), B (Bulanan) (contoh H atau 2j)"],
                nl_NL: "Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
                pl: ["Wprowad?? wybran?? warto???? liczbow?? interwa??u dla wykres??w minutowych (np. warto???? 5 dla wykresu o interwale 5 minutowym) b??d?? warto???? liczbow?? i/lub jedn?? z liter: H (interwa?? godzinny), D (dzienny), W (tygodniowy), M (miesi??czny), czyli np. D, 2H, itd."],
                pt: ["Digite o n??mero de intervalo para gr??ficos de minutos (ou seja, cinco para um gr??fico de cinco minutos). Ou n??mero mais a letra para os intervalos H (Por hora), D (Di??rio), S (Semanal), M (Mensal) (ou seja, D ou 2H)"],
                ro: "Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
                ru: ["?????????????? ???????????? ?????????? ?????? ???????????????? ???????????????? (????????????????, 5 ???????? ?????????? 5-???????????????? ????????????), ?????? ?????????? ?? ?????????? ?????? ?????????????????????????????? ????????????????????: H (????????), D (??????), W (????????????), M (????????????), ????????????????, D ?????? 2H"],
                sv: ["Skriv intervallnumret f??r minutdiagram (dvs 5 om det ska vara ett femminuters diagram). Eller nummer plus bokstav f??r H (Timmars), D (Dag), W (Vecko), M (M??nads) intervaller (dvs D eller 2H)"],
                th: ["???????????????????????????????????????????????????????????????????????????????????????????????? (???????????????????????????????????? ??????????????? 5 ???????????????????????????????????????????????? 5 ????????????) ???????????? ?????????????????????????????????????????????????????? H ?????????????????????????????????????????? (??????????????????????????????) D (??????????????????) W (??????????????????????????????) M (????????????????????????) (???????????? D ???????????? 2H)"],
                tr: ["Dakika grafikleri i??in aral??k say??s??n?? girin (??rn be?? dakikal??k grafik i??in 5). Veya say?? art??; saat i??in H harfi (saatlik), D (g??nl??k), W(haftal??k), M (ayl??k) aral??klar??n?? kullan??n(??rn D veya 2H gibi)"],
                vi: ["Nh???p s??? kho???ng th???i gian cho bi???u ????? ph??t (v?? d??? 5 n???u ???? s??? l?? bi???u ????? n??m ph??t). Ho???c s??? c???ng cho ch??? H (H??ng gi???), D (H??ng ng??y), W (H??ng tu???n), M (H??ng th??ng) (v?? d??? D ho???c 2H)"],
                zh: ["????????????????????????????????????????????????5??????5????????????????????????H???????????????D????????????W????????????M???????????????????????????D???2H????????????????????????"],
                zh_TW: ["????????????????????????????????? (?????????????????????????????????5)????????????????????? H (??????)???D (???)???W (???)???M (???) ??????????????? (???D???2H)"]
            }
        },
        135668: e => {
            e.exports = {
                ar: ['???????? ?????? ???????????? ???????????? ???????????? ???????????????? ???????????????? (??????????: 5 ?????? ?????? ???????? ?????????? ?????????????? ???? 5 ??????????). ???? ?????? ???? ???????? ?????????? ?????????????? ????????????: ?????? "??" ?????????? ?????????????? ?????????? 1 ?????????? (15 "??" ?????????? ?????????????? 15 ???????????? ??????)?? ??"??" (????????)?? ??"??" (??????)?? ??"??" (????????????)?? ??"??" (??????) (??????????: "??" ???? "2??")'],
                ca_ES: ["Introdu??u el n??mero de l'interval per als gr??fics de minuts (per exemple, 5 si ??s un gr??fic de cinc minuts). Tamb?? podeu introduir un n??mero m??s una lletra per aconseguir diferents intervals: S per a un gr??fic d'un segon (15S correspon a un gr??fic de 15 segons); H (hores), W (setmanes) o M (mesos). A continuaci?? teniu un exemple: 1D o 2H."],
                cs: "Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
                de: ["Geben Sie die Intervallnummer f??r Minuten-Charts ein (d.h. 5, wenn es sich um ein F??nf-Minuten-Chart handeln soll). Oder Nummer und Buchstabe f??r andere Intervalle: S f??r 1-Sekunden-Chart (15S f??r 15-Sekunden-Chart, etc.), H (st??ndliche), D (t??gliche), W (w??chentliche), M (monatliche) Intervalle (z.B. D oder 2H)"],
                el: "Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
                en: "Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
                es: ["Introduzca el n??mero del intervalo para los gr??ficos de minutos (por ejemplo, 5 si va a ser un gr??fico de cinco minutos). Tambi??n puede introducir un n??mero, m??s una letra, para conseguir diferentes intervalos: S para un gr??fico de 1 segundo (15S corresponde a un gr??fico de 15 segundos); H (horas), W (semanas) o M (meses). A continuaci??n se muestra un ejemplo: 1D o 2H."],
                fa: "Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
                fr: ["Tapez le num??ro d'intervalle pour les graphiques en minutes (c'est-??-dire 5 s'il s'agit d'un graphique de cinq minutes). Ou un chiffre plus une lettre pour les autres intervalles: S pour 1 seconde (15S pour 15 secondes, etc.), H (horaire), D (quotidien), W (hebdomadaire), M (mensuel) (c.-??-d. D ou 2H)"],
                he_IL: ["???????? ???? ???????? ?????????????????? ???????? ???????? ???????? (?????????? 5 ???? ???? ???????? ?????? ???? ?????? ????????). ???? ???????? ???????????? ?????????????? ?????? ??????????: S ???????? ???????? (15S ???????? 15 ?????????? ??????'), H (??????), D (????????), W (??????????), M (??????????) ?????????????????????? (?????????? D ???? 2H)"],
                hu_HU: "Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
                id_ID: ["Ketik angka interval untuk chart menit (cth: 5 untuk chart lima menit). Atau angka dengan huruf untuk interval lainnya: S untuk chart 1 detik (15S untuk chart 15 detik, dsb), H (Jam), D (Harian), W (Mingguan), M (Bulanan) (cth: D atau 2H)."],
                it: ["Scrivi il numero di minuti del timeframe desiderato (ad esempio, scrivi 5 se vuoi il grafico a 5 minuti). Altrimenti aggiungi la lettera per gli altri timeframe: 'S' per i secondi, 'H' per l'orario, 'D' per il giornaliero, 'W' per il settimanale, 'M' per il mensile (ad esempio, puoi scrivere '15S', '1D' o '2H')"],
                ja: ["??????????????????????????????????????????????????????5???????????????????????????????????????5??????????????????????????????????????????????????????????????????????????????????????????????????????????????????: ?????????????????? (15S???15???????????????), H (??????), D (???), W (???), M (???)????????????D ??? 2H??????"],
                ko: ["??? ????????? ?????? ????????? ????????? ????????????????????? (??????: 5??? ????????? 5). ?????? ????????? ?????? S (1???, 15?????? 15S ???),  H (??????), D(???), W(???), M(???) ??????????????? ??????????????? (??????: D ?????? 2H)"],
                ms_MY: ["Taipkan nombor selang masa untuk carta minit (i.e. 5 jika ia merupakan carta lima minit). Atau kombinasi nombor dengan huruf bagi selang lain: selang masa s untuk carta 1 saat (15s untuk carta 15 saat, dll.), j (Jam), H (Harian), M (Mingguan), B (Bulanan) (contohnya H atau 2j)"],
                nl_NL: "Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
                pl: ["Wpisz numer interwa??u dla wykres??w minutowych (np. 5, je??li ma to by?? wykres pi??ciominutowy). Lub numer plus litera dla innych interwa????w: S dla wykresu jednosekundowego (15S dla wykresu 15-sekundowego itd.) H (Godzinowy), D (dzienny), W (tygodniowy), M (miesi??czny) (np. D lub 2H)"],
                pt: ["Digite o n??mero do intervalo para gr??ficos de minutos (ou seja, 5 se for um gr??fico de cinco minutos). Ou n??mero mais letra para outros intervalos: S para 1 segundo (15S para 15 segundos, etc.), H (Para Hora), D (Di??rio), W (Semanal), M (Mensal) intervalos (ou seja, D ou 2H)"],
                ro: "Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
                ru: ["?????????????? ???????????? ?????????? ?????? ???????????????? ???????????????? (????????????????, 5, ???????? ?????????? 5-???????????????? ????????????). ?????? ?????????? ?? ?????????? ?????? ???????????? ????????????????????: S ?????? 1-???????????????????? ?????????????? (15S ?????? 15-???????????????????? ?? ??. ??.), H (????????), D (??????), W (????????????), M (????????????). ????????????????, D ?????? 2H"],
                sv: ["Ange intervallnumret f??r minutdiagram (t.ex. 5 om det ??r ett femminutersdiagram). Eller s?? anger du nummer och bokstav f??r andra intervall: S f??r 1-sekundsdiagram (15S f??r 15-sekundersdiagram osv.), H (varje timme), D (varje dag), W (varje vecka), M (varje m??nad) intervaller (t.ex. D eller 2H)"],
                th: ["??????????????????????????????????????????????????????????????????????????????????????????????????????????????? (???????????????????????? 5 ???????????????????????????????????????????????????????????????????????????) ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????: S ?????????????????????????????????????????? 1 ?????????????????? (15S ?????????????????????????????????????????? 15 ?????????????????? ?????????????????????) H (??????????????????????????????) D (??????????????????) W (??????????????????????????????) M (????????????????????????) (???????????????????????? D ???????????? 2H)"],
                tr: ["Dakika grafi??i i??in aral??k numaras??n?? yaz??n (yani, be?? dakikal??k bir grafik olacaksa 5). Veya di??er aral??klar i??in say?? ve say??n??n yan??nda harf: 1 saniye grafik i??in s (15 saniye grafik i??in 15s, vb.), S (Saatlik), G (G??nl??k), H (Haftal??k), A (Ayl??k) aral??klar?? (yani G veya 2S)"],
                vi: ["Nh???p s??? kho???ng cho c??c bi???u ????? ph??t (t???c l?? 5 n???u n?? s??? l?? bi???u ????? n??m ph??t). Ho???c s??? c???ng ch??? c??i cho c??c kho???ng th???i gian kh??c: S cho bi???u ????? 1 gi??y (15S cho bi???u ????? 15 gi??y, v.v.), H (H??ng gi???), D (H??ng ng??y), W (H??ng tu???n), M (H??ng th??ng) (t???c l?? D ho???c 2H)"],
                zh: ["????????????????????????????????????????????????5??????5????????????????????????H???????????????D????????????W????????????M???????????????????????????D???2H????????????????????????"],
                zh_TW: ["?????????????????????????????????(????????????????????????????????????5)???????????????????????????????????????S???1?????????(15S???15????????????)???H(??????)???D(???)???W(???)???M(???)????????????(???D???2H)"]
            }
        }
    }
]);
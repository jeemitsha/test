(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [42353], {
        358089: e => {
            e.exports = {
                input: "input-oiYdY6I4",
                "with-start-slot": "with-start-slot-oiYdY6I4",
                "with-end-slot": "with-end-slot-oiYdY6I4"
            }
        },
        789220: e => {
            e.exports = {
                errors: "errors-nQUDfTUB",
                show: "show-nQUDfTUB",
                error: "error-nQUDfTUB"
            }
        },
        196373: e => {
            e.exports = {
                "error-icon": "error-icon-ROs2cmJ2",
                "intent-danger": "intent-danger-ROs2cmJ2",
                "intent-warning": "intent-warning-ROs2cmJ2"
            }
        },
        739941: e => {
            e.exports = {
                "static-messages": "static-messages-u1qnKSIb",
                errors: "errors-u1qnKSIb",
                warnings: "warnings-u1qnKSIb",
                "success-mesages": "success-mesages-u1qnKSIb",
                "input-description": "input-description-u1qnKSIb",
                message: "message-u1qnKSIb"
            }
        },
        142135: (e, t, s) => {
            "use strict";
            s.d(t, {
                Input: () => n.Input,
                InputControl: () => n.InputControl
            });
            var n = s(314551)
        },
        314551: (e, t, s) => {
            "use strict";
            s.d(t, {
                Input: () => E,
                InputControl: () => w
            });
            var n = s(50959),
                r = s(497754),
                a = s(8626),
                o = s(763341),
                c = s(151057),
                i = s(662929),
                l = s(207357),
                u = s(405964),
                d = s(633750),
                h = s(452395),
                m = s(514420),
                g = s(358089),
                p = s.n(g);

            function f(e) {
                return !(0, a.isAriaAttribute)(e) && !(0, a.isDataAttribute)(e)
            }

            function E(e) {
                const {
                    id: t,
                    title: s,
                    role: o,
                    tabIndex: c,
                    placeholder: i,
                    name: l,
                    type: u,
                    value: d,
                    defaultValue: g,
                    draggable: E,
                    autoComplete: w,
                    autoFocus: b,
                    maxLength: S,
                    min: v,
                    max: M,
                    step: I,
                    pattern: A,
                    inputMode: C,
                    onSelect: R,
                    onFocus: y,
                    onBlur: F,
                    onKeyDown: k,
                    onKeyUp: x,
                    onKeyPress: W,
                    onChange: B,
                    onDragStart: O,
                    size: D = "medium",
                    className: T,
                    inputClassName: H,
                    disabled: K,
                    readonly: N,
                    containerTabIndex: P,
                    startSlot: U,
                    endSlot: Y,
                    reference: q,
                    containerReference: z,
                    onContainerFocus: L,
                    ...V
                } = e, J = (0, a.filterProps)(V, f), Q = { ...(0, a.filterAriaProps)(V),
                    ...(0, a.filterDataProps)(V),
                    id: t,
                    title: s,
                    role: o,
                    tabIndex: c,
                    placeholder: i,
                    name: l,
                    type: u,
                    value: d,
                    defaultValue: g,
                    draggable: E,
                    autoComplete: w,
                    autoFocus: b,
                    maxLength: S,
                    min: v,
                    max: M,
                    step: I,
                    pattern: A,
                    inputMode: C,
                    onSelect: R,
                    onFocus: y,
                    onBlur: F,
                    onKeyDown: k,
                    onKeyUp: x,
                    onKeyPress: W,
                    onChange: B,
                    onDragStart: O
                };
                return n.createElement(h.ControlSkeleton, { ...J,
                    disabled: K,
                    readonly: N,
                    tabIndex: P,
                    className: r(p().container, T),
                    size: D,
                    ref: z,
                    onFocus: L,
                    startSlot: U,
                    middleSlot: n.createElement(m.MiddleSlot, null, n.createElement("input", { ...Q,
                        className: r(p().input, H, U && p()["with-start-slot"], Y && p()["with-end-slot"]),
                        disabled: K,
                        readOnly: N,
                        ref: q
                    })),
                    endSlot: Y
                })
            }

            function w(e) {
                e = (0, l.useControl)(e);
                const {
                    disabled: t,
                    autoSelectOnFocus: s,
                    tabIndex: r = 0,
                    onFocus: a,
                    onBlur: h,
                    reference: m,
                    containerReference: g = null
                } = e, p = (0, n.useRef)(null), f = (0, n.useRef)(null), [w, b] = (0, u.useFocus)(), S = t ? void 0 : w ? -1 : r, v = t ? void 0 : w ? r : -1, {
                    isMouseDown: M,
                    handleMouseDown: I,
                    handleMouseUp: A
                } = (0, d.useIsMouseDown)(), C = (0, o.createSafeMulticastEventHandler)(b.onFocus, (function(e) {
                    s && !M.current && (0, c.selectAllContent)(e.currentTarget)
                }), a), R = (0, o.createSafeMulticastEventHandler)(b.onBlur, h), y = (0, n.useCallback)((e => {
                    p.current = e, m && ("function" == typeof m && m(e), "object" == typeof m && (m.current = e))
                }), [p, m]);
                return n.createElement(E, { ...e,
                    isFocused: w,
                    containerTabIndex: S,
                    tabIndex: v,
                    onContainerFocus: function(e) {
                        f.current === e.target && null !== p.current && p.current.focus()
                    },
                    onFocus: C,
                    onBlur: R,
                    reference: y,
                    containerReference: (0,
                        i.useMergedRefs)([f, g]),
                    onMouseDown: I,
                    onMouseUp: A
                })
            }
        },
        990598: (e, t, s) => {
            "use strict";
            s.d(t, {
                AttachableErrorMsg: () => u
            });
            var n = s(50959),
                r = s(497754),
                a = s(368337),
                o = s(149368),
                c = s(789220),
                i = s(768038);
            class l extends n.PureComponent {
                render() {
                    const {
                        children: e = [],
                        show: t = !1,
                        customErrorClass: s,
                        disableRtlStyles: a,
                        messageIdCallback: o
                    } = this.props, l = r(c.errors, {
                        [c.show]: t
                    }, s), u = e.map(((e, t) => n.createElement(d, {
                        key: t,
                        messageIdCallback: o
                    }, e)));
                    let h = {
                        position: "absolute",
                        top: this.props.top,
                        width: this.props.width,
                        height: this.props.height,
                        bottom: void 0 !== this.props.bottom ? this.props.bottom : "100%",
                        right: void 0 !== this.props.right ? this.props.right : 0,
                        left: this.props.left,
                        zIndex: this.props.zIndex,
                        maxWidth: this.props.maxWidth
                    };
                    if ((0, i.isRtl)() && !a) {
                        const {
                            left: e,
                            right: t
                        } = h;
                        h = { ...h,
                            left: t,
                            right: e
                        }
                    }
                    return n.createElement("div", {
                        style: h,
                        className: l
                    }, u)
                }
            }
            const u = (0, a.makeOverlapable)((0, o.makeAttachable)(l));

            function d(e) {
                const {
                    children: t,
                    messageIdCallback: s,
                    ...r
                } = e, a = n.useId();
                return n.useEffect((() => {
                    s && s(a)
                }), [a]), n.createElement("div", { ...r,
                    className: c.error,
                    id: a
                }, t)
            }
        },
        519197: (e, t, s) => {
            "use strict";
            s.d(t, {
                ErrorIcon: () => i
            });
            var n = s(50959),
                r = s(497754),
                a = s(83436),
                o = s(616658),
                c = s(196373);

            function i(e) {
                const {
                    intent: t = "danger"
                } = e;
                return n.createElement(a.Icon, {
                    icon: o,
                    className: r(c["error-icon"], c[`intent-${t}`])
                })
            }
        },
        342353: (e, t, s) => {
            "use strict";
            s.d(t, {
                FormInput: () => l
            });
            var n = s(50959),
                r = s(142135),
                a = s(653549),
                o = s(514420),
                c = s(763341),
                i = s(662929);

            function l(e) {
                var t;
                const {
                    intent: s,
                    onFocus: l,
                    onBlur: u,
                    onMouseOver: d,
                    onMouseOut: h,
                    containerReference: m = null,
                    endSlot: g,
                    hasErrors: p,
                    hasWarnings: f,
                    hasSuccessMessages: E,
                    errors: w,
                    warnings: b,
                    successMessages: S,
                    alwaysShowAttachedErrors: v,
                    iconHidden: M,
                    messagesPosition: I,
                    messagesAttachment: A,
                    customErrorsAttachment: C,
                    messagesRoot: R,
                    inheritMessagesWidthFromTarget: y,
                    disableMessagesRtlStyles: F,
                    "aria-required": k,
                    "aria-invalid": x,
                    inputDescription: W,
                    ...B
                } = e, O = (0, a.useControlValidationLayout)({
                    hasErrors: p,
                    hasWarnings: f,
                    hasSuccessMessages: E,
                    errors: w,
                    warnings: b,
                    successMessages: S,
                    alwaysShowAttachedErrors: v,
                    iconHidden: M,
                    messagesPosition: I,
                    messagesAttachment: A,
                    customErrorsAttachment: C,
                    messagesRoot: R,
                    inheritMessagesWidthFromTarget: y,
                    disableMessagesRtlStyles: F,
                    inputDescription: W
                }), D = (0, c.createSafeMulticastEventHandler)(l, O.onFocus), T = (0, c.createSafeMulticastEventHandler)(u, O.onBlur), H = (0, c.createSafeMulticastEventHandler)(d, O.onMouseOver), K = (0, c.createSafeMulticastEventHandler)(h, O.onMouseOut);
                return n.createElement(n.Fragment, null, n.createElement(r.InputControl, { ...B,
                    intent: null !== (t = O.intent) && void 0 !== t ? t : s,
                    onFocus: D,
                    onBlur: T,
                    onMouseOver: H,
                    onMouseOut: K,
                    containerReference: (0, i.useMergedRefs)([m, O.containerReference]),
                    endSlot: n.createElement(n.Fragment, null, O.icon && n.createElement(o.EndSlot, {
                        icon: !0
                    }, O.icon), g),
                    "aria-required": k,
                    "aria-invalid": x,
                    "aria-describedby": O.ariaIds
                }), O.renderedErrors)
            }
        },
        653549: (e, t, s) => {
            "use strict";
            s.d(t, {
                MessagesPosition: () => n,
                ControlMessagesAttachment: () => r,
                useControlValidationLayout: () => S
            });
            var n, r, a = s(50959),
                o = s(497754),
                c = s(405964),
                i = s(962624),
                l = s(514420),
                u = s(735270),
                d = s(990598),
                h = s(519197),
                m = s(739941);
            ! function(e) {
                e[e.Attached = 0] = "Attached", e[e.Static = 1] = "Static", e[e.Hidden = 2] = "Hidden"
            }(n || (n = {})),
            function(e) {
                e.Top = "top", e.Bottom = "bottom"
            }(r || (r = {}));
            const g = {
                top: {
                    attachment: u.anchors.topRight.attachment,
                    targetAttachment: u.anchors.topRight.targetAttachment,
                    attachmentOffsetY: -4
                },
                bottom: {
                    attachment: u.anchors.bottomRight.attachment,
                    targetAttachment: u.anchors.bottomRight.targetAttachment,
                    attachmentOffsetY: 4
                }
            };

            function p(e) {
                const {
                    isOpened: t,
                    target: s,
                    errorAttachment: n = r.Top,
                    customErrorsAttachment: o,
                    root: c = "parent",
                    inheritWidthFromTarget: i = !1,
                    disableRtlStyles: l,
                    children: u,
                    messageIdCallback: h
                } = e, {
                    attachment: m,
                    targetAttachment: p,
                    attachmentOffsetY: f
                } = null != o ? o : g[n];
                return a.createElement(d.AttachableErrorMsg, {
                    isOpened: t,
                    target: s,
                    root: c,
                    inheritWidthFromTarget: i,
                    attachment: m,
                    targetAttachment: p,
                    attachmentOffsetY: f,
                    disableRtlStyles: l,
                    messageIdCallback: h,
                    inheritMaxWidthFromTarget: !0,
                    show: !0
                }, u)
            }

            function f(e, t) {
                return Boolean(e) && void 0 !== t && t.length > 0
            }

            function E(e, t, s) {
                return e === n.Attached && f(t, s)
            }

            function w(e, t, s) {
                return e === n.Static && f(t, s)
            }

            function b(e, t, s) {
                const {
                    hasErrors: r,
                    hasWarnings: a,
                    hasSuccessMessages: o,
                    alwaysShowAttachedErrors: c,
                    iconHidden: i,
                    errors: l,
                    warnings: u,
                    successMessages: d,
                    messagesPosition: h = n.Static
                } = e, m = E(h, r, l), g = E(h, a, u), p = m && (t || s || Boolean(c)), f = !p && g && (t || s), b = w(h, r, l), S = !b && w(h, a, u), v = !b && !S && w(h, o, d), M = !i && Boolean(r), I = !i && !M && Boolean(a), A = function(e, t, s) {
                    return Boolean(s) ? "success" : Boolean(e) ? "danger" : Boolean(t) ? "warning" : void 0
                }(r, a, o);
                return {
                    hasAttachedErrorMessages: m,
                    hasAttachedWarningMessages: g,
                    showAttachedErrorMessages: p,
                    showAttachedWarningMessages: f,
                    showStaticErrorMessages: b,
                    showStaticWarningMessages: S,
                    showStaticSuccessMessages: v,
                    showErrorIcon: M,
                    showWarningIcon: I,
                    intent: A
                }
            }

            function S(e) {
                var t, s, n, r;
                const {
                    errors: u,
                    warnings: d,
                    successMessages: g,
                    messagesAttachment: f,
                    customErrorsAttachment: E,
                    messagesRoot: w,
                    inheritMessagesWidthFromTarget: S,
                    disableMessagesRtlStyles: M,
                    inputDescription: I
                } = e, [A, C] = (0, c.useFocus)(), [R, y] = (0, i.useHover)(), F = (0, a.useRef)(null), k = (0, a.useRef)(""), x = (0, a.useRef)([]), W = e => {
                    e && x.current.push(e)
                };
                a.useEffect((() => (k.current = x.current.join(" "), () => {
                    x.current = [], k.current = ""
                })), [x.current]);
                const {
                    hasAttachedErrorMessages: B,
                    hasAttachedWarningMessages: O,
                    showAttachedErrorMessages: D,
                    showAttachedWarningMessages: T,
                    showStaticErrorMessages: H,
                    showStaticWarningMessages: K,
                    showStaticSuccessMessages: N,
                    showErrorIcon: P,
                    showWarningIcon: U,
                    intent: Y
                } = b(e, A, R), q = P || U ? a.createElement(h.ErrorIcon, {
                    intent: P ? "danger" : "warning"
                }) : void 0, z = B ? a.createElement(p, {
                    errorAttachment: f,
                    customErrorsAttachment: E,
                    isOpened: D,
                    target: F.current,
                    root: w,
                    inheritWidthFromTarget: S,
                    disableRtlStyles: M,
                    children: u,
                    messageIdCallback: W
                }) : void 0, L = O ? a.createElement(p, {
                    errorAttachment: f,
                    isOpened: T,
                    target: F.current,
                    root: w,
                    inheritWidthFromTarget: S,
                    disableRtlStyles: M,
                    children: d,
                    messageIdCallback: W
                }) : void 0, V = H ? a.createElement(l.AfterSlot, {
                    className: o(m["static-messages"], m.errors)
                }, null == u ? void 0 : u.map(((e, t) => a.createElement(v, {
                    key: t,
                    messageIdCallback: W
                }, e)))) : void 0, J = K ? a.createElement(l.AfterSlot, {
                    className: o(m["static-messages"], m.warnings)
                }, null == d ? void 0 : d.map(((e, t) => a.createElement(v, {
                    key: t,
                    messageIdCallback: W
                }, e)))) : void 0, Q = N ? a.createElement(l.AfterSlot, {
                    className: o(m["static-messages"], m["success-mesages"])
                }, null == g ? void 0 : g.map(((e, t) => a.createElement(v, {
                    key: t,
                    messageIdCallback: W
                }, e)))) : void 0, j = !H && !K && !N && I ? a.createElement(l.AfterSlot, {
                    className: o(m["static-messages"], m["input-description"])
                }, a.createElement(v, {
                    messageIdCallback: W
                }, I)) : void 0, $ = null !== (r = null !== (n = null !== (s = null !== (t = null != z ? z : L) && void 0 !== t ? t : V) && void 0 !== s ? s : J) && void 0 !== n ? n : Q) && void 0 !== r ? r : j;
                return {
                    ariaIds: k.current,
                    icon: q,
                    renderedErrors: $,
                    containerReference: F,
                    intent: Y,
                    ...C,
                    ...y
                }
            }

            function v(e) {
                const {
                    children: t,
                    messageIdCallback: s,
                    ...n
                } = e, r = a.useId();
                return a.useEffect((() => {
                    s(r)
                }), [r]), a.createElement("span", { ...n,
                    className: m.message,
                    id: r
                }, t)
            }
        },
        616658: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8 15c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm0 1c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm-1-12c0-.552.448-1 1-1s1 .448 1 1v4c0 .552-.448 1-1 1s-1-.448-1-1v-4zm1 7c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"/></svg>'
        }
    }
]);
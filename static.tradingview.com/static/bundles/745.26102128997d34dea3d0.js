(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [745], {
        536612: t => {
            t.exports = {
                dialog: "dialog-nnDbXk_L",
                rounded: "rounded-nnDbXk_L",
                shadowed: "shadowed-nnDbXk_L",
                fullscreen: "fullscreen-nnDbXk_L",
                darker: "darker-nnDbXk_L",
                backdrop: "backdrop-nnDbXk_L"
            }
        },
        419283: t => {
            t.exports = {
                "tablet-normal-breakpoint": "screen and (max-width: 768px)",
                "tooltip-offset": "20px",
                dialog: "dialog-UExGRfA_",
                dragging: "dragging-UExGRfA_",
                dialogAnimatedAppearance: "dialogAnimatedAppearance-UExGRfA_",
                dialogAnimation: "dialogAnimation-UExGRfA_",
                dialogTooltip: "dialogTooltip-UExGRfA_"
            }
        },
        697989: (t, e, i) => {
            "use strict";
            i.d(e, {
                Dialog: () => h
            });
            var o = i(50959),
                s = i(497754),
                n = i(670797),
                a = i(829725),
                r = i(8626),
                l = i(536612);
            class h extends o.PureComponent {
                constructor() {
                    super(...arguments), this._manager = new a.OverlapManager, this._handleSlot = t => {
                        this._manager.setContainer(t)
                    }
                }
                render() {
                    const {
                        rounded: t = !0,
                        shadowed: e = !0,
                        fullscreen: i = !1,
                        darker: a = !1,
                        className: h,
                        backdrop: c,
                        containerTabIndex: d = -1
                    } = this.props, u = s(h, l.dialog, t && l.rounded, e && l.shadowed, i && l.fullscreen, a && l.darker), p = (0, r.filterDataProps)(this.props), g = this.props.style ? { ...this._createStyles(),
                        ...this.props.style
                    } : this._createStyles();
                    return o.createElement(o.Fragment, null, o.createElement(n.SlotContext.Provider, {
                        value: this._manager
                    }, c && o.createElement("div", {
                        onClick: this.props.onClickBackdrop,
                        className: l.backdrop
                    }), o.createElement("div", { ...p,
                        className: u,
                        style: g,
                        ref: this.props.reference,
                        onFocus: this.props.onFocus,
                        onMouseDown: this.props.onMouseDown,
                        onMouseUp: this.props.onMouseUp,
                        onClick: this.props.onClick,
                        onKeyDown: this.props.onKeyDown,
                        tabIndex: d,
                        "aria-label": this.props.containerAriaLabel
                    }, this.props.children)), o.createElement(n.Slot, {
                        reference: this._handleSlot
                    }))
                }
                _createStyles() {
                    const {
                        bottom: t,
                        left: e,
                        width: i,
                        right: o,
                        top: s,
                        zIndex: n,
                        height: a
                    } = this.props;
                    return {
                        bottom: t,
                        left: e,
                        right: o,
                        top: s,
                        zIndex: n,
                        maxWidth: i,
                        height: a
                    }
                }
            }
        },
        488653: (t, e, i) => {
            "use strict";
            i.d(e, {
                DragHandler: () => s
            });
            var o = i(686668);
            class s {
                constructor(t, e, i = {
                    boundByScreen: !0
                }) {
                    this._drag = null, this._canBeTouchClick = !1, this._frame = null, this._onMouseDragStart = t => {
                            if (0 !== t.button || this._isTargetNoDraggable(t)) return;
                            t.preventDefault(), document.addEventListener("mousemove", this._onMouseDragMove), document.addEventListener("mouseup", this._onMouseDragEnd);
                            const e = (0, o.clampPosition)((0, o.positionFromMouseEvent)(t));
                            this._dragStart(e)
                        }, this._onTouchDragStart = t => {
                            if (this._isTargetNoDraggable(t)) return;
                            this._canBeTouchClick = !0, t.preventDefault(), this._header.addEventListener("touchmove", this._onTouchDragMove, {
                                passive: !1
                            });
                            const e = (0, o.clampPosition)((0, o.positionFromTouchEvent)(t));
                            this._dragStart(e)
                        }, this._onMouseDragEnd = t => {
                            t.target instanceof Node && this._header.contains(t.target) && t.preventDefault(), document.removeEventListener("mousemove", this._onMouseDragMove), document.removeEventListener("mouseup", this._onMouseDragEnd), this._onDragStop()
                        }, this._onTouchDragEnd = t => {
                            this._header.removeEventListener("touchmove", this._onTouchDragMove), this._onDragStop(), this._canBeTouchClick && (this._canBeTouchClick = !1, (0, o.simulateClick)(t.target))
                        },
                        this._onMouseDragMove = t => {
                            const e = (0, o.clampPosition)((0, o.positionFromMouseEvent)(t));
                            this._dragMove(e)
                        }, this._onTouchDragMove = t => {
                            this._canBeTouchClick = !1, t.preventDefault();
                            const e = (0, o.clampPosition)((0, o.positionFromTouchEvent)(t));
                            this._dragMove(e)
                        }, this._onDragStop = () => {
                            this._drag = null, this._header.classList.remove("dragging"), this._options.onDragEnd && this._options.onDragEnd()
                        }, this._dialog = t, this._header = e, this._options = i, this._header.addEventListener("mousedown", this._onMouseDragStart), this._header.addEventListener("touchstart", this._onTouchDragStart), this._header.addEventListener("touchend", this._onTouchDragEnd)
                }
                destroy() {
                    null !== this._frame && cancelAnimationFrame(this._frame), this._header.removeEventListener("mousedown", this._onMouseDragStart), document.removeEventListener("mouseup", this._onMouseDragEnd), this._header.removeEventListener("touchstart", this._onTouchDragStart), this._header.removeEventListener("touchend", this._onTouchDragEnd), document.removeEventListener("mouseleave", this._onMouseDragEnd)
                }
                updateOptions(t) {
                    this._options = t
                }
                _dragStart(t) {
                    const e = this._dialog.getBoundingClientRect();
                    this._drag = {
                        startX: t.x,
                        startY: t.y,
                        finishX: t.x,
                        finishY: t.y,
                        dialogX: e.left,
                        dialogY: e.top
                    };
                    const i = Math.round(e.left),
                        o = Math.round(e.top);
                    this._dialog.style.transform = `translate(${i}px, ${o}px)`, this._header.classList.add("dragging"), this._options.onDragStart && this._options.onDragStart()
                }
                _dragMove(t) {
                    if (this._drag) {
                        if (this._drag.finishX = t.x, this._drag.finishY = t.y, null !== this._frame) return;
                        this._frame = requestAnimationFrame((() => {
                            if (this._drag) {
                                const e = t.x - this._drag.startX,
                                    i = t.y - this._drag.startY;
                                this._moveDialog(this._drag.dialogX + e, this._drag.dialogY + i)
                            }
                            this._frame = null
                        }))
                    }
                }
                _moveDialog(t, e) {
                    const i = this._dialog.getBoundingClientRect(),
                        {
                            boundByScreen: s
                        } = this._options,
                        n = (0, o.clampSegment)(t, i.width, s ? 0 : -1 / 0, s ? window.innerWidth : 1 / 0),
                        a = (0, o.clampSegment)(e, i.height, s ? 0 : -1 / 0, s ? window.innerHeight : 1 / 0);
                    this._dialog.style.transform = `translate(${Math.round(n)}px, ${Math.round(a)}px)`
                }
                _isTargetNoDraggable(t) {
                    return t.target instanceof Element && null !== t.target.closest("[data-disable-drag]")
                }
            }
        },
        8629: (t, e, i) => {
            "use strict";
            i.d(e, {
                PopupContext: () => o
            });
            const o = i(50959).createContext(null)
        },
        500745: (t, e, i) => {
            "use strict";
            i.d(e, {
                PopupDialog: () => y
            });
            var o = i(50959),
                s = i(497754),
                n = i(650151),
                a = i(697989),
                r = i(368337),
                l = i(157490),
                h = i(488653),
                c = i(686668);
            const d = {
                vertical: 0
            };
            class u {
                constructor(t, e) {
                    this._frame = null, this._isFullscreen = !1, this._handleResize = () => {
                        null === this._frame && (this._frame = requestAnimationFrame((() => {
                            this.recalculateBounds(), this._frame = null
                        })))
                    }, this._dialog = t, this._guard = e.guard || d, this._calculateDialogPosition = e.calculateDialogPosition, this._initialHeight = t.style.height, window.addEventListener("resize", this._handleResize)
                }
                updateOptions(t) {
                    this._guard = t.guard || d, this._calculateDialogPosition = t.calculateDialogPosition
                }
                setFullscreen(t) {
                    this._isFullscreen !== t && (this._isFullscreen = t, this.recalculateBounds())
                }
                centerAndFit() {
                    const {
                        x: t,
                        y: e
                    } = this.getDialogsTopLeftCoordinates(), i = this._calcAvailableHeight(), o = this._calcDialogHeight();
                    if (i === o)
                        if (this._calculateDialogPosition) {
                            const {
                                left: t,
                                top: e
                            } = this._calculateDialogPosition(this._dialog, document.documentElement, this._guard);
                            this._dialog.style.transform = `translate(${Math.round(t)}px, ${Math.round(e)}px)`
                        } else this._dialog.style.height = o + "px";
                    this._dialog.style.top = "0px", this._dialog.style.left = "0px", this._dialog.style.transform = `translate(${t}px, ${e}px)`
                }
                getDialogsTopLeftCoordinates() {
                    const {
                        clientHeight: t,
                        clientWidth: e
                    } = document.documentElement, i = this._calcDialogHeight(), o = e / 2 - this._dialog.clientWidth / 2, s = t / 2 - i / 2;
                    return {
                        x: Math.round(o),
                        y: Math.round(s)
                    }
                }
                recalculateBounds() {
                    const {
                        clientHeight: t,
                        clientWidth: e
                    } = document.documentElement;
                    if (this._isFullscreen) this._dialog.style.top = "0px", this._dialog.style.left = "0px", this._dialog.style.width = "100%", this._dialog.style.height = "100%", this._dialog.style.transform = "none";
                    else {
                        const {
                            vertical: i
                        } = this._guard;
                        if (this._calculateDialogPosition) {
                            const o = this._calculateDialogPosition(this._dialog, {
                                    clientWidth: e,
                                    clientHeight: t
                                }, {
                                    vertical: i
                                }),
                                {
                                    left: s,
                                    top: n
                                } = o;
                            this._dialog.style.transform = `translate(${Math.round(s)}px, ${Math.round(n)}px)`
                        } else {
                            this._dialog.style.width = "", this._dialog.style.height = "";
                            const o = this._dialog.getBoundingClientRect(),
                                s = t - 2 * i,
                                n = (0, c.clampSegment)(o.left, o.width, 0, e),
                                a = (0, c.clampSegment)(o.top, o.height, i, t);
                            this._dialog.style.top = "0px", this._dialog.style.left = "0px", this._dialog.style.transform = `translate(${Math.round(n)}px, ${Math.round(a)}px)`, this._dialog.style.height = s < o.height ? s + "px" : this._initialHeight
                        }
                    }
                }
                destroy() {
                    window.removeEventListener("resize", this._handleResize), null !== this._frame && (cancelAnimationFrame(this._frame), this._frame = null)
                }
                _calcDialogHeight() {
                    const t = this._calcAvailableHeight();
                    return t < this._dialog.clientHeight ? t : this._dialog.clientHeight
                }
                _calcAvailableHeight() {
                    return document.documentElement.clientHeight - 2 * this._guard.vertical
                }
            }
            var p = i(707533),
                g = i(8629),
                _ = i(575658),
                m = i(12173),
                f = i(419283);
            const v = f["tooltip-offset"];
            class D extends o.PureComponent {
                constructor(t) {
                    super(t), this._dialog = null, this._cleanUpFunctions = [], this._prevActiveElement = null, this._handleDialogRef = t => {
                        const {
                            reference: e
                        } = this.props;
                        this._dialog = t, "function" == typeof e && e(t)
                    }, this._handleFocus = t => {
                        this._moveToTop()
                    }, this._handleMouseDown = t => {
                        this._moveToTop()
                    }, this._handleTouchStart = t => {
                        this._moveToTop()
                    }, this.state = {
                        canFitTooltip: !1
                    }
                }
                render() {
                    return o.createElement(g.PopupContext.Provider, {
                        value: this
                    }, o.createElement(l.OutsideEvent, {
                        mouseDown: !0,
                        touchStart: !0,
                        handler: this.props.onClickOutside
                    }, (t => o.createElement("div", {
                        ref: t,
                        "data-outside-boundary-for": this.props.name,
                        onFocus: this._handleFocus,
                        onMouseDown: this._handleMouseDown,
                        onTouchStart: this._handleTouchStart,
                        "data-dialog-name": this.props["data-dialog-name"]
                    }, o.createElement(a.Dialog, {
                        style: this._applyAnimationCSSVariables(),
                        ...this.props,
                        reference: this._handleDialogRef,
                        className: s(f.dialog, this.props.className)
                    }, this.props.dialogTooltip && this.state.canFitTooltip && o.createElement(m.TooltipWidget, {
                        className: f.dialogTooltip
                    }, this.props.dialogTooltip), this.props.children)))))
                }
                componentDidMount() {
                    const {
                        draggable: t,
                        boundByScreen: e,
                        onDragStart: i
                    } = this.props, o = (0, n.ensureNotNull)(this._dialog);
                    if (t) {
                        const t = o.querySelector("[data-dragg-area]");
                        if (t && t instanceof HTMLElement) {
                            const s = new h.DragHandler(o, t, {
                                boundByScreen: Boolean(e),
                                onDragStart: i
                            });
                            this._cleanUpFunctions.push((() => s.destroy())), this._drag = s
                        }
                    }
                    this._prevActiveElement = document.activeElement, this.props.autofocus && !o.contains(document.activeElement) && o.focus(), (this._isFullScreen() || this.props.fixedBody) && (0, _.setFixedBodyState)(!0);
                    const {
                        guard: s,
                        calculateDialogPosition: a
                    } = this.props;
                    if (this.props.resizeHandler) this._resize = this.props.resizeHandler;
                    else {
                        const t = new u(o, {
                            guard: s,
                            calculateDialogPosition: a
                        });
                        this._cleanUpFunctions.push((() => t.destroy())), this._resize = t
                    }
                    this.props.isAnimationEnabled && this.props.growPoint && this._applyAppearanceAnimation(this.props.growPoint), this.props.centeredOnMount && this._resize.centerAndFit(), this._resize.setFullscreen(this._isFullScreen()), this.props.dialogTooltip && this._handleTooltipFit(), this.props.shouldForceFocus && o.focus()
                }
                componentDidUpdate() {
                    if (this._resize) {
                        const {
                            guard: t,
                            calculateDialogPosition: e
                        } = this.props;
                        this._resize.updateOptions({
                            guard: t,
                            calculateDialogPosition: e
                        }), this._resize.setFullscreen(this._isFullScreen())
                    }
                    this._drag && this._drag.updateOptions({
                        boundByScreen: Boolean(this.props.boundByScreen),
                        onDragStart: this.props.onDragStart
                    })
                }
                componentWillUnmount() {
                    var t;
                    if (this._prevActiveElement && document.body.contains(this._prevActiveElement) && (null === document.activeElement || document.activeElement === document.body || (null === (t = this._dialog) || void 0 === t ? void 0 : t.contains(document.activeElement)))) try {
                        this._prevActiveElement.focus({
                            preventScroll: !0
                        })
                    } catch (t) {}
                    for (const t of this._cleanUpFunctions) t();
                    (this._isFullScreen() || this.props.fixedBody) && (0, _.setFixedBodyState)(!1)
                }
                focus() {
                    this._dialog && this._dialog.focus()
                }
                centerAndFit() {
                    this._resize && this._resize.centerAndFit()
                }
                recalculateBounds() {
                    this._resize && this._resize.recalculateBounds()
                }
                _moveToTop() {
                    null !== this.context && this.context.moveToTop()
                }
                _applyAnimationCSSVariables() {
                    return {
                        "--animationTranslateStartX": null,
                        "--animationTranslateStartY": null,
                        "--animationTranslateEndX": null,
                        "--animationTranslateEndY": null
                    }
                }
                _applyAppearanceAnimation(t) {
                    if (this._resize && this._dialog) {
                        const {
                            x: e,
                            y: i
                        } = t, {
                            x: o,
                            y: s
                        } = this._resize.getDialogsTopLeftCoordinates();
                        this._dialog.style.setProperty("--animationTranslateStartX", `${e}px`), this._dialog.style.setProperty("--animationTranslateStartY", `${i}px`), this._dialog.style.setProperty("--animationTranslateEndX", `${o}px`), this._dialog.style.setProperty("--animationTranslateEndY", `${s}px`), this._dialog.classList.add(f.dialogAnimatedAppearance)
                    }
                }
                _handleTooltipFit() {
                    if (this._resize) {
                        const t = this._resize.getDialogsTopLeftCoordinates().y - parseInt(v) >= 0;
                        this.setState({
                            canFitTooltip: t
                        })
                    }
                }
                _isFullScreen() {
                    return Boolean(this.props.fullscreen)
                }
            }
            D.contextType = p.PortalContext, D.defaultProps = {
                boundByScreen: !0,
                draggable: !0,
                centeredOnMount: !0
            };
            const y = (0, r.makeOverlapable)(D)
        },
        686668: (t, e, i) => {
            "use strict";
            i.d(e, {
                clampSegment: () => s,
                clampPosition: () => n,
                simulateClick: () => a,
                positionFromMouseEvent: () => r,
                positionFromTouchEvent: () => l
            });
            var o = i(43329);

            function s(t, e, i, o) {
                return t + e > o && (t = o - e), t < i && (t = i), t
            }

            function n(t) {
                return {
                    x: (0, o.clamp)(t.x, 20, document.documentElement.clientWidth - 20),
                    y: (0, o.clamp)(t.y, 20, window.innerHeight - 20)
                }
            }

            function a(t) {
                if (t instanceof SVGElement) {
                    const e = document.createEvent("SVGEvents");
                    e.initEvent("click", !0, !0), t.dispatchEvent(e)
                }
                t instanceof HTMLElement && t.click()
            }

            function r(t) {
                return {
                    x: t.clientX,
                    y: t.clientY
                }
            }

            function l(t) {
                return {
                    x: t.touches[0].clientX,
                    y: t.touches[0].clientY
                }
            }
        }
    }
]);
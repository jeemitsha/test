(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [22306], {
        259142: function(e, t) {
            var o, i, n;
            i = [t], o = function(e) {
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
                    var i = {
                        get passive() {
                            o = !0
                        }
                    };
                    window.addEventListener("testPassive", null, i), window.removeEventListener("testPassive", null, i)
                }
                var n = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
                    r = [],
                    s = !1,
                    a = -1,
                    l = void 0,
                    c = void 0,
                    d = function(e) {
                        return r.some((function(t) {
                            return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e))
                        }))
                    },
                    h = function(e) {
                        var t = e || window.event;
                        return !!d(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1)
                    },
                    u = function() {
                        setTimeout((function() {
                            void 0 !== c && (document.body.style.paddingRight = c, c = void 0), void 0 !== l && (document.body.style.overflow = l, l = void 0)
                        }))
                    };
                e.disableBodyScroll = function(e, i) {
                    if (n) {
                        if (!e) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
                        if (e && !r.some((function(t) {
                                return t.targetElement === e
                            }))) {
                            var u = {
                                targetElement: e,
                                options: i || {}
                            };
                            r = [].concat(t(r), [u]), e.ontouchstart = function(e) {
                                1 === e.targetTouches.length && (a = e.targetTouches[0].clientY)
                            }, e.ontouchmove = function(t) {
                                var o, i, n, r;
                                1 === t.targetTouches.length && (i = e, r = (o = t).targetTouches[0].clientY - a, !d(o.target) && (i && 0 === i.scrollTop && 0 < r || (n = i) && n.scrollHeight - n.scrollTop <= n.clientHeight && r < 0 ? h(o) : o.stopPropagation()))
                            }, s || (document.addEventListener("touchmove", h, o ? {
                                passive: !1
                            } : void 0), s = !0)
                        }
                    } else {
                        m = i, setTimeout((function() {
                            if (void 0 === c) {
                                var e = !!m && !0 === m.reserveScrollBarGap,
                                    t = window.innerWidth - document.documentElement.clientWidth;
                                e && 0 < t && (c = document.body.style.paddingRight, document.body.style.paddingRight = t + "px")
                            }
                            void 0 === l && (l = document.body.style.overflow, document.body.style.overflow = "hidden")
                        }));
                        var p = {
                            targetElement: e,
                            options: i || {}
                        };
                        r = [].concat(t(r), [p])
                    }
                    var m
                }, e.clearAllBodyScrollLocks = function() {
                    n ? (r.forEach((function(e) {
                        e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null
                    })), s && (document.removeEventListener("touchmove", h, o ? {
                        passive: !1
                    } : void 0), s = !1), r = [], a = -1) : (u(), r = [])
                }, e.enableBodyScroll = function(e) {
                    if (n) {
                        if (!e) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                        e.ontouchstart = null, e.ontouchmove = null, r = r.filter((function(t) {
                            return t.targetElement !== e
                        })), s && 0 === r.length && (document.removeEventListener("touchmove", h, o ? {
                            passive: !1
                        } : void 0), s = !1)
                    } else 1 === r.length && r[0].targetElement === e ? (u(), r = []) : r = r.filter((function(t) {
                        return t.targetElement !== e
                    }))
                }
            }, void 0 === (n = "function" == typeof o ? o.apply(t, i) : o) || (e.exports = n)
        },
        266783: e => {
            "use strict";
            var t = Object.prototype.hasOwnProperty;

            function o(e, t) {
                return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
            }
            e.exports = function(e, i) {
                if (o(e, i)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof i || null === i) return !1;
                var n = Object.keys(e),
                    r = Object.keys(i);
                if (n.length !== r.length) return !1;
                for (var s = 0; s < n.length; s++)
                    if (!t.call(i, n[s]) || !o(e[n[s]], i[n[s]])) return !1;
                return !0
            }
        },
        653351: e => {
            e.exports = {}
        },
        256337: e => {
            e.exports = {}
        },
        341869: e => {
            e.exports = {}
        },
        604920: e => {
            e.exports = {}
        },
        645469: e => {
            e.exports = {
                "tablet-normal-breakpoint": "screen and (max-width: 768px)",
                "small-height-breakpoint": "screen and (max-height: 360px)",
                "tablet-small-breakpoint": "screen and (max-width: 430px)"
            }
        },
        323021: e => {
            e.exports = {
                wrap: "wrap-ean7hSDH",
                icon: "icon-ean7hSDH",
                colorBg: "colorBg-ean7hSDH",
                color: "color-ean7hSDH",
                multicolor: "multicolor-ean7hSDH",
                white: "white-ean7hSDH"
            }
        },
        720695: e => {
            e.exports = {
                button: "button-_N8p4OlI"
            }
        },
        686405: e => {
            e.exports = {
                item: "item-Rhs937dU",
                withIcon: "withIcon-Rhs937dU",
                icon: "icon-Rhs937dU",
                labelRow: "labelRow-Rhs937dU",
                multiWidth: "multiWidth-Rhs937dU",
                buttonWrap: "buttonWrap-Rhs937dU",
                buttonLabel: "buttonLabel-Rhs937dU"
            }
        },
        380072: e => {
            e.exports = {
                container: "container-gKn55QI9",
                sectionTitle: "sectionTitle-gKn55QI9",
                separator: "separator-gKn55QI9",
                customButton: "customButton-gKn55QI9"
            }
        },
        266454: e => {
            e.exports = {
                container: "container-jgT5uU0F",
                form: "form-jgT5uU0F",
                swatch: "swatch-jgT5uU0F",
                inputWrap: "inputWrap-jgT5uU0F",
                inputHash: "inputHash-jgT5uU0F",
                input: "input-jgT5uU0F",
                buttonWrap: "buttonWrap-jgT5uU0F",
                hueSaturationWrap: "hueSaturationWrap-jgT5uU0F",
                saturation: "saturation-jgT5uU0F",
                hue: "hue-jgT5uU0F"
            }
        },
        592155: e => {
            e.exports = {
                hue: "hue-iMmREGnj",
                pointer: "pointer-iMmREGnj",
                pointerContainer: "pointerContainer-iMmREGnj"
            }
        },
        401034: e => {
            e.exports = {
                opacity: "opacity-uujjxY8O",
                opacitySlider: "opacitySlider-uujjxY8O",
                opacitySliderGradient: "opacitySliderGradient-uujjxY8O",
                pointer: "pointer-uujjxY8O",
                dragged: "dragged-uujjxY8O",
                opacityPointerWrap: "opacityPointerWrap-uujjxY8O",
                opacityInputWrap: "opacityInputWrap-uujjxY8O",
                opacityInput: "opacityInput-uujjxY8O",
                opacityInputPercent: "opacityInputPercent-uujjxY8O"
            }
        },
        153766: e => {
            e.exports = {
                saturation: "saturation-S_CtZIbU",
                pointer: "pointer-S_CtZIbU"
            }
        },
        361561: e => {
            e.exports = {
                swatches: "swatches-pNRFZrPx",
                swatch: "swatch-pNRFZrPx",
                hover: "hover-pNRFZrPx",
                empty: "empty-pNRFZrPx",
                white: "white-pNRFZrPx",
                selected: "selected-pNRFZrPx",
                contextItem: "contextItem-pNRFZrPx"
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
        481956: e => {
            e.exports = {
                separator: "separator-blm_vtaP"
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
        190948: e => {
            e.exports = {
                icon: "icon-XIHzWm6B",
                dropped: "dropped-XIHzWm6B"
            }
        },
        540975: (e, t, o) => {
            "use strict";
            o.d(t, {
                AnchorButton: () => h,
                Button: () => c
            });
            var i = o(50959),
                n = o(915812);

            function r(e = "default") {
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

            function a(e = "m") {
                switch (e) {
                    case "s":
                        return "xsmall";
                    case "m":
                        return "small";
                    case "l":
                        return "large"
                }
            }

            function l(e) {
                const {
                    intent: t,
                    size: o,
                    appearance: i,
                    useFullWidth: n,
                    icon: l,
                    ...c
                } = e;
                return { ...c,
                    color: s(t),
                    size: a(o),
                    variant: r(i),
                    stretch: n,
                    startIcon: l
                }
            }

            function c(e) {
                return i.createElement(n.SquareButton, { ...l(e)
                })
            }

            function d(e) {
                const {
                    intent: t,
                    size: o,
                    appearance: i,
                    useFullWidth: n,
                    icon: l,
                    ...c
                } = e;
                return { ...c,
                    color: s(t),
                    size: a(o),
                    variant: r(i),
                    stretch: n,
                    startIcon: l
                }
            }

            function h(e) {
                return i.createElement(n.SquareAnchorButton, { ...d(e)
                })
            }
        },
        746326: (e, t, o) => {
            "use strict";

            function i(e) {
                const {
                    paddingTop: t,
                    paddingBottom: o
                } = window.getComputedStyle(e);
                return [t, o].reduce(((e, t) => e - Number((t || "").replace("px", ""))), e.clientHeight)
            }

            function n(e, t = !1) {
                const o = getComputedStyle(e),
                    i = [o.height];
                return "border-box" !== o.boxSizing && i.push(o.paddingTop, o.paddingBottom, o.borderTopWidth, o.borderBottomWidth), t && i.push(o.marginTop, o.marginBottom), i.reduce(((e, t) => e + (parseFloat(t) || 0)), 0)
            }

            function r(e, t = !1) {
                const o = getComputedStyle(e),
                    i = [o.width];
                return "border-box" !== o.boxSizing && i.push(o.paddingLeft, o.paddingRight, o.borderLeftWidth, o.borderRightWidth), t && i.push(o.marginLeft, o.marginRight), i.reduce(((e, t) => e + (parseFloat(t) || 0)), 0)
            }
            o.d(t, {
                contentHeight: () => i,
                outerHeight: () => n,
                outerWidth: () => r
            })
        },
        510013: (e, t, o) => {
            "use strict";
            o.d(t, {
                ChunkLoader: () => n
            });
            var i = o(462282);
            class n {
                constructor() {
                    this._retries = 5, this._cache = null, this._tryLoad = (e, t) => {
                        this._retries = this._retries - 1;
                        this._startLoading(e).then(t, 0 !== this._retries ? o => {
                            (0, i.isAbortError)(o) || setTimeout((() => this._tryLoad(e, t)), 3e3)
                        } : void 0)
                    }
                }
                load(e) {
                    return this._cache || (this._cache = new Promise(this._tryLoad.bind(this, null != e ? e : null))), this._cache
                }
            }
        },
        404573: (e, t, o) => {
            "use strict";
            o.d(t, {
                Draggable: () => a,
                PointerBackend: () => l
            });
            var i = o(650151),
                n = o(318557),
                r = o(638456),
                s = o(778785);
            class a {
                constructor(e) {
                    var t, o;
                    this._helper = null, this._handleDragStart = e => {
                        var t;
                        if (null !== this._helper) return;
                        const o = this._source;
                        o.classList.add("ui-draggable-dragging");
                        const [i, r] = [(0, n.outerWidth)(o), (0, n.outerHeight)(o)];
                        this._helper = {
                            startTop: parseFloat(o.style.top) || 0,
                            startLeft: parseFloat(o.style.left) || 0,
                            nextTop: null,
                            nextLeft: null,
                            raf: null,
                            size: [i, r],
                            containment: this._containment instanceof HTMLElement ? [parseInt(getComputedStyle(this._containment).borderLeftWidth) + parseInt(getComputedStyle(this._containment).paddingLeft), parseInt(getComputedStyle(this._containment).borderTopWidth) + parseInt(getComputedStyle(this._containment).paddingTop), this._containment.offsetWidth - parseInt(getComputedStyle(this._containment).borderRightWidth) - parseInt(getComputedStyle(this._containment).paddingRight) - parseInt(getComputedStyle(o).marginLeft) - parseInt(getComputedStyle(o).marginRight) - i, this._containment.offsetHeight - parseInt(getComputedStyle(this._containment).borderBottomWidth) - parseInt(getComputedStyle(this._containment).paddingBottom) - parseInt(getComputedStyle(o).marginTop) - parseInt(getComputedStyle(o).marginBottom) - r] : "window" === this._containment ? [window.scrollX, window.scrollY, window.scrollX + document.documentElement.offsetWidth - i, window.scrollY + document.documentElement.offsetHeight - r] : null
                        }, null === (t = this._start) || void 0 === t || t.call(this)
                    }, this._handleDragMove = e => {
                        var t;
                        if (null === this._helper) return;
                        const {
                            current: o,
                            initial: i
                        } = e.detail, n = this._source, r = this._helper.nextTop, s = this._helper.nextLeft, a = "y" === this._axis || !1 === this._axis || 0 !== o.movementY;
                        if (a) {
                            const e = this._helper.startTop;
                            isFinite(e) && (this._helper.nextTop = o.clientY - i.clientY + e)
                        }
                        const l = "x" === this._axis || !1 === this._axis || 0 !== o.movementY;
                        if (l) {
                            const e = this._helper.startLeft;
                            isFinite(e) && (this._helper.nextLeft = o.clientX - i.clientX + e)
                        }
                        if (null !== this._helper.containment) {
                            const [e, t, o, i] = this._helper.containment;
                            a && this._helper.nextTop && (this._helper.nextTop = Math.min(this._helper.nextTop, i), this._helper.nextTop = Math.max(this._helper.nextTop, t)), l && this._helper.nextLeft && (this._helper.nextLeft = Math.min(this._helper.nextLeft, o), this._helper.nextLeft = Math.max(this._helper.nextLeft, e))
                        }
                        null !== this._helper.raf || r === this._helper.nextTop && s === this._helper.nextLeft || (this._helper.raf = requestAnimationFrame((() => {
                            null !== this._helper && (null !== this._helper.nextTop && (n.style.top = this._helper.nextTop + "px", this._helper.nextTop = null), null !== this._helper.nextLeft && (n.style.left = this._helper.nextLeft + "px", this._helper.nextLeft = null), this._helper.raf = null)
                        }))), null === (t = this._drag) || void 0 === t || t.call(this)
                    }, this._handleDragStop = e => {
                        var t;
                        if (null === this._helper) return;
                        this._source.classList.remove("ui-draggable-dragging"), this._helper = null, null === (t = this._stop) || void 0 === t || t.call(this)
                    };
                    const i = this._source = e.source;
                    i.classList.add("ui-draggable");
                    const r = this._handle = null !== (t = e.handle ? i.querySelector(e.handle) : null) && void 0 !== t ? t : i;
                    r.classList.add("ui-draggable-handle"), this._start = e.start, this._stop = e.stop, this._drag = e.drag, this._backend = new l({
                        handle: r,
                        onDragStart: this._handleDragStart,
                        onDragMove: this._handleDragMove,
                        onDragStop: this._handleDragStop
                    }), this._axis = null !== (o = e.axis) && void 0 !== o && o, this._containment = e.containment
                }
                destroy() {
                    const e = this._source;
                    e.classList.remove("ui-draggable"), e.classList.remove("ui-draggable-dragging");
                    this._handle.classList.remove("ui-draggable-handle"), this._backend.destroy(),
                        null !== this._helper && (this._helper.raf && cancelAnimationFrame(this._helper.raf), this._helper = null)
                }
            }
            class l {
                constructor(e) {
                    this._initial = null, this._handlePointerDown = e => {
                        if (null !== this._initial) return;
                        if (!(e.target instanceof Element && this._handle.contains(e.target))) return;
                        if (this._initial = e, !this._dispatchEvent(this._createEvent("pointer-drag-start", e))) return void(this._initial = null);
                        e.preventDefault();
                        const t = this._getEventTarget();
                        t.addEventListener("pointermove", this._handlePointerMove), t.addEventListener("pointerup", this._handlePointerUp), t.addEventListener("pointercancel", this._handlePointerUp), t.addEventListener("lostpointercapture", this._handlePointerUp), t.setPointerCapture(e.pointerId)
                    }, this._handlePointerMove = e => {
                        null !== this._initial && this._initial.pointerId === e.pointerId && (e.preventDefault(), this._dispatchEvent(this._createEvent("pointer-drag-move", e)))
                    }, this._handlePointerUp = e => {
                        if (null === this._initial || this._initial.pointerId !== e.pointerId) return;
                        e.preventDefault();
                        const t = this._getEventTarget();
                        t.removeEventListener("pointermove", this._handlePointerMove), t.removeEventListener("pointerup", this._handlePointerUp), t.removeEventListener("pointercancel", this._handlePointerUp), t.removeEventListener("lostpointercapture", this._handlePointerUp), t.releasePointerCapture(this._initial.pointerId), this._dispatchEvent(this._createEvent("pointer-drag-stop", e)), this._initial = null
                    };
                    const t = this._handle = e.handle;
                    this._onDragStart = e.onDragStart, this._onDragMove = e.onDragMove, this._onDragStop = e.onDragStop, t.style.touchAction = "none";
                    this._getEventTarget().addEventListener("pointerdown", this._handlePointerDown)
                }
                destroy() {
                    this._handle.style.touchAction = "";
                    const e = this._getEventTarget();
                    e.removeEventListener("pointerdown", this._handlePointerDown), e.removeEventListener("pointermove", this._handlePointerMove), e.removeEventListener("pointerup", this._handlePointerUp), e.removeEventListener("pointercancel", this._handlePointerUp), e.removeEventListener("lostpointercapture", this._handlePointerUp), null !== this._initial && (e.releasePointerCapture(this._initial.pointerId), this._initial = null)
                }
                _getEventTarget() {
                    return r.CheckMobile.iOS() || (0, r.isMac)() && s.touch ? window.document.documentElement : this._handle
                }
                _dispatchEvent(e) {
                    switch (e.type) {
                        case "pointer-drag-start":
                            this._onDragStart(e);
                            break;
                        case "pointer-drag-move":
                            this._onDragMove(e);
                            break;
                        case "pointer-drag-stop":
                            this._onDragStop(e)
                    }
                    return !e.defaultPrevented
                }
                _createEvent(e, t) {
                    return (0, i.assert)(null !== this._initial), new CustomEvent(e, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            backend: this,
                            initial: this._initial,
                            current: t
                        }
                    })
                }
            }
        },
        952456: (e, t, o) => {
            "use strict";
            o.d(t, {
                HammerJSLoader: () => n
            });
            var i = o(510013);
            class n extends i.ChunkLoader {
                _startLoading() {
                    return Promise.all([o.e(11553), o.e(42377)]).then(o.bind(o, 825806)).then((e => e.HammerJS))
                }
            }
        },
        318557: (e, t, o) => {
            "use strict";
            o.d(t, {
                contentHeight: () => n.contentHeight,
                outerHeight: () => n.outerHeight,
                outerWidth: () => n.outerWidth,
                unwrap: () => r,
                html: () => s,
                position: () => l
            });
            var i = o(650151),
                n = o(746326);

            function r(e) {
                return e[0]
            }

            function s(e, t) {
                return void 0 === t || (null === t && (e.innerHTML = ""), "string" != typeof t && "number" != typeof t || (e.innerHTML = String(t))), e
            }

            function a(e) {
                if (!e.getClientRects().length) return {
                    top: 0,
                    left: 0
                };
                const t = e.getBoundingClientRect(),
                    o = (0, i.ensureNotNull)(e.ownerDocument.defaultView);
                return {
                    top: t.top + o.pageYOffset,
                    left: t.left + o.pageXOffset
                }
            }

            function l(e) {
                const t = getComputedStyle(e);
                let o, i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === t.position) o = e.getBoundingClientRect();
                else {
                    o = a(e);
                    const t = e.ownerDocument;
                    let n = e.offsetParent || t.documentElement;
                    for (; n && (n === t.body || n === t.documentElement) && "static" === getComputedStyle(n).position;) n = n.parentElement;
                    n && n !== e && 1 === n.nodeType && (i = a(n), i.top += parseFloat(getComputedStyle(n).borderTopWidth), i.left += parseFloat(getComputedStyle(n).borderLeftWidth))
                }
                return {
                    top: o.top - i.top - parseFloat(t.marginTop),
                    left: o.left - i.left - parseFloat(t.marginLeft)
                }
            }
        },
        642709: (e, t, o) => {
            "use strict";
            o.d(t, {
                DialogBreakpoints: () => n
            });
            var i = o(645469);
            const n = {
                SmallHeight: i["small-height-breakpoint"],
                TabletSmall: i["tablet-small-breakpoint"],
                TabletNormal: i["tablet-normal-breakpoint"]
            }
        },
        638745: (e, t, o) => {
            "use strict";
            o.d(t, {
                ColorPickerButton: () => _
            });
            var i = o(50959),
                n = o(497754),
                r = o.n(n),
                s = o(650151),
                a = o(83436),
                l = o(724377),
                c = o(114123),
                d = o(311155),
                h = o(770819),
                u = o(354543),
                p = o(575296),
                m = o(68077),
                g = o(323021);

            function _(e) {
                const {
                    property: t,
                    icon: o,
                    propertyApplier: n,
                    title: _,
                    undoText: v,
                    className: f
                } = e, w = (0, m.useProperty)(t), b = (0, i.useRef)(null), y = w ? (0, l.parseRgba)(w)[3] : void 0, C = "" === w, T = String(P()).toLowerCase() === u.white, [E, x, S] = (0, d.useCustomColors)();
                return i.createElement(p.ToolWidgetMenu, {
                    className: f,
                    content: i.createElement("div", {
                        className: g.wrap
                    }, i.createElement(a.Icon, {
                        className: g.icon,
                        icon: o
                    }), i.createElement("div", {
                        className: g.colorBg
                    }, i.createElement("div", {
                        className: r()(g.color, C && g.multicolor, T && g.white),
                        style: C ? void 0 : {
                            backgroundColor: w
                        }
                    }))),
                    arrow: !1,
                    title: _,
                    ref: b,
                    "data-name": e["data-name"],
                    menuDataName: `${e["data-name"]}-menu`
                }, i.createElement(h.ColorPicker, {
                    color: P(),
                    opacity: y,
                    onColorChange: function(e, t) {
                        const o = w ? (0, c.alphaToTransparency)((0, l.parseRgba)(w)[3]) : 0;
                        L((0, c.generateColor)(String(e), o, true)), t || (0, s.ensureNotNull)(b.current).close()
                    },
                    onOpacityChange: function(e) {
                        L((0, c.generateColor)(w, (0, c.alphaToTransparency)(e), !0))
                    },
                    selectOpacity: void 0 !== y,
                    selectCustom: !0,
                    customColors: E,
                    onAddColor: function(e) {
                        x(e), (0, s.ensureNotNull)(b.current).close()
                    },
                    onRemoveCustomColor: S
                }));

                function P() {
                    return w ? (0, l.rgbToHexString)((0, l.parseRgb)(w)) : null
                }

                function L(e) {
                    n.setProperty(t, e, v)
                }
            }
        },
        212259: (e, t, o) => {
            "use strict";
            o.d(t, {
                LineWidthButton: () => w
            });
            var i = o(50959),
                n = o(497754),
                r = o(650151),
                s = o(83436),
                a = o(575296),
                l = o(68077),
                c = o(634993),
                d = o(995683),
                h = o(222978),
                u = o(114631),
                p = o(206096),
                m = o(206483),
                g = o(266611),
                _ = o(686405);
            const v = (0, d.mergeThemes)(c.DEFAULT_POPUP_MENU_ITEM_THEME, _),
                f = [{
                    value: 1,
                    icon: h
                }, {
                    value: 2,
                    icon: u
                }, {
                    value: 3,
                    icon: p
                }, {
                    value: 4,
                    icon: m
                }];

            function w(e) {
                const {
                    multipleProperty: t,
                    title: o,
                    undoText: d,
                    propertyApplier: h,
                    className: u,
                    isSmallScreen: p
                } = e, m = (0, l.useProperty)((0, r.ensureDefined)(t)), w = "mixed" === m || !m, b = function(e) {
                    const t = f.find((t => t.value === e));
                    if (!t) return g;
                    return t.icon
                }(m);
                return i.createElement(a.ToolWidgetMenu, {
                    className: u,
                    arrow: !1,
                    title: o,
                    "data-name": e["data-name"],
                    menuDataName: `${e["data-name"]}-menu`,
                    content: i.createElement("div", null, w ? i.createElement("div", {
                        className: _.multiWidth
                    }, i.createElement(s.Icon, {
                        icon: g
                    })) : i.createElement("div", {
                        className: _.buttonWrap
                    }, !p && i.createElement(s.Icon, {
                        icon: b
                    }), i.createElement("div", {
                        className: n(!p && _.buttonLabel)
                    }, `${m}px`)))
                }, f.map((({
                    value: e,
                    icon: t
                }) => i.createElement(c.PopupMenuItem, {
                    key: e,
                    theme: v,
                    label: `${e}px`,
                    icon: t,
                    isActive: e === m,
                    onClick: y,
                    onClickArg: e
                }))));

                function y(e) {
                    e && t && (h.beginUndoMacro(d), t.setValue(e, void 0, {
                        applyValue: (e, t) => {
                            h.setProperty(e, t, d)
                        }
                    }), h.endUndoMacro())
                }
            }
        },
        68077: (e, t, o) => {
            "use strict";
            o.d(t, {
                useProperty: () => n
            });
            var i = o(50959);
            const n = e => {
                const [t, o] = (0, i.useState)(e.value());
                return (0, i.useEffect)((() => {
                    const t = e => {
                        o(e.value())
                    };
                    t(e);
                    const i = {};
                    return e.subscribe(i, t), () => e.unsubscribe(i, t)
                }), [e]), t
            }
        },
        920389: (e, t, o) => {
            "use strict";
            o.d(t, {
                runOrSignIn: () => n
            });
            const i = o(495046).enabled("widget");

            function n(e, t) {
                i ? e() : window.runOrSignIn(e, t)
            }
        },
        770819: (e, t, o) => {
            "use strict";
            o.d(t, {
                ColorPicker: () => M
            });
            var i = o(50959),
                n = o(497754),
                r = o.n(n),
                s = o(777754),
                a = o(724377),
                l = o(650151),
                c = o(638456),
                d = o(45968),
                h = o(634993);
            const u = i.createContext(void 0);
            var p = o(354543),
                m = o(535149),
                g = o(361561);

            function _(e) {
                const {
                    index: t,
                    color: r,
                    selected: a,
                    onSelect: _
                } = e, [v, f] = (0, i.useState)(!1), w = (0, i.useContext)(u), b = (0, i.useRef)(null), y = Boolean(w) && !c.CheckMobile.any();
                return i.createElement(i.Fragment, null, i.createElement("div", {
                    ref: b,
                    style: r ? {
                        color: r
                    } : void 0,
                    className: n(g.swatch, v && g.hover, a && g.selected, !r && g.empty, String(r).toLowerCase() === p.white && g.white),
                    onClick: function() {
                        _(r)
                    },
                    onContextMenu: y ? C : void 0
                }), y && i.createElement(d.PopupMenu, {
                    isOpened: v,
                    onClose: C,
                    position: function() {
                        const e = (0, l.ensureNotNull)(b.current).getBoundingClientRect();
                        return {
                            x: e.left,
                            y: e.top + e.height + 4
                        }
                    },
                    onClickOutside: C
                }, i.createElement(h.PopupMenuItem, {
                    className: g.contextItem,
                    label: s.t(null, void 0, o(854336)),
                    icon: m,
                    onClick: function() {
                        C(), (0, l.ensureDefined)(w)(t)
                    },
                    dontClosePopup: !0
                })));

                function C() {
                    f(!v)
                }
            }
            class v extends i.PureComponent {
                constructor() {
                    super(...arguments), this._onSelect = e => {
                        const {
                            onSelect: t
                        } = this.props;
                        t && t(e)
                    }
                }
                render() {
                    const {
                        colors: e,
                        color: t,
                        children: o
                    } = this.props;
                    if (!e) return null;
                    const n = t ? (0, a.parseRgb)(String(t)) : void 0;
                    return i.createElement("div", {
                        className: g.swatches
                    }, e.map(((e, t) => i.createElement(_, {
                        key: String(e) + t,
                        index: t,
                        color: e,
                        selected: n && (0, a.areEqualRgb)(n, (0, a.parseRgb)(String(e))),
                        onSelect: this._onSelect
                    }))), o)
                }
            }
            var f = o(429163),
                w = o(540975);

            function b(e) {
                const t = `Invalid RGB color: ${e}`;
                if (null === e) throw new Error(t);
                const o = e.match(/^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i);
                if (null === o) throw new Error(t);
                const [, i, n, r] = o;
                if (!i || !n || !r) throw new Error(t);
                const s = parseInt(i, 16) / 255,
                    a = parseInt(n, 16) / 255,
                    l = parseInt(r, 16) / 255,
                    c = Math.max(s, a, l),
                    d = Math.min(s, a, l);
                let h;
                const u = c,
                    p = c - d,
                    m = 0 === c ? 0 : p / c;
                if (c === d) h = 0;
                else {
                    switch (c) {
                        case s:
                            h = (a - l) / p + (a < l ? 6 : 0);
                            break;
                        case a:
                            h = (l - s) / p + 2;
                            break;
                        case l:
                            h = (s - a) / p + 4;
                            break;
                        default:
                            h = 0
                    }
                    h /= 6
                }
                return {
                    h,
                    s: m,
                    v: u
                }
            }
            var y = o(343370),
                C = o(153766);
            class T extends i.PureComponent {
                constructor() {
                    super(...arguments), this._container = null, this._refContainer = e => {
                        this._container = e
                    }, this._handlePosition = e => {
                        const {
                            hsv: {
                                h: t
                            },
                            onChange: o
                        } = this.props;
                        if (!o) return;
                        const i = (0, l.ensureNotNull)(this._container).getBoundingClientRect(),
                            n = e.clientX - i.left,
                            r = e.clientY - i.top;
                        let s = n / i.width;
                        s < 0 ? s = 0 : s > 1 && (s = 1);
                        let a = 1 - r / i.height;
                        a < 0 ? a = 0 : a > 1 && (a = 1), o({
                            h: t,
                            s,
                            v: a
                        })
                    }, this._mouseDown = e => {
                        window.addEventListener("mouseup", this._mouseUp), window.addEventListener("mousemove", this._mouseMove)
                    }, this._mouseUp = e => {
                        window.removeEventListener("mousemove", this._mouseMove), window.removeEventListener("mouseup", this._mouseUp), this._handlePosition(e)
                    }, this._mouseMove = (0, y.default)(this._handlePosition, 100), this._handleTouch = e => {
                        this._handlePosition(e.nativeEvent.touches[0])
                    }
                }
                render() {
                    const {
                        className: e,
                        hsv: {
                            h: t,
                            s: o,
                            v: n
                        }
                    } = this.props, s = `hsl(${360*t}, 100%, 50%)`;
                    return i.createElement("div", {
                        className: r()(C.saturation, e),
                        style: {
                            backgroundColor: s
                        },
                        ref: this._refContainer,
                        onMouseDown: this._mouseDown,
                        onTouchStart: this._handleTouch,
                        onTouchMove: this._handleTouch
                    }, i.createElement("div", {
                        className: C.pointer,
                        style: {
                            left: 100 * o + "%",
                            top: 100 * (1 - n) + "%"
                        }
                    }))
                }
            }
            var E = o(592155);
            class x extends i.PureComponent {
                constructor() {
                    super(...arguments), this._container = null, this._refContainer = e => {
                        this._container = e
                    }, this._handlePosition = e => {
                        const {
                            hsv: {
                                s: t,
                                v: o
                            },
                            onChange: i
                        } = this.props;
                        if (!i) return;
                        const n = (0, l.ensureNotNull)(this._container).getBoundingClientRect();
                        let r = (e.clientY - n.top) / n.height;
                        r < 0 ? r = 0 : r > 1 && (r = 1), i({
                            h: r,
                            s: t,
                            v: o
                        })
                    }, this._mouseDown = e => {
                        window.addEventListener("mouseup", this._mouseUp), window.addEventListener("mousemove", this._mouseMove)
                    }, this._mouseUp = e => {
                        window.removeEventListener("mousemove", this._mouseMove), window.removeEventListener("mouseup", this._mouseUp), this._handlePosition(e)
                    }, this._mouseMove = (0, y.default)(this._handlePosition, 100), this._handleTouch = e => {
                        this._handlePosition(e.nativeEvent.touches[0])
                    }
                }
                render() {
                    const {
                        className: e,
                        hsv: {
                            h: t
                        }
                    } = this.props;
                    return i.createElement("div", {
                        className: r()(E.hue, e)
                    }, i.createElement("div", {
                        className: E.pointerContainer,
                        ref: this._refContainer,
                        onMouseDown: this._mouseDown,
                        onTouchStart: this._handleTouch,
                        onTouchMove: this._handleTouch
                    }, i.createElement("div", {
                        className: E.pointer,
                        style: {
                            top: 100 * t + "%"
                        }
                    })))
                }
            }
            var S = o(266454);
            const P = "#000000",
                L = s.t(null, {
                    context: "Color Picker"
                }, o(340276));
            class W extends i.PureComponent {
                constructor(e) {
                    super(e), this._handleHSV = e => {
                        const t = function(e) {
                            const {
                                h: t,
                                s: o,
                                v: i
                            } = e;
                            let n, r, s;
                            const a = Math.floor(6 * t),
                                l = 6 * t - a,
                                c = i * (1 - o),
                                d = i * (1 - l * o),
                                h = i * (1 - (1 - l) * o);
                            switch (a % 6) {
                                case 0:
                                    n = i, r = h, s = c;
                                    break;
                                case 1:
                                    n = d, r = i, s = c;
                                    break;
                                case 2:
                                    n = c, r = i, s = h;
                                    break;
                                case 3:
                                    n = c, r = d, s = i;
                                    break;
                                case 4:
                                    n = h, r = c, s = i;
                                    break;
                                case 5:
                                    n = i, r = c, s = d;
                                    break;
                                default:
                                    n = 0, r = 0, s = 0
                            }
                            return "#" + [255 * n, 255 * r, 255 * s].map((e => ("0" + Math.round(e).toString(16)).replace(/.+?([a-f0-9]{2})$/i, "$1"))).join("")
                        }(e) || P;
                        this.setState({
                            color: t,
                            inputColor: t.replace(/^#/, ""),
                            hsv: e
                        }), this.props.onSelect(t)
                    }, this._handleInput = e => {
                        const t = e.currentTarget.value;
                        try {
                            const e = b(t),
                                o = `#${t}`;
                            this.setState({
                                color: o,
                                inputColor: t,
                                hsv: e
                            }), this.props.onSelect(o)
                        } catch (e) {
                            this.setState({
                                inputColor: t
                            })
                        }
                    }, this._handleAddColor = () => this.props.onAdd(this.state.color);
                    const t = e.color || P;
                    this.state = {
                        color: t,
                        inputColor: t.replace(/^#/, ""),
                        hsv: b(t)
                    }
                }
                render() {
                    const {
                        color: e,
                        hsv: t,
                        inputColor: o
                    } = this.state;
                    return i.createElement("div", {
                        className: S.container
                    }, i.createElement("div", {
                        className: S.form
                    }, i.createElement("div", {
                        className: S.swatch,
                        style: {
                            backgroundColor: e
                        }
                    }), i.createElement("div", {
                        className: S.inputWrap
                    }, i.createElement("span", {
                        className: S.inputHash
                    }, "#"), i.createElement("input", {
                        type: "text",
                        className: S.input,
                        value: o,
                        onChange: this._handleInput
                    })), i.createElement("div", {
                        className: S.buttonWrap
                    }, i.createElement(w.Button, {
                        size: "s",
                        onClick: this._handleAddColor
                    }, L))), i.createElement("div", {
                        className: S.hueSaturationWrap
                    }, i.createElement(T, {
                        className: S.saturation,
                        hsv: t,
                        onChange: this._handleHSV
                    }), i.createElement(x, {
                        className: S.hue,
                        hsv: t,
                        onChange: this._handleHSV
                    })))
                }
            }
            var k = o(380072);
            const B = s.t(null, {
                    context: "Color Picker"
                }, o(453585)),
                N = s.t(null, {
                    context: "Color Picker"
                }, o(681865));
            class M extends i.PureComponent {
                constructor(e) {
                    super(e), this._handleAddColor = e => {
                        this.setState({
                            isCustom: !1
                        }), this._onToggleCustom(!1);
                        const {
                            onAddColor: t
                        } = this.props;
                        t && t(e)
                    }, this._handleSelectColor = e => {
                        const {
                            onColorChange: t
                        } = this.props, {
                            isCustom: o
                        } = this.state;
                        t && t(e, o)
                    }, this._handleCustomClick = () => {
                        this.setState({
                            isCustom: !0
                        }), this._onToggleCustom(!0)
                    }, this._handleOpacity = e => {
                        const {
                            onOpacityChange: t
                        } = this.props;
                        t && t(e)
                    }, this.state = {
                        isCustom: !1
                    }
                }
                componentDidUpdate(e, t) {
                    e.selectOpacity !== this.props.selectOpacity && this.props.menu && this.props.menu.update()
                }
                render() {
                    const {
                        color: e,
                        opacity: t,
                        selectCustom: o,
                        selectOpacity: n,
                        customColors: s,
                        onRemoveCustomColor: a
                    } = this.props, {
                        isCustom: l
                    } = this.state, c = "number" == typeof t ? t : 1;
                    return l ? i.createElement(W, {
                        color: e,
                        onSelect: this._handleSelectColor,
                        onAdd: this._handleAddColor
                    }) : i.createElement("div", {
                        className: k.container
                    }, i.createElement(v, {
                        colors: p.basic,
                        color: e,
                        onSelect: this._handleSelectColor
                    }), i.createElement(v, {
                        colors: p.extended,
                        color: e,
                        onSelect: this._handleSelectColor
                    }), i.createElement("div", {
                        className: k.separator
                    }), i.createElement(u.Provider, {
                        value: a
                    }, i.createElement(v, {
                        colors: s,
                        color: e,
                        onSelect: this._handleSelectColor
                    }, o && i.createElement("div", {
                        className: r()(k.customButton, "apply-common-tooltip"),
                        onClick: this._handleCustomClick,
                        title: B
                    }))), n && i.createElement(i.Fragment, null, i.createElement("div", {
                        className: k.sectionTitle
                    }, N), i.createElement(f.Opacity, {
                        color: e,
                        opacity: c,
                        onChange: this._handleOpacity
                    })))
                }
                _onToggleCustom(e) {
                    const {
                        onToggleCustom: t
                    } = this.props;
                    t && t(e)
                }
            }
        },
        429163: (e, t, o) => {
            "use strict";
            o.d(t, {
                Opacity: () => l
            });
            var i = o(50959),
                n = o(497754),
                r = o(650151),
                s = o(43329),
                a = o(401034);
            class l extends i.PureComponent {
                constructor(e) {
                    super(e), this._container = null, this._pointer = null, this._raf = null, this._refContainer = e => {
                        this._container = e
                    }, this._refPointer = e => {
                        this._pointer = e
                    }, this._handlePosition = e => {
                        null === this._raf && (this._raf = requestAnimationFrame((() => {
                            const t = (0, r.ensureNotNull)(this._container),
                                o = (0, r.ensureNotNull)(this._pointer),
                                i = t.getBoundingClientRect(),
                                n = o.offsetWidth,
                                a = e.clientX - n / 2 - i.left,
                                l = (0, s.clamp)(a / (i.width - n), 0, 1);
                            this.setState({
                                inputOpacity: Math.round(100 * l).toString()
                            }), this.props.onChange(l), this._raf = null
                        })))
                    }, this._onSliderClick = e => {
                        this._handlePosition(e.nativeEvent), this._dragSubscribe()
                    }, this._mouseUp = e => {
                        this.setState({
                            isPointerDragged: !1
                        }), this._dragUnsubscribe(), this._handlePosition(e)
                    }, this._mouseMove = e => {
                        this.setState({
                            isPointerDragged: !0
                        }), this._handlePosition(e)
                    }, this._onTouchStart = e => {
                        this._handlePosition(e.nativeEvent.touches[0])
                    }, this._handleTouch = e => {
                        this.setState({
                            isPointerDragged: !0
                        }), this._handlePosition(e.nativeEvent.touches[0])
                    }, this._handleTouchEnd = () => {
                        this.setState({
                            isPointerDragged: !1
                        })
                    }, this._handleInput = e => {
                        const t = e.currentTarget.value,
                            o = Number(t) / 100;
                        this.setState({
                            inputOpacity: t
                        }), Number.isNaN(o) || o > 1 || this.props.onChange(o)
                    }, this.state = {
                        inputOpacity: Math.round(100 * e.opacity).toString(),
                        isPointerDragged: !1
                    }
                }
                componentWillUnmount() {
                    null !== this._raf && (cancelAnimationFrame(this._raf), this._raf = null), this._dragUnsubscribe()
                }
                render() {
                    const {
                        color: e,
                        opacity: t,
                        hideInput: o
                    } = this.props, {
                        inputOpacity: r,
                        isPointerDragged: s
                    } = this.state, l = {
                        color: e || void 0
                    };
                    return i.createElement("div", {
                        className: a.opacity
                    }, i.createElement("div", {
                        className: a.opacitySlider,
                        style: l,
                        ref: this._refContainer,
                        onMouseDown: this._onSliderClick,
                        onTouchStart: this._onTouchStart,
                        onTouchMove: this._handleTouch,
                        onTouchEnd: this._handleTouchEnd
                    }, i.createElement("div", {
                        className: a.opacitySliderGradient,
                        style: {
                            backgroundImage: `linear-gradient(90deg, transparent, ${e})`
                        }
                    }), i.createElement("div", {
                        className: a.opacityPointerWrap
                    }, i.createElement("div", {
                        className: n(a.pointer, s && a.dragged),
                        style: {
                            left: 100 * t + "%"
                        },
                        ref: this._refPointer
                    }))), !o && i.createElement("div", {
                        className: a.opacityInputWrap
                    }, i.createElement("input", {
                        type: "text",
                        className: a.opacityInput,
                        value: r,
                        onChange: this._handleInput
                    }), i.createElement("span", {
                        className: a.opacityInputPercent
                    }, "%")))
                }
                _dragSubscribe() {
                    const e = (0, r.ensureNotNull)(this._container).ownerDocument;
                    e && (e.addEventListener("mouseup", this._mouseUp), e.addEventListener("mousemove", this._mouseMove))
                }
                _dragUnsubscribe() {
                    const e = (0, r.ensureNotNull)(this._container).ownerDocument;
                    e && (e.removeEventListener("mousemove", this._mouseMove), e.removeEventListener("mouseup", this._mouseUp))
                }
            }
        },
        354543: (e, t, o) => {
            "use strict";
            o.d(t, {
                white: () => n,
                basic: () => a,
                extended: () => c
            });
            var i = o(314967);
            const n = i.colorsPalette["color-white"],
                r = ["ripe-red", "tan-orange", "banana-yellow", "iguana-green", "minty-green", "sky-blue", "tv-blue", "deep-blue", "grapes-purple", "berry-pink"],
                s = [200, 300, 400, 500, 600, 700, 800, 900].map((e => `color-cold-gray-${e}`));
            s.unshift("color-white"), s.push("color-black"), r.forEach((e => {
                s.push(`color-${e}-500`)
            }));
            const a = s.map((e => i.colorsPalette[e])),
                l = [];
            [100, 200, 300, 400, 700, 900].forEach((e => {
                r.forEach((t => {
                    l.push(`color-${t}-${e}`)
                }))
            }));
            const c = l.map((e => i.colorsPalette[e]))
        },
        948019: (e, t, o) => {
            "use strict";
            o.d(t, {
                ContextMenuContext: () => i
            });
            const i = o(50959).createContext(null)
        },
        582997: (e, t, o) => {
            "use strict";
            o.d(t, {
                Hint: () => a
            });
            var i = o(50959),
                n = o(497754),
                r = o.n(n),
                s = o(768550);

            function a(e) {
                const {
                    text: t = "",
                    className: o
                } = e;
                return i.createElement("span", {
                    className: r()(s.shortcut, o)
                }, t)
            }
        },
        886004: (e, t, o) => {
            "use strict";
            o.d(t, {
                ContextMenuItem: () => m
            });
            var i = o(50959),
                n = o(497754),
                r = o.n(n),
                s = o(83436),
                a = o(612247),
                l = o(302478),
                c = o(582997),
                d = o(339750),
                h = o(379978),
                u = o(69311),
                p = o(503651);

            function m(e) {
                const {
                    isTitle: t,
                    isLoading: o,
                    isHovered: n,
                    active: m,
                    checkable: g,
                    disabled: _,
                    checked: v,
                    icon: f,
                    iconChecked: w,
                    hint: b,
                    subItems: y,
                    label: C,
                    onClick: T,
                    children: E,
                    toolbox: x,
                    jsxLabel: S,
                    size: P = "normal"
                } = e, L = (0, i.useContext)(l.EmptyIconsContext), W = !!y.length;
                return o ? i.createElement("li", {
                    className: r()(p.item, p.loading, p[P])
                }, i.createElement(a.Loader, null)) : i.createElement("li", {
                    className: r()(p.item, p.interactive, t && p.title, _ && p.disabled, n && p.hovered, m && p.active, L && p.emptyIcons, p[P]),
                    onClick: T
                }, i.createElement(s.Icon, {
                    className: r()(p.icon),
                    icon: function() {
                        if (g && v) return w || f || d;
                        return f
                    }()
                }), i.createElement("span", {
                    className: r()(p.label)
                }, null != S ? S : C), !!x && i.createElement(s.Icon, {
                    onClick: function() {
                        x && x.action()
                    },
                    className: p.remove,
                    icon: u
                }), !W && b && i.createElement(c.Hint, {
                    className: p.shortcut,
                    text: b
                }), W && i.createElement(s.Icon, {
                    className: p.nested,
                    icon: h
                }), E)
            }
        },
        67812: (e, t, o) => {
            "use strict";
            o.d(t, {
                ContextMenuList: () => u
            });
            var i = o(50959),
                n = o(481956);

            function r(e) {
                return i.createElement("li", {
                    className: n.separator
                })
            }
            var s = o(886004),
                a = o(762852),
                l = o(224743);

            function c(e) {
                const {
                    action: t
                } = e, [o, n] = (0, i.useState)((() => t.getState())), [r, c] = (0, i.useState)(!1), d = !!o.subItems.length, h = d && r;
                return (0, i.useEffect)((() => {
                    const e = () => n(t.getState());
                    return t.onUpdate().subscribe(null, e), () => {
                        t.onUpdate().unsubscribe(null, e)
                    }
                }), []), i.createElement(s.ContextMenuItem, { ...o,
                    onClick: function(e) {
                        if (o.disabled || e.defaultPrevented) return;
                        if (d) return void c(!0);
                        o.doNotCloseOnClick || (0, l.globalCloseMenu)();
                        t.execute()
                    },
                    isLoading: o.loading,
                    isHovered: h
                }, h && i.createElement(a.Drawer, {
                    onClose: p
                }, i.createElement(u, {
                    items: o.subItems,
                    parentAction: t,
                    closeNested: p
                })));

                function p(e) {
                    e && e.preventDefault(), c(!1)
                }
            }
            var d = o(302478),
                h = o(366493);

            function u(e) {
                const {
                    items: t,
                    parentAction: o,
                    closeNested: n
                } = e, a = !Boolean(o) && t.every((e => !Boolean("separator" !== e.type && (e.getState().icon || e.getState().checkable))));
                return i.createElement(d.EmptyIconsContext.Provider, {
                    value: a
                }, i.createElement("ul", null, o && i.createElement(i.Fragment, null, i.createElement(s.ContextMenuItem, {
                    label: o.getState().label,
                    isTitle: !0,
                    active: !1,
                    disabled: !1,
                    subItems: [],
                    checkable: !1,
                    checked: !1,
                    doNotCloseOnClick: !1,
                    icon: h,
                    onClick: n
                }), i.createElement(r, null)), t.map((e => {
                    switch (e.type) {
                        case "action":
                            return i.createElement(c, {
                                key: e.id,
                                action: e
                            });
                        case "separator":
                            return i.createElement(r, {
                                key: e.id
                            })
                    }
                }))))
            }
        },
        302478: (e, t, o) => {
            "use strict";
            o.d(t, {
                EmptyIconsContext: () => i
            });
            const i = o(50959).createContext(!1)
        },
        332585: (e, t, o) => {
            "use strict";
            o.d(t, {
                DrawerManager: () => r,
                DrawerContext: () => s
            });
            var i = o(50959),
                n = o(575658);
            class r extends i.PureComponent {
                constructor(e) {
                    super(e),
                        this._isBodyFixed = !1, this._addDrawer = e => {
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
                    !t.stack.length && this.state.stack.length && ((0, n.setFixedBodyState)(!0), this._isBodyFixed = !0), t.stack.length && !this.state.stack.length && this._isBodyFixed && ((0, n.setFixedBodyState)(!1), this._isBodyFixed = !1)
                }
                componentWillUnmount() {
                    this.state.stack.length && this._isBodyFixed && (0, n.setFixedBodyState)(!1)
                }
                render() {
                    return i.createElement(s.Provider, {
                        value: {
                            addDrawer: this._addDrawer,
                            removeDrawer: this._removeDrawer,
                            currentDrawer: this.state.stack.length ? this.state.stack[this.state.stack.length - 1] : null
                        }
                    }, this.props.children)
                }
            }
            const s = i.createContext(null)
        },
        762852: (e, t, o) => {
            "use strict";
            o.d(t, {
                Drawer: () => u
            });
            var i = o(50959),
                n = o(650151),
                r = o(497754),
                s = o(777491),
                a = o(707533),
                l = o(332585),
                c = o(320116),
                d = o(150881),
                h = o(945966);

            function u(e) {
                const {
                    position: t = "Bottom",
                    onClose: o,
                    children: u,
                    className: p,
                    theme: m = h
                } = e, g = (0, n.ensureNotNull)((0, i.useContext)(l.DrawerContext)), [_] = (0, i.useState)((() => (0, s.randomHash)())), v = (0, i.useRef)(null), f = (0, i.useContext)(c.CloseDelegateContext);
                return (0, i.useLayoutEffect)((() => ((0, n.ensureNotNull)(v.current).focus({
                    preventScroll: !0
                }), f.subscribe(g, o), g.addDrawer(_), () => {
                    g.removeDrawer(_), f.unsubscribe(g, o)
                })), []), i.createElement(a.Portal, null, i.createElement("div", {
                    className: r(h.wrap, h[`position${t}`])
                }, _ === g.currentDrawer && i.createElement("div", {
                    className: h.backdrop,
                    onClick: o
                }), i.createElement(d.TouchScrollContainer, {
                    className: r(h.drawer, m.drawer, h[`position${t}`], p),
                    tabIndex: -1,
                    ref: v,
                    "data-name": e["data-name"]
                }, u)))
            }
        },
        311155: (e, t, o) => {
            "use strict";
            o.d(t, {
                useCustomColors: () => l
            });
            var i = o(50959),
                n = o(62802),
                r = o(251954);

            function s(e, t) {
                (0, i.useEffect)((() => (r.subscribe(e, t, null), () => {
                    r.unsubscribe(e, t, null)
                })), [e, t])
            }
            var a = o(724377);

            function l() {
                const [e, t] = (0, i.useState)((0, n.getJSON)("pickerCustomColors", []));
                s("add_new_custom_color", (o => t(c(o, e)))), s("remove_custom_color", (o => t(d(o, e))));
                const o = (0, i.useCallback)((t => {
                        const o = t ? (0, a.parseRgb)(t) : null;
                        e.some((e => null !== e && null !== o && (0, a.areEqualRgb)((0, a.parseRgb)(e), o))) || (r.emit("add_new_custom_color", t), (0, n.setJSON)("pickerCustomColors", c(t, e)))
                    }), [e]),
                    l = (0, i.useCallback)((t => {
                        (t >= 0 || t < e.length) && (r.emit("remove_custom_color", t), (0, n.setJSON)("pickerCustomColors", d(t, e)))
                    }), [e]);
                return [e, o, l]
            }

            function c(e, t) {
                const o = t.slice();
                return o.push(e), o.length > 29 && o.shift(), o
            }

            function d(e, t) {
                return t.filter(((t, o) => e !== o))
            }
        },
        631078: (e, t, o) => {
            "use strict";
            o.d(t, {
                useWatchedValueReadonly: () => n
            });
            var i = o(50959);
            const n = (e, t = !1) => {
                const o = "watchedValue" in e ? e.watchedValue : void 0,
                    n = "defaultValue" in e ? e.defaultValue : e.watchedValue.value(),
                    [r, s] = (0, i.useState)(o ? o.value() : n);
                return (t ? i.useLayoutEffect : i.useEffect)((() => {
                    if (o) {
                        s(o.value());
                        const e = e => s(e);
                        return o.subscribe(e), () => o.unsubscribe(e)
                    }
                    return () => {}
                }), [o]), r
            }
        },
        157773: (e, t, o) => {
            "use strict";
            o.d(t, {
                MatchMediaMap: () => s
            });
            var i = o(50959),
                n = o(266783),
                r = o.n(n);
            class s extends i.Component {
                constructor(e) {
                    super(e),
                        this._handleMediaChange = () => {
                            const e = l(this.state.queries, ((e, t) => t.matches));
                            let t = !1;
                            for (const o in e)
                                if (e.hasOwnProperty(o) && this.state.matches[o] !== e[o]) {
                                    t = !0;
                                    break
                                }
                            t && this.setState({
                                matches: e
                            })
                        };
                    const {
                        rules: t
                    } = this.props;
                    this.state = a(t)
                }
                shouldComponentUpdate(e, t) {
                    return !r()(e, this.props) || (!r()(t.rules, this.state.rules) || !r()(t.matches, this.state.matches))
                }
                componentDidMount() {
                    this._migrate(null, this.state.queries)
                }
                componentDidUpdate(e, t) {
                    r()(e.rules, this.props.rules) || this._migrate(t.queries, this.state.queries)
                }
                componentWillUnmount() {
                    this._migrate(this.state.queries, null)
                }
                render() {
                    return this.props.children(this.state.matches)
                }
                static getDerivedStateFromProps(e, t) {
                    if (r()(e.rules, t.rules)) return null;
                    const {
                        rules: o
                    } = e;
                    return a(o)
                }
                _migrate(e, t) {
                    null !== e && l(e, ((e, t) => {
                        t.removeListener(this._handleMediaChange)
                    })), null !== t && l(t, ((e, t) => {
                        t.addListener(this._handleMediaChange)
                    }))
                }
            }

            function a(e) {
                const t = l(e, ((e, t) => window.matchMedia(t)));
                return {
                    queries: t,
                    matches: l(t, ((e, t) => t.matches)),
                    rules: { ...e
                    }
                }
            }

            function l(e, t) {
                const o = {};
                for (const i in e) e.hasOwnProperty(i) && (o[i] = t(i, e[i]));
                return o
            }
        },
        18182: (e, t, o) => {
            "use strict";
            o.d(t, {
                MatchMedia: () => n
            });
            var i = o(50959);
            class n extends i.PureComponent {
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
        157490: (e, t, o) => {
            "use strict";
            o.d(t, {
                OutsideEvent: () => n
            });
            var i = o(951292);

            function n(e) {
                const {
                    children: t,
                    ...o
                } = e;
                return t((0, i.useOutsideEvent)(o))
            }
        },
        368337: (e, t, o) => {
            "use strict";
            o.d(t, {
                makeOverlapable: () => r
            });
            var i = o(50959),
                n = o(707533);

            function r(e) {
                return class extends i.PureComponent {
                    render() {
                        const {
                            isOpened: t,
                            root: o
                        } = this.props;
                        if (!t) return null;
                        const r = i.createElement(e, { ...this.props,
                            zIndex: 150
                        });
                        return "parent" === o ? r : i.createElement(n.Portal, null, r)
                    }
                }
            }
        },
        416293: (e, t, o) => {
            "use strict";
            o.d(t, {
                ToolWidgetCaret: () => l
            });
            var i = o(50959),
                n = o(497754),
                r = o(83436),
                s = o(190948),
                a = o(100578);

            function l(e) {
                const {
                    dropped: t,
                    className: o
                } = e;
                return i.createElement(r.Icon, {
                    className: n(o, s.icon, {
                        [s.dropped]: t
                    }),
                    icon: a
                })
            }
        },
        150881: (e, t, o) => {
            "use strict";
            o.d(t, {
                TouchScrollContainer: () => a
            });
            var i = o(50959),
                n = o(259142),
                r = o(650151),
                s = o(638456);
            const a = (0, i.forwardRef)(((e, t) => {
                const {
                    children: o,
                    ...r
                } = e, a = (0, i.useRef)(null);
                return (0, i.useImperativeHandle)(t, (() => a.current)), (0, i.useLayoutEffect)((() => {
                    if (s.CheckMobile.iOS()) return null !== a.current && (0, n.disableBodyScroll)(a.current, {
                        allowTouchMove: l(a)
                    }), () => {
                        null !== a.current && (0, n.enableBodyScroll)(a.current)
                    }
                }), []), i.createElement("div", {
                    ref: a,
                    ...r
                }, o)
            }));

            function l(e) {
                return t => {
                    const o = (0,
                            r.ensureNotNull)(e.current),
                        i = document.activeElement;
                    return !o.contains(t) || null !== i && o.contains(i) && i.contains(t)
                }
            }
        },
        184463: e => {
            e.exports = {
                button: "button-mOEOjod4",
                hover: "hover-mOEOjod4",
                bg: "bg-mOEOjod4",
                icon: "icon-mOEOjod4",
                isActive: "isActive-mOEOjod4",
                isTransparent: "isTransparent-mOEOjod4",
                isGrayed: "isGrayed-mOEOjod4",
                isHidden: "isHidden-mOEOjod4"
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
        574749: e => {
            e.exports = {
                button: "button-rqVQ8gUB"
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
        898930: (e, t, o) => {
            "use strict";
            o.d(t, {
                VerticalAttachEdge: () => i,
                HorizontalAttachEdge: () => n,
                VerticalDropDirection: () => r,
                HorizontalDropDirection: () => s,
                getPopupPositioner: () => c
            });
            var i, n, r, s, a = o(650151);
            ! function(e) {
                e[e.Top = 0] = "Top", e[e.Bottom = 1] = "Bottom"
            }(i || (i = {})),
            function(e) {
                e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
            }(n || (n = {})),
            function(e) {
                e[e.FromTopToBottom = 0] = "FromTopToBottom", e[e.FromBottomToTop = 1] = "FromBottomToTop"
            }(r || (r = {})),
            function(e) {
                e[e.FromLeftToRight = 0] = "FromLeftToRight", e[e.FromRightToLeft = 1] = "FromRightToLeft"
            }(s || (s = {}));
            const l = {
                verticalAttachEdge: i.Bottom,
                horizontalAttachEdge: n.Left,
                verticalDropDirection: r.FromTopToBottom,
                horizontalDropDirection: s.FromLeftToRight,
                verticalMargin: 0,
                horizontalMargin: 0,
                matchButtonAndListboxWidths: !1
            };

            function c(e, t) {
                return (o, c) => {
                    const d = (0, a.ensureNotNull)(e).getBoundingClientRect(),
                        {
                            verticalAttachEdge: h = l.verticalAttachEdge,
                            verticalDropDirection: u = l.verticalDropDirection,
                            horizontalAttachEdge: p = l.horizontalAttachEdge,
                            horizontalDropDirection: m = l.horizontalDropDirection,
                            horizontalMargin: g = l.horizontalMargin,
                            verticalMargin: _ = l.verticalMargin,
                            matchButtonAndListboxWidths: v = l.matchButtonAndListboxWidths
                        } = t,
                        f = h === i.Top ? -1 * _ : _,
                        w = p === n.Right ? d.right : d.left,
                        b = h === i.Top ? d.top : d.bottom,
                        y = {
                            x: w - (m === s.FromRightToLeft ? o : 0) + g,
                            y: b - (u === r.FromBottomToTop ? c : 0) + f
                        };
                    return v && (y.overrideWidth = d.width), y
                }
            }
        },
        991605: (e, t, o) => {
            "use strict";
            o.d(t, {
                ToolButton: () => l
            });
            var i = o(50959),
                n = o(497754),
                r = o(83436),
                s = o(8626),
                a = o(184463);

            function l(e) {
                const {
                    id: t,
                    activeClass: o,
                    children: l,
                    className: c,
                    icon: d,
                    isActive: h,
                    isGrayed: u,
                    isHidden: p,
                    isTransparent: m,
                    theme: g = a,
                    onClick: _,
                    title: v,
                    buttonHotKey: f,
                    tooltipPosition: w = "vertical"
                } = e;
                return i.createElement("div", {
                    id: t,
                    className: n(g.button, c, h && o, {
                        "apply-common-tooltip": Boolean(v),
                        "common-tooltip-vertical": Boolean(v) && "vertical" === w,
                        [g.isActive]: h,
                        [g.isGrayed]: u,
                        [g.isHidden]: p,
                        [g.isTransparent]: m
                    }),
                    onClick: _,
                    title: v,
                    "data-role": "button",
                    "data-tooltip-hotkey": f,
                    ...(0, s.filterDataProps)(e)
                }, i.createElement("div", {
                    className: g.bg
                }, d && ("string" == typeof d ? i.createElement(r.Icon, {
                    className: g.icon,
                    icon: d
                }) : i.createElement("span", {
                    className: g.icon
                }, d)), l))
            }
        },
        983731: (e, t, o) => {
            "use strict";
            o.d(t, {
                DEFAULT_TOOL_WIDGET_BUTTON_THEME: () => a,
                ToolWidgetButton: () => l
            });
            var i = o(50959),
                n = o(497754),
                r = o(83436),
                s = o(635194);
            const a = s,
                l = i.forwardRef(((e, t) => {
                    const {
                        icon: o,
                        isActive: a,
                        isOpened: l,
                        isDisabled: c,
                        isGrouped: d,
                        isHovered: h,
                        onClick: u,
                        text: p,
                        textBeforeIcon: m,
                        title: g,
                        theme: _ = s,
                        className: v,
                        forceInteractive: f,
                        "data-name": w,
                        ...b
                    } = e, y = n(v, _.button, g && "apply-common-tooltip", {
                        [_.isActive]: a,
                        [_.isOpened]: l,
                        [_.isInteractive]: (f || Boolean(u)) && !c,
                        [_.isDisabled]: c,
                        [_.isGrouped]: d,
                        [_.hover]: h
                    }), C = o && ("string" == typeof o ? i.createElement(r.Icon, {
                        className: _.icon,
                        icon: o
                    }) : i.cloneElement(o, {
                        className: n(_.icon, o.props.className)
                    }));
                    return i.createElement("div", { ...b,
                        ref: t,
                        "data-role": "button",
                        className: y,
                        onClick: c ? void 0 : u,
                        title: g,
                        "data-name": w
                    }, m && p && i.createElement("div", {
                        className: n("js-button-text", _.text)
                    }, p), C, !m && p && i.createElement("div", {
                        className: n("js-button-text", _.text)
                    }, p))
                }))
        },
        159642: (e, t, o) => {
            "use strict";
            o.d(t, {
                ToolWidgetIconButton: () => a
            });
            var i = o(50959),
                n = o(497754),
                r = o(983731),
                s = o(574749);
            const a = i.forwardRef(((e, t) => {
                const {
                    className: o,
                    id: a,
                    ...l
                } = e;
                return i.createElement(r.ToolWidgetButton, {
                    "data-name": a,
                    ...l,
                    ref: t,
                    className: n(o, s.button)
                })
            }))
        },
        575296: (e, t, o) => {
            "use strict";
            o.d(t, {
                DEFAULT_TOOL_WIDGET_MENU_THEME: () => m,
                ToolWidgetMenu: () => g
            });
            var i = o(50959),
                n = o(497754),
                r = o(591800),
                s = o(45968),
                a = o(416293),
                l = o(8626),
                c = o(332585),
                d = o(762852),
                h = o(898930),
                u = o(18182),
                p = o(17049);
            const m = p;
            class g extends i.PureComponent {
                constructor(e) {
                    super(e), this._wrapperRef = null, this._controller = i.createRef(), this._handleWrapperRef = e => {
                        this._wrapperRef = e, this.props.reference && this.props.reference(e)
                    }, this._handleClick = e => {
                        e.target instanceof Node && e.currentTarget.contains(e.target) && (this._handleToggleDropdown(), this.props.onClick && this.props.onClick(e, !this.state.isOpened))
                    }, this._handleToggleDropdown = e => {
                        const {
                            onClose: t,
                            onOpen: o
                        } = this.props, {
                            isOpened: i
                        } = this.state, n = "boolean" == typeof e ? e : !i;
                        this.setState({
                            isOpened: n
                        }), n && o && o(), !n && t && t()
                    }, this._handleClose = () => {
                        this.close()
                    }, this._handleKeyDown = e => {
                        27 === (0, r.hashFromEvent)(e) && this.state.isOpened && this.props.closeOnEsc && (e.preventDefault(), e.stopPropagation(), this._handleToggleDropdown())
                    }, this.state = {
                        isOpened: !1
                    }
                }
                render() {
                    const {
                        id: e,
                        arrow: t,
                        content: o,
                        isDisabled: r,
                        isDrawer: s,
                        isShowTooltip: c,
                        title: d,
                        className: h,
                        hotKey: p,
                        theme: m,
                        drawerBreakpoint: g,
                        tabIndex: _
                    } = this.props, {
                        isOpened: v
                    } = this.state, f = n(h, m.button, {
                        "apply-common-tooltip": c || !r,
                        [m.isDisabled]: r,
                        [m.isOpened]: v
                    });
                    return i.createElement("div", {
                        id: e,
                        className: f,
                        onClick: r ? void 0 : this._handleClick,
                        title: d,
                        "data-tooltip-hotkey": p,
                        ref: this._handleWrapperRef,
                        "data-role": "button",
                        tabIndex: _,
                        onKeyDown: this._handleKeyDown,
                        ...(0, l.filterDataProps)(this.props)
                    }, o, t && i.createElement("div", {
                        className: m.arrow
                    }, i.createElement("div", {
                        className: m.arrowWrap
                    }, i.createElement(a.ToolWidgetCaret, {
                        dropped: v
                    }))), this.state.isOpened && (g ? i.createElement(u.MatchMedia, {
                        rule: g
                    }, (e => this._renderContent(e))) : this._renderContent(s)))
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
                        menuClassName: n,
                        maxHeight: r,
                        drawerPosition: a = "Bottom",
                        children: l
                    } = this.props, {
                        isOpened: u
                    } = this.state, p = {
                        horizontalMargin: this.props.horizontalMargin || 0,
                        verticalMargin: this.props.verticalMargin || 2,
                        verticalAttachEdge: this.props.verticalAttachEdge,
                        horizontalAttachEdge: this.props.horizontalAttachEdge,
                        verticalDropDirection: this.props.verticalDropDirection,
                        horizontalDropDirection: this.props.horizontalDropDirection,
                        matchButtonAndListboxWidths: this.props.matchButtonAndListboxWidths
                    }, m = Boolean(u && e && a), g = function(e) {
                        return "function" == typeof e
                    }(l) ? l({
                        isDrawer: m
                    }) : l;
                    return m ? i.createElement(c.DrawerManager, null, i.createElement(d.Drawer, {
                        onClose: this._handleClose,
                        position: a,
                        "data-name": t
                    }, g)) : i.createElement(s.PopupMenu, {
                        controller: this._controller,
                        closeOnClickOutside: this.props.closeOnClickOutside,
                        doNotCloseOn: this,
                        isOpened: u,
                        minWidth: o,
                        onClose: this._handleClose,
                        position: (0, h.getPopupPositioner)(this._wrapperRef, p),
                        className: n,
                        maxHeight: r,
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
        509184: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                FavoriteDrawingToolbar: () => b
            });
            var i = o(777754),
                n = o(928227),
                r = o(181317),
                s = o(650151),
                a = o(778785),
                l = o(878134),
                c = o(310399),
                d = o(263221),
                h = o(480071),
                u = o(551065),
                p = o(62802),
                m = o(49437),
                g = o(988411),
                _ = o.n(g),
                v = o(589015),
                f = o(314802);
            o(341869);
            const w = new Set((0, s.ensureDefined)(v.lineTools.find((e => "linetool-group-cursors" === e.id))).items.map((e => e.name)));
            class b extends n.FloatingToolbar {
                constructor(e) {
                    super({
                        allowSortable: !a.mobiletouch,
                        dragOnlyInsideToolbar: !0,
                        defaultPosition: e,
                        positionSettingsKey: "chart.favoriteDrawingsPosition",
                        positionStorageType: "device"
                    }), this._linetoolsWidgets = {}, this._canBeShownValue = new(_())(!1), this._attachHandlers(), this._loadVisibilityState(), this._hideAction = this._createHideToolbarAction()
                }
                show() {
                    this._canBeShownValue.value() && (this.isVisible() || this._renderAllLinetools(), super.show())
                }
                showAndSaveSettingsValue() {
                    this._canBeShownValue.value() && (m.TVLocalStorage.setItem("ChartFavoriteDrawingToolbarWidget.visible", "true"), this.show())
                }
                hideAndSaveSettingsValue() {
                    m.TVLocalStorage.setItem("ChartFavoriteDrawingToolbarWidget.visible", "false"), this.hide()
                }
                canBeShown() {
                    return this._canBeShownValue.readonly()
                }
                _onFavoriteAdded(e) {
                    this.addWidget(this._createLinetoolWidget(e)), r.LinetoolsFavoritesStore.favorites().filter(y).length > 0 && (this._canBeShownValue.setValue(!0), this.showAndSaveSettingsValue())
                }
                _onFavoriteRemoved(e) {
                    this.removeWidget(this._linetoolsWidgets[e]), delete this._linetoolsWidgets[e], 0 === r.LinetoolsFavoritesStore.favorites().filter(y).length && (this._canBeShownValue.setValue(!1), this.hide())
                }
                _onFavoriteMoved() {
                    this._renderAllLinetools()
                }
                _onSelectedLinetoolChanged(e) {
                    Object.keys(this._linetoolsWidgets).forEach((t => {
                        this._linetoolsWidgets[t].classList.toggle("i-active", e === t)
                    }))
                }
                _createLinetoolWidget(e) {
                    const t = `<span class="tv-favorited-drawings-toolbar__widget apply-common-tooltip ${e===h.tool.value()?"i-active":""}" title="${u.lineToolsInfo[e].localizedName}" data-name="FavoriteToolbar${e}">${u.lineToolsInfo[e].icon}</span>`,
                        o = (0, l.parseHtmlElement)(t);
                    return o.addEventListener("click", (t => {
                        t.preventDefault(), h.tool.value() !== e && h.tool.setValue(e)
                    })), this._linetoolsWidgets[e] = o, o
                }
                _renderAllLinetools() {
                    this._linetoolsWidgets = {}, this.removeWidgets(), r.LinetoolsFavoritesStore.favorites().filter((e => u.lineToolsInfo[e] && y(e))).forEach((e => {
                        this.addWidget(this._createLinetoolWidget(e))
                    }))
                }
                _attachHandlers() {
                    r.LinetoolsFavoritesStore.favoriteAdded.subscribe(this, this._onFavoriteAdded), r.LinetoolsFavoritesStore.favoriteRemoved.subscribe(this, this._onFavoriteRemoved), r.LinetoolsFavoritesStore.favoriteMoved.subscribe(this, this._onFavoriteMoved), r.LinetoolsFavoritesStore.favoritesSynced.subscribe(null, (() => {
                        this._loadVisibilityState(), this._renderAllLinetools()
                    })), this.onWidgetsReordered().subscribe(this, ((e, t) => {
                        if (r.LinetoolsFavoritesStore.favoriteMoved.unsubscribe(this, this._onFavoriteMoved), !r.LinetoolsFavoritesStore.moveFavorite(r.LinetoolsFavoritesStore.favorite(e), t)) throw new Error("Something went wrong");
                        r.LinetoolsFavoritesStore.favoriteMoved.subscribe(this, this._onFavoriteMoved)
                    })), this.onContextMenu((e => {
                        e.preventDefault(), d.ContextMenuManager.showMenu([this._hideAction], e)
                    })), h.tool.subscribe(this._onSelectedLinetoolChanged.bind(this))
                }
                _createHideToolbarAction() {
                    return new c.Action({
                        actionId: "Chart.FavoriteDrawingToolsToolbar.Hide",
                        label: i.t(null, void 0, o(574813)),
                        onExecute: () => {
                            this.hideAndSaveSettingsValue()
                        }
                    })
                }
                _loadVisibilityState() {
                    const e = r.LinetoolsFavoritesStore.favorites().filter(y).length > 0;
                    this._canBeShownValue.setValue(e);
                    const t = r.LinetoolsFavoritesStore.favoritesCount() > 0;
                    let o;
                    const i = p.getValue("ChartFavoriteDrawingToolbarWidget.visible");
                    void 0 !== i ? (p.remove("ChartFavoriteDrawingToolbarWidget.visible", {
                        forceFlush: !0
                    }), o = "false" !== i, m.TVLocalStorage.setItem("ChartFavoriteDrawingToolbarWidget.visible", i)) : o = "false" !== m.TVLocalStorage.getItem("ChartFavoriteDrawingToolbarWidget.visible"), o && t ? this.show() : this.hide()
                }
            }

            function y(e) {
                return !((0, f.isOnMobileAppPage)("any") && (0, s.ensureDefined)(w).has(e))
            }
        },
        928227: (e, t, o) => {
            "use strict";
            o.d(t, {
                FLOATING_TOOLBAR_REACT_WIDGETS_CLASS: () => f,
                FloatingToolbar: () => b
            });
            var i = o(224743),
                n = o(778785),
                r = o(455567),
                s = o(62802),
                a = o(869403),
                l = o.n(a),
                c = o(988411),
                d = o.n(c),
                h = o(354610),
                u = o(952456),
                p = o(49437),
                m = o(404573),
                g = o(878134),
                _ = o(345848),
                v = o(25388);
            o(604920);
            const f = "floating-toolbar-react-widgets",
                w = `<div class="tv-floating-toolbar i-closed i-hidden"><div class="tv-floating-toolbar__widget-wrapper"><div class="tv-floating-toolbar__drag js-drag">${v}</div><div class="tv-floating-toolbar__content js-content"></div><div class="${f}"></div></div></div>`;
            class b {
                constructor(e) {
                    this._widget = document.createElement("div"), this._isVertical = !1, this._hiddingTimeoutId = null, this._visibility = new(d())(!1), this._windowResizeListener = this._onWindowResize.bind(this),
                        this._reorderedDelegate = new(l()), this._responsiveResizeFunction = null, this._showTimeStamp = null, this._draggable = null, this._preventClickUntilAnimation = e => {
                            null !== this._showTimeStamp && performance.now() - this._showTimeStamp < this.hideDuration() && e.stopPropagation()
                        }, b._toolbars.push(this), this._options = e, this._widget = (0, g.parseHtmlElement)(w), this._content = this._widget.getElementsByClassName("js-content").item(0), this._reactWidgetsContainer = this._widget.getElementsByClassName(f).item(0), this._setZIndex(b._startZIndex + b._toolbars.length - 1), this._options.addClass && (this._widget.className += ` ${this._options.addClass}`), this._options["data-name"] && (this._widget.dataset.name = this._options["data-name"]), this._options.layout && "auto" !== this._options.layout && (this._isVertical = "vertical" === this._options.layout, this._updateLayoutType(), this._updateAxisOption()), this._widget.addEventListener("click", this._preventClickUntilAnimation, !0)
                }
                destroy() {
                    this.hide(!0), b._toolbars.splice(b._toolbars.indexOf(this), 1), this._widget.removeEventListener("click", this._preventClickUntilAnimation, !0), document.body.contains(this._widget) && document.body.removeChild(this._widget), null !== this._draggable && this._draggable.destroy(), this._widget.innerHTML = "", this._responsiveResizeFunction = null
                }
                setResponsiveResizeFunc(e) {
                    this._responsiveResizeFunction = e
                }
                isVisible() {
                    return this._visibility.value()
                }
                visibility() {
                    return this._visibility.readonly()
                }
                isVertical() {
                    return this._isVertical
                }
                show() {
                    this.isVisible() || (document.body.contains(this._widget) || (this._init(), document.body.appendChild(this._widget)), this._setHiddingTimeout(null), window.addEventListener("resize", this._windowResizeListener), this.raise(), this._visibility.setValue(!0), this._showTimeStamp = performance.now(), this._widget.classList.contains("i-hidden") ? (this._widget.classList.remove("i-hidden"), setTimeout((() => {
                        this.isVisible() && this._widget.classList.remove("i-closed")
                    }))) : this._widget.classList.remove("i-closed"), this._onWindowResize())
                }
                hide(e = !1) {
                    if (!this.isVisible()) return;
                    const t = this._widget.classList.contains("i-closed");
                    if (this._widget.classList.add("i-closed"), this._visibility.setValue(!1), e || t) this._setHiddingTimeout(null), this._widget.classList.add("i-hidden");
                    else {
                        const e = setTimeout((() => {
                            this._setHiddingTimeout(null), this._widget.classList.add("i-hidden")
                        }), this.hideDuration());
                        this._setHiddingTimeout(e)
                    }
                    window.removeEventListener("resize", this._windowResizeListener)
                }
                raise() {
                    b._toolbars.length + b._startZIndex !== this._zIndex() && (b._toolbars.splice(b._toolbars.indexOf(this), 1), b._toolbars.push(this), b._updateAllZIndexes())
                }
                hideDuration() {
                    return .75 * r.dur
                }
                addWidget(e, t = {}) {
                    const o = this.widgetsCount();
                    if (void 0 === t.index && (t.index = o), t.index < 0 || t.index > o) throw new Error(`Index must be in [0, ${o}]`);
                    const i = document.createElement("div");
                    i.className = "tv-floating-toolbar__widget js-widget", i.appendChild(e);
                    const n = t.index === o ? null : this._content.childNodes.item(t.index);
                    this._content.insertBefore(i, n), this._onWindowResize()
                }
                getReactWidgetContainer() {
                    return this._reactWidgetsContainer
                }
                removeWidget(e) {
                    const t = this._findWrapperForWidget(e);
                    t && (this._content.removeChild(t), this._onWindowResize())
                }
                widgetsCount() {
                    return this._content.childNodes.length
                }
                showWidget(e) {
                    const t = this._findWrapperForWidget(e);
                    t && t.classList.remove("i-hidden")
                }
                hideWidget(e) {
                    const t = this._findWrapperForWidget(e);
                    t && t.classList.add("i-hidden")
                }
                removeWidgets() {
                    for (; this._content.firstChild;) this._content.removeChild(this._content.firstChild);
                    this._onWindowResize()
                }
                onWidgetsReordered() {
                    return this._reorderedDelegate
                }
                onContextMenu(e) {
                    if (n.mobiletouch) {
                        (new u.HammerJSLoader).load().then((t => {
                            const o = new t(this._widget);
                            o.get("press").set({
                                time: 500
                            }), o.on("press", (t => {
                                this._preventWidgetTouchEndEvent(), e(t.srcEvent)
                            }))
                        }))
                    } else this._widget.addEventListener("contextmenu", e)
                }
                checkPosition() {
                    const e = this._getCorrectedWidgetRect(),
                        t = {
                            left: e.left,
                            top: e.top
                        };
                    this._correctPosition(t), e.left === t.left && e.top === t.top || (this._widget.style.left = t.left + "px", this._widget.style.top = t.top + "px")
                }
                _determineCurrentLayoutVertical(e) {
                    const t = this._isVertical ? e.height : e.width;
                    return window.innerWidth < t && window.innerWidth < window.innerHeight
                }
                _getWidget() {
                    return this._widget
                }
                _findWrapperForWidget(e) {
                    const t = this._content.getElementsByClassName("js-widget");
                    for (let o = 0; o < t.length; ++o) {
                        const i = t.item(o);
                        if (i.contains(e)) return i
                    }
                    return null
                }
                _onVerticalChanged(e, t) {}
                _correctPosition(e) {
                    const t = this._getCorrectedWidgetRect(),
                        o = this._getSavedPosition(),
                        i = window.innerWidth - t.right,
                        n = window.innerHeight - t.bottom;
                    i < 0 ? e.left = Math.max(0, window.innerWidth - t.width) : o && o.left > e.left && (e.left = Math.min(e.left + i, o.left)), n < 0 ? e.top = Math.max(0, window.innerHeight - t.height) : o && o.top > e.top && (e.top = Math.min(e.top + n, o.top))
                }
                _getCorrectedWidgetRect() {
                    const e = this._widget.getBoundingClientRect();
                    if (this._widget.classList.contains("i-closed")) {
                        const t = 1 / .925 - 1,
                            o = e.width * t,
                            i = e.height * t;
                        return {
                            bottom: e.bottom + i / 2,
                            height: e.height + i,
                            left: e.left - o / 2,
                            right: e.right + o / 2,
                            top: e.top - i / 2,
                            width: e.width + o
                        }
                    }
                    return e
                }
                _getSavedPosition() {
                    var e;
                    let t;
                    if ("device" === this._options.positionStorageType) {
                        const e = p.TVLocalStorage.getItem(this._options.positionSettingsKey);
                        t = null !== e ? JSON.parse(e) : null
                    } else t = null !== (e = (0, s.getJSON)(this._options.positionSettingsKey)) && void 0 !== e ? e : null;
                    return null !== t && "top" in t && "left" in t ? t : null
                }
                _setHiddingTimeout(e) {
                    null !== this._hiddingTimeoutId && clearTimeout(this._hiddingTimeoutId), this._hiddingTimeoutId = e
                }
                _preventWidgetTouchEndEvent() {
                    const e = t => {
                        t.preventDefault(), this._widget.removeEventListener("touchend", e)
                    };
                    this._widget.addEventListener("touchend", e)
                }
                _updateLayoutType() {
                    this._widget.classList.toggle("i-vertical", this._isVertical)
                }
                _updateAxisOption() {
                    if (this._options.dragOnlyInsideToolbar) {
                        const e = this._isVertical ? "y" : "x";
                        (0, h.lazyJqueryUI)(this._content).sortable("option", "axis", e)
                    }
                }
                _onWindowResize() {
                    if ("auto" === (this._options.layout || "auto")) {
                        const e = this._isVertical,
                            t = this._getCorrectedWidgetRect();
                        this._isVertical = this._determineCurrentLayoutVertical(t), this._updateLayoutType(), e !== this._isVertical && (this._onVerticalChanged(this._isVertical, e), this._updateAxisOption())
                    }
                    this.checkPosition(), this._resizeResponsive()
                }
                _resizeResponsive() {
                    if (null === this._responsiveResizeFunction) return;
                    let e = this._options.layout || "auto";
                    "auto" === e && (e = this._isVertical ? "vertical" : "horizontal");
                    const t = "vertical" === e ? this._widget.clientHeight : this._widget.clientWidth,
                        o = ("vertical" === e ? window.innerHeight : window.innerWidth) - t;
                    this._responsiveResizeFunction(t, o, e)
                }
                _setZIndex(e) {
                    this._widget.style.zIndex = String(e)
                }
                _zIndex() {
                    return Number(this._widget.style.zIndex)
                }
                _loadPosition() {
                    var e;
                    const t = null !== (e = this._getSavedPosition()) && void 0 !== e ? e : this._options.defaultPosition;
                    this._widget.style.left = Math.round(t.left) + "px", this._widget.style.top = Math.round(t.top) + "px", this._onWindowResize()
                }
                _savePosition() {
                    const e = this._widget.getBoundingClientRect();
                    if ("device" === this._options.positionStorageType) try {
                        p.TVLocalStorage.setItem(this._options.positionSettingsKey, JSON.stringify({
                            left: e.left,
                            top: e.top
                        }))
                    } catch (e) {} else(0, s.setJSON)(this._options.positionSettingsKey, {
                        left: e.left,
                        top: e.top
                    })
                }
                _init() {
                    this._loadPosition(), this._draggable = new m.Draggable({
                        source: this._widget,
                        containment: "window",
                        handle: ".js-drag",
                        start: i.globalCloseMenu,
                        stop: this._savePosition.bind(this)
                    }), this._options.allowSortable && this._initSortable(), this._widget.addEventListener("pointerdown", this.raise.bind(this))
                }
                _initSortable() {
                    let e = -1;
                    (0, h.lazyJqueryUI)(this._content).sortable({
                        start: (t, o) => {
                            e = o.item.index()
                        },
                        stop: (t, o) => {
                            const i = o.item.index();
                            e !== i && ((0, _.trackEvent)("Floating Toolbar", "User Sort"), this._reorderedDelegate.fire(e, i))
                        },
                        tolerance: "pointer",
                        distance: 5,
                        containment: !!this._options.dragOnlyInsideToolbar && "parent",
                        scroll: !1,
                        placeholder: "sortable-placeholder",
                        forcePlaceholderSize: !0
                    }), this._updateAxisOption()
                }
                static _updateAllZIndexes() {
                    b._toolbars.forEach(((e, t) => {
                        e._setZIndex(b._startZIndex + t)
                    }))
                }
            }
            b._startZIndex = 20, b._toolbars = []
        },
        274785: (e, t, o) => {
            "use strict";
            o.d(t, {
                LineToolPropertiesWidgetBase: () => Me
            });
            var i = o(50959),
                n = o(500962),
                r = o(777754),
                s = o(683890),
                a = o(495046),
                l = o(988411),
                c = o.n(l),
                d = o(758337),
                h = o(289397),
                u = o(480071),
                p = o(241056),
                m = o(650151),
                g = o(40210),
                _ = o.n(g);
            class v extends(_()) {
                constructor(e, t, o) {
                    super(), this._listenersMappers = [], this._isProcess = !1, this._baseProperty = e, this._propertyApplier = t, this._undoText = o
                }
                destroy() {
                    this._baseProperty.destroy()
                }
                value() {
                    return this._baseProperty.value()
                }
                setValue(e) {
                    this._isProcess = !0, this._baseProperty.setValue(e, void 0, {
                        applyValue: (e, t) => this._propertyApplier.setProperty(e, t, this._undoText)
                    }), this._isProcess = !1, this._listenersMappers.forEach((e => {
                        e.method.call(e.obj, this)
                    }))
                }
                subscribe(e, t) {
                    const o = o => {
                            this._isProcess || t.call(e, this)
                        },
                        i = {
                            obj: e,
                            method: t,
                            callback: o
                        };
                    this._listenersMappers.push(i), this._baseProperty.subscribe(e, o)
                }
                unsubscribe(e, t) {
                    var o;
                    const i = (0, m.ensureDefined)(null === (o = this._listenersMappers.find((o => o.obj === e && o.method === t))) || void 0 === o ? void 0 : o.callback);
                    this._baseProperty.unsubscribe(e, i)
                }
                unsubscribeAll(e) {
                    this._baseProperty.unsubscribeAll(e)
                }
            }
            var f = o(360491),
                w = o(157773),
                b = o(928227),
                y = o(642709);
            const C = b.FLOATING_TOOLBAR_REACT_WIDGETS_CLASS + "__button";

            function T(e) {
                const {
                    templateButton: t,
                    propertyButtons: o,
                    commonButtons: n,
                    isDrawingFinished: r,
                    activeChartWidget: s
                } = e, a = s.hasModel() && s.model().selection().dataSources();
                return a && a.length ? i.createElement(w.MatchMediaMap, {
                    rules: {
                        isSmallWidth: y.DialogBreakpoints.TabletSmall,
                        isSmallHeight: "screen and (max-height: 430px)"
                    }
                }, (({
                    isSmallWidth: e,
                    isSmallHeight: t
                }) => i.createElement(i.Fragment, null, l(), r && i.createElement(i.Fragment, null, Boolean(o.length) && o.map(((o, n) => i.createElement(o.component, { ...o.props,
                    key: `${o.props.title}_${n}`,
                    className: C,
                    isSmallScreen: e || t
                }))), Boolean(n.length) && n.map(((o, n) => {
                    const r = e || t;
                    return r ? o.showForSmallScreen ? i.createElement(o.component, { ...o.props,
                        isSmallScreen: r,
                        key: `${o.props.title}_${n}`,
                        className: C
                    }) : null : i.createElement(o.component, { ...o.props,
                        key: `${o.props.title}_${n}`,
                        className: C
                    })
                })))))) : l();

                function l() {
                    return null === t ? null : i.createElement(t.component, { ...t.props,
                        isDrawingFinished: r,
                        className: C
                    })
                }
            }
            var E = o(345848),
                x = o(159642),
                S = o(561964);

            function P(e) {
                const {
                    title: t,
                    activeChartWidget: o,
                    className: n
                } = e;
                return i.createElement(x.ToolWidgetIconButton, {
                    className: n,
                    icon: S,
                    title: t,
                    onClick: async function() {
                        (0, E.trackEvent)("GUI", "Context action on drawings", "Settings");
                        const e = o.model().selection().lineDataSources(),
                            t = e.length;
                        1 === t ? await o.showChartPropertiesForSource(e[0], void 0, {
                            onWidget: o.onWidget()
                        }) : t > 1 && await o.showChartPropertiesForSources({
                            sources: e
                        })
                    },
                    "data-name": "settings"
                })
            }
            var L = o(68077),
                W = o(497754),
                k = o(991605),
                B = o(720695);

            function N(e) {
                const {
                    className: t,
                    ...o
                } = e;
                return i.createElement(k.ToolButton, {
                    className: W(t, B.button),
                    tooltipPosition: "horizontal",
                    ...o
                })
            }
            var M = o(665186),
                A = o(691244);

            function D(e) {
                const {
                    activeChartWidget: t,
                    className: n
                } = e, s = t.model().selection().lineDataSources();
                if (0 === s.length) return null;
                const a = s[0].properties().frozen,
                    l = (0, L.useProperty)(a),
                    c = l ? {
                        title: r.t(null, void 0, o(715101)),
                        icon: M
                    } : {
                        title: r.t(null, void 0, o(642284)),
                        icon: A
                    };
                return i.createElement(N, {
                    className: n,
                    isActive: Boolean(l),
                    onClick: function() {
                        (0, E.trackEvent)("GUI", "Context action on drawings", "Lock"), t.toggleLockSelectedObject()
                    },
                    "data-name": Boolean(l) ? "unlock" : "lock",
                    ...c
                })
            }
            var I = o(535149);

            function O(e) {
                const {
                    title: t,
                    activeChartWidget: o,
                    className: n
                } = e;
                return i.createElement(x.ToolWidgetIconButton, {
                    className: n,
                    icon: I,
                    title: t,
                    "data-name": "remove",
                    onClick: function() {
                        (0, E.trackEvent)("GUI", "Context action on drawings", "Remove"), o.removeSelectedSources()
                    }
                })
            }
            var V = o(83436),
                R = o(778785),
                F = o(470316),
                z = o(799786),
                H = o(575296),
                U = o(108708),
                j = o(310399),
                G = o(364489),
                $ = o(263221),
                Y = o(676317),
                J = o(844996),
                q = o(484959);

            function X(e) {
                const {
                    title: t,
                    activeChartWidget: n,
                    isSmallScreen: s,
                    className: a
                } = e, l = n.model(), c = l.selection().lineDataSources(), [d, h] = (0, i.useState)([]), u = (0, i.useRef)(null), p = (0, i.useMemo)((() => new Y.ActionsProvider(n)), [n]);
                return i.createElement(i.Fragment, null, i.createElement(G.KeyboardDocumentListener, {
                    keyCode: 27,
                    eventType: "keyup",
                    handler: function() {
                        (0, m.ensureNotNull)(u.current).close()
                    }
                }), i.createElement(H.ToolWidgetMenu, {
                    className: a,
                    ref: u,
                    arrow: !1,
                    onOpen: s ? void 0 : function() {
                        const e = [(0,
                            Y.createVisualOrderAction)(n, c)];
                        e.push((0, Y.createChangeIntervalsVisibilitiesAction)(n, c));
                        const t = function() {
                            const e = [],
                                t = F.isMacKeyboard ? " +" : "",
                                i = c.filter((e => e.cloneable()));
                            i.length > 0 && e.push(new j.Action({
                                actionId: "Chart.LineTool.Clone",
                                name: "clone",
                                icon: o(636296),
                                shortcutHint: F.humanReadableModifiers(z.Modifiers.Mod) + t + " Drag",
                                label: r.t(null, void 0, o(552977)),
                                onExecute: () => {
                                    l.cloneLineTools(i, !1), (0, E.trackEvent)("GUI", "Context action on drawings", "Clone")
                                }
                            }));
                            const s = c.filter((e => e.copiable()));
                            if (s.length > 0) {
                                const i = {
                                    actionId: "Chart.Clipboard.CopyLineTools",
                                    name: "copy",
                                    label: r.t(null, void 0, o(35216)),
                                    shortcutHint: F.humanReadableModifiers(z.Modifiers.Mod) + t + " C",
                                    onExecute: () => {
                                        n.chartWidgetCollection().clipboard.uiRequestCopy(s)
                                    }
                                };
                                e.push(new j.Action(i, "Copy"))
                            }
                            if (! function() {
                                    if (!(null == n ? void 0 : n.isMultipleLayout())) return !1;
                                    return c.some((e => e.isSynchronizable()))
                                }()) return e;
                            return e.push(...(0, Y.createSyncDrawingActions)(n, c)), e
                        }();
                        t.length && e.push(new j.Separator, ...t);
                        e.push(new j.Separator, new j.Action({
                            actionId: "Chart.SelectedObject.Hide",
                            label: r.t(null, void 0, o(831971)),
                            icon: q,
                            onExecute: () => {
                                n.hideSelectedObject()
                            },
                            name: "hide"
                        })), h(K(e))
                    },
                    onClick: s ? function(e) {
                        p.contextMenuActionsForSources(c).then((t => {
                            window.matchMedia(y.DialogBreakpoints.TabletSmall).matches ? $.ContextMenuManager.showMenu(K(t), e, {
                                mode: "drawer",
                                "data-name": "more-menu"
                            }) : h(K(t))
                        }))
                    } : void 0,
                    title: t,
                    content: i.createElement(V.Icon, {
                        icon: J
                    }),
                    "data-name": "more",
                    menuDataName: "more-menu"
                }, i.createElement(U.ActionsTable, {
                    parentIsOpened: !0,
                    items: d
                })))
            }

            function K(e) {
                if (R.touch && !window.matchMedia("(pointer:fine)").matches) {
                    const t = e.filter((e => "Copy" !== e.id));
                    if (t.length === e.length) return t;
                    const o = [];
                    return t.forEach((e => {
                        ("separator" !== e.type || o.length > 0 && "separator" !== o[o.length - 1].type) && o.push(e)
                    })), o
                }
                return e
            }
            var Z = o(96841),
                Q = o(200501),
                ee = o(123851),
                te = o(357740);

            function oe(e) {
                const {
                    property: t,
                    propertyApplier: n,
                    title: s,
                    undoText: a,
                    className: l
                } = e, c = (0, L.useProperty)(t), d = (0, i.useMemo)((() => [new j.Action({
                    actionId: "Chart.LineTool.Toolbar.ChangeLineStyleToSolid",
                    icon: Q,
                    label: r.t(null, void 0, o(301277)),
                    active: Z.LineStyle.Solid === c,
                    onExecute: () => n.setProperty(t, Z.LineStyle.Solid, a)
                }), new j.Action({
                    actionId: "Chart.LineTool.Toolbar.ChangeLineStyleToDashed",
                    icon: ee,
                    label: r.t(null, void 0, o(459317)),
                    active: Z.LineStyle.Dashed === c,
                    onExecute: () => n.setProperty(t, Z.LineStyle.Dashed, a)
                }), new j.Action({
                    actionId: "Chart.LineTool.Toolbar.ChangeLineStyleToDotted",
                    icon: te,
                    label: r.t(null, void 0, o(842973)),
                    active: Z.LineStyle.Dotted === c,
                    onExecute: () => n.setProperty(t, Z.LineStyle.Dotted, a)
                })]), [n, t, c]);
                return i.createElement(H.ToolWidgetMenu, {
                    className: l,
                    arrow: !1,
                    content: i.createElement(V.Icon, {
                        icon: ie(c)
                    }),
                    title: s,
                    "data-name": e["data-name"],
                    menuDataName: `${e["data-name"]}-menu`
                }, i.createElement(U.ActionsTable, {
                    items: d
                }))
            }

            function ie(e) {
                switch (e) {
                    case Z.LineStyle.Solid:
                        return Q;
                    case Z.LineStyle.Dashed:
                        return ee;
                    case Z.LineStyle.Dotted:
                        return te;
                    default:
                        return ""
                }
            }
            const ne = [10, 11, 12, 14, 16, 20, 24, 28, 32, 40];

            function re(e) {
                const {
                    property: t,
                    propertyApplier: o,
                    title: n,
                    undoText: r,
                    className: s
                } = e, a = (0, L.useProperty)(t), l = ne.map((e => new j.Action({
                    actionId: "Chart.LineTool.Toolbar.ChangeFontSizeProperty",
                    label: e.toString(),
                    onExecute: () => o.setProperty(t, e, r),
                    active: e === a
                })));
                return i.createElement(H.ToolWidgetMenu, {
                    arrow: !1,
                    content: a,
                    className: s,
                    title: n,
                    "data-name": e["data-name"],
                    menuDataName: `${e["data-name"]}-menu`
                }, i.createElement(U.ActionsTable, {
                    items: l
                }))
            }
            var se = o(869403),
                ae = o.n(se);
            o(256337), o(653351);
            class le extends b.FloatingToolbar {
                constructor(e) {
                    super(le._prepareOptions(e)), this._onWidgetStateChangedDelegate = new(ae()), this._statedWidgets = [], this._currentPopup = null, this._onWindowClickedListener = this._onWindowClicked.bind(this)
                }
                show() {
                    super.show(), document.addEventListener("mousedown", this._onWindowClickedListener)
                }
                hide(e) {
                    super.hide(e), document.removeEventListener("mousedown", this._onWindowClickedListener)
                }
                destroy() {
                    this._closePopup(), super.destroy()
                }
                addGroupedWidget(e, t = {}) {
                    (0, m.assert)(e.states.length > 0 && -1 !== le._getStateIndexById(e, e.currentStateId), `Argument is invalid (count: ${e.states.length}, state: ${e.currentStateId})`);
                    const o = document.createElement("div");
                    o.className = "tv-grouped-floating-toolbar__widget-wrapper apply-common-tooltip", e.widgetAddClass && o.classList.add(e.widgetAddClass), o.setAttribute("title", e.tooltip);
                    const i = {
                            isEnabled: !0,
                            statedWidget: e,
                            toolbarWidget: o
                        },
                        n = this._onWidgetClicked.bind(this, i);
                    i.clickListener = n, o.addEventListener("click", n), this._updateWidgetPreview(i), this.addWidget(o, t), this._statedWidgets.push(i)
                }
                findGroupedWidget(e) {
                    const t = this._statedWidgets.length;
                    for (let o = 0; o < t; ++o) {
                        if (this._statedWidgets[o].statedWidget.id === e) return o
                    }
                    return -1
                }
                removeGroupedWidget(e) {
                    const t = this._statedWidgets.length;
                    for (let o = 0; o < t; ++o) {
                        const t = this._statedWidgets[o];
                        if (t.statedWidget.id === e) return this._isPopupCreatedForWidget(e) && this._closePopup(), void 0 !== t.clickListener && t.toolbarWidget.removeEventListener("click", t.clickListener), this.removeWidget(t.toolbarWidget), this._statedWidgets.splice(o, 1), void this._updatePopupPosition()
                    }(0, m.assert)(!1, `Unknown groupId(${e})`)
                }
                updateGroupedWidget(e, t) {
                    this._closePopup();
                    const o = this._ensuredGetWidgetDataForId(e);
                    o.statedWidget.currentStateId = t.currentStateId, o.statedWidget.states = t.states, this._updateWidgetPreview(o)
                }
                setGroupedWidgetEnabled(e, t) {
                    const o = this._ensuredGetWidgetDataForId(e);
                    o.isEnabled = t, o.toolbarWidget.classList.toggle("i-disabled", !t)
                }
                setGroupedWidgetState(e, t) {
                    const o = this._ensuredGetWidgetDataForId(e);
                    (0, m.assert)(-1 !== le._getStateIndexById(o.statedWidget, t), `Unknown stateId (${t})`), o.statedWidget.currentStateId = t, this._updateSubWidgetsState(o.statedWidget), this._updateWidgetPreview(o)
                }
                onWidgetStateChanged() {
                    return this._onWidgetStateChangedDelegate
                }
                _onVerticalChanged(e, t) {
                    this._updatePopupPosition()
                }
                _ensuredGetWidgetDataForId(e) {
                    for (const t of this._statedWidgets)
                        if (t.statedWidget.id === e) return t;
                    throw new Error(`Unknown groupId(${e})`)
                }
                _onWidgetClicked(e, t) {
                    const o = this._currentPopup && this._isPopupCreatedForWidget(e.statedWidget.id);
                    this._closePopup(), !o && e.isEnabled && this._createPopup(e)
                }
                _createPopup(e) {
                    const t = {
                        createdFor: e.toolbarWidget,
                        element: document.createElement("div"),
                        stateWidgetId: e.statedWidget.id,
                        widgets: []
                    };
                    t.element.className += "tv-grouped-floating-toolbar__popup js-popup";
                    const o = e.statedWidget.states.length;
                    e.statedWidget.states.forEach(((i, n) => {
                        const r = this._createSubWidget(e, i),
                            s = this._onSubWidgetClicked.bind(this, e, i.id);
                        r.addEventListener("click", s), t.widgets.push({
                            clickListener: s,
                            stateWidget: i,
                            widget: r
                        }), r.classList.add(`tv-grouped-floating-toolbar__sub-widget--slide-right-${n}`), r.classList.add("tv-grouped-floating-toolbar__sub-widget--slide-left-" + (o - n + 1)), i.readonly || t.element.appendChild(r)
                    })), this._currentPopup = t, this._updateSubWidgetsState(e.statedWidget), e.toolbarWidget.classList.add("i-dropped"), this._getWidget().appendChild(this._currentPopup.element), Promise.resolve().then((() => {
                        this._currentPopup && this._currentPopup.element.classList.add("i-opened")
                    })), this._updatePopupPosition()
                }
                _closePopup() {
                    if (this._statedWidgets.forEach((e => {
                            e.toolbarWidget.classList.remove("i-dropped")
                        })), !this._currentPopup) return;
                    const e = this._currentPopup.widgets,
                        t = this._currentPopup.element;
                    this._currentPopup = null, e.forEach((e => {
                        e.widget.removeEventListener("click", e.clickListener)
                    })), t.classList.remove("i-opened"), t.addEventListener("transitionend", (e => {
                        e.target === t && this._getWidget().removeChild(t)
                    }))
                }
                _updateWidgetPreview(e) {
                    const t = le._getStateIndexById(e.statedWidget, e.statedWidget.currentStateId);
                    (0, m.assert)(-1 !== t, `Unknown state id: ${e.statedWidget.currentStateId}`);
                    const o = e.statedWidget.states[t].widget.cloneNode(!0);
                    e.toolbarWidget.firstChild ? e.toolbarWidget.replaceChild(o, e.toolbarWidget.firstChild) : (e.toolbarWidget.appendChild(o), e.toolbarWidget.appendChild(le._createCaret()))
                }
                _updateSubWidgetsState(e) {
                    this._currentPopup && this._isPopupCreatedForWidget(e.id) && this._currentPopup.widgets.forEach((t => {
                        t.widget.classList.toggle(le._activeSubWidgetClass, t.stateWidget.id === e.currentStateId)
                    }))
                }
                _updatePopupPosition() {
                    if (!this._currentPopup) return;
                    const e = this._currentPopup.createdFor,
                        t = this._getWidget().getBoundingClientRect(),
                        o = this._findWrapperForWidget(e);
                    if (!o || !this._currentPopup) throw new Error("Toolbar has no wrapper for preview's widget or there is no popup");
                    const i = o.getBoundingClientRect(),
                        n = this._currentPopup.element.getBoundingClientRect(),
                        r = this._currentPopup.element;
                    if (this.isVertical()) r.classList.remove("tv-grouped-floating-toolbar__popup--at-top"), r.style.top = i.top - t.top + 1 + "px", r.style.left = "", t.left > window.innerWidth - t.right ? r.classList.add("tv-grouped-floating-toolbar__popup--at-left") : r.classList.remove("tv-grouped-floating-toolbar__popup--at-left");
                    else {
                        r.classList.remove("tv-grouped-floating-toolbar__popup--at-left");
                        let e = 0;
                        i.left + n.width > window.innerWidth ? t.left + n.width > window.innerWidth && (e = t.width - n.width) : e = i.left - t.left + 1, r.style.left = `${e}px`,
                            t.bottom + n.height > window.innerHeight ? r.classList.add("tv-grouped-floating-toolbar__popup--at-top") : (r.classList.remove("tv-grouped-floating-toolbar__popup--at-top"), r.style.top = "")
                    }
                }
                _isPopupCreatedForWidget(e) {
                    return Boolean(this._currentPopup && this._currentPopup.stateWidgetId === e)
                }
                _createSubWidget(e, t) {
                    const o = document.createElement("div");
                    return o.className += "tv-grouped-floating-toolbar__sub-widget", e.statedWidget.stateWidgetAddClass && o.classList.add(e.statedWidget.stateWidgetAddClass), o.appendChild(t.widget), o
                }
                _onSubWidgetClicked(e, t) {
                    this._closePopup(), e.statedWidget.currentStateId !== t && (this.setGroupedWidgetState(e.statedWidget.id, t), this._onWidgetStateChangedDelegate.fire(e.statedWidget.id, t))
                }
                _onWindowClicked(e) {
                    if (this.isVisible() && this._currentPopup && !le._isEventInElement(e, this._currentPopup.element)) {
                        for (let t = 0; t < this._statedWidgets.length; ++t)
                            if (le._isEventInElement(e, this._statedWidgets[t].toolbarWidget)) return;
                        this._closePopup()
                    }
                }
                static _getStateIndexById(e, t) {
                    for (let o = 0; o < e.states.length; ++o)
                        if (e.states[o].id === t) return o;
                    return -1
                }
                static _createCaret() {
                    const e = document.createElement("div");
                    return e.className = "tv-caret tv-caret--small tv-caret--colored tv-grouped-floating-toolbar__caret", e
                }
                static _prepareOptions(e) {
                    const t = " tv-grouped-floating-toolbar";
                    return e.addClass ? e.addClass += t : e.addClass = t, e
                }
                static _isEventInElement(e, t) {
                    return e.target === t || t.contains(e.target)
                }
            }
            le._activeSubWidgetClass = "tv-grouped-floating-toolbar__sub-widget--current";
            var ce = o(504355),
                de = o(387115),
                he = o(419821),
                ue = o(631078),
                pe = o(821350),
                me = o(532787),
                ge = o(432146);

            function _e(e) {
                const {
                    activeChartWidget: t,
                    className: n
                } = e, s = t.model(), a = t.chartWidgetCollection(), l = t.getSaveChartService(), c = s.selection().lineDataSources()[0], d = (0, ue.useWatchedValueReadonly)({
                    watchedValue: null == c ? void 0 : c.hasAlert,
                    defaultValue: !1
                }), h = (0, ue.useWatchedValueReadonly)({
                    watchedValue: null == c ? void 0 : c.alertCreationAvailable(),
                    defaultValue: !1
                });
                if (!c || !h && !d) return null;
                const u = d ? {
                    title: r.t(null, void 0, o(153723)),
                    icon: ge,
                    onClick: function() {
                        window.runOrSignIn((() => {
                            c.editAlert("linetool_toolbar_edit_alert")
                        }), {
                            source: "Alert edit from line properties"
                        })
                    }
                } : {
                    title: r.t(null, void 0, o(805387)),
                    icon: me,
                    onClick: function() {
                        (0, E.trackEvent)("GUI", "CreateAlert", "DrawingPanel"), window.runOrSignIn((() => {
                            (0, pe.invokeAlertEditorWithOnlineSeries)({
                                dataSourceHub: s.model(),
                                drawing: c,
                                actionSource: "linetool_toolbar_add_alert",
                                onCreateSuccess: p
                            })
                        }), {
                            source: "Alert add from line properties"
                        })
                    }
                };
                return i.createElement(N, {
                    className: n,
                    isActive: d,
                    "data-name": d ? "edit-alert" : "add-alert",
                    ...u
                });

                function p() {
                    if (!l) return;
                    null === a.metaInfo.id.value() && l.saveChartOrShowTitleDialog()
                }
            }
            var ve = o(760396),
                fe = o(868151),
                we = o(104436),
                be = o(608280);

            function ye(e) {
                const {
                    model: t,
                    onRestore: n,
                    onSave: s,
                    isDrawingFinished: a,
                    className: l,
                    ...c
                } = e, [d, h] = (0, i.useState)(!1), [u, p] = (0, i.useState)(null), m = (0, i.useRef)(null);
                (0, i.useEffect)((() => {
                    var e;
                    null === (e = m.current) || void 0 === e || e.update()
                }), [d]);
                const g = (0, i.useMemo)((() => {
                        if (s) return () => {
                            t.showSaveDialog((e => {
                                t.saveTemplate(e, JSON.stringify(s()))
                            }))
                        }
                    }), [t, s]),
                    _ = (0, i.useMemo)((() => {
                        const e = [];
                        return a && g && e.push(new j.Action({
                            actionId: "Chart.LineTool.Templates.SaveAs",
                            label: (0, fe.appendEllipsis)(r.t(null, void 0, o(933751))),
                            onExecute: g
                        })), e.push(new j.Action({
                            actionId: "Chart.LineTool.Templates.ApplyDefaults",
                            label: r.t(null, void 0, o(486528)),
                            onExecute: n
                        })), d ? e.push(new j.Loader("Chart.LineTool.Templates.Apply")) : !d && (null == u ? void 0 : u.length) && (e.push(new j.Separator), e.push(...u.map((e => new j.Action({
                            actionId: "Chart.LineTool.Templates.Apply",
                            label: e,
                            onExecute: () => function(e) {
                                void 0 !== e && t.loadTemplate(e)
                            }(e),
                            showToolboxOnHover: !0,
                            toolbox: {
                                type: we.ToolboxType.Delete,
                                action: () => t.deleteAction(e)
                            }
                        }))))), e
                    }), [g, n, u, t, a, d]);
                return i.createElement(H.ToolWidgetMenu, {
                    title: r.t(null, void 0, o(891900)),
                    content: i.createElement(V.Icon, {
                        icon: be
                    }),
                    onOpen: function() {
                        h(!0), t.templatesLoaded().then((() => {
                            const e = t.getData();
                            void 0 !== e && (p(e), h(!1))
                        })), (0, E.trackEvent)("GUI", "Context action on drawings", "Templates")
                    },
                    arrow: !1,
                    className: l,
                    "data-name": "templates",
                    menuDataName: "templates-menu",
                    ref: m,
                    ...c
                }, i.createElement(U.ActionsTable, {
                    items: _
                }))
            }
            var Ce = o(87225),
                Te = o(359663);
            const Ee = (!a.enabled("widget") || window.is_authenticated) && a.enabled("linetoolpropertieswidget_template_button"),
                xe = new s.TranslatedString("change line tool(s) font size", r.t(null, void 0, o(436819))),
                Se = new s.TranslatedString("change line tool(s) line style", r.t(null, void 0, o(654769))),
                Pe = new s.TranslatedString("apply drawing template", r.t(null, void 0, o(349037))),
                Le = r.t(null, void 0, o(389517)),
                We = r.t(null, void 0, o(734596)),
                ke = r.t(null, void 0, o(141610)),
                Be = r.t(null, void 0, o(832733)),
                Ne = r.t(null, void 0, o(417006));
            class Me {
                constructor(e) {
                    this._isDrawingFinished = new(c())(!0), this._currentTool = null, this._updateVisibilityTimeout = null, this._lineWidthsProperty = null, this._lineColorsProperty = null, this._currentProperties = null, this._container = null, this._toolbarRendered = !1, this._toolbarVisible = !1, this._propertiesVisible = !1, this._templatesButton = null, this._propertyButtons = [], this._commonButtons = [], this._handleSourceEdit = e => {
                            u.isDirectionalMovementActive.value() || (e ? this._floatingToolbar.hide(!0) : this._toolbarRendered && this._floatingToolbar.show())
                        }, this._chartWidgetCollection = e, this._floatingToolbar = new le({
                            defaultPosition: {
                                top: ce.HEADER_TOOLBAR_HEIGHT_EXPANDED + 15,
                                left: window.innerWidth / 2
                            },
                            positionSettingsKey: "properties_toolbar.position",
                            positionStorageType: "device",
                            layout: "horizontal",
                            "data-name": "drawing-toolbar"
                        }), this._container = this._floatingToolbar.getReactWidgetContainer(), this._isToolMovingNowSpawn = u.isToolMovingNow.spawn(), this._isToolEditingNowSpawn = u.isToolEditingNow.spawn(), this._toolSpawn = u.tool.spawn(), this._iconToolSpawn = u.iconTool.spawn(), this._emojiToolSpawn = u.emojiTool.spawn(), this._selectedSourcesSpawn = this._chartWidgetCollection.selectedSources.spawn(), this._isToolMovingNowSpawn.subscribe(this._handleSourceEdit), this._isToolEditingNowSpawn.subscribe(this._handleSourceEdit), this._toolSpawn.subscribe(this._onToolChanged.bind(this), {
                            callWithLast: !0
                        }),
                        this._iconToolSpawn.subscribe((() => this._onToolChanged(u.tool.value()))), this._emojiToolSpawn.subscribe((() => this._onToolChanged(u.tool.value()))), this._selectedSourcesSpawn.subscribe((() => this.onSourceChanged(this.selectedSources()))), this._chartWidgetCollection.onAboutToBeDestroyed.subscribe(this, this.destroy, !0)
                }
                destroy() {
                    this._isToolMovingNowSpawn.destroy(), this._isToolEditingNowSpawn.destroy(), this._toolSpawn.destroy(), this._iconToolSpawn.destroy(), this._emojiToolSpawn.destroy(), this._selectedSourcesSpawn.destroy()
                }
                refresh() {
                    this.onSourceChanged(this.selectedSources())
                }
                onSourceChanged(e) {
                    if (!(null == e ? void 0 : e.length)) return this._propertiesVisible = !1, this._toolbarVisible = !1, void this.hide();
                    if (this._createCommonButtons(), e.every((t => t.toolname === e[0].toolname)) ? this._showTemplatesOf({
                            sources: e
                        }) : this._templatesButton && this._clearTemplatesButton(), 1 === e.length) {
                        const t = e[0];
                        t.isAvailableInFloatingWidget() && this.activeChartWidget().model().model().dataSourceForId(t.id()) ? (!t.userEditEnabled() || !(0, h.isLineDrawnWithPressedButton)(t.toolname) && this.activeChartWidget().model().lineBeingCreated() || this._isDrawingFinished.setValue(!0), this.showPropertiesOf(t.toolname, t.properties(), !0), this._toolbarVisible = !0) : this.hide()
                    } else this._clearProperties(), this._createWidthsButton(void 0, !0), this._createColorsButton(void 0, !0), this._createBackgroundsButton(void 0, !0), this._createTextColorsButton(void 0, !0), this._propertiesVisible = !0;
                    this._updateVisibility()
                }
                activeChartWidget() {
                    return this._chartWidgetCollection.activeChartWidget.value()
                }
                selectedSources() {
                    return this._chartWidgetCollection.selectedSources.value().filter(h.isLineTool)
                }
                hide() {
                    var e;
                    this._updateVisibilityTimeout && clearTimeout(this._updateVisibilityTimeout), this._updateVisibilityTimeout = setTimeout((() => {
                        (0, h.unsetNewToolProperties)(), this._floatingToolbar.hide(!0), this._isToolbarRendered() && this._unmountToolbar(), this._clearProperties(), this._clearCommonButtons()
                    }), 0), null === (e = this._lineToolsDoNotAffectChartInvalidation) || void 0 === e || e.destroy(), delete this._lineToolsDoNotAffectChartInvalidation, delete this._propertyApplier
                }
                templatesList() {
                    return this._templatesList
                }
                _onToolChanged(e, t) {
                    this._currentTool = e;
                    const o = this.selectedSources();
                    if (this._isDrawingToolExcludingCustomUrlEventTool(e)) {
                        if (this._isDrawingFinished.setValue(!1), Ee) {
                            const o = t instanceof Ce.DefaultProperty ? t : (0, h.setNewToolProperties)(e, "LineToolIcon" === e ? u.iconTool.value() : "LineToolEmoji" === e ? u.emojiTool.value() : void 0, this._chartWidgetCollection.activeChartWidget.value().model().model());
                            this.showPropertiesOf(e, o, t instanceof Ce.DefaultProperty), this._showTemplatesOf({
                                tool: e,
                                properties: o
                            }), this._toolbarVisible = !0
                        }
                        this._updateVisibility()
                    } else o && o.length ? (o.length > 1 && this._isDrawingFinished.setValue(!0), this.onSourceChanged(this.selectedSources())) : this.hide()
                }
                _propertyApplierImpl() {
                    return this._propertyApplier || (this._lineToolsDoNotAffectChartInvalidation || (this._lineToolsDoNotAffectChartInvalidation = new Te.FeatureToggleWatchedValue("do_not_invalidate_chart_on_changing_line_tools", !1)),
                        this._propertyApplier = new he.PropertyApplierWithoutSavingChart((() => this.activeChartWidget().model()), this._lineToolsDoNotAffectChartInvalidation)), this._propertyApplier
                }
                _clearProperties() {
                    this._clearPropertyButtons(), this._lineWidthsProperty && (this._lineWidthsProperty.destroy(), this._lineWidthsProperty = null), this._lineColorsProperty && (this._lineColorsProperty.destroy(), this._lineColorsProperty = null), this._currentProperties && (this._currentProperties = null)
                }
                _show() {
                    this._updateVisibilityTimeout && clearTimeout(this._updateVisibilityTimeout), this._updateVisibilityTimeout = setTimeout((() => {
                        this._renderToolbar(), this._floatingToolbar.show(), this._floatingToolbar.checkPosition()
                    }), 0)
                }
                _addPropertyButton(e) {
                    this._propertyButtons.push(e), this._renderToolbar()
                }
                _addCommonButton(e) {
                    this._commonButtons.push(e), this._renderToolbar()
                }
                _addTemplatesButton(e) {
                    this._templatesButton = e
                }
                _renderToolbar() {
                    null !== this._container && this.activeChartWidget() && this.activeChartWidget().hasModel() && (n.render(i.createElement(T, {
                        templateButton: this._templatesButton,
                        propertyButtons: this._propertyButtons,
                        commonButtons: this._commonButtons,
                        isDrawingFinished: this._isDrawingFinished.value(),
                        activeChartWidget: this.activeChartWidget()
                    }), this._container), this._toolbarRendered = !0)
                }
                _unmountToolbar() {
                    null !== this._container && (n.unmountComponentAtNode(this._container), this._toolbarRendered = !1)
                }
                _clearTemplatesButton() {
                    this._templatesButton = null
                }
                _clearPropertyButtons() {
                    this._propertyButtons = []
                }
                _clearCommonButtons() {
                    this._commonButtons = []
                }
                _isToolbarRendered() {
                    return this._toolbarRendered
                }
                _createSettingsButton() {
                    const e = {
                        component: P,
                        props: {
                            title: Le,
                            activeChartWidget: this.activeChartWidget()
                        }
                    };
                    this._addCommonButton(e)
                }
                _createLockButton() {
                    const e = {
                        component: D,
                        props: {
                            title: "Lock",
                            activeChartWidget: this.activeChartWidget()
                        }
                    };
                    this._addCommonButton(e)
                }
                _createRemoveButton() {
                    const e = {
                        component: O,
                        props: {
                            title: We,
                            activeChartWidget: this.activeChartWidget()
                        },
                        showForSmallScreen: !0
                    };
                    this._addCommonButton(e)
                }
                _createDotsButton() {
                    this._addCommonButton({
                        component: X,
                        props: {
                            title: ke,
                            activeChartWidget: this.activeChartWidget()
                        },
                        showForSmallScreen: !0
                    })
                }
                _createAlertButton() {
                    if (this.selectedSources().length > 1) return;
                    const e = this.selectedSources()[0];
                    if (!e || !(0, de.isDataSource)(e) || !e.canHasAlert()) return;
                    const t = e.ownerSource();
                    if (!(null == t ? void 0 : t.alertCreationAvailable().value())) return;
                    const o = {
                        component: _e,
                        props: {
                            title: "Alert",
                            activeChartWidget: this.activeChartWidget()
                        }
                    };
                    this._addCommonButton(o)
                }
                _createSourceActions() {
                    a.enabled("alerts") && this._createAlertButton(), this._createLockButton()
                }
                _createLineStyleButton(e) {
                    const t = this.selectedSources();
                    if (0 === t.length) return !1;
                    const o = t[0];
                    if (!(0, de.isDataSource)(o)) return !1;
                    const i = {
                        component: oe,
                        props: {
                            property: o.properties().linestyle || e,
                            title: Be,
                            propertyApplier: this._propertyApplierImpl(),
                            "data-name": "style",
                            undoText: Se
                        }
                    };
                    return this._addPropertyButton(i), !0
                }
                _createFontSizeButton(e) {
                    const t = this.selectedSources();
                    if (0 === t.length) return !1;
                    const o = t[0];
                    if (!(0, de.isDataSource)(o)) return !1;
                    const i = {
                        component: re,
                        props: {
                            property: o.properties().fontsize || e,
                            title: Ne,
                            propertyApplier: this._propertyApplierImpl(),
                            "data-name": "font-size",
                            undoText: xe
                        }
                    };
                    return this._addPropertyButton(i), !0
                }
                _createCommonButtons() {
                    this._commonButtons.length && this._clearCommonButtons(), a.enabled("property_pages") && this._createSettingsButton(), this._createSourceActions(), this._createRemoveButton(), this._createDotsButton()
                }
                _prepareProperties(e) {
                    const t = this.selectedSources().filter((t => t.properties()[e]));
                    if (!(t.filter((t => t.properties()[e].visible())).length < 1)) return t.map((t => t.properties()[e])).filter(d.notNull)
                }
                _createProperty(e, t, o, i) {
                    if (t) {
                        const e = this._prepareProperties(o);
                        if (!e) return;
                        return this._isWidthProperty(e[0]) ? new v(new p.MultipleLineWidthsProperty(e), this._propertyApplierImpl(), i) : new f.CollectibleColorPropertyUndoWrapper(new p.MultipleLineColorsProperty(e), this._propertyApplierImpl(), i)
                    }
                    if (e && e.visible()) return this._isWidthProperty(e) ? new p.MultipleLineWidthsProperty([e]) : new f.CollectibleColorPropertyDirectWrapper(new p.MultipleLineColorsProperty([e]))
                }
                _shouldShowBackgroundProperty(e, t) {
                    return !t || !t.fillBackground || !!t.fillBackground.value()
                }
                _isDrawingToolExcludingCustomUrlEventTool(e) {
                    return Boolean(null == e ? void 0 : e.toLowerCase().includes("linetool")) && "LineToolTweet" !== e && "LineToolIdea" !== e && "LineToolImage" !== e
                }
                _updateVisibility() {
                    (Ee || this._isDrawingFinished.value()) && (this._toolbarVisible || this._propertiesVisible) ? this._show(): this.hide()
                }
                _showTemplatesOf(e) {
                    if (!a.enabled("drawing_templates")) return;
                    if (this._templatesButton && this._clearTemplatesButton(), !Ee) return;
                    let t, o, i, n;
                    if ("sources" in e) {
                        if (t = e.sources, o = t[0].toolname, i = t[0].properties(), 1 === t.length) {
                            const e = t[0];
                            n = () => e.template()
                        }
                    } else o = e.tool, i = e.properties;
                    this._templatesList = new ve.LinetoolTemplatesList(o, (e => {
                        if (t) {
                            const o = this.activeChartWidget().model();
                            o.beginUndoMacro(Pe), t.forEach((t => o.applyLineToolTemplate(t, e, Pe))), o.endUndoMacro(), this.onSourceChanged(t)
                        } else i.mergeAndFire(e), i.saveDefaults(), this._onToolChanged(o, i)
                    })), this._addTemplatesButton({
                        component: ye,
                        props: {
                            key: "Templates",
                            model: this._templatesList,
                            onSave: n,
                            onRestore: () => {
                                void 0 !== t ? this.activeChartWidget().model().restoreLineToolsFactoryDefaults(t) : i.restoreFactoryDefaults(), this.refresh()
                            }
                        }
                    })
                }
                _isWidthProperty(e) {
                    return e instanceof p.LineToolWidthsProperty
                }
            }
        },
        760396: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                LinetoolTemplatesList: () => d
            });
            var i = o(777754),
                n = o(870485),
                r = o(879597),
                s = o(809350),
                a = o(920389),
                l = o(779923),
                c = o(448302);
            class d {
                constructor(e, t) {
                    this._toolName = e, this._applyTemplate = t, this._templatesDeferred = this._loadData()
                }
                getData() {
                    return n.store.getState().templates[this._toolName]
                }
                templatesLoaded() {
                    return this._templatesDeferred
                }
                loadTemplate(e, t) {
                    n.store.dispatch((0, r.loadTemplate)(this._toolName, e, (e => {
                        this._applyTemplate(e), null == t || t()
                    })))
                }
                removeTemplate(e) {
                    n.store.dispatch((0, r.startRemoveTemplate)(this._toolName, e))
                }
                saveTemplate(e, t) {
                    const o = (0, s.clean)(e);
                    n.store.dispatch((0, r.saveTemplate)(this._toolName, o, t))
                }
                deleteAction(e) {
                    (0, a.runOrSignIn)((() => {
                        const t = i.t(null, {
                            replace: {
                                name: e
                            }
                        }, o(774935));
                        (0, l.showConfirm)({
                            text: t,
                            onConfirm: t => {
                                this.removeTemplate(e), t.dialogClose()
                            }
                        })
                    }), {
                        source: "Delete line tool template"
                    })
                }
                showSaveDialog(e) {
                    (0, a.runOrSignIn)((() => {
                        (0, l.showRename)({
                            title: i.t(null, void 0, o(933751)),
                            text: i.t(null, void 0, o(350912)) + ":",
                            maxLength: 64,
                            source: this.getData() || [],
                            autocompleteFilter: c.autocompleteFilter,
                            onRename: t => {
                                if (-1 !== (this.getData() || []).indexOf(t.newValue)) {
                                    const n = i.t(null, {
                                        replace: {
                                            name: t.newValue
                                        }
                                    }, o(571527));
                                    (0, l.showConfirm)({
                                        text: n,
                                        onConfirm: o => {
                                            e(t.newValue), o.dialogClose(), t.dialogClose()
                                        },
                                        onClose: t.focusInput
                                    }, t.innerManager)
                                } else e(t.newValue), t.dialogClose()
                            }
                        })
                    }), {
                        source: "Save line tool template",
                        sourceMeta: "Chart"
                    })
                }
                async _loadData() {
                    return new Promise((e => {
                        this.getData() ? e() : n.store.dispatch((0, r.getTemplates)(this._toolName, e))
                    }))
                }
            }
        },
        194492: (e, t, o) => {
            "use strict";
            var i = o(683890).TranslatedString,
                n = o(274785).LineToolPropertiesWidgetBase;
            const r = o(638745).ColorPickerButton,
                s = o(212259).LineWidthButton;
            var a = o(394071),
                l = o(621065),
                c = o(448984),
                d = new i("change line tool(s) color", o(777754).t(null, void 0, o(368519))),
                h = new i("change line tool(s) background color", o(777754).t(null, void 0, o(674350))),
                u = new i("change line tool(s) text color", o(777754).t(null, void 0, o(16631))),
                p = new i("change line tool(s) line width", o(777754).t(null, void 0, o(141648))),
                m = o(777754).t(null, void 0, o(940054)),
                g = o(777754).t(null, void 0, o(712928)),
                _ = o(777754).t(null, void 0, o(319221)),
                v = o(777754).t(null, void 0, o(121327)),
                f = o(777754).t(null, void 0, o(938455)),
                w = o(777754).t(null, void 0, o(671845)),
                b = o(777754).t(null, void 0, o(832733)),
                y = o(777754).t(null, void 0, o(23886)),
                C = o(777754).t(null, void 0, o(286327)),
                T = o(777754).t(null, void 0, o(447059)),
                E = o(777754).t(null, void 0, o(36785)),
                x = o(777754).t(null, void 0, o(749593)),
                S = o(777754).t(null, void 0, o(867455)),
                P = o(777754).t(null, void 0, o(179964)),
                L = o(777754).t(null, void 0, o(745320));
            class W extends n {
                constructor(e) {
                    super(e), this._templatesButton = null
                }
                _createWidthsButton(e, t) {
                    if (this._lineWidthsProperty && (this._lineWidthsProperty.destroy(), this._lineWidthsProperty = null), this._lineWidthsProperty = this._createProperty(e, t, "linesWidths", p), !this._lineWidthsProperty) return !0;
                    var o = C;
                    t && (1 !== this.selectedSources().filter((e => e.properties().linesWidths)).length && (o = T));
                    return this._addPropertyButton({
                        component: s,
                        props: {
                            title: o,
                            multipleProperty: this._lineWidthsProperty,
                            propertyApplier: this._propertyApplierImpl(),
                            "data-name": "line-tool-width",
                            undoText: p
                        }
                    }), !0
                }
                _createColorsButton(e, t) {
                    return this._lineColorsProperty && (this._lineColorsProperty.destroy(), this._lineColorsProperty = null), this._lineColorsProperty = this._createProperty(e, t, "linesColors", d), !this._lineColorsProperty || (this._addPropertyButton({
                        component: r,
                        props: {
                            icon: a,
                            title: g,
                            property: this._lineColorsProperty,
                            propertyApplier: this._propertyApplierImpl(),
                            "data-name": "line-tool-color",
                            undoText: d
                        }
                    }), !0)
                }
                _createBackgroundsButton(e, t) {
                    return this._backgroundsProperty && (this._backgroundsProperty.destroy(), this._backgroundsProperty = null), this._backgroundsProperty = this._createProperty(e, t, "backgroundsColors", h), !this._backgroundsProperty || (this._addPropertyButton({
                        component: r,
                        props: {
                            icon: l,
                            title: w,
                            property: this._backgroundsProperty,
                            propertyApplier: this._propertyApplierImpl(),
                            "data-name": "background-color",
                            undoText: h
                        }
                    }), !0)
                }
                _createTextColorsButton(e, t) {
                    return this._textColorsProperty && (this._textColorsProperty.destroy(), this._textColorsProperty = null), this._textColorsProperty = this._createProperty(e, t, "textsColors", u), !this._textColorsProperty || (this._addPropertyButton({
                        component: r,
                        props: {
                            icon: c,
                            title: v,
                            property: this._textColorsProperty,
                            propertyApplier: this._propertyApplierImpl(),
                            "data-name": "text-color",
                            undoText: u
                        }
                    }), !0)
                }
                _getPossibleProperty(e) {
                    for (var t = [], o = this._defaultToolProperties(), i = 0; i < o.length; i++) {
                        var n = o[i];
                        n.name in e && t.push(n)
                    }
                    return t
                }
                showPropertiesOf(e, t, o) {
                    this._toolExceptionCases || (this._toolExceptionCases = this._createToolExceptionCases());
                    var i = this._toolExceptionCases[e] || this._getPossibleProperty(t);
                    if (this._clearProperties(), this._propertiesVisible = !1, i.length) {
                        for (var n = {}, s = 0; s < i.length; s++) {
                            for (var a = i[s], l = t, c = a.name.split("."), d = 0; d < c.length; ++d) l = l && l[c[d]];
                            var h = a.showIf;
                            if ("function" != typeof h || h(l, t)) {
                                var u = a.factory;
                                if (u && u.call(this, l, o)) continue;
                                if (!l) continue;
                                if (this._propertiesVisible = !0, "combobox" !== a.inputType) {
                                    const e = {
                                        component: r,
                                        props: {
                                            icon: a.iconSvgCode,
                                            title: a.title,
                                            "data-name": a.dataName,
                                            property: l,
                                            propertyApplier: this._propertyApplierImpl(),
                                            undoText: a.undoText
                                        }
                                    };
                                    this._addPropertyButton(e);
                                    continue
                                }
                                n[a.name] = l
                            }
                        }
                        this._currentProperties = n
                    }
                }
                _defaultToolProperties() {
                    return [{
                        name: "linesColors",
                        inputType: "colorPicker",
                        iconSvgCode: a,
                        title: m,
                        factory: W.prototype._createColorsButton,
                        dataName: "line-tool-color"
                    }, {
                        name: "backgroundsColors",
                        inputType: "colorPicker",
                        iconSvgCode: l,
                        title: f,
                        factory: W.prototype._createBackgroundsButton,
                        dataName: "background-color",
                        showIf: this._shouldShowBackgroundProperty
                    }, {
                        name: "textsColors",
                        title: _,
                        inputType: "colorPicker",
                        iconSvgCode: c,
                        factory: W.prototype._createTextColorsButton,
                        dataName: "text-color"
                    }, {
                        name: "linesWidths",
                        inputType: "combobox",
                        factory: W.prototype._createWidthsButton
                    }, {
                        name: "linestyle",
                        title: b,
                        inputType: "combobox",
                        factory: W.prototype._createLineStyleButton
                    }]
                }
                _regressionToolExceptionCases() {
                    return [{
                        name: "linesWidths",
                        inputType: "combobox",
                        factory: W.prototype._createWidthsButton
                    }]
                }
                _pathExceptionCases() {
                    return [{
                        name: "linesColors",
                        inputType: "colorPicker",
                        iconSvgCode: a,
                        title: m,
                        factory: W.prototype._createColorsButton,
                        dataName: "line-tool-color"
                    }, {
                        name: "linesWidths",
                        inputType: "combobox",
                        factory: W.prototype._createWidthsButton
                    }, {
                        name: "lineStyle",
                        title: b,
                        inputType: "combobox",
                        factory: W.prototype._createLineStyleButton
                    }]
                }
                _riskPropertiesExceptionCases() {
                    return [{
                        name: "textcolor",
                        title: _,
                        inputType: "colorPicker",
                        iconSvgCode: c,
                        dataName: "text-color",
                        undoText: u
                    }, {
                        name: "profitBackground",
                        title: E,
                        inputType: "colorPicker",
                        iconSvgCode: l,
                        dataName: "background-color",
                        undoText: h
                    }, {
                        name: "stopBackground",
                        title: x,
                        inputType: "colorPicker",
                        iconSvgCode: l,
                        dataName: "background-color",
                        undoText: h
                    }]
                }
                _rangeExceptionCases() {
                    return [{
                        name: "linecolor",
                        inputType: "colorPicker",
                        iconSvgCode: a,
                        title: m,
                        dataName: "line-tool-color",
                        undoText: d
                    }, {
                        name: "backgroundColor",
                        inputType: "colorPicker",
                        iconSvgCode: l,
                        title: f,
                        dataName: "background-color",
                        showIf: this._shouldShowBackgroundProperty,
                        undoText: h
                    }, {
                        name: "linesWidths",
                        inputType: "combobox",
                        factory: W.prototype._createWidthsButton
                    }]
                }
                _brushPropertiesExceptionCase() {
                    return [{
                        name: "linesColors",
                        inputType: "colorPicker",
                        iconSvgCode: a,
                        title: m,
                        factory: W.prototype._createColorsButton,
                        dataName: "line-tool-color"
                    }, {
                        name: "backgroundsColors",
                        inputType: "colorPicker",
                        iconSvgCode: l,
                        title: f,
                        dataName: "background-color",
                        factory: W.prototype._createBackgroundsButton
                    }, {
                        name: "linesWidths",
                        inputType: "combobox",
                        factory: W.prototype._createWidthsButton
                    }]
                }
                _bezierPropertiesExceptionCases() {
                    return [{
                        name: "linesColors",
                        inputType: "colorPicker",
                        iconSvgCode: a,
                        title: m,
                        factory: W.prototype._createColorsButton,
                        dataName: "line-tool-color"
                    }, {
                        name: "backgroundsColors",
                        inputType: "colorPicker",
                        iconSvgCode: l,
                        dataName: "background-color",
                        title: f,
                        factory: W.prototype._createBackgroundsButton,
                        showIf: this._shouldShowBackgroundProperty
                    }, {
                        name: "linesWidths",
                        inputType: "combobox",
                        factory: W.prototype._createWidthsButton
                    }, {
                        name: "linestyle",
                        title: b,
                        inputType: "combobox",
                        factory: W.prototype._createLineStyleButton
                    }]
                }
                _textPropertiesExceptionCases() {
                    return [{
                        name: "color",
                        title: _,
                        inputType: "colorPicker",
                        iconSvgCode: c,
                        dataName: "text-color",
                        undoText: u
                    }, {
                        name: "backgroundColor",
                        title: f,
                        inputType: "colorPicker",
                        iconSvgCode: l,
                        dataName: "background-color",
                        showIf: this._shouldShowBackgroundProperty,
                        undoText: h
                    }, {
                        name: "fontsize",
                        title: y,
                        inputType: "combobox",
                        factory: W.prototype._createFontSizeButton
                    }]
                }
                _notePropertiesExceptionCases() {
                    return [{
                        name: "markerColor",
                        title: S,
                        inputType: "colorPicker",
                        iconSvgCode: a,
                        dataName: "line-tool-color",
                        undoText: d
                    }, {
                        name: "textColor",
                        title: _,
                        inputType: "colorPicker",
                        iconSvgCode: c,
                        dataName: "text-color",
                        undoText: u
                    }, {
                        name: "fontSize",
                        title: y,
                        inputType: "combobox",
                        factory: W.prototype._createFontSizeButton
                    }]
                }
                _createToolExceptionCases() {
                    return {
                        LineToolBrush: W.prototype._brushPropertiesExceptionCase(),
                        LineToolBezierQuadro: W.prototype._bezierPropertiesExceptionCases(),
                        LineToolBezierCubic: W.prototype._bezierPropertiesExceptionCases(),
                        LineToolText: W.prototype._textPropertiesExceptionCases(),
                        LineToolTextAbsolute: W.prototype._textPropertiesExceptionCases(),
                        LineToolBalloon: W.prototype._textPropertiesExceptionCases(),
                        LineToolComment: W.prototype._textPropertiesExceptionCases(),
                        LineToolCallout: W.prototype._textPropertiesExceptionCases(),
                        LineToolPriceLabel: W.prototype._textPropertiesExceptionCases(),
                        LineToolDateRange: W.prototype._rangeExceptionCases(),
                        LineToolPriceRange: W.prototype._rangeExceptionCases(),
                        LineToolDateAndPriceRange: W.prototype._rangeExceptionCases(),
                        LineToolNote: W.prototype._notePropertiesExceptionCases(),
                        LineToolNoteAbsolute: W.prototype._notePropertiesExceptionCases(),
                        LineToolRiskRewardLong: W.prototype._riskPropertiesExceptionCases(),
                        LineToolRiskRewardShort: W.prototype._riskPropertiesExceptionCases(),
                        LineToolPath: W.prototype._pathExceptionCases(),
                        LineToolRegressionTrend: W.prototype._regressionToolExceptionCases(),
                        LineToolBarsPattern: [{
                            name: "color",
                            title: m,
                            inputType: "colorPicker",
                            iconSvgCode: l,
                            dataName: "background-color",
                            undoText: d
                        }],
                        LineToolProjection: [{
                            name: "color1",
                            title: P,
                            inputType: "colorPicker",
                            iconSvgCode: l,
                            dataName: "background-color",
                            undoText: h
                        }, {
                            name: "color2",
                            title: L,
                            inputType: "colorPicker",
                            iconSvgCode: l,
                            dataName: "background-color",
                            undoText: h
                        }, {
                            name: "linesWidths",
                            inputType: "combobox",
                            factory: W.prototype._createWidthsButton
                        }],
                        LineToolSignpost: [{
                            name: "linesColors",
                            inputType: "colorPicker",
                            iconSvgCode: l,
                            dataName: "background-color",
                            title: m,
                            factory: W.prototype._createBackgroundsButton,
                            showIf: function(e, t) {
                                return t && t.showImage.value()
                            }
                        }, {
                            name: "fontSize",
                            title: y,
                            inputType: "combobox",
                            factory: W.prototype._createFontSizeButton
                        }]
                    }
                }
            }
            e.exports = W
        },
        879597: (e, t, o) => {
            "use strict";
            o.d(t, {
                getTemplates: () => n,
                setTemplates: () => r,
                addTemplate: () => s,
                startRemoveTemplate: () => a,
                removeTemplate: () => l,
                saveTemplate: () => c,
                loadTemplate: () => d
            });
            var i = o(245727);

            function n(e, t) {
                return {
                    type: i.GET_TEMPLATES,
                    toolName: e,
                    callback: t
                }
            }

            function r(e, t) {
                return {
                    type: i.SET_TEMPLATES,
                    templates: t,
                    toolName: e
                }
            }

            function s(e, t) {
                return {
                    type: i.ADD_TEMPLATE,
                    templateName: t,
                    toolName: e
                }
            }

            function a(e, t) {
                return {
                    type: i.START_REMOVE_TEMPLATE,
                    templateName: t,
                    toolName: e
                }
            }

            function l(e, t) {
                return {
                    type: i.REMOVE_TEMPLATE,
                    templateName: t,
                    toolName: e
                }
            }

            function c(e, t, o) {
                return {
                    type: i.SAVE_TEMPLATE,
                    templateName: t,
                    toolName: e,
                    content: o
                }
            }

            function d(e, t, o) {
                return {
                    type: i.LOAD_TEMPLATE,
                    toolName: e,
                    templateName: t,
                    callback: o
                }
            }
        },
        245727: (e, t, o) => {
            "use strict";

            function i(e) {
                return "LINE_TOOL_TEMPLATE__" + e
            }
            o.d(t, {
                GET_TEMPLATES: () => n,
                SET_TEMPLATES: () => r,
                START_REMOVE_TEMPLATE: () => s,
                REMOVE_TEMPLATE: () => a,
                SAVE_TEMPLATE: () => l,
                ADD_TEMPLATE: () => c,
                LOAD_TEMPLATE: () => d
            });
            const n = i("GET_TEMPLATES"),
                r = i("SET_TEMPLATES"),
                s = i("START_REMOVE_TEMPLATE"),
                a = i("REMOVE_TEMPLATE"),
                l = i("SAVE_TEMPLATE"),
                c = i("ADD_TEMPLATE"),
                d = i("LOAD_TEMPLATE")
        },
        870485: (e, t, o) => {
            "use strict";
            o.d(t, {
                store: () => C
            });
            var i = o(691622),
                n = o(254773),
                r = o(336349),
                s = o(650151),
                a = o(245727),
                l = o(272001),
                c = o(879597);

            function d(e, t) {
                return t
            }
            var h = o(472664);
            const u = (0, l.getLogger)("Chart.LineToolTemplatesList");

            function p(e, t) {
                return t
            }

            function* m() {
                for (;;) {
                    const {
                        toolName: e,
                        templateName: t,
                        content: o
                    } = p(a.SAVE_TEMPLATE, yield(0, r.take)(a.SAVE_TEMPLATE));
                    try {
                        yield(0, r.call)(h.backend.saveDrawingTemplate, e, t, o), yield(0, r.put)((0, c.addTemplate)(e, t))
                    } catch (e) {
                        u.logWarn(e)
                    }
                }
            }

            function* g() {
                for (;;) {
                    const {
                        toolName: e,
                        templateName: t
                    } = p(a.START_REMOVE_TEMPLATE, yield(0, r.take)(a.START_REMOVE_TEMPLATE));
                    try {
                        yield(0, r.call)(h.backend.removeDrawingTemplate, e, t), yield(0, r.put)((0, c.removeTemplate)(e, t))
                    } catch (e) {
                        u.logWarn(e)
                    }
                }
            }

            function* _() {
                const e = new Map;
                for (;;) {
                    const {
                        toolName: o,
                        callback: i
                    } = p(a.GET_TEMPLATES, yield(0, r.take)(a.GET_TEMPLATES));
                    e.has(o) ? (0, s.ensureDefined)(e.get(o)).push(i) : (e.set(o, [i]), yield(0, r.fork)(t, o))
                }

                function* t(t) {
                    try {
                        const e = d(h.backend.getDrawingTemplates, yield(0, r.call)(h.backend.getDrawingTemplates, t));
                        yield(0, r.put)((0, c.setTemplates)(t, e))
                    } catch (e) {
                        u.logWarn(e)
                    }(0, s.ensureDefined)(e.get(t)).forEach((e => null == e ? void 0 : e())), e.delete(t)
                }
            }

            function* v() {
                for (;;) {
                    const {
                        toolName: e,
                        templateName: t,
                        callback: o
                    } = p(a.LOAD_TEMPLATE, yield(0, r.take)(a.LOAD_TEMPLATE));
                    try {
                        const i = d(h.backend.loadDrawingTemplate, yield(0, r.call)(h.backend.loadDrawingTemplate, e, t));
                        o && o(i)
                    } catch (e) {
                        u.logWarn(e)
                    }
                }
            }

            function* f() {
                yield(0, r.all)([(0, r.call)(_), (0, r.call)(m), (0, r.call)(g), (0, r.call)(v)])
            }
            const w = {
                templates: {}
            };

            function b(e, t) {
                return e.localeCompare(t, void 0, {
                    numeric: !0
                })
            }

            function y(e = w, t) {
                switch (t.type) {
                    case a.ADD_TEMPLATE:
                        {
                            const {
                                toolName: o,
                                templateName: i
                            } = t;
                            if (!e.templates[o].includes(i)) {
                                const t = [...e.templates[o], i].sort(b);
                                return { ...e,
                                    templates: { ...e.templates,
                                        [o]: t
                                    }
                                }
                            }
                            return e
                        }
                    case a.SET_TEMPLATES:
                        {
                            const {
                                toolName: o,
                                templates: i
                            } = t;
                            return { ...e,
                                templates: { ...e.templates,
                                    [o]: [...i].sort(b)
                                }
                            }
                        }
                    case a.REMOVE_TEMPLATE:
                        {
                            const {
                                toolName: o,
                                templateName: i
                            } = t;
                            return { ...e,
                                templates: { ...e.templates,
                                    [o]: e.templates[o].filter((e => e !== i))
                                }
                            }
                        }
                    default:
                        return e
                }
            }
            const C = function() {
                const e = (0, n.default)(),
                    t = (0, i.createStore)(y, (0, i.applyMiddleware)(e));
                return e.run(f), t
            }()
        },
        360491: (e, t, o) => {
            "use strict";
            o.d(t, {
                CollectibleColorPropertyUndoWrapper: () => a,
                CollectibleColorPropertyDirectWrapper: () => l
            });
            var i = o(650151),
                n = o(40210),
                r = o.n(n);
            class s extends(r()) {
                constructor(e) {
                    super(), this._listenersMappers = [], this._isProcess = !1, this._baseProperty = e
                }
                destroy() {
                    this._baseProperty.destroy()
                }
                value() {
                    const e = this._baseProperty.value();
                    return "mixed" === e ? "" : e
                }
                visible() {
                    return this._baseProperty.visible()
                }
                setValue(e) {
                    this._isProcess = !0, this._baseProperty.setValue("" === e ? "mixed" : e, void 0, {
                        applyValue: this._applyValue.bind(this)
                    }), this._isProcess = !1, this._listenersMappers.forEach((e => {
                        e.method.call(e.obj, this)
                    }))
                }
                subscribe(e, t) {
                    const o = o => {
                            this._isProcess || t.call(e, this)
                        },
                        i = {
                            obj: e,
                            method: t,
                            callback: o
                        };
                    this._listenersMappers.push(i), this._baseProperty.subscribe(e, o)
                }
                unsubscribe(e, t) {
                    var o;
                    const n = (0, i.ensureDefined)(null === (o = this._listenersMappers.find((o => o.obj === e && o.method === t))) || void 0 === o ? void 0 : o.callback);
                    this._baseProperty.unsubscribe(e, n)
                }
                unsubscribeAll(e) {
                    this._baseProperty.unsubscribeAll(e)
                }
            }
            class a extends s {
                constructor(e, t, o) {
                    super(e), this._propertyApplier = t, this._undoText = o
                }
                _applyValue(e, t) {
                    this._propertyApplier.setProperty(e, t, this._undoText)
                }
            }
            class l extends s {
                _applyValue(e, t) {
                    e.setValue(t)
                }
            }
        },
        419821: (e, t, o) => {
            "use strict";
            o.d(t, {
                PropertyApplierWithoutSavingChart: () => i
            });
            class i {
                constructor(e, t) {
                    this._undoModelSupplier = e, this._featureToggle = t
                }
                setProperty(e, t, o) {
                    this._undoModelSupplier().setProperty(e, t, o, this._featureToggle.value())
                }
                beginUndoMacro(e) {
                    return this._undoModelSupplier().beginUndoMacro(e, this._shouldWeKeepChartValidated())
                }
                endUndoMacro() {
                    this._undoModelSupplier().endUndoMacro()
                }
                setWatchedValue(e, t, o) {
                    this._undoModelSupplier().undoHistory().setWatchedValue(e, t, o, !0)
                }
                _shouldWeKeepChartValidated() {
                    const e = this._undoModelSupplier().model().isAutoSaveEnabled().value();
                    return this._featureToggle.value() && e
                }
            }
        },
        354610: (e, t, o) => {
            "use strict";
            o.d(t, {
                lazyJqueryUI: () => a
            });
            o(823127);
            var i = o(823127);
            let n;
            async function r(e) {
                if (!(e in i.fn)) return n || (n = Promise.all([o.e(75196), o.e(33861)]).then(o.bind(o, 548428)).then()),
                    n
            }
            class s {
                constructor(e) {
                    this._$elem = e
                }
                draggable() {
                    const e = arguments,
                        t = this._$elem;
                    return r("draggable").then((() => t.draggable.apply(t, e)))
                }
                resizable() {
                    const e = arguments,
                        t = this._$elem;
                    return r("resizable").then((() => t.resizable.apply(t, e)))
                }
                sortable() {
                    const e = arguments,
                        t = this._$elem;
                    return r("sortable").then((() => t.sortable.apply(t, e)))
                }
                datepicker() {
                    const e = arguments,
                        t = this._$elem;
                    return r("datepicker").then((() => t.datepicker.apply(t, e)))
                }
            }

            function a(e) {
                return new s(i(e))
            }
        },
        448302: (e, t, o) => {
            "use strict";

            function i(e, t) {
                return Boolean("" === e || e && -1 !== t.toLowerCase().indexOf(e.toLowerCase()))
            }
            o.d(t, {
                autocompleteFilter: () => i
            })
        },
        366493: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5 20L11 14.5 16.5 9"/></svg>'
        },
        100578: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>'
        },
        379978: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>'
        },
        844996: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM19 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"/></svg>'
        },
        432146: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M8.5 6a3.5 3.5 0 0 0-2.93 5.42 8.53 8.53 0 0 1 4.85-4.85A3.48 3.48 0 0 0 8.5 6zM4 9.5c0 1.2.46 2.27 1.22 3.08A8.53 8.53 0 0 0 13.5 23a8.5 8.5 0 0 0 8.28-10.42A4.49 4.49 0 0 0 18.5 5c-1.2 0-2.27.46-3.08 1.22a8.53 8.53 0 0 0-3.84 0A4.49 4.49 0 0 0 4 9.5zm12.58-2.93a8.53 8.53 0 0 1 4.85 4.85 3.5 3.5 0 0 0-4.85-4.85zM6 14.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0zm8 .5V9h-1v5h-3v1h4z"/></svg>'
        },
        532787: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M8.5 6a3.5 3.5 0 0 0-2.926 5.422 8.527 8.527 0 0 1 4.848-4.848A3.482 3.482 0 0 0 8.5 6zM4 9.5c0 1.19.463 2.274 1.218 3.079A8.5 8.5 0 0 0 13.5 23h.5v-1h-.5a7.5 7.5 0 1 1 7.5-7.5v.5h1v-.5a8.53 8.53 0 0 0-.218-1.921 4.5 4.5 0 0 0-6.36-6.36 8.527 8.527 0 0 0-3.843-.001A4.5 4.5 0 0 0 4 9.5zm12.578-2.926a8.527 8.527 0 0 1 4.848 4.848 3.5 3.5 0 0 0-4.848-4.848zM13 14V9h1v6h-4v-1h3zm6 6h-4v1h4v4h1v-4h4v-1h-4v-4h-1v4z"/></svg>'
        },
        339750: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 15l5 5L23 9"/></svg>'
        },
        69311: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.7 9l4.65-4.65-.7-.7L9 8.29 4.35 3.65l-.7.7L8.29 9l-4.64 4.65.7.7L9 9.71l4.65 4.64.7-.7L9.71 9z"/></svg>'
        },
        123851: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" d="M4 13h5v1H4v-1zM12 13h5v1h-5v-1zM20 13h5v1h-5v-1z"/></svg>'
        },
        357740: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"><circle cx="9" cy="14" r="1"/><circle cx="4" cy="14" r="1"/><circle cx="14" cy="14" r="1"/><circle cx="19" cy="14" r="1"/><circle cx="24" cy="14" r="1"/></svg>'
        },
        200501: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M4 13.5h20"/></svg>'
        },
        636296: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8 9.5H6.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V20m-8-1.5h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1z"/></svg>'
        },
        621065: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" fill="none"><path stroke="currentColor" d="M13.5 6.5l-3-3-7 7 7.59 7.59a2 2 0 0 0 2.82 0l4.18-4.18a2 2 0 0 0 0-2.82L13.5 6.5zm0 0v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6"/><path fill="currentColor" d="M0 16.5C0 15 2.5 12 2.5 12S5 15 5 16.5 4 19 2.5 19 0 18 0 16.5z"/><circle fill="currentColor" cx="9.5" cy="9.5" r="1.5"/></svg>'
        },
        25388: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12" width="8" height="12" fill="currentColor"><rect width="2" height="2" rx="1"/><rect width="2" height="2" rx="1" y="5"/><rect width="2" height="2" rx="1" y="10"/><rect width="2" height="2" rx="1" x="6"/><rect width="2" height="2" rx="1" x="6" y="5"/><rect width="2" height="2" rx="1" x="6" y="10"/></svg>'
        },
        222978: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 1" width="18" height="1"><rect width="18" height="1" fill="currentColor" rx=".5"/></svg>'
        },
        114631: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 2" width="18" height="2"><rect width="18" height="2" fill="currentColor" rx="1"/></svg>'
        },
        206096: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 3" width="18" height="3"><rect width="18" height="3" fill="currentColor" rx="1.5"/></svg>'
        },
        206483: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 4" width="18" height="4"><rect width="18" height="4" fill="currentColor" rx="2"/></svg>'
        },
        266611: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><rect width="18" height="2" rx="1" x="5" y="14"/><rect width="18" height="1" rx=".5" x="5" y="20"/><rect width="18" height="3" rx="1.5" x="5" y="7"/></svg>'
        },
        394071: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="none"><path stroke="currentColor" d="M1.5 11.5l-.7.7a1 1 0 0 0-.3.71v3.59h3.59a1 1 0 0 0 .7-.3l.71-.7m-4-4l9-9m-9 9l2 2m2 2l9-9m-9 9l-2-2m11-7l1.3-1.3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0l-1.3 1.3m4 4l-4-4m-7 11l9-9"/></svg>'
        },
        608280: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor"><path stroke-linecap="round" d="M15.5 18.5h6m-3 3v-6"/><rect width="6" height="6" rx="1.5" x="6.5" y="6.5"/><rect width="6" height="6" rx="1.5" x="15.5" y="6.5"/><rect width="6" height="6" rx="1.5" x="6.5" y="15.5"/></svg>'
        },
        448984: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 15" width="13" height="15" fill="none"><path stroke="currentColor" d="M4 14.5h2.5m2.5 0H6.5m0 0V.5m0 0h-5a1 1 0 0 0-1 1V4m6-3.5h5a1 1 0 0 1 1 1V4"/></svg>'
        },
        561964: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentcolor" fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5V7.05l.4.09c.9.18 1.73.53 2.46 1.02l.34.23.29-.3.81-.8c.2-.2.52-.2.71 0l.7.7.36-.35-.35.35c.2.2.2.51 0 .7l-.82.82-.29.29.23.34c.49.73.84 1.57 1.02 2.46l.08.4H22.5c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5H20.95l-.09.4c-.18.9-.53 1.73-1.02 2.46l-.23.34.3.29.8.81c.2.2.2.52 0 .71l-.7.7a.5.5 0 0 1-.7 0l-.82-.8-.29-.3-.34.23c-.73.49-1.57.84-2.46 1.02l-.4.08V22.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V20.95l-.4-.09a6.96 6.96 0 0 1-2.46-1.02l-.34-.23-.29.3-.81.8.35.36-.35-.35a.5.5 0 0 1-.71 0l-.7-.71a.5.5 0 0 1 0-.7l-.36-.36.35.35.82-.81.29-.29-.23-.34a6.96 6.96 0 0 1-1.02-2.46l-.08-.4H5.5a.5.5 0 0 1-.5-.5v-1c0-.28.22-.5.5-.5H7.05l.09-.4c.18-.9.53-1.73 1.02-2.46l.23-.34-.3-.29-.8-.81a.5.5 0 0 1 0-.71l.7-.7c.2-.2.51-.2.7 0l.82.8.29.3.34-.23a6.96 6.96 0 0 1 2.46-1.02l.4-.08V5.5zm.5-1.5c-.83 0-1.5.67-1.5 1.5v.75c-.73.2-1.43.48-2.06.86l-.54-.53a1.5 1.5 0 0 0-2.12 0l-.7.7a1.5 1.5 0 0 0 0 2.12l.53.54A7.95 7.95 0 0 0 6.25 12H5.5c-.83 0-1.5.67-1.5 1.5v1c0 .83.67 1.5 1.5 1.5h.75c.2.73.48 1.43.86 2.06l-.53.54a1.5 1.5 0 0 0 0 2.12l.7.7a1.5 1.5 0 0 0 2.12 0l.54-.53c.63.38 1.33.67 2.06.86v.75c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5v-.75a7.95 7.95 0 0 0 2.06-.86l.54.53a1.5 1.5 0 0 0 2.12 0l.7-.7a1.5 1.5 0 0 0 0-2.12l-.53-.54c.38-.63.67-1.33.86-2.06h.75c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-.75a7.95 7.95 0 0 0-.86-2.06l.53-.54a1.5 1.5 0 0 0 0-2.12l-.7-.7a1.5 1.5 0 0 0-2.12 0l-.54.53A7.95 7.95 0 0 0 16 6.25V5.5c0-.83-.67-1.5-1.5-1.5h-1zM12 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm2-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>'
        }
    }
]);
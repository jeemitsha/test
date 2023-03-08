(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [14193], {
        47060: t => {
            t.exports = {}
        },
        191030: t => {
            t.exports = {}
        },
        472855: t => {
            t.exports = {
                "css-value-chart-controls-bar-height": "38px",
                "css-value-chart-controls-bar-border": "1px",
                "css-value-chart-controls-bar-height-with-border": "39px"
            }
        },
        746326: (t, e, i) => {
            "use strict";

            function s(t) {
                const {
                    paddingTop: e,
                    paddingBottom: i
                } = window.getComputedStyle(t);
                return [e, i].reduce(((t, e) => t - Number((e || "").replace("px", ""))), t.clientHeight)
            }

            function n(t, e = !1) {
                const i = getComputedStyle(t),
                    s = [i.height];
                return "border-box" !== i.boxSizing && s.push(i.paddingTop, i.paddingBottom, i.borderTopWidth, i.borderBottomWidth), e && s.push(i.marginTop, i.marginBottom), s.reduce(((t, e) => t + (parseFloat(e) || 0)), 0)
            }

            function r(t, e = !1) {
                const i = getComputedStyle(t),
                    s = [i.width];
                return "border-box" !== i.boxSizing && s.push(i.paddingLeft, i.paddingRight, i.borderLeftWidth, i.borderRightWidth), e && s.push(i.marginLeft, i.marginRight), s.reduce(((t, e) => t + (parseFloat(e) || 0)), 0)
            }
            i.d(e, {
                contentHeight: () => s,
                outerHeight: () => n,
                outerWidth: () => r
            })
        },
        404573: (t, e, i) => {
            "use strict";
            i.d(e, {
                Draggable: () => a,
                PointerBackend: () => h
            });
            var s = i(650151),
                n = i(318557),
                r = i(638456),
                o = i(778785);
            class a {
                constructor(t) {
                    var e, i;
                    this._helper = null, this._handleDragStart = t => {
                        var e;
                        if (null !== this._helper) return;
                        const i = this._source;
                        i.classList.add("ui-draggable-dragging");
                        const [s, r] = [(0, n.outerWidth)(i), (0, n.outerHeight)(i)];
                        this._helper = {
                            startTop: parseFloat(i.style.top) || 0,
                            startLeft: parseFloat(i.style.left) || 0,
                            nextTop: null,
                            nextLeft: null,
                            raf: null,
                            size: [s, r],
                            containment: this._containment instanceof HTMLElement ? [parseInt(getComputedStyle(this._containment).borderLeftWidth) + parseInt(getComputedStyle(this._containment).paddingLeft), parseInt(getComputedStyle(this._containment).borderTopWidth) + parseInt(getComputedStyle(this._containment).paddingTop), this._containment.offsetWidth - parseInt(getComputedStyle(this._containment).borderRightWidth) - parseInt(getComputedStyle(this._containment).paddingRight) - parseInt(getComputedStyle(i).marginLeft) - parseInt(getComputedStyle(i).marginRight) - s, this._containment.offsetHeight - parseInt(getComputedStyle(this._containment).borderBottomWidth) - parseInt(getComputedStyle(this._containment).paddingBottom) - parseInt(getComputedStyle(i).marginTop) - parseInt(getComputedStyle(i).marginBottom) - r] : "window" === this._containment ? [window.scrollX, window.scrollY, window.scrollX + document.documentElement.offsetWidth - s, window.scrollY + document.documentElement.offsetHeight - r] : null
                        }, null === (e = this._start) || void 0 === e || e.call(this)
                    }, this._handleDragMove = t => {
                        var e;
                        if (null === this._helper) return;
                        const {
                            current: i,
                            initial: s
                        } = t.detail, n = this._source, r = this._helper.nextTop, o = this._helper.nextLeft, a = "y" === this._axis || !1 === this._axis || 0 !== i.movementY;
                        if (a) {
                            const t = this._helper.startTop;
                            isFinite(t) && (this._helper.nextTop = i.clientY - s.clientY + t)
                        }
                        const h = "x" === this._axis || !1 === this._axis || 0 !== i.movementY;
                        if (h) {
                            const t = this._helper.startLeft;
                            isFinite(t) && (this._helper.nextLeft = i.clientX - s.clientX + t)
                        }
                        if (null !== this._helper.containment) {
                            const [t, e, i, s] = this._helper.containment;
                            a && this._helper.nextTop && (this._helper.nextTop = Math.min(this._helper.nextTop, s), this._helper.nextTop = Math.max(this._helper.nextTop, e)), h && this._helper.nextLeft && (this._helper.nextLeft = Math.min(this._helper.nextLeft, i), this._helper.nextLeft = Math.max(this._helper.nextLeft, t))
                        }
                        null !== this._helper.raf || r === this._helper.nextTop && o === this._helper.nextLeft || (this._helper.raf = requestAnimationFrame((() => {
                            null !== this._helper && (null !== this._helper.nextTop && (n.style.top = this._helper.nextTop + "px", this._helper.nextTop = null), null !== this._helper.nextLeft && (n.style.left = this._helper.nextLeft + "px", this._helper.nextLeft = null), this._helper.raf = null)
                        }))), null === (e = this._drag) || void 0 === e || e.call(this)
                    }, this._handleDragStop = t => {
                        var e;
                        if (null === this._helper) return;
                        this._source.classList.remove("ui-draggable-dragging"), this._helper = null, null === (e = this._stop) || void 0 === e || e.call(this)
                    };
                    const s = this._source = t.source;
                    s.classList.add("ui-draggable");
                    const r = this._handle = null !== (e = t.handle ? s.querySelector(t.handle) : null) && void 0 !== e ? e : s;
                    r.classList.add("ui-draggable-handle"), this._start = t.start, this._stop = t.stop, this._drag = t.drag, this._backend = new h({
                        handle: r,
                        onDragStart: this._handleDragStart,
                        onDragMove: this._handleDragMove,
                        onDragStop: this._handleDragStop
                    }), this._axis = null !== (i = t.axis) && void 0 !== i && i, this._containment = t.containment
                }
                destroy() {
                    const t = this._source;
                    t.classList.remove("ui-draggable"), t.classList.remove("ui-draggable-dragging");
                    this._handle.classList.remove("ui-draggable-handle"), this._backend.destroy(), null !== this._helper && (this._helper.raf && cancelAnimationFrame(this._helper.raf), this._helper = null)
                }
            }
            class h {
                constructor(t) {
                    this._initial = null, this._handlePointerDown = t => {
                        if (null !== this._initial) return;
                        if (!(t.target instanceof Element && this._handle.contains(t.target))) return;
                        if (this._initial = t, !this._dispatchEvent(this._createEvent("pointer-drag-start", t))) return void(this._initial = null);
                        t.preventDefault();
                        const e = this._getEventTarget();
                        e.addEventListener("pointermove", this._handlePointerMove), e.addEventListener("pointerup", this._handlePointerUp), e.addEventListener("pointercancel", this._handlePointerUp), e.addEventListener("lostpointercapture", this._handlePointerUp), e.setPointerCapture(t.pointerId)
                    }, this._handlePointerMove = t => {
                        null !== this._initial && this._initial.pointerId === t.pointerId && (t.preventDefault(), this._dispatchEvent(this._createEvent("pointer-drag-move", t)))
                    }, this._handlePointerUp = t => {
                        if (null === this._initial || this._initial.pointerId !== t.pointerId) return;
                        t.preventDefault();
                        const e = this._getEventTarget();
                        e.removeEventListener("pointermove", this._handlePointerMove), e.removeEventListener("pointerup", this._handlePointerUp), e.removeEventListener("pointercancel", this._handlePointerUp), e.removeEventListener("lostpointercapture", this._handlePointerUp), e.releasePointerCapture(this._initial.pointerId), this._dispatchEvent(this._createEvent("pointer-drag-stop", t)), this._initial = null
                    };
                    const e = this._handle = t.handle;
                    this._onDragStart = t.onDragStart, this._onDragMove = t.onDragMove, this._onDragStop = t.onDragStop, e.style.touchAction = "none";
                    this._getEventTarget().addEventListener("pointerdown", this._handlePointerDown)
                }
                destroy() {
                    this._handle.style.touchAction = "";
                    const t = this._getEventTarget();
                    t.removeEventListener("pointerdown", this._handlePointerDown), t.removeEventListener("pointermove", this._handlePointerMove), t.removeEventListener("pointerup", this._handlePointerUp), t.removeEventListener("pointercancel", this._handlePointerUp), t.removeEventListener("lostpointercapture", this._handlePointerUp), null !== this._initial && (t.releasePointerCapture(this._initial.pointerId), this._initial = null)
                }
                _getEventTarget() {
                    return r.CheckMobile.iOS() || (0, r.isMac)() && o.touch ? window.document.documentElement : this._handle
                }
                _dispatchEvent(t) {
                    switch (t.type) {
                        case "pointer-drag-start":
                            this._onDragStart(t);
                            break;
                        case "pointer-drag-move":
                            this._onDragMove(t);
                            break;
                        case "pointer-drag-stop":
                            this._onDragStop(t)
                    }
                    return !t.defaultPrevented
                }
                _createEvent(t, e) {
                    return (0, s.assert)(null !== this._initial), new CustomEvent(t, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            backend: this,
                            initial: this._initial,
                            current: e
                        }
                    })
                }
            }
        },
        318557: (t, e, i) => {
            "use strict";
            i.d(e, {
                contentHeight: () => n.contentHeight,
                outerHeight: () => n.outerHeight,
                outerWidth: () => n.outerWidth,
                unwrap: () => r,
                html: () => o,
                position: () => h
            });
            var s = i(650151),
                n = i(746326);

            function r(t) {
                return t[0]
            }

            function o(t, e) {
                return void 0 === e || (null === e && (t.innerHTML = ""), "string" != typeof e && "number" != typeof e || (t.innerHTML = String(e))), t
            }

            function a(t) {
                if (!t.getClientRects().length) return {
                    top: 0,
                    left: 0
                };
                const e = t.getBoundingClientRect(),
                    i = (0, s.ensureNotNull)(t.ownerDocument.defaultView);
                return {
                    top: e.top + i.pageYOffset,
                    left: e.left + i.pageXOffset
                }
            }

            function h(t) {
                const e = getComputedStyle(t);
                let i, s = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === e.position) i = t.getBoundingClientRect();
                else {
                    i = a(t);
                    const e = t.ownerDocument;
                    let n = t.offsetParent || e.documentElement;
                    for (; n && (n === e.body || n === e.documentElement) && "static" === getComputedStyle(n).position;) n = n.parentElement;
                    n && n !== t && 1 === n.nodeType && (s = a(n), s.top += parseFloat(getComputedStyle(n).borderTopWidth), s.left += parseFloat(getComputedStyle(n).borderLeftWidth))
                }
                return {
                    top: i.top - s.top - parseFloat(e.marginTop),
                    left: i.left - s.left - parseFloat(e.marginLeft)
                }
            }
        },
        35611: (t, e, i) => {
            "use strict";
            i.d(e, {
                trackBottomPanelButtonClick: () => h,
                trackStrategyTesterButtonClick: () => l
            });
            var s = i(776734),
                n = i(632446),
                r = i(833813);
            const o = {
                Overview: "overview",
                "List of Trades": "list_of_trades",
                "Performance Summary": "performance_summary",
                Properties: "properties"
            };

            function a(t) {
                (0, s.getTracker)().then((e => {
                    null !== e && e.trackBottomToolbarButtonClick(t)
                }))
            }

            function h(t) {
                const e = [t.button];
                t.visibility && e.push(t.visibility), t.option && e.push(t.option), a(e.join(" "))
            }

            function l(t, e) {
                const i = ["strategy_tester"];
                if ((0, n.enabled)(r.ProductFeatures.DEEP_HISTORY_BACKTEST) && i.push(t), (null == e ? void 0 : e.activeTab) && i.push(o[e.activeTab]), null == e ? void 0 : e.button) {
                    const t = function(t) {
                            switch (t) {
                                case "Overview":
                                case "List of Trades":
                                case "Performance Summary":
                                case "Properties":
                                    return o[t];
                                default:
                                    return t
                            }
                        }(e.button),
                        s = e.isButtonOpen ? `${t}_open` : t;
                    i.push(s)
                }
                a(i.join(" "))
            }
        },
        718226: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                Bottomwidgetbar: () => v
            });
            var s = i(650151),
                n = i(988411),
                r = i.n(n),
                o = i(62802),
                a = i(293965),
                h = i(824379),
                l = i(318557),
                d = i(404573),
                c = i(833813),
                g = i(632446),
                _ = i(35611),
                u = i(472855);
            i(191030), i(47060);
            const p = parseInt(u["css-value-chart-controls-bar-height-with-border"]),
                m = {
                    screener: "screener",
                    scripteditor: "pine_editor",
                    backtesting: "strategy_tester",
                    paper_trading: "trading_panel",
                    menu: "more"
                };
            class v {
                constructor(t, e) {
                    this._draggable = null, this._inited = !1, this._widgetContents = new WeakMap, this._minHeight = 30, this._paddingTop = a.footerWidgetHeight, this.open = () => {
                        "minimized" === this._mode.value() && this._mode.setValue("normal")
                    }, this.close = () => {
                        this._mode.setValue("minimized")
                    }, this.toggleMaximize = () => {
                        switch (this._mode.value()) {
                            case "minimized":
                            case "normal":
                                this._trackResizeClick("maximize", "on"), this._mode.setValue("maximized");
                                break;
                            case "maximized":
                                this._trackResizeClick("maximize", "off"), this._mode.setValue("normal")
                        }
                    }, this.toggleMinimize = () => {
                        switch (this._mode.value()) {
                            case "minimized":
                                this._trackResizeClick("show"), this.open();
                                break;
                            case "normal":
                            case "maximized":
                                this._trackResizeClick("hide"), this.close()
                        }
                    }, this._mode = new(r()), this._isOverlap = new(r()), this._isVisible = new(r()), this._activeWidget = new(r()), this._widgets = {}, this._widgetsProperties = {}, this._normalHeight = new(r()), this._actualHeight = new(r()), this._userSettings = e, this._options = t || {}, this._config = t.config, this._enabledWidgets = (t && t.widgets || []).filter((t => t && Boolean(this._config[t]))), this._init(t)
                }
                activeWidget() {
                    return this._activeWidget.readonly()
                }
                footerWidgetContainer() {
                    return this._footerWidgetContainer
                }
                toggleWidget(t, e, i) {
                    return new Promise((s => {
                        "boolean" == typeof t ? t ? this.open() : this.close() : this.isWidgetEnabled(t) && (e ? this.open() : this.activeWidget().value() === t && "minimized" !== this.mode().value() ? this.close() : i || this.open(), this._activeWidget.setValue(t)), s()
                    }))
                }
                getWidgetByName(t) {
                    return this._widgets[t] || null
                }
                mode() {
                    return this._mode.readonly()
                }
                isOverlap() {
                    return this._isOverlap.readonly()
                }
                setNormalHeight(t) {
                    this._normalHeight.setValue(t)
                }
                destroy() {
                    this._draggable && (this._draggable.destroy(), this._draggable = null)
                }
                isWidgetEnabled(t) {
                    return this._enabledWidgets.includes(t)
                }
                activateTradingTab() {
                    return this.toggleWidget("paper_trading", !0).then((() => {
                        const t = this.getWidgetByName("paper_trading");
                        t && t.activate && t.activate()
                    }))
                }
                activateScriptEditorTab(t) {
                    this.toggleWidget("scripteditor", !0).then((() => {
                        const e = this._config.scripteditor;
                        e && e.ctor.open(t)
                    }))
                }
                turnOffMaximize() {
                    "maximized" === this._mode.value() && this.toggleMaximize()
                }
                enabledWidgets() {
                    return this._enabledWidgets.map((t => this._config[t]))
                }
                activeWidgetName() {
                    return this._activeWidget.value()
                }
                isVisible() {
                    return this._isVisible.readonly()
                }
                _init(t) {
                    if (!this._enabledWidgets.length || this._inited) return;
                    this._createLayout(this._options.resizerBridge.container.value());
                    const e = () => {
                            let t = 0;
                            switch (this._mode.value()) {
                                case "normal":
                                    t = this._normalHeight.value();
                                    break;
                                case "maximized":
                                    t = this._resizerAvailHeight()
                            }
                            const e = {
                                min: Math.min(this._getPaddingBoxHeight(t), this._getPaddingBoxHeight(this._minHeight)),
                                max: this._getPaddingBoxHeight(t)
                            };
                            this._options.resizerBridge.negotiateHeight(e)
                        },
                        i = () => {
                            const i = this._activeWidget.value();
                            if ("minimized" !== this._mode.value()) {
                                let e;
                                if (this._container.classList.remove("js-hidden"), this._container.style.height = this._actualHeight.value() + "px", Array.from(this._container.querySelectorAll(".bottom-widgetbar-content"), (t => {
                                        t.classList.add("js-hidden")
                                    })), Object.keys(this._widgets).forEach((t => {
                                        if (t === i) return;
                                        const e = this._widgets[t];
                                        e && e.hide && e.hide()
                                    })), this._widgets[i]) {
                                    const t = this._widgets[i];
                                    t && this._widgetContents.has(t) && (e = (0, s.ensureDefined)(this._widgetContents.get(t)), e.classList.remove("js-hidden"), t.show && t.show())
                                } else {
                                    e = document.createElement("div"), e.className = "bottom-widgetbar-content " + i, this._container.append(e), this._initWidgetProperties(i);
                                    const s = new(r());
                                    this._activeWidget.subscribe((t => {
                                        s.setValue(t === i)
                                    }), {
                                        callWithLast: !0
                                    });
                                    const n = () => {
                                            this.toggleWidget(i, !0)
                                        },
                                        o = this._config[i];
                                    if (o) {
                                        const r = o.ctor;
                                        this._widgets[i] = new r({
                                            container: e,
                                            bottomAreaContainer: this._container,
                                            height: this._actualHeight.readonly(),
                                            width: this._options.resizerBridge.width,
                                            bottomToolbarMode: this.mode(),
                                            visible: s.readonly(),
                                            properties: this._widgetsProperties[i],
                                            activate: n,
                                            close: () => this.close(),
                                            chartWidgetCollection: t.chartWidgetCollection || null,
                                            originalStandalone: "screener" === i,
                                            backtestingStrategyDispatcher: this._options.backtestingStrategyDispatcher,
                                            studyMarket: this._options.studyMarket
                                        })
                                    }
                                    const a = this._widgets[i];
                                    a && (this._widgetContents.set(a, e), a.disabled && a.disabled.subscribe((t => {
                                        this._loadingOverlay.classList.toggle("js-hidden", !t)
                                    })))
                                }
                            }
                            this._normalHeight.unsubscribe(e), this._normalHeight.subscribe(e), this._mode.unsubscribe(e), this._mode.subscribe(e), this._options.resizerBridge.availHeight.unsubscribe(e), this._options.resizerBridge.availHeight.subscribe(e), e(), this._save()
                        };
                    this._mode.subscribe(i), this._activeWidget.subscribe(i), this._normalHeight.subscribe((() => {
                        this._save()
                    })), this._mode.subscribe((() => {
                        this._save()
                    })), this._options.resizerBridge.height.subscribe((() => {
                        const t = this._options.resizerBridge.height.value(),
                            e = Math.max(this._getContentBoxHeight(t), 0);
                        this._container.style.height = e + "px", this._actualHeight.setValue(e)
                    }), {
                        callWithLast: !0
                    });
                    const {
                        mode: n
                    } = this._userSettings;
                    this._mode.setValue(n), this._registerWidgets(), this._loadState(), this._subscribeCheckOverlap(), this._subscribeVisibility(), this._inited = !0
                }
                _getContentBoxHeight(t) {
                    return t - this._paddingTop
                }
                _getPaddingBoxHeight(t) {
                    return t + this._paddingTop
                }
                _subscribeCheckOverlap() {
                    this._checkOverlap(), this._actualHeight.subscribe((() => {
                        this._checkOverlap()
                    })), this._mode.subscribe((() => {
                        this._checkOverlap()
                    })), this._options.resizerBridge.availHeight.subscribe((() => {
                        this._checkOverlap()
                    }))
                }
                _updateVisibility() {
                    this._isVisible.setValue(this._options.resizerBridge.visible.value())
                }
                _subscribeVisibility() {
                    this._updateVisibility(), this._options.resizerBridge.visible.subscribe((() => {
                        this._updateVisibility()
                    }))
                }
                _createLayout(t) {
                    t.innerHTML = "", this._footerWidgetContainer = document.createElement("div"),
                        this._footerWidgetContainer.style.height = a.footerWidgetHeight + "px", t.append(this._footerWidgetContainer), this._container = document.createElement("div"), this._container.id = "bottom-area", t.append(this._container);
                    const e = document.createElement("div");
                    e.className = "bottom-widgetbar-handle", this._container.append(e), e.addEventListener("contextmenu", (t => {
                        t.preventDefault()
                    }));
                    let i = null;
                    this._draggable = new d.PointerBackend({
                        handle: e,
                        onDragStart: t => {
                            const e = this._mode.value(),
                                s = this._normalHeight.value(),
                                n = "minimized" === this._mode.value() ? 0 : (0, l.contentHeight)(this._container);
                            i = {
                                startMode: e,
                                lastNormalHeight: s,
                                startHeight: n
                            }
                        },
                        onDragMove: t => {
                            if (null === i) return;
                            const {
                                startHeight: e
                            } = i, {
                                initial: s,
                                current: n
                            } = t.detail;
                            let r, o = e - (n.pageY - s.pageY);
                            o <= 0 ? (o = e, r = !0) : r = !1, o = Math.max(o, this._minHeight), isFinite(o) && ("minimized" === this._mode.value() !== r ? r ? (this._mode.setValue("minimized"), this.setNormalHeight(Math.max(e, this._minHeight))) : (this._mode.setValue("normal"), this.setNormalHeight(o)) : this._normalHeight.value() !== o && (o >= this._getContentBoxHeight(this._resizerAvailHeight()) ? (this._mode.setValue("maximized"), this.setNormalHeight(e)) : (this._mode.setValue("normal"), this.setNormalHeight(o))))
                        },
                        onDragStop: () => {
                            if (null === i) return;
                            const {
                                lastNormalHeight: t,
                                startMode: e
                            } = i;
                            i = null, t > 0 && "normal" !== this._mode.value() && "normal" !== e && this.setNormalHeight(t), this._save()
                        }
                    }), this._loadingOverlay = document.createElement("div"), this._loadingOverlay.className = "bottom-widgetbar-loading-overlay js-hidden", this._container.append(this._loadingOverlay)
                }
                _checkOverlap() {
                    const t = this._getPaddingBoxHeight(this._actualHeight.value()),
                        e = this._mode.value();
                    this._isOverlap.setValue("maximized" === e || "normal" === e && this._resizerAvailHeight() - t <= 300 + p)
                }
                _resizerAvailHeight() {
                    return this._options.resizerBridge.availHeight.value()
                }
                _initWidgetProperties(t) {
                    const e = "bottom" + t + "widget",
                        i = new(r())(o.getJSON(e, null));
                    i.subscribe((t => {
                        t ? o.setJSON(e, t) : o.remove(e)
                    })), this._widgetsProperties[t] = i
                }
                _loadState() {
                    const t = this._userSettings;
                    this._activeWidget.setValue(this.isWidgetEnabled(t.activeWidget) ? t.activeWidget : this._enabledWidgets[0]), this.setNormalHeight(Math.max(t.height, this._minHeight))
                }
                _save() {
                    this._inited && (0, h.setUserSettings)({
                        activeWidget: this._activeWidget.value(),
                        height: this._normalHeight.value(),
                        mode: this._mode.value()
                    })
                }
                _registerWidgets() {
                    this._enabledWidgets.forEach((t => {
                        const e = this._config[t];
                        if (!e || "function" != typeof e.onRegister) return;
                        e.onRegister.call(null, {
                            name: t,
                            bottomToolbarMode: this._mode,
                            activate: () => {
                                this.toggleWidget(t, !0)
                            }
                        })
                    }))
                }
                _trackResizeClick(t, e) {
                    {
                        const s = "backtesting" === (i = this.activeWidget().value()) && (0, g.enabled)(c.ProductFeatures.DEEP_HISTORY_BACKTEST) ? "strategy_tester deep_history_beta" : m[i];
                        (0, _.trackBottomPanelButtonClick)({
                            button: s,
                            visibility: t,
                            option: e
                        })
                    }
                    var i
                }
            }
        }
    }
]);
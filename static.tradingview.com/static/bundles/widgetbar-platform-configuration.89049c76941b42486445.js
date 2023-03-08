(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [87112], {
        454312: t => {
            t.exports = {}
        },
        107631: t => {
            t.exports = {
                wrapper: "wrapper-NSBB5lqy",
                touch: "touch-NSBB5lqy"
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

            function o(t, e = !1) {
                const i = getComputedStyle(t),
                    s = [i.width];
                return "border-box" !== i.boxSizing && s.push(i.paddingLeft, i.paddingRight, i.borderLeftWidth, i.borderRightWidth), e && s.push(i.marginLeft, i.marginRight), s.reduce(((t, e) => t + (parseFloat(e) || 0)), 0)
            }
            i.d(e, {
                contentHeight: () => s,
                outerHeight: () => n,
                outerWidth: () => o
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
                o = i(638456),
                r = i(778785);
            class a {
                constructor(t) {
                    var e, i;
                    this._helper = null, this._handleDragStart = t => {
                        var e;
                        if (null !== this._helper) return;
                        const i = this._source;
                        i.classList.add("ui-draggable-dragging");
                        const [s, o] = [(0, n.outerWidth)(i), (0, n.outerHeight)(i)];
                        this._helper = {
                            startTop: parseFloat(i.style.top) || 0,
                            startLeft: parseFloat(i.style.left) || 0,
                            nextTop: null,
                            nextLeft: null,
                            raf: null,
                            size: [s, o],
                            containment: this._containment instanceof HTMLElement ? [parseInt(getComputedStyle(this._containment).borderLeftWidth) + parseInt(getComputedStyle(this._containment).paddingLeft), parseInt(getComputedStyle(this._containment).borderTopWidth) + parseInt(getComputedStyle(this._containment).paddingTop), this._containment.offsetWidth - parseInt(getComputedStyle(this._containment).borderRightWidth) - parseInt(getComputedStyle(this._containment).paddingRight) - parseInt(getComputedStyle(i).marginLeft) - parseInt(getComputedStyle(i).marginRight) - s, this._containment.offsetHeight - parseInt(getComputedStyle(this._containment).borderBottomWidth) - parseInt(getComputedStyle(this._containment).paddingBottom) - parseInt(getComputedStyle(i).marginTop) - parseInt(getComputedStyle(i).marginBottom) - o] : "window" === this._containment ? [window.scrollX, window.scrollY, window.scrollX + document.documentElement.offsetWidth - s, window.scrollY + document.documentElement.offsetHeight - o] : null
                        }, null === (e = this._start) || void 0 === e || e.call(this)
                    }, this._handleDragMove = t => {
                        var e;
                        if (null === this._helper) return;
                        const {
                            current: i,
                            initial: s
                        } = t.detail, n = this._source, o = this._helper.nextTop, r = this._helper.nextLeft, a = "y" === this._axis || !1 === this._axis || 0 !== i.movementY;
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
                            a && this._helper.nextTop && (this._helper.nextTop = Math.min(this._helper.nextTop, s),
                                this._helper.nextTop = Math.max(this._helper.nextTop, e)), h && this._helper.nextLeft && (this._helper.nextLeft = Math.min(this._helper.nextLeft, i), this._helper.nextLeft = Math.max(this._helper.nextLeft, t))
                        }
                        null !== this._helper.raf || o === this._helper.nextTop && r === this._helper.nextLeft || (this._helper.raf = requestAnimationFrame((() => {
                            null !== this._helper && (null !== this._helper.nextTop && (n.style.top = this._helper.nextTop + "px", this._helper.nextTop = null), null !== this._helper.nextLeft && (n.style.left = this._helper.nextLeft + "px", this._helper.nextLeft = null), this._helper.raf = null)
                        }))), null === (e = this._drag) || void 0 === e || e.call(this)
                    }, this._handleDragStop = t => {
                        var e;
                        if (null === this._helper) return;
                        this._source.classList.remove("ui-draggable-dragging"), this._helper = null, null === (e = this._stop) || void 0 === e || e.call(this)
                    };
                    const s = this._source = t.source;
                    s.classList.add("ui-draggable");
                    const o = this._handle = null !== (e = t.handle ? s.querySelector(t.handle) : null) && void 0 !== e ? e : s;
                    o.classList.add("ui-draggable-handle"), this._start = t.start, this._stop = t.stop, this._drag = t.drag, this._backend = new h({
                        handle: o,
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
                    return o.CheckMobile.iOS() || (0, o.isMac)() && r.touch ? window.document.documentElement : this._handle
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
                unwrap: () => o,
                html: () => r,
                position: () => h
            });
            var s = i(650151),
                n = i(746326);

            function o(t) {
                return t[0]
            }

            function r(t, e) {
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
        272833: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                ObjectTreeRenderer: () => r
            });
            var s = i(564894),
                n = i(906125),
                o = i(36450);
            class r {
                constructor(t) {
                    this._viewModel = null, this._promise = null, this._activityChangeHandler = t => {
                        t ? this.mount() : this.destroy()
                    }, this._container = t.container, t.active.value() && this.mount(), t.active.subscribe(this._activityChangeHandler)
                }
                mount() {
                    const t = this._promise = Promise.all([Promise.resolve().then(i.t.bind(i, 50959, 19)), Promise.resolve().then(i.t.bind(i, 500962, 19)), Promise.all([i.e(88230), i.e(7624), i.e(59333), i.e(12275), i.e(33335), i.e(83772), i.e(6092), i.e(54819), i.e(68825), i.e(48484), i.e(105), i.e(8819), i.e(52196), i.e(38529), i.e(10722), i.e(30979), i.e(29594), i.e(86942), i.e(91622), i.e(9669), i.e(96542), i.e(64711), i.e(25031)]).then(i.bind(i, 170248)), Promise.all([i.e(88230), i.e(7624), i.e(59333), i.e(12275), i.e(33335), i.e(83772), i.e(6092), i.e(54819), i.e(68825), i.e(48484), i.e(105), i.e(8819), i.e(52196), i.e(38529), i.e(10722), i.e(30979), i.e(29594), i.e(86942), i.e(91622), i.e(9669), i.e(96542), i.e(64711), i.e(25031)]).then(i.bind(i, 143517)), Promise.all([i.e(88230), i.e(7624), i.e(59333), i.e(12275), i.e(33335), i.e(83772), i.e(6092), i.e(54819), i.e(68825), i.e(48484), i.e(105), i.e(8819), i.e(52196), i.e(38529), i.e(10722), i.e(30979), i.e(29594), i.e(86942), i.e(91622), i.e(9669), i.e(96542), i.e(64711), i.e(25031)]).then(i.bind(i, 985610)), (0, o.loadAllSourcesIcons)()]).then((([e, i, o, r, a]) => {
                        if (this._promise === t) {
                            const t = (0, s.service)(n.CHART_WIDGET_COLLECTION_SERVICE);
                            null === this._viewModel && (this._viewModel = new a.ObjectTree(t.activeChartWidget)), i.render(e.createElement(r.ObjectTree, {
                                nodeRenderer: o.NodeRenderer,
                                viewModel: this._viewModel
                            }), this._container)
                        }
                    }))
                }
                unmount() {
                    this._promise = null;
                    const t = i.c[500962];
                    if (t) {
                        t.exports.unmountComponentAtNode(this._container)
                    }
                }
                destroy() {
                    this.unmount(), null !== this._viewModel && (this._viewModel.destroy(), this._viewModel = null)
                }
            }
        },
        320335: (t, e, i) => {
            "use strict";
            i.d(e, {
                getPixelsFromEvent: () => n
            });
            const s = [() => navigator.userAgent.includes("Win") && navigator.userAgent.includes("Chrome") ? 1 / window.devicePixelRatio : 1, () => 16, (t = (() => 0)) => {
                var e;
                return .8 * (null !== (e = t()) && void 0 !== e ? e : 0)
            }];

            function n(t, e = (() => ({}))) {
                return {
                    x: t.deltaX * s[t.deltaMode]((() => e().width)),
                    y: t.deltaY * s[t.deltaMode]((() => e().height))
                }
            }
        },
        36450: (t, e, i) => {
            "use strict";
            i.d(e, {
                loadAllSourcesIcons: () => l,
                getAllSourcesIcons: () => d
            });
            var s = i(963568);
            const n = (0, i(272001).getLogger)("DataSourcesIcons");
            let o = null;

            function r() {
                const t = i.c[94710];
                return t ? Promise.resolve(t.exports.lineToolsIcons) : i.e(91890).then(i.bind(i, 94710)).then((t => t.lineToolsIcons))
            }

            function a() {
                const t = i.c[133290];
                return t ? Promise.resolve(t.exports.SERIES_ICONS) : i.e(79685).then(i.bind(i, 133290)).then((t => t.SERIES_ICONS))
            }
            let h = null;

            function l() {
                return null === h && (h = function() {
                    const t = (0, s.retries)(r, 2).then((t => t)).catch((t => (n.logWarn(t), {}))),
                        e = (0, s.retries)(a, 2).then((t => t)).catch((t => (n.logWarn(t), {})));
                    return Promise.all([t, e])
                }()), h.then((t => (o = {
                    linetool: t[0],
                    series: t[1]
                }, o)))
            }

            function d() {
                return o
            }
        },
        489071: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                DataWindowWidget: () => E
            });
            var s = i(650151),
                n = i(724377),
                o = i(777754),
                r = i(683890),
                a = i(957191),
                h = i(32931),
                l = i(801874),
                d = i(4836),
                c = i(310399),
                p = i(263221),
                u = i(663989),
                _ = i(878134),
                g = i(809350),
                v = i(831989),
                m = i(373123),
                w = i(802197),
                b = i(416911);
            const f = new r.TranslatedString("change visibility", o.t(null, void 0, i(521511))),
                S = new r.TranslatedString("hide {title}", o.t(null, void 0, i(470301))),
                C = new r.TranslatedString("show {title}", o.t(null, void 0, i(787358))),
                y = o.t(null, void 0, i(409068)),
                T = o.t(null, void 0, i(849574)),
                H = o.t(null, void 0, i(581428)),
                L = o.t(null, void 0, i(526705)),
                x = o.t(null, void 0, i(817582));
            class E {
                constructor(t) {
                    var e;
                    const i = null === (e = t.getChartWidgetCollection) || void 0 === e ? void 0 : e.call(t);
                    if (!i) throw new Error("ChartWidgetCollection is required");
                    this._chartWidgetCollection = i, this._chartWidget = this._chartWidgetCollection.activeChartWidget.value(), this._views = [], this._headerBinding = [], this._boxesBinding = [];
                    const s = this._container = document.createElement("div");
                    s.classList.add("chart-data-window"), t.container.appendChild(s), this._scroll = new u.SidebarCustomScroll(t.container, s), this.visible = t.visible.value(), this._updateChartWidget(), this._updateSource(), this._updateLayout(), this._chartWidgetCollection.activeChartWidget.subscribe(this.fullUpdate.bind(this)), t.visible.subscribe(this._onVisibilityChange.bind(this)), this._chartWidgetCollection.selectedSources.subscribe((t => {
                        const e = t[0];
                        e && this.updateHighlight({
                            source: e,
                            updateScroll: !0
                        })
                    })), t.setTitle(y)
                }
                update() {
                    this.visible && (this.updateHighlight(), this.updateValues())
                }
                updateHighlight(t) {
                    const e = (t || {}).source,
                        i = !!(t || {}).updateScroll;
                    if (!this.visible || !this._chartWidget || !this._chartWidget.hasModel()) return;
                    const s = this._chartWidget.model().hoveredSource(),
                        n = e || this._chartWidgetCollection.selectedSources.value()[0];
                    let o;
                    for (let t = 0; t < this._boxesBinding.length; ++t) {
                        const e = this._boxesBinding[t].src,
                            i = this._boxesBinding[t].element;
                        if (e) {
                            const t = !(!n || e !== n);
                            i.classList.toggle("hover", !(!s || e !== s)), i.classList.toggle("active", t), t && (o = i)
                        }
                    }
                    o && i && this._scroll.scrollTo(o)
                }
                updateValues() {
                    if (!this.visible) return;
                    const t = t => t.visible(),
                        e = t => ({
                            value: t.value(),
                            title: (0, g.clean)(t.title(), !0),
                            color: t.color(),
                            showColorInBox: this._showColorInBox(t.color())
                        });
                    for (let i = 0; i < this._boxesBinding.length; ++i) {
                        const s = this._boxesBinding[i];
                        s.body.innerHTML = "", s.view.items().filter(t).map(e).forEach((t => {
                            var e, i;
                            const n = document.createElement("div");
                            n.classList.add("chart-data-window-item");
                            const o = document.createElement("div");
                            o.classList.add("chart-data-window-item-title"), o.textContent = t.title, n.appendChild(o);
                            const r = document.createElement("div");
                            if (r.classList.add("chart-data-window-item-value"), n.appendChild(r), t.showColorInBox) {
                                const i = document.createElement("div");
                                i.classList.add("real-color"), i.style.backgroundColor = null !== (e = t.color) && void 0 !== e ? e : "", i.title = T, r.appendChild(i), r.appendChild(document.createTextNode(t.value))
                            } else {
                                const e = document.createElement("span");
                                e.style.color = null !== (i = t.color) && void 0 !== i ? i : "", e.textContent = t.value, r.appendChild(e)
                            }
                            s.body.appendChild(n)
                        }))
                    }
                    for (let t = 0; t < this._headerBinding.length; t++) {
                        const e = this._headerBinding[t].element;
                        e && (e.textContent = (0, g.clean)(this._headerBinding[t].value.header(), !0), e.title = (0, g.clean)(this._headerBinding[t].value.title(), !0))
                    }
                }
                fullUpdate() {
                    this._updateChartWidget(), this._updateSource(), this._updateLayout()
                }
                setSelectedSource(t) {
                    this._chartWidget.model().selectionMacro((e => {
                        e.addSourceToSelection(t)
                    }))
                }
                showContextMenuForSource(t, e) {
                    t.hasContextMenu() && (this.setSelectedSource(t), t instanceof v.Series ? this._showSeriesContextMenu(t, e) : t instanceof m.Study && this._showStudyContextMenu(t, e))
                }
                createActionShow(t) {
                    const e = new c.Action({
                        actionId: "Chart.SelectedObject.Show",
                        label: H,
                        icon: b,
                        checkable: !0
                    });
                    return e.setBinding(new a.ActionBinder(e, t.properties().visible, this._chartWidget.model(), f)), e.getBinding().setValue(t.properties().visible.value()), e
                }
                _updateChartWidget() {
                    const t = this._chartWidget,
                        e = this._chartWidgetCollection.activeChartWidget.value();
                    t && t.removeDataWindowWidget(), e && (this._chartWidget = e, e.setDataWindowWidget(this))
                }
                _updateSource() {
                    if (!this.visible) return;
                    if (this._views = [], !this._chartWidget.hasModel()) return;
                    const t = this._chartWidget.model().model().dataSources();
                    for (let e = 0; e < t.length; e++) {
                        const i = t[e].dataWindowView();
                        i && this._views.push(i)
                    }
                }
                _updateLayout() {
                    if (this.visible) {
                        this._container.innerHTML = "", this._headerBinding = [];
                        for (let t = this._boxesBinding.length - 1; t >= 0; t--) {
                            const e = this._boxesBinding[t];
                            e.src && e.src.properties().childs().visible.unsubscribe(this, e.visibilityHandler)
                        }
                        this._boxesBinding = [];
                        for (let t = 0; t < this._views.length; ++t) {
                            const e = this._views[t];
                            e.items().length && this._bindView(e)
                        }
                        this.updateHighlight(), this.updateValues(), this._scroll.resize()
                    }
                }
                _bindView(t) {
                    let e;
                    t instanceof h.SeriesDataWindowView ? e = t.series() : (t instanceof d.StudyDataWindowView || t instanceof l.OverlayDataWindowView) && (e = t.study());
                    const i = (0, _.parseHtmlElement)('<div class="box with-actions"><div class="chart-data-window-header"><span class="text"></span><div class="hover-source-icon"></div></div><div class="chart-data-window-body"></div></div>'),
                        n = (0, s.ensureNotNull)(i.querySelector(".chart-data-window-body")),
                        o = (0, s.ensureNotNull)(i.querySelector(".chart-data-window-header"));
                    if (o.classList.toggle("js-hidden", !Boolean(t.header())), this._container.appendChild(i), void 0 !== e) {
                        const t = e;
                        i.classList.toggle("hidden", !t.properties().childs().visible.value()), i.addEventListener("click", (e => {
                            e.preventDefault(), this.setSelectedSource(t)
                        })), i.addEventListener("contextmenu", (e => {
                            e.preventDefault(), this._chartWidget.readOnly() || this.showContextMenuForSource(t, e)
                        }))
                    }

                    function a(t) {
                        return t ? L : x
                    }

                    function c(t) {
                        i.classList.toggle("hidden", !t.value()), i.querySelectorAll(".toggle-source-icon").forEach((e => {
                            e.title = a(t.value())
                        }))
                    }
                    if (t.header() && void 0 !== e) {
                        const t = e,
                            i = t.properties().childs(),
                            s = document.createElement("div");
                        s.classList.add("toggle-source-icon"), s.title = a(i.visible.value()), s.innerHTML = w, s.addEventListener("click", (e => {
                            e.stopPropagation();
                            const s = i.visible.value();
                            this._chartWidget.model().setProperty(i.visible, !s, (s ? S : C).format({
                                title: new r.TranslatedString(t.name(), t.title())
                            }))
                        })), o.appendChild(s), o.addEventListener("dblclick", (() => {
                            this._chartWidget.showChartPropertiesForSource(t)
                        }))
                    }
                    void 0 !== e && e.properties().childs().visible.subscribe(this, c),
                        this._headerBinding.push({
                            value: t,
                            element: o.querySelector(".text")
                        }), this._boxesBinding.push({
                            view: t,
                            src: e,
                            element: i,
                            body: n,
                            visibilityHandler: c
                        })
                }
                _onVisibilityChange(t) {
                    this.visible = !!t, t && this.fullUpdate()
                }
                _showColorInBox(t) {
                    return !!(t && 255 - (0, n.rgbToGrayscale)((0, n.parseRgb)(t)) < 20)
                }
                _showSeriesContextMenu(t, e) {
                    const i = this._chartWidget.actions(),
                        s = t.properties().visible.value();
                    p.ContextMenuManager.showMenu([i.format, s ? i.seriesHide : this.createActionShow(t)], e, void 0, {
                        menuName: "DataWindowWidgetSeriesContextMenu",
                        detail: {
                            type: "series",
                            id: t.instanceId()
                        }
                    })
                }
                _showStudyContextMenu(t, e) {
                    const i = this._chartWidget.actions(),
                        s = t.properties().visible.value();
                    p.ContextMenuManager.showMenu([i.format, s ? i.studyHide : this.createActionShow(t), i.studyRemove], e, void 0, {
                        menuName: "DataWindowWidgetStudyContextMenu",
                        detail: {
                            type: "study",
                            id: t.id()
                        }
                    })
                }
            }
        },
        663989: (t, e, i) => {
            "use strict";
            i.d(e, {
                SidebarCustomScroll: () => p
            });
            var s = i(778785),
                n = i(869403),
                o = i.n(n),
                r = i(318557),
                a = i(368791),
                h = i(404573),
                l = i(320335),
                d = (i(454312), i(107631));
            const c = {
                headerHeight: 0,
                additionalClass: "",
                alwaysVisible: !1,
                showBottomShadow: !0,
                scrollMarginTop: 1,
                bubbleScrollEvent: !1
            };
            class p {
                constructor(t, e, i = {}) {
                    if (this.scrolled = new(o()), this.scrolltoend = new(o()), this.scrolltostart = new(o()), this.visibilityCallbacks = [], this._scrollTargetTop = 0, this._scrollSpeed = 40, this._shadowOffset = 10, this._shadowTop = null, this._shadowBottom = null, this._dragInitialized = !1, this._dragging = !1, this._draggable = null, this._atStart = !1, this._atEnd = !1, this._stickyBottom = null, this._animation = null, this._saved = null, this._options = { ...c,
                            ...i
                        }, this._wrapper = t, this._wrapper.classList.add(d.wrapper), this._content = e, this._headerHeight = this._options.headerHeight, this._scrollMarginTop = this._options.scrollMarginTop, this._scrollBar = document.createElement("div"), this._scrollBar.classList.add("sb-scrollbar", "sb-scrollbar-body"), this._options.additionalClass && this._scrollBar.classList.add(this._options.additionalClass), this._scrollBar.classList.toggle("active-always", this._options.alwaysVisible), this._scrollBarWrapper = document.createElement("div"), this._scrollBarWrapper.classList.add("sb-scrollbar-wrap"), this._touch = s.touch, this._touch) return this._content.style.position = "relative", this._wrapper.classList.add(d.touch), void this._wrapper.addEventListener("scroll", (() => this._onScroll()));
                    this._wrapper.style.overflow = "hidden", this._unsubscribe = (() => {
                        const t = () => {
                                this._dragging || (this._options.alwaysVisible || this._scrollBar.classList.add("active"), this._onScroll())
                            },
                            e = () => {
                                this._dragging || (this._options.alwaysVisible || this._scrollBar.classList.remove("active"), this._onScroll())
                            },
                            i = t => {
                                if (!t.defaultPrevented) {
                                    const e = (0, l.getPixelsFromEvent)(t, (() => ({
                                        height: this._wrapper.clientHeight
                                    }))).y;
                                    this.scroll(-e, 1) || (t.stopPropagation(), t.preventDefault())
                                }
                            };
                        return this._wrapper.addEventListener("mouseenter", t), this._wrapper.addEventListener("mouseleave", e), this._wrapper.addEventListener("wheel", i), () => {
                            this._wrapper.removeEventListener("mouseenter", t), this._wrapper.removeEventListener("mouseleave", e),
                                this._wrapper.removeEventListener("wheel", i)
                        }
                    })(), !1 !== this._options.showTopShadow && (this._shadowTop = document.createElement("div"), this._shadowTop.classList.add("sb-inner-shadow", "top", "i-invisible"), this._wrapper.appendChild(this._shadowTop)), !1 !== this._options.showBottomShadow && (this._shadowBottom = document.createElement("div"), this._shadowBottom.classList.add("sb-inner-shadow"), this._wrapper.appendChild(this._shadowBottom)), this._shadowTop && this._headerHeight && (this._shadowTop.style.top = this._headerHeight - this._shadowOffset + "px"), this._wrapper.appendChild(this._scrollBarWrapper), this._scrollBarWrapper.appendChild(this._scrollBar), this._onScroll()
                }
                isTouch() {
                    return this._touch
                }
                getScrollBar() {
                    return this._scrollBar
                }
                initDraggable() {
                    return this._dragInitialized || (this._draggable = new h.Draggable({
                        axis: "y",
                        source: this._scrollBar,
                        containment: this._scrollBarWrapper,
                        start: () => {
                            this._dragging = !0
                        },
                        stop: () => {
                            this._dragging = !1
                        },
                        drag: () => {
                            this.updateScroll()
                        }
                    }), this._dragInitialized = !0), this
                }
                updateScroll() {
                    if (this._touch) return this;
                    const t = Math.ceil((0, r.position)(this._scrollBar).top - this._scrollMarginTop - this._headerHeight),
                        e = this.getContainerHeightWithoutHeader(),
                        i = (0, r.outerHeight)(this._content),
                        s = i - e - 1;
                    return e <= 0 || (this._scrollTargetTop = s <= 0 ? this._headerHeight : Math.min(-t * i / e + this._headerHeight, this._headerHeight), t + (0, r.contentHeight)(this._scrollBar) + 2 >= e ? this.scrollToEnd() : (this._content.style.top = this._scrollTargetTop + "px", this._onScroll())), this
                }
                getContainerHeightWithoutHeader() {
                    return this._wrapper.getBoundingClientRect().height - this._headerHeight
                }
                getContainerHeight() {
                    return this._wrapper.getBoundingClientRect().height
                }
                getContentHeight() {
                    return this._content.getBoundingClientRect().height
                }
                updateScrollBar() {
                    if (this._touch) return this;
                    const t = (0, r.position)(this._content).top,
                        e = this.getContentHeight(),
                        i = this.getContainerHeight(),
                        s = this.getContainerHeightWithoutHeader(),
                        n = 1 + this._headerHeight,
                        o = s - 2,
                        a = (Math.abs(t) - this._headerHeight) * o / e,
                        h = i * i / e;
                    return this.isContentShort() ? (this._scrollBar.classList.add("js-hidden"), this._wrapper.classList.remove("sb-scroll-active")) : (this._scrollBar.classList.remove("js-hidden"), this._scrollBar.style.height = h + "px", this._scrollBar.style.top = n + a + "px", this._wrapper.classList.add("sb-scroll-active"), this.initDraggable()), this
                }
                scroll(t, e) {
                    const i = (0, r.position)(this._content).top,
                        s = (0, r.outerHeight)(this._content) - this.getContainerHeightWithoutHeader() - 1,
                        n = e || this._scrollSpeed;
                    return s <= 0 || (this._scrollTargetTop = Math.max(-s + this._headerHeight, Math.min(this._headerHeight, i + t * n)), this.setContentTop(this._scrollTargetTop), this._onScroll())
                }
                animateTo(t) {
                    if (this._touch) return this;
                    const e = (0, r.outerHeight)(this._content) - this.getContainerHeightWithoutHeader() - 1;
                    if (e <= 0) return !0;
                    this._scrollTargetTop = Math.max(-e + this._headerHeight, Math.min(this._headerHeight, -t)), this._animation && this._animation.stop(), this._animation = (0, a.doAnimate)({
                        duration: 500,
                        from: parseFloat(getComputedStyle(this._content).top),
                        to: this._scrollTargetTop,
                        onStep: (t, e) => {
                            this._content.style.top = e + "px"
                        },
                        onComplete: () => {
                            this._onScroll()
                        }
                    })
                }
                resize() {
                    const t = (0, r.outerHeight)(this._content),
                        e = (0, r.outerHeight)(this._wrapper);
                    !this._options.vAlignBottom && t < e ? this.atStart() || this.scrollToStart() : this.atEnd() ? this.scrollToEnd() : "number" == typeof this._stickyBottom && this.setContentTop(Math.min(0, this._stickyBottom + (0, r.outerHeight)(this._wrapper) - (0, r.outerHeight)(this._content)))
                }
                resizeHeader(t) {
                    const e = t - this._headerHeight;
                    this._headerHeight = t, this._scrollTargetTop += e, this._shadowTop && (this._shadowTop.style.top = this._headerHeight - this._shadowOffset + "px"), this.resize()
                }
                scrollTo(t, e) {
                    const i = {
                        position: "visible",
                        areaHeight: t instanceof HTMLElement ? (0, r.contentHeight)(t) : 0,
                        ...e
                    };
                    t instanceof HTMLElement && (t = i.offsetTop || (0, r.position)(t).top);
                    const s = (0, r.position)(this._content).top,
                        n = this._content.getBoundingClientRect().height,
                        o = this.getContainerHeightWithoutHeader();
                    if (n - o - 1 <= 0) return !0;
                    const a = -1 * (s - this._headerHeight),
                        h = a + o;
                    let l = 0;
                    if ("visible" === i.position) {
                        if (t > a && t + i.areaHeight < h) return !1;
                        l = t + i.areaHeight > h ? h - t - i.areaHeight : a - t
                    } else "top" === i.position && (l = a - t);
                    return this.scroll(l, 1), this._onScroll(), !1
                }
                scrollToEnd() {
                    const t = (0, r.position)(this._content).top,
                        e = (0, r.outerHeight)(this._content),
                        i = (0, r.outerHeight)(this._wrapper),
                        s = e > i ? t + (i - (e + t)) + 1 : 1;
                    return this.setContentTop(s), this._onScroll(), this
                }
                scrollToStart() {
                    return this.setContentTop(this._headerHeight), this._onScroll(), this
                }
                currentPosition() {
                    return Math.round((0, r.position)(this._content).top)
                }
                atStart() {
                    return Math.round((0, r.position)(this._content).top) >= this._headerHeight
                }
                atEnd(t) {
                    "number" == typeof t && isFinite(t) || (t = 0);
                    const e = Math.round((0, r.position)(this._content).top),
                        i = Math.floor((0, r.outerHeight)(this._content)),
                        s = Math.floor((0, r.outerHeight)(this._wrapper));
                    return i - Math.abs(e) - 1 <= s + t
                }
                checkContentVisibility() {
                    this._onContentVisible()
                }
                subscribeToContentVisible(t, e, i) {
                    this.visibilityCallbacks.push({
                        id: t,
                        element: e,
                        callback: i
                    })
                }
                triggerVisibilityCallbacks(t) {
                    this._onContentVisible(t)
                }
                save() {
                    return this._saved = {
                        top: (0, r.position)(this._content).top,
                        height: (0, r.outerHeight)(this._content)
                    }, this
                }
                restore() {
                    if (this._saved) {
                        if (this._saved.top === (0, r.position)(this._content).top && this._saved.height === (0, r.outerHeight)(this._content)) return this._saved = null, this;
                        this._options.vAlignBottom && (this._saved.top -= (0, r.outerHeight)(this._content) - this._saved.height, this._saved.top > this._headerHeight && (this._saved.top = this._headerHeight)), this.setContentTop(this._saved.top), this._saved = null, this._onScroll(!0)
                    }
                    return this
                }
                setContentTop(t) {
                    return this._touch ? this._options.vAlignBottom && (0, r.outerHeight)(this._content) < (0, r.outerHeight)(this._wrapper) ? (this._wrapper.style.overflowY = "visible", this._content.style.position = "absolute", this._content.style.bottom = "0px") : (this._content.style.position = "relative", this._content.style.position = "auto", this._wrapper.style.overflowY = "auto", this._wrapper.scrollTop = -t) : this._content.style.top = t + "px", this
                }
                isContentShort() {
                    return this.getContentHeight() <= this.getContainerHeightWithoutHeader()
                }
                destroy() {
                    var t;
                    this._animation && this._animation.stop(),
                        this._scrollBarWrapper && this._scrollBarWrapper.remove(), this._shadowBottom && this._shadowBottom.remove(), this._shadowTop && this._shadowTop.remove(), this._draggable && (this._draggable.destroy(), this._draggable = null), this._content.style.cssText = "", this._wrapper.style.cssText = "", null === (t = this._unsubscribe) || void 0 === t || t.call(this)
                }
                _onScroll(t) {
                    this._touch || (this._content.style.bottom = "auto"), this.scrolled.fire(), this._dragging && !0 !== t || this.updateScrollBar();
                    const e = this.atStart(),
                        i = this.atEnd();
                    return this._shadowTop && this._shadowTop.classList.toggle("i-invisible", !!e), this._shadowBottom && this._shadowBottom.classList.toggle("i-invisible", !!i), this._onContentVisible(), !this._atStart && e ? (this._atStart = !0, this.scrolltostart.fire()) : this._atStart && !e && (this._atStart = !1), !this._atEnd && i ? (this._atEnd = !0, this.scrolltoend.fire()) : this._atEnd && !i && (this._atEnd = !1), this._options.vAlignBottom && (this._stickyBottom = (0, r.outerHeight)(this._content) - Math.abs((0, r.position)(this._content).top) - (0, r.outerHeight)(this._wrapper)), (this._atStart || this._atEnd) && ("function" == typeof this._options.bubbleScrollEvent ? Boolean(this._options.bubbleScrollEvent()) : Boolean(this._options.bubbleScrollEvent))
                }
                _contentIsVisible(t) {
                    return (0, r.position)(t.element).top > -1 * this.currentPosition()
                }
                _onContentVisible(t) {
                    if (!this.visibilityCallbacks.length) return;
                    const e = t || this._contentIsVisible.bind(this),
                        i = [],
                        s = this.visibilityCallbacks.filter(((t, s) => {
                            if (!this._content.contains(t.element)) return !1;
                            const n = e(t);
                            return n && i.push(s), !n
                        }));
                    i.forEach((e => {
                        this.visibilityCallbacks[e].callback(!!t)
                    })), this.visibilityCallbacks = s
                }
            }
        },
        802197: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 16" width="23px" height="16px"><path d="M11.404 15.2c6.298 0 11.404-7.6 11.404-7.6S17.702 0 11.404 0 0 7.6 0 7.6s5.106 7.6 11.404 7.6zm-3.8-7.6c0-2.11 1.688-3.8 3.8-3.8s3.8 1.69 3.8 3.8-1.72 3.8-3.8 3.8c-2.112 0-3.8-1.69-3.8-3.8z"/></svg>'
        },
        849574: t => {
            t.exports = {
                ar: ["لون الخط"],
                ca_ES: "Color line",
                cs: "Color line",
                de: ["Farblinie"],
                el: "Color line",
                en: "Color line",
                es: ["Línea de color"],
                fa: "Color line",
                fr: ["Ligne de couleur"],
                he_IL: ["צבע קו"],
                hu_HU: ["Szín vonal"],
                id_ID: ["Garis warna"],
                it: ["Linea colore"],
                ja: ["カラーライン"],
                ko: ["컬러 라인"],
                ms_MY: ["Garisan warna"],
                nl_NL: "Color line",
                pl: "Color line",
                pt: ["Linha da cor"],
                ro: "Color line",
                ru: ["Цвет линии"],
                sv: ["Färglinje"],
                th: ["เส้นสี"],
                tr: ["Renk satırı"],
                vi: ["Đường màu"],
                zh: ["色线"],
                zh_TW: ["色線"]
            }
        },
        409068: t => {
            t.exports = {
                ar: ["نافذة البيانات"],
                ca_ES: ["Finestra de dades"],
                cs: "Data Window",
                de: ["Daten-Fenster"],
                el: "Data Window",
                en: "Data Window",
                es: ["Ventana de datos"],
                fa: ["پمجره داده ها"],
                fr: ["Fenêtre de données"],
                he_IL: ["חלון מידע"],
                hu_HU: ["Adatablak"],
                id_ID: ["Jendela Data"],
                it: ["Finestra dati"],
                ja: ["データウィンドウ"],
                ko: ["데이터윈도우"],
                ms_MY: ["Tetingkap Data"],
                nl_NL: ["Data venster"],
                pl: ["Okno danych"],
                pt: ["Janela de Dados"],
                ro: "Data Window",
                ru: ["Окно данных"],
                sv: ["Datafönster"],
                th: ["หน้าต่างข้อมูล"],
                tr: ["Veri Penceresi"],
                vi: ["Cửa sổ Dữ liệu"],
                zh: ["数据窗口"],
                zh_TW: ["數據窗口"]
            }
        },
        526705: t => {
            t.exports = {
                ar: ["إخفاء البيانات"],
                ca_ES: "Hide data",
                cs: "Hide data",
                de: ["Daten verbergen"],
                el: "Hide data",
                en: "Hide data",
                es: ["Ocultar datos"],
                fa: ["مخفی کردن داده ها"],
                fr: ["Cacher les données"],
                he_IL: ["הסתר נתונים"],
                hu_HU: ["Adatok elrejtése"],
                id_ID: ["Sembunyikan data"],
                it: ["Nascondi dati"],
                ja: ["データを非表示"],
                ko: ["데이터숨김"],
                ms_MY: ["Sembunyi data"],
                nl_NL: "Hide data",
                pl: ["Ukryj dane"],
                pt: ["Ocultar os dados"],
                ro: "Hide data",
                ru: ["Скрыть данные"],
                sv: ["Dölj data"],
                th: ["ซ่อนข้อมูล"],
                tr: ["Verileri gizle"],
                vi: ["Ẩn dữ liệu"],
                zh: ["隐藏数据"],
                zh_TW: ["隱藏數據"]
            }
        },
        817582: t => {
            t.exports = {
                ar: ["عرض البيانات"],
                ca_ES: "Show data",
                cs: "Show data",
                de: ["Daten anzeigen"],
                el: "Show data",
                en: "Show data",
                es: ["Mostrar datos"],
                fa: "Show data",
                fr: ["Montrer les données"],
                he_IL: ["הצג נתונים"],
                hu_HU: ["Adatok mutatása"],
                id_ID: ["Perlihatkan data"],
                it: ["Mostra dati"],
                ja: ["データを表示"],
                ko: ["데이터 보기"],
                ms_MY: ["Tunjuk data"],
                nl_NL: "Show data",
                pl: ["Pokaż dane"],
                pt: ["Mostrar dados"],
                ro: "Show data",
                ru: ["Показать данные"],
                sv: ["Visa information"],
                th: ["แสดงข้อมูล"],
                tr: ["Verileri Göster"],
                vi: ["Hiển thị dữ liệu"],
                zh: ["显示数据"],
                zh_TW: ["顯示數據"]
            }
        },
        787358: t => {
            t.exports = {
                ar: ["عرض ‎{title}‎"],
                ca_ES: ["mostra {title}"],
                cs: "show {title}",
                de: ["{title} anzeigen"],
                el: "show {title}",
                en: "show {title}",
                es: ["mostrar {title}"],
                fa: "show {title}",
                fr: ["afficher {title}"],
                he_IL: ["הצג ‎{title}‎"],
                hu_HU: "show {title}",
                id_ID: ["tampilkan {title}"],
                it: ["mostra {title}"],
                ja: ["{title}の表示"],
                ko: ["{title} 보이기"],
                ms_MY: ["tunjuk {title}"],
                nl_NL: "show {title}",
                pl: ["pokaż {title}"],
                pt: ["exibir {title}"],
                ro: "show {title}",
                ru: ["отображение: {title}"],
                sv: ["visa {title}"],
                th: ["แสดง {title}"],
                tr: ["{title} göster"],
                vi: ["hiện {title}"],
                zh: ["显示{title}"],
                zh_TW: ["顯示{title}"]
            }
        }
    }
]);
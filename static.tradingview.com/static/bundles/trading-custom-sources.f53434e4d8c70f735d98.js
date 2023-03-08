(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [42650], {
        761719: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                ExecutionsService: () => h
            });
            var s = i(650151),
                r = i(758337),
                o = i(831471),
                n = i(778371),
                a = i(869403),
                l = i.n(a),
                c = i(910368);
            class h extends n.BrokerService {
                constructor(t, e, i) {
                    super(t), this._allExecutionsID = new Set, this._executions = [], this._executionsAdded = new(l()), this._executionsCleared = new(l()), this._formatter = new o.PriceFormatter, this._symbol = "", this._dataEvents = e, this._getSymbolName = i, this._initialized = !0, this._tryToStart()
                }
                destroy() {
                    this.stopService()
                }
                formatter() {
                    return this._formatter
                }
                executions() {
                    return this._executions
                }
                executionsAdded() {
                    return this._executionsAdded
                }
                executionsCleared() {
                    return this._executionsCleared
                }
                startService() {
                    var t;
                    (null === (t = this.activeBroker()) || void 0 === t ? void 0 : t.config.supportExecutions) && (this._canBeStarted = !0, this._tryToStart())
                }
                stopService() {
                    this._canBeStarted = !1, this._isStarted && this._stop()
                }
                _tryToStart() {
                    (0, s.assert)(!this._isStarted, "Execution's service has already started"), this._canBeStarted && this._initialized && this._start()
                }
                _start() {
                    (0, s.assert)(!this._isStarted, "Execution's service has already started"), this._isStarted = !0, this._dataEvents.symbolResolved().subscribe(this, this._createExecutions), this._dataEvents.symbolError().subscribe(this, this._createExecutions), this._createExecutions()
                }
                _stop() {
                    this._isStarted = !1, this._clearExecutions();
                    (0, s.ensure)(this.activeBroker()).executionUpdate.unsubscribeAll(this), this._dataEvents.symbolResolved().unsubscribeAll(this), this._dataEvents.symbolError().unsubscribeAll(this)
                }
                _createExecutions() {
                    this._clearExecutions(), this._symbol = this._getSymbolName(), this._symbol && this._requestFormatterAndExecutions()
                }
                _clearExecutions() {
                    this._allExecutionsID = new Set, this._executions = [], this._executionsCleared.fire()
                }
                async _requestFormatterAndExecutions() {
                    const t = this.activeBroker();
                    if (!t) return;
                    if (!this._symbol) return;
                    if (!(await t.isTradable(this._symbol)).tradable) return;
                    const e = this._symbol;
                    Promise.all([t.formatter(this._symbol, !1), t.executions(this._symbol)]).then((([i, s]) => {
                        this._symbol === e && (this._formatter = i, this._executions = s.map((t => this._createExecutionData(t))).filter(r.notNull), this._executionsAdded.fire(this._executions), t.executionUpdate.unsubscribeAll(this), t.executionUpdate.subscribe(this, this._addExecution))
                    }))
                }
                _addExecution(t) {
                    const e = this._createExecutionData(t);
                    null !== e && this._executionsAdded.fire([e])
                }
                _createExecutionData(t) {
                    return t.symbol !== this._symbol || this._allExecutionsID.has(t.id) ? null : (this._allExecutionsID.add(t.id), { ...t,
                        tooltip: (0, c.executionText)(t, this._formatter)
                    })
                }
            }
        },
        561791: (t, e, i) => {
            "use strict";
            i.d(e, {
                ExecutionsPaneView: () => v,
                initializeCoordByDirection: () => g
            });
            var s = i(650151),
                r = i(547635),
                o = i(125226),
                n = i(740796),
                a = i(538708),
                l = i(858063),
                c = i(623331),
                h = i(837512),
                u = i(715073);
            const d = (0, o.isFeatureEnabled)("enable_new_execution_style"),
                _ = d ? 3 : 2,
                p = 12,
                x = 2,
                b = 6,
                f = 10,
                m = "normal";
            class w {
                constructor() {
                    this._data = {
                        points: [],
                        labels: [],
                        arrowHeight: 0,
                        arrowSpacing: 0
                    }, this._textWidthCache = new h.TextWidthCache, this._font = (0,
                        a.makeFont)(p, c.CHART_FONT_FAMILY, m)
                }
                setData(t) {
                    this._data = t
                }
                hitTest(t) {
                    for (const e of this._data.points) {
                        const i = Math.round(e.x),
                            s = Math.round(e.y),
                            r = 2 * _;
                        let o, n;
                        if (e.arrowUp ? (o = s, n = s + this._data.arrowHeight + this._data.arrowSpacing) : (o = s - this._data.arrowHeight - this._data.arrowSpacing, n = s), t.x >= i - _ && t.x <= i + _ && t.y >= o && t.y <= n && "" !== e.tooltip) {
                            const t = {
                                activeItem: e.id
                            };
                            return e.tooltip && (t.tooltip = {
                                below: !!d && e.arrowUp,
                                text: e.tooltip,
                                rect: {
                                    x: i - _,
                                    y: o,
                                    w: r,
                                    h: n - o
                                }
                            }), new l.HitTestResult(l.HitTestResult.CUSTOM, t)
                        }
                    }
                    return null
                }
                draw(t, e) {
                    const i = e.pixelRatio;
                    t.save(), t.lineWidth = Math.max(1, Math.floor(t.lineWidth * i)), d && (t.lineWidth = Math.max(x, Math.floor(x * i)));
                    const s = 2 * _,
                        r = Math.max(1, Math.round(s * i)),
                        o = Math.max(1, Math.round(this._data.arrowHeight * i));
                    for (const e of this._data.points) {
                        const s = Math.round((e.x - _) * i),
                            n = Math.round(e.y * i);
                        (0, u.drawArrow)(t, s, n, e.arrowColor, e.outlineColor, !e.arrowUp, o, r, d)
                    }
                    for (const e of this._data.labels) {
                        const s = Math.round((e.x - _) * i),
                            r = Math.round(e.y * i);
                        (0, u.drawOutlinedText)(t, i, e.text, s, r, this._textYMidCorrection(t, e.text), e.color, this._font, e.outlineColor)
                    }
                    if (this._data.executionEntryPoint) {
                        const e = Math.round((this._data.executionEntryPoint.x - b / 2) * i),
                            s = Math.round(this._data.executionEntryPoint.y * i),
                            r = Math.max(1, Math.round(f * i)),
                            o = Math.max(1, Math.round(b * i));
                        (0, u.drawOutlinedArrowHead)(t, e, s, this._data.executionEntryPoint.arrowColor, this._data.executionEntryPoint.outlineColor, r, o)
                    }
                    t.restore()
                }
                _textYMidCorrection(t, e) {
                    if (!e) return 0;
                    const i = t.font;
                    t.font = (0, s.ensureNotNull)(this._font);
                    const r = Math.ceil(this._textWidthCache.yMidCorrection(t, e));
                    return t.font = i, r
                }
            }
            const P = (0, o.isFeatureEnabled)("enable_new_execution_style"),
                S = {
                    ArrowHeight: P ? 14 : 8,
                    ArrowSpacing: P ? 5 : 11,
                    ArrowToBarSpacing: P ? 9 : 11,
                    LabelSpacing: 15,
                    ArrowToLabelSpacing: 10
                };
            class v extends r.ExecutionsBasePaneView {
                constructor(t, e) {
                    super(t), this._renderer = new w, this._points = [], this._source = e
                }
                _createRenderData(t) {
                    let e;
                    this._points = [];
                    const i = this._isPriceScaleInverted(),
                        r = new Map,
                        o = (0, n.styleGetter)(this._chartModel.isDark()),
                        a = t.find((t => this._source.hoveredExecution() === t.id));
                    for (const n of t) {
                        const t = r.get(n.index) || g(i, o);
                        if (void 0 === t.x) {
                            const e = this._getXCoordinate(n.index);
                            if (null === e) continue;
                            t.x = e
                        }
                        const l = n.isBuyDirection !== i,
                            c = l ? "arrowUp" : "arrowDown",
                            h = l ? 1 : -1,
                            u = t[c].y;
                        if (void 0 === u) {
                            const e = this._getYCoordinate(n.index, n.isBuyDirection);
                            if (null === e) continue;
                            t[c].y = e + h * S.ArrowToBarSpacing
                        } else t[c].y = u + h * (S.ArrowHeight + S.ArrowSpacing);
                        r.set(n.index, t), a && a === n && (e = {
                            x: (0, s.ensureDefined)(t.x),
                            y: (0, s.ensureNotNull)(this._priceToCoordinate(a.price)),
                            arrowColor: t[c].color,
                            outlineColor: o.outlineColor
                        }), this._points.push({
                            id: n.id,
                            x: (0, s.ensureDefined)(t.x),
                            y: (0, s.ensureDefined)(t[c].y),
                            arrowUp: l,
                            arrowColor: t[c].color,
                            outlineColor: o.outlineColor,
                            tooltip: this._source.isLabelsVisible() ? void 0 : n.tooltip
                        })
                    }
                    const l = [];
                    if (this._source.isLabelsVisible())
                        for (const e of t) {
                            const t = r.get(e.index);
                            if (t) {
                                const r = e.isBuyDirection !== i,
                                    n = r ? "arrowUp" : "arrowDown",
                                    a = t[n].y,
                                    c = t.x;
                                if (void 0 !== a && void 0 !== c) {
                                    const i = r ? 1 : -1;
                                    t[n].y = a + i * S.LabelSpacing, l.push({
                                        x: c,
                                        y: (0, s.ensureDefined)(t[n].y) + i * S.ArrowToLabelSpacing,
                                        text: e.tooltip,
                                        color: o.textColor,
                                        outlineColor: o.outlineColor
                                    })
                                }
                            }
                        }
                    return {
                        points: this._points,
                        labels: l,
                        executionEntryPoint: e,
                        arrowHeight: S.ArrowHeight,
                        arrowSpacing: S.ArrowSpacing
                    }
                }
            }

            function g(t, e) {
                let i, s;
                return t ? (i = e.sellArrowColor, s = e.buyArrowColor) : (i = e.buyArrowColor, s = e.sellArrowColor), {
                    x: void 0,
                    arrowUp: {
                        y: void 0,
                        color: i
                    },
                    arrowDown: {
                        y: void 0,
                        color: s
                    }
                }
            }
        },
        17353: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                ExecutionsPointsManager: () => a
            });
            var s = i(923195),
                r = i(869403),
                o = i.n(r);

            function n(t) {
                return void 0 !== t.index
            }
            class a {
                constructor(t, e, i) {
                    this._points = [], this._existingExecutionPointsCache = null, this._offsetOfFirstExistingPoint = null, this._existingPointsChanged = new(o()), this._pointsets = [], this._pointsetManagerFactory = e, this._firstSeriesTimePointWV = i, this._firstSeriesTimePointWV.subscribe(this._updateExistingPoints.bind(this)), this._executionsService = t, this._addPoints(this._executionsService.executions()), this._executionsService.executionsAdded().subscribe(this, this._addPoints), this._executionsService.executionsCleared().subscribe(this, this._clearPoints)
                }
                destroy() {
                    this._clearPoints(), this._firstSeriesTimePointWV.destroy(), this._executionsService.executionsAdded().unsubscribeAll(this), this._executionsService.executionsCleared().unsubscribeAll(this), this._executionsService.destroy()
                }
                existingPoints() {
                    return null === this._offsetOfFirstExistingPoint ? [] : (null === this._existingExecutionPointsCache && (this._existingExecutionPointsCache = this._points.slice(this._offsetOfFirstExistingPoint).filter(n)), this._existingExecutionPointsCache)
                }
                existingPointsChanged() {
                    return this._existingPointsChanged
                }
                _onExistingStartPointChanged() {
                    this._existingExecutionPointsCache = null, this._existingPointsChanged.fire(this.existingPoints())
                }
                _addPoints(t) {
                    if (0 === t.length) return;
                    const e = function(t) {
                        return t.map((t => {
                            const e = Math.round(t.time / 1e3);
                            return {
                                id: t.id,
                                price: t.price,
                                time_t: e,
                                index: void 0,
                                isBuyDirection: 1 === t.side,
                                tooltip: t.tooltip
                            }
                        }))
                    }(t);
                    e.sort(((t, e) => t.time_t - e.time_t));
                    let i = 0;
                    const r = this._points.length > 0;
                    r && (i = (0, s.upperbound)(this._points, e[0].time_t, ((t, e) => e.time_t > t), 0)), this._points = this._points.slice(0, i).concat(e).concat(this._points.slice(i));
                    const o = this._firstSeriesTimePointWV.value();
                    null !== this._offsetOfFirstExistingPoint && null !== o && e[0].time_t < o ? this._offsetOfFirstExistingPoint = this._offsetOfFirstExistingPoint + e.length : ((null === this._offsetOfFirstExistingPoint || e[0].time_t < this._points[this._offsetOfFirstExistingPoint].time_t) && (this._offsetOfFirstExistingPoint = this._calcOffsetOfFirstExistingPoint()), null !== this._offsetOfFirstExistingPoint && (r ? i >= this._offsetOfFirstExistingPoint && this._sendPointsToServer(i, i + e.length) : this._sendPointsToServer(this._offsetOfFirstExistingPoint, this._points.length)))
                }
                _updateExistingPoints() {
                    if (0 === this._points.length) return;
                    const t = this._calcOffsetOfFirstExistingPoint();
                    null !== t && (null === this._offsetOfFirstExistingPoint && (this._offsetOfFirstExistingPoint = this._points.length),
                        t < this._offsetOfFirstExistingPoint && (this._sendPointsToServer(t, this._offsetOfFirstExistingPoint), this._offsetOfFirstExistingPoint = t))
                }
                _clearPoints() {
                    for (const t of this._pointsets) t.onUpdate().unsubscribeAll(this), t.destroy();
                    this._pointsets = [], this._points = [], this._offsetOfFirstExistingPoint = null, this._onExistingStartPointChanged()
                }
                _sendPointsToServer(t, e) {
                    const i = this._points.slice(t, e).map((t => ({
                        time_t: t.time_t,
                        offset: 0
                    })));
                    if (0 === i.length) return;
                    const s = this._pointsetManagerFactory(i);
                    null !== s && (s.onUpdate().subscribe(this, this._updatePointsFromServer), this._pointsets.push(s))
                }
                _updatePointsFromServer(t) {
                    if (null === this._offsetOfFirstExistingPoint) return;
                    const e = (0, s.lowerbound)(this._points, t[0].time_t, ((t, e) => t.time_t < e), this._offsetOfFirstExistingPoint);
                    let i = Math.max(this._offsetOfFirstExistingPoint, e);
                    for (const e of t)
                        for (let t = i; t < this._points.length && (i = t, !(this._points[t].time_t > e.time_t)); t++) this._points[t].time_t === e.time_t && (this._points[t].index = e.index);
                    this._onExistingStartPointChanged()
                }
                _calcOffsetOfFirstExistingPoint() {
                    const t = this._firstSeriesTimePointWV.value();
                    return null === t ? null : (0, s.upperbound)(this._points, t, ((t, e) => e.time_t > t), 0, this._offsetOfFirstExistingPoint || this._points.length)
                }
            }
        },
        712731: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                ExecutionsSource: () => n
            });
            var s = i(133854),
                r = i(561791);
            const o = (0, i(125226).isFeatureEnabled)("enable_new_execution_style");
            class n extends s.ExecutionsSourceBase {
                constructor(t, e, i, s, r) {
                    super(t, e, r), this._showExecutions = i.arrowVisibility, this._showExecutionLabels = i.labelVisibility, this._globalVisibility = s, this._globalVisibility.subscribe(this.redraw.bind(this))
                }
                destroy() {
                    super.destroy(), this._showExecutions.destroy(), this._globalVisibility.unsubscribe()
                }
                hoveredExecution() {
                    return o ? super.hoveredExecution() : null
                }
                isLabelsVisible() {
                    return o && this._showExecutionLabels.value()
                }
                _createPaneViews() {
                    this._paneViews = [new r.ExecutionsPaneView(this._model, this)]
                }
                _isSourceShouldBeShown(t) {
                    return !!this._globalVisibility.value() && (!!this._showExecutions.value() && super._isSourceShouldBeShown(t))
                }
            }
        },
        740796: (t, e, i) => {
            "use strict";
            i.d(e, {
                styleGetter: () => h
            });
            var s = i(314967),
                r = i(114123),
                o = i(528474);
            const n = s.colorsPalette["color-tv-blue-500"],
                a = s.colorsPalette["color-ripe-red-500"],
                l = {
                    textColor: s.colorsPalette["color-cold-gray-200"],
                    overlayColor: (0, r.generateColor)(s.colorsPalette["color-cold-gray-900"], 50),
                    outlineColor: s.colorsPalette["color-cold-gray-900"]
                },
                c = {
                    textColor: s.colorsPalette["color-cold-gray-900"],
                    overlayColor: (0, r.generateColor)(s.colorsPalette["color-white"], 50),
                    outlineColor: s.colorsPalette["color-white"]
                };

            function h(t) {
                const e = t ? l : c,
                    {
                        textColor: i,
                        outlineColor: s
                    } = e,
                    r = (0, o.blendColors)(n, e.overlayColor),
                    h = (0, o.blendColors)(a, e.overlayColor);
                return {
                    buyArrowColor: n,
                    sellArrowColor: a,
                    inactiveBuyArrowColor: r,
                    inactiveSellArrowColor: h,
                    textColor: i,
                    outlineColor: s
                }
            }
        },
        980889: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                TradedItemsChartCollectionFacade: () => a
            });
            var s = i(650151),
                r = i(335144),
                o = i(858063),
                n = i(214644);
            class a {
                constructor(t) {
                    this._chartWidgetCollection = t
                }
                dropHoveredItem() {
                    this._activeWidgetChartModel().setHoveredSource(null, null)
                }
                setHoveredItem(t) {
                    this._setItemState(t, ((t, e) => {
                        this._activeWidgetChartModel().setHoveredSource(t, e)
                    }))
                }
                setSelectedItem(t) {
                    this._setItemState(t, ((t, e) => {
                        this._activeWidgetChartModel().selectionMacro((i => {
                            if (t) i.clearSelection(), i.addSourceToSelection(t, e);
                            else {
                                i.selection().customSources().find(n.isTradedGroupCustomSource) && i.clearSelection()
                            }
                        }))
                    }))
                }
                _setItemState(t, e) {
                    const {
                        source: i,
                        item: s
                    } = this._findSourceAndItem(t.id, t.type);
                    if (!i || !s) return void e(null, null);
                    e(i, new o.HitTestResult(o.HitTestResult.CUSTOM, {
                        activeItem: {
                            id: s.id(),
                            part: 8
                        }
                    }).data())
                }
                _activeWidgetChartModel() {
                    return (0, s.ensureNotNull)(this._chartWidgetCollection.activeChartWidget.value()).model().model()
                }
                _findSourceAndItem(t, e) {
                    for (const i of this._activeWidgetChartModel().customSources(r.CustomSourceLayer.Topmost))
                        if ((0, n.isTradedGroupCustomSource)(i)) {
                            const s = i.findItemWithType(t, e);
                            if (s) return {
                                source: i,
                                item: s
                            }
                        }
                    return {}
                }
            }
        },
        134829: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                BidAsk: () => f
            });
            var s = i(650151),
                r = i(758337),
                o = i(733352),
                n = i(169323),
                a = i(471502);
            class l extends a.PriceLineAxisView {
                constructor(t, e, i) {
                    super(), this._model = t, this._source = e, this._priceType = i
                }
                _value() {
                    const t = this._model.mainSeries(),
                        e = t.priceScale(),
                        i = t.firstValue();
                    if (null === i) return {
                        noData: !0
                    };
                    const s = this._source.getPrice(this._priceType);
                    if (null === s) return {
                        noData: !0
                    };
                    const r = e.priceToCoordinate(s, i);
                    return {
                        noData: !1,
                        floatCoordinate: r,
                        coordinate: r,
                        color: "",
                        formattedPricePercentage: "",
                        formattedPriceAbsolute: "",
                        formattedPriceIndexedTo100: "",
                        text: "",
                        index: 0
                    }
                }
                _priceLineColor(t) {
                    const e = this._source.properties().childs();
                    return 0 === this._priceType ? e.bidLineColor.value() : e.askLineColor.value()
                }
                _lineWidth() {
                    return this._source.properties().childs().lineWidth.value()
                }
                _lineStyle() {
                    return this._source.properties().childs().lineStyle.value()
                }
                _isVisible() {
                    return this._source.properties().childs().visible.value()
                }
            }
            var c = i(777754),
                h = i(841404),
                u = i(114123);
            class d extends h.PriceAxisView {
                constructor(t, e, i) {
                    super(), this._model = t, this._source = e, this._priceType = i
                }
                _updateRendererData(t, e, s) {
                    if (t.visible = !1, e.visible = !1, !this._model.properties().childs().scalesProperties.childs().showBidAskLabels.value()) return;
                    const r = this._model.mainSeries(),
                        o = r.priceScale(),
                        n = r.firstValue();
                    if (null === n) return;
                    const a = this._source.getPrice(this._priceType);
                    if (null === a) return;
                    t.visible = !0, e.visible = !0, t.text = o.formatPriceAbsolute(a), e.text = 0 === this._priceType ? c.t(null, void 0, i(6205)) : c.t(null, void 0, i(987300)), s.coordinate = o.priceToCoordinate(a, n);
                    const l = this._source.properties().childs();
                    s.background = 0 === this._priceType ? (0, u.resetTransparency)(l.bidLineColor.value()) : (0, u.resetTransparency)(l.askLineColor.value())
                }
            }
            var _ = i(594358),
                p = i(858063);
            class x extends _.HorizontalLinePaneView {
                constructor(t, e, i, s) {
                    super(), this._model = t, this._source = e, this._priceType = i;
                    const r = {
                        doubleClickHandler: s,
                        doubleTapHandler: s
                    };
                    this._lineRenderer.setHitTest(new p.HitTestResult(p.HitTestResult.REGULAR, r))
                }
                _updateImpl() {
                    const t = this._lineRendererData;
                    t.visible = !1;
                    const e = this._source.properties().childs();
                    if (!e.visible.value()) return;
                    const i = this._model.mainSeries(),
                        s = i.priceScale(),
                        r = i.firstValue();
                    if (null === r) return;
                    const o = this._source.getPrice(this._priceType);
                    null !== o && (t.visible = !0, t.y = s.priceToCoordinate(o, r), t.linestyle = e.lineStyle.value(), t.linewidth = e.lineWidth.value(), t.color = 0 === this._priceType ? e.bidLineColor.value() : e.askLineColor.value())
                }
            }
            var b = i(404822);
            class f extends n.CustomSourceBase {
                constructor(t, e, i, s) {
                    super(t, e), this._ask = null, this._bid = null, this._symbol = null, this._realtimeProvider = i, this._bidLinesPaneView = new x(e, this, 0, s), this._askLinesPaneView = new x(e, this, 1, s), this._bidPriceAxisView = new d(e, this, 0), this._askPriceAxisView = new d(e, this, 1), this._regularPriceAxisViews = [this._bidPriceAxisView, this._askPriceAxisView], this._bidLabelPaneView = new o.PanePriceAxisView(this._bidPriceAxisView, e.mainSeries(), e), this._askLabelPaneView = new o.PanePriceAxisView(this._askPriceAxisView, e.mainSeries(), e), this._bidPriceLineAxisView = new l(e, this, 0), this._askPriceLineAxisView = new l(e, this, 1), this._externalPriceAxisViews = [this._bidPriceLineAxisView, this._askPriceLineAxisView], this._updateRealtimeDataHandler = this._updateRealtimeData.bind(this);
                    const r = e.mainSeries().dataEvents();
                    r.symbolResolved().subscribe(this, this._createTradedSymbol), r.symbolError().subscribe(this, this._createTradedSymbol), this._createTradedSymbol()
                }
                destroy() {
                    const t = this._model.mainSeries().dataEvents();
                    t.symbolResolved().unsubscribeAll(this), t.symbolError().unsubscribeAll(this), this._clearTradedSymbol()
                }
                paneViews(t) {
                    return this._isMainSourcePane(t) ? [this._bidLinesPaneView, this._askLinesPaneView] : []
                }
                labelPaneViews(t) {
                    return this._isMainSourcePane(t) ? [this._bidLabelPaneView, this._askLabelPaneView] : []
                }
                priceAxisViews(t, e) {
                    return this._isMainSourcePane(t) ? t.findTargetPriceAxisViews(this, e, this._regularPriceAxisViews, this._externalPriceAxisViews) : []
                }
                priceScale() {
                    return this._model.mainSeries().priceScale()
                }
                updateAllViews(t) {
                    this._bidLinesPaneView.update(t), this._askLinesPaneView.update(t), this._bidPriceAxisView.update(t), this._askPriceAxisView.update(t), this._bidPriceLineAxisView.update(t), this._askPriceLineAxisView.update(t), this._bidLabelPaneView.update(t), this._askLabelPaneView.update(t)
                }
                getPrice(t) {
                    return 1 === t ? this._ask : this._bid
                }
                properties() {
                    return this._model.mainSeries().properties().childs().bidAsk
                }
                _createTradedSymbol() {
                    const t = function(t) {
                        if (t.isConvertedToOtherCurrency() || t.isConvertedToOtherUnit()) return null;
                        const e = t.symbolInfo();
                        return null === e ? t.proSymbol() : e.pro_name || null
                    }(this._model.mainSeries());
                    t !== this._symbol && (this._clearTradedSymbol(), null !== t && this._initTradedSymbol(t))
                }
                _initTradedSymbol(t) {
                    this._symbol = t, this._realtimeProvider.subscribeRealtime(this._symbol, this._updateRealtimeDataHandler)
                }
                _clearTradedSymbol() {
                    this._ask = null, this._bid = null, null !== this._symbol && (this._realtimeProvider.unsubscribeRealtime((0, s.ensureNotNull)(this._symbol), this._updateRealtimeDataHandler), this._symbol = null)
                }
                _updateRealtimeData(t, e, i) {
                    const s = e.ask,
                        o = e.bid;
                    s === o ? (this._ask = null, this._bid = null) : ((0,
                        r.isNumber)(s) && (this._ask = s), (0, r.isNumber)(o) && (this._bid = o)), (this._model.mainSeries().properties().childs().bidAsk.childs().visible.value() || this._model.properties().childs().scalesProperties.childs().showBidAskLabels.value()) && (this.updateAllViews((0, b.sourceChangeEvent)(this.id())), this._model.updateSource(this))
                }
                _isMainSourcePane(t) {
                    return this._model.paneForSource(this._model.mainSeries()) === t
                }
            }
        },
        547635: (t, e, i) => {
            "use strict";
            i.d(e, {
                ExecutionsBasePaneView: () => a
            });
            var s = i(311854),
                r = i(812363),
                o = i(923195),
                n = i(740796);
            class a {
                constructor(t) {
                    this._invalidated = !0, this._chartModel = t
                }
                update() {
                    this._invalidated = !0
                }
                renderer() {
                    return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._renderer
                }
                _updateImpl() {
                    this._renderer.setData({
                        points: [],
                        labels: [],
                        arrowHeight: 0,
                        arrowSpacing: 0
                    });
                    const t = this._chartModel.timeScale().visibleBarsStrictRange();
                    if (null === t) return;
                    const e = this._source.points();
                    if (0 === e.length) return;
                    const i = (0, o.lowerbound)(e, t.firstBar(), ((t, e) => t.index < e), 0),
                        s = (0, o.upperbound)(e, t.lastBar(), ((t, e) => e.index > t), i);
                    if (i >= s) return;
                    const r = e.slice(i, s),
                        n = this._createRenderData(r);
                    this._renderer.setData(n)
                }
                _getXCoordinate(t) {
                    const e = this._chartModel.mainSeries().bars().lastIndex();
                    return null === e || t > e ? null : this._chartModel.timeScale().indexToCoordinate(t)
                }
                _getYCoordinate(t, e) {
                    let i = null;
                    const o = this._chartModel.mainSeries(),
                        n = o.priceSource(),
                        a = null !== n ? n : e ? "low" : "high",
                        l = (0, s.barFunction)(a),
                        c = o.nearestData(t, r.PlotRowSearchMode.NearestLeft);
                    if (void 0 !== c) {
                        const t = l(c.value);
                        Number.isNaN(t) || (i = this._priceToCoordinate(t))
                    }
                    return i
                }
                _priceToCoordinate(t) {
                    const e = this._chartModel.mainSeries(),
                        i = e.firstValue();
                    return i ? e.priceScale().priceToCoordinate(t, i) : null
                }
                _isPriceScaleInverted() {
                    return this._chartModel.mainSeries().priceScale().isInverted()
                }
                _styleGetter() {
                    return (0, n.styleGetter)(this._chartModel.isDark())
                }
            }
        },
        133854: (t, e, i) => {
            "use strict";
            i.d(e, {
                ExecutionsSourceBase: () => n
            });
            var s = i(169323),
                r = i(404822),
                o = i(495046);
            class n extends s.CustomSourceBase {
                constructor(t, e, i) {
                    super(t, e), this._paneViews = [], this._executionsPointsManager = i, this._executionsPointsManager.existingPointsChanged().subscribe(this, this.redraw), this._createPaneViews()
                }
                redraw() {
                    this.updateAllViews((0, r.sourceChangeEvent)(this.id())), this._model.updateSource(this)
                }
                points() {
                    return this._executionsPointsManager.existingPoints()
                }
                updateAllViews(t) {
                    for (const e of this._paneViews) e.update(t)
                }
                paneViews(t) {
                    return this._isSourceShouldBeShown(t) ? this._paneViews : []
                }
                hoveredExecution() {
                    const t = this._model.hoveredSource() === this && this._model.lastHittestData() || null;
                    return null === t || void 0 === t.activeItem ? null : t.activeItem
                }
                destroy() {
                    this._executionsPointsManager.existingPointsChanged().unsubscribe(this, this.redraw), this._executionsPointsManager.destroy()
                }
                _isSourceShouldBeShown(t) {
                    return !!t.containsMainSeries() && !(window.TradingView.printing && !o.enabled("snapshot_trading_drawings"))
                }
            }
        },
        987300: t => {
            t.exports = {
                ar: ["سعر الشراء"],
                ca_ES: "Ask",
                cs: "Ask",
                de: "Ask",
                el: "Ask",
                en: "Ask",
                es: "Ask",
                fa: "Ask",
                fr: ["Demande"],
                he_IL: ["מחיר ביקוש"],
                hu_HU: ["Vételi ár"],
                id_ID: "Ask",
                it: ["Lettera"],
                ja: "Ask",
                ko: ["매도호가"],
                ms_MY: ["Tawar"],
                nl_NL: "Ask",
                pl: ["Cena Ask"],
                pt: ["Venda"],
                ro: "Ask",
                ru: ["Аск"],
                sv: ["Fråga"],
                th: ["เสนอซื้อ"],
                tr: ["Al"],
                vi: "Ask",
                zh: "Ask",
                zh_TW: "Ask"
            }
        },
        6205: t => {
            t.exports = {
                ar: ["سعر البيع"],
                ca_ES: "Bid",
                cs: "Bid",
                de: "Bid",
                el: "Bid",
                en: "Bid",
                es: "Bid",
                fa: "Bid",
                fr: ["Offre"],
                he_IL: ["מחיר היצע"],
                hu_HU: ["Kínálati ár"],
                id_ID: "Bid",
                it: ["Denaro"],
                ja: "Bid",
                ko: ["매수호가"],
                ms_MY: ["Bida"],
                nl_NL: "Bid",
                pl: ["Cena Bid"],
                pt: ["Compra"],
                ro: "Bid",
                ru: ["Бид"],
                sv: "Bid",
                th: ["เสนอขาย"],
                tr: ["Sat"],
                vi: "Bid",
                zh: "Bid",
                zh_TW: "Bid"
            }
        }
    }
]);
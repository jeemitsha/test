"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [89397, 3657], {
        651723: (t, e, s) => {
            s.d(e, {
                createDwmAligner: () => d,
                createTimeToBarTimeAligner: () => c
            });
            var i = s(747342),
                n = s(495046),
                r = s(568450),
                o = s(726322),
                a = s(666100);
            const u = new o.SessionInfo("Etc/UTC", "0000-0000:1234567");

            function d(t, e) {
                if (!l() || !r.Interval.isDWM(t)) return null;
                const s = new o.SessionInfo(e.timezone, e.session, e.session_holidays, e.corrections),
                    n = (0, a.newBarBuilder)(t, s, u);
                return {
                    timeToSessionStart: t => n.tradingDayToSessionStart(t),
                    timeToExchangeTradingDay: t => {
                        const e = i.utc_to_cal(s.timezone, t),
                            n = s.spec.correctTradingDay(e);
                        return i.set_hms(n, 0, 0, 0, 0, i.get_timezone("Etc/UTC")), n.getTime()
                    }
                }
            }

            function l() {
                return !n.enabled("disable_resolution_rebuild")
            }

            function c(t, e) {
                if (!l()) return t => t;
                const s = new o.SessionInfo(e.timezone, e.session, e.session_holidays, e.corrections),
                    i = (0, a.newBarBuilder)(t, s, s, !1);
                return t => i.alignTimeIfPossible(t)
            }
        },
        289397: (t, e, s) => {
            s.r(e), s.d(e, {
                cloneLineTool: () => ie,
                createLineTool: () => Kt,
                createLineToolProperties: () => Jt,
                createStudyLineToolProperties: () => Qt,
                getNewToolProperties: () => qt,
                isLineDrawnWithPressedButton: () => Ot.isLineDrawnWithPressedButton,
                isLineTool: () => Zt,
                isLineToolName: () => Ot.isLineToolName,
                isStudyLineTool: () => te,
                isStudyLineToolName: () => Ot.isStudyLineToolName,
                isTrading: () => ee,
                lineToolByLinkKey: () => ne,
                prepareLineToolPropertiesByOwnerSource: () => Xt,
                setNewToolProperties: () => jt,
                supportsPhantomMode: () => Yt,
                tryFindStudyLineToolNameByStudyId: () => se,
                unsetNewToolProperties: () => Ht
            });
            var i = {};
            s.r(i), s.d(i, {
                LineStudyMtpAnalysis: () => nt,
                LineStudyMtpDecisionPoint: () => ot,
                LineStudyMtpDownWave1OrA: () => gt,
                LineStudyMtpDownWave2OrB: () => ft,
                LineStudyMtpDownWave3: () => wt,
                LineStudyMtpDownWave4: () => vt,
                LineStudyMtpDownWave5: () => Ct,
                LineStudyMtpDownWaveC: () => Dt,
                LineStudyMtpElliotWaveMain: () => ct,
                LineStudyMtpElliotWaveMajor: () => pt,
                LineStudyMtpElliotWaveMinor: () => yt,
                LineStudyMtpRiskReward: () => ut,
                LineStudyMtpUpWave1OrA: () => Vt,
                LineStudyMtpUpWave2OrB: () => Mt,
                LineStudyMtpUpWave3: () => Rt,
                LineStudyMtpUpWave4: () => Ut,
                LineStudyMtpUpWave5: () => Et,
                LineStudyMtpUpWaveC: () => kt
            });
            var n = s(650151),
                r = s(86441),
                o = s(323017),
                a = s(425864),
                u = s(892142),
                d = s(272124),
                l = s.t(d, 2),
                c = s(149590),
                h = s(619276),
                p = s(108184),
                _ = s(788777),
                y = s(241056),
                S = s(758337),
                m = s(87225);
            const g = (0, h.studyIdString)("RegressionTrend", "tv-basicstudies");

            function P(t) {
                return void 0 !== t.startPrice && void 0 !== t.endPrice
            }

            function f(t, e, s, i) {
                return e.styles && (I(e.styles.baseLine), I(e.styles.downLine), I(e.styles.upLine)), e
            }

            function I(t) {
                void 0 !== t && void 0 !== t.visible && (t.display = t.visible ? 15 : 0, delete t.visible)
            }
            class w extends a.StudyLineDataSource {
                constructor(t, e, i, r, o) {
                    i = null != i ? i : (0, n.ensureNotNull)(t.studyMetaInfoRepository().findByIdSync({
                        type: "java",
                        studyId: g
                    }));
                    super(t, i, "linreg_", null != e ? e : w.createProperties(t), r, o), this.version = 2, this._trendData = null, Promise.all([s.e(47342), s.e(81679), s.e(51583)]).then(s.bind(s, 955345)).then((t => {
                        this._setPaneViews([new t.RegressionTrendPaneView(this, this._model)])
                    }))
                }
                formatter() {
                    throw new Error("This method should never be called")
                }
                pointsCount() {
                    return 2
                }
                clearData() {
                    this._trendData = null, super.clearData()
                }
                state(t) {
                    var e;
                    const s = super.state(t);
                    return t ? { ...s,
                        nonseriesdata: null !== (e = this._trendData) && void 0 !== e ? e : void 0
                    } : s
                }
                restoreData(t) {
                    var e;
                    super.restoreData(t), this._trendData = null !== (e = t.nonseriesdata) && void 0 !== e ? e : null
                }
                startIndex() {
                    if (null === this._trendData || null === this._indexes) return null;
                    const t = this._indexes[this._trendData.startIndex];
                    return t !== c.INVALID_TIME_POINT_INDEX ? t : null
                }
                endIndex() {
                    if (null === this._trendData || null === this._indexes) return null;
                    const t = this._indexes[this._trendData.endIndex];
                    return t !== c.INVALID_TIME_POINT_INDEX ? t : null
                }
                baseLine() {
                    return null === this._trendData ? null : this._trendData.baseLine
                }
                downLine() {
                    return null === this._trendData ? null : this._trendData.downLine
                }
                upLine() {
                    return null === this._trendData ? null : this._trendData.upLine
                }
                pearsons() {
                    return null === this._trendData ? null : this._trendData.pearsons
                }
                recalcStudyIfNeeded() {
                    this._onStudyInputsMayChange()
                }
                cloneable() {
                    return !1
                }
                static createProperties(t, e) {
                    const s = p.StudyMetaInfo.getStudyPropertyRootNameById(g),
                        i = (0, n.ensureNotNull)(t.studyMetaInfoRepository().findByIdSync({
                            type: "java",
                            studyId: g
                        })),
                        r = (0, m.createDefaultsState)(!0, s, [], t.studyVersioning());
                    return this.createRegressionTrendPropertiesFromStudyMetaInfoAndState(i, i, (0, S.merge)((0, S.clone)(r), null != e ? e : {}), t.studyVersioning())
                }
                static createRegressionTrendPropertiesFromStudyMetaInfoAndState(t, e, s, i) {
                    const n = (0, _.prepareStudyPropertiesForLoadChart)(t, e, s, i, f);
                    return this._configureProperties(n), n
                }
                static studyId() {
                    return g
                }
                _studyInputs(t) {
                    (0, n.assert)(2 === t.length, "all the line tool points should be defined");
                    const [e, s] = t;
                    if (e.index === s.index) return null;
                    const i = this._getPointTime(e.index <= s.index ? e : s, !0),
                        r = this._getPointTime(s.index >= e.index ? s : e, !0);
                    return null === i || null === r ? (this._subscribeApplyInputsOnSeriesCompleted(), null) : { ...this.properties().childs().inputs.state(),
                        "first bar time": 1e3 * i,
                        "last bar time": 1e3 * r
                    }
                }
                _onDataUpdated(t, e, s) {
                    null !== e && (e.indexes_replace || (this._trendData = e.data), "nochange" !== s && (this._indexes = s), super._onDataUpdated(t, e, s))
                }
                _isReady() {
                    return null !== this._trendData && void 0 !== this._trendData.startIndex && void 0 !== this._trendData.endIndex && P(this._trendData.upLine) && P(this._trendData.baseLine) && P(this._trendData.downLine)
                }
                _updateAnchorsPrice() {
                    if (!this._trendData || (0, S.isNaN)(this._trendData.baseLine.startPrice) || (0, S.isNaN)(this._trendData.baseLine.endPrice)) return;
                    const {
                        startPrice: t,
                        endPrice: e
                    } = this._trendData.baseLine;
                    2 === this._points.length && (this._points[0].price = (0, n.ensureDefined)(t), this._points[1].price = (0, n.ensureDefined)(e), this._timePoint[0].price = (0, n.ensureDefined)(t), this._timePoint[1].price = (0, n.ensureDefined)(e))
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([s.e(88601), s.e(79533), s.e(41009), s.e(36339), s.e(44728), s.e(68833), s.e(60821), s.e(60607)]).then(s.bind(s, 590837))).RegressionTrendDefinitionsViewModel
                }
                static _configureProperties(t) {
                    super._configureProperties(t);
                    const e = t.childs().styles.childs(),
                        s = [e.upLine.childs().linewidth, e.downLine.childs().linewidth, e.baseLine.childs().linewidth];
                    t.addChild("linesWidths", new y.LineToolWidthsProperty(s))
                }
            }
            var b = s(401596);
            const v = (0, h.studyIdString)("VbPFixed", "tv-basicstudies");
            class T extends b.LineToolVbPFixed {
                constructor(t, e, s, i, n) {
                    const r = s || t.studyMetaInfoRepository().findByIdSync({
                        type: "java",
                        studyId: v
                    });
                    super(t, e, r, i, n)
                }
                calcIsActualSymbol() {
                    a.StudyLineDataSource.prototype.calcIsActualSymbol.apply(this)
                }
                boundToSymbol() {
                    return !0
                }
                isSynchronizable() {
                    return this.priceScale() === this._model.mainSeries().priceScale()
                }
                static studyId() {
                    return v
                }
                static createProperties(t, e) {
                    const s = p.StudyMetaInfo.getStudyPropertyRootNameById(v),
                        i = (0, n.ensureNotNull)(t.studyMetaInfoRepository().findByIdSync({
                            type: "java",
                            studyId: v
                        })),
                        r = (0, m.createDefaultsState)(!0, s, [], t.studyVersioning());
                    return this.createPropertiesFromStudyMetaInfoAndState(i, i, (0, S.merge)((0, S.clone)(r), null != e ? e : {}), t.studyVersioning())
                }
                static createPropertiesFromStudyMetaInfoAndState(t, e, s, i) {
                    const n = (0, _.prepareStudyPropertiesForLoadChart)(t, e, s, i);
                    return this._configureProperties(n), n
                }
            }
            var C = s(988411),
                A = s.n(C),
                D = s(495046),
                x = s(212110),
                V = s(333429),
                L = s(933024),
                M = s(40210),
                F = s.n(M),
                R = s(168210),
                N = s(812363),
                U = s(841404),
                B = s(114123);
            class E extends U.PriceAxisView {
                constructor(t) {
                    super(), this._model = t.model(), this._source = t
                }
                _updateRendererData(t, e, s) {
                    t.visible = !1, e.visible = !1;
                    const i = this._source.model(),
                        n = this._source.priceScale();
                    if (null === n) return;
                    if (!i.isPriceScaleVisible(n)) return;
                    const r = this._source.lastValueData("", !1);
                    r.noData || (s.background = (0, B.resetTransparency)(r.color), s.textColor = this.generateTextColor(r.color), s.coordinate = r.coordinate, s.floatCoordinate = r.floatCoordinate, this._showAxisLabel() && (t.text = r.text, t.visible = !0))
                }
                _showAxisLabel() {
                    return this._source.properties().childs().axisLabelVisible.value()
                }
            }
            var W = s(823757),
                k = s(517220),
                O = s(831699);
            class $ extends k.StudyPlotPaneView {
                constructor(t, e, s, i) {
                    super(t, e, s, i), this._line = t
                }
                _updateImplFull() {
                    if (super._updateImplFull(!0), window.TradingView.printing || !this._line.hasAlert.value() || this._model.readOnly() || this._model.isInReplay()) return !1;
                    const t = this._items;
                    if (!this._renderer.isEmpty() && t.length > 0) {
                        const e = t[t.length - 1],
                            s = this._model.timeScale().width();
                        if (e.x < 0 || t[0].x > s) return !1;
                        const i = Math.min(s - 5, e.x);
                        let n = e.y;
                        if (e.x > i) {
                            let s = t.length - 2;
                            for (; s >= 0;) {
                                const r = t[s];
                                if (r.x <= i) {
                                    const t = (i - r.x) / (e.x - r.x);
                                    n = r.y + (e.y - r.y) * t;
                                    break
                                }
                                s -= 1
                            }
                        }
                        const o = new r.Point(i, n);
                        return this._renderer.append(new O.PaneRendererClockIcon({
                            points: [o],
                            color: this._line.getAlertIsActive() ? this._lineColor : W.Constants.DrawingIconColor,
                            horzMargin: -16
                        })), !0
                    }
                    return !1
                }
                _updateImplLight() {
                    this._updateImplFull()
                }
            }
            var z = s(272001),
                G = s(925622),
                j = s(224186),
                H = s(809350),
                q = s(404822);
            const K = (0, z.getLogger)("Chart.AnchoredVWAP"),
                X = (0, h.studyIdString)("AnchoredVWAP", "tv-basicstudies");

            function J(t, e, s, i) {
                return "calculate_stDev" in (0, n.ensureDefined)(t.inputs) || void 0 === i.inputs.find((t => "calculate_stDev" === t.id)) || ((0, n.ensureDefined)(e.inputs).calculate_stDev = !1),
                    e.styles && (Q(e.styles.VWAP), Q(e.styles.UpperBand), Q(e.styles.LowerBand), Q(e.styles.UpperBand_2), Q(e.styles.LowerBand_2), Q(e.styles.UpperBand_3), Q(e.styles.LowerBand_3)), e
            }

            function Q(t) {
                void 0 !== t && void 0 !== t.visible && (t.display = t.visible ? 15 : 0, delete t.visible)
            }
            class Y extends a.StudyLineDataSource {
                constructor(t, e, s, i, r) {
                    s = s || (0, n.ensureNotNull)(t.studyMetaInfoRepository().findByIdSync({
                        type: "java",
                        studyId: X
                    }));
                    const o = null != e ? e : Y.createProperties(t);
                    super(t, s, "anchoredvwap", o, i, r);
                    const [a, u, d, l, c, h, p] = this.metaInfo().plots, _ = t.mainSeries(), y = [new $(this, _, t, a.id)];
                    u && d && (y.push(new k.StudyPlotPaneView(this, _, t, u.id)), y.push(new k.StudyPlotPaneView(this, _, t, d.id))), l && c && h && p && (y.push(new k.StudyPlotPaneView(this, _, t, l.id)), y.push(new k.StudyPlotPaneView(this, _, t, c.id)), y.push(new k.StudyPlotPaneView(this, _, t, h.id)), y.push(new k.StudyPlotPaneView(this, _, t, p.id))), this._properties.childs().areaBackground && y.splice(0, 0, new j.AreaBackgroundPaneView(this, t)), this._lastValuePriceAxisView = new E(this), this._anchorPriceCalculated = !1, this._onInputsReadyCallbacks = [], this._setPaneViews(y), t.properties().childs().scalesProperties.childs().showStudyLastValue.subscribe(this, this._onShowStudyLastValueChanged), o.onRestoreFactoryDefaults().subscribe(this, this._onRestoreFactoryDefaults)
                }
                destroy() {
                    this.properties().onRestoreFactoryDefaults().unsubscribeAll(this), this.model().properties().childs().scalesProperties.childs().showStudyLastValue.unsubscribeAll(this), this._onInputsReadyCallbacks = [], super.destroy()
                }
                canHasAlert() {
                    return !0
                }
                pointsCount() {
                    return 1
                }
                priceAxisViews(t, e) {
                    if (e !== this.priceScale() || this.isSourceHidden()) return null;
                    const s = super.priceAxisViews(t, e);
                    return null === s ? [this._lastValuePriceAxisView] : [...s, this._lastValuePriceAxisView]
                }
                updateAllViews(t) {
                    super.updateAllViews(t), this._lastValuePriceAxisView.update(t)
                }
                offset(t) {
                    return 0
                }
                firstValue() {
                    return this._model.mainSeries().firstValue()
                }
                getMinFirstBarIndexForPlot() {
                    return -1 / 0
                }
                priceRange(t, e) {
                    if (!this._isReady() || this.isSourceHidden()) return null;
                    const s = this.plots().minMaxOnRangeCached(t, e, [{
                        name: this.metaInfo().plots[0].id,
                        offset: 0
                    }]);
                    if (null === s) return null;
                    const i = (0, n.ensureNotNull)(this.priceScale());
                    return i.isLog() ? new R.PriceRange(i.priceToLogical(s.min), i.priceToLogical(s.max)) : new R.PriceRange(s.min, s.max)
                }
                isIncludedInAutoScale() {
                    return !0
                }
                lastValueData(t, e, s) {
                    const i = {
                            noData: !0
                        },
                        r = this.priceScale();
                    if (this._model.timeScale().isEmpty() || null === this.priceScale() || null === r || r.isEmpty() || this.plots().isEmpty()) return i;
                    const o = this._model.timeScale().visibleBarsStrictRange();
                    if (null === o) return i;
                    if (!this.properties().childs().visible.value()) return i;
                    const a = this.plots().search(o.lastBar(), N.PlotRowSearchMode.NearestLeft, 1);
                    if (null === a) return i;
                    const u = o.contains(a.index),
                        d = !e && u ? a : (0, n.ensureNotNull)(this.plots().last());
                    if (!d || !(0, S.isNumber)(d.value[1])) return i;
                    const l = d.value[1],
                        c = this.properties().childs().styles.childs().VWAP,
                        h = (0, n.ensureNotNull)(this.firstValue()),
                        p = r.priceToCoordinate(l, h);
                    return { ...r.getFormattedValues(l, h),
                        noData: !1,
                        price: l,
                        color: c.childs().color.value(),
                        coordinate: p,
                        floatCoordinate: p,
                        index: d.index
                    }
                }
                restoreData(t) {
                    super.restoreData(t), void 0 !== t.data && (this._anchorPriceCalculated = !0)
                }
                properties() {
                    return super.properties()
                }
                sourceId() {
                    return this._studyId()
                }
                hasStateForAlert() {
                    return D.enabled("alerts") && null !== this._inputs
                }
                alertCreationAvailable() {
                    return new(A())(!this.hasAlert.value() && this.hasStateForAlert()).readonly()
                }
                stateForAlert() {
                    const t = this.metaInfo(),
                        e = (0, L.plotsForAlert)(t, this.offset.bind(this), ["VWAP"]),
                        s = (0, L.collectDepsForAlert)([this], this.id()),
                        i = s.idForAlert,
                        n = s.studyDependencies,
                        r = s.inputsForAlert,
                        o = (this.priceScale() || this.model().mainSeries().priceScale()).formatter(),
                        a = o ? V.FormattersSerializer.serialize(o) : null;
                    return {
                        id: i,
                        uniqueId: i,
                        type: G.StateForAlertType.StudyLineTool,
                        title: (0, H.clean)(this.translatedType(), !0),
                        shortTitle: (0, H.clean)(this.translatedType(), !0),
                        shortDescription: (0, H.clean)(t.shortDescription || "Study", !0),
                        interval: this._model.mainSeries().interval(),
                        fullId: t.fullId,
                        isTVScript: Boolean(t.isTVScript),
                        isTVScriptStrategy: Boolean(t.isTVScriptStrategy),
                        isTVLibrary: Boolean(t.isTVLibrary),
                        hasAlertFunction: Boolean(t.hasAlertFunction),
                        plots: e,
                        inputs: r,
                        alerts: t.alerts,
                        scriptIdPart: t.scriptIdPart,
                        scriptVersion: t.pine ? t.pine.version : "-1",
                        callStudyDependencies: (0, x.formatCallstudyArg)((0, L.dependenciesForAlerts)([], this._model.studyMetaInfoRepository())),
                        studyDependencies: n,
                        formatter: a
                    }
                }
                inputsForAlertState() {
                    null === this._inputs && K.logError("Could not get inputsForAlertState if VWAP has no inputs");
                    const {
                        start_time: t,
                        source: e
                    } = this.inputs();
                    return {
                        start_time: t,
                        source: e
                    }
                }
                inputs() {
                    return (0, n.ensureNotNull)(this._inputs)
                }
                idForAlert() {
                    return (0, L.collectDepsForAlert)([this], this.id()).idForAlert
                }
                defaultPlotIdForAlert() {
                    return this.metaInfo().plots[0].id
                }
                isPlotVisibleAt(t, e) {
                    return (this.properties().childs().styles.childs()[t].childs().display.value() & e) === e
                }
                static createProperties(t, e) {
                    const s = p.StudyMetaInfo.getStudyPropertyRootNameById(X),
                        i = (0, n.ensureNotNull)(t.studyMetaInfoRepository().findByIdSync({
                            type: "java",
                            studyId: X
                        })),
                        r = (0, m.createDefaultsState)(!0, s, [], t.studyVersioning());
                    return this.createPropertiesFromStudyMetaInfoAndState(i, i, (0, S.merge)((0, S.clone)(r), null != e ? e : {}), t.studyVersioning())
                }
                static studyId() {
                    return X
                }
                static createPropertiesFromStudyMetaInfoAndState(t, e, s, i) {
                    const n = (0, _.prepareStudyPropertiesForLoadChart)(t, e, s, i, J);
                    return this._configureProperties(n), n
                }
                _onPointsetUpdated(t) {
                    super._onPointsetUpdated(t), this._onStudyInputsMayChange()
                }
                _studyInputs(t) {
                    (0, n.assert)(1 === t.length, "all the line tool points should be defined");
                    const e = t[0],
                        s = this._getPointTime(e, !1);
                    return null === s ? (this._subscribeApplyInputsOnSeriesCompleted(), null) : { ...this.properties().childs().inputs.state(["start_time"]),
                        start_time: 1e3 * s
                    }
                }
                _isReady() {
                    return super._isReady() && (null !== this._inputs || this._anchorPriceCalculated) && this.model().lineBeingEdited() !== this
                }
                _onDataCleared() {
                    super._onDataCleared(), this._anchorPriceCalculated = !1
                }
                _onInputsChanged() {
                    if (super._onInputsChanged(), null !== this._inputs) {
                        for (const t of this._onInputsReadyCallbacks) try {
                            t(this._inputs)
                        } catch (t) {
                            K.logError(t.stack || t.message)
                        }
                        this._onInputsReadyCallbacks = []
                    }
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([s.e(79533), s.e(83278), s.e(44728), s.e(60821), s.e(18537)]).then(s.bind(s, 509985))).AnchoredVWAPDefinitionsViewModel
                }
                _updateAnchorsPrice(t) {
                    if (!t && (this._anchorPriceCalculated || !this.isActualSymbol())) return;
                    const e = this.firstValue(),
                        s = this.points();
                    if (null === e || 0 === s.length) return;
                    const i = s[0].index,
                        n = this.plots().valueAt(i);
                    if (null === n) return;
                    const r = n[1];
                    null != r && (this._points[0].price = r, this._timePoint[0].price = r, this._anchorPriceCalculated = !0)
                }
                _synchronizeAlert(t) {
                    this._onInputsReady((() => super._synchronizeAlert(t)))
                }
                static _configureProperties(t) {
                    super._configureProperties(t), t.hasChild("axisLabelVisible") || t.addChild("axisLabelVisible", new(F())(true));
                    const e = t.childs().styles.childs().VWAP.childs().linewidth,
                        s = t.childs().styles.childs().VWAP.childs().color;
                    t.addChild("linesWidths", new y.LineToolWidthsProperty([e])), t.addChild("linesColors", new y.LineToolColorsProperty([s]))
                }
                _onInputsReady(t) {
                    null !== this._inputs ? t(this._inputs) : this._onInputsReadyCallbacks.push(t)
                }
                _onShowStudyLastValueChanged() {
                    this._lastValuePriceAxisView.update((0, q.sourceChangeEvent)(this.id())), this.model().updateSource(this)
                }
                _onRestoreFactoryDefaults() {
                    this.properties().childs().axisLabelVisible.setValue(true)
                }
            }
            var Z = s(231639),
                tt = s(738023);

            function et(t) {
                return (0, h.studyIdString)(t, "mtp-mtpredictor")
            }
            class st extends a.StudyLineDataSource {
                constructor(t, e, s, i, n, r) {
                    const o = et(i),
                        a = s || t.studyMetaInfoRepository().findByIdSync({
                            type: "java",
                            studyId: o
                        }),
                        u = e || st._createPropertiesFromStudyMetaInfo(a, t.studyVersioning());
                    super(t, a, i, u, n, r), this._formatter = new tt.VolumeFormatter, (0, Z.createGraphicsPaneViews)(this, t).then(this._setPaneViews.bind(this))
                }
                formatter() {
                    return this._formatter
                }
                static _createPropertiesFromMtpStudyShortIdAndState(t, e) {
                    return super._createPropertiesFromStudyIdAndState(et(t), e)
                }
                static _createPropertiesFromStudyMetaInfo(t, e) {
                    const s = (0, _.prepareStudyProperties)(t, {}, null, e, []);
                    return super._configureProperties(s), s
                }
            }
            const it = "mtp_tsanalysis";
            class nt extends st {
                constructor(t, e, s, i, n) {
                    super(t, e, s, it, i, n)
                }
                pointsCount() {
                    return 1
                }
                static createProperties(t) {
                    return super._createPropertiesFromMtpStudyShortIdAndState(it, t)
                }
                static studyId() {
                    return et(it)
                }
                _studyInputs(t) {
                    (0, n.assert)(1 === t.length, "all the line tool points should be defined");
                    const e = this._getPointTime(t[0], !0);
                    return null === e ? (this._subscribeApplyInputsOnSeriesCompleted(), null) : { ...this.properties().childs().inputs.state(),
                        bar: 1e3 * e
                    }
                }
            }
            const rt = "mtp_decisionpoint";
            class ot extends st {
                constructor(t, e, s, i, n) {
                    super(t, e, s, rt, i, n), this._symbolIntervalChanged = !1, this._model.mainSeries().onSymbolIntervalChanged().subscribe(this, this._onSymbolIntervalChanged)
                }
                destroy() {
                    this._model.mainSeries().onSymbolIntervalChanged().unsubscribeAll(this), super.destroy()
                }
                pointsCount() {
                    return 1
                }
                onData(t) {
                    super.onData(t), this._symbolIntervalChanged = !1
                }
                static createProperties(t) {
                    return super._createPropertiesFromMtpStudyShortIdAndState(rt, t)
                }
                static studyId() {
                    return et(rt)
                }
                _studyInputs(t) {
                    (0, n.assert)(1 === t.length, "all the line tool points should be defined");
                    const e = this._getPointTime(t[0], !0);
                    return null === e ? (this._subscribeApplyInputsOnSeriesCompleted(), null) : { ...this.properties().childs().inputs.state(),
                        symbolIntervalChanged: this._symbolIntervalChanged,
                        bar: 1e3 * e
                    }
                }
                _onSymbolIntervalChanged() {
                    this._symbolIntervalChanged = !0
                }
            }
            const at = "mtp_riskreward";
            class ut extends st {
                constructor(t, e, s, i, n) {
                    super(t, e, s, at, i, n)
                }
                pointsCount() {
                    return 3
                }
                static createProperties(t) {
                    return super._createPropertiesFromMtpStudyShortIdAndState(at, t)
                }
                static getTooltipText(t) {
                    return t && 0 !== t._points.length ? 1 === t._points.length ? "Select Stop Bar" : 2 === t._points.length ? "Select Target Point" : null : "Select Entry Setup Bar"
                }
                static studyId() {
                    return et(at)
                }
                _studyInputs(t) {
                    (0, n.assert)(3 === t.length, "all the line tool points should be defined");
                    const e = this._getPointTime(t[0], !0),
                        s = this._getPointTime(t[1], !0),
                        i = this._getPointTime(t[2], !0);
                    return null === e || null === s || null === i ? (this._subscribeApplyInputsOnSeriesCompleted(), null) : { ...this.properties().childs().inputs.state(),
                        entry_bar: 1e3 * e,
                        stop_bar: 1e3 * s,
                        target_bar: 1e3 * i,
                        target_price: t[2].price
                    }
                }
            }
            class dt extends st {
                pointsCount() {
                    return 1
                }
                _studyInputs(t) {
                    (0, n.assert)(1 === t.length, "all the line tool points should be defined");
                    const e = this._getPointTime(t[0], !0);
                    return null === e ? (this._subscribeApplyInputsOnSeriesCompleted(), null) : { ...this.properties().childs().inputs.state(),
                        bar: 1e3 * e
                    }
                }
            }
            const lt = "mtp_ew_main";
            class ct extends dt {
                constructor(t, e, s, i, n) {
                    super(t, e, s, lt, i, n)
                }
                static createProperties(t) {
                    return super._createPropertiesFromMtpStudyShortIdAndState(lt, t)
                }
                static studyId() {
                    return et(lt)
                }
            }
            const ht = "mtp_ew_major";
            class pt extends dt {
                constructor(t, e, s, i, n) {
                    super(t, e, s, ht, i, n)
                }
                static createProperties(t) {
                    return super._createPropertiesFromMtpStudyShortIdAndState(ht, t)
                }
                static studyId() {
                    return et(ht)
                }
            }
            const _t = "mtp_ew_minor";
            class yt extends dt {
                constructor(t, e, s, i, n) {
                    super(t, e, s, _t, i, n)
                }
                static createProperties(t) {
                    return super._createPropertiesFromMtpStudyShortIdAndState(_t, t)
                }
                static studyId() {
                    return et(_t)
                }
            }
            class St extends st {
                _studyInputs(t) {
                    (0, n.assert)(t.length === this.pointsCount(), "all the line tool points should be defined");
                    const e = { ...this.properties().childs().inputs.state()
                    };
                    for (let s = 0; s < this.pointsCount(); ++s) {
                        const i = this._getPointTime(t[s], !0);
                        if (null === i) return this._subscribeApplyInputsOnSeriesCompleted(), null;
                        e[`bar${s}`] = 1e3 * i
                    }
                    return e
                }
            }
            const mt = "mtp_wpt_down1ora";
            class gt extends St {
                constructor(t, e, s, i, n) {
                    super(t, e, s, mt, i, n)
                }
                pointsCount() {
                    return 2
                }
                static createProperties(t) {
                    return super._createPropertiesFromMtpStudyShortIdAndState(mt, t)
                }
                static getTooltipText(t) {
                    return `Down Wave 1 or A: Select Point ${(t?t._points.length:0)+1}`
                }
                static studyId() {
                    return et(mt)
                }
            }
            const Pt = "mtp_wpt_down2orb";
            class ft extends St {
                constructor(t, e, s, i, n) {
                    super(t, e, s, Pt, i, n)
                }
                pointsCount() {
                    return 2
                }
                static createProperties(t) {
                    return super._createPropertiesFromMtpStudyShortIdAndState(Pt, t)
                }
                static getTooltipText(t) {
                    return `Down Wave 2 or B: Select Point ${(t?t._points.length:0)+1}`
                }
                static studyId() {
                    return et(Pt)
                }
            }
            const It = "mtp_wpt_down3";
            class wt extends St {
                constructor(t, e, s, i, n) {
                    super(t, e, s, It, i, n)
                }
                pointsCount() {
                    return 3
                }
                static createProperties(t) {
                    return super._createPropertiesFromMtpStudyShortIdAndState(It, t)
                }
                static getTooltipText(t) {
                    return `Down Wave 3: Select Point ${(t?t._points.length:0)+1}`
                }
                static studyId() {
                    return et(It)
                }
            }
            const bt = "mtp_wpt_down4";
            class vt extends St {
                constructor(t, e, s, i, n) {
                    super(t, e, s, bt, i, n)
                }
                pointsCount() {
                    return 2
                }
                static createProperties(t) {
                    return super._createPropertiesFromMtpStudyShortIdAndState(bt, t)
                }
                static getTooltipText(t) {
                    return `Down Wave 4: Select Point ${(t?t._points.length:0)+1}`
                }
                static studyId() {
                    return et(bt)
                }
            }
            const Tt = "mtp_wpt_down5";
            class Ct extends St {
                constructor(t, e, s, i, n) {
                    super(t, e, s, Tt, i, n)
                }
                pointsCount() {
                    return 5
                }
                static createProperties(t) {
                    return super._createPropertiesFromMtpStudyShortIdAndState(Tt, t)
                }
                static getTooltipText(t) {
                    return `Down Wave 5: Select Point ${(t?t._points.length:0)+1}`
                }
                static studyId() {
                    return et(Tt)
                }
            }
            const At = "mtp_wpt_downc";
            class Dt extends St {
                constructor(t, e, s, i, n) {
                    super(t, e, s, At, i, n)
                }
                pointsCount() {
                    return 3
                }
                static createProperties(t) {
                    return super._createPropertiesFromMtpStudyShortIdAndState(At, t)
                }
                static getTooltipText(t) {
                    return `Down Wave C: Select Point ${(t?t._points.length:0)+1}`
                }
                static studyId() {
                    return et(At)
                }
            }
            const xt = "mtp_wpt_up1ora";
            class Vt extends St {
                constructor(t, e, s, i, n) {
                    super(t, e, s, xt, i, n)
                }
                pointsCount() {
                    return 2
                }
                static createProperties(t) {
                    return super._createPropertiesFromMtpStudyShortIdAndState(xt, t)
                }
                static getTooltipText(t) {
                    return `Up Wave 1 or A: Select Point ${(t?t._points.length:0)+1}`
                }
                static studyId() {
                    return et(xt)
                }
            }
            const Lt = "mtp_wpt_up2orb";
            class Mt extends St {
                constructor(t, e, s, i, n) {
                    super(t, e, s, Lt, i, n)
                }
                pointsCount() {
                    return 2
                }
                static createProperties(t) {
                    return super._createPropertiesFromMtpStudyShortIdAndState(Lt, t)
                }
                static getTooltipText(t) {
                    return `Up Wave 2 or B: Select Point ${(t?t._points.length:0)+1}`
                }
                static studyId() {
                    return et(Lt)
                }
            }
            const Ft = "mtp_wpt_up3";
            class Rt extends St {
                constructor(t, e, s, i, n) {
                    super(t, e, s, Ft, i, n)
                }
                pointsCount() {
                    return 3
                }
                static createProperties(t) {
                    return super._createPropertiesFromMtpStudyShortIdAndState(Ft, t)
                }
                static getTooltipText(t) {
                    return `Up Wave 3: Select Point ${(t?t._points.length:0)+1}`
                }
                static studyId() {
                    return et(Ft)
                }
            }
            const Nt = "mtp_wpt_up4";
            class Ut extends St {
                constructor(t, e, s, i, n) {
                    super(t, e, s, Nt, i, n)
                }
                pointsCount() {
                    return 2
                }
                static createProperties(t) {
                    return super._createPropertiesFromMtpStudyShortIdAndState(Nt, t)
                }
                static getTooltipText(t) {
                    return `Up Wave 4: Select Point ${(t?t._points.length:0)+1}`
                }
                static studyId() {
                    return et(Nt)
                }
            }
            const Bt = "mtp_wpt_up5";
            class Et extends St {
                constructor(t, e, s, i, n) {
                    super(t, e, s, Bt, i, n)
                }
                pointsCount() {
                    return 5
                }
                static createProperties(t) {
                    return super._createPropertiesFromMtpStudyShortIdAndState(Bt, t)
                }
                static getTooltipText(t) {
                    return `Up Wave 5: Select Point ${(t?t._points.length:0)+1}`
                }
                static studyId() {
                    return et(Bt)
                }
            }
            const Wt = "mtp_wpt_upc";
            class kt extends St {
                constructor(t, e, s, i, n) {
                    super(t, e, s, Wt, i, n)
                }
                pointsCount() {
                    return 3
                }
                static createProperties(t) {
                    return super._createPropertiesFromMtpStudyShortIdAndState(Wt, t)
                }
                static getTooltipText(t) {
                    return `Up Wave C: Select Point ${(t?t._points.length:0)+1}`
                }
                static studyId() {
                    return et(Wt)
                }
            }
            var Ot = s(414805),
                $t = s(327867);

            function zt(t) {
                for (const e of Object.keys(t)) TradingView[e] = t[e]
            }
            zt(l), zt({
                LineToolRegressionTrend: w,
                LineToolVbPFixed: b.LineToolVbPFixed,
                LineToolFixedRangeVolumeProfile: T
            }), zt({
                LineToolAnchoredVWAP: Y
            }), zt(i);
            let Gt = null;

            function jt(t, e, s) {
                return null !== Gt && Gt.tool === t && Gt.toolData === e || (Gt = {
                    properties: Jt(t, void 0, s),
                    tool: t,
                    toolData: e
                }), Gt.properties
            }

            function Ht() {
                Gt = null
            }

            function qt(t) {
                return null !== Gt && Gt.tool === t ? Gt.properties : null
            }

            function Kt(t, e, s, r, o, a) {
                let u;
                if ((0, n.assert)((0, Ot.isLineToolName)(t), "Unknown line tool: " + t), o || s || (s = qt(t) || void 0), "LineToolVbPFixed" === t) u = new b.LineToolVbPFixed(e, s, (0, n.ensureDefined)(r), o, a);
                else if ("LineToolFixedRangeVolumeProfile" === t) u = new T(e, s, (0, n.ensureDefined)(r), o, a);
                else if ("LineToolRegressionTrend" === t) u = new w(e, s, (0, n.ensureDefined)(r), o, a);
                else if ("LineToolAnchoredVWAP" === t) u = new Y(e, s, (0, n.ensureDefined)(r), o, a);
                else if (t in i) {
                    u = new((0, n.ensureDefined)(i[t]))(e, s, (0, n.ensureDefined)(r), o, a)
                } else {
                    u = new((0, n.ensureDefined)(l[t]))(e, s, o, a)
                }
                return u.toolname = t, Ht(), u
            }

            function Xt(t, e) {
                const s = (0, n.ensureNotNull)(e.symbolSource());
                t.childs().symbol.setValue(s.symbol()), s.model().currencyConversionEnabled() && t.childs().currencyId.setValue(s.currency()), s.model().unitConversionEnabled() && t.childs().unitId.setValue(s.unit()), t.childs().symbolStateVersion.setValue(2), t.childs().zOrderVersion.setValue(2)
            }

            function Jt(t, e, s) {
                if ((0, n.assert)((0, Ot.isLineToolName)(t), `${t} should be name of the line tool`), "LineToolVbPFixed" === t) return b.LineToolVbPFixed.createProperties(s, e);
                if ("LineToolFixedRangeVolumeProfile" === t) return T.createProperties(s, e);
                if ("LineToolRegressionTrend" === t) return w.createProperties(s, e);
                if ("LineToolAnchoredVWAP" === t) return Y.createProperties(s, e);
                if (t in i) {
                    return (0, n.ensureDefined)(i[t]).createProperties(e)
                }
                return (0, n.ensureDefined)(l[t]).createProperties(e)
            }

            function Qt(t, e, s, r, o) {
                if ((0, n.assert)((0, Ot.isStudyLineToolName)(t), `${t} should be name of the study line tool`), "LineToolVbPFixed" === t) return b.LineToolVbPFixed.createPropertiesFromStudyMetaInfoAndState(e, s, r, o);
                if ("LineToolFixedRangeVolumeProfile" === t) return T.createPropertiesFromStudyMetaInfoAndState(e, s, r, o);
                if ("LineToolRegressionTrend" === t) return w.createRegressionTrendPropertiesFromStudyMetaInfoAndState(e, s, r, o);
                if ("LineToolAnchoredVWAP" === t) return Y.createPropertiesFromStudyMetaInfoAndState(e, s, r, o);
                if (t in i) {
                    return (0, n.ensureDefined)(i[t]).createPropertiesFromStudyMetaInfoAndState(e, s, r, o)
                }
                throw new Error(`Property creation is not implemented for study line tool ${t}`)
            }

            function Yt(t) {
                (0, n.assert)((0, Ot.isLineToolName)(t), `${t} should be name of the line tool`);
                const e = l[t];
                return void 0 !== e && Boolean(e.supportPhantomMode)
            }

            function Zt(t) {
                return t instanceof u.LineDataSource
            }

            function te(t) {
                return t instanceof a.StudyLineDataSource
            }

            function ee(t) {
                return t instanceof $t.LineToolTrading
            }

            function se(t) {
                let e = null;
                if (t === w.studyId() ? e = "LineToolRegressionTrend" : t === b.LineToolVbPFixed.studyId() ? e = "LineToolVbPFixed" : t === T.studyId() && (e = "LineToolFixedRangeVolumeProfile"), null === e)
                    for (const e in i)
                        if (i[e].studyId() === t) return e;
                return e
            }

            function ie(t, e, s, i) {
                const a = e.toolname,
                    u = e.properties().state();
                u.intervalsVisibilities = (0, o.mergeIntervalVisibilitiesDefaults)(null == u ? void 0 : u.intervalsVisibilities);
                const d = Jt(e.toolname, u, t);
                d.childs().visible.setValue(!0);
                const l = (0, n.ensureNotNull)(e.ownerSource()),
                    c = Kt(a, t, d);
                void 0 !== i && c.setId(i), c.setOwnerSource(l), c.toolname = a;
                const h = c.clonePositionOffset();
                if (e.isFixed()) {
                    const t = (0, n.ensureDefined)(e.fixedPoint()),
                        i = s ? t.add(new r.Point(h.xCoordOffset, h.yCoordOffset)) : t;
                    c.addFixedPoint(i)
                }
                const p = e.normalizedPoints(),
                    _ = s ? function(t, e, s) {
                        const i = (0, n.ensureNotNull)(e.priceScale()),
                            r = (0, n.ensureNotNull)(e.firstValue());
                        return t.map((t => {
                            const e = t.price,
                                n = i.priceToCoordinate(e, r) + s.yCoordOffset,
                                o = i.coordinateToPrice(n, r);
                            return {
                                time_t: t.time_t,
                                price: o,
                                offset: t.offset + s.barOffset
                            }
                        }))
                    }(p, l, h) : p,
                    y = e.points();
                return c.restorePoints(_, y), c.cloneData && c.cloneData(e), c.recalculateStateByData && c.recalculateStateByData(), c
            }

            function ne(t, e) {
                var s;
                return null !== (s = t.dataSources().find((t => Zt(t) && t.linkKey().value() === e))) && void 0 !== s ? s : null
            }
        },
        425864: (t, e, s) => {
            s.d(e, {
                StudyLineDataSource: () => v
            });
            var i = s(650151),
                n = s(758337),
                r = s(884566),
                o = s(892142),
                a = s(87225),
                u = s(108184),
                d = s(231639),
                l = s(573774),
                c = s(74266),
                h = s(450557),
                p = s(353469),
                _ = s(788777),
                y = s(747342),
                S = s(651723),
                m = s(404822),
                g = s(263314),
                P = s(618258);
            class f extends P.StatusProviderBase {
                constructor(t) {
                    super(t.model().properties().childs().scalesProperties.childs().textColor), this._source = t
                }
                color() {
                    return "#ff0000"
                }
                errorStatus() {
                    const t = this._source.status();
                    return t.type === g.StudyStatusType.Error ? {
                        error: this.sourceStatusText(),
                        solutionId: (0, g.studyStatusSolutionId)(t),
                        title: (0, g.studyStatusTitle)(t),
                        studyFeature: (0, g.studyStatusFeature)(t)
                    } : null
                }
                getSplitTitle() {
                    return this._source.titleInParts()
                }
                text() {
                    return this._source.translatedType()
                }
                sourceStatusText() {
                    return (0, g.convertStudyStatusToString)(this._source.status(), !0)
                }
            }
            var I = s(573651),
                w = s(337720);
            class b extends w.StatusView {
                constructor(t) {
                    super(t.statusProvider({}))
                }
                getSplitTitle() {
                    return this._statusProvider.getSplitTitle()
                }
            }
            class v extends o.LineDataSource {
                constructor(t, e, i, n, r, o) {
                    super(t, n, r, o), this._indexes = null, this._inputs = null, this._definitionsViewModel = null, this._pointsetPoints = null, this._loadedPlots = null, this._loadedGraphics = null, this._beingCreatedPaneView = null, this._anchorsPaneView = null, this._isLegendDisplayed = !1, this._alignerCache = null, Promise.all([Promise.all([s.e(47342), s.e(81679), s.e(51583)]).then(s.bind(s, 987425)), Promise.all([s.e(47342), s.e(81679), s.e(51583)]).then(s.bind(s, 677894))]).then((e => {
                        const {
                            LineToolBeingCreatedPaneView: s
                        } = e[0], {
                            StudyLineDataSourceAnchorsPaneView: i
                        } = e[1];
                        this._beingCreatedPaneView = new s(this, t),
                            this._anchorsPaneView = new i(this, this.model()), this._model.lightUpdate()
                    })), this._metaInfo = e, this._dataSource = new c.StudyDataSource(t.chartApi(), t.mainSeries().seriesSource(), i, e), this._dataSource.dataCleared().subscribe(this, this._onDataCleared), this._dataSource.dataUpdated().subscribe(this, this._onDataUpdated), this._dataSource.studyStatusChanged().subscribe(this, this._onStudyStatusChanged), this._statusProvider = new f(this), this._statusView = new b(this), this._showStudyArgumentsProperty = t.properties().childs().paneProperties.childs().legendProperties.childs().showStudyArguments
                }
                isDisplayedInLegend() {
                    return this._isLegendDisplayed
                }
                titleInParts() {
                    const t = [];
                    if (this._showStudyArgumentsProperty.value() && this._inputs)
                        for (const e of this._metaInfo.inputs) {
                            if (!0 === e.isHidden || "bool" === e.type) continue;
                            const s = this._inputs[e.id];
                            t.push(s.toString())
                        }
                    return [this.name(), t]
                }
                destroy() {
                    this._dataSource.dataUpdated().unsubscribeAll(this), this._dataSource.dataCleared().unsubscribeAll(this), this._dataSource.studyStatusChanged().unsubscribeAll(this), this._dataSource.destroy(), null !== this._definitionsViewModel && (this._definitionsViewModel.destroy(), this._definitionsViewModel = null), this._unsubscribeApplyInputsOnSeriesCompleted(), this._isDestroyed = !0, super.destroy()
                }
                stop() {
                    super.stop(), this._isDestroyed || (this._dataSource.stop(), this.clearData())
                }
                start() {
                    super.start(), this._isDestroyed || null === this._inputs || this._dataSource.start()
                }
                metaInfo() {
                    return this._metaInfo
                }
                graphicsInfo() {
                    return this._metaInfo.graphics
                }
                series() {
                    return this._model.mainSeries()
                }
                translatedType() {
                    return this._metaInfo.description
                }
                name() {
                    return this._metaInfo.description
                }
                studyId() {
                    return this._metaInfo.id
                }
                setPoint(t, e, s) {
                    super.setPoint(t, this._preparePoint(e, s))
                }
                move(t) {}
                clearData() {
                    this._clearAllDataExceptPointsetPoints(), this._pointsetPoints = null, this.updateAllViews((0, m.sourceChangeEvent)(this.id()))
                }
                data() {
                    return this.plots()
                }
                plots() {
                    return this._loadedPlots || this._dataSource.plots()
                }
                graphics() {
                    return this._loadedGraphics || this._dataSource.graphics()
                }
                firstValue() {
                    return this._model.mainSeries().firstValue()
                }
                state(t) {
                    const e = super.state(t);
                    let s;
                    this.metaInfo() instanceof u.StudyMetaInfo ? s = this.metaInfo().state() : (s = (0, n.clone)(this.metaInfo()), s.id = u.StudyMetaInfo.parseIdString(s.id + (s.version ? "-" + s.version : "")).fullId);
                    const i = { ...e,
                        metaInfo: s
                    };
                    return t && (i.data = this.plots().state(), i.nonseriesindexes = this._indexes, i.graphics = (0, d.saveStudyGraphics)(this.graphics(), null)), i
                }
                restoreData(t) {
                    var e;
                    void 0 !== t.data && (this._loadedPlots = new r.PlotList((0, p.studyPlotFunctionMap)(this._metaInfo), p.studyEmptyPlotValuePredicate), this._loadedPlots.restoreState(t.data)), this._indexes = null !== (e = t.nonseriesindexes) && void 0 !== e ? e : this._indexes, this._loadedGraphics = t.graphics ? (0, d.loadStudyGraphics)(t.graphics) : this._loadedGraphics
                }
                getPropertyDefinitionsViewModel() {
                    return null === this._definitionsViewModel ? this._getPropertyDefinitionsViewModelClass().then((t => null === t || this._isDestroyed ? null : (null === this._definitionsViewModel && (this._definitionsViewModel = new t(this._model.undoModel(), this)), this._definitionsViewModel))) : Promise.resolve(this._definitionsViewModel)
                }
                paneViews(t) {
                    let e = [];
                    if (this.isSourceHidden()) return e;
                    if (this._isReady() && this._changeStatesStack.isEmpty()) {
                        const s = super.paneViews(t);
                        null !== s && (e = e.concat(s))
                    } else null !== this._beingCreatedPaneView && e.push(this._beingCreatedPaneView);
                    return null !== this._anchorsPaneView && e.push(this._anchorsPaneView), e
                }
                propertiesChanged(t) {
                    super.propertiesChanged(t), this._onStudyInputsMayChange()
                }
                dataAndViewsReady() {
                    return super.dataAndViewsReady() && this._isReady()
                }
                endChanging(t, e) {
                    const s = super.endChanging(t, e);
                    return s.indexesChanged ? this.clearData() : this._updateAnchorsPrice(!0), s
                }
                moveData(t) {
                    this._dataSource.moveData(t)
                }
                restorePoints(t, e, s) {
                    super.restorePoints(t, e, s), this._updateAnchorsPrice(!0)
                }
                realign() {
                    super.realign(), null === this._model.mainSeries().symbolInfo() && (this._alignerCache = null)
                }
                statusProvider(t) {
                    return this._statusProvider
                }
                statusView() {
                    return this._statusView
                }
                legendView() {
                    return null
                }
                dataProblemModel() {
                    return null
                }
                dataUpdatedModeModel() {
                    return null
                }
                marketStatusModel() {
                    return null
                }
                onStatusChanged() {
                    return this._dataSource.studyStatusChanged()
                }
                status() {
                    return this._dataSource.studyStatus()
                }
                recalcStudyIfNeeded() {}
                static createPropertiesFromStudyMetaInfoAndState(t, e, s, i) {
                    const n = (0, _.prepareStudyPropertiesForLoadChart)(t, e, s, i);
                    return this._configureProperties(n), n
                }
                _onStudyStatusChanged(t, e) {
                    let s;
                    switch (e.type) {
                        case h.StudyStatusType.Error:
                            s = !0;
                            break;
                        case h.StudyStatusType.Completed:
                            s = !1;
                            break;
                        default:
                            return
                    }
                    if (s === this._isLegendDisplayed) return;
                    this._isLegendDisplayed = s;
                    const i = this._model.paneForSource(this);
                    if (i) {
                        const t = this._model.panes().indexOf(i),
                            e = I.InvalidationMask.invalidateLegendWidgetLayout(t);
                        this.model().invalidate(e)
                    }
                }
                _studyId() {
                    return this._dataSource.studyId()
                }
                _isReady() {
                    return !0
                }
                _updateAllPaneViews(t) {
                    var e, s;
                    super._updateAllPaneViews(t), null === (e = this._beingCreatedPaneView) || void 0 === e || e.update(), null === (s = this._anchorsPaneView) || void 0 === s || s.update(t)
                }
                _getPointTime(t, e) {
                    const s = t.index,
                        i = this._model.timeScale().indexToTimePoint(s);
                    if (null !== i) return i;
                    if (e || void 0 === t.time) return null;
                    const n = this._model.mainSeries().symbolInfo();
                    if (null === n) return null;
                    let r = this._model.properties().childs().timezone.value();
                    "exchange" === r && (r = n.timezone);
                    const o = (0, y.cal_to_utc)((0, y.get_timezone)(r), t.time);
                    return this._getStartBarAligner()(o) / 1e3
                }
                _updateAnchorsPrice(t) {}
                _onPointsetUpdated(t) {
                    super._onPointsetUpdated(t), this._pointsetPoints = this._points.map((t => ({
                        price: t.price,
                        index: t.index,
                        time: t.time
                    }))), this._onStudyInputsMayChange()
                }
                _onDataCleared() {
                    this.updateAllViews((0, m.sourceChangeEvent)({
                        sourceId: this.id(),
                        clearData: !0
                    })), this._model.updateSource(this)
                }
                _onDataUpdated(t, e, s) {
                    var i;
                    this._updateAnchorsPrice(), this.updateAllViews((0, m.sourceChangeEvent)({
                        sourceId: this.id(),
                        firstUpdatedTimePointIndex: null === (i = t[0]) || void 0 === i ? void 0 : i.index
                    })), this._model.updateSource(this)
                }
                _onStudyInputsMayChange() {
                    let t = null;
                    if (null !== this._pointsetPoints && this._pointsetPoints.length === this.pointsCount() && (t = this._studyInputs(this._pointsetPoints), null === t && (this._clearAllDataExceptPointsetPoints(), this.updateAllViews((0, m.sourceChangeEvent)(this.id())))), null !== t) {
                        const e = this.metaInfo().inputs.map((t => t.id)),
                            s = Object.keys(t);
                        for (const i of s) e.includes(i) || delete t[i]
                    }
                    this._areInputsEqual(this._inputs, t) || this._applyStudyInputs(t)
                }
                _preparePoint(t, e) {
                    return super._preparePoint(this._alignPointToRangeOfActualData(t), e)
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.resolve(null)
                }
                _subscribeApplyInputsOnSeriesCompleted() {
                    this._unsubscribeApplyInputsOnSeriesCompleted(), this._model.mainSeries().dataEvents().completed().subscribe(this, (() => this._onStudyInputsMayChange()), !0)
                }
                _unsubscribeApplyInputsOnSeriesCompleted() {
                    this._model.mainSeries().dataEvents().completed().unsubscribeAll(this)
                }
                _onInputsChanged() {
                    this.hasAlert.value() && (this._localAndServerAlertsMismatch = !0)
                }
                static _createPropertiesFromStudyIdAndState(t, e) {
                    const s = u.StudyMetaInfo.getStudyPropertyRootNameById(t),
                        i = new a.DefaultProperty(s, e);
                    return this._configureProperties(i), i
                }
                static _configureProperties(t) {
                    super._configureProperties(t), t.removeExclusion("intervalsVisibilities")
                }
                _areInputsEqual(t, e) {
                    return null === e ? null === t : null !== t && (0, l.areStudyInputsEqual)(this._metaInfo.inputs, t, e)
                }
                _applyStudyInputs(t) {
                    const e = this._inputs;
                    this._inputs = t, null !== t && (this._unsubscribeApplyInputsOnSeriesCompleted(), this._dataSource.setInputs(t), null === e && this.isStarted() && !this._dataSource.isStarted() && this._dataSource.start()), this._onInputsChanged()
                }
                _clearAllDataExceptPointsetPoints() {
                    this._inputs = null, this._dataSource.clearData(), this._loadedPlots = null, this._indexes = null, this._loadedGraphics = null
                }
                _getStartBarAligner() {
                    const t = this._model.mainSeries().interval();
                    return null !== this._alignerCache && this._alignerCache.resolution === this._model.mainSeries().interval() || (this._alignerCache = {
                        resolution: t,
                        aligner: (0, S.createTimeToBarTimeAligner)(t, (0, i.ensureNotNull)(this._model.mainSeries().symbolInfo()))
                    }), this._alignerCache.aligner
                }
            }
        },
        401596: (t, e, s) => {
            s.d(e, {
                LineToolVbPFixed: () => m
            });
            var i = s(277973),
                n = s(650151),
                r = s(619276),
                o = s(108184),
                a = s(425864),
                u = s(231639),
                d = s(517220),
                l = s(404822),
                c = s(758337),
                h = s(87225),
                p = s(788777);
            const _ = (0, r.studyIdString)("VbPFixed", "tv-volumebyprice");

            function y(t, e, s, i) {
                return e.styles && (S(e.styles.developingPoc), S(e.styles.developingVAHigh), S(e.styles.developingVALow)), e
            }

            function S(t) {
                void 0 !== t && void 0 !== t.visible && (t.display = t.visible ? 15 : 0, delete t.visible)
            }
            class m extends a.StudyLineDataSource {
                constructor(t, e, s, i, n) {
                    const r = s || t.studyMetaInfoRepository().findByIdSync({
                        type: "java",
                        studyId: _
                    });
                    super(t, r, "vbpfixed_", null != e ? e : m.createProperties(t), i, n), this._createPaneViews().then((t => {
                        this._setPaneViews(t)
                    })), this.clearData()
                }
                pointsCount() {
                    return 2
                }
                boundToSymbol() {
                    return !1
                }
                offset(t) {
                    return 0
                }
                getMinFirstBarIndexForPlot() {
                    return -1 / 0
                }
                calcIsActualSymbol() {
                    this._isActualSymbol = !0, this._isActualCurrency = !0, this._isActualUnit = !0, this.calcIsActualInterval()
                }
                cloneable() {
                    return !1
                }
                isSynchronizable() {
                    return !1
                }
                isPlotVisibleAt(t, e) {
                    return (this.properties().childs().styles.childs()[t].childs().display.value() & e) === e
                }
                static createProperties(t, e) {
                    const s = o.StudyMetaInfo.getStudyPropertyRootNameById(_),
                        i = (0, n.ensureNotNull)(t.studyMetaInfoRepository().findByIdSync({
                            type: "java",
                            studyId: _
                        })),
                        r = (0, h.createDefaultsState)(!0, s, [], t.studyVersioning());
                    return this.createPropertiesFromStudyMetaInfoAndState(i, i, (0, c.merge)((0, c.clone)(r), null != e ? e : {}), t.studyVersioning())
                }
                static createPropertiesFromStudyMetaInfoAndState(t, e, s, i) {
                    const n = (0, p.prepareStudyPropertiesForLoadChart)(t, e, s, i, y);
                    return this._configureProperties(n), n
                }
                static studyId() {
                    return _
                }
                _studyInputs(t) {
                    (0, n.assert)(2 === t.length, "all the line tool points should be defined");
                    const [e, s] = t, i = Math.max(e.index, s.index), r = this._model.mainSeries().bars().lastIndex(), o = this._getPointTime(e.index <= s.index ? e : s, !0), a = this._getPointTime(s.index >= e.index ? s : e, !0);
                    if (null === o || null === a) return this._subscribeApplyInputsOnSeriesCompleted(), null;
                    return { ...this.properties().childs().inputs.state(),
                        first_bar_time: 1e3 * o,
                        last_bar_time: 1e3 * a,
                        subscribeRealtime: r === i,
                        mapRightBoundaryToBarStartTime: !!this._needExtendToBarsEnding() || void 0
                    }
                }
                _isReady() {
                    return !(0, u.isStudyGraphicsEmpty)(this.graphics())
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([s.e(88601), s.e(79533), s.e(41009), s.e(36339), s.e(44728), s.e(68833), s.e(60821), s.e(60607)]).then(s.bind(s, 995961))).StudyLineDataSourceDefinitionsViewModel
                }
                _onDataUpdated() {
                    this._updateAnchors(), this.updateAllViews((0, l.sourceChangeEvent)(this.id())), this._model.updateSource(this)
                }
                _updateAnchors() {
                    const t = this._calculateAnchors();
                    if (!t) return;
                    const [{
                        index: e,
                        price: s
                    }, {
                        index: i,
                        price: n
                    }] = t;
                    if (this._timePoint.length && (this._timePoint[0].price = s, this._timePoint[1].price = n), this._points.length) {
                        const t = this.model().timeScale(),
                            r = t.indexToTimePoint(e),
                            o = t.indexToTimePoint(e);
                        this._points[0] = {
                            index: e,
                            price: s,
                            time: (0, c.isNumber)(r) ? new Date(1e3 * r) : void 0
                        }, this._points[1] = {
                            index: i,
                            price: n,
                            time: (0, c.isNumber)(o) ? new Date(1e3 * o) : void 0
                        }
                    }
                }
                _calculateAnchors() {
                    let t = null,
                        e = null,
                        s = null,
                        n = null;
                    if (this.graphics().hhists().forEach((i => {
                            i.forEach((i => {
                                const {
                                    priceLow: r,
                                    priceHigh: o,
                                    firstBarTime: a,
                                    lastBarTime: u
                                } = i;
                                (!t || r < t) && (t = r), (!e || o > e) && (e = o), (!s || a < s) && (s = a), (!n || u > n) && (n = u)
                            }))
                        })), !((0, i.default)(t) || (0, i.default)(e) || (0, i.default)(n) || (0, i.default)(s))) return [{
                        price: e,
                        index: s
                    }, {
                        price: t,
                        index: n
                    }]
                }
                _updateAnchorsPrice() {
                    const t = this._calculateAnchors();
                    if (!t) return;
                    const [{
                        price: e
                    }, {
                        price: s
                    }] = t;
                    this._timePoint.length && (this._timePoint[0].price = e, this._timePoint[1].price = s), this._points.length && (this._points[0].price = e, this._points[1].price = s)
                }
                async _createPaneViews() {
                    var t;
                    const e = this._metaInfo,
                        i = e.graphics,
                        n = [],
                        r = this._needExtendToBarsEnding();
                    if (i.hhists) {
                        const {
                            HHistPaneView: e
                        } = await Promise.all([s.e(81679), s.e(20507)]).then(s.bind(s, 327514)), i = null === (t = this.properties().childs().graphics.childs().polygons) || void 0 === t ? void 0 : t.childs();
                        n.push(new e(this, this._model, void 0, null == i ? void 0 : i.histBoxBg, r))
                    }
                    if (i.horizlines) {
                        const {
                            HorizLinePaneView: t
                        } = await Promise.all([s.e(81679), s.e(20507)]).then(s.bind(s, 491810));
                        n.push(new t(this, this._model, void 0, r))
                    }
                    return e.plots.length > 0 && n.push(this._createStudyPlotPaneView(e.plots[0].id, r)), e.plots.length > 1 && n.push(this._createStudyPlotPaneView(e.plots[1].id, r)), e.plots.length > 2 && n.push(this._createStudyPlotPaneView(e.plots[2].id, r)), n
                }
                _createStudyPlotPaneView(t, e) {
                    return new d.StudyPlotPaneView(this, this._model.mainSeries(), this._model, t, e)
                }
                _needExtendToBarsEnding() {
                    var t;
                    return void 0 !== (null === (t = this.metaInfo().defaults.inputs) || void 0 === t ? void 0 : t.mapRightBoundaryToBarStartTime)
                }
            }
        },
        831699: (t, e, s) => {
            s.d(e, {
                PaneRendererClockIcon: () => o
            });
            var i = s(858063),
                n = s(904244);
            const r = Math.sqrt(3);
            class o extends n.MediaCoordinatesPaneRenderer {
                constructor(t) {
                    super(), this.update(t)
                }
                update(t) {
                    var e;
                    const s = t.points[0],
                        i = null !== (e = t.points[1]) && void 0 !== e ? e : t.points[0],
                        n = s.x - i.x,
                        o = s.y - i.y;
                    let a = t.horzMargin;
                    void 0 === a && (a = n > 0 ? 10 : -25), this._x = s.x + a, this._y = s.y + (0 !== o && Math.abs(n) * r <= Math.abs(o) ? -7 : o > 0 ? -25 : 11), this._color = t.color
                }
                hitTest(t) {
                    return t.x < this._x || t.x > this._x + 16 || t.y < this._y || t.y > this._y + 16 ? null : new i.HitTestResult(i.HitTestResult.REGULAR)
                }
                _drawImpl(t) {
                    const e = t.context;
                    e.translate(this._x - .5, this._y - .5), e.beginPath(), e.arc(8, 9, 6, 0, 2 * Math.PI, !0), e.closePath(), e.moveTo(8, 9), e.arc(8.5, 5.5, .5, Math.PI, 0), e.lineTo(9, 10), e.arc(5.5, 9.5, .5, .5 * Math.PI, 1.5 * Math.PI), e.closePath(), e.moveTo(1.71, 5.93), e.bezierCurveTo(-.61, 2.83, 3.86, -.76, 6.39, 2.18), e.bezierCurveTo(4.35, 2.67, 2.63, 4.04, 1.71, 5.93), e.closePath(), e.moveTo(14.29, 5.93), e.bezierCurveTo(16.61, 2.83, 12.14, -.76, 9.61, 2.18), e.bezierCurveTo(11.65, 2.67, 13.37, 4.04, 14.29, 5.93), e.fillStyle = this._color, e.fill()
                }
            }
        },
        450557: (t, e, s) => {
            var i;
            s.d(e, {
                    StudyStatusType: () => i
                }),
                function(t) {
                    t[t.Undefined = 0] = "Undefined", t[t.Loading = 1] = "Loading", t[t.Completed = 2] = "Completed", t[t.Error = 3] = "Error"
                }(i || (i = {}))
        },
        74266: (t, e, s) => {
            s.r(e), s.d(e, {
                StudyDataSource: () => _
            });
            var i = s(650151),
                n = s(869403),
                r = s.n(n),
                o = s(884566),
                a = s(325925),
                u = s(200821),
                d = s(353469),
                l = s(3801),
                c = s(450557);
            const h = (0, s(272001).getLogger)("Chart.StudyDataSource");
            var p;
            ! function(t) {
                t[t.Idle = 0] = "Idle", t[t.AwaitingConnection = 1] = "AwaitingConnection", t[t.AwaitingParent = 2] = "AwaitingParent", t[t.AwaitingFirstDataUpdate = 3] = "AwaitingFirstDataUpdate", t[t.Active = 4] = "Active"
            }(p || (p = {}));
            class _ {
                constructor(t, e, s, i) {
                    this._inputs = null, this._status = p.Idle, this._studyId = null, this._turnaroundCounter = 1, this._studyStatus = {
                            type: c.StudyStatusType.Undefined
                        }, this._studyStatusChanged = new(r()), this._graphics = new l.LiveStudyGraphics, this._dataCleared = new(r()), this._dataUpdated = new(r()), this._boundOnGatewayIsConnectedChanged = this._onGatewayIsConnectedChanged.bind(this), this._ongoingDataUpdate = Promise.resolve(), this._gateway = t, this._metaInfo = i, this._seriesSource = e,
                        this._turnaroundPrefix = s, this._plots = new o.PlotList((0, d.studyPlotFunctionMap)(i), d.studyEmptyPlotValuePredicate), this._gateway.isConnected().subscribe(this._boundOnGatewayIsConnectedChanged)
                }
                destroy() {
                    this.stop(), this._gateway.isConnected().unsubscribe(this._boundOnGatewayIsConnectedChanged), this._dataUpdated.destroy(), this._dataCleared.destroy(), this._studyStatusChanged.destroy()
                }
                metaInfo() {
                    return this._metaInfo
                }
                inputs() {
                    return this._inputs
                }
                setInputs(t) {
                    this._inputs = t, null !== this._studyId && (this._turnaroundCounter++, this._onStudyStatusChangedTo({
                        type: c.StudyStatusType.Undefined
                    }), this._gateway.modifyStudy(this._studyId, this._turnaround(), t, this._onMessage.bind(this)), this._status === p.Active && this._changeStatusTo(p.AwaitingFirstDataUpdate))
                }
                isStarted() {
                    return this._status !== p.Idle
                }
                isActive() {
                    return this._status === p.Active
                }
                start() {
                    this.isStarted() ? h.logNormal("start: data source is already started, nothing to do") : ((0, i.assert)(null !== this._inputs, "Inputs should be defined when starting a study data source"), this._gateway.isConnected().value() ? this._createStudy() : this._changeStatusTo(p.AwaitingConnection))
                }
                stop() {
                    this.isStarted() ? (null !== this._studyId && (this._gateway.removeStudy(this._studyId), this._studyId = null, this._onStudyStatusChangedTo({
                        type: c.StudyStatusType.Undefined
                    })), this._changeStatusTo(p.Idle)) : h.logNormal("stop: data source is already stopped, nothing to do")
                }
                studyId() {
                    return this._studyId
                }
                studyStatus() {
                    return this._studyStatus
                }
                studyStatusChanged() {
                    return this._studyStatusChanged
                }
                plots() {
                    return this._plots
                }
                graphics() {
                    return this._graphics
                }
                clearData() {
                    this._plots.clear(), this._graphics.clear(), this._dataCleared.fire()
                }
                stopAndStealData() {
                    (0, i.assert)(this._status === p.Active, "Couldn't steal data from non-active data source"), this.stop();
                    const t = this._plots,
                        e = this._graphics.extract();
                    return this._plots = new o.PlotList((0, d.studyPlotFunctionMap)(this._metaInfo), d.studyEmptyPlotValuePredicate), {
                        plots: t,
                        graphics: e
                    }
                }
                dataCleared() {
                    return this._dataCleared
                }
                dataUpdated() {
                    return this._dataUpdated
                }
                moveData(t) {
                    this._ongoingDataUpdate = this._ongoingDataUpdate.then((() => {
                        this._plots.move(t)
                    }))
                }
                pendingUpdatesReady() {
                    return this._ongoingDataUpdate
                }
                _changeStatusTo(t) {
                    (0, i.assert)(this._status !== t, "Source and destination status should be distinct"), h.logNormal(`Status changed from ${p[this._status]} to ${p[t]}`), this._status = t
                }
                _createStudy() {
                    const t = this._seriesSource.instanceId();
                    null !== t ? this._createStudyUsingParentId(t) : (this._changeStatusTo(p.AwaitingParent), this._seriesSource.dataEvents().completed().subscribe(this, this._onSeriesCompleted, !0))
                }
                _createStudyUsingParentId(t) {
                    (0, i.assert)(this._status !== p.Active, 'Status should not be "Active" when creating a study'), (0, i.assert)(this._studyStatus.type === c.StudyStatusType.Undefined, 'Study status should be "Undefined" when creating a study'), (0, i.assert)(null === this._studyId, "Study id should be empty when creating a study"), this._studyId = (0, u.makeNextStudyId)(),
                        this._gateway.createStudy(this._studyId, this._turnaround(), t, this._metaInfo.fullId + ("tv-basicstudies" === this._metaInfo.packageId ? "" : "!"), (0, i.ensureNotNull)(this._inputs), this._onMessage.bind(this)), this._changeStatusTo(p.AwaitingFirstDataUpdate)
                }
                _onGatewayIsConnectedChanged(t) {
                    t ? this._onGatewayConnected() : this._onGatewayDisconnected()
                }
                _onGatewayConnected() {
                    this._status === p.AwaitingConnection && this._createStudy()
                }
                _onGatewayDisconnected() {
                    this._status !== p.Idle && this._status !== p.AwaitingConnection && (this._studyId = null, this._changeStatusTo(p.AwaitingConnection), this._studyStatus.type !== c.StudyStatusType.Undefined && this._onStudyStatusChangedTo({
                        type: c.StudyStatusType.Undefined
                    })), this._turnaroundCounter = 1
                }
                _onSeriesCompleted() {
                    this._status === p.AwaitingParent && this._createStudyUsingParentId((0, i.ensure)(this._seriesSource.instanceId()))
                }
                _onStudyStatusChangedTo(t) {
                    const e = this._studyStatus;
                    this._studyStatus = t, h.logNormal(`Study status type changed from ${c.StudyStatusType[e.type]} to ${c.StudyStatusType[t.type]}`), this._studyStatusChanged.fire(e, t)
                }
                _onMessage(t) {
                    if ("data_update" === t.method) {
                        const {
                            customId: e,
                            turnaround: s,
                            plots: n,
                            nonseries: r
                        } = t.params;
                        e === this._studyId && this._checkTurnaround(s) && this._onDataUpdate(n, (0, i.ensureDefined)(r))
                    } else if ("study_loading" === t.method) {
                        const [e, s, i] = t.params;
                        e === this._studyId && this._checkTurnaround(s) && this._onStudyLoading(i)
                    } else if ("study_completed" === t.method) {
                        const [e, s, i] = t.params;
                        e === this._studyId && this._checkTurnaround(s) && this._onStudyCompleted(i)
                    } else if ("study_error" === t.method) {
                        const [e, s, i, n, r] = t.params;
                        e === this._studyId && this._checkTurnaround(s) && this._onStudyError(i, n, r)
                    } else "clear_data" === t.method && this._checkTurnaround(t.params.turnaround) && this.clearData()
                }
                _onDataUpdate(t, e) {
                    const s = (0, a.unpackNonSeriesData)(e.d);
                    return this._ongoingDataUpdate = this._ongoingDataUpdate.then((() => s), (() => s)).then(this._onDataUnpacked.bind(this, t, e.indexes)), this._ongoingDataUpdate
                }
                _onDataUnpacked(t, e, s) {
                    this._status !== p.Idle && (this._status === p.AwaitingFirstDataUpdate && (this._changeStatusTo(p.Active), this.clearData()), this._mergePlots(t), null !== s && (s.indexes_replace ? ((0, i.assert)("nochange" !== e), this._graphics.replaceIndexesTo(e)) : ("nochange" !== e && this._graphics.replaceIndexesTo(e), void 0 !== s.graphicsCmds && this._graphics.processCommands(s.graphicsCmds, this._metaInfo.graphics))), this._dataUpdated.fire(t, s, e))
                }
                _onStudyLoading(t) {
                    this._onStudyStatusChangedTo({
                        type: c.StudyStatusType.Loading,
                        startTime: Date.now()
                    })
                }
                _onStudyError(t, e, s) {
                    this.clearData();
                    const i = "string" == typeof t ? {
                        error: t.split(":", 2)[0]
                    } : t;
                    this._onStudyStatusChangedTo({
                        type: c.StudyStatusType.Error,
                        errorDescription: i
                    })
                }
                _onStudyCompleted(t) {
                    this._onStudyStatusChangedTo({
                        type: c.StudyStatusType.Completed
                    })
                }
                _mergePlots(t) {
                    this._plots.merge(t)
                }
                _turnaround() {
                    return `${this._turnaroundPrefix}${this._turnaroundCounter}`
                }
                _checkTurnaround(t) {
                    const e = this._turnaround();
                    return t === e || t === this._seriesSource.turnaround() || t === `${this._seriesSource.turnaround()}_${e}`
                }
            }
        },
        823757: (t, e, s) => {
            var i;
            s.d(e, {
                    Constants: () => i
                }),
                function(t) {
                    t.DrawingIconColor = "rgba( 170, 170, 170, 1)", t[t.NameLengthLimit = 300] = "NameLengthLimit"
                }(i || (i = {}))
        }
    }
]);
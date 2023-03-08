"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [83912], {
        583912: (e, t, i) => {
            i.d(t, {
                linking: () => y
            });
            var r = i(12481),
                n = i(988411),
                s = i.n(n),
                o = i(495046),
                a = i(720444),
                l = i(272001),
                u = i(62802),
                c = i(588948),
                h = i(776734),
                d = i(712270);
            const m = (0, l.getLogger)("Linking");
            var _;
            ! function(e) {
                e[e.NotBound = 0] = "NotBound", e[e.BoundToWidget = 1] = "BoundToWidget", e[e.BoundToModel = 2] = "BoundToModel"
            }(_ || (_ = {}));
            const y = new class {
                constructor() {
                    this._watchedSymbol = new(s()), this._seriesShortSymbol = new(s()), this._proSymbol = new(s()), this._watchedInterval = new(s()), this._watchedIntraday = new(s()), this._watchedSeconds = new(s()), this._watchedTicks = new(s()), this._watchedDataFrequencyResolution = new(s()), this._watchedRange = new(s()), this._watchedSupportedResolutions = new(s()), this._watchedSupportedChartStyles = new(s())([]), this._symbolNamesList = new(s()), this._chartWidgetBindingState = _.NotBound, this._activeChartWidget = null, this._watchedSymbolListenerBound = this._watchedSymbolListener.bind(this), this._watchedIntervalListenerBound = this._watchedIntervalListener.bind(this), this._onSymbolLinkBound = this._onSymbolLink.bind(this), this._searchCharts = null, this._searchChartsLoadDebounced = null, this._selfEmit = !1, this._preventFeedBySymbol = !1, this._feedBySymbolDebounceCounter = 0
                }
                get symbol() {
                    return this._watchedSymbol
                }
                get proSymbol() {
                    return this._proSymbol
                }
                get symbolNamesList() {
                    return this._symbolNamesList
                }
                get seriesShortSymbol() {
                    return this._seriesShortSymbol.readonly()
                }
                get interval() {
                    return this._watchedInterval
                }
                get intraday() {
                    return this._watchedIntraday.readonly()
                }
                get seconds() {
                    return this._watchedSeconds.readonly()
                }
                get ticks() {
                    return this._watchedTicks.readonly()
                }
                get range() {
                    return this._watchedRange.readonly()
                }
                get supportedResolutions() {
                    return this._watchedSupportedResolutions.readonly()
                }
                get supportedChartStyles() {
                    return this._watchedSupportedChartStyles.readonly()
                }
                get preventFeedBySymbol() {
                    return this._preventFeedBySymbol
                }
                get dataFrequencyResolution() {
                    return this._watchedDataFrequencyResolution.readonly()
                }
                bindToChartWidget(e) {
                    if (this.unbindFromChartWidget(), this._activeChartWidget = e, e.hasModel()) return void this._onChartModelCreated(e.model());
                    e.modelCreated().subscribe(this, this._onChartModelCreated), this._chartWidgetBindingState = _.BoundToWidget;
                    const t = e.properties().childs().mainSeriesProperties.childs();
                    this._watchedSymbol.setValue(t.symbol.value()), this._watchedInterval.setValue(t.interval.value())
                }
                unbindFromChartWidget() {
                    switch (this._chartWidgetBindingState) {
                        case _.BoundToWidget:
                            if (!this._activeChartWidget) throw new Error("ChartWidget is undefined");
                            this._activeChartWidget.modelCreated().unsubscribe(this, this._onChartModelCreated);
                            break;
                        case _.BoundToModel:
                            this._symbolProperty().unsubscribe(this, this._onSymbolPropertyChange), this._watchedSymbol.unsubscribe(this._watchedSymbolListenerBound), this._mainSeries().dataEvents().symbolResolved().unsubscribe(this, this._updateSeriesSymbolInfo), this._mainSeries().dataEvents().symbolError().unsubscribe(this, this._updateSeriesSymbolInfo),
                                this._intervalProperty().unsubscribe(this, this._onIntervalPropertyChange), this._watchedInterval.unsubscribe(this._watchedIntervalListenerBound), delete this._watchedSymbol.hook, delete this._watchedSymbol.writeLock
                    }
                    this._activeChartWidget = null, this._chartWidgetBindingState = _.NotBound
                }
                getChartWidget() {
                    return this._activeChartWidget
                }
                bindToChartWidgetCollection(e) {
                    this._chartWidgetCollection = e, this.unbindFromChartWidget(), e.activeChartWidget.subscribe((e => {
                        this.unbindFromChartWidget(), this.bindToChartWidget(e)
                    }), {
                        callWithLast: !0
                    })
                }
                bindToSearchCharts(e) {
                    this.unbindFromSearchCharts(), this._searchCharts = e, e.onSearchBySymbol.subscribe(this, this._onSearchBySymbol), e.loadingSymbol.subscribe((e => {
                        !1 === e && (this._feedBySymbolDebounceCounter = 0)
                    })), this._watchedSymbol.subscribe(this._onSymbolLinkBound)
                }
                unbindFromSearchCharts() {
                    this._searchCharts && (this._searchCharts.onSearchBySymbol.unsubscribe(this, this._onSearchBySymbol), this._watchedSymbol.unsubscribe(this._onSymbolLinkBound), this._searchCharts = null)
                }
                setPreventFeedBySymbol(e) {
                    this._preventFeedBySymbol = e
                }
                _onSearchBySymbol(e) {
                    if (!e.resolved_symbol) throw new Error("no resolved_symbol");
                    this._selfEmit = !0, this._watchedSymbol.setValue(e.resolved_symbol), this._selfEmit = !1
                }
                _onSymbolLink(e) {
                    if (!this._selfEmit) {
                        if (!this._searchCharts) {
                            const e = "No search charts defined";
                            throw m.logError(e), new Error(e)
                        }
                        this._preventFeedBySymbol || this._loadSearchCharts(e)
                    }
                }
                _loadSearchCharts(e) {
                    if (!this._searchCharts) {
                        const e = "No search charts defined";
                        throw m.logError(e), new Error(e)
                    }
                    if (this._searchChartsLoadDebounced) return void(this._feedBySymbolDebounceCounter < 100 && (this._feedBySymbolDebounceCounter++, this._searchChartsLoadDebounced(e)));
                    const t = e => this._searchCharts ? (!0 === this._searchCharts.loadingSymbol.value() ? this._feedBySymbolDebounceCounter < 100 && (this._feedBySymbolDebounceCounter++, this._searchChartsLoadDebounced = (0, r.default)(t, 2e3), this._searchChartsLoadDebounced(e)) : this._searchChartsLoadDebounced = null, this._searchCharts.feedBySymbol.call(this._searchCharts, e)) : () => {};
                    !0 === this._searchCharts.loadingSymbol.value() ? this._feedBySymbolDebounceCounter < 100 && (this._feedBySymbolDebounceCounter++, this._searchChartsLoadDebounced = (0, r.default)(t, 2e3), this._searchChartsLoadDebounced(e)) : this._searchCharts.feedBySymbol(e)
                }
                _mainSeries() {
                    if (!this._activeChartWidget) throw new Error("ChartWidget is undefined");
                    return this._activeChartWidget.model().mainSeries()
                }
                _properties() {
                    return this._mainSeries().properties()
                }
                _symbolProperty() {
                    return this._properties().symbol
                }
                _intervalProperty() {
                    return this._properties().interval
                }
                _watchedSymbolListener(e) {
                    this._symbolProperty().value() !== e && (this._chartWidgetCollection.setSymbol(e), this._sendSnowplowAnalytics())
                }
                _sendSnowplowAnalytics() {
                    if (window.user.do_not_track) return;
                    const e = this._mainSeries(),
                        t = () => {
                            e.dataEvents().symbolResolved().unsubscribe(this, i)
                        },
                        i = i => {
                            (0, h.getTracker)().then((e => {
                                    if (null === e) return;
                                    const t = this._chartWidgetCollection.layout.value(),
                                        r = this._chartWidgetCollection.metaInfo.uid.value() || "";
                                    e.trackChartSymbols(i.pro_name, i.type, t, r)
                                })),
                                e.dataEvents().symbolError().unsubscribe(this, t)
                        };
                    e.dataEvents().symbolResolved().subscribe(this, i, !0), e.dataEvents().symbolError().subscribe(this, t, !0)
                }
                _onSymbolPropertyChange() {
                    const e = this._symbolProperty().value() !== this._watchedSymbol.value();
                    this._watchedSymbol.setValue(this._symbolProperty().value()), e && this._chartWidgetCollection.setSymbol(this._symbolProperty().value())
                }
                _onSymbolResolved(e) {
                    const t = this._mainSeries().symbolInfo();
                    t && this._applyValuesFromSymbolInfo(t)
                }
                _applyValuesFromSymbolInfo(e) {
                    const t = e.pro_name || o.enabled("trading_terminal") && (e.full_name || e.name) || "";
                    this._proSymbol.setValue(t), e.aliases && this._symbolNamesList.setValue(e.aliases)
                }
                _updateSeriesSymbolInfo() {
                    this._seriesShortSymbol.setValue(this._properties().shortName.value());
                    const e = this._mainSeries().symbolInfo();
                    if (e) {
                        this._applyValuesFromSymbolInfo(e);
                        let t = (0, d.allChartStyles)();
                        (0, a.isCloseBasedSymbol)(e) && (t = t.filter((e => (0, a.isSingleValueBasedStyle)(e)))), this._watchedSupportedChartStyles.setValue(t), this._watchedIntraday.setValue(!!e.has_intraday), this._watchedSeconds.setValue(!!e.has_seconds), this._watchedTicks.setValue(!(0, a.isCloseBasedSymbol)(e) && !!e.has_ticks), this._watchedRange.setValue(!(0, a.isCloseBasedSymbol)(e));
                        const i = e.data_frequency ? e.data_frequency : void 0;
                        this._watchedDataFrequencyResolution.setValue(i)
                    } else this._watchedIntraday.deleteValue(), this._watchedSeconds.deleteValue(), this._watchedTicks.deleteValue(), this._watchedRange.deleteValue(), this._proSymbol.deleteValue()
                }
                _watchedIntervalListener(e) {
                    this._intervalProperty().value() !== e && this._chartWidgetCollection.setResolution(e)
                }
                _onIntervalPropertyChange() {
                    const e = this._intervalProperty().value() !== this._watchedInterval.value();
                    this._watchedInterval.setValue(this._intervalProperty().value()), e && this._chartWidgetCollection.setResolution(this._intervalProperty().value())
                }
                _onChartModelCreated(e) {
                    if (!this._activeChartWidget) throw new Error("ChartWidget is undefined");
                    this._chartWidgetBindingState = _.BoundToModel, this._activeChartWidget.modelCreated().unsubscribe(this, this._onChartModelCreated);
                    const t = this._symbolProperty();
                    t.subscribe(this, this._onSymbolPropertyChange), this._watchedSymbol.setValue(t.value()), this._watchedSymbol.subscribe(this._watchedSymbolListenerBound);
                    const i = this._mainSeries();
                    i.dataEvents().symbolResolved().subscribe(this, this._onSymbolResolved), this._watchedSymbol.hook = e => (i.symbolSameAsCurrent(e) && (e = i.symbol()), e), i.dataEvents().symbolResolved().subscribe(this, this._updateSeriesSymbolInfo), i.dataEvents().symbolError().subscribe(this, this._updateSeriesSymbolInfo), i.dataEvents().symbolNotPermitted().subscribe(this, this._updateSeriesSymbolInfo), i.dataEvents().symbolGroupNotPermitted().subscribe(this, this._updateSeriesSymbolInfo), this._updateSeriesSymbolInfo();
                    const r = this._intervalProperty();
                    r.subscribe(this, this._onIntervalPropertyChange), this._watchedInterval.setValue(r.value()), this._watchedInterval.subscribe(this._watchedIntervalListenerBound), this._activeChartWidget.readOnly() && (this._watchedSymbol.writeLock = !0)
                }
            }; {
                const e = (0,
                        c.getFreshInitData)().symbolInfo,
                    t = e ? e.pro_symbol : u.getValue("editchart.model.symbol", window.DEFAULT_SYMBOL);
                y.symbol.setValue(t)
            }
            window.TradingViewApi || (window.TradingViewApi = {
                linking: y
            })
        },
        331983: (e, t, i) => {
            i.d(t, {
                numOfDecimalPlaces: () => n
            });
            var r = i(960521);

            function n(e) {
                return (new r.Big(e).toFixed().split(".")[1] || "").length
            }
        },
        212686: (e, t, i) => {
            function r(e, t) {
                return (null == t ? void 0 : t.includes("cfd")) && ["commodity", "futures", "index", "stock", "fund"].includes(e) || "cfd" === e
            }

            function n(e, t) {
                return void 0 !== t && t.includes("crypto") || "crypto" === e || "bitcoin" === e
            }

            function s(e, t) {
                return "futures" === e && void 0 !== t && !t.includes("cfd")
            }

            function o(e, t) {
                return "stock" === e && void 0 !== t && !t.includes("cfd")
            }

            function a(e, t) {
                return void 0 !== t && ("index" === e && !t.includes("cfd") || "fundamental" === e && t.includes("crypto"))
            }
            i.d(t, {
                isCFDSymbol: () => r,
                isCryptoSymbol: () => n,
                isFuturesSymbol: () => s,
                isStockSymbol: () => o,
                isIndexSymbol: () => a
            })
        },
        691520: (e, t, i) => {
            i.d(t, {
                getMinTick: () => s,
                makeVariableMinTickData: () => o,
                makePriceToPriceIndexConverter: () => a,
                makePriceIndexToPriceConverter: () => l
            });
            var r = i(960521),
                n = i(758337);

            function s(e) {
                const {
                    minTick: t,
                    price: i,
                    variableMinTickData: r,
                    shouldCheckForEquality: n
                } = e;
                return void 0 === r ? t : function(e, t, i = !1) {
                    for (let r = 0; r < t.length; r++) {
                        if (e < t[r].price) return t[r].minTick;
                        if (i && e === t[r].price) return t[r].minTick
                    }
                    return t[t.length - 1].minTick
                }(i, r, n)
            }

            function o(e, t) {
                var i, s, o, a, l;
                const u = t.split(" ").map(Number);
                if ((0, n.isEven)(u.length) || u.some(Number.isNaN)) return [{
                    minTick: e,
                    price: 1 / 0,
                    maxIndex: 1 / 0
                }];
                const c = [];
                for (let e = 0; e < u.length; e += 2) {
                    const t = null !== (i = u[e + 1]) && void 0 !== i ? i : 1 / 0,
                        n = null !== (o = null === (s = c[c.length - 1]) || void 0 === s ? void 0 : s.price) && void 0 !== o ? o : 0,
                        h = null !== (l = null === (a = c[c.length - 1]) || void 0 === a ? void 0 : a.maxIndex) && void 0 !== l ? l : 0,
                        d = t === 1 / 0 ? 1 / 0 : new r.Big(t).minus(n).div(u[e]).plus(h).toNumber();
                    c.push({
                        minTick: u[e],
                        price: t,
                        maxIndex: d
                    })
                }
                return c
            }

            function a(e, t) {
                return i => {
                    var n, s, o, a;
                    if (!Number.isFinite(i)) return NaN;
                    if (void 0 === t) return new r.Big(i).div(e).round().toNumber();
                    for (let e = 0; e < t.length; e++) {
                        const {
                            price: l,
                            minTick: u
                        } = t[e], c = null !== (s = null === (n = t[e - 1]) || void 0 === n ? void 0 : n.price) && void 0 !== s ? s : 0, h = null !== (a = null === (o = t[e - 1]) || void 0 === o ? void 0 : o.maxIndex) && void 0 !== a ? a : 0;
                        if (i < l) return new r.Big(i).minus(c).div(u).plus(h).round().toNumber()
                    }
                    return NaN
                }
            }

            function l(e, t) {
                return i => {
                    var n, s, o, a;
                    if (!Number.isFinite(i)) return NaN;
                    if (void 0 === t) return (0, r.Big)(i).mul(e).toNumber();
                    for (let e = 0; e < t.length; e++) {
                        const {
                            maxIndex: l,
                            minTick: u
                        } = t[e], c = null !== (s = null === (n = t[e - 1]) || void 0 === n ? void 0 : n.price) && void 0 !== s ? s : 0, h = null !== (a = null === (o = t[e - 1]) || void 0 === o ? void 0 : o.maxIndex) && void 0 !== a ? a : 0;
                        if (i < l) return new r.Big(i).minus(h).mul(u).plus(c).toNumber()
                    }
                    return NaN
                }
            }
        },
        712270: (e, t, i) => {
            i.d(t, {
                japaneseChartStyles: () => n,
                commonChartStyles: () => s,
                allChartStyles: () => o
            });
            var r = i(495046);

            function n() {
                const e = [8];
                return r.enabled("japanese_chart_styles") && (e.push(4, 7, 5, 6), e.push(11)), e
            }

            function s() {
                const e = [0, 1, 9, 13, 2, 3, 10];
                return e.push(12), e
            }

            function o() {
                return s().concat(n())
            }
        },
        951512: (e, t, i) => {
            i.d(t, {
                NumericFormatter: () => s
            });
            var r = i(831471),
                n = i(960521);
            class s {
                constructor(e) {
                    this._precision = e
                }
                format(e) {
                    return (void 0 !== this._precision ? e.toFixed(this._precision) : s.formatNoE(e)).replace(".", r.formatterOptions.decimalSign)
                }
                parse(e) {
                    const t = e.replace(r.formatterOptions.decimalSign, ".");
                    let i = parseFloat(t);
                    return this._precision && (i = +i.toFixed(this._precision)), i
                }
                static formatNoE(e) {
                    if (!Number.isFinite(e)) return String(e);
                    const t = new n.Big(e);
                    return t.lt(1) ? t.toFixed() : t.toString()
                }
            }
        },
        561068: (e, t, i) => {
            i.d(t, {
                PercentageFormatter: () => s
            });
            var r = i(831471),
                n = i(768038);
            class s extends r.PriceFormatter {
                constructor(e) {
                    super(e), this.type = "percentage"
                }
                state() {
                    const e = r.PriceFormatter.prototype.state.call(this);
                    return e.percent = !0, e
                }
                parse(e) {
                    return e = e.replace("%", ""), super.parse(e)
                }
                format(e, t, i, r, s = !0) {
                    const o = super.format(e, t, i, r, !1) + "%";
                    return s ? (0, n.forceLTRStr)(o) : o
                }
                static serialize(e) {
                    return e.state()
                }
                static deserialize(e) {
                    return new s(e.priceScale)
                }
            }
        },
        831471: (e, t, i) => {
            i.d(t, {
                formatterOptions: () => h,
                numberToStringWithLeadingZero: () => y,
                isFormatterHasForexAdditionalPrecision: () => S,
                PriceFormatter: () => p
            });
            var r = i(777754),
                n = i(960521),
                s = i(691520),
                o = i(758337),
                a = i(768038),
                l = i(331983);
            const u = (0, i(272001).getLogger)("Chart.PriceFormatter"),
                c = new RegExp(/^(-?)[0-9]+$/),
                h = {
                    decimalSign: ".",
                    decimalSignFractional: "'"
                },
                d = new Map;
            const m = new Map;

            function _(e, t, i, r) {
                let n = 0;
                if (e > 0 && t > 0) {
                    let t = e;
                    for (i && r && (t /= r); t > 1;) t /= 10, n++
                }
                return n
            }

            function y(e, t) {
                if (!(0, o.isNumber)(e)) return "n/a";
                if (!(0, o.isInteger)(t)) throw new TypeError("invalid length");
                if (t < 0 || t > 24) throw new TypeError("invalid length");
                if (0 === t) return e.toString();
                return ("0000000000000000" + e.toString()).slice(-t)
            }

            function S(e) {
                return "hasForexAdditionalPrecision" in e
            }
            class p {
                constructor(e, t, n, a, l) {
                    if (this.type = "price", this._formatterErrors = {
                            custom: r.t(null, void 0, i(332061)),
                            fraction: r.t(null, void 0, i(142015)),
                            secondFraction: r.t(null, void 0, i(643247))
                        }, t || (t = 1), (0, o.isNumber)(e) && (0, o.isInteger)(e) || (e = 100), e < 0) throw new TypeError("invalid base");
                    this._priceScale = e, this._minMove = t, this._minMove2 = a, this._variableMinTickData = n || void 0 === l ? void 0 : (0, s.makeVariableMinTickData)(NaN, l), n && void 0 !== a && a > 0 && 2 !== a && 4 !== a && 8 !== a ? u.logDebug("invalid minmove2") : (this._fractional = n, this._fractionalLength = _(this._priceScale, this._minMove, this._fractional, this._minMove2))
                }
                isFractional() {
                    return !!this._fractional
                }
                state() {
                    return {
                        fractional: this._fractional,
                        fractionalLength: this._fractionalLength,
                        minMove: this._minMove,
                        minMove2: this._minMove2,
                        priceScale: this._priceScale
                    }
                }
                format(e, t, i, r = !0, o = !0, u = !1) {
                    let c = "";
                    e < 0 ? (c = !1 === r ? "" : "−", e = -e) : e && !0 === t && (c = "+");
                    let h, d = this._priceScale,
                        m = this._minMove,
                        y = this._fractionalLength;
                    if (void 0 !== this._variableMinTickData) {
                        const t = (0, s.getMinTick)({
                            price: e,
                            minTick: NaN,
                            variableMinTickData: this._variableMinTickData,
                            shouldCheckForEquality: !0
                        });
                        d = Math.pow(10, (0, l.numOfDecimalPlaces)(t)), m = (0, n.Big)(t).mul(d).toNumber(), y = _(d, m)
                    }
                    return h = this._fractional ? c + this._formatAsFractional(e, i) : c + this._formatAsDecimal({
                            price: e,
                            priceScale: d,
                            minMove: m,
                            fractionalLength: y,
                            tailSize: i,
                            cutFractionalByPrecision: u
                        }),
                        o ? (0, a.forceLTRStr)(h) : h
                }
                parse(e) {
                    return "+" === (e = (e = (0, a.stripLTRMarks)(e)).replace("−", "-"))[0] && (e = e.substring(1)), this._fractional ? this._minMove2 ? this._parseAsDoubleFractional(e) : this._parseAsSingleFractional(e) : this._parseAsDecimal(e)
                }
                hasForexAdditionalPrecision() {
                    return !this._fractional && 10 === this._minMove2
                }
                static serialize(e) {
                    return e.state()
                }
                static deserialize(e) {
                    return new p(e.priceScale, e.minMove, e.fractional, e.minMove2)
                }
                _formatAsExponential(e) {
                    const t = Math.floor(.75 * Math.log10(this._priceScale)),
                        i = e * Math.pow(10, t),
                        r = `e-${t}`,
                        n = Math.log10(this._priceScale) - t;
                    return `${i.toFixed(n).replace(".",h.decimalSign)}${r}`
                }
                _formatAsDecimal(e) {
                    const {
                        price: t,
                        priceScale: i,
                        minMove: r,
                        fractionalLength: s = 0,
                        tailSize: o = 0,
                        cutFractionalByPrecision: a
                    } = e;
                    if (i > 1e10) return this._formatAsExponential(t);
                    let l;
                    l = this._fractional ? Math.pow(10, s) : Math.pow(10, o) * i / (a ? 1 : r);
                    const u = 1 / l;
                    let c;
                    if (l > 1) c = Math.floor(t);
                    else {
                        const e = Math.floor(Math.round(t / u) * u);
                        c = 0 === Math.round((t - e) / u) ? e : e + u
                    }
                    let d = "";
                    if (l > 1) {
                        let e = a ? new n.Big(t).mul(l).round(void 0, 0).minus(new n.Big(c).mul(l)).toNumber() : parseFloat((Math.round(t * l) - c * l).toFixed(s));
                        e >= l && (e -= l, c += 1);
                        const i = a ? new n.Big(e).round(s, 0).toNumber() : parseFloat(e.toFixed(s)) * r;
                        d = h.decimalSign + y(i, s + o), d = this._removeEndingZeros(d, o)
                    }
                    return c.toString() + d
                }
                _getFractPart(e, t, i) {
                    const r = [0, 5],
                        n = [0, 2, 5, 7],
                        s = [0, 1, 2, 3, 5, 6, 7, 8];
                    return 2 === i ? void 0 === r[e] ? -1 : r[e] : 4 === i ? void 0 === n[e] ? -1 : n[e] : 8 === i && 2 === t ? void 0 === s[e] ? -1 : s[e] : e
                }
                _formatAsFractional(e, t) {
                    const i = this._priceScale / this._minMove;
                    let r = Math.floor(e),
                        n = t ? Math.floor(e * i) - r * i : Math.round(e * i) - r * i;
                    n === i && (n = 0, r += 1);
                    let s = "";
                    if (t) {
                        let o = (e - r - n / i) * i;
                        o = Math.round(o * Math.pow(10, t)), s = y(o, t), s = this._removeEndingZeros(s, t)
                    }
                    if (!this._fractionalLength) throw new Error("_fractionalLength is not calculated");
                    let o = "";
                    if (this._minMove2) {
                        const e = n % this._minMove2;
                        n = (n - e) / this._minMove2;
                        const t = y(n, this._fractionalLength),
                            i = this._getFractPart(e, 2, this._minMove2);
                        o = t + h.decimalSignFractional + i
                    } else n = this._getFractPart(n, 1, this._priceScale), o = y(n * this._minMove, this._fractionalLength);
                    return r.toString() + h.decimalSignFractional + o + s
                }
                _removeEndingZeros(e, t) {
                    for (let i = 0; i < t && "0" === e[e.length - 1]; i++) e = e.substring(0, e.length - 1);
                    return e
                }
                _parseAsDecimal(e) {
                    if (e.includes("e")) {
                        if (function(e) {
                                let t = d.get(e);
                                return t || (t = new RegExp("^(-?)[0-9]+\\" + e + "[0-9]*e(-?)[0-9]+$"), d.set(e, t)), t
                            }(h.decimalSign).exec(e)) {
                            const t = parseFloat(e.replace(h.decimalSign, "."));
                            return {
                                value: t,
                                res: !0,
                                suggest: this.format(t)
                            }
                        }
                        return {
                            error: this._formatterErrors.custom,
                            res: !1
                        }
                    }
                    let t = c.exec(e);
                    if (t) {
                        const t = parseFloat(e);
                        return {
                            value: t,
                            res: !0,
                            suggest: this.format(t)
                        }
                    }
                    if (t = function(e) {
                            let t = m.get(e);
                            return t || (t = new RegExp("^(-?)[0-9]+\\" + h.decimalSign + "[0-9]*$"), m.set(e, t)), t
                        }(h.decimalSign).exec(e), t) {
                        const t = parseFloat(e.replace(h.decimalSign, "."));
                        return {
                            value: t,
                            res: !0,
                            suggest: this.format(t)
                        }
                    }
                    return {
                        error: this._formatterErrors.custom,
                        res: !1
                    }
                }
                _patchFractPart(e, t, i) {
                    const r = {
                            0: 0,
                            5: 1
                        },
                        n = {
                            0: 0,
                            2: 1,
                            5: 2,
                            7: 3
                        },
                        s = {
                            0: 0,
                            1: 1,
                            2: 2,
                            3: 3,
                            5: 4,
                            6: 5,
                            7: 6,
                            8: 7
                        };
                    return 2 === i ? void 0 === r[e] ? -1 : r[e] : 4 === i ? void 0 === n[e] ? -1 : n[e] : 8 === i && 2 === t ? void 0 === s[e] ? -1 : s[e] : e
                }
                _parseAsSingleFractional(e) {
                    let t = c.exec(e);
                    if (t) {
                        const t = parseFloat(e);
                        return {
                            value: t,
                            res: !0,
                            suggest: this.format(t)
                        }
                    }
                    if (t = new RegExp("^(-?)([0-9]+)\\" + h.decimalSignFractional + "([0-9]+)$").exec(e), t) {
                        const e = !!t[1],
                            i = parseInt(t[2]),
                            r = this._priceScale,
                            n = this._patchFractPart(parseInt(t[3]), 1, r);
                        if (n >= r || n < 0) return {
                            error: this._formatterErrors.fraction,
                            res: !1
                        };
                        let s = i + n / r;
                        return e && (s = -s), {
                            value: s,
                            res: !0,
                            suggest: this.format(s)
                        }
                    }
                    return {
                        error: this._formatterErrors.custom,
                        res: !1
                    }
                }
                _parseAsDoubleFractional(e) {
                    let t = c.exec(e);
                    if (t) {
                        const t = parseFloat(e);
                        return {
                            value: t,
                            res: !0,
                            suggest: this.format(t)
                        }
                    }
                    if (t = new RegExp("^(-?)([0-9]+)\\" + h.decimalSignFractional + "([0-9]+)\\" + h.decimalSignFractional + "([0-9]+)$").exec(e), t) {
                        const e = !!t[1],
                            i = parseInt(t[2]),
                            r = void 0 !== this._minMove2 ? this._minMove2 : NaN,
                            n = this._priceScale / r,
                            s = this._minMove2,
                            o = this._patchFractPart(parseInt(t[3]), 1, n),
                            a = this._patchFractPart(parseInt(t[4]), 2, s);
                        if (o >= n || o < 0) return {
                            error: this._formatterErrors.fraction,
                            res: !1
                        };
                        if (void 0 !== s && a >= s || a < 0) return {
                            error: this._formatterErrors.secondFraction,
                            res: !1
                        };
                        let l = void 0 !== s ? i + o / n + a / (n * s) : NaN;
                        return e && (l = -l), {
                            value: l,
                            res: !0,
                            suggest: this.format(l)
                        }
                    }
                    return {
                        error: this._formatterErrors.custom,
                        res: !1
                    }
                }
            }
        },
        738023: (e, t, i) => {
            i.d(t, {
                PLACE_HOLDER: () => o,
                NOT_AVAILABLE_VOLUME_FORMATTER: () => a,
                VolumeFormatter: () => l
            });
            var r = i(777754),
                n = i(951512),
                s = i(758337);
            const o = "---",
                a = 1e100;
            class l {
                constructor(e) {
                    this.type = "volume", this._numericFormatter = new n.NumericFormatter, this._fractionalValues = void 0 !== e && e > 0, this._precision = e
                }
                state() {
                    return {
                        precision: this._precision
                    }
                }
                format(e, t) {
                    if (!(0, s.isNumber)(e)) return o;
                    let n = "";
                    return e < 0 ? (n = "−", e = -e) : e > 0 && t && (n = "+"), e >= a ? r.t(null, void 0, i(343088)) : (!this._fractionalValues || e >= 995 ? e = Math.round(e) : this._fractionalValues && (e = +e.toFixed(this._precision)), e < 995 ? n + this._formatNumber(e) : e < 999995 ? n + this._formatNumber(e / 1e3) + "K" : e < 999999995 ? (e = 1e3 * Math.round(e / 1e3), n + this._formatNumber(e / 1e6) + "M") : e < 999999999995 ? (e = 1e6 * Math.round(e / 1e6), n + this._formatNumber(e / 1e9) + "B") : (e = 1e9 * Math.round(e / 1e9), n + this._formatNumber(e / 1e12) + "T"))
                }
                parse(e) {
                    if ("---" === e) return {
                        error: "not a number",
                        res: !1,
                        value: NaN
                    };
                    const t = {
                            K: 1e3,
                            M: 1e6,
                            B: 1e9,
                            T: 1e12
                        },
                        i = e.slice(-1);
                    if (t.hasOwnProperty(i)) {
                        const r = this._numericFormatter.parse(e.slice(0, -1));
                        return (0, s.isNumber)(r) ? {
                            res: !0,
                            value: r * t[i]
                        } : {
                            error: "not a number",
                            res: !1,
                            value: NaN
                        }
                    } {
                        const t = this._numericFormatter.parse(e);
                        return (0, s.isNumber)(t) ? {
                            res: !0,
                            value: t
                        } : {
                            error: "not a number",
                            res: !1,
                            value: NaN
                        }
                    }
                }
                static serialize(e) {
                    return e.state()
                }
                static deserialize(e) {
                    return new l(e.precision)
                }
                _formatNumber(e) {
                    if (this._fractionalValues && 0 !== e) {
                        const t = 14 - Math.ceil(Math.log10(e)),
                            i = Math.pow(10, t);
                        e = Math.round(e * i) / i
                    }
                    return this._numericFormatter.format(e).replace(/(\.[1-9]*)0+$/, ((e, t) => t))
                }
            }
        },
        568450: (e, t, i) => {
            i.d(t, {
                ResolutionKind: () => s,
                SpecialResolutionKind: () => o,
                Interval: () => c,
                isHour: () => d
            });
            const r = /^(\d*)([TSHDWMR])$/,
                n = /^(\d+)$/;
            var s, o;
            ! function(e) {
                e.Ticks = "ticks", e.Seconds = "seconds",
                    e.Minutes = "minutes", e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Range = "range", e.Invalid = "invalid"
            }(s || (s = {})),
            function(e) {
                e.Hours = "hours"
            }(o || (o = {}));
            const a = {};
            a[s.Ticks] = 1e3, a[s.Seconds] = 1e3, a[s.Minutes] = 60 * a[s.Seconds], a[s.Days] = 1440 * a[s.Minutes], a[s.Weeks] = 7 * a[s.Days];
            const l = {
                    T: s.Ticks,
                    S: s.Seconds,
                    D: s.Days,
                    W: s.Weeks,
                    M: s.Months,
                    R: s.Range
                },
                u = new Set([s.Ticks, s.Seconds, s.Minutes]);
            class c {
                constructor(e, t) {
                    this._kind = s.Invalid, this._multiplier = 0, e !== s.Invalid && t > 0 && (this._kind = e, this._multiplier = t)
                }
                kind() {
                    return this._kind
                }
                multiplier() {
                    return this._multiplier
                }
                isValid() {
                    return this.kind() !== s.Invalid && this.multiplier() > 0
                }
                isDWM() {
                    return this.isValid() && !this.isRange() && !this.isIntraday() && !this.isTicks()
                }
                isIntraday() {
                    const e = u.has(this.kind());
                    return this.isValid() && e
                }
                isSeconds() {
                    return this.kind() === s.Seconds
                }
                isMinutes() {
                    return this.kind() === s.Minutes
                }
                isMinuteHours() {
                    return this.kind() === s.Minutes && d(this.multiplier())
                }
                isDays() {
                    return this.kind() === s.Days
                }
                isWeeks() {
                    return this.kind() === s.Weeks
                }
                isMonths() {
                    return this.kind() === s.Months
                }
                isRange() {
                    return this.kind() === s.Range
                }
                isTicks() {
                    return this.kind() === s.Ticks
                }
                isTimeBased() {
                    return !this.isRange()
                }
                letter() {
                    return this.isValid() && this.kind() !== s.Minutes ? this.kind()[0].toUpperCase() : ""
                }
                value() {
                    return this.isValid() ? this.kind() === s.Minutes ? this.multiplier() + "" : this.multiplier() + this.letter() : ""
                }
                isEqualTo(e) {
                    if (!(e instanceof c)) throw new Error("Argument is not an Interval");
                    return !(!this.isValid() || !e.isValid()) && (this.kind() === e.kind() && this.multiplier() === e.multiplier())
                }
                inMilliseconds(e = Date.now()) {
                    if (!this.isValid() || this.isRange()) return NaN;
                    if (this.isMonths()) {
                        const t = new Date(e);
                        t.setUTCMonth(t.getUTCMonth() + (this.multiplier() || 1));
                        return +t - e
                    }
                    const t = this.multiplier();
                    return a[this.kind()] * t
                }
                static isEqual(e, t) {
                    return e === t || c.parse(e).isEqualTo(c.parse(t))
                }
                static parseExt(e) {
                    e = (e + "").toUpperCase().split(",")[0];
                    let t = r.exec(e);
                    return null !== t ? "H" === t[2] ? {
                        interval: new c(s.Minutes, 60 * h(t[1])),
                        guiResolutionKind: o.Hours
                    } : {
                        interval: new c(l[t[2]], h(t[1])),
                        guiResolutionKind: l[t[2]]
                    } : (t = n.exec(e), null !== t ? {
                        interval: new c(s.Minutes, h(t[1])),
                        guiResolutionKind: s.Minutes
                    } : {
                        interval: new c(s.Invalid, 0),
                        guiResolutionKind: s.Invalid
                    })
                }
                static parse(e) {
                    return c.parseExt(e).interval
                }
                static kind(e) {
                    return c.parse(e).kind()
                }
                static isValid(e) {
                    return c.parse(e).isValid()
                }
                static isDWM(e) {
                    return c.parse(e).isDWM()
                }
                static isIntraday(e) {
                    return c.parse(e).isIntraday()
                }
                static isSeconds(e) {
                    return c.parse(e).isSeconds()
                }
                static isMinutes(e) {
                    return c.parse(e).isMinutes()
                }
                static isMinuteHours(e) {
                    return c.parse(e).isMinuteHours()
                }
                static isDays(e) {
                    return c.parse(e).isDays()
                }
                static isWeeks(e) {
                    return c.parse(e).isWeeks()
                }
                static isMonths(e) {
                    return c.parse(e).isMonths()
                }
                static isRange(e) {
                    return c.parse(e).isRange()
                }
                static isTicks(e) {
                    return c.parse(e).isTicks()
                }
                static isTimeBased(e) {
                    return c.parse(e).isTimeBased()
                }
                static normalize(e) {
                    const t = c.parse(e);
                    return t.isValid() ? t.value() : null
                }
            }

            function h(e) {
                return 0 === e.length ? 1 : parseInt(e, 10)
            }

            function d(e) {
                return e >= 60 && !(e % 60)
            }
        },
        933813: (e, t, i) => {
            i.r(t),
                i.d(t, {
                    STATUS_OFFLINE: () => r,
                    STATUS_RESOLVING: () => n,
                    STATUS_LOADING: () => s,
                    STATUS_READY: () => o,
                    STATUS_INVALID_SYMBOL: () => a,
                    STATUS_SNAPSHOT: () => l,
                    STATUS_EOD: () => u,
                    STATUS_PULSE: () => c,
                    STATUS_DELAYED: () => h,
                    STATUS_DELAYED_STREAMING: () => d,
                    STATUS_NO_BARS: () => m,
                    STATUS_REPLAY: () => _,
                    STATUS_ERROR: () => y,
                    SERIES_STATUS_TEXT: () => S,
                    STYLE_LINE_TYPE_MARKERS: () => p,
                    STYLE_LINE_TYPE_STEP: () => b,
                    STYLE_LINE_TYPE_SIMPLE: () => f,
                    STYLE_BARS: () => v,
                    STYLE_CANDLES: () => g,
                    STYLE_LINE: () => w,
                    STYLE_AREA: () => C,
                    STYLE_RENKO: () => T,
                    STYLE_KAGI: () => E,
                    STYLE_PNF: () => M,
                    STYLE_PB: () => k,
                    STYLE_HEIKEN_ASHI: () => F,
                    STYLE_HOLLOW_CANDLES: () => L,
                    STYLE_BASELINE: () => B,
                    STYLE_RANGE: () => I,
                    STYLE_HILO: () => N,
                    STYLE_COLUMNS: () => R,
                    STYLE_SHORT_NAMES: () => D,
                    SYMBOL_STRING_DATA: () => P
                });
            const r = 0,
                n = 1,
                s = 2,
                o = 3,
                a = 4,
                l = 5,
                u = 6,
                c = 7,
                h = 8,
                d = 9,
                m = 10,
                _ = 11,
                y = 12,
                S = {
                    [r]: "connecting",
                    [n]: "loading",
                    [s]: "loading",
                    [o]: "realtime",
                    [a]: "invalid",
                    [l]: "snapshot",
                    [u]: "endofday",
                    [c]: "endofday",
                    [h]: "delayed",
                    [d]: "delayed_streaming",
                    [m]: "forbidden",
                    [_]: "replay",
                    [y]: "error"
                },
                p = 0,
                b = 1,
                f = 2,
                v = 0,
                g = 1,
                w = 2,
                C = 3,
                T = 4,
                E = 5,
                M = 6,
                k = 7,
                F = 8,
                L = 9,
                B = 10,
                I = 11,
                N = 12,
                R = 13,
                D = {
                    0: "bar",
                    1: "candle",
                    9: "hollowCandle",
                    2: "line",
                    3: "area",
                    4: "renko",
                    7: "pb",
                    5: "kagi",
                    6: "pnf",
                    8: "ha",
                    10: "baseline",
                    11: "range",
                    12: "hilo",
                    13: "column"
                },
                P = {
                    4: {
                        type: "BarSetRenko@tv-prostudies",
                        basicStudyVersion: 64
                    },
                    7: {
                        type: "BarSetPriceBreak@tv-prostudies",
                        basicStudyVersion: 34
                    },
                    5: {
                        type: "BarSetKagi@tv-prostudies",
                        basicStudyVersion: 34
                    },
                    6: {
                        type: "BarSetPnF@tv-prostudies",
                        basicStudyVersion: 34
                    },
                    8: {
                        type: "BarSetHeikenAshi@tv-basicstudies",
                        basicStudyVersion: 60
                    },
                    11: {
                        type: "BarSetRange@tv-basicstudies",
                        basicStudyVersion: 72
                    }
                }
        },
        720444: (e, t, i) => {
            i.r(t), i.d(t, {
                getTranslatedChartStyleName: () => w,
                isRequiringRestartSeriesStyles: () => C,
                isRangeBasedStyle: () => T,
                isRangeStyle: () => E,
                isTimeBasedStyle: () => M,
                isValidStyle: () => k,
                isSingleValueBasedStyle: () => F,
                setLastUsedStyle: () => L,
                getLastUsedStyle: () => B,
                getLastUsedSingleValueBasedStyle: () => I,
                getDefaultStyle: () => N,
                getChartStyleByResolution: () => R,
                chartStyleStudyId: () => D,
                preparePriceAxisProperties: () => P,
                hasProjection: () => A,
                isPriceSourceStyle: () => x,
                getSeriesPriceFormattingState: () => W,
                createSeriesFormatter: () => U,
                symbolCurrencyConvertible: () => O,
                symbolCurrency: () => Y,
                symbolOriginalCurrency: () => H,
                symbolBaseCurrency: () => $,
                isConvertedToOtherCurrency: () => q,
                symbolUnitConvertible: () => K,
                symbolUnit: () => z,
                symbolOriginalUnit: () => G,
                isConvertedToOtherUnit: () => j,
                symbolUnitConvertibleGroupsIfExist: () => Z,
                symbolCurrentContract: () => X,
                symbolHasPreOrPostMarket: () => J,
                symbolHasSeveralSessions: () => Q,
                symbolHasEconomicEvents: () => ee,
                extractSymbolNameFromSymbolInfo: () => te,
                symbolTitle: () => ie,
                displayedSymbolName: () => re,
                displayedSymbolExchange: () => ne,
                actualSymbol: () => se,
                proSymbol: () => oe,
                symbolForApi: () => ae,
                isRegularSessionId: () => le,
                isCloseBasedSymbol: () => ue,
                isMeasureUnitSymbol: () => ce,
                measureUnitId: () => he,
                hasVolume: () => de,
                isEconomicSymbol: () => me,
                getStudySymbolExchange: () => _e,
                isFutureContinuousSymbolWithBackajustment: () => ye,
                isFuturesContractSymbol: () => Se,
                isCryptoSymbol: () => pe
            });
            var r = i(777754),
                n = i(62802),
                s = i(933813),
                o = i(568450),
                a = i(831471),
                l = i(495046),
                u = i(650151),
                c = i(738023),
                h = i(561068),
                d = i(212686);
            const m = l.enabled("pay_attention_to_ticker_not_symbol"),
                _ = l.enabled("uppercase_instrument_names"),
                y = l.enabled("charting_library_single_symbol_request"),
                S = l.enabled("use_ticker_on_symbol_info_update"),
                p = l.enabled("hide_object_tree_and_price_scale_exchange_label"),
                b = [4, 5, 6, 7, 8],
                f = [4, 5, 6, 7, 11],
                v = [0, 1, 9, 2, 3, 10, 8, 12, 13],
                g = [2, 10, 3, 13];

            function w(e) {
                return {
                    0: r.t(null, void 0, i(16812)),
                    1: r.t(null, void 0, i(463528)),
                    2: r.t(null, void 0, i(301277)),
                    3: r.t(null, void 0, i(542097)),
                    9: r.t(null, void 0, i(661582)),
                    10: r.t(null, void 0, i(117712)),
                    12: r.t(null, void 0, i(631994)),
                    13: r.t(null, void 0, i(636018)),
                    4: r.t(null, void 0, i(20801)),
                    7: r.t(null, void 0, i(563492)),
                    5: r.t(null, void 0, i(292901)),
                    6: r.t(null, void 0, i(99969)),
                    11: r.t(null, void 0, i(490357)),
                    8: r.t(null, void 0, i(240530))
                }[e]
            }

            function C(e) {
                return -1 !== b.indexOf(e)
            }

            function T(e) {
                return -1 !== f.indexOf(e)
            }

            function E(e) {
                return 11 === e
            }

            function M(e) {
                return -1 !== v.indexOf(e)
            }

            function k(e) {
                return T(e) || M(e)
            }

            function F(e) {
                switch (e) {
                    case 3:
                    case 10:
                    case 2:
                    case 13:
                        return !0;
                    default:
                        return !1
                }
            }

            function L(e, t) {
                k(e) && (11 !== e && n.setValue("chart.lastUsedStyle", e), ue(t) && F(e) && n.setValue("chart.lastUsedSingleValueBasedStyle", e))
            }

            function B() {
                const e = n.getInt("chart.lastUsedStyle");
                return void 0 === e ? 1 : e
            }

            function I() {
                const e = n.getInt("chart.lastUsedSingleValueBasedStyle");
                return void 0 === e ? 2 : e
            }

            function N(e) {
                return e ? 11 : 1
            }

            function R(e, t) {
                const i = E(t),
                    r = o.Interval.isRange(e);
                return !i && r ? N(!0) : i && !r ? N(!1) : t
            }

            function D(e, t) {
                const i = s.SYMBOL_STRING_DATA[e];
                return void 0 === i ? null : t ? `${i.type}-${i.basicStudyVersion}` : i.type
            }

            function P(e) {
                const t = e.priceAxisProperties,
                    i = t.lockScale.value(),
                    r = 6 === e.style.value();
                (r || i) && (t.log.setValue(!1), t.percentage.setValue(!1)), t.logDisabled.setValue(!(!r && !i)), t.percentageDisabled.setValue(!(!r && !i))
            }
            const V = [4, 7, 5, 6];

            function A(e) {
                return -1 !== V.indexOf(e)
            }

            function x(e) {
                return g.includes(e)
            }

            function W(e, t = "default", i = !1) {
                let r, n, s = 100,
                    o = 1;
                if ("default" === t) null != e && (s = e.pricescale, o = e.minmov, r = e.fractional, n = e.minmove2);
                else {
                    let e = t.split(",");
                    3 !== e.length && (e = ["100", "1", "false"]), s = parseInt(e[0]), o = parseInt(e[1]), r = "true" === e[2]
                }
                return i && (o = 1), {
                    priceScale: s,
                    minMove: o,
                    fractional: r,
                    minMove2: n
                }
            }

            function U(e, t, i = !1) {
                if ("default" === t && null != e) {
                    const t = e.formatter || e.format;
                    if ("volume" === t) return new c.VolumeFormatter(2);
                    if ("percent" === t) return new h.PercentageFormatter(e.pricescale)
                }
                const {
                    priceScale: r,
                    minMove: n,
                    fractional: s,
                    minMove2: o
                } = W(e, t, i);
                return new a.PriceFormatter(r, n, s, o)
            }

            function O(e) {
                return null !== e && "spread" !== e.type
            }

            function Y(e, t, i) {
                if (null === e) return null;
                const r = !t || i ? e.currency_id : e.currency_code;
                return void 0 === r || "" === r || "pct" === r ? null : r
            }

            function H(e, t) {
                const i = t ? e.original_currency_code : e.original_currency_id;
                return "pct" === i ? null : null != i ? i : Y(e, t)
            }

            function $(e) {
                return e.base_currency_id || null
            }

            function q(e) {
                return !(null === e || !O(e)) && (void 0 !== e.original_currency_id && e.original_currency_id !== e.currency_id)
            }

            function K(e, t) {
                return t && null !== e && "spread" !== e.type
            }

            function z(e, t) {
                if (null === e || !t) return null;
                const i = e.unit_id;
                return void 0 === i || "" === i ? null : i
            }

            function G(e, t) {
                return t ? e.original_unit_id || z(e, t) : null
            }

            function j(e, t) {
                return !(null === e || !K(e, t)) && (void 0 !== e.original_unit_id && e.original_unit_id !== e.unit_id)
            }

            function Z(e, t) {
                return null !== e && K(e, t) ? e.unit_conversion_types || null : []
            }

            function X(e) {
                return "futures" === e.type && e.front_contract || null
            }

            function J(e) {
                return null !== e && void 0 !== e.subsessions && e.subsessions.some((e => "premarket" === e.id || "postmarket" === e.id))
            }

            function Q(e) {
                return null !== e && void 0 !== e.subsessions && e.subsessions.filter((e => !e.private)).length > 1
            }

            function ee(e) {
                return null !== e && ("forex" === e.type || (0, d.isCFDSymbol)(e.type, e.typespecs) || pe(e))
            }

            function te(e, t) {
                let i = e && (e.pro_name || e.full_name || e.name);
                return y && t ? i = t : S && e && e.ticker && (i = e.ticker), _ && i && (i = i.toUpperCase()), i
            }

            function ie(e, t, i = "exchange") {
                return t || p ? e.name : `${e.name}, ${e[i]}`
            }

            function re(e) {
                let t = e && (X(e) || e.name) || "";
                return t.length > 40 && (t = t.substring(0, 37) + "..."), t.trim()
            }

            function ne(e) {
                const t = e ? e.exchange : "";
                return _ ? t.toUpperCase() : t
            }

            function se(e, t) {
                return null !== e ? e.full_name : t
            }

            function oe(e, t) {
                return null !== e ? e.pro_name : t
            }

            function ae(e, t) {
                return m && e ? (0, u.ensureDefined)(e.ticker) : se(e, t)
            }

            function le(e) {
                return "regular" === e || "us_regular" === e
            }

            function ue(e) {
                return "c" === (null == e ? void 0 : e.visible_plots_set)
            }

            function ce(e) {
                return null !== e && ("unit" === e.measure && null !== he(e))
            }

            function he(e) {
                var t;
                return null !== (t = null == e ? void 0 : e.value_unit_id) && void 0 !== t ? t : null
            }

            function de(e) {
                return void 0 !== e.visible_plots_set ? "ohlcv" === e.visible_plots_set : !e.has_no_volume
            }

            function me(e) {
                return null !== e && "economic" === e.type
            }

            function _e(e) {
                return me(e) && e.source ? e.source : e.exchange && 0 !== e.exchange.length ? e.exchange : void 0
            }

            function ye(e) {
                var t;
                return null !== e && "futures" === e.type && Boolean(e.has_backadjustment && (null === (t = e.typespecs) || void 0 === t ? void 0 : t.includes("continuous")))
            }

            function Se(e) {
                var t;
                return null !== e && "futures" === e.type && !Boolean(null === (t = e.typespecs) || void 0 === t ? void 0 : t.includes("continuous"))
            }

            function pe(e) {
                var t;
                return (null === (t = e.typespecs) || void 0 === t ? void 0 : t.includes("crypto")) || "crypto" === e.type || "bitcoin" === e.type
            }
        }
    }
]);
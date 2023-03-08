"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [48158], {
        130551: (e, t) => {
            t.hasProperty = t.isObject = void 0, t.isObject = function(e) {
                var t = typeof e;
                return null !== e && ("object" === t || "function" === t)
            }, t.hasProperty = function(e, t) {
                return t in e
            }
        },
        827147: (e, t, r) => {
            r.d(t, {
                default: () => o
            });
            var n = r(128177),
                i = r(854814),
                s = r(383527);
            const o = function(e) {
                return "string" == typeof e || !(0, i.default)(e) && (0, s.default)(e) && "[object String]" == (0, n.default)(e)
            }
        },
        359663: (e, t, r) => {
            r.d(t, {
                FeatureToggleWatchedValue: () => o
            });
            var n = r(125226),
                i = r(988411),
                s = r.n(i);
            class o extends(s()) {
                constructor(e, t) {
                    super(function(e, t) {
                        return (0, n.isFeatureEnabled)(e)
                    }(e)), (0, n.onFeaturesStateChanged)().subscribe(this, (t => {
                        e === t && this.setValue((0, n.isFeatureEnabled)(e))
                    }))
                }
                destroy() {
                    (0, n.onFeaturesStateChanged)().unsubscribeAll(this)
                }
            }
        },
        863109: (e, t, r) => {
            var n = r(168647),
                i = r(725977),
                s = r(272001).getLogger("Common.CollectionObserver"),
                o = n.Collection.extend({
                    initialize: function(e, t) {
                        if (this._observableCollection = t.observableCollection, this._validator = t.validator, this._syncEvents = i.isArray(t.syncEvents) ? t.syncEvents : [], this._syncEvents.push("reset"), this._syncEvents = i.uniq(this._syncEvents), this._observableCollection)
                            if (this._observableCollection instanceof n.Collection) {
                                "function" == typeof t.comparator && (this.comparator = t.comparator), this.comparator || "function" != typeof this._observableCollection.comparator || (this.comparator = this._observableCollection.comparator), this._observableCollection.on("add", this.onAdd, this), this._observableCollection.on("remove", this.remove, this);
                                for (var r = this._syncEvents.length - 1; r >= 0; r--) this._observableCollection.on(this._syncEvents[r], this.syncCollections, this);
                                e && e.length && this.add(e)
                            } else s.logError("'observableCollection' need to be Backbone.Collection");
                        else s.logError("'observableCollection' option required")
                    },
                    syncCollections: function() {
                        var e = this._validator;
                        e && this.reset(i.filter(this._observableCollection.models, e))
                    },
                    onAdd: function(e, t, r) {
                        var i = this._validator;
                        if (!i || i(e)) {
                            var s = t instanceof n.Collection ? r : t;
                            this.add(e, s)
                        }
                    },
                    destroy: function() {
                        this._observableCollection.off("add", this.onAdd, this), this._observableCollection.off("remove", this.remove, this);
                        for (var e = this._syncEvents.length - 1; e >= 0; e--) this._observableCollection.off(this._syncEvents[e], this.syncCollections, this)
                    }
                });
            e.exports = o
        },
        7628: (e, t, r) => {
            function n(e) {
                return "=" + JSON.stringify(i(e))
            }

            function i(e) {
                return Object.keys(e).sort().reduce(((t, r) => ("[object Object]" === Object.prototype.toString.call(e[r]) ? t[r] = i(e[r]) : t[r] = e[r], t)), {})
            }

            function s(e) {
                return Boolean(e.inputs)
            }

            function o(e) {
                return s(e) || Boolean(e.replay) || e.session || e.adjustment || e["currency-id"] || e["unit-id"] ? n(e) : e.symbol
            }

            function l(e) {
                return "=" === e[0]
            }

            function a(e) {
                if (!l(e)) return {
                    symbol: e
                };
                try {
                    return JSON.parse(e.slice(1))
                } catch (t) {
                    return {
                        symbol: e
                    }
                }
            }

            function c(e) {
                return "string" == typeof e ? e : c(e.symbol)
            }
            r.d(t, {
                isStudySymbol: () => s,
                encodeExtendedSymbolOrGetSimpleSymbolString: () => o,
                isEncodedExtendedSymbol: () => l,
                decodeExtendedSymbol: () => a,
                unwrapSimpleSymbol: () => c
            })
        },
        333429: (e, t, r) => {
            r.d(t, {
                FormattersSerializer: () => c
            });
            var n = r(650151),
                i = r(831471),
                s = r(738023),
                o = r(561068),
                l = r(239887);
            const a = {
                price: i.PriceFormatter,
                volume: s.VolumeFormatter,
                percentage: o.PercentageFormatter,
                quoteSessionPrice: l.QuoteSessionPriceFormatter
            };
            var c;
            ! function(e) {
                e.serialize = function(e) {
                    const t = (0, n.ensureDefined)(a[e.type]);
                    return {
                        type: e.type,
                        state: t.serialize(e)
                    }
                }, e.deserialize = function(e) {
                    return (0, n.ensureDefined)(a[e.type]).deserialize(e.state)
                }
            }(c || (c = {}))
        },
        239887: (e, t, r) => {
            r.d(t, {
                QuoteSessionPriceFormatter: () => i
            });
            var n = r(831471);
            class i {
                constructor(e) {
                    this.type = "quoteSessionPrice", this.reset(e)
                }
                state() {
                    return this._priceFormatter.state()
                }
                reset(e) {
                    this._priceFormatter = e || new n.PriceFormatter(100, 1, !1)
                }
                update(e, t) {
                    const r = null != t.pricescale || null != t.minmov || null != t.fractional || null != t.minmove2,
                        i = null != e.pricescale && null != e.minmov && null != e.fractional && null != e.minmove2;
                    r && i && (this._priceFormatter = new n.PriceFormatter(e.pricescale, e.minmov, e.fractional || !1, e.minmove2))
                }
                format(e, t, r) {
                    return this._priceFormatter.format(e, t, r)
                }
                hasForexAdditionalPrecision() {
                    return this._priceFormatter.hasForexAdditionalPrecision()
                }
                static serialize(e) {
                    return e.state()
                }
                static deserialize(e) {
                    const t = new n.PriceFormatter(e.priceScale, e.minMove, e.fractional, e.minMove2);
                    return new i(t)
                }
            }
        },
        519872: (e, t, r) => {
            var n, i, s;

            function o(e) {
                return "line" === e.type
            }

            function l(e) {
                return "shapes" === e.type
            }

            function a(e) {
                return "chars" === e.type
            }

            function c(e) {
                return "arrows" === e.type
            }

            function u(e) {
                return "data" === e.type
            }

            function d(e) {
                return "dataoffset" === e.type
            }

            function h(e) {
                return "ohlc_open" === e.type
            }

            function _(e) {
                return "ohlc_high" === e.type
            }

            function f(e) {
                return "ohlc_low" === e.type
            }

            function p(e) {
                return "ohlc_close" === e.type
            }

            function v(e) {
                return h(e) || _(e) || f(e) || p(e)
            }

            function g(e) {
                return "colorer" === e.type && "palette" in e
            }

            function m(e) {
                return "colorer" === e.type && !("palette" in e)
            }

            function y(e) {
                return "colorer" === e.type
            }

            function b(e) {
                return "bar_colorer" === e.type
            }

            function C(e) {
                return "bg_colorer" === e.type
            }

            function S(e) {
                return "text_colorer" === e.type
            }

            function A(e) {
                return "ohlc_colorer" === e.type
            }

            function w(e) {
                return "wick_colorer" === e.type
            }

            function P(e) {
                return "border_colorer" === e.type
            }

            function L(e) {
                return "up_colorer" === e.type
            }

            function E(e) {
                return "down_colorer" === e.type
            }

            function F(e) {
                return "alertcondition" === e.type
            }

            function x(e) {
                return o(e) || l(e) || a(e) || c(e)
            }

            function D(e) {
                return "Plot" !== e
            }

            function O(e) {
                return "ohlc_bars" === e.plottype
            }

            function k(e) {
                return "ohlc_candles" === e.plottype
            }

            function R(e) {
                return y(e) || b(e) || C(e) || u(e) || d(e) || A(e) || F(e) || L(e) || E(e) || P(e) || w(e) || S(e)
            }

            function B(e) {
                return y(e) || S(e) || b(e) || u(e) || d(e) || A(e) || w(e) || P(e) || L(e) || E(e) || F(e)
            }
            r.r(t), r.d(t, {
                    LineStudyPlotStyle: () => n,
                    STUDYPLOTDISPLAYTARGET: () => i,
                    isLinePlot: () => o,
                    isShapesPlot: () => l,
                    isCharsPlot: () => a,
                    isArrowsPlot: () => c,
                    isDataPlot: () => u,
                    isDataOffsetPlot: () => d,
                    isOhlcOpenPlot: () => h,
                    isOhlcHighPlot: () => _,
                    isOhlcLowPlot: () => f,
                    isOhlcClosePlot: () => p,
                    isOhlcPlot: () => v,
                    isPaletteColorerPlot: () => g,
                    isRgbaColorerPlot: () => m,
                    isColorerPlot: () => y,
                    isBarColorerPlot: () => b,
                    isBgColorerPlot: () => C,
                    isTextColorerPlot: () => S,
                    isOhlcColorerPlot: () => A,
                    isCandleWickColorerPlot: () => w,
                    isCandleBorderColorerPlot: () => P,
                    isUpColorerPlot: () => L,
                    isDownColorerPlot: () => E,
                    isAlertConditionPlot: () => F,
                    isPlotSupportDisplay: () => x,
                    isPlotTitleDefined: () => D,
                    isOhlcPlotStyleBars: () => O,
                    isOhlcPlotStyleCandles: () => k,
                    PlotSymbolSize: () => s,
                    isPlotWithTechnicalValues: () => R,
                    isNonVisualPlot: () => B
                }),
                function(e) {
                    e[e.Line = 0] = "Line", e[e.Histogram = 1] = "Histogram", e[e.Cross = 3] = "Cross", e[e.Area = 4] = "Area", e[e.Columns = 5] = "Columns", e[e.Circles = 6] = "Circles", e[e.LineWithBreaks = 7] = "LineWithBreaks", e[e.AreaWithBreaks = 8] = "AreaWithBreaks", e[e.StepLine = 9] = "StepLine", e[e.StepLineWithDiamonds = 10] = "StepLineWithDiamonds", e[e.StepLineWithBreaks = 11] = "StepLineWithBreaks"
                }(n || (n = {})),
                function(e) {
                    e[e.None = 0] = "None", e[e.Pane = 1] = "Pane", e[e.DataWindow = 2] = "DataWindow", e[e.PriceScale = 4] = "PriceScale", e[e.StatusLine = 8] = "StatusLine", e[e.All = 15] = "All"
                }(i || (i = {})),
                function(e) {
                    e.Auto = "auto", e.Tiny = "tiny", e.Small = "small", e.Normal = "normal", e.Large = "large", e.Huge = "huge"
                }(s || (s = {}))
        },
        340652: (e, t, r) => {
            function n(e = 0) {
                return e < 1e3 ? e : e / 1e3
            }

            function i(e, t) {
                if (e.length > t) {
                    const r = /[\W]+$/g,
                        n = e.substring(0, t),
                        i = n.replace(r, "");
                    return `${i.length?i:n.substring(0,t-1)}…`
                }
                return e
            }
            r.d(t, {
                ensureDurationInSeconds: () => n,
                cutString: () => i
            })
        },
        304241: (e, t, r) => {
            r.d(t, {
                alertsMaintenanceTracker: () => l
            });
            var n = r(988411),
                i = r.n(n),
                s = r(125226),
                o = r(359663);
            const l = new class {
                constructor() {
                    this._state = new(i())((0, s.isFeatureEnabled)("alerts-maintenance")), this._maintenanceFeatureState = new o.FeatureToggleWatchedValue("alerts-maintenance", this._state.value()), this._autoreloadWidgetsFeatureState = new o.FeatureToggleWatchedValue("alerts-maintenance-autoreload-widgets", !1), this._unsetMaintenanceTimeoutId = null, this._maintenanceFeatureState.subscribe((e => {
                        !e && this._autoreloadWidgetsFeatureState.value() && (this._unsetMaintenanceTimeoutId = setTimeout((() => this.sync()), function() {
                            const e = 3e4,
                                t = 18e5;
                            return Math.floor(Math.random() * (t - e) + e)
                        }()))
                    })), this._autoreloadWidgetsFeatureState.subscribe((e => {
                        e || this._clearMaintenanceUnsetTimeout()
                    }))
                }
                value() {
                    return this._state.value()
                }
                subscribe(e) {
                    this._state.subscribe(e)
                }
                unsubscribe(e) {
                    this._state.unsubscribe(e)
                }
                sync() {
                    this._clearMaintenanceUnsetTimeout(), this._state.setValue((0, s.isFeatureEnabled)("alerts-maintenance"))
                }
                _clearMaintenanceUnsetTimeout() {
                    this._unsetMaintenanceTimeoutId && (clearTimeout(this._unsetMaintenanceTimeoutId), this._unsetMaintenanceTimeoutId = null)
                }
            }
        },
        246337: (e, t, r) => {
            r.r(t), r.d(t, {
                ChartAlertsFacadeOld: () => v
            });
            var n = r(130551),
                i = r(650151),
                s = r(869403),
                o = r.n(s),
                l = r(988411),
                a = r.n(l);
            const c = new WeakMap;
            class u {
                constructor(e) {
                    this._destroyed = new(a())(!1), this._fired = new(o()), this._extraUpdated = new(o()), this.destroy = () => {
                        this._destroyed.setValue(!0), this._hovered.setValue(!1), this._selected.setValue(!1), this._alert.off("destroy", this.destroy), this._alert.off("fired", this._onFired), this._alert.off("change:id", this._onIdChanged), this._alert.off("change:isBeingEdited", this._onisBeingEditedChanged), this._alert.off("change:hovered", this._onHoveredChanged), this._alert.off("change:selected", this._onSelectedChanged),
                            this._alert.off("change:extra", this._onExtraUpdated)
                    }, this._onIdChanged = (e, t) => {
                        this._id.setValue(t)
                    }, this._onisBeingEditedChanged = (e, t) => {
                        this._isBeingEdited.setValue(t)
                    }, this._onHoveredChanged = (e, t) => {
                        this._hovered.setValue(t)
                    }, this._onSelectedChanged = (e, t) => {
                        this._selected.setValue(t)
                    }, this._onFired = () => {
                        this._fired.fire()
                    }, this._onExtraUpdated = () => {
                        this._extraUpdated.fire()
                    }, this._alert = e, this._id = new(a())(e.id), this._isBeingEdited = new(a())(e.get("isBeingEdited")), this._hovered = new(a())(e.get("hovered")), this._selected = new(a())(e.get("selected")), e.on("destroy", this.destroy), e.on("fired", this._onFired), e.on("change:id", this._onIdChanged), e.on("change:isBeingEdited", this._onisBeingEditedChanged), e.on("change:hovered", this._onHoveredChanged), e.on("change:selected", this._onSelectedChanged), e.on("change:extra", this._onExtraUpdated)
                }
                alert() {
                    return this._alert
                }
                isActive() {
                    return this._alert.get("active")
                }
                setSelected(e) {
                    this._alert.set("selected", e)
                }
                title() {
                    return this._alert.title()
                }
                name() {
                    return this._alert.get("name")
                }
                description() {
                    return this._alert.get("description")
                }
                defaultDescription() {
                    return this._alert.defaultDescription()
                }
                resetToDefaultDescription() {
                    this._alert.setDefaultDescription()
                }
                seriesState() {
                    var e;
                    const t = this._alert.get("extra");
                    return t && null !== (e = t.alertSeries()) && void 0 !== e ? e : null
                }
                setSeriesState(e) {
                    (0, i.ensureDefined)(this._alert.get("extra")).alertSeries(e)
                }
                mainSeriesState() {
                    var e;
                    const t = this._alert.get("extra");
                    return t && null !== (e = t.mainSeries()) && void 0 !== e ? e : null
                }
                setMainSeriesState(e) {
                    (0, i.ensureDefined)(this._alert.get("extra")).mainSeries(e)
                }
                lineState() {
                    var e;
                    const t = this._alert.get("extra");
                    return t && null !== (e = t.drawing()) && void 0 !== e ? e : null
                }
                setLineState(e) {
                    (0, i.ensureDefined)(this._alert.get("extra")).drawing(e)
                }
                setSymbol(e) {
                    this._alert.set("symbolInternal", e)
                }
                resolution() {
                    return this._alert.get("resolution")
                }
                setResolution(e) {
                    this._alert.set("resolution", e)
                }
                id() {
                    return this._id.readonly()
                }
                isBeingEdited() {
                    return this._isBeingEdited.readonly()
                }
                hovered() {
                    return this._hovered.readonly()
                }
                selected() {
                    return this._selected.readonly()
                }
                destroyed() {
                    return this._destroyed.readonly()
                }
                condition() {
                    const e = this._alert.get("extra");
                    if (void 0 === e) return null;
                    if (e.conditionData().isChannel) {
                        return {
                            type: "channel",
                            ...e.price()
                        }
                    }
                    return {
                        type: "price",
                        price: e.price()
                    }
                }
                setCondition(e) {
                    const t = (0, i.ensureDefined)(this._alert.get("extra"));
                    "channel" === e.type ? t.price({
                        upper: e.upper,
                        lower: e.lower
                    }) : t.price(e.price)
                }
                saveState() {
                    this._alert.saveState()
                }
                restoreState() {
                    this._alert.restoreState()
                }
                isNew() {
                    return this._alert.isNew()
                }
                crossInterval() {
                    return this._alert.get("crossInterval")
                }
                isPrice() {
                    return this._alert.isPrice()
                }
                isOHLC() {
                    return this._alert.isOHLC()
                }
                isRangeBasedStyle() {
                    return this._alert.isRangeBasedStyle()
                }
                fired() {
                    return this._fired
                }
                extraUpdated() {
                    return this._extraUpdated
                }
                static get(e) {
                    let t = c.get(e);
                    return void 0 === t && (t = new u(e), c.set(e, t)), t
                }
            }
            var d = r(863109),
                h = r.n(d),
                _ = r(424122);
            class f {
                constructor(e, t, r) {
                    this._collectionReset = new(o()), this._alertAdded = new(o()), this._alertRemoved = new(o()),
                        this._alertChanged = new(o()), this._onAlertAdded = e => {
                            this._alertAdded.fire(u.get(e))
                        }, this._onAlertRemoved = e => {
                            this._alertRemoved.fire(u.get(e))
                        }, this._onAlertChanged = e => {
                            this._alertChanged.fire(u.get(e))
                        }, this._onCollectionReset = () => {
                            this._collectionReset.fire()
                        }, this._alertsList = new(h())([], {
                            observableCollection: r,
                            syncEvents: ["change:active", "change:crossInterval", "change:resolution", "change:symbol"],
                            validator: r => (r.get("active") || r.isNew()) && (0, _.isAlertResolutionEqual)(r, e()) && r.get("symbol") === t()
                        }), this._alertsList.on("add", this._onAlertAdded), this._alertsList.on("remove", this._onAlertRemoved), this._alertsList.on("change:alertSeries", this._onAlertChanged), this._alertsList.on("reset", this._onCollectionReset)
                }
                destroy() {
                    this._alertsList.off("add", this._onAlertAdded), this._alertsList.off("remove", this._onAlertRemoved), this._alertsList.off("change:alertSeries", this._onAlertChanged), this._alertsList.off("reset", this._onCollectionReset), this._alertsList.destroy()
                }
                alerts() {
                    return this._alertsList.models.map((e => u.get(e)))
                }
                reset() {
                    this._alertsList.reset()
                }
                sync() {
                    this._alertsList.syncCollections()
                }
                collectionReset() {
                    return this._collectionReset
                }
                alertAdded() {
                    return this._alertAdded
                }
                alertRemoved() {
                    return this._alertRemoved
                }
                alertChanged() {
                    return this._alertChanged
                }
            }
            var p = r(821350);
            class v {
                constructor(e) {
                    this._dispatcher = e
                }
                createCollection(e, t) {
                    return new f(e, t, this._dispatcher.alerts)
                }
                ensureFullAlertsList(e) {
                    return this._dispatcher.ensureFullAlertsList(e)
                }
                getAlert(e, t) {
                    let r;
                    if (void 0 !== t) {
                        const e = t.success;
                        r = { ...t,
                            success: void 0 === e ? void 0 : t => e(u.get(t))
                        }
                    }
                    this._dispatcher.requestAlert(e, r)
                }
                getAlertSync(e) {
                    const t = this._dispatcher.getAlertSync(e);
                    return null === t ? null : u.get(t)
                }
                deleteAlert(e, t) {
                    const r = (0, n.isObject)(e) ? e.alert() : e;
                    this._dispatcher.deleteAlert(r, t)
                }
                stopAlert(e, t) {
                    const r = (0, n.isObject)(e) ? e.alert() : e;
                    this._dispatcher.stopAlert(r, t)
                }
                cloneAlert(e, t) {
                    const r = e.alert();
                    let n;
                    if (void 0 !== t) {
                        const e = t.success;
                        n = { ...t,
                            success: void 0 === e ? void 0 : t => {
                                e(u.get(t))
                            }
                        }
                    }
                    this._dispatcher.cloneAlert(r, n)
                }
                stopAlerts(e) {
                    this._dispatcher.stopAlerts(e)
                }
                restartAlerts(e) {
                    this._dispatcher.restartAlerts(e)
                }
                cloneAlerts(e) {
                    this._dispatcher.cloneAlerts(e)
                }
                deleteAlerts(e) {
                    this._dispatcher.deleteAlerts(e)
                }
                restartAllAlerts(e) {
                    this._dispatcher.restartAllAlerts(e)
                }
                stopAllAlerts(e) {
                    this._dispatcher.stopAllAlerts(e)
                }
                deleteAllAlerts(e) {
                    this._dispatcher.deleteAllAlerts(e)
                }
                deleteEvents(e) {
                    this._dispatcher.deleteEvents(e)
                }
                restartAlert(e, t) {
                    let r;
                    if (void 0 !== t) {
                        const e = t.success;
                        r = { ...t,
                            success: void 0 === e ? void 0 : t => e(u.get(t))
                        }
                    }
                    const i = (0, n.isObject)(e) ? e.alert() : e;
                    this._dispatcher.restartAlert(i, r)
                }
                openEditDialog(e, t) {
                    const r = (0, n.isObject)(e) ? e.alert() : e;
                    this._dispatcher.openEditDialog(r, t)
                }
                invokeAlertEditor(e) {
                    (0, p.invokeAlertEditor)({ ...e,
                        alert: void 0 === e.alert ? void 0 : e.alert.alert()
                    })
                }
                setChartWidgetCollection(e) {
                    this._dispatcher.setChartWidgetCollection(e)
                }
                removeAlertFromAllChartsSilently(e, t) {
                    this._dispatcher.removeAlertFromAllChartsSilently(e, t)
                }
            }
        },
        823757: (e, t, r) => {
            var n;
            r.d(t, {
                    Constants: () => n
                }),
                function(e) {
                    e.DrawingIconColor = "rgba( 170, 170, 170, 1)", e[e.NameLengthLimit = 300] = "NameLengthLimit"
                }(n || (n = {}))
        },
        196362: (e, t, r) => {
            r.d(t, {
                bulkStopLabel: () => s,
                bulkRestartLabel: () => o,
                bulkRemoveLabel: () => l,
                bulkRemoveInactiveLabel: () => a,
                bulkStopConfirmation: () => c,
                bulkRestartConfirmation: () => u,
                bulkRemoveConfirmation: () => d,
                bulkRemoveInactiveConfirmation: () => h,
                selectedRemoveConfirmation: () => _
            });
            var n = r(777754),
                i = r(340652);
            const s = e => e ? n.t(null, void 0, r(293786)) : n.t(null, void 0, r(507991)),
                o = e => e ? n.t(null, void 0, r(517520)) : n.t(null, void 0, r(377152)),
                l = e => e ? n.t(null, void 0, r(898098)) : n.t(null, void 0, r(168710)),
                a = () => n.t(null, void 0, r(508702)),
                c = e => e ? {
                    title: n.t(null, void 0, r(742692)),
                    text: n.t(null, void 0, r(528183))
                } : {
                    title: n.t(null, void 0, r(73016)),
                    text: n.t(null, void 0, r(343860))
                },
                u = e => e ? {
                    title: n.t(null, void 0, r(733946)),
                    text: n.t(null, void 0, r(548111))
                } : {
                    title: n.t(null, void 0, r(639901)),
                    text: n.t(null, void 0, r(530147))
                },
                d = e => e ? {
                    title: n.t(null, void 0, r(830930)),
                    text: n.t(null, void 0, r(764123))
                } : {
                    title: n.t(null, void 0, r(879698)),
                    text: n.t(null, void 0, r(597411))
                },
                h = () => ({
                    title: n.t(null, void 0, r(447537)),
                    text: n.t(null, void 0, r(669387))
                }),
                _ = e => {
                    if (1 !== e.length) return {
                        title: n.t(null, void 0, r(558519)),
                        text: n.t(null, void 0, r(260920))
                    };
                    const t = e[0],
                        s = t.get("name") || t.get("description") || t.title();
                    return {
                        title: n.t(null, void 0, r(588511)),
                        text: n.t(null, void 0, r(974834)).format({
                            alert: (0, i.cutString)(s, 100)
                        })
                    }
                }
        },
        527538: (e, t, r) => {
            r.d(t, {
                PredefinedAction: () => n,
                ContentAlign: () => i,
                ActionButtonsLayout: () => s
            });
            var n, i, s;
            r(919346);
            ! function(e) {
                e.Close = "close", e.OpenGopro = "openGopro"
            }(n || (n = {})),
            function(e) {
                e.Center = "center", e.Left = "left"
            }(i || (i = {})),
            function(e) {
                e.Row = "row", e.Column = "column"
            }(s || (s = {}))
        },
        844106: (e, t, r) => {
            r.d(t, {
                showGoProAlertsOnSecondsDialog: () => i
            });
            var n = r(508846);

            function i() {
                (0, n.createGoProDialog)({
                    feature: "alertsOnSeconds"
                })
            }
        },
        897649: (e, t, r) => {
            r.r(t), r.d(t, {
                firstLoginDataUrl: () => i,
                accumulateErrors: () => s,
                fetchPost: () => o,
                firstLoginData: () => l,
                resendLink: () => a,
                signinUrl: () => c,
                signin: () => d,
                signupUrl: () => h,
                signup: () => _,
                ApiError: () => f,
                AggregateError: () => p,
                recoverPasswordUrl: () => v,
                recoverPassword: () => g,
                resetPassword: () => m
            });
            var n = r(890740);
            const i = "/accounts/first_login_data/";

            function s(e, t) {
                return Object.entries(e).map((e => new f(e[1].join("\n"), t, e[0])))
            }

            function o(e, t) {
                return (0, n.fetch)(e, {
                    method: "POST",
                    credentials: "include",
                    mode: "same-origin",
                    body: t
                })
            }

            function l(e) {
                return o(i, e).then((e => e.ok ? e.json() : e.json().then((t => {
                    throw new p(s(t.errors, e.status))
                }))))
            }

            function a() {
                return o("/api/v1/users/anon/change-email/resend/").then((e => e.ok ? e.json() : e.json().then((e => {
                    throw Error(e.error)
                }))))
            }
            const c = "/accounts/signin/";

            function u(e) {
                return e.json().then((t => {
                    if ("error" in t && "" !== t.error || "code" in t || !e.ok) throw new f(t.error || t.detail, e.status, t.code, t.two_factor_types);
                    return t
                }))
            }

            function d(e) {
                return o(c, e).then(u)
            }
            const h = "/accounts/signup/";

            function _(e) {
                return o(h, e).then((e => e.json().then((t => {
                    if ("errors" in t && "" !== t.errors) throw new p(s(t.errors, e.status))
                }))))
            }
            class f extends Error {
                constructor(e, t, r, n) {
                    super(e), this.type = r, this.status = t,
                        this.secondFactorTypes = n
                }
            }
            class p extends Error {
                constructor(e) {
                    super(e.map((e => e.message)).join("\n")), this.errors = [], this.errors = e
                }
            }
            const v = "/api/v1/recover_password/search/";

            function g(e) {
                return o(v, e).then(u)
            }

            function m(e) {
                return o("/accounts/reset_password/", e).then((e => 400 === e.status ? e.json().then((t => {
                    if ("errors" in t) throw new p(s(t.errors, e.status));
                    throw new f(t.detail, e.status, t.code)
                })) : u(e)))
            }
        }
    }
]);
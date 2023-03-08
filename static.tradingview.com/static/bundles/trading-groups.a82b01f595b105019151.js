(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [51652], {
        418649: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                TradedSourcesManager: () => re,
                canCreateOrUpdateSourceByContext: () => ie
            });
            var r = i(822914),
                s = i(650151),
                o = i(758337),
                a = i(178773),
                n = i(894042),
                d = i(272001),
                l = i(72822),
                c = i(136916),
                u = i(276889),
                h = i(113258),
                p = i(39295),
                m = i(335144),
                _ = i(819593),
                y = i(988411),
                b = i.n(y),
                v = i(777754),
                f = i(62802),
                g = i(962127);
            const k = v.t(null, void 0, i(25837));
            let P = !1,
                S = null;

            function T() {
                f.setValue(g.settingsKeys.MOVE_TRADED_SOURCE_WITH_SHIFT, !0, {
                    forceFlush: !0
                })
            }
            var O, C = i(214644);
            ! function(e) {
                e[e.Threshold = 4] = "Threshold"
            }(O || (O = {}));
            class I {
                constructor(e, t, i) {
                    this._computedBorderPoint = new Map, this._isNoOverlapMode = !1, this._isItemsOverlap = !1, this._invalidated = new(b()), this._sortedItemRenderers = null, this._itemsByPosition = null, e.subscribe((e => {
                        e.filter((e => !(0, C.isTradedGroupCustomSource)(e))).length > 0 && this.setNoOverlapMode(!1)
                    })), t.subscribe(this, (() => {
                        this.setNoOverlapMode(!1)
                    })), this._isPriceInvertedWV = i, this._isPriceInvertedWV.subscribe((() => {
                        this.invalidateCache()
                    }))
                }
                registerRenderer(e) {
                    this._computedBorderPoint.set(e, null)
                }
                removeRenderer(e) {
                    e && this._computedBorderPoint.delete(e), this.invalidateCache()
                }
                invalidateCache() {
                    this._sortedItemRenderers = null, this._itemsByPosition = null, this._invalidated.setValue(!0)
                }
                isInvalidatedWV() {
                    return this._invalidated.readonly()
                }
                isItemsOverlap() {
                    return this._isItemsOverlap
                }
                setNoOverlapMode(e) {
                    this._isNoOverlapMode = e, this.invalidateCache()
                }
                isNoOverlapMode() {
                    return this._isNoOverlapMode
                }
                getBorderPoint(e) {
                    const t = this._computedBorderPoint.get(e);
                    return t || null
                }
                alignItems(e) {
                    if (this._invalidated.value()) {
                        if (this._alignItemsHorizontally(e), this._checkIfItemsOverlap(e), this._isNoOverlapMode) {
                            if (!this._isItemsOverlap) return void this.setNoOverlapMode(!1);
                            this._alignItemsVertically(e)
                        }
                        this._invalidated.setValue(!1)
                    }
                }
                _checkIfItemsOverlap(e) {
                    const t = this._getSortedRenderers(e);
                    let i = !1;
                    for (let r = 1; r < t.length; r++) {
                        const s = t[r],
                            o = t[r - 1];
                        if (s.rect(e).top - o.rect(e).bottom + O.Threshold <= 0) {
                            i = !0;
                            break
                        }
                    }
                    this._isItemsOverlap = i
                }
                _alignItemsVertically(e) {
                    const t = this._getSortedRenderers(e);
                    for (let i = 1; i < t.length; i++) {
                        const r = t[i],
                            s = t[i - 1];
                        r.rectWithOffsets(e).top - s.rectWithOffsets(e).bottom + O.Threshold <= 0 && (s.clearCache(), r.clearCache(), r.setAlignedTopCoordinate(s.rectWithOffsets(e).bottom))
                    }
                }
                _alignItemsHorizontally(e) {
                    const t = this._computeRightmostAndLeftmostBorder(e);
                    if (!t) return;
                    const {
                        rightmostBorder: i,
                        leftmostBorder: r
                    } = t;
                    for (const e of this._computedBorderPoint.keys()) this._computedBorderPoint.set(e, {
                        rightmostBorder: i,
                        leftmostBorder: r
                    })
                }
                _computeRightmostAndLeftmostBorder(e) {
                    const t = this._getItemRenderers().map((t => t.rect(e)));
                    let i = t[0].right,
                        r = t[0].left;
                    for (const e of t) e.right > i && (i = e.right), e.left < r && (r = e.left);
                    return {
                        rightmostBorder: i,
                        leftmostBorder: r
                    }
                }
                _getSortedRenderers(e) {
                    if (null !== this._sortedItemRenderers) return this._sortedItemRenderers;
                    const t = this._isPriceInvertedWV.value() ? -1 : 1;
                    return this._sortedItemRenderers = this._getItemsByPosition(e).inFieldOfView.sort(((e, i) => t * (i.data().sortingIndex - e.data().sortingIndex))), this._sortedItemRenderers
                }
                _getItemsByPosition(e) {
                    return null !== this._itemsByPosition || (this._itemsByPosition = this._getItemRenderers().reduce(((t, i) => {
                        const r = i.rect(e);
                        return r.top > e.physicalHeight ? t.overflownBottom.push(i) : r.bottom < 0 ? t.overflownTop.push(i) : t.inFieldOfView.push(i), t
                    }), {
                        inFieldOfView: [],
                        overflownTop: [],
                        overflownBottom: []
                    })), this._itemsByPosition
                }
                _getItemRenderers() {
                    return [...this._computedBorderPoint.keys()].reduce(((e, t) => [...e, ...t.itemRenderers()]), []).filter((e => e.data().visible))
                }
            }
            var D = i(691520),
                w = i(482494),
                B = i(831471),
                G = i(869403),
                V = i.n(G);
            const M = (0, d.getLogger)("Trading.Source.SymbolDataProvider");
            class N {
                constructor(e, t, i, r, s) {
                    this._symbol = null, this._isStarted = !1, this._isActualSymbol = !1, this._symbolData = null, this._last = null, this._currencies = {}, this._pipValueType = null, this._pipValuesSpawn = null, this._onUpdate = new(V()), this._mainSeries = e, this._realtimeProvider = t, this._symbolData = {
                        minTick: 1 / this._mainSeries.base(),
                        pipSize: 1,
                        lotSize: 1,
                        priceMagnifier: 1,
                        quantityFormatter: new w.QuantityFormatter,
                        priceFormatter: new B.PriceFormatter
                    }, this._currencyGetters = {
                        1: i,
                        0: r
                    }, this._pipValueType$ = s, M.logNormal(`[Symbol_${this._symbol}] Init with default values: minTick ${this._symbolData.minTick}, pipSize ${this._symbolData.pipSize}, pipValue: ${JSON.stringify(this.pipValue())}, pipValueType ${this._pipValueType}`), this._updateLastHandler = this._updateLast.bind(this), this._mainSeries.dataEvents().symbolResolved().subscribe(this, (() => this.start(this._symbol))), this._mainSeries.dataEvents().symbolError().subscribe(this, (() => this.start(this._symbol)))
                }
                start(e) {
                    if (null !== this._symbol && null === e && this._stop(), this._symbol = e, null === this._symbol) return this._isActualSymbol = !1, void M.logNormal("Current symbol null");
                    if (null === this._mainSeries.symbolInfo()) this._isActualSymbol = !1;
                    else {
                        const e = this._mainSeries.isConvertedToOtherCurrency() || this._mainSeries.isConvertedToOtherUnit();
                        this._isActualSymbol = !e && this._mainSeries.symbolSameAsCurrent(this._symbol)
                    }
                    this._isActualSymbol && !this._isStarted && (M.logNormal(`Start symbol ${this._symbol}`), this._isStarted = !0, this._realtimeProvider.subscribeRealtime(this._symbol, this._updateLastHandler), this._realtimeProvider.onStatusChanged.subscribe(this, this._updateSymbolData), this._updateSymbolData(), this._updateCurrencies(), this._createPipsHelpersSpawns())
                }
                destroy() {
                    this._stop(), this._mainSeries.dataEvents().symbolResolved().unsubscribeAll(this), this._mainSeries.dataEvents().symbolError().unsubscribeAll(this)
                }
                symbol() {
                    return this._symbol
                }
                isActualSymbol() {
                    return this._isActualSymbol
                }
                onUpdate() {
                    return this._onUpdate
                }
                positionCurrency() {
                    return this._currencies[1]
                }
                orderCurrency() {
                    return this._currencies[0]
                }
                async qtyInfo() {
                    return null === this._symbol ? null : (await this._realtimeProvider.symbolInfo(this._symbol)).qty
                }
                lastData() {
                    return this._last
                }
                symbolData() {
                    return this._symbolData
                }
                pipValue() {
                    var e, t;
                    return null !== (t = null === (e = this._pipValuesSpawn) || void 0 === e ? void 0 : e.value()) && void 0 !== t ? t : null
                }
                pipValueType() {
                    return this._pipValueType
                }
                getMinTick(e) {
                    const t = (0, s.ensureNotNull)(this._symbolData);
                    return (0, D.getMinTick)({
                        minTick: t.minTick,
                        price: e,
                        variableMinTickData: t.variableMinTickData
                    })
                }
                _stop() {
                    var e, t;
                    M.logNormal(`Stop symbol ${this._symbol}`), this._realtimeProvider.unsubscribeRealtime((0, s.ensureNotNull)(this._symbol), this._updateLastHandler), this._realtimeProvider.onStatusChanged.unsubscribeAll(this), null === (e = this._pipValuesSpawn) || void 0 === e || e.destroy(), this._pipValuesSpawn = null, null === (t = this._pipValueTypeSubscription) || void 0 === t || t.unsubscribe(), this._pipValueTypeSubscription = void 0, this._symbolData = null, this._last = null, this._currencies = {}, this._symbol = null, this._isActualSymbol = !1, this._isStarted = !1
                }
                async _updateSymbolData() {
                    var e;
                    if (!this._isValidSymbol()) return void M.logNormal(`Can't update symbol data because symbol '${this._symbol}' not valid (isActualSymbol ${this._isActualSymbol})`);
                    const t = (0, s.ensureNotNull)(this._symbol),
                        [i, r, o] = await Promise.all([this._realtimeProvider.quantityFormatter(t), this._realtimeProvider.formatter(t), this._realtimeProvider.symbolInfo(t)]);
                    this._symbolData = {
                        quantityFormatter: i,
                        priceFormatter: r,
                        minTick: o.minTick,
                        pipSize: o.pipSize,
                        variableMinTickData: o.variableMinTick ? (0, D.makeVariableMinTickData)(o.minTick, o.variableMinTick) : void 0,
                        lotSize: o.lotSize,
                        priceMagnifier: null !== (e = o.priceMagnifier) && void 0 !== e ? e : 1
                    }, M.logNormal(`[Symbol_${this._symbol}] Update symbol data values: minTick ${this._symbolData.minTick}, pipSize ${this._symbolData.pipSize}, pipValue: ${JSON.stringify(this.pipValue())}, pipValueType ${this._pipValueType}`), this._onUpdate.fire()
                }
                _updateLast(e, t) {
                    var i, r, s, o, a, n;
                    ((null === (i = this._last) || void 0 === i ? void 0 : i.ask) !== t.ask || (null === (r = this._last) || void 0 === r ? void 0 : r.bid) !== t.bid || (null === (s = this._last) || void 0 === s ? void 0 : s.trade) !== t.trade) && this._isValidSymbol() && (this._last = {
                        trade: null !== (o = t.trade) && void 0 !== o ? o : NaN,
                        ask: null !== (a = t.ask) && void 0 !== a ? a : NaN,
                        bid: null !== (n = t.bid) && void 0 !== n ? n : NaN
                    }, this._onUpdate.fire())
                }
                _updateCurrencies() {
                    this._updateCurrency(1), this._updateCurrency(0)
                }
                async _updateCurrency(e) {
                    void 0 === this._currencies[e] && this._isValidSymbol() && (this._currencies[e] = "", this._currencies[e] = await this._currencyGetters[e]((0, s.ensureNotNull)(this._symbol)), this._onUpdate.fire())
                }
                _createPipsHelpersSpawns() {
                    if (!this._isValidSymbol()) return;
                    const e = null === this._pipValuesSpawn;
                    if (e) {
                        const e = (0, s.ensureNotNull)(this._realtimeProvider.activeBroker());
                        this._pipValuesSpawn = function(e, t, i, r) {
                            const s = e => ({
                                    sellPipValue: e,
                                    buyPipValue: e
                                }),
                                o = new(b())(s(1));
                            let a = !1;
                            (async () => {
                                if (!a) {
                                    const i = await t(e);
                                    o.setValue(s(i.pipValue))
                                }
                            })();
                            const n = (e, t) => {
                                a = !0, o.setValue(t)
                            };
                            return i(e, n), o.readonly().spawn((() => r(e, n)))
                        }((0, s.ensureNotNull)(this._symbol), this._realtimeProvider.symbolInfo.bind(this._realtimeProvider), e.subscribePipValue.bind(e), e.unsubscribePipValue.bind(e)), this._pipValuesSpawn.subscribe((e => {
                            M.logNormal(`[Symbol_${this._symbol}] Update pipValues ${JSON.stringify(this.pipValue())}`), this._onUpdate.fire()
                        }))
                    }
                    const t = void 0 === this._pipValueTypeSubscription;
                    t && (this._pipValueTypeSubscription = this._pipValueType$.subscribe((e => this._updatePipValueType(e)))), (e || t) && this._onUpdate.fire()
                }
                _updatePipValueType(e) {
                    this._pipValueType = e, M.logNormal(`[Symbol_${this._symbol}] Update pipValueType ${this._pipValueType}`), this._onUpdate.fire()
                }
                _isValidSymbol() {
                    return Boolean(this._symbol && this._isActualSymbol)
                }
            }
            const R = function() {
                    if (f.getBool(g.settingsKeys.MOVE_TRADED_SOURCE_WITH_SHIFT) || P || window.matchMedia("screen and (max-width: 430px)").matches) return;
                    const e = document.getElementsByClassName("chart-container")[0].parentElement;
                    e && (P = !0, Promise.all([i.e(81910), i.e(48348), i.e(75514), i.e(26166)]).then(i.bind(i, 410837)).then((t => {
                        S = new t.ChartEventHintRenderer(e), S.show(k, T)
                    })))
                },
                L = function() {
                    P && null !== S && (S.destroy(), T())
                };

            function A(e, t, i, r, o) {
                const a = function(e) {
                        const t = e.properties().childs().tradingProperties.childs(),
                            i = (0, n.createPrimitivePropertyFromGetterAndSubscription)(e.isInReplay.bind(e), e.onInReplayStateChanged()),
                            r = (0, n.combineProperty)(((e, t) => t && !e), i, t.showOrders),
                            s = (0, n.combineProperty)(((e, t) => t && !e), i, t.showPositions);
                        return {
                            lineProperties: {
                                width: t.lineWidth,
                                style: t.lineStyle,
                                extend: t.extendLeft
                            },
                            horizontalAlignment: t.horizontalAlignment,
                            showOrders: r,
                            showPositions: s,
                            showReverse: t.showReverse,
                            positionPL: t.positionPL.childs(),
                            bracketsPL: t.bracketsPL.childs()
                        }
                    }(t),
                    d = function(e, t) {
                        if (!e.has(t)) {
                            const i = (0, n.createWVFromGetterAndSubscription)((() => t.selection().allSources()), t.onSelectedSourceChanged()),
                                r = () => t.mainSeries().properties().childs().priceAxisProperties.childs().isInverted;
                            let s = r();
                            const o = new(b())(s.value()),
                                a = e => {
                                    o.setValue(e.value())
                                };
                            s.subscribe(null, a), t.mainSeries().priceScaleAboutToBeChanged().subscribe(null, (() => {
                                s.unsubscribe(null, a)
                            })), t.mainSeries().priceScaleChanged().subscribe(null, (() => {
                                s = r(), s.subscribe(null, a)
                            })), e.set(t, new I(i, t.mainSeries().dataEvents().symbolResolved(), o.readonly()))
                        }
                        return (0, s.ensureDefined)(e.get(t))
                    }(r, t),
                    {
                        realtimeProvider: l,
                        qtySuggester: c,
                        pipValueType$: u,
                        positionCurrencyGetter: h,
                        orderCurrencyGetter: p
                    } = i,
                    m = new N(t.mainSeries(), l, h, p, u),
                    y = void 0 !== window.widgetbar ? window.widgetbar.visible() : new(b())(!1);
                return o(a, (() => e.activeChartWidget.value().exitTrackingMode()), d, m, c, (0, _.combine)((e => !e), y))
            }
            var W = i(703819),
                E = i(791473),
                F = i(86441);
            const x = document.createElement("div");
            async function $(e, t, r, s, o, a, n) {
                const [d, l] = await Promise.all([Promise.all([i.e(7624), i.e(12275), i.e(33335), i.e(83772), i.e(33287), i.e(28385), i.e(43768), i.e(6086), i.e(42353), i.e(14108), i.e(93809)]).then(i.bind(i, 290567)), r()]);
                if (null === l) return void d.render(!1, x);
                const c = { ...l,
                    withInput: !0,
                    valueGetter: s,
                    position: function(e, i, r) {
                        return new F.Point(t.x - e, t.y)
                    },
                    targetEl: null,
                    onClickOutside: function(e) {
                        if (e) {
                            const t = e.target.getBoundingClientRect() || {
                                left: 0,
                                top: 0
                            };
                            a(new F.Point(e.clientX - t.left, e.clientY - t.top))
                        }
                    },
                    onClose: () => {},
                    onKeyboardClose: function() {
                        n()
                    },
                    onValueChange: o
                };
                e ? d.render(!0, x, c) : d.render(!1, x)
            }
            var U = i(209402),
                H = i(817728),
                j = i(249110),
                q = i(506787),
                z = i(313178),
                Q = i(791402);
            class J extends C.TradedGroupBase {
                constructor(e, t, i, r, s, o, a, n, d, l, c, h, p, m) {
                    super(e, t, i, r, s, n, d, l, c), this._supportedOrderTypes = [], this._dataUpdated = new(V()), this._confirmWidget = null, this._confirmWidgetShown = !1, this.onQtyModify = async e => {
                        const t = this.mainItem().data();
                        t.qty = e;
                        const i = this._makePreOrderData(t);
                        this._callbacks.trackEvent("Chart Place Order", "Change quantity"), await this._modifyPlaceOrder(i), this.redraw()
                    }, this._modifyPlaceOrder = n.modifyOrder, this._cancelPlaceOrder = n.cancelOrder, this._sendOrder = n.sendOrder, this._openOrderTicket = n.openOrderTicket, this._supportedOrderTypes = h, this._setData(this._rawDataSpawn.value(), !1), this._rawDataSpawn.subscribe((() => this._dataUpdated.fire())), this._isActiveSource = p, this._isActiveSource.subscribe((() => this._updateConfirmButtonDisplay())), this._isConfirmButtonOnDomWidgetWV = m, this._isConfirmButtonOnDomWidgetWV.subscribe((() => this._updateConfirmButtonDisplay()), {
                        callWithLast: !0
                    }), this._statusWV = a, this._disabled = (0, _.combine)((e => e === u.PlaceOrEditContextStatus.Loading), this._statusWV), this._disabled.subscribe((() => this.redraw())), this._errorsWV = o, this._errors = (0, _.combine)((e => e), this._errorsWV), this._errors.subscribe((() => this.redraw()))
                }
                destroy() {
                    this._hideConfirmWidgetIfNeeded(), this._isActiveSource.destroy(), this._isConfirmButtonOnDomWidgetWV.destroy(), this._statusWV.destroy(), this._disabled.destroy(), this._errorsWV.destroy(), this._errors.destroy(), super.destroy()
                }
                isPlaced() {
                    return !1
                }
                disabled() {
                    return this._disabled.value()
                }
                hasError() {
                    return Object.keys(this._errors.value()).length > 0
                }
                isConfirmButtonOnDomWidget() {
                    return this._isConfirmButtonOnDomWidgetWV.value()
                }
                mainItem() {
                    return this.items().main
                }
                items(e = !1, t) {
                    return super.items(e, t)
                }
                async setMainOrderType(e) {
                    const t = this.mainItem().data();
                    t.type = e;
                    const i = this._makePreOrderData(t),
                        r = (0, W.orderTypeToText)({
                            orderType: e,
                            uppercase: !1,
                            shorten: !1
                        });
                    this._callbacks.trackEvent("Chart Place Order", "Change order type", r), await this._modifyPlaceOrder(i), this.redraw()
                }
                onClose(e) {
                    const {
                        origin: t = "Chart Place Order",
                        event: i = "Cancel order",
                        label: r = ""
                    } = e;
                    this._callbacks.trackEvent(t, i, r), this._cancelPlaceOrder()
                }
                onModify(e) {
                    const {
                        origin: t = "Chart Place Order",
                        event: i = "Modify order",
                        label: r = ""
                    } = e;
                    this._callbacks.trackEvent(t, i, r), this._onOpenOrderTicket()
                }
                onMove(e, t) {
                    super.onMove(e, t, !0), this.modifyAllItems(e)
                }
                async onFinishMove(e, t) {
                    this.setIsBlocked(!1);
                    const {
                        origin: i = "Chart Place Order",
                        event: r = "Move Order",
                        label: s = ""
                    } = t;
                    return t = (0, j.mergeGaParams)({
                        origin: i,
                        event: r,
                        label: s
                    }, {
                        label: this._hadBeenModifiedAllItems ? "group" : "single"
                    }), await this.modifyAllItems(e, t), this.items(!0).forEach((e => {
                        e.setInEdit(!1)
                    })), this._hadBeenModifiedAllItems = !1, this.syncData(), this.redraw(), !0
                }
                async onFinishMoveProjectionBracket(e, t) {
                    return this.onFinishMove(e, t)
                }
                async onConfirm(e, t) {
                    return !this.disabled() && !this.hasError() && this._sendOrder()
                }
                async modifyAllItems(e, t) {
                    if (void 0 !== t) {
                        const {
                            origin: e = "Chart Place Order",
                            event: i = "Modify order",
                            label: r = ""
                        } = t;
                        this._callbacks.trackEvent(e, i, r)
                    }
                    const i = this._makePreOrderData(this.mainItem().data());
                    return await this._modifyPlaceOrder(i), !0
                }
                isActiveSource() {
                    return this._isActiveSource.value()
                }
                _createMainItem(e) {
                    const t = (0, s.ensureDefined)(e.main);
                    if ("PreOrder" !== t.dataType) throw new Error(`Unexpected data type for main item, it should be pre-order, not ${t.dataType}`);
                    const i = (0, H.createItem)(H.TradedGroupItemType.PreOrder, t, this, this._model, {
                        itemExternalServices: {
                            symbolDataProvider: this._symbolDataProvider,
                            qtySuggester: this._qtySuggester,
                            tradedGroupRenderersController: this._tradedGroupRenderersController
                        },
                        visibilityGetters: {
                            order: this._orderVisibilityGetter.bind(this),
                            position: this._positionVisibilityGetter.bind(this)
                        },
                        sourceCallbacks: this._callbacks,
                        menuCallbacks: {
                            onToggleTypeMenuHandler: this._getToggleOrderTypeMenuHandler(),
                            closeDropdownMenuHandler: E.closeDropdownMenu
                        },
                        qtyModifyCallbacks: {
                            onToggleQtyCalcHandler: $,
                            onQtyApplyHandler: e => this.onQtyModify(e),
                            qtyInfoGetter: () => this._symbolDataProvider.qtyInfo()
                        }
                    });
                    return i.setSupportOrderType(this._supportedOrderTypes), i
                }
                _updateMainItem(e) {
                    const t = this.items().main;
                    if (!(0, q.isPreOrderItemRawData)(e) || !(0, U.isPreOrderItem)(t)) return;
                    const {
                        dataType: i,
                        ...r
                    } = e;
                    t.setData(r)
                }
                _createStopLimitItem(e, t) {
                    let i;
                    const r = (0, s.ensureDefined)(e.main);
                    if ("PreOrder" !== r.dataType) throw new Error(`Unexpected data type for main item, it should be pre-order, not ${r.dataType}`);
                    if (4 === t.type()) {
                        const e = this._dataForStopLimitOrder(r);
                        i = (0, H.createItem)(H.TradedGroupItemType.LimitPartStopLimitOrder, e, this, this._model, {
                            itemExternalServices: {
                                symbolDataProvider: this._symbolDataProvider,
                                qtySuggester: this._qtySuggester,
                                tradedGroupRenderersController: this._tradedGroupRenderersController
                            },
                            visibilityGetters: {
                                order: this._orderVisibilityGetter.bind(this),
                                position: this._positionVisibilityGetter.bind(this)
                            },
                            sourceCallbacks: this._callbacks,
                            qtyModifyCallbacks: {
                                onToggleQtyCalcHandler: $,
                                onQtyApplyHandler: e => this.onQtyModify(e),
                                qtyInfoGetter: () => this._symbolDataProvider.qtyInfo()
                            }
                        })
                    }
                    return i
                }
                _dataForStopLimitOrder(e) {
                    const {
                        seenPrice: t,
                        supportTrailingStop: i,
                        ...o
                    } = (0, r.default)(e);
                    return { ...o,
                        id: "projectionStopPartStopLimit",
                        dataType: "Order",
                        status: 6,
                        considerFilledQty: !1,
                        price: (0, s.ensureDefined)(e.limitPrice),
                        callbacks: {
                            modifyOrder: () => this._onOpenOrderTicket()
                        }
                    }
                }
                _convertStopLimitOrderToMainItem(e, t) {
                    const i = this.items().main;
                    if (void 0 === i || !(0, q.isOrderLikeItem)(i) || void 0 === e || (0, q.isPositionItemRawData)(e)) return;
                    const s = this._calculateSeenPrice(e),
                        o = this._getCurrentQuotes();
                    i.setData({ ...(0, r.default)(t.data()),
                        seenPrice: s,
                        currentQuotes: o,
                        type: e.type,
                        price: i.price()
                    })
                }
                _processedBracketData(e) {
                    return e.callbacks.cancelOrder = async e => {
                        const t = this.items().brackets,
                            i = t.findIndex((t => t.data().id === e));
                        return -1 !== i && t.splice(i, 1), await this.modifyAllItems(e), !0
                    }, e.callbacks.modifyOrder = () => this._onOpenOrderTicket(), e
                }
                _createBracketItem(e) {
                    return (0, H.createItem)(H.TradedGroupItemType.Order, this._processedBracketData(e), this, this._model, {
                        itemExternalServices: {
                            symbolDataProvider: this._symbolDataProvider,
                            qtySuggester: this._qtySuggester,
                            tradedGroupRenderersController: this._tradedGroupRenderersController
                        },
                        visibilityGetters: {
                            order: this._orderVisibilityGetter.bind(this),
                            position: this._positionVisibilityGetter.bind(this)
                        },
                        sourceCallbacks: this._callbacks,
                        gaOrigin: "Chart Place Order"
                    })
                }
                async _onOpenOrderTicket() {
                    const e = this._makePreOrderData(this.mainItem().data());
                    return this._openOrderTicket(e), !0
                }
                async _updateConfirmButtonDisplay() {
                    const e = this._isActiveSource.value(),
                        t = this.isConfirmButtonOnDomWidget();
                    if (e && t && !this._confirmWidgetShown) {
                        this._confirmWidgetShown = !0;
                        const {
                            ConfirmWidgetRenderer: e
                        } = await Promise.all([i.e(1764), i.e(93989)]).then(i.bind(i, 127810));
                        if (this._confirmWidgetShown && !this._isDestroyed) {
                            const t = (0, s.ensureDefined)(this.baseItem()),
                                i = (0, n.createWVFromGetterAndSubscription)((() => t.confirmText(!1)), this._dataUpdated),
                                r = (0, n.createWVFromGetterAndSubscription)((() => t.data().side), this._dataUpdated),
                                o = (0, _.combine)((() => this.hasError()), this._errors);
                            this._confirmWidget = new e(i, r, this._disabled.spawn(), o, (() => this.onConfirm(this.mainItem().id(), {})))
                        }
                    } else e && t || this._hideConfirmWidgetIfNeeded();
                    this.redraw()
                }
                _hideConfirmWidgetIfNeeded() {
                    var e;
                    null === (e = this._confirmWidget) || void 0 === e || e.destroy(), this._confirmWidget = null, this._confirmWidgetShown = !1
                }
                _makePreOrderData(e) {
                    var t, i, r, o, a, n, d, l, c, u;
                    const h = this._calculateSeenPrice(e),
                        p = this._getCurrentQuotes(),
                        {
                            symbol: m,
                            type: _,
                            side: y,
                            qty: b,
                            isClose: v
                        } = e,
                        f = {
                            symbol: m,
                            type: _,
                            side: y,
                            qty: b,
                            isClose: v,
                            seenPrice: h,
                            currentQuotes: p
                        },
                        g = (0, s.ensureNotNull)(e.price);
                    switch (e.type) {
                        case 4:
                            f.stopPrice = null != g ? g : void 0;
                            const e = this._symbolDataProvider.getMinTick(g),
                                r = 1 === f.side ? 1 : -1;
                            f.limitPrice = null !== (i = null === (t = this.items().stopLimit) || void 0 === t ? void 0 : t.price()) && void 0 !== i ? i : g + r * e;
                            break;
                        case 1:
                            f.limitPrice = null != g ? g : void 0;
                            break;
                        case 3:
                            f.stopPrice = null != g ? g : void 0
                    }
                    const {
                        takeProfit: k,
                        stopLoss: P,
                        trailingStop: S
                    } = (0, z.bracketsByType)(this.items().projectionBrackets), {
                        takeProfit: T,
                        stopLoss: O,
                        trailingStop: C
                    } = (0, z.bracketsByType)(this.items().brackets);
                    f.takeProfit = null !== (o = null !== (r = null == T ? void 0 : T.price()) && void 0 !== r ? r : null == k ? void 0 : k.price()) && void 0 !== o ? o : void 0, f.stopLoss = null !== (n = null !== (a = null == O ? void 0 : O.price()) && void 0 !== a ? a : null == P ? void 0 : P.price()) && void 0 !== n ? n : void 0;
                    const I = C || S,
                        D = null !== (d = null == I ? void 0 : I.price()) && void 0 !== d ? d : void 0;
                    if (void 0 !== I && void 0 !== D) {
                        const e = (0, s.ensureNotNull)(this._symbolDataProvider.lastData()),
                            t = null !== (l = null == e ? void 0 : e.bid) && void 0 !== l ? l : void 0,
                            i = null !== (c = null == e ? void 0 : e.ask) && void 0 !== c ? c : void 0,
                            {
                                pipSize: r
                            } = null !== (u = this._symbolDataProvider.symbolData()) && void 0 !== u ? u : {};
                        if (void 0 !== t && void 0 !== i && void 0 !== r) {
                            const e = I.data(),
                                s = 1 === e.side ? t : i;
                            f.trailingStopPips = (0, Q.calcPipsByPrice)(D, s, e.side, r), f.trailingStopPrice = D
                        }
                    }
                    return f
                }
                _calculateSeenPrice(e) {
                    var t;
                    const i = (0, s.ensureNotNull)(this._symbolDataProvider.lastData());
                    return null !== (t = 1 === e.side ? null == i ? void 0 : i.ask : null == i ? void 0 : i.bid) && void 0 !== t ? t : 0
                }
                _getCurrentQuotes() {
                    const {
                        ask: e,
                        bid: t
                    } = (0,
                        s.ensureNotNull)(this._symbolDataProvider.lastData());
                    return {
                        ask: e,
                        bid: t
                    }
                }
                _getToggleOrderTypeMenuHandler() {
                    return (e, t, i, r, s) => {
                        var o;
                        const a = this.mainItem();
                        if (a.canSwitchType()) {
                            this._callbacks.trackEvent("Chart Place Order", "Order type menu opening", null !== (o = i.label) && void 0 !== o ? o : "");
                            const n = a.orderTypesItems().map((({
                                type: e,
                                typeText: t
                            }) => ({
                                title: t,
                                value: e
                            })));
                            (0, E.updateDropdownMenu)(e, t, n, a.data().type, "Order type", (e => this.setMainOrderType(e)), r, s)
                        }
                    }
                }
            }
            const K = [1, 3, 4];
            class Y extends C.TradedGroupBase {
                constructor(e, t, i, r, s, o, a, n, d) {
                    super(e, t, i, r, s, o, a, n, d), this._resetProjBracketsTimeout = null, this._setData(this._rawDataSpawn.value(), !1), this._callbacks.onDataUpdateRejected.subscribe(this, this._resetProjBracketsHandler)
                }
                destroy() {
                    this._clearResetProjBracketsTimeout(), this._callbacks.onDataUpdateRejected.unsubscribeAll(this), super.destroy()
                }
                isPlaced() {
                    return !0
                }
                async onConfirm(e, t) {
                    return !0
                }
                isActiveSource() {
                    return !1
                }
                items(e = !1, t) {
                    return super.items(e, t)
                }
                mainItem() {
                    return this.items().main
                }
                async onFinishMove(e, t) {
                    if (this._hadBeenModifiedAllItems) return this.modifyAllItems(e, t);
                    this.setIsBlocked(!0);
                    const i = this.findItem(e);
                    (0, s.assert)((0, q.isOrderLikeItem)(i), "This item does not support move"), t = (0, j.mergeGaParams)(t, {
                        event: "Move Order",
                        label: "single"
                    });
                    const r = await i.onFinishMove(t);
                    return !this._isDestroyed && (this.setIsBlocked(!1), this.syncData(), this.redraw(), this.allItemsSupportMove(this.items(!0)) && this._callbacks.showChartHint(), r)
                }
                async onFinishMoveProjectionBracket(e, t) {
                    return this.modifyAllItems(e, t)
                }
                async modifyAllItems(e, t) {
                    var i, r, o, a, n, d, l, u;
                    this.setIsBlocked(!0);
                    const {
                        takeProfit: h,
                        stopLoss: p,
                        trailingStop: m
                    } = (0, z.bracketsByType)(this.items().projectionBrackets), {
                        takeProfit: _,
                        stopLoss: y,
                        trailingStop: b
                    } = (0, z.bracketsByType)(this.items().brackets), v = {
                        limitPrice: null !== (r = null === (i = this.items().stopLimit) || void 0 === i ? void 0 : i.price()) && void 0 !== r ? r : void 0,
                        takeProfit: null !== (a = null !== (o = null == _ ? void 0 : _.price()) && void 0 !== o ? o : null == h ? void 0 : h.price()) && void 0 !== a ? a : void 0,
                        stopLoss: null !== (d = null !== (n = null == y ? void 0 : y.price()) && void 0 !== n ? n : null == p ? void 0 : p.price()) && void 0 !== d ? d : void 0,
                        trailingStop: null !== (u = null !== (l = null == b ? void 0 : b.price()) && void 0 !== l ? l : null == m ? void 0 : m.price()) && void 0 !== u ? u : void 0
                    }, f = (0, s.ensureDefined)(this.items().main), g = this.findItem(e);
                    (0, s.assert)((0, q.isOrderLikeItem)(g), "This item does not support move");
                    const k = this._hadBeenModifiedAllItems ? "Move Order" : "Add bracket from button",
                        P = function(e, t, i) {
                            return (0, q.isPositionLikeItem)(i) || "Move Order" === e ? "group" : (0, U.isPositionItem)(t) && t.supportOnlyPairBrackets() ? "both bracket" : i.bracketType() === c.BracketType.TakeProfit ? "take profit" : i.bracketType() === c.BracketType.TrailingStop ? "trailing stop" : "stop loss"
                        }(k, f, g);
                    t = (0, j.mergeGaParams)(t, {
                        event: k,
                        label: P
                    });
                    const S = this._ticketFocus(g);
                    let T = !1;
                    return (0, q.isPositionLikeItem)(f) ? T = await f.onModifyWithBracket(t, v, !1, S) : (T = await f.onFinishMove(t, v, !1, S), this.items(!0).forEach((e => {
                        e.setInEdit(!1)
                    }))), !this._isDestroyed && (T ? this._resetProjectionBracketByTimeout() : (null == m || m.setPrice(null), null == h || h.setPrice(null), null == p || p.setPrice(null)), this.setIsBlocked(!1), this.syncData(), this.redraw(), this._hadBeenModifiedAllItems = !1, T)
                }
                _createMainItem(e) {
                    const t = e.main;
                    let i;
                    return void 0 !== t && ((0, q.isOrderItemRawData)(t) ? i = (0, H.createItem)(H.TradedGroupItemType.Order, t, this, this._model, {
                        itemExternalServices: {
                            symbolDataProvider: this._symbolDataProvider,
                            qtySuggester: this._qtySuggester,
                            tradedGroupRenderersController: this._tradedGroupRenderersController
                        },
                        visibilityGetters: {
                            order: this._orderVisibilityGetter.bind(this),
                            position: this._positionVisibilityGetter.bind(this)
                        },
                        sourceCallbacks: this._callbacks
                    }) : (0, q.isPositionItemRawData)(t) && (i = (0, H.createItem)(H.TradedGroupItemType.Position, t, this, this._model, {
                        itemExternalServices: {
                            symbolDataProvider: this._symbolDataProvider,
                            qtySuggester: this._qtySuggester,
                            tradedGroupRenderersController: this._tradedGroupRenderersController
                        },
                        visibilityGetters: {
                            order: this._orderVisibilityGetter.bind(this),
                            position: this._positionVisibilityGetter.bind(this)
                        },
                        sourceCallbacks: this._callbacks
                    }))), i
                }
                _updateMainItem(e) {
                    const t = this.items().main;
                    if (void 0 !== t && void 0 !== e)
                        if ((0, U.isPositionItem)(t) && (0, q.isPositionItemRawData)(e)) {
                            const {
                                dataType: i,
                                ...r
                            } = e;
                            t.setData(r)
                        } else {
                            if (!(0, q.isOrderLikeItem)(t) || !(0, q.isOrderItemRawData)(e)) throw new Error(`Main item and main data are incompatible, main item type ${typeof t}, main data type ${e.dataType}`); {
                                const {
                                    dataType: i,
                                    ...r
                                } = e;
                                t.setData(r)
                            }
                        }
                }
                _dataForStopLimitOrder(e) {
                    return (0, s.assert)(!(0, q.isPositionItemRawData)(e) && void 0 !== e.limitPrice), { ...(0, r.default)(e),
                        price: e.limitPrice,
                        considerFilledQty: !1
                    }
                }
                _convertStopLimitOrderToMainItem(e, t) {
                    const i = this.items().main;
                    if (void 0 === i || !(0, q.isOrderLikeItem)(i) || void 0 === e || (0, q.isPositionItemRawData)(e)) return;
                    const s = { ...(0, r.default)(t.data()),
                        type: e.type,
                        price: i.price(),
                        callbacks: e.callbacks
                    };
                    i.setData(s)
                }
                _createBracketItem(e) {
                    return (0, H.createItem)(H.TradedGroupItemType.Order, this._processedBracketData(e), this, this._model, {
                        itemExternalServices: {
                            symbolDataProvider: this._symbolDataProvider,
                            qtySuggester: this._qtySuggester,
                            tradedGroupRenderersController: this._tradedGroupRenderersController
                        },
                        visibilityGetters: {
                            order: this._orderVisibilityGetter.bind(this),
                            position: this._positionVisibilityGetter.bind(this)
                        },
                        sourceCallbacks: this._callbacks,
                        gaOrigin: "Chart Order"
                    })
                }
                _resetProjectionBracketByTimeout() {
                    this._clearResetProjBracketsTimeout(), this._resetProjBracketsTimeout = setTimeout((() => this._resetProjBracketsHandler()), 2e4)
                }
                _ticketFocus(e) {
                    if (!(0, q.isPositionLikeItem)(e)) {
                        if (null !== e.bracketType()) return e.bracketType() === c.BracketType.TakeProfit ? 3 : 4;
                        switch (e.type()) {
                            case 4:
                                return (0, U.isLimitPartStopLimitOrderItem)(e) ? 1 : 2;
                            case 1:
                                return 1;
                            case 3:
                                return 2
                        }
                    }
                    return 5
                }
                _clearResetProjBracketsTimeout() {
                    null !== this._resetProjBracketsTimeout && (clearTimeout(this._resetProjBracketsTimeout), this._resetProjBracketsTimeout = null)
                }
                _resetProjBracketsHandler() {
                    this._clearResetProjBracketsTimeout();
                    const {
                        takeProfit: e,
                        stopLoss: t,
                        trailingStop: i
                    } = (0,
                        z.bracketsByType)(this.items().projectionBrackets);
                    null == e || e.setPrice(null), null == t || t.setPrice(null), null == i || i.setPrice(null), this.redraw()
                }
            }
            var X = i(328875);
            const Z = (0, d.getLogger)("Trading.Source.Manager");

            function ee(e) {
                let t = "",
                    i = "",
                    r = "";
                return e.main && ("Position" === e.main.dataType ? (t = "Position", i = JSON.stringify((0, p.cropPositionData)(e.main))) : "Order" === e.main.dataType ? (t = "Order", i = JSON.stringify((0, h.cropOrderData)(e.main))) : (t = "PreOrder", i = JSON.stringify(e.main))), e.brackets.forEach(((e, t) => {
                    const i = (0, z.getBracketType)(e),
                        s = null !== i ? c.BracketType[i] : "";
                    r = 0 === t ? `\nbracketData: ${s} - ${JSON.stringify((0,h.cropOrderData)(e))}` : `${r};\n ${s} - ${JSON.stringify((0,h.cropOrderData)(e))}`
                })), `mainType: ${t};\nmainData: ${i};${r}`
            }
            const te = "preOrder";

            function ie(e) {
                return 2 !== (null == e ? void 0 : e.data().type)
            }
            window.createPlaceContext = (e, t) => (0, s.ensureNotNull)(e.activeBroker()).createPlaceOrderContext(t);
            class re {
                constructor(e, t, i, r) {
                    this._tradedGroupData = new Map, this._tradedGroupPlaceData = null, this._tradedGroupPlaceStatus = null, this._ordersData = new Map, this._positionsData = new Map, this._positionsRealToParentIds = new Map, this._tradedGroupRenderersControllerMap = new WeakMap, this._ordersService = e, this._positionsService = t, this._chartWidgetCollection = i, this._realtimeProvider = r.realtimeProvider, this._qtySuggester = r.qtySuggester, this._brokerCommandsUIGetter = r.brokerCommandsUI, this._trackEvent = r.trackEvent, this._showTradedGroup = r.showTradedSources, this._pipValueType$ = r.pipValueType$, this._tradedContextLinking = r.activeTradedLinking, this._tradedContextLinking.onContextChanged().subscribe(this, this._updateTradedGroupFromLinking), this._addOrderItems(this._ordersService.activeOrders()), this._ordersService.activeOrdersUpdated().subscribe(this, (e => this._addOrderItems([e]))), this._ordersService.activeOrdersRemoved().subscribe(this, (e => this._removeTradedGroupItems(e))), this._addPositionItems(this._positionsService.positions().map((e => ({
                        data: e,
                        type: p.PositionsUpdateType.Full
                    })))), this._positionsService.positionUpdate().subscribe(this, (e => this._addPositionItems([e]))), this._positionsService.positionsRemoved().subscribe(this, (e => this._removeTradedGroupItems(e)))
                }
                destroy() {
                    this._tradedContextLinking.onContextChanged().unsubscribeAll(this), this._ordersService.activeOrdersUpdated().unsubscribeAll(this), this._ordersService.activeOrdersRemoved().unsubscribeAll(this), this._ordersData.clear(), this._positionsService.positionUpdate().unsubscribeAll(this), this._positionsService.positionsRemoved().unsubscribeAll(this), this._positionsData.clear(), this._tradedGroupData.clear()
                }
                _getBrackets(e) {
                    const t = [];
                    if (!this._ordersData.has(e)) {
                        const t = this._positionsRealToParentIds.get(e);
                        void 0 !== t && (e = t)
                    }
                    return this._ordersData.forEach((i => {
                        i.parentId === e && t.push({
                            dataType: "Order",
                            ...(0, r.default)(i),
                            callbacks: this._createCallbacksForOrder(i)
                        })
                    })), t
                }
                _updateTradedGroupFromLinking(e) {
                    if ((0, u.isContextPlaceOrderContext)(e) && ie(e)) {
                        const u = this._createPlaceSourceData(e);
                        null !== this._tradedGroupPlaceData ? this._tradedGroupPlaceData.setValue(u) : (this._tradedGroupPlaceData = new a.WatchedObject(u), t = this._tradedGroupPlaceData, i = this._createProjectionOrderErrorWV(), r = this._createProjectionOrderStatusW(), s = this._ordersService.orderRejected(), o = this._showTradedGroup, n = this._chartWidgetCollection, d = {
                            realtimeProvider: this._realtimeProvider,
                            qtySuggester: this._qtySuggester,
                            pipValueType$: this._pipValueType$,
                            positionCurrencyGetter: this._positionsService.getCurrency.bind(this._positionsService),
                            orderCurrencyGetter: this._ordersService.getCurrency.bind(this._ordersService)
                        }, l = this._tradedGroupRenderersControllerMap, c = this._createCallbacksForPlaceOrder(), h = this._trackEvent, n.addCustomSource("tradedPlaceOrder", ((e, a) => A(n, a, d, l, ((l, u, p, m, y, b) => {
                            const v = function(e) {
                                    if (null === e || 1 !== e.connectionStatus()) return [2];
                                    const t = [],
                                        {
                                            supportMarketOrders: i,
                                            supportLimitOrders: r,
                                            supportStopOrders: s,
                                            supportStopLimitOrders: o
                                        } = e.metainfo().configFlags;
                                    return i && t.push(2), r && t.push(1), s && t.push(3), o && t.push(4), t
                                }(d.realtimeProvider.activeBroker()).filter((e => K.includes(e))),
                                f = (0, _.combine)((e => e.model().model() === a), n.activeChartWidget);
                            return new J(e, a, l, o, t, i, r, {
                                exitTrackingMode: u,
                                onDataUpdateRejected: s,
                                trackEvent: h,
                                showChartHint: R,
                                hideChartHint: L,
                                ...c
                            }, m, y, p, v, f, b)
                        }))), m.CustomSourceLayer.Topmost))
                    } else null !== this._tradedGroupPlaceData && (! function(e) {
                        e.removeCustomSource("tradedPlaceOrder")
                    }(this._chartWidgetCollection), this._tradedGroupPlaceData = null);
                    var t, i, r, s, o, n, d, l, c, h
                }
                _createProjectionOrderErrorWV() {
                    return (0, n.createWVFromGetterAndSubscription)((() => {
                        var e, t;
                        return null !== (t = null === (e = this._tradedContextLinking.context()) || void 0 === e ? void 0 : e.errors()) && void 0 !== t ? t : {}
                    }), this._tradedContextLinking.onContextChanged())
                }
                _createProjectionOrderStatusW() {
                    return (0, n.createWVFromGetterAndSubscription)((() => {
                        var e, t;
                        return null !== (t = null === (e = this._tradedContextLinking.context()) || void 0 === e ? void 0 : e.status()) && void 0 !== t ? t : u.PlaceOrEditContextStatus.Undefined
                    }), this._tradedContextLinking.onContextChanged())
                }
                _createTradedGroupData(e) {
                    let t;
                    const i = this._ordersData.get(e),
                        s = this._positionsData.get(e);
                    return void 0 !== i ? t = {
                        dataType: "Order",
                        ...(0, r.default)(i),
                        callbacks: this._createCallbacksForOrder(i)
                    } : void 0 !== s && (t = {
                        dataType: "Position",
                        ...(0, r.default)(s),
                        callbacks: this._createCallbacksForPosition()
                    }), {
                        main: t,
                        brackets: this._getBrackets(e)
                    }
                }
                _createPlaceSourceData(e) {
                    const t = (0, r.default)(e.data()),
                        i = (0, z.getOrderPriceByType)(t);
                    (0, o.isNumber)(i) || Z.logError("pre-order price is not defined");
                    const s = this._supportBracketsForOrder(),
                        a = {
                            dataType: "PreOrder",
                            ...t,
                            price: i,
                            callbacks: {},
                            supportModify: !0,
                            supportModifyOrderPrice: !0,
                            supportMove: !0,
                            supportCancel: !0,
                            supportBrackets: s,
                            supportTrailingStop: s && (0, X.checkTrailingStopAvailability)(this._configFlags()),
                            plBasedOnLast: !0
                        };
                    return {
                        main: a,
                        brackets: this._createBracketsFromPlaceContextData(a)
                    }
                }
                _createBracketsFromPlaceContextData(e) {
                    const t = [];
                    return e.supportBrackets && (void 0 !== e.takeProfit && t.push(this._createBracketDataForPlaceOrder(e, c.BracketType.TakeProfit, e.takeProfit)),
                        void 0 !== e.stopLoss && t.push(this._createBracketDataForPlaceOrder(e, c.BracketType.StopLoss, e.stopLoss)), void 0 !== e.trailingStopPips && t.push(this._createBracketDataForPlaceOrder(e, c.BracketType.TrailingStop, (0, s.ensureDefined)(e.trailingStopPrice)))), t
                }
                _createBracketDataForPlaceOrder(e, t, i) {
                    return { ...(0, z.buildProjectionBracketData)(te, t, e),
                        dataType: "Order",
                        price: i,
                        parentId: te,
                        parentType: 1,
                        callbacks: {},
                        supportBrackets: !1,
                        supportModify: !0,
                        supportMove: !0,
                        supportCancel: !0,
                        plBasedOnLast: !1
                    }
                }
                _recreateTradedGroupSource(e, t = !0, i = "") {
                    const r = this._createTradedGroupData(e),
                        s = this._tradedGroupData.get(e);
                    if (void 0 !== s) s.setValue(r), t && Z.logNormal(`Source updated${i}: ${ee(r)}`);
                    else {
                        const t = new a.WatchedObject(r);
                        o = e, n = t, d = this._ordersService.orderRejected(), l = this._showTradedGroup, c = this._chartWidgetCollection, u = {
                            realtimeProvider: this._realtimeProvider,
                            qtySuggester: this._qtySuggester,
                            pipValueType$: this._pipValueType$,
                            positionCurrencyGetter: this._positionsService.getCurrency.bind(this._positionsService),
                            orderCurrencyGetter: this._ordersService.getCurrency.bind(this._ordersService)
                        }, h = this._tradedGroupRenderersControllerMap, p = this._trackEvent, c.addCustomSource(`traded${o}`, ((e, t) => A(c, t, u, h, ((i, r, s, o, a) => new Y(e, t, i, l, n, {
                            exitTrackingMode: r,
                            onDataUpdateRejected: d,
                            trackEvent: p,
                            showChartHint: R,
                            hideChartHint: L
                        }, o, a, s)))), m.CustomSourceLayer.Topmost), this._tradedGroupData.set(e, t), Z.logNormal(`Source created: ${ee(r)}`)
                    }
                    var o, n, d, l, c, u, h, p
                }
                _configFlags() {
                    return (0, s.ensureNotNull)(this._realtimeProvider.activeBroker()).metainfo().configFlags
                }
                _supportBracketsForOrder() {
                    const e = this._configFlags();
                    return Boolean(e.supportOrderBrackets && e.supportModifyBrackets)
                }
                async _findPositionRealIdByParentId(e) {
                    const t = this._positionsData.get(e);
                    let i;
                    if (void 0 !== t) i = t.id;
                    else if (i = await this._positionsService.realIdFromBroker(e), null === i) {
                        const t = this._currentRealPositionIdByParentId(e);
                        return null !== t && this._positionsRealToParentIds.delete(t), null
                    }
                    return this._positionsRealToParentIds.set(i, e), i
                }
                _currentRealPositionIdByParentId(e) {
                    for (const t of Array.from(this._positionsRealToParentIds.keys()))
                        if (this._positionsRealToParentIds.get(t) === e) return t;
                    return null
                }
                async _findAndUpdateParentPosition(e, t = !1) {
                    const i = this._currentRealPositionIdByParentId(e),
                        r = await this._findPositionRealIdByParentId(e);
                    if (null !== i && null === r && this._tradedGroupData.has(i) && (Z.logNormal(`Position update (brackets unlink from position), id: ${e}`), this._recreateTradedGroupSource(i)), null === i && null !== r) {
                        const t = this._tradedGroupData.get(e);
                        void 0 !== t && void 0 === t.value().main && (Z.logNormal(`Position remove (brackets link to position), id: ${e}`), this._removeTradedGroupEditSource(e))
                    }
                    t && i === r || this._recreateTradedGroupSource(r || e, void 0, " after parent position been found (async operation)")
                }
                _addOrderItems(e) {
                    for (const t of e) {
                        this._removeSourceIfChangedParent(t), this._ordersData.set(t.id, t);
                        const e = void 0 !== t.parentId ? t.parentId : t.id;
                        if (2 === t.parentType || 3 === t.parentType) return void this._findAndUpdateParentPosition(e);
                        this._recreateTradedGroupSource(e)
                    }
                }
                _addPositionItems(e) {
                    for (const t of e) {
                        const e = t.data,
                            i = e.id;
                        this._positionsData.set(i, e), this._recreateTradedGroupSource(i, t.type === p.PositionsUpdateType.Full);
                        this._ordersService.activeOrders().filter(h.isBracketOrderRawData).filter((t => 2 === t.parentType && t.symbol === e.symbol)).forEach((e => {
                            this._findAndUpdateParentPosition(e.parentId, !0)
                        }))
                    }
                }
                _removeSourceIfChangedParent(e) {
                    const t = this._ordersData.get(e.id);
                    void 0 === t || t.parentId === e.parentId && t.parentType === e.parentType || this._removeTradedGroupItems([t.id])
                }
                _removeTradedGroupItems(e) {
                    for (const t of e) {
                        let e = t;
                        if (!this._tradedGroupData.has(t))
                            for (const i of this._tradedGroupData.keys()) {
                                for (const r of (0, s.ensureDefined)(this._tradedGroupData.get(i)).value().brackets)
                                    if (r.id === t) {
                                        e = i;
                                        break
                                    }
                                if (e === i) break
                            }
                        this._positionsData.delete(t), this._ordersData.delete(t);
                        const i = this._createTradedGroupData(e);
                        if (void 0 === i.main && 0 === i.brackets.length) this._removeTradedGroupEditSource(e);
                        else {
                            const t = this._tradedGroupData.get(e);
                            void 0 !== t && (t.setValue(i), Z.logNormal(`Source updated: ${ee(i)}`))
                        }
                    }
                }
                _removeTradedGroupEditSource(e) {
                    var t, i;
                    this._tradedGroupData.delete(e), t = this._chartWidgetCollection, i = e, t.removeCustomSource(`traded${i}`), Z.logNormal(`Traded-source removed, mainItemId: ${e}`)
                }
                _createCallbacksForOrder(e) {
                    const t = {};
                    return e.supportModify && (t.modifyOrder = this._modifyOrder.bind(this)), e.supportMove && (t.moveOrder = this._moveOrder.bind(this)), e.supportCancel && (t.cancelOrder = this._cancelOrder.bind(this)), t
                }
                _createCallbacksForPlaceOrder() {
                    return {
                        modifyOrder: async e => {
                            const t = (0, r.default)(e),
                                i = await (0, s.ensureNotNull)(this._realtimeProvider.activeBroker()).createPlaceOrderContext(t);
                            return this._tradedContextLinking.setContext(i), !0
                        },
                        openOrderTicket: e => {
                            var t;
                            null === (t = this._brokerCommandsUIGetter()) || void 0 === t || t.placeOrder(e, !1)
                        },
                        cancelOrder: () => {
                            this._tradedContextLinking.clear()
                        },
                        sendOrder: async () => {
                            const e = await (0, s.ensureNotNull)(this._tradedContextLinking.context()).send();
                            return this._tradedContextLinking.clear(), e
                        }
                    }
                }
                _createCallbacksForPosition() {
                    return {
                        reversePosition: this._reversePosition.bind(this),
                        modifyPosition: this._modifyPosition.bind(this),
                        closePosition: this._closePosition.bind(this)
                    }
                }
                async _processingModifyOrder(e, t, i, r) {
                    let o = !1;
                    try {
                        o = await (0, s.ensureNotNull)(this._brokerCommandsUIGetter()).modifyOrder(e, i, r)
                    } catch (e) {
                        Z.logError(`Try to modify order with error ${(0,l.errorToString)(e)}`)
                    }
                    return o
                }
                _modifyOrder(e, t, i, r) {
                    const o = (0, s.ensureNotNull)(this._ordersService.find(e));
                    return this._processingModifyOrder(t, o, r, i)
                }
                _moveOrder(e, t, i) {
                    const r = (0, s.ensureNotNull)(this._ordersService.find(e));
                    return this._processingModifyOrder(t, r, !0, i)
                }
                _cancelOrder(e) {
                    return (0, s.ensureNotNull)(this._brokerCommandsUIGetter()).cancelOrder(e)
                }
                _reversePosition(e) {
                    return (0, s.ensureNotNull)(this._brokerCommandsUIGetter()).reversePosition(e)
                }
                _modifyPosition(e, t = {}, i, r) {
                    const o = (0, s.ensureNotNull)(this._brokerCommandsUIGetter());
                    return this._positionsService.isDisplayModeTrades() ? (0, s.ensureDefined)(o.editTradeBrackets).call(o, e, t, i, r) : o.editPositionBrackets(e, t, i, r)
                }
                _closePosition(e) {
                    const t = (0,
                        s.ensureNotNull)(this._brokerCommandsUIGetter());
                    return this._positionsService.isDisplayModeTrades() ? t.closeTrade(e) : t.closePosition(e)
                }
            }
        },
        25837: e => {
            e.exports = {
                ar: ["اضغط مع الاستمرار على مفتاح Shift لسحب المجموعة بأكملها"],
                ca_ES: "Hold the shift key to drag the entire group",
                cs: "Hold the shift key to drag the entire group",
                de: ["Halten Sie die Umschalttaste gedrückt, um die gesamte Gruppe zu ziehen"],
                el: "Hold the shift key to drag the entire group",
                en: "Hold the shift key to drag the entire group",
                es: ["Mantenga pulsada la tecla de mayúsculas para arrastrar a todo el grupo"],
                fa: "Hold the shift key to drag the entire group",
                fr: ["Maintenez la touche shift pour faire glisser l'ensemble du groupe"],
                he_IL: ["החזק את מקש Shift כדי לגרור את כל הקבוצה"],
                hu_HU: "Hold the shift key to drag the entire group",
                id_ID: ["Tahan tombol shift untuk menyeret seluruh grup"],
                it: ["Tieni premuto il tasto Shift per spostare tutto il gruppo"],
                ja: ["Shiftキーを押しながらグループ全体をドラッグします"],
                ko: ["쉬프트키를 누른 채 그룹을 통째로 드래그하십시오"],
                ms_MY: ["Pegang kekunci shift untuk menyeret keseluruhan kumpulan"],
                nl_NL: "Hold the shift key to drag the entire group",
                pl: ["Przytrzymaj klawisz Shift, aby przeciągnąć całą grupę"],
                pt: ["Segure a tecla shift para arrastar o grupo inteiro"],
                ro: "Hold the shift key to drag the entire group",
                ru: ["Зажмите кнопку Shift, чтобы переместить всю группу"],
                sv: ["Håll ned shift-tangenten för att dra hela gruppen"],
                th: ["กดปุ่ม shift ค้างไว้เพื่อลากทั้งกลุ่ม"],
                tr: ["Grubun tamamını sürüklemek için üst karakter tuşunu basılı tutun"],
                vi: ["Giữ phím shift để kéo toàn bộ nhóm"],
                zh: ["按住shift键拖动整个组"],
                zh_TW: ["按住shift鍵拖動整個組"]
            }
        }
    }
]);
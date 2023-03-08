(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [11565, 91859], {
        719885: (e, t, i) => {
            "use strict";
            i.d(t, {
                TechnicalsDialogController: () => o
            });
            var r = i(583912),
                n = i(633457);
            const s = new Set(["listed_exchange", "type", "typespecs", "pricescale"]);
            let a;
            class o extends n.DialogRenderer {
                constructor() {
                    super(...arguments), this._dialog = null, this._subscribe = e => {
                        this._setVisibility(e)
                    }
                }
                async show(e) {
                    const t = (null == e ? void 0 : e.symbol) || r.linking.symbol.value();
                    if (null == e ? void 0 : e.snapshot) {
                        const {
                            snapshot: i
                        } = e, r = await this._loadModule();
                        this._getDialog(r, {
                            symbol: t,
                            ...i,
                            exchange: i.listed_exchange
                        }).show()
                    } else {
                        const e = async () => {
                                const {
                                    snapshoter: e
                                } = await i.e(51030).then(i.bind(i, 795394));
                                return e().getSnapshot(t, s)
                            },
                            [r, n] = await Promise.all([this._loadModule(), e()]);
                        if ("error" === n.status) return;
                        this._getDialog(r, {
                            symbol: t,
                            ...n.values,
                            exchange: n.values.listed_exchange
                        }).show()
                    }
                }
                async canBeShown(e) {
                    const t = e || r.linking.symbol.value();
                    if (!t) return !1;
                    const n = new Set([...s, "description"]),
                        [a, o, l, {
                            SCREENER_MARKET_BLACK_LIST: c
                        }] = await Promise.all([(async () => {
                            const {
                                snapshoter: e
                            } = await Promise.all([i.e(76049), i.e(49219), i.e(99648)]).then(i.bind(i, 795394));
                            return e().getSnapshot(t, n)
                        })(), Promise.all([i.e(76049), i.e(49219), i.e(99648)]).then(i.bind(i, 249219)), Promise.all([i.e(76049), i.e(49219), i.e(99648)]).then(i.bind(i, 512478)), Promise.all([i.e(76049), i.e(49219), i.e(99648)]).then(i.bind(i, 254526))]);
                    if ("error" === a.status) return !1;
                    const {
                        values: {
                            type: h,
                            listed_exchange: d,
                            typespecs: u,
                            description: g
                        }
                    } = a, m = l.generateScreenerRequest(t, h, ["Recommend.All"]), _ = d ? o.getMarketFromSymbol(d, h, u) : "";
                    if (!c.has(_)) try {
                        const e = await l.requestScreenerData(_, m);
                        return Boolean(e.data.length && g && d && h)
                    } catch (e) {
                        return !1
                    }
                    return !1
                }
                hide() {
                    var e;
                    null === (e = this._dialog) || void 0 === e || e.hide()
                }
                static getInstance() {
                    return a || (a = new o), a
                }
                _getDialog(e, t) {
                    var i, r;
                    return null === (i = this._dialog) || void 0 === i || i.hide(), null === (r = this._dialog) || void 0 === r || r.visible().unsubscribe(this._subscribe), this._dialog = new e.TechnicalsDialogRenderer(t), this._dialog.visible().subscribe(this._subscribe), this._dialog
                }
                _loadModule() {
                    return Promise.all([i.e(76049), i.e(37205), i.e(85264), i.e(19108), i.e(78860), i.e(88230), i.e(81910), i.e(86256), i.e(7624), i.e(59333), i.e(91901), i.e(96972), i.e(75398), i.e(34145), i.e(31755), i.e(1428), i.e(1011), i.e(52701), i.e(48484), i.e(54063), i.e(95248), i.e(56034), i.e(56652), i.e(29652), i.e(4082), i.e(97107), i.e(31986), i.e(67139), i.e(29388), i.e(94032), i.e(75514), i.e(47342), i.e(49219), i.e(48779), i.e(65422), i.e(54205), i.e(85234), i.e(20578), i.e(71138)]).then(i.bind(i, 236103))
                }
            }
        },
        210542: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                lineToolEntityInfo: () => a,
                studyEntityInfo: () => o,
                seriesEntityInfo: () => l,
                entityForDataSource: () => c
            });
            var r = i(562726),
                n = i(19334),
                s = i(289397);

            function a(e) {
                return {
                    id: e.id(),
                    name: (t = e.toolname, Object.keys(n.supportedLineTools).find((e => n.supportedLineTools[e].name === t)) || null)
                };
                var t
            }

            function o(e) {
                return {
                    id: e.id(),
                    name: e.metaInfo().description
                }
            }

            function l(e) {
                return {
                    id: e.id(),
                    name: "Main Series"
                }
            }

            function c(e, t) {
                return t === e.mainSeries() ? l(e.mainSeries()) : (0,
                    r.isStudy)(t) ? o(t) : (0, s.isLineTool)(t) ? a(t) : null
            }
        },
        178323: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                isLineToolRiskReward: () => o,
                LineDataSourceApi: () => c
            });
            var r = i(650151),
                n = i(758337);
            const s = new Map([
                ["LineToolRiskRewardLong", 2],
                ["LineToolRiskRewardShort", 2],
                ["LineToolBezierQuadro", 3],
                ["LineToolBezierCubic", 4]
            ]);

            function a(e) {
                const t = s.get(e.toolname);
                if (void 0 !== t) return t;
                const i = e.pointsCount();
                return -1 === i ? e.points().length : i
            }

            function o(e) {
                return "LineToolRiskRewardLong" === e || "LineToolRiskRewardShort" === e
            }
            const l = ["alwaysShowStats", "entryPrice", "inputs.first bar time", "inputs.last bar time", "interval", "linesWidths", "points", "snapTo45Degrees", "stopPrice", "symbol", "symbolStateVersion", "currencyId", "unitId", "targetPrice", "zOrderVersion"];
            class c {
                constructor(e, t, i) {
                    this._source = e, this._undoModel = t, this._model = t.model(), this._pointsConverter = i
                }
                isSelectionEnabled() {
                    return this._source.isSelectionEnabled()
                }
                setSelectionEnabled(e) {
                    this._source.setSelectionEnabled(e)
                }
                isSavingEnabled() {
                    return this._source.isSavedInChart()
                }
                setSavingEnabled(e) {
                    this._source.setSavingInChartEnabled(e)
                }
                isShowInObjectsTreeEnabled() {
                    return this._source.showInObjectTree()
                }
                setShowInObjectsTreeEnabled(e) {
                    this._source.setShowInObjectsTreeEnabled(e)
                }
                isUserEditEnabled() {
                    return this._source.userEditEnabled()
                }
                setUserEditEnabled(e) {
                    this._source.setUserEditEnabled(e)
                }
                bringToFront() {
                    this._model.bringToFront([this._source])
                }
                sendToBack() {
                    this._model.sendToBack([this._source])
                }
                getProperties() {
                    return this._source.properties().state(l, !0)
                }
                setProperties(e) {
                    this._setProps(this._source.properties(), e, "")
                }
                getPoints() {
                    let e = this._source.points();
                    const t = a(this._source);
                    return e.length > t && ((0, r.assert)(o(this._source.toolname)), e = e.slice(0, t)), this._pointsConverter.dataSourcePointsToPriced(e)
                }
                setPoints(e) {
                    if (this._source.isFixed()) return;
                    const t = a(this._source);
                    if (t !== e.length) throw new Error(`Wrong points count. Required: ${t}, provided: ${e.length}`);
                    const i = this._pointsConverter.apiPointsToDataSource(e);
                    this._model.startChangingLinetool(this._source), this._model.changeLinePoints(this._source, i), this._model.endChangingLinetool(!0), this._source.createServerPoints()
                }
                getAnchoredPosition() {
                    return this._source.positionPercents()
                }
                setAnchoredPosition(e) {
                    const t = this._source.fixedPoint(),
                        i = this._source.linkKey().value(),
                        r = void 0 === t ? null : this._source.screenPointToPoint(t);
                    if (!this._source.isFixed() || void 0 === t || null === i || null === r) return;
                    const n = {
                            logical: r,
                            screen: t
                        },
                        s = new Map;
                    s.set(i, e), this._model.startMovingSources([this._source], n, null, new Map), this._model.moveSources(n, s), this._model.endMovingSources(!0)
                }
                ownerSourceId() {
                    return (0, r.ensureNotNull)(this._source.ownerSource()).id()
                }
                changePoint(e, t) {
                    if (this._source.isFixed()) return;
                    const i = this._pointsConverter.apiPointsToDataSource([e])[0];
                    this._model.startChangingLinetool(this._source, { ...i
                    }, t), this._model.changeLinePoint({ ...i
                    }), this._model.endChangingLinetool(!1), this._source.createServerPoints()
                }
                isHidden() {
                    return this._source.isSourceHidden()
                }
                getRawPoints() {
                    return this._source.points()
                }
                setRawPoint(e, t) {
                    this._model.startChangingLinetool(this._source, { ...t
                    }, e), this._model.changeLinePoint({ ...t
                    }), this._model.endChangingLinetool(!1)
                }
                move(e, t) {
                    this._model.startMovingSources([this._source], {
                        logical: e
                    }, null, new Map), this._model.moveSources({
                        logical: t
                    }, new Map), this._model.endMovingSources(!1)
                }
                dataAndViewsReady() {
                    return this._source.dataAndViewsReady()
                }
                zorder() {
                    return this._source.zorder()
                }
                symbol() {
                    return this._source.properties().symbol.value()
                }
                currency() {
                    return this._source.properties().currencyId.value()
                }
                unit() {
                    return this._source.properties().unitId.value()
                }
                share(e) {
                    this._undoModel.shareLineTools([this._source], e)
                }
                sharingMode() {
                    return this._source.sharingMode().value()
                }
                _setProps(e, t, i) {
                    for (const r in t) {
                        if (!t.hasOwnProperty(r)) continue;
                        const s = 0 === i.length ? r : `${i}.${r}`;
                        if (e.hasOwnProperty(r)) {
                            const i = t[r];
                            (0, n.isHashObject)(i) ? this._setProps(e[r], i, s): e[r].setValue(i)
                        } else console.warn(`Unknown property "${s}"`)
                    }
                }
            }
        },
        709333: (e, t, i) => {
            "use strict";
            i.d(t, {
                PaneApi: () => u
            });
            var r = i(650151),
                n = i(228039),
                s = i(210542),
                a = i(758337),
                o = i(777754),
                l = i(683890),
                c = i(321244);
            const h = new l.TranslatedString("change pane height", o.t(null, void 0, i(187510)));
            class d extends c.UndoCommand {
                constructor(e, t, i) {
                    super(h), this._model = e, this._paneIndex = t, this._paneHeight = i, this._prevStretchFactors = this._model.panes().map((e => e.stretchFactor()))
                }
                redo() {
                    this._model.changePanesHeight(this._paneIndex, this._paneHeight)
                }
                undo() {
                    const e = this._model.panes();
                    for (let t = 0; t < e.length; ++t) e[t].setStretchFactor((0, r.ensureDefined)(this._prevStretchFactors[t]));
                    this._model.fullUpdate()
                }
            }
            class u {
                constructor(e, t) {
                    this._priceScales = new WeakMap, this._pane = e, this._chartWidget = t
                }
                hasMainSeries() {
                    return this._pane.containsMainSeries()
                }
                getLeftPriceScales() {
                    return this._pane.leftPriceScales().map(this._getPriceScaleApi, this)
                }
                getRightPriceScales() {
                    return this._pane.rightPriceScales().map(this._getPriceScaleApi, this)
                }
                getMainSourcePriceScale() {
                    const e = this._pane.mainDataSource();
                    if (null === e) return null;
                    const t = e.priceScale();
                    return null === t || this._pane.isOverlay(e) ? null : this._getPriceScaleApi(t)
                }
                setMaximized(e) {
                    if (this._pane.maximized().value() !== e)
                        for (const e of this._chartWidget.paneWidgets())
                            if (e.state() === this._pane) {
                                this._chartWidget.toggleMaximizePane(e);
                                break
                            }
                }
                legendLoaded() {
                    const e = this._chartWidget.paneByState(this._pane);
                    return Boolean(e && e.statusWidget())
                }
                getAllEntities() {
                    const e = this._pane.model();
                    return this._pane.sourcesByGroup().allIncludingHidden().map((t => (0, s.entityForDataSource)(e, t))).filter(a.notNull).filter((e => null !== e.name))
                }
                getHeight() {
                    return this._pane.height()
                }
                setHeight(e) {
                    const t = this._chartWidget.model().model(),
                        i = t.panes();
                    (0, r.assert)(i.length > 1, "Unable to change pane's height if there is only one pane");
                    const n = i.indexOf(this._pane);
                    (0, r.assert)(-1 !== n, "Invalid pane index");
                    const s = new d(t, n, e);
                    this._chartWidget.model().undoHistory().pushUndoCommand(s)
                }
                moveTo(e) {
                    const t = this.paneIndex();
                    t !== e && ((0, r.assert)(e >= 0 && e < this._chartWidget.paneWidgets().length, "Invalid pane index"), this._chartWidget.model().movePane(t, e))
                }
                paneIndex() {
                    return this._chartWidget.model().model().panes().indexOf(this._pane)
                }
                collapse() {
                    if (1 === this._chartWidget.paneWidgets().length) throw new Error("Cannot collapse a single pane!");
                    const e = this._chartWidget.paneByState(this._pane);
                    if (null === e || this._pane.collapsed().value()) throw new Error("Cannot collapse current pane!");
                    this._chartWidget.toggleCollapsedPane(e)
                }
                restore() {
                    if (1 === this._chartWidget.paneWidgets().length) throw new Error("Cannot restore a single pane!");
                    const e = this._chartWidget.paneByState(this._pane);
                    if (null === e || !this._pane.collapsed().value()) throw new Error("Cannot restore current pane!");
                    this._chartWidget.toggleCollapsedPane(e)
                }
                _getPriceScaleApi(e) {
                    let t = this._priceScales.get(e);
                    return void 0 === t && (t = new n.PriceScaleApi(this._chartWidget.model(), e), this._priceScales.set(e, t)), t
                }
            }
        },
        228039: (e, t, i) => {
            "use strict";
            i.d(t, {
                PriceScaleApi: () => r
            });
            class r {
                constructor(e, t) {
                    this._chartUndoModel = e, this._chartModel = e.model(), this._priceScale = t
                }
                getMode() {
                    const e = this._priceScale.properties().childs();
                    return e.percentage.value() ? 2 : e.indexedTo100.value() ? 3 : e.log.value() ? 1 : 0
                }
                setMode(e) {
                    this._priceScale.setMode({
                        percentage: 2 === e,
                        log: 1 === e,
                        indexedTo100: 3 === e
                    })
                }
                isInverted() {
                    return this._priceScale.isInverted()
                }
                setInverted(e) {
                    this._priceScale.properties().childs().isInverted.setValue(e)
                }
                isLocked() {
                    return this._priceScale.isLockScale()
                }
                setLocked(e) {
                    this._priceScale.setMode({
                        lockScale: e
                    })
                }
                isAutoScale() {
                    return this._priceScale.isAutoScale()
                }
                setAutoScale(e) {
                    this._priceScale.setMode({
                        autoScale: e
                    })
                }
                getVisiblePriceRange() {
                    return this._priceScale.priceRangeInPrice()
                }
                setVisiblePriceRange(e) {
                    this._priceScale.setPriceRangeInPrice(e), this._chartModel.lightUpdate()
                }
                hasMainSeries() {
                    return this._priceScale.hasMainSeries()
                }
                getStudies() {
                    return this._priceScale.getStudies().map((e => e.id()))
                }
                coordinateToPrice(e) {
                    var t;
                    const i = null === (t = this._priceScale.mainSource()) || void 0 === t ? void 0 : t.firstValue();
                    return null == i ? null : this._priceScale.coordinateToPrice(e, i)
                }
                currency() {
                    const e = this._priceScale.currency(this._chartModel.availableCurrencies());
                    return null === e ? null : {
                        selectedCurrency: e.selectedCurrency,
                        readOnly: e.readOnly
                    }
                }
                setCurrency(e) {
                    this._chartUndoModel.setPriceScaleCurrency(this._priceScale, e)
                }
                unit() {
                    const e = this._priceScale.unit(this._chartModel.availableUnits());
                    return null === e ? null : {
                        selectedUnit: e.selectedUnit,
                        readOnly: 0 === e.availableGroups.size,
                        availableGroups: Array.from(e.availableGroups)
                    }
                }
                setUnit(e) {
                    this._chartUndoModel.setPriceScaleUnit(this._priceScale, e)
                }
                measureUnitId() {
                    const e = this._priceScale.measureUnitId(this._chartModel.availableUnits());
                    return null === e ? null : {
                        selectedMeasureUnitId: e.selectedMeasureUnitId
                    }
                }
            }
        },
        66066: (e, t, i) => {
            "use strict";
            i.d(t, {
                ReplayApi: () => r
            });
            class r {
                constructor(e) {
                    this._replayUIController = e
                }
                isReplayToolbarVisible() {
                    return this._replayUIController.isReplayModeEnabled()
                }
                showReplayToolbar() {
                    return this._replayUIController.enableReplayMode()
                }
                hideReplayToolbar() {
                    return this._replayUIController.requestCloseReplay()
                }
            }
        },
        100148: (e, t, i) => {
            "use strict";

            function r(e, t) {
                const i = e.dataSourceForId(t);
                if (null === i) throw new Error(`Chart has no study or shape with id "${t}"`);
                return i
            }
            i.d(t, {
                SelectionApi: () => n
            });
            class n {
                constructor(e) {
                    this._model = e
                }
                add(e) {
                    Array.isArray(e) ? this._model.selectionMacro((t => {
                        e.map(r.bind(null, this._model)).forEach((e => t.addSourceToSelection(e)))
                    })) : this.add([e])
                }
                canBeAddedToSelection(e) {
                    const t = r(this._model, e);
                    return this._model.selection().canBeAddedToSelection(t)
                }
                set(e) {
                    Array.isArray(e) ? this._model.selectionMacro((t => {
                        t.clearSelection(), e.map(r.bind(null, this._model)).forEach((e => t.addSourceToSelection(e)))
                    })) : this.set([e])
                }
                remove(e) {
                    Array.isArray(e) ? this._model.selectionMacro((t => {
                        e.map(r.bind(null, this._model)).forEach((e => t.removeSourceFromSelection(e)))
                    })) : this.remove([e])
                }
                contains(e) {
                    const t = r(this._model, e);
                    return this._model.selection().isSelected(t)
                }
                allSources() {
                    return this._model.selection().dataSources().map((e => e.id()))
                }
                isEmpty() {
                    return this._model.selection().isEmpty()
                }
                clear() {
                    this._model.selectionMacro((e => {
                        e.clearSelection()
                    }))
                }
                onChanged() {
                    return this._model.onSelectedSourceChanged()
                }
            }
        },
        125853: (e, t, i) => {
            "use strict";
            i.d(t, {
                SeriesApi: () => l
            });
            var r = i(650151),
                n = i(487864),
                s = i(360078),
                a = i(910062),
                o = i(228039);
            class l {
                constructor(e, t) {
                    this._series = e, this._undoModel = t, this._model = t.model()
                }
                isUserEditEnabled() {
                    return this._series.userEditEnabled()
                }
                setUserEditEnabled(e) {
                    this._series.setUserEditEnabled(e)
                }
                mergeUp() {
                    this._model.isMergeUpAvailableForSource(this._series) && new n.MergeUpUndoCommand(this._model, this._series, null).redo()
                }
                mergeDown() {
                    this._model.isMergeDownAvailableForSource(this._series) && new n.MergeDownUndoCommand(this._model, this._series, null).redo()
                }
                unmergeUp() {
                    this._model.isUnmergeAvailableForSource(this._series) && new s.UnmergeUpUndoCommand(this._model, this._series, null).redo()
                }
                unmergeDown() {
                    this._model.isUnmergeAvailableForSource(this._series) && new s.UnmergeDownUndoCommand(this._model, this._series, null).redo()
                }
                detachToRight() {
                    new a.MoveToNewPriceScaleUndoCommand(this._model, this._series, this._pane(), "right", null).redo()
                }
                detachToLeft() {
                    new a.MoveToNewPriceScaleUndoCommand(this._model, this._series, this._pane(), "left", null).redo()
                }
                detachNoScale() {
                    new a.MoveToNewPriceScaleUndoCommand(this._model, this._series, this._pane(), "overlay", null).redo()
                }
                changePriceScale(e) {
                    const t = (0, r.ensureNotNull)(this._model.paneForSource(this._series));
                    switch (e) {
                        case "new-left":
                            new a.MoveToNewPriceScaleUndoCommand(this._model, this._series, t, "left", null).redo();
                            break;
                        case "new-right":
                            new a.MoveToNewPriceScaleUndoCommand(this._model, this._series, t, "right", null).redo();
                            break;
                        case "no-scale":
                            (0, r.assert)(t.actionNoScaleIsEnabled(this._series), "Unable to leave a pane without any non-overlay price scale"), new a.MoveToNewPriceScaleUndoCommand(this._model, this._series, t, "overlay", null).redo();
                            break;
                        default:
                            const i = this._model.dataSourceForId(e);
                            if (null === i) throw new Error(`There is no study with entityId='${e}'`);
                            const n = this._model.paneForSource(i) === t;
                            (0, r.assert)(n, "Study should be on the main pane");
                            const s = (0, r.ensureNotNull)(i.priceScale());
                            new a.MoveToExistingPriceScaleUndoCommand(this._model, this._series, t, s, null).redo()
                    }
                }
                isVisible() {
                    return this._series.properties().childs().visible.value()
                }
                setVisible(e) {
                    this._series.properties().childs().visible.setValue(e)
                }
                bringToFront() {
                    this._model.bringToFront([this._series])
                }
                sendToBack() {
                    this._model.sendToBack([this._series])
                }
                entityId() {
                    return this._series.id()
                }
                chartStyleProperties(e) {
                    return this._series.properties().childs()[c(e)].state(["inputs", "inputsInfo"])
                }
                setChartStyleProperties(e, t) {
                    this._series.properties().childs()[c(e)].mergeAndFire(t)
                }
                barsCount() {
                    return this._series.bars().size()
                }
                symbolSource() {
                    return {
                        symbol: this._series.symbol(),
                        currencyId: this._series.currency(),
                        unitId: this._series.unit()
                    }
                }
                isLoading() {
                    return this._series.isLoading()
                }
                data() {
                    return this._series.data()
                }
                priceScale() {
                    return new o.PriceScaleApi(this._undoModel, this._series.priceScale())
                }
                _pane() {
                    return (0, r.ensureNotNull)(this._model.paneForSource(this._series))
                }
            }

            function c(e) {
                switch (e) {
                    case 0:
                        return "barStyle";
                    case 1:
                        return "candleStyle";
                    case 2:
                        return "lineStyle";
                    case 3:
                        return "areaStyle";
                    case 4:
                        return "renkoStyle";
                    case 5:
                        return "kagiStyle";
                    case 6:
                        return "pnfStyle";
                    case 7:
                        return "pbStyle";
                    case 8:
                        return "haStyle";
                    case 9:
                        return "hollowCandleStyle";
                    case 10:
                        return "baselineStyle";
                    case 11:
                        return "rangeStyle";
                    case 12:
                        return "hiloStyle";
                    case 13:
                        return "columnStyle";
                    default:
                        (0, r.ensureNever)(e)
                }
                throw new Error(`unsupported chart style: ${e}`)
            }
        },
        830384: (e, t, i) => {
            "use strict";
            i.d(t, {
                StudyApi: () => y
            });
            var r = i(650151),
                n = i(869403),
                s = i.n(n),
                a = i(758337),
                o = i(211800),
                l = i(121551),
                c = i(372548),
                h = i(360078),
                d = i(487864),
                u = i(910062),
                g = i(676317),
                m = i(59124),
                _ = i(905529),
                p = i(228039),
                S = i(263314),
                v = i(591316),
                b = i(443403);
            class y {
                constructor(e, t) {
                    this._onStudyCompleted = new(s()), this._onStudyError = new(s()), this._study = e, this._chartWidget = t, this._undoModel = this._chartWidget.model(), this._model = this._undoModel.model(), this._study.onAboutToBeDestroyed().subscribe(this, (() => {
                        this._study.onStatusChanged().unsubscribeAll(this), this._study.onAboutToBeDestroyed().unsubscribeAll(this)
                    })), this._study.onStatusChanged().subscribe(this, (e => {
                        switch (e.type) {
                            case S.StudyStatusType.Completed:
                                this._onStudyCompleted.fire();
                                break;
                            case S.StudyStatusType.Error:
                                this._onStudyError.fire()
                        }
                    }))
                }
                isUserEditEnabled() {
                    return this._study.userEditEnabled()
                }
                setUserEditEnabled(e) {
                    this._study.setUserEditEnabled(e)
                }
                getInputsInfo() {
                    return (0, v.getStudyInputsInfo)(this._study.metaInfo())
                }
                getInputValues() {
                    const e = this._study.inputs({
                        symbolsForChartApi: !1,
                        asObject: !0
                    });
                    return Object.keys(e).map((t => {
                        const i = e[t];
                        return {
                            id: t,
                            value: (0, a.isObject)(i) ? i.v : i
                        }
                    }))
                }
                getStyleInfo() {
                    return (0, b.getStudyStylesInfo)(this._study.metaInfo())
                }
                getStyleValues() {
                    const {
                        styles: e,
                        bands: t,
                        filledAreas: i,
                        palettes: r,
                        graphics: n,
                        ohlcPlots: s,
                        filledAreasStyle: a
                    } = this._study.properties().state();
                    return {
                        styles: e,
                        bands: t,
                        filledAreas: i,
                        palettes: r,
                        graphics: n,
                        ohlcPlots: s,
                        filledAreasStyle: a
                    }
                }
                setInputValues(e) {
                    const t = this.getInputValues();
                    for (const i of e) {
                        void 0 !== t.find((e => e.id === i.id)) ? this._study.properties().childs().inputs.childs()[i.id].setValue(i.value) : console.warn(`There is no such input: "${i.id}"`)
                    }
                }
                mergeUp() {
                    this._model.isMergeUpAvailableForSource(this._study) && new d.MergeUpUndoCommand(this._model, this._study, null).redo()
                }
                mergeDown() {
                    this._model.isMergeDownAvailableForSource(this._study) && new d.MergeDownUndoCommand(this._model, this._study, null).redo()
                }
                unmergeUp() {
                    this._model.isUnmergeAvailableForSource(this._study) && new h.UnmergeUpUndoCommand(this._model, this._study, null).redo()
                }
                unmergeDown() {
                    this._model.isUnmergeAvailableForSource(this._study) && new h.UnmergeDownUndoCommand(this._model, this._study, null).redo()
                }
                onDataLoaded() {
                    return this._onStudyCompleted
                }
                onStudyError() {
                    return this._onStudyError
                }
                mergeUpWithUndo() {
                    this._model.isMergeUpAvailableForSource(this._study) && this._undoModel.mergeSourceUp(this._study)
                }
                mergeDownWithUndo() {
                    this._model.isMergeDownAvailableForSource(this._study) && this._undoModel.mergeSourceDown(this._study)
                }
                unmergeUpWithUndo() {
                    this._model.isUnmergeAvailableForSource(this._study) && this._undoModel.unmergeSourceUp(this._study)
                }
                unmergeDownWithUndo() {
                    this._model.isUnmergeAvailableForSource(this._study) && this._undoModel.unmergeSourceDown(this._study)
                }
                priceScale() {
                    return new p.PriceScaleApi(this._undoModel, (0, r.ensureNotNull)(this._study.priceScale()))
                }
                symbolSource() {
                    const e = (0, r.ensureNotNull)(this._study.symbolSource());
                    return {
                        symbol: e.symbol(),
                        currencyId: e.currency(),
                        unitId: e.unit()
                    }
                }
                currency() {
                    return this._study.currency()
                }
                changePriceScale(e) {
                    const t = (0, r.ensureNotNull)(this._model.paneForSource(this._model.mainSeries())),
                        i = (0, r.ensureNotNull)(this._model.paneForSource(this._study));
                    switch (e) {
                        case "no-scale":
                            (0, r.assert)(i.actionNoScaleIsEnabled(this._study), "Unable to leave a pane without any non-overlay price scale"), new u.MoveToNewPriceScaleUndoCommand(this._model, this._study, i, "overlay", null).redo();
                            break;
                        case "as-series":
                            (0, r.assert)(i === t, "Study should be on the main pane"), new u.MoveToExistingPriceScaleUndoCommand(this._model, this._study, i, this._model.mainSeries().priceScale(), null).redo();
                            break;
                        case "new-left":
                            new u.MoveToNewPriceScaleUndoCommand(this._model, this._study, i, "left", null).redo();
                            break;
                        case "new-right":
                            new u.MoveToNewPriceScaleUndoCommand(this._model, this._study, i, "right", null).redo();
                            break;
                        default:
                            const n = this._model.dataSourceForId(e);
                            if (null === n) throw new Error(`There is no study with entityId='${e}'`);
                            const s = i === this._model.paneForSource(n);
                            (0, r.assert)(s, "Both studies should be on the same pane");
                            const a = (0, r.ensureNotNull)(n.priceScale()),
                                o = (0, c.sourceNewCurrencyOnPinningToPriceScale)(this._study, a, this._model),
                                h = (0, m.sourceNewUnitOnPinningToPriceScale)(this._study, a, this._model);
                            new u.MoveToExistingPriceScaleUndoCommand(this._model, this._study, i, a, null).redo(), null !== o && new l.SetPriceScaleCurrencyUndoCommand(a, o, this._undoModel.chartWidget(), null).redo(), null !== h && new _.SetPriceScaleUnitUndoCommand(a, h, this._undoModel.chartWidget(), null).redo()
                    }
                }
                isVisible() {
                    return this._study.properties().childs().visible.value()
                }
                setVisible(e) {
                    this._study.properties().childs().visible.setValue(e)
                }
                bringToFront() {
                    this._model.bringToFront([this._study])
                }
                sendToBack() {
                    this._model.sendToBack([this._study])
                }
                applyOverrides(e) {
                    (0, o.applyOverridesToStudy)(this._study, e)
                }
                dataLength() {
                    return this._study.status().type !== S.StudyStatusType.Completed ? 0 : this._study.metaInfo().plots.length > 0 ? this._study.data().size() : this._model.mainSeries().bars().size()
                }
                isLoading() {
                    return this._study.isLoading()
                }
                properties() {
                    return this._study.properties()
                }
                async applyToEntireLayout() {
                    const e = new g.ActionsProvider(this._chartWidget),
                        t = (await e.contextMenuActionsForSources([this._study])).find((e => "applyStudyToEntireLayout" === e.id));
                    t && t.execute()
                }
                status() {
                    return { ...this._study.status()
                    }
                }
                title() {
                    return this._study.title()
                }
                symbolsResolved() {
                    return this._study.symbolsResolved()
                }
            }
        },
        591316: (e, t, i) => {
            "use strict";
            i.d(t, {
                getStudyInputsInfo: () => n
            });
            var r = i(777754);

            function n(e) {
                return void 0 === e.inputs ? [] : e.inputs.map((e => ({ ...e,
                    id: e.id,
                    localizedName: void 0 !== e.name ? r.t(e.name, {
                        context: "input"
                    }, i(788601)) : ""
                })))
            }
        },
        443403: (e, t, i) => {
            "use strict";
            i.d(t, {
                getStudyStylesInfo: () => n
            });
            var r = i(822914);

            function n(e) {
                const t = {};
                if (e.defaults) {
                    const i = (0, r.default)(e.defaults);
                    t.defaults = i
                }
                return void 0 !== e.plots && (t.plots = (0, r.default)(e.plots)), void 0 !== e.styles && (t.styles = (0, r.default)(e.styles)), void 0 !== e.bands && (t.bands = (0, r.default)(e.bands)), void 0 !== e.filledAreas && (t.filledAreas = (0, r.default)(e.filledAreas)), void 0 !== e.palettes && (t.palettes = (0, r.default)(e.palettes)), t
            }
        },
        656130: (e, t, i) => {
            "use strict";
            i.d(t, {
                generateChartUrl: () => n
            });
            var r = i(314802);

            function n(e) {
                const t = e.chartId ? `/chart/${e.chartId}/` : "/chart/",
                    i = new URL(t, location.href);
                return e.symbol && i.searchParams.append("symbol", e.symbol), e.interval && i.searchParams.append("interval", e.interval), e.style && i.searchParams.append("style", e.style), (0, r.urlWithMobileAppParams)(i.href)
            }
        },
        332450: (e, t, i) => {
            "use strict";
            i.d(t, {
                CLOSE_POPUPS_AND_DIALOGS_COMMAND: () => r,
                breakpointList: () => n
            });
            const r = "CLOSE_POPUPS_AND_DIALOGS_COMMAND",
                n = [1920, 1440, 1280, 1024, 768, 480, 0]
        },
        316478: (e, t, i) => {
            "use strict";
            i.d(t, {
                ForecastDialogController: () => a
            });
            var r = i(633457),
                n = i(583912);
            let s;
            class a extends r.DialogRenderer {
                constructor() {
                    super(...arguments), this._dialog = null, this._subscribe = e => {
                        this._setVisibility(e)
                    }
                }
                show(e) {
                    this._load(e).then((e => e.show()))
                }
                hide() {
                    var e;
                    null === (e = this._dialog) || void 0 === e || e.hide()
                }
                async canBeShown(e) {
                    const t = e || n.linking.symbol.value(),
                        r = new Set(["recommendation_mark", "pro_name"]),
                        s = await (async () => {
                            const {
                                snapshoter: e
                            } = await i.e(62495).then(i.bind(i, 960669));
                            return e().getSnapshot(t, r)
                        })();
                    return !("error" === s.status || !s.values.recommendation_mark)
                }
                static getInstance() {
                    return s || (s = new a), s
                }
                _load(e) {
                    return Promise.all([i.e(88230), i.e(81910), i.e(86256), i.e(7624), i.e(59333), i.e(91901), i.e(96972), i.e(75398), i.e(63737), i.e(36720), i.e(1428), i.e(1011), i.e(52701), i.e(48484), i.e(54063), i.e(82098), i.e(95248), i.e(56034), i.e(56652), i.e(52196), i.e(29652), i.e(75270), i.e(83593), i.e(36362), i.e(97107), i.e(43188), i.e(43452), i.e(79324), i.e(44421), i.e(2696), i.e(29388), i.e(16490), i.e(75514), i.e(11857), i.e(54205), i.e(87972), i.e(52769), i.e(85234), i.e(85080)]).then(i.bind(i, 231078)).then((t => {
                        var i, r;
                        return null === (i = this._dialog) || void 0 === i || i.hide(), null === (r = this._dialog) || void 0 === r || r.visible().unsubscribe(this._subscribe), this._dialog = new t.ForecastDialogRenderer(e), this._dialog.visible().subscribe(this._subscribe), this._dialog
                    }))
                }
            }
        },
        290382: (e, t, i) => {
            "use strict";
            i.d(t, {
                SymbolSearchUI: () => a
            });
            var r = i(650151),
                n = i(522227),
                s = i(583912);
            class a {
                async show(e) {
                    if (null !== a._provider) {
                        const e = await a._provider.getSymbol();
                        return s.linking.symbol.setValue(e.symbol), e
                    }
                    if (a._currentShowingInstance) throw new DOMException("SymbolSearchUI is already shown", "InvalidStateError");
                    try {
                        a._currentShowingInstance = this, a.preload();
                        const t = await a._implementation;
                        return (0, r.assert)(null !== t), new Promise((i => {
                            t.showDefaultSearchDialog({ ...e,
                                onSearchComplete: e => {
                                    i({
                                        symbol: e
                                    })
                                }
                            })
                        }))
                    } finally {
                        a._currentShowingInstance = null
                    }
                }
                static setProvider(e) {
                    this._provider = e
                }
                static preload() {
                    null === this._provider && null === this._implementation && (this._implementation = (0, n.loadNewSymbolSearch)())
                }
            }
            a._currentShowingInstance = null, a._provider = null, a._implementation = null
        },
        111495: e => {
            e.exports = {
                text: "text-zegfTT5o",
                paragraph: "paragraph-zegfTT5o",
                list: "list-zegfTT5o"
            }
        },
        472664: (e, t, i) => {
            "use strict";
            i.d(t, {
                backend: () => M
            });
            var r = {};
            i.r(r), i.d(r, {
                getCharts: () => g,
                getChartsCount: () => m,
                getDrawingTemplates: () => D,
                getStandardStudyTemplateContentById: () => I,
                getStudyTemplateContent: () => w,
                getStudyTemplateContentById: () => T,
                getStudyTemplatesList: () => b,
                invalidateStudyTemplatesList: () => y,
                loadChart: () => _,
                loadDrawingTemplate: () => k,
                removeChart: () => S,
                removeDrawingTemplate: () => L,
                removeStudyTemplate: () => C,
                removeStudyTemplateById: () => W,
                renameStudyTemplate: () => A,
                replaceStudyTemplate: () => P,
                saveChart: () => p,
                saveDrawingTemplate: () => E,
                saveStudyTemplate: () => f
            });
            i(823127);
            var n = i(656130),
                s = i(628763);
            const a = (0, i(272001).getLogger)("Lib.AsyncGzip"),
                o = [];
            var l = i(890740);

            function c(e) {
                if (e.ok) return e.json();
                throw new Error("not ok")
            }

            function h(e) {
                if (e.ok) return e.json();
                throw new Error("not ok")
            }
            var d = i(314802),
                u = i(823127);

            function g(e) {
                return new Promise(((t, i) => {
                    u.getJSON("/my-charts/", {
                        limit: e
                    }, t).fail(i)
                }))
            }

            function m(e, t) {
                u.getJSON("/api/v1/charts/count/", void 0, e).fail(t)
            }

            function _(e) {
                const t = (0, n.generateChartUrl)({
                        chartId: e.url
                    }),
                    i = document.createElement("a");
                i.href = t, !(0, d.isOnMobileAppPage)("new") && /^\/chart(\/|$)/.test(location.pathname) && (i.target = "_blank", i.rel = "noopener"), i.click()
            }

            function p(e, t, r, n, l) {
                return function(e) {
                    let t;
                    const r = new Promise(((r, n) => {
                        let a = setTimeout(n, 5e3, new Error("Loading timed out"));
                        t = o.pop() || new s.Worker(new URL(i.p + i.u(31482), i.b), {
                                name: "Async gzip worker"
                            }),
                            t.onerror = n, t.onmessageerror = n, t.onmessage = e => {
                                clearTimeout(a), "done" === e.data.type ? r(e.data.payload) : a = setTimeout(n, 3e4, new Error("Processing timed out"))
                            }, t.postMessage({
                                type: "do",
                                payload: e
                            })
                    }));
                    return r.then((() => {
                        o.length < 1 ? (delete t.onerror, delete t.onmessage, delete t.onmessageerror, o.push(t)) : t.terminate()
                    }), (e => {
                        a.logError(`Worker request failed: ${e.message}`), t.terminate()
                    })), r
                }(n.content).catch((() => null)).then((e => {
                    const t = new FormData;
                    for (const i in n) "content" === i && e ? t.append(i, new Blob([e], {
                        type: "application/gzip"
                    }), "blob.gz") : t.append(i, String(n[i]));
                    return fetch("/savechart/", {
                        method: "POST",
                        credentials: "same-origin",
                        body: t
                    })
                })).then((e => {
                    if (!e.ok) throw e;
                    return e.text()
                }))
            }

            function S(e) {
                return new Promise(((t, i) => {
                    u.post("/deletechart/", {
                        uid: [e]
                    }, (e => {
                        e.error ? i(e.error) : t()
                    }))
                }))
            }
            let v = null;

            function b() {
                return null === v && (v = (0, l.fetch)("/api/v1/study-templates", {
                    credentials: "same-origin"
                }).then(c).then((e => {
                    const t = new Set((e.standard || []).map((e => e.name))),
                        i = (e.custom || []).map((e => ({ ...e,
                            is_default: !1
                        })));
                    for (const e of i) t.delete(e.name);
                    const r = (e.standard || []).filter((e => t.has(e.name))).map((e => ({ ...e,
                        is_default: !0
                    })));
                    return [...i, ...r]
                }))), v
            }

            function y() {
                v = null
            }

            function f(e) {
                return t = {
                    name: e.name,
                    content: e.content,
                    meta_info: e.meta_info || {
                        indicators: []
                    }
                }, (0, l.fetch)("/api/v1/study-templates", {
                    credentials: "same-origin",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(t)
                }).then((e => {
                    if (e.ok) return e.json().then((e => ({
                        result: e
                    })));
                    switch (e.status) {
                        case 403:
                            return e.json().then((e => ({
                                error: e.code
                            })));
                        case 422:
                            return e.json().then((e => ({
                                error: e.code,
                                id: e.id
                            })));
                        default:
                            throw new Error("not ok")
                    }
                }));
                var t
            }
            async function w(e) {
                throw new Error("Not implemented")
            }
            async function C(e) {
                throw new Error("Not implemented")
            }

            function T(e, t) {
                (function(e) {
                    return (0, l.fetch)(`/api/v1/study-templates/${e}`, {
                        credentials: "same-origin"
                    }).then(c)
                })(e).then(t)
            }

            function I(e, t) {
                (function(e) {
                    return (0, l.fetch)(`/api/v1/study-templates/standard/${e}`, {
                        credentials: "same-origin"
                    }).then(c)
                })(e).then(t)
            }

            function W(e, t) {
                (function(e) {
                    return (0, l.fetch)(`/api/v1/study-templates/${e}`, {
                        credentials: "same-origin",
                        method: "DELETE"
                    }).then((e => {
                        if (!e.ok) throw new Error("not ok")
                    }))
                })(e).then(t)
            }

            function A(e, t, i) {
                (function(e, t) {
                    return (0, l.fetch)(`/api/v1/study-templates/${e}/rename/`, {
                        credentials: "same-origin",
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(t)
                    }).then(c)
                })(e, {
                    name: t
                }).then(i)
            }

            function P(e, t, i) {
                (function(e, t) {
                    return (0, l.fetch)(`/api/v1/study-templates/${e}`, {
                        credentials: "same-origin",
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(t)
                    }).then(c)
                })(e, {
                    name: t.name,
                    content: t.content,
                    meta_info: t.meta_info || {
                        indicators: []
                    }
                }).then(i)
            }

            function D(e) {
                return function(e) {
                    return (0, l.fetch)(`/drawing-templates/${e}/`, {
                        credentials: "same-origin"
                    }).then(h)
                }(e)
            }

            function E(e, t, i) {
                return function(e, t, i) {
                    const r = new FormData;
                    return r.append("name", t), r.append("tool", e), r.append("content", i), (0, l.fetch)("/save-drawing-template/", {
                        method: "POST",
                        credentials: "same-origin",
                        body: r
                    }).then(h)
                }(e, t, i)
            }

            function k(e, t) {
                return async function(e, t) {
                    const i = await (0, l.fetch)(`/drawing-template/${e}/?templateName=${encodeURIComponent(t)}`, {
                            credentials: "same-origin"
                        }),
                        r = await h(i);
                    return JSON.parse(r.content)
                }(e, t)
            }

            function L(e, t) {
                return function(e, t) {
                    const i = new FormData;
                    return i.append("name", t), i.append("tool", e), (0, l.fetch)("/remove-drawing-template/", {
                        method: "POST",
                        credentials: "same-origin",
                        body: i
                    }).then(h)
                }(e, t)
            }
            const M = r
        },
        569317: (e, t, i) => {
            "use strict";
            i.d(t, {
                INTERVALS: () => n
            });
            var r = i(777754);
            const n = [{
                name: "",
                label: r.t(null, {
                    context: "interval"
                }, i(537830))
            }, {
                name: "H",
                label: r.t(null, {
                    context: "interval"
                }, i(705285))
            }, {
                name: "D",
                label: r.t(null, {
                    context: "interval"
                }, i(306174))
            }, {
                name: "W",
                label: r.t(null, {
                    context: "interval"
                }, i(725042))
            }, {
                name: "M",
                label: r.t(null, {
                    context: "interval"
                }, i(179410))
            }];
            n.push({
                name: "R",
                label: r.t(null, {
                    context: "interval"
                }, i(635693))
            })
        },
        629902: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                openMobileChartPickerCommand: () => r,
                closeMobileChartPickerCommand: () => n
            });
            const r = "OPEN_MOBILE_CHART_PICKER_COMMAND",
                n = "CLOSE_MOBILE_CHART_PICKER_COMMAND"
        },
        646198: (e, t, i) => {
            "use strict";
            i.d(t, {
                CustomIntervalsService: () => d,
                customIntervalsServiceInstance: () => u
            });
            var r = i(62802),
                n = i(226722),
                s = i(405117),
                a = i(833813),
                o = i(552279),
                l = i(2741),
                c = i(991826),
                h = i(588565);
            class d extends l.AbstractJsonStoreService {
                constructor(e, t, i = []) {
                    super(e, t, "CUSTOM_INTERVALS_CHANGED", "IntervalWidget.intervals", i)
                }
                set(e, t) {
                    (0, s.trackGoProFeature)("customIntervals"), e.length < this.get().length ? super.set(e, t) : (0, o.runOrGoPro)((() => super.set(e, t)), a.ProductFeatures.CUSTOM_INTERVALS, {
                        feature: "customIntervals"
                    })
                }
                _serialize(e) {
                    return (0, h.uniq)(e.map(c.normalizeIntervalString))
                }
                _deserialize(e) {
                    return (0, h.uniq)((0, c.convertResolutionsFromSettings)(e).filter(c.isResolutionMultiplierValid).map(c.normalizeIntervalString))
                }
            }
            const u = new d(n.TVXWindowEvents, r)
        },
        157688: (e, t, i) => {
            "use strict";
            i.d(t, {
                IntervalsService: () => c
            });
            var r = i(583912),
                n = i(869403),
                s = i.n(n),
                a = i(646198),
                o = i(569317),
                l = i(991826);
            class c {
                constructor(e) {
                    this._customIntervalsService = a.customIntervalsServiceInstance, this._supportedIntervalsMayChange = new(s()), this._fireSupportedIntervalsMayChange = () => {
                        this._supportedIntervalsMayChange.fire()
                    }, this._chartApiInstance = e, r.linking.supportedResolutions.subscribe(this._fireSupportedIntervalsMayChange), r.linking.range.subscribe(this._fireSupportedIntervalsMayChange), r.linking.seconds.subscribe(this._fireSupportedIntervalsMayChange), r.linking.ticks.subscribe(this._fireSupportedIntervalsMayChange), r.linking.intraday.subscribe(this._fireSupportedIntervalsMayChange), r.linking.dataFrequencyResolution.subscribe(this._fireSupportedIntervalsMayChange)
                }
                destroy() {
                    r.linking.supportedResolutions.unsubscribe(this._fireSupportedIntervalsMayChange), r.linking.range.unsubscribe(this._fireSupportedIntervalsMayChange), r.linking.seconds.unsubscribe(this._fireSupportedIntervalsMayChange), r.linking.ticks.unsubscribe(this._fireSupportedIntervalsMayChange), r.linking.intraday.unsubscribe(this._fireSupportedIntervalsMayChange),
                        r.linking.dataFrequencyResolution.unsubscribe(this._fireSupportedIntervalsMayChange)
                }
                getDefaultIntervals() {
                    return null === this._chartApiInstance ? [] : this._chartApiInstance.defaultResolutions().map(l.normalizeIntervalString)
                }
                getCustomIntervals() {
                    return this._customIntervalsService.get()
                }
                add(e, t, i) {
                    if (!window.user.is_pro && i) return i(), null;
                    if (!this.isValidInterval(e, t)) return null;
                    const r = (0, l.normalizeIntervalString)(`${e}${t}`),
                        n = this.getCustomIntervals();
                    return this._isIntervalDefault(r) || n.includes(r) ? null : (this._customIntervalsService.set((0, l.sortResolutions)([...n, r])), r)
                }
                remove(e) {
                    this._customIntervalsService.set(this.getCustomIntervals().filter((t => t !== e)))
                }
                isValidInterval(e, t) {
                    return (0, l.isResolutionMultiplierValid)(`${e}${t}`)
                }
                isSupportedInterval(e) {
                    return (0, l.isAvailable)(e)
                }
                supportedIntervalsMayChange() {
                    return this._supportedIntervalsMayChange
                }
                getOnChange() {
                    return this._customIntervalsService.getOnChange()
                }
                getPossibleIntervals() {
                    return o.INTERVALS
                }
                getResolutionUtils() {
                    return {
                        getMaxResolutionValue: l.getMaxResolutionValue,
                        getTranslatedResolutionModel: l.getTranslatedResolutionModel,
                        mergeResolutions: l.mergeResolutions,
                        sortResolutions: l.sortResolutions
                    }
                }
                _isIntervalDefault(e) {
                    return this.getDefaultIntervals().includes(e)
                }
            }
        },
        675791: (e, t, i) => {
            "use strict";
            i.d(t, {
                RangeBinding: () => a
            });
            var r = i(869403),
                n = i.n(r),
                s = i(495046);
            class a {
                constructor(e) {
                    this._state = {
                        ranges: []
                    }, this._change = new(n()), this._rangeChangedListenerBound = this._onRangeChanged.bind(this);
                    const {
                        chartWidget: t
                    } = this._context = e;
                    t.withModel(null, (() => {
                        const e = t.model(),
                            i = e.mainSeries();
                        i.onStatusChanged().subscribe(this, this._updateAvailableRanges), s.enabled("update_timeframes_set_on_symbol_resolve") && i.dataEvents().symbolResolved().subscribe(this, this._updateAvailableRanges), i.priceScale().properties().childs().lockScale.subscribe(this, this._updateAvailableRanges);
                        const r = e.model().appliedTimeFrame();
                        r.subscribe(this._rangeChangedListenerBound), this._rangeChangedListenerBound(r.value()), this._updateAvailableRanges()
                    }))
                }
                state() {
                    return this._state
                }
                onChange() {
                    return this._change
                }
                selectRange(e) {
                    this._setState({
                        activeRange: e.value.value
                    });
                    const {
                        chartWidgetCollection: t
                    } = this._context, i = {
                        val: e.value,
                        res: e.targetResolution
                    };
                    t.setTimeFrame(i)
                }
                destroy() {
                    const {
                        chartWidget: e
                    } = this._context;
                    e.withModel(null, (() => {
                        const t = e.model(),
                            i = t.mainSeries();
                        i.onStatusChanged().unsubscribe(this, this._updateAvailableRanges), s.enabled("update_timeframes_set_on_symbol_resolve") && i.dataEvents().symbolResolved().unsubscribe(this, this._updateAvailableRanges), i.priceScale().properties().childs().lockScale.unsubscribe(this, this._updateAvailableRanges), t.model().appliedTimeFrame().unsubscribe(this._rangeChangedListenerBound)
                    })), this._change.destroy()
                }
                _setState(e) {
                    this._state = Object.assign({}, this._state, e), this._change.fire(this._state)
                }
                _onRangeChanged(e) {
                    let t;
                    null !== e && "period-back" === e.val.type && (t = e.val.value), this._setState({
                        activeRange: t
                    })
                }
                _updateAvailableRanges() {
                    const {
                        availableTimeFrames: e,
                        chartWidget: t
                    } = this._context;
                    if (!t.hasModel()) return;
                    const i = t.model().mainSeries(),
                        r = i.status();
                    if (2 === r || 1 === r) return;
                    const n = e(i.symbolInfo(), i.status());
                    0 !== n.length && this._setState({
                        ranges: n
                    })
                }
            }
        },
        19334: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                supportedLineTools: () => n
            });
            var r = i(125226);
            const n = {
                cursor: {
                    name: "cursor",
                    onlySelectable: !0
                },
                dot: {
                    name: "dot",
                    onlySelectable: !0
                },
                arrow_cursor: {
                    name: "arrow",
                    onlySelectable: !0
                },
                eraser: {
                    name: "eraser",
                    onlySelectable: !0
                },
                measure: {
                    name: "measure",
                    onlySelectable: !0
                },
                zoom: {
                    name: "zoom",
                    onlySelectable: !0
                },
                brush: {
                    name: "LineToolBrush"
                },
                highlighter: {
                    name: "LineToolHighlighter"
                },
                text: {
                    name: "LineToolText"
                },
                anchored_text: {
                    name: "LineToolTextAbsolute",
                    isAnchored: !0
                },
                note: {
                    name: "LineToolNote"
                },
                anchored_note: {
                    name: "LineToolNoteAbsolute",
                    isAnchored: !0
                },
                signpost: {
                    name: "LineToolSignpost"
                },
                callout: {
                    name: "LineToolCallout"
                },
                balloon: {
                    name: "LineToolBalloon"
                },
                comment: {
                    name: "LineToolComment"
                },
                arrow_up: {
                    name: "LineToolArrowMarkUp"
                },
                arrow_down: {
                    name: "LineToolArrowMarkDown"
                },
                arrow_left: {
                    name: "LineToolArrowMarkLeft"
                },
                arrow_right: {
                    name: "LineToolArrowMarkRight"
                },
                price_label: {
                    name: "LineToolPriceLabel"
                },
                price_note: {
                    name: "LineToolPriceNote"
                },
                arrow_marker: {
                    name: "LineToolArrowMarker"
                },
                flag: {
                    name: "LineToolFlagMark"
                },
                vertical_line: {
                    name: "LineToolVertLine"
                },
                horizontal_line: {
                    name: "LineToolHorzLine"
                },
                cross_line: {
                    name: "LineToolCrossLine"
                },
                horizontal_ray: {
                    name: "LineToolHorzRay"
                },
                trend_line: {
                    name: "LineToolTrendLine"
                },
                info_line: {
                    name: "LineToolInfoLine"
                },
                trend_angle: {
                    name: "LineToolTrendAngle"
                },
                arrow: {
                    name: "LineToolArrow"
                },
                ray: {
                    name: "LineToolRay"
                },
                extended: {
                    name: "LineToolExtended"
                },
                parallel_channel: {
                    name: "LineToolParallelChannel"
                },
                disjoint_angle: {
                    name: "LineToolDisjointAngle"
                },
                flat_bottom: {
                    name: "LineToolFlatBottom"
                },
                pitchfork: {
                    name: "LineToolPitchfork"
                },
                schiff_pitchfork_modified: {
                    name: "LineToolSchiffPitchfork"
                },
                schiff_pitchfork: {
                    name: "LineToolSchiffPitchfork2"
                },
                inside_pitchfork: {
                    name: "LineToolInsidePitchfork"
                },
                pitchfan: {
                    name: "LineToolPitchfan"
                },
                gannbox: {
                    name: "LineToolGannSquare"
                },
                gannbox_square: {
                    name: "LineToolGannComplex"
                },
                gannbox_fixed: {
                    name: "LineToolGannFixed"
                },
                gannbox_fan: {
                    name: "LineToolGannFan"
                },
                fib_retracement: {
                    name: "LineToolFibRetracement"
                },
                fib_trend_ext: {
                    name: "LineToolTrendBasedFibExtension"
                },
                fib_speed_resist_fan: {
                    name: "LineToolFibSpeedResistanceFan"
                },
                fib_timezone: {
                    name: "LineToolFibTimeZone"
                },
                fib_trend_time: {
                    name: "LineToolTrendBasedFibTime"
                },
                fib_circles: {
                    name: "LineToolFibCircles"
                },
                fib_spiral: {
                    name: "LineToolFibSpiral"
                },
                fib_speed_resist_arcs: {
                    name: "LineToolFibSpeedResistanceArcs"
                },
                fib_wedge: {
                    name: "LineToolFibWedge"
                },
                fib_channel: {
                    name: "LineToolFibChannel"
                },
                xabcd_pattern: {
                    name: "LineTool5PointsPattern"
                },
                cypher_pattern: {
                    name: "LineToolCypherPattern"
                },
                abcd_pattern: {
                    name: "LineToolABCD"
                },
                triangle_pattern: {
                    name: "LineToolTrianglePattern"
                },
                "3divers_pattern": {
                    name: "LineToolThreeDrivers"
                },
                head_and_shoulders: {
                    name: "LineToolHeadAndShoulders"
                },
                elliott_impulse_wave: {
                    name: "LineToolElliottImpulse"
                },
                elliott_triangle_wave: {
                    name: "LineToolElliottTriangle"
                },
                elliott_triple_combo: {
                    name: "LineToolElliottTripleCombo"
                },
                elliott_correction: {
                    name: "LineToolElliottCorrection"
                },
                elliott_double_combo: {
                    name: "LineToolElliottDoubleCombo"
                },
                cyclic_lines: {
                    name: "LineToolCircleLines"
                },
                time_cycles: {
                    name: "LineToolTimeCycles"
                },
                sine_line: {
                    name: "LineToolSineLine"
                },
                long_position: {
                    name: "LineToolRiskRewardLong"
                },
                short_position: {
                    name: "LineToolRiskRewardShort"
                },
                forecast: {
                    name: "LineToolPrediction"
                },
                date_range: {
                    name: "LineToolDateRange"
                },
                price_range: {
                    name: "LineToolPriceRange"
                },
                date_and_price_range: {
                    name: "LineToolDateAndPriceRange"
                },
                bars_pattern: {
                    name: "LineToolBarsPattern"
                },
                ghost_feed: {
                    name: "LineToolGhostFeed"
                },
                projection: {
                    name: "LineToolProjection"
                },
                rectangle: {
                    name: "LineToolRectangle"
                },
                rotated_rectangle: {
                    name: "LineToolRotatedRectangle"
                },
                circle: {
                    name: "LineToolCircle"
                },
                ellipse: {
                    name: "LineToolEllipse"
                },
                triangle: {
                    name: "LineToolTriangle"
                },
                polyline: {
                    name: "LineToolPolyline"
                },
                path: {
                    name: "LineToolPath"
                },
                curve: {
                    name: "LineToolBezierQuadro"
                },
                double_curve: {
                    name: "LineToolBezierCubic"
                },
                arc: {
                    name: "LineToolArc"
                },
                icon: {
                    name: "LineToolIcon"
                },
                emoji: {
                    name: "LineToolEmoji"
                },
                sticker: {
                    name: "LineToolSticker"
                },
                regression_trend: {
                    name: "LineToolRegressionTrend"
                },
                fixed_range_volume_profile: {
                    name: "LineToolFixedRangeVolumeProfile"
                }
            }; {
                const e = n;
                e.anchored_vwap = {
                    name: "LineToolAnchoredVWAP"
                }, (0, r.isFeatureEnabled)("hide_tweet_drawingtool") || (e.tweet = {
                    name: "LineToolTweet"
                }), e.idea = {
                    name: "LineToolIdea"
                }, e.image = {
                    name: "LineToolImage"
                }
            }
        },
        75733: (e, t, i) => {
            "use strict";
            i.d(t, {
                changedAll: () => s,
                ChartChangesWatcher: () => a
            });
            var r = i(869403),
                n = i.n(r);
            const s = 3;
            class a {
                constructor(e, t, i) {
                    this._undoHistoryHasChanges = !1, this._changesMask = 0, this._recursiveLoopingGuard = !1, this._handleMetainfoChanged = () => {
                        this._changesMask = 1 | this._changesMask
                    }, this._recalculateHaveChanges = (e, t) => {
                        if (!this._recursiveLoopingGuard) try {
                            this._recursiveLoopingGuard = !0;
                            const e = this._undoHistoryHasChanges ? 1 : 0;
                            let i = this._lineToolsHaveChanges.value() ? 2 : 0;
                            const r = this._changesMask;
                            this._changesMask = e | i, r !== this._changesMask && (this._changesMask && (this._chartWidgetCollection.getAll().forEach((e => {
                                var i;
                                null === (i = e.lineToolsSynchronizer()) || void 0 === i || i.markAsValidatedBecuaseOfSavingToContent(!!t)
                            })), i = this._lineToolsHaveChanges.value() ? 2 : 0, this._changesMask = e | i), this._onValueChanged.fire(0 !== this._changesMask))
                        } finally {
                            this._recursiveLoopingGuard = !1
                        }
                    }, this._chartWidgetCollection = e, this._undoHistory = e.undoHistory, this._lineToolsHaveChanges = e.lineToolsSynchronizerHasChanges, this._chartSaver = t, this._globalEvents = i, this._onValueChanged = new(n()), this._subscribe()
                }
                destroy() {
                    this._unsubscribe(), this._onValueChanged.destroy()
                }
                changes() {
                    return this._changesMask
                }
                hasChanges() {
                    return this._changesMask > 0
                }
                getOnChange() {
                    return this._onValueChanged
                }
                _subscribe() {
                    this._globalEvents.subscribe("chart_loaded", this._handleChartLoaded, this), this._globalEvents.subscribe("chart_migrated", this._handleChartMigrated, this), this._undoHistory.undoStack().onChange().subscribe(this, this._handleUndoHistoryChange), this._chartSaver.chartSaved().subscribe(this, this._handleChartSaved), this._lineToolsHaveChanges.subscribe(this._recalculateHaveChanges);
                    this._chartWidgetCollection.metaInfo.name.subscribe(this._handleMetainfoChanged)
                }
                _unsubscribe() {
                    this._globalEvents.unsubscribe("chart_loaded", this._handleChartLoaded, this), this._globalEvents.unsubscribe("chart_migrated", this._handleChartMigrated, this), this._undoHistory.undoStack().onChange().unsubscribe(this, this._handleUndoHistoryChange), this._chartSaver.chartSaved().unsubscribe(this, this._handleChartSaved), this._lineToolsHaveChanges.unsubscribe(this._recalculateHaveChanges);
                    this._chartWidgetCollection.metaInfo.name.unsubscribe(this._handleMetainfoChanged)
                }
                _setUndoHistoryHasChanges(e, t) {
                    this._undoHistoryHasChanges = e, this._recalculateHaveChanges(e, t)
                }
                _handleChartLoaded() {
                    this._setUndoHistoryHasChanges(!1)
                }
                _handleUndoHistoryChange(e) {
                    e && !e.customFlag("doesnt_affect_save") && this._setUndoHistoryHasChanges(!0)
                }
                _handleChartMigrated() {
                    this._setUndoHistoryHasChanges(!0)
                }
                _handleChartSaved(e) {
                    e && this._setUndoHistoryHasChanges(!1, !0)
                }
            }
        },
        699134: (e, t, i) => {
            "use strict";
            i.d(t, {
                ChartWidgetApiBase: () => k
            });
            var r = i(650151),
                n = i(777754),
                s = i(683890),
                a = i(568450),
                o = i(211800),
                l = i(666100),
                c = i(119460);
            class h {
                constructor(e) {
                    this._timeScale = e
                }
                coordinateToTime(e) {
                    const t = this._timeScale.coordinateToIndex(e);
                    return this._timeScale.indexToTimePoint(t)
                }
                barSpacingChanged() {
                    return this._timeScale.barSpacingChanged()
                }
                rightOffsetChanged() {
                    return this._timeScale.rightOffsetChanged()
                }
                setRightOffset(e) {
                    this._timeScale.setRightOffset(e)
                }
                setBarSpacing(e) {
                    this._timeScale.setBarSpacing(e)
                }
                barSpacing() {
                    return this._timeScale.barSpacing()
                }
                rightOffset() {
                    return this._timeScale.rightOffset()
                }
                width() {
                    return this._timeScale.width()
                }
                defaultRightOffset() {
                    return this._timeScale.defaultRightOffset().spawn()
                }
                defaultRightOffsetPercentage() {
                    return this._timeScale.defaultRightOffsetPercentage().spawn()
                }
                usePercentageRightOffset() {
                    return this._timeScale.usePercentageRightOffset().spawn()
                }
                isEmpty() {
                    return this._timeScale.isEmpty()
                }
                scrollToFirstBar(e) {
                    this._timeScale.scrollToFirstBar(e)
                }
                scrollToRealtime(e) {
                    this._timeScale.scrollToRealtime(!1, e)
                }
            }
            var d = i(869403),
                u = i.n(d),
                g = i(726262);
            const m = new s.TranslatedString("change timezone", n.t(null, void 0, i(820505)));
            class _ {
                constructor(e) {
                    this._onTimezoneChanged = new(u()), this._chartWidget = e, this._timezoneProperty = e.properties().childs().timezone, this._timezoneProperty.subscribe(this, (e => {
                        this._onTimezoneChanged.fire(e.value())
                    })), e.onAboutToBeDestroyed().subscribe(this, (() => {
                        this._timezoneProperty.unsubscribeAll(this)
                    }), !0)
                }
                availableTimezones() {
                    return g.availableTimezones
                }
                getTimezone() {
                    const e = this._timezoneProperty.value();
                    return (0, r.ensureDefined)(g.availableTimezones.find((t => t.id === e)))
                }
                setTimezone(e, t) {
                    (0, r.assert)((0, g.timezoneIsAvailable)(e), `Incorrect timezone: ${e}`), (null == t ? void 0 : t.disableUndo) ? this._timezoneProperty.setValue(e): this._chartWidget.model().setProperty(this._timezoneProperty, e, m)
                }
                onTimezoneChanged() {
                    return this._onTimezoneChanged
                }
            }
            var p = i(675791);
            class S {
                constructor(e) {
                    this._drawer = null, this._context = e, this._rangeBindings = new p.RangeBinding(e)
                }
                drawer() {
                    return Promise.all([i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(7624), i.e(59333), i.e(12275), i.e(33335), i.e(91901), i.e(83772), i.e(71140), i.e(33287), i.e(6092), i.e(63737), i.e(1428), i.e(1011), i.e(52701), i.e(45639), i.e(28955), i.e(84704), i.e(67177), i.e(40642), i.e(59415), i.e(33046), i.e(66339), i.e(4115), i.e(94696), i.e(75514), i.e(28557), i.e(68985), i.e(70345), i.e(58130), i.e(91581), i.e(8866)]).then(i.bind(i, 151006)).then((e => (null === this._drawer && (this._drawer = new e.DateRangeDrawerApi(this._context)), this._drawer)))
                }
                state() {
                    return this._rangeBindings.state()
                }
                onChange() {
                    return this._rangeBindings.onChange()
                }
                selectRange(e) {
                    this._rangeBindings.selectRange(e)
                }
                goToTime(e) {
                    const t = this._context.chartWidget.model().model();
                    t.gotoTime(e).then((e => {
                        const i = t.mainSeries();
                        void 0 === e ? i.clearGotoDateResult() : i.setGotoDateResult(e)
                    }))
                }
            }
            var v = i(575089),
                b = i(210542),
                y = i(694475),
                f = i(200177);

            function w(e, t) {
                const i = () => {
                        e.completed().unsubscribe(null, r), t(!1)
                    },
                    r = () => {
                        e.error().unsubscribe(null, i), t(!0)
                    };
                e.completed().subscribe(null, i, !0), e.error().subscribe(null, r, !0)
            }
            var C = i(651723),
                T = i(254204),
                I = i(108184),
                W = i(480071),
                A = i(19334);
            const P = new s.TranslatedString("change price to bar ratio", n.t(null, void 0, i(569510))),
                D = new s.TranslatedString("toggle lock scale", n.t(null, void 0, i(121203))),
                E = new s.TranslatedString("change series style", n.t(null, void 0, i(53438)));
            class k {
                constructor(e, t) {
                    this._visibleBarsChanged = new(u()), this._crosshairMoved = new(u()), this._ranges = null, this._alignerResolution = a.Interval.parse(""), this._alignerSymbolInfo = null, this._dwmAligner = null, this._chartWidget = e, this._activateChart = t, this._timezoneApi = new _(e), this._chartWidget.withModel(this, (() => {
                        this._chartWidget.model().crossHairSource().moved().subscribe(this, this._onCrosshairMoved)
                    }))
                }
                getPriceToBarRatio() {
                    return this._chartWidget.model().model().mainSeriesScaleRatioProperty().value()
                }
                setPriceToBarRatio(e, t) {
                    const i = this._chartWidget.model(),
                        r = i.model(),
                        n = r.mainSeriesScaleRatioProperty();
                    (null == t ? void 0 : t.disableUndo) ? new f.SetScaleRatioPropertiesCommand(n, e, null, r).redo(): i.setScaleRatioProperty(n, e, P)
                }
                isPriceToBarRatioLocked() {
                    return this._chartWidget.model().model().mainSeries().priceScale().isLockScale()
                }
                setPriceToBarRatioLocked(e, t) {
                    const i = this._chartWidget.model(),
                        r = i.model(),
                        n = r.mainSeries().priceScale();
                    (null == t ? void 0 : t.disableUndo) ? new y.SetPriceScaleModeCommand({
                        lockScale: e
                    }, n, null, r).redo(): i.setPriceScaleMode({
                        lockScale: e
                    }, n, D)
                }
                onDataLoaded() {
                    return this._makeSubscriptionFromDelegate(this._chartWidget.model().mainSeries().dataEvents().completed())
                }
                onSymbolChanged() {
                    return this._makeSubscriptionFromDelegate(this._chartWidget.model().mainSeries().dataEvents().symbolResolved())
                }
                onIntervalChanged() {
                    return this._makeSubscriptionFromDelegate(this._chartWidget.model().mainSeries().onIntervalChanged())
                }
                onVisibleRangeChanged() {
                    return this._makeSubscriptionFromDelegate(this._visibleBarsChanged)
                }
                onChartTypeChanged() {
                    return this._makeSubscriptionFromDelegate(this._chartWidget.model().mainSeries().onStyleChanged())
                }
                onSeriesTimeframe() {
                    return this._makeSubscriptionFromDelegate(this._chartWidget.model().mainSeries().dataEvents().seriesTimeFrame())
                }
                whenChartReady(e) {
                    this._chartWidget.withModel(this, e)
                }
                crossHairMoved() {
                    return this._makeSubscriptionFromDelegate(this._crosshairMoved)
                }
                setSymbol(e, t) {
                    if (e === this.symbol()) return void(null == t || t());
                    const i = e => {
                            !e && t && t()
                        },
                        r = this._chartWidget.model().mainSeries().dataEvents();
                    t && w(r, i), this._activateChart(), this._chartWidget.setSymbol(e)
                }
                setResolution(e, t) {
                    let i = a.Interval.normalize(e);
                    if (null !== i && (i = this._chartWidget.model().mainSeries().getSupportedResolution(i)), null === i || i === this.resolution()) return void(null == t || t());
                    const r = e => {
                            !e && t && t()
                        },
                        n = this._chartWidget.model().mainSeries().dataEvents();
                    t && w(n, r), this._activateChart(), this._chartWidget.setResolution(i)
                }
                setChartType(e, t) {
                    const i = this._chartWidget.model().mainSeries().properties().childs().style;
                    if (i.value() === e) return void(null == t || t());
                    const r = e => {
                            !e && t && t()
                        },
                        n = this._chartWidget.model().mainSeries().dataEvents();
                    t && w(n, r), this._chartWidget.model().setChartStyleProperty(i, e, E)
                }
                getAllStudies() {
                    return this._chartWidget.model().model().allStudies(!0).map(b.studyEntityInfo)
                }
                getAllPanesHeight() {
                    const e = this._chartWidget.model().model().panes();
                    if (this._chartWidget.isMaximizedPane()) {
                        let t = 0,
                            i = 0;
                        e.forEach((e => {
                            t += e.height(), i += e.stretchFactor()
                        }));
                        const r = i / t;
                        return e.map((e => Math.round(e.stretchFactor() / r * 100) / 100))
                    }
                    return e.map((e => e.height()))
                }
                setAllPanesHeight(e) {
                    const t = this._chartWidget.model().model(),
                        i = t.panes();
                    (0, r.assert)(i.length === e.length, "There`s a mismatch between the number of heights you provided and the number of panes.");
                    const n = i.reduce(((e, t) => e + t.stretchFactor()), 0) / e.reduce(((e, t) => e + t));
                    e.forEach(((e, t) => {
                        const r = e * n;
                        i[t].setStretchFactor(r)
                    })), t.fullUpdate()
                }
                maximizeChart() {
                    this._chartWidget.getResizerDetacher().requestFullscreen()
                }
                restoreChart() {
                    this._chartWidget.getResizerDetacher().exitFullscreen()
                }
                sessions() {
                    return this._chartWidget.model().model().sessions()
                }
                getTimeScaleLogicalRange() {
                    return this._chartWidget.model().timeScale().logicalRange()
                }
                createStudy(e, t, i, r, n, s) {
                    if ("function" == typeof n) return console.warn('"createStudy" does not take "callback" parameter anymore'), Promise.resolve(null);
                    if (s = s || {}, "string" != typeof e) return this._createStudy(e);
                    if (s.checkLimit && !this._chartWidget.model().canCreateStudy()) return (0, T.showTooManyStudiesNotice)(), Promise.resolve(null);
                    e = e.toLowerCase();
                    const a = s.disableUndo ? this._chartWidget.model().model() : this._chartWidget.model(),
                        l = I.StudyMetaInfo.findStudyMetaInfoByDescription(a.studiesMetaData(), e),
                        c = a.createStudyInserter({
                            type: "java",
                            studyId: l.id
                        }, []);
                    if (c.setForceOverlay(!!t), s.priceScale && c.setPreferredPriceScale(function(e) {
                            switch (e) {
                                case "no-scale":
                                    return "overlay";
                                case "as-series":
                                    return "as-series";
                                case "new-left":
                                    return "left";
                                case "new-right":
                                    return "right";
                                default:
                                    throw new Error('The pricescale "' + e + '" is invalid, the only valid options are "no-scale", "as-series", "new-left" and "new-right".')
                            }
                        }(s.priceScale)), s.allowChangeCurrency && c.setAllowChangeCurrency(!0),
                        s.allowChangeUnit && c.setAllowChangeUnit(!0), Array.isArray(r)) {
                        console.warn("Passing study inputs as an ordered array is now deprecated. Please use an object where keys correspond to the inputs of your study instead.");
                        const e = {};
                        for (let t = 0; t < l.inputs.length; ++t) e[l.inputs[t].id] = r[t];
                        r = e
                    }
                    return c.insert((() => Promise.resolve({
                        inputs: r || {},
                        parentSources: []
                    }))).then((e => (n && (0, o.applyOverridesToStudy)(e, n), i && e.setUserEditEnabled(!1), e.id())))
                }
                symbolExt() {
                    const e = this._chartWidget.model().mainSeries().symbolInfo();
                    return null === e ? null : {
                        symbol: e.name,
                        full_name: e.full_name,
                        exchange: e.exchange,
                        description: e.description,
                        type: e.type,
                        pro_name: e.pro_name,
                        typespecs: e.typespecs,
                        delay: e.delay
                    }
                }
                getVisibleRange() {
                    const e = {
                            from: 0,
                            to: 0
                        },
                        t = this._chartWidget.model().timeScale();
                    if (t.isEmpty()) return e;
                    const i = t.coordinateToVisibleIndex(0),
                        n = t.coordinateToVisibleIndex(t.width() - 1),
                        s = this._convertIndexToPublicTime(n);
                    if (null === s) return e;
                    const a = Math.max((0, r.ensureNotNull)(t.points().range().value()).firstIndex, i);
                    return e.from = (0, r.ensureNotNull)(this._convertIndexToPublicTime(a)), e.to = s, e
                }
                getTimezoneApi() {
                    return this._timezoneApi
                }
                exportData(e) {
                    const t = { ...e
                    };
                    return void 0 !== t.from && (t.from = this._convertTimeFromPublic(t.from)), void 0 !== t.to && (t.to = this._convertTimeFromPublic(t.to)), Promise.reject("Data export is not supported")
                }
                isSelectBarRequested() {
                    return this._chartWidget.selectPointMode().value() !== W.SelectPointMode.None
                }
                barTimeToEndOfPeriod(e) {
                    const t = this._prepareEndOfPeriodArgs();
                    return function(e, t, i) {
                        if (i.isDays()) return t;
                        if (e.moveTo(1e3 * t), i.isIntraday()) {
                            const i = e.indexOfBar(1e3 * t);
                            if (i < 0) throw new Error(`${t} is out of the instrument session `);
                            return e.endOfBar(i) / 1e3
                        }
                        return e.startOfBar(c.SessionStage.LASTBAR_SESSION) / 1e3
                    }(t.barBuilder, e, t.intervalObj)
                }
                endOfPeriodToBarTime(e) {
                    const t = this._prepareEndOfPeriodArgs();
                    return function(e, t, i) {
                        if (i.isDays()) return t;
                        const r = 1e3 * t - 1;
                        if (e.moveTo(r), i.isIntraday()) {
                            const i = e.indexOfBar(r);
                            if (i < 0) throw new Error(`${t} is out of the instrument session `);
                            return e.startOfBar(i) / 1e3
                        }
                        return e.startOfBar(0) / 1e3
                    }(t.barBuilder, e, t.intervalObj)
                }
                createAnchoredShape(e, t) {
                    if (!0 !== A.supportedLineTools[t.shape].isAnchored) return console.warn(`${t.shape} is not an anchored shape. It can be created using createShape or createMultipointShape`), null;
                    const i = this._chartWidget.model().model(),
                        r = i.mainSeries();
                    if (i.timeScale().isEmpty()) return null;
                    const n = void 0 !== t.ownerStudyId ? i.dataSourceForId(t.ownerStudyId) : r,
                        s = this._convertPositionPercentToPricedPoint(e, n);
                    return null === s ? null : this.createMultipointShape([s], t)
                }
                properties() {
                    return this._chartWidget.properties()
                }
                setBarSpacing(e) {
                    this._chartWidget.model().timeScale().setBarSpacing(e)
                }
                scrollChartByBar(e) {
                    this._chartWidget.model().scrollChartByBar(e)
                }
                mergeAllScales(e) {
                    this._chartWidget.model().mergeAllScales(e)
                }
                chartPainted() {
                    return this._chartWidget.chartPainted()
                }
                applyOverrides(e) {
                    this._chartWidget.applyOverrides(e)
                }
                addOverlayStudy(e, t, i) {
                    return this._chartWidget.addOverlayStudy(e, t, i)
                }
                lineToolsSynchronizer() {
                    return this._chartWidget.lineToolsSynchronizer()
                }
                ranges() {
                    return null === this._ranges && (this._ranges = new S({
                        chartWidget: this._chartWidget,
                        chartWidgetCollection: this._chartWidget.chartWidgetCollection(),
                        availableTimeFrames: v.availableTimeFrames
                    })), this._ranges
                }
                getTimeScale() {
                    return new h(this._chartWidget.model().timeScale())
                }
                _destroy() {
                    this._chartWidget.hasModel() && this._chartWidget.model().crossHairSource().moved().unsubscribeAll(this)
                }
                _createStudy(e) {
                    return new Promise(((t, i) => {
                        this._chartWidget.insertStudy(e, []).then((e => {
                            null === e ? i("Failed to create study") : t(e.id())
                        }))
                    }))
                }
                _convertTimeToPublic(e) {
                    const t = this._getSeriesAligner();
                    return null !== t ? t.timeToExchangeTradingDay(1e3 * e) / 1e3 : e
                }
                _convertIndexToPublicTime(e) {
                    const t = this._chartWidget.model(),
                        i = t.timeScale();
                    if (i.isEmpty()) return null;
                    const n = i.points(),
                        {
                            firstIndex: s,
                            lastIndex: a
                        } = (0, r.ensureNotNull)(n.range().value());
                    let o = null;
                    if (s <= e && e <= a) o = n.valueAt(e);
                    else if (e > a) {
                        const n = t.mainSeries().syncModel();
                        if (null !== n) {
                            const t = (0, r.ensureNotNull)(i.indexToTimePoint(a));
                            o = n.projectTime(t, e - a)
                        }
                    }
                    return null !== o && (o = this._convertTimeToPublic(o)), o
                }
                _getDefaultCreateMultipointShapeOptions() {
                    return {
                        filled: !0
                    }
                }
                _convertPositionPercentToPricedPoint(e, t) {
                    const i = this._chartWidget.model().timeScale(),
                        r = t.priceScale(),
                        n = t.firstValue();
                    if (null == n || !isFinite(n) || null === r) return null;
                    const s = i.coordinateToIndex(e.x * i.width()),
                        a = i.indexToTimePoint(s);
                    if (null === a) return null;
                    return {
                        price: r.coordinateToPrice(e.y * r.height(), n),
                        time: a
                    }
                }
                _convertTimeFromPublic(e) {
                    const t = this._getSeriesAligner();
                    return null !== t ? t.timeToSessionStart(1e3 * e) / 1e3 : e
                }
                _getSeriesAligner() {
                    const e = this._chartWidget.model().mainSeries(),
                        t = e.interval(),
                        i = a.Interval.parse(t),
                        r = e.symbolInfo();
                    return this._alignerResolution.isEqualTo(i) && this._alignerSymbolInfo === r || (this._dwmAligner = null === r ? null : (0, C.createDwmAligner)(t, r), this._alignerResolution = i, this._alignerSymbolInfo = r), this._dwmAligner
                }
                _onCrosshairMoved(e) {
                    const t = this._convertIndexToPublicTime(e.index);
                    null !== t && this._crosshairMoved.fire({
                        price: e.price,
                        time: t
                    })
                }
                _makeSubscriptionFromDelegate(e) {
                    return {
                        subscribe: e.subscribe.bind(e),
                        unsubscribe: e.unsubscribe.bind(e),
                        unsubscribeAll: e.unsubscribeAll.bind(e)
                    }
                }
                _prepareEndOfPeriodArgs() {
                    const e = this._chartWidget.model().model(),
                        t = e.timezone(),
                        i = (0, r.ensureNotNull)(e.mainSeries().symbolInfo()),
                        n = e.mainSeries().interval(),
                        s = new l.SessionInfo(t, i.session, i.session_holidays, i.corrections);
                    return {
                        barBuilder: (0, l.newBarBuilder)(n, s, s),
                        intervalObj: a.Interval.parse(n)
                    }
                }
            }
        },
        103331: (e, t, i) => {
            "use strict";
            var r = i(650151).ensureNotNull,
                n = i(776734).getTracker,
                s = i(178323),
                a = s.LineDataSourceApi,
                o = s.isLineToolRiskReward,
                l = i(830384).StudyApi,
                c = i(125853).SeriesApi,
                h = i(100148).SelectionApi,
                d = i(709333).PaneApi,
                u = i(651723).createDwmAligner,
                g = i(568450).Interval,
                m = i(19334).supportedLineTools,
                _ = i(758337),
                p = _.isNumber,
                S = _.deepEquals,
                v = i(289397).createLineToolProperties,
                b = i(289397).prepareLineToolPropertiesByOwnerSource,
                y = i(210542).lineToolEntityInfo,
                f = i(185978).LineToolsGroupControllerApi,
                w = i(818230).RemoveSourcesCommand;
            const {
                isLineDrawnWithPressedButton: C,
                isLineToolFinishRequiredWhenCreatedByApi: T
            } = i(414805), I = i(96609).EnvironmentState;
            var W = i(699134).ChartWidgetApiBase,
                A = i(480071);
            const P = i(345848).trackEvent;

            function D(e, t) {
                return t.map((function(t) {
                    return e.dataSourceForId(t)
                }))
            }
            e.exports = class extends W {
                constructor(e, t) {
                    super(e, t), this._panes = new WeakMap, this._studies = new WeakMap, this._lineDataSources = new WeakMap, this._selectionApi = null, this._prevVisibleRange = null, this._chartWidget.onAboutToBeDestroyed().subscribe(this, this._destroy, !0), this._chartWidget.withModel(this, (function() {
                        this._chartWidget.model().timeScale().logicalRangeChanged().subscribe(this, this._onLogicalRangeChanged)
                    }))
                }
                id() {
                    return this._chartWidget.id()
                }
                _getPaneApi(e) {
                    var t = this._panes.get(e);
                    return void 0 === t && (t = new d(e, this._chartWidget), this._panes.set(e, t)), t
                }
                _getStudyApi(e) {
                    var t = this._studies.get(e);
                    return void 0 === t && (t = new l(e, this._chartWidget), this._studies.set(e, t)), t
                }
                _getLineDataSourceApi(e) {
                    var t = this._lineDataSources.get(e);
                    return void 0 === t && (t = new a(e, this._chartWidget.model(), {
                        apiPointsToDataSource: this._convertUserPointsToDataSource.bind(this),
                        dataSourcePointsToPriced: e => {
                            var t = this._chartWidget.model().mainSeries().syncModel(),
                                i = this._chartWidget.model().timeScale();
                            return e.map((e => {
                                var r = i.normalizeBarIndex(e.index);
                                return {
                                    price: e.price,
                                    time: this._convertTimeToPublic(t.projectTime(r.time_t, r.offset))
                                }
                            }))
                        }
                    }), this._lineDataSources.set(e, t)), t
                }
                executeActionById(e) {
                    this._chartWidget.executeActionById(e)
                }
                getCheckableActionState(e) {
                    return this._chartWidget.getCheckableActionState(e)
                }
                setZoomEnabled(e) {
                    this._chartWidget.model().model().setZoomEnabled(e)
                }
                setScrollEnabled(e) {
                    this._chartWidget.model().model().setScrollEnabled(e)
                }
                refreshMarks() {
                    this._chartWidget.refreshMarks()
                }
                clearMarks() {
                    this._chartWidget.clearMarks()
                }
                symbol() {
                    return this._chartWidget.getSymbol()
                }
                resolution() {
                    return this._chartWidget.model().mainSeries().properties().interval.value()
                }
                resetData() {
                    this._chartWidget.model().mainSeries().rerequestData()
                }
                setEntityVisibility(e, t) {
                    console.warn("`setEntityVisibility` is deprecated. Use shape/study API instead");
                    var i = this._chartWidget.model().model().dataSourceForId(e);
                    if (i) {
                        var r = i.properties();
                        r && r.visible && r.visible.setValue(t)
                    }
                }
                availableZOrderOperations(e) {
                    var t = D(this._chartWidget.model().model(), e);
                    return this._chartWidget.model().availableZOrderOperations(t)
                }
                sendToBack(e) {
                    var t = D(this._chartWidget.model().model(), e);
                    this._chartWidget.model().sendToBack(t)
                }
                bringToFront(e) {
                    var t = D(this._chartWidget.model().model(), e);
                    this._chartWidget.model().bringToFront(t)
                }
                insertAfter(e, t) {
                    var i = this._chartWidget.model().model(),
                        r = D(i, e),
                        n = i.dataSourceForId(t);
                    this._chartWidget.model().insertAfter(r, n)
                }
                insertBefore(e, t) {
                    var i = this._chartWidget.model().model(),
                        r = D(i, e),
                        n = i.dataSourceForId(t);
                    this._chartWidget.model().insertBefore(r, n)
                }
                bringForward(e) {
                    var t = D(this._chartWidget.model().model(), e);
                    this._chartWidget.model().bringForward(t)
                }
                sendBackward(e) {
                    var t = D(this._chartWidget.model().model(), e);
                    this._chartWidget.model().sendBackward(t)
                }
                showPropertiesDialog(e) {
                    var t = this._chartWidget.model().model().dataSourceForId(e);
                    if (null === t) throw new Error("Study or shape " + e + " does not exist");
                    this._chartWidget.showChartPropertiesForSource(t)
                }
                getAllShapes() {
                    return this._chartWidget.model().model().allLineTools().map(y).filter((function(e) {
                        return null !== e.name
                    }))
                }
                removeAllShapes() {
                    this._chartWidget.removeAllDrawingTools()
                }
                removeAllStudies() {
                    this._chartWidget.removeAllStudies()
                }
                removeEntity(e, t) {
                    var i = this._chartWidget.model().chartModel().dataSourceForId(e);
                    i ? t && t.disableUndo ? new w(this._chartWidget.model().chartModel(), [i], "").redo() : this._chartWidget.model().removeSource(i, !0, !0) : console.warn("Can't find a source with id: " + e)
                }
                removeEntityWithUndo(e) {
                    var t = this._chartWidget.model().chartModel().dataSourceForId(e);
                    this._chartWidget.model().removeSource(t, !1)
                }
                selection() {
                    return null === this._selectionApi && (this._selectionApi = new h(this._chartWidget.model().model())), this._selectionApi
                }
                createStudyTemplate(e) {
                    return this._chartWidget.model().model().studyTemplate(e.saveSymbol, e.saveInterval)
                }
                drawOnAllCharts(e) {
                    A.drawOnAllCharts.setValue(e)
                }
                applyStudyTemplate(e) {
                    this._chartWidget.model().applyStudyTemplate(e, "" + 1e3 * Math.random())
                }
                setVisibleRange(e, t) {
                    throw new Error("Not implemented")
                }
                getVisiblePriceRange() {
                    return console.warn("`getVisiblePriceRange` is deprecated. Use Price Scale API instead"), this._chartWidget.model().mainSeries() ? this._chartWidget.model().mainSeries().priceScale().priceRangeInPrice() : null
                }
                scrollPosition() {
                    return console.warn("`scrollPosition` is deprecated. Use rightOffset from Time Scale API instead"), this._chartWidget.model().timeScale().rightOffset()
                }
                defaultScrollPosition() {
                    return console.warn("`defaultScrollPosition` is deprecated. Use defaultRightOffset from Time Scale API instead"), this._chartWidget.model().timeScale().defaultRightOffset().value()
                }
                _createTradingPrimitive(e, t) {
                    var i, n = this._chartWidget.model(),
                        s = n.model(),
                        a = s.paneForSource(s.mainSeries());

                    function o() {
                        var e = TradingView.CLOSE_PLOT,
                            t = r(n.mainSeries().bars().last());
                        return {
                            index: t.index,
                            price: t.value[e]
                        }
                    }
                    return (i = t ? s.createLineTool(a, o(), e) : n.createLineTool({
                        pane: a,
                        point: o(),
                        linetool: e
                    })) ? i._adapter : void 0
                }
                createOrderLine(e) {
                    e = e || {};
                    return this._createTradingPrimitive("LineToolOrder", e.disableUndo)
                }
                createPositionLine(e) {
                    e = e || {};
                    return this._createTradingPrimitive("LineToolPosition", e.disableUndo)
                }
                createExecutionShape(e) {
                    e = e || {};
                    return this._createTradingPrimitive("LineToolExecution", e.disableUndo)
                }
                createShape(e, t) {
                    return this.createMultipointShape([e], t)
                }
                _alignPoints(e) {
                    var t = this._chartWidget.model().model(),
                        i = t.mainSeries(),
                        r = i.interval();
                    if (t.timeScale().isEmpty() || !g.isDWM(r)) return e;
                    var n = u(r, i.symbolInfo());
                    return null === n ? e : e.map((function(e) {
                        return n.timeToSessionStart(1e3 * e) / 1e3
                    }))
                }
                _convertUserPointsToDataSource(e) {
                    var t = this._chartWidget.model().model(),
                        i = t.mainSeries(),
                        r = t.timeScale().points(),
                        n = i.data();
                    if (t.timeScale().isEmpty()) return null;
                    var s = e.map((function(e) {
                            return e.time || 0
                        })),
                        a = this._alignPoints(s);

                    function o(e, t, s) {
                        var a = r.closestIndexLeft(e) || 0,
                            o = {
                                index: a
                            },
                            l = r.valueAt(a);
                        const c = r.range().value();
                        if (e > l && a === c.lastIndex)(h = i.syncModel().distance(l, e)).success && (o.index = o.index + h.result);
                        else if (e < l && a === c.firstIndex) {
                            var h;
                            (h = i.syncModel().distance(e, l)).success && (o.index = o.index - h.result)
                        }
                        if (p(t)) o.price = t;
                        else {
                            var d = s ? ["open", "high", "low", "close"].indexOf(s) + 1 : 1;
                            d <= 0 && (d = 1), o.price = n.valueAt(a)[d]
                        }
                        return o
                    }
                    for (var l = [], c = 0; c < e.length; c++) {
                        var h = e[c];
                        l.push(o(a[c], h.price, h.channel))
                    }
                    return l
                }
                createMultipointShape(e, t) {
                    const i = Object.assign({}, this._getDefaultCreateMultipointShapeOptions(), t);
                    var r = m[i.shape] || m.flag;
                    P("API", "CreateDrawing", r.name), n().then((e => {
                        null !== e && e.trackChartApiDrawingCreation(r.name)
                    }));
                    var s = this._chartWidget.model().model(),
                        a = s.mainSeries();
                    if (!s.timeScale().isEmpty()) {
                        var l = s.dataSourceForId(i.ownerStudyId) || a,
                            c = s.paneForSource(l),
                            h = this._convertUserPointsToDataSource(e);
                        if (r.onlySelectable) throw new Error('Cannot create "' + i.shape + '" shape');
                        if ("LineToolIcon" === r.name) {
                            if (i.icon = i.icon || i.overrides && i.overrides.icon, !i.hasOwnProperty("icon")) throw new Error("icon must be specified in options");
                            i.overrides = i.overrides || {}, i.overrides.icon = i.icon
                        }
                        var d, u, g = v(r.name, void 0, this._chartWidget.model().model());
                        if (b(g, l), i.overrides)
                            for (var _ in i.overrides) g[_] ? g[_].mergeAndFire(i.overrides[_]) : o(r.name) && -1 !== ["profitLevel", "stopLevel"].indexOf(_) && g.addProperty(_, i.overrides[_]);
                        if (void 0 !== g.text && i.text && g.text.setValue(i.text), g.hasChild("filled") && i.filled && g.filled.setValue(!0), null !== (u = i.disableUndo ? (d = this._chartWidget.model().model()).createLineTool(c, h[0], r.name, g, void 0, l) : (d = this._chartWidget.model()).createLineTool({
                                pane: c,
                                point: h[0],
                                linetool: r.name,
                                properties: g,
                                ownerSource: l
                            }))) {
                            if (o(r.name)) {
                                if (h.length > 2) throw new Error("Wrong points count for " + i.shape + ". Required 1 or 2");
                                2 === h.length && (u.startChanging(1, h[1]), u.setPoint(1, h[1]), u.endChanging())
                            } else {
                                var p = u.pointsCount();
                                if (p !== h.length && -1 !== p) throw new Error("Wrong points count for " + i.shape + ". Required " + p);
                                for (var S = new I(void 0, !0), y = C(r.name), f = 1; f < h.length && this._chartWidget.model().lineBeingCreated(); f++) u.setLastPoint(h[f]), d.continueCreatingLine(h[f], S, f < h.length - 1 || y);
                                T(r.name) && (u.finish(), d.finishLineTool(u), d.continueCreatingLine(h[h.length - 1], S, !1))
                            }
                            if (i.lock && u.setUserEditEnabled(!1), i.disableSelection && u.setSelectionEnabled(!1), i.disableSave && (u.customization.disableSave = !0), i.hasOwnProperty("showInObjectsTree") && (u.customization.showInObjectsTree = i.showInObjectsTree), i.zOrder) {
                                var w = this._chartWidget.model().availableZOrderOperations([u]);
                                "top" === i.zOrder && w.bringToFrontEnabled ? d.bringToFront([u]) : "bottom" === i.zOrder && w.sendToBackEnabled && d.sendToBack([u])
                            }
                            return u.id()
                        }
                    }
                }
                getShapeById(e) {
                    var t = this._chartWidget.model().model().getLineToolById(e);
                    if (null === t) throw new Error("There is no such shape");
                    return this._getLineDataSourceApi(t)
                }
                getStudyById(e) {
                    var t = this._chartWidget.model().model().getStudyById(e);
                    if (null === t) throw new Error("There is no such study");
                    return this._getStudyApi(t)
                }
                getSeries() {
                    var e = this._chartWidget.model(),
                        t = e.mainSeries();
                    return new c(t, e)
                }
                chartType() {
                    return this._chartWidget.model().mainSeries().properties().style.value()
                }
                priceFormatter() {
                    return this._chartWidget.model().mainSeries().priceScale().formatter()
                }
                dataReady(e) {
                    var t = !this._chartWidget.hasModel() || !this._chartWidget.model().mainSeries() || this._chartWidget.model().mainSeries().data().isEmpty();
                    return e && (t ? this.onDataLoaded().subscribe(null, e, !0) : e()), !t
                }
                _onLogicalRangeChanged() {
                    var e = this._chartWidget.model().mainSeries(),
                        t = e.data().isEmpty();
                    if (null !== this._chartWidget.model().timeScale().visibleBarsStrictRange() && t) e.dataEvents().completed().subscribe(this, this._onLogicalRangeChanged, !0);
                    else {
                        var i = this.getVisibleRange();
                        null !== this._prevVisibleRange && S(this._prevVisibleRange, i)[0] || (this._prevVisibleRange = i, this._visibleBarsChanged.fire(i))
                    }
                }
                _destroy() {
                    super._destroy(), this._chartWidget.hasModel() && this._chartWidget.model().timeScale().logicalRangeChanged().unsubscribe(this, this._onLogicalRangeChanged)
                }
                setTimezone(e) {
                    this._chartWidget.setTimezone(e)
                }
                getTimezone() {
                    return this._chartWidget.getTimezone()
                }
                getPanes() {
                    return this._chartWidget.model().chartModel().panes().map((function(e) {
                        return this._getPaneApi(e)
                    }), this)
                }
                canZoomOut() {
                    return !this._chartWidget.model().zoomStack().isEmpty()
                }
                zoomOut() {
                    this.canZoomOut() && this._chartWidget.model().zoomFromViewport()
                }
                shapesGroupController() {
                    return new f(this._chartWidget.model().lineToolsGroupController(), this._chartWidget.model())
                }
                requestSelectBar() {
                    if (this.isSelectBarRequested()) return Promise.reject("already requested");
                    var e = this;
                    return new Promise((function(t, i) {
                        e._chartWidget.requestSelectPoint({
                            pointType: "time"
                        }).then((function(i) {
                            t(e._convertTimeToPublic(i.point.time))
                        })).catch((function() {
                            i("cancelled")
                        }))
                    }))
                }
                cancelSelectBar() {
                    this.isSelectBarRequested() && this._chartWidget.cancelRequestSelectPoint()
                }
            }
        },
        185978: (e, t, i) => {
            "use strict";
            i.d(t, {
                LineToolsGroupControllerApi: () => a
            });
            var r = i(569523),
                n = i(650151),
                s = i(289397);
            class a {
                constructor(e, t) {
                    this._controller = e, this._model = t
                }
                createGroupFromSelection() {
                    return this._controller.createGroupFromSelection().id
                }
                removeGroup(e) {
                    const t = (0, n.ensureDefined)(this._groupById(e));
                    this._controller.removeGroup(t)
                }
                groups() {
                    return this._controller.groups().map((e => e.id))
                }
                shapesInGroup(e) {
                    const t = (0, n.ensureDefined)(this._groupById(e));
                    return (0, r.sortSources)(t.lineTools()).map((e => e.id()))
                }
                excludeShapeFromGroup(e, t) {
                    const i = (0, n.ensureDefined)(this._groupById(e)),
                        r = (0, n.ensureNotNull)(this._model.dataSourceForId(t));
                    (0, n.assert)((0, s.isLineTool)(r), "Passed shapeId is not a line tool"), this._controller.excludeLineToolFromGroup(i, r)
                }
                addShapeToGroup(e, t) {
                    const i = (0, n.ensureDefined)(this._groupById(e)),
                        r = (0, n.ensureNotNull)(this._model.dataSourceForId(t));
                    (0, n.assert)((0, s.isLineTool)(r), "Passed shapeId is not a line tool"), this._controller.addLineToolToGroup(i, r)
                }
                availableZOrderOperations(e) {
                    const t = (0, n.ensureDefined)(this._groupById(e));
                    return this._controller.availableZOrderOperations(t)
                }
                bringToFront(e) {
                    const t = (0, n.ensureDefined)(this._groupById(e));
                    this._controller.bringToFront(t)
                }
                bringForward(e) {
                    const t = (0, n.ensureDefined)(this._groupById(e));
                    this._controller.bringForward(t)
                }
                sendBackward(e) {
                    const t = (0, n.ensureDefined)(this._groupById(e));
                    this._controller.sendBackward(t)
                }
                sendToBack(e) {
                    const t = (0, n.ensureDefined)(this._groupById(e));
                    this._controller.sendToBack(t)
                }
                insertAfter(e, t) {
                    const i = (0, n.ensureDefined)(this._groupById(e)),
                        r = (0, n.ensureNotNull)(this._groupById(t) || this._model.dataSourceForId(t));
                    this._controller.insertAfter(i, r)
                }
                insertBefore(e, t) {
                    const i = (0, n.ensureDefined)(this._groupById(e)),
                        r = (0, n.ensureNotNull)(this._groupById(t) || this._model.dataSourceForId(t));
                    this._controller.insertBefore(i, r)
                }
                groupVisibility(e) {
                    return (0, n.ensureDefined)(this._groupById(e)).visibility()
                }
                setGroupVisibility(e, t) {
                    const i = (0, n.ensureDefined)(this._groupById(e));
                    this._controller.setGroupVisibility(i, t)
                }
                groupLock(e) {
                    return (0, n.ensureDefined)(this._groupById(e)).locked()
                }
                setGroupLock(e, t) {
                    const i = (0, n.ensureDefined)(this._groupById(e));
                    this._controller.setGroupLock(i, t)
                }
                getGroupName(e) {
                    return (0, n.ensureDefined)(this._groupById(e)).name()
                }
                setGroupName(e, t) {
                    const i = (0, n.ensureDefined)(this._groupById(e));
                    this._controller.setGroupName(i, t)
                }
                canBeGroupped(e) {
                    const t = e.map((e => (0, n.ensureNotNull)(this._model.dataSourceForId(e))));
                    return !t.some((e => !(0, s.isLineTool)(e))) && this._controller.canBeGroupped(t)
                }
                _groupById(e) {
                    return this._controller.groups().find((t => t.id === e))
                }
            }
        },
        2741: (e, t, i) => {
            "use strict";
            i.d(t, {
                AbstractJsonStoreService: () => s,
                CommonJsonStoreService: () => a
            });
            var r = i(869403),
                n = i.n(r);
            class s {
                constructor(e, t, i, r, s) {
                    this._onChange = new(n()), this._handleChange = () => {
                        this._onChange.fire(this.get())
                    }, this._crossTabEvents = e, this._jsonKeyValueStore = t, this.CROSSTAB_EVENT_NAME = i, this.JSON_STORE_KEY = r, this.defaultStoreValue = this._serialize(s), this._subscribe()
                }
                get() {
                    const e = this._jsonKeyValueStore.getJSON(this.JSON_STORE_KEY, this.defaultStoreValue);
                    return this._deserialize(e)
                }
                set(e, t) {
                    const i = this._serialize(e);
                    this._jsonKeyValueStore.setJSON(this.JSON_STORE_KEY, i, t), this._crossTabEvents.emit(this.CROSSTAB_EVENT_NAME), this._onChange.fire(e)
                }
                getOnChange() {
                    return this._onChange
                }
                destroy() {
                    this._unsubscribe(), this._onChange.destroy(), delete this._onChange
                }
                _subscribe() {
                    this._crossTabEvents.on(this.CROSSTAB_EVENT_NAME, this._handleChange), this._jsonKeyValueStore.onSync.subscribe(this, this._handleChange)
                }
                _unsubscribe() {
                    this._crossTabEvents.off(this.CROSSTAB_EVENT_NAME, this._handleChange), this._jsonKeyValueStore.onSync.unsubscribe(this, this._handleChange)
                }
            }
            class a extends s {
                _serialize(e) {
                    return e
                }
                _deserialize(e) {
                    return e
                }
            }
        },
        341208: (e, t, i) => {
            "use strict";
            var r = i(432195),
                n = i(432888);
            const {
                getExchanges: s
            } = i(709404);

            function a(e) {
                this._chartApiInstance = e
            }
            a.prototype.searchSymbols = function(e, t, i, r, n, s) {
                    this._chartApiInstance.searchSymbols(e, t, i, r, n, !1, void 0, !1, null, function(e) {
                        e.forEach((function(e) {
                            e.flag = this.getFlagIdBySymbolExt(e)
                        }), this), s(e)
                    }.bind(this))
                }, a.prototype.displayedExchanges = function() {
                    var e = r.displayedExchangesFilter(this.supportedExchanges());
                    return r.sortExchangesListByFlagIfNeeded(e)
                },
                a.prototype.supportedExchanges = function() {
                    return s()
                }, a.prototype.supportedSymbolsTypes = function() {
                    return this._chartApiInstance.supportedSymbolsTypes()
                }, a.prototype.getFlagIdBySymbolExt = function(e) {
                    return n.getFlagIdBySymbolInfo(e)
                }, a.prototype.getFlagIdByExchangeInfo = function(e) {
                    return e ? n.getFlagIdByName(e.flag) : ""
                }, e.exports = a
        },
        432195: (e, t, i) => {
            "use strict";
            var r, n = i(495046),
                s = i(432888);
            r = function(e, t) {
                var i = new RegExp("country-([a-z*_]+)", "i"),
                    r = s.supportedFlags().filter((function(e) {
                        return "forex" !== e && "bitcoin" !== e && "crypto" !== e
                    })).sort(),
                    n = ["forex", "country-usa", "country-canada", "country-ae", "country-uk", "country-europe", "country-germany", "country-ireland", "country-italy", "country-luxembourg", "country-austria", "country-norway", "country-spain", "country-poland", "country-sweden", "country-switzerland", "country-turkey", "country-israel", "country-argentina", "country-australia", "country-brasil", "country-mexico", "country-peru", "country-chile", "country-colombia", "country-new_zealand", "country-brasil", "country-india", "country-japan", "country-china", "country-hong_kong", "country-singapore", "country-taiwan", "country-russia", "country-malaysia", "country-bahrain", "country-egypt", "country-saudi_arabia", "country-serbia", "country-*", "bitcoin", "crypto"];
                t && t.order && (n = t.order);
                var a = {};
                s.supportedFlags().forEach((function(e) {
                    a[e] = []
                }));
                var o = [];

                function l(e) {
                    var t = a[e];
                    t && (o = o.concat(t.sort((function(e, t) {
                        return e.name.localeCompare(t.name)
                    }))), delete a[e])
                }
                return e.forEach((function(e) {
                    e.flag && a[e.flag].push(e), e.value || o.push(e)
                })), n.forEach((function(e) {
                    if ("forex" === e || "bitcoin" === e || "crypto" === e) l(e);
                    else {
                        var t = i.exec(e),
                            n = t && t[1];
                        "*" === n ? r.forEach((function(e) {
                            l(e)
                        })) : l(n)
                    }
                })), Object.keys(a).forEach((function(e) {
                    l(e)
                })), o
            }, e.exports.displayedExchangesFilter = function(e) {
                return n.enabled("symbol_search_limited_exchanges") && (e = e.filter((function(e) {
                    return !("bitcoin" === e.flag || "crypto" === e.flag || e.hideInSymbolSearch)
                }))), e
            }, e.exports.sortExchangesListByFlagIfNeeded = function(e) {
                return n.enabled("symbol_search_flags") && (e = r(e)), e
            }
        },
        432888: (e, t, i) => {
            "use strict";
            var r = i(519073).hasCryptoTypespec,
                n = {
                    ae: "flag-ae",
                    argentina: "flag-ar",
                    canada: "flag-ca",
                    colombia: "flag-co",
                    bitcoin: "flag-btc",
                    brasil: "flag-br",
                    uk: "flag-uk",
                    gb: "flag-uk",
                    usa: "flag-us",
                    egypt: "flag-eg",
                    europe: "flag-eu",
                    russia: "flag-ru",
                    japan: "flag-jp",
                    indonesia: "flag-id",
                    india: "flag-in",
                    forex: "flag-fx",
                    luxembourg: "flag-lu",
                    mexico: "flag-mx",
                    germany: "flag-de",
                    ireland: "flag-ie",
                    italy: "flag-it",
                    qatar: "flag-qa",
                    peru: "flag-pe",
                    spain: "flag-es",
                    saudi_arabia: "flag-sa",
                    serbia: "flag-rs",
                    south_africa: "flag-za",
                    sweden: "flag-se",
                    switzerland: "flag-ch",
                    turkey: "flag-tr",
                    norway: "flag-no",
                    austria: "flag-at",
                    australia: "flag-au",
                    new_zealand: "flag-nz",
                    hong_kong: "flag-hk",
                    taiwan: "flag-tw",
                    thailand: "flag-th",
                    singapore: "flag-sg",
                    south_korea: "flag-kr",
                    poland: "flag-pl",
                    israel: "flag-il",
                    chile: "flag-cl",
                    china: "flag-cn",
                    malaysia: "flag-my",
                    bahrain: "flag-bh",
                    nigeria: "flag-ng",
                    finland: "flag-fi",
                    iceland: "flag-is",
                    denmark: "flag-dk",
                    lithuania: "flag-lt",
                    estonia: "flag-ee",
                    latvia: "flag-lv",
                    vietnam: "flag-vn",
                    netherlands: "flag-nl",
                    belgium: "flag-be",
                    portugal: "flag-pt",
                    france: "flag-fr",
                    greece: "flag-gr",
                    korea: "flag-kr",
                    philippines: "flag-ph"
                },
                s = {
                    gb: "flag-uk"
                },
                a = {
                    FXCM: !0,
                    OANDA: !0,
                    FOREXCOM: !0,
                    "FOREX.com": !0,
                    FX_IDC: !0,
                    FX: !0,
                    IDC: !0
                };

            function o(e) {
                return e ? s[e] || "flag-" + e : ""
            }
            e.exports.supportedFlags = function() {
                return Object.keys(n)
            }, e.exports.getFlagIdByName = function(e) {
                return e && n[e] ? n[e] : ""
            }, e.exports.getFlagIdBySymbolInfo = function(e) {
                if (!e) return "";
                var t = "";
                if (e.country) t = o(e.country && e.country.toLowerCase());
                else if (e.rootItem) {
                    t = o(e.rootItem.country && e.rootItem.country.toLowerCase())
                } else "forex" === e.type || !0 === a[e.exchange] ? t = "flag-fx" : r(e.type, e.typespecs || []) && (t = "flag-btc");
                return t
            }
        },
        347069: (e, t, i) => {
            "use strict";
            i.d(t, {
                TradingViewApiBase: () => x
            });
            var r = i(650151),
                n = i(583912),
                s = i(495046),
                a = i(333126),
                o = i(157688),
                l = i(582423),
                c = i(103669),
                h = i(719885),
                d = i(988534),
                u = i(316478),
                g = i(388482),
                m = i(290382),
                _ = i(471862),
                p = i(612484),
                S = i(675128),
                v = i(611998),
                b = i(736844);
            const y = new Set(["price_target_estimates_num", "price_target_average", "price_target_high", "price_target_low", "last_price", "rates_pt", "update_mode", "currency_code", "value_unit_id", "update_mode_seconds", "last_report_frequency", "pricescale", "minmov", "fractional", "minmove2", "recommendation_mark", "recommendation_buy", "recommendation_over", "recommendation_hold", "recommendation_under", "recommendation_sell", "recommendation_total", "fundamental_currency_code", "fiscal_period_fy_h", "fiscal_period_fq_h", "fiscal_period_fh_h"]),
                f = (0, S.lazyValue)((() => new v.QuoteSessionSnapshoter({
                    name: "forecast-webview-quotes",
                    fields: [...y]
                })));
            class w extends p.WebviewControllerBase {
                open(e) {
                    const t = this._createOpenRequest(p.WebviewPageName.Forecast, e);
                    f().getSnapshot(t.symbol(), y);
                    t.execute().ChartQuoteSnapshotProvider = {
                        getQuoteSnapshot() {
                            var e;
                            const i = b.QUOTE_FIELDS_CACHE.get(t.symbol());
                            return null !== (e = null == i ? void 0 : i.values) && void 0 !== e ? e : {}
                        }
                    }
                }
            }
            var C = i(345848),
                T = i(440135),
                I = i(909740),
                W = i(869403),
                A = i.n(W);
            class P {
                constructor(e) {
                    this._toolbarThemeChanged = new(A()), this._onWatchedThemeChanged = e => {
                        this._toolbarThemeChanged.fire(e)
                    }, this._opts = e, I.watchedTheme.subscribe(this._onWatchedThemeChanged)
                }
                destroy() {
                    I.watchedTheme.unsubscribe(this._onWatchedThemeChanged)
                }
                isStdTheme() {
                    const e = this._opts.chartWidgetCollection.getAll().every((e => (0, T.isStdTheme)((0, T.extractThemeFromModel)(e.model()))));
                    return Promise.resolve(e)
                }
                async setStdTheme(e, t = !0, i) {
                    await (0, T.loadTheme)(this._opts.chartWidgetCollection, {
                        themeName: e,
                        standardTheme: !0,
                        syncState: t,
                        noUndo: i
                    })
                }
                setStdThemeForLayout(e, t = !0) {
                    (0, I.setTheme)(e), t && (0, T.syncTheme)()
                }
                getCurrentThemeName() {
                    return (0, T.getCurrentTheme)().name
                }
                toolbarThemeChanged() {
                    return this._toolbarThemeChanged
                }
            }
            var D = i(19334),
                E = i(480071),
                k = i(988411),
                L = i.n(k),
                M = i(87225),
                R = i(192784);

            function F() {
                throw new Error("not implemented")
            }
            class x {
                constructor(e) {
                    this._studyTemplatesDrawer = null, this._fontIconsSettingsDrawer = null, this._favoriteDrawingsToolbar = null, this._themesApi = null, this._newsApiDeferredPromise = null, this._newsApiRejectionReason = null, this._watchlistApiDeferredPromise = null,
                        this._watchlistApiRejectionReason = null, this._widgetbarApiDeferredPromise = null, this._widgetbarApiRejectionReason = null, this._isDestroyed = !1, this._widgebarApi = null, this._magnetEnabledWatchedValue = null, this._magnetModeWatchedValue = null;
                    const {
                        chartApiInstance: t,
                        chartWidgetCollection: i,
                        studyMarket: r,
                        saveChartService: s,
                        loadChartService: a,
                        sharingChartService: h = null
                    } = e;
                    this._chartWidgetCollection = i, this._studyMarket = r, this._saveChartService = s, this._sharingChartService = h, this._loadChartLayoutDialog = a, this._intervalsService = new o.IntervalsService(t), this._alertsWidgetDialog = new l.AlertsWidgetDialog((() => i.activeChartWidget.value())), this._detailsDialogController = c.DetailsDialogController.getInstance(), this._supportedChartStylesSpawn = n.linking.supportedChartStyles.spawn(), this._chartWidgetCollection.onAboutToBeDestroyed.subscribe(null, (() => this.destroy()), !0), this._forecastWebviewController = new w, this._financialsWebviewController = new _.FinancialsWebviewController;
                    const d = i.lock;
                    this._symbolSync = d.symbol.spawn(), this._intervalSync = d.interval.spawn(), this._dateRangeSync = d.dateRange.spawn(), this._crosshairSync = d.crosshair.spawn(), this._timeSync = d.trackTime.spawn()
                }
                destroy() {
                    var e, t, i;
                    this._supportedChartStylesSpawn.destroy(), null === (e = this._intervalsService) || void 0 === e || e.destroy(), null === (t = this._themesApi) || void 0 === t || t.destroy(), null === (i = this._widgebarApi) || void 0 === i || i.destroy(), this._widgetbarApiRejectionReason = "This ITradingViewApi instance has been destroyed", this._symbolSync.destroy(), this._intervalSync.destroy(), this._dateRangeSync.destroy(), this._crosshairSync.destroy(), this._timeSync.destroy(), this._isDestroyed = !0, (0, E.properties)().childs().magnet.unsubscribeAll(this), (0, E.properties)().childs().magnetMode.unsubscribeAll(this)
                }
                themes() {
                    return null === this._themesApi && (this._themesApi = new P({
                        chartWidgetCollection: this._chartWidgetCollection
                    })), this._themesApi
                }
                dialogs() {
                    var e, t, i, r, n, s;
                    return {
                        Indicators: this._studyMarket,
                        Compare: this._chartWidgetCollection.getCompareDialogRenderer(),
                        ObjectsTree: a.ObjectTreeDialogController.getInstance(),
                        ChartProperties: this._chartWidgetCollection.getChartPropertiesDialogRenderer(),
                        ChartLayoutSaveAs: null !== (t = null === (e = this._saveChartService) || void 0 === e ? void 0 : e.getSaveAsController()) && void 0 !== t ? t : null,
                        ChartLayoutRename: null !== (r = null === (i = this._saveChartService) || void 0 === i ? void 0 : i.getRenameController()) && void 0 !== r ? r : null,
                        ChartLayoutCreate: null !== (s = null === (n = this._saveChartService) || void 0 === n ? void 0 : n.getCreateController()) && void 0 !== s ? s : null,
                        ChartLayoutLoad: this._loadChartLayoutDialog,
                        Alerts: this._alertsWidgetDialog,
                        Details: this._detailsDialogController,
                        FinancialsCharts: d.FinancialsDialogController.getInstance(),
                        Technicals: h.TechnicalsDialogController.getInstance(),
                        Forecast: u.ForecastDialogController.getInstance()
                    }
                }
                webview() {
                    return {
                        Forecast: this._forecastWebviewController,
                        Financials: this._financialsWebviewController
                    }
                }
                studyTemplatesDrawerApi() {
                    return Promise.all([i.e(88230), i.e(59333), i.e(71140), i.e(6092), i.e(54819), i.e(53795), i.e(47507), i.e(8009), i.e(44412), i.e(19776), i.e(83704), i.e(64615), i.e(75514), i.e(17170)]).then(i.bind(i, 67750)).then((e => (this._studyTemplatesDrawer || (this._studyTemplatesDrawer = new e.ToolWidgetTemplatesDrawerMenuRenderer(this._chartWidgetCollection)), this._studyTemplatesDrawer)))
                }
                fontIconsSettingsDrawer() {
                    return Promise.all([i.e(88230), i.e(6092), i.e(94884), i.e(31834), i.e(6804), i.e(75514), i.e(30979), i.e(15640), i.e(75499), i.e(64558)]).then(i.bind(i, 61433)).then((e => (this._fontIconsSettingsDrawer || (this._fontIconsSettingsDrawer = new e.IconsSettingsDrawerApi), this._fontIconsSettingsDrawer)))
                }
                intervalsService() {
                    return this._intervalsService
                }
                supportedChartTypes() {
                    return this._supportedChartStylesSpawn
                }
                setBrokerName(e) {
                    this._chartWidgetCollection.setBroker(e)
                }
                drawOnAllChartsMode(e) {
                    (0, E.drawOnAllChartsMode)().setValue(e)
                }
                disableTrackingEvents() {
                    (0, C.disableTrackingEvents)()
                }
                getSaveChartService() {
                    return this._saveChartService
                }
                symbolSync() {
                    return this._symbolSync
                }
                intervalSync() {
                    return this._intervalSync
                }
                dateRangeSync() {
                    return this._dateRangeSync
                }
                crosshairSync() {
                    return this._crosshairSync
                }
                timeSync() {
                    return this._timeSync
                }
                setSymbolSearchUI(e) {
                    m.SymbolSearchUI.setProvider({
                        getSymbol: () => e.getSymbol()
                    })
                }
                setLayout(e, t) {
                    (null == t ? void 0 : t.withUndo) ? this._chartWidgetCollection.setChartLayoutWithUndo(e): this._chartWidgetCollection.setLayout(e)
                }
                selectLineTool(e, t) {
                    if (!D.supportedLineTools[e]) return;
                    const i = D.supportedLineTools[e].name;
                    if ("icon" === e) {
                        const e = null == t ? void 0 : t.icon;
                        void 0 !== e && E.iconTool.setValue(e)
                    }
                    if ("emoji" === e) {
                        const e = null == t ? void 0 : t.emoji;
                        void 0 !== e && E.emojiTool.setValue(e)
                    }
                    if ("sticker" === e) {
                        const e = null == t ? void 0 : t.sticker;
                        void 0 !== e && E.stickerTool.setValue(e)
                    }
                    E.tool.setValue(i)
                }
                favoriteDrawingsToolbar() {
                    return Promise.all([i.e(88567), i.e(65551)]).then(i.bind(i, 203924)).then((e => (this._favoriteDrawingsToolbar || (this._favoriteDrawingsToolbar = new e.FavoriteDrawingsApi), this._favoriteDrawingsToolbar)))
                }
                sharingChart() {
                    return this._sharingChartService
                }
                watchlist() {
                    F()
                }
                setWatchlistApiPromise(e) {
                    F()
                }
                news() {
                    F()
                }
                setNewsApiPromise(e) {
                    F()
                }
                widgetbar() {
                    F()
                }
                setWidgetbarApiPromise(e) {
                    F()
                }
                getChartStorage() {
                    return (0, g.getChartStorage)()
                }
                setDebugMode(e) {
                    s.setEnabled("charting_library_debug_mode", e)
                }
                setFeatureEnabled(e, t) {
                    s.setEnabled(e, t)
                }
                magnetEnabled() {
                    return null === this._magnetEnabledWatchedValue && (this._magnetEnabledWatchedValue = new(L())((0, E.properties)().childs().magnet.value()), this._magnetEnabledWatchedValue.subscribe((e => {
                        (0, M.saveDefaultProperties)(!0), (0, E.properties)().childs().magnet.setValue(e), (0, M.saveDefaultProperties)(!1)
                    })), (0, E.properties)().childs().magnet.subscribe(this, (() => {
                        (0, r.ensureNotNull)(this._magnetEnabledWatchedValue).setValue((0, E.properties)().childs().magnet.value())
                    }))), this._magnetEnabledWatchedValue
                }
                magnetMode() {
                    return null === this._magnetModeWatchedValue && (this._magnetModeWatchedValue = new(L())((0, E.properties)().childs().magnetMode.value()), this._magnetModeWatchedValue.subscribe((e => {
                        (0,
                            M.saveDefaultProperties)(!0), (0, E.properties)().childs().magnetMode.setValue(e), (0, M.saveDefaultProperties)(!1)
                    })), (0, E.properties)().childs().magnetMode.subscribe(this, (() => {
                        (0, r.ensureNotNull)(this._magnetModeWatchedValue).setValue((0, E.properties)().childs().magnetMode.value())
                    }))), this._magnetModeWatchedValue
                }
                flushBufferedData() {
                    R.flushDelegate.fire()
                }
                chartWidgetCollectionState(...e) {
                    return this._chartWidgetCollection.state(...e)
                }
                chartWidgetCollectionSeriesStatuses() {
                    return this._chartWidgetCollection.chartSeriesStatuses()
                }
            }
        },
        711565: (e, t, i) => {
            "use strict";
            var r = i(869403),
                n = i(988411),
                s = i(583912).linking,
                a = (i(76797).createDeferredPromise, i(103331)),
                o = i(598104).layouts,
                l = i(251954),
                c = i(263221).ContextMenuManager,
                h = i(480071),
                d = i(991826),
                u = i(472664).backend,
                g = i(272001),
                m = i(779923).showWarning,
                _ = i(779923).showConfirm,
                p = i(19334),
                S = i(332450).CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                v = i(568450).Interval,
                b = i(75733).ChartChangesWatcher,
                y = i(347069).TradingViewApiBase,
                f = (i(108184).StudyMetaInfo, i(591316).getStudyInputsInfo, i(443403).getStudyStylesInfo, i(906125).CollectionViewMode),
                w = i(341208),
                C = i(779665).pushStreamMultiplexer,
                T = i(176975).ConnectionStatus,
                I = i(893271),
                W = I.tradingService,
                A = I.waitTradingService,
                P = i(463087).publishChart,
                D = i(463087).setPublishChartOptions,
                E = i(664224).showSupportDialog,
                k = i(629902),
                L = k.openMobileChartPickerCommand,
                M = k.closeMobileChartPickerCommand,
                R = i(67683).AlertService,
                F = i(66066).ReplayApi,
                x = i(508846),
                O = x.createGoProDialog,
                V = x.onGoProDialog;
            e.exports = class extends y {
                constructor(e) {
                    const {
                        chartWidgetCollection: t,
                        saveChartService: i,
                        loadChartService: n,
                        sharingChartService: a,
                        alertsDispatcher: o,
                        supportTicketData: l,
                        favoriteServices: c,
                        chartApiInstance: h = null,
                        studyMarket: d = null
                    } = e;
                    super({
                        chartApiInstance: h,
                        chartWidgetCollection: t,
                        studyMarket: d,
                        saveChartService: i,
                        loadChartService: n,
                        sharingChartService: a
                    }), this._chartApiInstance = h, this._loadChartService = n, this._alertsDispatcher = o, this._supportTicketData = l, this._favoriteServices = c, this._proxyWatchListChangedDelegate = null, this._lockDrawingsWatchedValue = null, this._hideDrawingsWatchedValue = null, this._hideIndicatorsWatchedValue = null, this._replayApi = null, this._chartChangesWatcher = null, this._hasChartChangesWatchedValue = null, this._getDataSourceHub = function() {
                        return t.activeChartWidget.value().model().model()
                    }, this._chartWidgetCollection.getResizerDetacher = function() {
                        return t.activeChartWidget.value().getResizerDetacher()
                    }, this._alertService = this._alertsDispatcher ? new R(this._alertsDispatcher, this._getDataSourceHub) : null, this._activeChangedChangedDelegate = new r, this._chartWidgetCollection.activeChartWidget.subscribe(function() {
                        this._activeChangedChangedDelegate.fire()
                    }.bind(this)), this._chartWidgets = new WeakMap, this._activateChart = function(e) {
                        t.activeChartWidget.setValue(e)
                    }, this.linking = s
                }
                subscribe(e, t) {
                    l.subscribe(e, t)
                }
                unsubscribe(e, t) {
                    l.unsubscribe(e, t)
                }
                onContextMenu(e) {
                    l.subscribe("onContextMenu", (function(t) {
                        t.callback(e(t.unixtime, t.price))
                    }))
                }
                onGrayedObjectClicked(e) {
                    l.subscribe("onGrayedObjectClicked", e)
                }
                activeChart() {
                    return this._getChartWidgetApi(this._chartWidgetCollection.activeChartWidget.value())
                }
                _getChartWidgetApi(e) {
                    var t = this._chartWidgets.get(e);
                    return void 0 === t && (t = new a(e, this._activateChart.bind(null, e)), this._chartWidgets.set(e, t)), t
                }
                onActiveChartChanged() {
                    return this._activeChangedChangedDelegate
                }
                changeSymbol(e, t, i) {
                    s.interval.setValue(v.normalize(t)), s.symbol.setValue(e), i && this.activeChart().onDataLoaded().subscribe(null, i, !0)
                }
                layout() {
                    return this._chartWidgetCollection.layout.value()
                }
                layoutName() {
                    return this._chartWidgetCollection.metaInfo.name.value()
                }
                layoutNameWatchedValue() {
                    return this._chartWidgetCollection.metaInfo.name.readonly()
                }
                layoutSettingsDrawer() {
                    return Promise.all([i.e(6092), i.e(53795), i.e(41770), i.e(24013), i.e(33853), i.e(8580), i.e(51573), i.e(75514), i.e(45289)]).then(i.bind(i, 404792)).then(function(e) {
                        return this._layoutSettingsDrawer || (this._layoutSettingsDrawer = new e.LayoutSettingsDrawerApi(this._chartWidgetCollection)), this._layoutSettingsDrawer
                    }.bind(this))
                }
                chartsCount() {
                    return o[this.layout()].count
                }
                viewMode() {
                    return this._chartWidgetCollection.viewMode.readonly().value()
                }
                viewModeWatchedValue() {
                    return this._chartWidgetCollection.viewMode.readonly()
                }
                setForceFullscreenMode() {
                    this._chartWidgetCollection.setViewMode(f.ForceFullscreen), this._chartWidgetCollection.getResizerDetacher().requestFullscreen()
                }
                setMultichartMode() {
                    this._chartWidgetCollection.setViewMode(f.Multichart), this._chartWidgetCollection.getResizerDetacher().exitFullscreen()
                }
                setActiveChart(e) {
                    if (e >= 0 && e < this.chartsCount()) {
                        var t = this._chartWidgetCollection.getAll()[e];
                        t && (this._chartWidgetCollection.getResizerDetacher().fullscreen.value() ? t.requestFullscreen() : this._chartWidgetCollection.activeChartWidget.setValue(t))
                    }
                }
                chart(e) {
                    if (void 0 === e && (e = 0), e < 0 || e >= this.chartsCount()) throw Error("Incorrect index: " + e);
                    return this._getChartWidgetApi(this._chartWidgetCollection.getAll()[e])
                }
                getSymbolInterval(e) {
                    var t = {
                        symbol: s.symbol.value(),
                        interval: s.interval.value()
                    };
                    return e && e(t), t
                }
                saveChart(e) {
                    if (this._saveChartService) {
                        var t = this._saveChartService.saveToJSON();
                        return e && e(JSON.parse(t.content))
                    }
                }
                loadChart(e) {
                    throw new Error("Not implemented")
                }
                getStudiesList() {
                    throw new Error("Not implemented")
                }
                getStudyInputs(e) {
                    throw new Error("Not implemented")
                }
                getStudyStyles(e) {
                    throw new Error("Not implemented")
                }
                getSavedCharts(e) {
                    u.getCharts().then(e)
                }
                loadChartFromServer(e) {
                    u.loadChart(e)
                }
                saveChartToServer(e, t, i) {
                    this._saveChartService && this._saveChartService.saveChartSilently(e, t, i)
                }
                setAutosave(e) {
                    this._saveChartService && this._saveChartService.autoSaveEnabled().setValue(e)
                }
                removeChartFromServer(e, t) {
                    u.removeChart(e).then(t)
                }
                getIntervals() {
                    var e = [],
                        t = d.getCustomResolutions();
                    return null !== this._chartApiInstance && (e = this._chartApiInstance.defaultResolutions()), d.mergeResolutions(e, t)
                }
                closePopupsAndDialogs() {
                    c.hideAll(), l.emit(S)
                }
                selectedLineTool() {
                    for (var e = Object.keys(p.supportedLineTools), t = h.tool.value(), i = 0; i < e.length; ++i)
                        if (p.supportedLineTools[e[i]].name === t) return e[i];
                    return ""
                }
                lockAllDrawingTools() {
                    return null === this._lockDrawingsWatchedValue && (this._lockDrawingsWatchedValue = new n(h.lockDrawings().value()), this._lockDrawingsWatchedValue.subscribe((function(e) {
                        h.lockDrawings().setValue(e)
                    })), h.lockDrawings().subscribe(this, (function() {
                        this._lockDrawingsWatchedValue.setValue(h.lockDrawings().value())
                    }))), this._lockDrawingsWatchedValue
                }
                hideAllDrawingTools() {
                    return null === this._hideDrawingsWatchedValue && (this._hideDrawingsWatchedValue = new n(h.hideAllDrawings().value()), this._hideDrawingsWatchedValue.subscribe((function(e) {
                        h.hideAllDrawings().setValue(e)
                    })), h.hideAllDrawings().subscribe(this, (function() {
                        this._hideDrawingsWatchedValue.setValue(h.hideAllDrawings().value())
                    }))), this._hideDrawingsWatchedValue
                }
                hideAllIndicators() {
                    return null === this._hideIndicatorsWatchedValue && (this._hideIndicatorsWatchedValue = new n(h.hideAllIndicators().value()), this._hideIndicatorsWatchedValue.subscribe((function(e) {
                        h.hideAllIndicators().setValue(e)
                    })), h.hideAllIndicators().subscribe(this, (function() {
                        this._hideIndicatorsWatchedValue.setValue(h.hideAllIndicators().value())
                    }))), this._hideIndicatorsWatchedValue
                }
                mainSeriesPriceFormatter() {
                    return this._chartWidgetCollection.activeChartWidget.value().model().mainSeries().priceScale().formatter()
                }
                showNoticeDialog(e) {
                    m({
                        title: (e = e || {}).title,
                        text: e.body || "",
                        onClose: e.callback
                    })
                }
                showConfirmDialog(e) {
                    if (!(e = e || {}).callback) throw Error("callback must be exist");
                    var t = e.callback;

                    function i(e) {
                        t && (t(e), t = null)
                    }
                    _({
                        title: e.title,
                        text: e.body || "",
                        onClose: function() {
                            i(!1)
                        },
                        onConfirm: function(e) {
                            i(!0), e.dialogClose()
                        }
                    })
                }
                logs() {
                    return {
                        getLogHistory: g.getLogHistory,
                        enable: g.loggingOn,
                        disable: g.loggingOff
                    }
                }
                showLoadChartDialog() {
                    var e = this._loadChartService;
                    e && e.showLoadDialog()
                }
                showSaveAsChartDialog() {
                    var e = this._saveChartService;
                    e && window.runOrSignIn((function() {
                        e.saveChartAs()
                    }), {
                        source: "Save as chart dialogue"
                    })
                }
                drawOnAllCharts(e) {
                    return h.drawOnAllCharts().setValue(e)
                }
                undoRedoState() {
                    return this._chartWidgetCollection.undoHistory.state()
                }
                clearUndoHistory() {
                    return this._chartWidgetCollection.undoHistory.clearStack()
                }
                undo() {
                    return this._chartWidgetCollection.undoHistory.undo()
                }
                redo() {
                    return this._chartWidgetCollection.undoHistory.redo()
                }
                trading() {
                    return W()
                }
                waitTrading() {
                    return A()
                }
                symbolSearch() {
                    return this._chartApiInstance ? new w(this._chartApiInstance) : null
                }
                saveChartOrShowTitleDialog(e, t, i) {
                    var r = this._saveChartService;
                    r && r.saveChartOrShowTitleDialog(e, t, i)
                }
                showRenameChartDialog() {
                    var e = this._saveChartService;
                    e && e.renameChart()
                }
                setUserInfo(e) {
                    e && (!1 === e.profile_data_filled && delete e.profile_data_filled, window.loginUser(e))
                }
                connect() {
                    this._chartApiInstance.connected() || this._chartApiInstance.connect(), C.forceConnect()
                }
                disconnect() {
                    this._chartApiInstance.connected() && this._chartApiInstance.disconnect(), C.isConnected() && C.disconnect()
                }
                loginRequired() {
                    return window.loginRequiredDelegate
                }
                onConnectionStatusChanged(e) {
                    C.onStatus(e)
                }
                isConnected() {
                    return C.status() === T.Open
                }
                showCreateAlertDialog() {
                    this._alertsDispatcher && this._alertsDispatcher.openCreateDialog({
                        dataSourceHub: this._getDataSourceHub(),
                        actionSource: "tv_api"
                    })
                }
                alertService() {
                    return this._alertService
                }
                publishChart(e) {
                    return P(e, !1)
                }
                setPublishChartOptions(e) {
                    D(e)
                }
                showSupportDialog() {
                    E()
                }
                openMobileChartPicker() {
                    l.emit(L)
                }
                closeMobileChartPicker() {
                    l.emit(M)
                }
                replayApi() {
                    return null === this._chartApiInstance ? Promise.reject(new Error("replay api isn't available")) : null !== this._replayApi ? Promise.resolve(this._replayApi) : Promise.all([i.e(92250), i.e(88230), i.e(18619), i.e(7624), i.e(59333), i.e(12275), i.e(33335), i.e(83772), i.e(33287), i.e(6092), i.e(54819), i.e(68825), i.e(105), i.e(28385), i.e(43768), i.e(6086), i.e(93588), i.e(64228), i.e(35022), i.e(75514), i.e(47488), i.e(59255), i.e(42353), i.e(14108), i.e(1972), i.e(90897), i.e(87839), i.e(6932)]).then(i.bind(i, 812137)).then(function(e) {
                        return null === this._replayApi && (this._replayApi = new F(new e.ReplayUIController(this._chartWidgetCollection, this._chartApiInstance))), this._replayApi
                    }.bind(this))
                }
                takeScreenshot() {
                    return this._chartWidgetCollection.takeScreenshot()
                }
                setIntervalLinkingEnabled(e) {
                    this._chartWidgetCollection.lock.interval.setValue(e)
                }
                setTimeFrame(e) {
                    this._chartWidgetCollection.setTimeFrame(e)
                }
                startFullscreen() {
                    return this._chartWidgetCollection.startFullscreen()
                }
                exitFullscreen() {
                    return this._chartWidgetCollection.exitFullscreen()
                }
                takeClientScreenshot(e) {
                    return this._chartWidgetCollection.clientSnapshot(e)
                }
                getFavoriteIntervalsService() {
                    if (this._favoriteServices) return this._favoriteServices.favoriteIntervalsService;
                    throw new Error("not implemented")
                }
                getFavoriteChartStylesService() {
                    if (this._favoriteServices) return this._favoriteServices.favoriteChartStylesService;
                    throw new Error("not implemented")
                }
                getLinetoolsFavoritesStore() {
                    if (this._favoriteServices) return this._favoriteServices.lineToolsFavoritesService;
                    throw new Error("not implemented")
                }
                supportTicketData() {
                    return this._supportTicketData
                }
                hasChartChanges() {
                    return null === this._chartChangesWatcher && null === this._hasChartChangesWatchedValue && (this._chartChangesWatcher = new b(this._chartWidgetCollection, window.saver, l), this._hasChartChangesWatchedValue = new n(this._chartChangesWatcher.hasChanges()), this._chartChangesWatcher.getOnChange().subscribe(this, (function() {
                        this._hasChartChangesWatchedValue.setValue(this._chartChangesWatcher.hasChanges())
                    }))), this._hasChartChangesWatchedValue
                }
                createGoProDialog(e) {
                    O(e)
                }
                onGoProDialog(e, t) {
                    V(e, t)
                }
            }
        },
        67683: (e, t, i) => {
            "use strict";
            i.d(t, {
                AlertService: () => s
            });
            var r = i(948070);
            const n = "alert_service";
            class s {
                constructor(e, t) {
                    this.ALERT_DIALOG_CREATE_INVOCATION_ID = r.ALERT_DIALOG_CREATE_INVOCATION_ID, this._alertsDispatcher = e, this._getDataSourceHub = t
                }
                showCreateAlertDialog() {
                    return new Promise(((e, t) => {
                        this._alertsDispatcher.openCreateDialog({
                            actionSource: n,
                            dataSourceHub: this._getDataSourceHub(),
                            onDialogOpened: e,
                            onAborted: t
                        })
                    }))
                }
                getAlertDialogInvocations() {
                    return this._alertsDispatcher.getAlertDialogInvocations()
                }
                showEditAlertDialog(e) {
                    return new Promise(((t, i) => {
                        this._alertsDispatcher.openEditDialog(e, {
                            actionSource: n,
                            onDialogOpened: t,
                            onAborted: i
                        })
                    }))
                }
                restartAlert(e) {
                    return new Promise(((t, i) => {
                        this._alertsDispatcher.restartAlert(e, {
                            actionSource: n,
                            success: t,
                            error: i
                        })
                    }))
                }
                cloneAlert(e) {
                    return new Promise(((t, i) => {
                        this._alertsDispatcher.requestAlert(e, {
                            error: i,
                            success: e => {
                                this._alertsDispatcher.cloneAlert(e, {
                                    actionSource: n,
                                    success: t,
                                    error: i
                                })
                            }
                        })
                    }))
                }
                subscribe(e) {
                    this._alertsDispatcher.subscribeToPushStream(e)
                }
                unsubscribe(e) {
                    this._alertsDispatcher.unsubscribeFromPushStream(e)
                }
            }
        },
        582423: (e, t, i) => {
            "use strict";
            i.d(t, {
                AlertsWidgetDialog: () => c
            });
            var r = i(62802),
                n = i.n(r),
                s = i(988411),
                a = i.n(s),
                o = i(240158),
                l = i(864056);
            class c {
                constructor(e) {
                    this._isVisible = new(a())(!1), this._activeTab = new(a())(function() {
                        const e = n().getValue("alerts.widget_dialog.active_tab");
                        return !e || "list" !== e && "log" !== e ? "list" : e
                    }()), this._willShow = !1, this._dialogImpl = null, this._getChartWidget = e, this._activeTab.subscribe((e => {
                        n().setValue("alerts.widget_dialog.active_tab", e)
                    }))
                }
                setTab(e) {
                    this._activeTab.setValue(e)
                }
                show() {
                    this._willShow || (this._willShow = !0, Promise.all([Promise.all([i.e(22528), i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(91901), i.e(6092), i.e(1428), i.e(1011), i.e(52701), i.e(68825), i.e(48484), i.e(62839), i.e(28955), i.e(8819), i.e(59415), i.e(89646), i.e(98365), i.e(33046), i.e(51352), i.e(65005), i.e(57825), i.e(72278), i.e(11867), i.e(3386), i.e(10146), i.e(38710), i.e(75514), i.e(30979), i.e(93699), i.e(81296), i.e(61491)]).then(i.bind(i, 723841)), (0, o.getPriceAlertsDispatcher)(), (0, l.getGlobalAlertFocusedIdTracker)(), Promise.all([i.e(56612), i.e(46670)]).then(i.bind(i, 721890))]).then((([{
                        AlertsWidgetDialogImpl: e
                    }, t, i, {
                        getUnreadFiresBuffer: r
                    }]) => {
                        this._willShow && (this._dialogImpl = new e({
                            alertsDispatcher: t,
                            globalFocusedTracker: i,
                            unreadFiresBuffer: r(),
                            onClose: () => this.hide(),
                            activeTab: this._activeTab,
                            getChartWidget: this._getChartWidget
                        }), this._isVisible.setValue(!0))
                    })))
                }
                hide() {
                    this._dialogImpl && (this._dialogImpl.destroy(), this._dialogImpl = null), this._willShow = !1, this._isVisible.setValue(!1)
                }
                visible() {
                    return this._isVisible
                }
            }
        },
        864056: (e, t, i) => {
            "use strict";
            i.d(t, {
                getGlobalAlertFocusedIdTracker: () => n
            });
            var r = i(240158);
            const n = function(e) {
                let t;
                return () => (t || (t = Promise.all([(0, r.getPriceAlertsDispatcher)(), i.e(68553).then(i.bind(i, 80170))]).then((([t, {
                    AlertInteractionStateIdTracker: i
                }]) => new i(t.alerts, e)))), t)
            }("selected")
        },
        463087: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                publishChart: () => y,
                publishChartWidget: () => f,
                setPublishChartOptions: () => w
            });
            var r = i(50959),
                n = (i(823127), i(514262)),
                s = i(125226),
                a = i(62802),
                o = i(919346),
                l = i(497754),
                c = i(111495),
                h = i(73286),
                d = i(528282),
                u = i(777754),
                g = i(823127);
            const m = "publish.showIntroText";
            let _, p = 0;

            function S() {
                clearTimeout(p), g(".publish-chart-button").removeClass("process")
            }
            const v = () => {
                const e = u.t(null, void 0, i(556959)).split(/{house_rules_link}|{house_rules_link_close}/),
                    t = r.createElement(r.Fragment, null, e[0], r.createElement("a", {
                        href: "/?solution=43000591338"
                    }, e[1]), e[2]),
                    n = u.t(null, void 0, i(141374)).split(/{link_article}|{close_link_article}/),
                    s = r.createElement(r.Fragment, null, n[0], r.createElement("a", {
                        href: "/?solution=43000570846"
                    }, n[1]), n[2]);
                return {
                    icon: {
                        [o.StdTheme.Light]: h,
                        [o.StdTheme.Dark]: d
                    },
                    title: u.t(null, void 0, i(445620)),
                    content: r.createElement(r.Fragment, null, r.createElement("p", {
                        className: l(c.text, c.paragraph)
                    }, u.t(null, void 0, i(457602))), r.createElement("ul", {
                        className: l(c.text, c.list)
                    }, r.createElement("li", null, u.t(null, void 0, i(563513))), r.createElement("li", null, t), r.createElement("li", null, s))),
                    textButton: u.t(null, void 0, i(628773))
                }
            };
            async function b(e, t) {
                if (!(0, s.isFeatureEnabled)("show_checkbox_of_house_rules_to_idea_and_script")) {
                    if (!0 === t || !a.getBool(m, !0)) return window.saver.publishChart(e);
                    const {
                        createWarningPopup: r
                    } = await i.e(63746).then(i.bind(i, 978651)), n = await r({
                        content: v(),
                        dataDialogName: "publish-intro-dialog"
                    });
                    a.setValue(m, !n)
                }
                return window.saver.publishChart(e)
            }

            function y(e, t) {
                const i = { ...e,
                    ..._
                };
                return new Promise((e => {
                    window.runOrSignIn((() => {
                        (0, s.isFeatureEnabled)("disable_phone_verification_sms") ? e(b(i, t)): (! function() {
                            const e = g(".publish-chart-button");
                            0 !== e.length && (e.addClass("process"), p = setTimeout(S, 3e4))
                        }(), (0, n.whenVerified)({
                            showDialog: !0,
                            source: "Publish chart",
                            silentPhoneVerification: null == i ? void 0 : i.silentPhoneVerification
                        }).done((() => {
                            e(b(i, t))
                        })).fail((e => (null == i ? void 0 : i.onPublishError) && i.onPublishError(e))).always(S))
                    }), {
                        source: "Publish chart",
                        sourceMeta: "Chart"
                    })
                }))
            }

            function f(e) {
                y(e, !0)
            }

            function w(e) {
                _ = e
            }
        },
        575089: (e, t, i) => {
            "use strict";
            i.d(t, {
                availableTimeFrames: () => s
            });
            var r = i(990536);
            const n = {
                8: [r.timeFrames.ytd, r.timeFrames["12m"], r.timeFrames["60m"], r.timeFrames.all],
                3: [r.timeFrames["1d"], r.timeFrames["5d"], r.timeFrames["1m"], r.timeFrames["3m"], r.timeFrames["6m"], r.timeFrames.ytd, r.timeFrames["12m"], r.timeFrames["60m"], r.timeFrames.all]
            };

            function s(e, t) {
                return 9 === t && (t = 3), 6 === t && (t = 8), n[t] || []
            }
        },
        528282: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="none"><g clip-path="url(#clip0)"><rect width="46" height="46" stroke="#D1D4DC" stroke-width="2" rx="1" x="9.877" y="20.247" transform="rotate(-14 9.877 20.247)"/><path stroke="#D1D4DC" stroke-linecap="round" stroke-width="2" d="M27.325 31.355l23.287-5.806"/><circle fill="#D1D4DC" cx="21.988" cy="32.686" r="1.5" transform="rotate(-14 21.988 32.686)"/><path stroke="#D1D4DC" stroke-linecap="round" stroke-width="2" d="M29.502 40.089l23.287-5.806"/><circle fill="#D1D4DC" cx="24.166" cy="41.42" r="1.5" transform="rotate(-14 24.166 41.42)"/><path stroke="#D1D4DC" stroke-linecap="round" stroke-width="2" d="M31.68 48.821l23.287-5.806"/><circle fill="#D1D4DC" cx="26.343" cy="50.152" r="1.5" transform="rotate(-14 26.343 50.152)"/><path stroke="#D1D4DC" stroke-linecap="round" stroke-width="2" d="M40.188 20.35l7.08-7.079"/><circle fill="#1848CC" stroke="#1E222D" stroke-width="2" cx="51" cy="9" r="7"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h72v72H0z"/></clipPath></defs></svg>'
        },
        73286: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="none"><g clip-path="url(#clip0)"><rect width="46" height="46" stroke="#1E222D" stroke-width="2" rx="1" x="9.877" y="20.247" transform="rotate(-14 9.877 20.247)"/><path stroke="#1E222D" stroke-linecap="round" stroke-width="2" d="M27.325 31.355l23.287-5.806"/><circle fill="#1E222D" cx="21.988" cy="32.686" r="1.5" transform="rotate(-14 21.988 32.686)"/><path stroke="#1E222D" stroke-linecap="round" stroke-width="2" d="M29.502 40.089l23.287-5.806"/><circle fill="#1E222D" cx="24.166" cy="41.42" r="1.5" transform="rotate(-14 24.166 41.42)"/><path stroke="#1E222D" stroke-linecap="round" stroke-width="2" d="M31.68 48.821l23.287-5.806"/><circle fill="#1E222D" cx="26.343" cy="50.152" r="1.5" transform="rotate(-14 26.343 50.152)"/><path stroke="#1E222D" stroke-linecap="round" stroke-width="2" d="M40.188 20.35l7.08-7.079"/><circle fill="#2962FF" stroke="#fff" stroke-width="2" cx="51" cy="9" r="7"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h72v72H0z"/></clipPath></defs></svg>'
        }
    }
]);
"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [34063], {
        846778: (e, t, i) => {
            i.d(t, {
                showPasteLineToolHint: () => c
            });
            var r = i(777754),
                n = i(62802),
                s = i(638456),
                o = i(470316),
                l = i(495046);
            const a = r.t(null, void 0, i(13262));

            function c(e, t) {
                l.enabled("popup_hints") && !s.CheckMobile.any() && Promise.all([i.e(81910), i.e(48348), i.e(75514), i.e(26166)]).then(i.bind(i, 410837)).then((i => {
                    const r = new i.ChartEventHintRenderer(e),
                        s = a.format({
                            shortcut: (0, o.humanReadableHash)(o.Modifiers.Mod + 86)
                        });
                    let l = null;
                    r.show(s, (() => {
                        null !== l && (clearTimeout(l), l = null, n.setValue(t, !0, {
                            forceFlush: !0
                        }))
                    })), l = setTimeout((() => {
                        l = null, r.hide()
                    }), 5e3)
                }))
            }
        },
        286293: (e, t, i) => {
            i.d(t, {
                solutionIds: () => r
            });
            const r = JSON.parse('{"EXTENDED_HOURS":43000502023,"PRE_MARKET":43000502023,"POST_MARKET":43000502023,"SPREAD_CHARTS":43000502298,"ALERTS":43000520149,"ALERT_ON_STRATEGY":43000481368,"ALERT_WEBHOOK":43000529348,"ALERT_DESCRIPTION_PLACEHOLDER":43000531021,"ALERT_RECEIVE_NOTIFICATIONS_OH_PHONE":43000474389,"ALERT_USE_ALTERNATIVE_EMAIL":43000474394,"VOLUME_PROFILE":43000502040,"VOLUME_PROFILE_INDICATOR":43000557450,"RENKO":43000502284,"KAGI":43000502272,"LINE_BREAK":43000502273,"PNF":43000502276,"FINANCIAL_DATA":43000543506,"BROKER_RATING":43000542490,"CRYPTO_MARKET_CAP":43000540941,"CRYPTO_PAYMENT":43000485536,"ALERT_ON_SPREAD":43000478406,"ALERT_ON_LOG_SCALE":43000690942,"ALERT_ON_CUSTOM_SCRIPT":43000478415,"ALERT_FUNCTION":43000597494,"SMS_VERIFICATION":43000553429,"MAGNET_MODE":43000537270,"PINE_CANNOT_DETERMINE":43000587849,"PRIVACY_SETTINGS":43000548335,"PUBLICATION_TYPE":43000609497,"SCRIPT_ACCESS":43000482573,"MEMORY_LIMITS_EXCEEDED":43000590233,"FREE_USER_FAQS":43000590947,"STRATEGY_UNREALISTIC_RESULTS":43000481029,"STRATEGY_FUTURE_DATA":43000614705,"STREAM_RULES":43000591348,"HOW_TO_USE_PAPER":43000516466,"HOW_TO_USE_CQG":43000516372,"HOW_TO_USE_OANDA":43000516375,"HOW_TO_USE_FOREXCOM":43000516374,"FAVORITE_IDEA":43000555216,"YOUTUBE_ERROR":43000612153,"AUTHORS_INSTRUCTIONS_PUBCLICATION":43000549951,"AUTHORS_INSTRUCTIONS_EDIT":43000614618,"SCRIPT_INSTRUCTIONS":43000482573,"BAR_REPLAY_UNAVAILABILITY":43000475470,"WHAT_IS_CBOE_BZX_EXCHANGE":43000473924,"GOPRO_UPGRADE_DESCRIPTION":43000473324,"GOPRO_DOWNGRADE_DESCRIPTION":43000485437,"BROKERAGE_REVIEWS":43000591351,"CHANGE_SUBSCRIPTION":43000635806,"PINE_LIBRARY_INFO":43000638371,"HOW_TO_CREATE_A_STREAM":43000646171,"HOW_DO_I_UPDATE_DESKTOP_APP":43000647779,"TECHNICAL_RATINGS":43000614331,"BACKTESTING_WIDGET":43000562362,"DEEP_BACKTESTING_WIDGET":43000670566,"DEEP_BACKTESTING":43000666199,"DEEP_BACKTESTING_AVAILABLE_DATA":43000668210,"BETA_BROKERS":43000673434,"VIDEO_UPLOAD_FAILED":43000666607,"VIDEO_DEVICE_ACCESS":43000677209,"PUBLIC_INVITE_ONLY_SCRIPTS":43000614617,"HOW_DOES_BRACKETS_MANAGEMENT_WORK":43000631987,"HOW_TO_SEE_THE_DEEPEST_HIST_DATA":43000687053,"I_CANT_SEE_ALL_HIST_DATA_ON_RES_LOWER_THAN_DAY":43000480679,"GET_A_REFUND":43000485430,"USE_SETTLEMENT_AS_CLOSE_ON_DAILY_INTREVAL":43000685268,"ADJUST_FOR_CONTRACT_CHANGES":43000685266,"WHY_IS_MY_ACCOUNT_BANNED":43000674726,"HOW_TO_PUBLISH_A_VIDEO_IDEA":43000476752,"WHAT_ARE_TRADINGVIEW_LIVE_STREAMS_BEST_PRACTICES":43000685377,"TELL_ME_MORE_ABOUT_THE_COMMUNITY_SCRIPTS":43000558522,"HOW_TO_POST_AWESOME_IDEAS_AND_GET_LOTS_OF_LIKES":43000603748,"CONNECTIONS_LIMIT_EXCEEDED":43000693877}')
        },
        683890: (e, t, i) => {
            i.d(t, {
                TranslatedString: () => r
            });
            class r {
                constructor(e, t) {
                    this._originalText = e, this._translatedText = t
                }
                originalText() {
                    return this._originalText
                }
                translatedText() {
                    return this._translatedText
                }
                format(e) {
                    const t = {},
                        i = {};
                    for (const n of Object.keys(e)) {
                        const s = e[n];
                        s instanceof r ? (t[n] = s.originalText(), i[n] = s.translatedText()) : (t[n] = s.toString(), i[n] = s.toString())
                    }
                    const n = this._originalText.format(t),
                        s = this._translatedText.format(i);
                    return new r(n, s)
                }
            }
        },
        617735: (e, t, i) => {
            var r;
            i.d(t, {
                    ACTION_ID: () => r
                }),
                function(e) {
                    e.TVActionId = "TVActionId", e.ChartApplyIndicatorsToAllCharts = "Chart.ApplyIndicatorsToAllCharts", e.ChartChangeTimeZone = "Chart.ChangeTimeZone", e.ChartDialogsShowChangeInterval = "Chart.Dialogs.ShowChangeInterval", e.ChartDialogsShowChangeSymbol = "Chart.Dialogs.ShowChangeSymbol", e.ChartDialogsShowCompareOrAddSymbol = "Chart.Dialogs.ShowCompareOrAddSymbol", e.ChartDialogsShowGeneralSettings = "Chart.Dialogs.ShowGeneralSettings", e.ChartDialogsShowGeneralSettingsSymbolTab = "Chart.Dialogs.ShowGeneralSettings.SymbolTab", e.ChartDialogsShowGoToDate = "Chart.Dialogs.ShowGoToDate", e.ChartDialogsShowInsertIndicators = "Chart.Dialogs.ShowInsertIndicators", e.ChartDialogsShowSymbolInfo = "Chart.Dialogs.ShowSymbolInfo", e.ChartDrawingToolbarToggleVisibility = "Chart.DrawingToolbar.ToggleVisibility", e.ChartLinesToggleBidAskLinesVisibility = "Chart.Lines.ToggleBidAskLinesVisibility", e.ChartLinesToggleHighLowLinesVisibility = "Chart.Lines.ToggleHighLowLinesVisibility", e.ChartLinesToggleAverageLineVisibility = "Chart.Lines.ToggleAverageLineVisibility", e.ChartLinesToggleSeriesPrevCloseLineVisibility = "Chart.Lines.ToggleSeriesPrevCloseLineVisibility", e.ChartLinesToggleSeriesPriceLineVisibility = "Chart.Lines.ToggleSeriesPriceLineVisibility", e.ChartLineToolPitchforkChangeTypeToInside = "Chart.LineTool.Pitchfork.ChangeTypeToInside", e.ChartLineToolPitchforkChangeTypeToModifiedSchiff = "Chart.LineTool.Pitchfork.ChangeTypeToModifiedSchiff", e.ChartLineToolPitchforkChangeTypeToOriginal = "Chart.LineTool.Pitchfork.ChangeTypeToOriginal", e.ChartLineToolPitchforkChangeTypeToSchiff = "Chart.LineTool.Pitchfork.ChangeTypeToSchiff", e.ChartMarksToggleVisibility = "Chart.Marks.ToggleVisibility", e.ChartMoveChartInLayout = "Chart.MoveChartInLayout", e.ChartMoveChartInLayoutBack = "Chart.MoveChartInLayout.Back", e.ChartMoveChartInLayoutForward = "Chart.MoveChartInLayout.Forward", e.ChartObjectTreeShow = "Chart.ObjectTree.Show", e.ChartPriceScaleLabelsToggleBidAskLabelsVisibility = "Chart.PriceScale.Labels.ToggleBidAskLabelsVisibility", e.ChartPriceScaleLabelsToggleHighLowPriceLabelsVisibility = "Chart.PriceScale.Labels.ToggleHighLowPriceLabelsVisibility", e.ChartPriceScaleLabelsToggleAveragePriceLabelVisibility = "Chart.PriceScale.Labels.ToggleAveragePriceLabelVisibility", e.ChartPriceScaleLabelsToggleIndicatorsNameLabelsVisibility = "Chart.PriceScale.Labels.ToggleIndicatorsNameLabelsVisibility", e.ChartPriceScaleLabelsToggleIndicatorsValueLabelsVisibility = "Chart.PriceScale.Labels.ToggleIndicatorsValueLabelsVisibility", e.ChartPriceScaleLabelsToggleSeriesLastValueVisibility = "Chart.PriceScale.Labels.ToggleSeriesLastValueVisibility", e.ChartPriceScaleLabelsToggleSymbolNameLabelsVisibility = "Chart.PriceScale.Labels.ToggleSymbolNameLabelsVisibility", e.ChartPriceScaleLabelsToggleSymbolPrevCloseValueVisibility = "Chart.PriceScale.Labels.ToggleSymbolPrevCloseValueVisibility", e.ChartPriceScaleMergeAllScalesToLeft = "Chart.PriceScale.MergeAllScalesToLeft",
                        e.ChartPriceScaleMergeAllScalesToRight = "Chart.PriceScale.MergeAllScalesToRight", e.ChartPriceScaleMoveToLeft = "Chart.PriceScale.MoveToLeft", e.ChartPriceScaleMoveToRight = "Chart.PriceScale.MoveToRight", e.ChartPriceScaleToggleAddOrderPlusButtonVisibility = "Chart.PriceScale.ToggleAddOrderPlusButtonVisibility", e.ChartPriceScaleToggleAutoScaleSeriesOnly = "Chart.PriceScale.ToggleAutoScaleSeriesOnly", e.ChartPriceScaleToggleCountdownToBarCloseVisibility = "Chart.PriceScale.ToggleCountdownToBarCloseVisibility", e.ChartRedo = "Chart.Redo", e.ChartRemoveAllIndicators = "Chart.RemoveAllIndicators", e.ChartRemoveAllIndicatorsAndLineTools = "Chart.RemoveAllIndicatorsAndLineTools", e.ChartRemoveAllLineTools = "Chart.RemoveAllLineTools", e.ChartScalesReset = "Chart.Scales.Reset", e.ChartScalesToggleLockPriceToBarRatio = "Chart.Scales.ToggleLockPriceToBarRatio", e.ChartSelectedObjectHide = "Chart.SelectedObject.Hide", e.ChartSelectedObjectRemove = "Chart.SelectedObject.Remove", e.ChartSelectedObjectShowSettingsDialog = "Chart.SelectedObject.ShowSettingsDialog", e.ChartSelectedObjectToggleLocked = "Chart.SelectedObject.ToggleLocked", e.ChartSeriesPriceScaleToggleAutoScale = "Chart.Series.PriceScale.ToggleAutoScale", e.ChartSeriesPriceScaleToggleIndexedTo100 = "Chart.Series.PriceScale.ToggleIndexedTo100", e.ChartSeriesPriceScaleToggleInvertPriceScale = "Chart.Series.PriceScale.ToggleInvertPriceScale", e.ChartSeriesPriceScaleToggleLogarithmic = "Chart.Series.PriceScale.ToggleLogarithmic", e.ChartSeriesPriceScaleTogglePercentage = "Chart.Series.PriceScale.TogglePercentage", e.ChartSeriesPriceScaleToggleRegular = "Chart.Series.PriceScale.ToggleRegular", e.ChartSessionBreaksToggleVisibility = "Chart.SessionBreaks.ToggleVisibility", e.ChartTimeScaleReset = "Chart.TimeScale.Reset", e.ChartUndo = "Chart.Undo", e.ChartSourceIntervalsVisibility = "Chart.Source.IntervalsVisibility", e.ChartSourceIntervalsVisibilityCurrentAndAbove = "Chart.Source.IntervalsVisibility.CurrentAndAbove", e.ChartSourceIntervalsVisibilityCurrentAndBelow = "Chart.Source.IntervalsVisibility.CurrentAndBelow", e.ChartSourceIntervalsVisibilityOnlyCurrent = "Chart.Source.IntervalsVisibility.Current", e.ChartSourceIntervalsVisibilityAll = "Chart.Source.IntervalsVisibility.All"
                }(r || (r = {}))
        },
        310399: (e, t, i) => {
            i.r(t), i.d(t, {
                Action: () => a,
                ActionAsync: () => c,
                Separator: () => h,
                Loader: () => u
            });
            var r = i(650151),
                n = i(869403),
                s = i.n(n),
                o = i(470316),
                l = i(777491);
            class a {
                constructor(e, t = l.guid()) {
                    this.type = "action", this._destroyed = !1, this._binding = null, (0, r.assert)(void 0 !== e.actionId, "actionId must be defined"), this.id = t, this._onUpdate = new(s()), this._options = e, this.update(e)
                }
                execute() {
                    this._options.checkable && this.update({
                        checked: !this._options.checked
                    }), this._options.onExecute && this._options.onExecute(this)
                }
                getLabel() {
                    return this._options.label || ""
                }
                getSubItems() {
                    return this._options.subItems || []
                }
                isDisabled() {
                    return !0 === this._options.disabled
                }
                isActive() {
                    return !0 === this._options.active
                }
                isCheckable() {
                    return !0 === this._options.checkable
                }
                isChecked() {
                    return !0 === this._options.checked
                }
                isLoading() {
                    return !0 === this._options.loading
                }
                getSize() {
                    var e;
                    return null !== (e = this._options.size) && void 0 !== e ? e : "normal"
                }
                getPayload() {
                    return this._options.payload
                }
                update(e) {
                    this._destroyed || (this._unbindShortcut(), e.hotkeyHash && (this._options.shortcutHint = (0, o.humanReadableHash)(e.hotkeyHash)), this._options = Object.assign(this._options, e), this._bindShortcut(), this._onUpdate.fire(this))
                }
                onUpdate() {
                    return this._onUpdate
                }
                getState() {
                    return {
                        actionId: this._options.actionId,
                        label: this.getLabel(),
                        disabled: this.isDisabled(),
                        active: this.isActive(),
                        subItems: this.getSubItems(),
                        checkable: this.isCheckable(),
                        checked: this.isChecked(),
                        loading: this.isLoading(),
                        size: this.getSize(),
                        doNotCloseOnClick: this._options.doNotCloseOnClick || !1,
                        shortcutHint: this._options.shortcutHint,
                        hint: this._options.hint,
                        icon: this._options.icon,
                        iconChecked: this._options.iconChecked,
                        toolbox: this._options.toolbox,
                        showToolboxOnHover: this._options.showToolboxOnHover || !1,
                        statName: this._options.statName,
                        name: this._options.name,
                        invisibleHotkey: this._options.invisibleHotkey,
                        noInteractive: this._options.noInteractive
                    }
                }
                getBinding() {
                    return this._binding
                }
                setBinding(e) {
                    this._binding = e
                }
                destroy() {
                    var e, t;
                    this._destroyed = !0, this._onUpdate.destroy(), null !== this._binding && this._binding.destroy(), this._unbindShortcut(), null === (t = (e = this._options).onDestroy) || void 0 === t || t.call(e)
                }
                options() {
                    return this._options
                }
                _bindShortcut() {
                    if (!this._options.hotkeyGroup || !this._options.hotkeyHash) return;
                    const e = "string" == typeof this._options.label ? this._options.label : this._options.name;
                    this._hotkeyAction = this._options.hotkeyGroup.add({
                        hotkey: this._options.hotkeyHash,
                        desc: e,
                        handler: () => this.execute(),
                        isDisabled: () => this.isDisabled()
                    })
                }
                _unbindShortcut() {
                    this._hotkeyAction && (this._hotkeyAction.destroy(), delete this._hotkeyAction)
                }
            }
            class c extends a {
                constructor(e, t, i) {
                    super({
                        actionId: e
                    }, i), this._loader = t, this._loaded = !1
                }
                loadOptions() {
                    return this._loadingPromise || (this._loadingPromise = this._loader().then((e => {
                        this._loaded = !0, this.update(e)
                    }))), this._loadingPromise
                }
                getState() {
                    return this.loadOptions(), super.getState()
                }
                isLoading() {
                    return !this.isLoaded()
                }
                isLoaded() {
                    return this._loaded
                }
            }
            class h {
                constructor(e) {
                    this.type = "separator", this.id = l.guid(), this._hint = e
                }
                getHint() {
                    return this._hint
                }
            }
            class u extends a {
                constructor(e) {
                    super({
                        actionId: e
                    })
                }
                isLoading() {
                    return !0
                }
                getSize() {
                    return "big"
                }
            }
        },
        741341: (e, t, i) => {
            i.d(t, {
                getCanvasDevicePixelRatio: () => l,
                getBindingPixelRatio: () => a,
                getContext2D: () => c,
                getPrescaledContext2D: () => h,
                getPretransformedContext2D: () => u,
                fillRect: () => d,
                clearRect: () => p,
                drawScaled: () => _,
                createDisconnectedCanvas: () => P,
                createDisconnectedBoundCanvas: () => v,
                createBoundCanvas: () => m,
                calcTextHorizontalShift: () => f,
                disableSelection: () => C,
                addExclusionAreaByScope: () => y,
                addExclusionArea: () => T,
                measureText: () => w
            });
            var r = i(327714),
                n = i(650151),
                s = i(768038),
                o = i(638456);

            function l(e) {
                var t, i;
                return Math.max(1, (null === (i = null === (t = e.ownerDocument) || void 0 === t ? void 0 : t.defaultView) || void 0 === i ? void 0 : i.devicePixelRatio) || 1)
            }

            function a(e) {
                return l(e.canvasElement)
            }

            function c(e) {
                const t = (0, n.ensureNotNull)(e.getContext("2d"));
                return t.setTransform(1, 0, 0, 1, 0, 0), t
            }

            function h(e) {
                const t = (0, n.ensureNotNull)(e.getContext("2d")),
                    i = l(e);
                return t.setTransform(i, 0, 0, i, 0, 0), t
            }

            function u(e, t) {
                const i = (0, n.ensureNotNull)(e.canvasElement.getContext("2d")),
                    r = a(e);
                return i.setTransform(r, 0, 0, r, 0, 0), t || i.translate(.5, .5), i
            }

            function d(e, t, i, r, n, s) {
                e.save(), e.translate(-.5, -.5), e.fillStyle = s, e.fillRect(t, i, r, n), e.restore()
            }

            function p(e, t, i, r, n, s) {
                e.save(), e.translate(-.5, -.5), e.globalCompositeOperation = "copy", e.fillStyle = s, e.fillRect(t, i, r, n), e.restore()
            }

            function _(e, t, i) {
                e.save(), e.scale(t, t), i(), e.restore()
            }

            function P(e, t, i) {
                const r = g(e);
                return void 0 === i && (i = l(r)), r.width = t.width * i, r.height = t.height * i, r
            }

            function v(e, t) {
                const i = g(e),
                    n = (0, r.bindCanvasElementBitmapSizeTo)(i, {
                        type: "device-pixel-content-box",
                        transform: (e, t) => ({
                            width: Math.max(e.width, t.width),
                            height: Math.max(e.height, t.height)
                        })
                    });
                return n.resizeCanvasElement(t), n
            }

            function g(e) {
                const t = e.createElement("canvas");
                return C(t), t
            }

            function m(e, t) {
                const i = g((0, n.ensureNotNull)(e.ownerDocument));
                e.appendChild(i);
                const s = (0, r.bindCanvasElementBitmapSizeTo)(i, {
                    type: "device-pixel-content-box",
                    transform: (e, t) => ({
                        width: Math.max(e.width, t.width),
                        height: Math.max(e.height, t.height)
                    })
                });
                return s.resizeCanvasElement(t), s
            }

            function f(e, t) {
                return "center" === e.textAlign ? 0 : (0, s.isRtl)() ? "start" === e.textAlign || "right" === e.textAlign ? t : 0 : "start" === e.textAlign || "left" === e.textAlign ? 0 : t
            }

            function C(e) {
                e.style.userSelect = "none", e.style.webkitUserSelect = "none", e.style.msUserSelect = "none", e.style.MozUserSelect = "none", e.style.webkitTapHighlightColor = "transparent"
            }

            function y(e, t) {
                const {
                    context: i,
                    horizontalPixelRatio: r,
                    verticalPixelRatio: n,
                    bitmapSize: s
                } = e;
                i.beginPath(), i.rect(0, 0, s.width, s.height);
                for (let e = 0; e < t.length; e++) {
                    let {
                        x: s,
                        y: o
                    } = t[e];
                    s *= r, o *= n, 0 !== e ? i.lineTo(s, o) : i.moveTo(s, o)
                }
                i.closePath(), i.clip("evenodd")
            }

            function T(e, t, i) {
                y({
                    context: e,
                    horizontalPixelRatio: t.pixelRatio,
                    verticalPixelRatio: t.pixelRatio,
                    bitmapSize: (0, r.size)({
                        width: t.physicalWidth,
                        height: t.physicalHeight
                    }),
                    mediaSize: (0, r.size)({
                        width: t.cssWidth,
                        height: t.cssHeight
                    })
                }, i)
            }
            let b;

            function w(e, t) {
                return b || function() {
                    const e = document.createElement("canvas");
                    e.width = 0, e.height = 0, (0, o.isMac)() && (e.style.display = "none", document.body.append(e)), b = (0, n.ensureNotNull)(e.getContext("2d")), b.textBaseline = "alphabetic", b.textAlign = "center"
                }(), b.font = t, b.measureText(e)
            }
        },
        623331: (e, t, i) => {
            i.r(t), i.d(t, {
                setChartFontFamily: () => o,
                CHART_FONT_FAMILY: () => l,
                CHART_MONOSPACE_FONT_FAMILY: () => a
            });
            var r = i(314802);
            const n = "'Trebuchet MS', Roboto, Ubuntu, sans-serif",
                s = `-apple-system, BlinkMacSystemFont, ${n}`;

            function o(e) {
                l = e
            }
            let l = ((0, r.isOnMobileAppPage)("old"), n);
            const a = "monospace"; {
                const e = ["U+2E80-2FD5", "U+3040-309F", "U+1B100-1B12F", "U+1AFF0-1AFFF", "U+1B000-1B0FF", "U+1B130-1B16F", "U+3190-319F", "U+30A0-30FF", "U+31F0-31FF", "U+3400-4DBF", "U+4E00-9FFF", "U+0E00-0E7F"],
                    t = l;
                (async () => {
                    if (!/iPhone OS 15_\d+?/.test(navigator.userAgent)) return s; {
                        if (["kr", "zh_CN", "zh_TW"].includes(window.locale)) return l;
                        const t = new FontFace("ChartIosFont", "local(Helvetica), local(Arial)", {
                            unicodeRange: e.join(", ")
                        });
                        try {
                            return document.fonts.add(await t.load()), `ChartIosFont, ${s}`
                        } catch (e) {
                            return l
                        }
                    }
                })().then((e => {
                    t === l && o(e)
                }))
            }
        },
        727775: (e, t, i) => {
            i.d(t, {
                showCustomUrlEventDialog: () => l
            });
            var r = i(777754),
                n = i(779923);
            const s = r.t(null, void 0, i(468988)),
                o = r.t(null, void 0, i(620036));
            async function l(e) {
                const {
                    onConfirm: t,
                    onClose: i,
                    title: r,
                    placeholderText: l
                } = e;
                return (0, n.showRename)({
                    title: r,
                    text: "",
                    placeholder: l,
                    mainButtonText: s,
                    cancelButtonText: o,
                    onRename: ({
                        newValue: e,
                        dialogClose: i
                    }) => {
                        t(e), i()
                    },
                    onClose: i
                })
            }
        },
        906125: (e, t, i) => {
            i.d(t, {
                CHART_WIDGET_COLLECTION_SERVICE: () => n,
                chartWidgetCollectionService: () => s,
                CollectionViewMode: () => o
            });
            var r = i(564894);
            const n = {
                id: "ChartWidgetCollectionService"
            };

            function s() {
                return (0, r.hasService)(n) ? (0, r.service)(n) : null
            }
            var o;
            ! function(e) {
                e.Multichart = "multichart", e.ForceFullscreen = "force-fullscreen"
            }(o || (o = {}))
        },
        573651: (e, t, i) => {
            i.d(t, {
                InvalidationLevel: () => r,
                InvalidationMask: () => l,
                defaultInvalidationLevel: () => o
            });
            var r, n = i(650151);
            class s {
                constructor(e = o) {
                    this._paneInvalidationLevel = o, this._leftPriceScalesInvalidationMap = new Map, this._rightPriceScalesInvalidationMap = new Map, this._legendWidgetInvalidated = !1, this._invalidationLevel = e
                }
                fullInvalidation() {
                    return this._invalidationLevel
                }
                invalidateAll(e) {
                    this._invalidationLevel = Math.max(this._invalidationLevel, e)
                }
                invalidatePane(e) {
                    this._paneInvalidationLevel = Math.max(this._invalidationLevel, e)
                }
                invalidateLegendWidgetLayout() {
                    this._legendWidgetInvalidated = !0
                }
                invalidatePriceScale(e, t, i) {
                    const r = "left" === e ? this._leftPriceScalesInvalidationMap : this._rightPriceScalesInvalidationMap,
                        n = r.get(t) || o;
                    r.set(t, Math.max(n, i))
                }
                invalidationLevelForPane() {
                    return Math.max(this._paneInvalidationLevel, this._invalidationLevel)
                }
                legendWidgetLayoutInvalidated() {
                    return this._legendWidgetInvalidated || this._invalidationLevel === r.Full
                }
                getterForPriceScaleInvalidationLevelBySide(e) {
                    const t = "left" === e ? this._leftPriceScalesInvalidationMap : this._rightPriceScalesInvalidationMap;
                    return e => Math.max(t.get(e) || o, this._invalidationLevel)
                }
                priceScaleSideMaxLevel(e) {
                    const t = "left" === e ? this._leftPriceScalesInvalidationMap : this._rightPriceScalesInvalidationMap;
                    let i = this._invalidationLevel;
                    return t.size > 0 && t.forEach((e => {
                        e > i && (i = e)
                    })), i
                }
                merge(e) {
                    this._invalidationLevel = Math.max(this._invalidationLevel, e._invalidationLevel), this._paneInvalidationLevel = Math.max(this._paneInvalidationLevel, e._paneInvalidationLevel), e._leftPriceScalesInvalidationMap.forEach(((e, t) => {
                        const i = this._leftPriceScalesInvalidationMap.get(t) || o;
                        this._leftPriceScalesInvalidationMap.set(t, Math.max(i, e))
                    })), e._rightPriceScalesInvalidationMap.forEach(((e, t) => {
                        const i = this._rightPriceScalesInvalidationMap.get(t) || o;
                        this._rightPriceScalesInvalidationMap.set(t, Math.max(i, e))
                    })), this._legendWidgetInvalidated = this._legendWidgetInvalidated || e._legendWidgetInvalidated
                }
            }! function(e) {
                e[e.None = 0] = "None", e[e.Cursor = 1] = "Cursor", e[e.Light = 2] = "Light", e[e.Full = 3] = "Full"
            }(r || (r = {}));
            const o = r.None;
            class l {
                constructor(e = o) {
                    this._panesOrderChanged = !1, this._keepVisibleTimeRangeOnResize = !1, this._timeAxisInvalidationLevel = o, this._invalidatedPanes = new Map,
                        this._additionalActions = [], this._timeScaleInvalidations = [], this._invalidationLevel = e
                }
                invalidateAll(e) {
                    this._invalidationLevel !== e && (this._invalidationLevel = Math.max(this._invalidationLevel, e), this._invalidatedPanes.forEach((e => {
                        e.invalidateAll(this._invalidationLevel)
                    })))
                }
                invalidateAllPane(e, t) {
                    this._invalidatedPanes.has(e) || this._invalidatedPanes.set(e, new s(this._invalidationLevel)), (0, n.ensureDefined)(this._invalidatedPanes.get(e)).invalidateAll(t)
                }
                invalidatePriceScale(e, t, i, r) {
                    this._invalidatedPanes.has(e) || this._invalidatedPanes.set(e, new s(this._invalidationLevel)), (0, n.ensureDefined)(this._invalidatedPanes.get(e)).invalidatePriceScale(t, i, r)
                }
                invalidateTimeScale(e) {
                    this._timeAxisInvalidationLevel = Math.max(this._timeAxisInvalidationLevel, e)
                }
                invalidatePanesOrder() {
                    this._panesOrderChanged = !0
                }
                lockVisibleTimeRangeOnResize() {
                    this._keepVisibleTimeRangeOnResize = !0
                }
                fullInvalidation() {
                    return this._invalidationLevel
                }
                maxPaneInvalidation() {
                    const e = [];
                    return this._invalidatedPanes.forEach((t => {
                        e.push(t.fullInvalidation())
                    })), Math.max(...e, this._invalidationLevel)
                }
                invalidateForPane(e) {
                    return this._invalidatedPanes.get(e) || new s(this._invalidationLevel)
                }
                invalidateForTimeScale() {
                    return Math.max(this._timeAxisInvalidationLevel, this._invalidationLevel)
                }
                validationActions() {
                    return this._additionalActions
                }
                addValidationAction(e) {
                    this._additionalActions.push(e)
                }
                merge(e) {
                    this._invalidationLevel = Math.max(this._invalidationLevel, e._invalidationLevel), this._panesOrderChanged = this._panesOrderChanged || e._panesOrderChanged, this._keepVisibleTimeRangeOnResize = this._keepVisibleTimeRangeOnResize || e._keepVisibleTimeRangeOnResize, this._invalidatedPanes.forEach((e => {
                        e.invalidateAll(this._invalidationLevel)
                    })), e._invalidatedPanes.forEach(((e, t) => {
                        this._invalidatedPanes.has(t) || this._invalidatedPanes.set(t, new s(this._invalidationLevel)), (0, n.ensureDefined)(this._invalidatedPanes.get(t)).merge(e)
                    })), this._timeAxisInvalidationLevel = Math.max(this._timeAxisInvalidationLevel, e._timeAxisInvalidationLevel);
                    for (let t = 0; t < e._additionalActions.length; t++) this._additionalActions.push(e._additionalActions[t]);
                    for (const t of e._timeScaleInvalidations) this._applyTimeScaleInvalidation(t)
                }
                panesOrderInvalidated() {
                    return this._panesOrderChanged
                }
                isVisibleTimeRangeLockedOnResize() {
                    return this._keepVisibleTimeRangeOnResize
                }
                setTimeScaleAnimation(e) {
                    this._removeTimeScaleAnimation(), this._timeScaleInvalidations.push({
                        type: 0,
                        value: e
                    })
                }
                stopTimeScaleAnimation() {
                    this._removeTimeScaleAnimation(), this._timeScaleInvalidations.push({
                        type: 1
                    })
                }
                timeScaleInvalidations() {
                    return this._timeScaleInvalidations
                }
                static cursor() {
                    return new l(r.Cursor)
                }
                static light() {
                    return new l(r.Light)
                }
                static full() {
                    return new l(r.Full)
                }
                static panesOrder() {
                    const e = l.full();
                    return e.invalidatePanesOrder(), e
                }
                static invalidateLegendWidgetLayout(e) {
                    var t;
                    const i = new l;
                    return i._invalidatedPanes.set(e, new s), null === (t = i._invalidatedPanes.get(e)) || void 0 === t || t.invalidateLegendWidgetLayout(), i
                }
                static validateAction(e) {
                    const t = new l;
                    return t._additionalActions.push(e), t
                }
                _applyTimeScaleInvalidation(e) {
                    switch (e.type) {
                        case 0:
                            this.setTimeScaleAnimation(e.value);
                            break;
                        case 1:
                            this._removeTimeScaleAnimation()
                    }
                }
                _removeTimeScaleAnimation() {
                    const e = this._timeScaleInvalidations.findIndex((e => 0 === e.type));
                    if (-1 !== e) {
                        const [t] = this._timeScaleInvalidations.splice(e, 1);
                        t.value.terminate()
                    }
                }
            }
        },
        545613: (e, t, i) => {
            i.d(t, {
                lastMouseOrTouchEventInfo: () => n,
                setLastMouseOrTouchEventInfo: () => s
            });
            let r = (0, i(638456).supportTouch)() ? {
                isTouch: !0,
                stylus: !1
            } : {
                isTouch: !1
            };

            function n() {
                return r
            }

            function s(e) {
                r = e.isTouch ? {
                    isTouch: !0,
                    stylus: e.stylus
                } : {
                    isTouch: !1
                }
            }
        },
        136916: (e, t, i) => {
            var r, n, s, o, l, a, c, h, u, d, p, _, P, v, g;
            i.r(t), i.d(t, {
                    CONNECTSTATUSES: () => r,
                    ORDERTYPE: () => n,
                    SIDE: () => s,
                    ORDERSTATUS: () => o,
                    ORDERSTATUSFILTER: () => l,
                    TradingEntityType: () => a,
                    PARENTTYPE: () => c,
                    BracketType: () => h,
                    TICKETFOCUS: () => u,
                    NOTIFICATION: () => d,
                    OrderOrPositionMessageType: () => p,
                    AccountType: () => _,
                    DisconnectType: () => P,
                    PipValueType: () => v,
                    RestrictionType: () => g
                }),
                function(e) {
                    e[e.CONNECTED = 1] = "CONNECTED", e[e.CONNECTING = 2] = "CONNECTING", e[e.DISCONNECTED = 3] = "DISCONNECTED", e[e.ERROR = 4] = "ERROR"
                }(r || (r = {})),
                function(e) {
                    e[e.LIMIT = 1] = "LIMIT", e[e.MARKET = 2] = "MARKET", e[e.STOP = 3] = "STOP", e[e.STOPLIMIT = 4] = "STOPLIMIT"
                }(n || (n = {})),
                function(e) {
                    e[e.BUY = 1] = "BUY", e[e.SELL = -1] = "SELL"
                }(s || (s = {})),
                function(e) {
                    e[e.CANCELED = 1] = "CANCELED", e[e.FILLED = 2] = "FILLED", e[e.INACTIVE = 3] = "INACTIVE", e[e.PLACING = 4] = "PLACING", e[e.REJECTED = 5] = "REJECTED", e[e.WORKING = 6] = "WORKING"
                }(o || (o = {})),
                function(e) {
                    e[e.ALL = 0] = "ALL", e[e.CANCELED = 1] = "CANCELED", e[e.FILLED = 2] = "FILLED", e[e.INACTIVE = 3] = "INACTIVE", e[e.REJECTED = 5] = "REJECTED", e[e.WORKING = 6] = "WORKING"
                }(l || (l = {})),
                function(e) {
                    e[e.Order = 1] = "Order", e[e.Position = 2] = "Position"
                }(a || (a = {})),
                function(e) {
                    e[e.ORDER = 1] = "ORDER", e[e.POSITION = 2] = "POSITION"
                }(c || (c = {})),
                function(e) {
                    e[e.StopLoss = 0] = "StopLoss", e[e.TakeProfit = 1] = "TakeProfit", e[e.TrailingStop = 2] = "TrailingStop"
                }(h || (h = {})),
                function(e) {
                    e[e.LIMITPRICE = 1] = "LIMITPRICE", e[e.STOPPRICE = 2] = "STOPPRICE", e[e.TAKEPROFIT = 3] = "TAKEPROFIT", e[e.STOPLOSS = 4] = "STOPLOSS"
                }(u || (u = {})),
                function(e) {
                    e[e.ERROR = 0] = "ERROR", e[e.SUCCESS = 1] = "SUCCESS"
                }(d || (d = {})),
                function(e) {
                    e.Information = "information", e.Warning = "warning", e.Error = "error"
                }(p || (p = {})),
                function(e) {
                    e.Demo = "demo", e.Live = "live"
                }(_ || (_ = {})),
                function(e) {
                    e[e.LogOut = 0] = "LogOut", e[e.FailedRestoring = 1] = "FailedRestoring", e[e.Offline = 2] = "Offline", e[e.APIError = 3] = "APIError", e[e.TwoFactorRequired = 4] = "TwoFactorRequired", e[e.CancelAuthorization = 5] = "CancelAuthorization", e[e.TimeOutForAuthorization = 6] = "TimeOutForAuthorization", e[e.OauthError = 7] = "OauthError", e[e.BrokenConnection = 8] = "BrokenConnection"
                }(P || (P = {})),
                function(e) {
                    e[e.None = 0] = "None", e[e.Pips = 1] = "Pips", e[e.Ticks = 2] = "Ticks"
                }(v || (v = {})),
                function(e) {
                    e.Halted = "HALTED", e.NotShortable = "NOT-SHORTABLE", e.HardToBorrow = "HARD-TO-BORROW"
                }(g || (g = {}))
        },
        437181: (e, t, i) => {
            i.d(t, {
                alignToStep: () => s
            });
            var r = i(960521),
                n = i.n(r);

            function s(e, t) {
                return n()(e).div(t).round(0, n().roundHalfUp).mul(t).toNumber()
            }
        },
        56155: (e, t, i) => {
            var r = i(538708).makeFont,
                n = i(538708).parseFont,
                s = i(272001).getLogger;
            const {
                drawPoly: o
            } = i(914679);
            var l = s("Model.ChartTradingUtils"),
                a = {
                    _fontHeightCache: {},
                    _parsedColorCache: {},
                    _parseColor: function(e) {
                        if (this._parsedColorCache[e]) return this._parsedColorCache[e];
                        var t = document.createElement("div");
                        t.style.color = e;
                        var i = t.style.color.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i) || t.style.color.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d*\.?\d+)\s*\)$/i),
                            r = {
                                r: i[1],
                                g: i[2],
                                b: i[3],
                                a: i[4] || "1"
                            };
                        return this._parsedColorCache[e] = r, r
                    },
                    getColorFromProperties: function(e, t) {
                        var i = 1 - t.value() / 100,
                            r = this._parseColor(e.value());
                        return "rgba(" + r.r + "," + r.g + "," + r.b + "," + i + ")"
                    },
                    setColorToProperties: function(e, t, i) {
                        var r = this._parseColor(e);
                        t.setValue("rgb(" + r.r + "," + r.g + "," + r.b + ")");
                        var n = 100 * (1 - r.a);
                        i.setValue(Math.max(0, Math.min(n, 100)))
                    },
                    getFontFromProperties: function(e, t, i, n) {
                        return r(t.value(), e.value(), n.value() ? "italic" : "", i.value() ? "bold" : "")
                    },
                    setFontToProperties: function(e, t, i, r, s) {
                        var o = n(e);
                        null !== o ? (o.family.length > 0 && t.setValue(o.family), i.setValue(o.size), r.setValue(o.bold), s.setValue(o.italic)) : l.logError("Invalid font: " + e)
                    },
                    fontHeight: function(e) {
                        if (!this._fontHeightCache[e]) {
                            var t = document.createElement("span");
                            t.appendChild(document.createTextNode("height")), document.body.appendChild(t), t.style.cssText = "font: " + e + "; white-space: nowrap; display: inline;";
                            var i = t.offsetHeight;
                            document.body.removeChild(t), this._fontHeightCache[e] = Math.ceil(i)
                        }
                        return this._fontHeightCache[e]
                    },
                    drawPolyHoverOrPress: function(e, t, i, r) {
                        r ? (e.save(), e.fillStyle = "rgba(0, 0, 0, 0.15)", o(e, t, !0), e.restore()) : i && (e.save(), e.fillStyle = "rgba(0, 0, 0, 0.1)", o(e, t, !0), e.restore())
                    },
                    repaint: function(e) {
                        e.lightUpdate()
                    },
                    roundToMinTick: function(e, t) {
                        var i = 1 / e.mainSource().base();
                        return i * Math.round(t / i)
                    }
                };
            e.exports = a
        },
        282151: (e, t, i) => {
            i.d(t, {
                DataSource: () => c
            });
            var r = i(495046),
                n = i(988411),
                s = i.n(n),
                o = i(777491),
                l = i(869403),
                a = i.n(l);
            class c {
                constructor(e) {
                    this.hasAlert = new(s())(!1), this._zorder = 0, this.m_priceScale = null, this._ownerSource = null, this._userEditEnabled = !0, this._onPriceScaleChanged = new(a()), this._isSelectionEnabled = !0, this._instanceId = (0, o.randomHashN)(6), this._ownerSourceChanged = new(a()), this._zOrderChanged = new(a()), this._id = null != e ? e : (0, o.randomHashN)(6)
                }
                id() {
                    return this._id
                }
                instanceId() {
                    return this._instanceId
                }
                preferNoScale() {
                    return !1
                }
                setId(e) {
                    this._id = e
                }
                zorder() {
                    return this._zorder
                }
                setZorder(e) {
                    "number" == typeof e && this._zorder !== e && (this._zorder = e, this._zOrderChanged.fire(e))
                }
                isSpeciallyZOrderedSource() {
                    return !1
                }
                title() {
                    throw new Error("Implement this fun in a subclass")
                }
                name() {
                    throw new Error("Implement this fun in a subclass")
                }
                priceScale() {
                    return this.m_priceScale
                }
                setPriceScale(e) {
                    this.m_priceScale = e, this._onPriceScaleChanged.fire()
                }
                ownerSource() {
                    return this._ownerSource
                }
                setOwnerSource(e) {
                    const t = this._ownerSource;
                    this._ownerSource = e, this._ownerSourceChanged.fire(t, e)
                }
                ownerSourceChanged() {
                    return this._ownerSourceChanged
                }
                zOrderChanged() {
                    return this._zOrderChanged
                }
                isSavedInChart(e) {
                    return !0
                }
                isSavedInStudyTemplates() {
                    return !0
                }
                isRemovedByStudyTemplates() {
                    return !0
                }
                hasContextMenu() {
                    return !0
                }
                showInObjectTree() {
                    return !0
                }
                setUserEditEnabled(e) {
                    this._userEditEnabled = e
                }
                userEditEnabled() {
                    return this._userEditEnabled
                }
                canBeHidden() {
                    return this.userEditEnabled()
                }
                isUserDeletable() {
                    return this.userEditEnabled()
                }
                properties() {
                    throw new Error("Implement this fun in a subclass")
                }
                isVisible() {
                    return this.properties().visible.value()
                }
                dataWindowView() {
                    return null
                }
                priceAxisViews(e, t) {
                    return null
                }
                timeAxisViews() {
                    return null
                }
                updateAllViews(e) {}
                paneViews(e) {
                    return null
                }
                labelPaneViews() {
                    return null
                }
                isFailed() {
                    return !1
                }
                isLoading() {
                    return !1
                }
                isPhantom() {
                    return !1
                }
                isChildStudy() {
                    return !1
                }
                hasChildren() {
                    return !1
                }
                canHaveChildren() {
                    return !1
                }
                onClickOutside(e) {}
                getSourceIcon() {
                    return null
                }
                state(e) {
                    throw new Error("Implement this fun in a subclass")
                }
                onPriceScaleChanged() {
                    return this._onPriceScaleChanged
                }
                doesMovingAffectsUndo() {
                    return !0
                }
                isMultiPaneAvailable() {
                    return !1
                }
                isMultiPaneEnabled() {
                    return !1
                }
                copiable() {
                    return !1
                }
                cloneable() {
                    return !1
                }
                movable() {
                    return !1
                }
                isIncludedInAutoScale() {
                    return !1
                }
                isHoveredEnabled() {
                    return this.isSelectionEnabled()
                }
                showOnTopOnHovering() {
                    return !0
                }
                isSelectionEnabled() {
                    return this._isSelectionEnabled
                }
                setSelectionEnabled(e) {
                    this._isSelectionEnabled = e
                }
                firstValue() {
                    return null
                }
                priceRange(e, t) {
                    return null
                }
                autoScaleInfo(e, t) {
                    return {
                        range: this.priceRange(e, t)
                    }
                }
                stateForAlert() {
                    return null
                }
                canHasAlert() {
                    return !1
                }
                alertCreationAvailable() {
                    return new(s())(this.hasStateForAlert()).readonly()
                }
                hasStateForAlert() {
                    return r.enabled("alerts")
                }
                idForAlert() {
                    return this._id
                }
            }
        },
        87225: (e, t, i) => {
            i.r(t), i.d(t, {
                createDefaultsState: () => d,
                saveDefaultProperties: () => _,
                DefaultProperty: () => P
            });
            var r = i(822914),
                n = i(897304),
                s = i(702040),
                o = i(16665),
                l = i(40210),
                a = i.n(l),
                c = i(869403),
                h = i.n(c);

            function u(e, t) {
                const i = (0, r.default)(e);
                return t.forEach((e => (0, s.default)(i, e.split(".")))), i
            }

            function d(e, t, i, s) {
                const l = e ? o.defaults : o.factoryDefaults,
                    a = t.startsWith("study_") ? (0, r.default)(l("study")) : {};
                let c = (0, r.default)(l(t, s));
                return t.startsWith("study_") && c.inputs && delete c.inputs.symbol, "linetoolicon" === t && e && (c.icon = (0, o.defaults)(t).icon), "linetooemoji" === t && e && (c.emoji = (0, o.defaults)(t).emoji), "linetoolsticker" === t && e && (c.sticker = (0, o.defaults)(t).sticker), c = u(c, i), (0, n.default)(a, c), a
            }
            let p = !1;

            function _(e) {
                p = e
            }
            class P extends(a()) {
                constructor(e, t, i, r) {
                    super(function(e, t, i, r) {
                        let s;
                        return void 0 === r && (r = !0), i ? s = t : (s = d(r, e, [], null), t && (0, n.default)(s, t)), s
                    }(e, t, i, r)), this._exclusions = [], this._restoreFactoryDefaultsEvent = new(h()), this._defaultName = e, this._useUserPreferences = null == r || r, this.listeners().subscribe(this, P.prototype.onPropertyChanged), this._restoreFactoryDefaultsEvent = new(h())
                }
                preferences() {
                    return this.state(this._exclusions)
                }
                mergePreferences(e) {
                    this.mergeAndFire(u(e, this._exclusions))
                }
                addExclusion(e) {
                    this._exclusions.indexOf(e) < 0 && this._exclusions.push(e)
                }
                removeExclusion(e) {
                    const t = this._exclusions.indexOf(e); - 1 !== t && this._exclusions.splice(t, 1)
                }
                restoreFactoryDefaults() {
                    const e = d(!1, this._defaultName, this._exclusions, null);
                    this.mergeAndFire(e), this._defaultName.startsWith("study_") && !this._defaultName.startsWith("study_VbPFixed") || (0, o.saveDefaults)(this._defaultName, void 0), this._restoreFactoryDefaultsEvent.fire()
                }
                onRestoreFactoryDefaults() {
                    return this._restoreFactoryDefaultsEvent
                }
                onPropertyChanged() {
                    !p || this._defaultName.startsWith("study_") && !this._defaultName.startsWith("study_VbPFixed") || this.saveDefaults()
                }
                saveDefaults() {
                    this._useUserPreferences && (0, o.saveDefaults)(this._defaultName, this.preferences())
                }
                clone(e) {
                    const t = new P(this._defaultName, this.state(), null == e ? void 0 : e.replaceByState, this._useUserPreferences);
                    for (let e = 0; e < this._exclusions.length; ++e) t.addExclusion(this._exclusions[e]);
                    return t
                }
            }
        },
        480071: (e, t, i) => {
            i.r(t), i.d(t, {
                SelectPointMode: () => r,
                toolIsCursor: () => _,
                toolIsMeasure: () => P,
                resetToCursor: () => v,
                lockTimeAxisTime: () => b,
                tool: () => w,
                iconTool: () => S,
                emojiTool: () => x,
                stickerTool: () => L,
                cursorTool: () => A,
                isToolCreatingNow: () => V,
                isToolEditingNow: () => I,
                isToolMovingNow: () => D,
                isDirectionalMovementActive: () => M,
                createdLineTool: () => B,
                continuedLineTool: () => E,
                cancelledLineTool: () => k,
                beenSetLineToolLastPoint: () => N,
                startedMovingLineTool: () => R,
                movedLineTool: () => F,
                finishedMovingLineTool: () => O,
                startedChangingLineTool: () => z,
                changedLineTool: () => W,
                finishedChangingLineTool: () => H,
                removedLineTool: () => U,
                finishedLineTool: () => G,
                changedLineStyle: () => q,
                copiedLineTool: () => j,
                restoredLineTool: () => K,
                restoredLineToolState: () => Q,
                activePointSelectionMode: () => Y,
                isStudyEditingNow: () => $,
                createLineTool: () => J,
                continueLineTool: () => ee,
                cancelLineTool: () => te,
                setLineToolLastPoint: () => ie,
                startMovingLineTool: () => re,
                moveLineTool: () => ne,
                finishMovingLineTool: () => se,
                startChangingLineTool: () => oe,
                changeLineTool: () => le,
                finishChangingLineTool: () => ae,
                removeLineTool: () => ce,
                finishLineTool: () => he,
                changeLineStyle: () => ue,
                copyLineTool: () => de,
                restoreLineTool: () => pe,
                restoreLineToolState: () => _e,
                init: () => ge,
                runOnDrawingStateReady: () => me,
                properties: () => fe,
                hideAllDrawings: () => Ce,
                hideAllIndicators: () => ye,
                lockDrawings: () => Te,
                hideMarksOnBars: () => be,
                drawOnAllCharts: () => we,
                drawOnAllChartsMode: () => Se,
                lockTimeAxis: () => xe
            });
            var r, n = i(650151),
                s = i(506845),
                o = i(87225),
                l = i(988411),
                a = i.n(l),
                c = i(869403),
                h = i.n(c),
                u = i(62802),
                d = i(251954),
                p = i(16665);

            function _(e) {
                return "cursor" === e || "arrow" === e || "dot" === e
            }

            function P(e) {
                return "measure" === e
            }

            function v(e = !1) {
                if (!e && g) {
                    if (g.childs().stayInDrawingMode.value()) return
                }
                w.setValue(A.value())
            }! function(e) {
                e[e.None = 0] = "None", e[e.Replay = 1] = "Replay", e[e.Study = 2] = "Study"
            }(r || (r = {}));
            let g = null,
                m = null,
                f = null,
                C = null,
                y = null,
                T = null;
            const b = new(a()),
                w = new(a()),
                S = new(a()),
                x = new(a()),
                L = new(a()),
                A = new(a()),
                V = new(a())(!1),
                I = new(a())(!1),
                D = new(a())(!1),
                M = new(a())(!1),
                B = new(h()),
                E = new(h()),
                k = new(h()),
                N = new(h()),
                R = new(h()),
                F = new(h()),
                O = new(h()),
                z = new(h()),
                W = new(h()),
                H = new(h()),
                U = new(h()),
                G = new(h()),
                q = new(h()),
                j = new(h()),
                K = new(h()),
                Q = new(h()),
                Y = new(a())(r.None),
                $ = new(a())(!1);

            function X(e, t) {
                const i = t || {
                    value: !1
                };
                return t => {
                    i.value || (i.value = !0, e.fire(t), i.value = !1)
                }
            }
            const Z = {
                    value: !1
                },
                J = X(B, Z),
                ee = X(E, Z),
                te = X(k, Z),
                ie = X(N, Z),
                re = X(R),
                ne = X(F),
                se = X(O),
                oe = X(z),
                le = X(W),
                ae = X(H),
                ce = X(U),
                he = X(G),
                ue = X(q, Z),
                de = X(j, Z),
                pe = X(K),
                _e = X(Q);
            let Pe = !1,
                ve = [];

            function ge() {
                Pe || (w.setValue(u.getValue("chart.cursorPreference", "cursor")), w.subscribe((e => _(e) && A.setValue(e)), {
                        callWithLast: !0
                    }),
                    A.subscribe((e => {
                        e && u.setValue("chart.cursorPreference", e)
                    })), g = new o.DefaultProperty("drawings"), m = (0, s.createPrimitiveProperty)(), f = (0, s.createPrimitiveProperty)(), C = (0, s.createPrimitiveProperty)(), y = (0, s.createPrimitiveProperty)(), T = (0, s.createPrimitiveProperty)(), m.setValue(!1), f.setValue(!1), C.setValue(!1), y.setValue(!1), T.setValue(!1), w.subscribe((() => {
                        (0, d.emit)("onSelectedLineToolChanged")
                    })), S.subscribe((() => {
                        (0, p.saveDefaults)("linetoolicon", { ...(0, p.defaults)("linetoolicon"),
                            icon: S.value()
                        })
                    })), x.subscribe((() => {
                        (0, p.saveDefaults)("linetoolemoji", { ...(0, p.defaults)("linetoolemoji"),
                            emoji: x.value()
                        })
                    })), L.subscribe((() => {
                        (0, p.saveDefaults)("linetoolsticker", { ...(0, p.defaults)("linetoolsticker"),
                            sticker: L.value()
                        })
                    })), Pe = !0, ve.forEach((e => e())), ve = [])
            }

            function me(e) {
                Pe ? e() : ve.push(e)
            }

            function fe() {
                return (0, n.ensureNotNull)(g)
            }

            function Ce() {
                return (0, n.ensureNotNull)(m)
            }

            function ye() {
                return (0, n.ensureNotNull)(f)
            }

            function Te() {
                return (0, n.ensureNotNull)(C)
            }

            function be() {
                return (0, n.ensureNotNull)(y)
            }

            function we() {
                return fe().childs().drawOnAllCharts
            }

            function Se() {
                return fe().childs().drawOnAllChartsMode
            }

            function xe() {
                return (0, n.ensureNotNull)(T)
            }
        },
        769448: (e, t, i) => {
            i.d(t, {
                LimitedPrecisionNumericFormatter: () => n
            });
            var r = i(758337);
            class n {
                constructor(e = 1) {
                    this._precision = e
                }
                format(e) {
                    (0, r.isNumber)(e) || (e = parseFloat(e));
                    const t = e.toFixed(this._precision),
                        i = Math.pow(10, -this._precision);
                    return Math.max(parseFloat(t), i) + ""
                }
                parse(e) {
                    const t = parseFloat(e);
                    return isNaN(t) ? {
                        res: !1
                    } : {
                        res: !0,
                        value: t,
                        suggest: this.format(t)
                    }
                }
            }
        },
        858063: (e, t, i) => {
            function r(e, t, i) {
                if (e.isTouch) {
                    if (void 0 !== i) return i(e), !0
                } else if (void 0 !== t) return t(e), !0;
                return !1
            }

            function n(e, t, i, r) {
                return void 0 !== t.executeDefaultAction && (e.isTouch ? Boolean(t.executeDefaultAction[r]) : Boolean(t.executeDefaultAction[i]))
            }
            var s;
            i.d(t, {
                    tryCallHandler: () => r,
                    shouldDefaultActionBeExecuted: () => n,
                    AreaName: () => s,
                    HitTestResult: () => o
                }),
                function(e) {
                    e.Style = "Style", e.Text = "Text", e.SourceItemMove = "SourceItemMove"
                }(s || (s = {}));
            class o {
                constructor(e, t, i) {
                    this._result = e, this._data = t || null, this._eraseMarker = i
                }
                result() {
                    return this._result
                }
                data() {
                    return this._data
                }
                hasPressedMoveHandler(e) {
                    return null !== this._data && function(e, t, i) {
                        if (e.isTouch) {
                            if (void 0 !== i) return !0
                        } else if (void 0 !== t) return !0;
                        return !1
                    }(e, this._data.pressedMouseMoveHandler, this._data.touchMoveHandler)
                }
                tryCallMouseDownOrTouchStartHandler(e) {
                    return null !== this._data && r(e, this._data.mouseDownHandler, this._data.touchStartHandler)
                }
                tryCallMouseUpOrTouchEndHandler(e) {
                    return null !== this._data && r(e, this._data.mouseUpHandler, this._data.touchEndHandler)
                }
                tryCallMouseEnterHandler(e) {
                    return null !== this._data && r(e, this._data.mouseEnterHandler)
                }
                tryCallMouseLeaveHandler(e) {
                    return null !== this._data && r(e, this._data.mouseLeaveHandler)
                }
                tryCallMouseMoveHandler(e) {
                    return null !== this._data && r(e, this._data.mouseMoveHandler)
                }
                tryCallClickOrTapHandler(e) {
                    return null !== this._data && r(e, this._data.clickHandler, this._data.tapHandler)
                }
                tryCallDblClickOrDblTapHandler(e) {
                    return null !== this._data && r(e, this._data.doubleClickHandler, this._data.doubleTapHandler)
                }
                tryCallContextMenuHandler(e) {
                    return null !== this._data && r(e, this._data.contextMenuHandler, this._data.touchContextMenuHandler)
                }
                eraseMarker() {
                    return this._eraseMarker
                }
            }
            o.MOVEPOINT_BACKGROUND = 1, o.REGULAR = 2, o.MOVEPOINT = 3, o.CHANGEPOINT = 4, o.CUSTOM = 5
        },
        488792: (e, t, i) => {
            i.d(t, {
                intervalsVisibilitiesDefaults: () => r
            });
            const r = {
                ticks: !0,
                seconds: !0,
                secondsFrom: 1,
                secondsTo: 59,
                minutes: !0,
                minutesFrom: 1,
                minutesTo: 59,
                hours: !0,
                hoursFrom: 1,
                hoursTo: 24,
                days: !0,
                daysFrom: 1,
                daysTo: 366,
                weeks: !0,
                weeksFrom: 1,
                weeksTo: 52,
                months: !0,
                monthsFrom: 1,
                monthsTo: 12,
                ranges: !0
            }
        },
        450556: (e, t, i) => {
            i.d(t, {
                IntervalsVisibilitiesProperty: () => o
            });
            var r = i(40210),
                n = i.n(r),
                s = i(323017);
            class o extends(n()) {
                state(e) {
                    var t;
                    return null !== (t = (0, s.nonDefaultIntervalsVisibilities)(super.state(e))) && void 0 !== t ? t : void 0
                }
                storeStateIfUndefined() {
                    return !1
                }
            }
        },
        323017: (e, t, i) => {
            i.d(t, {
                makeIntervalsVisibilitiesVisibleAtInterval: () => a,
                isActualInterval: () => h,
                nonDefaultIntervalsVisibilities: () => u,
                mergeIntervalVisibilitiesDefaults: () => d,
                getIntervalsVisibilitiesForMode: () => p
            });
            var r = i(897304),
                n = i(822914),
                s = i(650151),
                o = i(568450),
                l = i(488792);

            function a(e, t) {
                let i = t.multiplier();
                if (t.isTicks() && (e.ticks = !0), t.isSeconds() && (i < 60 ? (e.seconds = !0, e.secondsFrom = Math.min(e.secondsFrom, i), e.secondsTo = Math.max(e.secondsTo, i)) : (i = Math.floor(i / 60), t = new o.Interval(o.ResolutionKind.Minutes, i))), t.isMinutes())
                    if (i < 60) e.minutes = !0, e.minutesFrom = Math.min(e.minutesFrom, i), e.minutesTo = Math.max(e.minutesTo, i);
                    else {
                        const t = Math.floor(i / 60);
                        e.hours = !0, e.hoursFrom = Math.min(e.hoursFrom, t), e.hoursTo = Math.max(e.hoursTo, t)
                    }
                t.isDays() && (e.days = !0, e.daysFrom = Math.min(e.daysFrom, i), e.daysTo = Math.max(e.daysTo, i)), t.isWeeks() && (e.weeks = !0, e.weeksFrom = Math.min(e.weeksFrom, i), e.weeksTo = Math.max(e.weeksTo, i)), t.isMonths() && (e.months = !0, e.monthsFrom = Math.min(e.monthsFrom, i), e.monthsTo = Math.max(e.monthsTo, i)), t.isRange() && (e.ranges = !0)
            }

            function c(e, t, i, r) {
                return e && r >= t && r <= i
            }

            function h(e, t) {
                const i = t.childs();
                switch (e.kind()) {
                    case o.ResolutionKind.Ticks:
                        return i.ticks.value();
                    case o.ResolutionKind.Seconds:
                        if (e.multiplier() < 60) return c(i.seconds.value(), i.secondsFrom.value(), i.secondsTo.value(), e.multiplier()); {
                            const t = Math.floor(e.multiplier() / 60);
                            return c(i.minutes.value(), i.minutesFrom.value(), i.minutesTo.value(), t)
                        }
                    case o.ResolutionKind.Minutes:
                        if (e.multiplier() < 60) return c(i.minutes.value(), i.minutesFrom.value(), i.minutesTo.value(), e.multiplier()); {
                            const t = Math.floor(e.multiplier() / 60);
                            return c(i.hours.value(), i.hoursFrom.value(), i.hoursTo.value(), t)
                        }
                    case o.ResolutionKind.Days:
                        return c(i.days.value(), i.daysFrom.value(), i.daysTo.value(), e.multiplier());
                    case o.ResolutionKind.Weeks:
                        return c(i.weeks.value(), i.weeksFrom.value(), i.weeksTo.value(), e.multiplier());
                    case o.ResolutionKind.Months:
                        return c(i.months.value(), i.monthsFrom.value(), i.monthsTo.value(), e.multiplier());
                    case o.ResolutionKind.Range:
                        return i.ranges.value()
                }
                return (0, s.assert)(!1, `Unsupported resolution: ${e.value()}`), !1
            }

            function u(e) {
                const t = Object.keys(e).filter((t => l.intervalsVisibilitiesDefaults[t] !== e[t]));
                return 0 === t.length ? null : t.reduce(((t, i) => (t[i] = e[i], t)), {})
            }

            function d(e) {
                return (0, r.default)((0, n.default)(l.intervalsVisibilitiesDefaults), null != e ? e : {})
            }

            function p(e, t) {
                if (0 === t || e.isTicks() && 3 === t || e.isRange() && 2 === t) return d();
                let i = !1;
                const r = {
                        ticks: !1,
                        seconds: !1,
                        minutes: !1,
                        hours: !1,
                        days: !1,
                        weeks: !1,
                        months: !1,
                        ranges: !1
                    },
                    n = e => e.multiplier();
                return [{
                    checker: e => e.isTicks(),
                    getIntervalMultiplier: n,
                    markIntervalAsVisible: (e, t) => {
                        r.ticks = !0
                    }
                }, {
                    checker: e => e.isSeconds() && e.multiplier() < 60,
                    getIntervalMultiplier: n,
                    markIntervalAsVisible: (e, t) => {
                        r.seconds = !0, r.secondsFrom = e, r.secondsTo = t
                    }
                }, {
                    checker: e => e.isSeconds() && e.multiplier() >= 60,
                    getIntervalMultiplier: e => Math.floor(e.multiplier() / 60),
                    markIntervalAsVisible: (e, t) => {
                        r.minutes = !0, r.minutesFrom = e, r.minutesTo = t
                    }
                }, {
                    checker: e => e.isMinutes() && e.multiplier() < 60,
                    getIntervalMultiplier: n,
                    markIntervalAsVisible: (e, t) => {
                        r.minutes = !0, r.minutesFrom = e, r.minutesTo = t
                    }
                }, {
                    checker: e => e.isMinutes() && e.multiplier() >= 60,
                    getIntervalMultiplier: e => Math.floor(e.multiplier() / 60),
                    markIntervalAsVisible: (e, t) => {
                        r.hours = !0, r.hoursFrom = e, r.hoursTo = t
                    }
                }, {
                    checker: e => e.isDays(),
                    getIntervalMultiplier: n,
                    markIntervalAsVisible: (e, t) => {
                        r.days = !0, r.daysFrom = e, r.daysTo = t
                    }
                }, {
                    checker: e => e.isWeeks(),
                    getIntervalMultiplier: n,
                    markIntervalAsVisible: (e, t) => {
                        r.weeks = !0, r.weeksFrom = e, r.weeksTo = t
                    }
                }, {
                    checker: e => e.isMonths(),
                    getIntervalMultiplier: n,
                    markIntervalAsVisible: (e, t) => {
                        r.months = !0, r.monthsFrom = e, r.monthsTo = t
                    }
                }, {
                    checker: e => e.isRange(),
                    getIntervalMultiplier: n,
                    markIntervalAsVisible: (e, t) => {
                        r.ranges = !0
                    }
                }].forEach((r => {
                    if (r.checker(e)) {
                        i = !0;
                        const n = r.getIntervalMultiplier(e);
                        1 === t ? r.markIntervalAsVisible(n, n) : 3 === t ? r.markIntervalAsVisible(n, void 0) : r.markIntervalAsVisible(void 0, n)
                    } else(!i && 2 === t || i && 3 === t) && r.markIntervalAsVisible(void 0, void 0)
                })), d(r)
            }
        },
        354145: (e, t, i) => {
            function r(e) {
                const t = (null == e ? void 0 : e.symbolSource) && e.symbolSource() === e,
                    i = void 0 !== (null == e ? void 0 : e.isActingAsSymbolSource);
                return t || i
            }

            function n(e) {
                return r(e) && e.isActingAsSymbolSource().value()
            }
            i.d(t, {
                isSymbolSource: () => r,
                isActingAsSymbolSource: () => n
            })
        },
        955130: (e, t, i) => {
            i.d(t, {
                LevelsProperty: () => p
            });
            var r = i(758337),
                n = i(87225),
                s = i(16665);
            const o = {
                prefixes: [""],
                range: [0, 0],
                names: ["coeff", "color", "visible", "linestyle", "linewidth"],
                typecheck: {
                    pack: () => Object(),
                    unpack: () => []
                }
            };

            function l(e, t, i, r) {
                return r.push(i[t]), r
            }

            function a(e, t, i, r) {
                return r[t] = i[e], r
            }

            function c() {
                return []
            }

            function h() {
                return {}
            }

            function u(e, t, i) {
                return i.prefixes.forEach((n => {
                    const s = n + "level";
                    for (let n = i.range[0]; n <= i.range[1]; n++)
                        if (e[s + n] && (0, r.isSameType)(e[s + n], t.typecheck())) {
                            let r = t.tpl();
                            i.names.forEach(((i, o) => {
                                r = t.fill("" + o, i, e[s + n], r)
                            })), e[s + n] = r
                        }
                })), e
            }

            function d(e, t, i) {
                return i(e, {
                    tpl: h,
                    fill: a,
                    typecheck: t.typecheck.unpack
                }, t)
            }
            class p extends n.DefaultProperty {
                constructor(e, t, i, r, n) {
                    n = null != n ? n : u;
                    const s = { ...o,
                        ...null != r ? r : {}
                    };
                    super(e, t ? d(t, s, n) : t, i), this._map = s, this._levelsIterator = n
                }
                state(e, t) {
                    const i = super.state(e);
                    return t ? i : (r = i, n = this._map, (0, this._levelsIterator)(r, {
                        tpl: c,
                        fill: l,
                        typecheck: n.typecheck.pack
                    }, n));
                    var r, n
                }
                saveDefaults() {
                    this._useUserPreferences && (0, s.saveDefaults)(this._defaultName, this.state(this._exclusions, !0))
                }
                clone() {
                    const e = this.state(),
                        t = new p(this._defaultName, e);
                    for (let e = 0; e < this._exclusions.length; ++e) t.addExclusion(this._exclusions[e]);
                    return t
                }
                merge(e, t) {
                    return super.merge(d(e, this._map, this._levelsIterator), t)
                }
            }
        },
        333652: (e, t, i) => {
            i.d(t, {
                LineTool5PointsPattern: () => l
            });
            var r = i(650151),
                n = i(87225),
                s = i(892142),
                o = i(241056);
            class l extends s.LineDataSource {
                constructor(e, t, i, r) {
                    super(e, t || l.createProperties(), i, r), this._loadPaneViews(e)
                }
                pointsCount() {
                    return 5
                }
                name() {
                    return "XABCD Pattern"
                }
                static createProperties(e) {
                    const t = new n.DefaultProperty("linetool5pointspattern", e);
                    return this._configureProperties(t), t
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 331777)).then((e => e.PatternWithBackgroundDefinitionViewModel))
                }
                _loadPaneViews(e) {
                    Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 886538)).then((t => {
                        this._setPaneViews([new t.Pattern5pointsPaneView(this, e)])
                    }))
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.addChild("linesColors", new o.LineToolColorsProperty([(0, r.ensureDefined)(e.child("color"))])), e.addChild("textsColors", new o.LineToolColorsProperty([(0, r.ensureDefined)(e.child("textcolor"))]))
                }
            }
        },
        539104: (e, t, i) => {
            i.d(t, {
                LineToolABCD: () => l
            });
            var r = i(650151),
                n = i(87225),
                s = i(892142),
                o = i(241056);
            class l extends s.LineDataSource {
                constructor(e, t, r, n) {
                    const s = t || l.createProperties();
                    super(e, s, r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 547517)).then((t => {
                        this._setPaneViews([new t.ABCDPaneView(this, e)])
                    }))
                }
                pointsCount() {
                    return 4
                }
                name() {
                    return "ABCD Pattern"
                }
                static createProperties(e) {
                    const t = new n.DefaultProperty("linetoolabcd", e);
                    return this._configureProperties(t), t
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 875853)).then((e => e.PatternWithoutBackgroundDefinitionsViewModel))
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.addChild("linesColors", new o.LineToolColorsProperty([(0, r.ensureDefined)(e.child("color"))])), e.addChild("textsColors", new o.LineToolColorsProperty([(0, r.ensureDefined)(e.child("textcolor"))]))
                }
            }
        },
        386646: (e, t, i) => {
            i.d(t, {
                LineToolArc: () => h
            });
            var r = i(650151),
                n = i(204652),
                s = i(86441),
                o = i(625422),
                l = i(87225),
                a = i(892142),
                c = i(241056);
            class h extends a.LineDataSource {
                constructor(e, t, r, n) {
                    const s = t || h.createProperties();
                    super(e, s, r, n), this.version = 2, this._dist = null, Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 165419)).then((({
                        ArcPaneView: t
                    }) => {
                        const i = [new t(this, e)];
                        this._setPaneViews(i)
                    }))
                }
                startChanging(e, t) {
                    if (super.startChanging(e, t), 0 === e || 1 === e) {
                        const e = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[0])),
                            t = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[1])),
                            i = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[2]));
                        this._dist = (0, n.distanceToLine)(e, t, i).distance;
                        const o = t.subtract(e),
                            l = new s.Point(-o.y, o.x),
                            a = e.add(t).scaled(.5);
                        i.subtract(a).dotProduct(l) < 0 && (this._dist = -this._dist)
                    }
                }
                endChanging(e, t) {
                    return this._dist = null, super.endChanging(e, t)
                }
                pointsCount() {
                    return 3
                }
                name() {
                    return "Arc"
                }
                hasEditableCoordinates() {
                    return !1
                }
                setPoint(e, t) {
                    const i = { ...t
                        },
                        l = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[0])),
                        a = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[1]));
                    switch (e) {
                        case 0:
                            {
                                const e = (0, r.ensureNotNull)(this._dist),
                                    t = (0, r.ensureNotNull)(this.pointToScreenPoint(i)),
                                    n = a.subtract(t),
                                    o = t.add(a).scaled(.5);
                                let l = new s.Point(-n.y, n.x);l = l.normalized();
                                const c = o.add(l.scaled(e));this._points[0] = i,
                                this._points[2] = (0, r.ensureNotNull)(this.screenPointToPoint(c));
                                break
                            }
                        case 1:
                            {
                                const e = (0, r.ensureNotNull)(this._dist),
                                    t = (0, r.ensureNotNull)(this.pointToScreenPoint(i)),
                                    n = t.subtract(l),
                                    o = l.add(t).scaled(.5),
                                    a = new s.Point(-n.y, n.x).normalized(),
                                    c = o.add(a.scaled(e));this._points[1] = i,
                                this._points[2] = (0, r.ensureNotNull)(this.screenPointToPoint(c));
                                break
                            }
                        case 2:
                            {
                                let e = (0, r.ensureNotNull)(this.pointToScreenPoint(i));
                                const t = (0, n.distanceToLine)(l, a, e).distance,
                                    c = a.subtract(l),
                                    h = l.add(a).scaled(.5),
                                    u = new s.Point(-c.y, c.x).normalized(),
                                    d = h.add(u.scaled(t)),
                                    p = h.add(u.scaled(-t)),
                                    _ = c.length(),
                                    P = c.x / _,
                                    v = c.y / _;
                                let g = Math.acos(P);v < 0 && (g = -g);
                                let m = (0, o.translationMatrix)(-h.x, -h.y);e = (0, o.transformPoint)(m, e);
                                let f = (0, o.transformPoint)(m, d);m = (0, o.rotationMatrix)(-g),
                                e = (0, o.transformPoint)(m, e),
                                f = (0, o.transformPoint)(m, f),
                                m = (0, o.scalingMatrix)(1, _ / (2 * t)),
                                e = (0, o.transformPoint)(m, e),
                                f = (0, o.transformPoint)(m, f);
                                const C = e.y * f.y >= 0 ? new s.Point(d.x, d.y) : new s.Point(p.x, p.y);this._points[2] = (0, r.ensureNotNull)(this.screenPointToPoint(C));
                                break
                            }
                    }
                    this.normalizePoints()
                }
                migrateVersion(e, t, i) {
                    if (1 === e && 2 === this._points.length) {
                        const e = (2 * this._points[0].price + 3 * this._points[1].price) / 5;
                        this._points.push({
                            price: e,
                            index: this._points[1].index
                        })
                    }
                    if (1 === e && 2 === this._timePoint.length) {
                        const e = {
                            price: (2 * this._timePoint[0].price + 3 * this._timePoint[1].price) / 5,
                            offset: this._timePoint[1].offset,
                            time_t: this._timePoint[1].time_t
                        };
                        this._timePoint.push(e)
                    }
                }
                static createProperties(e) {
                    const t = new l.DefaultProperty("linetoolarc", e);
                    return this._configureProperties(t), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 27619))).GeneralFiguresDefinitionsViewModelBase
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.addChild("linesColors", new c.LineToolColorsProperty([e.childs().color]))
                }
            }
        },
        856073: (e, t, i) => {
            i.d(t, {
                LineToolArrowMark: () => a,
                LineToolArrowMarkLeft: () => c,
                LineToolArrowMarkUp: () => h,
                LineToolArrowMarkRight: () => u,
                LineToolArrowMarkDown: () => d
            });
            var r = i(87225),
                n = i(892142),
                s = i(40210),
                o = i.n(s),
                l = i(241056);
            class a extends n.LineDataSource {
                constructor(e, t, r, n, s) {
                    const o = t || a.createProperties(null, r);
                    super(e, o, n, s), this._textPaneView = null, Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 919552)).then((({
                        ArrowMarkPaneView: t
                    }) => {
                        const i = [new t(this, e)];
                        this._setPaneViews(i)
                    }))
                }
                paneViews(e) {
                    const t = super.paneViews();
                    return null !== t && this._textPaneView && t.push(this._textPaneView), t
                }
                pointsCount() {
                    return 1
                }
                template() {
                    const e = super.template();
                    return e.text = this.properties().childs().text.value(), e
                }
                static createProperties(e, t) {
                    const i = new r.DefaultProperty(t, e);
                    return this._configureProperties(i), i
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 565507)).then((e => e.ArrowMarkDefinitionsViewModel))
                }
                _applyTemplateImpl(e) {
                    super._applyTemplateImpl(e), this.properties().childs().text.setValue(e.text)
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.addChild("linesColors", new l.LineToolColorsProperty([e.childs().arrowColor])), e.addChild("textsColors", new l.LineToolColorsProperty([e.childs().color])), e.hasChild("text") || e.addChild("text", new(o())("")), e.addExclusion("text")
                }
            }
            a.version = 2;
            class c extends a {
                constructor(e, t, i, r) {
                    super(e, t, "linetoolarrowmarkleft", i, r)
                }
                direction() {
                    return "left"
                }
                name() {
                    return "Arrow Mark Left"
                }
                textAlignParams() {
                    return {
                        horzAlign: "left",
                        vertAlign: "middle",
                        offsetX: 22,
                        offsetY: 3
                    }
                }
                static createProperties(e) {
                    return super.createProperties(e, "linetoolarrowmarkleft")
                }
            }
            class h extends a {
                constructor(e, t, i, r) {
                    super(e, t, "linetoolarrowmarkup", i, r)
                }
                direction() {
                    return "up"
                }
                name() {
                    return "Arrow Mark Up"
                }
                textAlignParams() {
                    return {
                        horzAlign: "center",
                        vertAlign: "top",
                        offsetX: 0,
                        offsetY: 20
                    }
                }
                static createProperties(e) {
                    return super.createProperties(e, "linetoolarrowmarkup")
                }
            }
            class u extends a {
                constructor(e, t, i, r) {
                    super(e, t, "linetoolarrowmarkright", i, r)
                }
                direction() {
                    return "right"
                }
                name() {
                    return "Arrow Mark Right"
                }
                textAlignParams() {
                    return {
                        horzAlign: "right",
                        vertAlign: "middle",
                        offsetX: 22,
                        offsetY: 3,
                        forceTextAlign: !0
                    }
                }
                static createProperties(e) {
                    return super.createProperties(e, "linetoolarrowmarkright")
                }
            }
            class d extends a {
                constructor(e, t, i, r) {
                    super(e, t, "linetoolarrowmarkdown", i, r)
                }
                direction() {
                    return "down"
                }
                name() {
                    return "Arrow Mark Down"
                }
                textAlignParams() {
                    return {
                        horzAlign: "center",
                        vertAlign: "bottom",
                        offsetX: 0,
                        offsetY: 20
                    }
                }
                static createProperties(e) {
                    return super.createProperties(e, "linetoolarrowmarkdown")
                }
            }
        },
        681348: (e, t, i) => {
            i.d(t, {
                LineToolArrowMarker: () => l
            });
            var r = i(892142),
                n = i(87225),
                s = i(40210),
                o = i.n(s);
            class l extends r.LineDataSource {
                constructor(e, t, r, n) {
                    super(e, null != t ? t : l.createProperties(), r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 316376)).then((({
                        ArrowMarkerPaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this.model())])
                    }))
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Trend Line"
                }
                static createProperties(e) {
                    const t = new n.DefaultProperty("linetoolarrowmarker", e);
                    return this._configureProperties(t), t
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 799543)).then((e => e.ArrowMarkerDefinitionsViewModel))
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.hasChild("text") || e.addChild("text", new(o())("")), e.addExclusion("text")
                }
            }
        },
        910788: (e, t, i) => {
            var r = i(732747).LineToolTrendLine,
                n = i(87225).DefaultProperty;
            class s extends r {
                constructor(e, t, i, r) {
                    super(e, t || s.createProperties(), i, r)
                }
                name() {
                    return "Arrow"
                }
                static createProperties(e) {
                    var t = new n("linetoolarrow", e);
                    return this._configureProperties(t), t
                }
            }
            t.LineToolArrow = s
        },
        998275: (e, t, i) => {
            i.d(t, {
                LineToolBalloon: () => h
            });
            var r = i(777754),
                n = i(87225),
                s = i(892142),
                o = i(40210),
                l = i.n(o),
                a = i(241056);
            const c = r.t(null, void 0, i(119372));
            class h extends s.LineDataSource {
                constructor(e, t, i, r) {
                    super(e, t || h.createProperties(), i, r), this._createPaneView()
                }
                pointsCount() {
                    return 1
                }
                name() {
                    return "Balloon"
                }
                template() {
                    const e = super.template();
                    return e.text = this.properties().childs().text.value(), e
                }
                shouldBeRemovedOnDeselect() {
                    return "" === this._properties.childs().text.value().trim()
                }
                static createProperties(e) {
                    const t = new n.DefaultProperty("linetoolballoon", e);
                    return this._configureProperties(t), t
                }
                _applyTemplateImpl(e) {
                    super._applyTemplateImpl(e), this.properties().childs().text.setValue(e.text)
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 622204)).then((e => e.BalloonDefinitionsViewModel))
                }
                _createPaneView() {
                    Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 993863)).then((e => {
                        this._setPaneViews([new e.BalloonPaneView(this, this._model)])
                    }))
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.hasChild("text") || e.addChild("text", new(l())(c)), e.addExclusion("text"), e.addChild("linesColors", new a.LineToolColorsProperty([e.childs().borderColor])), e.addChild("textsColors", new a.LineToolColorsProperty([e.childs().color]))
                }
            }
        },
        804585: (e, t, i) => {
            i.d(t, {
                LineToolBarsPattern: () => f
            });
            var r = i(650151),
                n = i(777754),
                s = i(683890),
                o = i(758337),
                l = i(310399),
                a = i(87225),
                c = i(812363),
                h = i(892142),
                u = i(969334),
                d = i(404822);
            const p = new s.TranslatedString("mirror bars pattern", n.t(null, void 0, i(881870))),
                _ = new s.TranslatedString("flip bars pattern", n.t(null, void 0, i(559942))),
                P = n.t(null, void 0, i(363158)),
                v = n.t(null, void 0, i(892754)),
                g = {
                    0: 2,
                    1: 4,
                    2: 1,
                    3: 1,
                    4: 2,
                    5: 3,
                    6: -1
                },
                m = {
                    0: 3,
                    1: 4,
                    2: 4,
                    3: 1,
                    4: 2,
                    5: 3,
                    6: -1
                };
            class f extends h.LineDataSource {
                constructor(e, t = f.createProperties(), r, n) {
                    super(e, t, r, n), this._pattern = [], this._scale = 1, this._pointsCoordinatePricesDiff = null;
                    const s = t.childs().mode.value();
                    (0, o.isString)(s) && t.childs().mode.setValue(parseInt(s)), t.childs().mirrored.listeners().subscribe(this, this._mirror), t.childs().flipped.listeners().subscribe(this, this._flip), t.childs().mode.subscribe(this, this._updateLastPoint), this.version = 2, Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 244990)).then((t => {
                        this._setPaneViews([new t.BarsPatternPaneView(this, e)])
                    }))
                }
                pattern() {
                    return this._pattern
                }
                isSynchronizable() {
                    return !1
                }
                additionalActions(e) {
                    return [new l.Action({
                        actionId: "Chart.LineTool.BarsPattern.ToggleMirrored",
                        checked: this.properties().childs().mirrored.value(),
                        checkable: !0,
                        label: P,
                        onExecute: () => {
                            e.setProperty(this.properties().childs().mirrored, !this.properties().childs().mirrored.value(), p), this.updateAllViews((0, d.sourceChangeEvent)(this.id())), this._model.updateSource(this)
                        }
                    }), new l.Action({
                        actionId: "Chart.LineTool.BarsPattern.ToggleFlipped",
                        checked: this.properties().childs().flipped.value(),
                        checkable: !0,
                        label: v,
                        onExecute: () => {
                            e.setProperty(this.properties().childs().flipped, !this.properties().childs().flipped.value(), _), this.updateAllViews((0, d.sourceChangeEvent)(this.id())), this._model.updateSource(this)
                        }
                    })]
                }
                pointsCount() {
                    return 2
                }
                state(e) {
                    return { ...super.state(e),
                        pattern: this._pattern,
                        scale: this._scale,
                        diff: this._pointsCoordinatePricesDiff
                    }
                }
                restoreData(e) {
                    const {
                        pattern: t = this._pattern,
                        scale: i = this._scale,
                        diff: r = this._pointsCoordinatePricesDiff
                    } = e;
                    this._pattern = t, this._scale = i, this._pointsCoordinatePricesDiff = r
                }
                name() {
                    return "Bars Pattern"
                }
                hasEditableCoordinates() {
                    return !1
                }
                cloneData(e) {
                    this._pattern = (0, o.clone)(e._pattern), this._scale = e._scale, this._pointsCoordinatePricesDiff = e._pointsCoordinatePricesDiff
                }
                firstPatternPrice() {
                    const {
                        mode: e,
                        flipped: t
                    } = this.properties().childs(), i = this._pattern[0];
                    return e.value() === u.LineToolBarsPatternMode.LineHL2 ? (i[2] + i[3]) / 2 : t.value() ? i[m[e.value()]] : i[g[e.value()]]
                }
                lastPatternPrice() {
                    const {
                        mode: e,
                        flipped: t
                    } = this.properties().childs(), i = this._pattern[this._pattern.length - 1];
                    return e.value() === u.LineToolBarsPatternMode.LineHL2 ? (i[2] + i[3]) / 2 : t.value() ? i[g[e.value()]] : i[m[e.value()]]
                }
                addPoint(e, t, i) {
                    const n = super.addPoint(e, t, !0);
                    if (n) {
                        const e = this._model.mainSeries(),
                            [{
                                index: t
                            }, {
                                index: i
                            }] = this.points(),
                            n = (0, r.ensureDefined)(e.nearestIndex(Math.min(t, i), c.PlotRowSearchMode.NearestRight)),
                            s = (0, r.ensureDefined)(e.nearestIndex(Math.max(t, i), c.PlotRowSearchMode.NearestLeft));
                        this._pattern = this._createPattern(n, s), this._pattern.length > 0 && (t > i && this._points.reverse(), this._points[1].price = this._points[0].price + this._patternPriceDiff(), this._points[1].index = this._points[0].index + (s - n), this.normalizePoints(), this.createServerPoints()), this._updatePointsCoordinatePricesDiff()
                    }
                    return n
                }
                setPoint(e, t, i, r) {
                    1 === e && t.index <= this._points[0].index && (t.index = this._points[0].index + 1), 0 === e && t.index >= this._points[1].index && (t.index = this._points[1].index - 1), super.setPoint(e, t, i), this._updatePointsCoordinatePricesDiff()
                }
                move(e, t, i, r) {
                    super.move(e, t, i, r), this._updatePointsCoordinatePricesDiff()
                }
                migrateVersion(e, t, i) {
                    if (1 === e && this._pattern.length > 0) {
                        const e = this._patternPriceDiff();
                        2 === this._timePoint.length && (this._timePoint[1].price = this._timePoint[0].price + e), 2 === this._points.length && (this._points[1].price = this._points[0].price + e)
                    }
                }
                getScale() {
                    return this._scale = this._calculateScale()
                }
                static createProperties(e) {
                    const t = new a.DefaultProperty("linetoolbarspattern", e);
                    return this._configureProperties(t), t
                }
                _preparePoint(e, t) {
                    var i;
                    const n = this._alignPointToRangeOfActualData(e),
                        s = this._model.mainSeries(),
                        o = (0, r.ensureNotNull)(s.bars().valueAt(n.index));
                    this.properties().childs().mode.value() === u.LineToolBarsPatternMode.Bars ? n.price = (0, r.ensure)(o[2]) : n.price = (0, r.ensure)(o[4]);
                    const l = (0, r.ensureNotNull)(this.priceScale()),
                        a = (0, r.ensure)(null === (i = this.ownerSource()) || void 0 === i ? void 0 : i.firstValue()),
                        c = .05 * l.height(),
                        h = l.priceToCoordinate(n.price, a) - c;
                    return n.price = l.coordinateToPrice(h, a), super._preparePoint(n, t)
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 931669))).BarsPatternDefinitionsViewModel
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.addExclusion("mirrored"), e.addExclusion("flipped")
                }
                _calculatePatternCoordinatePricesDiff() {
                    var e;
                    return this._pattern.length > 0 && null !== (e = this._priceCoordinateDiff([this.firstPatternPrice(), this.lastPatternPrice()])) && void 0 !== e ? e : null
                }
                _updatePointsCoordinatePricesDiff() {
                    this._pointsCoordinatePricesDiff = this._calculatePointsCoordinatePricesDiff()
                }
                _calculatePointsCoordinatePricesDiff() {
                    var e;
                    if (2 === this._points.length) {
                        const [{
                            price: t
                        }, {
                            price: i
                        }] = this.points();
                        return null !== (e = this._priceCoordinateDiff([t, i])) && void 0 !== e ? e : null
                    }
                    return null
                }
                _createPattern(e, t) {
                    const i = this._model.mainSeries().data(),
                        n = [];
                    for (let s = e; s <= t; s++) n.push((0, o.clone)((0, r.ensureNotNull)(i.valueAt(s))));
                    return n
                }
                _switchPointsPrice() {
                    const e = this._points[0].price;
                    this._timePoint[0].price = this._points[0].price = this._points[1].price, this._timePoint[1].price = this._points[1].price = e
                }
                _mirror() {
                    const e = this._pattern;
                    let t = Math.min(e[0][3], e[0][2]),
                        i = Math.max(e[0][3], e[0][2]);
                    for (let r = 1; r < e.length; r++) t = Math.min(t, e[r][3]), i = Math.max(i, e[r][2]);
                    if (t < i) {
                        const r = (t + i) / 2,
                            n = e => r - (e - r);
                        for (let t = 0; t < e.length; t++) e[t][2] = n(e[t][2]), e[t][3] = n(e[t][3]), e[t][1] = n(e[t][1]), e[t][4] = n(e[t][4])
                    }
                    this._switchPointsPrice(), this.updateAllViews((0, d.sourceChangeEvent)(this.id()))
                }
                _flip() {
                    const e = this._pattern,
                        t = e.length;
                    for (let i = 0; i < t / 2; i++) {
                        const r = e[i];
                        e[i] = e[t - i - 1], e[t - i - 1] = r
                    }
                    this._switchPointsPrice(), this.updateAllViews((0, d.sourceChangeEvent)(this.id()))
                }
                _patternPriceDiff() {
                    return this.lastPatternPrice() - this.firstPatternPrice()
                }
                _pricesToCoordinates(e) {
                    var t, i;
                    const r = this.priceScale(),
                        n = null !== (i = null === (t = this.ownerSource()) || void 0 === t ? void 0 : t.firstValue()) && void 0 !== i ? i : null;
                    if (null !== n && null !== r && !r.isEmpty()) return e.map((e => r.priceToCoordinate(e, n)))
                }
                _priceCoordinateDiff(e) {
                    const t = this._pricesToCoordinates(e);
                    if (t) return t[1] - t[0]
                }
                _calculateScale() {
                    let e = 1;
                    if (2 === this._points.length) {
                        const t = this._calculatePatternCoordinatePricesDiff();
                        if (!t) return e;
                        const i = this._calculatePointsCoordinatePricesDiff();
                        if (t && null !== i && (e = +(i / t).toFixed(8)), this._pointsCoordinatePricesDiff !== i) {
                            if (this._scale !== e) return this._updateLastPoint(), this._scale;
                            this._updatePointsCoordinatePricesDiff()
                        }
                    }
                    return e
                }
                _updateLastPoint() {
                    var e, t;
                    if (this._points.length < 2) return;
                    const i = this.priceScale(),
                        r = null !== (t = null === (e = this.ownerSource()) || void 0 === e ? void 0 : e.firstValue()) && void 0 !== t ? t : null;
                    if (null === r || null === i || i.isEmpty()) return;
                    const n = this._calculatePatternCoordinatePricesDiff(),
                        s = this._pricesToCoordinates([this.points()[0].price]);
                    null !== n && s && (this._timePoint[1].price = this._points[1].price = i.coordinateToPrice(+(this._scale * n).toFixed(8) + s[0], r), this._updatePointsCoordinatePricesDiff())
                }
            }
        },
        214168: (e, t, i) => {
            i.d(t, {
                LineToolBezierCubic: () => o
            });
            var r = i(650151),
                n = i(87225),
                s = i(892142);
            class o extends s.LineDataSource {
                constructor(e, t, r, n) {
                    const s = t || o.createProperties();
                    super(e, s, r, n), this._controlPoints = null, Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 997222)).then((t => {
                        this._setPaneViews([new t.BezierCubicPaneView(this, e)])
                    }))
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Double Curve"
                }
                setLastPoint(e, t) {
                    const i = super.setLastPoint(e, t);
                    return this._controlPoints = this._calculateControlPoints(), i
                }
                addPoint(e, t, i) {
                    const r = super.addPoint(e, t, i);
                    if (r) {
                        const e = this._calculateControlPoints();
                        this._controlPoints = null, this._points.push(e[0]), this._points.push(e[1]), i || (this.normalizePoints(), this.createServerPoints()), this._createPointProperty(2), this._createPointProperty(3)
                    }
                    return r
                }
                restorePoints(e, t, i) {
                    super.restorePoints(e, t, i), this._createPointProperty(2), this._createPointProperty(3)
                }
                controlPoints() {
                    return this._controlPoints
                }
                static createProperties(e) {
                    const t = new n.DefaultProperty("linetoolbeziercubic", e);
                    return this._configureProperties(t), t
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 986338)).then((e => e.GeneralBezierDefinitionsViewModel))
                }
                _calculateControlPoints() {
                    const e = (0, r.ensureNotNull)(this.pointToScreenPoint(this.points()[0])),
                        t = (0, r.ensureNotNull)(this.pointToScreenPoint(this.points()[1])),
                        i = t.subtract(e).scaled(.5).transposed().scaled(.3),
                        n = e.add(t).scaled(.33),
                        s = e.add(t).scaled(.67),
                        o = n.add(i),
                        l = s.subtract(i);
                    return [(0, r.ensureNotNull)(this.screenPointToPoint(o)), (0, r.ensureNotNull)(this.screenPointToPoint(l))]
                }
            }
        },
        717797: (e, t, i) => {
            i.d(t, {
                LineToolBezierQuadro: () => o
            });
            var r = i(650151),
                n = i(87225),
                s = i(892142);
            class o extends s.LineDataSource {
                constructor(e, t, r, n) {
                    const s = t || o.createProperties();
                    super(e, s, r, n), this._controlPoint = null, Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 734350)).then((t => {
                        this._setPaneViews([new t.BezierQuadroPaneView(this, e)])
                    }))
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Curve"
                }
                setLastPoint(e, t) {
                    const i = super.setLastPoint(e, t);
                    return this._controlPoint = this._calculateControlPoint(), i
                }
                addPoint(e, t, i) {
                    const r = super.addPoint(e, t, i);
                    if (r) {
                        const e = this._calculateControlPoint();
                        this._points.push(e), this._controlPoint = null, i || (this.normalizePoints(), this.createServerPoints()), this._createPointProperty(2)
                    }
                    return r
                }
                restorePoints(e, t, i) {
                    super.restorePoints(e, t, i), this._createPointProperty(2)
                }
                controlPoint() {
                    return this._controlPoint
                }
                static createProperties(e) {
                    const t = new n.DefaultProperty("linetoolbezierquadro", e);
                    return this._configureProperties(t), t
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 986338)).then((e => e.GeneralBezierDefinitionsViewModel))
                }
                _calculateControlPoint() {
                    const e = (0, r.ensureNotNull)(this.pointToScreenPoint(this.points()[0])),
                        t = (0, r.ensureNotNull)(this.pointToScreenPoint(this.points()[1])),
                        i = t.subtract(e).scaled(.5).transposed().scaled(.3),
                        n = e.add(t).scaled(.5).add(i);
                    return (0, r.ensureNotNull)(this.screenPointToPoint(n))
                }
            }
        },
        802186: (e, t, i) => {
            i.d(t, {
                LineToolBrushBase: () => s
            });
            var r = i(650151),
                n = i(892142);
            class s extends n.LineDataSource {
                constructor() {
                    super(...arguments), this._finished = !1
                }
                pointsCount() {
                    return -1
                }
                finished() {
                    return this._finished
                }
                finish() {
                    this._finished = !0, this._lastPoint = null, this.normalizePoints(), this.createServerPoints()
                }
                hasEditableCoordinates() {
                    return !1
                }
                addPoint(e, t, i) {
                    if (this._finished) return !0;
                    if (this._lastPoint = null, this._points.length > 0) {
                        const t = this._points[this._points.length - 1],
                            i = (0, r.ensureNotNull)(this.pointToScreenPoint(t));
                        if ((0, r.ensureNotNull)(this.pointToScreenPoint(e)).subtract(i).length() < 2) return this._finished
                    }
                    return super.addPoint(e), this._finished
                }
                restorePoints(e, t, i) {
                    super.restorePoints(e, t, i), this._finished = !0
                }
            }
        },
        42878: (e, t, i) => {
            i.d(t, {
                LineToolBrush: () => o
            });
            var r = i(87225),
                n = i(802186),
                s = i(241056);
            class o extends n.LineToolBrushBase {
                constructor(e, t, i, r) {
                    super(e, t || o.createProperties(), i, r), this._loadPaneViews(e)
                }
                smooth() {
                    return this.properties().childs().smooth.value()
                }
                name() {
                    return "Brush"
                }
                hasEditableCoordinates() {
                    return !1
                }
                static createProperties(e) {
                    const t = new r.DefaultProperty("linetoolbrush", e);
                    return this._configureProperties(t), t
                }
                _loadPaneViews(e) {
                    Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 378251)).then((t => {
                        this._setPaneViews([new t.BrushPaneView(this, e)])
                    }))
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 770873)).then((e => e.BrushDefinitionsViewModel))
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.addChild("backgroundsColors", new s.LineToolColorsProperty([e.childs().backgroundColor], e.childs().fillBackground))
                }
            }
        },
        900921: (e, t, i) => {
            i.d(t, {
                LineToolCallout: () => c
            });
            var r = i(777754),
                n = i(40210),
                s = i.n(n),
                o = i(87225),
                l = i(241056),
                a = i(892142);
            class c extends a.LineDataSource {
                constructor(e, t, r, n) {
                    super(e, t || c.createProperties(), r, n), this._barOffset = 0, this._dragStartLeftEdgeIndex = NaN, this._timeScale = e.timeScale(), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 979002)).then((e => {
                        this._setPaneViews([new e.CalloutPaneView(this, this._model)])
                    }))
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Callout"
                }
                getBarOffset() {
                    return this._barOffset
                }
                shouldBeRemovedOnDeselect() {
                    return "" === this._properties.childs().text.value().trim()
                }
                addPoint(e) {
                    const t = super.addPoint(e);
                    return t && this._calculateBarOffset(), t
                }
                setLastPoint(e) {
                    const t = super.setLastPoint(e);
                    return 2 === this.points().length && this._calculateBarOffset(), t
                }
                setPoint(e, t) {
                    switch (e) {
                        case 0:
                            super.setPoint(e, t), this._calculateBarOffset();
                            break;
                        case 1:
                            const i = this.properties().childs();
                            if (!i.wordWrapWidth) return;
                            const r = this._points,
                                n = this._dragStartLeftEdgeIndex,
                                s = Math.round((t.index - n) / 2);
                            if (isFinite(n) && isFinite(s)) {
                                r[1] = {
                                    index: n + s,
                                    price: r[1].price
                                }, this._calculateBarOffset(), this.normalizePoints();
                                const e = this._timeScale.indexToCoordinate(n + 2 * s) - this._timeScale.indexToCoordinate(n) - 8 - 2;
                                if (!isFinite(e)) return;
                                i.wordWrapWidth.setValue(Math.max(100, e));
                                break
                            }
                            r[1] = t, this._calculateBarOffset(), this.normalizePoints()
                    }
                }
                setPoints(e) {
                    super.setPoints(e);
                    const t = this.properties().childs();
                    if (!t.wordWrapWidth) return;
                    const i = this._dragStartLeftEdgeIndex,
                        r = Math.round((e[1].index - i) / 2);
                    if (this._calculateBarOffset(), this.normalizePoints(), isFinite(i) && isFinite(r)) {
                        const e = this._timeScale.indexToCoordinate(i + 2 * r) - this._timeScale.indexToCoordinate(i) - 8 - 2;
                        if (!isFinite(e)) return;
                        t.wordWrapWidth.setValue(Math.max(100, e))
                    }
                }
                move(e, t, i) {
                    super.move(e, t, i), this._calculateBarOffset()
                }
                state(e) {
                    const t = super.state(e);
                    return t.barOffset = this._barOffset, t
                }
                restoreData(e) {
                    e.barOffset ? this._barOffset = e.barOffset : this._calculateBarOffset(), this.calculatePoint2()
                }
                setPriceScale(e) {
                    super.setPriceScale(e), e && e.priceRange() && this.calculatePoint2()
                }
                template() {
                    const e = super.template();
                    return e.text = this.properties().childs().text.value(), e
                }
                calculatePoint2() {
                    if (this._model.lineBeingEdited() === this || this._model.sourcesBeingMoved().includes(this)) return;
                    if (this._points.length < 2) return;
                    const [e, t] = this.points();
                    this._points[1] = {
                        price: t.price,
                        index: e.index + this._barOffset
                    }
                }
                static createProperties(e) {
                    const t = new o.DefaultProperty("linetoolcallout", e);
                    return this._configureProperties(t), t
                }
                _applyTemplateImpl(e) {
                    this.properties().childs().text.setValue(e.text), super._applyTemplateImpl(e)
                }
                _correctPoints(e, t) {
                    if (null === this._currentMovingPoint || void 0 === this._currentMovingPoint.logical || null === this._startMovingPoint || void 0 === this._startMovingPoint.logical) return !1;
                    const i = this._currentMovingPoint.logical.index - this._startMovingPoint.logical.index,
                        r = this._currentMovingPoint.logical.price - this._startMovingPoint.logical.price,
                        n = e[1];
                    return n.index = n.index + i, n.price += r, e[1] = n, !0
                }
                _onPointsetUpdated(e) {
                    super._onPointsetUpdated(e), 0 !== e.length && (this._dragStartLeftEdgeIndex = this.points()[1].index)
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 957758))).CalloutDefinitionsViewModel
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.hasChild("text") || e.addChild("text", new(s())(r.t(null, void 0, i(37229)))), e.addExclusion("text"), e.addChild("textsColors", new l.LineToolColorsProperty([e.childs().color]))
                }
                _calculateBarOffset() {
                    this.points().length > 1 && (this._barOffset = this.points()[1].index - this.points()[0].index)
                }
            }
        },
        515950: (e, t, i) => {
            var r = i(892142).LineDataSource,
                n = i(87225).DefaultProperty;
            class s extends r {
                constructor(e, t, r, n) {
                    super(e, t || s.createProperties(), r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.t.bind(i, 394147, 19)).then((({
                        LineToolCircleLinesPaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Cyclic Lines"
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 472706))).CyclicAndSineLinesPatternDefinitionsViewModel
                }
                static createProperties(e) {
                    var t = new n("linetoolcirclelines", e);
                    return this._configureProperties(t), t
                }
            }
            t.LineToolCircleLines = s
        },
        420496: (e, t, i) => {
            i.d(t, {
                LineToolCircle: () => a
            });
            var r = i(40210),
                n = i.n(r),
                s = i(87225),
                o = i(892142),
                l = i(241056);
            class a extends o.LineDataSource {
                constructor(e, t, r, n) {
                    const s = t || a.createProperties();
                    super(e, s, r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 238073)).then((({
                        CirclePaneView: t
                    }) => {
                        const i = [new t(this, e)];
                        this._setPaneViews(i)
                    }))
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Circle"
                }
                template() {
                    const e = super.template();
                    return e.text = this.properties().childs().text.value(), e
                }
                static createProperties(e) {
                    const t = new s.DefaultProperty("linetoolcircle", e);
                    return this._configureProperties(t), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 389314))).EllipseCircleDefinitionsViewModel
                }
                _snapTo45DegreesAvailable() {
                    return !0
                }
                _applyTemplateImpl(e) {
                    super._applyTemplateImpl(e), this.properties().childs().text.setValue(e.text)
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.hasChild("text") || e.addChild("text", new(n())("")), e.addChild("linesColors", new l.LineToolColorsProperty([e.childs().color])), e.addChild("linesWidths", new l.LineToolWidthsProperty([e.childs().linewidth])), e.addChild("backgroundsColors", new l.LineToolColorsProperty([e.childs().backgroundColor])), e.addChild("textsColors", new l.LineToolColorsProperty([e.childs().textColor], e.childs().showLabel)), e.addExclusion("linesColors"), e.addExclusion("linesWidths"), e.addExclusion("backgroundsColors"), e.addExclusion("text")
                }
            }
        },
        420365: (e, t, i) => {
            i.d(t, {
                LineToolComment: () => s
            });
            var r = i(87225),
                n = i(998275);
            class s extends n.LineToolBalloon {
                constructor(e, t, i, r) {
                    super(e, t || s.createProperties(), i, r)
                }
                name() {
                    return "Comment"
                }
                static createProperties(e) {
                    const t = new r.DefaultProperty("linetoolcomment", e);
                    return s._configureProperties(t), t
                }
                _createPaneView() {
                    Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 854350)).then((e => {
                        this._setPaneViews([new e.CommentPaneView(this, this._model)])
                    }))
                }
            }
        },
        506717: (e, t, i) => {
            i.d(t, {
                LineToolCrossLine: () => l
            });
            var r = i(87225),
                n = i(174527),
                s = i(968058),
                o = i(892142);
            class l extends o.LineDataSource {
                constructor(e, t, r, o) {
                    super(e, t || l.createProperties(), r, o), this._priceAxisView = new n.LineToolHorzLinePriceAxisView(this), this._timeAxisView = new s.LineToolVertLineTimeAxisView(this), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 223253)).then((({
                        CrossLinePaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                pointsCount() {
                    return 1
                }
                name() {
                    return "Cross Line"
                }
                priceAxisViews(e, t) {
                    return this.isSourceHidden() ? null : t === this.priceScale() && this.properties().childs().showPrice.value() && this._model.paneForSource(this) === e ? [this._priceAxisView] : null
                }
                timeAxisViews() {
                    return this.isSourceHidden() ? null : this.properties().childs().showTime.value() ? [this._timeAxisView] : null
                }
                updateAllViews(e) {
                    super.updateAllViews(e), this._priceAxisView.update(e), this._timeAxisView.update()
                }
                canHasAlert() {
                    return !1
                }
                lineColor() {
                    return this.properties().childs().linecolor.value()
                }
                lineWidth() {
                    return this.properties().childs().linewidth.value()
                }
                lineStyle() {
                    return this.properties().childs().linestyle.value()
                }
                static createProperties(e) {
                    const t = new r.DefaultProperty("linetoolcrossline", e);
                    return this._configureProperties(t), t
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 70243)).then((e => e.CrossLineDefinitionsViewModel))
                }
            }
        },
        812080: (e, t, i) => {
            i.d(t, {
                CustomEventItem: () => s,
                LineToolCustomUrlEvent: () => o
            });
            var r = i(650151),
                n = i(343135);
            class s {
                constructor(e) {
                    this._source = e
                }
                position() {
                    return this._props().childs().position.value()
                }
                _props() {
                    return this._source.properties()
                }
            }
            class o extends n.LineToolWithRelativePriceCoordinate {
                constructor() {
                    super(...arguments), this._item = null, this._eventTimePointIndex = null
                }
                pointsCount() {
                    return 1
                }
                cloneable() {
                    return !1
                }
                eventTimePointIndex() {
                    return this._eventTimePointIndex
                }
                customEvent() {
                    return this._item
                }
                restorePoints(e, t, i) {
                    i && t.length > 0 && (this._eventTimePointIndex = t[0].index), super.restorePoints(e, t, i)
                }
                priceAxisPoints() {
                    return []
                }
                _baseSeriesIndexForPoint(e) {
                    var t;
                    return null !== (t = this._eventTimePointIndex) && void 0 !== t ? t : e.index
                }
                _alignPointHorizontallyOrVertically(e) {
                    var t, i;
                    if (null === this._eventTimePointIndex) return e;
                    const n = this._points[0].index - this._eventTimePointIndex,
                        s = (0, r.ensure)(null === (i = null === (t = this._startMovingPoint) || void 0 === t ? void 0 : t.logical) || void 0 === i ? void 0 : i.index) - n;
                    return {
                        price: e.price,
                        index: s
                    }
                }
                _snapPoint45Degree(e, t, i) {
                    this._eventTimePointIndex && (e.index = this._eventTimePointIndex)
                }
                _snapTo45DegreesAvailable() {
                    return !0
                }
                _allowChangeAnchorHorizontally() {
                    return !0
                }
                _pointsForPointset() {
                    return [
                        [(0, r.ensureNotNull)(this._item).time(), 0], ...super._pointsForPointset()
                    ]
                }
                _onPointsetUpdated(e) {
                    if (0 === e.length) return;
                    const t = e.findIndex((e => 0 === e.index)); - 1 !== t && (this._eventTimePointIndex = e[t].value[0]);
                    const i = e.slice(1).map((e => ({
                        value: e.value,
                        index: e.index - 1
                    })));
                    super._onPointsetUpdated(i)
                }
                _readyToCreatePointset() {
                    return super._readyToCreatePointset() && null !== this._item
                }
            }
        },
        228552: (e, t, i) => {
            i.d(t, {
                LineToolCypherPattern: () => s
            });
            var r = i(333652),
                n = i(87225);
            class s extends r.LineTool5PointsPattern {
                constructor(e, t, i, r) {
                    super(e, t || s.createProperties(), i, r)
                }
                name() {
                    return "Cypher Pattern"
                }
                static createProperties(e) {
                    const t = new n.DefaultProperty("linetoolcypherpattern", e);
                    return this._configureProperties(t), t
                }
                _loadPaneViews(e) {
                    Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 553692)).then((t => {
                        this._setPaneViews([new t.CypherPaneView(this, e)])
                    }))
                }
            }
        },
        703428: (e, t, i) => {
            i.d(t, {
                nonThemedFactoryDefaultsBase: () => u,
                themedFactoryDefaultsBase: () => d,
                DateAndPriceBaseProperties: () => p
            });
            var r = i(314967),
                n = i(61499),
                s = i(114123),
                o = i(488792),
                l = i(542149),
                a = i(40210),
                c = i.n(a);
            const h = (0, r.getHexColorByName)("color-tv-blue-500"),
                u = {
                    linewidth: 1,
                    fontsize: 12,
                    fillLabelBackground: !0,
                    fillBackground: !0,
                    backgroundTransparency: 60,
                    intervalsVisibilities: { ...o.intervalsVisibilitiesDefaults
                    },
                    customText: {
                        visible: !1,
                        fontsize: 12,
                        bold: !1,
                        italic: !1
                    }
                },
                d = new Map([
                    [n.StdTheme.Light, {
                        textcolor: (0, r.getHexColorByName)("color-black"),
                        labelBackgroundColor: (0, r.getHexColorByName)("color-white"),
                        linecolor: h,
                        backgroundColor: (0, s.generateColor)(h, 85),
                        shadow: "rgba(0, 0, 0, 0.2)",
                        customText: {
                            color: h
                        }
                    }],
                    [n.StdTheme.Dark, {
                        textcolor: (0,
                            r.getHexColorByName)("color-white"),
                        labelBackgroundColor: (0, r.getHexColorByName)("color-cold-gray-800"),
                        linecolor: h,
                        backgroundColor: (0, s.generateColor)(h, 85),
                        shadow: "rgba(0, 0, 0, 0.4)",
                        customText: {
                            color: h
                        }
                    }]
                ]);
            class p extends l.ThemedDefaultProperty {
                constructor(e, t, i, r, n) {
                    var s, o, l;
                    super(e, t, i, r, n), null === (s = this.childs().customText) || void 0 === s || s.addChild("text", new(c())(null !== (l = null === (o = null == n ? void 0 : n.customText) || void 0 === o ? void 0 : o.text) && void 0 !== l ? l : ""))
                }
                _allKeys() {
                    const e = super._allKeys();
                    return e.push("customText.text"), e
                }
            }
        },
        402430: (e, t, i) => {
            i.d(t, {
                LineToolDateAndPriceRange: () => v
            });
            var r = i(650151),
                n = i(892142),
                s = i(483201),
                o = i(61499),
                l = i(314967),
                a = i(542149),
                c = i(703428);
            const h = (0, l.getHexColorByName)("color-tv-blue-500"),
                u = { ...c.nonThemedFactoryDefaultsBase,
                    drawBorder: !1,
                    borderWidth: 1
                },
                d = new Map([
                    [o.StdTheme.Light, { ...c.themedFactoryDefaultsBase.get(o.StdTheme.Light),
                        borderColor: h
                    }],
                    [o.StdTheme.Dark, { ...c.themedFactoryDefaultsBase.get(o.StdTheme.Dark),
                        borderColor: h
                    }]
                ]),
                p = (0, a.extractAllPropertiesKeys)((0, r.ensureDefined)(d.get(o.StdTheme.Light))),
                _ = (0, a.extractAllPropertiesKeys)(u);
            class P extends c.DateAndPriceBaseProperties {
                static create(e) {
                    return new this("linetooldateandpricerange", (() => (0, a.factoryDefaultsForCurrentTheme)(u, d)), _, p, e)
                }
            }
            class v extends n.LineDataSource {
                constructor(e, t, r, n) {
                    super(e, t || v.createProperties(), r, n), this._volumeCalculator = null, Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 861345)).then((e => {
                        this._setPaneViews([new e.DateAndPriceRangePaneView(this, this._model)])
                    }))
                }
                destroy() {
                    super.destroy(), null !== this._volumeCalculator && this._volumeCalculator.destroy()
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Date and Price Range"
                }
                volume() {
                    if (null === this._volumeCalculator) return NaN;
                    const e = this.points();
                    return this._volumeCalculator.volume(e[0].index, e[1].index)
                }
                setOwnerSource(e) {
                    e === this._model.mainSeries() && ((0, r.assert)(null === this._volumeCalculator), this._volumeCalculator = new s.SeriesTimeRangeVolumeCalculator(this._model.mainSeries())), super.setOwnerSource(e)
                }
                static createProperties(e) {
                    const t = P.create(e);
                    return this._configureProperties(t), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 165547))).GeneralDatePriceRangeDefinitionsViewModel
                }
            }
        },
        887326: (e, t, i) => {
            i.d(t, {
                LineToolDateRange: () => _
            });
            var r = i(650151),
                n = i(892142),
                s = i(483201),
                o = i(61499),
                l = i(542149),
                a = i(703428);
            const c = { ...a.nonThemedFactoryDefaultsBase,
                    extendTop: !1,
                    extendBottom: !1
                },
                h = a.themedFactoryDefaultsBase,
                u = (0, l.extractAllPropertiesKeys)((0, r.ensureDefined)(h.get(o.StdTheme.Light))),
                d = (0, l.extractAllPropertiesKeys)(c);
            class p extends a.DateAndPriceBaseProperties {
                static create(e) {
                    return new this("linetooldaterange", (() => (0, l.factoryDefaultsForCurrentTheme)(c, h)), d, u, e)
                }
            }
            class _ extends n.LineDataSource {
                constructor(e, t, r, n) {
                    super(e, t || _.createProperties(), r, n), this._volumeCalculator = null, Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 817591)).then((e => {
                        this._setPaneViews([new e.DateRangePaneView(this, this._model)])
                    }))
                }
                destroy() {
                    super.destroy(), null !== this._volumeCalculator && this._volumeCalculator.destroy()
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Date Range"
                }
                volume() {
                    if (null === this._volumeCalculator) return NaN;
                    const e = this.points();
                    return this._volumeCalculator.volume(e[0].index, e[1].index)
                }
                setOwnerSource(e) {
                    e === this._model.mainSeries() && ((0, r.assert)(null === this._volumeCalculator), this._volumeCalculator = new s.SeriesTimeRangeVolumeCalculator(this._model.mainSeries())), super.setOwnerSource(e)
                }
                static createProperties(e) {
                    const t = p.create(e);
                    return this._configureProperties(t), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 165547))).GeneralDatePriceRangeDefinitionsViewModel
                }
            }
        },
        564883: (e, t, i) => {
            var r = i(892142).LineDataSource,
                n = i(87225).DefaultProperty;
            class s extends r {
                constructor(e, t, r, n) {
                    super(e, t || s.createProperties(), r, n), this.version = s.version, Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.t.bind(i, 781358, 19)).then((({
                        DisjointChannelPaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                pointsCount() {
                    return 3
                }
                name() {
                    return "Disjoint Channel"
                }
                hasEditableCoordinates() {
                    return !1
                }
                addPoint(e, t) {
                    return t && t.shift() && 2 === this.points().length && this._snapPoint45Degree(e, this.points()[this.points().length - 2]), super.addPoint(e)
                }
                setLastPoint(e, t) {
                    return t && t.shift() && 2 === this.points().length && this._snapPoint45Degree(e, this.points()[this.points().length - 2]), super.setLastPoint(e)
                }
                setPoint(e, t, i) {
                    var r = .5 * (this._points[1].price + this._points[2].price);
                    if (i && i.shift() && 1 === e) {
                        this._snapPoint45Degree(t, this.points()[0])
                    }
                    if (e < 3 && super.setPoint(e, t), 0 !== e && 2 !== e) {
                        if (1 === e) {
                            var n = this._points[1].price - r;
                            this._points[2].price = this._points[1].price - 2 * n
                        } else if (3 === e) {
                            n = t.price - this._points[2].price;
                            this._points[0].price = this._points[1].price - n, this._points[0].index = t.index
                        }
                        this.normalizePoints()
                    }
                }
                getPoint(e) {
                    if (e < 3) return super.getPoint(e);
                    var t = this._points[0].price - this._points[2].price;
                    return {
                        index: this._points[0].index,
                        price: this._points[1].price - t
                    }
                }
                canHasAlert() {
                    return !0
                }
                _getAlertPlots() {
                    var e = this._points[0],
                        t = this._points[1],
                        i = [];
                    e.index <= t.index ? (i.push(e), i.push(t)) : (i.push(t), i.push(e));
                    var r = this._points[2];
                    r.time = t.time, r.index = t.index;
                    var n, s, o, l, a = {
                            price: r.price + (t.price - e.price),
                            time: e.time,
                            index: e.index
                        },
                        c = [];
                    r.index <= a.index ? (c.push(r), c.push(a)) : (c.push(a), c.push(r)), i[0].price > c[0].price ? (n = i, s = c) : c[0].price > i[0].price || c[1].price > i[1].price ? (n = c, s = i) : (n = i, s = c);
                    var h = this.properties().extendLeft.value(),
                        u = this.properties().extendRight.value();
                    return e.index <= t.index ? (o = h, l = u) : (o = u, l = h), [this._linePointsToAlertPlot(n, "Upper", o, l), this._linePointsToAlertPlot(s, "Lower", o, l)]
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 963480))).GeneralTrendFiguresDefinitionsViewModel
                }
                static createProperties(e) {
                    var t = new n("linetooldisjointangle", e);
                    return this._configureProperties(t),
                        t
                }
            }
            s.version = 1, t.LineToolDisjointChannel = s
        },
        759499: (e, t, i) => {
            i.d(t, {
                LineToolElliott: () => d,
                LineToolElliottImpulse: () => P,
                LineToolElliottTriangle: () => g,
                LineToolElliottTripleCombo: () => f,
                LineToolElliottCorrection: () => T,
                LineToolElliottDoubleCombo: () => w
            });
            var r = i(777754),
                n = i(683890),
                s = i(892142),
                o = i(310399),
                l = i(87225),
                a = i(241056);
            const c = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
                h = new n.TranslatedString("change Elliott degree", r.t(null, void 0, i(876020))),
                u = [{
                    value: 0,
                    title: r.t(null, void 0, i(433820))
                }, {
                    value: 1,
                    title: r.t(null, void 0, i(558397))
                }, {
                    value: 2,
                    title: r.t(null, void 0, i(609753))
                }, {
                    value: 3,
                    title: r.t(null, void 0, i(718367))
                }, {
                    value: 4,
                    title: r.t(null, void 0, i(591889))
                }, {
                    value: 5,
                    title: r.t(null, void 0, i(495176))
                }, {
                    value: 6,
                    title: r.t(null, void 0, i(348404))
                }, {
                    value: 7,
                    title: r.t(null, void 0, i(671778))
                }, {
                    value: 8,
                    title: r.t(null, {
                        context: "wave"
                    }, i(266051))
                }, {
                    value: 9,
                    title: r.t(null, {
                        context: "wave"
                    }, i(486054))
                }, {
                    value: 10,
                    title: r.t(null, void 0, i(185884))
                }, {
                    value: 11,
                    title: r.t(null, void 0, i(471722))
                }, {
                    value: 12,
                    title: r.t(null, void 0, i(210931))
                }, {
                    value: 13,
                    title: r.t(null, void 0, i(729662))
                }, {
                    value: 14,
                    title: r.t(null, void 0, i(609632))
                }];
            class d extends s.LineDataSource {
                constructor(e, t, r, n) {
                    super(e, null != t ? t : d.createProperties(), r, n), this.version = 4, Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 995727)).then((e => {
                        this._setPaneViews([new e.ElliottLabelsPaneView(this, this._model)])
                    }))
                }
                migrateVersion(e, t, i) {
                    if (i.properties.hasChild("background") && i.properties.removeProperty("background"), i.properties.hasChild("backgroundColor") && i.properties.removeProperty("backgroundColor"), i.properties.hasChild("showBackground") && i.properties.removeProperty("showBackground"), 1 === e) {
                        const e = Object.assign({}, this._timePoint[0]);
                        if (this._timePoint.unshift(e), this._points.length > 0) {
                            const e = Object.assign({}, this._points[0]);
                            this._points.unshift(e)
                        }
                    }
                }
                applyTemplate(e) {
                    const t = e;
                    delete t.background, delete t.backgroundColor, delete t.showBackground, super.applyTemplate(e)
                }
                name() {
                    return "Elliott Labels"
                }
                additionalActions(e) {
                    return [new o.Action({
                        actionId: "Chart.LineTool.Elliot.ChangeDegreeProperty",
                        label: r.t(null, void 0, i(69479)),
                        subItems: c.map((t => {
                            const i = u.filter((e => e.value === t))[0];
                            return new o.Action({
                                actionId: "Chart.LineTool.Elliot.ChangeDegreeProperty",
                                label: i.title,
                                checkable: !0,
                                checked: this.properties().childs().degree.value() === t,
                                onExecute: () => {
                                    e.setProperty(this.properties().childs().degree, t, h)
                                }
                            })
                        }))
                    })]
                }
                label(e) {
                    const t = c.length - this.properties().childs().degree.value() - 1,
                        i = Math.floor(t / 3);
                    return {
                        group: i,
                        bold: !!(i % 2),
                        decoration: ["", "brackets", "circle"][t % 3],
                        label: this.labelsGroup()[i][e]
                    }
                }
                availableDegreesValues() {
                    return u
                }
                static createProperties(e) {
                    const t = new l.DefaultProperty("linetoolelliott", e);
                    return this._configureProperties(t), t
                }
                static migrateState(e) {
                    const t = {
                            0: 11,
                            1: 10,
                            2: 9,
                            3: 8,
                            4: 7,
                            5: 6,
                            6: 5,
                            7: 4,
                            8: 3
                        },
                        i = {
                            0: 11,
                            1: 8
                        };
                    "LineToolElliottSubminuette" === e.type && (e.type = "LineToolElliottImpulse", e.state.degree = t[e.state.wavesize]), "LineToolElliottMinor" === e.type && (e.type = "LineToolElliottImpulse", e.state.degree = t[e.state.wavesize]),
                        "LineToolElliottCircle" === e.type && (e.type = "LineToolElliottImpulse", e.state.degree = t[e.state.wavesize]), "LineToolElliottMinorRetr" === e.type && (e.type = "LineToolElliottCorrection", e.state.degree = i[e.state.wavesize]), "LineToolElliottMajorRetr" === e.type && (e.type = "LineToolElliottCorrection", e.state.degree = i[e.state.wavesize])
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 21113))).ElliottPatternDefinitionsViewModel
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.addChild("linesColors", new a.LineToolColorsProperty([e.childs().color])), e.addExclusion("linesColors")
                }
            }
            class p extends d {
                pointsCount() {
                    return 6
                }
            }
            const _ = [
                ["0", "1", "2", "3", "4", "5"],
                ["0", "i", "ii", "iii", "iv", "v"],
                ["0", "1", "2", "3", "4", "5"],
                ["0", "I", "II", "III", "IV", "V"],
                ["0", "1", "2", "3", "4", "5"]
            ];
            class P extends p {
                constructor(e, t, i, r) {
                    super(e, t || P.createProperties(), i, r)
                }
                name() {
                    return "Elliott Impulse Wave (12345)"
                }
                labelsGroup() {
                    return _
                }
                static createProperties(e) {
                    const t = new l.DefaultProperty("linetoolelliottimpulse", e);
                    return this._configureProperties(t), t
                }
            }
            const v = [
                ["0", "A", "B", "C", "D", "E"],
                ["0", "a", "b", "c", "d", "e"],
                ["0", "A", "B", "C", "D", "E"],
                ["0", "a", "b", "c", "d", "e"],
                ["0", "A", "B", "C", "D", "E"]
            ];
            class g extends p {
                constructor(e, t, i, r) {
                    super(e, t || g.createProperties(), i, r)
                }
                name() {
                    return "Elliott Triangle Wave (ABCDE)"
                }
                labelsGroup() {
                    return v
                }
                static createProperties(e) {
                    const t = new l.DefaultProperty("linetoolelliotttriangle", e);
                    return this._configureProperties(t), t
                }
            }
            const m = [
                ["0", "W", "X", "Y", "X", "Z"],
                ["0", "w", "x", "y", "x", "z"],
                ["0", "W", "X", "Y", "X", "Z"],
                ["0", "w", "x", "y", "x", "z"],
                ["0", "W", "X", "Y", "X", "Z"]
            ];
            class f extends p {
                constructor(e, t, i, r) {
                    super(e, null != t ? t : f.createProperties(), i, r)
                }
                name() {
                    return "Elliott Triple Combo Wave (WXYXZ)"
                }
                labelsGroup() {
                    return m
                }
                static createProperties(e) {
                    const t = new l.DefaultProperty("linetoolelliotttriplecombo", e);
                    return this._configureProperties(t), t
                }
            }
            class C extends d {
                pointsCount() {
                    return 4
                }
            }
            const y = [
                ["0", "A", "B", "C"],
                ["0", "a", "b", "c"],
                ["0", "A", "B", "C"],
                ["0", "a", "b", "c"],
                ["0", "A", "B", "C"]
            ];
            class T extends C {
                constructor(e, t, i, r) {
                    super(e, null != t ? t : T.createProperties(), i, r)
                }
                name() {
                    return "Elliott Correction Wave (ABC)"
                }
                labelsGroup() {
                    return y
                }
                static createProperties(e) {
                    const t = new l.DefaultProperty("linetoolelliottcorrection", e);
                    return this._configureProperties(t), t
                }
            }
            const b = [
                ["0", "W", "X", "Y"],
                ["0", "w", "x", "y"],
                ["0", "W", "X", "Y"],
                ["0", "w", "x", "y"],
                ["0", "W", "X", "Y"]
            ];
            class w extends C {
                constructor(e, t, i, r) {
                    super(e, null != t ? t : w.createProperties(), i, r)
                }
                name() {
                    return "Elliott Double Combo Wave (WXY)"
                }
                labelsGroup() {
                    return b
                }
                static createProperties(e) {
                    const t = new l.DefaultProperty("linetoolelliottdoublecombo", e);
                    return this._configureProperties(t), t
                }
            }
        },
        854446: (e, t, i) => {
            i.d(t, {
                LineToolEllipse: () => u
            });
            var r = i(650151),
                n = i(204652),
                s = i(86441),
                o = i(40210),
                l = i.n(o),
                a = i(892142),
                c = i(87225),
                h = i(241056);
            class u extends a.LineDataSource {
                constructor(e, t, r, n) {
                    super(e, t || u.createProperties(), r, n), this.version = 2, this._dist = null, this._fakePointAdded = !1,
                        Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 771203)).then((({
                            EllipsePaneView: e
                        }) => {
                            this._setPaneViews([new e(this, this._model)])
                        }))
                }
                startChanging(e, t) {
                    if (super.startChanging(e, t), 0 === e || 1 === e) {
                        const e = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[0])),
                            t = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[1])),
                            i = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[2]));
                        this._dist = (0, n.distanceToLine)(e, t, i).distance || 0
                    }
                }
                addPoint(e, t, i) {
                    const r = super.addPoint(e, t, i);
                    return r && (this._fakePointAdded = !1), r
                }
                setPoint(e, t, i, o) {
                    const l = { ...t
                    };
                    let a = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[0])),
                        c = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[1])),
                        h = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[2]));
                    switch (e) {
                        case 0:
                            {
                                if (i && i.shift()) {
                                    this._snapPoint45Degree(l, this._points[1]), this._points[0] = l, this._points[2] = this._preparePointInternal(this._points[2], i, !0), this._points[0].index === this._points[1].index && this._fixVerticalDiameterPoints(this._points[0], this._points[1], this._points[2]);
                                    break
                                }
                                a = (0, r.ensureNotNull)(this.pointToScreenPoint(l));
                                const e = c.subtract(a),
                                    t = a.add(c).scaled(.5),
                                    n = new s.Point(-e.y, e.x).normalized();h = t.add(n.scaled((0, r.ensureNotNull)(this._dist))),
                                this._points[0] = l,
                                this._points[2] = (0, r.ensureNotNull)(this.screenPointToPoint(h));
                                break
                            }
                        case 1:
                            {
                                if (i && i.shift()) {
                                    this._snapPoint45Degree(l, this._points[0]), this._points[1] = l, this._points[2] = this._preparePointInternal(this._points[2], i, !0), this._points[0].index === this._points[1].index && this._fixVerticalDiameterPoints(this._points[1], this._points[0], this._points[2]);
                                    break
                                }
                                c = (0, r.ensureNotNull)(this.pointToScreenPoint(l));
                                const e = c.subtract(a),
                                    t = a.add(c).scaled(.5),
                                    n = new s.Point(-e.y, e.x).normalized();h = t.add(n.scaled((0, r.ensureNotNull)(this._dist))),
                                this._points[1] = l,
                                this._points[2] = (0, r.ensureNotNull)(this.screenPointToPoint(h));
                                break
                            }
                        case 2:
                            {
                                const e = (0, r.ensureNotNull)(this.pointToScreenPoint(l)),
                                    t = (0, n.distanceToLine)(a, c, e).distance,
                                    i = c.subtract(a),
                                    o = a.add(c).scaled(.5),
                                    u = new s.Point(-i.y, i.x).normalized();h = o.add(u.scaled(t)),
                                this._points[2] = (0, r.ensureNotNull)(this.screenPointToPoint(h));
                                break
                            }
                        case 3:
                            {
                                const e = (0, r.ensureNotNull)(this.pointToScreenPoint(l)),
                                    t = (0, n.distanceToLine)(a, c, e).distance,
                                    i = c.subtract(a),
                                    o = a.add(c).scaled(.5),
                                    u = new s.Point(-i.y, i.x).normalized();h = o.add(u.scaled(t)),
                                this._points[2] = (0, r.ensureNotNull)(this.screenPointToPoint(h));
                                break
                            }
                    }
                    this.normalizePoints()
                }
                pointsCount() {
                    return 3
                }
                name() {
                    return "Ellipse"
                }
                hasEditableCoordinates() {
                    return !1
                }
                migrateVersion(e, t, i) {
                    if (1 === e && 2 === this._points.length) {
                        const e = this._points[0].price,
                            t = .5 * (this._points[0].price + this._points[1].price);
                        this._points[0] = {
                            price: t,
                            index: this._points[0].index
                        }, this._points[1] = {
                            price: t,
                            index: this._points[1].index
                        }, this._points.push({
                            price: e,
                            index: this._points[0].index
                        })
                    }
                    if (1 === e && 2 === this._timePoint.length) {
                        const e = this._timePoint[0].price,
                            t = .5 * (this._timePoint[0].price + this._timePoint[1].price);
                        this._timePoint[0].price = t, this._timePoint[1].price = t;
                        const i = {
                            price: e,
                            offset: this._timePoint[0].offset,
                            time_t: this._timePoint[0].time_t
                        };
                        this._timePoint.push(i)
                    }
                }
                template() {
                    const e = super.template();
                    return e.text = this.properties().childs().text.value(), e
                }
                static createProperties(e) {
                    const t = new c.DefaultProperty("linetoolellipse", e);
                    return this._configureProperties(t), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 389314))).EllipseCircleDefinitionsViewModel
                }
                _preparePoint(e, t) {
                    const i = this._preparePointInternal(e, t, !1);
                    return t && t.shift() && this._points[0].index === this._points[1].index && this._fixVerticalDiameterPoints(this._points[1], this._points[0], i), i
                }
                _applyTemplateImpl(e) {
                    super._applyTemplateImpl(e), this.properties().childs().text.setValue(e.text)
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.hasChild("text") || e.addChild("text", new(l())("")), e.addChild("linesColors", new h.LineToolColorsProperty([e.childs().color])), e.addChild("textsColors", new h.LineToolColorsProperty([e.childs().textColor], e.childs().showLabel)), e.addExclusion("text")
                }
                _preparePointInternal(e, t, i) {
                    let n = { ...e
                    };
                    if (t && t.shift()) {
                        const t = this.points().length;
                        if (!this._fakePointAdded && 3 === t && !i) return n;
                        if (this._fakePointAdded || 2 === t || i) {
                            this._snapPoint45Degree(e, this._points[0]), this._fakePointAdded ? this._points[1] = e : i || (this._fakePointAdded = !0, super._addPointIntenal(e));
                            const t = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[0])),
                                o = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[1])),
                                l = o.x - t.x,
                                a = o.y - t.y,
                                c = Math.sqrt(l * l + a * a) / 2,
                                h = o.subtract(t),
                                u = t.add(o).scaled(.5),
                                d = new s.Point(-h.y, h.x).normalized(),
                                p = u.add(d.scaled(c));
                            n = (0, r.ensureNotNull)(this.screenPointToPoint(p)), (isNaN(n.price) || isNaN(n.index)) && (n = (0, r.ensureNotNull)(this.screenPointToPoint(u)))
                        }
                    } else this._fakePointAdded && (this._points.splice(1, 1), this._fakePointAdded = !1);
                    return n
                }
                _fixVerticalDiameterPoints(e, t, i) {
                    const n = (0, r.ensureNotNull)(this.pointToScreenPoint(e)),
                        o = (0, r.ensureNotNull)(this.pointToScreenPoint(t)),
                        l = this._model.timeScale(),
                        a = l.indexToCoordinate(e.index),
                        c = l.indexToCoordinate(i.index);
                    let h = 2 * Math.abs(a - c);
                    h *= t.price > e.price ? 1 : -1, e.price = (0, r.ensureNotNull)(this.screenPointToPoint(new s.Point(n.x, o.y + h))).price
                }
            }
        },
        650604: (e, t, i) => {
            i.d(t, {
                LineToolEmoji: () => c
            });
            var r = i(356361),
                n = i(272001),
                s = i(890740),
                o = i(87225),
                l = i(985695);
            const a = (0, n.getLogger)("Chart.LineToolEmoji");
            class c extends l.LineToolSvgIconBase {
                constructor(e, t, i, r) {
                    super(e, t || c.createProperties(), i, r), this.version = 1, this._loadViews()
                }
                name() {
                    return "Emoji"
                }
                static createProperties(e) {
                    const t = new o.DefaultProperty("linetoolemoji", e);
                    return c._configureProperties(t), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 320410))).LineDataSourceDefinitionsViewModel
                }
                async _loadViews() {
                    const e = this._properties.childs().emoji.value(),
                        t = (0, r.getTwemojiUrl)(e, "svg");
                    try {
                        const [r, {
                            EmojiPaneView: n
                        }, {
                            svgRenderer: o
                        }] = await Promise.all([(0,
                            s.fetch)(t).then((e => e.text())), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 433730)), i.e(72616).then(i.bind(i, 905153))]);
                        if (!this._isDestroyed) {
                            this._svgContent = r, this._onIconChanged.fire();
                            const t = o(r);
                            null === t && a.logWarn(`Couldn't create svg renderer for emoji ${e}`), this._setPaneViews([new n(this, this._model, t)])
                        }
                    } catch (t) {
                        a.logWarn(`An error ocurred while loading emoji content ${e}: ${t}`)
                    }
                }
            }
        },
        42374: (e, t, i) => {
            var r = i(732747).LineToolTrendLine,
                n = i(87225).DefaultProperty;
            class s extends r {
                constructor(e, t, i, r) {
                    super(e, t || s.createProperties(), i, r)
                }
                name() {
                    return "Extended Line"
                }
                static createProperties(e) {
                    var t = new n("linetoolextended", e);
                    return this._configureProperties(t), t
                }
            }
            t.LineToolExtended = s
        },
        714657: (e, t, i) => {
            i.d(t, {
                LineToolFibChannel: () => h
            });
            var r = i(650151),
                n = i(777754),
                s = i(683890),
                o = i(892142),
                l = i(955130),
                a = i(241056);
            const c = new s.TranslatedString("erase level line", n.t(null, void 0, i(812962)));
            class h extends o.LineDataSource {
                constructor(e, t, r, n) {
                    super(e, t || h.createProperties(), r, n), this.version = 2, Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 987682)).then((({
                        FibChannelPaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                levelsCount() {
                    return 24
                }
                migrateVersion(e, t, i) {
                    i.properties.removeProperty("reverse")
                }
                pointsCount() {
                    return 3
                }
                name() {
                    return "Fib Channel"
                }
                processErase(e, t) {
                    const i = "level" + t,
                        r = this.properties().child(i).childs().visible;
                    e.setProperty(r, !1, c)
                }
                static createProperties(e) {
                    const t = new l.LevelsProperty("linetoolfibchannel", e, !1, {
                        range: [1, 24],
                        names: ["coeff", "color", "visible"]
                    });
                    return this._configureProperties(t), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 345818))).FibDrawingsWith24LevelsDefinitionsViewModel
                }
                static _configureProperties(e) {
                    super._configureProperties(e);
                    const t = [];
                    for (let i = 1; i <= 24; i++) {
                        const n = (0, r.ensureDefined)(e.child("level" + i));
                        t.push((0, r.ensureDefined)(n.child("color")))
                    }
                    e.addChild("linesColors", new a.LineToolColorsProperty(t))
                }
            }
        },
        798628: (e, t, i) => {
            var r = i(683890).TranslatedString,
                n = i(892142).LineDataSource,
                s = i(955130).LevelsProperty,
                o = i(241056),
                l = o.LineToolWidthsProperty,
                a = o.LineToolColorsProperty,
                c = new r("erase level line", i(777754).t(null, void 0, i(812962)));
            class h extends n {
                constructor(e, t, r, n) {
                    super(e, t || h.createProperties(), r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.t.bind(i, 230990, 19)).then((({
                        FibCirclesPaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                levelsCount() {
                    return h.LevelsCount
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Fib Circles"
                }
                processErase(e, t) {
                    var i = "level" + t,
                        r = this.properties()[i].visible;
                    e.setProperty(r, !1, c)
                }
                static createProperties(e) {
                    var t = new s("linetoolfibcircles", e, !1, {
                        range: [1, 11]
                    });
                    return this._configureProperties(t), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 99660))).FibCirclesDefinitionsViewModel
                }
                _snapTo45DegreesAvailable() {
                    return !0
                }
                static _configureProperties(e) {
                    super._configureProperties(e);
                    for (var t = [e.child("trendline").child("linewidth")], i = [e.child("trendline").child("color")], r = 1; r <= this.LevelsCount; r++) t.push(e.child("level" + r).child("linewidth")), i.push(e.child("level" + r).child("color"));
                    e.addChild("linesColors", new a(i)), e.addChild("linesWidths", new l(t))
                }
            }
            h.LevelsCount = 11, t.LineToolFibCircles = h
        },
        913480: (e, t, i) => {
            i.d(t, {
                LineToolFibRetracement: () => c
            });
            var r = i(777754),
                n = i(683890),
                s = i(955130),
                o = i(892142),
                l = i(241056);
            const a = new n.TranslatedString("erase level line", r.t(null, void 0, i(812962)));
            class c extends o.LineDataSource {
                constructor(e, t, r, n) {
                    super(e, t || c.createProperties(), r, n), this.version = 2, Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 515761)).then((e => {
                        this._setPaneViews([new e.FibRetracementPaneView(this, this._model)])
                    }))
                }
                levelsCount() {
                    return 24
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Fib Retracement"
                }
                migrateVersion(e) {
                    1 === e && this.properties().childs().extendLines.setValue(!0)
                }
                processErase(e, t) {
                    const i = "level" + t,
                        {
                            visible: r
                        } = this.properties().childs()[i].childs();
                    e.setProperty(r, !1, a)
                }
                fibLevelsBasedOnLogScale() {
                    var e;
                    return this.properties().childs().fibLevelsBasedOnLogScale.value() && !!(null === (e = this.priceScale()) || void 0 === e ? void 0 : e.isLog())
                }
                static createProperties(e) {
                    const t = new s.LevelsProperty("linetoolfibretracement", e, !1, {
                        range: [1, 24],
                        names: ["coeff", "color", "visible"]
                    });
                    return this._configureProperties(t), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 345818))).FibDrawingsWith24LevelsDefinitionsViewModel
                }
                static _configureProperties(e) {
                    var t;
                    const i = e;
                    super._configureProperties(i);
                    const r = [i.childs().trendline.childs().linewidth, i.childs().levelsStyle.childs().linewidth],
                        n = [i.childs().trendline.childs().color];
                    for (let e = 1; e <= 24; e++) {
                        const r = null === (t = i.child("level" + e)) || void 0 === t ? void 0 : t.child("color");
                        n.push(r)
                    }
                    i.addChild("linesColors", new l.LineToolColorsProperty(n)), i.addChild("linesWidths", new l.LineToolWidthsProperty(r))
                }
            }
        },
        700465: (e, t, i) => {
            var r = i(683890).TranslatedString,
                n = i(892142).LineDataSource,
                s = i(955130).LevelsProperty,
                o = i(241056),
                l = o.LineToolWidthsProperty,
                a = o.LineToolColorsProperty,
                c = new r("erase level line", i(777754).t(null, void 0, i(812962)));
            class h extends n {
                constructor(e, t, r, n) {
                    super(e, t || h.createProperties(), r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 389495)).then((({
                        FibSpeedResistanceArcsPaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                levelsCount() {
                    return h.LevelsCount
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Fib Speed Resistance Arcs"
                }
                processErase(e, t) {
                    var i = "level" + t,
                        r = this.properties()[i].visible;
                    e.setProperty(r, !1, c)
                }
                static createProperties(e) {
                    var t = new s("linetoolfibspeedresistancearcs", e, !1, {
                        range: [1, 11]
                    });
                    return this._configureProperties(t), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 416313))).FibSpeedResistanceArcsDefinitionsViewModel
                }
                static _configureProperties(e) {
                    super._configureProperties(e);
                    for (var t = [e.child("trendline").child("linewidth")], i = [e.child("trendline").child("color")], r = 1; r <= this.LevelsCount; r++) t.push(e.child("level" + r).child("linewidth")), i.push(e.child("level" + r).child("color"));
                    e.addChild("linesColors", new a(i)), e.addChild("linesWidths", new l(t))
                }
            }
            h.LevelsCount = 11, t.LineToolFibSpeedResistanceArcs = h
        },
        182229: (e, t, i) => {
            var r = i(683890).TranslatedString,
                n = i(892142).LineDataSource,
                s = i(955130).LevelsProperty,
                o = i(241056).LineToolColorsProperty,
                l = new r("erase level line", i(777754).t(null, void 0, i(812962)));
            class a extends n {
                constructor(e, t, r, n) {
                    super(e, t || a.createProperties(), r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 68952)).then((({
                        FibSpeedResistanceFanPaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                hLevelsCount() {
                    return a.HLevelsCount
                }
                vLevelsCount() {
                    return a.VLevelsCount
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Fib Speed Resistance Fan"
                }
                processErase(e, t) {
                    var i = "h" === t.type ? "hlevel" + t.index : "vlevel" + t.index,
                        r = this.properties()[i].visible;
                    e.setProperty(r, !1, l)
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 676615))).FibSpeedResistanceFanDefinitionsViewModel
                }
                _snapTo45DegreesAvailable() {
                    return !0
                }
                static createProperties(e) {
                    void 0 !== e && void 0 === e.reverse && (e.reverse = !0);
                    var t = new s("linetoolfibspeedresistancefan", e, !1, {
                        range: [1, 7],
                        prefixes: ["h", "v"],
                        names: ["coeff", "color", "visible"]
                    });
                    return this._configureProperties(t), t
                }
                static _configureProperties(e) {
                    super._configureProperties(e);
                    var t = [e.child("grid").child("color")];
                    for (let i = 1; i <= this.HLevelsCount; i++) t.push(e.child("hlevel" + i).child("color"));
                    for (let i = 1; i <= this.VLevelsCount; i++) t.push(e.child("vlevel" + i).child("color"));
                    e.addChild("linesColors", new o(t)), e.addExclusion("linesColors")
                }
            }
            a.HLevelsCount = 7, a.VLevelsCount = 7, t.LineToolFibSpeedResistanceFan = a
        },
        889056: (e, t, i) => {
            var r = i(892142).LineDataSource,
                n = i(87225).DefaultProperty;
            class s extends r {
                constructor(e, t, r, n) {
                    super(e, t || s.createProperties(), r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 366410)).then((({
                        FibSpiralPaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Fib Spiral"
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 851815))).FibSpiralDefinitionsViewModel
                }
                static createProperties(e) {
                    var t = new n("linetoolfibspiral", e);
                    return this._configureProperties(t), t
                }
            }
            t.LineToolFibSpiral = s
        },
        304935: (e, t, i) => {
            i.d(t, {
                LineToolFibTimeZone: () => c
            });
            var r = i(777754),
                n = i(683890),
                s = i(241056),
                o = i(955130),
                l = i(892142);
            const a = new n.TranslatedString("erase level line", r.t(null, void 0, i(812962)));
            class c extends l.LineDataSource {
                constructor(e, t, r, n) {
                    super(e, t || c.createProperties(), r, n), this.version = 2, Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 386470)).then((({
                        FibTimeZonePaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                levelsCount() {
                    return 11
                }
                migrateVersion(e, t, i) {
                    if (1 === e) {
                        const e = i.properties.childs(),
                            t = i.properties,
                            r = t.baselinecolor.value(),
                            n = t.linecolor.value(),
                            s = t.linewidth.value(),
                            o = t.linestyle.value();
                        e.level1.childs().color.setValue(r);
                        for (let t = 2; t <= 11; t++) e["level" + t].childs().color.setValue(n);
                        for (let t = 1; t <= 11; t++) e["level" + t].childs().linewidth.setValue(s), e["level" + t].childs().linestyle.setValue(o)
                    }
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Fib Time Zone"
                }
                processErase(e, t) {
                    const i = "level" + t,
                        r = this.properties().childs()[i].childs().visible;
                    e.setProperty(r, !1, a)
                }
                static createProperties(e) {
                    const t = new o.LevelsProperty("linetoolfibtimezone", e, !1, {
                        range: [1, 11]
                    });
                    return this._configureProperties(t), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 465862))).FibTimezoneDefinitionsViewModel
                }
                static _configureProperties(e) {
                    super._configureProperties(e);
                    const t = [],
                        i = [];
                    for (let r = 1; r <= 11; r++) {
                        const n = e.childs()["level" + r].childs();
                        t.push(n.linewidth), i.push(n.color)
                    }
                    e.addChild("linesColors", new s.LineToolColorsProperty(i)), e.addChild("linesWidths", new s.LineToolWidthsProperty(t))
                }
            }
        },
        730906: (e, t, i) => {
            i.d(t, {
                LineToolFibWedgeBase: () => o
            });
            var r = i(650151),
                n = i(86441),
                s = i(892142);
            class o extends s.LineDataSource {
                pointsCount() {
                    return 3
                }
                hasEditableCoordinates() {
                    return !1
                }
                setPoint(e, t) {
                    if (super.setPoint(e, t), !this._recursiveGuard) try {
                        if (this._recursiveGuard = !0, 2 === e) {
                            const e = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[0]));
                            let t = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[1]));
                            const i = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[2])).subtract(e).length();
                            let s = t.subtract(e);
                            s.length() <= 0 && (s = new n.Point(1, 0)), t = e.add(s.normalized().scaled(i));
                            const o = (0, r.ensureNotNull)(this.screenPointToPoint(t)),
                                l = this._pointsProperty.childs().points[1];
                            l.childs().price.setValue(o.price), l.childs().bar.setValue(o.index)
                        } else {
                            const e = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[0])),
                                t = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[1]));
                            let i = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[2]));
                            const s = t.subtract(e).length();
                            let o = i.subtract(e);
                            o.length() <= 0 && (o = new n.Point(1, 0)), i = e.add(o.normalized().scaled(s));
                            const l = (0, r.ensureNotNull)(this.screenPointToPoint(i)),
                                a = this._pointsProperty.childs().points[2];
                            a.childs().price.setValue(l.price), a.childs().bar.setValue(l.index)
                        }
                    } finally {
                        this._recursiveGuard = !1
                    }
                }
                addPoint(e) {
                    if (2 === this._points.length) {
                        const t = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[0])),
                            i = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[1]));
                        let n = (0, r.ensureNotNull)(this.pointToScreenPoint(e));
                        const s = i.subtract(t).length(),
                            o = n.subtract(t).normalized();
                        n = t.add(o.scaled(s));
                        const l = (0, r.ensureNotNull)(this.ownerSource()),
                            a = (0, r.ensureNotNull)(l.firstValue()),
                            c = (0, r.ensureNotNull)(this.priceScale()).coordinateToPrice(n.y, a);
                        e = {
                            index: Math.round(this._model.timeScale().coordinateToIndex(n.x)),
                            price: c
                        }
                    }
                    return super.addPoint(e)
                }
            }
        },
        113101: (e, t, i) => {
            var r = i(683890).TranslatedString,
                n = i(730906).LineToolFibWedgeBase,
                s = i(955130).LevelsProperty,
                o = i(241056),
                l = o.LineToolWidthsProperty,
                a = o.LineToolColorsProperty,
                c = new r("erase level line", i(777754).t(null, void 0, i(812962)));
            class h extends n {
                constructor(e, t, r, n) {
                    super(e, t || h.createProperties(), r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.t.bind(i, 42242, 19)).then((({
                        FibWedgePaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                isSynchronizable() {
                    return !1
                }
                levelsCount() {
                    return h.LevelsCount
                }
                name() {
                    return "Fib Wedge"
                }
                processErase(e, t) {
                    var i = "level" + t,
                        r = this.properties()[i].visible;
                    e.setProperty(r, !1, c)
                }
                static createProperties(e) {
                    var t = new s("linetoolfibwedge", e, !1, {
                        range: [1, 11]
                    });
                    return this._configureProperties(t), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 902644))).FibWedgeDefinitionsViewModel
                }
                static _configureProperties(e) {
                    super._configureProperties(e);
                    for (var t = [e.child("trendline").child("linewidth")], i = [e.child("trendline").child("color")], r = 1; r <= this.LevelsCount; r++) t.push(e.child("level" + r).child("linewidth")), i.push(e.child("level" + r).child("color"));
                    e.addChild("linesColors", new a(i)), e.addChild("linesWidths", new l(t))
                }
            }
            h.LevelsCount = 11, t.LineToolFibWedge = h
        },
        256957: (e, t, i) => {
            i.d(t, {
                LineToolFlagMark: () => l
            });
            var r = i(86441),
                n = i(892142),
                s = i(87225),
                o = i(241056);
            class l extends n.LineDataSource {
                constructor(e, t, n, s) {
                    super(e, t || l.createProperties(), n, s), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 185563)).then((({
                        FlagMarkPaneView: e
                    }) => {
                        const t = new e(this, this.model());
                        t.setAnchors(new r.Point(0, 0)), this._setPaneViews([t])
                    }))
                }
                pointsCount() {
                    return 1
                }
                name() {
                    return "Flag Mark"
                }
                static createProperties(e) {
                    e && void 0 === e.flagColor && (e.flagColor = "#318757");
                    const t = new s.DefaultProperty("linetoolflagmark", e);
                    return this._configureProperties(t), t
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 610374)).then((e => e.FlagMarkDefinitionsViewModel))
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.addChild("backgroundsColors", new o.LineToolColorsProperty([e.childs().flagColor])), e.addExclusion("backgroundsColors")
                }
            }
            l.version = 2
        },
        202645: (e, t, i) => {
            var r = i(892142).LineDataSource,
                n = i(87225).DefaultProperty;
            class s extends r {
                constructor(e, t, r, n) {
                    super(e, t || s.createProperties(), r, n), this.version = s.version, Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.t.bind(i, 609694, 19)).then((({
                        FlatBottomPaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                pointsCount() {
                    return 3
                }
                name() {
                    return "Flat Bottom"
                }
                hasEditableCoordinates() {
                    return !1
                }
                addPoint(e, t) {
                    return t && t.shift() && 2 === this.points().length && this._snapPoint45Degree(e, this.points()[this.points().length - 2]), super.addPoint(e)
                }
                setLastPoint(e, t) {
                    return t && t.shift() && 2 === this.points().length && this._snapPoint45Degree(e, this.points()[this.points().length - 2]), super.setLastPoint(e)
                }
                setPoint(e, t, i) {
                    if (i && i.shift() && 1 === e) {
                        this._snapPoint45Degree(t, this.points()[0])
                    }
                    if (2 === e) this._points[1].index = t.index;
                    else if (3 === e) return this._points[0].index = t.index, this._points[2].price = t.price, void this.normalizePoints();
                    super.setPoint(e, t)
                }
                getPoint(e) {
                    return e < 3 ? super.getPoint(e) : 3 === e ? {
                        index: this._points[0].index,
                        price: this._points[2].price
                    } : void 0
                }
                canHasAlert() {
                    return !0
                }
                _getAlertPlots() {
                    var e = this._points[0],
                        t = this._points[1],
                        i = [];
                    e.index <= t.index ? (i.push(e), i.push(t)) : (i.push(t), i.push(e));
                    var r = this._points[2];
                    r.time = t.time, r.index = t.index;
                    var n, s, o, l, a = {
                            price: r.price,
                            time: e.time,
                            index: e.index
                        },
                        c = [];
                    r.index <= a.index ? (c.push(r), c.push(a)) : (c.push(a), c.push(r)), i[0].price > c[0].price ? (n = i, s = c) : c[0].price > i[0].price || c[1].price > i[1].price ? (n = c, s = i) : (n = i, s = c);
                    var h = this.properties().extendLeft.value(),
                        u = this.properties().extendRight.value();
                    return e.index <= t.index ? (o = h, l = u) : (o = u, l = h), [this._linePointsToAlertPlot(n, "Upper", o, l), this._linePointsToAlertPlot(s, "Lower", h, l)]
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 963480))).GeneralTrendFiguresDefinitionsViewModel
                }
                static createProperties(e) {
                    var t = new n("linetoolflatbottom", e);
                    return this._configureProperties(t), t
                }
            }
            s.version = 1, t.LineToolFlatBottom = s
        },
        678823: (e, t, i) => {
            i.d(t, {
                createPropertiesObject: () => l
            });
            var r = i(758337),
                n = i(955130);

            function s(e, t, i) {
                var n;
                for (const s of Object.keys(null !== (n = e.levels) && void 0 !== n ? n : {}))
                    if (e.levels[s] && (0, r.isSameType)(e.levels[s], t.typecheck())) {
                        let r = t.tpl();
                        i.names.forEach(((i, n) => {
                            r = t.fill("" + n, i, e.levels[s], r)
                        })), e.levels[s] = r
                    }
                return e
            }
            class o extends n.LevelsProperty {
                constructor(e, t) {
                    super(e, t, !1, {
                        names: ["width", "color", "visible"]
                    }, s)
                }
            }

            function l(e, t) {
                return new o(e, t)
            }
        },
        380950: (e, t, i) => {
            i.d(t, {
                LineToolGannComplex: () => u
            });
            var r = i(86441),
                n = i(650151),
                s = i(769448),
                o = i(892142),
                l = i(283186),
                a = i(678823),
                c = i(241056),
                h = i(623331);
            class u extends o.LineDataSource {
                constructor(e, t, r, n) {
                    super(e, t || u.createProperties(), r, n), this.version = 2, this._scaleRatioFormatter = new s.LimitedPrecisionNumericFormatter(7), this.version = 2, Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 17129)).then((({
                        GannComplexPaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this.model())])
                    }));
                    const o = this.properties();
                    this._adjustScaleRatio(o), o.subscribe(this, this._adjustScaleRatio), o.childs().scaleRatio.subscribe(this, this._correctFirstPoint), this._syncStateExclusions = ["scaleRatio"], o.onRestoreFactoryDefaults().subscribe(this, this._handleRestoringFactoryDefaults), this._onTemplateApplying.subscribe(this, this._handleTemplateApplying), this._onTemplateApplied.subscribe(this, this._correctFirstPoint)
                }
                migrateVersion(e, t, i) {
                    1 === e && (this._points.length >= this.pointsCount() ? setTimeout((() => this._migratePoint())) : this._timePoint.length >= this.pointsCount() && this._pointAdded.subscribe(this, this._migratePoint))
                }
                destroy() {
                    const e = this.properties();
                    e.unsubscribe(this, this._adjustScaleRatio), e.childs().scaleRatio.unsubscribe(this, this._correctFirstPoint),
                        e.onRestoreFactoryDefaults().unsubscribe(this, this._handleRestoringFactoryDefaults), this._onTemplateApplying.unsubscribe(this, this._handleTemplateApplying), this._onTemplateApplied.unsubscribe(this, this._correctFirstPoint), super.destroy()
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Gann Square"
                }
                addPoint(e, t, i) {
                    this._points.length > 1 && this._points.pop();
                    const r = super.addPoint(e, t, i),
                        s = this.priceScale();
                    return !(0, n.ensureNotNull)(s).isLog() && r && this._correctFirstPoint(), r
                }
                setPoint(e, t, i) {
                    super.setPoint(e, t, i), void 0 !== i && i.shift() ? this._correctPoint(e) : this._correctScaleRatio()
                }
                setLastPoint(e, t) {
                    const i = this.priceScale();
                    return (0, n.ensureNotNull)(i).isLog() || (this._points[1] = e, this._correctPoint(1)), super.setLastPoint(e, t)
                }
                isReversed() {
                    return this.properties().childs().reverse.value()
                }
                levelsCount() {
                    return this.properties().childs().levels.childCount()
                }
                levels() {
                    const e = [],
                        t = this.properties().childs(),
                        i = t.levels.childCount();
                    for (let r = 0; r < i; r++) {
                        const i = t.levels.childs()[r].childs();
                        e.push({
                            index: r,
                            visible: i.visible.value(),
                            color: i.color.value(),
                            width: i.width.value()
                        })
                    }
                    return e
                }
                fanLinesCount() {
                    return this.properties().childs().fanlines.childCount()
                }
                fanLines() {
                    const e = [],
                        t = this.properties().childs(),
                        i = t.fanlines.childCount();
                    for (let r = 0; r < i; r++) {
                        const i = t.fanlines.childs()[r].childs();
                        e.push({
                            index: r,
                            visible: i.visible.value(),
                            x: i.x.value(),
                            y: i.y.value(),
                            color: i.color.value(),
                            width: i.width.value()
                        })
                    }
                    return e
                }
                arcsCount() {
                    return this.properties().childs().arcs.childCount()
                }
                arcs() {
                    const e = [],
                        t = this.properties().childs(),
                        i = t.arcs.childCount();
                    for (let r = 0; r < i; r++) {
                        const i = t.arcs.childs()[r].childs();
                        e.push({
                            index: r,
                            visible: i.visible.value(),
                            x: i.x.value(),
                            y: i.y.value(),
                            color: i.color.value(),
                            width: i.width.value()
                        })
                    }
                    return e
                }
                arcsBackgroundTransparency() {
                    return this.properties().childs().arcsBackground.childs().transparency.value()
                }
                isArcsBackgroundFilled() {
                    return this.properties().childs().arcsBackground.childs().fillBackground.value()
                }
                isLabelsVisible() {
                    return this.properties().childs().showLabels.value()
                }
                getLabelsStyle() {
                    const e = this.properties().childs(),
                        {
                            fontSize: t,
                            bold: i,
                            italic: r
                        } = e.labelsStyle.childs(),
                        n = e.levels.childCount();
                    return {
                        textColor: e.levels.childs()[n - 1].childs().color.value(),
                        font: h.CHART_FONT_FAMILY,
                        fontSize: t.value(),
                        bold: i.value(),
                        italic: r.value()
                    }
                }
                getScaleRatioStep() {
                    return 1e-7
                }
                getScaleRatioFormatter() {
                    return this._scaleRatioFormatter
                }
                getPriceDiff() {
                    const e = this.points();
                    if (e.length < 2) return null;
                    const [t, i] = e;
                    return i.price - t.price
                }
                getIndexDiff() {
                    const e = this.points();
                    if (e.length < 2) return null;
                    const [t, i] = e;
                    return i.index - t.index
                }
                getScaleRatio() {
                    const e = this.getPriceDiff(),
                        t = this.getIndexDiff();
                    return null !== e && null !== t && 0 !== t ? Math.abs(e / t) : null
                }
                static createProperties(e) {
                    const t = (0, a.createPropertiesObject)("linetoolganncomplex", e);
                    return this._configureProperties(t), t
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 435250)).then((e => e.GannComplexAndFixedDefinitionsViewModel))
                }
                static _configureProperties(e) {
                    super._configureProperties(e),
                        e.addExclusion("scaleRatio");
                    const t = [],
                        i = [],
                        r = e.childs(); {
                        const e = r.levels.childCount();
                        for (let n = 0; n < e; n++) {
                            const e = r.levels.childs()[n].childs();
                            t.push(e.width), i.push(e.color)
                        }
                    } {
                        const e = r.fanlines.childCount();
                        for (let n = 0; n < e; n++) {
                            const e = r.fanlines.childs()[n].childs();
                            t.push(e.width), i.push(e.color)
                        }
                    } {
                        const e = r.arcs.childCount();
                        for (let n = 0; n < e; n++) {
                            const e = r.arcs.childs()[n].childs();
                            t.push(e.width), i.push(e.color)
                        }
                    }
                    e.addChild("linesColors", new c.LineToolColorsProperty(i)), e.addChild("linesWidths", new c.LineToolWidthsProperty(t))
                }
                _correctScaleRatio() {
                    const e = this.properties().childs(),
                        t = this.getScaleRatio();
                    e.scaleRatio.setValue(t)
                }
                _getAdjustedScaleRatio() {
                    const e = this.model().mainSeries().priceScale(),
                        t = this.model().timeScale();
                    return (0, l.scaleRatio)(t, e)
                }
                _adjustScaleRatio(e) {
                    const t = e.scaleRatio.value();
                    "" !== t && null !== t || e.scaleRatio.setValue(this._getAdjustedScaleRatio())
                }
                _correctPoint(e) {
                    if (this._points.length < 2) return;
                    const t = this.getIndexDiff();
                    if (null === t) return;
                    const i = this.properties().childs().scaleRatio.value();
                    if (null !== i) {
                        const r = this._points[e],
                            n = 0 === e ? this._points[1] : this._points[0],
                            s = r.price - n.price > 0,
                            o = r.index - n.index > 0;
                        let l = s && !o || !s && o ? -1 : 1;
                        0 === e && (l = -l), r.price = n.price + l * t * i, this._pointChanged.fire(e)
                    }
                    this.normalizePoints()
                }
                _correctFirstPoint() {
                    this._correctPoint(this.isReversed() ? 0 : 1)
                }
                _handleRestoringFactoryDefaults() {
                    this.properties().childs().scaleRatio.setValue(this._getAdjustedScaleRatio())
                }
                _handleTemplateApplying(e) {
                    "" === e.scaleRatio && (e.scaleRatio = this._getAdjustedScaleRatio())
                }
                _migratePoint() {
                    if (this.points().length < this.pointsCount()) return;
                    const e = this._getScreenPoints();
                    if (null === e) return;
                    const t = (0, n.ensureNotNull)(this.screenPointToPoint(e[1]));
                    this.setPoint(1, t), this._pointAdded.unsubscribe(this, this._migratePoint)
                }
                _getScreenPoints() {
                    const e = this._calcAngle();
                    if (null === e) return null;
                    let [t, i] = this.points();
                    this.isReversed() && ([t, i] = [i, t]);
                    const s = (0, n.ensureNotNull)(this.pointToScreenPoint(t)),
                        o = (0, n.ensureNotNull)(this.pointToScreenPoint(i)),
                        l = Math.sqrt(Math.pow(s.x - o.x, 2) + Math.pow(s.y - o.y, 2)),
                        a = new r.Point(Math.cos(e), -Math.sin(e)),
                        c = a.normalized(),
                        h = c.x < 0 ? -1 : 1,
                        u = c.y < 0 ? -1 : 1;
                    return [s.addScaled(a, l), s.add(new r.Point(5 * l * h, 5 * l * u))]
                }
                _calcAngle() {
                    const [e, t] = this.points(), i = (0, n.ensureNotNull)(this.pointToScreenPoint(e));
                    let r = (0, n.ensureNotNull)(this.pointToScreenPoint(t)).subtract(i);
                    if (r.length() > 0) {
                        r = r.normalized();
                        let e = Math.acos(r.x);
                        return r.y > 0 && (e = -e), e
                    }
                    return null
                }
            }
        },
        145383: (e, t, i) => {
            var r = i(683890).TranslatedString,
                n = i(892142).LineDataSource,
                s = i(955130).LevelsProperty,
                o = i(241056),
                l = o.LineToolWidthsProperty,
                a = o.LineToolColorsProperty,
                c = new r("erase level line", i(777754).t(null, void 0, i(812962)));
            class h extends n {
                constructor(e, t, r, n) {
                    super(e, t || h.createProperties(), r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 612393)).then((({
                        GannFanPaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                levelsCount() {
                    return h.LevelsCount
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Gann Fan"
                }
                processErase(e, t) {
                    var i = "level" + t,
                        r = this.properties()[i].visible;
                    e.setProperty(r, !1, c)
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 658580))).GannFanDefinitionsViewModel
                }
                static createProperties(e) {
                    var t = new s("linetoolgannfan", e, !1, {
                        range: [1, 9]
                    });
                    return this._configureProperties(t), t
                }
                static _configureProperties(e) {
                    super._configureProperties(e);
                    for (var t = [], i = [], r = 1; r <= this.LevelsCount; r++) t.push(e.child("level" + r).child("linewidth")), i.push(e.child("level" + r).child("color"));
                    e.addChild("linesColors", new a(i)), e.addChild("linesWidths", new l(t))
                }
            }
            h.LevelsCount = 9, t.LineToolGannFan = h
        },
        420263: (e, t, i) => {
            i.d(t, {
                LineToolGannFixed: () => a
            });
            var r = i(86441),
                n = i(650151),
                s = i(892142),
                o = i(241056),
                l = i(678823);
            class a extends s.LineDataSource {
                constructor(e, t, r, n) {
                    super(e, t || a.createProperties(), r, n), this._constructor = "LineToolGannFixed", Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 5547)).then((({
                        GannFixedPaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this.model())])
                    })), this.properties().childs().reverse.subscribe(this, this._reversePoints)
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Gann Square Fixed"
                }
                axisPoints() {
                    const e = this.points(),
                        t = this.getScreenPoints();
                    return e.length < 2 || t.length < 2 ? [] : [e[0], (0, n.ensureNotNull)(this.screenPointToPoint(t[1]))]
                }
                getScreenPoints() {
                    const e = this.points();
                    if (e.length < 2) return [];
                    const t = this._calcAngle();
                    if (null === t) return [];
                    const [i, s] = e, o = (0, n.ensureNotNull)(this.pointToScreenPoint(i)), l = (0, n.ensureNotNull)(this.pointToScreenPoint(s)), a = Math.sqrt(Math.pow(o.x - l.x, 2) + Math.pow(o.y - l.y, 2)), c = new r.Point(Math.cos(t), -Math.sin(t)), h = c.normalized(), u = h.x < 0 ? -1 : 1, d = h.y < 0 ? -1 : 1;
                    return [o.addScaled(c, a), o.add(new r.Point(5 * a * u, 5 * a * d))]
                }
                levelsCount() {
                    return this.properties().childs().levels.childCount()
                }
                levels() {
                    const e = [],
                        t = this.properties().childs(),
                        i = t.levels.childCount();
                    for (let r = 0; r < i; r++) {
                        const i = t.levels.childs()[r].childs();
                        e.push({
                            index: r,
                            visible: i.visible.value(),
                            color: i.color.value(),
                            width: i.width.value()
                        })
                    }
                    return e
                }
                fanLinesCount() {
                    return this.properties().childs().fanlines.childCount()
                }
                fanLines() {
                    const e = [],
                        t = this.properties().childs(),
                        i = t.fanlines.childCount();
                    for (let r = 0; r < i; r++) {
                        const i = t.fanlines.childs()[r].childs();
                        e.push({
                            index: r,
                            visible: i.visible.value(),
                            x: i.x.value(),
                            y: i.y.value(),
                            color: i.color.value(),
                            width: i.width.value()
                        })
                    }
                    return e
                }
                arcsCount() {
                    return this.properties().childs().arcs.childCount()
                }
                arcs() {
                    const e = [],
                        t = this.properties().childs(),
                        i = t.arcs.childCount();
                    for (let r = 0; r < i; r++) {
                        const i = t.arcs.childs()[r].childs();
                        e.push({
                            index: r,
                            visible: i.visible.value(),
                            x: i.x.value(),
                            y: i.y.value(),
                            color: i.color.value(),
                            width: i.width.value()
                        })
                    }
                    return e
                }
                arcsBackgroundTransparency() {
                    return this.properties().childs().arcsBackground.childs().transparency.value()
                }
                isArcsBackgroundFilled() {
                    return this.properties().childs().arcsBackground.childs().fillBackground.value()
                }
                static createProperties(e) {
                    const t = (0, l.createPropertiesObject)("linetoolgannfixed", e);
                    return this._configureProperties(t), t
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 435250)).then((e => e.GannComplexAndFixedDefinitionsViewModel))
                }
                static _configureProperties(e) {
                    super._configureProperties(e);
                    const t = [],
                        i = [],
                        r = e.childs(); {
                        const e = r.levels.childCount();
                        for (let n = 0; n < e; n++) {
                            const e = r.levels.childs()[n].childs();
                            t.push(e.width), i.push(e.color)
                        }
                    } {
                        const e = r.fanlines.childCount();
                        for (let n = 0; n < e; n++) {
                            const e = r.fanlines.childs()[n].childs();
                            t.push(e.width), i.push(e.color)
                        }
                    } {
                        const e = r.arcs.childCount();
                        for (let n = 0; n < e; n++) {
                            const e = r.arcs.childs()[n].childs();
                            t.push(e.width), i.push(e.color)
                        }
                    }
                    e.addChild("linesColors", new o.LineToolColorsProperty(i)), e.addChild("linesWidths", new o.LineToolWidthsProperty(t))
                }
                _calcAngle() {
                    const e = this.points();
                    if (e.length < 2) return null;
                    const [t, i] = e, r = this.pointToScreenPoint(t), n = this.pointToScreenPoint(i);
                    if (null === r || null === n) return null;
                    let s = n.subtract(r);
                    if (s.length() <= 0) return null;
                    s = s.normalized();
                    let o = Math.acos(s.x);
                    return s.y > 0 && (o = -o), o
                }
                _reversePoints() {
                    const [e, t] = this._points;
                    this._points[0] = t, this._points[1] = e, this.normalizePoints(), this.restart()
                }
            }
        },
        743102: (e, t, i) => {
            var r = i(892142).LineDataSource,
                n = i(955130).LevelsProperty,
                s = i(241056).LineToolColorsProperty,
                o = [4.5, 9, 11.25, 18, 22.5, 36, 45],
                l = function() {
                    for (var e = [], t = o.length - 1, i = 1, r = 0, n = 0; n < 1e10;) n = o[r] * i, e.push(Math.round(n)), e.push(Math.ceil(-n)), r === t - 1 && (i *= 10), r = (r + 1) % t;
                    return e.sort((function(e, t) {
                        return e < t ? -1 : e > t ? 1 : 0
                    })), e
                }();
            class a extends r {
                constructor(e, t, r, n) {
                    super(e, t || a.createProperties(), r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.t.bind(i, 883213, 19)).then((({
                        GannSquarePaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                hLevelsCount() {
                    return a.HLevelsCount
                }
                vLevelsCount() {
                    return a.VLevelsCount
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Gann Box"
                }
                _alignPriceOnPattern(e, t) {
                    var i = Math.round(1e6 * (e.price - t.price)) / 1e6;
                    if (0 === i) return t.price;
                    for (var r = o[0], n = o[o.length - 1], s = 1, l = Math.abs(i); l < r * s || n * s < l;) l < r * s ? s *= .1 : n * s < l && (s *= 10);
                    for (var a = n * s, c = o.length - 2; c >= 0 && !(o[c] * s < l); --c) a = o[c] * s;
                    return e.price = t.price + (i >= 0 ? a : -a), e
                }
                _alignTimeOnPattern(e, t) {
                    var i = e.index - t.index;
                    if (0 === i) return 0;
                    for (var r = l.length - 2; r >= 0 && !(l[r] < i); --r);
                    return r += i > 0 ? 1 : 0, e.index = t.index + l[r], e
                }
                _alignPointsFixedIncrement(e, t) {
                    return this._alignTimeOnPattern(e, t), this._alignPriceOnPattern(e, t), e
                }
                _preparePoint(e, t) {
                    return t && t.shift() && 0 !== this._points.length && this._alignPointsFixedIncrement(e, this._points[0]), super._preparePoint(e, t)
                }
                getPoint(e) {
                    if (e < 2) return super.getPoint(e);
                    var t = null;
                    switch (e) {
                        case 2:
                        case 3:
                            var i = this.points();
                            if (i.length === this.pointsCount()) {
                                var r = i[0].index,
                                    n = i[1].price;
                                3 === e && (r = i[1].index, n = i[0].price), t = {
                                    index: r,
                                    price: n
                                }
                            }
                    }
                    return t
                }
                setPoint(e, t, i) {
                    if (i && i.shift()) {
                        var r = e % 2 == 0 ? this._points[1] : this._points[0];
                        this._alignPointsFixedIncrement(t, r)
                    }
                    switch (e) {
                        case 2:
                            this._points[0].index = t.index, this._points[1].price = t.price;
                            break;
                        case 3:
                            this._points[1].index = t.index, this._points[0].price = t.price;
                            break;
                        default:
                            super.setPoint(e, t, i)
                    }
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 991344))).GannSquareDefinitionsViewModel
                }
                static createProperties(e) {
                    var t = new n("linetoolgannsquare", e, !1, {
                        range: [1, 7],
                        prefixes: ["h", "v"],
                        names: ["coeff", "color", "visible"]
                    });
                    return this._configureProperties(t), t
                }
                static _configureProperties(e) {
                    super._configureProperties(e);
                    for (var t = [e.child("color"), e.child("fans").child("color")], i = 1; i <= this.HLevelsCount; i++) t.push(e.child("hlevel" + i).child("color"));
                    for (i = 1; i <= this.VLevelsCount; i++) t.push(e.child("vlevel" + i).child("color"));
                    e.addChild("linesColors", new s(t)), e.addExclusion("linesColors")
                }
            }
            a.HLevelsCount = 7, a.VLevelsCount = 7, t.LineToolGannSquare = a
        },
        244561: (e, t, i) => {
            i.d(t, {
                LineToolGhostFeed: () => c
            });
            var r = i(87225),
                n = i(892142),
                s = i(650151),
                o = i(758337);
            class l {
                constructor(e, t, i) {
                    this._source = e, this._segmentIndex = t, this._bars = null != i ? i : []
                }
                setBars(e) {
                    this._bars = e
                }
                clone(e) {
                    return new l(e, this._segmentIndex, (0, o.clone)(this._bars))
                }
                generate() {
                    this._bars = [];
                    const e = this._source.points(),
                        t = e[this._segmentIndex],
                        i = e[this._segmentIndex + 1];
                    if (!t || !i || t.index === i.index) return;
                    const r = this._segmentIndex ? t.index + 1 : t.index,
                        n = Math.sign(i.index - t.index);
                    for (let e = r; e !== i.index; e += n) this._bars.push(this._createBar())
                }
                bars() {
                    return this._bars
                }
                setSize(e) {
                    if (e < this._bars.length) this._bars.splice(e, this._bars.length - e);
                    else
                        for (; this._bars.length < e;) this._bars.push(this._createBar())
                }
                _createBar() {
                    const e = this._source.properties().averageHL.value(),
                        t = this._source.properties().variance.value() / 100,
                        i = (0, s.ensureNotNull)(this._source.ownerSource()).base();
                    let r = Math.random();
                    const n = e * (1 - 2 * r) * t;
                    r = Math.random();
                    const o = e * (1 + (.5 - r) * t),
                        l = n - o / 2,
                        a = l + o;
                    return {
                        o: (l + Math.random() * o) / i,
                        h: a / i,
                        l: l / i,
                        c: (l + Math.random() * o) / i
                    }
                }
            }
            var a = i(404822);
            class c extends n.LineDataSource {
                constructor(e, t, r, n) {
                    const s = t || c.createProperties();
                    if (super(e, s, r, n), this._segments = [], this._finished = !1, this._segmentsPixelsWhileMoving = null, !r) {
                        const e = Math.round(this._calculateATR());
                        s.childs().averageHL.setValue(e)
                    }
                    s.childs().averageHL.listeners().subscribe(this, this._regenerate), s.childs().variance.listeners().subscribe(this, this._regenerate), this._currentAverageHL = s.childs().averageHL.value(), this._currentVariance = s.childs().variance.value(), this._currentInterval = e.mainSeries().interval(), this.properties().onRestoreFactoryDefaults().subscribe(this, this._handleRestoringFactoryDefaults), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 118739)).then((t => {
                        this._setPaneViews([new t.GhostFeedPaneView(this, e)])
                    }))
                }
                isSynchronizable() {
                    return !1
                }
                destroy() {
                    this.properties().onRestoreFactoryDefaults().unsubscribe(this, this._handleRestoringFactoryDefaults), super.destroy()
                }
                propertiesChanged() {
                    super.propertiesChanged(), this._currentAverageHL === this.properties().childs().averageHL.value() && this._currentVariance === this.properties().childs().variance.value() || this._regenerate()
                }
                pointsCount() {
                    return -1
                }
                name() {
                    return "Ghost Feed"
                }
                segmentBars(e) {
                    return this._segments[e].bars()
                }
                segments() {
                    return this._segments
                }
                generateBars(e) {
                    this._segments.length <= e && this._segments.push(new l(this, e)), this._segments[e].generate()
                }
                addPoint(e, t, i) {
                    if (this._finished) return !0;
                    if (this._points.length > 0) {
                        const i = this._points[this._points.length - 1];
                        if (!(null == t ? void 0 : t.isApiEvent()) && i.index === e.index) {
                            this._lastPoint = null, this.normalizePoints(), this.createServerPoints();
                            for (let e = 0; e < this._points.length; e++) this._createPointProperty(e);
                            return !0
                        }
                    }
                    const r = super.addPoint(e, t, i);
                    return this._points.length > 1 && this.generateBars(this._points.length - 2), r
                }
                finish() {
                    this._finished = !0, this._lastPoint = null, this.normalizePoints(), this.createServerPoints()
                }
                setPoint(e, t, i, r) {
                    if (super.setPoint(e, t, i), e > 0) {
                        const i = this.points()[e - 1],
                            r = t.index - i.index;
                        this._segments[e - 1].setSize(Math.abs(r))
                    }
                    if (e < this.points().length - 1) {
                        const i = this.points()[e + 1].index - t.index;
                        this._segments[e].setSize(Math.abs(i))
                    }
                }
                state(e) {
                    const t = super.state(e);
                    return t.segments = this._segments.map((e => ({
                        bars: [...e.bars()]
                    }))), t
                }
                restoreData(e) {
                    e.segments && (this._segments = e.segments.map(((e, t) => new l(this, t, e.bars)))), this._currentAverageHL = this.properties().childs().averageHL.value(), this._currentVariance = this.properties().childs().variance.value()
                }
                onData(e) {
                    super.onData(e);
                    if (!this.pointsProperty().childs().points.child("0"))
                        for (let e = 0; e < this._points.length; e++) this._createPointProperty(e);
                    this._currentInterval !== this._model.mainSeries().interval() && (this._regenerate(), this._currentInterval = this._model.mainSeries().interval())
                }
                cloneData(e) {
                    this._segments = e._segments.map((e => e.clone(this)))
                }
                startMoving(e, t, i, r) {
                    super.startMoving(e, t, i, r), this._preparePixelSegments()
                }
                move(e, t, i, r) {
                    super.move(e, t, i, r), this._restoreSegmentsFromPixels()
                }
                endMoving(e, t) {
                    return this._segmentsPixelsWhileMoving = null, super.endMoving(e, t)
                }
                static createProperties(e) {
                    const t = new r.DefaultProperty("linetoolghostfeed", e);
                    return this._configureProperties(t), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 745777))).GhostFeedDefinitionsViewModel
                }
                _handleRestoringFactoryDefaults() {
                    const e = Math.round(this._calculateATR());
                    this.properties().childs().averageHL.setValue(e)
                }
                _regenerate() {
                    this._currentAverageHL = this.properties().childs().averageHL.value(), this._currentVariance = this.properties().childs().variance.value(), this._segments.forEach((e => e.generate())), this.updateAllViews((0, a.sourceChangeEvent)(this.id())), this._model.updateSource(this)
                }
                _calculateATR() {
                    const e = this._model.mainSeries(),
                        t = [];
                    e.bars().each(((e, i) => {
                        const r = i[2],
                            n = i[3];
                        return null != r && null != n && t.push(r - n), !1
                    }));
                    let i = 0 === t.length ? 0 : t.reduce(((e, t) => e + t), 0) / t.length;
                    return i *= e.base(), i
                }
                _preparePixelSegments() {
                    var e, t;
                    const i = this.priceScale(),
                        r = null !== (t = null === (e = this.ownerSource()) || void 0 === e ? void 0 : e.firstValue()) && void 0 !== t ? t : null;
                    if (null === i || null === r || i.isEmpty() || !i.isLog()) return;
                    const n = this.points();
                    this._segmentsPixelsWhileMoving = this._segments.map(((e, t) => {
                        const s = n[t].price,
                            o = n[t + 1].price,
                            l = i.priceToCoordinate(s, r),
                            a = (i.priceToCoordinate(o, r) - l) / (e.bars().length - 1);
                        return {
                            bars: e.bars().map(((e, t) => {
                                const n = l + t * a,
                                    s = i.coordinateToPrice(n, r);
                                return {
                                    open: i.priceToCoordinate(s + e.o, r) - n,
                                    high: i.priceToCoordinate(s + e.h, r) - n,
                                    low: i.priceToCoordinate(s + e.l, r) - n,
                                    close: i.priceToCoordinate(s + e.c, r) - n
                                }
                            }))
                        }
                    }))
                }
                _restoreSegmentsFromPixels() {
                    var e, t;
                    const i = this.priceScale(),
                        r = null !== (t = null === (e = this.ownerSource()) || void 0 === e ? void 0 : e.firstValue()) && void 0 !== t ? t : null;
                    if (null === i || null === r || null === this._segmentsPixelsWhileMoving) return;
                    const n = this.points();
                    this._segmentsPixelsWhileMoving.forEach(((e, t) => {
                        const s = this._segments[t],
                            o = n[t].price,
                            l = n[t + 1].price,
                            a = i.priceToCoordinate(o, r),
                            c = (i.priceToCoordinate(l, r) - a) / (e.bars.length - 1),
                            h = s.bars().map(((t, n) => {
                                const s = e.bars[n],
                                    o = a + n * c,
                                    l = i.coordinateToPrice(o, r);
                                return { ...t,
                                    o: i.coordinateToPrice(s.open + o, r) - l,
                                    h: i.coordinateToPrice(s.high + o, r) - l,
                                    l: i.coordinateToPrice(s.low + o, r) - l,
                                    c: i.coordinateToPrice(s.close + o, r) - l
                                }
                            }));
                        s.setBars(h)
                    }))
                }
            }
        },
        479336: (e, t, i) => {
            i.d(t, {
                LineToolHeadAndShoulders: () => o
            });
            var r = i(87225),
                n = i(892142),
                s = i(241056);
            class o extends n.LineDataSource {
                constructor(e, t, r, n) {
                    const s = t || o.createProperties();
                    super(e, s, r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 501797)).then((t => {
                        this._setPaneViews([new t.LineToolHeadAndShouldersPaneView(this, e)])
                    }))
                }
                pointsCount() {
                    return 7
                }
                name() {
                    return "Head and Shoulders"
                }
                static createProperties(e) {
                    const t = new r.DefaultProperty("linetoolheadandshoulders", e);
                    return this._configureProperties(t), t
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 331777)).then((e => e.PatternWithBackgroundDefinitionViewModel))
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.addChild("linesColors", new s.LineToolColorsProperty([e.childs().color])), e.addChild("textsColors", new s.LineToolColorsProperty([e.childs().textcolor]))
                }
            }
        },
        957884: (e, t, i) => {
            i.d(t, {
                LineToolHighlighter: () => s
            });
            var r = i(87225),
                n = i(802186);
            class s extends n.LineToolBrushBase {
                constructor(e, t, i, r) {
                    super(e, t || s.createProperties(), i, r), this._loadPaneViews(e)
                }
                smooth() {
                    return this.properties().childs().smooth.value()
                }
                name() {
                    return "Highlighter"
                }
                static createProperties(e) {
                    const t = new r.DefaultProperty("linetoolhighlighter", e);
                    return this._configureProperties(t), t
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 32007)).then((e => e.HighlighterDefinitionsViewModel))
                }
                _loadPaneViews(e) {
                    Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 43510)).then((t => {
                        this._setPaneViews([new t.HighlighterPaneView(this, e)])
                    }))
                }
            }
        },
        174527: (e, t, i) => {
            i.d(t, {
                LineToolHorzLinePriceAxisView: () => s
            });
            var r = i(841404),
                n = i(114123);
            class s extends r.PriceAxisView {
                constructor(e) {
                    super(), this._source = e
                }
                _updateRendererData(e, t, i) {
                    e.visible = !1;
                    const r = this._source.points(),
                        s = this._source.priceScale();
                    if (0 === r.length || null === s || s.isEmpty()) return;
                    const o = r[0];
                    if (!isFinite(o.price)) return;
                    const l = this._source.ownerSource(),
                        a = null !== l ? l.firstValue() : null;
                    if (null === a) return;
                    const c = (0,
                        n.resetTransparency)(this._source.properties().linecolor.value());
                    i.background = c, i.textColor = this.generateTextColor(c), i.coordinate = s.priceToCoordinate(o.price, a), e.text = s.formatPrice(o.price, a), e.visible = !0
                }
            }
        },
        514620: (e, t, i) => {
            i.d(t, {
                LineToolHorzLine: () => a
            });
            var r = i(40210),
                n = i.n(r),
                s = i(87225),
                o = i(892142),
                l = i(174527);
            class a extends o.LineDataSource {
                constructor(e, t, r, n) {
                    super(e, t || a.createProperties(), r, n), this._priceAxisView = new l.LineToolHorzLinePriceAxisView(this), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 903350)).then((({
                        HorzLinePaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                state(e) {
                    const t = super.state(e);
                    return t.points && 0 !== t.points.length && (t.points[0].offset = 0), t
                }
                pointsCount() {
                    return 1
                }
                name() {
                    return "Horizontal Line"
                }
                priceAxisViews(e, t) {
                    return this.isSourceHidden() || t !== this.priceScale() || !this._model.selection().isSelected(this) && !this.properties().childs().showPrice.value() || e !== this._model.paneForSource(this) ? null : [this._priceAxisView]
                }
                timeAxisViews() {
                    return null
                }
                timeAxisPoints() {
                    return []
                }
                updateAllViews(e) {
                    super.updateAllViews(e), this._priceAxisView.update(e)
                }
                canHasAlert() {
                    return !0
                }
                template() {
                    const e = super.template();
                    return e.text = this.properties().childs().text.value(), e
                }
                denormalizeTimePoints() {
                    this._points = [], this._timePoint.length > 0 && this._points.push({
                        price: this._timePoint[0].price,
                        index: 0
                    })
                }
                clearData() {
                    const e = this._points;
                    super.clearData(), this._points = e
                }
                static createProperties(e) {
                    const t = new s.DefaultProperty("linetoolhorzline", e);
                    return this._configureProperties(t), t
                }
                _getAlertPlots() {
                    return [this.points()[0].price]
                }
                _pointsForPointset() {
                    return []
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 564872)).then((e => e.HorizontalLineDefinitionsViewModel))
                }
                _applyTemplateImpl(e) {
                    super._applyTemplateImpl(e), this.properties().childs().text.setValue(e.text || "")
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.hasChild("text") || e.addChild("text", new(n())("")), e.addExclusion("text")
                }
            }
        },
        699334: (e, t, i) => {
            i.d(t, {
                LineToolHorzRay: () => a
            });
            var r = i(87225),
                n = i(40210),
                s = i.n(n),
                o = i(174527),
                l = i(892142);
            class a extends l.LineDataSource {
                constructor(e, t, r, n) {
                    super(e, null != t ? t : a.createProperties(), r, n), this._priceAxisView = new o.LineToolHorzLinePriceAxisView(this), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 322558)).then((({
                        HorzRayPaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                pointsCount() {
                    return 1
                }
                name() {
                    return "Horizontal Ray"
                }
                priceAxisViews(e, t) {
                    return this.isSourceHidden() || t !== this.priceScale() || !this._model.selection().isSelected(this) && !this.properties().childs().showPrice.value() || e !== this._model.paneForSource(this) ? null : [this._priceAxisView]
                }
                updateAllViews(e) {
                    super.updateAllViews(e), this._priceAxisView.update(e)
                }
                template() {
                    const e = super.template();
                    return e.text = this.properties().childs().text.value(), e
                }
                canHasAlert() {
                    return !0
                }
                static createProperties(e) {
                    const t = new r.DefaultProperty("linetoolhorzray", e);
                    return this._configureProperties(t), t
                }
                _getAlertPlots() {
                    const e = this._points[0],
                        t = {
                            index: e.index + 1,
                            price: e.price
                        },
                        i = this._linePointsToAlertPlot([e, t], null, !1, !0);
                    return null !== i ? [i] : []
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 912278))).HorizontalRayDefinitionsViewModel
                }
                _applyTemplateImpl(e) {
                    super._applyTemplateImpl(e), this.properties().childs().text.setValue(e.text || "")
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.hasChild("text") || e.addChild("text", new(s())("")), e.addExclusion("text")
                }
            }
        },
        200330: (e, t, i) => {
            i.d(t, {
                LineToolIcon: () => l
            });
            var r = i(87225),
                n = i(241056),
                s = i(985695);
            const o = (0, i(272001).getLogger)("Chart.LineToolIcon");
            class l extends s.LineToolSvgIconBase {
                constructor(e, t, i, r) {
                    super(e, t || l.createProperties(), i, r), this.version = 1, this._loadViews()
                }
                name() {
                    return "Icon"
                }
                applyTemplate(e) {
                    delete e.icon, super.applyTemplate(e)
                }
                static createProperties(e) {
                    const t = new r.DefaultProperty("linetoolicon", e);
                    return this._configureProperties(t), t
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 874683)).then((e => e.IconsDefinitionsViewModel))
                }
                async _loadViews() {
                    const [{
                        getSvgContentForCharCode: e,
                        getSvgRenderer: t
                    }, {
                        IconPaneView: r
                    }, {
                        svgRenderer: n
                    }] = await Promise.all([i.e(27987).then(i.bind(i, 397859)), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 367849)), i.e(72616).then(i.bind(i, 905153))]);
                    if (!this._isDestroyed) {
                        const i = this._properties.childs().icon.value();
                        this._svgContent = e(i), this._onIconChanged.fire();
                        const s = t(n, i);
                        null === s && o.logWarn(`Couldn't create svg renderer for icon ${i}`), this._setPaneViews([new r(this, this._model, s)])
                    }
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.addChild("backgroundsColors", new n.LineToolColorsProperty([e.childs().color]))
                }
            }
        },
        446e3: (e, t, i) => {
            i.d(t, {
                isIdeaUrl: () => h,
                isIdeaAuthorProfileImageUrl: () => u,
                createIdeaLineToolByUrl: () => p
            });
            var r = i(650151),
                n = i(62802),
                s = i(66974),
                o = i(777491),
                l = i(809350),
                a = i(700950);
            const c = /^\/chart\/.+?\/([0-9a-zA-Z]{8})(-[-\w]+)?\/?$/;

            function h(e) {
                try {
                    const t = new URL(e);
                    return ((e => "https:" === e.protocol && e.hostname.endsWith(".tradingview.com"))(t) || (e => !(0, s.isProd)() && e.hostname.endsWith(window.location.hostname))(t)) && c.test(t.pathname)
                } catch (e) {
                    return !1
                }
            }

            function u(e) {
                if (e.startsWith("data:image/svg+xml,")) return !0;
                try {
                    const t = new URL(e),
                        i = new URL(window.AWS_S3_CDN);
                    return t.protocol === i.protocol && t.hostname === i.hostname && t.pathname.includes("/userpics/")
                } catch (e) {
                    return !1
                }
            }
            async function d(e) {
                const t = new URL(`/api/v1/ideas/${i=e,(0,r.ensureNotNull)(c.exec(new URL(i).pathname))[1]}/`, location.href);
                var i;
                return fetch(t.toString()).then((e => {
                    if (!e.ok) throw new Error(`Error processing idea: ${e.statusText}`);
                    return e.json()
                }))
            }

            function p(e, t, i = !1) {
                return d(e).then((e => {
                    const s = function(e, t) {
                            var i;
                            const n = (0, r.ensureDefined)(e.user);
                            let s;
                            n.avatars && u(n.avatars.small) && (s = n.avatars.small.startsWith("data:image/svg+xml,") ? n.avatars.small : `${n.avatars.small.replace(window.AWS_S3_CDN,"")}?resetCache=true`);
                            const o = {
                                avatarUrl: s,
                                badges: null === (i = n.badges) || void 0 === i ? void 0 : i.map((e => e.name)),
                                username: n.username
                            };
                            return {
                                createdAt: e.created_timestamp,
                                direction: e.direction,
                                name: (0, l.clean)(e.name, !0),
                                author: o,
                                uuid: e.uuid
                            }
                        }(e),
                        c = {
                            price: 0,
                            time_t: s.createdAt,
                            offset: 0
                        },
                        h = t.mainSeries(),
                        d = (0, r.ensureNotNull)(t.model().paneForSource(h)),
                        p = d.newLineToolZOrder(!0),
                        _ = {
                            type: "drawing",
                            source: {
                                id: (0, o.randomHashN)(6),
                                zorder: p,
                                type: "LineToolIdea",
                                position: 50,
                                state: {
                                    interval: "1",
                                    ...a.LineToolIdea.createProperties().state()
                                },
                                ideaData: s,
                                symbol: h.symbol(),
                                ownerSource: h.id(),
                                points: [c]
                            },
                            geometry: [],
                            modelId: t.model().id()
                        },
                        P = t.pasteLineTool(d, _, !0, !0);
                    return i && n.setValue("hint.pasteIdea", !0, {
                        forceFlush: !0
                    }), P.pointAdded().subscribe(null, (() => t.scrollToLineTool(P)), !0), P
                }))
            }
        },
        700950: (e, t, i) => {
            i.d(t, {
                LineToolIdea: () => w
            });
            var r = i(87225),
                n = i(892142),
                s = i(777754),
                o = i(62802),
                l = i(345848),
                a = i(272001),
                c = i(846778),
                h = i(906125),
                u = i(480071),
                d = i(727775),
                p = i(446e3);
            const _ = (0, a.getLogger)("Chart.IdeaDialog"),
                P = s.t(null, void 0, i(241246)),
                v = s.t(null, void 0, i(467466));
            let g = null;

            function m(e) {
                "LineToolIdea" === e ? (window.is_authenticated || (0, u.resetToCursor)(!0), window.runOrSignIn((() => {
                    u.tool.setValue("LineToolIdea"), g = (0, d.showCustomUrlEventDialog)({
                        onConfirm: f,
                        onClose: () => {
                            g = null, "LineToolIdea" === u.tool.value() && (0, u.resetToCursor)(!0)
                        },
                        title: P,
                        placeholderText: v
                    }), (0, l.trackEvent)("Idea", "Open idea dialog")
                }), {
                    source: "Change drawing tool state"
                })) : null !== g && g.then((e => e()))
            }

            function f(e) {
                const t = (0, h.chartWidgetCollectionService)();
                if (null === t) return;
                if (!(0, p.isIdeaUrl)(e)) return void _.logWarn(`Invalid idea url: ${e}`);
                const i = !Boolean(o.getBool("hint.pasteIdea")),
                    r = t.activeChartWidget.value();
                (0, p.createIdeaLineToolByUrl)(e, r.model()).then((() => {
                    i && (0, c.showPasteLineToolHint)(t.getContainer(), "hint.pasteIdea")
                }))
            }
            var C = i(40210),
                y = i.n(C),
                T = i(812080);
            class b extends T.CustomEventItem {
                constructor(e, t) {
                    super(t), this._data = e
                }
                ideaData() {
                    return this._data
                }
                index() {
                    return this._source.eventTimePointIndex()
                }
                time() {
                    return this._data.createdAt
                }
                avatar() {
                    var e;
                    return null === (e = this._data.author) || void 0 === e ? void 0 : e.avatarUrl
                }
            }
            class w extends T.LineToolCustomUrlEvent {
                constructor(e, t, r, n) {
                    super(e, t || w.createProperties(), r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 367484)).then((t => {
                        this._setPaneViews([new t.IdeaPaneView(this, e)])
                    }))
                }
                name() {
                    return "Idea"
                }
                state(e) {
                    const t = super.state(e);
                    return this._item && (t.ideaData = this._item.ideaData()), e && (t.eventTimePointIndex = this._eventTimePointIndex), t
                }
                restoreData(e) {
                    e.ideaData && (this._item = new b(e.ideaData, this)), void 0 !== e.eventTimePointIndex && (this._eventTimePointIndex = e.eventTimePointIndex)
                }
                static createProperties(e) {
                    const t = new r.DefaultProperty("linetoolIdea", e);
                    return this._configureProperties(t), t.hasChild("position") || t.addChild("position", new(y())(50)), t.addExclusion("position"), t
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 290627)).then((e => e.IdeaDefinitionsViewModel))
                }
                static _configureProperties(e) {
                    n.LineDataSource._configureProperties(e)
                }
            }(0, u.runOnDrawingStateReady)((() => {
                u.tool.subscribe(m)
            }))
        },
        780264: (e, t, i) => {
            i.d(t, {
                LineToolImage: () => w,
                buildAbsoluteUserImageUrl: () => b
            });
            var r = i(650151),
                n = i(86441),
                s = i(272001),
                o = i(87225),
                l = i(40210),
                a = i.n(l),
                c = i(892142),
                h = i(404822),
                u = i(62802),
                d = i(345848),
                p = i(846778),
                _ = i(906125),
                P = i(480071);
            async function v(e, t) {
                return async function(e) {
                    return (await Promise.all([i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(91901), i.e(36037), i.e(1428), i.e(1011), i.e(52701), i.e(67177), i.e(93272), i.e(98681), i.e(33345), i.e(60832), i.e(75514), i.e(39964), i.e(745), i.e(77038)]).then(i.bind(i, 48650))).renderImageDialog(e)
                }({
                    onConfirm: e,
                    onClose: t
                })
            }
            let g = null;

            function m(e) {
                if ("LineToolImage" !== e) return null == g || g.then((e => e())), void(g = null);
                window.is_authenticated || (0, P.resetToCursor)(!0), window.runOrSignIn((() => {
                    P.tool.setValue("LineToolImage"), g = v(f, (() => {
                        null == g || g.then((e => e())), g = null, "LineToolImage" === P.tool.value() && (0, P.resetToCursor)(!0)
                    })), (0, d.trackEvent)("Image", "Open image dialog")
                }), {
                    source: "Change drawing tool state"
                })
            }

            function f(e) {
                const t = (0, _.chartWidgetCollectionService)();
                if (null === t) return;
                const i = !Boolean(u.getBool("hint.pasteImage")),
                    n = t.activeChartWidget.value();
                n.model().pasteImageAsLineTool(e.url, e.blobUrl, (0, r.ensureNotNull)(n.model().model().paneForSource(n.model().mainSeries())), e.transparency), i && (0, p.showPasteLineToolHint)(t.getContainer(), "hint.pasteImage")
            }
            const C = (0, s.getLogger)("Chart.LineToolImage");

            function y(e) {
                return e.toLowerCase().startsWith("blob:")
            }
            const T = window.AWS_BBS3_DOMAIN;

            function b(e) {
                if (y(e)) return e;
                const t = new URL(e, T),
                    i = new URL(t.pathname, T);
                if ("/" === i.pathname) return null;
                const r = i.toString();
                return t.toString() !== r ? null : r
            }
            class w extends c.LineDataSource {
                constructor(e, t, r, n) {
                    var s;
                    super(e, t || w.createProperties(), r, n), this._image = null, this._originPoint = 4;
                    const o = this.properties().childs().url;
                    this._absoluteUserImageUrl = new(a())(null !== (s = b(this.properties().childs().url.value())) && void 0 !== s ? s : ""), this._absoluteUserImageUrl.subscribe(this, (e => {
                        const t = e.value();
                        if (y(t)) return;
                        const i = b(t);
                        null !== i && o.setValue(new URL(i).pathname)
                    })), o.subscribe(this, (() => {
                        const e = b(o.value());
                        null !== e && this._absoluteUserImageUrl.setValue(e)
                    })), this._loadImage(), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 765599)).then((({
                        ImagePaneView: t
                    }) => {
                        this._setPaneViews([new t(this, e)])
                    })), this.properties().childs().url.subscribe(this, (() => {
                        this._loadImage()
                    }))
                }
                absoluteUserImageUrl() {
                    return this._absoluteUserImageUrl
                }
                cssWidth() {
                    return this.properties().childs().cssWidth.value()
                }
                cssHeight() {
                    return this.properties().childs().cssHeight.value()
                }
                angle() {
                    return this.properties().childs().angle.value()
                }
                originPoint() {
                    return this._originPoint
                }
                dOffsetX() {
                    return this._dOffsetX || 0
                }
                pointsCount() {
                    return 1
                }
                name() {
                    return "Image"
                }
                image() {
                    return this._image
                }
                setBlobImageUrl(e) {
                    this._image || (this._createImage(e), this._blobUrl = e)
                }
                getChangePointForSync(e) {
                    return null
                }
                hasEditableCoordinates() {
                    return !1
                }
                pointToScreenPoint({
                    index: e,
                    price: t
                }, i = 0) {
                    const s = this._model.timeScale(),
                        o = (0,
                            r.ensureNotNull)(this.priceScale()),
                        l = (0, r.ensureNotNull)((0, r.ensureNotNull)(this.ownerSource()).firstValue()),
                        a = s.indexToCoordinate(e) + i,
                        c = o.priceToCoordinate(t, l);
                    return new n.Point(a, c)
                }
                setPoint(e, t, i) {
                    if (null === this._image) return;
                    const {
                        width: n,
                        height: s
                    } = this._image, o = (0, r.ensureNotNull)(this.pointToScreenPoint(t)), l = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[0], this.dOffsetX())), a = Math.max(Math.abs(l.x - o.x) / n, Math.abs(l.y - o.y) / s), c = Math.round(n * a), h = Math.round(s * a), u = this.properties().childs();
                    u.cssWidth.setValue(c), u.cssHeight.setValue(h), this.propertiesChanged()
                }
                startChanging(e, t) {
                    super.startChanging(e, t), this._changeOriginPoint(w._oppositePoints[e])
                }
                endChanging(e, t) {
                    return this._changeOriginPoint(4), super.endChanging(e, t)
                }
                getPoint() {
                    return null
                }
                syncLineStyleState() {
                    const e = super.syncLineStyleState();
                    return !e.url && this._blobUrl && (e.blobUrl = this._blobUrl), e
                }
                restoreExternalState(e) {
                    const {
                        blobUrl: t,
                        ...i
                    } = e;
                    t && this.setBlobImageUrl(t), super.restoreExternalState(i)
                }
                isSavedInChart() {
                    return super.isSavedInChart() && "" !== this.absoluteUserImageUrl().value()
                }
                static createProperties(e) {
                    const t = new o.DefaultProperty("linetoolimage", e);
                    return this._configureProperties(t), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 209146))).ImageDefinitionsViewModel
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.hasChild("url") || e.addChild("url", new(a())("")), e.addExclusion("url"), e.addExclusion("cssWidth"), e.addExclusion("cssHeight"), e.addExclusion("angle")
                }
                _loadImage() {
                    const e = this.properties(),
                        t = (0, r.ensureDefined)(e.child("url")).value();
                    t && this._createImage(t)
                }
                _changeOriginPoint(e) {
                    const t = this.originPoint(),
                        i = 4 === t ? w._correctOriginDirections[e] : w._correctOriginDirections[w._oppositePoints[t]],
                        s = this.properties().childs().cssWidth.value() / 2,
                        o = this.properties().childs().cssHeight.value() / 2,
                        [l] = this._points,
                        a = (0, r.ensureNotNull)(this.pointToScreenPoint(l)),
                        c = new n.Point(a.x + s * i[0], a.y + o * i[1]),
                        h = (0, r.ensureNotNull)(this.screenPointToPoint(c));
                    this._dOffsetX = 4 === t ? c.x - (0, r.ensureNotNull)(this.pointToScreenPoint(h)).x : void 0, l.index = h.index, l.price = h.price, this._originPoint = e
                }
                _createImage(e) {
                    var t;
                    const i = y(e),
                        n = b(e);
                    if (null === n) return void C.logWarn(`Invalid image URL: ${e}`);
                    if (n === (null === (t = this._image) || void 0 === t ? void 0 : t.src)) return;
                    const s = document.createElement("img");
                    s.crossOrigin = "anonymous", s.src = n, s.addEventListener("load", (() => {
                            this._image = s;
                            const e = this._model,
                                t = this.properties().childs();
                            if (!i) {
                                const e = new URL(n).pathname;
                                t.url.setValue(e), this._blobUrl = void 0
                            }
                            if (t.cssWidth.value() && t.cssHeight.value()) return void this._model.updateSource(this);
                            const o = e.timeScale().width() / 4,
                                l = (0, r.ensureNotNull)(this.priceScale()).height() / 4,
                                a = s.naturalWidth,
                                c = s.naturalHeight,
                                u = Math.min(1, o / a),
                                d = Math.min(1, l / c),
                                p = Math.min(u, d),
                                _ = Math.round(p * a),
                                P = Math.round(p * c);
                            t.cssWidth.setValue(_), t.cssHeight.setValue(P), this.updateAllViews((0, h.sourceChangeEvent)(this.id())), this._model.updateSource(this)
                        })),
                        s.addEventListener("error", (() => {
                            this.model().removeSource(this)
                        }))
                }
            }
            w._correctOriginDirections = [
                [-1, -1],
                [1, -1],
                [-1, 1],
                [1, 1],
                [0, 0]
            ], w._oppositePoints = [3, 2, 1, 0, 4], (0, P.runOnDrawingStateReady)((() => {
                P.tool.subscribe(m)
            }))
        },
        10753: (e, t, i) => {
            i.d(t, {
                LineToolInfoLine: () => s
            });
            var r = i(87225),
                n = i(732747);
            class s extends n.LineToolTrendLine {
                constructor(e, t, i, r) {
                    super(e, t || s.createProperties(), i, r)
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Info Line"
                }
                static createProperties(e) {
                    const t = new r.DefaultProperty("linetoolinfoline", e);
                    return this._configureProperties(t), t
                }
            }
        },
        874572: (e, t, i) => {
            var r = i(955130).LevelsProperty,
                n = i(822296).LineToolPitchfork;
            class s extends n {
                constructor(e, t, i, r) {
                    super(e, t || s.createProperties(), i, r)
                }
                name() {
                    return "Inside Pitchfork"
                }
                static createProperties(e) {
                    var t = new r("linetoolinsidepitchfork", e, !1, {
                        range: [0, 8]
                    });
                    return this._configureProperties(t), t
                }
            }
            t.LineToolInsidePitchfork = s
        },
        414805: (e, t, i) => {
            var r;
            i.r(t), i.d(t, {
                isMtpPredictorToolName: () => o,
                isStudyLineToolName: () => l,
                isLineToolName: () => a,
                isLineDrawnWithPressedButton: () => c,
                isLineToolFinishRequiredWhenCreatedByApi: () => h,
                isLineToolDrawWithoutPoints: () => u,
                isImageToolName: () => d,
                isTextToolName: () => p
            });
            var n = i(272124);
            const s = new Set(["LineStudyMtpAnalysis", "LineStudyMtpDecisionPoint", "LineStudyMtpRiskReward", "LineStudyMtpElliotWaveMain", "LineStudyMtpElliotWaveMajor", "LineStudyMtpElliotWaveMinor", "LineStudyMtpDownWave1OrA", "LineStudyMtpDownWave2OrB", "LineStudyMtpDownWave3", "LineStudyMtpDownWave4", "LineStudyMtpDownWave5", "LineStudyMtpDownWaveC", "LineStudyMtpUpWave1OrA", "LineStudyMtpUpWave2OrB", "LineStudyMtpUpWave3", "LineStudyMtpUpWave4", "LineStudyMtpUpWave5", "LineStudyMtpUpWaveC"]);

            function o(e) {
                return s.has(e)
            }

            function l(e) {
                let t = "LineToolRegressionTrend" === e || "LineToolVbPFixed" === e || "LineToolFixedRangeVolumeProfile" === e;
                return t || (t = "LineToolAnchoredVWAP" === e || o(e)), t
            }

            function a(e) {
                return e in (r || (r = i.t(n, 2))) || l(e)
            }

            function c(e) {
                return "LineToolBrush" === e || "LineToolHighlighter" === e
            }

            function h(e) {
                return c(e) || "LineToolPath" === e || "LineToolPolyline" === e || "LineToolGhostFeed" === e
            }

            function u(e) {
                return "LineToolTweet" === e || "LineToolIdea" === e || "LineToolImage" === e
            }

            function d(e) {
                return "LineToolImage" === e
            }

            function p(e) {
                switch (e) {
                    case "LineToolBalloon":
                    case "LineToolComment":
                    case "LineToolText":
                    case "LineToolTextAbsolute":
                    case "LineToolCallout":
                    case "LineToolNote":
                    case "LineToolNoteAbsolute":
                    case "LineToolSignpost":
                        return !0
                }
                return !1
            }
        },
        493100: (e, t, i) => {
            i.d(t, {
                LineDataSourcePointIndexProperty: () => s
            });
            var r = i(40210),
                n = i.n(r);
            class s extends(n()) {
                constructor(e, t) {
                    super(), this._lineSource = e, this._pointIndex = t
                }
                value() {
                    return this._lineSource.points()[this._pointIndex].index
                }
                setValue(e) {
                    const t = this._lineSource.points()[this._pointIndex];
                    t.index = e, this._lineSource.startChanging(this._pointIndex, t), this._setPointImpl(t), this._lineSource.model().updateSource(this._lineSource), this._listeners.fire(this);
                    const i = this._lineSource.endChanging(!0, !1);
                    this._lineSource.syncMultichartState(i)
                }
                _setPointImpl(e) {
                    this._lineSource.setPoint(this._pointIndex, e)
                }
            }
        },
        861765: (e, t, i) => {
            i.d(t, {
                LineToolPriceAxisView: () => o
            });
            var r = i(650151),
                n = i(841404),
                s = i(114123);
            class o extends n.PriceAxisView {
                constructor(e, t) {
                    super(), this._active = !1, this._source = e, this._data = t, this._properties = e.model().properties().childs().scalesProperties
                }
                setActive(e) {
                    this._active = e
                }
                _updateRendererData(e, t, i) {
                    e.visible = !1;
                    const r = this._source.model();
                    if (!r.timeScale() || r.timeScale().isEmpty()) return;
                    const n = this._source.priceScale();
                    if (null === n || n.isEmpty()) return;
                    if (!r.selection().isSelected(this._source) && !this._source.isForcedDrawPriceAxisLabel()) return;
                    if (null === r.timeScale().visibleBarsStrictRange()) return;
                    const o = this._source.priceAxisPoints(),
                        l = this._data.pointIndex;
                    if (o.length <= l) return;
                    const a = o[l];
                    if (!isFinite(a.price)) return;
                    const c = this._source.ownerSource(),
                        h = null !== c ? c.firstValue() : null;
                    if (null === h) return;
                    let u = this._data.backgroundPropertyGetter ? this._data.backgroundPropertyGetter() : null;
                    null === u && (u = this._getBgColor()), i.background = (0, s.resetTransparency)(u), i.borderColor = "#2E84A6", i.textColor = this.generateTextColor(i.background), i.coordinate = n.priceToCoordinate(a.price, h), e.text = this._formatPrice(a.price, h), e.visible = !0
                }
                _getBgColor() {
                    return this._active ? this._properties.childs().axisLineToolLabelBackgroundColorActive.value() : this._properties.childs().axisLineToolLabelBackgroundColorCommon.value()
                }
                _formatPrice(e, t) {
                    return (0, r.ensureNotNull)(this._source.priceScale()).formatPrice(e, t)
                }
            }
        },
        231193: (e, t, i) => {
            i.d(t, {
                LineDataSourceTimeAxisView: () => n
            });
            var r = i(81947);
            class n extends r.TimeAxisView {
                constructor(e, t) {
                    super(e.model()), this._active = !1, this._source = e, this._pointIndex = t, this._properties = e.model().properties().childs().scalesProperties
                }
                setActive(e) {
                    this._active = e
                }
                _getBgColor() {
                    return this._active ? this._properties.childs().axisLineToolLabelBackgroundColorActive.value() : this._properties.childs().axisLineToolLabelBackgroundColorCommon.value()
                }
                _getIndex() {
                    if (!this._model.selection().isSelected(this._source)) return null;
                    const e = this._source.timeAxisPoints();
                    return e.length <= this._pointIndex ? null : e[this._pointIndex].index
                }
                _isVisible() {
                    return !0
                }
            }
        },
        892142: (e, t, i) => {
            i.d(t, {
                LineDataSource: () => W
            });
            var r = i(86441),
                n = i(650151),
                s = i(251954),
                o = i(272001),
                l = i(495046),
                a = i(869403),
                c = i.n(a),
                h = i(835343),
                u = i(930981),
                d = i(190096),
                p = i(844106),
                _ = i(988411),
                P = i.n(_),
                v = i(573651),
                g = i(991826),
                m = i(323017),
                f = i(488792),
                C = i(720444),
                y = i(992001),
                T = i(568450),
                b = i(40210),
                w = i.n(b),
                S = i(480071),
                x = i(282151),
                L = i(450556),
                A = i(758337),
                V = i(404822),
                I = i(354145),
                D = i(493100);
            class M extends(w()) {
                constructor(e, t) {
                    super(), this._lineSource = e, this._pointIndex = t, e.pointAdded().subscribe(this, (e => {
                        this._pointIndex === e && this._listeners.fire(this)
                    })), e.pointChanged().subscribe(this, (e => {
                        this._pointIndex === e && this._listeners.fire(this)
                    }))
                }
                value() {
                    const e = this._lineSource.points()[this._pointIndex].price,
                        t = (0, n.ensureNotNull)(this._lineSource.ownerSource()).formatter();
                    if (t.parse) {
                        const i = t.format(e),
                            r = t.parse(i);
                        return r.res ? r.value : e
                    }
                    return e
                }
                setValue(e) {
                    const t = this._lineSource.points()[this._pointIndex];
                    t.price = parseFloat("" + e), this._lineSource.startChanging(this._pointIndex, t),
                        this._lineSource.setPoint(this._pointIndex, t), this._lineSource.model().updateSource(this._lineSource), this._listeners.fire(this);
                    const i = this._lineSource.endChanging(!0, !1);
                    this._lineSource.syncMultichartState(i)
                }
            }
            var B = i(231193),
                E = i(861765),
                k = i(241056),
                N = i(51782);
            const R = (0, o.getLogger)("Chart.LineDataSource"),
                F = l.enabled("datasource_copypaste");
            class O {
                constructor() {
                    this._states = []
                }
                start(e) {
                    this._states.push(e)
                }
                finish(e) {
                    const t = (0, n.ensureDefined)(this._states.pop());
                    return r = t, (i = e).length !== r.length ? {
                        indexesChanged: !0,
                        pricesChanged: !0
                    } : i.reduce(((e, t, i) => {
                        const n = r[i];
                        return e.indexesChanged = e.indexesChanged || t.index !== n.index, e.pricesChanged = e.pricesChanged || t.price !== n.price, e
                    }), {
                        indexesChanged: !1,
                        pricesChanged: !1
                    });
                    var i, r
                }
                isEmpty() {
                    return 0 === this._states.length
                }
            }
            let z = 0;
            class W extends x.DataSource {
                constructor(e, t, i, r) {
                    if (super(r), this.version = 1, this.toolname = "", this.customization = {
                            forcePriceAxisLabel: !1,
                            disableErasing: !1,
                            disableSave: !1,
                            showInObjectsTree: !0
                        }, this._currentPointsetAndSymbolId = null, this._pointChanged = new(c()), this._pointAdded = new(c()), this._priceAxisViews = [], this._timeAxisViews = [], this._timePoint = [], this._points = [], this._lastPoint = null, this._paneViews = new Map, this._normalizedPointsChanged = new(c()), this._fixedPointsChanged = new(c()), this._changeStatesStack = new O, this._startMovingPoint = null, this._currentMovingPoint = null, this._isActualSymbol = !1, this._isActualInterval = !1, this._isActualCurrency = !1, this._isActualUnit = !1, this._isDestroyed = !1, this._sharingMode = new(P())(0), this._onTemplateApplying = new(c()), this._onTemplateApplied = new(c()), this._syncStateExclusions = [], this._definitionsViewModel = null, this._syncLineStyleMuted = !1, this._onIsActualIntervalChange = new(c()), this._linkKey = new(P())(null), this._serverUpdateTime = null, this._boundCalcIsActualSymbol = this.calcIsActualSymbol.bind(this), this._alertUndoMode = !1, this._model = e, this._properties = t, this._localAndServerAlertsMismatch = !1, this._properties.hasChild("interval") || this._properties.addChild("interval", new(w())(e.mainSeries().interval())), this.calcIsActualSymbol(), this._properties.childs().intervalsVisibilities.listeners().subscribe(this, this.calcIsActualSymbol), this._properties.subscribe(this, (() => this.propertiesChanged())), this._createPointsProperties(), this.pointsCount() > 0)
                        for (let e = 0; e < this.pointsCount(); e++) this._priceAxisViews.push(this.createPriceAxisView(e)), this._timeAxisViews.push(new B.LineDataSourceTimeAxisView(this, e));
                    this._properties.childs().visible.subscribe(this, (e => {
                        const t = !1 === (0, S.hideAllDrawings)().value();
                        e.value() ? e.value() && t && s.emit("drawing_event", this._id, "show") : (this._model.selection().isSelected(this) && this._model.selectionMacro((e => {
                            e.removeSourceFromSelection(this)
                        })), t && s.emit("drawing_event", this._id, "hide")), this._onSourceHiddenMayChange()
                    })), (0, S.hideAllDrawings)().subscribe(this, this._onSourceHiddenMayChange), this._definitionsViewModel = null, this._isDestroyed = !1
                }
                destroy() {
                    this._paneViews.forEach(((e, t) => this._destroyPanePaneViews(t))), this.stop(),
                        null !== this._definitionsViewModel && (this._definitionsViewModel.destroy(), this._definitionsViewModel = null), null !== this._ownerSource && (this._ownerSource.currencyChanged().unsubscribeAll(this), this._ownerSource.unitChanged().unsubscribeAll(this), (0, I.isSymbolSource)(this._ownerSource) && (this._ownerSource.symbolResolved().subscribe(this, this._boundCalcIsActualSymbol), this._ownerSource.isActingAsSymbolSource().unsubscribe(this._boundCalcIsActualSymbol))), this.ownerSourceChanged().unsubscribeAll(this), (0, S.hideAllDrawings)().unsubscribeAll(this), this.deleteAlert(), this._isDestroyed = !0
                }
                priceScale() {
                    return this._ownerSource ? this._ownerSource.priceScale() : null
                }
                createPriceAxisView(e) {
                    return new E.LineToolPriceAxisView(this, {
                        pointIndex: e
                    })
                }
                model() {
                    return this._model
                }
                symbol() {
                    return this._properties.childs().symbol.value()
                }
                linkKey() {
                    return this._linkKey
                }
                serverUpdateTime() {
                    return this._serverUpdateTime
                }
                setServerUpdateTime(e) {
                    this._serverUpdateTime = e
                }
                boundToSymbol() {
                    return !0
                }
                isAvailableInFloatingWidget() {
                    return !0
                }
                points() {
                    const e = [];
                    for (let t = 0; t < this._points.length; t++) {
                        const i = this._points[t];
                        e.push({
                            index: i.index,
                            price: i.price,
                            time: i.time
                        })
                    }
                    return this._lastPoint && e.push(this._correctLastPoint(this._lastPoint)), !this.isFixed() && this._currentMovingPoint && this._startMovingPoint && this._correctPoints(e), e
                }
                timeAxisPoints() {
                    return this.points()
                }
                priceAxisPoints() {
                    return this.points()
                }
                fixedPoint() {
                    var e;
                    let t;
                    const i = this.priceScale();
                    if (this._positionPercents && null !== i && !i.isEmpty()) {
                        const e = this._positionPercents,
                            n = this._model.timeScale().width() * e.x,
                            s = i.height() * e.y;
                        t = new r.Point(n, s)
                    } else void 0 !== this._fixedPoint && (t = null === (e = this._fixedPoint) || void 0 === e ? void 0 : e.clone());
                    if (this._currentMovingPoint && this._startMovingPoint && void 0 !== t) {
                        const e = this._correctFixedPoint(t);
                        e.didCorrect && (t = e.point)
                    }
                    return t
                }
                positionPercents() {
                    return this._positionPercents
                }
                normalizedPoints() {
                    return this._timePoint
                }
                normalizedPointsChanged() {
                    return this._normalizedPointsChanged
                }
                fixedPointChanged() {
                    return this._fixedPointsChanged
                }
                geometry() {
                    const e = (0, n.ensureNotNull)(this.priceScale());
                    return this.points().map((t => {
                        const i = (0, n.ensureNotNull)(this.pointToScreenPoint(t)),
                            s = i.x / this._model.timeScale().width(),
                            o = i.y / e.height();
                        return new r.Point(s, o)
                    }))
                }
                widthsProperty() {
                    var e;
                    return null !== (e = this._properties.childs().linesWidths) && void 0 !== e ? e : null
                }
                lineColorsProperty() {
                    var e;
                    return null !== (e = this._properties.childs().linesColors) && void 0 !== e ? e : null
                }
                backgroundColorsProperty() {
                    var e;
                    return null !== (e = this._properties.childs().backgroundsColors) && void 0 !== e ? e : null
                }
                textColorsProperty() {
                    var e;
                    return null !== (e = this._properties.childs().textsColors) && void 0 !== e ? e : null
                }
                pointsProperty() {
                    return this._pointsProperty
                }
                hasEditableCoordinates() {
                    return !0
                }
                startMoving(e, t, i, r) {
                    this.isFixed() && this.restoreFixedPoint(), this._startMovingPoint = e
                }
                move(e, t, i, r) {
                    if (i && (i.shiftOnly() || i.modShift()))
                        if (this.isFixed()) {
                            const t = this._alignScreenPointHorizontallyOrVertically((0, n.ensureDefined)(e.screen));
                            this._currentMovingPoint = {
                                screen: t
                            }
                        } else {
                            const t = this._alignPointHorizontallyOrVertically((0, n.ensureDefined)(e.logical)),
                                i = (0, n.ensureNotNull)(this.pointToScreenPoint(t));
                            this._currentMovingPoint = {
                                logical: t,
                                screen: i
                            }
                        }
                    else this._currentMovingPoint = e;
                    this.updateAllViews((0, V.sourceChangeEvent)(this.id()))
                }
                endMoving(e, t, i) {
                    let r = !1,
                        o = !1;
                    if (this._currentMovingPoint && this._startMovingPoint) {
                        if (this.isFixed()) {
                            const e = this._correctFixedPoint((0, n.ensureDefined)(this._fixedPoint));
                            e.didCorrect && (this._fixedPoint = e.point, this._fixedPointsChanged.fire())
                        } else {
                            const e = (0, n.ensureDefined)(this._currentMovingPoint.logical),
                                t = (0, n.ensureDefined)(this._startMovingPoint.logical);
                            r = e.index !== t.index, o = e.price !== t.price;
                            if (this._correctPoints(this._points, i)) {
                                s.emit("drawing_event", this._id, "move"), s.emit("drawing_event", this._id, "points_changed");
                                for (let e = 0; e < this._points.length; e++) this._pointChanged.fire(e)
                            }
                        }
                        this._startMovingPoint = null, this._currentMovingPoint = null
                    }
                    const l = {
                        indexesChanged: r,
                        pricesChanged: o
                    };
                    return this.isFixed() ? (this.calcPositionPercents(), this.updateAllViews((0, V.sourceChangeEvent)(this.id())), l) : (this.updateAllViews((0, V.sourceChangeEvent)(this.id())), r && !e ? (this._properties.childs().interval.setValue(this._model.mainSeries().interval()), this.normalizePoints(), this.createServerPoints()) : (this._copyPricesWithoutNormalization(), this._normalizedPointsChanged.fire()), t || !o && !r || this.synchronizeAlert(!this._alertUndoMode), l)
                }
                startMovingPoint() {
                    return this._startMovingPoint ? { ...this._startMovingPoint
                    } : null
                }
                currentMovingPoint() {
                    return this._currentMovingPoint ? { ...this._currentMovingPoint
                    } : null
                }
                startChanging(e, t) {
                    void 0 !== e && void 0 !== t && (e < this._priceAxisViews.length && this._priceAxisViews[e].setActive(!0), e < this._timeAxisViews.length && this._timeAxisViews[e].setActive(!0)), this._changeStatesStack.start(this.points())
                }
                endChanging(e, t, i) {
                    const r = this._changeStatesStack.finish(this.points());
                    r.indexesChanged && this._changeStatesStack.isEmpty() ? (this._properties.childs().interval.setValue(this._model.mainSeries().interval()), this.normalizePoints(), t || this.createServerPoints()) : (this._copyPricesWithoutNormalization(), this._normalizedPointsChanged.fire()), s.emit("drawing_event", this._id, "points_changed");
                    for (let e = 0; e < this._priceAxisViews.length; e++) this._priceAxisViews[e].setActive(!1);
                    for (let e = 0; e < this._timeAxisViews.length; e++) this._timeAxisViews[e].setActive(!1);
                    return i || this.synchronizeAlert(!e), r
                }
                setPoint(e, t, i, r) {
                    if (i && i.shift() && this._snapTo45DegreesAvailable()) {
                        const i = 0 === e ? 1 : e - 1;
                        this._snapPoint45Degree(t, this.points()[i])
                    }
                    this._setPoint(e, t)
                }
                getPoint(e) {
                    return this.points()[e] || null
                }
                alignCrossHairToAnchor(e) {
                    return !0
                }
                setLastPoint(e, t) {
                    return this._lastPoint = this._preparePoint(e, t), this.updateAllViews((0, V.sourceChangeEvent)(this.id())), this._lastPoint
                }
                lastPoint() {
                    return this._lastPoint
                }
                getChangePointForSync(e) {
                    return this.getPoint(e)
                }
                setPoints(e) {
                    this._points = e
                }
                isForcedDrawPriceAxisLabel() {
                    return this.customization.forcePriceAxisLabel
                }
                clearData() {
                    this._points = []
                }
                denormalizeTimePoints() {
                    let e = [];
                    for (let t = 0; t < this._timePoint.length; t++) {
                        const i = this._model.timeScale().denormalizeTimePoint(this._timePoint[t]);
                        if (void 0 === i) {
                            e = [];
                            break
                        }
                        e.push({
                            index: i,
                            price: this._timePoint[t].price
                        })
                    }
                    e.length > 0 && (this._points = e)
                }
                restorePoints(e, t, i) {
                    const r = this._timePoint.length > 0 && !(0, A.deepEquals)(this._timePoint, e)[0];
                    this._timePoint = (0, h.deepCopy)(e), this._points = t, i || this.denormalizeTimePoints(), r && this._normalizedPointsChanged.fire()
                }
                restorePositionPercents(e) {
                    this._positionPercents = e
                }
                calcIsActualSymbol() {
                    const e = this.ownerSource();
                    if (null === e) this._isActualSymbol = !1;
                    else {
                        const t = (0, n.ensureNotNull)(e.symbolSource());
                        this._migrateSymbolProperty();
                        const i = this._properties.childs().symbol,
                            r = i.value();
                        if (this._isActualSymbol = t.symbolSameAsCurrent(r), this._isActualSymbol) {
                            const e = t.symbol();
                            (0, y.areEqualSymbols)(r, e) || (R.logWarn('Possible drawing "migrating" detected from "' + r + '" to "' + e + '"'), R.logWarn("Series symbolInfo: " + JSON.stringify(t.symbolInfo())), R.logWarn(`${(new Error).stack}`)), i.setValue(e)
                        }
                    }
                    this.calcIsActualInterval(), this.calcIsActualCurrency(), this.calcIsActualUnit(), this._onSourceHiddenMayChange()
                }
                calcIsActualCurrency() {
                    const e = this.ownerSource();
                    if (null === e) return void(this._isActualCurrency = !1);
                    let t = this._properties.childs().currencyId.value();
                    if (null !== t) {
                        const i = e.symbolSource();
                        "pct" === t && (this._properties.childs().currencyId.setValue(null), t = null), this._isActualCurrency = t === (0, C.symbolCurrency)(i.symbolInfo(), void 0, !0)
                    } else {
                        const t = (0, n.ensureNotNull)(e.symbolSource()).symbolInfo();
                        this._isActualCurrency = null !== t && (0, C.symbolCurrency)(t) === (0, C.symbolOriginalCurrency)(t)
                    }
                    this._onSourceHiddenMayChange()
                }
                calcIsActualUnit() {
                    const e = this.ownerSource();
                    if (null === e) return void(this._isActualUnit = !1);
                    const t = this._properties.childs().unitId.value();
                    if (null !== t) this._isActualUnit = t === (0, n.ensureNotNull)(e.symbolSource()).unit();
                    else {
                        const t = (0, n.ensureNotNull)(e.symbolSource()).symbolInfo(),
                            i = this._model.unitConversionEnabled();
                        this._isActualUnit = null !== t && (0, C.symbolUnit)(t, i) === (0, C.symbolOriginalUnit)(t, i)
                    }
                    this._onSourceHiddenMayChange()
                }
                calcIsActualInterval() {
                    const e = this._isActualInterval,
                        t = this._properties,
                        i = this._model.mainSeries();
                    this._isActualInterval = (0, m.isActualInterval)(T.Interval.parse(i.interval()), t.childs().intervalsVisibilities), !this._isActualInterval && this._model.selection().isSelected(this) && this._model.selectionMacro((e => e.removeSourceFromSelection(this))), this._isActualInterval !== e && this._onIsActualIntervalChange.fire(), this._onSourceHiddenMayChange()
                }
                paneViews(e) {
                    if (this.isSourceHidden()) return null;
                    const t = this._getPaneViews(this.isMultiPaneAvailable() ? e : void 0);
                    if (null === t) return null;
                    if (1 === t.length) return [t[0]];
                    const i = [];
                    for (let e = t.length - 1; e >= 0; --e) i.push(t[e]);
                    return i
                }
                priceAxisViews(e, t) {
                    if (t !== this.priceScale() || this.isSourceHidden()) return null;
                    if (this._model.lineBeingEdited() === this) {
                        const e = this._model.linePointBeingEdited();
                        if (null !== e && e < this._priceAxisViews.length) {
                            const t = this._priceAxisViews.slice(),
                                i = t[e];
                            return t.splice(e, 1), t.push(i), t
                        }
                        return this._priceAxisViews
                    }
                    return this._priceAxisViews
                }
                timeAxisViews() {
                    if (this.isSourceHidden()) return null;
                    if (this._model.lineBeingEdited() === this) {
                        const e = this._model.linePointBeingEdited();
                        if (null !== e && e < this._timeAxisViews.length) {
                            const t = this._timeAxisViews.slice(),
                                i = t[e];
                            return t.splice(e, 1), t.push(i), t
                        }
                        return this._timeAxisViews
                    }
                    return this._timeAxisViews
                }
                isSavedInChart() {
                    return !this.customization.disableSave
                }
                isSavedInStudyTemplates() {
                    return !1
                }
                setSavingInChartEnabled(e) {
                    this.customization.disableSave = !e
                }
                shouldBeRemovedOnDeselect() {
                    return !1
                }
                getOrderTemplate() {
                    return null
                }
                getSourceIcon() {
                    return {
                        type: "loadSvg",
                        svgId: "linetool." + this.toolname
                    }
                }
                alertId() {
                    return this._alertId
                }
                setAlert(e, t) {
                    const i = t && t.sync;
                    return this.canHasAlert() ? (this._alertId = e, this.hasAlert.setValue(!0), this.getAlert().then((e => {
                        const t = this._model.selection().isSelected(this);
                        return e ? (this._removeAlertSubscriptions(), this._addAlertSubscriptions(e), e.setSelected(t), this._onAlertData(e), e) : (R.logError("Failed to get alert, alert will not be saved with drawing in chart"), Promise.reject("got_no_alert"))
                    })).then((() => {
                        const t = this.linkKey().value();
                        null === t || i || (0, S.changeLineStyle)({
                            linkKey: t,
                            model: this._model,
                            state: {},
                            alertId: e
                        })
                    })).catch((t => {
                        this._removeAlertSubscriptions(), "not_exists" === t ? (0, u.getChartAlertsFacade)().then((t => {
                            t.removeAlertFromAllChartsSilently(this.id(), e)
                        })) : R.logError("Getting alert or Saving chart failed: " + t)
                    }))) : Promise.reject("Line data source can not has alert")
                }
                editAlert(e) {
                    this.hasAlert.value() && (0, u.getChartAlertsFacade)().then((t => {
                        t.openEditDialog((0, n.ensureDefined)(this._alertId), {
                            actionSource: e,
                            error: e => {
                                "not_exists" === e && this.removeAlert()
                            }
                        })
                    }))
                }
                getAlert() {
                    return new Promise((async (e, t) => {
                        (await (0, u.getChartAlertsFacade)()).getAlert((0, n.ensureDefined)(this._alertId), {
                            success: e,
                            error: t
                        })
                    }))
                }
                getAlertSync() {
                    var e;
                    if (!this._alertId) return null;
                    const t = (0, u.getChartAlertsFacadeIfCreatedBefore)();
                    return null === t ? null : null !== (e = t.getAlertSync(this._alertId)) && void 0 !== e ? e : null
                }
                synchronizeAlert(e) {
                    this.hasAlert.value() && setTimeout((() => {
                        this._isDestroyed || this._synchronizeAlert(e)
                    }), 0)
                }
                syncAlert(e) {
                    this.hasAlert.value() || this.setAlert(e, {
                        sync: !0
                    })
                }
                stateForAlert() {
                    if (!this.canHasAlert()) return null;
                    const e = { ...this.state(),
                            id: this.idForAlert(),
                            uniqueId: this.idForAlert(),
                            title: this.translatedType(),
                            interval: this._model.mainSeries().interval()
                        },
                        t = this._getAlertPlots();
                    return t && t.length > 0 && (e.plots = t), e
                }
                getAlertIsActive() {
                    if (!this._alertId) return !1;
                    const e = this.getAlertSync();
                    return Boolean(e && e.isActive())
                }
                detachAlert() {
                    this._removeAlertSubscriptions(), this.hasAlert.setValue(!1), this._alertId = void 0
                }
                removeAlert() {
                    this._alertId = void 0, this.hasAlert.setValue(!1), this._removeAlertSubscriptions()
                }
                deleteAlert() {
                    if (!this.hasAlert.value() || void 0 === this._alertId) return;
                    const e = (0, u.getChartAlertsFacadeIfCreatedBefore)();
                    e && e.deleteAlert(this._alertId), this.removeAlert()
                }
                areLocalAndServerAlertsMismatch() {
                    return this._localAndServerAlertsMismatch
                }
                showInObjectTree() {
                    return this.customization.showInObjectsTree
                }
                setShowInObjectsTreeEnabled(e) {
                    this.customization.showInObjectsTree = e
                }
                start() {
                    this.createServerPoints()
                }
                processHibernate() {
                    this.isSourceHidden() ? this.isStarted() && this.stop() : this.isStarted() || this.start()
                }
                onData(e) {
                    "pointset_error" !== e.method ? e.params.customId === this._currentPointsetIdWithPrefix() && this._onPointsetUpdated(e.params.plots) : R.logError(`Error getting pointset: ${e.params[0]} ${e.params[1]}`)
                }
                isBeingEdited() {
                    return this === this._model.lineBeingEdited()
                }
                isActualSymbol() {
                    return this._isActualSymbol
                }
                isActualCurrency() {
                    return this._isActualCurrency
                }
                isActualInterval() {
                    return this._isActualInterval
                }
                isActualUnit() {
                    return this._isActualUnit
                }
                onIsActualIntervalChange() {
                    return this._onIsActualIntervalChange
                }
                setOwnerSource(e) {
                    null !== this._ownerSource && (this._ownerSource.currencyChanged().unsubscribeAll(this), this._ownerSource.unitChanged().unsubscribeAll(this)), null !== this._ownerSource && (0, I.isSymbolSource)(this._ownerSource) && (this._ownerSource.symbolResolved().unsubscribe(this, this._boundCalcIsActualSymbol), this._ownerSource.isActingAsSymbolSource().unsubscribe(this._boundCalcIsActualSymbol)), super.setOwnerSource(e), e && (this.setPriceScale(e.priceScale()), e.currencyChanged().subscribe(this, this.calcIsActualCurrency), e.unitChanged().subscribe(this, this.calcIsActualUnit), this.calcIsActualSymbol(), this._migrateZOrder()), (0, I.isSymbolSource)(e) && (e.symbolResolved().subscribe(this, this._boundCalcIsActualSymbol), e.isActingAsSymbolSource().subscribe(this._boundCalcIsActualSymbol))
                }
                dataAndViewsReady() {
                    return this._paneViews.size > 0
                }
                pointAdded() {
                    return this._pointAdded
                }
                pointChanged() {
                    return this._pointChanged
                }
                pointToScreenPoint(e) {
                    var t;
                    const i = this._model.timeScale(),
                        n = this.priceScale(),
                        s = null === (t = this.ownerSource()) || void 0 === t ? void 0 : t.firstValue();
                    if (!n || n.isEmpty() || i.isEmpty() || null == s) return null;
                    const o = i.indexToCoordinate(e.index),
                        l = n.priceToCoordinate(e.price, s);
                    return new r.Point(o, l)
                }
                screenPointToPoint(e) {
                    var t;
                    const i = this.priceScale(),
                        r = null === (t = this.ownerSource()) || void 0 === t ? void 0 : t.firstValue();
                    if (null == r || !isFinite(r) || null === i) return null;
                    const n = this._model.timeScale().coordinateToIndex(e.x);
                    return {
                        price: i.coordinateToPrice(e.y, r),
                        index: n
                    }
                }
                calcMiddlePoint(e, t) {
                    return new r.Point((e.x + t.x) / 2, (e.y + t.y) / 2)
                }
                addPoint(e, t, i) {
                    const r = this._preparePoint(e, t);
                    return this._addPointIntenal(r, t, i)
                }
                addFixedPoint(e) {
                    return this._fixedPoint = e, this.calcPositionPercents(), !0
                }
                calcPositionPercents() {
                    const e = this.priceScale();
                    if (!e || e.isEmpty() || void 0 === this._fixedPoint) return;
                    const t = this._fixedPoint.x / this._model.timeScale().width(),
                        i = this._fixedPoint.y / e.height();
                    return this._positionPercents = {
                        x: t,
                        y: i
                    }, this._positionPercents
                }
                restoreFixedPoint() {
                    this._fixedPoint = this.fixedPoint()
                }
                getPointByPosition(e, t, i, r) {
                    return [t, i, r][e]
                }
                propertiesChanged(e) {
                    this.calcIsActualInterval(), this.updateAllViewsAndRedraw((0, V.sourceChangeEvent)(this.id())), e || this._syncLineStyleIfNeeded(), void 0 === this._pendingPropertyChangedEvent && (this._pendingPropertyChangedEvent = setTimeout((() => {
                        this._pendingPropertyChangedEvent = void 0, s.emit("drawing_event", this._id, "properties_changed")
                    }), 0))
                }
                state(e) {
                    var t, i;
                    const r = {
                        type: this.toolname,
                        id: this.id(),
                        state: this.properties().state(null !== (t = this._propertiesStateExclusions()) && void 0 !== t ? t : void 0),
                        points: (0, h.deepCopy)(this._timePoint),
                        zorder: this.zorder(),
                        ownerSource: null === (i = this.ownerSource()) || void 0 === i ? void 0 : i.id()
                    };
                    return this.linkKey().value() && (r.linkKey = this.linkKey().value()), 0 !== this._sharingMode.value() && (r.sharingMode = this._sharingMode.value()), delete r.state.points, e && (r.indexes = this._points), this.isFixed() && (r.positionPercents = this._positionPercents || this.calcPositionPercents()), "version" in this && 1 !== this.version && (r.version = this.version), this._saveAlertIdInState() && this.hasAlert.value() && void 0 !== this._alertId && (r.alertId = this._alertId), r
                }
                updateAllViews(e) {
                    this._isActualSymbol && this._isActualCurrency && this._isActualUnit && this._isActualInterval && this._properties.childs().visible.value() && (this._updateAllPaneViews(e), this._priceAxisViews.forEach((t => t.update(e))), this._timeAxisViews.forEach((t => t.update(e))))
                }
                updateAllViewsAndRedraw(e) {
                    this.updateAllViews(e), this._model.updateSource(this)
                }
                tags() {
                    return [this.toolname]
                }
                properties() {
                    return this._properties
                }
                restoreExternalPoints(e, t) {
                    if (this._timePoint = (0, h.deepCopy)(e.points), t.indexesChanged) {
                        if (this.properties().childs().interval.setValue(e.interval), !this.isActualSymbol()) return this._clearServerPoints(), void this._normalizedPointsChanged.fire();
                        this.createServerPoints()
                    } else {
                        const t = Math.min(this._points.length, e.points.length);
                        for (let i = 0; i < t; i++) this._points[i].price = e.points[i].price
                    }
                    this._normalizedPointsChanged.fire()
                }
                restoreExternalState(e) {
                    this.properties().mergeAndFire(e)
                }
                applyTemplate(e) {
                    this._onTemplateApplying.fire(e), this._applyTemplateImpl(e), this.calcIsActualSymbol(), this.updateAllViews((0, V.sourceChangeEvent)(this.id())), this.model().lightUpdate(), this._onTemplateApplied.fire()
                }
                template() {
                    return this.properties().preferences()
                }
                isFixed() {
                    return !1
                }
                isLocked() {
                    const e = this.properties().child("frozen");
                    return void 0 !== e && e.value()
                }
                isSourceHidden() {
                    return !this._properties.childs().visible.value() || (0, S.hideAllDrawings)().value() && this.canBeHidden() || !this._isActualInterval || !this._isActualSymbol || !this._isActualCurrency || !this._isActualUnit
                }
                isSynchronizable() {
                    return this.priceScale() === this._model.mainSeries().priceScale()
                }
                copiable() {
                    return F
                }
                cloneable() {
                    return null !== this._ownerSource && null !== this._ownerSource.firstValue()
                }
                movable() {
                    return !0
                }
                async getPropertyDefinitionsViewModel() {
                    if (null === this._definitionsViewModel) {
                        const e = await this._getPropertyDefinitionsViewModelClass();
                        return null === e || this._isDestroyed ? null : (this._definitionsViewModel = new e(this._model.undoModel(), this), this._definitionsViewModel)
                    }
                    return this._definitionsViewModel
                }
                title() {
                    return this.translatedType()
                }
                translatedType() {
                    var e;
                    return null !== (e = N.lineToolsLocalizedNames[this.toolname]) && void 0 !== e ? e : "Line Tool"
                }
                name() {
                    return "Line Tool"
                }
                createServerPoints() {
                    if (!this._isActualSymbol) return;
                    if (!this._model.chartApi().isConnected().value()) return;
                    if (this._clearServerPoints(), this._model.timeScale().isEmpty()) return;
                    if (0 === this._timePoint.length && this._points.length > 0 && this.normalizePoints(), !this._readyToCreatePointset()) return;
                    const e = this._pointsForPointset();
                    if (0 === e.length) return;
                    ++z, this._currentPointsetAndSymbolId = {
                        pointsetId: z,
                        symbolId: (0, n.ensureNotNull)(this._model.mainSeries().seriesSource().symbolInstanceId())
                    };
                    const t = (0, g.getServerInterval)(this.properties().childs().interval.value());
                    this._model.chartApi().createPointset(this._currentPointsetIdWithPrefix(), "turnaround", this._currentPointsetAndSymbolId.symbolId, t, e, this.onData.bind(this))
                }
                finish() {}
                realign() {
                    var e;
                    this.calcIsActualSymbol(), this.isFixed() || this.isSourceHidden() || this._model.lineBeingCreated() === this || this._model.lineBeingEdited() === this || (null === (e = this._currentPointsetAndSymbolId) || void 0 === e ? void 0 : e.symbolId) === this._model.mainSeries().seriesSource().symbolInstanceId() || this._clearServerPoints(), this.updateAllViews((0, V.sourceChangeEvent)(this.id()))
                }
                stop() {
                    this._clearServerPoints()
                }
                restart() {
                    this.isFixed() || (this._currentPointsetAndSymbolId = null, this.createServerPoints())
                }
                isStarted() {
                    return null !== this._currentPointsetAndSymbolId
                }
                convertYCoordinateToPriceForMoving(e, t) {
                    var i;
                    const r = (0, n.ensureNotNull)(this.priceScale());
                    if (r.isEmpty()) return null;
                    const s = this.ownerSource(),
                        o = (0, n.ensure)(null === (i = s || t) || void 0 === i ? void 0 : i.firstValue());
                    return r.coordinateToPrice(e, o)
                }
                syncMultichartState(e) {
                    const t = {
                            points: this._timePoint,
                            interval: this._model.mainSeries().interval()
                        },
                        i = this.linkKey().value();
                    if (null !== i && this.isSynchronizable()) {
                        const r = {
                            model: this._model,
                            linkKey: i,
                            symbol: this._model.mainSeries().symbol(),
                            finalState: t,
                            changes: e
                        };
                        (0, S.finishChangingLineTool)(r)
                    }
                }
                enableCurrentIntervalVisibility() {
                    const e = this.properties().childs().intervalsVisibilities.state();
                    void 0 !== e && ((0, m.makeIntervalsVisibilitiesVisibleAtInterval)(e, T.Interval.parse(this._model.mainSeries().interval())), this.properties().childs().intervalsVisibilities.mergeAndFire(e))
                }
                clonePositionOffset() {
                    return this.isFixed() ? {
                        barOffset: 0,
                        xCoordOffset: 20,
                        yCoordOffset: 20
                    } : {
                        barOffset: 0,
                        xCoordOffset: 0,
                        yCoordOffset: -40
                    }
                }
                sharingMode() {
                    return this._sharingMode
                }
                share(e) {
                    this.isSynchronizable() && this._sharingMode.setValue(e)
                }
                syncLineStyleState() {
                    const e = this.properties().state(this._syncStateExclusions);
                    return delete e.interval, e.intervalsVisibilities = (0, m.mergeIntervalVisibilitiesDefaults)(e.intervalsVisibilities), e
                }
                moveLineTool(e) {
                    e.forEach(((e, t) => this._setPoint(t, e))), this.normalizePoints()
                }
                _setPoint(e, t) {
                    this._points[e].index === t.index ? this._points[e].price = t.price : this._points[e] = t, this._pointChanged.fire(e)
                }
                _correctLastPoint(e) {
                    return (0, A.clone)(e)
                }
                _pointsForPointset() {
                    return this._timePoint.map((e => [e.time_t, e.offset]))
                }
                _snapPoint45Degree(e, t, i) {
                    const r = this._model.timeScale(),
                        s = r.indexToCoordinate(t.index),
                        o = r.indexToCoordinate(e.index) - s,
                        l = (0, n.ensureNotNull)(this.priceScale()),
                        a = t.price,
                        c = e.price,
                        h = (0, n.ensureNotNull)((0, n.ensureNotNull)(this.ownerSource()).firstValue()),
                        u = l.priceToCoordinate(a, h),
                        d = l.priceToCoordinate(c, h) - u,
                        p = Math.round(Math.atan2(o, d) / Math.PI * 4);
                    if (2 === Math.abs(p)) i || (e.price = a);
                    else if (0 === Math.abs(p) || 4 === Math.abs(p)) i || (e.index = t.index);
                    else {
                        const t = Math.sqrt(o * o + d * d),
                            i = o < 0 ? -1 : 1,
                            n = d < 0 ? -1 : 1;
                        let a = Math.max(Math.abs(d), Math.abs(o));
                        a /= a * Math.sqrt(2) / t;
                        const c = Math.round(r.coordinateToIndex(s + a * i)),
                            p = Math.abs(r.indexToCoordinate(c) - s),
                            _ = l.coordinateToPrice(u + p * n, h);
                        e.index = c, e.price = _
                    }
                }
                normalizePoint(e) {
                    return { ...this._model.timeScale().normalizeBarIndex(e.index),
                        price: e.price
                    }
                }
                normalizePoints() {
                    this._timePoint = [];
                    for (let e = 0; e < this._points.length; e++)
                        if (void 0 !== this._points[e].index) {
                            const t = this.normalizePoint(this._points[e]);
                            if (!t.time_t) {
                                this._timePoint = [];
                                break
                            }
                            this._timePoint.push(t)
                        }
                    this._normalizedPointsChanged.fire()
                }
                _setPaneViews(e, t, i) {
                    if (this._isDestroyed)
                        for (const t of e) t.destroy && t.destroy();
                    else this._paneViews.set(t, e), void 0 !== t && i && t.onDestroyed().subscribe(this, (() => this._destroyPanePaneViews(t))), this._model.lightUpdate()
                }
                _getPaneViews(e) {
                    return this._paneViews.get(e) || null
                }
                _updateAllPaneViews(e) {
                    this._paneViews.forEach((t => {
                        for (const i of t) i.update(e)
                    }))
                }
                _alignPointHorizontallyOrVertically(e) {
                    const t = (0, n.ensureNotNull)(this.pointToScreenPoint(e)),
                        i = (0, n.ensureDefined)((0, n.ensureNotNull)(this._startMovingPoint).logical),
                        r = (0, n.ensureDefined)((0, n.ensureNotNull)(this._startMovingPoint).screen),
                        s = Math.abs(r.x - t.x),
                        o = Math.abs(r.y - t.y);
                    if (s < 10 && o < 10) return e;
                    return {
                        index: s < o ? i.index : e.index,
                        price: s < o ? e.price : i.price
                    }
                }
                _alignScreenPointHorizontallyOrVertically(e) {
                    const t = (0, n.ensureDefined)((0, n.ensureNotNull)(this._startMovingPoint).screen),
                        i = Math.abs(t.x - e.x),
                        s = Math.abs(t.y - e.y);
                    return i < 10 && s < 10 ? e : i < s ? new r.Point(t.x, e.y) : new r.Point(e.x, t.y)
                }
                _correctPoints(e, t) {
                    const i = (0, n.ensureDefined)((0, n.ensureNotNull)(this._currentMovingPoint).screen),
                        r = (0, n.ensureDefined)((0, n.ensureNotNull)(this._startMovingPoint).screen),
                        s = i.subtract(r);
                    if (s.length() < 1 && !t) return !1;
                    for (let t = 0; t < e.length; t++) {
                        const i = e[t],
                            r = (0, n.ensureNotNull)(this.pointToScreenPoint(i)).add(s),
                            o = (0, n.ensureNotNull)(this.screenPointToPoint(r));
                        e[t].index = o.index, e[t].price = o.price
                    }
                    return !0
                }
                _correctFixedPoint(e) {
                    if (void 0 === this._fixedPoint) return {
                        didCorrect: !1,
                        point: e
                    };
                    const t = (0, n.ensureDefined)((0, n.ensureNotNull)(this._currentMovingPoint).screen),
                        i = (0, n.ensureDefined)((0, n.ensureNotNull)(this._startMovingPoint).screen),
                        r = t.subtract(i);
                    return r.length() >= 1 ? {
                        didCorrect: !0,
                        point: e.add(r)
                    } : {
                        didCorrect: !1,
                        point: e
                    }
                }
                _currentPointsetIdWithPrefix() {
                    return "pointset_" + (0, n.ensureNotNull)(this._currentPointsetAndSymbolId).pointsetId
                }
                _clearServerPoints() {
                    null !== this._currentPointsetAndSymbolId && this._model.chartApi().isConnected().value() && this._model.chartApi().removePointset(this._currentPointsetIdWithPrefix()), this._currentPointsetAndSymbolId = null
                }
                _createPointProperty(e) {
                    const t = this._pointsProperty.childs().points;
                    t.addProperty("" + e, {});
                    const i = t[e];
                    i.addChild("price", new M(this, e)), i.addChild("bar", new D.LineDataSourcePointIndexProperty(this, e))
                }
                _createPointsProperties() {
                    this._pointsProperty = new(w()), this._pointsProperty.addChild("points", new(w()));
                    for (let e = 0; e < this.pointsCount(); e++) this._createPointProperty(e)
                }
                _alignPointToRangeOfActualData(e) {
                    const t = (0, n.ensureNotNull)(this._model.mainSeries().bars().firstIndex()),
                        i = (0, n.ensureNotNull)(this._model.mainSeries().bars().lastIndex());
                    let r = Math.max(e.index, t);
                    return r = Math.min(r, i), { ...e,
                        index: r
                    }
                }
                _migrateSymbolProperty() {
                    const e = this._properties.childs();
                    if (e.symbolStateVersion.value() < 2) {
                        const t = (0, n.ensureNotNull)(this.ownerSource()),
                            i = (0, n.ensureNotNull)(t.symbolSource()),
                            r = this._model.mainSeries();
                        if (i === r) return void e.symbolStateVersion.setValueSilently(2);
                        if (null === r.symbolInfo()) return;
                        if (null === i.symbolInfo()) return;
                        r.symbolSameAsCurrent(e.symbol.value()) && e.symbol.setValueSilently(i.symbol()), e.symbolStateVersion.setValueSilently(2)
                    }
                }
                _migrateZOrder() {
                    const e = this._properties.childs();
                    e.zOrderVersion.value() < 2 && (this.ownerSource() === this.model().mainSeries() && this.setZorder(this.zorder() - this.model().mainSeries().obsoleteZOrder()), e.zOrderVersion.setValueSilently(2))
                }
                _preparePoint(e, t) {
                    const i = e;
                    return t && t.shift() && this.points().length >= 2 && this._snapTo45DegreesAvailable() && this._snapPoint45Degree(i, this.points()[this.points().length - 2]), i
                }
                _addPointIntenal(e, t, i) {
                    this._points.push(e);
                    const r = this._points.length === this.pointsCount();
                    return r ? (this._lastPoint = null, i || (this.normalizePoints(), this.createServerPoints())) : this._lastPoint = e, this._pointAdded.fire(this._points.length - 1), r
                }
                _onSourceHiddenMayChange() {
                    this._model.invalidate(v.InvalidationMask.validateAction((() => {
                        this !== this._model.lineBeingCreated() && (this._isDestroyed || this.processHibernate())
                    })))
                }
                _saveAlertIdInState() {
                    return !0
                }
                _onPointsetUpdated(e) {
                    if (0 !== e.length) {
                        for (let t = 0; t < e.length; t++) {
                            const i = e[t],
                                r = this._timePoint[i.index],
                                n = {
                                    index: i.value[0],
                                    time: new Date(1e3 * i.value[1]),
                                    price: r.price
                                };
                            this._points.length <= i.index ? (this._points.push(n), this._pointAdded.fire(this._points.length - 1)) : (this._points[i.index] = n, this._pointChanged.fire(i.index))
                        } {
                            const e = this;
                            e.recalculateStateByData && e.recalculateStateByData()
                        }
                        this.updateAllViewsAndRedraw((0, V.sourceChangeEvent)(this.id()))
                    }
                }
                _snapTo45DegreesAvailable() {
                    return !1
                }
                _onMainSeriesSymbolResolved() {
                    const e = this.ownerSource();
                    null === e || this._model.mainSeries() === e.symbolSource() || this.isSourceHidden() || this.createServerPoints()
                }
                _readyToCreatePointset() {
                    return this._timePoint.length > 0
                }
                _onAlertData(e) {}
                _propertiesStateExclusions() {
                    return null
                }
                _syncLineStyleIfNeeded() {
                    const e = this.linkKey().value();
                    !this._syncLineStyleMuted && e && (0, S.changeLineStyle)({
                        linkKey: e,
                        state: this.syncLineStyleState(),
                        model: this._model
                    })
                }
                _muteSyncLineStyle() {
                    this._syncLineStyleMuted = !0
                }
                _unmuteSyncLineStyleWithoutApplyingChanges() {
                    this.propertiesChanged(), this._syncLineStyleMuted = !1
                }
                _applyTemplateImpl(e) {
                    e.intervalsVisibilities = (0, m.mergeIntervalVisibilitiesDefaults)(e.intervalsVisibilities);
                    const t = this.properties();
                    t.mergePreferences(e), t.saveDefaults(), this.propertiesChanged()
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.resolve(null)
                }
                _getAlertPlots() {
                    return []
                }
                _getUndoHistory() {
                    return this._model.undoModel().undoHistory()
                }
                _synchronizeAlert(e) {
                    const t = this._getUndoHistory();
                    if (!this._undoCheckpointAlert && !this._alertUndoMode) {
                        const e = t.undoStack().pop();
                        this._undoCheckpointAlert = t.createUndoCheckpoint(), e && t.undoStack().push(e)
                    }
                    const i = e => {
                            const t = e.description() !== e.defaultDescription(),
                                i = (0, n.ensureNotNull)(e.seriesState()),
                                r = this._model.mainSeries().stateForAlert();
                            "MainSeries" === i.type && r.actualSymbol === i.actualSymbol && e.setSeriesState(r), e.setMainSeriesState(r), e.setSymbol(r.symbolString);
                            const s = (0, n.ensureNotNull)(this.stateForAlert());
                            e.setResolution(s.interval), e.setLineState(s), t || e.resetToDefaultDescription(), this._localAndServerAlertsMismatch = !0
                        },
                        r = () => {
                            this._alertUndoMode = !0, t.undoToCheckpoint((0, n.ensureDefined)(this._undoCheckpointAlert)), setTimeout((() => {
                                this._alertUndoMode = !1, this._localAndServerAlertsMismatch = !1
                            }), 0)
                        },
                        s = e => {
                            "not_exists" !== e && (R.logError("Getting alert failed: " + e), r())
                        },
                        o = async e => {
                            (await (0, u.getChartAlertsFacade)()).restartAlert(e, {
                                success: () => this._localAndServerAlertsMismatch = !1,
                                error: s,
                                complete: () => delete this._undoCheckpointAlert,
                                actionSource: "drawing_sync"
                            })
                        };
                    (0, d.canPlaceAlertOnResolution)(this.stateForAlert().interval) ? this.getAlert().then((t => {
                        t ? (i(t), e && (o(t), this._onAlertData(t))) : R.logError("Failed to get alert, drawing and alert are not synchronized")
                    })).catch(s): this._alertUndoMode || ((0, p.showGoProAlertsOnSecondsDialog)(), r(), delete this._undoCheckpointAlert)
                }
                _linePointsToAlertPlot(e, t, i, r) {
                    if (2 !== e.length) return R.logError("[Drawing Alert] Wrong points"), null;
                    const s = this._model.timeScale();
                    return !s || s.isEmpty() ? null : {
                        type: "LinePlot",
                        title: t || this.translatedType(),
                        timestamp: (0, n.ensureNotNull)(s.indexToTimePoint(0)),
                        offset1: e[0].index,
                        offset2: e[1].index,
                        price1: e[0].price,
                        price2: e[1].price,
                        extendBackward: i || !1,
                        extendForward: r || !1
                    }
                }
                static _configureProperties(e) {
                    if (W._addCollectedProperties(e), e.hasChild("symbolStateVersion") || e.addChild("symbolStateVersion", new(w())(1)), e.hasChild("zOrderVersion") || e.addChild("zOrderVersion", new(w())(1)), e.hasChild("visible") || e.addChild("visible", new(w())(!0)), e.hasChild("frozen") || e.addChild("frozen", new(w())(!1)), e.hasChild("symbol") || e.addChild("symbol", new(w())("")), e.hasChild("currencyId") || e.addChild("currencyId", new(w())(null)), e.hasChild("unitId") || e.addChild("unitId", new(w())(null)), e.addExclusion("symbolStateVersion"), e.addExclusion("zOrderVersion"), e.addExclusion("visible"), e.addExclusion("frozen"), e.addExclusion("symbol"), e.addExclusion("currencyId"), e.addExclusion("unitId"), e.hasChild("intervalsVisibilities")) {
                        const t = (0, A.merge)((0, A.clone)(f.intervalsVisibilitiesDefaults), e.childs().intervalsVisibilities.state());
                        e.removeProperty("intervalsVisibilities"), e.addChild("intervalsVisibilities", new L.IntervalsVisibilitiesProperty(t))
                    } else e.addChild("intervalsVisibilities", new L.IntervalsVisibilitiesProperty(f.intervalsVisibilitiesDefaults));
                    e.hasChild("title") || e.addChild("title", new(w())("")), e.addExclusion("symbolInfo"), e.addExclusion("points"), e.addExclusion("interval"), e.addExclusion("title"),
                        e.hasChild("singleChartOnly") && e.removeProperty("singleChartOnly"), e.hasChild("font") && e.removeProperty("font")
                }
                static _addCollectedProperties(e) {
                    e.hasChild("linewidth") && e.addChild("linesWidths", new k.LineToolWidthsProperty([(0, n.ensureDefined)(e.child("linewidth"))])), e.hasChild("linecolor") && e.addChild("linesColors", new k.LineToolColorsProperty([(0, n.ensureDefined)(e.child("linecolor"))])), e.hasChild("backgroundColor") && e.addChild("backgroundsColors", new k.LineToolColorsProperty([(0, n.ensureDefined)(e.child("backgroundColor"))])), e.hasChild("textColor") && e.addChild("textsColors", new k.LineToolColorsProperty([(0, n.ensureDefined)(e.child("textColor"))])), e.addExclusion("linesWidths"), e.addExclusion("linesColors"), e.addExclusion("backgroundsColors"), e.addExclusion("textsColors")
                }
                _removeAlertSubscriptions() {
                    var e;
                    null === (e = this._unsubscribeAlertCallbacks) || void 0 === e || e.call(this), this._unsubscribeAlertCallbacks = void 0
                }
                _addAlertSubscriptions(e) {
                    if (void 0 !== this._unsubscribeAlertCallbacks) return;
                    const t = this.properties().child("extendLeft"),
                        i = this.properties().child("extendRight"),
                        r = e.destroyed().spawn(),
                        n = e.selected().spawn(),
                        s = e.hovered().spawn();
                    r.subscribe(this.removeAlert.bind(this)), n.subscribe((e => {
                        this._model.selectionMacro((t => {
                            e ? t.addSourceToSelection(this) : t.removeSourceFromSelection(this)
                        }))
                    })), s.subscribe((e => {
                        const t = this._model.hoveredSource();
                        e && t !== this ? this._model.setHoveredSource(this, null) : e || t !== this || this._model.setHoveredSource(null, null)
                    })), void 0 !== t && t.subscribe(this, (() => this.synchronizeAlert(!1))), void 0 !== i && i.subscribe(this, (() => this.synchronizeAlert(!1))), this._unsubscribeAlertCallbacks = () => {
                        r.destroy(), s.destroy(), n.destroy(), void 0 !== t && t.unsubscribeAll(this), void 0 !== i && i.unsubscribeAll(this)
                    }
                }
                _destroyPanePaneViews(e) {
                    const t = this._paneViews.get(e);
                    if (void 0 !== t)
                        for (const e of t) e.destroy && e.destroy();
                    void 0 !== e && e.onDestroyed().unsubscribeAll(this), this._paneViews.delete(e)
                }
                _copyPricesWithoutNormalization() {
                    const e = Math.min(this._points.length, this._timePoint.length);
                    for (let t = 0; t < e; t++) this._timePoint[t].price = this._points[t].price
                }
            }
        },
        241056: (e, t, i) => {
            i.r(t), i.d(t, {
                LineToolMultiplePropertyBaseImpl: () => a,
                LineToolCollectedProperty: () => c,
                LineToolWidthsProperty: () => h,
                LineToolColorsProperty: () => u,
                MultipleLineWidthsProperty: () => p,
                MultipleLineColorsProperty: () => _
            });
            var r = i(272001),
                n = i(869403),
                s = i.n(n);
            const o = (0, r.getLogger)("Chart.LineToolCollectedProperty");
            class l {
                applyValue(e, t) {
                    e.setValue(t)
                }
            }
            class a {
                constructor(e, t) {
                    this._onChange = new(s()), this._properties = e, e.forEach((e => e.subscribe(this, (() => {
                        this._onChange.fire(this)
                    })))), this._showIfProperty = t
                }
                visible() {
                    var e;
                    return !this._showIfProperty || (null === (e = this._showIfProperty) || void 0 === e ? void 0 : e.value())
                }
                value() {
                    if (0 === this._properties.length) return o.logError("Incorrect call, should not request value of 0 properties"), "mixed";
                    const e = this._properties[0].value();
                    return 1 === this._properties.length || this._properties.every((t => t.value() === e)) ? e : "mixed"
                }
                state() {}
                merge() {}
                destroy() {
                    this._properties.forEach((e => e.unsubscribeAll(this)))
                }
                subscribe(e, t) {
                    this._onChange.subscribe(e, t)
                }
                unsubscribe(e, t) {
                    this._onChange.unsubscribe(e, t)
                }
                unsubscribeAll(e) {
                    this._onChange.unsubscribeAll(e)
                }
                storeStateIfUndefined() {
                    return !0
                }
            }
            class c extends a {
                setValue(e, t, i) {
                    if ("mixed" === e) return;
                    const r = null != i ? i : new l;
                    this._properties.forEach((t => r.applyValue(t, e)))
                }
            }
            class h extends c {}
            class u extends c {
                firstColor() {
                    return this._properties[0].value()
                }
            }
            class d extends a {
                setValue(e, t, i) {
                    if ("mixed" === e) return;
                    const r = null != i ? i : new l;
                    this._properties.forEach((t => t.setValue(e, void 0, r)))
                }
            }
            class p extends d {}
            class _ extends d {}
        },
        272124: (e, t, i) => {
            t.LineToolFibRetracement = i(913480).LineToolFibRetracement, t.LineToolFibChannel = i(714657).LineToolFibChannel, t.LineToolFibSpeedResistanceArcs = i(700465).LineToolFibSpeedResistanceArcs, t.LineToolProjection = i(632465).LineToolProjection, t.LineToolTrendBasedFibExtension = i(901708).LineToolTrendBasedFibExtension, t.LineToolElliott = i(759499).LineToolElliott, t.LineToolFibCircles = i(798628).LineToolFibCircles, t.LineToolVertLine = i(157116).LineToolVertLine, t.LineToolCrossLine = i(506717).LineToolCrossLine, t.LineToolBarsPattern = i(804585).LineToolBarsPattern, t.LineToolTrendBasedFibTime = i(27601).LineToolTrendBasedFibTime, t.LineToolFibTimeZone = i(304935).LineToolFibTimeZone, t.LineToolCircleLines = i(515950).LineToolCircleLines, t.LineToolDateRange = i(887326).LineToolDateRange, t.LineToolPriceRange = i(569654).LineToolPriceRange, t.LineToolDateAndPriceRange = i(402430).LineToolDateAndPriceRange, t.LineToolParallelChannel = i(989658).LineToolParallelChannel, t.LineToolTrendAngle = i(447067).LineToolTrendAngle, t.LineToolTrendLine = i(732747).LineToolTrendLine, t.LineToolInfoLine = i(10753).LineToolInfoLine, t.LineToolArrowMark = i(856073).LineToolArrowMark, t.LineToolImage = i(780264).LineToolImage, t.LineToolPitchfan = i(133823).LineToolPitchfan, t.LineToolGannSquare = i(743102).LineToolGannSquare, t.LineToolFibSpeedResistanceFan = i(182229).LineToolFibSpeedResistanceFan, t.LineToolGannComplex = i(380950).LineToolGannComplex, t.LineToolGannFixed = i(420263).LineToolGannFixed, t.LineToolGannFan = i(145383).LineToolGannFan, t.LineToolFibWedge = i(113101).LineToolFibWedge, t.LineToolPitchfork = i(822296).LineToolPitchfork, t.LineToolDisjointAngle = i(564883).LineToolDisjointChannel, t.LineToolFlatBottom = i(202645).LineToolFlatBottom, t.LineToolIcon = i(200330).LineToolIcon, t.LineToolEmoji = i(650604).LineToolEmoji, t.LineToolSticker = i(824067).LineToolSticker, t.LineToolRotatedRectangle = i(820914).LineToolRotatedRectangle, t.LineToolFibSpiral = i(889056).LineToolFibSpiral, t.LineToolHeadAndShoulders = i(479336).LineToolHeadAndShoulders, t.LineToolTriangle = i(521188).LineToolTriangle, t.LineToolTrianglePattern = i(96684).LineToolTrianglePattern, t.LineTool5PointsPattern = i(333652).LineTool5PointsPattern, t.LineToolThreeDrivers = i(672874).LineToolThreeDrivers, t.LineToolABCD = i(539104).LineToolABCD, t.LineToolPolyline = i(794888).LineToolPolyline, t.LineToolPath = i(132455).LineToolPath, t.LineToolPrediction = i(113534).LineToolPrediction, t.LineToolPriceLabel = i(207889).LineToolPriceLabel, t.LineToolArrowMarker = i(681348).LineToolArrowMarker,
                t.LineToolNote = i(752110).LineToolNote, t.LineToolNoteAbsolute = i(752110).LineToolNoteAbsolute, t.LineToolSignpost = i(80342).LineToolSignpost, t.LineToolBrush = i(42878).LineToolBrush, t.LineToolArc = i(386646).LineToolArc, t.LineToolCallout = i(900921).LineToolCallout, t.LineToolBalloon = i(998275).LineToolBalloon, t.LineToolComment = i(420365).LineToolComment, t.LineToolText = i(194167).LineToolText, t.LineToolHorzLine = i(514620).LineToolHorzLine, t.LineToolHorzRay = i(699334).LineToolHorzRay, t.LineToolRectangle = i(311625).LineToolRectangle, t.LineToolCircle = i(420496).LineToolCircle, t.LineToolEllipse = i(854446).LineToolEllipse, t.LineToolTimeCycles = i(341880).LineToolTimeCycles, t.LineToolSineLine = i(864780).LineToolSineLine, t.LineToolGhostFeed = i(244561).LineToolGhostFeed, t.LineToolBezierQuadro = i(717797).LineToolBezierQuadro, t.LineToolBezierCubic = i(214168).LineToolBezierCubic, t.LineToolArrow = i(910788).LineToolArrow, t.LineToolRay = i(638655).LineToolRay, t.LineToolExtended = i(42374).LineToolExtended, t.LineToolSchiffPitchfork = i(48589).LineToolSchiffPitchfork, t.LineToolSchiffPitchfork2 = i(901700).LineToolSchiffPitchfork2, t.LineToolInsidePitchfork = i(874572).LineToolInsidePitchfork, t.LineToolTextAbsolute = i(194167).LineToolTextAbsolute, t.LineToolArrowMarkLeft = i(856073).LineToolArrowMarkLeft, t.LineToolArrowMarkRight = i(856073).LineToolArrowMarkRight, t.LineToolArrowMarkUp = i(856073).LineToolArrowMarkUp, t.LineToolArrowMarkDown = i(856073).LineToolArrowMarkDown, t.LineToolFlagMark = i(256957).LineToolFlagMark, t.LineToolCypherPattern = i(228552).LineToolCypherPattern, t.LineToolElliottImpulse = i(759499).LineToolElliottImpulse, t.LineToolElliottTriangle = i(759499).LineToolElliottTriangle, t.LineToolElliottTripleCombo = i(759499).LineToolElliottTripleCombo, t.LineToolElliottCorrection = i(759499).LineToolElliottCorrection, t.LineToolElliottDoubleCombo = i(759499).LineToolElliottDoubleCombo, t.LineToolRiskRewardLong = i(573751).LineToolRiskRewardLong, t.LineToolRiskRewardShort = i(573751).LineToolRiskRewardShort, t.LineToolPosition = i(969876).LineToolPosition, t.LineToolOrder = i(74149).LineToolOrder, t.LineToolHighlighter = i(957884).LineToolHighlighter, t.LineToolPriceNote = i(155075).LineToolPriceNote, t.LineToolTweet = i(310495).LineToolTweet, t.LineToolIdea = i(700950).LineToolIdea
        },
        343135: (e, t, i) => {
            i.d(t, {
                LineToolWithRelativePriceCoordinate: () => l
            });
            var r = i(650151),
                n = i(892142),
                s = i(796309),
                o = i(480071);
            class l extends n.LineDataSource {
                constructor() {
                    super(...arguments), this._startMovingAnchorY = NaN
                }
                priceSource() {
                    return this.ownerSource()
                }
                addPoint(e, t, i) {
                    return super.addPoint(this._updatePositionAndCorrectPoint(e), t, i)
                }
                setPoint(e, t, i) {
                    super.setPoint(e, this._updatePositionAndCorrectPoint(t, !this.isPhantom() && !this._allowChangeAnchorHorizontally()), i), this._syncPosition()
                }
                setPointAndChangeIndex(e, t, i) {
                    super.setPoint(e, this._updatePositionAndCorrectPoint(t, !1), i), this._syncPosition()
                }
                startMoving(e, t, i, n) {
                    n || (this._startMovingAnchorY = (0, r.ensureNotNull)(this._anchorYCoordinate())), super.startMoving(e, t, i)
                }
                move(e, t, i, n) {
                    var s;
                    const o = (0, r.ensureDefined)((0, r.ensureNotNull)(this.startMovingPoint()).logical),
                        l = (0,
                            r.ensureDefined)(e.logical);
                    if (!n && 0 === t) {
                        const e = this._points[0],
                            t = l.index - o.index,
                            i = (0, r.ensureNotNull)(this.priceScale()),
                            n = (0, r.ensure)(null === (s = this.ownerSource()) || void 0 === s ? void 0 : s.firstValue()),
                            a = i.priceToCoordinate(l.price, n) - i.priceToCoordinate(o.price, n),
                            c = this._startMovingAnchorY + a,
                            h = i.coordinateToPrice(c, n);
                        this._updatePositionAndCorrectPoint({
                            index: e.index + t,
                            price: h
                        })
                    }
                    super.move(e, t, i), n || this._syncPosition()
                }
                _allowChangeAnchorHorizontally() {
                    return !1
                }
                _updatePositionAndCorrectPoint(e, t) {
                    t && (e.index = this._points[0].index);
                    const i = this.priceSource();
                    if (null === i) return e;
                    const r = i.priceScale(),
                        n = i.firstValue();
                    if (null === r || r.isEmpty() || null === n) return e;
                    const o = r.height();
                    let l = o / 2,
                        a = e.price >= r.coordinateToPrice(l, n) ? 1 : -1;
                    const c = this._model.mainSeries();
                    if (i === c) {
                        const t = c.data().search(this._baseSeriesIndexForPoint(e));
                        if (null !== t) {
                            const i = (0, s.seriesPrice)(c, t, -1),
                                o = (0, s.seriesPrice)(c, t, 1);
                            a = e.price >= i ? 1 : -1, l = r.priceToCoordinate(1 === a ? o : i, n), e.price = 1 === a ? Math.max(o, e.price) : e.price
                        }
                    }
                    const h = 1 === (-1 === a !== r.isInverted() ? -1 : 1) ? l : o - l,
                        u = r.priceToCoordinate(e.price, n),
                        d = Math.min(o, Math.abs(u - l)),
                        p = Math.max(0, Math.min(100, 100 * d / h)) * a;
                    return this.properties().childs().position.setValue(p), e
                }
                _baseSeriesIndexForPoint(e) {
                    return e.index
                }
                _syncPosition() {
                    const e = this.linkKey().value();
                    if (null !== e) {
                        const t = {
                            position: this.properties().childs().position.value()
                        };
                        (0, o.changeLineStyle)({
                            linkKey: e,
                            state: t,
                            model: this._model
                        })
                    }
                }
                _anchorYCoordinate() {
                    const e = this.priceSource();
                    if (null === e) return null;
                    const t = e.priceScale(),
                        i = e.firstValue();
                    if (null === t || t.isEmpty() || null === i) return null;
                    const r = this._model.mainSeries(),
                        n = this.customEvent();
                    if (null === n) return null;
                    let o = null;
                    if (e === r && (o = (0, s.seriesBasePosition)(r, n)), null === o && (o = (0, s.noDataBasePosition)(n, t, i)), null === o) return null;
                    const l = n.position(),
                        a = t.priceToCoordinate(o.price, i);
                    return (0, s.positionToCoordinate)(l, t.height(), a, (0, s.positionVisualDirection)(l, t.isInverted()))
                }
            }
        },
        752110: (e, t, i) => {
            var r = i(892142).LineDataSource,
                n = i(40210),
                s = i(87225).DefaultProperty;
            class o extends r {
                constructor(e, t, r, n) {
                    super(e, t || o.createProperties(), r, n), this.version = o.version, Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 645934)).then((({
                        NotePaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                pointsCount() {
                    return 1
                }
                name() {
                    return "Note"
                }
                getTooltipWidth() {
                    return o.TOOLTIP_WIDTH
                }
                getTooltipPadding() {
                    return o.TOOLTIP_PADDING
                }
                getTooltipLineSpacing() {
                    return o.TOOLTIP_LINESPACING
                }
                template() {
                    var e = super.template();
                    return e.text = this.properties().childs().text.value(), e
                }
                _applyTemplateImpl(e) {
                    super._applyTemplateImpl(e), this.properties().childs().text.setValue(e.text)
                }
                static createProperties(e) {
                    void 0 !== e && void 0 !== e.markerColor && void 0 === e.borderColor && (e.borderColor = e.markerColor);
                    var t = new s("linetoolnote", e);
                    return this._configureProperties(t), t
                }
                state(e) {
                    var t = super.state(e);
                    return e && (t.state.fixedSize = !1), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 392665))).NoteDefinitionsViewModel
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.hasChild("text") || e.addChild("text", new n(i(777754).t(null, void 0, i(37229)))), e.addExclusion("text")
                }
            }
            o.TOOLTIP_WIDTH = 300, o.TOOLTIP_PADDING = 10, o.TOOLTIP_LINESPACING = 5, o.version = 1;
            class l extends o {
                constructor(e, t) {
                    super(e, t || l.createProperties())
                }
                title() {
                    return i(777754).t(null, void 0, i(366828))
                }
                name() {
                    return "Anchored Note"
                }
                isFixed() {
                    return !0
                }
                hasEditableCoordinates() {
                    return !1
                }
                static createProperties(e) {
                    var t = new s("linetoolnoteabsolute", e);
                    return this._configureProperties(t), t
                }
            }
            t.LineToolNote = o, t.LineToolNoteAbsolute = l
        },
        74149: (e, t, i) => {
            var r = i(327867).LineToolTrading,
                n = i(861765).LineToolPriceAxisView,
                s = i(56155),
                o = i(892142).LineDataSource,
                l = i(87225).DefaultProperty;
            const a = i(495046);
            var c = i(569523).sortSourcesPreOrdered.LineToolOrder;

            function h(e) {
                return null == e ? e = "" : e += "", e
            }
            class u {
                constructor(e) {
                    this._line = e, this._data = {
                        bodyText: "order",
                        quantityText: "0"
                    }, this._editable = !0, this._cancellable = !0, this._mode = "", this._direction = "buy", this._active = !0
                }
                setMode(e) {
                    return this._mode = e, this._line.updateAllViewsAndRedraw(), this
                }
                setDirection(e) {
                    return this._direction = e, this._line.updateAllViewsAndRedraw(), this
                }
                setActive(e) {
                    return this._active = e, this._line.updateAllViewsAndRedraw(), this
                }
                setEditable(e) {
                    return this._editable = e, this._line.updateAllViewsAndRedraw(), this
                }
                getEditable() {
                    return this._editable
                }
                setCancellable(e) {
                    return this._cancellable = e, this._line.updateAllViewsAndRedraw(), this
                }
                getCancellable() {
                    return this._cancellable
                }
                hasMoveCallback() {
                    return this.isFunction(this._onMoveCallback)
                }
                hasModifyCallback() {
                    return this.isFunction(this._onModifyCallback)
                }
                getPrice() {
                    return this._line.points().length > 0 ? this._line.points()[0].price : this._line._timePoint.length > 0 ? this._line._timePoint[0].price : void 0
                }
                setPrice(e) {
                    if (this._line.points().length > 0) {
                        var t = this._line.points()[0];
                        t.price = e, this._line._points[0] = t, this._line.normalizePoints(), this._line.updateAllViewsAndRedraw()
                    }
                    return this._line._timePoint.length > 0 && (this._line._timePoint[0].price = e), this
                }
                getText() {
                    return this._data.bodyText
                }
                setText(e) {
                    return this._data.bodyText = e || "", this._line.updateAllViewsAndRedraw(), this
                }
                setTooltip(e) {
                    return this._line.properties().tooltip.setValue(h(e)), this
                }
                getTooltip() {
                    return this._line.properties().tooltip.value()
                }
                setModifyTooltip(e) {
                    return this._line.properties().modifyTooltip.setValue(h(e)), this
                }
                getModifyTooltip() {
                    return this._line.properties().modifyTooltip.value()
                }
                setCancelTooltip(e) {
                    return this._line.properties().cancelTooltip.setValue(h(e)), this
                }
                getCancelTooltip() {
                    return this._line.properties().cancelTooltip.value()
                }
                getQuantity() {
                    return this._data.quantityText
                }
                setQuantity(e) {
                    return this._data.quantityText = e || "", this._line.updateAllViewsAndRedraw(), this
                }
                getExtendLeft() {
                    var e = this._line.properties().extendLeft.value();
                    return "inherit" === e ? this._line._model.properties().tradingProperties.extendLeft.value() : e
                }
                setExtendLeft(e) {
                    return this._line.properties().extendLeft.setValue(e), this
                }
                getLineLength() {
                    var e = this._line.properties().lineLength.value();
                    return "inherit" === e ? this._line._model.properties().tradingProperties.lineLength.value() : e
                }
                setLineLength(e) {
                    return this._line.properties().lineLength.setValue(Math.max(0, Math.min(e, 100))), this
                }
                getLineColor() {
                    var e = this._line.properties();
                    return "buy" === this._direction ? this._active ? e.lineActiveBuyColor.value() : e.lineInactiveBuyColor.value() : this._active ? e.lineActiveSellColor.value() : e.lineInactiveSellColor.value()
                }
                setLineColor(e) {
                    return "buy" === this._direction ? this._active ? this.setLineActiveBuyColor(e) : this.setLineInactiveBuyColor(e) : this._active ? this.setLineActiveSellColor(e) : this.setLineInactiveSellColor(e), this
                }
                setLineActiveBuyColor(e) {
                    return this._line.properties().lineActiveBuyColor.setValue(e), this
                }
                setLineInactiveBuyColor(e) {
                    return this._line.properties().lineInactiveBuyColor.setValue(e), this
                }
                setLineActiveSellColor(e) {
                    return this._line.properties().lineActiveSellColor.setValue(e), this
                }
                setLineInactiveSellColor(e) {
                    return this._line.properties().lineInactiveSellColor.setValue(e), this
                }
                getLineStyle() {
                    var e = this._line.properties().lineStyle.value();
                    return "inherit" === e ? this._line._model.properties().tradingProperties.lineStyle.value() : e
                }
                setLineStyle(e) {
                    return this._line.properties().lineStyle.setValue(e), this
                }
                getLineWidth() {
                    var e = this._line.properties().lineWidth.value();
                    return "inherit" === e ? this._line._model.properties().tradingProperties.lineWidth.value() : e
                }
                setLineWidth(e) {
                    return this._line.properties().lineWidth.setValue(e), this
                }
                getBodyBorderColor() {
                    var e = this._line.properties();
                    return "buy" === this._direction ? this._active ? e.bodyBorderActiveBuyColor.value() : e.bodyBorderInactiveBuyColor.value() : this._active ? e.bodyBorderActiveSellColor.value() : e.bodyBorderInactiveSellColor.value()
                }
                setBodyBorderColor(e) {
                    return "buy" === this._direction ? this._active ? this.setBodyBorderActiveBuyColor(e) : this.setBodyBorderInactiveBuyColor(e) : this._active ? this.setBodyBorderActiveSellColor(e) : this.setBodyBorderInactiveSellColor(e), this
                }
                setBodyBorderActiveBuyColor(e) {
                    return this._line.properties().bodyBorderActiveBuyColor.setValue(e), this
                }
                setBodyBorderInactiveBuyColor(e) {
                    return this._line.properties().bodyBorderInactiveBuyColor.setValue(e), this
                }
                setBodyBorderActiveSellColor(e) {
                    return this._line.properties().bodyBorderActiveSellColor.setValue(e), this
                }
                setBodyBorderInactiveSellColor(e) {
                    return this._line.properties().bodyBorderInactiveSellColor.setValue(e), this
                }
                getBodyBackgroundColor() {
                    return s.getColorFromProperties(this._line.properties().bodyBackgroundColor, this._line.properties().bodyBackgroundTransparency)
                }
                setBodyBackgroundColor(e) {
                    return s.setColorToProperties(e, this._line.properties().bodyBackgroundColor, this._line.properties().bodyBackgroundTransparency), this
                }
                getBodyTextColor() {
                    var e = this._line.properties();
                    return "limit" === this._mode ? this._active ? e.bodyTextActiveLimitColor.value() : e.bodyTextInactiveLimitColor.value() : "stop" === this._mode ? this._active ? e.bodyTextActiveStopColor.value() : e.bodyTextInactiveStopColor.value() : "buy" === this._direction ? this._active ? e.bodyTextActiveBuyColor.value() : e.bodyTextInactiveBuyColor.value() : this._active ? e.bodyTextActiveSellColor.value() : e.bodyTextInactiveSellColor.value()
                }
                setBodyTextColor(e) {
                    return "limit" === this._mode ? this._active ? this.setBodyTextActiveLimitColor(e) : this.setBodyTextInactiveLimitColor(e) : "stop" === this._mode ? this._active ? this.setBodyTextActiveStopColor(e) : this.setBodyTextInactiveStopColor(e) : "buy" === this._direction ? this._active ? this.setBodyTextActiveBuyColor(e) : this.setBodyTextInactiveBuyColor(e) : this._active ? this.setBodyTextActiveSellColor(e) : this.setBodyTextInactiveSellColor(e), this
                }
                setBodyTextInactiveLimitColor(e) {
                    return this._line.properties().bodyTextInactiveLimitColor.setValue(e), this
                }
                setBodyTextActiveLimitColor(e) {
                    return this._line.properties().bodyTextActiveLimitColor.setValue(e), this
                }
                setBodyTextInactiveStopColor(e) {
                    return this._line.properties().bodyTextInactiveStopColor.setValue(e), this
                }
                setBodyTextActiveStopColor(e) {
                    return this._line.properties().bodyTextActiveStopColor.setValue(e), this
                }
                setBodyTextInactiveBuyColor(e) {
                    return this._line.properties().bodyTextInactiveBuyColor.setValue(e), this
                }
                setBodyTextActiveBuyColor(e) {
                    return this._line.properties().bodyTextActiveBuyColor.setValue(e), this
                }
                setBodyTextInactiveSellColor(e) {
                    return this._line.properties().bodyTextInactiveSellColor.setValue(e), this
                }
                setBodyTextActiveSellColor(e) {
                    return this._line.properties().bodyTextActiveSellColor.setValue(e), this
                }
                getBodyFont() {
                    return s.getFontFromProperties(this._line.properties().bodyFontFamily, this._line.properties().bodyFontSize, this._line.properties().bodyFontBold, this._line.properties().bodyFontItalic)
                }
                setBodyFont(e) {
                    return s.setFontToProperties(e, this._line.properties().bodyFontFamily, this._line.properties().bodyFontSize, this._line.properties().bodyFontBold, this._line.properties().bodyFontItalic), this
                }
                getQuantityBorderColor() {
                    var e = this._line.properties();
                    return "buy" === this._direction ? this._active ? e.quantityBorderActiveBuyColor.value() : e.quantityBorderInactiveBuyColor.value() : this._active ? e.quantityBorderActiveSellColor.value() : e.quantityBorderInactiveSellColor.value()
                }
                setQuantityBorderColor(e) {
                    return "buy" === this._direction ? this._active ? this.setQuantityBorderActiveBuyColor(e) : this.setQuantityBorderInactiveBuyColor(e) : this._active ? this.setQuantityBorderActiveSellColor(e) : this.setQuantityBorderInactiveSellColor(e), this
                }
                setQuantityBorderActiveBuyColor(e) {
                    return this._line.properties().quantityBorderActiveBuyColor.setValue(e), this
                }
                setQuantityBorderInactiveBuyColor(e) {
                    return this._line.properties().quantityBorderInactiveBuyColor.setValue(e), this
                }
                setQuantityBorderActiveSellColor(e) {
                    return this._line.properties().quantityBorderActiveSellColor.setValue(e), this
                }
                setQuantityBorderInactiveSellColor(e) {
                    return this._line.properties().quantityBorderInactiveSellColor.setValue(e), this
                }
                getQuantityBackgroundColor() {
                    var e = this._line.properties();
                    return "buy" === this._direction ? this._active ? e.quantityBackgroundActiveBuyColor.value() : e.quantityBackgroundInactiveBuyColor.value() : this._active ? e.quantityBackgroundActiveSellColor.value() : e.quantityBackgroundInactiveSellColor.value()
                }
                setQuantityBackgroundColor(e) {
                    return "buy" === this._direction ? this._active ? this.setQuantityBackgroundActiveBuyColor(e) : this.setQuantityBackgroundInactiveBuyColor(e) : this._active ? this.setQuantityBackgroundActiveSellColor(e) : this.setQuantityBackgroundInactiveSellColor(e), this
                }
                setQuantityBackgroundActiveBuyColor(e) {
                    return this._line.properties().quantityBackgroundActiveBuyColor.setValue(e), this
                }
                setQuantityBackgroundInactiveBuyColor(e) {
                    return this._line.properties().quantityBackgroundInactiveBuyColor.setValue(e), this
                }
                setQuantityBackgroundActiveSellColor(e) {
                    return this._line.properties().quantityBackgroundActiveSellColor.setValue(e), this
                }
                setQuantityBackgroundInactiveSellColor(e) {
                    return this._line.properties().quantityBackgroundInactiveSellColor.setValue(e), this
                }
                getQuantityTextColor() {
                    return s.getColorFromProperties(this._line.properties().quantityTextColor, this._line.properties().quantityTextTransparency)
                }
                setQuantityTextColor(e) {
                    return s.setColorToProperties(e, this._line.properties().quantityTextColor, this._line.properties().quantityTextTransparency), this
                }
                getQuantityFont() {
                    return s.getFontFromProperties(this._line.properties().quantityFontFamily, this._line.properties().quantityFontSize, this._line.properties().quantityFontBold, this._line.properties().quantityFontItalic)
                }
                setQuantityFont(e) {
                    return s.setFontToProperties(e, this._line.properties().quantityFontFamily, this._line.properties().quantityFontSize, this._line.properties().quantityFontBold, this._line.properties().quantityFontItalic), this
                }
                getCancelButtonBorderColor() {
                    var e = this._line.properties();
                    return "buy" === this._direction ? this._active ? e.cancelButtonBorderActiveBuyColor.value() : e.cancelButtonBorderInactiveBuyColor.value() : this._active ? e.cancelButtonBorderActiveSellColor.value() : e.cancelButtonBorderInactiveSellColor.value()
                }
                setCancelButtonBorderColor(e) {
                    return "buy" === this._direction ? this._active ? this.setCancelButtonBorderActiveBuyColor(e) : this.setCancelButtonBorderInactiveBuyColor(e) : this._active ? this.setCancelButtonBorderActiveSellColor(e) : this.setCancelButtonBorderInactiveSellColor(e), this
                }
                setCancelButtonBorderActiveBuyColor(e) {
                    return this._line.properties().cancelButtonBorderActiveBuyColor.setValue(e), this
                }
                setCancelButtonBorderInactiveBuyColor(e) {
                    return this._line.properties().cancelButtonBorderInactiveBuyColor.setValue(e), this
                }
                setCancelButtonBorderActiveSellColor(e) {
                    return this._line.properties().cancelButtonBorderActiveSellColor.setValue(e), this
                }
                setCancelButtonBorderInactiveSellColor(e) {
                    return this._line.properties().cancelButtonBorderInactiveSellColor.setValue(e), this
                }
                getCancelButtonBackgroundColor() {
                    return s.getColorFromProperties(this._line.properties().cancelButtonBackgroundColor, this._line.properties().cancelButtonBackgroundTransparency)
                }
                setCancelButtonBackgroundColor(e) {
                    return s.setColorToProperties(e, this._line.properties().cancelButtonBackgroundColor, this._line.properties().cancelButtonBackgroundTransparency), this
                }
                getCancelButtonIconColor() {
                    var e = this._line.properties();
                    return "buy" === this._direction ? this._active ? e.cancelButtonIconActiveBuyColor.value() : e.cancelButtonIconInactiveBuyColor.value() : this._active ? e.cancelButtonIconActiveSellColor.value() : e.cancelButtonIconInactiveSellColor.value()
                }
                setCancelButtonIconColor(e) {
                    return "buy" === this._direction ? this._active ? this.setCancelButtonIconActiveBuyColor(e) : this.setCancelButtonIconInactiveBuyColor(e) : this._active ? this.setCancelButtonIconActiveSellColor(e) : this.setCancelButtonIconInactiveSellColor(e), this
                }
                setCancelButtonIconActiveBuyColor(e) {
                    return this._line.properties().cancelButtonIconActiveBuyColor.setValue(e), this
                }
                setCancelButtonIconInactiveBuyColor(e) {
                    return this._line.properties().cancelButtonIconInactiveBuyColor.setValue(e), this
                }
                setCancelButtonIconActiveSellColor(e) {
                    return this._line.properties().cancelButtonIconActiveSellColor.setValue(e), this
                }
                setCancelButtonIconInactiveSellColor(e) {
                    return this._line.properties().cancelButtonIconInactiveSellColor.setValue(e), this
                }
                block() {
                    this._blocked = !0, this._line.updateAllViewsAndRedraw()
                }
                unblock() {
                    this._blocked = !1, this._line.updateAllViewsAndRedraw()
                }
                getBlocked() {
                    return this._blocked
                }
                isFunction(e) {
                    return "function" == typeof e
                }
                onCancel(e, t) {
                    return t ? this.isFunction(t) && (this._onCancelData = e, this._onCancelCallback = t) : this.isFunction(e) && (this._onCancelCallback = e), this
                }
                callOnCancel() {
                    this.isFunction(this._onCancelCallback) && this._onCancelCallback.call(this, this._onCancelData)
                }
                isOnCancelCallbackPresent() {
                    return this.isFunction(this._onCancelCallback)
                }
                onModify(e, t) {
                    return t ? this.isFunction(t) && (this._onModifyData = e, this._onModifyCallback = t) : this.isFunction(e) && (this._onModifyCallback = e), this
                }
                callOnModify() {
                    this.isFunction(this._onModifyCallback) && this._onModifyCallback.call(this, this._onModifyData)
                }
                onMove(e, t) {
                    return t ? this.isFunction(t) && (this._onMoveData = e, this._onMoveCallback = t) : this.isFunction(e) && (this._onMoveCallback = e), this
                }
                callOnMove() {
                    this.isFunction(this._onMoveCallback) && this._onMoveCallback.call(this, this._onMoveData)
                }
                onContextMenu(e, t) {
                    return t ? this.isFunction(t) && (this._onContextMenuData = e, this._onContextMenuCallback = t) : this.isFunction(e) && (this._onContextMenuCallback = e), this
                }
                shouldShowContextMenu() {
                    return this.isFunction(this._onContextMenuCallback)
                }
                callOnContextMenu() {
                    if (this.isFunction(this._onContextMenuCallback)) return this._onContextMenuCallback.call(this, this._onContextMenuData)
                }
                remove() {
                    this._line._model.removeSource(this._line), delete this._line
                }
            }
            class d extends r {
                constructor(e, t) {
                    super(e, t || d.createProperties()), this._adapter = new u(this), this.setSelectionEnabled(!0), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 836659)).then((({
                        OrderPaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                zorder() {
                    return c
                }
                isSpeciallyZOrderedSource() {
                    return !0
                }
                setPoint(e, t, i) {
                    this._points[e] = t, this.normalizePoints()
                }
                addPoint(e, t) {
                    return this._points.push(e),
                        this._lastPoint = null, this.normalizePoints(), this.createServerPoints(), !0
                }
                name() {
                    return "Order"
                }
                endMoving(e) {
                    var t = this._startMovingPoint && this._currentMovingPoint && this._startMovingPoint.logical.price !== this._currentMovingPoint.logical.price;
                    super.endMoving(), !e && t && this._adapter.callOnMove()
                }
                createPriceAxisView(e) {
                    var t = {
                        pointIndex: e,
                        backgroundPropertyGetter: () => this._adapter.getLineColor()
                    };
                    return this._priceAxisView = new n(this, t), this._priceAxisView
                }
                paneViews() {
                    return TradingView.printing && !a.enabled("snapshot_trading_drawings") ? null : this._model.properties().tradingProperties.showOrders.value() ? o.prototype.paneViews.call(this) : null
                }
                priceAxisViews(e, t) {
                    return TradingView.printing && !a.enabled("snapshot_trading_drawings") ? null : this._model.properties().tradingProperties.showOrders.value() ? o.prototype.priceAxisViews.call(this, e, t) : null
                }
                adapter() {
                    return this._adapter
                }
                hasContextMenu() {
                    return this._adapter.shouldShowContextMenu()
                }
                contextMenuItems() {
                    return this._adapter.callOnContextMenu()
                }
                movable() {
                    return Boolean(this._adapter._onMoveCallback)
                }
                static createProperties(e) {
                    var t = new l("linetoolorder", e, !1, !1);
                    return this._configureProperties(t), t
                }
            }
            t.LineToolOrder = d
        },
        989658: (e, t, i) => {
            i.d(t, {
                LineToolParallelChannel: () => u
            });
            var r = i(650151),
                n = i(86441),
                s = i(87225),
                o = i(480071),
                l = i(892142),
                a = i(758337),
                c = i(988411),
                h = i.n(c);
            class u extends l.LineDataSource {
                constructor(e, t, r, n) {
                    super(e, t || u.createProperties(), r, n), this._alertCreationAvailable = new(h())(super.alertCreationAvailable().value() && this._isTimePointsValid()), this._priceAxisViews.push(this.createPriceAxisView(3)), this._coordOffsetWhileMovingOrChanging = null, this._pendingPriceOffset = null, Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 186340)).then((({
                        ParallelChannelPaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    })), this._normalizedPointsChanged.subscribe(this, (() => this._alertCreationAvailable.setValue(super.alertCreationAvailable().value() && this._isTimePointsValid())))
                }
                alertCreationAvailable() {
                    return this._alertCreationAvailable.readonly()
                }
                paneViews(e) {
                    return null !== this._pendingPriceOffset && this._applyPendingPriceOffset(), super.paneViews(e)
                }
                setLastPoint(e, t) {
                    t && t.shift() && 2 === this.points().length && this._snapPoint45Degree(e, this.points()[0]);
                    const i = (0, a.clone)(e);
                    return super.setLastPoint(e), i
                }
                startMoving(e, t, i, r) {
                    super.startMoving(e, t, i, r), this._coordOffsetWhileMovingOrChanging = this._findPixelsHeight()
                }
                endMoving(e, t, i) {
                    return this._coordOffsetWhileMovingOrChanging = null, super.endMoving(e, t, i)
                }
                startChanging(e, t) {
                    super.startChanging(e, t), this._coordOffsetWhileMovingOrChanging = this._findPixelsHeight()
                }
                endChanging(e, t, i) {
                    return this._coordOffsetWhileMovingOrChanging = null, super.endChanging(e, t, i)
                }
                restoreExternalPoints(e, t, i) {
                    const r = i ? e.points : this._timePoint.map(((t, i) => ({
                        price: t.price,
                        offset: e.points[i].offset,
                        time_t: e.points[i].time_t
                    })));
                    if (super.restoreExternalPoints({ ...e,
                            points: r
                        }, t), t.pricesChanged && this._points.length === r.length)
                        for (let e = 0; e < r.length; e++) this._points[e].price = r[e].price
                }
                restorePoints(e, t, i) {
                    super.restorePoints(e, t, i),
                        this._alertCreationAvailable.setValue(super.alertCreationAvailable().value() && this._isTimePointsValid())
                }
                setPoint(e, t, i, n) {
                    var s;
                    if (this._points[0].index === this._points[1].index && e >= 4) return;
                    this._snapPointBeforeChange(e, t, i);
                    const l = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[0])),
                        a = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[1])),
                        c = (0, r.ensureNotNull)(this.pointToScreenPoint(t)),
                        h = (0, r.ensureNotNull)(this._coordOffsetWhileMovingOrChanging),
                        u = (0, r.ensureNotNull)(this.priceScale()),
                        d = (0, r.ensure)(null === (s = this.ownerSource()) || void 0 === s ? void 0 : s.firstValue());
                    switch (e) {
                        case 0:
                            super.setPoint(e, t, i), this._points[2].price = u.coordinateToPrice(c.y + h, d);
                            break;
                        case 1:
                            super.setPoint(e, t, i);
                            break;
                        case 2:
                            super.setPoint(e, t, i), this._points[0].price = u.coordinateToPrice(c.y - h, d), this._points[0].index = t.index;
                            break;
                        case 3:
                            this._points[1].price = u.coordinateToPrice(c.y - h, d), this._points[1].index = t.index;
                            break;
                        case 4:
                            {
                                const e = a.subtract(l),
                                    t = (c.x - l.x) / e.x,
                                    i = l.addScaled(e, t),
                                    r = c.y - i.y;this._points[2].price = u.coordinateToPrice(l.y + r, d);
                                break
                            }
                        case 5:
                            {
                                const e = a.subtract(l),
                                    t = (c.x - l.x) / e.x,
                                    i = l.addScaled(e, t),
                                    r = c.y - i.y;this._points[0].price = u.coordinateToPrice(l.y + r, d),
                                this._points[1].price = u.coordinateToPrice(a.y + r, d);
                                break
                            }
                    }
                    const p = this.linkKey().value();
                    if (p && !n && e < 4) {
                        const e = this._points.map((e => e.price));
                        (0, o.changeLineStyle)({
                            model: this._model,
                            linkKey: p,
                            state: {
                                prices: e
                            }
                        })
                    }
                }
                state(e) {
                    const t = super.state(e);
                    return this._pendingPriceOffset && (t.priceOffset = this._pendingPriceOffset), t
                }
                restoreExternalState(e) {
                    const {
                        prices: t,
                        ...i
                    } = e;
                    if (t && this.isActualSymbol())
                        for (let e = 0; e < t.length; e++) this._points[e].price = this._timePoint[e].price = t[e];
                    super.restoreExternalState(i)
                }
                restoreData(e) {
                    void 0 !== e.priceOffset && (this._pendingPriceOffset = e.priceOffset)
                }
                getPoint(e) {
                    if (e < 3) return super.getPoint(e);
                    const t = this.pointToScreenPoint(this._points[0]),
                        i = this.pointToScreenPoint(this._points[1]),
                        r = this.pointToScreenPoint(this._points[2]);
                    if (!t || !i || !r) return null;
                    switch (e) {
                        case 3:
                            {
                                const e = r.y - t.y,
                                    s = i.add(new n.Point(0, e));
                                return this.screenPointToPoint(s)
                            }
                        case 4:
                            {
                                const e = r.y - t.y,
                                    s = i.add(new n.Point(0, e)),
                                    o = r.add(s).scaled(.5);
                                return this.screenPointToPoint(o)
                            }
                        case 5:
                            {
                                const e = t.add(i).scaled(.5);
                                return this.screenPointToPoint(e)
                            }
                    }
                    return null
                }
                alignCrossHairToAnchor(e) {
                    return e <= 3
                }
                pointsCount() {
                    return 3
                }
                name() {
                    return "Parallel Channel"
                }
                hasEditableCoordinates() {
                    return !1
                }
                addPoint(e, t, i) {
                    const n = this.points().length;
                    return t && t.shift() && 2 === n && this._snapPoint45Degree(e, this.points()[0]), 2 === this._points.length && (e = this._convertLastPointTo3rdPoint((0, r.ensureNotNull)(this._lastPoint))), super.addPoint(e, t)
                }
                timeAxisPoints() {
                    return this._axisPoints()
                }
                priceAxisPoints() {
                    return this._axisPoints()
                }
                canHasAlert() {
                    return !0
                }
                static createProperties(e) {
                    const t = new s.DefaultProperty("linetoolparallelchannel", e);
                    return this._configureProperties(t), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 405752))).ParallelChannelDefinitionsViewModel
                }
                _getAlertPlots() {
                    const e = this.getPoint(3);
                    if (!e) return [];
                    const t = [this._points[0], this._points[1], this._points[2], e],
                        i = (e, t) => e.index <= t.index ? [e, t] : [t, e],
                        r = i(t[0], t[1]),
                        n = i(t[2], t[3]);
                    let s, o, l, a;
                    t[2].price < t[0].price ? (o = n, s = r) : (o = r, s = n);
                    const c = this.properties().childs().extendLeft.value(),
                        h = this.properties().childs().extendRight.value();
                    return t[0].index <= t[1].index ? (l = c, a = h) : (l = h, a = c), [this._linePointsToAlertPlot(s, "Upper", l, a), this._linePointsToAlertPlot(o, "Lower", l, a)].filter((e => null !== e))
                }
                _correctLastPoint(e) {
                    if (this._points.length < 2 || this._points[1].index === this._points[0].index) return e;
                    const t = (0, r.ensureNotNull)(this.pointToScreenPoint(e)),
                        i = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[1])),
                        s = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[0])),
                        o = i.subtract(s),
                        l = (t.x - s.x) / o.x,
                        a = s.addScaled(o, l),
                        c = t.y - a.y,
                        h = s.add(new n.Point(0, c));
                    return (0, r.ensureNotNull)(this.screenPointToPoint(h))
                }
                _isTimePointsValid() {
                    return this._timePoint.every((e => Number.isFinite(e.price)))
                }
                _axisPoints() {
                    const e = this.points(),
                        t = this._points[0] ? this.pointToScreenPoint(this._points[0]) : null,
                        i = this._points[1] ? this.pointToScreenPoint(this._points[1]) : null,
                        s = this._points[2] ? this.pointToScreenPoint(this._points[2]) : null;
                    if (t && i && s) {
                        const o = i.y - t.y,
                            l = s.add(new n.Point(0, o));
                        e.push((0, r.ensureNotNull)(this.screenPointToPoint(l)))
                    }
                    return e
                }
                _convertLastPointTo3rdPoint(e) {
                    const t = (0, r.ensureNotNull)(this.pointToScreenPoint(e)),
                        i = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[1])),
                        s = (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[0])),
                        o = i.subtract(s),
                        l = (t.x - s.x) / o.x,
                        a = s.addScaled(o, l),
                        c = t.y - a.y,
                        h = s.add(new n.Point(0, c));
                    return (0, r.ensureNotNull)(this.screenPointToPoint(h))
                }
                _findPixelsHeight() {
                    const e = this.pointToScreenPoint(this._points[2]),
                        t = this.pointToScreenPoint(this._points[0]);
                    return e && t ? e.y - t.y : null
                }
                _applyPendingPriceOffset() {
                    const e = this._pendingPriceOffset;
                    if (null === e || this._points.length < 3) return;
                    const t = this.priceScale(),
                        i = (0, r.ensureNotNull)(this.ownerSource()).firstValue();
                    if (!t || t.isEmpty() || null === i) return;
                    const n = e + this._points[0].price,
                        s = e + this._points[1].price,
                        o = .5 * (n + s) - e,
                        l = .5 * (n + s),
                        a = t.priceToCoordinate(o, i),
                        c = t.priceToCoordinate(l, i) - a,
                        h = t.priceToCoordinate(this._points[0].price, i) + c,
                        u = t.coordinateToPrice(h, i);
                    this._points[2].price = u, this._timePoint[2].price = u, this._points[2].index = this._points[0].index, this._timePoint[2].time_t = this._timePoint[0].time_t, this._timePoint[2].offset = this._timePoint[0].offset, this._pendingPriceOffset = null
                }
                _snapPointBeforeChange(e, t, i) {
                    if (i && i.shift()) switch (e) {
                        case 0:
                        case 1:
                            this._snapPoint45Degree(t, this._points[1 - e]);
                            break;
                        case 2:
                        case 3:
                            const i = (0, r.ensureNotNull)(this.getPoint(5 - e));
                            this._snapPoint45Degree(t, i)
                    }
                }
            }
        },
        132455: (e, t, i) => {
            i.d(t, {
                LineToolPath: () => c
            });
            var r = i(650151),
                n = i(86441),
                s = i(87225),
                o = i(837291),
                l = i(892142),
                a = i(241056);
            class c extends l.LineDataSource {
                constructor(e, t, r, n) {
                    const s = t || c.createProperties();
                    super(e, s, r, n), this._finished = !1, Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 415036)).then((t => {
                        this._setPaneViews([new t.PathPaneView(this, e)])
                    }))
                }
                pointsCount() {
                    return -1
                }
                name() {
                    return "Path"
                }
                hasEditableCoordinates() {
                    return !1
                }
                finish() {
                    this._finished = !0, this._lastPoint = null, this.normalizePoints(), this.createServerPoints()
                }
                addPoint(e, t, i) {
                    var s;
                    if (this._finished) return !0;
                    const l = (0, r.ensureNotNull)(this.priceScale()),
                        a = this._model.timeScale().indexToCoordinate(e.index),
                        c = e.price,
                        h = (0, r.ensure)(null === (s = this.ownerSource()) || void 0 === s ? void 0 : s.firstValue()),
                        u = l.priceToCoordinate(c, h);
                    if (this._points.length > 0) {
                        const e = this._points[this._points.length - 1],
                            i = this._model.timeScale().indexToCoordinate(e.index),
                            r = e.price,
                            s = l.priceToCoordinate(r, h),
                            c = new n.Point(a, u).subtract(new n.Point(i, s)).length();
                        if (!(null == t ? void 0 : t.isApiEvent()) && c < (0, o.interactionTolerance)().minDistanceBetweenPoints) return this._lastPoint = null, this.normalizePoints(), this.createServerPoints(), !0
                    }
                    return super.addPoint(e, t, i)
                }
                static createProperties(e) {
                    const t = new s.DefaultProperty("linetoolpath", e);
                    return this._configureProperties(t), t
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 362169)).then((e => e.PathDefinitionsViewModel))
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.addChild("linesWidths", new a.LineToolWidthsProperty([(0, r.ensureDefined)(e.child("lineWidth"))])), e.addChild("linesColors", new a.LineToolColorsProperty([e.childs().lineColor]))
                }
            }
        },
        133823: (e, t, i) => {
            var r = i(683890).TranslatedString,
                n = i(892142).LineDataSource,
                s = i(955130).LevelsProperty,
                o = i(241056),
                l = o.LineToolWidthsProperty,
                a = o.LineToolColorsProperty,
                c = new r("erase level line", i(777754).t(null, void 0, i(812962)));
            class h extends n {
                constructor(e, t, r, n) {
                    super(e, t || h.createProperties(), r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 897399)).then((({
                        PitchfanLinePaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                levelsCount() {
                    return h.LevelsCount
                }
                pointsCount() {
                    return 3
                }
                name() {
                    return "Pitchfan"
                }
                processErase(e, t) {
                    var i = "level" + t,
                        r = this.properties()[i].visible;
                    e.setProperty(r, !1, c)
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 990975))).PitchBaseDefinitionsViewModel
                }
                static createProperties(e) {
                    var t = new s("linetoolpitchfan", e, !1, {
                        range: [0, 8]
                    });
                    return this._configureProperties(t), t
                }
                static _configureProperties(e) {
                    super._configureProperties(e);
                    for (var t = [e.child("median").child("linewidth")], i = [e.child("median").child("color")], r = 0; r <= this.LevelsCount; r++) t.push(e.child("level" + r).child("linewidth")), i.push(e.child("level" + r).child("color"));
                    e.addChild("linesColors", new a(i)), e.addChild("linesWidths", new l(t))
                }
            }
            h.LevelsCount = 8, t.LineToolPitchfan = h
        },
        822296: (e, t, i) => {
            var r = i(683890).TranslatedString,
                n = i(892142).LineDataSource,
                s = i(955130).LevelsProperty,
                o = i(310399).Action,
                l = i(617735).ACTION_ID,
                a = i(560554).LineToolPitchforkStyle,
                c = null,
                h = i(241056),
                u = h.LineToolWidthsProperty,
                d = h.LineToolColorsProperty,
                p = new r("erase level line", i(777754).t(null, void 0, i(812962))),
                _ = new r("change {title} style", i(777754).t(null, void 0, i(474428)));
            class P extends n {
                constructor(e, t, i, r) {
                    super(e, t || P.createProperties(), i, r), this._properties.style.listeners().subscribe(this, this._recreatePaneView), this._recreatePaneView()
                }
                levelsCount() {
                    return P.LevelsCount
                }
                additionalActions(e) {
                    for (var t = [], n = [{
                            title: i(777754).t(null, void 0, i(825595)),
                            actionId: l.ChartLineToolPitchforkChangeTypeToOriginal
                        }, {
                            title: i(777754).t(null, void 0, i(966276)),
                            actionId: l.ChartLineToolPitchforkChangeTypeToModifiedSchiff
                        }, {
                            title: i(777754).t(null, void 0, i(809114)),
                            actionId: l.ChartLineToolPitchforkChangeTypeToInside
                        }, {
                            title: i(777754).t(null, void 0, i(151464)),
                            actionId: l.ChartLineToolPitchforkChangeTypeToSchiff
                        }], s = 0; s < 4; s++) {
                        var a = new o({
                            actionId: n[s].actionId,
                            checked: this.properties().style.value() === s,
                            checkable: !0,
                            label: n[s].title,
                            payload: {
                                target: this,
                                value: s
                            },
                            onExecute: function(t) {
                                var i = t.getPayload(),
                                    n = i.target;
                                e.setProperty(n.properties().style, i.value, _.format({
                                    title: new r(n.name(), n.title())
                                })), n.updateAllViews(), n._model.updateSource(n)
                            }
                        });
                        t.push(a)
                    }
                    return [t[0], t[3], t[1], t[2]]
                }
                _recreatePaneView() {
                    if (null !== c) {
                        var e = [];
                        this._properties.style.value() === a.Original ? e = [new c.PitchforkLinePaneView(this, this._model)] : this._properties.style.value() === a.Schiff ? e = [new c.SchiffPitchforkLinePaneView(this, this._model)] : this._properties.style.value() === a.Schiff2 ? e = [new c.SchiffPitchfork2LinePaneView(this, this._model)] : this._properties.style.value() === a.Inside && (e = [new c.InsidePitchforkLinePaneView(this, this._model)]), this._setPaneViews(e)
                    } else Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 455359)).then((e => {
                        null === c && (c = e), this._recreatePaneView()
                    }))
                }
                pointsCount() {
                    return 3
                }
                name() {
                    return "Pitchfork"
                }
                processErase(e, t) {
                    var i = "level" + t,
                        r = this.properties()[i].visible;
                    e.setProperty(r, !1, p)
                }
                static createProperties(e) {
                    var t = new s("linetoolpitchfork", e, !1, {
                        range: [0, 8]
                    });
                    return this._configureProperties(t), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 225230))).PitchForkDefinitionsViewModel
                }
                static _configureProperties(e) {
                    super._configureProperties(e);
                    for (var t = [e.child("median").child("linewidth")], i = [e.child("median").child("color")], r = 0; r <= this.LevelsCount; r++) t.push(e.child("level" + r).child("linewidth")), i.push(e.child("level" + r).child("color"));
                    e.addChild("linesColors", new d(i)), e.addChild("linesWidths", new u(t))
                }
            }
            P.LevelsCount = 8, t.LineToolPitchfork = P
        },
        794888: (e, t, i) => {
            i.d(t, {
                LineToolPolyline: () => a
            });
            var r = i(650151),
                n = i(86441),
                s = i(87225),
                o = i(837291),
                l = i(892142);
            class a extends l.LineDataSource {
                constructor(e, t, r, n) {
                    const s = t || a.createProperties();
                    super(e, s, r, n), this._finished = !1,
                        Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 876503)).then((t => {
                            this._setPaneViews([new t.PolylinePaneView(this, e)])
                        }))
                }
                pointsCount() {
                    return -1
                }
                name() {
                    return "Polyline"
                }
                hasEditableCoordinates() {
                    return !1
                }
                finish() {
                    this._finished = !0, this._lastPoint = null, this.normalizePoints(), this.createServerPoints()
                }
                addPoint(e, t, i) {
                    var s;
                    if (this._finished) return !0;
                    const l = (0, r.ensureNotNull)(this.priceScale()),
                        a = this._model.timeScale().indexToCoordinate(e.index),
                        c = e.price,
                        h = (0, r.ensure)(null === (s = this.ownerSource()) || void 0 === s ? void 0 : s.firstValue()),
                        u = l.priceToCoordinate(c, h),
                        d = (0, o.interactionTolerance)().minDistanceBetweenPoints;
                    if (this._points.length > 0) {
                        const e = this._points[this._points.length - 1],
                            i = this._model.timeScale().indexToCoordinate(e.index),
                            r = e.price,
                            s = l.priceToCoordinate(r, h),
                            o = new n.Point(a, u).subtract(new n.Point(i, s)).length();
                        if (!(null == t ? void 0 : t.isApiEvent()) && o < d) return this._lastPoint = null, this.normalizePoints(), this.createServerPoints(), !0;
                        const c = this._points[0],
                            p = this._model.timeScale().indexToCoordinate(c.index),
                            _ = l.priceToCoordinate(c.price, h),
                            P = new n.Point(a, u).subtract(new n.Point(p, _)).length();
                        if (!(null == t ? void 0 : t.isApiEvent()) && P < d) return this.properties().childs().filled.setValue(!0), this._lastPoint = null, this.normalizePoints(), this.createServerPoints(), !0
                    }
                    return super.addPoint(e, t, i)
                }
                setPoint(e, t, i) {
                    var s;
                    super.setPoint(e, t, i);
                    const l = this.priceScale();
                    if (!(this._model.timeScale().isEmpty() || null === l || l.isEmpty() || e !== this._points.length - 1 && 0 !== e)) {
                        const i = (0, r.ensure)(null === (s = this.ownerSource()) || void 0 === s ? void 0 : s.firstValue()),
                            a = this._model.timeScale().indexToCoordinate(t.index),
                            c = l.priceToCoordinate(t.price, i),
                            h = e === this._points.length - 1 ? this._points[0] : this._points[this._points.length - 1],
                            u = this._model.timeScale().indexToCoordinate(h.index),
                            d = l.priceToCoordinate(h.price, i);
                        new n.Point(a, c).subtract(new n.Point(u, d)).length() < (0, o.interactionTolerance)().minDistanceBetweenPoints && this.properties().childs().filled.setValue(!0)
                    }
                }
                static createProperties(e) {
                    const t = new s.DefaultProperty("linetoolpolyline", e);
                    return this._configureProperties(t), t
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 43416)).then((e => e.PolylinesDefinitionsViewModel))
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.addExclusion("filled")
                }
            }
        },
        633999: (e, t, i) => {
            i.d(t, {
                PositionAveragePriceAxisView: () => n
            });
            var r = i(861765);
            class n extends r.LineToolPriceAxisView {
                _formatPrice(e, t) {
                    return this._source.formatter().format(e)
                }
            }
        },
        969876: (e, t, i) => {
            var r = i(327867).LineToolTrading,
                n = i(892142).LineDataSource,
                s = i(633999).PositionAveragePriceAxisView,
                o = i(56155),
                l = i(87225).DefaultProperty,
                a = i(831471).PriceFormatter;
            const c = i(495046);
            var h = i(569523).sortSourcesPreOrdered.LineToolPosition;

            function u(e) {
                return null == e ? e = "" : e += "", e
            }
            class d {
                constructor(e) {
                    this._line = e, this._data = {
                        bodyText: "position",
                        quantityText: "0"
                    }, this._closeEnabled = !0, this._direction = "buy", this._profitState = "neutral"
                }
                setDirection(e) {
                    return this._direction = e,
                        this._line.updateAllViewsAndRedraw(), this
                }
                setProfitState(e) {
                    return this._profitState = e, this._line.updateAllViewsAndRedraw(), this
                }
                getPrice() {
                    return this._line.points().length > 0 ? this._line.points()[0].price : this._line._timePoint.length > 0 ? this._line._timePoint[0].price : void 0
                }
                setPrice(e) {
                    if (this._line.points().length > 0) {
                        var t = this._line.points()[0];
                        t.price = e, this._line._points[0] = t, this._line.normalizePoints(), this._line.updateAllViewsAndRedraw()
                    }
                    return this._line._timePoint.length > 0 && (this._line._timePoint[0].price = e), this
                }
                getText() {
                    return this._data.bodyText
                }
                setText(e) {
                    return this._data.bodyText = e || "", this._line.updateAllViewsAndRedraw(), this
                }
                setTooltip(e) {
                    return this._line.properties().tooltip.setValue(u(e)), this
                }
                getTooltip() {
                    return this._line.properties().tooltip.value()
                }
                setProtectTooltip(e) {
                    return this._line.properties().protectTooltip.setValue(u(e)), this
                }
                getProtectTooltip() {
                    return this._line.properties().protectTooltip.value()
                }
                setCloseTooltip(e) {
                    return this._line.properties().closeTooltip.setValue(u(e)), this
                }
                getCloseTooltip() {
                    return this._line.properties().closeTooltip.value()
                }
                setReverseTooltip(e) {
                    return this._line.properties().reverseTooltip.setValue(u(e)), this
                }
                getReverseTooltip() {
                    return this._line.properties().reverseTooltip.value()
                }
                getQuantity() {
                    return this._data.quantityText
                }
                setQuantity(e) {
                    return this._data.quantityText = e || "", this._line.updateAllViewsAndRedraw(), this
                }
                getExtendLeft() {
                    var e = this._line.properties().extendLeft.value();
                    return "inherit" === e ? this._line._model.properties().tradingProperties.extendLeft.value() : e
                }
                setExtendLeft(e) {
                    return this._line.properties().extendLeft.setValue(e), this
                }
                getLineLength() {
                    var e = this._line.properties().lineLength.value();
                    return "inherit" === e ? this._line._model.properties().tradingProperties.lineLength.value() : e
                }
                setLineLength(e) {
                    return this._line.properties().lineLength.setValue(Math.max(0, Math.min(e, 100))), this
                }
                getLineColor() {
                    var e = this._line.properties();
                    return ("buy" === this._direction ? e.lineBuyColor : e.lineSellColor).value()
                }
                setLineColor(e) {
                    return "buy" === this._direction ? this.setLineBuyColor(e) : this.setLineSellColor(e), this
                }
                setLineBuyColor(e) {
                    return this._line.properties().lineBuyColor.setValue(e), this
                }
                setLineSellColor(e) {
                    return this._line.properties().lineSellColor.setValue(e), this
                }
                getLineStyle() {
                    var e = this._line.properties().lineStyle.value();
                    return "inherit" === e ? this._line._model.properties().tradingProperties.lineStyle.value() : e
                }
                setLineStyle(e) {
                    return this._line.properties().lineStyle.setValue(e), this
                }
                getLineWidth() {
                    var e = this._line.properties().lineWidth.value();
                    return "inherit" === e ? this._line._model.properties().tradingProperties.lineWidth.value() : e
                }
                setLineWidth(e) {
                    return this._line.properties().lineWidth.setValue(e), this
                }
                getBodyBorderColor() {
                    var e = this._line.properties();
                    return ("buy" === this._direction ? e.bodyBorderBuyColor : e.bodyBorderSellColor).value()
                }
                setBodyBorderColor(e) {
                    return "buy" === this._direction ? this.setBodyBorderBuyColor(e) : this.setBodyBorderSellColor(e), this
                }
                setBodyBorderBuyColor(e) {
                    return this._line.properties().bodyBorderBuyColor.setValue(e), this
                }
                setBodyBorderSellColor(e) {
                    return this._line.properties().bodyBorderSellColor.setValue(e), this
                }
                getBodyBackgroundColor() {
                    return o.getColorFromProperties(this._line.properties().bodyBackgroundColor, this._line.properties().bodyBackgroundTransparency)
                }
                setBodyBackgroundColor(e) {
                    return o.setColorToProperties(e, this._line.properties().bodyBackgroundColor, this._line.properties().bodyBackgroundTransparency), this
                }
                getBodyTextColor() {
                    var e = this._line.properties();
                    return ("positive" === this._profitState ? e.bodyTextPositiveColor : "negative" === this._profitState ? e.bodyTextNegativeColor : e.bodyTextNeutralColor).value()
                }
                setBodyTextColor(e) {
                    return "positive" === this._profitState ? this.setBodyTextPositiveColor(e) : "negative" === this._profitState ? this.setBodyTextNegativeColor(e) : this.setBodyTextNeutralColor(e), this
                }
                setBodyTextPositiveColor(e) {
                    return this._line.properties().bodyTextPositiveColor.setValue(e), this
                }
                setBodyTextNegativeColor(e) {
                    return this._line.properties().bodyTextNegativeColor.setValue(e), this
                }
                setBodyTextNeutralColor(e) {
                    return this._line.properties().bodyTextNeutralColor.setValue(e), this
                }
                getBodyFont() {
                    return o.getFontFromProperties(this._line.properties().bodyFontFamily, this._line.properties().bodyFontSize, this._line.properties().bodyFontBold, this._line.properties().bodyFontItalic)
                }
                setBodyFont(e) {
                    return o.setFontToProperties(e, this._line.properties().bodyFontFamily, this._line.properties().bodyFontSize, this._line.properties().bodyFontBold, this._line.properties().bodyFontItalic), this
                }
                getQuantityBorderColor() {
                    var e = this._line.properties();
                    return ("buy" === this._direction ? e.quantityBorderBuyColor : e.quantityBorderSellColor).value()
                }
                setQuantityBorderColor(e) {
                    return "buy" === this._direction ? this.setQuantityBorderBuyColor(e) : this.setQuantityBorderSellColor(e), this
                }
                setQuantityBorderBuyColor(e) {
                    return this._line.properties().quantityBorderBuyColor.setValue(e), this
                }
                setQuantityBorderSellColor(e) {
                    return this._line.properties().quantityBorderSellColor.setValue(e), this
                }
                getQuantityBackgroundColor() {
                    var e = this._line.properties();
                    return ("buy" === this._direction ? e.quantityBackgroundBuyColor : e.quantityBackgroundSellColor).value()
                }
                setQuantityBackgroundColor(e) {
                    return "buy" === this._direction ? this.setQuantityBackgroundBuyColor(e) : this.setQuantityBackgroundSellColor(e), this
                }
                setQuantityBackgroundBuyColor(e) {
                    return this._line.properties().quantityBackgroundBuyColor.setValue(e), this
                }
                setQuantityBackgroundSellColor(e) {
                    return this._line.properties().quantityBackgroundSellColor.setValue(e), this
                }
                getQuantityTextColor() {
                    return o.getColorFromProperties(this._line.properties().quantityTextColor, this._line.properties().quantityTextTransparency)
                }
                setQuantityTextColor(e) {
                    return o.setColorToProperties(e, this._line.properties().quantityTextColor, this._line.properties().quantityTextTransparency), this
                }
                getQuantityFont() {
                    return o.getFontFromProperties(this._line.properties().quantityFontFamily, this._line.properties().quantityFontSize, this._line.properties().quantityFontBold, this._line.properties().quantityFontItalic)
                }
                setQuantityFont(e) {
                    return o.setFontToProperties(e, this._line.properties().quantityFontFamily, this._line.properties().quantityFontSize, this._line.properties().quantityFontBold, this._line.properties().quantityFontItalic), this
                }
                getReverseButtonBorderColor() {
                    var e = this._line.properties();
                    return ("buy" === this._direction ? e.reverseButtonBorderBuyColor : e.reverseButtonBorderSellColor).value()
                }
                setReverseButtonBorderColor(e) {
                    return "buy" === this._direction ? this.setReverseButtonBorderBuyColor(e) : this.setReverseButtonBorderSellColor(e), this
                }
                setReverseButtonBorderBuyColor(e) {
                    return this._line.properties().reverseButtonBorderBuyColor.setValue(e), this
                }
                setReverseButtonBorderSellColor(e) {
                    return this._line.properties().reverseButtonBorderSellColor.setValue(e), this
                }
                getReverseButtonBackgroundColor() {
                    return o.getColorFromProperties(this._line.properties().reverseButtonBackgroundColor, this._line.properties().reverseButtonBackgroundTransparency)
                }
                setReverseButtonBackgroundColor(e) {
                    return o.setColorToProperties(e, this._line.properties().reverseButtonBackgroundColor, this._line.properties().reverseButtonBackgroundTransparency), this
                }
                getReverseButtonIconColor() {
                    var e = this._line.properties();
                    return ("buy" === this._direction ? e.reverseButtonIconBuyColor : e.reverseButtonIconSellColor).value()
                }
                setReverseButtonIconColor(e) {
                    return "buy" === this._direction ? this.setReverseButtonIconBuyColor(e) : this.setReverseButtonIconSellColor(e), this
                }
                setReverseButtonIconBuyColor(e) {
                    return this._line.properties().reverseButtonIconBuyColor.setValue(e), this
                }
                setReverseButtonIconSellColor(e) {
                    return this._line.properties().reverseButtonIconSellColor.setValue(e), this
                }
                getCloseButtonBorderColor() {
                    var e = this._line.properties();
                    return ("buy" === this._direction ? e.closeButtonBorderBuyColor : e.closeButtonBorderSellColor).value()
                }
                setCloseButtonBorderColor(e) {
                    return "buy" === this._direction ? this.setCloseButtonBorderBuyColor(e) : this.setCloseButtonBorderSellColor(e), this
                }
                setCloseButtonBorderBuyColor(e) {
                    return this._line.properties().closeButtonBorderBuyColor.setValue(e), this
                }
                setCloseButtonBorderSellColor(e) {
                    return this._line.properties().closeButtonBorderSellColor.setValue(e), this
                }
                getCloseButtonBackgroundColor() {
                    return o.getColorFromProperties(this._line.properties().closeButtonBackgroundColor, this._line.properties().closeButtonBackgroundTransparency)
                }
                setCloseButtonBackgroundColor(e) {
                    return o.setColorToProperties(e, this._line.properties().closeButtonBackgroundColor, this._line.properties().closeButtonBackgroundTransparency), this
                }
                getCloseButtonIconColor() {
                    var e = this._line.properties();
                    return ("buy" === this._direction ? e.closeButtonIconBuyColor : e.closeButtonIconSellColor).value()
                }
                setCloseButtonIconColor(e) {
                    return "buy" === this._direction ? this.setCloseButtonIconBuyColor(e) : this.setCloseButtonIconSellColor(e), this
                }
                setCloseButtonIconBuyColor(e) {
                    return this._line.properties().closeButtonIconBuyColor.setValue(e), this
                }
                setCloseButtonIconSellColor(e) {
                    return this._line.properties().closeButtonIconSellColor.setValue(e), this
                }
                block() {
                    this._blocked = !0, this._line.updateAllViewsAndRedraw()
                }
                unblock() {
                    this._blocked = !1,
                        this._line.updateAllViewsAndRedraw()
                }
                isFunction(e) {
                    return "function" == typeof e
                }
                onReverse(e, t) {
                    return t ? this.isFunction(t) && (this._onReverseData = e, this._onReverseCallback = t) : this.isFunction(e) && (this._onReverseCallback = e), this
                }
                callOnReverse() {
                    this.isFunction(this._onReverseCallback) && this._onReverseCallback.call(this, this._onReverseData)
                }
                isOnReverseCallbackPresent() {
                    return this.isFunction(this._onReverseCallback)
                }
                onClose(e, t) {
                    return t ? this.isFunction(t) && (this._onCloseData = e, this._onCloseCallback = t) : this.isFunction(e) && (this._onCloseCallback = e), this
                }
                setCloseEnabled(e) {
                    return this._closeEnabled === e || (this._closeEnabled = e, this._onCloseCallback && this._line.updateAllViewsAndRedraw()), this
                }
                isCloseEnabled() {
                    return this._closeEnabled
                }
                callOnClose() {
                    this.isFunction(this._onCloseCallback) && this._closeEnabled && this._onCloseCallback.call(this, this._onCloseData)
                }
                isOnCloseCallbackPresent() {
                    return this._closeEnabled && this.isFunction(this._onCloseCallback)
                }
                onModify(e, t) {
                    return t ? this.isFunction(t) && (this._onModifyData = e, this._onModifyCallback = t) : this.isFunction(e) && (this._onModifyCallback = e), this
                }
                callOnModify() {
                    this.isFunction(this._onModifyCallback) && this._onModifyCallback.call(this, this._onModifyData)
                }
                onContextMenu(e, t) {
                    return t ? this.isFunction(t) && (this._onContextMenuData = e, this._onContextMenuCallback = t) : this.isFunction(e) && (this._onContextMenuCallback = e), this
                }
                shouldShowContextMenu() {
                    return this.isFunction(this._onContextMenuCallback)
                }
                callOnContextMenu() {
                    if (this.isFunction(this._onContextMenuCallback)) return this._onContextMenuCallback.call(this, this._onContextMenuData)
                }
                remove() {
                    this._line._model.removeSource(this._line), delete this._line
                }
            }
            class p extends r {
                constructor(e, t) {
                    super(e, t || p.createProperties()), this._adapter = new d(this), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.t.bind(i, 173708, 19)).then((({
                        PositionPaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }));
                    var r = e.mainSeries().symbolInfo(),
                        n = null !== r ? r.pricescale : 100,
                        s = null !== r && r.fractional ? r.minmov : 1,
                        o = null !== r && r.fractional,
                        l = null !== r ? r.minmove2 : void 0;
                    this._formatter = new a(n, s, o, l)
                }
                zorder() {
                    return h
                }
                isSpeciallyZOrderedSource() {
                    return !0
                }
                setPoint(e, t, i) {
                    this._points[e] = t, this.normalizePoints()
                }
                addPoint(e, t) {
                    return this._points.push(e), this._lastPoint = null, this.normalizePoints(), this.createServerPoints(), !0
                }
                name() {
                    return "Position"
                }
                createPriceAxisView(e) {
                    return this._priceAxisView = new s(this, {
                        pointIndex: e,
                        backgroundPropertyGetter: () => this._adapter.getLineColor()
                    }), this._priceAxisView
                }
                paneViews() {
                    return TradingView.printing && !c.enabled("snapshot_trading_drawings") ? null : this._model.properties().tradingProperties.showPositions.value() ? n.prototype.paneViews.call(this) : null
                }
                priceAxisViews(e, t) {
                    return TradingView.printing && !c.enabled("snapshot_trading_drawings") ? null : this._model.properties().tradingProperties.showPositions.value() ? n.prototype.priceAxisViews.call(this, e, t) : null
                }
                hasContextMenu() {
                    return this._adapter.shouldShowContextMenu()
                }
                contextMenuItems() {
                    return this._adapter.callOnContextMenu()
                }
                formatter() {
                    return this._formatter
                }
                static createProperties(e) {
                    var t = new l("linetoolposition", e, !1, !1);
                    return this._configureProperties(t), t
                }
            }
            t.LineToolPosition = p
        },
        508373: (e, t, i) => {
            var r, n;
            i.r(t), i.d(t, {
                    AlertStatus: () => r,
                    Direction: () => n
                }),
                function(e) {
                    e[e.Waiting = 0] = "Waiting", e[e.Success = 1] = "Success", e[e.Failure = 2] = "Failure"
                }(r || (r = {})),
                function(e) {
                    e[e.Up = 1] = "Up", e[e.Down = 2] = "Down"
                }(n || (n = {}))
        },
        113534: (e, t, i) => {
            var r = i(650151).ensureNotNull,
                n = i(892142).LineDataSource,
                s = i(87225).DefaultProperty,
                o = i(508373);
            class l extends n {
                constructor(e, t, r, n) {
                    super(e, t || l.createProperties(), r, n), this._predictionPaneView = null;
                    const s = this._model.mainSeries();
                    s.properties().interval.subscribe(this, (() => {
                        this.setStatus(o.AlertStatus.Waiting)
                    })), s.dataEvents().dataUpdated().subscribe(this, this.recalculateStateByData), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.t.bind(i, 829165, 19)).then((({
                        PredictionPaneView: e
                    }) => {
                        this._predictionPaneView = new e(this, this._model), this._setPaneViews([this._predictionPaneView])
                    }))
                }
                destroy() {
                    const e = this._model.mainSeries();
                    e.properties().interval.unsubscribeAll(this), e.dataEvents().dataUpdated().unsubscribeAll(this), super.destroy()
                }
                dataAndViewsReady() {
                    return super.dataAndViewsReady() && this._predictionPaneView && this._predictionPaneView.iconsReady()
                }
                isSynchronizable() {
                    return !1
                }
                status() {
                    return this._properties.status.value()
                }
                setStatus(e) {
                    return this._properties.status.setValue(e)
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Forecast"
                }
                restorePoints(e, t, i) {
                    super.restorePoints(e, t, i), this.recalculateStateByData()
                }
                recalculateStateByData() {
                    if (!this.isSourceHidden() && !(this._points.length < 2 || this._model.mainSeries().bars().isEmpty())) {
                        var e = this._points[1];
                        if (this.status()) e.index > this._model.timeScale().baseIndex() && this.setStatus(o.AlertStatus.Waiting);
                        else {
                            var t = this._model.mainSeries().bars().valueAt(e.index);
                            if (null !== t) {
                                var i = this.direction();
                                if (i === o.Direction.Up && t[TradingView.HIGH_PLOT] >= e.price) this.setStatus(o.AlertStatus.Success);
                                else if (i === o.Direction.Down && t[TradingView.LOW_PLOT] <= e.price) this.setStatus(o.AlertStatus.Success);
                                else {
                                    var n = r(this._model.mainSeries().bars().lastIndex());
                                    e.index !== n && this.setStatus(o.AlertStatus.Failure)
                                }
                            }
                        }
                    }
                }
                addPoint(e) {
                    var t = super.addPoint(e);
                    return t && this.recalculateStateByData(), t
                }
                endChanging() {
                    super.endChanging(), this.setStatus(o.AlertStatus.Waiting), this.recalculateStateByData()
                }
                onData(e) {
                    super.onData(e), this.recalculateStateByData()
                }
                endMoving(e, t, i) {
                    super.endMoving(e, t, i), this.setStatus(o.AlertStatus.Waiting), this.recalculateStateByData()
                }
                direction() {
                    if (this.points().length < 2) return o.Direction.Up;
                    var e = this.points()[0];
                    return this.points()[1].price > e.price ? o.Direction.Up : o.Direction.Down
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 371680))).PredictionDefinitionsViewModel
                }
                cloneable() {
                    return !1
                }
                static createProperties(e) {
                    var t = new s("linetoolprediction", e);
                    return this._configureProperties(t), t
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.merge({
                        status: o.AlertStatus.Waiting
                    })
                }
            }
            t.LineToolPrediction = l
        },
        207889: (e, t, i) => {
            var r = i(892142).LineDataSource,
                n = i(87225).DefaultProperty,
                s = i(241056).LineToolColorsProperty;
            class o extends r {
                constructor(e, t, r, n) {
                    super(e, t || o.createProperties(), r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.t.bind(i, 248360, 19)).then((({
                        PriceLabelPaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                pointsCount() {
                    return 1
                }
                name() {
                    return "Price Label"
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 480536))).PriceLabelDefinitionsViewModel
                }
                static createProperties(e) {
                    var t = new n("linetoolpricelabel", e);
                    return this._configureProperties(t), t
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.addChild("linesColors", new s([e.childs().borderColor])), e.addChild("textsColors", new s([e.childs().color]))
                }
            }
            t.LineToolPriceLabel = o
        },
        155075: (e, t, i) => {
            i.d(t, {
                LineToolPriceNote: () => c
            });
            var r = i(650151),
                n = i(87225),
                s = i(40210),
                o = i.n(s),
                l = i(892142),
                a = i(404822);
            class c extends l.LineDataSource {
                constructor(e, t, r, n) {
                    super(e, t || c.createProperties(), r, n), this._labelMovingDelta = null, Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 982756)).then((t => {
                        this._setPaneViews([new t.PriceNotePaneView(this, e)])
                    }))
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Price Note"
                }
                template() {
                    const e = super.template();
                    return e.text = this.properties().childs().text.value(), e
                }
                startMoving(e, t, i) {
                    if (1 === t) {
                        if (this.isSourceHidden()) return;
                        const i = (0, r.ensureDefined)(e.logical),
                            n = this.points()[1];
                        this._labelMovingDelta = {
                            index: n.index - i.index,
                            price: n.price - i.price
                        }, this.startChanging(t, i)
                    } else this._labelMovingDelta = null, super.startMoving(e, t, i)
                }
                move(e, t, i) {
                    if (null !== this._labelMovingDelta) {
                        const t = (0, r.ensureDefined)(e.logical),
                            n = {
                                index: t.index + this._labelMovingDelta.index,
                                price: t.price + this._labelMovingDelta.price
                            };
                        this.setPoint(1, n, i), this.updateAllViews((0, a.sourceChangeEvent)(this.id()))
                    } else super.move(e, t, i)
                }
                endMoving(e, t, i) {
                    return null !== this._labelMovingDelta ? (this._labelMovingDelta = null, this.endChanging(!1, e)) : super.endMoving(e, t, i)
                }
                static createProperties(e) {
                    const t = new n.DefaultProperty("linetoolpricenote", e);
                    return this._configureProperties(t), t
                }
                _applyTemplateImpl(e) {
                    super._applyTemplateImpl(e), this.properties().childs().text.setValue(e.text)
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 649572)).then((e => e.PriceNoteDefinitionsViewModel))
                }
                _snapTo45DegreesAvailable() {
                    return !0
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.hasChild("text") || e.addChild("text", new(o())("")), e.addExclusion("text"), e.hasChild("backgroundsColors") && e.removeProperty("backgroundsColors"), e.hasChild("textsColors") && e.removeProperty("textsColors")
                }
            }
        },
        569654: (e, t, i) => {
            i.d(t, {
                LineToolPriceRange: () => p
            });
            var r = i(892142),
                n = i(650151),
                s = i(61499),
                o = i(542149),
                l = i(703428);
            const a = { ...l.nonThemedFactoryDefaultsBase,
                    extendLeft: !1,
                    extendRight: !1
                },
                c = l.themedFactoryDefaultsBase,
                h = (0, o.extractAllPropertiesKeys)((0,
                    n.ensureDefined)(c.get(s.StdTheme.Light))),
                u = (0, o.extractAllPropertiesKeys)(a);
            class d extends l.DateAndPriceBaseProperties {
                static create(e) {
                    return new this("linetoolpricerange", (() => (0, o.factoryDefaultsForCurrentTheme)(a, c)), u, h, e)
                }
            }
            class p extends r.LineDataSource {
                constructor(e, t, r, n) {
                    super(e, t || p.createProperties(), r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 643746)).then((e => {
                        this._setPaneViews([new e.PriceRangePaneView(this, this._model)])
                    }))
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Price Range"
                }
                static createProperties(e) {
                    const t = d.create(e);
                    return this._configureProperties(t), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 165547))).GeneralDatePriceRangeDefinitionsViewModel
                }
            }
        },
        632465: (e, t, i) => {
            var r = i(955130).LevelsProperty,
                n = i(730906).LineToolFibWedgeBase,
                s = i(241056).LineToolColorsProperty;
            class o extends n {
                constructor(e, t, r, n) {
                    super(e, t || o.createProperties(), r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.t.bind(i, 976154, 19)).then((({
                        ProjectionLinePaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                levelsCount() {
                    return 1
                }
                name() {
                    return "Projection"
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 15728))).ProjectionDefinitionsViewModel
                }
                static createProperties(e) {
                    var t = new r("linetoolprojection", e, !1, {
                        range: [1, 1]
                    });
                    return this._configureProperties(t), t
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.addChild("linesColors", new s([e.trendline.color]))
                }
            }
            t.LineToolProjection = o
        },
        638655: (e, t, i) => {
            var r = i(732747).LineToolTrendLine,
                n = i(87225).DefaultProperty;
            class s extends r {
                constructor(e, t, i, r) {
                    super(e, t || s.createProperties(), i, r)
                }
                name() {
                    return "Ray"
                }
                static createProperties(e) {
                    var t = new n("linetoolray", e);
                    return this._configureProperties(t), t
                }
            }
            t.LineToolRay = s
        },
        311625: (e, t, i) => {
            i.d(t, {
                LineToolRectangle: () => h
            });
            var r = i(86441),
                n = i(87225),
                s = i(40210),
                o = i.n(s),
                l = i(892142),
                a = i(241056),
                c = i(650151);
            class h extends l.LineDataSource {
                constructor(e, t, r, n) {
                    const s = t || h.createProperties();
                    super(e, s, r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 699459)).then((({
                        RectanglePaneView: t
                    }) => {
                        const i = [new t(this, e)];
                        this._setPaneViews(i)
                    }))
                }
                pointsCount() {
                    return 2
                }
                textColorsProperty() {
                    return this.properties().childs().showLabel.value() ? super.textColorsProperty() : null
                }
                name() {
                    return "Rectangle"
                }
                setPoint(e, t, i) {
                    if (e < 2 && super.setPoint(e, t, i), i && i.shift()) {
                        const i = this._getAnchorPointForIndex(e);
                        if (e >= 4) return this._correctMiddlePoints(e, t, i), void this.normalizePoints();
                        this._snapPoint45Degree(t, i)
                    }
                    switch (e) {
                        case 2:
                            this._points[1].price = t.price, this._points[0].index = t.index;
                            break;
                        case 3:
                            this._points[0].price = t.price, this._points[1].index = t.index;
                            break;
                        case 4:
                            this._points[0].index = t.index;
                            break;
                        case 5:
                            this._points[1].index = t.index;
                            break;
                        case 6:
                            this._points[0].price = t.price;
                            break;
                        case 7:
                            this._points[1].price = t.price
                    }
                    this.normalizePoints()
                }
                getPoint(e) {
                    return e < 2 ? super.getPoint(e) : this._getAnchorPointForIndex(e)
                }
                template() {
                    const e = super.template();
                    return e.text = this.properties().childs().text.value(), e
                }
                static createProperties(e) {
                    const t = new n.DefaultProperty("linetoolrectangle", e);
                    return this._configureProperties(t), t
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 705084)).then((e => e.RectangleDefinitionsViewModel))
                }
                _applyTemplateImpl(e) {
                    super._applyTemplateImpl(e), this.properties().childs().text.setValue(e.text)
                }
                _snapPoint45Degree(e, t, i) {
                    const r = this.m_priceScale,
                        n = this.ownerSource();
                    if (null === r || null === n) return;
                    const s = n.firstValue();
                    if (null === s) return;
                    const o = this._model.timeScale(),
                        l = (0, c.ensureNotNull)(this.pointToScreenPoint(e)),
                        a = (0, c.ensureNotNull)(this.pointToScreenPoint(t)),
                        h = l.x - a.x,
                        u = l.y - a.y,
                        d = h < 0 ? -1 : 1,
                        p = u < 0 ? -1 : 1,
                        _ = Math.max(Math.abs(h), Math.abs(u)),
                        P = Math.round(o.coordinateToIndex(a.x + _ * d)),
                        v = Math.abs(o.indexToCoordinate(P) - a.x),
                        g = r.coordinateToPrice(a.y + v * p, s);
                    e.index = P, e.price = g
                }
                _correctMiddlePoints(e, t, i) {
                    e < 6 ? this._correctRightLeftMiddlePoint(e, t, i) : this._correctTopBottomMiddlePoint(e, t, i)
                }
                _correctRightLeftMiddlePoint(e, t, i) {
                    const n = (0, c.ensureNotNull)(this.pointToScreenPoint(t)),
                        s = (0, c.ensureNotNull)(this.pointToScreenPoint(i)),
                        o = (0, c.ensureNotNull)(this.pointToScreenPoint(this._points[0])),
                        l = (0, c.ensureNotNull)(this.pointToScreenPoint(this._points[1]));
                    let a = n.x - s.x;
                    if (0 === a) return;
                    const h = o.x < l.x ? 1 : -1,
                        u = o.y < l.y ? 1 : -1;
                    switch (a *= h, e) {
                        case 4:
                            {
                                const e = l.y - u * a / 2,
                                    t = (0, c.ensureNotNull)(this.screenPointToPoint(new r.Point(l.x, e)));this._points[1].price = t.price;
                                const i = (0, c.ensureNotNull)(this.screenPointToPoint(new r.Point(o.x + h * a, o.y + u * a / 2)));this._points[0].price = i.price,
                                this._points[0].index = i.index;
                                break
                            }
                        case 5:
                            {
                                const e = o.y - u * a / 2,
                                    t = (0, c.ensureNotNull)(this.screenPointToPoint(new r.Point(o.x, e)));this._points[0].price = t.price;
                                const i = (0, c.ensureNotNull)(this.screenPointToPoint(new r.Point(l.x + h * a, l.y + u * a / 2)));this._points[1].price = i.price,
                                this._points[1].index = i.index;
                                break
                            }
                    }
                }
                _correctTopBottomMiddlePoint(e, t, i) {
                    const n = this.m_priceScale,
                        s = this.ownerSource();
                    if (null === n || null === s) return;
                    const o = this._model.timeScale(),
                        l = s.firstValue();
                    if (null === l) return;
                    const a = (0, c.ensureNotNull)(this.pointToScreenPoint(t)),
                        h = (0, c.ensureNotNull)(this.pointToScreenPoint(i)),
                        u = (0, c.ensureNotNull)(this.pointToScreenPoint(this._points[0])),
                        d = (0, c.ensureNotNull)(this.pointToScreenPoint(this._points[1])),
                        p = a.y - h.y,
                        _ = p < 0 ? -1 : 1,
                        P = u.x < d.x ? 1 : -1,
                        v = u.y < d.y ? 1 : -1;
                    switch (e) {
                        case 6:
                            {
                                const e = Math.floor(d.x - P * p / 2),
                                    t = (0, c.ensureNotNull)(this.screenPointToPoint(new r.Point(e, d.y))),
                                    i = Math.abs(this._points[1].index - t.index),
                                    s = P * v * _ * Math.ceil(i / 2);
                                if (0 === s) return;this._points[1].index = this._points[1].index - s;
                                const a = _ * Math.abs(o.indexToCoordinate(this._points[1].index) - d.x);this._points[0].price = n.coordinateToPrice(u.y + a, l),
                                this._points[0].index = this._points[0].index + s;
                                break
                            }
                        case 7:
                            {
                                const e = Math.floor(u.x - P * p / 2),
                                    t = (0,
                                        c.ensureNotNull)(this.screenPointToPoint(new r.Point(e, u.y))),
                                    i = Math.abs(this._points[0].index - t.index),
                                    s = P * v * _ * Math.ceil(i / 2);
                                if (0 === s) return;this._points[0].index = this._points[0].index - s;
                                const a = _ * Math.abs(o.indexToCoordinate(this._points[0].index) - u.x);this._points[1].price = n.coordinateToPrice(d.y + a, l),
                                this._points[1].index = this._points[1].index + s;
                                break
                            }
                    }
                }
                _snapTo45DegreesAvailable() {
                    return !0
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.hasChild("text") || e.addChild("text", new(o())("")), e.addChild("linesColors", new a.LineToolColorsProperty([e.childs().color])), e.addChild("textsColors", new a.LineToolColorsProperty([e.childs().textColor], e.childs().showLabel)), e.addExclusion("text"), e.addExclusion("linesColors"), e.addExclusion("textsColors")
                }
                _getAnchorPointForIndex(e) {
                    const t = this.points(),
                        i = t[0],
                        r = t[1];
                    let n = 0,
                        s = 0;
                    switch (e) {
                        case 0:
                            n = i.price, s = i.index;
                            break;
                        case 1:
                            n = r.price, s = r.index;
                            break;
                        case 2:
                            n = r.price, s = i.index;
                            break;
                        case 3:
                            n = i.price, s = r.index;
                            break;
                        case 4:
                            n = (r.price + i.price) / 2, s = i.index;
                            break;
                        case 5:
                            n = (r.price + i.price) / 2, s = r.index;
                            break;
                        case 6:
                            n = i.price, s = (r.index + i.index) / 2;
                            break;
                        case 7:
                            n = r.price, s = (r.index + i.index) / 2
                    }
                    return {
                        index: s,
                        price: n
                    }
                }
            }
        },
        892595: (e, t, i) => {
            i.d(t, {
                LineToolRiskRewardBase: () => f
            });
            var r = i(650151),
                n = i(951512),
                s = i(812363),
                o = i(168210),
                l = i(892142),
                a = i(298843),
                c = i(522943),
                h = i(841404),
                u = i(114123);
            class d extends h.PriceAxisView {
                constructor(e, t) {
                    super(), this._source = e, this._data = t
                }
                _updateRendererData(e, t, i) {
                    if (e.visible = !1, !this._showAxisLabel()) return;
                    const r = this._source.priceScale();
                    if (0 === this._source.points().length || null === r || r.isEmpty()) return;
                    const n = this._source.ownerSource(),
                        s = null !== n ? n.firstValue() : null;
                    if (null === s) return;
                    const o = this._data.priceProperty.value(),
                        l = (0, u.resetTransparency)(this._data.colorProperty.value());
                    i.background = l, i.textColor = this.generateTextColor(l), i.coordinate = r.priceToCoordinate(o, s), e.text = r.formatPrice(o, s), e.visible = !0
                }
                _showAxisLabel() {
                    return this._source.properties().childs().showPriceLabels.value()
                }
            }
            var p = i(40210),
                _ = i.n(p);
            class P extends(_()) {
                constructor(e, t) {
                    super(), this._lineSource = e, this._pointIndex = t
                }
                value() {
                    const e = this._lineSource.points()[this._pointIndex].price;
                    return this._formatAndParsePrice(e)
                }
                state() {
                    return this.value()
                }
                merge(e, t) {
                    return this.setValue(e), t ? [] : null
                }
                _formatAndParsePrice(e) {
                    const t = (0, r.ensureNotNull)(this._lineSource.ownerSource()).formatter();
                    if (t.parse) {
                        const i = t.format(e),
                            r = t.parse(i);
                        return r.res ? r.value : e
                    }
                    return e
                }
            }
            class v extends P {
                constructor(e) {
                    super(e, 0)
                }
                setValue(e) {
                    const t = this._lineSource.points()[this._pointIndex];
                    this._lineSource.startChanging(this._pointIndex, t), t.price = parseFloat("" + e), this._lineSource.setPoint(this._pointIndex, t), this._lineSource.recalculate(), this._lineSource.model().updateSource(this._lineSource), this._listeners.fire(this), this._lineSource.endChanging(!1, !1), this._lineSource.syncPriceLevels()
                }
            }
            class g extends P {
                constructor(e) {
                    super(e, 1)
                }
                value() {
                    const e = this._lineSource.stopPrice();
                    return this._formatAndParsePrice(e)
                }
                setValue(e) {
                    const t = Math.round(Math.abs(e - this._lineSource.entryPrice()) * this._lineSource.ownerSourceBase());
                    this._lineSource.properties().childs().stopLevel.setValue(t), this._lineSource.syncPriceLevels()
                }
            }
            class m extends P {
                constructor(e) {
                    super(e, 2)
                }
                value() {
                    const e = this._lineSource.profitPrice();
                    return this._formatAndParsePrice(e)
                }
                setValue(e) {
                    const t = Math.round(Math.abs(e - this._lineSource.entryPrice()) * this._lineSource.ownerSourceBase());
                    this._lineSource.properties().childs().profitLevel.setValue(t), this._lineSource.syncPriceLevels()
                }
            }
            class f extends l.LineDataSource {
                constructor(e, t, s, l) {
                    super(e, t, s, l), this._syncStateExclusions = ["points", "entryPrice", "stopPrice", "targetPrice", "stopLevel", "profitLevel", "riskSize", "qty", "amountTarget", "amountStop"], t.hasChild("stopLevel") || t.hasChild("profitLevel") || (t.addProperty("stopLevel", 0), t.addProperty("profitLevel", 0), this.ownerSourceChanged().subscribe(this, (() => {
                        const i = (0, r.ensureNotNull)(e.timeScale().visibleBarsStrictRange()),
                            n = i.firstBar(),
                            s = i.lastBar(),
                            l = (0, r.ensureNotNull)(this.ownerSource()),
                            a = l.priceScale();
                        let c = (0, r.ensureNotNull)(l.priceRange(n, s));
                        if (a && a.isLog()) {
                            const e = a.logicalToPrice(c.minValue()),
                                t = a.logicalToPrice(c.maxValue());
                            c = new o.PriceRange(e, t)
                        }
                        if (c && !c.isEmpty()) {
                            const e = Math.round(.2 * c.length() * this.ownerSourceBase());
                            t.merge({
                                stopLevel: e,
                                profitLevel: e
                            })
                        }
                    }), !0)), t.childs().stopLevel.listeners().subscribe(this, this.recalculate), t.childs().stopLevel.listeners().subscribe(null, (() => {
                        this.properties().childs().stopPrice.childChanged(null)
                    })), t.childs().profitLevel.listeners().subscribe(this, this.recalculate), t.childs().profitLevel.listeners().subscribe(null, (() => {
                        this.properties().childs().targetPrice.childChanged(null)
                    })), t.addChild("entryPrice", new v(this)), t.addChild("stopPrice", new g(this)), t.addChild("targetPrice", new m(this)), t.hasChild("riskSize") || t.addProperty("riskSize", 0), t.hasChild("qty") || t.addProperty("qty", 0), t.hasChild("amountTarget") || t.addProperty("amountTarget", t.childs().accountSize.value()), t.hasChild("amountStop") || t.addProperty("amountStop", t.childs().accountSize.value()), t.addExclusion("riskSize"), t.addExclusion("qty"), t.addExclusion("amountTarget"), t.addExclusion("amountStop"), this._riskInPercentsFormatter = new n.NumericFormatter(2), this._riskInMoneyFormatter = new n.NumericFormatter, t.childs().risk.subscribe(this, this._recalculateRiskSize), t.childs().accountSize.subscribe(this, this._recalculateRiskSize), t.childs().riskDisplayMode.subscribe(this, this._recalculateRisk), t.childs().riskDisplayMode.subscribe(this, this._recalculateRiskSize), t.childs().entryPrice.subscribe(this, this._recalculateRiskSize), t.childs().stopPrice.subscribe(this, this._recalculateRiskSize), t.childs().profitLevel.subscribe(this, this._recalculateRiskSize), t.childs().profitLevel.subscribe(this, this.syncPriceLevels.bind(this)), t.childs().stopLevel.subscribe(this, this._recalculateRiskSize), t.childs().stopLevel.subscribe(this, this.syncPriceLevels.bind(this)), t.childs().qty.subscribe(this, this._recalculateRiskSize), this.ownerSourceChanged().subscribe(null, ((e, t) => {
                        e && e.barsProvider().dataUpdated().unsubscribeAll(this), t && t.barsProvider().dataUpdated().subscribe(this, this._onSeriesUpdated)
                    })), this.pointAdded().subscribe(this, (e => {
                        switch (e) {
                            case c.RiskRewardPointIndex.Entry:
                            case c.RiskRewardPointIndex.Close:
                                this._recalculateRiskSize(), this._recalculateQty()
                        }
                    })), this.pointChanged().subscribe(this, (e => {
                        switch (e) {
                            case c.RiskRewardPointIndex.Entry:
                            case c.RiskRewardPointIndex.Close:
                                this._recalculateRiskSize(), this._recalculateQty()
                        }
                    })), t.childs().riskDisplayMode.value() === a.RiskDisplayMode.Percentage && t.childs().risk.value() > 100 && t.childs().riskDisplayMode.setValueSilently(a.RiskDisplayMode.Money), this.version = 2, this._entryPriceAxisView = new d(this, {
                        colorProperty: t.childs().linecolor,
                        priceProperty: t.childs().entryPrice
                    }), this._stopPriceAxisView = new d(this, {
                        colorProperty: t.childs().stopBackground,
                        priceProperty: t.childs().stopPrice
                    }), this._profitPriceAxisView = new d(this, {
                        colorProperty: t.childs().profitBackground,
                        priceProperty: t.childs().targetPrice
                    }), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 680349)).then((({
                        RiskRewardPaneView: t
                    }) => {
                        const i = [new t(this, e)];
                        this._setPaneViews(i)
                    }))
                }
                destroy() {
                    var e;
                    null === (e = this.ownerSource()) || void 0 === e || e.barsProvider().dataUpdated().unsubscribeAll(this), this.ownerSourceChanged().unsubscribeAll(this), super.destroy()
                }
                recalculateStateByData() {
                    this.recalculate()
                }
                calculatePL(e) {
                    return this.entryPrice() - e
                }
                lastBarData() {
                    var e;
                    const t = null === (e = this.ownerSource()) || void 0 === e ? void 0 : e.barsProvider();
                    if (!t) return null;
                    const i = t.bars().firstIndex(),
                        n = t.bars().lastIndex();
                    if (null === i || null === n || isNaN(i) || isNaN(n)) return null;
                    const o = this.points();
                    if (4 === o.length) {
                        const e = o[c.RiskRewardPointIndex.ActualClose];
                        return e.index < i ? null : {
                            closePrice: e.price,
                            index: Math.min(n, e.index)
                        }
                    }
                    const l = o[c.RiskRewardPointIndex.Close];
                    if (l.index < i) return null;
                    const a = Math.min(n, l.index),
                        h = t.bars().search(a, s.PlotRowSearchMode.NearestLeft);
                    return null === h ? null : {
                        closePrice: (0, r.ensure)(h.value[4]),
                        index: h.index
                    }
                }
                ownerSourceBase() {
                    var e;
                    const t = null === (e = this.ownerSource()) || void 0 === e ? void 0 : e.symbolSource().symbolInfo();
                    return t ? t.pricescale / t.minmov : 100
                }
                _ownerSourcePointValue() {
                    var e, t, i;
                    return null !== (i = null === (t = null === (e = this.ownerSource()) || void 0 === e ? void 0 : e.symbolSource().symbolInfo()) || void 0 === t ? void 0 : t.pointvalue) && void 0 !== i ? i : 1
                }
                _onSeriesUpdated(e, t, i) {
                    this.isSourceHidden() || this._points.length < 2 || null !== i && i.index > Math.max(this._points[0].index, this._points[1].index) || this.recalculateStateByData()
                }
            }
        },
        298843: (e, t, i) => {
            var r;
            i.d(t, {
                    RiskDisplayMode: () => r
                }),
                function(e) {
                    e.Percentage = "percents", e.Money = "money"
                }(r || (r = {}))
        },
        522943: (e, t, i) => {
            var r;
            i.d(t, {
                    RiskRewardPointIndex: () => r
                }),
                function(e) {
                    e[e.Entry = 0] = "Entry", e[e.Close = 1] = "Close", e[e.ActualEntry = 2] = "ActualEntry", e[e.ActualClose = 3] = "ActualClose"
                }(r || (r = {}))
        },
        573751: (e, t, i) => {
            var r = i(650151).ensureNotNull,
                n = i(892142).LineDataSource,
                s = i(480071),
                o = i(87225).DefaultProperty,
                l = i(522943).RiskRewardPointIndex,
                a = i(298843).RiskDisplayMode,
                c = i(892595).LineToolRiskRewardBase,
                h = i(758337).isNumber,
                u = i(136916),
                d = u.SIDE,
                p = u.ORDERTYPE;
            class _ extends c {
                riskFormatter(e) {
                    return e === a.Percentage ? this._riskInPercentsFormatter : this._riskInMoneyFormatter
                }
                getRiskStep(e) {
                    return e === a.Percentage ? .01 : 1
                }
                _roundValue(e) {
                    return parseFloat(e.toFixed(2))
                }
                hasEditableCoordinates() {
                    return !1
                }
                _recalculateRisk() {
                    var e = this.properties(),
                        t = e.riskDisplayMode.value(),
                        i = e.riskSize.value(),
                        r = e.accountSize.value(),
                        n = e.risk.value();
                    n = t === a.Percentage ? this._roundValue(i / r * 100) : this._roundValue(r / 100 * n), this._riskInChange = !0, e.risk.setValue(this.riskFormatter(t).format(n)), this._riskInChange = !1
                }
                _recalculateRiskSize() {
                    if (!this._riskInChange) {
                        var e = this.properties(),
                            t = e.risk.value(),
                            i = e.riskDisplayMode.value(),
                            r = e.accountSize.value();
                        i === a.Percentage ? e.riskSize.setValue(t / 100 * r) : t > r ? (e.risk.setValue(r), e.riskSize.setValue(r)) : e.riskSize.setValue(t)
                    }
                }
                migrateVersion(e, t, i) {
                    if (1 === e && this._points.length >= 1) {
                        var r = [];
                        if (r.push(this._points[0]), s = {
                                price: (s = this._points[0]).price,
                                index: this._getClosePointIndex(s.index)
                            }, r.push(s), this._points[1] && r.push(this._points[1]), this._points[2] && r.push(this._points[2]), this._points = r, this._timePoint.length >= 1) {
                            var n = [],
                                s = this._timePoint[0];
                            n.push(s);
                            var o = {
                                price: s.price,
                                time_t: s.time_t,
                                offset: this._getClosePointIndex(s.offset)
                            };
                            n.push(o), this._timePoint[1] && r.push(this._points[1]), this._timePoint[2] && r.push(this._points[2]), this._timePoint = n
                        }
                    }
                }
                priceAxisViews(e, t) {
                    return this.isSourceHidden() || t !== this.priceScale() || this._model.paneForSource(this) !== e ? null : [this._entryPriceAxisView, this._stopPriceAxisView, this._profitPriceAxisView]
                }
                updateAllViews() {
                    this.isActualSymbol() && this._properties.visible.value() && (s.hideAllDrawings().value() && this.userEditEnabled() || (super.updateAllViews(), this._entryPriceAxisView.update(), this._stopPriceAxisView.update(), this._profitPriceAxisView.update()))
                }
                restoreExternalState(e) {
                    if (h(e.entryPrice)) {
                        if (e = Object.assign({}, e), !this.isActualSymbol()) this._timePoint[0].price = e.entryPrice, delete e.entryPrice;
                        this.properties().merge(e)
                    } else super.restoreExternalState(e)
                }
                _changeEntryPoint(e) {
                    var t = this.properties().stopPrice.value(),
                        i = this.properties().targetPrice.value(),
                        r = 1 / this.ownerSourceBase(),
                        n = Math.min(t, i) + r,
                        s = Math.max(t, i) - r;
                    e.price = Math.max(n, Math.min(s, this._roundPrice(e.price))), super.setPoint(0, e), this.properties().stopPrice.setValue(t), this.properties().targetPrice.setValue(i)
                }
                setPoint(e, t, i) {
                    if (this.isActualSymbol()) {
                        switch (this._muteSyncLineStyle(), e) {
                            case 0:
                                this._changeEntryPoint(t);
                                break;
                            case 2:
                                this.properties().stopPrice.setValue(this.preparseStopPrice(t.price));
                                break;
                            case 3:
                                this.properties().targetPrice.setValue(this.preparseProfitPrice(t.price));
                                break;
                            case 1:
                                t.price = this._roundPrice(t.price), super.setPoint(1, t), this.recalculate()
                        }
                        this._unmuteSyncLineStyleWithoutApplyingChanges(), this.syncPriceLevels()
                    }
                }
                getPoint(e) {
                    switch (e) {
                        case 0:
                            return this._points[0];
                        case 1:
                            return {
                                index: this._points[1].index,
                                price: this._points[0].price
                            };
                        case 2:
                            return {
                                index: this._points[0].index,
                                price: this.stopPrice()
                            };
                        case 3:
                            return {
                                index: this._points[0].index,
                                price: this.profitPrice()
                            }
                    }
                    return null
                }
                setPoints(e) {
                    this._muteSyncLineStyle(), super.setPoints(e), this.recalculate(), this._unmuteSyncLineStyleWithoutApplyingChanges(), this.syncPriceLevels()
                }
                syncPriceLevels() {
                    if (this.linkKey().value()) {
                        var e = this.properties(),
                            t = {
                                entryPrice: e.entryPrice.value(),
                                stopLevel: e.stopLevel.value(),
                                profitLevel: e.profitLevel.value()
                            };
                        s.changeLineStyle({
                            linkKey: this.linkKey().value(),
                            state: t,
                            model: this._model
                        })
                    }
                }
                pointsCount() {
                    return 1
                }
                name() {
                    return "Risk/Reward"
                }
                addPoint(e) {
                    e.price = this._roundPrice(e.price), super.addPoint(e, null, !0);
                    var t = {
                        price: e.price,
                        index: this._getClosePointIndex(e.index)
                    };
                    super._addPointIntenal(t, null, !0);
                    var i = this.calculateActualEntry(e, t);
                    i && (super._addPointIntenal(i, null, !0), (t = this.findClosePoint(i, t)) && super._addPointIntenal(t, null, !0));
                    return this._lastPoint = null, this.normalizePoints(), this.createServerPoints(), !0
                }
                setOwnerSource(e) {
                    super.setOwnerSource(e);
                    const t = this.ownerSource();
                    t && t.symbolSource().symbolInfo() && (this._recalculateAmount(), this._recalculateRiskSize(), this._recalculateQty())
                }
                _roundPrice(e) {
                    const t = this.ownerSourceBase();
                    return Math.round(e * t) / t
                }
                recalculate() {
                    if (0 !== this.points().length) {
                        var e = this.properties().targetPrice.value(),
                            t = this.properties().stopPrice.value(),
                            i = [this._points[0], this._points[1]],
                            r = this.calculateActualEntry(this.points()[0], this.points()[1]);
                        if (r) {
                            i.push(r);
                            var n = this.findClosePoint(r, this.points()[1]);
                            n && i.push(n)
                        }
                        this._points = i, e !== this.properties().targetPrice.value() && this.properties().targetPrice._listeners.fire(this.properties().targetPrice), t !== this.properties().stopPrice.value() && this.properties().stopPrice._listeners.fire(this.properties().stopPrice)
                    }
                }
                start() {
                    super.start(), this.recalculate()
                }
                startMoving(e, t, i) {
                    e.logical.price = this._roundPrice(e.logical.price), super.startMoving(e, t, i)
                }
                move(e, t, i) {
                    e.logical.price = this._roundPrice(e.logical.price), super.move(e, t, i), this.recalculate(), this._entryPriceAxisView.update()
                }
                _correctPoints(e, t) {
                    return !!this.isActualSymbol() && n.prototype._correctPoints.call(this, [e[0], e[1]], t)
                }
                entryPrice() {
                    return this.points()[0].price
                }
                findClosePoint(e, t) {
                    const i = this.ownerSource();
                    if (!i) return null;
                    for (var n = i.barsProvider().bars(), s = r(n.firstIndex()), o = Math.max(e.index, s), l = r(n.lastIndex()), a = Math.min(l, t.index), c = o; c <= a; c++) {
                        var h = n.valueAt(c);
                        if (null !== h) {
                            var u = this.checkStopPrice(h);
                            if (null != u) return {
                                index: c,
                                price: u
                            }
                        }
                    }
                    return null
                }
                calculateActualEntry(e, t) {
                    const i = this.ownerSource();
                    if (!i) return null;
                    const n = i.barsProvider().bars();
                    if (n.isEmpty()) return null;
                    for (var s = r(n.firstIndex()), o = Math.max(e.index, s), l = e.price, a = r(n.lastIndex()), c = Math.min(a, t.index), h = o; h <= c; h++) {
                        var u = n.valueAt(h);
                        if (null !== u && u[TradingView.HIGH_PLOT] >= l && u[TradingView.LOW_PLOT] <= l) return {
                            index: h,
                            price: l
                        }
                    }
                    return null
                }
                axisPoints() {
                    if (!this._points[l.ActualEntry]) return [];
                    var e = this._points[l.ActualEntry],
                        t = null;
                    if (4 === this._points.length) t = this._points[l.ActualClose];
                    else {
                        var i = this.lastBarData();
                        if (!i) return [];
                        t = {
                            index: i.index,
                            price: i.closePrice
                        }
                    }
                    return [e, t]
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 328027))).RiskRewardDefinitionsViewModel
                }
                template() {
                    var e = this.properties(),
                        t = n.prototype.template.call(this);
                    return t.stopLevel = e.stopLevel.value(), t.profitLevel = e.profitLevel.value(), t
                }
                _applyTemplateImpl(e) {
                    delete e.targetPrice, delete e.stopPrice, delete e.entryPrice, super._applyTemplateImpl(e);
                    var t = this.properties();
                    void 0 !== e.stopLevel && t.stopLevel.setValue(e.stopLevel), void 0 !== e.profitLevel && t.profitLevel.setValue(e.profitLevel)
                }
                getOrderTemplate() {
                    var e = this.properties();
                    return {
                        qty: e.qty.value() / e.lotSize.value(),
                        limitPrice: e.entryPrice.value(),
                        stopLoss: e.stopPrice.value(),
                        takeProfit: e.targetPrice.value(),
                        side: this._orderSide(),
                        type: p.LIMIT,
                        seenPrice: null
                    }
                }
                _propertiesStateExclusions() {
                    return ["entryPrice", "stopPrice", "targetPrice"]
                }
                static _configureProperties(e) {
                    n._configureProperties(e), e.addExclusion("stopLevel"), e.addExclusion("profitLevel"), e.addExclusion("stopPrice"), e.addExclusion("targetPrice"), e.addExclusion("entryPrice")
                }
                _getClosePointIndex(e) {
                    var t = this._model.timeScale(),
                        i = Math.round(t.width() / t.barSpacing());
                    return e + Math.max(3, Math.round(.15 * i))
                }
            }
            _.version = 2;
            class P extends _ {
                constructor(e, t, i, r) {
                    super(e, t || P.createProperties(), i, r);
                    var n = this.properties();
                    n.entryPrice.subscribe(this, this._recalculateQty), n.stopPrice.subscribe(this, this._recalculateQty), n.riskSize.subscribe(this, this._recalculateQty), n.entryPrice.subscribe(this, this._recalculateAmount), n.profitLevel.subscribe(this, this._recalculateAmount), n.stopLevel.subscribe(this, this._recalculateAmount), n.accountSize.subscribe(this, this._recalculateAmount), n.riskSize.subscribe(this, this._recalculateAmount), n.qty.subscribe(this, this._recalculateAmount)
                }
                _recalculateQty() {
                    if (0 !== this.points().length) {
                        var e = this.properties(),
                            t = e.entryPrice.value(),
                            i = e.stopPrice.value(),
                            r = e.riskSize.value() / (Math.abs(i - t) * this._ownerSourcePointValue());
                        e.qty.setValue(r)
                    }
                }
                _recalculateAmount() {
                    if (0 === this.points().length) return;
                    var e = this.properties(),
                        t = e.accountSize.value(),
                        i = e.entryPrice.value(),
                        r = e.qty.value(),
                        n = e.stopPrice.value(),
                        s = e.targetPrice.value();
                    const o = this._ownerSourcePointValue();
                    var l = this._roundValue(t + (i - s) * r * o),
                        a = this._roundValue(t - (n - i) * r * o);
                    e.amountTarget.setValue(l), e.amountStop.setValue(a)
                }
                name() {
                    return "Risk/Reward short"
                }
                stopPrice() {
                    return this.entryPrice() + this.properties().stopLevel.value() / this.ownerSourceBase()
                }
                profitPrice() {
                    return this.entryPrice() - this.properties().profitLevel.value() / this.ownerSourceBase()
                }
                preparseStopPrice(e) {
                    e = this._roundPrice(e);
                    var t = this.entryPrice() + 1 / this.ownerSourceBase();
                    return Math.max(e, t)
                }
                preparseProfitPrice(e) {
                    e = this._roundPrice(e);
                    var t = this.entryPrice() - 1 / this.ownerSourceBase();
                    return Math.min(e, t)
                }
                checkStopPrice(e) {
                    var t = this.stopPrice(),
                        i = this.profitPrice();
                    return e[TradingView.HIGH_PLOT] >= t ? this.stopPrice() : e[TradingView.LOW_PLOT] <= i ? this.profitPrice() : null
                }
                _orderSide() {
                    return d.SELL
                }
                static createProperties(e) {
                    var t = new o("linetoolriskrewardshort", e);
                    return this._configureProperties(t), t
                }
            }
            class v extends _ {
                constructor(e, t, i, r) {
                    super(e, t || v.createProperties(), i, r);
                    var n = this.properties();
                    n.entryPrice.subscribe(this, this._recalculateQty), n.stopPrice.subscribe(this, this._recalculateQty), n.riskSize.subscribe(this, this._recalculateQty), n.entryPrice.subscribe(this, this._recalculateAmount), n.profitLevel.subscribe(this, this._recalculateAmount), n.stopLevel.subscribe(this, this._recalculateAmount), n.accountSize.subscribe(this, this._recalculateAmount), n.riskSize.subscribe(this, this._recalculateAmount), n.qty.subscribe(this, this._recalculateAmount)
                }
                _recalculateQty() {
                    if (0 !== this.points().length) {
                        var e = this.properties(),
                            t = e.entryPrice.value(),
                            i = e.stopPrice.value(),
                            r = e.riskSize.value() / (Math.abs(t - i) * this._ownerSourcePointValue());
                        e.qty.setValue(r)
                    }
                }
                _recalculateAmount() {
                    if (0 !== this.points().length) {
                        var e = this.properties(),
                            t = e.accountSize.value(),
                            i = e.entryPrice.value(),
                            r = e.qty.value(),
                            n = e.stopPrice.value(),
                            s = e.targetPrice.value(),
                            o = this._ownerSourcePointValue(),
                            l = this._roundValue(t + (s - i) * r * o),
                            a = this._roundValue(t - (i - n) * r * o);
                        e.amountTarget.setValue(l), e.amountStop.setValue(a)
                    }
                }
                stopPrice() {
                    return this.entryPrice() - this.properties().stopLevel.value() / this.ownerSourceBase()
                }
                profitPrice() {
                    return this.entryPrice() + this.properties().profitLevel.value() / this.ownerSourceBase()
                }
                calculatePL(e) {
                    return e - this.entryPrice()
                }
                preparseStopPrice(e) {
                    e = this._roundPrice(e);
                    var t = this.entryPrice() - 1 / this.ownerSourceBase();
                    return Math.min(e, t)
                }
                preparseProfitPrice(e) {
                    e = this._roundPrice(e);
                    var t = this.entryPrice() + 1 / this.ownerSourceBase();
                    return Math.max(e, t)
                }
                checkStopPrice(e) {
                    var t = this.stopPrice(),
                        i = this.profitPrice();
                    return e[TradingView.LOW_PLOT] <= t ? this.stopPrice() : e[TradingView.HIGH_PLOT] >= i ? this.profitPrice() : null
                }
                name() {
                    return "Risk/Reward long"
                }
                _orderSide() {
                    return d.BUY
                }
                static createProperties(e) {
                    var t = new o("linetoolriskrewardlong", e);
                    return this._configureProperties(t), t
                }
            }
            t.LineToolRiskRewardLong = v, t.LineToolRiskRewardShort = P
        },
        820914: (e, t, i) => {
            var r = i(86441).Point,
                n = i(204652).distanceToLine,
                s = i(892142).LineDataSource,
                o = i(87225).DefaultProperty,
                l = i(241056).LineToolColorsProperty;
            class a extends s {
                constructor(e, t, r, n) {
                    super(e, t || a.createProperties(), r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.t.bind(i, 628284, 19)).then((({
                        RotatedRectanglePaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                startChanging(e, t) {
                    if (super.startChanging(e, t), 0 === e || 1 === e) {
                        var i = this._getPaneViews()[0],
                            r = i._points[0],
                            s = i._points[1],
                            o = i._points[2];
                        this._distance = n(r, s, o).distance
                    }
                }
                setPoint(e, t, i) {
                    if (super.setPoint(e, t, i), 0 === e || 1 === e) {
                        var n = this._getPaneViews()[0];
                        n.update();
                        var s = n._points[0],
                            o = n._points[1].subtract(s),
                            l = new r(o.y, -o.x).normalized().scaled(this._distance),
                            a = s.add(l),
                            c = this.screenPointToPoint(a);
                        this._points[2] = c
                    }
                }
                endChanging(e, t) {
                    delete this._distance, super.endChanging(e, t)
                }
                pointsCount() {
                    return 3
                }
                name() {
                    return "Rotated Rectangle"
                }
                hasEditableCoordinates() {
                    return !1
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 27619))).GeneralFiguresDefinitionsViewModel
                }
                _snapTo45DegreesAvailable() {
                    return !0
                }
                static createProperties(e) {
                    var t = new o("linetoolrotatedrectangle", e);
                    return this._configureProperties(t), t
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.addChild("linesColors", new l([e.color]))
                }
            }
            t.LineToolRotatedRectangle = a
        },
        48589: (e, t, i) => {
            var r = i(955130).LevelsProperty,
                n = i(822296).LineToolPitchfork;
            class s extends n {
                constructor(e, t, i, r) {
                    super(e, t || s.createProperties(), i, r)
                }
                name() {
                    return "Modified Schiff Pitchfork"
                }
                static createProperties(e) {
                    var t = new r("linetoolschiffpitchfork", e, !1, {
                        range: [0, 8]
                    });
                    return this._configureProperties(t), t
                }
            }
            t.LineToolSchiffPitchfork = s
        },
        901700: (e, t, i) => {
            var r = i(955130).LevelsProperty,
                n = i(822296).LineToolPitchfork;
            class s extends n {
                constructor(e, t, i, r) {
                    super(e, t || s.createProperties(), i, r)
                }
                name() {
                    return "Schiff Pitchfork"
                }
                static createProperties(e) {
                    var t = new r("linetoolschiffpitchfork2", e, !1, {
                        range: [0, 8]
                    });
                    return this._configureProperties(t), t
                }
            }
            t.LineToolSchiffPitchfork2 = s
        },
        80342: (e, t, i) => {
            i.d(t, {
                LineToolSignpost: () => p
            });
            var r = i(777754),
                n = i(87225),
                s = i(892142),
                o = i(40210),
                l = i.n(o);
            class a extends(l()) {
                constructor(e) {
                    super(), this._source = e, e.pointAdded().subscribe(this, (() => this.listeners().fire(this))), e.pointChanged().subscribe(this, (() => this.listeners().fire(this)))
                }
                value() {
                    const e = this._source.properties().childs().position.value();
                    return parseFloat(e.toFixed(2))
                }
                setValue(e) {
                    this._source.properties().childs().position.setValue(e), this._source.model().updateSource(this._source), this.listeners().fire(this), this._source.syncMultichartState({
                        pricesChanged: !1,
                        indexesChanged: !1
                    })
                }
            }
            var c = i(493100);
            class h extends c.LineDataSourcePointIndexProperty {
                constructor(e, t) {
                    super(e, t), this._source = e
                }
                _setPointImpl(e) {
                    this._source.setPointAndChangeIndex(this._pointIndex, e)
                }
            }
            var u = i(241056),
                d = i(343135);
            class p extends d.LineToolWithRelativePriceCoordinate {
                constructor(e, t, r, n) {
                    super(e, null != t ? t : p.createProperties(), r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 937349)).then((t => {
                        this._setPaneViews([new t.SignpostPaneView(this, e)])
                    }))
                }
                pointsCount() {
                    return 1
                }
                name() {
                    return "Signpost"
                }
                customEvent() {
                    return {
                        index: () => {
                            var e, t;
                            return null !== (t = null === (e = this.points()[0]) || void 0 === e ? void 0 : e.index) && void 0 !== t ? t : null
                        },
                        position: () => this.properties().childs().position.value()
                    }
                }
                showInObjectTree() {
                    return !this.isPhantom() && super.showInObjectTree()
                }
                isPhantom() {
                    return this._model.isPhantomLine(this)
                }
                clonePositionOffset() {
                    return {
                        barOffset: 1,
                        xCoordOffset: 0,
                        yCoordOffset: 0
                    }
                }
                template() {
                    const e = super.template(),
                        t = this.properties().childs();
                    return e.text = t.text.value(), e.position = t.position.value(), e
                }
                shouldBeRemovedOnDeselect() {
                    const e = this._properties.childs();
                    if (e.showImage.value()) return !1;
                    return "" === e.text.value().trim()
                }
                static createProperties(e) {
                    const t = new n.DefaultProperty("linetoolsignpost", e);
                    return this._configureProperties(t), t.hasChild("text") || t.addChild("text", new(l())(r.t(null, void 0, i(37229)))), t.hasChild("position") || t.addChild("position", new(l())(50)), t.addExclusion("text"), t.addExclusion("position"), t.addChild("backgroundsColors", new u.LineToolColorsProperty([t.childs().plateColor])), t
                }
                _createPointProperty(e) {
                    super._createPointProperty(e);
                    const t = this._pointsProperty.childs().points[e];
                    t.removeProperty("price"), t.removeProperty("bar"), t.addChild("price", new a(this)), t.addChild("bar", new h(this, 0))
                }
                _applyTemplateImpl(e) {
                    super._applyTemplateImpl(e), this.properties().childs().text.setValue(e.text), this.properties().childs().position.setValue(e.position)
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 934404)).then((e => e.SignpostDefinitionsViewModel))
                }
                static _configureProperties(e) {
                    s.LineDataSource._configureProperties(e)
                }
            }
            p.supportPhantomMode = !0
        },
        864780: (e, t, i) => {
            i.d(t, {
                LineToolSineLine: () => s
            });
            var r = i(87225),
                n = i(892142);
            class s extends n.LineDataSource {
                constructor(e, t, r, n) {
                    super(e, t || s.createProperties(), r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 766097)).then((e => {
                        this._setPaneViews([new e.SineLinePaneView(this, this._model)])
                    }))
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Sine Line"
                }
                static createProperties(e) {
                    const t = new r.DefaultProperty("linetoolsineline", e);
                    return this._configureProperties(t), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 472706))).CyclicAndSineLinesPatternDefinitionsViewModel
                }
            }
        },
        824067: (e, t, i) => {
            i.d(t, {
                LineToolSticker: () => o
            });
            var r = i(87225),
                n = i(985695);
            const s = (0, i(272001).getLogger)("Chart.LineToolSticker");
            class o extends n.LineToolSvgIconBase {
                constructor(e, t, i, r) {
                    super(e, t || o.createProperties(), i, r), this.version = 1, this._loadViews()
                }
                name() {
                    return "Sticker"
                }
                static createProperties(e) {
                    const t = new r.DefaultProperty("linetoolsticker", e);
                    return o._configureProperties(t), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 320410))).LineDataSourceDefinitionsViewModel
                }
                async _loadViews() {
                    const [{
                        getSvgContentForSticker: e,
                        getSvgRenderer: t
                    }, {
                        StickerPaneView: r
                    }, {
                        svgRenderer: n
                    }] = await Promise.all([i.e(25598).then(i.bind(i, 367545)), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 858204)), i.e(72616).then(i.bind(i, 905153))]);
                    if (!this._isDestroyed) {
                        const i = this._properties.childs().sticker.value();
                        this._svgContent = e(i), this._onIconChanged.fire();
                        const o = t(n, i);
                        null === o && s.logWarn(`Couldn't create svg renderer for sticker ${i}`), this._setPaneViews([new r(this, this._model, o)])
                    }
                }
            }
        },
        985695: (e, t, i) => {
            i.d(t, {
                LineToolSvgIconBase: () => a
            });
            var r = i(650151),
                n = i(86441),
                s = i(869403),
                o = i.n(s),
                l = i(892142);
            class a extends l.LineDataSource {
                constructor(e, t, i, r) {
                    super(e, t, i, r), this._onIconChanged = new(o()), this._svgContent = null, this._loadViews()
                }
                pointsCount() {
                    return 1
                }
                hasEditableCoordinates() {
                    return !1
                }
                getAnchorLimit() {
                    return 80
                }
                getChangePointForSync(e) {
                    return null
                }
                setPoint(e, t, i) {
                    const s = Object.assign({}, t),
                        o = (0, r.ensureNotNull)(this.pointToScreenPoint(this.points()[0])),
                        l = (0, r.ensureNotNull)(this.pointToScreenPoint(s)).subtract(o),
                        a = this.properties().childs();
                    if (0 === e || 1 === e) {
                        const t = l.normalized();
                        let i = Math.acos(-t.x);
                        Math.asin(t.y) > 0 && (i = 2 * Math.PI - i), 0 === e && (i += Math.PI), a.angle.setValue(i)
                    } else {
                        const t = l.add(new n.Point(15 * (3 === e ? -1 : 1), 0));
                        a.size.setValue(2 * Math.abs(t.x))
                    }
                }
                getSourceIcon() {
                    const e = this.svgContent();
                    return null === e ? null : {
                        type: "svgContent",
                        content: e
                    }
                }
                onSourceIconChanged() {
                    return this._onIconChanged
                }
                svgContent() {
                    return this._svgContent
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.addExclusion("angle")
                }
            }
        },
        194167: (e, t, i) => {
            i.d(t, {
                LineToolText: () => d,
                LineToolTextAbsolute: () => p
            });
            var r = i(650151),
                n = i(86441),
                s = i(777754),
                o = i(892142),
                l = i(40210),
                a = i.n(l),
                c = i(87225),
                h = i(241056),
                u = i(404822);
            class d extends o.LineDataSource {
                constructor(e, t, r, n) {
                    const s = t || d.createProperties();
                    super(e, s, r, n), this._barSpacing = e.timeScale().barSpacing(), this._recalculatePointsOnCenter = !1, Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 863107)).then((({
                        TextPaneView: t
                    }) => {
                        const i = this._recalculatePointsOnCenter ? (e, t) => {
                            this._recalculatePointsOnCenter && this._recalculateCenterPosition(e, t)
                        } : void 0;
                        this._setPaneViews([new t(this, e, void 0, void 0, void 0, void 0, void 0, i)])
                    }))
                }
                centerPosition() {
                    this._recalculatePointsOnCenter = !0
                }
                setPoint(e, t, i) {
                    const n = this.properties().childs();
                    let s;
                    if (1 === e && n.wordWrapWidth.value()) {
                        const e = this.model().timeScale();
                        s = this.isFixed() ? (0, r.ensureDefined)(this.fixedPoint()).x : e.indexToCoordinate(this.points()[0].index);
                        const i = e.indexToCoordinate(t.index) - s - ~~(n.fontsize.value() / 6);
                        if (!isFinite(i)) return;
                        n.wordWrapWidth.setValue(Math.max(100, i))
                    }
                }
                pointsCount() {
                    return 1
                }
                name() {
                    return "Text"
                }
                setPriceScale(e) {
                    super.setPriceScale(e), e && e.priceRange() && (this._priceDencity = e.height() / (0, r.ensureNotNull)(e.priceRange()).length(), this._isPriceDencityLog = e.isLog())
                }
                restoreSize() {
                    const e = (0, r.ensureNotNull)(this.priceScale());
                    this._barSpacing = this.model().timeScale().barSpacing(), this._priceDencity = e.height() / (0, r.ensureNotNull)(e.priceRange()).length(), this.redraw((0, u.sourceChangeEvent)(this.id()))
                }
                redraw(e) {
                    this.updateAllViews(e), this._model.updateSource(this)
                }
                template() {
                    const e = super.template();
                    return e.text = this.properties().childs().text.value(), e
                }
                state(e) {
                    const t = super.state(e);
                    return e && (t.state.fixedSize = !1), t
                }
                barSpacing() {
                    return this._barSpacing
                }
                priceDencity() {
                    return this._priceDencity
                }
                isPriceDencityLog() {
                    return this._isPriceDencityLog
                }
                hasEditableCoordinates() {
                    return !1
                }
                shouldBeRemovedOnDeselect() {
                    return "" === this._properties.childs().text.value().trim()
                }
                static createProperties(e) {
                    const t = new c.DefaultProperty("linetooltext", e);
                    return this._configureProperties(t), t
                }
                _applyTemplateImpl(e) {
                    super._applyTemplateImpl(e), this.properties().childs().text.setValue(e.text)
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 71984)).then((e => e.TextDefinitionsViewModel))
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.hasChild("text") || e.addChild("text", new(a())(s.t(null, void 0, i(37229)))), e.addChild("linesColors", new h.LineToolColorsProperty([e.childs().borderColor])), e.addChild("textsColors", new h.LineToolColorsProperty([e.childs().color])), e.addExclusion("text"), e.addExclusion("linesColors"), e.addExclusion("textsColors")
                }
                _recalculateCenterPosition(e, t) {
                    const i = this.isFixed() ? (0, r.ensureDefined)(this.fixedPoint()) : (0, r.ensureNotNull)(this.pointToScreenPoint(this._points[0])),
                        s = new n.Point(i.x - e / 2, i.y - t / 2),
                        o = (0, r.ensureNotNull)(this.screenPointToPoint(s));
                    this.setPoints([o]), this.normalizePoints(), this.createServerPoints(), this.redraw((0, u.sourceChangeEvent)(this.id()))
                }
            }
            class p extends d {
                constructor(e, t) {
                    super(e, t || p.createProperties())
                }
                name() {
                    return "Anchored Text"
                }
                hasEditableCoordinates() {
                    return !1
                }
                isFixed() {
                    return !0
                }
                static createProperties(e) {
                    const t = new c.DefaultProperty("linetooltextabsolute", e);
                    return this._configureProperties(t), t
                }
            }
        },
        672874: (e, t, i) => {
            i.d(t, {
                LineToolThreeDrivers: () => o
            });
            var r = i(87225),
                n = i(892142),
                s = i(241056);
            class o extends n.LineDataSource {
                constructor(e, t, r, n) {
                    const s = t || o.createProperties();
                    super(e, s, r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 443858)).then((t => {
                        this._setPaneViews([new t.LineToolThreeDrivesPaneView(this, e)])
                    }))
                }
                pointsCount() {
                    return 7
                }
                name() {
                    return "Three Drives Pattern"
                }
                static createProperties(e) {
                    const t = new r.DefaultProperty("linetoolthreedrivers", e);
                    return this._configureProperties(t), t
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 875853)).then((e => e.PatternWithoutBackgroundDefinitionsViewModel))
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.addChild("linesColors", new s.LineToolColorsProperty([e.childs().color])), e.addChild("textsColors", new s.LineToolColorsProperty([e.childs().textcolor])), e.addChild("linesWidths", new s.LineToolWidthsProperty([e.childs().linewidth])), e.hasChild("backgroundsColors") && e.removeProperty("backgroundsColors")
                }
            }
        },
        341880: (e, t, i) => {
            i.d(t, {
                LineToolTimeCycles: () => o
            });
            var r = i(822914),
                n = i(87225),
                s = i(892142);
            class o extends s.LineDataSource {
                constructor(e, t, r, n) {
                    super(e, null != t ? t : o.createProperties(), r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 238265)).then((e => {
                        this._setPaneViews([new e.TimeCyclesPaneView(this, this._model)])
                    }))
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Time Cycles"
                }
                setPoint(e, t) {
                    const i = (0, r.default)(t),
                        n = this._points[0],
                        s = this._points[1];
                    n.price = i.price, s.price = i.price, this._points[e] = i, this.normalizePoints()
                }
                addPoint(e, t, i) {
                    const r = super.addPoint(e, t, !0);
                    if (r) {
                        const e = this._points[0];
                        this._points[1].price = e.price, i || (this.normalizePoints(), this.createServerPoints())
                    }
                    return r
                }
                static createProperties(e) {
                    const t = new n.DefaultProperty("linetooltimecycles", e);
                    return this._configureProperties(t), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 784557))).TimeCyclesPatternDefinitionsViewModel
                }
            }
        },
        327867: (e, t, i) => {
            const r = i(892142).LineDataSource,
                n = i(437181).alignToStep;
            class s extends r {
                constructor(e, t) {
                    super(e, t), this.customization.forcePriceAxisLabel = !0, this.customization.disableErasing = !0, this.customization.showInObjectsTree = !1, this.setSelectionEnabled(!1)
                }
                isSynchronizable() {
                    return !1
                }
                pointsCount() {
                    return s.POINTS_COUNT
                }
                hasContextMenu() {
                    return !1
                }
                state() {
                    return null
                }
                startMoving() {
                    super.startMoving.apply(this, arguments), this._cursorMoved = !1
                }
                endMoving() {
                    super.endMoving.apply(this, arguments), this._cursorMoved = !1
                }
                _correctPoints(e, t) {
                    this._currentMovingPoint && this._startMovingPoint ? this._currentMovingPoint.logical.price - this._startMovingPoint.logical.price && (this._cursorMoved = !0) : this._cursorMoved = !1;
                    for (var i = 1 / this.priceScale().mainSource().base(), r = 0; r < e.length; r++) {
                        var s = e[r];
                        this._cursorMoved && (s.price = this._currentMovingPoint.logical.price), s.price = n(s.price, i), e[r] = s
                    }
                }
                userEditEnabled() {
                    return !0
                }
                movable() {
                    return !1
                }
                canBeHidden() {
                    return !1
                }
                isUserDeletable() {
                    return !1
                }
                showInObjectTree() {
                    return !1
                }
                doesMovingAffectsUndo() {
                    return !1
                }
                isAvailableInFloatingWidget() {
                    return !1
                }
                timeAxisViews() {
                    return null
                }
                cloneable() {
                    return !1
                }
                copiable() {
                    return !1
                }
            }
            s.POINTS_COUNT = 1, e.exports.LineToolTrading = s
        },
        447067: (e, t, i) => {
            i.d(t, {
                LineToolTrendAngle: () => u
            });
            var r = i(86441),
                n = i(650151),
                s = i(87225),
                o = i(892142),
                l = i(40210),
                a = i.n(l),
                c = i(404822);
            class h extends(a()) {
                constructor(e) {
                    super(), this._lineSource = e
                }
                value() {
                    return Math.round(180 * this._lineSource.angle() / Math.PI)
                }
                setValue(e) {
                    const t = e * Math.PI / 180,
                        i = (0, n.ensureNotNull)(this._lineSource.pointToScreenPoint(this._lineSource.points()[0])),
                        s = Math.cos(t),
                        o = -Math.sin(t),
                        l = new r.Point(s, o),
                        a = i.addScaled(l, this._lineSource.distance()),
                        h = (0, n.ensureNotNull)(this._lineSource.screenPointToPoint(a));
                    this._lineSource.setPoint(1, h);
                    const u = this._lineSource.model();
                    u.updateSource(this._lineSource), this._lineSource.updateAllViews((0, c.sourceChangeEvent)(this._lineSource.id())), u.updateSource(this._lineSource)
                }
                notifyChanged() {
                    this._listeners.fire(this)
                }
            }
            class u extends o.LineDataSource {
                constructor(e, t, r, n) {
                    const s = t || u.createProperties();
                    super(e, s, r, n), this._angle = 0, this._distance = 0, s.addChild("angle", new h(this)), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 23815)).then((({
                        TrendAnglePaneView: t
                    }) => {
                        const i = [new t(this, e)];
                        this._setPaneViews(i)
                    }))
                }
                isSynchronizable() {
                    return !1
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Trend Angle"
                }
                angle() {
                    return this._angle
                }
                distance() {
                    return this._distance
                }
                addPoint(e, t) {
                    const i = super.addPoint(e, t);
                    return i && this._calculateAngle(), i
                }
                setLastPoint(e, t) {
                    const i = super.setLastPoint(e, t);
                    return this.points().length > 1 && this._calculateAngle(), i
                }
                axisPoints() {
                    if (this.points().length < 2) return [];
                    const e = [this.points()[0]],
                        t = (0,
                            n.ensureNotNull)(this.pointToScreenPoint(this.points()[0])),
                        i = Math.cos(this._angle) * this._distance,
                        s = -Math.sin(this._angle) * this._distance,
                        o = t.add(new r.Point(i, s)),
                        l = (0, n.ensureNotNull)(this.screenPointToPoint(o));
                    return e.push(l), e
                }
                setPoint(e, t, i) {
                    super.setPoint(e, t, i), this.points().length > 1 && 1 === e && this._calculateAngle()
                }
                restoreData(e) {
                    var t, i;
                    this._angle = null !== (t = e.angle) && void 0 !== t ? t : 0, this._distance = null !== (i = e.distance) && void 0 !== i ? i : 0
                }
                state(e) {
                    const t = super.state(e);
                    return t.angle = this._angle, t.distance = this._distance, t
                }
                cloneData(e) {
                    this._angle = e.angle(), this._distance = e.distance()
                }
                canHasAlert() {
                    return !0
                }
                static createProperties(e) {
                    const t = new s.DefaultProperty("linetooltrendangle", e);
                    return this._configureProperties(t), t
                }
                _snapTo45DegreesAvailable() {
                    return !0
                }
                _getAlertPlots() {
                    const e = this._linePointsToAlertPlot(this._points, null, this._properties.childs().extendLeft.value(), this._properties.childs().extendRight.value());
                    return null === e ? [] : [e]
                }
                _calculateAngle() {
                    const e = (0, n.ensureNotNull)(this.pointToScreenPoint(this.points()[0]));
                    let t = (0, n.ensureNotNull)(this.pointToScreenPoint(this.points()[1])).subtract(e);
                    const i = t.length();
                    i > 0 ? (t = t.normalized(), this._angle = Math.acos(t.x), t.y > 0 && (this._angle = -this._angle), this._distance = i) : this._angle = 0;
                    this.properties().childs().angle.notifyChanged()
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 373064)).then((e => e.TrendAngleDefinitionsViewModel))
                }
            }
        },
        901708: (e, t, i) => {
            i.d(t, {
                LineToolTrendBasedFibExtension: () => c
            });
            var r = i(777754),
                n = i(683890),
                s = i(955130),
                o = i(241056),
                l = i(892142);
            const a = new n.TranslatedString("erase level line", r.t(null, void 0, i(812962)));
            class c extends l.LineDataSource {
                constructor(e, t, r, n) {
                    super(e, t || c.createProperties(), r, n), this.version = 2, Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 323246)).then((({
                        TrendBasedFibExtensionPaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                levelsCount() {
                    return 24
                }
                pointsCount() {
                    return 3
                }
                name() {
                    return "Trend-Based Fib Extension"
                }
                migrateVersion(e, t) {
                    1 === e && this.properties().childs().extendLines.setValue(!0)
                }
                processErase(e, t) {
                    const i = "level" + t,
                        r = this.properties().childs()[i].childs().visible;
                    e.setProperty(r, !1, a)
                }
                fibLevelsBasedOnLogScale() {
                    var e;
                    return this.properties().childs().fibLevelsBasedOnLogScale.value() && Boolean(null === (e = this.priceScale()) || void 0 === e ? void 0 : e.isLog())
                }
                static createProperties(e) {
                    const t = new s.LevelsProperty("linetooltrendbasedfibextension", e, !1, {
                        range: [0, 8]
                    });
                    return this._configureProperties(t), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 345818))).FibDrawingsWith24LevelsDefinitionsViewModel
                }
                static _configureProperties(e) {
                    const t = e.childs();
                    super._configureProperties(e);
                    const i = [t.trendline.childs().color];
                    for (let e = 1; e <= 24; e++) {
                        const r = t["level" + e].childs().color;
                        i.push(r)
                    }
                    e.addChild("linesColors", new o.LineToolColorsProperty(i));
                    const r = [t.trendline.childs().linewidth, t.levelsStyle.childs().linewidth];
                    e.addChild("linesWidths", new o.LineToolWidthsProperty(r))
                }
            }
        },
        27601: (e, t, i) => {
            i.d(t, {
                LineToolTrendBasedFibTime: () => c
            });
            var r = i(777754),
                n = i(683890),
                s = i(892142),
                o = i(955130),
                l = i(241056);
            const a = new n.TranslatedString("erase level line", r.t(null, void 0, i(812962)));
            class c extends s.LineDataSource {
                constructor(e, t, r, n) {
                    super(e, t || c.createProperties(), r, n), this.version = 1, Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 14026)).then((({
                        TrendBasedFibTimePaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                levelsCount() {
                    return 11
                }
                pointsCount() {
                    return 3
                }
                name() {
                    return "Trend-Based Fib Time"
                }
                processErase(e, t) {
                    const i = "level" + t,
                        r = this.properties().childs()[i].childs().visible;
                    e.setProperty(r, !1, a)
                }
                static createProperties(e) {
                    const t = new o.LevelsProperty("linetooltrendbasedfibtime", e, !1, {
                        range: [1, 11]
                    });
                    return this._configureProperties(t), t
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 69792))).TrendBasedFibTimeDefinitionsViewModel
                }
                static _configureProperties(e) {
                    super._configureProperties(e);
                    const t = e.childs(),
                        i = [t.trendline.childs().linewidth],
                        r = [t.trendline.childs().color];
                    for (let e = 1; e <= 11; e++) i.push(t["level" + e].childs().linewidth), r.push(t["level" + e].childs().color);
                    e.addChild("linesColors", new l.LineToolColorsProperty(r)), e.addChild("linesWidths", new l.LineToolWidthsProperty(i))
                }
            }
        },
        732747: (e, t, i) => {
            i.d(t, {
                LineToolTrendLine: () => a
            });
            var r = i(87225),
                n = i(892142),
                s = i(861765),
                o = i(40210),
                l = i.n(o);
            class a extends n.LineDataSource {
                constructor(e, t, r, n) {
                    super(e, t || a.createProperties(), r, n), this._trendLinePaneView = null, Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 335819)).then((({
                        TrendLinePaneView: e
                    }) => {
                        this._trendLinePaneView = new e(this, this._model), this._setPaneViews([this._trendLinePaneView])
                    }))
                }
                dataAndViewsReady() {
                    return super.dataAndViewsReady() && null !== this._trendLinePaneView && this._trendLinePaneView.iconsReady()
                }
                pointsCount() {
                    return 2
                }
                name() {
                    return "Trend Line"
                }
                canHasAlert() {
                    return !0
                }
                showPriceLabels() {
                    return this._properties.childs().showPriceLabels.value()
                }
                createPriceAxisView(e) {
                    return new s.LineToolPriceAxisView(this, {
                        pointIndex: e,
                        backgroundPropertyGetter: () => this.showPriceLabels() ? this._properties.childs().linecolor.value() : null
                    })
                }
                isForcedDrawPriceAxisLabel() {
                    return this.showPriceLabels()
                }
                template() {
                    const e = super.template();
                    return e.text = this.properties().childs().text.value(), e
                }
                static createProperties(e) {
                    const t = new r.DefaultProperty("linetooltrendline", e);
                    return this._configureProperties(t), t
                }
                _getAlertPlots() {
                    const e = this._linePointsToAlertPlot(this._points, null, this._properties.childs().extendLeft.value(), this._properties.childs().extendRight.value());
                    return null === e ? [] : [e]
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 113174))).TrendLineDefinitionsViewModel
                }
                _applyTemplateImpl(e) {
                    super._applyTemplateImpl(e),
                        this.properties().childs().text.setValue(e.text || "")
                }
                _snapTo45DegreesAvailable() {
                    return !0
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.hasChild("text") || e.addChild("text", new(l())("")), e.addExclusion("text")
                }
            }
        },
        96684: (e, t, i) => {
            i.d(t, {
                LineToolTrianglePattern: () => o
            });
            var r = i(87225),
                n = i(892142),
                s = i(241056);
            class o extends n.LineDataSource {
                constructor(e, t, r, n) {
                    const s = t || o.createProperties();
                    super(e, s, r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 374108)).then((t => {
                        this._setPaneViews([new t.LineToolTrianglePatternPaneView(this, e)])
                    }))
                }
                pointsCount() {
                    return 4
                }
                name() {
                    return "Triangle Pattern"
                }
                static createProperties(e) {
                    const t = new r.DefaultProperty("linetooltrianglepattern", e);
                    return this._configureProperties(t), t
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 331777)).then((e => e.PatternWithBackgroundDefinitionViewModel))
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.addChild("linesColors", new s.LineToolColorsProperty([e.childs().color])), e.addChild("textsColors", new s.LineToolColorsProperty([e.childs().textcolor])), e.addChild("backgroundsColors", new s.LineToolColorsProperty([e.childs().backgroundColor]))
                }
            }
        },
        521188: (e, t, i) => {
            var r = i(892142).LineDataSource,
                n = i(87225).DefaultProperty,
                s = i(241056).LineToolColorsProperty;
            class o extends r {
                constructor(e, t, r, n) {
                    super(e, t || o.createProperties(), r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.t.bind(i, 822038, 19)).then((({
                        TrianglePaneView: e
                    }) => {
                        this._setPaneViews([new e(this, this._model)])
                    }))
                }
                pointsCount() {
                    return 3
                }
                name() {
                    return "Triangle"
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 27619))).GeneralFiguresDefinitionsViewModel
                }
                static createProperties(e) {
                    var t = new n("linetooltriangle", e);
                    return this._configureProperties(t), t
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.addChild("linesColors", new s([e.childs().color]))
                }
            }
            t.LineToolTriangle = o
        },
        131089: (e, t, i) => {
            i.d(t, {
                isTwitterUrl: () => a,
                isTwitterProfileImageUrl: () => c,
                createTweetLineToolByUrl: () => h
            });
            var r = i(650151),
                n = i(62802),
                s = i(777491),
                o = i(809350),
                l = i(310495);

            function a(e) {
                try {
                    const t = new URL(e);
                    return ("twitter.com" === t.hostname || t.hostname.endsWith(".twitter.com")) && "https:" === t.protocol
                } catch (e) {
                    return !1
                }
            }

            function c(e) {
                try {
                    const t = new URL(e);
                    return "pbs.twimg.com" === t.hostname && "https:" === t.protocol && t.pathname.startsWith("/profile_images/")
                } catch (e) {
                    return !1
                }
            }

            function h(e, t, i = !1) {
                return async function(e) {
                    const t = new URL("/api/v1/get-tweet-data/", location.href);
                    return t.searchParams.append("tweet_url", e), fetch(t.toString()).then((e => {
                        if (!e.ok) throw new Error(`Error processing tweet: ${e.statusText}`);
                        return e.json()
                    }))
                }(e).then((a => {
                    const c = function(e, t) {
                            var i;
                            return {
                                id: e.id,
                                createdAt: e.created_at,
                                text: (0, o.clean)(e.text, !0),
                                username: `@${e.username}`,
                                user: e.user,
                                profileImageUrl: e.profile_image_url,
                                hashtags: e.hashtags.join(" "),
                                tweetUrl: null !== (i = e.tweet_url) && void 0 !== i ? i : t
                            }
                        }(a, e),
                        h = {
                            price: 0,
                            time_t: c.createdAt,
                            offset: 0
                        },
                        u = t.mainSeries(),
                        d = (0, r.ensureNotNull)(t.model().paneForSource(u)),
                        p = d.newLineToolZOrder(!0),
                        _ = {
                            type: "drawing",
                            source: {
                                id: (0, s.randomHashN)(6),
                                zorder: p,
                                type: "LineToolTweet",
                                position: 50,
                                state: {
                                    interval: "1",
                                    ...l.LineToolTweet.createProperties().state()
                                },
                                tweetData: c,
                                symbol: u.symbol(),
                                ownerSource: u.id(),
                                points: [h]
                            },
                            geometry: [],
                            modelId: t.model().id()
                        },
                        P = t.pasteLineTool(d, _, !0, !0);
                    return i && n.setValue("hint.pasteTweet", !0, {
                        forceFlush: !0
                    }), P.pointAdded().subscribe(null, (() => t.scrollToLineTool(P)), !0), P
                }))
            }
        },
        310495: (e, t, i) => {
            i.d(t, {
                LineToolTweet: () => b
            });
            var r = i(87225),
                n = i(777754),
                s = i(62802),
                o = i(345848),
                l = i(272001),
                a = i(846778),
                c = i(906125),
                h = i(480071),
                u = i(727775),
                d = i(131089);
            const p = (0, l.getLogger)("Chart.TweetDialog"),
                _ = n.t(null, void 0, i(100970)),
                P = n.t(null, void 0, i(735415));
            let v = null;

            function g(e) {
                "LineToolTweet" === e ? (window.is_authenticated || (0, h.resetToCursor)(!0), window.runOrSignIn((() => {
                    h.tool.setValue("LineToolTweet"), v = (0, u.showCustomUrlEventDialog)({
                        onConfirm: m,
                        onClose: () => {
                            v = null, "LineToolTweet" === h.tool.value() && (0, h.resetToCursor)(!0)
                        },
                        title: _,
                        placeholderText: P
                    }), (0, o.trackEvent)("Tweet", "Open tweet dialog")
                }), {
                    source: "Change drawing tool state"
                })) : null !== v && v.then((e => e()))
            }

            function m(e) {
                const t = (0, c.chartWidgetCollectionService)();
                if (null === t) return;
                if (!(0, d.isTwitterUrl)(e)) return void p.logWarn(`Invalid tweet url: ${e}`);
                const i = !Boolean(s.getBool("hint.pasteTweet")),
                    r = t.activeChartWidget.value();
                (0, d.createTweetLineToolByUrl)(e, r.model()).then((() => {
                    i && (0, a.showPasteLineToolHint)(t.getContainer(), "hint.pasteTweet")
                }))
            }
            var f = i(40210),
                C = i.n(f),
                y = i(812080);
            class T extends y.CustomEventItem {
                constructor(e, t) {
                    super(t), this._data = e
                }
                tweetData() {
                    return this._data
                }
                index() {
                    return this._source.eventTimePointIndex()
                }
                time() {
                    return this._data.createdAt
                }
                avatar() {
                    return this._data.profileImageUrl
                }
            }
            class b extends y.LineToolCustomUrlEvent {
                constructor(e, t, r, n) {
                    super(e, t || b.createProperties(), r, n), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 865183)).then((t => {
                        this._setPaneViews([new t.TweetPaneView(this, e)])
                    }))
                }
                name() {
                    return "Tweet"
                }
                state(e) {
                    const t = super.state(e);
                    return this._item && (t.tweetData = this._item.tweetData()), e && (t.eventTimePointIndex = this._eventTimePointIndex), t
                }
                restoreData(e) {
                    if (e.tweetData) {
                        if (!(0, d.isTwitterUrl)(e.tweetData.tweetUrl)) throw new Error(`Invalid url for tweet line tool: ${e.tweetData.tweetUrl}`);
                        this._item = new T(e.tweetData, this)
                    }
                    void 0 !== e.eventTimePointIndex && (this._eventTimePointIndex = e.eventTimePointIndex)
                }
                static createProperties(e) {
                    const t = new r.DefaultProperty("linetoolTweet", e);
                    return this._configureProperties(t), t.hasChild("position") || t.addChild("position", new(C())(50)), t.addExclusion("position"), t
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 347044)).then((e => e.TweetDefinitionsViewModel))
                }
            }(0, h.runOnDrawingStateReady)((() => {
                h.tool.subscribe(g)
            }))
        },
        968058: (e, t, i) => {
            i.d(t, {
                LineToolVertLineTimeAxisView: () => n
            });
            var r = i(231193);
            class n extends r.LineDataSourceTimeAxisView {
                constructor(e) {
                    super(e, 0)
                }
                _getBgColor() {
                    return this._source.properties().linecolor.value()
                }
                _getAlwaysInViewPort() {
                    return !1
                }
                _getIndex() {
                    const e = this._source.points();
                    return 0 === e.length ? null : e[0].index
                }
            }
        },
        157116: (e, t, i) => {
            i.d(t, {
                LineToolVertLine: () => h
            });
            var r = i(650151),
                n = i(86441),
                s = i(87225),
                o = i(40210),
                l = i.n(o),
                a = i(892142),
                c = i(968058);
            class h extends a.LineDataSource {
                constructor(e, t, r, n) {
                    const s = t || h.createProperties();
                    super(e, s, r, n), this._timeAxisView = new c.LineToolVertLineTimeAxisView(this), this._paneViewFactory = null, this.properties().childs().extendLine.subscribe(this, (() => e.lightUpdate())), Promise.all([i.e(47342), i.e(81679), i.e(51583)]).then(i.bind(i, 565834)).then((t => {
                        this._paneViewFactory = i => new t.VertLinePaneView(this, e, i), this._model.lightUpdate()
                    }))
                }
                destroy() {
                    this.properties().childs().extendLine.unsubscribeAll(this), super.destroy()
                }
                pointsCount() {
                    return 1
                }
                name() {
                    return "Vertical Line"
                }
                timeAxisViews() {
                    return this.isSourceHidden() ? null : this.properties().childs().showTime.value() ? [this._timeAxisView] : null
                }
                updateAllViews(e) {
                    super.updateAllViews(e), this._timeAxisView.update(e)
                }
                canHasAlert() {
                    return !0
                }
                template() {
                    const e = super.template();
                    return e.text = this.properties().childs().text.value(), e
                }
                isMultiPaneAvailable() {
                    return !0
                }
                isMultiPaneEnabled() {
                    return this.properties().childs().extendLine.value()
                }
                paneViews(e) {
                    return e = (0, r.ensureDefined)(e), this.isMultiPaneEnabled() || this._model.paneForSource(this) === e ? (null === this._getPaneViews(e) && null !== this._paneViewFactory && this._setPaneViews([this._paneViewFactory(e)], e, !0), super.paneViews(e)) : null
                }
                priceAxisViews() {
                    return null
                }
                priceAxisPoints() {
                    return []
                }
                pointToScreenPoint(e) {
                    const t = this._model.timeScale();
                    if (t.isEmpty()) return null;
                    const i = t.indexToCoordinate(e.index);
                    return new n.Point(i, 0)
                }
                convertYCoordinateToPriceForMoving(e) {
                    return 0
                }
                static createProperties(e) {
                    null != e && (void 0 === e.textOrientation && (e.textOrientation = "horizontal"), void 0 === e.extendLine && (e.extendLine = !1));
                    const t = new s.DefaultProperty("linetoolvertline", e);
                    return this._configureProperties(t), t
                }
                _getAlertPlots() {
                    const e = this._points[0],
                        t = {
                            index: e.index,
                            price: e.price + 1
                        },
                        i = this._linePointsToAlertPlot([e, t], null, !0, !0);
                    return null === i ? [] : [i]
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.all([i.e(79533), i.e(83278), i.e(44728), i.e(60821), i.e(18537)]).then(i.bind(i, 189905)).then((e => e.VerticalLineDefinitionsViewModel))
                }
                _applyTemplateImpl(e) {
                    super._applyTemplateImpl(e), this.properties().childs().text.setValue(e.text || "")
                }
                static _configureProperties(e) {
                    super._configureProperties(e), e.hasChild("text") || e.addChild("text", new(l())("")), e.addExclusion("text")
                }
            }
        },
        404822: (e, t, i) => {
            i.r(t), i.d(t, {
                sourceChangeEvent: () => n,
                globalChangeEvent: () => o,
                viewportChangeEvent: () => a,
                selectionChangeEvent: () => h
            });
            var r = i(827147);

            function n(e) {
                return (0, r.default)(e) ? {
                    type: "data-source-change",
                    sourceId: e
                } : {
                    type: "data-source-change",
                    ...e
                }
            }
            const s = {
                type: "global-change"
            };

            function o() {
                return s
            }
            const l = {
                type: "viewport-change"
            };

            function a() {
                return l
            }
            const c = {
                type: "selection-change"
            };

            function h() {
                return c
            }
        },
        854905: (e, t, i) => {
            var r;
            i.d(t, {
                    PaneCursorType: () => r
                }),
                function(e) {
                    e[e.Default = 0] = "Default", e[e.Pointer = 1] = "Pointer", e[e.Eraser = 2] = "Eraser", e[e.Dot = 3] = "Dot", e[e.Grabbing = 4] = "Grabbing", e[e.ZoomIn = 5] = "ZoomIn", e[e.VerticalResize = 6] = "VerticalResize", e[e.HorizontalResize = 7] = "HorizontalResize", e[e.DiagonalNeSwResize = 8] = "DiagonalNeSwResize", e[e.DiagonalNwSeResize = 9] = "DiagonalNwSeResize"
                }(r || (r = {}))
        },
        914679: (e, t, i) => {
            i.r(t), i.d(t, {
                clearRectWithGradient: () => o,
                fillRectInnerBorder: () => l,
                drawHorizontalLine: () => a,
                drawVerticalLine: () => c,
                drawRoundRect: () => u,
                drawRoundRectWithInnerBorder: () => d,
                fillRectWithBorder: () => p,
                createCircle: () => _,
                drawPoly: () => P,
                setLineStyle: () => v,
                drawLine: () => g
            });
            var r = i(86441),
                n = i(631586),
                s = i(96841);

            function o(e, t, i, r, n, s, o) {
                e.save(), e.globalCompositeOperation = "copy";
                const l = e.createLinearGradient(0, 0, 0, n);
                l.addColorStop(0, s), l.addColorStop(1, o), e.fillStyle = l, e.fillRect(t, i, r, n), e.restore()
            }

            function l(e, t, i, r, n, s) {
                e.fillRect(t + s, i, r - 2 * s, s), e.fillRect(t + s, i + n - s, r - 2 * s, s), e.fillRect(t, i, s, n), e.fillRect(t + r - s, i, s, n)
            }

            function a(e, t, i, r) {
                e.beginPath();
                const n = e.lineWidth % 2 ? .5 : 0;
                e.moveTo(i, t + n), e.lineTo(r, t + n), e.stroke()
            }

            function c(e, t, i, r) {
                e.beginPath();
                const n = e.lineWidth % 2 ? .5 : 0;
                e.moveTo(t + n, i), e.lineTo(t + n, r), e.stroke()
            }

            function h(e, t) {
                return Array.isArray(e) ? e.map((e => 0 === e ? e : e + t)) : e + t
            }

            function u(e, t, i, r, n, s, o) {
                let l, a, c, h;
                if (Array.isArray(s))
                    if (2 === s.length) {
                        const e = Math.max(0, s[0]),
                            t = Math.max(0, s[1]);
                        l = e, a = e, c = t, h = t
                    } else {
                        if (4 !== s.length) throw new Error("Wrong border radius - it should be like css border radius");
                        l = Math.max(0, s[0]), a = Math.max(0, s[1]), c = Math.max(0, s[2]), h = Math.max(0, s[3])
                    }
                else {
                    const e = Math.max(0, s);
                    l = e, a = e, c = e, h = e
                }
                o || e.beginPath(), e.moveTo(t + l, i), e.lineTo(t + r - a, i), 0 !== a && e.arcTo(t + r, i, t + r, i + a, a), e.lineTo(t + r, i + n - c), 0 !== c && e.arcTo(t + r, i + n, t + r - c, i + n, c), e.lineTo(t + h, i + n), 0 !== h && e.arcTo(t, i + n, t, i + n - h, h), e.lineTo(t, i + l), 0 !== l && e.arcTo(t, i, t + l, i, l)
            }

            function d(e, t, i, r, n, o, l = 0, a = 0, c = "", d = s.LineStyle.Solid) {
                if (e.save(), !a || !c || c === o) return u(e, t, i, r, n, l), e.fillStyle = o, e.fill(), void e.restore();
                const p = a / 2;
                if ("transparent" !== o) {
                    const p = "transparent" !== c && d !== s.LineStyle.Solid;
                    u(e, p ? t : t + a, p ? i : i + a, p ? r : r - 2 * a, p ? n : n - 2 * a, p ? l : h(l, -a)), e.fillStyle = o, e.fill()
                }
                if ("transparent" !== c) {
                    u(e, t + p, i + p, r - a, n - a, h(l, -p)), e.lineWidth = a, e.strokeStyle = c, v(e, d), e.closePath(), e.stroke()
                }
                e.restore()
            }

            function p(e, t, i, n, s, o, l, a, c, h, u, d, p, _, P) {
                const g = h ? 0 : t,
                    m = u ? p : n;
                if (void 0 !== o && (e.fillStyle = o, e.fillRect(g, i, m - g + _, s - i)), void 0 !== l && a > 0) {
                    if (e.beginPath(), v(e, c), void 0 !== P) {
                        const t = P.map((e => e * a));
                        e.setLineDash(t)
                    }
                    let o = (0, r.point)(0, 0),
                        h = (0, r.point)(0, 0),
                        u = (0, r.point)(0, 0),
                        p = (0, r.point)(0, 0);
                    switch (d) {
                        case "outer":
                            {
                                const e = .5 * a;u = (0, r.point)(0, e),
                                p = (0, r.point)(0, e),
                                o = (0, r.point)(e, -a),
                                h = (0, r.point)(e, -a);
                                break
                            }
                        case "center":
                            {
                                const e = a % 2 ? .5 : 0,
                                    t = a % 2 ? .5 : _;u = (0, r.point)(.5 * a - e, -e),
                                p = (0, r.point)(t + .5 * a, -e),
                                o = (0, r.point)(-e, e + .5 * a),
                                h = (0, r.point)(t, e + .5 * a);
                                break
                            }
                        case "inner":
                            {
                                const e = .5 * a;u = (0, r.point)(0, -e),
                                p = (0, r.point)(1, -e),
                                o = (0, r.point)(-e, a),
                                h = (0, r.point)(1 - e, a);
                                break
                            }
                    }
                    e.lineWidth = a, e.strokeStyle = l, e.moveTo(g - u.x, i - u.y),
                        e.lineTo(m + p.x, i - p.y), e.moveTo(n + h.x, i + h.y), e.lineTo(n + h.x, s - h.y), e.moveTo(g - u.x, s + u.y), e.lineTo(m + p.x, s + p.y), e.moveTo(t - o.x, i + o.y), e.lineTo(t - o.x, s - o.y), e.stroke()
                }
            }

            function _(e, t, i, r) {
                e.beginPath(), e.arc(t, i, r, 0, 2 * Math.PI, !1), e.closePath()
            }

            function P(e, t, i) {
                e.beginPath(), e.moveTo(t[0].x, t[0].y);
                for (const i of t) e.lineTo(i.x, i.y);
                e.closePath(), e.stroke(), i && e.fill()
            }

            function v(e, t) {
                let i = [];
                t !== n.LINESTYLE_SOLID && (i = function(e, t) {
                    return [
                        [e.lineWidth, 2 * e.lineWidth],
                        [5 * e.lineWidth, 6 * e.lineWidth],
                        [6 * e.lineWidth, 6 * e.lineWidth],
                        [e.lineWidth, 4 * e.lineWidth],
                        [2 * e.lineWidth, e.lineWidth]
                    ][t - 1]
                }(e, t)), e.setLineDash(i)
            }

            function g(e, t, i, r, n) {
                isFinite(t) && isFinite(r) && isFinite(i) && isFinite(n) && (e.save(), e.beginPath(), e.moveTo(t, i), e.lineTo(r, n), e.stroke(), e.restore())
            }
        },
        837291: (e, t, i) => {
            i.d(t, {
                extendAndClipLineSegment: () => h,
                getArrowPoints: () => u,
                optimalBarWidth: () => d,
                optimalCandlestickWidth: () => p,
                optimalHiLoWidth: () => _,
                interactionTolerance: () => P,
                coordinateIsValid: () => v,
                setValidLineStyle: () => g,
                fillScaledRadius: () => m,
                strokeScaledRadius: () => f
            });
            var r = i(86441),
                n = i(5531),
                s = i(545613),
                o = i(758337),
                l = i(914679);
            const a = {
                    line: 13,
                    minDistanceBetweenPoints: 10,
                    series: 14,
                    curve: 10,
                    anchor: 13,
                    esd: 4
                },
                c = {
                    line: 3,
                    minDistanceBetweenPoints: 5,
                    series: 2,
                    curve: 3,
                    anchor: 2,
                    esd: 0
                };

            function h(e, t, i, s, o, l) {
                if ((0, r.equalPoints)(e, t)) return null;
                const a = new r.Point(0, 0),
                    c = new r.Point(i, s);
                if (o) {
                    if (l) {
                        const i = (0, n.intersectLineAndBox)((0, r.lineThroughPoints)(e, t), (0, r.box)(a, c));
                        return Array.isArray(i) ? i : null
                    } {
                        const i = (0, n.intersectRayAndBox)(t, e, (0, r.box)(a, c));
                        return null === i || (0, r.equalPoints)(t, i) ? null : (0, r.lineSegment)(t, i)
                    }
                }
                if (l) {
                    const i = (0, n.intersectRayAndBox)(e, t, (0, r.box)(a, c));
                    return null === i || (0, r.equalPoints)(e, i) ? null : (0, r.lineSegment)(e, i)
                } {
                    const i = (0, n.intersectLineSegmentAndBox)((0, r.lineSegment)(e, t), (0, r.box)(a, c));
                    return Array.isArray(i) ? i : null
                }
            }

            function u(e, t, i, r) {
                const n = .5 * i,
                    s = Math.sqrt(2),
                    o = t.subtract(e),
                    l = o.normalized();
                let a = 5 * i;
                r && (a = Math.min(a, .35 * o.length()));
                const c = 1 * n;
                if (a * s * .2 <= c) return [];
                const h = l.scaled(a),
                    u = t.subtract(h),
                    d = l.transposed(),
                    p = 1 * a,
                    _ = d.scaled(p),
                    P = u.add(_),
                    v = u.subtract(_),
                    g = P.subtract(t).normalized().scaled(c),
                    m = v.subtract(t).normalized().scaled(c),
                    f = t.add(g),
                    C = t.add(m),
                    y = n * (s - 1),
                    T = d.scaled(y),
                    b = Math.min(a - 1 * n / s, n * s * 1),
                    w = l.scaled(b),
                    S = t.subtract(T),
                    x = t.add(T),
                    L = t.subtract(w);
                return [
                    [P, f],
                    [v, C],
                    [S, L.subtract(T)],
                    [x, L.add(T)]
                ]
            }

            function d(e, t) {
                return t = t || 1, Math.floor(.3 * e * t)
            }

            function p(e, t) {
                if (e >= 2.5 && e <= 4) return Math.floor(3 * t);
                const i = 1 - .2 * Math.atan(Math.max(4, e) - 4) / (.5 * Math.PI),
                    r = Math.floor(e * i * t),
                    n = Math.floor(e * t),
                    s = Math.min(r, n);
                return Math.max(Math.floor(t), s)
            }

            function _(e) {
                return .4 * e
            }

            function P() {
                return (0, s.lastMouseOrTouchEventInfo)().isTouch ? a : c
            }

            function v(e) {
                return null != e && !(0, o.isNaN)(e)
            }

            function g(e, t) {
                void 0 !== t && (0, l.setLineStyle)(e, t)
            }

            function m(e, t) {
                const i = Math.max(1, Math.floor(t)) % 2 ? .5 : 0;
                return Math.round(e * t) + i
            }

            function f(e, t, i) {
                const r = Math.max(1, Math.floor(t)) % 2 ? .5 : 0;
                return Math.round(e * t) + (r !== i % 2 ? .5 : 0)
            }
        },
        569523: (e, t, i) => {
            i.d(t, {
                sortSourcesPreOrdered: () => r,
                sortSources: () => n
            });
            const r = {
                News: 10000001,
                BarMarks: 10000002,
                TimeScaleMarks: 10000003,
                ChartEventsSource: 10000004,
                Dividends: 10000005,
                Splits: 10000006,
                Earnings: 10000007,
                RollDates: 10000008,
                FutureContractExpiration: 10000009,
                LineToolOrder: 10000010,
                LineToolPosition: 10000011,
                LineToolExecution: 10000012,
                AlertLabel: 10000013
            };

            function n(e) {
                return [...e].sort(((e, t) => e.zorder() - t.zorder()))
            }
        },
        841404: (e, t, i) => {
            i.d(t, {
                PriceAxisView: () => p
            });
            var r = i(86441),
                n = i(934026),
                s = i(545613),
                o = i(768038),
                l = i(741341),
                a = i(858063),
                c = i(914679),
                h = i(854905);
            class u {
                constructor(e, t) {
                    this.setData(e, t)
                }
                setData(e, t) {
                    this._data = e, this._commonData = t
                }
                draw(e, t, i, r, n, s, a) {
                    var h, u, d;
                    const p = this._data;
                    if (!p.visible || this._isOutOfScreen(t, n)) return;
                    const _ = this._commonData,
                        P = void 0 !== p.labelIcon,
                        v = p.ignoreOffset ? 0 : t.offsetSize,
                        g = t.borderSize,
                        m = t.paddingTop + _.additionalPaddingTop,
                        f = t.paddingBottom + _.additionalPaddingBottom,
                        C = t.paddingInner,
                        y = t.paddingOuter,
                        T = t.fontSize;
                    let b = p.text,
                        w = p.textColor || _.textColor,
                        S = p.secondLine || "",
                        x = _.secondLineTextColor || w,
                        L = p.thirdLine || "";
                    const A = _.thirdLineTextColor || w;
                    0 === S.length && (S = L, x = A, L = ""), 0 === b.length && (b = S, w = x, S = L, x = A, L = ""), e.save(), e.font = t.font;
                    const V = i.yMidCorrection(e, b) * a,
                        I = Math.ceil(i.measureText(e, b)),
                        D = T + m + f,
                        M = Boolean(S),
                        B = Boolean(L),
                        E = M ? Math.ceil(i.measureText(e, S)) : 0,
                        k = B ? Math.ceil(i.measureText(e, L)) : 0,
                        N = g + C + y + I + v,
                        R = E > 0 ? g + C + y + E + v : 0,
                        F = k > 0 ? g + C + y + k + v : 0,
                        O = Math.max(N, R, F),
                        z = Math.max(1, Math.floor(a));
                    let W = Math.round(D * a);
                    W % 2 != z % 2 && (W += 1);
                    const H = Math.round((T + t.lineSpacing) * a),
                        U = Math.round(2 * (T + t.lineSpacing) * a),
                        G = Math.max(1, Math.floor(g * a)),
                        q = p.separatorVisible ? G : 0,
                        j = p.borderVisible ? G : 0,
                        K = P ? W : Math.round(O * a),
                        Q = Math.round(v * a),
                        Y = Math.ceil(r * a),
                        $ = Math.ceil(C * a),
                        X = Math.round((null !== (h = _.fixedCoordinate) && void 0 !== h ? h : _.coordinate) * a) - Math.floor(.5 * a),
                        Z = Math.floor(X + z / 2 - W / 2),
                        J = Z + W,
                        ee = "right" === s,
                        te = ee ? Y - q : q,
                        ie = Y;
                    let re, ne = te;
                    const se = null !== (u = p.backgroung) && void 0 !== u ? u : _.background;
                    e.fillStyle = se;
                    const oe = 2 * a;
                    if (e.textAlign = ee ? "right" : "left", e.textBaseline = "middle", ee ? (ne = te - K, re = te - Q - $ - 1) : (ne = te + K, re = te + Q + $), b || P) {
                        const i = B ? W + U : M ? W + H : W;
                        if (((t, r, n) => {
                                ee ? (0, c.drawRoundRectWithInnerBorder)(e, ne, Z, K, i, t, [oe, 0, 0, oe], j, r, n) : (0, c.drawRoundRectWithInnerBorder)(e, te, Z, K, i, t, [0, oe, oe, 0], j, r, n)
                            })(se, null !== (d = _.borderColor) && void 0 !== d ? d : se, _.borderStyle), p.separatorVisible && (e.fillStyle = t.paneBackgroundColor, e.fillRect(ee ? ie - q : 0, Z, q, J - Z)), P) {
                            switch (p.labelIcon) {
                                case 0:
                                    this._drawPlusIcon(e, te, ne, Z, X, J, z);
                                    break;
                                case 1:
                                    this._drawClockIcon(e, te, ne, X, z, a)
                            }
                            return void e.restore()
                        }
                        e.save(), e.translate(re, (Z + J) / 2 + V), (0, l.drawScaled)(e, a, (() => {
                            e.fillStyle = w, e.fillText(b, 0, 0)
                        })), e.restore()
                    }
                    M && (e.fillStyle = x, e.save(), e.translate(re, (Z + J) / 2 + V + H), (0, l.drawScaled)(e, a, (() => {
                        e.fillText((0, o.startWithLTR)(S), 0, 0)
                    })), e.restore()), B && (e.fillStyle = A, e.save(), e.translate(re, (Z + J) / 2 + V + U), (0, l.drawScaled)(e, a, (() => {
                        e.fillText((0, o.startWithLTR)(L), 0, 0)
                    })), e.restore()), e.restore()
                }
                topBottomTotalHeight(e) {
                    const t = this._lines();
                    if (!this._data.visible || 0 === t) return {
                        top: 0,
                        bottom: 0,
                        total: 0
                    };
                    const i = e.fontSize / 2 + e.paddingTop + this._commonData.additionalPaddingTop,
                        r = (t - .5) * e.fontSize + (t - 1) * e.lineSpacing + e.paddingBottom + this._commonData.additionalPaddingBottom;
                    return {
                        top: i,
                        bottom: r,
                        total: i + r
                    }
                }
                hitTest(e) {
                    const t = this._data.hitTestData;
                    if (void 0 === t || !this._data.visible) return null;
                    const i = (0, s.lastMouseOrTouchEventInfo)().isTouch ? 10 : 0,
                        o = (0, r.box)(new r.Point(t.xl - i, t.y - i), new r.Point(t.xl + t.containerWidth + i, t.y + t.containerHeight + i)),
                        l = t.left && (0, n.pointInBox)(e, o),
                        c = (0, r.box)(new r.Point(t.xr - i, t.y - i), new r.Point(t.xr + t.containerWidth + i, t.y + t.containerHeight + i)),
                        u = t.right && (0, n.pointInBox)(e, c);
                    if (l || u) {
                        const i = l ? "left" : "right";
                        return new a.HitTestResult(a.HitTestResult.CUSTOM, {
                            cursorType: h.PaneCursorType.Default,
                            clickHandler: void 0 === t.clickHandler ? void 0 : t.clickHandler.bind(this, e, i),
                            tapHandler: void 0 === t.clickHandler ? void 0 : t.clickHandler.bind(this, e, i),
                            tooltip: t.tooltip
                        })
                    }
                    return null
                }
                _drawPlusIcon(e, t, i, r, n, s, o) {
                    e.fillStyle = this._commonData.textColor, e.strokeStyle = this._commonData.textColor, e.lineWidth = o;
                    const l = Math.abs(t - i);
                    let a = Math.round(.35 * l);
                    a % 2 != o % 2 && (a += 1);
                    let c = Math.round(.65 * l);
                    c % 2 != o % 2 && (c += 1);
                    const h = Math.floor((l - a) / 2),
                        u = Math.min(t, i),
                        d = u + Math.floor(l / 2 - o / 2);
                    e.fillRect(u + h, n, a, o), e.fillRect(d, r + h, o, a), e.beginPath(), e.arc(d + o / 2, n + o / 2, c / 2, 0, 2 * Math.PI, !1), e.stroke()
                }
                _drawClockIcon(e, t, i, r, n, s) {
                    e.fillStyle = this._commonData.textColor, e.lineWidth = n;
                    const o = Math.abs(t - i);
                    let l = Math.round(.35 * o);
                    l % 2 != n % 2 && (l += 1);
                    let a = Math.round(.65 * o);
                    a % 2 != n % 2 && (a += 1);
                    const c = Math.min(t, i) + Math.floor(o / 2 - n / 2);
                    e.save(), e.translate(c + n / 2 - a / 2, r + n / 2 - a / 2), e.scale(s, s);
                    const h = new Path2D("M7.5 0.8a1 1 0 0 0 0 13.4 1 1 0 0 0 0-13.4zm0 1a1 1 0 0 1 0 11 1 1 0 0 1 0-11zm-.97-.25A3.5 3.5 0 0 0 3.5 0 3.5 3.5 0 0 0 0 3.5a3.5 3.5 0 0 0 1.75 3.03l.5-.86A2.5 2.5 0 0 1 1 3.5 2.5 2.5 0 0 1 3.5 1a2.5 2.5 0 0 1 2.17 1.25zm6.72 4.78A3.5 3.5 0 0 0 15 3.5 3.5 3.5 0 0 0 11.5 0a3.5 3.5 0 0 0-3.03 1.75l.86.5A2.5 2.5 0 0 1 11.5 1 2.5 2.5 0 0 1 14 3.5a2.5 2.5 0 0 1-1.25 2.17zM7 5h1v5H7zm3 2v1H5V7z");
                    e.fill(h), e.restore()
                }
                _lines() {
                    const e = this._data;
                    return (e.text ? 1 : 0) + (e.secondLine ? 1 : 0) + (e.thirdLine ? 1 : 0)
                }
                _isOutOfScreen(e, t) {
                    var i;
                    const r = this._commonData,
                        n = null !== (i = r.fixedCoordinate) && void 0 !== i ? i : r.coordinate,
                        {
                            total: s
                        } = this.topBottomTotalHeight(e),
                        o = s / this._lines();
                    return n - o / 2 - 3 > t || n + (s - o / 2) + 3 < 0
                }
            }
            var d = i(114123);
            class p {
                constructor(e) {
                    this._commonRendererData = {
                        coordinate: 0,
                        textColor: "#FFF",
                        background: "#000",
                        additionalPaddingBottom: 0,
                        additionalPaddingTop: 0
                    }, this._axisRendererData = {
                        text: "",
                        visible: !1,
                        separatorVisible: !1,
                        borderVisible: !1,
                        ignoreOffset: !1
                    }, this._paneRendererData = {
                        text: "",
                        visible: !1,
                        separatorVisible: !0,
                        borderVisible: !1,
                        ignoreOffset: !0
                    }, this._invalidated = !0, this._axisRenderer = new(e || u)(this._axisRendererData, this._commonRendererData), this._paneRenderer = new(e || u)(this._paneRendererData, this._commonRendererData)
                }
                text() {
                    return this._updateRendererDataIfNeeded(), this._axisRendererData.text
                }
                secondLineText() {
                    return this._updateRendererDataIfNeeded(), this._axisRendererData.secondLine
                }
                thirdLineText() {
                    return this._updateRendererDataIfNeeded(), this._axisRendererData.thirdLine
                }
                background() {
                    return this._updateRendererDataIfNeeded(), this._commonRendererData.background
                }
                color() {
                    return this._updateRendererDataIfNeeded(), this.generateTextColor(this.background())
                }
                generateTextColor(e) {
                    return (0, d.colorFromBackground)(e)
                }
                coordinate() {
                    return this._updateRendererDataIfNeeded(), this._commonRendererData.coordinate
                }
                floatCoordinate() {
                    var e;
                    return this._updateRendererDataIfNeeded(), null !== (e = this._commonRendererData.floatCoordinate) && void 0 !== e ? e : this._commonRendererData.coordinate
                }
                update(e) {
                    this._invalidated = !0
                }
                topBottomTotalHeight(e) {
                    this._updateRendererDataIfNeeded();
                    const {
                        top: t,
                        bottom: i,
                        total: r
                    } = this._axisRenderer.topBottomTotalHeight(e), {
                        top: n,
                        bottom: s,
                        total: o
                    } = this._paneRenderer.topBottomTotalHeight(e);
                    return {
                        top: Math.max(t, n),
                        bottom: Math.max(i, s),
                        total: Math.max(r, o)
                    }
                }
                getFixedCoordinate() {
                    return this._commonRendererData.fixedCoordinate || 0
                }
                setFixedCoordinate(e) {
                    this._commonRendererData.fixedCoordinate = e
                }
                isVisible() {
                    return this._updateRendererDataIfNeeded(), this._axisRendererData.visible || this._paneRendererData.visible
                }
                isAxisLabelVisible() {
                    return this._updateRendererDataIfNeeded(), this._axisRendererData.visible
                }
                isPaneLabelVisible() {
                    return this._updateRendererDataIfNeeded(), this._paneRendererData.visible
                }
                renderer() {
                    return this._updateRendererDataIfNeeded(), this._axisRenderer
                }
                paneRenderer() {
                    return this._updateRendererDataIfNeeded(), this._paneRenderer
                }
                setPaneRendererLabelIcon(e) {
                    this._paneRendererData.labelIcon = e
                }
                setPaneLabelVisible(e) {
                    this._paneRendererData.visible = e, this._invalidated = !0
                }
                ignoreAlignment() {
                    return !1
                }
                _updateRendererDataIfNeeded() {
                    this._invalidated && (this._commonRendererData.fixedCoordinate = void 0, this._updateRendererData(this._axisRendererData, this._paneRendererData, this._commonRendererData), this._invalidated = !1)
                }
            }
        },
        168210: (e, t, i) => {
            i.r(t), i.d(t, {
                PriceRange: () => s
            });
            var r = i(758337);
            const n = (0, i(272001).getLogger)("Chart.PriceRange");
            class s {
                constructor(e, t) {
                    if (null !== e && "object" == typeof e) {
                        const t = e;
                        this._minValue = t.m_minValue, this._maxValue = t.m_maxValue
                    } else {
                        const i = e;
                        this._minValue = i, void 0 !== t && (this._maxValue = t)
                    }
                }
                equals(e) {
                    return this._minValue === e._minValue && this._maxValue === e._maxValue
                }
                clone() {
                    return new s(this._minValue, this._maxValue)
                }
                minValue() {
                    return this._minValue
                }
                setMinValue(e) {
                    this._minValue = e
                }
                maxValue() {
                    return this._maxValue
                }
                setMaxValue(e) {
                    this._maxValue = e
                }
                length() {
                    return this._maxValue - this._minValue
                }
                isEmpty() {
                    return this._maxValue === this._minValue || this._maxValue != this._maxValue || this._minValue != this._minValue
                }
                serialize() {
                    return {
                        m_maxValue: this._maxValue,
                        m_minValue: this._minValue
                    }
                }
                state() {
                    return {
                        max: this._maxValue,
                        min: this._minValue
                    }
                }
                merge(e) {
                    return new s(Math.min(this.minValue(), e.minValue()), Math.max(this.maxValue(), e.maxValue()))
                }
                apply(e, t) {
                    this._minValue = Math.min(this._minValue, e), this._maxValue = Math.max(this._maxValue, t)
                }
                set(e, t) {
                    this._minValue = e, this._maxValue = t
                }
                scaleAroundCenter(e) {
                    if (!(0, r.isNumber)(e)) return void n.logDebug("PriceRange.scaleAroundCenter: invalid coeff");
                    if (0 === this._maxValue - this._minValue) return;
                    const t = .5 * (this._maxValue + this._minValue);
                    let i = this._maxValue - t,
                        s = this._minValue - t;
                    i *= e, s *= e, this._maxValue = t + i, this._minValue = t + s
                }
                shift(e) {
                    (0, r.isNumber)(e) ? (this._maxValue += e, this._minValue += e) : n.logDebug("PriceRange.shift: invalid coeff")
                }
                containsStrictly(e) {
                    return e.minValue() > this._minValue && e.maxValue() < this._maxValue
                }
                static compare(e, t) {
                    return null === e || null === t ? e === t : e.equals(t)
                }
            }
        },
        506845: (e, t, i) => {
            i.d(t, {
                createPrimitiveProperty: () => s
            });
            var r = i(40210),
                n = i.n(r);

            function s(e) {
                return new(n())(e)
            }
        },
        542149: (e, t, i) => {
            i.d(t, {
                extractAllPropertiesKeys: () => f,
                factoryDefaultsForCurrentTheme: () => y,
                ThemedDefaultProperty: () => b
            });
            var r = i(897304),
                n = i(700077),
                s = i(316230),
                o = i(598279),
                l = i(138651),
                a = i(650151),
                c = i(62802),
                h = i(835343),
                u = i(909740),
                d = i(919346),
                p = i(40210),
                _ = i.n(p),
                P = i(16665),
                v = i(869403),
                g = i.n(v);
            const m = (0, i(272001).getLogger)("ThemedDefaults");

            function f(e) {
                const t = Object.keys(e),
                    i = [];
                return t.forEach((t => {
                    const r = e[t];
                    if ((0, o.default)(r)) {
                        f(r).forEach((e => i.push(`${t}.${e}`)))
                    } else i.push(t)
                })), i
            }

            function C(e, t, i = "") {
                const r = {};
                return t.forEach((n => {
                    const s = n.split("."),
                        l = s[0],
                        a = e[l],
                        c = "" === i ? l : `${i}.${l}`;
                    if (e.hasOwnProperty(l))
                        if (s.length > 1) {
                            if (!(0, o.default)(a)) return void m.logError(`path ${c} must be an object, but it is a primitive`); {
                                const e = t.filter((e => e.startsWith(`${l}.`))).map((e => e.split(".").slice(1).join(".")));
                                r[l] = C(a, e, c)
                            }
                        } else {
                            if ((0, o.default)(a)) return void m.logError(`path ${c} must be a primitive, but it is an object`);
                            r[l] = a
                        }
                })), r
            }

            function y(e, t) {
                var i;
                const n = null !== (i = u.watchedTheme.value()) && void 0 !== i ? i : d.StdTheme.Light,
                    s = (0, h.deepCopy)(e);
                return (0, r.default)(s, (0, a.ensureDefined)(t.get(n))), s
            }

            function T(e, t) {
                const i = (0, n.default)(e, ((e, i, r) => {
                    if (void 0 === t[r]) return e;
                    if (!(0, s.default)(i, t[r]))
                        if ((0, o.default)(i) && (0, o.default)(t[r])) {
                            const n = T(i, t[r]);
                            void 0 !== n && (e[r] = n)
                        } else e[r] = i;
                    return e
                }), {});
                return (0, l.default)(i) ? void 0 : i
            }
            class b extends(_()) {
                constructor(e, t, i, n, s) {
                    super(function(e, t, i) {
                        var n;
                        const s = t(),
                            o = (0, h.deepCopy)(null !== (n = c.getJSON(e, null)) && void 0 !== n ? n : {});
                        return (0, r.default)(s, o), (0, r.default)(s, null != i ? i : {}), s
                    }(e, t, s)), this._applyingThemeInProcess = !1, this._restoreFactoryDefaultsEvent = new(g()), this._defaultName = e, this._defaultsSupplier = t, this._notThemedDefaultsKeys = i, this._themedDefaultsKeys = n
                }
                restoreFactoryDefaults() {
                    const e = this._defaultsSupplier();
                    this.mergeAndFire(e), this.saveDefaults(), this._restoreFactoryDefaultsEvent.fire()
                }
                addExclusion() {}
                preferences() {
                    const e = this._allKeys();
                    return C(this.state(), e)
                }
                mergePreferences(e) {
                    const t = this._allKeys();
                    this.mergeAndFire(C(e, t))
                }
                childChanged(e) {
                    super.childChanged(e), this._applyingThemeInProcess || this.saveDefaults()
                }
                saveDefaults() {
                    const e = this.state(),
                        t = this._defaultsSupplier();
                    let i = T(C(e, this._notThemedDefaultsKeys), C(t, this._notThemedDefaultsKeys));
                    const n = C(t, this._themedDefaultsKeys),
                        s = C(e, this._themedDefaultsKeys),
                        o = T(s, n);
                    (0, l.default)(o) || (i = null != i ? i : {}, (0, r.default)(i, s)), (0, P.saveDefaults)(this._defaultName, i)
                }
                _allKeys() {
                    return [...this._themedDefaultsKeys, ...this._notThemedDefaultsKeys]
                }
            }
        },
        40210: (e, t, i) => {
            var r = i(869403),
                n = i(758337).isFunction;

            function s(e) {
                if (this._listeners = new r, this._childs = [], this._muteChildChanges = !1, void 0 !== e)
                    if (this.isPrimitiveType(e)) this._value = e;
                    else
                        for (var t in e) this.addProperty(t, e[t])
            }
            s.prototype.merge = function(e, t) {
                var i = null;
                if (t) var r = (i = []).length;
                if (void 0 === e) return i;
                if (this.isPrimitiveType(e)) return t && this._value !== e && i.push(this), this._value = e, i;
                if (Array.isArray(e))
                    for (var n = 0; n < e.length; n++)
                        if (this[n]) {
                            var s = this[n].merge(e[n], t);
                            t && (i = i.concat(s))
                        } else this.addProperty(n, e[n]), t && i.push(this[n]);
                else
                    for (var o in e)
                        if (this[o]) {
                            s = this[o].merge(e[o], t);
                            t && void 0 !== s && (i = i.concat(s))
                        } else this.addProperty(o, e[o]), t && i.push(this[o]);
                return t && i.length > r && i.push(this), i
            }, s.prototype.mergeAndFire = function(e) {
                var t = this.merge(e, !0);
                this._muteChildChanges = !0, t.forEach((function(e) {
                    e._muteChildChanges = !0
                })), t.forEach((function(e) {
                    e._muteChildChanges = !1, e.listeners().fire(e)
                })), this._muteChildChanges = !1, t.length > 0 && this.listeners().fire(this)
            }, s.prototype.state = function(e) {
                var t = n(this.value) ? this.value() : void 0;
                void 0 === t && (t = {});
                for (var i = 0; i < this._childs.length; i++) {
                    var r = this._childs[i];
                    if (e && -1 !== e.indexOf(r)) continue;
                    const n = this[r];
                    let a;
                    if (e) {
                        for (var s = [], o = 0; o < e.length; o++) {
                            var l = e[o];
                            l.startsWith(r + ".") && s.push(l.substring(r.length + 1))
                        }
                        a = n.state(s)
                    } else a = n.state();
                    (void 0 !== a || n.storeStateIfUndefined()) && (t[r] = a)
                }
                return t
            }, s.prototype.storeStateIfUndefined = function() {
                return !0
            }, s.prototype.clone = function(e) {
                return new s(this.state())
            }, s.prototype.isPrimitiveType = function(e) {
                return null === e || (!!isNumber(e) || ("string" == typeof e || "boolean" == typeof e))
            }, s.prototype.value = function() {
                return this._value
            }, s.prototype.listeners = function() {
                return this._listeners
            }, s.prototype.childCount = function() {
                return this._childs.length
            }, s.prototype.childNames = function() {
                return this._childs
            }, s.prototype.child = function(e) {
                return this[e]
            }, s.prototype.setValue = function(e, t) {
                (this._value !== e || t) && (this._value = e, this._listeners.fire(this))
            }, s.prototype.setValueSilently = function(e) {
                this._value = e
            }, s.prototype.addProperty = function(e, t) {
                var i = new s(t);
                this[e] = i, this._childs.push(e), i.subscribe(this, this.childChanged)
            }, s.prototype.removeProperty = function(e) {
                this[e].unsubscribe(this, this.childChanged), delete this[e], this._childs = this._childs.filter((function(t) {
                    return t !== e
                }))
            }, s.prototype.hasChild = function(e) {
                return this._childs.indexOf(e) >= 0
            }, s.prototype.addChild = function(e, t) {
                this[e] && this[e].unsubscribe(this, this.childChanged), this[e] = t, -1 === this._childs.indexOf(e) && this._childs.push(e), t.subscribe(this, this.childChanged)
            }, s.prototype.childChanged = function(e, t) {
                this._muteChildChanges || this.listeners().fire(this)
            }, s.prototype.subscribe = function(e, t) {
                this.listeners().subscribe(e, t, !1)
            }, s.prototype.unsubscribe = function(e, t) {
                this.listeners().unsubscribe(e, t)
            }, s.prototype.unsubscribeAll = function(e) {
                this.listeners().unsubscribeAll(e)
            }, s.prototype.childs = function() {
                return this
            }, e.exports = s
        },
        283186: (e, t, i) => {
            i.d(t, {
                scaleRatio: () => n,
                priceRangeByScaleRatio: () => s,
                barSpacingByScaleRatio: () => o
            });
            var r = i(168210);

            function n(e, t) {
                if (t.isLog() || e.isEmpty() || t.isEmpty()) return null;
                const i = function(e) {
                    if (e.isEmpty()) return null;
                    const t = e.priceRange();
                    if (null === t) return null;
                    const i = t.length();
                    return e.internalHeight() / i
                }(t);
                if (null === i) return null;
                return e.getValidBarSpacing() / Math.max(1e-10, i)
            }

            function s(e, t, i) {
                if (e.isLog() || null === i || e.isEmpty()) return null;
                const n = e.priceRange();
                if (null === n || n.isEmpty()) return null;
                const s = e.internalHeight() / (t / i),
                    o = n.length();
                if (s === o) return n;
                const l = (s - o) / 2;
                return new r.PriceRange(n.minValue() - l, n.maxValue() + l)
            }

            function o(e, t) {
                if (e.isLog() || null === t || e.isEmpty()) return null;
                const i = e.priceRange();
                if (null === i) return null;
                const r = i.length();
                return e.internalHeight() / r * t
            }
        },
        483201: (e, t, i) => {
            i.d(t, {
                SeriesTimeRangeVolumeCalculator: () => r
            });
            class r {
                constructor(e) {
                    this._value = null, this._series = e, this._series.dataEvents().dataUpdated().subscribe(this, this._onSeriesUpdated)
                }
                destroy() {
                    this._series.dataEvents().dataUpdated().unsubscribeAll(this)
                }
                volume(e, t) {
                    if (null !== this._value && this._value.from === e && this._value.to === t) return this._value.value;
                    let i = 0;
                    const r = this._series.data().bars(),
                        n = r.firstIndex(),
                        s = r.lastIndex();
                    if (null !== n && e < n && t < n || null !== s && e > s && t > s) i = NaN;
                    else {
                        const r = this._series.data().bars().rangeIterator(Math.min(e, t), Math.max(e, t));
                        for (; r.hasNext();) {
                            const e = r.next().value[5];
                            if (void 0 === e) {
                                i = NaN;
                                break
                            }
                            i += e
                        }
                    }
                    return this._value = {
                        from: e,
                        to: t,
                        value: i
                    }, i
                }
                _onSeriesUpdated(e, t) {
                    if (null === this._value) return;
                    if (t) return void(this._value = null);
                    const i = this._series.data().bars().lastIndex();
                    (null === i || i <= this._value.to) && (this._value = null)
                }
            }
        },
        796309: (e, t, i) => {
            i.d(t, {
                seriesPrice: () => s,
                positionVisualDirection: () => l,
                positionToCoordinate: () => a,
                noDataBasePosition: () => c,
                seriesBasePosition: () => h,
                getNoDataPosition: () => u,
                getSeriesPosition: () => d
            });
            var r = i(650151),
                n = i(812363);

            function s(e, t, i) {
                const r = e.barFunction();
                switch (e.style()) {
                    case 3:
                    case 10:
                    case 2:
                        return r(t.value);
                    default:
                        return t.value[-1 === i ? 3 : 2]
                }
            }

            function o(e) {
                return e >= 0 ? 1 : -1
            }

            function l(e, t) {
                return -1 === o(e) !== t ? -1 : 1
            }

            function a(e, t, i, r) {
                const n = Math.min(t, Math.max(0, 1 === r ? i : t - i));
                return i - r * Math.abs(n * e / 100)
            }

            function c(e, t, i) {
                const r = e.index();
                return null === r ? null : {
                    index: r,
                    price: t.coordinateToPrice(t.height() / 2, i)
                }
            }

            function h(e, t) {
                const i = e.data().bars(),
                    r = i.first(),
                    l = i.last();
                if (null === r || null === l) return null;
                let a;
                const c = t.index();
                if (null === c) {
                    if (void 0 === t.time) return null;
                    const e = t.time(),
                        s = r.value[0],
                        o = l.value[0];
                    if (e < s - 86400 || e > o) return null;
                    a = i.searchByTime(e, n.PlotRowSearchMode.NearestRight, 4)
                } else a = i.search(c);
                return null === a ? null : {
                    index: a.index,
                    price: s(e, a, o(t.position()))
                }
            }

            function u(e, t, i) {
                const r = c(e, t, i);
                if (null === r) return null;
                const n = l(e.position(), t.isInverted());
                return {
                    index: r.index,
                    price: r.price,
                    poleStartY: t.height(),
                    visualDirection: 1,
                    positionPointDirection: n,
                    startsOnSeriesData: !1
                }
            }

            function d(e, t, i = !0) {
                const n = h(e, t),
                    s = e.priceScale(),
                    o = (0, r.ensureNotNull)(e.firstValue());
                if (null === n) return u(t, s, o);
                let a = 0;
                const c = e.properties().childs(),
                    d = e.model().timeScale(),
                    p = s.priceToCoordinate(n.price, o);
                if (i) switch (e.style()) {
                    case 3:
                        a = c.areaStyle.childs().linewidth.value() / 2;
                        break;
                    case 2:
                        a = c.lineStyle.childs().linewidth.value() / 2;
                        break;
                    case 10:
                        const e = Math.abs(100 - c.baselineStyle.childs().baseLevelPercentage.value());
                        a = s.height() * e / 100 > p ? c.baselineStyle.childs().topLineWidth.value() / 2 : c.baselineStyle.childs().bottomLineWidth.value() / 2;
                        break;
                    case 1:
                    case 9:
                    case 8:
                    case 12:
                    case 4:
                    case 7:
                        a = 3;
                        break;
                    case 0:
                        a = c.barStyle.childs().thinBars.value() ? 3 : Math.max(3, .25 * d.barSpacing());
                        break;
                    case 11:
                        a = c.rangeStyle.childs().thinBars.value() ? 3 : Math.max(3, .25 * d.barSpacing());
                        break;
                    case 5:
                        a = Math.max(4, .25 * d.barSpacing());
                        break;
                    case 6:
                        a = Math.max(5, .25 * d.barSpacing())
                }
                const _ = l(t.position(), s.isInverted()),
                    P = p - _ * a;
                return {
                    index: n.index,
                    price: n.price,
                    poleStartY: P,
                    visualDirection: _,
                    positionPointDirection: _,
                    startsOnSeriesData: !0
                }
            }
        },
        96841: (e, t, i) => {
            var r, n, s, o;
            i.d(t, {
                    MarkLocation: () => r,
                    HAlign: () => n,
                    LineStyle: () => o
                }),
                function(e) {
                    e.AboveBar = "AboveBar", e.BelowBar = "BelowBar", e.Top = "Top", e.Bottom = "Bottom", e.Right = "Right", e.Left = "Left", e.Absolute = "Absolute", e.AbsoluteUp = "AbsoluteUp", e.AbsoluteDown = "AbsoluteDown"
                }(r || (r = {})),
                function(e) {
                    e.Left = "left", e.Center = "center", e.Right = "right"
                }(n || (n = {})),
                function(e) {
                    e.Top = "top", e.Middle = "middle", e.Bottom = "bottom"
                }(s || (s = {})),
                function(e) {
                    e[e.Solid = 0] = "Solid", e[e.Dotted = 1] = "Dotted", e[e.Dashed = 2] = "Dashed"
                }(o || (o = {}))
        },
        992001: (e, t, i) => {
            i.d(t, {
                areEqualSymbols: () => o,
                symbolSameAsCurrent: () => a,
                unitsAreSame: () => c,
                currenciesAreSame: () => h
            });
            var r = i(495046),
                n = i(720444);
            const s = r.enabled("uppercase_instrument_names");

            function o(e, t) {
                return void 0 === e ? void 0 === t : void 0 !== t && (s ? e.toUpperCase() === t.toUpperCase() : e === t)
            }

            function l(e, t) {
                return e.some((e => o(t, e)))
            }

            function a(e, t) {
                if (null === t) return !1;
                if (t) {
                    if (o(t.full_name, e) || o(t.pro_name, e)) return !0;
                    if (o(t.ticker, e)) return !0;
                    if (t.aliases && l(t.aliases, e)) return !0;
                    if (t.alternatives && l(t.alternatives, e)) return !0;
                    if (0 === e.indexOf("FRA:") && o(t.pro_name, e.replace("FRA:", "FWB:"))) return !0
                }
                return !1
            }

            function c(e, t, i) {
                return null === e && !(0, n.isConvertedToOtherUnit)(t, i) || e === (0, n.symbolUnit)(t, i)
            }

            function h(e, t) {
                return null === e && !(0, n.isConvertedToOtherCurrency)(t) || e === (0, n.symbolCurrency)(t)
            }
        },
        81947: (e, t, i) => {
            i.d(t, {
                TimeAxisView: () => o
            });
            var r = i(114123),
                n = i(741341);
            class s {
                constructor() {
                    this._data = null
                }
                setData(e) {
                    this._data = e
                }
                draw(e, t, i) {
                    if (null === this._data || !this._data.visible || 0 === this._data.text.length) return;
                    const r = this._data;
                    e.font = t.font;
                    const s = Math.round(t.widthCache.measureText(e, r.text));
                    if (s <= 0) return;
                    e.save();
                    const o = t.paddingHorizontal,
                        l = s + 2 * o,
                        a = l / 2;
                    let c = r.coordinate,
                        h = Math.floor(c - a) + .5;
                    if (r.alwaysInViewPort) {
                        const e = r.width;
                        h < 0 ? (c += Math.abs(0 - h), h = Math.floor(c - a) + .5) : h + l > e && (c -= Math.abs(e - (h + l)), h = Math.floor(c - a) + .5)
                    }
                    const u = h + l,
                        d = Math.ceil(0 + t.borderSize + t.offsetSize + t.paddingTop + t.fontSize + t.paddingBottom);
                    e.fillStyle = r.background;
                    const p = Math.round(h * i),
                        _ = Math.round(0 * i),
                        P = Math.round(u * i),
                        v = Math.round(d * i),
                        g = Math.round(2 * i);
                    e.beginPath(), e.moveTo(p, _), e.lineTo(p, v - g),
                        e.arcTo(p, v, p + g, v, g), e.lineTo(P - g, v), e.arcTo(P, v, P, v - g, g), e.lineTo(P, _), e.fill();
                    const m = 0 + t.borderSize + t.offsetSize + t.paddingTop + t.fontSize / 2;
                    e.textAlign = "left", e.textBaseline = "middle", e.fillStyle = r.color;
                    const f = t.widthCache.yMidCorrection(e, "Apr0");
                    e.translate((h + o) * i, (m + f) * i), (0, n.drawScaled)(e, i, (() => e.fillText(r.text, 0, 0))), e.restore()
                }
            }
            class o {
                constructor(e) {
                    this._renderer = new s, this._rendererData = {
                        background: "",
                        color: "",
                        coordinate: 0,
                        text: "",
                        visible: !1,
                        width: 0,
                        alwaysInViewPort: !0
                    }, this._invalidated = !0, this._model = e, this._renderer.setData(this._rendererData)
                }
                update() {
                    this._invalidated = !0
                }
                renderer() {
                    return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._renderer
                }
                coordinate() {
                    return this._rendererData.coordinate
                }
                _getAlwaysInViewPort() {
                    return !0
                }
                _getText(e) {
                    const t = this._model.timeScale().indexToUserTime(e);
                    return null !== t ? this._model.dateTimeFormatter().format(t) : ""
                }
                _updateImpl() {
                    const e = this._rendererData;
                    if (e.visible = !1, this._model.timeScale().isEmpty() || !this._isVisible()) return;
                    const t = this._getIndex();
                    null !== t && (e.visible = !0, e.width = this._model.timeScale().width(), e.background = this._getBgColor(), e.color = (0, r.colorFromBackground)(e.background), e.coordinate = this._model.timeScale().indexToCoordinate(t), e.alwaysInViewPort = this._getAlwaysInViewPort(), e.text = this._getText(t), this._invalidated = !1)
                }
            }
        },
        930981: (e, t, i) => {
            i.d(t, {
                getChartAlertsFacade: () => s,
                getChartAlertsFacadeIfCreatedBefore: () => o
            });
            var r = i(240158);
            let n;
            async function s() {
                return void 0 === n && (n = await async function() {
                    const [e, t] = await Promise.all([Promise.all([i.e(57901), i.e(58194), i.e(1327), i.e(25977), i.e(68647), i.e(98850), i.e(8837), i.e(72685), i.e(96796), i.e(21350), i.e(48158)]).then(i.bind(i, 246337)), (0, r.getPriceAlertsDispatcher)()]);
                    return new e.ChartAlertsFacadeOld(t)
                }()), n
            }

            function o() {
                return null != n ? n : null
            }
        },
        538708: (e, t, i) => {
            function r(e, t, i, r) {
                return `${r?r+" ":""}${i?i+" ":""}${e}px ${t}`
            }
            i.d(t, {
                makeFont: () => r,
                parseFont: () => s
            });
            const n = /(bold )?(italic )?(\d+)(px|pt) (.*)$/;

            function s(e) {
                const t = n.exec(e);
                return null === t ? null : {
                    family: t[5],
                    size: parseInt(t[3]) * ("pt" === t[4] ? .75 : 1),
                    bold: Boolean(t[1]),
                    italic: Boolean(t[2])
                }
            }
        },
        844106: (e, t, i) => {
            i.d(t, {
                showGoProAlertsOnSecondsDialog: () => n
            });
            var r = i(508846);

            function n() {
                (0, r.createGoProDialog)({
                    feature: "alertsOnSeconds"
                })
            }
        },
        356361: (e, t, i) => {
            i.d(t, {
                twemoji: () => r.default,
                getTwemojiUrl: () => n
            });
            var r = i(818438);

            function n(e, t) {
                let i = "";
                return r.default.parse(e, (e => (i = r.default.base + ("svg" === t ? `svg/${e}.svg` : `72x72/${e}.png`), !1))), i
            }
            r.default.base = "https://cdnjs.cloudflare.com/ajax/libs/twemoji/13.0.1/"
        }
    }
]);
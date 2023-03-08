"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [16665], {
        631586: (e, o, l) => {
            l.r(o), l.d(o, {
                LINESTYLE_SOLID: () => r,
                LINESTYLE_DOTTED: () => i,
                LINESTYLE_DASHED: () => t,
                LINESTYLE_LARGE_DASHED: () => n,
                LINESTYLE_SPARSE_DOTTED: () => a,
                LINESTYLE_SMALL_DASHED: () => s
            });
            const r = 0,
                i = 1,
                t = 2,
                n = 3,
                a = 4,
                s = 5
        },
        70109: (e, o, l) => {
            l.d(o, {
                axisLabelBackgroundColor: () => i
            });
            var r = l(314967);
            const i = {
                common: r.colorsPalette["color-tv-blue-500"],
                active: r.colorsPalette["color-tv-blue-800"]
            }
        },
        637036: (e, o, l) => {
            var r;
            l.d(o, {
                    ColorType: () => r
                }),
                function(e) {
                    e.Solid = "solid", e.Gradient = "gradient"
                }(r || (r = {}))
        },
        16665: (e, o, l) => {
            var r = l(335144).PlDisplay;
            const {
                getHexColorByName: i
            } = l(314967), {
                generateColor: t
            } = l(114123);
            var n = l(335144).TradedGroupHorizontalAlignment,
                a = l(933813),
                s = l(560554).LineToolPitchforkStyle,
                c = l(969334).LineToolBarsPatternMode,
                d = l(519872),
                u = d.LineStudyPlotStyle,
                h = d.STUDYPLOTDISPLAYTARGET,
                g = l(570703),
                v = l(530664).PriceAxisLastValueMode,
                b = l(674329).StoriesTimeLineItemType,
                w = l(59703).MagnetMode,
                y = l(739665).LineEnd,
                p = l(637036).ColorType,
                f = l(169813).StatsPosition,
                C = l(11178).sessionsPreferencesDefault,
                L = l(70109).axisLabelBackgroundColor;
            const {
                LINESTYLE_SOLID: S,
                LINESTYLE_DOTTED: k,
                LINESTYLE_DASHED: B
            } = l(631586);
            var P = l(272001).getLogger("Chart.Defaults");
            const m = i("color-black"),
                T = i("color-white"),
                A = t(T, 75),
                x = i("color-tv-blue-50"),
                z = i("color-tv-blue-500"),
                E = t(z, 30),
                D = t(z, 70),
                R = t(z, 72),
                _ = t(z, 75),
                I = t(z, 80),
                O = i("color-tv-blue-600"),
                N = i("color-deep-blue-200"),
                V = i("color-deep-blue-300"),
                W = i("color-deep-blue-500"),
                M = t(W, 80),
                F = i("color-sky-blue-500"),
                H = t(F, 80),
                j = i("color-sky-blue-700"),
                U = t(j, 30),
                q = i("color-youtube"),
                Y = i("color-ripe-red-200"),
                G = i("color-ripe-red-300"),
                Z = i("color-ripe-red-400"),
                J = i("color-ripe-red-500"),
                K = t(J, 70),
                Q = t(J, 80),
                X = t(J, 72),
                $ = t(J, 95),
                ee = i("color-ripe-red-600"),
                oe = i("color-grapes-purple-500"),
                le = t(oe, 100),
                re = t(oe, 80),
                ie = t(oe, 30),
                te = i("color-berry-pink-500"),
                ne = t(te, 80),
                ae = i("color-minty-green-100"),
                se = i("color-minty-green-500"),
                ce = t(se, 80),
                de = t(se, 72),
                ue = t(se, 95),
                he = i("color-iguana-green-300"),
                ge = i("color-iguana-green-500"),
                ve = t(ge, 80),
                be = i("color-tan-orange-300"),
                we = i("color-tan-orange-500"),
                ye = t(we, 80),
                pe = i("color-tan-orange-600"),
                fe = i("color-tan-orange-700"),
                Ce = i("color-cold-gray-150"),
                Le = i("color-cold-gray-300"),
                Se = i("color-cold-gray-400"),
                ke = i("color-cold-gray-500"),
                Be = i("color-cold-gray-800"),
                Pe = t(Be, 94),
                me = t(Be, 100),
                Te = i("color-cold-gray-900"),
                Ae = i("color-cold-gray-750"),
                xe = i("color-slate-gray"),
                ze = i("color-silver-tree"),
                Ee = t(ze, 95),
                De = i("color-mandy"),
                Re = t(De, 95);
            var _e = function(e) {
                var o = function(e, o) {
                        return {
                            color: e,
                            visible: o
                        }
                    },
                    l = function(e, o, l) {
                        return {
                            coeff: e,
                            color: o,
                            visible: l
                        }
                    },
                    i = function(e, o, l, r, i) {
                        return {
                            coeff: e,
                            color: o,
                            visible: l,
                            linestyle: void 0 === r ? S : r,
                            linewidth: void 0 === i ? 1 : i
                        }
                    },
                    d = function(e, o, l) {
                        return {
                            color: e,
                            width: l,
                            visible: o
                        }
                    },
                    P = function(e, o, l, r, i) {
                        return {
                            color: e,
                            visible: o,
                            width: l,
                            x: r,
                            y: i
                        }
                    },
                    Be = function(e, o, l, r, i, t) {
                        return {
                            coeff1: e,
                            coeff2: o,
                            color: l,
                            visible: r,
                            linestyle: void 0 === i ? S : i,
                            linewidth: void 0 === t ? 1 : t
                        }
                    };
                if (void 0 === TradingView.defaultProperties) {
                    var _e;
                    switch (window.locale) {
                        case "ar_AE":
                            _e = "Asia/Dubai";
                            break;
                        case "au":
                            _e = "Australia/Sydney";
                            break;
                        case "br":
                            _e = "America/Sao_Paulo";
                            break;
                        case "ca":
                            _e = "America/Toronto";
                            break;
                        case "de_DE":
                        case "it":
                            _e = "Europe/Berlin";
                            break;
                        case "es":
                            _e = "Europe/Madrid";
                            break;
                        case "fa_IR":
                            _e = "Asia/Tehran";
                            break;
                        case "fr":
                        case "sv_SE":
                            _e = "Europe/Paris";
                            break;
                        case "he_IL":
                        case "tr":
                            _e = "Europe/Athens";
                            break;
                        case "hu_HU":
                        case "pl":
                            _e = "Europe/Warsaw";
                            break;
                        case "id":
                        case "th_TH":
                        case "vi_VN":
                            _e = "Asia/Bangkok";
                            break;
                        case "in":
                            _e = "Asia/Kolkata";
                            break;
                        case "ja":
                        case "kr":
                            _e = "Asia/Tokyo";
                            break;
                        case "ms_MY":
                            _e = "Asia/Singapore";
                            break;
                        case "ru":
                            _e = "Europe/Moscow";
                            break;
                        case "uk":
                            _e = "Europe/London";
                            break;
                        case "zh_CN":
                        case "zh_TW":
                            _e = "Asia/Shanghai";
                            break;
                        default:
                            _e = "Etc/UTC"
                    }
                    TradingView.defaultProperties = {
                        chartproperties: {
                            timezone: _e,
                            priceScaleSelectionStrategyName: "auto",
                            paneProperties: {
                                backgroundType: p.Solid,
                                background: T,
                                backgroundGradientStartColor: T,
                                backgroundGradientEndColor: T,
                                vertGridProperties: {
                                    color: Pe,
                                    style: S
                                },
                                horzGridProperties: {
                                    color: Pe,
                                    style: S
                                },
                                crossHairProperties: {
                                    color: Se,
                                    style: B,
                                    transparency: 0,
                                    width: 1
                                },
                                topMargin: 10,
                                bottomMargin: 8,
                                axisProperties: {
                                    autoScale: !0,
                                    autoScaleDisabled: !1,
                                    lockScale: !1,
                                    percentage: !1,
                                    percentageDisabled: !1,
                                    indexedTo100: !1,
                                    log: !1,
                                    logDisabled: !1,
                                    alignLabels: !0,
                                    isInverted: !1
                                },
                                legendProperties: {
                                    showStudyArguments: !0,
                                    showStudyTitles: !0,
                                    showStudyValues: !0,
                                    showSeriesTitle: !0,
                                    showSeriesOHLC: !0,
                                    showLegend: !0,
                                    showBarChange: !0,
                                    showVolume: !1,
                                    showBackground: !0,
                                    backgroundTransparency: 50
                                },
                                separatorColor: Ce
                            },
                            scalesProperties: {
                                backgroundColor: T,
                                lineColor: me,
                                textColor: Te,
                                fontSize: 12,
                                scaleSeriesOnly: !1,
                                showSeriesLastValue: !0,
                                seriesLastValueMode: v.LastValueAccordingToScale,
                                showSeriesPrevCloseValue: !1,
                                showStudyLastValue: !0,
                                showSymbolLabels: !1,
                                showStudyPlotLabels: !1,
                                showBidAskLabels: !1,
                                showPrePostMarketPriceLabel: !0,
                                showFundamentalNameLabel: !1,
                                showFundamentalLastValue: !0,
                                barSpacing: g.DEFAULT_BAR_SPACING,
                                axisHighlightColor: _,
                                axisLineToolLabelBackgroundColorCommon: L.common,
                                axisLineToolLabelBackgroundColorActive: L.active,
                                showPriceScaleCrosshairLabel: !0,
                                showTimeScaleCrosshairLabel: !0,
                                crosshairLabelBgColorLight: Te,
                                crosshairLabelBgColorDark: Ae
                            },
                            mainSeriesProperties: {
                                style: a.STYLE_CANDLES,
                                esdShowDividends: !0,
                                esdShowSplits: !0,
                                esdShowEarnings: !0,
                                esdShowBreaks: !1,
                                esdFlagSize: 2,
                                showContinuousContractSwitches: !0,
                                showContinuousContractSwitchesBreaks: !1,
                                showFuturesContractExpiration: !0,
                                showLastNews: !0,
                                showCountdown: !0,
                                bidAsk: {
                                    visible: !1,
                                    lineStyle: k,
                                    lineWidth: 1,
                                    bidLineColor: z,
                                    askLineColor: Z
                                },
                                prePostMarket: {
                                    visible: !0,
                                    lineStyle: k,
                                    lineWidth: 1,
                                    preMarketColor: pe,
                                    postMarketColor: z
                                },
                                highLowAvgPrice: {
                                    highLowPriceLinesVisible: !1,
                                    highLowPriceLabelsVisible: !1,
                                    averageClosePriceLineVisible: !1,
                                    averageClosePriceLabelVisible: !1,
                                    highLowPriceLinesColor: "",
                                    highLowPriceLinesWidth: 1,
                                    averagePriceLineColor: "",
                                    averagePriceLineWidth: 1
                                },
                                visible: !0,
                                showPriceLine: !0,
                                priceLineWidth: 1,
                                priceLineColor: "",
                                baseLineColor: Le,
                                showPrevClosePriceLine: !1,
                                prevClosePriceLineWidth: 1,
                                prevClosePriceLineColor: "#555555",
                                minTick: "default",
                                dividendsAdjustment: !1,
                                backAdjustment: !1,
                                settlementAsClose: !0,
                                sessionId: "regular",
                                sessVis: !1,
                                statusViewStyle: {
                                    fontSize: 16,
                                    showExchange: !0,
                                    showInterval: !0,
                                    symbolTextSource: "description"
                                },
                                candleStyle: {
                                    upColor: se,
                                    downColor: J,
                                    drawWick: !0,
                                    drawBorder: !0,
                                    borderColor: "#378658",
                                    borderUpColor: se,
                                    borderDownColor: J,
                                    wickColor: "#737375",
                                    wickUpColor: se,
                                    wickDownColor: J,
                                    barColorsOnPrevClose: !1,
                                    drawBody: !0
                                },
                                hollowCandleStyle: {
                                    upColor: se,
                                    downColor: J,
                                    drawWick: !0,
                                    drawBorder: !0,
                                    borderColor: "#378658",
                                    borderUpColor: se,
                                    borderDownColor: J,
                                    wickColor: "#737375",
                                    wickUpColor: se,
                                    wickDownColor: J,
                                    drawBody: !0
                                },
                                haStyle: {
                                    upColor: se,
                                    downColor: J,
                                    drawWick: !0,
                                    drawBorder: !0,
                                    borderColor: "#378658",
                                    borderUpColor: se,
                                    borderDownColor: J,
                                    wickColor: "#737375",
                                    wickUpColor: se,
                                    wickDownColor: J,
                                    showRealLastPrice: !1,
                                    barColorsOnPrevClose: !1,
                                    inputs: {},
                                    inputInfo: {},
                                    drawBody: !0
                                },
                                barStyle: {
                                    upColor: se,
                                    downColor: J,
                                    barColorsOnPrevClose: !1,
                                    dontDrawOpen: !1,
                                    thinBars: !0
                                },
                                hiloStyle: {
                                    color: z,
                                    showBorders: !0,
                                    borderColor: z,
                                    showLabels: !0,
                                    labelColor: z,
                                    drawBody: !0
                                },
                                columnStyle: {
                                    upColor: t(se, 50),
                                    downColor: t(J, 50),
                                    barColorsOnPrevClose: !0,
                                    priceSource: "close"
                                },
                                lineStyle: {
                                    color: z,
                                    linestyle: S,
                                    linewidth: 2,
                                    priceSource: "close",
                                    styleType: a.STYLE_LINE_TYPE_SIMPLE
                                },
                                areaStyle: {
                                    color1: R,
                                    color2: z,
                                    linecolor: z,
                                    linestyle: S,
                                    linewidth: 2,
                                    priceSource: "close",
                                    transparency: 100
                                },
                                priceAxisProperties: {
                                    autoScale: !0,
                                    autoScaleDisabled: !1,
                                    lockScale: !1,
                                    percentage: !1,
                                    percentageDisabled: !1,
                                    indexedTo100: !1,
                                    log: !1,
                                    logDisabled: !1,
                                    isInverted: !1,
                                    alignLabels: !0
                                },
                                renkoStyle: {
                                    upColor: se,
                                    downColor: J,
                                    borderUpColor: se,
                                    borderDownColor: J,
                                    upColorProjection: "#a9dcc3",
                                    downColorProjection: "#f5a6ae",
                                    borderUpColorProjection: "#a9dcc3",
                                    borderDownColorProjection: "#f5a6ae",
                                    wickUpColor: se,
                                    wickDownColor: J,
                                    inputs: {
                                        source: "close",
                                        sources: "Close",
                                        boxSize: 3,
                                        style: "ATR",
                                        atrLength: 14,
                                        wicks: !0
                                    },
                                    inputInfo: {
                                        source: {
                                            name: "Source"
                                        },
                                        sources: {
                                            name: "Source"
                                        },
                                        boxSize: {
                                            name: "Box size"
                                        },
                                        style: {
                                            name: "Style"
                                        },
                                        atrLength: {
                                            name: "ATR length"
                                        },
                                        wicks: {
                                            name: "Wicks"
                                        }
                                    }
                                },
                                pbStyle: {
                                    upColor: se,
                                    downColor: J,
                                    borderUpColor: se,
                                    borderDownColor: J,
                                    upColorProjection: "#a9dcc3",
                                    downColorProjection: "#f5a6ae",
                                    borderUpColorProjection: "#a9dcc3",
                                    borderDownColorProjection: "#f5a6ae",
                                    inputs: {
                                        source: "close",
                                        lb: 3
                                    },
                                    inputInfo: {
                                        source: {
                                            name: "Source"
                                        },
                                        lb: {
                                            name: "Number of line"
                                        }
                                    }
                                },
                                kagiStyle: {
                                    upColor: se,
                                    downColor: J,
                                    upColorProjection: "#a9dcc3",
                                    downColorProjection: "#f5a6ae",
                                    inputs: {
                                        source: "close",
                                        style: "ATR",
                                        atrLength: 14,
                                        reversalAmount: 1
                                    },
                                    inputInfo: {
                                        source: {
                                            name: "Source"
                                        },
                                        style: {
                                            name: "Style"
                                        },
                                        atrLength: {
                                            name: "ATR length"
                                        },
                                        reversalAmount: {
                                            name: "Reversal amount"
                                        }
                                    }
                                },
                                pnfStyle: {
                                    upColor: se,
                                    downColor: J,
                                    upColorProjection: "#a9dcc3",
                                    downColorProjection: "#f5a6ae",
                                    inputs: {
                                        sources: "Close",
                                        reversalAmount: 3,
                                        boxSize: 1,
                                        style: "ATR",
                                        atrLength: 14,
                                        oneStepBackBuilding: !1
                                    },
                                    inputInfo: {
                                        sources: {
                                            name: "Source"
                                        },
                                        boxSize: {
                                            name: "Box size"
                                        },
                                        reversalAmount: {
                                            name: "Reversal amount"
                                        },
                                        style: {
                                            name: "Style"
                                        },
                                        atrLength: {
                                            name: "ATR length"
                                        },
                                        oneStepBackBuilding: {
                                            name: "One step back building"
                                        }
                                    }
                                },
                                baselineStyle: {
                                    baselineColor: xe,
                                    topFillColor1: de,
                                    topFillColor2: ue,
                                    bottomFillColor1: $,
                                    bottomFillColor2: X,
                                    topLineColor: se,
                                    bottomLineColor: J,
                                    topLineWidth: 2,
                                    bottomLineWidth: 2,
                                    priceSource: "close",
                                    transparency: 50,
                                    baseLevelPercentage: 50
                                },
                                rangeStyle: {
                                    upColor: se,
                                    downColor: J,
                                    thinBars: !0,
                                    upColorProjection: "#a9dcc3",
                                    downColorProjection: "#f5a6ae",
                                    inputs: {
                                        range: 10,
                                        phantomBars: !1
                                    },
                                    inputInfo: {
                                        range: {
                                            name: "Range"
                                        },
                                        phantomBars: {
                                            name: "Phantom bars"
                                        }
                                    }
                                }
                            },
                            chartEventsSourceProperties: {
                                visible: !0,
                                futureOnly: !0,
                                breaks: {
                                    color: "#555555",
                                    visible: !1,
                                    style: B,
                                    width: 1
                                }
                            },
                            tradingProperties: {
                                showPositions: !0,
                                positionPL: {
                                    visibility: !0,
                                    display: r.Money
                                },
                                bracketsPL: {
                                    visibility: !0,
                                    display: r.Money
                                },
                                showOrders: !0,
                                showExecutions: !0,
                                showExecutionsLabels: !1,
                                showReverse: !0,
                                horizontalAlignment: n.Right,
                                extendLeft: !0,
                                lineLength: 5,
                                lineWidth: 1,
                                lineStyle: S
                            },
                            editorFontsList: ["Verdana", "Courier New", "Times New Roman", "Arial"],
                            volumePaneSize: "large"
                        },
                        sessions: C,
                        drawings: {
                            magnet: !1,
                            magnetMode: w.WeakMagnet,
                            stayInDrawingMode: !1,
                            drawOnAllCharts: !0,
                            drawOnAllChartsMode: 1
                        },
                        linetoolorder: {
                            extendLeft: "inherit",
                            lineLength: "inherit",
                            lineColor: q,
                            lineActiveBuyColor: "#4094e8",
                            lineInactiveBuyColor: "rgba(64, 148, 232, 0.5)",
                            lineActiveSellColor: "#e75656",
                            lineInactiveSellColor: "rgba(231, 86, 86, 0.5)",
                            lineStyle: "inherit",
                            lineWidth: "inherit",
                            bodyBorderActiveBuyColor: "#4094e8",
                            bodyBorderInactiveBuyColor: "rgba(64, 148, 232, 0.5)",
                            bodyBorderActiveSellColor: "#e75656",
                            bodyBorderInactiveSellColor: "rgba(231, 86, 86, 0.5)",
                            bodyBackgroundColor: A,
                            bodyBackgroundTransparency: 25,
                            bodyTextInactiveLimitColor: "rgba(38, 140, 2, 0.5)",
                            bodyTextActiveLimitColor: "#268c02",
                            bodyTextInactiveStopColor: "rgba(231, 86, 86, 0.5)",
                            bodyTextActiveStopColor: "#e75656",
                            bodyTextInactiveBuyColor: "rgba(64, 148, 232, 0.5)",
                            bodyTextActiveBuyColor: "#4094e8",
                            bodyTextInactiveSellColor: "rgba(231, 86, 86, 0.5)",
                            bodyTextActiveSellColor: "#e75656",
                            bodyFontFamily: "Verdana",
                            bodyFontSize: 9,
                            bodyFontBold: !0,
                            bodyFontItalic: !1,
                            quantityBorderActiveBuyColor: "#4094e8",
                            quantityBorderInactiveBuyColor: "rgba(64, 148, 232, 0.5)",
                            quantityBorderActiveSellColor: "#e75656",
                            quantityBorderInactiveSellColor: "rgba(231, 86, 86, 0.5)",
                            quantityBackgroundInactiveBuyColor: "rgba(64, 148, 232, 0.5)",
                            quantityBackgroundActiveBuyColor: "#4094e8",
                            quantityBackgroundInactiveSellColor: "rgba(231, 86, 86, 0.5)",
                            quantityBackgroundActiveSellColor: "#e75656",
                            quantityTextColor: T,
                            quantityTextTransparency: 0,
                            quantityFontFamily: "Verdana",
                            quantityFontSize: 9,
                            quantityFontBold: !0,
                            quantityFontItalic: !1,
                            cancelButtonBorderActiveBuyColor: "#4094e8",
                            cancelButtonBorderInactiveBuyColor: "rgba(64, 148, 232, 0.5)",
                            cancelButtonBorderActiveSellColor: "#e75656",
                            cancelButtonBorderInactiveSellColor: "rgba(231, 86, 86, 0.5)",
                            cancelButtonBackgroundColor: A,
                            cancelButtonBackgroundTransparency: 25,
                            cancelButtonIconActiveBuyColor: "#4094e8",
                            cancelButtonIconInactiveBuyColor: "rgba(64, 148, 232, 0.5)",
                            cancelButtonIconActiveSellColor: "#e75656",
                            cancelButtonIconInactiveSellColor: "rgba(231, 86, 86, 0.5)",
                            tooltip: "",
                            modifyTooltip: "",
                            cancelTooltip: ""
                        },
                        linetoolposition: {
                            extendLeft: "inherit",
                            lineLength: "inherit",
                            lineBuyColor: "#4094e8",
                            lineSellColor: "#e75656",
                            lineStyle: "inherit",
                            lineWidth: "inherit",
                            bodyBorderBuyColor: "#4094e8",
                            bodyBorderSellColor: "#e75656",
                            bodyBackgroundColor: A,
                            bodyBackgroundTransparency: 25,
                            bodyTextPositiveColor: "#268c02",
                            bodyTextNeutralColor: "#646464",
                            bodyTextNegativeColor: "#e75656",
                            bodyFontFamily: "Verdana",
                            bodyFontSize: 9,
                            bodyFontBold: !0,
                            bodyFontItalic: !1,
                            quantityBorderBuyColor: "#4094e8",
                            quantityBorderSellColor: "#e75656",
                            quantityBackgroundBuyColor: "#4094e8",
                            quantityBackgroundSellColor: "#e75656",
                            quantityTextColor: T,
                            quantityTextTransparency: 0,
                            quantityFontFamily: "Verdana",
                            quantityFontSize: 9,
                            quantityFontBold: !0,
                            quantityFontItalic: !1,
                            reverseButtonBorderBuyColor: "#4094e8",
                            reverseButtonBorderSellColor: "#e75656",
                            reverseButtonBackgroundColor: A,
                            reverseButtonBackgroundTransparency: 25,
                            reverseButtonIconBuyColor: "#4094e8",
                            reverseButtonIconSellColor: "#e75656",
                            closeButtonBorderBuyColor: "#4094e8",
                            closeButtonBorderSellColor: "#e75656",
                            closeButtonBackgroundColor: A,
                            closeButtonBackgroundTransparency: 25,
                            closeButtonIconBuyColor: "#4094e8",
                            closeButtonIconSellColor: "#e75656",
                            tooltip: "",
                            protectTooltip: "",
                            closeTooltip: "",
                            reverseTooltip: ""
                        },
                        linetoolexecution: {
                            direction: "buy",
                            arrowHeight: 8,
                            arrowSpacing: 1,
                            arrowBuyColor: "#4094e8",
                            arrowSellColor: "#e75656",
                            text: "",
                            textColor: m,
                            textTransparency: 0,
                            fontFamily: "Verdana",
                            fontSize: 10,
                            fontBold: !1,
                            fontItalic: !1,
                            tooltip: ""
                        },
                        linetoolicon: {
                            color: z,
                            size: 40,
                            icon: 61720,
                            angle: .5 * Math.PI
                        },
                        linetoolemoji: {
                            size: 40,
                            emoji: "😀",
                            angle: .5 * Math.PI
                        },
                        linetoolsticker: {
                            size: 40,
                            sticker: "bitcoin",
                            angle: .5 * Math.PI
                        },
                        linetoolimage: {
                            transparency: 0,
                            cssWidth: 0,
                            cssHeight: 0,
                            angle: 0
                        },
                        linetoolbezierquadro: {
                            linecolor: z,
                            linewidth: 1,
                            fillBackground: !1,
                            backgroundColor: I,
                            transparency: 50,
                            linestyle: S,
                            extendLeft: !1,
                            extendRight: !1,
                            leftEnd: y.Normal,
                            rightEnd: y.Normal
                        },
                        linetoolbeziercubic: {
                            linecolor: W,
                            linewidth: 1,
                            fillBackground: !1,
                            backgroundColor: M,
                            transparency: 80,
                            linestyle: S,
                            extendLeft: !1,
                            extendRight: !1,
                            leftEnd: y.Normal,
                            rightEnd: y.Normal
                        },
                        linetooltrendline: {
                            linecolor: z,
                            linewidth: 2,
                            linestyle: S,
                            extendLeft: !1,
                            extendRight: !1,
                            leftEnd: y.Normal,
                            rightEnd: y.Normal,
                            showLabel: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "bottom",
                            textcolor: z,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            alwaysShowStats: !1,
                            showMiddlePoint: !1,
                            showPriceLabels: !1,
                            showPriceRange: !1,
                            showBarsRange: !1,
                            showDateTimeRange: !1,
                            showDistance: !1,
                            showAngle: !1,
                            statsPosition: f.Right
                        },
                        linetoolinfoline: {
                            linecolor: z,
                            linewidth: 2,
                            linestyle: S,
                            extendLeft: !1,
                            extendRight: !1,
                            leftEnd: y.Normal,
                            rightEnd: y.Normal,
                            showLabel: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "bottom",
                            textcolor: z,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            alwaysShowStats: !0,
                            showMiddlePoint: !1,
                            showPriceLabels: !1,
                            showPriceRange: !0,
                            showBarsRange: !0,
                            showDateTimeRange: !0,
                            showDistance: !0,
                            showAngle: !0,
                            statsPosition: f.Center
                        },
                        linetooltimecycles: {
                            linecolor: "#159980",
                            linewidth: 1,
                            fillBackground: !0,
                            backgroundColor: "rgba(106, 168, 79, 0.5)",
                            transparency: 50,
                            linestyle: S
                        },
                        linetoolsineline: {
                            linecolor: "#159980",
                            linewidth: 1,
                            linestyle: S
                        },
                        linetooltrendangle: {
                            linecolor: z,
                            linewidth: 2,
                            linestyle: S,
                            textcolor: z,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            alwaysShowStats: !1,
                            showMiddlePoint: !1,
                            showPriceLabels: !1,
                            showPriceRange: !1,
                            showBarsRange: !1,
                            extendRight: !1,
                            extendLeft: !1,
                            statsPosition: f.Right
                        },
                        linetooldisjointangle: {
                            linecolor: se,
                            linewidth: 2,
                            linestyle: S,
                            fillBackground: !0,
                            backgroundColor: ce,
                            transparency: 20,
                            extendLeft: !1,
                            extendRight: !1,
                            leftEnd: y.Normal,
                            rightEnd: y.Normal,
                            textcolor: se,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            showPrices: !1,
                            showPriceRange: !1,
                            showDateTimeRange: !1,
                            showBarsRange: !1
                        },
                        linetoolflatbottom: {
                            linecolor: we,
                            linewidth: 2,
                            linestyle: S,
                            fillBackground: !0,
                            backgroundColor: ye,
                            transparency: 20,
                            extendLeft: !1,
                            extendRight: !1,
                            leftEnd: y.Normal,
                            rightEnd: y.Normal,
                            textcolor: we,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            showPrices: !1,
                            showPriceRange: !1,
                            showDateTimeRange: !1,
                            showBarsRange: !1
                        },
                        linetoolfibspiral: {
                            counterclockwise: !1,
                            linecolor: F,
                            linewidth: 1,
                            linestyle: S
                        },
                        linetoolriskrewardshort: {
                            linecolor: ke,
                            linewidth: 1,
                            textcolor: T,
                            fontsize: 12,
                            fillLabelBackground: !0,
                            labelBackgroundColor: "#585858",
                            fillBackground: !0,
                            stopBackground: Q,
                            profitBackground: ce,
                            stopBackgroundTransparency: 80,
                            profitBackgroundTransparency: 80,
                            drawBorder: !1,
                            borderColor: "#667b8b",
                            compact: !1,
                            riskDisplayMode: "percents",
                            accountSize: 1e3,
                            lotSize: 1,
                            risk: 25,
                            alwaysShowStats: !1,
                            showPriceLabels: !0
                        },
                        linetoolriskrewardlong: {
                            linecolor: ke,
                            linewidth: 1,
                            textcolor: T,
                            fontsize: 12,
                            fillLabelBackground: !0,
                            labelBackgroundColor: "#585858",
                            fillBackground: !0,
                            stopBackground: Q,
                            profitBackground: ce,
                            stopBackgroundTransparency: 80,
                            profitBackgroundTransparency: 80,
                            drawBorder: !1,
                            borderColor: "#667b8b",
                            compact: !1,
                            riskDisplayMode: "percents",
                            accountSize: 1e3,
                            lotSize: 1,
                            risk: 25,
                            alwaysShowStats: !1,
                            showPriceLabels: !0
                        },
                        linetoolarrow: {
                            linecolor: z,
                            linewidth: 2,
                            linestyle: S,
                            extendLeft: !1,
                            extendRight: !1,
                            leftEnd: y.Normal,
                            rightEnd: y.Arrow,
                            showLabel: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "bottom",
                            textcolor: z,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            alwaysShowStats: !1,
                            showMiddlePoint: !1,
                            showPriceLabels: !1,
                            showPriceRange: !1,
                            showBarsRange: !1,
                            showDateTimeRange: !1,
                            showDistance: !1,
                            showAngle: !1,
                            statsPosition: f.Right
                        },
                        linetoolray: {
                            linecolor: z,
                            linewidth: 2,
                            linestyle: S,
                            extendLeft: !1,
                            extendRight: !0,
                            leftEnd: y.Normal,
                            rightEnd: y.Normal,
                            showLabel: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "bottom",
                            textcolor: z,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            alwaysShowStats: !1,
                            showMiddlePoint: !1,
                            showPriceLabels: !1,
                            showPriceRange: !1,
                            showBarsRange: !1,
                            showDateTimeRange: !1,
                            showDistance: !1,
                            showAngle: !1,
                            statsPosition: f.Right
                        },
                        linetoolextended: {
                            linecolor: z,
                            linewidth: 2,
                            linestyle: S,
                            extendLeft: !0,
                            extendRight: !0,
                            leftEnd: y.Normal,
                            rightEnd: y.Normal,
                            showLabel: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "bottom",
                            textcolor: z,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            alwaysShowStats: !1,
                            showMiddlePoint: !1,
                            showPriceLabels: !1,
                            showPriceRange: !1,
                            showBarsRange: !1,
                            showDateTimeRange: !1,
                            showDistance: !1,
                            showAngle: !1,
                            statsPosition: f.Right
                        },
                        linetoolhorzline: {
                            linecolor: z,
                            linewidth: 2,
                            linestyle: S,
                            showPrice: !0,
                            showLabel: !1,
                            textcolor: z,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "top"
                        },
                        linetoolhorzray: {
                            linecolor: z,
                            linewidth: 2,
                            linestyle: S,
                            showPrice: !0,
                            showLabel: !1,
                            textcolor: z,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "top"
                        },
                        linetoolvertline: {
                            linecolor: z,
                            linewidth: 2,
                            linestyle: S,
                            extendLine: !0,
                            showTime: !0,
                            showLabel: !1,
                            horzLabelsAlign: "right",
                            vertLabelsAlign: "top",
                            textcolor: z,
                            textOrientation: "vertical",
                            fontsize: 14,
                            bold: !1,
                            italic: !1
                        },
                        linetoolcrossline: {
                            linecolor: z,
                            linewidth: 2,
                            linestyle: S,
                            showPrice: !0,
                            showTime: !0
                        },
                        linetoolcirclelines: {
                            trendline: {
                                visible: !0,
                                color: "#808080",
                                linewidth: 1,
                                linestyle: B
                            },
                            linecolor: "#80ccdb",
                            linewidth: 1,
                            linestyle: S
                        },
                        linetoolfibtimezone: {
                            horzLabelsAlign: "right",
                            vertLabelsAlign: "bottom",
                            baselinecolor: "#808080",
                            linecolor: "#0055db",
                            linewidth: 1,
                            linestyle: S,
                            showLabels: !0,
                            fillBackground: !1,
                            transparency: 80,
                            trendline: {
                                visible: !0,
                                color: "#808080",
                                linewidth: 1,
                                linestyle: B
                            },
                            level1: i(0, ke, !0),
                            level2: i(1, z, !0),
                            level3: i(2, z, !0),
                            level4: i(3, z, !0),
                            level5: i(5, z, !0),
                            level6: i(8, z, !0),
                            level7: i(13, z, !0),
                            level8: i(21, z, !0),
                            level9: i(34, z, !0),
                            level10: i(55, z, !0),
                            level11: i(89, z, !0)
                        },
                        linetooltext: {
                            color: z,
                            fontsize: 14,
                            fillBackground: !1,
                            backgroundColor: "rgba(91, 133, 191, 0.3)",
                            backgroundTransparency: 70,
                            drawBorder: !1,
                            borderColor: "#667b8b",
                            bold: !1,
                            italic: !1,
                            fixedSize: !0,
                            wordWrap: !1,
                            wordWrapWidth: 200
                        },
                        linetooltextabsolute: {
                            color: z,
                            fontsize: 14,
                            fillBackground: !1,
                            backgroundColor: "rgba(155, 190, 213, 0.3)",
                            backgroundTransparency: 70,
                            drawBorder: !1,
                            borderColor: "#667b8b",
                            bold: !1,
                            italic: !1,
                            fixedSize: !1,
                            wordWrap: !1,
                            wordWrapWidth: 200
                        },
                        linetoolballoon: {
                            color: T,
                            backgroundColor: ie,
                            borderColor: le,
                            fontsize: 14,
                            transparency: 30
                        },
                        linetoolcomment: {
                            color: T,
                            backgroundColor: z,
                            borderColor: z,
                            fontsize: 16,
                            transparency: 0
                        },
                        linetoolbrush: {
                            linecolor: F,
                            linewidth: 1,
                            linestyle: S,
                            smooth: 5,
                            fillBackground: !1,
                            backgroundColor: F,
                            transparency: 50,
                            leftEnd: y.Normal,
                            rightEnd: y.Normal
                        },
                        linetoolhighlighter: {
                            linecolor: Q,
                            smooth: 5,
                            transparency: 80
                        },
                        linetoolpolyline: {
                            linecolor: F,
                            linewidth: 1,
                            linestyle: S,
                            fillBackground: !0,
                            backgroundColor: H,
                            transparency: 80,
                            filled: !1
                        },
                        linetoolsignpost: {
                            itemType: b.Emoji,
                            emoji: "🙂",
                            showImage: !1,
                            plateColor: z,
                            fontSize: 12,
                            bold: !1,
                            italic: !1
                        },
                        linetoolpath: {
                            lineColor: z,
                            lineWidth: 2,
                            lineStyle: S,
                            leftEnd: y.Normal,
                            rightEnd: y.Arrow
                        },
                        linetoolarrowmarkleft: {
                            color: z,
                            arrowColor: z,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            showLabel: !0
                        },
                        linetoolarrowmarkup: {
                            color: se,
                            arrowColor: se,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            showLabel: !0
                        },
                        linetoolarrowmarkright: {
                            color: z,
                            arrowColor: z,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            showLabel: !0
                        },
                        linetoolarrowmarkdown: {
                            color: ee,
                            arrowColor: ee,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            showLabel: !0
                        },
                        linetoolflagmark: {
                            flagColor: z
                        },
                        linetoolnote: {
                            markerColor: z,
                            textColor: T,
                            backgroundColor: E,
                            backgroundTransparency: 0,
                            borderColor: z,
                            fontSize: 14,
                            bold: !1,
                            italic: !1,
                            fixedSize: !0
                        },
                        linetoolnoteabsolute: {
                            markerColor: z,
                            textColor: T,
                            backgroundColor: E,
                            backgroundTransparency: 0,
                            borderColor: z,
                            fontSize: 14,
                            bold: !1,
                            italic: !1,
                            fixedSize: !0
                        },
                        linetoolpricelabel: {
                            color: T,
                            backgroundColor: z,
                            borderColor: z,
                            fontWeight: "bold",
                            fontsize: 14,
                            transparency: 0
                        },
                        linetoolpricenote: {
                            showLabel: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "bottom",
                            textColor: z,
                            fontSize: 14,
                            bold: !1,
                            italic: !1,
                            lineColor: z,
                            priceLabelBackgroundColor: z,
                            priceLabelBorderColor: z,
                            priceLabelTextColor: T,
                            priceLabelFontSize: 12,
                            priceLabelBold: !1,
                            priceLabelItalic: !1
                        },
                        linetoolarrowmarker: {
                            backgroundColor: O,
                            textColor: O,
                            bold: !0,
                            italic: !1,
                            fontsize: 16,
                            showLabel: !0
                        },
                        linetoolrectangle: {
                            color: oe,
                            fillBackground: !0,
                            backgroundColor: re,
                            linewidth: 1,
                            transparency: 50,
                            showLabel: !1,
                            horzLabelsAlign: "left",
                            vertLabelsAlign: "bottom",
                            textColor: oe,
                            fontSize: 14,
                            bold: !1,
                            italic: !1,
                            extendLeft: !1,
                            extendRight: !1
                        },
                        linetoolrotatedrectangle: {
                            color: ge,
                            fillBackground: !0,
                            backgroundColor: ve,
                            transparency: 50,
                            linewidth: 1
                        },
                        linetoolcircle: {
                            color: we,
                            backgroundColor: ye,
                            fillBackground: !0,
                            linewidth: 1,
                            showLabel: !1,
                            textColor: we,
                            fontSize: 14,
                            bold: !1,
                            italic: !1
                        },
                        linetoolellipse: {
                            color: J,
                            fillBackground: !0,
                            backgroundColor: Q,
                            transparency: 50,
                            linewidth: 1,
                            showLabel: !1,
                            textColor: J,
                            fontSize: 14,
                            bold: !1,
                            italic: !1
                        },
                        linetoolarc: {
                            color: te,
                            fillBackground: !0,
                            backgroundColor: ne,
                            transparency: 80,
                            linewidth: 1
                        },
                        linetoolprediction: {
                            linecolor: z,
                            linewidth: 1,
                            sourceBackColor: z,
                            sourceTextColor: T,
                            sourceStrokeColor: z,
                            targetStrokeColor: z,
                            targetBackColor: z,
                            targetTextColor: T,
                            successBackground: ge,
                            successTextColor: T,
                            failureBackground: J,
                            failureTextColor: T,
                            intermediateBackColor: "#ead289",
                            intermediateTextColor: "#6d4d22",
                            transparency: 10,
                            centersColor: "#202020"
                        },
                        linetooltriangle: {
                            color: se,
                            fillBackground: !0,
                            backgroundColor: ce,
                            transparency: 80,
                            linewidth: 1
                        },
                        linetoolcallout: {
                            color: T,
                            backgroundColor: U,
                            transparency: 50,
                            linewidth: 1,
                            fontsize: 14,
                            bordercolor: j,
                            bold: !1,
                            italic: !1,
                            wordWrap: !1,
                            wordWrapWidth: 200
                        },
                        linetoolparallelchannel: {
                            linecolor: z,
                            linewidth: 2,
                            linestyle: S,
                            extendLeft: !1,
                            extendRight: !1,
                            fillBackground: !0,
                            backgroundColor: I,
                            transparency: 20,
                            showMidline: !0,
                            midlinecolor: z,
                            midlinewidth: 1,
                            midlinestyle: B
                        },
                        linetoolelliottimpulse: {
                            degree: 7,
                            showWave: !0,
                            color: "#3d85c6",
                            linewidth: 1
                        },
                        linetoolelliotttriangle: {
                            degree: 7,
                            showWave: !0,
                            color: we,
                            linewidth: 1
                        },
                        linetoolelliotttriplecombo: {
                            degree: 7,
                            showWave: !0,
                            color: "#6aa84f",
                            linewidth: 1
                        },
                        linetoolelliottcorrection: {
                            degree: 7,
                            showWave: !0,
                            color: "#3d85c6",
                            linewidth: 1
                        },
                        linetoolelliottdoublecombo: {
                            degree: 7,
                            showWave: !0,
                            color: "#6aa84f",
                            linewidth: 1
                        },
                        linetoolbarspattern: {
                            color: z,
                            mode: c.Bars,
                            mirrored: !1,
                            flipped: !1
                        },
                        linetoolghostfeed: {
                            averageHL: 20,
                            variance: 50,
                            candleStyle: {
                                upColor: ae,
                                downColor: Y,
                                drawWick: !0,
                                drawBorder: !0,
                                borderColor: "#378658",
                                borderUpColor: se,
                                borderDownColor: J,
                                wickColor: ke
                            },
                            transparency: 50
                        },
                        study: {
                            inputs: {},
                            styles: {},
                            bands: {},
                            graphics: {},
                            ohlcPlots: {},
                            palettes: {},
                            filledAreasStyle: {},
                            filledAreas: {},
                            visible: !0,
                            showLegendValues: !0,
                            showLabelsOnPriceScale: !0,
                            precision: "default"
                        },
                        linetoolpitchfork: {
                            fillBackground: !0,
                            transparency: 80,
                            style: s.Original,
                            median: {
                                visible: !0,
                                color: J,
                                linewidth: 1,
                                linestyle: S
                            },
                            extendLines: !1,
                            level0: i(.25, be, !1),
                            level1: i(.382, he, !1),
                            level2: i(.5, se, !0),
                            level3: i(.618, se, !1),
                            level4: i(.75, F, !1),
                            level5: i(1, z, !0),
                            level6: i(1.5, oe, !1),
                            level7: i(1.75, te, !1),
                            level8: i(2, G, !1)
                        },
                        linetoolpitchfan: {
                            fillBackground: !0,
                            transparency: 80,
                            median: {
                                visible: !0,
                                color: J,
                                linewidth: 1,
                                linestyle: S
                            },
                            level0: i(.25, be, !1),
                            level1: i(.382, he, !1),
                            level2: i(.5, F, !0),
                            level3: i(.618, se, !1),
                            level4: i(.75, F, !1),
                            level5: i(1, z, !0),
                            level6: i(1.5, oe, !1),
                            level7: i(1.75, te, !1),
                            level8: i(2, G, !1)
                        },
                        linetoolgannfan: {
                            showLabels: !0,
                            fillBackground: !0,
                            transparency: 80,
                            level1: Be(1, 8, we, !0),
                            level2: Be(1, 4, se, !0),
                            level3: Be(1, 3, ge, !0),
                            level4: Be(1, 2, se, !0),
                            level5: Be(1, 1, F, !0),
                            level6: Be(2, 1, z, !0),
                            level7: Be(3, 1, oe, !0),
                            level8: Be(4, 1, te, !0),
                            level9: Be(8, 1, J, !0)
                        },
                        linetoolganncomplex: {
                            fillBackground: !1,
                            arcsBackground: {
                                fillBackground: !0,
                                transparency: 80
                            },
                            reverse: !1,
                            scaleRatio: "",
                            showLabels: !0,
                            labelsStyle: {
                                fontSize: 12,
                                bold: !1,
                                italic: !1
                            },
                            levels: [d(ke, !0, 1), d(we, !0, 1), d(F, !0, 1), d(ge, !0, 1), d(se, !0, 1), d(ke, !0, 1)],
                            fanlines: [P(N, !1, 1, 8, 1), P(J, !1, 1, 5, 1), P(ke, !1, 1, 4, 1), P(we, !1, 1, 3, 1), P(F, !0, 1, 2, 1), P(ge, !0, 1, 1, 1), P(se, !0, 1, 1, 2), P(se, !1, 1, 1, 3), P(z, !1, 1, 1, 4), P(V, !1, 1, 1, 5), P(N, !1, 1, 1, 8)],
                            arcs: [P(we, !0, 1, 1, 0), P(we, !0, 1, 1, 1), P(we, !0, 1, 1.5, 0), P(F, !0, 1, 2, 0), P(F, !0, 1, 2, 1), P(ge, !0, 1, 3, 0), P(ge, !0, 1, 3, 1), P(se, !0, 1, 4, 0), P(se, !0, 1, 4, 1), P(z, !0, 1, 5, 0), P(z, !0, 1, 5, 1)]
                        },
                        linetoolgannfixed: {
                            fillBackground: !1,
                            arcsBackground: {
                                fillBackground: !0,
                                transparency: 80
                            },
                            reverse: !1,
                            levels: [d(ke, !0, 1), d(we, !0, 1), d(F, !0, 1), d(ge, !0, 1), d(se, !0, 1), d(ke, !0, 1)],
                            fanlines: [P(N, !1, 1, 8, 1), P(J, !1, 1, 5, 1), P(ke, !1, 1, 4, 1), P(we, !1, 1, 3, 1), P(F, !0, 1, 2, 1), P(ge, !0, 1, 1, 1), P(se, !0, 1, 1, 2), P(se, !1, 1, 1, 3), P(z, !1, 1, 1, 4), P(V, !1, 1, 1, 5), P(N, !1, 1, 1, 8)],
                            arcs: [P(we, !0, 1, 1, 0), P(we, !0, 1, 1, 1), P(we, !0, 1, 1.5, 0), P(F, !0, 1, 2, 0), P(F, !0, 1, 2, 1), P(ge, !0, 1, 3, 0), P(ge, !0, 1, 3, 1), P(se, !0, 1, 4, 0), P(se, !0, 1, 4, 1), P(z, !0, 1, 5, 0), P(z, !0, 1, 5, 1)]
                        },
                        linetoolgannsquare: {
                            color: "rgba(21, 56, 153, 0.8)",
                            linewidth: 1,
                            linestyle: S,
                            showTopLabels: !0,
                            showBottomLabels: !0,
                            showLeftLabels: !0,
                            showRightLabels: !0,
                            fillHorzBackground: !0,
                            horzTransparency: 80,
                            fillVertBackground: !0,
                            vertTransparency: 80,
                            reverse: !1,
                            fans: o(Se, !1),
                            hlevel1: l(0, ke, !0),
                            hlevel2: l(.25, we, !0),
                            hlevel3: l(.382, F, !0),
                            hlevel4: l(.5, ge, !0),
                            hlevel5: l(.618, se, !0),
                            hlevel6: l(.75, z, !0),
                            hlevel7: l(1, ke, !0),
                            vlevel1: l(0, ke, !0),
                            vlevel2: l(.25, we, !0),
                            vlevel3: l(.382, F, !0),
                            vlevel4: l(.5, ge, !0),
                            vlevel5: l(.618, se, !0),
                            vlevel6: l(.75, z, !0),
                            vlevel7: l(1, ke, !0)
                        },
                        linetoolfibspeedresistancefan: {
                            fillBackground: !0,
                            transparency: 80,
                            grid: {
                                color: "rgba(21, 56, 153, 0.8)",
                                linewidth: 1,
                                linestyle: S,
                                visible: !0
                            },
                            linewidth: 1,
                            linestyle: S,
                            showTopLabels: !0,
                            showBottomLabels: !0,
                            showLeftLabels: !0,
                            showRightLabels: !0,
                            reverse: !1,
                            hlevel1: l(0, ke, !0),
                            hlevel2: l(.25, we, !0),
                            hlevel3: l(.382, F, !0),
                            hlevel4: l(.5, ge, !0),
                            hlevel5: l(.618, se, !0),
                            hlevel6: l(.75, z, !0),
                            hlevel7: l(1, ke, !0),
                            vlevel1: l(0, ke, !0),
                            vlevel2: l(.25, we, !0),
                            vlevel3: l(.382, F, !0),
                            vlevel4: l(.5, ge, !0),
                            vlevel5: l(.618, se, !0),
                            vlevel6: l(.75, z, !0),
                            vlevel7: l(1, ke, !0)
                        },
                        linetoolfibretracement: {
                            showCoeffs: !0,
                            showPrices: !0,
                            fillBackground: !0,
                            transparency: 80,
                            extendLines: !1,
                            extendLinesLeft: !1,
                            horzLabelsAlign: "left",
                            vertLabelsAlign: "bottom",
                            reverse: !1,
                            coeffsAsPercents: !1,
                            fibLevelsBasedOnLogScale: !1,
                            labelFontSize: 12,
                            trendline: {
                                visible: !0,
                                color: ke,
                                linewidth: 1,
                                linestyle: B
                            },
                            levelsStyle: {
                                linewidth: 1,
                                linestyle: S
                            },
                            level1: l(0, ke, !0),
                            level2: l(.236, J, !0),
                            level3: l(.382, we, !0),
                            level4: l(.5, ge, !0),
                            level5: l(.618, se, !0),
                            level6: l(.786, F, !0),
                            level7: l(1, ke, !0),
                            level8: l(1.618, z, !0),
                            level9: l(2.618, J, !0),
                            level10: l(3.618, oe, !0),
                            level11: l(4.236, te, !0),
                            level12: l(1.272, we, !1),
                            level13: l(1.414, J, !1),
                            level16: l(2, se, !1),
                            level14: l(2.272, we, !1),
                            level15: l(2.414, ge, !1),
                            level17: l(3, F, !1),
                            level18: l(3.272, ke, !1),
                            level19: l(3.414, z, !1),
                            level20: l(4, J, !1),
                            level21: l(4.272, oe, !1),
                            level22: l(4.414, te, !1),
                            level23: l(4.618, we, !1),
                            level24: l(4.764, se, !1)
                        },
                        linetoolfibchannel: {
                            showCoeffs: !0,
                            showPrices: !0,
                            fillBackground: !0,
                            transparency: 80,
                            extendLeft: !1,
                            extendRight: !1,
                            horzLabelsAlign: "left",
                            vertLabelsAlign: "middle",
                            coeffsAsPercents: !1,
                            labelFontSize: 12,
                            levelsStyle: {
                                linewidth: 1,
                                linestyle: S
                            },
                            level1: l(0, ke, !0),
                            level2: l(.236, J, !0),
                            level3: l(.382, we, !0),
                            level4: l(.5, ge, !0),
                            level5: l(.618, se, !0),
                            level6: l(.786, F, !0),
                            level7: l(1, ke, !0),
                            level8: l(1.618, z, !0),
                            level9: l(2.618, J, !0),
                            level10: l(3.618, oe, !0),
                            level11: l(4.236, te, !0),
                            level12: l(1.272, we, !1),
                            level13: l(1.414, J, !1),
                            level16: l(2, se, !1),
                            level14: l(2.272, we, !1),
                            level15: l(2.414, ge, !1),
                            level17: l(3, F, !1),
                            level18: l(3.272, ke, !1),
                            level19: l(3.414, z, !1),
                            level20: l(4, J, !1),
                            level21: l(4.272, oe, !1),
                            level22: l(4.414, te, !1),
                            level23: l(4.618, we, !1),
                            level24: l(4.764, se, !1)
                        },
                        linetoolprojection: {
                            showCoeffs: !0,
                            fillBackground: !0,
                            transparency: 80,
                            color1: I,
                            color2: re,
                            linewidth: 1,
                            trendline: {
                                visible: !0,
                                color: Se,
                                linestyle: S
                            },
                            level1: i(1, "#808080", !0)
                        },
                        linetool5pointspattern: {
                            color: z,
                            textcolor: T,
                            fillBackground: !0,
                            backgroundColor: z,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            transparency: 85,
                            linewidth: 1
                        },
                        linetoolcypherpattern: {
                            color: z,
                            textcolor: T,
                            fillBackground: !0,
                            backgroundColor: z,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            transparency: 85,
                            linewidth: 1
                        },
                        linetooltrianglepattern: {
                            color: W,
                            textcolor: T,
                            fillBackground: !0,
                            backgroundColor: W,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            transparency: 85,
                            linewidth: 1
                        },
                        linetoolabcd: {
                            color: se,
                            textcolor: T,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            linewidth: 1
                        },
                        linetoolthreedrivers: {
                            color: W,
                            textcolor: T,
                            fillBackground: !0,
                            backgroundColor: "rgba(149, 40, 204, 0.5)",
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            transparency: 50,
                            linewidth: 1
                        },
                        linetoolheadandshoulders: {
                            color: se,
                            textcolor: T,
                            fillBackground: !0,
                            backgroundColor: se,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            transparency: 85,
                            linewidth: 1
                        },
                        linetoolfibwedge: {
                            showCoeffs: !0,
                            fillBackground: !0,
                            transparency: 80,
                            trendline: {
                                visible: !0,
                                color: "#808080",
                                linewidth: 1,
                                linestyle: S
                            },
                            level1: i(.236, J, !0),
                            level2: i(.382, we, !0),
                            level3: i(.5, ge, !0),
                            level4: i(.618, se, !0),
                            level5: i(.786, F, !0),
                            level6: i(1, ke, !0),
                            level7: i(1.618, z, !1),
                            level8: i(2.618, J, !1),
                            level9: i(3.618, W, !1),
                            level10: i(4.236, te, !1),
                            level11: i(4.618, te, !1)
                        },
                        linetoolfibcircles: {
                            showCoeffs: !0,
                            fillBackground: !0,
                            transparency: 80,
                            coeffsAsPercents: !1,
                            trendline: {
                                visible: !0,
                                color: ke,
                                linewidth: 1,
                                linestyle: B
                            },
                            level1: i(.236, J, !0),
                            level2: i(.382, we, !0),
                            level3: i(.5, se, !0),
                            level4: i(.618, ge, !0),
                            level5: i(.786, F, !0),
                            level6: i(1, ke, !0),
                            level7: i(1.618, z, !0),
                            level8: i(2.618, te, !0),
                            level9: i(3.618, z, !0),
                            level10: i(4.236, te, !0),
                            level11: i(4.618, J, !0)
                        },
                        linetoolfibspeedresistancearcs: {
                            showCoeffs: !0,
                            fillBackground: !0,
                            transparency: 80,
                            fullCircles: !1,
                            trendline: {
                                visible: !0,
                                color: ke,
                                linewidth: 1,
                                linestyle: B
                            },
                            level1: i(.236, J, !0),
                            level2: i(.382, we, !0),
                            level3: i(.5, se, !0),
                            level4: i(.618, ge, !0),
                            level5: i(.786, F, !0),
                            level6: i(1, ke, !0),
                            level7: i(1.618, z, !0),
                            level8: i(2.618, te, !0),
                            level9: i(3.618, z, !0),
                            level10: i(4.236, te, !0),
                            level11: i(4.618, J, !0)
                        },
                        linetooltrendbasedfibextension: {
                            showCoeffs: !0,
                            showPrices: !0,
                            fillBackground: !0,
                            transparency: 80,
                            extendLines: !1,
                            extendLinesLeft: !1,
                            horzLabelsAlign: "left",
                            vertLabelsAlign: "bottom",
                            reverse: !1,
                            coeffsAsPercents: !1,
                            fibLevelsBasedOnLogScale: !1,
                            labelFontSize: 12,
                            trendline: {
                                visible: !0,
                                color: ke,
                                linewidth: 1,
                                linestyle: B
                            },
                            levelsStyle: {
                                linewidth: 1,
                                linestyle: S
                            },
                            level1: l(0, ke, !0),
                            level2: l(.236, J, !0),
                            level3: l(.382, we, !0),
                            level4: l(.5, ge, !0),
                            level5: l(.618, se, !0),
                            level6: l(.786, F, !0),
                            level7: l(1, ke, !0),
                            level8: l(1.618, z, !0),
                            level9: l(2.618, J, !0),
                            level10: l(3.618, oe, !0),
                            level11: l(4.236, te, !0),
                            level12: l(1.272, we, !1),
                            level13: l(1.414, J, !1),
                            level16: l(2, se, !1),
                            level14: l(2.272, we, !1),
                            level15: l(2.414, ge, !1),
                            level17: l(3, F, !1),
                            level18: l(3.272, ke, !1),
                            level19: l(3.414, z, !1),
                            level20: l(4, J, !1),
                            level21: l(4.272, oe, !1),
                            level22: l(4.414, te, !1),
                            level23: l(4.618, we, !1),
                            level24: l(4.764, se, !1)
                        },
                        linetooltrendbasedfibtime: {
                            showCoeffs: !0,
                            fillBackground: !0,
                            transparency: 80,
                            horzLabelsAlign: "right",
                            vertLabelsAlign: "bottom",
                            trendline: {
                                visible: !0,
                                color: ke,
                                linewidth: 1,
                                linestyle: B
                            },
                            level1: i(0, ke, !0),
                            level2: i(.382, J, !0),
                            level3: i(.5, he, !1),
                            level4: i(.618, ge, !0),
                            level5: i(1, se, !0),
                            level6: i(1.382, F, !0),
                            level7: i(1.618, ke, !0),
                            level8: i(2, z, !0),
                            level9: i(2.382, te, !0),
                            level10: i(2.618, oe, !0),
                            level11: i(3, W, !0)
                        },
                        linetoolschiffpitchfork: {
                            fillBackground: !0,
                            transparency: 80,
                            style: s.Schiff,
                            median: {
                                visible: !0,
                                color: J,
                                linewidth: 1,
                                linestyle: S
                            },
                            extendLines: !1,
                            level0: i(.25, be, !1),
                            level1: i(.382, he, !1),
                            level2: i(.5, se, !0),
                            level3: i(.618, se, !1),
                            level4: i(.75, F, !1),
                            level5: i(1, z, !0),
                            level6: i(1.5, oe, !1),
                            level7: i(1.75, te, !1),
                            level8: i(2, G, !1)
                        },
                        linetoolschiffpitchfork2: {
                            fillBackground: !0,
                            transparency: 80,
                            style: s.Schiff2,
                            median: {
                                visible: !0,
                                color: J,
                                linewidth: 1,
                                linestyle: S
                            },
                            extendLines: !1,
                            level0: i(.25, be, !1),
                            level1: i(.382, he, !1),
                            level2: i(.5, se, !0),
                            level3: i(.618, se, !1),
                            level4: i(.75, F, !1),
                            level5: i(1, z, !0),
                            level6: i(1.5, oe, !1),
                            level7: i(1.75, te, !1),
                            level8: i(2, G, !1)
                        },
                        linetoolinsidepitchfork: {
                            fillBackground: !0,
                            transparency: 80,
                            style: s.Inside,
                            median: {
                                visible: !0,
                                color: J,
                                linewidth: 1,
                                linestyle: S
                            },
                            extendLines: !1,
                            level0: i(.25, be, !1),
                            level1: i(.382, he, !1),
                            level2: i(.5, se, !0),
                            level3: i(.618, se, !1),
                            level4: i(.75, F, !1),
                            level5: i(1, z, !0),
                            level6: i(1.5, oe, !1),
                            level7: i(1.75, te, !1),
                            level8: i(2, G, !1)
                        },
                        linetoolregressiontrend: {
                            linewidth: 1,
                            linestyle: S,
                            styles: {
                                upLine: {
                                    display: h.All,
                                    color: D,
                                    linestyle: S,
                                    linewidth: 2
                                },
                                downLine: {
                                    display: h.All,
                                    color: D,
                                    linestyle: S,
                                    linewidth: 2
                                },
                                baseLine: {
                                    display: h.All,
                                    color: K,
                                    linestyle: B,
                                    linewidth: 1
                                },
                                extendLines: !1,
                                showPearsons: !0,
                                transparency: 70
                            }
                        }
                    }, Oe(TradingView.defaultProperties.chartproperties), Ve()
                }
                if (void 0 === TradingView.defaultProperties["study_MA@tv-basicstudies"] && (TradingView.defaultProperties["study_MA@tv-basicstudies"] = {
                        description: "Moving Average",
                        shortDescription: "MA",
                        inputs: {
                            length: 9,
                            source: "close"
                        },
                        styles: {
                            MovAvg: {
                                display: h.All,
                                color: z,
                                linestyle: S,
                                linewidth: 1,
                                plottype: u.Line,
                                histogramBase: 0,
                                title: "MA"
                            }
                        }
                    }), void 0 === TradingView.defaultProperties["study_PivotPointsHighLow@tv-basicstudies"] && (TradingView.defaultProperties["study_PivotPointsHighLow@tv-basicstudies"] = {
                        fontsize: 10,
                        borderColor: z,
                        backColor: x,
                        textColor: Te
                    }), void 0 === TradingView.defaultProperties["study_PivotPointsStandard@tv-basicstudies"]) {
                    var Ie = !0;
                    TradingView.defaultProperties["study_PivotPointsStandard@tv-basicstudies"] = {
                        _hardCodedDefaultsVersion: 1,
                        fontsize: 11,
                        levelsStyle: {
                            showLabels: !0,
                            visibility: {
                                P: Ie,
                                "S1/R1": Ie,
                                "S2/R2": Ie,
                                "S3/R3": Ie,
                                "S4/R4": Ie,
                                "S5/R5": Ie
                            },
                            colors: {
                                P: pe,
                                "S1/R1": pe,
                                "S2/R2": pe,
                                "S3/R3": pe,
                                "S4/R4": pe,
                                "S5/R5": pe
                            },
                            widths: {
                                P: 1,
                                "S1/R1": 1,
                                "S2/R2": 1,
                                "S3/R3": 1,
                                "S4/R4": 1,
                                "S5/R5": 1
                            }
                        }
                    }
                }
                if (void 0 === TradingView.defaultProperties["study_ZigZag@tv-basicstudies"] && (TradingView.defaultProperties["study_ZigZag@tv-basicstudies"] = {
                        color: z,
                        linewidth: 2
                    }), void 0 === TradingView.defaultProperties["study_ElliottWave@tv-basicstudies"] && (TradingView.defaultProperties["study_ElliottWave@tv-basicstudies"] = {
                        inputs: {},
                        level0: o(q, !1),
                        level1: o("#008000", !1),
                        level2: o("#0000ff", !1),
                        level3: o("#ff00ff", !1),
                        level4: o("#0080ff", !0),
                        level5: o(q, !0),
                        level6: o("#008000", !0),
                        level7: o("#0000ff", !0),
                        level8: o("#ff00ff", !0)
                    }), void 0 === TradingView.defaultProperties["study_LinearRegression@tv-basicstudies"] && (TradingView.defaultProperties["study_LinearRegression@tv-basicstudies"] = {
                        styles: {
                            upLine: {
                                display: h.All,
                                color: D,
                                linestyle: S,
                                linewidth: 1
                            },
                            downLine: {
                                display: h.All,
                                color: D,
                                linestyle: S,
                                linewidth: 1
                            },
                            baseLine: {
                                display: h.All,
                                color: K,
                                linestyle: S,
                                linewidth: 1
                            },
                            extendLines: !0,
                            showPearsons: !0,
                            backgroundColor: "rgba(153, 21, 21, 0.3)",
                            transparency: 70
                        }
                    }), void 0 === TradingView.defaultProperties["study_Compare@tv-basicstudies"] && (TradingView.defaultProperties["study_Compare@tv-basicstudies"] = {
                        minTick: "default"
                    }), void 0 === TradingView.defaultProperties["study_Overlay@tv-basicstudies"]) {
                    TradingView.defaultProperties["study_Overlay@tv-basicstudies"] = {
                        style: a.STYLE_LINE,
                        allowExtendTimeScale: !1,
                        showPriceLine: !1,
                        minTick: "default",
                        candleStyle: {
                            upColor: "#6ba583",
                            downColor: "#d75442",
                            drawWick: !0,
                            drawBorder: !0,
                            drawBody: !0,
                            borderColor: "#378658",
                            borderUpColor: "#225437",
                            borderDownColor: "#5b1a13",
                            wickColor: "#737375",
                            wickUpColor: "#737375",
                            wickDownColor: "#737375",
                            barColorsOnPrevClose: !1
                        },
                        hollowCandleStyle: {
                            upColor: "#6ba583",
                            downColor: "#d75442",
                            drawWick: !0,
                            drawBorder: !0,
                            drawBody: !0,
                            borderColor: "#378658",
                            borderUpColor: "#225437",
                            borderDownColor: "#5b1a13",
                            wickColor: "#737375",
                            wickUpColor: "#737375",
                            wickDownColor: "#737375",
                            barColorsOnPrevClose: !1
                        },
                        barStyle: {
                            upColor: "#6ba583",
                            downColor: "#d75442",
                            barColorsOnPrevClose: !1,
                            dontDrawOpen: !1,
                            thinBars: !0
                        },
                        lineStyle: {
                            color: fe,
                            linestyle: S,
                            linewidth: 2,
                            priceSource: "close",
                            styleType: a.STYLE_LINE_TYPE_SIMPLE
                        },
                        areaStyle: {
                            color1: z,
                            color2: z,
                            linecolor: z,
                            linestyle: S,
                            linewidth: 2,
                            priceSource: "close",
                            transparency: 95
                        },
                        baselineStyle: {
                            baselineColor: xe,
                            topFillColor1: Ee,
                            topFillColor2: Ee,
                            bottomFillColor1: Re,
                            bottomFillColor2: Re,
                            topLineColor: ze,
                            bottomLineColor: De,
                            topLineWidth: 2,
                            bottomLineWidth: 2,
                            priceSource: "close",
                            transparency: 50,
                            baseLevelPercentage: 50
                        },
                        hiloStyle: {
                            color: z,
                            showBorders: !0,
                            borderColor: z,
                            showLabels: !0,
                            labelColor: z,
                            drawBody: !0
                        },
                        columnStyle: {
                            upColor: t(se, 50),
                            downColor: t(J, 50),
                            barColorsOnPrevClose: !0,
                            priceSource: "close"
                        },
                        styles: {
                            open: {
                                display: h.All,
                                color: q,
                                linestyle: S,
                                linewidth: 1,
                                plottype: u.Line,
                                histogramBase: 0
                            },
                            high: {
                                display: h.All,
                                color: q,
                                linestyle: S,
                                linewidth: 1,
                                plottype: u.Line,
                                histogramBase: 0
                            },
                            low: {
                                display: h.All,
                                color: q,
                                linestyle: S,
                                linewidth: 1,
                                plottype: u.Line,
                                histogramBase: 0
                            },
                            close: {
                                display: h.All,
                                color: q,
                                linestyle: S,
                                linewidth: 1,
                                plottype: u.Line,
                                histogramBase: 0
                            }
                        }
                    }
                }
                for (var Ne = e.split("."), We = TradingView.defaultProperties, Me = 0; Me < Ne.length; Me++) We && (We = We[Ne[Me]]);
                return null != We ? TradingView.clone(We) : {}
            };

            function Ie(e, o, l, r, i) {
                if (r)
                    for (var t in r) {
                        var n = t.split("."),
                            a = c(n[0]),
                            s = void 0 !== i && i === n[0];
                        0 !== n.length && s && (a = c((n = n.slice(1))[0])), 0 !== n.length && e.hasOwnProperty(a) ? d(e, n, r[t]) || u(t) : s && u(t)
                    }

                function c(e) {
                    return o && o[e] ? o[e] : e
                }

                function d(e, o, l, r) {
                    var i = c(o[0]);
                    return !!e.hasOwnProperty(i) && (o.length > 1 ? d(e[i], o.slice(1), l) : (e[i] && e[i].setValue ? e[i].setValue(l) : e[i] = l, !0))
                }

                function u(e) {
                    l || P.logWarn("Path `" + e + "` does not exist.")
                }
            }

            function Oe(e, o, l, r) {
                window.__defaultsOverrides && Ie(e, o, l, window.__defaultsOverrides, r)
            }

            function Ne(e, o) {
                window.__settingsOverrides && Ie(e, null, !1, window.__settingsOverrides, o)
            }

            function Ve() {
                var e = /^linetool.+/;
                Object.keys(TradingView.defaultProperties).forEach((function(o) {
                    e.test(o) && Oe(TradingView.defaultProperties[o], null, !1, o)
                }))
            }

            function We(e, o) {
                return o ? function(e, o) {
                    var l = _e(e);
                    if (!window._UNIT_TESTS) {
                        var r = TradingView.clone(TVSettings.getJSON(e, null));
                        if (function(e) {
                                var o = new Set(["linetoolregressiontrend"]);
                                return e.startsWith("study_") || o.has(e)
                            }(e) && r && function(e) {
                                if (!e) return !1;
                                e = e.toString();
                                var o = new RegExp("\\d+").exec(e);
                                return null !== o && o[0] === e
                            }(r.version)) {
                            var i = r.inputs,
                                t = o.updateStudyInputs(r.id, r.version, "last", i, null);
                            r.inputs = t, r = o.updateStudyState(r, r)
                        }
                        TradingView.merge(l, r), Ne(l, e)
                    }
                    return l
                }(e, o) : function(e) {
                    var o = _e(e);
                    if (!window._UNIT_TESTS) {
                        var l = TradingView.clone(TVSettings.getJSON(e, null));
                        if (l) {
                            TradingView.merge(o, l);
                            const r = e.split(".");
                            Ne(o, void 0 === r[1] ? e : r[1])
                        }
                    }
                    return o
                }(e)
            }
            We.create = function(e, o) {
                if (o) {
                    var l = _e(e);
                    TradingView.defaultProperties[e] = Object.assign(o, l)
                }
            }, We.remove = function(e) {
                TradingView.defaultProperties[e] = void 0
            }, TradingView.saveDefaults = function(e, o) {
                void 0 === o ? TVSettings.remove(e) : TVSettings.setJSON(e, o)
            }, TradingView.factoryDefaults = _e, window.applyDefaultOverridesToLinetools = Ve, window.applyDefaultsOverrides = Oe, window.applyPropertiesOverrides = Ie, window.defaults = We, o.applyDefaultOverridesToLinetools = Ve, o.applyDefaultsOverrides = Oe, o.applyPropertiesOverrides = Ie, o.defaults = We, o.factoryDefaults = _e, o.saveDefaults = TradingView.saveDefaults
        },
        335144: (e, o, l) => {
            var r, i;
            l.d(o, {
                    PlDisplay: () => r,
                    TradedGroupHorizontalAlignment: () => i,
                    tradingPreferencesDefault: () => t,
                    CustomSourceLayer: () => n
                }),
                function(e) {
                    e[e.Money = 0] = "Money", e[e.Pips = 1] = "Pips", e[e.Percentage = 2] = "Percentage"
                }(r || (r = {})),
                function(e) {
                    e[e.Left = 0] = "Left", e[e.Center = 1] = "Center", e[e.Right = 2] = "Right"
                }(i || (i = {}));
            const t = {
                showPositions: !1,
                positionPL: {
                    visibility: !1,
                    display: r.Money
                },
                bracketsPL: {
                    visibility: !1,
                    display: r.Money
                },
                showOrders: !1,
                showExecutions: !1,
                showExecutionsLabels: !1,
                showReverse: !1,
                extendLeft: !1,
                lineLength: 0,
                horizontalAlignment: i.Right,
                lineWidth: 0,
                lineStyle: 0
            };
            var n;
            ! function(e) {
                e[e.Background = 0] = "Background", e[e.Foreground = 1] = "Foreground", e[e.Topmost = 2] = "Topmost"
            }(n || (n = {}))
        },
        969334: (e, o, l) => {
            var r;
            l.d(o, {
                    LineToolBarsPatternMode: () => r
                }),
                function(e) {
                    e[e.Bars = 0] = "Bars", e[e.Line = 1] = "Line", e[e.OpenClose = 2] = "OpenClose", e[e.LineOpen = 3] = "LineOpen", e[e.LineHigh = 4] = "LineHigh", e[e.LineLow = 5] = "LineLow", e[e.LineHL2 = 6] = "LineHL2"
                }(r || (r = {}))
        },
        560554: (e, o, l) => {
            var r;
            l.d(o, {
                    LineToolPitchforkStyle: () => r
                }),
                function(e) {
                    e[e.Original = 0] = "Original", e[e.Schiff = 1] = "Schiff", e[e.Inside = 2] = "Inside", e[e.Schiff2 = 3] = "Schiff2"
                }(r || (r = {}))
        },
        59703: (e, o, l) => {
            var r;
            l.d(o, {
                    MagnetMode: () => r
                }),
                function(e) {
                    e[e.WeakMagnet = 0] = "WeakMagnet", e[e.StrongMagnet = 1] = "StrongMagnet"
                }(r || (r = {}))
        },
        739665: (e, o, l) => {
            var r;
            l.d(o, {
                    LineEnd: () => r
                }),
                function(e) {
                    e[e.Normal = 0] = "Normal", e[e.Arrow = 1] = "Arrow", e[e.Circle = 2] = "Circle"
                }(r || (r = {}))
        },
        169813: (e, o, l) => {
            var r;
            l.d(o, {
                    StatsPosition: () => r
                }),
                function(e) {
                    e[e.Left = 0] = "Left", e[e.Center = 1] = "Center", e[e.Right = 2] = "Right"
                }(r || (r = {}))
        },
        11178: (e, o, l) => {
            l.d(o, {
                sessionsPreferencesDefault: () => i
            });
            var r = l(314967);
            const i = {
                graphics: {
                    backgrounds: {
                        outOfSession: {
                            color: r.colorsPalette["color-tv-blue-500"],
                            transparency: 92,
                            visible: !1
                        },
                        preMarket: {
                            color: "#FF9800",
                            transparency: 92,
                            visible: !1
                        },
                        postMarket: {
                            color: r.colorsPalette["color-tv-blue-500"],
                            transparency: 92,
                            visible: !1
                        }
                    },
                    vertlines: {
                        sessBreaks: {
                            color: "#4985e7",
                            style: 2,
                            visible: !1,
                            width: 1
                        }
                    }
                }
            }
        },
        674329: (e, o, l) => {
            var r;
            l.d(o, {
                    StoriesTimeLineItemType: () => r
                }),
                function(e) {
                    e[e.Image = 0] = "Image", e[e.Emoji = 1] = "Emoji"
                }(r || (r = {}))
        },
        519872: (e, o, l) => {
            var r, i, t;

            function n(e) {
                return "line" === e.type
            }

            function a(e) {
                return "shapes" === e.type
            }

            function s(e) {
                return "chars" === e.type
            }

            function c(e) {
                return "arrows" === e.type
            }

            function d(e) {
                return "data" === e.type
            }

            function u(e) {
                return "dataoffset" === e.type
            }

            function h(e) {
                return "ohlc_open" === e.type
            }

            function g(e) {
                return "ohlc_high" === e.type
            }

            function v(e) {
                return "ohlc_low" === e.type
            }

            function b(e) {
                return "ohlc_close" === e.type
            }

            function w(e) {
                return h(e) || g(e) || v(e) || b(e)
            }

            function y(e) {
                return "colorer" === e.type && "palette" in e
            }

            function p(e) {
                return "colorer" === e.type && !("palette" in e)
            }

            function f(e) {
                return "colorer" === e.type
            }

            function C(e) {
                return "bar_colorer" === e.type
            }

            function L(e) {
                return "bg_colorer" === e.type
            }

            function S(e) {
                return "text_colorer" === e.type
            }

            function k(e) {
                return "ohlc_colorer" === e.type
            }

            function B(e) {
                return "wick_colorer" === e.type
            }

            function P(e) {
                return "border_colorer" === e.type
            }

            function m(e) {
                return "up_colorer" === e.type
            }

            function T(e) {
                return "down_colorer" === e.type
            }

            function A(e) {
                return "alertcondition" === e.type
            }

            function x(e) {
                return n(e) || a(e) || s(e) || c(e)
            }

            function z(e) {
                return "Plot" !== e
            }

            function E(e) {
                return "ohlc_bars" === e.plottype
            }

            function D(e) {
                return "ohlc_candles" === e.plottype
            }

            function R(e) {
                return f(e) || C(e) || L(e) || d(e) || u(e) || k(e) || A(e) || m(e) || T(e) || P(e) || B(e) || S(e)
            }

            function _(e) {
                return f(e) || S(e) || C(e) || d(e) || u(e) || k(e) || B(e) || P(e) || m(e) || T(e) || A(e)
            }
            l.r(o), l.d(o, {
                    LineStudyPlotStyle: () => r,
                    STUDYPLOTDISPLAYTARGET: () => i,
                    isLinePlot: () => n,
                    isShapesPlot: () => a,
                    isCharsPlot: () => s,
                    isArrowsPlot: () => c,
                    isDataPlot: () => d,
                    isDataOffsetPlot: () => u,
                    isOhlcOpenPlot: () => h,
                    isOhlcHighPlot: () => g,
                    isOhlcLowPlot: () => v,
                    isOhlcClosePlot: () => b,
                    isOhlcPlot: () => w,
                    isPaletteColorerPlot: () => y,
                    isRgbaColorerPlot: () => p,
                    isColorerPlot: () => f,
                    isBarColorerPlot: () => C,
                    isBgColorerPlot: () => L,
                    isTextColorerPlot: () => S,
                    isOhlcColorerPlot: () => k,
                    isCandleWickColorerPlot: () => B,
                    isCandleBorderColorerPlot: () => P,
                    isUpColorerPlot: () => m,
                    isDownColorerPlot: () => T,
                    isAlertConditionPlot: () => A,
                    isPlotSupportDisplay: () => x,
                    isPlotTitleDefined: () => z,
                    isOhlcPlotStyleBars: () => E,
                    isOhlcPlotStyleCandles: () => D,
                    PlotSymbolSize: () => t,
                    isPlotWithTechnicalValues: () => R,
                    isNonVisualPlot: () => _
                }),
                function(e) {
                    e[e.Line = 0] = "Line", e[e.Histogram = 1] = "Histogram", e[e.Cross = 3] = "Cross", e[e.Area = 4] = "Area", e[e.Columns = 5] = "Columns", e[e.Circles = 6] = "Circles", e[e.LineWithBreaks = 7] = "LineWithBreaks", e[e.AreaWithBreaks = 8] = "AreaWithBreaks", e[e.StepLine = 9] = "StepLine", e[e.StepLineWithDiamonds = 10] = "StepLineWithDiamonds", e[e.StepLineWithBreaks = 11] = "StepLineWithBreaks"
                }(r || (r = {})),
                function(e) {
                    e[e.None = 0] = "None", e[e.Pane = 1] = "Pane", e[e.DataWindow = 2] = "DataWindow", e[e.PriceScale = 4] = "PriceScale", e[e.StatusLine = 8] = "StatusLine", e[e.All = 15] = "All"
                }(i || (i = {})),
                function(e) {
                    e.Auto = "auto", e.Tiny = "tiny", e.Small = "small", e.Normal = "normal", e.Large = "large", e.Huge = "huge"
                }(t || (t = {}))
        },
        570703: (e, o, l) => {
            l.r(o), l.d(o, {
                MINUTE_SPAN: () => r,
                HOUR_SPAN: () => i,
                DAY_SPAN: () => t,
                WEEK_SPAN: () => n,
                MONTH_SPAN: () => a,
                YEAR_SPAN: () => s,
                DEFAULT_BAR_SPACING: () => c
            });
            const r = 20,
                i = 30,
                t = 40,
                n = 50,
                a = 60,
                s = 70,
                c = 6
        }
    }
]);
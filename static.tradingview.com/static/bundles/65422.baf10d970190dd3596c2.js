(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [65422], {
        394721: (t, e, o) => {
            "use strict";
            o.d(e, {
                candlestickRanges: () => q
            });
            var r = o(777754),
                i = o(775110),
                n = o(923549),
                a = o(238739),
                l = o(554794),
                s = o(162088),
                c = o(48632),
                d = o(502506),
                g = o(601285),
                u = o(383425),
                m = o(829016),
                h = o(14723),
                p = o(693505),
                f = o(159402),
                _ = o(364697),
                v = o(110416),
                y = o(623788),
                F = o(492619),
                C = o(11951),
                k = o(630410),
                w = o(672687),
                M = o(651316),
                S = o(601354),
                x = o(829605),
                D = o(488287),
                A = o(636627),
                b = o(837553),
                T = o(249478);
            const q = [{
                key: "Candle.3BlackCrows",
                name: r.t(null, void 0, o(441855)),
                svg: i
            }, {
                key: "Candle.3WhiteSoldiers",
                name: r.t(null, void 0, o(477268)),
                svg: n
            }, {
                key: "Candle.AbandonedBaby.Bearish",
                name: r.t(null, void 0, o(656210)),
                svg: a
            }, {
                key: "Candle.AbandonedBaby.Bullish",
                name: r.t(null, void 0, o(8987)),
                svg: l
            }, {
                key: "Candle.Doji",
                name: r.t(null, {
                    context: "study"
                }, o(464667)),
                svg: s
            }, {
                key: "Candle.Doji.Dragonfly",
                name: r.t(null, void 0, o(26820)),
                svg: c
            }, {
                key: "Candle.Doji.Gravestone",
                name: r.t(null, void 0, o(855043)),
                svg: d
            }, {
                key: "Candle.Engulfing.Bearish",
                name: r.t(null, void 0, o(156924)),
                svg: g
            }, {
                key: "Candle.Engulfing.Bullish",
                name: r.t(null, void 0, o(471047)),
                svg: u
            }, {
                key: "Candle.EveningStar",
                name: r.t(null, void 0, o(242065)),
                svg: m
            }, {
                key: "Candle.Hammer",
                name: r.t(null, void 0, o(370898)),
                svg: h
            }, {
                key: "Candle.HangingMan",
                name: r.t(null, void 0, o(476460)),
                svg: p
            }, {
                key: "Candle.Harami.Bearish",
                name: r.t(null, void 0, o(316045)),
                svg: f
            }, {
                key: "Candle.Harami.Bullish",
                name: r.t(null, void 0, o(422693)),
                svg: _
            }, {
                key: "Candle.InvertedHammer",
                name: r.t(null, void 0, o(165530)),
                svg: v
            }, {
                key: "Candle.Kicking.Bearish",
                name: r.t(null, void 0, o(261751)),
                svg: y
            }, {
                key: "Candle.Kicking.Bullish",
                name: r.t(null, void 0, o(897720)),
                svg: F
            }, {
                key: "Candle.LongShadow.Lower",
                name: r.t(null, void 0, o(331348)),
                svg: C
            }, {
                key: "Candle.LongShadow.Upper",
                name: r.t(null, void 0, o(996238)),
                svg: k
            }, {
                key: "Candle.Marubozu.Black",
                name: r.t(null, void 0, o(171089)),
                svg: w
            }, {
                key: "Candle.Marubozu.White",
                name: r.t(null, void 0, o(896076)),
                svg: M
            }, {
                key: "Candle.MorningStar",
                name: r.t(null, void 0, o(802588)),
                svg: S
            }, {
                key: "Candle.ShootingStar",
                name: r.t(null, void 0, o(382345)),
                svg: x
            }, {
                key: "Candle.SpinningTop.Black",
                name: r.t(null, {
                    context: "study"
                }, o(101570)),
                svg: D
            }, {
                key: "Candle.SpinningTop.White",
                name: r.t(null, {
                    context: "study"
                }, o(581800)),
                svg: A
            }, {
                key: "Candle.TriStar.Bearish",
                name: r.t(null, void 0, o(356951)),
                svg: b
            }, {
                key: "Candle.TriStar.Bullish",
                name: r.t(null, void 0, o(503497)),
                svg: T
            }].sort(((t, e) => t.name.localeCompare(e.name)))
        },
        30372: (t, e, o) => {
            "use strict";
            o.d(e, {
                mutateSimpleDate: () => n,
                maturityDateToDateObj: () => a,
                getMaturityDate: () => l
            });
            var r = o(150335),
                i = o(838126);

            function n(t) {
                return t && (0, r.isNumber)(t) ? i.dateFormatFunctions["yyyy-MM-dd"](a(t), !0) : "—"
            }

            function a(t) {
                const [e, o, r] = l(t);
                return new Date(e, o - 1, r)
            }

            function l(t) {
                const e = t.toString();
                return [Number(e.substring(0, 4)), Number(e.substring(4, 6)), Number(e.substring(6))]
            }
        },
        263605: (t, e, o) => {
            "use strict";
            o.d(e, {
                applyEarningsCalendarNextReleaseDate: () => ct,
                applyEarningsCalendarReleaseDate: () => gt,
                applyEarningsCalendarToFields: () => at,
                applyScreenerTypeToFields: () => rt,
                conditionByField: () => tt,
                fields: () => Y,
                getAliasFiledName: () => Q,
                getFieldFormatter: () => ut,
                getFieldTitle: () => ft,
                getPriceFieldFormatter: () => ht,
                isFieldToDisplay: () => pt,
                isValueAbsent: () => E,
                translatedMetaFieldNames: () => O
            });
            var r = o(461909),
                i = o(831471),
                n = o(738023),
                a = o(561068);
            var l = o(811478),
                s = o(719240),
                c = o(120379),
                d = o(777754),
                g = o(73874),
                u = o(878134),
                m = o(264996),
                h = o(30372),
                p = o(588565);
            const f = {
                    common: ["common", "foreign-issuer"],
                    stock: ["common"],
                    dr: ["", "foreign-issuer"],
                    preferred: ["preferred"],
                    fund: ["fund"],
                    structured: [""]
                },
                _ = {
                    closedend: ["closedend"],
                    etf: ["etf", "etf,odd", "etf,otc", "etf,cfd"],
                    etn: ["etn"],
                    mutual: ["mutual"],
                    reit: ["reit", "reit,cfd", "trust,reit"],
                    trust: ["trust"],
                    unit: ["unit"]
                };

            function v(t) {
                let e = [],
                    o = [];
                return ! function(t) {
                    return t in _
                }(t) ? ! function(t) {
                    return "common" === t || "preferred" === t || "stock" === t
                }(t) ? ! function(t) {
                    return t in f
                }(t) ? e = [t] : (e = [t], o = f[t]) : (e.push("stock"), o = f[t]) : (e.push("fund"), o = _[t]), [e, o]
            }

            function y(t, e) {
                const o = (0, p.uniq)(e),
                    r = 1 === o.length;
                return {
                    left: t,
                    operation: r ? "equal" : "in_range",
                    right: r ? o[0] : o
                }
            }
            var F = o(648779),
                C = o(273994),
                k = o(747342),
                w = o(126561),
                M = o(394721);
            const S = new l.TrailingZerosPriceFormatter(1e8, 1),
                x = new i.PriceFormatter(100, 1, !1),
                D = new i.PriceFormatter(1, 1, !1),
                A = new n.VolumeFormatter,
                b = new a.PercentageFormatter,
                T = new a.PercentageFormatter(1),
                q = new class {
                    constructor(t) {
                        this._formatStr = t || "%y-%m-%d"
                    }
                    format(t) {
                        const e = new Date(1e3 * t);
                        return this._formatStr.replace("%y", (0, i.numberToStringWithLeadingZero)(e.getUTCFullYear(), 4)).replace("%m", (0, i.numberToStringWithLeadingZero)(e.getUTCMonth() + 1, 2)).replace("%d", (0, i.numberToStringWithLeadingZero)(e.getUTCDate(), 2))
                    }
                },
                O = {
                    Any: d.t(null, void 0, o(302951)),
                    Exotic: d.t(null, void 0, o(775740)),
                    Major: d.t(null, void 0, o(175595)),
                    Minor: d.t(null, void 0, o(174735)),
                    Africa: d.t(null, void 0, o(655312)),
                    Americas: d.t(null, void 0, o(958290)),
                    Asia: d.t(null, void 0, o(161768)),
                    Europe: d.t(null, void 0, o(559592)),
                    Pacific: d.t(null, void 0, o(632715)),
                    "Middle East": d.t(null, void 0, o(372560))
                },
                B = [{
                    key: "today",
                    name: d.t(null, void 0, o(963386))
                }, {
                    key: "tomorrow",
                    name: d.t(null, void 0, o(749930))
                }, {
                    key: "yesterday",
                    name: d.t(null, void 0, o(730141))
                }, {
                    key: "next_five",
                    name: d.t(null, void 0, o(595786))
                }, {
                    key: "prev_five",
                    name: d.t(null, void 0, o(560403))
                }, {
                    key: "this_week",
                    name: d.t(null, void 0, o(924267))
                }, {
                    key: "next_week",
                    name: d.t(null, void 0, o(302032))
                }, {
                    key: "prev_week",
                    name: d.t(null, void 0, o(397174))
                }, {
                    key: "this_month",
                    name: d.t(null, void 0, o(446331))
                }],
                R = ["today", "yesterday", "prev_five", "prev_week", "this_week", "this_month"],
                V = ["today", "tomorrow", "next_five", "next_week", "this_week", "this_month"],
                E = t => null == t || "" === t.toString().trim(),
                P = t => e => {
                    const o = W(e, B);
                    if (o) {
                        const e = L(o);
                        if (e) return ((t, e, o = "earnings_release_date,earnings_release_next_date") => [{
                            left: o,
                            operation: "in_range",
                            right: [t / 1e3, e / 1e3]
                        }, {
                            left: o,
                            operation: "nequal",
                            right: e / 1e3
                        }])(e[0], e[1], t)
                    }
                    return !1
                },
                z = (t, e) => Object.keys(e).find((o => e[o] === t)) || t,
                I = (t, e, o, r) => {
                    const i = r.filter((e => e[t] === o));
                    return i.length > 0 ? i[0][e] : ""
                },
                H = (t, e) => I("key", "name", t, e),
                W = (t, e) => I("name", "key", t, e),
                L = t => {
                    const e = k.get_timezone((0, w.getCurrentTimezone)()),
                        o = (() => {
                            const t = k.get_timezone((0,
                                    w.getCurrentTimezone)()),
                                e = new Date,
                                o = k.utc_to_cal(t, e.getTime());
                            return k.get_cal(t, o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate())
                        })();
                    let r, i;
                    if ("today" === t) r = o.getTime(), i = k.add_days_considering_dst(e, o, 1).getTime();
                    else if ("tomorrow" === t) r = k.add_days_considering_dst(e, o, 1).getTime(), i = k.add_days_considering_dst(e, o, 2).getTime();
                    else if ("yesterday" === t) {
                        const t = 6e4;
                        r = k.add_days_considering_dst(e, o, -1).getTime(), i = o.getTime() - t
                    } else if ("next_five" === t) r = k.add_days_considering_dst(e, o, 1).getTime(), i = k.add_days_considering_dst(e, o, 5).getTime();
                    else if ("prev_five" === t) r = k.add_days_considering_dst(e, o, -5).getTime(), i = o.getTime();
                    else if ("this_week" === t) {
                        const t = (o.getDay() + 6) % 7;
                        r = k.add_days_considering_dst(e, o, -t).getTime(), i = k.add_days_considering_dst(e, o, 7 - t).getTime()
                    } else if ("next_week" === t) {
                        const t = (o.getDay() + 6) % 7 - 7;
                        r = k.add_days_considering_dst(e, o, -t).getTime(), i = k.add_days_considering_dst(e, o, 7 - t).getTime()
                    } else if ("prev_week" === t) {
                        const t = (o.getDay() + 6) % 7 + 7;
                        r = k.add_days_considering_dst(e, o, -t).getTime(), i = k.add_days_considering_dst(e, o, 7 - t).getTime()
                    } else if ("this_month" === t) {
                        const t = o.getDate(),
                            n = new Date(o.getFullYear(), o.getMonth(), 0).getDate();
                        r = k.add_days_considering_dst(e, o, 1 - t).getTime(), i = k.add_days_considering_dst(e, o, n - t).getTime()
                    }
                    return !(!r || !i) && [r, i]
                },
                N = {
                    dr: [d.t(null, void 0, o(325723)), d.t(null, void 0, o(938749)), {
                        nowrap: !0
                    }],
                    etf: [d.t(null, void 0, o(730816)), d.t(null, void 0, o(730816))],
                    common: [d.t(null, void 0, o(10340)), ""],
                    preferred: [d.t(null, void 0, o(459279)), d.t(null, void 0, o(972654))],
                    closedend: [d.t(null, void 0, o(617090)), d.t(null, void 0, o(961742))],
                    etn: [d.t(null, void 0, o(731044)), d.t(null, void 0, o(731044))],
                    reit: [d.t(null, void 0, o(712431)), d.t(null, void 0, o(712431))],
                    unit: [d.t(null, void 0, o(172674)), d.t(null, void 0, o(172674))],
                    mutual: [d.t(null, void 0, o(218146)), d.t(null, void 0, o(863811))],
                    trust: [d.t(null, void 0, o(292399)), d.t(null, void 0, o(992804))],
                    structured: [d.t(null, void 0, o(968602)), d.t(null, void 0, o(690115))]
                },
                $ = t => ["open", "high", "low", "close"].filter((e => e !== t)),
                U = t => ["SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"].filter((e => e !== t)),
                j = t => ["Ichimoku.BLine", "Ichimoku.CLine", "Ichimoku.Lead1", "Ichimoku.Lead2"].filter((e => e !== t)),
                K = ["crosses", "crosses_above", "crosses_below"];

            function X(t, ...e) {
                const o = e[e.length - 1];
                if (o.searchValue) {
                    const e = (0, u.parseHtml)(t).childNodes;
                    let r = "";
                    for (let t = 0; t < e.length; t++) e[t].classList && (e[t].classList.contains("tv-screener__symbol") && (e[t].innerHTML = Z(e[t].textContent.trim(), o.searchValue)), r += e[t].outerHTML);
                    return r + " "
                }
                return t
            }
            const Y = {
                name: {
                    fixed: !0,
                    control: "select",
                    category: 1,
                    inplaceEditorLeftOffset: 10,
                    filterTitle: C.quoteFieldTitles.type[0],
                    rangeTitles: N,
                    additionalColumns: ["description", "name", "type", "subtype", "update_mode"],
                    additionalFormatter: (t, e, o, i, n, a = "") => {
                        const l = ((t, e) => Y.type.disabled || !Y.type.checked ? "" : `<span class="tv-screener__type" title="${Y.type.mutateDisplayValue(t,e)}"><sup>${Y.type.mutateDisplayValue(t,e,!0)}</sup></span>`)(o, i);
                        return ((t, e, o, i, n) => {
                            const a = new s.DataModeIndicator({
                                classSuffix: "--for-screener",
                                short: !0
                            });
                            if (null !== n && "string" == typeof n) {
                                const t = (0, r.parseUpdateMode)(n);
                                null === t ? a.setMode(n) : a.setMode(t.mode, t.interval)
                            }
                            if (Y.description.disabled || !Y.description.checked) return a.getElement().outerHTML;
                            const l = {
                                description: t,
                                pro_name: i,
                                short_name: o
                            };
                            let d = t ? (0, c.getTranslatedSymbolDescription)(l).toString().toUpperCase() : "";
                            Y.name.searchValue && (d = Z(d, Y.name.searchValue));
                            const g = !Y.description.disabled || Y.description.checked ? `<span class="tv-screener__description">${d} ${e}</span>` : "";
                            return `${a.getElement().outerHTML}${g}`
                        })(t, l, e, a, n)
                    },
                    mutateDisplayValue: X,
                    tooltip: (t, e) => Y.description.disabled || !Y.description.checked ? e : t,
                    useDefaultRange: !0,
                    defaultRange: ["dr", "etf", "common", "preferred", "closedend", "etn", "reit", "unit", "mutual", "trust", "structured"],
                    customFilterCondition: t => Y.type.customFilterCondition(t),
                    search: !0
                },
                description: {
                    hiddenColumn: !0,
                    hideSetupColumn: !0
                },
                logoid: {
                    hiddenColumn: !1,
                    hideSetupColumn: !0,
                    skipField: !0
                },
                currency_logoid: {
                    hiddenColumn: !1,
                    hideSetupColumn: !0,
                    skipField: !0
                },
                base_currency_logoid: {
                    hiddenColumn: !1,
                    hideSetupColumn: !0,
                    skipField: !0
                },
                exchange: {
                    control: "select",
                    category: 1,
                    mutateDisplayValue: t => "AMEX" === t ? "NYSE ARCA" : t,
                    rangeTitles: {
                        AMEX: ["NYSE ARCA", "NYSE ARCA", {
                            nowrap: !0
                        }]
                    }
                },
                submarket: {
                    control: "select",
                    category: 1
                },
                sector: {
                    category: 1,
                    filterCondition: "select",
                    sourceRange: ["Major", "Minor", "Exotic"],
                    mutateDisplayValue: (t, ...e) => {
                        const o = X(t, e);
                        return (0, F.triesTranslateScreenerData)(o)
                    }
                },
                index: {
                    control: "select",
                    isSingle: !0,
                    category: 1,
                    hideSetupColumn: !0,
                    groupFilter: !0,
                    customFilterCondition: t => {
                        const e = Y.index.sourceRange ? Y.index.sourceRange.find((e => e.name === t)) : null;
                        return !!e && {
                            type: "index",
                            values: [e.id]
                        }
                    }
                },
                industry: {
                    control: "select",
                    category: 1
                },
                country: {
                    control: "select",
                    category: 1
                },
                type: {
                    hiddenColumn: !0,
                    hideSetupColumn: !0,
                    filterCondition: "select",
                    category: 1,
                    rangeTitles: N,
                    sortableColumn: !1,
                    resettableFilter: !1,
                    useDefaultRange: !0,
                    defaultRange: ["dr", "etf", "common", "preferred", "closedend", "etn", "reit", "unit", "mutual", "trust", "structured"],
                    additionalColumns: ["subtype"],
                    mutateDisplayValue: (t, e, o = !1) => e && N[e] ? N[e][o ? 1 : 0] : N[t] ? N[t][o ? 1 : 0] : "",
                    customFilterCondition: function(t) {
                        let e = [],
                            o = [];
                        if (Array.isArray(t))
                            for (const r of t) {
                                const [t, i] = v(r);
                                e = [...e, ...t], o = [...o, ...i]
                            } else [e, o] = v(t);
                        return o = [...new Set(o)], e.length && o.length ? [y("type", e), y("subtype", o)] : e.length ? [y("type", e)] : [y("subtype", o)]
                    }
                },
                market_cap_basic: {
                    control: "range",
                    formatter: A,
                    category: 1
                },
                market_cap_calc: {
                    control: "range",
                    formatter: A,
                    category: 1
                },
                market_cap_diluted_calc: {
                    control: "range",
                    formatter: A,
                    category: 1
                },
                volume: {
                    control: "range",
                    formatter: A,
                    category: 1
                },
                average_volume_10d_calc: {
                    title: C.quoteFieldTitles.average_volume[0],
                    shortTitle: C.quoteFieldTitles.average_volume[1],
                    control: "range",
                    formatter: A,
                    category: 1,
                    useDefaultTimeInterval: !0
                },
                average_volume_30d_calc: {
                    control: "range",
                    formatter: A,
                    category: 1,
                    useDefaultTimeInterval: !0
                },
                average_volume_60d_calc: {
                    control: "range",
                    formatter: A,
                    category: 1,
                    useDefaultTimeInterval: !0
                },
                average_volume_90d_calc: {
                    control: "range",
                    formatter: A,
                    category: 1,
                    useDefaultTimeInterval: !0
                },
                relative_volume_10d_calc: {
                    title: C.quoteFieldTitles.relative_volume[0],
                    shortTitle: C.quoteFieldTitles.relative_volume[1],
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 1
                },
                "relative_volume_intraday.5": {
                    title: C.quoteFieldTitles.relative_volume_at_time[0],
                    shortTitle: C.quoteFieldTitles.relative_volume_at_time[1],
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 1,
                    useDefaultTimeIntervalFromFieldName: !0
                },
                change: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: {
                        stock: ["premarket_change", "postmarket_change"],
                        default: []
                    },
                    formatter: b,
                    category: 3,
                    highlightChange: !0
                },
                "change.1": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: {
                        stock: ["change", "premarket_change", "postmarket_change"],
                        default: []
                    },
                    formatter: b,
                    category: 3,
                    highlightChange: !0
                },
                "change.5": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: {
                        stock: ["change", "premarket_change", "postmarket_change"],
                        default: []
                    },
                    formatter: b,
                    category: 3,
                    highlightChange: !0
                },
                "change.15": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: {
                        stock: ["change", "premarket_change", "postmarket_change"],
                        default: []
                    },
                    formatter: b,
                    category: 3,
                    highlightChange: !0
                },
                "change.60": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: {
                        stock: ["change", "premarket_change", "postmarket_change"],
                        default: []
                    },
                    formatter: b,
                    category: 3,
                    highlightChange: !0
                },
                "change.240": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: {
                        stock: ["change", "premarket_change", "postmarket_change"],
                        default: []
                    },
                    formatter: b,
                    category: 3,
                    highlightChange: !0
                },
                "change.1W": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: {
                        stock: ["change", "premarket_change", "postmarket_change"],
                        default: []
                    },
                    formatter: b,
                    category: 3,
                    highlightChange: !0
                },
                "change.1M": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: {
                        stock: ["change", "premarket_change", "postmarket_change"],
                        default: []
                    },
                    formatter: b,
                    category: 3,
                    highlightChange: !0
                },
                change_abs: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: S,
                    forexFormatter: S,
                    category: 3,
                    highlightChange: !0
                },
                "change_abs.1": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: S,
                    forexFormatter: S,
                    category: 3,
                    highlightChange: !0
                },
                "change_abs.5": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: S,
                    forexFormatter: S,
                    category: 3,
                    highlightChange: !0
                },
                "change_abs.15": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: S,
                    forexFormatter: S,
                    category: 3,
                    highlightChange: !0
                },
                "change_abs.60": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: S,
                    forexFormatter: S,
                    category: 3,
                    highlightChange: !0
                },
                "change_abs.240": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: S,
                    forexFormatter: S,
                    category: 3,
                    highlightChange: !0
                },
                "change_abs.1W": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: S,
                    forexFormatter: S,
                    category: 3,
                    highlightChange: !0
                },
                "change_abs.1M": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: S,
                    forexFormatter: S,
                    category: 3,
                    highlightChange: !0
                },
                bid: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    forexFormatter: S,
                    category: 1,
                    mutateDisplayValue: t => `<span>${t}</span>`
                },
                ask: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    forexFormatter: S,
                    category: 1,
                    mutateDisplayValue: t => `<span>${t}</span>`
                },
                open: {
                    control: "condition",
                    conditionFields: {
                        stock: $("open").concat("premarket_open", "postmarket_open", "premarket_close", "postmarket_close", U(), "HullMA9", "BB.upper", "BB.lower", j()),
                        forex: $("open").concat("bid", "ask", U(), "HullMA9", "BB.upper", "BB.lower", j()),
                        default: $("open").concat(U(), "BB.upper", "BB.lower", "HullMA9", j())
                    },
                    formatter: S,
                    forexFormatter: S,
                    category: 1
                },
                close: {
                    title: d.t(null, void 0, o(25684)),
                    shortTitle: d.t(null, void 0, o(25684)),
                    control: "condition",
                    conditionFields: {
                        stock: $("close").concat("premarket_close", "postmarket_close", U(), "HullMA9", "BB.upper", "BB.lower", j()),
                        forex: $("close").concat("bid", "ask", U(), "HullMA9", "BB.upper", "BB.lower", j()),
                        default: $("close").concat(U(), "BB.upper", "BB.lower", "HullMA9", j())
                    },
                    formatter: S,
                    forexFormatter: S,
                    category: 1,
                    mutateDisplayValue: t => `<span>${t}</span>`
                },
                high: {
                    control: "condition",
                    conditionFields: {
                        stock: $("high").concat("premarket_high", "postmarket_high", "premarket_close", "postmarket_close", U(), "HullMA9", "BB.upper", "BB.lower", j()),
                        forex: $("high").concat("bid", "ask", U(), "HullMA9", "BB.upper", "BB.lower", j()),
                        default: $("high").concat(U(), "BB.upper", "BB.lower", "HullMA9", j())
                    },
                    formatter: S,
                    forexFormatter: S,
                    category: 1
                },
                low: {
                    control: "condition",
                    conditionFields: {
                        stock: $("low").concat("premarket_low", "postmarket_low", "premarket_close", "postmarket_close", U(), "HullMA9", "BB.upper", "BB.lower", j()),
                        forex: $("low").concat("bid", "ask", U(), "HullMA9", "BB.upper", "BB.lower", j()),
                        default: $("low").concat(U(), "BB.upper", "BB.lower", "HullMA9", j())
                    },
                    formatter: S,
                    forexFormatter: S,
                    category: 1
                },
                gap: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 3,
                    highlightChange: !0
                },
                price_earnings_ttm: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 2
                },
                price_sales_ratio: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 2
                },
                return_on_assets: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 2
                },
                return_on_equity: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 2
                },
                debt_to_equity: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    category: 2
                },
                current_ratio: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 2
                },
                quick_ratio: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 2
                },
                price_book_fq: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 2
                },
                price_book_ratio: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 2
                },
                price_free_cash_flow_ttm: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 2
                },
                beta_1_year: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    category: 3
                },
                operating_margin: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                earnings_per_share_basic_ttm: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 2
                },
                ebitda: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                change_from_open: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 3,
                    highlightChange: !0
                },
                change_from_open_abs: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: S,
                    forexFormatter: S,
                    category: 3,
                    highlightChange: !0
                },
                "Perf.W": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 3,
                    highlightChange: !0
                },
                "Perf.1M": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 3,
                    highlightChange: !0
                },
                "Perf.3M": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 3,
                    highlightChange: !0
                },
                "Perf.6M": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 3,
                    highlightChange: !0
                },
                "Perf.Y": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 3,
                    highlightChange: !0
                },
                "Perf.YTD": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 3,
                    highlightChange: !0
                },
                "Perf.5Y": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 3,
                    highlightChange: !0
                },
                "Perf.All": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 3,
                    highlightChange: !0
                },
                "Volatility.W": {
                    control: "condition",
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 3
                },
                "Volatility.M": {
                    control: "condition",
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 3
                },
                "Volatility.D": {
                    control: "condition",
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 3
                },
                RSI: {
                    control: "condition",
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["RSI", "RSI[1]"],
                    mutateDisplayValue: g.signalDisplayFunctions.processRSISignal,
                    signalComputation: g.signalComputationFunctions.computeRSISignal
                },
                RSI7: {
                    control: "condition",
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["RSI7", "RSI7[1]"],
                    mutateDisplayValue: g.signalDisplayFunctions.processRSISignal,
                    signalComputation: g.signalComputationFunctions.computeRSISignal
                },
                ADX: {
                    control: "condition",
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["ADX", "ADX+DI", "ADX-DI", "ADX+DI[1]", "ADX-DI[1]"],
                    mutateDisplayValue: g.signalDisplayFunctions.processADXSignal,
                    signalComputation: g.signalComputationFunctions.computeADXSignal
                },
                "ADX+DI": {
                    control: "condition",
                    conditionFields: ["ADX-DI"],
                    formatter: x,
                    filterFormatter: D,
                    category: 3
                },
                "ADX-DI": {
                    control: "condition",
                    conditionFields: ["ADX+DI"],
                    formatter: x,
                    filterFormatter: D,
                    category: 3
                },
                ATR: {
                    control: "condition",
                    conditionFields: [],
                    formatter: S,
                    category: 3
                },
                Mom: {
                    control: "condition",
                    conditionFields: [],
                    formatter: S,
                    filterFormatter: D,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["Mom", "Mom[1]"],
                    mutateDisplayValue: g.signalDisplayFunctions.processMomSignal,
                    signalComputation: g.signalComputationFunctions.computeMomSignal
                },
                "High.All": {
                    control: "toggle",
                    filter: {
                        operator: "eless",
                        value: "high"
                    },
                    formatter: x,
                    forexFormatter: S,
                    category: 3
                },
                "Low.All": {
                    control: "toggle",
                    filter: {
                        operator: "egreater",
                        value: "low"
                    },
                    formatter: x,
                    forexFormatter: S,
                    category: 3
                },
                price_52_week_high: {
                    control: "toggle",
                    filter: {
                        operator: "eless",
                        value: "high"
                    },
                    formatter: x,
                    forexFormatter: S,
                    category: 3
                },
                price_52_week_low: {
                    control: "toggle",
                    filter: {
                        operator: "egreater",
                        value: "low"
                    },
                    formatter: x,
                    forexFormatter: S,
                    category: 3
                },
                is_primary: {
                    title: C.quoteFieldTitles.is_primary[0],
                    control: "toggle",
                    filter: {
                        operator: "equal",
                        value: !0
                    },
                    category: 1
                },
                active_symbol: {
                    hideSetupColumn: !0,
                    control: "toggle",
                    filter: {
                        operator: "equal",
                        value: !0
                    },
                    category: 1
                },
                "High.6M": {
                    control: "toggle",
                    filter: {
                        operator: "eless",
                        value: "high"
                    },
                    formatter: x,
                    forexFormatter: S,
                    category: 3
                },
                "Low.6M": {
                    control: "toggle",
                    filter: {
                        operator: "egreater",
                        value: "low"
                    },
                    formatter: x,
                    forexFormatter: S,
                    category: 3
                },
                "High.3M": {
                    control: "toggle",
                    filter: {
                        operator: "eless",
                        value: "high"
                    },
                    formatter: x,
                    forexFormatter: S,
                    category: 3
                },
                "Low.3M": {
                    control: "toggle",
                    filter: {
                        operator: "egreater",
                        value: "low"
                    },
                    formatter: x,
                    forexFormatter: S,
                    category: 3
                },
                "High.1M": {
                    control: "toggle",
                    filter: {
                        operator: "eless",
                        value: "high"
                    },
                    formatter: x,
                    forexFormatter: S,
                    category: 3
                },
                "Low.1M": {
                    control: "toggle",
                    filter: {
                        operator: "egreater",
                        value: "low"
                    },
                    formatter: x,
                    forexFormatter: S,
                    category: 3
                },
                EMA5: {
                    control: "condition",
                    conditionFields: $().concat(U("EMA5")),
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["EMA5", "close"],
                    mutateDisplayValue: g.signalDisplayFunctions.processMASignal,
                    signalComputation: g.signalComputationFunctions.computeMASignal
                },
                EMA10: {
                    control: "condition",
                    conditionFields: $().concat(U("EMA10")),
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["EMA10", "close"],
                    mutateDisplayValue: g.signalDisplayFunctions.processMASignal,
                    signalComputation: g.signalComputationFunctions.computeMASignal
                },
                EMA20: {
                    control: "condition",
                    conditionFields: $().concat(U("EMA20")),
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["EMA20", "close"],
                    mutateDisplayValue: g.signalDisplayFunctions.processMASignal,
                    signalComputation: g.signalComputationFunctions.computeMASignal
                },
                EMA30: {
                    control: "condition",
                    conditionFields: $().concat(U("EMA30")),
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["EMA30", "close"],
                    mutateDisplayValue: g.signalDisplayFunctions.processMASignal,
                    signalComputation: g.signalComputationFunctions.computeMASignal
                },
                EMA50: {
                    control: "condition",
                    conditionFields: $().concat(U("EMA50")),
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["EMA50", "close"],
                    mutateDisplayValue: g.signalDisplayFunctions.processMASignal,
                    signalComputation: g.signalComputationFunctions.computeMASignal
                },
                EMA100: {
                    control: "condition",
                    conditionFields: $().concat(U("EMA100")),
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["EMA100", "close"],
                    mutateDisplayValue: g.signalDisplayFunctions.processMASignal,
                    signalComputation: g.signalComputationFunctions.computeMASignal
                },
                EMA200: {
                    control: "condition",
                    conditionFields: $().concat(U("EMA200")),
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["EMA200", "close"],
                    mutateDisplayValue: g.signalDisplayFunctions.processMASignal,
                    signalComputation: g.signalComputationFunctions.computeMASignal
                },
                SMA5: {
                    control: "condition",
                    conditionFields: $().concat(U("SMA5")),
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["SMA5", "close"],
                    mutateDisplayValue: g.signalDisplayFunctions.processMASignal,
                    signalComputation: g.signalComputationFunctions.computeMASignal
                },
                SMA10: {
                    control: "condition",
                    conditionFields: $().concat(U("SMA10")),
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["SMA10", "close"],
                    mutateDisplayValue: g.signalDisplayFunctions.processMASignal,
                    signalComputation: g.signalComputationFunctions.computeMASignal
                },
                SMA20: {
                    control: "condition",
                    conditionFields: $().concat(U("SMA20")),
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["SMA20", "close"],
                    mutateDisplayValue: g.signalDisplayFunctions.processMASignal,
                    signalComputation: g.signalComputationFunctions.computeMASignal
                },
                SMA30: {
                    control: "condition",
                    conditionFields: $().concat(U("SMA30")),
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["SMA30", "close"],
                    mutateDisplayValue: g.signalDisplayFunctions.processMASignal,
                    signalComputation: g.signalComputationFunctions.computeMASignal
                },
                SMA50: {
                    control: "condition",
                    conditionFields: $().concat(U("SMA50")),
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["SMA50", "close"],
                    mutateDisplayValue: g.signalDisplayFunctions.processMASignal,
                    signalComputation: g.signalComputationFunctions.computeMASignal
                },
                SMA100: {
                    control: "condition",
                    conditionFields: $().concat(U("SMA100")),
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["SMA100", "close"],
                    mutateDisplayValue: g.signalDisplayFunctions.processMASignal,
                    signalComputation: g.signalComputationFunctions.computeMASignal
                },
                SMA200: {
                    control: "condition",
                    conditionFields: $().concat(U("SMA200")),
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["SMA200", "close"],
                    mutateDisplayValue: g.signalDisplayFunctions.processMASignal,
                    signalComputation: g.signalComputationFunctions.computeMASignal
                },
                "Stoch.K": {
                    control: "condition",
                    conditionFields: $().concat(["Stoch.D"]),
                    formatter: x,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["Stoch.K", "Stoch.D", "Stoch.K[1]", "Stoch.D[1]"],
                    mutateDisplayValue: g.signalDisplayFunctions.processStochSignal,
                    signalComputation: g.signalComputationFunctions.computeStochSignal
                },
                "Stoch.D": {
                    control: "condition",
                    conditionFields: $().concat(["Stoch.K"]),
                    formatter: x,
                    category: 3
                },
                "MACD.macd": {
                    control: "condition",
                    conditionFields: $().concat(["MACD.signal"]),
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["MACD.macd", "MACD.signal"],
                    mutateDisplayValue: g.signalDisplayFunctions.processMACDSignal,
                    signalComputation: g.signalComputationFunctions.computeMACDSignal
                },
                "MACD.signal": {
                    control: "condition",
                    conditionFields: $().concat(["MACD.macd"]),
                    formatter: S,
                    category: 3
                },
                "Aroon.Up": {
                    control: "condition",
                    conditionFields: ["Aroon.Down"],
                    formatter: x,
                    category: 3
                },
                "Aroon.Down": {
                    control: "condition",
                    conditionFields: ["Aroon.Up"],
                    formatter: x,
                    category: 3
                },
                "BB.upper": {
                    control: "condition",
                    conditionFields: $().concat(["BB.lower", "KltChnl.upper", "KltChnl.lower"]),
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["close", "BB.upper"],
                    mutateDisplayValue: g.signalDisplayFunctions.processBBSellSignal,
                    signalComputation: g.signalComputationFunctions.computeBBSellSignal
                },
                "BB.lower": {
                    control: "condition",
                    conditionFields: $().concat(["BB.upper", "KltChnl.upper", "KltChnl.lower"]),
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["close", "BB.lower"],
                    mutateDisplayValue: g.signalDisplayFunctions.processBBBuySignal,
                    signalComputation: g.signalComputationFunctions.computeBBBuySignal
                },
                "KltChnl.upper": {
                    control: "condition",
                    conditionFields: $().concat(["KltChnl.lower", "BB.upper", "BB.lower"]),
                    formatter: S,
                    category: 3
                },
                "KltChnl.lower": {
                    control: "condition",
                    conditionFields: $().concat(["KltChnl.upper", "BB.upper", "BB.lower"]),
                    formatter: S,
                    category: 3
                },
                "P.SAR": {
                    control: "condition",
                    conditionFields: $(),
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["P.SAR", "open"],
                    mutateDisplayValue: g.signalDisplayFunctions.processPSARSignal,
                    signalComputation: g.signalComputationFunctions.computePSARSignal
                },
                "Value.Traded": {
                    control: "range",
                    formatter: A,
                    category: 1
                },
                MoneyFlow: {
                    control: "condition",
                    conditionFields: [],
                    formatter: x,
                    category: 3
                },
                ChaikinMoneyFlow: {
                    control: "condition",
                    conditionFields: [],
                    formatter: x,
                    category: 3
                },
                goodwill: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                net_debt: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                total_debt: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                revenue_per_employee: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                return_on_invested_capital: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                after_tax_margin: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                pre_tax_margin: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                gross_margin: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                gross_profit_margin_fy: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                oper_income_margin_fy: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                net_income_bef_disc_oper_margin_fy: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                free_cash_flow_margin_fy: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                free_cash_flow_margin_ttm: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                sell_gen_admin_exp_other_ratio_fy: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2
                },
                sell_gen_admin_exp_other_ratio_ttm: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2
                },
                research_and_dev_ratio_fy: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2
                },
                research_and_dev_ratio_ttm: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2
                },
                dividends_paid: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                dividend_yield_recent: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                basic_eps_net_income: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 2
                },
                net_income: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                gross_profit: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                gross_profit_fq: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                number_of_shareholders: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                float_shares_outstanding: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                total_shares_outstanding_fundamental: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                total_shares_outstanding: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                total_shares_diluted: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                total_value_traded: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                total_assets: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                total_current_assets: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                total_revenue: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                total_liabilities_fy: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                total_liabilities_fq: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                dividends_per_share_fq: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 2
                },
                earnings_per_share_diluted_ttm: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 2
                },
                enterprise_value_ebitda_ttm: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 2
                },
                enterprise_value_fq: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                price_revenue_ttm: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 2
                },
                number_of_employees: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                last_annual_eps: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 2
                },
                last_annual_revenue: {
                    control: "range",
                    formatter: A,
                    category: 2
                },
                CCI20: {
                    control: "condition",
                    conditionFields: [],
                    formatter: x,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["CCI20", "CCI20[1]"],
                    mutateDisplayValue: g.signalDisplayFunctions.processCCI20Signal,
                    signalComputation: g.signalComputationFunctions.computeCCI20Signal
                },
                "DonchCh20.Upper": {
                    control: "condition",
                    conditionFields: $().concat(["DonchCh20.Lower"]),
                    formatter: S,
                    category: 3
                },
                "DonchCh20.Lower": {
                    control: "condition",
                    conditionFields: $().concat(["DonchCh20.Upper"]),
                    formatter: S,
                    category: 3
                },
                HullMA9: {
                    control: "condition",
                    conditionFields: $().concat(U("HullMA9")),
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["Rec.HullMA9"],
                    mutateDisplayValue: g.signalDisplayFunctions.processSimpleSignal,
                    signalComputation: g.signalComputationFunctions.computeSimpleSignal
                },
                AO: {
                    control: "condition",
                    conditionFields: [],
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["AO", "AO[1]", "AO[2]"],
                    mutateDisplayValue: g.signalDisplayFunctions.processAOSignal,
                    signalComputation: g.signalComputationFunctions.computeAOSignal
                },
                "Pivot.M.Classic.Middle": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Classic.R1": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Classic.R2": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Classic.R3": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Classic.S1": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Classic.S2": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Classic.S3": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Fibonacci.Middle": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Fibonacci.R1": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Fibonacci.R2": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Fibonacci.R3": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Fibonacci.S1": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Fibonacci.S2": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Fibonacci.S3": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Camarilla.Middle": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Camarilla.R1": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Camarilla.R2": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Camarilla.R3": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Camarilla.S1": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Camarilla.S2": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Camarilla.S3": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Woodie.Middle": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Woodie.R1": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Woodie.R2": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Woodie.R3": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Woodie.S1": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Woodie.S2": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Woodie.S3": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Demark.Middle": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Demark.R1": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                "Pivot.M.Demark.S1": {
                    formatter: x,
                    forexFormatter: S,
                    category: 3,
                    align: "right"
                },
                candlestick: {
                    alias: "name",
                    control: "select",
                    category: 3,
                    sortableColumn: !1,
                    additionalColumns: M.candlestickRanges.map((t => t.key)),
                    mutateDisplayValue: (t, ...e) => {
                        const o = [];
                        for (let t = 0; t < M.candlestickRanges.length; ++t) e[t] && o.push(M.candlestickRanges[t]);
                        return o.length ? o.map((t => `<span class="tv-screener-table__pattern_icon apply-common-tooltip common-tooltip-fixed common-tooltip-below common-tooltip-html" data-color-theme="round-shadow" title='<div class="tv-screener-table__pattern_tooltip_container">${t.svg}<div>${t.name}</div></div>'>${t.svg}</span>`)).join(" ") : '<span class="tv-screener-table__pattern_empty">—</span>'
                    },
                    range: M.candlestickRanges.map((t => t.name)),
                    sourceRange: M.candlestickRanges,
                    customFilterCondition: t => {
                        Array.isArray(t) || (t = [t]);
                        return {
                            left: t.map((t => W(t, M.candlestickRanges))).join(","),
                            operation: "equal",
                            right: 1
                        }
                    }
                },
                update_mode: {
                    hiddenColumn: !1,
                    hideSetupColumn: !0,
                    skipField: !0
                },
                premarket_change: {
                    title: d.t(null, void 0, o(789133)),
                    shortTitle: d.t(null, void 0, o(670442)),
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: ["change"],
                    formatter: b,
                    filterFormatter: T,
                    category: 3,
                    highlightChange: !0
                },
                premarket_change_abs: {
                    title: d.t(null, void 0, o(733518)),
                    shortTitle: d.t(null, void 0, o(458249)),
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: ["change_abs"],
                    formatter: S,
                    forexFormatter: S,
                    category: 3,
                    highlightChange: !0
                },
                premarket_change_from_open: {
                    title: d.t(null, void 0, o(54353)),
                    shortTitle: d.t(null, void 0, o(387729)),
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 3,
                    highlightChange: !0
                },
                premarket_change_from_open_abs: {
                    title: d.t(null, void 0, o(44854)),
                    shortTitle: d.t(null, void 0, o(343269)),
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: S,
                    forexFormatter: S,
                    category: 3,
                    highlightChange: !0
                },
                premarket_close: {
                    title: d.t(null, void 0, o(910549)),
                    shortTitle: d.t(null, void 0, o(910549)),
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 1
                },
                premarket_gap: {
                    title: d.t(null, void 0, o(512025)),
                    shortTitle: d.t(null, void 0, o(512025)),
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: ["gap"],
                    formatter: b,
                    filterFormatter: T,
                    category: 3,
                    highlightChange: !0
                },
                premarket_high: {
                    title: d.t(null, void 0, o(39227)),
                    shortTitle: d.t(null, void 0, o(39227)),
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 1
                },
                premarket_low: {
                    title: d.t(null, void 0, o(476692)),
                    shortTitle: d.t(null, void 0, o(476692)),
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 1
                },
                premarket_open: {
                    title: d.t(null, void 0, o(620441)),
                    shortTitle: d.t(null, void 0, o(620441)),
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 1
                },
                premarket_volume: {
                    title: d.t(null, void 0, o(937601)),
                    shortTitle: d.t(null, void 0, o(937601)),
                    control: "range",
                    formatter: A,
                    category: 1
                },
                postmarket_change: {
                    title: d.t(null, void 0, o(497210)),
                    shortTitle: d.t(null, void 0, o(189949)),
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: ["change"],
                    formatter: b,
                    filterFormatter: T,
                    category: 3,
                    highlightChange: !0
                },
                postmarket_change_abs: {
                    title: d.t(null, void 0, o(944295)),
                    shortTitle: d.t(null, void 0, o(860405)),
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: ["change_abs"],
                    formatter: S,
                    forexFormatter: S,
                    category: 3,
                    highlightChange: !0
                },
                postmarket_close: {
                    title: d.t(null, void 0, o(150651)),
                    shortTitle: d.t(null, void 0, o(150651)),
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 1
                },
                postmarket_high: {
                    title: d.t(null, void 0, o(68005)),
                    shortTitle: d.t(null, void 0, o(68005)),
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 1
                },
                postmarket_low: {
                    title: d.t(null, void 0, o(330024)),
                    shortTitle: d.t(null, void 0, o(330024)),
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 1
                },
                postmarket_open: {
                    title: d.t(null, void 0, o(850615)),
                    shortTitle: d.t(null, void 0, o(850615)),
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 1
                },
                postmarket_volume: {
                    title: d.t(null, void 0, o(686354)),
                    shortTitle: d.t(null, void 0, o(686354)),
                    control: "range",
                    formatter: A,
                    category: 1
                },
                earnings_per_share_forecast_next_fq: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 2
                },
                earnings_per_share_fq: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 2
                },
                earnings_release_date: {
                    control: "select",
                    isSingle: !0,
                    category: 2,
                    sortable: !1,
                    useDefaultRange: !0,
                    defaultRange: B.filter((t => -1 !== R.indexOf(t.key))).map((t => t.name)),
                    sourceRange: B,
                    customFilterCondition: P("earnings_release_date"),
                    formatter: q
                },
                earnings_release_next_date: {
                    control: "select",
                    isSingle: !0,
                    category: 2,
                    sortable: !1,
                    useDefaultRange: !0,
                    defaultRange: B.filter((t => -1 !== V.indexOf(t.key))).map((t => t.name)),
                    sourceRange: B,
                    customFilterCondition: P("earnings_release_next_date"),
                    formatter: q
                },
                "Recommend.All": {
                    control: "select",
                    category: 3,
                    mutateDisplayValue: g.signalDisplayFunctions.processRecommendSignal,
                    signalComputation: g.signalComputationFunctions.computeRecommendSignal,
                    useDefaultRange: !0,
                    sortable: !1,
                    sortSelectedFirst: !1,
                    defaultRange: g.recommendsRange,
                    customFilterCondition: t => (0, g.generateRecommendsRequest)(t, "Recommend.All")
                },
                "Recommend.MA": {
                    control: "select",
                    category: 3,
                    mutateDisplayValue: g.signalDisplayFunctions.processRecommendSignal,
                    signalComputation: g.signalComputationFunctions.computeRecommendSignal,
                    useDefaultRange: !0,
                    sortable: !1,
                    sortSelectedFirst: !1,
                    defaultRange: g.recommendsRange,
                    customFilterCondition: t => (0, g.generateRecommendsRequest)(t, "Recommend.MA")
                },
                "Recommend.Other": {
                    control: "select",
                    category: 3,
                    mutateDisplayValue: g.signalDisplayFunctions.processRecommendSignal,
                    signalComputation: g.signalComputationFunctions.computeRecommendSignal,
                    useDefaultRange: !0,
                    sortable: !1,
                    sortSelectedFirst: !1,
                    defaultRange: g.recommendsRange,
                    customFilterCondition: t => (0, g.generateRecommendsRequest)(t, "Recommend.Other")
                },
                "Stoch.RSI.K": {
                    control: "condition",
                    conditionFields: ["Stoch.RSI.D"],
                    formatter: x,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["Rec.Stoch.RSI"],
                    mutateDisplayValue: g.signalDisplayFunctions.processSimpleSignal,
                    signalComputation: g.signalComputationFunctions.computeSimpleSignal
                },
                "Stoch.RSI.D": {
                    control: "condition",
                    conditionFields: ["Stoch.RSI.K"],
                    formatter: x,
                    category: 3
                },
                "W.R": {
                    control: "condition",
                    conditionFields: [],
                    formatter: x,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["Rec.WR"],
                    mutateDisplayValue: g.signalDisplayFunctions.processSimpleSignal,
                    signalComputation: g.signalComputationFunctions.computeSimpleSignal
                },
                ROC: {
                    control: "condition",
                    conditionFields: [],
                    formatter: x,
                    category: 3
                },
                BBPower: {
                    control: "condition",
                    conditionFields: [],
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["Rec.BBPower"],
                    mutateDisplayValue: g.signalDisplayFunctions.processSimpleSignal,
                    signalComputation: g.signalComputationFunctions.computeSimpleSignal
                },
                UO: {
                    control: "condition",
                    conditionFields: [],
                    formatter: x,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["Rec.UO"],
                    mutateDisplayValue: g.signalDisplayFunctions.processSimpleSignal,
                    signalComputation: g.signalComputationFunctions.computeSimpleSignal
                },
                VWAP: {
                    control: "condition",
                    conditionFields: $().concat(U()),
                    formatter: S,
                    category: 3
                },
                VWMA: {
                    control: "condition",
                    conditionFields: $().concat(U()),
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["Rec.VWMA"],
                    mutateDisplayValue: g.signalDisplayFunctions.processSimpleSignal,
                    signalComputation: g.signalComputationFunctions.computeSimpleSignal
                },
                ADR: {
                    control: "condition",
                    conditionFields: $(),
                    formatter: S,
                    category: 3
                },
                "Ichimoku.CLine": {
                    control: "condition",
                    conditionFields: $().concat(j("Ichimoku.CLine")),
                    formatter: S,
                    category: 3
                },
                "Ichimoku.BLine": {
                    control: "condition",
                    conditionFields: $().concat(j("Ichimoku.BLine")),
                    formatter: S,
                    category: 3,
                    displaySignal: !0,
                    additionalColumns: ["Rec.Ichimoku"],
                    mutateDisplayValue: g.signalDisplayFunctions.processSimpleSignal,
                    signalComputation: g.signalComputationFunctions.computeSimpleSignal
                },
                "Ichimoku.Lead1": {
                    control: "condition",
                    conditionFields: $().concat(j("Ichimoku.Lead1")),
                    formatter: S,
                    category: 3
                },
                "Ichimoku.Lead2": {
                    control: "condition",
                    conditionFields: $().concat(j("Ichimoku.Lead2")),
                    formatter: S,
                    category: 3
                },
                elements: {
                    hiddenOperators: K,
                    title: d.t(null, void 0, o(503474)),
                    shortTitle: d.t(null, void 0, o(503474)),
                    control: "condition",
                    conditionFields: [],
                    formatter: D,
                    category: 1
                },
                basic_elements: {
                    hiddenOperators: K,
                    title: d.t(null, void 0, o(426294)),
                    shortTitle: d.t(null, void 0, o(426294)),
                    control: "condition",
                    conditionFields: [],
                    formatter: D,
                    category: 1
                },
                dps_common_stock_prim_issue_fy: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: x,
                    filterFormatter: D,
                    category: 2
                },
                "24h_vol|5": {
                    category: 1,
                    formatter: A,
                    control: "range",
                    title: C.quoteFieldTitles["24h_vol|5"][0],
                    shortTitle: C.quoteFieldTitles["24h_vol|5"][1]
                },
                "24h_vol_change|5": {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    category: 1,
                    highlightChange: !0
                },
                currency: {
                    control: "select",
                    defaultRange: ["USD", "USDT", "USDC", "BUSD", "BTC", "ETH", "DAI", "BNB", "WBTC", "WETH"],
                    disabled: !0,
                    category: 1,
                    hideSetupColumn: !0
                },
                total_revenue_yoy_growth_fq: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                total_revenue_qoq_growth_fq: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                total_revenue_yoy_growth_fy: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                total_revenue_yoy_growth_ttm: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                gross_profit_yoy_growth_fq: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                gross_profit_qoq_growth_fq: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                gross_profit_yoy_growth_fy: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                gross_profit_yoy_growth_ttm: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                ebitda_yoy_growth_fq: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                ebitda_qoq_growth_fq: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                ebitda_yoy_growth_fy: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                ebitda_yoy_growth_ttm: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                net_income_yoy_growth_fq: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                net_income_qoq_growth_fq: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                net_income_yoy_growth_fy: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                net_income_yoy_growth_ttm: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                free_cash_flow_yoy_growth_fq: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                free_cash_flow_qoq_growth_fq: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                free_cash_flow_yoy_growth_fy: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                free_cash_flow_yoy_growth_ttm: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                earnings_per_share_diluted_yoy_growth_fq: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                earnings_per_share_diluted_qoq_growth_fq: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                earnings_per_share_diluted_yoy_growth_fy: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                earnings_per_share_diluted_yoy_growth_ttm: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                dps_common_stock_prim_issue_yoy_growth_fy: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                total_assets_yoy_growth_fq: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                total_assets_qoq_growth_fq: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                total_assets_yoy_growth_fy: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                total_debt_yoy_growth_fq: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                total_debt_qoq_growth_fq: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                total_debt_yoy_growth_fy: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                },
                cash_n_equivalents_fq: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: A,
                    category: 2
                },
                cash_n_equivalents_fy: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: A,
                    category: 2
                },
                cash_n_short_term_invest_fq: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: A,
                    category: 2
                },
                cash_n_short_term_invest_fy: {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    formatter: A,
                    category: 2
                }
            };

            function Z(t, e) {
                e = e.replace(/(\s+)/, "(<[^>]+>)*$1(<[^>]+>)*");
                const o = new RegExp("(" + e + ")", "gi");
                return t.replace(o, "<mark>$1</mark>")
            }

            function G(t, e) {
                for (let o = 0; o < t.length; ++o) {
                    const r = t[o];
                    r.left && Y[r.left] && (r.left = (0, m.getFieldNameWithResolution)(r.left, e))
                }
            }

            function J(t, e, o, r) {
                if (Array.isArray(e) && 0 === e.length) throw new Error("Empty value");
                let i = o && o[t] ? o[t] : e;
                if ("function" == typeof Y[t].customFilterCondition) {
                    const e = Y[t].customFilterCondition(i);
                    if (e) return Array.isArray(e) ? G(e, r) : ("candlestick" === t && (e.left = e.left.split(",").map((t => (0, m.getFieldNameWithResolution)(t, r))).join(",")), e.left && Y[e.left] && (e.left = (0, m.getFieldNameWithResolution)(e.left, r))), e.filterOR && (G(e.filter, r), G(e.filterOR, r)), e.filter2Flag && (G(e.filter, r), G(e.filter2AndPart, r)), e
                }
                if ("function" == typeof Y[t].mutateFilterConditionValue) {
                    const e = Y[t].mutateFilterConditionValue(i);
                    e && (i = e)
                }
                const n = Array.isArray(i);
                if (i && "object" == typeof i && !n) {
                    const e = {
                        left: t,
                        operation: i.operator
                    };
                    return i.value && (e.right = i.value), e
                }
                return {
                    left: (0, m.getFieldNameWithResolution)(t, r),
                    operation: n ? "in_range" : "equal",
                    right: n ? i.slice() : i
                }
            }

            function Q(t) {
                return Y[t] && Y[t].alias ? Y[t].alias : t
            }

            function tt(t, e, o, r) {
                if (E(e) && E(o)) throw new Error("Empty value");
                let i, n = {};
                switch (Y[t].control) {
                    case "range":
                        if (e && "object" == typeof e && !Array.isArray(e)) {
                            n = {
                                left: t,
                                operation: e.operator
                            }, e.value && (n.right = e.value);
                            break
                        }
                        var a = o ? Array.isArray(o[t]) && o[t].slice() || [] : e.slice();
                        n = {
                            left: (0,
                                m.getFieldNameWithResolution)(t, r),
                            operation: "in_range",
                            right: a
                        }, 2 === a.length && isNumber(a[0]) && isNumber(a[1]) && (-1e100 == +a[0] ? n = {
                            left: (0, m.getFieldNameWithResolution)(t, r),
                            operation: "eless",
                            right: a[1]
                        } : 1e100 == +a[1] && (n = {
                            left: (0, m.getFieldNameWithResolution)(t, r),
                            operation: "egreater",
                            right: a[0]
                        }));
                        break;
                    case "condition":
                        if (E(e.operator)) throw new Error("Empty value operator");
                        if (E(e.value)) throw new Error("Empty value");
                        i = o && o[t].value ? o[t].value : e.value, Y[i] && (i = (0, m.getFieldNameWithResolution)(i, r)), n = {
                            left: (0, m.getFieldNameWithResolution)(t, r),
                            operation: o && o[t].operator ? o[t].operator : e.operator,
                            right: i
                        };
                        break;
                    case "toggle":
                        n = {
                            left: (0, m.getFieldNameWithResolution)(t, r),
                            operation: o && o[t].operator ? o[t].operator : Y[t].filter.operator,
                            right: o && o[t].value ? o[t].value : Y[t].filter.value
                        };
                        break;
                    case "select":
                        n = J(t, e, o, r);
                        break;
                    default:
                        "select" === Y[t].filterCondition && (n = J(t, e, o, r))
                }
                return n
            }

            function et(t, e) {
                ! function(t, e) {
                    for (const o in t) t[o].disabled = 2 === t[o].category || e.includes(o)
                }(t, (e || []).concat("type", "industry", "market_cap_basic", "beta_1_year", "Value.Traded", "MoneyFlow", "ChaikinMoneyFlow", "elements", "basic_elements", "premarket_change", "premarket_change_abs", "premarket_change_from_open", "premarket_change_from_open_abs", "premarket_close", "premarket_gap", "premarket_high", "premarket_low", "premarket_open", "premarket_volume", "postmarket_change", "postmarket_change_abs", "postmarket_close", "postmarket_high", "postmarket_low", "postmarket_open", "postmarket_volume"))
            }

            function ot() {
                for (const t of Object.keys(C.quoteFieldTitles)) t in Y && (Y[t].title = Y[t].title || C.quoteFieldTitles[t][0], Y[t].shortTitle = Y[t].shortTitle || C.quoteFieldTitles[t][1])
            }

            function rt(t, e) {
                if (delete Y.name.control, ot(), "forex" === t && (Y.country.title = d.t(null, void 0, o(52980)), Y.country.shortTitle = d.t(null, void 0, o(52980)), delete Y.sector.control, Y.sector.title = d.t(null, void 0, o(393883)), Y.sector.shortTitle = d.t(null, void 0, o(393883)), Y.sector.resettableFilter = !1, Y.sector.mutateFilterConditionValue = t => !!t && (Array.isArray(t) ? t.map((t => z(t, O))) : z(t, O))), "stock" === t) {
                    Y.sector.title = d.t(null, void 0, o(931672)), Y.sector.shortTitle = d.t(null, void 0, o(931672)), Y.name.control = "select", Y.sector.control = "select", Y.sector.resettableFilter = !0, delete Y.sector.mutateFilterConditionValue;
                    for (const t in Y) Y[t].disabled = !1
                }
                "crypto" === t && (Y.sector.title = d.t(null, void 0, o(642605)), Y.sector.shortTitle = d.t(null, void 0, o(642605)), Y.sector.control = "select", Y.sector.resettableFilter = !0, delete Y.sector.mutateFilterConditionValue, Y.name.additionalColumns.push("exchange")), "crypto" !== t && (Y.name.additionalColumns = Y.name.additionalColumns.filter((t => "exchange" !== t))), "crypto_mkt" === t && (Y.sector.title = d.t(null, void 0, o(303297)), Y.sector.shortTitle = d.t(null, void 0, o(303297))), ["crypto", "crypto_mkt"].includes(t) && (Y.total_shares_outstanding.title = d.t(null, void 0, o(276554)), Y.total_shares_outstanding.shortTitle = d.t(null, void 0, o(365235))), "sector" === t && (Y.description.hiddenColumn = !1, Y.description.title = d.t(null, void 0, o(931672)), Y.description.shortTitle = d.t(null, void 0, o(931672)),
                        Y.description.mutateDisplayValue = X), "industry" === t && (Y.description.hiddenColumn = !1, Y.description.title = d.t(null, void 0, o(991746)), Y.description.shortTitle = d.t(null, void 0, o(991746)), Y.description.mutateDisplayValue = X, Y.elements.title = d.t(null, void 0, o(426294)), Y.elements.shortTitle = d.t(null, void 0, o(426294)), Y.sector.control = "select", Y.sector.resettableFilter = !0), ["sector", "industry"].includes(e) && (Y.sector.hiddenColumn = !0), "bonds" === t && (Y.close.title = d.t(null, {
                        context: "Bonds"
                    }, o(187806)), Y.close.shortTitle = d.t(null, {
                        context: "Bonds"
                    }, o(187806)), Y.coupon = {
                        title: d.t(null, void 0, o(598256)),
                        shortTitle: d.t(null, void 0, o(598256)),
                        align: "right",
                        formatter: b
                    }, Y.maturity_date = {
                        title: d.t(null, void 0, o(225741)),
                        shortTitle: d.t(null, void 0, o(225741)),
                        align: "right",
                        mutateDisplayValue: h.mutateSimpleDate
                    }), "continuous_futures" === t && (Y.expiration = {
                        title: d.t(null, void 0, o(6707)),
                        shortTitle: d.t(null, void 0, o(6707)),
                        align: "right",
                        mutateDisplayValue: h.mutateSimpleDate
                    }),
                    function(t, e) {
                        switch (t) {
                            case "stock":
                                ["bid", "ask", "currency"].forEach((t => {
                                    e[t].disabled = !0
                                }));
                                break;
                            case "forex":
                                et(e, ["exchange", "volume", "relative_volume_10d_calc", "relative_volume_intraday.5", "average_volume_10d_calc", "average_volume_30d_calc", "average_volume_60d_calc", "average_volume_90d_calc", "currency"]);
                                break;
                            case "futures":
                            case "cfd":
                                et(e, ["bid", "ask"]);
                                break;
                            case "crypto":
                                et(e, ["country", "sector"])
                        }
                    }(t, Y);
                ["market_cap_calc", "market_cap_diluted_calc", "total_shares_outstanding", "total_shares_diluted", "total_value_traded", "24h_vol|5", "24h_vol_change|5"].forEach((e => {
                    Y[e].disabled = !["crypto", "crypto_mkt"].includes(t)
                }));
                ["elements", "basic_elements"].forEach((e => {
                    Y[e].disabled = !["sector", "industry"].includes(t)
                }))
            }
            ot();
            const it = [{
                    key: "-1",
                    name: d.t(null, void 0, o(429623))
                }, {
                    key: "1",
                    name: d.t(null, void 0, o(247623))
                }],
                nt = [{
                    key: "-1",
                    name: '<div class="tv-screener-table__market-icon">' + o(578507) + "</div>"
                }, {
                    key: "1",
                    name: '<div class="tv-screener-table__market-icon">' + o(289523) + "</div>"
                }];

            function at() {
                const t = (t, e, o, r) => {
                    const i = W(t, B) || null,
                        n = i ? L(i) : null;
                    return n && n[0] <= 1e3 * e && 1e3 * e <= n[1] ? r : o
                };
                Y.earnings_release_next_time = {
                    isSingle: !0,
                    title: d.t(null, void 0, o(631976)),
                    tooltip: (e, o, r) => {
                        const i = Y.earnings_release_next_date.value,
                            n = t(i, e, o, r);
                        return n ? H((a = n).toString(), it) || a : void 0;
                        var a
                    },
                    shortTitle: d.t(null, void 0, o(631976)),
                    disableHeaderControl: !0,
                    align: "center",
                    additionalColumns: ["earnings_release_next_date", "earnings_release_time", "earnings_release_next_time"],
                    mutateDisplayValue: (e, o, r, i) => {
                        const n = Y.earnings_release_next_date.value,
                            a = t(n, o, r, i);
                        return a ? H((l = a).toString(), nt) || l : lt;
                        var l
                    },
                    category: 2
                }, Y.close.title = d.t(null, void 0, o(25684)), Y.close.shortTitle = d.t(null, void 0, o(25684)), Y.earnings_release_next_date = Object.assign(Y.earnings_release_next_date, {
                    title: d.t(null, void 0, o(676912)),
                    shortTitle: d.t(null, void 0, o(676912)),
                    noAny: !0,
                    additionalColumns: ["earnings_release_date", "earnings_release_next_date"],
                    defaultRange: B.map((t => t.name)),
                    resettableFilter: !1,
                    mutateDisplayValue: (t, e, o, r) => {
                        if (!o && e) return q.format(e);
                        if (r.value) {
                            const t = W(r.value, B);
                            if (t) {
                                const r = L(t);
                                if (r) {
                                    if (e && st(e, r)) return q.format(e);
                                    if (o && st(o, r)) return q.format(o)
                                }
                            }
                        }
                        return t
                    },
                    customFilterCondition: P()
                }), Y.earnings_release_next_calendar_date = {
                    title: d.t(null, void 0, o(744441)),
                    shortTitle: d.t(null, void 0, o(744441)),
                    formatter: q,
                    category: 1,
                    additionalColumns: ["earnings_release_next_date", "earnings_release_calendar_date"],
                    mutateDisplayValue: (t, e, o) => {
                        const r = W(Y.earnings_release_next_date.value, B);
                        if (r) {
                            const o = L(r);
                            if (o && st(e, o)) return t
                        }
                        return o ? q.format(o) : lt
                    }
                }, delete Y.earnings_per_share_forecast_next_fq.control, Y.earnings_per_share_forecast_next_fq.title = d.t(null, void 0, o(369665)), Y.earnings_per_share_forecast_next_fq.shortTitle = d.t(null, void 0, o(369665)), Y.earnings_per_share_forecast_next_fq.disableHeaderControl = !0, Y.earnings_per_share_forecast_next_fq.align = "right", Y.earnings_per_share_forecast_next_fq.additionalColumns = ["earnings_release_next_date", "earnings_per_share_forecast_fq"], Y.earnings_per_share_forecast_next_fq.mutateDisplayValue = (t, e, o) => {
                    const r = W(Y.earnings_release_next_date.value, B);
                    if (r) {
                        const o = L(r);
                        if (o && st(e, o)) return t
                    }
                    return o ? x.format(o) : lt
                }, Y.earnings_per_share_fq.title = d.t(null, void 0, o(282594)), Y.earnings_per_share_fq.shortTitle = d.t(null, void 0, o(282594)), Y.eps_surprise_fq = {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    title: C.quoteFieldTitles.eps_surprise_fq[0],
                    shortTitle: C.quoteFieldTitles.eps_surprise_fq[1],
                    formatter: x,
                    filterFormatter: D,
                    category: 2,
                    highlightChange: !0
                }, Y.eps_surprise_percent_fq = {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    title: C.quoteFieldTitles.eps_surprise_percent_fq[0],
                    shortTitle: C.quoteFieldTitles.eps_surprise_percent_fq[1],
                    formatter: b,
                    filterFormatter: T,
                    category: 2,
                    highlightChange: !0
                }, Y.revenue_fq = {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    title: d.t(null, void 0, o(390508)),
                    shortTitle: d.t(null, void 0, o(390508)),
                    formatter: A,
                    category: 1
                }, Y.revenue_forecast_next_fq = {
                    control: "condition",
                    hiddenOperators: K,
                    conditionFields: [],
                    title: d.t(null, void 0, o(929955)),
                    shortTitle: d.t(null, void 0, o(929955)),
                    formatter: A,
                    category: 1,
                    additionalColumns: ["earnings_release_next_date", "revenue_forecast_fq"],
                    mutateDisplayValue: (t, e, o) => {
                        const r = W(Y.earnings_release_next_date.value, B);
                        if (r) {
                            const o = L(r);
                            if (o && st(e, o)) return "0" === t ? lt : t
                        }
                        return o ? A.format(o) : lt
                    }
                }, gt()
            }
            const lt = '<span class="tv-screener-table__cell--color-normal">—</span>';

            function st(t, e) {
                return function(t, e) {
                    const o = e[0],
                        r = e[1];
                    return o <= t && t <= r
                }(1e3 * t, e)
            }

            function ct() {
                Y.earnings_per_share_fq.mutateDisplayValue = () => lt, Y.eps_surprise_fq.mutateDisplayValue = () => lt, Y.eps_surprise_percent_fq.mutateDisplayValue = () => lt, Y.revenue_fq.mutateDisplayValue = () => lt
            }
            const dt = t => {
                t.additionalColumns = ["earnings_release_next_date"], t.mutateDisplayValue = (t, e) => {
                    const o = W(Y.earnings_release_next_date.value, B);
                    if (o) {
                        const t = L(o);
                        if (t && st(e, t)) return lt
                    }
                    return t
                }
            };

            function gt() {
                dt(Y.earnings_per_share_fq), dt(Y.eps_surprise_fq), dt(Y.eps_surprise_percent_fq), dt(Y.revenue_fq)
            }

            function ut(t, e = "stock", o = !0) {
                if (!t) return null;
                if (["crypto_mkt"].includes(e) && t.cryptoFormatter) return t.cryptoFormatter;
                if (["forex", "crypto", "crypto_mkt", "cfd", "futures"].includes(e)) {
                    if (t.forexFilterFormatter) return t.forexFilterFormatter;
                    if (t.forexFormatter) return t.forexFormatter
                }
                return o && t.filterFormatter ? t.filterFormatter : t.formatter ? t.formatter : null
            }
            const mt = {};

            function ht(t, e, o, r) {
                const n = t + ";" + e + ";" + o + ";" + r;
                return mt[n] || (mt[n] = new i.PriceFormatter(t, e, o, r)), mt[n]
            }

            function pt(t) {
                return Y[t] && !Y[t].fixed && !Y[t].disabled && !Y[t].hideSetupColumn
            }

            function ft(t) {
                return t.filterTitle || t.title
            }
        },
        264996: (t, e, o) => {
            "use strict";
            o.d(e, {
                INTERVALS: () => n,
                DEFAULT_INTERVAL_ID: () => a,
                getIntervalById: () => l,
                getAlertsMessageText: () => s,
                getFieldNameWithResolution: () => c
            });
            var r = o(263605),
                i = o(777754);
            const n = [{
                    id: "1m",
                    title: i.t(null, {
                        plural: "{number} minutes",
                        count: 1
                    }, o(467151)).format({
                        number: 1
                    }),
                    shortTitle: `1<sup class="tv-screener-toolbar__interval-sup">${i.t(null,{context:"interval_short"},o(806791))}</sup>`,
                    value: 1
                }, {
                    id: "5m",
                    title: i.t(null, {
                        plural: "{number} minutes",
                        count: 5
                    }, o(467151)).format({
                        number: 5
                    }),
                    shortTitle: `5<sup class="tv-screener-toolbar__interval-sup">${i.t(null,{context:"interval_short"},o(806791))}</sup>`,
                    value: 5
                }, {
                    id: "15m",
                    title: i.t(null, {
                        plural: "{number} minutes",
                        count: 15
                    }, o(467151)).format({
                        number: 15
                    }),
                    shortTitle: `15<sup class="tv-screener-toolbar__interval-sup">${i.t(null,{context:"interval_short"},o(806791))}</sup>`,
                    value: 15
                }, {
                    id: "30m",
                    title: i.t(null, {
                        plural: "{number} minutes",
                        count: 30
                    }, o(467151)).format({
                        number: 30
                    }),
                    shortTitle: `30<sup class="tv-screener-toolbar__interval-sup">${i.t(null,{context:"interval_short"},o(806791))}</sup>`,
                    value: 30
                }, {
                    id: "1h",
                    title: i.t(null, {
                        plural: "{number} hours",
                        count: 1
                    }, o(224430)).format({
                        number: 1
                    }),
                    shortTitle: `1<sup class="tv-screener-toolbar__interval-sup">${i.t(null,{context:"interval_short"},o(113994))}</sup>`,
                    value: 60
                }, {
                    id: "2h",
                    title: i.t(null, {
                        plural: "{number} hours",
                        count: 2
                    }, o(224430)).format({
                        number: 2
                    }),
                    shortTitle: `2<sup class="tv-screener-toolbar__interval-sup">${i.t(null,{context:"interval_short"},o(113994))}</sup>`,
                    value: 120
                }, {
                    id: "4h",
                    title: i.t(null, {
                        plural: "{number} hours",
                        count: 4
                    }, o(224430)).format({
                        number: 4
                    }),
                    shortTitle: `4<sup class="tv-screener-toolbar__interval-sup">${i.t(null,{context:"interval_short"},o(113994))}</sup>`,
                    value: 240
                }, {
                    id: "1D",
                    title: i.t(null, {
                        plural: "{number} days",
                        count: 1
                    }, o(458609)).format({
                        number: 1
                    }),
                    shortTitle: `1<sup class="tv-screener-toolbar__interval-sup">${i.t(null,{context:"interval_short"},o(713395))}</sup>`,
                    value: null
                }, {
                    id: "1W",
                    title: i.t(null, {
                        plural: "{number} weeks",
                        count: 1
                    }, o(492679)).format({
                        number: 1
                    }),
                    shortTitle: `1<sup class="tv-screener-toolbar__interval-sup">${i.t(null,{context:"interval_short"},o(185521))}</sup>`,
                    value: "1W"
                }, {
                    id: "1M",
                    title: i.t(null, {
                        plural: "{number} months",
                        count: 1
                    }, o(551498)).format({
                        number: 1
                    }),
                    shortTitle: `1<sup class="tv-screener-toolbar__interval-sup">${i.t(null,{context:"interval_short"},o(137720))}</sup>`,
                    value: "1M"
                }],
                a = "1D";

            function l(t) {
                return n.find((e => e.id === t))
            }

            function s(t) {
                if (t === a) return;
                const e = l(t);
                return e ? e.title : void 0
            }

            function c(t, e) {
                if (t = (0, r.getAliasFiledName)(t),
                    /(change|change_abs).\d{1,3}/.test(t) || r.fields[t] && r.fields[t].useDefaultTimeIntervalFromFieldName) return t.replace(".", "|");
                if (!e || e === a || r.fields[t] && r.fields[t].useDefaultTimeInterval) return t;
                const o = l(e);
                if (o) {
                    const e = o.value || "";
                    if (r.fields[t] && r.fields[t].customResolutions) {
                        const o = r.fields[t].customResolutions;
                        if (e && -1 !== o.indexOf(e.toString())) return `${t}|${e}`
                    }
                }
                return t
            }
        },
        126561: (t, e, o) => {
            "use strict";
            o.d(e, {
                getCurrentTimezone: () => n,
                setCurrentTimezone: () => a,
                getTimezoneByMarket: () => l
            });
            var r = o(249219);
            let i = null;
            const n = () => i,
                a = t => {
                    t && t !== i && (i = t)
                };

            function l(t) {
                const e = (0, r.getMarketsByScreenerType)("stock")[t];
                return e ? e.timezone : null
            }
        },
        811478: (t, e, o) => {
            "use strict";
            o.d(e, {
                TrailingZerosPriceFormatter: () => n
            });
            var r = o(831471);
            const i = new RegExp(/0+$/);
            class n extends r.PriceFormatter {
                constructor(t, e, o, r) {
                    if (void 0 !== o) throw new Error("Fractional should not be used with this formatter");
                    super(t, e, o, r)
                }
                format(t, e, o) {
                    const n = t.toString();
                    if (-1 !== n.indexOf("e-")) {
                        const t = n.split("e-"),
                            e = Number(t[0]),
                            o = Number(t[1]);
                        return this._fractionalLength && o > this._fractionalLength + 1 ? Number(0).toFixed(2) : `${e<0?"−":""}0.${"0".repeat(o-1)}${Math.abs(Math.round(e))}`
                    } {
                        let n = super.format(t, e, o);
                        n = n.replace(i, "");
                        const [a, l] = n.split(r.formatterOptions.decimalSign);
                        return l && l.length >= 2 ? n : `${a}${r.formatterOptions.decimalSign}${((l||"")+"00").substring(0,2)}`
                    }
                }
            }
        },
        289523: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" d="M8.36 3.608a6.002 6.002 0 1 0 2.755 11.672 6.01 6.01 0 0 0 4.277-4.64 5 5 0 1 1-7.03-7.03z"/></svg>'
        },
        238739: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" d="M3.5 10.5h2v5h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M4.5 8.5v2m0 5v2"/><path fill="currentColor" d="M14 8h3v6h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M15.5 6.5v9m-7-11h4m-2-2v4"/></g></svg>'
        },
        554794: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" d="M14.5 4.5h2v6h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M15.5 2.5v2m0 6v2"/><path fill="currentColor" d="M3 4h3v6H3z"/><path stroke="currentColor" stroke-linecap="square" d="M4.5 2.5v9m4 4h4m-2-2v4"/></g></svg>'
        },
        48632: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" d="M14.5 10.5v7m-1-7h2m-5 1v-4m-3 2v-4m-3 2v-4"/></svg>'
        },
        502506: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" d="M14.5 2.5v7m-1 0h2m-5 2v-4m-3 7v-4m-3 6v-4"/></svg>'
        },
        162088: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" d="M10.5 6.5v7m-2-4h4"/></svg>'
        },
        601285: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M15 4h3v12h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M16.5 17.5v-15"/><path stroke="currentColor" d="M10.5 7.5h2v4h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M11.5 5.5v2m0 4v2m-4 2v-4m-3 5v-4m-3 5v-4"/></g></svg>'
        },
        383425: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M9 8h3v6H9z"/><path stroke="currentColor" stroke-linecap="square" d="M10.5 6.5v9"/><path stroke="currentColor" d="M14.5 4.5h2v11h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M15.5 2.5v2m-9 4v-4m-3 3v-4m12 12v2"/></g></svg>'
        },
        829016: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" d="M6.5 6.5h2v5h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M7.5 4.5v2m0 5v2"/><path fill="currentColor" d="M16 5h3v6h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M17.5 3.5v9"/><path fill="currentColor" d="M11 3h3v2h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M12.5 2.5v3m-8 11v-4m-2 6v-4"/></g></svg>'
        },
        14723: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-linecap="square" d="M11.5 9.5v8m-4-8v-4m8 4v-4m-11 2v-4"/><path fill="currentColor" d="M10 9h3v4h-3z"/></g></svg>'
        },
        693505: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-linecap="square" d="M11.5 4.5v10m-4-3v-4m-3 7v-4"/><path fill="currentColor" d="M10 4h3v3h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M15.5 11.5v-4"/></g></svg>'
        },
        159402: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" d="M10.5 5.5h2v7h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M11.5 3.5v2m0 7v2"/><path fill="currentColor" d="M15 5h3v3h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M16.5 3.5v6.07m-9 3.93v-4m-3 6v-4m-3 6v-4"/></g></svg>'
        },
        364697: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M10 7h3v8h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M11.5 5.5v11"/><path stroke="currentColor" d="M15.5 7.5h2v3h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M16.5 5.5v2m0 3v2m-9-2v-4m-3 2v-4m-3 2v-4"/></g></svg>'
        },
        110416: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd" stroke="currentColor"><path stroke-linecap="square" d="M11.5 6.5v7m-4 0v-4m8 4v-4m-11 2v-4"/><path d="M10.5 13.5h2v3h-2z"/></g></svg>'
        },
        623788: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M15 9h3v4h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M11.5 9.5v-2m0-5v2m5 3v7m0-5v2"/><path stroke="currentColor" d="M10.5 4.5h2v3h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M7.5 13.5v-2m0-5v2"/><path stroke="currentColor" d="M6.5 8.5h2v3h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M3.5 17.5v-2m0-5v2"/><path stroke="currentColor" d="M2.5 12.5h2v3h-2z"/></g></svg>'
        },
        492619: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M15 7h3v4h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M11.5 17.5v-2m0-5v2m5-7v7m0-3v2"/><path stroke="currentColor" d="M10.5 12.5h2v3h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M7.5 13.5v-2m0-5v2"/><path stroke="currentColor" d="M6.5 8.5h2v3h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M3.5 9.5v-2m0-5v2"/><path stroke="currentColor" d="M2.5 4.5h2v3h-2z"/></g></svg>'
        },
        11951: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-linecap="square" d="M9.5 9.5v8m-4-9v-4m-3 2v-4"/><path fill="currentColor" d="M8 7h3v5H8z"/><path stroke="currentColor" stroke-linecap="square" d="M14.5 11.5v4"/><path stroke="currentColor" d="M13.5 7.5h2v4h-2z"/></g></svg>'
        },
        630410: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-linecap="square" d="M9.5 11.5v2m-4 2v-4m-3 6v-4"/><path stroke="currentColor" d="M8.5 7.5h2v4h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M14.5 2.5v5"/><path fill="currentColor" d="M13 7h3v5h-3z"/></g></svg>'
        },
        672687: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M13 4h3v12h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M10.5 11.5v-4m-3 2v-4m-3 2v-4"/></g></svg>'
        },
        651316: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd" stroke="currentColor"><path d="M13.5 4.5h2v11h-2z"/><path stroke-linecap="square" d="M10.5 12.5v-4m-3 6v-4m-3 6v-4"/></g></svg>'
        },
        601354: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-linecap="square" d="M4.5 2.5v11"/><path fill="currentColor" d="M3 4h3v8H3z"/><path stroke="currentColor" stroke-linecap="square" d="M14.5 4.5v2m0 7v2"/><path stroke="currentColor" d="M13.5 6.5h2v7h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M9.5 12.5v5"/><path fill="currentColor" d="M8 14h3v2H8z"/></g></svg>'
        },
        829605: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd" stroke="currentColor"><path d="M10.5 9.5h2v3h-2z"/><path stroke-linecap="square" d="M11.5 8.5v-6m-4 13v-4m8 4v-4m-11 6v-4"/></g></svg>'
        },
        488287: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-linecap="square" d="M10.5 3.5v13"/><path fill="currentColor" d="M9 8h3v4H9z"/></g></svg>'
        },
        636627: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd" stroke="currentColor"><path stroke-linecap="square" d="M10.5 3.5v5m0 3v5"/><path d="M9.5 8.5h2v3h-2z"/></g></svg>'
        },
        775110: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M15 12h3v4h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M16.5 10.5v7"/><path fill="currentColor" d="M11 8h3v4h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M12.5 6.5v7"/><path fill="currentColor" d="M7 4h3v4H7z"/><path stroke="currentColor" stroke-linecap="square" d="M8.5 2.5v7m-4 1v-4m-2 6v-4"/></g></svg>'
        },
        923549: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M15 4h3v2h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M11.5 11.5v-2m0-7v2m5-2v5"/><path stroke="currentColor" d="M10.5 4.5h2v5h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M7.5 14.5v-2m0-7v2"/><path stroke="currentColor" d="M6.5 7.5h2v5h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M3.5 17.5v-2m0-7v2"/><path stroke="currentColor" d="M2.5 10.5h2v5h-2z"/></g></svg>'
        },
        837553: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" d="M14.5 8.5h4m-2-2v4m-7-6h4m-2-2v4m-6 2h4m-2-2v4m-3 5v-4m-2 6v-4"/></svg>'
        },
        249478: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" d="M14.5 11.5h4m-2-2v4m-7 2h4m-2-2v4m-6-6h4m-2-2v4m-3-5v-4m-2 2v-4"/></svg>'
        },
        578507: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="8.5" cy="8.5" r="3"/><path stroke-linecap="square" d="M13.5 8.5h3M.5 8.5h3M8.5 3.5v-3M13 4l2-2M2 15l2-2"/><path stroke-linecap="square" stroke-linejoin="bevel" d="M2 2l2 2"/><path stroke-linecap="square" d="M13 13l2 2M8.5 16.5v-3"/></g></svg>'
        }
    }
]);
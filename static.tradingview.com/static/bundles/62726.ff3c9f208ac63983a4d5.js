(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [62726, 47365], {
        528474: (e, t, i) => {
            "use strict";
            i.d(t, {
                blendColors: () => n,
                generateBlendColors: () => l
            });
            var s = i(827147),
                r = i(822914),
                o = i(724377);
            const n = (e, t) => (0, o.rgbaToString)((0, o.blendRgba)((0, o.parseRgba)(e), (0, o.parseRgba)(t)));

            function l(e, t) {
                const i = (0, r.default)(e),
                    o = Object.keys(i);
                for (const r of o) {
                    const o = e[r];
                    (0, s.default)(o) ? i[r] = n(o, t): i[r] = l(o, t)
                }
                return i
            }
        },
        675128: (e, t, i) => {
            "use strict";

            function s(e) {
                let t = null;
                return () => (null === t && (t = e()), t)
            }
            i.d(t, {
                lazyValue: () => s
            })
        },
        471862: (e, t, i) => {
            "use strict";
            i.d(t, {
                FinancialsWebviewController: () => u
            });
            var s = i(612484),
                r = i(675128),
                o = i(611998),
                n = i(736844);
            const l = new Set(["market_cap_basic", "dividends_yield", "price_earnings_ttm", "earnings_per_share_basic_ttm", "currency_code", "fundamental_currency_code", "total_revenue_fy_h", "total_revenue_fq_h", "total_revenue_fh_h", "net_income_fy_h", "net_income_fq_h", "net_income_fh_h", "total_assets_fy_h", "total_assets_fq_h", "total_assets_fh_h", "total_liabilities_fy_h", "total_liabilities_fq_h", "total_liabilities_fh_h", "cash_f_operating_activities_fy_h", "cash_f_operating_activities_fq_h", "cash_f_operating_activities_fh_h", "cash_f_investing_activities_fy_h", "cash_f_investing_activities_fq_h", "cash_f_investing_activities_fh_h", "cash_f_financing_activities_fy_h", "cash_f_financing_activities_fq_h", "cash_f_financing_activities_fh_h", "fiscal_period_fy_h", "fiscal_period_fq_h", "fiscal_period_fh_h", "earnings_release_date_fq_h", "earnings_release_date_fy_h", "earnings_release_date_fh_h", "earnings_release_next_date_fq", "earnings_release_next_date_fy", "earnings_release_next_date_fh", "earnings_release_next_time", "earnings_release_next_date", "is_next_earnings_release_date_estimated", "earnings_per_share_forecast_next_fq", "earnings_per_share_forecast_next_fy", "earnings_per_share_forecast_next_fh", "earnings_per_share_forecast_fq_h", "earnings_per_share_forecast_fy_h", "earnings_per_share_forecast_fh_h", "earnings_per_share_fq_h", "earnings_per_share_fy_h", "earnings_per_share_fh_h", "earnings_fiscal_period_fq_h", "earnings_fiscal_period_fy_h", "earnings_fiscal_period_fh_h", "next_earnings_fiscal_period_fq", "next_earnings_fiscal_period_fy", "next_earnings_fiscal_period_fh", "revenue_fq_h", "revenue_fy_h", "revenue_fh_h", "revenue_forecast_fq_h", "revenue_forecast_fy_h", "revenue_forecast_fh_h", "revenue_forecast_next_fq", "revenue_forecast_next_fy", "revenue_forecast_next_fh", "dividend_payout_ratio_ttm", "dividends_yield_current", "dividend_ex_date_upcoming", "dividend_amount_upcoming", "dividend_amount_recent", "dividend_ex_date_recent", "dividend_amount_h"]),
                a = (0, r.lazyValue)((() => new o.QuoteSessionSnapshoter({
                    name: "financials-webview-quotes",
                    fields: [...l]
                })));
            let h;
            class u extends s.WebviewControllerBase {
                open(e) {
                    const t = this._createOpenRequest(s.WebviewPageName.Financials, e);
                    a().getSnapshot(t.symbol(), l);
                    t.execute().ChartQuoteSnapshotProvider = {
                        getQuoteSnapshot() {
                            var e;
                            const i = n.QUOTE_FIELDS_CACHE.get(t.symbol());
                            return null !== (e = null == i ? void 0 : i.values) && void 0 !== e ? e : {}
                        }
                    }
                }
                static getInstance() {
                    return h || (h = new u), h
                }
            }
        },
        888194: (e, t, i) => {
            "use strict";
            i.d(t, {
                openFinancialsWebview: () => r
            });
            var s = i(471862);

            function r(e) {
                s.FinancialsWebviewController.getInstance().open(e)
            }
        },
        497763: (e, t, i) => {
            "use strict";
            i.d(t, {
                SERIES_COLORS: () => r,
                getItemByIndex: () => o,
                getColorByIndex: () => n
            });
            var s = i(314967);
            const r = [s.colorsPalette["color-tv-blue-a200"], s.colorsPalette["color-iguana-green-300"], s.colorsPalette["color-tan-orange-500"], s.colorsPalette["color-sky-blue-400"], s.colorsPalette["color-ripe-red-a200"], s.colorsPalette["color-deep-blue-a100"], s.colorsPalette["color-banana-yellow-800"], s.colorsPalette["color-grapes-purple-a200"], s.colorsPalette["color-minty-green-300"], s.colorsPalette["color-berry-pink-300"], s.colorsPalette["color-tv-blue-a100"], s.colorsPalette["color-tan-orange-a200"], s.colorsPalette["color-iguana-green-400"], s.colorsPalette["color-ripe-red-400"], s.colorsPalette["color-sky-blue-300"], s.colorsPalette["color-banana-yellow-600"], s.colorsPalette["color-berry-pink-a200"], s.colorsPalette["color-tv-blue-200"], s.colorsPalette["color-banana-yellow-900"]];

            function o(e, t) {
                const i = e[t % e.length];
                return i || e[0]
            }

            function n(e, t = r) {
                return o(t, e)
            }
        },
        530254: (e, t, i) => {
            "use strict";
            i.d(t, {
                format: () => u,
                getMetricPrefix: () => d,
                getFractionalDigitsNumber: () => _
            });
            var s = i(650151),
                r = i(960521),
                o = i(951512),
                n = i(738023),
                l = i(768038);
            const a = new Map;
            let h = null;

            function u(e, t, i, s = 2) {
                if (Math.abs(e) >= 1e100) return "—";
                if ("volume" === t) return function(e) {
                    h || (h = new n.VolumeFormatter);
                    return h.format(e)
                }(e);
                if ("percents" === t) return (0, l.forceLTRStrSsr)(c(e, s) + "%");
                const r = i || d(e);
                return (0, l.forceLTRStrSsr)(function(e, t, i) {
                    return `${c(e/t.multiplier,i)}${t.symbol}`
                }(e, r, s))
            }

            function d(e) {
                const t = Math.abs(e);
                return t < 995 ? {
                    symbol: "",
                    multiplier: 1
                } : t < 999995 ? {
                    symbol: "K",
                    multiplier: 1e3
                } : t < 999999995 ? {
                    symbol: "M",
                    multiplier: 1e6
                } : t < 999999999995 ? {
                    symbol: "B",
                    multiplier: 1e9
                } : {
                    symbol: "T",
                    multiplier: 1e12
                }
            }

            function c(e, t) {
                let i = "";
                return e < 0 && (i = "−", e = -e), i + function(e) {
                    if (a.has(e)) return (0, s.ensureDefined)(a.get(e));
                    const t = new o.NumericFormatter(e);
                    return a.set(e, t), t
                }(t).format(e)
            }

            function _(e) {
                const t = (0, r.Big)(e);
                return Math.max(t.c.length - t.e - 1, 0)
            }
        },
        436901: (e, t, i) => {
            "use strict";
            i.d(t, {
                DEFAULT_MAX_DATA_ARRAY_LENGTH: () => s,
                FULL_MAX_DATA_ARRAY_LENGTH: () => r
            });
            const s = 5,
                r = 7
        },
        610203: (e, t, i) => {
            "use strict";
            i.d(t, {
                PeriodId: () => s,
                convertFrequencyToPeriod: () => u,
                PAST_PERFORMANCE_SET: () => d,
                FINANCIALS_SETS: () => c,
                findFinancialsSetIndex: () => _,
                getDataFromQuotes: () => m,
                getPeriodData: () => v,
                getChartSeriesArray: () => y,
                generateTooltipValues: () => f,
                getPeriodsDataFromQuotes: () => g,
                getFinancialsDataFromQuotes: () => b,
                isQuoteValuesNull: () => S
            });
            var s, r = i(650151),
                o = i(777754),
                n = i(497763),
                l = i(530254),
                a = i(499791),
                h = i(436901);

            function u(e) {
                return e && 2 === e ? s.HalfYear : s.Quarter
            }! function(e) {
                e.Year = "FY", e.Quarter = "FQ", e.HalfYear = "FH"
            }(s || (s = {}));
            const d = () => ({
                    id: "income statements",
                    title: o.t(null, void 0, i(273266)),
                    chartType: "compare",
                    marginTitle: o.t(null, void 0, i(404871)),
                    fields: ["total_revenue", "net_income"]
                }),
                c = () => [{
                    id: "income statements",
                    title: o.t(null, void 0, i(506823)),
                    chartType: "compare",
                    marginTitle: o.t(null, void 0, i(404871)),
                    fields: ["total_revenue", "net_income"]
                }, {
                    id: "balance sheet",
                    title: o.t(null, void 0, i(730737)),
                    chartType: "compare",
                    marginTitle: o.t(null, void 0, i(560048)),
                    fields: ["total_assets", "total_liabilities"]
                }, {
                    id: "cash flow",
                    title: o.t(null, void 0, i(822755)),
                    chartType: "lines",
                    fields: ["cash_f_operating_activities", "cash_f_investing_activities", "cash_f_financing_activities"]
                }];

            function _(e) {
                return c().findIndex((t => t.id === e)) || 0
            }

            function p(e) {
                return {
                    total_revenue: o.t(null, void 0, i(259285)),
                    net_income: o.t(null, void 0, i(485672)),
                    total_assets: o.t(null, void 0, i(697554)),
                    total_liabilities: o.t(null, void 0, i(475385)),
                    cash_f_operating_activities: o.t(null, void 0, i(404621)),
                    cash_f_investing_activities: o.t(null, void 0, i(418959)),
                    cash_f_financing_activities: o.t(null, void 0, i(517831)),
                    fiscal_period: "Fiscal Period"
                }[e]
            }

            function m(e, t, i, s = h.DEFAULT_MAX_DATA_ARRAY_LENGTH) {
                const r = i[t];
                if (!r) return [];
                return r[e].slice(0, s).reverse()
            }

            function v(e, t, i = h.DEFAULT_MAX_DATA_ARRAY_LENGTH) {
                const s = e[t];
                if (s) return s.slice(0, i).reverse()
            }

            function y(e, t, i, s = 0, o) {
                switch (e.chartType) {
                    case "compare":
                        const l = e.fields.map(((e, l) => ({
                                type: "bar",
                                name: p((0, r.ensureDefined)(e)),
                                valueType: "numbers",
                                values: (0, r.ensureDefined)(m((0, r.ensureDefined)(e), t, (0, r.ensureDefined)(i))),
                                defaultColor: (0, n.getColorByIndex)(l + s, o),
                                showInLegend: !0,
                                buildTooltip: f
                            }))),
                            a = l[0].values.map(((e, t) => 0 === e ? 0 : l[1].values[t] / e * 100));
                        return l.push({
                            type: "line",
                            name: (0, r.ensureDefined)(e.marginTitle),
                            valueType: "percents",
                            values: a,
                            defaultColor: (0, n.getColorByIndex)(e.fields.length + s),
                            showInLegend: !0,
                            buildTooltip: f
                        }), l;
                    case "lines":
                        return e.fields.map(((e, o) => ({
                            type: "line",
                            name: p((0, r.ensureDefined)(e)),
                            valueType: "numbers",
                            values: (0, r.ensureDefined)(m((0, r.ensureDefined)(e), t, (0, r.ensureDefined)(i))),
                            defaultColor: (0, n.getColorByIndex)(o + s),
                            showInLegend: !0,
                            buildTooltip: f
                        })));
                    default:
                        return []
                }
            }

            function f(e, t, i, s, o = !0) {
                const n = e.values[i];
                if (null === n) return null;
                const h = (0, l.format)(n, e.valueType);
                return [{
                    title: o ? (0, a.capitalizeFirstLetter)(e.name.toLowerCase()) : e.name,
                    color: null != s ? s : (0, r.ensureDefined)(e.defaultColor),
                    value: h
                }]
            }

            function g(e) {
                const {
                    fiscal_period_fy_h: t,
                    fiscal_period_fq_h: i,
                    fiscal_period_fh_h: r
                } = e;
                if (t || i || r) return {
                    [s.Year]: t,
                    [s.Quarter]: i,
                    [s.HalfYear]: r
                }
            }

            function b(e) {
                const {
                    total_revenue_fy_h: t,
                    total_revenue_fq_h: i,
                    total_revenue_fh_h: r,
                    net_income_fy_h: o,
                    net_income_fq_h: n,
                    net_income_fh_h: l,
                    total_assets_fy_h: a,
                    total_assets_fq_h: h,
                    total_assets_fh_h: u,
                    total_liabilities_fy_h: d,
                    total_liabilities_fq_h: c,
                    total_liabilities_fh_h: _,
                    cash_f_operating_activities_fy_h: p,
                    cash_f_operating_activities_fq_h: m,
                    cash_f_operating_activities_fh_h: v,
                    cash_f_investing_activities_fy_h: y,
                    cash_f_investing_activities_fq_h: f,
                    cash_f_investing_activities_fh_h: b,
                    cash_f_financing_activities_fy_h: w,
                    cash_f_financing_activities_fq_h: x,
                    cash_f_financing_activities_fh_h: C,
                    fiscal_period_fy_h: P,
                    fiscal_period_fq_h: I,
                    fiscal_period_fh_h: T
                } = e, D = g(e);
                if (D) {
                    const {
                        [s.Year]: e, [s.Quarter]: g, [s.HalfYear]: L
                    } = D;
                    return {
                        [s.Year]: !e || S(t) ? void 0 : {
                            total_revenue: t,
                            net_income: o,
                            total_assets: a,
                            total_liabilities: d,
                            cash_f_operating_activities: p,
                            cash_f_investing_activities: y,
                            cash_f_financing_activities: w,
                            fiscal_period: P
                        },
                        [s.Quarter]: !g || S(i) ? void 0 : {
                            total_revenue: i,
                            net_income: n,
                            total_assets: h,
                            total_liabilities: c,
                            cash_f_operating_activities: m,
                            cash_f_investing_activities: f,
                            cash_f_financing_activities: x,
                            fiscal_period: I
                        },
                        [s.HalfYear]: L ? {
                            total_revenue: r,
                            net_income: l,
                            total_assets: u,
                            total_liabilities: _,
                            cash_f_operating_activities: v,
                            cash_f_investing_activities: b,
                            cash_f_financing_activities: C,
                            fiscal_period: T
                        } : void 0
                    }
                }
            }

            function S(e) {
                return !e || e.every((e => null === e))
            }
        },
        988534: (e, t, i) => {
            "use strict";
            i.d(t, {
                FinancialsDialogController: () => o
            });
            var s = i(633457);
            let r;
            class o extends s.DialogRenderer {
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
                static getInstance() {
                    return r || (r = new o), r
                }
                _load(e) {
                    return Promise.all([i.e(68716), i.e(11339), i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(7624), i.e(59333), i.e(12275), i.e(33335), i.e(91901), i.e(96972), i.e(83772), i.e(75398), i.e(71140), i.e(36037), i.e(63737), i.e(36720), i.e(1428), i.e(1011), i.e(52701), i.e(48484), i.e(47507), i.e(54063), i.e(82098), i.e(95248), i.e(62839), i.e(56034), i.e(56652), i.e(8009), i.e(78122), i.e(52196), i.e(83593), i.e(52860), i.e(149), i.e(87495), i.e(67512), i.e(43188), i.e(79324), i.e(77412), i.e(68001), i.e(29388), i.e(33891), i.e(379), i.e(75514), i.e(90051), i.e(38663), i.e(87972), i.e(76781), i.e(52769), i.e(56708), i.e(3404), i.e(85234), i.e(26217), i.e(72826), i.e(24878)]).then(i.bind(i, 571592)).then((t => {
                        var i, s;
                        return null === (i = this._dialog) || void 0 === i || i.hide(), null === (s = this._dialog) || void 0 === s || s.visible().unsubscribe(this._subscribe), this._dialog = new t.FinancialsDialogRenderer(e), this._dialog.visible().subscribe(this._subscribe), this._dialog
                    }))
                }
            }
        },
        876322: (e, t, i) => {
            "use strict";
            i.d(t, {
                showFinancialsDialog: () => r
            });
            var s = i(988534);

            function r(e) {
                s.FinancialsDialogController.getInstance().show(e)
            }
        },
        199687: (e, t, i) => {
            "use strict";
            i.d(t, {
                PageId: () => s,
                getFinancialsPages: () => n,
                getStatementsCategories: () => l,
                PERIODS: () => a,
                DEFAULT_PERIOD: () => h
            });
            var s, r = i(777754),
                o = i(610203);

            function n() {
                return [{
                    id: s.Overview,
                    children: r.t(null, void 0, i(37260))
                }, {
                    id: s.Statements,
                    children: r.t(null, void 0, i(861589))
                }, {
                    id: s.Statistics,
                    children: r.t(null, void 0, i(751706))
                }, {
                    id: s.Dividends,
                    children: r.t(null, void 0, i(634135))
                }, {
                    id: s.Earnings,
                    children: r.t(null, void 0, i(783851))
                }]
            }

            function l() {
                return [{
                    id: "income statements",
                    children: r.t(null, void 0, i(676712))
                }, {
                    id: "balance sheet",
                    children: r.t(null, void 0, i(342134))
                }, {
                    id: "cash flow",
                    children: r.t(null, void 0, i(638237))
                }]
            }! function(e) {
                e.Overview = "overview", e.Statements = "statements", e.Statistics = "statistics", e.Dividends = "dividends", e.Earnings = "earnings"
            }(s || (s = {}));
            const a = (e = o.PeriodId.Quarter) => [{
                    id: o.PeriodId.Year,
                    title: r.t(null, void 0, i(34314))
                }, {
                    id: e,
                    title: e === o.PeriodId.HalfYear ? r.t(null, void 0, i(512421)) : r.t(null, void 0, i(908831))
                }],
                h = e => a(e)[1].id
        },
        131726: e => {
            e.exports = {
                content: "content-meCuRfZr",
                titleWrapper: "titleWrapper-meCuRfZr",
                title: "title-meCuRfZr",
                subtitle: "subtitle-meCuRfZr",
                text: "text-meCuRfZr",
                icon: "icon-meCuRfZr",
                group: "group-meCuRfZr",
                groupIcon: "groupIcon-meCuRfZr",
                beforeMarketOpen: "beforeMarketOpen-meCuRfZr",
                afterMarketClose: "afterMarketClose-meCuRfZr",
                groupTitle: "groupTitle-meCuRfZr",
                groupRow: "groupRow-meCuRfZr",
                groupCell: "groupCell-meCuRfZr",
                link: "link-meCuRfZr",
                mob: "mob-meCuRfZr",
                mini: "mini-meCuRfZr",
                newsContent: "newsContent-meCuRfZr"
            }
        },
        366276: (e, t, i) => {
            "use strict";
            i.d(t, {
                CLIENT_TO_SERVER_FIELD_MAPPING: () => s,
                mapServerQuoteValuesToClient: () => o
            });
            const s = new Map([
                    ["change", "ch"],
                    ["last_price", "lp"],
                    ["change_percent", "chp"]
                ]),
                r = new Map([
                    ["ch", "change"],
                    ["lp", "last_price"],
                    ["chp", "change_percent"]
                ]);

            function o(e) {
                var t;
                const i = {};
                for (const [s, o] of Object.entries(e)) {
                    i[null !== (t = r.get(s)) && void 0 !== t ? t : s] = o
                }
                return i
            }
        },
        611998: (e, t, i) => {
            "use strict";
            i.d(t, {
                QuoteSessionSnapshoter: () => d
            });
            var s = i(801669),
                r = i(869403),
                o = i.n(r),
                n = i(462282),
                l = i(777491),
                a = i(736844),
                h = i(461909),
                u = i(366276);
            class d {
                constructor(e) {
                    if (this._onSymbolData = new(o()), this._incomplete = new Set, this._connected = !1, this._batcher = null, this._handler = e => {
                            switch (e.method) {
                                case "connected":
                                    this._connected || (this._connected = !0, this._handleConnected());
                                    break;
                                case "quote_symbol_data":
                                    this._connected && this._handleSymbolData(e.params[0]);
                                    break;
                                case "quote_completed":
                                    this._connected && this._handleCompleteData(e.params[0]);
                                    break;
                                case "disconnected":
                                    this._connected && (this._connected = !1, this._batcher = null)
                            }
                        }, 0 === e.fields.length) throw new Error('Support for empty "fields" array is not implemented');
                    const {
                        provider: t = s.QuoteSession
                    } = e;
                    this._fields = new Set(e.fields), this._session = new t(window.ChartApiInstance, ["snapshoter", e.name, (0, l.randomHash)()].filter(Boolean).join("_")), this._session.connect(this._handler)
                }
                getSnapshotSync(e, t) {
                    const i = d.cache.get(e);
                    return i && this._isSnapshotReady(i, t) ? i : null
                }
                getSnapshotsForAllSync(e, t) {
                    return e.map((e => this.getSnapshotSync(e, t)))
                }
                getSnapshot(e, t, i) {
                    var s;
                    const r = null !== (s = null == i ? void 0 : i.signal) && void 0 !== s ? s : null;
                    return new Promise(((i, s) => {
                        if (r && r.aborted) throw (0, n.createAbortError)();
                        const o = () => {
                                this._onSymbolData.unsubscribe(this, l), s((0, n.createAbortError)())
                            },
                            l = (s = e) => {
                                if (s !== e) return !1;
                                const n = d.cache.get(e);
                                return !(!n || !this._isSnapshotReady(n, t)) && (this._onSymbolData.unsubscribe(this, l), null == r || r.removeEventListener("abort", o), i(n), !0)
                            };
                        if (!l() && (null == r || r.addEventListener("abort", o, {
                                once: !0
                            }), this._onSymbolData.subscribe(this, l), !this._incomplete.has(e))) {
                            if (this._incomplete.add(e), !this._connected) return;
                            if (null === this._batcher) {
                                const t = this._batcher = {
                                    symbols: new Set([e]),
                                    promise: Promise.resolve().then((() => {
                                        this._batcher === t && (this._session.quoteAddSymbols([...t.symbols]), this._batcher = null)
                                    }))
                                }
                            } else this._batcher.symbols.add(e)
                        }
                    }))
                }
                getSnapshotsForAll(e, t, i) {
                    return Promise.all(e.map((e => this.getSnapshot(e, t, i))))
                }
                static relax(e) {
                    return e
                }
                static isSuccess(e) {
                    return "error" !== e.status
                }
                static hasAllFields(e, t) {
                    for (const i of Array.from(t))
                        if (!e.hasOwnProperty(i)) return !1;
                    return !0
                }
                _isSnapshotReady(e, t) {
                    return "error" === e.status || this._hasAllFields(e, t)
                }
                _hasAllFields(e, t) {
                    return d.hasAllFields(e.values, Array.from(t))
                }
                _handleConnected() {
                    if (this._fields.size > 0) {
                        const e = [...this._fields].map((e => {
                            var t;
                            return null !== (t = u.CLIENT_TO_SERVER_FIELD_MAPPING.get(e)) && void 0 !== t ? t : e
                        }));
                        this._session.quoteSetFields(e)
                    }
                    this._incomplete.size > 0 && this._session.quoteAddSymbols([...this._incomplete])
                }
                _handleCompleteData(e) {
                    var t;
                    const i = null !== (t = d.cache.get(e)) && void 0 !== t ? t : {
                        symbolname: e,
                        status: "ok",
                        values: {}
                    };
                    d.cache.update(i, this._fields, !0), this._session.quoteRemoveSymbols([e]), this._incomplete.delete(e), this._onSymbolData.fire(e)
                }
                _handleSymbolData(e) {
                    (0, h.normalizeUpdateMode)(e.values);
                    const t = e.symbolname;
                    d.cache.update(e, this._fields, !1), "error" === e.status ? this._handleCompleteData(t) : this._onSymbolData.fire(t)
                }
            }
            d.cache = a.QUOTE_FIELDS_CACHE
        },
        927267: (e, t, i) => {
            "use strict";
            i.d(t, {
                MONTH_ARRAY: () => r
            });
            var s = i(777754);
            const r = [s.t(null, void 0, i(926910)), s.t(null, void 0, i(316467)), s.t(null, void 0, i(684675)), s.t(null, void 0, i(997637)), s.t(null, void 0, i(668327)), s.t(null, void 0, i(49385)), s.t(null, void 0, i(323230)), s.t(null, void 0, i(486797)), s.t(null, void 0, i(661132)), s.t(null, void 0, i(290784)), s.t(null, void 0, i(171194)), s.t(null, void 0, i(55669))]
        },
        633457: (e, t, i) => {
            "use strict";
            i.d(t, {
                DialogRenderer: () => o
            });
            var s = i(988411),
                r = i.n(s);
            class o {
                constructor() {
                    this._container = document.createElement("div"), this._visibility = new(r())(!1)
                }
                visible() {
                    return this._visibility.readonly()
                }
                _setVisibility(e) {
                    this._visibility.setValue(e)
                }
            }
        },
        121525: (e, t, i) => {
            "use strict";
            i.d(t, {
                LollipopGroupIcons: () => s,
                LollipopTooltipContentRow: () => h
            });
            var s, r = i(50959),
                o = i(497754),
                n = i.n(o),
                l = i(83436),
                a = i(131726);

            function h(e) {
                const {
                    name: t,
                    value: i,
                    style: s,
                    valueStyle: o,
                    onValueClick: h,
                    valueRightIcon: u,
                    className: d
                } = e;
                return r.createElement("div", {
                    className: n()(a.groupRow, d),
                    style: s
                }, t && r.createElement("div", {
                    className: a.groupCell
                }, r.createElement("span", {
                    className: a.text
                }, t)), r.createElement("div", {
                    className: a.groupCell
                }, r.createElement("span", {
                    className: a.text,
                    style: o,
                    onClick: h
                }, i), u && r.createElement(l.Icon, {
                    icon: u.iconContent,
                    className: n()(a.groupIcon, u.iconClass, "apply-common-tooltip"),
                    title: u.tooltipText
                })))
            }! function(e) {
                e[e.BeforeMarketOpen = a.beforeMarketOpen] = "BeforeMarketOpen", e[e.AfterMarketClose = a.afterMarketClose] = "AfterMarketClose"
            }(s || (s = {}))
        },
        612484: (e, t, i) => {
            "use strict";
            i.d(t, {
                WebviewPageName: () => s,
                WebviewControllerBase: () => o
            });
            var s, r = i(583912);
            ! function(e) {
                e.Financials = "financials", e.Forecast = "forecast", e.Details = "details", e.Technicals = "technicals"
            }(s || (s = {}));
            class o {
                _createOpenRequest(e, t = new URLSearchParams) {
                    var i;
                    const s = null !== (i = t.get("symbol")) && void 0 !== i ? i : r.linking.symbol.value();
                    return t.set("symbol", s), {
                        execute() {
                            const i = new URL(`webview/${e}/`, location.origin);
                            return i.search = t.toString(), window.open(i, "_blank")
                        },
                        symbol: () => s
                    }
                }
            }
        },
        20651: (e, t, i) => {
            "use strict";
            i.d(t, {
                barFunctionByStyle: () => r
            });
            var s = i(311854);

            function r(e, t) {
                switch (e) {
                    case 12:
                        return (0, s.barFunction)("low", "low", "close");
                    case 2:
                    case 3:
                    case 10:
                    case 13:
                        return (0,
                            s.barFunction)(null != t ? t : "close");
                    default:
                        return (0, s.barFunction)("close", "open")
                }
            }
        },
        262673: (e, t, i) => {
            "use strict";

            function s(e, t, i = 0) {
                t.setValue(e.value());
                const s = {};
                return e.subscribe(s, (e => {
                    t.setValue(e.value())
                })), 1 === i && t.subscribe(s, (t => {
                    e.setValue(t.value())
                })), () => {
                    e.unsubscribeAll(s), 1 === i && t.unsubscribeAll(s)
                }
            }
            i.d(t, {
                bindProperties: () => s
            })
        },
        232371: (e, t, i) => {
            "use strict";
            i.d(t, {
                getDataVendorString: () => r
            });
            var s = i(495046);

            function r(e) {
                return null == e || s.enabled("bovespa_widget") ? null : "QUANDL" === e.exchange ? "Quandl.com" : ["BMFBOVESPA", "BME", "NAG", "TSE", "TFX", "NZX", "BCBA", "TWSE", "TASE", "EURONEXT", "TOCOM", "BMV", "SIX", "SGX", "GPW", "SWB", "BCS", "WB", "SZSE", "BELEX", "BAHRAIN", "EGX", "TADAWUL", "BVL", "LUXSE", "DFM", "BVC", "NSENG", "IDX", "HSI", "QSE", "OSE"].includes(e.exchange) ? "ICE Data Services" : null
            }
        },
        220479: (e, t, i) => {
            "use strict";

            function s(e, t) {
                const i = Math.floor(t / 1e4) % 1e4,
                    s = Math.floor(t / 100) % 100 - 1,
                    r = t % 100;
                return e.format(new Date(Date.UTC(i, s, r)))
            }
            i.d(t, {
                formatYYYYMMDD: () => s
            })
        },
        885418: (e, t, i) => {
            "use strict";

            function s(e) {
                const t = Math.abs(Math.round(1e3 * e) / 1e3).toFixed(3).split("."),
                    i = t[0];
                let s = t[1];
                return "0" === s[s.length - 1] && (s = s.slice(0, -1)), `${e<0?"−":""}${i}.${s}`
            }
            i.d(t, {
                roundToThirdDigit: () => s
            })
        },
        460321: (e, t, i) => {
            "use strict";
            i.d(t, {
                LollipopPaneView: () => c
            });
            var s = i(327714),
                r = i(650151),
                o = i(86441),
                n = i(758337),
                l = i(28035),
                a = i(837512),
                h = i(274131),
                u = i(49568),
                d = i(858063);
            class c {
                constructor(e, t, i) {
                    this._invalidated = !1, this._renderer = new l.CompositeRenderer, this._textWidthCache = new a.TextWidthCache, this._stylesCache = null, this._lollipops = {}, this._lollipopsCounter = 0, this._lastClickedId = null, this.onPaneBgChange = () => {
                        this._recreateStyles(this._model)
                    }, this._lastClickedId = null, this._model = e, this._source = t, this._clickHandler = i, this._recreateStyles(e), e.backgroundColor().subscribe(this.onPaneBgChange), e.mainSeries().onSymbolIntervalChanged().subscribe(this, this._onSymbolOrIntervalChanged)
                }
                destroy() {
                    this._model.backgroundColor().unsubscribe(this.onPaneBgChange), this._model.mainSeries().onSymbolIntervalChanged().unsubscribeAll(this)
                }
                processClickOutside(e) {
                    var t;
                    if (null === this._lastClickedId || !e) return void this.clearLastClicked();
                    let i = null;
                    if (function(e) {
                            return void 0 !== e.touches
                        }(e)) {
                        if (1 !== e.touches.length) return; {
                            const t = (0, r.ensureNotNull)(e.target).getBoundingClientRect(),
                                s = e.touches[0];
                            i = new o.Point(s.clientX - t.left, s.clientY - t.top)
                        }
                    } else i = new o.Point(e.offsetX, e.offsetY);
                    const s = this._renderer.hitTest(i, {
                        physicalHeight: 0,
                        physicalWidth: 0,
                        pixelRatio: 1,
                        cssHeight: 0,
                        cssWidth: 0
                    });
                    null !== s && (null === (t = s.data()) || void 0 === t ? void 0 : t.activeItem) === (0, r.ensureDefined)(this._lollipops[this._lastClickedId]).itemIndex || this.clearLastClicked()
                }
                clearLastClicked() {
                    const e = null !== this._lastClickedId && this._lollipops[this._lastClickedId] || null;
                    null !== e && (e.active = !1), this._lastClickedId = null
                }
                getLastClickedLollipopId() {
                    return this._lastClickedId
                }
                update() {
                    this._invalidated = !0
                }
                afterUpdate(e, t, i, s) {}
                getStyle(e) {
                    const t = e.active ? "active" : e.hovered ? "hovered" : "default";
                    let i = t;
                    if (e.stack && (i += "_stack:" + e.stack),
                        "active" === i) return this._activeStyle;
                    if ("hovered" === i) return this._hoveredStyle;
                    if ("default" === i) return this._defaultStyle;
                    if (this._stylesCache || (this._stylesCache = {}), !this._stylesCache[i]) {
                        const s = (0, n.clone)("active" === t ? this._activeStyle : "hovered" === t ? this._hoveredStyle : this._defaultStyle);
                        e.stack && (s.lollipop.incHeight = 25 * e.stack), this._stylesCache[i] = s
                    }
                    return this._stylesCache[i]
                }
                hasTooltip(e) {
                    return !0
                }
                _getY() {
                    let e = 0;
                    const t = this._model.panes();
                    for (let i = t.length; i--;) {
                        const s = t[i];
                        s.containsMainSeries() && (e += s.height())
                    }
                    return e
                }
                _showBarLine(e) {
                    return this.hasTooltip(e) && (e.hovered || e.active)
                }
                _createRenderers(e, t) {
                    this._renderer.clear();
                    const i = (0, s.size)({
                        width: e,
                        height: t
                    });
                    for (const e in this._lollipops)
                        if (this._lollipops.hasOwnProperty(e)) {
                            const t = (0, r.ensureDefined)(this._lollipops[e]);
                            if (t.visible) {
                                const e = this.getStyle(t),
                                    s = {
                                        id: t.id,
                                        centerPoint: new o.Point(t.basePoint.x, t.basePoint.y - e.lollipop.bottom - e.lollipop.height / 2 - (e.lollipop.incHeight || 0)),
                                        style: e
                                    },
                                    r = {
                                        activeItem: t.itemIndex,
                                        hideCrosshairLinesOnHover: !0,
                                        clickHandler: this._lollipopMouseClickHandler.bind(this, s, i),
                                        tapHandler: this._lollipopMouseClickHandler.bind(this, s, i)
                                    };
                                if (this._renderer.append(this._createRendererForLollipop(s, r)), this._showBarLine(t)) {
                                    const {
                                        strokeStyle: i,
                                        lineStyle: s,
                                        lineWidth: r
                                    } = e.barLine, o = {
                                        color: i,
                                        linestyle: s,
                                        linewidth: r,
                                        x: t.basePoint.x,
                                        top: 0,
                                        bottom: t.basePoint.y - e.lollipop.bottom - e.lollipop.height
                                    }, n = new h.VerticalLineRenderer;
                                    n.setData(o), this._renderer.insert(n, 0)
                                }
                            }
                        }
                }
                _recreateStyles(e) {
                    this._stylesCache = null
                }
                _createRendererForLollipop(e, t) {
                    return new u.LollipopRenderer(e, new d.HitTestResult(d.HitTestResult.CUSTOM, t), this._textWidthCache)
                }
                _onSymbolOrIntervalChanged() {
                    this._lollipops = {}, this._lollipopsCounter = 0, this._renderer.clear(), this.clearLastClicked()
                }
                _lollipopMouseClickHandler(e, t, i) {
                    i.preventDefault();
                    const s = e.id;
                    if (this._lastClickedId = this._lastClickedId === s ? null : s, null === this._lastClickedId) return;
                    const n = {
                        target: i.target,
                        targetSize: t,
                        point: new o.Point(e.centerPoint.x, e.centerPoint.y - e.style.lollipop.height / 2 - 8),
                        marginTop: 15
                    };
                    this._clickHandler(n, (() => {
                        const e = (0, r.ensureDefined)(this._lollipops[s]);
                        return this._createTooltipContent(e)
                    }))
                }
            }
        },
        112824: (e, t, i) => {
            "use strict";

            function s(e, t) {
                return e.pixelRatio === t.pixelRatio
            }
            i.d(t, {
                areEqualPaneRenderParams: () => s
            })
        },
        49568: (e, t, i) => {
            "use strict";
            i.d(t, {
                LollipopRenderer: () => h
            });
            var s = i(934026),
                r = i(86441),
                o = i(631586),
                n = i(914679),
                l = i(741341),
                a = i(837291);
            class h {
                constructor(e, t, i) {
                    this._data = e, this._hittest = t, this._textWidthCache = i
                }
                draw(e, t) {
                    const i = t.pixelRatio,
                        s = this._data.centerPoint,
                        o = Math.round(s.x * i),
                        n = Math.round(s.y * i),
                        l = Math.max(1, Math.floor(i)) % 2 / 2,
                        a = new r.Point(o + l, n - l);
                    this._drawLollipop(e, a, t), this._drawLabel(e, a, t.pixelRatio)
                }
                hitTest(e, t) {
                    const i = (0, a.interactionTolerance)().esd,
                        o = this._data.centerPoint.y - this._data.style.lollipop.height / 2 - i,
                        n = this._data.centerPoint.x - this._data.style.lollipop.width / 2 - i,
                        l = (0, r.box)(new r.Point(n, o), new r.Point(n + this._data.style.lollipop.width + 2 * i, o + this._data.style.lollipop.height + 2 * i));
                    return (0,
                        s.pointInBox)(e, l) ? this._hittest : null
                }
                _drawLollipop(e, t, i) {
                    const s = this._data.style,
                        r = i.pixelRatio,
                        l = Math.max(1, Math.floor(r));
                    let a = Math.round(s.lollipop.width * r);
                    a % 2 != l % 2 && (a += 1);
                    const h = a / 2;
                    s.lollipop.fillCircle && s.lollipop.backgroundColor && (e.fillStyle = s.lollipop.backgroundColor, (0, n.createCircle)(e, t.x, t.y, h), e.fill());
                    const u = Math.round(s.lollipop.lineWidth * r);
                    e.strokeStyle = s.lollipop.strokeStyle, e.lineWidth = u, (0, n.setLineStyle)(e, o.LINESTYLE_SOLID);
                    const d = h - Math.round(1 * r + u / 2);
                    (0, n.createCircle)(e, t.x, t.y, d), s.lollipop.fillCircle && s.lollipop.fillStyle && (e.fillStyle = s.lollipop.fillStyle, e.fill()), e.stroke()
                }
                _drawLabel(e, t, i) {
                    const s = this._data.style.lollipop.text,
                        r = s.label;
                    if ("" === r) return;
                    e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = s.strokeStyle, e.font = s.font;
                    const o = this._textWidthCache.yMidCorrection(e, r);
                    e.translate(t.x, t.y + ((s.deltaY || 0) + o) * i), (0, l.drawScaled)(e, i, (() => {
                        e.fillText(r, 0, 0)
                    }))
                }
            }
        },
        544445: (e, t, i) => {
            "use strict";
            i.d(t, {
                calculateLabelPosition: () => c,
                getTextBoundaries: () => _,
                wordWrap: () => p,
                TextRenderer: () => I
            });
            var s = i(86441),
                r = i(650151),
                o = i(934026),
                n = i(768038),
                l = i(858063),
                a = i(914679),
                h = i(758337),
                u = i(741341),
                d = i(631586);

            function c(e, t, i, r, o) {
                const n = .5 * (t.x + i.x);
                let l = i.y;
                return t.y > i.y ? (l -= e.height / 2 + r.y, l = Math.max(e.height / 2, l)) : (l += e.height / 2 + r.y, l = Math.min(o - e.height / 2, l)), new s.Point(n, l)
            }

            function _(e, t, i) {
                if (e.isOutOfScreen(t, i)) return null;
                const s = e.getPolygonPoints();
                return 0 === s.length ? null : s
            }

            function p(e, t, i) {
                i = (0, h.isString)(i) ? parseInt(i) : i, e += "";
                const s = !(0, h.isNumber)(i) || !isFinite(i) || i <= 0 ? e.split(/\r\n|\r|\n|$/) : e.split(/[^\S\r\n]*(?:\r\n|\r|\n|$)/);
                if (s[s.length - 1] || s.pop(), !(0, h.isNumber)(i) || !isFinite(i) || i <= 0) return s;
                const r = [];
                for (let e = 0; e < s.length; e++) {
                    const o = s[e],
                        n = (0, u.measureText)(o, t).width;
                    if (n <= i) {
                        r.push(o);
                        continue
                    }
                    const l = o.split(/([-)\]},.!?:;])|(\s+)/);
                    let a = 0;
                    for (; l.length;) {
                        let e = ~~(i / n * (l.length + 2) / 3);
                        if (e <= 0 || (0, u.measureText)(l.slice(0, 3 * e - 1).join(""), t).width <= i)
                            for (;
                                (0, u.measureText)(l.slice(0, 3 * (e + 1) - 1).join(""), t).width <= i;) e++;
                        else
                            for (; e > 0 && (0, u.measureText)(l.slice(0, 3 * --e - 1).join(""), t).width > i;);
                        if (e > 0) r.push(l.slice(0, 3 * e - 1).join("")), l.splice(0, 3 * e);
                        else {
                            const e = l[0] + (l[1] || "");
                            if (a = 1 === a ? 1 : ~~(i / (0, u.measureText)(e, t).width * e.length), (0, u.measureText)(e.substring(0, a), t).width <= i)
                                for (;
                                    (0, u.measureText)(e.substring(0, a + 1), t).width <= i;) a++;
                            else
                                for (; a > 1 && (0, u.measureText)(e.substring(0, --a), t).width > i;);
                            a < 1 && (a = 1), r.push(e.substring(0, a)), l[0] = e.substring(a), l[1] = ""
                        }
                        if ((0, u.measureText)(l.join(""), t).width <= i) {
                            r.push(l.join(""));
                            break
                        }
                    }
                }
                return r
            }

            function m(e, t, i) {
                if (0 === i) return e.clone();
                const r = (e.x - t.x) * Math.cos(i) - (e.y - t.y) * Math.sin(i) + t.x,
                    o = (e.x - t.x) * Math.sin(i) + (e.y - t.y) * Math.cos(i) + t.y;
                return new s.Point(r, o)
            }

            function v(e, t) {
                const i = Math.round(t + 2 * S(e) + 2 * g(e));
                return i % 2 ? i + 1 : i
            }

            function y(e, t) {
                return x(e) * t + w(e) * (t - 1) + 2 * b(e) + 2 * f(e)
            }

            function f(e) {
                return void 0 !== e.boxPaddingVert ? e.boxPaddingVert * P(e) : void 0 !== e.boxPadding ? e.boxPadding * P(e) : x(e) / 3
            }

            function g(e) {
                return void 0 !== e.boxPaddingHorz ? e.boxPaddingHorz * P(e) : void 0 !== e.boxPadding ? e.boxPadding * P(e) : x(e) / 3
            }

            function b(e) {
                return (e.backgroundVertInflate || 0) * P(e)
            }

            function S(e) {
                return (e.backgroundHorzInflate || 0) * P(e)
            }

            function w(e) {
                return (e.padding || 0) * P(e)
            }

            function x(e) {
                return Math.ceil(C(e) * P(e))
            }

            function C(e) {
                return e.fontsize || e.fontSize || 30
            }

            function P(e) {
                const t = Math.min(1, Math.max(.2, Math.min(e.scaleX || 1, e.scaleY || 1)));
                if (1 === t) return t;
                const i = C(e);
                return Math.ceil(t * i) / i
            }
            class I {
                constructor(e, t) {
                    this._data = null, this._internalData = null, this._boxSize = null, this._polygonPoints = null, this._linesInfo = null, this._fontInfo = null, this._hittest = t || new l.HitTestResult(l.HitTestResult.MOVEPOINT, {
                        areaName: l.AreaName.Text
                    }), void 0 !== e && this.setData(e)
                }
                setData(e) {
                    null !== e ? (e.horzTextAlign || (e.horzTextAlign = e.horzAlign), ! function(e, t) {
                        if (null === e || null === t) return null === e == (null === t);
                        if (void 0 === e.points != (void 0 === t.points)) return !1;
                        if (void 0 !== e.points && void 0 !== t.points) {
                            if (e.points.length !== t.points.length) return !1;
                            for (let r = 0; r < e.points.length; ++r)
                                if (i = e.points[r], s = t.points[r], i.x !== s.x || i.y !== s.y) return !1
                        }
                        var i, s;
                        return e.text === t.text && e.vertAlign === t.vertAlign && e.horzAlign === t.horzAlign && e.horzTextAlign === t.horzTextAlign && e.font === t.font && e.offsetX === t.offsetX && e.offsetY === t.offsetY && e.bold === t.bold && e.italic === t.italic && e.fontsize === t.fontsize && e.fontSize === t.fontSize && e.backgroundRoundRect === t.backgroundRoundRect && e.forceTextAlign === t.forceTextAlign && e.wordWrapWidth === t.wordWrapWidth && e.forceCalculateMaxLineWidth === t.forceCalculateMaxLineWidth && e.padding === t.padding && e.scaleY === t.scaleY && e.scaleX === t.scaleX && e.highlightBorder === t.highlightBorder && e.backgroundHorzInflate === t.backgroundHorzInflate && e.backgroundVertInflate === t.backgroundVertInflate && e.boxPadding === t.boxPadding && e.boxPaddingVert === t.boxPaddingVert && e.boxPaddingHorz === t.boxPaddingHorz && e.angle === t.angle && e.maxHeight === t.maxHeight && (0, h.deepEquals)(e.boxShadow, t.boxShadow)[0]
                    }(this._data, e) ? (this._data = e, this._internalData = null, this._boxSize = null, this._polygonPoints = null, this._linesInfo = null, this._fontInfo = null) : this._data = e) : this._data = null
                }
                hitTest(e) {
                    return null === this._data || void 0 === this._data.points || 0 === this._data.points.length ? null : (0, o.pointInPolygon)(e, this.getPolygonPoints()) ? this._hittest : null
                }
                doesIntersectWithBox(e) {
                    return null !== this._data && void 0 !== this._data.points && 0 !== this._data.points.length && (0, o.pointInBox)(this._data.points[0], e)
                }
                measure() {
                    if (null === this._data) return {
                        width: 0,
                        height: 0
                    };
                    const e = this._getBoxSize();
                    return {
                        width: e.boxWidth,
                        height: e.boxHeight
                    }
                }
                rect() {
                    if (null === this._data) return {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    };
                    const e = this._getInternalData();
                    return {
                        x: e.boxLeft,
                        y: e.boxTop,
                        width: e.boxWidth,
                        height: e.boxHeight
                    }
                }
                isOutOfScreen(e, t) {
                    if (null === this._data || void 0 === this._data.points || 0 === this._data.points.length) return !0;
                    const i = this._getInternalData();
                    if (i.boxLeft + i.boxWidth < 0 || i.boxLeft > e) {
                        const i = (0, s.box)(new s.Point(0, 0), new s.Point(e, t));
                        return this.getPolygonPoints().every((e => !(0, o.pointInBox)(e, i)))
                    }
                    return !1
                }
                setPoints(e, t) {
                    (0,
                        r.ensureNotNull)(this._data).points = e, this._hittest = t || new l.HitTestResult(l.HitTestResult.MOVEPOINT)
                }
                fontStyle(e) {
                    return null === this._data ? "" : this._getFontInfo().fontStyle
                }
                wordWrap(e, t, i) {
                    return p(e, i || this.fontStyle(), t)
                }
                draw(e, t) {
                    if (null === this._data || void 0 === this._data.points || 0 === this._data.points.length) return;
                    if (this.isOutOfScreen(t.cssWidth, t.cssHeight)) return;
                    const i = t.pixelRatio,
                        s = this._getInternalData(),
                        r = this._getRotationPoint().scaled(i);
                    e.save(), e.translate(r.x, r.y), e.rotate(this._data.angle || 0), e.translate(-r.x, -r.y);
                    const o = this._getFontInfo().fontSize;
                    e.textBaseline = s.textBaseLine, e.textAlign = s.textAlign, e.font = this.fontStyle();
                    const {
                        scaledLeft: n,
                        scaledRight: l,
                        scaledTop: h,
                        scaledBottom: c
                    } = function(e, t) {
                        const i = Math.round(e.boxLeft * t),
                            s = Math.round(e.boxTop * t);
                        return {
                            scaledLeft: i,
                            scaledRight: i + Math.round(e.boxWidth * t),
                            scaledTop: s,
                            scaledBottom: s + Math.round(e.boxHeight * t)
                        }
                    }(s, i);
                    if (this._data.backgroundColor || this._data.borderColor || this._data.highlightBorder && this._data.wordWrapWidth) {
                        const t = this._data.borderWidth || Math.max(o / 12, 1),
                            s = Math.round(t * i),
                            r = s / 2;
                        let u = !1;
                        if (this._data.boxShadow) {
                            e.save();
                            const {
                                shadowColor: t,
                                shadowBlur: i,
                                shadowOffsetX: s = 0,
                                shadowOffsetY: r = 0
                            } = this._data.boxShadow;
                            e.shadowColor = t, e.shadowBlur = i, e.shadowOffsetX = s, e.shadowOffsetY = r, u = !0
                        }
                        if (this._data.backgroundRoundRect) this._data.backgroundColor && ((0, a.drawRoundRect)(e, n, h, l - n, c - h, this._data.backgroundRoundRect * i), e.fillStyle = this._data.backgroundColor, e.fill(), u && (e.restore(), u = !1)), this._data.borderColor && ((0, a.drawRoundRect)(e, n - r, h - r, l - n + s, c - h + s, this._data.backgroundRoundRect * i + s), e.strokeStyle = this._data.borderColor, e.lineWidth = s, e.stroke(), u && (e.restore(), u = !1));
                        else if (this._data.backgroundColor && (e.fillStyle = this._data.backgroundColor, e.fillRect(n, h, l - n, c - h), u && (e.restore(), u = !1)), this._data.borderColor || this._data.highlightBorder) {
                            let t;
                            this._data.borderColor ? (e.strokeStyle = this._data.borderColor, t = s) : (e.strokeStyle = this._data.color, (0, a.setLineStyle)(e, d.LINESTYLE_DASHED), t = Math.max(1, Math.floor(i))), e.lineWidth = t, e.beginPath(), e.moveTo(n - t / 2, h - t / 2), e.lineTo(n - t / 2, c + t / 2), e.lineTo(l + t / 2, c + t / 2), e.lineTo(l + t / 2, h - t / 2), e.lineTo(n - t / 2, h - t / 2), e.stroke(), u && e.restore()
                        }
                    }
                    e.fillStyle = this._data.color;
                    const _ = (n + Math.round(s.textStart * i)) / i,
                        p = .05 * o;
                    let m = (h + Math.round((s.textTop + p) * i)) / i;
                    const v = w(this._data),
                        y = this.getLinesInfo();
                    for (const t of y.lines)(0, u.drawScaled)(e, i, (() => e.fillText(t, _, m))), m += o + v;
                    e.restore()
                }
                getPolygonPoints() {
                    if (null !== this._polygonPoints) return this._polygonPoints;
                    if (null === this._data) return [];
                    const e = this._data.angle || 0,
                        {
                            boxLeft: t,
                            boxTop: i,
                            boxWidth: r,
                            boxHeight: o
                        } = this._getInternalData(),
                        n = this._getRotationPoint();
                    return this._polygonPoints = [m(new s.Point(t, i), n, e), m(new s.Point(t + r, i), n, e), m(new s.Point(t + r, i + o), n, e), m(new s.Point(t, i + o), n, e)], this._polygonPoints
                }
                getLinesInfo() {
                    if (null === this._linesInfo) {
                        const e = (0, r.ensureNotNull)(this._data);
                        let t = this.wordWrap(e.text, e.wordWrapWidth);
                        if (void 0 !== e.maxHeight) {
                            const i = function(e) {
                                const t = (0, r.ensureDefined)(e.maxHeight),
                                    i = x(e),
                                    s = w(e);
                                return Math.floor((t + s) / (i + s))
                            }(e);
                            t.length > i && (t = t.slice(0, i))
                        }
                        this._linesInfo = {
                            linesMaxWidth: this._getLinesMaxWidth(t),
                            lines: t
                        }
                    }
                    return this._linesInfo
                }
                _getLinesMaxWidth(e) {
                    const t = this.fontStyle();
                    if (null !== this._data && this._data.wordWrapWidth && !this._data.forceCalculateMaxLineWidth) return this._data.wordWrapWidth * P(this._data);
                    let i = 0;
                    for (const s of e) i = Math.max(i, (0, u.measureText)(s, t).width);
                    return i
                }
                _getInternalData() {
                    if (null !== this._internalData) return this._internalData;
                    const e = (0, r.ensureNotNull)(this._data),
                        t = this._getBoxSize(),
                        i = t.boxWidth,
                        s = t.boxHeight,
                        o = (0, r.ensureDefined)(e.points)[0];
                    let l = o.y;
                    switch (e.vertAlign) {
                        case "bottom":
                            l -= s + e.offsetY;
                            break;
                        case "middle":
                            l -= s / 2;
                            break;
                        case "top":
                            l += e.offsetY
                    }
                    let a = o.x;
                    const h = g(e),
                        u = f(e),
                        d = S(e) + h;
                    let c;
                    const _ = l + (b(e) + u) + x(e) / 2;
                    let p;
                    switch (e.horzAlign) {
                        case "left":
                            a += e.offsetX;
                            break;
                        case "center":
                            a -= i / 2;
                            break;
                        case "right":
                            a -= i + e.offsetX
                    }
                    switch ((0, r.ensureDefined)(e.horzTextAlign)) {
                        case "left":
                            p = "start", c = a + d, (0, n.isRtl)() && (e.forceTextAlign ? p = "left" : (c = a + i - d, p = "right"));
                            break;
                        case "center":
                            p = "center", c = a + i / 2;
                            break;
                        case "right":
                            p = "end", c = a + i - d, (0, n.isRtl)() && e.forceTextAlign && (p = "right")
                    }
                    return this._internalData = {
                        boxLeft: a,
                        boxTop: l,
                        boxWidth: i,
                        boxHeight: s,
                        textStart: c - a,
                        textTop: _ - l,
                        textAlign: p,
                        textBaseLine: "middle"
                    }, this._internalData
                }
                _getFontInfo() {
                    if (null === this._fontInfo) {
                        const e = (0, r.ensureNotNull)(this._data),
                            t = x(e),
                            i = (e.bold ? "bold " : "") + (e.italic ? "italic " : "") + t + "px " + e.font;
                        this._fontInfo = {
                            fontStyle: i,
                            fontSize: t
                        }
                    }
                    return this._fontInfo
                }
                _getBoxSize() {
                    if (null === this._boxSize) {
                        const e = this.getLinesInfo(),
                            t = (0, r.ensureNotNull)(this._data);
                        this._boxSize = {
                            boxWidth: v(t, e.linesMaxWidth),
                            boxHeight: y(t, e.lines.length)
                        }
                    }
                    return this._boxSize
                }
                _getRotationPoint() {
                    const {
                        boxLeft: e,
                        boxTop: t,
                        boxWidth: i,
                        boxHeight: o
                    } = this._getInternalData(), {
                        horzAlign: n,
                        vertAlign: l
                    } = (0, r.ensureNotNull)(this._data);
                    let a, h;
                    switch (n) {
                        case "center":
                            a = e + i / 2;
                            break;
                        case "left":
                            a = e;
                            break;
                        case "right":
                            a = e + i
                    }
                    switch (l) {
                        case "middle":
                            h = t + o / 2;
                            break;
                        case "top":
                            h = t;
                            break;
                        case "bottom":
                            h = t + o
                    }
                    return new s.Point(a, h)
                }
            }
        },
        296266: (e, t, i) => {
            "use strict";
            i.d(t, {
                drawArrow: () => c,
                TrendLineRenderer: () => _
            });
            var s = i(650151),
                r = i(204652),
                o = i(739665),
                n = i(858063),
                l = i(914679),
                a = i(837291),
                h = i(741341),
                u = i(631586);

            function d(e, t, i, s, r) {
                t.save(), t.fillStyle = "#000000", t.beginPath(), t.arc(e.x * r, e.y * r, i * r, 0, 2 * Math.PI, !1), t.fill(), s.strokeWidth && (t.lineWidth = s.strokeWidth, t.stroke()), t.restore()
            }

            function c(e, t, i, s, r, o = !1) {
                if (t.subtract(e).length() < 1) return;
                const n = (0, a.getArrowPoints)(e, t, s, o);
                for (let e = 0; e < n.length; ++e) {
                    const t = n[e][0],
                        s = n[e][1];
                    (0, l.drawLine)(i, t.x * r, t.y * r, s.x * r, s.y * r)
                }
            }
            class _ {
                constructor() {
                    this._data = null, this._hittest = new n.HitTestResult(n.HitTestResult.MOVEPOINT)
                }
                setData(e) {
                    this._data = e
                }
                setHitTest(e) {
                    this._hittest = e
                }
                draw(e, t) {
                    const i = this._data;
                    if (null === i) return;
                    if ("points" in i && i.points.length < 2) return;
                    const s = t.pixelRatio;
                    void 0 !== i.excludeBoundaries && (e.save(), (0, h.addExclusionArea)(e, t, i.excludeBoundaries)), e.lineCap = i.linestyle === u.LINESTYLE_SOLID ? "round" : "butt", e.strokeStyle = i.color,
                        e.lineWidth = Math.max(1, Math.floor(i.linewidth * s)), (0, l.setLineStyle)(e, i.linestyle);
                    const r = i.points[0],
                        o = i.points[1];
                    let n = [];
                    i.overlayLineEndings ? n = [r.clone(), o.clone()] : this._drawEnds(e, [r, o], i.linewidth, s);
                    const a = this._extendAndClipLineSegment(r, o, t);
                    null !== a && i.linewidth > 0 && (a[0].x === a[1].x ? (0, l.drawVerticalLine)(e, Math.round(a[0].x * s), a[0].y * s, a[1].y * s) : a[0].y === a[1].y ? (0, l.drawHorizontalLine)(e, Math.round(a[0].y * s), a[0].x * s, a[1].x * s) : (0, l.drawLine)(e, a[0].x * s, a[0].y * s, a[1].x * s, a[1].y * s)), i.overlayLineEndings && this._drawEnds(e, n, i.linewidth, s), void 0 !== i.excludeBoundaries && e.restore()
                }
                hitTest(e, t) {
                    const i = this._data;
                    if (null === i) return null;
                    if ("points" in i && i.points.length < 2) return null;
                    const s = (0, a.interactionTolerance)().line,
                        o = i.points[0],
                        n = i.points[1],
                        l = this._extendAndClipLineSegment(o, n, t);
                    if (null !== l) {
                        if ((0, r.distanceToSegment)(l[0], l[1], e).distance <= s) return this._hittest
                    }
                    return null
                }
                _extendAndClipLineSegment(e, t, i) {
                    const r = (0, s.ensureNotNull)(this._data);
                    return (0, a.extendAndClipLineSegment)(e, t, i.cssWidth, i.cssHeight, r.extendleft, r.extendright)
                }
                _drawEnds(e, t, i, r) {
                    const n = t[0],
                        l = t[1],
                        a = (0, s.ensureNotNull)(this._data);
                    switch (a.leftend) {
                        case o.LineEnd.Arrow:
                            c(l, n, e, i, r);
                            break;
                        case o.LineEnd.Circle:
                            d(n, e, i, (0, s.ensureDefined)(a.endstyle), r)
                    }
                    switch (a.rightend) {
                        case o.LineEnd.Arrow:
                            c(n, l, e, i, r);
                            break;
                        case o.LineEnd.Circle:
                            d(l, e, i, (0, s.ensureDefined)(a.endstyle), r)
                    }
                }
            }
        },
        274131: (e, t, i) => {
            "use strict";
            i.d(t, {
                VerticalLineRenderer: () => a
            });
            var s = i(858063),
                r = i(914679),
                o = i(837291),
                n = i(741341),
                l = i(756740);
            class a extends l.BitmapCoordinatesPaneRenderer {
                constructor() {
                    super(...arguments), this._data = null, this._hitTest = new s.HitTestResult(s.HitTestResult.MOVEPOINT)
                }
                setData(e) {
                    this._data = e
                }
                setHitTest(e) {
                    this._hitTest = e
                }
                hitTest(e) {
                    if (null === this._data || null === this._hitTest) return null;
                    const t = (0, o.interactionTolerance)().line,
                        i = Math.abs(e.x - this._data.x) <= t + this._data.linewidth / 2,
                        s = void 0 === this._data.top || this._data.top - e.y <= t,
                        r = void 0 === this._data.bottom || e.y - this._data.bottom <= t;
                    return i && s && r ? this._hitTest : null
                }
                _drawImpl(e) {
                    if (null === this._data || this._data.linewidth <= 0) return;
                    const {
                        context: t,
                        horizontalPixelRatio: i,
                        verticalPixelRatio: s,
                        mediaSize: o
                    } = e;
                    if (this._data.x < -this._data.linewidth / 2 || this._data.x > o.width + this._data.linewidth / 2) return;
                    t.lineCap = "butt", t.strokeStyle = this._data.color, t.lineWidth = Math.max(1, Math.floor(this._data.linewidth * i)), void 0 !== this._data.linestyle && (0, r.setLineStyle)(t, this._data.linestyle);
                    const l = void 0 !== this._data.top ? Math.max(this._data.top, 0) : 0,
                        a = void 0 !== this._data.bottom ? Math.min(this._data.bottom, o.height) : o.height,
                        h = Math.round(this._data.x * i),
                        u = Math.floor(l * s),
                        d = Math.ceil(a * s),
                        c = this._data.excludeBoundaries;
                    void 0 !== c && (0, n.addExclusionAreaByScope)(e, c), (0, r.drawVerticalLine)(t, h, u, d)
                }
            }
        },
        441970: (e, t, i) => {
            "use strict";
            i.d(t, {
                fromPercent: () => n,
                toPercent: () => l,
                toPercentRange: () => a,
                fromIndexedTo100: () => h,
                toIndexedTo100: () => u,
                toIndexedTo100Range: () => d,
                toLog: () => c,
                fromLog: () => _,
                logFormulaForPriceRange: () => p,
                logFormulasAreSame: () => m,
                getCurrentModePriceText: () => v,
                getOppositeModePriceText: () => y
            });
            var s = i(168210),
                r = i(43329);
            const o = {
                logicalOffset: 4,
                coordOffset: 1e-4
            };

            function n(e, t) {
                return t < 0 && (e = -e), e / 100 * t + t
            }

            function l(e, t) {
                const i = 100 * (e - t) / (t || 1);
                return t < 0 ? -i : i
            }

            function a(e, t) {
                const i = l(e.minValue(), t),
                    r = l(e.maxValue(), t);
                return new s.PriceRange(i, r)
            }

            function h(e, t) {
                return t < 0 && (e = -e), (e -= 100) / 100 * t + t
            }

            function u(e, t) {
                const i = 100 * (e - t) / t + 100;
                return t < 0 ? -i : i
            }

            function d(e, t) {
                const i = u(e.minValue(), t),
                    r = u(e.maxValue(), t);
                return new s.PriceRange(i, r)
            }

            function c(e, t) {
                const i = Math.abs(e);
                if (i < 1e-25) return 0;
                const s = (0, r.log10)(i + t.coordOffset) + t.logicalOffset;
                return e < 0 ? -s : s
            }

            function _(e, t) {
                const i = Math.abs(e);
                if (i < 1e-15) return 0;
                const s = Math.pow(10, i - t.logicalOffset) - t.coordOffset;
                return e < 0 ? -s : s
            }

            function p(e) {
                if (null === e) return o;
                const t = Math.abs(e.maxValue() - e.minValue());
                if (t >= 1 || t < 1e-15) return o;
                const i = Math.ceil(Math.abs(Math.log10(t))),
                    s = o.logicalOffset + i;
                return {
                    logicalOffset: s,
                    coordOffset: 1 / Math.pow(10, s)
                }
            }

            function m(e, t) {
                return e.logicalOffset === t.logicalOffset && e.coordOffset === t.coordOffset
            }

            function v(e, t) {
                return e.isPercentage() ? t.formattedPricePercentage : e.isIndexedTo100() ? t.formattedPriceIndexedTo100 : t.formattedPriceAbsolute
            }

            function y(e, t) {
                return e.isPercentage() || e.isIndexedTo100() ? t.formattedPriceAbsolute : t.formattedPricePercentage
            }
        },
        894042: (e, t, i) => {
            "use strict";
            i.d(t, {
                combineProperty: () => a,
                createPrimitivePropertyFromGetterAndSubscription: () => l,
                createWVFromGetterAndSubscription: () => s.createWVFromGetterAndSubscription,
                createWVFromGetterAndSubscriptions: () => r.createWVFromGetterAndSubscriptions,
                createWVFromProperty: () => o
            });
            var s = i(160521),
                r = i(223167);

            function o(e) {
                return (0, s.createWVFromGetterAndSubscription)((() => e.value()), e)
            }
            var n = i(506845);

            function l(e, t) {
                const i = (0, n.createPrimitiveProperty)(e()),
                    s = {};
                return i.destroy = () => {
                    t.unsubscribeAll(s)
                }, t.subscribe(s, (() => {
                    i.setValue(e())
                })), i
            }

            function a(e, ...t) {
                const i = () => e(...t.map((e => e.value()))),
                    s = (0, n.createPrimitiveProperty)(i()),
                    r = () => s.setValue(i()),
                    o = {};
                for (const e of t) e.subscribe(o, r);
                return s.destroy = () => {
                    t.forEach((e => e.unsubscribeAll(o)))
                }, s
            }
        },
        160521: (e, t, i) => {
            "use strict";
            i.d(t, {
                createWVFromGetterAndSubscription: () => o
            });
            var s = i(988411),
                r = i.n(s);

            function o(e, t) {
                const i = new(r())(e()),
                    s = {};
                t.subscribe(s, (() => {
                    i.setValue(e())
                }));
                return i.readonly().spawn((() => t.unsubscribeAll(s)))
            }
        },
        223167: (e, t, i) => {
            "use strict";
            i.d(t, {
                createWVFromGetterAndSubscriptions: () => o
            });
            var s = i(988411),
                r = i.n(s);

            function o(e, t) {
                const i = new(r())(e()),
                    s = {};
                t.forEach((t => t.subscribe(s, (() => {
                    i.setValue(e())
                }))));
                return i.readonly().spawn((() => t.forEach((e => e.unsubscribeAll(s)))))
            }
        },
        341342: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                QuotesProvider: () => l
            });
            var s = i(947809),
                r = i(869403),
                o = i.n(r),
                n = i(777491);
            class l {
                constructor(e = "full") {
                    this._quotes = null, this._quoteSessionSymbol = null, this._quoteSessionClientId = "", this._pausedQuoteSessionSymbol = null, this._quotesUpdate = new(o()), this._quoteSymbolChanged = new(o()), this._multiplexerType = e
                }
                setQuotesSessionSymbol(e) {
                    this._quoteSessionSymbol !== e && (this._pausedQuoteSessionSymbol = null,
                        this._quoteSessionClientId || (this._quoteSessionClientId = "series-" + (0, n.guid)()), this._unsubscribeQuoteSession(), e && this._subscribeQuoteSession(e), this._quoteSymbolChanged.fire())
                }
                quotesUpdate() {
                    return this._quotesUpdate
                }
                quoteSymbolChanged() {
                    return this._quoteSymbolChanged
                }
                quotes() {
                    return this._quotes
                }
                isPaused() {
                    return null !== this._pausedQuoteSessionSymbol
                }
                pause() {
                    null === this._pausedQuoteSessionSymbol && (this._pausedQuoteSessionSymbol = this._quoteSessionSymbol, this._unsubscribeQuoteSession())
                }
                resume() {
                    null !== this._pausedQuoteSessionSymbol && (this._subscribeQuoteSession(this._pausedQuoteSessionSymbol), this._pausedQuoteSessionSymbol = null)
                }
                destroy() {
                    this._unsubscribeQuoteSession()
                }
                _onUpdate(e, t) {
                    this._quotes = e && e.values || null, t && t.values && this._quotesUpdate.fire(e, t)
                }
                _subscribeQuoteSession(e) {
                    this._quoteSessionSymbol = e, (0, s.getQuoteSessionInstance)(this._multiplexerType).subscribe(this._quoteSessionClientId, this._quoteSessionSymbol, this._onUpdate.bind(this))
                }
                _unsubscribeQuoteSession() {
                    this._quoteSessionSymbol && ((0, s.getQuoteSessionInstance)(this._multiplexerType).unsubscribe(this._quoteSessionClientId, this._quoteSessionSymbol), this._quoteSessionSymbol = null, this._quotes = null)
                }
            }
        },
        98253: (e, t, i) => {
            "use strict";
            i.d(t, {
                SeriesAreaPaneView: () => a
            });
            var s = i(114123),
                r = i(906778),
                o = i(28035),
                n = i(583110),
                l = i(72945);
            class a extends l.SeriesSingleLinePaneView {
                renderer(e, t) {
                    this._invalidated && (this._updateImpl(), this._invalidated = !1);
                    const i = this._source.priceScale();
                    if (!i) return null;
                    const l = this._source.properties().childs().areaStyle.childs(),
                        a = l.transparency.value(),
                        h = {
                            simpleMode: !1,
                            barSpacing: this._model.timeScale().barSpacing(),
                            items: this._items,
                            lineColor: l.linecolor.value(),
                            lineStyle: l.linestyle.value(),
                            lineWidth: l.linewidth.value(),
                            isSeries: !0,
                            withMarkers: !1,
                            bottom: i.height(),
                            color1: (0, s.generateColor)(l.color1.value(), a),
                            color2: (0, s.generateColor)(l.color2.value(), a)
                        },
                        u = new o.CompositeRenderer;
                    return u.append(new r.PaneRendererArea(h)), this._model.selection().isSelected(this._source) && this._isMarkersEnabled && this._selectionData && u.append(new n.SelectionRenderer(this._selectionData)), u
                }
            }
        },
        196312: (e, t, i) => {
            "use strict";

            function s(e, t) {
                return 100 * (t - e) / Math.abs(e || 1)
            }
            i.d(t, {
                barPercentChange: () => s
            })
        },
        236368: (e, t, i) => {
            "use strict";
            i.d(t, {
                SeriesBarsPaneView: () => l
            });
            var s = i(28035),
                r = i(583110),
                o = i(70926),
                n = i(352566);
            class l extends o.SeriesBarCandlesPaneView {
                renderer(e, t) {
                    this._invalidated && (this._updateImpl(null), this._invalidated = !1);
                    const i = this._source.properties().childs(),
                        o = {
                            bars: this._bars,
                            barSpacing: this._model.timeScale().barSpacing(),
                            dontDrawOpen: i.barStyle.childs().dontDrawOpen.value(),
                            thinBars: 11 === i.style.value() ? i.rangeStyle.childs().thinBars.value() : i.barStyle.childs().thinBars.value()
                        },
                        l = new s.CompositeRenderer;
                    return l.append(new n.PaneRendererBars(o)), this._model.selection().isSelected(this._source) && this._isMarkersEnabled && this._selectionData && l.append(new r.SelectionRenderer(this._selectionData)), l
                }
                _createItem(e, t, i) {
                    const s = {
                        time: e,
                        open: NaN,
                        high: NaN,
                        low: NaN,
                        close: NaN,
                        color: i.barColor
                    };
                    return (0,
                        o.baseBarCandlesUpdater)(t, s) ? s : null
                }
            }
        },
        234052: (e, t, i) => {
            "use strict";
            i.d(t, {
                SeriesBaselinePaneView: () => m
            });
            var s = i(114123),
                r = i(28035),
                o = i(86441),
                n = i(5531),
                l = i(204652),
                a = i(837291),
                h = i(923195),
                u = i(904244),
                d = i(858063);
            class c extends u.MediaCoordinatesPaneRenderer {
                constructor() {
                    super(...arguments), this._data = null
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e) {
                    if (null === this._data) return null;
                    const {
                        items: t,
                        topLineWidth: i,
                        bottomLineWidth: s
                    } = this._data, r = (0, a.interactionTolerance)().series + (i + s) / 4, n = (0, h.lowerbound)(t, e, ((e, t) => e.x <= t.x)), u = Math.max(1, n - 1), c = Math.min(t.length - 1, n + 1);
                    for (let i = u; i <= c; ++i) {
                        const s = t[i - 1],
                            n = t[i],
                            {
                                distance: a
                            } = (0, l.distanceToSegment)(new o.Point(s.x, s.y), new o.Point(n.x, n.y), new o.Point(e.x, e.y));
                        if (a <= r) return new d.HitTestResult(d.HitTestResult.REGULAR)
                    }
                    return null
                }
                _drawImpl(e) {
                    if (null === this._data) return;
                    const {
                        items: t,
                        baseLevelCoordinate: i,
                        bottom: s,
                        bottomFillColor1: r,
                        bottomFillColor2: l,
                        topFillColor1: h,
                        topFillColor2: u,
                        topLineColor: d,
                        bottomLineColor: c,
                        topLineWidth: _,
                        bottomLineWidth: p
                    } = this._data;
                    if (! function(e) {
                            if (0 === e.length) return !1;
                            const t = e.findIndex((e => (0, a.coordinateIsValid)(e.y)));
                            if (-1 === t) return !1;
                            let i = e.length - 1;
                            for (; i > t && !(0, a.coordinateIsValid)(e[i].y);) i--;
                            return !(t > i)
                        }(t)) return;
                    const m = e.context,
                        {
                            topItems: v,
                            bottomItems: y
                        } = function(e, t) {
                            const i = [],
                                s = [];
                            let r = null;
                            for (let l = 0; l < e.length; l++) {
                                let h = e[l];
                                const u = e[l + 1] || {};
                                if ((0, a.coordinateIsValid)(h.y)) h.y <= t && i.push(h), h.y >= t && s.push(h), r = h;
                                else {
                                    if (null === r) continue;
                                    h = r
                                }
                                if ((0, a.coordinateIsValid)(u.y) && (h.y > t && u.y < t || h.y < t && u.y > t))
                                    if (Math.abs(h.x - u.x) < 1) {
                                        const e = new o.Point(h.x, t);
                                        i.push(e), s.push(e)
                                    } else {
                                        const e = (0, n.intersectLineSegments)(h, u, new o.Point(h.x, t), new o.Point(u.x, t));
                                        if (null !== e) {
                                            const t = h.add(u.subtract(h).scaled(e));
                                            i.push(t), s.push(t)
                                        }
                                    }
                            }
                            return {
                                topItems: i,
                                bottomItems: s
                            }
                        }(t, i);
                    m.lineCap = "round", m.lineJoin = "round", 0 !== v.length && (m.beginPath(), m.moveTo(v[0].x, i), this._makeLine(m, v, !0, 0), m.closePath(), m.fillStyle = this._makeLinearGradient(m, h, u, i - s, i), m.fill(), m.beginPath(), this._makeLine(m, v, !1, 0), m.lineWidth = _, m.strokeStyle = d, m.stroke()), 0 !== y.length && (m.beginPath(), m.moveTo(y[0].x, i), this._makeLine(m, y, !0, 1), m.closePath(), m.fillStyle = this._makeLinearGradient(m, r, l, i, i + s), m.fill(), m.beginPath(), this._makeLine(m, y, !1, 1), m.lineWidth = p, m.strokeStyle = c, m.stroke())
                }
                _makeLine(e, t, i, s) {
                    if (null === this._data) return;
                    const r = t.findIndex((e => (0, a.coordinateIsValid)(e.y)));
                    if (-1 === r) return;
                    const {
                        barSpacing: o,
                        baseLevelCoordinate: n
                    } = this._data, l = .25 * o;
                    let h;
                    const u = t.length;
                    for (let o = r; o < u; o++) {
                        const u = t[o],
                            d = t[o + 1] || {};
                        if ((0, a.coordinateIsValid)(u.y)) {
                            if (0 === s) {
                                if (h && h.y >= n && u.y >= n) {
                                    e.moveTo(u.x, u.y);
                                    continue
                                }
                            } else if (h && h.y <= n && u.y <= n) {
                                e.moveTo(u.x, u.y);
                                continue
                            }
                            if (h && (0, a.coordinateIsValid)(h.y)) e.lineTo(u.x, u.y), i && !(0, a.coordinateIsValid)(d.y) && e.lineTo(u.x, n);
                            else if (d && (0, a.coordinateIsValid)(d.y)) i ? (o !== r && e.lineTo(u.x, n), e.lineTo(u.x, u.y)) : e.moveTo(u.x, u.y);
                            else if (i) {
                                if (0 === o) continue;
                                o !== r && e.lineTo(u.x - l, n), e.lineTo(u.x - l, u.y), e.lineTo(u.x + l, u.y), e.lineTo(u.x + l, n)
                            } else e.moveTo(u.x - l, u.y), e.lineTo(u.x + l, u.y);
                            h = u
                        }
                    }
                }
                _makeLinearGradient(e, t, i, s, r) {
                    const o = e.createLinearGradient(0, s, 0, r);
                    return o.addColorStop(0, t), o.addColorStop(1, i), o
                }
            }
            var _ = i(583110),
                p = i(72945);
            class m extends p.SeriesSingleLinePaneView {
                constructor() {
                    super(...arguments), this._renderer = new c, this._topFillColor1 = "", this._topFillColor2 = "", this._bottomFillColor1 = "", this._bottomFillColor2 = "", this._topLineColor = "", this._bottomLineColor = "", this._topLineWidth = 0, this._bottomLineWidth = 0, this._barSpacing = 0, this._bottom = 0, this._baseLevelCoordinate = 0
                }
                renderer(e, t) {
                    this._invalidated && (this._updateImpl(), this._invalidated = !1), this._renderer.setData({
                        items: this._items,
                        topFillColor1: this._topFillColor1,
                        topFillColor2: this._topFillColor2,
                        bottomFillColor1: this._bottomFillColor1,
                        bottomFillColor2: this._bottomFillColor2,
                        topLineColor: this._topLineColor,
                        bottomLineColor: this._bottomLineColor,
                        topLineWidth: this._topLineWidth,
                        bottomLineWidth: this._bottomLineWidth,
                        barSpacing: this._barSpacing,
                        baseLevelCoordinate: this._baseLevelCoordinate,
                        bottom: this._bottom
                    });
                    const i = new r.CompositeRenderer;
                    return i.append(this._renderer), this._model.selection().isSelected(this._source) && this._isMarkersEnabled && this._selectionData && i.append(new _.SelectionRenderer(this._selectionData)), i
                }
                _updateImpl() {
                    super._updateImpl();
                    const e = this._source.priceScale();
                    if (!e) return;
                    const t = this._source.properties().childs().baselineStyle.childs(),
                        i = t.transparency.value();
                    this._topFillColor1 = (0, s.generateColor)(t.topFillColor1.value(), i), this._topFillColor2 = (0, s.generateColor)(t.topFillColor2.value(), i), this._bottomFillColor1 = (0, s.generateColor)(t.bottomFillColor1.value(), i), this._bottomFillColor2 = (0, s.generateColor)(t.bottomFillColor2.value(), i), this._topLineColor = t.topLineColor.value(), this._bottomLineColor = t.bottomLineColor.value(), this._topLineWidth = t.topLineWidth.value(), this._bottomLineWidth = t.bottomLineWidth.value(), this._barSpacing = this._model.timeScale().barSpacing(), this._bottom = e.height(), this._baseLevelCoordinate = Math.round(this._bottom * (Math.abs(100 - t.baseLevelPercentage.value()) / 100))
                }
            }
        },
        130737: (e, t, i) => {
            "use strict";
            i.d(t, {
                SeriesWaterlinePaneView: () => l
            });
            var s = i(594358),
                r = i(854905),
                o = i(858063),
                n = i(631586);
            class l extends s.HorizontalLinePaneView {
                constructor(e) {
                    super(), this._getters = e;
                    const t = {
                        cursorType: r.PaneCursorType.VerticalResize,
                        activeItem: 0,
                        areaName: o.AreaName.SourceItemMove
                    };
                    this._lineRenderer.setHitTest(new o.HitTestResult(o.HitTestResult.MOVEPOINT, t)), this._lineRendererData.visible = !0, this._lineRendererData.linestyle = n.LINESTYLE_SPARSE_DOTTED
                }
                _updateImpl() {
                    const {
                        baseLevelPercentage: e,
                        paneHeight: t,
                        color: i
                    } = this._getters, s = Math.abs(100 - e());
                    this._lineRendererData.y = Math.round(t() * (s / 100)), this._lineRendererData.color = i()
                }
            }
        },
        963121: (e, t, i) => {
            "use strict";
            i.d(t, {
                SeriesCandlesPaneView: () => a
            });
            var s = i(28035),
                r = i(837291),
                o = i(583110),
                n = i(70926),
                l = i(916716);
            class a extends n.SeriesBarCandlesPaneView {
                renderer(e, t) {
                    this._invalidated && (this._updateImpl(null), this._invalidated = !1);
                    const i = this._source.priceScale();
                    if (!i) return null;
                    const n = this._source.properties().childs().candleStyle.childs(),
                        a = this._model.timeScale().barSpacing(),
                        h = {
                            bars: this._bars,
                            barSpacing: a,
                            bodyVisible: n.drawBody.value(),
                            borderVisible: n.drawBorder.value(),
                            borderColor: n.borderColor.value(),
                            wickColor: n.wickColor.value(),
                            barWidth: (0, r.optimalBarWidth)(a),
                            wickVisible: n.drawWick.value(),
                            isPriceScaleInverted: i.isInverted()
                        },
                        u = new s.CompositeRenderer;
                    return u.append(new l.PaneRendererCandles(h)), this._model.selection().isSelected(this._source) && this._isMarkersEnabled && this._selectionData && u.append(new o.SelectionRenderer(this._selectionData)), u
                }
                _createItem(e, t, i) {
                    const s = {
                        time: e,
                        open: NaN,
                        high: NaN,
                        low: NaN,
                        close: NaN,
                        color: i.barColor,
                        borderColor: i.barBorderColor,
                        wickColor: i.barWickColor,
                        hollow: i.isBarHollow
                    };
                    return (0, n.baseBarCandlesUpdater)(t, s) ? s : null
                }
            }
        },
        914431: (e, t, i) => {
            "use strict";
            i.d(t, {
                SeriesColumnsPaneView: () => _
            });
            var s = i(650151),
                r = i(86441),
                o = i(495046),
                n = i(203308),
                l = i(858063),
                a = i(28035),
                h = i(812363),
                u = i(847314),
                d = i(583110),
                c = i(910008);
            class _ {
                constructor(e, t) {
                    this._items = [], this._invalidated = !0, this._isMarkersEnabled = (0, o.enabled)("source_selection_markers"), this._selectionData = null, this._histogramBase = 0, this._source = e, this._model = t, this._selectionIndexer = new u.SelectionIndexes(t.timeScale())
                }
                update() {
                    this._invalidated = !0
                }
                renderer(e, t) {
                    this._invalidated && (this._updateImpl(), this._invalidated = !1);
                    const i = {
                            barSpacing: this._model.timeScale().barSpacing(),
                            items: this._items,
                            lineColor: "",
                            histogramBase: this._histogramBase
                        },
                        s = new a.CompositeRenderer;
                    return s.append(new c.PaneRendererColumns(i)), this._model.selection().isSelected(this._source) && this._isMarkersEnabled && this._selectionData && s.append(new d.SelectionRenderer(this._selectionData)), s
                }
                _updateImpl() {
                    this._items = [];
                    const e = this._model.timeScale(),
                        t = this._source.priceScale();
                    if (e.isEmpty() || !t || t.isEmpty()) return;
                    const i = e.visibleBarsStrictRange();
                    if (null === i) return;
                    if (0 === this._source.bars().size()) return;
                    const o = this._source.nearestIndex(i.firstBar(), h.PlotRowSearchMode.NearestRight),
                        a = this._source.nearestIndex(i.lastBar(), h.PlotRowSearchMode.NearestLeft);
                    if (void 0 === o || void 0 === a) return;
                    const u = this._source.bars().range(o, a),
                        d = this._source.barColorer(),
                        c = {},
                        _ = this._source.barFunction(),
                        p = u.reduce(((e, t, s) => {
                            const o = _(s);
                            if (!(0, n.default)(o)) return e;
                            c.value = s;
                            let l = this._source.precomputedBarStyle(s);
                            void 0 === l && (l = d.barStyle(t, !1, c), this._source.setPrecomputedBarStyle(s, l));
                            const a = new r.Point(t, o);
                            return a.style = l, a.timePointIndex = t, this._items.push(a), c.previousValue = s, i.contains(t) && null != e ? e : o
                        }), null);
                    if (null !== p)
                        if (t.pointsArrayToCoordinates(this._items, p), e.timedValuesToCoordinates(this._items), this._histogramBase = t.isInverted() ? 0 : t.height(), this._model.selection().isSelected(this._source)) {
                            const i = this._selectionIndexer.indexes();
                            this._selectionData = {
                                points: [],
                                bgColors: [],
                                visible: !0,
                                barSpacing: e.barSpacing(),
                                hittestResult: l.HitTestResult.REGULAR
                            };
                            const o = (0, s.ensureNotNull)(this._model.paneForSource(this._source)).height();
                            this._selectionData.hittestResult = l.HitTestResult.REGULAR;
                            for (let s = 0; s < i.length; s++) {
                                const n = i[s],
                                    l = this._source.bars().valueAt(n);
                                if (null === l) continue;
                                const a = _(l),
                                    h = e.indexToCoordinate(n),
                                    u = t.priceToCoordinate(a, p);
                                this._selectionData.points.push(new r.Point(h, u)), this._selectionData.bgColors.push(this._model.backgroundColorAtYPercentFromTop(u / o))
                            }
                        } else this._selectionIndexer.clear()
                }
            }
        },
        978444: (e, t, i) => {
            "use strict";
            i.d(t, {
                SeriesHiLoPaneView: () => v
            });
            var s = i(448874),
                r = i(538708),
                o = i(923195),
                n = i(837291),
                l = i(858063),
                a = i(904244);
            class h extends a.MediaCoordinatesPaneRenderer {
                constructor() {
                    super(...arguments), this._data = null, this._barWidth = null
                }
                setData(e) {
                    this._data = e, this._barWidth = Math.max(1, Math.round((0, n.optimalHiLoWidth)(e.barSpacing)))
                }
                hitTest(e) {
                    if (null === this._data || null === this._barWidth) return null;
                    const t = this._data.bars,
                        i = .5 * this._data.barSpacing;
                    if (0 === t.length) return null;
                    if (e.x < t[0].time - i) return null;
                    if (e.x > t[t.length - 1].time + i) return null;
                    const s = t[(0, o.lowerbound)(t, e.x - i, ((e, t) => e.time < t))];
                    if (e.x < s.time - i || e.x > s.time + i) return null;
                    const r = (0, n.interactionTolerance)().series + this._barWidth / 2,
                        a = Math.min(s.high, s.low),
                        h = Math.max(s.high, s.low),
                        u = this._data.fontSize;
                    return a - r - u <= e.y && e.y <= a + r || h - r <= e.y && e.y <= h + r + u ? new l.HitTestResult(l.HitTestResult.REGULAR) : null
                }
                _drawImpl(e) {
                    if (null === this._data || null === this._barWidth) return;
                    const {
                        font: t,
                        fontSize: i,
                        labelColor: s,
                        bars: o,
                        inverted: n,
                        labelsPadding: l
                    } = this._data, a = e.context;
                    a.textAlign = "center", a.fillStyle = s, a.font = (0, r.makeFont)(i, t);
                    for (let e = 0; e < o.length; ++e) {
                        const t = o[e],
                            i = Math.round(Math.min(t.high, t.low)),
                            s = Math.round(Math.max(t.high, t.low)),
                            r = Math.round(t.time);
                        a.textBaseline = "alphabetic", a.fillText(n ? t.lowLabel : t.highLabel, r, i - l), a.textBaseline = "top", a.fillText(n ? t.highLabel : t.lowLabel, r, s + l)
                    }
                }
            }
            var u = i(28035),
                d = i(583110),
                c = i(623331),
                _ = i(741341),
                p = i(916716),
                m = i(70926);
            class v extends m.SeriesBarCandlesPaneView {
                constructor(e, t) {
                    super(e, t), this._labelsRenderer = new h, this._candlesRenderer = new p.PaneRendererCandles, this._maxLengthLabel = "", this._calculateFontSize = (0, s.default)(((e, t) => Math.max(1, (0, o.lowerboundExt)((e => e + 1), null, (i => {
                        const s = (0, r.makeFont)(i, c.CHART_FONT_FAMILY);
                        return (0, _.measureText)(e, s).width <= t
                    }), 7, 36))), ((e, t) => `${e}/${t}`))
                }
                renderer(e, t, i) {
                    const s = this._source.priceScale();
                    if (!s || s.isEmpty()) return null;
                    const r = new u.CompositeRenderer,
                        o = this._needLabels(),
                        l = this._source.properties().childs().hiloStyle.childs(),
                        a = this._model.timeScale().barSpacing();
                    if (this._invalidated) {
                        const e = this._source.formatter();
                        this._maxLengthLabel = "", this._updateImpl({
                            generateLabels: o,
                            formatter: e
                        }), this._invalidated = !1
                    }
                    if (this._candlesRenderer.setData({
                            bars: this._bars,
                            wickVisible: !1,
                            bodyVisible: l.drawBody.value(),
                            barSpacing: a,
                            borderVisible: l.showBorders.value(),
                            barWidth: (0, n.optimalHiLoWidth)(a)
                        }), r.append(this._candlesRenderer), o) {
                        const e = this._calculateLabelFontSize();
                        e && e >= 8 && (this._labelsRenderer.setData({
                            bars: this._bars,
                            barSpacing: a,
                            font: c.CHART_FONT_FAMILY,
                            fontSize: e,
                            labelColor: l.labelColor.value(),
                            inverted: s.isInverted(),
                            labelsPadding: .4 * e
                        }), r.append(this._labelsRenderer))
                    }
                    return this._model.selection().isSelected(this._source) && this._isMarkersEnabled && this._selectionData && r.append(new d.SelectionRenderer(this._selectionData)), r
                }
                topPixelMargin() {
                    return this._margin()
                }
                bottomPixelMargin() {
                    return this._margin()
                }
                _createItem(e, t, i, s) {
                    const r = {
                        time: e,
                        open: NaN,
                        high: NaN,
                        low: NaN,
                        close: NaN,
                        color: i.barColor,
                        borderColor: i.barBorderColor,
                        hollow: !1,
                        highLabel: "",
                        lowLabel: ""
                    };
                    if (!(0, m.baseBarCandlesUpdater)(t, r)) return null;
                    if (r.open = r.high, r.close = r.low, s.generateLabels) {
                        const e = s.formatter.format(r.high),
                            t = s.formatter.format(r.low);
                        r.highLabel = e, r.lowLabel = t;
                        const i = (e.length > t.length ? e : t).replace(/\d/g, "0");
                        i.length > this._maxLengthLabel.length && (this._maxLengthLabel = i)
                    }
                    return r
                }
                _margin() {
                    if (this._needLabels()) {
                        const e = this._calculateLabelFontSize();
                        if (e && e >= 8) return 1.4 * e
                    }
                    return 0
                }
                _calculateLabelFontSize() {
                    return "" === this._maxLengthLabel ? null : this._calculateFontSize(this._maxLengthLabel, Math.floor(this._model.timeScale().barSpacing()) - 2)
                }
                _needLabels() {
                    const e = this._source.properties().childs().hiloStyle.childs().showLabels.value(),
                        t = this._model.timeScale().barSpacing();
                    return e && t > 5
                }
            }
        },
        568631: (e, t, i) => {
            "use strict";
            i.d(t, {
                SeriesHollowCandlesPaneView: () => a
            });
            var s = i(28035),
                r = i(837291),
                o = i(583110),
                n = i(916716),
                l = i(963121);
            class a extends l.SeriesCandlesPaneView {
                renderer(e, t) {
                    this._invalidated && (this._updateImpl(null), this._invalidated = !1);
                    const i = this._source.priceScale();
                    if (!i) return null;
                    const l = this._source.properties().childs().hollowCandleStyle.childs(),
                        a = this._model.timeScale().barSpacing(),
                        h = {
                            bars: this._bars,
                            barSpacing: a,
                            bodyVisible: l.drawBody.value(),
                            borderVisible: l.drawBorder.value(),
                            borderColor: l.borderColor.value(),
                            wickColor: l.wickColor.value(),
                            barWidth: (0, r.optimalBarWidth)(a),
                            wickVisible: l.drawWick.value(),
                            isPriceScaleInverted: i.isInverted()
                        },
                        u = new s.CompositeRenderer;
                    return u.append(new n.PaneRendererCandles(h)), this._model.selection().isSelected(this._source) && this._isMarkersEnabled && this._selectionData && u.append(new o.SelectionRenderer(this._selectionData)), u
                }
            }
        },
        29911: (e, t, i) => {
            "use strict";
            i.d(t, {
                SeriesLinePaneView: () => u
            });
            var s = i(858063),
                r = i(28035),
                o = i(943498),
                n = i(764372),
                l = i(583110),
                a = i(933813),
                h = i(72945);
            class u extends h.SeriesSingleLinePaneView {
                renderer(e, t) {
                    this._invalidated && (this._updateImpl(), this._invalidated = !1);
                    const i = this._source.properties().childs().lineStyle.childs(),
                        h = {
                            barSpacing: this._model.timeScale().barSpacing(),
                            items: this._items,
                            lineColor: i.color.value(),
                            lineStyle: i.linestyle.value(),
                            withMarkers: i.styleType.value() === a.STYLE_LINE_TYPE_MARKERS,
                            lineWidth: i.linewidth.value(),
                            simpleMode: !0,
                            hitTestResult: s.HitTestResult.REGULAR
                        };
                    let u, d;
                    if (u = i.styleType.value() === a.STYLE_LINE_TYPE_STEP ? new n.PaneRendererStepLine(h) : new o.PaneRendererLine(h), this._model.selection().isSelected(this._source) && this._isMarkersEnabled && this._selectionData) {
                        const e = new r.CompositeRenderer;
                        e.append(u), e.append(new l.SelectionRenderer(this._selectionData)), d = e
                    } else d = u;
                    return d
                }
            }
        },
        70926: (e, t, i) => {
            "use strict";
            i.d(t, {
                baseBarCandlesUpdater: () => h,
                SeriesBarCandlesPaneView: () => u
            });
            var s = i(86441),
                r = i(495046),
                o = i(847314),
                n = i(812363),
                l = i(858063);

            function a(e) {
                return null != e
            }

            function h(e, t) {
                const i = e[1],
                    s = e[2],
                    r = e[3],
                    o = e[4];
                return !!(a(i) && a(s) && a(r) && a(o)) && (t.open = i, t.high = s, t.low = r, t.close = o, !0)
            }
            class u {
                constructor(e, t) {
                    this._bars = [], this._invalidated = !0, this._isMarkersEnabled = (0, r.enabled)("source_selection_markers"), this._selectionData = null, this._source = e, this._model = t, this._selectionIndexer = new o.SelectionIndexes(t.timeScale())
                }
                items() {
                    return this._bars
                }
                update() {
                    this._invalidated = !0
                }
                _updateImpl(e) {
                    const t = this._model.timeScale(),
                        i = this._source.priceScale();
                    if (this._bars = [], t.isEmpty() || !i || i.isEmpty()) return;
                    const r = t.visibleBarsStrictRange();
                    if (null === r) return;
                    if (0 === this._source.bars().size()) return;
                    let o = this._source.nearestIndex(r.firstBar(), n.PlotRowSearchMode.NearestRight);
                    const a = this._source.nearestIndex(r.lastBar(), n.PlotRowSearchMode.NearestLeft);
                    if (void 0 === o || void 0 === a) return;
                    for (; o <= a; o++) {
                        if (null !== this._source.bars().valueAt(o)) break
                    }
                    if (o > a) return;
                    const h = this._source.bars().range(o, a),
                        u = this._source.barColorer(),
                        d = {};
                    if (h.each(((t, i) => {
                            d.value = i;
                            let s = this._source.precomputedBarStyle(i);
                            void 0 === s && (s = u.barStyle(t, !1, d), this._source.setPrecomputedBarStyle(i, s));
                            const r = this._createItem(Math.round(t), i, s, e);
                            return !!r && (d.previousValue = i, this._bars.push(r), !1)
                        })), 0 === this._bars.length) return;
                    const c = this._source.firstValue();
                    if (null !== c)
                        if (i.barPricesToCoordinates(this._bars, c), t.barIndexesToCoordinates(this._bars), this._model.selection().isSelected(this._source)) {
                            const e = this._selectionIndexer.indexes();
                            this._selectionData = {
                                points: [],
                                bgColors: [],
                                visible: !0,
                                hittestResult: l.HitTestResult.REGULAR,
                                barSpacing: t.barSpacing()
                            };
                            const r = this._model.paneForSource(this._source);
                            if (!r) return;
                            const o = r.height();
                            for (let r = 0; r < e.length; r++) {
                                const n = e[r],
                                    l = this._source.bars().valueAt(n);
                                if (null === l) continue;
                                const a = l[1],
                                    h = l[4];
                                if (null == a || null == h) continue;
                                const u = .5 * (a + h),
                                    d = t.indexToCoordinate(n),
                                    _ = i.priceToCoordinate(u, c);
                                this._selectionData.points.push(new s.Point(d, _)), this._selectionData.bgColors.push(this._model.backgroundColorAtYPercentFromTop(_ / o))
                            }
                        } else this._selectionIndexer.clear()
                }
            }
        },
        72945: (e, t, i) => {
            "use strict";
            i.d(t, {
                SeriesSingleLinePaneView: () => d
            });
            var s = i(203308),
                r = i(86441),
                o = i(650151),
                n = i(495046),
                l = i(847314),
                a = i(812363),
                h = i(858063),
                u = i(923195);
            class d {
                constructor(e, t) {
                    this._items = [], this._invalidated = !0, this._isMarkersEnabled = (0, n.enabled)("source_selection_markers"), this._selectionData = null, this._source = e, this._model = t, this._selectionIndexer = new l.SelectionIndexes(t.timeScale())
                }
                update() {
                    this._invalidated = !0
                }
                _updateImpl() {
                    var e, t;
                    this._items = [];
                    const i = this._model.timeScale(),
                        n = this._source.priceScale();
                    if (i.isEmpty() || !n || n.isEmpty()) return;
                    const l = i.visibleBarsStrictRange();
                    if (null === l) return;
                    if (0 === this._source.bars().size()) return;
                    const d = null !== (e = this._source.nearestIndex(l.firstBar() - 1, a.PlotRowSearchMode.NearestLeft)) && void 0 !== e ? e : l.firstBar() - 1,
                        c = null !== (t = this._source.nearestIndex(l.lastBar() + 1, a.PlotRowSearchMode.NearestRight)) && void 0 !== t ? t : l.lastBar() + 1,
                        _ = this._source.barFunction();
                    let p = null;
                    const m = this._model.timeScale().barSpacing();
                    if (m < .1 && this._source.supportsPressedChunks()) {
                        p = this._source.firstValue();
                        const e = this._source.pressedChunks(m, (0, o.ensureNotNull)(this._source.priceSource())),
                            t = (0, u.lowerbound)(e, d, ((e, t) => e.startTime < t)),
                            i = Math.min(e.length - 1, (0, u.lowerbound)(e, c, ((e, t) => e.endTime < t)));
                        for (let s = t; s <= i; s++) {
                            const t = e[s];
                            [t.open, t.high, t.low, t.close].forEach((e => {
                                const i = new r.Point(t.startTime, e);
                                this._items.push(i)
                            }))
                        }
                    } else {
                        p = this._source.bars().range(d, c).reduce(((e, t, i) => {
                            const o = _(i);
                            if (!(0, s.default)(o)) return e;
                            const n = new r.Point(t, o);
                            return this._items.push(n), l.contains(t) ? null != e ? e : o : e
                        }), null)
                    }
                    if (null !== p)
                        if (n.pointsArrayToCoordinates(this._items, p), i.timedValuesToCoordinates(this._items), this._model.selection().isSelected(this._source)) {
                            const e = this._selectionIndexer.indexes();
                            this._selectionData = {
                                points: [],
                                bgColors: [],
                                visible: !0,
                                barSpacing: i.barSpacing(),
                                hittestResult: h.HitTestResult.REGULAR
                            };
                            const t = (0, o.ensureNotNull)(this._model.paneForSource(this._source)).height();
                            this._selectionData.hittestResult = h.HitTestResult.REGULAR;
                            for (let s = 0; s < e.length; s++) {
                                const o = e[s],
                                    l = this._source.bars().valueAt(o);
                                if (null === l) continue;
                                const a = _(l),
                                    h = i.indexToCoordinate(o),
                                    u = n.priceToCoordinate(a, p);
                                this._selectionData.points.push(new r.Point(h, u)), this._selectionData.bgColors.push(this._model.backgroundColorAtYPercentFromTop(u / t))
                            }
                        } else this._selectionIndexer.clear();
                    else this._items = []
                }
            }
        },
        418597: (e, t, i) => {
            "use strict";
            i.d(t, {
                calculateColor: () => C,
                SeriesValuesProvider: () => P
            });
            var s = i(650151),
                r = i(150335),
                o = i(724377),
                n = i(777754),
                l = i(638456),
                a = (i(495046), i(114123)),
                h = i(768038),
                u = i(812363),
                d = i(480071),
                c = i(561068),
                _ = i(738023),
                p = i(424061),
                m = i(196312),
                v = i(801750),
                y = i(414805),
                f = i(943546);
            const g = l.CheckMobile.any(),
                b = g && !1,
                S = new c.PercentageFormatter,
                w = new _.VolumeFormatter(2),
                x = `${f.notAvailable} (${f.notAvailable}%)`;

            function C(e, t) {
                const i = (0, o.parseRgb)(t),
                    s = (0, o.parseRgb)(e);
                return (0, o.distanceRgb)(i, s) < 70 ? (0, o.rgbToHexString)((0, o.invertRgb)(i)) : t
            }
            class P {
                constructor(e, t) {
                    this._series = e, this._model = t, this._emptyValues = [{
                        title: n.t(null, void 0, i(539280)),
                        visible: !1,
                        value: "",
                        index: 0,
                        id: ""
                    }, {
                        title: n.t(null, void 0, i(330777)),
                        visible: !1,
                        value: "",
                        index: 1,
                        id: ""
                    }, {
                        title: n.t(null, void 0, i(608136)),
                        visible: !1,
                        value: "",
                        index: 2,
                        id: ""
                    }, {
                        title: n.t(null, void 0, i(931691)),
                        visible: !1,
                        value: "",
                        index: 3,
                        id: ""
                    }, {
                        title: "",
                        visible: !1,
                        value: "",
                        index: 4,
                        id: ""
                    }, {
                        title: "",
                        visible: !1,
                        value: "",
                        index: 5,
                        id: ""
                    }, {
                        title: n.t(null, void 0, i(349329)),
                        visible: !1,
                        value: "",
                        index: 6,
                        id: ""
                    }, {
                        title: n.t(null, {
                            context: "study"
                        }, i(32819)),
                        visible: !1,
                        value: "",
                        index: 7,
                        id: ""
                    }]
                }
                getItems() {
                    return this._emptyValues
                }
                getValues(e) {
                    var t;
                    const i = this._showLastPriceAndChangeOnly(),
                        o = this._emptyValues.map((e => ({ ...e,
                            visible: !i
                        })));
                    o[0].value = f.notAvailable,
                        o[1].value = f.notAvailable, o[2].value = f.notAvailable, o[3].value = f.notAvailable, o[6].value = x, o[7].value = f.notAvailable, o[5].visible = !1;
                    const n = o[4];
                    if (n.value = f.notAvailable, n.visible = !1, this._model.timeScale().isEmpty() || 0 === this._series.bars().size() || this._series.priceScale().isEmpty()) return o;
                    (0, r.isNumber)(e) || (e = (0, s.ensureNotNull)(this._series.data().last()).index);
                    const l = this._series.nearestIndex(e, u.PlotRowSearchMode.NearestLeft);
                    if (void 0 === l) return o;
                    const d = this._series.data().valueAt(l),
                        c = this._model.backgroundTopColor().value();
                    if (null === d) return o;
                    const _ = d[1],
                        m = d[2],
                        y = d[3],
                        g = d[4],
                        {
                            values: P
                        } = this._changesData(g, l, i),
                        I = (0, v.getPriceValueFormatterForSource)(this._series);
                    if ((0, v.shouldBeFormattedAsPercent)(this._series) || (0, v.shouldBeFormattedAsIndexedTo100)(this._series)) o[6].value = "";
                    else if (void 0 !== P) {
                        const e = this._series.formatter();
                        o[6].value = (0, h.forceLTRStr)(`${e.format(P.change,!0)} (${S.format(P.percentChange,!0)})`)
                    }
                    if (i) o[5].value = null == g ? f.notAvailable : I(g), o[5].visible = !0, o[6].visible = !0;
                    else {
                        o[0].value = null == _ ? f.notAvailable : I(_), o[1].value = null == m ? f.notAvailable : I(m), o[2].value = null == y ? f.notAvailable : I(y), o[3].value = null == g ? f.notAvailable : I(g), o[4].value = I(this._series.barFunction()(d));
                        const e = d[5];
                        (0, r.isNumber)(e) ? o[7].value = w.format(e): o[7].visible = !1
                    }
                    let T = null;
                    if (i && !b) T = void 0 === P || P.change >= 0 ? p.SeriesBarColorer.upColor(this._series.properties()) : p.SeriesBarColorer.downColor(this._series.properties());
                    else {
                        const e = this._series.barColorer().barStyle(l, !1);
                        T = C(c, null !== (t = e.barBorderColor) && void 0 !== t ? t : e.barColor)
                    }
                    T = (0, a.resetTransparency)(C(c, T));
                    for (const e of o) e.color = T;
                    return o
                }
                _showLastPriceAndChangeOnly() {
                    return g && (null === this._model.crossHairSource().pane || (0, y.isLineToolName)(d.tool.value()) || null !== this._model.lineBeingEdited())
                }
                _changesData(e, t, i) {
                    var s;
                    if (i && !b) {
                        const e = this._series.quotes();
                        if (null !== e) return {
                            values: {
                                change: null !== e.change ? e.change : 0,
                                percentChange: null !== e.change_percent ? e.change_percent : 0
                            }
                        }
                    } else {
                        const i = this._series.data().search(t - 1, u.PlotRowSearchMode.NearestLeft),
                            r = null !== (s = null == i ? void 0 : i.value[4]) && void 0 !== s ? s : null;
                        if (null !== r && null != e) return {
                            values: {
                                change: e - r,
                                percentChange: (0, m.barPercentChange)(r, e)
                            }
                        }
                    }
                    return {}
                }
            }
        },
        903258: (e, t, i) => {
            "use strict";
            i.d(t, {
                financialPeriodToString: () => o,
                financialPeriodToShortString: () => n
            });
            var s = i(650151),
                r = i(777754);

            function o(e) {
                switch (e) {
                    case "FQ":
                        return r.t(null, void 0, i(908831));
                    case "FY":
                        return r.t(null, void 0, i(34314));
                    case "FH":
                        return r.t(null, void 0, i(512421));
                    case "TTM":
                        return r.t(null, void 0, i(794236))
                }(0, s.ensureNever)(e)
            }

            function n(e) {
                switch (e) {
                    case "FQ":
                        return r.t(null, void 0, i(99374));
                    case "FY":
                        return r.t(null, void 0, i(776550));
                    case "FH":
                        return r.t(null, void 0, i(924468));
                    case "TTM":
                        return r.t(null, void 0, i(794236))
                }(0, s.ensureNever)(e)
            }
        },
        157260: (e, t, i) => {
            "use strict";
            i.d(t, {
                Fundamental: () => f
            });
            var s = i(777754),
                r = i(373123),
                o = i(903258),
                n = i(83387);
            class l extends n.StudyPriceAxisView {
                constructor(e, t) {
                    super(e, t), this._fundamental = e
                }
                _updatePaneRendererData(e) {
                    e.text = "",
                        this._showPaneLabel() && (e.text = this._fundamental.labelTitle(), e.visible = !0)
                }
            }
            var a = i(471502);
            class h extends a.StudyPriceLineAxisView {
                constructor(e, t) {
                    super(e, t), this._model = e.model()
                }
                _isVisible() {
                    return this._model.properties().childs().scalesProperties.childs().showFundamentalLastValue.value() && this._study.properties().childs().styles.childs()[this._plotname].childs().trackPrice.value()
                }
            }
            var u = i(431235),
                d = i(263314);
            const c = s.t(null, void 0, i(490411));
            class _ extends u.StudyStatusProvider {
                sourceStatusText() {
                    const e = this._source.status();
                    return e.type === d.StudyStatusType.Error && (e.errorDescription.error.startsWith("resolve_error ") || e.errorDescription.error.startsWith("Symbol resolve error:")) ? c : super.sourceStatusText()
                }
            }
            var p = i(519872),
                m = i(884566),
                v = i(812363),
                y = i(168210);
            class f extends r.Study {
                constructor(e, t, i, s) {
                    super(e, t, i, s), this._linePlot = null;
                    const r = s.plots.findIndex((e => "line" === e.type));
                    if (-1 !== r) {
                        const e = s.plots[r],
                            i = t.childs().styles.childs()[e.id];
                        i.hasChild("plottype") && (this._linePlot = {
                            plotIndex: r,
                            plotType: i.childs().plottype
                        })
                    }
                }
                labelTitle() {
                    return this.title(!0)
                }
                createPriceAxisView(e) {
                    return new l(this, {
                        plotIndex: e
                    })
                }
                createPriceLineAxisView(e) {
                    return new h(this, e)
                }
                hasStateForAlert() {
                    return !1
                }
                titleInParts(e, t, i, s) {
                    return [this._title(!!e)]
                }
                statusProvider(e) {
                    return new _(this, this._model.properties().childs().scalesProperties.childs().textColor)
                }
                firstValue() {
                    var e;
                    const t = super.firstValue();
                    if (null !== t || null === this._linePlot || this._linePlot.plotType.value() !== p.LineStudyPlotStyle.StepLine && this._linePlot.plotType.value() !== p.LineStudyPlotStyle.StepLineWithDiamonds) return t;
                    const i = this._model.timeScale().visibleBarsStrictRange();
                    if (null === i) return null;
                    if (!this.properties().childs().visible.value() || !this.isActualInterval()) return this._ownFirstValue;
                    const s = this.data().search(i.firstBar() - 1, v.PlotRowSearchMode.NearestLeft, this._linePlot.plotIndex + 1);
                    return null === s ? null : null !== (e = s.value[this._linePlot.plotIndex + 1]) && void 0 !== e ? e : null
                }
                priceRange(e, t) {
                    let i = super.priceRange(e, t);
                    if (null === i) {
                        const e = this.firstValue();
                        null !== e && (i = this._postProcessPriceRange(new y.PriceRange(e, e)))
                    }
                    return i
                }
                _title(e) {
                    const t = this.metaInfo();
                    let r;
                    if (r = e ? t.shortDescription : t.description, void 0 !== t.financialPeriod) {
                        const n = e ? (0, o.financialPeriodToShortString)(t.financialPeriod) : (0, o.financialPeriodToString)(t.financialPeriod);
                        r = `${s.t(r,{context:"study"},i(168716))} · ${n}`
                    }
                    const n = this._titleInputs(!0);
                    return n.length > 0 && (r = `${s.t(n[0],{context:"study"},i(168716))} · ${r}`), r
                }
                _titleInputsOptions(e, t) {
                    return { ...super._titleInputsOptions(e, t),
                        skipOptionalEmptySymbolInputs: !0,
                        allowedInputTypes: ["symbol"]
                    }
                }
                _fillPrecalculatedAutoscaleInfo(e, t) {
                    const i = super._fillPrecalculatedAutoscaleInfo(e, t);
                    if (null !== this._linePlot && (this._linePlot.plotType.value() === p.LineStudyPlotStyle.StepLine || this._linePlot.plotType.value() === p.LineStudyPlotStyle.StepLineWithDiamonds)) {
                        const t = this.data().search(e, v.PlotRowSearchMode.NearestLeft);
                        if (null !== t) {
                            const e = t.value[this._linePlot.plotIndex + 1];
                            i.baseValueMinMax = (0,
                                m.mergeMinMax)(i.baseValueMinMax, {
                                min: e,
                                max: e
                            })
                        }
                    }
                    return i
                }
            }
        },
        274440: (e, t, i) => {
            "use strict";

            function s(e, t, i) {
                let s = e[`${t}#${i}`] || null;
                return null === s && (s = e[t] || null), null === s && Object.keys(e).forEach((i => {
                    null === s && i.startsWith(`${t}#`) && (s = e[i] || null)
                })), s
            }
            i.d(t, {
                getObsoleteIdeaSymbolInfo: () => s
            })
        },
        348406: (e, t, i) => {
            "use strict";
            i.d(t, {
                isNonSeriesStudy: () => o,
                NonSeriesStudy: () => n
            });
            var s = i(650151),
                r = i(373123);

            function o(e) {
                return e instanceof n
            }
            class n extends r.Study {
                clearData() {
                    this._customData = null, this._indexes = null
                }
                restoreData(e, t, i) {
                    super.restoreData(e), this._customData = t, this._indexes = i
                }
                state(e) {
                    const t = super.state(e);
                    return e && (t.nonSeriesData = this._customData, t.indexes = this._indexes), t
                }
                customData() {
                    return this._customData
                }
                _setPaneViews(e) {
                    this._paneViews = e, this.model().lightUpdate()
                }
                _onDataUpdated(e, t, i) {
                    null !== t && (t.indexes_replace ? ((0, s.assert)("nochange" !== i), this._indexes = i) : (this._customData = t.data, "nochange" !== i && (this._indexes = i))), super._onDataUpdated(e, t, i)
                }
            }
        },
        801874: (e, t, i) => {
            "use strict";
            i.d(t, {
                OverlayDataWindowView: () => u
            });
            var s = i(150335),
                r = i(194405),
                o = i(638456),
                n = i(414805),
                l = i(480071),
                a = i(155268);
            const h = o.CheckMobile.any();
            class u extends r.DataWindowView {
                constructor(e, t) {
                    super(), this._invalidated = !0, this._study = e, this._model = t, this._valueProvider = this._createValuesProvider(e, t), this._items = this._valueProvider.getItems().map((e => new r.DataWindowItem(e.id, e.title, ""))), this.update()
                }
                items() {
                    return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._items
                }
                update() {
                    this._invalidated = !0
                }
                study() {
                    return this._study
                }
                _updateImpl() {
                    this._header = this._study.title();
                    let e;
                    this._showLastPriceAndChangeOnly() ? e = this._study.data().lastIndex() : (e = this._model.crossHairSource().appliedIndex(), (0, s.isNumber)(e) || (e = this._study.data().lastIndex()));
                    const t = this._valueProvider.getValues(e);
                    for (let e = 0; e < t.length; ++e) {
                        const i = t[e],
                            s = this._items[e];
                        s.setValue(i.value), s.setVisible(i.visible), s.setColor(i.color)
                    }
                }
                _showLastPriceAndChangeOnly() {
                    return h && (null === this._model.crossHairSource().pane || (0, n.isLineToolName)(l.tool.value()) || null !== this._model.lineBeingEdited())
                }
                _createValuesProvider(e, t) {
                    return new a.StudyLegendValuesProvider(e, t)
                }
            }
        },
        814606: (e, t, i) => {
            "use strict";
            i.d(t, {
                OverlayLegendValuesProvider: () => x
            });
            var s = i(720444),
                r = i(150335),
                o = i(777754),
                n = i(638456),
                l = i(114123),
                a = i(768038),
                h = i(561068),
                u = i(418597),
                d = i(812363),
                c = i(480071),
                _ = i(196312),
                p = i(424061),
                m = i(801750),
                v = i(414805),
                y = i(943546);
            const f = n.CheckMobile.any(),
                g = f && !1,
                b = new h.PercentageFormatter,
                S = y.notAvailable,
                w = `${S} (${S}%)`;
            class x extends class {
                constructor(e, t) {
                    this._study = e, this._model = t, this._emptyValues = [{
                        title: o.t(null, void 0, i(539280)),
                        visible: !1,
                        value: "",
                        index: 0,
                        id: ""
                    }, {
                        title: o.t(null, void 0, i(330777)),
                        visible: !1,
                        value: "",
                        index: 1,
                        id: ""
                    }, {
                        title: o.t(null, void 0, i(608136)),
                        visible: !1,
                        value: "",
                        index: 2,
                        id: ""
                    }, {
                        title: o.t(null, void 0, i(931691)),
                        visible: !1,
                        value: "",
                        index: 3,
                        id: ""
                    }, {
                        title: "",
                        visible: !1,
                        value: "",
                        index: 4,
                        id: ""
                    }, {
                        title: "",
                        visible: !1,
                        value: "",
                        index: 5,
                        id: ""
                    }, {
                        title: o.t(null, void 0, i(349329)),
                        visible: !1,
                        value: "",
                        index: 6,
                        id: ""
                    }]
                }
                getItems() {
                    return this._emptyValues
                }
                getValues(e) {
                    var t;
                    const i = this._emptyValues.map((e => ({ ...e
                    })));
                    if (this._model.timeScale().isEmpty()) return i;
                    if (0 === this._study.data().size()) return i;
                    const s = this._showLastPriceAndChangeOnly();
                    if ((0, r.isNumber)(e) || (s ? e = this._study.data().lastIndex() : (e = this._model.crossHairSource().appliedIndex(), (0, r.isNumber)(e) || (e = this._study.data().lastIndex()))), null === e || !(0, r.isNumber)(e)) return i;
                    const o = this._study.data().search(e, d.PlotRowSearchMode.NearestLeft, 1),
                        n = this._model.backgroundTopColor().value();
                    if (null === o) return i;
                    const h = o.index,
                        c = o.value,
                        _ = c[1],
                        v = c[2],
                        y = c[3],
                        f = c[4];
                    i[0].value = S, i[1].value = S, i[2].value = S, i[3].value = S, i[6].value = w;
                    for (const e of i) e.visible = !s;
                    const x = i[4];
                    x.visible = !1;
                    const {
                        values: C
                    } = this._changesData(f, _, h, s), P = (0, m.getPriceValueFormatterForSource)(this._study);
                    if ((0, m.shouldBeFormattedAsPercent)(this._study) || (0, m.shouldBeFormattedAsIndexedTo100)(this._study)) i[6].value = "";
                    else if (void 0 !== C) {
                        const e = this._study.formatter();
                        i[6].value = (0, a.forceLTRStr)(`${e.format(C.change,!0)} (${b.format(C.percentChange,!0)})`)
                    }
                    s ? (i[5].value = null == f ? S : P(f), i[5].visible = !0, i[6].visible = !0) : (i[0].value = null == _ ? S : P(_), i[1].value = null == v ? S : P(v), i[2].value = null == y ? S : P(y), i[3].value = null == f ? S : P(f), x.value = P(this._study.barFunction()(c)), i[5].visible = !1);
                    let I = null;
                    if (s && !g) I = void 0 === C || C.change >= 0 ? p.SeriesBarColorer.upColor(this._study.properties()) : p.SeriesBarColorer.downColor(this._study.properties());
                    else {
                        const e = this._study.barColorer().barStyle(h, !1),
                            i = null !== (t = e.barBorderColor) && void 0 !== t ? t : e.barColor;
                        I = (0, u.calculateColor)(n, i)
                    }
                    I = (0, l.resetTransparency)((0, u.calculateColor)(n, I));
                    for (const e of i) e.color = I;
                    return i
                }
                _showLastPriceAndChangeOnly() {
                    return f && (null === this._model.crossHairSource().pane || (0, v.isLineToolName)(c.tool.value()) || null !== this._model.lineBeingEdited())
                }
                _changesData(e, t, i, s) {
                    var r;
                    if (s && !g) {
                        const e = this._study.quotes();
                        if (null !== e) return {
                            values: {
                                change: null !== e.change ? e.change : 0,
                                percentChange: null !== e.change_percent ? e.change_percent : 0
                            },
                            priceDirection: {
                                basedOnCurrentBar: null !== e.change && e.change >= 0 ? 0 : 1,
                                basedOnPrevClose: null !== e.change && e.change >= 0 ? 0 : 1
                            }
                        }
                    } else {
                        const s = this._study.data().search(i - 1, d.PlotRowSearchMode.NearestLeft, 1),
                            o = null !== (r = null == s ? void 0 : s.value[4]) && void 0 !== r ? r : null;
                        if (null !== o && null != e && null != t) return {
                            values: {
                                change: e - o,
                                percentChange: (0, _.barPercentChange)(o, e)
                            },
                            priceDirection: {
                                basedOnCurrentBar: e >= t ? 0 : 1,
                                basedOnPrevClose: e >= o ? 0 : 1
                            }
                        }
                    }
                    return null == e || null == t ? {} : {
                        priceDirection: {
                            basedOnCurrentBar: e >= t ? 0 : 1,
                            basedOnPrevClose: e >= t ? 0 : 1
                        }
                    }
                }
            } {
                constructor(e, t) {
                    super(e, t);
                    const i = t.properties().childs().paneProperties.childs().legendProperties.childs();
                    this._showBarChange = i.showBarChange, this._showSeriesOHLC = i.showSeriesOHLC, this._seriesStyle = e.properties().childs().style
                }
                getValues(e) {
                    const t = super.getValues(e);
                    if (!this._showLastPriceAndChangeOnly()) {
                        const e = this._seriesStyle.value(),
                            i = (0, s.isPriceSourceStyle)(e),
                            r = 12 === e,
                            o = this._showSeriesOHLC.value(),
                            n = o && !i,
                            l = o && i;
                        t[0].visible = n && !r, t[1].visible = n, t[2].visible = n, t[3].visible = n && !r,
                            t[6].visible = this._showBarChange.value() && !r, t[4].visible = l
                    }
                    return t
                }
            }
        },
        215328: (e, t, i) => {
            "use strict";
            i.d(t, {
                OverlayStatusProvider: () => r
            });
            var s = i(431235);
            class r extends s.StudyStatusProvider {
                getSplitTitle() {
                    return this._source.titleInParts(!0, void 0, !1, !1)
                }
                text() {
                    return this._source.isActualInterval() ? this._source.isFailed() ? `${this._source.title(!0,void 0,!1,!1)}: ${this.sourceStatusText()}` : `${this._source.title(!0,void 0,!1,!1)} ${this.sourceStatusText()}` : this._source.title(!0, void 0, !1, !1)
                }
            }
        },
        89262: (e, t, i) => {
            "use strict";
            i.d(t, {
                PivotPointsStandardLastPricesView: () => n
            });
            var s = i(812363);
            const r = ["p", "s1", "r1", "s2", "r2", "s3", "r3", "s4", "r4", "s5", "r5"],
                o = {
                    P: "P",
                    S1: "S1/R1",
                    S2: "S2/R2",
                    S3: "S3/R3",
                    S4: "S4/R4",
                    S5: "S5/R5",
                    R1: "S1/R1",
                    R2: "S2/R2",
                    R3: "S3/R3",
                    R4: "S4/R4",
                    R5: "S5/R5"
                };
            class n {
                constructor(e) {
                    this._visiblePivots = new Set, this._invidated = !0, this._prices = [], this._source = e
                }
                visiblePivots() {
                    return this._visiblePivots
                }
                update() {
                    this._invidated = !0
                }
                prices() {
                    return this._invidated && (this._updateImpl(), this._invidated = !1), this._prices
                }
                _updateImpl() {
                    this._visiblePivots.clear();
                    const e = this._source.model(),
                        t = this._source.priceScale();
                    if (null === t) return;
                    if (e.timeScale().isEmpty() || t.isEmpty()) return;
                    const i = e.timeScale().visibleBarsStrictRange();
                    if (null === i) return;
                    if (!this._source.customData() || !this._source.customData().pivots) return;
                    const n = e.mainSeries().bars().search(i.lastBar(), s.PlotRowSearchMode.NearestLeft);
                    if (null === n) return;
                    const l = n.index,
                        a = this._source.customData().pivots,
                        h = this._source.indexes(),
                        u = this._source.properties().childs(),
                        d = this._source.firstValue();
                    for (let e = 0; e < a.length; e++) {
                        if (!a[e]) continue;
                        const i = h[a[e].startIndex],
                            s = h[a[e].endIndex],
                            n = u.inputs.childs().showHistoricalPivots.value();
                        if (i <= l && (s >= l || n)) {
                            this._visiblePivots.add(a[e]), this._prices = [];
                            for (let i = 0; i < r.length; i++) {
                                const s = r[i],
                                    n = a[e][s];
                                if (void 0 === n || null === d) continue;
                                const l = t.priceToCoordinate(n, d),
                                    h = s.toUpperCase(),
                                    c = o[h],
                                    _ = u.levelsStyle.childs().colors.childs()[c].value();
                                this._prices.push({
                                    formatted: t.formatPrice(n, d),
                                    price: n,
                                    coordinate: l,
                                    color: _
                                })
                            }
                        }
                    }
                }
            }
        },
        444883: (e, t, i) => {
            "use strict";
            i.d(t, {
                PaneRendererStandardPivotLabel: () => r
            });
            var s = i(858063);
            class r {
                constructor(e, t, i) {
                    this._drawRects = [], this._cacheProvider = e, this._point = t, this._label = i
                }
                draw(e, t) {
                    const i = this._cacheProvider(t);
                    e.save(), e.setTransform(1, 0, 0, 1, 0, 0);
                    const s = t.pixelRatio;
                    this._drawRects = [];
                    const r = t => {
                            const r = i.labelRectByIndex(t),
                                o = {
                                    left: Math.round(this._point.x - r.width + n),
                                    top: Math.round(this._point.y - r.height / 2),
                                    width: r.width,
                                    height: r.height
                                };
                            return e.drawImage(i.canvas(), Math.round(r.left * s), Math.round(r.top * s), r.width * s, r.height * s, Math.round(o.left * s), Math.round(o.top * s), o.width * s, o.height * s), this._drawRects.push(o), r.width
                        },
                        o = this._label.split("/");
                    let n = 0;
                    for (let e = 0; e < o.length; e++) {
                        const t = ["P", "S1", "R1", "S2", "R2", "S3", "R3", "S4", "R4", "S5", "R5"].indexOf(o[e]);
                        e > 0 && (n += r(t + 11) / 2), n += r(t) / 2
                    }
                    e.restore()
                }
                hitTest(e) {
                    for (const t of this._drawRects)
                        if (e.x >= t.left && e.x <= t.left + t.width && e.y >= t.top && e.y <= t.top + t.height) return new s.HitTestResult(s.HitTestResult.REGULAR);
                    return null
                }
            }
        },
        661905: (e, t, i) => {
            "use strict";
            i.d(t, {
                StandardPivotPointsImageCache: () => n
            });
            var s = i(327714),
                r = i(741341),
                o = i(650151);
            class n {
                constructor(e, t, i, r) {
                    this._priceAxisFontSize = 11, this._prices = [], this._labelWidth = 0, this._paneRenderParams = e, this._recreateCanvasAndContext((0, s.size)({
                        width: 0,
                        height: 0
                    })), this.reset({
                        font: t,
                        fontSize: i,
                        backColors: r
                    })
                }
                destroy() {
                    delete this._canvas, delete this._cache
                }
                canvas() {
                    return this._canvas
                }
                reset(e) {
                    this._renderParams = e, this._prices = [], this._cache.font = e.fontSize + "px " + e.font, this._labelWidth = ["P", "S1", "R1", "S2", "R2", "S3", "R3", "S4", "R4", "S5", "R5", "/"].reduce(((e, t) => {
                        const i = this._cache.measureText(t).width;
                        return Math.max(i, e)
                    }), 0)
                }
                rowHeight() {
                    return this._priceAxisFontSize + 4
                }
                labelRectByIndex(e) {
                    return {
                        left: 0,
                        top: Math.round(this._topByIndex(e)),
                        width: Math.round(this._labelWidth + 4),
                        height: Math.round(this._renderParams.fontSize + 8)
                    }
                }
                setPrices(e) {
                    let t = !1;
                    const i = (e, t) => {
                        const i = void 0 === e,
                            s = void 0 === t;
                        return (!i && !s || i === s) && (0, o.ensureDefined)(e).formatted === (0, o.ensureDefined)(t).formatted
                    };
                    if (e.length !== this._prices.length) t = !0;
                    else
                        for (let s = 0; s < this._prices.length; s++)
                            if (!i(this._prices[s], e[s])) {
                                t = !0;
                                break
                            } if (t) {
                        const t = this._labelWidth + 6,
                            i = this._renderParams.fontSize,
                            o = Math.max(e.length, 22) * (i + 8);
                        this._recreateCanvasAndContext((0, s.size)({
                            width: t,
                            height: o
                        })), this._prices = e, this._cache.save(), (0, r.drawScaled)(this._cache, this._paneRenderParams.pixelRatio, (() => {
                            this._cache.translate(.5, .5), this._cache.font = this._renderParams.fontSize + "px " + this._renderParams.font, this._cache.textBaseline = "middle";
                            for (let e = 0; e < this._prices.length; e++) {
                                if (!this._prices[e]) continue;
                                const t = ["P", "S1", "R1", "S2", "R2", "S3", "R3", "S4", "R4", "S5", "R5"][e];
                                this._cache.fillStyle = this._renderParams.backColors[e], this._cache.fillText(t, 0, this._centerByIndex(e)), this._cache.fillText("/", 0, this._centerByIndex(e + 11))
                            }
                        })), this._cache.restore(), this._prices = e
                    }
                }
                _recreateCanvasAndContext(e) {
                    this._canvas = document.createElement("canvas"), this._canvas.width = e.width * this._paneRenderParams.pixelRatio, this._canvas.height = e.height * this._paneRenderParams.pixelRatio, this._cache = (0, o.ensureNotNull)(this._canvas.getContext("2d"))
                }
                _centerByIndex(e) {
                    return Math.round((e + .5) * (this._renderParams.fontSize + 8))
                }
                _topByIndex(e) {
                    return Math.round(e * (this._renderParams.fontSize + 8))
                }
            }
        },
        174824: (e, t, i) => {
            "use strict";
            i.d(t, {
                StandardPivotPointsPriceAxisView: () => n
            });
            var s = i(841404),
                r = i(114123);
            const o = ["P", "S1", "R1", "S2", "R2", "S3", "R3", "S4", "R4", "S5", "R5"];
            class n extends s.PriceAxisView {
                constructor(e, t) {
                    super(), this._source = e, this._data = t;
                    const i = t.name;
                    this._completeName = "P" === i.toUpperCase() ? "P" : `S${i[1]}/R${i[1]}`
                }
                _updateRendererData(e, t, i) {
                    e.visible = !1, t.visible = !1;
                    const s = this._source.properties().childs();
                    if (!s.visible.value()) return;
                    const n = this._completeName,
                        l = s.levelsStyle.childs().visibility.childs();
                    if (!l[n] || !l[n].value()) return;
                    const a = this._source.model().timeScale(),
                        h = this._source.priceScale();
                    if (a.isEmpty() || null === a.visibleBarsStrictRange() || null !== h && h.isEmpty()) return;
                    const u = this._source.customData();
                    if (!u || !u.pivots) return;
                    const d = this._source.pricesView().prices()[o.indexOf(this._data.name.toUpperCase())];
                    if (!d) return;
                    i.background = (0, r.resetTransparency)(d.color), i.textColor = this.generateTextColor(i.background), i.coordinate = d.coordinate, i.floatCoordinate = d.floatCoordinate;
                    const c = this._source.model().properties().childs().scalesProperties.childs();
                    c.showStudyLastValue.value() && (e.text = d.formatted, e.visible = !0), c.showStudyPlotLabels.value() && (t.text = this._source.priceLabelText(this._data.name), t.visible = !0)
                }
            }
        },
        470720: (e, t, i) => {
            "use strict";
            var s = i(168210).PriceRange,
                r = i(86441).Point,
                o = i(397581).StudyStatusView,
                n = i(4836).StudyDataWindowView,
                l = i(348406).NonSeriesStudy,
                a = i(174824).StandardPivotPointsPriceAxisView,
                h = i(733352).PanePriceAxisView,
                u = i(858063).HitTestResult,
                d = i(28035).CompositeRenderer,
                c = i(112824).areEqualPaneRenderParams,
                _ = i(661905).StandardPivotPointsImageCache,
                p = i(89262).PivotPointsStandardLastPricesView,
                m = i(444883).PaneRendererStandardPivotLabel,
                v = i(803936).HorizontalLineRenderer,
                y = i(623331);
            const {
                LINESTYLE_SOLID: f
            } = i(631586);
            class g {
                constructor(e, t) {
                    this._model = e, this._source = t, this._pivots = [], this._textCache = {}
                }
                setCache(e) {
                    this._cache = e
                }
                priceAxisViews(e, t) {
                    return this._priceAxisViews
                }
                mergeLabel(e, t, i) {
                    var s = "" + t;
                    void 0 === e[s] ? (e[s] = {}, e[s].text = i, e[s].ids = [this.complete(i)]) : (e[s].text += "/" + i, e[s].ids.push(this.complete(i)))
                }
                complete(e) {
                    return "P" === e ? e : "S" + e[1] + "/R" + e[1]
                }
                update() {
                    this._invalidated = !0
                }
                _updateImpl() {
                    if (this._source.pricesView().prices(), this._pivots = [], this._source.customData() && this._source.customData().pivots && this._source.properties().visible.value()) {
                        var e = this._source.customData().pivots,
                            t = this._source._indexes,
                            i = this._model.timeScale(),
                            s = this._source.priceScale();
                        if (s && !s.isEmpty() && !i.isEmpty() && e) {
                            var r = i.visibleBarsStrictRange(),
                                o = r.firstBar(),
                                n = r.lastBar();
                            if (this._source.ownerSource())
                                for (var l = this._source.ownerSource().firstValue(), a = 0; a < e.length; a++)
                                    if (e[a]) {
                                        var h = t[e[a].startIndex],
                                            u = t[e[a].endIndex];
                                        if (!(u < o || h > n)) {
                                            var d = {},
                                                c = this._source.properties().levelsStyle.visibility;
                                            c.P.value() && this.mergeLabel(d, e[a].p, "P"), c["S1/R1"].value() && (this.mergeLabel(d, e[a].s1, "S1"), this.mergeLabel(d, e[a].r1, "R1")), c["S2/R2"].value() && (this.mergeLabel(d, e[a].s2, "S2"), this.mergeLabel(d, e[a].r2, "R2")), c["S3/R3"].value() && (this.mergeLabel(d, e[a].s3, "S3"), this.mergeLabel(d, e[a].r3, "R3")), c["S4/R4"].value() && (this.mergeLabel(d, e[a].s4, "S4"), this.mergeLabel(d, e[a].r4, "R4")), c["S5/R5"].value() && (this.mergeLabel(d, e[a].s5, "S5"), this.mergeLabel(d, e[a].r5, "R5"));
                                            var _ = i.indexToCoordinate(h),
                                                p = i.indexToCoordinate(u);
                                            for (var m in d) {
                                                var v = parseFloat(m),
                                                    y = s.priceToCoordinate(v, l);
                                                this._pivots.push({
                                                    x1: _,
                                                    x2: p,
                                                    y,
                                                    label: d[m].text,
                                                    labelIds: d[m].ids,
                                                    src: e[a]
                                                })
                                            }
                                        }
                                    }
                        }
                    }
                }
                renderer() {
                    this._invalidated && (this._updateImpl(), this._invalidated = !1);
                    for (var e = new d, t = this._source.properties().levelsStyle.colors, i = this._source.properties().levelsStyle.widths, s = this._source.visiblePivots(), o = 0; o < this._pivots.length; o++) {
                        var n = this._pivots[o];
                        if (s.has(n.src)) {
                            var l = {
                                    width: this._model.timeScale().width(),
                                    height: this._source.priceScale().height(),
                                    color: t[n.labelIds[0]].value(),
                                    linewidth: i[n.labelIds[0]].value(),
                                    linestyle: f,
                                    y: n.y,
                                    left: n.x1,
                                    right: n.x2
                                },
                                a = new v;
                            if (a.setData(l), a.setHitTest(new u(u.REGULAR)), e.append(a), this._source.properties().levelsStyle.showLabels.value()) {
                                var h = function(e) {
                                    return this._source.getCache(e)
                                }.bind(this);
                                e.append(new m(h, new r(n.x1, n.y), n.label))
                            }
                        }
                    }
                    return e
                }
            }
            t.study_PivotPointsStandard = class extends l {
                constructor(e, t, i, s) {
                    super(e, t, i, s);
                    for (var r = ["P", "S1/R1", "S2/R2", "S3/R3", "S4/R4", "S5/R5"], o = this.properties().levelsStyle.visibility, n = 0; n < r.length; n++) o[r[n]].listeners().subscribe(this, this.processHibernate);
                    this._cacheDrawParams = null, this._cache = null
                }
                indexes() {
                    return this._indexes
                }
                getCache(e) {
                    return this.createCacheIfRequred(e), this._cache
                }
                createCacheIfRequred(e) {
                    if (null === this._cache || null == this._cacheDrawParams || !c(e, this._cacheDrawParams)) {
                        this._cache && this._cache.destroy();
                        var t = this._getActualCacheParams();
                        this._cache = new _(e, t.font, t.fontSize, t.backColors), this._cache.setPrices(this._pricesView.prices()), this._cacheDrawParams = e, this._cacheInvalidated = !1, this._cache.reset(t), this._cache.setPrices(this._pricesView.prices())
                    }
                }
                lastValueData(e, t, i) {
                    var s = ["P", "S1", "R1", "S2", "R2", "S3", "R3", "S4", "R4", "S5", "R5"].indexOf(e.toUpperCase()),
                        r = this._pricesView.prices()[s];
                    return null != r ? r : {
                        noData: !0
                    }
                }
                priceLabelText(e) {
                    return this._metaInfo.shortDescription + ":" + e.toUpperCase()
                }
                pricesView() {
                    return this._pricesView
                }
                _getActualCacheParams() {
                    var e = {};
                    return e.font = y.CHART_FONT_FAMILY, e.fontSize = this.properties().fontsize.value(), e.backColors = [this.properties().levelsStyle.colors.P.value(), this.properties().levelsStyle.colors["S1/R1"].value(), this.properties().levelsStyle.colors["S1/R1"].value(), this.properties().levelsStyle.colors["S2/R2"].value(), this.properties().levelsStyle.colors["S2/R2"].value(), this.properties().levelsStyle.colors["S3/R3"].value(), this.properties().levelsStyle.colors["S3/R3"].value(), this.properties().levelsStyle.colors["S4/R4"].value(), this.properties().levelsStyle.colors["S4/R4"].value(), this.properties().levelsStyle.colors["S5/R5"].value(), this.properties().levelsStyle.colors["S5/R5"].value()], e
                }
                updateAllViews() {
                    super.updateAllViews(), this._pricesView.update()
                }
                _createViews() {
                    this._cache && (this._cache.destroy(), this._cache = null), this._priceAxisViews = [];
                    var e = ["P", "S1", "R1", "S2", "R2", "S3", "R3", "S4", "R4", "S5", "R5"];
                    this._paneViews.length = 0, this._labelPaneViews = [];
                    var t = new g(this._model, this);
                    t.setCache(this._cache), this._paneViews.push(t), this._mainPaneView = t;
                    for (var i = 0; i < e.length; i++) {
                        var s = new a(this, {
                            name: e[i],
                            cache: this._cache
                        });
                        this._priceAxisViews.push(s), this._labelPaneViews.push(new h(s, this, this._model))
                    }
                    this._dataWindowView || (this._dataWindowView = new n(this, this._model)), this._statusView || (this._statusView = new o(this, this._model.properties().scalesProperties.textColor)), this._legendView = null, this._pricesView = new p(this)
                }
                visiblePivots() {
                    return this._pricesView.visiblePivots()
                }
                _postProcessGraphics() {}
                isVisible() {
                    if (!this.properties().visible.value() || !this.isActualInterval()) return !1;
                    for (var e = ["P", "S1/R1", "S2/R2", "S3/R3", "S4/R4", "S5/R5"], t = this.properties().levelsStyle.visibility, i = 0; i < e.length; i++)
                        if (t[e[i]].value()) return !0;
                    return !1
                }
                stop() {
                    super.stop(), this._cache && (this._cache.destroy(), this._cache = null)
                }
                priceRange(e, t) {
                    if (!this.customData() || !this.customData().pivots || !this._indexes) return null;
                    if (!this.priceScale()) return null;
                    for (var i = this.customData().pivots, r = this._indexes, o = null, n = 0; n < i.length; n++)
                        if (i[n]) {
                            var l = r[i[n].startIndex];
                            if (!(r[i[n].endIndex] < e || l > t)) {
                                var a = [],
                                    h = this._properties.levelsStyle.visibility;
                                h.P.value() && a.push(i[n].p), h["S1/R1"].value() && a.push(i[n].s1, i[n].r1), h["S2/R2"].value() && a.push(i[n].s2, i[n].r2), h["S3/R3"].value() && a.push(i[n].s3, i[n].r3), h["S4/R4"].value() && a.push(i[n].s4, i[n].r4), h["S5/R5"].value() && a.push(i[n].s5, i[n].r5);
                                for (var u = 0; u < a.length; u++) a[u] && (null === o ? o = new s(a[u], a[u]) : o.apply(a[u], a[u]))
                            }
                        }
                    return this.priceScale().isLog() && o ? new s(this.priceScale().priceToLogical(o.minValue()), this.priceScale().priceToLogical(o.maxValue())) : o
                }
            }
        },
        562726: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                createStudy: () => oi,
                isESDStudy: () => si,
                isFundamentalStudy: () => ii,
                isRollDatesStudy: () => ri,
                isStudy: () => Kt,
                isStudyStrategy: () => ei,
                isStudyStub: () => ti,
                studyColorRotationMode: () => ni,
                useSameColorRotationComparator: () => ai
            });
            var s = i(495046),
                r = i(108184),
                o = i(373123),
                n = i(784093),
                l = i(298297),
                a = i.n(l),
                h = i(650151),
                u = i(314967),
                d = i(777754),
                c = i(121525),
                _ = i(768038),
                p = i(835343),
                m = i(758337),
                v = i(114123),
                y = i(538708),
                f = i(561068),
                g = i(738023),
                b = i(623331),
                S = i(858063),
                w = i(631586),
                x = i(49568),
                C = i(914679);
            const P = {
                    fillPath: new Path2D("M8.961.92a3 3 0 0 1 3.078 0l7.5 4.48A3 3 0 0 1 21 7.975V20a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V7.975A3 3 0 0 1 1.461 5.4l7.5-4.48z"),
                    strokePath: new Path2D("M9.867 2.742c.39-.23.875-.23 1.266 0l7.5 4.406c.382.225.617.635.617 1.078V20c0 .69-.56 1.25-1.25 1.25H3c-.69 0-1.25-.56-1.25-1.25V8.226c0-.443.235-.853.617-1.078l7.5-4.406z")
                },
                I = {
                    fillPath: new Path2D("M8.961 22.08a3 3 0 0 0 3.078 0l7.5-4.48A3 3 0 0 0 21 15.025V3a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v12.025A3 3 0 0 0 1.461 17.6l7.5 4.48z"),
                    strokePath: new Path2D("M9.866 20.257c.391.23.877.23 1.268 0l7.5-4.414a1.25 1.25 0 0 0 .616-1.078V3c0-.69-.56-1.25-1.25-1.25H3c-.69 0-1.25.56-1.25 1.25v11.765c0 .443.234.853.616 1.078l7.5 4.414z")
                },
                T = {
                    fillPath: new Path2D("M3 0h15c1.662 0 3 1.338 3 3v15c0 1.662-1.338 3-3 3H3c-1.662 0-3-1.338-3-3V3c0-1.662 1.338-3 3-3z"),
                    strokePath: new Path2D("M3 1.75h15c.693 0 1.25.557 1.25 1.25v15c0 .693-.557 1.25-1.25 1.25H3c-.692 0-1.25-.558-1.25-1.25V3c0-.692.558-1.25 1.25-1.25z")
                };

            function D(e, t, i, s, r) {
                const o = i.pixelRatio;
                e.save(), e.translate(t.x - s.lollipop.width * o / 2, t.y - s.lollipop.height * o / 2), e.scale(o, o), s.lollipop.fillCircle && s.lollipop.backgroundColor && (e.fillStyle = s.lollipop.backgroundColor, e.fill(r.fillPath)), e.strokeStyle = s.lollipop.strokeStyle, e.lineWidth = Math.round(s.lollipop.lineWidth * o) / o, (0, C.setLineStyle)(e, w.LINESTYLE_SOLID), s.lollipop.fillCircle && s.lollipop.fillStyle && (e.fillStyle = s.lollipop.fillStyle, e.fill(r.strokePath)),
                    e.stroke(r.strokePath), e.restore()
            }
            class L extends x.LollipopRenderer {
                _drawLollipop(e, t, i) {
                    const s = this._data.style;
                    switch (s.type) {
                        case "Positive":
                            ! function(e, t, i, s) {
                                D(e, t, i, s, P)
                            }(e, t, i, s);
                            break;
                        case "Negative":
                            ! function(e, t, i, s) {
                                D(e, t, i, s, I)
                            }(e, t, i, s);
                            break;
                        default:
                            ! function(e, t, i, s) {
                                D(e, t, i, s, T)
                            }(e, t, i, s)
                    }
                }
            }
            var R = i(885418),
                V = i(86441),
                A = i(224743),
                k = i(747342),
                M = i(223616),
                E = i(876322),
                B = i(888194),
                N = i(199687),
                F = i(460321);
            class O extends F.LollipopPaneView {
                constructor() {
                    super(...arguments), this._getMoreFinancialsLinkInitialTabId = N.PageId.Overview, this._symbolName = null
                }
                addLollipop(e, t, i, s, r, o, n) {
                    var l, a;
                    if (null === this._symbolName && (this._symbolName = null !== (a = null === (l = this._model.mainSeries().symbolInfo()) || void 0 === l ? void 0 : l.name) && void 0 !== a ? a : null, null === this._symbolName)) return;
                    const h = `${this._source.metaInfo().id}_${this._lollipopId(o)}_${this._symbolName}`,
                        u = this._lollipops[h],
                        d = void 0 !== u ? u.itemIndex : this._lollipopsCounter++,
                        c = this._model.lastHittestData(),
                        _ = h === this.getLastClickedLollipopId(),
                        p = this._model.hoveredSource() === this._source && null !== c && c.activeItem === d;
                    this._lollipops[h] = {
                        id: h,
                        itemIndex: d,
                        visible: !0,
                        basePoint: new V.Point(i.indexToCoordinate(r), e),
                        hovered: p,
                        active: _,
                        stack: n,
                        ...this.extraData(o)
                    }
                }
                renderer(e, t) {
                    return this._invalidated && (this._updateImpl(t, e), this._invalidated = !1), this._source.hideLollipops() ? null : this._renderer
                }
                _lollipopId(e) {
                    return e[0].toString()
                }
                _updateImpl(e, t) {
                    const i = this._source.data(),
                        s = this._model.timeScale(),
                        r = s.visibleBarsStrictRange(),
                        o = this._model.mainSeries().bars(),
                        n = this._model.mainSeries(),
                        l = n.priceScale(),
                        a = n.firstBar();
                    if (l.isEmpty() || s.isEmpty() || !a || !i || null === r) return;
                    if (this._source.hideLollipops()) return void this.clearLastClicked();
                    for (const e in this._lollipops) this._lollipops.hasOwnProperty(e) && ((0, h.ensureDefined)(this._lollipops[e]).visible = !1);
                    const u = this._getY(),
                        d = r.firstBar(),
                        c = r.lastBar(),
                        _ = this._source.zorder(),
                        p = this._model.mainPane().lollipopDataSources().filter((e => e !== this._source && e.zorder() > _ && e.isVisible()));
                    i.range(d, c).each(((e, t) => {
                        let i = 0;
                        for (const t of p) i += t.lollipopsAtIndex(e);
                        return this.addLollipop(u, o, s, l, e, t, i), !1
                    })), this.afterUpdate(u, o, s, l), this._createRenderers(e, t)
                }
                _formatDate(e, t) {
                    let i, s = !0;
                    if (s = M.Version.parse(this._source.metaInfo().version).isLessOrEqual(new M.Version(137, 0)), s) {
                        let t = "Etc/UTC";
                        const s = this._model.mainSeries();
                        if (!s.isDWM() && (t = this._model.properties().childs().timezone.value(), "exchange" === t)) {
                            const e = s.symbolInfo();
                            t = e && e.timezone || ""
                        }
                        const r = (0, k.get_timezone)(t);
                        i = (0, k.utc_to_cal)(r, e)
                    } else i = new Date(e);
                    return (t ? "≈ " : "") + this._model.dateFormatter().format(i)
                }
                _getMoreFinancialsLink() {
                    var e;
                    if (!/\betf\b/i.test((null === (e = this._model.mainSeries().symbolInfo()) || void 0 === e ? void 0 : e.description) || "")) return {
                        text: this._getMoreFinancialsLinkText(),
                        onClick: () => {
                            A.globalCloseDelegate.fire(), s.enabled("mobile_app_action_open_financials_webview") ? (0, B.openFinancialsWebview)(new URLSearchParams) : (0, E.showFinancialsDialog)({
                                initialTabId: this._getMoreFinancialsLinkInitialTabId
                            })
                        }
                    }
                }
                _getMoreFinancialsLinkText() {
                    var e, t;
                    return d.t(null, {
                        replace: {
                            symbol: null !== (t = null === (e = this._model.mainSeries().symbolInfo()) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : ""
                        }
                    }, i(633282))
                }
                _onSymbolOrIntervalChanged() {
                    super._onSymbolOrIntervalChanged(), this._symbolName = null
                }
            }
            var H = i(385442),
                W = i(777566),
                z = i(261820),
                U = i(274469),
                q = i(788600),
                G = i(323373),
                Y = i(627086);
            const $ = d.t(null, void 0, i(376434)),
                Q = d.t(null, void 0, i(783851)),
                j = d.t(null, void 0, i(802985)),
                Z = d.t(null, void 0, i(396269)),
                X = d.t(null, void 0, i(180160)),
                J = d.t(null, void 0, i(68625)),
                K = d.t(null, void 0, i(94647)),
                ee = d.t(null, void 0, i(634135)),
                te = d.t(null, void 0, i(400241)),
                ie = d.t(null, void 0, i(233481)),
                se = d.t(null, void 0, i(676912)),
                re = d.t(null, void 0, i(651924)),
                oe = d.t(null, void 0, i(744441)),
                ne = d.t(null, void 0, i(993225)),
                le = d.t(null, void 0, i(259285)),
                ae = d.t(null, void 0, i(945855)),
                he = d.t(null, void 0, i(354079)),
                ue = {
                    dark: (0, u.getHexColorByName)("color-cold-gray-900"),
                    light: (0, u.getHexColorByName)("color-white")
                },
                de = {
                    positive: (0, u.getHexColorByName)("color-minty-green-600"),
                    negative: (0, u.getHexColorByName)("color-ripe-red-600"),
                    future: (0, u.getHexColorByName)("color-grapes-purple-a400"),
                    unknown: (0, u.getHexColorByName)("color-cold-gray-350")
                },
                ce = {
                    positive: (0, u.getHexColorByName)("color-minty-green-500"),
                    negative: (0, u.getHexColorByName)("color-ripe-red-500"),
                    future: (0, u.getHexColorByName)("color-grapes-purple-a200"),
                    unknown: (0, u.getHexColorByName)("color-cold-gray-700")
                };

            function _e(e) {
                return e ? de : ce
            }
            const pe = new f.PercentageFormatter,
                me = new g.VolumeFormatter;
            class ve extends O {}
            class ye extends ve {
                constructor(e, t, i) {
                    super(e, t, i)
                }
                styles(e) {
                    return e ? {
                        positive: (0, u.getHexColorByName)("color-minty-green-600"),
                        negative: (0, u.getHexColorByName)("color-ripe-red-600"),
                        future: (0, u.getHexColorByName)("color-grapes-purple-a400"),
                        unknown: (0, u.getHexColorByName)("color-cold-gray-350")
                    } : {
                        positive: (0, u.getHexColorByName)("color-minty-green-500"),
                        negative: (0, u.getHexColorByName)("color-ripe-red-500"),
                        future: (0, u.getHexColorByName)("color-grapes-purple-a200"),
                        unknown: (0, u.getHexColorByName)("color-cold-gray-700")
                    }
                }
                extraData(e) {
                    const t = e[8],
                        i = 14 === t,
                        s = e[1],
                        r = e[2],
                        o = e[3],
                        n = e[4],
                        l = i ? null : e[5],
                        a = null != l && null != r ? l - r : null,
                        h = e[6],
                        u = i ? null : e[7];
                    let d;
                    return null != t ? t < 20 ? d = "Future" : null !== a && (d = a < 0 ? "Negative" : "Positive") : null !== a ? d = a < 0 ? "Negative" : "Positive" : n > Date.now() && (d = "Future"), {
                        standardized: s,
                        reported: l,
                        estimate: r,
                        revenueValue: u,
                        revenueEstimate: h,
                        period: o,
                        date: n,
                        type: d,
                        timeType: null != t ? t : void 0
                    }
                }
                afterUpdate(e, t, i, s) {
                    const r = this._source.getEstimate();
                    if (r) {
                        const o = r.value.slice();
                        o[4] *= 1e3, this.addLollipop(e, t, i, s, r.index, o)
                    }
                }
                getStyle(e) {
                    if (void 0 === e.type) return super.getStyle(e);
                    const t = e.active ? "active" : e.hovered ? "hovered" : "default";
                    let i = t;
                    e.stack && (i += "_stack:" + e.stack);
                    let s = this._getStyleObject(e.type, i);
                    if (null !== s) return s;
                    if (this._stylesCache || (this._stylesCache = {}), !this._stylesCache[i]) {
                        s = this._getStyleObject(e.type, t);
                        const r = (0, m.clone)(s);
                        r && (e.stack && (r.lollipop.incHeight = 25 * e.stack), this._stylesCache[i] = r)
                    }
                    return this._stylesCache[i]
                }
                _createTooltipContent(e) {
                    const t = e.standardized,
                        i = null != t,
                        s = e.reported,
                        r = null != s,
                        o = e.estimate,
                        n = null != o,
                        a = r && n ? s - o : null;
                    let u = e.revenueEstimate,
                        d = !1;
                    null != u && (d = !0, u *= 1e6);
                    let p = e.revenueValue,
                        m = !1;
                    null != p && (m = !0, p *= 1e6);
                    const v = m && d ? p - u : null,
                        y = _e(this._model.isDark());
                    let f, g, b, S, w;
                    switch (e.type) {
                        case "Future":
                            g = y.future, f = z;
                            break;
                        case "Negative":
                            g = y.negative, f = W;
                            break;
                        case "Positive":
                            g = y.positive, f = H;
                            break;
                        default:
                            g = y.unknown, f = z
                    }
                    switch (e.timeType) {
                        case 12:
                        case 22:
                            b = Y, S = c.LollipopGroupIcons.AfterMarketClose, w = he;
                            break;
                        case 11:
                        case 21:
                            b = G, S = c.LollipopGroupIcons.BeforeMarketOpen, w = ae
                    }
                    const x = 10 === e.timeType || 14 === e.timeType,
                        C = {
                            name: se,
                            value: this._formatDate(e.date, x)
                        };
                    b && (C.valueRightIcon = {
                        iconContent: b,
                        iconClass: S,
                        tooltipText: w
                    });
                    const P = [C];
                    e.period && P.push({
                        name: oe,
                        value: l.unix(e.period).format("MMM 'YY")
                    });
                    const I = {
                            type: "common",
                            title: m || d ? $ : Q,
                            subTitle: P,
                            tooltipIcon: f,
                            style: {
                                color: g
                            },
                            content: [],
                            anchor: this._getMoreFinancialsLink()
                        },
                        T = {
                            title: Q,
                            content: []
                        };
                    if (i && T.content.push({
                            name: j,
                            value: (0, R.roundToThirdDigit)(t)
                        }), r && T.content.push({
                            name: Z,
                            value: (0, R.roundToThirdDigit)(s)
                        }), n && T.content.push({
                            name: X,
                            value: (0, R.roundToThirdDigit)(o)
                        }), null !== a) {
                        const e = 100 * Math.abs(a / o);
                        let t = (0, R.roundToThirdDigit)(a);
                        isFinite(e) && (t += " (" + pe.format(e) + ")"), T.content.push({
                            name: J,
                            value: (0, _.forceLTRStr)(t),
                            style: {
                                fontWeight: "bold",
                                color: g
                            }
                        })
                    }
                    if ((0, h.ensureDefined)(I.content).push(T), m || d) {
                        const e = {
                            title: le,
                            content: []
                        };
                        if (m && e.content.push({
                                name: Z,
                                value: me.format(p)
                            }), d && e.content.push({
                                name: X,
                                value: me.format(u)
                            }), null !== v) {
                            const t = 100 * Math.abs(v / u);
                            let i = me.format(v);
                            isFinite(t) && (i += " (" + pe.format(t) + ")"), e.content.push({
                                name: J,
                                value: (0, _.forceLTRStr)(i),
                                style: {
                                    fontWeight: "bold",
                                    color: v >= 0 ? y.positive : y.negative
                                }
                            })
                        }(0, h.ensureDefined)(I.content).push(e)
                    }
                    return [I]
                }
                _showBarLine(e) {
                    return super._showBarLine(e) || this._model.mainSeries().properties().childs().esdShowBreaks.value()
                }
                _createRendererForLollipop(e, t) {
                    return new L(e, new S.HitTestResult(S.HitTestResult.CUSTOM, t), this._textWidthCache)
                }
                _recreateStyles(e) {
                    const t = e.isDark(),
                        i = _e(t),
                        s = i.unknown,
                        r = {
                            barLine: {
                                lineStyle: w.LINESTYLE_DASHED,
                                lineWidth: 1,
                                strokeStyle: s
                            },
                            lollipop: {
                                width: 21,
                                height: 21,
                                bottom: 2,
                                lineWidth: 1.5,
                                importance: "earnings",
                                strokeStyle: s,
                                backgroundColor: t ? ue.dark : ue.light,
                                fillCircle: !0,
                                text: {
                                    label: "E",
                                    strokeStyle: s,
                                    font: (0, y.makeFont)(12, b.CHART_FONT_FAMILY, "bold")
                                }
                            }
                        },
                        o = {
                            lollipop: {
                                fillStyle: (0, v.generateColor)(s, 85)
                            }
                        },
                        n = {
                            lollipop: {
                                fillStyle: s,
                                text: {
                                    strokeStyle: (0, u.getHexColorByName)("color-cold-gray-50")
                                }
                            }
                        };
                    this._defaultStyle = (0, p.deepCopy)(r), this._hoveredStyle = (0, m.merge)((0, p.deepCopy)(r), o), this._activeStyle = (0, m.merge)((0, p.deepCopy)(r), n);
                    const l = (e, t) => {
                        const i = (0, p.deepCopy)(r);
                        return i.barLine.strokeStyle = e, i.lollipop.strokeStyle = e, i.lollipop.text.strokeStyle = e, i.type = t, o.lollipop.fillStyle = (0, v.generateColor)(e, 85), n.lollipop.fillStyle = e, {
                            default: i,
                            hovered: (0, m.merge)((0, p.deepCopy)(i), o),
                            active: (0, m.merge)((0, p.deepCopy)(i), n)
                        }
                    };
                    n.lollipop.text.strokeStyle = (0, u.getHexColorByName)("color-grapes-purple-50");
                    const a = l(i.future, "Future");
                    r.lollipop.height = 23, r.lollipop.text.deltaY = 1,
                        n.lollipop.text.strokeStyle = (0, u.getHexColorByName)("color-minty-green-50");
                    const h = l(i.positive, "Positive");
                    r.lollipop.bottom = .5, r.lollipop.text.deltaY = -.5, n.lollipop.text.strokeStyle = (0, u.getHexColorByName)("color-ripe-red-50");
                    const d = l(i.negative, "Negative");
                    this._earningTypeStyles = {
                        Future: a,
                        Positive: h,
                        Negative: d
                    }, this._stylesCache = null
                }
                _getStyleObject(e, t) {
                    const i = this._earningTypeStyles[e];
                    switch (t) {
                        case "default":
                            return i.default;
                        case "hovered":
                            return i.hovered;
                        case "active":
                            return i.active
                    }
                    return null
                }
            }
            const fe = (0, u.getHexColorByName)("color-tan-orange-600"),
                ge = (0, u.getHexColorByName)("color-tan-orange-500");

            function be(e) {
                return e ? fe : ge
            }
            class Se extends ve {
                extraData(e) {
                    const t = e[1];
                    return {
                        numerator: e[2],
                        denominator: t,
                        date: e[3]
                    }
                }
                _createTooltipContent(e) {
                    let t = K;
                    return (0, m.isNumber)(e.numerator) && (0, m.isNumber)(e.denominator) && (t += ": " + e.numerator + "/" + e.denominator), [{
                        type: "common",
                        title: t,
                        subTitle: this._formatDate(e.date),
                        tooltipIcon: U,
                        style: {
                            color: be(this._model.isDark())
                        },
                        anchor: this._getMoreFinancialsLink()
                    }]
                }
                _recreateStyles(e) {
                    const t = e.isDark(),
                        i = be(t),
                        s = {
                            barLine: {
                                lineStyle: w.LINESTYLE_DASHED,
                                lineWidth: 1,
                                strokeStyle: i
                            },
                            lollipop: {
                                width: 23,
                                height: 23,
                                bottom: 1,
                                lineWidth: 1.5,
                                importance: "splits",
                                strokeStyle: i,
                                backgroundColor: t ? ue.dark : ue.light,
                                fillCircle: !0,
                                text: {
                                    label: "S",
                                    strokeStyle: i,
                                    font: (0, y.makeFont)(12, b.CHART_FONT_FAMILY, "bold")
                                }
                            }
                        },
                        r = {
                            lollipop: {
                                fillStyle: (0, v.generateColor)(i, 85)
                            }
                        },
                        o = {
                            lollipop: {
                                fillStyle: i,
                                text: {
                                    strokeStyle: (0, u.getHexColorByName)("color-tan-orange-50")
                                }
                            }
                        };
                    this._defaultStyle = s, this._hoveredStyle = (0, m.merge)((0, p.deepCopy)(s), r), this._activeStyle = (0, m.merge)((0, p.deepCopy)(s), o), this._stylesCache = null
                }
            }
            const we = (0, u.getHexColorByName)("color-tv-blue-600"),
                xe = (0, u.getHexColorByName)("color-tv-blue-500");

            function Ce(e) {
                return e ? we : xe
            }
            class Pe extends ve {
                constructor() {
                    super(...arguments), this._getMoreFinancialsLinkInitialTabId = N.PageId.Dividends
                }
                extraData(e) {
                    return {
                        amountDividends: e[1],
                        date: e[2],
                        adjustedAmountDividends: e[3],
                        paymentDate: e[4]
                    }
                }
                _createTooltipContent(e) {
                    const {
                        date: t,
                        amountDividends: i,
                        paymentDate: s,
                        adjustedAmountDividends: r
                    } = e, o = [{
                        name: re,
                        value: this._formatDate(t)
                    }];
                    return (0, m.isNumber)(i) && o.push({
                        name: te,
                        value: (0, R.roundToThirdDigit)(i)
                    }), (0, m.isNumber)(r) && o.push({
                        name: ie,
                        value: (0, R.roundToThirdDigit)(r)
                    }), (0, m.isNumber)(s) && o.push({
                        name: ne,
                        value: this._formatDate(s)
                    }), [{
                        type: "common",
                        title: ee,
                        subTitle: o,
                        tooltipIcon: q,
                        style: {
                            color: Ce(this._model.isDark())
                        },
                        anchor: this._getMoreFinancialsLink()
                    }]
                }
                _recreateStyles(e) {
                    const t = e.isDark(),
                        i = Ce(t),
                        s = {
                            barLine: {
                                lineStyle: w.LINESTYLE_DASHED,
                                lineWidth: 1,
                                strokeStyle: i
                            },
                            lollipop: {
                                width: 23,
                                height: 23,
                                bottom: 1,
                                lineWidth: 1.5,
                                importance: "dividends",
                                strokeStyle: i,
                                backgroundColor: t ? ue.dark : ue.light,
                                fillCircle: !0,
                                text: {
                                    label: "D",
                                    strokeStyle: i,
                                    font: (0, y.makeFont)(12, b.CHART_FONT_FAMILY, "bold")
                                }
                            }
                        },
                        r = {
                            lollipop: {
                                fillStyle: (0, v.generateColor)(i, 85)
                            }
                        },
                        o = {
                            lollipop: {
                                fillStyle: i,
                                text: {
                                    strokeStyle: (0, u.getHexColorByName)("color-tv-blue-50")
                                }
                            }
                        };
                    this._defaultStyle = s, this._hoveredStyle = (0, m.merge)((0, p.deepCopy)(s), r), this._activeStyle = (0, m.merge)((0,
                        p.deepCopy)(s), o), this._stylesCache = null
                }
                _getMoreFinancialsLinkText() {
                    var e, t;
                    return d.t(null, {
                        replace: {
                            symbol: null !== (t = null === (e = this._model.mainSeries().symbolInfo()) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : ""
                        }
                    }, i(177743))
                }
            }
            var Ie = i(569523),
                Te = i(149590),
                De = i(194405),
                Le = i(397581),
                Re = i(262673);
            class Ve extends o.Study {
                constructor(e, t, i, s) {
                    super(e, t, i, s), this._restartRequired = !1, this.setOwnerSource(e.mainSeries());
                    const r = this._externalVisibilityProperty();
                    null !== r && (this._destroyPropertyBinder = (0, Re.bindProperties)(r, this._properties.childs().visible))
                }
                destroy() {
                    var e;
                    this._paneView.destroy(), null === (e = this._destroyPropertyBinder) || void 0 === e || e.call(this), super.destroy()
                }
                lollipopsAtIndex(e) {
                    return !this.hideLollipops() && this.data().contains(e) ? 1 : 0
                }
                hideLollipops() {
                    return this._model.timeScale().barSpacing() / 23 < 2 / 3 && this._model.mainSeries().intervalObj().inMilliseconds() >= 432e6
                }
                start() {
                    super.start(), this._model.mainSeries().dataEvents().symbolResolved().subscribe(this, this._initPlotStash), this._initPlotStash()
                }
                stop() {
                    super.stop(), this._model.mainSeries().dataEvents().symbolResolved().unsubscribe(this, this._initPlotStash)
                }
                restoreData(e) {
                    e.data = e.data.filter((e => e.index !== Te.INVALID_TIME_POINT_INDEX && this.isValid(e.value))), this._transformData(e.data), e.end = e.data.length, super.restoreData(e)
                }
                onClickOutside() {
                    this._paneView.processClickOutside()
                }
                preferNoScale() {
                    return !0
                }
                showInObjectTree() {
                    return !1
                }
                isSavedInStudyTemplates() {
                    return !1
                }
                isRemovedByStudyTemplates() {
                    return !1
                }
                removeByRemoveAllStudies() {
                    return !1
                }
                isDraggable() {
                    return !1
                }
                copiable() {
                    return !1
                }
                statusView() {
                    return null
                }
                hasStateForAlert() {
                    return !1
                }
                isSavedInChart(e) {
                    return Boolean(e)
                }
                isSpeciallyZOrderedSource() {
                    return !0
                }
                isUserDeletable() {
                    return !1
                }
                canHaveChildren() {
                    return !1
                }
                isIncludedInAutoScale() {
                    return !1
                }
                isCurrencySource() {
                    return !1
                }
                isUnitSource() {
                    return !1
                }
                _externalVisibilityProperty() {
                    return null
                }
                _transformData(e) {
                    for (let t = e.length - 1; t >= 0; --t) {
                        const i = e[t],
                            s = i.index !== Te.INVALID_TIME_POINT_INDEX && this.isValid(i.value);
                        this._updatePlotStash(i, s)
                    }
                }
                _createViews() {
                    this._paneViews = [this._paneView], this._priceAxisViews = [], this._dataWindowView || (this._dataWindowView = new De.DataWindowView), this._legendView = null, this._statusView || (this._statusView = new Le.StudyStatusView(this))
                }
                _seriesDataRangeToSave(e) {
                    return this._model.timeScale().visibleBarsStrictRange()
                }
                async _showTooltip(e, t) {
                    const s = this._model,
                        r = this._model.timeScale(),
                        o = [r.onScroll(), r.barSpacingChanged(), s.mainSeries().onSymbolIntervalChanged()],
                        n = this._paneView.processClickOutside.bind(this._paneView),
                        l = this._paneView.clearLastClicked.bind(this._paneView),
                        a = t();
                    if (null === a) return;
                    const {
                        showLollipopTooltip: h
                    } = await Promise.all([i.e(7624), i.e(96972), i.e(6092), i.e(36720), i.e(39683), i.e(33599), i.e(16807), i.e(75514), i.e(49039)]).then(i.bind(i, 110963));
                    h({
                        items: a,
                        position: e,
                        customCloseSubscriptions: o,
                        onClickOutside: n,
                        onCustomClose: l,
                        showScrollFades: !0
                    })
                }
                _initPlotStash() {
                    this._plotStash = {}
                }
                _updatePlotStash(e, t) {
                    if (this._restartRequired || !this._plotStash) return;
                    const i = e.value.slice(),
                        s = i.shift(),
                        r = String(s);
                    t ? this._plotStash[r] ? String(this._plotStash[r]) !== String(i) && (this._restartRequired = !0) : this._plotStash[r] = i : this._plotStash[r] && (this._restartRequired = !0)
                }
            }
            const Ae = Ie.sortSourcesPreOrdered.Dividends,
                ke = Ie.sortSourcesPreOrdered.Splits,
                Me = Ie.sortSourcesPreOrdered.Earnings;
            class Ee extends Ve {
                zorder() {
                    return Ae
                }
                isValid(e) {
                    const t = e[2];
                    return (0, m.isNumber)(t)
                }
                state(e, t) {
                    const i = super.state(e, t);
                    return i.data.version = 2, i
                }
                restoreData(e) {
                    var t;
                    (null !== (t = e.version) && void 0 !== t ? t : 1) < 2 && e.data.forEach((e => {
                        e.value[3] = null
                    })), super.restoreData(e)
                }
                _createViews() {
                    this._paneView = new Pe(this._model, this, this._showTooltip.bind(this)), super._createViews()
                }
                _externalVisibilityProperty() {
                    return this._model.mainSeries().properties().childs().esdShowDividends
                }
            }
            class Be extends Ve {
                zorder() {
                    return ke
                }
                isValid(e) {
                    const t = e[3];
                    return (0, m.isNumber)(t)
                }
                _createViews() {
                    this._paneView = new Se(this._model, this, this._showTooltip.bind(this)), super._createViews()
                }
                _externalVisibilityProperty() {
                    return this._model.mainSeries().properties().childs().esdShowSplits
                }
            }
            class Ne extends Ve {
                constructor() {
                    super(...arguments), this._estimatePlotRow = null
                }
                zorder() {
                    return Me
                }
                isValid(e) {
                    const t = e[3],
                        i = e[4];
                    return (0, m.isNumber)(t) && (0, m.isNumber)(i)
                }
                restoreData(e) {
                    super.restoreData(e);
                    let t = null;
                    if (e.estimate) t = this._restorePointset(e.estimate);
                    else if (e.pointSets && null == e.pointSetsVersion) {
                        const i = this._getSymbol();
                        if (null !== i) {
                            const s = i.split(":")[1].toUpperCase();
                            e.pointSets[i] ? t = this._restorePointset(e.pointSets[i]) : e.pointSets[s] && (t = this._restorePointset(e.pointSets[s]))
                        }
                    } else if (e.pointSets && "1" === e.pointSetsVersion) {
                        const i = this._getSymbol();
                        if (null !== i) {
                            const s = i.split(":")[1].toUpperCase();
                            e.pointSets[i] ? t = e.pointSets[i].estimate : e.pointSets[s] && (t = e.pointSets[s].estimate)
                        }
                    } else null != e.estimatePlotRow && "2" === e.pointSetsVersion && (t = e.estimatePlotRow);
                    this._estimatePlotRow = t
                }
                getEstimate() {
                    return this._estimatePlotRow
                }
                _createViews() {
                    this._paneView = new ye(this._model, this, this._showTooltip.bind(this)), super._createViews()
                }
                _externalVisibilityProperty() {
                    return this._model.mainSeries().properties().childs().esdShowEarnings
                }
                _getSymbol() {
                    var e, t;
                    return null !== (t = null === (e = this._series.symbolInfo()) || void 0 === e ? void 0 : e.base_name[0].toLowerCase()) && void 0 !== t ? t : null
                }
                _restorePointset(e) {
                    return {
                        index: e.index,
                        value: [e.tickmark, void 0, e.estimate, (0, m.isNumber)(e.period) ? e.period : a()(e.period).unix(), (0, m.isNumber)(e.date) ? e.date : a()(e.date).unix()]
                    }
                }
            }
            var Fe = i(822914),
                Oe = i(220479),
                He = i(528474),
                We = i(927267);
            const ze = new Path2D("m13 6.02.5-.52-.5-.52-3.33-3.5-1.09 1.04 2.13 2.23H6.23L2.13.95l-1.01 1.1 4.3 4 .22.2H10.71L8.58 8.48l1.09 1.04 3.34-3.5Zm-9.4.45-3 3 1.06 1.06 3-3L3.6 6.47Z");
            class Ue extends x.LollipopRenderer {
                _drawLollipop(e, t, i) {
                    const s = i.pixelRatio,
                        r = this._data.style;
                    e.save(), e.translate(t.x, t.y), e.scale(s, s), e.beginPath(), e.strokeStyle = r.outerBorderColor, e.lineWidth = 1, e.arc(0, 0, 11, 0, 2 * Math.PI), e.stroke(), e.fillStyle = r.backgroundColor, e.beginPath(), e.arc(0, 0, 10.5, 0, 2 * Math.PI), e.fill(), e.translate(-6.5, -5.5), e.fillStyle = r.iconColor, e.fill(ze),
                        e.translate(6.5, 5.5), r.borderColor && (e.strokeStyle = r.borderColor, e.lineWidth = 1.5, (0, C.setLineStyle)(e, w.LINESTYLE_SOLID), e.beginPath(), e.arc(0, 0, 9.75, 0, 2 * Math.PI), e.stroke()), e.restore()
                }
            }
            var qe = i(717090);
            const Ge = d.t(null, void 0, i(520516)),
                Ye = d.t(null, void 0, i(570323)),
                $e = d.t(null, void 0, i(881240)),
                Qe = d.t(null, void 0, i(676912)),
                je = {
                    dark: {
                        background: (0, u.getHexColorByName)("color-cold-gray-900"),
                        foreground: (0, u.getHexColorByName)("color-deep-blue-a200"),
                        linkColor: (0, u.getHexColorByName)("color-tv-blue-500")
                    },
                    light: {
                        background: (0, u.getHexColorByName)("color-white"),
                        foreground: (0, u.getHexColorByName)("color-deep-blue-a400"),
                        linkColor: (0, u.getHexColorByName)("color-tv-blue-500")
                    }
                },
                Ze = {
                    barLine: {
                        lineStyle: w.LINESTYLE_DASHED,
                        lineWidth: 1,
                        strokeStyle: ""
                    },
                    lollipop: {
                        width: 21,
                        height: 21,
                        bottom: 2,
                        lineWidth: 1.5,
                        strokeStyle: "",
                        backgroundColor: "",
                        fillCircle: !0,
                        fillStyle: "",
                        text: {
                            label: "",
                            strokeStyle: "",
                            font: (0, y.makeFont)(12, b.CHART_FONT_FAMILY, "bold")
                        }
                    },
                    iconColor: "",
                    backgroundColor: "",
                    outerBorderColor: ""
                },
                Xe = ["F", "G", "H", "J", "K", "M", "N", "Q", "U", "V", "X", "Z"];

            function Je(e, t) {
                const i = Math.floor(t / 100),
                    s = t - 100 * i - 1;
                return {
                    name: `${e}${Xe[s]}${i}`,
                    expirationDate: `${We.MONTH_ARRAY[s]} ${i}`
                }
            }
            class Ke extends O {
                extraData(e) {
                    const t = [];
                    for (let i = 0; i < 4; ++i) {
                        const s = 3 * i + 1;
                        if (!Boolean(e[s])) break;
                        t.push({
                            currentContractCode: e[s],
                            nextContractCode: e[s + 1],
                            switchDate: e[s + 2]
                        })
                    }
                    return {
                        items: t
                    }
                }
                _createRendererForLollipop(e, t) {
                    return new Ue(e, new S.HitTestResult(S.HitTestResult.CUSTOM, t), this._textWidthCache)
                }
                _createTooltipContent(e) {
                    return e.items.map((e => {
                        const t = [{
                                name: Qe,
                                value: (0, Oe.formatYYYYMMDD)(this._model.dateFormatter(), e.switchDate)
                            }],
                            i = this._model.isDark() ? je.dark : je.light,
                            s = this._model.mainSeries(),
                            r = this._model.mainSeries().symbolInfo();
                        if (null !== r && void 0 !== r.root) {
                            const o = r.exchange,
                                n = {
                                    color: i.linkColor,
                                    cursor: "pointer"
                                },
                                l = Je(r.root, e.currentContractCode);
                            t.push({
                                name: Ye,
                                value: l.name,
                                valueStyle: n,
                                onValueClick: () => this._model.undoModel().setSymbol(s, `${o}:${l.name}`)
                            }), t.push({
                                name: " ",
                                value: l.expirationDate
                            });
                            const a = Je(r.root, e.nextContractCode);
                            t.push({
                                name: $e,
                                value: a.name,
                                valueStyle: n,
                                onValueClick: () => this._model.undoModel().setSymbol(s, `${o}:${a.name}`)
                            }), t.push({
                                name: " ",
                                value: a.expirationDate
                            })
                        }
                        return {
                            type: "common",
                            title: Ge,
                            subTitle: t,
                            tooltipIcon: qe,
                            style: {
                                color: i.foreground
                            }
                        }
                    }))
                }
                _lollipopId(e) {
                    return e[3].toString()
                }
                _showBarLine(e) {
                    return super._showBarLine(e) || this._model.mainSeries().properties().childs().showContinuousContractSwitchesBreaks.value()
                }
                _recreateStyles(e) {
                    const t = this._model.isDark() ? je.dark : je.light,
                        i = t.foreground,
                        s = t.background,
                        r = (0, Fe.default)(Ze);
                    r.iconColor = i, r.borderColor = i, r.backgroundColor = s, r.outerBorderColor = s, r.barLine.strokeStyle = i, this._defaultStyle = r;
                    const o = (0, Fe.default)(r);
                    o.backgroundColor = (0, He.blendColors)(s, (0, v.applyAlpha)(i, .15)), this._hoveredStyle = o;
                    const n = (0, Fe.default)(r);
                    n.backgroundColor = i, n.iconColor = s, n.borderColor = void 0, this._activeStyle = n, this._stylesCache = null
                }
            }
            class et extends Ve {
                zorder() {
                    return Ie.sortSourcesPreOrdered.RollDates
                }
                isValid(e) {
                    const t = e[4];
                    return (0, m.isNumber)(t)
                }
                _createViews() {
                    this._paneView = new Ke(this._model, this, this._showTooltip.bind(this)), super._createViews()
                }
                _externalVisibilityProperty() {
                    return this._model.mainSeries().properties().childs().showContinuousContractSwitches
                }
            }
            var tt = i(157260),
                it = i(720841),
                st = i(348406);
            class rt extends st.NonSeriesStudy {
                startIndex() {
                    const e = this.customData();
                    if (null == e || null == this._indexes) return null;
                    const t = this._indexes[e.startIndex];
                    return t !== Te.INVALID_TIME_POINT_INDEX ? t : null
                }
                endIndex() {
                    const e = this.customData();
                    if (null == e || null == this._indexes) return null;
                    const t = this._indexes[e.endIndex];
                    return t !== Te.INVALID_TIME_POINT_INDEX ? t : null
                }
                baseLine() {
                    const e = this.customData();
                    return null != e ? e.baseLine : null
                }
                downLine() {
                    const e = this.customData();
                    return null != e ? e.downLine : null
                }
                upLine() {
                    const e = this.customData();
                    return null != e ? e.upLine : null
                }
                pearsons() {
                    const e = this.customData();
                    return null != e && void 0 !== e.pearsons ? e.pearsons : null
                }
                isVisible() {
                    if (!this.properties().childs().visible.value() || !this.isActualInterval()) return !1;
                    const e = (0, h.ensureDefined)(this.properties().childs().styles.childs());
                    return 0 !== e.upLine.childs().display.value() || 0 !== e.downLine.childs().display.value() || 0 !== e.baseLine.childs().display.value()
                }
                _createViews() {
                    super._createViews(), Promise.all([i.e(81679), i.e(20507)]).then(i.bind(i, 333933)).then((({
                        LinearRegressionPaneView: e
                    }) => {
                        this._setPaneViews([new e(this.model(), this)])
                    }))
                }
            }
            var ot = i(827094),
                nt = i(988411),
                lt = i.n(nt),
                at = i(168210);
            var ht = i(841404);
            class ut extends ht.PriceAxisView {
                constructor(e, t) {
                    super(), this._source = e, this._styleId = t
                }
                _updateRendererData(e, t, i) {
                    var s;
                    e.visible = !1;
                    const r = this._source.priceScale(),
                        o = this._source.properties().childs();
                    if (!r || r.isEmpty() || !o.visible.value()) return;
                    const n = null === (s = this._source.properties().childs().graphics.childs().horizlines) || void 0 === s ? void 0 : s.childs()[this._styleId].childs();
                    if (!(n && n.visible && n.visible.value() && this._isLabelVisibleAccordinglyToProperties())) return;
                    const l = this._source.model().timeScale().logicalRange(),
                        a = this._source.firstValue();
                    if (null === a || null === l) return;
                    const h = {
                            price: NaN,
                            time: -1 / 0
                        },
                        u = this._source.graphics().horizlines().get(this._styleId);
                    if (void 0 === u) return;
                    for (const e of u) {
                        if (void 0 === e.level) continue;
                        const t = l.contains(e.startIndex, !0);
                        t === l.contains(e.endIndex, !0) && 0 !== t || h.time < e.endIndex && (h.time = e.endIndex, h.price = e.level)
                    }
                    if (isNaN(h.price)) return;
                    const d = (0, v.resetTransparency)(n.color.value());
                    i.background = d, i.textColor = this.generateTextColor(d), i.coordinate = r.priceToCoordinate(h.price, a), e.text = r.formatPrice(h.price, a, !0), e.visible = !0
                }
                _isLabelVisibleAccordinglyToProperties() {
                    const e = this._source.model().properties().childs().scalesProperties.childs();
                    return (e.showStudyLastValue.value() || e.showFundamentalLastValue.value()) && this._source.properties().childs().showLabelsOnPriceScale.value()
                }
            }
            var dt = i(517220);
            class ct extends o.Study {
                async _createGraphicsPaneViews() {
                    var e;
                    const t = this.metaInfo().graphics,
                        s = this.model(),
                        r = [],
                        o = this._needExtendToBarsEnding();
                    if (t.hhists) {
                        const {
                            HHistPaneView: t
                        } = await Promise.all([i.e(81679), i.e(20507)]).then(i.bind(i, 327514)), n = null === (e = this.properties().childs().graphics.childs().polygons) || void 0 === e ? void 0 : e.childs();
                        r.push(new t(this, s, void 0, null == n ? void 0 : n.histBoxBg, o))
                    }
                    if (t.horizlines) {
                        const {
                            HorizLinePaneView: e
                        } = await Promise.all([i.e(81679), i.e(20507)]).then(i.bind(i, 491810));
                        r.push(new e(this, s, void 0, o))
                    }
                    return r
                }
                _createGraphicsPriceAxisViews() {
                    var e;
                    return Object.keys(null !== (e = this.metaInfo().graphics.horizlines) && void 0 !== e ? e : {}).map((e => new ut(this, e)))
                }
                _createStudyPlotPaneView(e) {
                    return new dt.StudyPlotPaneView(this, this._series, this._model, e, this._needExtendToBarsEnding())
                }
                _apiInputs() {
                    return { ...super._apiInputs(),
                        mapRightBoundaryToBarStartTime: !!this._needExtendToBarsEnding() || void 0
                    }
                }
                _needExtendToBarsEnding() {
                    var e;
                    return void 0 !== (null === (e = this.metaInfo().defaults.inputs) || void 0 === e ? void 0 : e.mapRightBoundaryToBarStartTime)
                }
            }
            class _t extends ct {
                priceRange(e, t) {
                    let i = !1;
                    this.graphics().hhists().forEach(((e, t) => {
                        var s;
                        i = i || (0, h.ensureDefined)(null === (s = this.properties().childs().graphics.childs().hhists) || void 0 === s ? void 0 : s.childs()[t]).value()
                    }));
                    const s = function(e, t, i, s) {
                        let r = null;
                        return e.forEach(((e, s) => {
                            e.forEach((e => {
                                e.firstBarTime <= i && e.lastBarTime >= t && (null === r ? r = {
                                    low: {
                                        l: e.priceLow,
                                        h: e.priceHigh
                                    },
                                    high: {
                                        h: e.priceHigh
                                    }
                                } : (e.priceLow < r.low.l && (r.low.l = e.priceLow, r.low.h = e.priceHigh), r.high.h = Math.max(r.high.h, e.priceHigh)))
                            }))
                        })), null === r ? null : s ? new at.PriceRange(r.low.l - .8 * (r.low.h - r.low.l), r.high.h) : new at.PriceRange(r.low.l, r.high.h)
                    }(this.graphics().hhists(), e, t, i);
                    if (null === s) return null;
                    const r = (0, h.ensureNotNull)(this.priceScale());
                    return r.isLog() ? new at.PriceRange(r.priceToLogical(s.minValue()), r.priceToLogical(s.maxValue())) : s
                }
            }
            var pt = i(963894),
                mt = i(884566),
                vt = i(619276),
                yt = i(573774),
                ft = i(263314),
                gt = i(74266),
                bt = i(353469),
                St = i(231639);
            class wt {
                constructor(e, t) {
                    this._rough = e, this._detailed = t
                }
                forEach(e, t) {
                    this._mostDetailedHorizLines().forEach((i => {
                        e.call(t, i, i, this)
                    }))
                }
                has(e) {
                    let t = !1;
                    return this._mostDetailedHorizLines().forEach((i => {
                        t = t || i === e
                    })), t
                }
                get size() {
                    return this._rough.size
                }[Symbol.iterator]() {
                    const e = this._mostDetailedHorizLines().entries();
                    return {
                        [Symbol.iterator]() {
                            return this
                        },
                        next() {
                            const t = e.next();
                            return !0 === t.done ? t : {
                                value: t.value[1]
                            }
                        }
                    }
                }
                entries() {
                    throw new Error("Not implemented")
                }
                keys() {
                    throw new Error("Not implemented")
                }
                values() {
                    throw new Error("Not implemented")
                }
                _mostDetailedHorizLines() {
                    const e = new Map;
                    this._rough.forEach((t => e.set(t.startIndex, t)));
                    for (let t = this._detailed.length - 1; t >= 0; t--) {
                        this._detailed[t].forEach((t => {
                            e.has(t.startIndex) && e.set(t.startIndex, t)
                        }))
                    }
                    return e
                }
            }
            class xt {
                constructor(e, t) {
                    this._mergedHorizLinesSet = e, this._roughIterator = t
                }[Symbol.iterator]() {
                    return this
                }
                next() {
                    const e = this._roughIterator.next();
                    if (!0 === e.done) return e;
                    const t = e.value[0];
                    return {
                        value: [t, (0, h.ensureDefined)(this._mergedHorizLinesSet.get(t))]
                    }
                }
            }
            class Ct {
                constructor(e, t) {
                    this._roughHorizLineSets = e, this._detailedHorizLineSets = t
                }
                forEach(e, t) {
                    this._roughHorizLineSets.forEach(((i, s) => {
                        e.call(t, (0,
                            h.ensureDefined)(this.get(s)), s, this)
                    }))
                }
                get(e) {
                    const t = this._roughHorizLineSets.get(e);
                    if (void 0 !== t) return new wt(t, this._detailedHorizLineSets.map((t => t.get(e))).filter((e => void 0 !== e)))
                }
                has(e) {
                    return this._roughHorizLineSets.has(e)
                }
                get size() {
                    return this._roughHorizLineSets.size
                }[Symbol.iterator]() {
                    return new xt(this, this._roughHorizLineSets.entries())
                }
                entries() {
                    throw new Error("Not implemented")
                }
                keys() {
                    throw new Error("Not implemented")
                }
                values() {
                    throw new Error("Not implemented")
                }
            }
            class Pt {
                constructor(e, t) {
                    this._rough = e, this._detailed = t
                }
                forEach(e, t) {
                    this._rough.forEach(((i, s) => {
                        for (const i of this._detailed) {
                            const r = i.get(s);
                            if (void 0 !== r) return void e.call(t, r, s, this)
                        }
                        e.call(t, i, s, this)
                    }))
                }
                get(e) {
                    for (const t of this._detailed) {
                        const i = t.get(e);
                        if (void 0 !== i) return i
                    }
                    return this._rough.get(e)
                }
                has(e) {
                    for (const t of this._detailed) {
                        if (t.has(e)) return !0
                    }
                    return this._rough.has(e)
                }
                get size() {
                    return this._rough.size
                }[Symbol.iterator]() {
                    throw new Error("Not implemented")
                }
                entries() {
                    throw new Error("Not implemented")
                }
                keys() {
                    throw new Error("Not implemented")
                }
                values() {
                    throw new Error("Not implemented")
                }
            }
            class It {
                constructor(e, t) {
                    this._graphics = e, this._styleId = t
                }
                forEach(e, t) {
                    this._graphics.hhistsByTimePointIndex().forEach((i => {
                        i.forEach((i => {
                            if (i.styleId === this._styleId) {
                                const s = {
                                    firstBarTime: i.firstBarTime,
                                    lastBarTime: i.lastBarTime,
                                    rate: i.rate,
                                    priceHigh: i.priceHigh,
                                    priceLow: i.priceLow
                                };
                                e.call(t, s, s, this)
                            }
                        }))
                    }))
                }
                has(e) {
                    let t = !1;
                    return this._graphics.hhistsByTimePointIndex().forEach((i => {
                        i.forEach((i => {
                            i.styleId === this._styleId && i === e && (t = !0)
                        }))
                    })), t
                }
                get size() {
                    let e = 0;
                    return this._graphics.hhistsByTimePointIndex().forEach((t => {
                        t.forEach((t => {
                            t.styleId === this._styleId && e++
                        }))
                    })), e
                }[Symbol.iterator]() {
                    throw new Error("Not implemented")
                }
                entries() {
                    throw new Error("Not implemented")
                }
                keys() {
                    throw new Error("Not implemented")
                }
                values() {
                    throw new Error("Not implemented")
                }
            }
            class Tt {
                constructor(e, t) {
                    this._graphicsInfo = e, this._graphics = t
                }
                forEach(e, t) {
                    if (void 0 === this._graphicsInfo.hhists) return;
                    const i = Object.keys(this._graphicsInfo.hhists);
                    for (const s of i) e.call(t, (0, h.ensureDefined)(this.get(s)), s, this)
                }
                get(e) {
                    if (void 0 !== this._graphicsInfo.hhists) return new It(this._graphics, e)
                }
                has(e) {
                    return void 0 !== this._graphicsInfo.hhists && e in this._graphicsInfo.hhists
                }
                get size() {
                    return void 0 === this._graphicsInfo.hhists ? 0 : Object.keys(this._graphicsInfo.hhists).length
                }[Symbol.iterator]() {
                    throw new Error("Not implemented")
                }
                entries() {
                    throw new Error("Not implemented")
                }
                keys() {
                    throw new Error("Not implemented")
                }
                values() {
                    throw new Error("Not implemented")
                }
            }
            class Dt {
                constructor(e, t, i) {
                    this._graphicsInfo = e, this._roughStudyGraphics = t, this._detailedStudyGraphics = i
                }
                horizlines() {
                    return new Ct(this._roughStudyGraphics.horizlines(), this._detailedStudyGraphics.map((e => e.horizlines())))
                }
                vertlines() {
                    return this._roughStudyGraphics.vertlines()
                }
                lines() {
                    return this._roughStudyGraphics.lines()
                }
                hlines() {
                    return this._roughStudyGraphics.hlines()
                }
                textmarks() {
                    return this._roughStudyGraphics.textmarks()
                }
                shapemarks() {
                    return this._roughStudyGraphics.shapemarks()
                }
                backgrounds() {
                    return this._roughStudyGraphics.backgrounds()
                }
                polygons() {
                    return this._roughStudyGraphics.polygons()
                }
                trendchannels() {
                    return this._roughStudyGraphics.trendchannels()
                }
                hhists() {
                    return new Tt(this._graphicsInfo, this)
                }
                hhistsByTimePointIndex() {
                    return new Pt(this._roughStudyGraphics.hhistsByTimePointIndex(), this._detailedStudyGraphics.map((e => e.hhistsByTimePointIndex())))
                }
                dwglabels() {
                    return this._roughStudyGraphics.dwglabels()
                }
                dwglines() {
                    return this._roughStudyGraphics.dwglines()
                }
                dwgboxes() {
                    return this._roughStudyGraphics.dwgboxes()
                }
                dwgtables() {
                    return this._roughStudyGraphics.dwgtables()
                }
                dwgtablecells() {
                    return this._roughStudyGraphics.dwgtablecells()
                }
                dwglinefills() {
                    return this._roughStudyGraphics.dwglinefills()
                }
            }
            var Lt = i(404822);
            const Rt = "tv-volumebyprice",
                Vt = (0, vt.studyIdString)("VbPSessionsRough", Rt),
                At = (0, vt.studyIdString)("VbPSessionsDetailed", Rt),
                kt = (0, vt.studyIdString)("VbPSessionsDetailedAlerts", Rt),
                Mt = Number.MAX_SAFE_INTEGER,
                Et = d.t(null, void 0, i(421934));
            class Bt extends _t {
                constructor(e, t, i, s) {
                    super(e, t, i, s), this._isPackageAvailable = Nt(), this._alertsStudyMetaInfo = null, this._roughDataSource = null, this._detailedDataSource = null, this._detailedDataBuffer = new pt.CircularBuffer(7), this._loadedGraphics = null, this._loadedPlots = null, this._mergedGraphics = (0, St.emptyStudyGraphics)(), this._mergedPlots = this._emptyPlotList(), this._isPackageAvailable || this._setStatus({
                        type: ft.StudyStatusType.Error,
                        errorDescription: {
                            error: Et
                        }
                    })
                }
                destroy() {
                    null !== this._detailedDataSource && (this._detailedDataSource.dataUpdated().unsubscribe(this, this._onRoughOrDetailedDataUpdated), this._detailedDataSource.dataCleared().unsubscribe(this, this._onRoughOrDetailedDataCleared), this._detailedDataSource.studyStatusChanged().unsubscribe(this, this._onStudyStatusChanged), this._detailedDataSource.destroy(), this._detailedDataSource = null), null !== this._roughDataSource && (this._roughDataSource.dataUpdated().unsubscribe(this, this._onRoughOrDetailedDataUpdated), this._roughDataSource.dataCleared().unsubscribe(this, this._onRoughOrDetailedDataCleared), this._roughDataSource.studyStatusChanged().unsubscribe(this, this._onStudyStatusChanged), this._roughDataSource.destroy(), this._roughDataSource = null)
                }
                data() {
                    return this._loadedPlots || this._mergedPlots
                }
                graphics() {
                    return this._loadedGraphics || this._mergedGraphics
                }
                clearData() {
                    null !== this._roughDataSource && this._roughDataSource.clearData(), null !== this._detailedDataSource && this._detailedDataSource.clearData()
                }
                restoreData(e) {
                    this._invalidateLastNonEmptyPlotRowCache(), this._loadedPlots = this._emptyPlotList(), this._loadedPlots.restoreState(e), void 0 !== e.graphics && (this._loadedGraphics = (0, St.loadStudyGraphics)(e.graphics)), this._postProcessGraphics()
                }
                isFailed() {
                    return !this._isPackageAvailable || null !== this._roughDataSource && this._roughDataSource.studyStatus().type === ft.StudyStatusType.Error || null !== this._detailedDataSource && this._detailedDataSource.studyStatus().type === ft.StudyStatusType.Error
                }
                isLoading() {
                    return null !== this._roughDataSource && this._roughDataSource.studyStatus().type === ft.StudyStatusType.Loading || null !== this._detailedDataSource && this._detailedDataSource.studyStatus().type === ft.StudyStatusType.Loading
                }
                isStarted() {
                    return null !== this._roughDataSource && this._roughDataSource.isStarted() || null !== this._detailedDataSource && this._detailedDataSource.isStarted()
                }
                sourceId() {
                    throw new Error("Invalid operation")
                }
                idForAlert() {
                    return super._collectDepsForAlert().idForAlert
                }
                hasStateForAlert() {
                    return super.hasStateForAlert() && null !== this._alertsStudyMetaInfo
                }
                canHaveChildren() {
                    return !1
                }
                isChildStudy() {
                    return !1
                }
                hasChildren() {
                    return !1
                }
                getAllChildren() {
                    return []
                }
                processHibernate() {
                    this.isVisible() ? (null === this._roughDataSource || this._roughDataSource.isStarted() || (this._roughDataSource.start(), this._onHibernationStateChange.fire(!1)), null === this._detailedDataSource || this._detailedDataSource.isStarted() || this._detailedDataSource.start()) : (null !== this._roughDataSource && this._roughDataSource.isStarted() && (this._roughDataSource.stop(), this._onHibernationStateChange.fire(!0)), null !== this._detailedDataSource && this._detailedDataSource.isStarted() && this._detailedDataSource.stop())
                }
                isHibernated() {
                    return !(this.isVisible() || null !== this._roughDataSource && this._roughDataSource.isStarted() || null !== this._detailedDataSource && this._detailedDataSource.isStarted())
                }
                _stopStudyOnServer() {
                    var e, t;
                    this._chartApi && this._chartApi.isConnected().value() && ((null === (e = this._roughDataSource) || void 0 === e ? void 0 : e.isStarted()) && this._roughDataSource.stop(), (null === (t = this._detailedDataSource) || void 0 === t ? void 0 : t.isStarted()) && this._detailedDataSource.stop())
                }
                async _startAfterSymbolsResolved(e, t) {
                    if (this.isStarted() && !this.isRestarting()) return;
                    if (this._restarting = !1, this._isPackageAvailable = Nt(), !this._isPackageAvailable) return void this._setStatus({
                        type: ft.StudyStatusType.Error,
                        errorDescription: {
                            error: Et
                        }
                    });
                    if (!this._allInputsAreValid()) return;
                    this._inputs = this._apiInputs();
                    const i = this.model().studyMetaInfoRepository();
                    if (null === this._roughDataSource) {
                        const e = await i.findById({
                            type: "java",
                            studyId: Vt
                        });
                        this._roughDataSource = new gt.StudyDataSource(this.model().chartApi(), this.model().mainSeries().seriesSource(), "vbpsessionsrough_", e), this._roughDataSource.studyStatusChanged().subscribe(this, this._onStudyStatusChanged), this._roughDataSource.dataCleared().subscribe(this, this._onRoughOrDetailedDataCleared), this._roughDataSource.dataUpdated().subscribe(this, this._onRoughOrDetailedDataUpdated)
                    } else this._roughDataSource.stop();
                    if (this._roughDataSource.setInputs(Ft(this._roughDataSource.metaInfo().inputs, this._inputs)), this.processHibernate(), null === this._detailedDataSource) {
                        const e = await i.findById({
                            type: "java",
                            studyId: At
                        });
                        this._detailedDataSource = new gt.StudyDataSource(this.model().chartApi(), this.model().mainSeries().seriesSource(), "vbpsessionsdetailed_", e), this._detailedDataSource.studyStatusChanged().subscribe(this, this._onStudyStatusChanged), this._detailedDataSource.dataCleared().subscribe(this, this._onRoughOrDetailedDataCleared),
                            this._detailedDataSource.dataUpdated().subscribe(this, this._onRoughOrDetailedDataUpdated)
                    } else this._detailedDataSource.stop();
                    this._detailedDataSource.setInputs(Ot(this._inputs)), this.processHibernate(), this._createStudyGraphics(), this._subscribeToSessionId(), this._setStatus(this._statusValueFromDataSources()), this._onStart.fire(), null === this._alertsStudyMetaInfo && (this._alertsStudyMetaInfo = await i.findById({
                        type: "java",
                        studyId: kt
                    }))
                }
                _changeInputsImpl(e, t) {
                    if (null !== this._roughDataSource) {
                        if ((0, yt.areStudyInputsEqual)(this._roughDataSource.metaInfo().inputs, t, e)) {
                            if (null !== this._detailedDataSource) {
                                const t = Ot(e),
                                    i = (0, yt.rangeDependentStudyInputsToTimeRange)(t);
                                if (this._moreDetailedDataRequiredForTimeRange(i)) {
                                    if (this._detailedDataSource.isActive()) {
                                        const e = this._detailedDataSource.stopAndStealData();
                                        if (e.plots.size() > 0 || !(0, St.isStudyGraphicsEmpty)(e.graphics)) {
                                            const t = (0, h.ensureNotNull)(this._detailedDataSource.inputs());
                                            e.plots = this._extractEffectiveDetailedPlotValues(e.plots, t), this._detailedDataBuffer.enqueue({
                                                lod: Ht(t),
                                                value: e
                                            })
                                        }
                                    }
                                    this._detailedDataSource.setInputs(t), this._detailedDataSource.start()
                                }
                            }
                        } else this._roughDataSource.setInputs(Ft(this._roughDataSource.metaInfo().inputs, e)), this._detailedDataBuffer.clear(), null !== this._detailedDataSource && this._detailedDataSource.setInputs(Ot(e));
                        null !== this._detailedDataSource && this._createStudyGraphics()
                    }
                }
                _collectDepsForAlert() {
                    const e = super._collectDepsForAlert();
                    if (null === this._alertsStudyMetaInfo) throw new Error("Alerts study metainfo is not ready yet. Have you checked the alert availability using hasStateForAlert()?");
                    return { ...e,
                        studyDependencies: e.studyDependencies.map((e => {
                            const t = e.study === Wt(this.metaInfo());
                            return {
                                id: e.id,
                                inputs: t ? (i = e.inputs, { ...i,
                                    subscribeRealtime: !0
                                }) : e.inputs,
                                study: t && null !== this._alertsStudyMetaInfo ? Wt(this._alertsStudyMetaInfo) : e.study
                            };
                            var i
                        }))
                    }
                }
                _statusValueFromDataSources() {
                    const e = {
                        type: ft.StudyStatusType.Undefined
                    };
                    if (null === this._roughDataSource || null === this._detailedDataSource) return e;
                    const t = this._roughDataSource.studyStatus(),
                        i = this._detailedDataSource.studyStatus();
                    if (t.type === ft.StudyStatusType.Error) return t;
                    if (i.type === ft.StudyStatusType.Error) return i;
                    if (t.type === ft.StudyStatusType.Loading || i.type === ft.StudyStatusType.Loading) {
                        const e = t.type === ft.StudyStatusType.Loading ? t.startTime : 1 / 0,
                            s = i.type === ft.StudyStatusType.Loading ? i.startTime : 1 / 0;
                        return {
                            type: ft.StudyStatusType.Loading,
                            startTime: Math.min(e, s)
                        }
                    }
                    return t.type === ft.StudyStatusType.Completed ? {
                        type: ft.StudyStatusType.Completed
                    } : e
                }
                _emptyPlotList() {
                    return new mt.PlotList((0, bt.studyPlotFunctionMap)(this.metaInfo()), bt.studyEmptyPlotValuePredicate)
                }
                _createStudyPlots() {
                    const e = (0, h.ensureNotNull)(this._roughDataSource),
                        t = (0, h.ensureNotNull)(this._detailedDataSource);
                    this._mergedPlots.clear();
                    const i = [];
                    i.push({
                        lod: Mt,
                        value: e.plots()
                    }), this._detailedDataBuffer.forEach((e => {
                        i.push({
                            lod: e.lod,
                            value: e.value.plots
                        })
                    }));
                    const s = (0, h.ensureNotNull)(t.inputs());
                    i.push({
                        lod: Ht(s),
                        value: this._extractEffectiveDetailedPlotValues(t.plots(), s)
                    }), i.sort(((e, t) => t.lod - e.lod));
                    for (const e of i) e.value.each(((e, t) => {
                        for (const e of t)
                            if (void 0 === e) return !1;
                        return this._mergedPlots.add(e, t), !1
                    }));
                    this._invalidateLastNonEmptyPlotRowCache()
                }
                _createStudyGraphics() {
                    const e = (0, h.ensureNotNull)(this._roughDataSource),
                        t = (0, h.ensureNotNull)(this._detailedDataSource),
                        i = [];
                    this._detailedDataBuffer.forEach((e => {
                        i.push({
                            lod: e.lod,
                            value: e.value.graphics
                        })
                    })), void 0 !== this._inputs && i.push({
                        lod: Ht(this._inputs),
                        value: t.graphics()
                    }), i.sort(((e, t) => e.lod - t.lod));
                    const s = i.map((e => e.value));
                    this._mergedGraphics = new Dt(this.metaInfo().graphics, e.graphics(), s), this._postProcessGraphics()
                }
                _extractEffectiveDetailedPlotValues(e, t) {
                    const i = (0, yt.rangeDependentStudyInputsToTimeRange)(t),
                        s = this.model().timeScale().timePointToIndex(i.from),
                        r = this.model().timeScale().timePointToIndex(i.to);
                    return e.size() > 0 ? e.range(s || (0, h.ensureNotNull)(e.firstIndex()), r || (0, h.ensureNotNull)(e.lastIndex())) : this._emptyPlotList()
                }
                _moreDetailedDataRequiredForTimeRange(e) {
                    const {
                        from: t,
                        to: i
                    } = e;
                    let s = !1;
                    return (0, h.ensureNotNull)(this._roughDataSource).graphics().hhistsByTimePointIndex().forEach(((e, r) => {
                        if (s) return;
                        const o = this.model().timeScale().indexToTimePoint(r);
                        if (null === o || o < t || i < o) return;
                        const n = i - t;
                        let l = !1;
                        this._detailedDataBuffer.forEach((e => {
                            if (e.lod <= n) {
                                e.value.graphics.hhistsByTimePointIndex().has(r) && (l = !0)
                            }
                        })), l || (s = !0)
                    })), s
                }
                _onStudyStatusChanged() {
                    this._setStatus(this._statusValueFromDataSources()), (0, h.ensureDefined)(this._statusView).update()
                }
                _onRoughOrDetailedDataCleared() {
                    null !== this._roughDataSource && null !== this._detailedDataSource && (this._invalidateLastNonEmptyPlotRowCache(), this._detailedDataBuffer.clear(), this._createStudyPlots(), this._createStudyGraphics(), this.updateAllViews((0, Lt.sourceChangeEvent)({
                        sourceId: this.id(),
                        clearData: !0
                    })), this.model().updateSource(this))
                }
                _onRoughOrDetailedDataUpdated(e) {
                    null !== this._roughDataSource && null !== this._detailedDataSource && (e.length > 0 && this._createStudyPlots(), this.updateAllViews((0, Lt.sourceChangeEvent)(this.id())), this.model().updateSource(this))
                }
            }

            function Nt() {
                return void 0 !== window.pro && window.pro.hasPackage(Rt)
            }

            function Ft(e, t) {
                const i = {};
                for (const s of e) i[s.id] = t[s.id];
                return i
            }

            function Ot(e) {
                const t = e.last_visible_bar_time - e.first_visible_bar_time;
                return { ...e,
                    first_visible_bar_time: e.first_visible_bar_time - t,
                    last_visible_bar_time: e.last_visible_bar_time + t
                }
            }

            function Ht(e) {
                const {
                    from: t,
                    to: i
                } = (0, yt.rangeDependentStudyInputsToTimeRange)(e);
                return i - t
            }

            function Wt(e) {
                return `${e.id}-${e.version}`
            }
            var zt = i(852469),
                Ut = i(470720),
                qt = i(921341),
                Gt = i(501817),
                Yt = i(486702),
                $t = i(357696);
            const Qt = s.enabled("hide_main_series_symbol_from_indicator_legend");
            class jt extends o.Study {
                constructor(e, t, i, s) {
                    super(e, t, i, s), (0, h.ensureDefined)(this.properties().childs().styles.childs().vol_ma).childs().display.subscribe(this, (() => this.invalidateTitleCache()))
                }
                base() {
                    return 1
                }
                destroy() {
                    (0, h.ensureDefined)(this.properties().childs().styles.childs().vol_ma).childs().display.listeners().unsubscribeAll(this), super.destroy()
                }
                showOnTopOnHovering() {
                    return !1
                }
                _titleInputs() {
                    const e = {
                        symbolsForDisplay: !0,
                        skipHiddenInputs: !0,
                        fakeInputsForDisplay: !0,
                        asObject: !1,
                        skipOptionalEmptySymbolInputs: Qt
                    };
                    return 0 !== (0, h.ensureDefined)(this.properties().childs().styles.childs().vol_ma).childs().display.value() ? this.inputs(e) : this.inputs({ ...e,
                        skippedInputs: ["length"]
                    })
                }
                _titleInParts(e, t, i, s) {
                    const r = super._titleInParts(e, t, i, s),
                        o = this._getVolumeUnit();
                    return o && (r[0] += ` · ${o}`), r
                }
                _getVolumeUnit() {
                    const e = this.symbolSource().symbolInfo();
                    if (e) {
                        switch (e.volume_type) {
                            case "base":
                                return e.base_currency;
                            case "quote":
                                return e.original_currency_code || e.currency_code;
                            case "tick":
                                return d.t(null, void 0, i(130973))
                        }
                    }
                }
            }
            var Zt = i(386482);

            function Xt(e, t = "shift", i) {
                return {
                    studyConstructor: e,
                    colorRotationMode: t,
                    colorRotationComparator: i
                }
            }
            const Jt = {
                study_PivotPointsStandard: Xt(Ut.study_PivotPointsStandard),
                study_Overlay: Xt(qt.study_Overlay, "loop"),
                study_Compare: Xt(Gt.StudyCompare, "loop"),
                study_Volume: Xt(jt),
                study_VbPVisible: Xt(class extends _t {
                    alertCreationAvailable() {
                        return new(lt())(!1).readonly()
                    }
                    _needExtendToBarsEnding() {
                        return !1
                    }
                }),
                study_ScriptWithDataOffset: Xt(Yt.study_ScriptWithDataOffset)
            }; {
                Jt.study_Earnings = Xt(Ne), Jt.study_Splits = Xt(Be), Jt.study_Dividends = Xt(Ee), Jt.study_BarSetContinuousRollDates = Xt(et);
                const e = (e, t) => (0, Zt.isFundamentalStudyMetaInfo)(t);
                Jt[Zt.fundamentalsPrefix] = Xt(tt.Fundamental, "loop", e), Jt.study_ElliottWave = Xt(it.study_ElliottWave), Jt.study_LinearRegression = Xt(rt), Jt.study_PivotPointsHighLow = Xt(ot.study_PivotPointsHighLow), Jt.study_VbPSessions = Xt(_t), Jt.study_VbPPeriodic = Xt(ct), Jt.study_VbPSessionsRoughDetailed = Xt(Bt), Jt.study_ZigZag = Xt(zt.study_ZigZag), Jt.study_VbPAutoAnchored = Xt(ct), TradingView.StudyStrategy = Xt(n.StudyStrategy).studyConstructor
            }
            for (const e in Jt) Jt.hasOwnProperty(e) && (TradingView[e] = Jt[e].studyConstructor);

            function Kt(e) {
                return e instanceof o.Study
            }

            function ei(e) {
                return e instanceof n.StudyStrategy
            }

            function ti(e) {
                return e instanceof $t.StudyStub
            }

            function ii(e) {
                return e instanceof tt.Fundamental
            }

            function si(e) {
                return e instanceof Ne || e instanceof Be || e instanceof Ee
            }

            function ri(e) {
                return e instanceof et
            }

            function oi(e, t, i, s, l) {
                if (r.StudyMetaInfo.isScriptStrategy(s)) return new n.StudyStrategy(e, t, i, s);
                const a = (0, Zt.studyNameByMetaInfo)(s),
                    h = new(a in Jt ? Jt[a].studyConstructor : o.Study)(e, t, i, s);
                return void 0 !== l && h.setId(l), h
            }

            function ni(e) {
                const t = (0, Zt.studyNameByMetaInfo)(e);
                return t in Jt ? Jt[t].colorRotationMode : void 0 === e.pine || r.StudyMetaInfo.isStandardPine(e.id) ? 1 !== e.plots.length ? "shift" : "loop" : null
            }

            function li(e, t) {
                return e.id === t.id && (s = t, ((i = e).pine ? i.pine.version : void 0) === (s.pine ? s.pine.version : void 0));
                var i, s
            }

            function ai(e) {
                const t = (0, Zt.studyNameByMetaInfo)(e);
                if (t in Jt) {
                    const e = Jt[t].colorRotationComparator;
                    if (void 0 !== e) return e
                }
                return li
            }
        },
        357696: (e, t, i) => {
            "use strict";
            i.d(t, {
                StudyStub: () => m
            });
            var s = i(397581),
                r = i(730293),
                o = i(831471),
                n = i(869403),
                l = i.n(n),
                a = i(40210),
                h = i.n(a),
                u = i(161106);
            class d extends u.StudyStatusProviderBase {
                text() {
                    return this._source.isActualInterval() ? `${this._source.title()} ${this.sourceStatusText()}` : this._source.title()
                }
            }
            var c = i(263314);
            class _ {
                getItems() {
                    return []
                }
                getValues(e) {
                    return []
                }
            }
            const p = new(l());
            class m extends r.PriceDataSource {
                constructor(e, t, i) {
                    super(e), this._priceStep = .01, this._status = {
                        type: c.StudyStatusType.Undefined
                    }, this._statusChanged = new(l()), this._formatter = new o.PriceFormatter(100), this._origState = t, this._title = i;
                    this._properties = new(h())({
                        visible: !0
                    }), this._statusView = new s.StudyStatusView(this)
                }
                barColorer() {
                    return null
                }
                properties() {
                    return this._properties
                }
                statusView() {
                    return this._statusView
                }
                legendView() {
                    return null
                }
                state(e) {
                    return this._origState
                }
                setStatus(e) {
                    this._status = e, this._statusChanged.fire()
                }
                formatter() {
                    return this._formatter
                }
                name() {
                    return this._title
                }
                title() {
                    return this._title
                }
                titleInParts() {
                    return [this._title]
                }
                isFailed() {
                    return this._status.type === c.StudyStatusType.Error
                }
                isLoading() {
                    return this._status.type === c.StudyStatusType.Loading
                }
                setFailed(e) {
                    this.setStatus({
                        type: c.StudyStatusType.Error,
                        errorDescription: {
                            error: e
                        }
                    }), this._model.updateSource(this)
                }
                isSymbolInvalid() {
                    return !1
                }
                isActualInterval() {
                    return !0
                }
                onIsActualIntervalChange() {
                    return p
                }
                start() {}
                status() {
                    return this._status
                }
                onStatusChanged() {
                    return this._statusChanged
                }
                firstValue() {
                    return null
                }
                currency() {
                    return null
                }
                sessionId() {
                    return this._model.mainSeries().sessionId()
                }
                sessionIdChanged() {
                    return this._model.mainSeries().sessionIdChanged()
                }
                unit() {
                    return null
                }
                symbolSource() {
                    return this._model.mainSeries()
                }
                barsProvider() {
                    return this._model.mainSeries()
                }
                valuesProvider() {
                    return new _
                }
                statusProvider(e) {
                    return new d(this, this._model.properties().childs().scalesProperties.childs().textColor)
                }
            }
        },
        501817: (e, t, i) => {
            "use strict";
            i.d(t, {
                StudyCompare: () => H
            });
            var s = i(650151),
                r = i(274440),
                o = i(736887),
                n = i(373123),
                l = i(720444),
                a = i(40210),
                h = i.n(a),
                u = i(495046),
                d = i(530664),
                c = i(841404),
                _ = i(441970),
                p = i(114123);
            const m = u.enabled("force_exchange_as_title");
            class v extends c.PriceAxisView {
                constructor(e, t) {
                    super(), this._studyCompare = e, this._data = t
                }
                _updateRendererData(e, t, i) {
                    e.visible = !1, t.visible = !1;
                    const r = this._studyCompare.priceScale(),
                        o = this._studyCompare.lastValueData(this._data.plotIndex, !1);
                    if (o.noData || null === r || r.isEmpty()) return;
                    const n = this._studyCompare.model(),
                        l = n.timeScale().visibleBarsStrictRange(),
                        a = n.mainSeries().bars().lastIndex();
                    if (null === l || null === a) return;
                    if (a <= l.lastBar()) i.background = (0, p.resetTransparency)(o.color), i.textColor = this.generateTextColor(i.background), i.borderColor = void 0, e.borderVisible = !1, t.borderVisible = !1;
                    else {
                        const r = n.backgroundColorAtYPercentFromTop(o.coordinate / (0, s.ensureNotNull)(n.paneForSource(this._studyCompare)).height());
                        i.background = r, i.textColor = (0, p.resetTransparency)(o.color), i.borderColor = i.textColor, e.borderVisible = !0, t.borderVisible = !0
                    }
                    i.coordinate = o.coordinate, i.floatCoordinate = o.floatCoordinate;
                    const h = n.properties().childs().scalesProperties.childs();
                    h.showSeriesLastValue.value() && (e.text = (0, _.getCurrentModePriceText)(r, o), h.seriesLastValueMode.value() !== d.PriceAxisLastValueMode.LastPriceAndPercentageValue ? e.secondLine = "" : e.secondLine = (0, _.getOppositeModePriceText)(r, o), e.visible = !0), t.text = "", h.showSymbolLabels.value() && (t.text = this._paneText(),
                        t.visible = t.text.length > 0)
                }
                _paneText() {
                    let e = "";
                    const t = this._studyCompare.symbolInfo();
                    return m ? e = (0, l.displayedSymbolExchange)(t) : this._studyCompare.model().properties().childs().scalesProperties.childs().showSymbolLabels.value() && (e = (0, l.displayedSymbolName)(t)), e
                }
            }
            var y = i(777754),
                f = i(4836),
                g = i(414805),
                b = i(480071),
                S = i(638456),
                w = i(758337),
                x = i(216392);
            class C extends x.StudyValuesProvider {
                constructor(e, t) {
                    super(e, t), this._emptyValues[0].title = e.guiPlotName("")
                }
                _hideValues() {
                    return !1
                }
            }
            const P = S.CheckMobile.any();
            class I extends f.StudyDataWindowView {
                constructor(e, t) {
                    super(e, t), this._studyCompare = e
                }
                _hideValues() {
                    return !1
                }
                _createValuesProvider(e, t) {
                    return new C(e, t)
                }
                _currentIndex() {
                    const e = this._model.crossHairSource().lockedIndex;
                    let t;
                    return P && (null === this._model.crossHairSource().pane && void 0 === e || (0, g.isLineToolName)(b.tool.value()) || null !== this._model.lineBeingEdited()) ? t = this._study.data().lastIndex() : (t = this._model.crossHairSource().appliedIndex(), (0, w.isNumber)(t) || (t = this._study.data().lastIndex())), t
                }
            }
            var T = i(232371);
            class D extends I {
                constructor(e, t) {
                    super(e, t), this._additional = null, this._showSeriesOHLC = t.properties().childs().paneProperties.childs().legendProperties.childs().showSeriesOHLC, this._showSeriesOHLC.subscribe(this, this.update)
                }
                areValuesVisible() {
                    return this._showSeriesOHLC.value()
                }
                destroy() {
                    this._showSeriesOHLC.unsubscribeAll(this)
                }
                additional() {
                    return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._additional
                }
                _updateImpl() {
                    {
                        const e = (0, T.getDataVendorString)(this._studyCompare.symbolInfo());
                        this._additional = e ? y.t(null, void 0, i(493345)) + " " + e : null
                    }
                    super._updateImpl()
                }
            }
            var L = i(397581),
                R = i(431235);
            class V extends R.StudyStatusProvider {
                getSplitTitle() {
                    return this._source.titleInParts(!0, void 0, !1, !1)
                }
                text() {
                    return this._source.isActualInterval() ? this._source.isFailed() ? `${this._source.title(!0,void 0,!1,!1)}: ${this.sourceStatusText()}` : `${this._source.title(!0,void 0,!1,!1)} ${this.sourceStatusText()}` : this._source.title(!0, void 0, !1, !1)
                }
            }
            var A = i(992001),
                k = i(988411),
                M = i.n(k);
            const E = u.enabled("study_overlay_compare_legend_option"),
                B = u.enabled("force_exchange_as_title"),
                N = u.enabled("uppercase_instrument_names"),
                F = !u.enabled("hide_study_compare_legend_item"),
                O = u.enabled("hide_unresolved_symbols_in_legend");
            class H extends n.Study {
                constructor(e, t, i, s) {
                    super(e, function(e) {
                            return e.hasChild("currencyId") || e.addChild("currencyId", new(h())(null)), e.hasChild("unitId") || e.addChild("unitId", new(h())(null)), e.addExclusion("currencyId"), e.addExclusion("unitId"), e
                        }(t), i, s), this._isActingAsSymbolSource = new(M())(!0), this._realignToolsLastParams = null, this.properties().childs().minTick.subscribe(null, (() => this._recreatePriceFormattingDependencies())), this.properties().childs().minTick.subscribe(null, (() => this._model.fullUpdate())), this.properties().childs().currencyId.subscribe(this, this._onCurrencyChanged), this.properties().childs().unitId.subscribe(this, this._onUnitChanged), this._symbolResolvingActive = new(M())(!1), this._symbolHibernated = new(M())(!1),
                        e.mainSeries().onIntervalChanged().subscribe(this, (() => e.realignLineTools(this)))
                }
                destroy() {
                    this._model.mainSeries().onIntervalChanged().unsubscribeAll(this), super.destroy()
                }
                properties() {
                    return this._properties
                }
                isActingAsSymbolSource() {
                    return this._isActingAsSymbolSource.readonly()
                }
                createPriceAxisView(e) {
                    return new v(this, {
                        plotIndex: "compare"
                    })
                }
                setSymbolParams(e) {
                    this._setSymbolCurrencyUnitInternal(e)
                }
                symbol() {
                    return this.properties().childs().inputs.childs().symbol.value()
                }
                setSymbol(e) {
                    this.setSymbolParams({
                        symbol: e
                    })
                }
                symbolInfo() {
                    if (!this._resolvedSymbols) return null;
                    const e = this.properties().childs().inputs.childs().symbol.value();
                    if (!e) return null;
                    let t;
                    return t = this._model.isSnapshot() ? this._resolvedSymbols.___snapshot || null : this._resolvedSymbols[this._getSymbolForResolve(e)] || null, this._model.isSnapshot() && null === t && (t = (0, r.getObsoleteIdeaSymbolInfo)(this._resolvedSymbols, e, this.currency()), null !== t && (this._resolvedSymbols.___snapshot = t)), t
                }
                symbolResolved() {
                    return this.symbolsResolved()
                }
                symbolResolvingActive() {
                    return this._symbolResolvingActive
                }
                symbolHibernated() {
                    return this._symbolHibernated
                }
                isVisible() {
                    const e = super.isVisible();
                    return this._symbolHibernated.setValue(!e), e
                }
                symbolSameAsCurrent(e) {
                    return (0, A.symbolSameAsCurrent)(e, this.symbolInfo())
                }
                currency() {
                    return this.properties().childs().currencyId.value() || null
                }
                setCurrency(e) {
                    this.setSymbolParams({
                        currency: e
                    })
                }
                isConvertedToOtherCurrency() {
                    return (0, l.isConvertedToOtherCurrency)(this.symbolInfo())
                }
                unit() {
                    return this.properties().childs().unitId.value() || null
                }
                setUnit(e) {
                    this.setSymbolParams({
                        unit: e
                    })
                }
                isConvertedToOtherUnit() {
                    return (0, l.isConvertedToOtherUnit)(this.symbolInfo(), this._model.unitConversionEnabled())
                }
                style() {
                    return 2
                }
                setStyle(e) {}
                interval() {
                    return this._model.mainSeries().interval()
                }
                setInterval(e) {}
                symbolSource() {
                    return this
                }
                state(e, t) {
                    const i = super.state(e, t);
                    return this._model.unitConversionEnabled() || delete i.state.unitId, e && ((0, s.ensureDefined)(i.data).symbols = {
                        ___snapshot: this.symbolInfo() || void 0
                    }), i
                }
                symbolTitle(e, t) {
                    return this.title(!0, {}, !1, e)
                }
                titleInParts(e, t, i, s) {
                    const r = this._titleInParts(e, t, i, s).join(", ");
                    return [N ? r.toUpperCase() : r]
                }
                tags() {
                    const e = this.symbol();
                    return e ? [e] : []
                }
                statusView() {
                    return F ? super.statusView() : null
                }
                guiPlotName(e) {
                    return this.properties().childs().inputs.childs().symbol.value()
                }
                canOverrideMinTick() {
                    return !0
                }
                canBeHiddenByGlobalFlag() {
                    return !1
                }
                valuesProvider() {
                    return new C(this, this.model())
                }
                statusProvider(e) {
                    return new V(this, this._model.properties().childs().scalesProperties.childs().textColor)
                }
                measureUnitId() {
                    return (0, l.measureUnitId)(this.symbolInfo())
                }
                _createViews() {
                    this._legendView || (this._legendView = new D(this, this._model)), this._dataWindowView || (this._dataWindowView = new I(this, this._model)), this._statusView || (this._statusView = new L.StudyStatusView(this)), super._createViews()
                }
                _showLastValueOnPriceScale() {
                    return this._model.properties().childs().scalesProperties.childs().showSeriesLastValue.value()
                }
                _onUnitChanged() {
                    "alwaysOff" !== (0, o.currencyUnitVisibilityProperty)().value() && this._model.fullUpdate(),
                        this._model.unitConversionEnabled() && this.isStarted() && this._tryChangeInputs(), this._unitChanged.fire()
                }
                _getSymbolObject(e) {
                    const t = super._getSymbolObject(e),
                        i = this.currency();
                    null !== i && (t["currency-id"] = i);
                    const s = this.unit();
                    return this._model.unitConversionEnabled() && null !== s && (t["unit-id"] = s), t
                }
                _getSymbolForApi(e) {
                    return (0, l.symbolForApi)(this._resolvedSymbolsByInput[e] || null, e)
                }
                _onSymbolResolvingStart() {
                    super._onSymbolResolvingStart(), this._symbolResolvingActive.setValue(!0)
                }
                _onSymbolError() {
                    super._onSymbolError(), this._symbolResolvingActive.setValue(!1)
                }
                _onSymbolResolved(e, t, i) {
                    super._onSymbolResolved(e, t, i), this._recreatePriceFormattingDependencies();
                    const s = t === this.symbol() ? (0, l.extractSymbolNameFromSymbolInfo)(i, this.symbol()) : null,
                        r = (0, l.symbolCurrency)(i),
                        o = (0, l.symbolUnit)(i, this._model.unitConversionEnabled());
                    this._setSymbolCurrencyUnitInternal({
                        symbol: null != s ? s : void 0,
                        currency: r,
                        unit: o
                    }, i), this._symbolResolvingActive.setValue(!1)
                }
                _changeInputsImpl(e, t) {
                    super._changeInputsImpl(e, t), this._realignLineToolsIfParamsChanged()
                }
                _createStudyOnServer() {
                    super._createStudyOnServer(), this._realignLineToolsIfParamsChanged()
                }
                _tryCreateFormatter() {
                    const e = this.symbolInfo();
                    return (0, l.createSeriesFormatter)(e, this.properties().childs().minTick.value())
                }
                _titleInParts(e, t, i, s) {
                    const r = this.symbolInfo();
                    let o;
                    if (r) {
                        const e = (0, l.getStudySymbolExchange)(r);
                        if (B && e) o = e;
                        else if (o = r.name, E) switch (this._model.mainSeries().symbolTextSourceProxyProperty().value()) {
                            case "description":
                                o = r.description;
                                break;
                            case "ticker-and-description":
                                o = `${r.name}, ${r.description}`
                        } else if (e && !s) return [o, [e]]
                    } else o = O ? "" : this.properties().childs().inputs.childs().symbol.value();
                    return [o]
                }
                _skipHistogramBaseOnAutoScale() {
                    return !0
                }
                _setSymbolCurrencyUnitInternal(e, t) {
                    const {
                        symbol: i,
                        currency: s,
                        unit: r
                    } = e, o = this.properties().childs(), n = o.inputs.childs().symbol.value(), a = o.currencyId.value(), h = o.unitId.value();
                    if (void 0 !== i && i !== n && o.inputs.childs().symbol.setValueSilently(i), void 0 !== s && s !== a && o.currencyId.setValueSilently(s), void 0 !== r && r !== h && o.unitId.setValueSilently(r), t) this._resolvedSymbolsByInput[this.symbol()] = t, this._resolvedSymbols[this._getSymbolForResolve(this.symbol())] = t, this._realignToolsLastParams = null;
                    else {
                        const e = this.symbolInfo();
                        null !== e && (o.currencyId.setValueSilently((0, l.symbolCurrency)(e)), o.unitId.setValueSilently((0, l.symbolUnit)(e, this._model.unitConversionEnabled())))
                    }
                    o.inputs.childs().symbol.value() !== n && o.inputs.childs().symbol.listeners().fire(o.inputs.childs().symbol), o.currencyId.value() !== a && o.currencyId.listeners().fire(o.currencyId), o.unitId.value() !== h && o.unitId.listeners().fire(o.unitId), this._realignLineToolsIfParamsChanged()
                }
                _realignLineToolsIfParamsChanged() {
                    const e = this.symbol(),
                        t = this.interval(),
                        i = this.currency(),
                        s = this.unit();
                    null !== this._realignToolsLastParams && this._realignToolsLastParams.symbol === e && this._realignToolsLastParams.interval === t && this._realignToolsLastParams.currency === i && this._realignToolsLastParams.unit === s || (this._model.realignLineTools(this), this._realignToolsLastParams = {
                        symbol: e,
                        interval: t,
                        currency: i,
                        unit: s
                    })
                }
            }
        },
        524334: (e, t, i) => {
            "use strict";
            i.d(t, {
                StudyOverlayBase: () => le
            });
            var s = i(650151),
                r = i(274440),
                o = i(638456),
                n = i(272001),
                l = i(373123),
                a = i(20651),
                h = i(736887),
                u = i(311854),
                d = i(720444),
                c = i(40210),
                _ = i.n(c),
                p = i(7628),
                m = i(495046),
                v = i(341342),
                y = i(992001),
                f = (i(99670), i(991826)),
                g = i(884566),
                b = i(812363),
                S = i(758337),
                w = i(168210),
                x = i(988411),
                C = i.n(x),
                P = (i(404822), i(397581)),
                I = i(130737),
                T = i(841404),
                D = i(530664),
                L = i(441970),
                R = i(114123);
            const V = m.enabled("force_exchange_as_title");
            class A extends T.PriceAxisView {
                constructor(e) {
                    super(), this._source = e
                }
                _updateRendererData(e, t, i) {
                    e.visible = !1, t.visible = !1;
                    const r = this._source.lastValueData("close", !1);
                    if (r.noData) return;
                    const o = this._source.model(),
                        n = this._source.priceScale();
                    if (null === n) return;
                    if (!o.isPriceScaleVisible(n)) return;
                    const l = o.timeScale().visibleBarsStrictRange(),
                        a = o.mainSeries().bars().lastIndex();
                    if (null === l || null === a) return;
                    if (a <= l.lastBar()) i.background = (0, R.resetTransparency)(r.color), i.textColor = this.generateTextColor(r.color), e.borderVisible = !1, t.borderVisible = !1;
                    else {
                        const n = o.backgroundColorAtYPercentFromTop(r.coordinate / (0, s.ensureNotNull)(o.paneForSource(this._source)).height());
                        i.background = n, i.textColor = (0, R.resetTransparency)(r.color), i.borderColor = i.textColor, e.borderVisible = !0, t.borderVisible = !0
                    }
                    i.coordinate = r.coordinate, i.floatCoordinate = r.floatCoordinate;
                    const h = this._source.model().properties().childs().scalesProperties.childs();
                    h.showSeriesLastValue.value() && (e.text = (0, L.getCurrentModePriceText)(n, r), h.seriesLastValueMode.value() !== D.PriceAxisLastValueMode.LastPriceAndPercentageValue ? e.secondLine = "" : e.secondLine = (0, L.getOppositeModePriceText)(n, r), e.visible = !0), t.text = "", h.showSymbolLabels.value() && (t.text = this._paneText(), t.visible = t.text.length > 0)
                }
                _paneText() {
                    let e = "";
                    const t = this._source.symbolInfo();
                    return V ? e = (0, d.displayedSymbolExchange)(t) : this._source.model().properties().childs().scalesProperties.childs().showSymbolLabels.value() && (e = (0, d.displayedSymbolName)(t)), e
                }
            }
            var k = i(471502);
            class M extends k.PriceLineAxisView {
                constructor(e) {
                    super(), this._study = e
                }
                _value() {
                    return this._study.lastValueData("", !0)
                }
                _priceLineColor(e) {
                    return e
                }
                _lineWidth() {
                    return 1
                }
                _isVisible() {
                    const e = this._study.model().properties().childs().scalesProperties.childs().showSeriesLastValue.value();
                    return this._study.properties().childs().showPriceLine.value() && e
                }
            }
            var E = i(631586),
                B = i(803936);
            class N {
                constructor(e) {
                    this._lineRenderer = new B.HorizontalLineRenderer, this._visible = !1, this._source = e
                }
                update() {
                    if (this._visible = !1, !this._source.properties().childs().showPriceLine.value()) return;
                    const e = this._source.lastValueData("", !0);
                    e.noData || (this._visible = !0, this._lineRenderer.setData({
                        y: e.coordinate,
                        color: e.color,
                        linewidth: 1,
                        linestyle: E.LINESTYLE_DOTTED,
                        visible: this._visible
                    }))
                }
                renderer() {
                    return this._visible ? this._lineRenderer : null
                }
            }
            var F = i(801874),
                O = i(777754),
                H = i(814606),
                W = i(894042),
                z = i(232371);
            class U extends F.OverlayDataWindowView {
                constructor(e, t) {
                    super(e, t), this._additional = null, this._studyOverlay = e, this._backgroundColorSpawn = t.backgroundTopColor().spawn(),
                        this._backgroundColorSpawn.subscribe(this.update.bind(this));
                    const i = t.properties().childs().paneProperties.childs().legendProperties.childs();
                    this._visibilityProperty = (0, W.combineProperty)(((e, t) => e || t), i.showBarChange, i.showSeriesOHLC), this._visibilityProperty.subscribe(this, this.update)
                }
                areValuesVisible() {
                    return this._visibilityProperty.value()
                }
                additional() {
                    return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._additional
                }
                destroy() {
                    this._backgroundColorSpawn.destroy(), this._visibilityProperty.destroy()
                }
                _updateImpl() {
                    super._updateImpl(); {
                        const e = (0, z.getDataVendorString)(this._studyOverlay.symbolInfo());
                        this._additional = e ? O.t(null, void 0, i(493345)) + " " + e : null
                    }
                }
                _createValuesProvider(e, t) {
                    return new H.OverlayLegendValuesProvider(e, t)
                }
            }
            var q = i(733352),
                G = i(236368),
                Y = i(963121),
                $ = i(29911),
                Q = i(98253),
                j = i(234052),
                Z = i(568631),
                X = i(914431),
                J = i(978444),
                K = i(424061);
            const ee = o.CheckMobile.any() && !0,
                te = m.enabled("uppercase_instrument_names"),
                ie = m.enabled("study_overlay_compare_legend_option"),
                se = (m.enabled("secondary_series_extend_time_scale"), m.enabled("hide_unresolved_symbols_in_legend")),
                re = !m.enabled("hide_study_overlay_legend_item"),
                oe = (0, n.getLogger)("Chart.StudyOverlay");

            function ne(e, t) {
                return null == e[t]
            }
            class le extends l.Study {
                constructor(e, t, i, s) {
                    super(e, function(e) {
                        return e.hasChild("currencyId") || e.addChild("currencyId", new(_())(null)), e.hasChild("unitId") || e.addChild("unitId", new(_())(null)), e.addExclusion("currencyId"), e.addExclusion("unitId"), e
                    }(t), i, s), this._quotesProvider = new v.QuotesProvider, this._seriesSource = null, this._symbolResolvingActive = new(C())(!1), this._symbolHibernated = new(C())(!1), this._styleToRecover = null, this._isActingAsSymbolSource = new(C())(!0), this._realignToolsLastParams = null, this._precomputedBarStyles = new WeakMap, this.m_data = new g.PlotList((0, u.seriesPlotFunctionMap)(), ne), ee && this._quotesProvider.quotesUpdate().subscribe(this, this._onQuotesUpdate);
                    const r = this.properties().childs();
                    r.currencyId.subscribe(this, this._onCurrencyChanged), r.unitId.subscribe(this, this._onUnitChanged), r.allowExtendTimeScale.subscribe(this, this._onAllowExtendTimeScaleChanged), this._onAllowExtendTimeScaleChanged(), this._model.mainSeries().properties().childs().dividendsAdjustment.subscribe(this, (() => {
                        this._tryChangeInputs()
                    })), r.style.subscribe(this, this._onChartStyleChanged), r.lineStyle.childs().priceSource.subscribe(this, this._updateBarFunction), r.areaStyle.childs().priceSource.subscribe(this, this._updateBarFunction), r.baselineStyle.childs().priceSource.subscribe(this, this._updateBarFunction), r.columnStyle.childs().priceSource.subscribe(this, this._updateBarFunction), this._updateBarFunction(), this._formatter = null, e.mainSeries().onIntervalChanged().subscribe(this, (() => e.realignLineTools(this)))
                }
                destroy() {
                    this._model.mainSeries().properties().childs().dividendsAdjustment.unsubscribeAll(this), this._model.mainSeries().onIntervalChanged().unsubscribeAll(this), super.destroy()
                }
                isActingAsSymbolSource() {
                    return this._isActingAsSymbolSource.readonly()
                }
                precomputedBarStyle(e) {
                    return this._precomputedBarStyles.get(e)
                }
                setPrecomputedBarStyle(e, t) {
                    this._precomputedBarStyles.set(e, t)
                }
                properties() {
                    return this._properties
                }
                barColorer() {
                    return new K.SeriesBarColorer(this)
                }
                setSymbolParams(e) {
                    this._setSymbolParamsInternal(e)
                }
                symbol() {
                    return this.properties().childs().inputs.childs().symbol.value()
                }
                setSymbol(e) {
                    this.setSymbolParams({
                        symbol: e
                    })
                }
                symbolInfo() {
                    if (!this._resolvedSymbols) return null;
                    const e = this._properties.childs().inputs.childs().symbol.value();
                    if (!e) return null;
                    let t;
                    return t = this._model.isSnapshot() ? this._resolvedSymbols.___snapshot || null : this._resolvedSymbols[this._getSymbolForResolve(e)] || null, this._model.isSnapshot() && null === t && (t = (0, r.getObsoleteIdeaSymbolInfo)(this._resolvedSymbols, e, this.currency()), null !== t && (this._resolvedSymbols.___snapshot = t)), t
                }
                supportsPressedChunks() {
                    return !1
                }
                pressedChunks(e, t) {
                    throw new Error("Pressed chunks are not supported")
                }
                data() {
                    return null === this._seriesSource ? super.data() : this._seriesSource.data().bars()
                }
                symbolResolved() {
                    return this.symbolsResolved()
                }
                symbolResolvingActive() {
                    return this._symbolResolvingActive
                }
                symbolHibernated() {
                    return this._symbolHibernated
                }
                isVisible() {
                    const e = super.isVisible();
                    return this._symbolHibernated.setValue(!e), e
                }
                symbolSameAsCurrent(e) {
                    return (0, y.symbolSameAsCurrent)(e, this.symbolInfo())
                }
                priceSource() {
                    const e = this.properties().childs();
                    switch (e.style.value()) {
                        case 2:
                            return e.lineStyle.childs().priceSource.value();
                        case 3:
                            return e.areaStyle.childs().priceSource.value();
                        case 10:
                            return e.baselineStyle.childs().priceSource.value();
                        case 13:
                            return e.columnStyle.childs().priceSource.value()
                    }
                    return null
                }
                barFunction() {
                    return this._barFunction
                }
                quotes() {
                    return this._quotesProvider.quotes()
                }
                currency() {
                    return this.properties().childs().currencyId.value() || null
                }
                setCurrency(e) {
                    this.setSymbolParams({
                        currency: e
                    })
                }
                isConvertedToOtherCurrency() {
                    return (0, d.isConvertedToOtherCurrency)(this.symbolInfo())
                }
                unit() {
                    return this.properties().childs().unitId.value() || null
                }
                setUnit(e) {
                    this.setSymbolParams({
                        unit: e
                    })
                }
                isConvertedToOtherUnit() {
                    return (0, d.isConvertedToOtherUnit)(this.symbolInfo(), this._model.unitConversionEnabled())
                }
                style() {
                    return this.properties().childs().style.value()
                }
                setStyle(e) {
                    this.setSymbolParams({
                        style: e
                    })
                }
                interval() {
                    return this._model.mainSeries().interval()
                }
                setInterval(e) {}
                symbolSource() {
                    return this
                }
                barsProvider() {
                    return this
                }
                state(e, t) {
                    const i = super.state(e, t);
                    return this._model.unitConversionEnabled() || delete i.state.unitId, e && ((0, s.ensureDefined)(i.data).symbols = {
                        ___snapshot: this.symbolInfo() || void 0
                    }), i
                }
                symbolTitle(e, t) {
                    return this.title(!0, {}, !1, e)
                }
                title(e, t, i, s) {
                    const r = this._titleInParts(e, t, i, s).join(", ");
                    return te ? r.toUpperCase() : r
                }
                titleInParts(e, t, i, s) {
                    const r = this._titleInParts(e, t, i, s).join(", ");
                    return [te ? r.toUpperCase() : r]
                }
                isStarted() {
                    return null === this._seriesSource ? super.isStarted() : this._seriesSource.isStarted()
                }
                sourceId() {
                    return null === this._seriesSource ? super.sourceId() : (0, s.ensureNotNull)(this._seriesSource.instanceId())
                }
                moveData(e) {
                    null === this._seriesSource ? super.moveData(e) : this._seriesSource.moveData(e)
                }
                firstValue() {
                    const e = this._model.timeScale().visibleBarsStrictRange();
                    if (null === e) return null;
                    const t = e.firstBar();
                    if (0 === this.data().size()) return this._ownFirstValue;
                    const i = this.data().search(t, b.PlotRowSearchMode.NearestRight, 1);
                    return this._ownFirstValue = null !== i ? this._barFunction(i.value, 0) : null, this._ownFirstValue
                }
                lastValueData(e, t, i) {
                    const s = {
                            noData: !0
                        },
                        r = this.priceScale();
                    if (this._model.timeScale().isEmpty() || null === r || r.isEmpty() || this.data().isEmpty()) return s;
                    const o = this._model.timeScale().visibleBarsStrictRange();
                    if (null === o) return s;
                    const n = this.properties().childs();
                    if (!n.visible.value()) return s;
                    const l = this.nearestIndex(o.lastBar(), b.PlotRowSearchMode.NearestLeft, 1);
                    if (void 0 === l) return s;
                    const a = this.firstValue();
                    if (null === a) return s;
                    const h = this._lastNonEmptyPlotRow(4),
                        u = null !== h && o.contains(h.index),
                        d = null !== h ? h.value : null,
                        c = t || u ? d : this.data().valueAt(l);
                    if (null === c) return s;
                    const _ = this._barFunction(c, 2);
                    if (!(0, S.isNumber)(_)) return s;
                    const p = r.priceToCoordinate(_, a);
                    let m;
                    switch (n.style.value()) {
                        case 0:
                            m = c[1] <= c[4] ? n.barStyle.childs().upColor.value() : n.barStyle.childs().downColor.value();
                            break;
                        case 1:
                        case 9:
                            m = c[1] <= c[4] ? n.candleStyle.childs().upColor.value() : n.candleStyle.childs().downColor.value();
                            break;
                        case 13:
                            m = c[1] <= c[4] ? n.columnStyle.childs().upColor.value() : n.columnStyle.childs().downColor.value();
                            break;
                        case 2:
                            m = n.lineStyle.childs().color.value();
                            break;
                        case 3:
                            m = n.areaStyle.childs().color1.value();
                            break;
                        case 10:
                            {
                                const e = n.baselineStyle.childs();m = p < Math.round(r.height() * (Math.abs(100 - e.baseLevelPercentage.value()) / 100)) ? e.topLineColor.value() : e.bottomLineColor.value();
                                break
                            }
                        case 12:
                            m = n.hiloStyle.childs().color.value();
                            break;
                        default:
                            throw new Error("Not supported overlay style")
                    }
                    const v = { ...r.getFormattedValues(_, a, !0),
                        noData: !1,
                        floatCoordinate: p,
                        coordinate: p,
                        color: m
                    };
                    return i && (v.price = _), v
                }
                priceRange(e, t) {
                    if (!(0, S.isInteger)(e)) return oe.logDebug("priceRange: incorrect startBar"), null;
                    if (!(0, S.isInteger)(t)) return oe.logDebug("priceRange: incorrect endBar"), null;
                    if (0 === this.data().size()) return null;
                    const i = this.priceSource();
                    let s;
                    s = null !== i ? this.data().minMaxOnRangeCached(e, t, [{
                        name: i,
                        offset: 0
                    }]) : this.data().minMaxOnRangeCached(e, t, [{
                        name: "low",
                        offset: 0
                    }, {
                        name: "high",
                        offset: 0
                    }]);
                    const r = null !== s ? new w.PriceRange(s.min, s.max) : null;
                    return this._postProcessPriceRange(r)
                }
                bars() {
                    return this.data()
                }
                open(e) {
                    return (0, s.ensureNotNull)(this.bars().valueAt(e))[1]
                }
                high(e) {
                    return (0, s.ensureNotNull)(this.bars().valueAt(e))[2]
                }
                low(e) {
                    return (0, s.ensureNotNull)(this.bars().valueAt(e))[3]
                }
                close(e) {
                    return (0, s.ensureNotNull)(this.bars().valueAt(e))[4]
                }
                hl2(e) {
                    return (this.high(e) + this.low(e)) / 2
                }
                hlc3(e) {
                    return (this.high(e) + this.low(e) + this.close(e)) / 3
                }
                ohlc4(e) {
                    return (this.open(e) + this.high(e) + this.low(e) + this.close(e)) / 4
                }
                canBeHiddenByGlobalFlag() {
                    return !1
                }
                start(e, t) {
                    var i;
                    this._formatter = null, super.start(e, t), null === (i = this.priceScale()) || void 0 === i || i.updateFormatter(), ee && this._setQuotesSymbol(this.symbol())
                }
                stop(e) {
                    super.stop(e), this._quotesProvider.setQuotesSessionSymbol(null)
                }
                formatter() {
                    return this._formatter || this._recreateFormatter(), (0, s.ensureNotNull)(this._formatter)
                }
                statusView() {
                    return re ? super.statusView() : null
                }
                moveItem(e, t, i) {
                    if (10 === this.style() && 0 === t) {
                        const t = (0, s.ensureNotNull)(this.priceScale()),
                            i = this.properties().childs().baselineStyle,
                            r = t.height(),
                            o = 100 - e.y / r * 100,
                            n = o < 0 ? 0 : Math.round(10 * o) / 10;
                        i.childs().baseLevelPercentage.setValue(Math.max(Math.min(n, 100), 0))
                    }
                }
                measureUnitId() {
                    return (0, d.measureUnitId)(this.symbolInfo())
                }
                dataUpdated() {
                    return this._dataUpdated
                }
                alertCreationAvailable() {
                    var e;
                    return new(C())(!(null === (e = this.priceScale()) || void 0 === e ? void 0 : e.isPercentage()) && super.alertCreationAvailable().value()).readonly()
                }
                _onPropertiesChanged() {
                    super._onPropertiesChanged(), this._precomputedBarStyles = new WeakMap
                }
                _tryChangeInputs() {
                    var e;
                    super._tryChangeInputs(), this._formatter = null, null === (e = this.priceScale()) || void 0 === e || e.updateFormatter()
                }
                _tryCreateFormatter() {
                    return (0, d.createSeriesFormatter)(this.symbolInfo(), this.properties().childs().minTick.value())
                }
                _onUnitChanged() {
                    "alwaysOff" !== (0, h.currencyUnitVisibilityProperty)().value() && this._model.fullUpdate(), this._model.unitConversionEnabled() && this.isStarted() && this._tryChangeInputs(), this._unitChanged.fire()
                }
                _getSymbolObject(e) {
                    const t = super._getSymbolObject(e),
                        i = this.currency();
                    null !== i && (t["currency-id"] = i);
                    const s = this.unit();
                    return this._model.unitConversionEnabled() && null !== s && (t["unit-id"] = s), t.adjustment = this._model.mainSeries().properties().childs().dividendsAdjustment.value() ? "dividends" : "splits", t
                }
                _getSymbolForApi(e) {
                    return (0, d.symbolForApi)(this._resolvedSymbolsByInput[e] || null, e)
                }
                _onSymbolResolvingStart() {
                    super._onSymbolResolvingStart(), this._symbolResolvingActive.setValue(!0)
                }
                _onSymbolError() {
                    super._onSymbolError(), this._symbolResolvingActive.setValue(!1)
                }
                _onSymbolResolved(e, t, i) {
                    super._onSymbolResolved(e, t, i), this._recreatePriceFormattingDependencies();
                    const s = t === this.symbol() ? (0, d.extractSymbolNameFromSymbolInfo)(i, this.symbol()) : null,
                        r = (0, d.symbolCurrency)(i),
                        o = (0, d.symbolUnit)(i, this._model.unitConversionEnabled());
                    if (this._setSymbolParamsInternal({
                            symbol: null != s ? s : void 0,
                            currency: r,
                            unit: o
                        }, i), ee) {
                        const e = this.getSymbolString(this._getSymbolForApi(this.symbol()));
                        this._setQuotesSymbol(e)
                    }
                    this._checkStyle(), this._symbolResolvingActive.setValue(!1)
                }
                _changeInputsImpl(e, t) {
                    super._changeInputsImpl(e, t), this._realignLineToolsIfParamsChanged()
                }
                _setQuotesSymbol(e) {
                    const t = this.symbolInfo(),
                        i = (0, d.extractSymbolNameFromSymbolInfo)(t, e),
                        s = i && this.getSymbolString(i);
                    this._quotesProvider.setQuotesSessionSymbol(s)
                }
                _createViews() {
                    this._priceAxisViews = [];
                    const e = new A(this);
                    this._priceAxisViewsBase = [e];
                    const t = new M(this);
                    this._priceLinesAxisViews = [t], this._paneViews = [], this._labelPaneViews = [];
                    let i = null,
                        r = null;
                    switch (this.properties().childs().style.value()) {
                        case 0:
                            r = new G.SeriesBarsPaneView(this, this._model);
                            break;
                        case 1:
                            r = new Y.SeriesCandlesPaneView(this, this._model);
                            break;
                        case 9:
                            r = new Z.SeriesHollowCandlesPaneView(this, this._model);
                            break;
                        case 13:
                            r = new X.SeriesColumnsPaneView(this, this._model);
                            break;
                        case 2:
                            r = new $.SeriesLinePaneView(this, this._model);
                            break;
                        case 3:
                            r = new Q.SeriesAreaPaneView(this, this._model);
                            break;
                        case 10:
                            {
                                r = new j.SeriesBaselinePaneView(this, this._model);
                                const e = this.properties().childs().baselineStyle.childs();i = new I.SeriesWaterlinePaneView({
                                    paneHeight: () => (0, s.ensureNotNull)(this.priceScale()).height(),
                                    color: () => e.baselineColor.value(),
                                    baseLevelPercentage: () => e.baseLevelPercentage.value()
                                });
                                break
                            }
                        case 12:
                            r = new J.SeriesHiLoPaneView(this, this._model)
                    }
                    r && this._paneViews.push(r), null !== i && this._paneViews.push(i), this._paneViews.push(new N(this)), this._dataWindowView || (this._dataWindowView = new F.OverlayDataWindowView(this, this._model)), this._legendView || (this._legendView = new U(this, this._model)), this._statusView || (this._statusView = new P.StudyStatusView(this)), this._priceAxisViews = [...this._priceAxisViewsBase], this._labelPaneViews.push(new q.PanePriceAxisView(e, this, this._model))
                }
                _createStudyOnServer() {
                    null === this._seriesSource ? super._createStudyOnServer() : this._modifyStudyOnServer((0, s.ensureDefined)(this._inputs)), this._realignLineToolsIfParamsChanged()
                }
                _modifyStudyOnServer(e) {
                    null === this._seriesSource ? super._modifyStudyOnServer(e, 0) : (this._seriesSource.modifySeries((0, p.decodeExtendedSymbol)(e.symbol), (0, f.getServerInterval)(this._series.properties().childs().interval.value())), this._seriesSource.isStarted() || this._seriesSource.start())
                }
                _stopStudyOnServer() {
                    null === this._seriesSource ? super._stopStudyOnServer() : this._seriesSource.stop()
                }
                _titleInParts(e, t, i, s) {
                    const r = this.symbolInfo();
                    let o;
                    if (r) {
                        if (o = r.name, ie) switch (this._model.mainSeries().symbolTextSourceProxyProperty().value()) {
                            case "description":
                                o = r.description;
                                break;
                            case "ticker-and-description":
                                o = `${r.name}, ${r.description}`
                        }
                        const e = !s && (0, d.getStudySymbolExchange)(r);
                        if (e) return [o, [e]]
                    } else o = se ? "" : this.properties().childs().inputs.childs().symbol.value();
                    return [o]
                }
                _onAllowExtendTimeScaleChanged() {
                    const e = this.isStarted();
                    if (e && this.stop(!0), null !== this._seriesSource) {
                        const e = this._seriesSource.dataEvents();
                        e.seriesError().unsubscribeAll(this), e.loading().unsubscribeAll(this), e.completed().unsubscribeAll(this), e.dataUpdated().unsubscribeAll(this), this._seriesSource.destroy()
                    }
                    this._seriesSource = null, e && this.start(!0)
                }
                _convertSeriesErrorToStudy(e) {
                    return {
                        error: e.error,
                        ctx: e.ctx,
                        solution_id: e.solution_id
                    }
                }
                _setSymbolParamsInternal(e, t) {
                    const {
                        symbol: i,
                        currency: s,
                        unit: r,
                        style: o
                    } = e, n = this.properties().childs(), l = n.inputs.childs().symbol.value(), a = n.currencyId.value(), h = n.unitId.value(), u = n.style.value();
                    if (void 0 !== i && i !== l && n.inputs.childs().symbol.setValueSilently(i), void 0 !== s && s !== a && n.currencyId.setValueSilently(s), void 0 !== r && r !== h && n.unitId.setValueSilently(r), void 0 !== o && n.style.setValueSilently(o), t) this._resolvedSymbolsByInput[this.symbol()] = t, this._resolvedSymbols[this._getSymbolForResolve(this.symbol())] = t, this._realignToolsLastParams = null;
                    else {
                        const e = this.symbolInfo();
                        null !== e && (n.currencyId.setValueSilently((0, d.symbolCurrency)(e)), n.unitId.setValueSilently((0, d.symbolUnit)(e, this._model.unitConversionEnabled())))
                    }
                    n.inputs.childs().symbol.value() !== l && n.inputs.childs().symbol.listeners().fire(n.inputs.childs().symbol), n.currencyId.value() !== a && n.currencyId.listeners().fire(n.currencyId), n.unitId.value() !== h && n.unitId.listeners().fire(n.unitId), n.style.value() !== u && n.style.listeners().fire(n.style), this._checkStyle(), this._realignLineToolsIfParamsChanged()
                }
                _updateBarFunction() {
                    this._barFunction = (0, a.barFunctionByStyle)(this.style(), this.priceSource())
                }
                _onChartStyleChanged() {
                    var e;
                    this._updateBarFunction(), (null === (e = this._styleToRecover) || void 0 === e ? void 0 : e.originalStyle) !== this.style() && (this._styleToRecover = null)
                }
                _checkStyle() {
                    const e = this.style();
                    (0, d.isCloseBasedSymbol)(this.symbolInfo()) ? (0, d.isSingleValueBasedStyle)(e) || (this.setStyle(2), this._styleToRecover = {
                        correctedStyle: this.style(),
                        originalStyle: e
                    }) : null !== this._styleToRecover && (this.setStyle(this._styleToRecover.originalStyle), this._styleToRecover = null)
                }
                _realignLineToolsIfParamsChanged() {
                    const e = this.symbol(),
                        t = this.interval(),
                        i = this.currency(),
                        s = this.unit();
                    null !== this._realignToolsLastParams && this._realignToolsLastParams.symbol === e && this._realignToolsLastParams.interval === t && this._realignToolsLastParams.currency === i && this._realignToolsLastParams.unit === s || (this._model.realignLineTools(this), this._realignToolsLastParams = {
                        symbol: e,
                        interval: t,
                        currency: i,
                        unit: s
                    })
                }
            }
        },
        784093: (e, t, i) => {
            "use strict";
            i.d(t, {
                StudyStrategy: () => k
            });
            var s = i(650151),
                r = i(988411),
                o = i.n(r),
                n = i(373123),
                l = i(495046),
                a = i(314967),
                h = i(86441),
                u = i(724377),
                d = i(858063),
                c = i(112824),
                _ = i(741341),
                p = i(43329);

            function m(e, t, i) {
                return i ? Math.sign(e) * (Math.round(Math.abs(e)) + t) : Math.round(e) + t
            }
            class v {
                constructor(e, t) {
                    this._data = e, this._textWidths = t
                }
                draw(e, t) {
                    const i = t.pixelRatio;
                    void 0 !== this._textWidths.rendererParams && (0, c.areEqualPaneRenderParams)(this._textWidths.rendererParams, t) || (this._textWidths.rendererParams = t, this._textWidths.width.clear());
                    const s = this._data;
                    e.lineJoin = "miter", e.miterLimit = Math.round(2 * i), e.strokeStyle = s.bgColor, e.lineWidth = Math.max(2, (0, p.ceiledEven)(2 * i));
                    for (const t of s.items) {
                        e.beginPath();
                        const r = "lower" === t.pos;
                        e.save();
                        const o = Math.round(s.orderArrow.vMargin * i);
                        e.translate(0, r ? o : -o), this._drawOrderArrow(e, t.orderPoint, s.orderArrow, s.exitLineWidth, r, i), e.restore(), e.save(), this._drawPriceArrow(e, t.pricePoint, s.priceArrow, !r, i), e.restore(), e.closePath(), e.stroke(), e.fillStyle = s.exitLineWidth ? s.exitColor : "buy" === t.type ? s.buyColor : s.sellColor, e.fill()
                    }
                    const r = s.text;
                    r.visible && (0, _.drawScaled)(e, i, (() => {
                        e.font = r.fontSize + "px " + r.font, e.textAlign = "center", e.textBaseline = "top", e.fillStyle = s.labelColor, e.strokeStyle = s.bgColor, e.lineWidth = Math.min(2, Math.floor(2 * i));
                        for (const t of s.items) {
                            const i = "lower" === t.pos;
                            e.save();
                            const o = i ? 1 : -1,
                                n = s.orderArrow;
                            e.translate(0, (n.height + n.vMargin + s.exitLineWidth) * o);
                            const l = i ? r.vMargin : -r.fontSize - r.vMargin,
                                a = o * (r.fontSize + r.lineSpacing);
                            if (t.label && (e.translate(0, l), e.strokeText(t.label, Math.ceil(t.orderPoint.x), t.orderPoint.y), e.fillText(t.label, Math.ceil(t.orderPoint.x), t.orderPoint.y),
                                    this._textWidths.width.has(t.label) || this._textWidths.width.set(t.label, e.measureText(t.label).width)), t.qty) {
                                const i = Boolean(t.label) ? a : l;
                                e.translate(0, i), e.strokeText(t.qty, Math.ceil(t.orderPoint.x), t.orderPoint.y), e.fillText(t.qty, Math.ceil(t.orderPoint.x), t.orderPoint.y), this._textWidths.width.has(t.qty) || this._textWidths.width.set(t.qty, e.measureText(t.qty).width)
                            }
                            e.restore()
                        }
                    }))
                }
                hitTest(e) {
                    const t = this._testOrderArrows(e),
                        i = !t && this._data.text && this._testText(e);
                    return t || i ? new d.HitTestResult(d.HitTestResult.REGULAR) : null
                }
                _drawOrderArrow(e, t, i, s, r, o) {
                    let n, l;
                    r ? (e.rotate(Math.PI), n = -t.x, l = -t.y) : (n = t.x, l = t.y), l -= i.height + s;
                    const a = Math.max(1, Math.floor(o)),
                        h = a % 2 ? .5 : 0,
                        u = r ? "floor" : "ceil";
                    n = m(n * o, h, r), l = Math.round((Math[u](l) + .5) * o), e.translate(n, l);
                    const d = (0, p.ceiledEven)(i.width * o) / 2 + h,
                        c = (0, p.ceiledEven)(i.tailWidth * o) / 2 + h,
                        _ = Math.round(i.tailHeight * o);
                    if (e.moveTo(-c, 0), e.lineTo(c, 0), e.lineTo(c, _), e.lineTo(d, _), e.lineTo(0, Math.round(i.height * o)), s) {
                        const t = Math.floor(a / 2);
                        e.lineTo(d + t, Math.round(i.height * o)), e.lineTo(d + t, Math.round((i.height + s) * o)), e.lineTo(-d - t, Math.round((i.height + s) * o)), e.lineTo(-d - t, Math.round(i.height * o)), e.lineTo(0, Math.round(i.height * o))
                    }
                    e.lineTo(-d, _), e.lineTo(-c, _), e.lineTo(-c, 0), e.lineTo(c, 0)
                }
                _drawPriceArrow(e, t, i, s, r) {
                    let o, n;
                    s ? (e.rotate(Math.PI), o = -t.x, n = -t.y) : (o = t.x, n = t.y);
                    const l = Math.max(1, Math.floor(r)),
                        a = l % 2 ? .5 : 0;
                    o = m(o * r, a, s) - l, n = m(n * r, a, s);
                    const h = (0, p.ceiledEven)(2 * i.width * r) / 2,
                        u = -(Math.round(i.width * r) + a);
                    e.translate(o, n), e.moveTo(0, 0), e.lineTo(u, -h), e.lineTo(u, h), e.lineTo(0, 0), e.lineTo(u, -h)
                }
                _testOrderArrows(e) {
                    const t = this._data,
                        i = t.orderArrow.width / 2;
                    for (const s of t.items) {
                        const r = s.orderPoint;
                        if (e.x < r.x - i || e.x > r.x + i) continue;
                        const o = "lower" === s.pos;
                        let n = t.orderArrow.height + t.exitLineWidth;
                        o || (n = -n);
                        const l = r.y + (o ? t.orderArrow.vMargin : -t.orderArrow.vMargin),
                            a = Math.min(l, l + n),
                            h = Math.max(l, l + n);
                        if (!(e.y < a || e.y > h)) return !0
                    }
                    return !1
                }
                _testText(e) {
                    const t = this._data,
                        i = t.text;
                    if (!i.visible) return !1;
                    for (const s of t.items) {
                        const r = s.orderPoint,
                            o = "lower" === s.pos;
                        let n = t.orderArrow.vMargin + t.orderArrow.height + t.exitLineWidth;
                        o || (n = -n);
                        const l = r.y + n,
                            a = (s.label ? 1 : 0) + (s.qty ? 1 : 0);
                        let h = i.vMargin + i.fontSize * a + i.lineSpacing * Math.max(0, a - 1);
                        o || (h = -h);
                        const u = Math.min(l, l + h),
                            d = Math.max(l, l + h);
                        if (e.y < u || e.y > d) continue;
                        const c = s.label && s.qty ? o && e.y < l + i.fontSize || !o && e.y > l - i.fontSize ? s.label : s.qty : s.label || s.qty,
                            _ = this._textWidths.width.get(c);
                        if (!(void 0 === _ || e.x < r.x - _ / 2 || e.x > r.x + _ / 2)) return !0
                    }
                    return !1
                }
            }
            var y = i(623331),
                f = i(812363),
                g = i(28035);
            const b = {
                BuyColor: a.colorsPalette["color-tv-blue-500"],
                SellColor: "#FF1744",
                ExitColor: "#D500F9",
                LabelDarkColor: "#B2B5BE",
                LabelLightColor: a.colorsPalette["color-mirage-1"]
            };

            function S(e) {
                return !1 === e.e ? "exit" : e.b ? "entryBuy" : "entrySell"
            }

            function w(e) {
                return e.b ? "buy" : "sell"
            }

            function x(e, t) {
                return t ? !e.b : e.b
            }

            function C(e, t) {
                return x(e, t) ? "lower" : "upper"
            }

            function P(e, t, i) {
                let s = e[t].get(i);
                return void 0 === s && (s = 0, e[t].set(i, s)), s
            }

            function I(e, t, i, r) {
                const o = (0, s.ensureDefined)(e[t].get(i));
                e[t].set(i, o + r)
            }

            function T(e, t) {
                return t && (e.c || e.id || "Untitled") || ""
            }

            function D(e, t) {
                return t && (e.b ? "+" : "-") + e.q || ""
            }

            function L(e, t, i) {
                return (0, s.ensureNotNull)(e.b ? i.low(t) : i.high(t))
            }

            function R(e, t) {
                return ("exit" === S(e) ? 2 : 0) + t.vMargin + t.height
            }
            class V {
                constructor(e, t, i) {
                    this._invalidated = !0, this._textWidths = {
                        width: new Map
                    }, this._study = e, this._series = t, this._model = i, this._orderArrow = {
                        vMargin: 11,
                        width: 10,
                        height: 15,
                        tailWidth: 2,
                        tailHeight: 10
                    }, this._priceArrow = {
                        width: 5
                    }, this._text = {
                        vMargin: 7,
                        font: y.CHART_FONT_FAMILY,
                        fontSize: 12,
                        lineSpacing: 2,
                        visible: !0
                    }, this._items = {
                        entryBuy: [],
                        entrySell: [],
                        exit: []
                    }, this._study.properties().childs().strategy.childs().orders.subscribe(this, this.update)
                }
                update() {
                    this._invalidated = !0
                }
                clearItems() {
                    this._items.entryBuy = [], this._items.entrySell = [], this._items.exit = []
                }
                renderer(e, t) {
                    const i = this._study.properties().childs();
                    if (!i.visible.value() || !i.strategy.childs().orders.childs().visible.value()) return null;
                    if (this._invalidated && (this._updateImpl(), this._invalidated = !1), this._items.entryBuy.length || this._items.entrySell.length || this._items.exit.length) {
                        const e = new g.CompositeRenderer;
                        return this._items.entryBuy.length && e.append(this._strategyOrdersRenderer(this._items.entryBuy, !1)), this._items.entrySell.length && e.append(this._strategyOrdersRenderer(this._items.entrySell, !1)), this._items.exit.length && e.append(this._strategyOrdersRenderer(this._items.exit, !0)), e
                    }
                    return null
                }
                _strategyOrdersRenderer(e, t) {
                    const i = this._model.backgroundColor().value(),
                        s = "black" === (0, u.rgbToBlackWhiteString)((0, u.parseRgb)(i), 150);
                    return new v({
                        items: e,
                        buyColor: b.BuyColor,
                        sellColor: b.SellColor,
                        exitColor: b.ExitColor,
                        labelColor: s ? b.LabelDarkColor : b.LabelLightColor,
                        bgColor: i,
                        orderArrow: this._orderArrow,
                        exitLineWidth: t ? 2 : 0,
                        priceArrow: this._priceArrow,
                        text: this._text
                    }, this._textWidths)
                }
                _updateImpl() {
                    this.clearItems();
                    const e = this._study.ordersData();
                    if (!e || !e.length) return;
                    const t = this._model.timeScale(),
                        i = this._series.priceScale(),
                        r = t.visibleBarsStrictRange();
                    if (t.isEmpty() || i.isEmpty() || null === r) return;
                    const o = this._study.barsIndexes(),
                        n = this._series.nearestIndex(r.firstBar(), f.PlotRowSearchMode.NearestRight),
                        l = this._series.nearestIndex(r.lastBar(), f.PlotRowSearchMode.NearestLeft);
                    if (void 0 === n || void 0 === l) return;
                    const [a, u] = function(e, t, i, s) {
                        const r = [],
                            o = [];
                        for (let n = 0; n < e.length; ++n) {
                            const l = s[n];
                            l < t || l > i || (r.push(e[n]), o.push(l))
                        }
                        return [r, o]
                    }(e, n, l, o), [d, c] = this._labelAndQtyVisibility(a.length), _ = d || c, p = this._textHeight(d, c), m = (0, s.ensureNotNull)(this._series.firstValue()), v = i.isInverted(), y = {
                        upper: new Map,
                        lower: new Map
                    };
                    for (let e = 0; e < a.length; e++) {
                        const s = a[e],
                            r = x(s, v),
                            o = u[e],
                            n = t.indexToCoordinate(o),
                            l = L(s, o, this._series);
                        let _ = i.priceToCoordinate(l, m);
                        const f = C(s, v),
                            g = P(y, f, o);
                        _ += r ? g : -g;
                        I(y, f, o, R(s, this._orderArrow) + p);
                        const b = i.priceToCoordinate(s.p, m),
                            V = S(s);
                        this._items[V].push({
                            orderPoint: new h.Point(n, _),
                            pricePoint: new h.Point(n, b),
                            label: T(s, d),
                            qty: D(s, c),
                            pos: f,
                            type: w(s)
                        })
                    }
                    this._text.visible = _
                }
                _labelAndQtyVisibility(e) {
                    const t = this._model.timeScale();
                    if (t.barSpacing() < 10 && this._orderArrow.width * e * 2 > t.width()) return [!1, !1];
                    const i = this._study.properties().childs().strategy.childs().orders.childs();
                    return [i.showLabels.value(), i.showQty.value()]
                }
                _textHeight(e, t) {
                    return e || t ? e && t ? 2 * this._text.fontSize + this._text.vMargin + this._text.lineSpacing : this._text.fontSize + this._text.vMargin : 0
                }
            }
            const A = ["strategy_props"];
            class k extends n.Study {
                constructor(e, t, i, s) {
                    super(e, t, i, s), this.watchedData = new(o()), this._barsIndexes = [], this._srcBarsIndexes = [], this._reportDataBuffer = null, this._reportData = null, this._activeState = !1, t.childs().visible.subscribe(this, this._processChangeVisibility), this._processChangeVisibility()
                }
                destroy() {
                    this.model().removeStrategySource(this, 0), super.destroy()
                }
                properties() {
                    return this._properties
                }
                hasStateForAlert() {
                    return (0, l.enabled)("alerts")
                }
                inputsForAlertState() {
                    const e = this.inputs();
                    return (0, s.ensureNotNull)(this._metaInfo).inputs.forEach((t => {
                        const i = e[t.id];
                        i && t.internalID && (i.internalID = t.internalID)
                    })), e
                }
                onData(e) {
                    e.method && "data_update" !== e.method && this.watchedData.setValue({
                        method: e.method
                    }), super.onData(e)
                }
                reportData() {
                    return this._reportData
                }
                ordersData() {
                    var e, t;
                    return null !== (t = null === (e = this._reportData) || void 0 === e ? void 0 : e.filledOrders) && void 0 !== t ? t : null
                }
                barsIndexes() {
                    return this._barsIndexes
                }
                clearData() {
                    super.clearData(), this._reportDataBuffer = null, this._reportData = null, this._strategyOrdersPaneView && this._strategyOrdersPaneView.clearItems()
                }
                strategyOrdersPaneView() {
                    return this.isSourceHidden() ? null : this._strategyOrdersPaneView
                }
                restoreData(e) {
                    super.restoreData(e);
                    const t = e;
                    this.model().addStrategySource(this, 0), t.reportData && t.barsIndexes && (this._reportData = t.reportData, this._barsIndexes = t.barsIndexes, this.watchedData.setValue({
                        method: "data_update",
                        nonSeriesData: {
                            indexes_replace: !1,
                            data: {
                                report: this._reportData
                            }
                        }
                    })), t.activeState && (this._activeState = !0)
                }
                activeState() {
                    return this._activeState
                }
                updateAllViews(e) {
                    super.updateAllViews(e), this._strategyOrdersPaneView && this._strategyOrdersPaneView.update()
                }
                state(e, t) {
                    const i = super.state(e, t);
                    return e && this._reportData && this._barsIndexes && (i.data || (i.data = {}), i.data.reportData = this._reportData, i.data.barsIndexes = this._barsIndexes, i.data.activeState = this.model().activeStrategySource().value() === this), i
                }
                isHibernationAllowed() {
                    return !1
                }
                _onDataUpdated(e, t, i) {
                    var r, o, n;
                    let l = t && !t.indexes_replace && t.data && t.data.report;
                    l ? (t && !t.indexes_replace && t.isUpdate && this._reportDataBuffer && (l = { ...this._reportDataBuffer,
                        ...l
                    }), this._reportData = { ...this._reportDataBuffer,
                        ...l
                    }, this._reportDataBuffer = this._reportData, this.watchedData.setValue({
                        method: "data_update",
                        nonSeriesData: (0, s.ensureNotNull)(t)
                    })) : this.watchedData.setValue({
                        method: "data_update",
                        nonSeriesData: {
                            indexes_replace: !1,
                            data: {
                                report: this._reportDataBuffer
                            }
                        }
                    });
                    const a = !(!t || !t.indexes_replace);
                    ("nochange" !== i && i.length > 0 || (null !== (n = null === (o = null === (r = this._reportData) || void 0 === r ? void 0 : r.filledOrders) || void 0 === o ? void 0 : o.length) && void 0 !== n ? n : 0) !== this._barsIndexes.length) && (l || a) && this._collateBarsIndexes(Array.isArray(i) ? i : this._srcBarsIndexes), super._onDataUpdated(e, t, i)
                }
                _createViews() {
                    super._createViews(),
                        this._strategyOrdersPaneView = new V(this, this._series, this._model)
                }
                _titleInputs(e, t) {
                    return this.inputs({
                        symbolsForDisplay: !0,
                        skipHiddenInputs: !0,
                        skipFakeInputs: !1,
                        fakeInputsForDisplay: !0,
                        asObject: !1,
                        skippedGroups: A,
                        noExchanges: e,
                        skipColorInputs: !0,
                        skipTimeInputs: !0
                    })
                }
                _getTelemetryObjectName() {
                    return "strategy"
                }
                _getTelemetryAdditionalData() {
                    return {
                        symbol: this.series().actualSymbol(),
                        resolution: this.series().interval()
                    }
                }
                _collateBarsIndexes(e) {
                    var t;
                    this._srcBarsIndexes = e;
                    const i = null === (t = this._reportData) || void 0 === t ? void 0 : t.filledOrders;
                    if (i && i.length) {
                        this._barsIndexes.length = 0;
                        for (let t = 0; t < i.length; t++) this._barsIndexes[t] = e[i[t].tm]
                    }
                }
                _processChangeVisibility() {
                    this.properties().childs().visible.value() ? this.model().addStrategySource(this, 0) : this.model().removeStrategySource(this, 0)
                }
            }
        },
        373123: (e, t, i) => {
            "use strict";
            var s = i(869403),
                r = i(720444).symbolTitle,
                o = i(424061).StudyBarColorer,
                n = i(175203).telemetry,
                l = i(884566).PlotList,
                a = i(251954),
                h = i(519872),
                u = i(353469).studyPlotFunctionMap,
                d = i(353469).studyEmptyPlotValuePredicate,
                c = i(495046),
                _ = i(788777).StudyBase,
                p = i(114123).colorToInteger,
                m = i(272001).getLogger("Chart.Study"),
                v = c.enabled("datasource_copypaste"),
                y = c.enabled("study_symbol_ticker_description"),
                f = c.enabled("hide_unresolved_symbols_in_legend");
            class g extends _ {
                constructor(e, t, i, r) {
                    super(e, t, i, r), this._resolvedSymbols = {}, this._chartApi = e._chartApi, this._plotFields = [];
                    var o = this.metaInfo().plots;
                    if (o)
                        for (var n = 0, a = o.length; n < a; n++) {
                            var _ = o[n].id;
                            this._plotFields.push(_)
                        }
                    this._invalidateLastNonEmptyPlotRowCache(), this.m_data = new l(u(this._metaInfo), d), this._plotOffsetsMetaInfoOverride = {}, this._createViews(), this._recreatePriceFormattingDependencies(), this._properties.precision.listeners().subscribe(this, this._precisionChanged), this._showStudyArgumentsProperty.listeners().subscribe(this, this.invalidateTitleCache), this._properties.inputs.listeners().subscribe(this, this.invalidateTitleCache), c.enabled("update_study_formatter_on_symbol_resolve") && e.mainSeries().dataEvents().symbolResolved().subscribe(this, this._recreatePriceFormattingDependencies), e.mainSeries().dataEvents().symbolResolved().subscribe(this, this.invalidateTitleCache);
                    var p = this,
                        m = {};
                    this._simplePlotsCount = r.plots.filter((function(e, t) {
                        if (h.isLinePlot(e)) return !0;
                        if (h.isOhlcPlot(e)) {
                            var i = p.metaInfo().plots[t].target;
                            return !m[i] && (m[i] = i, !0)
                        }
                        return !1
                    })).length, this.hasBarColorer() && this._properties.visible.listeners().subscribe(e.mainSeries(), e.mainSeries().invalidateBarStylesCache), this._formatterChanged = new s, this._priceStepChanged = new s, this._aboutToBeDestroyed = new s, this._definitionsViewModel = null, this._updateMaxOffsetValue()
                }
                series() {
                    return this._series
                }
                model() {
                    return this._model
                }
                onTagsChanged() {
                    return this._tagsChanged
                }
                isSavedInStudyTemplates() {
                    for (var e = 0; e < this._metaInfo.inputs.length; e++)
                        if ("bar_time" === this._metaInfo.inputs[e].type) return !1;
                    return !0
                }
                _prepareInputValue(e, t) {
                    var i = e.id;
                    if (t.valuesAsIsFromProperties) return this._properties.inputs[i].value();
                    if ("symbol" === e.type) {
                        var s = t && t.symbolsForDisplay,
                            o = this._properties.inputs[i].value(),
                            n = s ? o : this._getSymbolForApi(o),
                            l = this._resolvedSymbols && this._resolvedSymbols[this._getSymbolForResolve(n)];
                        if ("" === n && e.optional) {
                            if (t && t.keepOptionalSymbolsEmpty) return n;
                            n = this._model.mainSeries().symbol(), l = this._model.mainSeries().symbolInfo()
                        }
                        if (s)
                            if (l)
                                if (y) {
                                    switch (this._model.mainSeries().symbolTextSourceProxyProperty().value()) {
                                        case "description":
                                            n = l.description;
                                            break;
                                        case "ticker-and-description":
                                            n = `${l.name}, ${l.description}`;
                                            break;
                                        case "ticker":
                                            n = l.name
                                    }
                                } else n = r(l, t.noExchanges);
                        else f && (n = "");
                        else l && (n = l.ticker || l.full_name), !this.isPine() && t && t.symbolsForChartApi && (n = this.getSymbolString(n));
                        return n
                    }
                    if ("bar_time" === e.type) {
                        var a = this._properties.inputs[i].value();
                        if (a < 0) {
                            var h = this._rightOffsetToUnixTime(-a);
                            a = h && h >= 0 ? h : a
                        }
                        return a
                    }
                    if (this._metaInfo.isTVScript || this._metaInfo.pine) {
                        if ("text" === i) return this._metaInfo.defaults.inputs.text;
                        if ("pineId" === i) return this._metaInfo.scriptIdPart;
                        if ("pineVersion" === i) return this._metaInfo.pine ? this._metaInfo.pine.version : "-1";
                        if ("color" === e.type && this._metaInfo.isRGB) {
                            var u = this._properties.inputs[i].value();
                            return p(u)
                        }
                        if ("price" === e.type) {
                            var d = this._properties.inputs[i].value();
                            return t.priceInputsForDisplay ? this.formatter().format(d) : d
                        }
                        return this._properties.inputs[i].value()
                    }
                    return this._properties.inputs[i].value()
                }
                priceLabelText(e) {
                    var t, i = this._metaInfo.styles,
                        s = this._metaInfo.ohlcPlots;
                    i && i[e] && (t = i[e]), s && s[e] && (t = s[e]);
                    var r = t.title;
                    return 1 !== this._simplePlotsCount || h.isPlotTitleDefined(r) ? this._metaInfo.is_price_study && r !== this._metaInfo.shortDescription ? "" === r ? this._metaInfo.shortDescription : this._metaInfo.shortDescription + ":" + r : r : this._metaInfo.shortDescription
                }
                data() {
                    return this.m_data
                }
                graphics() {
                    return this._graphics
                }
                moveData(e) {
                    this._ongoingDataUpdate = this._ongoingDataUpdate.then(function() {
                        this._invalidateLastNonEmptyPlotRowCache(), this.data().move(e)
                    }.bind(this))
                }
                replaceData(e, t, i) {
                    this._invalidateLastNonEmptyPlotRowCache(), this.data().remove(e + 1), this.data().addTail(i, t)
                }
                static offset(e, t) {
                    var i = 0;
                    return e._plotOffsets && void 0 !== e._plotOffsets[t] && (i += e._plotOffsets[t]), e.properties().offsets && void 0 !== e.properties().offsets[t] && (i += e.properties().offsets[t].val.value()), e.properties().offset && (i += e.properties().offset.val.value()), i
                }
                offset(e) {
                    return g.offset(this, e)
                }
                _showLastValueOnPriceScale() {
                    return this._model.properties().scalesProperties.showStudyLastValue.value()
                }
                barColorer() {
                    const e = this._metaInfo.plots;
                    let t = null;
                    for (let i = 0; i < e.length; ++i)
                        if (h.isBarColorerPlot(e[i])) {
                            const e = new o(this, i);
                            null == t ? t = e : t.pushBackBarColorer(e)
                        }
                    if (null == t) throw new Error("Cannot create BarColorer: study doesn't have a bar_colorer plot!");
                    return t
                }
                base() {
                    return 0
                }
                _priceScaleByProperties() {
                    if ("default" === this.properties().precision.value()) return null;
                    var e = parseInt(this.properties().precision.value());
                    return isFinite(e) ? Math.pow(10, e) : null
                }
                _priceScaleByMetaInfo() {
                    var e = this.metaInfo().format,
                        t = isNumber(e.precision) ? Math.pow(10, e.precision) : void 0;
                    if ("price" === e.type || "percent" === e.type) return t || 100;
                    if ("volume" === e.type) {
                        if (void 0 === e.precision) {
                            var i = this.series().symbolInfo();
                            if (null !== i && isNumber(i.volume_precision)) return Math.pow(10, i.volume_precision)
                        }
                        return 1
                    }
                    return "inherit" === e.type || m.logWarn("Unsupported format type: " + e.type), null
                }
                _onSourceFormatterChanged() {
                    null === this._formatter && (null !== this.priceScale() && this.priceScale().updateFormatter(), this._formatterChanged.fire())
                }
                _onSourcePriceStepChanged() {
                    null === this._priceStep && this._priceStepChanged.fire()
                }
                _precisionChanged() {
                    this._recreatePriceFormattingDependencies()
                }
                _recreatePriceFormattingDependencies() {
                    this._recreateFormatter(), this._recreatePriceStep()
                }
                _recreateFormatter() {
                    this._formatter = this._tryCreateFormatter(), this._formatterChanged.fire(), null !== this.priceScale() && this.priceScale().updateFormatter(), this._model.fullUpdate()
                }
                _recreatePriceStep() {
                    var e = null,
                        t = this._tryToGetPriceScale();
                    null !== t && (e = 1 / t), this._priceStep !== e && (this._priceStep = e, this._priceStepChanged.fire())
                }
                _tryToGetPriceScale() {
                    var e = this._priceScaleByProperties();
                    return null === e && (e = this._priceScaleByMetaInfo()), e
                }
                _tryCreateFormatter() {
                    var e = this._formatterByProperties();
                    return null === e && (e = this._formatterByMetaInfo()), e
                }
                setOwnerSource(e) {
                    super.setOwnerSource(e), this._recreatePriceFormattingDependencies()
                }
                nearestIndex(e, t, i) {
                    if (TradingView.isInteger(e)) {
                        var s = this.data().search(e, t, i);
                        return null !== s ? s.index : void 0
                    }
                    m.logDebug("nearestIndex: incorrect logicalPoint")
                }
                tags() {
                    return !this._metaInfo || !this._metaInfo.description || this._metaInfo.isTVScriptStub || this._metaInfo.is_hidden_study || this._metaInfo.isTVScript && "tv-scripting" === this._metaInfo.productId ? [] : [this._metaInfo.description]
                }
                onExtendedHoursChanged() {
                    this.restart(!0)
                }
                hasSymbolInputs() {
                    for (var e = this._metaInfo.inputs.length; e--;)
                        if ("symbol" === this._metaInfo.inputs[e].type) return !0;
                    return !1
                }
                canOverrideMinTick() {
                    return !1
                }
                _subscribeExtendedHours() {
                    !this._isSubscribedToExtendedHours && this.hasSymbolInputs() && (this._series.onExtendedHoursChanged().subscribe(this, this.onExtendedHoursChanged), this._isSubscribedToExtendedHours = !0)
                }
                removeByRemoveAllStudies() {
                    return !0
                }
                getPlotFields() {
                    return this._plotFields
                }
                _getPropertyDefinitionsViewModelClass() {
                    return Promise.resolve(null)
                }
                getPropertyDefinitionsViewModel() {
                    if (null === this._definitionsViewModel) {
                        var e = this;
                        return e._getPropertyDefinitionsViewModelClass().then((function(t) {
                            return null === t || e._isDestroyed ? null : (null === e._definitionsViewModel && (e._definitionsViewModel = new t(e._model.undoModel(), e)), e._definitionsViewModel)
                        }))
                    }
                    return Promise.resolve(this._definitionsViewModel)
                }
                _getTelemetryAdditionalData() {
                    var e = "";
                    return this._metaInfo.pine && this._metaInfo.pine.version && this._metaInfo.shortId.indexOf("USER") >= 0 && (e = "_v" + this._metaInfo.pine.version), {
                        symbol: this.series().actualSymbol(),
                        resolution: this.series().interval(),
                        study: this._metaInfo.shortId + e
                    }
                }
                _sendTelemetryReport(e, t, i) {
                    void 0 === i && (i = this._getTelemetryAdditionalData());
                    var s = Object.assign(t, {
                        additional: i
                    });
                    n.sendChartReport(e, s)
                }
                _sendTelemetryCounter(e, t) {
                    this._sendTelemetryReport(e, {
                        count: 1
                    }, t)
                }
                onAboutToBeDestroyed() {
                    return this._aboutToBeDestroyed
                }
                destroy() {
                    this._aboutToBeDestroyed.fire(), this._isDestroyed = !0, null !== this._definitionsViewModel && (this._definitionsViewModel.destroy(), this._definitionsViewModel = null), this._properties.precision.listeners().unsubscribe(this, this._precisionChanged), this._showStudyArgumentsProperty.listeners().unsubscribe(this, this.invalidateTitleCache), this._model.mainSeries().dataEvents().symbolResolved().unsubscribeAll(this), this.hasBarColorer() && this._properties.visible.listeners().unsubscribe(this._model.mainSeries(), this._model.mainSeries().invalidateBarStylesCache), this._model.mainSeries().dataEvents().symbolResolved().unsubscribe(this, this._recreatePriceFormattingDependencies), void 0 !== this._properties.offsets && this._properties.offsets.listeners().unsubscribe(this, this._updateMaxOffsetValue), void 0 !== this._properties.offset && this._properties.offset.listeners().unsubscribe(this, this._updateMaxOffsetValue), super.destroy()
                }
                desiredPriceScalePosition() {
                    return this.metaInfo().isTVScriptStub ? "overlay" : this.metaInfo().linkedToSeries ? "as-series" : void 0 === this.metaInfo().priceScale ? null : ["right", "left", "overlay"][this.metaInfo().priceScale]
                }
                formatterChanged() {
                    return this._formatterChanged
                }
                copiable() {
                    return v && !this.isChildStudy()
                }
                setPriceScale(e) {
                    super.setPriceScale(e), a.emit("study_event", this.id(), "price_scale_changed")
                }
            }
            TradingView.Study = g, t.Study = g
        },
        720841: (e, t, i) => {
            "use strict";
            var s = i(650151).ensureNotNull,
                r = i(86441).Point,
                o = i(544445).TextRenderer,
                n = i(348406).NonSeriesStudy,
                l = i(296266).TrendLineRenderer,
                a = i(858063).HitTestResult,
                h = i(28035).CompositeRenderer,
                u = i(114123),
                d = i(739665).LineEnd,
                c = i(623331).CHART_FONT_FAMILY;
            const {
                LINESTYLE_SOLID: _,
                LINESTYLE_DASHED: p
            } = i(631586);
            class m {
                constructor(e, t) {
                    this._model = e, this._source = t, this._waves = [], this._highlights = [], this._retracements = [], this._invalidated = !0
                }
                update() {
                    this._invalidated = !0
                }
                updateImpl() {
                    if (this._waves = [], this._highlights = [], this._retracements = [], this._source.customData() && this._source.properties().visible.value()) {
                        var e = this._source.customData().waves,
                            t = this._source._indexes,
                            i = this._model.timeScale(),
                            o = this._source.priceScale(),
                            n = this._model.mainSeries(),
                            l = n.firstBar();
                        if (o && !o.isEmpty() && !i.isEmpty() && l && e) {
                            for (var a = i.visibleBarsStrictRange(), h = a.lastBar(), u = a.firstBar(), d = ["m0StartIndex", "startIndex", "endIndex", "m2EndIndex", "m3EndIndex"], c = n.firstValue(), v = 0; v < e.length; v++)
                                if (e[v]) {
                                    for (var y = [], f = 0; f < 5; f++) {
                                        var g = t[e[v][d[f]]];
                                        if (!isFinite(g)) break;
                                        y.push(g)
                                    }
                                    if (0 !== y.length && !(y[0] > h || y[y.length - 1] < u)) {
                                        var b = +e[v].size;
                                        if (isFinite(b)) {
                                            var S = "level" + b,
                                                w = this._source.properties()[S];
                                            if (w.visible.value()) {
                                                var x = parseInt(e[v].direction, 10),
                                                    C = [];
                                                C.dir = x, C.prices = [], C.orig_prices = [];
                                                for (var P = 0; P < y.length; P++) {
                                                    if (void 0 !== y[P]) {
                                                        var I = {};
                                                        if ((k = y[P]) < (l = s(n.bars().first())).index) continue;
                                                        if (I.x = i.indexToCoordinate(k), null === (A = n.bars().valueAt(k))) {
                                                            C.push(void 0), C.prices.push(void 0), C.orig_prices.push(void 0), x = -x;
                                                            continue
                                                        }
                                                        var T, D = 1 === x ? A[TradingView.HIGH_PLOT] : A[TradingView.LOW_PLOT];
                                                        if (C.orig_prices.push(D), C.prices.push(D), I.y = o.priceToCoordinate(D, c), I.label = m._wave5Labels[b][P], I.align = -1 === x ? "top" : "bottom", I.color = w.color.value(), delete I.backgroundColor, C.id = "wave_" + v, this._source === this._model.hoveredSource())(T = this._model.lastHittestData()) && T.wave && T.wave.id === C.id && (I.color = "#FFFFFF", I.backgroundColor = w.color.value());
                                                        I.fontsize = m._fontSizes[b], I._textCache = {
                                                            widths: []
                                                        }, I.wave = C, C.push(I)
                                                    } else C.push(void 0), C.prices.push(void 0);
                                                    x = -x
                                                }
                                                C.inds = y, C.dir = x, C.color = w.color.value(), this._waves.push(C)
                                            }
                                        }
                                    }
                                }
                            if (this._source === this._model.hoveredSource())
                                if (T = this._model.lastHittestData()) {
                                    y = T.wave.inds, x = -T.wave.dir;
                                    var L = T.backgroundColor ? T.backgroundColor : T.color,
                                        R = T.wave.orig_prices,
                                        V = null;
                                    for (P = 0; P < y.length; P++) {
                                        if (void 0 !== y[P]) {
                                            var A, k = y[P],
                                                M = i.indexToCoordinate(k);
                                            if (null === (A = n.bars().valueAt(k))) {
                                                x = -x;
                                                continue
                                            }
                                            D = R[P];
                                            var E = o.priceToCoordinate(D, c),
                                                B = new r(M, E);
                                            V && this._highlights.push({
                                                points: [V, B],
                                                color: L
                                            }), V = B
                                        }
                                        x = -x
                                    }
                                    if (void 0 !== R[1] && void 0 !== R[2]) {
                                        var N = R[1],
                                            F = R[2],
                                            O = R[3],
                                            H = R[0];
                                        this._retracements.push({
                                            y: o.priceToCoordinate(N, c),
                                            x: 0,
                                            extendLeft: !0,
                                            extendRight: !0,
                                            color: L,
                                            text: "",
                                            style: _
                                        }), this._retracements.push({
                                            y: o.priceToCoordinate(N, c),
                                            x: 0,
                                            extendLeft: !0,
                                            extendRight: !0,
                                            color: L,
                                            text: "",
                                            style: _
                                        });
                                        x = F - N;
                                        if (void 0 !== R[0]) {
                                            D = N + (W = (H - N) / x) * x, M = i.indexToCoordinate(y[0]);
                                            this._retracements.push({
                                                y: o.priceToCoordinate(D, c),
                                                x: M,
                                                extendLeft: !1,
                                                extendRight: !0,
                                                color: L,
                                                text: "" + W.toFixed(3),
                                                style: p
                                            })
                                        }
                                        if (void 0 !== O) {
                                            var W;
                                            D = F - (W = (F - O) / x) * x, M = i.indexToCoordinate(y[3]);
                                            this._retracements.push({
                                                y: o.priceToCoordinate(D, c),
                                                x: M,
                                                extendLeft: !0,
                                                extendRight: !1,
                                                color: L,
                                                text: "" + W.toFixed(3),
                                                style: p
                                            })
                                        }
                                    }
                                }
                        }
                    }
                }
                renderer() {
                    this._invalidated && (this.updateImpl(), this._invalidated = !1);
                    for (var e = new h, t = this.CIRCLE_SIZE, i = {}, s = 0; s < this._waves.length; s++)
                        for (var n = this._waves[s], p = 0; p < n.length; p++) {
                            var m = n[p];
                            if (void 0 !== m) {
                                var v, y;
                                "top" === m.align ? (v = m.y + 4, i["top_" + m.x] ? (v += i["top_" + m.x] * t, i["top_" + m.x] = i["top_" + m.x] + 1) : i["top_" + m.x] = 1, y = v + t) : (v = m.y - t - 4, i["bottom_" + m.x] ? (v -= i["bottom_" + m.x] * t, i["bottom_" + m.x] = i["bottom_" + m.x] + 1) : i["bottom_" + m.x] = 1, y = v + t);
                                var f = {};
                                f.points = [new r(m.x, (v + y) / 2)], f.text = m.label, f.color = m.color, f.backgroundColor = m.backgroundColor, f.font = "Verdana", f.bold = !0, f.offsetX = 0, f.offsetY = 0, f.vertAlign = "middle", f.horzAlign = "center", f.fontsize = m.fontsize;
                                var g = new a(a.REGULAR, m);
                                e.append(new o(f, g))
                            }
                        }
                    for (s = 0; s < this._highlights.length; s++) {
                        var b = this._highlights[s],
                            S = {
                                points: b.points,
                                width: this._model.timeScale().width(),
                                height: this._source.priceScale().height(),
                                color: u.generateColor(b.color, 50),
                                linewidth: 3,
                                linestyle: _,
                                extendleft: !1,
                                extendright: !1,
                                leftend: d.Circle,
                                rightend: d.Circle
                            };
                        (w = new l).setData(S), e.append(w)
                    }
                    for (s = 0; s < this._retracements.length; s++) {
                        var w, x = this._retracements[s];
                        S = {
                            points: [new r(x.x + 1, x.y), new r(x.x, x.y)],
                            width: this._model.timeScale().width(),
                            height: this._source.priceScale().height(),
                            color: u.generateColor(x.color, 50),
                            linewidth: 1,
                            linestyle: x.style,
                            extendleft: x.extendLeft,
                            extendright: x.extendRight,
                            leftend: d.Normal,
                            rightend: d.Normal
                        };
                        (w = new l).setData(S), e.append(w);
                        var C = {
                            points: [new r(x.x, x.y)],
                            text: this._retracements[s].text,
                            backgroundColor: "#606060",
                            color: "#FFFFFF",
                            vertAlign: "middle",
                            horzAlign: "center",
                            font: c,
                            offsetX: x.extendRight ? -50 : 50,
                            offsetY: 2,
                            fontsize: 12
                        };
                        e.append(new o(C))
                    }
                    return e
                }
            }
            m.prototype.CIRCLE_SIZE = 16, m._wave5Labels = [
                ["i", "ii", "iii", "iv", "v"],
                ["(i)", "(ii)", "(iii)", "(iv)", "(v)"],
                ["((i))", "((ii))", "((iii))", "((iv))", "((v))"],
                ["1", "2", "3", "4", "5"],
                ["(1)", "(2)", "(3)", "(4)", "(5)"],
                ["((1))", "((2))", "((3))", "((4))", "((5))"],
                ["I", "II", "III", "IV", "V"],
                ["(I)", "(II)", "(III)", "(IV)", "(V)"],
                ["((I))", "((II))", "((III))", "((IV))", "((V))"]
            ], m._wave3Labels = [
                ["a", "b", "c"],
                ["A", "B", "C"]
            ], m._fontSizes = [10, 10, 10, 11, 11, 11, 12, 12, 12];
            t.study_ElliottWave = class extends n {
                margins() {
                    return [.1, .1]
                }
                isVisible() {
                    if (!this.properties().visible.value() || !this.isActualInterval()) return !1;
                    for (var e = 0; e <= 8; e++)
                        if (this.properties()["level" + e].visible.value()) return !0;
                    return !1
                }
                _createViews() {
                    super._createViews(), this._setPaneViews([new m(this.model(), this)])
                }
            }
        },
        921341: (e, t, i) => {
            "use strict";
            var s = i(814606).OverlayLegendValuesProvider,
                r = i(215328).OverlayStatusProvider,
                o = i(524334).StudyOverlayBase;
            t.study_Overlay = class extends o {
                constructor(e, t, i, s) {
                    super(e, t, i, s), this._paneView = null;
                    var r = this;
                    this.properties().minTick.listeners().subscribe(null, (function() {
                        r._recreatePriceFormattingDependencies(), r.updateAllViews(), r._model.fullUpdate()
                    }))
                }
                _showLastValueOnPriceScale() {
                    return this._model.properties().scalesProperties.showSeriesLastValue.value()
                }
                _onQuotesUpdate(e, t) {
                    !this._legendView || void 0 === t.values.change && void 0 === t.values.change_percent || (this._legendView.update(), this._model.updateSource(this))
                }
                destroy() {
                    this._quotesProvider.quotesUpdate().unsubscribeAll(this), this._quotesProvider.destroy(), super.destroy()
                }
                tags() {
                    var e = [],
                        t = this.symbolInfo();
                    return t ? e.push(t.name) : this._properties.inputs.symbol.value() && e.push(this._properties.inputs.symbol.value()), e
                }
                async _getPropertyDefinitionsViewModelClass() {
                    return (await Promise.all([i.e(88601), i.e(79533), i.e(41009), i.e(36339), i.e(44728), i.e(68833), i.e(60821), i.e(60607)]).then(i.bind(i, 190615))).StudyOverlayDefinitionsViewModel
                }
                defaultPlotIdForAlert() {
                    return ""
                }
                valuesProvider() {
                    return new s(this, this.model())
                }
                statusProvider(e) {
                    return new r(this, this.model())
                }
            }
        },
        827094: (e, t, i) => {
            "use strict";
            var s = i(348406).NonSeriesStudy,
                r = i(858063).HitTestResult,
                o = i(28035).CompositeRenderer,
                n = i(904244).MediaCoordinatesPaneRenderer,
                l = i(623331);
            class a extends n {
                constructor(e, t) {
                    super(), this._data = e, this._textCache = t
                }
                _drawImpl(e) {
                    var t = e.context;
                    t.textBaseline = "bottom", t.font = (this._data.bold ? "bold " : "normal ") + this._data.fontsize + "px " + this._data.font;
                    var i = Math.round(t.measureText(this._data.text).width + 4);
                    this._textCache.width = i, t.translate(this._data.x + .5, this._data.y), t.strokeStyle = this._data.borderColor, t.fillStyle = this._data.backColor, t.beginPath(), t.moveTo(0, 0), 1 === this._data.type ? (t.lineTo(5, -5), t.lineTo(i / 2, -5), t.lineTo(i / 2, -5 - this._data.fontsize), t.lineTo(-i / 2, -5 - this._data.fontsize), t.lineTo(-i / 2, -5),
                        t.lineTo(-5, -5), t.lineTo(0, 0)) : (t.lineTo(5, 5), t.lineTo(i / 2, 5), t.lineTo(i / 2, 5 + this._data.fontsize), t.lineTo(-i / 2, 5 + this._data.fontsize), t.lineTo(-i / 2, 5), t.lineTo(-5, 5), t.lineTo(0, 0)), t.fill(), t.stroke(), t.fillStyle = this._data.textColor, t.textAlign = "center", t.textBaseline = "middle", 1 === this._data.type ? t.fillText(this._data.text, 0, -5 - this._data.fontsize / 2) : t.fillText(this._data.text, 0, 5 + this._data.fontsize / 2)
                }
                hitTest(e) {
                    var t = this._textCache.width,
                        i = this._data.fontsize + 15,
                        s = this._data.x - t / 2,
                        o = this._data.y;
                    return 1 === this._data.type && (o -= i), e.x >= s && e.x <= s + t && e.y >= o && e.y <= o + i ? new r(r.REGULAR) : null
                }
            }
            class h {
                constructor(e, t) {
                    this._model = e, this._source = t, this._pivots = [], this._textCache = {}, this._invalidated = !0
                }
                update() {
                    this._invalidated = !0
                }
                updateImpl() {
                    if (this._pivots = [], this._source.customData() && this._source.customData().pivots && this._source.properties().visible.value()) {
                        var e = this._source.customData().pivots,
                            t = this._source._indexes,
                            i = this._model.timeScale(),
                            s = this._source.priceScale(),
                            r = this._model.mainSeries(),
                            o = r.firstValue();
                        if (s && !s.isEmpty() && !i.isEmpty() && o)
                            for (var n = i.visibleBarsStrictRange(), l = n.firstBar(), a = n.lastBar(), h = 0; h < e.length; h++)
                                if (e[h]) {
                                    var u = t[e[h].index];
                                    if (!(u < l || u > a)) {
                                        var d = e[h].type,
                                            c = r.bars().valueAt(u);
                                        if (null !== c) {
                                            var _ = 1 === d ? c[TradingView.HIGH_PLOT] : c[TradingView.LOW_PLOT],
                                                p = Math.round(i.indexToCoordinate(u)),
                                                m = s.priceToCoordinate(_, o);
                                            1 === d ? m -= i.barSpacing() / 6 : m += i.barSpacing() / 6 + 1, m = Math.round(m), this._pivots.push({
                                                x: p,
                                                y: m,
                                                price: s.formatPrice(_, o),
                                                type: d
                                            })
                                        }
                                    }
                                }
                    }
                }
                _pixelMargins() {
                    return this._source.properties().fontsize.value() + 15
                }
                topPixelMargin() {
                    return this._pixelMargins()
                }
                bottomPixelMargin() {
                    return this._pixelMargins()
                }
                renderer() {
                    if (this._invalidated && (this.updateImpl(), this._invalidated = !1), 0 !== this._pivots.length) {
                        for (var e = l.CHART_FONT_FAMILY, t = this._source.properties().fontsize.value(), i = this._source.properties().borderColor.value(), s = this._source.properties().backColor.value(), r = this._source.properties().textColor.value(), n = new o, h = 0; h < this._pivots.length; h++) {
                            var u = this._pivots[h],
                                d = {
                                    x: u.x,
                                    y: u.y,
                                    type: u.type,
                                    text: u.price,
                                    font: e,
                                    fontsize: t,
                                    borderColor: i,
                                    backColor: s,
                                    textColor: r
                                },
                                c = h;
                            this._textCache[c] || (this._textCache[c] = {}), n.append(new a(d, this._textCache[c]))
                        }
                        return n
                    }
                }
            }
            t.study_PivotPointsHighLow = class extends s {
                isVisible() {
                    return this.properties().visible.value() && this.isActualInterval()
                }
                _createViews() {
                    super._createViews(), this._setPaneViews([new h(this.model(), this)])
                }
                autoScaleInfo(e, t) {
                    return {
                        range: this._series.priceRange(e, t),
                        topPixelMargin: this._paneViews.length > 0 ? this._paneViews[0].topPixelMargin() : 0,
                        bottomPixelMargin: this._paneViews.length > 0 ? this._paneViews[0].bottomPixelMargin() : 0
                    }
                }
            }
        },
        486702: (e, t, i) => {
            "use strict";
            var s = i(650151).assert,
                r = i(758337).clone,
                o = i(373123).Study,
                n = i(884566).PlotList,
                l = i(353469).studyPlotFunctionMap,
                a = i(353469).studyEmptyPlotValuePredicate;
            class h {
                constructor(e, t, i) {
                    this._strategyPlotIndex = e, this._targetPlotIndex = t, this._startIndex = i
                }
                rebuildData(e) {
                    var t = this._targetPlotIndex + 1,
                        i = this._strategyPlotIndex + 1,
                        s = null,
                        r = null;
                    e.range(this._startIndex || e.firstIndex(), e.lastIndex()).each((function(o, n) {
                        var l = n[t],
                            a = n[i] ? Math.round(n[i]) : null;
                        if (n[t] = null, n[i] = null, !a || a > 0) return !1;
                        var h = o + a,
                            u = {
                                pointIndex: h,
                                value: l
                            };
                        if (r) {
                            if (r.pointIndex !== u.pointIndex) {
                                h >= 0 && (e.valueAt(h)[t] = l);
                                var d = !1;
                                s && (d = s.value <= r.value && r.value <= l || s.value >= r.value && r.value >= l), d ? r.pointIndex >= 0 && (e.valueAt(r.pointIndex)[t] = null) : s = r, r = u
                            }
                        } else r = u;
                        return !1
                    }))
                }
            }
            t.study_ScriptWithDataOffset = class extends o {
                constructor(e, t, i, s) {
                    super(e, t, i, s), this._underlyingData = new n(l(s), a)
                }
                clearData() {
                    super.clearData(), this._underlyingData.clear()
                }
                _mergeData(e) {
                    this._invalidateLastNonEmptyPlotRowCache();
                    var t = this._underlyingData.firstIndex();
                    this._underlyingData.merge(e), t !== this._underlyingData.firstIndex() && (this.m_data = new n(l(this._metaInfo), a));
                    var i = this.m_data.lastIndex();
                    this._underlyingData.range(i, this._underlyingData.lastIndex()).each(function(e, t) {
                        return this.m_data.add(e, r(t)), !1
                    }.bind(this)), this._plotsForStrategyProcessing().forEach((function(e) {
                        new h(e.strategyIndex, e.targetIndex, i).rebuildData(this.m_data)
                    }), this)
                }
                _plotsForStrategyProcessing() {
                    var e = [];
                    return this._metaInfo.plots.forEach((function(t, i) {
                        if ("dataoffset" === t.type) {
                            var r = this._metaInfo.plots.findIndex((function(e) {
                                return e.id === t.target
                            }));
                            s(r >= 0, "target plot not found for strategy plot " + t.id);
                            var o = {
                                strategyIndex: i,
                                targetIndex: r
                            };
                            e.push(o)
                        }
                    }), this), e
                }
            }
        },
        852469: (e, t, i) => {
            "use strict";
            var s = i(86441).Point,
                r = i(348406).NonSeriesStudy,
                o = i(296266).TrendLineRenderer,
                n = i(858063).HitTestResult,
                l = i(28035).CompositeRenderer,
                a = i(739665).LineEnd;
            const {
                LINESTYLE_SOLID: h
            } = i(631586);
            class u {
                constructor(e, t) {
                    this._model = e, this._source = t, this._pivots = [], this._textCache = {}, this._invalidated = !0
                }
                update() {
                    this._invalidated = !0
                }
                updateImpl() {
                    if (this._pivots = [], this._source.customData() && this._source.customData().zigzag && this._source.properties().visible.value()) {
                        var e = this._source.customData().zigzag,
                            t = this._source._indexes,
                            i = this._model.timeScale(),
                            s = this._source.priceScale(),
                            r = this._model.mainSeries(),
                            o = r.firstValue();
                        if (s && !s.isEmpty() && !i.isEmpty() && o)
                            for (var n = 0; n < e.length; n++)
                                if (e[n]) {
                                    var l = t[e[n].index],
                                        a = e[n].type,
                                        h = r.bars().valueAt(l);
                                    if (null !== h) {
                                        var u = 1 === a ? h[TradingView.HIGH_PLOT] : h[TradingView.LOW_PLOT],
                                            d = Math.round(i.indexToCoordinate(l)),
                                            c = s.priceToCoordinate(u, o);
                                        this._pivots.push({
                                            x: d,
                                            y: c
                                        })
                                    }
                                }
                    }
                }
                renderer() {
                    this._invalidated && (this.updateImpl(), this._invalidated = !1);
                    for (var e = new l, t = this._source.properties().color.value(), i = this._source.properties().linewidth.value(), r = 1; r < this._pivots.length; r++) {
                        var u = this._pivots[r],
                            d = this._pivots[r - 1],
                            c = {
                                points: [new s(d.x, d.y), new s(u.x, u.y)],
                                width: this._model.timeScale().width(),
                                height: this._source.priceScale().height(),
                                color: t,
                                linewidth: i,
                                linestyle: h,
                                extendleft: !1,
                                extendright: !1,
                                leftend: a.Normal,
                                rightend: a.Normal
                            },
                            _ = new o;
                        _.setData(c), _.setHitTest(new n(n.REGULAR)), e.append(_)
                    }
                    return e
                }
            }
            t.study_ZigZag = class extends r {
                isVisible() {
                    return this.properties().visible.value() && this.isActualInterval()
                }
                _createViews() {
                    super._createViews(),
                        this._setPaneViews([new u(this.model(), this)])
                }
            }
        },
        499791: (e, t, i) => {
            "use strict";

            function s(e) {
                return e.charAt(0).toUpperCase() + e.substring(1)
            }
            i.d(t, {
                capitalizeFirstLetter: () => s
            })
        },
        788600: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="25" height="25"><circle fill="none" stroke="currentColor" stroke-width="1.5" cx="12.5" cy="12.5" r="11.75"/><path fill="currentColor" d="M11.16 18H8.78V7.28c1.52-.06 2.47-.08 2.86-.08a5 5 0 0 1 3.72 1.37 4.9 4.9 0 0 1 1.37 3.64c0 3.86-1.85 5.79-5.57 5.79zm-.48-9.06v7.32c.31.03.64.05 1 .05a2.7 2.7 0 0 0 2.26-1.05c.54-.7.82-1.67.82-2.93 0-2.3-1.07-3.44-3.2-3.44-.21 0-.5.02-.88.05z"/></svg>'
        },
        261820: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><rect width="21.5" height="21.5" fill="none" stroke="currentColor" stroke-width="1.5" rx="1.25" x=".75" y=".75"/><path fill="currentColor" d="M10.23 7.96v2.51h3.55v1.62h-3.55v3.22h4.87V17H8.33V6.27h6.85v1.7h-4.95z"/></svg>'
        },
        777566: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" width="24" height="25"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M10.85 23.72c.4.25.9.25 1.3 0l9.5-5.82c.37-.22.6-.63.6-1.06V2c0-.69-.56-1.25-1.25-1.25H2C1.31.75.75 1.31.75 2v14.84c0 .43.23.84.6 1.06l9.5 5.82z"/><path fill="currentColor" d="M10.23 7.96v2.51h3.55v1.62h-3.55v3.22h4.87V17H8.33V6.27h6.85v1.7h-4.95z"/></svg>'
        },
        385442: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" width="24" height="25"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M10.87 1.23c.39-.22.87-.22 1.26 0l9.5 5.52c.38.23.62.64.62 1.08V23c0 .69-.56 1.25-1.25 1.25H2c-.69 0-1.25-.56-1.25-1.25V7.83c0-.44.24-.85.62-1.08l9.5-5.52z"/><path fill="currentColor" d="M10.23 9.96v2.51h3.55v1.62h-3.55v3.22h4.87V19H8.33V8.27h6.85v1.7h-4.95z"/></svg>'
        },
        717090: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="25" height="25" fill="none"><circle stroke="currentColor" stroke-width="1.5" cx="12.5" cy="12.5" r="11.75"/><path fill="currentColor" d="m19.27 13.25.53-.53-.53-.53-3.5-3.5-1.06 1.06 2.22 2.22h-5.38L7.27 7.7 6.2 8.75l4.5 4.5.22.22h6L14.7 15.7l1.06 1.06 3.5-3.5Zm-10.56.44-3 3 1.06 1.06 3-3L8.7 13.7Z"/></svg>'
        },
        274469: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="25" height="25"><circle fill="none" stroke="currentColor" stroke-width="1.5" cx="12.5" cy="12.5" r="11.75"/><path fill="currentColor" d="M9.25 17.4l.7-1.7c.75.53 1.5.8 2.22.8 1.12 0 1.68-.4 1.68-1.18 0-.37-.13-.72-.4-1.05-.26-.33-.8-.7-1.63-1.11a8.18 8.18 0 0 1-1.66-1.02 2.82 2.82 0 0 1-.89-2.17c0-.83.3-1.52.9-2.06.62-.55 1.4-.82 2.35-.82 1.24 0 2.15.23 2.73.7l-.57 1.63a3.58 3.58 0 0 0-2.12-.71c-.44 0-.78.11-1.03.35a1.2 1.2 0 0 0-.36.9c0 .61.69 1.25 2.05 1.92.72.35 1.23.67 1.55.97.32.3.56.64.73 1.03.16.4.24.83.24 1.31 0 .87-.34 1.59-1.03 2.15a4.2 4.2 0 0 1-2.75.84c-1 0-1.9-.26-2.71-.77z"/></svg>'
        },
        627086: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.57 5.5h-.07a3.5 3.5 0 1 0 .07 7A4.98 4.98 0 0 1 4 9a5 5 0 0 1 8.57-3.5z"/></svg>'
        },
        323373: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.22 11.78A3.47 3.47 0 0 0 9 6.98a3.48 3.48 0 0 0-3.22 4.8 6.97 6.97 0 0 1 6.44 0zM4.18 9.83L2.1 9.28l.33-1.24 2.07.55-.33 1.24zM6.38 6.36l-.9-1.94 1.16-.54.9 1.94-1.16.54zM10.46 5.82l.9-1.94 1.16.54-.9 1.94-1.16-.54zM13.49 8.6l2.07-.56.33 1.24-2.07.55-.33-1.24z"/></svg>'
        }
    }
]);
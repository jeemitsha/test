(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [16147], {
        608902: o => {
            o.exports = {}
        },
        314967: (o, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                colorsPalette: () => _,
                getHexColorByName: () => u
            });
            var t = r(611314);
            const l = JSON.parse('{"color-header-bg":"color-white","color-body-bg":"color-white","color-body-secondary-bg":"color-cold-gray-100","color-bg-primary":"color-white","color-bg-primary-hover":"color-cold-gray-100","color-bg-secondary":"color-white","color-bg-highlight":"color-cold-gray-50","color-bg-scroll-buttons":"color-cold-gray-100","color-legacy-bg-scroll-buttons":"color-cold-gray-850","color-legacy-bg-widget":"color-white","color-text-primary":"color-cold-gray-900","color-text-secondary":"color-cold-gray-550","color-text-tertiary":"color-cold-gray-400","color-text-disabled":"color-cold-gray-300","color-accent-content":"color-cold-gray-900","color-box-shadow":"color-cold-gray-300","color-divider":"color-cold-gray-150","color-divider-hover":"color-cold-gray-100","color-divider-secondary":"color-cold-gray-100","color-active-hover-text":"color-cold-gray-900","color-alert-text":"color-cold-gray-900","color-border-table":"color-cold-gray-100","color-brand":"color-tv-blue-500","color-brand-active":"color-tv-blue-700","color-brand-hover":"color-tv-blue-600","color-chart-page-bg":"color-cold-gray-150","color-common-tooltip-bg":"color-cold-gray-800","color-danger":"color-ripe-red-400","color-danger-hover":"color-ripe-red-500","color-danger-active":"color-ripe-red-600","color-depthrenderer-stroke-style":"color-cold-gray-100","color-highlight-new":"color-tan-orange-50","color-input-bg":"color-white","color-input-publish-bg":"color-white","color-link":"color-tv-blue-500","color-link-hover":"color-tv-blue-600","color-link-active":"color-tv-blue-700","color-list-nth-child-bg":"color-cold-gray-50","color-pane-bg":"color-white","color-pane-secondary-bg":"color-cold-gray-100","color-popup-menu-item-hover-bg":"color-cold-gray-100","color-popup-menu-separator":"color-cold-gray-150","color-screener-description":"color-cold-gray-650","color-success":"color-minty-green-500","color-success-hover":"color-minty-green-600","color-success-active":"color-minty-green-700","color-toolbar-button-text":"color-cold-gray-900","color-toolbar-button-text-hover":"color-cold-gray-900","color-toolbar-button-text-active":"color-tv-blue-500","color-toolbar-button-text-active-hover":"color-tv-blue-600","color-toolbar-button-background-hover":"color-cold-gray-100","color-toolbar-button-background-secondary-hover":"color-cold-gray-150","color-toolbar-button-background-active":"color-tv-blue-50","color-toolbar-button-background-active-hover":"color-tv-blue-100","color-toolbar-toggle-button-background-active":"color-tv-blue-500","color-toolbar-toggle-button-background-active-hover":"color-tv-blue-600","color-toolbar-toggle-button-icon":"color-cold-gray-200","color-toolbar-interactive-element-text-normal":"color-cold-gray-900","color-toolbar-interactive-element-text-hover":"color-cold-gray-900","color-toolbar-opened-element-bg":"color-cold-gray-100","color-toolbar-divider-background":"color-cold-gray-150","color-tooltip-bg":"color-cold-gray-800","color-tv-dialog-caption":"color-cold-gray-650","color-tv-dropdown-item-hover-bg":"color-cold-gray-100","color-underlined-text":"color-cold-gray-500","color-widget-pages-bg":"color-white","color-warning":"color-tan-orange-500","color-growing":"color-minty-green-500","color-falling":"color-ripe-red-500","color-forex-icon":"color-cold-gray-750","color-list-item-active-bg":"color-tv-blue-400","color-list-item-hover-bg":"color-tv-blue-50","color-list-item-text":"color-cold-gray-800","color-price-axis-label-back":"color-cold-gray-150","color-price-axis-label-text":"color-cold-gray-650","color-price-axis-gear":"color-cold-gray-900","color-price-axis-gear-hover":"color-black","color-price-axis-highlight":"color-cold-gray-150","color-bid":"color-tv-blue-500","color-border":"color-cold-gray-150","color-border-chat-fields":"color-cold-gray-250","color-border-hover":"color-cold-gray-250","color-button-hover-bg":"color-cold-gray-150","color-depthrenderer-fill-style":"color-cold-gray-650","color-disabled-border-and-color":"color-cold-gray-150","color-disabled-input":"color-cold-gray-150","color-empty-container-message":"color-cold-gray-550","color-icons":"color-cold-gray-550","color-input-textarea-readonly":"color-cold-gray-650","color-input-placeholder-text":"color-cold-gray-350","color-item-active-blue":"color-tv-blue-50","color-item-hover-active-bg":"color-tv-blue-100","color-item-hover-bg":"color-tv-blue-100","color-item-hover-blue":"color-tv-blue-100","color-item-selected-blue":"color-tv-blue-50","color-item-active-text":"color-white","color-item-active-bg":"color-tv-blue-500","color-list-item":"color-cold-gray-550","color-news-highlight":"color-tv-blue-100","color-placeholder":"color-cold-gray-350","color-row-hover-active-bg":"color-cold-gray-100","color-sb-scrollbar-body-bg":"color-cold-gray-200","color-section-separator-border":"color-cold-gray-300","color-separator-table-chat":"color-cold-gray-150","color-tag-active-bg":"color-cold-gray-200","color-tag-hover-bg":"color-cold-gray-150","color-text-regular":"color-cold-gray-700","color-tv-button-checked":"color-cold-gray-550","color-scroll-bg":"color-cold-gray-400","color-scroll-border":"color-cold-gray-100","color-widget-border":"color-cold-gray-100","color-scroll-buttons-arrow":"color-white","color-control-intent-default":"color-cold-gray-200","color-control-intent-success":"color-minty-green-500","color-control-intent-primary":"color-tv-blue-500","color-control-intent-warning":"color-tan-orange-500","color-control-intent-danger":"color-ripe-red-500","color-goto-label-background":"color-cold-gray-800","color-pre-market":"color-tan-orange-600","color-pre-market-bg":"color-tan-orange-400","color-post-market":"color-tv-blue-500","color-post-market-bg":"color-tv-blue-400","color-market-open":"color-minty-green-500","color-market-open-bg":"color-minty-green-400","color-market-closed":"color-cold-gray-400","color-market-holiday":"color-cold-gray-400","color-market-expired":"color-ripe-red-500","color-invalid-symbol":"color-ripe-red-400","color-invalid-symbol-hover":"color-ripe-red-700","color-replay-mode":"color-tv-blue-500","color-replay-mode-point-select":"color-cold-gray-350","color-replay-mode-icon":"color-white","color-replay-mode-hover":"color-tv-blue-600","color-notaccurate-mode":"color-berry-pink-700","color-notaccurate-mode-bg":"color-berry-pink-400","color-delay-mode":"color-tan-orange-700","color-delay-mode-bg":"color-tan-orange-400","color-eod-mode":"color-grapes-purple-700","color-eod-mode-bg":"color-grapes-purple-400","color-data-problem":"color-ripe-red-600","color-data-problem-bg":"color-ripe-red-400","color-data-problem-hover":"color-ripe-red-700","color-list-item-bg-highlighted":"color-tv-blue-50","color-list-item-bg-selected":"color-tv-blue-100","color-list-item-bg-highlighted-hover":"color-tv-blue-100","color-list-item-bg-selected-hover":"color-tv-blue-200","color-screener-header-bg":"color-white","color-screener-header-bg-hover":"color-cold-gray-100","color-marker-flagged":"color-ripe-red-400","color-marker-flagged-hovered":"color-ripe-red-600","color-ask":"color-ripe-red-400","color-sell":"color-ripe-red-400","color-buy":"color-tv-blue-500","color-neutral":"color-cold-gray-500","color-pro":"color-minty-green-400","color-pro-hover":"color-minty-green-600","color-pro-plus":"color-tv-blue-500","color-pro-plus-hover":"color-tv-blue-600","color-pro-premium":"color-tan-orange-500","color-pro-premium-hover":"color-tan-orange-700","color-trial":"color-cold-gray-500","color-trial-hover":"color-cold-gray-600","color-mod":"color-ripe-red-400","color-mod-hover":"color-ripe-red-600","color-ad":"color-tan-orange-500","color-broker-featured":"color-minty-green-400","color-broker-featured-hover":"color-minty-green-600","color-alert-status-active":"color-minty-green-400","color-alert-status-stopped":"color-ripe-red-500","color-alert-status-triggered":"color-tan-orange-500","color-overlay":"color-cold-gray-400","color-search-button-hover":"color-cold-gray-150","color-boost-button-content-selected":"color-tv-blue-600","color-boost-button-content-hover":"color-cold-gray-900","color-boost-button-bg-hover":"color-cold-gray-150","color-boost-button-border-hover":"color-cold-gray-150","color-boost-button-border-default":"color-cold-gray-150","color-common-tooltip-text":"color-cold-gray-100","color-replay-data-mode":"color-radical-red","color-legacy-success":"color-keppel-1","color-collapse-tabs-border":"color-athens-gray-3","color-site-widget-hover":"color-athens-gray-1","color-attention":"color-sunglow","color-card-border":"color-cold-gray-150","color-card-border-hover":"color-cold-gray-300","color-background-special-primary":"color-white","color-stroke-special-primary":"color-cold-gray-150","color-selection-bg":"color-tv-blue-100"}');
            var c = r(650151);
            const a = { ...t,
                    ...l
                },
                s = {},
                i = Object.keys(a).length,
                n = /^#[0-9A-F]{6}$/i;

            function d(o, e = []) {
                const r = a[o];
                if (!r) return null;
                if (n.test(r)) return r;
                const t = r;
                return e.push(o), -1 !== e.indexOf(t) ? (console.warn("Colors definitions cycled"), r) : e.length > i ? (console.warn("Too many variables-link in HEX-color search: " + e[0]), null) : d(t, e)
            }
            Object.keys(a).forEach((o => {
                const e = d(o);
                s[o] = (0, c.ensureNotNull)(e)
            }));
            const _ = s;

            function u(o) {
                const e = _[o];
                if (!e) throw new Error("No such color " + o);
                return e
            }
        },
        780792: (o, e, r) => {
            "use strict";
            r.d(e, {
                AbstractIndicator: () => s
            });
            var t = r(272001),
                l = r(777491),
                c = r(947809);
            r(309103);
            const a = (0, t.getLogger)("GUI.Blocks.AbstractIndicator");
            class s {
                constructor(o) {
                    this._classSuffix = "", this._quoteSessionPrefix = "abstract-indicator", this._shortMode = !1, this._showTooltip = !0, this._subscribed = !1, this._tooltipType = "custom", this._lastTooltipText = "", this._quoteSession = o.quoteSession
                }
                getValue() {
                    return this._value
                }
                getTooltipText() {
                    return this._labelMap[this._value] || ""
                }
                getLabel() {
                    return this._labelMap[this._value] || ""
                }
                getElement() {
                    return this._el
                }
                update(o, e) {
                    this._updateValue(o, e), this._render()
                }
                setTooltipEnabled(o = !1) {
                    this._showTooltip !== o && (this._showTooltip = o, this._renderTooltip())
                }
                enableShortMode() {
                    !0 !== this._shortMode && (this._shortMode = !0, this._render())
                }
                disableShortMode() {
                    !1 !== this._shortMode && (this._shortMode = !1, this._render())
                }
                isShortModeEnabled() {
                    return this._shortMode
                }
                start() {
                    !this._subscribed && this._symbolName && (this._quoteSession || (this._quoteSession = (0, c.getQuoteSessionInstance)("simple")), this._quoteSession.subscribe(this._getQuoteSessionId(), this._symbolName, this.update.bind(this)), this._subscribed = !0)
                }
                stop() {
                    this._subscribed && this._quoteSession && this._symbolName && (this._quoteSession.unsubscribe(this._getQuoteSessionId(), this._symbolName), this._subscribed = !1)
                }
                _init(o) {
                    this._el = o.el ? o.el : document.createElement("span"), this._el.innerHTML = "", this._classMap = o.classMap, this._labelMap = o.labelMap, this._showTooltip = o.showTooltip, this._classSuffix = o.classSuffix, this._symbolName = o.symbol, o.tooltipType && (this._tooltipType = o.tooltipType), this._quoteSessionGUID = (0, l.guid)(), !0 === o.short && this.enableShortMode(), o.data && this._updateValue(o.data)
                }
                _clearClasses() {
                    Object.values(this._classMap).map((o => {
                        this._el.classList.remove(`${o}`), this._el.classList.remove(`${o}${this._classSuffix}`)
                    }))
                }
                _render() {
                    this._renderClasses(), this._renderTooltip(), this._renderLabel()
                }
                _renderLabel() {
                    this._el.textContent = this.getLabel()
                }
                _updateValue(o, e) {
                    const r = this._getValueFromData(o);
                    (e || r !== this._value) && (this._value = r)
                }
                _renderClasses() {
                    const o = this._el.classList;
                    o.add(this._componentClass, this._componentClass + this._classSuffix);
                    const e = this._classMap[this._value];
                    for (const r in this._classMap) {
                        const t = this._classMap[r];
                        t && (t === e ? o.add(t, t + this._classSuffix) : o.remove(t, t + this._classSuffix))
                    }!e && this._value && a.logWarn(`no className for status ${this._value}`)
                }
                _renderTooltip() {
                    const o = this._showTooltip ? this.getTooltipText() : "";
                    o !== this._lastTooltipText && (this._lastTooltipText = o, this._el.setAttribute("title", o),
                        "custom" === this._tooltipType && this._el.classList.toggle("apply-common-tooltip", this._showTooltip))
                }
                _getQuoteSessionId() {
                    return `${this._quoteSessionPrefix}.${this._quoteSessionGUID}`
                }
            }
        },
        719240: (o, e, r) => {
            "use strict";
            r.d(e, {
                DataModeIndicator: () => i
            });
            var t = r(777754),
                l = (r(984919), r(608902), r(780792));
            const c = {
                connecting: "tv-data-mode--connecting",
                delayed: "tv-data-mode--delayed",
                delayed_streaming: "tv-data-mode--delayed",
                endofday: "tv-data-mode--endofday",
                forbidden: "tv-data-mode--forbidden",
                realtime: "tv-data-mode--realtime",
                snapshot: "tv-data-mode--snapshot",
                loading: "tv-data-mode--loading",
                replay: "tv-data-mode--replay"
            };

            function a() {
                return {
                    connecting: t.t(null, {
                        context: "data_mode_connecting_letter"
                    }, r(52587)),
                    delayed: t.t(null, {
                        context: "data_mode_delayed_letter"
                    }, r(469219)),
                    delayed_streaming: t.t(null, {
                        context: "data_mode_delayed_streaming_letter"
                    }, r(426211)),
                    endofday: t.t(null, {
                        context: "data_mode_end_of_day_letter"
                    }, r(960582)),
                    forbidden: t.t(null, {
                        context: "data_mode_forbidden_letter"
                    }, r(957357)),
                    realtime: t.t(null, {
                        context: "data_mode_realtime_letter"
                    }, r(647310)),
                    snapshot: t.t(null, {
                        context: "data_mode_snapshot_letter"
                    }, r(87817)),
                    loading: "",
                    replay: t.t(null, {
                        context: "data_mode_replay_letter"
                    }, r(214485))
                }
            }
            const s = {
                streaming: "realtime"
            };
            class i extends l.AbstractIndicator {
                constructor(o) {
                    super(o), this._quoteSessionPrefix = "data-mode-indicator", this._componentClass = "tv-data-mode", this._init(o)
                }
                getLabel() {
                    return !0 === this._shortMode ? this._shortLabelMap[this._value] || "" : super.getLabel()
                }
                setMode(o, e) {
                    this.update({
                        values: {
                            update_mode: o,
                            update_mode_seconds: e
                        }
                    })
                }
                hide() {
                    this._el.classList.add("i-hidden")
                }
                show() {
                    this._el.classList.remove("i-hidden")
                }
                getTooltipText() {
                    let o = "";
                    const e = this.getValue();
                    if ("" === e) return o;
                    switch (e) {
                        case "delayed":
                            o = t.t(null, void 0, r(728332));
                            break;
                        case "delayed_streaming":
                            o = t.t(null, void 0, r(887267));
                            break;
                        default:
                            o = this._labelMap[e] || o
                    }
                    return ["delayed", "delayed_streaming"].includes(e) && (o = o.format({
                        number: String(Math.round(this._modeInterval / 60))
                    })), o
                }
                _init(o = {}) {
                    const e = Object.assign({}, {
                        classMap: c,
                        classSuffix: "",
                        data: {
                            values: {
                                update_mode: "connecting"
                            }
                        },
                        labelMap: {
                            connecting: t.t(null, void 0, r(413859)),
                            delayed: t.t(null, void 0, r(78211)),
                            delayed_streaming: t.t(null, void 0, r(78211)),
                            endofday: t.t(null, void 0, r(132023)),
                            forbidden: t.t(null, void 0, r(113439)),
                            realtime: t.t(null, void 0, r(906530)),
                            snapshot: t.t(null, void 0, r(502927)),
                            loading: "",
                            replay: t.t(null, void 0, r(688506))
                        },
                        modeInterval: 600,
                        short: !1,
                        shortLabelMap: a(),
                        showTooltip: !0,
                        tooltipType: "custom"
                    }, o);
                    this._modeInterval = e.modeInterval || 600, this._shortLabelMap = e.shortLabelMap || a(), super._init(e), this._render()
                }
                _getValueFromData(o) {
                    let e;
                    return e = void 0 !== o.values && void 0 !== o.values.update_mode ? o.values.update_mode : this.getValue(), s[e] || e
                }
                _updateValue(o, e) {
                    void 0 !== o.values && void 0 !== o.values.update_mode_seconds && (this._modeInterval = o.values.update_mode_seconds), super._updateValue(o, e)
                }
            }
        },
        461909: (o, e, r) => {
            "use strict";

            function t(o) {
                if (void 0 === o) return null;
                const e = o.match(/(delayed_streaming)_([\d]{1,4})/);
                return null === e ? null : {
                    mode: e[1],
                    interval: parseInt(e[2])
                }
            }

            function l(o) {
                const e = t(o.update_mode);
                return null === e || (o.update_mode = e.mode, o.update_mode_seconds = e.interval), o
            }
            r.r(e), r.d(e, {
                parseUpdateMode: () => t,
                normalizeUpdateMode: () => l
            })
        },
        736844: (o, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                QuoteCache: () => l,
                QUOTE_FIELDS: () => c,
                QUOTE_FIELDS_CACHE: () => a
            });
            var t = r(650151);
            class l {
                constructor(o) {
                    this._cache = new Map, this._fields = [...o.fields]
                }
                update(o, e, r) {
                    const l = (0, t.ensureDefined)(o.symbolname);
                    if (this._cache.has(l) || this._cache.set(l, {
                            symbolname: l,
                            status: o.status,
                            values: {}
                        }), "error" === o.status) return;
                    const c = (0, t.ensureDefined)(this._cache.get(l));
                    c.status = o.status;
                    for (const t of this._fields) e.has(t) && (r || void 0 !== o.values[t]) && (c.values[t] = o.values[t])
                }
                get(o) {
                    var e;
                    return null !== (e = this._cache.get(o)) && void 0 !== e ? e : null
                }
                fields() {
                    return this._fields
                }
            }
            const c = new Set(["pro_name", "base_name", "logoid", "currency-logoid", "base-currency-logoid", "short_name", "description", "exchange", "listed_exchange", "type", "country_code", "provider_id", "sector", "typespecs", "industry", "currency_id", "last_price", "fractional", "minmov", "minmove2", "pricescale", "change", "change_percent", "volume", "average_volume", "market_cap_basic", "total_revenue", "earnings_per_share_basic_ttm", "price_earnings_ttm", "beta_1_year", "dps_common_stock_prim_issue_fy", "dividends_yield", "earnings_release_next_date", "earnings_per_share_forecast_next_fq", "earnings_release_date", "earnings_per_share_fq", "fundamental_currency_code", "symbol-primaryname", "currency_code", "rates_mc", "rates_fy", "rates_ttm", "value_unit_id", "update_mode", "language", "local_description", "short_description", "source", "source2", "format", "recommendation_mark", "last_report_frequency", "price_target_estimates_num", "price_target_average", "update_mode_seconds", "recommendation_total", "recommendation_buy", "recommendation_over", "recommendation_hold", "recommendation_under", "recommendation_sell", "recommendation_total", "price_target_high", "price_target_low", "rates_pt", "rates_pt", "total_revenue_fy_h", "total_revenue_fq_h", "total_revenue_fh_h", "net_income_fy_h", "net_income_fq_h", "net_income_fh_h", "total_assets_fy_h", "total_assets_fq_h", "total_assets_fh_h", "total_liabilities_fy_h", "total_liabilities_fq_h", "total_liabilities_fh_h", "cash_f_operating_activities_fy_h", "cash_f_operating_activities_fq_h", "cash_f_operating_activities_fh_h", "cash_f_investing_activities_fy_h", "cash_f_investing_activities_fq_h", "cash_f_investing_activities_fh_h", "cash_f_financing_activities_fy_h", "cash_f_financing_activities_fq_h", "cash_f_financing_activities_fh_h", "fiscal_period_fy_h", "fiscal_period_fq_h", "fiscal_period_fh_h", "earnings_release_date_fq_h", "earnings_release_date_fy_h", "earnings_release_date_fh_h", "earnings_release_next_date_fq", "earnings_release_next_date_fy", "earnings_release_next_date_fh", "earnings_release_next_time", "is_next_earnings_release_date_estimated", "earnings_per_share_forecast_next_fq", "earnings_per_share_forecast_next_fy", "earnings_per_share_forecast_next_fh", "earnings_per_share_forecast_fq_h", "earnings_per_share_forecast_fy_h", "earnings_per_share_forecast_fh_h", "earnings_per_share_fq_h", "earnings_per_share_fy_h", "earnings_per_share_fh_h", "earnings_fiscal_period_fq_h", "earnings_fiscal_period_fy_h", "earnings_fiscal_period_fh_h", "next_earnings_fiscal_period_fq", "next_earnings_fiscal_period_fy", "next_earnings_fiscal_period_fh", "revenue_fq_h", "revenue_fy_h", "revenue_fh_h", "revenue_forecast_fq_h", "revenue_forecast_fy_h", "revenue_forecast_fh_h", "revenue_forecast_next_fq", "revenue_forecast_next_fy", "revenue_forecast_next_fh", "dividend_payout_ratio_ttm", "dividends_yield_current", "dividend_ex_date_upcoming", "dividend_amount_upcoming", "dividend_amount_recent", "dividend_ex_date_recent", "dividend_amount_h"]),
                a = new l({
                    fields: c
                })
        },
        947809: (o, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                getQuoteSessionInstance: () => a,
                setQuoteSessionInstance: () => s,
                getQuoteSessionNoEnsure: () => i,
                destroyQuoteSessions: () => n
            });
            var t = r(291670),
                l = r.n(t);
            const c = {};

            function a(o = "full") {
                return c[o] || s(o, new(l())(o)), c[o]
            }

            function s(o = "full", e) {
                c[o] = e
            }

            function i(o = "full") {
                return c[o]
            }

            function n() {
                for (const o in c)
                    if (c.hasOwnProperty(o)) {
                        const e = c[o];
                        void 0 !== e && e.destroy(), delete c[o]
                    }
            }
        },
        801669: (o, e, r) => {
            "use strict";
            r.d(e, {
                QuoteSession: () => l
            });
            var t = r(777491);
            class l {
                constructor(o, e = (0, t.randomHash)()) {
                    this._sessionstarted = !1, this._globalHandler = null, this._chartApi = o, this._sessionid = "qs_" + e
                }
                destroy() {
                    this._sessionstarted && (this._chartApi.quoteDeleteSession(this._sessionid), this._sessionstarted = !1)
                }
                connected() {
                    return this._chartApi.connected()
                }
                connect(o) {
                    this._globalHandler = o, this._chartApi.createSession(this._sessionid, this), this._chartApi.connect()
                }
                disconnect() {
                    this._chartApi.disconnect()
                }
                quoteAddSymbols(o) {
                    this._chartApi.quoteAddSymbols(this._sessionid, o)
                }
                quoteRemoveSymbols(o) {
                    this._chartApi.quoteRemoveSymbols(this._sessionid, o)
                }
                quoteFastSymbols(o) {
                    this._chartApi.quoteFastSymbols(this._sessionid, o)
                }
                quoteSetFields(o) {
                    this._chartApi.quoteSetFields(this._sessionid, o)
                }
                onMessage(o) {
                    var e;
                    switch (o.method) {
                        case "connected":
                            this._sessionstarted || (this._chartApi.quoteCreateSession(this._sessionid), this._sessionstarted = !0);
                            break;
                        case "disconnected":
                            this._sessionstarted = !1
                    }
                    null === (e = this._globalHandler) || void 0 === e || e.call(this, o)
                }
                quoteHibernateAll() {
                    this._chartApi.quoteHibernateAll(this._sessionid)
                }
            }
            window.TradingView.QuoteSession = l
        },
        291670: (o, e, r) => {
            "use strict";
            o = r.nmd(o);
            var t = r(869403),
                l = r(343370).default,
                c = r(12481).default,
                a = r(831471).PriceFormatter;
            const {
                uniq: s
            } = r(588565);
            var i = r(777491);
            const {
                normalizeUpdateMode: n
            } = r(461909);
            var d = r(120149).deepExtend;
            const {
                QUOTE_FIELDS_CACHE: _,
                QUOTE_FIELDS: u
            } = r(736844);
            var h;

            function p(o, e) {
                this.options = Object.assign({
                    throttleTimeout: 125
                }, e), this._connected = !1, this._symbol_data = {}, this._subscriptions = {}, this.onConnect = new t, this.onDisconnect = new t, this._quoteApi = new h(window.ChartApiInstance), this._type = o || "full", this._delayUpdateFastSymbols = c(this._updateFastSymbols, 250), this._throttledSymbolData = {}, this._formatterValuesCache = {}, this._waitingForFormatters = {}, this._snapshotValuesCache = {}, this._waitingForSnapshot = {}, this.connect()
            }
            h = r(801669).QuoteSession, p.prototype.destroy = function() {
                    this._quoteApi.destroy(), this._quoteApi = null, this._connected = !1, this.onDisconnect.fire()
                }, p.prototype.typeFields = {}, p.prototype.typeFields.simple = ["base-currency-logoid", "ch", "chp", "currency-logoid", "currency_code", "currency_id", "base_currency_id", "current_session", "description", "exchange", "format", "fractional", "is_tradable", "language", "local_description", "listed_exchange", "logoid", "lp", "lp_time", "minmov", "minmove2", "original_name", "pricescale", "pro_name", "short_name", "type", "typespecs", "update_mode", "volume", "value_unit_id"],
                p.prototype.typeFields.simpleDetailed = [].concat(p.prototype.typeFields.simple, ["ask", "bid", "fundamentals", "high_price", "is_tradable", "low_price", "open_price", "prev_close_price", "rch", "rchp", "rtc", "rtc_time", "status", "basic_eps_net_income", "beta_1_year", "earnings_per_share_basic_ttm", "industry", "market_cap_basic", "price_earnings_ttm", "sector", "volume", "dividends_yield", "timezone"]), p.prototype.typeFields.full = [], p.prototype.typeFields.watchlist = [].concat(p.prototype.typeFields.simple, ["rchp", "rtc", "country_code", "provider_id"]), p.prototype.typeFields.portfolio = ["pro_name", "short_name", "exchange", "listed_exchange", "description", "sector", "type", "typespecs", "industry", "currency_code", "currency_id", "ch", "chp", "logoid", "currency-logoid", "base-currency-logoid", "earnings_per_share_forecast_next_fq", "earnings_release_next_date", "earnings_release_date", "earnings_per_share_fq", "lp", "fractional", "minmov", "minmove2", "pricescale", "volume", "average_volume", "market_cap_basic", "total_revenue", "earnings_per_share_basic_ttm", "price_earnings_ttm", "beta_1_year", "dps_common_stock_prim_issue_fy", "dividends_yield", "fundamental_currency_code", "rates_mc", "rates_fy", "rates_ttm", "format"], p.prototype.typeFields.notes = ["short_name", "pro_name", "logoid", "currency-logoid", "base-currency-logoid", "symbol-primaryname", "type", "typespecs"], p.prototype.connect = function(o) {
                    this._quoteApi.connect(this.quoteHandler.bind(this))
                }, p.prototype.quoteHandler = function(o) {
                    var e = o.method,
                        r = o.params;
                    switch (e) {
                        case "connected":
                            this._connected || (this._connected = !0, this.onConnected());
                            break;
                        case "quote_list_fields":
                            break;
                        case "quote_symbol_data":
                            this._connected && this.onSymbolData(r[0]);
                            break;
                        case "quote_completed":
                            this._connected && this.onSymbolData({
                                symbolname: r[0],
                                complete: performance.now(),
                                values: {}
                            });
                            break;
                        case "disconnected":
                            this._connected && (this._connected = !1, this.onDisconnect.fire())
                    }
                }, p.prototype.onConnected = function() {
                    this.setFields();
                    var o = Object.keys(this._symbol_data);
                    o.length && (this._quoteApi.quoteAddSymbols(o), this._delayUpdateFastSymbols()), this.onConnect.fire()
                }, p.prototype.setFields = function() {
                    var o = p.prototype.typeFields[this._type];
                    o && o.length && this._quoteApi.quoteSetFields(o)
                }, p.prototype.onSymbolData = function(o) {
                    try {
                        o.status && _.update(o, u, !1)
                    } catch (o) {}
                    var e = o.symbolname,
                        r = this._throttledSymbolData[e];
                    r || (r = this._throttledSymbolData[e] = {
                        fnDispatch: l(this.dipatchSymbolData.bind(this), this.options.throttleTimeout)
                    }), r.cache ? d(r.cache, o) : r.cache = o, r.fnDispatch(e)
                }, p.prototype._parseUpdateMode = function(o) {
                    n(o)
                }, p.prototype.dipatchSymbolData = function(o) {
                    var e = this._symbol_data[o],
                        r = this._throttledSymbolData[o].cache;
                    if (delete this._throttledSymbolData[o].cache, this._symbol_data[o])
                        for (var t in d(e, r), e.values && this._parseUpdateMode(e.values), this._subscriptions) {
                            var l = this._subscriptions[t];
                            l.has(o) && [...l.get(o)].forEach((function(o) {
                                o(e, r)
                            }))
                        }
                }, p.prototype.subscribe = function(o, e, r) {
                    this._subscriptions[o] = this._subscriptions[o] || new Map;
                    var t = this._subscriptions[o];
                    e = [].concat(e);
                    var l = [];
                    e.forEach((function(o) {
                        this._symbol_data[o] ? t && t.has(o) || this._symbol_data[o].subscribers_count++ : (this._symbol_data[o] = {
                            subscribers_count: 1
                        }, l.push(o)), t.has(o) || t.set(o, []), t.get(o).push(r), t.get(o).fast = !0, this._symbol_data[o] && this._symbol_data[o].values && r(this._symbol_data[o], this._symbol_data[o])
                    }), this), l.length && this._connected && (this._quoteApi.quoteAddSymbols(l), this._delayUpdateFastSymbols())
                }, p.prototype.unsubscribe = function(o, e, r) {
                    e = [].concat(e);
                    for (var t = this._subscriptions[o], l = [], c = 0; c < e.length; c++) {
                        var a = e[c];
                        if (t)
                            if (t.has(a) && r) {
                                var s = t.get(a).indexOf(r);
                                ~s && t.get(a).splice(s, 1), t.get(a).length || t.delete(a)
                            } else t.delete(a);
                        t && 0 === t.size && delete this._subscriptions[o], this._symbol_data.hasOwnProperty(a) && (t && !t.has(a) && this._symbol_data[a].subscribers_count--, this._symbol_data[a].subscribers_count || (delete this._symbol_data[a], l.push(a)))
                    }
                    l.length && this._connected && (this._quoteApi.quoteRemoveSymbols(l), this._delayUpdateFastSymbols())
                }, p.prototype.setFastSymbols = function(o, e) {
                    if (this._subscriptions[o])
                        for (var r = this._subscriptions[o], t = Array.from(r.keys()), l = 0; l < t.length; ++l) {
                            var c = t[l];
                            r.get(c).fast = -1 !== e.indexOf(c)
                        }
                    this._delayUpdateFastSymbols()
                }, p.prototype._updateFastSymbols = function() {
                    if (this._connected) {
                        var o = this._fastSymbols();
                        0 === o.length ? this._quoteApi.quoteHibernateAll() : this._quoteApi.quoteFastSymbols(o)
                    }
                }, p.prototype._delayUpdateFastSymbols = p.prototype._updateFastSymbols, p.prototype._fastSymbols = function() {
                    var o = [];
                    for (var e in this._subscriptions)
                        for (var r = this._subscriptions[e], t = Array.from(r.keys()), l = 0; l < t.length; ++l) {
                            var c = t[l];
                            r.get(c).fast && o.push(c)
                        }
                    return o = s(o)
                }, p.prototype.formatter = function(o, e) {
                    var r = this;
                    if (this._waitingForFormatters[o]) return this._waitingForFormatters[o];

                    function t(o) {
                        var r = e && !o.fractional ? 1 : o.minmov;
                        return new a(o.pricescale, r, o.fractional, o.minmove2)
                    }
                    var l = new Promise((function(e, l) {
                        if (r._formatterValuesCache[o]) e(t(r._formatterValuesCache[o]));
                        else {
                            var c = i.guid();
                            r.subscribe(c, [o], (function(a) {
                                "error" === a.status && (r._waitingForFormatters[o] = null, l("Quotes snapshot is not received")),
                                    function(o) {
                                        return o && null != o.pricescale && null != o.minmov
                                    }(a.values) && (r._waitingForFormatters[o] = null, r._formatterValuesCache[o] = a.values, e(t(a.values)), r.unsubscribe(c, o))
                            }))
                        }
                    }));
                    return this._waitingForFormatters[o] = l, l
                }, p.prototype.snapshot = function(o) {
                    var e = this;
                    if (this._waitingForSnapshot[o]) return this._waitingForSnapshot[o];
                    var r = new Promise((function(r, t) {
                        if (e._snapshotValuesCache[o]) r(e._snapshotValuesCache[o]);
                        else {
                            var l = i.guid();
                            e.subscribe(l, [o], (function(c) {
                                "error" === c.status && (e._waitingForSnapshot[o] = null, t("Quotes snapshot is not received"));
                                var a = c.values;
                                a && a.minmov && a.pricescale && a.description && (e._waitingForSnapshot[o] = null, e._snapshotValuesCache[o] = a, r(a), e.unsubscribe(l, o))
                            }))
                        }
                    }));
                    return this._waitingForSnapshot[o] = r, r
                }, TradingView.QuoteSessionMultiplexer = p, o && o.exports && (o.exports = p)
        },
        516986: (o, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                types: () => t
            });
            const t = {
                ECONOMIC: "economic",
                QUANDL: "quandl"
            }
        },
        120379: (o, e, r) => {
            "use strict";
            r.d(e, {
                getTranslatedSymbolDescription: () => c
            });
            var t = r(777754);

            function l(o) {
                const e = `#${o}-symbol-description`,
                    l = t.t(e, void 0, r(118562));
                return l === e ? null : l
            }

            function c(o) {
                if (void 0 !== o.pro_name) {
                    const e = l(o.pro_name);
                    if (null !== e) return e;
                    if (void 0 !== o.short_name) {
                        const e = l(o.short_name);
                        if (null !== e) return e
                    }
                }
                return "en" !== o.language && void 0 !== o.local_description && o.language === window.language || "en" === o.language && void 0 !== o.local_description && o.language === window.language ? o.local_description : o.description || ""
            }
        },
        588565: (o, e, r) => {
            "use strict";

            function t(o) {
                return o.reduce((function(o, e, r) {
                    return ~o.indexOf(e) || o.push(e), o
                }), [])
            }
            r.r(e), r.d(e, {
                uniq: () => t
            })
        },
        611314: o => {
            "use strict";
            o.exports = JSON.parse('{"color-white":"#ffffff","color-black":"#000000","color-cold-gray-50":"#F8F9FD","color-cold-gray-100":"#F0F3FA","color-cold-gray-150":"#E0E3EB","color-cold-gray-200":"#D1D4DC","color-cold-gray-250":"#C1C4CD","color-cold-gray-300":"#B2B5BE","color-cold-gray-350":"#A3A6AF","color-cold-gray-400":"#9598A1","color-cold-gray-450":"#868993","color-cold-gray-500":"#787B86","color-cold-gray-550":"#6A6D78","color-cold-gray-600":"#5D606B","color-cold-gray-650":"#50535E","color-cold-gray-700":"#434651","color-cold-gray-750":"#363A45","color-cold-gray-800":"#2A2E39","color-cold-gray-850":"#1E222D","color-cold-gray-900":"#131722","color-cold-gray-950":"#0C0E15","color-ripe-red-50":"#FFEBEC","color-ripe-red-100":"#FCCBCD","color-ripe-red-200":"#FAA1A4","color-ripe-red-300":"#F77C80","color-ripe-red-400":"#F7525F","color-ripe-red-500":"#F23645","color-ripe-red-600":"#CC2F3C","color-ripe-red-700":"#B22833","color-ripe-red-800":"#991F29","color-ripe-red-900":"#801922","color-ripe-red-a100":"#FF8080","color-ripe-red-a200":"#FF5252","color-ripe-red-a400":"#FF3333","color-ripe-red-a600":"#CC2929","color-ripe-red-a700":"#802028","color-ripe-red-a800":"#4D191D","color-ripe-red-a900":"#331F20","color-tan-orange-50":"#FFF3E0","color-tan-orange-100":"#FFE0B2","color-tan-orange-200":"#FFCC80","color-tan-orange-300":"#ffb74d","color-tan-orange-400":"#FFA726","color-tan-orange-500":"#FF9800","color-tan-orange-600":"#FB8C00","color-tan-orange-700":"#F57C00","color-tan-orange-800":"#EF6C00","color-tan-orange-900":"#e65100","color-tan-orange-a200":"#ffab40","color-tan-orange-a400":"#FF9100","color-tan-orange-a600":"#CC7014","color-tan-orange-a700":"#8C541C","color-tan-orange-a800":"#593A1B","color-tan-orange-a900":"#33261A","color-iguana-green-100":"#C8E6C9","color-iguana-green-200":"#A5D6A7","color-iguana-green-300":"#81c784","color-iguana-green-400":"#66BB6A","color-iguana-green-500":"#4caf50","color-iguana-green-600":"#43a047","color-iguana-green-700":"#388e3c","color-iguana-green-800":"#2E7D32","color-iguana-green-900":"#1B5E20","color-iguana-green-a700":"#00c853","color-banana-yellow-100":"#FFF9C4","color-banana-yellow-200":"#FFF59D","color-banana-yellow-300":"#FFF176","color-banana-yellow-400":"#ffee58","color-banana-yellow-500":"#ffeb3b","color-banana-yellow-600":"#fdd835","color-banana-yellow-700":"#fbc02d","color-banana-yellow-800":"#f9a825","color-banana-yellow-900":"#F57F17","color-banana-yellow-a400":"#ffea00","color-banana-yellow-a700":"#ffd600","color-tv-blue-50":"#E3EFFD","color-tv-blue-100":"#BBD9FB","color-tv-blue-200":"#90BFF9","color-tv-blue-300":"#5B9CF6","color-tv-blue-400":"#3179F5","color-tv-blue-500":"#2962FF","color-tv-blue-600":"#1E53E5","color-tv-blue-700":"#1848CC","color-tv-blue-800":"#143EB3","color-tv-blue-900":"#0C3299","color-tv-blue-a100":"#82b1ff","color-tv-blue-a200":"#448aff","color-tv-blue-a400":"#2979ff","color-tv-blue-a600":"#2962FF","color-tv-blue-a700":"#143A87","color-tv-blue-a800":"#142E61","color-tv-blue-a900":"#132042","color-deep-blue-50":"#EDE7F6","color-deep-blue-100":"#D1C4E9","color-deep-blue-200":"#B39DDB","color-deep-blue-300":"#9575cd","color-deep-blue-400":"#7e57c2","color-deep-blue-500":"#673ab7","color-deep-blue-700":"#512da8","color-deep-blue-800":"#4527A0","color-deep-blue-900":"#311B92","color-deep-blue-a100":"#b388ff","color-deep-blue-a200":"#7C4DFF","color-deep-blue-a400":"#651FFF","color-deep-blue-a700":"#6200EA","color-minty-green-50":"#DAF2EE","color-minty-green-100":"#ACE5DC","color-minty-green-200":"#70CCBD","color-minty-green-300":"#42BDA8","color-minty-green-400":"#22AB94","color-minty-green-500":"#089981","color-minty-green-600":"#06806B","color-minty-green-700":"#056656","color-minty-green-800":"#004D40","color-minty-green-900":"#00332A","color-minty-green-a400":"#2BD9BC","color-minty-green-a700":"#24B29B","color-minty-green-a900":"#082621","color-grapes-purple-50":"#F3E5F5","color-grapes-purple-100":"#E1BEE7","color-grapes-purple-200":"#CE93D8","color-grapes-purple-300":"#ba68c8","color-grapes-purple-400":"#ab47bc","color-grapes-purple-500":"#9c27b0","color-grapes-purple-600":"#8e24aa","color-grapes-purple-700":"#7b1fa2","color-grapes-purple-800":"#6A1B9A","color-grapes-purple-900":"#4A148C","color-grapes-purple-a200":"#E040FB","color-grapes-purple-a400":"#D500F9","color-grapes-purple-a700":"#aa00ff","color-berry-pink-100":"#F8BBD0","color-berry-pink-200":"#f48fb1","color-berry-pink-300":"#f06292","color-berry-pink-400":"#ec407a","color-berry-pink-500":"#e91e63","color-berry-pink-600":"#D81B60","color-berry-pink-700":"#C2185B","color-berry-pink-800":"#AD1457","color-berry-pink-900":"#880E4F","color-berry-pink-a100":"#ff80ab","color-berry-pink-a200":"#ff4081","color-berry-pink-a400":"#f50057","color-sky-blue-100":"#B2EBF2","color-sky-blue-200":"#80DEEA","color-sky-blue-300":"#4dd0e1","color-sky-blue-400":"#26c6da","color-sky-blue-500":"#00bcd4","color-sky-blue-600":"#00acc1","color-sky-blue-700":"#0097A7","color-sky-blue-800":"#00838F","color-sky-blue-900":"#006064","color-sky-blue-a400":"#00e5ff","color-sky-blue-a700":"#00B8D4","color-deep-blue-600":"#5E35B1","color-forest-green-50":"#DAF2E6","color-forest-green-100":"#ACE5C9","color-forest-green-200":"#70CC9E","color-forest-green-300":"#42BD7F","color-forest-green-400":"#22AB67","color-forest-green-500":"#089950","color-forest-green-600":"#068043","color-forest-green-700":"#056636","color-forest-green-800":"#004D27","color-forest-green-900":"#1A3326","color-facebook":"#1877F2","color-deep-facebook":"#1564CA","color-twitter":"#1DA1F2","color-deep-twitter":"#188CD3","color-youtube":"#FF0000","color-linkedin":"#007BB5","color-aqua-spring":"#ebf9f5","color-army-green":"#3d2c12","color-army-green-2":"#31230d","color-athens-gray-1":"#f2f3f5","color-athens-gray-2":"#f7f8fa","color-athens-gray-3":"#eceff2","color-black-180":"#b4b4b4","color-blue-dianne":"#21384d","color-bluish":"#2185cc","color-bright-gray":"#363c4e","color-brownish-grey":"#8d6e63","color-carnation":"#f04561","color-catskill-white":"#e1ecf2","color-charade":"#2f3241","color-charcoal-grey":"#323337","color-curious-blue":"#299dcd","color-dark-blue-grey":"#123440","color-darkness-blue-grey":"#12213b","color-dark-grey":"#292a2d","color-dark-grey-blue":"#28415a","color-dark-sky-blue":"#37a6ef","color-deep-sea-blue":"#016087","color-ebony-clay":"#262b3e","color-foam":"#d7f0fb","color-gull-gray":"#9db2bd","color-humming-bird":"#d3eef9","color-keppel-1":"#37bc9b","color-keppel-2":"#34b293","color-lavender-blush":"#ffedf0","color-lightish-purple":"#a75ee8","color-loblolly":"#c5cbce","color-manatee":"#878ca8","color-mandy":"#eb4d5c","color-medium-blue":"#2e7bb2","color-milk-chocolate":"#6f2626","color-mirage-1":"#131722","color-mirage-2":"#171b29","color-mirage-3":"#1c2030","color-mischka":"#d6d8e0","color-morning-glory":"#9addcc","color-oslo-gray":"#8b8e95","color-pale":"#fff2cf","color-pale-grey-1":"#f9fafb","color-pale-grey-2":"#e7ebee","color-pale-sky":"#6b7988","color-picton-blue-1":"#3bb3e4","color-puerto-rico":"#3bc2a1","color-purple-brown":"#4e2934","color-purple-brown-2":"#3d2028","color-radical-red":"#ff4a68","color-regent-gray":"#8797a5","color-scooter":"#38acdb","color-silver-tree":"#53b987","color-slate-gray":"#758696","color-sundown":"#ffa4b3","color-sunglow":"#ffca3b","color-tan-hide":"#ff9850","color-trout-1":"#4c525e","color-trout-2":"#4f5966","color-violet-1":"#332738","color-violet-2":"#271d2b","color-white-ice":"#ebf7fc","color-wild-watermelon":"#ff5773","color-readonly-input":"#b4b4b4","color-brand-dark":"#2a2c39","color-seeking-alpha-brand":"#ff7200"}')
        }
    }
]);
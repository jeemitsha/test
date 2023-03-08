(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [51965], {
        464918: t => {
            t.exports = {}
        },
        745269: (t, e, i) => {
            "use strict";
            i.d(e, {
                dur: () => s,
                easingFunc: () => n,
                CubicBezier: () => o,
                color: () => r
            });
            const s = 350,
                n = {
                    linear: t => t,
                    easeInQuad: t => t * t,
                    easeOutQuad: t => t * (2 - t),
                    easeInOutQuad: t => t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1,
                    easeInCubic: t => t * t * t,
                    easeOutCubic: t => --t * t * t + 1,
                    easeInOutCubic: t => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
                    easeInQuart: t => t * t * t * t,
                    easeOutQuart: t => 1 - --t * t * t * t,
                    easeInOutQuart: t => t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
                    easeInQuint: t => t * t * t * t * t,
                    easeOutQuint: t => 1 + --t * t * t * t * t,
                    easeInOutQuint: t => t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
                };
            class o {
                constructor(t, e, i, s) {
                    this._mX1 = t, this._mY1 = e, this._mX2 = i, this._mY2 = s
                }
                easingFunc(t) {
                    return this._mX1 === this._mY1 && this._mX2 === this._mY2 ? t : this._calcBezier(this._getTForX(t))
                }
                _a(t, e) {
                    return 1 - 3 * e + 3 * t
                }
                _b(t, e) {
                    return 3 * e - 6 * t
                }
                _c(t) {
                    return 3 * t
                }
                _calcBezier(t) {
                    return ((this._a(this._mY1, this._mY2) * t + this._b(this._mY1, this._mY2)) * t + this._c(this._mY1)) * t
                }
                _getSlope(t) {
                    return 3 * this._a(this._mX1, this._mX2) * t * t + 2 * this._b(this._mX1, this._mX2) * t + this._c(this._mX1)
                }
                _getTForX(t) {
                    let e = t;
                    for (let i = 0; i < 4; ++i) {
                        const i = this._getSlope(e);
                        if (0 === i) return e;
                        e -= (this._calcBezier(e) - t) / i
                    }
                    return e
                }
            }
            const r = {
                black70: "#4A4A4A",
                black80: "#535353"
            }
        },
        84119: (t, e, i) => {
            "use strict";
            i.d(e, {
                followSymbol: () => n
            });
            var s = i(374008);

            function n(t) {
                return (0, s.handleJSONRequest)({
                    path: "/social/follow-the-symbol/",
                    requestData: {
                        body: t,
                        method: "POST"
                    }
                })
            }
        },
        600303: (t, e, i) => {
            "use strict";
            i.d(e, {
                MarketStatusIndicator: () => r
            });
            var s = i(777754),
                n = (i(464918), i(780792));
            const o = {
                classMap: {
                    invalid: "tv-market-status--invalid",
                    market: "tv-market-status--market",
                    out_of_session: "tv-market-status--out-of-session",
                    post_market: "tv-market-status--post-market",
                    pre_market: "tv-market-status--pre-market",
                    loading: "tv-market-status--loading",
                    holiday: "tv-market-status--holiday",
                    replay: "tv-market-status--replay"
                },
                classSuffix: "",
                data: {},
                extraTitle: "",
                labelMap: {
                    invalid: s.t(null, void 0, i(814177)),
                    market: s.t(null, void 0, i(486533)),
                    out_of_session: s.t(null, void 0, i(548979)),
                    post_market: s.t(null, void 0, i(566812)),
                    pre_market: s.t(null, void 0, i(845198)),
                    loading: s.t(null, void 0, i(25911)),
                    holiday: s.t(null, void 0, i(988958)),
                    replay: ""
                },
                short: !1,
                showTooltip: !0,
                tooltipType: "custom"
            };
            class r extends n.AbstractIndicator {
                constructor(t) {
                    super(t), this._quoteSessionPrefix = "market-status-indicator", this._componentClass = "tv-market-status", this._extraTitle = "", this._init(t)
                }
                setStatus(t, e) {
                    const i = {
                        values: {
                            current_session: t
                        }
                    };
                    this.update(i, e)
                }
                getTooltipText() {
                    let t = super.getTooltipText();
                    return "" === t || "" !== this._extraTitle && (t = `${t}, ${this._extraTitle}`), t
                }
                setExtraTitle(t) {
                    this._extraTitle = t
                }
                reset() {
                    this._clearClasses(), this._labelEl.textContent = "", this._extraTitle = "", this._el.setAttribute("title", ""), this._value = ""
                }
                enableShortMode(t = !0) {
                    void 0 !== this._labelEl && this._labelEl.classList.add("i-hidden"), super.enableShortMode()
                }
                disableShortMode() {
                    void 0 !== this._labelEl && this._labelEl.classList.remove("i-hidden"), super.disableShortMode()
                }
                _renderLabel() {
                    this._labelEl.textContent = this.getLabel()
                }
                _getValueFromData(t) {
                    return void 0 !== t.values && void 0 !== t.values.current_session ? t.values.current_session : this.getValue()
                }
                _render() {
                    this._renderLabelElement(), this._renderDotElement(), super._render()
                }
                _init(t) {
                    const e = Object.assign({}, o, t);
                    super._init(e), this.setExtraTitle(e.extraTitle), this._render()
                }
                _renderLabelElement() {
                    void 0 === this._labelEl && (this._labelEl = document.createElement("span"), this._labelEl.classList.add(`${this._componentClass}__label`), this._labelEl.classList.add(`${this._componentClass}__label${this._classSuffix}`), this._el.appendChild(this._labelEl))
                }
                _renderDotElement() {
                    void 0 === this._dotEl && (this._dotEl = document.createElement("span"), this._dotEl.classList.add(`${this._componentClass}__dot`), this._dotEl.classList.add(`${this._componentClass}__dot${this._classSuffix}`), this._el.appendChild(this._dotEl))
                }
            }
        },
        632446: (t, e, i) => {
            "use strict";
            i.d(e, {
                canUpgradePlan: () => d,
                enabled: () => _,
                getConfig: () => h,
                getProductFeaturesConfig: () => u,
                getProductId: () => c
            });
            var s = i(650151);
            const n = JSON.parse('{"free":{"CHART_STORAGE":{"limit":1},"MULTIPLE_CHARTS":{"limit":1},"INDICATORS_ON_CHART":{"limit":3},"HISTORICAL_BARS":{"limit":5},"STUDY_ON_STUDY":{"limit":270,"child_limit":1},"SERVER_SIDE_ALERTS":{"limit":1,"complex_limit":1,"primitive_limit":1},"SCREENER_ALERTS":{"limit":1},"SCREENER_INTERVALS":{"interval":["1D","1W","1M"]},"STUDY_TEMPLATES":{"limit":1},"SIMULTANEOUS_CONNECTIONS":{"limit":1},"BACKEND_CONNECTIONS":{"limit":2},"IDEA_SOCIAL_LINKS":{"socials":["Twitter","Youtube"]},"MULTICOLOR_FLAGGED_SYMBOLS":{"limit":1}},"__legacy_pro":{"CHART_STORAGE":{"limit":99999},"MULTIPLE_CHARTS":{"limit":8},"CUSTOM_INTERVALS":{},"MULTIPLE_WATCHLISTS":{},"IMPORT_WATCHLISTS":{},"EXPORT_WATCHLISTS":{},"INDICATORS_ON_CHART":{"limit":99999},"TV_PROSTUDIES":{"study_packages":["tv-chartpatterns"]},"CHART_PATTERNS":{"study_packages":["tv-chartpatterns"]},"HISTORICAL_BARS":{"limit":10},"TV_VOLUMEBYPRICE":{"study_packages":["tv-volumebyprice"]},"STUDY_ON_STUDY":{"limit":270,"child_limit":99999},"TICK_BY_TICK_PUSH_DATA":{},"SERVER_SIDE_ALERTS":{"limit":20},"SCREENER_ALERTS":{"limit":99999},"SCREENER_AUTO_REFRESH":{},"SCREENER_EXPORT_DATA":{},"SCREENER_INTERVALS":{"interval":["1m","5m","15m","30m","1h","2h","4h","1D","1W","1M"]},"NO_SPONSORED_ADS":{},"STUDY_TEMPLATES":{"limit":99999},"SIMULTANEOUS_CONNECTIONS":{"limit":1},"BACKEND_CONNECTIONS":{"limit":10},"IDC_AVAILABLE_DELAY":{},"STATUS":{"disable_on_trial":true},"MULTIFLAGGED_SYMBOLS_LISTS":{},"BAR_REPLAY_INTRADAY":{},"SHOWS":{"disable_on_trial":true},"ALERTS_WEBHOOK":{},"DEEP_FUNDAMENTALS_HISTORY":{},"IDEA_SOCIAL_LINKS":{"socials":["Twitter","Youtube"]},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram"],"disable_on_trial":true},"MULTI_MONITOR":{},"PUBLISH_PROTECTED_SCRIPTS":{"disable_on_trial":true},"STREAMS_ACCESS":{"followers":10}},"__legacy_pro_realtime":{"extends":"__legacy_pro","BACKEND_CONNECTIONS":{"limit":20},"TV_PROSTUDIES":{"study_packages":["tv-prostudies","tv-chartpatterns"]},"SERVER_SIDE_ALERTS":{"limit":1000},"CAN_EDIT_PUBLIC_CHATS":{"disable_on_trial":true},"EXPORT_CHART_DATA":{},"CUSTOM_FORMULAS":{},"INTRADAY_EXOTIC_CHARTS":{},"BACKTESTING_EXPORT":{}},"__legacy_pro_premium":{"extends":"__legacy_pro_realtime","BACKEND_CONNECTIONS":{"limit":50},"CHART_PATTERNS":{"study_packages":["tv-chartpatterns","tv-chartpatterns2"]},"USE_BAR_MAGNIFIER":{},"HISTORICAL_BARS":{"limit":20},"IDEA_SIGNATURE":{"disable_on_trial":true},"PROFILE_WEBSITE_FIELD":{"disable_on_trial":true},"ALERTS_NO_EXPIRATION":{},"PUBLISH_INVITE_ONLY_SCRIPTS":{"disable_on_trial":true},"EXPORT_CHART_DATA":{},"DEEP_HISTORY_BACKTEST":{},"ALERTS_ON_SECONDS":{},"PERMANENT_STREAM_RECORDS":{},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram","Website"],"disable_on_trial":true},"SECONDS_INTERVALS":{}},"pro":{"CHART_STORAGE":{"limit":5},"MULTIPLE_CHARTS":{"limit":2},"CUSTOM_INTERVALS":{},"MULTIPLE_WATCHLISTS":{},"IMPORT_WATCHLISTS":{},"EXPORT_WATCHLISTS":{},"INDICATORS_ON_CHART":{"limit":5},"TV_PROSTUDIES":{"study_packages":["tv-chartpatterns"]},"CHART_PATTERNS":{"study_packages":["tv-chartpatterns"]},"HISTORICAL_BARS":{"limit":10},"TV_VOLUMEBYPRICE":{"study_packages":["tv-volumebyprice"]},"STUDY_ON_STUDY":{"limit":270,"child_limit":1},"TICK_BY_TICK_PUSH_DATA":{},"SERVER_SIDE_ALERTS":{"limit":20,"complex_limit":20,"primitive_limit":20},"SCREENER_ALERTS":{"limit":99999},"SCREENER_AUTO_REFRESH":{},"SCREENER_EXPORT_DATA":{},"SCREENER_INTERVALS":{"interval":["1m","5m","15m","30m","1h","2h","4h","1D","1W","1M"]},"NO_SPONSORED_ADS":{},"STUDY_TEMPLATES":{"limit":99999},"SIMULTANEOUS_CONNECTIONS":{"limit":1},"BACKEND_CONNECTIONS":{"limit":10},"IDC_AVAILABLE_DELAY":{},"STATUS":{"disable_on_trial":true},"BAR_REPLAY_INTRADAY":{"limit":1},"MULTIFLAGGED_SYMBOLS_LISTS":{},"SHOWS":{"disable_on_trial":true},"ALERTS_WEBHOOK":{},"DEEP_FUNDAMENTALS_HISTORY":{},"PUBLISH_PROTECTED_SCRIPTS":{"disable_on_trial":true},"IDEA_SOCIAL_LINKS":{"socials":["Twitter","Youtube"]},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram"],"disable_on_trial":true},"MULTI_MONITOR":{},"MULTICOLOR_FLAGGED_SYMBOLS":{"limit":7},"INTRADAY_EXCHANGE":{},"VOLUME_PROFILE":{},"STREAMS_ACCESS":{"followers":10}},"pro_realtime":{"extends":"pro","CHART_STORAGE":{"limit":10},"MULTIPLE_CHARTS":{"limit":4},"INDICATORS_ON_CHART":{"limit":10},"TV_PROSTUDIES":{"study_packages":["tv-prostudies","tv-chartpatterns"]},"STUDY_ON_STUDY":{"limit":270,"child_limit":9},"SERVER_SIDE_ALERTS":{"limit":100,"complex_limit":100,"primitive_limit":100},"CAN_EDIT_PUBLIC_CHATS":{"disable_on_trial":true},"SIMULTANEOUS_CONNECTIONS":{"limit":2},"BACKEND_CONNECTIONS":{"limit":20},"EXPORT_CHART_DATA":{},"CUSTOM_FORMULAS":{},"INTRADAY_EXOTIC_CHARTS":{},"KAGI_RENKO":{},"INTRADAY_SPREAD":{},"CUSTOM_CHATS":{},"BACKTESTING_EXPORT":{}},"pro_premium":{"extends":"pro_realtime","USE_BAR_MAGNIFIER":{},"CHART_STORAGE":{"limit":99999},"MULTIPLE_CHARTS":{"limit":8},"INDICATORS_ON_CHART":{"limit":25},"CHART_PATTERNS":{"study_packages":["tv-chartpatterns","tv-chartpatterns2"]},"HISTORICAL_BARS":{"limit":20},"STUDY_ON_STUDY":{"limit":270,"child_limit":24},"SERVER_SIDE_ALERTS":{"limit":400,"complex_limit":400,"primitive_limit":400},"SIMULTANEOUS_CONNECTIONS":{"limit":5},"BACKEND_CONNECTIONS":{"limit":50},"IDEA_SIGNATURE":{"disable_on_trial":true},"PROFILE_WEBSITE_FIELD":{"disable_on_trial":true},"BAR_REPLAY_INTRADAY":{"limit":4},"ALERTS_NO_EXPIRATION":{},"PUBLISH_INVITE_ONLY_SCRIPTS":{"disable_on_trial":true},"EXPORT_CHART_DATA":{},"DEEP_HISTORY_BACKTEST":{},"ALERTS_ON_SECONDS":{},"PERMANENT_STREAM_RECORDS":{},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram","Website"],"disable_on_trial":true},"SECONDS_INTERVALS":{}}}'),
                o = JSON.parse('{"cme":{"INDICATORS_ON_CHART":{"limit":99999}},"bovespa":{"INDICATORS_ON_CHART":{"limit":99999}},"qecomqa":{"INDICATORS_ON_CHART":{"limit":99999}}}');
            var r = i(833813),
                a = i(960254),
                l = i(919490);

            function c(t) {
                let e = window.user;
                t && (e = t);
                let i = (null == e ? void 0 : e.pro_plan) || a.ProPlans.Free;
                const s = i !== a.ProPlans.Free && !(0, l.isTrialProduct)(i);
                return s || (i = (0, l.getProductForTrial)(i)), s && e && !e.new_pro_product_line && (i = `__legacy_${i}`), i
            }

            function _(t, e, i) {
                let s = window.user;
                i && (s = i);
                const n = h(t, e, s);
                return !!n && !(n[r.ProductFeatures.DISABLE_ON_TRIAL] && (!s || s.is_trial))
            }

            function u(t) {
                const e = n[t];
                return e ? e.extends ? Object.assign({}, u(e.extends), e) : e : null
            }

            function h(t, e, i) {
                var s;
                let n = u(e || c(i));
                if (!n) return null;
                const r = null === (s = window.TradingView) || void 0 === s ? void 0 : s.widgetCustomer;
                return r && o[r] && (n = Object.assign({}, n, o[r])), n && n[t] || null
            }

            function d() {
                var t, e, i, n;
                const o = null !== (e = null === (t = h(r.ProductFeatures.BACKEND_CONNECTIONS)) || void 0 === t ? void 0 : t.limit) && void 0 !== e ? e : 0,
                    a = (0, s.ensureDefined)(window.pro),
                    l = a.getProductsByType(a.PRODUCT_TYPES.pro_plan);
                for (const t of l)
                    if ((null !== (n = null === (i = h(r.ProductFeatures.BACKEND_CONNECTIONS, (0, s.ensureDefined)(t.id))) || void 0 === i ? void 0 : i.limit) && void 0 !== n ? n : 0) > o) return !0;
                return !1
            }
        },
        833813: (t, e, i) => {
            "use strict";
            var s;
            i.d(e, {
                    ProductFeatures: () => s,
                    UNLIMITED_FEATURE_LIMIT: () => n
                }),
                function(t) {
                    t.DISABLE_ON_TRIAL = "disable_on_trial", t.CUSTOM_INTERVALS = "CUSTOM_INTERVALS", t.CHART_STORAGE = "CHART_STORAGE", t.MULTIPLE_CHARTS = "MULTIPLE_CHARTS", t.MULTIPLE_WATCHLISTS = "MULTIPLE_WATCHLISTS", t.IMPORT_WATCHLISTS = "IMPORT_WATCHLISTS", t.EXPORT_WATCHLISTS = "EXPORT_WATCHLISTS", t.INDICATORS_ON_CHART = "INDICATORS_ON_CHART", t.STUDY_ON_STUDY = "STUDY_ON_STUDY", t.TICK_BY_TICK_PUSH_DATA = "TICK_BY_TICK_PUSH_DATA", t.SERVER_SIDE_ALERTS = "SERVER_SIDE_ALERTS", t.PUBLISH_INVITE_ONLY_SCRIPTS = "PUBLISH_INVITE_ONLY_SCRIPTS", t.PUBLISH_PROTECTED_SCRIPTS = "PUBLISH_PROTECTED_SCRIPTS", t.SCREENER_ALERTS = "SCREENER_ALERTS", t.SCREENER_AUTO_REFRESH = "SCREENER_AUTO_REFRESH", t.SCREENER_EXPORT_DATA = "SCREENER_EXPORT_DATA", t.SCREENER_INTERVALS = "SCREENER_INTERVALS", t.SIMULTANEOUS_CONNECTIONS = "SIMULTANEOUS_CONNECTIONS", t.BACKEND_CONNECTIONS = "BACKEND_CONNECTIONS", t.STUDY_TEMPLATES = "STUDY_TEMPLATES", t.CAN_EDIT_PUBLIC_CHATS = "CAN_EDIT_PUBLIC_CHATS", t.NO_SPONSORED_ADS = "NO_SPONSORED_ADS", t.IDC_AVAILABLE_DELAY = "IDC_AVAILABLE_DELAY", t.STATUS = "STATUS", t.ALERTS_NO_EXPIRATION = "ALERTS_NO_EXPIRATION", t.MULTIFLAGGED_SYMBOLS_LISTS = "MULTIFLAGGED_SYMBOLS_LISTS", t.BAR_REPLAY_INTRADAY = "BAR_REPLAY_INTRADAY", t.TV_VOLUMEBYPRICE = "TV_VOLUMEBYPRICE", t.ALERTS_WEBHOOK = "ALERTS_WEBHOOK", t.DEEP_FUNDAMENTALS_HISTORY = "DEEP_FUNDAMENTALS_HISTORY", t.EXPORT_CHART_DATA = "EXPORT_CHART_DATA", t.ALERTS_ON_SECONDS = "ALERTS_ON_SECONDS", t.PERMANENT_STREAM_RECORDS = "PERMANENT_STREAM_RECORDS", t.IDEA_SOCIAL_LINKS = "IDEA_SOCIAL_LINKS", t.EXTENDED_SOCIAL_LINKS = "EXTENDED_SOCIAL_LINKS", t.DEEP_HISTORY_BACKTEST = "DEEP_HISTORY_BACKTEST", t.BACKTESTING_EXPORT = "BACKTESTING_EXPORT", t.USE_BAR_MAGNIFIER = "USE_BAR_MAGNIFIER", t.HISTORICAL_BARS = "HISTORICAL_BARS", t.KAGI_RENKO = "KAGI_RENKO", t.INTRADAY_SPREAD = "INTRADAY_SPREAD", t.SECONDS_INTERVALS = "SECONDS_INTERVALS", t.MULTICOLOR_FLAGGED_SYMBOLS = "MULTICOLOR_FLAGGED_SYMBOLS", t.INTRADAY_EXCHANGE = "INTRADAY_EXCHANGE",
                        t.CUSTOM_CHATS = "CUSTOM_CHATS", t.VOLUME_PROFILE = "VOLUME_PROFILE", t.PRIMITIVE_ALERTS = "PRIMITIVE_ALERTS", t.COMPLEX_ALERTS = "COMPLEX_ALERTS", t.TV_PROSTUDIES = "TV_PROSTUDIES", t.CHART_PATTERNS = "CHART_PATTERNS"
                }(s || (s = {}));
            const n = 99999
        },
        128327: (t, e, i) => {
            "use strict";

            function s(t) {
                if (t instanceof Error) return t.stack || t.message;
                try {
                    return t.outerHTML.slice(0, 1024)
                } catch (t) {}
                try {
                    if (void 0 !== t) return JSON.stringify(t).slice(0, 1024)
                } catch (t) {}
                return String(t)
            }

            function n() {
                window.__tv_js_errors || (window.__tv_js_errors = []), window.addEventListener("error", (t => {
                    const e = (new Date).toISOString();
                    window.__tv_js_errors.push(`${e} ${t.message||"JS error"}. ${t.filename||"<unknown url>"}, line ${t.lineno}, col ${t.colno}.\nError: ${s(t.error)}`)
                }), !1), window.addEventListener("unhandledrejection", (t => {
                    const e = (new Date).toISOString();
                    window.__tv_js_errors.push(`${e} Unhandled rejection.\nReason: ${s(t.reason)}`)
                }), !1), document.addEventListener("securitypolicyviolation", (t => {
                    if (String(t.sourceFile).startsWith("https://securepubads.g.doubleclick.net") && String(t.blockedURI).startsWith("https://adservice.google.")) return;
                    const e = (new Date).toISOString(),
                        i = "report" === t.disposition ? "CSP report-only" : "CSP violation";
                    window.__tv_js_errors.push(`${e} ${i}: ${t.violatedDirective||t.effectiveDirective}. ${t.sourceFile||"<unknown url>"}, line ${t.lineNumber}, col ${t.columnNumber}.\nBlocked URI: ${t.blockedURI}\nSample: ${t.sample}\nTarget: ${s(t.target)}`)
                }), !1)
            }
            i.d(e, {
                install: () => n
            })
        },
        849204: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                LogoSize: () => s,
                LogoUrlResolver: () => r,
                getLogoUrlResolver: () => l
            });
            var s, n = i(650151),
                o = i(588948);
            ! function(t) {
                t[t.Medium = 0] = "Medium", t[t.Large = 1] = "Large"
            }(s || (s = {}));
            class r {
                constructor(t) {
                    (0, n.assert)("" !== t, "S3 base url must be a non-empty string"), this._baseUrl = t
                }
                getSymbolLogoUrl(t, e) {
                    switch ((0, n.assert)("" !== t, "logo id must be a non-empty string"), e) {
                        case s.Medium:
                            return this._baseUrl + `${t}.svg`;
                        case s.Large:
                            return this._baseUrl + `${t}--big.svg`
                    }
                }
                getCountryFlagUrl(t, e) {
                    return this.getSymbolLogoUrl("country/" + t, e)
                }
                getCryptoLogoUrl(t, e) {
                    return this.getSymbolLogoUrl("crypto/" + t, e)
                }
                getProviderLogoUrl(t, e) {
                    return this.getSymbolLogoUrl("provider/" + t, e)
                }
            }
            let a;

            function l() {
                if (!a) {
                    const t = (0, o.getInitData)(),
                        e = t.settings ? t.settings.S3_LOGO_SERVICE_BASE_URL : "";
                    a = new r(e)
                }
                return a
            }
        },
        934440: (t, e, i) => {
            "use strict";
            const s = i(495046);
            window.TradingView = window.TradingView || {};
            var n, o, r, a, l, c, _, u = TradingView.postMessageWrapper = (o = Object.create(null), r = Object.create(null), a = Object.create(null), l = 0, c = 0, _ = "TradingView", window.addEventListener && window.addEventListener("message", (function(t) {
                var e;
                try {
                    e = JSON.parse(t.data), s.enabled("charting_library_debug_mode") && console.log("PostMessage: incoming message: " + JSON.stringify(e))
                } catch (t) {
                    return
                }
                if (e && e.provider && e.provider === _)
                    if ("get" === e.type) {
                        if (!r[e.name]) return;
                        r[e.name].forEach((function(t) {
                            "function" == typeof t && t.call(e, e.data, (function(t) {
                                var i = {
                                    id: e.id,
                                    type: "on",
                                    name: e.name,
                                    client_id: e.client_id,
                                    data: t,
                                    provider: _
                                };
                                n.postMessage(JSON.stringify(i), "*")
                            }))
                        }))
                    } else if ("on" === e.type) o[e.client_id] && o[e.client_id][e.id] && (o[e.client_id][e.id].call(e, e.data), delete o[e.client_id][e.id]);
                else if ("post" === e.type) {
                    if (!r[e.name]) return;
                    r[e.name].forEach((function(t) {
                        "function" == typeof t && t.call(e, e.data, (function() {}))
                    }))
                }
            })), function(t, e) {
                o[e] = Object.create(null), a[e] = t, n = t;
                var i = "";
                return {
                    on: function(t, e, i) {
                        r[t] && i || (r[t] = []), r[t].push(e)
                    },
                    get: function(t, i, s) {
                        var n = {
                            id: l++,
                            type: "get",
                            name: t,
                            client_id: e,
                            data: i,
                            provider: _
                        };
                        o[e][n.id] = s, a[e].postMessage(JSON.stringify(n), "*")
                    },
                    post: function(t, e, s) {
                        var n = {
                            id: c++,
                            type: "post",
                            name: e,
                            client_id: i,
                            data: s,
                            provider: _
                        };
                        t && "function" == typeof t.postMessage && t.postMessage(JSON.stringify(n), "*")
                    },
                    setClientId: function(t) {
                        i = t
                    }
                }
            });
            t.exports = u
        },
        192784: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                flushDelegate: () => n
            });
            var s = i(869403);
            const n = new(i.n(s)())
        },
        62802: (t, e, i) => {
            "use strict";
            t = i.nmd(t), i(638456);
            var s = i(890740).fetch,
                n = i(627025).regExpEscape,
                o = i(226722).TVXWindowEvents,
                r = i(49437).TVLocalStorage,
                a = i(869403),
                l = i(495046),
                c = i(125226).isFeatureEnabled,
                {
                    flushDelegate: _
                } = i(192784),
                u = i(272001).getLogger("Lib.TVSettings"),
                h = ["s.tradingview.com", "betacdn.tradingview.com"],
                d = (l.enabled("use_localstorage_for_settings"), window.TVSettings = function() {
                    var t = !1,
                        e = null,
                        i = !1;

                    function m() {
                        return !(e || window.is_authenticated)
                    }
                    try {
                        t = !TradingView.onWidget() && parent && parent !== window && !!parent.IS_DEMO_PAGE
                    } catch (t) {}
                    if (t) {
                        var S = {
                                "widgetbar.layout-settings": {
                                    widgets: {},
                                    settings: {
                                        minimized: !0
                                    }
                                },
                                notShowMainWizard: !0
                            },
                            T = function(t, e, i) {
                                var s = S[t];
                                return null == s ? e : s
                            },
                            g = function() {};
                        return {
                            loaded: !1,
                            loadedModel: !1,
                            getValue: T,
                            getJSON: T,
                            getBool: T,
                            getFloat: T,
                            getInt: T,
                            setValue: g,
                            setJSON: g,
                            remove: g,
                            keys: function() {
                                return Object.keys(S)
                            },
                            keysMask: function() {
                                return []
                            },
                            sync: g,
                            onSync: {
                                subscribe: function() {}
                            }
                        }
                    }
                    var p = 12e4;
                    "local" === window.environment && (p = 5e3);
                    var E, f, N, C = TradingView.onWidget() ? "tradingview-widget" : "tradingview",
                        v = C + ".",
                        y = {},
                        A = [],
                        b = [/^widgetbar\.widget\.watchlist.+/, /.+quicks$/, /^widgetbar\.layout-settings$/, /^ChartSideToolbarWidget\.visible$/, /^onwidget\.watchlist$/, /^domepanel.visible$/, /^orderpanel.visible$/, /^chart\.favoriteDrawings$/, /^chart\.favoriteDrawingsPosition$/, /^loadChartDialog.favorites$/, /^ChartFavoriteDrawingToolbarWidget\.visible/, /^trading\.chart\.proterty$/, /^trading_floating_toolbar\.position$/, /^trading\.orderWidgetMode\./, /^symbolWatermark$/, /^pinereference\.size$/, /^pinereference\.position$/, /^hint\.+/, /^ChartDrawingToolbarWidget\.visible/];

                    function I(t) {
                        return v + t
                    }

                    function R(t) {
                        return t.substring(v.length)
                    }

                    function O(t, e) {
                        var i = y[t];
                        return null == i ? e : i
                    }

                    function P(t, e, i) {
                        i = i || {};
                        var s = "" + e;
                        return y[t] !== s && (y[t] = s, D(t)), i.forceFlush && !f && (f = setTimeout((function() {
                            f = void 0, x()
                        }), 10)), d
                    }

                    function L(t, e) {
                        return e = e || {}, null != y[t] && (delete y[t], D(t)), e.forceFlush && x(), d
                    }

                    function w() {
                        E = void 0, A.length && x()
                    }

                    function D(t) {
                        if (e) null == y[t] ? e.removeValue(t) : e.setValue(t, y[t]);
                        else if (m()) try {
                            null == y[t] ? r.removeItem(I(t)) : r.setItem(I(t), y[t])
                        } catch (t) {} else A.push(t), E || (E = setTimeout(w, p));
                        o.emit("settings", JSON.stringify({
                            key: t,
                            value: y[t]
                        }))
                    }

                    function x(t) {
                        if (!i && !N)
                            if (c("disable_save_settings")) u.logWarn("Settings flashing has been skipped because of disable_save_settings featuretoggle");
                            else if (!l.enabled("widget") && !m() && 0 !== A.length) {
                            var e = A;
                            A = [];
                            for (var n = {}, o = e.length; o--;) {
                                var r = e[o],
                                    a = y[r];
                                void 0 === a && (a = null), n[r] = a
                            }
                            var _ = new FormData;
                            _.append("delta", JSON.stringify(n)), t && navigator.sendBeacon ? navigator.sendBeacon("/savesettings/", _) : s("/savesettings/", {
                                method: "POST",
                                credentials: "include",
                                body: _
                            }).then((function(i) {
                                if (i.ok || (A = A.concat(e)), [429, 503].includes(i.status)) {
                                    var s = 1e3 * +i.headers.get("retry-after") || 3e5;
                                    N = setTimeout((() => {
                                        N = void 0, x(t)
                                    }), s)
                                }
                            })).catch((function() {
                                A = A.concat(e)
                            }))
                        }
                    }

                    function M() {
                        return Object.keys(y)
                    }

                    function F(t) {
                        for (var e = 0; e < b.length; ++e)
                            if (b[e].exec(t)) return !0;
                        return !1
                    }

                    function H(t) {
                        return t.substring(0, v.length) === v
                    }

                    function U(t) {
                        y = {};
                        const e = 0 === Object.keys(t).length;
                        e || function(t) {
                                Object.keys(t).forEach((function(e) {
                                    y[e] = t[e] + ""
                                }))
                            }(t),
                            function(t) {
                                for (var e = r.length; e--;) {
                                    var i = r.key(e);
                                    i && H(i) && (t && P(R(i), r.getItem(i)), r.removeItem(i))
                                }
                            }(e)
                    }
                    o.on("settings", (function(t) {
                        var e = JSON.parse(t);
                        null == e.value ? delete y[e.key] : y[e.key] = e.value
                    }));
                    var k = new a;
                    return document.addEventListener("visibilitychange", (function() {
                        "hidden" !== document.visibilityState && !0 !== document.hidden || x()
                    })), window.addEventListener("pagehide", (function() {
                        x(!0)
                    })), window.addEventListener("beforeunload", (function() {
                        x(!0)
                    })), _.subscribe(null, (() => {
                        x()
                    })), {
                        loaded: !1,
                        loadedModel: !1,
                        getValue: O,
                        getJSON: function(t, e) {
                            var i = O(t, void 0);
                            if (null == i) return e;
                            try {
                                return JSON.parse(i)
                            } catch (i) {
                                return L(t), e
                            }
                        },
                        getBool: function(t, e) {
                            var i = O(t);
                            return null == i ? e : !(!i || "false" === i || 0 == +i)
                        },
                        getFloat: function(t, e, i) {
                            var s = O(t, void 0);
                            if (null == s) return e;
                            var n = parseFloat(s);
                            if (!isFinite(n)) throw new TypeError('"' + s + '" is not float (key: "' + t + '")');
                            return n
                        },
                        getInt: function(t, e, i) {
                            var s = O(t, void 0);
                            if (null == s) return e;
                            var n = parseInt(s, 10);
                            if (!isFinite(n)) throw new TypeError('"' + s + '" is not int (key: "' + t + '")');
                            return n
                        },
                        setValue: P,
                        setJSON: function(t, e, i) {
                            return P(t, JSON.stringify(e), i), d
                        },
                        remove: L,
                        keys: M,
                        keysMask: function(t, e) {
                            for (var i = M(), s = [], o = (t = new RegExp("^" + n(t).replace(/\\\*\\\*/gi, ".+").replace(/\\\*/gi, "[^.]+") + "$", "gi"), i.length - 1); o >= 0; o--) t.test(i[o]) && s.push(i[o]), t.lastIndex = 0;
                            return s
                        },
                        sync: function(t) {
                            null !== t ? (e ? U(e.initialSettings || {}) : m() ? (function() {
                                if (TradingView.onWidget() && h.includes(window.location.host))
                                    for (var t = "tradingview.", e = r.length; e--;) {
                                        var i = r.key(e);
                                        if (0 === i.indexOf(t)) {
                                            var s = i.replace(t, C + ".");
                                            r.setItem(s, r.getItem(i)), r.removeItem(i)
                                        }
                                    }
                            }(), function() {
                                y = {};
                                for (var t = !l.enabled("save_chart_properties_to_local_storage"), e = r.length; e--;) {
                                    var i = r.key(e);
                                    if (i && H(i)) {
                                        var s = i.substring(v.length);
                                        t && !F(s) || (y[s] = r.getItem(i))
                                    }
                                }
                            }()) : U(t || {}), k.fire()) : i = !0
                        },
                        onSync: k,
                        setSettingsAdapter: function(t) {
                            e = t
                        }
                    }
                }());
            setTimeout((function() {
                i.e(30362).then(i.bind(i, 276141)).then((t => {
                    t.clearOldSettings()
                }))
            }), 3e4), t && t.exports && (t.exports = d)
        },
        594275: (t, e, i) => {
            "use strict";
            i.d(e, {
                isMcxQuoteData: () => n
            });
            var s = i(12670);

            function n(t) {
                var e;
                return !!t && ((0,
                    s.isMcxFlag)(t.symbolname) || "permission_denied" === t.status && (0, s.isMcxFlag)(null === (e = t.values) || void 0 === e ? void 0 : e.alternative))
            }
        },
        564907: (t, e, i) => {
            "use strict";
            i.d(e, {
                isSfQuoteData: () => n
            });
            var s = i(852490);

            function n(t) {
                return !!t && (!(void 0 === t.symbolname || !(0, s.isSfFlag)(t.symbolname)) || Boolean("permission_denied" === t.status && t.values && void 0 !== t.values.alternative && (0, s.isSfFlag)(t.values.alternative)))
            }
        },
        12670: (t, e, i) => {
            "use strict";
            i.d(e, {
                isMcxFlag: () => n
            });
            var s = i(416234);

            function n(t) {
                return t === s.SymbolGroup.McxFlag
            }
        },
        852490: (t, e, i) => {
            "use strict";

            function s(t) {
                return t.endsWith("_dly")
            }
            i.d(e, {
                isSfFlag: () => s
            })
        },
        416234: (t, e, i) => {
            "use strict";
            i.d(e, {
                SymbolGroup: () => s,
                getSymbolGroupData: () => r
            });
            i(984919);
            var s, n = i(777754);
            ! function(t) {
                t.NseFlag = "nse_free", t.McxFlag = "mcx_free"
            }(s || (s = {}));
            const o = {
                [s.NseFlag]: {
                    title: n.t(null, void 0, i(343857)),
                    description: n.t(null, void 0, i(552666))
                }
            };

            function r(t) {
                return o[t] ? o[t] : null
            }
        },
        779923: (t, e, i) => {
            "use strict";
            async function s(t, e) {
                const s = await Promise.all([i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(12275), i.e(33335), i.e(91901), i.e(83772), i.e(71140), i.e(54819), i.e(59302), i.e(36812), i.e(69273), i.e(75514), i.e(745), i.e(38890)]).then(i.bind(i, 894185));
                return s.showSimpleDialog(t, s.renameModule, e)
            }
            async function n(t, e) {
                const s = await Promise.all([i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(12275), i.e(33335), i.e(91901), i.e(83772), i.e(71140), i.e(54819), i.e(59302), i.e(36812), i.e(69273), i.e(75514), i.e(745), i.e(38890)]).then(i.bind(i, 894185));
                return s.showSimpleDialog(t, s.confirmModule, e)
            }
            async function o(t, e) {
                const s = await Promise.all([i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(12275), i.e(33335), i.e(91901), i.e(83772), i.e(71140), i.e(54819), i.e(59302), i.e(36812), i.e(69273), i.e(75514), i.e(745), i.e(38890)]).then(i.bind(i, 894185));
                return s.showSimpleDialog(t, s.warningModule, e)
            }
            i.r(e), i.d(e, {
                showRename: () => s,
                showConfirm: () => n,
                showWarning: () => o
            })
        },
        988411: (t, e, i) => {
            "use strict";
            t = i.nmd(t);
            var s = i(272001).getLogger("Common.WatchedValue");

            function n() {}

            function o(t) {
                if (!(this instanceof o)) return new o(t);
                arguments.length > 0 && (this._value = t), this._listeners = []
            }
            o.prototype.value = function() {
                return this._owner ? this._owner._value : this._value
            }, o.prototype.setValue = function(t, e) {
                var i = this._owner ? this._owner : this;
                if ("function" == typeof i.hook && (t = i.hook(t)), i.writeLock) return i._value;
                var n = i._value === t || Number.isNaN(i._value) && Number.isNaN(t);
                if (!e && n && i.hasOwnProperty("_value")) return t;
                i._value = t;
                for (var o = i._listeners.slice(), r = 0, a = 0; a < o.length; a++) {
                    o[a].once && (i._listeners.splice(a - r, 1), r++);
                    try {
                        o[a].cb(t)
                    } catch (t) {
                        s.logError(t.stack || t.message)
                    }
                }
                return t
            }, o.prototype.deleteValue = function() {
                var t = this._owner ? this._owner : this;
                if (t.hasOwnProperty("_value")) {
                    if (t.writeLock) return t._value;
                    delete t._value;
                    for (var e = t._listeners.slice(), i = 0, n = 0; n < e.length; n++) {
                        e[n].once && (t._listeners.splice(n - i, 1), i++);
                        try {
                            e[n].cb()
                        } catch (t) {
                            s.logError(t.stack || t.message)
                        }
                    }
                }
            }, o.prototype.subscribe = function(t, e) {
                if ("function" != typeof t) throw new TypeError("callback must be a function");
                var i = !!e && !!e.once,
                    n = !!e && !!e.callWithLast,
                    o = this._owner ? this._owner : this;
                if (n && o.hasOwnProperty("_value")) {
                    try {
                        t(o._value)
                    } catch (t) {
                        s.logError(t.stack || t.message)
                    }
                    if (i) return
                }
                o._listeners.push({
                    cb: t,
                    owner: this,
                    once: !!e && !!e.once
                })
            }, o.prototype.unsubscribe = function(t) {
                var e = this._owner ? this._owner : this;
                void 0 === t && (t = null);
                for (var i = e._listeners, s = i.length; s--;) i[s].owner !== this && e !== this || i[s].cb !== t && null !== t || i.splice(s, 1)
            }, o.prototype.listeners = function() {
                return (this._owner ? this._owner : this)._listeners
            }, o.prototype.readonly = function() {
                if (this._readonlyInstance) return this._readonlyInstance;
                var t = this._readonlyInstance = new n;
                return t.subscribe = this.subscribe.bind(this), t.unsubscribe = this.unsubscribe.bind(this), t.value = this.value.bind(this), t.when = this.when.bind(this), t.spawn = function() {
                    return this.spawn.apply(this, arguments).readonly()
                }.bind(this), this.destroy && (t.destroy = this.destroy.bind(this)), t
            }, o.prototype.spawn = function(t) {
                var e = new o;
                return delete e._listeners, e._owner = this._owner || this, e.destroy = function() {
                    if ("function" == typeof t) try {
                        t()
                    } catch (t) {
                        s.logError(t.stack || t.message)
                    }
                    this.unsubscribe(), delete this._owner
                }, e
            }, o.prototype.when = function(t) {
                var e = this;
                if (this.value()) try {
                    t()
                } catch (t) {
                    s.logError(t.stack || t.message)
                } else {
                    var i = function(s) {
                        s && (e.unsubscribe(i), t())
                    };
                    e.subscribe(i)
                }
            }, o.prototype.opposite = function() {
                if (!this._opposite) {
                    var t = this,
                        e = new o(!this.value());
                    this.subscribe((function(t) {
                        e.setValue(!t)
                    })), e.subscribe((function(e) {
                        t.setValue(!e)
                    })), this._opposite = e
                }
                return this._opposite
            }, "undefined" != typeof window && (window.WatchedValue = o), t && t.exports && (t.exports = o)
        },
        505881: (t, e, i) => {
            "use strict";
            window.TradingView = window.TradingView || {}, window.requireAll = function(t) {
                return t.keys().map(t)
            }, i(778785).setClasses(), i(332658), i(128327).install(), i(801402), i(563245), i(638456), i(758337), i(984919), i(491904), i(386981), i(185918), i(934440), i(876021), i(125226), i(49437), i(809350), i(934333), i(62802)
        },
        374008: (t, e, i) => {
            "use strict";
            i.d(e, {
                handleVoidRequest: () => o,
                handleJSONRequest: () => r,
                APIError: () => a
            });
            var s = i(890740);

            function n({
                path: t,
                requestData: e,
                signal: i
            }) {
                const n = new URL(t, window.origin);
                if ("GET" === e.method && e.query)
                    for (const [t, i] of Object.entries(e.query)) void 0 !== i && n.searchParams.append(t, i);
                const o = {
                    method: e.method,
                    credentials: "same-origin",
                    signal: i
                };
                return "POST" !== e.method && "PUT" !== e.method || (o.body = JSON.stringify(e.body), o.headers = new Headers({
                    "Content-Type": "application/json"
                })), (0, s.fetch)(n.toString(), o)
            }
            async function o(t) {
                const e = await n(t);
                if (!e.ok) try {
                    const t = await e.json();
                    return Promise.reject(new a(e.status, t))
                } catch (t) {
                    return Promise.reject(new a(e.status, {}))
                }
            }
            async function r(t) {
                const e = await n(t);
                try {
                    const t = await e.json();
                    return e.ok ? t : Promise.reject(new a(e.status, t))
                } catch (t) {
                    return Promise.reject(new a(e.status, {}))
                }
            }
            class a extends Error {
                constructor(t, e) {
                    super([t, e.code, e.detail].filter(Boolean).join(" - ")), this.status = t, this.payload = e, this.name = "APIError", Object.setPrototypeOf(this, new.target.prototype)
                }
            }
        },
        627025: (t, e, i) => {
            "use strict";

            function s(t) {
                return t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            i.d(e, {
                regExpEscape: () => s
            })
        },
        455567: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                CubicBezier: () => s.CubicBezier,
                color: () => s.color,
                dur: () => s.dur,
                easingFunc: () => s.easingFunc
            });
            var s = i(745269)
        },
        960489: (t, e, i) => {
            "use strict";
            var s;
            i.d(e, {
                    BillingCycle: () => s
                }),
                function(t) {
                    t.Monthly = "m", t.ThreeMonths = "3m", t.OneYear = "y", t.TwoYears = "2y"
                }(s || (s = {}))
        },
        960254: (t, e, i) => {
            "use strict";
            var s, n, o;
            i.d(e, {
                    ProPlans: () => s,
                    BrokerPlans: () => n,
                    BrokerPlansIds: () => o
                }),
                function(t) {
                    t.Free = "free", t.Pro = "pro", t.ProTrial = "pro_trial", t.ProRealtime = "pro_realtime", t.ProRealtimeTrial = "pro_realtime_trial", t.ProPremium = "pro_premium", t.ProPremiumTrial = "pro_premium_trial"
                }(s || (s = {})),
                function(t) {
                    t.Platinum = "platinum", t.Gold = "gold", t.Silver = "silver", t.Free = "free"
                }(n || (n = {})),
                function(t) {
                    t[t.Platinum = 3] = "Platinum", t[t.Gold = 2] = "Gold", t[t.Silver = 1] = "Silver", t[t.Free = 0] = "Free"
                }(o || (o = {}))
        },
        508846: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                onGoProDialog: () => r,
                createGoProDialog: () => a
            });
            const s = new Set,
                n = [],
                o = new Promise((t => {
                    window.addEventListener("load", (() => {
                        setTimeout((() => {
                            t()
                        }), 3e3)
                    })), setTimeout((() => {
                        t()
                    }), 3e3)
                }));

            function r(t, e) {
                n.push(t), e && e.forEach((t => {
                    s.add(t)
                }))
            }
            async function a(t) {
                var e;
                if (await o, n.forEach((e => {
                        e(t.feature)
                    })), s.has(t.feature)) return;
                const r = await Promise.all([i.e(65630), i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(91901), i.e(78707), i.e(13249), i.e(96246), i.e(20849), i.e(53262), i.e(46951), i.e(65216), i.e(27565), i.e(75514), i.e(51349), i.e(745), i.e(52328), i.e(60246), i.e(33619), i.e(5246)]).then(i.bind(i, 640348));
                await (null === (e = window.pro) || void 0 === e ? void 0 : e.ensureValidShopConf()), r.renderGoproDialog(t)
            }
            window.TradingView.createGoProDialog = a
        },
        491904: (t, e, i) => {
            "use strict";
            var s = i(823127);
            const n = i(272001).getLogger("Chart.FollowSymbolsButton"),
                o = i(132317).trackActionFollow,
                r = i(84119).followSymbol;
            ! function() {
                var t = ".js-follow-symbol",
                    e = {};

                function i(t) {
                    if (!t.symbol) return s.Deferred().reject().promise();
                    if (null == t.follow && Object.prototype.hasOwnProperty.call(e, t.symbol)) return e[t.symbol].promise;
                    var i = s.Deferred(),
                        n = i.promise();
                    return e[t.symbol] || (e[t.symbol] = {}), e[t.symbol].promise = n, r(t).then((s => {
                        s.error ? i.reject(s) : (i.resolve(s), s.symbol !== t.symbol && (e[s.symbol] = e[t.symbol]))
                    })).catch((() => {
                        i.reject.apply(i, arguments)
                    })), n
                }

                function a(t, e) {
                    return i({
                        symbol: t,
                        follow: +!!e
                    }).done((function(e) {
                        var i = e.followTheSymbol;
                        l(t, i)
                    })).promise()
                }

                function l(e, i) {
                    s(t).each((function() {
                        var t = s(this);
                        t.data("symbol") === e && _(t, i)
                    }))
                }

                function c() {
                    for (var i in e) delete e[i];
                    _(s(t), !1)
                }

                function _(t, e) {
                    e = !!e, t.each((function() {
                        var t = s(this);
                        t.toggleClass("js-follow-symbol--followed", e).toggleClass(t.data("follow-symbol-button-followed-style-class") ? t.data("follow-symbol-button-followed-style-class") : "i-checked", e)
                    }))
                }
                s(document).on("click", t, (function(t) {
                    var e = s(this),
                        i = e.data("symbol"),
                        n = e.data("type");
                    i && runOrSignIn((function() {
                        var t = function(t) {
                                return t.hasClass("js-follow-symbol--followed")
                            }(e),
                            s = a(i, !t),
                            r = t ? "Unfollow" : "Follow",
                            l = {
                                symbol: i,
                                symbolType: n
                            };
                        _(e, !t), o("Symbol", r, l), s.fail((function() {
                            _(e, t)
                        }))
                    }), {
                        source: "Follow symbol button"
                    })
                })), TradingView.FollowSymbols = {
                    changeState: a,
                    makeButton: function(t) {
                        var e = (t = t || {}).$button,
                            o = t.symbol;
                        return e ? (e.addClass("js-follow-symbol tv-button tv-button--success"), o || (o = e.data("symbol"))) : e = s('<span class="js-follow-symbol tv-button tv-button--success">'), e.data({
                            "follow-symbol-button-followed-style-class": "i-checked",
                            "follow-symbol-button-change-text": void 0 === t.changeText || !!t.changeText
                        }), o ? (i({
                            symbol: o
                        }).pipe((function(t) {
                            e.attr("data-symbol", t.symbol), _(e, t.followTheSymbol)
                        })), e) : (n.logError("symbol is required"), e)
                    },
                    request: i
                }, s((function() {
                    loginStateChange.subscribe(TradingView.FollowSymbols, (function(n) {
                        n || (window.is_authenticated ? (c(), s(t).each((function() {
                            var t = s(this).data("symbol");
                            t && (Object.prototype.hasOwnProperty.call(e, t) || i({
                                symbol: t
                            }).done((function(t) {
                                l(t.symbol, t.followTheSymbol)
                            })))
                        }))) : c())
                    }))
                }))
            }()
        },
        919490: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                TRIAL_SUFFIX: () => r,
                EA_SUFFIX: () => a,
                CUSTOM_SUFFIX: () => l,
                billingCycleToTimeUnit: () => c,
                getReadableCycle: () => _,
                getReadableNumericCycle: () => u,
                billingPeriodText: () => h,
                isEarlyAccess: () => d,
                isTrialProduct: () => m,
                getProductForTrial: () => S,
                getDiscountFromEarlyAccess: () => T,
                toEarlyAccess: () => g,
                humanizeProPlan: () => p,
                humanizeCardPlan: () => E,
                getAmountOfDaysForBillingCycle: () => f,
                countDiscountByBillingCycle: () => N,
                billingCycleToMonth: () => C,
                round2: () => v,
                round0: () => y,
                floor0: () => A,
                round2or0: () => b,
                round1or0: () => I,
                roundMinimal: () => R,
                getPlanName: () => O
            });
            i(984919);
            var s = i(777754),
                n = i(960254),
                o = i(960489);
            const r = "_trial",
                a = "_discount",
                l = "_custom";

            function c(t) {
                return {
                    y: s.t(null, {
                        plural: "years",
                        count: 1
                    }, i(870659)),
                    m: s.t(null, {
                        plural: "months",
                        count: 1
                    }, i(99062)),
                    "3m": s.t(null, void 0, i(252656)),
                    "2y": s.t(null, void 0, i(943350))
                }[t]
            }

            function _(t) {
                return {
                    m: s.t(null, void 0, i(438144)),
                    y: s.t(null, void 0, i(739048)),
                    "3m": s.t(null, void 0, i(490227)),
                    "2y": s.t(null, void 0, i(565851))
                }[t] || ""
            }

            function u(t) {
                return {
                    [o.BillingCycle.Monthly]: s.t(null, void 0, i(438144)),
                    [o.BillingCycle.OneYear]: s.t(null, void 0, i(187534)),
                    [o.BillingCycle.ThreeMonths]: s.t(null, void 0, i(490227)),
                    [o.BillingCycle.TwoYears]: s.t(null, void 0, i(122354))
                }[t] || ""
            }

            function h(t) {
                var e;
                return null !== (e = {
                    y: s.t(null, void 0, i(304183)),
                    m: s.t(null, void 0, i(432950)),
                    "2y": s.t(null, void 0, i(89571))
                }[t]) && void 0 !== e ? e : ""
            }

            function d(t) {
                return /\d{0,2}_discount$/.test(t)
            }

            function m(t) {
                return new RegExp(r + "$").test(t)
            }

            function S(t) {
                return t.split(r)[0]
            }

            function T(t) {
                const e = t.match(new RegExp("^(d{0,2})" + a + "$"));
                return e ? +e[1] || 50 : 0
            }

            function g(t, e) {
                return `${t}_${e}${a}`
            }

            function p(t, e) {
                let o = t;
                switch (t) {
                    case n.ProPlans.Free:
                        o = "Basic";
                        break;
                    case n.ProPlans.Pro:
                        o = "Pro";
                        break;
                    case n.ProPlans.ProRealtime:
                        o = "Pro+";
                        break;
                    case n.ProPlans.ProPremium:
                        o = "Premium"
                }
                return e && (o += " " + s.t(null, void 0, i(679372))), o
            }

            function E(t) {
                let e = t;
                switch (t) {
                    case n.ProPlans.Pro:
                        e = "Pro";
                        break;
                    case n.ProPlans.ProRealtime:
                        e = "Pro+";
                        break;
                    case n.ProPlans.ProPremium:
                        e = "Premium";
                        break;
                    case n.ProPlans.Free:
                        e = "Basic"
                }
                return e
            }

            function f(t) {
                switch (t) {
                    case o.BillingCycle.TwoYears:
                        return 730;
                    case o.BillingCycle.OneYear:
                        return 365;
                    case o.BillingCycle.ThreeMonths:
                        return 90;
                    case o.BillingCycle.Monthly:
                        return 30;
                    default:
                        return 1
                }
            }

            function N(t, e, i) {
                return Math.round((e - t) * C(i))
            }

            function C(t) {
                switch (t) {
                    case o.BillingCycle.TwoYears:
                        return 24;
                    case o.BillingCycle.OneYear:
                        return 12;
                    default:
                        return 1
                }
            }

            function v(t) {
                return (Math.round(100 * t) / 100).toFixed(2)
            }

            function y(t) {
                const e = Math.round(100 * t) / 100;
                return Math.round(e).toFixed(0)
            }

            function A(t) {
                return Math.floor(t).toString()
            }

            function b(t) {
                const e = Math.round(100 * t) / 100,
                    i = Math.round(e);
                return Math.abs(e - i) > 0 ? e.toFixed(2) : i.toFixed(0)
            }

            function I(t) {
                return Number.isInteger(t) ? t.toFixed(0) : (Math.round(10 * t) / 10).toFixed(1)
            }

            function R(t) {
                const e = Math.round(100 * t) / 100,
                    i = Math.round(10 * t) / 10,
                    s = Math.round(e);
                return Math.abs(e - s) > 0 ? Math.abs(e - i) > 0 ? e.toFixed(2) : i.toFixed(1) : s.toFixed(0)
            }

            function O(t) {
                const e = s.t(null, void 0, i(133011));
                if (m(t)) {
                    const i = p(S(t));
                    return e.format({
                        proPlanName: i
                    })
                }
                return p(t)
            }
        },
        185918: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                QuoteTicker: () => C
            });
            var s, n = i(120149),
                o = i(272001),
                r = i(758337),
                a = i(561068),
                l = i(455567),
                c = i(314967);
            ! function(t) {
                function e(t, e) {
                    return 0 === t ? e && void 0 !== e.neutral ? e.neutral : l.color.black70 : t > 0 ? e && void 0 !== e.up ? e.up : c.colorsPalette["color-success"] : e && void 0 !== e.down ? e.down : c.colorsPalette["color-danger"]
                }
                t.formatSign = e, t.formatDiff = function(t, i) {
                    return e(i - t)
                }, t.domDifference = function(t, e, i = 0, s = "", n = "") {
                    function o(t) {
                        const e = document.createElement("span");
                        return e.innerHTML = t, e
                    }
                    const r = document.createElement("div");
                    if (!i) return r.appendChild(o(t)), r;
                    const a = t + "",
                        l = e + "";
                    let c = null;
                    if (a.length === l.length) {
                        for (let t = 0; t < a.length; t++)
                            if (a.charAt(t) !== l.charAt(t)) {
                                c = t;
                                break
                            }
                    } else c = Number("0");
                    if (null === c) return r.appendChild(o(a)), r;
                    const _ = o(a.substring(0, c)),
                        u = document.createElement("span");
                    return u.className = i < 0 ? s : n, u.appendChild(o(a.substring(c))), r.appendChild(_), r.appendChild(u), r
                }
            }(s || (s = {}));
            var _ = i(831471),
                u = i(738023),
                h = i(600303),
                d = i(719240),
                m = i(120379),
                S = i(947809),
                T = i(594275),
                g = i(564907);
            const p = (0, o.getLogger)("QuoteTicker"),
                E = {
                    addDescriptionTitle: !0,
                    changeDirectionDownClass: "down",
                    changeDirectionUpClass: "up",
                    changeDirectionNeutralClass: "neutral",
                    changeInBrackets: !1,
                    changePercentInBrackets: !1,
                    lastPriceTimeInBrackets: !0,
                    rtcTimeInBrackets: !0,
                    clientName: "quote-ticker",
                    dontDyePrice: !1,
                    fallingBg: null,
                    growingBg: null,
                    lastFallingClass: "falling",
                    lastGrowingClass: "growing",
                    quoteSession: null,
                    signNegative: !0,
                    signPositive: !1,
                    customPriceFormatter: null,
                    customTimeFormatter: null,
                    sessionStatusClassSuffix: "--for-ticker",
                    dataModeClassSuffix: "--for-ticker",
                    showInvalidSymbolStatus: !1,
                    indicatorsTooltipType: "custom",
                    lastPriceLastCharSup: !1,
                    lastPriceHighlightDiffOnly: !1,
                    initedHook: void 0,
                    setStateHook: void 0,
                    permissionDeniedHook: void 0,
                    noSuchSymbolHook: void 0
                },
                f = String.fromCharCode(8198),
                N = /[K,M,B]/;

            function C(t, e, i = {}) {
                this.enabled = !0, this._symbol = t, this._symbolOriginal = null, this._options = (0, n.deepExtend)({}, E, i), !1 !== this._options.signNegative && !0 !== this._options.signNegative && delete this._options.signNegative, i.customPriceFormatter && (this._customPriceFormatter = i.customPriceFormatter),
                    i.customTimeFormatter && (void 0 !== i.customTimeFormatter.lastPrice || void 0 !== i.customTimeFormatter.rtc ? this._timeFormatter = i.customTimeFormatter : this._timeFormatter = {
                        lastPrice: i.customPriceFormatter,
                        rtc: i.customPriceFormatter
                    }), this._percentFormatter = new a.PercentageFormatter, this._defaultPriceFormatter = new _.PriceFormatter(100), this._priceFormatter = this._customPriceFormatter || this._defaultPriceFormatter, this._volumeFormatter = new u.VolumeFormatter(2), this._cache = {}, this._lastPrice = null, this._lastPriceFormatted = "", this._elements = {}, this._textNodes = {}, this._changeVolumeLetter = this._getChangeVolumeLetterCallback(), this._setElements(e), this._highlighters = {}, this._initHighlighters(), this._options.setStateHook && this.setStateHook(this._options.setStateHook), this.quoteSession = this._options.quoteSession || (0, S.getQuoteSessionInstance)("simple"), this._quoteSessionEventHandler = this.onData.bind(this), this._connectTimeoutId = setTimeout(this.connect.bind(this), 0)
            }

            function v(t) {
                const e = t.search(N),
                    i = e >= 0 ? `${f}${t.slice(e)}` : "";
                return [e > 0 ? t.substring(e, 0) : 0 === e ? "" : t, i]
            }

            function y(t, e, i, s, n) {
                var o, r = null;

                function a() {
                    if (o && (clearTimeout(o), o = void 0), i || e)
                        for (var r = 0; r < t.length; r++) t[r].style.background = "";
                    if (!i || !e)
                        for (r = 0; r < t.length; r++) s && t[r].classList.remove(s), n && t[r].classList.remove(n)
                }
                return {
                    show: function(l) {
                        var c = 0;
                        if (l !== r) {
                            if (null !== r && null !== l && (c = l - r), a(), o = setTimeout(a, 750), 0 < c) {
                                if (e)
                                    for (var _ = 0; _ < t.length; _++) t[_].style.background = e;
                                else if (s)
                                    for (_ = 0; _ < t.length; _++) t[_].classList.add(s)
                            } else if (c < 0)
                                if (i)
                                    for (_ = 0; _ < t.length; _++) t[_].style.background = i;
                                else if (n)
                                for (_ = 0; _ < t.length; _++) t[_].classList.add(n);
                            null !== l && (r = l)
                        }
                    },
                    hide: a
                }
            }
            C.prototype._setElements = function(t) {
                    this._container = t, this._elements.change = this._findElements(t, ["js-symbol-change", "symbol-change"]), this._elements.changeDirection = this._findElements(t, ["js-symbol-change-direction", "symbol-change-direction"]), this._elements.extHrsChangeDirection = this._findElements(t, ["js-symbol-ext-hrs-change-direction"]), this._elements.changePercent = this._findElements(t, ["js-symbol-change-pt", "symbol-change-pt"]), this._elements.description = this._findElements(t, ["js-symbol-description-name", "symbol-description-name"]), this._elements.extHrsChange = this._findElements(t, "js-symbol-ext-hrs-change"), this._elements.extHrsChangePercent = this._findElements(t, "js-symbol-ext-hrs-change-pt"), this._elements.extHrsClose = this._findElements(t, "js-symbol-ext-hrs-close"), this._elements.industry = this._findElements(t, ["js-symbol-industry", "symbol-industry"]), this._elements.last = this._findElements(t, ["js-symbol-last", "symbol-last"]), this._elements.sector = this._findElements(t, ["js-symbol-sector", "symbol-sector"]), this._elements.sessionStatus = this._findElements(t, "js-symbol-session-status"), this._elements.shortName = this._findElements(t, ["js-symbol-short-name", "symbol-short-name"]), this._elements.updateMode = this._findElements(t, "js-data-mode"), this._elements.updateMode.forEach((t => t.classList.add("i-hidden"))), this._textNodes.change = this._getOrCreateTextNodes(this._elements.change),
                        this._textNodes.changePercent = this._getOrCreateTextNodes(this._elements.changePercent), this._textNodes.extHrsChange = this._getOrCreateTextNodes(this._elements.extHrsChange), this._textNodes.extHrsChangePercent = this._getOrCreateTextNodes(this._elements.extHrsChangePercent), this._textNodes.extHrsClose = this._getOrCreateTextNodes(this._elements.extHrsClose), this._textNodes.last = this._getOrCreateTextNodes(this._elements.last), this._textNodes.open = this._findTextNodes(t, "js-symbol-open"), this._textNodes.eps = this._findTextNodes(t, "js-symbol-eps"), this._textNodes.marketCap = this._findTextNodes(t, "js-symbol-market-cap"), this._textNodes.prevClose = this._findTextNodes(t, "js-symbol-prev-close"), this._textNodes.dividends = this._findTextNodes(t, "js-symbol-dividends"), this._textNodes.priceEarnings = this._findTextNodes(t, "js-symbol-pe"), this._textNodes.volume = this._findTextNodes(t, "js-symbol-volume"), this._textNodes.high = this._findTextNodes(t, "js-symbol-high"), this._textNodes.low = this._findTextNodes(t, "js-symbol-low"), this._textNodes.currency = this._findTextNodes(t, "js-symbol-currency"), this._textNodes.lastPriceTime = this._findTextNodes(t, "js-symbol-lp-time"), this._textNodes.rtcTime = this._findTextNodes(t, "js-symbol-rtc-time"), this._elements.lastHighlight = this._options.lastPriceHighlightDiffOnly ? this._elements.last.map((t => this._appendAndGetNewElement(t, "span"))) : this._elements.last, this._textNodes.lastHighlight = this._getOrCreateTextNodes(this._elements.lastHighlight), this._elements.lastSup = this._options.lastPriceLastCharSup ? this._elements.lastHighlight.map((t => this._appendAndGetNewElement(t, "sup"))) : [], this._textNodes.lastSup = this._getOrCreateTextNodes(this._elements.lastSup)
                }, C.prototype._findElements = function(t, e) {
                    var i = (0, r.isArray)(e) ? e : [e];
                    return Array.prototype.concat.apply([], i.map((e => Array.prototype.slice.call(t.getElementsByClassName(e)))))
                }, C.prototype._findTextNodes = function(t, e) {
                    return this._getOrCreateTextNodes(this._findElements(t, e))
                }, C.prototype._getOrCreateTextNodes = function(t) {
                    return t.map((t => {
                        var e = this._getFirstTextNode(t);
                        return e || (e = t.ownerDocument.createTextNode(""), t.appendChild(e)), e
                    }))
                }, C.prototype._appendAndGetNewElement = function(t, e) {
                    const i = document.createElement(e);
                    return t.appendChild(i), i
                }, C.prototype._getFirstTextNode = function(t) {
                    for (var e = t.childNodes, i = e.length - 1; i >= 0; i--)
                        if (3 === e.item(i).nodeType) return e.item(i);
                    return null
                }, C.prototype.connect = function(t) {
                    this._subscribed || (this._subscribedSymbol = t || this._symbol, this.quoteSession.subscribe(this._options.clientName, this._subscribedSymbol, this._quoteSessionEventHandler), this._subscribed = !0)
                }, C.prototype.disconnect = function() {
                    clearTimeout(this._connectTimeoutId), this._subscribed && (this.quoteSession.unsubscribe(this._options.clientName, this._subscribedSymbol, this._quoteSessionEventHandler), this._subscribed = !1)
                }, C.prototype.onData = function(t, e) {
                    this.enabled && ("ok" === t.status ? this.successData(t, e) : "permission_denied" === t.status ? this.onPermissionDenied(t) : "error" === t.status && this.errorData(t))
                }, C.prototype.successData = function(t, e) {
                    t.values && this.setState(t.values, t, e)
                }, C.prototype.onPermissionDenied = function(t) {
                    (0, g.isSfQuoteData)(t) || (0, T.isMcxQuoteData)(t) ? this._options.permissionDeniedHook ? this._options.permissionDeniedHook(t, this._symbolOriginal || this._symbol) : this.errorData(t): this.downgradeData(t)
                }, C.prototype.errorData = function(t) {
                    this._options.showInvalidSymbolStatus && (this.setShortName(this._symbol), this._elements.sessionStatus.map((t => new h.MarketStatusIndicator({
                        classSuffix: this._options.sessionStatusClassSuffix,
                        el: t,
                        data: {
                            values: {
                                current_session: "invalid"
                            }
                        },
                        tooltipType: this._options.indicatorsTooltipType
                    })))), this._options.noSuchSymbolHook ? (this._symbolOriginal && this.setShortName(this._symbolOriginal), this._options.noSuchSymbolHook.call(this, t, this._symbolOriginal || this._symbol)) : p.logWarn("No data for: " + this._symbol)
                }, C.prototype.downgradeData = function(t) {
                    {
                        const e = t && t.values && t.values.alternative,
                            i = this._symbol === e;
                        if (!(e && -1 !== e.indexOf(":")) || i) return void this.errorData(t);
                        this._symbolOriginal = this._symbol, this._symbol = e, this._subscribed = !1, this.connect()
                    }
                }, C.prototype.setState = function(t, e, i) {
                    const s = i.values;
                    this._isVolumeFormat = "volume" === t.format, null == s.pricescale && null == s.minmov && null == s.fractional && null == s.minmove2 || (this._priceFormatter = this._customPriceFormatter || this._isVolumeFormat && this._volumeFormatter || new _.PriceFormatter(t.pricescale || 100, t.minmov || 1, t.fractional, t.minmove2));
                    const n = this._options,
                        o = this._percentFormatter,
                        r = this._priceFormatter,
                        a = this._defaultPriceFormatter,
                        l = this._volumeFormatter;
                    s.timezone && this._timeFormatter && (this._timeFormatter.lastPrice && this._timeFormatter.lastPrice.setTimezone(s.timezone), this._timeFormatter.rtc && this._timeFormatter.rtc.setTimezone(s.timezone));
                    const c = (t, e = !0) => e ? `(${t})` : t,
                        S = void 0 !== n.signPositiveChange ? n.signPositiveChange : n.signPositive,
                        T = t => {
                            const e = r.format(t, S, void 0, n.signNegative);
                            return c(e, n.changeInBrackets)
                        },
                        g = t => {
                            const e = o.format(t, S, void 0, n.signNegative);
                            return c(e, n.changePercentInBrackets)
                        },
                        E = r.format.bind(r),
                        f = a.format.bind(a),
                        N = l.format.bind(l),
                        C = t => null == t ? u.PLACE_HOLDER : f(t);
                    n.disableChange || (this._setNodesValue(this._textNodes.change, s.change, T), this._setNodesValue(this._textNodes.changePercent, s.change_percent, g), null != s.change && (n.dontDyePrice || this._setChangeFontColor([].concat(this._elements.change, this._elements.changePercent), s.change, n.changeUpFontColor, n.changeDownFontColor, n.changeNeutralFontColor), this._setChangeDirection(this._elements.changeDirection, s.change)), this._setNodesValue(this._textNodes.extHrsChange, s.rch, T), this._setNodesValue(this._textNodes.extHrsChangePercent, s.rchp, g), null != s.rch && (n.dontDyePrice || this._setChangeFontColor([].concat(this._elements.extHrsChange, this._elements.extHrsChangePercent), s.rch, n.changeUpFontColor, n.changeDownFontColor, n.changeNeutralFontColor), this._setChangeDirection(this._elements.extHrsChangeDirection, s.rch))), this._setNodesValue(this._textNodes.prevClose, s.prev_close_price, E),
                        this._setNodesValue(this._textNodes.dividends, t.dividends_yield, (t => null == t ? u.PLACE_HOLDER : o.format(t, n.signPositive, void 0, n.signNegative)), !0);
                    let v = (0, m.getTranslatedSymbolDescription)(s);
                    if (v && (v = this._prepareSymbolDescription(v), this._setTextsContent(this._elements.description, v), this._options.addDescriptionTitle))
                        for (var y = 0; y < this._elements.description.length; y++) this._elements.description[y].setAttribute("title", v);
                    if ((null != s.short_name || null != s.exchange) && t.short_name) {
                        var A = t.short_name;
                        "QUANDL" === t.exchange && void 0 !== t.short_name.split("/")[1] && (A = t.short_name.split("/")[1] + ", " + t.short_name.split("/")[0]), this.setShortName(A)
                    }
                    this._setLastValue(s.last_price, E), this._setNodesValue(this._textNodes.extHrsClose, s.rtc, E), s.rtc && this._highlighters.extHrsClose.show(s.rtc), s.industry && this._setTextsContent(this._elements.industry, t.industry, (t => t)), s.sector && this._setTextsContent(this._elements.sector, t.sector), this._elements.sessionStatus && s.current_session && (this._sessionStatusInstances ? this._sessionStatusInstances.forEach((t => t.setStatus(s.current_session))) : this._sessionStatusInstances = this._elements.sessionStatus.map((e => new h.MarketStatusIndicator({
                        classSuffix: this._options.sessionStatusClassSuffix,
                        el: e,
                        short: !0,
                        data: {
                            values: s
                        },
                        quoteSession: this.quoteSession,
                        symbol: t.original_name,
                        manualUpdate: !0,
                        tooltipType: this._options.indicatorsTooltipType
                    })))), this._setNodesValue(this._textNodes.open, s.open_price, E), this._setNodesValue(this._textNodes.high, s.high_price, E), this._setNodesValue(this._textNodes.low, s.low_price, E), this._setNodesValue(this._textNodes.eps, t.earnings_per_share_basic_ttm, C, !0), this._setNodesValue(this._textNodes.priceEarnings, t.price_earnings_ttm, C, !0), this._setNodesValue(this._textNodes.marketCap, t.market_cap_basic, N, !0), this._setNodesValue(this._textNodes.volume, t.volume, N, !0);
                    const b = s.currency_code || s.value_unit_id;
                    if (b && this._setNodesValue(this._textNodes.currency, "PCT" === b ? "%" : b, null, !0), (s.lp_time || s.timezone && t.lp_time) && this._textNodes.lastPriceTime.length && (this._timeFormatter && this._timeFormatter.lastPrice ? this._setNodesValue(this._textNodes.lastPriceTime, c(this._timeFormatter.lastPrice.format(t.lp_time), this._options.lastPriceTimeInBrackets)) : p.logError("last price time field requested with no formatter provided")), (s.rtc_time || s.timezone && t.rtc_time) && this._textNodes.rtcTime.length && (this._timeFormatter && this._timeFormatter.rtc ? this._setNodesValue(this._textNodes.rtcTime, c(this._timeFormatter.rtc.format(t.rtc_time), this._options.rtcTimeInBrackets)) : p.logError("rtc time field requested with no formatter provided")), null != s.last_price)
                        for (y = 0; y < this._elements.updateMode.length; y++) this._elements.updateMode[y].classList.remove("i-hidden");
                    this._elements.updateMode && (s.update_mode || s.update_mode_seconds) && (this._updateModeInstances ? this._updateModeInstances.forEach((e => e.update({
                        values: t
                    }))) : this._updateModeInstances = this._elements.updateMode.map((e => new d.DataModeIndicator({
                        classSuffix: this._options.dataModeClassSuffix,
                        el: e,
                        data: {
                            values: t
                        },
                        modeInterval: t.update_mode_seconds,
                        short: !0,
                        tooltipType: this._options.indicatorsTooltipType
                    })))), this._setStateHook && this._setStateHook(e.values, i.values, e.complete), this._lastPrice ? this._highlighters.last.show(t.last_price) : null === this._lastPrice && (this._container.classList.add("quote-ticker-inited"), "function" == typeof this._options.initedHook && this._options.initedHook("last_price" in t)), this._lastPrice = t.last_price
                }, C.prototype._setNodesValue = function(t, e, i, s) {
                    if (null != e || s)
                        for (var n = "function" == typeof i ? i(e) : e, o = 0; o < t.length; o++) t[o].nodeValue = n
                }, C.prototype._setTextsContent = function(t, e, i) {
                    if (t && t.length && e)
                        for (var s = "function" == typeof i ? i(e) : e, n = 0; n < t.length; n++) t[n].textContent = s
                }, C.prototype._setLastValue = function(t, e) {
                    if (null == t) return;
                    const i = "function" == typeof e ? e(t) : String(t);
                    if (i === this._lastPriceFormatted) return;
                    const [s, n, o] = this._options.lastPriceHighlightDiffOnly ? this._getLastValueStringDiff(this._lastPriceFormatted, i) : ["", i, ""], r = s, [a, l] = this._options.lastPriceLastCharSup ? [n.slice(0, -1), n.slice(-1)] : [n, ""];
                    this._options.lastPriceHighlightDiffOnly && (this._isVolumeFormat && this._changeVolumeLetter.call(this, o), this._setNodesValue(this._textNodes.last, r)), this._setNodesValue(this._textNodes.lastHighlight, a), this._setNodesValue(this._textNodes.lastSup, l), this._lastPriceFormatted = i
                }, C.prototype._getChangeVolumeLetterCallback = function() {
                    let t;
                    return function(e) {
                        e !== t && (t = e, this._elements.last.forEach((e => {
                            3 !== e.childNodes.length ? e.appendChild(document.createTextNode(t)) : e.childNodes[2].nodeValue = t
                        })))
                    }
                }, C.prototype._getLastValueStringDiff = function(t, e) {
                    if (t === e) {
                        const [t, i] = v(e);
                        return [t, "", i]
                    }
                    let i = 0;
                    for (; t[i] === e[i];) i++;
                    const [s, n] = v(e.slice(i));
                    return [e.slice(0, i), s, n]
                }, C.prototype._setChangeFontColor = function(t, e, i, n, o) {
                    for (var r = s.formatSign(e, {
                            up: i,
                            down: n,
                            neutral: o
                        }), a = 0; a < t.length; a++) t[a].style.color = r
                }, C.prototype._setChangeDirection = function(t, e) {
                    for (var i = 0; i < t.length; i++) {
                        var s = t[i].classList;
                        s.toggle(this._options.changeDirectionUpClass, e > 0), s.toggle(this._options.changeDirectionDownClass, e < 0), s.toggle(this._options.changeDirectionNeutralClass, 0 === e)
                    }
                }, C.prototype.setShortName = function(t = "") {
                    this._setTextsContent(this._elements.shortName, t)
                }, C.prototype._prepareSymbolDescription = function(t) {
                    var e = this._getCache("symbol-description:" + t);
                    return e || (e = t, this._setCache("symbol-description:" + t, e), e)
                }, C.prototype._initHighlighters = function() {
                    this._highlighters.last = new y(this._elements.lastHighlight, this._options.growingBg, this._options.fallingBg, this._options.lastGrowingClass, this._options.lastFallingClass), this._highlighters.extHrsClose = new y(this._elements.extHrsClose, this._options.growingBg, this._options.fallingBg, this._options.lastGrowingClass, this._options.lastFallingClass)
                }, C.prototype.disable = function() {
                    this.enabled = !1, this.disconnect()
                }, C.prototype.enable = function() {
                    this.enabled = !0, this.connect()
                }, C.prototype.setStateHook = function(t) {
                    null === t && this._setStateHook ? delete this._setStateHook : "function" == typeof t && (this._setStateHook = t)
                }, C.prototype._setCache = function(t, e) {
                    null == e ? delete this._cache[t] : this._cache[t] = e
                },
                C.prototype._getCache = function(t) {
                    return this._cache && this._cache[t]
                }
        },
        876021: (t, e, i) => {
            "use strict";
            var s = i(508846).createGoProDialog,
                n = i(963644).showSignModal;
            window.TVDialogs = {
                showSignInDialog: function(t) {
                    return n(t)
                },
                signModal: null,
                showGoProDialog: function(t) {
                    s(t)
                }
            }
        }
    }
]);
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [47830, 802, 80455], {
        625422: (e, t, d) => {
            "use strict";
            t.transformPoint = t.translationMatrix = t.scalingMatrix = t.rotationMatrix = void 0;
            var i = d(86441);
            t.rotationMatrix = function(e) {
                var t = Math.cos(e),
                    d = Math.sin(e);
                return [
                    [t, -d, 0],
                    [d, t, 0],
                    [0, 0, 1]
                ]
            }, t.scalingMatrix = function(e, t) {
                return [
                    [e, 0, 0],
                    [0, t, 0],
                    [0, 0, 1]
                ]
            }, t.translationMatrix = function(e, t) {
                return [
                    [1, 0, e],
                    [0, 1, t],
                    [0, 0, 1]
                ]
            }, t.transformPoint = function(e, t) {
                for (var d = [t.x, t.y, 1], n = [0, 0, 0], r = 0; r < 3; r++)
                    for (var u = 0; u < 3; u++) n[r] += d[u] * e[r][u];
                return new i.Point(n[0], n[1])
            }
        },
        298243: (e, t, d) => {
            "use strict";
            d.d(t, {
                default: () => i
            });
            const i = function(e, t, d, i) {
                var n = -1,
                    r = null == e ? 0 : e.length;
                for (i && r && (d = e[++n]); ++n < r;) d = t(d, e[n], n, e);
                return d
            }
        },
        407193: (e, t, d) => {
            "use strict";
            d.d(t, {
                default: () => s
            });
            var i = d(920883),
                n = d(503060),
                r = d(553822),
                u = d(854814),
                o = n.default ? n.default.isConcatSpreadable : void 0;
            const a = function(e) {
                return (0, u.default)(e) || (0, r.default)(e) || !!(o && e && e[o])
            };
            const s = function e(t, d, n, r, u) {
                var o = -1,
                    s = t.length;
                for (n || (n = a), u || (u = []); ++o < s;) {
                    var c = t[o];
                    d > 0 && n(c) ? d > 1 ? e(c, d - 1, n, r, u) : (0, i.default)(u, c) : r || (u[u.length] = c)
                }
                return u
            }
        },
        43688: (e, t, d) => {
            "use strict";
            d.d(t, {
                default: () => i
            });
            const i = function(e, t, d) {
                var i = -1,
                    n = e.length;
                t < 0 && (t = -t > n ? 0 : n + t), (d = d > n ? n : d) < 0 && (d += n), n = t > d ? 0 : d - t >>> 0, t >>>= 0;
                for (var r = Array(n); ++i < n;) r[i] = e[i + t];
                return r
            }
        },
        677013: (e, t, d) => {
            "use strict";
            d.d(t, {
                default: () => s
            });
            var i = d(9757);
            const n = function(e) {
                var t = null == e ? 0 : e.length;
                return t ? e[t - 1] : void 0
            };
            var r = d(580838),
                u = d(43688);
            const o = function(e, t) {
                return t.length < 2 ? e : (0, r.default)(e, (0, u.default)(t, 0, -1))
            };
            var a = d(887844);
            const s = function(e, t) {
                return t = (0, i.default)(t, e), null == (e = o(e, t)) || delete e[(0, a.default)(n(t))]
            }
        },
        833713: (e, t, d) => {
            "use strict";
            d.d(t, {
                default: () => n
            });
            var i = d(407193);
            const n = function(e) {
                return (null == e ? 0 : e.length) ? (0, i.default)(e, 1) : []
            }
        },
        138651: (e, t, d) => {
            "use strict";
            d.d(t, {
                default: () => h
            });
            var i = d(7492),
                n = d(903427),
                r = d(553822),
                u = d(854814),
                o = d(29419),
                a = d(925247),
                s = d(443744),
                c = d(54744),
                l = Object.prototype.hasOwnProperty;
            const h = function(e) {
                if (null == e) return !0;
                if ((0, o.default)(e) && ((0, u.default)(e) || "string" == typeof e || "function" == typeof e.splice || (0, a.default)(e) || (0, c.default)(e) || (0, r.default)(e))) return !e.length;
                var t = (0, n.default)(e);
                if ("[object Map]" == t || "[object Set]" == t) return !e.size;
                if ((0, s.default)(e)) return !(0, i.default)(e).length;
                for (var d in e)
                    if (l.call(e, d)) return !1;
                return !0
            }
        },
        316230: (e, t, d) => {
            "use strict";
            d.d(t, {
                default: () => n
            });
            var i = d(517487);
            const n = function(e, t) {
                return (0, i.default)(e, t)
            }
        },
        277973: (e, t, d) => {
            "use strict";
            d.d(t, {
                default: () => i
            });
            const i = function(e) {
                return null === e
            }
        },
        700077: (e, t, d) => {
            "use strict";
            d.d(t, {
                default: () => a
            });
            var i = d(298243),
                n = d(597888),
                r = d(498827);
            const u = function(e, t, d, i, n) {
                return n(e, (function(e, n, r) {
                    d = i ? (i = !1, e) : t(d, e, n, r)
                })), d
            };
            var o = d(854814);
            const a = function(e, t, d) {
                var a = (0, o.default)(e) ? i.default : u,
                    s = arguments.length < 3;
                return a(e, (0, r.default)(t, 4), d, s, n.default)
            }
        },
        702040: (e, t, d) => {
            "use strict";
            d.d(t, {
                default: () => n
            });
            var i = d(677013);
            const n = function(e, t) {
                return null == e || (0,
                    i.default)(e, t)
            }
        },
        262943: e => {
            e.exports = {}
        },
        139308: e => {
            e.exports = {
                offlineBar: "offlineBar-UIGLv4xP",
                icon: "icon-UIGLv4xP",
                text: "text-UIGLv4xP"
            }
        },
        650969: (e, t, d) => {
            "use strict";
            async function i() {
                return (await d.e(47158).then(d.bind(d, 584570))).initSiteGlobalSkipNavigation()
            }
            async function n() {
                return (await d.e(29302).then(d.bind(d, 228062))).initPlatformSkipNavigation()
            }
            d.d(t, {
                initSiteGlobalSkipNavigation: () => i,
                initPlatformSkipNavigation: () => n
            })
        },
        722329: (e, t, d) => {
            "use strict";
            async function i(e) {
                const [{
                    widgetBarWidgets: t
                }, {
                    configure: i
                }] = await Promise.all([Promise.all([d.e(76049), d.e(20146), d.e(77085), d.e(58018), d.e(18619), d.e(81910), d.e(78707), d.e(96972), d.e(75398), d.e(36037), d.e(43082), d.e(63737), d.e(36720), d.e(24908), d.e(75667), d.e(5517), d.e(37908), d.e(27480), d.e(80529), d.e(49846), d.e(68825), d.e(97676), d.e(26024), d.e(19591), d.e(39683), d.e(74518), d.e(33599), d.e(79600), d.e(9725), d.e(52669), d.e(13871), d.e(58852), d.e(27488), d.e(99039), d.e(38184), d.e(69893), d.e(82744), d.e(84794), d.e(72278), d.e(95e3), d.e(26300), d.e(60307), d.e(35075), d.e(28906), d.e(49219), d.e(2491), d.e(98065), d.e(5952), d.e(20321), d.e(54876)]).then(d.bind(d, 650785)), Promise.all([d.e(76049), d.e(20146), d.e(77085), d.e(58018), d.e(18619), d.e(81910), d.e(78707), d.e(96972), d.e(75398), d.e(36037), d.e(43082), d.e(63737), d.e(36720), d.e(24908), d.e(75667), d.e(5517), d.e(37908), d.e(27480), d.e(80529), d.e(49846), d.e(68825), d.e(97676), d.e(26024), d.e(19591), d.e(39683), d.e(74518), d.e(33599), d.e(79600), d.e(9725), d.e(52669), d.e(13871), d.e(58852), d.e(27488), d.e(99039), d.e(38184), d.e(69893), d.e(82744), d.e(84794), d.e(72278), d.e(95e3), d.e(26300), d.e(60307), d.e(35075), d.e(28906), d.e(49219), d.e(2491), d.e(98065), d.e(5952), d.e(20321), d.e(54876)]).then(d.bind(d, 918809))]);
                return t.Watchlist = i(e), t
            }
            d.d(t, {
                configuration: () => i
            })
        },
        474474: (e, t, d) => {
            "use strict";

            function i() {
                return {
                    version: 2,
                    width: 300,
                    pages: []
                }
            }
            d.d(t, {
                getDefaultState: () => i
            })
        },
        948850: (e, t, d) => {
            "use strict";
            d.d(t, {
                initAllAnalytics: () => v
            });
            var i = d(10571),
                n = d(588948),
                r = d(719718);
            (0, n.updateInitData)();
            var u;

            function o(e) {
                (0, r.marketingAnalyticsEnabled)() && (0, r.createImage)((e => `https://www.facebook.com/tr?id=${(0,n.getInitData)().fbTagId}&ev=${e}&noscript=1`)(e))
            }! function(e) {
                e.PageView = "PageView", e.CompleteRegistration = "CompleteRegistration", e.StartTrial = "StartTrial", e.Subscribe = "Subscribe"
            }(u || (u = {}));
            var a = d(665343),
                s = d(975420),
                c = d(314802),
                l = d(638456),
                h = d(691805);

            function f() {
                try {
                    return null === top || window !== window.top || document !== top.document || self.location !== top.location
                } catch (e) {
                    return !0
                }
            }
            const g = (0, l.onMainPage)() || window.location.pathname.startsWith("/symbols/");
            let S = !1;

            function m() {
                if (function() {
                        if (S || !(0, r.yandexAnalyticsEnabled)() && !f() || (0, c.isOnMobileAppPage)("any") || l.CheckMobile.any() || !g) return;
                        (0, n.updateInitData)(), (0, n.getInitData)().yaTagId && ((0, h.appendScript)("https://mc.yandex.ru/metrika/tag.js"), window.ym = function() {
                            window.ym.a.push(arguments)
                        }, window.ym.a = window.ym.a || [], window.ym.l = (new Date).getTime(), S = !0)
                    }(), !S) return;
                const e = (0, n.getInitData)().yaTagId;
                window.ym(e, "init", {
                    clickmap: !0,
                    trackLinks: !0,
                    accurateTrackBounce: !0,
                    webvisor: !0,
                    trackHash: !0
                })
            }
            var p = d(776734),
                b = d(261030);
            async function v(e) {
                if (o(u.PageView), (0, a.trackTwitterEvent)(a.TwitterEvent.SiteVisit), await Promise.all([i.whenDocumentReadyPromise, e]), (0, s.initGA)(), m(), !f()) {
                    const e = await (0, p.getTracker)();
                    e && (await b.cookieSettingsReady.promise, e.trackPageView())
                }
            }
        },
        39654: (e, t, d) => {
            "use strict";
            d.d(t, {
                getIsoLanguageCodeFromLanguage: () => n
            });
            const i = {
                ar_AE: "ar",
                br: "pt",
                de_DE: "de",
                ca_ES: "ca",
                he_IL: "he",
                id_ID: "id",
                in: "en",
                kr: "ko",
                ms_MY: "ms",
                sv_SE: "sv",
                th_TH: "th",
                uk: "en",
                vi_VN: "vi",
                zh_CN: "zh-Hans",
                zh_TW: "zh-Hant",
                zh: "zh-Hans"
            };

            function n(e) {
                return i[e] || e
            }
        },
        822714: (e, t, d) => {
            "use strict";
            d.r(t), d.d(t, {
                convertToCustomSymbolList: () => u,
                convertToMarkedSymbolList: () => o,
                convertToSymbolList: () => a,
                getCustomWatchLists: () => s,
                getAllWatchLists: () => c,
                renameWatchList: () => l,
                removeWatchList: () => h,
                addSymbols: () => f,
                removeSymbols: () => g,
                replaceSymbols: () => S,
                createWatchList: () => m,
                putWatchList: () => p,
                setActive: () => b,
                getActive: () => v,
                changeDescription: () => C
            });
            var i = d(650151),
                n = d(890740),
                r = d(658583);

            function u(e) {
                var t;
                return {
                    type: "custom",
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    symbols: null !== (t = e.symbols) && void 0 !== t ? t : [],
                    shared: e.shared
                }
            }

            function o(e) {
                var t, d;
                const n = (0, i.ensureNotNull)(e.color);
                return {
                    type: "colored",
                    id: n,
                    color: n,
                    name: null !== (t = e.name) && void 0 !== t ? t : null,
                    description: e.description,
                    symbols: null !== (d = e.symbols) && void 0 !== d ? d : [],
                    shared: e.shared
                }
            }

            function a(e) {
                return "custom" === e.type ? u(e) : o(e)
            }

            function s() {
                return (0, n.fetch)("/api/v1/symbols_list/custom/").then(r.handleJSON).then((e => e.map(u)))
            }

            function c() {
                return (0, n.fetch)("/api/v1/symbols_list/all/").then(r.handleJSON).then((e => e.map(a)))
            }

            function l(e, t) {
                return (0, n.fetch)(`/api/v1/symbols_list/custom/${e.id}/rename/`, {
                    method: "POST",
                    body: JSON.stringify({
                        name: t
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(r.handleJSON)
            }

            function h(e) {
                return (0, n.fetch)(`/api/v1/symbols_list/custom/${e.id}/`, {
                    method: "DELETE"
                }).then(r.handleJSON)
            }

            function f(e, t) {
                return (0, n.fetch)(`/api/v1/symbols_list/custom/${e.id}/append/`, {
                    method: "POST",
                    body: JSON.stringify(t),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(r.handleJSON)
            }

            function g(e, t) {
                return (0, n.fetch)(`/api/v1/symbols_list/custom/${e.id}/remove/`, {
                    method: "POST",
                    body: JSON.stringify(t),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(r.handleJSON)
            }

            function S(e, t) {
                return (0, n.fetch)(`/api/v1/symbols_list/custom/${e.id}/replace/?unsafe=true`, {
                    method: "POST",
                    body: JSON.stringify(t),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(r.handleJSON)
            }

            function m(e) {
                return (0, n.fetch)("/api/v1/symbols_list/custom/", {
                    method: "POST",
                    body: JSON.stringify({
                        name: e.name,
                        symbols: e.symbols
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(r.handleJSON).then(u)
            }

            function p(e) {
                throw new Error("not implemented")
            }

            function b(e) {
                return (0, n.fetch)(`/api/v1/symbols_list/active/${e}/`, {
                    method: "POST"
                })
            }
            async function v() {
                if ((0, r.isDesktopWatchlistAvailable)(window.TVD)) {
                    const e = await window.TVD.getActiveWatchlistId();
                    if (e) {
                        const t = await c(),
                            d = t.find((t => t.id === e));
                        return null != d ? d : t[0]
                    }
                }
                return (0,
                    n.fetch)("/api/v1/symbols_list/active/", {
                    method: "GET"
                }).then(r.handleJSON).then(a)
            }

            function C(e, t) {
                return (0, n.fetch)(`/api/v1/symbols_list/custom/${e}/update_meta/`, {
                    method: "POST",
                    body: JSON.stringify({
                        description: t
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(r.handleJSON).then(a)
            }
        },
        658583: (e, t, d) => {
            "use strict";
            d.d(t, {
                handleJSON: () => n,
                isDesktopWatchlistAvailable: () => r
            });
            var i = d(638456);

            function n(e) {
                return e.ok ? 204 === e.status ? Promise.resolve() : e.json() : e.json().then((e => {
                    const t = new Error(e.detail || "not ok");
                    throw e.code && (t.name = `ApiError:${e.code}`), t
                }))
            }

            function r(e) {
                return Boolean((0, i.isDesktopApp)() && e && "getActiveWatchlistId" in e && "onActiveWatchlistIdChange" in e)
            }
        },
        543502: (e, t, d) => {
            "use strict";
            d.d(t, {
                registerSiteSymbolListBackend: () => f
            });
            var i = d(261309);
            const n = d(822714);
            var r = d(777754),
                u = d(564894);
            class o {
                constructor(e = []) {
                    this._list = {
                        id: "DEFAULT_SINGLE_WATCHLIST",
                        type: "custom",
                        name: r.t(null, void 0, d(213402)),
                        description: null,
                        symbols: [...e],
                        shared: !1
                    }
                }
                getCustomWatchLists() {
                    return Promise.resolve([this._list])
                }
                getSymbols(e) {
                    return Promise.resolve(this._list.symbols)
                }
                createWatchList(e) {
                    throw new Error("not implemented")
                }
                putWatchList(e) {
                    throw new Error("not implemented")
                }
                removeWatchList(e) {
                    throw new Error("not implemented")
                }
                renameWatchList(e, t) {
                    return Promise.resolve(t)
                }
                replaceSymbols(e, t) {
                    return this._list.symbols = [...t], Promise.resolve(this._list)
                }
                addSymbols(e, t) {
                    return this._list.symbols.push(...t), Promise.resolve(this._list.symbols)
                }
                removeSymbols(e, t) {
                    return this._list.symbols = this._list.symbols.filter((e => !t.includes(e))), Promise.resolve(this._list.symbols)
                }
                setActive(e) {
                    return Promise.resolve(this._list)
                }
                getActive() {
                    return Promise.resolve(this._list)
                }
                changeDescription(e, t) {
                    throw new Error("not implemented")
                }
            }
            var a = d(440498),
                s = d(638456),
                c = d(658583);
            const l = JSON.parse('{"ar_AE":["TADAWUL:TASI","TADAWUL:MT30","TVC:SPX","TVC:NDX","NSE:NIFTY","###الأسهم","TADAWUL:2222","TADAWUL:1120","TADAWUL:1150","NASDAQ:AAPL","NASDAQ:TSLA","###الفوركس","FX:EURUSD","FX:GBPUSD","FX:USDJPY","###العقود الآجلة","TVC:USOIL","TVC:UKOIL","TVC:GOLD","###العملات الرقمية","BITSTAMP:BTCUSD","BINANCE:BTCUSDT","BITSTAMP:ETHUSD"],"br":["BMFBOVESPA:IBOV","BMFBOVESPA:SMLL","TVC:SPX","TVC:DXY","TVC:DJI","###Ações (Stocks)","BMFBOVESPA:PETR4","BMFBOVESPA:VVAR3","BMFBOVESPA:ITSA4","BMFBOVESPA:MGLU3","###Cripto","BITSTAMP:BTCUSD","BINANCE:BTCBRL","BINANCE:ETHUSDT","###Futuros (Futures)","BMFBOVESPA:WIN1!","BMFBOVESPA:WDO1!","TVC:UKOIL","TVC:GOLD","BMFBOVESPA:CCM1!","###Moedas (Forex)","FX_IDC:USDBRL","FX:EURUSD","FX:USDJPY"],"de_DE":["TVC:DEU30","TVC:SPX","TVC:NDX","TVC:SX5E","TVC:UKX","###Aktien","XETR:SAP","XETR:BAYN","XETR:ADS","NASDAQ:AAPL","NASDAQ:TSLA","###Forex","FX:EURUSD","FX:GBPUSD","FX:USDJPY","###Krypto","BITSTAMP:BTCUSD","BITSTAMP:BTCEUR","BITSTAMP:ETHUSD","###Futures","EUREX:FDAX1!","TVC:GOLD","TVC:USOIL","TVC:UKOIL"],"default":["###Indices","SP:SPX","TVC:NDX","TVC:DJI","CBOE:VIX","TVC:DXY","###Stocks","NASDAQ:AAPL","NASDAQ:TSLA","NASDAQ:NFLX","###Futures","TVC:USOIL","TVC:GOLD","TVC:SILVER","###Forex","FX:EURUSD","FX:GBPUSD","FX:USDJPY","###Crypto","BITSTAMP:BTCUSD","BINANCE:BTCUSDT","BITSTAMP:ETHUSD"],"es":["TVC:SPX","TVC:IBEX35","TVC:DXY","TVC:VIX","###Acciones","NASDAQ:AAPL","BME:SAN","BCBA:GGAL","BMV:CEMEX/CPO","###Forex","FX:EURUSD","FX:USDJPY","FX:GBPUSD","###Futuros","TVC:USOIL","TVC:GOLD","TVC:SILVER","###Cripto","BITSTAMP:BTCUSD","BINANCE:BTCUSDT","BITSTAMP:ETHUSD"],"fr":["TVC:CAC40","TVC:DEU30","TVC:NDX","TVC:SPX","###Actions","EURONEXT:FP","EURONEXT:GLE","EURONEXT:ORA","###Futures","TVC:UKOIL","TVC:USOIL","TVC:GOLD","###Forex","FX:EURUSD","FX:GBPUSD","FX:USDJPY","FX:EURGBP","###Crypto","BITSTAMP:BTCUSD","BITSTAMP:ETHUSD","BINANCE:BTCUSDT","BITSTAMP:BTCEUR"],"he_IL":["TASE:TA35","TVC:NDX","TVC:SPX","TVC:DJI","TVC:DXY","###מניות","TASE:TEVA","TASE:OPK","TASE:INTL","NASDAQ:AAPL","NASDAQ:TSLA","###חוזים עתידיים","TVC:USOIL","TVC:GOLD","TVC:SILVER","###מט\\"ח","FX:EURUSD","FX:GBPUSD","FX:USDJPY","FX_IDC:USDILS","###קריפטו","BITSTAMP:BTCUSD","BINANCE:BTCUSDT","BITSTAMP:ETHUSD"],"id":["IDX:COMPOSITE","IDX:IDX30","IDX:IDXBUMN20","TVC:SPX","TVC:DXY","###Saham (Stock)","IDX:ANTM","IDX:BBRI","IDX:TLKM","###Forex","FX:EURUSD","FX:GBPUSD","FX:USDJPY","###Kontrak berjangka (Futures)","TVC:USOIL","TVC:UKOIL","TVC:GOLD","###Crypto","BITSTAMP:BTCUSD","BINANCE:BTCUSDT","BITSTAMP:ETHUSD"],"in":["NSE:NIFTY","NSE:BANKNIFTY","BSE:SENSEX","NSE:CNXIT","TVC:SPX","###Stocks","NSE:RELIANCE","NSE:AXISBANK","NSE:HDFCBANK","NSE:ICICIBANK","NSE:BAJFINANCE","###Futures","NSE:NIFTY1!","NSE:BANKNIFTY1!","NSE:RELIANCE1!","NSE:INFY1!","###Forex","FX_IDC:USDINR","FX:EURUSD","FX:GBPUSD","FX:USDJPY","###Crypto","BITSTAMP:BTCUSD","BITSTAMP:ETHUSD","BITSTAMP:XRPUSD","BITSTAMP:LTCUSD"],"it":["TVC:FTMIB","TVC:SPX","TVC:DXY","TVC:UKX","TVC:DAX","###Forex","FX:EURUSD","FX:EURGBP","FX:USDJPY","FX:GBPUSD","###Azioni","MIL:ENI","MIL:ISP","NASDAQ:TSLA","NASDAQ:AAPL","###Futures","TVC:GOLD","TVC:USOIL","###Cripto","BITSTAMP:BTCUSD","BITSTAMP:ETHUSD","BITSTAMP:BTCEUR"],"ja":["TVC:NI225","TVC:DJI","TVC:SPX","TVC:DXY","TVC:VIX","###株式","TSE:9984","TSE:8306","TSE:6758","###先物","TVC:GOLD","TVC:USOIL","OSE:NK2251!","TVC:US10Y","###FX","FX:USDJPY","FX:EURUSD","FX:GBPJPY","###仮想通貨","BITSTAMP:BTCUSD","BITFLYER:BTCJPY","BITMEX:XBTUSD"],"kr":["KRX:KOSPI","KRX:KOSPI200","KRX:KOSDAQ","TVC:SPX","TVC:NDX","TVC:NI225","###가상화페","BITMEX:XBTUSD","BITHUMB:BTCKRW","BINANCE:BTCUSDT","###외환","FX_IDC:USDKRW","FX:EURUSD","FX:USDJPY","###국내주식","KRX:005930","KRX:035420","KRX:005380","KRX:068270","KRX:035720","###해외선물","CBOT_MINI:YM1!","CME_MINI:NQ1!","CME_MINI:ES1!","NYMEX:CL1!","CBOE:VX1!"],"ms_MY":["FTSEMYX:FBMKLCI","FX_IDC:USDMYR","MYX:FCPO1!","TVC:SPX","TVC:VIX","###Saham","MYX:TOPGLOV","MYX:SUPERMX","MYX:CAREPLS","NASDAQ:AAPL","NASDAQ:TSLA","###Forex","FX:EURUSD","FX:GBPUSD","FX:USDJPY","###Hadapan","TVC:USOIL","TVC:UKOIL","TVC:GOLD","###Kripto","BITSTAMP:BTCUSD","BITSTAMP:ETHUSD"],"pl":["GPW:WIG20","TVC:SX5E","TVC:DAX","TVC:SPX","###Akcje Giełdowe","GPW:PKO","GPW:JSW","GPW:PKN","NASDAQ:AAPL","NASDAQ:TSLA","###Kontrakty Terminowe","TVC:USOIL","TVC:GOLD","TVC:SILVER","###Forex","FX_IDC:USDPLN","FX_IDC:EURPLN","FX:EURUSD","FX:USDJPY","FX:GBPUSD","###Krypto","BITSTAMP:BTCUSD","BITSTAMP:ETHUSD"],"ru":["MOEX:IMOEX","MOEX:RTSI","TVC:SPX","TVC:NDQ","###Акции","MOEX:SBER","MOEX:GAZP","MOEX:LKOH","MOEX:VTBR","###Фьючерсы","MOEX:BR1!","MOEX:RI1!","MOEX:GD1!","###Валюты","MOEX:USDRUB_TOM","MOEX:EURRUB_TOM","FX:EURUSD","FX:GBPUSD","###Криптовалюты","BITSTAMP:BTCUSD","BITSTAMP:ETHUSD","BITSTAMP:XRPUSD","BITSTAMP:LTCUSD"],"sv_SE":["OMXSTO:OMXSPI","TVC:SPX","TVC:NDX","CURRENCYCOM:UK100","TVC:VIX","###Aktier","OMXSTO:VOLV_A","OMXSTO:ATCO_A","OMXSTO:INVE_A","NASDAQ:AAPL","NASDAQ:TSLA","###Terminer","TVC:USOIL","TVC:UKOIL","TVC:GOLD","###Valutor","FX:USDSEK","FX:EURSEK","FX:EURUSD","FX:USDJPY","###Krypto","BITSTAMP:BTCUSD","BITSTAMP:BTCEUR","BITSTAMP:ETHUSD"],"th_TH":["SET:SET","SET:SET50","TVC:SPX","TVC:NDX","TVC:VIX","###หุ้น","SET:AOT","SET:CPALL","SET:PTT","NASDAQ:AAPL","NASDAQ:TSLA","###ฟิวเจอร์","TVC:USOIL","TVC:GOLD","TVC:SILVER","###Forex","FX:EURUSD","FX:GBPUSD","FX:USDJPY","###คริปโต","BITKUB:BTCTHB","BITSTAMP:BTCUSD","BINANCE:ETHUSDT"],"tr":["BIST:XU100","TVC:SPX","TVC:DAX","FX_IDC:XAUTRY","TVC:VIX","###Hisse Senetleri","BIST:THYAO","BIST:ASELS","BIST:TUPRS","NASDAQ:AAPL","NASDAQ:TSLA","###Vadeliler","TVC:USOIL","TVC:GOLD","TVC:SILVER","###Döviz","FX:USDTRY","FX:EURTRY","FX:EURUSD","FX:GBPUSD","FX:USDJPY","###Kripto","BITFINEX:BTCTRY","BITSTAMP:BTCUSD","BITSTAMP:ETHUSD","BITSTAMP:XRPUSD"],"uk":["TVC:UKX","TVC:SPX","TVC:NDX","CBOE:VIX","TVC:DXY","###Stocks","LSE:LLOY","LSE:BARC","LSE:BP.","NASDAQ:AAPL","NASDAQ:TSLA","###Futures","OANDA:XAUUSD","TVC:USOIL","CURRENCYCOM:US30","###Forex","FX:GBPUSD","FX:EURUSD","FX:GBPJPY","###Crypto","BITSTAMP:BTCUSD","BITSTAMP:BTCGBP","BITSTAMP:ETHUSD","BITSTAMP:XRPUSD"],"vi_VN":["HOSE:VNINDEX","HNX:HNXINDEX","TVC:SPX","TVC:NDX","TVC:VIX","###Tiền điện tử","BITSTAMP:BTCUSD","BINANCE:BTCUSDT","BITSTAMP:ETHUSD","###Cổ phiếu","HOSE:HPG","HOSE:VCB","HOSE:FPT","NASDAQ:AAPL","NASDAQ:TSLA","###Ngoại hối","FX:EURUSD","FX:GBPUSD","FX:USDJPY","###Hợp đồng Tương lai","TVC:USOIL","TVC:UKOIL","TVC:GOLD"],"zh_CN":["SSE:000001","SZSE:399106","TVC:HSI","TVC:SPX","TVC:DXY","###股票","HKEX:700","HKEX:9988","SSE:600519","NASDAQ:AAPL","NASDAQ:TSLA","###期货","TVC:GOLD","TVC:SILVER","TVC:USOIL","TVC:UKOIL","###外汇","FX:EURUSD","FX:GBPUSD","FX:USDJPY","FX_IDC:USDCNY","###加密货币","BITSTAMP:BTCUSD","BINANCE:BTCUSDT","BITSTAMP:ETHUSD"],"zh_TW":["TWSE:TAIEX","TVC:HSI","TVC:SPX","TVC:NDX","TVC:VIX","###股票","TWSE:2330","TWSE:0050","HKEX:700","NASDAQ:AAPL","NASDAQ:TSLA","###期貨","TVC:USOIL","TVC:GOLD","HKEX:HSI1!","###外匯","FX:EURUSD","FX:GBPUSD","FX:USDJPY","###加密貨幣","BITSTAMP:BTCUSD","BINANCE:BTCUSDT","BITSTAMP:ETHUSD"]}');
            d(495046);
            class h {
                constructor(e) {
                    this._deletedSymbolsList = new a.DeletedSymbolsList, this.update(e)
                }
                update(e) {
                    const {
                        isAuthenticated: t
                    } = e;
                    var d;
                    this._current = t ? n : new o(null !== (d = l[window.locale]) && void 0 !== d ? d : l.default)
                }
                getCustomWatchLists() {
                    return this._current.getCustomWatchLists().then((e => {
                        const t = [...e],
                            d = this._deletedSymbolsList.getList();
                        return d && t.push(d), t
                    }))
                }
                createWatchList(e) {
                    if ((0, a.isDeletedSymbolsList)(e.id)) {
                        this._deletedSymbolsList.createList(e);
                        const t = this._deletedSymbolsList.getList();
                        return Promise.resolve(t)
                    }
                    return this._current.createWatchList(e)
                }
                putWatchList(e) {
                    if ((0, a.isDeletedSymbolsList)(e.id)) {
                        const e = this._deletedSymbolsList.getList();
                        if (e) return Promise.resolve(e)
                    }
                    return this._current.putWatchList(e)
                }
                removeWatchList(e) {
                    var t;
                    return (0, a.isDeletedSymbolsList)(e.id) ? (null === (t = this._deletedSymbolsList) || void 0 === t || t.removeList(), Promise.resolve()) : this._current.removeWatchList(e)
                }
                renameWatchList(e, t) {
                    if ((0, a.isDeletedSymbolsList)(e.id)) {
                        const e = this._deletedSymbolsList.getList();
                        if (e) return Promise.resolve(e.name)
                    }
                    return this._current.renameWatchList(e, t)
                }
                replaceSymbols(e, t) {
                    if ((0, a.isDeletedSymbolsList)(e.id)) {
                        this._deletedSymbolsList.replaceSymbols(t);
                        const e = this._deletedSymbolsList.getList();
                        return Promise.resolve(e)
                    }
                    return this._current.replaceSymbols(e, t)
                }
                addSymbols(e, t) {
                    if ((0, a.isDeletedSymbolsList)(e.id)) {
                        this._deletedSymbolsList.addSymbols(t);
                        const e = this._deletedSymbolsList.getList();
                        return e ? Promise.resolve(e.symbols) : Promise.resolve([])
                    }
                    return this._current.addSymbols(e, t)
                }
                removeSymbols(e, t) {
                    if ((0, a.isDeletedSymbolsList)(e.id)) {
                        this._deletedSymbolsList.removeSymbols(t);
                        const e = this._deletedSymbolsList.getList();
                        return e ? Promise.resolve(e.symbols) : Promise.resolve([])
                    }
                    return this._current.removeSymbols(e, t)
                }
                setActive(e) {
                    return (0, a.isDeletedSymbolsList)(e) ? (this._deletedSymbolsList.setIsActive(!0), (0, c.isDesktopWatchlistAvailable)(window.TVD) && window.TVD.onActiveWatchlistIdChange(e), Promise.resolve()) : (this._deletedSymbolsList.getIsActive() && this._deletedSymbolsList.setIsActive(!1), (0, c.isDesktopWatchlistAvailable)(window.TVD) && window.TVD.onActiveWatchlistIdChange(e), this._current.setActive(e))
                }
                async getActive() {
                    var e, t;
                    const d = (0, s.isDesktopApp)() ? await (null === (t = null === (e = window.TVD) || void 0 === e ? void 0 : e.getActiveWatchlistId) || void 0 === t ? void 0 : t.call(e)) : void 0;
                    if (!d && this._deletedSymbolsList.getIsActive() || (0, a.isDeletedSymbolsList)(d)) {
                        const e = this._deletedSymbolsList.getList();
                        if (e) return Promise.resolve(e)
                    }
                    return this._current.getActive()
                }
                changeDescription(e, t) {
                    return this._current.changeDescription(e, t)
                }
            }

            function f(e) {
                const t = new h({
                    chartApiInstance: e,
                    isAuthenticated: window.is_authenticated
                });
                return window.loginStateChange.subscribe(t, (() => {
                    t.update({
                        chartApiInstance: e,
                        isAuthenticated: window.is_authenticated
                    })
                })), (0, u.registerService)(i.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE, t), () => {
                    window.loginStateChange.unsubscribeAll(t), (0, u.unregisterService)(i.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE)
                }
            }
        },
        261309: (e, t, d) => {
            "use strict";
            d.d(t, {
                SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE: () => i
            });
            const i = {
                id: "SymbolListRepositoryBackend"
            }
        },
        892093: (e, t, d) => {
            "use strict";
            d.r(t), d.d(t, {
                getLogoUrlsHook: () => o,
                removeUsdAndStableCoinFromCryptoPairLogos: () => a,
                resolveLogoUrls: () => u
            });
            var i = d(849204);
            const n = JSON.parse('["XTVCUSDT","XTVCDAI","XTVCBUSD","XTVCTUSD","XTVCUSDC","XTVCDGX","XTVCHUSD"]'),
                r = (0, i.getLogoUrlResolver)();

            function u(e, t = i.LogoSize.Medium) {
                const d = e.logoid,
                    n = e["base-currency-logoid"],
                    u = e["currency-logoid"],
                    o = d && r.getSymbolLogoUrl(d, t);
                if (o) return [o];
                const a = n && r.getSymbolLogoUrl(n, t),
                    s = u && r.getSymbolLogoUrl(u, t);
                return a && s ? [a, s] : a ? [a] : s ? [s] : []
            }

            function o(e, t) {
                let d = !1;
                return (i, n, r) => {
                    const o = i["currency-logoid"] && i["base-currency-logoid"];
                    if (!d && (i.logoid || o || r)) {
                        d = !0;
                        const n = a(u({
                            logoid: i.logoid,
                            "base-currency-logoid": i["base-currency-logoid"],
                            "currency-logoid": i["currency-logoid"]
                        }, t));
                        e(n)
                    }
                }
            }

            function a(e) {
                return 2 !== e.length ? e : function(e) {
                    return e.some((e => s(e)))
                }(e) && ! function(e) {
                    return e.some((e => e.includes("country") && !s(e)))
                }(e) ? e.filter((e => !s(e))) : function(e) {
                    return e.some((e => l(e)))
                }(e) && function(e) {
                    return e.some((e => c(e)))
                }(e) ? e.filter((e => c(e))) : e
            }

            function s(e) {
                return e.includes("country/US")
            }

            function c(e) {
                return e.includes("crypto") && !l(e)
            }

            function l(e) {
                return n.some((t => e.includes(t)))
            }
        },
        18182: (e, t, d) => {
            "use strict";
            d.d(t, {
                MatchMedia: () => n
            });
            var i = d(50959);
            class n extends i.PureComponent {
                constructor(e) {
                    super(e), this._handleChange = () => {
                        this.forceUpdate()
                    }, this.state = {
                        query: window.matchMedia(this.props.rule)
                    }
                }
                componentDidMount() {
                    this._subscribe(this.state.query)
                }
                componentDidUpdate(e, t) {
                    this.state.query !== t.query && (this._unsubscribe(t.query), this._subscribe(this.state.query))
                }
                componentWillUnmount() {
                    this._unsubscribe(this.state.query)
                }
                render() {
                    return this.props.children(this.state.query.matches)
                }
                static getDerivedStateFromProps(e, t) {
                    return e.rule !== t.query.media ? {
                        query: window.matchMedia(e.rule)
                    } : null
                }
                _subscribe(e) {
                    e.addListener(this._handleChange)
                }
                _unsubscribe(e) {
                    e.removeListener(this._handleChange)
                }
            }
        },
        696828: (e, t, d) => {
            "use strict";
            var i = d(495046),
                n = [{
                    d: "E-Mini S&P 500",
                    t: "ES"
                }, {
                    d: "E-Mini Nasdaq 100",
                    t: "NQ"
                }, {
                    d: "Gold",
                    t: "GC"
                }, {
                    d: "Silver",
                    t: "SI"
                }, {
                    d: "Crude Oil WTI",
                    t: "CL"
                }, {
                    d: "Natural Gas",
                    t: "NG"
                }, {
                    d: "Australian Dollar",
                    t: "6A"
                }, {
                    d: "Australian Dollar (Floor)",
                    t: "AD"
                }, {
                    d: "Euro FX",
                    t: "6E"
                }, {
                    d: "Euro FX (Floor)",
                    t: "EC"
                }, {
                    d: "Corn",
                    t: "ZC"
                }, {
                    d: "Corn (Floor)",
                    t: "C"
                }, {
                    d: "Eurodollar",
                    t: "GE"
                }, {
                    d: "Eurodollar (Floor)",
                    t: "ED"
                }],
                r = function() {
                    var e = [{
                        pattern: "(",
                        ctor: u
                    }, {
                        pattern: ")",
                        ctor: o
                    }, {
                        pattern: "+",
                        ctor: s
                    }, {
                        pattern: "-",
                        ctor: c
                    }, {
                        pattern: "*",
                        ctor: l
                    }, {
                        pattern: "/",
                        ctor: h
                    }, {
                        pattern: "^",
                        ctor: f
                    }, {
                        pattern: /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
                        ctor: p
                    }, {
                        pattern: /\./,
                        ctor: C
                    }, {
                        pattern: i.enabled("charting_library_base") ? /[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF^][a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!:.&]*|'.+?'/ : /[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF][a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&]*|'.+?'/,
                        ctor: m
                    }, {
                        pattern: /'[^']*/,
                        ctor: v
                    }, {
                        pattern: /[\0-\x20\s]+/,
                        ctor: r
                    }];

                    function t(e, t) {
                        var d = function() {};
                        return d.prototype = t.prototype, e.prototype = new d, e
                    }

                    function d() {}

                    function r(e) {
                        this.value = e
                    }

                    function u() {}

                    function o() {}

                    function a() {}

                    function s() {}

                    function c() {}

                    function l() {}

                    function h() {}

                    function f() {}
                    d.prototype.toString = function() {
                        return this.value
                    }, t(r, d), t(u, d), u.prototype.value = "(", t(o, d), o.prototype.value = ")", t(a, d), t(s, a), s.prototype.value = "+", s.prototype.precedence = 0, s.prototype.commutative = !0, t(c, a), c.prototype.value = "-", c.prototype.precedence = 0, c.prototype.commutative = !1, t(l, a), l.prototype.value = "*", l.prototype.precedence = 1, l.prototype.commutative = !0, t(h, a), h.prototype.value = "/", h.prototype.precedence = 1, h.prototype.commutative = !1, t(f, a), f.prototype.value = "^", f.prototype.precedence = 2, f.prototype.commutative = !1;
                    var g = /^'?(?:([A-Z0-9_]+):)?(.*?)'?$/i,
                        S = /[+\-/*]/;

                    function m(e) {
                        this.value = e
                    }

                    function p(e) {
                        this.value = e
                    }

                    function b(e) {
                        this.value = e
                    }

                    function v() {
                        m.apply(this, arguments)
                    }

                    function C() {
                        p.apply(this, arguments)
                    }
                    t(m, d), m.prototype.toString = function() {
                        if (this.hasOwnProperty("_ticker")) {
                            var e = S.test(this._ticker) ? "'" : "";
                            return e + (this._exchange ? this._exchange + ":" : "") + this._ticker + e
                        }
                        return this.value
                    }, m.prototype.parse = function() {
                        var e = g.exec(this.value);
                        e[1] && (this._exchange = e[1]), this._ticker = e[2]
                    }, m.prototype.parseAsFutures = function() {
                        this.hasOwnProperty("_ticker") || this.parse();
                        for (var e = function(e) {
                                return n.some((function(t) {
                                    return t.t === e
                                }))
                            }, t = 2; t >= 1; --t) {
                            var d = this._ticker.slice(0, t);
                            if (e(d)) {
                                this._root = d, this._contract = this._ticker.slice(t);
                                break
                            }
                        }
                    }, m.prototype.exchange = function(e) {
                        if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._exchange;
                        null == e ? delete this._exchange : this._exchange = e + ""
                    }, m.prototype.ticker = function(e) {
                        if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._ticker;
                        null == e ? delete this._ticker : this._ticker = e + "", delete this._root, delete this._contract
                    }, m.prototype.root = function(e) {
                        if (this.hasOwnProperty("_root") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
                        null == e ? delete this._root : (this._root = e + "", this._root && (this._ticker = this._root + (this._contract || "")))
                    }, m.prototype.contract = function(e) {
                        if (this.hasOwnProperty("_contract") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
                        null == e ? delete this._contract : (this._contract = e + "", this._root && (this._ticker = this._root + this._contract))
                    }, t(p, d), p.prototype.toString = function() {
                        return this.hasOwnProperty("_normalizedValue") ? this._normalizedValue : this.value
                    }, p.prototype.parse = function() {
                        this._normalizedValue = this.value.replace(/^0+|\.0*$/g, "").replace(/(\.\d*?)0+$/, "$1").replace(/^(\.|$)/, "0$1")
                    }, b.prototype.toString = function() {
                        return this.value
                    }, t(v, m), v.prototype.isIncomplete = !0, v.prototype.incompleteSuggest = function() {
                        if ("'" !== this.value) return String("'")
                    }, t(C, p), C.prototype.isIncomplete = !0;
                    var _ = new RegExp(e.map((function(e) {
                        return "(" + ("string" == typeof e.pattern ? e.pattern.replace(/[\^$()[\]{}*+?|\\]/g, "\\$&") : e.pattern.source) + ")"
                    })).concat(".").join("|"), "g");

                    function T(t, d) {
                        var i, n = [];
                        e: for (; i = _.exec(t);) {
                            for (var u = e.length; u--;)
                                if (i[u + 1]) {
                                    if (e[u].ctor) {
                                        var o = new e[u].ctor(i[u + 1]);
                                        o._offset = i.index, n.push(o)
                                    }
                                    continue e
                                }
                            var a = new b(i[0]);
                            a._offset = i.index, n.push(a)
                        }
                        if (d && d.recover) {
                            var s;
                            for (u = n.length; u--;) {
                                var c = n[u];
                                if (c instanceof p || c instanceof m) {
                                    if (void 0 !== s) {
                                        var l = new m(""),
                                            h = n.splice(u, s - u + 1, l);
                                        l.value = h.map((function(e) {
                                            return e.value
                                        })).join("")
                                    }
                                    s = u
                                } else c instanceof r || (s = void 0)
                            }
                        }
                        return n
                    }

                    function y(e) {
                        for (var t = [], d = 0; d < e.length; d++) e[d] instanceof r || t.push(e[d]);
                        return t
                    }

                    function w(e) {
                        e = y(e);
                        for (var t, d = [], i = [], n = 0; n < e.length; n++) {
                            var r = e[n];
                            if (r instanceof a) i.length && i[i.length - 1].minPrecedence > r.precedence && (i[i.length - 1].minPrecedence = r.precedence);
                            else if (r instanceof u) i.push(t = {
                                minPrecedence: 1 / 0,
                                openBraceIndex: n
                            });
                            else if (r instanceof o) {
                                var s = e[(t = i.pop()).openBraceIndex - 1],
                                    c = e[n + 1];
                                c instanceof a && !(c.precedence <= t.minPrecedence) || !(!(s instanceof a) || s.precedence < t.minPrecedence || s.precedence === t.minPrecedence && s.commutative) || (d.unshift(t.openBraceIndex), d.push(n), i.length && i[i.length - 1].minPrecedence > t.minPrecedence && (i[i.length - 1].minPrecedence = t.minPrecedence))
                            }
                        }
                        for (n = d.length; n--;) e.splice(d[n], 1);
                        return e
                    }

                    function E(e) {
                        if ("string" != typeof e) throw new TypeError("expression must be a string");
                        return (e = T(e)).filter((function(e) {
                            return e instanceof m
                        })).map((function(e) {
                            return e.exchange()
                        })).filter((function(e) {
                            return e
                        }))
                    }

                    function A(e) {
                        return 1 !== (e = E(e)).length ? null : e[0]
                    }

                    function D(e, t) {
                        return (e = E(e)).some((function(e) {
                            return t.includes((e || "").toUpperCase())
                        }))
                    }

                    function P(e) {
                        return e.join("")
                    }
                    return {
                        tokenize: T,
                        validate: function(e) {
                            if (i.enabled("charting_library_base")) return {
                                currentState: "var"
                            };
                            for (var t = "init", d = "var", n = t, s = {
                                    warnings: [],
                                    errors: [],
                                    isEmpty: !0
                                }, c = [], l = 0; l < e.length; l++) {
                                if (!((f = e[l]) instanceof r)) {
                                    if (delete s.isEmpty, f.isIncomplete) {
                                        var h = {
                                            status: "incomplete",
                                            reason: "incomplete_token",
                                            offset: f._offset,
                                            token: f
                                        };
                                        if (f.incompleteSuggest && (h.recover = {
                                                append: f.incompleteSuggest()
                                            }), s.warnings.push(h), l !== e.length - 1) {
                                            h.status = "error";
                                            continue
                                        }
                                    }
                                    if (f instanceof m || f instanceof p) {
                                        if (n === d) {
                                            s.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: f._offset,
                                                token: f
                                            });
                                            continue
                                        }
                                        n = d
                                    } else if (f instanceof a) {
                                        if (n !== d) {
                                            s.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: f._offset,
                                                token: f
                                            });
                                            continue
                                        }
                                        n = "operator"
                                    } else if (f instanceof u) {
                                        if (n === d) {
                                            s.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: f._offset,
                                                token: f
                                            });
                                            continue
                                        }
                                        c.push(f), n = t
                                    } else if (f instanceof o) {
                                        if (n !== d) {
                                            s.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: f._offset,
                                                token: f
                                            });
                                            continue
                                        }
                                        c.pop() || s.errors.push({
                                            status: "error",
                                            reason: "unbalanced_brace",
                                            offset: f._offset,
                                            token: f,
                                            recover: {
                                                prepend: new u
                                            }
                                        }), n = d
                                    } else f instanceof b && s.errors.push({
                                        status: "error",
                                        reason: "unparsed_entity",
                                        offset: f._offset,
                                        token: f
                                    })
                                }
                            }
                            for (s.braceBalance = c.length, n !== d && s.warnings.push({
                                    status: "incomplete"
                                }); c.length;) {
                                var f;
                                h = {
                                    status: "incomplete",
                                    reason: "unbalanced_brace",
                                    offset: (f = c.pop())._offset,
                                    token: f
                                };
                                n === d && (h.recover = {
                                    append: new o
                                }), s.warnings.push(h)
                            }
                            return s.currentState = n, 0 === s.warnings.length && delete s.warnings, 0 === s.errors.length && delete s.errors, s
                        },
                        factorOutBraces: w,
                        normalizeTokens: function(e) {
                            for (var t = 0; t < e.length; t++) e[t].parse && e[t].parse();
                            return e
                        },
                        flip: function(e) {
                            var t = function(e) {
                                for (var t, d = 0, i = 1, n = 2, s = 3, c = d, l = 0, f = 0; f < e.length; f++) {
                                    var g = e[f];
                                    if (!(g instanceof r)) switch (c) {
                                        case d:
                                            if (!(g instanceof p && 1 == +g.value)) return !1;
                                            c = i;
                                            break;
                                        case i:
                                            if (!(c === i && g instanceof h)) return !1;
                                            c = n, t = f + 1;
                                            break;
                                        case n:
                                            if (g instanceof u) c = s, l = 1;
                                            else if (g instanceof a) return !1;
                                            break;
                                        case s:
                                            g instanceof u ? l++ : g instanceof o && --l <= 0 && (c = n)
                                    }
                                }
                                return e.slice(t)
                            }(e);
                            return w(t || [new p("1"), new h, new u].concat(e).concat(new o))
                        },
                        hasBatsSymbols: function(e) {
                            return D(e, ["BATS"])
                        },
                        hasEodSymbols: function(e) {
                            return (e = A(e)) && -1 !== e.toUpperCase().indexOf("_EOD")
                        },
                        hasChxjpySymbols: function(e) {
                            return D(e, ["CHXJPY"])
                        },
                        hasFreeDelaySymbols: function(e) {
                            return D(e, pro.getProductsByType(pro.PRODUCT_TYPES.exchange).map((function(e) {
                                return e.exchange.toUpperCase() + "_DLY"
                            })))
                        },
                        getExchange: A,
                        getExchanges: E,
                        isExchange: function(e, t) {
                            return !!(e = A(e)) && e.substring(0, t.length) === t
                        },
                        SymbolToken: m,
                        IncompleteSymbolToken: v,
                        NumberToken: p,
                        BinaryOperatorToken: a,
                        OpenBraceToken: u,
                        CloseBraceToken: o,
                        ticker: function(e) {
                            return new m(e).ticker()
                        },
                        shortName: function(e) {
                            if ("string" != typeof e) throw new TypeError("expression must be a string");
                            var t = w(y(T(e)));
                            return t.forEach((function(e) {
                                e instanceof m && e.exchange(null)
                            })), P(t)
                        },
                        normalize: function(e) {
                            if ("string" != typeof e) throw new TypeError("expression must be a string");
                            return P(w(y(T(e))))
                        }
                    }
                }();
            e.exports = r
        },
        801193: (e, t, d) => {
            "use strict";
            var i;
            d.d(t, {
                    HeaderToolbarComponentIds: () => i
                }),
                function(e) {
                    e.SymbolSearch = "header-toolbar-symbol-search", e.Intervals = "header-toolbar-intervals", e.ChartStyles = "header-toolbar-chart-styles", e.Compare = "header-toolbar-compare", e.Indicators = "header-toolbar-indicators", e.StudyTemplates = "header-toolbar-study-templates", e.Dropdown = "header-toolbar-dropdown", e.Alerts = "header-toolbar-alerts", e.Layouts = "header-toolbar-layouts", e.SaveLoad = "header-toolbar-save-load", e.UndoRedo = "header-toolbar-undo-redo", e.Properties = "header-toolbar-properties", e.QuickSearch = "header-toolbar-quick-search", e.PublishDesktop = "header-toolbar-publish-desktop", e.PublishMobile = "header-toolbar-publish-mobile", e.Fullscreen = "header-toolbar-fullscreen", e.Screenshot = "header-toolbar-screenshot", e.Replay = "header-toolbar-replay", e.Financials = "header-toolbar-financials", e.StartTrial = "header-toolbar-start-trial"
                }(i || (i = {}))
        },
        159935: (e, t, d) => {
            "use strict";
            d.r(t), d.d(t, {
                BacktestingStrategyDispatcher: () => s
            });
            var i = d(62802),
                n = d(869403),
                r = d.n(n),
                u = d(357696),
                o = d(784093);
            var a = d(76797);
            class s {
                constructor(e) {
                    this._chartWidgetCollection = null, this._chartWidgets = [], this._model = null, this._activeChartChanged = !1, this._activeChartWidget = null, this._strategies = [], this._modelStrategies = [], this._recentlyAddedStrategy = null, this._ready = (0, a.createDeferredPromise)(), this._filled = (0, a.createDeferredPromise)(), this._change = new(r()), this._updateVisibleStrategy = () => {
                            const e = this._modelStrategies.filter((e => e.isVisible()));
                            this._change.fire(this._modelStrategies.slice(), e, this._activeChartChanged), this._ready.resolve(), e.length && this._filled.resolve()
                        },
                        this._initModel = async e => {
                            const t = e.model(),
                                d = await this._getChartModelStrategySources(t);
                            if (d.length && !t.activeStrategySource().value()) {
                                const e = i.getValue("backtesting.lastStrategySelectedScriptIdPart");
                                let t;
                                if (e)
                                    for (let i = 0; i < d.length; i++)
                                        if (d[i].metaInfo().scriptIdPart === e) {
                                            t = d[i];
                                            break
                                        }
                                t || (t = d[d.length - 1]), this.setActiveStrategy(t, this._model)
                            }
                        }, this._applyModel = e => {
                            e !== this._model && (this._model && this._model.model().strategySourcesChange().unsubscribe(null, this._onStrategiesChange), this._strategies = [], this._model = e, this._model.model().strategySourcesChange().subscribe(null, this._onStrategiesChange)), this._onStrategiesChange()
                        }, this._onStrategiesChange = () => {
                            clearTimeout(this._updateToId), this._updateToId = setTimeout(this._updateStrategies.bind(this), 100)
                        }, this._onActiveChartWidgetChange = e => {
                            var t, d;
                            this._model && (this._activeChartChanged = !0), e.hasModel() ? this._applyModel(e.model()) : (null === (d = null === (t = this._activeChartWidget) || void 0 === t ? void 0 : t.modelCreated()) || void 0 === d || d.unsubscribe(null, this._applyModel), e.modelCreated().subscribe(null, this._applyModel)), this._activeChartWidget = e
                        }, this._onLayoutChange = () => {
                            if (this._chartWidgetCollection) {
                                if (this._chartWidgets)
                                    for (const e of this._chartWidgets) e.modelCreated().unsubscribe(null, this._initModel);
                                this._chartWidgetCollection.getAll().forEach((e => {
                                    -1 === this._chartWidgets.indexOf(e) && (this._chartWidgets.push(e), e.hasModel() ? this._initModel(e.model()) : e.modelCreated().subscribe(null, this._initModel))
                                }))
                            }
                        }, this._setChartWidgetCollection(e, !0)
                }
                model() {
                    return this._model
                }
                chartWidgetCollection() {
                    return this._chartWidgetCollection ? this._chartWidgetCollection : null
                }
                ready() {
                    return this._ready.promise
                }
                change() {
                    return this._change
                }
                filled() {
                    return this._filled.promise
                }
                recentlyAddedStrategy() {
                    return this._recentlyAddedStrategy
                }
                strategies() {
                    return this._strategies
                }
                setActiveStrategy(e, t) {
                    const d = t && t.model() || null !== this._model && this._model.model();
                    d && (d.setActiveStrategySource(e), d.updateSource(e))
                }
                unsetActiveStrategy(e) {
                    const t = e && e.model() || this._model && this._model.model();
                    t && t.unsetActiveStrategySource()
                }
                destroy() {
                    var e, t;
                    this._chartWidgetCollection && (this._chartWidgetCollection.layout.unsubscribe(this._onLayoutChange), this._chartWidgetCollection.activeChartWidget.unsubscribe(this._onActiveChartWidgetChange), this._chartWidgetCollection = null), this._model && this._model.model().strategySourcesChange().unsubscribe(null, this._onStrategiesChange);
                    for (const e of this._modelStrategies) e.onIsActualIntervalChange().unsubscribe(this, this._updateVisibleStrategy);
                    if (this._chartWidgets)
                        for (const e of this._chartWidgets) e.modelCreated().unsubscribe(null, this._initModel);
                    null === (t = null === (e = this._activeChartWidget) || void 0 === e ? void 0 : e.modelCreated()) || void 0 === t || t.unsubscribe(null, this._applyModel), this._activeChartWidget = null, this._modelStrategies = [], this._strategies = [], this._model = null, this._chartWidgets = [], this._recentlyAddedStrategy = null
                }
                _setChartWidgetCollection(e, t) {
                    (e && e !== this._chartWidgetCollection || !0 === t) && (this._chartWidgetCollection && (this._chartWidgetCollection.layout.unsubscribe(this._onLayoutChange), this._chartWidgetCollection.activeChartWidget.unsubscribe(this._onActiveChartWidgetChange)), this._chartWidgetCollection = e, this._chartWidgetCollection.layout.subscribe(this._onLayoutChange, {
                        callWithLast: !0
                    }), this._chartWidgetCollection.activeChartWidget.subscribe(this._onActiveChartWidgetChange, {
                        callWithLast: !0
                    }))
                }
                _isStrategySource(e) {
                    var t;
                    let d;
                    return "metaInfo" in e ? d = e.metaInfo() : e instanceof u.StudyStub && (d = e.state(!0) && (null === (t = e.state(!0)) || void 0 === t ? void 0 : t.metaInfo)), Boolean(d && d.isTVScriptStrategy)
                }
                async _getChartModelStrategySources(e) {
                    return new Promise((t => {
                        const d = {},
                            i = {},
                            n = e.dataSources();
                        let r;
                        for (let e = 0; e < n.length; e++) r = n[e], this._isStrategySource(r) && (r instanceof o.StudyStrategy ? d[r.id()] = r : r instanceof u.StudyStub && (i[r.id()] = r));

                        function a(e) {
                            return Object.keys(e).map((t => e[t]))
                        }
                        Object.keys(i).length ? e.strategySourcesChange().subscribe(null, (function n() {
                            let r, u;
                            for (let t = 0; t < e.strategySources().length; t++) r = e.strategySources()[t], u = r.id(), i[u] && (d[u] = r, delete i[u]);
                            Object.keys(i).length || (e.strategySourcesChange().unsubscribe(null, n), t(a(d)))
                        })) : t(a(d))
                    }))
                }
                _getRecentlyAddedStrategy(e, t) {
                    return this._activeChartChanged ? null : e.length - t.length == 1 ? e[e.length - 1] : null
                }
                async _updateStrategies() {
                    if (this._recentlyAddedStrategy = null, null === this._model) return;
                    for (const e of this._modelStrategies) e.onIsActualIntervalChange().unsubscribe(this, this._updateVisibleStrategy);
                    this._modelStrategies = this._model.model().strategySources();
                    for (const e of this._modelStrategies) e.onIsActualIntervalChange().subscribe(this, this._updateVisibleStrategy);
                    const e = this._modelStrategies.filter((e => e.properties().childs().visible.value() && e.isVisible())),
                        t = this._strategies;
                    this._strategies = e && e.slice() || [];
                    const d = this._getRecentlyAddedStrategy(e, t);
                    d ? (this._recentlyAddedStrategy = d, this._change.fire(t, this._strategies, this._activeChartChanged, d)) : this._change.fire(t, this._strategies, this._activeChartChanged), this._activeChartChanged = !1, this._ready.resolve(), this._strategies.length && this._filled.resolve()
                }
            }
        },
        824379: (e, t, d) => {
            "use strict";
            d.d(t, {
                ensureSettings: () => c,
                getUserSettings: () => a,
                setUserSettings: () => s
            });
            var i = d(130551);
            const n = "chart.bottom-widgetbar";
            var r = d(62802),
                u = d.n(r);
            const o = {
                activeWidget: "screener",
                height: 320,
                mode: "minimized"
            };

            function a() {
                return u().getJSON(n)
            }

            function s(e) {
                u().setJSON(n, e)
            }

            function c(e, t = o) {
                if (!(0, i.isObject)(e)) return t;
                let d = t.activeWidget;
                (0, i.hasProperty)(e, "activeWidget") && function(e) {
                    if ("string" != typeof e) return !1;
                    return ["backtesting", "screener", "scripteditor", "paper_trading"].includes(e)
                }(e.activeWidget) && (d = e.activeWidget);
                let n = t.mode;
                (0, i.hasProperty)(e, "mode") && function(e) {
                    if ("string" != typeof e) return !1;
                    return ["minimized", "normal", "maximized"].includes(e)
                }(e.mode) && (n = e.mode);
                let r = t.height;
                return (0, i.hasProperty)(e, "height") && function(e) {
                    return "number" == typeof e && isFinite(e)
                }(e.height) && (r = e.height), {
                    activeWidget: d,
                    mode: n,
                    height: r
                }
            }
        },
        293965: (e, t, d) => {
            "use strict";
            d.d(t, {
                footerWidgetHeight: () => i
            });
            const i = 39
        },
        632354: (e, t, d) => {
            "use strict";
            d(108184), d(418147)
        },
        628065: (e, t, d) => {
            "use strict";
            var i = d(895370),
                n = (d(245847), d(621178), d(495046)),
                r = (d(16665), d(740026)),
                u = d(510013);
            class o extends u.ChunkLoader {
                _startLoading() {
                    return Promise.all([d.e(76049), d.e(544), d.e(88230), d.e(18619), d.e(81910), d.e(86256), d.e(7624), d.e(59333), d.e(91901), d.e(96972), d.e(75398), d.e(71140), d.e(85761), d.e(6092), d.e(64884), d.e(36720), d.e(54819), d.e(13249), d.e(68825), d.e(53795), d.e(105), d.e(47507), d.e(24091), d.e(54063), d.e(95248), d.e(41770), d.e(8009), d.e(8819), d.e(24013), d.e(44412), d.e(19776), d.e(33853), d.e(23084), d.e(83704), d.e(537), d.e(8580), d.e(73647), d.e(51573), d.e(64615), d.e(72688), d.e(13626), d.e(73824), d.e(19397), d.e(75925), d.e(9993), d.e(80509), d.e(51060)]).then(d.bind(d, 162586)).then((e => e.getToolSet()))
                }
            }
            var a = d(130618),
                s = d(259316),
                c = d(24958),
                l = d(62802),
                h = d.n(l),
                f = d(474474),
                g = d(477600),
                S = d(462282);
            class m extends u.ChunkLoader {
                constructor(e) {
                    super(), this._options = e, this._options.resizerBridge.negotiateWidth(this._calcWidgetBarWidth()), this._options.resizerBridge.container.value().appendChild((0, g.createStubElem)())
                }
                async _startLoading(e) {
                    const {
                        tradingPromise: t,
                        resizerBridge: d,
                        affectsLayout: i,
                        showWizardFn: n,
                        showCloseButton: r,
                        areShortcutsAvailable: u,
                        chartWidgetCollection: o,
                        settingsPrefix: a,
                        customization: s,
                        readonly: c,
                        configuration: l
                    } = this._options, [h, f] = await Promise.all([this._loadWidgetBar(), t]), g = null !== f ? {
                        tradingPanel: f.tradingPanel,
                        setDomPanelVisibility: f.setDomPanelVisibility.bind(f),
                        setOrderPanelVisibility: f.setOrderPanelVisibility.bind(f)
                    } : void 0;
                    if (null == e ? void 0 : e.aborted) throw (0, S.createAbortError)();
                    return new h({
                        resizerBridge: d,
                        affectsLayout: i,
                        showCloseButton: r,
                        showWizardFn: n,
                        areShortcutsAvailable: u,
                        chartWidgetCollection: o,
                        settingsPrefix: a,
                        customization: s,
                        readonly: c,
                        tradingPanelAccessor: g,
                        configuration: l
                    })
                }
                async _loadWidgetBar() {
                    return (await Promise.all([d.e(76049), d.e(20146), d.e(77085), d.e(58018), d.e(18619), d.e(81910), d.e(78707), d.e(96972), d.e(75398), d.e(36037), d.e(43082), d.e(63737), d.e(36720), d.e(24908), d.e(75667), d.e(5517), d.e(37908), d.e(27480), d.e(80529), d.e(49846), d.e(68825), d.e(97676), d.e(26024), d.e(19591), d.e(39683), d.e(74518), d.e(33599), d.e(79600), d.e(9725), d.e(52669), d.e(13871), d.e(58852), d.e(27488), d.e(99039), d.e(38184), d.e(69893), d.e(82744), d.e(84794), d.e(72278), d.e(95e3), d.e(26300), d.e(60307), d.e(35075), d.e(28906), d.e(49219), d.e(2491), d.e(98065), d.e(5952), d.e(20321), d.e(54876)]).then(d.bind(d, 377873))).WidgetBar
                }
                _calcWidgetBarWidth() {
                    const e = h().getJSON(`${this._options.settingsPrefix}.layout-settings`, {
                        settings: (0, f.getDefaultState)()
                    });
                    void 0 === e.settings.minimized && (e.settings.minimized = !n.enabled("show_right_widgets_panel_by_default"));
                    const t = n.enabled("widgetbar_tabs") ? 46 : 0;
                    return e.settings.minimized ? t : t + e.settings.width + 1
                }
            }
            var p = d(293965),
                b = d(824379);
            class v extends u.ChunkLoader {
                constructor(e) {
                    super(), this._opts = e;
                    const t = (0, b.ensureSettings)({
                            activeWidget: e.defaultActiveWidget,
                            mode: e.mode
                        }),
                        {
                            mode: d,
                            height: i
                        } = this._userSettings = (0,
                            b.ensureSettings)((0, b.getUserSettings)(), t),
                        n = this._opts.resizerBridge,
                        r = n.container.value();
                    switch (d) {
                        case "maximized":
                            n.negotiateHeight(n.availHeight.value());
                            break;
                        case "normal":
                            n.negotiateHeight(i + p.footerWidgetHeight);
                            break;
                        case "minimized":
                            n.negotiateHeight(p.footerWidgetHeight)
                    }
                    r.appendChild((0, g.createStubElem)())
                }
                _startLoading() {
                    return Promise.all([this._loadBottomWidgetbar(), this._opts.configBootloader.load()]).then((([e, t]) => new e({
                        resizerBridge: this._opts.resizerBridge,
                        chartWidgetCollection: this._opts.chartWidgetCollection,
                        backtestingStrategyDispatcher: this._opts.backtestingStrategyDispatcher,
                        studyMarket: this._opts.studyMarket,
                        widgets: this._opts.widgets,
                        config: t
                    }, this._userSettings)))
                }
                _loadBottomWidgetbar() {
                    return Promise.all([d.e(40283), d.e(14193)]).then(d.bind(d, 718226)).then((e => e.Bottomwidgetbar))
                }
            }
            var C = d(159935);
            class _ extends u.ChunkLoader {
                _startLoading() {
                    return Promise.all([d.e(76049), d.e(37205), d.e(85264), d.e(19108), d.e(39569), d.e(33709), d.e(32352), d.e(88230), d.e(18619), d.e(81910), d.e(86256), d.e(7624), d.e(59333), d.e(12275), d.e(33335), d.e(91901), d.e(78707), d.e(96972), d.e(83772), d.e(75398), d.e(71140), d.e(85761), d.e(33287), d.e(6092), d.e(64884), d.e(43082), d.e(63737), d.e(36720), d.e(54819), d.e(1428), d.e(1011), d.e(52701), d.e(85931), d.e(68825), d.e(50251), d.e(105), d.e(47507), d.e(66949), d.e(59302), d.e(54063), d.e(82098), d.e(10302), d.e(36812), d.e(95248), d.e(45639), d.e(62839), d.e(41770), d.e(56034), d.e(28955), d.e(20849), d.e(89619), d.e(69273), d.e(288), d.e(90149), d.e(27563), d.e(50500), d.e(37845), d.e(7723), d.e(84704), d.e(63594), d.e(59382), d.e(52669), d.e(20894), d.e(40642), d.e(75784), d.e(90133), d.e(86782), d.e(32486), d.e(51404), d.e(60533), d.e(69661), d.e(95997), d.e(60977), d.e(90262), d.e(18278), d.e(89768), d.e(49787), d.e(57135), d.e(25977), d.e(26300), d.e(30979), d.e(11857), d.e(25292), d.e(41060), d.e(49219), d.e(86584), d.e(48779), d.e(68985), d.e(90799), d.e(75925), d.e(65422), d.e(50186), d.e(84871), d.e(85588), d.e(41588), d.e(88800)]).then(d.bind(d, 789148)).then((e => e.getFullConfigSet()))
                }
            }
            class T extends u.ChunkLoader {
                constructor(e) {
                    super(), this._opts = e
                }
                _startLoading() {
                    return Promise.all([this._opts.bottomWidgetbarBootloader.load(), this._loadFooterWidget()]).then((([e, t]) => {
                        const {
                            resizerBridge: d
                        } = this._opts;
                        return new t(e.footerWidgetContainer(), d, e)
                    }))
                }
                _loadFooterWidget() {
                    return Promise.all([d.e(88230), d.e(7624), d.e(59333), d.e(38325), d.e(37707)]).then(d.bind(d, 781925)).then((e => e.FooterWidgetRenderer))
                }
            }
            var y = d(529306),
                w = d(292545),
                E = d.n(w),
                A = d(372006),
                D = d(138883),
                P = d(906125),
                B = d(564894),
                I = d(412611),
                L = d(930981),
                U = d(845297),
                O = d(650151),
                V = d(892093);

            function X(e) {
                return null == e ? "" : e > 0 ? `+${e}%` : e < 0 ? `−${Math.abs(e)}%` : "0%"
            }

            function N(e) {
                return null == e ? 0 : e > 0 ? 1 : e < 0 ? -1 : 0
            }

            function M(e, t) {
                return null == e ? "" : t.format(e)
            }
            const F = window.TVD ? window.TVD.setTitle : function(e) {
                const t = [];
                e.symbol && t.push(e.symbol), e.last && (t.push(e.last), e.changeSign && t.push(e.changeSign > 0 ? "▲" : "▼"), e.changePercent && t.push(e.changePercent), e.name && t.push(e.name)), 0 === t.length && t.push("New Chart"), document.title = t.join(" ")
            };
            class W {
                constructor(e) {
                    this._currentSeries = null, this._onLayoutChanged = e => {
                        this._rendererData.layout = e, this._updateView()
                    }, this._onNameChanged = e => {
                        this._rendererData.name = e, this._updateView()
                    }, this._updateView = () => {
                        F(this._rendererData)
                    }, this._onSymbolOrFormatterChanged = () => {
                        const e = (0, O.ensureNotNull)(this._currentSeries),
                            t = e.quotesProvider().quotes(),
                            d = {
                                logoid: null == t ? void 0 : t.logoid,
                                "currency-logoid": null == t ? void 0 : t["currency-logoid"],
                                "base-currency-logoid": null == t ? void 0 : t["base-currency-logoid"]
                            };
                        this._rendererData = {
                            name: this._rendererData.name,
                            layout: this._rendererData.layout,
                            symbol: e.symbol().replace(/\w+:/g, ""),
                            last: M(t && t.last_price, e.formatter()),
                            changePercent: X(t && t.change_percent),
                            changeSign: N(t && t.change_percent),
                            logoUrls: null !== t ? (0, V.removeUsdAndStableCoinFromCryptoPairLogos)((0, V.resolveLogoUrls)(d)) : []
                        }, this._updateView()
                    }, this._onQuoteData = (e, t) => {
                        const d = t.values,
                            i = d.change_percent,
                            n = d.last_price;
                        let r = !1;
                        if (void 0 !== i && (this._rendererData.changeSign = N(i), this._rendererData.changePercent = X(i), r = !0), void 0 !== n) {
                            const e = (0, O.ensureNotNull)(this._currentSeries);
                            this._rendererData.last = M(n, e.formatter()), r = !0
                        }
                        if (void 0 !== d.logoid || void 0 !== d["currency-logoid"] || void 0 !== d["base-currency-logoid"]) {
                            const e = {
                                logoid: d.logoid,
                                "currency-logoid": d["currency-logoid"],
                                "base-currency-logoid": d["base-currency-logoid"]
                            };
                            this._rendererData.logoUrls = (0, V.removeUsdAndStableCoinFromCryptoPairLogos)((0, V.resolveLogoUrls)(e)), r = !0
                        }
                        r && this._updateView()
                    }, this._onActiveChartChanged = () => {
                        this._unsubscribeFromCurrentSeriesEvents();
                        const e = this._chartWidgetCollection.activeChartWidget.value();
                        e.withModel(null, (() => {
                            this._chartWidgetCollection.activeChartWidget.value() === e && (this._currentSeries = e.model().mainSeries(), this._subscribeToCurrentSeriesEvents(), this._onSymbolOrFormatterChanged())
                        }))
                    }, this._chartWidgetCollection = e, this._rendererData = {
                        symbol: "",
                        last: "",
                        changeSign: 0,
                        changePercent: "",
                        name: this._chartWidgetCollection.metaInfo.name.value(),
                        layout: this._chartWidgetCollection.layout.value(),
                        logoUrls: []
                    }, this._chartWidgetCollection.layout.subscribe(this._onLayoutChanged), this._chartWidgetCollection.metaInfo.name.subscribe(this._onNameChanged), this._chartWidgetCollection.activeChartWidget.subscribe(this._onActiveChartChanged), this._onActiveChartChanged()
                }
                destroy() {
                    this._chartWidgetCollection.layout.unsubscribe(this._onLayoutChanged), this._chartWidgetCollection.metaInfo.name.unsubscribe(this._onNameChanged), this._chartWidgetCollection.activeChartWidget.unsubscribe(this._onActiveChartChanged), this._unsubscribeFromCurrentSeriesEvents(), this._currentSeries = null
                }
                _unsubscribeFromCurrentSeriesEvents() {
                    if (null !== this._currentSeries) {
                        this._currentSeries.formatterChanged().unsubscribeAll(this);
                        const e = this._currentSeries.quotesProvider();
                        e.quoteSymbolChanged().unsubscribeAll(this), e.quotesUpdate().unsubscribeAll(this)
                    }
                }
                _subscribeToCurrentSeriesEvents() {
                    if (null !== this._currentSeries) {
                        this._currentSeries.formatterChanged().subscribe(this, this._onSymbolOrFormatterChanged);
                        const e = this._currentSeries.quotesProvider();
                        e.quoteSymbolChanged().subscribe(this, this._onSymbolOrFormatterChanged), e.quotesUpdate().subscribe(this, this._onQuoteData)
                    }
                }
            }
            var R = d(892026),
                x = d(479164),
                z = d(797102),
                k = d(197578),
                G = d(624378),
                H = d(583912),
                Y = d(711565),
                K = d.n(Y),
                J = d(738964),
                j = d(175203),
                Q = d(226722),
                q = d(213128),
                $ = d(440135),
                Z = d(909740),
                ee = d(975774),
                te = d(588948),
                de = d(575089),
                ie = d(651391),
                ne = d(251954),
                re = d(75733),
                ue = d(777754);
            const oe = ue.t(null, void 0, d(539005));
            var ae = d(801193),
                se = d(638456),
                ce = d(298686),
                le = d(487381),
                he = d(164387);
            var fe = d(948850),
                ge = d(543502),
                Se = d(799786);
            var me = d(50959),
                pe = d(500962),
                be = d(83436),
                ve = d(18182),
                Ce = d(364366),
                _e = d(139308);

            function Te(e) {
                return me.createElement(ve.MatchMedia, {
                    rule: "screen and (max-width: 430px)"
                }, (e => me.createElement("div", {
                    className: _e.offlineBar
                }, me.createElement(be.Icon, {
                    className: _e.icon,
                    icon: Ce
                }), me.createElement("span", {
                    className: _e.text
                }, e ? ue.t(null, void 0, d(17806)) : ue.t(null, void 0, d(759592))))))
            }
            class ye {
                constructor(e) {
                    this._resizer = e, this._container = e.container.value()
                }
                show() {
                    this._resizer.negotiateHeight(30), pe.render(me.createElement(Te, null), this._container)
                }
                hide() {
                    pe.unmountComponentAtNode(this._container), this._resizer.negotiateHeight(0)
                }
            }
            var we = d(450726),
                Ee = d(667215),
                Ae = d(125226),
                De = d(778785),
                Pe = d(869403),
                Be = d.n(Pe),
                Ie = (d(632354), d(90523)),
                Le = d(760641),
                Ue = d(722329);
            var Oe = d(888778),
                Ve = d(758337),
                Xe = d(650969),
                Ne = d(710408);
            (0, i.addPerfMark)("main_chart.ExecuteStart"), (0, ge.registerSiteSymbolListBackend)(window.ChartApiInstance), (0, te.updateInitData)();
            const Me = (0, te.getInitData)(),
                Fe = Me.readOnly;
            const We = new Ie.Root(window),
                Re = new Le.ChartPage(We.allocate()),
                xe = Re.allocate({
                    areaName: "center"
                }),
                ze = new(E())({
                    resizerBridge: xe,
                    padding: 2,
                    content: Me.content,
                    readOnly: Me.readOnly,
                    saveChartEnabled: !0,
                    takeScreenshotEnabled: !0,
                    publishedChartsEnabled: !0,
                    widgetOptions: {
                        defSymbol: Me.defSymbol || (Me.content ? "" : l.getValue("editchart.model.symbol", window.DEFAULT_SYMBOL)),
                        defInterval: Me.defInterval || (Me.content ? "" : l.getValue("editchart.model.interval")),
                        defStyle: Me.defStyle || (Me.content ? "" : l.getValue("editchart.model.style")),
                        addToWatchlistEnabled: !0,
                        showFinancialsEnabled: !0,
                        propertyPagesEnabled: !0,
                        chartEventsEnabled: !0,
                        esdEnabled: !0,
                        newsEnabled: Ne.newsAvailableOnDevice,
                        continuousContractSwitchesEnabled: !0,
                        futuresContractExpirationEnabled: !0,
                        controlBarEnabled: !0,
                        addVolume: !0,
                        justCloned: Me.justCloned,
                        isDrawingToolbarVisible: s.isDrawingToolbarVisible,
                        lastPriceAnimationEnabled: !location.search.toLowerCase().includes("disablelastpriceanimation"),
                        crossHair: {
                            menuEnabled: !Me.readOnly
                        },
                        paneContextMenuEnabled: !Me.readOnly,
                        paneContextMenu: {
                            mainSeriesTrade: !Me.readOnly
                        },
                        currencyConversionEnabled: !0,
                        unitConversionEnabled: !0,
                        isSymbolAvailable: ie.isSymbolAvailable,
                        requestFallbackSymbol: ie.requestFallbackSymbol,
                        timeScaleWidget: {
                            contextMenuEnabled: !0,
                            timezoneMenuEnabled: !0,
                            priceAxisLabelsOptions: {
                                showLabels: !Me.readOnly
                            }
                        },
                        timeScale: {
                            preserveBarSpacing: !1,
                            lockVisibleTimeRangeOnResize: !1
                        },
                        legendWidgetEnabled: !0,
                        legendWidget: {
                            contextMenu: {
                                settings: n.enabled("show_chart_property_page"),
                                showOpenMarketStatus: !0
                            },
                            symbolMarkerEnabled: !0
                        },
                        goToDateEnabled: !0,
                        compareSymbols: we.defaultCompareSymbols
                    },
                    seriesControlBarEnabled: !Me.readOnly,
                    seriesControlBar: {
                        timeFramesWidgetEnabled: !0,
                        timeFramesWidget: {
                            goToDateEnabled: !0,
                            availableTimeFrames: de.availableTimeFrames
                        },
                        timeWidgetEnabled: !0,
                        timeWidget: {
                            timezoneMenuEnabled: !0
                        },
                        adjustForDividendsButtonEnabled: !0,
                        sessionIdButtonEnabled: !0,
                        backAdjustmentButtonEnabled: !0,
                        settlementAsCloseButtonEnabled: !0,
                        percentageScaleButtonEnabled: !0,
                        logScaleButtonEnabled: !0,
                        autoScaleButtonEnabled: !0,
                        fullscreenButtonEnabled: !0,
                        mobileChangeLayoutEnabled: se.CheckMobile.any()
                    },
                    metaInfo: Me.metaInfo,
                    globalEvents: !0,
                    mobileForceChartMaximizeEnabled: se.CheckMobile.any()
                });
            let ke = !1;
            ze.onAboutToBeDestroyed.subscribe(null, (() => {
                ke = !0
            }), !0);
            const Ge = (0, Ae.isFeatureEnabled)("more_branding");
            async function He() {
                if (Ge || !window.user || !window.user.is_pro) {
                    window.loginStateChange.unsubscribe(null, He);
                    const {
                        addBrandingSource: e
                    } = await Promise.all([d.e(21557), d.e(30187)]).then(d.bind(d, 510609));
                    e(ze)
                }
            }!Ge && window.user && window.user.is_pro ? window.loginStateChange.subscribe(null, He) : He(), n.enabled("alerts") && ((0, L.getChartAlertsFacade)().then((e => {
                e.setChartWidgetCollection(ze)
            })), d.e(20645).then(d.bind(d, 651094)).then((e => {
                e.initGlobalAlertsHotkeys(ze)
            })));
            const Ye = new(Be()),
                Ke = Fe ? null : new c.TradingBootloader({
                    resizerBridge: Re.allocate({
                        areaName: "tradingpanel"
                    }),
                    chartWidgetCollection: ze,
                    bottomWidgetBarSettled: Ye
                }).load();
            (0, I.createFavoriteDrawingToolbar)(), ze.readOnly() || (window.studyMarket = new q.StudyMarket(ze)), B.registerService(P.CHART_WIDGET_COLLECTION_SERVICE, ze); {
                const e = (0, Ee.subscriptionNotification)();
                e.on(Ee.SubscriptionEventType.Subscribe, (() => {
                    e.showChartNotification()
                })), e.on(Ee.SubscriptionEventType.Upgrade, (() => {
                    e.showChartNotification()
                }))
            }
            H.linking.bindToChartWidgetCollection(ze), A.SupportTicketData.setChartWidgetCollection(ze), window.scriptUpdater = new D.ScriptUpdater(ze), window._exposed_chartWidgetCollection = ze, Me.theme ? (0, Z.setTheme)(Me.theme) : (0, $.restoreTheme)(), window.saver = new U.ChartSaver(ze);
            const Je = new re.ChartChangesWatcher(ze, window.saver, ne),
                je = new x.FavoriteStudyTemplateService(Q.TVXWindowEvents, l),
                Qe = new z.SaveChartService(ze, window.saver);
            ze.setSaveChartService(Qe);
            const qe = new k.SharingChartService(!!Me.sharing_enabled, ze.metaInfo.uid.value(), ze.metaInfo.id.value()),
                $e = new G.LoadChartService(ze),
                Ze = new C.BacktestingStrategyDispatcher(ze),
                et = De.mobiletouch ? ["full"] : void 0;

            function tt(e) {
                if (!(e.target instanceof Element)) return;
                const t = document.getElementById(ae.HeaderToolbarComponentIds.PublishDesktop),
                    d = document.getElementById(ae.HeaderToolbarComponentIds.PublishMobile);
                if (t && t.contains(e.target) || d && d.contains(e.target)) return;
                const i = TradingView.bottomWidgetBar;
                i && i.turnOffMaximize()
            }
            const dt = new R.StudyTemplates({
                favoriteStudyTemplatesService: je,
                chartWidgetCollection: ze
            });
            window.TradingViewApi = new(K())({
                chartApiInstance: window.ChartApiInstance,
                chartWidgetCollection: ze,
                saveChartService: Qe,
                loadChartService: $e,
                sharingChartService: qe,
                studyMarket: window.studyMarket
            });
            const it = se.CheckMobile.any() ? void 0 : function() {
                    const e = () => {
                        const e = (0, B.service)(P.CHART_WIDGET_COLLECTION_SERVICE).activeChartWidget.value();
                        e.withModel(null, (() => {
                            Promise.all([d.e(76049), d.e(39569), d.e(50318), d.e(88230), d.e(18619), d.e(81910), d.e(86256), d.e(7624), d.e(59333), d.e(12275), d.e(33335), d.e(91901), d.e(78707), d.e(96972), d.e(83772), d.e(75398), d.e(71140), d.e(85761), d.e(6092), d.e(43082), d.e(63737), d.e(54819), d.e(1428), d.e(20187), d.e(1011), d.e(52701), d.e(51907), d.e(85931), d.e(68825), d.e(105), d.e(47507), d.e(59302), d.e(54063), d.e(82098), d.e(36812), d.e(95248), d.e(45639), d.e(89619), d.e(69273), d.e(288), d.e(27563), d.e(50500), d.e(37845), d.e(7723), d.e(8009), d.e(59382), d.e(67177), d.e(20894), d.e(52196), d.e(44412), d.e(75784), d.e(15602), d.e(21834), d.e(74935), d.e(80951), d.e(38567), d.e(26300), d.e(30979), d.e(29594), d.e(44250), d.e(49219), d.e(86584), d.e(90799), d.e(75925), d.e(50186), d.e(35883), d.e(91890), d.e(84478), d.e(58020), d.e(49961), d.e(59754)]).then(d.bind(d, 389726)).then((t => {
                                t.showGlobalSearchDialog(e)
                            }))
                        }))
                    };
                    return (0, Se.createGroup)({
                        desc: "GlobalSearch"
                    }).add({
                        desc: "Open",
                        hotkey: Se.Modifiers.Mod + 75,
                        handler: e
                    }), e
                }(),
                nt = new r.HeaderToolbarBootloader(new o, {
                    resizerBridge: Re.allocate({
                        areaName: "top"
                    }),
                    ideas: !0,
                    chartSaver: window.saver,
                    chartApiInstance: window.ChartApiInstance,
                    availableTimeFrames: de.availableTimeFrames,
                    allowedModes: et,
                    chartWidgetCollection: ze,
                    studyMarket: window.studyMarket,
                    studyTemplates: dt,
                    favoriteStudyTemplatesService: je,
                    saveChartService: Qe,
                    sharingChartService: qe,
                    loadChartService: $e,
                    chartChangesWatcher: Je,
                    onClick: tt,
                    openGlobalSearch: it
                }),
                rt = new(Be()),
                ut = new y.TopLeftButtonBootloader({
                    resizerBridge: Re.allocate({
                        areaName: "topleft"
                    }),
                    chartChangesWatcher: Je,
                    chartWidgetCollection: ze,
                    saveChartService: Qe,
                    sharingChartService: qe,
                    loadChartService: $e,
                    chartSaver: window.saver,
                    isSupportAvailable: Boolean(window.initData.is_support_available),
                    widgetbarSettled: rt
                }),
                ot = new a.DrawingToolbarBootloader({
                    resizerBridge: Re.allocate({
                        areaName: "left"
                    }),
                    chartWidgetCollection: ze,
                    readOnly: Fe,
                    onClick: tt,
                    widgetbarSettled: rt
                }),
                at = Re.allocate({
                    areaName: "right"
                }),
                st = new m({
                    chartWidgetCollection: ze,
                    resizerBridge: at,
                    affectsLayout: () => Re.affectsLayout("right"),
                    settingsPrefix: "widgetbar",
                    showCloseButton: !0,
                    showWizardFn: null,
                    areShortcutsAvailable: !0,
                    configuration: () => async function(e) {
                        const [t, {
                            ObjectTreeRenderer: i
                        }, {
                            DataWindowWidget: n
                        }] = await Promise.all([(0, Ue.configuration)(e), Promise.all([d.e(43082), d.e(87112)]).then(d.bind(d, 272833)), Promise.all([d.e(43082), d.e(87112)]).then(d.bind(d, 489071))]);
                        return t.ObjectTreeWidget = i, t.DataWindowWidget = n, t
                    }({
                        chartApiInstance: window.ChartApiInstance
                    }),
                    tradingPromise: Ke
                }),
                ct = new _,
                lt = Re.allocate({
                    areaName: "bottom"
                }),
                ht = new v({
                    resizerBridge: lt,
                    chartWidgetCollection: ze,
                    backtestingStrategyDispatcher: Ze,
                    studyMarket: window.studyMarket,
                    widgets: ["screener", Fe ? null : "scripteditor", "backtesting", Fe ? null : "paper_trading"].filter(Ve.notNull),
                    configBootloader: ct
                }),
                ft = new T({
                    resizerBridge: lt,
                    chartWidgetCollection: ze,
                    bottomWidgetbarBootloader: ht
                });

            function gt() {
                document.querySelectorAll(".loading-indicator").forEach((e => {
                    e.remove()
                }))
            }(async () => {
                const {
                    default: e
                } = await Promise.all([d.e(30697), d.e(88230), d.e(18619), d.e(7624), d.e(59333), d.e(71140), d.e(85761), d.e(6092), d.e(54819), d.e(68825), d.e(105), d.e(45639), d.e(288), d.e(8009), d.e(8819), d.e(44412), d.e(93272), d.e(79105), d.e(60977), d.e(15602), d.e(56879), d.e(43443), d.e(75514), d.e(29594), d.e(91622), d.e(91890), d.e(84478), d.e(27284), d.e(22306)]).then(d.t.bind(d, 194492, 23));
                ke || (window.lineToolPropertiesToolbar = new e(ze))
            })();
            const St = ze.activeChartWidget.value();
            let mt = null;

            function pt() {
                (0, i.addPerfMark)("main_chart.LoadToolbars");
                const e = nt.load(),
                    t = ut.load();
                return {
                    headerToolbarPromise: e,
                    drawingToolbarPromise: ot.load(),
                    widgetbarPromise: st.load().then((e => {
                        window.widgetbar = e, rt.fire(!0)
                    })).then((() => {
                        (async () => {
                            const {
                                openMindsOnLoad: e
                            } = await d.e(20603).then(d.bind(d, 732246));
                            e()
                        })()
                    })),
                    bottomWidgetPromise: ht.load().then((e => (function(e, t) {
                        function d(e, t) {
                            const d = t.map((e => e.id()));
                            return e.filter((e => !d.includes(e.id())))
                        }

                        function i(e, t) {
                            const d = e.map((e => e.id()));
                            return t.filter((e => !d.includes(e.id())))
                        }
                        t.change().subscribe(null, ((t, n, r) => {
                            if (r) return;
                            const u = d(t, n),
                                o = i(t, n);
                            0 === u.length && 1 === o.length && e.toggleWidget("backtesting", !0)
                        }))
                    }(e, Ze), TradingView.bottomWidgetBar = e, Ye.fire(!0), e))),
                    footerWidgetPromise: ft.load().then((e => (window.footerWidget = e.getComponent(), e.getComponent()))),
                    topLeftButtonPromise: t
                }
            }
            St ? (ce.isAnyChartWidgetInitialized(ze) ? mt || (mt = pt()) : ce.waitAnyChartWidgetInitialized(ze, (() => {
                    mt || (mt = pt())
                })), St.withModel(St, (() => {
                    const e = St.model().mainSeries();
                    window.initData.offlineAlertEventsOnInit && e.dataEvents().completed().subscribe(St, (async () => {
                        const {
                            tryInitAlertsNotifications: e
                        } = await Promise.all([d.e(75514), d.e(56612), d.e(91046)]).then(d.bind(d, 938908));
                        e()
                    }), !0), e.dataEvents().completed().subscribe(St, (async () => {
                        var t;
                        const {
                            platformPlacement: i
                        } = await Promise.all([d.e(21009), d.e(34023), d.e(80802), d.e(34136)]).then(d.bind(d, 580802)), n = null === (t = e.symbolInfo()) || void 0 === t ? void 0 : t.type;
                        n && i.addTargeting("market", n)
                    }));
                    let t = !1;
                    e.dataEvents().completed().subscribe(St, (() => {
                        t || (t = !0, (0, le.setupTrackingModePopupHint)(xe.container.value()), (0, he.setupChartEventHint)(ze), function(e, t) {
                            const i = ue.t(null, void 0, d(678104)).format({
                                    emoji: "👍"
                                }),
                                n = ue.t(null, void 0, d(812011)).format({
                                    emoji: "👍"
                                });
                            ne.on("onServerScreenshotCopiedToClipboard", (() => o(i)), null), ne.on("onClientScreenshotCopiedToClipboard", (() => o(n)), null);
                            let r = null;
                            const u = e.getContainer();

                            function o(e) {
                                r ? r.show(e) : Promise.all([d.e(78707), d.e(20849), d.e(25531), d.e(30092)]).then(d.bind(d, 634464)).then((d => {
                                    r || (r = new d.ChartScreenshotHintRenderer((0, O.ensureNotNull)(u), {
                                        bottomPadding: t.seriesControlBarEnabled
                                    }), r.show(e))
                                }))
                            }
                        }(ze, {
                            seriesControlBarEnabled: !Me.readOnly
                        }))
                    })), (0, ee.loadThemeOnChartInitialization)(ze), (0, fe.initAllAnalytics)(new Promise((t => {
                        e.dataEvents().completed().subscribe(null, (() => t()), !0)
                    })))
                })), new W(ze), gt(), St.onTagsChanged().subscribe(null, (() => {
                    ! function() {
                        if (St.hasModel()) {
                            const e = (0, O.ensureDefined)(St.model().mainSeries().properties().child("interval")),
                                t = (0,
                                    O.ensureDefined)(St.model().mainSeries().properties().child("style")),
                                d = (0, O.ensureDefined)(St.model().mainSeries().properties().child("symbol"));
                            l.setValue("editchart.model.interval", e.value()), l.setValue("editchart.model.style", t.value()), l.setValue("editchart.model.symbol", d.value())
                        }
                    }()
                })), St.onDisconnected().subscribe(null, (e => {
                    e && J.showCriticalErrorMessage((() => {
                        window.ChartApiInstance.disconnect(), setTimeout((() => {
                            window.ChartApiInstance.connect(), St.reconnect()
                        }), 500)
                    }))
                })), St.onReconnectBailout().subscribe(null, (() => {
                    J.showDisconnectedMessage((() => {
                        setTimeout((() => {
                            window.ChartApiInstance.connect()
                        }), 0)
                    }))
                })), document.querySelectorAll(".tv-content").forEach((e => {
                    e.addEventListener("contextmenu", (e => {
                        e.target instanceof Element && e.target.matches("input, textarea") || e.preventDefault()
                    }))
                })), setTimeout((() => {
                    gt()
                }), 1e4), setTimeout((() => {
                    mt || (mt = pt())
                }), 5e3), window.is_authenticated || Promise.all([d.e(13842), d.e(88230), d.e(18619), d.e(81910), d.e(86256), d.e(91901), d.e(13249), d.e(96246), d.e(46951), d.e(65216), d.e(22725), d.e(75514), d.e(745), d.e(52328), d.e(60246), d.e(27901)]).then(d.bind(d, 159365)).then((e => e.initGoRegisterDialog()))) : gt(), document.addEventListener("readystatechange", (() => {
                    const e = Date.now() - 3e5;
                    if ("complete" === document.readyState && window.performance && window.performance.timing && window.performance.timing.domInteractive > e && window.performance.timing.requestStart > e) {
                        const e = window.performance.timing.domInteractive - window.performance.timing.requestStart;
                        j.telemetry.sendChartReport("page_load_time_frame", {
                            value: e
                        })
                    }
                })),
                function(e) {
                    window.addEventListener("beforeunload", (t => {
                        if (e.hasChanges()) return t.returnValue = oe, oe
                    }))
                }(Je), (async () => {
                    const [e, t] = await Promise.all([(0, Oe.initSymbolListService)(), Promise.all([d.e(88230), d.e(18619), d.e(81910), d.e(86256), d.e(12275), d.e(33335), d.e(91901), d.e(83772), d.e(71140), d.e(54819), d.e(59302), d.e(36812), d.e(69273), d.e(75514), d.e(26300), d.e(29594), d.e(91622), d.e(745), d.e(86584), d.e(35883), d.e(19333), d.e(1026)]).then(d.bind(d, 804169))]);
                    e.runner.run(t.activeSymbolListNavigator)
                })();
            ! function(e) {
                const t = new ye(e);
                let d = !1,
                    i = null;
                window.addEventListener("offline", (() => {
                    i && clearTimeout(i), i = setTimeout((() => {
                        navigator.onLine || (t.show(), d = !0)
                    }), 1e4)
                })), window.addEventListener("online", (() => {
                    i && clearTimeout(i), d && (t.hide(), d = !1)
                }))
            }(Re.allocate({
                areaName: "extratop"
            })), (0, Ae.isFeatureEnabled)("skip_navigation_on_chart") && (0, Xe.initPlatformSkipNavigation)(), (0, i.addPerfMark)("main_chart.ExecuteEnd")
        },
        326001: (e, t, d) => {
            "use strict";
            var i = d(823127),
                n = d(488427);
            i.fn.timeUpdate = function(e, t, d) {
                return this.each((function() {
                    var r = i(this),
                        u = r.data(e || "timestamp"),
                        o = this.hasAttribute("data-force-ago-format");
                    u ? u *= 1e3 : u = 1e3 * r.text(), n.jQueryCompatibleAgoDateFormatter(r, new Date(u), o, t, d), r.removeClass("time-upd js-time-upd")
                }))
            }
        },
        245847: (e, t, d) => {
            "use strict";
            d.r(t);
            d(262943)
        },
        835343: (e, t, d) => {
            "use strict";

            function i(e) {
                let t;
                if ("object" != typeof e || null == e || "number" == typeof e.nodeType) t = e;
                else if (e instanceof Date) t = new Date(e.valueOf());
                else if (Array.isArray(e)) {
                    t = [];
                    let d = 0;
                    const n = e.length;
                    for (; d < n; d++) Object.prototype.hasOwnProperty.call(e, d) && (t[d] = i(e[d]))
                } else {
                    t = {};
                    for (const d in e) Object.prototype.hasOwnProperty.call(e, d) && (t[d] = i(e[d]))
                }
                return t
            }
            d.d(t, {
                deepCopy: () => i
            })
        },
        364366: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="#FB8C00" d="M0 9a9 9 0 1 1 18 0A9 9 0 0 1 0 9z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9 4c-.79 0-1.38.7-1.25 1.48l.67 4.03a.59.59 0 0 0 1.16 0l.67-4.03A1.27 1.27 0 0 0 9 4zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>'
        },
        818438: (e, t, d) => {
            "use strict";
            d.d(t, {
                default: () => i
            });
            const i = function() {
                var e = {
                        base: "https://twemoji.maxcdn.com/v/13.0.1/",
                        ext: ".png",
                        size: "72x72",
                        className: "emoji",
                        convert: {
                            fromCodePoint: function(e) {
                                var t = "string" == typeof e ? parseInt(e, 16) : e;
                                if (t < 65536) return o(t);
                                return o(55296 + ((t -= 65536) >> 10), 56320 + (1023 & t))
                            },
                            toCodePoint: p
                        },
                        onerror: function() {
                            this.parentNode && this.parentNode.replaceChild(a(this.alt, !1), this)
                        },
                        parse: function(t, d) {
                            d && "function" != typeof d || (d = {
                                callback: d
                            });
                            return ("string" == typeof t ? f : h)(t, {
                                callback: d.callback || s,
                                attributes: "function" == typeof d.attributes ? d.attributes : S,
                                base: "string" == typeof d.base ? d.base : e.base,
                                ext: d.ext || e.ext,
                                size: d.folder || (i = d.size || e.size, "number" == typeof i ? i + "x" + i : i),
                                className: d.className || e.className,
                                onerror: d.onerror || e.onerror
                            });
                            var i
                        },
                        replace: m,
                        test: function(e) {
                            d.lastIndex = 0;
                            var t = d.test(e);
                            return d.lastIndex = 0, t
                        }
                    },
                    t = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        "'": "&#39;",
                        '"': "&quot;"
                    },
                    d = /(?:\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udeeb\udeec\udef4-\udefc\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78\udd7a-\uddb4\uddb7\uddba\uddbc-\uddcb\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,
                    i = /\uFE0F/g,
                    n = String.fromCharCode(8205),
                    r = /[&<>'"]/g,
                    u = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/,
                    o = String.fromCharCode;
                return e;

                function a(e, t) {
                    return document.createTextNode(t ? e.replace(i, "") : e)
                }

                function s(e, t) {
                    return "".concat(t.base, t.size, "/", e, t.ext)
                }

                function c(e, t) {
                    for (var d, i, n = e.childNodes, r = n.length; r--;) 3 === (i = (d = n[r]).nodeType) ? t.push(d) : 1 !== i || "ownerSVGElement" in d || u.test(d.nodeName.toLowerCase()) || c(d, t);
                    return t
                }

                function l(e) {
                    return p(e.indexOf(n) < 0 ? e.replace(i, "") : e)
                }

                function h(e, t) {
                    for (var i, n, r, u, o, s, h, f, g, S, m, p, b, v = c(e, []), C = v.length; C--;) {
                        for (r = !1, u = document.createDocumentFragment(), s = (o = v[C]).nodeValue, f = 0; h = d.exec(s);) {
                            if ((g = h.index) !== f && u.appendChild(a(s.slice(f, g), !0)), p = l(m = h[0]), f = g + m.length, b = t.callback(p, t), p && b) {
                                for (n in (S = new Image).onerror = t.onerror, S.setAttribute("draggable", "false"), i = t.attributes(m, p)) i.hasOwnProperty(n) && 0 !== n.indexOf("on") && !S.hasAttribute(n) && S.setAttribute(n, i[n]);
                                S.className = t.className, S.alt = m, S.src = b, r = !0, u.appendChild(S)
                            }
                            S || u.appendChild(a(m, !1)), S = null
                        }
                        r && (f < s.length && u.appendChild(a(s.slice(f), !0)), o.parentNode.replaceChild(u, o))
                    }
                    return e
                }

                function f(e, t) {
                    return m(e, (function(e) {
                        var d, i, n = e,
                            u = l(e),
                            o = t.callback(u, t);
                        if (u && o) {
                            for (i in n = "<img ".concat('class="', t.className, '" ', 'draggable="false" ', 'alt="', e, '"', ' src="', o, '"'), d = t.attributes(e, u)) d.hasOwnProperty(i) && 0 !== i.indexOf("on") && -1 === n.indexOf(" " + i + "=") && (n = n.concat(" ", i, '="', d[i].replace(r, g), '"'));
                            n = n.concat("/>")
                        }
                        return n
                    }))
                }

                function g(e) {
                    return t[e]
                }

                function S() {
                    return null
                }

                function m(e, t) {
                    return String(e).replace(d, t)
                }

                function p(e, t) {
                    for (var d = [], i = 0, n = 0, r = 0; r < e.length;) i = e.charCodeAt(r++), n ? (d.push((65536 + (n - 55296 << 10) + (i - 56320)).toString(16)), n = 0) : 55296 <= i && i <= 56319 ? n = i : d.push(i.toString(16));
                    return d.join(t || "-")
                }
            }()
        },
        327714: (e, t, d) => {
            "use strict";

            function i(e) {
                var t = e.width,
                    d = e.height;
                if (t < 0) throw new Error("Negative width is not allowed for Size");
                if (d < 0) throw new Error("Negative height is not allowed for Size");
                return {
                    width: t,
                    height: d
                }
            }

            function n(e, t) {
                return e.width === t.width && e.height === t.height
            }
            d.d(t, {
                CanvasRenderingTarget2D: () => s,
                bindCanvasElementBitmapSizeTo: () => o,
                equalSizes: () => n,
                size: () => i
            });
            var r = function() {
                function e(e) {
                    var t = this;
                    this._resolutionListener = function() {
                        return t._onResolutionChanged()
                    }, this._resolutionMediaQueryList = null, this._observers = [], this._window = e, this._installResolutionListener()
                }
                return e.prototype.dispose = function() {
                    this._uninstallResolutionListener(), this._window = null
                }, Object.defineProperty(e.prototype, "value", {
                    get: function() {
                        return this._window.devicePixelRatio
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.subscribe = function(e) {
                    var t = this,
                        d = {
                            next: e
                        };
                    return this._observers.push(d), {
                        unsubscribe: function() {
                            t._observers = t._observers.filter((function(e) {
                                return e !== d
                            }))
                        }
                    }
                }, e.prototype._installResolutionListener = function() {
                    if (null !== this._resolutionMediaQueryList) throw new Error("Resolution listener is already installed");
                    var e = this._window.devicePixelRatio;
                    this._resolutionMediaQueryList = this._window.matchMedia("all and (resolution: ".concat(e, "dppx)")), this._resolutionMediaQueryList.addListener(this._resolutionListener)
                }, e.prototype._uninstallResolutionListener = function() {
                    null !== this._resolutionMediaQueryList && (this._resolutionMediaQueryList.removeListener(this._resolutionListener), this._resolutionMediaQueryList = null)
                }, e.prototype._reinstallResolutionListener = function() {
                    this._uninstallResolutionListener(), this._installResolutionListener()
                }, e.prototype._onResolutionChanged = function() {
                    var e = this;
                    this._observers.forEach((function(t) {
                        return t.next(e._window.devicePixelRatio)
                    })), this._reinstallResolutionListener()
                }, e
            }();
            var u = function() {
                function e(e, t, d) {
                    var n;
                    this._canvasElement = null, this._bitmapSizeChangedListeners = [], this._suggestedBitmapSize = null, this._suggestedBitmapSizeChangedListeners = [], this._devicePixelRatioObservable = null, this._canvasElementResizeObserver = null, this._canvasElement = e, this._canvasElementClientSize = i({
                        width: this._canvasElement.clientWidth,
                        height: this._canvasElement.clientHeight
                    }), this._transformBitmapSize = null != t ? t : function(e) {
                        return e
                    }, this._allowResizeObserver = null === (n = null == d ? void 0 : d.allowResizeObserver) || void 0 === n || n, this._chooseAndInitObserver()
                }
                return e.prototype.dispose = function() {
                    var e, t;
                    if (null === this._canvasElement) throw new Error("Object is disposed");
                    null === (e = this._canvasElementResizeObserver) || void 0 === e || e.disconnect(), this._canvasElementResizeObserver = null, null === (t = this._devicePixelRatioObservable) || void 0 === t || t.dispose(), this._devicePixelRatioObservable = null, this._suggestedBitmapSizeChangedListeners.length = 0, this._bitmapSizeChangedListeners.length = 0, this._canvasElement = null
                }, Object.defineProperty(e.prototype, "canvasElement", {
                    get: function() {
                        if (null === this._canvasElement) throw new Error("Object is disposed");
                        return this._canvasElement
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "canvasElementClientSize", {
                    get: function() {
                        return this._canvasElementClientSize
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "bitmapSize", {
                    get: function() {
                        return i({
                            width: this.canvasElement.width,
                            height: this.canvasElement.height
                        })
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.resizeCanvasElement = function(e) {
                    this._canvasElementClientSize = i(e), this.canvasElement.style.width = "".concat(this._canvasElementClientSize.width, "px"), this.canvasElement.style.height = "".concat(this._canvasElementClientSize.height, "px"), this._invalidateBitmapSize()
                }, e.prototype.subscribeBitmapSizeChanged = function(e) {
                    this._bitmapSizeChangedListeners.push(e)
                }, e.prototype.unsubscribeBitmapSizeChanged = function(e) {
                    this._bitmapSizeChangedListeners = this._bitmapSizeChangedListeners.filter((function(t) {
                        return t !== e
                    }))
                }, Object.defineProperty(e.prototype, "suggestedBitmapSize", {
                    get: function() {
                        return this._suggestedBitmapSize
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.subscribeSuggestedBitmapSizeChanged = function(e) {
                    this._suggestedBitmapSizeChangedListeners.push(e)
                }, e.prototype.unsubscribeSuggestedBitmapSizeChanged = function(e) {
                    this._suggestedBitmapSizeChangedListeners = this._suggestedBitmapSizeChangedListeners.filter((function(t) {
                        return t !== e
                    }))
                }, e.prototype.applySuggestedBitmapSize = function() {
                    if (null !== this._suggestedBitmapSize) {
                        var e = this._suggestedBitmapSize;
                        this._suggestedBitmapSize = null, this._resizeBitmap(e), this._emitSuggestedBitmapSizeChanged(e, this._suggestedBitmapSize)
                    }
                }, e.prototype._resizeBitmap = function(e) {
                    var t = this.bitmapSize;
                    n(t, e) || (this.canvasElement.width = e.width, this.canvasElement.height = e.height, this._emitBitmapSizeChanged(t, e))
                }, e.prototype._emitBitmapSizeChanged = function(e, t) {
                    var d = this;
                    this._bitmapSizeChangedListeners.forEach((function(i) {
                        return i.call(d, e, t)
                    }))
                }, e.prototype._suggestNewBitmapSize = function(e) {
                    var t = this._suggestedBitmapSize,
                        d = i(this._transformBitmapSize(e, this._canvasElementClientSize)),
                        r = n(this.bitmapSize, d) ? null : d;
                    null === t && null === r || null !== t && null !== r && n(t, r) || (this._suggestedBitmapSize = r, this._emitSuggestedBitmapSizeChanged(t, r))
                }, e.prototype._emitSuggestedBitmapSizeChanged = function(e, t) {
                    var d = this;
                    this._suggestedBitmapSizeChangedListeners.forEach((function(i) {
                        return i.call(d, e, t)
                    }))
                }, e.prototype._chooseAndInitObserver = function() {
                    var e = this;
                    this._allowResizeObserver ? new Promise((function(e) {
                        var t = new ResizeObserver((function(d) {
                            e(d.every((function(e) {
                                return "devicePixelContentBoxSize" in e
                            }))), t.disconnect()
                        }));
                        t.observe(document.body, {
                            box: "device-pixel-content-box"
                        })
                    })).catch((function() {
                        return !1
                    })).then((function(t) {
                        return t ? e._initResizeObserver() : e._initDevicePixelRatioObservable()
                    })) : this._initDevicePixelRatioObservable()
                }, e.prototype._initDevicePixelRatioObservable = function() {
                    var e = this;
                    if (null !== this._canvasElement) {
                        var t = a(this._canvasElement);
                        if (null === t) throw new Error("No window is associated with the canvas");
                        this._devicePixelRatioObservable = function(e) {
                            return new r(e)
                        }(t), this._devicePixelRatioObservable.subscribe((function() {
                            return e._invalidateBitmapSize()
                        })), this._invalidateBitmapSize()
                    }
                }, e.prototype._invalidateBitmapSize = function() {
                    var e, t;
                    if (null !== this._canvasElement) {
                        var d = a(this._canvasElement);
                        if (null !== d) {
                            var n = null !== (t = null === (e = this._devicePixelRatioObservable) || void 0 === e ? void 0 : e.value) && void 0 !== t ? t : d.devicePixelRatio,
                                r = this._canvasElement.getClientRects(),
                                u = void 0 !== r[0] ? function(e, t) {
                                    return i({
                                        width: Math.round(e.left * t + e.width * t) - Math.round(e.left * t),
                                        height: Math.round(e.top * t + e.height * t) - Math.round(e.top * t)
                                    })
                                }(r[0], n) : i({
                                    width: this._canvasElementClientSize.width * n,
                                    height: this._canvasElementClientSize.height * n
                                });
                            this._suggestNewBitmapSize(u)
                        }
                    }
                }, e.prototype._initResizeObserver = function() {
                    var e = this;
                    null !== this._canvasElement && (this._canvasElementResizeObserver = new ResizeObserver((function(t) {
                        var d = t.find((function(t) {
                            return t.target === e._canvasElement
                        }));
                        if (d && d.devicePixelContentBoxSize && d.devicePixelContentBoxSize[0]) {
                            var n = d.devicePixelContentBoxSize[0],
                                r = i({
                                    width: n.inlineSize,
                                    height: n.blockSize
                                });
                            e._suggestNewBitmapSize(r)
                        }
                    })), this._canvasElementResizeObserver.observe(this._canvasElement, {
                        box: "device-pixel-content-box"
                    }))
                }, e
            }();

            function o(e, t) {
                if ("device-pixel-content-box" === t.type) return new u(e, t.transform, t.options);
                throw new Error("Unsupported binding target")
            }

            function a(e) {
                return e.ownerDocument.defaultView
            }
            var s = function() {
                function e(e, t, d) {
                    if (0 === t.width || 0 === t.height) throw new TypeError("Rendering target could only be created on a media with positive width and height");
                    if (this._mediaSize = t, 0 === d.width || 0 === d.height) throw new TypeError("Rendering target could only be created using a bitmap with positive integer width and height");
                    this._bitmapSize = d, this._context = e
                }
                return e.prototype.useMediaCoordinateSpace = function(e) {
                    try {
                        return this._context.save(), this._context.setTransform(1, 0, 0, 1, 0, 0), this._context.scale(this._horizontalPixelRatio, this._verticalPixelRatio), e({
                            context: this._context,
                            mediaSize: this._mediaSize
                        })
                    } finally {
                        this._context.restore()
                    }
                }, e.prototype.useBitmapCoordinateSpace = function(e) {
                    try {
                        return this._context.save(), this._context.setTransform(1, 0, 0, 1, 0, 0), e({
                            context: this._context,
                            mediaSize: this._mediaSize,
                            bitmapSize: this._bitmapSize,
                            horizontalPixelRatio: this._horizontalPixelRatio,
                            verticalPixelRatio: this._verticalPixelRatio
                        })
                    } finally {
                        this._context.restore()
                    }
                }, Object.defineProperty(e.prototype, "_horizontalPixelRatio", {
                    get: function() {
                        return this._bitmapSize.width / this._mediaSize.width
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "_verticalPixelRatio", {
                    get: function() {
                        return this._bitmapSize.height / this._mediaSize.height
                    },
                    enumerable: !1,
                    configurable: !0
                }), e
            }()
        }
    },
    e => {
        e.O(0, [18562, 38970, 8253, 68716, 59267, 57901, 88601, 58194, 45661, 7576, 58106, 74789, 40713, 54525, 36037, 34145, 31755, 49276, 66690, 83326, 98144, 78352, 36945, 82744, 88567, 755, 96875, 75514, 23127, 22914, 24951, 14171, 53695, 84058, 83037, 82684, 86981, 63742, 83912, 34333, 79665, 16147, 51965, 82846, 55023, 16665, 47342, 99670, 98850, 80653, 8837, 88777, 66100, 34063, 89397, 62726, 93571, 92545, 43364, 11565, 76995], (() => {
            return t = 628065, e(e.s = t);
            var t
        }));
        e.O()
    }
]);
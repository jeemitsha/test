(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [75925, 745], {
        234292: e => {
            e.exports = {
                container: "container-Y_t_XxSG",
                pairContainer: "pairContainer-Y_t_XxSG",
                logo: "logo-Y_t_XxSG",
                hidden: "hidden-Y_t_XxSG"
            }
        },
        679852: e => {
            e.exports = {
                logo: "logo-wKkFa1U1"
            }
        },
        536612: e => {
            e.exports = {
                dialog: "dialog-nnDbXk_L",
                rounded: "rounded-nnDbXk_L",
                shadowed: "shadowed-nnDbXk_L",
                fullscreen: "fullscreen-nnDbXk_L",
                darker: "darker-nnDbXk_L",
                backdrop: "backdrop-nnDbXk_L"
            }
        },
        419283: e => {
            e.exports = {
                "tablet-normal-breakpoint": "screen and (max-width: 768px)",
                "tooltip-offset": "20px",
                dialog: "dialog-UExGRfA_",
                dragging: "dragging-UExGRfA_",
                dialogAnimatedAppearance: "dialogAnimatedAppearance-UExGRfA_",
                dialogAnimation: "dialogAnimation-UExGRfA_",
                dialogTooltip: "dialogTooltip-UExGRfA_"
            }
        },
        502804: (e, t, n) => {
            "use strict";
            n.d(t, {
                ExchangeGroup: () => o,
                exchangeGroupName: () => i
            });
            var o, s, r = n(777754);
            ! function(e) {
                e.NorthAmerica = "North America", e.Europe = "Europe", e.MiddleEastAfrica = "Middle East / Africa", e.MexicoSouthAmerica = "Mexico and South America", e.AsiaPacific = "Asia / Pacific", e.Worldwide = "Worldwide", e.Cryptocurrency = "Cryptocurrency", e.Forex = "Forex", e.AllExchanges = "AllExchanges", e.Others = "Others", e.Economy = "Economy"
            }(o || (o = {})),
            function(e) {
                e.USA = "United States", e.Canada = "Canada", e.EU = "European Union", e.Germany = "Germany", e.Italy = "Italy", e.Poland = "Poland", e.Russia = "Russian Federation", e.Serbia = "Serbia", e.Spain = "Spain", e.Switzerland = "Switzerland", e.Turkey = "Turkey", e.UK = "United Kingdom", e.Bahrain = "Bahrain", e.Egypt = "Egypt", e.Israel = "Israel", e.Nigeria = "Nigeria", e.SaudiArabia = "Saudi Arabia", e.UAE = "United Arab Emirates", e.Argentina = "Argentina", e.Brazil = "Brazil", e.Chile = "Chile", e.Mexico = "Mexico", e.Australia = "Australia", e.China = "China", e.India = "India", e.Indonesia = "Indonesia", e.HongKong = "Hong Kong", e.Japan = "Japan", e.Malaysia = "Malaysia", e.NewZealand = "New Zealand", e.Singapore = "Singapore", e.Taiwan = "Taiwan", e.Thailand = "Thailand", e.SouthKorea = "South Korea", e.Peru = "Peru", e.Colombia = "Colombia", e.Sweden = "Sweden", e.Ireland = "Ireland", e.Austria = "Austria", e.Norway = "Norway", e.Qatar = "Qatar", e.Denmark = "Denmark", e.Iceland = "Iceland", e.Finland = "Finland", e.Lithuania = "Lithuania", e.Estonia = "Estonia", e.Latvia = "Latvia", e.Vietnam = "Vietnam", e.SouthAfrica = "South Africa", e.Netherlands = "Netherlands", e.Belgium = "Belgium", e.Portugal = "Portugal", e.France = "France"
            }(s || (s = {}));
            const i = {
                [o.NorthAmerica]: r.t(null, void 0, n(380545)),
                [o.Europe]: r.t(null, void 0, n(559592)),
                [o.MiddleEastAfrica]: r.t(null, void 0, n(985766)),
                [o.MexicoSouthAmerica]: r.t(null, void 0, n(564135)),
                [o.AsiaPacific]: r.t(null, void 0, n(685332)),
                [o.Worldwide]: r.t(null, void 0, n(628584)),
                [o.Cryptocurrency]: r.t(null, void 0, n(422319)),
                [o.Forex]: r.t(null, void 0, n(486403)),
                [o.Others]: r.t(null, void 0, n(942189)),
                [o.Economy]: r.t(null, void 0, n(337556))
            }
        },
        681339: (e, t, n) => {
            "use strict";
            n.d(t, {
                CachedLogo: () => p
            });
            var o = n(50959),
                s = n(497754),
                r = n.n(s),
                i = (n(46926), n(495217)),
                a = n(783036),
                l = n(439378),
                c = n(864929),
                u = n(774218),
                d = n(234292);
            const h = "tv-circle-logo--visually-hidden";

            function p(e) {
                const {
                    className: t,
                    placeholderLetter: n,
                    url1: s,
                    url2: p,
                    size: _ = "xxsmall"
                } = e, f = (0, o.useRef)(null), v = (0, o.useRef)(null), y = (0, o.useRef)(null), E = (0, o.useRef)(null), b = (0, o.useRef)(null), x = (0, o.useRef)(null);
                return (0, u.useIsomorphicLayoutEffect)((() => {
                    const e = void 0 === s ? [] : void 0 === p ? [s] : [s, p],
                        t = x.current = (n = e, Promise.all(n.map((e => (0, c.getImage)(`symbol_logo_${e}`, e, m).then((e => e.cloneNode()))))));
                    var n;
                    t.then((e => {
                        var n, o, s, r, i, a, l, c, u;
                        if (t === x.current) switch (e.length) {
                            case 0:
                                null === (n = y.current) || void 0 === n || n.classList.add(d.hidden), null === (o = v.current) || void 0 === o || o.classList.add(h), null === (s = f.current) || void 0 === s || s.classList.remove(h);
                                break;
                            case 1:
                                g(v.current, e[0]), null === (r = y.current) || void 0 === r || r.classList.add(d.hidden), null === (i = v.current) || void 0 === i || i.classList.remove(h), null === (a = f.current) || void 0 === a || a.classList.add(h);
                                break;
                            case 2:
                                g(E.current, e[0]), g(b.current, e[1]), null === (l = y.current) || void 0 === l || l.classList.remove(d.hidden), null === (c = v.current) || void 0 === c || c.classList.add(h), null === (u = f.current) || void 0 === u || u.classList.add(h)
                        }
                    }))
                }), [s, p]), o.createElement("span", {
                    className: r()(t, d.container)
                }, o.createElement("span", {
                    ref: y,
                    className: r()(d.pairContainer, d.hidden)
                }, o.createElement("span", {
                    className: (0, l.getBlockStyleClasses)(_)
                }, o.createElement("span", {
                    ref: b,
                    className: r()(d.logo, (0, l.getLogoStyleClasses)(_))
                }), o.createElement("span", {
                    ref: E,
                    className: r()(d.logo, (0, l.getLogoStyleClasses)(_))
                }))), o.createElement("span", {
                    ref: v,
                    className: r()(d.logo, h, (0, a.getStyleClasses)(_))
                }), o.createElement("span", {
                    ref: f,
                    className: r()(d.logo, (0, a.getStyleClasses)(_))
                }, o.createElement(i.CircleLogo, {
                    size: _,
                    placeholderLetter: n
                })))
            }

            function g(e, t) {
                e && (e.innerHTML = "", e.appendChild(t))
            }

            function m(e) {
                e.decoding = "async"
            }
        },
        894729: (e, t, n) => {
            "use strict";
            n.d(t, {
                SymbolLogo: () => u
            });
            var o = n(50959),
                s = n(497754),
                r = n.n(s),
                i = n(892093),
                a = n(849204),
                l = n(681339),
                c = n(679852);

            function u(e) {
                const {
                    logoId: t,
                    baseCurrencyLogoId: n,
                    currencyLogoId: s,
                    placeholder: u,
                    className: d,
                    size: h = "xsmall"
                } = e, p = (0, o.useMemo)((() => {
                    const e = {
                        logoid: t,
                        "currency-logoid": s,
                        "base-currency-logoid": n
                    };
                    return (0, i.removeUsdAndStableCoinFromCryptoPairLogos)((0, i.resolveLogoUrls)(e, a.LogoSize.Medium))
                }), [t, s, n]);
                return o.createElement(l.CachedLogo, {
                    key: h,
                    className: r()(c.logo, d),
                    url1: p[0],
                    url2: p[1],
                    placeholderLetter: u,
                    size: h
                })
            }
        },
        799938: (e, t, n) => {
            "use strict";
            n.d(t, {
                symbolTypes: () => s,
                allSymbolTypes: () => r
            });
            var o = n(711242);

            function s() {
                return o.filter((e => "cfd" !== e.value))
            }
            const r = o[0].value
        },
        145500: (e, t, n) => {
            "use strict";
            n.d(t, {
                isAllSearchSourcesSelected: () => r,
                filterSearchSources: () => i,
                splitSearchSourcesByGroup: () => a,
                createSearchSources: () => l
            });
            var o = n(502804);
            const s = [o.ExchangeGroup.NorthAmerica, o.ExchangeGroup.Europe, o.ExchangeGroup.MiddleEastAfrica, o.ExchangeGroup.MexicoSouthAmerica, o.ExchangeGroup.AsiaPacific, o.ExchangeGroup.Cryptocurrency, o.ExchangeGroup.Forex, o.ExchangeGroup.Economy];

            function r(e) {
                return e.group() === o.ExchangeGroup.AllExchanges
            }

            function i(e, t) {
                return e.filter((e => e.includes(t)))
            }

            function a(e) {
                const t = new Map;
                e.forEach((e => {
                    t.has(e.group()) ? t.get(e.group()).push(e) : t.set(e.group(), [e])
                }));
                for (const e of t.values()) {
                    e[0].group() !== o.ExchangeGroup.NorthAmerica && e.sort(((e, t) => e.name().toLowerCase() > t.name().toLowerCase() ? 1 : -1))
                }
                return new Map([...t.entries()].sort((([e], [t]) => s.indexOf(e) - s.indexOf(t))))
            }

            function l(e, t) {
                return t.map((t => new e(t)))
            }
        },
        296652: (e, t, n) => {
            "use strict";
            n.d(t, {
                validate: () => i,
                flip: () => a,
                stringifyTokens: () => l,
                isSpread: () => u,
                shortName: () => h,
                getExchange: () => p,
                getNextSymbolInputValueAndPosition: () => m,
                getCurrentTokenParamsFromInput: () => _
            });
            var o = n(495046),
                s = n(889267),
                r = n(888765);

            function i(e) {
                const t = {
                    braceBalance: 0,
                    currentState: "var",
                    warnings: [],
                    errors: []
                };
                if (o.enabled("charting_library_base") && !o.enabled("show_spread_operators")) return t;
                let n = "init";
                const s = [];
                for (let o = 0; o < e.length; o++) {
                    const r = e[o];
                    if ("whitespace" !== r.type) {
                        if ("incompleteSymbol" === r.type || "incompleteNumber" === r.type) {
                            const n = o !== e.length - 1,
                                s = {
                                    status: n ? "error" : "incomplete",
                                    reason: "incomplete_token",
                                    offset: r.offset,
                                    token: r
                                };
                            if (n ? t.errors.push(s) : t.warnings.push(s), n) continue
                        }
                        switch (r.type) {
                            case "symbol":
                            case "number":
                                if ("var" === n) {
                                    t.errors.push({
                                        status: "error",
                                        reason: "unexpected_token",
                                        offset: r.offset,
                                        token: r
                                    });
                                    continue
                                }
                                n = "var";
                                break;
                            case "plus":
                            case "minus":
                            case "multiply":
                            case "divide":
                            case "power":
                                if ("var" !== n) {
                                    t.errors.push({
                                        status: "error",
                                        reason: "unexpected_token",
                                        offset: r.offset,
                                        token: r
                                    });
                                    continue
                                }
                                n = "operator";
                                break;
                            case "openBrace":
                                if ("var" === n) {
                                    t.errors.push({
                                        status: "error",
                                        reason: "unexpected_token",
                                        offset: r.offset,
                                        token: r
                                    });
                                    continue
                                }
                                s.push(r), n = "init";
                                break;
                            case "closeBrace":
                                if ("var" !== n) {
                                    t.errors.push({
                                        status: "error",
                                        reason: "unexpected_token",
                                        offset: r.offset,
                                        token: r
                                    });
                                    continue
                                }
                                s.pop() || t.errors.push({
                                    status: "error",
                                    reason: "unbalanced_brace",
                                    offset: r.offset,
                                    token: r
                                }), n = "var";
                                break;
                            case "unparsed":
                                t.errors.push({
                                    status: "error",
                                    reason: "unparsed_entity",
                                    offset: r.offset,
                                    token: r
                                })
                        }
                    }
                }
                for (t.braceBalance = s.length, "var" !== n && t.warnings.push({
                        status: "incomplete",
                        token: e[e.length - 1]
                    }); s.length;) {
                    const e = s.pop();
                    e && t.warnings.push({
                        status: "incomplete",
                        reason: "unbalanced_brace",
                        offset: e.offset,
                        token: e
                    })
                }
                return t.currentState = n, t
            }

            function a(e) {
                const t = function(e) {
                    let t, n = 0,
                        o = 0;
                    for (let s = 0; s < e.length; s++) {
                        const r = e[s];
                        if ("whitespace" !== r.type) switch (n) {
                            case 0:
                                if ("number" !== r.type || 1 != +r.value) return [];
                                n = 1;
                                break;
                            case 1:
                                if (1 !== n || "divide" !== r.type) return [];
                                n = 2, t = s + 1;
                                break;
                            case 2:
                                if ("openBrace" === r.type) n = 3, o = 1;
                                else if (c(r.type)) return [];
                                break;
                            case 3:
                                "openBrace" === r.type ? o++ : "closeBrace" === r.type && (o--, o <= 0 && (n = 2))
                        }
                    }
                    return e.slice(t)
                }(e);
                return t.length ? d(t) : d((0, s.tokenize)("1/(" + l(e) + ")"))
            }

            function l(e) {
                return e.reduce(((e, t) => "symbol" === t.type && s.symbolTokenEscapeRe.test(t.value) ? e + `'${t.value}'` : e + t.value), "")
            }

            function c(e) {
                return "plus" === e || "minus" === e || "multiply" === e || "divide" === e || "power" === e
            }

            function u(e) {
                return e.length > 1 && e.some((e => c(e.type)))
            }

            function d(e) {
                e = function(e) {
                    const t = [];
                    for (const n of e) "whitespace" !== n.type && t.push(n);
                    return t
                }(e);
                const t = [],
                    n = [];
                let o;
                for (let s = 0; s < e.length; s++) {
                    const r = e[s];
                    switch (r.type) {
                        case "plus":
                        case "minus":
                        case "multiply":
                        case "divide":
                        case "power":
                            n.length && n[n.length - 1].minPrecedence > r.precedence && (n[n.length - 1].minPrecedence = r.precedence);
                            break;
                        case "openBrace":
                            o = {
                                minPrecedence: 1 / 0,
                                openBraceIndex: s
                            }, n.push(o);
                            break;
                        case "closeBrace":
                            {
                                if (o = n.pop(), !o) break;
                                const r = e[o.openBraceIndex - 1],
                                    i = e[s + 1],
                                    a = r && ("plus" === r.type || "multiply" === r.type);
                                (!c(null == i ? void 0 : i.type) || (null == i ? void 0 : i.precedence) <= o.minPrecedence) && (!c(null == r ? void 0 : r.type) || (null == r ? void 0 : r.precedence) < (null == o ? void 0 : o.minPrecedence) || (null == r ? void 0 : r.precedence) === (null == o ? void 0 : o.minPrecedence) && a) && (t.unshift(o.openBraceIndex), t.push(s), n.length && n[n.length - 1].minPrecedence > o.minPrecedence && (n[n.length - 1].minPrecedence = o.minPrecedence))
                            }
                    }
                }
                for (let n = t.length; n--;) e.splice(t[n], 1);
                return e
            }

            function h(e) {
                return d((0, s.tokenize)(e)).reduce(((e, t) => {
                    if ("symbol" !== t.type) return e + t.value;
                    const [, n] = g(t);
                    return n ? e + n : e
                }), "")
            }

            function p(e) {
                const t = function(e) {
                    const t = (0, s.tokenize)(e),
                        n = [];
                    return t.forEach((e => {
                        if ("symbol" !== e.type) return;
                        const [t] = g(e);
                        t && n.push(t)
                    })), n
                }(e);
                if (1 === t.length) return t[0]
            }

            function g(e) {
                const t = /^'?(?:([A-Z0-9_]+):)?(.*?)'?$/i.exec(e.value);
                return null === t ? [void 0, void 0] : [t[1], t[2]]
            }

            function m(e, t, n) {
                const o = e.value,
                    [i, a] = _(e, n),
                    l = (0, r.getSymbolFullName)(t),
                    c = s.symbolTokenEscapeRe.test(l) ? `'${l}'` : l;
                return [o.substring(0, a) + c + o.substring(a + i.length), a + c.length]
            }

            function _(e, t) {
                const {
                    value: n,
                    selectionStart: o
                } = e, r = (0, s.tokenize)(t ? n.toUpperCase() : n), i = function(e, t) {
                    for (let n = 0; n < e.length; n++) {
                        const o = e[n],
                            s = "symbol" === o.type || "incompleteSymbol" === o.type || "number" === o.type;
                        if (o.offset <= t && t <= o.offset + o.value.length && s) return o
                    }
                    return null
                }(r, o || 0);
                return [(null == i ? void 0 : i.value) || "", i ? i.offset : n.length, r]
            }
        },
        888765: (e, t, n) => {
            "use strict";
            n.d(t, {
                exchangeSelectDisabled: () => S,
                getAllSymbolTypesValue: () => x,
                getAvailableSearchSources: () => E,
                getAvailableSymbolTypes: () => b,
                getDefaultSearchSource: () => y,
                getSymbolFullName: () => v,
                isSeparateSymbolSearchTabs: () => D,
                mapEconomySource: () => w
            });
            var o = n(777754),
                s = n(145500);
            class r {
                constructor(e) {
                    this._exchange = e
                }
                value() {
                    return this._exchange.value
                }
                name() {
                    return (0, s.isAllSearchSourcesSelected)(this) ? o.t(null, void 0, n(64498)) : this._exchange.name
                }
                description() {
                    return this._exchange.desc
                }
                country() {
                    return this._exchange.country
                }
                providerId() {
                    return this._exchange.providerId
                }
                group() {
                    return this._exchange.group
                }
                includes(e) {
                    return i(this._exchange, e)
                }
                getRequestExchangeValue() {
                    return this._exchange.value
                }
                getRequestCountryValue() {}
            }

            function i(e, t) {
                const n = t.toLowerCase(),
                    {
                        name: o,
                        desc: s,
                        searchTerms: r
                    } = e;
                return o.toLowerCase().includes(n) || s.toLowerCase().includes(n) || void 0 !== r && r.some((e => e.toLowerCase().includes(n)))
            }
            var a = n(709404),
                l = n(495046),
                c = n(502804);
            var u = n(799938),
                d = n(125226),
                h = n(650151),
                p = n(959941),
                g = n(202339);
            class m {
                constructor(e) {
                    this._data = e
                }
                raw() {
                    return this._data
                }
                value() {
                    return this._data.country
                }
                name() {
                    const {
                        country: e
                    } = this._data;
                    return p[e] ? (0, g.triesTranslateCountrieName)(p[e].title) : e
                }
                description() {
                    return this._data.exchanges.map((e => e.name)).join(", ")
                }
                country() {
                    return this._data.country
                }
                providerId() {
                    return ""
                }
                group() {
                    return this._data.group
                }
                includes(e) {
                    var t;
                    const {
                        country: n
                    } = this._data, o = e.toLowerCase();
                    return this.name().toLowerCase().includes(o) || this.country().toLowerCase().includes(o) || (null === (t = p[n].title) || void 0 === t ? void 0 : t.toLowerCase().includes(o)) || this.description().toLowerCase().includes(o) || this._data.exchanges.some((t => i(t, e)))
                }
                getRequestExchangeValue() {}
                getRequestCountryValue() {
                    const {
                        country: e
                    } = this._data;
                    return ("uk" === e ? "gb" : e).toUpperCase()
                }
            }
            class _ extends m {
                constructor(e) {
                    super({ ...e.raw(),
                        exchanges: []
                    })
                }
            }
            const f = !l.enabled("widget") && (0, d.isFeatureEnabled)("symbol_search_country_sources");

            function v(e) {
                if (e.fullName) return e.fullName;
                let t;
                return t = e.prefix || e.exchange ? (e.prefix || e.exchange) + ":" + e.name : e.name, t.replace(/<\/?[^>]+(>|$)/g, "")
            }

            function y() {
                const e = E();
                return e[0]
            }

            function E() {
                const e = function(e) {
                    return e.filter((e => !e.hideInSymbolSearch))
                }((0, a.getExchanges)());
                if (!f) return (0, s.createSearchSources)(r, e);
                const t = function(e) {
                        const t = new Map;
                        return e.forEach((e => {
                            const {
                                country: n,
                                flag: o,
                                group: s
                            } = e;
                            t.has(n) ? (0, h.ensureDefined)(t.get(n)).exchanges.push(e) : t.set(n, {
                                country: n,
                                group: (0, h.ensureDefined)(s),
                                flag: o,
                                exchanges: [e]
                            })
                        })), t
                    }(e.filter((e => e.group !== c.ExchangeGroup.Economy))),
                    n = [],
                    o = t.get("");
                return o && (t.delete(""), n.push(...(0, s.createSearchSources)(r, o.exchanges))), n.push(...(0, s.createSearchSources)(m, [...t.values()])), n
            }

            function b() {
                return "cme" === window.TradingView.widgetCustomer ? [] : l.enabled("widget") ? window.ChartApiInstance.supportedSymbolsTypes() : (0, u.symbolTypes)()
            }

            function x() {
                return u.allSymbolTypes
            }

            function S(e) {
                return !(!D || "" !== e) || ("bovespa" === window.TradingView.widgetCustomer || "cme" === window.TradingView.widgetCustomer)
            }

            function w(e) {
                return e instanceof m ? new _(e) : e
            }
            const D = !l.enabled("widget") && (0, d.isFeatureEnabled)("separate_symbol_search_tabs")
        },
        795394: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                snapshoter: () => i,
                resolveSymbolName: () => l,
                resolveSymbolNameForAll: () => c,
                resolveSymbolNameForAllDistinct: () => u
            });
            var o = n(611998),
                s = n(675128);
            const r = new Set(["pro_name", "base_name", "short_name", "description", "type", "exchange", "typespecs", "listed_exchange", "country_code", "provider_id", "symbol-primaryname", "logoid", "base-currency-logoid", "currency-logoid", "update_mode", "source", "source2", "pricescale", "minmov", "fractional"]),
                i = (0, s.lazyValue)((() => new o.QuoteSessionSnapshoter({
                    name: "basic-symbol-quotes",
                    fields: [...r]
                }))),
                a = new Set(["pro_name"]);

            function l(e) {
                return i().getSnapshot(e, a).then((e => "error" === e.status ? e.symbolname : e.values.pro_name))
            }

            function c(e) {
                return Promise.all(e.map(l))
            }

            function u(e) {
                return c(e).then((e => [...new Set(e)]))
            }
        },
        697989: (e, t, n) => {
            "use strict";
            n.d(t, {
                Dialog: () => c
            });
            var o = n(50959),
                s = n(497754),
                r = n(670797),
                i = n(829725),
                a = n(8626),
                l = n(536612);
            class c extends o.PureComponent {
                constructor() {
                    super(...arguments), this._manager = new i.OverlapManager, this._handleSlot = e => {
                        this._manager.setContainer(e)
                    }
                }
                render() {
                    const {
                        rounded: e = !0,
                        shadowed: t = !0,
                        fullscreen: n = !1,
                        darker: i = !1,
                        className: c,
                        backdrop: u,
                        containerTabIndex: d = -1
                    } = this.props, h = s(c, l.dialog, e && l.rounded, t && l.shadowed, n && l.fullscreen, i && l.darker), p = (0, a.filterDataProps)(this.props), g = this.props.style ? { ...this._createStyles(),
                        ...this.props.style
                    } : this._createStyles();
                    return o.createElement(o.Fragment, null, o.createElement(r.SlotContext.Provider, {
                        value: this._manager
                    }, u && o.createElement("div", {
                        onClick: this.props.onClickBackdrop,
                        className: l.backdrop
                    }), o.createElement("div", { ...p,
                        className: h,
                        style: g,
                        ref: this.props.reference,
                        onFocus: this.props.onFocus,
                        onMouseDown: this.props.onMouseDown,
                        onMouseUp: this.props.onMouseUp,
                        onClick: this.props.onClick,
                        onKeyDown: this.props.onKeyDown,
                        tabIndex: d,
                        "aria-label": this.props.containerAriaLabel
                    }, this.props.children)), o.createElement(r.Slot, {
                        reference: this._handleSlot
                    }))
                }
                _createStyles() {
                    const {
                        bottom: e,
                        left: t,
                        width: n,
                        right: o,
                        top: s,
                        zIndex: r,
                        height: i
                    } = this.props;
                    return {
                        bottom: e,
                        left: t,
                        right: o,
                        top: s,
                        zIndex: r,
                        maxWidth: n,
                        height: i
                    }
                }
            }
        },
        488653: (e, t, n) => {
            "use strict";
            n.d(t, {
                DragHandler: () => s
            });
            var o = n(686668);
            class s {
                constructor(e, t, n = {
                    boundByScreen: !0
                }) {
                    this._drag = null, this._canBeTouchClick = !1, this._frame = null, this._onMouseDragStart = e => {
                        if (0 !== e.button || this._isTargetNoDraggable(e)) return;
                        e.preventDefault(), document.addEventListener("mousemove", this._onMouseDragMove), document.addEventListener("mouseup", this._onMouseDragEnd);
                        const t = (0, o.clampPosition)((0, o.positionFromMouseEvent)(e));
                        this._dragStart(t)
                    }, this._onTouchDragStart = e => {
                        if (this._isTargetNoDraggable(e)) return;
                        this._canBeTouchClick = !0, e.preventDefault(), this._header.addEventListener("touchmove", this._onTouchDragMove, {
                            passive: !1
                        });
                        const t = (0, o.clampPosition)((0, o.positionFromTouchEvent)(e));
                        this._dragStart(t)
                    }, this._onMouseDragEnd = e => {
                        e.target instanceof Node && this._header.contains(e.target) && e.preventDefault(), document.removeEventListener("mousemove", this._onMouseDragMove), document.removeEventListener("mouseup", this._onMouseDragEnd), this._onDragStop()
                    }, this._onTouchDragEnd = e => {
                        this._header.removeEventListener("touchmove", this._onTouchDragMove), this._onDragStop(), this._canBeTouchClick && (this._canBeTouchClick = !1, (0, o.simulateClick)(e.target))
                    }, this._onMouseDragMove = e => {
                        const t = (0, o.clampPosition)((0, o.positionFromMouseEvent)(e));
                        this._dragMove(t)
                    }, this._onTouchDragMove = e => {
                        this._canBeTouchClick = !1, e.preventDefault();
                        const t = (0, o.clampPosition)((0, o.positionFromTouchEvent)(e));
                        this._dragMove(t)
                    }, this._onDragStop = () => {
                        this._drag = null, this._header.classList.remove("dragging"), this._options.onDragEnd && this._options.onDragEnd()
                    }, this._dialog = e, this._header = t, this._options = n, this._header.addEventListener("mousedown", this._onMouseDragStart), this._header.addEventListener("touchstart", this._onTouchDragStart), this._header.addEventListener("touchend", this._onTouchDragEnd)
                }
                destroy() {
                    null !== this._frame && cancelAnimationFrame(this._frame), this._header.removeEventListener("mousedown", this._onMouseDragStart), document.removeEventListener("mouseup", this._onMouseDragEnd),
                        this._header.removeEventListener("touchstart", this._onTouchDragStart), this._header.removeEventListener("touchend", this._onTouchDragEnd), document.removeEventListener("mouseleave", this._onMouseDragEnd)
                }
                updateOptions(e) {
                    this._options = e
                }
                _dragStart(e) {
                    const t = this._dialog.getBoundingClientRect();
                    this._drag = {
                        startX: e.x,
                        startY: e.y,
                        finishX: e.x,
                        finishY: e.y,
                        dialogX: t.left,
                        dialogY: t.top
                    };
                    const n = Math.round(t.left),
                        o = Math.round(t.top);
                    this._dialog.style.transform = `translate(${n}px, ${o}px)`, this._header.classList.add("dragging"), this._options.onDragStart && this._options.onDragStart()
                }
                _dragMove(e) {
                    if (this._drag) {
                        if (this._drag.finishX = e.x, this._drag.finishY = e.y, null !== this._frame) return;
                        this._frame = requestAnimationFrame((() => {
                            if (this._drag) {
                                const t = e.x - this._drag.startX,
                                    n = e.y - this._drag.startY;
                                this._moveDialog(this._drag.dialogX + t, this._drag.dialogY + n)
                            }
                            this._frame = null
                        }))
                    }
                }
                _moveDialog(e, t) {
                    const n = this._dialog.getBoundingClientRect(),
                        {
                            boundByScreen: s
                        } = this._options,
                        r = (0, o.clampSegment)(e, n.width, s ? 0 : -1 / 0, s ? window.innerWidth : 1 / 0),
                        i = (0, o.clampSegment)(t, n.height, s ? 0 : -1 / 0, s ? window.innerHeight : 1 / 0);
                    this._dialog.style.transform = `translate(${Math.round(r)}px, ${Math.round(i)}px)`
                }
                _isTargetNoDraggable(e) {
                    return e.target instanceof Element && null !== e.target.closest("[data-disable-drag]")
                }
            }
        },
        8629: (e, t, n) => {
            "use strict";
            n.d(t, {
                PopupContext: () => o
            });
            const o = n(50959).createContext(null)
        },
        500745: (e, t, n) => {
            "use strict";
            n.d(t, {
                PopupDialog: () => E
            });
            var o = n(50959),
                s = n(497754),
                r = n(650151),
                i = n(697989),
                a = n(368337),
                l = n(157490),
                c = n(488653),
                u = n(686668);
            const d = {
                vertical: 0
            };
            class h {
                constructor(e, t) {
                    this._frame = null, this._isFullscreen = !1, this._handleResize = () => {
                        null === this._frame && (this._frame = requestAnimationFrame((() => {
                            this.recalculateBounds(), this._frame = null
                        })))
                    }, this._dialog = e, this._guard = t.guard || d, this._calculateDialogPosition = t.calculateDialogPosition, this._initialHeight = e.style.height, window.addEventListener("resize", this._handleResize)
                }
                updateOptions(e) {
                    this._guard = e.guard || d, this._calculateDialogPosition = e.calculateDialogPosition
                }
                setFullscreen(e) {
                    this._isFullscreen !== e && (this._isFullscreen = e, this.recalculateBounds())
                }
                centerAndFit() {
                    const {
                        x: e,
                        y: t
                    } = this.getDialogsTopLeftCoordinates(), n = this._calcAvailableHeight(), o = this._calcDialogHeight();
                    if (n === o)
                        if (this._calculateDialogPosition) {
                            const {
                                left: e,
                                top: t
                            } = this._calculateDialogPosition(this._dialog, document.documentElement, this._guard);
                            this._dialog.style.transform = `translate(${Math.round(e)}px, ${Math.round(t)}px)`
                        } else this._dialog.style.height = o + "px";
                    this._dialog.style.top = "0px", this._dialog.style.left = "0px", this._dialog.style.transform = `translate(${e}px, ${t}px)`
                }
                getDialogsTopLeftCoordinates() {
                    const {
                        clientHeight: e,
                        clientWidth: t
                    } = document.documentElement, n = this._calcDialogHeight(), o = t / 2 - this._dialog.clientWidth / 2, s = e / 2 - n / 2;
                    return {
                        x: Math.round(o),
                        y: Math.round(s)
                    }
                }
                recalculateBounds() {
                    const {
                        clientHeight: e,
                        clientWidth: t
                    } = document.documentElement;
                    if (this._isFullscreen) this._dialog.style.top = "0px", this._dialog.style.left = "0px", this._dialog.style.width = "100%", this._dialog.style.height = "100%",
                        this._dialog.style.transform = "none";
                    else {
                        const {
                            vertical: n
                        } = this._guard;
                        if (this._calculateDialogPosition) {
                            const o = this._calculateDialogPosition(this._dialog, {
                                    clientWidth: t,
                                    clientHeight: e
                                }, {
                                    vertical: n
                                }),
                                {
                                    left: s,
                                    top: r
                                } = o;
                            this._dialog.style.transform = `translate(${Math.round(s)}px, ${Math.round(r)}px)`
                        } else {
                            this._dialog.style.width = "", this._dialog.style.height = "";
                            const o = this._dialog.getBoundingClientRect(),
                                s = e - 2 * n,
                                r = (0, u.clampSegment)(o.left, o.width, 0, t),
                                i = (0, u.clampSegment)(o.top, o.height, n, e);
                            this._dialog.style.top = "0px", this._dialog.style.left = "0px", this._dialog.style.transform = `translate(${Math.round(r)}px, ${Math.round(i)}px)`, this._dialog.style.height = s < o.height ? s + "px" : this._initialHeight
                        }
                    }
                }
                destroy() {
                    window.removeEventListener("resize", this._handleResize), null !== this._frame && (cancelAnimationFrame(this._frame), this._frame = null)
                }
                _calcDialogHeight() {
                    const e = this._calcAvailableHeight();
                    return e < this._dialog.clientHeight ? e : this._dialog.clientHeight
                }
                _calcAvailableHeight() {
                    return document.documentElement.clientHeight - 2 * this._guard.vertical
                }
            }
            var p = n(707533),
                g = n(8629),
                m = n(575658),
                _ = n(12173),
                f = n(419283);
            const v = f["tooltip-offset"];
            class y extends o.PureComponent {
                constructor(e) {
                    super(e), this._dialog = null, this._cleanUpFunctions = [], this._prevActiveElement = null, this._handleDialogRef = e => {
                        const {
                            reference: t
                        } = this.props;
                        this._dialog = e, "function" == typeof t && t(e)
                    }, this._handleFocus = e => {
                        this._moveToTop()
                    }, this._handleMouseDown = e => {
                        this._moveToTop()
                    }, this._handleTouchStart = e => {
                        this._moveToTop()
                    }, this.state = {
                        canFitTooltip: !1
                    }
                }
                render() {
                    return o.createElement(g.PopupContext.Provider, {
                        value: this
                    }, o.createElement(l.OutsideEvent, {
                        mouseDown: !0,
                        touchStart: !0,
                        handler: this.props.onClickOutside
                    }, (e => o.createElement("div", {
                        ref: e,
                        "data-outside-boundary-for": this.props.name,
                        onFocus: this._handleFocus,
                        onMouseDown: this._handleMouseDown,
                        onTouchStart: this._handleTouchStart,
                        "data-dialog-name": this.props["data-dialog-name"]
                    }, o.createElement(i.Dialog, {
                        style: this._applyAnimationCSSVariables(),
                        ...this.props,
                        reference: this._handleDialogRef,
                        className: s(f.dialog, this.props.className)
                    }, this.props.dialogTooltip && this.state.canFitTooltip && o.createElement(_.TooltipWidget, {
                        className: f.dialogTooltip
                    }, this.props.dialogTooltip), this.props.children)))))
                }
                componentDidMount() {
                    const {
                        draggable: e,
                        boundByScreen: t,
                        onDragStart: n
                    } = this.props, o = (0, r.ensureNotNull)(this._dialog);
                    if (e) {
                        const e = o.querySelector("[data-dragg-area]");
                        if (e && e instanceof HTMLElement) {
                            const s = new c.DragHandler(o, e, {
                                boundByScreen: Boolean(t),
                                onDragStart: n
                            });
                            this._cleanUpFunctions.push((() => s.destroy())), this._drag = s
                        }
                    }
                    this._prevActiveElement = document.activeElement, this.props.autofocus && !o.contains(document.activeElement) && o.focus(), (this._isFullScreen() || this.props.fixedBody) && (0, m.setFixedBodyState)(!0);
                    const {
                        guard: s,
                        calculateDialogPosition: i
                    } = this.props;
                    if (this.props.resizeHandler) this._resize = this.props.resizeHandler;
                    else {
                        const e = new h(o, {
                            guard: s,
                            calculateDialogPosition: i
                        });
                        this._cleanUpFunctions.push((() => e.destroy())), this._resize = e
                    }
                    this.props.isAnimationEnabled && this.props.growPoint && this._applyAppearanceAnimation(this.props.growPoint), this.props.centeredOnMount && this._resize.centerAndFit(), this._resize.setFullscreen(this._isFullScreen()), this.props.dialogTooltip && this._handleTooltipFit(), this.props.shouldForceFocus && o.focus()
                }
                componentDidUpdate() {
                    if (this._resize) {
                        const {
                            guard: e,
                            calculateDialogPosition: t
                        } = this.props;
                        this._resize.updateOptions({
                            guard: e,
                            calculateDialogPosition: t
                        }), this._resize.setFullscreen(this._isFullScreen())
                    }
                    this._drag && this._drag.updateOptions({
                        boundByScreen: Boolean(this.props.boundByScreen),
                        onDragStart: this.props.onDragStart
                    })
                }
                componentWillUnmount() {
                    var e;
                    if (this._prevActiveElement && document.body.contains(this._prevActiveElement) && (null === document.activeElement || document.activeElement === document.body || (null === (e = this._dialog) || void 0 === e ? void 0 : e.contains(document.activeElement)))) try {
                        this._prevActiveElement.focus({
                            preventScroll: !0
                        })
                    } catch (e) {}
                    for (const e of this._cleanUpFunctions) e();
                    (this._isFullScreen() || this.props.fixedBody) && (0, m.setFixedBodyState)(!1)
                }
                focus() {
                    this._dialog && this._dialog.focus()
                }
                centerAndFit() {
                    this._resize && this._resize.centerAndFit()
                }
                recalculateBounds() {
                    this._resize && this._resize.recalculateBounds()
                }
                _moveToTop() {
                    null !== this.context && this.context.moveToTop()
                }
                _applyAnimationCSSVariables() {
                    return {
                        "--animationTranslateStartX": null,
                        "--animationTranslateStartY": null,
                        "--animationTranslateEndX": null,
                        "--animationTranslateEndY": null
                    }
                }
                _applyAppearanceAnimation(e) {
                    if (this._resize && this._dialog) {
                        const {
                            x: t,
                            y: n
                        } = e, {
                            x: o,
                            y: s
                        } = this._resize.getDialogsTopLeftCoordinates();
                        this._dialog.style.setProperty("--animationTranslateStartX", `${t}px`), this._dialog.style.setProperty("--animationTranslateStartY", `${n}px`), this._dialog.style.setProperty("--animationTranslateEndX", `${o}px`), this._dialog.style.setProperty("--animationTranslateEndY", `${s}px`), this._dialog.classList.add(f.dialogAnimatedAppearance)
                    }
                }
                _handleTooltipFit() {
                    if (this._resize) {
                        const e = this._resize.getDialogsTopLeftCoordinates().y - parseInt(v) >= 0;
                        this.setState({
                            canFitTooltip: e
                        })
                    }
                }
                _isFullScreen() {
                    return Boolean(this.props.fullscreen)
                }
            }
            y.contextType = p.PortalContext, y.defaultProps = {
                boundByScreen: !0,
                draggable: !0,
                centeredOnMount: !0
            };
            const E = (0, a.makeOverlapable)(y)
        },
        686668: (e, t, n) => {
            "use strict";
            n.d(t, {
                clampSegment: () => s,
                clampPosition: () => r,
                simulateClick: () => i,
                positionFromMouseEvent: () => a,
                positionFromTouchEvent: () => l
            });
            var o = n(43329);

            function s(e, t, n, o) {
                return e + t > o && (e = o - t), e < n && (e = n), e
            }

            function r(e) {
                return {
                    x: (0, o.clamp)(e.x, 20, document.documentElement.clientWidth - 20),
                    y: (0, o.clamp)(e.y, 20, window.innerHeight - 20)
                }
            }

            function i(e) {
                if (e instanceof SVGElement) {
                    const t = document.createEvent("SVGEvents");
                    t.initEvent("click", !0, !0), e.dispatchEvent(t)
                }
                e instanceof HTMLElement && e.click()
            }

            function a(e) {
                return {
                    x: e.clientX,
                    y: e.clientY
                }
            }

            function l(e) {
                return {
                    x: e.touches[0].clientX,
                    y: e.touches[0].clientY
                }
            }
        },
        56537: (e, t, n) => {
            "use strict";
            n.d(t, {
                useForceUpdate: () => s
            });
            var o = n(50959);
            const s = () => {
                const [, e] = (0, o.useReducer)((e => e + 1), 0);
                return e
            }
        },
        631078: (e, t, n) => {
            "use strict";
            n.d(t, {
                useWatchedValueReadonly: () => s
            });
            var o = n(50959);
            const s = (e, t = !1) => {
                const n = "watchedValue" in e ? e.watchedValue : void 0,
                    s = "defaultValue" in e ? e.defaultValue : e.watchedValue.value(),
                    [r, i] = (0, o.useState)(n ? n.value() : s);
                return (t ? o.useLayoutEffect : o.useEffect)((() => {
                    if (n) {
                        i(n.value());
                        const e = e => i(e);
                        return n.subscribe(e), () => n.unsubscribe(e)
                    }
                    return () => {}
                }), [n]), r
            }
        },
        635194: e => {
            e.exports = {
                button: "button-uO7HM85b",
                hover: "hover-uO7HM85b",
                isInteractive: "isInteractive-uO7HM85b",
                isGrouped: "isGrouped-uO7HM85b",
                isActive: "isActive-uO7HM85b",
                isOpened: "isOpened-uO7HM85b",
                isDisabled: "isDisabled-uO7HM85b",
                text: "text-uO7HM85b",
                icon: "icon-uO7HM85b"
            }
        },
        977907: e => {
            e.exports = {
                title: "title-t_2RnW3_"
            }
        },
        17049: e => {
            e.exports = {
                button: "button-reABrhVR",
                hover: "hover-reABrhVR",
                arrow: "arrow-reABrhVR",
                arrowWrap: "arrowWrap-reABrhVR",
                isOpened: "isOpened-reABrhVR"
            }
        },
        864929: (e, t, n) => {
            "use strict";
            n.d(t, {
                getImage: () => r
            });
            const o = new Map;

            function s(e) {
                e.crossOrigin = "anonymous"
            }

            function r(e, t, n = s) {
                let r = o.get(e);
                return void 0 === r && (r = new Promise(((e, o) => {
                    const s = new Image;
                    s.onload = () => {
                        e(s), s.onload = null, s.onerror = null
                    }, s.onerror = () => {
                        o(), s.onload = null, s.onerror = null
                    }, n(s), s.src = t
                })), o.set(e, r)), r
            }
        },
        983731: (e, t, n) => {
            "use strict";
            n.d(t, {
                DEFAULT_TOOL_WIDGET_BUTTON_THEME: () => a,
                ToolWidgetButton: () => l
            });
            var o = n(50959),
                s = n(497754),
                r = n(83436),
                i = n(635194);
            const a = i,
                l = o.forwardRef(((e, t) => {
                    const {
                        icon: n,
                        isActive: a,
                        isOpened: l,
                        isDisabled: c,
                        isGrouped: u,
                        isHovered: d,
                        onClick: h,
                        text: p,
                        textBeforeIcon: g,
                        title: m,
                        theme: _ = i,
                        className: f,
                        forceInteractive: v,
                        "data-name": y,
                        ...E
                    } = e, b = s(f, _.button, m && "apply-common-tooltip", {
                        [_.isActive]: a,
                        [_.isOpened]: l,
                        [_.isInteractive]: (v || Boolean(h)) && !c,
                        [_.isDisabled]: c,
                        [_.isGrouped]: u,
                        [_.hover]: d
                    }), x = n && ("string" == typeof n ? o.createElement(r.Icon, {
                        className: _.icon,
                        icon: n
                    }) : o.cloneElement(n, {
                        className: s(_.icon, n.props.className)
                    }));
                    return o.createElement("div", { ...E,
                        ref: t,
                        "data-role": "button",
                        className: b,
                        onClick: c ? void 0 : h,
                        title: m,
                        "data-name": y
                    }, g && p && o.createElement("div", {
                        className: s("js-button-text", _.text)
                    }, p), x, !g && p && o.createElement("div", {
                        className: s("js-button-text", _.text)
                    }, p))
                }))
        },
        928089: (e, t, n) => {
            "use strict";
            n.d(t, {
                ToolWidgetMenuSummary: () => i
            });
            var o = n(50959),
                s = n(497754),
                r = n(977907);

            function i(e) {
                return o.createElement("div", {
                    className: s(e.className, r.title)
                }, e.children)
            }
        },
        575296: (e, t, n) => {
            "use strict";
            n.d(t, {
                DEFAULT_TOOL_WIDGET_MENU_THEME: () => g,
                ToolWidgetMenu: () => m
            });
            var o = n(50959),
                s = n(497754),
                r = n(591800),
                i = n(45968),
                a = n(416293),
                l = n(8626),
                c = n(332585),
                u = n(762852),
                d = n(898930),
                h = n(18182),
                p = n(17049);
            const g = p;
            class m extends o.PureComponent {
                constructor(e) {
                    super(e), this._wrapperRef = null, this._controller = o.createRef(), this._handleWrapperRef = e => {
                            this._wrapperRef = e, this.props.reference && this.props.reference(e)
                        }, this._handleClick = e => {
                            e.target instanceof Node && e.currentTarget.contains(e.target) && (this._handleToggleDropdown(), this.props.onClick && this.props.onClick(e, !this.state.isOpened))
                        }, this._handleToggleDropdown = e => {
                            const {
                                onClose: t,
                                onOpen: n
                            } = this.props, {
                                isOpened: o
                            } = this.state, s = "boolean" == typeof e ? e : !o;
                            this.setState({
                                isOpened: s
                            }), s && n && n(), !s && t && t()
                        },
                        this._handleClose = () => {
                            this.close()
                        }, this._handleKeyDown = e => {
                            27 === (0, r.hashFromEvent)(e) && this.state.isOpened && this.props.closeOnEsc && (e.preventDefault(), e.stopPropagation(), this._handleToggleDropdown())
                        }, this.state = {
                            isOpened: !1
                        }
                }
                render() {
                    const {
                        id: e,
                        arrow: t,
                        content: n,
                        isDisabled: r,
                        isDrawer: i,
                        isShowTooltip: c,
                        title: u,
                        className: d,
                        hotKey: p,
                        theme: g,
                        drawerBreakpoint: m,
                        tabIndex: _
                    } = this.props, {
                        isOpened: f
                    } = this.state, v = s(d, g.button, {
                        "apply-common-tooltip": c || !r,
                        [g.isDisabled]: r,
                        [g.isOpened]: f
                    });
                    return o.createElement("div", {
                        id: e,
                        className: v,
                        onClick: r ? void 0 : this._handleClick,
                        title: u,
                        "data-tooltip-hotkey": p,
                        ref: this._handleWrapperRef,
                        "data-role": "button",
                        tabIndex: _,
                        onKeyDown: this._handleKeyDown,
                        ...(0, l.filterDataProps)(this.props)
                    }, n, t && o.createElement("div", {
                        className: g.arrow
                    }, o.createElement("div", {
                        className: g.arrowWrap
                    }, o.createElement(a.ToolWidgetCaret, {
                        dropped: f
                    }))), this.state.isOpened && (m ? o.createElement(h.MatchMedia, {
                        rule: m
                    }, (e => this._renderContent(e))) : this._renderContent(i)))
                }
                close() {
                    this._handleToggleDropdown(!1)
                }
                update() {
                    null !== this._controller.current && this._controller.current.update()
                }
                _renderContent(e) {
                    const {
                        menuDataName: t,
                        minWidth: n,
                        menuClassName: s,
                        maxHeight: r,
                        drawerPosition: a = "Bottom",
                        children: l
                    } = this.props, {
                        isOpened: h
                    } = this.state, p = {
                        horizontalMargin: this.props.horizontalMargin || 0,
                        verticalMargin: this.props.verticalMargin || 2,
                        verticalAttachEdge: this.props.verticalAttachEdge,
                        horizontalAttachEdge: this.props.horizontalAttachEdge,
                        verticalDropDirection: this.props.verticalDropDirection,
                        horizontalDropDirection: this.props.horizontalDropDirection,
                        matchButtonAndListboxWidths: this.props.matchButtonAndListboxWidths
                    }, g = Boolean(h && e && a), m = function(e) {
                        return "function" == typeof e
                    }(l) ? l({
                        isDrawer: g
                    }) : l;
                    return g ? o.createElement(c.DrawerManager, null, o.createElement(u.Drawer, {
                        onClose: this._handleClose,
                        position: a,
                        "data-name": t
                    }, m)) : o.createElement(i.PopupMenu, {
                        controller: this._controller,
                        closeOnClickOutside: this.props.closeOnClickOutside,
                        doNotCloseOn: this,
                        isOpened: h,
                        minWidth: n,
                        onClose: this._handleClose,
                        position: (0, d.getPopupPositioner)(this._wrapperRef, p),
                        className: s,
                        maxHeight: r,
                        "data-name": t
                    }, m)
                }
            }
            m.defaultProps = {
                arrow: !0,
                closeOnClickOutside: !0,
                theme: p
            }
        }
    }
]);
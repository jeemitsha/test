(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [93571], {
        709404: (o, r, e) => {
            "use strict";
            e.r(r), e.d(r, {
                getExchanges: () => a
            });
            var l = e(486759);

            function a() {
                return l
            }
        },
        484400: (o, r, e) => {
            "use strict";
            e.d(r, {
                DEFAULT_THEME: () => l
            });
            const l = "light"
        },
        369094: (o, r, e) => {
            "use strict";
            e.d(r, {
                themes: () => n
            });
            var l = e(919346),
                a = e(777754);
            const i = JSON.parse('{"color-header-bg":"color-black","color-body-bg":"color-black","color-body-secondary-bg":"color-cold-gray-900","color-bg-primary":"color-cold-gray-850","color-bg-primary-hover":"color-cold-gray-800","color-bg-secondary":"color-cold-gray-900","color-bg-highlight":"color-cold-gray-900","color-bg-scroll-buttons":"color-cold-gray-800","color-legacy-bg-scroll-buttons":"color-cold-gray-550","color-legacy-bg-widget":"color-cold-gray-900","color-text-primary":"color-cold-gray-200","color-text-secondary":"color-cold-gray-450","color-text-tertiary":"color-cold-gray-400","color-text-disabled":"color-cold-gray-650","color-accent-content":"color-white","color-divider":"color-cold-gray-700","color-divider-hover":"color-cold-gray-800","color-divider-secondary":"color-cold-gray-800","color-box-shadow":"color-cold-gray-900","color-active-hover-text":"color-cold-gray-200","color-alert-text":"color-cold-gray-200","color-border":"color-cold-gray-750","color-border-chat-fields":"color-cold-gray-750","color-border-hover":"color-cold-gray-650","color-border-table":"color-cold-gray-800","color-brand":"color-tv-blue-500","color-brand-hover":"color-tv-blue-600","color-brand-active":"color-tv-blue-700","color-button-hover-bg":"color-cold-gray-850","color-chart-page-bg":"color-cold-gray-800","color-common-tooltip-bg":"color-cold-gray-750","color-danger":"color-ripe-red-600","color-danger-hover":"color-ripe-red-500","color-danger-active":"color-ripe-red-400","color-depthrenderer-fill-style":"color-cold-gray-150","color-depthrenderer-stroke-style":"color-cold-gray-650","color-disabled-border-and-color":"color-cold-gray-800","color-disabled-input":"color-cold-gray-750","color-empty-container-message":"color-cold-gray-450","color-highlight-new":"color-tv-blue-a800","color-icons":"color-cold-gray-450","color-input-bg":"color-cold-gray-800","color-input-textarea-readonly":"color-cold-gray-650","color-input-placeholder-text":"color-cold-gray-700","color-input-publish-bg":"color-cold-gray-900","color-item-active-blue":"color-tv-blue-a900","color-item-hover-active-bg":"color-cold-gray-800","color-item-hover-bg":"color-cold-gray-800","color-item-hover-blue":"color-tv-blue-a800","color-item-selected-blue":"color-tv-blue-a800","color-item-active-text":"color-cold-gray-200","color-item-active-bg":"color-tv-blue-500","color-link":"color-tv-blue-500","color-link-hover":"color-tv-blue-600","color-link-active":"color-tv-blue-700","color-list-item":"color-cold-gray-450","color-list-nth-child-bg":"color-cold-gray-850","color-news-highlight":"color-cold-gray-800","color-pane-bg":"color-cold-gray-900","color-pane-secondary-bg":"color-cold-gray-850","color-placeholder":"color-cold-gray-650","color-popup-menu-item-hover-bg":"color-cold-gray-800","color-popup-menu-separator":"color-cold-gray-700","color-row-hover-active-bg":"color-cold-gray-800","color-sb-scrollbar-body-bg":"color-cold-gray-650","color-screener-description":"color-cold-gray-200","color-section-separator-border":"color-cold-gray-750","color-search-button-hover":"color-cold-gray-700","color-separator-table-chat":"color-cold-gray-750","color-success":"color-minty-green-700","color-success-hover":"color-minty-green-600","color-success-active":"color-minty-green-500","color-tag-active-bg":"color-cold-gray-750","color-tag-hover-bg":"color-cold-gray-800","color-text-regular":"color-cold-gray-200","color-toolbar-button-text":"color-cold-gray-200","color-toolbar-button-text-hover":"color-cold-gray-200","color-toolbar-button-text-active":"color-tv-blue-500","color-toolbar-button-text-active-hover":"color-tv-blue-600","color-toolbar-button-background-hover":"color-cold-gray-800","color-toolbar-button-background-secondary-hover":"color-cold-gray-750","color-toolbar-button-background-active":"color-tv-blue-a900","color-toolbar-button-background-active-hover":"color-tv-blue-a800","color-toolbar-toggle-button-background-active":"color-tv-blue-500","color-toolbar-toggle-button-background-active-hover":"color-tv-blue-600","color-toolbar-toggle-button-icon":"color-cold-gray-650","color-toolbar-interactive-element-text-normal":"color-cold-gray-200","color-toolbar-interactive-element-text-hover":"color-cold-gray-250","color-toolbar-opened-element-bg":"color-cold-gray-800","color-toolbar-divider-background":"color-cold-gray-700","color-tooltip-bg":"color-cold-gray-750","color-tv-button-checked":"color-cold-gray-500","color-tv-dialog-caption":"color-cold-gray-50","color-tv-dropdown-item-hover-bg":"color-cold-gray-800","color-underlined-text":"color-cold-gray-300","color-widget-pages-bg":"color-cold-gray-900","color-warning":"color-tan-orange-700","color-forex-icon":"color-white","color-list-item-active-bg":"color-tv-blue-500","color-list-item-hover-bg":"color-cold-gray-800","color-list-item-text":"color-cold-gray-200","color-price-axis-label-back":"color-cold-gray-800","color-price-axis-label-text":"color-cold-gray-500","color-price-axis-gear":"color-cold-gray-500","color-price-axis-gear-hover":"color-cold-gray-400","color-price-axis-highlight":"color-cold-gray-800","color-bid":"color-tv-blue-500","color-scroll-bg":"color-cold-gray-750","color-scroll-border":"color-cold-gray-850","color-widget-border":"color-cold-gray-800","color-scroll-buttons-arrow":"color-white","color-control-intent-default":"color-cold-gray-650","color-control-intent-success":"color-minty-green-500","color-control-intent-primary":"color-tv-blue-500","color-control-intent-warning":"color-tan-orange-500","color-control-intent-danger":"color-ripe-red-700","color-growing":"color-minty-green-500","color-falling":"color-ripe-red-500","color-goto-label-background":"color-cold-gray-650","color-pre-market":"color-tan-orange-600","color-pre-market-bg":"color-tan-orange-400","color-post-market":"color-tv-blue-500","color-post-market-bg":"color-tv-blue-400","color-market-open":"color-minty-green-500","color-market-open-bg":"color-minty-green-400","color-market-closed":"color-cold-gray-400","color-market-holiday":"color-cold-gray-400","color-market-expired":"color-ripe-red-500","color-invalid-symbol":"color-ripe-red-400","color-invalid-symbol-hover":"color-ripe-red-500","color-replay-mode":"color-tv-blue-500","color-replay-mode-point-select":"color-cold-gray-250","color-replay-mode-icon":"color-tv-blue-50","color-replay-mode-hover":"color-tv-blue-600","color-notaccurate-mode":"color-berry-pink-700","color-notaccurate-mode-bg":"color-berry-pink-400","color-delay-mode":"color-tan-orange-700","color-delay-mode-bg":"color-tan-orange-400","color-eod-mode":"color-grapes-purple-700","color-eod-mode-bg":"color-grapes-purple-400","color-data-problem":"color-ripe-red-600","color-data-problem-bg":"color-ripe-red-400","color-data-problem-hover":"color-ripe-red-500","color-list-item-bg-highlighted":"color-tv-blue-a900","color-list-item-bg-selected":"color-tv-blue-a800","color-list-item-bg-highlighted-hover":"color-tv-blue-a800","color-list-item-bg-selected-hover":"color-tv-blue-a700","color-screener-header-bg":"color-cold-gray-850","color-screener-header-bg-hover":"color-cold-gray-800","color-overlay":"color-cold-gray-950","color-boost-button-content-selected":"color-tv-blue-100","color-boost-button-content-hover":"color-white","color-boost-button-bg-hover":"color-cold-gray-750","color-boost-button-border-hover":"color-cold-gray-750","color-boost-button-border-default":"color-cold-gray-700","color-card-border":"color-cold-gray-700","color-card-border-hover":"color-cold-gray-600","color-background-special-primary":"color-black","color-stroke-special-primary":"color-cold-gray-800","color-selection-bg":"color-tv-blue-a700"}'),
                t = JSON.parse('{"color-toolbar-button-text-active":"color-seeking-alpha-brand"}');
            var c = e(314967);
            const n = {
                [l.StdTheme.Light]: {
                    name: l.StdTheme.Light,
                    label: () => a.t(null, {
                        context: "colorThemeName"
                    }, e(669841)),
                    order: 2,
                    getThemedColor: o => (0, c.getHexColorByName)(o)
                },
                [l.StdTheme.Dark]: {
                    name: l.StdTheme.Dark,
                    label: () => a.t(null, {
                        context: "colorThemeName"
                    }, e(14642)),
                    order: 1,
                    getThemedColor: o => {
                        const r = i[o] || o;
                        return (0, c.getHexColorByName)(r)
                    }
                }
            };
            n.sa = {
                isPrivate: !0,
                noChartTheme: !0,
                name: "sa",
                getThemedColor: o => {
                    const r = t[o] || o;
                    return (0, c.getHexColorByName)(r)
                }
            }
        },
        486759: (o, r, e) => {
            o.exports = [{
                value: "",
                name: "All Exchanges",
                desc: e(777754).t(null, void 0, e(18383)),
                flag: "",
                country: "",
                group: "AllExchanges",
                providerId: ""
            }, {
                value: "BITHUMB",
                name: "Bithumb",
                desc: e(777754).t(null, void 0, e(906984)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bithumb"
            }, {
                value: "BITKUB",
                name: "BITKUB",
                desc: e(777754).t(null, void 0, e(973073)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitkub"
            }, {
                value: "BITRUE",
                name: "Bitrue",
                desc: e(777754).t(null, void 0, e(921076)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitrue"
            }, {
                value: "COINMETRICS",
                name: "Coin Metrics",
                desc: e(777754).t(null, void 0, e(476804)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "coinmetrics"
            }, {
                value: "MEXC",
                name: "MEXC Global",
                desc: e(777754).t(null, void 0, e(42257)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "mexc"
            }, {
                value: "GATEIO",
                name: "Gate.io",
                desc: e(777754).t(null, void 0, e(434055)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "gateio"
            }, {
                value: "796",
                name: "796",
                desc: e(777754).t(null, void 0, e(883762)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "COINFLOOR",
                name: "Coinfloor",
                desc: e(777754).t(null, void 0, e(487749)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "coinfloor"
            }, {
                value: "DERIBIT",
                name: "Deribit",
                desc: e(777754).t(null, void 0, e(864518)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "deribit"
            }, {
                value: "DEFILLAMA",
                name: "Defi Llama",
                desc: e(777754).t(null, void 0, e(70240)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "defillama"
            }, {
                value: "CURRENCYCOM",
                name: "Currencycom",
                desc: e(777754).t(null, void 0, e(148545)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "currencycom"
            }, {
                value: "GLASSNODE",
                name: "Glassnode",
                desc: e(777754).t(null, void 0, e(934859)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "glassnode"
            }, {
                value: "OKX",
                name: "OKX",
                desc: e(777754).t(null, void 0, e(308995)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "okx"
            }, {
                value: "PANGOLIN",
                name: "Pangolin (Avalanche)",
                desc: e(777754).t(null, void 0, e(880397)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "pangolin"
            }, {
                value: "PANCAKESWAP",
                name: "PancakeSwap",
                desc: e(777754).t(null, void 0, e(243391)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "pancakeswap"
            }, {
                value: "PYTH",
                name: "Pyth",
                desc: e(777754).t(null, void 0, e(403221)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "pyth"
            }, {
                value: "SPOOKYSWAP",
                name: "SpookySwap (Fantom)",
                desc: e(777754).t(null, void 0, e(746542)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "spookyswap"
            }, {
                value: "WHITEBIT",
                name: "WhiteBIT",
                desc: e(777754).t(null, void 0, e(592774)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "whitebit"
            }, {
                value: "WOONETWORK",
                name: "WOO",
                desc: e(777754).t(null, void 0, e(839751)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "woonetwork"
            }, {
                value: "DYDX",
                name: "dYdX",
                desc: e(777754).t(null, void 0, e(105453)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "dydx"
            }, {
                value: "ADX",
                name: "ADX",
                desc: e(777754).t(null, void 0, e(936934)),
                flag: "ae",
                group: "Middle East / Africa",
                country: "ae",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(975308)), e(777754).t(null, void 0, e(287916))]
            }, {
                value: "DFM",
                name: "DFM",
                desc: e(777754).t(null, void 0, e(535232)),
                flag: "ae",
                group: "Middle East / Africa",
                country: "ae",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(975308)), e(777754).t(null, void 0, e(287916))]
            }, {
                value: "LSE",
                name: "LSE",
                desc: e(777754).t(null, void 0, e(454623)),
                flag: "uk",
                group: "Europe",
                country: "uk",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(846792)), e(777754).t(null, void 0, e(606994))]
            }, {
                value: "LSIN",
                name: "LSIN",
                desc: e(777754).t(null, void 0, e(249934)),
                flag: "uk",
                group: "Europe",
                country: "uk",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(846792)), e(777754).t(null, void 0, e(606994))]
            }, {
                value: "TURQUOISE",
                name: "Turquoise",
                desc: e(777754).t(null, void 0, e(258419)),
                flag: "uk",
                group: "Europe",
                country: "uk",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(846792)), e(777754).t(null, void 0, e(606994))]
            }, {
                value: "EUREX",
                name: "EUREX",
                desc: e(777754).t(null, void 0, e(376029)),
                flag: "europe",
                group: "Europe",
                country: "eu",
                providerId: ""
            }, {
                value: "MGEX",
                name: "MGEX",
                desc: e(777754).t(null, void 0, e(14406)),
                flag: "usa",
                hideInSymbolSearch: !0,
                group: "North America",
                country: "us",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "NASDAQ",
                name: "NASDAQ",
                desc: e(777754).t(null, void 0, e(227691)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 1,
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "NYSE",
                name: "NYSE",
                desc: e(777754).t(null, void 0, e(872667)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 2,
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "AMEX",
                name: "Arca",
                desc: e(777754).t(null, void 0, e(468841)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 3,
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "OTC",
                name: "OTC",
                desc: e(777754).t(null, void 0, e(448920)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 4,
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "DJ",
                name: "DJ",
                desc: e(777754).t(null, void 0, e(623778)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 5,
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "SP",
                name: "SP",
                desc: e(777754).t(null, void 0, e(662397)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 6,
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "CBOE",
                name: "CBOE",
                desc: e(777754).t(null, void 0, e(1596)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 7,
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "CBOEEU",
                name: "CBOE EU",
                desc: e(777754).t(null, void 0, e(975674)),
                flag: "europe",
                group: "Europe",
                country: "eu",
                providerId: ""
            }, {
                value: "CBOT",
                name: "CBOT",
                desc: e(777754).t(null, void 0, e(581563)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 8,
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "CME",
                name: "CME GLOBEX",
                desc: e(777754).t(null, void 0, e(425193)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 9,
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "COMEX",
                name: "COMEX",
                desc: e(777754).t(null, void 0, e(584533)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 10,
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "NYMEX",
                name: "NYMEX",
                desc: e(777754).t(null, void 0, e(336499)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 11,
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "ICEUS",
                name: "ICEUS",
                desc: e(777754).t(null, void 0, e(403509)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 12,
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "FAIRX",
                name: "FairX",
                desc: e(777754).t(null, void 0, e(187464)),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 13,
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "CSE",
                name: "CSE",
                desc: e(777754).t(null, void 0, e(465782)),
                flag: "canada",
                group: "North America",
                country: "ca",
                priorityInGroup: 13,
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(280206))]
            }, {
                value: "NEO",
                name: "NEO",
                desc: e(777754).t(null, void 0, e(278436)),
                flag: "canada",
                group: "North America",
                country: "ca",
                priorityInGroup: 14,
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(280206))]
            }, {
                value: "TSX",
                name: "TSX",
                desc: e(777754).t(null, void 0, e(949042)),
                flag: "canada",
                group: "North America",
                country: "ca",
                priorityInGroup: 15,
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(280206))]
            }, {
                value: "TSXV",
                name: "TSXV",
                desc: e(777754).t(null, void 0, e(12815)),
                flag: "canada",
                group: "North America",
                country: "ca",
                priorityInGroup: 16,
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(280206))]
            }, {
                value: "MOEX",
                name: "MOEX",
                desc: e(777754).t(null, void 0, e(73467)),
                flag: "russia",
                group: "Europe",
                country: "ru",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(238201))]
            }, {
                value: "MYX",
                name: "MYX",
                desc: e(777754).t(null, void 0, e(887964)),
                flag: "malaysia",
                group: "Asia / Pacific",
                country: "my",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(622622))]
            }, {
                value: "FTSEMYX",
                name: "FTSE",
                desc: e(777754).t(null, void 0, e(40698)),
                flag: "malaysia",
                group: "Asia / Pacific",
                country: "my",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(622622))]
            }, {
                value: "HOSE",
                name: "HOSE",
                desc: e(777754).t(null, void 0, e(34416)),
                flag: "vietnam",
                group: "Asia / Pacific",
                country: "vn",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(450049))]
            }, {
                value: "HNX",
                name: "HNX",
                desc: e(777754).t(null, void 0, e(653194)),
                flag: "vietnam",
                group: "Asia / Pacific",
                country: "vn",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(450049))]
            }, {
                value: "UPCOM",
                name: "HNX",
                desc: e(777754).t(null, void 0, e(696591)),
                flag: "vietnam",
                group: "Asia / Pacific",
                country: "vn",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(450049))]
            }, {
                value: "CSELK",
                name: "CSE",
                desc: e(777754).t(null, void 0, e(429971)),
                flag: "sri_lanka",
                group: "Asia / Pacific",
                country: "lk",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(567835))]
            }, {
                value: "BITSTAMP",
                name: "Bitstamp",
                desc: e(777754).t(null, void 0, e(42285)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitstamp"
            }, {
                value: "ACTIVTRADES",
                name: "ActivTrades",
                desc: e(777754).t(null, void 0, e(34342)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "activtrades"
            }, {
                value: "BLACKBULL",
                name: "BlackBull Markets",
                desc: e(777754).t(null, void 0, e(802620)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "blackbullmarkets"
            }, {
                value: "VANTAGE",
                name: "Vantage FX",
                desc: e(777754).t(null, void 0, e(757399)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "vantagefx"
            }, {
                value: "VELOCITY",
                name: "Velocity Trade",
                desc: e(777754).t(null, void 0, e(650469)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "velocitytrade"
            }, {
                value: "FX",
                name: "FXCM",
                desc: e(777754).t(null, void 0, e(592901)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "fxcm"
            }, {
                value: "FXOPEN",
                name: "FXOpen",
                desc: e(777754).t(null, void 0, e(638398)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "fxopen"
            }, {
                value: "EIGHTCAP",
                name: "Eightcap",
                desc: e(777754).t(null, void 0, e(910807)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "eightcap"
            }, {
                value: "BTCE",
                name: "BTC-e",
                desc: e(777754).t(null, void 0, e(675334)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "HONEYSWAP",
                name: "Honeyswap (xDai)",
                desc: e(777754).t(null, void 0, e(499767)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "honeyswap"
            }, {
                value: "HONEYSWAPPOLYGON",
                name: "Honeyswap (Polygon)",
                desc: e(777754).t(null, void 0, e(880739)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "honeyswap"
            }, {
                value: "BSE",
                name: "BSE",
                desc: e(777754).t(null, void 0, e(799931)),
                flag: "india",
                group: "Asia / Pacific",
                country: "in",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(16207))]
            }, {
                value: "NYMEX_MINI",
                name: "NYMEX E-mini",
                desc: e(777754).t(null, void 0, e(232852)),
                flag: "usa",
                group: "North America",
                hideInSymbolSearch: !0,
                country: "us",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "COMEX_MINI",
                name: "COMEX E-mini",
                desc: e(777754).t(null, void 0, e(695270)),
                flag: "usa",
                group: "North America",
                hideInSymbolSearch: !0,
                country: "us",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "ICEEUR",
                name: "ICEEUR",
                desc: e(777754).t(null, void 0, e(947701)),
                flag: "europe",
                group: "Europe",
                country: "eu",
                providerId: ""
            }, {
                value: "NSE",
                name: "NSE",
                desc: e(777754).t(null, void 0, e(803867)),
                flag: "india",
                group: "Asia / Pacific",
                country: "in",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(16207))]
            }, {
                value: "MCX",
                name: "MCX",
                desc: e(777754).t(null, void 0, e(753577)),
                flag: "india",
                group: "Asia / Pacific",
                country: "in",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(16207))]
            }, {
                value: "NCDEX",
                name: "NCDEX",
                desc: e(777754).t(null, void 0, e(915091)),
                flag: "india",
                group: "Asia / Pacific",
                country: "in",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(16207))]
            }, {
                value: "KCBT",
                name: "KCBT",
                desc: e(777754).t(null, void 0, e(610871)),
                flag: "usa",
                hideInSymbolSearch: !0,
                group: "North America",
                country: "us",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "OKCOIN",
                name: "OKCoin",
                desc: e(777754).t(null, void 0, e(798361)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "okcoin"
            }, {
                value: "CBOT_MINI",
                name: "CBOT E-mini",
                desc: e(777754).t(null, void 0, e(123780)),
                flag: "usa",
                group: "North America",
                hideInSymbolSearch: !0,
                country: "us",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "KRAKEN",
                name: "Kraken",
                desc: e(777754).t(null, void 0, e(961932)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "kraken"
            }, {
                value: "KUCOIN",
                name: "KuCoin",
                desc: e(777754).t(null, void 0, e(850627)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "kucoin"
            }, {
                value: "XEXCHANGE",
                name: "xExchange",
                desc: e(777754).t(null, void 0, e(734830)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "xexchange"
            }, {
                value: "CME_MINI",
                name: "CME E-mini",
                desc: e(777754).t(null, void 0, e(378106)),
                flag: "usa",
                group: "North America",
                hideInSymbolSearch: !0,
                country: "us",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "DJ",
                name: "DJ",
                desc: e(777754).t(null, void 0, e(973151)),
                flag: "usa",
                hideInSymbolSearch: !0,
                group: "North America",
                country: "us",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "SP",
                name: "SP",
                desc: e(777754).t(null, void 0, e(869919)),
                flag: "usa",
                hideInSymbolSearch: !0,
                group: "North America",
                country: "us",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "BTCCHINA",
                name: "BTC China",
                desc: e(777754).t(null, void 0, e(599193)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "KORBIT",
                name: "Korbit",
                desc: e(777754).t(null, void 0, e(281254)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "korbit"
            }, {
                value: "THEROCKTRADING",
                name: "The Rock Trading",
                desc: e(777754).t(null, void 0, e(217714)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "therocktrading"
            }, {
                value: "TIMEX",
                name: "TimeX",
                desc: e(777754).t(null, void 0, e(773557)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "timex"
            }, {
                value: "ANX",
                name: "ANX",
                desc: e(777754).t(null, void 0, e(198372)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "MEXBT",
                name: "meXBT",
                desc: e(777754).t(null, void 0, e(668490)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "GEMINI",
                name: "Gemini",
                desc: e(777754).t(null, void 0, e(201367)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "gemini"
            }, {
                value: "BITVC",
                name: "BitVC",
                desc: e(777754).t(null, void 0, e(357531)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "BITYES",
                name: "BitYes",
                desc: e(777754).t(null, void 0, e(945663)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "BNC",
                name: "BNC",
                desc: e(777754).t(null, void 0, e(364180)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "BITFLYER",
                name: "bitFlyer",
                desc: e(777754).t(null, void 0, e(704862)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitflyer"
            }, {
                value: "BYBIT",
                name: "Bybit",
                desc: e(777754).t(null, void 0, e(801800)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bybit"
            }, {
                value: "BITMEX",
                name: "BitMEX",
                desc: e(777754).t(null, void 0, e(890561)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitmex"
            }, {
                value: "BITPANDAPRO",
                name: "Bitpanda Pro",
                desc: e(777754).t(null, void 0, e(555437)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitpanda"
            }, {
                value: "CAPITALCOM",
                name: "Capital.com",
                desc: e(777754).t(null, void 0, e(148674)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "capitalcom"
            }, {
                value: "COINEX",
                name: "CoinEx",
                desc: e(777754).t(null, void 0, e(328681)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "coinex"
            }, {
                value: "EXMO",
                name: "EXMO",
                desc: e(777754).t(null, void 0, e(924753)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "exmo2"
            }, {
                value: "INTOTHEBLOCK",
                name: "IntoTheBlock",
                desc: e(777754).t(null, void 0, e(830996)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "intotheblock"
            }, {
                value: "EASYMARKETS",
                name: "easyMarkets",
                desc: e(777754).t(null, void 0, e(339210)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "easymarkets"
            }, {
                value: "FOREXCOM",
                name: "FOREX.com",
                desc: e(777754).t(null, void 0, e(395068)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "gain"
            }, {
                value: "FX_IDC",
                name: "ICE",
                desc: e(777754).t(null, void 0, e(89446)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "ice"
            }, {
                value: "GLOBALPRIME",
                name: "GLOBALPRIME",
                desc: e(777754).t(null, void 0, e(572057)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "globalprime"
            }, {
                value: "IBROKER",
                name: "iBroker",
                desc: e(777754).t(null, void 0, e(51966)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "ibroker"
            }, {
                value: "CEXIO",
                name: "CEX.IO",
                desc: e(777754).t(null, void 0, e(885953)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "cexio"
            }, {
                value: "BITSO",
                name: "Bitso",
                desc: e(777754).t(null, void 0, e(414630)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitso"
            }, {
                value: "BITFINEX",
                name: "Bitfinex",
                desc: e(777754).t(null, void 0, e(572762)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitfinex"
            }, {
                value: "MTGOX",
                name: "Mt.Gox",
                desc: e(777754).t(null, void 0, e(808754)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: "mtgox"
            }, {
                value: "PHEMEX",
                name: "Phemex",
                desc: e(777754).t(null, void 0, e(972718)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "phemex"
            }, {
                value: "POLONIEX",
                name: "Poloniex",
                desc: e(777754).t(null, void 0, e(311014)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "poloniex"
            }, {
                value: "QUICKSWAP",
                name: "QuickSwap (Polygon)",
                desc: e(777754).t(null, void 0, e(478675)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "quickswap"
            }, {
                value: "SUSHISWAP",
                name: "SushiSwap (Ethereum)",
                desc: e(777754).t(null, void 0, e(656920)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "sushiswap"
            }, {
                value: "SUSHISWAPPOLYGON",
                name: "SushiSwap (Polygon)",
                desc: e(777754).t(null, void 0, e(568905)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "sushiswap"
            }, {
                value: "TRADERJOE",
                name: "Trader Joe (Avalanche)",
                desc: e(777754).t(null, void 0, e(319746)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "traderjoe"
            }, {
                value: "TRADESTATION",
                name: "TradeStation",
                desc: e(777754).t(null, void 0, e(437523)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "tradestation"
            }, {
                value: "UNISWAP",
                name: "Uniswap v2 (Ethereum)",
                desc: e(777754).t(null, void 0, e(725990)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "uniswap"
            }, {
                value: "UNISWAP3ETH",
                name: "Uniswap v3 (Ethereum)",
                desc: e(777754).t(null, void 0, e(670485)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "uniswap"
            }, {
                value: "UNISWAP3POLYGON",
                name: "Uniswap v3 (Polygon)",
                desc: e(777754).t(null, void 0, e(506595)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "uniswap"
            }, {
                value: "UNISWAP3ARBITRUM",
                name: "Uniswap v3 (Arbitrum)",
                desc: e(777754).t(null, void 0, e(419861)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "uniswap"
            }, {
                value: "UPBIT",
                name: "UpBit",
                desc: e(777754).t(null, void 0, e(310430)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "upbit"
            }, {
                value: "BINGX",
                name: "BingX",
                desc: e(777754).t(null, void 0, e(932032)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bingx"
            }, {
                value: "BTSE",
                name: "BTSE",
                desc: e(777754).t(null, void 0, e(621363)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "btse"
            }, {
                value: "BITTREX",
                name: "Bittrex",
                desc: e(777754).t(null, void 0, e(611622)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bittrex"
            }, {
                value: "BINANCE",
                name: "Binance",
                desc: e(777754).t(null, void 0, e(778260)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "binance"
            }, {
                value: "BITGET",
                name: "Bitget",
                desc: e(777754).t(null, void 0, e(151805)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitget"
            }, {
                value: "BINANCEUS",
                name: "Binance US",
                desc: e(777754).t(null, void 0, e(376868)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "binance"
            }, {
                value: "DELTA",
                name: "Delta",
                desc: e(777754).t(null, void 0, e(527223)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "delta"
            }, {
                value: "BCBA",
                name: "BYMA",
                desc: e(777754).t(null, void 0, e(731613)),
                flag: "argentina",
                group: "Mexico and South America",
                country: "ar",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(834742))]
            }, {
                value: "MATBAROFEX",
                name: "ROFEX",
                desc: e(777754).t(null, void 0, e(477911)),
                flag: "argentina",
                group: "Mexico and South America",
                country: "ar",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(834742))]
            }, {
                value: "BMFBOVESPA",
                name: "B3",
                desc: e(777754).t(null, void 0, e(866247)),
                flag: "brasil",
                group: "Mexico and South America",
                country: "br",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(228867))]
            }, {
                value: "BMV",
                name: "BMV",
                desc: e(777754).t(null, void 0, e(203947)),
                flag: "mexico",
                group: "Mexico and South America",
                country: "mx",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(555087))]
            }, {
                value: "BVL",
                name: "BVL",
                desc: e(777754).t(null, void 0, e(505138)),
                flag: "peru",
                group: "Mexico and South America",
                country: "pe",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(622979))]
            }, {
                value: "BCS",
                name: "SSE",
                desc: e(777754).t(null, void 0, e(949722)),
                flag: "chile",
                group: "Mexico and South America",
                country: "cl",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(141840))]
            }, {
                value: "BVC",
                name: "BVC",
                desc: e(777754).t(null, void 0, e(388142)),
                flag: "colombia",
                group: "Mexico and South America",
                country: "co",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(731144))]
            }, {
                value: "BVCV",
                name: "BVC",
                desc: e(777754).t(null, void 0, e(478271)),
                flag: "venezuela",
                group: "Mexico and South America",
                country: "ve",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(739055))]
            }, {
                value: "NAG",
                name: "NSE",
                desc: e(777754).t(null, void 0, e(862549)),
                flag: "japan",
                group: "Asia / Pacific",
                country: "jp",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(692443))]
            }, {
                value: "TSE",
                name: "TSE",
                desc: e(777754).t(null, void 0, e(453617)),
                flag: "japan",
                group: "Asia / Pacific",
                country: "jp",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(692443))]
            }, {
                value: "TFEX",
                name: "TFEX",
                desc: e(777754).t(null, void 0, e(197400)),
                flag: "thailand",
                group: "Asia / Pacific",
                country: "th",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(433138))]
            }, {
                value: "TFX",
                name: "TFX",
                desc: e(777754).t(null, void 0, e(753572)),
                flag: "japan",
                group: "Asia / Pacific",
                country: "jp",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(692443))]
            }, {
                value: "TOCOM",
                name: "TOCOM",
                desc: e(777754).t(null, void 0, e(30453)),
                flag: "japan",
                group: "Asia / Pacific",
                country: "jp",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(692443))]
            }, {
                value: "OSE",
                name: "OSE",
                desc: e(777754).t(null, void 0, e(517199)),
                flag: "japan",
                group: "Asia / Pacific",
                country: "jp",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(692443))]
            }, {
                value: "SGX",
                name: "SGX",
                desc: e(777754).t(null, void 0, e(919973)),
                flag: "singapore",
                group: "Asia / Pacific",
                country: "sg",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(156683))]
            }, {
                value: "ICESG",
                name: "ICE Futures Singapore",
                desc: e(777754).t(null, void 0, e(448044)),
                flag: "singapore",
                group: "Asia / Pacific",
                country: "sg",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(156683))]
            }, {
                value: "SAPSE",
                name: "SSE",
                desc: e(777754).t(null, void 0, e(253961)),
                flag: "japan",
                group: "Asia / Pacific",
                country: "jp",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(692443))]
            }, {
                value: "FSE",
                name: "FSE",
                desc: e(777754).t(null, void 0, e(461659)),
                flag: "japan",
                group: "Asia / Pacific",
                country: "jp",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(692443))]
            }, {
                value: "TPEX",
                name: "TPEx",
                desc: e(777754).t(null, void 0, e(215751)),
                flag: "taiwan",
                group: "Asia / Pacific",
                country: "tw",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(460919))]
            }, {
                value: "TWSE",
                name: "TWSE",
                desc: e(777754).t(null, void 0, e(974013)),
                flag: "taiwan",
                group: "Asia / Pacific",
                country: "tw",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(460919))]
            }, {
                value: "SET",
                name: "SET",
                desc: e(777754).t(null, void 0, e(905107)),
                flag: "thailand",
                group: "Asia / Pacific",
                country: "th",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(433138))]
            }, {
                value: "KRX",
                name: "KRX",
                desc: e(777754).t(null, void 0, e(116699)),
                flag: "south_korea",
                group: "Asia / Pacific",
                country: "kr",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(173160))]
            }, {
                value: "BAHRAIN",
                name: "BHB",
                desc: e(777754).t(null, void 0, e(98343)),
                flag: "bahrain",
                group: "Middle East / Africa",
                country: "bh",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(53260))]
            }, {
                value: "KSE",
                name: "KSE",
                desc: e(777754).t(null, void 0, e(542319)),
                flag: "kuwait",
                group: "Middle East / Africa",
                country: "kw",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(872374))]
            }, {
                value: "CSECY",
                name: "CSE",
                desc: e(777754).t(null, void 0, e(4287)),
                flag: "cyprus",
                group: "Europe",
                country: "cy",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(551017))]
            }, {
                value: "BVMT",
                name: "BVMT",
                desc: e(777754).t(null, void 0, e(923628)),
                flag: "tunisia",
                group: "Middle East / Africa",
                country: "tn",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(420638))]
            }, {
                value: "ATHEX",
                name: "ATHEX",
                desc: e(777754).t(null, void 0, e(852002)),
                flag: "greece",
                group: "Europe",
                country: "gr",
                providerId: ""
            }, {
                value: "BELEX",
                name: "BELEX",
                desc: e(777754).t(null, void 0, e(525246)),
                flag: "serbia",
                group: "Europe",
                country: "rs",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(896573))]
            }, {
                value: "EGX",
                name: "EGX",
                desc: e(777754).t(null, void 0, e(493792)),
                flag: "egypt",
                group: "Middle East / Africa",
                country: "eg",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(205390))]
            }, {
                value: "TADAWUL",
                name: "Tadawul",
                desc: e(777754).t(null, void 0, e(807722)),
                flag: "saudi_arabia",
                group: "Middle East / Africa",
                country: "sa",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(936261))]
            }, {
                value: "IDX",
                name: "IDX",
                desc: e(777754).t(null, void 0, e(75088)),
                flag: "indonesia",
                group: "Asia / Pacific",
                country: "id",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(609759))]
            }, {
                value: "HSI",
                name: "HSI",
                desc: e(777754).t(null, void 0, e(259952)),
                flag: "hong_kong",
                group: "Asia / Pacific",
                country: "hk",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(532918))]
            }, {
                value: "QSE",
                name: "QSE",
                desc: e(777754).t(null, void 0, e(844449)),
                flag: "qatar",
                group: "Middle East / Africa",
                country: "qa",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(619056))]
            }, {
                value: "OANDA",
                name: "OANDA",
                desc: e(777754).t(null, void 0, e(398585)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "oanda"
            }, {
                value: "SAXO",
                name: "Saxo",
                desc: e(777754).t(null, void 0, e(780276)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "saxobank"
            }, {
                value: "PEPPERSTONE",
                name: "Pepperstone",
                desc: e(777754).t(null, void 0, e(341557)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "pepperstone"
            }, {
                value: "PHILLIPNOVA",
                name: "Phillip Nova",
                desc: e(777754).t(null, void 0, e(574893)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "phillipnova"
            }, {
                value: "SKILLING",
                name: "SKILLING",
                desc: e(777754).t(null, void 0, e(434119)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "skilling"
            }, {
                value: "SPREADEX",
                name: "Spreadex",
                desc: e(777754).t(null, void 0, e(822963)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "spreadex"
            }, {
                value: "EURONEXT",
                name: "Euronext",
                desc: e(777754).t(null, void 0, e(70082)),
                flag: "europe",
                group: "Europe",
                country: "eu",
                providerId: ""
            }, {
                value: "EURONEXTAMS",
                name: "EURONEXTAMS",
                desc: e(777754).t(null, void 0, e(841444)),
                flag: "netherlands",
                group: "Europe",
                country: "nl",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(353770))]
            }, {
                value: "EURONEXTBRU",
                name: "EURONEXTBRU",
                desc: e(777754).t(null, void 0, e(166201)),
                flag: "belgium",
                group: "Europe",
                country: "be",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(637653))]
            }, {
                value: "EURONEXTLIS",
                name: "EURONEXTLIS",
                desc: e(777754).t(null, void 0, e(232729)),
                flag: "portugal",
                group: "Europe",
                country: "pt",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(123496))]
            }, {
                value: "EURONEXTPAR",
                name: "EURONEXTPAR",
                desc: e(777754).t(null, void 0, e(515894)),
                flag: "france",
                group: "Europe",
                country: "fr",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(696013))]
            }, {
                value: "OSL",
                name: "EURONEXTOSE",
                desc: e(777754).t(null, void 0, e(255361)),
                flag: "norway",
                group: "Europe",
                country: "no",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(145075))]
            }, {
                value: "OMX",
                name: "OMX",
                desc: e(777754).t(null, void 0, e(74125)),
                flag: "europe",
                group: "Europe",
                country: "eu",
                providerId: ""
            }, {
                value: "FWB",
                name: "FWB",
                desc: e(777754).t(null, void 0, e(670183)),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(159985))]
            }, {
                value: "FRA",
                name: "FRA",
                desc: e(777754).t(null, void 0, e(551785)),
                flag: "germany",
                hideInSymbolSearch: !0,
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(159985))]
            }, {
                value: "SWB",
                name: "SWB",
                desc: e(777754).t(null, void 0, e(17644)),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(159985))]
            }, {
                value: "XETR",
                name: "XETR",
                desc: e(777754).t(null, void 0, e(141173)),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(159985))]
            }, {
                value: "BME",
                name: "BME",
                desc: e(777754).t(null, void 0, e(889143)),
                flag: "spain",
                group: "Europe",
                country: "es",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(792334))]
            }, {
                value: "BSSE",
                name: "BSSE",
                desc: e(777754).t(null, void 0, e(433137)),
                flag: "slovakia",
                group: "Europe",
                country: "sk",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(506262))]
            }, {
                value: "BVB",
                name: "BVB",
                desc: e(777754).t(null, void 0, e(273573)),
                flag: "romania",
                group: "Europe",
                country: "ro",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(385646))]
            }, {
                value: "BET",
                name: "BET",
                desc: e(777754).t(null, void 0, e(386479)),
                flag: "hungary",
                group: "Europe",
                country: "hu",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(930646))]
            }, {
                value: "GPW",
                name: "GPW",
                desc: e(777754).t(null, void 0, e(128008)),
                flag: "poland",
                group: "Europe",
                country: "pl",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(210119))]
            }, {
                value: "NEWCONNECT",
                name: "GPW — NewConnect",
                desc: e(777754).t(null, void 0, e(253127)),
                flag: "poland",
                group: "Europe",
                country: "pl",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(210119))]
            }, {
                value: "LUXSE",
                name: "LUXSE",
                desc: e(777754).t(null, void 0, e(299724)),
                flag: "luxembourg",
                group: "Europe",
                country: "lu",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(164352))]
            }, {
                value: "MIL",
                name: "MIL",
                desc: e(777754).t(null, void 0, e(16930)),
                flag: "italy",
                group: "Europe",
                country: "it",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(43246))]
            }, {
                value: "NGM",
                name: "NGM",
                desc: e(777754).t(null, void 0, e(414327)),
                flag: "sweden",
                group: "Europe",
                country: "se",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(182404))]
            }, {
                value: "BER",
                name: "BER",
                desc: e(777754).t(null, void 0, e(320197)),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(159985))]
            }, {
                value: "DUS",
                name: "DUS",
                desc: e(777754).t(null, void 0, e(803884)),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(159985))]
            }, {
                value: "HAM",
                name: "HAM",
                desc: e(777754).t(null, void 0, e(373414)),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(159985))]
            }, {
                value: "HAN",
                name: "HAN",
                desc: e(777754).t(null, void 0, e(726147)),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(159985))]
            }, {
                value: "MUN",
                name: "MUN",
                desc: e(777754).t(null, void 0, e(186042)),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(159985))]
            }, {
                value: "TRADEGATE",
                name: "TRADEGATE",
                desc: e(777754).t(null, void 0, e(280394)),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(159985))]
            }, {
                value: "GETTEX",
                name: "GETTEX",
                desc: e(777754).t(null, void 0, e(881365)),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "finanzen",
                searchTerms: [e(777754).t(null, void 0, e(159985))]
            }, {
                value: "MILSEDEX",
                name: "MILSEDEX",
                desc: e(777754).t(null, void 0, e(948741)),
                flag: "italy",
                group: "Europe",
                hideInSymbolSearch: !0,
                country: "it",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(43246))]
            }, {
                value: "IST",
                name: "IST",
                desc: e(777754).t(null, void 0, e(757451)),
                flag: "turkey",
                hideInSymbolSearch: !0,
                group: "Europe",
                country: "tr",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(694398))]
            }, {
                value: "BIST",
                name: "BIST",
                desc: e(777754).t(null, void 0, e(833187)),
                flag: "turkey",
                group: "Europe",
                country: "tr",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(694398))]
            }, {
                value: "TASE",
                name: "TASE",
                desc: e(777754).t(null, void 0, e(932457)),
                flag: "israel",
                group: "Middle East / Africa",
                country: "il",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(261935))]
            }, {
                value: "SIX",
                name: "SIX",
                desc: e(777754).t(null, void 0, e(460854)),
                flag: "switzerland",
                group: "Europe",
                country: "ch",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(440414))]
            }, {
                value: "BX",
                name: "BX",
                desc: e(777754).t(null, void 0, e(283300)),
                flag: "switzerland",
                group: "Europe",
                country: "ch",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(440414))]
            }, {
                value: "ASX",
                name: "ASX",
                desc: e(777754).t(null, void 0, e(252673)),
                flag: "australia",
                group: "Asia / Pacific",
                country: "au",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(50132))]
            }, {
                value: "CHIXAU",
                name: "Cboe Australia",
                desc: e(777754).t(null, void 0, e(685147)),
                flag: "australia",
                group: "Asia / Pacific",
                country: "au",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(50132))]
            }, {
                value: "NZX",
                name: "NZX",
                desc: e(777754).t(null, void 0, e(164062)),
                flag: "new_zealand",
                group: "Asia / Pacific",
                country: "nz",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(824143))]
            }, {
                value: "SSE",
                name: "SSE",
                desc: e(777754).t(null, void 0, e(531385)),
                flag: "china",
                group: "Asia / Pacific",
                country: "cn",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(420844))]
            }, {
                value: "SZSE",
                name: "SZSE",
                desc: e(777754).t(null, void 0, e(117992)),
                flag: "china",
                group: "Asia / Pacific",
                country: "cn",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(420844))]
            }, {
                value: "HKEX",
                name: "HKEX",
                desc: e(777754).t(null, void 0, e(686471)),
                flag: "hong_kong",
                group: "Asia / Pacific",
                country: "hk",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(532918))]
            }, {
                value: "PSE",
                name: "PSE",
                desc: e(777754).t(null, void 0, e(300290)),
                flag: "philippines",
                group: "Asia / Pacific",
                country: "ph",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(226813))]
            }, {
                value: "NSENG",
                name: "NSE",
                desc: e(777754).t(null, void 0, e(410100)),
                flag: "nigeria",
                group: "Middle East / Africa",
                country: "ng",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(62410))]
            }, {
                value: "NSEKE",
                name: "NSE",
                desc: e(777754).t(null, void 0, e(297570)),
                flag: "kenya",
                group: "Middle East / Africa",
                country: "ke",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(89080))]
            }, {
                value: "JSE",
                name: "JSE",
                desc: e(777754).t(null, void 0, e(456781)),
                flag: "south_africa",
                group: "Middle East / Africa",
                country: "za",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(528900))]
            }, {
                value: "COINBASE",
                name: "Coinbase",
                desc: e(777754).t(null, void 0, e(740182)),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "coinbase"
            }, {
                value: "CITYINDEX",
                name: "City Index",
                desc: e(777754).t(null, void 0, e(858746)),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "cityindex"
            }, {
                value: "USI",
                name: "USI",
                desc: e(777754).t(null, void 0, e(787839)),
                flag: "usa",
                hideInSymbolSearch: !0,
                group: "North America",
                country: "us",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "OMXHEX",
                name: "HEX",
                desc: e(777754).t(null, void 0, e(261969)),
                flag: "finland",
                group: "Europe",
                country: "fi",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(936693))]
            }, {
                value: "OMXICE",
                name: "ICEX",
                desc: e(777754).t(null, void 0, e(443662)),
                flag: "iceland",
                group: "Europe",
                country: "is",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(664150))]
            }, {
                value: "OMXCOP",
                name: "CSE",
                desc: e(777754).t(null, void 0, e(290311)),
                flag: "denmark",
                group: "Europe",
                country: "dk",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(64901))]
            }, {
                value: "OMXSTO",
                name: "STO",
                desc: e(777754).t(null, void 0, e(826846)),
                flag: "sweden",
                group: "Europe",
                country: "se",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(182404))]
            }, {
                value: "OMXVSE",
                name: "VSE",
                desc: e(777754).t(null, void 0, e(453525)),
                flag: "lithuania",
                group: "Europe",
                country: "lt",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(529113))]
            }, {
                value: "OMXTSE",
                name: "TALSE",
                desc: e(777754).t(null, void 0, e(807486)),
                flag: "estonia",
                group: "Europe",
                country: "ee",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(959823))]
            }, {
                value: "OMXRSE",
                name: "OMXR",
                desc: e(777754).t(null, void 0, e(268976)),
                flag: "latvia",
                group: "Europe",
                country: "lv",
                providerId: "",
                searchTerms: [e(777754).t(null, void 0, e(484045))]
            }, {
                value: "OMXNORDIC",
                name: "OMXNORDIC",
                desc: e(777754).t(null, void 0, e(641835)),
                flag: "europe",
                hideInSymbolSearch: !0,
                group: "Europe",
                country: "eu",
                providerId: ""
            }, {
                value: "OMXBALTIC",
                name: "OMXBALTIC",
                desc: e(777754).t(null, void 0, e(220309)),
                flag: "europe",
                hideInSymbolSearch: !0,
                group: "Europe",
                country: "eu",
                providerId: ""
            }, {
                value: "FRED",
                name: "FRED",
                desc: e(777754).t(null, void 0, e(90661)),
                flag: "usa",
                group: "Economy",
                country: "",
                providerId: "fred2",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "ISM",
                name: "ISM",
                desc: e(777754).t(null, void 0, e(647511)),
                flag: "usa",
                group: "Economy",
                country: "",
                providerId: "quandl_ism",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "FRBNY",
                name: "FRBNY",
                desc: e(777754).t(null, void 0, e(889838)),
                flag: "usa",
                group: "Economy",
                country: "",
                providerId: "quandl_frbny",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "FRBP",
                name: "FRBP",
                desc: e(777754).t(null, void 0, e(343244)),
                flag: "usa",
                group: "Economy",
                country: "",
                providerId: "quandl_frbp",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }, {
                value: "ECONOMICS",
                name: "Trading Economics",
                desc: e(777754).t(null, void 0, e(651425)),
                flag: "usa",
                group: "Economy",
                country: "",
                providerId: "economics",
                searchTerms: [e(777754).t(null, void 0, e(787935)), e(777754).t(null, void 0, e(216977))]
            }]
        },
        12046: (o, r, e) => {
            "use strict";
            e.d(r, {
                parseTzOffset: () => a
            });
            var l = e(747342);

            function a(o, r = Date.now()) {
                const e = (0, l.get_timezone)(o).offset_utc(r);
                let a = "";
                const i = e / 1e3 / 60 / 60;
                i % 1 && (a = ":" + i % 1 * 60);
                let t = "";
                return t = i > 0 ? "+" + (i - i % 1) + a : 0 === i ? "" : String(i - i % 1 + a), {
                    offset: e,
                    string: "UTC" + t
                }
            }
        },
        615678: (o, r, e) => {
            "use strict";
            e.d(r, {
                KineticAnimation: () => t
            });
            var l = e(650151);

            function a(o, r) {
                return o.position - r.position
            }

            function i(o, r, e) {
                const l = (o.position - r.position) / (o.time - r.time);
                return Math.sign(l) * Math.min(Math.abs(l), e)
            }
            class t {
                constructor(o, r, e, l) {
                    this._position1 = null, this._position2 = null, this._position3 = null, this._position4 = null,
                        this._animationStartPosition = null, this._durationMsecs = 0, this._speedPxPerMsec = 0, this._terminated = !1, this._minSpeed = o, this._maxSpeed = r, this._dumpingCoeff = e, this._minMove = l
                }
                addPosition(o, r) {
                    if (null !== this._position1) {
                        if (this._position1.time === r) return void(this._position1.position = o);
                        if (Math.abs(this._position1.position - o) < this._minMove) return
                    }
                    this._position4 = this._position3, this._position3 = this._position2, this._position2 = this._position1, this._position1 = {
                        time: r,
                        position: o
                    }
                }
                start(o, r) {
                    if (null === this._position1 || null === this._position2) return;
                    if (r - this._position1.time > 50) return;
                    let e = 0;
                    const l = i(this._position1, this._position2, this._maxSpeed),
                        t = a(this._position1, this._position2),
                        c = [l],
                        n = [t];
                    if (e += t, null !== this._position3) {
                        const o = i(this._position2, this._position3, this._maxSpeed);
                        if (Math.sign(o) === Math.sign(l)) {
                            const r = a(this._position2, this._position3);
                            if (c.push(o), n.push(r), e += r, null !== this._position4) {
                                const o = i(this._position3, this._position4, this._maxSpeed);
                                if (Math.sign(o) === Math.sign(l)) {
                                    const r = a(this._position3, this._position4);
                                    c.push(o), n.push(r), e += r
                                }
                            }
                        }
                    }
                    let u = 0;
                    for (let o = 0; o < c.length; ++o) u += n[o] / e * c[o];
                    Math.abs(u) < this._minSpeed || (this._animationStartPosition = {
                        position: o,
                        time: r
                    }, this._speedPxPerMsec = u, this._durationMsecs = function(o, r) {
                        const e = Math.log(r);
                        return Math.log(1 * e / -o) / e
                    }(Math.abs(u), this._dumpingCoeff))
                }
                getPosition(o) {
                    const r = (0, l.ensureNotNull)(this._animationStartPosition),
                        e = o - r.time;
                    return r.position + this._speedPxPerMsec * (Math.pow(this._dumpingCoeff, e) - 1) / Math.log(this._dumpingCoeff)
                }
                finished(o) {
                    return null === this._animationStartPosition || this._progressDuration(o) === this._durationMsecs
                }
                terminate() {
                    this._terminated = !0
                }
                terminated() {
                    return this._terminated
                }
                _progressDuration(o) {
                    const r = o - (0, l.ensureNotNull)(this._animationStartPosition).time;
                    return Math.min(r, this._durationMsecs)
                }
            }
        },
        642119: (o, r, e) => {
            "use strict";
            e.d(r, {
                DateTimeWithTzFormatter: () => c
            });
            var l = e(12046),
                a = e(662598),
                i = e(164280);
            const t = {
                dateFormat: "MMM dd",
                timeFormat: i.hourMinuteFormat
            };
            class c {
                constructor(o = {}) {
                    this._dateFormatter = null, this._timeFormatter = null, this._options = Object.assign({}, t, o), "" !== this._options.dateFormat && (this._dateFormatter = new a.DateFormatter(this._options.dateFormat)), this._options.timeFormat.length > 0 && (this._timeFormatter = new i.TimeFormatter(this._options.timeFormat)), this._timezone = this._options.timezone
                }
                format(o) {
                    void 0 === this._tzOffset && void 0 !== this._timezone && (this._tzOffset = (0, l.parseTzOffset)(this._timezone, 1e3 * o));
                    const r = this._tzOffset ? this._tzOffset : {
                            offset: 0,
                            string: "UTC"
                        },
                        e = 1e3 * o + r.offset,
                        a = new Date(e),
                        i = [];
                    if (null !== this._dateFormatter && i.push(this._dateFormatter.format(a)), null !== this._timeFormatter) {
                        const o = this._timeFormatter.format(a);
                        i.push(o)
                    }
                    return i.push(r.string), i.join(" ")
                }
                setTimezone(o) {
                    this._timezone = o, this._tzOffset = void 0
                }
            }
        },
        824317: (o, r, e) => {
            "use strict";

            function l(o) {
                return o ? ["AMEX"].includes(o) ? "Arca" : ["NYSE ARCA & MKT"].includes(o) ? "NYSE Arca" : o : ""
            }
            e.d(r, {
                redefineExchangeName: () => l
            })
        }
    }
]);
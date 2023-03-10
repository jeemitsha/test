(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [99140], {
        130179: (e, a, t) => {
            "use strict";
            t.r(a), t.d(a, {
                openCoinsDialogOnLoad: () => i
            });
            var n = t(407523),
                r = t(962725),
                s = t(636517);

            function i() {
                const e = function() {
                    const e = window.location.hash.slice(1);
                    if (e && !e.includes("/")) switch (e) {
                        case "coins-redeem":
                            return {
                                tab: r.MainTab.Redeem
                            };
                        case "referred-friends":
                            return {
                                tab: r.MainTab.Refer
                            };
                        case "get-coins":
                            return {
                                tab: r.MainTab.GetCoins
                            };
                        case "coins-stats":
                            return {
                                tab: r.MainTab.History
                            };
                        case "about-coins":
                            return {
                                tab: r.MainTab.About
                            };
                        case "partner-program":
                            return {
                                tab: r.MainTab.PartnerProgram,
                                bubble: s.PartnerProgramPages.AboutPartnerProgram
                            }
                    } else if (e && e.includes("/")) {
                        const a = e.split("/").pop();
                        if ("partner-program" !== e.slice(0, e.indexOf("/"))) return;
                        switch (a) {
                            case "links":
                                return {
                                    tab: r.MainTab.PartnerProgram,
                                    bubble: s.PartnerProgramPages.Links
                                };
                            case "clicks":
                                return {
                                    tab: r.MainTab.PartnerProgram,
                                    bubble: s.PartnerProgramPages.Clicks
                                };
                            case "reports":
                                return {
                                    tab: r.MainTab.PartnerProgram,
                                    bubble: s.PartnerProgramPages.Reports
                                };
                            case "finance":
                                return {
                                    tab: r.MainTab.PartnerProgram,
                                    bubble: s.PartnerProgramPages.Finance
                                };
                            case "about":
                                return {
                                    tab: r.MainTab.PartnerProgram,
                                    bubble: s.PartnerProgramPages.AboutPartnerProgram
                                };
                            case "friend":
                                return {
                                    tab: r.MainTab.PartnerProgram,
                                    bubble: s.PartnerProgramPages.ReferFriend
                                };
                            default:
                                return
                        }
                    }
                }();
                e && (e.tab === r.MainTab.PartnerProgram ? (0, n.showTVCoinsDialog)({
                    page: r.CoinsPage.Main,
                    tab: r.MainTab.PartnerProgram,
                    bubble: e.bubble
                }) : (0, n.showTVCoinsDialog)({
                    page: r.CoinsPage.Main,
                    tab: e.tab
                }))
            }
        },
        636517: (e, a, t) => {
            "use strict";
            t.d(a, {
                PartnerProgramPages: () => n,
                TimeRangeSelector: () => r,
                PartnerReportType: () => s,
                SELECTOR_ITEM_NAMES: () => o,
                PartnersDataActionType: () => l,
                CreativeBannerType: () => d,
                CreativesSteps: () => u
            });
            var n, r, s, i = t(777754);
            ! function(e) {
                e.Links = "Links", e.Clicks = "Clicks", e.Reports = "Reports", e.Finance = "Finance", e.Creatives = "Creatives", e.AboutPartnerProgram = "FAQ", e.ReferFriend = "Refer a friend"
            }(n || (n = {})),
            function(e) {
                e.AllTime = "all time", e.Today = "today", e.Yesterday = "yesterday", e.LastSevenDays = "last 7 days", e.MonthToDate = "month to date", e.LastMonth = "last month", e.LastSixMonths = "last 6 months"
            }(r || (r = {})),
            function(e) {
                e.Overview = "overview", e.Conversion = "conversion"
            }(s || (s = {}));
            const o = [{
                content: i.t(null, void 0, t(548942)),
                value: r.AllTime
            }, {
                content: i.t(null, void 0, t(963386)),
                value: r.Today
            }, {
                content: i.t(null, void 0, t(730141)),
                value: r.Yesterday
            }, {
                content: i.t(null, void 0, t(293297)),
                value: r.LastSevenDays
            }, {
                content: i.t(null, void 0, t(929083)),
                value: r.MonthToDate
            }, {
                content: i.t(null, void 0, t(34617)),
                value: r.LastMonth
            }, {
                content: i.t(null, void 0, t(198979)),
                value: r.LastSixMonths
            }];
            var l, d, u;
            ! function(e) {
                e.UpdateClicks = "UPDATE_CLICKS", e.UpdateReports = "UPDATE_REPORTS", e.UpdateFinancesData = "UPDATE_FINANCES_DATA", e.SetClicksTimeRange = "SET_CLICKS_TIME_RANGE", e.SetReportTimeRange = "SET_REPORT_TIME_RANGE", e.SetLoadingState = "SET_LOADING_STATE", e.SetPayoutSettings = "SET_PAYOUT_SETTINGS"
            }(l || (l = {})),
            function(e) {
                e.Light = "Basic light", e.Dark = "Basic dark", e.CyberMonday = "Cyber Monday", e.BlackFriday = "Black Friday"
            }(d || (d = {})),
            function(e) {
                e[e.Type = 0] = "Type",
                    e[e.Country = 1] = "Country", e[e.Banners = 2] = "Banners"
            }(u || (u = {}))
        },
        407523: (e, a, t) => {
            "use strict";
            t.d(a, {
                showTVCoinsDialog: () => r
            });
            var n = t(962725);

            function r(e) {
                Promise.all([t.e(36037), t.e(36956), t.e(4100), t.e(50251), t.e(85783), t.e(31872), t.e(75514), t.e(25977), t.e(93477), t.e(39437), t.e(28458)]).then(t.bind(t, 283961)).then((a => {
                    const {
                        page: t = n.CoinsPage.Main,
                        tab: r = n.MainTab.GetCoins,
                        productId: s = n.ProductId.Coin500,
                        ...i
                    } = e || {};
                    new a.TVCoinsDialog({
                        page: t,
                        tab: r,
                        ...i
                    }).open()
                }))
            }
        },
        962725: (e, a, t) => {
            "use strict";
            var n, r, s;
            t.d(a, {
                    ProductId: () => n,
                    CoinsPage: () => r,
                    MainTab: () => s
                }),
                function(e) {
                    e.TestCoins = "100_coins", e.Coin500 = "500_coins", e.Coin1000 = "1000_coins", e.BagAndCoin = "5000_coins"
                }(n || (n = {})),
                function(e) {
                    e.Buy = "Buy", e.Main = "Main"
                }(r || (r = {})),
                function(e) {
                    e.About = "About", e.PartnerProgram = "Partner program", e.Refer = "Refer", e.GetCoins = "Get coins", e.History = "History", e.Redeem = "Redeem"
                }(s || (s = {}))
        },
        548942: e => {
            e.exports = {
                ar: ["????????????"],
                ca_ES: ["Tot el temps"],
                cs: ["Po????d"],
                de: ["Allzeit"],
                el: "All time",
                en: "All time",
                es: ["Todo el tiempo"],
                fa: ["?????? ????????????"],
                fr: ["Tout l'historique"],
                he_IL: ["???? ????????"],
                hu_HU: ["Minden Id??ben"],
                id_ID: ["Sepanjang waktu"],
                it: ["Tutti i tempi"],
                ja: ["?????????"],
                ko: ["????????????"],
                ms_MY: ["Sepanjang masa"],
                nl_NL: ["Alle perioden"],
                pl: ["Ca??y czas"],
                pt: ["Todos"],
                ro: "All time",
                ru: ["???? ?????? ??????????"],
                sv: ["Alltid"],
                th: ["?????????????????????????????????"],
                tr: ["T??m zamanlar"],
                vi: ["T???ng th???i gian"],
                zh: ["????????????"],
                zh_TW: ["????????????"]
            }
        },
        198979: e => {
            e.exports = {
                ar: ["?????? 6 ????????"],
                ca_ES: ["??ltims 6 mesos"],
                cs: "Last 6 months",
                de: ["Letzte 6 Monate"],
                el: "Last 6 months",
                en: "Last 6 months",
                es: ["??ltimos 6 meses"],
                fa: "Last 6 months",
                fr: ["6 derniers mois"],
                he_IL: ["6 ???????????? ??????????????"],
                hu_HU: "Last 6 months",
                id_ID: ["6 bulan lalu"],
                it: ["Ultimi 6 mesi"],
                ja: ["??????6?????????"],
                ko: ["?????? 6???"],
                ms_MY: ["6 bulan lepas"],
                nl_NL: "Last 6 months",
                pl: ["Ostatnie 6 miesi??cy"],
                pt: ["??ltimos 6 meses"],
                ro: "Last 6 months",
                ru: ["?????????????????? 6 ??????????????"],
                sv: ["De senaste 6 m??naderna"],
                th: ["6 ??????????????????????????????????????????"],
                tr: ["Son 6 ay"],
                vi: ["6 th??ng tr?????c"],
                zh: ["??????6??????"],
                zh_TW: ["??????6??????"]
            }
        },
        293297: e => {
            e.exports = {
                ar: ["?????? 7 ????????"],
                ca_ES: ["??ltims 7 dies"],
                cs: "Last 7 days",
                de: ["Letzte 7 Tage"],
                el: "Last 7 days",
                en: "Last 7 days",
                es: ["??ltimos 7 d??as"],
                fa: "Last 7 days",
                fr: ["7 derniers jours"],
                he_IL: ["7 ???????? ??????????????"],
                hu_HU: "Last 7 days",
                id_ID: ["7 hari terakhir"],
                it: ["Ultimi 7 giorni"],
                ja: ["??????7??????"],
                ko: ["?????? 7???"],
                ms_MY: ["7 hari lepas"],
                nl_NL: "Last 7 days",
                pl: ["Ostatnie 7 dni"],
                pt: ["??ltimos 7 dias"],
                ro: "Last 7 days",
                ru: ["?????????????????? 7 ????????"],
                sv: ["De senaste 7 dagarna"],
                th: ["7 ????????????????????????????????????"],
                tr: ["Son 7 g??n"],
                vi: ["7 ng??y qua"],
                zh: ["??????7???"],
                zh_TW: ["??????7???"]
            }
        },
        34617: e => {
            e.exports = {
                ar: ["?????????? ????????????"],
                ca_ES: ["??ltim mes"],
                cs: "Last month",
                de: ["Letzter Monat"],
                el: "Last month",
                en: "Last month",
                es: ["??ltimo mes"],
                fa: "Last month",
                fr: ["Dernier mois"],
                he_IL: ["???????? ????????"],
                hu_HU: "Last month",
                id_ID: ["Bulan lalu"],
                it: ["Ultimo mese"],
                ja: ["??????"],
                ko: ["?????? ???"],
                ms_MY: ["Bulan lepas"],
                nl_NL: "Last month",
                pl: ["Ostatni miesi??c"],
                pt: ["??ltimo m??s"],
                ro: "Last month",
                ru: ["?????????????????? ??????????"],
                sv: ["Senaste m??naden"],
                th: ["????????????????????????????????????"],
                tr: ["Ge??en ay"],
                vi: ["Th??ng tr?????c"],
                zh: ["?????????"],
                zh_TW: ["?????????"]
            }
        },
        929083: e => {
            e.exports = {
                ar: ["?????????? ?????? ????????????"],
                ca_ES: ["Mes fins a la data"],
                cs: "Month to date",
                de: ["Monat bis heute"],
                el: "Month to date",
                en: "Month to date",
                es: ["Mes hasta la fecha"],
                fa: "Month to date",
                fr: ["Mois ?? ce jour"],
                he_IL: ["???????? ???? ????????"],
                hu_HU: "Month to date",
                id_ID: ["Bulan ke tanggal"],
                it: ["Da inizio mese"],
                ja: ["??????"],
                ko: ["?????? ??????"],
                ms_MY: ["Bulan hingga kini"],
                nl_NL: "Month to date",
                pl: ["Od pocz??tku miesi??ca"],
                pt: ["Do m??s at?? o momento"],
                ro: "Month to date",
                ru: ["?? ???????????? ????????????"],
                sv: ["M??nad till dags dato"],
                th: ["?????????????????????????????????"],
                tr: ["Ay??n ba????ndan beri"],
                vi: ["T??? ?????u th??ng ?????n hi???n t???i"],
                zh: ["????????????"],
                zh_TW: ["????????????"]
            }
        },
        963386: e => {
            e.exports = {
                ar: ["??????????"],
                ca_ES: ["Avui"],
                cs: "Today",
                de: ["Heute"],
                el: "Today",
                en: "Today",
                es: ["Hoy"],
                fa: "Today",
                fr: ["Aujourd'hui"],
                he_IL: ["???????????"],
                hu_HU: ["Ma"],
                id_ID: ["Hari Ini"],
                it: ["Oggi"],
                ja: ["??????"],
                ko: ["??????"],
                ms_MY: ["Hari Ini"],
                nl_NL: "Today",
                pl: ["Dzisiaj"],
                pt: ["Hoje"],
                ro: "Today",
                ru: ["??????????????"],
                sv: ["I dag"],
                th: ["??????????????????"],
                tr: ["Bug??n"],
                vi: ["H??m nay"],
                zh: ["??????"],
                zh_TW: ["??????"]
            }
        },
        730141: e => {
            e.exports = {
                ar: ["??????"],
                ca_ES: ["Ahir"],
                cs: "Yesterday",
                de: ["Gestern"],
                el: "Yesterday",
                en: "Yesterday",
                es: ["Ayer"],
                fa: "Yesterday",
                fr: ["Hier"],
                he_IL: ["??????????"],
                hu_HU: ["Tegnap"],
                id_ID: ["Kemarin"],
                it: ["Ieri"],
                ja: ["??????"],
                ko: ["??????"],
                ms_MY: ["Semalam"],
                nl_NL: "Yesterday",
                pl: ["Wczoraj"],
                pt: ["Ontem"],
                ro: "Yesterday",
                ru: ["??????????"],
                sv: ["I g??r"],
                th: ["????????????????????????"],
                tr: ["D??n"],
                vi: ["H??m qua"],
                zh: ["??????"],
                zh_TW: ["??????"]
            }
        }
    }
]);
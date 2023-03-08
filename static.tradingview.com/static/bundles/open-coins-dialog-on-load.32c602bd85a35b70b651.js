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
                ar: ["عمومًا"],
                ca_ES: ["Tot el temps"],
                cs: ["Pořád"],
                de: ["Allzeit"],
                el: "All time",
                en: "All time",
                es: ["Todo el tiempo"],
                fa: ["همه زمانها"],
                fr: ["Tout l'historique"],
                he_IL: ["כל הזמן"],
                hu_HU: ["Minden Időben"],
                id_ID: ["Sepanjang waktu"],
                it: ["Tutti i tempi"],
                ja: ["全期間"],
                ko: ["전체기간"],
                ms_MY: ["Sepanjang masa"],
                nl_NL: ["Alle perioden"],
                pl: ["Cały czas"],
                pt: ["Todos"],
                ro: "All time",
                ru: ["За всё время"],
                sv: ["Alltid"],
                th: ["ทุกช่วงเวลา"],
                tr: ["Tüm zamanlar"],
                vi: ["Tổng thời gian"],
                zh: ["全部时间"],
                zh_TW: ["全部時間"]
            }
        },
        198979: e => {
            e.exports = {
                ar: ["آخر 6 أشهر"],
                ca_ES: ["Últims 6 mesos"],
                cs: "Last 6 months",
                de: ["Letzte 6 Monate"],
                el: "Last 6 months",
                en: "Last 6 months",
                es: ["Últimos 6 meses"],
                fa: "Last 6 months",
                fr: ["6 derniers mois"],
                he_IL: ["6 חודשים אחרונים"],
                hu_HU: "Last 6 months",
                id_ID: ["6 bulan lalu"],
                it: ["Ultimi 6 mesi"],
                ja: ["過去6ヶ月間"],
                ko: ["지난 6달"],
                ms_MY: ["6 bulan lepas"],
                nl_NL: "Last 6 months",
                pl: ["Ostatnie 6 miesięcy"],
                pt: ["Últimos 6 meses"],
                ro: "Last 6 months",
                ru: ["Последние 6 месяцев"],
                sv: ["De senaste 6 månaderna"],
                th: ["6 เดือนที่ผ่านมา"],
                tr: ["Son 6 ay"],
                vi: ["6 tháng trước"],
                zh: ["过去6个月"],
                zh_TW: ["過去6個月"]
            }
        },
        293297: e => {
            e.exports = {
                ar: ["اخر 7 ايام"],
                ca_ES: ["Últims 7 dies"],
                cs: "Last 7 days",
                de: ["Letzte 7 Tage"],
                el: "Last 7 days",
                en: "Last 7 days",
                es: ["Últimos 7 días"],
                fa: "Last 7 days",
                fr: ["7 derniers jours"],
                he_IL: ["7 ימים אחרונים"],
                hu_HU: "Last 7 days",
                id_ID: ["7 hari terakhir"],
                it: ["Ultimi 7 giorni"],
                ja: ["過去7日間"],
                ko: ["지난 7날"],
                ms_MY: ["7 hari lepas"],
                nl_NL: "Last 7 days",
                pl: ["Ostatnie 7 dni"],
                pt: ["Últimos 7 dias"],
                ro: "Last 7 days",
                ru: ["Последние 7 дней"],
                sv: ["De senaste 7 dagarna"],
                th: ["7 วันที่ผ่านมา"],
                tr: ["Son 7 gün"],
                vi: ["7 ngày qua"],
                zh: ["过去7天"],
                zh_TW: ["過去7天"]
            }
        },
        34617: e => {
            e.exports = {
                ar: ["الشهر الماضي"],
                ca_ES: ["Últim mes"],
                cs: "Last month",
                de: ["Letzter Monat"],
                el: "Last month",
                en: "Last month",
                es: ["Último mes"],
                fa: "Last month",
                fr: ["Dernier mois"],
                he_IL: ["חודש שעבר"],
                hu_HU: "Last month",
                id_ID: ["Bulan lalu"],
                it: ["Ultimo mese"],
                ja: ["先月"],
                ko: ["지난 달"],
                ms_MY: ["Bulan lepas"],
                nl_NL: "Last month",
                pl: ["Ostatni miesiąc"],
                pt: ["Último mês"],
                ro: "Last month",
                ru: ["Последний месяц"],
                sv: ["Senaste månaden"],
                th: ["เดือนที่แล้ว"],
                tr: ["Geçen ay"],
                vi: ["Tháng trước"],
                zh: ["上个月"],
                zh_TW: ["上個月"]
            }
        },
        929083: e => {
            e.exports = {
                ar: ["الشهر حتى تاريخه"],
                ca_ES: ["Mes fins a la data"],
                cs: "Month to date",
                de: ["Monat bis heute"],
                el: "Month to date",
                en: "Month to date",
                es: ["Mes hasta la fecha"],
                fa: "Month to date",
                fr: ["Mois à ce jour"],
                he_IL: ["חודש עד היום"],
                hu_HU: "Month to date",
                id_ID: ["Bulan ke tanggal"],
                it: ["Da inizio mese"],
                ja: ["今月"],
                ko: ["당월 합계"],
                ms_MY: ["Bulan hingga kini"],
                nl_NL: "Month to date",
                pl: ["Od początku miesiąca"],
                pt: ["Do mês até o momento"],
                ro: "Month to date",
                ru: ["С начала месяца"],
                sv: ["Månad till dags dato"],
                th: ["เดือนถึงวัน"],
                tr: ["Ayın başından beri"],
                vi: ["Từ đầu tháng đến hiện tại"],
                zh: ["本月至今"],
                zh_TW: ["本月至今"]
            }
        },
        963386: e => {
            e.exports = {
                ar: ["اليوم"],
                ca_ES: ["Avui"],
                cs: "Today",
                de: ["Heute"],
                el: "Today",
                en: "Today",
                es: ["Hoy"],
                fa: "Today",
                fr: ["Aujourd'hui"],
                he_IL: ["היום‏"],
                hu_HU: ["Ma"],
                id_ID: ["Hari Ini"],
                it: ["Oggi"],
                ja: ["今日"],
                ko: ["오늘"],
                ms_MY: ["Hari Ini"],
                nl_NL: "Today",
                pl: ["Dzisiaj"],
                pt: ["Hoje"],
                ro: "Today",
                ru: ["Сегодня"],
                sv: ["I dag"],
                th: ["วันนี้"],
                tr: ["Bugün"],
                vi: ["Hôm nay"],
                zh: ["今天"],
                zh_TW: ["今天"]
            }
        },
        730141: e => {
            e.exports = {
                ar: ["أمس"],
                ca_ES: ["Ahir"],
                cs: "Yesterday",
                de: ["Gestern"],
                el: "Yesterday",
                en: "Yesterday",
                es: ["Ayer"],
                fa: "Yesterday",
                fr: ["Hier"],
                he_IL: ["אתמול"],
                hu_HU: ["Tegnap"],
                id_ID: ["Kemarin"],
                it: ["Ieri"],
                ja: ["昨日"],
                ko: ["어제"],
                ms_MY: ["Semalam"],
                nl_NL: "Yesterday",
                pl: ["Wczoraj"],
                pt: ["Ontem"],
                ro: "Yesterday",
                ru: ["Вчера"],
                sv: ["I går"],
                th: ["เมื่อวาน"],
                tr: ["Dün"],
                vi: ["Hôm qua"],
                zh: ["昨天"],
                zh_TW: ["昨天"]
            }
        }
    }
]);
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [51060], {
        992653: e => {
            e.exports = {
                container: "container-ja6dxMQB",
                button: "button-ja6dxMQB"
            }
        },
        162586: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                getToolSet: () => C
            });
            var a = r(495046),
                i = r(813646),
                o = r(493317),
                n = r(925395),
                l = r(42849),
                s = r(634822),
                c = r(50959),
                u = r(777754),
                h = r(497754),
                d = r(915062),
                p = r(992653);
            const b = "unauth_platform",
                S = "start_free_trial";

            function _(e) {
                return c.createElement("a", {
                    id: e.id,
                    className: h(e.className, p.container),
                    onClick: function() {
                        window.runOrSignIn((() => (0, d.showGoProOrderDialog)({
                            source: b,
                            feature: S
                        })), {
                            source: b,
                            feature: S,
                            startTrial: !0
                        })
                    }
                }, c.createElement("div", {
                    className: p.button
                }, u.t(null, void 0, r(173851))))
            }
            var g = r(474018),
                f = r(719036),
                m = r(159642),
                k = r(231656),
                v = r(604286),
                w = r(470316),
                P = r(606347);
            const A = {
                    hint: u.t(null, void 0, r(742130))
                },
                T = (0, v.hotKeySerialize)({
                    keys: [(0, w.humanReadableModifiers)(w.Modifiers.Mod, !1), "K"],
                    text: "{0} + {1}"
                }),
                y = (0, k.registryContextType)();
            class z extends c.PureComponent {
                constructor(e, t) {
                    super(e), this._handleClick = () => {
                        const {
                            openGlobalSearch: e
                        } = this.context;
                        e()
                    }, (0, k.validateRegistry)(t, {
                        openGlobalSearch: f.any.isRequired
                    })
                }
                render() {
                    return c.createElement(m.ToolWidgetIconButton, { ...this.props,
                        icon: P,
                        title: A.hint,
                        onClick: this._handleClick,
                        "data-tooltip-hotkey": T
                    })
                }
            }
            z.contextType = y;
            var x = r(638456);

            function C() {
                return { ...(0, l.getRestrictedToolSet)(),
                    Alert: a.enabled("alerts") ? i.ToolWidgetAlert : void 0,
                    Replay: a.enabled("widget") ? void 0 : o.ToolWidgetReplay,
                    Publish: a.enabled("footer_publish_idea_button") ? n.ToolWidgetPublishButton : void 0,
                    PublishButtonManager: a.enabled("footer_publish_idea_button") ? s.PublishButtonManager : void 0,
                    StartTrial: _,
                    SymbolSearch: g.ToolWidgetSymbolSearchButton,
                    QuickSearch: x.CheckMobile.any() ? void 0 : z
                }
            }
        },
        915062: (e, t, r) => {
            "use strict";

            function a(e) {
                return Promise.all([r.e(76049), r.e(96216), r.e(97500), r.e(36099), r.e(74472), r.e(62769), r.e(65023), r.e(88230), r.e(81910), r.e(86256), r.e(7624), r.e(59333), r.e(12275), r.e(33335), r.e(91901), r.e(78707), r.e(83772), r.e(71140), r.e(85761), r.e(33287), r.e(36037), r.e(34145), r.e(64884), r.e(63737), r.e(36720), r.e(37908), r.e(20187), r.e(51907), r.e(62040), r.e(47507), r.e(10302), r.e(20849), r.e(36509), r.e(47523), r.e(89034), r.e(61893), r.e(52669), r.e(53262), r.e(24263), r.e(12768), r.e(90133), r.e(64566), r.e(32805), r.e(149), r.e(56342), r.e(68849), r.e(36979), r.e(29583), r.e(22986), r.e(46871), r.e(4592), r.e(67089), r.e(75514), r.e(66414), r.e(40619), r.e(55567), r.e(16665), r.e(62073), r.e(65679), r.e(15180), r.e(56708), r.e(54692), r.e(78920), r.e(25418), r.e(53936), r.e(42660), r.e(37768), r.e(38357)]).then(r.bind(r, 919380)).then((t => t.openGoProOrderDialog(e)))
            }
            r.d(t, {
                showGoProOrderDialog: () => a
            })
        },
        606347: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M17.4 17.5a7 7 0 1 0-4.9 2c1.9 0 3.64-.76 4.9-2zm0 0l5.1 5"/></svg>'
        },
        474382: e => {
            e.exports = {
                ar: ["تنبيه"],
                ca_ES: ["Alerta"],
                cs: ["Upozornění"],
                de: ["Alarm"],
                el: "Alert",
                en: "Alert",
                es: ["Alerta"],
                fa: ["هشدار"],
                fr: ["Alerte"],
                he_IL: ["התראה"],
                hu_HU: ["Riasztás"],
                id_ID: ["Peringatan"],
                it: "Alert",
                ja: ["アラート"],
                ko: ["얼러트"],
                ms_MY: ["Pemberitahuan"],
                nl_NL: "Alert",
                pl: "Alert",
                pt: ["Alerta"],
                ro: "Alert",
                ru: ["Оповещения"],
                sv: ["Alarm"],
                th: ["การแจ้งเตือน"],
                tr: ["Alarm"],
                vi: ["Cảnh báo"],
                zh: ["警报"],
                zh_TW: ["快訊"]
            }
        },
        173851: e => {
            e.exports = {
                ar: ["ابدأ الفترة التجريبية المجانية"],
                ca_ES: "Start free trial",
                cs: "Start free trial",
                de: ["Gratis testen"],
                el: "Start free trial",
                en: "Start free trial",
                es: ["Prueba gratuita"],
                fa: "Start free trial",
                fr: ["Essai gratuit"],
                he_IL: ["התחל ניסיון חינם"],
                hu_HU: "Start free trial",
                id_ID: ["Percobaan gratis"],
                it: ["Prova gratuita"],
                ja: ["無料お試しを開始"],
                ko: ["프리 트라이얼 스타트"],
                ms_MY: ["Percubaan percuma"],
                nl_NL: "Start free trial",
                pl: ["Spróbuj za darmo"],
                pt: ["Teste gratuito"],
                ro: "Start free trial",
                ru: ["Попробовать бесплатно"],
                sv: ["Gratis testperiod"],
                th: ["ทดลองใช้งานฟรี"],
                tr: ["Ücretsiz deneme"],
                vi: ["Bắt đầu dùng thử miễn phí"],
                zh: ["开始免费试用"],
                zh_TW: ["開始免費試用"]
            }
        },
        742130: e => {
            e.exports = {
                ar: ["البحث السريع"],
                ca_ES: ["Cerca ràpida"],
                cs: "Quick Search",
                de: ["Schnellsuche"],
                el: "Quick Search",
                en: "Quick Search",
                es: ["Búsqueda rápida"],
                fa: ["جستجوی سریع"],
                fr: ["Recherche rapide"],
                he_IL: ["חיפוש מהיר"],
                hu_HU: "Quick Search",
                id_ID: ["Pencarian Cepat"],
                it: ["Ricerca rapida"],
                ja: ["クイックサーチ"],
                ko: ["퀵 서치"],
                ms_MY: ["Carian Pantas"],
                nl_NL: "Quick Search",
                pl: ["Szybkie wyszukiwanie"],
                pt: ["Busca Rápida"],
                ro: "Quick Search",
                ru: ["Быстрый поиск"],
                sv: ["Snabbsök"],
                th: ["ค้นหาเร่งด่วน"],
                tr: ["Hızlı Arama"],
                vi: ["Tìm kiếm nhanh"],
                zh: ["快速搜索"],
                zh_TW: ["快速搜尋"]
            }
        }
    }
]);
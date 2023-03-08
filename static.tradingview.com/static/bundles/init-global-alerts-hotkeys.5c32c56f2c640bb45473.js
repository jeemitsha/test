"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [20645], {
        651094: (e, t, r) => {
            r.r(t), r.d(t, {
                initGlobalAlertsHotkeys: () => i
            });
            var o = r(799786),
                a = r(821350);

            function i(e) {
                (0, o.createGroup)({
                    desc: "Alerts"
                }).add({
                    desc: "Create",
                    hotkey: o.Modifiers.Alt + 65,
                    handler: () => {
                        const t = e.activeChartWidget.value(),
                            r = t.hasModel() && t.model().model();
                        r && function(e) {
                            window.runOrSignIn((() => {
                                (0, a.invokeAlertEditorWithOnlineSeries)({
                                    dataSourceHub: e,
                                    trackEvent: "hotkey",
                                    actionSource: "hotkey"
                                })
                            }), {
                                source: "Alerts create hotkey",
                                sourceMeta: "Chart"
                            })
                        }(r)
                    }
                })
            }
        }
    }
]);
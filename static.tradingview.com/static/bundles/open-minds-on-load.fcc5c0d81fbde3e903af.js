"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [20603], {
        732246: (n, e, i) => {
            i.r(e), i.d(e, {
                openMindsOnLoad: () => d
            });
            var a = i(321475);

            function d() {
                var n;
                null !== new URL(window.location.href).searchParams.get("mind") && (0, a.isMindsFeatureEnabledWithBackend)() && (null === (n = window.widgetbar) || void 0 === n || n.setPage("minds"))
            }
        },
        321475: (n, e, i) => {
            function a() {
                return !0
            }
            i.d(e, {
                isMindsFeatureEnabledWithBackend: () => a
            })
        }
    }
]);
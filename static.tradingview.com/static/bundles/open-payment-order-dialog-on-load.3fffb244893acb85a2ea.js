"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [14309], {
        688457: (e, n, r) => {
            r.r(n), r.d(n, {
                openPaymentOrderDialogOnLoad: () => g
            });
            var i = r(492630),
                a = r(947467),
                l = r(798062),
                t = r(960489),
                o = r(501578);
            const c = [t.BillingCycle.OneYear, t.BillingCycle.Monthly, t.BillingCycle.ThreeMonths];

            function g() {
                var e;
                const n = window.pro;
                if (void 0 === n) return;
                const r = (0, l.getUrlParams)();
                if (!("order_pro_plan_id" in r) && "order_exchanges" in r && "exchange-agreement" in r) return;
                const t = r.order_pro_plan_id,
                    g = (null !== (e = r.order_exchanges) && void 0 !== e ? e : "").split(",").map((e => `exchange-${e}`)),
                    d = "exchange-agreement" in r;
                let s;
                "order_billing_cycle" in r && c.includes(r.order_billing_cycle) && (s = r.order_billing_cycle), n.runOrUpdate((() => {
                    let e;
                    t && n.isPlan(n.getProduct(t)) && (e = t);
                    const r = g.filter((e => n.isExchange(n.getProduct(e))));
                    (void 0 !== e || 0 !== r.length || d) && (d ? (0, a.showExchangeAgreementDialog)({}) : window.runOrSignIn((() => {
                        (0, i.showPaymentOrderDialog)({
                            productId: e,
                            exchanges: r,
                            statusExtraData: r.length > 0 ? o.StatusExtraData.Opened : void 0,
                            billingCycle: s,
                            fixedCycle: void 0 !== s
                        })
                    }), {
                        source: "Payment order dialog"
                    }))
                }))
            }
        },
        947467: (e, n, r) => {
            async function i(e) {
                (await Promise.all([r.e(76049), r.e(97500), r.e(36099), r.e(88230), r.e(18619), r.e(81910), r.e(86256), r.e(7624), r.e(59333), r.e(12275), r.e(33335), r.e(91901), r.e(78707), r.e(83772), r.e(85761), r.e(33287), r.e(64884), r.e(37908), r.e(20187), r.e(51907), r.e(62040), r.e(10302), r.e(36509), r.e(47523), r.e(64566), r.e(29583), r.e(4592), r.e(75514), r.e(5043), r.e(40619), r.e(62073), r.e(15180), r.e(78920), r.e(25418), r.e(42660), r.e(61932)]).then(r.bind(r, 143372))).openExchangeAgreementDialog(e)
            }
            r.d(n, {
                showExchangeAgreementDialog: () => i
            })
        }
    }
]);
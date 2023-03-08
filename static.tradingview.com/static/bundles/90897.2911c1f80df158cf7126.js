(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [90897], {
        645469: e => {
            e.exports = {
                "tablet-normal-breakpoint": "screen and (max-width: 768px)",
                "small-height-breakpoint": "screen and (max-height: 360px)",
                "tablet-small-breakpoint": "screen and (max-width: 430px)"
            }
        },
        642709: (e, t, r) => {
            "use strict";
            r.d(t, {
                DialogBreakpoints: () => i
            });
            var n = r(645469);
            const i = {
                SmallHeight: n["small-height-breakpoint"],
                TabletSmall: n["tablet-small-breakpoint"],
                TabletNormal: n["tablet-normal-breakpoint"]
            }
        },
        927592: (e, t, r) => {
            "use strict";
            r.d(t, {
                splitThousands: () => i
            });
            var n = r(150335);

            function i(e, t = "&nbsp;") {
                let r = e + ""; - 1 !== r.indexOf("e") && (r = function(e) {
                    return (0, n.fixComputationError)(e).toFixed(10).replace(/\.?0+$/, "")
                }(Number(e)));
                const i = r.split(".");
                return i[0].replace(/\B(?=(\d{3})+(?!\d))/g, t) + (i[1] ? "." + i[1] : "")
            }
        },
        547623: (e, t, r) => {
            "use strict";
            var n;
            r.d(t, {
                    StopType: () => n
                }),
                function(e) {
                    e[e.StopLoss = 0] = "StopLoss", e[e.TrailingStop = 1] = "TrailingStop"
                }(n || (n = {}))
        },
        214203: (e, t, r) => {
            "use strict";
            r.d(t, {
                DisconnectError: () => s,
                extractDisconnectionInfoAndConnectionStatus: () => a
            });
            var n = r(136916),
                i = r(703819),
                o = r(531733);
            class s extends o.UserFriendlyError {
                constructor({
                    disconnectInfo: e,
                    ...t
                }) {
                    super(t), this.name = "DisconnectError", this.disconnectInfo = e
                }
            }

            function a(e) {
                const t = function(e) {
                    const t = {
                        message: (0, i.getErrorMessage)(e)
                    };
                    e instanceof s && (t.disconnectType = e.disconnectInfo.disconnectType);
                    return t
                }(e);
                let r = 4;
                return void 0 !== t.disconnectType && [n.DisconnectType.CancelAuthorization, n.DisconnectType.TimeOutForAuthorization].includes(t.disconnectType) && (r = 3), {
                    disconnectionInfo: t,
                    connectionStatus: r
                }
            }
        },
        531733: (e, t, r) => {
            "use strict";

            function n(e) {
                return e instanceof i
            }
            r.d(t, {
                isUserFriendlyError: () => n,
                UserFriendlyError: () => i
            });
            class i extends Error {
                constructor({
                    detailedErrorMessage: e,
                    userFriendlyMessage: t,
                    cause: r
                }) {
                    super(t), this.name = "UserFriendlyError", this.detailedErrorMessage = e, this.cause = r
                }
            }
        },
        703819: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                orderStatusToText: () => b,
                sideToText: () => S,
                orderTypeToText: () => w,
                findArraysDifferences: () => P,
                formatNumber: () => D,
                retryWithChangingIntervals: () => E,
                isOrderOrPositionMessageType: () => B,
                roundToStepByPriceTypeAndSide: () => M,
                TasksWithTermination: () => F,
                roundDownToPowerOf10: () => C,
                wrapDeferredWithPromise: () => I,
                pipSizeForForex: () => L,
                isFinalOrderStatus: () => N,
                positionSideToText: () => A,
                makeNonTradableSymbolText: () => U,
                getErrorMessage: () => $,
                getLoggerMessage: () => j,
                decodeAmpersandHtmlEntity: () => q,
                isSyncMapper: () => z,
                throwUserFriendlyErrorWithBracketType: () => W,
                addTrailingSlash: () => J,
                isStandardFormatterName: () => R,
                getErrorCauses: () => Y
            });
            var n = r(777754),
                i = r(960521),
                o = r(136916),
                s = r(547623),
                a = r(927592),
                u = r(758337),
                c = r(272001),
                d = r(535799),
                l = r(462282),
                p = r(531733),
                f = r(214203);
            const m = {
                    2: {},
                    1: {}
                },
                T = {
                    2: {},
                    1: {}
                },
                g = {},
                h = {},
                v = {};
            let y = !1;
            const k = (0, c.getLogger)("Trading.Utils");

            function b(e) {
                return x(), v[e]
            }

            function x() {
                y || (y = !0, m[2][2] = n.t(null, {
                        context: "Market order"
                    }, r(610952)), m[2][1] = n.t(null, {
                        context: "Limit order"
                    }, r(382377)), m[2][3] = n.t(null, {
                        context: "order"
                    }, r(608921)), m[2][4] = n.t(null, {
                        context: "Stop limit order"
                    }, r(779062)),
                    m[1][2] = n.t(null, void 0, r(359758)), m[1][1] = n.t(null, void 0, r(398157)), m[1][3] = n.t(null, {
                        context: "order"
                    }, r(7122)), m[1][4] = n.t(null, void 0, r(900853)), T[2][o.BracketType.TakeProfit] = n.t(null, {
                        context: "Take profit order"
                    }, r(347947)), T[2][o.BracketType.StopLoss] = n.t(null, {
                        context: "Stop loss order"
                    }, r(15307)), T[2][o.BracketType.TrailingStop] = n.t(null, {
                        context: "Trailing stop order"
                    }, r(154462)), T[1][o.BracketType.TakeProfit] = n.t(null, void 0, r(129266)), T[1][o.BracketType.StopLoss] = n.t(null, void 0, r(241648)), T[1][o.BracketType.TrailingStop] = n.t(null, void 0, r(86430)), g[1] = n.t(null, {
                        context: "trading"
                    }, r(63470)), g[-1] = n.t(null, {
                        context: "trading"
                    }, r(742259)), h[1] = n.t(null, {
                        context: "trading"
                    }, r(274771)), h[-1] = n.t(null, {
                        context: "trading"
                    }, r(951219)), v[2] = n.t(null, void 0, r(885323)), v[1] = n.t(null, void 0, r(767207)), v[6] = n.t(null, void 0, r(328231)), v[3] = n.t(null, void 0, r(614841)), v[4] = n.t(null, void 0, r(373425)), v[5] = n.t(null, void 0, r(442060)))
            }

            function S(e, t) {
                x();
                const r = g[e];
                return t ? r.toUpperCase() : r
            }

            function w(e) {
                const {
                    orderType: t,
                    uppercase: r,
                    shorten: n,
                    parentId: i,
                    stopType: a
                } = e;
                x();
                const u = n ? 2 : 1;
                let c = m,
                    d = t;
                return void 0 !== i && (c = T, 3 === t && (d = a === s.StopType.TrailingStop ? o.BracketType.TrailingStop : o.BracketType.StopLoss), 1 === t && (d = o.BracketType.TakeProfit)), r ? c[u][d].toUpperCase() : c[u][d]
            }

            function P(e, t, r, n, i) {
                const o = {
                        added: [],
                        modified: [],
                        removed: []
                    },
                    s = e.slice(0);
                return t.forEach((t => {
                    const a = e.findIndex((e => e[r] === t[r]));
                    if (-1 === a) return void o.added.push(t);
                    s[a] = null;
                    const c = e[a];
                    for (const e of n) {
                        let r = !0;
                        if (null === c[e] || "object" != typeof c[e] ? r = c[e] === t[e] : i && (r = (0, u.deepEquals)(c[e], t[e])[0]), !r) return void o.modified.push(t)
                    }
                })), s.forEach((e => {
                    e && o.removed.push(e)
                })), o
            }

            function D(e) {
                return Math.abs(e || 0) < .001 ? "0.00" : (0, a.splitThousands)((e || 0).toFixed(2))
            }

            function E(e, t = [1, 100, 1e3, 5e3]) {
                return function r(n) {
                    return e().catch((e => {
                        return (0, l.isAbortError)(e) ? Promise.reject(e) : n < t.length ? (i = t[n], new Promise((e => {
                            setTimeout(e, i)
                        }))).then((() => r(n + 1))) : Promise.reject(e);
                        var i
                    }))
                }(0)
            }

            function B(e) {
                return -1 !== Object.keys(o.OrderOrPositionMessageType).map((e => o.OrderOrPositionMessageType[e])).indexOf(e)
            }

            function M(e, t, r, n) {
                const o = (0, i.Big)(e).div(t);
                return 1 === r && 1 === n || 2 === r && -1 === n ? o.round(0, 0).mul(t).toNumber() : 1 === r && -1 === n || 2 === r && 1 === n ? o.round(0, 3).mul(t).toNumber() : 0
            }
            const O = n.t(null, void 0, r(609372));
            class F {
                constructor(e) {
                    this._isFinished = !1, this._isTerminated = !1, this._tasks = e
                }
                execute() {
                    return this._isTerminated = !1, this._isExecuted() && !this._isFinished ? this.terminate().then((() => this._execution = this._execute())) : this._execution = this._execute()
                }
                async terminate() {
                    if (this._isExecuted() && !this._isFinished) {
                        this._isTerminated = !0;
                        try {
                            await this._execution
                        } catch (e) {
                            return void k.logWarn(e)
                        }
                    }
                }
                _isExecuted() {
                    return !!this._execution
                }
                async _execute() {
                    for (const e of this._tasks) {
                        if (this._isTerminated) throw new Error("Login tasks are terminated");
                        try {
                            await e()
                        } catch (e) {
                            this._isFinished = !0;
                            const t = {
                                detailedErrorMessage: `${O}${_(j(e))}`,
                                userFriendlyMessage: `${O}${_($(e))}`
                            };
                            throw e instanceof f.DisconnectError ? new f.DisconnectError({ ...t,
                                disconnectInfo: e.disconnectInfo
                            }) : new p.UserFriendlyError(t)
                        }
                    }
                    this._isFinished = !0
                }
            }

            function _(e) {
                return void 0 === e || "" === e ? "" : `: ${e}`
            }

            function C(e) {
                return (0, i.Big)(10).pow(Math.floor(Math.log10(e))).toNumber()
            }

            function I(e) {
                if (!e || !e.done) return e;
                const t = e;
                return new Promise(((e, r) => {
                    t.done((t => {
                        e(t)
                    })).fail((e => {
                        r(e)
                    }))
                }))
            }

            function L(e) {
                return e.indexOf("JPY") === e.length - 3 ? .01 : 1e-4
            }

            function N(e) {
                return -1 !== [2, 1, 5].indexOf(e)
            }

            function A(e) {
                return x(), h[e]
            }

            function U(e, t) {
                return n.t(null, void 0, r(221456)).replace("{symbol}", e).replace("{broker}", t)
            }

            function $(e) {
                if (void 0 === e) return n.t(null, void 0, r(328523));
                let t;
                return t = e instanceof Error ? e.message : "object" == typeof e ? JSON.stringify(e) : e.toString(), (0, d.removeTags)(t)
            }

            function j(e) {
                return e instanceof p.UserFriendlyError ? (0, d.removeTags)(e.detailedErrorMessage) : $(e)
            }

            function q(e) {
                return e.replace(/&amp;/g, "&")
            }

            function z(e) {
                return "ready" in e
            }
            const H = {
                    [o.BracketType.StopLoss]: n.t(null, void 0, r(241648)),
                    [o.BracketType.TakeProfit]: n.t(null, void 0, r(129266)),
                    [o.BracketType.TrailingStop]: n.t(null, void 0, r(86430))
                },
                Q = {
                    [o.BracketType.StopLoss]: "Stop Loss",
                    [o.BracketType.TakeProfit]: "Take Profit",
                    [o.BracketType.TrailingStop]: "Trailing Stop"
                };

            function W(e) {
                const t = Q[e],
                    r = H[e];
                return e => {
                    throw new p.UserFriendlyError({
                        detailedErrorMessage: `${t}: ${j(e)}`,
                        userFriendlyMessage: `${r}: ${$(e)}`
                    })
                }
            }

            function J(e) {
                return e = "/" === e[e.length - 1] ? e : e + "/"
            }
            const V = new Set(["date", "dateOrDateTime", "default", "fixed", "variablePrecision", "formatQuantity", "formatPrice", "formatPriceForexSup", "integerSeparated", "localDate", "localDateOrDateTime", "percentage", "pips", "profit", "profitInInstrumentCurrency", "side", "positionSide", "status", "symbol", "text", "type", "marginPercent", "empty"]);

            function R(e) {
                return void 0 !== e && V.has(e)
            }

            function Y(e) {
                return (0, p.isUserFriendlyError)(e) && void 0 !== e.cause ? [...Y(e.cause), e.cause] : [e]
            }
        },
        910368: (e, t, r) => {
            "use strict";
            r.d(t, {
                bottomTradingTabClassName: () => d,
                filteredBrokerIds: () => l,
                orderStatusToText: () => c.orderStatusToText,
                brokersListFromPlans: () => f,
                isOAuthAuthType: () => T,
                executionText: () => g,
                convertActionDescriptionsToActions: () => h,
                isOrderActive: () => v,
                makeBrokerSideMaintananceFeatureToggleName: () => y,
                makeMaintananceFeatureToggleName: () => k,
                getCurrency: () => b,
                isModifyOrderSupported: () => S,
                isMoveOrderSupported: () => w,
                isBatsQuotes: () => P,
                isDefined: () => D,
                makeDatePlus24UTCHours: () => E,
                findDurationMetaInfo: () => B,
                getOrderDuration: () => M,
                makeInitialOrderDuration: () => O,
                makeOrderDuration: () => F,
                filterDurationsBySymbolDurations: () => _,
                filterDurationsByOrderType: () => C,
                getTimestamp: () => I,
                adjustSavedCustomFieldsValues: () => L,
                getDefaultOrderType: () => N,
                isMintickMultiple: () => A,
                getAsk: () => U,
                getBid: () => $,
                getLast: () => j,
                isNoQuotes: () => q,
                getQuotePrice: () => z,
                getPriceStep: () => H,
                roundToStepRequired: () => Q
            });
            var n = r(960521),
                i = r(650151),
                o = r(758337),
                s = r(547623),
                a = r(310399),
                u = r(691520),
                c = r(703819);
            const d = "js-bottom-trading-tab";

            function l(e) {
                const t = [],
                    r = e.filter((e => e.brokerPlan && !e.brokerPlan.hidden && e.brokerPlan.slug_name));
                return t.push(...r.map((e => e.brokerPlan && e.brokerPlan.slug_name)).filter((e => void 0 !== e))), t.splice(0, 0, ...p), t
            }
            const p = ["Paper"];

            function f(e, t) {
                const r = e.map((e => e.id)),
                    n = t.map((e => e.slug_name)),
                    i = t.filter((e => r.includes(e.slug_name))).map((t => ({
                        metainfo: m(e, t.slug_name),
                        brokerPlan: t
                    }))),
                    o = e.filter((e => !n.includes(e.id) && !p.includes(e.id))).map((e => ({
                        metainfo: e
                    }))),
                    s = p.map((t => ({
                        metainfo: m(e, t)
                    })));
                return s.length > 0 && i.splice(0, 0, ...s), [...i, ...o]
            }

            function m(e, t) {
                return (0, i.ensureDefined)(e.find((e => e.id.toLowerCase() === t.toLowerCase())))
            }

            function T(e) {
                return void 0 !== e && ["oauth", "oauth2-implicit-flow", "oauth2-code-flow"].includes(e)
            }

            function g(e, t) {
                const r = (0, c.sideToText)(e.side) + " " + e.qty + " @ " + t.format(e.price);
                return r.substring(0, 1).toUpperCase() + r.substring(1).toLowerCase()
            }

            function h(e) {
                return e ? e.map((e => "-" === e.text || e.separator ? new a.Separator : new a.Action({
                    actionId: "Trading.CustomActionId",
                    name: e.name,
                    checkable: e.checkable,
                    checked: e.checked,
                    disabled: void 0 !== e.enabled && !e.enabled,
                    label: e.text,
                    statName: e.statName,
                    icon: e.icon,
                    onExecute: t => {
                        const r = t.getState();
                        e.action({
                            checkable: r.checkable,
                            checked: r.checked,
                            enabled: !r.disabled,
                            text: r.label
                        })
                    }
                }))) : []
            }

            function v(e) {
                return 6 === e || 3 === e
            }

            function y(e) {
                return `${e}-brokers-side-maintenance`.toLowerCase()
            }

            function k(e) {
                return `${e}-maintenance`.toLowerCase()
            }

            function b(e, t) {
                return !t && e.currencySign || e.currency || ""
            }

            function x(e, t) {
                return Boolean(void 0 !== e.parentId && t.supportModifyBrackets && (t.supportTrailingStop && t.supportModifyTrailingStop || e.stopType !== s.StopType.TrailingStop))
            }

            function S(e, t) {
                const r = 2 !== e.type && void 0 === e.parentId && (t.supportModifyOrderPrice || t.supportEditAmount || t.supportModifyBrackets),
                    n = x(e, t);
                return Boolean(r || n)
            }

            function w(e, t) {
                const r = void 0 === e.parentId && t.supportModifyOrderPrice,
                    n = x(e, t);
                return Boolean(r || n)
            }

            function P(e) {
                var t;
                return "BATS" === (null === (t = e.originalName) || void 0 === t ? void 0 : t.split(":")[0])
            }

            function D(e) {
                return null != e
            }

            function E() {
                const e = new Date;
                return e.setUTCHours(e.getUTCHours() + 24), e
            }

            function B(e, t) {
                return e.find((e => e.value === t))
            }

            function M(e) {
                const {
                    orderDuration: t,
                    orderType: r,
                    savedDuration: n,
                    orderDurations: i,
                    symbolDurations: o
                } = e;
                if (void 0 !== t) return t;
                const s = function(e) {
                    const {
                        duration: t,
                        orderDurations: r,
                        orderType: n,
                        symbolDurations: i
                    } = e;
                    if (null === t || void 0 === r) return null;
                    const o = _(r, i),
                        s = B(C(o, null != n ? n : null), t.type);
                    if (void 0 === s) return null;
                    if (void 0 !== t.datetime && (s.hasDatePicker || s.hasTimePicker)) {
                        const e = 864e5,
                            r = s.hasTimePicker ? t.datetime < Date.now() : Math.floor((t.datetime - Date.now()) / e) < 0;
                        t.datetime = r ? E().getTime() : t.datetime
                    }
                    return t
                }({
                    duration: n,
                    orderType: r,
                    orderDurations: i,
                    symbolDurations: o
                });
                return null !== s ? { ...s
                } : O(r, i, o)
            }

            function O(e, t, r) {
                var n;
                if (void 0 === t) return null;
                const i = C(_(t, r), e);
                if (0 === i.length) return null;
                return F(null !== (n = i.find((e => e.default))) && void 0 !== n ? n : i[0])
            }

            function F(e) {
                const t = {
                    type: e.value
                };
                return Boolean(e.hasTimePicker || e.hasDatePicker) && (t.datetime = I(E())), t
            }

            function _(e, t) {
                return 0 === e.length || void 0 === t || 0 === t.length ? e : e.filter((({
                    value: e
                }) => t.includes(e)))
            }

            function C(e, t) {
                const r = [1, 3, 4];
                return e.filter((e => {
                    var n;
                    const i = null !== (n = e.supportedOrderTypes) && void 0 !== n ? n : r;
                    return null === t || i.includes(t)
                }))
            }

            function I(e) {
                return e.valueOf()
            }

            function L(e, t) {
                if (void 0 === t.customFields) return {};
                const r = {};
                return t.customFields.forEach((t => {
                    var n;
                    const i = "ComboBox" === t.inputType;
                    if (i && t.forceUserEnterInitialValue) return;
                    const o = i ? t.items[0].value : t.value,
                        s = null !== (n = e[t.id]) && void 0 !== n ? n : o;
                    void 0 !== s && (r[t.id] = s)
                })), r
            }

            function N(e) {
                return e.supportLimitOrders ? 1 : e.supportMarketOrders ? 2 : e.supportStopLimitOrders ? 4 : e.supportStopOrders ? 3 : void 0
            }

            function A(e, t) {
                if (0 === t) return !1;
                const r = Math.round(1e12 * t) / 1e12,
                    i = new n.Big(e),
                    o = new n.Big(r);
                return i.mod(o).eq(0)
            }

            function U(e) {
                return (0, o.isNumber)(e.ask) ? e.ask : (0, o.isNumber)(e.trade) ? e.trade : 0
            }

            function $(e) {
                return (0, o.isNumber)(e.bid) ? e.bid : (0, o.isNumber)(e.trade) ? e.trade : 0
            }

            function j(e) {
                return (0, o.isNumber)(e.trade) ? e.trade : 0
            }

            function q(e) {
                return null === e || void 0 === e.ask || void 0 === e.bid
            }

            function z(e, t) {
                return 1 === t ? U(e) : $(e)
            }

            function H(e) {
                const {
                    price: t,
                    priceType: r,
                    variableMinTickData: n,
                    minTick: i,
                    limitPriceStep: o,
                    stopPriceStep: s
                } = e;
                return 1 === r && void 0 !== o ? o : 2 === r && void 0 !== s ? s : void 0 !== n ? (0, u.getMinTick)({
                    minTick: i,
                    price: t,
                    variableMinTickData: n
                }) : i
            }

            function Q(e) {
                const {
                    priceType: t,
                    minTick: r,
                    limitPriceStep: n,
                    stopPriceStep: i
                } = e;
                return 1 === t && void 0 !== n ? n !== r : 2 === t && void 0 !== i && i !== r
            }
        },
        812301: (e, t, r) => {
            "use strict";
            r.d(t, {
                qtyErrors: () => s,
                checkQtyError: () => u
            });
            var n = r(777754),
                i = r(960521),
                o = r.n(i);
            const s = {
                    min: n.t(null, void 0, r(430999)),
                    max: n.t(null, void 0, r(734266)),
                    step: n.t(null, void 0, r(136443)),
                    balance: n.t(null, void 0, r(409232))
                },
                a = (n.t(null, void 0, r(611835)), n.t(null, void 0, r(706035)));

            function u(e, t, r = !1) {
                if (null === t) return {
                    res: !0,
                    msg: a
                };
                const n = e.step,
                    i = e.min,
                    u = e.max;
                if (t < i) return {
                    res: !0,
                    msg: s.min.format({
                        min: i.toString()
                    })
                };
                if (t > u) return {
                    res: !0,
                    msg: s.max.format({
                        max: u.toString()
                    })
                };
                const c = new(o())(t).minus(i).mod(n);
                return r && !c.eq(0) ? {
                    res: !0,
                    msg: s.step.format({
                        step: n.toString()
                    })
                } : {
                    res: !1
                }
            }
        },
        507720: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="currentColor"><path d="m.58 1.42.82-.82 15 15-.82.82z"/><path d="m.58 15.58 15-15 .82.82-15 15z"/></svg>'
        }
    }
]);
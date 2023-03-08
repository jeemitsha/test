(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [43364, 83639, 21350], {
        410864: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                    ToastIntent: () => r
                }),
                function(e) {
                    e.Default = "default", e.Success = "success", e.Warning = "warning", e.Danger = "danger"
                }(r || (r = {}))
        },
        500521: (e, t, n) => {
            "use strict";
            e.exports.pushChartPage = async function(e) {
                const {
                    default: t
                } = await Promise.all([n.e(36037), n.e(43082), n.e(36956), n.e(4100), n.e(50251), n.e(85783), n.e(53444), n.e(25977), n.e(50762), n.e(39694), n.e(34629)]).then(n.t.bind(n, 55244, 23)), r = new t.ChartPage(e);
                TradingView.historyManager.push(r)
            }
        },
        963239: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                copyToClipboard: () => o,
                writeImpl: () => i,
                writePromiseUsingApi: () => a
            });
            var r = n(793993);

            function o(e) {
                return i(e, null)
            }

            function i(e, t) {
                const n = e.files && e.files.length > 0;
                if (!n && t && t.eventPhase > 0) return s(t, e), Promise.resolve();
                if (!n) {
                    let t = !1;
                    const n = n => {
                        n.stopImmediatePropagation(), s(n, e), t = !0
                    };
                    try {
                        document.addEventListener("copy", n, !0), document.execCommand("copy")
                    } finally {
                        document.removeEventListener("copy", n, !0)
                    }
                    if (t) return Promise.resolve()
                }
                return async function(e) {
                    const t = (0, r.getClipboard)();
                    if (!t || !t.write || !window.ClipboardItem) throw new DOMException("ClipboardApi is not supported", "NotSupportedError");
                    const n = {};
                    for (const t of e.files || []) n[t.type] = t;
                    e.text && (n["text/plain"] = e.text);
                    e.html && (n["text/html"] = e.html);
                    return t.write([new window.ClipboardItem(n)])
                }(e)
            }

            function s(e, t) {
                e.preventDefault();
                const n = e.clipboardData;
                t.text && n.setData("text/plain", t.text), t.html && n.setData("text/html", t.html)
            }
            async function a(e, t) {
                const n = (0, r.getClipboard)();
                if ("text/plain" === t && !n.write) {
                    const t = await e;
                    return n.writeText(await t.text())
                }
                if (!n || !n.write || !window.ClipboardItem) throw new DOMException("ClipboardApi is not supported", "NotSupportedError");
                let o = null;
                try {
                    o = new window.ClipboardItem({
                        [t]: e
                    })
                } catch (n) {
                    o = new window.ClipboardItem({
                        [t]: await e
                    })
                }
                if (o) return n.write([o]);
                throw new Error("ClipboardApi is not supported")
            }
        },
        552279: (e, t, n) => {
            "use strict";
            n.d(t, {
                reloginOrGoPro: () => h,
                runOrGoPro: () => d,
                runOrGoProWithoutSync: () => c
            });
            var r = n(526225),
                o = n(508846),
                i = n(632446),
                s = n(833813);

            function a(e, t, n) {
                return t.value || (0, i.enabled)(e, n)
            }

            function l(e, t, n) {
                switch (e) {
                    case s.ProductFeatures.SCREENER_INTERVALS:
                        return function(e, t) {
                            const n = (0, i.getConfig)(s.ProductFeatures.SCREENER_INTERVALS, t);
                            return !(!n || !n.interval) && n.interval.includes(e.interval)
                        }(t, n);
                    case s.ProductFeatures.SCREENER_AUTO_REFRESH:
                        return a(s.ProductFeatures.SCREENER_AUTO_REFRESH, t, n);
                    case s.ProductFeatures.ALERTS_NO_EXPIRATION:
                        return a(s.ProductFeatures.ALERTS_NO_EXPIRATION, t, n);
                    default:
                        return (0, i.enabled)(e, n)
                }
            }
            var u = n(963644);

            function c(e, t, n, r) {
                l(t, r) ? e() : (0, o.createGoProDialog)(n)
            }
            async function d(e, t, n, o = {}) {
                const i = window.is_authenticated;
                window.is_authenticated && window.user.is_pro && await (0, r.syncUserData)("gopro"), i === window.is_authenticated ? c(e, t, n, o) : (0, u.showSignModal)({
                    source: n.goproSource,
                    feature: n.feature,
                    signinSuccess: e
                })
            }
            async function h(e) {
                const t = window.is_authenticated;
                window.is_authenticated && window.user.is_pro && await (0,
                    r.syncUserData)("gopro"), t === window.is_authenticated ? (0, o.createGoProDialog)(e) : (0, u.showSignModal)({
                    source: e.goproSource,
                    feature: e.feature
                })
            }
        },
        359663: (e, t, n) => {
            "use strict";
            n.d(t, {
                FeatureToggleWatchedValue: () => s
            });
            var r = n(125226),
                o = n(988411),
                i = n.n(o);
            class s extends(i()) {
                constructor(e, t) {
                    super(function(e, t) {
                        return (0, r.isFeatureEnabled)(e)
                    }(e)), (0, r.onFeaturesStateChanged)().subscribe(this, (t => {
                        e === t && this.setValue((0, r.isFeatureEnabled)(e))
                    }))
                }
                destroy() {
                    (0, r.onFeaturesStateChanged)().unsubscribeAll(this)
                }
            }
        },
        793993: (e, t, n) => {
            "use strict";

            function r() {
                var e;
                return null !== (e = navigator.androidClipboard) && void 0 !== e ? e : navigator.clipboard
            }
            n.d(t, {
                getClipboard: () => r
            })
        },
        526225: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                syncUserData: () => c,
                syncUserConversionData: () => d
            });
            var r = n(272001),
                o = n(345848),
                i = n(890740),
                s = n(152198);
            const a = (0, r.getLogger)("User.Sync");

            function l(e) {
                return `${e}_${window.user&&window.user.username||""}`
            }

            function u(e, t, n) {
                n !== window.user.pro_plan && (window.user.pro_plan = n, window.user.is_pro = Boolean(n), (0, o.trackEvent)("Sync User Data", "Different Pro Plan", l(e))), t !== window.is_authenticated && (window.is_authenticated = t, window.loginStateChange.fire(), (0, o.trackEvent)("Sync User Data", "Different Auth", l(e)))
            }
            async function c(e) {
                try {
                    u(e, !0, (await (0, s.getProPlanDetailsForUser)()).pro_plan)
                } catch (t) {
                    ! function(e, t) {
                        403 === t.status && ["not_authenticated", "login_required"].includes(t.type || "") ? u(e, !1, void 0) : a.logError(t.message)
                    }(e, t)
                }
            }
            async function d(e) {
                const t = await (0, i.fetch)("/gopro/"),
                    n = await t.json();
                return u(e, n.is_authenticated, n.user.pro_plan), n
            }
        },
        869862: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                    AlertEditorAbortReason: () => r
                }),
                function(e) {
                    e.AlertIsInvalid = "alert-is-invalid", e.AlertsMaintenance = "alerts-maintenance", e.ChartModelNotFound = "chart-model-not-found", e.IsAlreadyPresent = "is-already-present", e.MainSeriesIsATR = "main-series-is-atr", e.MainSeriesIsInReplay = "main-series-is-in-replay", e.MainSeriesIsOffline = "main-series-is-offline", e.SourceIsDangerous = "source-is-dangerous", e.SymbolInfoTimeout = "symbol-info-timeout", e.SymbolIsInvalid = "symbol-is-invalid", e.SymbolCurrencyConverted = "symbol-currency-converted", e.SymbolUnitConverted = "symbol-unit-converted", e.SymbolCurrencyAndUnitConverted = "symbol-currency-and-unit-converted", e.SymbolIsEconomics = "symbol-is-economics", e.UnsupportedResolution = "unsupported-resolution", e.ManualAbort = "manual-abort", e.MisleadingPriceScale = "misleading-price-scale"
                }(r || (r = {}))
        },
        494508: (e, t, n) => {
            "use strict";
            n.d(t, {
                getAlertDialogType: () => h,
                shouldAbortAlertEditor: () => p,
                showAbortExplainingDialog: () => v,
                ensureSeriesIsNotOffline: () => b
            });
            var r = n(777754),
                o = n(779923),
                i = n(869862),
                s = n(720444),
                a = n(583912),
                l = n(948070),
                u = n(424122),
                c = n(552279),
                d = n(304241);

            function h(e) {
                return e.alert ? e.type || "edit_alert" : "create_alert"
            }

            function p(e) {
                var t;
                if (d.alertsMaintenanceTracker.value()) return i.AlertEditorAbortReason.AlertsMaintenance;
                if (!e.alert && !e.dataSourceHub) return i.AlertEditorAbortReason.ChartModelNotFound;
                if (!l.alertEditorInvocationHandler.isAllowedToInvoke(e)) return i.AlertEditorAbortReason.IsAlreadyPresent;
                const n = null === (t = e.dataSourceHub) || void 0 === t ? void 0 : t.mainSeries();
                if (n && f(n)) return i.AlertEditorAbortReason.MainSeriesIsOffline;
                if (n && function(e) {
                        return 4 === e.status()
                    }(n)) return i.AlertEditorAbortReason.SymbolIsInvalid;
                if (n && n.isConvertedToOtherCurrency() && n.isConvertedToOtherUnit()) return i.AlertEditorAbortReason.SymbolCurrencyAndUnitConverted;
                if (n && n.isConvertedToOtherCurrency()) return i.AlertEditorAbortReason.SymbolCurrencyConverted;
                if (n && n.isConvertedToOtherUnit()) return i.AlertEditorAbortReason.SymbolUnitConverted;
                const r = h(e);
                if ("create_alert" === r && n && function(e) {
                        const t = e.stateForAlert().styleInputs;
                        return "style" in t && "ATR" === t.style
                    }(n)) return i.AlertEditorAbortReason.MainSeriesIsATR;
                if ("create_alert" === r && n && function(e) {
                        return e.isInReplay()
                    }(n)) return i.AlertEditorAbortReason.MainSeriesIsInReplay;
                if ("create_alert" === r && n && function(e) {
                        return (0, s.isEconomicSymbol)(e.symbolInfo())
                    }(n)) return i.AlertEditorAbortReason.SymbolIsEconomics;
                const o = n ? n.interval() : a.linking.interval.value();
                return "create_alert" !== r || (0, u.canPlaceAlertOnResolution)(o) ? null : i.AlertEditorAbortReason.UnsupportedResolution
            }

            function f(e) {
                return 0 === e.status()
            }

            function v(e, t) {
                if (g.has(e)) return;
                g.add(e);
                const s = () => g.delete(e),
                    a = function(e) {
                        return new Map([
                            [i.AlertEditorAbortReason.UnsupportedResolution, "alertsOnSeconds"]
                        ]).get(e) || null
                    }(e);
                if (a) return void(0, c.reloginOrGoPro)({
                    feature: a,
                    actionAfterClose: s
                });
                const l = function(e, t) {
                    const o = r.t(null, void 0, n(900850)),
                        s = r.t(null, void 0, n(488322)),
                        a = r.t(null, void 0, n(468988));
                    return new Map([
                        [i.AlertEditorAbortReason.AlertsMaintenance, {
                            title: r.t(null, void 0, n(243322)),
                            text: r.t(null, void 0, n(98333)),
                            buttonText: a
                        }],
                        [i.AlertEditorAbortReason.MainSeriesIsOffline, {
                            title: o,
                            text: ("create_alert" === t ? r.t(null, void 0, n(680644)) : r.t(null, void 0, n(878717))) + ". " + r.t(null, void 0, n(443167)) + ".",
                            buttonText: a
                        }],
                        [i.AlertEditorAbortReason.SymbolIsInvalid, {
                            title: o,
                            text: "create_alert" === t ? r.t(null, void 0, n(396472)) : r.t(null, void 0, n(601230)),
                            buttonText: a
                        }],
                        [i.AlertEditorAbortReason.SymbolCurrencyAndUnitConverted, {
                            title: r.t(null, void 0, n(535871)),
                            text: "create_alert" === t ? r.t(null, void 0, n(39546)) : r.t(null, void 0, n(588989)),
                            buttonText: r.t(null, void 0, n(875139))
                        }],
                        [i.AlertEditorAbortReason.SymbolCurrencyConverted, {
                            title: r.t(null, void 0, n(203470)),
                            text: "create_alert" === t ? r.t(null, void 0, n(499303)) : r.t(null, void 0, n(8180)),
                            buttonText: r.t(null, void 0, n(875139))
                        }],
                        [i.AlertEditorAbortReason.SymbolUnitConverted, {
                            title: r.t(null, void 0, n(806212)),
                            text: "create_alert" === t ? r.t(null, void 0, n(433335)) : r.t(null, void 0, n(615119)),
                            buttonText: r.t(null, void 0, n(875139))
                        }],
                        [i.AlertEditorAbortReason.SymbolIsEconomics, {
                            title: r.t(null, void 0, n(282076)),
                            text: r.t(null, void 0, n(914407)),
                            buttonText: r.t(null, void 0, n(875139))
                        }],
                        [i.AlertEditorAbortReason.MainSeriesIsATR, {
                            title: r.t(null, void 0, n(347599)),
                            text: r.t(null, void 0, n(862688)),
                            buttonText: a
                        }],
                        [i.AlertEditorAbortReason.MainSeriesIsInReplay, {
                            title: r.t(null, void 0, n(198447)),
                            text: r.t(null, void 0, n(881565)),
                            buttonText: r.t(null, void 0, n(875139))
                        }]
                    ]).get(e) || {
                        title: o,
                        text: s,
                        buttonText: a
                    }
                }(e, t);
                (0, o.showWarning)({ ...l,
                    onClose: s
                })
            }
            const g = new Set;

            function b(e) {
                return new Promise((t => {
                    if (!f(e)) return void t();
                    const n = () => {
                        f(e) || (e.onStatusChanged().unsubscribe(null, n), t())
                    };
                    e.onStatusChanged().subscribe(null, n)
                }))
            }
        },
        821350: (e, t, n) => {
            "use strict";
            n.d(t, {
                invokeAlertEditor: () => d,
                invokeAlertEditorWithOnlineSeries: () => p
            });
            var r = n(494508),
                o = n(240158),
                i = n(869862),
                s = n(492534),
                a = n(272001),
                l = n(948070),
                u = n(304241);
            const c = (0, a.getLogger)("Alerts.Price.InvokeAlertEditor");

            function d(e) {
                u.alertsMaintenanceTracker.sync();
                const t = (0, r.shouldAbortAlertEditor)(e);
                if (null !== t) return t !== i.AlertEditorAbortReason.IsAlreadyPresent && (0, r.showAbortExplainingDialog)(t, (0, r.getAlertDialogType)(e)), c.logWarn(`Aborted: ${t}`), void(e.onAborted && e.onAborted(t));
                const {
                    unlockInvocation: s,
                    abortSignal: a
                } = l.alertEditorInvocationHandler.lockInvocation(e);
                Promise.all([Promise.all([n.e(68716), n.e(57901), n.e(34577), n.e(25977), n.e(68647), n.e(80455), n.e(46913), n.e(16665), n.e(47342), n.e(98850), n.e(80653), n.e(8837), n.e(88777), n.e(66100), n.e(34063), n.e(89397), n.e(60273)]).then(n.t.bind(n, 256869, 19)), (0, o.getPriceAlertsDispatcher)(), h(e, s, a)]).then((e => {
                    const [t, n, r] = e;
                    new t.AlertEditor(n, r)
                }), s)
            }

            function h(e, t, n) {
                return (e.series ? (0, s.hasUserAccessToDataSource)(e.series) : Promise.resolve(!0)).then((r => {
                    const o = e.onDestroy,
                        i = { ...e,
                            abortSignal: n,
                            onDestroy: () => {
                                t(), o && o()
                            }
                        };
                    return r || (delete i.series, delete i.value), i
                }))
            }

            function p(e) {
                e.dataSourceHub ? (0, r.ensureSeriesIsNotOffline)(e.dataSourceHub.mainSeries()).then((() => {
                    d(e)
                })) : d(e)
            }
        },
        597922: (e, t, n) => {
            "use strict";
            n.d(t, {
                createLayout: () => a,
                layoutInitialSizingState: () => u
            });
            var r = n(203308),
                o = n(822914),
                i = n(650151);

            function s(e, t, n) {
                const r = new Set;
                if ("number" == typeof e) return r.add(e), {
                    indices: r,
                    smallestIndex: e,
                    sizer: e => e,
                    splitters: () => [],
                    resizeApplier: (e, t, n, r, o) => o,
                    syncSublayoutsBySplitter: (e, t) => t
                };
                const a = e[0],
                    l = e.slice(1).map((e => s(e, t)));
                let u = 1 / 0;
                for (const e of l)
                    for (const t of Array.from(e.indices)) t < u && (u = t), r.add(t);
                const c = (e, t, n, r, o, i, s, a) => {
                        const l = "h" === s ? e.width : e.height;
                        let u, c, d;
                        if (a) {
                            const e = t * n + r * l;
                            u = Math.round(e), c = t === i - 1 ? l - u - 1 : Math.round(e + o * l) - u
                        } else {
                            const e = (l - (i - 1) * n) / i,
                                r = t * (e + n);
                            u = Math.round(r), c = Math.round(r + e) - u
                        }
                        return d = "h" === s ? {
                            top: e.top,
                            left: e.left + u,
                            height: e.height,
                            width: c
                        } : {
                            top: e.top + u,
                            left: e.left,
                            height: c,
                            width: e.width
                        }, d
                    },
                    d = (e, t, n, r, o, i, s) => {
                        if ("number" == typeof n) return [];
                        const a = n[0],
                            l = n.slice(1);
                        return l.reduce(((n, u, h) => {
                            var p;
                            const f = null == s ? void 0 : s[h],
                                v = null !== (p = null == f ? void 0 : f.percent) && void 0 !== p ? p : 1 / l.length,
                                g = c(e, h, t, n.sumOfCoeffsBefore, v, l.length, a, s),
                                b = n.sumOfCoeffsBefore + v;
                            if (h < l.length - 1) {
                                const e = `${i}-${r}-${h}-${a}`;
                                let t;
                                t = "v" === a ? {
                                    left: g.left,
                                    top: g.top + g.height - 6 + 1,
                                    width: g.width,
                                    height: 12
                                } : {
                                    left: g.left + g.width - 6 + 1,
                                    top: g.top,
                                    width: 12,
                                    height: g.height
                                };
                                const s = {
                                    level: r,
                                    orientation: a,
                                    indexes: [...o, h],
                                    metrics: t,
                                    className: e
                                };
                                n.splitters.push(s)
                            }
                            return Array.isArray(u) ? {
                                splitters: n.splitters.concat(d(g, t, u, r + 1, [...o, h], i, null == f ? void 0 : f.substate)),
                                sumOfCoeffsBefore: b
                            } : {
                                splitters: n.splitters,
                                sumOfCoeffsBefore: b
                            }
                        }), {
                            splitters: [],
                            sumOfCoeffsBefore: 0
                        }).splitters
                    };

                function h(e, t, n, r, o, s, l, u) {
                    if ("number" == typeof r) return s;
                    const d = r.slice(1),
                        p = [0];
                    for (let e = 0; e < d.length; e++) p.push(p[p.length - 1] + s[e].percent);
                    if (l < o.level) return d.map(((r, f) => {
                        var v;
                        const g = null == s ? void 0 : s[f];
                        if ("number" == typeof r) return g;
                        if (!u && f !== o.indexes[l]) return g;
                        const b = null !== (v = null == g ? void 0 : g.percent) && void 0 !== v ? v : 1 / d.length,
                            y = c(e, f, t, p[f], b, d.length, a, s);
                        return {
                            percent: g.percent,
                            substate: h(y, t, n, r, o, (0, i.ensureDefined)(g.substate), l + 1, u)
                        }
                    })); {
                        const t = r[0];
                        if (t !== o.orientation || s.length < 2) return s;
                        const i = Math.min(o.indexes[l], s.length - 2),
                            a = "v" === t ? e.height : e.width,
                            u = n / a,
                            c = s[i].percent + s[i + 1].percent;
                        return s[i].percent += u, s[i].percent = Math.min(c - .05, Math.max(.05, s[i].percent)), s[i + 1].percent -= u, s[i + 1].percent = Math.min(c - .05, Math.max(.05, s[i + 1].percent)), s
                    }
                }

                function p(e, t) {
                    if (1 === e.length) return t; {
                        const n = (0, i.ensureDefined)(t[e[0]].substate);
                        return p(e.slice(1), n)
                    }
                }

                function f(e, t, n, r, s) {
                    if ("number" == typeof e) return n;
                    const a = e.slice(1);
                    if (s < t.level) return a.map(((e, o) => {
                        const a = null == n ? void 0 : n[o];
                        return "number" == typeof e ? a : {
                            percent: a.percent,
                            substate: f(e, t, (0, i.ensureDefined)(a.substate), r, s + 1)
                        }
                    })); {
                        const e = t.indexes[s];
                        if (r.length < n.length) {
                            const e = (0, o.default)(r),
                                t = e[e.length - 1].percent,
                                i = n.length - e.length,
                                s = t / (i + 1);
                            e[e.length - 1].percent = s;
                            for (let t = 0; t < i; t++) e.push({
                                percent: s
                            });
                            r = e
                        } else if (r.length > n.length) {
                            const t = (0, o.default)(r);
                            if (e >= n.length - 1) {
                                const e = r.length - n.length;
                                for (let n = 0; n < e; n++) t[e].percent += t[n].percent;
                                t.splice(0, e)
                            } else {
                                for (let e = n.length; e < r.length; e++) t[n.length - 1].percent += t[e].percent;
                                t.splice(n.length)
                            }
                            r = t
                        }
                        return n.forEach(((e, t) => e.percent = r[t].percent)), n
                    }
                }
                return {
                    indices: r,
                    smallestIndex: u,
                    sizer: (e, t, n, r, o) => {
                        let i, s, u, d = 0,
                            h = 0,
                            p = 0;
                        for (let e = 0; e < l.length; e++) {
                            const r = l[e];
                            r.smallestIndex >= n || (r.indices.has(t) && (i = r, u = null == o ? void 0 : o[e].substate, o && (p = o[e].percent), s = d), d++, o && 0 === p && (h += o[e].percent))
                        }
                        const f = c(e, s, r, h, p, d, a, o);
                        return i.sizer(f, t, n, r, u)
                    },
                    splitters: (t, n, r) => d(t, n, e, 0, [], "", r),
                    resizeApplier: (t, n, r, o, i, s) => h(t, n, r, e, o, i, 0, s),
                    syncSublayoutsBySplitter: function(t, n) {
                        const r = p(t.indexes, n);
                        return f(e, t, n, r, 0)
                    }
                }
            }

            function a(e, t, n) {
                const r = s(e, t);
                return {
                    title: n,
                    count: r.indices.size,
                    sizer: r.sizer,
                    splitters: r.splitters,
                    resizeApplier: r.resizeApplier,
                    syncSublayoutsBySplitter: r.syncSublayoutsBySplitter,
                    expression: e,
                    layoutType: t
                }
            }

            function l(e) {
                return e.map((t => {
                    if ((0, r.default)(t)) return {
                        percent: 1 / e.length
                    }; {
                        const n = t.slice(1);
                        return {
                            percent: 1 / e.length,
                            substate: l(n)
                        }
                    }
                }))
            }

            function u(e) {
                return l(e.slice(1))
            }
        },
        598104: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                layouts: () => a,
                isSingleLayout: () => l,
                isMultipleLayout: () => u,
                isSupportedLayout: () => c,
                tryGuessingTheMostSuitableLayout: () => d
            });
            var r = n(110123),
                o = n(597922);
            const i = {
                s: {
                    title: "1 chart",
                    count: 1,
                    layoutType: "s",
                    sizer: (e, t) => {
                        if (0 !== t) throw new RangeError("invalid index");
                        return e
                    },
                    splitters: () => [],
                    resizeApplier: (e, t, n, r, o) => o,
                    syncSublayoutsBySplitter: (e, t) => t,
                    expression: ["h", 0]
                }
            };
            let s;
            s = {
                "2h": (0, o.createLayout)(r["2h"], "2h", "2-up horizontal"),
                "2v": (0, o.createLayout)(r["2v"], "2v", "2-up vertical"),
                "2-1": (0,
                    o.createLayout)(r["2-1"], "2-1", "2 at top and 1 at bottom"),
                "1-2": (0, o.createLayout)(r["1-2"], "1-2", "1 at top and 2 at bottom"),
                "3s": (0, o.createLayout)(r["3s"], "3s", "3-up stacked"),
                "3r": (0, o.createLayout)(r["3r"], "3r", "3-up stacked left"),
                "3h": (0, o.createLayout)(r["3h"], "3h", "3-up horizontal"),
                "3v": (0, o.createLayout)(r["3v"], "3v", "3-up vertical"),
                4: (0, o.createLayout)(r[4], "4", "4-up"),
                "4h": (0, o.createLayout)(r["4h"], "4h", "4-up horizontal"),
                "4v": (0, o.createLayout)(r["4v"], "4v", "4-up vertical"),
                "4s": (0, o.createLayout)(r["4s"], "4s", "4-up stacked"),
                "5h": (0, o.createLayout)(r["5h"], "5h", "5-up horizontal"),
                "6h": (0, o.createLayout)(r["6h"], "6h", "6-up horizontal"),
                "7h": (0, o.createLayout)(r["7h"], "7h", "7-up horizontal"),
                "8h": (0, o.createLayout)(r["8h"], "8h", "8-up horizontal"),
                "2-2": (0, o.createLayout)(r["2-2"], "2-2", "2 at top and 2 at bottom"),
                "2-3": (0, o.createLayout)(r["2-3"], "2-3", "2 at top and 3 at bottom"),
                "1-3": (0, o.createLayout)(r["1-3"], "1-3", "1 at top and 3 at bottom"),
                "1-4": (0, o.createLayout)(r["1-4"], "1-4", "1 at top and 4 at bottom"),
                "5s": (0, o.createLayout)(r["5s"], "5s", "5-up stacked"),
                6: (0, o.createLayout)(r[6], "6", "6-up"),
                "6c": (0, o.createLayout)(r["6c"], "6c", "6-up in two columns"),
                8: (0, o.createLayout)(r[8], "8", "8-up"),
                "8c": (0, o.createLayout)(r["8c"], "8c", "8-up in two columns")
            };
            const a = { ...i,
                ...s
            };

            function l(e) {
                return "s" === e
            }

            function u(e) {
                return !l(e)
            }

            function c(e) {
                return l(e) || s.hasOwnProperty(e)
            }

            function d(e) {
                const t = /(\d)-(\d)/.exec(e);
                let n = 1;
                for (n = 3 === (null == t ? void 0 : t.length) ? parseInt(t[1]) + parseInt(t[2]) : parseInt(e); n > 1;) {
                    const e = Object.keys(s).find((e => s[e].count === n));
                    if (e) return e;
                    n--
                }
                return "s"
            }
        },
        547e3: (e, t, n) => {
            "use strict";
            n.d(t, {
                canShowSpreadActions: () => o,
                globalKeypressMatches: () => i
            });
            n(495046), n(991826), n(583912);
            var r = n(516986);
            new RegExp("^" + r.types.QUANDL, "i");

            function o() {
                let e = !1;
                return e = "cme" !== window.TradingView.widgetCustomer && "bovespa" !== window.TradingView.widgetCustomer, e
            }

            function i(e) {
                if (e.ctrlKey) return !1;
                if (e.metaKey) return !1;
                if (!e.charCode) return !1;
                if (!e.which || e.which <= 32) return !1;
                const t = e.target;
                if (t && (/^(input|textarea)$/i.test(t.tagName) || "listbox" === t.getAttribute("role"))) return !1; {
                    const e = n.c[839694];
                    if (e && e.exports.isOpenedModals()) return !1
                }
                return !0
            }
        },
        522227: (e, t, n) => {
            "use strict";

            function r() {
                return Promise.all([n.e(76049), n.e(59267), n.e(39569), n.e(88230), n.e(18619), n.e(81910), n.e(86256), n.e(7624), n.e(59333), n.e(12275), n.e(33335), n.e(91901), n.e(78707), n.e(96972), n.e(83772), n.e(75398), n.e(71140), n.e(36037), n.e(6092), n.e(63737), n.e(54819), n.e(1428), n.e(1011), n.e(52701), n.e(68825), n.e(105), n.e(47507), n.e(59302), n.e(54063), n.e(82098), n.e(36812), n.e(95248), n.e(45639), n.e(89619), n.e(69273), n.e(288), n.e(27563), n.e(50500), n.e(37845), n.e(7723), n.e(59382), n.e(20894), n.e(52196), n.e(75784), n.e(21834), n.e(75514), n.e(26300), n.e(30979), n.e(29594), n.e(86584), n.e(90799), n.e(75925), n.e(50186), n.e(35883), n.e(58020), n.e(21754)]).then(n.bind(n, 837490))
            }
            n.d(t, {
                loadNewSymbolSearch: () => r
            })
        },
        948070: (e, t, n) => {
            "use strict";
            n.d(t, {
                ALERT_DIALOG_CREATE_INVOCATION_ID: () => a,
                alertEditorInvocationHandler: () => u
            });
            var r = n(650151),
                o = n(988411),
                i = n.n(o),
                s = n(494508);
            const a = -1;
            class l {
                constructor() {
                    this._state = new(i())(!1)
                }
                subscribe(e) {
                    this._state.subscribe(e)
                }
                unsubscribe(e) {
                    this._state.unsubscribe(e)
                }
                value() {
                    return this._state.value()
                }
                abort() {
                    this._state.setValue(!0)
                }
            }
            const u = new class {
                constructor() {
                    this._dialogInvocations = new(i())(new Map)
                }
                getDialogInvocations() {
                    return this._dialogInvocations
                }
                isAllowedToInvoke(e) {
                    return e.silent || !this._dialogInvocations.value().has(c(e))
                }
                lockInvocation(e) {
                    if (e.silent) return {
                        unlockInvocation: () => {}
                    };
                    const t = c(e),
                        n = new l,
                        r = new Map(this._dialogInvocations.value());
                    return r.set(t, n), this._dialogInvocations.setValue(r), {
                        abortSignal: n,
                        unlockInvocation: () => {
                            const e = new Map(this._dialogInvocations.value());
                            e.delete(t), this._dialogInvocations.setValue(e)
                        }
                    }
                }
            };

            function c(e) {
                return "create_alert" === (0, s.getAlertDialogType)(e) ? a : (0, r.ensureDefined)(e.alert).id
            }
        },
        304241: (e, t, n) => {
            "use strict";
            n.d(t, {
                alertsMaintenanceTracker: () => a
            });
            var r = n(988411),
                o = n.n(r),
                i = n(125226),
                s = n(359663);
            const a = new class {
                constructor() {
                    this._state = new(o())((0, i.isFeatureEnabled)("alerts-maintenance")), this._maintenanceFeatureState = new s.FeatureToggleWatchedValue("alerts-maintenance", this._state.value()), this._autoreloadWidgetsFeatureState = new s.FeatureToggleWatchedValue("alerts-maintenance-autoreload-widgets", !1), this._unsetMaintenanceTimeoutId = null, this._maintenanceFeatureState.subscribe((e => {
                        !e && this._autoreloadWidgetsFeatureState.value() && (this._unsetMaintenanceTimeoutId = setTimeout((() => this.sync()), function() {
                            const e = 3e4,
                                t = 18e5;
                            return Math.floor(Math.random() * (t - e) + e)
                        }()))
                    })), this._autoreloadWidgetsFeatureState.subscribe((e => {
                        e || this._clearMaintenanceUnsetTimeout()
                    }))
                }
                value() {
                    return this._state.value()
                }
                subscribe(e) {
                    this._state.subscribe(e)
                }
                unsubscribe(e) {
                    this._state.unsubscribe(e)
                }
                sync() {
                    this._clearMaintenanceUnsetTimeout(), this._state.setValue((0, i.isFeatureEnabled)("alerts-maintenance"))
                }
                _clearMaintenanceUnsetTimeout() {
                    this._unsetMaintenanceTimeoutId && (clearTimeout(this._unsetMaintenanceTimeoutId), this._unsetMaintenanceTimeoutId = null)
                }
            }
        },
        190096: (e, t, n) => {
            "use strict";
            n.d(t, {
                canPlaceAlertOnResolution: () => s
            });
            var r = n(568450),
                o = n(632446),
                i = n(833813);

            function s(e) {
                return !r.Interval.isSeconds(e) || (0, o.enabled)(i.ProductFeatures.ALERTS_ON_SECONDS)
            }
        },
        492534: (e, t, n) => {
            "use strict";

            function r(e) {
                return i().then((t => t.hasUserAccessToDataSource(e)))
            }

            function o(e) {
                return i().then((t => t.filterAccessibleDataSources(e)))
            }
            n.d(t, {
                hasUserAccessToDataSource: () => r,
                filterAccessibleDataSources: () => o
            });
            const i = () => Promise.all([n.e(68716), n.e(57901), n.e(45661), n.e(98144), n.e(80455), n.e(14282), n.e(16665), n.e(47342), n.e(99670), n.e(98850), n.e(80653), n.e(8837), n.e(88777), n.e(34063), n.e(62726), n.e(83441)]).then(n.bind(n, 323897))
        },
        240158: (e, t, n) => {
            "use strict";
            n.d(t, {
                getPriceAlertsDispatcher: () => o,
                getPriceAlertsDispatcherIfExists: () => i,
                setPriceAlertsDispatcherIfNotExists: () => s
            });
            n(659863);
            let r = null;

            function o() {
                return new Promise((e => {
                    null === r ? Promise.all([n.e(57901), n.e(58194), n.e(1327), n.e(25977), n.e(68647), n.e(98850), n.e(8837), n.e(72685), n.e(96796), n.e(21350), n.e(48158)]).then(n.bind(n, 396796)).then((t => {
                        null === r && (r = new t.AlertsDispatcher), e(r)
                    })) : e(r)
                }))
            }

            function i() {
                return r
            }

            function s(e) {
                return null === r && (r = e, !0)
            }
        },
        424122: (e, t, n) => {
            "use strict";
            n.d(t, {
                canPlaceAlertOnResolution: () => o.canPlaceAlertOnResolution,
                isAlertResolutionEqual: () => i
            });
            var r = n(568450),
                o = n(190096);

            function i(e, t) {
                return e.get("crossInterval") || r.Interval.isEqual(e.get("resolution"), t)
            }
        },
        152198: (e, t, n) => {
            "use strict";
            n.d(t, {
                getMinimalProPlanForFeature: () => c,
                getProPlanDetailsForUser: () => d
            });
            var r = n(960254),
                o = n(632446),
                i = n(833813),
                s = n(919490),
                a = n(890740),
                l = n(897649);

            function u(e) {
                return window.pro ? e === r.ProPlans.Free ? -1 : window.pro.getProduct((0, s.getProductForTrial)(e)).upgrade_weight : 0
            }

            function c(e) {
                const t = function(e) {
                    return Object.values(r.ProPlans).filter((t => {
                        const n = (0, o.getConfig)(e, (0, s.getProductForTrial)(t));
                        return n && !((0, s.isTrialProduct)(t) && n[i.ProductFeatures.DISABLE_ON_TRIAL])
                    }))
                }(e).filter((e => !(0, s.isTrialProduct)(e)));
                return function(e) {
                    return e.sort(((e, t) => u(e) - u(t)))
                }(t)[0] || null
            }
            async function d() {
                const e = await (0, a.fetch)("/pro-plans/profile/"),
                    t = await e.json();
                if (e.ok) return t;
                if (403 === e.status) {
                    const n = t;
                    throw new l.ApiError(n.detail, e.status, n.code)
                }
                throw new Error(`Unable to handle unexpected response: ${String(e.text())}`)
            }
        },
        233388: (e, t, n) => {
            "use strict";
            n.d(t, {
                pushBackListener: () => l,
                disable: () => u,
                enable: () => c
            });
            var r = n(777491);
            const o = [];
            let i = null;

            function s(e) {
                for (let t = 0; t < o.length; t++)
                    if (o[t].name === e) return t;
                return -1
            }

            function a(e) {
                if (!i)
                    for (let t = o.length - 1; t >= 0 && !0 !== o[t].func(e); t--);
            }

            function l(e, t) {
                const n = {
                        name: e,
                        func: t
                    },
                    r = s(n.name);
                r > -1 && o.splice(r, 1), o.unshift(n)
            }

            function u() {
                return i ? null : (i = (0, r.randomHashN)(4), i)
            }

            function c(e) {
                if (e !== i) throw Error("Lock id is outdated");
                i = null
            }
            window.addEventListener("keypress", a, !1)
        },
        628763: (e, t, n) => {
            "use strict";
            n.d(t, {
                Worker: () => r
            });
            class r extends Worker {
                constructor(e, t) {
                    super(function(e) {
                        const t = new URL(e),
                            r = new Blob(["self.WEBPACK_PUBLIC_PATH=", JSON.stringify(new URL(n.p, location.href).href), ";\n", "self.locale=", JSON.stringify(n.g.locale), ";\n", window.language ? `self.language=${JSON.stringify(window.language)};\n` : "", "importScripts(", JSON.stringify(t.href), ");"], {
                                type: "application/javascript"
                            });
                        return URL.createObjectURL(r)
                    }(e), t)
                }
            }
        },
        201457: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><g fill="none" fill-rule="evenodd" stroke="currentColor"><path d="M13.111 18.5H10.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-8.389z"/><path d="M18.5 20v1.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H8"/></g></svg>'
        },
        110123: e => {
            "use strict";
            e.exports = JSON.parse('{"4":["v",["h",0,2],["h",1,3]],"6":["v",["h",0,2,4],["h",1,3,5]],"8":["v",["h",0,2,4,6],["h",1,3,5,7]],"2h":["h",0,1],"2v":["v",0,1],"2-1":["v",["h",0,2],1],"3s":["h",0,["v",1,2]],"3h":["h",0,1,2],"3v":["v",0,1,2],"1-2":["v",0,["h",1,2]],"3r":["h",["v",0,1],2],"4h":["h",0,1,2,3],"4v":["v",0,1,2,3],"4s":["h",0,["v",1,2,3]],"5h":["h",0,1,2,3,4],"6h":["h",0,1,2,3,4,5],"7h":["h",0,1,2,3,4,5,6],"8h":["h",0,1,2,3,4,5,6,7],"1-3":["v",0,["h",1,2,3]],"2-2":["v",["h",0,1],["v",2,3]],"2-3":["v",["h",0,1],["h",2,3,4]],"1-4":["v",0,["h",1,2,3,4]],"5s":["h",0,["v",1,2,3,4]],"6c":["v",["h",0,1],["h",2,3],["h",4,5]],"8c":["v",["h",0,1],["h",2,3],["h",4,5],["h",6,7]],"s":0}')
        }
    }
]);
"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [96796], {
        186288: (e, t, r) => {
            function n(e) {
                return e.includes(":") ? e.split(":") : ["", e]
            }
            r.d(t, {
                splitSymbolName: () => n
            })
        },
        650627: (e, t, r) => {
            r.d(t, {
                AlertConditionTokenMapType: () => n,
                getAlertConditionTokenMap: () => l
            });
            r(984919);
            var n, o = r(777754),
                i = r(650151);
            ! function(e) {
                e[e.MainSeries = 0] = "MainSeries", e[e.Study = 1] = "Study", e[e.PineScript = 2] = "PineScript", e[e.Strategy = 3] = "Strategy", e[e.PineScriptAlertFunction = 4] = "PineScriptAlertFunction"
            }(n || (n = {}));
            const a = o.t(null, void 0, r(181138)),
                s = e => o.t(null, {
                    plural: "in {count} bars",
                    count: e
                }, r(516722)).format({
                    count: e.toString()
                });

            function l(e) {
                const t = (0, i.ensureDefined)(e.get("extra")),
                    r = t.getAlertSeries(),
                    o = t.conditionData();
                if ("alerts" === o.type) return {
                    type: n.PineScriptAlertFunction,
                    scriptTitle: r.title({
                        short: !0
                    }),
                    isStrategy: "StudyStrategy" === r.type()
                };
                if ("StudyStrategy" === r.type()) return {
                    type: n.Strategy,
                    strategyTitle: r.title()
                };
                if (["pine_script", "pine_alertcondition_plot"].includes(o.type)) return {
                    type: n.PineScript,
                    conditionTitle: o.title,
                    conditionMessage: o.message
                };
                const l = e.getFormatter();

                function c(e) {
                    const t = e.getPlots();
                    return e.title({
                        formatter: l,
                        withPlotTitle: t && t.length > 1
                    })
                }
                let u = "";
                switch (o.type) {
                    case "moving":
                        const e = t.movingValue(),
                            r = t.movingPeriod();
                        u = o.percents ? `${e}% ${s(r)}` : `${l?l.format(e):e} ${s(r)}`;
                        break;
                    case "comparison":
                        if (o.isChannel) {
                            const e = c(t.getUpperBand()),
                                r = c(t.getLowerBand());
                            u = `(${a.format({alertChannelUpperBoundaryTitle:e,alertChannelLowerBoundaryTitle:r})})`
                        } else u = c(t.getBand())
                }
                const d = t.getMainSeries(),
                    f = d ? d.title({
                        withInterval: !e.get("crossInterval")
                    }) : e.shortSymbol();
                return {
                    conditionTitle: o.descriptionTitle || o.title,
                    conditionOptions: u,
                    ..."MainSeries" === r.type() ? {
                        type: n.MainSeries,
                        alertSeries: f
                    } : {
                        type: n.Study,
                        alertSeries: r.title(),
                        mainSeries: f
                    }
                }
            }
        },
        494111: (e, t, r) => {
            r.d(t, {
                getAlertType: () => i
            });
            const n = new Set(["study_Overlay", "study_Compare", "StudyStrategy"]);

            function o({
                type: e
            }) {
                return !n.has(e) && e.toLowerCase().startsWith("study")
            }

            function i(e) {
                if (e.isDrawing()) return "drawing";
                const t = e.get("extra"),
                    r = null == t ? void 0 : t.alertSeries();
                return r && t ? "isTVScriptStrategy" in r && r.isTVScriptStrategy ? "strategy" : t.bandsArray("object").some(o) ? "indicator" : "price" : "price"
            }
        },
        93389: (e, t, r) => {
            function n(e) {
                return !e.isDrawing()
            }
            r.d(t, {
                isAlertCloneable: () => n
            })
        },
        961515: (e, t, r) => {
            var n = r(168647),
                o = r(298297),
                i = r(272001).getLogger("Alerts.Price.Abstract"),
                a = r(991826).getTranslatedResolution,
                s = r(696828),
                l = r(768038),
                c = n.Model.extend({
                    constructor: function(e, t) {
                        e = this._prepareToSet(e, !0), n.Model.call(this, e, t)
                    },
                    _prepareToSet: function(e, t) {
                        var r, n, o;
                        if (e)
                            for (r in e) e.hasOwnProperty(r) && (n = e[r], "function" == typeof this[o = "_prepareToSet_" + r] && (e[r] = this[o](n, e, t)));
                        return e
                    },
                    destroy: function() {
                        this.stopListening(), this.trigger("destroy", this)
                    },
                    save: function() {
                        i.logError("[Alerts] Use disaptcher to save")
                    },
                    shortSymbol: function(e) {
                        return s ? s.shortName(e || this.get("symbol") || "") : (i.logWarn("[Alerts] can't get short symbol"), e)
                    },
                    resolutionReadable: function(e) {
                        return (e = e || this.get("resolution")) ? a(e) : ""
                    },
                    title: function(e) {
                        var t;
                        return t = e ? this.get("symbol") : this.shortSymbol(), this.get("crossInterval") || (t = l.isRtl() ? t + " " + l.forceRTLStr(" ," + this.resolutionReadable()) : t + ", " + this.resolutionReadable()), t
                    },
                    _formatDate: function(e) {
                        return o(e || new Date).format("MMM D LTS")
                    }
                });
            e.exports = c
        },
        262690: (e, t, r) => {
            var n = r(961515).extend({
                _prepareToSet_fireTime: function(e) {
                    return new Date(1e3 * e)
                },
                _prepareToSet_barTime: function(e) {
                    return new Date(1e3 * e)
                },
                _prepareToSet_alertId: function(e) {
                    return parseInt(e)
                },
                fireTimeReadable: function() {
                    return this._formatDate(this.get("fireTime"))
                },
                fireTimeUnix: function() {
                    return Math.round(this.get("fireTime").getTime() / 1e3)
                }
            });
            e.exports = n
        },
        981107: (e, t, r) => {
            var n = r(725977),
                o = r(823127),
                i = r(961515),
                a = r(494650).AlertExtra,
                s = r(333429).FormattersSerializer,
                l = r(186881).AlertFrequencyController,
                c = r(991826).getServerInterval,
                u = r(340652).ensureDurationInSeconds,
                d = r(650627).getAlertConditionTokenMap,
                f = r(459263).getAlertDefaultDescription,
                p = r(698451).getAlertDefaultName,
                h = r(494111).getAlertType,
                g = ["crossInterval", "autoDeactivation", "description", "sendEmail", "expired", "extra", "showPopup", "resolution", "script", "scriptDeps", "sendSms", "sendPush", "playSound", "soundDuration", "soundFile", "symbol", "noExpiration", "symbolInternal", "webhookUrl", "name", "alertType"],
                y = g.concat(["id"]),
                m = i.extend({
                    constructor: function(e, t) {
                        var r = {};
                        ["autoDeactivation", "frequency", "extra", "crossInterval", "alertType"].forEach((function(t) {
                            e.hasOwnProperty(t) && (r[t] = e[t], delete e[t])
                        })), n.isEmpty(r) || (this.__delayedInitAttrs = r), e.version = e.version || a.VERSION, i.call(this, e, t), this.frequencyController = new l(this)
                    },
                    initialize: function() {
                        var e = this;

                        function t(t) {
                            e.set("crossInterval", !!t)
                        }
                        this.on("change:extra", (function(e, r, n) {
                            r && (r.crossInterval.unsubscribe(t), r.crossInterval.subscribe(t), e.set("crossInterval", r.crossInterval.value()), e.syncAlertType())
                        })).on("change:crossInterval", (function(e, t, r) {
                            var n = e.get("extra");
                            t ? e.set("resolution", "1") : n && n.mainSeries() && e.set("resolution", n.mainSeries().interval)
                        })).on("destroy", (function() {
                            TVSettings.remove(e.TVSettingsPropertiesKey(e.id))
                        })), this.__delayedInitAttrs && (this.set(this.__delayedInitAttrs), delete this.__delayedInitAttrs)
                    },
                    set: function(e, t, r) {
                        var n;
                        return null == e ? this : (r = r || {}).noPrepare ? i.prototype.set.call(this, e, t, r) : ("object" == typeof e ? (n = e, r = t) : (n = {})[e] = t, n = this._prepareToSet(n), i.prototype.set.call(this, n, r))
                    },
                    _prepareToSet_soundDuration: function(e) {
                        e = parseInt(e);
                        return isNaN(e) && (e = 0), u(e)
                    },
                    _prepareToSet_expired: function(e) {
                        return e instanceof Date ? e : new Date(1e3 * e)
                    },
                    _prepareToSet_extra: function(e) {
                        var t = this.get("extra"),
                            r = e && !(e instanceof a);
                        return t && e ? e = t.update(e) : r ? (e = new a(e), this.set("scriptDeps", e.getDependencies())) : e || (e = null), e
                    },
                    _prepareToSet_symbolInternal: function(e) {
                        if (e) return e
                    },
                    _prepareToSet_alertType: function(e) {
                        return "undefined" === e ? h(this) : e
                    },
                    isPrice: function() {
                        return null !== (this.get("extra") ? this.get("extra").price() : null)
                    },
                    isDrawing: function() {
                        return !(!this.get("extra") || !this.get("extra").drawing())
                    },
                    isMoving: function() {
                        return this.get("extra") && "moving" === (this.get("extra").conditionData() || {}).type
                    },
                    isOHLC: function() {
                        var e = this.get("extra");
                        if (e && e.alertSeries()) return "MainSeries" === e.alertSeries().type
                    },
                    isRangeBasedStyle: function() {
                        var e = this.get("extra"),
                            t = e && e.getMainSeries();
                        return !(!t || "MainSeries" !== t.type() || !t.isRangeBasedStyle())
                    },
                    isComplexSymbol: function() {
                        var e = this.get("symbolInternal");
                        return e !== this.get("symbol") && e
                    },
                    isPine: function() {
                        var e = this.get("extra"),
                            t = e && e.alertSeries();
                        return t && t.alerts
                    },
                    expiredUnix: function() {
                        return Math.round(this.get("expired").getTime() / 1e3)
                    },
                    defaultDescription: function() {
                        var e = this.get("extra"),
                            t = e && e.alertSeries();
                        return e && ["strategy_and_alerts", "strategy"].includes(e.conditionId()) && t && "string" == typeof t.defaultStrategyAlertMessage ? t.defaultStrategyAlertMessage : f(d(this))
                    },
                    defaultName: function() {
                        return p(d(this))
                    },
                    setDefaultDescription: function() {
                        this.set("description", this.defaultDescription())
                    },
                    state: function() {
                        return this.toJSON()
                    },
                    toJSON: function() {
                        var e, t, r = {};
                        for (e in this.attributes) this.attributes.hasOwnProperty(e) && (t = this.attributes[e], r[e] = t && "function" == typeof t.toJSON ? t.toJSON() : t);
                        return r.expired && (r.expired = this.expiredUnix()), r
                    },
                    prepareToSend: function() {
                        this.syncAlertType(), this.syncScriptDeps();
                        for (var e, t, r = this.toJSON(), n = {}, o = y.length - 1; o >= 0; o--) void 0 !== (t = r[e = y[o]]) && (n[e] = t), "resolution" === e && (n[e] = c(t));
                        return n.playSound || (delete n.soundDuration, delete n.soundFile), n.name || delete n.name, n.extra && (n.extra = JSON.stringify(n.extra)), n
                    },
                    getLocalClone: function() {
                        var e = this.toJSON(),
                            t = g.reduce((function(t, r) {
                                return e.hasOwnProperty(r) && (t[r] = e[r]), t
                            }), {});
                        return new m(t)
                    },
                    saveState: function() {
                        this._oldState = this.state()
                    },
                    restoreState: function(e, t, r) {
                        !(e = e || this._oldState || {}).extra || e.extra instanceof a || (e.extra = new a(e.extra), e.scriptDeps = e.extra.getDependencies()), this.set(e, {
                            silent: r
                        }), t || delete this._oldState
                    },
                    getSavedState: function() {
                        var e;
                        return this._oldState && (e = o.extend({}, this._oldState)).extra && (e.extra = new a(e.extra), e.scriptDeps = e.extra.getDependencies()), e
                    },
                    createTimeFormatted: function() {
                        var e = this.get("createTime");
                        return e ? this._formatDate(1e3 * e) : null
                    },
                    fireTimeFormatted: function() {
                        var e = this.get("fireTime");
                        return e ? this._formatDate(1e3 * e) : null
                    },
                    TVSettingsPropertiesKey: function() {
                        return e = this.id, "chartproperties.alertsProperties." + parseInt(e);
                        var e
                    },
                    getFormatter: function() {
                        var e = this.get("extra");
                        if (e) {
                            var t = e.alertSeries();
                            if (t.formatter) return s.deserialize(t.formatter)
                        }
                        return null
                    },
                    syncAlertType: function() {
                        this.set("alertType", h(this))
                    },
                    syncScriptDeps: function() {
                        var e = this.get("extra").getDependencies();
                        this.set("scriptDeps", e)
                    }
                });
            e.exports.Alert = m
        },
        459980: (e, t, r) => {
            r.d(t, {
                patchLegacySymbol: () => f,
                patchLegacySymbolForAlert: () => d
            });
            var n = r(7628),
                o = r(186288),
                i = r(125226);
            const a = {
                BYBIT: e => s(e, r.e(73267).then(r.t.bind(r, 318385, 19))),
                KRAKEN: async e => ((0, i.isFeatureEnabled)("alerts-dirty-migration-kraken") && (e = await s(e, r.e(83401).then(r.t.bind(r, 803587, 19)))), (0,
                    i.isFeatureEnabled)("alerts-dirty-migration-kraken-patch-2") && (e = await s(e, r.e(36585).then(r.t.bind(r, 558152, 19)))), e)
            };
            async function s(e, t) {
                return (await t).default[e] || e
            }
            async function l(e, t) {
                for (const r of t) {
                    const t = e[r];
                    "string" == typeof t && (e[r] = (0, n.isEncodedExtendedSymbol)(t) ? await u(t) : await c(t))
                }
            }
            async function c(e) {
                const [t] = (0, o.splitSymbolName)(e), r = await
                function(e) {
                    return a[e] || (e => Promise.resolve(e))
                }(t);
                return r(e)
            }
            async function u(e) {
                const t = (0, n.decodeExtendedSymbol)(e);
                return "string" == typeof t.symbol ? t.symbol = await c(t.symbol) : t.symbol.symbol = await c(t.symbol.symbol), (0, n.encodeExtendedSymbolOrGetSimpleSymbolString)(t)
            }
            async function d(e) {
                await l(e, ["symbol", "symbolInternal"]);
                const t = JSON.parse(e.extra),
                    r = t.condition;
                if ("mainSeries" in r) {
                    const e = r.mainSeries.id,
                        n = t.statesForAlert[e];
                    n && await l(n, ["actualSymbol", "proSymbol", "symbolString"])
                }
                return e.extra = JSON.stringify(t), e
            }
            async function f(e) {
                return await l(e, ["symbol"]), e
            }(0, i.isFeatureEnabled)("alerts-dirty-migration-binance") && (a.BINANCE = e => s(e, r.e(94393).then(r.t.bind(r, 497709, 19)))), (0, i.isFeatureEnabled)("alerts-dirty-migration-bitmex") && (a.BITMEX = e => s(e, r.e(2553).then(r.t.bind(r, 306157, 19)))), (0, i.isFeatureEnabled)("alerts-dirty-migration-dydx") && (a.DYDX = e => s(e, r.e(12716).then(r.t.bind(r, 382478, 19)))), (0, i.isFeatureEnabled)("alerts-dirty-migration-bitfinex") && (a.BITFINEX = e => s(e, r.e(35157).then(r.t.bind(r, 900435, 19)))), (0, i.isFeatureEnabled)("alerts-dirty-migration-phemex") && (a.PHEMEX = e => s(e, r.e(41741).then(r.t.bind(r, 87779, 19))))
        },
        186881: (e, t, r) => {
            r.d(t, {
                AlertFrequencyController: () => i
            });
            var n = r(720444);
            const o = (0, r(272001).getLogger)("Alerts.Price.FrequencyController");
            class i {
                constructor(e) {
                    this._alert = e, e.on("change:autoDeactivation", ((e, t) => {
                        const r = e.get("frequency");
                        if (this._isFireRateValid({
                                frequency: r,
                                autoDeactivation: t
                            })) return;
                        const n = this._getValidFireRate({
                            autoDeactivation: t
                        });
                        n ? e.set("frequency", n.frequency) : (o.logError(`Set invalid autoDeactivation: ${t}. Available: ${JSON.stringify(this.getAvailable())}`), this._setAnyValidFireRate())
                    })), e.on("change:frequency", ((e, t) => {
                        this._putFrequencyToExtra();
                        const r = e.get("autoDeactivation");
                        if (this._isFireRateValid({
                                frequency: t,
                                autoDeactivation: r
                            })) return;
                        const n = this._getValidFireRate({
                            frequency: t
                        });
                        n ? e.set("autoDeactivation", n.autoDeactivation) : (o.logError(`Set invalid frequency: ${t}. Available: ${JSON.stringify(this.getAvailable())}`), this._setAnyValidFireRate())
                    }))
                }
                getAvailable() {
                    const e = this._alert.get("extra");
                    return (() => {
                        const t = null == e ? void 0 : e.alertSeries();
                        return t && "isTVScriptStrategy" in t && t.isTVScriptStrategy
                    })() || "alerts" === (null == e ? void 0 : e.conditionId()) ? [{
                        autoDeactivation: !1,
                        frequency: "60"
                    }] : (() => {
                        var t;
                        return Boolean(this._alert.isDrawing() && "LineToolVertLine" === (null === (t = null == e ? void 0 : e.drawing()) || void 0 === t ? void 0 : t.type))
                    })() ? [{
                        autoDeactivation: !0,
                        frequency: "on_first_fire"
                    }] : (() => this._alert.get("crossInterval"))() ? [{
                        autoDeactivation: !0,
                        frequency: "on_first_fire"
                    }, {
                        autoDeactivation: !1,
                        frequency: "on_first_fire"
                    }] : (() => {
                        const t = null == e ? void 0 : e.alertSeries(),
                            r = null == e ? void 0 : e.mainSeries();
                        return void 0 !== t && "style" in t && n.hasProjection(t.style) || void 0 !== r && n.hasProjection(r.style)
                    })() ? [{
                        autoDeactivation: !0,
                        frequency: "on_bar_close"
                    }, {
                        autoDeactivation: !1,
                        frequency: "on_bar_close"
                    }] : [{
                        autoDeactivation: !0,
                        frequency: "once"
                    }, {
                        autoDeactivation: !1,
                        frequency: "on_first_fire"
                    }, {
                        autoDeactivation: !1,
                        frequency: "on_bar_close"
                    }, {
                        autoDeactivation: !1,
                        frequency: "60"
                    }]
                }
                switchFrequencies() {
                    const e = this._alert,
                        t = e.get("frequency"),
                        r = e.get("autoDeactivation");
                    if (!0 === r) {
                        const t = this._getValidFireRate({
                            autoDeactivation: !0
                        });
                        if (t) return void e.set({
                            autoDeactivation: t.autoDeactivation,
                            frequency: t.frequency
                        })
                    }
                    if (!1 === r && "on_first_fire" === t) {
                        const t = "60",
                            r = this._getValidFireRate({
                                frequency: t
                            });
                        if (r) return void e.set({
                            autoDeactivation: r.autoDeactivation,
                            frequency: t
                        })
                    }
                    if (!1 === r) {
                        const t = this._getValidFireRate({
                            autoDeactivation: !1
                        });
                        if (t) return void e.set({
                            autoDeactivation: t.autoDeactivation,
                            frequency: t.frequency
                        })
                    }
                    this._isFireRateValid({
                        frequency: t,
                        autoDeactivation: r
                    }) || this._setAnyValidFireRate()
                }
                _putFrequencyToExtra() {
                    const e = this._alert.get("extra");
                    e && e.frequency(this._alert.get("frequency"))
                }
                _isFireRateValid(e) {
                    return this.getAvailable().some((t => t.frequency === e.frequency && t.autoDeactivation === e.autoDeactivation))
                }
                _getValidFireRate(e) {
                    const [t, r] = Object.entries(e)[0], n = this.getAvailable().find((e => e[t] === r));
                    return void 0 === n ? null : n
                }
                _setAnyValidFireRate() {
                    const e = this.getAvailable()[0];
                    this._alert.set({
                        frequency: e.frequency,
                        autoDeactivation: e.autoDeactivation
                    }), this._putFrequencyToExtra()
                }
            }
        },
        396796: (e, t, r) => {
            r.r(t), r.d(t, {
                AlertsDispatcher: () => j,
                prepareAlertsModels: () => Q
            });
            var n = r(777754),
                o = r(821350),
                i = r(869862),
                a = r(262690),
                s = r.n(a),
                l = r(223292),
                c = r(981107),
                u = r(293689),
                d = r.n(u),
                f = r(933813),
                p = r(779665),
                h = r(345848),
                g = r(632446),
                y = r(833813),
                m = r(272001),
                v = r(405797),
                _ = r(187215),
                S = r(175203),
                A = (r(659863), r(508846)),
                b = r(960254),
                T = r(527538);
            const x = {
                max_alerts_count_exceeded: "alerts",
                max_primitive_alerts_count_exceeded: "primitiveAlerts",
                max_complex_alerts_count_exceeded: "complexAlerts"
            };

            function w(e = "max_alerts_count_exceeded") {
                const t = window.user.pro_plan;
                (0, A.createGoProDialog)({
                    feature: x[e],
                    actions: t && [b.ProPlans.ProPremium, b.ProPlans.ProPremiumTrial].includes(t) ? [{
                        text: n.t(null, void 0, r(875139)),
                        action: T.PredefinedAction.Close
                    }] : void 0
                })
            }
            var D = r(727350);
            var E = r(494508);

            function P() {
                (0, E.showAbortExplainingDialog)(i.AlertEditorAbortReason.AlertsMaintenance)
            }
            var C = r(218333),
                q = r(779923),
                I = r(844106),
                k = r(424122),
                M = r(226722),
                R = r(848002),
                F = r(869403),
                N = r.n(F),
                L = r(176975),
                O = r(93389),
                V = r(304241),
                W = r(948070),
                B = r(340652),
                J = r(196362),
                G = r(459980),
                $ = r(168647),
                H = r(823127);
            const U = "cancelled: new alert already generating",
                X = (0, m.getLogger)("Alerts.Price.Dispatcher");

            function j() {
                this._loading = {}, this._alertVersioning = new l.AlertVersioning, this._lastGenIds = {}, this._onPushStreamMessage = new(N()), this._onPushStreamStatusChanged = e => {
                        e === L.ConnectionStatus.Open && this._onPushStreamMessage.fire({
                            source: "host",
                            data: {
                                m: "pushstream_ready"
                            }
                        })
                    }, this._onMessage = this._onMessage.bind(this),
                    this.alerts = new($.Collection.extend({
                        model: c.Alert
                    })), this.events = new($.Collection.extend({
                        comparator: function(e, t) {
                            var r = e.get("fireTime"),
                                n = t.get("fireTime");
                            return r && n ? n - r : r ? n ? void 0 : 1 : -1
                        },
                        model: s()
                    })), this._attachHandlers()
            }

            function K(e) {
                e.forEach((e => e.set("selected", !1)))
            }

            function Y(e, t) {
                e.forEach((e => {
                    e !== t && e.set("selected", !1)
                }))
            }

            function z(e) {
                const t = new Date;
                e.get("expired") < t && (t.setMonth(t.getMonth() + 1), e.set("expired", t))
            }

            function Q(e, t) {
                return Promise.all(e.map((function(e) {
                    const n = e.id,
                        o = (0, _.server2clientParams)(e);
                    return t(o).catch(r("Migration failed", n)).then((e => e && new c.Alert(e))).catch(r("Alert creation failed", n))
                }))).then((e => e.filter((e => null !== e))));

                function r(e, t) {
                    return r => (X.logError(`${e}. Alert ID: ${t}. Error: ${r}`), null)
                }
            }

            function Z(e, t) {
                e.script = t.IL, t.inputs && (e.inputs = t.inputs), t.genAlertData && (e.gen_alert_data = t.genAlertData)
            }

            function ee(e, ...t) {
                "function" == typeof e && e.apply(this, t)
            }
            j.checkProPermissions = function(e) {
                    return e.get("noExpiration") && !(0, g.enabled)(y.ProductFeatures.ALERTS_NO_EXPIRATION) ? ((0, D.showGoProInfExpDialog)(), !1) : "string" != typeof e.get("webhookUrl") || (0, g.enabled)(y.ProductFeatures.ALERTS_WEBHOOK) ? !!(0, k.canPlaceAlertOnResolution)(e.get("resolution")) || ((0, I.showGoProAlertsOnSecondsDialog)(), !1) : ((0, R.showGoProAlertsWebhookDialog)(), !1)
                }, j.getAnalyticsHeaders = function(e, t) {
                    return {
                        "X-Analytics-Price-Alert-Condition": String(e),
                        "X-Analytics-Price-Alert-Action-Source": String(t)
                    }
                }, j.prototype._onLoginStateChange = function() {
                    is_authenticated ? this._refreshPushStream() : (this.alerts.reset(), this.events.reset(), this._alertVersioning.cancelAllPossibleExtraUpdates()), this._fullListWasRequested = !1
                }, j.prototype._attachHandlers = function() {
                    var e = this;

                    function t(t) {
                        var r = e.chartWidget(),
                            n = r && r.hasModel() ? r.model() : null;
                        if (n) {
                            var o = n.selection().dataSources().some((function(e) {
                                return e.hasAlert.value() && e.alertId() === t.id
                            }));
                            t.set("selected", o)
                        }
                    }
                    loginStateChange.subscribe(this, this._onLoginStateChange.bind(this)), this._onLoginStateChange(!0), e.alerts.on("add", (r => {
                        t(r),
                            function(t) {
                                if (t.isDrawing() && e._chartWidgetCollection) {
                                    var r = t.get("extra").drawing();
                                    e._chartWidgetCollection.getAll().forEach((function(e) {
                                        e.applyAlertIdByExternalSource(r.id, t.id)
                                    }))
                                }
                            }(r)
                    })).on("change:selected", ((t, r, n) => {
                        if (r) {
                            var o = e.alerts;
                            K(e.events), Y(o, t)
                        }
                    })).on("change:id", t).on("destroy", (t => {
                        t.isNew() || e.events.where({
                            alertId: t.id
                        }).forEach((function(e) {
                            e.destroy()
                        }))
                    })), e.events.on("change:selected", ((t, r, n) => {
                        var o = e.events.models;
                        r && (K(e.alerts), Y(o, t))
                    })), e.alerts.on("change:id", (t => {
                        let r = !1;
                        for (const n of e.alerts.models) n.id === t.id && (r ? X.logWarn(`Two alerts share the same id ${t.id}, which may lead to undefined behaviour`) : r = !0)
                    })), M.TVXWindowEvents.on("alertevents-deleted", (e => {
                        "" === e ? this.events.reset() : this.events.remove(JSON.parse(e))
                    }))
                }, j.prototype._refreshPushStream = function() {
                    p.pushStreamMultiplexer.off("alert", this._onMessage), p.pushStreamMultiplexer.offStatus(this._onPushStreamStatusChanged), is_authenticated && (p.pushStreamMultiplexer.on("alert", this._onMessage),
                        p.pushStreamMultiplexer.onPrivateStatus(this._onPushStreamStatusChanged))
                }, j.prototype._onMessage = function(e) {
                    var t, r, n, o, i, a = this;
                    if (e) switch (X.logNormal(e), r = JSON.parse(e), this._onPushStreamMessage.fire({
                        source: "alert",
                        data: r
                    }), n = r.m, t = "new_alerts" === n ? r.p.alerts.map(_.server2clientParams) : (0, _.server2clientParams)(r.p), n) {
                        case "alert_running":
                            a._alertVersioning.cancelPossibleExtraUpdate(t.id), a._alertVersioning.migrate(t).then(G.patchLegacySymbolForAlert).then((function(e) {
                                (o = a.alerts.get(e.id)) ? o.set(e): a.alerts.add(e, {
                                    at: 0
                                })
                            }));
                            break;
                        case "new_alerts":
                            for (const e of t) a.alerts.add(e);
                            break;
                        case "alert_stopped":
                            if (o = a.alerts.get(t.id)) {
                                var l = {
                                    active: !1,
                                    stopReason: t.stopReason,
                                    error: t.error
                                };
                                o.set(l)
                            }
                            break;
                        case "alert_deleted":
                            if (a._alertVersioning.cancelPossibleExtraUpdate(t.id), o = a.alerts.get(t.id)) {
                                const e = a.chartWidget();
                                if (o.isDrawing() && e) {
                                    var c = o.get("extra").drawing();
                                    e.deleteAlertByExternalSource(c.id, o.id)
                                }
                                o.destroy()
                            }
                            break;
                        case "event":
                            (0, G.patchLegacySymbol)({ ...t
                            }).then((e => {
                                i = new(s())({ ...e
                                }), a.events.add(i), i.trigger("fired", i), i.trigger("fired:online", i);
                                const r = a.alerts.get(t.alertId);
                                void 0 !== r && (r.set({
                                    fireTime: t.fireTime
                                }), r.trigger("fired", r))
                            }))
                    }
                }, j.prototype.cloneAlert = function(e, t = {}) {
                    if (!(0, O.isAlertCloneable)(e)) return "function" == typeof t.error && t.error("Cannot clone alert"), void("function" == typeof t.complete && t.complete());
                    const r = e.getLocalClone();
                    z(r), this.alerts.add(r), this.createAlert(r, { ...t,
                        eventName: "clone"
                    })
                }, j.prototype.detachAlert = function(e) {
                    var t = this.alerts.get(e);
                    t && t.destroy()
                }, j.prototype.createLocalAlert = function(e, t) {
                    var r;
                    return t && function(e) {
                        if (!e) throw new Error("Can't create alert. 'params' is required");
                        for (var t = ["symbol", "resolution", "expired", "autoDeactivation", "sendEmail", "sendSms", "showPopup", "playSound", "description", "script"], r = [], n = t.length - 1; n >= 0; n--) {
                            var o = t[n];
                            o in e || r.push(o)
                        }
                        r.length && X.logError("[Alerts] Can't create alert. " + r.join(" ,") + (1 === r.length ? " is" : " are") + " required")
                    }(e), r = new c.Alert(e), this.alerts.add(r), r
                }, j.prototype.createAlert = function(e, t = {}) {
                    const r = this;

                    function n(e, r) {
                        "function" == typeof t.complete && t.complete(), "function" == typeof t.error && t.error(e, r)
                    }
                    if (e instanceof c.Alert) {
                        if (j.checkProPermissions(e)) {
                            var o = Date.now(),
                                i = e.prepareToSend();
                            return r._generateScriptWithCancellation(e).then((function(n) {
                                return Z(i, n), r.sendRequest({
                                    headers: j.getAnalyticsHeaders(e.get("extra").conditionId(), t.actionSource),
                                    method: "create_alert",
                                    params: i,
                                    success: function(n) {
                                        n = (0, _.server2clientParams)(n || {});
                                        const o = r.alerts.get(n.id);
                                        o ? (r.alerts.remove(e), e = o) : (n.active = !0, e.set(n)), r._gaTrackEvent(t.eventName || "create", e, t.eventLabel), "function" == typeof t.success && t.success(e)
                                    },
                                    complete: function() {
                                        var r = Date.now() - o;
                                        S.telemetry.sendReport("alerts", "full_time_frame", {
                                            value: r
                                        }), "function" == typeof t.complete && t.complete(e)
                                    },
                                    error: t.error
                                }).catch((() => {}))
                            })).catch((function(e) {
                                if (e === U) return X.logNormal("Alert generation is cancelled because next alert generation is started"), U;
                                "function" == typeof t.error && t.error("Can't generate source code: " + e),
                                    "function" == typeof t.complete && t.complete()
                            }))
                        }
                        n("cannot create alert with current pro plan", !0)
                    } else n("'alert' should be instance of Alert")
                }, j.prototype.stopAlert = function(e, t = {}) {
                    const r = this;
                    let n, o;
                    e instanceof c.Alert ? (n = e, o = n.get("id")) : (o = e, n = r.alerts.get(o)), o ? r.sendRequest({
                        method: "stop_alert",
                        params: {
                            id: o
                        },
                        success: function() {
                            r._gaTrackEvent("stop"), n && n.set("active", !1), "function" == typeof t.success && t.success()
                        },
                        error: t.error,
                        complete: t.complete
                    }) : X.logError("Alert id is required to stop alert")
                }, j.prototype.stopAllAlerts = function(e = {}) {
                    const t = this,
                        r = {
                            cross_int: !0
                        };
                    let n;
                    e.symbol && (r.symbol = e.symbol), e.resolution && (r.resolution = e.resolution), e.showConfirm && (n = (0, J.bulkStopConfirmation)(e.symbol || e.resolution)), t.sendRequest({
                        method: "stop_all",
                        params: r,
                        success: function() {
                            t._gaTrackEvent("stop_all"), t.alerts.each((function(e) {
                                r.symbol && r.symbol !== e.get("symbol") || r.resolution && r.resolution !== e.get("resolution") || e.set("active", !1)
                            })), "function" == typeof e.success && e.success()
                        },
                        confirmation: n,
                        error: e.error,
                        complete: e.complete
                    })
                }, j.prototype.deleteAlert = function(e, t = {}) {
                    const o = this;
                    let i, a, s;
                    if (e instanceof c.Alert ? (a = e, s = a.get("id")) : (s = e, a = o.alerts.get(s)), a && a.isNew()) return a.destroy(), void("function" == typeof t.complete && t.complete());
                    if (s) {
                        if (t.showConfirm) {
                            const e = (l = a ? a.title() : s, (0, B.cutString)(l, 100)),
                                t = n.t(null, void 0, r(974834)).format({
                                    alert: e
                                });
                            i = {
                                title: n.t(null, void 0, r(588511)),
                                text: t
                            }
                        }
                        var l;
                        o.sendRequest({
                            method: "delete_alert",
                            params: {
                                id: s
                            },
                            success: function() {
                                o._gaTrackEvent("delete"), "function" == typeof t.success && t.success(), a && a.destroy()
                            },
                            error: t.error,
                            cancel: t.cancel,
                            complete: t.complete,
                            confirmation: i
                        })
                    } else X.logError("Alert id is required to delete alert")
                }, j.prototype.deleteAllAlerts = function(e = {}) {
                    const t = this,
                        r = {
                            crossInterval: !0
                        };
                    let n;
                    e.symbol && (r.symbol = e.symbol), e.resolution && (r.resolution = e.resolution), "boolean" == typeof e.active && (r.active = e.active), e.showConfirm && (n = !1 === r.active ? (0, J.bulkRemoveInactiveConfirmation)() : (0, J.bulkRemoveConfirmation)(r.active || r.symbol || r.resolution)), t.sendRequest({
                        method: "delete_all",
                        params: r,
                        success: function() {
                            var n, o = {};
                            for (t._gaTrackEvent("delete_all"), r.symbol && (o.symbol = r.symbol), r.resolution && (o.resolution = r.resolution), "boolean" == typeof r.active && (o.active = r.active), n = t.alerts.findWhere(o); n;) n.destroy(), n = t.alerts.findWhere(o);
                            "function" == typeof e.success && e.success()
                        },
                        error: e.error,
                        complete: e.complete,
                        confirmation: n
                    })
                }, j.prototype.restartAlert = function(e, t = {}) {
                    const r = this;
                    let n, o;
                    if (e instanceof c.Alert ? n = e : (o = e, n = r.alerts.get(o)), n) {
                        if (z(n), !j.checkProPermissions(n)) return "function" == typeof t.complete && t.complete(), void("function" == typeof t.error && t.error("cannot restart alert with current pro plan", !0));
                        var i = Date.now(),
                            a = n.prepareToSend();
                        return r._generateScriptWithCancellation(n).then((function(e) {
                            return Z(a, e), r.sendRequest({
                                headers: j.getAnalyticsHeaders(n.get("extra").conditionId(), t.actionSource),
                                method: "restart_alert",
                                params: a,
                                success: function() {
                                    r._gaTrackEvent("restart", n), n.set("active", !0),
                                        "function" == typeof t.success && t.success(n)
                                },
                                complete: function() {
                                    var e = Date.now() - i;
                                    S.telemetry.sendReport("alerts", "full_time_frame", {
                                        value: e
                                    }), "function" == typeof t.complete && t.complete(n)
                                },
                                error: t.error
                            }).catch((() => {}))
                        })).catch((function(e) {
                            if (e === U) return X.logNormal("Alert generation is cancelled because next alert generation is started"), U;
                            "function" == typeof t.error && t.error("Can't generate alert source code for alert #" + o)
                        }))
                    }
                    r.requestAlert(o, {
                        success: function(e) {
                            e ? r.restartAlert(e, t) : ("function" == typeof t.error && t.error("Can't find alert " + o), "function" == typeof t.complete && t.complete())
                        }
                    })
                }, j.prototype._generateScriptWithCancellation = function(e) {
                    var t = this;
                    null == t._lastGenIds[e.cid] && (t._lastGenIds[e.cid] = 0), t._lastGenIds[e.cid]++;
                    var r = t._lastGenIds[e.cid];
                    return new Promise((function(t, r) {
                        const n = e.get("extra");
                        let o = null,
                            i = "";
                        if (n.isValid() ? (o = n.toGenAlertJSON(e.get("description")), null === o && (i = "Can't generate alert JSON")) : i = "Can't generate alert on invalid AlertExtra", i) return X.logError(i), void r(i);
                        d().generateAlert(JSON.stringify(o)).then((function(e, r, n, o) {
                            t({
                                IL: r,
                                inputs: n,
                                genAlertData: o
                            })
                        }), r)
                    })).then((function(n) {
                        return t._lastGenIds[e.cid] !== r ? Promise.reject(U) : (e.set("script", n.IL), n)
                    }))
                }, j.prototype.restartAllAlerts = function(e = {}) {
                    const t = this,
                        r = {
                            crossInterval: !0
                        };
                    let n;
                    e.symbol && (r.symbol = e.symbol), e.resolution && (r.resolution = e.resolution), "boolean" == typeof e.active && (r.active = e.active), e.showConfirm && (n = (0, J.bulkRestartConfirmation)(e.symbol || e.resolution));
                    t.alerts.every(j.checkProPermissions) && t.sendRequest({
                        method: "restart_all",
                        params: r,
                        success: function() {
                            t._gaTrackEvent("restart_all"), t.alerts.each((function(e) {
                                r.symbol && r.symbol !== e.get("symbol") || r.resolution && r.resolution !== e.get("resolution") || e.set("active", !0)
                            })), "function" == typeof e.success && e.success()
                        },
                        error: e.error,
                        complete: e.complete,
                        confirmation: n
                    })
                }, j.prototype.requestAlert = function(e, t = {}) {
                    const r = this,
                        n = parseInt(e);

                    function o(e) {
                        var o = r.alerts.get(n) || null;
                        return (o || e) && ("function" == typeof t.success && t.success(o), "function" == typeof t.complete && t.complete()), !!o
                    }

                    function i() {
                        r.sendRequest({
                            method: "get_alert",
                            preventMaintenanceDialog: !0,
                            params: {
                                id: n
                            },
                            success: function(e) {
                                var n, o = e.alert;
                                o = (0, _.server2clientParams)(o), r._alertVersioning.migrate(o).then(G.patchLegacySymbolForAlert).then((function(e) {
                                    n = new c.Alert(e), r.alerts.add(n), "function" == typeof t.success && t.success(n)
                                })).catch((function(e) {
                                    "function" == typeof t.error && t.error(e)
                                }))
                            },
                            complete: t.complete,
                            error: function(r) {
                                "function" == typeof t.error ? t.error(r) : X.logError("Error in getting alert " + e + (r ? ": " + r : ""))
                            }
                        })
                    }!0 === t.fromCache ? o(!0) : !1 === t.fromCache ? i() : o() || i()
                }, j.prototype.getAlertSync = function(e) {
                    return this.alerts.get(e) || null
                }, j.prototype.ensureFullAlertsList = async function(e = {}) {
                    try {
                        if (window.is_authenticated || (this._fullListWasRequested = !0), this._fullListWasRequested) return void ee(e.success);
                        const t = await this.sendRequest({
                            method: "list_alerts",
                            preventMaintenanceDialog: !0,
                            params: {
                                limit: 2e3
                            }
                        });
                        if (!t.alerts || !Array.isArray(t.alerts)) throw new Error("Not valid params in alert list response");
                        const r = await Q(t.alerts, (e => this._alertVersioning.migrate(e).then(G.patchLegacySymbolForAlert)));
                        this.alerts.set(r), this._fullListWasRequested = !0, ee(e.success)
                    } catch (t) {
                        const r = String(t);
                        throw X.logError(r), ee(e.error, r), t
                    } finally {
                        ee(e.complete)
                    }
                }, j.prototype.requestEventList = function(e = {}) {
                    const t = this,
                        r = {
                            sym: e.symbol,
                            res: e.resolution && e.resolution.toString ? e.resolution.toString() : void 0,
                            limit: e.limit,
                            before: e.before,
                            inc_cross_int: void 0 === e.includeCrossInterval || e.includeCrossInterval
                        };
                    e.aid && (r.aid = e.aid), e.aids && (r.aids = e.aids), this.sendRequest({
                        method: "list_events",
                        preventMaintenanceDialog: !0,
                        params: r,
                        success: async function(r) {
                            const n = r.events,
                                o = [];
                            if (n && Array.isArray(n)) {
                                for (const e of n) {
                                    const r = await (0, G.patchLegacySymbol)((0, _.server2clientParams)(e)),
                                        n = new(s())(r);
                                    o.push(n), t.events.add(n)
                                }
                                "function" == typeof e.success && e.success(t.events.toArray()), "function" == typeof e.onServerEventsReceived && e.onServerEventsReceived(o)
                            } else console.warn("[Alerts] Not valid params in event list response")
                        },
                        error: e.error,
                        complete: e.complete
                    })
                }, j.prototype.deleteEvents = function(e = {}) {
                    const t = e.ids;
                    if (t && 0 === t.length) return r(), void("function" == typeof e.complete && e.complete());

                    function r() {
                        "function" == typeof e.success && e.success()
                    }
                    this.sendRequest({
                        method: "delete_events",
                        params: t ? {
                            ids: t
                        } : void 0,
                        success: () => {
                            t ? this.events.remove(t) : this.events.reset(), M.TVXWindowEvents.emit("alertevents-deleted", t ? JSON.stringify(t) : ""), r()
                        },
                        error: e.error,
                        complete: e.complete
                    })
                }, j.prototype.stopAlerts = function(e) {
                    const {
                        ids: t,
                        success: r,
                        confirmation: n,
                        error: o,
                        complete: i
                    } = e;
                    if (0 === t.length) return ee(r), void ee(i);
                    this.sendRequest({
                        method: "stop_alerts",
                        params: {
                            ids: t
                        },
                        success: () => {
                            this._gaTrackEvent("stop_alerts");
                            for (const e of t) {
                                const t = this.alerts.get(e);
                                t && t.set("active", !1)
                            }
                            ee(r)
                        },
                        error: o,
                        complete: i,
                        confirmation: n
                    })
                }, j.prototype.restartAlerts = function(e) {
                    const {
                        ids: t,
                        confirmation: r,
                        success: n,
                        error: o,
                        complete: i
                    } = e;
                    if (0 === t.length) return ee(n), void ee(i);
                    const a = [];
                    for (const e of t) {
                        const t = this.alerts.get(e);
                        t && a.push(t)
                    }
                    if (!a.every(j.checkProPermissions)) return ee(o, "Cannot restart alerts with current pro plan"), void ee(i);
                    this.sendRequest({
                        method: "restart_alerts",
                        params: {
                            ids: t
                        },
                        success: () => {
                            this._gaTrackEvent("restart_alerts");
                            for (const e of a) e.set("active", !0);
                            ee(n)
                        },
                        error: e => {
                            e in x && w(e), ee(o)
                        },
                        complete: i,
                        confirmation: r
                    })
                }, j.prototype.cloneAlerts = function(e) {
                    const {
                        success: t,
                        error: r,
                        complete: n
                    } = e, o = e.ids.filter((e => {
                        const t = this.alerts.get(e);
                        return Boolean(t && (0, O.isAlertCloneable)(t))
                    }));
                    if (0 === o.length) return ee(t), void ee(n);
                    this.sendRequest({
                        method: "clone_alerts",
                        params: {
                            ids: o
                        },
                        success: () => {
                            this._gaTrackEvent("clone_alerts"), ee(t)
                        },
                        error: r,
                        complete: n
                    })
                }, j.prototype.deleteAlerts = function(e) {
                    const {
                        ids: t,
                        confirmation: r,
                        success: n,
                        error: o,
                        complete: i
                    } = e;
                    if (0 === t.length) return ee(n), void ee(i);
                    this.sendRequest({
                        method: "delete_alerts",
                        params: {
                            ids: t
                        },
                        success: () => {
                            this._gaTrackEvent("delete_alerts");
                            for (const e of t) {
                                const t = this.alerts.get(e);
                                t && t.destroy()
                            }
                            ee(n)
                        },
                        error: o,
                        complete: i,
                        confirmation: r
                    })
                }, j.prototype.sendRequest = function(e) {
                    const t = e.method,
                        o = (0, _.client2serverParams)(e.params);
                    if (function(e, t) {
                            if (["create_alert", "restart_alert"].includes(e)) {
                                var r = t.extra && JSON.parse(t.extra),
                                    n = r && r.condition;
                                ["strategy", "alerts", "strategy_and_alerts"].includes(n.id) && (t.ns_only_fire = !0)
                            }
                        }(t, o), V.alertsMaintenanceTracker.sync(), V.alertsMaintenanceTracker.value()) return s("maintenance"), l(), Promise.reject("maintenance");
                    if (e.confirmation) {
                        const {
                            title: t,
                            text: o
                        } = e.confirmation;
                        return new Promise((function(a, s) {
                            (0, q.showConfirm)({
                                title: t || n.t(null, void 0, r(474382)),
                                text: o,
                                onConfirm: ({
                                    dialogClose: e
                                }) => {
                                    const t = i();
                                    return t.then((function(t) {
                                        return e(), t
                                    })).catch((function(t) {
                                        return e(), t
                                    })), a(t), t
                                },
                                onClose: () => {
                                    "function" == typeof e.cancel && e.cancel(), l()
                                }
                            })
                        }))
                    }
                    return i();

                    function i() {
                        const r = (0, v.sendRequest)({
                            method: t,
                            params: o,
                            noCache: e.noCache,
                            headers: e.headers
                        });
                        return r.then(a, s), r
                    }

                    function a(t) {
                        if ("function" == typeof e.success) {
                            var r = (0, _.server2clientParams)(t);
                            e.success(r)
                        }
                        return l(), r
                    }

                    function s(t) {
                        var n = !1;
                        return t in x ? (w(t), n = !0) : "max_total_alerts_count_exceeded" === t ? (Promise.all([r.e(18619), r.e(86256), r.e(13249), r.e(96246), r.e(24091), r.e(25012), r.e(75514), r.e(3091)]).then(r.bind(r, 324120)).then((e => e.showWarningAlertsMaxTotalCountExceededImpl())), n = !0) : "pro_plan_expired" === t ? ((0, D.showGoProInfExpDialog)(), n = !0) : "maintenance" === t && (e.preventMaintenanceDialog || (setTimeout(P, 0), n = !0)), "function" == typeof e.error ? e.error(t, n) : "maintenance" === t ? X.logNormal("Alerts maintenance") : t && X.logError("Reason: " + t), l(), t
                    }

                    function l() {
                        "function" == typeof e.complete && e.complete()
                    }
                }, j.prototype.setChartWidgetCollection = function(e) {
                    this._chartWidgetCollection = e
                }, j.prototype.chartWidget = function() {
                    var e = null;
                    return this._chartWidgetCollection && (e = this._chartWidgetCollection.activeChartWidget.value() || null), e
                }, j.prototype.removeAlertFromAllChartsSilently = function(e, t) {
                    this._chartWidgetCollection && this._chartWidgetCollection.getAll().forEach((function(r) {
                        r.deleteAlertByExternalSource(e, t)
                    }))
                }, j.prototype._gaTrackEvent = function(e, t, r) {
                    var n;
                    (0, h.trackEvent)("alert", e, r), "create" === e && t instanceof c.Alert && (n = t.get("extra"), (0, h.trackEvent)("alert", "create__style", function(e) {
                        var t = e && e.getMainSeries(),
                            r = t && t.getStyle && t.getStyle();
                        return r && f.STYLE_SHORT_NAMES.hasOwnProperty(r) ? f.STYLE_SHORT_NAMES[r] : "unknown"
                    }(n)), (0, h.trackEvent)("alert", "create__condition", function(e) {
                        var t = e.conditionId();
                        return e.prepareAlertConditions()[t] && (t = "pine_condition"), t || "unknown"
                    }(n)), (0, h.trackEvent)("alert", "create__frequency", t.get("frequency") || "unknown"), t.isPrice() ? (0, h.trackEvent)("alert", "create__on", "price") : t.isDrawing() ? (0, h.trackEvent)("alert", "create__on", "drawing") : t.isMoving() ? (0, h.trackEvent)("alert", "create__on", "moving") : n.band() || n.upperBand() || n.lowerBand() ? (0, h.trackEvent)("alert", "create__on", "study") : (0, h.trackEvent)("alert", "create__on", "unknown"))
                }, j.prototype.getAlertDialogInvocations = function() {
                    return W.alertEditorInvocationHandler.getDialogInvocations()
                },
                j.prototype.openCreateDialog = function(e) {
                    (0, o.invokeAlertEditor)({
                        type: "create_alert",
                        ...e
                    })
                }, j.prototype.openEditDialog = function(e, t = {}) {
                    const a = this;
                    let s, l;
                    const u = e => t.onAborted && t.onAborted(e);
                    !t.dataSourceHub && a.chartWidget() && (t.dataSourceHub = a.chartWidget().model().model()), e instanceof c.Alert ? s = e : (l = e, s = a.alerts.get(l)), s ? (t = H.extend(t, {
                        alert: s,
                        type: "edit_alert"
                    }), (0, o.invokeAlertEditor)(t)) : l ? a.requestAlert(l, {
                        success: function(e) {
                            a.openEditDialog(e, t)
                        },
                        error: function(e) {
                            "not_exists" === e && (0, C.showNoticeDialog)({
                                type: "modal",
                                title: n.t(null, void 0, r(474382)),
                                content: n.t(null, void 0, r(578357))
                            }), "function" == typeof t.error && t.error(e), u(i.AlertEditorAbortReason.AlertIsInvalid)
                        }
                    }) : (console.error("[Alerts] alert id is required to edit alert"), u(i.AlertEditorAbortReason.AlertIsInvalid))
                }, j.prototype.subscribeToPushStream = function(e) {
                    this._onPushStreamMessage.subscribe(null, e)
                }, j.prototype.unsubscribeFromPushStream = function(e) {
                    e ? this._onPushStreamMessage.unsubscribe(null, e) : this._onPushStreamMessage.unsubscribeAll(null)
                }
        },
        459263: (e, t, r) => {
            r.d(t, {
                getAlertDefaultDescription: () => s
            });
            r(984919);
            var n = r(777754),
                o = r(650627);
            const i = n.t(null, void 0, r(427631)),
                a = n.t(null, void 0, r(404050));

            function s(e) {
                switch (e.type) {
                    case o.AlertConditionTokenMapType.MainSeries:
                        return `${e.alertSeries} ${e.conditionTitle} ${e.conditionOptions}`;
                    case o.AlertConditionTokenMapType.Study:
                        return i.format({
                            alertSeries: e.alertSeries,
                            chartSeries: e.mainSeries,
                            alertCondition: e.conditionTitle,
                            alertConditionOptions: e.conditionOptions
                        });
                    case o.AlertConditionTokenMapType.PineScript:
                        return e.conditionMessage;
                    case o.AlertConditionTokenMapType.PineScriptAlertFunction:
                        return "";
                    case o.AlertConditionTokenMapType.Strategy:
                        return a.format({
                            strategyName: e.strategyTitle
                        })
                }
            }
        },
        698451: (e, t, r) => {
            r.d(t, {
                getAlertDefaultName: () => u
            });
            r(984919);
            var n = r(777754),
                o = r(650627),
                i = r(823757);
            const a = n.t(null, void 0, r(483875)),
                s = n.t(null, void 0, r(890119)),
                l = i.Constants.NameLengthLimit - d(a),
                c = i.Constants.NameLengthLimit - d(s);

            function u(e) {
                switch (e.type) {
                    case o.AlertConditionTokenMapType.MainSeries:
                    case o.AlertConditionTokenMapType.Study:
                    case o.AlertConditionTokenMapType.PineScript:
                    case o.AlertConditionTokenMapType.Strategy:
                        return "";
                    case o.AlertConditionTokenMapType.PineScriptAlertFunction:
                        const t = e.scriptTitle;
                        let r, n;
                        return e.isStrategy ? (r = s, n = t.length > c ? f(t, c) : t) : (r = a, n = t.length > l ? f(t, l) : t), r.format({
                            title: n
                        })
                }
            }

            function d(e) {
                return e.replace("{title}", "").length
            }

            function f(e, t) {
                return `${e.substring(0,t-"…".length)}…`
            }
        },
        848002: (e, t, r) => {
            r.d(t, {
                showGoProAlertsWebhookDialog: () => o
            });
            var n = r(508846);

            function o() {
                (0, n.createGoProDialog)({
                    feature: "alertsWebhook"
                })
            }
        },
        727350: (e, t, r) => {
            r.d(t, {
                showGoProInfExpDialog: () => o
            });
            var n = r(508846);

            function o() {
                (0, n.createGoProDialog)({
                    feature: "alertsNoExpiration"
                })
            }
        }
    }
]);
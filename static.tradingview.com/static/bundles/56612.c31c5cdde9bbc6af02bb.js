"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [56612], {
        729584: (e, t, r) => {
            r.d(t, {
                assertNoEmitterListeners: () => s
            });
            r(650151);

            function s(e, t) {
                0
            }
        },
        186288: (e, t, r) => {
            function s(e) {
                return e.includes(":") ? e.split(":") : ["", e]
            }
            r.d(t, {
                splitSymbolName: () => s
            })
        },
        7628: (e, t, r) => {
            function s(e) {
                return "=" + JSON.stringify(n(e))
            }

            function n(e) {
                return Object.keys(e).sort().reduce(((t, r) => ("[object Object]" === Object.prototype.toString.call(e[r]) ? t[r] = n(e[r]) : t[r] = e[r], t)), {})
            }

            function i(e) {
                return Boolean(e.inputs)
            }

            function o(e) {
                return i(e) || Boolean(e.replay) || e.session || e.adjustment || e["currency-id"] || e["unit-id"] ? s(e) : e.symbol
            }

            function a(e) {
                return "=" === e[0]
            }

            function l(e) {
                if (!a(e)) return {
                    symbol: e
                };
                try {
                    return JSON.parse(e.slice(1))
                } catch (t) {
                    return {
                        symbol: e
                    }
                }
            }

            function c(e) {
                return "string" == typeof e ? e : c(e.symbol)
            }
            r.d(t, {
                isStudySymbol: () => i,
                encodeExtendedSymbolOrGetSimpleSymbolString: () => o,
                isEncodedExtendedSymbol: () => a,
                decodeExtendedSymbol: () => l,
                unwrapSimpleSymbol: () => c
            })
        },
        483733: (e, t, r) => {
            r.d(t, {
                alertsConnectionWritableTracker: () => i,
                alertsConnectionTracker: () => o
            });
            var s = r(988411),
                n = r.n(s);
            const i = new class {
                    constructor() {
                        this._state = new(n())(!0)
                    }
                    value() {
                        return this._state.value()
                    }
                    setValue(e) {
                        this._state.setValue(e)
                    }
                    subscribe(e) {
                        this._state.subscribe(e)
                    }
                    unsubscribe(e) {
                        this._state.unsubscribe(e)
                    }
                },
                o = i
        },
        309314: (e, t, r) => {
            var s;
            r.d(t, {
                    AlertsPushStreamMessage: () => s
                }),
                function(e) {
                    let t, r, s;
                    ! function(e) {
                        e.Event = "event", e.Running = "alert_running", e.Stopped = "alert_stopped", e.Deleted = "alert_deleted", e.Cloned = "new_alerts"
                    }(t = e.Method || (e.Method = {})),
                    function(e) {
                        e.None = "", e.Manual = "manual", e.Expired = "expired", e.ProPlanExpired = "pro_plan_expired", e.Auto = "auto", e.Error = "error", e.FireControl = "fire_control", e.Cloned = "cloned", e.StudyPermsExpired = "study_perm_expired"
                    }(r = e.StopReason || (e.StopReason = {})),
                    function(e) {
                        e.None = "", e.StudyError = "study_error", e.ResolveError = "resolve_error", e.DrawingIsExpired = "drawing_is_expired"
                    }(s = e.Error || (e.Error = {}))
                }(s || (s = {}))
        },
        212702: (e, t, r) => {
            r.d(t, {
                getAlertsPushApi: () => f
            });
            var s = r(895171),
                n = r(779665),
                i = (r(659863), r(869403)),
                o = r.n(i),
                a = r(272001),
                l = r(309314),
                c = r(459980);
            const u = (0, a.getLogger)("Alerts.AlertsPushApi");
            class d {
                constructor(e) {
                    this._isDestroyed = !1, this._eventDelegates = {
                        alerts_updated: new(o()),
                        alerts_created: new(o()),
                        alerts_deleted: new(o()),
                        alert_fired: new(o()),
                        fires_deleted: new(o())
                    }, this._onPushStreamMessage = async e => {
                        const t = JSON.parse(e);
                        try {
                            let e;
                            switch (t.m) {
                                case l.AlertsPushStreamMessage.Method.Running:
                                    e = function({
                                        p: e
                                    }) {
                                        return {
                                            m: "alerts_updated",
                                            p: [m(e)]
                                        }
                                    }(t);
                                    break;
                                case l.AlertsPushStreamMessage.Method.Cloned:
                                    e = function({
                                        p: e
                                    }) {
                                        return {
                                            m: "alerts_created",
                                            p: e.alerts.map(m)
                                        }
                                    }(t);
                                    break;
                                case l.AlertsPushStreamMessage.Method.Stopped:
                                    e = function({
                                        p: e
                                    }) {
                                        return {
                                            m: "alerts_updated",
                                            p: [{
                                                alert_id: e.id,
                                                active: !1,
                                                last_stop_reason: e.stop || null,
                                                last_error: e.error || null,
                                                symbol: e.sym,
                                                message: e.desc,
                                                name: e.name
                                            }]
                                        }
                                    }(t);
                                    break;
                                case l.AlertsPushStreamMessage.Method.Deleted:
                                    e = function({
                                        p: e
                                    }) {
                                        return {
                                            m: "alerts_deleted",
                                            p: [e.id]
                                        }
                                    }(t);
                                    break;
                                case l.AlertsPushStreamMessage.Method.Event:
                                    e = function({
                                        p: e
                                    }) {
                                        return {
                                            m: "alert_fired",
                                            p: {
                                                fire_id: e.id,
                                                alert_id: e.aid,
                                                symbol: e.sym,
                                                resolution: e.res,
                                                message: e.desc,
                                                sound_file: e.snd ? e.snd_file : null,
                                                sound_duration: e.snd_duration,
                                                popup: e.popup,
                                                fire_time: h(e.fire_time),
                                                bar_time: h(e.bar_time),
                                                cross_interval: e.cross_int,
                                                name: e.name
                                            }
                                        }
                                    }(t)
                            }
                            if ("alerts_created" === e.m || "alerts_updated" === e.m)
                                for (const t of e.p) await (0, c.patchLegacySymbol)(t);
                            else "alert_fired" === e.m && await (0, c.patchLegacySymbol)(e.p);
                            if (this._isDestroyed) return;
                            this._eventDelegates[e.m].fire(e.p)
                        } catch (e) {
                            u.logError(`Could not convert legacy message ${t.m}: ${e}`)
                        }
                    }, this._messageEmitter = e, this._messageEmitter.on("alert", this._onPushStreamMessage)
                }
                on(e, t) {
                    if ("fires_deleted" === e) throw new Error(`Conversions for message type ${e} are not implemented`);
                    this._eventDelegates[e].subscribe(null, t)
                }
                off(e, t) {
                    this._eventDelegates[e].unsubscribe(null, t)
                }
                destroy() {
                    this._isDestroyed = !0, this._messageEmitter.off("alert", this._onPushStreamMessage);
                    for (const e of Object.values(this._eventDelegates)) e.destroy()
                }
            }

            function m(e) {
                return {
                    alert_id: e.id,
                    type: e.alert_type,
                    last_fire_time: null === e.fire_time ? null : h(e.fire_time),
                    active: e.active,
                    last_stop_reason: e.stop || null,
                    last_error: e.error || null,
                    symbol: e.sym,
                    resolution: e.res,
                    expiration: e.inf_exp ? null : h(e.exp),
                    web_hook: e.web_hook,
                    message: e.desc,
                    name: e.name
                }
            }

            function h(e) {
                return new Date(1e3 * e).toISOString()
            }
            const f = (0, s.default)((() => new d(n.pushStreamMultiplexer)))
        },
        145003: (e, t, r) => {
            r.d(t, {
                AlertsRestApiError: () => A,
                getAlertsRestApi: () => T
            });
            var s = r(895171),
                n = r(650151),
                i = r(588948),
                o = r(175203),
                a = (r(659863), r(740474)),
                l = r(304241),
                c = r(483733),
                u = r(130551),
                d = r(890740),
                m = r(272001),
                h = r(459980);
            async function f(e) {
                return Promise.all(e.map(w))
            }
            async function _(e) {
                return Promise.all(e.map((async e => ({
                    fires_count: e.fires_count,
                    latest_fire: await w(e.latest_fire)
                }))))
            }

            function p(e) {
                return Promise.all(e.map(b))
            }

            function g(e) {
                return Promise.all(e.map(y))
            }
            async function y(e) {
                const t = "description" in e ? { ...e,
                    message: e.description
                } : { ...e
                };
                return (0, h.patchLegacySymbol)(t)
            }

            function w(e) {
                const t = "description" in e ? { ...e,
                    message: e.description
                } : { ...e
                };
                return (0, h.patchLegacySymbol)(t)
            }
            async function b(e) {
                const t = "description" in e ? { ...e,
                    message: e.description
                } : { ...e
                };
                return (0, h.patchLegacySymbol)(t)
            }
            const k = (0, m.getLogger)("Alerts.AlertsRestApi");
            class S {
                constructor(e, t, r, s) {
                    this._baseRestUrl = e, this._getRequestMetadata = t, this._resetToken = r, this._fetch = async (...e) => {
                        const t = s ? function(e, t) {
                            return async (...r) => {
                                const s = Date.now(),
                                    n = await e(...r),
                                    i = Date.now();
                                try {
                                    t({
                                        delay: i - s,
                                        statusCode: n.status
                                    })
                                } catch (e) {
                                    k.logError(`Exception raised during metrics collection: ${e}`)
                                }
                                return n
                            }
                        }(d.fetch, s) : d.fetch;
                        try {
                            return await t(...e)
                        } catch (e) {
                            throw e instanceof Error && k.logError(e.message), new A("connection_issue", "Fetch failed")
                        }
                    }
                }
                createAlert(e) {
                    return this._getResource("/create_alert", e)
                }
                restartAlert(e) {
                    return this._getResource("/restart_alert", e)
                }
                deleteAlerts(e) {
                    return this._performAction("/delete_alerts", e)
                }
                stopAlerts(e) {
                    return this._performAction("/stop_alerts", e)
                }
                restartAlerts(e) {
                    return this._performAction("/restart_alerts", e)
                }
                cloneAlerts(e) {
                    return this._getResource("/clone_alerts", e)
                }
                listAlerts() {
                    return this._getResource("/list_alerts", void 0, g)
                }
                getAlerts(e) {
                    return this._getResource("/get_alerts", e)
                }
                deleteFires(e) {
                    return this._performAction("/delete_fires", e)
                }
                listFires(e) {
                    return this._getResource("/list_fires", e, f)
                }
                getOfflineFires() {
                    return this._getResource("/get_offline_fires", void 0, _)
                }
                getOfflineFireControls() {
                    return this._getResource("/get_offline_fire_controls", void 0, p)
                }
                clearOfflineFires(e) {
                    return this._performAction("/clear_offline_fires", e)
                }
                clearOfflineFireControls(e) {
                    return this._performAction("/clear_offline_fire_controls", e)
                }
                async _getResponse(e, t, r = !1) {
                    const {
                        jwt: s,
                        username: n,
                        buildTime: i
                    } = await this._getRequestMetadata(), o = "string" == typeof s ? s : s.token, a = new URL(this._baseRestUrl + e, window.location.origin);
                    if (a.searchParams.set("log_username", n), a.searchParams.set("build_time", i), "string" != typeof s) {
                        const e = 2 * Number(s.wasReset) + Number(r);
                        a.searchParams.set("token_init_time", String(s.initTime)), a.searchParams.set("token_check_time", String(s.checkTime)), a.searchParams.set("token_reset_status", String(e)), void 0 !== s.isInitial && a.searchParams.set("token_is_initial", String(s.isInitial ? 1 : 0)), void 0 !== s.isCacheMechanism && a.searchParams.set("token_is_cache_mechanism", String(s.isCacheMechanism ? 1 : 0))
                    }
                    const l = Date.now(),
                        c = await this._fetch(a.toString(), {
                            method: "POST",
                            body: JSON.stringify({
                                jwt: o,
                                payload: t || {}
                            }),
                            credentials: "include"
                        }, {
                            logBodyOnError: !0
                        }),
                        d = Date.now(),
                        m = function(e) {
                            const t = { ...e
                            };
                            "req_id" in t && (t.id = t.req_id);
                            return t
                        }(await c.json()),
                        h = d - l,
                        f = JSON.stringify(m),
                        _ = f.length;
                    return function(e) {
                        return (0, u.isObject)(e) && ("req_id" in e || "id" in e) && "s" in e
                    }(m) ? "err" in m ? "jwt_token_expired" !== m.err.code || r ? (k.logError(`Request ${m.id} failed with error: ${m.errmsg}, Status: ${c.status}, Time response: ${h} ms, lengthResponse: ${_}, Method: ${e}`), Promise.reject(new A(m.err.code, m.errmsg))) : (k.logWarn(`Request ${m.id} contained an expired token, retrying with a token refresh`), this._resetToken(), this._getResponse(e, t, !0)) : (k.logNormal(`Request ${m.id} finished successfully,  Status: ${c.status}, Time response: ${h} ms, lengthResponse: ${_}, Method: ${e}`), m) : (k.logError(`Expected valid rest api response but received: ${f}, Status: ${c.status}, Time response: ${h} ms, lengthResponse: ${_}, Method: ${e}`), Promise.reject(new A("general", "Invalid response")))
                }
                async _getResource(e, t, r) {
                    const s = await this._getResponse(e, t);
                    return r ? r(s.r) : s.r
                }
                async _performAction(e, t) {
                    await this._getResponse(e, t)
                }
            }
            class A extends Error {
                constructor(e, t) {
                    super(t), this.name = "AlertsRestApiError", this.code = e
                }
            }
            const E = (0, m.getLogger)("Alerts.AlertsRestApi");
            const T = (0, s.default)((() => {
                const {
                    priceAlertsFacadeClientUrl: e
                } = (0, i.getFreshInitData)(), t = (0, a.getAlertsTokenManager)();
                return function(e, t, r) {
                    return {
                        createAlert: s(e.createAlert),
                        restartAlert: s(e.restartAlert),
                        deleteAlerts: s(e.deleteAlerts),
                        stopAlerts: s(e.stopAlerts),
                        restartAlerts: s(e.restartAlerts),
                        cloneAlerts: s(e.cloneAlerts),
                        listAlerts: s(e.listAlerts),
                        getAlerts: s(e.getAlerts),
                        listFires: s(e.listFires),
                        deleteFires: s(e.deleteFires),
                        getOfflineFires: s(e.getOfflineFires),
                        getOfflineFireControls: s(e.getOfflineFireControls),
                        clearOfflineFires: s(e.clearOfflineFires),
                        clearOfflineFireControls: s(e.clearOfflineFireControls)
                    };

                    function s(s) {
                        return async (...n) => {
                            if (t.sync(), t.value()) throw E.logError(`Method ${s.name} has not been called due to maintenance`), new A("maintenance", "Maintenance");
                            try {
                                const t = await s.bind(e)(...n);
                                return r.setValue(!0), t
                            } catch (e) {
                                throw r.setValue(!(e instanceof A && "connection_issue" === e.code)), e
                            }
                        }
                    }
                }(new S((0, n.ensureDefined)(e), (async () => ({
                    jwt: await F(t),
                    username: window.user.username,
                    buildTime: window.BUILD_TIME
                })), (() => t.reset()), (({
                    delay: e,
                    statusCode: t
                }) => {
                    o.telemetry.sendReport("alerts", "api_http_status", {
                        value: t
                    }), o.telemetry.sendReport("alerts", "api_time_frame", {
                        value: e
                    })
                })), l.alertsMaintenanceTracker, c.alertsConnectionWritableTracker)
            }));
            const v = Date.now();
            async function F(e) {
                const t = await e.get(),
                    r = Date.now();
                if (0 === a.tokenManagerImplementation) return {
                    token: t,
                    initTime: v,
                    checkTime: r,
                    wasReset: !1,
                    isCacheMechanism: !0
                };
                if ((0, a.isTokenExpired)(t)) return e.reset(), {
                    token: await e.get(),
                    isInitial: !1,
                    initTime: v,
                    checkTime: r,
                    wasReset: !0
                };
                return {
                    token: t,
                    isInitial: t === window.user.auth_token,
                    initTime: v,
                    checkTime: r,
                    wasReset: !1
                }
            }
        },
        459980: (e, t, r) => {
            r.d(t, {
                patchLegacySymbol: () => m,
                patchLegacySymbolForAlert: () => d
            });
            var s = r(7628),
                n = r(186288),
                i = r(125226);
            const o = {
                BYBIT: e => a(e, r.e(73267).then(r.t.bind(r, 318385, 19))),
                KRAKEN: async e => ((0, i.isFeatureEnabled)("alerts-dirty-migration-kraken") && (e = await a(e, r.e(83401).then(r.t.bind(r, 803587, 19)))), (0, i.isFeatureEnabled)("alerts-dirty-migration-kraken-patch-2") && (e = await a(e, r.e(36585).then(r.t.bind(r, 558152, 19)))), e)
            };
            async function a(e, t) {
                return (await t).default[e] || e
            }
            async function l(e, t) {
                for (const r of t) {
                    const t = e[r];
                    "string" == typeof t && (e[r] = (0, s.isEncodedExtendedSymbol)(t) ? await u(t) : await c(t))
                }
            }
            async function c(e) {
                const [t] = (0, n.splitSymbolName)(e), r = await
                function(e) {
                    return o[e] || (e => Promise.resolve(e))
                }(t);
                return r(e)
            }
            async function u(e) {
                const t = (0, s.decodeExtendedSymbol)(e);
                return "string" == typeof t.symbol ? t.symbol = await c(t.symbol) : t.symbol.symbol = await c(t.symbol.symbol), (0, s.encodeExtendedSymbolOrGetSimpleSymbolString)(t)
            }
            async function d(e) {
                await l(e, ["symbol", "symbolInternal"]);
                const t = JSON.parse(e.extra),
                    r = t.condition;
                if ("mainSeries" in r) {
                    const e = r.mainSeries.id,
                        s = t.statesForAlert[e];
                    s && await l(s, ["actualSymbol", "proSymbol", "symbolString"])
                }
                return e.extra = JSON.stringify(t), e
            }
            async function m(e) {
                return await l(e, ["symbol"]), e
            }(0, i.isFeatureEnabled)("alerts-dirty-migration-binance") && (o.BINANCE = e => a(e, r.e(94393).then(r.t.bind(r, 497709, 19)))), (0, i.isFeatureEnabled)("alerts-dirty-migration-bitmex") && (o.BITMEX = e => a(e, r.e(2553).then(r.t.bind(r, 306157, 19)))), (0, i.isFeatureEnabled)("alerts-dirty-migration-dydx") && (o.DYDX = e => a(e, r.e(12716).then(r.t.bind(r, 382478, 19)))), (0, i.isFeatureEnabled)("alerts-dirty-migration-bitfinex") && (o.BITFINEX = e => a(e, r.e(35157).then(r.t.bind(r, 900435, 19)))), (0,
                i.isFeatureEnabled)("alerts-dirty-migration-phemex") && (o.PHEMEX = e => a(e, r.e(41741).then(r.t.bind(r, 87779, 19))))
        },
        740474: (e, t, r) => {
            r.d(t, {
                getAlertsTokenManager: () => f,
                isTokenExpired: () => u,
                tokenManagerImplementation: () => h
            });
            var s = r(895171),
                n = r(125226),
                i = r(982987),
                o = r(869403),
                a = r.n(o),
                l = r(960254),
                c = r(272001);

            function u(e) {
                const t = JSON.parse(atob(e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
                return Date.now() + 3e5 > 1e3 * t.exp
            }
            const d = (0, c.getLogger)("Alerts.Token");
            class m {
                constructor() {
                    this.invalidated = new(a()), this._fetchTokenPromise = null, this._timersDifference = Date.now() - performance.now(), window.loginStateChange.subscribe(null, (e => {
                        e || this.invalidated.fire()
                    }))
                }
                get(e = !1) {
                    if (this._fetchTokenPromise) return this._fetchTokenPromise;
                    const t = Date.now() - performance.now(),
                        r = Math.abs(t - this._timersDifference);
                    return this._fetchTokenPromise = this._tryGetFreshToken(e || r > 3e4).then((e => (this._fetchTokenPromise = null, this._timersDifference = t, e))).catch((e => {
                        throw this._fetchTokenPromise = null, this._timersDifference = t, d.logError(e instanceof Error ? e.message : String(e)), e
                    })), this._fetchTokenPromise
                }
                reset() {
                    d.logWarn("Token has been force reset"), this.get(!0)
                }
                async _tryGetFreshToken(e) {
                    if (!window.is_authenticated) {
                        const e = new Error("Fetching token is denied for anonymous user");
                        throw d.logError(e.message), e
                    }
                    d.logNormal("Getting token");
                    let t = await this._fetchToken(e);
                    return !e && u(t) && (d.logWarn("Fetched token is expired, force reloading token"), t = await this._fetchToken(!0)), u(t), t !== this._previousToken && (this._previousToken && this.invalidated.fire(), this._previousToken = t), t
                }
                async _fetchToken(e) {
                    const t = await fetch(`/entitlements-token/?user_id=${window.user.id}&pro_plan=${window.user.pro_plan||l.ProPlans.Free}`, {
                            cache: e ? "reload" : "default"
                        }),
                        r = await t.json();
                    if ("code" in r) throw new Error(`Failed to fetch token, status ${t.status}, code: ${r.code}, message: ${r.detail}`);
                    if (!t.ok) throw new Error(`Failed to fetch token, status ${t.status}`);
                    return this._logFetchedToken(r.token), r.token
                }
                _logFetchedToken(e) {
                    e !== this._previousToken ? d.logNormal(`Fetched new token: ${e}`) : d.logNormal(`Fetched cached token: ${e}`)
                }
            }
            const h = (0, n.isFeatureEnabled)("alerts-use-browser-cache-for-jwt") ? 0 : 1,
                f = (0, s.default)((() => new(0 === h ? m : i.AuthToken)))
        }
    }
]);
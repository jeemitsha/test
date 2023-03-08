(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [86981], {
        711242: (e, t, n) => {
            e.exports = [{
                name: n(777754).t(null, void 0, n(695271)),
                value: "",
                search_type: "undefined"
            }, {
                name: n(777754).t(null, void 0, n(426294)),
                value: "stocks",
                search_type: "stocks"
            }, {
                name: n(777754).t(null, void 0, n(301992)),
                value: "funds",
                search_type: "funds"
            }, {
                name: n(777754).t(null, void 0, n(468631)),
                value: "futures",
                search_type: "futures"
            }, {
                name: n(777754).t(null, void 0, n(324241)),
                value: "forex",
                search_type: "forex"
            }, {
                name: n(777754).t(null, void 0, n(494695)),
                value: "cfd",
                search_type: "cfd"
            }, {
                name: n(777754).t(null, void 0, n(612760)),
                value: "bitcoin,crypto",
                search_type: "crypto"
            }, {
                name: n(777754).t(null, void 0, n(433468)),
                value: "index",
                search_type: "index"
            }, {
                name: n(777754).t(null, void 0, n(290368)),
                value: "bond",
                search_type: "bond"
            }, {
                name: n(777754).t(null, void 0, n(337556)),
                value: "economic",
                search_type: "economic"
            }]
        },
        982987: (e, t, n) => {
            "use strict";
            n.d(t, {
                AuthToken: () => c
            });
            var s = n(869403),
                o = n.n(s),
                r = n(272001),
                i = n(890740);
            const a = (0, r.getLogger)("ChartApi.AuthToken", {
                color: "#173"
            });
            class c {
                constructor() {
                    this.invalidated = new(o()), this._tid = 0, window.loginStateChange || (window.loginStateChange = new(o())), window.loginStateChange.subscribe(this, (e => {
                        e || (this._set(window.user.auth_token), this.invalidated.fire())
                    })), this._set(window.user.auth_token)
                }
                get(e) {
                    return window.is_authenticated ? !e && performance.now() < this._cache.monoValidThru && Date.now() < this._cache.wallValidThru ? (a.logInfo(`Using cached token ${this._cache.token}`), Promise.resolve(this._cache.token)) : this._fetch(Boolean(e), 0).then((e => {
                        if (!window.is_authenticated) throw new Error("User logged out while the request was in flight");
                        return this._set(e), e
                    })).catch((e => (a.logError(`Error fetching new token: ${e&&e.message}`), ""))) : Promise.resolve("")
                }
                reset() {
                    this._set(void 0), this.invalidated.fire()
                }
                _set(e) {
                    if (window.is_authenticated && void 0 !== e) {
                        const t = function(e) {
                            if ("" === e) return 144e5;
                            try {
                                const t = JSON.parse(atob(e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))),
                                    n = 1e3 * (t.exp - t.iat);
                                if (!isFinite(n)) throw new Error("invalid expiration");
                                return Math.max(n - 3e5, 3e5)
                            } catch (t) {
                                return a.logError(`${e} is invalid: ${t.message}`), 144e5
                            }
                        }(e);
                        this._cache = {
                            token: e,
                            monoValidThru: performance.now() + t,
                            wallValidThru: Date.now() + t
                        }, clearTimeout(this._tid), this._tid = setTimeout((() => this.reset()), t), a.logInfo(`Cached for ${t} ms: ${e}`)
                    } else this._cache = {
                        token: "",
                        monoValidThru: -1 / 0,
                        wallValidThru: -1 / 0
                    }, clearTimeout(this._tid), a.logInfo("Cache dropped")
                }
                _fetch(e, t) {
                    return a.logNormal(`Fetching a new token, grabSession=${e}`), (0, i.fetch)("/quote_token/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: e ? "grabSession=true" : ""
                    }).then((e => {
                        if (!e.ok) throw new Error(`Response status is not ok: ${e.status}`);
                        return e.json().then(String)
                    }), (n => {
                        if (t >= 3) throw n;
                        return a.logWarn("Request failed, will retry"),
                            function(e) {
                                return new Promise((t => setTimeout(t, 1e3 * e)))
                            }(t).then((() => this._fetch(e, t + 1)))
                    }))
                }
            }
        },
        480905: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                TVChartApiBase: () => T
            });
            var s = n(12481),
                o = n(650151),
                r = n(632446),
                i = n(125226),
                a = n(988411),
                c = n.n(a);
            class d {
                constructor(e) {
                    this._cache = e
                }
                async getValue(e) {
                    const t = await this._cache.match(e);
                    if (!t) return null;
                    return "application/json" === (0, o.ensureNotNull)(t.headers.get("Content-Type")) ? t.json() : t.text()
                }
                async setValue(e, t) {
                    return "string" == typeof t ? this._cache.put(e, new Response(t, {
                        headers: {
                            "content-type": "text/plain"
                        }
                    })) : this._cache.put(e, new Response(JSON.stringify(t), {
                        headers: {
                            "content-type": "application/json"
                        }
                    }))
                }
            }
            class u {
                constructor() {
                    this._data = new Map
                }
                async getValue(e) {
                    var t;
                    return null !== (t = this._data.get(e)) && void 0 !== t ? t : null
                }
                async setValue(e, t) {
                    this._data.set(e, t)
                }
            }
            var l = n(43329),
                h = n(272001),
                _ = n(175203),
                m = n(833813);

            function p(e) {
                return e.index = e.i, e.value = e.v, delete e.i, delete e.v, e
            }

            function f(e) {
                for (const t of Object.keys(e)) e[t].t && (e[t].turnaround = e[t].t), e[t].s && !e[t].series && (e[t].series = e[t].s.map(p)), e[t].st && !e[t].series && (e[t].series = e[t].st.map(p))
            }
            class g {
                set_broker(e) {
                    return [e]
                }
                set_data_quality() {
                    return ["low"]
                }
                quote_create_session(e) {
                    return [e]
                }
                quote_delete_session(e) {
                    return [e]
                }
                quote_set_fields(e, t) {
                    return [e].concat(t)
                }
                quote_add_symbols(e, t) {
                    return [e].concat(t)
                }
                quote_remove_symbols(e, t) {
                    return [e].concat(t)
                }
                quote_fast_symbols(e, t) {
                    return [e].concat(t)
                }
                quote_hibernate_all(e) {
                    return [e]
                }
                depth_create_session(e, t, n) {
                    return [e, t, n]
                }
                depth_delete_session(e) {
                    return [e]
                }
                depth_set_symbol(e, t) {
                    return [e, t]
                }
                depth_clear_symbol(e) {
                    return [e]
                }
                depth_set_scale(e, t) {
                    return [e, t]
                }
                chart_create_session(e, t) {
                    return [e, t ? "disable_statistics" : ""]
                }
                chart_delete_session(e) {
                    return [e]
                }
                set_auth_token(e) {
                    return [e]
                }
                set_locale(e, t) {
                    return [e, t]
                }
                switch_timezone(e, t) {
                    return [e, t]
                }
                resolve_symbol(e, t, n) {
                    return [e, t, n]
                }
                create_series(e, t, n, s, o, r, i) {
                    return [e, t, n = n || "", s, o, r, i]
                }
                remove_series(e, t) {
                    return [e, t]
                }
                modify_series(e, t, n, s, o, r) {
                    return [e, t, n = n || "", s, o, r]
                }
                request_more_data(e, t, n) {
                    return [e, t, n]
                }
                request_studies_metadata(e, t) {
                    return [e, t]
                }
                create_study(e, t, n, s, o, r) {
                    return [e, t, n = n || "", s, o].concat(r)
                }
                create_child_study(e, t, n, s, o, r) {
                    return this.create_study(e, t, n, s, o, r)
                }
                child_study_rebind(e, t, n, s, o, r) {
                    return [e, t, n = n || "", s, o].concat(r)
                }
                remove_study(e, t) {
                    return [e, t]
                }
                modify_study(e, t, n, s) {
                    return [e, t, n = n || ""].concat(s)
                }
                create_pointset(e, t, n, s, o, r) {
                    return [e, t, n = n || "", s, o].concat(r)
                }
                modify_pointset(e, t, n, s) {
                    return [e, t, n = n || ""].concat(s)
                }
                remove_pointset(e, t) {
                    return [e, t]
                }
                request_more_tickmarks(e, t, n) {
                    return [e, t, n]
                }
                get_first_bar_time(e, t, n) {
                    return [e, t, n]
                }
                replay_create_session(e) {
                    return [e]
                }
                replay_delete_session(e) {
                    return [e]
                }
                replay_reset(e, t, n) {
                    return [e, t, n]
                }
                replay_start(e, t, n) {
                    return [e, t, n]
                }
                replay_stop(e, t) {
                    return [e, t]
                }
                replay_step(e, t, n) {
                    return [e, t, n]
                }
                replay_add_series(e, t, n, s) {
                    return [e, t, n, s]
                }
                replay_remove_series(e, t, n, s) {
                    return [e, t, n, s]
                }
                replay_set_resolution(e, t, n) {
                    return [e, t, n]
                }
                convertTimescaleResponse(e) {
                    const t = e.marks.map((e => ({
                            span: e[0],
                            time: e[1],
                            index: e[2]
                        }))),
                        n = void 0 === e.index_diff ? [] : e.index_diff.map((e => ({
                            old: e[0],
                            new: e[1]
                        })));
                    return { ...e,
                        marks: t,
                        index_diff: n
                    }
                }
                getDataUpdateObjects(e) {
                    return this.getTimescaleObjects(e)
                }
                getTimescaleObjects(e) {
                    return e.params[0]
                }
                getTimescaleChangeset(e) {
                    return e.params[1]
                }
                prepareDataUpdateObjects(e, t, n) {
                    for (const s of Object.keys(t)) {
                        const o = t[s],
                            r = {
                                customId: s,
                                turnaround: o.turnaround,
                                plots: o.series ? o.series : o.plots
                            };
                        o.ns && (r.nonseries = o.ns), o.lbs && (r.lastBar = {
                            closeTime: o.lbs.bar_close_time
                        });
                        for (const e of r.plots)
                            for (let t = 0; t < e.value.length; ++t) 1e100 === e.value[t] && (e.value[t] = void 0);
                        n(e, s, {
                            method: "data_update",
                            params: r
                        })
                    }
                }
                unpack(e) {
                    const t = JSON.parse(e);
                    t.m && t.p && (t.method = t.m, t.params = t.p, t.time = t.t);
                    const n = t.params[1];
                    switch (t.method) {
                        case "qsd":
                            t.method = "quote_symbol_data", n.symbolname = n.n, n.status = n.s, n.values = n.v, n.values.change = n.v.ch, n.values.last_price = n.v.lp, n.values.change_percent = n.v.chp, delete n.n, delete n.s, delete n.v, delete n.values.ch, delete n.values.lp, delete n.values.chp;
                            break;
                        case "du":
                            t.method = "data_update", f(n);
                            break;
                        case "clear_data":
                            for (const e of Object.keys(n)) n[e].turnaround = n[e].t;
                            break;
                        case "timescale_update":
                            f(n)
                    }
                    return t
                }
                prepareEncodeMessage(e, t) {
                    return JSON.stringify({
                        m: e,
                        p: t
                    })
                }
                request_data_problems() {
                    return []
                }
            }
            var y = n(869403),
                w = n.n(y),
                b = n(254204),
                v = n(58575);
            const k = (0, h.getLogger)("ChartApi.TrafficMeter", {
                    maxCount: 20,
                    color: "#268"
                }),
                C = (0, i.isFeatureEnabled)("multiple_SoS"),
                S = ["", "KB", "MB", "GB", "TB"];

            function q(e) {
                if (0 === e) return "0";
                const t = (0, l.toInt)(Math.floor(Math.log(e) / Math.log(1024)));
                return (e / Math.pow(1024, t)).toFixed(2) + S[t]
            }
            class T {
                constructor(e, t) {
                    this.sessionid = null, this._banInfo = new(c())(null), this._isAuthTokenLoaded = !1, this._authTokenDfd = null, this._serverTimeOffset = 0, this._serverTimeBasePoint = Date.now() - performance.now(), this._initCachePromise = async function(e) {
                        try {
                            const t = await caches.open(e);
                            return new d(t)
                        } catch (e) {
                            return new u
                        }
                    }("TVChartApi"), this._trafficStats = {
                        total: 0,
                        sinceConnect: 0,
                        lastChunk: 0
                    }, this._studyCounter = 0, this._childStudyCounter = 0, this._lowQualityEnabled = !1, this._brokerId = "", this._sendingQueuedRequestsCount = 0, this._modifyStudyMap = new Map, this._disconnectCount = 0, this._isConnected = !1, this._dataHandleModule = new g, this._notificationHandlers = {}, this._connectionsLimitReached = new(c())(!1), this._deviceConnectionClosed = new(w()), this._wsBackendConnection = e, this._chartApiLog = t, this._wsBackendConnection.onReconnect(this._bindSocketEvents.bind(this)), this._wsBackendConnection.setLogger(t, h.getLogHistory), this._wsBackendConnection.setTelemetry(_.telemetry), this._bindSocketEvents(), setInterval((() => {
                        k.logNormal("Last 30 seconds:" + q(this._trafficStats.lastChunk) + " Since last connect:" + q(this._trafficStats.sinceConnect) + " Total traffic:" + q(this._trafficStats.total)), this._trafficStats.lastChunk = 0
                    }), 3e4), this._connectionsLimitReached.subscribe((e => {
                        e && this.disconnect()
                    }))
                }
                connect(e) {
                    this._connectOnlyOptions = e, this._wsBackendConnection.isConnected() || this._wsBackendConnection.isConnecting() || this._wsBackendConnection.connect()
                }
                disconnect() {
                    this._wsBackendConnection.disconnect()
                }
                connectionBanInfo() {
                    return this._banInfo.readonly()
                }
                connectionsLimitReached() {
                    return this._connectionsLimitReached.readonly()
                }
                serverTime() {
                    return Math.round(this._serverTimeBasePoint + performance.now())
                }
                serverTimeOffset() {
                    return this._serverTimeOffset
                }
                canCreateStudy(e) {
                    if (!(0, r.enabled)(m.ProductFeatures.STUDY_ON_STUDY)) return !1;
                    const t = (0, o.ensureNotNull)((0, r.getConfig)(m.ProductFeatures.STUDY_ON_STUDY));
                    return !0 === e ? this._childStudyCounter < t.child_limit : this._studyCounter < t.limit
                }
                createStudy(e, t, n, s, o, r, i, a) {
                    if (!this.canCreateStudy()) return (0, b.showTooManyStudiesNotice)(), !1;
                    this._notificationHandlers[e][t] = new v.HandlerInfo(i, t);
                    let c = !1;
                    return c = C ? this._sendRequest("create_study", [e, t, n, s, o, r]) : this._sendRequest(!0 === a ? "create_child_study" : "create_study", [e, t, n, s, o, r]), !1 !== c && (this._studyCounter++, a && this._childStudyCounter++, c)
                }
                rebindStudy(e, t, n, s, o, r, i, a) {
                    if (1 === a) {
                        if (!this.canCreateStudy(!0)) return !1;
                        this._childStudyCounter++
                    } else 2 === a && this._childStudyCounter--;
                    return n = n || "", this._notificationHandlers[e][t] = new v.HandlerInfo(i, t), this._sendRequest("child_study_rebind", [e, t, n, s, o, r]), !0
                }
                modifyStudy(e, t, n, r, i, a) {
                    var c, d;
                    a = null != a ? a : 0, this._childStudyCounter += a;
                    const u = e + t;
                    if (this._notificationHandlers[e][t] = new v.HandlerInfo(i, t), this._modifyStudyMap.has(u)) {
                        return null === (c = (0, o.ensureDefined)(this._modifyStudyMap.get(u))(e, t, n, r)) || void 0 === c || c
                    } {
                        const o = (0, s.default)(((e, t, n, s) => this._sendRequest("modify_study", [e, t, n, s])), 500, {
                            maxWait: 550
                        });
                        return this._modifyStudyMap.set(u, o), null === (d = o(e, t, n, r)) || void 0 === d || d
                    }
                }
                unpack(e) {
                    return this._dataHandleModule.unpack(e)
                }
                deviceConnectionClosed() {
                    return this._deviceConnectionClosed
                }
                sendRequest(e, t) {
                    return this._sendRequest(e, t)
                }
                _init() {
                    this._notificationHandlers = {}, this._studyCounter = 0, this._childStudyCounter = 0, this._modifyStudyMap = new Map
                }
                _onMessage(e) {
                    this._calcTrafficStats(e);
                    const t = this.unpack(e);
                    "protocol_switched" !== t.method ? "protocol_error" !== t.method ? "notify_user" !== t.method || "connections limit reached" !== t.params[0].reason ? this._dispatchNotification(t, e) : this._deviceConnectionClosed.fire(t.params[0].device, t.params[0].time) : this._processProtocolError(t) : this._chartApiLog.logError("Unexpected protocol changing request, try skipping. Requested protocol:" + t.params[0])
                }
                _processProtocolError(e) {
                    const t = e.params[0];
                    this._chartApiLog.logError(`Protocol error. Reason=${t}.`), "banned" !== t && "banned by user_id" !== t && "banned by ip" !== t || (this._banInfo.setValue({
                        reason: t
                    }), this.disconnect()), this._connectionsLimitReached.setValue("user connections limit reached" === t)
                }
                _bindSocketEvents() {
                    this.connectDfd = new Promise(((e, t) => {
                        this._wsBackendConnection.on("connect", (() => {
                            this._onConnect(), e()
                        })), this._wsBackendConnection.on("message", this._onMessage.bind(this)), this._wsBackendConnection.on("disconnect", (() => {
                            this._authTokenDfd && (this._authTokenDfd = null), this._onDataProblemsPromiseErrback && this._onDataProblemsPromiseErrback(), this._isConnected = !1, this._studyCounter = 0, this._notifySessions({
                                method: "disconnected",
                                params: []
                            }), this._banInfo.value() || delete this._metadataCallback, this._disconnectCount = (this._disconnectCount || 0) + 1, this._wsBackendConnection.isConnected() && (this._telemetryDisconnectTimeout = setTimeout((() => {
                                    _.telemetry.sendChartReport("disconnect")
                                }), 5e3),
                                this._wsBackendConnection.isMaxReconnects() && (this._notifySessions({
                                    method: "reconnect_bailout",
                                    params: []
                                }), t(), _.telemetry.sendChartReport("reconnect_bailout")))
                        }))
                    }))
                }
                _calcTrafficStats(e) {
                    const t = e.length;
                    this._trafficStats.total += t, this._trafficStats.sinceConnect += t, this._trafficStats.lastChunk += t
                }
            }
        },
        407951: (e, t, n) => {
            "use strict";
            var s = n(758337).declareClassAsPureInterface;

            function o() {}
            TradingView.WEB_SOCKET_WAS_CONNECTED = !1, o.prototype.defaultResolutions = function() {}, o.prototype.availableCurrencies = function() {}, o.prototype.availableUnits = function() {}, o.prototype.supportedSymbolsTypes = function() {}, o.prototype.symbolsGrouping = function() {}, o.prototype.quoteCreateSession = function(e) {}, o.prototype.quoteDeleteSession = function(e) {}, o.prototype.quoteSetFields = function(e, t) {}, o.prototype.quoteAddSymbols = function(e, t) {}, o.prototype.quoteRemoveSymbols = function(e, t) {}, o.prototype.quoteFastSymbols = function(e, t) {}, o.prototype.depthCreateSession = function(e, t, n) {}, o.prototype.depthDeleteSession = function(e) {}, o.prototype.depthSetSymbol = function(e, t) {}, o.prototype.depthClearSymbol = function(e) {}, o.prototype.depthSetScale = function(e, t) {}, o.prototype.chartCreateSession = function(e, t) {}, o.prototype.chartDeleteSession = function(e) {}, o.prototype.createSession = function(e, t) {}, o.prototype.removeSession = function(e) {}, o.prototype.connected = function() {}, o.prototype.connect = function() {}, o.prototype.disconnect = function() {}, o.prototype.switchTimezone = function(e, t) {}, o.prototype.resolveSymbol = function(e, t, n, s) {}, o.prototype.createSeries = function(e, t, n, s, o, r, i, a) {}, o.prototype.removeSeries = function(e, t, n) {}, o.prototype.modifySeries = function(e, t, n, s, o, r, i) {}, o.prototype.requestMoreData = function(e, t, n, s) {}, o.prototype.requestMetadata = function(e, t, n) {}, o.prototype.canCreateStudy = function(e, t) {}, o.prototype.createStudy = function(e, t, n, s, o, r, i) {}, o.prototype.rebindStudy = function(e, t, n, s, o, r, i, a) {}, o.prototype.removeStudy = function(e, t, n) {}, o.prototype.modifyStudy = function(e, t, n, s, o) {}, o.prototype.createPointset = function(e, t, n, s, o, r, i) {}, o.prototype.modifyPointset = function(e, t, n, s, o) {}, o.prototype.removePointset = function(e, t, n) {}, o.prototype.requestMoreTickmarks = function(e, t, n, s) {}, o.prototype.requestFirstBarTime = function(e, t, n, s) {}, o.prototype._invokeHandler = function(e, t) {}, o.prototype._sendRequest = function(e, t) {}, o.prototype._onMessage = function(e) {}, o.prototype._dispatchNotification = function(e) {}, o.prototype._invokeNotificationHandler = function(e, t, n) {}, o.prototype._notifySessions = function(e) {}, o.prototype.unpack = function(e) {}, o.prototype.searchSymbols = function(e, t, n, s, o, r, i, a, c, d) {}, o.prototype.serverTimeOffset = function() {}, o.prototype.getMarks = function(e, t, n, s, o) {}, o.prototype.getTimescaleMarks = function(e, t, n, s, o) {}, s(o, "ChartApiInterface"), e.exports.ChartApiInterface = o
        },
        386981: (e, t, n) => {
            "use strict";
            e = n.nmd(e);
            var s = !1,
                o = !1,
                r = !1,
                i = n(822914).default,
                a = n(407951).ChartApiInterface;
            const {
                HandlerInfo: c
            } = n(58575);
            var d = n(982987).AuthToken,
                u = n(66974),
                l = n(175203).telemetry,
                h = n(495046),
                _ = n(516986),
                m = n(758337).requireFullInterfaceImplementation,
                p = n(125226).isFeatureEnabled,
                f = n(314802).isOnMobileAppPage,
                g = n(778716).ResponseMethods,
                y = n(272001),
                w = n(638456).onWidget,
                b = y.getLogger("ChartApi.Core", {
                    color: "#706"
                }),
                v = y.getLogger("ChartApi.ChartSession", {
                    color: "#706"
                }),
                k = y.getLogger("ChartApi.ChartSession", {
                    highRate: !0,
                    maxCount: 100,
                    color: "#706"
                }),
                C = y.getLogger("ChartApi.ChartSession", {
                    maxCount: 0,
                    color: "#706"
                }),
                S = y.getLogger("ChartApi.ChartSession", {
                    maxCount: 50,
                    color: "#706"
                }),
                q = y.getLogger("ChartApi.QuoteSession", {
                    maxCount: 50,
                    color: "#660"
                }),
                T = y.getLogger("ChartApi.QuoteSession", {
                    highRate: !0,
                    maxCount: 10,
                    color: "#660"
                }),
                R = n(711242),
                M = n(72822).errorToString,
                D = n(890740).fetch,
                N = n(743783),
                E = n(374430).TIMEFRAMETYPE,
                {
                    getLogoUrlResolver: P,
                    LogoSize: I
                } = n(849204);
            const {
                TVChartApiBase: H
            } = n(480905);
            var x = p("broker_id_session"),
                A = p("websocket_send_locale") && !f("any"),
                O = p("tick_intervals") && !w(),
                B = null;

            function L() {
                if (null === B) {
                    const e = document.querySelector('link[rel~="conversions-config"]'),
                        t = new URL(e.href);
                    B = D(t.toString(), {
                        method: "GET"
                    }).then((function(e) {
                        if (!e.ok) throw new Error("Response status is not success");
                        return e.json()
                    })).then((e => {
                        const t = P();
                        return e.currencies.forEach((e => {
                            void 0 !== e.logoid && (e.logoUrl = t.getSymbolLogoUrl(e.logoid, I.Medium))
                        })), e
                    }))
                }
                return B
            }

            function U(e) {
                if (null === e) return "";
                if (e.type === E.PeriodBack) {
                    var t = e.value;
                    return "YTD" !== t && "D" === t.slice(-1) && (t = t.slice(0, -1)), t
                }
                return "r," + e.from + ":" + e.to
            }
            class V extends H {
                constructor(e) {
                    super(e, b), this._notificationHandlers = {}, this._sessions = {}, this._pendingMessagesQueue = []
                }
                defaultResolutions() {
                    var e = ["1", "3", "5", "15", "30", "45", "60", "120", "180", "240", "1D", "1W", "1M", "3M", "6M", "12M", "1R", "10R", "100R", "1000R"];
                    if (!h.enabled("widget")) {
                        var t = ["1S", "5S", "10S", "15S", "30S"];
                        return O && (t = ["1T", "10T", "100T", "1000T"].concat(t)), t.concat(e)
                    }
                    return e
                }
                availableCurrencies() {
                    return L().then((e => e.currencies))
                }
                availableUnits() {
                    return L().then((e => {
                        const t = {};
                        for (const n of e.units) t[n.type] || (t[n.type] = []), t[n.type].push(n);
                        return t
                    }))
                }
                supportedSymbolsTypes() {
                    return "bovespa" === TradingView.widgetCustomer ? R.filter((function(e) {
                        return -1 !== ["", "stock", "futures", "index"].indexOf(e.value)
                    })) : "cme" === TradingView.widgetCustomer ? R.filter((function(e) {
                        return e.value !== _.types.QUANDL
                    })) : R
                }
                symbolsGrouping() {
                    return {
                        futures: /^(.+?)([12]!|\w\d{4})?$/
                    }
                }
                enableLowQualityMode() {
                    this._lowQualityEnabled = !0, this._sendLowQualityModeIfEnabled()
                }
                _sendLowQualityModeIfEnabled() {
                    this._lowQualityEnabled && this.connected() && this._sendRequest("set_data_quality", [])
                }
                setLoadNew(e) {
                    this._loadNewBars = !!e
                }
                quoteCreateSession(e) {
                    return this._sendRequest("quote_create_session", [e])
                }
                quoteDeleteSession(e) {
                    return this._sendRequest("quote_delete_session", [e])
                }
                quoteSetFields(e, t) {
                    return this._sendRequest("quote_set_fields", [e, t])
                }
                quoteAddSymbols(e, t) {
                    return this._sendRequest("quote_add_symbols", [e, t])
                }
                quoteRemoveSymbols(e, t) {
                    return this._sendRequest("quote_remove_symbols", [e, t])
                }
                quoteFastSymbols(e, t) {
                    return this._sendRequest("quote_fast_symbols", [e, t])
                }
                quoteHibernateAll(e) {
                    return this._sendRequest("quote_hibernate_all", [e])
                }
                depthCreateSession(e, t, n) {
                    return this._sendRequest("depth_create_session", [e, t, n])
                }
                depthDeleteSession(e) {
                    return this._sendRequest("depth_delete_session", [e])
                }
                depthSetSymbol(e, t) {
                    return this._sendRequest("depth_set_symbol", [e, t])
                }
                depthClearSymbol(e) {
                    return this._sendRequest("depth_clear_symbol", [e])
                }
                depthSetScale(e, t) {
                    return this._sendRequest("depth_set_scale", [e, t])
                }
                chartCreateSession(e, t) {
                    return this._sendRequest("chart_create_session", [e, t])
                }
                chartDeleteSession(e) {
                    return this._sendRequest("chart_delete_session", [e])
                }
                createSession(e, t) {
                    this._sessions[e] = t, this._notificationHandlers[e] = {}, this.connected() && this._isAuthTokenLoaded && t.onMessage({
                        method: "connected",
                        params: []
                    })
                }
                removeSession(e) {
                    delete this._sessions[e], delete this._notificationHandlers[e]
                }
                connected() {
                    return !!this._isConnected
                }
                setBroker(e) {
                    return e === this._brokerId || (this._brokerId = e, this._sendBrokerIdToSession(this._brokerId))
                }
                disconnectReason(e) {
                    return 1e3 === e ? "Normal closure, meaning that the purpose for which the connection was established has been fulfilled." : 1001 === e ? 'An endpoint is "going away", such as a server going down or a browser having navigated away from a page.' : 1002 === e ? "An endpoint is terminating the connection due to a protocol error" : 1003 === e ? "An endpoint is terminating the connection because it has received a type of data it cannot accept (e.g., an endpoint that understands only text data MAY send this if it receives a binary message)." : 1004 === e ? "Reserved. The specific meaning might be defined in the future." : 1005 === e ? "No status code was actually present." : 1006 === e ? "The connection was closed abnormally, e.g., without sending or receiving a Close control frame" : 1007 === e ? "An endpoint is terminating the connection because it has received data within a message that was not consistent with the type of the message (e.g., non-UTF-8 [http://tools.ietf.org/html/rfc3629] data within a text message)." : 1008 === e ? 'An endpoint is terminating the connection because it has received a message that "violates its policy". This reason is given either if there is no other sutible reason, or if there is a need to hide specific details about the policy.' : 1009 === e ? "An endpoint is terminating the connection because it has received a message that is too big for it to process." : 1010 === e ? "An endpoint (client) is terminating the connection because it has expected the server to negotiate one or more extension, but the server didn't return them in the response message of the WebSocket handshake. <br /> Specifically, the extensions that are needed are: " + event.reason : 1011 === e ? "A server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request." : 1015 === e ? "The connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified)." : "Unknown reason"
                }
                _sendBrokerIdToSession(e) {
                    return !x || this._sendRequest("set_broker", [e])
                }
                _getAuthTokenDfd(e) {
                    if (this._loadNewBars) return Promise.resolve("load_new_token");
                    if (h.enabled("widget") || -1 !== window.location.search.indexOf("widget_token") || -1 !== window.location.hash.indexOf("widget_token")) {
                        var t = window.TradingView && window.TradingView.widgetCustomer || "";
                        return Promise.resolve(N[t] || "widget_user_token")
                    }
                    if (!window.is_authenticated) return Promise.resolve("unauthorized_user_token");
                    var n = this;
                    if (!n._authTokenManager) {
                        var s = new d;
                        n._authTokenManager = s, n._authTokenManager.invalidated.subscribe(null, (function(e) {
                            n._authTokenManager.get().then((function(e) {
                                e && n.connected() && n._sendRequest("set_auth_token", [e])
                            }))
                        }))
                    }
                    return n._authTokenManager.get(e)
                }
                _onConnect() {
                    if (!this.connected()) {
                        this._trafficStats.sinceConnect = 0, this._isAuthTokenLoaded = !1;
                        var e = this;
                        if (this._connectOnlyOptions = this._connectOnlyOptions || {}, this._authTokenDfd = this._getAuthTokenDfd(this._connectOnlyOptions.tokenGrabSession), this._connectOnlyOptions = {}, this.sessionid = this._wsBackendConnection.getSessionId(), this.sessionid && !this._isConnected) {
                            this._pendingMessagesQueue = [], this._sendingQueuedRequestsCount = 0, this._isConnected = !0, this._banInfo.setValue(null), this._connectionsLimitReached.setValue(!1);
                            var t = JSON.parse(this.sessionid);
                            this._sendLowQualityModeIfEnabled(), this._metadataServerHash = t.studies_metadata_hash || null;
                            var n = this._wsBackendConnection.getConnectionEstablished();
                            try {
                                var s = (performance.now() - n) / 1e3,
                                    r = t.timestamp + s;
                                this._serverTimeOffset = r - Date.now() / 1e3, this._serverTimeBasePoint = Math.round(1e3 * t.timestamp - n)
                            } catch (e) {
                                this._serverTimeOffset = 0, this._serverTimeBasePoint = Date.now() - performance.now()
                            }
                            if (b.logInfo("Time shift with server:" + Math.round(this._serverTimeOffset) + " seconds."), this._authTokenDfd) {
                                this._sendingQueuedRequestsCount += 1, b.logInfo("Wait for auth token before send messages");
                                var i = this._authTokenDfd;
                                i.then((function(t) {
                                    if (null !== e._authTokenDfd && e._authTokenDfd === i) {
                                        if (b.logNormal("Auth token request is finished, token: " + Boolean(t)), e._authTokenDfd = null, t) {
                                            const n = [{
                                                method: "set_auth_token",
                                                args: [t]
                                            }];
                                            if (A) {
                                                const e = window.initData && window.initData.currentLocaleInfo;
                                                e && n.push({
                                                    method: "set_locale",
                                                    args: [e.iso, e.flag.toUpperCase()]
                                                })
                                            }
                                            e._pendingMessagesQueue.unshift(...n)
                                        }
                                        e._onSendingQueueRequestFinished(), e._isAuthTokenLoaded = !0, e._notifySessions({
                                            method: "connected",
                                            params: []
                                        })
                                    } else b.logNormal("Comes auth token after requesting new token or after socket disconnected")
                                })).catch((function(e) {
                                    b.logNormal(M(e))
                                }))
                            } else b.logWarn("Deferred auth token object is not valid"), this._isAuthTokenLoaded = !0;
                            "" !== this._brokerId && this._sendBrokerIdToSession(this._brokerId);
                            var a = this._wsBackendConnection.getConnectionStart();
                            TradingView.WEB_SOCKET_WAS_CONNECTED = !0, l.setSessionInfo(this.sessionid), l.sendChartReport("websocket_connected"), l.sendChartReport("websocket_connection_time_frame", {
                                value: n - a
                            }), l.sendChartReport("reconnect_count_frame", {
                                value: this._wsBackendConnection.getReconnectCount()
                            }), l.sendChartReport("redirect_count_frame", {
                                value: this._wsBackendConnection.getRedirectCount()
                            }), o || (o = !0,
                                l.sendChartReport("before_websocket_connection_time_frame", {
                                    value: a
                                })), this._wsBackendConnection.resetCounters(), clearTimeout(this._telemetryDisconnectTimeout)
                        }
                    }
                }
                switchTimezone(e, t) {
                    return this._sendRequest("switch_timezone", [e, t])
                }
                resolveSymbol(e, t, n, s) {
                    return l.timeCounters.series["resolve_symbol_" + e] = window.performance.now(), this._notificationHandlers[e][t] = new c(s, t), this._sendRequest("resolve_symbol", [e, t, n])
                }
                createSeries(e, t, n, s, o, r, i, a) {
                    this._notificationHandlers[e][t] = new c(a, t), l.timeCounters.series.marks.push("create_series_" + e);
                    const d = U(i);
                    return this._sendRequest("create_series", [e, t, n, s, o, r, d])
                }
                removeSeries(e, t) {
                    return delete this._notificationHandlers[e][t], this._sendRequest("remove_series", [e, t])
                }
                modifySeries(e, t, n, s, o, r, i) {
                    this._notificationHandlers[e][t] = new c(i, t);
                    const a = U(r);
                    return this._sendRequest("modify_series", [e, t, n, s, o, a])
                }
                requestMoreData(e, t, n, s) {
                    if ("number" != typeof n) throw new Error("unsupported request to load more data, bars=" + n);
                    return this._notificationHandlers[e][t] = new c(s, t), this._sendRequest("request_more_data", [e, t, n])
                }
                requestMetadata(e, t, n) {
                    var s = this;
                    if (s._metadataCallback) s._metadataCallback.handlers.push(n);
                    else {
                        var o = h.enabled("widget"),
                            r = o ? "studies_metadata_widget" : "studies_metadata",
                            a = "pro_hash",
                            c = [];
                        s._metadataCallback = e => {
                            s._metadataCallback = null, this._initCachePromise.then((t => {
                                t.setValue(r, i(e)).then((function() {
                                    if (b.logNormal("Updated studies_metadata cache"), !o) {
                                        var e = pro.hash();
                                        t.setValue(a, i(e)).then((function() {
                                            b.logNormal("Updated pro_hash cache")
                                        })).catch((function(e) {
                                            b.logError("Cannot update pro_hash cache, reason: " + e)
                                        }))
                                    }
                                })).catch((function(e) {
                                    b.logError("Cannot update studies_metadata cache, reason: " + e)
                                }));
                                for (var n = 0; n < c.length; n++) {
                                    (0, c[n])(i(e))
                                }
                            }))
                        }, s._metadataCallback.handlers = c, s._metadataCallback.handlers.push(n), b.logNormal("Requesting pro hash"), this._initCachePromise.then((n => {
                            n.getValue(a).then((function(a) {
                                var c = pro.hash();
                                null !== a && a === c || o ? (b.logNormal("Pro hash has not changed, requesting from local"), n.getValue(r).then((function(n) {
                                    var o = null !== n && n.params[1].hash || null;
                                    if (null === o || null === s._metadataServerHash || s._metadataServerHash !== o) return b.logNormal("Metadata hash has changed (cached:'" + o + "', server:'" + s._metadataServerHash + "'')"), void s._requestMetadataFromServer(e, t, s._metadataCallback);
                                    if (pro.hasPackage("tv-volumebyprice") && void 0 === n.params[1].metainfo.find((function(e) {
                                            return e.id.includes("@tv-volumebyprice")
                                        }))) return b.logNormal("De-sync detected! pro.hash contains VbPR studies, but data from cache doesn't and pro.hash isn't changed, pro.hash=" + c), void s._requestMetadataFromServer(e, t, s._metadataCallback);
                                    if (b.logNormal("Using studies_metadata from browser cache"), s._metadataCallback) {
                                        for (var r = 0; r < s._metadataCallback.handlers.length; r++) {
                                            (0, s._metadataCallback.handlers[r])(i(n))
                                        }
                                        s._metadataCallback = null
                                    } else b.logWarn("Cached metadata received, but callback expired")
                                })).catch((function(n) {
                                    b.logError("Cannot get studies_metadata, reason: " + n), s._requestMetadataFromServer(e, t, s._metadataCallback)
                                }))) : (b.logNormal("Pro hash has changed (cached: '" + a + "', current:'" + c + "')"), s._requestMetadataFromServer(e, t, s._metadataCallback))
                            })).catch((function(n) {
                                b.logError("Cannot get studies_metadata, reason: " + n), s._requestMetadataFromServer(e, t, s._metadataCallback)
                            }))
                        }))
                    }
                }
                authTokenManager() {
                    return this._authTokenManager
                }
                _requestMetadataFromServer(e, t, n) {
                    return !!n && (b.logNormal("Request studies_metadata from server"), this._notificationHandlers[e][t] = new c(n, t), this._sendRequest("request_studies_metadata", [e, t]))
                }
                removeStudy(e, t, n) {
                    const s = e + t;
                    delete this._notificationHandlers[e][t], this._modifyStudyMap.has(s) && this._modifyStudyMap.get(s).flush();
                    var o = this._sendRequest("remove_study", [e, t]);
                    return !1 !== o && (this._modifyStudyMap.delete(s), this._studyCounter--, n && this._childStudyCounter--, o)
                }
                createPointset(e, t, n, s, o, r, i) {
                    return this._notificationHandlers[e][t] = new c(i, t), this._sendRequest("create_pointset", [e, t, n, s, o, r])
                }
                modifyPointset(e, t, n, s, o) {
                    return this._notificationHandlers[e][t] = new c(o, t), this._sendRequest("modify_pointset", [e, t, n, s])
                }
                removePointset(e, t, n) {
                    return this._notificationHandlers[e][t] = new c(n, t), this._sendRequest("remove_pointset", [e, t])
                }
                requestMoreTickmarks(e, t, n, s) {
                    return this._notificationHandlers[e][t] = new c(s, t), this._sendRequest("request_more_tickmarks", [e, t, n])
                }
                requestFirstBarTime(e, t, n, s) {
                    return this._notificationHandlers[e][t] = new c(s, t), this._sendRequest("get_first_bar_time", [e, t, n])
                }
                redirectCount() {
                    return this._wsBackendConnection.getRedirectCount()
                }
                disconnectCount() {
                    return this._disconnectCount || 0
                }
                _invokeHandler(e, t) {
                    e && e(t)
                }
                _flushPendingMessages() {
                    b.logInfo("Flush pending messages. Count=" + this._pendingMessagesQueue.length), this._pendingMessagesQueue.forEach((function(e) {
                        this._sendRequest(e.method, e.args)
                    }), this), this._pendingMessagesQueue = []
                }
                _sendRequest(e, t) {
                    if (0 !== this._sendingQueuedRequestsCount) return this._pendingMessagesQueue.push({
                        method: e,
                        args: t
                    }), !0;
                    var n = this._dataHandleModule[e].apply(this._dataHandleModule, t),
                        s = {
                            m: e,
                            p: n
                        },
                        o = JSON.stringify(s);
                    if (n.length > 0) {
                        var r = n[0];
                        r.startsWith("qs_") ? q.logNormal("send: " + o) : r.startsWith("cs_") && v.logNormal("send: " + o)
                    } else b.logNormal("send: " + o);
                    var i = this._dataHandleModule.prepareEncodeMessage(e, n);
                    return this._wsBackendConnection.send(i)
                }
                _onSendingQueueRequestFinished() {
                    this._sendingQueuedRequestsCount -= 1, b.logInfo("Sending queue request finished. Remaining pending requests=" + this._sendingQueuedRequestsCount), this._sendingQueuedRequestsCount < 0 && b.logError("Invalid queue state=" + this._sendingQueuedRequestsCount), 0 === this._sendingQueuedRequestsCount && this._flushPendingMessages()
                }
                _convertTimescaleResponse(e) {
                    return this._dataHandleModule.convertTimescaleResponse(e)
                }
                _appendDuration(e, t) {
                    return e ? t + ", duration: " + Math.round(Date.now() / 1e3 - e + this._serverTimeOffset) + "s" : t
                }
                _dispatchNotification(e, t) {
                    if ("request_data_problems" === e.method && this._onDataProblemsPromiseCb) this._onDataProblemsPromiseCb(e.params);
                    else {
                        var n = e.params.shift();
                        if (this._notificationHandlers[n]) {
                            var o = e.params[0];
                            if ("symbol_resolved" === e.method) {
                                var i = e.params[1].full_name;
                                l.sendChartReport("symbol_resolved", {
                                    count: 1,
                                    additional: {
                                        symbol: i
                                    }
                                });
                                var a = l.timeCounters.series["resolve_symbol_" + n];
                                "number" == typeof a && l.sendChartReport("symbol_resolve_time_frame", {
                                    value: window.performance.now() - a,
                                    additional: {
                                        symbol: i
                                    }
                                })
                            }
                            if (["series_error", "series_completed"].includes(e.method) && l.timeCounters.series.marks.length > 0) {
                                var c = "create_series_" + n,
                                    d = l.timeCounters.series.marks.indexOf(c);
                                d >= 0 && l.timeCounters.series.marks.splice(d, 1)
                            }
                            r || "series_error" !== e.method || (r = !0);
                            var u = this._wsBackendConnection.getConnectionEstablished();
                            if (null !== u && "series_completed" === e.method && (r || (r = !0, l.sendChartReport("first_series_full_time_frame", {
                                    value: window.performance.now() - u
                                }), l.timeCounters.series.marks = []), s || (s = !0, l.sendChartReport("page_full_load_time_frame", {
                                    value: window.performance.now()
                                }))), n.startsWith("cs_")) {
                                var h = "recv: " + t;
                                "data_update" === e.method ? (h = y.isHighRateEnabled() ? h : h.slice(0, 500), k.logNormal(this._appendDuration(e.time, h))) : "study_loading" === e.method ? C.logNormal(this._appendDuration(e.time, h)) : "tickmark_update" === e.method ? S.logNormal(this._appendDuration(e.time, h)) : v.logNormal(this._appendDuration(e.time, h))
                            }
                            if (n.startsWith("qs_"))("quote_symbol_data" === e.method ? T.logNormal : q.logNormal)("recv: " + t);
                            switch (e.method) {
                                case "timescale_update":
                                    var _ = this._dataHandleModule.getTimescaleObjects(e),
                                        m = this._dataHandleModule.getTimescaleChangeset(e);
                                    (p = this._convertTimescaleResponse(m)).clear = 0 === p.changes.length && 0 === p.index_diff.length && 0 === p.marks.length, this._sessions[n].onMessage({
                                        method: "timescale_update",
                                        params: p
                                    }), this._dataHandleModule.prepareDataUpdateObjects(n, _, function(e, t, n) {
                                        this._invokeNotificationHandler(e, t, n)
                                    }.bind(this));
                                    break;
                                case "tickmark_update":
                                    var p;
                                    (p = this._convertTimescaleResponse(e.params[0])).changes = [], this._sessions[n].onMessage({
                                        method: "timescale_update",
                                        params: p
                                    });
                                    break;
                                case "data_update":
                                    _ = this._dataHandleModule.getDataUpdateObjects(e);
                                    this._dataHandleModule.prepareDataUpdateObjects(n, _, function(e, t, n) {
                                        this._invokeNotificationHandler(e, t, n)
                                    }.bind(this));
                                    break;
                                case "index_update":
                                    for (var f in e.params[0]) {
                                        var w = {
                                            method: "index_update",
                                            params: e.params[0][f]
                                        };
                                        this._invokeNotificationHandler(n, f, w)
                                    }
                                    break;
                                case "critical_error":
                                    b.logInfo(new Date + " critical_error session:" + this.sessionid + " reason:" + e.params[0]), l.sendChartReport("critical_error"), this._sessions[n].onMessage({
                                        method: "critical_error",
                                        params: e.params
                                    });
                                    break;
                                case "timescale_completed":
                                case "quote_symbol_data":
                                case "quote_list_fields":
                                case "quote_completed":
                                case "depth_symbol_error":
                                case "depth_symbol_success":
                                case "dd":
                                case "dpu":
                                case "depth_bar_last_value":
                                    this._sessions[n].onMessage({
                                        method: e.method,
                                        params: e.params
                                    });
                                    break;
                                case "clear_data":
                                    for (var R in e.params[0]) this._invokeNotificationHandler(n, R, {
                                        method: "clear_data",
                                        params: e.params[0][R]
                                    });
                                    break;
                                case g.point:
                                case g.resolutions:
                                case g.endOfData:
                                case g.instanceId:
                                    this._sessions[n].onMessage(e);
                                    break;
                                case "series_timeframe":
                                    e.params[4] = function(e) {
                                        if (null == e) return null;
                                        var t = /r,(\d+):(\d+)/.exec(e);
                                        return null !== t ? {
                                            from: Number(t[1]),
                                            to: Number(t[2]),
                                            type: E.TimeRange
                                        } : {
                                            value: e,
                                            type: E.PeriodBack
                                        }
                                    }(e.params[4]), this._invokeNotificationHandler(n, o, e);
                                    break;
                                case "symbol_resolved":
                                    ! function(e) {
                                        if (void 0 === e.corrections) {
                                            var t = e.subsessions.find((function(t) {
                                                return t.id === e.subsession_id
                                            }));
                                            void 0 !== t && (e.corrections = t["session-correction"])
                                        }
                                    }(e.params[1]), this._invokeNotificationHandler(n, o, e);
                                    break;
                                default:
                                    this._invokeNotificationHandler(n, o, e)
                            }
                        }
                    }
                }
                _isStrategy(e, t) {
                    var n = this._notificationHandlers[e][t];
                    return n && n.handler && n.handler.isTVScriptStrategy
                }
                _invokeNotificationHandler(e, t, n) {
                    if (void 0 !== t) {
                        var s = this._notificationHandlers[e][t];
                        0 === n.method.indexOf("replay_") && delete this._notificationHandlers[e][t], void 0 !== s && this._invokeHandler(s.handler, n)
                    }
                }
                _notifySessions(e) {
                    for (var t in this._sessions) {
                        if (!this._sessions.hasOwnProperty(t)) return;
                        var n = this._sessions[t];
                        "function" == typeof n.onMessage && n.onMessage(e)
                    }
                }
                searchSymbols(e, t, n, s, o, r, i, a, c, d) {
                    var h = this;
                    this._symbolSearchRequest && this._symbolSearchRequest.abort();
                    var m = location.protocol + "//" + window.SS_HOST;
                    u.isProd() ? m += "/symbol_search/" : m += "/local_search/", window.SS_URL && (m = window.SS_URL);
                    var p = {
                        text: e,
                        exchange: t,
                        type: n,
                        hl: o,
                        lang: s
                    };
                    window.SS_DOMAIN_PARAMETER && (p.domain = window.SS_DOMAIN_PARAMETER), r && (p.strict = 1), n === _.types.QUANDL && (m = "https://quandlapi.tradingview.com/api/v3/datasets.json", p = {
                        query: e,
                        database_code: t
                    }), i && (p.broker = i, a && (p.tradable = !0), c && (p.unhide = c));
                    var f = Object.keys(p).map((function(e) {
                            return encodeURIComponent(e) + "=" + encodeURIComponent(p[e])
                        })).join("&"),
                        g = new XMLHttpRequest;
                    g.open("GET", m + "?" + f);
                    var y = window.performance.now();

                    function w() {
                        l.sendChartReport("symbol_search_time_frame", {
                            value: window.performance.now() - y
                        })
                    }

                    function b() {
                        w(), l.sendChartReport("symbol_search_http_error"), h._symbolSearchRequest = null
                    }
                    g.addEventListener("load", (function() {
                        var e = JSON.parse(g.responseText);
                        d && d(e), w(), l.sendChartReport("symbol_search_http_status", {
                            value: g.status
                        }), h._symbolSearchRequest = null
                    })), g.addEventListener("error", b), g.addEventListener("timeout", b), this._symbolSearchRequest = g, g.send()
                }
                getMarks(e, t, n, s, o) {
                    throw Error("This method is not implemented")
                }
                getTimescaleMarks(e, t, n, s, o) {
                    throw Error("This method is not implemented")
                }
                getPingInfo() {
                    return this._wsBackendConnection.getPingInfo()
                }
                requestDataProblems() {
                    return this._requestDataProblemsPromise || (this._requestDataProblemsPromise = this.connectDfd.then((() => new Promise(((e, t) => {
                        this._onDataProblemsPromiseErrback = t, this._sendRequest("request_data_problems", []) ? this._onDataProblemsPromiseCb = e : t()
                    })))).finally((() => {
                        this._requestDataProblemsPromise = null
                    }))), this._requestDataProblemsPromise
                }
            }
            m(V, "TVChartApi", a, "ChartApiInterface"), window.ChartApiInstance = new V(window.WSBackendConnection), e && e.exports && (e.exports = V)
        },
        58575: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                HandlerInfo: () => s
            });
            class s {
                constructor(e, t) {
                    this.handler = e, this.customId = t
                }
            }
        },
        374430: (e, t, n) => {
            "use strict";
            var s, o;

            function r(e, t) {
                return "period-back" === e.type && "period-back" === t.type ? e.value === t.value : "time-range" === e.type && "time-range" === t.type && (e.from === t.from && e.to === t.to)
            }
            n.d(t, {
                    Helpers: () => s,
                    TIMEFRAMETYPE: () => o,
                    areEqualTimeFrames: () => r
                }),
                function(e) {
                    e.extractErrorReason = function(e) {
                        return e.params[1]
                    }
                }(s || (s = {})),
                function(e) {
                    e.PeriodBack = "period-back", e.TimeRange = "time-range"
                }(o || (o = {}))
        },
        778716: (e, t, n) => {
            "use strict";
            var s, o;
            n.d(t, {
                    ResponseMethods: () => s,
                    ErrorReasons: () => o
                }),
                function(e) {
                    e.error = "replay_error", e.point = "replay_point", e.ok = "replay_ok", e.resolutions = "replay_resolutions", e.endOfData = "replay_data_end", e.instanceId = "replay_instance_id"
                }(s || (s = {})),
                function(e) {
                    e.tooSmallDelay = "too_small_delay", e.alreadyInAutoplay = "already_in_autoplay", e.nothingToStop = "nothing_to_stop", e.pointTooDeep = "point_too_deep", e.alreadyInSession = "already_in_session", e.thereIsNoSuchSeries = "no_series", e.notAllowedInAutoplay = "not_allow_in_autoplay", e.invalidResolution = "invalid_resolution"
                }(o || (o = {}))
        },
        254204: (e, t, n) => {
            "use strict";
            n.d(t, {
                showTooManyStudiesNotice: () => a
            });
            var s = n(777754),
                o = n(632446),
                r = n(833813),
                i = n(779923);

            function a(e) {
                "number" != typeof e && (e = TradingView.STUDY_COUNT_LIMIT, e = (0, o.getConfig)(r.ProductFeatures.STUDY_ON_STUDY).limit), (0, i.showWarning)({
                    title: s.t(null, void 0, n(533603)),
                    text: s.t(null, void 0, n(470213)).format({
                        number: e
                    })
                })
            }
        },
        72822: (e, t, n) => {
            "use strict";

            function s(e) {
                if (void 0 === e) return "";
                if (e instanceof Error) {
                    let t = e.message;
                    return e.stack && (t += " " + e.stack), t
                }
                return "string" == typeof e ? e.toString() : JSON.stringify(e)
            }
            n.d(t, {
                errorToString: () => s
            })
        },
        743783: e => {
            "use strict";
            e.exports = JSON.parse('{"adx":"widget_user_token-adx","agencialbmcombr":"widget_user_token-agencialbmcombr","ambito":"widget_user_token-ambito","atlcapital":"widget_user_token-atlcapital","bankirosru":"widget_user_token-bankirosru","bbvach":"widget_user_token-bbvach","belugagroupru":"widget_user_token-belugagroupru","bovespa":"widget_user_token-bmfbovespacombr","cincodias":"widget_user_token-cincodias","ceocaD":"widget_user_token-ceocaD","ceocaRT":"widget_user_token-ceocaRT","copees":"widget_user_token-copees","easynvestcombr":"widget_user_token-easynvestcombr","elconfidencial":"widget_user_token-elconfidencial","elespanolcom":"widget_user_token-elespanolcom","elobreroes":"widget_user_token-elobreroes","elnacionalD":"widget_user_token-ElNacionalD","elpaisfinanciero":"widget_user_token-elpaisfinanciero","euqueroinvestir":"widget_user_token-euqueroinvestircom","eurex":"widget_user_token-eurex","eurofins":"widget_user_token-eurofins","epe":"widget_user_token-epe","europapresses":"widget_user_token-europapresses","finanzasD":"widget_user_token-FinanzasD","forbescombr":"widget_user_token-forbescombr","genialinvestimentos":"widget_user_token-genialinvestimentos","healthitalia":"widget_user_token-healthitalia","hegnarno":"widget_user_token-hegnarno","hipotecariocomar":"widget_user_token-hipotecariocomar","investopedia":"widget_user_token-investopedia","ivsgroup":"widget_user_token-ivsgroup","lainformacioncom":"widget_user_token-lainformacioncom","marcopolocombr":"widget_user_token-marcopolocombr","mercadofinancierocom":"widget_user_token-mercadofinancierocom","moex":"widget_user_token-moex","moneytimescombr":"widget_user_token-moneytimescombr","negocios":"widget_user_token-negocios","NoticiasagricolaD":"widget_user_token-noticiasagricolaD","okdiario":"widget_user_token-okdiario","pse":"widget_user_token-pse","poder360":"widget_user_token-poder360","pseD":"widget_user_token-pseD","riyadhcapitalD":"widget_user_token-riyadhcapitalD","riyadhcapitalRT":"widget_user_token-riyadhcapitalRT","qecomqa":"widget_user_token-qecomqa","samolet":"widget_user_token-samolet","seudinheiro":"widget_user_token-seudinheiro","softwareag":"widget_user_token-softwareag","sogeclair":"widget_user_token-sogeclair","sgcompanyit":"widget_user_token-sgcompanyit","sharejunction":"widget_user_token-sharejunction","smartlab-custom":"widget_user_token-smartlab","smartlab":"widget_user_token-smartlab","spacemoneycombr":"widget_user_token-spacemoneycombr","tradersclubbrasil":"widget_user_token-tradersclubbrasil","tradersclubbrasilD":"widget_user_token-tradersclubbrasilD","tradingview":"widget_user_token-tradingview","twitter":"widget_user_token-twitter","vocesaabrilcombr":"widget_user_token-vocesaabrilcombr","xpicombr":"widget_user_token-xpicombr"}')
        }
    }
]);
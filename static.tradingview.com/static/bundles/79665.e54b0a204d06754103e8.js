"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [79665], {
        779665: (e, t, n) => {
            n.r(t), n.d(t, {
                pushStreamMultiplexer: () => R
            });
            var s = n(226722),
                i = n(345848),
                o = n(49437),
                r = n(176975),
                a = n(175203),
                h = n(272001),
                c = n(650151),
                l = n(287545),
                u = n(883660);
            const _ = "PushStream",
                d = (0, h.getLogger)(_);
            var m;
            ! function(e) {
                e[e.EventSource = 0] = "EventSource", e[e.WebSocket = 1] = "WebSocket"
            }(m || (m = {}));
            class g {
                constructor(e, t) {
                    this._channels = [], this._transport = t.transportType === m.EventSource ? new l.PersistentEventSourceTransport(this._onPushStreamMessage.bind(this)) : new u.PersistentWebsocketTransport(this._onPushStreamMessage.bind(this), this._onPushStreamClose.bind(this)), this._settings = t, this._messageHandler = e
                }
                addChannel(e) {
                    (0, c.assert)(!this.hasChannel(e), "Channel already subscribed"), d.logNormal(`Adding channel ${e}`), this._channels.push(e);
                    const {
                        maxSize: t
                    } = this._settings;
                    void 0 !== t && this._channels.length > t && (this._channels = this._channels.slice(this._channels.length - t)), this._transport.setUrl(this._generateUrl())
                }
                removeChannel(e) {
                    const t = this._channels.indexOf(e);
                    (0, c.assert)(-1 !== t, "There is no that channel"), d.logNormal(`Removing channel ${e}`), this._channels.splice(t, 1), this._transport.setUrl(this._generateUrl())
                }
                getChannels() {
                    return this._channels
                }
                hasChannel(e) {
                    return -1 !== this._channels.indexOf(e)
                }
                connectionStatus() {
                    return this._transport.connectionStatus()
                }
                reconnectEvent() {
                    return this._transport.successReconnectReachedEvent()
                }
                connect() {
                    (0, c.assert)(0 !== this._channels.length, "There is no channels"), this._transport.connect()
                }
                disconnect() {
                    this._transport.disconnect()
                }
                getLogs(e) {
                    return (0, h.getRawLogHistory)(e, _)
                }
                _onPushStreamMessage(e) {
                    if ("string" != typeof e) throw new Error("Wrong message type, expected string");
                    const t = JSON.parse(e),
                        n = t.id,
                        s = t.channel; - 2 === n ? d.logWarn("Received unexpected message: about removed the channel") : n > 0 && (d.logDebug(`Received message: id="${n}" channel="${s}"`), this._messageHandler(t.text, n, s))
                }
                _onPushStreamClose(e) {
                    1005 === e.code && a.telemetry.sendChartReport("websocket_code_1005")
                }
                _generateUrl() {
                    const e = this._channels.join("/");
                    return `${this._settings.url}/${this._settings.urlPath}/${e}`
                }
            }
            n(659863);
            class v {
                constructor() {
                    this._handlers = {}, this._specialHandlers = {}
                }
                on(e, t) {
                    const n = this._isSpecialChannel(e) ? this._specialHandlers : this._handlers;
                    n[e] || (n[e] = []), n[e].push(t)
                }
                off(e, t) {
                    const n = this._isSpecialChannel(e) ? this._specialHandlers : this._handlers;
                    if (!(e in n)) return;
                    if (void 0 === t) return void delete n[e];
                    const s = n[e].indexOf(t);
                    s >= 0 && n[e].splice(s, 1)
                }
                emit(e, t, n, s) {
                    this._handlers[n] && this._handlers[n].forEach((i => {
                        i(e, t, n, s)
                    }));
                    for (const i of Object.keys(this._specialHandlers)) {
                        const o = "^" + i.replace(/\*/g, ".*?") + "$";
                        new RegExp(o).test(n) && this._specialHandlers[i].forEach((i => {
                            i(e, t, n, s)
                        }))
                    }
                }
                _isSpecialChannel(e) {
                    return /\*/.test(e)
                }
            }
            class p {
                constructor(e) {
                    this._channels = new Set;
                    const {
                        uid: t,
                        updateRefInterval: n
                    } = e;
                    this._uid = t, this._updateRefInterval = n, this._cache = caches.open("pushstream-channel-counter-v1")
                }
                getChannels() {
                    return [...this._channels]
                }
                async add(e) {
                    this._channels.add(e);
                    const t = new Headers([
                        ["Date", (new Date).toUTCString()]
                    ]);
                    (await this._cache).put(new Request(`/${this._uid}`, {
                        headers: t
                    }), new Response(JSON.stringify([...this._channels]), {
                        headers: t
                    }))
                }
                async remove(e, t) {
                    this._channels.delete(e);
                    const n = await this._cache,
                        s = new Headers([
                            ["Date", (new Date).toUTCString()]
                        ]);
                    n.put(new Request(`/${this._uid}`, {
                        headers: s
                    }), new Response(JSON.stringify([...this._channels]), {
                        headers: s
                    }))
                }
                async countSubscribers(e) {
                    const t = await this._cache,
                        n = await t.keys();
                    return (await Promise.all(n.map((async e => {
                        var n;
                        const s = await t.match(e);
                        return null !== (n = null == s ? void 0 : s.json()) && void 0 !== n ? n : []
                    })))).filter((t => t.includes(e))).length
                }
                async clean() {
                    (await this._cache).delete(`/${this._uid}`)
                }
                async cleanOldRefs() {
                    const e = await this._cache,
                        t = await e.keys(),
                        n = await Promise.all(t.map((t => e.match(t)))),
                        s = [];
                    return n.forEach(((n, i) => {
                        const o = null == n ? void 0 : n.headers.get("date");
                        if (null != o && 2 * this._updateRefInterval < Date.now() - new Date(o).getTime()) {
                            const n = t[i];
                            e.delete(n), s.push(new URL(n.url).pathname.slice(1))
                        }
                    })), s
                }
                async freshRef() {
                    const e = await this._cache,
                        t = new Headers([
                            ["Date", (new Date).toUTCString()]
                        ]);
                    e.put(new Request(`/${this._uid}`, {
                        headers: t
                    }), new Response(JSON.stringify([...this._channels]), {
                        headers: t
                    }))
                }
            }
            var S = n(125226),
                C = n(777491),
                w = n(314802);
            const f = (0, h.getLogger)(_),
                P = {
                    url: window.PUSHSTREAM_URL,
                    urlPath: "message-pipe-ws",
                    transportType: m.WebSocket
                },
                E = {
                    url: window.PUSHSTREAM_URL.replace("wss://", "https://"),
                    urlPath: "message-pipe-es",
                    transportType: m.EventSource
                };
            class b {
                constructor() {
                    this.guid = (0, C.guid)(), this._pushStreamPublic = null, this._pushStreamPrivate = null, this._statusHandlers = [], this._reconnectHandlers = [], this._userPrivateChannel = null, this._channelMultiplexer = new v, this._xEventPrefix = "multiplexer-bc-", this._storagePrefix = "pushStreamMultiplexerState.", this._userChannelPrefix = "private_", this._statusPublic = r.ConnectionStatus.Closed, this._statusPrivate = r.ConnectionStatus.Closed, this._forceDisconnected = !1, this._activityTimeout = 5e3, this._delayTimeout = 2e4, this._markName = this._storagePrefix + "mark", this._channelsName = this._storagePrefix + "channels", this._xEventRecreate = this._xEventPrefix + "recreate", this._xEventSend = this._xEventPrefix + "send", this._xEventChannelAdd = this._xEventPrefix + "channelAdd", this._xEventChannelRemove = this._xEventPrefix + "channelRemove", this._xEventConnectionStatus = this._xEventPrefix + "connectionStatus", this._xEventReconnectCommand = this._xEventPrefix + "reconnectCommand", this._xEventReconnectSuccess = this._xEventPrefix + "reconnectSuccess", this._xEventRequestLogs = this._xEventPrefix + "requestLogs", this._xEventShareLogs = this._xEventPrefix + "shareLogs", this._shareLogsKey = this._storagePrefix + "shareLogs", this._connectionStatusKey = this._storagePrefix + "connectionStatus", this._channelsCounter = null, this._dispatchReconnectSuccessCommandFromOther = e => {
                        if (this.ownPushStream()) return;
                        const [t] = this._decodeParams(e);
                        this._callReconnectHandlers(t)
                    }, this._pulseActivity = () => {
                        var e, t;
                        null === (e = this._channelsCounter) || void 0 === e || e.freshRef(),
                            this.ownPushStream() ? (null === (t = this._channelsCounter) || void 0 === t || t.cleanOldRefs().then((e => {
                                if (e.length > 0) {
                                    this._getChannels().filter((e => !e.startsWith("public") && !e.startsWith("private"))).forEach(this._removeChannel)
                                }
                            })), this._lostOwn() ? (f.logNormal("Lost own pushstream connection"), a.telemetry.sendReport("site", "pushstream_lost_own"), this._destructPushStream()) : this._setMark()) : this._needInstantiating() && !this._forceDisconnected && (f.logNormal("Creating pushstream connection, because other tab lost it"), a.telemetry.sendReport("site", "pushstream_pick_up"), this._instantiatePushStream(this.getChannels()))
                    }, this._removeChannel = async e => {
                        var t;
                        const n = e.startsWith(this._userChannelPrefix) ? this._pushStreamPrivate : this._pushStreamPublic,
                            s = await (null === (t = this._channelsCounter) || void 0 === t ? void 0 : t.countSubscribers(e));
                        !(null == n ? void 0 : n.hasChannel(e)) || void 0 !== s && s > 0 || (n.removeChannel(e), this._storeChannels())
                    }, this._dispatchMessage = (e, t, n) => {
                        this._dispatchMessageToOthers(e, t, n), this._dispatchMessageToSelf(e, t, n, !1)
                    }, this._onRequestRecreate = e => {
                        if (!this.ownPushStream() && this._needInstantiating()) {
                            const [t] = this._decodeParams(e);
                            f.logNormal("Creating pushstream connection after recreate request"), this._instantiatePushStream(t)
                        }
                    }, this._onUnload = () => {
                        var e;
                        null === (e = this._channelsCounter) || void 0 === e || e.clean(), this.ownPushStream() && (this._unsetMark(), this._sendRecreateRequest())
                    }, this._dispatchMessageFromOther = e => {
                        if (this.ownPushStream()) return;
                        const [t, n, s] = this._decodeParams(e);
                        this._dispatchMessageToSelf(t, n, s, !0)
                    }, this._addChannelFromOther = e => {
                        const [t] = this._decodeParams(e);
                        this.ownPushStream() && this._addChannel(t)
                    }, this._removeChannelFromOther = e => {
                        const [t] = this._decodeParams(e);
                        this.ownPushStream() && this._removeChannel(t)
                    }, this._dispatchStatusChangeFromOther = e => {
                        const t = this._decodeConnectionStatus(e),
                            n = t[0],
                            s = t[1];
                        this.ownPushStream() || this._dispatchStatusChangeToSelf(n, s)
                    }, this._dispatchReconnectCommandFromOther = () => {
                        this.ownPushStream() && this.forceConnect()
                    }, this._onRequestLogs = () => {
                        if (this.ownPushStream()) {
                            const e = this._getOwnLogs();
                            let t = "";
                            try {
                                t = JSON.stringify(e)
                            } catch (e) {
                                f.logError("Failed to stringify own pushstream logs")
                            }
                            o.TVLocalStorage.setItem(this._shareLogsKey, t), s.TVXWindowEvents.emit(this._xEventShareLogs, t)
                        }
                    };
                    var e;
                    (0, S.isFeatureEnabled)("pushstream_connections_observer") && "caches" in window && (this._channelsCounter = new p({
                            uid: this.guid,
                            updateRefInterval: this._activityTimeout
                        })), this._init(), window.addEventListener("unload", this._onUnload), s.TVXWindowEvents.on(this._xEventRecreate, this._onRequestRecreate), s.TVXWindowEvents.on(this._xEventSend, this._dispatchMessageFromOther), s.TVXWindowEvents.on(this._xEventChannelAdd, this._addChannelFromOther), s.TVXWindowEvents.on(this._xEventChannelRemove, this._removeChannelFromOther), s.TVXWindowEvents.on(this._xEventConnectionStatus, this._dispatchStatusChangeFromOther), s.TVXWindowEvents.on(this._xEventReconnectCommand, this._dispatchReconnectCommandFromOther), s.TVXWindowEvents.on(this._xEventReconnectSuccess, this._dispatchReconnectSuccessCommandFromOther),
                        s.TVXWindowEvents.on(this._xEventRequestLogs, this._onRequestLogs), e = () => {
                            window.loginStateChange && window.loginStateChange.subscribe(this, this._changeLoginState)
                        }, "loading" !== document.readyState ? e() : document.addEventListener("DOMContentLoaded", e), setInterval(this._pulseActivity, this._activityTimeout), this._pulseActivity()
                }
                on(e, t) {
                    this._channelMultiplexer.on(e, t)
                }
                off(e, t) {
                    this._channelMultiplexer.off(e, t)
                }
                onStatus(e) {
                    this._statusHandlers.push({
                        handler: e,
                        isPrivate: !1
                    }), setTimeout((() => e(this._statusPublic)), 0)
                }
                onPrivateStatus(e) {
                    this._statusHandlers.push({
                        handler: e,
                        isPrivate: !0
                    }), setTimeout((() => e(this._statusPrivate)), 0)
                }
                onReconnect(e, t = !1) {
                    this._reconnectHandlers.push({
                        handler: e,
                        isPrivate: t
                    })
                }
                offReconnect(e) {
                    this._reconnectHandlers = this._reconnectHandlers.filter((t => t.handler !== e))
                }
                offStatus(e) {
                    this._statusHandlers = this._statusHandlers.filter((t => t.handler !== e))
                }
                forceConnect() {
                    var e, t;
                    this._forceDisconnected = !1, f.logNormal("Creating pushstream connection after force connect"), this.ownPushStream() ? (null === (e = this._pushStreamPublic) || void 0 === e || e.disconnect(), null === (t = this._pushStreamPrivate) || void 0 === t || t.disconnect(), this._instantiatePushStream(this.getChannels())) : this._needInstantiating() ? this._instantiatePushStream() : s.TVXWindowEvents.emit(this._xEventReconnectCommand)
                }
                disconnect() {
                    this.ownPushStream() && (this._destructPushStream(), this._unsetMark(), this._forceDisconnected = !0)
                }
                getLogs(e) {
                    return new Promise((t => {
                        const n = setTimeout((() => {
                                const e = o.TVLocalStorage.getItem(this._shareLogsKey);
                                t(null !== e ? JSON.parse(e) : [])
                            }), 1e3),
                            i = e => {
                                let o;
                                s.TVXWindowEvents.off(this._xEventShareLogs, i), s.TVXWindowEvents.emit(this._xEventShareLogs, ""), clearTimeout(n);
                                try {
                                    o = JSON.parse(e)
                                } catch (e) {
                                    o = [], f.logError("Failed to parse logs received from master tab")
                                }
                                t(o)
                            };
                        this.ownPushStream() ? t(this._getOwnLogs(e)) : (s.TVXWindowEvents.on(this._xEventShareLogs, i), s.TVXWindowEvents.emit(this._xEventRequestLogs))
                    }))
                }
                getChannels() {
                    return this.ownPushStream() ? this._getChannels() : this._getChannelsFromStorage()
                }
                connectionObserverEnabled() {
                    return null !== this._channelsCounter
                }
                ownPushStream() {
                    return !!this._pushStreamPublic || !!this._pushStreamPrivate
                }
                pushStream() {
                    if (!this.ownPushStream()) throw new Error("Not own PushStream");
                    return this._pushStreamPublic
                }
                isConnected() {
                    return this._statusPublic > 0
                }
                status() {
                    var e;
                    return null !== (e = this._statusPublic) && void 0 !== e ? e : r.ConnectionStatus.Closed
                }
                statusPrivate() {
                    var e;
                    return null !== (e = this._statusPrivate) && void 0 !== e ? e : r.ConnectionStatus.Closed
                }
                userChannel() {
                    if (!this._userPrivateChannel) throw new Error("No user channel");
                    return this._userChannel(this._userPrivateChannel)
                }
                async addChannel(e) {
                    var t;
                    if (await (null === (t = this._channelsCounter) || void 0 === t ? void 0 : t.add(e)), this.ownPushStream()) this._addChannel(e);
                    else {
                        const t = this._codeParams([e]);
                        s.TVXWindowEvents.emit(this._xEventChannelAdd, t)
                    }
                }
                async removeChannel(e) {
                    var t;
                    await (null === (t = this._channelsCounter) || void 0 === t ? void 0 : t.remove(e)), this.ownPushStream() ? this._removeChannel(e) : s.TVXWindowEvents.emit(this._xEventChannelRemove, this._codeParams([e]))
                }
                static getInstance() {
                    return null === this._instance && (this._instance = new b), this._instance
                }
                _userChannel(e) {
                    return this._userChannelPrefix + e
                }
                _codeParams(e) {
                    const t = [...e];
                    return t.push((new Date).getTime()), JSON.stringify(t)
                }
                _decodeParams(e) {
                    const t = JSON.parse(e);
                    return t.pop(), t
                }
                _init() {
                    if (this._needInstantiating()) this._instantiatePushStream();
                    else {
                        const e = o.TVLocalStorage.getItem(this._connectionStatusKey);
                        if (null === e) throw Error("PushStream.connectionStatus is null");
                        const t = this._decodeConnectionStatus(e);
                        [this._statusPublic, this._statusPrivate] = t
                    }
                    setTimeout((() => {
                        this.isConnected() || (f.logNormal("Not connected for a while after init..."), (0, i.trackEvent)("pushstream", "not connected after init", navigator.userAgent))
                    }), this._activityTimeout)
                }
                _instantiatePushStream(e) {
                    this._setMark(), this._pushStreamPublic && ((0, i.trackEvent)("PushstreamDoublePublic", window.user && window.user.username || "Guest", navigator.userAgent), this._pushStreamPublic.disconnect());
                    const t = this._getPushStreamSettings();
                    this._pushStreamPublic = new g(this._dispatchMessage, t), this._pushStreamPublic.connectionStatus().subscribe((e => {
                        this._dispatchStatusChange(e, this._statusPrivate)
                    })), this._pushStreamPublic.reconnectEvent().subscribe(null, (() => {
                        this._dispatchReconnectSuccessCommand()
                    })), this._pushStreamPrivate && ((0, i.trackEvent)("PushstreamDoublePrivate", window.user && window.user.username || "Guest", navigator.userAgent), this._pushStreamPrivate.disconnect()), this._pushStreamPrivate = new g(this._dispatchMessage, { ...t,
                        maxSize: 1
                    }), this._pushStreamPrivate.connectionStatus().subscribe((e => {
                        this._dispatchStatusChange(this._statusPublic, e)
                    })), this._pushStreamPrivate.reconnectEvent().subscribe(null, (() => {
                        this._dispatchReconnectSuccessCommand(!0)
                    })), this.on("pushstream_set_user_channel", (e => {
                        this._setUserChannel(e)
                    })), this._connectChannels(e)
                }
                _destructPushStream() {
                    const e = this._pushStreamPublic;
                    this._pushStreamPublic = null, null == e || e.disconnect();
                    const t = this._pushStreamPrivate;
                    this._pushStreamPrivate = null, null == t || t.disconnect();
                    const n = o.TVLocalStorage.getItem(this._connectionStatusKey);
                    null !== n && this._dispatchStatusChangeFromOther(n)
                }
                _lostOwn() {
                    const e = o.TVLocalStorage.getItem(this._markName);
                    if (e) {
                        const [t] = this._decodeParams(e);
                        return t !== this.guid
                    }
                    return !1
                }
                _setMark() {
                    o.TVLocalStorage.setItem(this._markName, this._codeParams([this.guid, (new Date).getTime()]))
                }
                _unsetMark() {
                    o.TVLocalStorage.setItem(this._markName, "")
                }
                _needInstantiating() {
                    const e = o.TVLocalStorage.getItem(this._markName);
                    if (e) {
                        const [, t] = this._decodeParams(e);
                        return (new Date).getTime() - t > this._delayTimeout
                    }
                    return !0
                }
                _getChannels() {
                    var e, t, n, s;
                    return [...null !== (t = null === (e = this._pushStreamPublic) || void 0 === e ? void 0 : e.getChannels()) && void 0 !== t ? t : [], ...null !== (s = null === (n = this._pushStreamPrivate) || void 0 === n ? void 0 : n.getChannels()) && void 0 !== s ? s : []]
                }
                _getChannelsFromStorage() {
                    const e = o.TVLocalStorage.getItem(this._channelsName);
                    return e ? JSON.parse(e) : []
                }
                _storeChannels() {
                    o.TVLocalStorage.setItem(this._channelsName, JSON.stringify(this._getChannels()))
                }
                _sendRecreateRequest() {
                    const e = this._getChannels();
                    s.TVXWindowEvents.emit(this._xEventRecreate, this._codeParams([null != e ? e : []]))
                }
                _addChannel(e) {
                    const t = e.startsWith(this._userChannelPrefix) ? this._pushStreamPrivate : this._pushStreamPublic;
                    (null == t ? void 0 : t.hasChannel(e)) || (null == t || t.addChannel(e), this._storeChannels())
                }
                async _connectChannels(e) {
                    var t, n;
                    null === (t = this._pushStreamPublic) || void 0 === t || t.addChannel("public"), void 0 !== e && e.length > 0 && await Promise.all(e.map((async e => {
                        var t;
                        return e.startsWith(this._userChannelPrefix) || (null === (t = this._pushStreamPublic) || void 0 === t ? void 0 : t.hasChannel(e)) ? Promise.resolve() : this.addChannel(e)
                    }))), "is_authenticated" in window ? this._connectUserChannelInitial(!0) : window.loginStateChange && window.loginStateChange.subscribe(this, this._connectUserChannelInitial), this._isPublicPushstreamEnabled() && (null === (n = this._pushStreamPublic) || void 0 === n || n.connect())
                }
                _getPushStreamSettings() {
                    return (0, w.isOnMobileAppPage)("any") ? (0, S.isFeatureEnabled)("enable_eventsource_pushstream_mobile") ? E : P : (0, S.isFeatureEnabled)("enable_eventsource_pushstream_transport") ? E : P
                }
                _isPublicPushstreamEnabled() {
                    return (0, w.isOnMobileAppPage)("any") || !(0, S.isFeatureEnabled)("disable_pushstream_connections_for_anonymous_users") || window.is_authenticated || window.TradingView.onChartPage
                }
                _connectUserChannelInitial(e) {
                    var t, n, s;
                    e && (window.is_authenticated ? (this._userPrivateChannel = null !== (t = window.user.private_channel) && void 0 !== t ? t : null, null === (n = this._pushStreamPrivate) || void 0 === n || n.addChannel(this.userChannel()), null === (s = this._pushStreamPrivate) || void 0 === s || s.connect()) : this._userPrivateChannel = null)
                }
                _changeLoginState(e) {
                    var t, n, s, i;
                    e || (this._isPublicPushstreamEnabled() && (null === (t = this._pushStreamPublic) || void 0 === t || t.connect()), window.is_authenticated ? (this._userPrivateChannel = null !== (n = window.user.private_channel) && void 0 !== n ? n : null, this.ownPushStream() && (this._addChannel(this.userChannel()), null === (s = this._pushStreamPrivate) || void 0 === s || s.connect())) : (this.ownPushStream() && (this._removeChannel(this.userChannel()), null === (i = this._pushStreamPrivate) || void 0 === i || i.disconnect()), this._userPrivateChannel = null))
                }
                _setUserChannel(e) {
                    f.logNormal("Set user channel " + e), e !== this._userPrivateChannel && (this.ownPushStream() && this._userPrivateChannel && this._removeChannel(this.userChannel()), this._userPrivateChannel = e, this.ownPushStream() && this._userPrivateChannel && this._addChannel(this.userChannel()))
                }
                _dispatchStatusChange(e, t) {
                    this._dispatchStatusChangeToOthers(e, t), this._dispatchStatusChangeToSelf(e, t)
                }
                _dispatchStatusChangeToSelf(e, t) {
                    e !== this._statusPublic && (this._statusPublic = e, this._callStatusHandlers(e, !1)), t !== this._statusPrivate && (this._statusPrivate = t, this._callStatusHandlers(t, !0))
                }
                _callStatusHandlers(e, t) {
                    f.logNormal("Connection status change: " + e + ", private " + t), a.telemetry.sendReport("site", "pushstream_status_change"), this._statusHandlers.forEach((n => {
                        n.isPrivate === t && n.handler(e)
                    }))
                }
                _callReconnectHandlers(e) {
                    this._reconnectHandlers.forEach((t => {
                        t.isPrivate === e && t.handler()
                    }))
                }
                _dispatchReconnectSuccessCommand(e = !1) {
                    if (this.ownPushStream()) {
                        this._callReconnectHandlers(e);
                        const t = this._codeParams([e]);
                        s.TVXWindowEvents.emit(this._xEventReconnectSuccess, t)
                    }
                }
                _decodeConnectionStatus(e) {
                    const t = parseInt(e, 10);
                    return isNaN(t) ? this._decodeParams(e) : [t, t]
                }
                _dispatchStatusChangeToOthers(e, t) {
                    if (this.ownPushStream()) {
                        const n = this._codeParams([e, t]);
                        o.TVLocalStorage.setItem(this._connectionStatusKey, n), s.TVXWindowEvents.emit(this._xEventConnectionStatus, n)
                    }
                }
                _dispatchMessageToSelf(e, t, n, s) {
                    const i = e.channel,
                        o = e.content;
                    this._emit(o, t, i, s)
                }
                _dispatchMessageToOthers(e, t, n) {
                    const i = [e, t, n];
                    s.TVXWindowEvents.emit(this._xEventSend, this._codeParams(i))
                }
                _emit(e, t, n, s) {
                    this._channelMultiplexer.emit(e, t, n, s)
                }
                _getOwnLogs(e) {
                    var t;
                    if (this.ownPushStream()) {
                        const n = (0, h.getRawLogHistory)(e, _),
                            s = null === (t = this.pushStream()) || void 0 === t ? void 0 : t.getLogs();
                        return [].concat(n, null != s ? s : [])
                    }
                    return []
                }
            }
            b._instance = null;
            const R = b.getInstance()
        },
        175203: (e, t, n) => {
            n.d(t, {
                telemetry: () => u
            });
            var s = n(869403),
                i = n.n(s),
                o = n(890740),
                r = n(638456),
                a = n(314802);
            n(659863);
            const h = (0, n(272001).getLogger)("Common.Telemetry"),
                c = {
                    default: 15e3,
                    site: 3e5
                },
                l = ["before_websocket_connection_time_frame", "websocket_connection_time_frame", "first_series_full_time_frame", "page_full_load_time_frame", "page_load_time_frame"];
            const u = new class {
                constructor() {
                    this.reportSent = new(i()), this.timeCounters = {
                        series: {
                            marks: []
                        },
                        study: {},
                        pine: {}
                    }, this._timeoutIds = {}, this._commonAdditionalData = {
                        cluster: null,
                        userId: "0"
                    }, this._reportStash = {}
                }
                setSessionInfo(e) {
                    const t = this._parseCluster(e);
                    null !== t && (this._commonAdditionalData.cluster = t)
                }
                sendReport(e, t, n) {
                    var s;
                    if (!this._isAbleToSendReport(t)) return;
                    const i = this._getSubserviceType(e),
                        o = this._getHost(e, i);
                    if (null !== o) {
                        if (n = void 0 === n ? {
                                count: 1
                            } : n, this._addReportToStash(n, t, o), !this._timeoutIds[e]) {
                            const t = null !== (s = c[e]) && void 0 !== s ? s : c.default;
                            this._timeoutIds[e] = setTimeout(this._sendTelemetryToService.bind(this, e, o), t)
                        }
                    } else h.logError(`Unable to get host for counter: ${t}, metric type: ${e}, serivce type: ${i}`)
                }
                sendChartReport(e, t, n = !0) {
                    this._sendServiceSpecifiedReport("charts", e, t, n)
                }
                sendLineToolsStorageReport(e, t, n = !0) {
                    this._sendServiceSpecifiedReport("line_tools_storage", e, t, n)
                }
                _sendServiceSpecifiedReport(e, t, n, s = !0) {
                    this._updateUserInfo(), n = void 0 === n ? {
                        count: 1
                    } : n, s && (n = this._appendCommonAdditionalInfo(n, ["cluster", "userId"])), this.sendReport(e, t, n)
                }
                _updateUserInfo() {
                    const e = "user" in window && "id" in window.user ? window.user.id : "0";
                    this._commonAdditionalData.userId = String(e)
                }
                _isAbleToSendReport(e) {
                    const t = window.TELEMETRY_HOSTS,
                        n = l.includes(e),
                        s = Boolean(window.TradingView.onChartPage || (0, r.onWidget)());
                    return t && (!n || s)
                }
                _sendTelemetryToService(e, t) {
                    if (this._reportStash.hasOwnProperty(t)) {
                        const e = this._cropParams(this._reportStash[t]),
                            n = this._renameAllParams(e),
                            s = {
                                event: "report_stash",
                                params: this._cleanAllParams(n)
                            };
                        h.logDebug(`Report to host: ${t}; stash: ${JSON.stringify(this._reportStash[t])}`), this.reportSent.fire(this._reportStash[t]), delete this._reportStash[t], (0, o.fetch)(`${t}/report`, {
                            method: "POST",
                            body: JSON.stringify(s)
                        })
                    }
                    this._timeoutIds[e] = null
                }
                _getHost(e, t) {
                    const n = window.TELEMETRY_HOSTS,
                        s = n[e] && n[e][t];
                    return Boolean(s) ? s : null
                }
                _getSubserviceType(e) {
                    if (!["charts", "site"].includes(e)) return "all";
                    let t = "free";
                    const n = window.user.is_pro;
                    return "charts" === e && (0, a.isOnMobileAppPage)("old") ? t = n ? "ios_pro" : "ios_free" : "charts" === e && (0, a.isOnMobileAppPage)("new") ? t = n ? "android_pro" : "android_free" : (0, r.onWidget)() ? t = "widget" : n && (t = "pro"), t
                }
                _parseCluster(e) {
                    let t;
                    try {
                        t = JSON.parse(e).session_id
                    } catch (e) {
                        return h.logError("Could not parse cluster id (session id)"), null
                    }
                    const n = /(.*@)(.*)/gi.exec(t);
                    return null !== n && n.length >= 3 ? n[2] : null
                }
                _appendCommonAdditionalInfo(e, t) {
                    return t.forEach((t => {
                        t in this._commonAdditionalData && (e.additional = e.additional || {}, e.additional[t] = this._commonAdditionalData[t])
                    })), e
                }
                _cropParams(e) {
                    var t;
                    for (const n in e) e.hasOwnProperty(n) && e[n].length > 1e3 && (e.too_much_metrics_frame = null !== (t = e.too_much_metrics_frame) && void 0 !== t ? t : [], e.too_much_metrics_frame.push({
                        value: e[n].length,
                        additional: {
                            event: n
                        }
                    }), delete e[n]);
                    return e
                }
                _renameAllParams(e) {
                    const t = {};
                    for (const n in e) e.hasOwnProperty(n) && (t[n] = [], e[n].forEach((e => {
                        t[n].push(this._renameEntryParams(e))
                    })));
                    return t
                }
                _renameEntryParams(e) {
                    const t = {
                        count: "c",
                        value: "v",
                        text: "t",
                        additional: "a"
                    };
                    return Object.keys(e).reduce(((n, s) => (n[t[s]] = e[s], n)), {})
                }
                _cleanAllParams(e) {
                    const t = {};
                    for (const n in e)
                        if (e.hasOwnProperty(n)) {
                            t[n] = [];
                            const s = {
                                c: 0
                            };
                            e[n].forEach((e => {
                                const i = this._cleanEntryParams(e),
                                    o = Object.keys(i).length;
                                1 === o && void 0 !== i.c ? s.c += i.c : o > 0 && t[n].push(i)
                            })), s.c > 0 && t[n].push(s), 0 === t[n].length && delete t[n]
                        }
                    return t
                }
                _cleanEntryParams(e) {
                    const t = Object.keys(e).reduce(((t, n) => "c" !== n && "t" !== n || e[n] ? (t[n] = e[n], t) : t), {});
                    return "c" in t || "v" in t || "t" in t ? t : {}
                }
                _addReportToStash(e, t, n) {
                    n in this._reportStash || (this._reportStash[n] = {}), t in this._reportStash[n] || (this._reportStash[n][t] = []), Object.keys(e).length > 0 && this._reportStash[n][t].push(e)
                }
            }
        },
        176975: (e, t, n) => {
            var s;
            n.d(t, {
                    ConnectionStatus: () => s
                }),
                function(e) {
                    e[e.Closed = 0] = "Closed", e[e.Connecting = 1] = "Connecting", e[e.Open = 2] = "Open"
                }(s || (s = {}))
        },
        287545: (e, t, n) => {
            n.d(t, {
                PersistentEventSourceTransport: () => r
            });
            var s = n(176975),
                i = n(832527);
            const o = (0, n(272001).getLogger)("PersistentWebsocketTransport");
            class r extends i.PersistentTransport {
                constructor(e) {
                    super(e, o), this._specializedErrorHandlerBound = this._specializedErrorHandler.bind(this)
                }
                _createNativeTransport(e) {
                    const t = new EventSource(e, {
                        withCredentials: !0
                    });
                    return t.addEventListener("error", this._specializedErrorHandlerBound), t.addEventListener("open", this._socketOpenHandler), t.addEventListener("message", this._socketMessageHandler), t
                }
                _disconnectTransport() {
                    if (null === this._socket) return;
                    this._socket.removeEventListener("error", this._specializedErrorHandlerBound), this._socket.removeEventListener("open", this._socketOpenHandler), this._socket.removeEventListener("message", this._socketMessageHandler), this._removeOnOfflineListener();
                    const e = this._socket;
                    this._socket = null, this._connectionStatus.setValue(s.ConnectionStatus.Closed), e.readyState !== WebSocket.CLOSED && e.close()
                }
                _specializedErrorHandler(e) {
                    e.eventPhase === EventSource.CLOSED ? this._socketCloseHandler(e) : this._socketErrorHandler()
                }
            }
        },
        832527: (e, t, n) => {
            n.d(t, {
                PersistentTransport: () => l
            });
            var s = n(176975),
                i = n(621681),
                o = n(988411),
                r = n.n(o),
                a = n(869403),
                h = n.n(a),
                c = n(462282);
            class l {
                constructor(e, t, n) {
                    this._url = "", this._socket = null, this._reconnectCount = 0, this._onlineCancellationToken = null, this._connectionStatus = new(r())(s.ConnectionStatus.Closed), this._socketCloseHandler = this._onCloseCallback.bind(this), this._socketErrorHandler = this._onErrorCallback.bind(this), this._socketOpenHandler = this._onOpenCallback.bind(this), this._socketMessageHandler = this._onMessageCallback.bind(this), this._maxReconnectReachedEventDelegate = new(h()), this._successReconnectReachedEventDelegate = new(h()), this._shouldReconnect = !0, this._maxReconnectCount = null, this._reconnectTimeoutId = 0, this._connectAbortController = null, this._tryReconnect = () => {
                        if (this._disconnect(), this._shouldReconnect) {
                            const e = this._getReconnectTimeout();
                            this._logger.logNormal(`Sleeping some time before reconnect ${e}ms`), this._reconnectTimeoutId = setTimeout(this._tryReconnectImpl.bind(this), e)
                        } else this._logger.logNormal("Skip reconnecting because of shouldReconnect state")
                    }, this._onOfflineHandler = () => {
                        this._removeOnOfflineListener(), this._logger.logInfo("Network status changed to offline - trying to reconnect"), this._tryReconnect()
                    }, this._logger = t, this._messageHandler = e, this._closeHandler = n, window.addEventListener("unload", (() => {
                        t.logNormal("Unload event comes - disconnecting without reconnect after that..."), this._shouldReconnect = !1, this._disconnect()
                    }), !1)
                }
                setUrl(e) {
                    if (this._url === e) return;
                    const t = this._connectionStatus.value() !== s.ConnectionStatus.Closed;
                    t && this._disconnect(), this._url = e, t && this.connect()
                }
                url() {
                    return this._url
                }
                connect() {
                    this._connectImpl()
                }
                setMaxReconnectCount(e) {
                    this._maxReconnectCount = e
                }
                connectionStatus() {
                    return this._connectionStatus.readonly()
                }
                disconnect() {
                    this._shouldReconnect = !1, this._disconnect()
                }
                maxReconnectReachedEvent() {
                    return this._maxReconnectReachedEventDelegate
                }
                successReconnectReachedEvent() {
                    return this._successReconnectReachedEventDelegate
                }
                async _prepareParamsForConnection(e) {}
                _disconnect() {
                    var e;
                    null === (e = this._connectAbortController) || void 0 === e || e.abort(), this._connectAbortController = null, clearTimeout(this._reconnectTimeoutId), this._reconnectTimeoutId = 0, this._connectionStatus.value() !== s.ConnectionStatus.Closed ? this._socket ? (this._logger.logNormal(`Closing connection to: ${this._socket.url}, currentStatus: ${s.ConnectionStatus[this._connectionStatus.value()]}`), this._disconnectTransport()) : this._logger.logNormal("Disconnecting without socket - probably within preparing, it should be already scheduled for aborting") : this._logger.logNormal("Attempt to close connection but it is closed already")
                }
                _onErrorCallback() {
                    this._logger.logInfo("Connection is closed by error"), this._tryReconnect()
                }
                _onCloseCallback(e) {
                    var t;
                    this._logger.logInfo(`Connection is closed - code=${e.code} msg=${e.reason}`), null === (t = this._closeHandler) || void 0 === t || t.call(this, e), this._tryReconnect()
                }
                _tryReconnectImpl() {
                    return null !== this._maxReconnectCount && this._reconnectCount === this._maxReconnectCount ? (this._logger.logWarn("Maximum attempts to reconnect to websocket reached"), void this._maxReconnectReachedEventDelegate.fire()) : (this._reconnectCount += 1, this._logger.logInfo(`Reconnecting count: ${this._reconnectCount}`), navigator.onLine ? (this._logger.logInfo("Network status: online - trying to connect"), void this.connect()) : (this._logger.logInfo("Network status: offline - wait until online"), void(this._onlineCancellationToken = (0, i.callWhenOnline)((() => {
                        this._logger.logInfo("Network status changed to online - trying to connect"), this.connect()
                    })))))
                }
                _onOpenCallback() {
                    this._logger.logNormal("Connection opened"), this._reconnectCount > 0 && this._successReconnectReachedEventDelegate.fire(), this._reconnectCount = 0, this._connectionStatus.setValue(s.ConnectionStatus.Open)
                }
                _onMessageCallback(e) {
                    this._messageHandler(e.data)
                }
                _getReconnectTimeout() {
                    return this._reconnectCount < 5 ? 300 : 5e3
                }
                _setOnOfflineListener() {
                    window.addEventListener("offline", this._onOfflineHandler)
                }
                _removeOnOfflineListener() {
                    window.removeEventListener("offline", this._onOfflineHandler)
                }
                async _connectImpl() {
                    if (this._connectionStatus.value() !== s.ConnectionStatus.Closed) return void this._logger.logNormal("Attempt to open connection but it is not closed");
                    this._socket && (this._logger.logError("Something went wrong - code 0x2"), this.disconnect()), this._onlineCancellationToken && (this._onlineCancellationToken(), this._onlineCancellationToken = null), this._logger.logNormal(`Connecting to ${this._url}`), this._shouldReconnect = !0, this._connectAbortController = new AbortController;
                    const e = this._connectAbortController.signal;
                    try {
                        if (this._connectionStatus.setValue(s.ConnectionStatus.Connecting), await this._prepareParamsForConnection(e), e.aborted) throw (0, c.createAbortError)();
                        this._socket = this._createNativeTransport(this._url), this._setOnOfflineListener()
                    } catch (e) {
                        this._connectionStatus.setValue(s.ConnectionStatus.Closed), (0, c.skipAbortError)(e)
                    } finally {
                        this._connectAbortController = null
                    }
                }
            }
        },
        883660: (e, t, n) => {
            n.d(t, {
                PersistentWebsocketTransport: () => a
            });
            var s = n(272001),
                i = n(176975),
                o = n(832527);
            const r = (0, s.getLogger)("PersistentWebsocketTransport");
            class a extends o.PersistentTransport {
                constructor(e, t) {
                    super(e, r, t)
                }
                sendMessage(e) {
                    this._connectionStatus.value() === i.ConnectionStatus.Open ? this._socket ? this._socket.send(e) : r.logError("Something went wrong - code 0x3") : r.logWarn("Attempt to send message but connection is not opened")
                }
                _createNativeTransport(e) {
                    const t = new WebSocket(e);
                    return t.binaryType = "arraybuffer", t.addEventListener("error", this._socketErrorHandler), t.addEventListener("close", this._socketCloseHandler), t.addEventListener("open", this._socketOpenHandler), t.addEventListener("message", this._socketMessageHandler), t
                }
                _disconnectTransport() {
                    if (null === this._socket) return;
                    this._socket.removeEventListener("error", this._socketErrorHandler), this._socket.removeEventListener("close", this._socketCloseHandler), this._socket.removeEventListener("open", this._socketOpenHandler),
                        this._socket.removeEventListener("message", this._socketMessageHandler), this._removeOnOfflineListener();
                    const e = this._socket;
                    this._socket = null, this._connectionStatus.setValue(i.ConnectionStatus.Closed), e.readyState !== WebSocket.CLOSED && e.close()
                }
            }
        },
        462282: (e, t, n) => {
            function s(e) {
                let t = null;
                return (n, ...s) => (null == t || t.abort(), t = new AbortController, null == n || n.addEventListener("error", (() => null == t ? void 0 : t.abort()), {
                    once: !0
                }), e(t.signal, ...s))
            }

            function i(e) {
                if (!h(e)) throw e
            }

            function o(e) {
                if (h(e)) throw e
            }

            function r(e) {
                return (null == e ? void 0 : e.aborted) ? Promise.reject(a()) : new Promise(((t, n) => {
                    null == e || e.addEventListener("abort", (() => n(a())), {
                        once: !0
                    })
                }))
            }

            function a() {
                return new DOMException("Aborted", "AbortError")
            }

            function h(e) {
                return e instanceof Error && "AbortError" === e.name
            }

            function c(e, t) {
                return Promise.race([r(e), t])
            }
            async function l(e, t) {
                let n;
                try {
                    await c(e, new Promise((e => {
                        n = setTimeout(e, t)
                    })))
                } finally {
                    clearTimeout(n)
                }
            }
            n.d(t, {
                respectLatest: () => s,
                skipAbortError: () => i,
                rethrowAbortError: () => o,
                createAbortError: () => a,
                isAbortError: () => h,
                respectAbort: () => c,
                delay: () => l
            })
        },
        621681: (e, t, n) => {
            n.d(t, {
                callWhenOnline: () => i,
                waitForOnline: () => o
            });
            var s = n(462282);

            function i(e) {
                let t = e;
                const n = () => {
                    window.removeEventListener("online", n), t && t()
                };
                return window.addEventListener("online", n), () => {
                    t = null
                }
            }
            async function o(e = null) {
                return !0 === navigator.onLine || void 0 === navigator.onLine ? Promise.resolve() : (0, s.respectAbort)(e, new Promise((e => {
                    const t = () => {
                        window.removeEventListener("online", t), e()
                    };
                    window.addEventListener("online", t)
                })))
            }
        }
    }
]);
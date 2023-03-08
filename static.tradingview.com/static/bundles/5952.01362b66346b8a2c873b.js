(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [5952], {
        341416: e => {
            e.exports = {
                wrapperPromoSymbolsContainer: "wrapperPromoSymbolsContainer-zAv6nTtm",
                promoSymbolsContainer: "promoSymbolsContainer-zAv6nTtm",
                symbol: "symbol-zAv6nTtm",
                icon: "icon-zAv6nTtm",
                logo: "logo-zAv6nTtm",
                symbolInfo: "symbolInfo-zAv6nTtm",
                symbolVisibility: "symbolVisibility-zAv6nTtm",
                name: "name-zAv6nTtm",
                symbolValueText: "symbolValueText-zAv6nTtm",
                currencySign: "currencySign-zAv6nTtm",
                positiveValue: "positiveValue-zAv6nTtm",
                negativeValue: "negativeValue-zAv6nTtm",
                animationBlock: "animationBlock-zAv6nTtm",
                animationWrapper: "animationWrapper-zAv6nTtm",
                translateUpFirstItem: "translateUpFirstItem-zAv6nTtm",
                priceUpAndDown: "priceUpAndDown-zAv6nTtm",
                translateUpSecondItem: "translateUpSecondItem-zAv6nTtm"
            }
        },
        264462: (e, t, o) => {
            "use strict";
            o.d(t, {
                Symbol: () => d
            });
            var s = o(50959),
                i = o(497754),
                r = o(849204),
                n = o(160742),
                a = o(892093),
                m = o(865537),
                h = o(561068),
                l = o(341416);

            function d(e) {
                const {
                    symbol: t,
                    className: r,
                    isPromoVisible: n,
                    onlyIcon: a
                } = e, [d, c] = (0, s.useState)(null), [g, _] = (0, s.useState)(null), [R, p] = (0, s.useState)(null), [v, y] = (0, s.useState)(null), [f, w] = (0, s.useState)(""), b = (0, m.getShortNameAndProName)(t.proName).shortName;
                let C = null;
                (0, s.useEffect)((() => (async function() {
                    return (await o.e(96301).then(o.bind(o, 947809))).getQuoteSessionInstance("simple")
                }().then((e => {
                    C = e;
                    C.subscribe("promoSymbol", t.proName, (e => {
                        const {
                            values: t
                        } = e;
                        c(Object.keys(t).length ? { ...t
                        } : null)
                    }))
                })), () => {
                    null !== C && C.unsubscribe("promoSymbol", t.proName)
                })), []), (0, s.useEffect)((() => {
                    var e;
                    if (!d) return;
                    if (a) return;
                    const t = new h.PercentageFormatter,
                        o = null !== d.change_percent ? d.change_percent : 0,
                        s = `${t.format(o,!0,2,!0)}`;
                    _(d.last_price ? d.last_price.toLocaleString("ru", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }).replace(",", ".") : null), p(null !== (e = d.currency_code) && void 0 !== e ? e : null), y(s), w(o > 0 ? l.positiveValue : l.negativeValue)
                }), [d]);
                const S = {
                    logoid: null == d ? void 0 : d.logoid,
                    "currency-logoid": "BTCUSD" === b || null == d ? void 0 : d["currency-logoid"],
                    "base-currency-logoid": null == d ? void 0 : d["base-currency-logoid"]
                };
                return a ? s.createElement(u, {
                    size: "xxsmall",
                    symbol: t,
                    logoIdData: S,
                    shortName: b
                }) : s.createElement("a", {
                    href: `/chart/?symbol=${encodeURIComponent(t.proName)}`,
                    className: i(l.symbol, r)
                }, s.createElement(u, {
                    size: "xsmall",
                    symbol: t,
                    logoIdData: S,
                    shortName: b
                }), s.createElement("div", {
                    className: l.symbolInfo
                }, s.createElement("span", {
                    className: l.name
                }, b), s.createElement("div", {
                    className: l.animationBlock
                }, s.createElement("div", {
                    className: l.animationWrapper
                }, s.createElement("span", {
                    className: i(l.symbolValueText, n && l.translateUpFirstItem)
                }, s.createElement("span", null, g), s.createElement("span", {
                    className: l.currencySign
                }, R)), s.createElement("span", {
                    className: i(l.symbolValueText, f, n && l.translateUpSecondItem)
                }, v)))))
            }

            function u(e) {
                var t;
                const {
                    size: o,
                    symbol: i,
                    logoIdData: m,
                    shortName: h
                } = e;
                return s.createElement(n.CircleLogoAny, {
                    className: l.logo,
                    logoUrls: (null === (t = i.logoUrls) || void 0 === t ? void 0 : t[0]) ? [i.logoUrls[0]] : (0, a.removeUsdAndStableCoinFromCryptoPairLogos)((0, a.resolveLogoUrls)(m, r.LogoSize.Medium)),
                    size: o,
                    placeholderLetter: h[0],
                    singleCircleLogoClassName: l.icon
                })
            }
        },
        152033: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                SYMBOL_ROOM_PREFIX: () => m,
                highlightNewMessages: () => h,
                getChatHistoryMessageURL: () => l,
                symbolRoomId: () => d,
                isSymbolRoom: () => u,
                renderIconTemplate: () => c,
                symbolFromChatRoomId: () => g,
                defaultSymbolRoomMesssage: () => _
            });
            o(823127), o(230148);
            var s = o(777754),
                i = o(50959),
                r = o(500962),
                n = o(264462),
                a = o(823127);
            const m = "symbol_";

            function h(e, t, o) {
                let s = 0;
                const i = a(e.find(".ch-item").toArray().reverse().slice(0, t));
                if (!(!i.length || t < 1 || o < 1)) {
                    for (; t > 0;) {
                        t -= i.eq(s).find(".ch-item-text").length, s++
                    }
                    i.slice(0, s).highlight(o)
                }
            }

            function l(e, t) {
                const o = new Date(e),
                    s = o.getMonth() + 1,
                    i = o.getDate(),
                    r = o.getHours(),
                    n = o.getMinutes();
                return "/chat/history/?room=" + t + "&date=" + (o.getFullYear() + "-" + (s < 10 ? "0" : "") + s + "-" + (i < 10 ? "0" : "") + i) + "&timefrom=" + ((r < 10 ? "0" : "") + r + "%3A" + (n < 10 ? "0" : "") + n) + "&timeto=00%3A00&usernames=&order=asc&tzoffset=" + o.getTimezoneOffset()
            }

            function d(e, t = m) {
                const o = e.replace(/[^a-z0-9]/gi, "_");
                return "en" === window.locale ? `${t}${o}` : `${t}${o}_${window.locale}`
            }

            function u(e) {
                return e.startsWith(m)
            }

            function c(e, t) {
                r.render(i.createElement(n.Symbol, {
                    symbol: {
                        proName: e
                    },
                    isPromoVisible: !1,
                    onlyIcon: !0
                }), t)
            }

            function g(e) {
                let t = e.replace(new RegExp(`^${m}`), "");
                return "en" !== window.locale && (t = t.replace(new RegExp(`_${window.locale}$`), "")), t
            }

            function _() {
                return {
                    symbol: "",
                    time: "Thu Jan 10 15:00:00 2022 UTC",
                    meta: {
                        version: "0.2",
                        links: {}
                    },
                    username: "TradingView",
                    user_pic: "https://s3.tradingview.com/userpics/6171439-Hlns_mid.png",
                    text: s.t(null, void 0, o(153106))
                }
            }
        },
        983772: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                makeLiveSeparateModel: () => N,
                makePrivateModel: () => O,
                makePublicModel: () => k,
                setPublicInitialRooms: () => F
            });
            var s = o(869403),
                i = o.n(s),
                r = o(776734),
                n = o(779665),
                a = o(823127),
                m = o.n(a),
                h = o(191246),
                l = o(829036);
            class d {
                constructor(e) {
                    this._statInterval = "", this._statSymbol = "", this._historyRequest = null, this._room = "", this._isActive = !0, this._messageReceivedDelegate = new(i()), this._messageDeletedDelegate = new(i()), this._messageReceivedInOtherRoomDelegate = new(i()), this._messageDeletedInOtherRoomDelegate = new(i()), this._unknownEventDelegate = new(i()), this._pendingMessages = {}, this._newRoomInfoRequests = {}, this._onRoomDataHandler = this._pushStreamRoomDataHandler.bind(this), this._chatRooms = e, this._getChatRooms().startListenPushstream(), this._getChatRooms().roomsChanged().subscribe(this, this._flushPendingMessages), this._getChatRooms().otherEventReceived().subscribe(this, this._onOtherRoomEventReceived)
                }
                destroy() {
                    this.setRoom(""), this._getChatRooms().roomsChanged().unsubscribe(this, this._flushPendingMessages), this._getChatRooms().otherEventReceived().unsubscribe(this, this._onOtherRoomEventReceived), this._getChatRooms().stopListenPushstream(), this._historyRequest && this._historyRequest.abort()
                }
                roomAdded() {
                    return this._getChatRooms().roomAdded()
                }
                roomChanged() {
                    return this._getChatRooms().roomChanged()
                }
                roomDeleted() {
                    return this._getChatRooms().roomDeleted()
                }
                roomsChanged() {
                    return this._getChatRooms().roomsChanged()
                }
                messageReceived() {
                    return this._messageReceivedDelegate
                }
                messageDeleted() {
                    return this._messageDeletedDelegate
                }
                messageReceivedInOtherRoom() {
                    return this._messageReceivedInOtherRoomDelegate
                }
                messageDeletedInOtherRoom() {
                    return this._messageDeletedInOtherRoomDelegate
                }
                otherEventReceived() {
                    return this._unknownEventDelegate
                }
                createRoom(e, t, o, s) {
                    this._getChatRooms().createRoom(e, t, o, s)
                }
                editRoom(e, t, o, s) {
                    return this._getChatRooms().editRoom(e, t, o, s)
                }
                getRooms() {
                    return this._getChatRooms().rooms()
                }
                getRoomById(e) {
                    return this._getChatRooms().getRoomById(e)
                }
                getRoomInfo(e, t, o, s) {
                    return this._getChatRooms().getRoomInfo(e, t, o, s)
                }
                setActive(e) {
                    this._isActive = e
                }
                isActive() {
                    return this._isActive
                }
                room() {
                    return this._room
                }
                isHistoryLoading() {
                    return null !== this._historyRequest
                }
                setStatSymbol(e) {
                    this._statSymbol = e
                }
                setStatInterval(e) {
                    this._statInterval = e
                }
                loadHistory(e, t) {
                    this._loadHistoryInternal(e, t)
                }
                setRoom(e, t) {
                    this._room !== e && (this._historyRequest && (this._historyRequest.abort(), this._historyRequest = null), this._room && n.pushStreamMultiplexer.off(this._getChannel(), this._onRoomDataHandler), this._room = e, this._room && (this._historyRequest = this._loadHistoryInternal(0, ((e, o, s) => {
                        t && t(e, o, s), n.pushStreamMultiplexer.on(this._getChannel(), this._onRoomDataHandler)
                    })), this._historyRequest.always((() => {
                        this._historyRequest = null
                    }))))
                }
                getBanStatus(e, t) {
                    window.user.is_moderator && window.user.id !== e.user_id && !e.is_moderator ? m().get("/ban-status/", {
                        user_id: e.user_id
                    }, (e => {
                        t(!0, !e.error)
                    })) : t(!1)
                }
                ignoredUsers() {
                    return window.user.ignore_list
                }
                ignoredUsersV2() {
                    return window.user.ignore_list_v2
                }
                ignoreUser(e, t, o, s) {
                    const i = {
                        action: t ? "add" : "remove",
                        user_id: e.user_id,
                        username: e.username
                    };
                    m().post(t ? "/api/v1/user/privacy/ignore_list/add/" : "/api/v1/user/privacy/ignore_list/remove/", i, (s => {
                        s.detail || (t ? window.user.ignore_list[e.user_id] = e.username : delete window.user.ignore_list[e.user_id], window.crossTabSyncUserAttr && window.crossTabSyncUserAttr("ignore_list")), o && o(s)
                    })).fail((e => {
                        if (s) {
                            const t = JSON.parse(e.responseText);
                            t.error = t.detail, s(t)
                        }
                    }))
                }
                ignoreUserV2(e, t, o, s) {
                    t ? l.IgnoreUsers.add(e.username).then((t => {
                        t.detail || window.user.ignore_list.push(e.user_id), o(t)
                    })).catch((e => s(e))) : l.IgnoreUsers.remove(e.username).then((t => {
                        t.detail || (window.user.ignore_list = window.user.ignore_list.filter((t => t !== e.user_id))), o(t)
                    })).catch((e => s(e))), window.crossTabSyncUserAttr && window.crossTabSyncUserAttr("ignore_list")
                }
                sendMessageToRoom(e, t, o, s, i, n) {
                    if ((o = o || {}).interval = this._statInterval, !(t = t.trim()) && !o.text) return !1;
                    const a = window.TradingView.onChartPage ? this._statSymbol : "",
                        h = {
                            meta: JSON.stringify(o),
                            room_id: e,
                            symbol: a,
                            text: t
                        };
                    s && s.messageType && (h.type = s.messageType, s.warningType && (o.warning_type = s.warningType)), this._extendCommonRequestData(h), m().post("/conversation-post/", h).done(i).fail(n);
                    const l = "1" === h.is_private;
                    return (0, r.getTracker)().then((t => {
                        null !== t && t.trackChat(e, !1, l, window.locale)
                    })), !0
                }
                sendMessage(e, t, o, s, i) {
                    return "" !== this._room && this.sendMessageToRoom(this._room, e, t, o, s, i)
                }
                reportMessage(e) {
                    new h.ReportSendingAgent({
                        entityText: e.text,
                        entityType: "message",
                        entityURL: e.id.replace(/-/g, ""),
                        username: e.username
                    }, this._reportMessageOptions()).send()
                }
                deleteMessage(e, t, o) {
                    m().post("/conversation-delete/", {
                        ids: e
                    }).done(t).fail(o)
                }
                _getChatRooms() {
                    return this._chatRooms
                }
                _reportMessageOptions() {
                    return {}
                }
                _pushStreamRoomDataHandler(e, t, o, s) {
                    switch (e.action) {
                        case "message":
                            this._messageReceivedDelegate.fire(e.data, e.data.room_id, s);
                            break;
                        case "message-delete":
                            this._messageDeletedDelegate.fire(e.data, e.data.room_id, s);
                            break;
                        default:
                            throw new Error(`AbstractChatModel._pushStreamRoomDataHandler: unknown action ${e.action}`)
                    }
                }
                _onOtherRoomEventReceived(e, t, o, s) {
                    const i = e.data.room_id;
                    i !== this.room() && ("message" === e.action || "message-delete" === e.action ? this.getRoomById(i) ? "message" === e.action ? this._messageReceivedInOtherRoomDelegate.fire(e.data, i, s) : this._messageDeletedInOtherRoomDelegate.fire(e.data, i, s) : (this._pendingMessages[i] = this._pendingMessages[i] || [], this._pendingMessages[i].push({
                        external: s,
                        message: e
                    }), this._newRoomInfoRequests[i] || (this._newRoomInfoRequests[i] = !0, this._getChatRooms().getRoomInfo(i, (() => {
                        delete this._newRoomInfoRequests[i], this._flushPendingMessages()
                    }), (() => {
                        delete this._newRoomInfoRequests[i], this._getChatRooms().updateRooms()
                    })))) : this._unknownEventDelegate.fire(e, t, o, s))
                }
                _flushPendingMessages() {
                    Object.keys(this._pendingMessages).forEach((e => {
                        if (!this._pendingMessages[e] || !this.getRoomById(e)) return;
                        let t;
                        t = e === this.room() ? {
                            message: this._messageReceivedDelegate,
                            "message-delete": this._messageDeletedDelegate
                        } : {
                            message: this._messageReceivedInOtherRoomDelegate,
                            "message-delete": this._messageDeletedInOtherRoomDelegate
                        }, this._pendingMessages[e].forEach((o => {
                            t[o.message.action].fire(o.message.data, e, o.external)
                        })), delete this._pendingMessages[e]
                    }))
                }
                _loadHistoryInternal(e, t) {
                    const o = {
                        _rand: Math.random(),
                        offset: e,
                        room_id: this._room,
                        stat_interval: this._statInterval,
                        stat_symbol: this._statSymbol
                    };
                    return this._extendCommonRequestData(o), m().get("/conversation-status/", o, (e => {
                        t && t(e, 0 === e.messages.length, !1)
                    }))
                }
            }
            var u = o(272001);
            const c = (0, u.getLogger)("Chat.PrivateChatModel");
            class g extends d {
                constructor(e) {
                    super(e), this._roomMessagesReadDelegate = new(i()), this._otherRoomMessagesReadDelegate = new(i())
                }
                roomMessagesRead() {
                    return this._roomMessagesReadDelegate
                }
                otherRoomMessagesRead() {
                    return this._otherRoomMessagesReadDelegate
                }
                setMessagesRead() {
                    this._updateRoomLastVisitedTime()
                }
                loadHistory(e, t) {
                    super.loadHistory(e, ((e, o, s) => {
                        this.setMessagesRead(), t && t(e, o, s)
                    }))
                }
                updateRooms() {
                    this._getChatRooms().updateRooms()
                }
                loadMoreRooms(e) {
                    return this._getChatRooms().loadMoreRooms(e)
                }
                leaveFromRoom(e, t) {
                    return this._getChatRooms().leaveFromRoom(e, t)
                }
                updateRoomUsers(e, t, o, s) {
                    return this._getChatRooms().updateRoomUsers(e, t, o, s)
                }
                updateRoomInfo(e, t) {
                    this._getChatRooms().getRoomInfo(e, t, void 0, !0)
                }
                hiddenRooms() {
                    return this._getChatRooms().hiddenRooms()
                }
                addHiddenRoom(e) {
                    this._getChatRooms().addHiddenRoom(e), this._updateRoomLastVisitedTime(e)
                }
                removeHiddenRoom(e) {
                    this._getChatRooms().removeHiddenRoom(e)
                }
                isRoomHidden(e) {
                    return this._getChatRooms().isRoomHidden(e)
                }
                searchUsers(e, t) {
                    a.get("/username_hint/", {
                        s: e
                    }, t)
                }
                _extendCommonRequestData(e) {
                    e.is_private = "1"
                }
                _getChannel() {
                    return this.room()
                }
                _pushStreamRoomDataHandler(e, t, o, s) {
                    switch (e.action) {
                        case "message":
                            this.setMessagesRead();
                            break;
                        case "messages-read":
                            const t = this.getRoomById(e.data.room_id);
                            return void(t ? this._roomMessagesReadDelegate.fire(t) : c.logError(`Received messages-read event for unknown room ${e.data.room_id}`))
                    }
                    super._pushStreamRoomDataHandler(e, t, o, s)
                }
                _onOtherRoomEventReceived(e, t, o, s) {
                    const i = e.data.room_id;
                    if (i !== this.room())
                        if ("messages-read" !== e.action) super._onOtherRoomEventReceived(e, t, o, s);
                        else {
                            const e = this.getRoomById(i);
                            e && this._otherRoomMessagesReadDelegate.fire(e)
                        }
                }
                _updateRoomLastVisitedTime(e) {
                    (e && e !== this.room() || this.isActive()) && (e = e || this.room(), a.post("/chats/status/", {
                        room_id: e
                    }))
                }
            }
            var _ = o(777754),
                R = o(890740);
            class p extends d {
                constructor(e, t = !0) {
                    super(e), this._activeReconnect = !0, this._activeReconnect = t
                }
                deleteRoom(e, t) {
                    return this._getChatRooms().deleteRoom(e, t)
                }
                async voteForChart(e, t, o) {
                    (0, R.fetch)(`/api/v1/ideas/${e.id}/like/`, {
                        method: "POST",
                        credentials: "same-origin",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            value: t ? 1 : 0
                        })
                    }).then((e => e.json())).then(o)
                }
                voteForMessageWithSnapshot(e, t, o) {
                    a.post("/conversation-vote/", {
                        id: e.id,
                        vote: t ? 1 : 0
                    }, o)
                }
                favoriteRooms() {
                    return this._getChatRooms().favoriteRooms()
                }
                isRoomFavorite(e) {
                    return this._getChatRooms().isRoomFavorite(e)
                }
                addFavoriteRoom(e) {
                    this._getChatRooms().addFavoriteRoom(e)
                }
                removeFavoriteRoom(e) {
                    this._getChatRooms().removeFavoriteRoom(e)
                }
                isShownOnlyFavorites() {
                    return this._getChatRooms().isShownOnlyFavorites()
                }
                toggleShownOnlyFavorites() {
                    this._getChatRooms().toggleShownOnlyFavorites()
                }
                _reportMessageOptions() {
                    const e = this.getRoomById(this.room());
                    return e ? {
                        additionalText: _.t(null, void 0, o(569622)).format({
                            title: e.title
                        })
                    } : {}
                }
                _extendCommonRequestData(e) {
                    e.is_private = ""
                }
                _getChannel() {
                    return `chat_${this.room()}`
                }
            }
            class v extends p {
                setActive(e) {
                    super.setActive(e), e ? n.pushStreamMultiplexer.addChannel("chat") : this._activeReconnect && n.pushStreamMultiplexer.removeChannel("chat")
                }
            }
            class y extends p {
                setActive(e) {
                    super.setActive(e);
                    const t = this.getRooms()[0].room_id;
                    e ? n.pushStreamMultiplexer.addChannel(t) : this._activeReconnect && n.pushStreamMultiplexer.removeChannel(t)
                }
            }
            class f {
                constructor(e) {
                    this._roomAddedDelegate = new(i()), this._roomChangedDelegate = new(i()), this._roomDeletedDelegate = new(i()), this._roomsChangedDelegate = new(i()), this._otherEventReceivedDelegate = new(i()), this._subscribersCount = 0, this._rooms = e || [], setTimeout((() => {
                        0 === this._rooms.length && this.updateRooms()
                    }), 0)
                }
                getRoomInfo(e, t, o, s) {
                    const i = this.getRoomById(e);
                    t && i && t(i)
                }
                startListenPushstream() {
                    ++this._subscribersCount, 1 === this._subscribersCount && (this._multiplexerCallback = this._pushStreamBroadcastHandler.bind(this), n.pushStreamMultiplexer.on(this._multiplexerEvent(), this._multiplexerCallback))
                }
                stopListenPushstream() {
                    --this._subscribersCount, 0 === this._subscribersCount && n.pushStreamMultiplexer.off(this._multiplexerEvent(), this._multiplexerCallback)
                }
                rooms() {
                    return this._rooms
                }
                getRoomById(e) {
                    const t = this._getRoomIndex(e);
                    return -1 === t ? null : this._rooms[t]
                }
                roomAdded() {
                    return this._roomAddedDelegate
                }
                roomChanged() {
                    return this._roomChangedDelegate
                }
                roomDeleted() {
                    return this._roomDeletedDelegate
                }
                roomsChanged() {
                    return this._roomsChangedDelegate
                }
                otherEventReceived() {
                    return this._otherEventReceivedDelegate
                }
                _onRoomAdded(e) {
                    e && (this._rooms.push(e), this._roomAddedDelegate.fire(e))
                }
                _onRoomChanged(e) {
                    if (!e) return;
                    const t = this._getRoomIndex(e.room_id); - 1 !== t && (this._rooms[t] = e, this._roomChangedDelegate.fire(e))
                }
                _onRoomDeleted(e) {
                    if (!e) return;
                    const t = this._getRoomIndex(e.room_id); - 1 !== t && (this._rooms.splice(t, 1), this._roomDeletedDelegate.fire(e))
                }
                _onRoomsChanged(e) {
                    const t = this._rooms;
                    this._rooms = e, this._roomsChangedDelegate.fire(e, t)
                }
                _pushStreamBroadcastHandler(e, t, o, s) {
                    this._otherEventReceivedDelegate.fire(e, t, o, s)
                }
                _getRoomIndex(e) {
                    for (let t = this._rooms.length - 1; t >= 0; --t)
                        if (this._rooms[t].room_id === e) return t;
                    return -1
                }
            }
            var w = o(62802);
            const b = (0, u.getLogger)("Chat.PrivateChatRooms"),
                C = "privatemessages.hiddenrooms";
            class S extends f {
                constructor(e = !0) {
                    super(null), this._updateRoomRequest = null, this._withPagination = !0, this._withPagination = e, window.loginStateChange.subscribe(this, this._onLoginStateChanged), this._onLoginStateChanged()
                }
                updateRooms(e = 30) {
                    if (this._updateRoomRequest) return;
                    this._withPagination || (e = 0);
                    const t = window;
                    t.user && t.is_authenticated ? (this._updateRoomRequest = a.get("/chats/get/", {
                        limit: e
                    }, this._onRoomsChanged.bind(this)), this._updateRoomRequest.always((() => {
                        this._updateRoomRequest = null
                    }))) : this._onRoomsChanged([])
                }
                loadMoreRooms(e = 30) {
                    this.updateRooms(this.rooms().length + e)
                }
                createRoom(e, t, o, s) {
                    a.post("/chats/create/", {
                        members: o
                    }, (e => {
                        e.error || e.room.existing || this._onRoomAdded(e.room), s && s(e), (0, r.getTracker)().then((t => {
                            null !== t && t.trackChat(e.room.room_id, !0, !0, window.locale)
                        }))
                    }))
                }
                editRoom(e, t, o, s) {
                    const i = this.getRoomById(e);
                    if (!i) return !1;
                    const r = {
                        room_id: e,
                        room_title: t
                    };
                    return a.post("/chats/title/", r, (e => {
                        e.error || (i.title = t, this._onRoomChanged(i)), s && s(e)
                    })), !0
                }
                getRoomInfo(e, t, o, s) {
                    const i = this.getRoomById(e);
                    !i || s ? a.get("/chats/info/", {
                        room_id: e
                    }, (i => {
                        if (i.error) return void(o && o());
                        const r = this.getRoomById(e);
                        s && r ? this._onRoomChanged(i.room) : r || this._onRoomAdded(i.room), t && t(i.room)
                    })).fail(o) : t && t(i)
                }
                leaveFromRoom(e, t) {
                    return !!this.getRoomById(e) && (a.post("/chats/leave/", {
                        room_id: e
                    }, (o => {
                        if (!o.error) {
                            const t = this.getRoomById(e);
                            t ? this._onRoomDeleted(t) : b.logError(`We are already left the room ${e}`)
                        }
                        t && t(o)
                    })), !0)
                }
                updateRoomUsers(e, t, o, s) {
                    if (!this.getRoomById(e)) return !1;
                    const i = {
                        members: t,
                        room_id: e,
                        update_existing: null == s ? void 0 : s.updateExistingRoom
                    };
                    return a.post("/chats/update/", i, (t => {
                        const s = this.getRoomById(e);
                        s && (t.room && t.room.members_info && t.room.room_id === s.room_id && (s.members_info = t.room.members_info), this._onRoomChanged(s)), o && o(t)
                    })), !0
                }
                hiddenRooms() {
                    return this._hiddenRooms
                }
                addHiddenRoom(e) {
                    this.isRoomHidden(e) || (this._hiddenRooms.push(e), this._flushHiddenRooms())
                }
                removeHiddenRoom(e) {
                    if (!this.isRoomHidden(e)) return;
                    const t = this._hiddenRooms.indexOf(e);
                    this._hiddenRooms.splice(t, 1), this._flushHiddenRooms()
                }
                isRoomHidden(e) {
                    return -1 !== this._hiddenRooms.indexOf(e)
                }
                _multiplexerEvent() {
                    return "pm_*"
                }
                _pushStreamBroadcastHandler(e, t, o, s) {
                    const i = e.data.type;
                    if ("join" === i || "leave" === i) {
                        if ("leave" === i && window.user.id === e.data.user_id) return;
                        this.getRoomInfo(e.data.room_id, void 0, void 0, !0)
                    }
                    super._pushStreamBroadcastHandler(e, t, o, s)
                }
                _flushHiddenRooms() {
                    (0, w.setJSON)(C, this._hiddenRooms, {
                        forceFlush: !0
                    })
                }
                _onLoginStateChanged() {
                    this._hiddenRooms = (0, w.getJSON)(C, []), this.updateRooms()
                }
            }

            function D(e) {
                return "en" !== window.language && (e = `${e}.${window.locale}`), e
            }
            const I = "publiccharts.favorites",
                T = "chat.show_only_favorites";
            class x extends f {
                constructor(e) {
                    super(e), this._favoriteRooms = (0, w.getJSON)(D(I), {}), this._showOnlyFavorites = !!(0, w.getBool)(T)
                }
                updateRooms() {
                    a.get("/chats/public/get/", this._onRoomsChanged.bind(this))
                }
                createRoom(e, t, o, s) {
                    const i = {
                        desc: t,
                        title: e
                    };
                    a.post("/chats/public/create/", i, (e => {
                        e.error || a.post("/chats/public/createpingback/", {
                            room_id: e.room.room_id
                        }), s && s(e), (0, r.getTracker)().then((t => {
                            null !== t && t.trackChat(e.room.room_id, !0, !1, window.locale)
                        }))
                    }))
                }
                editRoom(e, t, o, s) {
                    if (!this.getRoomById(e)) return !1;
                    const i = {
                        desc: o,
                        room_id: e,
                        title: t
                    };
                    return a.post("/chats/public/edit/", i, s), !0
                }
                deleteRoom(e, t) {
                    return !!this.getRoomById(e) && (a.post("/chats/public/delete/", {
                        room_id: e
                    }, t), !0)
                }
                favoriteRooms() {
                    return Object.keys(this._favoriteRooms)
                }
                isRoomFavorite(e) {
                    return e in this._favoriteRooms
                }
                addFavoriteRoom(e) {
                    this._favoriteRooms[e] = !0, this._saveFavorires()
                }
                removeFavoriteRoom(e) {
                    delete this._favoriteRooms[e], this._saveFavorires()
                }
                isShownOnlyFavorites() {
                    return this._showOnlyFavorites
                }
                toggleShownOnlyFavorites() {
                    this._showOnlyFavorites = !this._showOnlyFavorites, (0, w.setValue)(T, this._showOnlyFavorites)
                }
                _multiplexerEvent() {
                    return "chat_*"
                }
                _pushStreamBroadcastHandler(e, t, o, s) {
                    if ("create_room" === e.data.type && e.data.meta.lang === window.locale) return void this._onRoomAdded(e.data.meta.room);
                    const i = this.getRoomById(e.data.room_id);
                    if (i) switch (i.last_message_time = Date.now(), e.data.type) {
                        case "edit_room":
                            return i.title = e.data.meta.room_title, i.description = e.data.meta.room_desc, void this._onRoomChanged(i);
                        case "delete_room":
                            return void this._onRoomDeleted(i)
                    }
                    super._pushStreamBroadcastHandler(e, t, o, s)
                }
                _saveFavorires() {
                    (0, w.setJSON)(D(I), this._favoriteRooms)
                }
            }
            const E = (0, u.getLogger)("Chat.ChatModelsFactory");
            let M = null,
                U = null,
                A = null;

            function O(e = !0) {
                if (function(e = !0) {
                        U || (U = new S(e))
                    }(e), !U) throw new Error("Unable to create private chat model");
                return new g(U)
            }

            function k(e = !0) {
                if (A || (A = new x(M)), !A) throw new Error("Unable to create public chat model");
                return new v(A, e)
            }

            function F(e) {
                A ? E.logError("Trying set initial rooms after creating") : M = e
            }

            function N(e) {
                const t = new x(e);
                return new y(t)
            }
        },
        191246: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                ReportSendingAgent: () => n
            });
            var s = o(777754),
                i = (o(984919), o(229534)),
                r = o(823127);
            class n {
                constructor(e, t = {}) {
                    switch (this._fullURL = `${window.location.protocol}//${window.location.host}`, this._data = e, this._options = t, e.entityType) {
                        case "message":
                            this._entityString = s.t(null, void 0, o(358961)), this._actionString = s.t(null, void 0, o(417899)),
                                this._fullURL += `/chat/m/${e.entityURL}/`;
                            break;
                        case "comment":
                            this._entityString = s.t(null, void 0, o(529352)), this._actionString = s.t(null, void 0, o(417899)), this._fullURL += `${e.entityURL}#tc${e.entityID}`;
                            break;
                        case "idea":
                            this._entityString = s.t(null, void 0, o(873855)), this._actionString = s.t(null, void 0, o(376481)), this._fullURL += e.entityURL;
                            break;
                        case "script":
                            this._entityString = s.t(null, void 0, o(475555)), this._actionString = s.t(null, void 0, o(376481)), this._fullURL += e.entityURL;
                            break;
                        case "stream":
                            this._entityString = s.t(null, void 0, o(972979)), this._actionString = s.t(null, void 0, o(376481)), this._fullURL += e.entityURL;
                            break;
                        case "mind":
                            this._entityString = s.t(null, void 0, o(212082)), this._actionString = s.t(null, void 0, o(417899)), this._fullURL += e.entityURL;
                            break;
                        case "mind-comment":
                            this._entityString = s.t(null, void 0, o(529352)), this._actionString = s.t(null, void 0, o(417899)), this._fullURL += e.entityURL
                    }
                }
                send() {
                    const e = {
                        report_type: this._data.entityType,
                        text: ""
                    };
                    this._options.chartId && (e.chart_id = this._options.chartId), this._data.entityID && (e.object_id = this._data.entityID);
                    const t = {
                        is_report: !0,
                        meta: JSON.stringify(e),
                        text: this.getText()
                    };
                    r.post("/conversation-post/", t).done((e => {
                        e && e.error && (0, i.showErrorDialog)({
                            title: "Error",
                            content: e.error,
                            btnType: "danger"
                        })
                    }))
                }
                getTitle() {
                    return s.t(null, void 0, o(469212)).format({
                        entity: this._entityString,
                        username: `<strong>${this._data.username}</strong>`
                    })
                }
                getText() {
                    let e = s.t(null, void 0, o(175462)).format({
                        entity: this._entityString,
                        username: this._data.username,
                        url: this._fullURL
                    });
                    return this._options.additionalText && (e += `\n${this._options.additionalText}`), this._data.entityText && (e += `\n\n${this._data.entityText}`), e
                }
                getEntity() {
                    return this._entityString
                }
                getAction() {
                    return this._actionString
                }
            }
        },
        829036: (e, t, o) => {
            "use strict";
            o.d(t, {
                IgnoreUsers: () => a
            });
            var s, i = o(777754);

            function r(e) {
                const t = new FormData;
                return t.append("username", e), t
            }! function(e) {
                e[e.Unknown = 0] = "Unknown", e[e.BadRequest = 400] = "BadRequest", e[e.Forbidden = 403] = "Forbidden", e[e.NotFound = 404] = "NotFound", e[e.UnprocessableEntity = 422] = "UnprocessableEntity"
            }(s || (s = {}));
            const n = i.t(null, void 0, o(223156));
            var a;
            ! function(e) {
                e.getAll = function() {
                    return fetch("/api/v1/user/privacy/ignore_list/", {
                        method: "GET"
                    }).then((e => {
                        if (e.ok) return e.json();
                        throw new Error(n)
                    }))
                }, e.add = async function(e) {
                    return fetch("/api/v1/user/privacy/ignore_list/add/", {
                        method: "POST",
                        body: r(e)
                    }).then((e => {
                        if (e.ok) return e.json();
                        if ([s.UnprocessableEntity].includes(e.status)) return e.json().then((t => {
                            if (!e.ok) {
                                const e = t.detail;
                                throw new Error(e)
                            }
                        }));
                        throw new Error(n)
                    }))
                }, e.remove = function(e) {
                    return fetch("/api/v1/user/privacy/ignore_list/remove/", {
                        method: "POST",
                        body: r(e)
                    }).then((e => {
                        if (e.ok) return e.json();
                        if ([s.UnprocessableEntity].includes(e.status)) return e.json().then((t => {
                            if (!e.ok) {
                                const e = t.detail;
                                throw new Error(e)
                            }
                        }));
                        throw new Error(n)
                    }))
                }
            }(a || (a = {}))
        },
        865537: (e, t, o) => {
            "use strict";

            function s(e) {
                if (e.includes("|")) {
                    const [t, o, s] = e.split("|"), {
                        proName: r,
                        shortName: n
                    } = i(t);
                    return {
                        proName: r,
                        shortName: n,
                        interval: o || void 0,
                        currency: s || void 0
                    }
                } {
                    const {
                        proName: t,
                        shortName: o
                    } = i(e);
                    return {
                        proName: t,
                        shortName: o,
                        interval: void 0,
                        currency: void 0
                    }
                }
            }

            function i(e) {
                let t, o;
                return e.includes(":") ? (o = e.split(":")[1], t = e) : o = e, {
                    proName: t,
                    shortName: o
                }
            }
            o.d(t, {
                getSymbolDataFromSymbolString: () => s,
                getShortNameAndProName: () => i
            })
        }
    }
]);
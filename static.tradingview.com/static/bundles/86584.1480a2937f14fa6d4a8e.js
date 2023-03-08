(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [86584], {
        856433: e => {
            e.exports = {
                actionButton: "actionButton-NwOkSfvs",
                small: "small-NwOkSfvs",
                hiddenTitle: "hiddenTitle-NwOkSfvs"
            }
        },
        760365: e => {
            e.exports = {
                label: "label-veVJ4P41"
            }
        },
        806730: e => {
            e.exports = {
                popupDialog: "popupDialog-MQCwyEL_",
                wrap: "wrap-MQCwyEL_",
                main: "main-MQCwyEL_",
                small: "small-MQCwyEL_",
                title: "title-MQCwyEL_",
                content: "content-MQCwyEL_",
                html: "html-MQCwyEL_",
                footer: "footer-MQCwyEL_",
                close: "close-MQCwyEL_",
                marginWithoutCloseButton: "marginWithoutCloseButton-MQCwyEL_"
            }
        },
        185383: e => {
            e.exports = {
                autocomplete: "autocomplete-P_1Nqk_V",
                caret: "caret-P_1Nqk_V",
                icon: "icon-P_1Nqk_V",
                suggestions: "suggestions-P_1Nqk_V",
                suggestion: "suggestion-P_1Nqk_V",
                noResults: "noResults-P_1Nqk_V",
                selected: "selected-P_1Nqk_V",
                opened: "opened-P_1Nqk_V"
            }
        },
        963754: (e, t, s) => {
            "use strict";
            s.d(t, {
                ColorContext: () => n,
                ColorManager: () => l
            });
            var n, o = s(797035),
                i = s(948549),
                r = s(916611);
            ! function(e) {
                e[e.SymbolMarker = 0] = "SymbolMarker", e[e.ScreenerFilter = 1] = "ScreenerFilter"
            }(n || (n = {}));
            class l {
                constructor(e) {
                    this._context = e.context
                }
                getColor() {
                    switch (this._context) {
                        case n.SymbolMarker:
                            return this._getAvailableColor(i.SymbolMarkerSettings.getDefaultColor());
                        case n.ScreenerFilter:
                            return this._getAvailableColor(i.SymbolsFilterSettings.getDefaultColor())
                    }
                }
                setColor(e) {
                    switch (this._context) {
                        case n.SymbolMarker:
                            i.SymbolMarkerSettings.setDefaultColor(this._getAvailableColor(e));
                            break;
                        case n.ScreenerFilter:
                            i.SymbolsFilterSettings.setDefaultColor(this._getAvailableColor(e))
                    }
                }
                _getAvailableColor(e) {
                    return (0, r.checkColorPermissions)(e) ? e : (this.setColor(o.ListColor.Red), o.ListColor.Red)
                }
            }
        },
        916611: (e, t, s) => {
            "use strict";
            s.d(t, {
                MarkedSymbolsListModel: () => V,
                checkColorPermissions: () => B,
                getMarkedListsState: () => I,
                symbolsLimit: () => N
            });
            var n = s(650151),
                o = s(797035),
                i = s(50991),
                r = s(173777);
            class l {
                constructor(e) {
                    this._executing = null, this._destroyed = !1, this._handleChange = () => {
                        if (this._destroyed) return;
                        const e = this._getCommands();
                        if (e.length > 0) {
                            if (null !== this._executing) return;
                            const [t, ...s] = e;
                            switch (t.type) {
                                case "append":
                                    this._executing = this._api.appendSymbols(t.color, t.symbols);
                                    break;
                                case "remove":
                                    this._executing = this._api.removeSymbols(t.color, t.symbols);
                                    break;
                                case "replace":
                                    this._executing = this._api.replaceSymbols(t.color, t.symbols);
                                    break;
                                case "reset":
                                    this._executing = this._api.resetSymbols(t.symbols);
                                    break;
                                case "rename":
                                    this._executing = this._api.renameList(t.color, t.name);
                                    break;
                                case "change-description":
                                    this._executing = this._api.changeDescription(t.color, t.description);
                                    break;
                                case "reset-all":
                                    this._executing = this._api.resetAll();
                                    break;
                                case "share":
                                    this._executing = this._api.shareList(t.color, t.shared)
                            }
                            this._executing.then((() => {
                                if (this._executing = null, this._destroyed) return;
                                const [e] = this._getCommands();
                                e === t ? this._store.dispatch((0, o.shiftCommand)({
                                    count: 1
                                })) : (this._onWarn(`Command: ${JSON.stringify(t)} was sent to the server but is not found in the state`), s.length > 0 && this._onWarn(`Commands: ${JSON.stringify(s)} was dropped from state without syncing with server`)), this._handleChange()
                            }), (e => {
                                if (this._destroyed) return;
                                this._executing = null;
                                const {
                                    colors: s,
                                    byColor: i
                                } = t.prevLists, r = s.map((e => (0, n.ensureDefined)(i[e])));
                                this._store.dispatch((0, o.setup)({
                                    lists: r,
                                    timestamp: (0, n.ensureNotNull)((0, o.getTimestamp)(this._selector(this._store.getState())))
                                })), this._onError(t, e)
                            }))
                        }
                    };
                    const {
                        root: t,
                        selector: s,
                        onError: i,
                        onWarn: r,
                        api: l
                    } = e;
                    this._store = t, this._selector = s, this._subscription = this._store.subscribe(this._handleChange), this._onError = i, this._onWarn = r, this._api = l, this._handleChange()
                }
                destroy() {
                    this._subscription(), this._destroyed = !0
                }
                _getCommands() {
                    const e = this._selector(this._store.getState());
                    return (0, o.getCommands)(e)
                }
            }
            var a = s(777754),
                c = s(272001),
                u = s(890740),
                h = s(658583);
            var d = s(591152);
            const m = (0, c.getLogger)("MarkedSymbols.Api");
            class p {
                getLists() {
                    return (0, u.fetch)("/api/v1/symbols_list/colored/").then(h.handleJSON)
                }
                removeSymbols(e, t) {
                    return 0 === t.length ? Promise.resolve() : (m.logNormal(`Sending request to remove symbols from ${e}-list: ${t}`), function(e, t) {
                        return (0, u.fetch)(`/api/v1/symbols_list/colored/${e}/remove/`, {
                            method: "POST",
                            body: JSON.stringify(t),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(h.handleJSON)
                    }(e, t))
                }
                appendSymbols(e, t) {
                    return 0 === t.length ? Promise.resolve() : (m.logNormal(`Sending request to append symbols to ${e}-list: ${t}`), function(e, t) {
                        return (0, u.fetch)(`/api/v1/symbols_list/colored/${e}/append/`, {
                            method: "POST",
                            body: JSON.stringify(t),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(h.handleJSON)
                    }(e, t))
                }
                replaceSymbols(e, t) {
                    return 0 === t.length ? Promise.resolve() : (m.logNormal(`Sending request to replace symbols in ${e}-list: ${t}`), function(e, t) {
                        return (0, u.fetch)(`/api/v1/symbols_list/colored/${e}/replace/?unsafe=true`, {
                            method: "POST",
                            body: JSON.stringify(t),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(h.handleJSON)
                    }(e, t))
                }
                resetSymbols(e) {
                    return 0 === e.length ? Promise.resolve() : (m.logNormal(`Sending request to reset symbols: ${e}`), function(e) {
                        return (0, u.fetch)("/api/v1/symbols_list/colored/bulk_remove/", {
                            method: "POST",
                            body: JSON.stringify(e),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(h.handleJSON)
                    }(e))
                }
                resetAll() {
                    return m.logNormal("Sending request to reset ALL symbols"), (0, u.fetch)("/api/v1/symbols_list/colored/", {
                        method: "DELETE"
                    }).then(h.handleJSON)
                }
                renameList(e, t) {
                    return m.logNormal(`Sending request to rename ${e}-list: ${t}`),
                        function(e, t) {
                            return (0, u.fetch)(`/api/v1/symbols_list/colored/${e}/rename/`, {
                                method: "POST",
                                body: JSON.stringify({
                                    name: t
                                }),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }).then(h.handleJSON)
                        }(e, t)
                }
                shareList(e, t) {
                    return m.logNormal(`Sending request to share ${e}-list: ${t}`), (0, d.shareMarkedList)(e, t).then((() => {}))
                }
                changeDescription(e, t) {
                    return m.logNormal(`Sending request to change description ${e}-list: ${t}`),
                        function(e, t) {
                            return (0, u.fetch)(`/api/v1/symbols_list/colored/${e}/update_meta/`, {
                                method: "POST",
                                body: JSON.stringify({
                                    description: t
                                }),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }).then(h.handleJSON)
                        }(e, t).then((() => {}))
                }
            }
            var g = s(779665),
                _ = s(176975),
                y = s(526225),
                f = (s(659863), s(888778)),
                S = s(494966),
                C = s(947809),
                b = s(632446),
                v = s(833813),
                w = s(508846),
                O = s(963644),
                E = s(894185);
            let N = 500;
            const k = 6e5,
                L = 3e4,
                M = 3e4;
            const x = (0, c.getLogger)("MarkedSymbols.Model"),
                D = "marked-symbols";
            let P, T = null;

            function I(e) {
                return e.markedLists
            }
            const A = "ROUTINE_CANCELLED";
            class V {
                constructor(e) {
                    var t, l;
                    this._promise = (0, f.initSymbolListService)(), this._service = null, this._executor = null, this._subscription = null, this._state = null, this._sync = null, this._disconnectTimestamp = null, this._destroyed = !1, this._connectionStatus = null, this._recover = !1, this._onPushStreamChange = e => {
                        window.user && window.user.session_hash !== e ? g.pushStreamMultiplexer.ownPushStream() ? (x.logNormal("Cross browser sync"), this.syncSymbols()) : x.logDebug("Sync skipped: on secondary tab") : x.logDebug("Sync skipped: session hash")
                    }, this._onPushStreamStatus = e => {
                        const t = Date.now();
                        if (this._connectionStatus = e, e === _.ConnectionStatus.Open && T === _.ConnectionStatus.Closed) {
                            T = e;
                            const s = null === this._disconnectTimestamp ? 0 : t - this._disconnectTimestamp;
                            if (this._disconnectTimestamp = null, !window.is_authenticated) return void x.logDebug("Sync skipped: is not authenticated");
                            if (!g.pushStreamMultiplexer.ownPushStream()) return void x.logDebug("Sync skipped: on secondary tab");
                            if (s < k) return void x.logDebug("Sync skipped: short disconnection");
                            P = setTimeout((() => {
                                const e = null !== this._state ? (0, o.getTimestamp)(this._state) : null;
                                null === e || e < t ? (x.logNormal("Reconnect sync"), this.syncSymbols()) : x.logNormal("Reconnect sync handled by another tab")
                            }), Math.random() * M + L)
                        } else e === _.ConnectionStatus.Closed && (this._disconnectTimestamp = Date.now(), T = e, clearTimeout(P))
                    }, this._handleChange = () => {
                        var e, t;
                        if (this._destroyed) return;
                        const {
                            store: s
                        } = (0, n.ensureNotNull)(this._service), o = (0, n.ensureNotNull)(I(s.getState()));
                        if (this._state !== o) try {
                            null === (t = (e = this._opts).onChange) || void 0 === t || t.call(e, o, (0, n.ensureNotNull)(this._state))
                        } finally {
                            this._state = o
                        }
                    }, this._handleExecutorError = (e, t) => {
                        this._connectionStatus === _.ConnectionStatus.Open ? this._destroyed || (x.logError(`Failed to execute ${e.type}`), this._recover = !0, this.syncSymbols()) : (0, E.showSimpleDialog)({
                            title: a.t(null, void 0, s(33115)),
                            text: t.message
                        }, E.warningModule)
                    }, this._opts = e, this._api = e.api || new p, this._session = e.quoteSession || (0, C.getQuoteSessionInstance)("simple"), this._restrictedMarkSymbols = function(e) {
                        const {
                            limit: t,
                            colors: s,
                            onLimit: n,
                            onRestrictedColor: l,
                            selector: a
                        } = e;
                        return e => (c, u) => {
                            var h, d;
                            const m = u(),
                                p = a(m),
                                {
                                    color: g,
                                    symbols: _,
                                    separators: y
                                } = e;
                            if (null !== g) {
                                if (!s().includes(g)) return void l();
                                const e = null !== (d = null === (h = p.lists.byColor[g]) || void 0 === h ? void 0 : h.symbols) && void 0 !== d ? d : [],
                                    o = new Set(e),
                                    a = i.qualified.castMany([]);
                                for (const e of new Set(_)) !y && (0, r.isSeparatorItem)(e) || o.has(e) || a.push(e);
                                if (a.length + o.size > t()) return void n()
                            }
                            c((0, o.markMany)(e))
                        }
                    }({
                        selector: e => (0, n.ensureNotNull)(I(e)),
                        limit: null !== (t = e.limit) && void 0 !== t ? t : () => N,
                        onLimit: () => {
                            var e, t;
                            x.logNormal("LimitReached"), null === (t = (e = this._opts).onLimit) || void 0 === t || t.call(e)
                        },
                        colors: null !== (l = e.colors) && void 0 !== l ? l : () => o.LIST_COLORS.filter(q),
                        onRestrictedColor: () => {
                            var e, t;
                            null === (t = (e = this._opts).onRestrictedColor) || void 0 === t || t.call(e)
                        }
                    }), this._promise.then((e => {
                        if (this._destroyed) return;
                        this._service = e;
                        const {
                            store: t
                        } = e;
                        this._state = (0, n.ensureNotNull)(I(t.getState())), this._subscription = t.subscribe(this._handleChange)
                    })), this.connect()
                }
                destroy() {
                    this._destroyed = !0, this._sync = null, this._subscription && this._subscription(), this._executor && this._executor.destroy(), this.closeConnection()
                }
                getSymbolsByColor(e) {
                    var t;
                    if (null === this._service) return [];
                    const {
                        store: s
                    } = this._service, n = I(s.getState());
                    return null === n ? [] : null !== (t = (0, o.getSymbolsByColor)(n, e)) && void 0 !== t ? t : []
                }
                getLists() {
                    return o.LIST_COLORS.reduce(((e, t) => (e.set(t, new Set(this.getSymbolsByColor(t))), e)), new Map)
                }
                setSymbolsColor(e, t) {
                    if (x.logNormal(`Set symbols color ${t}`), null === this._service) return;
                    const s = this._restrictedMarkSymbols({
                        symbols: e,
                        color: t,
                        separators: !1
                    });
                    this._service.store.dispatch(s)
                }
                markMany(e) {
                    if (x.logNormal(`Mark many symbols: ${e.color}`), null === this._service) return;
                    const t = this._restrictedMarkSymbols(e);
                    this._service.store.dispatch(t)
                }
                getSymbolColor(e) {
                    if (null === this._service) return null;
                    const {
                        store: t
                    } = this._service, s = I(t.getState());
                    return null === s ? null : (0, o.getSymbolColor)(s, e)
                }
                clearAllSymbolsColor() {
                    x.logNormal("Clear all symbols color"), null !== this._service && this._service.store.dispatch((0, o.reset)({}))
                }
                syncSymbols() {
                    if (null === this._sync) {
                        const e = this._sync = this._synchronize({
                            assert: () => {
                                if (this._sync !== e) throw new Error(A)
                            },
                            cancel: () => {
                                this._sync = null
                            }
                        }).then((() => {
                            this._sync = null
                        }), (e => {
                            throw this._sync = null, e
                        }))
                    }
                    return this._sync
                }
                anonymize() {
                    null !== this._service && this._service.store.dispatch((0, o.setup)({
                        timestamp: Date.now(),
                        lists: []
                    }))
                }
                connect() {
                    this._subscribeOnPushStream()
                }
                closeConnection() {
                    this._unsubscribeOnPushStream()
                }
                _resolve(e) {
                    const t = new Set;
                    for (const s of e)
                        if (void 0 !== s.symbols)
                            for (const e of s.symbols) {
                                (0, S.safeShortName)(e) === e && t.add(e)
                            }
                    const s = Array.from(t).map((e => this._session.snapshot(e).then((t => t.pro_name || e), (() => e)).then((t => [e, t]))));
                    return Promise.all(s).then((t => {
                        const s = new Map(t);
                        return e.map((e => {
                            var t;
                            const n = null !== (t = e.symbols) && void 0 !== t ? t : [];
                            return {
                                id: e.id,
                                name: e.name,
                                description: e.description,
                                color: e.color,
                                shared: e.shared,
                                symbols: n.map((e => {
                                    var t;
                                    return null !== (t = s.get(e)) && void 0 !== t ? t : e
                                }))
                            }
                        }))
                    }))
                }
                async _synchronize(e) {
                    let t, s;
                    null !== this._executor && (this._executor.destroy(), this._executor = null, x.logNormal("Executor was destroyed."));
                    try {
                        this._recover && await (0, y.syncUserData)("marked-symbols");
                        const [n] = await Promise.all([this._api.getLists(), this._promise]);
                        t = await this._resolve(n), s = Date.now(), e.assert()
                    } catch (e) {
                        if (e instanceof Error) {
                            if (x.logError(`Sync symbols error: ${e.message}`), e.message === A) return;
                            if ("ApiError:not_authenticated" === e.name) return this._recover || await (0, y.syncUserData)("marked-symbols"), void(0, O.showSignModal)({
                                feature: "flaggedSymbols"
                            })
                        }
                        throw e
                    }
                    this._recover = !1;
                    const {
                        store: i
                    } = (0, n.ensureNotNull)(this._service);
                    this._createExecutor();
                    const r = null !== this._state ? (0, o.getTimestamp)(this._state) : null;
                    if (null !== r && r >= s) return;
                    const l = (0, o.setup)({
                        lists: t.map((e => {
                            var t, s;
                            return {
                                name: null !== (t = e.name) && void 0 !== t ? t : null,
                                description: null !== (s = e.description) && void 0 !== s ? s : null,
                                color: e.color,
                                symbols: e.symbols,
                                shared: e.shared
                            }
                        })),
                        timestamp: s
                    });
                    i.dispatch(l)
                }
                _createExecutor() {
                    const {
                        store: e
                    } = (0, n.ensureNotNull)(this._service);
                    this._executor = new l({
                        root: e,
                        selector: e => (0, n.ensureNotNull)(I(e)),
                        api: this._api,
                        onError: this._handleExecutorError,
                        onWarn: e => {
                            x.logWarn(e)
                        }
                    }), x.logNormal("Executor was created")
                }
                _subscribeOnPushStream() {
                    g.pushStreamMultiplexer.on(D, this._onPushStreamChange), g.pushStreamMultiplexer.onPrivateStatus(this._onPushStreamStatus)
                }
                _unsubscribeOnPushStream() {
                    g.pushStreamMultiplexer.off(D, this._onPushStreamChange), g.pushStreamMultiplexer.offStatus(this._onPushStreamStatus), clearTimeout(P), T = null
                }
            }

            function q(e) {
                return o.ListColor.Red === e || (0, b.enabled)(v.ProductFeatures.MULTIFLAGGED_SYMBOLS_LISTS)
            }

            function B(e) {
                return !!q(e) || ((0, w.createGoProDialog)({
                    feature: "flaggedSymbols"
                }), !1)
            }
        },
        586584: (e, t, s) => {
            "use strict";
            s.d(t, {
                getMarkedSymbolsListServiceInstance: () => d
            });
            var n = s(797035),
                o = s(777754),
                i = s(916611),
                r = s(218333),
                l = s(963754);
            class a {
                constructor(e) {
                    this._symbolChangeHandlers = new Map, this._listChangeHandlers = [], this._initHandlers = [], this._sync = null, this._inited = !1, this._handleChange = (e, t) => {
                        if (e.lists !== t.lists) {
                            this._listChangeHandlers.forEach((s => {
                                try {
                                    s(e, t)
                                } catch (e) {}
                            }));
                            for (const [s, o] of Array.from(this._symbolChangeHandlers.entries())) {
                                const i = (0, n.getSymbolColor)(e, s),
                                    r = (0, n.getSymbolColor)(t, s);
                                i !== r && o.forEach((e => {
                                    try {
                                        e(i, r)
                                    } catch (e) {}
                                }))
                            }
                        }
                    }, this._onLoginStateChange = () => {
                        let e;
                        this._model.closeConnection(), window.is_authenticated ? (this._model.connect(), e = this._syncSymbols()) : (this._model.anonymize(), this._inited = !1, e = Promise.resolve()), e.then(this._fireInit)
                    }, this._fireInit = () => {
                        this._initHandlers.forEach((e => e()))
                    }, this._runWithSync = e => {
                        this._sync ? this._sync.then(e) : e()
                    }, this._model = new i.MarkedSymbolsListModel({
                        api: e ? e.api : void 0,
                        quoteSession: e ? e.quoteSession : void 0,
                        onChange: this._handleChange,
                        limit: null == e ? void 0 : e.limit,
                        onLimit: u,
                        colors: null == e ? void 0 : e.colors
                    }), this._subscribeLoginStateChange(), this._syncSymbols().then(this._fireInit)
                }
                getSymbolsByColor(e) {
                    return this._model.getSymbolsByColor(e)
                }
                setSymbolsColor(e, t) {
                    0 !== e.length && this._runWithSync((() => {
                        this._model.setSymbolsColor(e, t)
                    }))
                }
                getSymbolColor(e) {
                    return this._model.getSymbolColor(e)
                }
                markMany(e) {
                    this._runWithSync((() => {
                        this._model.markMany(e)
                    }))
                }
                clearAllSymbolsColor() {
                    this._runWithSync((() => {
                        this._model.clearAllSymbolsColor()
                    }))
                }
                adjustSymbolsColors(e) {
                    const t = new l.ColorManager({
                            context: l.ColorContext.SymbolMarker
                        }),
                        s = !e.map((e => this.getSymbolColor(e))).includes(null);
                    this.setSymbolsColor(e, s ? null : t.getColor())
                }
                onSymbolChange(e, t) {
                    const s = this._symbolChangeHandlers.get(e);
                    s ? s.push(t) : this._symbolChangeHandlers.set(e, [t])
                }
                offSymbolChange(e, t) {
                    const s = this._symbolChangeHandlers.get(e);
                    if (s) {
                        const n = s.filter((e => e !== t));
                        n.length > 0 ? this._symbolChangeHandlers.set(e, n) : this._symbolChangeHandlers.delete(e)
                    }
                }
                onListChange(e) {
                    this._listChangeHandlers.push(e)
                }
                offListChange(e) {
                    this._listChangeHandlers = this._listChangeHandlers.filter((t => t !== e))
                }
                onInit(e) {
                    this._initHandlers.push(e)
                }
                offInit(e) {
                    this._initHandlers = this._initHandlers.filter((t => t !== e))
                }
                destroy() {
                    this._model.closeConnection(), this._unsubscribeLoginStateChange()
                }
                isInited() {
                    return this._inited
                }
                _subscribeLoginStateChange() {
                    window.loginStateChange && window.loginStateChange.subscribe(this, this._onLoginStateChange)
                }
                _unsubscribeLoginStateChange() {
                    window.loginStateChange && window.loginStateChange.unsubscribe(this, this._onLoginStateChange)
                }
                _syncSymbols() {
                    if (window.is_authenticated) {
                        this._sync = this._model.syncSymbols();
                        const e = () => {
                            this._sync = null, this._inited = !0
                        };
                        return this._sync.then(e).catch(e)
                    }
                    return Promise.resolve()
                }
            }
            let c = null;

            function u() {
                c || (c = (0, r.createNoticeDialog)({
                    title: o.t(null, void 0, s(57467)),
                    content: o.t(null, void 0, s(372896)).format({
                        limit: String(i.symbolsLimit)
                    })
                }), c.then((e => {
                    e.on("afterClose", (() => {
                        c = null
                    })), e.open()
                })))
            }
            let h = null;

            function d() {
                return null === h && (h = new a), h
            }
        },
        948549: (e, t, s) => {
            "use strict";
            s.d(t, {
                SymbolMarkerSettings: () => n,
                SymbolsFilterSettings: () => o
            });
            var n, o, i = s(797035),
                r = s(62802);
            ! function(e) {
                const t = "default_symbol_marker_color";
                e.getDefaultColor = function() {
                    return r.getValue(t, i.ListColor.Red)
                }, e.setDefaultColor = function(e) {
                    r.setValue(t, e, {
                        forceFlush: !0
                    })
                }
            }(n || (n = {})),
            function(e) {
                const t = "default_symbols_filter_color",
                    s = "marked_symbols_filter";
                e.getDefaultColor = function() {
                    return r.getValue(t, i.ListColor.Red)
                }, e.setDefaultColor = function(e) {
                    r.setValue(t, e, {
                        forceFlush: !0
                    })
                }, e.setIsActive = function(e) {
                    r.setValue(s, e, {
                        forceFlush: !0
                    })
                }, e.getIsActive = function() {
                    return r.getBool(s, !1)
                }
            }(o || (o = {}))
        },
        591152: (e, t, s) => {
            "use strict";
            s.d(t, {
                shareMarkedList: () => l,
                shareCustomList: () => a,
                getOwnSharedList: () => c
            });
            var n = s(797035),
                o = s(890740),
                i = s(658583),
                r = s(822714);

            function l(e, t) {
                return (0, o.fetch)(`/api/v1/symbols_list/colored/${e}/share/`, {
                    method: "POST",
                    body: JSON.stringify({
                        shared: t
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(i.handleJSON).then(r.convertToMarkedSymbolList)
            }

            function a(e, t) {
                return (0, o.fetch)(`/api/v1/symbols_list/custom/${e}/share/`, {
                    method: "POST",
                    body: JSON.stringify({
                        shared: t
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(i.handleJSON).then(r.convertToCustomSymbolList)
            }

            function c(e) {
                return (0, n.isListColor)(e) ? (0, o.fetch)(`/api/v1/symbols_list/colored/${e}`, {
                    method: "GET"
                }).then(i.handleJSON) : (0, o.fetch)(`/api/v1/symbols_list/custom/${e}`, {
                    method: "GET"
                }).then(i.handleJSON)
            }
        },
        303616: (e, t, s) => {
            "use strict";
            s.d(t, {
                SimpleDialogContext: () => n
            });
            const n = s(50959).createContext({
                isSmallTablet: !1,
                dialogCloseHandler: () => {}
            })
        },
        894185: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                confirmModule: () => y,
                renameModule: () => f,
                showSimpleDialog: () => C,
                warningModule: () => S
            });
            var n = s(50959),
                o = s(777754),
                i = s(927582);

            function r(e) {
                return "html" in e ? {
                    html: e.html
                } : {
                    content: e.text
                }
            }
            var l = s(303616),
                a = s(45553),
                c = s(760365);

            function u(e) {
                const {
                    maxLength: t,
                    value: s,
                    placeholder: o,
                    onValueChange: i,
                    nameInputRef: r,
                    source: u = [],
                    autocompleteFilter: h
                } = e, {
                    isSmallTablet: d
                } = (0, n.useContext)(l.SimpleDialogContext), m = n.useRef(null);
                return (0, n.useLayoutEffect)((() => {
                        m.current && m.current.select()
                    }), []),
                    n.createElement(n.Fragment, null, function() {
                        if ("content" in e) return n.createElement("div", {
                            className: c.label
                        }, e.content);
                        if ("html" in e) return n.createElement("div", {
                            className: c.label,
                            dangerouslySetInnerHTML: {
                                __html: e.html
                            }
                        });
                        return null
                    }(), n.createElement(a.Autocomplete, {
                        maxLength: t,
                        value: s,
                        onChange: function(e) {
                            i(e)
                        },
                        allowUserDefinedValues: !0,
                        preventOnFocusOpen: !0,
                        noEmptyText: !0,
                        source: u,
                        preventSearchOnEmptyQuery: !0,
                        filter: h,
                        setupHTMLInput: function(e) {
                            m.current = e, r && (r.current = e)
                        },
                        size: d ? "large" : void 0,
                        placeholder: o,
                        suggestionsInPortal: !0
                    }))
            }

            function h(e) {
                return Boolean(e.trim())
            }

            function d(e) {
                const {
                    buttonText: t,
                    intentButton: n,
                    actions: i
                } = e, r = [{
                    name: "ok",
                    title: t || o.t(null, void 0, s(468988)),
                    intent: n,
                    handler: ({
                        dialogClose: e
                    }) => {
                        e()
                    }
                }];
                return i && i.forEach((e => r.push(e))), r
            }
            var m = s(500962),
                p = s(650151),
                g = s(670797);
            const _ = new(s(322654).DialogsOpenerManager);
            const y = function(e) {
                    const {
                        title: t,
                        onClose: l = (() => {}),
                        mainButtonText: a,
                        mainButtonIntent: c,
                        cancelButtonText: u,
                        closeOnOutsideClick: h,
                        onConfirm: d,
                        onCancel: m
                    } = e, p = r(e);
                    return n.createElement(i.SimpleDialog, { ...p,
                        title: t || o.t(null, void 0, s(994443)),
                        onClose: l,
                        actions: [{
                            name: "yes",
                            title: a || o.t(null, void 0, s(879831)),
                            intent: c || "success",
                            handler: d
                        }, {
                            name: "no",
                            title: u || o.t(null, void 0, s(606255)),
                            appearance: "stroke",
                            intent: "default",
                            handler: e => {
                                m ? m(e) : e.dialogClose()
                            }
                        }],
                        dataName: "confirm-dialog",
                        closeOnOutsideClick: h
                    })
                },
                f = function(e) {
                    const {
                        title: t,
                        maxLength: l,
                        initValue: a,
                        placeholder: c,
                        onClose: d = (() => {}),
                        mainButtonText: m,
                        mainButtonIntent: p,
                        cancelButtonText: g,
                        validator: _ = h,
                        onRename: y,
                        source: f,
                        autocompleteFilter: S
                    } = e, C = (0, n.useRef)(null), [b, v] = (0, n.useState)(a || ""), [w, O] = (0, n.useState)((() => _(b))), E = r(e);
                    return n.createElement(i.SimpleDialog, {
                        title: t || o.t(null, void 0, s(435038)),
                        content: n.createElement(u, { ...E,
                            nameInputRef: C,
                            maxLength: l,
                            placeholder: c,
                            value: b,
                            onValueChange: function(e) {
                                v(e), O(_(e))
                            },
                            source: f,
                            autocompleteFilter: S
                        }),
                        onClose: d,
                        actions: [{
                            disabled: !w,
                            name: "save",
                            title: m || o.t(null, void 0, s(185520)),
                            intent: p || "primary",
                            handler: ({
                                dialogClose: e,
                                innerManager: t
                            }) => y({
                                newValue: b,
                                focusInput: N,
                                dialogClose: e,
                                innerManager: t
                            })
                        }, {
                            name: "cancel",
                            title: g || o.t(null, void 0, s(620036)),
                            appearance: "stroke",
                            intent: "default",
                            handler: ({
                                dialogClose: e
                            }) => {
                                e()
                            }
                        }],
                        dataName: "rename-dialog"
                    });

                    function N() {
                        C.current && C.current.focus()
                    }
                },
                S = function(e) {
                    const {
                        title: t,
                        closeOnOutsideClick: l,
                        onClose: a = (() => {})
                    } = e, c = r(e);
                    return n.createElement(i.SimpleDialog, { ...c,
                        title: t || o.t(null, void 0, s(533603)),
                        onClose: a,
                        actions: d(e),
                        dataName: "warning-dialog",
                        closeOnOutsideClick: l
                    })
                },
                C = function(e, t, s) {
                    const {
                        title: o
                    } = e, i = `${o}_${"text"in e?e.text:e.html}`;
                    if (_.isOpened(i)) return (0, p.ensureDefined)(_.getDialogPayload(i)).closeHandler;
                    const r = document.createElement("div"),
                        l = () => {
                            var t;
                            null === (t = e.onClose) || void 0 === t || t.call(e), m.unmountComponentAtNode(r), _.setAsClosed(i)
                        };
                    return m.render(n.createElement(g.SlotContext.Provider, {
                        value: s || null
                    }, n.createElement(t, { ...e,
                        onClose: l
                    })), r), _.setAsOpened(i, {
                        closeHandler: l
                    }), l
                }
        },
        927582: (e, t, s) => {
            "use strict";
            s.d(t, {
                SimpleDialog: () => w
            });
            var n = s(50959),
                o = s(497754),
                i = s(83436),
                r = s(251954),
                l = s(500745),
                a = s(470316),
                c = s(18182),
                u = s(332450),
                h = s(642709),
                d = s(150881),
                m = s(540975),
                p = s(612247),
                g = s(650151),
                _ = s(640027),
                y = s(670797),
                f = s(303616),
                S = s(856433);

            function C(e) {
                const {
                    disabled: t,
                    name: s,
                    title: i,
                    appearance: r,
                    intent: l,
                    handler: a,
                    reference: c
                } = e, {
                    isSmallTablet: u,
                    dialogCloseHandler: h
                } = (0, n.useContext)(f.SimpleDialogContext), d = (0, g.ensureNotNull)((0, n.useContext)(y.SlotContext)), C = (0, _.useIsMounted)(), [b, v] = (0, n.useState)(!1);
                return n.createElement(m.Button, {
                    disabled: t,
                    reference: c,
                    className: o(S.actionButton, u && S.small),
                    name: s,
                    size: u ? "l" : void 0,
                    appearance: r,
                    intent: l,
                    onClick: function() {
                        if (b) return;
                        const e = a({
                            dialogClose: h,
                            innerManager: d
                        });
                        e && (v(!0), e.then((() => {
                            C.current && v(!1)
                        })))
                    }
                }, n.createElement("span", {
                    className: o(b && S.hiddenTitle)
                }, i), b && n.createElement(p.Loader, {
                    color: "white"
                }))
            }
            var b = s(507720),
                v = s(806730);

            function w(e) {
                const {
                    title: t,
                    onClose: s,
                    actions: m,
                    dataName: p,
                    popupDialogClassName: g,
                    contentClassName: _,
                    wrapperClassName: y,
                    backdrop: S,
                    closeOnOutsideClick: w = !0,
                    showCloseButton: O = !0,
                    closeOnEscapePress: E = !0
                } = e;
                (0, n.useEffect)((() => (r.subscribe(u.CLOSE_POPUPS_AND_DIALOGS_COMMAND, s, null), () => {
                    r.unsubscribe(u.CLOSE_POPUPS_AND_DIALOGS_COMMAND, s, null)
                })), [s]);
                const [N, k] = (0, n.useState)(!0), L = (0, n.useRef)(null);
                return n.createElement(c.MatchMedia, {
                    rule: h.DialogBreakpoints.TabletSmall
                }, (r => n.createElement(f.SimpleDialogContext.Provider, {
                    value: {
                        isSmallTablet: r,
                        dialogCloseHandler: s
                    }
                }, n.createElement(l.PopupDialog, {
                    className: o(v.popupDialog, g),
                    isOpened: N,
                    backdrop: S,
                    onClickBackdrop: x,
                    onClickOutside: w ? x : void 0,
                    onKeyDown: M,
                    autofocus: !0,
                    fixedBody: !0
                }, n.createElement("div", {
                    className: o(v.wrap, y),
                    "data-name": p
                }, n.createElement("div", {
                    className: o(v.main, !O && v.marginWithoutCloseButton, r && v.small)
                }, t && n.createElement("div", {
                    className: o(v.title, r && v.small)
                }, t), function(t) {
                    if ("html" in e) return n.createElement(d.TouchScrollContainer, {
                        className: o(v.content, t && v.small, v.html, _),
                        dangerouslySetInnerHTML: {
                            __html: e.html
                        }
                    });
                    if ("content" in e) return n.createElement(d.TouchScrollContainer, {
                        className: o(v.content, t && v.small, _)
                    }, e.content);
                    return null
                }(r), m && m.length > 0 && n.createElement("div", {
                    className: o(v.footer, r && v.small)
                }, m.map(((e, t) => n.createElement(C, { ...e,
                    key: e.name,
                    reference: 0 === t ? L : void 0
                }))))), O && n.createElement(i.Icon, {
                    className: o(v.close, r && v.small),
                    icon: b,
                    onClick: x,
                    "data-name": "close",
                    "data-role": "button"
                }))))));

                function M(e) {
                    switch ((0, a.hashFromEvent)(e)) {
                        case 27:
                            N && E && (e.preventDefault(), s());
                            break;
                        case 13:
                            if (N && m && m.length) {
                                e.preventDefault();
                                const t = L.current;
                                t && t.click()
                            }
                    }
                }

                function x() {
                    k(!1), s()
                }
            }
        },
        322654: (e, t, s) => {
            "use strict";
            s.d(t, {
                DialogsOpenerManager: () => n,
                dialogsOpenerManager: () => o
            });
            class n {
                constructor() {
                    this._storage = new Map
                }
                setAsOpened(e, t) {
                    this._storage.set(e, t)
                }
                setAsClosed(e) {
                    this._storage.delete(e)
                }
                isOpened(e) {
                    return this._storage.has(e)
                }
                getDialogPayload(e) {
                    return this._storage.get(e)
                }
            }
            const o = new n
        },
        494966: (e, t, s) => {
            "use strict";
            s.d(t, {
                safeShortName: () => o
            });
            var n = s(696828);

            function o(e) {
                try {
                    return (0, n.shortName)(e)
                } catch (t) {
                    return e
                }
            }
        },
        45553: (e, t, s) => {
            "use strict";
            s.d(t, {
                Autocomplete: () => p
            });
            var n = s(777754),
                o = s(50959),
                i = s(497754),
                r = s(416293),
                l = s(514420),
                a = s(142135),
                c = s(157490),
                u = s(733410),
                h = s(707533),
                d = s(185383);

            function m(e, t) {
                return "" === e || -1 !== t.toLowerCase().indexOf(e.toLowerCase())
            }
            class p extends o.PureComponent {
                constructor(e) {
                    if (super(e), this._containerInputElement = null, this._raf = null, this._resize = () => {
                            null === this._raf && (this._raf = requestAnimationFrame((() => {
                                this.setState({
                                    appearingWidth: void 0,
                                    appearingPosition: void 0,
                                    isMeasureValid: void 0
                                }), this._raf = null
                            })))
                        }, this._handleMeasure = () => {
                            if (this.state.isMeasureValid || !this.props.suggestionsInPortal || !this._containerInputElement) return;
                            const {
                                bottom: e,
                                left: t,
                                width: s
                            } = this._containerInputElement.getBoundingClientRect();
                            this.setState({
                                appearingWidth: s,
                                appearingPosition: {
                                    x: t,
                                    y: e
                                },
                                isMeasureValid: !0
                            })
                        }, this._setInputRef = e => {
                            e && (this._inputElement = e, this.props.setupHTMLInput && this.props.setupHTMLInput(e), this._inputElement.addEventListener("keyup", this._handleKeyUpEnter))
                        }, this._setContainerInputRef = e => {
                            this._containerInputElement = e
                        }, this._handleCaretClick = () => {
                            this.state.isOpened ? this.props.preventOnFocusOpen && this._focus() : this.props.preventOnFocusOpen ? this._open() : this._focus()
                        }, this._handleOutsideClick = () => {
                            const {
                                allowUserDefinedValues: e,
                                value: t,
                                onChange: s
                            } = this.props, {
                                queryValue: n
                            } = this.state;
                            e ? s && n !== t && s(n) : this.setState(this._valueToQuery(t)), this._close()
                        }, this._handleFocus = e => {
                            this.props.preventOnFocusOpen || this._open(), this.props.onFocus && this.props.onFocus(e)
                        }, this._handleChange = e => {
                            const {
                                preventSearchOnEmptyQuery: t,
                                allowUserDefinedValues: s,
                                onChange: n,
                                onSuggestionsOpen: o,
                                onSuggestionsClose: i
                            } = this.props, r = e.currentTarget.value;
                            if (t && "" === r) this.setState({
                                queryValue: r,
                                isOpened: !1,
                                active: void 0
                            }), i && i();
                            else {
                                const e = this._suggestions(r),
                                    t = Object.keys(e).length > 0;
                                this.setState({
                                    queryValue: r,
                                    isOpened: t,
                                    active: s ? void 0 : this._getActiveKeyByValue(r)
                                }), t && o && o()
                            }
                            s && n && n(r)
                        }, this._handleItemClick = e => {
                            const t = e.currentTarget.id;
                            this.setState({
                                queryValue: g(this.props.source)[t]
                            }), this.props.onChange && this.props.onChange(t), this._close()
                        }, this._handleKeyDown = e => {
                            if (-1 === [u.KeyCode.DownArrow, u.KeyCode.UpArrow, u.KeyCode.Enter, u.KeyCode.Escape].indexOf(e.which)) return;
                            const {
                                allowUserDefinedValues: t,
                                value: s,
                                onChange: n,
                                onSuggestionsOpen: o
                            } = this.props, {
                                active: i,
                                isOpened: r,
                                queryValue: l
                            } = this.state;
                            r && (e.preventDefault(), e.stopPropagation());
                            const a = this._suggestions(l);
                            switch (e.which) {
                                case u.KeyCode.DownArrow:
                                case u.KeyCode.UpArrow:
                                    const c = Object.keys(a);
                                    if (!r && c.length && e.which === u.KeyCode.DownArrow) {
                                        this.setState({
                                            isOpened: !0,
                                            active: c[0]
                                        }), o && o();
                                        break
                                    }
                                    let h;
                                    if (void 0 === i) {
                                        if (e.which === u.KeyCode.UpArrow) {
                                            this._close();
                                            break
                                        }
                                        h = 0
                                    } else h = c.indexOf(i) + (e.which === u.KeyCode.UpArrow ? -1 : 1);
                                    h < 0 && (h = 0), h > c.length - 1 && (h = c.length - 1);
                                    const d = c[h];
                                    this.setState({
                                        active: d
                                    });
                                    const m = document.getElementById(d);
                                    m && this._scrollIfNotVisible(m, this._suggestionsElement);
                                    break;
                                case u.KeyCode.Escape:
                                    this._close(), r || this._blur();
                                    break;
                                case u.KeyCode.Enter:
                                    let p = i;
                                    t && (r && p ? this.setState(this._valueToQuery(p)) : p = l), void 0 !== p && (this._close(), r || this._blur(),
                                        p !== s ? n && n(p) : this.setState(this._valueToQuery(p)))
                            }
                        }, this._setSuggestionsRef = e => {
                            e && (this._suggestionsElement = e)
                        }, this._scrollIfNotVisible = (e, t) => {
                            const s = t.scrollTop,
                                n = t.scrollTop + t.clientHeight,
                                o = e.offsetTop,
                                i = o + e.clientHeight;
                            o <= s ? e.scrollIntoView(!0) : i >= n && e.scrollIntoView(!1)
                        }, !(e => Array.isArray(e.source) || !e.allowUserDefinedValues)(e)) throw new Error("allowUserDefinedProps === true cay only be used if source is array");
                    this.state = {
                        valueFromProps: e.value,
                        isOpened: !1,
                        active: e.value,
                        queryValue: g(e.source)[e.value] || (e.allowUserDefinedValues ? e.value : "")
                    }
                }
                componentDidMount() {
                    this.props.suggestionsInPortal && window.addEventListener("resize", this._resize)
                }
                componentDidUpdate() {
                    this.state.isOpened && this._handleMeasure()
                }
                componentWillUnmount() {
                    this._inputElement && this._inputElement.removeEventListener("keyup", this._handleKeyUpEnter), null !== this._raf && (cancelAnimationFrame(this._raf), this._raf = null), window.removeEventListener("resize", this._resize)
                }
                render() {
                    return o.createElement(c.OutsideEvent, {
                        handler: this._handleOutsideClick,
                        click: !0
                    }, (e => o.createElement("div", {
                        className: i(d.autocomplete, "js-dialog-skip-escape"),
                        ref: e
                    }, o.createElement(a.InputControl, {
                        id: this.props.id,
                        name: this.props.name,
                        endSlot: Object.keys(this._suggestions(this.state.queryValue)).length ? o.createElement(l.EndSlot, null, o.createElement("span", {
                            className: d.caret,
                            onClick: this._handleCaretClick
                        }, o.createElement(r.ToolWidgetCaret, {
                            className: d.icon,
                            dropped: this.state.isOpened
                        }))) : void 0,
                        maxLength: this.props.maxLength,
                        reference: this._setInputRef,
                        containerReference: this._setContainerInputRef,
                        stretch: !0,
                        placeholder: this.props.placeholder,
                        value: this.state.queryValue,
                        intent: this.props.error ? "danger" : void 0,
                        onChange: this._handleChange,
                        onFocus: this._handleFocus,
                        onBlur: this.props.onBlur,
                        onMouseOver: this.props.onMouseOver,
                        onMouseOut: this.props.onMouseOut,
                        onKeyDown: this._handleKeyDown,
                        autoComplete: "off",
                        size: this.props.size
                    }), this._renderSuggestions())))
                }
                static getDerivedStateFromProps(e, t) {
                    const {
                        allowUserDefinedValues: s,
                        value: n,
                        source: o
                    } = e;
                    if (n === t.valueFromProps && t.isOpened) return null;
                    const i = s ? n : "" === n ? "" : g(o)[n] || t.queryValue;
                    return { ...t,
                        valueFromProps: n,
                        active: n,
                        queryValue: i
                    }
                }
                _renderSuggestions() {
                    return this.props.suggestionsInPortal ? this.state.isOpened ? this._renderPortalSuggestions() : null : this._renderSuggestionsItems()
                }
                _renderPortalSuggestions() {
                    return o.createElement(h.Portal, null, this._renderSuggestionsItems())
                }
                _focus() {
                    this._inputElement.focus()
                }
                _blur() {
                    this._inputElement.blur()
                }
                _open() {
                    const {
                        onSuggestionsOpen: e
                    } = this.props;
                    this._focus(), this.setState({
                        isOpened: !0,
                        active: this.props.value
                    }), e && e()
                }
                _close() {
                    const {
                        onSuggestionsClose: e
                    } = this.props;
                    this.setState({
                        isOpened: !1,
                        active: void 0
                    }), e && e()
                }
                _suggestions(e) {
                    const {
                        filter: t = m
                    } = this.props, s = g(this.props.source), n = {};
                    return Object.keys(s).filter((n => t(e, s[n]))).forEach((e => n[e] = s[e])), n
                }
                _renderSuggestionsItems() {
                    const e = this._suggestions(this.state.queryValue),
                        t = Object.keys(e).map((t => {
                            const s = i(d.suggestion, this.state.active === t && d.selected);
                            return o.createElement("li", {
                                id: t,
                                key: t,
                                className: s,
                                onClick: this._handleItemClick
                            }, e[t])
                        })),
                        r = o.createElement("li", {
                            className: d.noResults
                        }, n.t(null, void 0, s(356614)));
                    if (!t.length && this.props.noEmptyText) return null;
                    const {
                        appearingPosition: l,
                        appearingWidth: a
                    } = this.state;
                    return o.createElement("ul", {
                        className: i(d.suggestions, this.state.isOpened && d.opened),
                        ref: this._setSuggestionsRef,
                        style: {
                            left: l && l.x,
                            top: l && l.y,
                            width: a && a
                        }
                    }, t.length ? t : r)
                }
                _handleKeyUpEnter(e) {
                    e.which === u.KeyCode.Enter && e.stopImmediatePropagation()
                }
                _getActiveKeyByValue(e) {
                    const {
                        filter: t = m
                    } = this.props, s = this._suggestions(e), n = Object.keys(s);
                    for (const o of n)
                        if (t(e, s[o])) return o;
                    return n[0]
                }
                _valueToQuery(e) {
                    return {
                        queryValue: g(this.props.source)[e] || ""
                    }
                }
            }

            function g(e) {
                let t = {};
                return Array.isArray(e) ? e.forEach((e => {
                    t[e] = e
                })) : t = e, t
            }
        },
        507720: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="currentColor"><path d="m.58 1.42.82-.82 15 15-.82.82z"/><path d="m.58 15.58 15-15 .82.82-15 15z"/></svg>'
        }
    }
]);
"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [35883], {
        776324: (t, e, s) => {
            s.d(e, {
                setup: () => u,
                insert: () => d,
                replace: () => S,
                exact: () => m,
                exclude: () => y,
                remove: () => p,
                create: () => h,
                put: () => b,
                rename: () => _,
                changeDescription: () => f,
                share: () => L,
                reducer: () => I,
                createCrossTabSyncMiddleware: () => T,
                getListsMap: () => g,
                getListById: () => E,
                getListIds: () => v
            });
            var o = s(826300),
                i = s(199669),
                r = s(340958),
                n = s(559986);
            const a = {
                lists: {
                    ids: [],
                    byId: {}
                },
                timestamp: null
            };

            function l(t, e) {
                t.lists.ids.push(e.id), t.lists.byId[e.id] = {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    symbols: [...e.symbols],
                    shared: e.shared
                }
            }
            const c = (0, o.createSlice)({
                    name: "custom-lists",
                    initialState: a,
                    reducers: {
                        setup: (t, e) => {
                            const {
                                lists: s,
                                timestamp: o
                            } = e.payload, i = {
                                lists: {
                                    ids: [],
                                    byId: {}
                                },
                                timestamp: null
                            };
                            for (const t of s) l(i, t);
                            return i.timestamp = o, i
                        },
                        insert: (t, e) => {
                            const {
                                id: s,
                                symbols: o,
                                before: i
                            } = e.payload, {
                                lists: a
                            } = t, l = a.byId[s];
                            if (void 0 === l) return;
                            const c = new Set(o);
                            let u;
                            if (void 0 !== i && c.has(i)) {
                                u = n.LIST_START;
                                for (let t = l.symbols.indexOf(i); t >= 0; --t)
                                    if (!c.has(l.symbols[t])) {
                                        u = l.symbols[t];
                                        break
                                    }
                            }
                            const d = l.symbols.filter((t => !c.has(t))),
                                S = (0, n.getTargetIndex)(d, i, u);
                            void 0 === S ? d.push(...c) : d.splice(S, 0, ...c), (0, r.equalArrays)(d, l.symbols) || (l.symbols = d)
                        },
                        replace: (t, e) => {
                            const {
                                id: s,
                                current: o,
                                next: i
                            } = e.payload, {
                                lists: r
                            } = t, n = r.byId[s];
                            if (void 0 === n) return;
                            if (o === i) return;
                            let a = !1,
                                l = !1;
                            const c = [];
                            for (const t of n.symbols) {
                                if (t === i) {
                                    l = !0;
                                    break
                                }
                                t === o ? (c.push(i), a = !0) : c.push(t)
                            }
                            a && !l && (n.symbols = c)
                        },
                        exact: (t, e) => {
                            const {
                                id: s,
                                symbols: o
                            } = e.payload, {
                                lists: i
                            } = t, n = i.byId[s];
                            if (void 0 === n) return;
                            const a = [...new Set(o)];
                            (0, r.equalArrays)(a, n.symbols) || (n.symbols = a)
                        },
                        exclude: (t, e) => {
                            const {
                                id: s,
                                symbols: o
                            } = e.payload, {
                                lists: i
                            } = t, n = i.byId[s];
                            if (void 0 === n) return;
                            const a = new Set(o),
                                l = n.symbols.filter((t => !a.has(t)));
                            (0, r.equalArrays)(l, n.symbols) || (n.symbols = l)
                        },
                        remove: (t, e) => {
                            const {
                                id: s
                            } = e.payload, {
                                lists: o
                            } = t;
                            if (void 0 === o.byId[s]) return;
                            const i = o.ids.filter((t => t !== s));
                            o.ids = i, delete o.byId[s]
                        },
                        create: (t, e) => {
                            const {
                                id: s,
                                name: o,
                                symbols: i
                            } = e.payload, {
                                lists: r
                            } = t;
                            void 0 === r.byId[s] && l(t, {
                                id: s,
                                name: o,
                                symbols: i,
                                shared: !1,
                                description: null
                            })
                        },
                        put: (t, e) => {
                            const {
                                id: s,
                                name: o,
                                description: i,
                                symbols: r,
                                shared: n
                            } = e.payload, {
                                lists: a
                            } = t;
                            void 0 === a.byId[s] ? l(t, {
                                id: s,
                                name: o,
                                description: i,
                                symbols: r,
                                shared: n
                            }) : a.byId[s] = {
                                id: s,
                                name: o,
                                description: i,
                                shared: n,
                                symbols: [...r]
                            }
                        },
                        rename: (t, e) => {
                            const {
                                id: s,
                                name: o
                            } = e.payload, {
                                lists: i
                            } = t, r = i.byId[s];
                            void 0 !== r && r.name !== o && (r.name = o)
                        },
                        changeDescription: (t, e) => {
                            const {
                                id: s,
                                description: o
                            } = e.payload, {
                                lists: i
                            } = t, r = i.byId[s];
                            void 0 !== r && r.description !== o && (r.description = o)
                        },
                        share: (t, e) => {
                            const {
                                id: s,
                                shared: o
                            } = e.payload, {
                                lists: i
                            } = t, r = i.byId[s];
                            void 0 !== r && r.shared !== o && (r.shared = o)
                        }
                    }
                }),
                {
                    setup: u,
                    insert: d,
                    replace: S,
                    exact: m,
                    exclude: y,
                    remove: p,
                    create: h,
                    put: b,
                    rename: _,
                    changeDescription: f,
                    share: L
                } = c.actions,
                {
                    reducer: I
                } = c;

            function T(t, e, s = c) {
                return (0, i.createCrossTabSyncMiddleware)({
                    id: t,
                    channel: e,
                    event: "custom-list-cross-tab-sync",
                    filter: t => function(t, e) {
                        return e.actions.setup.match(t) || e.actions.insert.match(t) || e.actions.exclude.match(t) || e.actions.exact.match(t) || e.actions.replace.match(t) || e.actions.remove.match(t) || e.actions.create.match(t) || e.actions.put.match(t) || e.actions.rename.match(t) || e.actions.changeDescription.match(t) || e.actions.share.match(t)
                    }(t, s)
                })
            }

            function g(t) {
                return t.lists.byId
            }

            function E(t, e) {
                var s;
                return null !== (s = g(t)[e]) && void 0 !== s ? s : null
            }

            function v(t) {
                return t.lists.ids
            }
        },
        722840: (t, e, s) => {
            s.d(e, {
                quoteSessionAdapters: () => S
            });
            var o = s(650151),
                i = s(947809),
                r = s(696828),
                n = s(564907),
                a = s(237037),
                l = s(833813),
                c = s(632446),
                u = s(837657);
            class d {
                constructor(t, e, s = "watchlist") {
                    this._symbolDataHandlers = new Map, this._fastSymbols = new Set, this._subscribedSymbols = new Set, this._subscriptionSet = new Set, this._cancelSubscriptionSet = new Set, this._quoteSessionDataHandler = t => {
                        const e = (0, o.ensureDefined)(t.symbolname),
                            {
                                filtered: s,
                                keepSubscription: i
                            } = this._applyDataFilters(t);
                        i || this._unsubscribeSymbols([e]), this._setSymbolDataCache(e, s);
                        const r = this._symbolDataHandlers.get(e);
                        r && r(s)
                    }, this._clientId = t, this._quoteSession = (0, i.getQuoteSessionInstance)(s), this._lastSymbolData = e || new Map
                }
                destroy() {
                    const t = Array.from(this._subscribedSymbols);
                    this._unsubscribeSymbols(t)
                }
                addFastSymbol(t) {
                    this._fastSymbols.has(t) || !this._subscribedSymbols.has(t) || (0, u.isSeparatorItem)(t) || (this._fastSymbols.add(t), this._quoteSession.setFastSymbols(this._clientId, Array.from(this._fastSymbols)))
                }
                removeFastSymbol(t) {
                    this._fastSymbols.has(t) && (this._fastSymbols.delete(t), this._quoteSession.setFastSymbols(this._clientId, Array.from(this._fastSymbols)))
                }
                addSymbolDataHandler(t, e) {
                    (0, u.isSeparatorItem)(t) || this._symbolDataHandlers.set(t, e)
                }
                removeSymbolDataHandler(t) {
                    this._symbolDataHandlers.delete(t)
                }
                addToSubscriptionSet(t) {
                    t.forEach((t => {
                        (0, u.isSeparatorItem)(t) || this._subscriptionSet.add(t)
                    }))
                }
                clearSubscriptionSet() {
                    this._subscriptionSet.clear()
                }
                addToCancelSubscriptionSet(t) {
                    t.forEach((t => {
                        (0, u.isSeparatorItem)(t) || this._cancelSubscriptionSet.add(t)
                    }))
                }
                commitSubscriptionChanges() {
                    Array.from(this._subscriptionSet).forEach((t => {
                        this._cancelSubscriptionSet.has(t) && (this._subscriptionSet.delete(t), this._cancelSubscriptionSet.delete(t))
                    })), this._subscribeSymbols(Array.from(this._subscriptionSet)), this._subscriptionSet.clear(), this._unsubscribeSymbols(Array.from(this._cancelSubscriptionSet)), this._cancelSubscriptionSet.clear(), this._quoteSession.setFastSymbols(this._clientId, Array.from(this._fastSymbols))
                }
                getLastSymbolData(t) {
                    return this._lastSymbolData.get(t)
                }
                _subscribeSymbols(t) {
                    this._quoteSession.subscribe(this._clientId, t, this._quoteSessionDataHandler), t.forEach((t => this._subscribedSymbols.add(t)))
                }
                _unsubscribeSymbols(t) {
                    this._quoteSession.unsubscribe(this._clientId, t, this._quoteSessionDataHandler), t.forEach((t => {
                        this._subscribedSymbols.delete(t)
                    }))
                }
                _setSymbolDataCache(t, e) {
                    var s;
                    const o = (null === (s = this._lastSymbolData.get(t)) || void 0 === s ? void 0 : s.values) || {};
                    this._lastSymbolData.set(t, { ...e,
                        values: { ...o,
                            ...e.values
                        }
                    })
                }
                _applyDataFilters(t) {
                    {
                        const e = () => (0,
                                c.enabled)(l.ProductFeatures.IDC_AVAILABLE_DELAY),
                            s = t => ({ ...t,
                                status: "sf_data",
                                values: {}
                            });
                        if ((t => (0, n.isSfQuoteData)(t) || (0, a.isIDCExchange)((0, r.getExchange)((0, o.ensureDefined)(t.symbolname)), !0))(t) && !e()) return {
                            filtered: s(t),
                            keepSubscription: !1
                        }
                    }
                    return {
                        filtered: t,
                        keepSubscription: !0
                    }
                }
            }
            const S = new class {
                constructor() {
                    this._adaptersMap = new Map, this._lastSymbolData = new Map
                }
                destroy() {
                    this._adaptersMap.forEach((t => {
                        t.forEach((t => t.destroy()))
                    })), this._lastSymbolData.clear()
                }
                get(t, e = "watchlist") {
                    let s;
                    const o = this._adaptersMap.get(t);
                    if (o) {
                        const i = o.get(e);
                        i ? s = i : (s = new d(t, this._lastSymbolData, e), o.set(e, s))
                    } else {
                        s = new d(t, this._lastSymbolData, e);
                        const o = new Map;
                        o.set(e, s), this._adaptersMap.set(t, o)
                    }
                    return s
                }
            }
        },
        850935: (t, e, s) => {
            s.r(e), s.d(e, {
                selectNextAvailableSymbol: () => i,
                showContextMenu: () => r,
                initWidget: () => n,
                updateWidget: () => a,
                updateWidgetOptions: () => l,
                selectAllSymbols: () => c,
                addOrUpdateSymbolList: () => u,
                removeSymbolList: () => d,
                setSymbolLists: () => S,
                selectHotlist: () => m,
                updatePosition: () => y,
                updateBulkPositions: () => p,
                updateActiveList: () => h
            });
            var o = s(189086);
            const i = (t, e, s, i) => ({
                    type: o.SELECT_NEXT_AVAILABLE_SYMBOL,
                    widgetId: t,
                    currentSymbol: e,
                    keyboardAction: s,
                    cancelSetOnChart: i
                }),
                r = (t, e, s, i) => ({
                    type: o.SHOW_CONTEXT_MENU,
                    symbol: e,
                    position: b(s),
                    widgetId: t,
                    size: i
                }),
                n = (t, e, s, i) => ({
                    type: o.INIT_WIDGET,
                    options: i,
                    id: t,
                    columns: s,
                    tickerType: e
                }),
                a = (t, e) => ({
                    type: o.UPDATE_WIDGET,
                    widgetId: t,
                    widget: e
                }),
                l = (t, e) => ({
                    type: o.UPDATE_WIDGET_OPTIONS,
                    widgetId: t,
                    options: e
                }),
                c = t => ({
                    type: o.SELECT_ALL_SYMBOLS,
                    widgetId: t
                }),
                u = t => ({
                    type: o.ADD_OR_UPDATE_SYMBOL_LIST,
                    symbolList: t
                }),
                d = t => ({
                    type: o.REMOVE_SYMBOL_LIST,
                    id: t
                }),
                S = t => ({
                    type: o.SET_SYMBOL_LISTS,
                    symbolLists: t
                }),
                m = (t, e, s) => ({
                    type: o.SELECT_HOTLIST,
                    widgetId: t,
                    exchange: e,
                    group: s
                }),
                y = (t, e) => ({
                    type: o.UPDATE_POSITIONS,
                    symbol: t,
                    position: e
                }),
                p = t => ({
                    type: o.UPDATE_BULK_POSITIONS,
                    map: t
                }),
                h = t => ({
                    type: o.UPDATE_ACTIVE_LIST,
                    id: t
                });

            function b(t) {
                var e;
                const s = null === (e = t.touches) || void 0 === e ? void 0 : e.map((t => ({
                    clientX: t.clientX,
                    clientY: t.clientY
                })));
                return {
                    clientX: t.clientX,
                    clientY: t.clientY,
                    touches: s,
                    attachToXBy: t.attachToXBy,
                    attachToYBy: t.attachToYBy,
                    boxHeight: t.boxHeight
                }
            }
        },
        217525: (t, e, s) => {
            s.d(e, {
                SET_IS_AUTHENTICATED: () => n,
                authReducer: () => l,
                watchAuth: () => c
            });
            var o = s(254773),
                i = s(336349),
                r = s(776324);
            const n = "AUTH__SET_IS_AUTHENTICATED";

            function a(t) {
                return {
                    type: n,
                    isAuthenticated: t
                }
            }

            function l(t = Boolean(window.is_authenticated), e) {
                return e.type === n ? e.isAuthenticated : t
            }

            function* c() {
                const t = (0, o.eventChannel)((t => {
                    const e = {};
                    return window.loginStateChange.subscribe(e, (() => t(window.is_authenticated))), () => window.loginStateChange.unsubscribeAll(e)
                }));
                try {
                    for (;;) {
                        const e = yield(0, i.take)(t);
                        yield(0, i.put)((0, r.setup)({
                            lists: [],
                            timestamp: Date.now(),
                            silent: !0
                        })), yield(0, i.put)(a(e))
                    }
                } finally {
                    t.close()
                }
            }
        },
        189086: (t, e, s) => {
            s.d(e, {
                SELECT_NEXT_AVAILABLE_SYMBOL: () => i,
                UPDATE_POSITIONS: () => r,
                UPDATE_BULK_POSITIONS: () => n,
                INIT_WIDGET: () => a,
                SHOW_CONTEXT_MENU: () => l,
                UPDATE_WIDGET: () => c,
                UPDATE_WIDGET_OPTIONS: () => u,
                SELECT_ALL_SYMBOLS: () => d,
                ADD_OR_UPDATE_SYMBOL_LIST: () => S,
                SET_SYMBOL_LISTS: () => m,
                REMOVE_SYMBOL_LIST: () => y,
                SELECT_HOTLIST: () => p,
                UPDATE_ACTIVE_LIST: () => h
            });
            const o = (0, s(66889).createActionTypeFactory)("WATCHLISTS"),
                i = o("SELECT_NEXT_AVAILABLE_SYMBOL"),
                r = o("UPDATE_POSITIONS"),
                n = o("UPDATE_BULK_POSITIONS"),
                a = o("INIT_WIDGET"),
                l = o("SHOW_CONTEXT_MENU"),
                c = o("UPDATE_WIDGET"),
                u = o("UPDATE_WIDGET_OPTIONS"),
                d = o("SELECT_ALL_SYMBOLS"),
                S = o("ADD_OR_UPDATE_SYMBOL_LIST"),
                m = o("SET_SYMBOL_LISTS"),
                y = o("REMOVE_SYMBOL_LIST"),
                p = o("SELECT_HOTLIST"),
                h = o("UPDATE_ACTIVE_LIST")
        },
        958613: (t, e, s) => {
            s.d(e, {
                isHotListId: () => i,
                createSymbolListId: () => r,
                hotListsSelector: () => n
            });
            const o = "###HOT###";

            function i(t) {
                return "string" == typeof t && 0 === t.indexOf(o)
            }

            function r(t, e) {
                return o + `${t}.${e}`
            }
            const n = t => {
                var e, s;
                return null !== (s = null === (e = t.hotLists) || void 0 === e ? void 0 : e.lists) && void 0 !== s ? s : null
            }
        },
        910865: (t, e, s) => {
            s.d(e, {
                getMarkedLists: () => a,
                getMarkedListByColor: () => l,
                getListSymbolsByColor: () => c
            });
            var o = s(377145),
                i = s(797035),
                r = s(916611),
                n = s(396121);
            const a = (0, o.createSelector)([r.getMarkedListsState], (t => {
                    const e = [];
                    if (null !== t)
                        for (const s of i.LIST_COLORS) {
                            const o = (0, i.getListByColor)(t, s);
                            null !== o && e.push((0, n.makeMarkedListFromRecord)(o))
                        }
                    return e
                })),
                l = (0, o.createSelector)([r.getMarkedListsState, (t, e) => e], ((t, e) => {
                    if (null === t) return null;
                    const s = (0, i.getListByColor)(t, e);
                    return null === s ? null : (0, n.makeMarkedListFromRecord)(s)
                })),
                c = (0, o.createSelector)([l], (t => {
                    var e;
                    return null !== (e = null == t ? void 0 : t.symbols) && void 0 !== e ? e : null
                }))
        },
        396121: (t, e, s) => {
            s.d(e, {
                getColoredListTitle: () => r,
                makeMarkedListFromRecord: () => n,
                getSortByColorComparator: () => a
            });
            var o = s(797035),
                i = s(777754);

            function r(t) {
                return {
                    [o.ListColor.Red]: i.t(null, void 0, s(97525)),
                    [o.ListColor.Green]: i.t(null, void 0, s(971464)),
                    [o.ListColor.Orange]: i.t(null, void 0, s(141393)),
                    [o.ListColor.Purple]: i.t(null, void 0, s(53171)),
                    [o.ListColor.Blue]: i.t(null, void 0, s(992447)),
                    [o.ListColor.Cyan]: i.t(null, void 0, s(240527)),
                    [o.ListColor.Pink]: i.t(null, void 0, s(816786))
                }[t]
            }

            function n(t) {
                return {
                    type: "colored",
                    id: t.color,
                    color: t.color,
                    symbols: t.symbols,
                    name: t.name || r(t.color),
                    description: t.description,
                    shared: t.shared
                }
            }

            function a(t) {
                const e = -1 === t ? -1 / 0 : 1 / 0;
                return (s, o) => {
                    const i = l(s, e),
                        r = l(o, e);
                    return i === r ? 0 : t * (i - r)
                }
            }

            function l(t, e) {
                return null === t ? e : o.LIST_COLORS.indexOf(t)
            }
        },
        38506: (t, e, s) => {
            s.r(e), s.d(e, {
                addWatchlistSymbolsThunk: () => D,
                createWatchlistThunk: () => g,
                getActiveWatchlistThunk: () => M,
                getCustomWatchlistsThunk: () => E,
                putCustomWatchlistsThunk: () => v,
                removeWatchlistSymbolsThunk: () => O,
                removeWatchlistThunk: () => w,
                renameWatchlistThunk: () => A,
                replaceWatchlistSymbolsThunk: () => C,
                setActiveWatchlistThunk: () => B,
                symbolListRepositorySaga: () => L,
                validateWatchListSymbols: () => I
            });
            var o = s(336349),
                i = s(776324),
                r = s(777754),
                n = s(564894),
                a = s(261309),
                l = s(850935),
                c = s(272001),
                u = s(779923),
                d = s(462282),
                S = s(15814),
                m = s(826939),
                y = s(497200);

            function* p() {
                for (yield(0, o.put)((0, y.asAction)(M(null)));;) {
                    yield(0, o.take)([i.remove, i.setup]);
                    const t = yield(0, o.select)();
                    null === (0, S.getCurrentViewableListByWidgetId)(t, m.WATCHLIST_WIDGET_ID) && (yield(0, o.put)((0, y.asAction)(M(null))))
                }
            }
            var h = s(217525),
                b = s(586584),
                _ = s(795394);
            const f = (0, c.getLogger)("Platform.Model.SymbolLists");

            function* L() {
                yield(0, o.fork)(h.watchAuth), yield(0, o.fork)(p)
            }

            function I(t) {
                return new Promise((e => {
                    (0, _.resolveSymbolNameForAllDistinct)(t).then((t => {
                        e(t)
                    }))
                }))
            }

            function T(t, e, o) {
                (0, u.showWarning)({
                    title: e || r.t(null, void 0, s(33115)),
                    text: t
                }, o)
            }

            function g(t) {
                const e = (0, n.service)(a.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE);
                return async (s, o) => {
                    try {
                        const o = await e.createWatchList(t);
                        return null === o ? null : (s((0, i.create)({
                            id: o.id,
                            name: o.name,
                            symbols: o.symbols
                        })), o.id)
                    } catch (t) {
                        return T(t.message), null
                    }
                }
            }
            const E = (0, d.respectLatest)((function(t) {
                const e = (0, n.service)(a.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE);
                return async (s, o) => {
                    try {
                        const o = await (0, d.respectAbort)(t, e.getCustomWatchLists());
                        s((0, i.setup)({
                            lists: o.map((t => ({
                                id: t.id,
                                name: t.name,
                                description: t.description,
                                symbols: t.symbols,
                                shared: t.shared
                            }))),
                            timestamp: Date.now()
                        }))
                    } catch (t) {
                        (0, d.skipAbortError)(t)
                    }
                }
            }));

            function v(t, e) {
                const s = (0, n.service)(a.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE);
                return async (o, r) => {
                    try {
                        const r = await (0, d.respectAbort)(t, s.putWatchList(e));
                        o((0, i.put)({
                            id: r.id,
                            name: r.name,
                            description: r.description,
                            symbols: r.symbols,
                            shared: r.shared
                        }))
                    } catch (t) {
                        (0, d.rethrowAbortError)(t), T(t.message)
                    }
                }
            }

            function A(t, e, s) {
                const o = (0, n.service)(a.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE);
                return async (r, n) => {
                    r((0, i.rename)({
                        id: e.id,
                        name: s
                    })), await (0, d.respectAbort)(t, o.renameWatchList(e, s))
                }
            }

            function C(t, e, o, l) {
                const c = (0, n.service)(a.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE);
                return async (n, a) => {
                    if ("custom" === e.type)
                        if (o.length > 1e3) {
                            const t = r.t(null, void 0, s(847746));
                            T(r.t(null, void 0, s(66596)).format({
                                number: 1e3.toString()
                            }), t, l)
                        } else n((0, i.exact)({
                            id: e.id,
                            symbols: o
                        })), await (0, d.respectAbort)(t, c.replaceSymbols(e, o));
                    else f.logWarn("Trying to modify not a custom watchlist")
                }
            }

            function D(t, e, s, o) {
                const r = (0, n.service)(a.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE);
                return async (n, a) => {
                    if ("custom" === e.type) {
                        n((0, i.insert)({
                            id: e.id,
                            symbols: s
                        }));
                        try {
                            await (0, d.respectAbort)(t, r.addSymbols(e, s))
                        } catch (t) {
                            if ((0, d.isAbortError)(t)) throw t;
                            const r = e.symbols.filter((t => !s.includes(t)));
                            n((0, i.exact)({
                                id: e.id,
                                symbols: r
                            })), T(t.message, void 0, o)
                        }
                    } else f.logWarn("Trying to modify not a custom watchlist")
                }
            }

            function O(t, e, s) {
                const o = (0, n.service)(a.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE);
                return async (r, n) => {
                    r((0, i.exclude)({
                        id: e.id,
                        symbols: s
                    })), await (0, d.respectAbort)(t, o.removeSymbols(e, s))
                }
            }

            function w(t, e) {
                const s = (0, n.service)(a.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE);
                return async (o, r) => {
                    await (0, d.respectAbort)(t, s.removeWatchList(e)), o((0, i.remove)({
                        id: e.id
                    }))
                }
            }

            function B(t, e) {
                const s = (0, n.service)(a.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE);
                return async (o, i) => {
                    o((0, l.updateActiveList)(e)), await (0, d.respectAbort)(t, s.setActive(e))
                }
            }
            const M = (0, d.respectLatest)((function(t) {
                const e = (0, n.service)(a.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE);
                return async (s, o) => {
                    try {
                        const o = await (0, d.respectAbort)(t, e.getActive());
                        if ("custom" !== o.type) {
                            const e = (0, b.getMarkedSymbolsListServiceInstance)();
                            e.isInited() || await (0, d.respectAbort)(t, new Promise((t => {
                                e.onInit(t)
                            })))
                        } else "custom" === o.type && (o.symbols = await (0, d.respectAbort)(t, I(o.symbols))), s((0, i.put)({
                            id: o.id,
                            name: o.name,
                            description: o.description,
                            symbols: o.symbols,
                            shared: o.shared
                        }));
                        s((0, l.updateActiveList)("custom" === o.type ? o.id : o.color))
                    } catch (t) {
                        (0, d.skipAbortError)(t)
                    }
                }
            }))
        },
        497200: (t, e, s) => {
            function o(t) {
                return t
            }
            s.d(e, {
                asAction: () => o
            })
        },
        15814: (t, e, s) => {
            s.r(e), s.d(e, {
                columnsSelector: () => I,
                currentHotListSelector: () => B,
                getCurrentViewableListByWidgetId: () => w,
                getCustomListById: () => D,
                getCustomLists: () => v,
                getCustomListsMap: () => C,
                getCustomListsState: () => d,
                getGlobalActiveID: () => p,
                getGlobalActiveSymbolList: () => O,
                getIsReadyCustomLists: () => A,
                highlightedSymbolsSelector: () => L,
                isAuthenticatedSelector: () => S,
                isLoadingSelector: () => M,
                makeGetIsContainedByMultiSelection: () => P,
                positionSelector: () => R,
                scrollToIdSelector: () => _,
                selectedSymbolsSelector: () => b,
                shouldDisplayPositionsSelector: () => E,
                sortingSelector: () => f,
                tickerTypeSelector: () => T,
                widgetOptionsSelector: () => g,
                widgetSelector: () => h
            });
            var o = s(377145),
                i = s(650151),
                r = s(776324),
                n = s(797035),
                a = s(916611),
                l = s(396121),
                c = s(958613);

            function u(t) {
                return {
                    type: "custom",
                    id: t.id,
                    name: t.name,
                    description: t.description,
                    symbols: t.symbols,
                    shared: t.shared
                }
            }

            function d(t) {
                return t.customLists
            }
            const S = t => t.isAuthenticated,
                m = t => t.widgets,
                y = (t, e) => e,
                p = t => t.activeSymbolList,
                h = (0, o.createSelector)([m, y], ((t, e) => t[e] || {})),
                b = (0, o.createSelector)(h, (t => t.selectedSymbols || [])),
                _ = (0, o.createSelector)(h, (t => t.scrollToId)),
                f = (0, o.createSelector)(h, (t => t.sorting || null)),
                L = (0, o.createSelector)(h, (t => t.highlightedSymbols || null)),
                I = (0, o.createSelector)(h, (t => t.columns)),
                T = (0, o.createSelector)(h, (t => t.tickerType)),
                g = (0, o.createSelector)(h, (t => t.options || {})),
                E = (0, o.createSelector)([g, S], ((t, e) => t.shouldDisplayPositions && e)),
                v = (0, o.createSelector)(d, (t => (0, r.getListIds)(t).map((e => u((0, i.ensureNotNull)((0, r.getListById)(t, e))))))),
                A = (0, o.createSelector)([d], (t => null !== t.timestamp)),
                C = (0, o.createSelector)([d], r.getListsMap),
                D = (0, o.createSelector)([d, (t, e) => e], ((t, e) => {
                    const s = (0, r.getListById)(t, e);
                    return null === s ? null : u(s)
                })),
                O = (0, o.createSelector)([d, a.getMarkedListsState, p], ((t, e, s) => {
                    if (null === s) return null;
                    if (null !== e && (0, n.isListColor)(s)) {
                        const t = (0, n.getListByColor)(e, s);
                        return null === t ? null : (0, l.makeMarkedListFromRecord)(t)
                    } {
                        const e = (0, r.getListById)(t, s);
                        return null === e ? null : u(e)
                    }
                })),
                w = (0, o.createSelector)([c.hotListsSelector, d, a.getMarkedListsState, m, y], ((t, e, s, o, i) => {
                    var a;
                    const d = o[i];
                    if (void 0 === d) return null;
                    const S = d.listId;
                    if (null === S) return null;
                    if (null !== s && (0, n.isListColor)(S)) {
                        const t = (0, n.getListByColor)(s, S);
                        return null === t ? null : (0, l.makeMarkedListFromRecord)(t)
                    }
                    if ((0, c.isHotListId)(S)) return null !== (a = null == t ? void 0 : t[S]) && void 0 !== a ? a : null;
                    const m = (0, r.getListById)(e, S);
                    return null !== m ? u(m) : null
                }));

            function B(t, e) {
                const s = w(t, e);
                return "hot" !== (null == s ? void 0 : s.type) ? null : s
            }
            const M = (0, o.createSelector)([h, w], ((t, e) => null === e || t.isLoading || !1)),
                R = (0, o.createSelector)([t => t.positions, (t, e) => e], ((t, e) => t[e]));

            function P() {
                const t = (0, o.createSelector)([(t, e) => e.widgetId, t => t.widgets], ((t, e) => e[t])),
                    e = (0,
                        o.createSelector)(t, (t => t.selectedSymbols || [])),
                    s = (0, o.createSelector)(e, (t => new Set(t)));
                return (0, o.createSelector)([s, (t, e) => e.symbol], ((t, e) => t.size > 1 && t.has(e)))
            }
        },
        456746: (t, e, s) => {
            s.d(e, {
                isValidSeparatorItem: () => _,
                separatorValToDisplayVal: () => f,
                convertToSeparatorName: () => L,
                buildUniqueName: () => I,
                canUseMultipleLists: () => T,
                isImportDataValid: () => g,
                createSaveRenameDialog: () => E,
                sortSymbols: () => A,
                getTranslatedListTitle: () => O,
                compareSymbols: () => w,
                toPositionRecord: () => B,
                isEqualRecords: () => M,
                hasDuplicates: () => R,
                getSymbolFromList: () => P,
                findNextAvailableSymbol: () => k,
                trackRemoveEvent: () => N,
                openSymbolPage: () => Y,
                createConfirmRemoveText: () => W
            });
            var o = s(650151),
                i = s(777754),
                r = s(495046),
                n = s(779923),
                a = s(575816),
                l = s(722840),
                c = s(120379),
                u = s(837657),
                d = s(173777),
                S = s(345848),
                m = s(494966),
                y = s(812191),
                p = s(396121),
                h = s(586584),
                b = s(795394);

            function _(t) {
                return (0, u.isSeparatorItem)(t)
            }

            function f(t) {
                return t.replace(d.SEPARATOR_PREFIX, "")
            }

            function L(t) {
                return d.SEPARATOR_PREFIX + t
            }

            function I(t, e, s = !0) {
                const o = new Set(t),
                    i = s ? " 1" : "";
                if (!o.has(e + i)) return e + i;
                let r = 2,
                    n = "";
                for (; r <= 2e3 && (n = `${e} ${r}`, o.has(n));) r += 1;
                return n
            }

            function T() {
                return r.enabled("multiple_watchlists") && window.user && Boolean(window.user.is_pro)
            }

            function g(t) {
                return "string" == typeof t && !/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/.test(t) && !/^[\r\n\t,]*$/.test(t)
            }

            function E(t, e, o) {
                return () => new Promise((r => {
                    (0, n.showRename)({
                        title: t,
                        initValue: e,
                        text: i.t(null, void 0, s(83796)) + ":",
                        maxLength: 128,
                        onRename: ({
                            newValue: t,
                            dialogClose: e
                        }) => {
                            r(t), e()
                        }
                    }, o)
                }))
            }

            function v(t) {
                return t.replace("−", "-")
            }

            function A(t, e, s, i, r) {
                const n = function(t) {
                    const e = [],
                        s = [];
                    t.forEach(((t, e) => {
                        (0, u.isSeparatorItem)(t) && s.push(e)
                    }));
                    let o = 0;
                    s.forEach((s => {
                        e.push({
                            values: t.slice(o, s),
                            separator: t[s]
                        }), o = s + 1
                    }));
                    const i = s[s.length - 1],
                        r = t.slice(i + 1);
                    return r.length > 0 && e.push({
                        values: r,
                        separator: null
                    }), e
                }(e);
                return n.forEach((e => {
                        e.values.sort(((e, n) => {
                            if ("flag" === s) {
                                const t = (0, h.getMarkedSymbolsListServiceInstance)().getSymbolColor(e),
                                    s = (0, h.getMarkedSymbolsListServiceInstance)().getSymbolColor(n);
                                return (0, p.getSortByColorComparator)(i)(t, s)
                            }
                            const u = l.quoteSessionAdapters.get(t).getLastSymbolData(e),
                                d = l.quoteSessionAdapters.get(t).getLastSymbolData(n),
                                S = C(u),
                                y = C(d),
                                b = (t, e) => {
                                    if (!t || "flag" === s) return;
                                    var o;
                                    return "error" === t.status ? void 0 : r === a.TickerType.Description && "short_name" === s ? (o = t.values, (0, c.getTranslatedSymbolDescription)(o) || (0, m.safeShortName)(e)) : t.values[s]
                                },
                                _ = b(u, e),
                                f = b(d, n);
                            return function(t, e) {
                                const s = -1 === e ? -1 / 0 : 1 / 0;
                                return (i, r, n, a) => {
                                    if ("rchp" !== t) {
                                        if (void 0 === i && void 0 === r) return 0;
                                        if (void 0 === i) return -e;
                                        if (void 0 === r) return e
                                    }
                                    switch (t) {
                                        case "short_name":
                                            return e * (i === r ? 0 : (0, o.ensure)(i) < (0, o.ensure)(r) ? -1 : 1);
                                        case "rchp":
                                            return n !== a ? n > a ? -1 : 1 : (n || (i = void 0), a || (r = void 0), D(i, r, e, s));
                                        case "last_price":
                                        case "change":
                                        case "change_percent":
                                            return D(i, r, e, s);
                                        case "volume":
                                            {
                                                const t = (0, o.ensure)(i) >= 1e100 ? s : Number(i),
                                                    n = (0, o.ensure)(r) >= 1e100 ? s : Number(r);
                                                return e * (t - n)
                                            }
                                        default:
                                            return (0, o.ensure)(i) > (0, o.ensure)(r) ? -1 : 1
                                    }
                                }
                            }(s, i)(_, f, S, y)
                        }))
                    })),
                    function(t) {
                        const e = [];
                        return t.forEach((({
                            values: t,
                            separator: s
                        }) => {
                            e.push(...t), null !== s && e.push(s)
                        })), e
                    }(n)
            }

            function C(t) {
                if (!t) return !1;
                const e = "pre_market" === t.values.current_session,
                    s = "post_market" === t.values.current_session;
                return e || s
            }

            function D(t, e, s, o) {
                let i = parseFloat(v(String(t))),
                    r = parseFloat(v(String(e)));
                return i = isNaN(i) ? o : i, r = isNaN(r) ? o : r, s * (i - r)
            }

            function O(t) {
                return "colored" === t.type ? t.name || (0, p.getColoredListTitle)(t.color) : t.name
            }

            function w(t, e) {
                return t === e || (0, m.safeShortName)(t) === e
            }

            function B(t) {
                return {
                    symbol: t.symbol,
                    side: t.side,
                    qty: t.qty,
                    avgPrice: t.avgPrice
                }
            }

            function M(t, e) {
                return t === e || void 0 !== t && void 0 !== e && (t.side === e.side && t.qty === e.qty && t.avgPrice === e.avgPrice && t.symbol === e.symbol)
            }

            function R(t) {
                const e = new Map;
                for (let s = 0; s < t.length; s++) {
                    const i = t[s].toUpperCase(),
                        r = (0, m.safeShortName)(i);
                    if (e.has(r)) {
                        const t = (0, o.ensureDefined)(e.get(r));
                        if (t.has(i) || t.has(r) || i === r) return !0;
                        t.add(i), e.set(r, t)
                    } else e.set(r, new Set([i]))
                }
                return !1
            }

            function P(t, e) {
                if (e.includes(t)) return t
            }

            function k(t, e, s) {
                const o = "next" === s;
                for (let s = t; o ? s < e.length : s >= 0; o ? s++ : s--)
                    if (!(0, u.isSeparatorItem)(e[s]) && s !== t) return e[s];
                for (let s = o ? 0 : e.length - 1; o ? s < t : s > t; o ? s++ : s--)
                    if (!(0, u.isSeparatorItem)(e[s])) return e[s]
            }

            function N(t) {
                t ? (0, S.trackEvent)("Watchlist", "Multi select", "Remove") : (0, S.trackEvent)("Watchlist", "Remove")
            }

            function Y(t, e) {
                (0, b.snapshoter)().getSnapshot(t, new Set(["type", "exchange", "typespecs"])).then((s => {
                    if ("error" !== s.status) {
                        const {
                            type: o,
                            exchange: i,
                            typespecs: r
                        } = s.values;
                        window.open((0, y.getSymbolPagePath)({
                            proName: t,
                            type: o,
                            typespecs: r,
                            exchange: i
                        })), e && e()
                    }
                }))
            }

            function W(t) {
                return i.t(null, {
                    plural: "Do you really want to delete {count} selected symbols?",
                    context: "symbols_and_drawings_count",
                    count: t,
                    replace: {
                        count: t.toString()
                    }
                }, s(222045))
            }
        },
        837657: (t, e, s) => {
            s.d(e, {
                isSeparatorItem: () => i
            });
            var o = s(173777);

            function i(t) {
                return (0, o.isSeparatorItem)(t)
            }
        },
        66889: (t, e, s) => {
            function o(t) {
                return e => t + "__" + e
            }
            s.d(e, {
                createActionTypeFactory: () => o
            })
        }
    }
]);
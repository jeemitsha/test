"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [19333], {
        237037: (t, e, s) => {
            function o(t, e = !1) {
                if (t && t.startsWith("exchange-")) return function(t, e = !1) {
                    const s = window.pro,
                        o = s.getProduct(t);
                    return !!s.isProductDefined(o) && (e ? !!o.idc_service_codes_delay : !!o.idc_service_codes)
                }(t, e);
                const s = (t || "").toLowerCase();
                return window.pro.getIDCExchanges(e).includes(s)
            }
            s.d(e, {
                isIDCExchange: () => o
            })
        },
        244692: (t, e, s) => {
            s.r(e), s.d(e, {
                reorderSymbolsThunk: () => W,
                sortSymbolsThunk: () => v,
                removeSelectedSymbolsThunk: () => C,
                markSymbolsThunk: () => w,
                removeSymbolsThunk: () => _,
                addSymbolsThunk: () => B,
                renameSymbolListThunk: () => A,
                clearSymbolListThunk: () => x,
                findInWatchlistThunk: () => G,
                updateScrollToIdThunk: () => O,
                addSymbolsToCustomListThunk: () => H,
                moveSymbolsToCustomListThunk: () => V,
                insertSymbolBeforeThunk: () => R,
                selectSymbolListThunk: () => F,
                userCreateWatchlistThunk: () => Y,
                saveListAsThunk: () => P,
                changeDescriptionThunk: () => U
            });
            var o = s(650151),
                l = s(776324),
                n = s(797035),
                i = s(916611),
                r = s(586584),
                c = s(910865),
                u = s(822714),
                a = s(440498),
                d = s(795394),
                m = s(777754),
                y = s(345848),
                h = s(850935),
                b = s(15814),
                g = s(837657),
                f = s(456746),
                S = s(826939),
                L = s(38506),
                T = s(462282),
                I = s(494966),
                p = s(779923),
                k = s(436779);

            function W(t, e) {
                return (s, o) => {
                    const l = o(),
                        {
                            isMovable: n
                        } = (0, b.widgetOptionsSelector)(l, t);
                    if (!n) return;
                    const i = (0, b.getCurrentViewableListByWidgetId)(l, t);
                    if (null !== i && "hot" !== i.type)
                        if ("custom" === i.type) {
                            const t = { ...i,
                                symbols: e
                            };
                            s((0, L.replaceWatchlistSymbolsThunk)(null, t, e))
                        } else(0, r.getMarkedSymbolsListServiceInstance)().markMany({
                            color: i.color,
                            symbols: e,
                            separators: !0
                        })
                }
            }

            function v(t, e, s) {
                return (n, i) => {
                    const c = i(),
                        u = (0, b.getCurrentViewableListByWidgetId)(c, t);
                    if (null === u) return;
                    if ("hot" === u.type) return;
                    const {
                        symbolsBeforeSorting: a
                    } = (0, b.widgetSelector)(c, t), d = (0, b.sortingSelector)(c, t), m = u.symbols;
                    let y;
                    if (null === e) y = (0, o.ensureNotNull)(a);
                    else {
                        const {
                            column: o,
                            direction: l
                        } = e;
                        y = (0, f.sortSymbols)(t, m, o, l, s)
                    }
                    "custom" === u.type ? (n((0, l.exact)({
                        id: u.id,
                        symbols: y
                    })), n((0, L.replaceWatchlistSymbolsThunk)(null, u, y))) : (0, r.getMarkedSymbolsListServiceInstance)().markMany({
                        color: u.color,
                        symbols: y,
                        separators: !0
                    }), n((0, h.updateWidget)(t, {
                        symbolsBeforeSorting: null === d ? [...m] : a,
                        sortingListId: u.id,
                        sorting: e
                    }))
                }
            }

            function C(t) {
                return (e, o) => {
                    const l = o(),
                        i = (0, b.getCurrentViewableListByWidgetId)(l, t);
                    if (null === i) return;
                    if ("hot" === i.type) return;
                    const {
                        isDeletable: r
                    } = (0, b.widgetOptionsSelector)(l, t);
                    if (!r) return;
                    const c = (0, b.selectedSymbolsSelector)(l, t);
                    if (0 === c.length) return;
                    const u = c[c.length - 1],
                        d = i.symbols[i.symbols.length - 1],
                        y = i.symbols.some((t => t === u)),
                        S = () => {
                            if (e(y && u !== d ? (0, h.selectNextAvailableSymbol)(t, u, "next", !0) : (0, h.updateWidget)(t, {
                                    selectedSymbols: []
                                })), "custom" === i.type) e(D(c, i));
                            else {
                                {
                                    const t = (0, n.remove)({
                                        symbols: c,
                                        color: i.color
                                    });
                                    e(t)
                                }
                            }
                            if ((0, f.trackRemoveEvent)(c.length > 1), !(0, a.isDeletedSymbolsList)(i.id)) {
                                const t = (0, b.getCustomListById)(l, a.DELETED_SYMBOLS_LIST_ID),
                                    o = c.filter((t => !(0, g.isSeparatorItem)(t)));
                                e(t ? (0, L.addWatchlistSymbolsThunk)(null, t, o) : (0, L.createWatchlistThunk)({
                                    id: a.DELETED_SYMBOLS_LIST_ID,
                                    name: m.t(null, void 0, s(97458)),
                                    type: "custom",
                                    shared: !1,
                                    symbols: o
                                }))
                            }
                        };
                    if (1 === c.length) return void S();
                    const T = document.activeElement;
                    (0, p.showConfirm)({
                        text: (0, f.createConfirmRemoveText)(c.length),
                        onConfirm: ({
                            dialogClose: t
                        }) => {
                            S(), t()
                        },
                        onClose: () => {
                            null == T || T.focus()
                        }
                    })
                }
            }

            function D(t, e) {
                return (s, o) => {
                    if ("colored" !== e.type)
                        if ("custom" !== e.type);
                        else {
                            const o = { ...e,
                                symbols: e.symbols.filter((e => !t.includes(e)))
                            };
                            s((0, L.removeWatchlistSymbolsThunk)(null, o, t))
                        }
                    else {
                        (0, r.getMarkedSymbolsListServiceInstance)().setSymbolsColor(t, null)
                    }
                }
            }

            function w(t, e, s, o) {
                return (l, n) => {
                    const i = (0, b.selectedSymbolsSelector)(n(), t).filter((t => !(0, g.isSeparatorItem)(t)));
                    i.length > 1 && (!e || i.includes(e)) || o ? ((0, r.getMarkedSymbolsListServiceInstance)().adjustSymbolsColors(i), i.length > 1 ? (0, y.trackEvent)("Watchlist", "Multi select", "Flag") : (0, y.trackEvent)("Watchlist", "Flag")) : s && (s(), (0, y.trackEvent)("Watchlist", "Flag"))
                }
            }

            function _(t, e, s, o) {
                return (l, i) => {
                    const r = i(),
                        u = s ? (0, n.isListColor)(s) ? (0, c.getMarkedListByColor)(r, s) : (0, b.getCustomListById)(r, s) : (0, b.getCurrentViewableListByWidgetId)(r, t);
                    if (null === u) return;
                    if ("hot" === u.type) return;
                    const a = new Set((0, b.selectedSymbolsSelector)(r, t)),
                        d = a.has(e) && !o ? Array.from(a) : [e],
                        m = () => {
                            if ("custom" === u.type) l((0, L.removeWatchlistSymbolsThunk)(null, u, d));
                            else {
                                {
                                    const t = (0, n.remove)({
                                        symbols: d,
                                        color: u.color
                                    });
                                    l(t)
                                }
                            }(0, f.trackRemoveEvent)(d.length > 1), l(N(u.id, d))
                        };
                    if (1 === d.length || Boolean(s)) return void m();
                    const y = document.activeElement;
                    (0, p.showConfirm)({
                        text: (0, f.createConfirmRemoveText)(d.length),
                        onConfirm: ({
                            dialogClose: t
                        }) => {
                            m(), t()
                        },
                        onClose: () => {
                            null == y || y.focus()
                        }
                    })
                }
            }

            function B(t, e, s) {
                return (o, l) => {
                    const n = l(),
                        i = (0, b.getCurrentViewableListByWidgetId)(n, t);
                    if (null === i) return;
                    if ("hot" === i.type) return;
                    (0, d.resolveSymbolNameForAll)(e).then((e => {
                        var l, u;
                        let a;
                        if ("custom" === i.type) o(M(e, i, s));
                        else {
                            const t = null !== (l = (0, c.getListSymbolsByColor)(n, i.color)) && void 0 !== l ? l : [],
                                o = s ? t.indexOf(s) : -1,
                                u = e.filter((t => (0, r.getMarkedSymbolsListServiceInstance)().getSymbolColor(t) !== i.color));
                            if (u.length) {
                                a = u[u.length - 1];
                                const e = -1 !== o && o !== t.length - 1 ? t[o + 1] : void 0;
                                (0, r.getMarkedSymbolsListServiceInstance)().markMany({
                                    symbols: u,
                                    color: i.color,
                                    separators: !0,
                                    before: e
                                })
                            }
                        }
                        a || (a = null !== (u = e[e.length - 1]) && void 0 !== u ? u : null), o(E(t, e, a))
                    }))
                }
            }

            function E(t, e, s) {
                return (o, l) => {
                    e = e.slice(0, 10), (0, k.expandWatchlist)(), (t !== S.WATCHLIST_WIDGET_ID || l().widgets[S.WATCHLIST_WIDGET_ID]) && (o((0, h.updateWidget)(t, {
                        highlightedSymbols: [...e],
                        scrollToId: s ? {
                            id: s
                        } : null
                    })), setTimeout((() => o((0, h.updateWidget)(t, {
                        highlightedSymbols: null
                    }))), 500))
                }
            }

            function M(t, e, s, o) {
                return (l, n) => {
                    const i = new Set(e.symbols),
                        r = t.filter((t => !i.has(t) && !i.has((0, I.safeShortName)(t))));
                    if (r.length) {
                        const t = [...e.symbols],
                            n = s ? e.symbols.indexOf(s) : -1; - 1 === n ? t.push(...r) : t.splice(n + 1, 0, ...r);
                        const i = { ...e,
                            symbols: t
                        };
                        l(-1 === n ? (0, L.addWatchlistSymbolsThunk)(null, i, r, o) : (0, L.replaceWatchlistSymbolsThunk)(null, i, t, o))
                    }
                }
            }

            function A(t, e) {
                return (s, l) => {
                    const r = l();
                    if ((0, n.isListColor)(t)) {
                        if (null === (0, i.getMarkedListsState)(r)) return;
                        s((0, n.rename)({
                            color: t,
                            name: e
                        }))
                    } else {
                        const l = (0, o.ensureNotNull)((0, b.getCustomListById)(r, t));
                        s((0,
                            L.renameWatchlistThunk)(null, l, e))
                    }
                }
            }

            function x(t) {
                return (e, s) => {
                    const o = s(),
                        l = (0, n.isListColor)(t) ? (0, c.getMarkedListByColor)(o, t) : (0, b.getCustomListById)(o, t);
                    if (null !== l && 0 !== l.symbols.length) {
                        if ("colored" === l.type) {
                            e((0, n.remove)({
                                color: l.color,
                                symbols: l.symbols
                            }))
                        } else e((0, L.replaceWatchlistSymbolsThunk)(null, { ...l,
                            symbols: []
                        }, []));
                        e(N(t, l.symbols))
                    }
                }
            }

            function N(t, e) {
                return (o, l) => {
                    const n = l();
                    if (!(0, a.isDeletedSymbolsList)(t)) {
                        const t = (0, b.getCustomListById)(n, a.DELETED_SYMBOLS_LIST_ID),
                            l = e.filter((t => !(0, g.isSeparatorItem)(t)));
                        o(t ? (0, L.addWatchlistSymbolsThunk)(null, t, l) : (0, L.createWatchlistThunk)({
                            id: a.DELETED_SYMBOLS_LIST_ID,
                            name: m.t(null, void 0, s(97458)),
                            type: "custom",
                            shared: !1,
                            symbols: l
                        }))
                    }
                }
            }

            function G(t, e) {
                return E(t, [e], e)
            }

            function O(t, e) {
                return (s, o) => {
                    const l = o(),
                        n = (0, b.getCurrentViewableListByWidgetId)(l, t);
                    if (!n) return;
                    const {
                        symbols: i
                    } = n;
                    i.includes(e) && s((0, h.updateWidget)(t, {
                        scrollToId: {
                            id: e
                        }
                    }))
                }
            }

            function H(t, e, s, o) {
                return (l, n) => {
                    var i;
                    const r = n(),
                        c = (0, b.getCustomListById)(r, e);
                    if (c) {
                        const n = s.filter((t => !(0, g.isSeparatorItem)(t)));
                        if (l(M(n, c, void 0, o)), (0, b.getGlobalActiveID)(r) === e) {
                            const e = null !== (i = n[n.length - 1]) && void 0 !== i ? i : null;
                            l(E(t, n, e))
                        }
                    }
                }
            }

            function V(t, e, s) {
                return async (o, l) => {
                    const n = l(),
                        i = (0, b.getCustomListById)(n, e),
                        r = s.filter((t => !(0, g.isSeparatorItem)(t)));
                    i && o(M(r, i));
                    const c = (0, b.getCustomListById)(n, t);
                    c && o((0, L.removeWatchlistSymbolsThunk)(null, c, s))
                }
            }

            function R(t, e, s) {
                return (o, l) => {
                    const n = l(),
                        i = (0, b.getCurrentViewableListByWidgetId)(n, t);
                    if (null === i) return;
                    if ("hot" === i.type) return;
                    const {
                        symbols: c
                    } = i;
                    if (!c.includes(s))
                        if ("custom" === i.type) {
                            const t = c.indexOf(e),
                                l = [...c.slice(0, t), s, ...c.slice(t)],
                                n = { ...i,
                                    symbols: l
                                };
                            o((0, L.replaceWatchlistSymbolsThunk)(null, n, l))
                        } else "colored" === i.type && (0, r.getMarkedSymbolsListServiceInstance)().markMany({
                            color: i.color,
                            before: e,
                            symbols: [s],
                            separators: !0
                        })
                }
            }
            const F = (0, T.respectLatest)((function(t, e) {
                return async (s, i) => {
                    try {
                        const r = (0, n.isListColor)(e) ? (0, o.ensureNotNull)((0, c.getMarkedListByColor)(i(), e)) : (0, o.ensureNotNull)((0, b.getCustomListById)(i(), e));
                        if (s((0, L.setActiveWatchlistThunk)(null, "custom" === r.type ? r.id : r.color)), !i().widgets[S.WATCHLIST_WIDGET_ID]) return void(0, k.expandWatchlist)();
                        s((0, h.updateWidget)(S.WATCHLIST_WIDGET_ID, {
                            isLoading: !1,
                            listId: r.id,
                            sorting: null,
                            symbolsBeforeSorting: null,
                            sortingListId: null,
                            selectedSymbols: [],
                            scrollToId: null
                        })), "custom" === r.type && await s(function(t, e) {
                            return async (s, n) => {
                                {
                                    const n = (0, f.hasDuplicates)(e.symbols);
                                    n && s((0, h.updateWidget)(S.WATCHLIST_WIDGET_ID, {
                                        isLoading: !0
                                    }));
                                    const i = await (0, T.respectAbort)(t, (0, L.validateWatchListSymbols)((0, o.ensureDefined)(e.symbols)));
                                    i.length !== e.symbols.length && (e = { ...e,
                                        symbols: i
                                    }), s((0, l.exact)({
                                        id: e.id,
                                        symbols: e.symbols
                                    })), s((0, h.updateWidget)(S.WATCHLIST_WIDGET_ID, {
                                        listId: e.id,
                                        selectedSymbols: []
                                    })), n && s((0, h.updateWidget)(S.WATCHLIST_WIDGET_ID, {
                                        isLoading: !1
                                    }))
                                }
                            }
                        }(t, r)), (0, k.expandWatchlist)()
                    } catch (t) {
                        (0, T.skipAbortError)(t)
                    }
                }
            }));
            const Y = (0, T.respectLatest)((function(t, e, l, i) {
                return async (r, u) => {
                    try {
                        if (!(0, f.canUseMultipleLists)()) return;
                        if (!e || void 0 === e.name) {
                            const o = await (0, T.respectAbort)(t, (0, f.createSaveRenameDialog)(m.t(null, void 0, s(279984)), void 0, i)());
                            e = {
                                name: o,
                                symbols: (null == e ? void 0 : e.symbols) || []
                            }
                        }
                        e.symbols = [...await (0, L.validateWatchListSymbols)((0, o.ensureDefined)(e.symbols))];
                        const a = (0, L.createWatchlistThunk)(e),
                            d = await (0, T.respectAbort)(t, r(a));
                        if (null === d) return;
                        if (r(F(null, d)), l) {
                            const t = (0, n.isListColor)(l) ? (0, c.getMarkedListByColor)(u(), l) : (0, b.getCustomListById)(u(), l);
                            if (!t) return;
                            await r(D((0, o.ensureDefined)(e.symbols), (0, o.ensureDefined)(t)))
                        }
                    } catch (t) {
                        (0, T.skipAbortError)(t)
                    }
                }
            }));

            function P(t, e, l = !0, n) {
                return async (t, i) => {
                    if (!(0, f.canUseMultipleLists)()) return;
                    const r = await (0, f.createSaveRenameDialog)(m.t(null, void 0, s(741068)), n)();
                    if (!e) {
                        const t = (0, o.ensureNotNull)((0, b.getCurrentViewableListByWidgetId)(i(), S.WATCHLIST_WIDGET_ID));
                        e = t.symbols
                    }
                    const c = (0, L.createWatchlistThunk)({
                            name: r,
                            symbols: e
                        }),
                        u = await t(c);
                    null !== u && l && t(F(null, u))
                }
            }

            function U(t, e) {
                return async (s, o) => {
                    (0, n.isListColor)(t) ? s((0, n.changeDescription)({
                        color: t,
                        description: e
                    })): (s((0, l.changeDescription)({
                        id: t,
                        description: e
                    })), await (0, u.changeDescription)(t, e))
                }
            }
        }
    }
]);
"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [99670], {
        923195: (e, t, s) => {
            s.d(t, {
                lowerboundExt: () => n,
                lowerbound: () => a,
                upperbound: () => h,
                subtract: () => l,
                moveToHead: () => d,
                moveAfter: () => u,
                moveBefore: () => c,
                intersect: () => _,
                removeItemFromArray: () => m
            });
            var r = s(650151);

            function i(e, t) {
                return e < t
            }

            function n(e, t, s, r, i) {
                let n = i - r;
                for (; 0 < n;) {
                    const i = n >> 1,
                        a = r + i;
                    s(e(a), t) ? (r = a + 1, n -= i + 1) : n = i
                }
                return r
            }

            function a(e, t, s, r = 0, i = e.length) {
                return n((t => e[t]), t, s, r, i)
            }

            function o(e, t, s = 0, r = e.length) {
                return a(e, t, i, s, r)
            }

            function h(e, t, s, r = 0, i = e.length) {
                let n = i - r;
                for (; 0 < n;) {
                    const i = n >> 1,
                        a = r + i;
                    s(t, e[a]) ? n = i : (r = a + 1, n -= i + 1)
                }
                return r
            }

            function l(e, t) {
                return e.filter((e => !t.includes(e)))
            }

            function d(e, t) {
                const s = e.indexOf(t);
                return s < 0 ? e.slice() : [t].concat(e.slice(0, s)).concat(e.slice(s + 1))
            }

            function u(e, t, s) {
                const r = new Set(t),
                    i = [],
                    n = [],
                    a = [];
                return e.forEach(((e, t) => {
                    r.has(e) ? n.push(e) : (i.push(e), a.push(t))
                })), s = s < e.length - 1 ? o(a, s + 1) : i.length, i.splice(s, 0, ...n), {
                    newItems: i,
                    movedItemsStartIndex: s
                }
            }

            function c(e, t, s) {
                const r = new Set(t),
                    i = [],
                    n = [],
                    a = [];
                return e.forEach(((e, t) => {
                    r.has(e) ? n.push(e) : (i.push(e), a.push(t))
                })), s = s <= e.length - 1 ? o(a, s) : i.length, i.splice(s, 0, ...n), {
                    newItems: i,
                    movedItemsStartIndex: s
                }
            }

            function _(e, t) {
                const s = new Set;
                return e.forEach((e => {
                    t.has(e) && s.add(e)
                })), s
            }

            function m(e, t) {
                const s = e.indexOf(t);
                (0, r.assert)(-1 !== s, "Item is not found"), e.splice(s, 1)
            }
        },
        7628: (e, t, s) => {
            function r(e) {
                return "=" + JSON.stringify(i(e))
            }

            function i(e) {
                return Object.keys(e).sort().reduce(((t, s) => ("[object Object]" === Object.prototype.toString.call(e[s]) ? t[s] = i(e[s]) : t[s] = e[s], t)), {})
            }

            function n(e) {
                return Boolean(e.inputs)
            }

            function a(e) {
                return n(e) || Boolean(e.replay) || e.session || e.adjustment || e["currency-id"] || e["unit-id"] ? r(e) : e.symbol
            }

            function o(e) {
                return "=" === e[0]
            }

            function h(e) {
                if (!o(e)) return {
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

            function l(e) {
                return "string" == typeof e ? e : l(e.symbol)
            }
            s.d(t, {
                isStudySymbol: () => n,
                encodeExtendedSymbolOrGetSimpleSymbolString: () => a,
                isEncodedExtendedSymbol: () => o,
                decodeExtendedSymbol: () => h,
                unwrapSimpleSymbol: () => l
            })
        },
        477679: (e, t, s) => {
            var r;
            s.d(t, {
                    SymbolErrorPermissionDeniedReason: () => r,
                    permissionDenied: () => i,
                    invalidSymbol: () => n
                }),
                function(e) {
                    e.Symbol = "symbol", e.GroupPermission = "group"
                }(r || (r = {}));
            const i = "permission denied",
                n = "invalid symbol"
        },
        325925: (e, t, s) => {
            s.d(t, {
                ensureTimePointIndexIndex: () => a,
                unpackNonSeriesData: () => o
            });
            var r = s(130551),
                i = s(650151);

            function n(e) {
                if (!(0, r.isObject)(e)) throw new Error("Graphics commands should be wrapped in an object");
                if ((0, r.hasProperty)(e, "create"), (0, r.hasProperty)(e, "erase")) {
                    const t = e.erase;
                    (0, i.assert)(Array.isArray(t), "Collection of erase commands should be array");
                    for (const e of t) {
                        if (!(0, r.isObject)(e) || !(0, r.hasProperty)(e, "action")) throw new Error("Command should be an object with 'action' property");
                        (0, i.assert)("all" === e.action || "one" === e.action, "Erase command action should be 'all' or 'one'")
                    }
                }
                return e
            }

            function a(e) {
                if (e < 0) throw new Error("TimePointIndexIndex should be non-negative integer");
                return e
            }
            async function o(e) {
                if ("" === e) return null;
                const t = JSON.parse(e);
                if (!(0, r.isObject)(t) || "function" == typeof t) throw new Error("Non-object content in the non-series envelope");
                if ((0, r.hasProperty)(t, "indexes_replace")) return {
                    indexes_replace: !0
                };
                const i = {
                    indexes_replace: !1
                };
                if ((0, r.hasProperty)(t, "offsets") && (i.offsets = t.offsets), (0, r.hasProperty)(t, "isUpdate")) {
                    if ("boolean" != typeof t.isUpdate) throw new Error('Invalid type of "isUpdate" field');
                    i.isUpdate = t.isUpdate
                }
                if ((0, r.hasProperty)(t, "data") && (i.data = t.data), (0, r.hasProperty)(t, "graphicsCmds") && (i.graphicsCmds = n(t.graphicsCmds)), (0, r.hasProperty)(t, "dataCompressed") || (0, r.hasProperty)(t, "graphicsCmdsCompressed")) {
                    const {
                        default: e
                    } = await Promise.all([s.e(93194), s.e(81578)]).then(s.t.bind(s, 593194, 23));
                    if ((0, r.hasProperty)(t, "dataCompressed")) {
                        const s = await (new e).loadAsync(t.dataCompressed, {
                            base64: !0
                        });
                        i.data = JSON.parse(await s.file("").async("text"))
                    }
                    if ((0, r.hasProperty)(t, "graphicsCmdsCompressed")) {
                        const s = await (new e).loadAsync(t.graphicsCmdsCompressed, {
                            base64: !0
                        });
                        i.graphicsCmds = n(JSON.parse(await s.file("").async("text")))
                    }
                    return i
                }
                return i
            }
        },
        884566: (e, t, s) => {
            s.r(t), s.d(t, {
                PlotList: () => c,
                mergeMinMax: () => _,
                mergePlotRows: () => m
            });
            var r = s(650151),
                i = s(923195),
                n = s(149590),
                a = s(272001),
                o = s(812363);
            const h = (0, a.getLogger)("Chart.PlotList"),
                l = 30;

            function d(e) {
                return e.index
            }

            function u(e) {
                return e.value[0]
            }
            class c {
                constructor(e = null, t = null) {
                    this._items = [], this._start = 0, this._end = 0, this._shareRead = !1, this._minMaxCache = new Map, this._rowSearchCacheByIndex = new Map, this._rowSearchCacheByIndexWithoutEmptyValues = new Map, this._rowSearchCacheByTime = new Map, this._rowSearchCacheByTimeWithoutEmptyValues = new Map, this._plotFunctions = e || new Map, this._emptyValuePredicate = t
                }
                clear() {
                    this._items = [], this._start = 0, this._end = 0, this._shareRead = !1, this._minMaxCache.clear(), this._invalidateSearchCaches()
                }
                first() {
                    return this.size() > 0 ? this._items[this._start] : null
                }
                last() {
                    return this.size() > 0 ? this._items[this._end - 1] : null
                }
                firstIndex() {
                    return this.size() > 0 ? this._indexAt(this._start) : null
                }
                lastIndex() {
                    return this.size() > 0 ? this._indexAt(this._end - 1) : null
                }
                size() {
                    return this._end - this._start
                }
                isEmpty() {
                    return 0 === this.size()
                }
                contains(e) {
                    return null !== this.search(e, o.PlotRowSearchMode.Exact)
                }
                valueAt(e) {
                    const t = this.search(e);
                    return null !== t ? t.value : null
                }
                add(e, t) {
                    if (this._shareRead) return h.logDebug("add: readonly collection modification attempt"), !1;
                    const s = {
                            index: e,
                            value: t
                        },
                        r = this._nonCachedSearch(e, o.PlotRowSearchMode.Exact, d);
                    return this._invalidateSearchCaches(), null === r ? (this._items.splice(this._lowerbound(e, d), 0, s), this._start = 0, this._end = this._items.length, !0) : (this._items[r] = s, !1)
                }
                search(e, t = o.PlotRowSearchMode.Exact, s) {
                    return this._searchImpl(e, t, this._rowSearchCacheByIndex, this._rowSearchCacheByIndexWithoutEmptyValues, d, s)
                }
                searchByTime(e, t = o.PlotRowSearchMode.Exact, s) {
                    return this._searchImpl(e, t, this._rowSearchCacheByTime, this._rowSearchCacheByTimeWithoutEmptyValues, u, s)
                }
                fold(e, t) {
                    let s = t;
                    for (let t = this._start; t < this._end; ++t) {
                        s = e(this._indexAt(t), this._valueAt(t), s)
                    }
                    return s
                }
                findFirst(e, t) {
                    const s = void 0 !== t && Math.min(this._start + t, this._end) || this._end;
                    for (let t = this._start; t < s; ++t) {
                        const s = this._indexAt(t),
                            r = this._valueAt(t);
                        if (e(s, r)) return {
                            index: s,
                            value: r
                        }
                    }
                    return null
                }
                findLast(e, t) {
                    const s = void 0 !== t && Math.max(this._end - t, this._start) || this._start;
                    for (let t = this._end - 1; t >= s; --t) {
                        const s = this._indexAt(t),
                            r = this._valueAt(t);
                        if (e(s, r)) return {
                            index: s,
                            value: r
                        }
                    }
                    return null
                }
                each(e) {
                    for (let t = this._start; t < this._end; ++t) {
                        if (e(this._indexAt(t), this._valueAt(t))) break
                    }
                }
                reduce(e, t) {
                    let s = t;
                    for (let t = this._start; t < this._end; ++t) {
                        s = e(s, this._indexAt(t), this._valueAt(t))
                    }
                    return s
                }
                range(e, t) {
                    const s = new c(this._plotFunctions, this._emptyValuePredicate);
                    return s._items = this._items, s._start = this._lowerbound(e, d), s._end = this._upperbound(t), s._shareRead = !0, s
                }
                plottableRange(e) {
                    const t = new c(this._plotFunctions, this._emptyValuePredicate);
                    return t._items = this._items, t._start = this._upperbound(n.UNPLOTTABLE_TIME_POINT_INDEX), t._end = this._end, t._shareRead = !0, !0 === e && t._start > this._start && (t._start -= 1), t
                }
                rangeIterator(e, t) {
                    const s = this._lowerbound(e, d),
                        r = this._upperbound(t);
                    if (s === r) return {
                        hasNext: () => !1,
                        next: () => {
                            throw new Error("Invalid operation")
                        }
                    };
                    let i = s - 1;
                    return {
                        hasNext: () => i < r - 1,
                        next: () => (i += 1, this._items[i])
                    }
                }
                minMaxOnRangeCached(e, t, s) {
                    if (this.isEmpty()) return null;
                    let r = null;
                    for (const i of s) {
                        r = _(r, this._minMaxOnRangeCachedImpl(e - i.offset, t - i.offset, i.name))
                    }
                    return r
                }
                minMaxOnRange(e, t, s) {
                    if (this.isEmpty()) return null;
                    let r = null;
                    for (const i of s) {
                        r = _(r, this._minMaxOnRange(e - i.offset, t - i.offset, i.name))
                    }
                    return r
                }
                merge(e) {
                    return this._shareRead ? (h.logDebug("merge: readonly collection modification attempt"), null) : 0 === e.length ? null : this.isEmpty() || e[e.length - 1].index < this._items[0].index ? this._prepend(e) : e[0].index > this._items[this._items.length - 1].index ? this._append(e) : 1 === e.length && e[0].index === this._items[this._items.length - 1].index ? (this._updateLast(e[0]), e[0]) : this._merge(e)
                }
                addTail(e, t = !1) {
                    if (0 === e.length) return;
                    let s = 0;
                    t && this._end - this._start > 0 && (s = 1, this._items[this._end - this._start - 1].value = e[0].value);
                    for (let t = s; t < e.length; ++t) {
                        const s = e[t],
                            r = this.lastIndex();
                        if (null === r) {
                            h.logError("Can't add tail to the empty plotlist");
                            break
                        }
                        this.add(r + 1, s.value)
                    }
                    this._invalidateSearchCaches()
                }
                move(e) {
                    if (this._shareRead) return void h.logDebug("move: readonly collection modification attempt");
                    if (0 === e.length) return;
                    const t = this._items.slice();
                    for (const s of e) {
                        const e = this._bsearch(s.old, d);
                        if (null !== e && void 0 !== t[e])
                            if (s.new === n.INVALID_TIME_POINT_INDEX) t[e] = void 0;
                            else {
                                t[e] = {
                                    index: s.new,
                                    value: t[e].value
                                };
                                const r = this._bsearch(s.new, d);
                                if (null !== r) {
                                    const e = t[r];
                                    void 0 !== e && e.index === s.new && (t[r] = void 0)
                                }
                            }
                    }
                    this._items = t.filter((e => void 0 !== e)).sort(((e, t) => e.index - t.index)), this._invalidateSearchCaches(), this._minMaxCache.clear(), this._start = 0, this._end = this._items.length
                }
                remove(e) {
                    if (this._shareRead) return h.logDebug("remove: readonly collection modification attempt"), null;
                    const t = this._nonCachedSearch(e, o.PlotRowSearchMode.NearestRight, d);
                    if (null === t) return null;
                    const s = this._items.splice(t);
                    return this._end = this._items.length, this._minMaxCache.clear(), this._invalidateSearchCaches(), s.length > 0 ? s[0] : null
                }
                state() {
                    const e = this._items.slice(this._start, this._end);
                    return {
                        start: 0,
                        end: e.length,
                        data: e
                    }
                }
                restoreState(e) {
                    e ? (this._start = e.start, this._end = e.end, this._shareRead = !1, this._items = e.data, this._minMaxCache.clear(), this._invalidateSearchCaches()) : this.clear()
                }
                _indexAt(e) {
                    return this._items[e].index
                }
                _valueAt(e) {
                    return this._items[e].value
                }
                _length() {
                    return this._items.length
                }
                _searchImpl(e, t, s, r, i, n) {
                    const a = void 0 !== n ? s : r,
                        o = void 0 !== n ? 1e4 * (t + 1) + n : t;
                    let h = a.get(e);
                    if (void 0 !== h) {
                        const e = h.get(o);
                        if (void 0 !== e) return e
                    }
                    const l = this._nonCachedSearch(e, t, i, n);
                    if (null === l) return null;
                    const d = {
                        index: this._indexAt(l),
                        value: this._valueAt(l)
                    };
                    return void 0 === h && (h = new Map, a.set(e, h)), h.set(o, d), d
                }
                _nonCachedSearch(e, t, s, r) {
                    const i = this._lowerbound(e, s),
                        n = i === this._end || e !== s(this._items[i]);
                    if (n && t !== o.PlotRowSearchMode.Exact) switch (t) {
                        case o.PlotRowSearchMode.NearestLeft:
                            return this._searchNearestLeft(i, r);
                        case o.PlotRowSearchMode.NearestRight:
                            return this._searchNearestRight(i, r);
                        default:
                            throw new TypeError("Unknown search mode")
                    }
                    if (void 0 === r || n || t === o.PlotRowSearchMode.Exact) return n ? null : i;
                    switch (t) {
                        case o.PlotRowSearchMode.NearestLeft:
                            return this._nonEmptyNearestLeft(i, r);
                        case o.PlotRowSearchMode.NearestRight:
                            return this._nonEmptyNearestRight(i, r);
                        default:
                            throw new TypeError("Unknown search mode")
                    }
                }
                _nonEmptyNearestRight(e, t) {
                    const s = (0, r.ensure)(this._emptyValuePredicate),
                        i = (0, r.ensure)(t);
                    for (; e < this._end && s(this._valueAt(e), i);) e += 1;
                    return e === this._end ? null : e
                }
                _nonEmptyNearestLeft(e, t) {
                    const s = (0, r.ensureNotNull)(this._emptyValuePredicate),
                        i = (0, r.ensure)(t);
                    for (; e >= this._start && s(this._valueAt(e), i);) e -= 1;
                    return e < this._start ? null : e
                }
                _searchNearestLeft(e, t) {
                    if (e === this._start) return null;
                    const s = e - 1,
                        r = s !== this._end ? s : null;
                    return void 0 !== t && null !== r ? this._nonEmptyNearestLeft(r, t) : r
                }
                _searchNearestRight(e, t) {
                    const s = e,
                        r = s !== this._end ? s : null;
                    return void 0 !== t && null !== r ? this._nonEmptyNearestRight(r, t) : r
                }
                _bsearch(e, t) {
                    const s = this._lowerbound(e, t);
                    return s !== this._end && e === t(this._items[s]) ? s : null
                }
                _lowerbound(e, t) {
                    return (0, i.lowerbound)(this._items, e, ((e, s) => t(e) < s), this._start, this._end)
                }
                _upperbound(e) {
                    return (0, i.upperbound)(this._items, e, ((e, t) => t.index > e), this._start, this._end)
                }
                _plotMinMax(e, t, s) {
                    let r = null;
                    const i = this._plotFunctions.get(s);
                    if (void 0 === i) throw new Error(`Plot "${s}" is not registered`);
                    for (let s = e; s < t; s++) {
                        const e = i(this._items[s].value);
                        null == e || Number.isNaN(e) || (null === r ? r = {
                            min: e,
                            max: e
                        } : (e < r.min && (r.min = e), e > r.max && (r.max = e)))
                    }
                    return r
                }
                _invalidateCacheForRow(e) {
                    const t = Math.floor(e.index / l);
                    this._minMaxCache.forEach((e => e.delete(t)))
                }
                _prepend(e) {
                    return (0, r.assert)(!this._shareRead, "collection should not be readonly"), (0, r.assert)(0 !== e.length, "plotRows should not be empty"), this._invalidateSearchCaches(), this._minMaxCache.clear(), this._items = e.concat(this._items), this._start = 0, this._end = this._items.length, e[0]
                }
                _append(e) {
                    return (0, r.assert)(!this._shareRead, "collection should not be readonly"),
                        (0, r.assert)(0 !== e.length, "plotRows should not be empty"), this._invalidateSearchCaches(), this._minMaxCache.clear(), this._items = this._items.concat(e), this._start = 0, this._end = this._items.length, e[0]
                }
                _updateLast(e) {
                    (0, r.assert)(!this.isEmpty(), "plot list should not be empty");
                    const t = this._items[this._end - 1];
                    (0, r.assert)(t.index === e.index, "last row index should match new row index"), this._invalidateCacheForRow(e), this._invalidateSearchCaches(), this._items[this._end - 1] = e
                }
                _merge(e) {
                    return (0, r.assert)(0 !== e.length, "plot rows should not be empty"), this._invalidateSearchCaches(), this._minMaxCache.clear(), this._items = m(this._items, e), this._start = 0, this._end = this._items.length, e[0]
                }
                _minMaxOnRangeCachedImpl(e, t, s) {
                    if (this.isEmpty()) return null;
                    let i = null;
                    const n = (0, r.ensureNotNull)(this.firstIndex()),
                        a = (0, r.ensureNotNull)(this.lastIndex()),
                        o = Math.max(e, n),
                        h = Math.min(t, a),
                        d = Math.ceil(o / l) * l,
                        u = Math.max(d, Math.floor(h / l) * l);
                    i = _(i, this._minMaxOnRange(o, Math.min(d, t, h), s));
                    let c = this._minMaxCache.get(s);
                    void 0 === c && (c = new Map, this._minMaxCache.set(s, c));
                    for (let e = Math.max(d + 1, o); e < u; e += l) {
                        const t = Math.floor(e / l);
                        let r = c.get(t);
                        if (void 0 === r) {
                            const e = t * l,
                                i = (t + 1) * l - 1;
                            r = this._minMaxOnRange(e, i, s), c.set(t, r)
                        }
                        i = _(i, r)
                    }
                    i = _(i, this._minMaxOnRange(u, h, s));
                    return i
                }
                _minMaxOnRange(e, t, s) {
                    return this._plotMinMax(this._lowerbound(e, d), this._upperbound(t), s)
                }
                _invalidateSearchCaches() {
                    this._rowSearchCacheByIndex.clear(), this._rowSearchCacheByIndexWithoutEmptyValues.clear(), this._rowSearchCacheByTime.clear(), this._rowSearchCacheByTimeWithoutEmptyValues.clear()
                }
            }

            function _(e, t) {
                if (null === e) return t;
                if (null === t) return e;
                return {
                    min: Math.min(e.min, t.min),
                    max: Math.max(e.max, t.max)
                }
            }

            function m(e, t) {
                const s = function(e, t) {
                        const s = e.length,
                            r = t.length;
                        let i = s + r,
                            n = 0,
                            a = 0;
                        for (; n < s && a < r;) e[n].index < t[a].index ? n++ : e[n].index > t[a].index ? a++ : (n++, a++, i--);
                        return i
                    }(e, t),
                    r = new Array(s);
                let i = 0,
                    n = 0;
                const a = e.length,
                    o = t.length;
                let h = 0;
                for (; i < a && n < o;) e[i].index < t[n].index ? (r[h] = e[i], i++) : e[i].index > t[n].index ? (r[h] = t[n], n++) : (r[h] = t[n], i++, n++), h++;
                for (; i < a;) r[h] = e[i], i++, h++;
                for (; n < o;) r[h] = t[n], n++, h++;
                return r
            }
        },
        311854: (e, t, s) => {
            s.d(t, {
                seriesPlotFunctionMap: () => l,
                barFunction: () => d,
                SeriesData: () => _
            });
            var r, i = s(650151),
                n = s(884566),
                a = s(923195);
            ! function(e) {
                e[e.FromLeft = -1] = "FromLeft", e[e.FromRight = 1] = "FromRight"
            }(r || (r = {}));
            const o = {
                    open: e => e[1],
                    high: e => e[2],
                    low: e => e[3],
                    close: e => e[4],
                    hl2: e => (e[2] + e[3]) / 2,
                    hlc3: e => (e[2] + e[3] + e[4]) / 3,
                    ohlc4: e => (e[1] + e[2] + e[3] + e[4]) / 4
                },
                h = ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"];

            function l() {
                const e = new Map;
                return h.forEach(((t, s) => {
                    e.set(t, d(t))
                })), e
            }

            function d(e, t, s) {
                const r = o[null != t ? t : e],
                    i = o[e],
                    n = o[null != s ? s : e];
                return (e, t) => {
                    switch (t) {
                        case 0:
                            return r(e);
                        case 2:
                            return n(e);
                        default:
                            return i(e)
                    }
                }
            }

            function u(e, t) {
                return null == e[t]
            }
            const c = [{
                barsToMerge: 10,
                forBarspacingLargerThen: .03
            }, {
                barsToMerge: 30,
                forBarspacingLargerThen: .01
            }, {
                barsToMerge: 100,
                forBarspacingLargerThen: .003
            }, {
                barsToMerge: 500,
                forBarspacingLargerThen: 0
            }];
            class _ {
                constructor() {
                    this._pressedChunks = {
                            chunks: new Map,
                            priceSource: "uninitialized"
                        },
                        this.m_bars = new n.PlotList(l(), u), this.m_nsBars = new n.PlotList(l(), u), this._clearPressedChunks()
                }
                bars() {
                    return this.m_bars
                }
                nsBars() {
                    return this.m_nsBars
                }
                pressedChunks(e, t) {
                    if (t !== this._pressedChunks.priceSource) {
                        this._pressedChunks.priceSource = t;
                        const e = this.m_bars.first();
                        e && (this._clearPressedChunks(), this._rebuildPressedChunks(e))
                    }
                    const s = (0, i.ensureDefined)(c.find((t => t.forBarspacingLargerThen <= e)));
                    return (0, i.ensureDefined)(this._pressedChunks.chunks.get(s.barsToMerge))
                }
                mergeRegularBars(e) {
                    const t = this.m_bars.size(),
                        s = this.m_bars.merge(e);
                    return s && "uninitialized" !== this._pressedChunks.priceSource && (t === this.m_bars.size() && s.index === this.m_bars.lastIndex() ? this._updateLatestChunks() : this._rebuildPressedChunks(s)), s
                }
                size() {
                    return this.m_bars.size() + this.m_nsBars.size()
                }
                each(e) {
                    this.m_bars.each(e), this.m_nsBars.each(e)
                }
                clear() {
                    this.m_bars.clear(), this.m_nsBars.clear(), this.lastProjectionPrice = void 0, this._clearPressedChunks()
                }
                isEmpty() {
                    return this.m_bars.isEmpty() && this.m_nsBars.isEmpty()
                }
                first() {
                    return this.m_bars.isEmpty() ? this.m_nsBars.first() : this.m_bars.first()
                }
                last() {
                    return this.m_nsBars.isEmpty() ? this.m_bars.last() : this.m_nsBars.last()
                }
                search(e, t) {
                    return this.nsBars().isEmpty() ? this.bars().search(e, t) : this.bars().isEmpty() || (0, i.ensureNotNull)(this.nsBars().firstIndex()) <= e ? this.nsBars().search(e, t) : this.bars().search(e, t)
                }
                valueAt(e) {
                    const t = this.search(e);
                    return null !== t ? t.value : null
                }
                plotValueToTimePointIndex(e, t, s) {
                    if (s === r.FromRight) {
                        const s = (s, r) => {
                                const i = r[t];
                                return null != i && e >= i
                            },
                            r = this.m_bars.findLast(s);
                        if (null !== r) return r.index;
                        const i = this.m_nsBars.findLast(s);
                        return null !== i ? i.index : this.m_bars.firstIndex()
                    }
                    if (s === r.FromLeft) {
                        const s = (s, r) => {
                                const i = r[t];
                                return null != i && e <= i
                            },
                            r = this.m_bars.findFirst(s);
                        if (null !== r) return r.index;
                        const i = this.m_nsBars.findFirst(s);
                        return null !== i ? i.index : this.m_bars.lastIndex()
                    }
                    throw new Error("plotValueToTimePointIndex: unsupported search mode")
                }
                moveData(e) {
                    this.m_bars.move(e), this.m_nsBars.move(e), this.m_bars.size() > 0 && this._rebuildPressedChunks((0, i.ensureNotNull)(this.m_bars.first()))
                }
                _rebuildPressedChunks(e) {
                    const t = this._pressedChunks.priceSource;
                    if ("uninitialized" === t) return;
                    const s = e.index,
                        r = o[t],
                        n = (e, t, s) => {
                            let i = null;
                            for (; e.hasNext();) {
                                const n = e.next(),
                                    a = r(n.value);
                                i && n.index - i.startTime >= s.barsToMerge && (t.push(i), i = null), i ? (i.endTime = n.index, i.high = Math.max(i.high, a), i.low = Math.min(i.low, a), i.close = a) : i = {
                                    startTime: n.index,
                                    endTime: n.index,
                                    open: a,
                                    high: a,
                                    low: a,
                                    close: a
                                }
                            }
                            i && t.push(i)
                        };
                    c.forEach((e => {
                        const t = (0, i.ensureDefined)(this._pressedChunks.chunks.get(e.barsToMerge)),
                            r = (0, a.lowerbound)(t, s, ((e, t) => e.endTime < t));
                        if (0 === r && t.length > 0) {
                            const s = t[0].startTime - 1,
                                r = (0, i.ensureNotNull)(this.m_bars.firstIndex()),
                                a = this.m_bars.rangeIterator(r, s),
                                o = [];
                            n(a, o, e);
                            const h = o.concat(t);
                            this._pressedChunks.chunks.set(e.barsToMerge, h)
                        } else {
                            const s = (0, i.ensureNotNull)(this.m_bars.lastIndex());
                            t.splice(r);
                            let a = (0, i.ensureNotNull)(this.m_bars.firstIndex());
                            t.length && (a = t[t.length - 1].endTime + 1);
                            const o = this.m_bars.rangeIterator(a, s);
                            n(o, t, e)
                        }
                    }))
                }
                _updateLatestChunks() {
                    const e = (0, i.ensureNotNull)(this.m_bars.lastIndex());
                    c.forEach((t => {
                        const s = (0, i.ensureDefined)(this._pressedChunks.chunks.get(t.barsToMerge)),
                            r = this.m_bars.rangeIterator(e, e).next(),
                            n = r.value[4],
                            a = s[s.length - 1];
                        a.high = Math.max(a.high, n), a.low = Math.min(a.low, n), a.close = n, a.endTime = r.index
                    }))
                }
                _clearPressedChunks() {
                    c.forEach((e => this._pressedChunks.chunks.set(e.barsToMerge, [])))
                }
            }
        },
        99670: (e, t, s) => {
            s.r(t), s.d(t, {
                SeriesDataSource: () => v,
                initialRequestOptionsToNumBars: () => g,
                parseJapaneseProjectionBars: () => S
            });
            var r = s(650151),
                i = s(758337),
                n = s(7628),
                a = s(568450),
                o = s(311854),
                h = s(325925),
                l = s(477679),
                d = s(869403),
                u = s.n(d);
            class c {
                constructor() {
                    this._created = new(u()), this._modified = new(u()), this._loading = new(u()), this._completed = new(u()), this._error = new(u()), this._symbolError = new(u()), this._symbolResolved = new(u()), this._seriesError = new(u()), this._symbolNotPermitted = new(u()), this._symbolInvalid = new(u()), this._symbolGroupNotPermitted = new(u()), this._chartTypeNotPermitted = new(u()), this._intradaySpreadNotPermitted = new(u()), this._intradayExchangeNotPermitted = new(u()), this._customIntervalNotPermitted = new(u()), this._secondsIntervalNotPermitted = new(u()), this._tickMarksRangeChanged = new(u()), this._barReceived = new(u()), this._seriesTimeFrame = new(u()), this._dataUpdated = new(u())
                }
                destroy() {
                    this._created.destroy(), this._modified.destroy(), this._loading.destroy(), this._completed.destroy(), this._error.destroy(), this._symbolError.destroy(), this._symbolResolved.destroy(), this._seriesError.destroy(), this._symbolInvalid.destroy(), this._symbolNotPermitted.destroy(), this._symbolGroupNotPermitted.destroy(), this._chartTypeNotPermitted.destroy(), this._intradaySpreadNotPermitted.destroy(), this._intradayExchangeNotPermitted.destroy(), this._customIntervalNotPermitted.destroy(), this._secondsIntervalNotPermitted.destroy(), this._tickMarksRangeChanged.destroy(), this._barReceived.destroy(), this._seriesTimeFrame.destroy(), this._dataUpdated.destroy()
                }
                created() {
                    return this._created
                }
                modified() {
                    return this._modified
                }
                loading() {
                    return this._loading
                }
                completed() {
                    return this._completed
                }
                error() {
                    return this._error
                }
                symbolError() {
                    return this._symbolError
                }
                symbolResolved() {
                    return this._symbolResolved
                }
                seriesError() {
                    return this._seriesError
                }
                symbolInvalid() {
                    return this._symbolInvalid
                }
                symbolNotPermitted() {
                    return this._symbolNotPermitted
                }
                symbolGroupNotPermitted() {
                    return this._symbolGroupNotPermitted
                }
                chartTypeNotPermitted() {
                    return this._chartTypeNotPermitted
                }
                intradaySpreadNotPermitted() {
                    return this._intradaySpreadNotPermitted
                }
                intradayExchangeNotPermitted() {
                    return this._intradayExchangeNotPermitted
                }
                customIntervalNotPermitted() {
                    return this._customIntervalNotPermitted
                }
                secondsIntervalNotPermitted() {
                    return this._secondsIntervalNotPermitted
                }
                tickMarksRangeChanged() {
                    return this._tickMarksRangeChanged
                }
                barReceived() {
                    return this._barReceived
                }
                seriesTimeFrame() {
                    return this._seriesTimeFrame
                }
                dataUpdated() {
                    return this._dataUpdated
                }
                fireCompleted(e) {
                    this._completed.fire(e)
                }
                fireCreated(e) {
                    this._created.fire(e)
                }
                fireModified() {
                    this._modified.fire()
                }
                fireLoading(e) {
                    this._loading.fire(e)
                }
                fireError() {
                    this._error.fire()
                }
                fireSymbolError(e) {
                    this._symbolError.fire(e), this.fireError()
                }
                fireSymbolResolved(e) {
                    this._symbolResolved.fire(e)
                }
                fireSeriesError(e) {
                    this._seriesError.fire(e), this.fireError()
                }
                fireSymbolInvalid() {
                    this._symbolInvalid.fire()
                }
                fireSymbolNotPermitted(e) {
                    this._symbolNotPermitted.fire(e)
                }
                fireSymbolGroupNotPermitted(e) {
                    this._symbolGroupNotPermitted.fire(e)
                }
                fireChartTypeNotPermitted(e) {
                    this._chartTypeNotPermitted.fire(e), this.fireError()
                }
                fireIntradaySpreadNotPermitted() {
                    this._intradaySpreadNotPermitted.fire(), this.fireError()
                }
                fireIntradayExchangeNotPermitted() {
                    this._intradayExchangeNotPermitted.fire(), this.fireError()
                }
                fireCustomIntervalNotPermitted(e) {
                    this._customIntervalNotPermitted.fire(e), this.fireError()
                }
                fireSecondsIntervalNotPermitted() {
                    this._secondsIntervalNotPermitted.fire(), this.fireError()
                }
                fireTickMarksRangeChanged(e) {
                    this._tickMarksRangeChanged.fire(e)
                }
                fireBarReceived(e) {
                    this._barReceived.fire(e)
                }
                fireSeriesTimeFrame(e, t, s, r, i) {
                    this._seriesTimeFrame.fire(e, t, s, r, i)
                }
                fireDataUpdated(e, t, s) {
                    this._dataUpdated.fire(e, t, s)
                }
            }
            var _ = s(272001),
                m = s(720444);
            const p = (0, _.getLogger)("Chart.SeriesDataSource");
            var f;
            ! function(e) {
                e[e.Idle = 0] = "Idle", e[e.AwaitingConnection = 1] = "AwaitingConnection", e[e.AwaitingFirstDataUpdate = 2] = "AwaitingFirstDataUpdate", e[e.Active = 3] = "Active"
            }(f || (f = {}));
            let y = 1;
            let b = 1;

            function g(e) {
                return e.startDate ? e.endDate || e.count ? e.endDate ? ["from_to", e.startDate, e.endDate] : ["bar_count", e.startDate, (0, r.ensure)(e.count)] : ["from_to", e.startDate] : e.count || 300
            }
            class v {
                constructor(e, t, s, r) {
                    this._symbol = null, this._resolvedSymbolName = null, this._createSeriesOverriddenParams = 0, this._instanceId = null, this._symbolInstanceId = null, this._resolution = null, this._timeFrame = null, this._data = new o.SeriesData, this._dataEvents = new c, this._status = f.Idle, this._turnaroundCounter = 1, this._boundOnGatewayIsConnectedChanged = this._onGatewayIsConnectedChanged.bind(this), this._ongoingDataUpdate = Promise.resolve(), this._gateway = e, this._turnaroundPrefix = t, this._createSeriesParams = g(null != s ? s : {
                        count: 300
                    }), this._timeFrame = r || null, this._gateway.isConnected().subscribe(this._boundOnGatewayIsConnectedChanged)
                }
                destroy() {
                    this.stop(), this._gateway.isConnected().unsubscribe(this._boundOnGatewayIsConnectedChanged)
                }
                modifySeries(e, t, s = null, n = !1) {
                    n && (p.logNormal("Due to force flag clearing symbol & resolution to force re-requesting data."), this._symbol = null, this._resolution = null);
                    const o = this._symbol,
                        h = this._resolution;
                    if (this._symbol = e, this._resolution = t, null === this._instanceId) return void(this._timeFrame = s);
                    const l = !(0, i.deepEquals)(o, e)[0] || null !== this._resolvedSymbolName && this._resolvedSymbolName !== this._getSymbolNameString(e),
                        d = null === h || !a.Interval.isEqual(h, t);
                    (l || d || null !== s) && (this._timeFrame = null, (l || d) && this._turnaroundCounter++, l && this._resolveSymbol(), this._gateway.modifySeries(this._instanceId, this.turnaround(), (0, r.ensureNotNull)(this._symbolInstanceId), this._resolution, s, this._onMessage.bind(this)), this._dataEvents.fireModified())
                }
                requestMoreData(e) {
                    null !== this._instanceId && this._gateway.requestMoreData(this._instanceId, e, this._onMessage.bind(this))
                }
                requestMoreTickmarks(e) {
                    null !== this._instanceId && this._gateway.requestMoreTickmarks(this._instanceId, e, this._onMessage.bind(this))
                }
                isStarted() {
                    return this._status !== f.Idle
                }
                isActive() {
                    return this._status === f.Active
                }
                resolution() {
                    return this._resolution
                }
                start() {
                    this.isStarted() ? p.logNormal("start: data source is already started, nothing to do") : ((0, r.assert)(null !== this._symbol, "symbol must be set before start"), (0, r.assert)(null !== this._resolution, "resolution must be set before start"), this._gateway.isConnected().value() ? this._createSeries() : this._changeStatusTo(f.AwaitingConnection))
                }
                stop() {
                    this.isStarted() ? (null !== this._instanceId && (this._gateway.removeSeries(this._instanceId), this._instanceId = null), this._changeStatusTo(f.Idle)) : p.logNormal("stop: data source is already stopped, nothing to do")
                }
                instanceId() {
                    return this._instanceId
                }
                data() {
                    return this._data
                }
                clearData() {
                    this.isStarted() ? this._enqueueUpdate((() => this._clearDataImpl())) : this._clearDataImpl()
                }
                dataEvents() {
                    return this._dataEvents
                }
                turnaround() {
                    return `${this._turnaroundPrefix}${this._turnaroundCounter}`
                }
                symbolInstanceId() {
                    return this._symbolInstanceId
                }
                symbol() {
                    return this._symbol
                }
                moveData(e) {
                    this._enqueueUpdate((() => this._data.moveData(e)))
                }
                setInitialRequestOptions(e) {
                    this._createSeriesOverriddenParams = g(e)
                }
                _resolveSymbol() {
                    null !== this._symbol && (this._symbolInstanceId = this._gateway.resolveSymbol("sds_sym_" + y++, (0, n.encodeExtendedSymbolOrGetSimpleSymbolString)(this._symbol), this._onMessage.bind(this)))
                }
                _clearDataImpl() {
                    this._data.clear()
                }
                _changeStatusTo(e) {
                    (0, r.assert)(this._status !== e, "Source and destination status should be distinct"), p.logNormal(`Status changed from ${f[this._status]} to ${f[e]}`), this._status = e
                }
                _createSeries() {
                    (0, r.assert)(this._status !== f.Active, 'Status should not be "Active" when creating a study'), this._instanceId = "sds_" + b++, this._resolveSymbol();
                    const e = this._createSeriesOverriddenParams || this._createSeriesParams;
                    this._createSeriesOverriddenParams && (this._createSeriesOverriddenParams = 0), this._gateway.createSeries(this._instanceId, this.turnaround(), (0, r.ensureNotNull)(this._symbolInstanceId), (0, r.ensureNotNull)(this._resolution), e, this._timeFrame, this._onMessage.bind(this)), this._timeFrame = null, this._changeStatusTo(f.AwaitingFirstDataUpdate), this._dataEvents.fireCreated(this._instanceId)
                }
                _onGatewayIsConnectedChanged(e) {
                    e ? this._onGatewayConnected() : this._onGatewayDisconnected()
                }
                _onGatewayConnected() {
                    this._status === f.AwaitingConnection && this._createSeries()
                }
                _onGatewayDisconnected() {
                    this._status !== f.Idle && this._status !== f.AwaitingConnection && (this._instanceId = null, this._changeStatusTo(f.AwaitingConnection)), this._turnaroundCounter = 1
                }
                _onMessage(e) {
                    this._enqueueUpdate((() => this._onMessageImpl(e)))
                }
                async _onMessageImpl(e) {
                    switch (e.method) {
                        case "symbol_resolved":
                            {
                                const [t, s] = e.params;
                                if (t !== this._symbolInstanceId) {
                                    p.logNormal(`Resolve for old symbol, expected: ${this._symbolInstanceId}, actual ${e.params[0]}`);
                                    break
                                }
                                this._onSymbolResolved(s);
                                break
                            }
                        case "symbol_error":
                            if (e.params[0] !== this._symbolInstanceId) {
                                p.logNormal(`Symbol error for old symbol, expected: ${this._symbolInstanceId}, actual ${e.params[0]}`);
                                break
                            }
                            this._onSymbolError(e);
                            break;
                        case "series_timeframe":
                            {
                                const [t, s, r, i, n, a, o] = e.params;
                                if (!this._checkTurnaround(t, s)) {
                                    p.logNormal(`Time frame for old data, expected: ${this._symbolInstanceId} (${this.turnaround()}), actual ${t} (${s})`);
                                    break
                                }
                                this._onSeriesTimeFrame(r, i, n, a, o);
                                break
                            }
                        case "series_error":
                            {
                                const [t, s] = e.params;
                                if (!this._checkTurnaround(t, s)) {
                                    p.logNormal(`Series error for old data, expected: ${this._symbolInstanceId} (${this.turnaround()}), actual ${t} (${s})`);
                                    break
                                }
                                this._onSeriesError(e.params[2]);
                                break
                            }
                        case "series_loading":
                            {
                                const [t, s] = e.params;
                                if (!this._checkTurnaround(t, s)) break;this._onSeriesLoading(e.time);
                                break
                            }
                        case "series_completed":
                            {
                                const [t, s, r, i] = e.params;
                                if (!this._checkTurnaround(t, r)) {
                                    p.logNormal(`Series completed for old data, expected: ${this._symbolInstanceId} (${this.turnaround()}), actual ${t} (${r})`);
                                    break
                                }
                                this._onSeriesCompleted(s, e.time, i);
                                break
                            }
                        case "data_update":
                            if (!this._checkTurnaround(e.params.customId, e.params.turnaround)) {
                                p.logNormal(`Data update for old data, expected: ${this._symbolInstanceId} (${this.turnaround()}), actual ${e.params.customId} (${e.params.turnaround})`);
                                break
                            }
                            await this._onDataUpdate(e.params.plots, e.params.nonseries, e.params.lastBar);
                            break;
                        case "clear_data":
                            if (e.params.turnaround !== this.turnaround()) {
                                p.logNormal(`Clear data for old data, expected: ${this.turnaround()}, actual ${e.params.turnaround}`);
                                break
                            }
                            this._clearDataImpl(), this._dataEvents.fireDataUpdated(void 0, !1, null)
                    }
                }
                _onSeriesError(e) {
                    let t, s;
                    if ("string" == typeof e) s = {
                        error: e
                    }, t = e;
                    else if (s = e, e.ctx) {
                        const s = {};
                        Object.entries(e.ctx).forEach((([e, t]) => {
                            s[e] = t.toString()
                        })), t = e.error.format(s)
                    } else t = e.error;
                    if (t.startsWith("study_not_auth:")) {
                        const e = t.split(":", 2)[1].split("@", 2)[0];
                        if (["BarSetRenko", "BarSetPriceBreak", "BarSetKagi", "BarSetPnF"].includes(e)) this._dataEvents.fireChartTypeNotPermitted(e);
                        else if ("BarSetSpread" === e) this._dataEvents.fireIntradaySpreadNotPermitted();
                        else if ("BarSetRange" === e) {
                            const e = `${(0,r.ensureNotNull)(this._symbol).inputs.range}R`;
                            this._dataEvents.fireCustomIntervalNotPermitted(e)
                        }
                    } else "resolution_not_entitled" === t ? this._dataEvents.fireIntradayExchangeNotPermitted() : "custom_resolution" === t ? this._dataEvents.fireCustomIntervalNotPermitted((0, r.ensureNotNull)(this._resolution)) : "seconds_not_entitled" === t && this._dataEvents.fireSecondsIntervalNotPermitted();
                    this._dataEvents.fireSeriesError(s)
                }
                _onSeriesTimeFrame(e, t, s, r, i) {
                    this._dataEvents.fireSeriesTimeFrame(e, t, s, null == r || r, i)
                }
                _onSymbolError(e) {
                    if (e.params[1] === l.permissionDenied) switch (e.params[2]) {
                        case l.SymbolErrorPermissionDeniedReason.Symbol:
                            this._dataEvents.fireSymbolNotPermitted(e.params[3]);
                            break;
                        case l.SymbolErrorPermissionDeniedReason.GroupPermission:
                            this._dataEvents.fireSymbolGroupNotPermitted(e.params[3]);
                            break;
                        default:
                            this._dataEvents.fireSymbolNotPermitted(e.params[2])
                    } else e.params[1] === l.invalidSymbol && this._dataEvents.fireSymbolInvalid();
                    this._dataEvents.fireSymbolError(e.params[1])
                }
                _onSymbolResolved(e) {
                    this._resolvedSymbolName = (0, m.symbolForApi)(e, this._getSymbolNameString((0, r.ensureNotNull)(this._symbol))), this._dataEvents.fireSymbolResolved(e)
                }
                _getSymbolNameString(e) {
                    return "string" == typeof e.symbol ? e.symbol : e.symbol.symbol
                }
                async _onDataUpdate(e, t, s) {
                    this._onDataUnpacked(e, s, await S(t))
                }
                _enqueueUpdate(e) {
                    return this._ongoingDataUpdate = this._ongoingDataUpdate.then(e, e), this._ongoingDataUpdate
                }
                _onDataUnpacked(e, t, s) {
                    if (this._status === f.Idle) return;
                    this._status === f.AwaitingFirstDataUpdate && (this._changeStatusTo(f.Active), this._clearDataImpl());
                    const r = this._data.bars().size(),
                        i = this._data.bars().firstIndex(),
                        n = this._data.mergeRegularBars(e);
                    null !== s && (this._data.nsBars().clear(), this._data.nsBars().merge(s.projectionPlots), this._data.lastProjectionPrice = s.lastPrice, null !== s.boxSize && (this._data.boxSize = s.boxSize), this._data.reversalAmount = s.reversalAmount);
                    const a = null === i || null !== n && n.index < i;
                    this._dataEvents.fireDataUpdated(t, a, n), r !== this._data.bars().size() && null !== n && this._dataEvents.fireBarReceived(n)
                }
                _onSeriesLoading(e) {
                    this._dataEvents.fireLoading(e)
                }
                _onSeriesCompleted(e, t, s) {
                    this._dataEvents.fireCompleted({
                        updateMode: e,
                        time: t,
                        flags: s
                    })
                }
                _checkTurnaround(e, t) {
                    return this._instanceId === e && (void 0 === t || t === this.turnaround())
                }
            }
            async function S(e) {
                if (void 0 === e) return {
                    projectionPlots: [],
                    boxSize: null
                };
                if ("" === e.d || "nochange" === e.indexes) return null;
                const t = await (0, h.unpackNonSeriesData)(e.d);
                if (null === t || t.indexes_replace) return null;
                const s = e.indexes,
                    {
                        bars: r,
                        price: i,
                        boxSize: n,
                        reversalAmount: a
                    } = t.data;
                return {
                    lastPrice: i,
                    projectionPlots: (r || []).map((e => {
                        let t;
                        return "factor" in e ? t = e.factor : "additionalPrice" in e && (t = e.additionalPrice), {
                            index: s[e.time],
                            value: [0, e.open, e.high, e.low, e.close, e.volume, t]
                        }
                    })),
                    reversalAmount: a,
                    boxSize: n
                }
            }
        },
        149590: (e, t, s) => {
            s.d(t, {
                INVALID_TIME_POINT_INDEX: () => r,
                UNPLOTTABLE_TIME_POINT_INDEX: () => i
            });
            const r = -2e6,
                i = -1e6
        }
    }
]);
"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [88777], {
        228804: (e, t, i) => {
            function s(e, t, i) {
                const s = e.get(t);
                return void 0 !== s ? s : (e.set(t, i), i)
            }

            function r(e, t, i) {
                const s = e.get(t);
                if (void 0 !== s) return s;
                const r = i();
                return e.set(t, r), r
            }

            function n(e, t, i, r) {
                const n = s(e, t, new Map);
                return s(n, i, r)
            }

            function o(e, t, i, n) {
                return r(s(e, t, new Map), i, n)
            }

            function l(e, t, i, r, n) {
                const o = s(e, t, new Map),
                    l = s(o, i, new Map);
                return s(l, r, n)
            }
            i.d(t, {
                getDefault2: () => n,
                getDefault2Lazy: () => o,
                getDefault3: () => l,
                AbstractMapContainer: () => a
            });
            class a {
                constructor() {
                    this._map = new Map, this._size = 0
                }
                size() {
                    return this._size
                }
                clear() {
                    this._map.clear(), this._size = 0
                }
            }
        },
        332679: (e, t, i) => {
            i.d(t, {
                TextImageCachesContainer: () => l
            });
            var s = i(650151),
                r = i(228804),
                n = i(538708),
                o = i(482152);
            class l extends r.AbstractMapContainer {
                constructor(e) {
                    super(), this._maxSize = e, this._keysQueue = []
                }
                get(e) {
                    const {
                        fontSize: t,
                        text: i,
                        align: s,
                        font: l,
                        lineSpacing: a = 0
                    } = e;
                    if (!i || !t || !s) return null;
                    const d = (0, n.makeFont)(t, l),
                        h = (0, r.getDefault3)(this._map, a, s, d, new Map);
                    let u = h.get(i);
                    return void 0 !== u || (this._size >= this._maxSize ? this._deleteFirstKey() : ++this._size, this._keysQueue.push([d, s, a, i]), u = new o.TextImageCache(i, e.bold, e.italic, l, t, s, a), h.set(i, u)), u
                }
                _deleteFirstKey() {
                    const e = this._keysQueue.shift(),
                        [t, i, r, n] = e,
                        o = (0, s.ensureDefined)(this._map.get(r)),
                        l = (0, s.ensureDefined)(o.get(i)),
                        a = (0, s.ensureDefined)(l.get(t));
                    a.delete(n), 0 === a.size && l.delete(t), 0 === l.size && o.delete(i), 0 === o.size && this._map.delete(r)
                }
            }
        },
        482152: (e, t, i) => {
            i.d(t, {
                HorizontalAlign: () => s,
                VerticalAlign: () => r,
                TextImageCache: () => h
            });
            var s, r, n = i(327714),
                o = i(650151),
                l = i(538708),
                a = i(741341);
            ! function(e) {
                e.Left = "left", e.Right = "right", e.Center = "center"
            }(s || (s = {})),
            function(e) {
                e.Top = "top", e.Bottom = "bottom", e.Middle = "middle"
            }(r || (r = {}));
            const d = (0, a.createDisconnectedCanvas)(document, (0, n.size)({
                width: 0,
                height: 0
            }), 1);
            class h {
                constructor(e, t, i, s, r, n = "center", a = 0) {
                    this._lines = e.split(/[^\S\r\n]*(?:\r\n|\r|\n)/), this._font = function(e, t, i, s) {
                        return (0, l.makeFont)(s, i, `${e?"bold ":""}${t?"italic ":""}`)
                    }(t, i, s, r), this._fontSize = r, this._verticalPadding = ~~(r / 6), this._textAlign = n, this._lineSpacing = a;
                    const h = (0, o.ensureNotNull)(d.getContext("2d"));
                    h.font = this._font, h.textBaseline = "top";
                    let u = 0;
                    for (let e = 0; e < this._lines.length; ++e) {
                        const t = this._lines[e],
                            i = h.measureText(t).width;
                        u = Math.max(u, i)
                    }
                    this.textImageWidth = u + 1, this.textImageHeight = this._lines.length * r + (this._lines.length - 1) * this._lineSpacing + this._verticalPadding
                }
                paintTo(e, t, i) {
                    e.save();
                    const s = t.pixelRatio,
                        r = i.location;
                    e.translate(Math.round(function(e, t, i) {
                        let s = e;
                        switch (t) {
                            case "left":
                                break;
                            case "right":
                                s -= i;
                                break;
                            case "center":
                                s -= i / 2
                        }
                        return Math.round(s)
                    }(r.x, r.horzAlign, this.textImageWidth) * s), Math.round(function(e, t, i) {
                        let s = e;
                        switch (t) {
                            case "top":
                                break;
                            case "bottom":
                                s -= i;
                                break;
                            case "middle":
                                s -= i / 2
                        }
                        return Math.round(s)
                    }(r.y, r.vertAlign, this.textImageHeight) * s));
                    const n = i.style;
                    let o;
                    switch (e.textBaseline = "top", e.font = this._font, e.lineJoin = "round", e.fillStyle = n.fillStyle, n.strokeStyle && (e.strokeStyle = n.strokeStyle), n.lineWidth && (e.lineWidth = n.lineWidth),
                        this._textAlign) {
                        case "left":
                            o = 0, e.textAlign = "left";
                            break;
                        case "right":
                            o = this.textImageWidth - 1, e.textAlign = "right";
                            break;
                        default:
                            o = this.textImageWidth / 2, e.textAlign = "center"
                    }
                    let l = this._verticalPadding;
                    (0, a.drawScaled)(e, s, (() => {
                        for (const t of this._lines) n.strokeStyle && e.strokeText(t, o, l), e.fillText(t, o, l), l += this._fontSize, l += this._lineSpacing
                    })), e.restore()
                }
            }
        },
        424061: (e, t, i) => {
            var s = i(812363).PlotRowSearchMode,
                r = i(519872).STUDYPLOTDISPLAYTARGET,
                n = i(114123).rgbaFromInteger;

            function o() {
                this.backColorers = []
            }

            function l(e) {
                o.call(this), this._series = e
            }

            function a(e, t) {
                o.call(this), this._study = e, this._plotIndex = t
            }
            o.prototype.barStyle = function(e, t, i) {
                    for (var s = {}, r = this.backColorers.length - 1; r >= 0; r--) this.backColorers[r].applyBarStyle(e, t, s, i);
                    return this.applyBarStyle(e, t, s, i), s
                }, o.prototype.pushBackBarColorer = function(e) {
                    this.backColorers.push(e)
                }, o.prototype.applyBarStyle = function(e, t, i) {
                    throw new Error("This function is supposed to be reimplemented in a subclass")
                }, inherit(l, o), l.upColor = function(e, t) {
                    var i = e.style.value();
                    switch (i) {
                        case TradingView.Series.STYLE_LINE:
                            return e.lineStyle.color.value();
                        case TradingView.Series.STYLE_AREA:
                            return e.areaStyle.linecolor.value();
                        case TradingView.Series.STYLE_BARS:
                            return e.barStyle.upColor.value();
                        case TradingView.Series.STYLE_CANDLES:
                            return e.candleStyle.upColor.value();
                        case TradingView.Series.STYLE_HOLLOW_CANDLES:
                            return e.hollowCandleStyle.upColor.value();
                        case TradingView.Series.STYLE_HEIKEN_ASHI:
                            return e.haStyle.upColor.value();
                        case TradingView.Series.STYLE_BASELINE:
                            return e.baselineStyle.topLineColor.value();
                        case TradingView.Series.STYLE_HILO:
                            return e.hiloStyle.color.value();
                        case TradingView.Series.STYLE_COLUMNS:
                            return e.columnStyle.upColor.value()
                    }
                    switch (i) {
                        case TradingView.Series.STYLE_RENKO:
                            return t ? e.renkoStyle.upColorProjection.value() : e.renkoStyle.upColor.value();
                        case TradingView.Series.STYLE_PB:
                            return t ? e.pbStyle.upColorProjection.value() : e.pbStyle.upColor.value();
                        case TradingView.Series.STYLE_KAGI:
                            return t ? e.kagiStyle.upColorProjection.value() : e.kagiStyle.upColor.value();
                        case TradingView.Series.STYLE_PNF:
                            return t ? e.pnfStyle.upColorProjection.value() : e.pnfStyle.upColor.value()
                    }
                    if (TradingView.Series.STYLE_RANGE === i) return t ? e.rangeStyle.upColorProjection.value() : e.rangeStyle.upColor.value();
                    throw new Error("Unknown series style")
                }, l.downColor = function(e, t) {
                    var i = e.style.value();
                    switch (i) {
                        case TradingView.Series.STYLE_LINE:
                            return e.lineStyle.color.value();
                        case TradingView.Series.STYLE_AREA:
                            return e.areaStyle.linecolor.value();
                        case TradingView.Series.STYLE_BARS:
                            return e.barStyle.downColor.value();
                        case TradingView.Series.STYLE_CANDLES:
                            return e.candleStyle.downColor.value();
                        case TradingView.Series.STYLE_HOLLOW_CANDLES:
                            return e.hollowCandleStyle.downColor.value();
                        case TradingView.Series.STYLE_HEIKEN_ASHI:
                            return e.haStyle.downColor.value();
                        case TradingView.Series.STYLE_BASELINE:
                            return e.baselineStyle.bottomLineColor.value();
                        case TradingView.Series.STYLE_HILO:
                            return e.hiloStyle.color.value();
                        case TradingView.Series.STYLE_COLUMNS:
                            return e.columnStyle.downColor.value()
                    }
                    switch (i) {
                        case TradingView.Series.STYLE_RENKO:
                            return t ? e.renkoStyle.downColorProjection.value() : e.renkoStyle.downColor.value();
                        case TradingView.Series.STYLE_PB:
                            return t ? e.pbStyle.downColorProjection.value() : e.pbStyle.downColor.value();
                        case TradingView.Series.STYLE_KAGI:
                            return t ? e.kagiStyle.downColorProjection.value() : e.kagiStyle.downColor.value();
                        case TradingView.Series.STYLE_PNF:
                            return t ? e.pnfStyle.downColorProjection.value() : e.pnfStyle.downColor.value()
                    }
                    if (TradingView.Series.STYLE_RANGE === i) return t ? e.rangeStyle.downColorProjection.value() : e.rangeStyle.downColor.value();
                    throw new Error("Unknown series style")
                }, l.prototype._applyLineStyle = function(e, t, i, s, r) {
                    i.barColor = l.upColor(r)
                }, l.prototype._applyAreaStyle = function(e, t, i, s, r) {
                    i.barColor = l.upColor(r)
                }, l.prototype._applyBarStyle = function(e, t, i, s, r) {
                    var n = l.upColor(r),
                        o = l.downColor(r),
                        a = this.findBar(e, !1, s);
                    if (r.barStyle.barColorsOnPrevClose.value()) {
                        var d = this.findPrevBar(e, !1, s);
                        i.barColor = d[TradingView.CLOSE_PLOT] <= a[TradingView.CLOSE_PLOT] ? n : o, i.barBorderColor = d[TradingView.CLOSE_PLOT] <= a[TradingView.CLOSE_PLOT] ? n : o
                    } else i.barColor = a[TradingView.OPEN_PLOT] <= a[TradingView.CLOSE_PLOT] ? n : o, i.barBorderColor = a[TradingView.OPEN_PLOT] <= a[TradingView.CLOSE_PLOT] ? n : o
                }, l.prototype._applyRangeStyle = function(e, t, i, s, r) {
                    var n = l.upColor(r, t),
                        o = l.downColor(r, t),
                        a = this.findBar(e, !1, s);
                    i.barColor = a[TradingView.OPEN_PLOT] <= a[TradingView.CLOSE_PLOT] ? n : o, i.barBorderColor = i.barColor
                }, l.prototype._applyCandleStyle = function(e, t, i, s, r) {
                    var n, o = l.upColor(r, t),
                        a = l.downColor(r, t),
                        d = r.candleStyle.borderUpColor ? r.candleStyle.borderUpColor.value() : r.candleStyle.borderColor.value(),
                        h = r.candleStyle.borderDownColor ? r.candleStyle.borderDownColor.value() : r.candleStyle.borderColor.value(),
                        u = r.candleStyle.wickUpColor ? r.candleStyle.wickUpColor.value() : r.candleStyle.wickColor.value(),
                        c = r.candleStyle.wickDownColor ? r.candleStyle.wickDownColor.value() : r.candleStyle.wickColor.value(),
                        _ = this.findBar(e, !1, s);
                    r.candleStyle.barColorsOnPrevClose.value() && this._series.data().first().index !== e ? n = this.findPrevBar(e, !1, s)[TradingView.CLOSE_PLOT] <= _[TradingView.CLOSE_PLOT] : n = _[TradingView.OPEN_PLOT] <= _[TradingView.CLOSE_PLOT];
                    i.barColor = n ? o : a, i.barBorderColor = n ? d : h, i.barWickColor = n ? u : c
                }, l.prototype._applyHollowCandleStyle = function(e, t, i, s, r) {
                    var n, o = l.upColor(r, t),
                        a = l.downColor(r, t),
                        d = r.hollowCandleStyle.borderUpColor ? r.hollowCandleStyle.borderUpColor.value() : r.hollowCandleStyle.borderColor.value(),
                        h = r.hollowCandleStyle.borderDownColor ? r.hollowCandleStyle.borderDownColor.value() : r.hollowCandleStyle.borderColor.value(),
                        u = r.hollowCandleStyle.wickUpColor ? r.hollowCandleStyle.wickUpColor.value() : r.hollowCandleStyle.wickColor.value(),
                        c = r.hollowCandleStyle.wickDownColor ? r.hollowCandleStyle.wickDownColor.value() : r.hollowCandleStyle.wickColor.value(),
                        _ = this.findBar(e, !1, s),
                        p = this.findPrevBar(e, !1, s);
                    n = this._series.data().first().index !== e ? p[TradingView.CLOSE_PLOT] <= _[TradingView.CLOSE_PLOT] : _[TradingView.OPEN_PLOT] <= _[TradingView.CLOSE_PLOT], i.barColor = n ? o : a, i.barBorderColor = n ? d : h, i.barWickColor = n ? u : c,
                        i.isBarHollow = _[TradingView.OPEN_PLOT] <= _[TradingView.CLOSE_PLOT]
                }, l.prototype._applyHAStyle = function(e, t, i, s, r) {
                    var n, o = l.upColor(r, t),
                        a = l.downColor(r, t),
                        d = r.haStyle.borderUpColor.value(),
                        h = r.haStyle.borderDownColor.value(),
                        u = r.haStyle.wickUpColor.value(),
                        c = r.haStyle.wickDownColor.value(),
                        _ = this.findBar(e, t, s);
                    r.haStyle.barColorsOnPrevClose.value() ? n = this.findPrevBar(e, t, s)[TradingView.CLOSE_PLOT] <= _[TradingView.CLOSE_PLOT] : n = _[TradingView.OPEN_PLOT] <= _[TradingView.CLOSE_PLOT];
                    i.barColor = n ? o : a, i.barBorderColor = n ? d : h, i.barWickColor = n ? u : c
                }, l.prototype._applyRenkoStyle = function(e, t, i, s, r) {
                    var n = this.findBar(e, t, s),
                        o = n[TradingView.OPEN_PLOT] <= n[TradingView.CLOSE_PLOT],
                        a = l.upColor(r, t),
                        d = l.downColor(r, t),
                        h = t ? r.renkoStyle.borderUpColorProjection.value() : r.renkoStyle.borderUpColor.value(),
                        u = t ? r.renkoStyle.borderDownColorProjection.value() : r.renkoStyle.borderDownColor.value(),
                        c = r.renkoStyle.wickUpColor.value(),
                        _ = r.renkoStyle.wickDownColor.value();
                    i.barColor = o ? a : d, i.barBorderColor = o ? h : u, i.barWickColor = o ? c : _, i.isBarUp = o
                }, l.prototype._applyPBStyle = function(e, t, i, s, r) {
                    i.barColor = l.upColor(r);
                    var n = this.findBar(e, t, s),
                        o = n[TradingView.OPEN_PLOT] <= n[TradingView.CLOSE_PLOT],
                        a = l.upColor(r, t),
                        d = l.downColor(r, t),
                        h = t ? r.pbStyle.borderUpColorProjection.value() : r.pbStyle.borderUpColor.value(),
                        u = t ? r.pbStyle.borderDownColorProjection.value() : r.pbStyle.borderDownColor.value();
                    i.barColor = o ? a : d, i.barBorderColor = o ? h : u, i.isBarUp = o
                }, l.prototype._applyKagiStyle = function(e, t, i, s, r) {
                    i.upColor = l.upColor(r, t), i.downColor = l.downColor(r, t);
                    var n = null,
                        o = this.findBar(e, t, s);
                    o[TradingView.LOW_PLOT] < o[TradingView.ADT_PLOT] && o[TradingView.ADT_PLOT] < o[TradingView.HIGH_PLOT] ? (n = o[TradingView.OPEN_PLOT] <= o[TradingView.CLOSE_PLOT], i.isTwoColorBar = !0) : (n = o[TradingView.OPEN_PLOT] <= o[TradingView.CLOSE_PLOT] ? o[TradingView.OPEN_PLOT] === o[TradingView.ADT_PLOT] : o[TradingView.OPEN_PLOT] !== o[TradingView.ADT_PLOT], i.isTwoColorBar = !1), i.barColor = n ? i.upColor : i.downColor, i.isBarUp = o[TradingView.OPEN_PLOT] <= o[TradingView.CLOSE_PLOT]
                }, l.prototype._applyPnfStyle = function(e, t, i, s, r) {
                    var n = this.findBar(e, t, s)[TradingView.ADT_PLOT],
                        o = n > 0,
                        a = l.upColor(r, t),
                        d = l.downColor(r, t);
                    i.isBarUp = o, i.isMergedBar = 2 === Math.abs(n), i.upColor = a, i.downColor = d, i.barColor = o ? a : d
                }, l.prototype._applyBaseLineStyle = function(e, t, i, s, r) {
                    var n = this.findBar(e, t, s),
                        o = r.baselineStyle,
                        a = this._series.priceScale(),
                        d = Math.round(a.height() * (Math.abs(100 - o.baseLevelPercentage.value()) / 100)),
                        h = this._series.firstValue(),
                        u = a.coordinateToPrice(d, h);
                    n[TradingView.CLOSE_PLOT] > u ? i.barColor = l.upColor(r, t) : i.barColor = l.downColor(r, t)
                }, l.prototype._applyHiLoStyle = function(e, t, i, s, r) {
                    i.barColor = l.upColor(r, t), i.barBorderColor = r.hiloStyle.borderColor.value()
                }, l.prototype._applyColumnStyle = function(e, t, i, s, r) {
                    var n = l.upColor(r),
                        o = l.downColor(r),
                        a = this.findBar(e, !1, s);
                    if (r.columnStyle.barColorsOnPrevClose.value()) {
                        var d = this.findPrevBar(e, !1, s);
                        i.color = d[TradingView.CLOSE_PLOT] <= a[TradingView.CLOSE_PLOT] ? n : o
                    } else i.color = a[TradingView.OPEN_PLOT] <= a[TradingView.CLOSE_PLOT] ? n : o;
                    i.barColor = i.color
                },
                l.prototype.applyBarStyle = function(e, t, i, s) {
                    i || (i = {}), i.barColor = null, i.barBorderColor = null, i.barWickColor = null, i.isBarHollow = null, i.isBarUp = null, i.upColor = null, i.downColor = null, i.isTwoColorBar = null, i.isMergedBar = null;
                    var r = this._series.properties(),
                        n = r.style.value();
                    switch (n) {
                        case TradingView.Series.STYLE_LINE:
                            this._applyLineStyle(e, t, i, s, r);
                            break;
                        case TradingView.Series.STYLE_AREA:
                            this._applyAreaStyle(e, t, i, s, r);
                            break;
                        case TradingView.Series.STYLE_BARS:
                            this._applyBarStyle(e, t, i, s, r);
                            break;
                        case TradingView.Series.STYLE_CANDLES:
                            this._applyCandleStyle(e, t, i, s, r);
                            break;
                        case TradingView.Series.STYLE_HOLLOW_CANDLES:
                            this._applyHollowCandleStyle(e, t, i, s, r);
                            break;
                        case TradingView.Series.STYLE_HEIKEN_ASHI:
                            this._applyHAStyle(e, t, i, s, r);
                            break;
                        case TradingView.Series.STYLE_BASELINE:
                            this._applyBaseLineStyle(e, t, i, s, r);
                            break;
                        case TradingView.Series.STYLE_HILO:
                            this._applyHiLoStyle(e, t, i, s, r);
                            break;
                        case TradingView.Series.STYLE_COLUMNS:
                            this._applyColumnStyle(e, t, i, s, r)
                    }
                    switch (n) {
                        case TradingView.Series.STYLE_RENKO:
                            this._applyRenkoStyle(e, t, i, s, r);
                            break;
                        case TradingView.Series.STYLE_PB:
                            this._applyPBStyle(e, t, i, s, r);
                            break;
                        case TradingView.Series.STYLE_KAGI:
                            this._applyKagiStyle(e, t, i, s, r);
                            break;
                        case TradingView.Series.STYLE_PNF:
                            this._applyPnfStyle(e, t, i, s, r)
                    }
                    return TradingView.Series.STYLE_RANGE === n && this._applyRangeStyle(e, t, i, s, r), i
                }, l.prototype.getSeriesBars = function(e) {
                    return e ? this._series.nsBars() : this._series.bars()
                }, l.prototype._findBarFieldValue = function(e, t, i) {
                    var s = this.getSeriesBars(i).valueAt(e);
                    if (null !== s) return s[t]
                }, l.prototype.findBar = function(e, t, i) {
                    return i ? i.value : this.getSeriesBars(t).valueAt(e) || []
                }, l.prototype.findPrevBar = function(e, t, i) {
                    if (i && i.previousValue) return i.previousValue;
                    var r = this._series.bars().search(e - 1, s.NearestLeft, TradingView.CLOSE_PLOT);
                    return null !== r ? r.value : []
                }, inherit(a, o), a.prototype.getBars = function() {
                    return this._study.series().bars()
                }, a.prototype.firstColoredBar = function(e) {
                    for (var t = e, i = 0; i < this.backColorers.length; i++) t = Math.min(t, this.backColorers[i].firstColoredBar(e));
                    var s = this.getOffset(this._plotIndex);
                    t = Math.min(t, e + s);
                    var r = this.getBars().firstIndex();
                    return Math.max(t, r)
                }, a.prototype.getOffset = function() {
                    var e = this._study.metaInfo().plots[this._plotIndex];
                    return this._study.offset(e.id)
                }, a.prototype.applyBarStyle = function(e, t, i) {
                    if (i || (i = {}), t) return i;
                    var s = this._study.properties();
                    if (!s.visible.value()) return i;
                    var o = this._study.metaInfo(),
                        l = this._study.data();
                    if (!l || 0 === l.size()) return i;
                    var a = o.plots[this._plotIndex],
                        d = this.getOffset();
                    if (this._study.getMinFirstBarIndexForPlot(a.id) > e + d) return i;
                    if (s.styles[a.id].display.value() === r.None) return i;
                    var h = l.valueAt(e - d);
                    if (null === h) return i;
                    var u = h[this._plotIndex + 1];
                    if (null == u) return i;
                    if (u = Math.round(u), o.isRGB) i.barColor = n(u), i.upColor = i.barColor, i.downColor = i.barColor;
                    else {
                        var c = o.plots[this._plotIndex].palette,
                            _ = s.palettes[c],
                            p = o.palettes[c].valToIndex ? o.palettes[c].valToIndex[u] : u,
                            f = _.colors[p].color.value();
                        i.barColor = f, i.upColor = f.color, i.downColor = f.color
                    }
                    return i
                }, t.SeriesBarColorer = l, t.StudyBarColorer = a
        },
        736887: (e, t, i) => {
            i.d(t, {
                currencyUnitVisibilityProperty: () => o,
                currencyUnitVisibilityOptions: () => l,
                migrateShowCurrencyAndShowUnitProperties: () => d,
                restoreCurrencyUnitVisibilitySettingsValue: () => h
            });
            var s = i(831356),
                r = i(62802),
                n = i.n(r);
            const {
                property: o,
                availableValues: l
            } = (0, s.createVisibilityController)("PriceAxisCurrencyAndUnit.visibility");
            let a = !1;

            function d(e, t) {
                a || (a = !0, void 0 === n().getValue("PriceAxisCurrencyAndUnit.visibility") && o().setValue(e || t ? "alwaysOn" : "alwaysOff"))
            }

            function h() {
                o().setValue("visibleOnMouseOver"), n().remove("PriceAxisCurrencyAndUnit.visibility")
            }
        },
        194405: (e, t, i) => {
            i.d(t, {
                DataWindowItem: () => s,
                DataWindowView: () => r
            });
            class s {
                constructor(e, t, i, s = !1) {
                    this._visible = !0, this._id = e, this._title = t, this._value = i, this._unimportant = s
                }
                id() {
                    return this._id
                }
                title() {
                    return this._title
                }
                setTitle(e) {
                    this._title = e
                }
                text() {
                    return this._value
                }
                value() {
                    return this._value
                }
                setValue(e) {
                    this._value = e
                }
                visible() {
                    return this._visible
                }
                setVisible(e) {
                    this._visible = e
                }
                color() {
                    return this._color
                }
                setColor(e) {
                    this._color = e
                }
                unimportant() {
                    return this._unimportant
                }
            }
            class r {
                constructor() {
                    this._items = [], this._header = "", this._title = ""
                }
                header() {
                    return this._header
                }
                title() {
                    return this._title
                }
                items() {
                    return this._items
                }
                update() {}
            }
        },
        333429: (e, t, i) => {
            i.d(t, {
                FormattersSerializer: () => d
            });
            var s = i(650151),
                r = i(831471),
                n = i(738023),
                o = i(561068),
                l = i(239887);
            const a = {
                price: r.PriceFormatter,
                volume: n.VolumeFormatter,
                percentage: o.PercentageFormatter,
                quoteSessionPrice: l.QuoteSessionPriceFormatter
            };
            var d;
            ! function(e) {
                e.serialize = function(e) {
                    const t = (0, s.ensureDefined)(a[e.type]);
                    return {
                        type: e.type,
                        state: t.serialize(e)
                    }
                }, e.deserialize = function(e) {
                    return (0, s.ensureDefined)(a[e.type]).deserialize(e.state)
                }
            }(d || (d = {}))
        },
        239887: (e, t, i) => {
            i.d(t, {
                QuoteSessionPriceFormatter: () => r
            });
            var s = i(831471);
            class r {
                constructor(e) {
                    this.type = "quoteSessionPrice", this.reset(e)
                }
                state() {
                    return this._priceFormatter.state()
                }
                reset(e) {
                    this._priceFormatter = e || new s.PriceFormatter(100, 1, !1)
                }
                update(e, t) {
                    const i = null != t.pricescale || null != t.minmov || null != t.fractional || null != t.minmove2,
                        r = null != e.pricescale && null != e.minmov && null != e.fractional && null != e.minmove2;
                    i && r && (this._priceFormatter = new s.PriceFormatter(e.pricescale, e.minmov, e.fractional || !1, e.minmove2))
                }
                format(e, t, i) {
                    return this._priceFormatter.format(e, t, i)
                }
                hasForexAdditionalPrecision() {
                    return this._priceFormatter.hasForexAdditionalPrecision()
                }
                static serialize(e) {
                    return e.state()
                }
                static deserialize(e) {
                    const t = new s.PriceFormatter(e.priceScale, e.minMove, e.fractional, e.minMove2);
                    return new r(t)
                }
            }
        },
        801750: (e, t, i) => {
            i.d(t, {
                shouldBeFormattedAsPercent: () => n,
                shouldBeFormattedAsIndexedTo100: () => o,
                getPriceValueFormatterForSource: () => l
            });
            var s = i(720444),
                r = i(354145);

            function n(e) {
                const t = e.priceScale();
                return !(null === t || !t.isPercentage()) && (!(0, r.isActingAsSymbolSource)(e) || (0, s.isPriceSourceStyle)(e.style()))
            }

            function o(e) {
                const t = e.priceScale();
                return !(null === t || !t.isIndexedTo100()) && (!(0, r.isActingAsSymbolSource)(e) || (0, s.isPriceSourceStyle)(e.style()))
            }

            function l(e) {
                const t = e.priceScale();
                if (o(e) && null !== t) return i => {
                    var s;
                    return t.formatPriceIndexedTo100(i, null !== (s = e.firstValue()) && void 0 !== s ? s : 100)
                };
                if (n(e) && null !== t) return i => {
                    var s;
                    return t.formatPricePercentage(i, null !== (s = e.firstValue()) && void 0 !== s ? s : 100)
                };
                const i = e.formatter();
                return i.format.bind(i)
            }
        },
        594358: (e, t, i) => {
            i.d(t, {
                HorizontalLinePaneView: () => n
            });
            var s = i(803936),
                r = i(631586);
            class n {
                constructor() {
                    this._lineRendererData = {
                        y: 0,
                        color: "rgba(0, 0, 0, 0)",
                        linewidth: 1,
                        linestyle: r.LINESTYLE_SOLID,
                        visible: !1
                    }, this._lineRenderer = new s.HorizontalLineRenderer, this._invalidated = !0, this._lineRenderer.setData(this._lineRendererData)
                }
                update(e) {
                    this._invalidated = !0
                }
                renderer() {
                    return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._lineRenderer
                }
            }
        },
        943546: (e, t, i) => {
            i.d(t, {
                notAvailable: () => s
            });
            i(777754), i(495046);
            const s = "∅"
        },
        733352: (e, t, i) => {
            i.d(t, {
                PanePriceAxisView: () => n
            });
            var s = i(837512);
            class r {
                constructor(e) {
                    this._priceAxisViewRenderer = null, this._rendererOptions = null, this._align = "right", this._width = 0, this._height = 0, this._textWidthCache = e
                }
                setParams(e, t, i, s, r) {
                    this._priceAxisViewRenderer = e, this._rendererOptions = t, this._width = i, this._height = s, this._align = r
                }
                draw(e, t) {
                    null !== this._rendererOptions && null !== this._priceAxisViewRenderer && this._priceAxisViewRenderer.draw(e, this._rendererOptions, this._textWidthCache, this._width, this._height, this._align, t.pixelRatio)
                }
                hitTest(e) {
                    var t, i;
                    return void 0 === (null === (t = this._priceAxisViewRenderer) || void 0 === t ? void 0 : t.hitTest) ? null : null === (i = this._priceAxisViewRenderer) || void 0 === i ? void 0 : i.hitTest(e, this._width, this._align)
                }
            }
            class n {
                constructor(e, t, i) {
                    this._renderer = null, this._invalidated = !0, this._priceAxisView = e, this._textWidthCache = new s.TextWidthCache(100), this._dataSource = t, this._chartModel = i, this._fontSize = -1, this._panePriceAxisViewRenderer = new r(this._textWidthCache)
                }
                update(e) {
                    this._invalidated = !0
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(e, t), this._renderer
                }
                _updateImpl(e, t) {
                    this._renderer = null;
                    const i = this._chartModel.crossHairSource(),
                        s = this._dataSource === i ? i.pane : this._chartModel.paneForSource(this._dataSource);
                    if (null === s) return;
                    const r = this._priceScale();
                    if (null === r) return;
                    let n = s.priceScalePosition(r);
                    if ("overlay" === n && (n = s.priceScalePosition(s.defaultPriceScale())), "overlay" === n) return;
                    const o = this._chartModel.priceAxisRendererOptions();
                    o.fontSize !== this._fontSize && (this._fontSize = o.fontSize, this._textWidthCache.reset()), this._panePriceAxisViewRenderer.setParams(this._priceAxisView.paneRenderer(), o, t, e, n), this._renderer = this._panePriceAxisViewRenderer, this._invalidated = !1
                }
                _priceScale() {
                    return this._dataSource.priceScale()
                }
            }
        },
        906778: (e, t, i) => {
            i.d(t, {
                PaneRendererArea: () => l
            });
            var s = i(650151),
                r = i(943498),
                n = i(837291),
                o = i(914679);
            class l extends r.PaneRendererLine {
                constructor(e) {
                    e.forceLineColor = !1, super(e)
                }
                _drawImpl(e) {
                    var t, i, r, l, a;
                    const d = this._data;
                    if (0 === d.items.length) return;
                    let h = null !== (i = null === (t = this._data.visibleItemsRange) || void 0 === t ? void 0 : t.startItemIndex) && void 0 !== i ? i : 0,
                        u = (null !== (l = null === (r = this._data.visibleItemsRange) || void 0 === r ? void 0 : r.endItemIndex) && void 0 !== l ? l : this._data.items.length) - 1;
                    for (; h < u && !(0, n.coordinateIsValid)(d.items[h].y);) h++;
                    for (; u >= 0 && !(0, n.coordinateIsValid)(d.items[u].y);) u--;
                    if (h > u) return;
                    const {
                        context: c,
                        horizontalPixelRatio: _,
                        verticalPixelRatio: p
                    } = e;
                    c.save(), c.scale(_, p), c.lineCap = "round", c.strokeStyle = d.lineColor, c.lineWidth = d.lineWidth, (0, o.setLineStyle)(c, d.lineStyle), c.lineWidth = 1;
                    const f = {},
                        y = d.items;
                    for (let e = h; e <= u; e++) {
                        const t = y[e];
                        let i;
                        if (i = t.style ? t.style.color : d.lineColor, e < u && y[e + 1].style) {
                            const r = (0, s.ensureDefined)(y[e + 1].style).color;
                            if (i !== r) {
                                const e = f[r] || [];
                                e.push(t), f[r] = e
                            }
                        }
                        const r = f[i] || [];
                        r.push(t), f[i] = r
                    }
                    for (const e of Object.keys(f)) {
                        const t = f[e];
                        c.beginPath();
                        let i = 0;
                        for (let s = 0; s < t.length; s++) t[s].style && (null === (a = t[s].style) || void 0 === a ? void 0 : a.color) !== e && (c.moveTo(Math.round(t[i].x), d.bottom), this._walkLine(c, t.slice(i, s), !0, d.bottom, !0), i = s);
                        if (c.moveTo(Math.round(t[i].x), d.bottom), this._walkLine(c, t.slice(i, t.length), !0, d.bottom, !0), c.closePath(), d.isSeries) {
                            const e = c.createLinearGradient(0, 0, 0, d.bottom);
                            e.addColorStop(0, d.color1), e.addColorStop(1, d.color2), c.fillStyle = e, d.simpleMode = !0
                        } else c.fillStyle = e;
                        c.fill()
                    }
                    c.lineWidth = d.lineWidth, c.restore(), super._drawImpl(e)
                }
            }
        },
        756740: (e, t, i) => {
            i.d(t, {
                BitmapCoordinatesPaneRenderer: () => r
            });
            var s = i(327714);
            class r {
                draw(e, t) {
                    new s.CanvasRenderingTarget2D(e, (0, s.size)({
                        width: t.cssWidth,
                        height: t.cssHeight
                    }), (0, s.size)({
                        width: t.physicalWidth,
                        height: t.physicalHeight
                    })).useBitmapCoordinateSpace((e => this._drawImpl(e)))
                }
                drawBackground(e, t) {
                    new s.CanvasRenderingTarget2D(e, (0, s.size)({
                        width: t.cssWidth,
                        height: t.cssHeight
                    }), (0, s.size)({
                        width: t.physicalWidth,
                        height: t.physicalHeight
                    })).useBitmapCoordinateSpace((e => this._drawBackgroundImpl(e)))
                }
                _drawBackgroundImpl(e) {}
            }
        },
        28035: (e, t, i) => {
            i.d(t, {
                CompositeRenderer: () => s
            });
            class s {
                constructor() {
                    this._renderers = [], this._globalAlpha = 1
                }
                setGlobalAlpha(e) {
                    this._globalAlpha = e
                }
                append(e) {
                    this._renderers.push(e)
                }
                insert(e, t) {
                    this._renderers.splice(t, 0, e)
                }
                clear() {
                    this._renderers.length = 0
                }
                isEmpty() {
                    return 0 === this._renderers.length
                }
                draw(e, t) {
                    for (let i = 0; i < this._renderers.length; i++) e.save(), e.globalAlpha = this._globalAlpha, this._renderers[i].draw(e, t), e.restore()
                }
                drawBackground(e, t) {
                    e.save(), e.globalAlpha = this._globalAlpha;
                    for (let i = 0; i < this._renderers.length; i++) {
                        const s = this._renderers[i];
                        s.drawBackground && s.drawBackground(e, t)
                    }
                    e.restore()
                }
                hitTest(e, t) {
                    let i = null;
                    for (let s = this._renderers.length - 1; s >= 0; s--) {
                        const r = this._renderers[s].hitTest(e, t);
                        null !== r && (null === i || r.result() > i.result()) && (i = r)
                    }
                    return i
                }
                doesIntersectWithBox(e) {
                    return this._renderers.some((t => !!t.doesIntersectWithBox && t.doesIntersectWithBox(e)))
                }
            }
        },
        803936: (e, t, i) => {
            i.d(t, {
                HorizontalLineRenderer: () => a
            });
            var s = i(858063),
                r = i(914679),
                n = i(837291),
                o = i(756740),
                l = i(741341);
            class a extends o.BitmapCoordinatesPaneRenderer {
                constructor() {
                    super(...arguments), this._data = null,
                        this._hitTest = new s.HitTestResult(s.HitTestResult.REGULAR)
                }
                setData(e) {
                    this._data = e
                }
                setHitTest(e) {
                    this._hitTest = e
                }
                hitTest(e) {
                    if (null === this._data || !1 === this._data.visible || null === this._hitTest) return null;
                    const t = (0, n.interactionTolerance)().line,
                        i = Math.abs(e.y - this._data.y) <= t + this._data.linewidth / 2,
                        s = void 0 === this._data.left || this._data.left - e.x <= t,
                        r = void 0 === this._data.right || e.x - this._data.right <= t;
                    return i && s && r ? this._hitTest : null
                }
                _drawImpl(e) {
                    if (null === this._data || !1 === this._data.visible) return;
                    const {
                        context: t,
                        horizontalPixelRatio: i,
                        verticalPixelRatio: s,
                        mediaSize: n
                    } = e;
                    if (this._data.y < -this._data.linewidth / 2 || this._data.y > n.height + this._data.linewidth / 2) return;
                    t.lineCap = "butt", t.strokeStyle = this._data.color, t.lineWidth = Math.max(1, Math.floor(this._data.linewidth * i)), void 0 !== this._data.linestyle && (0, r.setLineStyle)(t, this._data.linestyle);
                    const o = void 0 !== this._data.left ? Math.max(this._data.left, 0) : 0,
                        a = void 0 !== this._data.right ? Math.min(this._data.right, n.width) : n.width,
                        d = Math.round(this._data.y * s),
                        h = Math.round(o * i),
                        u = Math.round(a * i),
                        c = this._data.excludeBoundaries;
                    void 0 !== c && (0, l.addExclusionAreaByScope)(e, c), (0, r.drawHorizontalLine)(t, d, h, u)
                }
            }
        },
        943498: (e, t, i) => {
            i.d(t, {
                PaneRendererLine: () => d
            });
            var s = i(86441),
                r = i(204652),
                n = i(858063),
                o = i(837291),
                l = i(914679),
                a = i(756740);
            class d extends a.BitmapCoordinatesPaneRenderer {
                constructor(e) {
                    super(), this._data = e
                }
                hitTest(e) {
                    var t, i, l, a;
                    const d = (0, o.interactionTolerance)().series + this._data.lineWidth / 2;
                    let h = null !== (i = null === (t = this._data.visibleItemsRange) || void 0 === t ? void 0 : t.startItemIndex) && void 0 !== i ? i : 0,
                        u = (null !== (a = null === (l = this._data.visibleItemsRange) || void 0 === l ? void 0 : l.endItemIndex) && void 0 !== a ? a : this._data.items.length) - 1;
                    for (; u - h > 2;) {
                        const t = Math.round((u + h) / 2);
                        this._data.items[t].x <= e.x ? h = t : u = t
                    }
                    h = Math.max(1, h - 1), u = Math.min(this._data.items.length - 1, u + 1);
                    for (let t = h; t <= u; ++t) {
                        const i = this._data.items[t - 1],
                            o = this._data.items[t],
                            l = i.x,
                            a = o.x;
                        if ((0, r.distanceToSegment)(new s.Point(l, i.y), new s.Point(a, o.y), new s.Point(e.x, e.y)).distance <= d) return this._data.hittest ? this._data.hittest : new n.HitTestResult(n.HitTestResult.REGULAR)
                    }
                    return null
                }
                _drawImpl(e) {
                    const {
                        context: t,
                        horizontalPixelRatio: i,
                        verticalPixelRatio: s
                    } = e;
                    t.scale(i, s), t.lineCap = "round", t.lineJoin = "round", t.strokeStyle = this._data.lineColor, t.fillStyle = this._data.lineColor, t.lineWidth = this._data.lineWidth, (0, l.setLineStyle)(t, this._data.lineStyle), (0, o.setValidLineStyle)(t, this._data.lineStyle), this._data.simpleMode ? this._drawSimpleMode(t, i, s) : this._drawLines(t)
                }
                _drawSimpleMode(e, t, i) {
                    var s, r, n, o;
                    if (e.beginPath(), this._walkLine(e, this._data.items, !1, NaN), e.stroke(), this._data.withMarkers) {
                        e.scale(1 / t, 1 / i);
                        const l = Math.max(1, Math.floor(t)) % 2 / 2,
                            a = (this._data.lineWidth + 2) * i + l,
                            d = 2 * Math.PI;
                        e.beginPath();
                        const h = null !== (r = null === (s = this._data.visibleItemsRange) || void 0 === s ? void 0 : s.startItemIndex) && void 0 !== r ? r : 0;
                        for (let s = (null !== (o = null === (n = this._data.visibleItemsRange) || void 0 === n ? void 0 : n.endItemIndex) && void 0 !== o ? o : this._data.items.length) - 1 + 1; s-- >= h;) {
                            const r = this._data.items[s];
                            if (r) {
                                const s = Math.round(r.x * t) + l,
                                    n = r.y * i;
                                e.moveTo(s, n), e.arc(s, n, a, 0, d)
                            }
                        }
                        e.fill()
                    }
                }
                _walkLine(e, t, i, s, r) {
                    var n, l, a, d;
                    if (!t) return;
                    const h = .25 * this._data.barSpacing;
                    let u, c, _, p, f;
                    const y = o.coordinateIsValid,
                        m = r ? 0 : null !== (l = null === (n = this._data.visibleItemsRange) || void 0 === n ? void 0 : n.startItemIndex) && void 0 !== l ? l : 0,
                        v = r ? t.length - 1 : Math.min((null !== (d = null === (a = this._data.visibleItemsRange) || void 0 === a ? void 0 : a.endItemIndex) && void 0 !== d ? d : t.length) - 1, t.length - 1);
                    for (let e = m; e <= v; e++) {
                        const i = t[e];
                        if (y(i.y)) {
                            c = i, u = e;
                            break
                        }
                    }
                    if (void 0 !== u && void 0 !== c)
                        for (let r = u; r <= v; r++) {
                            p = t[r], f = t[r + 1] || {};
                            const n = Math.round(p.x);
                            if (y(p.y))
                                if (_ && y(_.y)) e.lineTo(n, p.y), i && !y(f.y) && e.lineTo(n, s);
                                else if (f && y(f.y)) i ? (r !== u && e.lineTo(n, s), e.lineTo(n, p.y)) : e.moveTo(n, p.y);
                            else if (i) {
                                if (0 === r) continue;
                                r !== u && e.lineTo(n - h, s), e.lineTo(n - h, p.y), e.lineTo(n + h, p.y), e.lineTo(n + h, s)
                            } else e.moveTo(n - h, p.y), e.lineTo(n + h, p.y);
                            _ = p
                        }
                }
                _drawLines(e) {
                    var t, i, s, r;
                    if (!this._data.items.length) return;
                    let n, l, a;
                    const d = .25 * this._data.barSpacing,
                        h = o.coordinateIsValid;
                    e.beginPath();
                    const u = null !== (i = null === (t = this._data.visibleItemsRange) || void 0 === t ? void 0 : t.startItemIndex) && void 0 !== i ? i : 0,
                        c = (null !== (r = null === (s = this._data.visibleItemsRange) || void 0 === s ? void 0 : s.endItemIndex) && void 0 !== r ? r : this._data.items.length) - 1,
                        _ = this._data.items[u];
                    _ && e.moveTo(_.x, _.y);
                    let p, f = e.strokeStyle,
                        y = e.lineWidth;
                    for (let t = u + 1; t <= c; ++t) {
                        let i, s, r;
                        n = this._data.items[t - 1], l = this._data.items[t], a = this._data.items[t + 1], l.style && !this._data.forceLineColor ? (i = l.style.color, s = l.style.width, r = l.style.style) : (i = this._data.lineColor, s = this._data.lineWidth, r = this._data.lineStyle), this._data.ignorePaletteLineWidth && (s = this._data.lineWidth);
                        (i !== f || s !== y || r !== p) && (f = i, y = s, p = r, e.stroke(), e.beginPath(), e.strokeStyle = i, e.lineWidth = s, (0, o.setValidLineStyle)(e, r), e.moveTo(n.x, n.y)), m = n, g = a, h((v = l).y) && (h(m.y) ? e.lineTo(v.x, v.y) : g && h(g.y) ? e.moveTo(v.x, v.y) : (e.moveTo(v.x - d, v.y), e.lineTo(v.x + d, v.y)))
                    }
                    var m, v, g;
                    e.stroke()
                }
            }
        },
        904244: (e, t, i) => {
            i.d(t, {
                MediaCoordinatesPaneRenderer: () => r
            });
            var s = i(327714);
            class r {
                draw(e, t) {
                    new s.CanvasRenderingTarget2D(e, (0, s.size)({
                        width: t.cssWidth,
                        height: t.cssHeight
                    }), (0, s.size)({
                        width: t.physicalWidth,
                        height: t.physicalHeight
                    })).useMediaCoordinateSpace((e => this._drawImpl(e)))
                }
                drawBackground(e, t) {
                    new s.CanvasRenderingTarget2D(e, (0, s.size)({
                        width: t.cssWidth,
                        height: t.cssHeight
                    }), (0, s.size)({
                        width: t.physicalWidth,
                        height: t.physicalHeight
                    })).useMediaCoordinateSpace((e => this._drawBackgroundImpl(e)))
                }
                _drawBackgroundImpl(e) {}
            }
        },
        764372: (e, t, i) => {
            i.d(t, {
                StepLineDecoration: () => s,
                PaneRendererStepLine: () => y
            });
            var s, r = i(204652),
                n = i(86441),
                o = i(114123),
                l = i(858063),
                a = i(923195),
                d = i(837291),
                h = i(914679),
                u = i(756740);
            ! function(e) {
                e[e.None = 0] = "None", e[e.Diamonds = 1] = "Diamonds"
            }(s || (s = {}));
            class c {
                initialize(e, t, i) {
                    var s, r, n, o;
                    const {
                        context: l,
                        horizontalPixelRatio: a,
                        verticalPixelRatio: d
                    } = t, u = e.lineStyle;
                    l.lineCap = "butt", l.lineJoin = "round";
                    const c = Math.max(Math.floor(null !== (r = null === (s = i.style) || void 0 === s ? void 0 : s.width) && void 0 !== r ? r : e.lineWidth * a));
                    void 0 !== u && (0, h.setLineStyle)(l, u);
                    const _ = c % 2 ? .5 : 0;
                    l.moveTo(Math.round(i.x * a) + _, Math.round(i.y * d) + _), l.strokeStyle = null !== (o = null === (n = i.style) || void 0 === n ? void 0 : n.color) && void 0 !== o ? o : e.lineColor, l.lineWidth = c
                }
                finishFragment(e) {
                    e.stroke()
                }
                hitTest(e, t, i, s, r) {
                    return c.hitTest(e, t, i, s, r)
                }
                applyColor(e, t) {
                    e.strokeStyle = t
                }
                applyLineWidth(e, t) {
                    e.lineWidth = t
                }
                drawItem(e, t, i) {
                    const s = e.context;
                    s.lineTo(t.x, t.y), void 0 !== i && (s.lineTo(i.x, t.y), s.lineTo(i.x, i.y))
                }
                static hitTest(e, t, i, s, o) {
                    var l, a;
                    const h = t.pixelRatio,
                        u = null !== (a = null === (l = i.style) || void 0 === l ? void 0 : l.width) && void 0 !== a ? a : e.lineWidth,
                        c = Math.max(1, Math.floor(u * h)) % 2 ? .5 : 0,
                        _ = (0, d.interactionTolerance)().series + u / 2;
                    let p;
                    if (isNaN(s.y)) {
                        const e = i.x + c,
                            t = s.x + c,
                            l = new n.Point(e, i.y),
                            a = new n.Point(t, i.y);
                        p = (0, r.distanceToSegment)(l, a, o).distance
                    } else {
                        const t = Math.round(s.x - e.barSpacing / 2 * h) + c,
                            l = new n.Point(t, i.y),
                            a = new n.Point(t, s.y);
                        p = Math.min((0, r.distanceToSegment)(i, l, o).distance, (0, r.distanceToSegment)(l, a, o).distance, (0, r.distanceToSegment)(a, s, o).distance)
                    }
                    return p <= _
                }
            }
            class _ {
                constructor() {
                    this._lineWidth = 1
                }
                initialize(e, t, i) {
                    var s, r, n, o;
                    const {
                        context: l,
                        horizontalPixelRatio: a
                    } = t;
                    this.applyColor(l, null !== (r = null === (s = i.style) || void 0 === s ? void 0 : s.color) && void 0 !== r ? r : e.lineColor), this._lineWidth = Math.max(Math.floor(null !== (o = null === (n = i.style) || void 0 === n ? void 0 : n.width) && void 0 !== o ? o : e.lineWidth * a))
                }
                finishFragment(e) {
                    e.fill()
                }
                drawItem(e, t, i, s) {
                    if (s && void 0 !== i && !Number.isNaN(i.y)) {
                        const t = e.context;
                        t.save(), t.translate(i.x, i.y), t.rotate(Math.PI / 4);
                        const s = this._scaleByLineWidth(this._lineWidth);
                        t.scale(s, s), this._drawItemRotatedAndTranslated(e), t.restore()
                    }
                }
                applyLineWidth(e, t) {
                    this._lineWidth = t
                }
                hitTest(e, t, i, s, r) {
                    var o, l;
                    if (!s.valIsNotSameAsPrev) return !1;
                    const a = Math.round((i.x + s.x) / 2),
                        d = new n.Point(a, s.y),
                        h = r.subtract(d),
                        u = Math.max(Math.floor(null !== (l = null === (o = i.style) || void 0 === o ? void 0 : o.width) && void 0 !== l ? l : e.lineWidth * t.pixelRatio));
                    return this._hitTestTranslated(h, u)
                }
                _scaleByLineWidth(e) {
                    return Math.sqrt(e)
                }
            }
            class p extends _ {
                applyColor(e, t) {
                    e.fillStyle = t
                }
                _hitTestTranslated(e, t) {
                    return Math.abs(e.x) + Math.abs(e.y) < 8 * this._scaleByLineWidth(t) / 2
                }
                _drawItemRotatedAndTranslated(e) {
                    (0, h.drawRoundRect)(e.context, -4, -4, 8, 8, 2, !0)
                }
            }
            class f extends _ {
                applyColor(e, t) {
                    e.fillStyle = (0, o.applyTransparency)(t, 85)
                }
                _hitTestTranslated(e, t) {
                    return Math.abs(e.x) + Math.abs(e.y) < 21 * this._scaleByLineWidth(t) / 2
                }
                _drawItemRotatedAndTranslated(e) {
                    (0, h.drawRoundRect)(e.context, -10.5, -10.5, 21, 21, 5, !0)
                }
            }
            class y extends u.BitmapCoordinatesPaneRenderer {
                constructor(e, t) {
                    super(), this._data = null, this._data = null != e ? e : null, this._extendLineToLastConfirmedBar = Boolean(t)
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e, t) {
                    const i = this._data;
                    if (null === i || 0 === i.items.length) return null;
                    const {
                        items: r,
                        items: {
                            length: o
                        },
                        lastConfirmedSeriesBarCoordinate: d,
                        visibleItemsRange: {
                            startItemIndex: h,
                            endItemIndex: u
                        } = {
                            startItemIndex: 0,
                            endItemIndex: o
                        }
                    } = i, _ = i.decoration === s.Diamonds ? [new c, new f] : [new c];
                    const p = (0, a.lowerbound)(r, e, ((e, t) => e.x <= t.x), h, u),
                        y = Math.max(0, p - 1),
                        m = Math.min(o, p + 1);
                    for (let s = y; s < m; s++) {
                        const a = r[s],
                            h = r[s + 1];
                        if (h) {
                            if (_.some((s => s.hitTest(i, t, a, h, e)))) return new l.HitTestResult(l.HitTestResult.REGULAR)
                        } else if (this._extendLineToLastConfirmedBar && void 0 !== d && m === o && a.x < t.cssWidth && a.x < d) {
                            const s = (0, n.point)(d, a.y);
                            if (c.hitTest(i, t, a, s, e)) return new l.HitTestResult(l.HitTestResult.REGULAR)
                        }
                    }
                    return null
                }
                _drawImpl(e) {
                    if (null === this._data || 0 === this._data.items.length) return;
                    (this._data.decoration === s.Diamonds ? [new c, new p, new f] : [new c]).forEach((t => this._drawDecorationItem(e, t)))
                }
                _drawDecorationItem(e, t) {
                    var i, s, r, o, l, a, d, h, u, c, _, p, f, y, m, v;
                    if (null === this._data || 0 === this._data.items.length) return;
                    const {
                        lineWidth: g,
                        lineColor: S,
                        items: b
                    } = this._data, {
                        context: w,
                        horizontalPixelRatio: P,
                        verticalPixelRatio: x,
                        bitmapSize: C
                    } = e;
                    let I = Math.max(Math.floor(null !== (s = null === (i = b[0].style) || void 0 === i ? void 0 : i.width) && void 0 !== s ? s : g * P)),
                        T = I % 2 ? .5 : 0;
                    t.initialize(this._data, e, b[0]);
                    const V = null !== (o = null === (r = this._data.visibleItemsRange) || void 0 === r ? void 0 : r.startItemIndex) && void 0 !== o ? o : 0,
                        M = null !== (a = null === (l = this._data.visibleItemsRange) || void 0 === l ? void 0 : l.endItemIndex) && void 0 !== a ? a : b.length,
                        R = this._data.barSpacing;
                    if (!(M <= V)) {
                        w.beginPath(), t.applyColor(w, null !== (h = null === (d = b[V].style) || void 0 === d ? void 0 : d.color) && void 0 !== h ? h : S);
                        for (let i = V; i < M; i++) {
                            const s = b[i],
                                r = i === M - 1 ? null : b[i + 1];
                            let o = 0;
                            this._data.extendToBarsEndings && (i === V && (o = -this._data.barSpacing / 2), i === M - 1 && (o = this._data.barSpacing / 2));
                            const l = Math.round((s.x + o) * P) + T,
                                a = Math.round(s.y * x) + T;
                            if (!r) {
                                if (t.drawItem(e, (0, n.point)(l, a)), this._extendLineToLastConfirmedBar && void 0 !== this._data.lastConfirmedSeriesBarCoordinate && l < C.width && s.x < this._data.lastConfirmedSeriesBarCoordinate) {
                                    const i = Math.round((this._data.lastConfirmedSeriesBarCoordinate + o) * P) + T;
                                    l < i && t.drawItem(e, (0, n.point)(Math.min(C.width, i), a), void 0, !0)
                                }
                                continue
                            }
                            const d = isNaN(r.y),
                                h = Math.round((r.x - R / 2) * P) + T,
                                A = Math.round(r.y * x) + T;
                            t.drawItem(e, (0, n.point)(l, a), (0, n.point)(h, A), r.valIsNotSameAsPrev);
                            const L = null !== (c = null === (u = s.style) || void 0 === u ? void 0 : u.color) && void 0 !== c ? c : S,
                                B = null !== (p = null === (_ = s.style) || void 0 === _ ? void 0 : _.width) && void 0 !== p ? p : g,
                                O = null !== (y = null === (f = r.style) || void 0 === f ? void 0 : f.color) && void 0 !== y ? y : S,
                                D = null !== (v = null === (m = r.style) || void 0 === m ? void 0 : m.width) && void 0 !== v ? v : g,
                                k = L !== O,
                                N = B !== D;
                            (k || N || d) && (t.finishFragment(w), k && t.applyColor(w, O), N && (I = Math.max(1, Math.floor(D * P)), T = I % 2 ? .5 : 0, t.applyLineWidth(w, I)), w.beginPath(), w.moveTo(h, A))
                        }
                        t.finishFragment(w)
                    }
                }
            }
        },
        730293: (e, t, i) => {
            i.d(t, {
                isPriceDataSource: () => l,
                PriceDataSource: () => a
            });
            var s = i(282151),
                r = i(869403),
                n = i.n(r),
                o = i(354145);

            function l(e) {
                return e instanceof a
            }
            class a extends s.DataSource {
                constructor(e, t) {
                    super(t), this._formatterChanged = new(n()), this._priceStepChanged = new(n()), this._currencyChanged = new(n()), this._unitChanged = new(n()), this._priceRangeReadyChanged = new(n()), this._priceStep = null, this._priceRangeReady = !0, this._model = e
                }
                base() {
                    return 0
                }
                model() {
                    return this._model
                }
                currencyChanged() {
                    return this._currencyChanged
                }
                isCurrencySource() {
                    return !0
                }
                isDisplayedInLegend() {
                    return !0
                }
                unitChanged() {
                    return this._unitChanged
                }
                isUnitSource() {
                    return !0
                }
                priceRange(e, t) {
                    return null
                }
                isDraggable() {
                    return !0
                }
                priceLineColor(e) {
                    return e
                }
                formatterChanged() {
                    return this._formatterChanged
                }
                priceStep(e) {
                    return this._priceStep
                }
                priceStepChanged() {
                    return this._priceStepChanged
                }
                isIncludedInAutoScale() {
                    return !0
                }
                correctScaleMargins(e) {
                    return e
                }
                priceRangeReady() {
                    return this._priceRangeReady
                }
                priceRangeReadyChanged() {
                    return this._priceRangeReadyChanged
                }
                disablePriceRangeReady() {
                    const e = this.priceScale();
                    null === e || e.isAutoScale() || e.mainSource() !== this || (this._priceRangeReady = !1, e.recalculatePriceRangeOnce()), this._priceRangeReadyChanged.fire(!1)
                }
                statusView() {
                    return null
                }
                legendView() {
                    return null
                }
                marketStatusModel() {
                    return null
                }
                dataUpdatedModeModel() {
                    return null
                }
                dataProblemModel() {
                    return null
                }
                _enablePriceRangeReady() {
                    this._priceRangeReady = !0, this._priceRangeReadyChanged.fire(!0)
                }
                _onSourceCurrencyChanged() {
                    (0, o.isActingAsSymbolSource)(this) || this._currencyChanged.fire()
                }
                _onSourceUnitChanged() {
                    (0, o.isActingAsSymbolSource)(this) || this._unitChanged.fire()
                }
                _onSourcePriceRangeReadyChanged(e) {
                    (0, o.isActingAsSymbolSource)(this) || e || this.disablePriceRangeReady()
                }
            }
        },
        719684: (e, t, i) => {
            i.d(t, {
                PriceLineAxisRenderer: () => o
            });
            var s = i(650151),
                r = i(631586),
                n = i(914679);
            class o {
                constructor(e, t) {
                    this.setData(e, t)
                }
                setData(e, t) {
                    this._data = e, this._commonData = t
                }
                draw(e, t, i, o, l, a, d) {
                    var h;
                    if (!this._data.visible) return;
                    const u = null !== (h = this._commonData.fixedCoordinate) && void 0 !== h ? h : this._commonData.coordinate;
                    e.lineWidth = Math.max(1, Math.floor((0, s.ensureDefined)(this._data.linewidth) * d)), e.lineCap = "butt", (0, n.setLineStyle)(e, void 0 === this._data.linestyle ? r.LINESTYLE_DOTTED : this._data.linestyle), e.strokeStyle = this._commonData.textColor, (0, n.drawHorizontalLine)(e, Math.round(u * d), 0, Math.ceil(o * d))
                }
                topBottomTotalHeight(e) {
                    return {
                        top: 0,
                        bottom: 0,
                        total: 0
                    }
                }
            }
        },
        471502: (e, t, i) => {
            i.d(t, {
                PriceLineAxisView: () => o,
                SeriesPriceLineAxisView: () => l,
                StudyPriceLineAxisView: () => a
            });
            var s = i(841404),
                r = i(719684),
                n = i(631586);
            class o extends s.PriceAxisView {
                constructor(e) {
                    super(e || r.PriceLineAxisRenderer)
                }
                ignoreAlignment() {
                    return !0
                }
                _updateRendererData(e, t, i) {
                    if (t.visible = !1, e.visible = !1, !this._isVisible()) return;
                    const s = this._value();
                    s.noData || (i.background = "", i.textColor = this._priceLineColor(s.color), i.coordinate = s.coordinate, i.floatCoordinate = s.floatCoordinate, e.linewidth = this._lineWidth(), e.linestyle = this._lineStyle(), e.backgroundAreaVisible = this._backgroundAreaVisible(), e.backgroundAreaColor = this._backgroundAreaColor(), e.backgroundAreaHeight = this._backgroundAreaHeight(), e.visible = !0)
                }
                _lineStyle() {
                    return n.LINESTYLE_DOTTED
                }
                _backgroundAreaVisible() {
                    return !1
                }
                _backgroundAreaColor() {
                    return ""
                }
                _backgroundAreaHeight() {
                    return 0
                }
            }
            class l extends o {
                constructor(e) {
                    super(), this._series = e
                }
                _value() {
                    return this._series.lastValueData(void 0, !0)
                }
                _priceLineColor(e) {
                    return this._series.priceLineColor(e)
                }
                _lineWidth() {
                    return this._series.properties().childs().priceLineWidth.value()
                }
                _isVisible() {
                    const e = this._series.model().properties().childs().scalesProperties.childs().showSeriesLastValue.value();
                    return this._series.properties().childs().showPriceLine.value() && e
                }
            }
            class a extends o {
                constructor(e, t) {
                    super(), this._study = e, this._plotname = t
                }
                _value() {
                    return this._study.lastValueData(this._plotname, !0)
                }
                _lineWidth() {
                    return this._study.properties().childs().styles.childs()[this._plotname].childs().linewidth.value()
                }
                _lineStyle() {
                    return n.LINESTYLE_DOTTED
                }
                _priceLineColor(e) {
                    return e
                }
                _isVisible() {
                    const e = this._study.model().properties().childs().scalesProperties.childs().showStudyLastValue.value(),
                        t = this._study.isPlotVisibleAt(this._plotname, 1);
                    return this._study.properties().childs().styles.childs()[this._plotname].childs().trackPrice.value() && e && t
                }
            }
        },
        847314: (e, t, i) => {
            i.d(t, {
                SelectionIndexes: () => r
            });
            var s = i(650151);
            class r {
                constructor(e) {
                    this._baseIndex = null, this._offsetInBar = null, this._offsetInTime = null, this._barsBetweenPoints = null, this._timescale = e
                }
                indexes() {
                    const e = this._timescale.visibleBarsStrictRange();
                    if (null === e) return [];
                    const t = e.firstBar(),
                        i = e.lastBar();
                    if (null === this._offsetInTime || null === this._barsBetweenPoints) {
                        const e = this._timescale.barSpacing();
                        this._barsBetweenPoints = Math.floor(120 / e), this._offsetInBar = i % this._barsBetweenPoints, this._offsetInTime = this._timescale.indexToTimePoint(this._offsetInBar), this._baseIndex = this._timescale.baseIndex()
                    }
                    const r = this._timescale.baseIndex();
                    this._baseIndex !== r && (this._baseIndex = r, this._offsetInBar = (0, s.ensureNotNull)(this._timescale.timePointToIndex(this._offsetInTime)));
                    const n = (0, s.ensureNotNull)(this._offsetInBar),
                        o = [];
                    let l = Math.floor((t - n) / this._barsBetweenPoints);
                    const a = Math.floor((i - n) / this._barsBetweenPoints);
                    for (; l <= a; l++) o.push(n + l * this._barsBetweenPoints);
                    return o
                }
                clear() {
                    this._offsetInBar = null, this._offsetInTime = null, this._baseIndex = null, this._barsBetweenPoints = null
                }
            }
        },
        583110: (e, t, i) => {
            i.d(t, {
                SelectionRenderer: () => d
            });
            var s = i(934026),
                r = i(314967),
                n = i(858063),
                o = i(854905),
                l = i(756740);
            const a = r.colorsPalette["color-tv-blue-600"];
            class d extends l.BitmapCoordinatesPaneRenderer {
                constructor(e) {
                    super(), this._data = e || null
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e) {
                    if (!this._data || !this._data.visible) return null;
                    for (let t = 0; t < this._data.points.length; t++) {
                        const i = this._data.points[t];
                        if (i.subtract(e).length() <= 5.5) {
                            const e = void 0 !== this._data.pointsCursorType ? this._data.pointsCursorType[t] : o.PaneCursorType.Default;
                            return new n.HitTestResult(this._data.hittestResult, {
                                pointIndex: i.data,
                                cursorType: e
                            })
                        }
                    }
                    return null
                }
                doesIntersectWithBox(e) {
                    return !!this._data && this._data.points.some((t => (0, s.pointInBox)(t, e)))
                }
                _drawImpl(e) {
                    if (null === this._data || !this._data.visible) return;
                    const {
                        context: t,
                        horizontalPixelRatio: i
                    } = e;
                    t.strokeStyle = void 0 !== this._data.color ? this._data.color : a, t.lineCap = "butt";
                    const s = Math.max(1, Math.floor(i));
                    t.lineWidth = s;
                    const r = this._data.vertOffset || 0;
                    for (let i = 0; i < this._data.points.length; ++i) {
                        const o = this._data.points[i];
                        (n = o, Number.isFinite(n.x) && Number.isFinite(n.y)) && (t.fillStyle = this._data.bgColors[i], this._drawMarker(e, o, r, s))
                    }
                    var n
                }
                _drawMarker(e, t, i, s) {
                    const {
                        context: r,
                        horizontalPixelRatio: n,
                        verticalPixelRatio: o
                    } = e;
                    let l = Math.round(3.5 * n * 2);
                    l % 2 != s % 2 && (l += 1);
                    let a = Math.round(l + 2 * (.5 * s + .75 * n));
                    a % 2 != s % 2 && (a += 1);
                    const d = Math.round(t.x * n),
                        h = Math.round((t.y + i) * o),
                        u = s % 2 / 2;
                    r.beginPath(), r.arc(d + u, h + u, a / 2, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.beginPath(), r.arc(d + u, h + u, l / 2, 0, 2 * Math.PI, !0), r.closePath(), r.stroke()
                }
            }
        },
        352566: (e, t, i) => {
            i.d(t, {
                PaneRendererBars: () => n
            });
            var s = i(837291),
                r = i(991410);
            class n extends r.PaneRendererSeriesBase {
                constructor(e) {
                    super(), this._bars = e.bars, this._barSpacing = e.barSpacing, this._dontDrawOpen = e.dontDrawOpen, this._thinBars = e.thinBars
                }
                draw(e, t) {
                    e.save();
                    const i = t.pixelRatio;
                    if (this._barWidth = this._calcBarWidth(i), this._barWidth >= 2) {
                        Math.max(1, Math.floor(i)) % 2 != this._barWidth % 2 && this._barWidth--
                    }
                    this._barLineWidth = this._thinBars ? Math.min(this._barWidth, Math.floor(i)) : this._barWidth;
                    let s = null;
                    const r = this._barLineWidth <= this._barWidth && this._barSpacing >= Math.floor(1.5 * t.pixelRatio);
                    for (const t of this._bars) {
                        s !== t.color && (e.fillStyle = t.color, s = t.color);
                        const n = Math.floor(.5 * this._barLineWidth),
                            o = Math.round(t.time * i),
                            l = o - n,
                            a = this._barLineWidth,
                            d = l + a - 1,
                            h = Math.min(t.high, t.low),
                            u = Math.max(t.high, t.low),
                            c = Math.round(h * i) - n,
                            _ = Math.round(u * i) + n,
                            p = Math.max(_ - c, this._barLineWidth);
                        e.fillRect(l, c, a, p);
                        const f = Math.ceil(1.5 * this._barWidth);
                        if (r) {
                            const s = o - f,
                                r = o + f,
                                h = Math.min(l - s, r - d);
                            if (!this._dontDrawOpen) {
                                let r = Math.max(c, Math.round(t.open * i) - n),
                                    o = r + a - 1;
                                o > c + p - 1 && (o = c + p - 1, r = o - a + 1), e.fillRect(s, r, h, o - r + 1)
                            }
                            let u = Math.max(c, Math.round(t.close * i) - n),
                                _ = u + a - 1;
                            _ > c + p - 1 && (_ = c + p - 1, u = _ - a + 1), e.fillRect(d + 1, u, h, _ - u + 1)
                        }
                    }
                    e.restore()
                }
                _getTolerance() {
                    const e = this._calcBarWidth(1),
                        t = this._thinBars ? Math.min(e, 1) : e;
                    return (0, s.interactionTolerance)().series + t / 2
                }
                _getBarSpacing() {
                    return this._barSpacing
                }
                _calcBarWidth(e) {
                    const t = Math.floor(e);
                    return Math.max(t, Math.floor((0, s.optimalBarWidth)(this._barSpacing, e)))
                }
            }
        },
        991410: (e, t, i) => {
            i.d(t, {
                PaneRendererSeriesBase: () => r
            });
            var s = i(858063);
            class r {
                constructor() {
                    this._bars = []
                }
                hitTest(e) {
                    const t = this._bars,
                        i = this._getBarSpacing(),
                        s = i / 2;
                    if (0 === t.length) return null;
                    const r = this._getTolerance(),
                        n = t[0],
                        o = t[t.length - 1];
                    if (e.x < n.time - s - r) return null;
                    if (e.x > o.time + s + r) return null;
                    let l = 0,
                        a = t.length - 1,
                        d = -1;
                    for (; l <= a;) {
                        const i = Math.floor((l + a) / 2),
                            h = t[i];
                        let u = s;
                        if (h !== n && h !== o || (u += r), Math.abs(h.time - e.x) <= u) {
                            d = i;
                            break
                        }
                        e.x - h.time > s ? l = i + 1 : a = i - 1
                    }
                    if (-1 !== d) {
                        const n = Math.ceil(r / i);
                        if (0 !== n) {
                            const i = Math.max(0, d - n),
                                o = Math.min(t.length - 1, d + n);
                            for (let n = i; n <= o; n++)
                                if (Math.abs(e.x - t[n].time) <= s + r && this._isPointAtBar(t[n], e.y, r)) return this._getHitTest()
                        } else if (this._isPointAtBar(t[d], e.y, r)) return this._getHitTest()
                    }
                    return null
                }
                _getHitTest() {
                    return new s.HitTestResult(s.HitTestResult.REGULAR)
                }
                _isPointAtBar(e, t, i) {
                    const s = Math.min(e.high, e.low),
                        r = Math.max(e.high, e.low);
                    return s - i <= t && t <= r + i
                }
            }
        },
        916716: (e, t, i) => {
            i.d(t, {
                PaneRendererCandles: () => a
            });
            var s = i(650151),
                r = i(858063),
                n = i(914679),
                o = i(837291),
                l = i(991410);
            class a extends l.PaneRendererSeriesBase {
                constructor(e) {
                    super(), this._barSpacing = 1, this._barWidth = 1, this._borderVisible = !1, this._barBorderWidth = 1, this._wickVisible = !1, this._bodyVisible = !0, this._borderColor = void 0, this._wickColor = void 0, this._hittest = void 0, this._isPriceScaleInverted = !1, e && this.setData(e)
                }
                setData(e) {
                    this._bars = e.bars, this._barSpacing = e.barSpacing, this._borderVisible = e.borderVisible, this._bodyVisible = e.bodyVisible, this._wickVisible = e.wickVisible, this._borderColor = e.borderColor, this._wickColor = e.wickColor, this._hittest = e.hittest, this._isPriceScaleInverted = e.isPriceScaleInverted
                }
                hitTest(e) {
                    return this._wickVisible || this._borderVisible || this._bodyVisible ? super.hitTest(e) : null
                }
                draw(e, t) {
                    if (0 === this._bars.length) return;
                    const i = t.pixelRatio;
                    if (this._barWidth = (0, o.optimalCandlestickWidth)(this._barSpacing, i), this._barWidth >= 2) {
                        Math.floor(i) % 2 != this._barWidth % 2 && this._barWidth--
                    }
                    this._wickVisible && this._drawWicks(e, i), this._borderVisible && this._drawBorder(e, i), this._bodyVisible && this._drawCandles(e, i)
                }
                _getTolerance() {
                    return (0, o.interactionTolerance)().series + this._barBorderWidth / 2
                }
                _getBarSpacing() {
                    return this._barSpacing
                }
                _getHitTest() {
                    return this._hittest || new r.HitTestResult(r.HitTestResult.REGULAR)
                }
                _isPointAtBar(e, t, i) {
                    const s = this._bodyVisible || this._borderVisible,
                        r = this._wickVisible;
                    if (!s && !r) return !1;
                    if (s) {
                        const s = r ? Math.min(e.high, e.low) : Math.min(e.open, e.close),
                            n = r ? Math.max(e.high, e.low) : Math.max(e.open, e.close);
                        return s - i <= t && t <= n + i
                    } {
                        const s = Math.min(e.open, e.close),
                            r = Math.max(e.open, e.close);
                        return e.high - i <= t && t <= s + i || r - i <= t && t <= e.low + i
                    }
                }
                _drawWicks(e, t) {
                    const i = this._bars;
                    let r = "",
                        n = Math.min(Math.floor(t), Math.floor(this._barSpacing * t));
                    n = Math.max(Math.floor(t), Math.min(n, this._barWidth));
                    const o = Math.floor(.5 * n);
                    let l = null;
                    for (const a of i) {
                        const i = a.wickColor ? a.wickColor : (0, s.ensureDefined)(this._wickColor);
                        i !== r && (e.fillStyle = i, r = i);
                        let d = Math.round(Math.min(a.open, a.close) * t),
                            h = Math.round(Math.max(a.open, a.close) * t);
                        this._isPriceScaleInverted && ([h, d] = [d, h]);
                        const u = Math.round(a.high * t),
                            c = Math.round(a.low * t);
                        let _ = Math.round(t * a.time) - o;
                        const p = _ + n - 1;
                        null !== l && (_ = Math.max(l + 1, _), _ = Math.min(_, p));
                        const f = p - _ + 1;
                        e.fillRect(_, u, f, d - u), e.fillRect(_, h + 1, f, c - h - 1), l = p
                    }
                }
                _calculateBorderWidth(e) {
                    let t = Math.floor(1 * e);
                    this._barWidth <= 2 * t && (t = Math.floor(.5 * (this._barWidth - 1)));
                    const i = Math.max(Math.floor(e), t);
                    return this._barWidth <= 2 * i ? Math.max(Math.floor(e), Math.floor(1 * e)) : i
                }
                _drawBorder(e, t) {
                    let i = "";
                    const r = this._calculateBorderWidth(t);
                    let o = null;
                    for (const l of this._bars) {
                        if (l.borderColor !== i && (e.fillStyle = l.borderColor ? l.borderColor : (0, s.ensureDefined)(this._borderColor), i = l.borderColor), this._bodyVisible && l.hollow) continue;
                        let a = Math.round(l.time * t) - Math.floor(.5 * this._barWidth);
                        const d = a + this._barWidth - 1,
                            h = Math.round(Math.min(l.open, l.close) * t),
                            u = Math.round(Math.max(l.open, l.close) * t);
                        if (null !== o && (a = Math.max(o + 1, a), a = Math.min(a, d)), this._barSpacing * t > 2 * r)(0, n.fillRectInnerBorder)(e, a, h, d - a + 1, u - h + 1, r);
                        else {
                            const t = d - a + 1;
                            e.fillRect(a, h, t, u - h + 1)
                        }
                        o = d
                    }
                }
                _drawCandles(e, t) {
                    let i = "";
                    const s = this._calculateBorderWidth(t);
                    for (const r of this._bars) {
                        if (this._borderVisible && this._barWidth <= 2 * s && !r.hollow) continue;
                        let o = Math.round(Math.min(r.open, r.close) * t),
                            l = Math.round(Math.max(r.open, r.close) * t),
                            a = Math.round(r.time * t) - Math.floor(.5 * this._barWidth),
                            d = a + this._barWidth - 1;
                        if (r.color !== i) {
                            const t = r.color;
                            e.fillStyle = t, i = t
                        }
                        if (r.hollow) e.fillStyle = r.color, (0, n.fillRectInnerBorder)(e, a, o, d - a + 1, l - o + 1, s);
                        else {
                            if (this._borderVisible && (a += s, o += s, d -= s, l -= s), o > l) continue;
                            e.fillRect(a, o, d - a + 1, l - o + 1)
                        }
                    }
                }
            }
        },
        618258: (e, t, i) => {
            i.d(t, {
                StatusProviderBase: () => s
            });
            class s {
                constructor(e) {
                    this._colorProperty = e
                }
                size() {
                    return "13px"
                }
                bold() {
                    return !1
                }
                color() {
                    return this._colorProperty.value()
                }
            }
        },
        337720: (e, t, i) => {
            i.d(t, {
                StatusView: () => s
            });
            class s {
                constructor(e) {
                    this._text = "", this._color = "", this._size = "13px", this._bold = !1, this._statusProvider = e
                }
                text() {
                    return this._text
                }
                getSplitTitle() {
                    return [this._text]
                }
                color() {
                    return this._statusProvider.color()
                }
                bold() {
                    return this._bold
                }
                size() {
                    return this._size
                }
            }
        },
        43239: (e, t, i) => {
            i.d(t, {
                AbstractFilledAreaPaneView: () => m
            });
            var s = i(650151),
                r = i(114123),
                n = i(43329);
            class o {
                constructor() {
                    this._items = [], this._actualLength = 0, this._invalidations = 0
                }
                push(e) {
                    this._items.length === this._actualLength ? this._items.push(e) : this._items[this._actualLength] !== e && (this._items[this._actualLength] = e), this._actualLength += 1
                }
                newItem() {
                    const e = this._items.length > this._actualLength ? this._items[this._actualLength] : null;
                    return null !== e && Boolean(e.invalidateCache) && e.invalidateCache(), e
                }
                invalidateCache() {
                    this._invalidations += 1, 3e3 === this._invalidations && (this._items.splice(this._actualLength), this._invalidations = 0), this._actualLength = 0
                }
                at(e) {
                    return this._items[e]
                }
                data() {
                    return this._items
                }
                length() {
                    return this._actualLength
                }
            }
            class l extends o {
                constructor(e) {
                    super(), this.color = e
                }
            }
            class a {
                constructor() {
                    this._map = new Map, this._usedKeys = new Set, this._invalidations = 0
                }
                invalidateCache() {
                    this._invalidations += 1, 50 === this._invalidations && (this._deleteUnused(), this._invalidations = 0), this._usedKeys.clear(), this._map.forEach(((e, t) => e.invalidateCache()))
                }
                get(e) {
                    const t = this._map.get(e);
                    return void 0 !== t && this._usedKeys.add(e), t
                }
                set(e, t) {
                    this._usedKeys.add(e), this._map.set(e, t)
                }
                forEach(e) {
                    this._map.forEach(((t, i) => {
                        this._usedKeys.has(i) && e(t, i)
                    }))
                }
                delete(e) {
                    const t = this._map.get(e);
                    void 0 !== t && t.invalidateCache(), this._usedKeys.delete(e)
                }
                _deleteUnused() {
                    const e = [];
                    this._map.forEach(((t, i) => {
                        this._usedKeys.has(i) || e.push(i)
                    }));
                    for (const t of e) this._map.delete(t)
                }
            }
            class d extends o {
                constructor() {
                    super(), this.points1 = new o, this.points2 = new o, this.push(this.points1), this.push(this.points2)
                }
                addPoints1Point(e, t) {
                    let i = this.points1.newItem();
                    null !== i ? (i.x = e, i.y = t) : i = {
                        x: e,
                        y: t
                    }, this.points1.push(i)
                }
                addPoints2Point(e, t) {
                    let i = this.points2.newItem();
                    null !== i ? (i.x = e, i.y = t) : i = {
                        x: e,
                        y: t
                    }, this.points2.push(i)
                }
                invalidateCache() {
                    this.points1.invalidateCache(), this.points2.invalidateCache()
                }
            }
            class h {
                constructor() {
                    this._data = null
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e, t) {
                    return null
                }
                draw(e, t) {
                    if (null === this._data) return;
                    const i = t.pixelRatio,
                        s = .25 * this._data.barSpacing;
                    this._data.colorAreas.forEach((t => {
                        var r, n;
                        e.beginPath();
                        for (let r = 0; r < t.length(); r++) {
                            const n = t.at(r);
                            if (0 === n.points1.length() || 0 === n.points2.length()) continue;
                            const o = n.points1.at(0).x,
                                l = n.points1.at(0).y;
                            if (e.moveTo(Math.round(o * i), l * i), 1 !== n.points1.length() && 1 !== n.points2.length()) {
                                for (let t = 1; t < n.points1.length(); t++) e.lineTo(Math.round(n.points1.at(t).x * i), n.points1.at(t).y * i);
                                for (let t = n.points2.length() - 1; t >= 0; t--) e.lineTo(Math.round(n.points2.at(t).x * i), n.points2.at(t).y * i)
                            } else {
                                const t = n.points2.at(0).x,
                                    r = n.points2.at(0).y;
                                e.lineTo(Math.round((o + s) * i), l * i), e.lineTo(Math.round((t + s) * i), r * i), e.lineTo(Math.round((t - s) * i), r * i), e.lineTo(Math.round((o - s) * i), l * i)
                            }
                        }
                        if (e.closePath(), 0 === t.color.type) e.fillStyle = t.color.color;
                        else {
                            const s = e.createLinearGradient(0, t.color.value1 * i, 0, t.color.value2 * i);
                            s.addColorStop(0, null !== (r = t.color.color1) && void 0 !== r ? r : "transparent"), s.addColorStop(1, null !== (n = t.color.color2) && void 0 !== n ? n : "transparent"), e.fillStyle = s
                        }
                        e.fill()
                    }))
                }
            }
            var u = i(812363),
                c = i(837291);

            function _(e) {
                return 0 === e.type ? `${e.color}` : `${e.color1}:${e.color2}:${e.value1}:${e.value2}`
            }
            class p extends o {
                constructor() {
                    super(...arguments), this._startIndex = 0
                }
                setStartIndex(e) {
                    this._startIndex = e
                }
                isValidIndex(e) {
                    return e >= this._startIndex
                }
                at(e) {
                    const t = e - this._startIndex;
                    for (; t >= this._actualLength;) this._items.length <= t ? this._items.push(this._newObject()) : this._clearObject(this._items[this._actualLength]), this._actualLength += 1;
                    return this._items[t]
                }
            }
            class f extends p {
                _newObject() {
                    return {
                        plot1Value: void 0,
                        plot2Value: void 0,
                        colorValue: void 0
                    }
                }
                _clearObject(e) {
                    e.plot1Value = void 0, e.plot2Value = void 0, e.colorValue = void 0
                }
            }
            class y extends p {
                _newObject() {
                    return {
                        type: void 0,
                        colorIndexOrRgba: void 0,
                        colorIndexOrRgba1: void 0,
                        colorIndexOrRgba2: void 0,
                        value1: void 0,
                        value2: void 0
                    }
                }
                _clearObject(e) {
                    const t = e;
                    t.type = void 0, t.colorIndexOrRgba = void 0, t.colorIndexOrRgba1 = void 0, t.colorIndexOrRgba2 = void 0, t.value1 = void 0, t.value2 = void 0
                }
            }
            class m {
                constructor(e, t, i = !1) {
                    this._isHlineFill = !1, this._bandAKey = null, this._bandBKey = null, this._colorPlotIndex = null, this._colors = new o, this._areaRenderer = new h, this._invalidated = !0, this._plIndex1 = null, this._plIndex2 = null, this._level1 = 0, this._level2 = 0, this._studyValuesCache = new f, this._colorValuesCache = new y, this._points1 = new o, this._points2 = new o, this._timePoints = new o, this._colorAreas = new a, this._source = e, this._model = t, this._fillGaps = i
                }
                update() {
                    this._invalidated = !0
                }
                renderer(e, t) {
                    return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._areaRenderer
                }
                _correctVisibleRange(e, t) {
                    var i, s, r, n;
                    const o = this._source.data().plottableRange(),
                        l = e.firstBar() + Math.min(0, t) - 1,
                        a = e.lastBar() - t + 1,
                        d = this._plotIndex1(),
                        h = this._plotIndex2(),
                        c = o.search(l, u.PlotRowSearchMode.NearestLeft, d),
                        _ = o.search(l, u.PlotRowSearchMode.NearestLeft, h),
                        p = o.search(a, u.PlotRowSearchMode.NearestRight, d),
                        f = o.search(a, u.PlotRowSearchMode.NearestRight, h),
                        y = Math.min(null !== (i = null == c ? void 0 : c.index) && void 0 !== i ? i : 1 / 0, e.firstBar() - 1),
                        m = Math.min(null !== (s = null == _ ? void 0 : _.index) && void 0 !== s ? s : 1 / 0, e.firstBar() - 1),
                        v = Math.max(null !== (r = null == p ? void 0 : p.index) && void 0 !== r ? r : -1 / 0, e.lastBar() + 1),
                        g = Math.max(null !== (n = null == f ? void 0 : f.index) && void 0 !== n ? n : -1 / 0, e.lastBar() + 1);
                    let S = 1 / 0;
                    if (null !== this._colorPlotIndex && (null !== c || null !== _)) {
                        const e = o.search(Math.min(y, m) - 1, u.PlotRowSearchMode.NearestLeft);
                        null !== e && (S = e.index)
                    }
                    return [Math.min(y, m, S), Math.max(v, g)]
                }
                _plotNames() {
                    return this._source.metaInfo().plots.map((e => e.id))
                }
                _plotIndex1() {
                    return null === this._plIndex1 && (this._plIndex1 = this._plotNames().indexOf(this._plotAId()) + 1), this._plIndex1
                }
                _plotIndex2() {
                    return null === this._plIndex2 && (this._plIndex2 = this._plotNames().indexOf(this._plotBId()) + 1), this._plIndex2
                }
                _updateImpl() {
                    var e, t;
                    if (this._areaRenderer.setData(null), !this._visible()) return;
                    const i = this._source.priceScale(),
                        o = this._model,
                        l = o.timeScale();
                    if (!i || i.isEmpty() || l.isEmpty()) return;
                    if (o.mainSeries().bars().isEmpty()) return;
                    const a = this._source.firstValue();
                    if (null === a) return;
                    if (this._isHlineFill) {
                        const e = this._source.properties().bands[(0, s.ensureNotNull)(this._bandAKey)],
                            t = this._source.properties().bands[(0, s.ensureNotNull)(this._bandBKey)];
                        this._level1 = i.priceToCoordinate(e.value.value(), a), this._level2 = i.priceToCoordinate(t.value.value(), a)
                    }
                    const d = l.visibleBarsStrictRange();
                    if (null === d) return;
                    const h = new Map,
                        u = e => {
                            let t = h.get(e);
                            return void 0 === t && (t = i.priceToCoordinate(e, a), h.set(e, t)), t
                        },
                        c = (0, n.clamp)(this._transparency(), 0, 100),
                        _ = new Map,
                        p = e => {
                            let t = _.get(e);
                            return void 0 === t && (t = (0, r.generateColor)(e, c), _.set(e, t)), t
                        };
                    this._timePoints.invalidateCache(), this._points1.invalidateCache(), this._points2.invalidateCache(), this._colors.invalidateCache(), this._colorAreas.invalidateCache();
                    const f = this._source.offset(this._plotAId()),
                        y = this._source.offset(this._plotBId()),
                        m = Math.min(f, y),
                        v = Math.max(f, y),
                        [g, S] = this._correctVisibleRange(d, v),
                        b = null !== this._colorPlotIndex ? this._colors : null,
                        w = this._plotIndex1(),
                        P = this._plotIndex2(),
                        x = this._source.data().plottableRange();
                    if (x.isEmpty()) return;
                    let C, I;
                    const T = (0, s.ensureNotNull)(x.firstIndex()),
                        V = (0, s.ensureNotNull)(x.lastIndex()),
                        M = T - Math.max(0, -m),
                        R = V + Math.max(0, v),
                        A = Math.max(g, M),
                        L = Math.min(S, R),
                        B = this._studyValuesCache,
                        O = this._colorValuesCache;
                    B.invalidateCache(), O.invalidateCache();
                    const D = A - v,
                        k = x.rangeIterator(D, L - m);
                    let N;
                    for (B.setStartIndex(D), O.setStartIndex(D); k.hasNext();) {
                        const e = k.next(),
                            t = e.index,
                            i = e.value,
                            r = i[w],
                            n = i[P],
                            o = t + f,
                            l = t + y;
                        if (o === l && B.isValidIndex(o)) {
                            const e = B.at(o);
                            e.plot1Value = r, e.plot2Value = n
                        } else {
                            if (B.isValidIndex(o)) {
                                B.at(o).plot1Value = r
                            }
                            if (B.isValidIndex(l)) {
                                B.at(l).plot2Value = n
                            }
                        }
                        if (null !== b && void 0 !== N) {
                            const e = N + m;
                            if (B.isValidIndex(e)) {
                                const t = B.at(e),
                                    r = (0, s.ensureNotNull)(this._colorPlotIndex);
                                if (0 === r.type) {
                                    const s = O.at(e);
                                    t.colorValue = s, s.type = 0, s.colorIndexOrRgba = i[r.colorIndexOrRgba + 1]
                                } else {
                                    const s = O.at(e);
                                    t.colorValue = s, s.colorIndexOrRgba1 = void 0 === r.colorIndexOrRgba1 ? void 0 : i[r.colorIndexOrRgba1 + 1], s.colorIndexOrRgba2 = void 0 === r.colorIndexOrRgba2 ? void 0 : i[r.colorIndexOrRgba2 + 1], s.value1 = void 0 === r.valueIndex1 ? void 0 : i[r.valueIndex1 + 1], s.value2 = void 0 === r.valueIndex2 ? void 0 : i[r.valueIndex2 + 1]
                                }
                            }
                        }
                        N = t
                    }
                    const E = this._timePoints,
                        F = this._points1,
                        W = this._points2;
                    let H = null;
                    const z = D + B.length();
                    for (let i = D; i < z; i++) {
                        if (!this._fillGaps && (null === C || null === I)) {
                            const e = i - 1;
                            E.push(e), F.push(NaN), W.push(NaN), null == b || b.push(null)
                        }
                        const s = B.at(i);
                        if (null !== this._colorPlotIndex) {
                            const e = s.colorValue;
                            void 0 === e || 0 === e.type && null == e.colorIndexOrRgba || 1 === e.type && (void 0 !== this._colorPlotIndex.valueIndex1 && null == e.value1 || void 0 !== this._colorPlotIndex.valueIndex2 && null == e.value2) ? H = null : (H = this._getColorByPlotValue(e), null !== H && (1 === H.type ? (H.value1 = u(H.value1), H.value2 = u(H.value2), H.color1 = H.color1 && p(H.color1), H.color2 = H.color2 && p(H.color2)) : H.color = p(H.color)))
                        }
                        if (this._isHlineFill) {
                            E.push(i), null !== b && b.push(H);
                            continue
                        }
                        const r = null !== (e = s.plot1Value) && void 0 !== e ? e : null,
                            n = null !== (t = s.plot2Value) && void 0 !== t ? t : null;
                        (null !== r || null !== n || Number.isFinite(C) || Number.isFinite(I)) && (C = r, I = n, F.push(r), W.push(n), E.push(i), null !== b && b.push(H))
                    }
                    i.pricesArrayToCoordinates(F.data(), a, F.length()), i.pricesArrayToCoordinates(W.data(), a, W.length()), l.indexesToCoordinates(E.data(), E.length());
                    const U = {
                        barSpacing: this._model.timeScale().barSpacing(),
                        colorAreas: this._getFilledAreas(E, F, W, b, u, p)
                    };
                    this._areaRenderer.setData(U)
                }
                _getFilledAreas(e, t, i, s, r, n) {
                    var o, h;
                    const u = this._isHlineFill;
                    if (!u && (0 === t.length() || 0 === i.length())) return new a;
                    const p = this._colorAreas;
                    let f = null,
                        y = null;
                    const m = {
                            type: 0,
                            color: ""
                        },
                        v = this._commonColor();
                    1 === v.type ? (v.value1 = r(v.value1), v.value2 = r(v.value2), v.color1 = v.color1 && n(v.color1), v.color2 = v.color2 && n(v.color2)) : v.color = n(v.color);
                    const g = e.length();
                    for (let r = 0; r < g; r++) {
                        const n = u ? this._level1 : t.at(r),
                            a = u ? this._level2 : i.at(r),
                            w = e.at(r),
                            P = (0, c.coordinateIsValid)(n),
                            x = (0, c.coordinateIsValid)(a);
                        if (this._fillGaps ? P || x : P && x) {
                            const e = s ? s.at(r) || m : v;
                            if (b = e, !(null === (S = y) || null === b ? S === b : 0 === S.type && 0 === b.type ? S.color === b.color : 1 === S.type && 1 === b.type && S.color1 === b.color1 && S.color2 === b.color2 && S.value1 === b.value1 && S.value2 === b.value2) || null === f) {
                                if (null !== f && (P && f.addPoints1Point(w, n), x && f.addPoints2Point(w, a)), r === g - 1) continue;
                                y = e;
                                const t = _(e),
                                    i = null !== (o = p.get(t)) && void 0 !== o ? o : new l(e);
                                f = null !== (h = i.newItem()) && void 0 !== h ? h : new d, i.push(f), p.set(t, i)
                            }
                            P && f.addPoints1Point(w, n), x && f.addPoints2Point(w, a)
                        } else this._fillGaps || (y = null, f = null)
                    }
                    var S, b;
                    return p.delete(_(m)), p
                }
            }
        },
        224186: (e, t, i) => {
            i.d(t, {
                AreaBackgroundPaneView: () => o
            });
            var s = i(650151),
                r = i(43329),
                n = i(43239);
            class o extends n.AbstractFilledAreaPaneView {
                constructor(e, t) {
                    super(e, t)
                }
                _plotAId() {
                    return (0, s.ensureDefined)(this._source.metaInfo().area)[0].name
                }
                _plotBId() {
                    return (0, s.ensureDefined)(this._source.metaInfo().area)[1].name
                }
                _commonColor() {
                    return {
                        type: 0,
                        color: this._source.properties().areaBackground.backgroundColor.value()
                    }
                }
                _transparency() {
                    const e = this._source.properties().areaBackground.transparency.value();
                    return (0, r.clamp)(e, 0, 100)
                }
                _visible() {
                    return this._source.properties().areaBackground.fillBackground.value()
                }
                _getColorByPlotValue(e) {
                    return this._commonColor()
                }
            }
        },
        547465: (e, t, i) => {
            i.d(t, {
                DwgLabelPaneViewConstants: () => s,
                calculateLabelHeight: () => o,
                calculateDwgLabelsMargins: () => l
            });
            var s, r = i(519872),
                n = i(650883);

            function o(e, t, i) {
                let s = i;
                switch (t) {
                    case r.PlotSymbolSize.Tiny:
                        s = .6 * e;
                        break;
                    case r.PlotSymbolSize.Small:
                        s = .8 * e;
                        break;
                    case r.PlotSymbolSize.Normal:
                        s = e;
                        break;
                    case r.PlotSymbolSize.Large:
                        s = 1.5 * e;
                        break;
                    case r.PlotSymbolSize.Huge:
                        s = 2 * e
                }
                return s
            }

            function l(e, t, i) {
                const r = e.model().timeScale().barSpacing(),
                    l = Math.round(r * s.AUTO_SIZE_MULT),
                    a = o(s.NORMAL_SIZE, t.size, l) * s.SHAPE_HEIGHT_MULT;
                switch (t.style) {
                    case n.DwgLabelStyle.LabelUp:
                    case n.DwgLabelStyle.LabelLeftUp:
                    case n.DwgLabelStyle.LabelRightUp:
                        return {
                            bottomPixelMargin: a,
                            topPixelMargin: 0
                        };
                    case n.DwgLabelStyle.LabelDown:
                    case n.DwgLabelStyle.LabelLeftDown:
                    case n.DwgLabelStyle.LabelRightDown:
                        return {
                            bottomPixelMargin: 0,
                            topPixelMargin: a
                        };
                    case n.DwgLabelStyle.LabelLeft:
                    case n.DwgLabelStyle.LabelRight:
                    case n.DwgLabelStyle.LabelCenter:
                        return {
                            bottomPixelMargin: .5 * a,
                            topPixelMargin: .5 * a
                        }
                }
                return {
                    bottomPixelMargin: 0,
                    topPixelMargin: 0
                }
            }! function(e) {
                e.NORMAL_SIZE = 50, e.AUTO_SIZE_MULT = 1, e.SHAPE_HEIGHT_MULT = .5, e.SHAPE_WIDTH_MULT = .6, e.FONT_SIZE_MULT = .24
            }(s || (s = {}))
        },
        231639: (e, t, i) => {
            i.d(t, {
                LiveStudyGraphics: () => o.LiveStudyGraphics,
                createGraphicsPaneViews: () => _,
                createGraphicsPriceAxisViews: () => f,
                emptyStudyGraphics: () => n.emptyStudyGraphics,
                isStudyGraphicsEmpty: () => r.isStudyGraphicsEmpty,
                loadStudyGraphics: () => n.loadStudyGraphics,
                saveStudyGraphics: () => n.saveStudyGraphics
            });
            var s = i(272001),
                r = i(186731),
                n = i(529327),
                o = i(3801),
                l = i(841404),
                a = i(114123);
            class d extends l.PriceAxisView {
                constructor(e, t) {
                    super(), this._source = e, this._data = t
                }
                _updateRendererData(e, t, i) {
                    var s, r;
                    e.visible = !1;
                    const n = this._source.priceScale(),
                        o = this._source.properties().childs(),
                        l = o.visible.value();
                    if (!n || n.isEmpty() || !l) return;
                    const d = null === (r = null === (s = o.graphics.childs()[this._data.lineType]) || void 0 === s ? void 0 : s.childs()[this._data.styleId]) || void 0 === r ? void 0 : r.childs();
                    if (!(void 0 !== d && d.visible && d.visible.value() && d.showPrice && d.showPrice.value() && this._isLabelVisibleAccordinglyToProperties())) return;
                    const h = this._source.firstValue();
                    if (null === h) return;
                    const u = this._data.line.level,
                        c = (0, a.resetTransparency)(d.color.value());
                    i.background = c, i.textColor = this.generateTextColor(c), i.coordinate = n.priceToCoordinate(u, h), e.text = n.formatPrice(u, h, !0), e.visible = !0
                }
                _isLabelVisibleAccordinglyToProperties() {
                    const e = this._source.model().properties().childs().scalesProperties.childs();
                    return (e.showStudyLastValue.value() || e.showFundamentalLastValue.value()) && this._source.properties().childs().showLabelsOnPriceScale.value()
                }
            }
            const h = (0, s.getLogger)("Chart.StudyGraphics"),
                u = new Set(["dwgtablecells"]);
            async function c(e, t, s, r) {
                switch (e) {
                    case "hlines":
                        return new((await Promise.all([i.e(81679), i.e(20507)]).then(i.bind(i, 298258))).LevelPaneView)(t, s, r);
                    case "lines":
                        return new((await Promise.all([i.e(81679), i.e(20507)]).then(i.bind(i, 684607))).LinePaneView)(t, s, r);
                    case "shapemarks":
                        return new((await Promise.all([i.e(81679), i.e(20507)]).then(i.bind(i, 700327))).ShapeMarkPaneView)(t, s, r);
                    case "textmarks":
                        return new((await Promise.all([i.e(81679), i.e(20507)]).then(i.bind(i, 514331))).TextMarkPaneView)(t, s, r);
                    case "trendchannels":
                        return new((await Promise.all([i.e(81679), i.e(20507)]).then(i.bind(i, 482268))).TrendChannelPaneView)(t, s, r);
                    case "dwglabels":
                        return new((await Promise.all([i.e(81679), i.e(20507)]).then(i.bind(i, 953617))).DwgLabelPaneView)(t, s, r);
                    case "dwglines":
                        return new((await Promise.all([i.e(81679), i.e(20507)]).then(i.bind(i, 939692))).DwgLinePaneView)(t, s, r);
                    case "dwgboxes":
                        return new((await Promise.all([i.e(81679), i.e(20507)]).then(i.bind(i, 938783))).DwgBoxPaneView)(t, s, r);
                    case "dwgtables":
                        return new((await Promise.all([i.e(81679), i.e(20507)]).then(i.bind(i, 450208))).DwgTablePaneView)(t, s, r);
                    case "dwglinefills":
                        return new((await Promise.all([i.e(81679), i.e(20507)]).then(i.bind(i, 354822))).DwgLineFillPaneView)(t, s, r)
                }
                switch (e) {
                    case "hhists":
                        return new((await Promise.all([i.e(81679), i.e(20507)]).then(i.bind(i, 327514))).HHistPaneView)(t, s, r);
                    case "horizlines":
                        return new((await Promise.all([i.e(81679), i.e(20507)]).then(i.bind(i, 491810))).HorizLinePaneView)(t, s, r);
                    case "vertlines":
                        return new((await Promise.all([i.e(81679), i.e(20507)]).then(i.bind(i, 331860))).VertLinePaneView)(t, s, r);
                    case "polygons":
                        return new((await Promise.all([i.e(81679), i.e(20507)]).then(i.bind(i, 860940))).PolygonPaneView)(t, s, r);
                    case "backgrounds":
                        return new((await Promise.all([i.e(81679), i.e(20507)]).then(i.bind(i, 319942))).BackgroundPaneView)(t, s, r)
                }
                return null
            }
            async function _(e, t, i) {
                const s = [],
                    r = Object.keys(e.graphicsInfo());
                r.sort(((e, t) => p(e) - p(t)));
                for (const n of r) {
                    const r = await c(n, e, t, i);
                    null !== r ? s.push(r) : u.has(n) || h.logWarn(`${n} is not supported by this build of graphics subsystem, skipping`)
                }
                return s
            }

            function p(e) {
                var t;
                return null !== (t = r.primitivesZOrders.get(e)) && void 0 !== t ? t : 0
            }

            function f(e) {
                const t = Object.keys(e.graphicsInfo()),
                    i = [];
                for (const s of t) switch (s) {
                    case "hlines":
                        e.graphics().hlines().forEach(((t, r) => {
                            t.forEach((t => {
                                void 0 !== t.level && i.push(new d(e, {
                                    line: {
                                        level: t.level
                                    },
                                    styleId: r,
                                    lineType: s
                                }))
                            }))
                        }));
                        break;
                    case "horizlines":
                        e.graphics().horizlines().forEach(((t, r) => {
                            t.forEach((t => {
                                void 0 !== t.level && i.push(new d(e, {
                                    line: {
                                        level: t.level
                                    },
                                    styleId: r,
                                    lineType: s
                                }))
                            }))
                        }))
                }
                return i
            }
        },
        621803: (e, t, i) => {
            i.d(t, {
                HHistBasedValuesProvider: () => p
            });
            var s = i(150335),
                r = i(650151),
                n = i(638456),
                o = i(812363),
                l = i(480071),
                a = i(738023),
                d = i(406146),
                h = i(414805),
                u = i(943546);

            function c(e, t = "", i = "") {
                return {
                    id: t,
                    index: e,
                    title: i,
                    value: "",
                    visible: !1
                }
            }
            const _ = n.CheckMobile.any();
            class p {
                constructor(e, t) {
                    this._emptyValues = [], this._study = e, this._model = t, void 0 !== this._study.metaInfo().graphics.hhists && this._emptyValues.push(c(0), c(1), c(2))
                }
                getItems() {
                    return this._emptyValues
                }
                getValues(e) {
                    var t, i;
                    const n = this._emptyValues.map((e => ({ ...e
                    })));
                    n.forEach((e => {
                        e.visible = this._study.isVisible(), e.value = u.notAvailable
                    }));
                    const l = this._study.properties().childs().inputs.childs().volume.value();
                    switch (l) {
                        case d.HHistVolumeMode.UpDown:
                            n[0].title = "Up", n[1].title = "Down", n[2].title = "Total";
                            break;
                        case d.HHistVolumeMode.Total:
                            n[0].title = "Total", n[1].visible = !1, n[2].visible = !1;
                            break;
                        case d.HHistVolumeMode.Delta:
                            n[0].title = "Delta", n[1].title = "Max(Up, Down)", n[2].title = "Total"
                    }
                    const h = this._study.priceScale(),
                        c = this._model.timeScale();
                    if (null === h || h.isEmpty() || c.isEmpty() || this._hideValues()) return n;
                    if (null === e || !isFinite(e)) {
                        const t = this._study.data().last();
                        if (null === t) return n;
                        e = t.index
                    }
                    const _ = this._model.crossHairSource(),
                        p = _.price;
                    if (!isFinite(_.y) && (e = function(e, t) {
                            var i;
                            const s = null === (i = e.visibleBarsStrictRange()) || void 0 === i ? void 0 : i.lastBar();
                            if (!s) return null;
                            const r = t.data().search(s, o.PlotRowSearchMode.NearestLeft);
                            return r ? r.index : null
                        }(this._model.timeScale(), this._model.mainSeries()), null === e)) return n;
                    const f = function(e, t, i, s) {
                        if (0 === e.size) return null;
                        if (!i) {
                            const e = (0, r.ensureNotNull)(s.data().valueAt(t));
                            i = s.barFunction()(e)
                        }
                        const n = function(e, t) {
                            let i = null;
                            return e.forEach(((e, s) => {
                                s <= t && (null === i || s > i) && (i = s)
                            })), i
                        }(e, t);
                        if (null === n) return null;
                        const o = e.get(n);
                        if (!o || 0 === o.size) return null;
                        return function(e, t) {
                            let i = null;
                            return e.forEach((e => {
                                e.priceLow <= t && t < e.priceHigh && (i = e)
                            })), i
                        }(o, i)
                    }(this._study.graphics().hhistsByTimePointIndex(), e, p, this._model.mainSeries());
                    if (null === f) return n.forEach((e => {
                        e.value = "0"
                    })), n;
                    const y = this._study.metaInfo().graphics.hhists;
                    if (void 0 === y) return n;
                    if (void 0 === y[f.styleId]) return n;
                    const m = null === (i = null === (t = this._study.properties().childs().graphics.childs().hhists) || void 0 === t ? void 0 : t.childs()[f.styleId]) || void 0 === i ? void 0 : i.childs(),
                        v = new a.VolumeFormatter,
                        g = e => (0, s.isNumber)(e) ? v.format(e) : "";
                    if (l !== d.HHistVolumeMode.Delta) {
                        if (f.rate.forEach(((e, t) => {
                                n[t].value = g(e), n[t].color = (0, r.ensureDefined)(m).colors[t].value()
                            })), l === d.HHistVolumeMode.UpDown) {
                            const e = f.rate[0] + f.rate[1];
                            n[2].value = g(e), n[2].color = (0, r.ensureDefined)(m).valuesColor.value()
                        }
                    } else {
                        const e = f.rate[0] > f.rate[1] ? 0 : 1,
                            t = (0, r.ensureDefined)(m).colors[e].value(),
                            i = f.rate[0] + f.rate[1];
                        [2 * f.rate[e] - i, f.rate[e], i].forEach(((e, i) => {
                            n[i].value = g(e), n[i].color = t
                        }))
                    }
                    return n
                }
                _hideValues() {
                    return _ && (null === this._model.crossHairSource().pane || (0, h.isLineToolName)(l.tool.value()) || null !== this._model.lineBeingEdited())
                }
            }
        },
        200821: (e, t, i) => {
            i.d(t, {
                makeNextSymbolId: () => r,
                makeNextStudyId: () => o
            });
            let s = 0;

            function r() {
                return s++, "ss_" + s
            }
            let n = 0;

            function o() {
                return n++, "st" + n
            }
        },
        394683: (e, t, i) => {
            function s(e) {
                e.lineWidth = void 0, e.lineStyle = void 0;
                for (let t = 0; t < e.colors.length; t++) e.colors[t] = void 0;
                return e
            }

            function r() {
                return {
                    colors: [void 0, void 0, void 0, void 0, void 0, void 0, void 0],
                    lineWidth: void 0,
                    lineStyle: void 0
                }
            }
            i.d(t, {
                clearStyle: () => s,
                createEmptyStyle: () => r
            })
        },
        910008: (e, t, i) => {
            i.d(t, {
                PaneRendererColumns: () => r
            });
            var s = i(858063);
            class r {
                constructor(e) {
                    this._data = null, this._precalculatedCache = [], this.setData(e)
                }
                setData(e) {
                    this._data = e, this._precalculatedCache = []
                }
                draw(e, t) {
                    var i, s, r, n;
                    if (null === this._data || 0 === this._data.items.length) return;
                    const o = t.pixelRatio;
                    this._precalculatedCache.length || this._fillPrecalculatedCache(o);
                    const l = Math.max(1, Math.floor(o)),
                        a = Math.round(this._data.histogramBase * o) - Math.floor(l / 2),
                        d = a + l,
                        h = this._data.lineColor,
                        u = null !== (s = null === (i = this._data.visibleItemsRange) || void 0 === i ? void 0 : i.startItemIndex) && void 0 !== s ? s : 0,
                        c = (null !== (n = null === (r = this._data.visibleItemsRange) || void 0 === r ? void 0 : r.endItemIndex) && void 0 !== n ? n : this._data.items.length) - 1;
                    for (let t = u; t <= c; t++) {
                        const i = this._data.items[t],
                            s = this._precalculatedCache[t - u],
                            r = Math.round(i.y * o),
                            n = i.style ? i.style.color : h;
                        let c, _;
                        e.fillStyle = n, r <= a ? (c = r,
                            _ = d) : (c = a, _ = r - Math.floor(l / 2) + l), e.fillRect(s.left, c, s.right - s.left + 1, _ - c)
                    }
                }
                hitTest(e) {
                    var t, i, r, n;
                    if (null === this._data) return null;
                    const o = .5 * this._data.barSpacing,
                        l = e.x - o,
                        a = e.x + o,
                        d = null !== (i = null === (t = this._data.visibleItemsRange) || void 0 === t ? void 0 : t.startItemIndex) && void 0 !== i ? i : 0,
                        h = (null !== (n = null === (r = this._data.visibleItemsRange) || void 0 === r ? void 0 : r.endItemIndex) && void 0 !== n ? n : this._data.items.length) - 1;
                    for (let t = d; t <= h; t++) {
                        const i = this._data.items[t],
                            r = i.x;
                        if (r >= l && r <= a) {
                            const t = i.y;
                            if (e.y >= Math.min(t, this._data.histogramBase) && e.y <= Math.max(t, this._data.histogramBase)) return new s.HitTestResult(s.HitTestResult.REGULAR)
                        }
                    }
                    return null
                }
                _fillPrecalculatedCache(e) {
                    var t, i, s, r;
                    if (null === this._data || 0 === this._data.items.length) return void(this._precalculatedCache = []);
                    const n = Math.ceil(this._data.barSpacing * e) <= 1 ? 0 : Math.max(1, Math.floor(e)),
                        o = Math.round(this._data.barSpacing * e) - n,
                        l = null !== (i = null === (t = this._data.visibleItemsRange) || void 0 === t ? void 0 : t.startItemIndex) && void 0 !== i ? i : 0,
                        a = (null !== (r = null === (s = this._data.visibleItemsRange) || void 0 === s ? void 0 : s.endItemIndex) && void 0 !== r ? r : this._data.items.length) - 1,
                        d = a - l + 1;
                    if (d <= 0) return void(this._precalculatedCache = []);
                    this._precalculatedCache = new Array(d);
                    for (let t = l; t <= a; t++) {
                        const i = this._data.items[t],
                            s = Math.round(i.x * e);
                        let r, n;
                        if (o % 2) {
                            const e = (o - 1) / 2;
                            r = s - e, n = s + e
                        } else {
                            const e = o / 2;
                            r = s - e, n = s + e - 1
                        }
                        this._precalculatedCache[t - l] = {
                            left: r,
                            right: n,
                            roundedCenter: s,
                            center: i.x * e,
                            time: i.timePointIndex
                        }
                    }
                    for (let e = l + 1; e <= a; e++) {
                        const t = this._precalculatedCache[e - l],
                            i = this._precalculatedCache[e - l - 1];
                        t.time === i.time + 1 && (t.left - i.right !== n + 1 && (i.roundedCenter > i.center ? i.right = t.left - n - 1 : t.left = i.right + n + 1))
                    }
                    let h = Math.ceil(this._data.barSpacing * e);
                    for (let e = l + 1; e <= a; e++) {
                        const t = this._precalculatedCache[e - l];
                        t.right < t.left && (t.right = t.left);
                        const i = t.right - t.left + 1;
                        h = Math.min(i, h)
                    }
                    if (n > 0 && h < 4)
                        for (let e = l + 1; e <= a; e++) {
                            const t = this._precalculatedCache[e - l];
                            t.right - t.left + 1 > h && (t.roundedCenter > t.center ? t.right -= 1 : t.left += 1)
                        }
                }
            }
        },
        517220: (e, t, i) => {
            i.d(t, {
                StudyPlotPaneView: () => k
            });
            var s = i(650151),
                r = i(86441),
                n = i(724377),
                o = i(495046),
                l = i(43329),
                a = i(758337),
                d = i(114123),
                h = i(835343),
                u = i(615494),
                c = i(858063),
                _ = i(906778),
                p = i(28035),
                f = i(943498),
                y = i(764372),
                m = i(847314),
                v = i(583110),
                g = i(394683),
                S = i(386482),
                b = i(837291),
                w = i(638456);
            class P {
                constructor(e) {
                    this._data = e
                }
                draw(e, t) {
                    var i, s, r, n;
                    const o = this._data,
                        l = t.pixelRatio,
                        d = Math.max(1, Math.floor(l)) % 2 ? .5 : 0,
                        h = o.vertOffset || 0,
                        u = o.lineColor || o.color,
                        c = o.lineWidth || o.height / 2;
                    let _ = "",
                        p = !1;
                    const f = null !== (s = null === (i = o.visibleItemsRange) || void 0 === i ? void 0 : i.startItemIndex) && void 0 !== s ? s : 0,
                        y = null !== (n = null === (r = o.visibleItemsRange) || void 0 === r ? void 0 : r.endItemIndex) && void 0 !== n ? n : o.items.length;
                    for (let t = f; t < y; t++) {
                        const i = o.items[t],
                            s = i.x,
                            r = i.y + h;
                        if ((0, a.isNaN)(s) || (0, a.isNaN)(r)) continue;
                        let n, f;
                        null != i.style ? (n = i.style.color, f = i.style.width) : (n = u, f = c), (n !== _ || w.isSafari) && (_ = n, p && e.fill(), e.beginPath(), e.fillStyle = n);
                        const y = Math.round(s * l) + d,
                            m = Math.round(r * l) + d,
                            v = Math.round(f * l) + d;
                        e.moveTo(y + v, m), e.arc(y, m, v, 0, 2 * Math.PI, !1), p = !0
                    }
                    p && e.fill()
                }
                hitTest(e) {
                    var t, i, s, n;
                    const o = this._data,
                        l = o.lineWidth || o.height / 2,
                        a = o.vertOffset || 0,
                        d = (0, b.interactionTolerance)().series + l,
                        h = null !== (i = null === (t = o.visibleItemsRange) || void 0 === t ? void 0 : t.startItemIndex) && void 0 !== i ? i : 0,
                        u = null !== (n = null === (s = o.visibleItemsRange) || void 0 === s ? void 0 : s.endItemIndex) && void 0 !== n ? n : o.items.length;
                    for (let t = h; t < u; t++) {
                        const i = o.items[t];
                        if (new r.Point(i.x, i.y + a).subtract(e).length() + l <= d) return new c.HitTestResult(c.HitTestResult.REGULAR)
                    }
                    return null
                }
            }
            var x = i(910008),
                C = i(204652);
            class I {
                constructor(e) {
                    this._data = e
                }
                draw(e, t) {
                    var i, s, r, n, o, l, d, h;
                    const u = t.pixelRatio;
                    let c = "",
                        _ = !1;
                    const p = null !== (s = null === (i = this._data.visibleItemsRange) || void 0 === i ? void 0 : i.startItemIndex) && void 0 !== s ? s : 0,
                        f = (null !== (n = null === (r = this._data.visibleItemsRange) || void 0 === r ? void 0 : r.endItemIndex) && void 0 !== n ? n : this._data.items.length) - 1;
                    for (let t = p; t <= f; t++) {
                        const i = this._data.items[t];
                        if ((0, a.isNaN)(i.x) || (0, a.isNaN)(i.y)) continue;
                        const s = null !== (l = null === (o = i.style) || void 0 === o ? void 0 : o.color) && void 0 !== l ? l : this._data.lineColor,
                            r = Math.max(1, Math.floor((null !== (h = null === (d = i.style) || void 0 === d ? void 0 : d.width) && void 0 !== h ? h : this._data.lineWidth) * u));
                        (s !== c || w.isSafari) && (c = s, _ && e.fill(), e.beginPath(), e.fillStyle = s);
                        let n = 3 * r;
                        n % 2 != r % 2 && (n += 1);
                        const p = Math.round(Math.round(i.x * u) - n / 2),
                            f = Math.round(Math.round(i.y * u) - n / 2),
                            y = p + Math.floor(n / 2 - r / 2),
                            m = f + Math.floor(n / 2 - r / 2);
                        e.rect(p, m, n, r), e.rect(y, f, r, n), _ = !0
                    }
                    _ && e.fill()
                }
                hitTest(e) {
                    const t = (0, b.interactionTolerance)().series + this._data.lineWidth / 2;
                    let i, s, n, o;
                    for (let l = 1; l < this._data.items.length; ++l) {
                        i = this._data.items[l - 1], s = this._data.items[l], n = i.x, o = s.x;
                        if ((0, C.distanceToSegment)(new r.Point(n, i.y), new r.Point(o, s.y), new r.Point(e.x, e.y)).distance <= t) return new c.HitTestResult(c.HitTestResult.REGULAR)
                    }
                    return null
                }
            }
            class T {
                constructor(e) {
                    this._data = e
                }
                draw(e, t) {
                    var i, s, r, n;
                    if (0 === this._data.items.length) return;
                    const o = t.pixelRatio;
                    e.fillStyle = this._data.lineColor;
                    const l = Math.max(1, Math.floor(this._data.lineWidth * o)),
                        a = l / 2,
                        d = Math.max(1, Math.floor(o)),
                        h = Math.round(this._data.histogramBase * o) - Math.floor(d / 2),
                        u = h + d,
                        c = null !== (s = null === (i = this._data.visibleItemsRange) || void 0 === i ? void 0 : i.startItemIndex) && void 0 !== s ? s : 0,
                        _ = (null !== (n = null === (r = this._data.visibleItemsRange) || void 0 === r ? void 0 : r.endItemIndex) && void 0 !== n ? n : this._data.items.length) - 1;
                    for (let t = c; t <= _; t++) {
                        const i = this._data.items[t];
                        let s = l,
                            r = a;
                        i.style ? (e.fillStyle = i.style.color, s = Math.max(1, Math.floor(i.style.width * o)), r = s / 2) : e.fillStyle = this._data.lineColor;
                        const n = s % 2 ? .5 : 0,
                            c = Math.round(i.x * o) + n,
                            _ = Math.round(i.y * o);
                        let p, f;
                        _ <= h ? (p = _, f = u) : (p = h, f = _ - Math.floor(d / 2) + d), e.fillRect(Math.floor(c - r), p, s, f - p)
                    }
                }
                hitTest(e) {
                    const t = (0, b.interactionTolerance)().series + this._data.lineWidth / 2,
                        i = new Map;
                    for (const n of this._data.items) {
                        const o = n.x,
                            l = n.y;
                        let a = t;
                        n.style && (i.has(n.style.width) ? a = (0, s.ensureDefined)(i.get(n.style.width)) : i.set(this._data.lineWidth, a));
                        if ((0, C.distanceToSegment)(new r.Point(o, l), new r.Point(o, this._data.histogramBase), new r.Point(e.x, e.y)).distance <= a) return new c.HitTestResult(c.HitTestResult.REGULAR)
                    }
                    return null
                }
            }
            var V = i(519872),
                M = i(755695),
                R = i(923195),
                A = i(812363);
            const L = e => {
                    const t = (0, n.rgbToHsl)((0, n.parseRgb)(e)),
                        i = t[0] + .05;
                    return t[0] = i - Math.floor(i), (0, n.rgbToHexString)((0, n.hslToRgb)(t))
                },
                B = (0, u.memoize)(L);

            function O(e, t) {
                if (null === e) return t;
                const i = e.firstIndex,
                    s = t.firstIndex,
                    r = e.clearData || t.clearData;
                return {
                    firstIndex: r || void 0 === i || void 0 === s ? void 0 : Math.min(i, s),
                    clearData: r
                }
            }
            const D = new Set([V.LineStudyPlotStyle.Line, V.LineStudyPlotStyle.Area, V.LineStudyPlotStyle.Circles, V.LineStudyPlotStyle.Cross, V.LineStudyPlotStyle.StepLine, V.LineStudyPlotStyle.StepLineWithDiamonds]);
            class k {
                constructor(e, t, i, s, r = !1) {
                    this._histogramBase = null, this._items = [], this._lastConfirmedSeriesBarCoordinate = NaN, this._selectionData = null, this._lineColor = "", this._lineWidth = 1, this._color1 = "", this._color2 = "", this._dataInvalidated = null, this._viewportInvalidated = !1, this._renderer = new p.CompositeRenderer, this._isMarkersEnabled = o.enabled("source_selection_markers"), this._study = e, this._series = t, this._model = i, this._plotName = s, this._plotIndex = e.metaInfo().plots.findIndex((e => e.id === s)), this._colorProvider = (0, M.createStudyPlotColorProvider)(e.metaInfo(), e.properties(), s), this._selectionIndexer = new m.SelectionIndexes(i.timeScale()), this._extendStepLineToBarsEndings = r, this._useFirstUnplottableRow = (0, S.isFundamentalStudyMetaInfo)(e.metaInfo())
                }
                items() {
                    return this._items
                }
                update(e) {
                    if ("global-change" === e.type) return this._dataInvalidated = O(this._dataInvalidated, {}), void(this._viewportInvalidated = !0);
                    if ("data-source-change" !== e.type) this._viewportInvalidated = !0;
                    else {
                        if (e.sourceId === this._study.id()) {
                            const t = O(this._dataInvalidated, {
                                firstIndex: e.firstUpdatedTimePointIndex,
                                clearData: e.clearData
                            });
                            this._dataInvalidated = t
                        }
                    }
                }
                renderer() {
                    return this._dataInvalidated ? this._updateImplFull(this._viewportInvalidated) && (this._dataInvalidated = null) : this._viewportInvalidated && this._updateImplLight(), this._viewportInvalidated = !1, this._renderer
                }
                _getTranspValue() {
                    const e = this._study.properties(),
                        t = e.styles[this._plotName];
                    let i = 0;
                    const s = this._study.metaInfo();
                    return "Volume@tv-basicstudies" === s.id && s.version <= 46 && "transparency" in e ? (i = e.transparency.value(), i = (0, a.isNumber)(i) ? i : 0, i) : (t.transparency && (i = t.transparency.value(), i = (0, a.isNumber)(i) ? i : 0), i)
                }
                _updateImplFull(e) {
                    var t, i, n, o, a;
                    if (this._renderer.clear(), (null === (t = this._dataInvalidated) || void 0 === t ? void 0 : t.clearData) && (this._items = []), !this._study.isPlotVisibleAt(this._plotName, 1)) return !1;
                    if (!this._study.priceScale()) return !1;
                    const h = this._study.firstValue();
                    if (null === h) return !1;
                    const u = this._study.priceScale();
                    if (null === u) return !1;
                    this._histogramBase = null;
                    const c = this._study.properties().styles[this._plotName],
                        _ = (0, s.ensureDefined)(null === (i = this._study.metaInfo().styles) || void 0 === i ? void 0 : i[this._plotName]),
                        p = c.plottype.value(),
                        f = this._useFirstUnplottableRow && (p === V.LineStudyPlotStyle.StepLine || p === V.LineStudyPlotStyle.StepLineWithDiamonds),
                        y = this._study.data().plottableRange(f),
                        m = y.size();
                    if (0 === m) return !1;
                    const v = this._study.offset(this._plotName);
                    let S = null === (n = this._dataInvalidated) || void 0 === n ? void 0 : n.firstIndex;
                    const b = D.has(p);
                    if (m !== this._items.length) {
                        const e = void 0 !== S ? S + v : void 0;
                        if (void 0 === e || 0 === this._items.length || e < (0, s.ensureDefined)(this._items[0].timePointIndex)) this._items = [], y.each(((e, t) => {
                            const i = t[this._plotIndex + 1];
                            if (b && null == i) return !1;
                            const s = new r.Point(NaN, NaN);
                            return s.origPrices = new r.Point(NaN, NaN), s.timePointIndex = e + v, this._items.push(s), !1
                        })), S = this._items.length ? (0, s.ensureDefined)(this._items[0].timePointIndex) - v : void 0;
                        else {
                            const e = this._items[this._items.length - 1].timePointIndex,
                                t = (0, s.ensureDefined)(e) - v,
                                i = (0, s.ensureNotNull)(y.lastIndex()) + 1,
                                n = y.rangeIterator(t + 1, i);
                            for (; n.hasNext();) {
                                const e = n.next(),
                                    t = e.value[this._plotIndex + 1],
                                    i = null == t;
                                if (b && i) continue;
                                const s = new r.Point(NaN, NaN);
                                s.origPrices = new r.Point(NaN, NaN), s.timePointIndex = e.index + v, this._items.push(s)
                            }
                        }
                    }
                    let w = NaN,
                        P = NaN;
                    const x = new Map,
                        C = (e, t) => {
                            let i = x.get(e);
                            void 0 === i && (i = new Map, x.set(e, i));
                            let s = i.get(t);
                            if (void 0 === s) {
                                const r = !this._plotName || "vol" !== this._plotName;
                                s = (0, d.generateColor)(e, t, r), i.set(t, s)
                            }
                            return s
                        },
                        I = (0, g.createEmptyStyle)(),
                        T = (0, l.clamp)(this._getTranspValue(), 0, 100),
                        M = this._model.timeScale().visibleBarsStrictRange();
                    if (null === M) return !1;
                    const {
                        startBar: A,
                        endBar: L
                    } = this._calculateStartEnd(M);
                    if (null === A || null === L || 0 === this._items.length) return !1;
                    const B = null != S ? S : (0, s.ensureNotNull)(y.firstIndex()),
                        O = y.rangeIterator(B, (0, s.ensureNotNull)(y.lastIndex()) + 1),
                        k = (0, R.lowerbound)(this._items, B + v, ((e, t) => e.timePointIndex < t));
                    let N = k;
                    for (; O.hasNext();) {
                        const e = O.next();
                        let t = e.index;
                        const i = e.value;
                        t += v, t = Math.floor(t);
                        let n = i[this._plotIndex + 1];
                        const l = null == n;
                        if (n = l ? NaN : n, b && l) {
                            P = n;
                            continue
                        }
                        const h = new r.Point(t, (0, s.ensure)(n));
                        h.timePointIndex = t, h.valIsNotSameAsPrev = n !== P || t - 1 !== w;
                        if (this._colorProvider.isColorDefined() && (h.style = {
                                color: C(c.color.value(), 100),
                                width: c.linewidth.value(),
                                style: c.linestyle.value()
                            }, null != n)) {
                            const e = this._colorProvider.getPlotPointStyle(i, I),
                                t = e.colors[0];
                            void 0 !== t && (h.style.color = (0, d.isHexColor)(t) ? C(t, T) : t), h.style.width = null !== (o = e.lineWidth) && void 0 !== o ? o : h.style.width, h.style.style = null !== (a = e.lineStyle) && void 0 !== a ? a : h.style.style
                        }
                        if (!b && !isNaN(w) && w !== t - 1 && N > 0) {
                            const e = this._items[N - 1].timePointIndex,
                                i = new r.Point(t - 1, NaN);
                            i.origPrices = new r.Point(t - 1, NaN), i.timePointIndex = e, N < this._items.length ? this._items[N] = i : this._items.push(i), N++
                        }
                        w = t, P = n; {
                            const e = h;
                            e.origPrices = new r.Point(h.x, h.y), N < this._items.length ? this._items[N] = e : this._items.push(e), N++
                        }
                    }
                    if (this._items.length) {
                        const t = this._model.mainSeries().data().bars().lastIndex();
                        null !== t && (this._lastConfirmedSeriesBarCoordinate = this._model.timeScale().indexToCoordinate(t));
                        const i = Math.max(0, (0, R.lowerbound)(this._items, A, ((e, t) => e.timePointIndex < t))),
                            s = Math.min(this._items.length, (0, R.upperbound)(this._items, L, ((e, t) => e < t.timePointIndex))),
                            r = e ? i : Math.max(i, k),
                            n = s;
                        for (let e = r; e < n; e++) {
                            const t = this._items[e];
                            t.x = t.origPrices.x, t.y = t.origPrices.y
                        }
                        u.pointsArrayToCoordinates(this._items, h, {
                                startItemIndex: r,
                                endItemIndex: n
                            }),
                            this._model.timeScale().timedValuesToCoordinates(this._items, {
                                startItemIndex: r,
                                endItemIndex: n
                            }, !0), void 0 !== _.histogramBase && (this._histogramBase = u.priceToCoordinate(_.histogramBase, h)), this._createSelection(h), this._createRenderer(i, s)
                    }
                    return !0
                }
                _updateImplLight() {
                    var e;
                    const t = this._study.firstValue();
                    if (null === t) return this._selectionData = null, void this._createRenderer(0, -1);
                    const i = this._study.priceScale();
                    if (null === i) return this._selectionData = null, void this._createRenderer(0, -1);
                    const r = this._model.timeScale().visibleBarsStrictRange();
                    if (null === r) return this._selectionData = null, void this._createRenderer(0, -1);
                    const {
                        startBar: n,
                        endBar: o
                    } = this._calculateStartEnd(r);
                    if (null === n || null === o || 0 === this._items.length) return this._selectionData = null, void this._createRenderer(0, -1);
                    const l = Math.max(0, (0, R.lowerbound)(this._items, n, ((e, t) => e.timePointIndex < t))),
                        a = Math.min(this._items.length, (0, R.upperbound)(this._items, o, ((e, t) => e < t.timePointIndex)));
                    for (let e = l; e < a; e++) {
                        const t = this._items[e];
                        t.x = t.origPrices.x, t.y = t.origPrices.y
                    }
                    i.pointsArrayToCoordinates(this._items, t, {
                        startItemIndex: l,
                        endItemIndex: a
                    }), this._model.timeScale().timedValuesToCoordinates(this._items, {
                        startItemIndex: l,
                        endItemIndex: a
                    }, !0);
                    const d = (0, s.ensureDefined)(null === (e = this._study.metaInfo().styles) || void 0 === e ? void 0 : e[this._plotName]);
                    void 0 !== d.histogramBase && (this._histogramBase = i.priceToCoordinate(d.histogramBase, t)), this._createSelection(t);
                    const h = this._model.mainSeries().data().bars().lastIndex();
                    null !== h && (this._lastConfirmedSeriesBarCoordinate = this._model.timeScale().indexToCoordinate(h)), this._createRenderer(l, a)
                }
                _calculateStartEnd(e) {
                    const t = this._study.offset(this._plotName);
                    let i = e.firstBar() - Math.abs(t) - 1,
                        s = e.lastBar() + Math.abs(t) + 1;
                    const r = this._study.data(),
                        n = r.search(i, A.PlotRowSearchMode.NearestLeft, this._plotIndex + 1),
                        o = r.search(s, A.PlotRowSearchMode.NearestRight, this._plotIndex + 1);
                    null !== n && (i = n.index), null !== o && (s = o.index);
                    const l = this._study.getMinFirstBarIndexForPlot(this._plotName) + t;
                    return l > s + 1 ? {
                        startBar: null,
                        endBar: null
                    } : (i = Math.max(l, i), {
                        startBar: i,
                        endBar: s
                    })
                }
                _createRenderer(e, t) {
                    var i, r;
                    this._renderer.clear();
                    const n = this._study.properties().styles.childs()[this._plotName].childs(),
                        o = (0, s.ensureDefined)(null === (i = this._study.metaInfo().styles) || void 0 === i ? void 0 : i[this._plotName]),
                        u = (0, l.clamp)(this._getTranspValue(), 0, 100);
                    this._lineColor = (0, d.generateColor)(n.color.value(), u), this._lineWidth = n.linewidth.value();
                    let c = n.color.value();
                    const p = this._colorProvider.getDefaultPlotPointStyle();
                    p && (c = p.colors[0] || c, this._lineWidth = null !== (r = p.lineWidth) && void 0 !== r ? r : this._lineWidth, this._lineColor = c ? (0, d.generateColor)(c, u) : this._lineColor), this._color2 = (0, d.generateColor)(c, u);
                    const m = this._study.metaInfo(),
                        g = m.isRGB ? L(c) : B(c);
                    this._color1 = (0, d.generateColor)(g, u);
                    const b = {};
                    b.barSpacing = this._model.timeScale().barSpacing(), b.items = this._items, b.histogramBase = this._histogramBase ? this._histogramBase : (0, s.ensureNotNull)(this._study.priceScale()).height(), b.lineIndex = 0, b.lineStyle = n.linestyle.value(), b.lineColor = this._lineColor,
                        b.lineWidth = this._lineWidth, b.lineWidth = (0, a.isNumber)(b.lineWidth) ? b.lineWidth : 1, b.color1 = this._color1, b.color2 = this._color2, b.bottom = b.histogramBase, b.visibleItemsRange = {
                            startItemIndex: e,
                            endItemIndex: t
                        }, b.lastConfirmedSeriesBarCoordinate = this._lastConfirmedSeriesBarCoordinate, b.simpleMode = this._colorProvider.singleColor();
                    const w = this._renderer,
                        C = o.joinPoints;
                    switch (n.plottype.value()) {
                        case V.LineStudyPlotStyle.Line:
                        case V.LineStudyPlotStyle.LineWithBreaks:
                            w.append(new f.PaneRendererLine(b));
                            break;
                        case V.LineStudyPlotStyle.Area:
                        case V.LineStudyPlotStyle.AreaWithBreaks:
                            w.append(new _.PaneRendererArea(b));
                            break;
                        case V.LineStudyPlotStyle.Histogram:
                            w.append(new T(b));
                            break;
                        case V.LineStudyPlotStyle.Columns:
                            w.append(new x.PaneRendererColumns(b));
                            break;
                        case V.LineStudyPlotStyle.Cross:
                            if (w.append(new I(b)), C) {
                                const e = (0, h.deepCopy)(b);
                                e.lineWidth = 1, e.forceLineWidth = !0, w.append(new f.PaneRendererLine(e))
                            }
                            break;
                        case V.LineStudyPlotStyle.Circles:
                            if (w.append(new P(b)), C) {
                                const e = (0, h.deepCopy)(b);
                                e.lineWidth = 1, e.ignorePaletteLineWidth = !0, w.append(new f.PaneRendererLine(e))
                            }
                            break;
                        case V.LineStudyPlotStyle.StepLine:
                        case V.LineStudyPlotStyle.StepLineWithBreaks:
                        case V.LineStudyPlotStyle.StepLineWithDiamonds:
                            {
                                b.decoration = n.plottype.value() === V.LineStudyPlotStyle.StepLineWithDiamonds ? y.StepLineDecoration.Diamonds : y.StepLineDecoration.None,
                                b.extendToBarsEndings = this._extendStepLineToBarsEndings;
                                const e = new y.PaneRendererStepLine(void 0, (0, S.isFundamentalStudyMetaInfo)(m));e.setData(b),
                                w.append(e);
                                break
                            }
                        default:
                            w.append(new f.PaneRendererLine(b))
                    }
                    this._model.selection().isSelected(this._study) && this._isMarkersEnabled && this._selectionData && w.append(new v.SelectionRenderer(this._selectionData))
                }
                _createSelection(e) {
                    const t = this._study.priceScale();
                    if (null !== t)
                        if (this._model.selection().isSelected(this._study)) {
                            const i = this._selectionIndexer.indexes();
                            this._selectionData = {
                                points: [],
                                bgColors: [],
                                visible: !0,
                                hittestResult: c.HitTestResult.REGULAR,
                                barSpacing: this._model.timeScale().barSpacing()
                            };
                            const n = (0, s.ensureNotNull)(this._model.paneForSource(this._study)).height(),
                                o = this._study.offset(this._plotName);
                            for (let s = 0; s < i.length; s++) {
                                let l = i[s];
                                const a = this._study.data().valueAt(l);
                                if (l += o, null === a) continue;
                                const d = a[this._plotIndex + 1];
                                if (null == d) continue;
                                const h = this._model.timeScale().indexToCoordinate(Math.floor(l)),
                                    u = t.priceToCoordinate(d, e);
                                this._selectionData.points.push(new r.Point(h, u)), this._selectionData.bgColors.push(this._model.backgroundColorAtYPercentFromTop(u / n))
                            }
                        } else this._selectionIndexer.clear()
                }
            }
        },
        438230: (e, t, i) => {
            i.d(t, {
                PaneRendererAbstractShape: () => c,
                PaneRendererAbstractStrokeShape: () => _,
                PaneRendererAbstractFillStrokeShape: () => p
            });
            var s = i(650151),
                r = i(86441),
                n = i(934026),
                o = i(858063),
                l = i(332679),
                a = i(482152),
                d = i(623331),
                h = i(741341),
                u = i(638456);
            class c {
                constructor(e, t = {
                    skipRenderingOptimizations: !1
                }) {
                    this._items = [], this._barSpacing = 0, this._vertOffset = 0, this._textCache = t.textCache || new l.TextImageCachesContainer(5e3),
                        this._drawOperation = t.skipRenderingOptimizations ? this._drawWithoutOptimizations.bind(this) : this._drawWithOptimizations.bind(this), null !== e && this.setData(e)
                }
                draw(e, t) {
                    this._preDrawInit(), this._drawOperation(e, t)
                }
                hitTest(e) {
                    const t = o.HitTestResult.REGULAR;
                    let i = null;
                    for (const s of this._items) {
                        if (!s) continue;
                        const r = this._calcBoundingBox(s);
                        if (r && (0, n.pointInBox)(e, r)) {
                            const e = {
                                tooltip: this._getTooltip(s, r)
                            };
                            i = new o.HitTestResult(t, e)
                        }
                    }
                    return i
                }
                setData(e) {
                    this._height = void 0 !== e.height ? e.height : e.width, this._width = void 0 !== e.width ? e.width : e.height, this._color = e.color, this._borderColor = e.borderColor, this._vertOffset = e.vertOffset || 0, e.text && (this._text = e.text, this._fontSize = e.fontSize, this._lineSpacing = e.lineSpacing, this._textColor = e.textColor, this._textAlign = e.textAlign || "center"), void 0 !== e.items && void 0 !== e.barSpacing && this.setItems(e.items, e.barSpacing)
                }
                setItems(e, t) {
                    this._setBaseData(e, t)
                }
                _calcBoundingBox(e) {
                    const t = e.vertOffset,
                        i = this._getTextCache(e);
                    if (!i) return;
                    const s = i.textImageWidth,
                        n = i.textImageHeight,
                        o = s / 2,
                        l = e.y + t + e.textVertOffset,
                        a = t > 0 ? 0 : -n,
                        d = t > 0 ? n : 0,
                        h = new r.Point(e.x - o, l + a),
                        u = new r.Point(e.x + o, l + d);
                    return (0, r.box)(h, u)
                }
                _unionBox(e, t) {
                    const i = Math.min(e.min.x, t.min.x),
                        s = Math.max(e.max.x, t.max.x),
                        n = Math.min(e.min.y, t.min.y),
                        o = Math.max(e.max.y, t.max.y),
                        l = new r.Point(i, n),
                        a = new r.Point(s, o);
                    return (0, r.box)(l, a)
                }
                _getTooltip(e, t) {
                    if (e.tooltip) return {
                        content: {
                            type: "text",
                            data: e.tooltip
                        },
                        tooltipDelay: 200,
                        extendMargin: !0,
                        rect: {
                            x: t.min.x,
                            y: t.min.y,
                            w: Math.abs(t.max.x - t.min.x),
                            h: Math.abs(t.max.y - t.min.y)
                        }
                    }
                }
                _setBaseData(e, t) {
                    this._items.length = 0, this._barSpacing = t;
                    for (const t of e) {
                        const e = void 0 === t.width ? (0, s.ensureDefined)(this._width) : t.width,
                            i = void 0 === t.height ? (0, s.ensureDefined)(this._height) : t.height,
                            r = void 0 === t.vertOffset ? this._vertOffset : t.vertOffset,
                            n = r > 0 ? i : -i;
                        this._items.push({
                            width: e,
                            height: i,
                            vertOffset: r,
                            textVertOffset: n,
                            shapeWidth: 0,
                            shapeHeight: 0,
                            stepX: 0,
                            stepY: 0,
                            ...t
                        })
                    }
                }
                _drawItemText(e, t, i) {
                    const s = this._getTextCache(i);
                    if (null === s) return;
                    const r = i.x,
                        n = i.vertOffset,
                        o = i.y + n + i.textVertOffset;
                    let l;
                    l = i.style && void 0 !== i.style.textColor ? i.style.textColor : this._textColor;
                    const d = {
                        style: {
                            fillStyle: l
                        },
                        location: {
                            x: r,
                            y: o,
                            horzAlign: a.HorizontalAlign.Center,
                            vertAlign: n > 0 ? a.VerticalAlign.Top : a.VerticalAlign.Bottom
                        }
                    };
                    s.paintTo(e, t, d)
                }
                _drawWithOptimizations(e, t) {
                    let i, s, r = null,
                        n = !1;
                    for (const o of this._items) o.style && void 0 !== o.style.color ? (i = o.style.color || "rgba(0, 0, 0, 0)", s = o.style.borderColor || "rgba(0, 0, 0, 0)") : (i = this._color, s = this._borderColor), (r !== i || u.isSafari) && (r = i, n && this._endPath(e), this._startPath(e, t, i, s)), this._drawItemShape(e, t, o), n = !0;
                    n && this._endPath(e);
                    for (const i of this._items) this._drawItemText(e, t, i)
                }
                _drawWithoutOptimizations(e, t) {
                    let i, r;
                    for (const n of this._items) {
                        const o = (0, s.ensureDefined)(n.style);
                        i = o.color || "rgba(0, 0, 0, 0)", r = o.borderColor || "rgba(0, 0, 0, 0)", this._startPath(e, t, i, r), this._drawItemShape(e, t, n), this._endPath(e), this._drawItemText(e, t, n)
                    }
                }
                _drawItemShape(e, t, i) {
                    (0, h.drawScaled)(e, t.pixelRatio, (() => this._drawItemShapeUsingCSSPixels(e, i)))
                }
                _drawItemShapeUsingCSSPixels(e, t) {}
                _preDrawInit() {}
                _startPath(e, t, i, s) {}
                _endPath(e) {}
                _getTextCache(e) {
                    var t, i;
                    const s = e.text || this._text,
                        r = e.fontSize || this._fontSize,
                        n = null !== (t = e.lineSpacing) && void 0 !== t ? t : this._lineSpacing,
                        o = e.textAlign || this._textAlign,
                        l = null !== (i = e.font) && void 0 !== i ? i : d.CHART_FONT_FAMILY;
                    return this._textCache.get({
                        text: s,
                        bold: !1,
                        italic: !1,
                        font: l,
                        fontSize: r,
                        lineSpacing: n,
                        align: o
                    })
                }
            }
            class _ extends c {
                _startPath(e, t, i, s) {
                    e.beginPath(), e.lineWidth = this._lineWidth(t), e.lineCap = "butt", e.strokeStyle = i
                }
                _endPath(e) {
                    e.stroke()
                }
                _lineWidth(e) {
                    return Math.max(1, Math.floor(2 * e.pixelRatio))
                }
            }
            class p extends c {
                _startPath(e, t, i, s) {
                    e.beginPath(), e.lineWidth = this._lineWidth(t), e.lineCap = "butt", e.fillStyle = i, e.strokeStyle = s
                }
                _endPath(e) {
                    e.fill(), e.stroke()
                }
                _lineWidth(e) {
                    return Math.max(1, Math.floor(e.pixelRatio))
                }
            }
        },
        664348: (e, t, i) => {
            i.d(t, {
                PaneRendererArrowUp: () => l,
                PaneRendererArrowDown: () => a
            });
            var s = i(438230),
                r = i(86441),
                n = i(43329);
            class o extends s.PaneRendererAbstractFillStrokeShape {
                constructor() {
                    super(...arguments), this._sign = 0, this._thinArrow = !1, this._thinArrowLineWidth = 0, this._headHeight = 0, this._arrowWidth = 0
                }
                setItems(e, t) {
                    this._setBaseData(e, t)
                }
                _drawItemShape(e, t, i) {
                    const s = t.pixelRatio,
                        r = this._lineWidth(t) % 2 ? .5 : 0,
                        o = this._sign,
                        l = this._arrowWidth,
                        a = this._headHeight,
                        d = Math.abs(i.height),
                        h = Math.round(i.x * s) + r,
                        u = i.vertOffset,
                        c = Math.round((i.y + u + o * d / 2) * s) + r,
                        _ = (0, n.ceiledEven)(l * s),
                        p = _ / 2,
                        f = Math.round(d * s),
                        y = Math.round(a * s);
                    e.translate(h, c), this._thinArrow ? (e.moveTo(0, 0), e.lineTo(-p, -p * o), e.moveTo(0, 0), e.lineTo(p, -p * o), e.moveTo(0, 0), e.lineTo(0, -f * o), e.moveTo(-p, -f * o), e.lineTo(p, -f * o)) : (e.moveTo(0, 0), f < y ? (e.lineTo(_, -f * o), e.lineTo(-_, -f * o)) : (e.lineTo(_, -y * o), e.lineTo(p, -y * o), e.lineTo(p, -f * o), e.lineTo(-p, -f * o), e.lineTo(-p, -y * o), e.lineTo(-_, -y * o)), e.lineTo(0, 0)), e.translate(-h, -c)
                }
                _preDrawInit() {
                    const e = this._calculateWidth();
                    this._arrowWidth = e, this._sign = this._isUp() ? -1 : 1, this._thinArrow = e < 4, this._thinArrowLineWidth = Math.max(e / 2, 1), this._headHeight = Math.round(e)
                }
                _startPath(e, t, i, s) {
                    e.beginPath(), e.fillStyle = i, e.strokeStyle = s, e.lineWidth = this._lineWidth(t)
                }
                _lineWidth(e) {
                    return this._thinArrow ? this._thinArrowLineWidth : super._lineWidth(e)
                }
                _calcBoundingBox(e) {
                    const t = e.vertOffset,
                        i = this._sign,
                        s = this._arrowWidth,
                        n = this._headHeight,
                        o = Math.abs(e.height),
                        l = e.x - s,
                        a = l + 2 * s,
                        d = e.y + t + i * Math.round(o / 2),
                        h = d + (-o - n) * i,
                        u = new r.Point(l, d),
                        c = new r.Point(a, h);
                    let _ = (0, r.box)(u, c);
                    const p = super._calcBoundingBox(e);
                    return p && (_ = this._unionBox(_, p)), _
                }
                _calculateWidth() {
                    return Math.round(this._barSpacing / 4)
                }
            }
            class l extends o {
                _isUp() {
                    return !0
                }
            }
            class a extends o {
                _isUp() {
                    return !1
                }
            }
        },
        385470: (e, t, i) => {
            i.d(t, {
                PaneRendererCircleShape: () => o
            });
            var s = i(86441),
                r = i(438230);
            const n = 2 * Math.PI;
            class o extends r.PaneRendererAbstractFillStrokeShape {
                _drawItemShapeUsingCSSPixels(e, t) {
                    const i = Math.max(t.width, t.height) / 2,
                        s = t.x,
                        r = t.vertOffset,
                        o = t.y + r;
                    e.moveTo(s + i, o), e.arc(s, o, i, 0, n, !1)
                }
                _calcBoundingBox(e) {
                    const t = Math.max(e.width, e.height) / 2,
                        i = e.x,
                        r = e.vertOffset,
                        n = e.y + r,
                        o = i - t,
                        l = i + t,
                        a = n - t,
                        d = n + t,
                        h = new s.Point(o, a),
                        u = new s.Point(l, d);
                    let c = (0, s.box)(h, u);
                    const _ = super._calcBoundingBox(e);
                    return _ && (c = this._unionBox(c, _)), c
                }
            }
        },
        753346: (e, t, i) => {
            i.d(t, {
                PaneRendererCrossShape: () => n
            });
            var s = i(438230),
                r = i(86441);
            class n extends s.PaneRendererAbstractStrokeShape {
                _drawItemShape(e, t, i) {
                    const s = i.width,
                        r = i.height,
                        n = i.x - s / 2,
                        o = i.vertOffset,
                        l = i.y - r / 2 + o,
                        a = t.pixelRatio,
                        d = this._lineWidth(t),
                        h = d % 2 ? .5 : 0,
                        u = Math.round(n * a);
                    let c = Math.round((n + s) * a);
                    (c - u) % 2 != d % 2 && (c += 1);
                    const _ = Math.floor((u + c) / 2) + h,
                        p = Math.round(l * a);
                    let f = Math.round((l + r) * a);
                    (f - p) % 2 != d % 2 && (f += 1);
                    const y = Math.floor((p + f) / 2) + h;
                    e.moveTo(_, p), e.lineTo(_, f), e.moveTo(u, y), e.lineTo(c, y)
                }
                _calcBoundingBox(e) {
                    const t = e.width,
                        i = e.height,
                        s = e.x - t / 2,
                        n = e.vertOffset,
                        o = e.y - i / 2 + n,
                        l = s,
                        a = s + t,
                        d = o,
                        h = o + i,
                        u = new r.Point(l, d),
                        c = new r.Point(a, h);
                    let _ = (0, r.box)(u, c);
                    const p = super._calcBoundingBox(e);
                    return p && (_ = this._unionBox(_, p)), _
                }
            }
        },
        644001: (e, t, i) => {
            i.d(t, {
                PaneRendererDiamond: () => n
            });
            var s = i(86441),
                r = i(438230);
            class n extends r.PaneRendererAbstractFillStrokeShape {
                _drawItemShapeUsingCSSPixels(e, t) {
                    const i = Math.round(t.height / 2),
                        s = t.x,
                        r = t.vertOffset,
                        n = t.y + r;
                    e.moveTo(s, n - i), e.lineTo(s + i, n), e.lineTo(s, n + i), e.lineTo(s - i, n), e.lineTo(s, n - i)
                }
                _calcBoundingBox(e) {
                    const t = Math.round(e.height / 2),
                        i = e.x,
                        r = e.vertOffset,
                        n = e.y + r,
                        o = i - t,
                        l = i + t,
                        a = n - t,
                        d = n + t,
                        h = new s.Point(o, a),
                        u = new s.Point(l, d);
                    let c = (0, s.box)(h, u);
                    const _ = super._calcBoundingBox(e);
                    return _ && (c = this._unionBox(c, _)), c
                }
            }
        },
        32895: (e, t, i) => {
            i.d(t, {
                PaneRendererFlagShape: () => n
            });
            var s = i(86441),
                r = i(438230);
            class n extends r.PaneRendererAbstractFillStrokeShape {
                _drawItemShapeUsingCSSPixels(e, t) {
                    const i = t.width,
                        s = t.height,
                        r = s / 2,
                        n = (i - 3) / 3,
                        o = t.x - i / 2,
                        l = t.vertOffset,
                        a = t.y - r + l;
                    e.moveTo(o, a), e.lineTo(o + 3, a), e.bezierCurveTo(o + n, a - n, o + 2 * n, a + n, o + i, a), e.lineTo(o + i, a + r), e.bezierCurveTo(o + i - n, a + r + n, o + i - 2 * n, a + r - n, o + 3, a + r), e.lineTo(o + 3, a + s), e.lineTo(o, a + s), e.lineTo(o, a)
                }
                _calcBoundingBox(e) {
                    const t = e.width,
                        i = e.height,
                        r = i / 2,
                        n = e.x - t / 2,
                        o = e.vertOffset,
                        l = e.y - r + o,
                        a = n,
                        d = n + t,
                        h = l,
                        u = l + i,
                        c = new s.Point(a, h),
                        _ = new s.Point(d, u);
                    let p = (0, s.box)(c, _);
                    const f = super._calcBoundingBox(e);
                    return f && (p = this._unionBox(p, f)), p
                }
            }
        },
        929434: (e, t, i) => {
            i.d(t, {
                PaneRendererLabelBase: () => l,
                CornerVectorsClockwise: () => s
            });
            var s, r = i(650151),
                n = i(438230),
                o = i(482152);
            class l extends n.PaneRendererAbstractFillStrokeShape {
                setItems(e, t) {
                    this._setBaseData(e, t);
                    for (const e of this._items) {
                        const t = e.height;
                        e.stepX = Math.round(t / 2 * .65) + .5, e.stepY = e.stepX;
                        const i = e.stepX / 2,
                            s = this._getTextCache(e);
                        if (null === s) {
                            e.shapeWidth = 2 * e.stepX, e.shapeHeight = 2.5 * e.stepY, e.vertOffset = this._calcVertOffset(e);
                            continue
                        }
                        const r = s.textImageWidth,
                            n = s.textImageHeight;
                        e.shapeWidth = r + 2 * e.stepX, e.shapeHeight = n + 2 * i + e.stepY, e.vertOffset = this._calcVertOffset(e), e.textHorizOffset = this._getHorizontalTextOffset(e), e.textVertOffset = this._getVerticalTextOffset(e)
                    }
                }
                _calcVertOffset(e) {
                    return e.vertOffset
                }
                _drawCorner(e, t, i, s, r) {
                    const n = Math.max(1, Math.floor(2 * r));
                    e.lineTo(t - n * s.prevPointSignX, i - n * s.prevPointSignY), e.arcTo(t, i, t + n * s.nextPointSignX, i + n * s.nextPointSignY, n)
                }
                _getArrowSize(e) {
                    return e.stepX
                }
                _getHorizontalTextOffset(e) {
                    return 0
                }
                _getVerticalTextOffset(e) {
                    return 0
                }
                _hasText(e) {
                    return Boolean(e.text) || Boolean(this._text)
                }
                _drawItemText(e, t, i) {
                    var s;
                    const n = this._getTextCache(i);
                    if (null === n) return;
                    const l = i.textHorizOffset || 0,
                        a = i.x + l,
                        d = i.vertOffset,
                        h = i.y + d + i.textVertOffset,
                        u = (null === (s = i.style) || void 0 === s ? void 0 : s.textColor) || this._textColor,
                        c = {
                            style: {
                                fillStyle: (0, r.ensureDefined)(u)
                            },
                            location: {
                                x: a,
                                y: h,
                                horzAlign: o.HorizontalAlign.Center,
                                vertAlign: o.VerticalAlign.Middle
                            }
                        };
                    n.paintTo(e, t, c)
                }
            }
            class a {
                constructor(e, t, i, s) {
                    this.prevPointSignX = e, this.prevPointSignY = t, this.nextPointSignX = i, this.nextPointSignY = s
                }
            }! function(e) {
                e.rightUp = new a(1, 0, 0, 1), e.rightDown = new a(0, 1, -1, 0), e.leftDown = new a(-1, 0, 0, -1), e.leftUp = new a(0, -1, 1, 0)
            }(s || (s = {}))
        },
        696720: (e, t, i) => {
            i.d(t, {
                PaneRendererLabelUp: () => n,
                PaneRendererLabelDown: () => o,
                PaneRendererLabelLeft: () => l,
                PaneRendererLabelRight: () => a,
                PaneRendererLabelCenter: () => d
            });
            var s = i(86441),
                r = i(929434);
            class n extends r.PaneRendererLabelBase {
                _calcBoundingBox(e) {
                    const t = e.x - e.shapeWidth / 2,
                        i = e.x + e.shapeWidth / 2,
                        r = e.y + e.vertOffset,
                        n = e.y + e.shapeHeight + e.vertOffset,
                        o = new s.Point(t, r),
                        l = new s.Point(i, n);
                    return (0, s.box)(o, l)
                }
                _drawItemShape(e, t, i) {
                    const s = t.pixelRatio,
                        n = this._lineWidth(t) % 2 ? .5 : 0,
                        o = Math.max(1, Math.floor(s)) % 2 ? .5 : 0,
                        l = this._getArrowSize(i);
                    let a = Math.round(l * s);
                    (o + a) % 1 != n % 1 && (a += .5);
                    let d = Math.round(i.shapeWidth / 2 * s);
                    (o + d) % 1 != n % 1 && (d += .5);
                    const h = Math.round(i.x * s) + o,
                        u = Math.round((i.y + i.vertOffset) * s) + n,
                        c = h - a,
                        _ = Math.round((i.y + i.vertOffset + l) * s) + n,
                        p = h + a,
                        f = h + d,
                        y = Math.round((i.y + i.vertOffset + i.shapeHeight) * s) + n,
                        m = h - d;
                    e.moveTo(c, _), e.lineTo(h, u), e.lineTo(p, _), i.shapeWidth <= 2 * l ? (e.lineTo(f, _), this._drawCorner(e, f, y, r.CornerVectorsClockwise.rightDown, s), this._drawCorner(e, m, y, r.CornerVectorsClockwise.leftDown, s), e.lineTo(m, _)) : (this._drawCorner(e, f, _, r.CornerVectorsClockwise.rightUp, s), this._drawCorner(e, f, y, r.CornerVectorsClockwise.rightDown, s), this._drawCorner(e, m, y, r.CornerVectorsClockwise.leftDown, s), this._drawCorner(e, m, _, r.CornerVectorsClockwise.leftUp, s)), e.lineTo(c, _)
                }
                _getVerticalTextOffset(e) {
                    return e.shapeHeight / 2 + this._getArrowSize(e) / 2
                }
                _calcVertOffset(e) {
                    return Math.sign(e.vertOffset) >= 0 ? e.vertOffset : e.vertOffset - e.shapeHeight
                }
            }
            class o extends r.PaneRendererLabelBase {
                _calcBoundingBox(e) {
                    const t = e.x - e.shapeWidth / 2,
                        i = e.x + e.shapeWidth / 2,
                        r = e.y - e.shapeHeight + e.vertOffset,
                        n = e.y + e.vertOffset,
                        o = new s.Point(t, r),
                        l = new s.Point(i, n);
                    return (0, s.box)(o, l)
                }
                _drawItemShape(e, t, i) {
                    const s = t.pixelRatio,
                        n = this._lineWidth(t) % 2 ? .5 : 0,
                        o = Math.max(1, Math.floor(s)) % 2 ? .5 : 0,
                        l = this._getArrowSize(i);
                    let a = Math.round(l * s);
                    (o + a) % 1 != n % 1 && (a += .5);
                    let d = Math.round(i.shapeWidth / 2 * s);
                    (o + d) % 1 != n % 1 && (d += .5);
                    const h = Math.round(i.x * s) + o,
                        u = Math.round((i.y + i.vertOffset) * s) + n,
                        c = h + a,
                        _ = Math.round((i.y + i.vertOffset - l) * s) + n,
                        p = h - a,
                        f = h + d,
                        y = Math.round((i.y + i.vertOffset - i.shapeHeight) * s) + n,
                        m = h - d;
                    e.moveTo(c, _), e.lineTo(h, u), e.lineTo(p, _), i.shapeWidth <= 2 * l ? (e.lineTo(m, _), this._drawCorner(e, m, y, r.CornerVectorsClockwise.leftUp, s), this._drawCorner(e, f, y, r.CornerVectorsClockwise.rightUp, s), e.lineTo(f, _)) : (this._drawCorner(e, m, _, r.CornerVectorsClockwise.leftDown, s),
                        this._drawCorner(e, m, y, r.CornerVectorsClockwise.leftUp, s), this._drawCorner(e, f, y, r.CornerVectorsClockwise.rightUp, s), this._drawCorner(e, f, _, r.CornerVectorsClockwise.rightDown, s)), e.lineTo(c, _)
                }
                _getVerticalTextOffset(e) {
                    return -e.shapeHeight / 2 - this._getArrowSize(e) / 2
                }
                _calcVertOffset(e) {
                    return Math.sign(e.vertOffset) <= 0 ? e.vertOffset : e.vertOffset + e.shapeHeight
                }
            }
            class l extends r.PaneRendererLabelBase {
                _calcBoundingBox(e) {
                    const t = e.x,
                        i = e.x + e.shapeWidth,
                        r = e.y - e.shapeHeight / 2 + e.vertOffset,
                        n = e.y + e.shapeHeight / 2 + e.vertOffset,
                        o = new s.Point(t, r),
                        l = new s.Point(i, n);
                    return (0, s.box)(o, l)
                }
                _drawItemShape(e, t, i) {
                    const s = t.pixelRatio,
                        n = this._lineWidth(t) % 2 ? .5 : 0,
                        o = this._getArrowSize(i),
                        l = this._hasText(i),
                        a = l ? i.shapeHeight / 2 : o,
                        d = Math.round(i.x * s) + n,
                        h = Math.round((i.y + i.vertOffset) * s) + n,
                        u = Math.round((i.x + o) * s) + n,
                        c = Math.round((i.y + i.vertOffset + o) * s) + n,
                        _ = Math.round((i.y + i.vertOffset - o) * s) + n,
                        p = Math.round((i.y + i.vertOffset - a) * s) + n,
                        f = Math.round((i.x + i.shapeWidth) * s) + n,
                        y = Math.round((i.y + i.vertOffset + a) * s) + n;
                    e.moveTo(u, c), e.lineTo(d, h), e.lineTo(u, _), l ? this._drawCorner(e, u, p, r.CornerVectorsClockwise.leftUp, s) : e.lineTo(u, p), this._drawCorner(e, f, p, r.CornerVectorsClockwise.rightUp, s), this._drawCorner(e, f, y, r.CornerVectorsClockwise.rightDown, s), l ? this._drawCorner(e, u, y, r.CornerVectorsClockwise.leftDown, s) : e.lineTo(u, y), e.lineTo(u, c)
                }
                _getHorizontalTextOffset(e) {
                    return e.shapeWidth / 2 + this._getArrowSize(e) / 2
                }
            }
            class a extends r.PaneRendererLabelBase {
                _calcBoundingBox(e) {
                    const t = e.x - e.shapeWidth,
                        i = e.x,
                        r = e.y - e.shapeHeight / 2 + e.vertOffset,
                        n = e.y + e.shapeHeight / 2 + e.vertOffset,
                        o = new s.Point(t, r),
                        l = new s.Point(i, n);
                    return (0, s.box)(o, l)
                }
                _drawItemShape(e, t, i) {
                    const s = t.pixelRatio,
                        n = this._lineWidth(t) % 2 ? .5 : 0,
                        o = this._getArrowSize(i),
                        l = this._hasText(i),
                        a = l ? i.shapeHeight / 2 : o,
                        d = Math.round(i.x * s) + n,
                        h = Math.round((i.y + i.vertOffset) * s) + n,
                        u = Math.round((i.x - o) * s) + n,
                        c = Math.round((i.y + i.vertOffset - o) * s) + n,
                        _ = Math.round((i.y + i.vertOffset + o) * s) + n,
                        p = Math.round((i.y + i.vertOffset - a) * s) + n,
                        f = Math.round((i.x - i.shapeWidth) * s) + n,
                        y = Math.round((i.y + i.vertOffset + a) * s) + n;
                    e.moveTo(u, c), e.lineTo(d, h), e.lineTo(u, _), l ? this._drawCorner(e, u, y, r.CornerVectorsClockwise.rightDown, s) : e.lineTo(u, y), this._drawCorner(e, f, y, r.CornerVectorsClockwise.leftDown, s), this._drawCorner(e, f, p, r.CornerVectorsClockwise.leftUp, s), l ? this._drawCorner(e, u, p, r.CornerVectorsClockwise.rightUp, s) : e.lineTo(u, p), e.lineTo(u, c)
                }
                _getHorizontalTextOffset(e) {
                    return -e.shapeWidth / 2 - this._getArrowSize(e) / 2
                }
            }
            class d extends r.PaneRendererLabelBase {
                _calcBoundingBox(e) {
                    const t = e.x - e.shapeWidth / 2,
                        i = e.x + e.shapeWidth / 2,
                        r = e.y - e.shapeHeight / 2 + e.vertOffset,
                        n = e.y + e.shapeHeight / 2 + e.vertOffset,
                        o = new s.Point(t, r),
                        l = new s.Point(i, n);
                    return (0, s.box)(o, l)
                }
                _drawItemShape(e, t, i) {
                    const s = t.pixelRatio,
                        n = this._lineWidth(t) % 2 ? .5 : 0,
                        o = i.shapeHeight / 2,
                        l = i.shapeWidth / 2,
                        a = Math.round(i.x * s) + n,
                        d = Math.round((i.x - l) * s) + n,
                        h = Math.round((i.x + l) * s) + n,
                        u = Math.round((i.y + i.vertOffset - o) * s) + n,
                        c = Math.round((i.y + i.vertOffset + o) * s) + n;
                    e.moveTo(a, u), this._drawCorner(e, h, u, r.CornerVectorsClockwise.rightUp, s), this._drawCorner(e, h, c, r.CornerVectorsClockwise.rightDown, s),
                        this._drawCorner(e, d, c, r.CornerVectorsClockwise.leftDown, s), this._drawCorner(e, d, u, r.CornerVectorsClockwise.leftUp, s), e.lineTo(a, u)
                }
            }
        },
        472068: (e, t, i) => {
            i.d(t, {
                PaneRendererSquare: () => n
            });
            var s = i(438230),
                r = i(86441);
            class n extends s.PaneRendererAbstractFillStrokeShape {
                _drawItemShape(e, t, i) {
                    const s = t.pixelRatio,
                        r = Math.max(1, Math.floor(s)) % 2 ? .5 : 0,
                        n = this._lineWidth(t) % 2 ? .5 : 0;
                    let o = Math.round(i.height / 2 * s);
                    (r + o) % 1 != n % 1 && (o += .5);
                    const l = Math.round(i.x * s) + r,
                        a = Math.round((i.y + i.vertOffset) * s) + r,
                        d = l - o,
                        h = a - o,
                        u = l + o,
                        c = a + o;
                    e.rect(d, h, u - d, c - h)
                }
                _calcBoundingBox(e) {
                    const t = e.height,
                        i = Math.round(t / 2),
                        s = e.x - i,
                        n = e.vertOffset,
                        o = e.y + n - i,
                        l = s,
                        a = s + t,
                        d = o,
                        h = o + t,
                        u = new r.Point(l, d),
                        c = new r.Point(a, h);
                    let _ = (0, r.box)(u, c);
                    const p = super._calcBoundingBox(e);
                    return p && (_ = this._unionBox(_, p)), _
                }
            }
        },
        21720: (e, t, i) => {
            i.d(t, {
                PaneRendererTriangleApexUp: () => o,
                PaneRendererTriangleApexDown: () => l
            });
            var s = i(438230),
                r = i(86441);
            class n extends s.PaneRendererAbstractFillStrokeShape {
                _calcBoundingBox(e) {
                    const t = e.width,
                        i = e.height,
                        s = t / 2,
                        n = Math.round(i / 3),
                        o = e.x,
                        l = e.vertOffset - 2 * n,
                        a = e.y + l,
                        d = o - s,
                        h = o + s,
                        u = a,
                        c = a + i,
                        _ = new r.Point(d, u),
                        p = new r.Point(h, c);
                    let f = (0, r.box)(_, p);
                    const y = super._calcBoundingBox(e);
                    return y && (f = this._unionBox(f, y)), f
                }
            }
            class o extends n {
                _drawItemShape(e, t, i) {
                    const s = i.width,
                        r = i.height,
                        n = Math.round(r / 3),
                        o = i.vertOffset - 2 * n,
                        l = t.pixelRatio,
                        a = this._lineWidth(t) % 2 ? .5 : 0,
                        d = Math.max(1, Math.floor(l)),
                        h = d % 2 ? .5 : 0;
                    let u = Math.round(s * l);
                    u % 2 != d % 2 && (u += 1);
                    const c = Math.round(i.x * l) + h,
                        _ = Math.round((i.y + o) * l),
                        p = c + u / 2,
                        f = Math.round((i.y + o + r) * l) + a,
                        y = c - u / 2;
                    e.moveTo(c, _), e.lineTo(p, f), e.lineTo(y, f), e.lineTo(c, _)
                }
            }
            class l extends n {
                _drawItemShape(e, t, i) {
                    const s = i.width,
                        r = i.height,
                        n = Math.round(r / 3),
                        o = i.vertOffset - n,
                        l = t.pixelRatio,
                        a = this._lineWidth(t) % 2 ? .5 : 0,
                        d = Math.max(1, Math.floor(l)),
                        h = d % 2 ? .5 : 0;
                    let u = Math.round(s * l);
                    u % 2 != d % 2 && (u += 1);
                    const c = Math.round(i.x * l) + h,
                        _ = Math.round((i.y + o) * l) + a,
                        p = c + u / 2,
                        f = Math.round((i.y + o + r) * l),
                        y = c - u / 2;
                    e.moveTo(y, _), e.lineTo(p, _), e.lineTo(c, f), e.lineTo(y, _)
                }
            }
        },
        8075: (e, t, i) => {
            i.d(t, {
                PaneRendererXCross: () => n
            });
            var s = i(86441),
                r = i(438230);
            class n extends r.PaneRendererAbstractStrokeShape {
                _drawItemShapeUsingCSSPixels(e, t) {
                    const i = t.width,
                        s = t.height,
                        r = t.x - i / 2,
                        n = t.vertOffset,
                        o = t.y - s / 2 + n;
                    e.moveTo(r, o), e.lineTo(r + i, o + s), e.moveTo(r, o + s), e.lineTo(r + i, o)
                }
                _calcBoundingBox(e) {
                    const t = e.width,
                        i = e.height,
                        r = e.x - t / 2,
                        n = e.vertOffset,
                        o = e.y - i / 2 + n,
                        l = r,
                        a = r + t,
                        d = o,
                        h = o + i,
                        u = new s.Point(l, d),
                        c = new s.Point(a, h);
                    let _ = (0, s.box)(u, c);
                    const p = super._calcBoundingBox(e);
                    return p && (_ = this._unionBox(_, p)), _
                }
            }
        },
        755695: (e, t, i) => {
            i.d(t, {
                createStudyPlotColorProvider: () => _
            });
            var s = i(519872),
                r = i(650151),
                n = i(394683);
            const o = new Map([
                [0, "color"],
                [2, "textColor"],
                [3, "borderColor"],
                [4, "wickColor"],
                [5, "colorup"],
                [6, "colordown"]
            ]);
            class l {
                constructor(e) {
                    this._plotStyle = e
                }
                getPlotPointStyle(e, t) {
                    const i = t ? (0, n.clearStyle)(t) : (0, n.createEmptyStyle)();
                    return o.forEach(((e, t) => {
                        this._plotStyle[e] && (i.colors[t] = this._plotStyle[e].value())
                    })), i.lineWidth = this._plotStyle.linewidth ? this._plotStyle.linewidth.value() : void 0, i.lineStyle = this._plotStyle.linestyle ? this._plotStyle.linestyle.value() : void 0, i
                }
                isColorDefined() {
                    return !0
                }
                singleColor() {
                    return !0
                }
                getDefaultPlotPointStyle() {
                    return null
                }
            }
            const a = [0, 1, 2, 3, 4, 5, 6];
            class d {
                constructor(e, t, i, s) {
                    this._palettesColors = new Map, this._defaultPlotColors = new Map, this._indexes = s;
                    const n = t.styles[i];
                    if (n)
                        for (const [e, t] of o) this._defaultPlotColors.set(e, n[t]);
                    const l = (0, r.ensureDefined)(e.palettes),
                        a = e.plots;
                    s.forEach(((e, i) => {
                        const s = a[e];
                        if (s && "palette" in s) {
                            const e = l[s.palette],
                                r = t.palettes[s.palette];
                            if (e && r) {
                                const {
                                    valToIndex: t
                                } = e, {
                                    colors: s
                                } = r, n = { ...s
                                };
                                t && Object.keys(t).forEach((e => {
                                    const i = t[e];
                                    void 0 !== i && (n[e] = s[i])
                                })), this._palettesColors.set(i, n)
                            }
                        }
                    }))
                }
                getPlotPointStyle(e, t) {
                    const i = t ? (0, n.clearStyle)(t) : (0, n.createEmptyStyle)();
                    return a.forEach((t => {
                        var s, n;
                        if (this._palettesColors.has(t)) {
                            const n = e[(0, r.ensureDefined)(this._indexes.get(t)) + 1];
                            if ("number" == typeof n) {
                                const e = null === (s = this._palettesColors.get(t)) || void 0 === s ? void 0 : s[n];
                                0 === t && e && (i.lineWidth = e.width.value(), i.lineStyle = e.style.value()), i.colors[t] = null == e ? void 0 : e.color.value()
                            } else i.colors[t] = "transparent"
                        } else i.colors[t] = null === (n = this._defaultPlotColors.get(t)) || void 0 === n ? void 0 : n.value()
                    })), i
                }
                getDefaultPlotPointStyle() {
                    var e;
                    const t = null === (e = this._palettesColors.get(0)) || void 0 === e ? void 0 : e[0];
                    if (void 0 !== t) {
                        return {
                            colors: [t.color.value(), void 0, void 0, void 0, void 0, void 0, void 0],
                            lineStyle: void 0,
                            lineWidth: t.width.value()
                        }
                    }
                    return null
                }
                isColorDefined() {
                    return !!this._palettesColors.size
                }
                singleColor() {
                    return !1
                }
            }
            var h = i(114123);
            class u {
                constructor(e) {
                    this._indexes = e
                }
                getPlotPointStyle(e, t) {
                    const i = t ? (0, n.clearStyle)(t) : (0, n.createEmptyStyle)();
                    return this._indexes.forEach(((t, s) => {
                        const r = e[t + 1];
                        if (null != r) {
                            const e = (0, h.rgbaFromInteger)(r);
                            i.colors[s] = e
                        } else i.colors[s] = "transparent"
                    })), i
                }
                isColorDefined() {
                    return !0
                }
                singleColor() {
                    return !1
                }
                getDefaultPlotPointStyle() {
                    return null
                }
            }
            const c = new Map([
                [0, function(e, t) {
                    const i = (0, s.isColorerPlot)(t) || (0, s.isOhlcColorerPlot)(t);
                    return "target" in t && t.target === e && i
                }],
                [2, function(e, t) {
                    const i = (0, s.isTextColorerPlot)(t);
                    return "target" in t && t.target === e && i
                }],
                [1, function(e, t) {
                    return (0, s.isBgColorerPlot)(t) && t.id === e
                }],
                [3, function(e, t) {
                    const i = (0, s.isCandleBorderColorerPlot)(t);
                    return "target" in t && t.target === e && i
                }],
                [4, function(e, t) {
                    const i = (0, s.isCandleWickColorerPlot)(t);
                    return "target" in t && t.target === e && i
                }],
                [5, function(e, t) {
                    const i = (0, s.isUpColorerPlot)(t);
                    return "target" in t && t.target === e && i
                }],
                [6, function(e, t) {
                    const i = (0, s.isDownColorerPlot)(t);
                    return "target" in t && t.target === e && i
                }]
            ]);

            function _(e, t, i) {
                const {
                    colorers: s
                } = function(e, t) {
                    const i = e.plots,
                        s = i.findIndex((e => e.id === t)),
                        r = new Map;
                    return i.forEach(((e, i) => {
                        c.forEach(((s, n) => {
                            s(t, e) && r.set(n, i)
                        }))
                    })), {
                        plotIndex: -1 === s ? null : s,
                        colorers: r
                    }
                }(e, i);
                if (s.size) return e.isRGB ? new u(s) : new d(e, t, i, s); {
                    const e = t.ohlcPlots;
                    if (e && e[i]) return new l(e[i]);
                    const s = t.styles[i];
                    return new l(s)
                }
            }
        },
        45195: (e, t, i) => {
            i.d(t, {
                StudyBaseWindowView: () => r
            });
            var s = i(194405);
            class r extends s.DataWindowView {
                constructor(e, t) {
                    super(), this._invalidated = !0, this._study = e, this._model = t, this._valueProvider = this._createValuesProvider(e, t),
                        this._items = this._valueProvider.getItems().map((e => new s.DataWindowItem(e.id, e.title, ""))), this.update()
                }
                update() {
                    this._invalidated = !0
                }
                items() {
                    return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._items
                }
                study() {
                    return this._study
                }
                _updateImpl() {
                    this._header = this._study.title(!0), this._title = this._study.title();
                    const e = this._valueProvider.getValues(this._currentIndex());
                    for (let t = 0; t < e.length; ++t) {
                        const i = e[t],
                            s = this._items[t];
                        s.setValue(i.value), s.setVisible(i.visible), s.setColor(i.color), s.setTitle(i.title)
                    }
                }
                _currentIndex() {
                    const e = this._model.crossHairSource().lockedIndex;
                    if (void 0 !== e) return e;
                    const t = this._model.crossHairSource().appliedIndex();
                    return isNaN(t) ? null : t
                }
            }
        },
        4836: (e, t, i) => {
            i.d(t, {
                StudyDataWindowView: () => l
            });
            var s = i(45195),
                r = i(216392),
                n = i(621803);
            class o {
                constructor(e, t) {
                    this._study = e, this._model = t, this._hhistBasedStudy = void 0 !== e.metaInfo().graphics.hhists, this._valuesProvider = this._createValuesProvider(e, t)
                }
                getItems() {
                    return this._valuesProvider.getItems()
                }
                getValues(e) {
                    const t = this._valuesProvider.getValues(e),
                        i = e => !!this._hhistBasedStudy || this._study.isPlotVisibleAt(e, 2);
                    for (const e of t) e.visible = e.visible && i(e.id);
                    return t
                }
                _createValuesProvider(e, t) {
                    return this._hhistBasedStudy ? new n.HHistBasedValuesProvider(e, t) : new r.StudyValuesProvider(e, t)
                }
            }
            class l extends s.StudyBaseWindowView {
                _createValuesProvider(e, t) {
                    return new o(e, t)
                }
            }
        },
        155268: (e, t, i) => {
            i.d(t, {
                StudyLegendValuesProvider: () => n
            });
            var s = i(216392),
                r = i(621803);
            class n {
                constructor(e, t) {
                    this._study = e, this._model = t, this._showStudyValues = t.properties().childs().paneProperties.childs().legendProperties.childs().showStudyValues, this._hhistBasedStudy = void 0 !== e.metaInfo().graphics.hhists, this._valuesProvider = this._createValuesProvider(e, t)
                }
                getItems() {
                    return this._valuesProvider.getItems()
                }
                getValues(e) {
                    const t = this._valuesProvider.getValues(e),
                        i = this._study.properties(),
                        s = this._showStudyValues.value() && i.childs().showLegendValues.value(),
                        r = e => !!this._hhistBasedStudy || this._study.isPlotVisibleAt(e, 8);
                    for (const e of t) e.visible = e.visible && s && r(e.id);
                    return t
                }
                _createValuesProvider(e, t) {
                    return this._hhistBasedStudy ? new r.HHistBasedValuesProvider(e, t) : new s.StudyValuesProvider(e, t)
                }
            }
        },
        386482: (e, t, i) => {
            i.d(t, {
                fundamentalsPrefix: () => s,
                isFundamentalStudyMetaInfo: () => r,
                studyNameByMetaInfo: () => n
            });
            const s = "study_Internal$STD;Fund_";

            function r(e) {
                return n(e) === s
            }

            function n(e) {
                const t = "study_" + (e.classId || e.shortId);
                return t.startsWith(s) ? s : t
            }
        },
        161106: (e, t, i) => {
            i.d(t, {
                StudyStatusProviderBase: () => l
            });
            var s = i(618258),
                r = i(263314);
            const n = {
                    NONE: "Default"
                },
                o = !0;
            class l extends s.StatusProviderBase {
                constructor(e, t) {
                    super(t), this._source = e
                }
                getSplitTitle() {
                    return this._source.titleInParts(!0, n, void 0, o)
                }
                text() {
                    return this._source.isActualInterval() ? this._source.isFailed() ? `${this._source.title(!0,n,void 0,o)}: ${this.sourceStatusText()}` : `${this._source.title(!0,n,void 0,o)} ${this.sourceStatusText()}` : this._source.title(!0, n, void 0, o)
                }
                sourceStatusText() {
                    return (0, r.convertStudyStatusToString)(this._source.status(), !0)
                }
                errorStatus() {
                    if (!this._source.isActualInterval() || this._source.isSymbolInvalid()) return null;
                    const e = this._source.status();
                    return e.type === r.StudyStatusType.Error ? {
                        error: this.sourceStatusText(),
                        solutionId: (0, r.studyStatusSolutionId)(e),
                        title: (0, r.studyStatusTitle)(e),
                        studyFeature: (0, r.studyStatusFeature)(e)
                    } : null
                }
            }
        },
        431235: (e, t, i) => {
            i.d(t, {
                StudyStatusProvider: () => a
            });
            var s = i(777754),
                r = i(263314),
                n = i(971417),
                o = i(161106);
            const l = s.t(null, void 0, i(947542));
            class a extends o.StudyStatusProviderBase {
                constructor(e, t) {
                    super(e, t), this._study = e
                }
                color() {
                    return this._study.isFailed() || this._study.metaInfo && this._study.metaInfo().isTVScriptStub ? "#ff0000" : super.color()
                }
                sourceStatusText() {
                    if (this._study.status().type === r.StudyStatusType.Error) {
                        const e = this._study.metaInfo(),
                            t = (0, n.extractPineId)(e.fullId);
                        if (e.scriptIdPart && (0, n.isEdgrPineId)(e.scriptIdPart) || t && (0, n.isEdgrPineId)(t)) return l
                    }
                    return super.sourceStatusText()
                }
            }
        },
        397581: (e, t, i) => {
            i.d(t, {
                StudyStatusView: () => r
            });
            var s = i(337720);
            class r extends s.StatusView {
                constructor(e) {
                    super(e.statusProvider())
                }
                color() {
                    return this._statusProvider.color()
                }
                getSplitTitle() {
                    return this._statusProvider.getSplitTitle()
                }
                update() {
                    this._text = this._statusProvider.text()
                }
            }
        },
        263314: (e, t, i) => {
            i.d(t, {
                StudyStatusType: () => h,
                convertStudyStatusToString: () => u,
                studyStatusFeature: () => p,
                studyStatusSolutionId: () => c,
                studyStatusTitle: () => _
            });
            var s = i(777754);
            const r = new Map([
                ["You cannot see this pivot timeframe on this resolution", s.t(null, void 0, i(717126))],
                ["The data vendor doesn't provide volume data for this symbol.", s.t(null, void 0, i(529198))],
                ['Histogram is too large, please increase "Row Size" input.', s.t(null, void 0, i(369085))],
                ["Histogram is too large, please reduce 'Row Size' input.", s.t(null, void 0, i(808122))],
                ["This script is invite-only. To request access, please contact its author.", s.t(null, void 0, i(874986))],
                ["Volume Profile indicator available only on our upgraded plans.", s.t(null, void 0, i(961022))]
            ]);
            var n = i(286293);
            const o = s.t(null, void 0, i(916971)),
                l = new Map([
                    ["Pine cannot determine the referencing length of a series. Try using max_bars_back", n.solutionIds.PINE_CANNOT_DETERMINE],
                    ["Memory limits exceeded", n.solutionIds.MEMORY_LIMITS_EXCEEDED],
                    ["This script is invite-only", n.solutionIds.PUBLIC_INVITE_ONLY_SCRIPTS]
                ]),
                a = new Map([
                    ["Volume Profile indicator available only on our upgraded plans", "volumeProfile"]
                ]),
                d = s.t(null, void 0, i(930295));
            var h;

            function u(e, t) {
                if (e.type === h.Loading) return t ? d : "loading...";
                if (e.type === h.Error) {
                    const s = e.errorDescription,
                        n = t ? (i = s.error, r.get(i) || i) : s.error;
                    if (s.ctx) {
                        const e = {};
                        return Object.entries(s.ctx).forEach((([t, i]) => {
                            e[t] = i.toString()
                        })), n.format(e)
                    }
                    return n
                }
                var i;
                return ""
            }

            function c(e) {
                if (e.type === h.Error) return e.errorDescription.solution_id ? e.errorDescription.solution_id : function(e) {
                    for (const t of Array.from(l.keys()))
                        if (e.includes(t)) return l.get(t)
                }(e.errorDescription.error)
            }

            function _(e) {
                if (e.type === h.Error) return -1 !== e.errorDescription.error.toLowerCase().indexOf("the data vendor doesn't provide volume data for this symbol.") ? o : void 0
            }

            function p(e) {
                const {
                    errorDescription: {
                        error: t
                    }
                } = e;
                for (const [e, i] of a)
                    if (t.startsWith(e)) return i
            }! function(e) {
                e[e.Undefined = 0] = "Undefined", e[e.Loading = 1] = "Loading", e[e.Completed = 2] = "Completed", e[e.Error = 3] = "Error"
            }(h || (h = {}))
        },
        216392: (e, t, i) => {
            i.d(t, {
                StudyValuesProvider: () => v
            });
            var s = i(150335),
                r = i(638456),
                n = i(114123),
                o = i(495046),
                l = i(812363),
                a = i(414805),
                d = i(480071),
                h = i(519872),
                u = i(755695),
                c = i(386482),
                _ = i(801750),
                p = i(650151),
                f = i(943546);
            const y = r.CheckMobile.any(),
                m = o.enabled("hide_last_na_study_output");
            class v {
                constructor(e, t) {
                    this._emptyValues = [], this._colorProviders = new Map, this._study = e, this._model = t, this._studyMetaInfo = this._study.metaInfo(), this._studyProperties = this._study.properties().childs(), this._isFundamental = (0, c.isFundamentalStudyMetaInfo)(this._studyMetaInfo);
                    const i = this._studyMetaInfo.plots;
                    i && i.forEach(((e, t) => {
                        if ((0, h.isPlotWithTechnicalValues)(e)) return;
                        const i = e.id;
                        this._emptyValues.push(function(e, t = "", i = "") {
                            return {
                                id: t,
                                index: e,
                                title: i,
                                value: "",
                                visible: !1
                            }
                        }(t, i, this._study.guiPlotName(i)));
                        const s = (0, h.isOhlcPlot)(e) ? e.target : i;
                        this._colorProviders.set(s, (0, u.createStudyPlotColorProvider)(this._studyMetaInfo, this._study.properties(), s))
                    }))
                }
                getItems() {
                    return this._emptyValues
                }
                getPlotColor(e, t) {
                    var i;
                    const r = t[e + 1];
                    if (!(0, s.isNumber)(r)) return "";
                    const n = r > 0;
                    let o;
                    const l = this._studyMetaInfo.plots[e];
                    let a = l.id;
                    const d = this._studyProperties;
                    if ((0, h.isOhlcPlot)(l)) a = l.target || a, o = (0, p.ensureDefined)(d.ohlcPlots.childs()[a].childs().color).value();
                    else if ((0, h.isArrowsPlot)(l)) {
                        const e = (0, p.ensureDefined)(d.styles.childs()[a]);
                        o = n ? e.childs().colorup.value() : e.childs().colordown.value()
                    } else o = (0, p.ensureDefined)(null === (i = d.styles.childs()[a]) || void 0 === i ? void 0 : i.child("color")).value();
                    let u = o;
                    const c = this._colorProviders.get(a),
                        _ = c && c.getPlotPointStyle(t);
                    return _ && ((0, h.isArrowsPlot)(l) ? (n && void 0 !== _.colors[5] && (u = _.colors[5]), n || void 0 === _.colors[6] || (u = _.colors[6])) : void 0 !== _.colors[0] && (u = _.colors[0])), "transparent" === u && (u = o), u
                }
                getValues(e) {
                    var t, i;
                    const r = this._emptyValues.map((e => ({ ...e
                    })));
                    let o = null;
                    const a = this._study.data().lastIndex(),
                        d = this._studyProperties;
                    if (null !== a)
                        for (const e of r) {
                            if (0 === (null === (t = d.styles.childs()[e.id]) || void 0 === t ? void 0 : t.childs().display.value())) continue;
                            const i = this._study.nearestIndex(a, l.PlotRowSearchMode.NearestLeft, e.index + 1);
                            if (void 0 === i) continue;
                            const s = i + this._study.offset(e.id);
                            o = null !== o ? Math.max(s, o) : s
                        }(null === e || null !== o && e > o) && (e = o);
                    const u = this._hideValues(),
                        c = this._study.isVisible() && !u ? f.notAvailable : "";
                    for (const e of r) e.value = c;
                    if (u) return r;
                    m && r.length && (r[r.length - 1].value = "");
                    const y = this._study.priceScale();
                    if (!this._study.isVisible() || null === e || null === y || y.isEmpty() || this._model.timeScale().isEmpty()) return r;
                    const v = (0, _.getPriceValueFormatterForSource)(this._study),
                        g = {};
                    for (const t of r) {
                        const r = t.id,
                            o = (0, p.ensureDefined)(d.styles.childs()[r]),
                            u = o.childs().display.value();
                        if (t.visible = 0 !== u, !t.visible) continue;
                        const c = o.hasChild("plottype") ? null === (i = o.child("plottype")) || void 0 === i ? void 0 : i.value() : null,
                            _ = this._isFundamental && (c === h.LineStudyPlotStyle.StepLine || c === h.LineStudyPlotStyle.StepLineWithDiamonds),
                            f = t.index,
                            y = e - this._study.offset(r),
                            m = _ || null !== a && y > a ? l.PlotRowSearchMode.NearestLeft : l.PlotRowSearchMode.Exact,
                            S = this._study.nearestIndex(y, m);
                        if (void 0 === S) continue;
                        let b = g[r];
                        if (void 0 === b && (b = this._study.getMinFirstBarIndexForPlot(r), Number.isFinite(b) && (g[r] = b)), b > S) continue;
                        const w = this._study.data().last(),
                            P = this._study.data().valueAt(S) || (null !== w ? w.value : null);
                        if (null === P) continue;
                        const x = P[f + 1];
                        (0, s.isNumber)(x) && (t.value = v(x), t.color = (0, n.resetTransparency)(this.getPlotColor(f, P)))
                    }
                    return r
                }
                _hideValues() {
                    return y && (null === this._model.crossHairSource().pane || (0, a.isLineToolName)(d.tool.value()) || null !== this._model.lineBeingEdited())
                }
            }
        },
        788777: (e, t, i) => {
            i.d(t, {
                StudyBase: () => ei,
                prepareStudyProperties: () => $t,
                prepareStudyPropertiesForLoadChart: () => Zt
            });
            var s = i(316230),
                r = i(822914),
                n = i(650151),
                o = i(777754),
                l = i(272001),
                a = i(638456),
                d = i(809350),
                h = i(212110),
                u = i(921303),
                c = i(333429),
                _ = i(26045);

            function p(e) {
                const t = e.metaInfo();
                if (!0 === t.historyCalculationMayChange) return _.DataSourceDangerReason.PineRepainting;
                const i = t.inputs.filter((e => "symbol" === e.type)).map((e => e.id));
                for (const t of i) {
                    const i = e.properties().childs().inputs.childs()[t].value(),
                        s = e.resolvedSymbolInfoBySymbol(i);
                    if (s) {
                        if ("spread" === s.type) return _.DataSourceDangerReason.Spread;
                        if ("CRYPTOCAP" === s.exchange) return _.DataSourceDangerReason.CryptoCap
                    }
                }
                const s = e.ownerSource();
                return e.isChildStudy() && s ? p(s) : null
            }
            var f = i(933024),
                y = i(293689),
                m = i(508846),
                v = i(527538),
                g = i(960254),
                S = i(869403),
                b = i.n(S),
                w = i(325925),
                P = i(730293),
                x = i(168210),
                C = i(884566),
                I = i(108184),
                T = i(231639),
                V = i(812363),
                M = i(96841),
                R = i(45195),
                A = i(155268),
                L = i(519872);
            class B extends R.StudyBaseWindowView {
                constructor(e, t) {
                    super(e, t), this._showStudyValues = t.properties().childs().paneProperties.childs().legendProperties.childs().showStudyValues, this._showStudyValues.subscribe(this, this.update);
                    const i = this._study.properties();
                    i.childs().showLegendValues.subscribe(this, this.update);
                    const s = this._study.metaInfo().plots,
                        r = new Set;
                    s.forEach((e => {
                        var t;
                        if ((0, L.isOhlcPlot)(e)) {
                            const t = e.target;
                            if (r.has(t)) return;
                            r.add(t), i.childs().ohlcPlots.childs()[t].childs().display.subscribe(this, this.update)
                        } else(0, L.isPlotSupportDisplay)(e) && (null === (t = i.childs().styles.childs()[e.id]) || void 0 === t || t.childs().display.subscribe(this, this.update))
                    }))
                }
                areValuesVisible() {
                    return this._showStudyValues.value()
                }
                additional() {
                    return null
                }
                destroy() {
                    this._showStudyValues.unsubscribeAll(this);
                    const e = this._study.properties();
                    e.childs().showLegendValues.unsubscribeAll(this);
                    const t = this._study.metaInfo().plots,
                        i = new Set;
                    t.forEach((t => {
                        var s;
                        if ((0, L.isOhlcPlot)(t)) {
                            const s = t.target;
                            if (i.has(s)) return;
                            i.add(s), e.childs().ohlcPlots.childs()[s].childs().display.unsubscribe(this, this.update)
                        } else(0, L.isPlotSupportDisplay)(t) && (null === (s = e.childs().styles.childs()[t.id]) || void 0 === s || s.childs().display.unsubscribe(this, this.update))
                    }))
                }
                _createValuesProvider(e, t) {
                    return new A.StudyLegendValuesProvider(e, t)
                }
            }
            var O = i(480071),
                D = i(397581),
                k = i(7628),
                N = i(200821),
                E = i(477679),
                F = i(431235),
                W = i(40210),
                H = i.n(W),
                z = i(758337),
                U = i(951512),
                G = i(547465);
            class Y {
                constructor(e, t, i = !1) {
                    this.price = t, this.index = e, this.useMainSeriesForPriceRange = i
                }
            }
            var j = i(117168);

            function K(e, t, i, s) {
                if (e.y1 === e.y2) return function(e, t, i) {
                    return (0, n.assert)(e.y1 === e.y2), (0, j.doesItemAffectVisibleRange)(e.x1, e.x2, e.extend, t, i) ? [new Y(t, e.y1, !1), new Y(i, e.y2, !1)] : []
                }(e, i, s);
                const r = [];
                return null !== e.x1 && r.push(new Y(e.x1, e.y1, !1)), null !== e.x2 && r.push(new Y(e.x2, e.y2, !1)), r
            }

            function $(e, t, i, s) {
                return (0, j.doesItemAffectVisibleRange)(e.left, e.right, e.extend, i, s) ? [new Y(i, e.top, !1), new Y(s, e.bottom, !1)] : []
            }
            var q = i(650883);

            function X(e, t, i, s) {
                let r;
                const n = e.yloc !== q.DwgLabelYloc.Price && e.yloc !== q.DwgLabelYloc.Auto;
                if (n) {
                    const i = e.yloc === q.DwgLabelYloc.AboveBar ? 2 : 3,
                        s = t.valueAt(e.x);
                    null !== s && (r = s[i])
                } else r = e.y;
                return null == r ? null : [new Y(e.x, r, n)]
            }

            function J() {
                return {
                    topPixelMargin: 0,
                    bottomPixelMargin: 0
                }
            }
            class Z {
                constructor(e, t, i, s, r) {
                    this._map = e, this._study = t, this._bars = t.series().bars(), this._props = (0, n.ensureDefined)(t.properties().childs().graphics).childs()[i], this._getPoints = s, this._getMargins = r
                }
                groupPriceRange(e, t) {
                    let i = null;
                    for (const [s, r] of this._map)
                        if (this._props[s].visible.value())
                            for (const s of r) {
                                const r = this._getPoints(s, this._bars, e, t);
                                if (null === r) continue;
                                let n = 1 / 0,
                                    o = -1 / 0,
                                    l = !1,
                                    a = !1,
                                    d = !1;
                                for (const i of r) {
                                    const s = i.index <= t,
                                        r = i.index >= e;
                                    l = l || s, a = a || r, d = d || s && r;
                                    let h = i.price,
                                        u = i.price;
                                    if (i.useMainSeriesForPriceRange) {
                                        const e = this._bars.valueAt(i.index);
                                        if (null === e) continue;
                                        const t = e[2];
                                        if (null == t) continue;
                                        const s = e[3];
                                        if (null == s) continue;
                                        h = s, u = t
                                    }
                                    h < n && (n = h), u > o && (o = u)
                                }
                                if (!(d || l && a)) continue;
                                const h = new x.PriceRange(n, o);
                                i = null === i ? h : i.merge(h)
                            }
                    return i
                }
                firstValue(e, t) {
                    let i = 1 / 0,
                        s = 1 / 0,
                        r = -1 / 0,
                        n = 1 / 0,
                        o = 1 / 0,
                        l = 1 / 0;
                    for (const [a, d] of this._map)
                        if (this._props[a].visible.value())
                            for (const a of d) {
                                const d = this._getPoints(a, this._bars, e, t);
                                if (null !== d)
                                    for (const a of d) {
                                        const d = a.index;
                                        d >= e && d <= t && d < i ? (i = d, s = a.price) : d < e && d > r ? (r = d, n = a.price) : d > t && d < o && (o = d, l = a.price)
                                    }
                            }
                    return {
                        firstVisible: i === 1 / 0 ? null : new Y(i, s),
                        leftClosest: r === -1 / 0 ? null : new Y(r, n),
                        rightClosest: o === 1 / 0 ? null : new Y(o, l)
                    }
                }
                groupPixelMargins(e, t) {
                    const i = {
                        topPixelMargin: 0,
                        bottomPixelMargin: 0
                    };
                    if (null === this._study.priceScale()) return i;
                    if (null === this._study.firstValue()) return i;
                    for (const [s, r] of this._map)
                        if (this._props[s].visible.value())
                            for (const s of r) {
                                const r = this._getPoints(s, this._bars, e, t);
                                if (null === r) continue;
                                if (0 === r.filter((i => {
                                        const s = i.index;
                                        return s >= e && s <= t
                                    })).length) continue;
                                const n = this._getMargins(s, this._bars);
                                i.bottomPixelMargin = Math.max(i.bottomPixelMargin, n.bottomPixelMargin), i.topPixelMargin = Math.max(i.topPixelMargin, n.topPixelMargin)
                            }
                    return i
                }
            }
            const Q = () => ({
                bottomPixelMargin: 0,
                topPixelMargin: 0
            });

            function ee(e, t, i) {
                const s = e.graphics(),
                    r = s.dwglines();
                let n;
                return [new Z(s.dwglabels(), e, "dwglabels", X, G.calculateDwgLabelsMargins.bind(null, e)), new Z(r, e, "dwglines", K, Q), new Z(s.dwgboxes(), e, "dwgboxes", $, Q), new Z(s.dwglinefills(), e, "dwglinefills", ((e, t, i, s) => {
                    if (void 0 === n) {
                        n = new Map;
                        for (const [, e] of r)
                            for (const t of e) n.set(t.id, t)
                    }
                    return function(e, t, i, s, r) {
                        const n = e.get(t.line1),
                            o = e.get(t.line2);
                        return void 0 !== n && void 0 !== o && ((0, j.doesItemAffectVisibleRange)(n.x1, n.x2, n.extend, s, r) || (0, j.doesItemAffectVisibleRange)(o.x1, o.x2, o.extend, s, r)) ? [new Y(s, n.y1, !1), new Y(r, n.y2, !1), new Y(s, o.y1, !1), new Y(r, o.y2, !1)] : []
                    }(n, e, 0, i, s)
                }), J)]
            }

            function te(e, t, i) {
                return null === t ? e : null === e ? t : e.index < t.index ? i ? t : e : i ? e : t
            }
            class ie {
                constructor() {
                    this.firstVisible = null, this.leftClosest = null, this.rightClosest = null
                }
                improve(e) {
                    this.firstVisible = te(this.firstVisible, e.firstVisible, !0), this.leftClosest = te(this.leftClosest, e.leftClosest, !0), this.rightClosest = te(this.rightClosest, e.rightClosest, !1)
                }
                bestPrice() {
                    return null !== this.firstVisible ? this.firstVisible.price : null !== this.leftClosest ? this.leftClosest.price : null !== this.rightClosest ? this.rightClosest.price : null
                }
            }
            var se = i(125226);

            function re(e, t) {
                return e.studyId.localeCompare(t.studyId)
            }

            function ne(e) {
                const t = new Set,
                    i = [];
                return e.forEach((e => {
                    t.has(e.studyId) || (t.add(e.studyId), i.push(e))
                })), i
            }

            function oe(e) {
                const t = e.model().mainSeries();
                return {
                    studyId: (0, n.ensureNotNull)(e.sourceId()),
                    turnaround: e.turnaround(),
                    sourceStudies: e.parentSources().filter((e => e !== t)).map((e => oe(e)))
                }
            }
            var le = i(573774),
                ae = i(495046),
                de = i(86441),
                he = i(114123),
                ue = i(28035);
            class ce {
                constructor(e) {
                    this._data = e
                }
                draw(e, t) {}
                drawBackground(e, t) {
                    e.save();
                    const i = this._data,
                        s = t.pixelRatio;
                    let r = null;
                    const n = Math.round(this._data.w * s);
                    for (let t = 0; t < i.items.length; ++t) {
                        const o = i.items[t];
                        if (null == o.color) {
                            r = null;
                            continue
                        }
                        e.fillStyle = o.color;
                        const l = Math.round(o.x * s);
                        let a = l;
                        if (t > 0) {
                            i.items[t - 1].index === o.index - 1 && null !== r && (a = r + 1)
                        }
                        const d = l + n,
                            h = d - a + 1;
                        e.fillRect(a, Math.round(i.y * s), h, Math.round(i.h * s)), r = d
                    }
                    e.restore()
                }
                hitTest(e) {
                    return null
                }
            }
            var _e = i(755695);
            class pe {
                constructor(e, t, i, s) {
                    this._items = [], this._invalidated = !0, this._isMarkersEnabled = ae.enabled("source_selection_markers"), this._study = e, this._series = t, this._model = i, this._plotName = s;
                    const r = this._study.metaInfo().plots;
                    for (let e = 0; e < r.length; e++) {
                        const t = r[e];
                        t.id === this._plotName && (this._plotIndex = e, (0, n.assert)((0, L.isBgColorerPlot)(t), "Plot '" + this._plotName + "' is not a background colorer!"))
                    }
                    this._colorProvider = (0, _e.createStudyPlotColorProvider)(e.metaInfo(), e.properties(), s)
                }
                items() {
                    return this._items
                }
                update() {
                    this._invalidated = !0
                }
                renderer() {
                    if (1 != (1 & (0, n.ensureDefined)(this._study.properties().childs().styles.childs()[this._plotName]).childs().display.value())) return null;
                    if (!this._scalesReady()) return null;
                    this._invalidated && (this._updateImpl(), this._invalidated = !1);
                    const e = {
                            items: this._items,
                            y: 0,
                            h: (0, n.ensureNotNull)(this._study.priceScale()).height(),
                            w: this._model.timeScale().barSpacing()
                        },
                        t = new ue.CompositeRenderer;
                    return t.append(new ce(e)), t
                }
                _scalesReady() {
                    const e = this._model.timeScale(),
                        t = this._study.priceScale();
                    return e && !e.isEmpty() && null !== t && !t.isEmpty()
                }
                _getTranspValue() {
                    const e = (0, n.ensureDefined)(this._study.properties().childs().styles.childs()[this._plotName]).childs();
                    let t = 0;
                    return e.transparency && (t = e.transparency.value(), t = (0, z.isNumber)(t) ? t : 40), t
                }
                _updateImpl() {
                    this._items = [], (0, n.assert)(this._scalesReady(), "Scales must be ready!");
                    const e = this._model.timeScale().visibleBarsStrictRange();
                    if (null === e) return;
                    const t = this._getTranspValue();
                    let i = (0, n.ensureDefined)(this._series.nearestIndex(e.firstBar(), V.PlotRowSearchMode.NearestRight)),
                        s = (0, n.ensureDefined)(this._series.nearestIndex(e.lastBar(), V.PlotRowSearchMode.NearestLeft));
                    const r = this._study.offset(this._plotName);
                    r > 0 ? (i -= r, s += r) : (i += r, s -= r);
                    const o = this._study.getMinFirstBarIndexForPlot(this._plotName);
                    if (o > s) return;
                    i = Math.max(o, i);
                    const l = this._study.data().rangeIterator(i, s);
                    for (; l.hasNext();) {
                        const e = l.next();
                        let i = e.index;
                        const s = e.value;
                        i += r;
                        const o = new de.Point(Math.floor(i) - .5, NaN);
                        let a = (0, z.isNumber)(t) ? t : 50;
                        a = Math.min(a, 100), a = Math.max(a, 0);
                        const d = this._colorProvider.getPlotPointStyle(s);
                        void 0 !== d.colors[1] && (o.color = (0, he.generateColor)((0, n.ensureDefined)(d.colors[1]), a)), o.index = i, this._items.push(o)
                    }
                    this._model.timeScale().timedValuesToCoordinates(this._items)
                }
            }
            var fe = i(583110),
                ye = i(392462),
                me = i(43329),
                ve = i(858063),
                ge = i(847314),
                Se = i(311854),
                be = i(394683),
                we = i(664348),
                Pe = i(385470),
                xe = i(753346),
                Ce = i(644001),
                Ie = i(32895),
                Te = i(696720),
                Ve = i(472068),
                Me = i(21720),
                Re = i(8075);
            const Ae = new Map;
            Ae.set("PaneRendererArrowUp", we.PaneRendererArrowUp), Ae.set("PaneRendererArrowDown", we.PaneRendererArrowDown), Ae.set("PaneRendererCircleShape", Pe.PaneRendererCircleShape), Ae.set("PaneRendererCrossShape", xe.PaneRendererCrossShape), Ae.set("PaneRendererDiamond", Ce.PaneRendererDiamond), Ae.set("PaneRendererFlagShape", Ie.PaneRendererFlagShape), Ae.set("PaneRendererLabelUp", Te.PaneRendererLabelUp), Ae.set("PaneRendererLabelDown", Te.PaneRendererLabelDown), Ae.set("PaneRendererSquare", Ve.PaneRendererSquare), Ae.set("PaneRendererTriangleApexUp", Me.PaneRendererTriangleApexUp), Ae.set("PaneRendererTriangleApexDown", Me.PaneRendererTriangleApexDown), Ae.set("PaneRendererXCross", Re.PaneRendererXCross);
            class Le {
                constructor(e, t, i, s) {
                    var r;
                    this._items = [], this._invalidated = !1, this._renderer = null, this._isMarkersEnabled = ae.enabled("source_selection_markers"), this._selectionData = null, this._plotIndex = null, this._topCoord = 0, this._bottomCoord = 0, this._study = e, this._series = t, this._model = i, this._plotName = s;
                    const o = e.metaInfo().plots;
                    for (let e = 0; e < o.length; e++)
                        if (o[e].id === this._plotName) {
                            this._plotIndex = e;
                            break
                        }
                    this._plotStyleInfo = (0, n.ensureDefined)(null === (r = e.metaInfo().styles) || void 0 === r ? void 0 : r[this._plotName]), this._colorProvider = (0, _e.createStudyPlotColorProvider)(e.metaInfo(), e.properties(), s), this._selectionIndexer = new ge.SelectionIndexes(i.timeScale())
                }
                items() {
                    return this._items
                }
                update() {
                    this._invalidated = !0
                }
                renderer() {
                    if (!this._isPlotVisible() || !this._scalesReady()) return null;
                    if (this._invalidated) {
                        const e = this._study.properties().childs().styles.childs()[this._plotName];
                        this._updateRenderer(e), this._invalidated = !1
                    }
                    return this._renderer
                }
                _isPlotVisible() {
                    return this._study.isPlotVisibleAt(this._plotName, 1)
                }
                _scalesReady() {
                    const e = this._model.timeScale(),
                        t = this._study.priceScale();
                    return e && null !== t && !e.isEmpty() && !t.isEmpty()
                }
                _updateImpl() {
                    if (this._items = [], !this._scalesReady()) return;
                    const e = this._model.timeScale(),
                        t = this._study.priceScale(),
                        i = e.visibleBarsStrictRange();
                    if (null === i || null === t) return;
                    let s = this._series.nearestIndex(i.firstBar(), V.PlotRowSearchMode.NearestRight),
                        r = this._series.nearestIndex(i.lastBar(), V.PlotRowSearchMode.NearestLeft);
                    if (void 0 === s || void 0 === r) return;
                    const o = this._study.offset(this._plotName);
                    o > 0 ? (s -= o, r += o) : (s += o, r -= o);
                    const l = this._study.getMinFirstBarIndexForPlot(this._plotName);
                    if (l > r) return;
                    s = Math.max(l, s);
                    const a = this._study.data(),
                        d = this._study.firstValue();
                    if (null === d) return;
                    const h = a.rangeIterator(s, r),
                        u = this._getTranspValue();
                    let c = [];
                    const _ = this._model.selection().isSelected(this._study);
                    _ ? (c = this._selectionIndexer.indexes(), this._selectionData = {
                        points: [],
                        hittestResult: ve.HitTestResult.REGULAR,
                        vertOffset: 0,
                        bgColors: [],
                        barSpacing: e.barSpacing(),
                        visible: !0
                    }) : (this._selectionIndexer.clear(), this._selectionData = null);
                    const p = this._series.properties().childs().style.value(),
                        f = 2 === p ? "lineStyle" : 3 === p ? "areaStyle" : null;
                    let y, m;
                    f ? (y = this._series.properties().childs()[f].childs().priceSource.value(), m = y) : (y = "high", m = "low");
                    const v = t.isInverted(),
                        g = t.coordinateToPrice(t.height() * t.topMargin(), d),
                        S = t.coordinateToPrice(t.height() * (1 - t.bottomMargin()), d);
                    this._topCoord = v ? S : g, this._bottomCoord = v ? g : S;
                    const b = (0, n.ensureNotNull)(this._model.paneForSource(this._study)).height(),
                        w = this._study.properties().childs().styles.childs()[this._plotName].childs(),
                        P = w.color.value(),
                        x = w.textColor ? w.textColor.value() : void 0,
                        C = P,
                        I = P,
                        T = void 0 === x ? void 0 : x,
                        M = (0, n.ensureNotNull)(this._plotIndex),
                        R = (0, be.createEmptyStyle)();
                    for (; h.hasNext();) {
                        const e = h.next(),
                            t = e.index,
                            i = e.value,
                            s = Math.floor(t + o),
                            r = i[M + 1];
                        if (null == r) continue;
                        const n = this._createItem(s, r, y, m);
                        if (null !== n) {
                            if (this._colorProvider.isColorDefined()) {
                                n.style = {
                                    color: C,
                                    borderColor: I,
                                    textColor: T
                                };
                                const e = this._colorProvider.getPlotPointStyle(i, R);
                                this._fillItemWithPointStyle(n, e, u)
                            }
                            _ && -1 !== c.indexOf(t) && null !== this._selectionData && (this._selectionData.points.push(n), this._selectionData.bgColors.push(this._model.backgroundColorAtYPercentFromTop(n.y / b))), this._items.push(n)
                        }
                    }
                    this._convertItemsToCoordinates()
                }
                _fillItemWithPointStyle(e, t, i) {
                    const s = (0, n.ensureDefined)(e.style);
                    if (void 0 !== t.colors[0]) {
                        s.color = (0, he.generateColor)((0, n.ensureDefined)(t.colors[0]), i);
                        const e = i > 9 ? i - 10 : 0;
                        s.borderColor = (0, he.generateColor)(s.color, e)
                    }
                    void 0 !== t.colors[2] && (s.textColor = (0, he.generateColor)((0, n.ensureDefined)(t.colors[2]), i))
                }
                _updateRenderer(e) {
                    this._updateImpl();
                    const t = this._model.timeScale(),
                        i = {},
                        s = this._getTranspValue(),
                        r = t.barSpacing(),
                        n = this._calculateShapeHeight(r),
                        o = this._study.properties().childs().styles.childs()[this._plotName].childs(),
                        l = o.location.value(),
                        a = this._calculateVerticalOffset(l, n + n / 2);
                    i.barSpacing = r, i.items = this._items, i.color = (0, he.generateColor)(o.color.value(), s), i.height = n, i.vertOffset = a;
                    const d = o.plottype.value(),
                        h = ye.plotShapesData[d],
                        u = new ue.CompositeRenderer;
                    h && u.append(this._createRenderer(h.paneRendererClass, i)), this._model.selection().isSelected(this._study) && this._isMarkersEnabled && null !== this._selectionData && (this._selectionData.vertOffset = a, u.append(new fe.SelectionRenderer(this._selectionData))), this._renderer = u
                }
                _createRenderer(e, t) {
                    const i = Ae.get(e);
                    return new((0, n.ensureDefined)(i))(t)
                }
                _getSeriesVal(e, t) {
                    const i = (0, Se.barFunction)(e),
                        s = this._series.data().valueAt(t);
                    return null === s ? null : i(s)
                }
                _getTranspValue() {
                    let e = 0;
                    const t = this._study.properties().childs();
                    t.transparency && (e = t.transparency.value(), e = (0, z.isNumber)(e) ? e : 50);
                    const i = t.styles.childs()[this._plotName].childs();
                    return i.transparency && (e = i.transparency.value(), e = (0, z.isNumber)(e) ? e : 50), (0, me.clamp)(e, 0, 100)
                }
                _createItem(e, t, i, s) {
                    const r = this._study.properties().childs().styles.childs()[this._plotName].childs().location.value();
                    if ((null === t || 0 === t) && r !== M.MarkLocation.Absolute) return null;
                    let o;
                    switch (r) {
                        case M.MarkLocation.AboveBar:
                            const l = this._getSeriesVal(i, e);
                            if (null === l) return null;
                            o = l;
                            break;
                        case M.MarkLocation.BelowBar:
                            const a = this._getSeriesVal(s, e);
                            if (null === a) return null;
                            o = a;
                            break;
                        case M.MarkLocation.Top:
                            o = this._topCoord;
                            break;
                        case M.MarkLocation.Bottom:
                            o = this._bottomCoord;
                            break;
                        case M.MarkLocation.Absolute:
                            o = (0, n.ensureNotNull)(t);
                            break;
                        default:
                            throw new Error("Bad value: " + r)
                    }
                    return new de.Point(e, o)
                }
                _convertItemsToCoordinates() {
                    const e = this._model.timeScale(),
                        t = this._study.priceScale();
                    e.timedValuesToCoordinates(this._items);
                    const i = (0, n.ensureNotNull)(this._study.firstValue());
                    (0, n.ensureNotNull)(t).pointsArrayToCoordinates(this._items, i)
                }
                _calculateVerticalOffset(e, t) {
                    let i = 0;
                    switch (e) {
                        case M.MarkLocation.AboveBar:
                        case M.MarkLocation.Bottom:
                            i = -t;
                            break;
                        case M.MarkLocation.BelowBar:
                        case M.MarkLocation.Top:
                            i = t
                    }
                    return (0, n.ensureNotNull)(this._study.priceScale()).isInverted() && (i *= -1), i
                }
                _calculateShapeHeight(e, t) {
                    let i = e;
                    switch (t) {
                        case L.PlotSymbolSize.Tiny:
                            i = .3 * e;
                            break;
                        case L.PlotSymbolSize.Small:
                            i = .6 * e;
                            break;
                        case L.PlotSymbolSize.Normal:
                            i = e;
                            break;
                        case L.PlotSymbolSize.Large:
                            i = 1.5 * e;
                            break;
                        case L.PlotSymbolSize.Huge:
                            i = 2 * e
                    }
                    return i
                }
            }
            class Be extends Le {
                _updateRenderer(e) {
                    const t = e.childs();
                    this._updateImpl();
                    const i = this._model.timeScale(),
                        s = {},
                        r = this._getTranspValue(),
                        n = i.barSpacing();
                    let o;
                    o = this._plotStyleInfo.size ? this._calculateShapeHeight(25, this._plotStyleInfo.size) : Math.round(n / 2), o = Math.max(o, 1);
                    const l = t.location.value(),
                        a = (0, he.generateColor)(t.color.value(), r),
                        h = r > 19 ? r - 10 : 0,
                        u = this._calculateVerticalOffset(l, Math.round(1.5 * o));
                    s.barSpacing = n, s.items = this.items(), s.color = a, s.borderColor = (0, he.generateColor)(t.color.value(), h), s.height = o, s.vertOffset = u;
                    const c = t.plottype.value(),
                        _ = ye.plotShapesData[c],
                        p = new ue.CompositeRenderer,
                        f = this._plotStyleInfo.text;
                    if (void 0 !== f && "" !== f.trim()) {
                        let e = f.trim().replace(/\\n/gm, "\n");
                        e = (0, d.cleanButAmpersand)(e, !0), s.text = e, s.fontSize = 12;
                        const i = t.textColor ? t.textColor.value() : void 0;
                        s.textColor = i ? (0, he.generateColor)(i, r) : a
                    }
                    p.append(super._createRenderer(_.paneRendererClass, s)), this._model.selection().isSelected(this._study) && this._isMarkersEnabled && null !== this._selectionData && (this._selectionData.vertOffset = u, p.append(new fe.SelectionRenderer(this._selectionData))), this._renderer = p
                }
            }
            var Oe = i(687795),
                De = i.n(Oe),
                ke = i(438230),
                Ne = i(837291),
                Ee = i(623331),
                Fe = i(482152);
            class We extends ke.PaneRendererAbstractShape {
                constructor(e, t) {
                    super(null, t), this._fontSizeEnsured = 0, this._ch = "", this._fontFamily = Ee.CHART_FONT_FAMILY, this._charCache = null, null !== e && this.setData(e)
                }
                setData(e) {
                    super.setData(e), this._fontSizeEnsured = (0, n.ensureDefined)(this._height);
                    const t = e.char.slice(0, 40);
                    this._ch = De()(t)[0] || " ", this._fontFamily = e.fontFamily || Ee.CHART_FONT_FAMILY
                }
                hitTest(e) {
                    const t = (0, Ne.interactionTolerance)().series + this._fontSizeEnsured / 2;
                    for (const i of this._items) {
                        if (new de.Point(i.x, i.y + i.vertOffset).subtract(e).length() <= t) return new ve.HitTestResult(ve.HitTestResult.REGULAR)
                    }
                    return null
                }
                _drawItemShape(e, t, i) {
                    const s = i.x,
                        r = i.vertOffset > 0 ? 1 : -1,
                        n = i.y + i.vertOffset - r * Math.round(this._fontSizeEnsured / 2);
                    let o;
                    o = i.style && void 0 !== i.style.color ? i.style.color : this._color;
                    const l = this._textImageCache(),
                        a = t.pixelRatio;
                    if (this._fontSizeEnsured <= 4 / a) {
                        e.save();
                        const t = Math.max(1, Math.floor(a));
                        let r = Math.max(1, Math.floor(l.textImageWidth * a));
                        r % 2 != t % 2 && (r += r > 1 ? -1 : 1);
                        const d = Math.round(n * a) + (i.vertOffset >= 0 ? 0 : -r);
                        return e.fillStyle = o, e.fillRect(Math.round(s * a) + (a % 2 ? .5 : 0) - r / 2, d, r, r), void e.restore()
                    }
                    const d = {
                        style: {
                            fillStyle: o
                        },
                        location: {
                            x: s,
                            y: n,
                            horzAlign: Fe.HorizontalAlign.Center,
                            vertAlign: i.vertOffset > 0 ? Fe.VerticalAlign.Top : Fe.VerticalAlign.Bottom
                        }
                    };
                    l.paintTo(e, t, d)
                }
                _startPath(e, t, i, s) {}
                _endPath(e) {}
                _textImageCache() {
                    return null !== this._charCache && this._charCache.fontFamily === this._fontFamily && this._charCache.fontSize === this._fontSizeEnsured || (this._charCache = {
                        fontSize: this._fontSizeEnsured,
                        fontFamily: this._fontFamily,
                        cache: new Fe.TextImageCache(this._ch, !1, !1, this._fontFamily, this._fontSizeEnsured, "center", 0)
                    }), this._charCache.cache
                }
            }
            class He extends Le {
                constructor() {
                    super(...arguments), this._compositeRenderer = new ue.CompositeRenderer, this._charRenderer = new We(null)
                }
                renderer() {
                    return this._isPlotVisible() && this._scalesReady() ? (this._invalidated && (this._updateImpl(), this._invalidated = !1), this._compositeRenderer) : null
                }
                _updateImpl() {
                    var e, t;
                    if (this._compositeRenderer.clear(), super._updateImpl(), 0 === this._items.length) return;
                    const i = this._getTranspValue(),
                        s = this._model.timeScale().barSpacing();
                    let r;
                    const o = this._study.properties().childs().styles.childs()[this._plotName].childs();
                    r = this._plotStyleInfo.size ? this._calculateShapeHeight(50, this._plotStyleInfo.size) : Math.round(s);
                    const l = o.location.value(),
                        a = (0,
                            he.generateColor)(o.color.value(), i),
                        h = this._calculateVerticalOffset(l, r),
                        u = {
                            items: this.items(),
                            barSpacing: s,
                            char: (0, n.ensureDefined)(null !== (t = null === (e = o.char) || void 0 === e ? void 0 : e.value()) && void 0 !== t ? t : this._plotStyleInfo.char),
                            height: r,
                            vertOffset: h,
                            color: a
                        },
                        c = this._plotStyleInfo.text;
                    if (void 0 !== c && "" !== c.trim()) {
                        let e = c.trim().replace(/\\n/gm, "\n");
                        e = (0, d.cleanButAmpersand)(e, !0), u.text = e, u.fontSize = 12;
                        const t = o.textColor ? o.textColor.value() : void 0;
                        u.textColor = t ? (0, he.generateColor)(t, i) : a
                    }
                    this._charRenderer.setData(u), this._compositeRenderer.append(this._charRenderer), this._model.selection().isSelected(this._study) && this._isMarkersEnabled && null !== this._selectionData && (this._selectionData.vertOffset = h, this._compositeRenderer.append(new fe.SelectionRenderer(this._selectionData)))
                }
            }
            var ze = i(724377);
            class Ue extends de.Point {
                constructor(e, t, i, s) {
                    super(e, t), this.height = i, this.isUp = s, this.style = {}
                }
            }

            function Ge(e) {
                return Math.round(e / 4)
            }

            function Ye(e) {
                return Math.round(e / 2)
            }
            class je {
                constructor(e) {
                    this._data = e
                }
                draw(e, t) {
                    var i;
                    const s = t.pixelRatio,
                        r = this._data,
                        n = Ye(r.barSpacing),
                        o = Ge(r.barSpacing),
                        l = n < 4,
                        a = Math.max(n / 2, 1),
                        d = (0, me.ceiledEven)(n * s),
                        h = d / 2,
                        u = Math.round(n * s);
                    e.lineCap = "butt", e.lineWidth = Math.max(1, Math.floor(s));
                    const c = e.lineWidth % 2 ? .5 : 0;
                    for (const t of r.items) {
                        const n = t.isUp ? -1 : 1,
                            _ = Math.round(Math.abs(t.height) * s),
                            p = Math.round(t.x * s) + c,
                            f = Math.round((t.y - n * o) * s) + c;
                        e.beginPath(), e.translate(p, f);
                        const y = null !== (i = t.style && t.style.color) && void 0 !== i ? i : t.isUp ? r.colorup : r.colordown;
                        l ? (e.moveTo(0, 0), e.lineTo(-h, -h * n), e.moveTo(0, 0), e.lineTo(h, -h * n), e.moveTo(0, 0), e.lineTo(0, -_ * n), e.moveTo(-h, -_ * n), e.lineTo(h, -_ * n), e.lineWidth = a, e.strokeStyle = y, e.stroke()) : (e.moveTo(0, 0), _ < u ? (e.lineTo(d, -_ * n), e.lineTo(-d, -_ * n)) : (e.lineTo(d, -u * n), e.lineTo(h, -u * n), e.lineTo(h, -_ * n), e.lineTo(-h, -_ * n), e.lineTo(-h, -u * n), e.lineTo(-d, -u * n)), e.lineTo(0, 0), e.strokeStyle = t.isUp ? r.colorBorderUp : r.colorBorderDown, e.stroke(), e.fillStyle = y, e.fill()), e.translate(-p, -f)
                    }
                }
                hitTest(e) {
                    const t = this._data,
                        i = Ye(t.barSpacing),
                        s = Math.round(i / 2),
                        r = Math.round(i),
                        n = Ge(t.barSpacing);
                    for (const i of t.items) {
                        if (!i) continue;
                        if (!Number.isFinite(i.x) || !Number.isFinite(i.y)) continue;
                        const t = Math.abs(i.height),
                            o = i.isUp ? -1 : 1,
                            l = t + r,
                            a = i.y - o * n,
                            d = a - o * l,
                            h = i.x - s,
                            u = i.x + s;
                        if (h < e.x && e.x < u && (i.isUp ? a < e.y && e.y < d : d < e.y && e.y < a)) return new ve.HitTestResult(ve.HitTestResult.REGULAR)
                    }
                    return null
                }
            }
            class Ke extends fe.SelectionRenderer {
                _drawMarker(e, t, i, s) {
                    const {
                        context: r,
                        horizontalPixelRatio: o,
                        verticalPixelRatio: l
                    } = e, a = (0, n.ensureNotNull)(this._data), d = t.isUp ? 1 : -1;
                    const h = i + d * Ge(a.barSpacing) + d * Ye(a.barSpacing);
                    let u = Math.round(3.5 * o * 2);
                    u % 2 != s % 2 && (u += 1);
                    const c = s % 2 / 2,
                        _ = Math.round(t.x * o) + c,
                        p = Math.round((t.y + h) * l) + c;
                    r.beginPath(), r.arc(_, p, u / 2, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.stroke()
                }
            }
            class $e extends Le {
                constructor() {
                    super(...arguments), this._maxAbsValue = 0
                }
                renderer() {
                    if (!this._isPlotVisible() || !this._scalesReady()) return null;
                    this._invalidated && (this._updateImpl(), this._invalidated = !1);
                    const e = this._study.properties().childs().styles.childs()[this._plotName].childs(),
                        t = {},
                        i = (0, me.clamp)(this._getTranspValue(), 0, 100),
                        s = this._model.timeScale().barSpacing();
                    t.items = this._items, t.barSpacing = s, t.colorup = (0, he.generateColor)(e.colorup.value(), i), t.colordown = (0, he.generateColor)(e.colordown.value(), i);
                    const r = (0, ze.parseRgba)(t.colorup),
                        n = r ? 100 * (1 - r[3]) : 0,
                        o = (0, ze.parseRgba)(t.colordown),
                        l = o ? 100 * (1 - o[3]) : 0;
                    t.colorBorderUp = (0, he.generateColor)("#000000", n), t.colorBorderDown = (0, he.generateColor)("#000000", l), t.minHeight = this._plotStyleInfo.minHeight, t.maxHeight = this._plotStyleInfo.maxHeight;
                    const a = new ue.CompositeRenderer;
                    if (a.append(new je(t)), this._model.selection().isSelected(this._study) && null !== this._selectionData) {
                        const e = this._selectionData;
                        e.barSpacing = s, a.append(new Ke(e))
                    }
                    return a
                }
                _fillItemWithPointStyle(e, t, i) {
                    const s = (0, n.ensureDefined)(e.style);
                    e.isUp ? void 0 !== t.colors[5] ? s.color = (0, he.generateColor)((0, n.ensureDefined)(t.colors[5]), i) : s.color = (0, he.generateColor)(this._study.properties().childs().styles.childs()[this._plotName].childs().colorup.value(), i) : void 0 !== t.colors[6] ? s.color = (0, he.generateColor)((0, n.ensureDefined)(t.colors[6]), i) : s.color = (0, he.generateColor)(this._study.properties().childs().styles.childs()[this._plotName].childs().colordown.value(), i)
                }
                _createItem(e, t, i, s) {
                    if (0 === t) return null;
                    Math.abs(t) > this._maxAbsValue && (this._maxAbsValue = Math.abs(t));
                    const r = t > 0;
                    let n;
                    if (r) {
                        const t = this._getSeriesVal(s, e);
                        if (null === t) return null;
                        n = t
                    } else {
                        const t = this._getSeriesVal(i, e);
                        if (null === t) return null;
                        n = t
                    }
                    return new Ue(e, n, t, r)
                }
                _convertItemsToCoordinates() {
                    var e, t, i, s;
                    const r = this._model.timeScale(),
                        o = (0, n.ensureNotNull)(this._study.priceScale());
                    r.timedValuesToCoordinates(this._items), o.pointsArrayToCoordinates(this._items, (0, n.ensureNotNull)(this._study.firstValue()));
                    const l = this._study.properties().childs().styles.childs();
                    let a = Math.abs((0, n.ensureDefined)(null !== (t = null === (e = l[this._plotName].childs().minHeight) || void 0 === e ? void 0 : e.value()) && void 0 !== t ? t : this._plotStyleInfo.minHeight)),
                        d = Math.abs((0, n.ensureDefined)(null !== (s = null === (i = l[this._plotName].childs().maxHeight) || void 0 === i ? void 0 : i.value()) && void 0 !== s ? s : this._plotStyleInfo.maxHeight));
                    if (a > d) {
                        const e = a;
                        a = d, d = e
                    }
                    const h = (d - a) / this._maxAbsValue,
                        u = this._items;
                    for (let e = 0; e < u.length; e++) {
                        const t = u[e],
                            i = Math.abs(t.height);
                        t.height = i * h + a
                    }
                }
            }
            var qe = i(352566);
            class Xe {
                constructor(e, t, i, s) {
                    this._bars = [], this._invalidated = !1, this._isMarkersEnabled = ae.enabled("source_selection_markers"), this._selectionData = null, this._ohlcPlotIndexes = new Map, this._study = e, this._series = t, this._model = i, this._plotName = s, this._isMarkersEnabled = ae.enabled("source_selection_markers"), this._colorProvider = (0, _e.createStudyPlotColorProvider)(e.metaInfo(), e.properties(), s), this._selectionIndexer = new ge.SelectionIndexes(i.timeScale());
                    const r = this._study.metaInfo().plots;
                    for (let e = 0; e < r.length; e++) {
                        const t = r[e];
                        "target" in t && (t.target === this._plotName && ((0, L.isOhlcOpenPlot)(t) && this._ohlcPlotIndexes.set(1, e), (0,
                            L.isOhlcHighPlot)(t) && this._ohlcPlotIndexes.set(2, e), (0, L.isOhlcLowPlot)(t) && this._ohlcPlotIndexes.set(3, e), (0, L.isOhlcClosePlot)(t) && this._ohlcPlotIndexes.set(4, e)))
                    }
                }
                update() {
                    this._invalidated = !0
                }
                items() {
                    return this._bars
                }
                _updateImpl() {
                    this._bars.length = 0;
                    const e = this._study.priceScale();
                    if (this._model.timeScale().isEmpty() || null === e || e.isEmpty()) return;
                    const t = this._model.timeScale().visibleBarsStrictRange();
                    if (null === t) return;
                    let i = this._series.nearestIndex(t.firstBar(), V.PlotRowSearchMode.NearestRight);
                    const s = this._series.nearestIndex(t.lastBar(), V.PlotRowSearchMode.NearestLeft);
                    if (void 0 === i || void 0 === s) return;
                    const r = this._study.getMinFirstBarIndexForPlot(this._plotName);
                    if (r > s) return;
                    i = Math.max(r, i);
                    const o = this._study.data(),
                        l = this._study.firstValue();
                    if (null === l) return;
                    const a = o.rangeIterator(i, s),
                        d = (0, n.ensureDefined)(this._study.properties().childs().ohlcPlots).childs()[this._plotName].childs(),
                        h = new Map,
                        u = (e, t) => {
                            const i = e + "@" + t;
                            if (!h.has(i)) {
                                const s = (0, he.generateColor)(e, t);
                                return h.set(i, s), s
                            }
                            return h.get(i)
                        },
                        c = (0, be.createEmptyStyle)();
                    for (; a.hasNext();) {
                        const e = a.next();
                        let t = e.index;
                        const i = e.value;
                        t = Math.floor(t);
                        let s = !0;
                        const r = new Map;
                        for (let e = 1; e <= 4; ++e) {
                            const t = this._ohlcPlotIndexes.get(e);
                            if (void 0 === t) {
                                s = !1;
                                break
                            }
                            const n = i[t + 1];
                            if (null == n) {
                                s = !1;
                                break
                            }
                            r.set(e, n)
                        }
                        if (!s) continue;
                        const o = (0, n.ensureDefined)(r.get(1)),
                            l = (0, n.ensureDefined)(r.get(4)),
                            h = (0, n.ensureDefined)(r.get(2)),
                            _ = (0, n.ensureDefined)(r.get(3)),
                            p = Math.max(o, h, _, l),
                            f = Math.min(o, h, _, l);
                        let y = (0, n.ensureDefined)(u(d.color.value(), 0));
                        const m = this._colorProvider.getPlotPointStyle(i, c);
                        void 0 !== m.colors[0] && (y = (0, n.ensureDefined)(m.colors[0]));
                        const v = {
                            time: Math.round(t),
                            open: o,
                            high: p,
                            low: f,
                            close: l,
                            color: y,
                            wickColor: m.colors[4],
                            borderColor: m.colors[3],
                            hollow: null
                        };
                        this._bars.push(v)
                    }
                    if (e.barPricesToCoordinates(this._bars, l), this._model.timeScale().barIndexesToCoordinates(this._bars), this._model.selection().isSelected(this._study)) {
                        const t = this._selectionIndexer.indexes();
                        this._selectionData = {
                            points: [],
                            hittestResult: ve.HitTestResult.REGULAR,
                            bgColors: [],
                            visible: !0,
                            barSpacing: this._model.timeScale().barSpacing()
                        };
                        const i = (0, n.ensureNotNull)(this._model.paneForSource(this._study)).height(),
                            s = (0, n.ensureDefined)(this._ohlcPlotIndexes.get(4));
                        for (let r = 0; r < t.length; r++) {
                            const n = t[r],
                                o = this._study.data().valueAt(n);
                            if (null === o) continue;
                            const a = o[s + 1];
                            if (null == a) continue;
                            const d = this._model.timeScale().indexToCoordinate(Math.floor(n)),
                                h = e.priceToCoordinate(a, l);
                            this._selectionData.points.push(new de.Point(d, h)), this._selectionData.bgColors.push(this._model.backgroundColorAtYPercentFromTop(h / i))
                        }
                    } else this._selectionIndexer.clear()
                }
                _isOHLCPlotVisible() {
                    return this._study.isPlotVisibleAt(this._plotName, 1)
                }
            }
            class Je extends Xe {
                renderer() {
                    if (!this._isOHLCPlotVisible()) return null;
                    this._invalidated && (this._updateImpl(), this._invalidated = !1);
                    const e = {
                            bars: this._bars,
                            barSpacing: this._model.timeScale().barSpacing(),
                            dontDrawOpen: this._series.properties().childs().barStyle.childs().dontDrawOpen.value(),
                            thinBars: this._series.properties().childs().barStyle.childs().thinBars.value()
                        },
                        t = new ue.CompositeRenderer;
                    return t.append(new qe.PaneRendererBars(e)), this._model.selection().isSelected(this._study) && this._isMarkersEnabled && this._selectionData && t.append(new fe.SelectionRenderer(this._selectionData)), t
                }
            }
            var Ze = i(916716);
            class Qe extends Xe {
                renderer() {
                    if (!this._isOHLCPlotVisible()) return null;
                    this._invalidated && (this._updateImpl(), this._invalidated = !1);
                    const e = (0, n.ensureDefined)(this._study.properties().childs().ohlcPlots).childs()[this._plotName].childs(),
                        t = this._model.timeScale().barSpacing(),
                        i = {
                            bars: this._bars,
                            barSpacing: t,
                            wickVisible: e.drawWick.value(),
                            bodyVisible: !0,
                            borderVisible: e.drawBorder.value(),
                            barWidth: (0, Ne.optimalBarWidth)(t),
                            borderColor: e.borderColor.value(),
                            wickColor: e.wickColor.value()
                        },
                        s = new ue.CompositeRenderer;
                    return s.append(new Ze.PaneRendererCandles(i)), this._model.selection().isSelected(this._series) && this._isMarkersEnabled && this._selectionData && s.append(new fe.SelectionRenderer(this._selectionData)), s
                }
            }
            var et = i(733352),
                tt = i(517220),
                it = i(594358),
                st = i(631586);
            class rt extends it.HorizontalLinePaneView {
                constructor(e, t) {
                    super(), this._lineRendererData.linestyle = st.LINESTYLE_DOTTED, this._study = e, this._plotName = t
                }
                _updateImpl() {
                    this._lineRendererData.visible = !1;
                    const e = this._study.properties().childs().styles.childs()[this._plotName].childs();
                    if (!e.trackPrice.value() || !this._study.isPlotVisibleAt(this._plotName, 1)) return;
                    const t = this._study.lastValueData(this._plotName, !0);
                    t.noData || (this._lineRendererData.visible = !0, this._lineRendererData.y = t.coordinate, this._lineRendererData.color = t.color, this._lineRendererData.linewidth = e.linewidth.value())
                }
            }
            var nt = i(224186),
                ot = i(43239);
            const lt = {
                type: 0,
                color: "transparent"
            };
            class at extends ot.AbstractFilledAreaPaneView {
                constructor(e, t, i, s) {
                    var r, o, l;
                    super(e, t, !!i.fillgaps), this._palettesInfo = {}, this._gradientPropsStateCache = null;
                    const a = this._source.metaInfo();
                    this._isRGB = Boolean(a.isRGB), this._isHlineFill = "hline_hline" === i.type, (0, n.assert)(this._isHlineFill || "plot_plot" === i.type, "Wrong filledArea type: " + i.type), this._isHlineFill && this._initBandIndexes(i.objAId, i.objBId), this._fillMetaInfo = i, this._fillStyleProps = s, this._gradientFillType = s.hasChild("fillType") && "gradient" === (null === (r = s.childs().fillType) || void 0 === r ? void 0 : r.value()), this._gradientStaticState = {
                        color1: i.topColor,
                        color2: i.bottomColor,
                        value1: i.topValue,
                        value2: i.bottomValue
                    }, this._hasAllGradientRequiredProps = this._gradientFillType && (void 0 !== this._gradientStaticState.color1 || s.hasChild("topColor") || void 0 !== this._gradientStaticState.color2 || s.hasChild("bottomColor")) && (void 0 !== this._gradientStaticState.value1 || s.hasChild("topValue")) && (void 0 !== this._gradientStaticState.value2 || s.hasChild("bottomValue"));
                    const d = () => {
                        var e;
                        return this._colorPlotIndex = null !== (e = this._colorPlotIndex) && void 0 !== e ? e : {
                            type: 1
                        }
                    };
                    for (let t = 0; t < a.plots.length; ++t) {
                        const s = a.plots[t];
                        if (((0, L.isColorerPlot)(s) || (0, L.isDataPlot)(s)) && s.target === i.id) {
                            if ((0, L.isColorerPlot)(s)) {
                                let i;
                                void 0 !== s.targetField ? "topColor" === s.targetField ? (d().colorIndexOrRgba1 = t, i = "color1") : "bottomColor" === s.targetField && (d().colorIndexOrRgba2 = t, i = "color2") : this._colorPlotIndex = {
                                    type: 0,
                                    colorIndexOrRgba: t
                                }, (0, L.isPaletteColorerPlot)(s) && (this._palettesInfo[null != i ? i : "color"] = {
                                    map: (0, n.ensureDefined)(null === (o = (0, n.ensureDefined)(a.palettes)[s.palette]) || void 0 === o ? void 0 : o.valToIndex),
                                    values: e.properties().palettes[s.palette].colors
                                })
                            } else(0, L.isDataPlot)(s) && ("topValue" === s.targetField ? d().valueIndex1 = t : "bottomValue" === s.targetField && (d().valueIndex2 = t));
                            if (0 === (null === (l = this._colorPlotIndex) || void 0 === l ? void 0 : l.type)) break
                        }
                    }
                }
                update() {
                    super.update(), this._gradientPropsStateCache = null
                }
                _getColorByPlotValue(e) {
                    var t, i, s;
                    if (0 === e.type) {
                        let i;
                        if (this._isRGB) {
                            if (null == e.colorIndexOrRgba) return null;
                            i = (0, he.rgbaFromInteger)(e.colorIndexOrRgba)
                        } else {
                            const s = (0, n.ensureDefined)(this._palettesInfo.color),
                                r = (0, n.ensureDefined)(s.map[(0, n.ensure)(e.colorIndexOrRgba)]);
                            i = null === (t = s.values[r]) || void 0 === t ? void 0 : t.childs().color.value()
                        }
                        return {
                            type: 0,
                            color: i
                        }
                    }
                    const r = this._gradientColorPropsState();
                    let o, l;
                    if (this._isRGB) null != e.colorIndexOrRgba1 && (o = (0, he.rgbaFromInteger)(e.colorIndexOrRgba1)), null != e.colorIndexOrRgba2 && (l = (0, he.rgbaFromInteger)(e.colorIndexOrRgba2));
                    else {
                        if (null != e.colorIndexOrRgba1) {
                            const t = (0, n.ensureDefined)(this._palettesInfo.color1);
                            o = t.values[(0, n.ensureDefined)(t.map[e.colorIndexOrRgba1])].childs().color.value()
                        }
                        if (null != e.colorIndexOrRgba2) {
                            const t = (0, n.ensureDefined)(this._palettesInfo.color2);
                            l = t.values[(0, n.ensureDefined)(t.map[e.colorIndexOrRgba2])].childs().color.value()
                        }
                    }
                    const a = null !== (i = e.value1) && void 0 !== i ? i : r.value1,
                        d = null !== (s = e.value2) && void 0 !== s ? s : r.value2;
                    return o = null != o ? o : r.color1, l = null != l ? l : r.color2, void 0 === a || void 0 === d || void 0 === o && void 0 === l ? null : {
                        type: 1,
                        color1: o,
                        color2: l,
                        value1: a,
                        value2: d
                    }
                }
                _plotAId() {
                    return this._fillMetaInfo.objAId
                }
                _plotBId() {
                    return this._fillMetaInfo.objBId
                }
                _commonColor() {
                    const e = this._fillStyleProps.childs();
                    if (this._gradientFillType) {
                        if (!this._hasAllGradientRequiredProps) return lt;
                        const e = this._gradientColorPropsState();
                        return {
                            type: 1,
                            color1: e.color1,
                            color2: e.color2,
                            value1: e.value1,
                            value2: e.value2
                        }
                    }
                    return {
                        type: 0,
                        color: e.color.value()
                    }
                }
                _transparency() {
                    return this._fillStyleProps.childs().transparency.value()
                }
                _visible() {
                    return this._fillStyleProps.childs().visible.value()
                }
                _initBandIndexes(e, t) {
                    this._bandAKey = null, this._bandBKey = null;
                    const i = this._source.metaInfo().bands;
                    if (void 0 !== i)
                        for (let s = 0; s < i.length; ++s) {
                            const r = i[s];
                            null !== this._bandAKey || r.id !== e ? null === this._bandBKey && r.id === t && (this._bandBKey = s) : this._bandAKey = s
                        }
                }
                _gradientColorPropsState() {
                    var e, t, i, s;
                    if (null === this._gradientPropsStateCache) {
                        const r = this._fillStyleProps.state();
                        this._gradientPropsStateCache = {
                            color1: null !== (e = this._gradientStaticState.color1) && void 0 !== e ? e : r.topColor,
                            color2: null !== (t = this._gradientStaticState.color2) && void 0 !== t ? t : r.bottomColor,
                            value1: null !== (i = this._gradientStaticState.value1) && void 0 !== i ? i : r.topValue,
                            value2: null !== (s = this._gradientStaticState.value2) && void 0 !== s ? s : r.bottomValue
                        }
                    }
                    return this._gradientPropsStateCache
                }
            }
            var dt = i(4836),
                ht = i(803936);
            class ut {
                constructor(e, t) {
                    this._invalidated = !0, this._lineRenderer = new ht.HorizontalLineRenderer, this._source = t, this._points = [new de.Point(-1, -1)], this._invalidated = !0, this._properties = e
                }
                update() {
                    this._invalidated = !0
                }
                renderer() {
                    this._invalidated && (this._updateImpl(), this._invalidated = !1);
                    const e = {
                        y: this._points[0].y,
                        color: this._properties.childs().color.value(),
                        linewidth: this._properties.childs().linewidth.value(),
                        linestyle: this._properties.childs().linestyle.value()
                    };
                    return this._lineRenderer.setData(e), this._lineRenderer
                }
                _updateImpl() {
                    const e = this._source.priceScale();
                    if (!e || e.isEmpty()) return void(this._points[0] = new de.Point(-1, -1));
                    const t = this._properties.childs().value.value(),
                        i = this._source.firstValue(),
                        s = (0, z.isNumber)(t) && null !== i ? e.priceToCoordinate(t, i) : NaN;
                    this._points[0] = new de.Point(-1, s)
                }
            }
            var ct = i(904244);
            class _t extends ct.MediaCoordinatesPaneRenderer {
                constructor() {
                    super(), this._data = null, this._data = null
                }
                setData(e = null) {
                    this._data = e
                }
                hitTest() {
                    return null
                }
                _drawImpl(e) {
                    var t, i;
                    if (null === this._data || 0 === this._data.points.length) return;
                    const s = e.context,
                        r = e.mediaSize.width;
                    if (this._data.gradient) {
                        const e = s.createLinearGradient(0, this._data.coordinate1, 0, this._data.coordinate2);
                        e.addColorStop(0, null !== (t = this._data.backColor1) && void 0 !== t ? t : "transparent"), e.addColorStop(1, null !== (i = this._data.backColor2) && void 0 !== i ? i : "transparent"), s.fillStyle = e
                    } else s.fillStyle = this._data.backcolor;
                    const n = Math.min(this._data.points[0], this._data.points[1]),
                        o = Math.max(this._data.points[0], this._data.points[1]);
                    s.fillRect(0, n, r, o - n)
                }
            }
            class pt {
                constructor(e) {
                    this._bandBgRenderer = new _t, this._invalidated = !0, this._source = e
                }
                update() {
                    this._invalidated = !0
                }
                renderer() {
                    return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._bandBgRenderer
                }
                _updateImpl() {
                    this._bandBgRenderer.setData(null);
                    const e = this._source.properties().childs(),
                        t = e.bands;
                    if (t.childCount() < 2) return;
                    const i = e.bandsBackground;
                    if (!(null == i ? void 0 : i.childs().fillBackground.value())) return;
                    const s = t[0].childs(),
                        r = t[1].childs(),
                        o = this._source.priceScale(),
                        l = this._source.firstValue();
                    if (!o || o.isEmpty() || null === l) return;
                    const a = [o.priceToCoordinate(s.value.value(), l), o.priceToCoordinate(r.value.value(), l)],
                        d = (0, n.ensureDefined)(e.bandsBackground).childs(),
                        h = (0, me.clamp)(d.transparency.value(), 0, 100);
                    this._bandBgRenderer.setData({
                        gradient: !1,
                        points: a,
                        backcolor: (0, he.generateColor)(d.backgroundColor.value(), h)
                    })
                }
            }
            class ft {
                constructor(e, t, i) {
                    var s;
                    this._bandBgRenderer = new _t, this._bandAKey = null, this._bandBKey = null, this._invalidated = !0, this._source = e, (0, n.assert)("hline_hline" === t.type, "Wrong filledArea type: " + t.type), this._initBandIndexes(t.objAId, t.objBId), this._fillStyleProps = i, this._bandBgRenderer = new _t, this._gradientFillType = i.hasChild("fillType") && "gradient" === (null === (s = i.childs().fillType) || void 0 === s ? void 0 : s.value()), this._gradientStaticState = {
                        color1: t.topColor,
                        color2: t.bottomColor,
                        value1: t.topValue,
                        value2: t.bottomValue
                    }
                }
                update() {
                    this._invalidated = !0
                }
                renderer() {
                    return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._bandBgRenderer
                }
                _updateImpl() {
                    var e, t, i, s, r, o, l, a;
                    if (this._bandBgRenderer.setData(null), !this._fillStyleProps.childs().visible.value()) return;
                    if (null === this._bandAKey || null === this._bandBKey) return;
                    const d = (0, n.ensureDefined)(this._source.properties().childs().bands),
                        h = d.childs()[this._bandAKey].childs(),
                        u = d.childs()[this._bandBKey].childs(),
                        c = this._source.priceScale(),
                        _ = this._source.firstValue();
                    if (!c || c.isEmpty() || null === _) return;
                    const p = [c.priceToCoordinate(h.value.value(), _), c.priceToCoordinate(u.value.value(), _)],
                        f = (0, me.clamp)(this._fillStyleProps.childs().transparency.value(), 0, 100);
                    let y;
                    const m = this._fillStyleProps.childs();
                    if (this._gradientFillType) {
                        const n = this._gradientStaticState,
                            d = m,
                            h = null !== (e = n.value1) && void 0 !== e ? e : null === (t = d.topValue) || void 0 === t ? void 0 : t.value(),
                            u = null !== (i = n.value2) && void 0 !== i ? i : null === (s = d.bottomValue) || void 0 === s ? void 0 : s.value();
                        if (void 0 === h || void 0 === u) return;
                        const v = null !== (r = n.color1) && void 0 !== r ? r : null === (o = d.topColor) || void 0 === o ? void 0 : o.value(),
                            g = null !== (l = n.color2) && void 0 !== l ? l : null === (a = d.bottomColor) || void 0 === a ? void 0 : a.value();
                        if (void 0 === v && void 0 === g) return;
                        y = {
                            gradient: !0,
                            points: p,
                            backColor1: v && (0, he.generateColor)(v, f),
                            backColor2: g && (0, he.generateColor)(g, f),
                            coordinate1: c.priceToCoordinate(h, _),
                            coordinate2: c.priceToCoordinate(u, _)
                        }
                    } else y = {
                        gradient: !1,
                        points: p,
                        backcolor: (0, he.generateColor)(m.color.value(), f)
                    };
                    this._bandBgRenderer.setData(y)
                }
                _initBandIndexes(e, t) {
                    this._bandAKey = null, this._bandBKey = null;
                    (0, n.ensureDefined)(this._source.metaInfo().bands).forEach(((i, s) => {
                        null === this._bandAKey && i.id === e && (this._bandAKey = s), null === this._bandBKey && i.id === t && (this._bandBKey = s)
                    }))
                }
            }
            var yt = i(263314),
                mt = i(323017),
                vt = i(573651),
                gt = i(404822),
                St = i(988411),
                bt = i.n(St),
                wt = (i(720444), i(736887)),
                Pt = i(83387),
                xt = i(471502),
                Ct = i(424061),
                It = i(251954),
                Tt = i(16665),
                Vt = i(488792),
                Mt = i(87225),
                Rt = i(450556),
                At = i(309123),
                Lt = i(216392),
                Bt = i(831471),
                Ot = i(738023),
                Dt = i(561068);
            const kt = (0, l.getLogger)("Chart.Study"),
                Nt = o.t(null, void 0, i(814177)),
                Et = (0, se.isFeatureEnabled)("multiple_SoS");
            const Ft = {
                    symbolsForDisplay: !1,
                    symbolsForChartApi: !0,
                    skipHiddenInputs: !1,
                    skipFakeInputs: !1,
                    skipBooleanInputs: ae.enabled("dont_show_boolean_study_arguments"),
                    asObject: !0,
                    skippedGroups: [],
                    skippedInputs: [],
                    noExchanges: !1,
                    noResolution: !1,
                    keepOptionalSymbolsEmpty: !1,
                    skipColorInputs: !1,
                    skipTimeInputs: !1,
                    skipOptionalEmptySymbolInputs: !1,
                    skipTextareaInputs: !0,
                    priceInputsForDisplay: !1
                },
                Wt = ae.enabled("study_symbol_ticker_description"),
                Ht = ae.enabled("hide_main_series_symbol_from_indicator_legend");

            function zt(e, t) {
                const i = e.plots[t];
                if (!i || !(0, L.isOhlcPlot)(i)) return !1;
                const s = i.target,
                    r = e.defaults.styles && e.defaults.styles[s],
                    n = e.defaults.ohlcPlots && e.defaults.ohlcPlots[s],
                    o = e.ohlcPlots && e.ohlcPlots[s];
                return r && (0, L.isOhlcPlotStyleBars)(r) || n && (0, L.isOhlcPlotStyleBars)(n) || !!o && (0, L.isOhlcPlotStyleBars)(o)
            }

            function Ut(e, t) {
                const i = e.plots[t];
                if (!i || !(0, L.isOhlcPlot)(i)) return !1;
                const s = i.target,
                    r = e.defaults.styles && e.defaults.styles[s],
                    n = e.defaults.ohlcPlots && e.defaults.ohlcPlots[s],
                    o = e.ohlcPlots && e.ohlcPlots[s];
                return r && (0, L.isOhlcPlotStyleCandles)(r) || n && (0, L.isOhlcPlotStyleCandles)(n) || !!o && (0, L.isOhlcPlotStyleCandles)(o)
            }

            function Gt(e, t) {
                (0, n.assert)(void 0 !== e, "zOrder must be defined"), (0, n.assert)(!t.has(e), "zOrder must be unique")
            }

            function Yt(e, t) {
                return e.plots.some((e => ((0, L.isColorerPlot)(e) || (0, L.isDataPlot)(e)) && e.target === t))
            }

            function jt(e, t) {
                var i;
                if (t.plots)
                    for (let s = 0; s < t.plots.length; s++) {
                        const r = t.plots[s],
                            o = r.id;
                        if ((0, L.isColorerPlot)(r)) continue;
                        const l = {
                            display: 15,
                            color: "#0496FF",
                            linestyle: st.LINESTYLE_SOLID,
                            linewidth: 2,
                            plottype: L.LineStudyPlotStyle.Line,
                            transparency: 50,
                            trackPrice: !1
                        };
                        (0, L.isBarColorerPlot)(r) && (l.transparency = 0), l.plottype = r.type, l.title = o, e.styles && o in e.styles && (0, z.merge)(l, null !== (i = e.styles[o]) && void 0 !== i ? i : {}), (0, n.ensureDefined)(e.styles)[o] = l
                    }
            }

            function Kt(e, t, i, s) {
                var r, o;
                if (I.StudyMetaInfo.versionOf(e) < 1) throw new Error("This function cannot work with metainfo of the old format version. Required format version >= 1");
                let l = (0, z.clone)((0, Tt.defaults)("study"));
                jt(l, e);
                const a = I.StudyMetaInfo.getStudyPropertyRootName(e);
                let d = (0, z.clone)((0, Tt.defaults)(a, s));
                d.intervalsVisibilities = (0, z.clone)(Vt.intervalsVisibilitiesDefaults), "Overlay" !== e.shortId && "Compare" !== e.shortId || (d.currencyId = null, d.unitId = null), e.isTVScript && e.TVScriptSourceCode !== d.TVScriptSourceCode && (d = (0, z.clone)((0, Tt.factoryDefaults)(a))), (0, z.merge)(l, d), t && ((0, n.assert)(!(t instanceof H()), "propsState should not be an instance of Property"), (0, z.merge)(l, t));
                const h = (0, z.clone)(e.defaults),
                    u = {};
                At.StudyVersioning.mergeInputsObjPart(u, null !== (r = h.inputs) && void 0 !== r ? r : {}), At.StudyVersioning.mergeInputsObjPart(u, l.inputs), l.inputs = u, delete h.inputs;
                const c = {};
                if ((0, z.merge)(c, h), (0, z.merge)(c, (0, Tt.factoryDefaults)(a)), (0, z.merge)(c, l), l = c, null !== i) {
                    const t = i.model().studiesColorRotatorFactory().getColorRotator(e);
                    null !== t && ("Overlay@tv-basicstudies" === e.id ? l.lineStyle.color = t.getColor(l.lineStyle.color) : (0, z.merge)(l, function(e, t) {
                        for (const i of Object.keys(e.styles)) {
                            const s = e.styles[i];
                            if (s && "color" in s) {
                                const e = s.color;
                                s.color = t.getColor(e)
                            }
                        }
                        return e
                    }(l, t)))
                }
                return t && (0, z.merge)(l.styles, null !== (o = t.styles) && void 0 !== o ? o : {}), l
            }

            function $t(e, t, i, s, r) {
                return function(e, t, i, s, r, n) {
                    const o = Kt(e, t, i, s);
                    return I.StudyMetaInfo.getSourceInputIds(e).forEach(((e, t) => {
                        const i = o.inputs[e];
                        t < n.length ? o.inputs[e] = `${n[t].id()}$0` : (0, z.isString)(i) && i.includes("$") && (o.inputs[e] = "close")
                    })), Xt(e, r, o)
                }(e, t, i, s, I.StudyMetaInfo.getStudyPropertyRootName(e), r)
            }
            const qt = ["id", "description", "description_localized", "shortDescription", "_metainfoVersion", "is_price_study", "is_hidden_study", "priceScale", "fullId", "shortId", "scriptIdPart", "version", "packageId", "productId", "isTVScriptStub", "defaults", "symbolSource", "historyCalculationMayChange", "format", "linkedToSeries", "isTVLibrary", "docs", "exports", "exportTypes", "extra", "usesPrivateLib", "financialPeriod", "groupingKey", "pine", "isRGB", "isTVScript", "TVScriptMetaInfoExprs", "usePlotsZOrder", "isTVScriptStrategy", "TVScriptSourceCode", "lookaheadFutureData", "hasAlertFunction", "defaultStrategyAlertMessage", "tags", "canBeChild", "canNotBeChild", "_serverMetaInfoVersion", "warnings"];

            function Xt(e, t, i) {
                for (const e of qt) delete i[e];
                const s = new Mt.DefaultProperty(t, i, !0);
                s.removeProperty("intervalsVisibilities"), s.addChild("intervalsVisibilities", new Rt.IntervalsVisibilitiesProperty(i && i.intervalsVisibilities)), s.addExclusion("visible"), s.addExclusion("precision"), s.addExclusion("minTick"), s.addExclusion("intervalsVisibilities");
                for (let t = 0; t < e.inputs.length; ++t) {
                    const i = e.inputs[t];
                    i.isHidden && (s.addExclusion("inputs." + t.toString()), s.addExclusion("inputs." + i.id))
                }
                return "PivotPointsStandard@tv-basicstudies" !== e.id && "PivotPointsHighLow@tv-basicstudies" !== e.id || !s.hasChild("font") || s.removeProperty("font"), s
            }

            function Jt(e, t, i, s, r, n) {
                const o = function(e, t, i, s, r) {
                    var n;
                    e.version && i.version && e.version !== i.version && kt.logWarn("Serialized metaInfo version " + e.version + " is not equal to the saved state version " + i.version);
                    let o = (0, z.clone)((0, Tt.defaults)("study"));
                    o.intervalsVisibilities = (0, z.clone)(Vt.intervalsVisibilitiesDefaults), (0, z.merge)(o, (0, Tt.factoryDefaults)(I.StudyMetaInfo.getStudyPropertyRootName(e))), jt(o, e), (0, z.merge)(o, i), o = s.updateStudyState(o, e, t), void 0 !== r && t && (o = r(i, o, e, t));
                    const l = t || e,
                        a = (0, z.clone)(l.defaults);
                    if (l && I.StudyMetaInfo.versionOf(l) >= 1) {
                        const e = {};
                        At.StudyVersioning.mergeInputsObjPart(e, null !== (n = a.inputs) && void 0 !== n ? n : {}), At.StudyVersioning.mergeInputsObjPart(e, o.inputs), o.inputs = e, a && delete a.inputs;
                        const t = {};
                        (0, z.merge)(t, a), (0, z.merge)(t, (0, Tt.factoryDefaults)(I.StudyMetaInfo.getStudyPropertyRootName(l))), (0, z.merge)(t, o), o = t
                    }
                    return o
                }(e, t, i, s, n);
                return Xt(t || e, r, o)
            }

            function Zt(e, t, i, s, r) {
                return Jt(e, t, i, s, I.StudyMetaInfo.getStudyPropertyRootName(e), r)
            }

            function Qt(e, t, i) {
                let s = 0,
                    r = 0;
                return e.inputs.filter((e => "source" === e.type)).forEach((e => {
                    (0, le.getInputValue)(i[e.id]).includes("$") && s++, (0, le.getInputValue)(t[e.id]).includes("$") && r++
                })), Math.sign(r) - Math.sign(s)
            }
            class ei extends P.PriceDataSource {
                constructor(e, t, i, s) {
                    var r, o, l;
                    super(e), this._onStart = new(b()), this._onHibernationStateChange = new(b()), this._symbolsResolved = new(b()), this._statusChanged = new(b()), this._restarting = !1, this._paneViews = [], this._legendView = null, this._priceAxisViews = [], this._inputsAnchorsPaneView = null, this._inputsLinesPaneView = null, this._inputsTimeAxisPaneViews = [], this._inputsPriceAxisPaneViews = [], this._resolvedSymbols = {}, this._resolvedSymbolsByInput = {}, this._sources = [], this._status = {
                            type: yt.StudyStatusType.Undefined
                        },
                        this._wasCompletedBefore = !1, this._studyId = null, this._isSubscribedToSessionId = !1, this._titleStrCache = {}, this._titleInPartsCache = {}, this._children = [], this._numericFormatter = new U.NumericFormatter, this._priceAxisViewsBase = [], this._priceLinesAxisViews = [], this._graphicsPriceAxisViews = [], this._labelPaneViews = [], this._ownFirstValue = null, this._plotOffsets = {}, this._formatter = null, this._ongoingDataUpdate = Promise.resolve(), this._studyModified = !1, this._isDestroyed = !1, this._graphics = new T.LiveStudyGraphics, this._dataUpdated = new(b()), this._tagsChanged = new(b()), this._studyName = "", this._turnaround = "st0", this._currencySourceSymbolInputProperty = null, this._pendingResolveSymbols = new Map, this._onIsActualIntervalChange = new(b()), this._childStudyByRebind = new(b()), this._lastNonEmptyPlotRowCache = {}, this._startMovingPoint = null, this._processHibernateBound = this.processHibernate.bind(this, 1), this._maxOffset = new(bt())(0), this._currencySourceSymbolInfo = null, this._turnaroundCounter = 0, this._deferredPinePatchProps = !1, this._chartApi = e.chartApi(), this._properties = t, this._metaInfo = s, this._series = this._model.mainSeries(), this._series.onIntervalChanged().subscribe(this, this._calcIsActualInterval), this._showStudyArgumentsProperty = e.properties().childs().paneProperties.childs().legendProperties.childs().showStudyArguments, e.collapsed().subscribe(this._processHibernateBound), this._sources = i, I.StudyMetaInfo.setChildStudyMetaInfoPropertiesSourceId(s, null === (r = this._sources[0]) || void 0 === r ? void 0 : r.id(), t), i.forEach((e => {
                            e.setChild(this)
                        })), [this._series, ...i].forEach((e => {
                            e.currencyChanged().subscribe(this, this._onSourceCurrencyChanged), e.unitChanged().subscribe(this, this._onSourceUnitChanged), e.priceRangeReadyChanged().subscribe(this, this._onSourcePriceRangeReadyChanged), e.formatterChanged().subscribe(this, this._onSourceFormatterChanged), e.priceStepChanged().subscribe(this, this._onSourcePriceStepChanged)
                        })), Wt && this._model.mainSeries().properties().childs().statusViewStyle.childs().symbolTextSource.listeners().subscribe(this, (() => {
                            this.invalidateTitleCache(!0)
                        }));
                    const a = this._properties.childs();
                    for (const e of I.StudyMetaInfo.getSourceInputIds(s)) null === (o = a.inputs.childs()[e]) || void 0 === o || o.subscribe(this, this._onSourceInputChanged);
                    this._properties.subscribe(this, this._onPropertiesChanged), a.visible.subscribe(this, this._visibleChanged), a.visible.subscribe(this, (() => this.processHibernate())), a.intervalsVisibilities.subscribe(this, this._calcIsActualInterval), a.inputs.listeners().subscribe(this, this._updateMaxOffsetValue), void 0 !== a.offsets && a.offsets.listeners().subscribe(this, this._updateMaxOffsetValue), void 0 !== a.offset && a.offset.listeners().subscribe(this, this._updateMaxOffsetValue), O.hideAllIndicators().subscribe(this, this._visibleChanged);
                    for (let e = 0; e < this._metaInfo.plots.length; e++) {
                        const t = this._metaInfo.plots[e].id,
                            i = this._properties.childs().styles.childs()[t];
                        null == i || i.childs().display.subscribe(this, (() => this.processHibernate()))
                    }
                    for (const e of Object.keys(this._metaInfo.graphics))
                        for (const t of Object.keys(this._metaInfo.graphics[e])) {
                            const i = null === (l = a.graphics.childs()[e]) || void 0 === l ? void 0 : l.childs()[t];
                            i && i.childs().visible && (0, n.ensureDefined)(i.childs().visible).subscribe(this, (() => this.processHibernate()))
                        }
                    this._isActualInterval = (0, mt.isActualInterval)(this._series.intervalObj(), this._properties.childs().intervalsVisibilities), this._initializeStudyInputsPaneViews(), this._handler = e => this.onData(e), this._handler.isTVScriptStrategy = this._metaInfo.isTVScriptStrategy, this._valuesProvider = new Lt.StudyValuesProvider(this, e)
                }
                destroy() {
                    var e;
                    this.parentSources().forEach((e => {
                        e.currencyChanged().unsubscribeAll(this), e.unitChanged().unsubscribeAll(this), e.priceRangeReadyChanged().unsubscribeAll(this), e.formatterChanged().unsubscribeAll(this), e.priceStepChanged().unsubscribeAll(this)
                    })), this._series.properties().childs().statusViewStyle.childs().symbolTextSource.unsubscribeAll(this), this._series.onIntervalChanged().unsubscribeAll(this), this.formatterChanged().unsubscribe(this, this.invalidateTitleCache), O.hideAllIndicators().unsubscribe(this, this._visibleChanged), this._model.collapsed().unsubscribe(this._processHibernateBound), null !== this._currencySourceSymbolInputProperty && this._currencySourceSymbolInputProperty.unsubscribeAll(this), null === (e = this._legendView) || void 0 === e || e.destroy()
                }
                properties() {
                    return this._properties
                }
                isDraggable() {
                    return !this._metaInfo.linkedToSeries
                }
                lastValueData(e, t, i) {
                    const s = {
                            noData: !0
                        },
                        r = this.priceScale();
                    if (this._model.timeScale().isEmpty() || null === r || r.isEmpty() || this.data().isEmpty()) return s;
                    const n = this._model.timeScale().visibleBarsStrictRange(),
                        o = this.firstValue(!0);
                    if (null === n || null === o) return s;
                    if (!this._properties.childs().visible.value()) return s;
                    const l = this._properties.childs().styles,
                        a = this._properties.childs().ohlcPlots;
                    let d, h;
                    if (l && l.childs()[e] && (d = l.childs()[e]), a && a.childs()[e] && (d = a.childs()[e]), !d || 0 === d.childs().display.value()) return s;
                    const u = this.metaInfo().plots;
                    for (h = 0; h < u.length; h++) {
                        const t = u[h];
                        if (t.id === e || (0, L.isOhlcClosePlot)(t) && t.target === e) break
                    }
                    const c = h + 1,
                        _ = this.offset(e),
                        p = this.nearestIndex(n.lastBar() - _, V.PlotRowSearchMode.NearestLeft, c);
                    if (void 0 === p) return s;
                    const f = this._lastNonEmptyPlotRow(c),
                        y = null !== f && n.contains(f.index),
                        m = null !== f ? f.value : null,
                        v = t || y ? m : this.data().valueAt(p);
                    if (!v || !(0, z.isNumber)(v[c])) return s;
                    const g = v[c],
                        S = this._valuesProvider.getPlotColor(h, v),
                        b = r.priceToCoordinate(g, o),
                        w = { ...r.getFormattedValues(g, o),
                            noData: !1,
                            color: S,
                            floatCoordinate: b,
                            coordinate: b
                        };
                    return i && (w.price = g), w
                }
                isFailed() {
                    return this._status.type === yt.StudyStatusType.Error
                }
                isLoading() {
                    return this._status.type === yt.StudyStatusType.Loading
                }
                isSymbolInvalid() {
                    return this._status.type === yt.StudyStatusType.Error && this._status.errorDescription.error === Nt
                }
                state(e, t) {
                    var i, s;
                    const r = (0, n.ensureNotNull)((0, a.className)(this.constructor)),
                        o = this.metaInfo();
                    let l;
                    o instanceof I.StudyMetaInfo ? l = (0, z.clone)(o.state()) : (l = (0, z.clone)(this.metaInfo()), l.id = I.StudyMetaInfo.parseIdString(l.id + (l.version ? "-" + l.version : "")).fullId);
                    const d = {
                            type: r,
                            id: this.id(),
                            state: this.properties().state(),
                            zorder: this.zorder(),
                            ownFirstValue: this.isVisible() ? null : this._ownFirstValue,
                            metaInfo: l
                        },
                        h = this._sources.map((e => e.id()));
                    if (h.length && (d.parentSources = h), e) {
                        let e = this.data();
                        const t = this._model.timeScale(),
                            i = this._seriesDataRangeToSave(e);
                        null !== i && (e = e.range(i.firstBar(), i.lastBar())), d.data = e.state(), d.data.symbols = this._resolvedSymbols, d.data.graphics = (0, T.saveStudyGraphics)(this.graphics(), t.visibleBarsStrictRange()), d.data.plotOffsets = this._plotOffsets
                    }
                    this.ownerSource() && (d.ownerSource = null === (i = this.ownerSource()) || void 0 === i ? void 0 : i.id());
                    for (let e = 0; e < o.inputs.length; e++)
                        if ("bar_time" === o.inputs[e].type) {
                            const t = o.inputs[e].id,
                                i = d.state.inputs[t];
                            if (i < 0) {
                                const e = this._rightOffsetToUnixTime(-i);
                                d.state.inputs[t] = e && e >= 0 ? e : 0
                            }
                        }
                    if (null === (s = d.state) || void 0 === s ? void 0 : s.inputs) {
                        const e = d.metaInfo.inputs.find((e => "ILScript" === e.name));
                        e && delete d.state.inputs[e.id]
                    }
                    var u;
                    return t && (u = d).metaInfo && u.metaInfo.scriptIdPart && u.metaInfo.scriptIdPart.startsWith("USER;") && (function(e) {
                        if (!e.metaInfo) return;
                        const t = e.metaInfo.scriptIdPart;
                        if (!t) return;
                        const i = t.split(";")[0],
                            s = e.metaInfo;
                        s.id = (s.id || "").replace(t, i), s.fullId = (s.fullId || "").replace(t, i), s.name = (s.name || "").replace(t, i), s.shortId = (s.shortId || "").replace(t, i), s.scriptIdPart = (s.scriptIdPart || "").replace(t, i), e.state && (e.state.id = (e.state.id || "").replace(t, i), e.state.name = (e.state.name || "").replace(t, i), e.state.scriptIdPart = (e.state.scriptIdPart || "").replace(t, i))
                    }(u), function(e) {
                        const t = (e.metaInfo && e.metaInfo.inputs || []).find((e => "ILScript" === e.name));
                        t && (t.defval = "", e.state && e.state.inputs && (e.state.inputs[t.id] = ""), e.metaInfo.defaults.inputs && (e.metaInfo.defaults.inputs[t.id] = ""))
                    }(u)), d
                }
                restoreData(e) {
                    var t, i;
                    this._invalidateLastNonEmptyPlotRowCache(), this.data().restoreState(e), this._resolvedSymbols = null !== (t = e.symbols) && void 0 !== t ? t : {}, this._graphics = e.graphics ? (0, T.loadStudyGraphics)(e.graphics) : (0, T.emptyStudyGraphics)(), this._postProcessGraphics(), this._plotOffsets = null !== (i = e.plotOffsets) && void 0 !== i ? i : {}, this._setStatus({
                        type: yt.StudyStatusType.Completed
                    }, !0)
                }
                hasStateForAlert() {
                    return ae.enabled("alerts") && !this.isFailed() && (this.metaInfo().isTVScript ? this._hasAlertConditions() || this._hasAvailableAlertPlots() || this._hasAlertFunction() : this._hasAlertablePlots())
                }
                stateForAlert() {
                    const e = this.metaInfo(),
                        t = this._plotsForAlert(),
                        i = this._collectDepsForAlert(),
                        s = i.idForAlert,
                        r = i.studyDependencies,
                        o = i.inputsForAlert,
                        l = (this.priceScale() || this.model().mainSeries().priceScale()).formatter(),
                        a = l ? c.FormattersSerializer.serialize(l) : null,
                        u = {
                            id: s,
                            uniqueId: s,
                            type: (0, n.ensureNotNull)(window.TradingView.className(this.constructor)),
                            title: (0, d.clean)(this._title(!1, {}, !1), !0),
                            shortTitle: (0, d.clean)(this._title(!0, {}, !1), !0),
                            shortDescription: (0, d.clean)(e.shortDescription || "Study", !0),
                            fullId: e.fullId,
                            isTVScript: Boolean(e.isTVScript),
                            isTVScriptStrategy: Boolean(e.isTVScriptStrategy),
                            isTVLibrary: Boolean(e.isTVLibrary),
                            hasAlertFunction: Boolean(e.hasAlertFunction),
                            plots: t,
                            inputs: o,
                            alerts: e.alerts,
                            scriptIdPart: e.scriptIdPart,
                            scriptVersion: e.pine ? e.pine.version : "-1",
                            callStudyDependencies: (0, h.formatCallstudyArg)(this._dependenciesForAlerts()),
                            studyDependencies: r,
                            formatter: a
                        },
                        _ = p(this);
                    _ && (u.dangerReason = _);
                    const f = e.defaultStrategyAlertMessage;
                    return f && (u.defaultStrategyAlertMessage = (0, d.clean)(f, !0)), u
                }
                idForAlert() {
                    return this._collectDepsForAlert().idForAlert
                }
                alertCreationAvailable() {
                    return new(bt())(!this.metaInfo().isTVLibrary && super.alertCreationAvailable().value()).readonly()
                }
                hasBarColorer() {
                    return (0, n.ensureNotNull)(this._metaInfo).plots.some(L.isBarColorerPlot)
                }
                barColorer() {
                    const e = this._metaInfo.plots;
                    let t = null;
                    for (let i = 0; i < e.length; ++i)
                        if ((0, L.isBarColorerPlot)(e[i])) {
                            const e = new Ct.StudyBarColorer(this, i);
                            null === t ? t = e : t.pushBackBarColorer(e)
                        }
                    return t
                }
                restart(e) {
                    this._restarting = !0, this.clearData(), (e || ae.enabled("stop_study_on_restart")) && this.stop(), setTimeout(this.start.bind(this), 0)
                }
                stop(e, t) {
                    if (!0 === e && this._children)
                        for (const e of this._children) e.stop(!0);
                    this._stopStudyOnServer(), this.clearData(), this._unsubscribeToSessionId(), this.recalculate()
                }
                disconnect() {
                    this._studyId = null, this._model.isSnapshot() || (this._resolvedSymbols = {}, this._resolvedSymbolsByInput = {})
                }
                sourceId() {
                    return this._studyId
                }
                parentSources() {
                    return this._sources
                }
                symbolSource() {
                    return this._firstSourceOrSeries().symbolSource()
                }
                barsProvider() {
                    return this._firstSourceOrSeries().barsProvider()
                }
                ownerSource() {
                    return this.isChildStudy() ? this._sources[0] : super.ownerSource()
                }
                isChildStudy() {
                    return this._sources.length > 0
                }
                hasChildren() {
                    return this._children.length > 0
                }
                isStarted() {
                    return Boolean(this._studyId)
                }
                isRestarting() {
                    return this._restarting
                }
                isActualInterval() {
                    return this._isActualInterval
                }
                onIsActualIntervalChange() {
                    return this._onIsActualIntervalChange
                }
                isVisible() {
                    var e, t, i;
                    const s = this._properties.childs();
                    if (this._model.collapsed().value() || !s.visible.value() || !this.isActualInterval()) return !1;
                    const r = this.metaInfo();
                    if (r.plots.length > 0)
                        for (let e = 0; e < r.plots.length; e++) {
                            const t = r.plots[e].id,
                                i = s.styles.childs()[t];
                            if (void 0 === i) continue;
                            if (0 !== i.childs().display.value()) return !0
                        }
                    if (r.bands)
                        for (let e = 0; e < r.bands.length; e++)
                            if (s.bands.childs()[e].childs().visible.value()) return !0;
                    for (const n of Object.keys(r.graphics))
                        for (const o of Object.keys(r.graphics[n])) {
                            const r = null === (e = s.graphics.childs()[n]) || void 0 === e ? void 0 : e.childs()[o];
                            if (void 0 !== r && (null === (i = null === (t = r.child("visible")) || void 0 === t ? void 0 : t.value()) || void 0 === i || i)) return !0
                        }
                    if (r.filledAreas)
                        for (let e = 0; e < r.filledAreas.length; e++)
                            if (s.filledAreasStyle.childs()[r.filledAreas[e].id].childs().visible.value()) return !0;
                    return !(!r.isTVScriptStrategy && !r.hasAlertFunction)
                }
                start(e, t, i) {
                    const s = this._model.mainSeries();
                    if (!s.isStarted()) return void s.dataEvents().completed().subscribe(this, (() => this.start(e, t)), !0);
                    this._sources.forEach((e => {
                        e.isHibernated() && e.start()
                    }));
                    const r = !(this.isHibernationAllowed() && !this.isVisible()) || !0 === t;
                    this._chartApi && this._chartApi.isConnected().value() && r && this._allSymbolsAreResolved().then((() => this._startAfterSymbolsResolved(e, t))).catch((e => {
                        kt.logError("ERROR: " + this._debugId() + " start failed, " + e),
                            this._restarting = !1
                    }))
                }
                inputs(e) {
                    const t = (0, z.merge)((0, z.clone)(Ft), e || {});
                    t.skipOptionalEmptySymbolInputs && (t.keepOptionalSymbolsEmpty = !0);
                    const i = (0, r.default)(this._buildInputs(t));
                    return t.patchSosInputs && I.StudyMetaInfo.patchSoSInputs(i, (e => {
                        var t, i;
                        return null !== (i = null === (t = this._sources.find((t => t.id() === e))) || void 0 === t ? void 0 : t.sourceId()) && void 0 !== i ? i : null
                    })), i
                }
                metaInfo() {
                    return this._metaInfo
                }
                status() {
                    return this._status
                }
                name(e) {
                    return e ? this.metaInfo().shortDescription || "Study" : this.metaInfo().description || "Study"
                }
                title(e, t, i, s) {
                    i = void 0 === i ? !this._showStudyArgumentsProperty.value() : i;
                    const r = JSON.stringify([e, t, i, s]);
                    if (this._titleStrCache[r]) return this._titleStrCache[r];
                    if (this._titleInPartsCache[r]) return this._joinTitlesParts(this._titleInPartsCache[r]);
                    const n = this._title(e, t, i, s);
                    return this._titleStrCache[r] = n, n
                }
                titleInParts(e, t, i, s) {
                    i = void 0 === i ? !this._showStudyArgumentsProperty.value() : i;
                    const r = JSON.stringify([e, t, i, s]);
                    if (this._titleInPartsCache[r]) return this._titleInPartsCache[r];
                    const n = this._titleInParts(e, t, i, s);
                    return this._titleInPartsCache[r] = n, n
                }
                invalidateTitleCache(e) {
                    if (this._titleStrCache = {}, this._titleInPartsCache = {}, !0 === e && this._children)
                        for (let t = 0; t < this._children.length; ++t) this._children[t].invalidateTitleCache(e)
                }
                graphicsInfo() {
                    return this._metaInfo.graphics
                }
                setOwnFirstValue(e) {
                    this._ownFirstValue = e
                }
                firstValue(e) {
                    if (!this.isChildStudy() && "Compare@tv-basicstudies" === this._metaInfo.id || !this._metaInfo.is_price_study) {
                        const t = this._model.timeScale().visibleBarsStrictRange();
                        if (null === t) return null;
                        const i = this.properties().childs();
                        if (!i.visible.value() || !this.isActualInterval() || null !== this._startMovingPoint) return this._ownFirstValue;
                        const s = t.firstBar(),
                            r = t.lastBar();
                        let o = function(e) {
                            const t = e.model().timeScale();
                            if (t.isEmpty()) return null;
                            const i = t.visibleBarsStrictRange();
                            if (null === i) return null;
                            const s = i.firstBar(),
                                r = i.lastBar(),
                                n = ee(e),
                                o = new ie;
                            for (const e of n) {
                                const t = e.firstValue(s, r);
                                o.improve(t)
                            }
                            return o.bestPrice()
                        }(this);
                        const l = this._metaInfo.plots || [];
                        if (null === o) {
                            const t = new Set,
                                a = this._metaInfo.filledAreas || [];
                            for (let e = 0; e < a.length; e++) {
                                const s = a[e];
                                i.filledAreasStyle.childs()[s.id].childs().visible.value() && (t.add(s.objAId), t.add(s.objBId))
                            }
                            const d = this.data().rangeIterator(s, r);
                            for (; d.hasNext();) {
                                const s = d.next().value;
                                for (let r = 0; r < l.length; ++r) {
                                    if ((0, L.isColorerPlot)(l[r])) continue;
                                    const a = s[r + 1];
                                    if (null == a) continue;
                                    const d = l[r].id;
                                    if ((0 !== (0, n.ensureDefined)(i.styles.childs()[d]).childs().display.value() || t.has(d)) && !(e && Math.abs(a) < 1e-10)) {
                                        o = a;
                                        break
                                    }
                                }
                                if (null !== o) break
                            }
                        }
                        return this._ownFirstValue = o, null !== o ? o : this._bandsFirstValue(e)
                    }
                    if (this.isChildStudy()) {
                        const e = this._getNonPriceParent();
                        if (e && this.priceScale() === e.priceScale()) return null !== e._ownFirstValue ? e._ownFirstValue : e.firstValue()
                    }
                    return this._series.firstValue()
                }
                priceRange(e, t) {
                    let i = null;
                    const s = this._metaInfo,
                        r = this._fillPrecalculatedAutoscaleInfo(e, t);
                    let o = this.data().minMaxOnRangeCached(e, t, r.fields);
                    if (o = (0, C.mergeMinMax)(r.baseValueMinMax, o), r.useMainSeriesRange) {
                        const i = [{
                                name: "low",
                                offset: 0
                            }, {
                                name: "high",
                                offset: 0
                            }],
                            s = this.series().data().bars().minMaxOnRangeCached(e, t, i);
                        o = (0, C.mergeMinMax)(o, s)
                    }
                    if (null !== o && (i = new x.PriceRange(o.min, o.max)), s.bands)
                        for (let e = 0; e < s.bands.length; e++) {
                            const t = (0, n.ensureDefined)(this._properties.childs().bands.childs()[e]).childs();
                            if (t.visible.value()) {
                                const e = t.value.value();
                                if (!(0, z.isNumber)(e)) continue;
                                i ? i.apply(e, e) : i = new x.PriceRange(e, e)
                            }
                        } {
                            const s = function(e, t, i) {
                                const s = ee(e);
                                let r = null;
                                for (const e of s) {
                                    const s = e.groupPriceRange(t, i);
                                    null !== s && (r = null === r ? s : r.merge(s))
                                }
                                return r
                            }(this, e, t);
                            s && (i = i ? i.merge(s) : s)
                        }
                    return this._postProcessPriceRange(i)
                }
                autoScaleInfo(e, t) {
                    const i = this.priceRange(e, t),
                        s = function(e, t, i) {
                            const s = {
                                    topPixelMargin: 0,
                                    bottomPixelMargin: 0
                                },
                                r = ee(e);
                            for (const e of r) {
                                const r = e.groupPixelMargins(t, i);
                                s.bottomPixelMargin = Math.max(s.bottomPixelMargin, r.bottomPixelMargin), s.topPixelMargin = Math.max(s.topPixelMargin, r.topPixelMargin)
                            }
                            return s
                        }(this, e, t);
                    return {
                        range: i,
                        topPixelMargin: s.topPixelMargin,
                        bottomPixelMargin: s.bottomPixelMargin
                    }
                }
                formatter() {
                    return this._formatter ? this._formatter : this._firstSourceOrSeries().formatter(!1)
                }
                updateAllViews(e) {
                    var t, i, s, r, n;
                    this._paneViews.forEach((t => t.update(e))), this._labelPaneViews.forEach((t => t.update(e))), null === (t = this._dataWindowView) || void 0 === t || t.update(), null === (i = this._legendView) || void 0 === i || i.update(), null === (s = this._statusView) || void 0 === s || s.update(), this._priceAxisViews.forEach((t => t.update(e))), this._priceLinesAxisViews.forEach((t => t.update(e))), null === (r = this._inputsLinesPaneView) || void 0 === r || r.update(e), null === (n = this._inputsAnchorsPaneView) || void 0 === n || n.update(e), this._inputsTimeAxisPaneViews.forEach((t => t.update(e))), this._inputsPriceAxisPaneViews.forEach((t => t.update(e)))
                }
                getStudyName() {
                    return this._studyName
                }
                getMinFirstBarIndexForPlot(e) {
                    var t, i, s, r, n, o, l, a, d, h, u, c, _, p;
                    const f = this._properties.childs(),
                        y = this._metaInfo,
                        m = null !== (c = null !== (d = null !== (o = null !== (s = null === (i = null === (t = f.styles.childs()[e]) || void 0 === t ? void 0 : t.child("showLast")) || void 0 === i ? void 0 : i.value()) && void 0 !== s ? s : null === (n = null === (r = y.styles) || void 0 === r ? void 0 : r[e]) || void 0 === n ? void 0 : n.showLast) && void 0 !== o ? o : null === (a = null === (l = f.ohlcPlots.childs()[e]) || void 0 === l ? void 0 : l.child("showLast")) || void 0 === a ? void 0 : a.value()) && void 0 !== d ? d : null === (u = null === (h = y.ohlcPlots) || void 0 === h ? void 0 : h[e]) || void 0 === u ? void 0 : u.showLast) && void 0 !== c ? c : null;
                    if (null === m && (null === (_ = this._metaInfo.defaults.filledAreasStyle) || void 0 === _ ? void 0 : _[e]) && (null === (p = this._metaInfo.filledAreas) || void 0 === p || p.find((t => t.id === e))), null === m) return -1 / 0;
                    const v = this.data().lastIndex();
                    return null === v ? -1 / 0 : v - m + 1
                }
                guiPlotName(e) {
                    var t, i, s;
                    return null !== (s = null === (i = null === (t = this._metaInfo.styles) || void 0 === t ? void 0 : t[e]) || void 0 === i ? void 0 : i.title) && void 0 !== s ? s : this.title()
                }
                childStudyByRebind() {
                    return this._childStudyByRebind
                }
                isPine() {
                    return void 0 !== this._metaInfo.pine
                }
                isStandardPine() {
                    return this.isPine() && I.StudyMetaInfo.isStandardPine(this._metaInfo.id)
                }
                isLinkedToSeries() {
                    return !0 === this._metaInfo.linkedToSeries
                }
                defaultPlotIdForAlert() {
                    return this._metaInfo.plots.length ? this._metaInfo.plots[0].id : null
                }
                resolvedSymbolInfoBySymbol(e) {
                    return this._resolvedSymbols && e && this._resolvedSymbols[this._getSymbolForResolve(e)] || null
                }
                currency() {
                    const e = this.metaInfo();
                    return Boolean(e) && e.is_price_study ? this._firstSourceOrSeries().currency() : null
                }
                currencySourceSymbolInfo() {
                    var e, t, i;
                    return null !== (e = this._currencySourceSymbolInfo) && void 0 !== e ? e : null !== (i = null === (t = this.symbolSource()) || void 0 === t ? void 0 : t.symbolInfo()) && void 0 !== i ? i : null
                }
                unit() {
                    const e = this.metaInfo();
                    return Boolean(e) && e.is_price_study ? this._firstSourceOrSeries().unit() : null
                }
                dataWindowView() {
                    return this._dataWindowView
                }
                statusView() {
                    return this._statusView
                }
                legendView() {
                    return this._legendView
                }
                inputsForAlertState() {
                    return this.inputs()
                }
                sessionId() {
                    return this._firstSourceOrSeries().sessionId()
                }
                sessionIdChanged() {
                    return this._firstSourceOrSeries().sessionIdChanged()
                }
                getSymbolString(e) {
                    return "" === e ? "" : (0, k.encodeExtendedSymbolOrGetSimpleSymbolString)(this._getSymbolObject(e))
                }
                onStatusChanged() {
                    return this._statusChanged
                }
                symbolsResolved() {
                    return this._symbolsResolved
                }
                onHibernationStateChange() {
                    return this._onHibernationStateChange
                }
                valuesProvider() {
                    return new A.StudyLegendValuesProvider(this, this.model())
                }
                statusProvider(e) {
                    return new F.StudyStatusProvider(this, this._model.properties().childs().scalesProperties.childs().textColor)
                }
                correctScaleMargins(e) {
                    if ("Volume" === this.metaInfo().shortId) {
                        const t = this.model().paneForSource(this);
                        return null !== t && t.isOverlay(this) && t.containsMainSeries() ? {
                            top: .75,
                            bottom: 0
                        } : {
                            top: e.top,
                            bottom: 0
                        }
                    }
                    return e
                }
                canBeHiddenByGlobalFlag() {
                    return !0
                }
                isSourceHidden() {
                    return !this.isVisible() || this.canBeHiddenByGlobalFlag() && O.hideAllIndicators().value()
                }
                paneViews(e) {
                    if (this.isSourceHidden() || !e.hasPriceDataSource(this)) return null;
                    const t = [];
                    return !this._startMovingPoint && this._wasCompletedBefore && t.push(...this._paneViews), this._inputsLinesPaneView && (this._startMovingPoint || this._model.selection().isSelected(this)) && t.push(this._inputsLinesPaneView), this._inputsAnchorsPaneView && t.push(this._inputsAnchorsPaneView), t
                }
                labelPaneViews() {
                    return this.isSourceHidden() ? null : this._labelPaneViews
                }
                timeAxisViews() {
                    return this._model.selection().isSelected(this) ? this._inputsTimeAxisPaneViews : null
                }
                priceAxisViews(e, t) {
                    const i = this._properties.childs().oldShowLastValue;
                    if (i && !i.value()) return null;
                    let s = this._priceAxisViews.slice();
                    return this._model.selection().isSelected(this) && (s = s.concat(this._inputsPriceAxisPaneViews)), e.findTargetPriceAxisViews(this, t, s, this._priceLinesAxisViews)
                }
                movable() {
                    return null !== this._inputsAnchorsPaneView
                }
                startMoving(e, t, i, s) {
                    this._startMovingPoint = e, this.stop()
                }
                move(e, t, i, s) {
                    if (void 0 !== e.logical && null !== this._startMovingPoint) {
                        if (Array.isArray(t)) {
                            const i = t;
                            this._updateInputValue(e.logical, i[0]), this._updateInputValue(e.logical, i[1])
                        } else this._updateInputValue(e.logical, t);
                        this.updateAllViews((0, gt.sourceChangeEvent)(this.id()))
                    }
                }
                endMoving(e, t) {
                    return this._startMovingPoint = null, this.start(), {
                        indexesChanged: !1,
                        pricesChanged: !1
                    }
                }
                clearData() {
                    var e;
                    this._invalidateLastNonEmptyPlotRowCache(), this.data().clear(), this._graphics instanceof T.LiveStudyGraphics && (null === (e = this._graphics) || void 0 === e || e.clear()), this._plotOffsets = {}, this.hasBarColorer() && this._model.mainSeries().invalidateBarStylesCache(), this.updateAllViews((0, gt.sourceChangeEvent)({
                        sourceId: this.id(),
                        clearData: !0
                    }))
                }
                convertYCoordinateToPriceForMoving(e, t) {
                    const i = this.priceScale();
                    if (!t || !i || i.isEmpty()) return null;
                    const s = t.firstValue();
                    return null === s ? null : i.coordinateToPrice(e, s)
                }
                processHibernate(e) {
                    const t = this.isVisible();
                    if (!this.isStarted() && t && (this._sources.forEach((e => {
                            e.processHibernate()
                        })), this.start(void 0, void 0, e), this._onHibernationStateChange.fire(!1)), this.isHibernationAllowed() && this.isStarted() && !t) {
                        for (const e of this._children) e.processHibernate();
                        this.stop(void 0, e), this._onHibernationStateChange.fire(!0)
                    }
                }
                isHibernationAllowed() {
                    return !this.metaInfo().historyCalculationMayChange && (!this.hasChildren() || !!this._model.collapsed().value() && this._children.every((e => e.isHibernationAllowed())))
                }
                isPlotVisibleAt(e, t) {
                    let i;
                    const s = this.metaInfo().plots.find((t => t.id === e));
                    if (i = void 0 !== s ? (0, L.isOhlcPlot)(s) ? this._properties.childs().ohlcPlots.childs()[s.target] : this._properties.childs().styles.childs()[e] : this._properties.childs().ohlcPlots.childs()[e], void 0 === i) throw new Error(`Study does not contain ${e} plot`);
                    const r = i.childs().display.value();
                    return null !== r && (r & t) === t
                }
                recalculate() {
                    const e = this._model.paneForSource(this);
                    this._model.recalculatePane(e, (0, gt.sourceChangeEvent)(this.id())), this._model.updateSource(this)
                }
                maxOffset() {
                    return this._maxOffset
                }
                onStart() {
                    return this._onStart
                }
                isHibernated() {
                    return !this.isVisible() && !this.isStarted()
                }
                turnaround(e) {
                    if (!e) return this._turnaround;
                    return function(e, t) {
                        let i = t.turnaround,
                            s = [t];
                        for (; s.length > 0;) {
                            let e = [];
                            const t = [];
                            s.forEach((i => {
                                const s = ne(i.sourceStudies).sort(re);
                                if (s.length > 0) {
                                    e = e.concat(s);
                                    const i = s.map((e => e.turnaround)).join("_");
                                    t.push(i)
                                }
                            })), t.length && (i = t.join("_") + "_" + i), s = e
                        }
                        return e + "_" + i
                    }(this._series.seriesSource().turnaround(), oe(this))
                }
                canHaveChildren() {
                    var e;
                    return this._canHaveChildren = null !== (e = this._canHaveChildren) && void 0 !== e ? e : I.StudyMetaInfo.canHaveChildren(this._metaInfo), this._canHaveChildren
                }
                setChild(e) {
                    -1 === this._children.indexOf(e) && this._children.push(e)
                }
                unsetChild(e) {
                    const t = this._children.indexOf(e);
                    ~t && this._children.splice(t, 1)
                }
                getAllChildren() {
                    const e = this._children.slice();
                    for (let t = 0; t < e.length; ++t) {
                        const i = e[t].getAllChildren();
                        for (let t = 0; t < i.length; ++t) ~e.indexOf(i[t]) || e.push(i[t])
                    }
                    return e
                }
                parentSourceForInput(e) {
                    var t;
                    if (e.includes("$")) {
                        const i = e.split("$")[0];
                        return null !== (t = this._sources.find((e => e.id() === i))) && void 0 !== t ? t : null
                    }
                    return this._series
                }
                priceStep() {
                    return this._priceStep || this._firstSourceOrSeries().priceStep(!1)
                }
                _incrementTurnaround() {
                    this._turnaround = "st" + ++this._turnaroundCounter
                }
                _checkTurnaround(e) {
                    return e === this._turnaround || e === this._model.mainSeries().seriesSource().turnaround() || e === this.turnaround(!0)
                }
                _createStudyOnServer() {
                    if (this._isDestroyed) return;
                    const e = this._getStudyIdWithLatestVersion();
                    this._studyId = (0, N.makeNextStudyId)(), this._incrementTurnaround(), this._studyName = e;
                    const t = (0, z.clone)((0, n.ensureDefined)(this._inputs));
                    I.StudyMetaInfo.patchSoSInputs(t, (e => {
                        var t, i;
                        return null !== (i = null === (t = this._sources.find((t => t.id() === e))) || void 0 === t ? void 0 : t.sourceId()) && void 0 !== i ? i : null
                    })), Et ? this._chartApi.createStudy(this._studyId, this._turnaround, (0, n.ensureNotNull)(this._series.seriesSource().instanceId()), this._studyName, t, this._handler, this.isChildStudy()) : this._chartApi.createStudy(this._studyId, this._turnaround, this.isChildStudy() ? (0, n.ensureNotNull)(this._sources[0].sourceId()) : (0, n.ensureNotNull)(this._series.seriesSource().instanceId()), this._studyName, t, this._handler, this.isChildStudy()), this._deferredPinePatchProps && this._pinePatchPropsAllowed() && this._pinePatchProps()
                }
                _stopStudyOnServer() {
                    this._chartApi && this._chartApi.isConnected().value() && this.isStarted() && (this._chartApi.removeStudy((0, n.ensureNotNull)(this._studyId), this.isChildStudy()), this._setStatus({
                        type: yt.StudyStatusType.Undefined
                    })), this._studyId = null
                }
                _modifyStudyOnServer(e, t) {
                    const i = (0, z.clone)((0, n.ensureDefined)(e));
                    I.StudyMetaInfo.patchSoSInputs(i, (e => {
                        var t, i;
                        return null !== (i = null === (t = this._sources.find((t => t.id() === e))) || void 0 === t ? void 0 : t.sourceId()) && void 0 !== i ? i : null
                    })), this._chartApi.modifyStudy((0, n.ensureNotNull)(this._studyId), this._turnaround, i, this._handler, t)
                }
                _transformData(e) {}
                _updateMaxOffsetValue() {
                    let e = -1 / 0;
                    for (const t of this._metaInfo.plots) e = Math.max(this.offset(t.id), e);
                    this._maxOffset.setValue(e)
                }
                _rightOffsetToUnixTime(e) {
                    if (this._series.bars().size() >= e) {
                        const t = (0, n.ensureNotNull)(this._series.bars().lastIndex()) - e;
                        return (0, n.ensureNotNull)(this._series.bars().valueAt(t))[0]
                    }
                    return null
                }
                _invalidateLastNonEmptyPlotRowCache() {
                    this._lastNonEmptyPlotRowCache = {}
                }
                _collectDepsForAlert() {
                    const e = [this, ...this._getAllOwnerSources().filter((e => e instanceof ei))];
                    return (0, f.collectDepsForAlert)(e)
                }
                _allInputsAreValid() {
                    for (const e of this._metaInfo.inputs)
                        if ("bar_time" === e.type) {
                            const t = e.id;
                            if (null == this._properties.childs().inputs.childs()[t].value()) return !1
                        }
                    return !0
                }
                _startAfterSymbolsResolved(e, t) {
                    if (this.isStarted() && !this._restarting) return;
                    if (!this._sources.some((e => !(e.isStarted() && !e.isRestarting()) && (e.onStart().subscribe(this, this._startAfterSymbolsResolved, !0), !0))) && (this._restarting = !1, this._allInputsAreValid() && (this._inputs = this._apiInputs(), this._createStudyOnServer(), this._subscribeToSessionId(), this._onStart.fire(), !0 === e && this._children)))
                        for (const e of this._children) e.start(!0, t)
                }
                _changeInputsImpl(e, t) {
                    var s;
                    const r = this._calcSources();
                    let l = !0;
                    const a = Qt(this._metaInfo, e, t);
                    if (Et || r.length === this._sources.length && r[0] === this._sources[0]) {
                        if (this.isStarted() && this._chartApi.isConnected().value() && a > 0 && !this._chartApi.canCreateStudy(!0)) {
                            const s = window.user.pro_plan;
                            (0, m.createGoProDialog)({
                                feature: "studyOnStudy",
                                actions: s && [g.ProPlans.ProPremium, g.ProPlans.ProPremiumTrial].includes(s) ? [{
                                    text: o.t(null, void 0, i(875139)),
                                    action: v.PredefinedAction.Close
                                }] : void 0
                            });
                            for (const i of this._metaInfo.inputs) {
                                if ("source" !== i.type) continue;
                                const s = e[i.id].v,
                                    r = t[i.id].v;
                                if (s !== r) {
                                    (0, n.ensureDefined)(this._properties.childs().inputs.child(i.id)).setValue(r)
                                }
                            }
                            return
                        }
                        this._inputs = e;
                        let s = !1;
                        const l = Object.values(le.RangeDependentStudyInputNames);
                        for (const i of Object.keys(e))
                            if (JSON.stringify(e[i]) !== JSON.stringify(t[i]) && !l.includes(i)) {
                                s = !0;
                                break
                            }
                        this._incrementTurnaround(), s && this.disablePriceRangeReady(), this._updateParentSources(r, a), this._modifyStudyOnServer(e, a)
                    } else l = this._rebindToSourceOrRestorePreviousValue(null !== (s = r[0]) && void 0 !== s ? s : this._series, e, t), l && (this._inputs = e);
                    this.invalidateTitleCache(), l && (this._studyModified = l)
                }
                createPriceAxisView(e) {
                    return new Pt.StudyPriceAxisView(this, {
                        plotIndex: e
                    })
                }
                createPriceLineAxisView(e) {
                    return new xt.StudyPriceLineAxisView(this, e)
                }
                _createStudyPlotPaneView(e) {
                    return new tt.StudyPlotPaneView(this, this._series, this._model, e)
                }
                _createViews() {
                    var e, t, i, s;
                    this._priceAxisViewsBase = [], this._priceLinesAxisViews = [], this._paneViews = [], this._labelPaneViews = [];
                    const r = new Set,
                        o = this.metaInfo(),
                        l = Boolean(o.usePlotsZOrder),
                        a = new Map,
                        d = this._properties.childs();
                    if (d.filledAreasStyle && o.filledAreas)
                        for (let e = 0; e < o.filledAreas.length; ++e) {
                            const t = o.filledAreas[e],
                                i = (0, n.ensureDefined)(d.filledAreasStyle.childs()[t.id]),
                                s = Yt(o, t.id);
                            let r;
                            if ("plot_plot" === t.type || s ? r = new at(this, this.model(), t, i) : "hline_hline" === t.type ? r = new ft(this, t, i) : kt.logWarn("Unsupported filledArea type: " + t.type), void 0 !== r) {
                                const e = l ? (0, n.ensureDefined)(t.zorder) : a.size;
                                Gt(e, a), a.set(e, {
                                    paneViews: [r]
                                })
                            }
                        } {
                            let s = -1e5;
                            for (let d = 0; d < o.plots.length; d++) {
                                const h = o.plots[d];
                                let u, c, _, p, f;
                                if ((0, L.isNonVisualPlot)(h)) continue;
                                let y = h.id,
                                    m = o.styles;
                                const v = (0, L.isBgColorerPlot)(h);
                                if (v) u = new pe(this, this._series, this._model, y);
                                else if ((0, L.isShapesPlot)(h)) u = new Be(this, this._series, this._model, y);
                                else if ((0, L.isCharsPlot)(h)) u = new He(this, this._series, this._model, y);
                                else if ((0, L.isArrowsPlot)(h)) u = new $e(this, this._series, this._model, y);
                                else if ((0, L.isOhlcPlot)(h)) {
                                    const e = h.target;
                                    if (r.has(e)) continue;
                                    if (r.add(e), zt(o, d)) u = new Je(this, this._series, this._model, e);
                                    else {
                                        if (!Ut(o, d)) {
                                            kt.logError(`plot ${h.id} looks to be invalid`);
                                            continue
                                        }
                                        u = new Qe(this, this._series, this._model, e)
                                    }
                                    p = this.createPriceAxisView(e), _ = new et.PanePriceAxisView(p, this, this._model), y = e, m = o.ohlcPlots
                                } else(0, L.isDataPlot)(h) || (p = this.createPriceAxisView(y), f = this.createPriceLineAxisView(y), u = this._createStudyPlotPaneView(y), (null === (t = null === (e = this._properties.childs().styles.childs()[y]) || void 0 === e ? void 0 : e.child("trackPrice")) || void 0 === t ? void 0 : t.value()) && (c = new rt(this, y)), _ = new et.PanePriceAxisView(p, this, this._model));
                                const g = l ? v ? s++ : (0, n.ensureDefined)(null === (i = null == m ? void 0 : m[y]) || void 0 === i ? void 0 : i.zorder) : a.size;
                                Gt(g, a);
                                const S = {
                                    paneViews: void 0 !== u ? [u] : [],
                                    labelView: _,
                                    priceAxisView: p,
                                    priceLineAxisView: f
                                };
                                void 0 !== c && S.paneViews.push(c), a.set(g, S)
                            }
                        }(null !== (s = this._metaInfo.bands) && void 0 !== s ? s : []).forEach(((e, t) => {
                            const i = d.bands.childs()[t];
                            if (i && i.childs().visible.value()) {
                                const t = new ut(i, this),
                                    s = l ? (0, n.ensureDefined)(e.zorder) : a.size;
                                Gt(s, a), a.set(s, {
                                    paneViews: [t]
                                })
                            }
                        })), d.bandsBackground && ((0, n.assert)(!l, "'usePlotsZOrder' flag does not supported"), a.set(a.size, {
                            paneViews: [new pt(this)]
                        }));
                    const h = this._paneViews;
                    this._createGraphicsPaneViews().then((e => {
                        for (let t = 0; t < e.length; t++) h.push(e[t]);
                        this._model.lightUpdate()
                    })), d.areaBackground && ((0, n.assert)(!l, "'usePlotsZOrder' flag does not supported"), a.set(a.size, {
                        paneViews: [new nt.AreaBackgroundPaneView(this, this.model())]
                    }));
                    const u = Array.from(a.keys()).sort(((e, t) => e - t));
                    for (let e = 0; e < u.length; e++) {
                        const t = (0, n.ensureDefined)(a.get(u[e]));
                        this._paneViews.push(...t.paneViews), t.labelView && this._labelPaneViews.push(t.labelView), t.priceAxisView && this._priceAxisViewsBase.push(t.priceAxisView), t.priceLineAxisView && this._priceLinesAxisViews.push(t.priceLineAxisView)
                    }
                    this._dataWindowView || (this._dataWindowView = new dt.StudyDataWindowView(this, this._model)), this._legendView || (this._legendView = new B(this, this._model)), this._statusView || (this._statusView = new D.StudyStatusView(this)), this._concatPriceAxisViews()
                }
                _concatPriceAxisViews() {
                    this._priceAxisViews = [...this._priceAxisViewsBase, ...this._graphicsPriceAxisViews]
                }
                onData(e) {
                    switch (e.method) {
                        case "study_loading":
                            this._onStudyLoading();
                            break;
                        case "study_error":
                            this._onStudyError(e.params[2]);
                            break;
                        case "study_completed":
                            if (!this._checkTurnaround(e.params[1])) return;
                            this._onStudyCompleted(e.params[e.params.length - 1]);
                            break;
                        case "data_update":
                            if (e.params.customId !== this.sourceId() || !this._checkTurnaround(e.params.turnaround)) return;
                            (0, n.assert)(!!e.params.nonseries, "data.params.nonseries is missing"), this._onDataUpdate(e.params.plots, (0, n.ensureDefined)(e.params.nonseries), e.params.lastBar);
                            break;
                        case "clear_data":
                            this._checkTurnaround(e.params.turnaround) && this.clearData()
                    }
                }
                _onStudyLoading() {
                    var e;
                    this._setStatus({
                        type: yt.StudyStatusType.Loading,
                        startTime: Date.now()
                    }), null === (e = this._statusView) || void 0 === e || e.update(), this._model.updateSource(this)
                }
                _getTelemetryObjectName() {
                    return "study"
                }
                _handleStudyError(e) {
                    var t, i, s;
                    this.clearData(), this._setStatus(e); {
                        const s = (0, yt.convertStudyStatusToString)(e),
                            r = this._getTelemetryAdditionalData(),
                            n = s.indexOf("Command info");
                        r.reason = n >= 0 ? s.slice(0, n).trim() : s;
                        if (!/study in error state|the data vendor doesn\'t provide volume data for this symbol.|error in series|unsupported resolution/gi.test(null !== (i = null === (t = r.reason) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== i ? i : "")) {
                            const e = this._getTelemetryObjectName();
                            this._sendTelemetryCounter(e + "_error", r)
                        }
                    }
                    null === (s = this._statusView) || void 0 === s || s.update(), this._model.updateSource(this)
                }
                _onStudyError(e) {
                    const t = "string" == typeof e ? {
                        error: this._getStudyErrorText(e)
                    } : e;
                    this._handleStudyError({
                        type: yt.StudyStatusType.Error,
                        errorDescription: t
                    }), this._enablePriceRangeReady()
                }
                _onStudyCompleted(e) {
                    var t;
                    this._studyModified && (this.clearData(), this._studyModified = !1), this._sendTelemetryCounter(this._getTelemetryObjectName() + "_loaded"), this._setStatus({
                        type: yt.StudyStatusType.Completed
                    }), null === (t = this._statusView) || void 0 === t || t.update();
                    const i = this._model.paneForSource(this);
                    this._model.recalculatePane(i, (0, gt.sourceChangeEvent)(this.id())), this._updateSources();
                    const s = vt.InvalidationMask.full();
                    null !== this._model.appliedTimeFrame().value() && s.lockVisibleTimeRangeOnResize(), this._model.invalidate(s)
                }
                _onDataUpdated(e, t, i, s) {
                    if (this.hasBarColorer() && e.length > 0) {
                        const t = (0, n.ensureNotNull)(this.barColorer()).firstColoredBar(e[0].index);
                        this._model.mainSeries().invalidateBarStylesCache(t)
                    }
                    null !== t && this._postProcessGraphics();
                    const r = this._model.paneForSource(this);
                    this._model.recalculatePane(r, (0, gt.sourceChangeEvent)({
                        sourceId: this.id(),
                        firstUpdatedTimePointIndex: null != s ? s : void 0
                    })), this._updateSources()
                }
                _updateSources() {
                    this._model.updateSource(this), this.hasBarColorer() && this._model.updateSource(this._model.mainSeries())
                }
                _titleInputs(e, t) {
                    return this.inputs(this._titleInputsOptions(e, t))
                }
                _titleInputsOptions(e, t) {
                    return {
                        symbolsForDisplay: !0,
                        skipHiddenInputs: !0,
                        skipFakeInputs: !1,
                        fakeInputsForDisplay: !0,
                        asObject: !1,
                        skippedGroups: [],
                        noExchanges: e,
                        noResolution: t,
                        skipColorInputs: !0,
                        skipTimeInputs: !0,
                        priceInputsForDisplay: !0,
                        skipOptionalEmptySymbolInputs: Ht
                    }
                }
                _postProcessGraphics() {
                    this._graphicsPriceAxisViews = this._createGraphicsPriceAxisViews(), this._concatPriceAxisViews()
                }
                async _createGraphicsPaneViews() {
                    return (0, T.createGraphicsPaneViews)(this, this.model())
                }
                _createGraphicsPriceAxisViews() {
                    return (0, T.createGraphicsPriceAxisViews)(this)
                }
                _subscribeToSessionId() {
                    !this._isSubscribedToSessionId && this.hasSymbolInputs() && (this.sessionIdChanged().subscribe(this, this._onSessionIdChanged), this._isSubscribedToSessionId = !0)
                }
                _unsubscribeToSessionId() {
                    this._isSubscribedToSessionId && (this.sessionIdChanged().unsubscribe(this, this._onSessionIdChanged), this._isSubscribedToSessionId = !1)
                }
                _onSessionIdChanged() {
                    this.restart(!0)
                }
                _title(e, t, i, s) {
                    const r = this._titleInParts(e, t, i, s);
                    return this._joinTitlesParts(r)
                }
                _formatterByProperties() {
                    const e = this.metaInfo().format,
                        t = this._priceScaleByProperties();
                    if (null !== t) switch (e.type) {
                        case "inherit":
                        case "price":
                            return new Bt.PriceFormatter(t);
                        case "volume":
                            return new Ot.VolumeFormatter(Math.log10(t));
                        case "percent":
                            return new Dt.PercentageFormatter(t)
                    }
                    return null
                }
                _formatterByMetaInfo() {
                    const e = this.metaInfo().format;
                    if ("inherit" === e.type) return null;
                    const t = this.series().symbolInfo(),
                        i = (0, z.isNumber)(e.precision) ? Math.pow(10, e.precision) : void 0;
                    switch (e.type) {
                        case "price":
                            return new Bt.PriceFormatter(i);
                        case "volume":
                            {
                                let i = e.precision;
                                return void 0 === i && (i = t && (0, z.isNumber)(t.volume_precision) ? t.volume_precision : 0),
                                new Ot.VolumeFormatter(i)
                            }
                        case "percent":
                            return new Dt.PercentageFormatter(i);
                        default:
                            return kt.logWarn(`Unsupported format type: ${e.type}`), null
                    }
                }
                _postProcessPriceRange(e) {
                    if (e && e.minValue() === e.maxValue() && !this.metaInfo().is_price_study) {
                        const t = .005 * e.minValue();
                        e = new x.PriceRange(e.minValue() - t, e.maxValue() + t)
                    }
                    const t = this.priceScale();
                    return t && t.isLog() && e ? new x.PriceRange(t.priceToLogical(e.minValue()), t.priceToLogical(e.maxValue())) : e
                }
                _joinTitlesParts(e) {
                    const t = e[1] ? e[1].join(", ") : "";
                    return e[0] + (t.length > 0 ? " (" + t + ")" : "")
                }
                _titleInParts(e, t, s, r) {
                    var l;
                    const a = this.name(e);
                    t = t || {};
                    const d = [o.t(a, {
                        context: "study"
                    }, i(168716))];
                    let h = [];
                    if (!s) {
                        const i = this._getMTFResolutionInputTitle();
                        null !== i && i.length > 0 && d.push(i);
                        const s = this.metaInfo(),
                            o = this._titleInputs(r, !0) || [];
                        if (o.length > 0) {
                            const i = {};
                            if (this.isChildStudy())
                                for (let t = 0; t < s.inputs.length; ++t) {
                                    const o = s.inputs[t];
                                    if (!I.StudyMetaInfo.isSourceInput(o)) continue;
                                    const a = o.id,
                                        d = (0, n.ensureDefined)(this._properties.childs().inputs.child(a)).value();
                                    if (d.indexOf("$") >= 0) {
                                        const t = this.parentSourceForInput(d);
                                        if (t instanceof ei) {
                                            const s = t.metaInfo(),
                                                n = t.title(e, {}, !0, r);
                                            if (1 === s.plots.length) i[d] = n;
                                            else {
                                                const e = d.split("$")[1],
                                                    t = null === (l = s.plots[parseInt(e)]) || void 0 === l ? void 0 : l.id,
                                                    r = s.styles && s.styles[t],
                                                    o = r && r.title || t;
                                                i[d] = n + ": " + o
                                            }
                                        }
                                    }
                                }
                            h = o.map((e => {
                                let s = (0, z.isNumber)(e) ? this._numericFormatter.format(e) : i && i[e.toString()] || e.toString();
                                return t && t[s.toString()] && (s = t[s.toString()]), s
                            }))
                        }
                    }
                    return [d.join(" · "), h]
                }
                _getMTFResolutionInputTitle() {
                    const e = this.metaInfo();
                    for (let t = 0; t < e.inputs.length; t++) {
                        const i = e.inputs[t];
                        if ("resolution" === i.type && i.isMTFResolution) return (0, n.ensureDefined)(this._properties.childs().inputs.child(i.id)).value()
                    }
                    return null
                }
                _seriesDataRangeToSave(e) {
                    return this._model.timeScale().visibleExtendedDataRange(e, 0)
                }
                _hasAvailableAlertPlots() {
                    const e = this.stateForAlert(),
                        t = u.alertBandFactory.create(e).getPlots();
                    return null != t && t.length > 0
                }
                _hasAlertablePlots() {
                    return (this.metaInfo().plots || []).some((e => "line" === e.type))
                }
                _hasAlertConditions() {
                    if (this.metaInfo().plots.some(L.isAlertConditionPlot)) return !0;
                    const e = this.stateForAlert();
                    return Boolean(e.alerts && e.alerts.conditions)
                }
                _hasAlertFunction() {
                    const e = this.metaInfo();
                    return Boolean(e.hasAlertFunction)
                }
                _onDataUpdate(e, t, i) {
                    this._studyModified && (this.clearData(), this._studyModified = !1);
                    const s = (0, w.unpackNonSeriesData)(t.d);
                    return this._ongoingDataUpdate = this._ongoingDataUpdate.then((() => s), (() => s)).then(this._onDataUnpacked.bind(this, e, t.indexes, i)), this._ongoingDataUpdate
                }
                _mergeData(e) {
                    return this._invalidateLastNonEmptyPlotRowCache(), this.data().merge(e)
                }
                _getSymbolForResolve(e) {
                    return this.getSymbolString(this._getSymbolForApi(e))
                }
                _allSymbolsAreResolved() {
                    const e = this.metaInfo(),
                        t = [];
                    let i = !1;
                    for (let s = 0; s < e.inputs.length; s++)
                        if ("symbol" === e.inputs[s].type) {
                            const r = e.inputs[s].id,
                                o = (0, n.ensureDefined)(this._properties.childs().inputs.child(r)).value(),
                                l = this._getSymbolForResolve(o);
                            if ("" !== l)
                                if (this._resolvedSymbols[l]) i = !0;
                                else {
                                    const e = this._resolveSymbol(l, o);
                                    t.push(e)
                                }
                        }
                    if (0 === t.length) {
                        const e = Promise.resolve();
                        return i ? e.then((() => this._symbolsResolved.fire())) : e
                    }
                    return Promise.all(t).catch((e => (this._setStatus({
                        type: yt.StudyStatusType.Error,
                        errorDescription: {
                            error: Nt
                        }
                    }), this.stop(!0), this._model.updateSource(this), Promise.reject("Invalid symbol, " + e)))).then((() => {
                        null !== this._studyId && this.stop(!0),
                            this.start(!0), this._symbolsResolved.fire(), this._recheckLineToolsActuality()
                    }))
                }
                _getSymbolForApi(e) {
                    return e
                }
                _resolveSymbol(e, t) {
                    if ("" === e) return Promise.resolve();
                    let i = this._pendingResolveSymbols.get(e);
                    return void 0 !== i || (i = new Promise(((i, s) => {
                        this._onSymbolResolvingStart(), this._chartApi.resolveSymbol((0, N.makeNextSymbolId)(), e, (r => {
                            switch (this._pendingResolveSymbols.delete(e), r.method) {
                                case "symbol_resolved":
                                    this._setStatus({
                                        type: yt.StudyStatusType.Undefined
                                    }), this._resolvedSymbols[e] = r.params[1], this._resolvedSymbolsByInput[t] = r.params[1], this._onSymbolResolved(e, t, r.params[1]), this.invalidateTitleCache(!0), i();
                                    break;
                                case "symbol_error":
                                    if (this._setStatus({
                                            type: yt.StudyStatusType.Error,
                                            errorDescription: {
                                                error: r.params[1]
                                            }
                                        }), this._onSymbolError(), r.params[1] === E.permissionDenied && r.params[2]) {
                                        if (r.params[2] !== E.SymbolErrorPermissionDeniedReason.Symbol) return void this._resolveSymbol(r.params[2], t).then(i);
                                        if (r.params[3]) return void this._resolveSymbol(r.params[3], t).then(i)
                                    }
                                    this._sendTelemetryCounter("symbol_error", Object.assign(this._getTelemetryAdditionalData(), {
                                        symbol: e,
                                        reason: r.params[1]
                                    })), s()
                            }
                        }))
                    })), this._pendingResolveSymbols.set(e, i)), i
                }
                _recheckLineToolsActuality() {
                    const e = this._model.paneForSource(this);
                    null !== e && e.sourcesByGroup().lineSourcesForAllSymbols().forEach((e => {
                        e.ownerSource() === this && e.calcIsActualSymbol()
                    }))
                }
                _getSymbolObject(e) {
                    const t = {
                            symbol: e
                        },
                        i = this.currency();
                    return null !== this._currencySourceSymbolInputProperty && null !== this._currencySourceSymbolInfo && this._getSymbolForApi(this._currencySourceSymbolInputProperty.value()) === e && (t["currency-id"] = i), t.session = this.sessionId(), t
                }
                _onSymbolResolved(e, t, i) {
                    {
                        const e = (0, n.ensureNotNull)(this._model.alertsWatcher());
                        e.syncSourceAlertLabels(this);
                        const t = this.getAllChildren();
                        for (const i of t) e.syncSourceAlertLabels(i)
                    }
                    this._onCurrencyMayChange()
                }
                _onSymbolResolvingStart() {}
                _onSymbolError() {}
                _setStatus(e, t) {
                    var i;
                    this._status = e, e.type === yt.StudyStatusType.Completed ? this._wasCompletedBefore = !0 : e.type !== yt.StudyStatusType.Error && e.type !== yt.StudyStatusType.Undefined || (this._wasCompletedBefore = !1), t || (null === (i = this._statusView) || void 0 === i || i.update(), this._model.updateSource(this), this._statusChanged.fire(e))
                }
                _onPropertiesChanged() {
                    this._restarting || (this._inputs ? this._tryChangeInputs() : this._chartApi && this._chartApi.isConnected().value() && this.restart()), this._metaInfo.isTVScript && this._metaInfo.TVScriptMetaInfoExprs && (this._pinePatchPropsAllowed() ? this._pinePatchProps() : this._deferredPinePatchProps = !0), this._recreatePaneViews(), (0, It.emit)("study_properties_changed", this._id)
                }
                _bandsFirstValue(e) {
                    const t = this._metaInfo;
                    if (!t.bands) return null;
                    for (let i = 0; i < t.bands.length; i++) {
                        const t = (0, n.ensureDefined)(this._properties.childs().bands).childs()[i];
                        if (t.childs().visible.value()) {
                            const i = t.childs().value.value();
                            if (e && 0 === i) continue;
                            return i
                        }
                    }
                    return null
                }
                _prepareInputs(e) {
                    (0, n.assert)(!!e, "options not set");
                    const t = this.metaInfo(),
                        i = {},
                        s = e.allowedInputTypes ? new Set(e.allowedInputTypes) : null;
                    for (let r = 0; r < t.inputs.length; r++) {
                        const n = t.inputs[r];
                        if (null !== s && !s.has(n.type)) continue;
                        if (n.isFake && e.skipFakeInputs) continue;
                        if (n.isMTFResolution && e.noResolution) continue;
                        if (e.skipHiddenInputs) {
                            let t = !1;
                            switch (n.type) {
                                case "bool":
                                    t = e.skipBooleanInputs;
                                    break;
                                case "color":
                                    t = e.skipColorInputs;
                                    break;
                                case "time":
                                    t = e.skipTimeInputs;
                                    break;
                                case "text_area":
                                    t = e.skipTextareaInputs;
                                    break;
                                default:
                                    t = Boolean(n.isHidden)
                            }
                            if (t) continue
                        }
                        if (void 0 !== n.groupId && -1 !== e.skippedGroups.indexOf(n.groupId)) continue;
                        if (-1 !== e.skippedInputs.indexOf(n.id)) continue;
                        const o = this._prepareInput(n, e);
                        "symbol" === n.type && e.skipOptionalEmptySymbolInputs && "" === o || (i[n.id] = (0, z.clone)(o))
                    }
                    return i
                }
                _getAllOwnerSources() {
                    const e = [];
                    let t = this.ownerSource();
                    for (; null !== t;) e.push(t), t = t.ownerSource();
                    return e
                }
                _getStudyIdWithLatestVersion() {
                    return I.StudyMetaInfo.getStudyIdWithLatestVersion(this.metaInfo())
                }
                _lastNonEmptyPlotRow(e) {
                    var t;
                    if (!(0, z.isInteger)(e)) return kt.logDebug("_lastNonEmptyPlotRow: incorrect plotIndex"), null;
                    let i = null !== (t = this._lastNonEmptyPlotRowCache[e]) && void 0 !== t ? t : null;
                    if (null !== i) return i;
                    return i = this.data().findLast(((t, i) => void 0 !== i[e]), 1e3), null === i ? null : (this._lastNonEmptyPlotRowCache[e] = i, i)
                }
                _onCurrencyChanged() {
                    "alwaysOff" !== (0, wt.currencyUnitVisibilityProperty)().value() && this._model.fullUpdate(), this.isStarted() && this._tryChangeInputs(), this._currencyChanged.fire()
                }
                _apiInputs() {
                    return this.inputs({
                        keepOptionalSymbolsEmpty: !0
                    })
                }
                _tryChangeInputs() {
                    var e;
                    const t = this.isStarted() && this._chartApi.isConnected().value();
                    if (t && this._allInputsAreValid()) this._allSymbolsAreResolved().then((() => {
                        const e = this._apiInputs(),
                            t = JSON.stringify(e) !== JSON.stringify(this._inputs);
                        this._isStopped() ? t && this.disablePriceRangeReady() : t && (this._changeInputsImpl(e, (0, n.ensureDefined)((0, z.clone)(this._inputs))), (0, n.ensureNotNull)(this.model().alertsWatcher()).syncSourceAlertLabels(this))
                    })).catch((e => {
                        kt.logError("ERROR: " + this._debugId() + " _tryChangeInputs: cannot modify study, " + e)
                    }));
                    else {
                        t && this.stop(!0);
                        const i = this._apiInputs(),
                            s = (0, n.ensureDefined)((0, z.clone)(this._inputs));
                        if (JSON.stringify(i) !== JSON.stringify(this._inputs)) {
                            const t = this._calcSources();
                            if (Et || t.length === this._sources.length && t[0] === this._sources[0]) {
                                const e = Qt(this._metaInfo, i, s);
                                this._updateParentSources(t, e)
                            } else this._rebindToSourceOrRestorePreviousValue(null !== (e = t[0]) && void 0 !== e ? e : this._series, i, s);
                            this._inputs = i
                        }
                    }
                    this._tagsChanged.fire()
                }
                _debugId() {
                    const e = [];
                    return this._studyId && e.push(this._studyId), e.push(this._metaInfo.fullId), e.push(this._metaInfo.description), JSON.stringify({
                        study: e
                    })
                }
                _onCurrencyMayChange() {
                    if (null !== this._currencySourceSymbolInputProperty) {
                        const e = this.currency();
                        this._updateCurrencySourceSymbolInfo(), e !== this.currency() && this._onCurrencyChanged()
                    }
                }
                _fillPrecalculatedAutoscaleInfo(e, t) {
                    const i = this._metaInfo,
                        s = this.properties().childs(),
                        r = new Set,
                        n = this._metaInfo.filledAreas || [];
                    for (let e = 0; e < n.length; e++) {
                        const t = n[e];
                        s.filledAreasStyle.childs()[t.id].childs().visible.value() && (r.add(t.objAId), r.add(t.objBId))
                    }
                    return i.plots.filter((e => !(0,
                        L.isPlotWithTechnicalValues)(e))).filter((e => r.has(e.id) || this.isPlotVisibleAt(e.id, 1))).reduce(((i, s) => this._applyPlotToPrecalculatedAutoscaleInfo(e, t, i, s)), {
                        fields: [],
                        useMainSeriesRange: !1,
                        baseValueMinMax: null
                    })
                }
                _firstSourceOrSeries() {
                    var e;
                    return null !== (e = this._sources[0]) && void 0 !== e ? e : this._series
                }
                _skipHistogramBaseOnAutoScale() {
                    return !1
                }
                _updateParentSources(e, t) {
                    if (this._sources.forEach((e => e.unsetChild(this))), e.forEach((e => e.setChild(this))), this._sources = e, 0 !== t && this._sources.length <= 1) {
                        const e = this._firstSourceOrSeries(),
                            t = this.m_priceScale,
                            i = (0, n.ensureNotNull)(e.priceScale());
                        if (t !== i) {
                            const t = this._model.paneForSource(this),
                                s = (0, n.ensureNotNull)(this._model.paneForSource(e));
                            t === s && s.move(this, i, !0)
                        }
                    }
                }
                _calcSources() {
                    const e = this._properties.childs().inputs.state();
                    return I.StudyMetaInfo.getSourceIdsByInputs(this._metaInfo.inputs, e).map((e => {
                        if ("high" === e || "open" === e || "low" === e || "close" === e || "hl2" === e || "ohl3" === e || "ohlc4" === e) return null; {
                            const t = this._model.allStudies().find((t => t.canHaveChildren() && t.id() === e));
                            return null != t ? t : null
                        }
                    })).filter(z.notNull)
                }
                _isStopped() {
                    return !this.isStarted()
                }
                _onDataUnpacked(e, t, i, s) {
                    if (this._isDestroyed) return;
                    "nochange" !== t && this._processPlotOffsets(s), this._transformData(e);
                    const r = this._mergeData(e);
                    null !== s && (s.indexes_replace ? ((0, n.assert)("nochange" !== t), this._graphics.replaceIndexesTo(t)) : ("nochange" !== t && this._graphics.replaceIndexesTo(t), void 0 !== s.graphicsCmds && this._graphics.processCommands(s.graphicsCmds, this._metaInfo.graphics))), this._onDataUpdated(e, s, t, r && r.index), this.priceRangeReady() || this._enablePriceRangeReady(), this._dataUpdated.fire(i, !1, r)
                }
                _processPlotOffsets(e) {
                    if (e && e.indexes_replace) return;
                    const t = this._plotOffsets;
                    this._plotOffsets = e && e.offsets || {}, (0, s.default)(t, this._plotOffsets) || this.updateAllViews((0, gt.sourceChangeEvent)({
                        sourceId: this.id(),
                        clearData: !0
                    })), this._updateMaxOffsetValue()
                }
                _applyPlotToPrecalculatedAutoscaleInfo(e, t, i, s) {
                    var r;
                    const o = s.id,
                        l = this._properties.childs().styles.childs()[o],
                        a = (0, L.isShapesPlot)(s) || (0, L.isCharsPlot)(s);
                    i.useMainSeriesRange = i.useMainSeriesRange || (0, L.isArrowsPlot)(s);
                    let d = (0, L.isLinePlot)(s) || (0, L.isOhlcPlot)(s);
                    if (a) {
                        const e = (0, n.ensureDefined)(l).childs().location.value(),
                            t = [M.MarkLocation.Absolute, M.MarkLocation.Top, M.MarkLocation.Bottom].indexOf(e) < 0;
                        i.useMainSeriesRange = i.useMainSeriesRange || a && t, d = d || e === M.MarkLocation.Absolute
                    }
                    if (!d) return i;
                    const h = {
                            name: o,
                            offset: this.offset(o)
                        },
                        u = l.childs().plottype.value();
                    if (!this._skipHistogramBaseOnAutoScale() && [L.LineStudyPlotStyle.Histogram, L.LineStudyPlotStyle.Columns, L.LineStudyPlotStyle.Area].indexOf(u) >= 0) {
                        const s = (0, n.ensureDefined)(null === (r = this._metaInfo.styles) || void 0 === r ? void 0 : r[o]).histogramBase,
                            l = this.data().minMaxOnRangeCached(e, t, [h]);
                        return (0, z.isNumber)(s) && null !== l && (i.baseValueMinMax = (0, C.mergeMinMax)(i.baseValueMinMax, {
                            min: s,
                            max: s
                        }), i.baseValueMinMax = (0, C.mergeMinMax)(i.baseValueMinMax, l)), i
                    }
                    return i.fields.push(h), i
                }
                _onSourceInputChanged() {
                    if (!this.isStarted()) {
                        const e = this._calcSources();
                        Et || e[0] === this._sources[0] || this._rebindToSource(e[0], this._apiInputs())
                    }
                }
                _rebindToSourceOrRestorePreviousValue(e, t, i) {
                    let s = !0;
                    if (!this._rebindToSource(e, t)) {
                        const e = this._properties.childs().inputs.state(),
                            r = I.StudyMetaInfo.getSourceIdsByInputs(this._metaInfo.inputs, e)[0];
                        for (const e of Object.keys(i)) {
                            const o = (0, le.getInputValue)(i[e]),
                                l = (0, le.getInputValue)(t[e]);
                            if (i.hasOwnProperty(e) && o !== l && r && (0, z.isString)(l) && 0 === l.indexOf(r)) {
                                const t = (0, n.ensureDefined)(this._properties.childs().inputs.child(e)),
                                    r = (0, le.getInputValue)(i[e]);
                                t.setValue(r), s = !1;
                                break
                            }
                        }
                    }
                    return s
                }
                _rebindToSource(e, t) {
                    const s = this.isStarted() && this._chartApi.isConnected().value(),
                        r = this._firstSourceOrSeries();
                    let l;
                    const a = (0, z.clone)((0, n.ensureDefined)(t)),
                        d = e instanceof ei ? [e, ...this._sources] : this._sources;
                    if (I.StudyMetaInfo.patchSoSInputs(a, (e => {
                            var t, i;
                            return null !== (i = null === (t = d.find((t => t.id() === e))) || void 0 === t ? void 0 : t.sourceId()) && void 0 !== i ? i : null
                        })), this.isChildStudy()) {
                        let t;
                        this._sources[0].unsetChild(this);
                        let i = null;
                        if (e === this._model.mainSeries()) this._sources = [], this._ownerSource = null, t = this._series.seriesSource().instanceId(), i = 2;
                        else {
                            if (!(e instanceof ei)) return kt.logError("Unable to rebind study to source of this type"), !1;
                            this._ownerSource = e, this._sources = [e], t = e.sourceId(), e.setChild(this), null === t && (l = e)
                        }
                        s && null !== t && (this._incrementTurnaround(), this.disablePriceRangeReady(), this._chartApi.rebindStudy((0, n.ensureNotNull)(this._studyId), this._turnaround, t, this._studyName, a, this._handler, i))
                    } else {
                        if (!(e instanceof ei)) return kt.logError("Unable to rebind study to source of this type"), !1;
                        if (s) {
                            if (!this._chartApi.canCreateStudy(!0)) {
                                const e = window.user.pro_plan;
                                return (0, m.createGoProDialog)({
                                    feature: "studyOnStudy",
                                    actions: e && [g.ProPlans.ProPremium, g.ProPlans.ProPremiumTrial].includes(e) ? [{
                                        text: o.t(null, void 0, i(875139)),
                                        action: v.PredefinedAction.Close
                                    }] : void 0
                                }), !1
                            }
                            const t = e.sourceId();
                            if (null !== t) {
                                this._incrementTurnaround(), this.disablePriceRangeReady();
                                const e = this._chartApi.rebindStudy((0, n.ensureNotNull)(this._studyId), this._turnaround, t, this._studyName, a, this._handler, 1);
                                (0, n.assert)(e)
                            } else l = e
                        }
                        this._ownerSource = e, this._sources = [e], e.setChild(this), this._childStudyByRebind.fire()
                    }
                    l && (this.isStarted() && this.stop(), l.start(!0)), r instanceof ei && r.processHibernate();
                    const h = this.m_priceScale,
                        u = (0, n.ensureNotNull)(e.priceScale());
                    if (h !== u) {
                        const t = this._model.paneForSource(this),
                            i = (0, n.ensureNotNull)(this._model.paneForSource(e));
                        t === i && i.move(this, u, !0)
                    }
                    const c = this._firstSourceOrSeries();
                    return r.formatterChanged().unsubscribe(this, this._onSourceFormatterChanged), c.formatterChanged().subscribe(this, this._onSourceFormatterChanged), r.priceStepChanged().unsubscribe(this, this._onSourcePriceStepChanged), c.priceStepChanged().subscribe(this, this._onSourcePriceStepChanged), r.currencyChanged().unsubscribeAll(this), c.currencyChanged().subscribe(this, this._onSourceCurrencyChanged), r.unitChanged().unsubscribeAll(this), c.unitChanged().subscribe(this, this._onSourceUnitChanged), r.priceRangeReadyChanged().unsubscribeAll(this),
                        c.priceRangeReadyChanged().subscribe(this, this._onSourcePriceRangeReadyChanged), this._recreatePriceFormattingDependencies(), !0
                }
                _buildInputs(e) {
                    (0, n.assert)(!!e, "options not set");
                    let t = {};
                    try {
                        t = this._prepareInputs(e)
                    } catch (e) {
                        kt.logWarn("Failed to prepare study inputs: " + e)
                    }
                    if (e.asObject) {
                        const e = {};
                        return Object.keys(t).forEach((i => {
                            null != t[i] && (e[i] = t[i])
                        })), e
                    } {
                        const e = [];
                        return Object.keys(t).forEach((i => {
                            null != t[i] && e.push(t[i])
                        })), e
                    }
                }
                _prepareInput(e, t) {
                    const i = this._prepareInputValue(e, t);
                    return !e.isFake || t.fakeInputsForDisplay || t.onlyAtomValues ? i : {
                        v: i,
                        f: !0,
                        t: e.type
                    }
                }
                _plotsForAlert() {
                    return (0, f.plotsForAlert)(this.metaInfo(), this.offset.bind(this))
                }
                _dependenciesForAlerts() {
                    const e = this._getAllOwnerSources().filter((e => e instanceof ei));
                    return (0, f.dependenciesForAlerts)(e, this._model.studyMetaInfoRepository())
                }
                _calcIsActualInterval() {
                    const e = this._isActualInterval;
                    this._isActualInterval = (0, mt.isActualInterval)(this._series.intervalObj(), this._properties.childs().intervalsVisibilities), e !== this._isActualInterval && (this._onIsActualIntervalChange.fire(), this._visibleChanged(), this.processHibernate())
                }
                _visibleChanged() {
                    this._series.invalidateBarColorerCache()
                }
                _getNonPriceParent() {
                    const e = this._sources;
                    for (const t of e)
                        if (t instanceof ei) {
                            const e = t.metaInfo();
                            return e.is_price_study && "Compare@tv-basicstudies" !== e.id ? t._getNonPriceParent() : t
                        }
                    return null
                }
                _updateInputValue(e, t) {
                    const i = this._properties.childs().inputs.childs();
                    if (i[t.id])
                        if ("price" === t.type) i[t.id].setValue(e.price);
                        else if ("time" === t.type) {
                        const s = this._model.timeScale().indexToTimePoint(e.index);
                        null !== s && i[t.id].setValue(1e3 * s)
                    }
                }
                _initializeStudyInputsPaneViews() {
                    const e = (0, le.editableStudyInputs)(this._metaInfo.inputs);
                    if (0 === e.length) return;
                    const t = {
                        convertPriceToCoordinate: e => {
                            const t = this.priceScale();
                            if (null !== t && !t.isEmpty()) {
                                const i = this.firstValue();
                                if (null !== i) return t.priceToCoordinate(e, i)
                            }
                            return null
                        },
                        formatPrice: e => {
                            const t = this.priceScale();
                            if (null !== t && !t.isEmpty()) {
                                const i = this.firstValue();
                                if (null !== i) return t.formatPrice(e, i)
                            }
                            return ""
                        },
                        getInputValue: e => {
                            var t, i;
                            return null !== (i = null === (t = this._properties.childs().inputs.child(e)) || void 0 === t ? void 0 : t.value()) && void 0 !== i ? i : null
                        },
                        isSelected: () => this._model.selection().isSelected(this),
                        isHovered: () => this === this._model.hoveredSource()
                    };
                    Promise.all([i.e(62183).then(i.bind(i, 852482)), i.e(62183).then(i.bind(i, 367023)), i.e(62183).then(i.bind(i, 212112)), i.e(62183).then(i.bind(i, 10463))]).then((i => {
                        const [s, r, n, o] = i;
                        this._inputsAnchorsPaneView = new s.StudyInputsAnchorsPaneView(e, this._model, t);
                        const l = e.filter((e => !Array.isArray(e)));
                        this._inputsLinesPaneView = new r.StudyInputsLinesPaneView(l, this._model, t);
                        let a = !1;
                        e.forEach((e => {
                            if (Array.isArray(e)) {
                                const i = "time" === e[0].type ? e[0] : e[1],
                                    s = "price" === e[0].type ? e[0] : e[1];
                                this._inputsTimeAxisPaneViews.push(new n.StudyInputTimeAxisPaneView(i, this._model, t.getInputValue)), this._inputsPriceAxisPaneViews.push(new o.StudyInputPriceAxisPaneView(s, t)), a = !0
                            } else "time" === e.type ? this._inputsTimeAxisPaneViews.push(new n.StudyInputTimeAxisPaneView(e, this._model, t.getInputValue)) : (this._inputsPriceAxisPaneViews.push(new o.StudyInputPriceAxisPaneView(e, t)), a = !0)
                        })), a && this.formatterChanged().subscribe(this, this.invalidateTitleCache)
                    }))
                }
                _updateCurrencySourceSymbolInfo() {}
                _initializeCurrencySource() {
                    var e, t;
                    const i = this.metaInfo(),
                        s = "symbolInputSymbolSource" === (null === (e = i.symbolSource) || void 0 === e ? void 0 : e.type) && (null === (t = i.symbolSource) || void 0 === t ? void 0 : t.inputId),
                        r = i.inputs.find((e => e.id === s)),
                        n = "symbol" === (null == r ? void 0 : r.type);
                    if ("string" == typeof s && n && i.is_price_study) {
                        const e = this._properties.childs().inputs.childs()[s];
                        void 0 !== e && (e.subscribe(this, this._onCurrencyMayChange), this._currencySourceSymbolInputProperty = e)
                    }
                }
                _recreatePaneViews() {
                    this.hasBarColorer() && this._model.mainSeries().invalidateBarStylesCache(), this._createViews(), this.recalculate(), this.updateAllViews((0, gt.sourceChangeEvent)(this.id()))
                }
                _pinePatchPropsAllowed() {
                    return (this.isStarted() || this._metaInfo.inputs.some((e => "symbol" === e.type))) && !this._restarting
                }
                _pinePatchProps() {
                    this._deferredPinePatchProps = !1;
                    const e = this._prepareInputs({
                        fakeInputsForDisplay: !1,
                        symbolsForDisplay: !1,
                        symbolsForChartApi: !0,
                        skipHiddenInputs: !0,
                        skipFakeInputs: !1,
                        onlyAtomValues: !0,
                        skipBooleanInputs: !1,
                        skipColorInputs: !1,
                        skipTimeInputs: !1,
                        skipOptionalEmptySymbolInputs: !1,
                        skippedGroups: [],
                        skippedInputs: [],
                        noExchanges: !1,
                        noResolution: !1,
                        keepOptionalSymbolsEmpty: !1,
                        skipTextareaInputs: !1,
                        priceInputsForDisplay: !1,
                        patchSosInputs: !1
                    });
                    if (!this._areStudyInputsModified(e)) return;
                    this._oldStudyInputs = e;
                    const t = (0, y.patchPropertiesAsync)(this._properties, this._metaInfo, e),
                        i = this._allSymbolsAreResolved();
                    Promise.all([t, i]).then((() => {
                        this._createViews(), this.recalculate(), this.updateAllViews((0, gt.sourceChangeEvent)(this.id())), this.invalidateTitleCache()
                    })).catch((e => {
                        kt.logError(`ERROR: ${this._debugId()} pine inputs patching failed, reason: ${e}`)
                    }))
                }
                _areStudyInputsModified(e) {
                    if (0 === Object.keys(e).length) return !1;
                    if (void 0 === this._oldStudyInputs) return !0;
                    const t = Object.keys(this._oldStudyInputs);
                    (0, n.assert)(t.length === Object.keys(e).length, "keys quantity should be equal");
                    for (const i of t)
                        if ((0, n.assert)(e.hasOwnProperty(i), `key '${i}' should exist in study inputs`), (0, n.ensureDefined)(this._oldStudyInputs)[i] !== e[i]) return !0;
                    return !1
                }
                _getStudyErrorText(e) {
                    var t;
                    switch (null === (t = e.match(/^study_not_auth:(.*)?@.*/)) || void 0 === t ? void 0 : t[1]) {
                        case "Script":
                        case "StrategyScript":
                            return "This script is invite-only. To request access, please contact its author.";
                        case "VbPSessions":
                        case "VbPPeriodic":
                        case "VbPVisible":
                            return "Volume Profile indicator available only on our upgraded plans."
                    }
                    return e.split(":", 2)[0]
                }
            }
        },
        83387: (e, t, i) => {
            i.d(t, {
                StudyPriceAxisView: () => o
            });
            var s = i(650151),
                r = i(841404),
                n = i(114123);
            class o extends r.PriceAxisView {
                constructor(e, t) {
                    super(), this._model = e.model(), this._source = e, this._data = t
                }
                _updateRendererData(e, t, i) {
                    e.visible = !1, t.visible = !1;
                    const r = this._source.model(),
                        o = this._source.priceScale();
                    if (null === o) return;
                    if (!r.isPriceScaleVisible(o)) return;
                    const l = this._source.lastValueData(this._data.plotIndex, !1);
                    if (l.noData) return;
                    const a = r.timeScale().visibleBarsStrictRange(),
                        d = r.mainSeries().bars().lastIndex();
                    if (null !== a && null !== d) {
                        if (d <= a.lastBar()) {
                            i.background = (0, n.resetTransparency)(l.color);
                            let s = l.color;
                            "transparent" === s && (s = this._model.properties().childs().scalesProperties.childs().backgroundColor.value()), i.textColor = this.generateTextColor(s), i.borderColor = void 0, e.borderVisible = !1, t.borderVisible = !1
                        } else {
                            const o = r.backgroundColorAtYPercentFromTop(l.coordinate / (0, s.ensureNotNull)(r.paneForSource(this._source)).height());
                            i.background = o, i.textColor = (0, n.resetTransparency)(l.color), i.borderColor = (0, n.resetTransparency)(i.textColor), e.borderVisible = !0, t.borderVisible = !0
                        }
                        i.coordinate = l.coordinate, i.floatCoordinate = l.floatCoordinate, this._showAxisLabel() && (e.text = l.text, e.visible = !0), this._updatePaneRendererData(t)
                    }
                }
                _showPaneLabel() {
                    const e = this._model.properties().childs().scalesProperties.childs();
                    return (e.showStudyPlotLabels.value() || e.showFundamentalNameLabel.value()) && this._source.properties().childs().showLabelsOnPriceScale.value() && this._source.isPlotVisibleAt(this._data.plotIndex, 4)
                }
                _showAxisLabel() {
                    const e = this._model.properties().childs().scalesProperties.childs();
                    return (e.showStudyLastValue.value() || e.showFundamentalLastValue.value()) && this._source.properties().childs().showLabelsOnPriceScale.value() && this._source.isPlotVisibleAt(this._data.plotIndex, 4)
                }
                _updatePaneRendererData(e) {
                    e.text = "", this._showPaneLabel() && (e.text = this._source.priceLabelText(this._data.plotIndex), e.visible = !0)
                }
            }
        },
        392462: (e, t, i) => {
            i.d(t, {
                plotShapesData: () => r
            });
            var s = i(777754);
            const r = {
                shape_arrow_down: {
                    guiName: s.t(null, void 0, i(348732)),
                    id: "shape_arrow_down",
                    paneRendererClass: "PaneRendererArrowDown",
                    pineName: "shape.arrowdown",
                    icon: "arrow_down"
                },
                shape_arrow_up: {
                    guiName: s.t(null, void 0, i(610650)),
                    id: "shape_arrow_up",
                    paneRendererClass: "PaneRendererArrowUp",
                    pineName: "shape.arrowup",
                    icon: "arrow_up"
                },
                shape_circle: {
                    guiName: s.t(null, void 0, i(490068)),
                    id: "shape_circle",
                    paneRendererClass: "PaneRendererCircleShape",
                    pineName: "shape.circle",
                    icon: "circle"
                },
                shape_cross: {
                    guiName: s.t(null, void 0, i(429908)),
                    id: "shape_cross",
                    paneRendererClass: "PaneRendererCrossShape",
                    pineName: "shape.cross",
                    icon: "cross"
                },
                shape_diamond: {
                    guiName: s.t(null, void 0, i(773720)),
                    id: "shape_diamond",
                    paneRendererClass: "PaneRendererDiamond",
                    pineName: "shape.diamond",
                    icon: "diamond"
                },
                shape_flag: {
                    guiName: s.t(null, void 0, i(121524)),
                    id: "shape_flag",
                    paneRendererClass: "PaneRendererFlagShape",
                    pineName: "shape.flag",
                    icon: "flag"
                },
                shape_label_down: {
                    guiName: s.t(null, void 0, i(318528)),
                    id: "shape_label_down",
                    paneRendererClass: "PaneRendererLabelDown",
                    pineName: "shape.labeldown",
                    icon: "label_down"
                },
                shape_label_up: {
                    guiName: s.t(null, void 0, i(513046)),
                    id: "shape_label_up",
                    paneRendererClass: "PaneRendererLabelUp",
                    pineName: "shape.labelup",
                    icon: "label_up"
                },
                shape_square: {
                    guiName: s.t(null, void 0, i(944904)),
                    id: "shape_square",
                    paneRendererClass: "PaneRendererSquare",
                    pineName: "shape.square",
                    icon: "square"
                },
                shape_triangle_down: {
                    guiName: s.t(null, void 0, i(483356)),
                    id: "shape_triangle_down",
                    paneRendererClass: "PaneRendererTriangleApexDown",
                    pineName: "shape.triangledown",
                    icon: "triangle_down"
                },
                shape_triangle_up: {
                    guiName: s.t(null, void 0, i(928340)),
                    id: "shape_triangle_up",
                    paneRendererClass: "PaneRendererTriangleApexUp",
                    pineName: "shape.triangleup",
                    icon: "triangle_up"
                },
                shape_xcross: {
                    guiName: s.t(null, void 0, i(707050)),
                    id: "shape_xcross",
                    paneRendererClass: "PaneRendererXCross",
                    pineName: "shape.xcross",
                    icon: "x_cross"
                }
            }
        },
        837512: (e, t, i) => {
            i.d(t, {
                TextWidthCache: () => s
            });
            class s {
                constructor(e = 150) {
                    this._actualSize = 0, this._usageTick = 1, this._oldestTick = 1, this._tick2Labels = new Map, this._cache = new Map, this._maxSize = e
                }
                reset() {
                    this._actualSize = 0, this._cache.clear(), this._usageTick = 1, this._oldestTick = 1, this._tick2Labels.clear()
                }
                measureText(e, t) {
                    return this.getMetrics(e, t).width
                }
                yMidCorrection(e, t) {
                    const i = this.getMetrics(e, t);
                    return "actualBoundingBoxAscent" in i && "actualBoundingBoxDescent" in i ? (i.actualBoundingBoxAscent - i.actualBoundingBoxDescent) / 2 : 0
                }
                getMetrics(e, t) {
                    const i = this._cache.get(t);
                    if (void 0 !== i) return i.metrics;
                    if (this._actualSize === this._maxSize) {
                        const e = this._tick2Labels.get(this._oldestTick);
                        this._tick2Labels.delete(this._oldestTick), this._cache.delete(e), this._oldestTick++, this._actualSize--
                    }
                    e.save(), e.textBaseline = "middle";
                    const s = e.measureText(t);
                    return e.restore(), 0 === s.width && t.length || (this._cache.set(t, {
                        metrics: s,
                        tick: this._usageTick
                    }), this._tick2Labels.set(this._usageTick, t), this._actualSize++, this._usageTick++), s
                }
            }
        },
        831356: (e, t, i) => {
            i.d(t, {
                createVisibilityController: () => a
            });
            var s = i(777754),
                r = i(778785),
                n = i(506845),
                o = i(62802);

            function l(e) {
                return "alwaysOn" === e || "alwaysOff" === e ? e : "visibleOnMouseOver"
            }

            function a(e, t) {
                let a, d;

                function h() {
                    if (!a) {
                        a = (0, n.createPrimitiveProperty)();
                        let i = o.getValue(e);
                        void 0 === i && void 0 !== t && (i = o.getValue(t)), a.setValue(l(i)), a.subscribe(a, (t => {
                            o.setValue(e, l(t.value()))
                        }))
                    }
                    return a
                }
                return {
                    property: h,
                    availableValues: function() {
                        return [{
                            id: "visibleOnMouseOver",
                            value: "visibleOnMouseOver",
                            title: s.t(null, void 0, i(689960))
                        }, {
                            id: "alwaysOn",
                            value: "alwaysOn",
                            title: s.t(null, void 0, i(471997))
                        }, {
                            id: "alwaysOff",
                            value: "alwaysOff",
                            title: s.t(null, void 0, i(109408))
                        }]
                    },
                    actualBehavior: function() {
                        if (!d) {
                            d = (0, n.createPrimitiveProperty)();
                            const e = h(),
                                t = () => {
                                    let t = e.value();
                                    "alwaysOn" !== t && "alwaysOff" !== t && (t = r.mobiletouch ? "alwaysOn" : "visibleOnMouseOver"), d && d.setValue(t)
                                };
                            e.subscribe(d, t), t()
                        }
                        return d
                    }
                }
            }
        },
        615494: (e, t, i) => {
            function s(e, t) {
                const i = new Map;
                return function(...s) {
                    const r = "" + (t ? t.apply(null, s) : s[0]);
                    if (!i.has(r)) {
                        const t = e.apply(this, s);
                        return i.set(r, t), t
                    }
                    return i.get(r)
                }
            }

            function r(e) {
                return (t, i, r) => {
                    const n = r.value,
                        o = Symbol();
                    return {
                        get() {
                            return void 0 === this[o] && (this[o] = s(n, e)), this[o].bind(this)
                        }
                    }
                }
            }
            i.d(t, {
                memoize: () => s,
                memoizeDecorator: () => r
            })
        }
    }
]);
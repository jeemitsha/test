"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [20507], {
        586335: (e, t, i) => {
            var n = i(43329),
                o = n.min,
                r = n.max,
                s = i(96841).MarkLocation;

            function a() {}
            a.prototype._locationToY = function(e, t, i) {
                i || (i = 0);
                var n, a = [],
                    l = this._provider.priceScale();
                switch (e) {
                    case s.AboveBar:
                        n = TradingView.HIGH_PLOT;
                        break;
                    case s.BelowBar:
                        n = TradingView.LOW_PLOT
                }
                var d = this._provider.firstValue();
                i >= 1 && (i -= 1);
                for (var h = -i; h <= i; h++) {
                    var c = this._provider.series().bars().valueAt(t + h);
                    if (null !== c) {
                        var u = c[n];
                        a.push(l.priceToCoordinate(u, d))
                    }
                }
                switch (e) {
                    case s.AboveBar:
                        return o(a) - 15;
                    case s.BelowBar:
                        return r(a) + 15
                }
            }, e.exports = a
        },
        319942: (e, t, i) => {
            i.r(t), i.d(t, {
                BackgroundPaneView: () => l
            });
            var n = i(650151),
                o = i(28035),
                r = i(741341),
                s = i(114123);
            class a {
                constructor(e) {
                    this._data = e
                }
                hitTest(e) {
                    return null
                }
                draw(e, t) {}
                drawBackground(e, t) {
                    const i = this._data,
                        n = (0, s.generateColor)(this._data.color, this._data.transparency),
                        o = t.pixelRatio,
                        a = Math.round(i.x1 * o),
                        l = Math.round(i.x2 * o);
                    (0, r.fillRect)(e, a, 0, l - a, t.physicalHeight, n)
                }
            }
            class l {
                constructor(e, t, i) {
                    this._data = [], this._invalidated = !0, this._provider = e, this._model = t, this._data = []
                }
                update() {
                    this._invalidated = !0
                }
                renderer() {
                    this._invalidated && (this._updateViewInternal(), this._invalidated = !1);
                    const e = new o.CompositeRenderer;
                    for (const t of this._data) e.append(new a(t));
                    return e
                }
                _updateViewInternal() {
                    this._data = [];
                    const e = this._provider.priceScale(),
                        t = this._model.timeScale();
                    if (!e || e.isEmpty() || t.isEmpty()) return;
                    const i = this._provider.graphics().backgrounds();
                    if (0 === i.size) return;
                    const o = this._model.timeScale().visibleBarsStrictRange();
                    if (null === o) return;
                    const r = o.firstBar(),
                        s = o.lastBar(),
                        a = (0, n.ensureDefined)(this._provider.properties().childs().graphics.childs().backgrounds);
                    i.forEach(((e, i) => {
                        const o = (0, n.ensureDefined)(a.childs()[i]).childs();
                        if (!o.visible.value()) return;
                        let l, d;
                        e.forEach((e => {
                            const i = null !== e.start ? e.start : (0, n.ensureNotNull)(t.points().range().value()).firstIndex,
                                a = e.stop;
                            if (a < r || s < i) return;
                            let h = t.indexToCoordinate(i) - .5 * t.barSpacing();
                            const c = t.indexToCoordinate(a) + .5 * t.barSpacing();
                            d === i - 1 && (h = l || h), l = c, d = a, h < 0 && c < 0 || h > t.width() && c > t.width() || this._data.push({
                                x1: h,
                                x2: c,
                                color: o.color.value(),
                                transparency: o.transparency.value()
                            })
                        }))
                    }))
                }
            }
        },
        938783: (e, t, i) => {
            i.r(t), i.d(t, {
                DwgBoxPaneView: () => D,
                getDwgBoxDrawPattern: () => S
            });
            var n = i(650151),
                o = i(86441),
                r = i(278056),
                s = i(586335),
                a = i.n(s),
                l = i(297559),
                d = i(117168),
                h = i(934026),
                c = i(858063),
                u = i(914679),
                p = i(631586),
                f = i(544445),
                x = i(442554);

            function _(e, t) {
                const i = e.style.extendLeft ? 0 : e.leftTop.x,
                    n = e.style.extendRight ? t : e.rightBottom.x;
                return (0, o.box)((0, o.point)(i, e.leftTop.y), (0, o.point)(n, e.rightBottom.y))
            }
            class g {
                constructor(e) {
                    this._textRenderer = new f.TextRenderer, this._locs = e
                }
                draw(e, t) {
                    e.lineCap = "butt";
                    const i = Math.max(1, Math.floor(t.pixelRatio));
                    this._locs.forEach((o => {
                        const r = Math.round(o.leftTop.x * t.pixelRatio),
                            s = Math.round(o.leftTop.y * t.pixelRatio),
                            a = Math.round(o.rightBottom.x * t.pixelRatio),
                            l = Math.round(o.rightBottom.y * t.pixelRatio),
                            d = o.style,
                            h = Math.round(d.borderWidth * t.pixelRatio);
                        if ((0,
                                u.fillRectWithBorder)(e, r, s, a, l, d.backgroundColor, d.borderColor, h, p.LINESTYLE_SOLID, d.extendLeft, d.extendRight, "inner", t.physicalWidth, 1 === i ? 1 : 0, d.dashPattern), d.text) {
                            const i = Math.abs(o.rightBottom.x - o.leftTop.x),
                                r = Math.abs(o.rightBottom.y - o.leftTop.y),
                                s = Math.min(o.rightBottom.x, o.leftTop.x),
                                a = Math.min(o.rightBottom.y, o.leftTop.y);
                            "auto" !== d.text.fontSizeMode && "auto" !== d.text.wordWrap || (e.save(), e.beginPath(), e.rect(s * t.pixelRatio, a * t.pixelRatio, i * t.pixelRatio, r * t.pixelRatio), e.clip());
                            const l = {
                                    textSizeMode: d.text.fontSizeMode,
                                    fontSize: d.text.fontSize
                                },
                                h = {
                                    horizontalTextAlignment: d.text.horizontalTextAlignment,
                                    verticalTextAlignment: d.text.verticalTextAlignment,
                                    text: d.text.text,
                                    textColor: d.text.textColor,
                                    sizeOptions: l,
                                    fontType: o.style.fontType
                                },
                                c = (0, x.textBoxData)(s, a, i, r, h);
                            c.wordWrapWidth = "auto" === d.text.wordWrap ? Math.max(1, i - (0, n.ensureDefined)(c.fontSize) / 6) : void 0, this._textRenderer.setData(c), this._textRenderer.draw(e, t), "auto" === d.text.fontSizeMode && e.restore()
                        }
                    }))
                }
                hitTest(e, t) {
                    for (const i of this._locs)
                        if ((0, h.pointInBox)(e, _(i, t.cssWidth))) return new c.HitTestResult(c.HitTestResult.REGULAR);
                    return null
                }
            }
            var w = i(519872),
                v = i(228804);
            class y extends v.AbstractMapContainer {
                constructor(e) {
                    super(), this._maxSize = e, this._keysQueue = []
                }
                get(e) {
                    const t = this._keysForData(e);
                    if (null === t) return null;
                    const [i, n, o] = t, r = (0, v.getDefault2)(this._map, i, n, new Map);
                    let s = r.get(o);
                    return void 0 !== s || (this._size >= this._maxSize ? this._deleteFirstKey() : ++this._size, this._keysQueue.push(t), s = this._createValueItem(e), r.set(o, s)), s
                }
                _deleteFirstKey() {
                    const e = (0, n.ensureDefined)(this._keysQueue.shift()),
                        [t, i, o] = e,
                        r = (0, n.ensureDefined)(this._map.get(t)),
                        s = (0, n.ensureDefined)(r.get(i));
                    s.delete(o), 0 === s.size && r.delete(i), 0 === r.size && this._map.delete(t)
                }
            }
            var m = i(623331);
            const T = {
                bold: !1,
                italic: !1,
                font: m.CHART_FONT_FAMILY
            };
            class b extends y {
                constructor(e, t = T) {
                    super(e), this._fontOptions = t, this._measureCanvas = document.createElement("canvas"), this._measureContext = (0, n.ensureNotNull)(this._measureCanvas.getContext("2d"))
                }
                _keysForData(e) {
                    return [e.lines.join("\n"), e.boxWidth, e.boxHeight]
                }
                _createValueItem(e) {
                    return (0, x.calculateFontSizeForBox)(this._measureContext, this._fontOptions, e.lines, e.boxWidth, e.boxHeight)
                }
            }
            const R = new Map([
                [l.DwgBoxStyle.Solid, []],
                [l.DwgBoxStyle.Dashed, [5, 6]],
                [l.DwgBoxStyle.Dotted, [1, 2]]
            ]);

            function S(e) {
                const t = R.get(e);
                if (void 0 === t) throw new Error(`Unsupported box style: ${e}`);
                return t
            }
            const C = new r.RgbaFromIntegerCache;
            class D extends(a()) {
                constructor(e, t, i) {
                    super(), this._invalidated = !0, this._cacheByFontType = new Map([
                        [l.DwgBoxFontType.Monospace, new b(5e3, { ...T,
                            font: m.CHART_MONOSPACE_FONT_FAMILY
                        })],
                        [null, new b(5e3)]
                    ]), this._graphicsProvider = e, this._model = t, this._renderer = null
                }
                update() {
                    this._invalidated = !0
                }
                renderer(e, t) {
                    return this._invalidated && (this._renderer = null, this._invalidated = !1, this._updateRenderer(t, e)), this._renderer
                }
                _updateRenderer(e, t) {
                    const i = this._graphicsProvider.priceScale(),
                        r = this._model.timeScale();
                    if (!i || i.isEmpty() || r.isEmpty()) return;
                    const s = this._graphicsProvider.graphics().dwgboxes();
                    if (0 === s.size) return;
                    if (null === this._model.timeScale().visibleBarsStrictRange()) return;
                    const a = this._graphicsProvider.properties().childs().palettes.childs(),
                        l = this._graphicsProvider.metaInfo().isRGB;
                    if (!l && (void 0 === a || void 0 === a.palette_common)) return;
                    const h = l ? void 0 : (0, n.ensureDefined)(a.palette_common).childs().colors.childs(),
                        c = this._graphicsProvider.firstValue();
                    if (null === c) return;
                    const u = {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 0,
                            extend: d.DwgExtend.None
                        },
                        p = [],
                        f = (0, n.ensureDefined)(this._graphicsProvider.properties().childs().graphics.childs().dwgboxes);
                    s.forEach(((s, a) => {
                        (0, n.ensureDefined)(f.childs()[a]).childs().visible.value() && s.forEach((n => {
                            if (null === n.backgroundColorIndex && null === n.borderColorIndex) return;
                            let s, a, f;
                            if (l ? (s = null === n.backgroundColorIndex ? void 0 : C.rgbaFromInteger(n.backgroundColorIndex), a = null === n.borderColorIndex ? void 0 : C.rgbaFromInteger(n.borderColorIndex), f = null === n.textColorIndex ? void 0 : C.rgbaFromInteger(n.textColorIndex)) : (s = null !== n.backgroundColorIndex ? h[n.backgroundColorIndex].childs().color.value() : void 0, a = null !== n.borderColorIndex ? h[n.borderColorIndex].childs().color.value() : void 0, f = null !== n.textColorIndex ? h[n.textColorIndex].childs().color.value() : void 0), void 0 === s && void 0 === a) return;
                            const x = (0, d.convertPointsToScreenDimension)(n.left, n.top, n.right, n.bottom, n.extend, i, r, e, c, u);
                            if (null === x) return;
                            const {
                                x1: _,
                                x2: g,
                                y1: w,
                                y2: v,
                                extend: y
                            } = x, m = Math.min(_, g), T = Math.max(_, g), b = Math.min(w, v), R = Math.max(w, v), D = {
                                borderWidth: n.borderWidth,
                                borderColor: a,
                                backgroundColor: s,
                                dashPattern: S(n.borderStyle),
                                extendLeft: (0, d.isExtendInSameDirection)(y, d.DwgExtend.Left),
                                extendRight: (0, d.isExtendInSameDirection)(y, d.DwgExtend.Right),
                                text: this._getTextStyleData(n, f, T - m, R - b),
                                fontType: n.fontType
                            }, M = {
                                leftTop: new o.Point(Math.min(m, T), b),
                                rightBottom: new o.Point(Math.max(m, T), R),
                                style: D
                            }, P = M.rightBottom.x < -M.style.borderWidth && !M.style.extendRight, L = M.leftTop.x > e + M.style.borderWidth && !M.style.extendLeft, I = M.rightBottom.y < -M.style.borderWidth, B = M.leftTop.y > t + M.style.borderWidth;
                            P || L || I || B || p.push(M)
                        }))
                    })), this._renderer = new g(p)
                }
                _getTextStyleData(e, t, i, o) {
                    const r = e.fontSize,
                        s = e.text && t ? {
                            text: e.text,
                            wordWrap: e.wordWrap,
                            textColor: t,
                            horizontalTextAlignment: e.horizontalTextAlignment,
                            verticalTextAlignment: e.verticalTextAlignment
                        } : void 0;
                    if (s && r) {
                        const t = s;
                        if (e.fontSize === w.PlotSymbolSize.Auto) {
                            const r = {
                                lines: (0, f.wordWrap)((0, n.ensureDefined)(e.text), "", void 0),
                                boxWidth: i,
                                boxHeight: o
                            };
                            t.fontSizeMode = "auto";
                            const s = (0, n.ensureDefined)(this._cacheByFontType.get(e.fontType));
                            t.fontSize = (0, n.ensureNotNull)(s.get(r))
                        } else t.fontSizeMode = "fixed", t.fontSize = r;
                        return t
                    }
                }
            }
        },
        953617: (e, t, i) => {
            i.r(t), i.d(t, {
                DwgLabelPaneView: () => A
            });
            var n = i(650151),
                o = i(28035),
                r = i(21720),
                s = i(664348),
                a = i(385470),
                l = i(753346),
                d = i(644001),
                h = i(32895),
                c = i(696720),
                u = i(86441),
                p = i(929434);
            class f extends p.PaneRendererLabelBase {
                _calcBoundingBox(e) {
                    const t = e.x,
                        i = e.x + e.shapeWidth,
                        n = e.y - e.shapeHeight + e.vertOffset,
                        o = e.y + e.vertOffset,
                        r = new u.Point(t, n),
                        s = new u.Point(i, o);
                    return (0, u.box)(r, s)
                }
                _drawItemShape(e, t, i) {
                    const n = t.pixelRatio,
                        o = this._lineWidth(t) % 2 ? .5 : 0,
                        r = this._getArrowSize(i),
                        s = Math.round(i.x * n) + o,
                        a = Math.round((i.y + i.vertOffset) * n) + o,
                        l = Math.round((i.x + r) * n) + o,
                        d = Math.round((i.y + i.vertOffset - r) * n) + o,
                        h = Math.round((i.y + i.vertOffset - 2 * r) * n) + o;
                    e.moveTo(l, d), e.lineTo(s, a), e.lineTo(l, h);
                    const c = Math.round((i.y + i.vertOffset - i.shapeHeight) * n) + o,
                        u = Math.round((i.x + i.shapeWidth) * n) + o;
                    this._drawCorner(e, l, c, p.CornerVectorsClockwise.leftUp, n), this._drawCorner(e, u, c, p.CornerVectorsClockwise.rightUp, n), this._drawCorner(e, u, d, p.CornerVectorsClockwise.rightDown, n), e.lineTo(l, d)
                }
                _getArrowSize(e) {
                    return e.stepX / Math.sqrt(2)
                }
                _getHorizontalTextOffset(e) {
                    return e.shapeWidth / 2 + this._getArrowSize(e) / 2
                }
                _getVerticalTextOffset(e) {
                    return -e.shapeHeight / 2 - this._getArrowSize(e) / 2
                }
            }
            class x extends p.PaneRendererLabelBase {
                _calcBoundingBox(e) {
                    const t = e.x,
                        i = e.x + e.shapeWidth,
                        n = e.y + e.vertOffset,
                        o = e.y + e.shapeHeight + e.vertOffset,
                        r = new u.Point(t, n),
                        s = new u.Point(i, o);
                    return (0, u.box)(r, s)
                }
                _drawItemShape(e, t, i) {
                    const n = t.pixelRatio,
                        o = this._lineWidth(t) % 2 ? .5 : 0,
                        r = this._getArrowSize(i),
                        s = Math.round(i.x * n) + o,
                        a = Math.round((i.y + i.vertOffset) * n) + o,
                        l = Math.round((i.x + r) * n) + o,
                        d = Math.round((i.y + i.vertOffset + 2 * r) * n) + o,
                        h = Math.round((i.y + i.vertOffset + r) * n) + o,
                        c = Math.round((i.x + i.shapeWidth) * n) + o,
                        u = Math.round((i.y + i.vertOffset + i.shapeHeight) * n) + o;
                    e.moveTo(l, d), e.lineTo(s, a), e.lineTo(l, h), this._drawCorner(e, c, h, p.CornerVectorsClockwise.rightUp, n), this._drawCorner(e, c, u, p.CornerVectorsClockwise.rightDown, n), this._drawCorner(e, l, u, p.CornerVectorsClockwise.leftDown, n), e.lineTo(l, d)
                }
                _getArrowSize(e) {
                    return e.stepX / Math.sqrt(2)
                }
                _getHorizontalTextOffset(e) {
                    return e.shapeWidth / 2 + this._getArrowSize(e) / 2
                }
                _getVerticalTextOffset(e) {
                    return e.shapeHeight / 2 + this._getArrowSize(e) / 2
                }
            }
            class _ extends p.PaneRendererLabelBase {
                _calcBoundingBox(e) {
                    const t = e.x - e.shapeWidth,
                        i = e.x,
                        n = e.y - e.shapeHeight + e.vertOffset,
                        o = e.y + e.vertOffset,
                        r = new u.Point(t, n),
                        s = new u.Point(i, o);
                    return (0, u.box)(r, s)
                }
                _drawItemShape(e, t, i) {
                    const n = t.pixelRatio,
                        o = this._lineWidth(t) % 2 ? .5 : 0,
                        r = this._getArrowSize(i),
                        s = Math.round(i.x * n) + o,
                        a = Math.round((i.y + i.vertOffset) * n) + o,
                        l = Math.round((i.x - r) * n) + o,
                        d = Math.round((i.y + i.vertOffset - 2 * r) * n) + o,
                        h = Math.round((i.y + i.vertOffset - r) * n) + o,
                        c = Math.round((i.x - i.shapeWidth) * n) + o,
                        u = Math.round((i.y + i.vertOffset - i.shapeHeight) * n) + o;
                    e.moveTo(l, d), e.lineTo(s, a), e.lineTo(l, h), this._drawCorner(e, c, h, p.CornerVectorsClockwise.leftDown, n), this._drawCorner(e, c, u, p.CornerVectorsClockwise.leftUp, n), this._drawCorner(e, l, u, p.CornerVectorsClockwise.rightUp, n), e.lineTo(l, d)
                }
                _getArrowSize(e) {
                    return e.stepX / Math.sqrt(2)
                }
                _getVerticalTextOffset(e) {
                    return -e.shapeHeight / 2 - this._getArrowSize(e) / 2
                }
                _getHorizontalTextOffset(e) {
                    return -e.shapeWidth / 2 - this._getArrowSize(e) / 2
                }
            }
            class g extends p.PaneRendererLabelBase {
                _calcBoundingBox(e) {
                    const t = e.x - e.shapeWidth,
                        i = e.x,
                        n = e.y + e.vertOffset,
                        o = e.y + e.shapeHeight + e.vertOffset,
                        r = new u.Point(t, n),
                        s = new u.Point(i, o);
                    return (0, u.box)(r, s)
                }
                _drawItemShape(e, t, i) {
                    const n = t.pixelRatio,
                        o = this._lineWidth(t) % 2 ? .5 : 0,
                        r = this._getArrowSize(i),
                        s = Math.round(i.x * n) + o,
                        a = Math.round((i.y + i.vertOffset) * n) + o,
                        l = Math.round((i.x - r) * n) + o,
                        d = Math.round((i.y + i.vertOffset + r) * n) + o,
                        h = Math.round((i.y + i.vertOffset + 2 * r) * n) + o,
                        c = Math.round((i.x - i.shapeWidth) * n) + o,
                        u = Math.round((i.y + i.vertOffset + i.shapeHeight) * n) + o;
                    e.moveTo(l, d), e.lineTo(s, a), e.lineTo(l, h), this._drawCorner(e, l, u, p.CornerVectorsClockwise.rightDown, n), this._drawCorner(e, c, u, p.CornerVectorsClockwise.leftDown, n), this._drawCorner(e, c, d, p.CornerVectorsClockwise.leftUp, n), e.lineTo(l, d)
                }
                _getArrowSize(e) {
                    return e.stepX / Math.sqrt(2)
                }
                _getHorizontalTextOffset(e) {
                    return -e.shapeWidth / 2 - this._getArrowSize(e) / 2
                }
                _getVerticalTextOffset(e) {
                    return e.shapeHeight / 2 + this._getArrowSize(e) / 2
                }
            }
            var w = i(472068),
                v = i(8075),
                y = i(438230),
                m = i(482152);
            class T extends y.PaneRendererAbstractFillStrokeShape {
                setItems(e, t) {
                    this._setBaseData(e, t);
                    for (const e of this._items) 0 === e.vertOffset && (e.textVertOffset = 0)
                }
                _drawItemText(e, t, i) {
                    var n;
                    const o = this._getTextCache(i);
                    if (null === o) return;
                    const r = i.x,
                        s = i.y + i.textVertOffset,
                        a = (null === (n = i.style) || void 0 === n ? void 0 : n.textColor) || this._textColor,
                        l = i.vertOffset,
                        d = {
                            style: {
                                fillStyle: a
                            },
                            location: {
                                x: r,
                                y: s,
                                horzAlign: m.HorizontalAlign.Center,
                                vertAlign: l > 0 ? m.VerticalAlign.Top : m.VerticalAlign.Bottom
                            }
                        };
                    o.paintTo(e, t, d)
                }
                _calcBoundingBox(e) {
                    const t = e.vertOffset,
                        i = this._getTextCache(e);
                    if (!i) return;
                    const n = i.textImageWidth,
                        o = i.textImageHeight,
                        r = n / 2,
                        s = e.y + e.textVertOffset,
                        a = t > 0 ? 0 : -o,
                        l = t > 0 ? o : 0,
                        d = new u.Point(e.x - r, s + a),
                        h = new u.Point(e.x + r, s + l);
                    return (0, u.box)(d, h)
                }
            }
            class b extends c.PaneRendererLabelCenter {
                _drawItemText(e, t, i) {
                    var o, r;
                    const s = this._getTextCache(i);
                    if (null === s) return;
                    const a = i.textHorizOffset || 0,
                        l = i.x + a,
                        d = i.vertOffset,
                        h = i.y + d + i.textVertOffset,
                        c = (null === (o = i.style) || void 0 === o ? void 0 : o.textColor) || this._textColor,
                        u = (null === (r = i.style) || void 0 === r ? void 0 : r.borderColor) || this._borderColor,
                        p = {
                            style: {
                                fillStyle: (0, n.ensureDefined)(c),
                                strokeStyle: (0, n.ensureDefined)(u),
                                lineWidth: 4
                            },
                            location: {
                                x: l,
                                y: h,
                                horzAlign: m.HorizontalAlign.Center,
                                vertAlign: m.VerticalAlign.Middle
                            }
                        };
                    s.paintTo(e, t, p)
                }
                _drawItemShape(e, t, i) {}
            }
            var R = i(650883),
                S = i(519872),
                C = i(332679),
                D = i(114123),
                M = i(547465),
                P = i(623331),
                L = i(386482);
            const I = {
                [R.DwgLabelTextAlign.Left]: "left",
                [R.DwgLabelTextAlign.Center]: "center",
                [R.DwgLabelTextAlign.Right]: "right"
            };

            function B(e, t, i) {
                switch (function(e) {
                    if (e.length < 2) return 0;
                    let t = Math.abs(e[0].x - e[1].x);
                    for (let i = 2; i < Math.min(5, e.length); ++i) t = Math.max(t, Math.abs(e[i - 1].x - e[i].x));
                    return t < 30 ? 2 : t < 60 ? 1 : 0
                }(e)) {
                    case 0:
                        return e;
                    case 1:
                        const n = e.length;
                        return e.filter(((e, o) => (t - i + (n - o)) % 2 == 0));
                    case 2:
                        return []
                }
            }
            class A {
                constructor(e, t, i) {
                    this._rendererTypeByStyle = new Map([
                        [R.DwgLabelStyle.Arrowdown, s.PaneRendererArrowDown],
                        [R.DwgLabelStyle.Arrowup, s.PaneRendererArrowUp],
                        [R.DwgLabelStyle.Circle, a.PaneRendererCircleShape],
                        [R.DwgLabelStyle.Cross, l.PaneRendererCrossShape],
                        [R.DwgLabelStyle.Diamond, d.PaneRendererDiamond],
                        [R.DwgLabelStyle.Flag, h.PaneRendererFlagShape],
                        [R.DwgLabelStyle.LabelDown, c.PaneRendererLabelDown],
                        [R.DwgLabelStyle.LabelUp, c.PaneRendererLabelUp],
                        [R.DwgLabelStyle.LabelLeft, c.PaneRendererLabelLeft],
                        [R.DwgLabelStyle.LabelRight, c.PaneRendererLabelRight],
                        [R.DwgLabelStyle.LabelCenter, c.PaneRendererLabelCenter],
                        [R.DwgLabelStyle.LabelLeftUp, x],
                        [R.DwgLabelStyle.LabelLeftDown, f],
                        [R.DwgLabelStyle.LabelRightUp, g],
                        [R.DwgLabelStyle.LabelRightDown, _],
                        [R.DwgLabelStyle.Square, w.PaneRendererSquare],
                        [R.DwgLabelStyle.Triangleup, r.PaneRendererTriangleApexUp],
                        [R.DwgLabelStyle.Triangledown, r.PaneRendererTriangleApexDown],
                        [R.DwgLabelStyle.Xcross, v.PaneRendererXCross],
                        [R.DwgLabelStyle.None, T],
                        [R.DwgLabelStyle.TextOutline, b]
                    ]), this._invalidated = !0, this._graphicsProvider = e, this._model = t, this._renderer = new o.CompositeRenderer, this._textCache = new C.TextImageCachesContainer(5e3), this._isFundamental = (0, L.isFundamentalStudyMetaInfo)(e.metaInfo())
                }
                update() {
                    this._invalidated = !0
                }
                renderer() {
                    return this._invalidated && (this._invalidated = !1, this._updateViewInternal(this._model.timeScale().barSpacing())), this._renderer
                }
                _shiftLabels() {
                    if (!this._isFundamental) return !1;
                    const e = this._graphicsProvider.metaInfo();
                    if (1 !== e.plots.length) return !1;
                    const t = this._graphicsProvider.properties().childs().styles.childs()[e.plots[0].id].childs().plottype.value();
                    return t === S.LineStudyPlotStyle.StepLine || t === S.LineStudyPlotStyle.StepLineWithDiamonds
                }
                _updateViewInternal(e) {
                    this._renderer.clear();
                    const t = this._graphicsProvider.priceScale(),
                        i = this._model.timeScale();
                    if (!t || t.isEmpty() || i.isEmpty()) return;
                    const o = this._shiftLabels() ? i.barSpacing() / 2 : 0,
                        r = this._graphicsProvider.graphics().dwglabels(),
                        s = i.visibleBarsStrictRange(),
                        a = this._graphicsProvider.firstValue();
                    if (0 === r.size || null === s || null === a) return;
                    const l = s.firstBar(),
                        d = s.lastBar(),
                        h = Math.round(e * M.DwgLabelPaneViewConstants.AUTO_SIZE_MULT);
                    let c = null;
                    const u = [],
                        p = (0, n.ensureDefined)(this._graphicsProvider.properties().childs().graphics.childs().dwglabels);
                    r.forEach(((e, i) => {
                        if (!(0, n.ensureDefined)(p.childs()[i]).childs().visible.value()) return;
                        const r = e.size;
                        let s = -1;
                        e.forEach((e => {
                            s += 1;
                            const i = e.x;
                            if (i < l || d < i) return;
                            let p, f;
                            if (this._graphicsProvider.metaInfo().isRGB) p = null === e.colorIndex ? void 0 : (0, D.rgbaFromInteger)(e.colorIndex), f = null === e.textColorIndex ? void 0 : (0, D.rgbaFromInteger)(e.textColorIndex);
                            else {
                                const t = this._graphicsProvider.properties().childs().palettes.childs();
                                if (void 0 === t || void 0 === t.palette_common) return;
                                const i = t.palette_common.childs(),
                                    n = null === e.colorIndex ? null : i.colors.childs()[e.colorIndex],
                                    o = null === e.textColorIndex ? null : i.colors.childs()[e.textColorIndex];
                                if (void 0 === n || void 0 === o) return;
                                p = null === n ? void 0 : n.childs().color.value(), f = null === o ? void 0 : o.childs().color.value()
                            }
                            if (void 0 === p && void 0 === f) return;
                            const x = e.size,
                                _ = e.style,
                                g = (0, M.calculateLabelHeight)(M.DwgLabelPaneViewConstants.NORMAL_SIZE, x, h),
                                w = this._getInvertedYloc(e.yloc, t.isInverted()),
                                v = void 0 === f ? "" : e.text,
                                y = I[e.textAlign],
                                m = e.tooltip,
                                T = "monospace" === e.fontType ? P.CHART_MONOSPACE_FONT_FAMILY : P.CHART_FONT_FAMILY,
                                b = g * M.DwgLabelPaneViewConstants.FONT_SIZE_MULT,
                                R = Math.round(.16666666666666666 * b),
                                S = v.length ? (0, n.ensureNotNull)(this._textCache.get({
                                    text: v,
                                    bold: !1,
                                    italic: !1,
                                    font: T,
                                    fontSize: b,
                                    lineSpacing: R,
                                    align: y
                                })).textImageHeight : 0,
                                C = this._getLocationData({
                                    index: i,
                                    price: e.y,
                                    yloc: w,
                                    size: g,
                                    style: _,
                                    firstValue: a,
                                    hideShape: void 0 === p || "n" === _,
                                    textHeight: S
                                }),
                                L = {
                                    x: C.x0 + o,
                                    y: C.y0,
                                    width: C.shapeWidth,
                                    height: C.shapeHeight,
                                    vertOffset: C.vertOffset,
                                    text: v,
                                    fontSize: C.fontSize,
                                    font: T,
                                    style: {
                                        color: p,
                                        borderColor: p,
                                        textColor: f
                                    },
                                    textAlign: y,
                                    lineSpacing: R,
                                    tooltip: m
                                };
                            let B;
                            C.style !== c ? (B = {
                                items: [],
                                allItemsIncludingInvisibleSize: r,
                                endVisibleItemIndex: s,
                                style: C.style
                            }, u.push(B), c = C.style) : B = u[u.length - 1], B.items.push(L), B.endVisibleItemIndex = s
                        }))
                    })), u.forEach((t => {
                        let i = t.items;
                        if (this._isFundamental) switch (t.style) {
                            case R.DwgLabelStyle.LabelUp:
                            case R.DwgLabelStyle.LabelDown:
                            case R.DwgLabelStyle.LabelLeft:
                            case R.DwgLabelStyle.LabelRight:
                            case R.DwgLabelStyle.LabelCenter:
                            case R.DwgLabelStyle.LabelLeftUp:
                            case R.DwgLabelStyle.LabelLeftDown:
                            case R.DwgLabelStyle.LabelRightUp:
                            case R.DwgLabelStyle.LabelRightDown:
                            case R.DwgLabelStyle.TextOutline:
                                i = B(i, t.allItemsIncludingInvisibleSize, t.endVisibleItemIndex)
                        }
                        const o = new((0, n.ensureDefined)(this._rendererTypeByStyle.get(t.style)))({
                            items: i,
                            barSpacing: e
                        }, {
                            textCache: this._textCache,
                            skipRenderingOptimizations: !0
                        });
                        this._renderer.append(o)
                    }))
                }
                _getLocationData(e) {
                    const t = M.DwgLabelPaneViewConstants,
                        i = e.size * t.FONT_SIZE_MULT,
                        n = this._model.timeScale(),
                        o = this._graphicsProvider.priceScale(),
                        r = n.indexToCoordinate(e.index);
                    let s = NaN;
                    if (e.yloc === R.DwgLabelYloc.Price || e.yloc === R.DwgLabelYloc.Auto) s = o.priceToCoordinate(e.price, e.firstValue);
                    else {
                        const t = e.yloc === R.DwgLabelYloc.AboveBar ? 2 : 3,
                            i = this._graphicsProvider.series().bars().valueAt(e.index);
                        if (null !== i) {
                            const n = i[t];
                            null != n && (s = o.priceToCoordinate(n, e.firstValue))
                        }
                    }
                    const a = e.size * t.SHAPE_WIDTH_MULT,
                        l = e.size * t.SHAPE_HEIGHT_MULT,
                        d = e.hideShape ? .5 * l : (e.style === R.DwgLabelStyle.TextOutline ? 1.4 : 1.5) * l;
                    return {
                        x0: r,
                        y0: s,
                        shapeWidth: a,
                        shapeHeight: l,
                        vertOffset: d * this._getYLocSign(e.yloc, s, o.height(), d, e.textHeight),
                        fontSize: i,
                        style: e.hideShape ? R.DwgLabelStyle.None : e.style
                    }
                }
                _getYLocSign(e, t, i, n, o) {
                    switch (e) {
                        case R.DwgLabelYloc.Price:
                            return 0;
                        case R.DwgLabelYloc.AboveBar:
                            return -1;
                        case R.DwgLabelYloc.BelowBar:
                            return 1;
                        case R.DwgLabelYloc.Auto:
                            return i < 130 ? t > .5 * i ? -1 : 1 : -Math.sign(t - i + n + 2 * o)
                    }
                }
                _getInvertedYloc(e, t) {
                    if (t) {
                        if (e === R.DwgLabelYloc.AboveBar) return R.DwgLabelYloc.BelowBar;
                        if (e === R.DwgLabelYloc.BelowBar) return R.DwgLabelYloc.AboveBar
                    }
                    return e
                }
            }
        },
        354822: (e, t, i) => {
            i.r(t), i.d(t, {
                DwgLineFillPaneView: () => f
            });
            var n = i(650151),
                o = i(86441),
                r = i(278056),
                s = i(117168),
                a = i(28035),
                l = i(530513),
                d = i(858063);
            const h = {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 0,
                    extend: s.DwgExtend.None
                },
                c = {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 0,
                    extend: s.DwgExtend.None
                },
                u = new r.RgbaFromIntegerCache;

            function p(e, t, i, n) {
                const r = t.subtract(e).normalized();
                if (Math.abs(r.x) > Math.abs(r.y)) {
                    const t = (i - e.x) / r.x;
                    return new o.Point(e.addScaled(r, t).x, e.addScaled(r, t).y)
                } {
                    const t = (n - e.y) / r.y;
                    return new o.Point(e.addScaled(r, t).x, e.addScaled(r, t).y)
                }
            }
            class f {
                constructor(e, t, i) {
                    this._data = [], this._invalidated = !0, this._provider = e, this._model = t, this._hitTestResult = void 0 !== i ? new d.HitTestResult(d.HitTestResult.CUSTOM, i) : new d.HitTestResult(d.HitTestResult.REGULAR)
                }
                update() {
                    this._invalidated = !0
                }
                renderer() {
                    this._invalidated && (this._updateViewInternal(), this._invalidated = !1);
                    const e = new a.CompositeRenderer;
                    for (const t of this._data) {
                        const i = new l.PolygonRenderer(this._hitTestResult);
                        i.setData(t), e.append(i)
                    }
                    return e
                }
                _updateViewInternal() {
                    this._data = [];
                    const e = this._provider.properties().childs().palettes,
                        t = this._provider.metaInfo().isRGB;
                    if ((void 0 === e || void 0 === e.childs().palette_common) && !t) return;
                    const i = t ? void 0 : (0, n.ensureDefined)(e.childs().palette_common).childs(),
                        r = this._provider.priceScale(),
                        a = this._model.timeScale();
                    if (!r || r.isEmpty() || a.isEmpty()) return;
                    if (null === a.visibleBarsStrictRange()) return;
                    const l = this._provider.firstValue();
                    if (null === l) return;
                    const d = this._provider.graphics().dwglines(),
                        f = this._provider.graphics().dwglinefills();
                    if (0 === f.size || 0 === d.size) return;
                    const x = new Map;
                    d.forEach((e => {
                        e.forEach((e => {
                            x.set(e.id, e)
                        }))
                    }));
                    const _ = (0, n.ensureDefined)(this._provider.properties().childs().graphics.childs().dwglinefills);
                    f.forEach(((e, d) => {
                        (0, n.ensureDefined)(_.childs()[d]).childs().visible.value() && e.forEach((e => {
                            const n = x.get(e.line1),
                                d = x.get(e.line2);
                            if (n && d) {
                                const f = function(e, t, i, n, r) {
                                    const a = n.width(),
                                        l = (0, s.convertPointsToScreenDimension)(e.x1, e.y1, e.x2, e.y2, e.extend, i, n, a, r, h),
                                        d = (0, s.convertPointsToScreenDimension)(t.x1, t.y1, t.x2, t.y2, t.extend, i, n, a, r, c);
                                    if (null === l || null === d) return null;
                                    let u = new o.Point(l.x1, l.y1),
                                        f = new o.Point(l.x2, l.y2),
                                        x = new o.Point(d.x1, d.y1),
                                        _ = new o.Point(d.x2, d.y2);
                                    if ((0, o.equalPoints)(u, f) || (0, o.equalPoints)(x, _)) return [u, f, _, x];
                                    const g = (0, s.isExtendInSameDirection)(l.extend, s.DwgExtend.Left),
                                        w = (0, s.isExtendInSameDirection)(l.extend, s.DwgExtend.Right),
                                        v = (0, s.isExtendInSameDirection)(d.extend, s.DwgExtend.Left),
                                        y = (0, s.isExtendInSameDirection)(d.extend, s.DwgExtend.Right),
                                        m = g && v,
                                        T = w && y,
                                        b = i.height(),
                                        R = -a,
                                        S = 2 * a,
                                        C = -b,
                                        D = 2 * b;
                                    let M = R,
                                        P = S;
                                    u.x > f.x && (M = S, P = R);
                                    let L = C,
                                        I = D;
                                    u.y > f.y && (L = D, I = C);
                                    let B = R,
                                        A = S;
                                    x.x > _.x && (B = S, A = R);
                                    let E = C,
                                        z = D;
                                    return x.y > _.y && (E = D, z = C), (m || null === e.x1 && g) && (u = p(f, u, M, L)), (m || null === t.x1 && v) && (x = p(_, x, B, E)), (T || null === e.x2 && w) && (f = p(u, f, P, I)), (T || null === t.x2 && y) && (_ = p(x, _, A, z)), [u, f, _, x]
                                }(n, d, r, a, l);
                                if (null !== f) {
                                    let n;
                                    if (t) n = u.rgbaFromInteger(e.colorIndex);
                                    else {
                                        const t = i.colors.childs()[e.colorIndex];
                                        n = t ? t.childs().color.value() : "transparent"
                                    }
                                    this._data.push({
                                        points: f,
                                        fillBackground: !0,
                                        filled: !0,
                                        backcolor: n,
                                        color: n,
                                        linewidth: 0,
                                        linestyle: 0
                                    })
                                }
                            }
                        }))
                    }))
                }
            }
        },
        939692: (e, t, i) => {
            i.r(t), i.d(t, {
                DwgLinePaneView: () => T
            });
            var n = i(650151),
                o = i(86441),
                r = i(278056),
                s = i(586335),
                a = i.n(s),
                l = i(117168),
                d = i(204652),
                h = i(858063),
                c = i(837291),
                u = i(413118);
            const p = {
                    [u.DwgLineStyle.Solid]: {
                        dashPattern: [],
                        dashPatternSize: 0,
                        drawLeftArrow: !1,
                        drawRightArrow: !1
                    },
                    [u.DwgLineStyle.Dashed]: {
                        dashPattern: [5, 6],
                        dashPatternSize: 11,
                        drawLeftArrow: !1,
                        drawRightArrow: !1
                    },
                    [u.DwgLineStyle.Dotted]: {
                        dashPattern: [1, 2],
                        dashPatternSize: 3,
                        drawLeftArrow: !1,
                        drawRightArrow: !1
                    },
                    [u.DwgLineStyle.LeftArrow]: {
                        dashPattern: [],
                        dashPatternSize: 0,
                        drawLeftArrow: !0,
                        drawRightArrow: !1
                    },
                    [u.DwgLineStyle.RightArrow]: {
                        dashPattern: [],
                        dashPatternSize: 0,
                        drawLeftArrow: !1,
                        drawRightArrow: !0
                    },
                    [u.DwgLineStyle.BothArrow]: {
                        dashPattern: [],
                        dashPatternSize: 0,
                        drawLeftArrow: !0,
                        drawRightArrow: !0
                    }
                },
                f = new Map;

            function x(e, t) {
                let i = f.get(e);
                void 0 === i && (i = new Map, f.set(e, i));
                let n = i.get(t);
                return void 0 === n && (n = e.map((e => e * t)), i.set(t, n)), n
            }

            function _(e, t, i, n, o) {
                if (i.subtract(t).length() < 1) return;
                const r = (0, c.getArrowPoints)(t, i, n, !0);
                for (const t of r) e.moveTo(t[0].x * o, t[0].y * o), e.lineTo(t[1].x * o, t[1].y * o)
            }
            class g {
                constructor(e) {
                    this._data = null != e ? e : null
                }
                setData(e) {
                    this._data = e
                }
                draw(e, t) {
                    if (null === this._data) return;
                    e.lineCap = "butt";
                    const i = t.pixelRatio;
                    for (const [t, n] of this._data.itemsByColor) {
                        let o;
                        e.strokeStyle = t;
                        for (const t of n) {
                            const n = p[t.style],
                                r = x(n.dashPattern, t.width * i);
                            void 0 !== o && o.lineWidth === t.width && o.pattern === r || (void 0 !== o ? (e.stroke(), o.lineWidth = t.width, o.pattern = r) : o = {
                                lineWidth: t.width,
                                pattern: r
                            }, e.beginPath(), e.lineWidth = t.width * i, e.setLineDash(r)), e.moveTo(t.extP1.x * i, t.extP1.y * i), e.lineTo(t.extP2.x * i, t.extP2.y * i);
                            const s = t.width;
                            n.drawLeftArrow && _(e, t.p2, t.p1, s, i), n.drawRightArrow && _(e, t.p1, t.p2, s, i)
                        }
                        void 0 !== o && e.stroke()
                    }
                }
                hitTest(e) {
                    if (null === this._data) return null;
                    const t = (0, c.interactionTolerance)().line,
                        {
                            items: i,
                            itemCount: n
                        } = this._data;
                    let o = 0;
                    for (const r of i) {
                        if (o === n) break;
                        const i = Math.max(t, r.width / 2);
                        if ((0, d.distanceToSegment)(r.extP1, r.extP2, e).distance <= i) return new h.HitTestResult(h.HitTestResult.REGULAR);
                        o += 1
                    }
                    return null
                }
            }

            function w(e, t, i) {
                return e >= t && e <= i ? e : null
            }

            function v(e, t, i, n) {
                return Math.sign(e.x - t.x) === Math.sign(i.x - n.x) && Math.sign(e.y - t.y) === Math.sign(i.y - n.y)
            }

            function y(e, t, i, n, r, s, a) {
                const l = e.x >= 0 && e.x <= r && e.y >= 0 && e.y <= s,
                    d = t.x >= 0 && t.x <= r && t.y >= 0 && t.y <= s;
                if (l && d && !i && !n) return [e, t];
                if (e.x < 0 && t.x < 0 && (e.x < t.x ? !n : !i) || e.x > r && t.x > r && (e.x < t.x ? !i : !n) || e.y < 0 && t.y < 0 && (e.y < t.y ? !n : !i) || e.y > s && t.y > s && (e.y < t.y ? !i : !n)) return null;
                const h = [];
                if (e.x === t.x) {
                    if (e.x < 0 || e.x > r) return null;
                    e.y < t.y ? h.push(new o.Point(e.x, 0 === a ? 0 : e.y < 0 ? e.y % a : -(a - e.y % a)), new o.Point(t.x, s)) : h.push(new o.Point(e.x, 0 === a ? s : e.y > s ? s + (e.y - s) % a : s + (a - (s - e.y) % a)), new o.Point(t.x, 0))
                } else if (e.y === t.y) {
                    if (e.y < 0 || e.y > s) return null;
                    e.x < t.x ? h.push(new o.Point(0 === a ? 0 : e.x < 0 ? e.x % a : -(a - e.x % a), e.y), new o.Point(r, t.y)) : h.push(new o.Point(0 === a ? r : e.x > r ? r + (e.x - r) % a : r + (a - (r - e.x) % a), e.y), new o.Point(0, t.y))
                } else {
                    const n = (t.y - e.y) / (t.x - e.x),
                        l = e.y - n * e.x;
                    let d = 0,
                        c = 0;
                    const u = w(l, 0, s);
                    if (null !== u)
                        if (a > 0 && (e.x <= 0 || i && e.x < t.x)) {
                            const t = e.x <= 0 ? Math.sqrt(Math.pow(0 - e.x, 2) + Math.pow(u - e.y, 2)) % a : a - Math.sqrt(Math.pow(0 - e.x, 2) + Math.pow(u - e.y, 2)) % a;
                            d = Math.cos(Math.atan(n)) * t, c = n * d, h.push(new o.Point(-d, u - c))
                        } else h.push(new o.Point(0, u));
                    const p = w(n * r + l, 0, s);
                    if (null !== p)
                        if (a > 0 && (e.x >= r || i && e.x > t.x)) {
                            const t = e.x >= r ? Math.sqrt(Math.pow(e.x - r, 2) + Math.pow(e.y - p, 2)) % a : a - Math.sqrt(Math.pow(e.x - r, 2) + Math.pow(e.y - p, 2)) % a;
                            d = Math.cos(Math.atan(n)) * t, c = n * d, h.push(new o.Point(r + d, p + c))
                        } else h.push(new o.Point(r, p));
                    const f = w(-l / n, 0, r);
                    if (null !== f && (0 !== f || 0 !== u))
                        if (a > 0 && (e.y <= 0 || i && e.y < t.y)) {
                            const t = e.y <= 0 ? Math.sqrt(Math.pow(e.x - f, 2) + Math.pow(e.y - 0, 2)) % a : a - Math.sqrt(Math.pow(e.x - f, 2) + Math.pow(e.y - 0, 2)) % a;
                            d = Math.cos(Math.atan(n)) * t, c = n * d, h.push(new o.Point(f - Math.sign(n) * d, -Math.sign(n) * c))
                        } else h.push(new o.Point(f, 0));
                    const x = w((s - l) / n, 0, r);
                    if (null !== x && (0 !== x || p !== s))
                        if (a > 0 && (e.y >= s || i && e.y > t.y)) {
                            const t = e.y >= s ? Math.sqrt(Math.pow(e.x - x, 2) + Math.pow(e.y - s, 2)) % a : a - Math.sqrt(Math.pow(e.x - x, 2) + Math.pow(e.y - s, 2)) % a;
                            d = Math.cos(Math.atan(n)) * t, c = n * d, h.push(new o.Point(x + Math.sign(n) * d, s + Math.sign(n) * c))
                        } else h.push(new o.Point(x, s))
                }
                if (h.length < 1) return null;
                if (h.length < 2 && h.push(h[0]), !i && l) {
                    return [e, v(h[0], h[1], e, t) ? h[1] : h[0]]
                }
                if (!n && d) {
                    return [v(h[0], h[1], e, t) ? h[0] : h[1], t]
                }
                return v(h[0], h[1], e, t) ? [h[0], h[1]] : [h[1], h[0]]
            }
            const m = new r.RgbaFromIntegerCache;
            class T extends(a()) {
                constructor(e, t, i) {
                    super(), this._locationDataCache = [], this._invalidated = !0, this._renderer = new g, this._graphicsProvider = e, this._model = t
                }
                update() {
                    this._invalidated = !0
                }
                renderer(e, t) {
                    return this._invalidated && (this._invalidated = !1, this._updateRenderer(t, e)), this._renderer
                }
                _updateRenderer(e, t) {
                    this._renderer.setData(null);
                    const i = this._graphicsProvider.priceScale(),
                        r = this._model.timeScale();
                    if (!i || i.isEmpty() || r.isEmpty()) return;
                    const s = this._graphicsProvider.graphics().dwglines();
                    if (0 === s.size) return;
                    if (null === this._model.timeScale().visibleBarsStrictRange()) return;
                    const a = this._graphicsProvider.firstValue();
                    if (null === a) return;
                    const d = {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 0,
                            extend: l.DwgExtend.None
                        },
                        h = new Map;
                    let c = 0;
                    const u = (0, n.ensureDefined)(this._graphicsProvider.properties().childs().graphics.childs().dwglines);
                    for (const [f, x] of s) {
                        if ((0, n.ensureDefined)(u.childs()[f]).childs().visible.value())
                            for (const n of x) {
                                if (null === n.colorIndex) continue;
                                let s;
                                if (this._graphicsProvider.metaInfo().isRGB) s = m.rgbaFromInteger(n.colorIndex);
                                else {
                                    const e = this._graphicsProvider.properties().childs().palettes;
                                    if (void 0 === e || void 0 === e.childs().palette_common) continue;
                                    s = e.childs().palette_common.childs().colors.childs()[n.colorIndex].childs().color.value()
                                }
                                if (void 0 === s) continue;
                                const u = (0, l.convertPointsToScreenDimension)(n.x1, n.y1, n.x2, n.y2, n.extend, i, r, e, a, d);
                                if (null === u) continue;
                                const {
                                    x1: f,
                                    x2: x,
                                    y1: _,
                                    y2: g,
                                    extend: w
                                } = u, v = w === l.DwgExtend.Both || w === l.DwgExtend.Left, T = w === l.DwgExtend.Both || w === l.DwgExtend.Right, b = new o.Point(f, _), R = new o.Point(x, g), S = y(b, R, v, T, e, t, p[n.style].dashPatternSize * n.width);
                                if (null === S) continue;
                                let C;
                                this._locationDataCache.length > c ? (C = this._locationDataCache[c], C.p1 = b, C.p2 = R, C.extP1 = S[0], C.extP2 = S[1], C.width = n.width > 0 ? n.width : 1, C.style = n.style) : (C = {
                                    p1: b,
                                    p2: R,
                                    extP1: S[0],
                                    extP2: S[1],
                                    width: n.width > 0 ? n.width : 1,
                                    style: n.style
                                }, this._locationDataCache.push(C));
                                let D = h.get(s);
                                void 0 === D && (D = [], h.set(s, D)), D.push(C), c += 1
                            }
                    }
                    this._renderer.setData({
                        items: this._locationDataCache,
                        itemCount: c,
                        itemsByColor: h
                    })
                }
            }
        },
        450208: (e, t, i) => {
            i.r(t), i.d(t, {
                DwgTablePaneView: () => w
            });
            var n = i(650151),
                o = i(28035),
                r = i(114123),
                s = i(86441),
                a = i(228804),
                l = i(623331),
                d = i(858063),
                h = i(544445),
                c = i(837512),
                u = i(538708),
                p = i(442554),
                f = i(876890);

            function x(e, t, i, n) {
                const o = new h.TextRenderer;
                t.cells.forEach((t => {
                    if (t.merged) return;
                    const r = i.cells[t.cell.row][t.cell.column],
                        s = i.position.x + r.offsetX,
                        a = i.position.y + r.offsetY,
                        l = function(e, t, i, n, o) {
                            return (0, p.textBoxData)(e, t, i, n, {
                                horizontalTextAlignment: o.cell.horizontalTextAlignment,
                                verticalTextAlignment: o.cell.verticalTextAlignment,
                                text: o.cell.text,
                                textColor: o.style.textColor,
                                sizeOptions: {
                                    textSizeMode: "fixed",
                                    fontSize: o.cell.fontSize
                                },
                                fontType: o.cell.fontType
                            })
                        }(s / n.pixelRatio, a / n.pixelRatio, r.width / n.pixelRatio, r.height / n.pixelRatio, t);
                    e.save();
                    const d = new Path2D;
                    d.rect(s, a, r.width, r.height), e.clip(d, "evenodd"), o.setData(l), o.draw(e, n), e.restore()
                }))
            }
            class _ {
                constructor(e) {
                    this._data = null, this._widthsCaches = new Map, this._precalculated = null, this.setData(e), this._measureCanvas = document.createElement("canvas"), this._measureCtx = (0, n.ensureNotNull)(this._measureCanvas.getContext("2d"))
                }
                setData(e) {
                    this._data = e, this._precalculated = null
                }
                draw(e, t) {
                    if (null === this._data) return;
                    const i = this._precalculateData(t),
                        n = this._data;
                    ! function(e, t, i) {
                        e.fillStyle = t.style.backgroundColor, e.fillRect(i.position.x, i.position.y, i.totalWidth, i.totalHeight)
                    }(e, n, i),
                    function(e, t, i) {
                        t.cells.forEach((t => {
                            if (t.merged) return;
                            const n = i.cells[t.cell.row][t.cell.column],
                                o = i.position.x + n.offsetX,
                                r = i.position.y + n.offsetY,
                                s = n.width,
                                a = n.height;
                            e.fillStyle = t.style.backgroundColor, e.fillRect(o, r, s, a)
                        }))
                    }(e, n, i), x(e, n, i, t),
                        function(e, t, i, n) {
                            if (t.table.borderWidth > 0) {
                                const o = Math.max(1, Math.round(t.table.borderWidth * n.pixelRatio));
                                e.fillStyle = t.style.borderColor;
                                for (let n = 0; n < t.table.columns; n++)
                                    for (let r = 0; r < t.table.rows; r++) {
                                        const t = i.cells[r][n];
                                        null === t.mergedMainCell && (t.height > 0 && t.endRow < i.lastNonEmptyRowEnd && e.fillRect(i.position.x + t.offsetX, i.position.y + t.offsetY + t.height, t.width + (t.endColumn < i.lastNonEmptyColumnEnd ? o : 0), o), t.width > 0 && t.endColumn < i.lastNonEmptyColumnEnd && e.fillRect(i.position.x + t.offsetX + t.width, i.position.y + t.offsetY, o, t.height))
                                    }
                            }
                        }(e, n, i, t),
                        function(e, t, i, n) {
                            if (t.table.frameWidth > 0) {
                                const o = Math.max(1, Math.round(t.table.frameWidth * n.pixelRatio));
                                e.fillStyle = t.style.frameColor, e.fillRect(i.position.x - o, i.position.y - o, i.totalWidth + 2 * o, o), e.fillRect(i.position.x - o, i.position.y + i.totalHeight, i.totalWidth + 2 * o, o), e.fillRect(i.position.x - o, i.position.y - o + o, o, i.totalHeight), e.fillRect(i.position.x + i.totalWidth, i.position.y, o, i.totalHeight)
                            }
                        }(e, n, i, t)
                }
                hitTest(e, t) {
                    if (null === this._data) return null;
                    const i = this._precalculateData(t),
                        n = this._data,
                        o = t.pixelRatio,
                        r = e.x * o,
                        s = e.y * o,
                        a = Math.max(1, n.table.frameWidth * o);
                    if (!(r >= i.position.x - a && r <= i.position.x + i.totalWidth + 2 * a && s >= i.position.y - a && s <= i.position.y + i.totalHeight + 2 * a)) return null;
                    const l = i.cellsWithTooltip.find((e => {
                            const t = i.position.x + e.offsetX,
                                n = i.position.y + e.offsetY;
                            return r >= t && r <= t + e.width && s >= n && s <= n + e.height
                        })),
                        h = void 0 === l ? void 0 : {
                            tooltip: { ...l.tooltip,
                                rect: {
                                    x: (i.position.x + l.offsetX) / o,
                                    y: (i.position.y + l.offsetY) / o,
                                    w: l.width / o,
                                    h: l.height / o
                                }
                            }
                        };
                    return new d.HitTestResult(d.HitTestResult.REGULAR, h)
                }
                _precalculateData(e) {
                    var t, i;
                    if (null !== this._precalculated) return this._precalculated;
                    const o = (0, n.ensureNotNull)(this._data);
                    let r = -1,
                        a = -1;
                    const l = Array.from({
                            length: o.table.rows
                        }, ((e, t) => Array.from({
                            length: o.table.columns
                        }, ((e, i) => ({
                            mergedMainCell: null,
                            nextColumnCell: null,
                            nextRowCell: null,
                            startColumn: i,
                            endColumn: i,
                            startRow: t,
                            endRow: t,
                            width: 0,
                            height: 0,
                            offsetX: 0,
                            offsetY: 0,
                            colSpan: -1,
                            rowSpan: -1,
                            merged: !1,
                            empty: !0
                        }))))),
                        d = [];
                    o.cells.forEach((t => {
                        if (t.merged) {
                            return void(l[t.cell.row][t.cell.column].empty = !1)
                        }
                        const i = Math.ceil(this._cellWidth(e, t, o) * e.pixelRatio),
                            n = Math.ceil(this._cellHeight(e, t, o) * e.pixelRatio),
                            r = t.cell.row,
                            s = t.cell.row + t.cell.rowSpan - 1,
                            a = t.cell.column,
                            h = t.cell.column + t.cell.colSpan - 1,
                            c = t.cell.colSpan,
                            u = t.cell.rowSpan;
                        let p = null;
                        for (let e = t.cell.row; e < Math.min(t.cell.row + t.cell.rowSpan, o.table.rows); ++e)
                            for (let f = t.cell.column; f < Math.min(t.cell.column + t.cell.colSpan, o.table.columns); ++f) {
                                const o = l[e][f],
                                    x = e !== r || f !== a;
                                x || (p = o, void 0 !== t.cell.tooltip && "" !== t.cell.tooltip && (o.tooltip = {
                                    content: {
                                        type: "text",
                                        data: t.cell.tooltip
                                    }
                                }, d.push(o))), o.mergedMainCell = x ? p : null, o.startRow = r, o.endRow = s, o.startColumn = a, o.endColumn = h, o.width = i, o.height = n, o.colSpan = c, o.rowSpan = u, o.empty = !1
                            }
                    }));
                    const h = 0 === o.table.borderWidth ? 0 : Math.max(1, Math.round(o.table.borderWidth * e.pixelRatio)),
                        c = Math.max(1, Math.round(20 * e.pixelRatio)),
                        u = Math.max(1, Math.round(5 * e.pixelRatio));
                    for (let e = 0; e < o.table.columns; ++e) {
                        let t = [],
                            i = !1,
                            n = !1;
                        for (let s = 0; s < o.table.rows; ++s) {
                            const o = l[s][e];
                            o.empty ? n = !0 : (i = !0, r = e), null === o.mergedMainCell ? (t.forEach((e => e.nextRowCell = o)), t = [o]) : t.push(o)
                        }
                        if (i && n)
                            for (let t = 0; t < o.table.rows; ++t) {
                                const i = l[t][e];
                                i.empty && (i.width = c)
                            }
                    }
                    for (let e = 0; e < o.table.rows; ++e) {
                        let t = [],
                            i = !1,
                            n = !1;
                        for (let r = 0; r < o.table.columns; ++r) {
                            const o = l[e][r];
                            o.empty ? n = !0 : (i = !0, a = e), null === o.mergedMainCell ? (t.forEach((e => e.nextColumnCell = o)), t = [o]) : t.push(o)
                        }
                        if (i && n)
                            for (let t = 0; t < o.table.columns; ++t) {
                                const i = l[e][t];
                                i.empty && (i.height = u)
                            }
                    }
                    let p = 0,
                        f = 0,
                        x = 0;
                    for (let e = 0; e < o.table.columns; ++e) {
                        const i = [];
                        let n = !1;
                        for (let r = 0; r < o.table.rows; ++r) {
                            const o = l[r][e];
                            if (o.endColumn === e) {
                                const e = null !== (t = o.mergedMainCell) && void 0 !== t ? t : o;
                                x = Math.max(x, e.offsetX + e.width), i.push(e), n = n || !e.empty
                            }
                        }
                        for (const e of i) e.width += x - (e.offsetX + e.width), p = Math.max(p, e.offsetX + e.width);
                        if (i.length > 0) {
                            const t = n && r > e ? h : 0;
                            for (let i = 0; i < o.table.rows; ++i) {
                                const n = l[i][e];
                                null !== n.nextColumnCell && (n.nextColumnCell.offsetX = Math.max(n.nextColumnCell.offsetX, x + t))
                            }
                        }
                    }
                    let _ = 0;
                    for (let e = 0; e < o.table.rows; ++e) {
                        const t = [];
                        let n = !1;
                        for (let r = 0; r < o.table.columns; ++r) {
                            const o = l[e][r];
                            if (o.endRow === e) {
                                const e = null !== (i = o.mergedMainCell) && void 0 !== i ? i : o;
                                _ = Math.max(_, e.offsetY + e.height), t.push(e), n = n || !e.empty
                            }
                        }
                        for (const e of t) e.height += _ - (e.offsetY + e.height), f = Math.max(f, e.offsetY + e.height);
                        if (t.length > 0) {
                            const t = n && a > e ? h : 0;
                            for (let i = 0; i < o.table.columns; ++i) {
                                const n = l[e][i];
                                null !== n.nextRowCell && (n.nextRowCell.offsetY = Math.max(n.nextRowCell.offsetY, _ + t))
                            }
                        }
                    }
                    const g = function(e, t, i, n) {
                        const o = Math.round(10 * t.pixelRatio);
                        let r = 0;
                        e.table.position.startsWith("top_") ? r = o : e.table.position.startsWith("middle_") ? r = Math.round((t.physicalHeight - n) / 2) : e.table.position.startsWith("bottom_") && (r = t.physicalHeight - o - n);
                        let a = 0;
                        return e.table.position.endsWith("left") ? a = o : e.table.position.endsWith("center") ? a = Math.round((t.physicalWidth - i) / 2) : e.table.position.endsWith("right") && (a = t.physicalWidth - i - o), new s.Point(a, r)
                    }(o, e, p, f);
                    return this._precalculated = {
                        position: g,
                        totalWidth: p,
                        totalHeight: f,
                        cells: l,
                        cellsWithTooltip: d,
                        lastNonEmptyColumnEnd: r,
                        lastNonEmptyRowEnd: a
                    }, this._precalculated
                }
                _cellWidth(e, t, i) {
                    const o = t.cell.widthInPercentsOfPaneWidth;
                    if (t.merged || "" === t.cell.text && 0 === o) return 0;
                    if (o) {
                        return (e.cssWidth - 20) * o / 100
                    }
                    const r = t.cell.text.split("\n"),
                        s = (0, n.ensureDefined)(p.fontSizes.get(t.cell.fontSize)),
                        d = (0, a.getDefault2)(this._widthsCaches, t.cell.fontType, s, new c.TextWidthCache);
                    this._measureCtx.font = (0, u.makeFont)(s, t.cell.fontType === f.DwgTableCellFontType.Monospace ? l.CHART_MONOSPACE_FONT_FAMILY : l.CHART_FONT_FAMILY);
                    const h = r.map((e => d.measureText(this._measureCtx, e)));
                    return Math.max(...h) + 2 * i.table.borderWidth + 2 * s / 3
                }
                _cellHeight(e, t, i) {
                    const o = t.cell.heightInPercentOfPaneHeight;
                    if (t.merged || "" === t.cell.text && 0 === o) return 0;
                    if (o) {
                        return (e.cssHeight - 20) * o / 100
                    }
                    const r = t.cell.text.split("\n").length,
                        s = (0, n.ensureDefined)(p.fontSizes.get(t.cell.fontSize));
                    return s * r + s * (2 / 3) + 2 * i.table.borderWidth
                }
            }

            function g(e) {
                e.allCells.forEach((t => {
                    var i;
                    if (t.cell.rowSpan > 1 || t.cell.colSpan > 1)
                        for (let n = t.cell.row; n < t.cell.row + t.cell.rowSpan; ++n)
                            for (let o = t.cell.column; o < t.cell.column + t.cell.colSpan; ++o) {
                                const r = null === (i = e.cellsByRowAndColumn.get(n)) || void 0 === i ? void 0 : i.get(o);
                                void 0 !== r && r !== t && (r.merged = !0)
                            }
                }))
            }
            class w {
                constructor(e, t, i) {
                    this._invalidated = !0, this._data = [], this._renderers = [], this._source = e
                }
                renderer() {
                    this._invalidated && (this._invalidated = !1, this._updateViewInternal());
                    const e = new o.CompositeRenderer;
                    return this._data.forEach(((t, i) => {
                        this._renderers.length <= i ? this._renderers.push(new _(t)) : this._renderers[i].setData(t), e.append(this._renderers[i])
                    })), this._renderers.splice(this._data.length), e
                }
                update() {
                    this._invalidated = !0
                }
                _updateViewInternal() {
                    this._data = [];
                    const e = this._source.properties().childs().palettes.childs(),
                        t = this._source.metaInfo().isRGB;
                    if ((void 0 === e || void 0 === e.palette_common) && !t) return;
                    const i = t ? void 0 : (0, n.ensureDefined)(e.palette_common).childs(),
                        o = this._source.graphics().dwgtables(),
                        s = this._source.graphics().dwgtablecells(),
                        a = new Map;
                    s.forEach(((e, n) => {
                        e.forEach((e => {
                            let n, o, s = a.get(e.tableId);
                            if (void 0 === s && (s = {
                                    allCells: [],
                                    cellsByRowAndColumn: new Map
                                }, a.set(e.tableId, s)), t) n = (0, r.rgbaFromInteger)(e.backgroundColorIndex), o = (0, r.rgbaFromInteger)(e.textColorIndex);
                            else {
                                const t = i.colors.childs()[e.backgroundColorIndex],
                                    r = i.colors.childs()[e.textColorIndex];
                                if (!r) return;
                                n = t ? t.childs().color.value() : "transparent",
                                    o = r.childs().color.value()
                            }
                            const l = {
                                cell: e,
                                merged: !1,
                                style: {
                                    backgroundColor: n,
                                    textColor: o
                                }
                            };
                            s.allCells.push(l);
                            let d = s.cellsByRowAndColumn.get(e.row);
                            void 0 === d && (d = new Map, s.cellsByRowAndColumn.set(e.row, d)), d.set(e.column, l)
                        }))
                    })), a.forEach(g);
                    const l = (0, n.ensureDefined)(this._source.properties().childs().graphics.childs().dwgtables);
                    o.forEach(((e, o) => {
                        (0, n.ensureDefined)(l.childs()[o]).childs().visible.value() && e.forEach((e => {
                            var n, o;
                            let s, l, d;
                            if (t) s = (0, r.rgbaFromInteger)(e.backgroundColorIndex), l = (0, r.rgbaFromInteger)(e.borderColorIndex), d = (0, r.rgbaFromInteger)(e.frameColorIndex);
                            else {
                                const t = i.colors.childs()[e.backgroundColorIndex],
                                    n = i.colors.childs()[e.borderColorIndex],
                                    o = i.colors.childs()[e.frameColorIndex];
                                s = t ? t.childs().color.value() : "transparent", l = n ? n.childs().color.value() : "transparent", d = o ? o.childs().color.value() : "transparent"
                            }
                            this._data.push({
                                table: e,
                                style: {
                                    backgroundColor: s,
                                    borderColor: l,
                                    frameColor: d
                                },
                                cells: null !== (o = null === (n = a.get(e.id)) || void 0 === n ? void 0 : n.allCells) && void 0 !== o ? o : []
                            })
                        }))
                    }))
                }
            }
        },
        327514: (e, t, i) => {
            i.r(t), i.d(t, {
                HHistPaneView: () => m
            });
            var n = i(724377),
                o = i(650151),
                r = i(858063),
                s = i(406146),
                a = i(28035),
                l = i(544445),
                d = i(86441),
                h = i(741341),
                c = i(738023),
                u = i(623331);

            function p(e, t) {
                return {
                    min: Math.min(e, t),
                    max: Math.max(e, t)
                }
            }

            function f(e) {
                return e.max - e.min
            }
            class x {
                constructor(e) {
                    this._data = e
                }
                hitTest(e, t) {
                    const i = this._data;
                    for (const n of i.histograms) {
                        if (n.yRange.min >= e.y || e.y >= n.yRange.max) continue;
                        let o = null;
                        const a = f(n.xRange);
                        for (const l of n.bars) {
                            const d = i.styles[l.styleId];
                            if (!d.visible) continue;
                            if (d.location === s.HHistLocation.Absolute && (n.xRange.min >= e.x || e.x >= n.xRange.max)) continue;
                            null === o && (o = 0, n.bars.forEach((e => {
                                const t = e.subBarValues.reduce(((e, t) => e + t));
                                o = Math.max(o, t)
                            })));
                            const h = _(n.xRange, d, t.cssWidth),
                                {
                                    xBasePoint: c,
                                    sign: u
                                } = h,
                                p = Math.max(d.percentWidth * a / 100 - l.subBarValues.length, 0);
                            let f = c;
                            for (let t = 0; t < l.subBarValues.length; t++) {
                                const i = l.y,
                                    n = l.y + l.height,
                                    s = f,
                                    a = s + u * (p * l.subBarValues[t] / o);
                                if (f = a, (e.x >= s && e.x <= a || e.x >= a && e.x <= s) && e.y >= i && e.y <= n) return new r.HitTestResult(r.HitTestResult.REGULAR)
                            }
                        }
                    }
                    return null
                }
                draw(e, t) {
                    const i = this._data,
                        o = t.pixelRatio;
                    e.save(), i.histograms.forEach((r => {
                        if (i.histBoxBgColor) {
                            e.beginPath(), e.fillStyle = i.histBoxBgColor;
                            const t = Math.round(r.xRange.min * o),
                                n = Math.round(r.yRange.min * o),
                                s = Math.round(r.xRange.max * o) - t,
                                a = Math.round(r.yRange.max * o) - n;
                            e.rect(t, n, s, a), e.fill()
                        }
                        const s = [];
                        let a = 0,
                            l = 0;
                        r.bars.forEach((e => {
                            const t = e.subBarValues.reduce(((e, t) => e + t));
                            a = Math.max(a, t), l += e.height
                        }));
                        const d = l / r.bars.length,
                            h = function(e, t) {
                                return Math.floor(e * t) >= 1 * t ? Math.floor(t) : 0
                            }(d, o),
                            c = f(r.xRange),
                            u = [];
                        if (r.bars.forEach((n => {
                                const l = i.styles[n.styleId];
                                if (!l.visible) return;
                                if (l.showValues && l.addToTotalValue)
                                    for (let e = 0; e < n.subBarValues.length; e++) s[e] = (s[e] || 0) + n.subBarValues[e];
                                const d = _(r.xRange, l, t.cssWidth),
                                    {
                                        xBasePoint: p,
                                        sign: f
                                    } = d;
                                if (n.y > t.cssHeight || n.y + n.height < 0) return;
                                const x = Math.max(l.percentWidth * c / 100 - n.subBarValues.length, 0);
                                let v = p;
                                for (let t = 0; t < n.subBarValues.length; t++) {
                                    const i = n.y,
                                        r = n.y + n.height,
                                        s = v,
                                        d = s + f * (x * n.subBarValues[t] / a);
                                    if (Math.abs(d - s) < .5) continue;
                                    v = d, e.beginPath(), e.fillStyle = l.colors[t];
                                    const c = Math.round(s * o),
                                        u = Math.round(i * o),
                                        p = Math.round(d * o) - c,
                                        _ = Math.max(Math.round(r * o) - u - h, 1);
                                    e.rect(c, u, p, _), e.fill()
                                }
                                if (!l.showValues) return;
                                const y = g(n.displayedValues, l.direction),
                                    m = w(c, n.y, n.height, d, l, y);
                                u.push(m)
                            })), s.length > 0) {
                            const e = i.styles[r.bars[0].styleId],
                                o = _(r.xRange, e, t.cssWidth),
                                a = g(s, e.direction),
                                l = r.bars[r.bars.length - 1],
                                h = w(c, l.y + l.height, d, o, e, a);
                            h.color = (0, n.shiftColor)(h.color, 1.5), u.push(h)
                        }
                        const p = Math.min(...u.map((e => e.fontSize)));
                        if (p >= 7.5)
                            for (const i of u) i.fontSize = p, v(e, t, i)
                    })), e.restore()
                }
            }

            function _(e, t, i) {
                const n = t.location === s.HHistLocation.Absolute,
                    o = t.location === s.HHistLocation.Relative,
                    r = t.direction === s.HHistDirection.LeftToRight,
                    a = t.direction === s.HHistDirection.RightToLeft;
                let l, d;
                if (n && r) l = e.min, d = 1;
                else if (n && a) l = e.max, d = -1;
                else if (o && r) l = 0, d = 1;
                else {
                    if (!o || !a) throw new Error(`Unknown location/direction values: ${t.location}/${t.direction}`);
                    l = i, d = -1
                }
                return {
                    xBasePoint: l,
                    sign: d
                }
            }

            function g(e, t) {
                t === s.HHistDirection.RightToLeft && (e = e.slice()).reverse();
                const i = new c.VolumeFormatter;
                return e.map((e => i.format(e))).join("x")
            }

            function w(e, t, i, n, o, r) {
                const a = Math.min(Math.round(1.7 * e / r.length), Math.round(.6 * i)),
                    l = o.direction === s.HHistDirection.LeftToRight ? "left" : "right",
                    {
                        xBasePoint: h,
                        sign: c
                    } = n,
                    u = h + 3 * c,
                    p = t + .7 * i;
                return {
                    text: r,
                    color: o.valuesColor,
                    fontSize: a,
                    align: l,
                    point: new d.Point(u, p)
                }
            }

            function v(e, t, i) {
                const {
                    text: n,
                    color: o,
                    fontSize: r,
                    align: s,
                    point: a
                } = i;
                e.font = `${r}px ${u.CHART_FONT_FAMILY}`, e.fillStyle = o, e.textAlign = s, (0, h.drawScaled)(e, t.pixelRatio, (() => e.fillText(n, a.x, a.y)))
            }
            var y = i(114123);
            class m {
                constructor(e, t, i, n, o = !1) {
                    this._invalidated = !0, this._histBoxBgStyle = null, this._provider = e, this._model = t, this._histBoxBgStyle = null != n ? n : null, this._extendToBarsEndings = o, this._rendererData = {
                        histograms: [],
                        styles: {}
                    }, this._textData = [], this._hhistRenderer = new x(this._rendererData)
                }
                update() {
                    this._invalidated = !0
                }
                renderer() {
                    this._invalidated && (this._updateViewInternal(), this._invalidated = !1);
                    const e = new a.CompositeRenderer;
                    e.append(this._hhistRenderer);
                    for (const t of this._textData) e.append(new l.TextRenderer(t, new r.HitTestResult(r.HitTestResult.REGULAR)));
                    return e
                }
                _resetRenderersData() {
                    this._rendererData.histograms = [], this._rendererData.styles = {}, this._rendererData.histBoxBgColor = void 0, this._textData = []
                }
                _prepareStyles() {
                    var e, t;
                    const i = (0, o.ensureDefined)(this._provider.graphicsInfo().hhists),
                        n = Object.keys(i),
                        r = (0, o.ensureDefined)(this._provider.properties().childs().graphics.childs().hhists),
                        a = (null === (t = null === (e = this._provider.properties().child("inputs")) || void 0 === e ? void 0 : e.child("volume")) || void 0 === t ? void 0 : t.value()) === s.HHistVolumeMode.Delta;
                    for (const e of n) {
                        const t = (0, o.ensureDefined)(r.childs()[e]).childs(),
                            n = (0, o.ensureDefined)(i[e]);
                        if (a) this._rendererData.styles[e + "UpDominate"] = {
                            colors: T(t.colors[0].value(), t.transparencies[0].value()),
                            visible: t.visible.value(),
                            percentWidth: t.percentWidth.value(),
                            location: n.location,
                            direction: t.direction.value(),
                            showValues: t.showValues.value(),
                            addToTotalValue: !1,
                            valuesColor: t.valuesColor.value()
                        }, this._rendererData.styles[e + "DownDominate"] = {
                            colors: T(t.colors[1].value(), t.transparencies[1].value()),
                            visible: t.visible.value(),
                            percentWidth: t.percentWidth.value(),
                            location: n.location,
                            direction: t.direction.value(),
                            showValues: t.showValues.value(),
                            addToTotalValue: !1,
                            valuesColor: t.valuesColor.value()
                        };
                        else {
                            const i = (0, y.generateColor)(t.colors[0].value(), t.transparencies[0].value()),
                                o = t.colors[1] ? (0, y.generateColor)(t.colors[1].value(), t.transparencies[1].value()) : i;
                            this._rendererData.styles[e] = {
                                colors: [i, o],
                                visible: t.visible.value(),
                                percentWidth: t.percentWidth.value(),
                                location: n.location,
                                direction: t.direction.value(),
                                showValues: t.showValues.value(),
                                addToTotalValue: !0,
                                valuesColor: t.valuesColor.value()
                            }
                        }
                    }
                    if (this._histBoxBgStyle) {
                        const e = this._histBoxBgStyle.childs();
                        this._rendererData.histBoxBgColor = (0, y.generateColor)(e.color.value(), e.transparency.value())
                    }
                }
                _updateViewInternal() {
                    this._resetRenderersData();
                    const e = this._provider.priceScale(),
                        t = this._model.timeScale();
                    if (!e || e.isEmpty() || t.isEmpty()) return;
                    if (null === this._provider.firstValue()) return;
                    const i = this._provider.graphics().hhistsByTimePointIndex();
                    if (0 === i.size) return;
                    const n = t.visibleBarsStrictRange();
                    if (null === n) return;
                    const r = n.firstBar(),
                        s = n.lastBar();
                    this._prepareStyles(), (0, o.ensureDefined)(i).forEach(((i, n) => {
                        let o = 1 / 0,
                            a = -1 / 0;
                        i.forEach((e => {
                            o = Math.min(o, e.firstBarTime), a = Math.max(a, e.lastBarTime)
                        })), a < r || o > s || this._updateDataForRenderers(i, e, t)
                    }))
                }
                _updateDataForRenderers(e, t, i) {
                    var n, r;
                    if (e.size <= 0) return;
                    let a = null;
                    if (e.forEach((e => {
                            a = a || e
                        })), null === a) return;
                    let l = a;
                    e.forEach((e => {
                        e.priceLow < l.priceLow && (l = e)
                    }));
                    const d = (null === (r = null === (n = this._provider.properties().child("inputs")) || void 0 === n ? void 0 : n.child("volume")) || void 0 === r ? void 0 : r.value()) === s.HHistVolumeMode.Delta,
                        h = function(e, t, i) {
                            const n = i ? t.barSpacing() / 2 : 0;
                            return p(t.indexToCoordinate(e.firstBarTime) - n, t.indexToCoordinate(e.lastBarTime) + n)
                        }(a, i, this._extendToBarsEndings),
                        c = (0, o.ensureNotNull)(this._provider.firstValue()),
                        u = [];
                    e.forEach((e => {
                        null == e.rate[e.rate.length - 1] && e.rate.splice(-1, 1);
                        let i = [],
                            n = [],
                            o = e.styleId;
                        if (d) {
                            const [t, r, s] = e.rate[0] > e.rate[1] ? [e.rate[1], e.rate[0], "UpDominate"] : [e.rate[0], e.rate[1], "DownDominate"];
                            i = [r - t, t, t], n = [r - t], o += s
                        } else i = e.rate, n = e.rate;
                        const r = function(e, t, i) {
                            return p(t.priceToCoordinate(e.priceHigh, i), t.priceToCoordinate(e.priceLow, i))
                        }(e, t, c);
                        u.push({
                            height: r.max - r.min,
                            y: r.min,
                            subBarValues: i,
                            displayedValues: n,
                            styleId: o
                        })
                    })), u.sort(((e, t) => e.y - t.y)), this._rendererData.histograms.push({
                        xRange: h,
                        yRange: p(u[0].y, u[u.length - 1].y + u[u.length - 1].height),
                        bars: u
                    })
                }
            }

            function T(e, t) {
                let i;
                if ((0, y.isHexColor)(e)) i = 100 - t;
                else {
                    const o = (0, n.tryParseRgba)(e);
                    i = 100 - (null !== o ? (0, y.alphaToTransparency)(o[3]) : t)
                }
                return [(0, y.generateColor)(e, 100 - i, !0), (0, y.generateColor)(e, 100 - i / 2, !0), (0, y.generateColor)(e, 100 - i / 4, !0)]
            }
        },
        491810: (e, t, i) => {
            i.r(t), i.d(t, {
                HorizLinePaneView: () => a
            });
            var n = i(650151),
                o = i(858063),
                r = i(28035),
                s = i(803936);
            class a {
                constructor(e, t, i, n = !1) {
                    this._data = [], this._invalidated = !0, this._provider = e, this._model = t,
                        this._extendToBarsEndings = n, this._hitTestResult = void 0 !== i ? new o.HitTestResult(o.HitTestResult.CUSTOM, i) : new o.HitTestResult(o.HitTestResult.REGULAR)
                }
                update() {
                    this._invalidated = !0
                }
                renderer() {
                    this._invalidated && (this._updateViewInternal(), this._invalidated = !1);
                    const e = new r.CompositeRenderer;
                    for (const t of this._data) {
                        const i = new s.HorizontalLineRenderer;
                        i.setData(t), i.setHitTest(this._hitTestResult), e.append(i)
                    }
                    return e
                }
                _updateViewInternal() {
                    this._data = [];
                    const e = this._provider.priceScale(),
                        t = this._model.timeScale();
                    if (!e || e.isEmpty() || t.isEmpty()) return;
                    const i = this._provider.graphics().horizlines();
                    if (0 === i.size) return;
                    const o = this._model.timeScale().visibleBarsStrictRange();
                    if (null === o) return;
                    const r = this._provider.firstValue();
                    if (null === r) return;
                    const s = o.firstBar(),
                        a = o.lastBar(),
                        l = this._extendToBarsEndings ? t.barSpacing() / 2 : 0,
                        d = (0, n.ensureDefined)(this._provider.properties().childs().graphics.childs().horizlines);
                    i.forEach(((i, o) => {
                        const h = (0, n.ensureDefined)(d.childs()[o]).childs();
                        h.visible.value() && i.forEach((i => {
                            const o = i.startIndex,
                                d = i.endIndex;
                            !i.extendRight && Math.max(o, d) < s || !i.extendLeft && Math.min(o, d) > a || this._data.push({
                                y: e.priceToCoordinate((0, n.ensureDefined)(i.level), r),
                                left: i.extendLeft ? void 0 : t.indexToCoordinate(o) - l,
                                right: i.extendRight ? void 0 : t.indexToCoordinate(d) + l,
                                color: h.color.value(),
                                linewidth: h.width.value(),
                                linestyle: h.style.value()
                            })
                        }))
                    }))
                }
            }
        },
        298258: (e, t, i) => {
            i.r(t), i.d(t, {
                LevelPaneView: () => c
            });
            var n = i(650151),
                o = i(86441),
                r = i(858063),
                s = i(517335),
                a = i(28035),
                l = i(803936),
                d = i(544445),
                h = i(623331);
            class c {
                constructor(e, t, i) {
                    this._data = [], this._textData = [], this._invalidated = !0, this._provider = e, this._model = t
                }
                update() {
                    this._invalidated = !0
                }
                renderer() {
                    this._invalidated && (this._updateViewInternal(), this._invalidated = !1);
                    const e = new a.CompositeRenderer;
                    for (const t of this._data) {
                        const i = new l.HorizontalLineRenderer;
                        i.setData(t), e.append(i)
                    }
                    for (const t of this._textData) e.append(new d.TextRenderer(t, new r.HitTestResult(r.HitTestResult.REGULAR)));
                    return e
                }
                _updateViewInternal() {
                    this._calcHorzLinesData(), this._calcTextData()
                }
                _calcTextData() {
                    this._textData = [];
                    const e = this._provider.priceScale(),
                        t = this._model.timeScale();
                    if (!e || e.isEmpty() || t.isEmpty()) return;
                    const i = this._provider.graphics().hlines();
                    if (0 === i.size) return;
                    const r = this._provider.firstValue();
                    if (null === r) return;
                    const a = (0, n.ensureDefined)(this._provider.properties().childs().graphics.childs().hlines),
                        l = (0, n.ensureDefined)(this._provider.graphicsInfo().hlines);
                    i.forEach(((i, d) => {
                        const c = (0, n.ensureDefined)(a.childs()[d]).childs();
                        (0, n.ensureDefined)(l[d]).enableText && (0, n.ensureDefined)(c.showText).value() && i.forEach((i => {
                            const a = e.priceToCoordinate((0, n.ensureDefined)(i.level), r),
                                l = (0, n.ensureDefined)(c.textPos).value(),
                                [d, u] = function(e, t) {
                                    if (e === s.TextPos.TopLeft || e === s.TextPos.MiddleLeft || e === s.TextPos.BottomLeft) return ["left", 4];
                                    if (e === s.TextPos.TopCenter || e === s.TextPos.MiddleCenter || e === s.TextPos.BottomCenter) return ["center", t / 2];
                                    if (e === s.TextPos.TopRight || e === s.TextPos.MiddleRight || e === s.TextPos.BottomRight) return ["right", t];
                                    throw new Error("Unsupported TextPos value")
                                }(l, t.width()),
                                [p, f] = function(e, t) {
                                    if (e === s.TextPos.TopLeft || e === s.TextPos.TopCenter || e === s.TextPos.TopRight) return ["bottom", t - 4];
                                    if (e === s.TextPos.MiddleLeft || e === s.TextPos.MiddleCenter || e === s.TextPos.MiddleRight) return ["middle", t - 2];
                                    if (e === s.TextPos.BottomLeft || e === s.TextPos.BottomCenter || e === s.TextPos.BottomRight) return ["top", t];
                                    throw new Error("Unsupported TextPos value")
                                }(l, a);
                            this._textData.push({
                                points: [new o.Point(u, f)],
                                offsetX: 0,
                                offsetY: 0,
                                text: i.text || "",
                                color: c.color.value(),
                                font: h.CHART_FONT_FAMILY,
                                fontsize: (0, n.ensureDefined)(c.fontSize).value(),
                                horzAlign: d,
                                vertAlign: p
                            })
                        }))
                    }))
                }
                _calcHorzLinesData() {
                    this._data = [];
                    const e = this._provider.priceScale(),
                        t = this._model.timeScale();
                    if (!e || e.isEmpty() || t.isEmpty()) return;
                    const i = this._provider.graphics().hlines();
                    if (0 === i.size) return;
                    const o = this._provider.firstValue();
                    if (null === o) return;
                    const r = (0, n.ensureDefined)(this._provider.properties().childs().graphics.childs().hlines);
                    i.forEach(((t, i) => {
                        const s = (0, n.ensureDefined)(r.childs()[i]).childs();
                        s.visible.value() && t.forEach((t => {
                            const i = e.priceToCoordinate((0, n.ensureDefined)(t.level), o);
                            this._data.push({
                                visible: !0,
                                y: i,
                                color: s.color.value(),
                                linewidth: s.width.value(),
                                linestyle: s.style.value()
                            })
                        }))
                    }))
                }
            }
        },
        684607: (e, t, i) => {
            i.r(t), i.d(t, {
                LinePaneView: () => d
            });
            var n = i(650151),
                o = i(86441),
                r = i(858063),
                s = i(28035),
                a = i(739665),
                l = i(296266);
            class d {
                constructor(e, t, i) {
                    this._data = [], this._invalidated = !0, this._provider = e, this._model = t, this._hitTestResult = void 0 !== i ? new r.HitTestResult(r.HitTestResult.CUSTOM, i) : new r.HitTestResult(r.HitTestResult.REGULAR)
                }
                update() {
                    this._invalidated = !0
                }
                renderer() {
                    this._invalidated && (this._updateViewInternal(), this._invalidated = !1);
                    const e = new s.CompositeRenderer;
                    for (const t of this._data) {
                        const i = new l.TrendLineRenderer;
                        i.setData(t), i.setHitTest(this._hitTestResult), e.append(i)
                    }
                    return e
                }
                _updateViewInternal() {
                    this._data = [];
                    const e = this._provider.priceScale(),
                        t = this._model.timeScale();
                    if (!e || e.isEmpty() || t.isEmpty()) return;
                    const i = this._provider.graphics().lines();
                    if (0 === i.size) return;
                    const r = this._model.timeScale().visibleBarsStrictRange();
                    if (null === r) return;
                    const s = this._provider.firstValue();
                    if (null === s) return;
                    const l = r.firstBar(),
                        d = r.lastBar(),
                        h = (0, n.ensureDefined)(this._provider.properties().childs().graphics.childs().lines);
                    i.forEach(((i, r) => {
                        const c = (0, n.ensureDefined)(h.childs()[r]).childs();
                        c.visible.value() && i.forEach((i => {
                            const r = i.startIndex + (i.startOffset || 0),
                                h = i.endIndex + (i.endOffset || 0);
                            if (Math.max(r, h) < l || Math.min(r, h) > d) return;
                            const u = t.indexToCoordinate(r),
                                p = t.indexToCoordinate(h),
                                f = e.priceToCoordinate((0, n.ensureDefined)(i.startPrice), s),
                                x = e.priceToCoordinate((0, n.ensureDefined)(i.endPrice), s),
                                _ = new o.Point(u, f),
                                g = new o.Point(p, x);
                            this._data.push({
                                points: [_, g],
                                extendleft: !1,
                                extendright: !1,
                                leftend: a.LineEnd.Normal,
                                rightend: a.LineEnd.Normal,
                                color: c.color.value(),
                                linewidth: c.width.value(),
                                linestyle: c.style.value()
                            })
                        }))
                    }))
                }
            }
        },
        860940: (e, t, i) => {
            i.r(t), i.d(t, {
                PolygonPaneView: () => d
            });
            var n = i(650151),
                o = i(86441),
                r = i(858063),
                s = i(28035),
                a = i(631586),
                l = i(530513);
            class d {
                constructor(e, t, i) {
                    this._data = [], this._invalidated = !0, this._provider = e, this._model = t, this._hitTestResult = void 0 !== i ? new r.HitTestResult(r.HitTestResult.CUSTOM, i) : new r.HitTestResult(r.HitTestResult.REGULAR)
                }
                update() {
                    this._invalidated = !0
                }
                renderer() {
                    this._invalidated && (this._updateViewInternal(), this._invalidated = !1);
                    const e = new s.CompositeRenderer;
                    for (const t of this._data) {
                        const i = new l.PolygonRenderer(this._hitTestResult);
                        i.setData(t), e.append(i)
                    }
                    return e
                }
                _updateViewInternal() {
                    this._data = [];
                    const e = this._provider.priceScale(),
                        t = this._model.timeScale();
                    if (!e || e.isEmpty() || t.isEmpty()) return;
                    const i = this._provider.graphics().polygons();
                    if (0 === i.size) return;
                    const r = this._model.timeScale().visibleBarsStrictRange();
                    if (null === r) return;
                    const s = this._provider.firstValue();
                    if (null === s) return;
                    const l = r.firstBar(),
                        d = r.lastBar(),
                        h = (0, n.ensureDefined)(this._provider.properties().childs().graphics.childs().polygons),
                        c = (0, n.ensureDefined)(this._provider.graphicsInfo().polygons);
                    i.forEach(((i, r) => {
                        const u = (0, n.ensureDefined)(h.childs()[r]).childs(),
                            p = (0, n.ensureDefined)(c[r]);
                        100 !== u.transparency.value() && i.forEach((i => {
                            let r = 1 / 0,
                                h = -1 / 0;
                            for (const e of i.points) {
                                const t = e.index + (e.offset || 0);
                                r = Math.min(r, t), h = Math.max(h, t)
                            }
                            if (h < l || d < r) return;
                            const c = i.points.map((i => {
                                const r = t.indexToCoordinate(i.index + (i.offset || 0)),
                                    a = e.priceToCoordinate((0, n.ensureDefined)(i.level), s);
                                return new o.Point(r, a)
                            }));
                            this._data.push({
                                points: c,
                                color: u.color.value(),
                                backcolor: u.color.value(),
                                linewidth: p.showBorder ? 1 : 0,
                                linestyle: a.LINESTYLE_SOLID,
                                filled: !0,
                                fillBackground: !0,
                                transparency: u.transparency.value(),
                                mouseTouchable: p.mouseTouchable
                            })
                        }))
                    }))
                }
            }
        },
        700327: (e, t, i) => {
            i.r(t), i.d(t, {
                ShapeMarkPaneView: () => g
            });
            var n = i(650151),
                o = i(86441),
                r = i(96841),
                s = i(28035),
                a = i(934026),
                l = i(858063),
                d = i(741341);
            class h {
                constructor(e) {
                    this._data = e
                }
                draw(e, t) {
                    const i = "down" === this._data.direction ? 1 : "up" === this._data.direction ? -1 : 0,
                        n = this._data.point.x,
                        o = this._data.point.y;
                    (0, d.drawScaled)(e, t.pixelRatio, (() => {
                        e.fillStyle = this._data.color, e.beginPath(), e.arc(n + 1, o + 2 * this._data.size * i, this._data.size, 0, 2 * Math.PI), e.closePath(), e.fill(), e.stroke()
                    }))
                }
                hitTest(e) {
                    const t = "down" === this._data.direction ? 1 : "up" === this._data.direction ? -1 : 0,
                        i = new o.Point(this._data.point.x + .5, this._data.point.y + .5 + 2 * this._data.size * t);
                    return (0, a.pointInCircle)(e, i, this._data.size) ? new l.HitTestResult(l.HitTestResult.REGULAR) : null
                }
            }
            class c {
                constructor(e) {
                    this._data = e
                }
                draw(e, t) {
                    const i = "down" === this._data.direction ? 1 : "up" === this._data.direction ? -1 : 0,
                        n = this._data.size,
                        r = new o.Point(this._data.point.x - n / 2, this._data.point.y - n / 2 + i * n),
                        s = new o.Point(this._data.point.x + n / 2, this._data.point.y + n / 2 + i * n).subtract(r),
                        a = t.pixelRatio,
                        l = Math.max(1, Math.floor(a)),
                        d = l / 2,
                        h = l % 2 ? .5 : 0,
                        c = Math.round(r.x * a) + h,
                        u = Math.round((r.x + s.x) * a) + h,
                        p = Math.round(r.y * a) + h,
                        f = Math.round((r.y + s.y) * a) + h;
                    e.beginPath(), e.fillStyle = this._data.color, e.rect(c + d, p + d, u - c - l, f - p - l), e.fill(), e.lineWidth = l, e.beginPath(), e.rect(c, p, u - c, f - p), e.stroke()
                }
                hitTest(e) {
                    const t = "down" === this._data.direction ? 1 : "up" === this._data.direction ? -1 : 0,
                        i = this._data.size,
                        n = new o.Point(this._data.point.x - i / 2, this._data.point.y - i / 2 + t * i),
                        r = new o.Point(this._data.point.x + i / 2, this._data.point.y + i / 2 + t * i);
                    return (0, a.pointInBox)(e, (0, o.box)(n, r)) ? new l.HitTestResult(l.HitTestResult.REGULAR) : null
                }
            }
            class u {
                constructor(e, t) {
                    this._data = e, this._arrowDirection = t
                }
                draw(e, t) {
                    const i = this._arrowDirection,
                        n = this._data.size,
                        o = this._data.color,
                        r = this._data.point.x + 1;
                    let s = this._data.point.y;
                    const a = 1.1 * n;
                    switch (i) {
                        case "up":
                            s -= a;
                            break;
                        case "down":
                            s += a
                    }
                    const l = n / 6,
                        h = n / 4,
                        c = n / 3,
                        u = n / 2,
                        p = .6666666 * n;
                    (0, d.drawScaled)(e, t.pixelRatio, (() => {
                        switch (e.fillStyle = o, e.beginPath(), i) {
                            case "up":
                                e.moveTo(r, s), e.lineTo(r - u, s + p), e.lineTo(r - h, s + p), e.lineTo(r, s + c), e.lineTo(r + h, s + p), e.lineTo(r + u, s + p), e.lineTo(r, s);
                                break;
                            case "down":
                                e.moveTo(r, s + n), e.lineTo(r - u, s + c), e.lineTo(r - h, s + c), e.lineTo(r, s + p), e.lineTo(r + h, s + c), e.lineTo(r + u, s + c), e.lineTo(r, s + n);
                                break;
                            case "right":
                                e.moveTo(r + l, s), e.lineTo(r - l, s - h), e.lineTo(r - l, s + h), e.lineTo(r + l, s);
                                break;
                            case "left":
                                e.moveTo(r - l, s), e.lineTo(r + l, s - h), e.lineTo(r + l, s + h), e.lineTo(r - l, s)
                        }
                        e.closePath(), e.fill(), e.stroke()
                    }))
                }
                hitTest(e) {
                    const [t, i, n] = this._hitTriangle();
                    return (0, a.pointInTriangle)(e, t, i, n) ? new l.HitTestResult(l.HitTestResult.REGULAR) : null
                }
                _hitTriangle() {
                    const e = this._data.point.x;
                    let t = this._data.point.y;
                    const i = this._arrowDirection,
                        n = this._data.size,
                        r = 1.1 * n;
                    switch (i) {
                        case "up":
                            t -= r;
                            break;
                        case "down":
                            t += r
                    }
                    const s = n / 6,
                        a = n / 4,
                        l = n / 3,
                        d = n / 2,
                        h = .6666666 * n;
                    switch (i) {
                        case "up":
                            return [new o.Point(e, t), new o.Point(e + d, t + h), new o.Point(e - d, t + h)];
                        case "down":
                            return [new o.Point(e, t + n), new o.Point(e + d, t + l), new o.Point(e - d, t + l)];
                        case "right":
                            return [new o.Point(e + s, t), new o.Point(e - s, t - a), new o.Point(e - s, t + a)];
                        case "left":
                            return [new o.Point(e - s, t), new o.Point(e + s, t - a), new o.Point(e + s, t + a)]
                    }
                }
            }
            var p = i(586335),
                f = i.n(p),
                x = i(114123);
            const _ = (0, i(272001).getLogger)("Chart.ShapeMarkPaneView");
            class g extends(f()) {
                constructor(e, t, i) {
                    super(), this._data = [], this._invalidated = !0, this._provider = e, this._model = t, this._data = []
                }
                update() {
                    this._invalidated = !0
                }
                renderer() {
                    this._invalidated && (this._updateViewInternal(), this._invalidated = !1);
                    const e = new s.CompositeRenderer;
                    for (const t of this._data) switch (t.shape) {
                        case "circle":
                            e.append(new h(t));
                            break;
                        case "square":
                            e.append(new c(t));
                            break;
                        case "arrowUp":
                            e.append(new u(t, "up"));
                            break;
                        case "arrowDown":
                            e.append(new u(t, "down"));
                            break;
                        case "arrowRight":
                            e.append(new u(t, "right"));
                            break;
                        case "arrowLeft":
                            e.append(new u(t, "left"))
                    }
                    return e
                }
                _updateViewInternal() {
                    this._data = [];
                    const e = this._provider.priceScale(),
                        t = this._model.timeScale();
                    if (!e || e.isEmpty() || t.isEmpty()) return;
                    const i = this._provider.graphics().shapemarks();
                    if (0 === i.size) return;
                    const r = this._model.timeScale().visibleBarsStrictRange();
                    if (null === r) return;
                    const s = this._provider.firstValue();
                    if (null === s) return;
                    const a = r.firstBar(),
                        l = r.lastBar(),
                        d = (0, n.ensureDefined)(this._provider.properties().childs().graphics.childs().shapemarks),
                        h = (0, n.ensureDefined)(this._provider.graphicsInfo().shapemarks);
                    i.forEach(((i, r) => {
                        const c = (0,
                                n.ensureDefined)(d.childs()[r]).childs(),
                            u = (0, n.ensureDefined)(h[r]);
                        c.visible.value() && i.forEach((i => {
                            const n = i.time;
                            if (n < a || l < n) return;
                            if (null === this._provider.series().bars().valueAt(n)) return;
                            const r = "left" === u.halign ? -(t.barSpacing() / 2 + 1) : "right" === u.halign ? t.barSpacing() / 2 + 1 : 0,
                                d = u.location,
                                h = u.shape,
                                p = c.size.value(),
                                f = (0, x.generateColor)(c.color.value(), c.transparency.value()),
                                {
                                    x: _,
                                    y: g,
                                    direction: w
                                } = this._calcCoordsForShape(d, n, p, i.price, s, e, t);
                            switch (h) {
                                case "circle":
                                case "square":
                                    this._data.push({
                                        shape: h,
                                        color: f,
                                        direction: w,
                                        point: new o.Point(_ + r, g),
                                        size: p
                                    });
                                    break;
                                case "arrowUp":
                                case "arrowDown":
                                case "arrowRight":
                                case "arrowLeft":
                                    this._data.push({
                                        shape: h,
                                        color: f,
                                        point: new o.Point(_ + r, g),
                                        size: p
                                    })
                            }
                        }))
                    }))
                }
                _calcCoordsForShape(e, t, i, o, s, a, l) {
                    const d = Math.round(l.indexToCoordinate(t));
                    switch (e) {
                        case r.MarkLocation.Absolute:
                            return {
                                x: d,
                                y: a.priceToCoordinate((0, n.ensureDefined)(o), s),
                                direction: ""
                            };
                        case r.MarkLocation.AbsoluteDown:
                            return {
                                x: d,
                                y: a.priceToCoordinate((0, n.ensureDefined)(o), s),
                                direction: "down"
                            };
                        case r.MarkLocation.AbsoluteUp:
                            return {
                                x: d,
                                y: a.priceToCoordinate((0, n.ensureDefined)(o), s),
                                direction: "up"
                            };
                        case r.MarkLocation.AboveBar:
                            return {
                                x: d,
                                y: this._locationToY(e, t, Math.floor(2 * i / l.barSpacing()) + 1),
                                direction: "up"
                            };
                        case r.MarkLocation.BelowBar:
                            return {
                                x: d,
                                y: this._locationToY(e, t, Math.floor(2 * i / l.barSpacing()) + 1),
                                direction: "down"
                            };
                        default:
                            return _.logWarn("Bad location value: " + e), {
                                x: d,
                                y: this._locationToY(r.MarkLocation.AbsoluteUp, t),
                                direction: "up"
                            }
                    }
                }
            }
        },
        514331: (e, t, i) => {
            i.r(t), i.d(t, {
                TextMarkPaneView: () => w
            });
            var n = i(650151),
                o = i(86441),
                r = i(96841),
                s = i(650575),
                a = i(28035),
                l = i(934026),
                d = i(858063),
                h = i(741341),
                c = i(768038);
            class u {
                constructor(e, t) {
                    this._data = e, this._textCache = t
                }
                draw(e, t) {
                    if (!this._data) return;
                    const i = p(this._data.direction);
                    let n = this._data.point.x;
                    "left" === this._data.halign ? n -= this._data.size : "right" === this._data.halign && (n += this._data.size);
                    const o = this._data.point.y;
                    e.font = this._fontStyle();
                    const r = e.measureText(this._data.text).width;
                    this._textCache.textWidth = r;
                    const s = this._data.fontSize;
                    e.textAlign = (0, c.isRtl)() ? "right" : "left";
                    const a = (0, h.calcTextHorizontalShift)(e, r),
                        l = .65 * s,
                        d = 1 * s;
                    (0, h.drawScaled)(e, t.pixelRatio, (() => {
                        e.translate(n, o), e.beginPath(), e.moveTo(0, 0), e.lineTo(l, d * i), e.lineTo(.5 * r + l, d * i), e.lineTo(.5 * r + l, (d + 1.75 * s) * i), e.lineTo(.5 * -r - l, (d + 1.75 * s) * i), e.lineTo(.5 * -r - l, d * i), e.lineTo(-l, d * i), e.lineTo(0, 0), e.strokeStyle = this._data.borderColor, e.stroke(), e.fillStyle = this._data.color, e.fill(), e.fillStyle = this._data.fontColor, e.fillText(this._data.text, .5 * -r + a, i < 0 ? i * d - .5 * s : d + 1.25 * s)
                    }))
                }
                hitTest(e) {
                    const t = this._textCache.textWidth || 0,
                        i = this._data.fontSize,
                        n = p(this._data.direction),
                        r = .65 * i,
                        s = 1 * i;
                    let a = this._data.point.x;
                    "left" === this._data.halign ? a -= this._data.size : "right" === this._data.halign && (a += this._data.size);
                    const h = this._data.point.y,
                        c = a - .5 * t - r,
                        u = a + .5 * t + r;
                    let f = h + s * n,
                        x = h + (s + 1.75 * i) * n;
                    if (x < f) {
                        const e = f;
                        f = x, x = e
                    }
                    if ((0, l.pointInBox)(e, (0, o.box)(new o.Point(c, f), new o.Point(u, x)))) return new d.HitTestResult(d.HitTestResult.REGULAR);
                    const _ = [new o.Point(this._data.point.x, this._data.point.y), new o.Point(this._data.point.x + .65 * i, this._data.point.y + i * n), new o.Point(this._data.point.x - .65 * i, this._data.point.y + i * n)],
                        g = (e.x - _[0].x) * (_[1].y - _[0].y) - (e.y - _[0].y) * (_[1].x - _[0].x);
                    return ((e.x - _[1].x) * (_[2].y - _[1].y) - (e.y - _[1].y) * (_[2].x - _[1].x)) * g > 0 && ((e.x - _[2].x) * (_[0].y - _[2].y) - (e.y - _[2].y) * (_[0].x - _[2].x)) * g > 0 ? new d.HitTestResult(d.HitTestResult.REGULAR) : null
                }
                _fontStyle() {
                    return (this._data.bold ? "bold " : "") + (this._data.italic ? "italic " : "") + `${this._data.fontSize}px ${this._data.font}`
                }
            }

            function p(e) {
                if ("up" === e) return 1;
                if ("down" === e) return -1;
                throw new Error(`${e} is not supported by TriangleTextMarkRenderer`)
            }
            class f {
                constructor(e, t) {
                    this._data = e, this._textCache = t
                }
                draw(e, t) {
                    const i = this._data.point.x,
                        n = this._data.point.y;
                    e.font = this._fontStyle();
                    const o = e.measureText(this._data.text).width;
                    this._textCache.textWidth = o, (0, h.drawScaled)(e, t.pixelRatio, (() => {
                        switch (e.translate(i, n), e.beginPath(), e.moveTo(0, 0), e.textAlign = this._data.halign, this._data.valign) {
                            case "middle":
                                e.textBaseline = "middle";
                                break;
                            case "top":
                                e.textBaseline = "bottom";
                                break;
                            case "bottom":
                                e.textBaseline = "hanging"
                        }
                        e.fillStyle = this._data.fontColor, e.fillText(this._data.text, 0, 0)
                    }))
                }
                hitTest(e) {
                    let t = this._data.point.x,
                        i = this._data.point.y;
                    const n = this._textCache.textWidth || 0,
                        r = this._data.fontSize;
                    switch (this._data.halign) {
                        case "right":
                            t -= n;
                            break;
                        case "center":
                            t -= n / 2
                    }
                    switch (this._data.valign) {
                        case "middle":
                            i -= r / 2;
                            break;
                        case "bottom":
                            i -= r
                    }
                    const s = new o.Point(t, i),
                        a = new o.Point(t + n, i + r);
                    return (0, l.pointInBox)(e, (0, o.box)(s, a)) ? new d.HitTestResult(d.HitTestResult.REGULAR) : null
                }
                _fontStyle() {
                    return (this._data.bold ? "bold " : "") + (this._data.italic ? "italic " : "") + `${this._data.fontSize}px ${this._data.font}`
                }
            }
            var x = i(586335),
                _ = i.n(x),
                g = i(114123);
            class w extends(_()) {
                constructor(e, t, i) {
                    super(), this._data = [], this._textCache = [], this._invalidated = !0, this._provider = e, this._model = t, this._data = [], this._textCache = []
                }
                update() {
                    this._invalidated = !0
                }
                renderer() {
                    this._invalidated && (this._updateViewInternal(), this._invalidated = !1);
                    const e = new a.CompositeRenderer;
                    for (let t = 0; t < this._data.length; t++) {
                        const i = this._data[t],
                            n = this._textCache[t];
                        switch (i.shape) {
                            case "triangle":
                                e.append(new u(i, n));
                                break;
                            case "rectangle":
                                e.append(new f(i, n))
                        }
                    }
                    return e
                }
                _updateViewInternal() {
                    this._data = [];
                    const e = this._provider.priceScale(),
                        t = this._model.timeScale();
                    if (!e || e.isEmpty() || t.isEmpty()) return;
                    const i = this._provider.graphics().textmarks();
                    if (0 === i.size) return;
                    const r = this._model.timeScale().visibleBarsStrictRange();
                    if (null === r) return;
                    const a = this._provider.firstValue();
                    if (null === a) return;
                    const l = r.firstBar(),
                        d = r.lastBar(),
                        h = (0, n.ensureDefined)(this._provider.properties().childs().graphics.childs().textmarks),
                        c = (0, n.ensureDefined)(this._provider.graphicsInfo().textmarks);
                    i.forEach(((i, r) => {
                        const u = (0, n.ensureDefined)(h.childs()[r]).childs(),
                            p = (0, n.ensureDefined)(c[r]);
                        u.visible.value() && i.forEach((i => {
                            var n;
                            let r = i.time;
                            if (r < l || d < r) return;
                            if (null === this._provider.series().bars().valueAt(r)) return;
                            r = i.time + (i.offset || 0);
                            const h = {
                                    text: i.text ? i.text : "",
                                    bold: u.fontBold.value(),
                                    italic: u.fontItalic.value(),
                                    font: u.fontFamily.value(),
                                    fontColor: (0, g.generateColor)(u.fontColor.value(), u.transparency.value()),
                                    fontSize: u.fontSize.value()
                                },
                                c = p.location,
                                f = p.shape;
                            switch (f) {
                                case s.TextMarkType.Triangle:
                                    {
                                        const {
                                            x: n,
                                            y: s,
                                            direction: l
                                        } = this._calcCoordsForTriangleShape(c, r, 50, i.price, a, e, t);this._data.push({
                                            shape: f,
                                            color: (0, g.generateColor)(u.color.value(), u.transparency.value()),
                                            borderColor: "rgb(0, 0, 0)",
                                            direction: l,
                                            point: new o.Point(n, s),
                                            halign: p.halign,
                                            size: .5 * t.barSpacing(),
                                            ...h
                                        })
                                    }
                                    break;
                                case s.TextMarkType.Rectangle:
                                    {
                                        const {
                                            x: s,
                                            y: l
                                        } = this._calcCoordsForRectangleShape(c, r, i.price, a, e, t);this._data.push({
                                            shape: f,
                                            point: new o.Point(s, l),
                                            halign: p.halign,
                                            valign: null !== (n = p.valign) && void 0 !== n ? n : "middle",
                                            ...h
                                        })
                                    }
                            }
                            this._textCache.push({})
                        }))
                    }))
                }
                _calcCoordsForTriangleShape(e, t, i, o, s, a, l) {
                    const d = Math.round(l.indexToCoordinate(t));
                    switch (e) {
                        case r.MarkLocation.Top:
                            return {
                                x: d,
                                y: a.height() - i,
                                direction: "down"
                            };
                        case r.MarkLocation.Bottom:
                            return {
                                x: d,
                                y: i,
                                direction: "up"
                            };
                        case r.MarkLocation.AbsoluteDown:
                            return {
                                x: d,
                                y: a.priceToCoordinate((0, n.ensureDefined)(o), s),
                                direction: "down"
                            };
                        case r.MarkLocation.AbsoluteUp:
                            return {
                                x: d,
                                y: a.priceToCoordinate((0, n.ensureDefined)(o), s),
                                direction: "up"
                            };
                        case r.MarkLocation.AboveBar:
                            return {
                                x: d,
                                y: this._locationToY(e, t),
                                direction: "down"
                            };
                        case r.MarkLocation.BelowBar:
                        default:
                            return {
                                x: d,
                                y: this._locationToY(e, t),
                                direction: "up"
                            }
                    }
                }
                _calcCoordsForRectangleShape(e, t, i, o, s, a) {
                    const l = Math.round(a.indexToCoordinate(t));
                    switch (e) {
                        case r.MarkLocation.AbsoluteDown:
                        case r.MarkLocation.AbsoluteUp:
                        case r.MarkLocation.Absolute:
                            return {
                                x: l,
                                y: s.priceToCoordinate((0, n.ensureDefined)(i), o)
                            };
                        case r.MarkLocation.AboveBar:
                        case r.MarkLocation.BelowBar:
                            return {
                                x: l,
                                y: this._locationToY(e, t)
                            };
                        case r.MarkLocation.Right:
                        case r.MarkLocation.Left:
                            return {
                                x: a.width(),
                                y: s.priceToCoordinate((0, n.ensureDefined)(i), o)
                            };
                        default:
                            return {
                                x: l,
                                y: this._locationToY(e, t)
                            }
                    }
                }
            }
        },
        442554: (e, t, i) => {
            i.d(t, {
                fontSizes: () => l,
                textBoxData: () => d,
                calculateFontSizeForBox: () => h
            });
            var n = i(86441),
                o = i(623331),
                r = i(519872),
                s = i(923195),
                a = i(538708);
            const l = new Map;

            function d(e, t, i, r, s) {
                let a = e,
                    d = "left";
                "center" === s.horizontalTextAlignment ? (d = "center", a += i / 2) : "right" === s.horizontalTextAlignment && (d = "right", a += i - 1);
                let h = t,
                    c = "top";
                return "center" === s.verticalTextAlignment ? (c = "middle", h += r / 2) : "bottom" === s.verticalTextAlignment && (c = "bottom", h += r - 1), {
                    points: [new n.Point(a, h)],
                    text: s.text,
                    color: s.textColor,
                    vertAlign: c,
                    horzAlign: d,
                    font: "monospace" === s.fontType ? o.CHART_MONOSPACE_FONT_FAMILY : o.CHART_FONT_FAMILY,
                    fontSize: "auto" === s.sizeOptions.textSizeMode ? s.sizeOptions.fontSize : l.get(s.sizeOptions.fontSize),
                    offsetX: 0,
                    offsetY: 0
                }
            }

            function h(e, t, i, n, o) {
                const r = function(e, t) {
                    return Math.floor(.9 * t / (e + .33))
                }(i.length, o);
                return (0, s.lowerboundExt)((e => e), void 0, (o => function(e, t, i, n) {
                    e.font = (0, a.makeFont)(n, t.font, t.italic ? "italic " : void 0, t.bold ? "bold " : void 0);
                    const o = n / 3;
                    return i.reduce(((t, i) => Math.max(t, e.measureText(i).width + o)), 0)
                }(e, t, i, o) <= n), 2, r) - 1
            }
            l.set(r.PlotSymbolSize.Auto, 14), l.set(r.PlotSymbolSize.Tiny, 8),
                l.set(r.PlotSymbolSize.Small, 10), l.set(r.PlotSymbolSize.Normal, 14), l.set(r.PlotSymbolSize.Large, 20), l.set(r.PlotSymbolSize.Huge, 36)
        },
        482268: (e, t, i) => {
            i.r(t), i.d(t, {
                TrendChannelPaneView: () => h
            });
            var n = i(650151),
                o = i(86441),
                r = i(5531),
                s = i(858063),
                a = i(28035),
                l = i(631586),
                d = i(530513);
            class h {
                constructor(e, t, i) {
                    this._data = [], this._invalidated = !0, this._provider = e, this._model = t, this._data = [], this._hitTestResult = void 0 !== i ? new s.HitTestResult(s.HitTestResult.CUSTOM, i) : new s.HitTestResult(s.HitTestResult.REGULAR)
                }
                update() {
                    this._invalidated = !0
                }
                renderer() {
                    this._invalidated && (this._updateViewInternal(), this._invalidated = !1);
                    const e = new a.CompositeRenderer;
                    for (const t of this._data) {
                        const i = new d.PolygonRenderer(this._hitTestResult);
                        i.setData(t), e.append(i)
                    }
                    return e
                }
                _updateViewInternal() {
                    this._data = [];
                    const e = this._provider.priceScale(),
                        t = this._model.timeScale();
                    if (!e || e.isEmpty() || t.isEmpty()) return;
                    const i = this._provider.graphics().trendchannels();
                    if (0 === i.size) return;
                    const r = this._model.timeScale().visibleBarsStrictRange();
                    if (null === r) return;
                    const s = this._provider.firstValue();
                    if (null === s) return;
                    const a = r.firstBar(),
                        d = r.lastBar(),
                        h = (0, n.ensureDefined)(this._provider.properties().childs().graphics.childs().trendchannels),
                        u = (0, n.ensureDefined)(this._provider.graphicsInfo().trendchannels);
                    i.forEach(((i, r) => {
                        const p = (0, n.ensureDefined)(h.childs()[r]).childs(),
                            f = (0, n.ensureDefined)(u[r]);
                        i.forEach((i => {
                            var r;
                            const h = i.startIndex,
                                u = i.endIndex;
                            if (Math.max(h, u) < a && !i.extendRight || Math.min(h, u) > d && !i.extendLeft) return;
                            const x = e.priceToCoordinate((0, n.ensureDefined)(i.startHighPrice), s),
                                _ = e.priceToCoordinate((0, n.ensureDefined)(i.startLowPrice), s),
                                g = e.priceToCoordinate((0, n.ensureDefined)(i.endHighPrice), s),
                                w = g - (x - _),
                                v = t.indexToCoordinate(h),
                                y = t.indexToCoordinate(u),
                                [m, T] = c(new o.Point(v, x), new o.Point(y, g), t.width(), e.height(), i.extendLeft, i.extendRight),
                                [b, R] = c(new o.Point(v, _), new o.Point(y, w), t.width(), e.height(), i.extendLeft, i.extendRight);
                            this._data.push({
                                points: [m, b, R, T],
                                color: p.color.value(),
                                backcolor: p.color.value(),
                                linewidth: null !== (r = f.borderWidth) && void 0 !== r ? r : 0,
                                linestyle: l.LINESTYLE_SOLID,
                                filled: !0,
                                fillBackground: !0,
                                transparency: i.transparency ? Math.min(i.transparency + p.transparency.value(), 100) : p.transparency.value(),
                                mouseTouchable: !0
                            })
                        }))
                    }))
                }
            }

            function c(e, t, i, n, s, a) {
                if ((0, o.equalPoints)(e, t)) return [e, t];
                const l = new o.Point(0, 0),
                    d = new o.Point(i, n);
                if (s) {
                    const n = e.subtract(t),
                        s = (0, r.intersectRayAndBox)(e, e.add(n), (0, o.box)(l, d));
                    s ? e = s : t = new o.Point(i, t.y)
                }
                if (a) {
                    const n = t.subtract(e),
                        s = (0, r.intersectRayAndBox)(t, t.add(n), (0, o.box)(l, d));
                    t = s || new o.Point(i, t.y)
                }
                return [e, t]
            }
        },
        331860: (e, t, i) => {
            i.r(t), i.d(t, {
                VertLinePaneView: () => l
            });
            var n = i(650151),
                o = i(858063),
                r = i(96841),
                s = i(28035),
                a = i(274131);
            class l {
                constructor(e, t, i) {
                    this._data = [], this._invalidated = !0, this._provider = e, this._model = t, this._hitTestResult = void 0 !== i ? new o.HitTestResult(o.HitTestResult.CUSTOM, i) : new o.HitTestResult(o.HitTestResult.REGULAR)
                }
                update() {
                    this._invalidated = !0
                }
                renderer() {
                    this._invalidated && (this._updateViewInternal(), this._invalidated = !1);
                    const e = new s.CompositeRenderer;
                    for (const t of this._data) {
                        const i = new a.VerticalLineRenderer;
                        i.setData(t), i.setHitTest(this._hitTestResult), e.append(i)
                    }
                    return e
                }
                _updateViewInternal() {
                    this._data = [];
                    const e = this._provider.priceScale(),
                        t = this._model.timeScale();
                    if (!e || e.isEmpty() || t.isEmpty()) return;
                    const i = this._provider.graphicsInfo().vertlines,
                        o = this._provider.graphics().vertlines();
                    if (0 === o.size || void 0 === i) return;
                    const s = this._model.timeScale().visibleBarsStrictRange();
                    if (null === s) return;
                    const a = this._provider.firstValue();
                    if (null === a) return;
                    const l = s.firstBar(),
                        d = s.lastBar(),
                        h = (0, n.ensureDefined)(this._provider.properties().childs().graphics.childs().vertlines);
                    o.forEach(((o, s) => {
                        const c = (0, n.ensureDefined)(h.childs()[s]).childs(),
                            u = (0, n.ensureDefined)(i[s]);
                        if (!c.visible.value()) return;
                        let p = 0;
                        switch (u.halign) {
                            case r.HAlign.Left:
                                p = -t.barSpacing() / 2;
                                break;
                            case r.HAlign.Right:
                                p = t.barSpacing() / 2
                        }
                        o.forEach((i => {
                            const o = i.index;
                            o < l || d < o || this._data.push({
                                x: t.indexToCoordinate(o) + p,
                                top: i.extendTop ? void 0 : e.priceToCoordinate((0, n.ensureDefined)(i.endPrice), a),
                                bottom: i.extendBottom ? void 0 : e.priceToCoordinate((0, n.ensureDefined)(i.startPrice), a),
                                color: c.color.value(),
                                linewidth: c.width.value(),
                                linestyle: c.style.value()
                            })
                        }))
                    }))
                }
            }
        },
        333933: (e, t, i) => {
            i.r(t), i.d(t, {
                LinearRegressionPaneView: () => h
            });
            var n = i(858063),
                o = i(114123),
                r = i(28035),
                s = i(478037),
                a = i(296266),
                l = i(544445),
                d = i(865556);
            class h {
                constructor(e, t) {
                    this._invalidated = !0, this._lines = [], this._pearsonsTextRenderer = new l.TextRenderer, this._pearsons = null, this._model = e, this._source = t
                }
                update() {
                    this._invalidated = !0
                }
                renderer() {
                    this._invalidated && (this._updateImpl(), this._invalidated = !1);
                    const e = new r.CompositeRenderer,
                        t = [this._lines[1], this._lines[0], this._lines[2]],
                        i = [];
                    for (const e of t) e && i.push(e);
                    for (let o = 1; o < i.length; o++) {
                        const i = {
                                points: [t[o].points[0], t[o].points[1], t[o - 1].points[0], t[o - 1].points[1]],
                                color: t[o].color,
                                linewidth: t[o].linewidth,
                                linestyle: t[o].linestyle,
                                extendleft: !1,
                                extendright: t[o].extendright,
                                backcolor: t[o].color,
                                transparency: this._source.properties().styles.transparency.value(),
                                skipLines: !0,
                                fillBackground: !0,
                                showMidline: !1
                            },
                            r = new s.ParallelChannelRenderer(new n.HitTestResult(n.HitTestResult.REGULAR), new n.HitTestResult(n.HitTestResult.REGULAR));
                        r.setData(i), e.append(r)
                    }
                    for (const t of function(e) {
                            return e.map((e => {
                                const t = { ...e
                                };
                                return t.color = (0, o.resetTransparency)(t.color), t
                            }))
                        }(this._lines)) {
                        const i = new a.TrendLineRenderer;
                        i.setData(t), i.setHitTest(new n.HitTestResult(n.HitTestResult.REGULAR)), e.append(i)
                    }
                    return this._pearsons && (this._pearsons.color = (0, o.resetTransparency)(this._pearsons.color), this._pearsonsTextRenderer.setData(this._pearsons), e.append(this._pearsonsTextRenderer)), e
                }
                _updateImpl() {
                    const e = (0, d.prepareLinearRegressionRenderersData)(this._model, this._source);
                    this._lines = e.lines, this._pearsons = e.pearsons
                }
            }
        },
        278056: (e, t, i) => {
            i.d(t, {
                RgbaFromIntegerCache: () => o
            });
            var n = i(114123);
            class o {
                constructor(e = 1e3) {
                    this._cache = new Map, this._cacheSize = e
                }
                rgbaFromInteger(e) {
                    let t = this._cache.get(e);
                    return void 0 === t && (t = (0, n.rgbaFromInteger)(e),
                        this._cache.set(e, t), this._cache.size > 1.3 * this._cacheSize && this._removeExtraItems()), t
                }
                _removeExtraItems() {
                    let e = this._cache.size - this._cacheSize;
                    const t = [];
                    for (const [i] of this._cache)
                        if (t.push(i), e -= 1, 0 === e) break;
                    for (const e of t) this._cache.delete(e)
                }
            }
        }
    }
]);
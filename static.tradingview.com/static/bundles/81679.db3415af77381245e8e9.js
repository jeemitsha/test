"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [81679], {
        478037: (t, e, i) => {
            i.d(e, {
                ParallelChannelRenderer: () => _
            });
            var n = i(327714),
                s = i(650151),
                o = i(86441),
                a = i(204652),
                l = i(5531),
                r = i(858063),
                d = i(837291),
                h = i(114123),
                u = i(904244),
                c = i(914679);
            class _ extends u.MediaCoordinatesPaneRenderer {
                constructor(t, e) {
                    super(), this._data = null, this._hittestResult = t || new r.HitTestResult(r.HitTestResult.MOVEPOINT), this._backHittestResult = e || new r.HitTestResult(r.HitTestResult.MOVEPOINT_BACKGROUND)
                }
                setData(t) {
                    this._data = t
                }
                hitTest(t, e) {
                    if (null === this._data || this._data.points.length < 2) return null;
                    const i = (0, n.size)({
                            width: e.cssWidth,
                            height: e.cssHeight
                        }),
                        [s, o] = this._data.points,
                        a = this._extendAndHitTestLineSegment(t, s, o, i);
                    if (null !== a) return a;
                    if (4 === this._data.points.length && !this._data.skipTopLine) {
                        const [, , e, n] = this._data.points, a = this._extendAndHitTestLineSegment(t, e, n, i);
                        if (null !== a) return a;
                        if (this._data.showMidline && !this._data.skipLines) {
                            const a = s.add(e).scaled(.5),
                                l = o.add(n).scaled(.5),
                                r = this._extendAndHitTestLineSegment(t, a, l, i);
                            if (null !== r) return r
                        }
                    }
                    return this._data.hittestOnBackground && this._data.fillBackground ? this._hitTestBackground(t) : null
                }
                _drawImpl(t) {
                    if (null === this._data || this._data.points.length < 2) return;
                    const e = t.context;
                    e.lineCap = "round", e.strokeStyle = this._data.color, e.lineWidth = this._data.linewidth, (0, c.setLineStyle)(e, this._data.linestyle);
                    const [i, n] = this._data.points;
                    if (this._data.points.some((t => !isFinite(t.y)))) this._extendAndDrawLineSegment(e, i, n, t.mediaSize);
                    else if (this._data.skipLines || this._extendAndDrawLineSegment(e, i, n, t.mediaSize), 4 === this._data.points.length) {
                        const [, , s, o] = this._data.points;
                        if (this._data.skipLines || this._data.skipTopLine || this._extendAndDrawLineSegment(e, s, o, t.mediaSize), this._data.fillBackground && this._drawBackground(e, this._data.points, t.mediaSize), this._data.showMidline && !this._data.skipLines) {
                            e.strokeStyle = this._data.midcolor, e.lineWidth = this._data.midlinewidth, (0, c.setLineStyle)(e, this._data.midlinestyle);
                            const a = i.add(s).scaled(.5),
                                l = n.add(o).scaled(.5);
                            this._extendAndDrawLineSegment(e, a, l, t.mediaSize)
                        }
                    }
                }
                _getColor() {
                    const t = (0, s.ensureNotNull)(this._data);
                    return (0, h.generateColor)(t.backcolor, t.transparency)
                }
                _extendAndDrawLineSegment(t, e, i, n) {
                    const s = this._extendAndClipLineSegment(e, i, n);
                    null !== s && (0, c.drawLine)(t, s[0].x, s[0].y, s[1].x, s[1].y)
                }
                _extendAndHitTestLineSegment(t, e, i, n) {
                    const s = this._extendAndClipLineSegment(e, i, n);
                    if (null !== s) {
                        if ((0, a.distanceToSegment)(s[0], s[1], t).distance <= 3) return this._hittestResult
                    }
                    return null
                }
                _extendAndClipLineSegment(t, e, i) {
                    const n = (0, s.ensureNotNull)(this._data);
                    return (0, d.extendAndClipLineSegment)(t, e, i.width, i.height, n.extendleft, n.extendright)
                }
                _drawBackground(t, e, i) {
                    const n = (0, s.ensureNotNull)(this._data),
                        [l, r, d, h] = e;
                    if ((0, o.equalPoints)(l, r) || (0, o.equalPoints)(d, h) || (0, a.distanceToLine)(l, r, d).distance < 1e-6 || (0, a.distanceToLine)(l, r, h).distance < 1e-6) return;
                    if (i.width <= 0 || i.height <= 0) return;
                    let u = [new o.Point(0, 0), new o.Point(i.width, 0), new o.Point(i.width, i.height), new o.Point(0, i.height)];
                    if (u = f(u, l, r, h),
                        n.extendright || (u = f(u, r, h, d)), u = f(u, h, d, l), n.extendleft || (u = f(u, d, l, r)), null !== u) {
                        t.beginPath(), t.moveTo(u[0].x, u[0].y);
                        for (let e = 1; e < u.length; e++) t.lineTo(u[e].x, u[e].y);
                        t.fillStyle = this._getColor(), t.fill()
                    }
                }
                _hitTestBackground(t) {
                    const e = (0, s.ensureNotNull)(this._data);
                    if (4 !== e.points.length) return null;
                    const [i, n, o] = e.points, a = (n.y - i.y) / (n.x - i.x), l = i.y + a * (t.x - i.x), r = o.y + a * (t.x - o.x), d = Math.max(l, r), h = Math.min(l, r), u = Math.min(i.x, n.x), c = Math.max(i.x, n.x);
                    return !e.extendleft && t.x < u || !e.extendright && t.x > c ? null : t.y >= h && t.y <= d ? this._backHittestResult : null
                }
            }

            function f(t, e, i, n) {
                return null !== t ? (0, l.intersectPolygonAndHalfplane)(t, (0, o.halfplaneThroughPoint)((0, o.lineThroughPoints)(e, i), n)) : null
            }
        },
        530513: (t, e, i) => {
            i.d(e, {
                PolygonRenderer: () => _
            });
            var n = i(934026),
                s = i(204652),
                o = i(296266),
                a = i(739665),
                l = i(858063),
                r = i(114123),
                d = i(904244),
                h = i(837291),
                u = i(914679),
                c = i(631586);
            class _ extends d.MediaCoordinatesPaneRenderer {
                constructor(t) {
                    super(), this._data = null, this._backHittest = new l.HitTestResult(l.HitTestResult.MOVEPOINT_BACKGROUND), this._points = [], this._hittest = null != t ? t : new l.HitTestResult(l.HitTestResult.MOVEPOINT)
                }
                setData(t) {
                    this._data = t, this._points = t.points
                }
                hitTest(t) {
                    if (null === this._data || void 0 !== this._data.mouseTouchable && !this._data.mouseTouchable) return null;
                    const e = Math.max((0, h.interactionTolerance)().line, Math.ceil(this._data.linewidth / 2)),
                        i = this._points.length;
                    if (1 === i) {
                        return (0, n.pointInCircle)(t, this._points[0], e) ? this._hittest : null
                    }
                    for (let n = 1; n < i; n++) {
                        const i = this._points[n - 1],
                            o = this._points[n];
                        if ((0, s.distanceToSegment)(i, o, t).distance <= e) return this._hittest
                    }
                    if (this._data.filled && this._data.fillBackground && i > 0) {
                        const n = this._points[0],
                            o = this._points[i - 1];
                        if ((0, s.distanceToSegment)(n, o, t).distance <= e) return this._hittest
                    }
                    return this._data.filled && this._data.fillBackground && (0, n.pointInPolygon)(t, this._data.points) ? this._backHittest : null
                }
                _drawImpl(t) {
                    var e, i;
                    const n = t.context,
                        s = this._points.length;
                    if (null === this._data || 0 === s) return;
                    if (1 === s) return void this._drawPoint(n, this._points[0], this._data.linewidth / 2, this._data.color);
                    n.beginPath();
                    const l = this._data.linestyle === c.LINESTYLE_SOLID ? "round" : "butt",
                        d = null !== (e = this._data.linecap) && void 0 !== e ? e : l;
                    n.lineCap = d, n.strokeStyle = this._data.color, n.lineWidth = this._data.linewidth, n.lineJoin = null !== (i = this._data.linejoin) && void 0 !== i ? i : "round", (0, u.setLineStyle)(n, this._data.linestyle);
                    const h = this._points[0];
                    n.moveTo(h.x, h.y);
                    for (const t of this._points) n.lineTo(t.x, t.y);
                    if (this._data.filled && this._data.fillBackground && (n.fillStyle = (0, r.generateColor)(this._data.backcolor, this._data.transparency), n.fill()), this._data.filled && !this._data.skipClosePath && n.closePath(), this._data.linewidth > 0 && n.stroke(), s > 1) {
                        if (this._data.leftend === a.LineEnd.Arrow) {
                            const t = this._correctArrowPoints(this._points[1], this._points[0], n.lineWidth, d);
                            (0, o.drawArrow)(t[0], t[1], n, n.lineWidth, 1)
                        }
                        if (this._data.rightend === a.LineEnd.Arrow) {
                            const t = this._correctArrowPoints(this._points[s - 2], this._points[s - 1], n.lineWidth, d);
                            (0, o.drawArrow)(t[0], t[1], n, n.lineWidth, 1)
                        }
                    }
                }
                _drawPoint(t, e, i, n) {
                    0 !== i && (t.beginPath(), t.fillStyle = n, t.arc(e.x, e.y, i, 0, 2 * Math.PI, !0), t.fill(), t.closePath())
                }
                _correctArrowPoints(t, e, i, n) {
                    const s = e.subtract(t),
                        o = s.length();
                    if ("butt" === n || o < 1) return [t, e];
                    const a = o + i / 2;
                    return [t, s.scaled(a / o).add(t)]
                }
            }
        },
        544445: (t, e, i) => {
            i.d(e, {
                calculateLabelPosition: () => c,
                getTextBoundaries: () => _,
                wordWrap: () => f,
                TextRenderer: () => k
            });
            var n = i(86441),
                s = i(650151),
                o = i(934026),
                a = i(768038),
                l = i(858063),
                r = i(914679),
                d = i(758337),
                h = i(741341),
                u = i(631586);

            function c(t, e, i, s, o) {
                const a = .5 * (e.x + i.x);
                let l = i.y;
                return e.y > i.y ? (l -= t.height / 2 + s.y, l = Math.max(t.height / 2, l)) : (l += t.height / 2 + s.y, l = Math.min(o - t.height / 2, l)), new n.Point(a, l)
            }

            function _(t, e, i) {
                if (t.isOutOfScreen(e, i)) return null;
                const n = t.getPolygonPoints();
                return 0 === n.length ? null : n
            }

            function f(t, e, i) {
                i = (0, d.isString)(i) ? parseInt(i) : i, t += "";
                const n = !(0, d.isNumber)(i) || !isFinite(i) || i <= 0 ? t.split(/\r\n|\r|\n|$/) : t.split(/[^\S\r\n]*(?:\r\n|\r|\n|$)/);
                if (n[n.length - 1] || n.pop(), !(0, d.isNumber)(i) || !isFinite(i) || i <= 0) return n;
                const s = [];
                for (let t = 0; t < n.length; t++) {
                    const o = n[t],
                        a = (0, h.measureText)(o, e).width;
                    if (a <= i) {
                        s.push(o);
                        continue
                    }
                    const l = o.split(/([-)\]},.!?:;])|(\s+)/);
                    let r = 0;
                    for (; l.length;) {
                        let t = ~~(i / a * (l.length + 2) / 3);
                        if (t <= 0 || (0, h.measureText)(l.slice(0, 3 * t - 1).join(""), e).width <= i)
                            for (;
                                (0, h.measureText)(l.slice(0, 3 * (t + 1) - 1).join(""), e).width <= i;) t++;
                        else
                            for (; t > 0 && (0, h.measureText)(l.slice(0, 3 * --t - 1).join(""), e).width > i;);
                        if (t > 0) s.push(l.slice(0, 3 * t - 1).join("")), l.splice(0, 3 * t);
                        else {
                            const t = l[0] + (l[1] || "");
                            if (r = 1 === r ? 1 : ~~(i / (0, h.measureText)(t, e).width * t.length), (0, h.measureText)(t.substring(0, r), e).width <= i)
                                for (;
                                    (0, h.measureText)(t.substring(0, r + 1), e).width <= i;) r++;
                            else
                                for (; r > 1 && (0, h.measureText)(t.substring(0, --r), e).width > i;);
                            r < 1 && (r = 1), s.push(t.substring(0, r)), l[0] = t.substring(r), l[1] = ""
                        }
                        if ((0, h.measureText)(l.join(""), e).width <= i) {
                            s.push(l.join(""));
                            break
                        }
                    }
                }
                return s
            }

            function g(t, e, i) {
                if (0 === i) return t.clone();
                const s = (t.x - e.x) * Math.cos(i) - (t.y - e.y) * Math.sin(i) + e.x,
                    o = (t.x - e.x) * Math.sin(i) + (t.y - e.y) * Math.cos(i) + e.y;
                return new n.Point(s, o)
            }

            function x(t, e) {
                const i = Math.round(e + 2 * T(t) + 2 * b(t));
                return i % 2 ? i + 1 : i
            }

            function p(t, e) {
                return P(t) * e + m(t) * (e - 1) + 2 * y(t) + 2 * w(t)
            }

            function w(t) {
                return void 0 !== t.boxPaddingVert ? t.boxPaddingVert * L(t) : void 0 !== t.boxPadding ? t.boxPadding * L(t) : P(t) / 3
            }

            function b(t) {
                return void 0 !== t.boxPaddingHorz ? t.boxPaddingHorz * L(t) : void 0 !== t.boxPadding ? t.boxPadding * L(t) : P(t) / 3
            }

            function y(t) {
                return (t.backgroundVertInflate || 0) * L(t)
            }

            function T(t) {
                return (t.backgroundHorzInflate || 0) * L(t)
            }

            function m(t) {
                return (t.padding || 0) * L(t)
            }

            function P(t) {
                return Math.ceil(S(t) * L(t))
            }

            function S(t) {
                return t.fontsize || t.fontSize || 30
            }

            function L(t) {
                const e = Math.min(1, Math.max(.2, Math.min(t.scaleX || 1, t.scaleY || 1)));
                if (1 === e) return e;
                const i = S(t);
                return Math.ceil(e * i) / i
            }
            class k {
                constructor(t, e) {
                    this._data = null, this._internalData = null, this._boxSize = null, this._polygonPoints = null, this._linesInfo = null, this._fontInfo = null, this._hittest = e || new l.HitTestResult(l.HitTestResult.MOVEPOINT, {
                        areaName: l.AreaName.Text
                    }), void 0 !== t && this.setData(t)
                }
                setData(t) {
                    null !== t ? (t.horzTextAlign || (t.horzTextAlign = t.horzAlign), ! function(t, e) {
                        if (null === t || null === e) return null === t == (null === e);
                        if (void 0 === t.points != (void 0 === e.points)) return !1;
                        if (void 0 !== t.points && void 0 !== e.points) {
                            if (t.points.length !== e.points.length) return !1;
                            for (let s = 0; s < t.points.length; ++s)
                                if (i = t.points[s], n = e.points[s], i.x !== n.x || i.y !== n.y) return !1
                        }
                        var i, n;
                        return t.text === e.text && t.vertAlign === e.vertAlign && t.horzAlign === e.horzAlign && t.horzTextAlign === e.horzTextAlign && t.font === e.font && t.offsetX === e.offsetX && t.offsetY === e.offsetY && t.bold === e.bold && t.italic === e.italic && t.fontsize === e.fontsize && t.fontSize === e.fontSize && t.backgroundRoundRect === e.backgroundRoundRect && t.forceTextAlign === e.forceTextAlign && t.wordWrapWidth === e.wordWrapWidth && t.forceCalculateMaxLineWidth === e.forceCalculateMaxLineWidth && t.padding === e.padding && t.scaleY === e.scaleY && t.scaleX === e.scaleX && t.highlightBorder === e.highlightBorder && t.backgroundHorzInflate === e.backgroundHorzInflate && t.backgroundVertInflate === e.backgroundVertInflate && t.boxPadding === e.boxPadding && t.boxPaddingVert === e.boxPaddingVert && t.boxPaddingHorz === e.boxPaddingHorz && t.angle === e.angle && t.maxHeight === e.maxHeight && (0, d.deepEquals)(t.boxShadow, e.boxShadow)[0]
                    }(this._data, t) ? (this._data = t, this._internalData = null, this._boxSize = null, this._polygonPoints = null, this._linesInfo = null, this._fontInfo = null) : this._data = t) : this._data = null
                }
                hitTest(t) {
                    return null === this._data || void 0 === this._data.points || 0 === this._data.points.length ? null : (0, o.pointInPolygon)(t, this.getPolygonPoints()) ? this._hittest : null
                }
                doesIntersectWithBox(t) {
                    return null !== this._data && void 0 !== this._data.points && 0 !== this._data.points.length && (0, o.pointInBox)(this._data.points[0], t)
                }
                measure() {
                    if (null === this._data) return {
                        width: 0,
                        height: 0
                    };
                    const t = this._getBoxSize();
                    return {
                        width: t.boxWidth,
                        height: t.boxHeight
                    }
                }
                rect() {
                    if (null === this._data) return {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    };
                    const t = this._getInternalData();
                    return {
                        x: t.boxLeft,
                        y: t.boxTop,
                        width: t.boxWidth,
                        height: t.boxHeight
                    }
                }
                isOutOfScreen(t, e) {
                    if (null === this._data || void 0 === this._data.points || 0 === this._data.points.length) return !0;
                    const i = this._getInternalData();
                    if (i.boxLeft + i.boxWidth < 0 || i.boxLeft > t) {
                        const i = (0, n.box)(new n.Point(0, 0), new n.Point(t, e));
                        return this.getPolygonPoints().every((t => !(0, o.pointInBox)(t, i)))
                    }
                    return !1
                }
                setPoints(t, e) {
                    (0, s.ensureNotNull)(this._data).points = t, this._hittest = e || new l.HitTestResult(l.HitTestResult.MOVEPOINT)
                }
                fontStyle(t) {
                    return null === this._data ? "" : this._getFontInfo().fontStyle
                }
                wordWrap(t, e, i) {
                    return f(t, i || this.fontStyle(), e)
                }
                draw(t, e) {
                    if (null === this._data || void 0 === this._data.points || 0 === this._data.points.length) return;
                    if (this.isOutOfScreen(e.cssWidth, e.cssHeight)) return;
                    const i = e.pixelRatio,
                        n = this._getInternalData(),
                        s = this._getRotationPoint().scaled(i);
                    t.save(), t.translate(s.x, s.y), t.rotate(this._data.angle || 0), t.translate(-s.x, -s.y);
                    const o = this._getFontInfo().fontSize;
                    t.textBaseline = n.textBaseLine, t.textAlign = n.textAlign, t.font = this.fontStyle();
                    const {
                        scaledLeft: a,
                        scaledRight: l,
                        scaledTop: d,
                        scaledBottom: c
                    } = function(t, e) {
                        const i = Math.round(t.boxLeft * e),
                            n = Math.round(t.boxTop * e);
                        return {
                            scaledLeft: i,
                            scaledRight: i + Math.round(t.boxWidth * e),
                            scaledTop: n,
                            scaledBottom: n + Math.round(t.boxHeight * e)
                        }
                    }(n, i);
                    if (this._data.backgroundColor || this._data.borderColor || this._data.highlightBorder && this._data.wordWrapWidth) {
                        const e = this._data.borderWidth || Math.max(o / 12, 1),
                            n = Math.round(e * i),
                            s = n / 2;
                        let h = !1;
                        if (this._data.boxShadow) {
                            t.save();
                            const {
                                shadowColor: e,
                                shadowBlur: i,
                                shadowOffsetX: n = 0,
                                shadowOffsetY: s = 0
                            } = this._data.boxShadow;
                            t.shadowColor = e, t.shadowBlur = i, t.shadowOffsetX = n, t.shadowOffsetY = s, h = !0
                        }
                        if (this._data.backgroundRoundRect) this._data.backgroundColor && ((0, r.drawRoundRect)(t, a, d, l - a, c - d, this._data.backgroundRoundRect * i), t.fillStyle = this._data.backgroundColor, t.fill(), h && (t.restore(), h = !1)), this._data.borderColor && ((0, r.drawRoundRect)(t, a - s, d - s, l - a + n, c - d + n, this._data.backgroundRoundRect * i + n), t.strokeStyle = this._data.borderColor, t.lineWidth = n, t.stroke(), h && (t.restore(), h = !1));
                        else if (this._data.backgroundColor && (t.fillStyle = this._data.backgroundColor, t.fillRect(a, d, l - a, c - d), h && (t.restore(), h = !1)), this._data.borderColor || this._data.highlightBorder) {
                            let e;
                            this._data.borderColor ? (t.strokeStyle = this._data.borderColor, e = n) : (t.strokeStyle = this._data.color, (0, r.setLineStyle)(t, u.LINESTYLE_DASHED), e = Math.max(1, Math.floor(i))), t.lineWidth = e, t.beginPath(), t.moveTo(a - e / 2, d - e / 2), t.lineTo(a - e / 2, c + e / 2), t.lineTo(l + e / 2, c + e / 2), t.lineTo(l + e / 2, d - e / 2), t.lineTo(a - e / 2, d - e / 2), t.stroke(), h && t.restore()
                        }
                    }
                    t.fillStyle = this._data.color;
                    const _ = (a + Math.round(n.textStart * i)) / i,
                        f = .05 * o;
                    let g = (d + Math.round((n.textTop + f) * i)) / i;
                    const x = m(this._data),
                        p = this.getLinesInfo();
                    for (const e of p.lines)(0, h.drawScaled)(t, i, (() => t.fillText(e, _, g))), g += o + x;
                    t.restore()
                }
                getPolygonPoints() {
                    if (null !== this._polygonPoints) return this._polygonPoints;
                    if (null === this._data) return [];
                    const t = this._data.angle || 0,
                        {
                            boxLeft: e,
                            boxTop: i,
                            boxWidth: s,
                            boxHeight: o
                        } = this._getInternalData(),
                        a = this._getRotationPoint();
                    return this._polygonPoints = [g(new n.Point(e, i), a, t), g(new n.Point(e + s, i), a, t), g(new n.Point(e + s, i + o), a, t), g(new n.Point(e, i + o), a, t)], this._polygonPoints
                }
                getLinesInfo() {
                    if (null === this._linesInfo) {
                        const t = (0, s.ensureNotNull)(this._data);
                        let e = this.wordWrap(t.text, t.wordWrapWidth);
                        if (void 0 !== t.maxHeight) {
                            const i = function(t) {
                                const e = (0, s.ensureDefined)(t.maxHeight),
                                    i = P(t),
                                    n = m(t);
                                return Math.floor((e + n) / (i + n))
                            }(t);
                            e.length > i && (e = e.slice(0, i))
                        }
                        this._linesInfo = {
                            linesMaxWidth: this._getLinesMaxWidth(e),
                            lines: e
                        }
                    }
                    return this._linesInfo
                }
                _getLinesMaxWidth(t) {
                    const e = this.fontStyle();
                    if (null !== this._data && this._data.wordWrapWidth && !this._data.forceCalculateMaxLineWidth) return this._data.wordWrapWidth * L(this._data);
                    let i = 0;
                    for (const n of t) i = Math.max(i, (0, h.measureText)(n, e).width);
                    return i
                }
                _getInternalData() {
                    if (null !== this._internalData) return this._internalData;
                    const t = (0, s.ensureNotNull)(this._data),
                        e = this._getBoxSize(),
                        i = e.boxWidth,
                        n = e.boxHeight,
                        o = (0, s.ensureDefined)(t.points)[0];
                    let l = o.y;
                    switch (t.vertAlign) {
                        case "bottom":
                            l -= n + t.offsetY;
                            break;
                        case "middle":
                            l -= n / 2;
                            break;
                        case "top":
                            l += t.offsetY
                    }
                    let r = o.x;
                    const d = b(t),
                        h = w(t),
                        u = T(t) + d;
                    let c;
                    const _ = l + (y(t) + h) + P(t) / 2;
                    let f;
                    switch (t.horzAlign) {
                        case "left":
                            r += t.offsetX;
                            break;
                        case "center":
                            r -= i / 2;
                            break;
                        case "right":
                            r -= i + t.offsetX
                    }
                    switch ((0, s.ensureDefined)(t.horzTextAlign)) {
                        case "left":
                            f = "start", c = r + u, (0, a.isRtl)() && (t.forceTextAlign ? f = "left" : (c = r + i - u, f = "right"));
                            break;
                        case "center":
                            f = "center", c = r + i / 2;
                            break;
                        case "right":
                            f = "end", c = r + i - u, (0, a.isRtl)() && t.forceTextAlign && (f = "right")
                    }
                    return this._internalData = {
                        boxLeft: r,
                        boxTop: l,
                        boxWidth: i,
                        boxHeight: n,
                        textStart: c - r,
                        textTop: _ - l,
                        textAlign: f,
                        textBaseLine: "middle"
                    }, this._internalData
                }
                _getFontInfo() {
                    if (null === this._fontInfo) {
                        const t = (0, s.ensureNotNull)(this._data),
                            e = P(t),
                            i = (t.bold ? "bold " : "") + (t.italic ? "italic " : "") + e + "px " + t.font;
                        this._fontInfo = {
                            fontStyle: i,
                            fontSize: e
                        }
                    }
                    return this._fontInfo
                }
                _getBoxSize() {
                    if (null === this._boxSize) {
                        const t = this.getLinesInfo(),
                            e = (0, s.ensureNotNull)(this._data);
                        this._boxSize = {
                            boxWidth: x(e, t.linesMaxWidth),
                            boxHeight: p(e, t.lines.length)
                        }
                    }
                    return this._boxSize
                }
                _getRotationPoint() {
                    const {
                        boxLeft: t,
                        boxTop: e,
                        boxWidth: i,
                        boxHeight: o
                    } = this._getInternalData(), {
                        horzAlign: a,
                        vertAlign: l
                    } = (0, s.ensureNotNull)(this._data);
                    let r, d;
                    switch (a) {
                        case "center":
                            r = t + i / 2;
                            break;
                        case "left":
                            r = t;
                            break;
                        case "right":
                            r = t + i
                    }
                    switch (l) {
                        case "middle":
                            d = e + o / 2;
                            break;
                        case "top":
                            d = e;
                            break;
                        case "bottom":
                            d = e + o
                    }
                    return new n.Point(r, d)
                }
            }
        },
        296266: (t, e, i) => {
            i.d(e, {
                drawArrow: () => c,
                TrendLineRenderer: () => _
            });
            var n = i(650151),
                s = i(204652),
                o = i(739665),
                a = i(858063),
                l = i(914679),
                r = i(837291),
                d = i(741341),
                h = i(631586);

            function u(t, e, i, n, s) {
                e.save(), e.fillStyle = "#000000", e.beginPath(), e.arc(t.x * s, t.y * s, i * s, 0, 2 * Math.PI, !1), e.fill(), n.strokeWidth && (e.lineWidth = n.strokeWidth, e.stroke()), e.restore()
            }

            function c(t, e, i, n, s, o = !1) {
                if (e.subtract(t).length() < 1) return;
                const a = (0, r.getArrowPoints)(t, e, n, o);
                for (let t = 0; t < a.length; ++t) {
                    const e = a[t][0],
                        n = a[t][1];
                    (0, l.drawLine)(i, e.x * s, e.y * s, n.x * s, n.y * s)
                }
            }
            class _ {
                constructor() {
                    this._data = null, this._hittest = new a.HitTestResult(a.HitTestResult.MOVEPOINT)
                }
                setData(t) {
                    this._data = t
                }
                setHitTest(t) {
                    this._hittest = t
                }
                draw(t, e) {
                    const i = this._data;
                    if (null === i) return;
                    if ("points" in i && i.points.length < 2) return;
                    const n = e.pixelRatio;
                    void 0 !== i.excludeBoundaries && (t.save(), (0, d.addExclusionArea)(t, e, i.excludeBoundaries)), t.lineCap = i.linestyle === h.LINESTYLE_SOLID ? "round" : "butt", t.strokeStyle = i.color, t.lineWidth = Math.max(1, Math.floor(i.linewidth * n)), (0, l.setLineStyle)(t, i.linestyle);
                    const s = i.points[0],
                        o = i.points[1];
                    let a = [];
                    i.overlayLineEndings ? a = [s.clone(), o.clone()] : this._drawEnds(t, [s, o], i.linewidth, n);
                    const r = this._extendAndClipLineSegment(s, o, e);
                    null !== r && i.linewidth > 0 && (r[0].x === r[1].x ? (0, l.drawVerticalLine)(t, Math.round(r[0].x * n), r[0].y * n, r[1].y * n) : r[0].y === r[1].y ? (0, l.drawHorizontalLine)(t, Math.round(r[0].y * n), r[0].x * n, r[1].x * n) : (0, l.drawLine)(t, r[0].x * n, r[0].y * n, r[1].x * n, r[1].y * n)), i.overlayLineEndings && this._drawEnds(t, a, i.linewidth, n), void 0 !== i.excludeBoundaries && t.restore()
                }
                hitTest(t, e) {
                    const i = this._data;
                    if (null === i) return null;
                    if ("points" in i && i.points.length < 2) return null;
                    const n = (0,
                            r.interactionTolerance)().line,
                        o = i.points[0],
                        a = i.points[1],
                        l = this._extendAndClipLineSegment(o, a, e);
                    if (null !== l) {
                        if ((0, s.distanceToSegment)(l[0], l[1], t).distance <= n) return this._hittest
                    }
                    return null
                }
                _extendAndClipLineSegment(t, e, i) {
                    const s = (0, n.ensureNotNull)(this._data);
                    return (0, r.extendAndClipLineSegment)(t, e, i.cssWidth, i.cssHeight, s.extendleft, s.extendright)
                }
                _drawEnds(t, e, i, s) {
                    const a = e[0],
                        l = e[1],
                        r = (0, n.ensureNotNull)(this._data);
                    switch (r.leftend) {
                        case o.LineEnd.Arrow:
                            c(l, a, t, i, s);
                            break;
                        case o.LineEnd.Circle:
                            u(a, t, i, (0, n.ensureDefined)(r.endstyle), s)
                    }
                    switch (r.rightend) {
                        case o.LineEnd.Arrow:
                            c(a, l, t, i, s);
                            break;
                        case o.LineEnd.Circle:
                            u(l, t, i, (0, n.ensureDefined)(r.endstyle), s)
                    }
                }
            }
        },
        274131: (t, e, i) => {
            i.d(e, {
                VerticalLineRenderer: () => r
            });
            var n = i(858063),
                s = i(914679),
                o = i(837291),
                a = i(741341),
                l = i(756740);
            class r extends l.BitmapCoordinatesPaneRenderer {
                constructor() {
                    super(...arguments), this._data = null, this._hitTest = new n.HitTestResult(n.HitTestResult.MOVEPOINT)
                }
                setData(t) {
                    this._data = t
                }
                setHitTest(t) {
                    this._hitTest = t
                }
                hitTest(t) {
                    if (null === this._data || null === this._hitTest) return null;
                    const e = (0, o.interactionTolerance)().line,
                        i = Math.abs(t.x - this._data.x) <= e + this._data.linewidth / 2,
                        n = void 0 === this._data.top || this._data.top - t.y <= e,
                        s = void 0 === this._data.bottom || t.y - this._data.bottom <= e;
                    return i && n && s ? this._hitTest : null
                }
                _drawImpl(t) {
                    if (null === this._data || this._data.linewidth <= 0) return;
                    const {
                        context: e,
                        horizontalPixelRatio: i,
                        verticalPixelRatio: n,
                        mediaSize: o
                    } = t;
                    if (this._data.x < -this._data.linewidth / 2 || this._data.x > o.width + this._data.linewidth / 2) return;
                    e.lineCap = "butt", e.strokeStyle = this._data.color, e.lineWidth = Math.max(1, Math.floor(this._data.linewidth * i)), void 0 !== this._data.linestyle && (0, s.setLineStyle)(e, this._data.linestyle);
                    const l = void 0 !== this._data.top ? Math.max(this._data.top, 0) : 0,
                        r = void 0 !== this._data.bottom ? Math.min(this._data.bottom, o.height) : o.height,
                        d = Math.round(this._data.x * i),
                        h = Math.floor(l * n),
                        u = Math.ceil(r * n),
                        c = this._data.excludeBoundaries;
                    void 0 !== c && (0, a.addExclusionAreaByScope)(t, c), (0, s.drawVerticalLine)(e, d, h, u)
                }
            }
        },
        865556: (t, e, i) => {
            i.d(e, {
                prepareLinearRegressionRenderersData: () => l
            });
            var n = i(650151),
                s = i(86441),
                o = i(739665),
                a = i(623331);

            function l(t, e) {
                const i = {
                    lines: [],
                    pearsons: null
                };
                if (!e.properties().visible.value()) return i;
                const l = t.timeScale(),
                    r = e.priceScale(),
                    d = t.mainSeries().firstBar();
                if (!r || r.isEmpty() || l.isEmpty() || !d) return i;
                const h = e.startIndex(),
                    u = e.endIndex();
                if (null === h || null === u) return i;
                const c = [e.baseLine(), e.downLine(), e.upLine()],
                    _ = Math.round(l.indexToCoordinate(h)),
                    f = Math.round(l.indexToCoordinate(u)),
                    g = e.properties(),
                    x = [g.styles.baseLine, g.styles.downLine, g.styles.upLine],
                    p = d[4];
                for (let a = 0; a < c.length; a++) {
                    if (1 != (1 & x[a].display.value())) continue;
                    const l = (0, n.ensureNotNull)(c[a]).startPrice,
                        d = (0, n.ensureNotNull)(c[a]).endPrice;
                    if (void 0 === l || void 0 === d) continue;
                    const h = r.priceToCoordinate(l, p),
                        u = r.priceToCoordinate(d, p),
                        w = new s.Point(_, h),
                        b = new s.Point(f, u),
                        y = x[a].color.value(),
                        T = x[a].linewidth.value(),
                        m = x[a].linestyle.value(),
                        P = {
                            points: [w, b],
                            width: t.timeScale().width(),
                            height: (0,
                                n.ensureNotNull)(e.priceScale()).height(),
                            color: y,
                            linewidth: T,
                            linestyle: m,
                            extendleft: !1,
                            extendright: g.styles.extendLines.value(),
                            leftend: o.LineEnd.Normal,
                            rightend: o.LineEnd.Normal
                        };
                    i.lines.push(P)
                }
                const w = (0, n.ensureNotNull)(e.downLine());
                if (g.styles.showPearsons.value() && void 0 !== w.startPrice) {
                    const t = r.priceToCoordinate(w.startPrice, p),
                        n = new s.Point(_, t);
                    i.pearsons = {
                        points: [n],
                        text: "" + e.pearsons(),
                        color: g.styles.downLine.color.value(),
                        vertAlign: "top",
                        horzAlign: "center",
                        font: a.CHART_FONT_FAMILY,
                        offsetX: 0,
                        offsetY: 4,
                        fontsize: 12
                    }
                }
                return i
            }
        }
    }
]);
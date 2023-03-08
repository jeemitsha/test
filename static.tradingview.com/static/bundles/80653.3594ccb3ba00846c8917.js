"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [80653], {
        416798: (e, t, i) => {
            i.d(t, {
                materializeBackground: () => a,
                dematerializeBackground: () => l,
                isBackgroundInBarsRange: () => d
            });
            var n = i(650151),
                s = i(149590),
                r = i(325925);

            function a(e, t) {
                if (e.start >= t.length || e.stop >= t.length) return null;
                const i = t[e.start],
                    r = t[e.stop];
                return r === s.INVALID_TIME_POINT_INDEX ? null : ((0, n.assert)(i === s.INVALID_TIME_POINT_INDEX || i <= r, "start should not exceed stop"), {
                    start: i === s.INVALID_TIME_POINT_INDEX ? null : i,
                    stop: r
                })
            }

            function l(e, t, i) {
                return {
                    id: t,
                    start: (0, r.ensureTimePointIndexIndex)(i.indexOf(null !== e.start ? e.start : s.INVALID_TIME_POINT_INDEX)),
                    stop: (0, r.ensureTimePointIndexIndex)(i.indexOf(e.stop))
                }
            }

            function d(e, t) {
                if (null === e.start) return t.firstBar() <= e.stop;
                const i = Math.min(e.start, e.stop),
                    n = Math.max(e.start, e.stop);
                return t.contains(i) || t.contains(n) || i < t.firstBar() && n > t.lastBar()
            }
        },
        297559: (e, t, i) => {
            i.d(t, {
                DwgBoxStyle: () => n,
                DwgBoxFontType: () => r,
                materializeDwgBox: () => o,
                dematerializeDwgBox: () => h,
                isDwgBoxInBarsRange: () => c
            });
            var n, s, r, a = i(149590),
                l = i(325925),
                d = i(117168);

            function o(e, t) {
                var i, n;
                if (e.x1 >= t.length || e.x2 >= t.length || null === e.y1 || null === e.y2) return null;
                let s = t[e.x1],
                    r = t[e.x2];
                return s === a.INVALID_TIME_POINT_INDEX && (s = null), r === a.INVALID_TIME_POINT_INDEX && (r = null), {
                    left: s,
                    right: r,
                    top: e.y1,
                    bottom: e.y2,
                    borderColorIndex: e.c,
                    backgroundColorIndex: e.bc,
                    extend: e.ex,
                    borderStyle: e.st,
                    borderWidth: e.w,
                    text: e.t,
                    wordWrap: e.tw,
                    horizontalTextAlignment: e.tha,
                    verticalTextAlignment: e.tva,
                    fontSize: e.ts,
                    textColorIndex: null !== (i = e.tc) && void 0 !== i ? i : null,
                    fontType: null !== (n = e.tf) && void 0 !== n ? n : null
                }
            }

            function h(e, t, i) {
                var n, s, r;
                return {
                    id: t,
                    x1: (0, l.ensureTimePointIndexIndex)(i.indexOf(null !== (n = e.left) && void 0 !== n ? n : a.INVALID_TIME_POINT_INDEX)),
                    x2: (0, l.ensureTimePointIndexIndex)(i.indexOf(null !== (s = e.right) && void 0 !== s ? s : a.INVALID_TIME_POINT_INDEX)),
                    y1: e.top,
                    y2: e.bottom,
                    c: e.borderColorIndex,
                    bc: e.backgroundColorIndex,
                    ex: e.extend,
                    st: e.borderStyle,
                    w: e.borderWidth,
                    t: e.text,
                    tw: e.wordWrap,
                    tha: e.horizontalTextAlignment,
                    tva: e.verticalTextAlignment,
                    ts: e.fontSize,
                    tf: null !== (r = e.fontType) && void 0 !== r ? r : void 0,
                    tc: e.textColorIndex
                }
            }

            function c(e, t) {
                const i = e.extend;
                if (i === d.DwgExtend.Both) return null === e.left || null === e.right;
                if (null === e.left || null === e.right) return null !== e.right ? e.right <= t.lastBar() && i === d.DwgExtend.Right : null !== e.left && (e.left >= t.firstBar() && i === d.DwgExtend.Left);
                const n = Math.min(e.left, e.right),
                    s = Math.max(e.left, e.right);
                if (t.contains(n) || t.contains(s) || n < t.firstBar() && s > t.lastBar()) return !0;
                const r = e.left < e.right ? e.extend === d.DwgExtend.Left : e.extend === d.DwgExtend.Right,
                    a = e.left < e.right ? e.extend === d.DwgExtend.Right : e.extend === d.DwgExtend.Left;
                return s < t.firstBar() && a || n > t.lastBar() && r
            }! function(e) {
                e.Solid = "sol", e.Dotted = "dot", e.Dashed = "dsh", e.LeftArrow = "al", e.RightArrow = "ar", e.BothArrow = "ab"
            }(n || (n = {})),
            function(e) {
                e.Top = "top", e.Center = "center", e.Bottom = "bottom"
            }(s || (s = {})),
            function(e) {
                e.Monospace = "monospace"
            }(r || (r = {}))
        },
        117168: (e, t, i) => {
            i.d(t, {
                DwgExtend: () => n,
                isExtendInSameDirection: () => a,
                convertPointsToScreenDimension: () => l,
                doesItemAffectVisibleRange: () => d
            });
            var n, s = i(650151);

            function r(e, t) {
                return e === n.None ? t : t === n.None ? e : e === n.Both || t === n.Both ? n.Both : e === t ? t : n.Both
            }

            function a(e, t) {
                return e === n.Both || e === t
            }

            function l(e, t, i, a, l, d, o, h, c, x) {
                let u, g;
                if (null === e && null === i) {
                    if (l !== n.Right && l !== n.Both) return null;
                    l = n.Both, u = 0, g = h
                } else null === e ? (u = o.indexToCoordinate((0, s.ensureNotNull)(i) - 1), l = r(l, n.Left)) : u = o.indexToCoordinate(e), null === i ? (g = o.indexToCoordinate((0, s.ensureNotNull)(e) - 1), l = r(l, n.Right)) : g = o.indexToCoordinate(i);
                const f = u,
                    _ = d.priceToCoordinate(t, c),
                    I = g,
                    w = d.priceToCoordinate(a, c);
                return void 0 !== x ? (x.x1 = f, x.y1 = _, x.x2 = I, x.y2 = w, x.extend = l, x) : {
                    x1: f,
                    y1: _,
                    x2: I,
                    y2: w,
                    extend: l
                }
            }

            function d(e, t, i, s, r) {
                let a = !1;
                switch (i) {
                    case n.Both:
                        a = !0;
                        break;
                    case n.Right:
                        a = null === t || null === e || e <= r;
                        break;
                    case n.Left:
                        a = null === t || t >= s;
                        break;
                    default:
                        null !== e && null !== t ? a = (e >= s || t >= s) && (e <= r || t <= r) : null !== e && null === t ? a = e <= r : null === e && null !== t && (a = t >= s)
                }
                return a
            }! function(e) {
                e.None = "n", e.Left = "l", e.Right = "r", e.Both = "b"
            }(n || (n = {}))
        },
        650883: (e, t, i) => {
            i.d(t, {
                DwgLabelTextAlign: () => n,
                DwgLabelYloc: () => s,
                DwgLabelStyle: () => r,
                materializeDwgLabel: () => o,
                dematerializeDwgLabel: () => h,
                isDwgLabelInBarsRange: () => c
            });
            var n, s, r, a, l = i(149590),
                d = i(325925);

            function o(e, t) {
                var i;
                if (e.x >= t.length) return null;
                const s = t[e.x];
                return s === l.INVALID_TIME_POINT_INDEX ? null : {
                    x: s,
                    y: e.y,
                    yloc: e.yl,
                    text: e.t,
                    style: e.st,
                    size: e.sz,
                    colorIndex: e.ci,
                    textColorIndex: e.tci,
                    textAlign: e.ta || n.Center,
                    tooltip: e.tt || "",
                    fontType: null !== (i = e.tf) && void 0 !== i ? i : null
                }
            }

            function h(e, t, i) {
                var n;
                return {
                    id: t,
                    x: (0, d.ensureTimePointIndexIndex)(i.indexOf(e.x)),
                    y: e.y,
                    yl: e.yloc,
                    t: e.text,
                    st: e.style,
                    sz: e.size,
                    ci: e.colorIndex,
                    tci: e.textColorIndex,
                    ta: e.textAlign,
                    tt: e.tooltip,
                    tf: null !== (n = e.fontType) && void 0 !== n ? n : void 0
                }
            }

            function c(e, t) {
                return t.contains(e.x)
            }! function(e) {
                e.Left = "left", e.Center = "center", e.Right = "right"
            }(n || (n = {})),
            function(e) {
                e.AboveBar = "ab", e.BelowBar = "bl", e.Price = "pr", e.Auto = "auto"
            }(s || (s = {})),
            function(e) {
                e.Xcross = "xcr", e.Cross = "cr", e.Triangleup = "tup", e.Triangledown = "tdn", e.Flag = "flg", e.Circle = "cir", e.Arrowup = "aup", e.Arrowdown = "adn", e.LabelUp = "lup", e.LabelDown = "ldn", e.LabelLeft = "llf", e.LabelRight = "lrg", e.LabelCenter = "lcn", e.LabelLeftUp = "luplf", e.LabelLeftDown = "llwlf", e.LabelRightUp = "luprg", e.LabelRightDown = "llwrg", e.Square = "sq", e.Diamond = "dia", e.TextOutline = "to", e.None = "n"
            }(r || (r = {})),
            function(e) {
                e.Monospace = "monospace"
            }(a || (a = {}))
        },
        691337: (e, t, i) => {
            function n(e) {
                return {
                    id: e.id,
                    line1: e.line1,
                    line2: e.line2,
                    colorIndex: e.ci
                }
            }

            function s(e, t) {
                return {
                    id: t,
                    line1: e.line1,
                    line2: e.line2,
                    ci: e.colorIndex
                }
            }
            i.d(t, {
                materializeDwgLineFill: () => n,
                dematerializeDwgLineFill: () => s
            })
        },
        413118: (e, t, i) => {
            i.d(t, {
                DwgLineStyle: () => n,
                materializeDwgLine: () => l,
                dematerializeDwgLine: () => d,
                isDwgLineInBarsRange: () => o
            });
            var n, s = i(149590),
                r = i(325925),
                a = i(117168);

            function l(e, t) {
                if (e.x1 >= t.length || e.x2 >= t.length || null === e.y1 || null === e.y2) return null;
                let i = t[e.x1],
                    n = t[e.x2];
                return i === s.INVALID_TIME_POINT_INDEX && (i = null), n === s.INVALID_TIME_POINT_INDEX && (n = null), null !== i && null !== n || e.y1 === e.y2 ? {
                    id: e.id,
                    x1: i,
                    y1: e.y1,
                    x2: n,
                    y2: e.y2,
                    style: e.st,
                    extend: e.ex,
                    width: e.w,
                    colorIndex: e.ci
                } : null
            }

            function d(e, t, i) {
                var n, a;
                const l = (0, r.ensureTimePointIndexIndex)(i.indexOf(null !== (n = e.x1) && void 0 !== n ? n : s.INVALID_TIME_POINT_INDEX)),
                    d = (0, r.ensureTimePointIndexIndex)(i.indexOf(null !== (a = e.x2) && void 0 !== a ? a : s.INVALID_TIME_POINT_INDEX));
                return {
                    id: t,
                    x1: l,
                    y1: e.y1,
                    x2: d,
                    y2: e.y2,
                    st: e.style,
                    ex: e.extend,
                    w: e.width,
                    ci: e.colorIndex
                }
            }

            function o(e, t) {
                const i = e.extend;
                if (i === a.DwgExtend.Both) return null === e.x1 || null === e.x2;
                if (null === e.x1 || null === e.x2) return null !== e.x2 ? e.x2 <= t.lastBar() && i === a.DwgExtend.Right : null !== e.x1 && (e.x1 >= t.firstBar() && i === a.DwgExtend.Left);
                const n = Math.min(e.x1, e.x2),
                    s = Math.max(e.x1, e.x2);
                if (t.contains(n) || t.contains(s) || n < t.firstBar() && s > t.lastBar()) return !0;
                const r = e.x1 < e.x2 ? e.extend === a.DwgExtend.Left : e.extend === a.DwgExtend.Right,
                    l = e.x1 < e.x2 ? e.extend === a.DwgExtend.Right : e.extend === a.DwgExtend.Left;
                return s < t.firstBar() && l || n > t.lastBar() && r
            }! function(e) {
                e.Solid = "sol", e.Dotted = "dot", e.Dashed = "dsh", e.LeftArrow = "al", e.RightArrow = "ar", e.BothArrow = "ab"
            }(n || (n = {}))
        },
        876890: (e, t, i) => {
            var n, s;

            function r(e, t) {
                return {
                    id: e.id,
                    position: e.pos,
                    rows: e.rows,
                    columns: e.cols,
                    backgroundColorIndex: e.bgc,
                    frameColorIndex: e.frmc,
                    frameWidth: e.frmw,
                    borderColorIndex: e.brdc,
                    borderWidth: e.brdw
                }
            }

            function a(e, t, i) {
                return {
                    id: t,
                    pos: e.position,
                    rows: e.rows,
                    cols: e.columns,
                    bgc: e.backgroundColorIndex,
                    frmc: e.frameColorIndex,
                    frmw: e.frameWidth,
                    brdc: e.borderColorIndex,
                    brdw: e.borderWidth
                }
            }

            function l(e, t) {
                var i, n, s;
                return {
                    tableId: e.tid,
                    row: e.row,
                    column: e.col,
                    widthInPercentsOfPaneWidth: e.w,
                    heightInPercentOfPaneHeight: e.h,
                    text: e.t,
                    textColorIndex: e.tc,
                    horizontalTextAlignment: e.tha,
                    verticalTextAlignment: e.tva,
                    fontSize: e.ts,
                    backgroundColorIndex: e.bgc,
                    colSpan: null !== (i = e.colspan) && void 0 !== i ? i : 1,
                    rowSpan: null !== (n = e.rowspan) && void 0 !== n ? n : 1,
                    tooltip: e.tt,
                    fontType: null !== (s = e.tf) && void 0 !== s ? s : null
                }
            }

            function d(e, t, i) {
                var n;
                return {
                    id: t,
                    tid: e.tableId,
                    row: e.row,
                    col: e.column,
                    w: e.widthInPercentsOfPaneWidth,
                    h: e.heightInPercentOfPaneHeight,
                    t: e.text,
                    tc: e.textColorIndex,
                    tha: e.horizontalTextAlignment,
                    tva: e.verticalTextAlignment,
                    ts: e.fontSize,
                    bgc: e.backgroundColorIndex,
                    colspan: e.colSpan,
                    rowspan: e.rowSpan,
                    tt: e.tooltip,
                    tf: null !== (n = e.fontType) && void 0 !== n ? n : void 0
                }
            }
            i.d(t, {
                    DwgTableCellFontType: () => s,
                    materializeDwgTable: () => r,
                    dematerializeDwgTable: () => a,
                    materializeDwgTableCell: () => l,
                    dematerializeDwgTableCell: () => d
                }),
                function(e) {
                    e.Top = "top", e.Center = "center", e.Bottom = "bottom"
                }(n || (n = {})),
                function(e) {
                    e.Monospace = "monospace"
                }(s || (s = {}))
        },
        406146: (e, t, i) => {
            i.d(t, {
                HHistDirection: () => n,
                HHistLocation: () => s,
                HHistVolumeMode: () => r,
                materializeHHist: () => o,
                dematerializeHHist: () => h,
                isHHistInBarsRange: () => c
            });
            var n, s, r, a = i(650151),
                l = i(149590),
                d = i(325925);

            function o(e, t) {
                if (e.firstBarTime >= t.length || e.lastBarTime >= t.length) return null;
                const i = t[e.firstBarTime],
                    n = t[e.lastBarTime];
                return i === l.INVALID_TIME_POINT_INDEX || n === l.INVALID_TIME_POINT_INDEX ? null : ((0, a.assert)(i <= n, "firstBarTime should not exceed lastBarTime"), (0, a.assert)(e.priceLow <= e.priceHigh, "priceLow should not exceed priceHigh"), {
                    firstBarTime: i,
                    lastBarTime: n,
                    rate: e.rate,
                    priceHigh: e.priceHigh,
                    priceLow: e.priceLow
                })
            }

            function h(e, t, i) {
                const n = (0, d.ensureTimePointIndexIndex)(i.indexOf(e.firstBarTime)),
                    s = (0, d.ensureTimePointIndexIndex)(i.indexOf(e.lastBarTime));
                return {
                    id: t,
                    ...e,
                    firstBarTime: n,
                    lastBarTime: s
                }
            }

            function c(e, t) {
                const i = Math.min(e.firstBarTime, e.lastBarTime),
                    n = Math.max(e.firstBarTime, e.lastBarTime);
                return t.contains(i) || t.contains(n) || i < t.firstBar() && n > t.lastBar()
            }! function(e) {
                e.LeftToRight = "left_to_right", e.RightToLeft = "right_to_left"
            }(n || (n = {})),
            function(e) {
                e.Relative = "relative", e.Absolute = "absolute"
            }(s || (s = {})),
            function(e) {
                e.UpDown = "Up/Down", e.Total = "Total", e.Delta = "Delta"
            }(r || (r = {}))
        },
        14146: (e, t, i) => {
            i.d(t, {
                materializeHorizLine: () => a,
                dematerializeHorizLine: () => l,
                isHorizLineInBarsRange: () => d
            });
            var n = i(650151),
                s = i(149590),
                r = i(325925);

            function a(e, t) {
                if (e.startIndex >= t.length || e.endIndex >= t.length) return null;
                const i = t[e.startIndex],
                    r = t[e.endIndex];
                return i === s.INVALID_TIME_POINT_INDEX || r === s.INVALID_TIME_POINT_INDEX ? null : ((0, n.assert)(i <= r, "startIndex should not exceed endIndex"), {
                    startIndex: i,
                    endIndex: r,
                    level: e.level,
                    extendLeft: e.extendLeft,
                    extendRight: e.extendRight
                })
            }

            function l(e, t, i) {
                const n = (0, r.ensureTimePointIndexIndex)(i.indexOf(e.startIndex)),
                    s = (0, r.ensureTimePointIndexIndex)(i.indexOf(e.endIndex));
                return {
                    id: t,
                    ...e,
                    startIndex: n,
                    endIndex: s
                }
            }

            function d(e, t) {
                const i = Math.min(e.startIndex, e.endIndex),
                    n = Math.max(e.startIndex, e.endIndex);
                if (t.contains(i) || t.contains(n) || i < t.firstBar() && n > t.lastBar()) return !0;
                const s = e.startIndex < e.endIndex ? e.extendLeft : e.extendRight,
                    r = e.startIndex < e.endIndex ? e.extendRight : e.extendLeft;
                return n < t.firstBar() && r || i > t.lastBar() && s
            }
        },
        517335: (e, t, i) => {
            var n;

            function s(e) {
                return {
                    level: e.level,
                    text: e.text
                }
            }

            function r(e, t, i) {
                return {
                    id: t,
                    ...e
                }
            }
            i.d(t, {
                    TextPos: () => n,
                    materializeLevel: () => s,
                    dematerializeLevel: () => r
                }),
                function(e) {
                    e[e.TopLeft = 0] = "TopLeft", e[e.TopCenter = 1] = "TopCenter", e[e.TopRight = 2] = "TopRight", e[e.MiddleLeft = 3] = "MiddleLeft", e[e.MiddleCenter = 4] = "MiddleCenter", e[e.MiddleRight = 5] = "MiddleRight", e[e.BottomLeft = 6] = "BottomLeft", e[e.BottomCenter = 7] = "BottomCenter", e[e.BottomRight = 8] = "BottomRight"
                }(n || (n = {}))
        },
        79736: (e, t, i) => {
            i.d(t, {
                materializeLine: () => a,
                dematerializeLine: () => l,
                isLineInBarsRange: () => d
            });
            var n = i(650151),
                s = i(149590),
                r = i(325925);

            function a(e, t) {
                if (e.startIndex >= t.length || e.endIndex >= t.length) return null;
                const i = t[e.startIndex],
                    r = t[e.endIndex];
                return i === s.INVALID_TIME_POINT_INDEX || r === s.INVALID_TIME_POINT_INDEX ? null : ((0, n.assert)(i <= r, "startIndex should not exceed endIndex"), {
                    startIndex: i,
                    endIndex: r,
                    startOffset: e.startOffset,
                    endOffset: e.endOffset,
                    startPrice: e.startPrice,
                    endPrice: e.endPrice
                })
            }

            function l(e, t, i) {
                const n = (0, r.ensureTimePointIndexIndex)(i.indexOf(e.startIndex)),
                    s = (0, r.ensureTimePointIndexIndex)(i.indexOf(e.endIndex));
                return {
                    id: t,
                    ...e,
                    startIndex: n,
                    endIndex: s
                }
            }

            function d(e, t) {
                var i, n;
                const s = e.startIndex + (null !== (i = e.startOffset) && void 0 !== i ? i : 0),
                    r = e.endIndex + (null !== (n = e.endOffset) && void 0 !== n ? n : 0),
                    a = Math.min(s, r),
                    l = Math.max(s, r);
                return t.contains(s) || t.contains(r) || a < t.firstBar() && l > t.lastBar()
            }
        },
        3801: (e, t, i) => {
            i.d(t, {
                LiveStudyGraphics: () => b
            });
            var n = i(650151),
                s = i(406146),
                r = i(14146),
                a = i(413401),
                l = i(889354),
                d = i(416798),
                o = i(650883),
                h = i(413118),
                c = i(297559),
                x = i(517335),
                u = i(79736),
                g = i(13751),
                f = i(650575),
                _ = i(744771),
                I = i(876890),
                w = i(691337),
                m = i(186731),
                p = i(529327);
            class b {
                constructor() {
                    this._indexes = [], this._horizlines = new Map, this._vertlines = new Map, this._lines = new Map, this._hlines = new Map, this._textmarks = new Map, this._shapemarks = new Map, this._backgrounds = new Map, this._polygons = new Map, this._trendchannels = new Map, this._hhists = new Map, this._dwglabels = new Map, this._dwgboxes = new Map, this._dwglines = new Map, this._dwgtables = new Map, this._dwgtablecells = new Map, this._dwglinefills = new Map, this._hhistsByTimePointIndex = new Map
                }
                horizlines() {
                    return this._horizlines
                }
                vertlines() {
                    return this._vertlines
                }
                lines() {
                    return this._lines
                }
                hlines() {
                    return this._hlines
                }
                textmarks() {
                    return this._textmarks
                }
                shapemarks() {
                    return this._shapemarks
                }
                backgrounds() {
                    return this._backgrounds
                }
                polygons() {
                    return this._polygons
                }
                trendchannels() {
                    return this._trendchannels
                }
                hhists() {
                    return this._hhists
                }
                dwglabels() {
                    return this._dwglabels
                }
                dwglines() {
                    return this._dwglines
                }
                dwgboxes() {
                    return this._dwgboxes
                }
                dwgtables() {
                    return this._dwgtables
                }
                dwgtablecells() {
                    return this._dwgtablecells
                }
                dwglinefills() {
                    return this._dwglinefills
                }
                hhistsByTimePointIndex() {
                    return this._hhistsByTimePointIndex
                }
                clear() {
                    this._indexes = [], this._clearPrimitives()
                }
                extract() {
                    const e = e => e.extract(),
                        t = {
                            indexes: this._indexes,
                            horizlines: E(this._horizlines, e),
                            vertlines: E(this._vertlines, e),
                            lines: E(this._lines, e),
                            hlines: E(this._hlines, e),
                            textmarks: E(this._textmarks, e),
                            shapemarks: E(this._shapemarks, e),
                            backgrounds: E(this._backgrounds, e),
                            polygons: E(this._polygons, e),
                            trendchannels: E(this._trendchannels, e),
                            hhists: E(this._hhists, e),
                            dwglabels: E(this._dwglabels, e),
                            dwglines: E(this._dwglines, e),
                            dwgboxes: E(this._dwgboxes, e),
                            dwgtables: E(this._dwgtables, e),
                            dwgtablecells: E(this._dwgtablecells, e),
                            dwglinefills: E(this._dwglinefills, e)
                        };
                    return this._hhistsByTimePointIndex = new Map, new p.StaticStudyGraphics("data", t)
                }
                replaceIndexesTo(e) {
                    this._indexes = e;
                    const t = e => e.replaceIndexesTo(this._indexes);
                    this._horizlines.forEach(t), this._vertlines.forEach(t), this._lines.forEach(t), this._hlines.forEach(t), this._textmarks.forEach(t), this._shapemarks.forEach(t), this._backgrounds.forEach(t), this._polygons.forEach(t), this._trendchannels.forEach(t), this._hhists.forEach(t), this._dwglabels.forEach(t), this._dwgboxes.forEach(t), this._dwglines.forEach(t), this._dwgtables.forEach(t), this._dwgtablecells.forEach(t), this._dwglinefills.forEach(t), this._hhistsByTimePointIndex = (0, m.splitHHistsByTimePointIndex)(this._hhists)
                }
                processCommands(e, t) {
                    void 0 !== e.erase && this._processEraseCommands(e.erase), void 0 !== e.create && this._processCreateCommands(e.create, t)
                }
                _processCreateCommands(e, t) {
                    for (const i in e) {
                        if (!e.hasOwnProperty(i)) continue;
                        const m = i;
                        switch ((0, n.assert)(m in t, `There is a '${m}' in study response, but it doesn't present in graphics info!`), m) {
                            case "horizlines":
                                B(this._horizlines, e[m], t[m], this._indexes, r.materializeHorizLine);
                                break;
                            case "vertlines":
                                B(this._vertlines, e[m], t[m], this._indexes, a.materializeVertLine);
                                break;
                            case "lines":
                                B(this._lines, e[m], t[m], this._indexes, u.materializeLine);
                                break;
                            case "hlines":
                                B(this._hlines, e[m], t[m], this._indexes, x.materializeLevel);
                                break;
                            case "textmarks":
                                B(this._textmarks, e[m], t[m], this._indexes, f.materializeTextMark);
                                break;
                            case "shapemarks":
                                B(this._shapemarks, e[m], t[m], this._indexes, g.materializeShapeMark);
                                break;
                            case "backgrounds":
                                B(this._backgrounds, e[m], t[m], this._indexes, d.materializeBackground);
                                break;
                            case "polygons":
                                B(this._polygons, e[m], t[m], this._indexes, l.materializePolygon);
                                break;
                            case "trendchannels":
                                B(this._trendchannels, e[m], t[m], this._indexes, _.materializeTrendChannel);
                                break;
                            case "hhists":
                                B(this._hhists, e[m], t[m], this._indexes, s.materializeHHist);
                                break;
                            case "dwglabels":
                                B(this._dwglabels, e[m], t[m], this._indexes, o.materializeDwgLabel);
                                break;
                            case "dwglines":
                                B(this._dwglines, e[m], t[m], this._indexes, h.materializeDwgLine);
                                break;
                            case "dwgboxes":
                                B(this._dwgboxes, e[m], t[m], this._indexes, c.materializeDwgBox);
                                break;
                            case "dwgtables":
                                B(this._dwgtables, e[m], t[m], this._indexes, I.materializeDwgTable);
                                break;
                            case "dwgtablecells":
                                B(this._dwgtablecells, e[m], t[m], this._indexes, I.materializeDwgTableCell);
                                break;
                            case "dwglinefills":
                                B(this._dwglinefills, e[m], t[m], this._indexes, w.materializeDwgLineFill)
                        }
                    }
                    this._hhistsByTimePointIndex = (0, m.splitHHistsByTimePointIndex)(this._hhists)
                }
                _processEraseCommands(e) {
                    for (const t of e)
                        if ("all" === t.action) this._clearPrimitives();
                        else {
                            const e = e => e.deleteById(t.id);
                            switch (t.type) {
                                case "horizlines":
                                    this._horizlines.forEach(e);
                                    break;
                                case "vertlines":
                                    this._vertlines.forEach(e);
                                    break;
                                case "lines":
                                    this._lines.forEach(e);
                                    break;
                                case "hlines":
                                    this._hlines.forEach(e);
                                    break;
                                case "textmarks":
                                    this._textmarks.forEach(e);
                                    break;
                                case "shapemarks":
                                    this._shapemarks.forEach(e);
                                    break;
                                case "backgrounds":
                                    this._backgrounds.forEach(e);
                                    break;
                                case "polygons":
                                    this._polygons.forEach(e);
                                    break;
                                case "trendchannels":
                                    this._trendchannels.forEach(e);
                                    break;
                                case "hhists":
                                    this._hhists.forEach(e);
                                    break;
                                case "dwglabels":
                                    this._dwglabels.forEach(e);
                                    break;
                                case "dwglines":
                                    this._dwglines.forEach(e);
                                    break;
                                case "dwgboxes":
                                    this._dwgboxes.forEach(e);
                                    break;
                                case "dwgtables":
                                    this._dwgtables.forEach(e);
                                    break;
                                case "dwgtablecells":
                                    this._dwgtablecells.forEach(e);
                                    break;
                                case "dwglinefills":
                                    this._dwglinefills.forEach(e)
                            }
                        }
                    this._hhistsByTimePointIndex = (0, m.splitHHistsByTimePointIndex)(this._hhists)
                }
                _clearPrimitives() {
                    this._horizlines.clear(), this._vertlines.clear(), this._lines.clear(), this._hlines.clear(), this._textmarks.clear(), this._shapemarks.clear(), this._backgrounds.clear(), this._polygons.clear(), this._trendchannels.clear(), this._hhists.clear(), this._dwglabels.clear(), this._dwgboxes.clear(), this._dwglines.clear(), this._dwgtables.clear(), this._dwgtablecells.clear(), this._dwglinefills.clear(), this._hhistsByTimePointIndex = new Map
                }
            }
            class T {
                constructor(e, t) {
                    this._primitivesDataById = new Map, this._primitiveById = new Map, this._materializePrimitive = e, this._indexes = t
                }
                forEach(e, t) {
                    this._primitiveById.forEach((i => {
                        e.call(t, i, i, this)
                    }))
                }
                has(e) {
                    let t = !1;
                    return this._primitiveById.forEach((i => {
                        t = t || i === e
                    })), t
                }
                get size() {
                    return this._primitiveById.size
                }[Symbol.iterator]() {
                    return this._primitiveById.values()
                }
                entries() {
                    throw new Error("Not implemented")
                }
                keys() {
                    throw new Error("Not implemented")
                }
                values() {
                    throw new Error("Not implemented")
                }
                hasId(e) {
                    return this._primitiveById.has(e)
                }
                addData(e) {
                    this._primitivesDataById.set(e.id, e), this._tryMaterialize(e)
                }
                deleteById(e) {
                    this._primitiveById.delete(e), this._primitivesDataById.delete(e)
                }
                clear() {
                    this._primitivesDataById.clear(), this._primitiveById.clear()
                }
                replaceIndexesTo(e) {
                    this._indexes = e, this._primitiveById.clear(), this._primitivesDataById.forEach(this._tryMaterialize, this)
                }
                extract() {
                    const e = new Set(this._primitivesDataById.values());
                    return this._primitivesDataById = new Map, this._primitiveById.clear(), e
                }
                _tryMaterialize(e) {
                    const t = this._materializePrimitive(e, this._indexes);
                    null !== t && ((0, n.assert)(!this._primitiveById.has(e.id), "primitive with specified id should not exist"), this._primitiveById.set(e.id, t))
                }
            }

            function E(e, t) {
                const i = new Map;
                return e.forEach(((e, n) => i.set(n, t(e)))), i
            }

            function B(e, t, i, s, r) {
                if (void 0 !== t)
                    for (const a of t) {
                        const t = a.styleId;
                        void 0 !== i && (0, n.assert)(t in i, "Every style used by graphics primitive should be declared in study metainfo");
                        let l = e.get(t);
                        void 0 === l && (l = new T(r, s), e.set(t, l)), a.data.forEach(l.addData.bind(l))
                    }
            }
        },
        889354: (e, t, i) => {
            i.d(t, {
                materializePolygon: () => r,
                dematerializePolygon: () => a,
                isPolygonInBarsRange: () => l
            });
            var n = i(149590),
                s = i(325925);

            function r(e, t) {
                for (const i of e.points) {
                    if (i.index >= t.length) return null;
                    if (t[i.index] === n.INVALID_TIME_POINT_INDEX) return null
                }
                return {
                    points: e.points.map((e => ({
                        index: t[e.index],
                        offset: e.offset,
                        level: e.level
                    })))
                }
            }

            function a(e, t, i) {
                return {
                    id: t,
                    points: e.points.map((e => ({ ...e,
                        index: (0, s.ensureTimePointIndexIndex)(i.indexOf(e.index))
                    })))
                }
            }

            function l(e, t) {
                var i;
                if (e.points.some((e => {
                        var i;
                        return t.contains(e.index + (null !== (i = e.offset) && void 0 !== i ? i : 0))
                    }))) return !0;
                let n = !1,
                    s = !1;
                const r = t.firstBar();
                for (const t of e.points) t.index + (null !== (i = t.offset) && void 0 !== i ? i : 0) < r ? n = !0 : s = !0;
                return n && s
            }
        },
        13751: (e, t, i) => {
            i.d(t, {
                materializeShapeMark: () => a,
                dematerializeShapeMark: () => l,
                isShapeMarkInBarsRange: () => d
            });
            var n, s = i(149590),
                r = i(325925);

            function a(e, t) {
                if (e.time >= t.length) return null;
                const i = t[e.time];
                return i === s.INVALID_TIME_POINT_INDEX ? null : {
                    time: i,
                    price: e.price
                }
            }

            function l(e, t, i) {
                const n = (0, r.ensureTimePointIndexIndex)(i.indexOf(e.time));
                return {
                    id: t,
                    ...e,
                    time: n
                }
            }

            function d(e, t) {
                return t.contains(e.time)
            }! function(e) {
                e.Circle = "circle", e.ArrowUp = "arrowUp", e.ArrowDown = "arrowDown", e.ArrowRight = "arrowRight", e.ArrowLeft = "arrowLeft", e.Square = "square"
            }(n || (n = {}))
        },
        529327: (e, t, i) => {
            i.d(t, {
                StaticStudyGraphics: () => p,
                emptyStudyGraphics: () => B,
                loadStudyGraphics: () => D,
                saveStudyGraphics: () => z
            });
            var n = i(149590),
                s = i(14146),
                r = i(413401),
                a = i(406146),
                l = i(889354),
                d = i(416798),
                o = i(517335),
                h = i(79736),
                c = i(13751),
                x = i(650575),
                u = i(744771),
                g = i(650883),
                f = i(413118),
                _ = i(297559),
                I = i(876890),
                w = i(691337),
                m = i(186731);
            class p {
                constructor(e, t) {
                    if (this._indexes = [], this._horizlines = new Map, this._vertlines = new Map, this._lines = new Map, this._hlines = new Map,
                        this._textmarks = new Map, this._shapemarks = new Map, this._backgrounds = new Map, this._polygons = new Map, this._trendchannels = new Map, this._hhists = new Map, this._dwglabels = new Map, this._dwglines = new Map, this._dwgboxes = new Map, this._dwgtables = new Map, this._dwgtablecells = new Map, this._dwglinefills = new Map, "data" === e) {
                        const e = t;
                        this._indexes = e.indexes, this._vertlines = b(e.vertlines, this._indexes, r.materializeVertLine), this._horizlines = b(e.horizlines, this._indexes, s.materializeHorizLine), this._polygons = b(e.polygons, this._indexes, l.materializePolygon), this._hhists = b(e.hhists, this._indexes, a.materializeHHist), this._backgrounds = b(e.backgrounds, this._indexes, d.materializeBackground), this._lines = b(e.lines, this._indexes, h.materializeLine), this._hlines = b(e.hlines, this._indexes, o.materializeLevel), this._textmarks = b(e.textmarks, this._indexes, x.materializeTextMark), this._shapemarks = b(e.shapemarks, this._indexes, c.materializeShapeMark), this._trendchannels = b(e.trendchannels, this._indexes, u.materializeTrendChannel), this._dwglabels = b(e.dwglabels, this._indexes, g.materializeDwgLabel), this._dwglines = b(e.dwglines, this._indexes, f.materializeDwgLine), this._dwgboxes = b(e.dwgboxes, this._indexes, _.materializeDwgBox), this._dwgtables = b(e.dwgtables, this._indexes, I.materializeDwgTable), this._dwgtablecells = b(e.dwgtablecells, this._indexes, I.materializeDwgTableCell), this._dwglinefills = b(e.dwglinefills, this._indexes, w.materializeDwgLineFill)
                    } else if ("state" === e) {
                        const e = t;
                        this._indexes = e.indexes || [], this._vertlines = T(e.vertlines, this._indexes, r.materializeVertLine), this._horizlines = T(e.horizlines, this._indexes, s.materializeHorizLine), this._polygons = T(e.polygons, this._indexes, l.materializePolygon), this._hhists = T(e.hhists, this._indexes, a.materializeHHist), this._backgrounds = T(e.backgrounds, this._indexes, d.materializeBackground), this._lines = T(e.lines, this._indexes, h.materializeLine), this._hlines = T(e.hlines, this._indexes, o.materializeLevel), this._textmarks = T(e.textmarks, this._indexes, x.materializeTextMark), this._shapemarks = T(e.shapemarks, this._indexes, c.materializeShapeMark), this._trendchannels = T(e.trendchannels, this._indexes, u.materializeTrendChannel), this._dwglabels = T(e.dwglabels, this._indexes, g.materializeDwgLabel), this._dwglines = T(e.dwglines, this._indexes, f.materializeDwgLine), this._dwgboxes = T(e.dwgboxes, this._indexes, _.materializeDwgBox), this._dwgtables = T(e.dwgtables, this._indexes, I.materializeDwgTable), this._dwgtablecells = T(e.dwgtablecells, this._indexes, I.materializeDwgTableCell), this._dwglinefills = T(e.dwglinefills, this._indexes, w.materializeDwgLineFill)
                    }
                    this._hhistsByTimePointIndex = (0, m.splitHHistsByTimePointIndex)(this._hhists)
                }
                horizlines() {
                    return this._horizlines
                }
                vertlines() {
                    return this._vertlines
                }
                lines() {
                    return this._lines
                }
                hlines() {
                    return this._hlines
                }
                textmarks() {
                    return this._textmarks
                }
                shapemarks() {
                    return this._shapemarks
                }
                backgrounds() {
                    return this._backgrounds
                }
                polygons() {
                    return this._polygons
                }
                trendchannels() {
                    return this._trendchannels
                }
                hhists() {
                    return this._hhists
                }
                dwglabels() {
                    return this._dwglabels
                }
                dwglines() {
                    return this._dwglines
                }
                dwgboxes() {
                    return this._dwgboxes
                }
                dwgtables() {
                    return this._dwgtables
                }
                dwgtablecells() {
                    return this._dwgtablecells
                }
                dwglinefills() {
                    return this._dwglinefills
                }
                hhistsByTimePointIndex() {
                    return this._hhistsByTimePointIndex
                }
            }

            function b(e, t, i) {
                const n = new Map;
                return e.forEach(((e, s) => {
                    const r = n.get(s) || new Set;
                    e.forEach((e => {
                        const n = i(e, t);
                        null !== n && r.add(n)
                    })), n.set(s, r)
                })), n
            }

            function T(e, t, i) {
                const n = new Map;
                if (void 0 === e) return n;
                for (const s of e) {
                    const e = s.styleId,
                        r = n.get(e) || new Set;
                    s.data.forEach((e => {
                        const n = i(e, t);
                        null !== n && r.add(n)
                    })), n.set(e, r)
                }
                return n
            }

            function E(e, t, i, n, s, r) {
                const a = [];
                return e.forEach(((e, l) => {
                    e.forEach((e => {
                        (null === s || n(e, s)) && function(e, t, i) {
                            let n = null;
                            for (const i of e) i.styleId === t && (n = i);
                            null === n && (n = {
                                styleId: t,
                                data: []
                            }, e.push(n)), n.data.push(i)
                        }(a, l, r(e, t(e), i))
                    }))
                })), a.length > 0 ? a : void 0
            }

            function B() {
                return new p
            }

            function D(e) {
                return new p("state", e)
            }

            function y(e, t) {
                return !0
            }

            function z(e, t) {
                const i = function(e) {
                        const t = new Set;
                        e.horizlines().forEach(((e, i) => {
                            e.forEach((e => {
                                t.add(e.startIndex), t.add(e.endIndex)
                            }))
                        })), e.vertlines().forEach(((e, i) => {
                            e.forEach((e => {
                                t.add(e.index)
                            }))
                        })), e.lines().forEach(((e, i) => {
                            e.forEach((e => {
                                t.add(e.startIndex), t.add(e.endIndex)
                            }))
                        })), e.textmarks().forEach(((e, i) => {
                            e.forEach((e => {
                                t.add(e.time)
                            }))
                        })), e.shapemarks().forEach(((e, i) => {
                            e.forEach((e => {
                                t.add(e.time)
                            }))
                        })), e.backgrounds().forEach(((e, i) => {
                            e.forEach((e => {
                                t.add(null !== e.start ? e.start : n.INVALID_TIME_POINT_INDEX), t.add(e.stop)
                            }))
                        })), e.polygons().forEach(((e, i) => {
                            e.forEach((e => {
                                e.points.forEach((e => {
                                    t.add(e.index)
                                }))
                            }))
                        })), e.trendchannels().forEach(((e, i) => {
                            e.forEach((e => {
                                t.add(e.startIndex), t.add(e.endIndex)
                            }))
                        })), e.hhists().forEach(((e, i) => {
                            e.forEach((e => {
                                t.add(e.firstBarTime), t.add(e.lastBarTime)
                            }))
                        })), e.dwglabels().forEach(((e, i) => {
                            e.forEach((e => {
                                t.add(e.x)
                            }))
                        })), e.dwglines().forEach(((e, i) => {
                            e.forEach((e => {
                                var i, s;
                                t.add(null !== (i = e.x1) && void 0 !== i ? i : n.INVALID_TIME_POINT_INDEX), t.add(null !== (s = e.x2) && void 0 !== s ? s : n.INVALID_TIME_POINT_INDEX)
                            }))
                        })), e.dwgboxes().forEach(((e, i) => {
                            e.forEach((e => {
                                var i, s;
                                t.add(null !== (i = e.left) && void 0 !== i ? i : n.INVALID_TIME_POINT_INDEX), t.add(null !== (s = e.right) && void 0 !== s ? s : n.INVALID_TIME_POINT_INDEX)
                            }))
                        }));
                        const i = Array.from(t);
                        return i.sort(((e, t) => e - t)), i
                    }(e),
                    m = {
                        indexes: i
                    };
                let p = 0;
                const b = () => ++p,
                    T = e => e.id,
                    B = e => e.id;
                return m.vertlines = E(e.vertlines(), b, i, r.isVertLineInBarsRange, t, r.dematerializeVertLine), m.horizlines = E(e.horizlines(), b, i, s.isHorizLineInBarsRange, t, s.dematerializeHorizLine), m.polygons = E(e.polygons(), b, i, l.isPolygonInBarsRange, t, l.dematerializePolygon), m.hhists = E(e.hhists(), b, i, a.isHHistInBarsRange, t, a.dematerializeHHist), m.backgrounds = E(e.backgrounds(), b, i, d.isBackgroundInBarsRange, t, d.dematerializeBackground), m.lines = E(e.lines(), b, i, h.isLineInBarsRange, t, h.dematerializeLine), m.hlines = E(e.hlines(), b, i, y, t, o.dematerializeLevel), m.textmarks = E(e.textmarks(), b, i, x.isTextMarkInBarsRange, t, x.dematerializeTextMark), m.shapemarks = E(e.shapemarks(), b, i, c.isShapeMarkInBarsRange, t, c.dematerializeShapeMark),
                    m.trendchannels = E(e.trendchannels(), b, i, u.isTrendChannelInBarsRange, t, u.dematerializeTrendChannel), m.dwglabels = E(e.dwglabels(), b, i, g.isDwgLabelInBarsRange, t, g.dematerializeDwgLabel), m.dwglines = E(e.dwglines(), B, i, f.isDwgLineInBarsRange, t, f.dematerializeDwgLine), m.dwgboxes = E(e.dwgboxes(), b, i, _.isDwgBoxInBarsRange, t, _.dematerializeDwgBox), m.dwgtables = E(e.dwgtables(), T, i, y, t, I.dematerializeDwgTable), m.dwgtablecells = E(e.dwgtablecells(), b, i, y, t, I.dematerializeDwgTableCell), m.dwglinefills = E(e.dwglinefills(), b, i, y, t, w.dematerializeDwgLineFill), m
            }
        },
        186731: (e, t, i) => {
            i.d(t, {
                primitivesZOrders: () => s,
                isStudyGraphicsEmpty: () => r,
                splitHHistsByTimePointIndex: () => a
            });
            const n = ["horizlines", "vertlines", "lines", "hlines", "textmarks", "shapemarks", "backgrounds", "polygons", "trendchannels", "hhists", "dwglabels", "dwglines", "dwgboxes", "dwgtables", "dwgtablecells", "dwglinefills"],
                s = new Map([
                    ["polygons", -4],
                    ["trendchannels", -3],
                    ["textmarks", -2],
                    ["shapemarks", -2],
                    ["backgrounds", -1],
                    ["hlines", 1],
                    ["horizlines", 1],
                    ["hhists", 1],
                    ["dwglinefills", 2],
                    ["vertlines", 3],
                    ["lines", 3],
                    ["dwglines", 3],
                    ["dwgboxes", 4],
                    ["dwglabels", 5],
                    ["dwgtables", 6],
                    ["dwgtablecells", 6]
                ]);

            function r(e) {
                return !n.some((t => e[t]().size > 0))
            }

            function a(e) {
                const t = new Map;
                return e.forEach(((e, i) => {
                    e.forEach((e => {
                        const n = { ...e,
                                styleId: i
                            },
                            s = e.firstBarTime;
                        let r = t.get(s);
                        void 0 === r && (r = new Set, t.set(s, r)), r.add(n)
                    }))
                })), t
            }
        },
        650575: (e, t, i) => {
            i.d(t, {
                TextMarkType: () => n,
                materializeTextMark: () => l,
                dematerializeTextMark: () => d,
                isTextMarkInBarsRange: () => o
            });
            var n, s, r = i(149590),
                a = i(325925);

            function l(e, t) {
                if (e.time >= t.length) return null;
                const i = t[e.time];
                return i === r.INVALID_TIME_POINT_INDEX ? null : {
                    time: i,
                    offset: e.offset,
                    text: e.text,
                    price: e.price
                }
            }

            function d(e, t, i) {
                const n = (0, a.ensureTimePointIndexIndex)(i.indexOf(e.time));
                return {
                    id: t,
                    ...e,
                    time: n
                }
            }

            function o(e, t) {
                var i;
                return t.contains(e.time + (null !== (i = e.offset) && void 0 !== i ? i : 0))
            }! function(e) {
                e.Triangle = "triangle", e.Rectangle = "rectangle"
            }(n || (n = {})),
            function(e) {
                e.Verdana = "Verdana", e.CourierNew = "Courier New", e.TimesNewRoman = "Times New Roman", e.Arial = "Arial"
            }(s || (s = {}))
        },
        744771: (e, t, i) => {
            i.d(t, {
                materializeTrendChannel: () => a,
                dematerializeTrendChannel: () => l,
                isTrendChannelInBarsRange: () => d
            });
            var n = i(650151),
                s = i(149590),
                r = i(325925);

            function a(e, t) {
                if (e.startIndex >= t.length || e.endIndex >= t.length) return null;
                const i = t[e.startIndex],
                    r = t[e.endIndex];
                return i === s.INVALID_TIME_POINT_INDEX || r === s.INVALID_TIME_POINT_INDEX ? null : ((0, n.assert)(i <= r, "startIndex should not exceed endIndex"), {
                    startIndex: i,
                    endIndex: r,
                    extendLeft: e.extendLeft,
                    extendRight: e.extendRight,
                    startHighPrice: e.startHighPrice,
                    startLowPrice: e.startLowPrice,
                    endHighPrice: e.endHighPrice,
                    transparency: e.transparency
                })
            }

            function l(e, t, i) {
                const n = (0, r.ensureTimePointIndexIndex)(i.indexOf(e.startIndex)),
                    s = (0, r.ensureTimePointIndexIndex)(i.indexOf(e.endIndex));
                return {
                    id: t,
                    ...e,
                    startIndex: n,
                    endIndex: s
                }
            }

            function d(e, t) {
                const i = Math.min(e.startIndex, e.endIndex),
                    n = Math.max(e.startIndex, e.endIndex);
                if (t.contains(i) || t.contains(n) || i < t.firstBar() && n > t.lastBar()) return !0;
                const s = e.startIndex < e.endIndex ? e.extendLeft : e.extendRight,
                    r = e.startIndex < e.endIndex ? e.extendRight : e.extendLeft;
                return n < t.firstBar() && r || i > t.lastBar() && s
            }
        },
        413401: (e, t, i) => {
            i.d(t, {
                materializeVertLine: () => r,
                dematerializeVertLine: () => a,
                isVertLineInBarsRange: () => l
            });
            var n = i(149590),
                s = i(325925);

            function r(e, t) {
                if (e.index >= t.length) return null;
                const i = t[e.index];
                return i === n.INVALID_TIME_POINT_INDEX ? null : {
                    startPrice: e.startPrice,
                    endPrice: e.endPrice,
                    index: i,
                    extendTop: e.extendTop,
                    extendBottom: e.extendBottom
                }
            }

            function a(e, t, i) {
                const n = (0, s.ensureTimePointIndexIndex)(i.indexOf(e.index));
                return {
                    id: t,
                    ...e,
                    index: n
                }
            }

            function l(e, t) {
                return t.contains(e.index)
            }
        },
        353469: (e, t, i) => {
            function n(e) {
                const t = new Map;
                return e.plots.forEach(((e, i) => {
                    t.set(e.id, (e => e[i + 1]))
                })), t
            }

            function s(e, t) {
                return null == e[t]
            }
            i.d(t, {
                studyPlotFunctionMap: () => n,
                studyEmptyPlotValuePredicate: () => s
            })
        }
    }
]);
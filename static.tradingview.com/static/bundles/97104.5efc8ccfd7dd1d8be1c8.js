(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [97104], {
        738133: (e, t, i) => {
            "use strict";
            i.d(t, {
                TooltipPopup: () => d
            });
            var r = i(50959),
                s = i(45968),
                o = i(470316),
                n = i(224743),
                a = i(758337);
            const d = (0, r.forwardRef)(((e, t) => {
                const {
                    onClose: i,
                    onForceClose: d,
                    onClickOutside: l,
                    className: c,
                    customCloseSubscriptions: h = [],
                    ...p
                } = e, u = (0, r.useRef)(null), _ = (0, r.useCallback)((e => {
                    27 === (0, o.hashFromEvent)(e) && d()
                }), [d]), m = (0, r.useCallback)((() => {
                    (0, n.globalCloseMenu)(), d()
                }), [d]), y = (0, r.useCallback)((() => {
                    u.current && u.current.focus({
                        preventScroll: !0
                    })
                }), []);
                return (0, r.useEffect)((() => {
                    const e = (t = m, window.addEventListener("scroll", t), () => window.removeEventListener("scroll", t));
                    var t;
                    const i = h && function(e, t) {
                        for (const i of e) i.subscribe(null, t);
                        return () => {
                            for (const i of e) i.unsubscribe(null, t)
                        }
                    }(h, m);
                    return () => {
                        e(), (0, a.isFunction)(i) && i()
                    }
                }), [h, m]), r.createElement(s.PopupMenu, {
                    className: c,
                    isOpened: !0,
                    tabIndex: -1,
                    reference: e => {
                        "function" == typeof t ? t(e) : (0, a.isObject)(t) && (t.current = e), u.current = e
                    },
                    onClose: i,
                    onClickOutside: l,
                    onKeyDown: _,
                    onOpen: y,
                    ...p
                }, e.children)
            }))
        },
        977907: e => {
            e.exports = {
                title: "title-t_2RnW3_"
            }
        },
        928089: (e, t, i) => {
            "use strict";
            i.d(t, {
                ToolWidgetMenuSummary: () => n
            });
            var r = i(50959),
                s = i(497754),
                o = i(977907);

            function n(e) {
                return r.createElement("div", {
                    className: s(e.className, o.title)
                }, e.children)
            }
        },
        245550: (e, t, i) => {
            "use strict";
            var r;
            i.d(t, {
                    TradedItemType: () => r
                }),
                function(e) {
                    e[e.Position = 0] = "Position", e[e.Order = 1] = "Order"
                }(r || (r = {}))
        },
        214644: (e, t, i) => {
            "use strict";
            i.d(t, {
                TradedGroupBase: () => ee,
                isTradedGroupCustomSource: () => Z
            });
            var r = i(822914),
                s = i(650151),
                o = i(777754),
                n = i(169323),
                a = i(404822),
                d = i(495046),
                l = i(136916),
                c = i(547623),
                h = i(245550),
                p = i(506787),
                u = i(209402),
                _ = i(817728),
                m = i(125226),
                y = i(646228),
                v = i(123911),
                f = i(623331),
                k = i(538708),
                S = i(858063),
                b = i(914679),
                g = i(335144),
                P = i(837512),
                T = i(785409),
                I = i(769459),
                w = i(854905);
            class L extends T.ItemRenderer {
                constructor() {
                    super(...arguments), this._left = 0
                }
                hitTest(e, t) {
                    const i = t.pixelRatio,
                        r = this.rectWithOffsets(t),
                        s = Math.round(e.x * i),
                        o = Math.round(e.y * i),
                        n = s >= r.left,
                        a = s <= r.right,
                        d = n && a;
                    if (!(o >= r.top && o <= r.bottom) || !d) return null;
                    const l = {
                        cursorType: w.PaneCursorType.Default,
                        hideCrosshairLinesOnHover: !0,
                        activeItem: {
                            id: this._data.id
                        }
                    };
                    return this._data.disabled ? new S.HitTestResult(S.HitTestResult.CUSTOM, l) : new S.HitTestResult(S.HitTestResult.CUSTOM, { ...l,
                        activeItem: {
                            id: this._data.id,
                            part: 8
                        }
                    })
                }
                applyOffset(e) {
                    const t = (0, s.ensureDefined)(this._data.drawWithTPOffset ? e.projItemTpLeft : this._data.drawWithSLOffset ? e.projItemSlLeft : 0);
                    this._left !== t && (this._left = t, this.clearCache())
                }
                _drawQtyWithBackground(e, t, i, r, o) {
                    const n = (0, s.ensureDefined)(this._data.qty),
                        a = i.top + (i.bottom - i.top) / 2,
                        d = i.qty.left + i.qty.width / 2;
                    this._drawText(e, t, n.text, n.textColor, d, a)
                }
                _drawTextWithBackground(e, t, i, r, s) {
                    const o = i.top + (i.bottom - i.top) / 2,
                        n = i.text.left + i.text.width / 2;
                    this._drawText(e, t, this._data.text.text, this._data.text.textColor, n, o)
                }
                _calculateCacheRect(e) {
                    const t = e.pixelRatio;
                    let i = super._calculateCacheRect(e);
                    const r = 2 * i.borderWidth,
                        s = this._mainTextWidth(this._ctxInternal),
                        o = this._quantityWidth(this._ctxInternal),
                        n = Math.round(s * t + o * t) + (s && r) + (o && i.borderWidth),
                        a = this._left + n;
                    return i = { ...i,
                        left: this._left,
                        right: a,
                        body: { ...i.body,
                            left: this._left,
                            right: a
                        },
                        text: {
                            left: this._left + i.qty.width + i.borderWidth,
                            width: i.text.width,
                            rightDividerWidth: 0
                        },
                        qty: {
                            left: this._left,
                            width: i.qty.width,
                            rightDividerWidth: i.qty.rightDividerWidth
                        }
                    }, this._data.bodyAlignment !== g.TradedGroupHorizontalAlignment.Left ? i : { ...i,
                        top: i.top,
                        bottom: i.bottom,
                        body: {
                            left: i.body.left - i.text.width - Number(i.qty.rightDividerWidth) - i.borderWidth,
                            right: i.qty.left + i.qty.width + i.borderWidth
                        },
                        text: {
                            left: i.body.left - i.text.width - Number(i.qty.rightDividerWidth),
                            width: i.text.width + Number(i.qty.rightDividerWidth),
                            rightDividerWidth: i.qty.rightDividerWidth
                        },
                        qty: {
                            left: i.qty.left,
                            width: i.qty.width - Number(i.qty.rightDividerWidth),
                            rightDividerWidth: 0
                        }
                    }
                }
                _calcAllWidth(e, t, i, r, s, o) {
                    const n = 2 * o;
                    return Math.round(i * e) + (i && n)
                }
            }
            var M = i(726267);
            class C {
                constructor(e) {
                    this._prevCssWidth = null, this._prevPixelRatio = null, this._prevFontSize = null, this._font = null, this._itemsRectsInfo = null, this._textWidthCache = new P.TextWidthCache, this._minMainTextWidthCache = new Map, this._items = [], this._tradedGroupRenderersController = e
                }
                itemRenderers() {
                    return this._items
                }
                clearCache() {
                    this._itemsRectsInfo = null, this._tradedGroupRenderersController.invalidateCache()
                }
                setData(e) {
                    this._data = e
                }
                setFontSize(e) {
                    if (this._prevFontSize !== e) {
                        this._checkCacheValid({
                            pixelRatio: this._prevPixelRatio,
                            cssWidth: this._prevCssWidth
                        }, e), this._prevFontSize = e, this._font = null === e ? null : (0, k.makeFont)(e, f.CHART_FONT_FAMILY, "", "normal");
                        for (const e of this._items) e.setFont(this._font)
                    }
                }
                clearItems() {
                    this._items = []
                }
                addItem(e) {
                    const t = function(e, t, i, r) {
                        if (e.type === T.ItemsRendererType.Position) return new M.PositionItemRenderer(e, t, i, r);
                        if (e.type === T.ItemsRendererType.WithBracketButtons) return new I.TPSLItemRenderer(e, t, i, r);
                        if (e.type === T.ItemsRendererType.Projection) return new L(e, t, i, r);
                        if (e.type === T.ItemsRendererType.Default) return new T.ItemRenderer(e, t, i, r);
                        throw new Error("Unknown traded item renderer's type")
                    }(e, this._textWidthCache, (0, s.ensureNotNull)(this._font), this._minTextWidth.bind(this));
                    this._items.push(t)
                }
                hitTest(e, t) {
                    var i;
                    if (!this._paneHasVisibleItems()) return null;
                    this._checkCacheValid(t, this._prevFontSize), this._tradedGroupRenderersController.alignItems(t), this._calcItemsRectsInfo(t);
                    for (let i = this._items.length - 1; i >= 0; i--) {
                        const r = this._items[i];
                        r.applyOffset((0, s.ensureNotNull)(this._itemsRectsInfo));
                        const o = r.hitTest(e, t);
                        if (null !== o) return o
                    }
                    return (null === (i = this._data) || void 0 === i ? void 0 : i.disableNoOverlap) ? new S.HitTestResult(S.HitTestResult.MOVEPOINT_BACKGROUND, {
                        clickHandler: this._data.disableNoOverlap,
                        tapHandler: this._data.disableNoOverlap,
                        contextMenuHandler: this._data.disableNoOverlap,
                        touchContextMenuHandler: this._data.disableNoOverlap
                    }) : null
                }
                drawBackground(e, t) {
                    if (this._paneHasVisibleItems()) {
                        this._checkCacheValid(t, this._prevFontSize), this._tradedGroupRenderersController.alignItems(t), this._calcItemsRectsInfo(t);
                        for (const i of this._items) i.applyOffset((0, s.ensureNotNull)(this._itemsRectsInfo)), i.drawBackground(e, t)
                    }
                }
                draw(e, t) {
                    var i, r, o, n;
                    if (!this._paneHasVisibleItems()) return;
                    this._checkCacheValid(t, this._prevFontSize), this._tradedGroupRenderersController.alignItems(t), this._calcItemsRectsInfo(t);
                    for (const i of this._items) i.applyOffset((0, s.ensureNotNull)(this._itemsRectsInfo)), i.drawLine(e, t);
                    const a = null !== (r = null === (i = this._itemsRectsInfo) || void 0 === i ? void 0 : i.rightmostBorder) && void 0 !== r ? r : null,
                        d = null !== (n = null === (o = this._itemsRectsInfo) || void 0 === o ? void 0 : o.leftmostBorder) && void 0 !== n ? n : null,
                        l = Math.round(t.cssWidth * t.pixelRatio),
                        c = Math.round(12 * t.pixelRatio),
                        h = this._data.horizontalAlignment === g.TradedGroupHorizontalAlignment.Left,
                        p = h ? d : a,
                        u = h ? -1 : 1;
                    if (null !== p && p + u * c <= l) {
                        const i = h ? 0 : l,
                            r = Math.round(this._data.rightPadding * t.pixelRatio),
                            s = p + u * (Math.min(r, i - u * p) / 2);
                        this._drawVertLine(e, t, s);
                        for (const i of this._items) i.drawPointOnLine(e, t, s)
                    }
                    for (const i of this._items) i.draw(e, t)
                }
                clearMinTextWidthByItemId(e) {
                    this._minMainTextWidthCache.has(e) && this._minMainTextWidthCache.delete(e)
                }
                clearMinTextWidthCache() {
                    this._minMainTextWidthCache.clear()
                }
                _minTextWidth(e, t) {
                    var i;
                    if (!e.text.text) return 0;
                    t.save(), t.font = (0, s.ensureNotNull)(this._font);
                    const r = Math.ceil(this._textWidthCache.measureText(t, e.text.text)),
                        o = this._minMainTextWidthCache.get(e.id);
                    if (void 0 === o || r > o) {
                        const i = Math.ceil(this._textWidthCache.measureText(t, "0"));
                        this._minMainTextWidthCache.set(e.id, r + i)
                    }
                    return t.restore(), null !== (i = this._minMainTextWidthCache.get(e.id)) && void 0 !== i ? i : 0
                }
                _checkCacheValid(e, t) {
                    const i = this._prevFontSize !== t || this._prevPixelRatio !== e.pixelRatio,
                        r = this._prevCssWidth !== e.cssWidth;
                    if (i || r) {
                        i && this._textWidthCache.reset();
                        for (const e of this._items) e.clearCache()
                    }
                }
                _calcItemsRectsInfo(e) {
                    if (null !== this._itemsRectsInfo) return;
                    const t = this._items.filter((e => e.data().visible)).map((t => t.rect(e))),
                        i = this._tradedGroupRenderersController.getBorderPoint(this);
                    let r, o, n, a, {
                            rightmostBorder: d,
                            leftmostBorder: l
                        } = (0, s.ensureNotNull)(i),
                        c = t[0].yMid,
                        h = t[0].yMid;
                    for (const e of t) {
                        e.yMid < c && (c = e.yMid), e.yMid > h && (h = e.yMid);
                        (0, I.isItemWithTPSLRendererRect)(e) && (r = e.tp.left, o = e.sl.left)
                    }
                    const p = d - l;
                    if (this._data.horizontalAlignment === g.TradedGroupHorizontalAlignment.Left) d > e.physicalWidth && (a = Math.max(e.physicalWidth - p, Math.round(12 * e.pixelRatio)));
                    else if (l < 0) {
                        const t = Math.round(12 * e.pixelRatio);
                        n = e.physicalWidth - p > t ? p : e.physicalWidth - t
                    }
                    if (void 0 !== r && void 0 !== o) {
                        if (void 0 !== a) {
                            const e = l - a;
                            r -= e, o -= e
                        }
                        if (void 0 !== n) {
                            const e = n - d;
                            r += e, o += e
                        }
                    }
                    void 0 !== a && (l = a), void 0 !== n && (d = n), this._itemsRectsInfo = {
                        rightmostBorder: d,
                        leftmostBorder: l,
                        leftmostForItemOffset: a,
                        rightmostForItemOffset: n,
                        yMin: c,
                        yMax: h,
                        projItemTpLeft: r,
                        projItemSlLeft: o
                    }
                }
                _drawVertLine(e, t, i) {
                    const r = this._data.vertLine;
                    if (null === r || null === this._itemsRectsInfo || this._itemsRectsInfo.yMax === this._itemsRectsInfo.yMin) return;
                    const s = t.pixelRatio;
                    e.strokeStyle = r.color, e.lineWidth = Math.max(1, Math.floor(r.thickness * s)), (0, b.setLineStyle)(e, r.style), (0,
                        b.drawVerticalLine)(e, i, this._itemsRectsInfo.yMin, this._itemsRectsInfo.yMax)
                }
                _paneHasVisibleItems() {
                    return this._items.filter((e => e.data().visible)).length > 0
                }
            }
            var D = i(423029),
                x = i(114123),
                O = i(665704);
            const B = o.t(null, void 0, i(137172)),
                j = o.t(null, void 0, i(316075));
            class A extends O.BasePaneViewItem {
                rendererData() {
                    const e = this._item === this._itemWithButtons(),
                        t = (0, y.getDefaultStyleForOrderItem)(this._item, this._source, (() => this._chartModel.isDark())),
                        i = (0, x.generateColor)(t.borderColor, 85);
                    let r;
                    const s = this._renderDataForClose(t.close, i);
                    return void 0 !== s && (r = { ...s,
                        title: j
                    }), {
                        type: e ? T.ItemsRendererType.WithBracketButtons : T.ItemsRendererType.Default,
                        ...this._renderDataGeneral(t),
                        ...this._renderDataForTPSLButtons(this._item),
                        callbacks: this._callbacks(this._projectionBracketsForItem(this._item)),
                        line: this._renderDataForLine(t),
                        qty: { ...this._renderDataForQty(t.qty, i),
                            title: B
                        },
                        text: { ...this._renderDataForText(t.text, i),
                            title: this._item.profitLossTooltip()
                        },
                        point: this._renderDataForPoint(),
                        close: r,
                        confirm: this._renderDataForConfirm()
                    }
                }
                _callbacks(e = []) {
                    const t = this._source,
                        i = super._callbacks(e),
                        r = {
                            label: `[${this._modeGaLabel()}]`
                        };
                    return this._item.isMovingEnabled() && !this._isNoOverlapMode && (i.onMove = e => t.onMove(this._item.id(), e), i.onFinishMove = () => t.onFinishMove(this._item.id(), r)), this._item.supportModify() && (i.onModify = () => this._item.onModify(r)), this._item.supportClose() && this._isCloseVisible() && (i.onClose = () => this._item.onClose(r)), this._item.canQtyCalcModify() && (i.onQtyModify = (e, t) => this._item.toggleQtyModify(e, t, r)), i
                }
            }
            class R extends A {
                constructor(e, t, i, r, s, o) {
                    super(e, t, i, r, s, o), this._source = t
                }
                _callbacks(e = []) {
                    const t = super._callbacks(e),
                        i = {
                            label: `[${this._modeGaLabel()}]`
                        };
                    return this._item.supportClose() && this._isCloseVisible() && (t.onClose = async () => this._source.onClose(i)), this._isNoOverlapMode || (this._item.isMovingEnabled() && (t.onMove = e => this._source.onMove(this._item.id(), e), t.onFinishMove = () => this._source.onFinishMove(this._item.id(), i)), this._item.canSwitchType() && (t.onText = (e, t) => this._item.toggleType(e, t, i))), t
                }
            }
            class E extends O.BasePaneViewItem {
                rendererData() {
                    const e = (0, y.getDefaultStyleForOrderItem)(this._item, this._source, (() => this._chartModel.isDark())),
                        t = (0, x.generateColor)(e.borderColor, 85);
                    return {
                        type: T.ItemsRendererType.Projection,
                        ...this._renderDataGeneral(e),
                        drawWithTPOffset: this._item.bracketType() === l.BracketType.TakeProfit,
                        drawWithSLOffset: this._item.bracketType() === l.BracketType.StopLoss || this._item.bracketType() === l.BracketType.TrailingStop,
                        callbacks: this._callbacks(),
                        line: this._renderDataForLine(e),
                        qty: this._renderDataForQty(e.qty, t),
                        text: { ...this._renderDataForText(e.text, t),
                            title: this._item.profitLossText(),
                            active: {
                                visible: !1,
                                backgroundColor: e.qty.activeColor
                            }
                        },
                        point: this._renderDataForPoint(),
                        close: this._renderDataForClose(e.close, e.close.activeColor)
                    }
                }
            }

            function V(e, t, i, r, s, o) {
                if ((0, u.isPositionItem)(e)) return new D.PositionPaneViewItem(e, t, i, r, s, o);
                if ((0, u.isPreOrderItem)(e)) return new R(e, t, i, r, s, o);
                if ((0, u.isProjectionBracketItem)(e)) return new E(e, t, i, r, s, o);
                if ((0,
                        p.isOrderLikeItem)(e)) return new A(e, t, i, r, s, o);
                throw new Error("Unknown traded item type")
            }
            const z = (0, m.isFeatureEnabled)("trading_sources_adaptive");
            var W;
            ! function(e) {
                e[e.Large = 380] = "Large", e[e.Small = 280] = "Small"
            }(W || (W = {}));
            class N {
                constructor(e, t, i) {
                    this._prevItemTokens = new Map, this._displayMode = 2, this._invalidated = !0, this._chartModel = e, this._source = t, this._tradedGroupRenderersController = i, this._showOrderProperty = t.showOrderProperty(), this._showPositionProperty = t.showPositionProperty(), this._renderer = new C(this._tradedGroupRenderersController), this._tradedGroupRenderersController.registerRenderer(this._renderer), this._renderer.setFontSize(13), this._source.positionDisplayMode().subscribe(this._renderer, this._renderer.clearMinTextWidthCache), this._source.bracketsDisplayMode().subscribe(this._renderer, this._renderer.clearMinTextWidthCache)
                }
                destroy() {
                    this._tradedGroupRenderersController.removeRenderer(this._renderer), this._source.positionDisplayMode().unsubscribe(this._renderer, this._renderer.clearMinTextWidthCache), this._source.bracketsDisplayMode().unsubscribe(this._renderer, this._renderer.clearMinTextWidthCache)
                }
                update() {
                    this._invalidated = !0
                }
                renderer(e, t) {
                    if (this._invalidated) {
                        const e = this._displayMode;
                        this._calculateMode(t), this._updateImpl(), e !== this._displayMode && this._renderer.clearMinTextWidthCache(), this._renderer.clearCache(), this._invalidated = !1
                    }
                    return this._renderer
                }
                priceToCoordinate(e) {
                    if (null === e) return null;
                    const t = this._chartModel.mainSeries(),
                        i = t.firstValue();
                    return null === i ? null : t.priceScale().priceToCoordinate(e, i)
                }
                _calculateMode(e) {
                    if (!d.enabled("adaptive_trading_sources")) return;
                    const t = e < W.Large ? e < W.Small && z ? 0 : 1 : 2;
                    this._displayMode = t
                }
                _mainItemStyle() {
                    const e = this._source.mainItem();
                    return void 0 === e ? (0, y.getStyleForOppositeDirection)(this._source.items().brackets[0], this._source, (() => this._chartModel.isDark())) : (0, p.isPositionLikeItem)(e) ? (0, v.getDefaultStyleForPositionItem)(e.isBuyDirection(), this._source.isBlocked(), (() => this._chartModel.isDark()), e.lineStyle()) : ((0, s.assert)((0, p.isOrderLikeItem)(e), "Unexpected traded item type"), (0, y.getDefaultStyleForOrderItem)(e, this._source, (() => this._chartModel.isDark())))
                }
                _rightPadding() {
                    return 2 !== this._displayMode ? 40 : 64
                }
                _sortedItems() {
                    var e, t, i;
                    const r = [],
                        s = this._source.items();
                    let o = null,
                        n = null,
                        a = null;
                    const d = s.brackets.slice();
                    if (d.push(...s.projectionBrackets), void 0 !== s.stopLimit && d.push(s.stopLimit), void 0 !== s.main && d.push(s.main), this._tradedGroupRenderersController.isNoOverlapMode()) return d;
                    for (const s of d)(null === (e = this._source.movingItem()) || void 0 === e ? void 0 : e.id) === s.id() ? a = s : (null === (t = this._source.hoveredItem()) || void 0 === t ? void 0 : t.id) === s.id() ? n = s : (null === (i = this._source.selectedItem()) || void 0 === i ? void 0 : i.id) === s.id() ? o = s : r.push(s);
                    return null !== o && r.push(o), null !== n && r.push(n), null !== a && r.push(a), r
                }
                _updateImpl() {
                    if (this._renderer.clearItems(), !this._showOrderProperty.value() && !this._showPositionProperty.value() || this._isNoData()) return;
                    const e = this._mainItemStyle(),
                        t = this._source.isSelected(),
                        i = t && this._source.isHoveredOtherTradedGroup() ? (0, s.ensureDefined)(e.disabledLineColor) : e.lineColor,
                        r = this._rightPadding(),
                        o = {
                            vertLine: null,
                            horizontalAlignment: this._source.horizontalAlignment(),
                            rightPadding: r
                        };
                    (this._source.isHovered() || t) && (o.vertLine = {
                        thickness: this._source.lineWidth(),
                        style: e.lineStyle,
                        color: i
                    }), this._tradedGroupRenderersController.isNoOverlapMode() && (o.disableNoOverlap = () => this._tradedGroupRenderersController.setNoOverlapMode(!1)), this._renderer.setData(o);
                    const n = new Map;
                    for (const t of this._sortedItems()) {
                        const s = this.priceToCoordinate(t.price());
                        if (null === s) continue;
                        const o = V(t, this._source, this._chartModel, e, {
                            isNoOverlapMode: this._tradedGroupRenderersController.isNoOverlapMode(),
                            displayMode: this._displayMode,
                            rightPadding: r,
                            groupLineColor: i,
                            y: s
                        }, {
                            setNoOverlapMode: e => this._tradedGroupRenderersController.setNoOverlapMode(e)
                        }).rendererData();
                        this._renderer.addItem(o), n.set(`${o.id} ${t.isBuyDirection()}`, o.id)
                    }
                    this._prevItemTokens.forEach(((e, t) => {
                        n.has(t) || this._renderer.clearMinTextWidthByItemId(e)
                    })), this._prevItemTokens = n
                }
                _isNoData() {
                    const e = this._source.items();
                    return void 0 === e.main && void 0 === e.stopLimit && 0 === e.brackets.length
                }
            }
            var G = i(16719),
                F = i(471502);
            class H extends F.PriceLineAxisView {
                constructor(e, t, i, r, s, o, n) {
                    super(), this._chartModel = e, this._data = t, this._source = i, this._showProperty = o, this._height = r, this._verticalPadding = s, this._styleGetter = n
                }
                itemId() {
                    return this._data.id()
                }
                _value() {
                    const e = this._chartModel.mainSeries(),
                        t = e.firstValue(),
                        i = this._data.price();
                    if (null === i || null === t) return {
                        noData: !0
                    };
                    const r = e.priceScale().priceToCoordinate(i, t);
                    return {
                        noData: !1,
                        floatCoordinate: r,
                        coordinate: r,
                        color: "",
                        formattedPricePercentage: "",
                        formattedPriceAbsolute: "",
                        formattedPriceIndexedTo100: "",
                        text: "",
                        index: 0
                    }
                }
                _updateRendererData(e, t, i) {
                    const r = this._styleGetter();
                    e.linestyle = r.lineStyle, i.additionalPaddingTop = this._verticalPadding, i.additionalPaddingBottom = this._verticalPadding, super._updateRendererData(e, t, i)
                }
                _priceLineColor(e) {
                    return this._styleGetter().lineColor
                }
                _lineWidth() {
                    return this._source.lineWidth()
                }
                _lineStyle() {
                    return this._styleGetter().lineStyle
                }
                _backgroundAreaHeight() {
                    return this._height
                }
                _isVisible() {
                    return this._showProperty.value()
                }
            }

            function q(e, t, i) {
                if ((0, u.isPositionItem)(i)) {
                    const r = () => (0, v.getDefaultStyleForPositionItem)(i.isBuyDirection(), t.isBlocked(), (() => e.isDark()), i.lineStyle());
                    return {
                        priceAxisView: new G.ItemPriceAxisView(e, i, (() => t.priceScaleFormatter()), r),
                        priceLineAxisView: new H(e, i, t, 19, 0, t.showPositionProperty(), r)
                    }
                }(0, s.assert)((0, p.isOrderLikeItem)(i), "Unexpected traded item type");
                const r = () => (0, y.getDefaultStyleForOrderItem)(i, t, (() => e.isDark()));
                return {
                    priceAxisView: new G.ItemPriceAxisView(e, i, (() => t.priceScaleFormatter()), r),
                    priceLineAxisView: new H(e, i, t, 17, 1, t.showOrderProperty(), r)
                }
            }
            class U {
                constructor(e, t) {
                    this._model = e, this._source = t
                }
                updateAllViews(e) {
                    void 0 !== this._views.main && (this._views.main.priceAxisView.update(e), this._views.main.priceLineAxisView.update(e)),
                        void 0 !== this._views.stopLimit && (this._views.stopLimit.priceAxisView.update(e), this._views.stopLimit.priceLineAxisView.update(e));
                    for (const t of this._views.brackets) t.priceAxisView.update(e), t.priceLineAxisView.update(e);
                    for (const t of this._views.project.brackets) t.priceAxisView.update(e), t.priceLineAxisView.update(e)
                }
                views(e, t) {
                    const i = this._source.movingItem() || null,
                        r = this._source.hoveredItem() || null,
                        s = this._source.selectedItem() || null,
                        o = null !== i ? i.id : null,
                        n = null !== r ? r.id : null,
                        a = null !== s ? s.id : null,
                        d = [],
                        l = [];
                    let c = null,
                        h = null,
                        p = null,
                        u = null,
                        _ = null,
                        m = null;
                    const y = this._views.brackets.slice();
                    y.push(...this._views.project.brackets), this._views.main && y.push(this._views.main), this._views.stopLimit && y.push(this._views.stopLimit);
                    for (const e of y) e.priceAxisView.itemId() === o ? (c = e.priceAxisView, h = e.priceLineAxisView) : e.priceAxisView.itemId() === n ? (p = e.priceAxisView, u = e.priceLineAxisView) : e.priceAxisView.itemId() === a ? (_ = e.priceAxisView, m = e.priceLineAxisView) : (d.push(e.priceAxisView), l.push(e.priceLineAxisView));
                    return null !== _ && null !== m && (d.push(_), l.push(m)), null !== p && null !== u && (d.push(p), l.push(u)), null !== c && null !== h && (d.push(c), l.push(h)), [d, l]
                }
                recreateViews() {
                    const e = this._source.items(),
                        t = e.projectionBrackets.filter((e => null !== e.price())).map((e => q(this._model, this._source, e)));
                    this._views = {
                        brackets: e.brackets.map((e => q(this._model, this._source, e))),
                        project: {
                            brackets: t
                        }
                    }, void 0 !== e.main && (this._views.main = q(this._model, this._source, e.main)), void 0 !== e.stopLimit && (this._views.stopLimit = q(this._model, this._source, e.stopLimit))
                }
            }
            var Q = i(791473),
                Y = i(313178);
            const K = (0, m.isFeatureEnabled)("allow_brackets_profit_loss");

            function Z(e) {
                return e instanceof ee
            }
            const $ = o.t(null, void 0, i(619397)),
                J = o.t(null, void 0, i(360538));

            function X(e) {
                return void 0 !== e && ((0, p.isOrderItemRawData)(e) || (0, p.isPreOrderItemRawData)(e)) && 4 === e.type
            }
            class ee extends n.CustomSourceBase {
                constructor(e, t, i, r, s, o, n, a, d) {
                    super(e, t), this._hadBeenModifiedAllItems = !1, this._isDestroyed = !1, this._bracketStopType = c.StopType.StopLoss, this._items = {
                            brackets: [],
                            projectionBrackets: []
                        }, this._blockedData = null, this._isBlocked = !1, this._mainSeries = t.mainSeries(), this._properties = i, this._globalVisibility = r, this._globalVisibility.subscribe(this.redraw.bind(this)), this._callbacks = o, this._symbolDataProvider = n, this._symbolDataProvider.onUpdate().subscribe(this, (() => {
                            this.items(!0).forEach((e => {
                                e.fireProfitLossChange()
                            })), this.redraw()
                        })), this._qtySuggester = a, this._paneView = new N(this._model, this, d), this._tradedGroupRenderersController = d, this._priceViewsGroup = new U(this._model, this), this._rawDataSpawn = s.spawn(), this._rawDataSpawn.subscribe(this._setData.bind(this)), this._properties.positionPL.visibility.subscribe(this, this.redraw), this._properties.bracketsPL.visibility.subscribe(this, this.redraw), this._properties.positionPL.display.subscribe(this, (() => {
                            this.redraw()
                        })), this._properties.bracketsPL.display.subscribe(this, (() => {
                            this.redraw()
                        })), this._properties.showPositions.subscribe(this, (() => {
                            this._tradedGroupRenderersController.setNoOverlapMode(!1)
                        })),
                        this._properties.showOrders.subscribe(this, (() => {
                            this._tradedGroupRenderersController.setNoOverlapMode(!1)
                        })), this._tradedGroupRenderersController.isInvalidatedWV().subscribe((() => {
                            this._paneView.update(), this._isSourceShouldBeShown() && this._model.updateSource(this)
                        })), this._model.hoveredSourceChanged().subscribe(this, (() => {
                            if (!this._symbolDataProvider.isActualSymbol()) return;
                            const e = this._model.hoveredSource();
                            (null === e || e !== this && Z(e)) && this.redraw()
                        }))
                }
                destroy() {
                    var e, t;
                    this._properties.showOrders.destroy(), this._properties.showPositions.destroy(), this._properties.positionPL.visibility.unsubscribeAll(this), this._properties.positionPL.display.unsubscribeAll(this), this._properties.bracketsPL.visibility.unsubscribeAll(this), this._properties.bracketsPL.display.unsubscribeAll(this), this._rawDataSpawn.destroy(), null === (e = this._items.main) || void 0 === e || e.destroy(), null === (t = this._items.stopLimit) || void 0 === t || t.destroy(), this._items.brackets.forEach((e => e.destroy())), this._items.projectionBrackets.forEach((e => e.destroy())), this._globalVisibility.unsubscribe(), this._paneView.destroy(), this._symbolDataProvider.onUpdate().unsubscribeAll(this), this._symbolDataProvider.destroy(), this._isDestroyed = !0
                }
                isSelectionEnabled() {
                    return !0
                }
                priceScaleFormatter() {
                    return this._mainSeries.formatter()
                }
                showPositionProperty() {
                    return this._properties.showPositions
                }
                showOrderProperty() {
                    return this._properties.showOrders
                }
                bracketStopType() {
                    return this._bracketStopType
                }
                setBracketStopType(e) {
                    this._bracketStopType = e, this._updateProjectionBracketsItems(!0), this.redraw()
                }
                isTrailingStopSupported() {
                    var e;
                    return Boolean(null === (e = this.items().main) || void 0 === e ? void 0 : e.data().supportTrailingStop)
                }
                isReverseVisible() {
                    return this._properties.showReverse.value()
                }
                lineWidth() {
                    return this._properties.lineProperties.width.value()
                }
                lineStyle() {
                    return this._properties.lineProperties.style.value()
                }
                isLineExtended() {
                    return this._properties.lineProperties.extend.value()
                }
                isPositionPLVisible() {
                    return this._properties.positionPL.visibility
                }
                positionDisplayMode() {
                    return this._properties.positionPL.display
                }
                isBracketsPLVisible() {
                    return K ? this._properties.bracketsPL.visibility : null
                }
                bracketsDisplayMode() {
                    return this._properties.bracketsPL.display
                }
                horizontalAlignment() {
                    return this._properties.horizontalAlignment.value()
                }
                isBlocked() {
                    return this._isBlocked
                }
                disabled() {
                    return this.isBlocked()
                }
                hasError() {
                    return !1
                }
                isConfirmButtonOnDomWidget() {
                    return !1
                }
                setIsBlocked(e) {
                    this._isBlocked = e, this.redraw()
                }
                isHovered() {
                    return this._model.hoveredSource() === this
                }
                isHoveredOtherTradedGroup() {
                    return !this.isHovered() && Z(this._model.hoveredSource())
                }
                isSelected() {
                    return this._model.selection().isSelected(this)
                }
                items(e, t) {
                    if (e) {
                        const e = [];
                        return this._items.stopLimit && !(null == t ? void 0 : t.exceptStopLimit) && e.push(this._items.stopLimit), this._items.main && !(null == t ? void 0 : t.exceptMain) && e.push(this._items.main), (null == t ? void 0 : t.exceptBrackets) || e.push(...this._items.brackets), (null == t ? void 0 : t.exceptProjection) || e.push(...this._items.projectionBrackets), e
                    }
                    return this._items
                }
                baseItem() {
                    var e;
                    return null !== (e = this._items.stopLimit) && void 0 !== e ? e : this._items.main
                }
                findItem(e) {
                    const t = this.items(!0).find((t => t.id() === e));
                    return (0, s.assert)(void 0 !== t, `Traded item with id ${e} is not found`), t
                }
                findItemWithType(e, t) {
                    const i = t === h.TradedItemType.Position ? u.isPositionItem : p.isOrderLikeItem;
                    return this.items(!0, {
                        exceptStopLimit: !0
                    }).find((t => i(t) && t.data().id === e))
                }
                movingItem() {
                    const e = this._model.customSourceBeingMoved() === this && this._model.customSourceMovingHitTestData() || null;
                    return null === e || void 0 === e.activeItem ? null : e.activeItem
                }
                hoveredItem() {
                    const e = this._model.hoveredSource() === this && this._model.lastHittestData() || null;
                    return null === e || void 0 === e.activeItem ? null : e.activeItem
                }
                selectedItem() {
                    const e = this._model.selection().isSelected(this) && this._model.lastSelectedHittestData() || null;
                    return null === e || void 0 === e.activeItem ? null : e.activeItem
                }
                priceScale() {
                    return this._mainSeries.priceScale()
                }
                updateAllViews() {
                    this._paneView.update(), this._priceViewsGroup.updateAllViews((0, a.sourceChangeEvent)(this.id()))
                }
                updateViewsForPane(e) {
                    this._isSourceShouldBeShownOnPane(e) && this.updateAllViews()
                }
                paneViews(e) {
                    return this._isSourceShouldBeShownOnPane(e) ? [this._paneView] : []
                }
                priceAxisViews(e, t) {
                    if (!this._isSourceShouldBeShownOnPane(e)) return [];
                    const [i, r] = this._priceViewsGroup.views(e, t);
                    return e.findTargetPriceAxisViews(this, t, i, r)
                }
                redraw() {
                    this.updateAllViews(), this._isSourceShouldBeShown() && this._model.updateSource(this)
                }
                syncData() {
                    this._isDestroyed || (null !== this._blockedData ? (this._setData(this._blockedData), this._blockedData = null) : this._setData(this._rawDataSpawn.value()))
                }
                allItemsSupportMove(e) {
                    if (void 0 === this._items.main) return !1;
                    for (const e of this._items.projectionBrackets)
                        if (null !== e.price()) return !1;
                    return !(e.length < 2) && e.every((e => (0, p.isOrderLikeItem)(e) && e.isMovingEnabled()))
                }
                onMove(e, t, i = !1) {
                    const r = this.findItem(e),
                        o = r.price(),
                        n = this.items(!0);
                    if (i && this.setIsBlocked(!0), t.shiftKey && null !== r.price() && this.allItemsSupportMove(n)) {
                        this._hadBeenModifiedAllItems = !0;
                        const e = (0, s.ensureNotNull)(r.calcPriceDiff(t));
                        n.forEach((t => {
                            (0, u.isProjectionBracketItem)(t) || t.applyPriceDiff(e)
                        })), this._callbacks.hideChartHint()
                    } else r.onMove(t), this._moveOtherProjectionBracketIfNeeded(r);
                    null === o && null !== r.price() && this._priceViewsGroup.recreateViews(), this.redraw()
                }
                _updateStopLimit(e) {
                    const t = this._items.main,
                        i = this._items.stopLimit;
                    X(e.main) && void 0 === i ? this._items.stopLimit = this._createStopLimitItem(e, t) : X(e.main) && void 0 !== i ? i.setData(this._dataForStopLimitOrder(e.main)) : void 0 !== i && (this._convertStopLimitOrderToMainItem(e.main, i), this._deleteStopLimitItem())
                }
                _positionVisibilityGetter() {
                    return this._isSourceShouldBeShown() && this.showPositionProperty().value()
                }
                _orderVisibilityGetter() {
                    return this._isSourceShouldBeShown() && this.showOrderProperty().value()
                }
                _setData(e, t = !0) {
                    var i, o, n, a;
                    if (this.isBlocked()) this._blockedData = e, (0, u.isPositionItem)(this._items.main) && void 0 !== e.main && ((0, s.assert)((0, p.isPositionItemRawData)(e.main)), this._items.main.setData(e.main));
                    else {
                        const s = null !== (a = null !== (o = null === (i = e.main) || void 0 === i ? void 0 : i.symbol) && void 0 !== o ? o : null === (n = e.brackets[0]) || void 0 === n ? void 0 : n.symbol) && void 0 !== a ? a : null;
                        e = (0, r.default)(e), t ? this._updateItems(e) : this._createItems(e), this._updateProjectionBracketsItems(), this._priceViewsGroup.recreateViews(), this._symbolDataProvider.start(s)
                    }
                    this.redraw()
                }
                _processedBracketData(e) {
                    return e
                }
                _createStopLimitItem(e, t) {
                    let i;
                    if (void 0 !== e.main && ((0, p.isOrderItemRawData)(e.main) || (0, p.isPreOrderItemRawData)(e.main)) && ((0, u.isOrderItem)(t) || (0, u.isPreOrderItem)(t)) && 4 === t.type()) {
                        const t = this._dataForStopLimitOrder(e.main);
                        i = (0, _.createItem)(_.TradedGroupItemType.LimitPartStopLimitOrder, t, this, this._model, {
                            itemExternalServices: {
                                symbolDataProvider: this._symbolDataProvider,
                                qtySuggester: this._qtySuggester,
                                tradedGroupRenderersController: this._tradedGroupRenderersController
                            },
                            visibilityGetters: {
                                order: this._orderVisibilityGetter.bind(this),
                                position: this._positionVisibilityGetter.bind(this)
                            },
                            sourceCallbacks: this._callbacks
                        })
                    }
                    return i
                }
                _deleteStopLimitItem() {
                    var e;
                    null === (e = this._items.stopLimit) || void 0 === e || e.destroy(), delete this._items.stopLimit
                }
                _isSourceShouldBeShown() {
                    return !!this._globalVisibility.value() && (!!this._symbolDataProvider.isActualSymbol() && !(window.TradingView.printing && !d.enabled("snapshot_trading_drawings")))
                }
                _getToggleStopTypeMenuHandler() {
                    const e = [{
                        title: $,
                        value: c.StopType.StopLoss
                    }];
                    return this.isTrailingStopSupported() && e.push({
                        title: J,
                        value: c.StopType.TrailingStop
                    }), (t, i, r, s, o) => {
                        var n;
                        const a = this.mainItem();
                        if (t) {
                            const e = a && (0, u.isPositionItem)(a) ? "Chart Position" : "Chart Order";
                            this._callbacks.trackEvent(e, "Stop loss type menu opening", null !== (n = r.label) && void 0 !== n ? n : "")
                        }
                        e.length > 1 && (0, Q.updateDropdownMenu)(t, i, e, this._bracketStopType, "Stop bracket type", (e => this.setBracketStopType(e)), s, o)
                    }
                }
                _moveOtherProjectionBracketIfNeeded(e) {
                    const t = this._items.main;
                    if (!(0, u.isProjectionBracketItem)(e) || void 0 === t || !t.supportOnlyPairBrackets() || this._items.projectionBrackets.length < 2) return;
                    const i = (0, s.ensureNotNull)(t.price()),
                        r = (0, s.ensureNotNull)(e.price()) - i,
                        o = this._items.projectionBrackets.find((t => t !== e));
                    (0, s.ensureDefined)(o).setPrice(i - r)
                }
                _createItems(e) {
                    const t = this._createMainItem(e),
                        i = this._createStopLimitItem(e, t);
                    this._items = {
                        main: t,
                        stopLimit: i,
                        brackets: e.brackets.map((e => this._createBracketItem(e))),
                        projectionBrackets: []
                    }
                }
                _updateItems(e) {
                    void 0 === this._items.main && void 0 !== e.main ? this._items.main = this._createMainItem(e) : void 0 !== this._items.main && void 0 !== e.main ? this._updateMainItem(e.main) : void 0 !== this._items.main && void 0 === e.main && this._deleteMainItem(), this._updateStopLimit(e), this._updateBrackets(e.brackets)
                }
                _updateBrackets(e) {
                    const t = [];
                    this._items.brackets.forEach((i => {
                        const r = e.findIndex((e => e.id === i.data().id)); - 1 !== r ? (i.setData(this._processedBracketData(e[r])), e.splice(r, 1)) : t.push(i)
                    })), t.forEach((e => {
                        const t = this._items.brackets.findIndex((t => t.data().id === e.data().id)); - 1 !== t && (this._items.brackets[t].destroy(), this._items.brackets.splice(t, 1))
                    })), e.forEach((e => {
                        const t = this._createBracketItem(e);
                        this._items.brackets.push(t)
                    }))
                }
                _updateProjectionBracketsItems(e = !1) {
                    const t = this._items.main;
                    if (void 0 === t || !t.supportBrackets()) return;
                    const {
                        takeProfit: i,
                        stopLoss: r,
                        trailingStop: s
                    } = (0, Y.bracketsByType)(this._items.brackets), o = null != r ? r : s, {
                        takeProfit: n,
                        stopLoss: a,
                        trailingStop: d
                    } = (0, Y.bracketsByType)(this._items.projectionBrackets), h = null != a ? a : d;
                    [
                        [i, n],
                        [o, h]
                    ].forEach((([e, t]) => {
                        if (e && t) {
                            const e = this._items.projectionBrackets.indexOf(t);
                            this._items.projectionBrackets[e].destroy(), this._items.projectionBrackets.splice(e, 1)
                        }
                    }));
                    const p = t.data();
                    if (!i && !n) {
                        const e = (0, Y.buildProjectionBracketData)("ProjectionBracket", l.BracketType.TakeProfit, p),
                            t = (0, _.createItem)(_.TradedGroupItemType.ProjectionBracket, e, this, this._model, {
                                itemExternalServices: {
                                    symbolDataProvider: this._symbolDataProvider,
                                    qtySuggester: this._qtySuggester,
                                    tradedGroupRenderersController: this._tradedGroupRenderersController
                                },
                                visibilityGetters: {
                                    order: this._orderVisibilityGetter.bind(this),
                                    position: this._positionVisibilityGetter.bind(this)
                                },
                                sourceCallbacks: this._callbacks
                            });
                        this._items.projectionBrackets.push(t)
                    }
                    if (!o && !h || e) {
                        const e = this._bracketStopType === c.StopType.StopLoss ? l.BracketType.StopLoss : l.BracketType.TrailingStop,
                            t = (0, Y.buildProjectionBracketData)("ProjectionBracket", e, p);
                        if (h) h.setData(t);
                        else {
                            const e = (0, _.createItem)(_.TradedGroupItemType.ProjectionBracket, t, this, this._model, {
                                itemExternalServices: {
                                    symbolDataProvider: this._symbolDataProvider,
                                    qtySuggester: this._qtySuggester,
                                    tradedGroupRenderersController: this._tradedGroupRenderersController
                                },
                                visibilityGetters: {
                                    order: this._orderVisibilityGetter.bind(this),
                                    position: this._positionVisibilityGetter.bind(this)
                                },
                                sourceCallbacks: this._callbacks,
                                menuCallbacks: {
                                    onToggleTypeMenuHandler: this._getToggleStopTypeMenuHandler(),
                                    closeDropdownMenuHandler: Q.closeDropdownMenu
                                }
                            });
                            this._items.projectionBrackets.push(e)
                        }
                    }
                }
                _deleteMainItem() {
                    (0, s.ensureDefined)(this._items.main).destroy(), delete this._items.main, this._deleteStopLimitItem()
                }
                _isSourceShouldBeShownOnPane(e) {
                    return e.containsMainSeries()
                }
            }
        },
        817728: (e, t, i) => {
            "use strict";
            i.d(t, {
                TradedGroupItemType: () => r,
                createItem: () => f
            });
            var r, s = i(650151),
                o = i(822914),
                n = i(524774),
                a = i(506787),
                d = i(771453),
                l = i(396907),
                c = i(628891),
                h = i(123911),
                p = i(646228),
                u = i(933359),
                _ = i(61284),
                m = i(988411),
                y = i.n(m);
            class v {
                constructor(e, t, i) {
                    this._onSuggestedQtyChange = e => {
                        this._lastSuggestedQty = e, this._suggestedQty.setValue(e)
                    }, this._symbol = e, this._suggestedQty = new(y())(t), this._lastSuggestedQty = t, this._qtySuggester = i
                }
                destroy() {
                    var e;
                    null === (e = this._qtySuggesterSubscription) || void 0 === e || e.unsubscribe()
                }
                suggestedQty() {
                    return this._suggestedQty
                }
                applySuggestedQty(e) {
                    void 0 === this._qtySuggesterSubscription && this._subscribeQtySuggester(), this._qtySuggester.setQty(this._symbol, e), this._lastSuggestedQty !== e && this._suggestedQty.setValue(this._lastSuggestedQty, !0)
                }
                async _subscribeQtySuggester() {
                    const e = await this._qtySuggester.getQty(this._symbol);
                    this._suggestedQty.setValue(e), this._qtySuggesterSubscription = this._qtySuggester.suggestedQtyChanged(this._symbol).subscribe(this._onSuggestedQtyChange)
                }
            }

            function f(e, t, i, m, y) {
                const f = m.mainSeries(),
                    k = (e, t) => (0, n.createNoOverlapMenuAction)(y.itemExternalServices.tradedGroupRenderersController, e, t);
                if (e === r.Order && (0, a.isOrderItemRawData)(t)) {
                    const {
                        dataType: e,
                        ...r
                    } = t, s = e => (0, p.getDefaultStyleForOrderItem)(e, i, (() => m.isDark()));
                    return new c.OrderItem(r, i, f, y.itemExternalServices.symbolDataProvider, {
                        displayMode: i.bracketsDisplayMode(),
                        style: s,
                        visibility: y.visibilityGetters.order,
                        noOverlapAction: k
                    }, {
                        trackEvent: y.sourceCallbacks.trackEvent,
                        exitTrackingMode: y.sourceCallbacks.exitTrackingMode
                    }, void 0, y.gaOrigin)
                }
                if (e === r.Position && (0, a.isPositionItemRawData)(t)) {
                    const e = e => (0, h.getDefaultStyleForPositionItem)(e.isBuyDirection(), i.isBlocked(), (() => m.isDark()), e.lineStyle()),
                        {
                            dataType: r,
                            ...s
                        } = t;
                    return new u.PositionItem(s, i, f, y.itemExternalServices.symbolDataProvider, {
                        displayMode: i.positionDisplayMode(),
                        style: e,
                        visibility: y.visibilityGetters.position,
                        noOverlapAction: k
                    }, {
                        trackEvent: y.sourceCallbacks.trackEvent
                    })
                }
                if (e === r.LimitPartStopLimitOrder && (0, a.isOrderItemRawData)(t)) {
                    const e = e => (0, p.getDefaultStyleForOrderItem)(e, i, (() => m.isDark())),
                        r = { ...(0, o.default)(t),
                            price: (0, s.ensureDefined)(t.limitPrice),
                            considerFilledQty: !1
                        },
                        {
                            dataType: n,
                            ...a
                        } = r;
                    let d;
                    if (y.qtyModifyCallbacks) {
                        d = {
                            qtyProvider: new v(a.symbol, a.qty, y.itemExternalServices.qtySuggester),
                            ...(0, s.ensureDefined)(y.qtyModifyCallbacks)
                        }
                    }
                    return new l.LimitPartStopLimitOrderItem(a, i, f, y.itemExternalServices.symbolDataProvider, {
                        displayMode: i.bracketsDisplayMode(),
                        style: e,
                        visibility: y.visibilityGetters.order,
                        noOverlapAction: k
                    }, {
                        trackEvent: y.sourceCallbacks.trackEvent,
                        exitTrackingMode: y.sourceCallbacks.exitTrackingMode
                    }, d)
                }
                if (e === r.ProjectionBracket && (0, a.isOrderItemRawData)(t)) {
                    const {
                        dataType: e,
                        ...r
                    } = t, s = e => (0, p.getDefaultStyleForOrderItem)(e, i, (() => m.isDark()));
                    return new d.ProjectionBracketItem(r, i, f, y.itemExternalServices.symbolDataProvider, {
                        displayMode: i.bracketsDisplayMode(),
                        style: s,
                        visibility: y.visibilityGetters.order,
                        noOverlapAction: k
                    }, {
                        trackEvent: y.sourceCallbacks.trackEvent,
                        exitTrackingMode: y.sourceCallbacks.exitTrackingMode
                    }, y.menuCallbacks)
                }
                if (e === r.PreOrder && (0, a.isPreOrderItemRawData)(t)) {
                    const e = e => (0, p.getDefaultStyleForOrderItem)(e, i, (() => m.isDark())),
                        {
                            dataType: r,
                            ...o
                        } = t,
                        n = new v(o.symbol, o.qty, y.itemExternalServices.qtySuggester);
                    return new _.PreOrderItem(o, i, f, y.itemExternalServices.symbolDataProvider, {
                        displayMode: i.bracketsDisplayMode(),
                        style: e,
                        visibility: y.visibilityGetters.order,
                        noOverlapAction: k
                    }, {
                        trackEvent: y.sourceCallbacks.trackEvent,
                        exitTrackingMode: y.sourceCallbacks.exitTrackingMode
                    }, y.menuCallbacks, {
                        qtyProvider: n,
                        ...(0, s.ensureDefined)(y.qtyModifyCallbacks)
                    })
                }
                throw new Error("Unknown traded item type")
            }! function(e) {
                e[e.Position = 0] = "Position", e[e.Order = 1] = "Order", e[e.LimitPartStopLimitOrder = 2] = "LimitPartStopLimitOrder", e[e.ProjectionBracket = 3] = "ProjectionBracket", e[e.PreOrder = 4] = "PreOrder"
            }(r || (r = {}))
        },
        791473: (e, t, i) => {
            "use strict";
            i.d(t, {
                closeDropdownMenu: () => v,
                updateDropdownMenu: () => f
            });
            var r = i(50959),
                s = i(500962),
                o = i(86441),
                n = i(650151),
                a = i(738133),
                d = i(18182),
                l = i(762852),
                c = i(332585),
                h = i(777491),
                p = i(634993),
                u = i(928089);
            const _ = new WeakMap;

            function m(e) {
                const {
                    position: t,
                    activeItemValue: i,
                    title: s,
                    onClose: o,
                    onDestroy: n,
                    onSelect: m
                } = e, y = e.items.map((e => (_.has(e) || _.set(e, (0, h.randomHash)()), r.createElement(p.PopupMenuItem, {
                    key: _.get(e),
                    onClick: () => {
                        return t = e.value, m(t), void n();
                        var t
                    },
                    label: e.title,
                    isActive: e.value === i
                }))));
                return r.createElement(c.DrawerManager, null, r.createElement(d.MatchMedia, {
                    rule: "screen and (max-width: 430px)"
                }, (e => e ? r.createElement(l.Drawer, {
                    onClose: o,
                    position: "Bottom"
                }, r.createElement(u.ToolWidgetMenuSummary, null, s), y) : r.createElement(a.TooltipPopup, {
                    position: t,
                    onClose: o,
                    onClickOutside: v,
                    onForceClose: n
                }, y))));

                function v(e) {
                    o(e)
                }
            }
            const y = document.createElement("div");

            function v() {
                s.unmountComponentAtNode((0, n.ensureNotNull)(y))
            }

            function f(e, t, i, a, d, l, c, h) {
                if (!e) return;
                const p = {
                    items: i,
                    activeItemValue: a,
                    title: d,
                    onClose: function(e) {
                        if (e) {
                            const t = e.target.getBoundingClientRect() || {
                                left: 0,
                                top: 0
                            };
                            c(new o.Point(e.clientX - t.left, e.clientY - t.top))
                        }
                        s.unmountComponentAtNode((0, n.ensureNotNull)(y))
                    },
                    onDestroy: h,
                    onSelect: l,
                    position: t
                };
                s.render(r.createElement(m, { ...p
                }), y)
            }
        },
        653315: e => {
            e.exports = {
                ar: ["إيقاف الخسارة"],
                ca_ES: "SL",
                cs: "SL",
                de: "SL",
                el: "SL",
                en: "SL",
                es: "SL",
                fa: "SL",
                fr: "SL",
                he_IL: "SL",
                hu_HU: "SL",
                id_ID: "SL",
                it: "SL",
                ja: "SL",
                ko: ["스탑로스"],
                ms_MY: "SL",
                nl_NL: "SL",
                pl: "SL",
                pt: "SL",
                ro: "SL",
                ru: ["СЛ"],
                sv: "SL",
                th: "SL",
                tr: "SL",
                vi: "SL",
                zh: "SL",
                zh_TW: "SL"
            }
        },
        645560: e => {
            e.exports = {
                ar: ["جني الأرباح"],
                ca_ES: "TP",
                cs: "TP",
                de: "TP",
                el: "TP",
                en: "TP",
                es: "TP",
                fa: "TP",
                fr: "TP",
                he_IL: "TP",
                hu_HU: "TP",
                id_ID: "TP",
                it: "TP",
                ja: "TP",
                ko: ["테이크프라핏"],
                ms_MY: "TP",
                nl_NL: "TP",
                pl: "TP",
                pt: "TP",
                ro: "TP",
                ru: ["ТП"],
                sv: "TP",
                th: "TP",
                tr: ["KA"],
                vi: "TP",
                zh: "TP",
                zh_TW: "TP"
            }
        },
        668694: e => {
            e.exports = {
                ar: "TS",
                ca_ES: "TS",
                cs: "TS",
                de: "TS",
                el: "TS",
                en: "TS",
                es: "TS",
                fa: "TS",
                fr: "TS",
                he_IL: "TS",
                hu_HU: "TS",
                id_ID: "TS",
                it: "TS",
                ja: "TS",
                ko: ["트레일링 스탑"],
                ms_MY: "TS",
                nl_NL: "TS",
                pl: "TS",
                pt: "TS",
                ro: "TS",
                ru: ["ТС"],
                sv: "TS",
                th: ["เทรลลิ่งสต๊อป"],
                tr: "TS",
                vi: "TS",
                zh: ["跟踪止损"],
                zh_TW: ["跟踪止損"]
            }
        },
        316075: e => {
            e.exports = {
                ar: ["إلغاء أمر"],
                ca_ES: ["Cancel·lar ordre"],
                cs: "Cancel Order",
                de: ["Auftrag abbrechen"],
                el: "Cancel Order",
                en: "Cancel Order",
                es: ["Cancelar orden"],
                fa: "Cancel Order",
                fr: ["Annuler Ordre"],
                he_IL: ["בטל פקודה"],
                hu_HU: ["Megbízás Törlése"],
                id_ID: ["Batalkan Order"],
                it: ["Annulla ordine"],
                ja: ["注文をキャンセル"],
                ko: ["주문 취소"],
                ms_MY: ["Batalkan Pesanan"],
                nl_NL: "Cancel Order",
                pl: ["Anuluj zlecenie"],
                pt: ["Cancelar ordem"],
                ro: "Cancel Order",
                ru: ["Отменить заявку"],
                sv: ["Avbryt order"],
                th: ["ยกเลิกคำสั่ง"],
                tr: ["Emir İptal"],
                vi: ["Hủy Lệnh"],
                zh: ["取消订单"],
                zh_TW: ["取消報單"]
            }
        },
        555937: e => {
            e.exports = {
                ar: ["إلغاء أمر المشروع"],
                ca_ES: "Cancel project order",
                cs: "Cancel project order",
                de: ["Projekt-Order stornieren"],
                el: "Cancel project order",
                en: "Cancel project order",
                es: ["Cancelar orden de proyecto"],
                fa: "Cancel project order",
                fr: ["Annuler le projet d'ordre"],
                he_IL: ["בטל פקודת פרויקט"],
                hu_HU: "Cancel project order",
                id_ID: ["Batalkan order proyek"],
                it: ["Annulla ordine del progetto"],
                ja: ["プロジェクトオーダーのキャンセル"],
                ko: ["프로젝트 주문 취소"],
                ms_MY: ["Batal pesanan projek"],
                nl_NL: "Cancel project order",
                pl: ["Anuluj projekt zlecenia"],
                pt: ["Cancelar a ordem do projeto"],
                ro: "Cancel project order",
                ru: ["Отменить проектную заявку"],
                sv: ["Avbryt projektorder"],
                th: "Cancel project order",
                tr: ["Proje emrini iptal et"],
                vi: ["Huỷ lệnh dự án"],
                zh: ["取消项目订单"],
                zh_TW: ["取消項目訂單"]
            }
        },
        502861: e => {
            e.exports = {
                ar: ["تغيير نوع الأمر"],
                ca_ES: "Change order type",
                cs: "Change order type",
                de: ["Order-Typ ändern"],
                el: "Change order type",
                en: "Change order type",
                es: ["Cambiar tipo de orden"],
                fa: "Change order type",
                fr: ["Changer le type d'ordre"],
                he_IL: ["שנה סוג הוראה"],
                hu_HU: "Change order type",
                id_ID: ["Ubah tipe order"],
                it: ["Cambia tipo di ordine"],
                ja: ["注文タイプの変更"],
                ko: ["주문 유형 변경"],
                ms_MY: ["Tukar jenis pesanan"],
                nl_NL: "Change order type",
                pl: ["Zmień typ zlecenia"],
                pt: ["Alterar tipo da ordem"],
                ro: "Change order type",
                ru: ["Изменить тип заявки"],
                sv: ["Ändra ordertyp"],
                th: ["เปลี่ยนประเภทของ Stop Order"],
                tr: ["Değişiklik emri türü"],
                vi: ["Thay đổi loại lệnh"],
                zh: ["更改订单类型"],
                zh_TW: ["更改訂單類型"]
            }
        },
        437431: e => {
            e.exports = {
                ar: ["إغلاق صفقة"],
                ca_ES: "Close Position",
                cs: "Close Position",
                de: ["Position Schließen"],
                el: "Close Position",
                en: "Close Position",
                es: ["Cerrar posición"],
                fa: "Close Position",
                fr: ["Fermer la Position"],
                he_IL: ["סגור פוזיציה"],
                hu_HU: ["Záró Pozíció"],
                id_ID: ["Tutup Posisi"],
                it: ["Chiudi posizione"],
                ja: ["ポジション決済"],
                ko: ["포지션 닫기"],
                ms_MY: ["Kedudukan Penutup"],
                nl_NL: "Close Position",
                pl: ["Zamknij pozycję"],
                pt: ["Fechar Posição"],
                ro: "Close Position",
                ru: ["Закрыть позицию"],
                sv: ["Stäng position"],
                th: ["ปิดสถานะ"],
                tr: ["Pozisyonu Kapat"],
                vi: ["Đóng Trạng thái"],
                zh: ["平仓"],
                zh_TW: ["平倉"]
            }
        },
        46742: e => {
            e.exports = {
                ar: ["إضافة أمر إيقاف الخسارة"],
                ca_ES: "Add Stop Loss",
                cs: "Add Stop Loss",
                de: ["Stop Loss hinzufügen"],
                el: "Add Stop Loss",
                en: "Add Stop Loss",
                es: ["Añadir Stop Loss"],
                fa: "Add Stop Loss",
                fr: ["Ajouter Stop Loss"],
                he_IL: ["הוסף סטופ לוס"],
                hu_HU: "Add Stop Loss",
                id_ID: ["Dan Stop Loss"],
                it: ["Aggiungi stop loss"],
                ja: ["損切りを追加"],
                ko: ["스탑 로스 추가"],
                ms_MY: ["Tambah Renti Rugi"],
                nl_NL: "Add Stop Loss",
                pl: ["Dodaj Stop Loss"],
                pt: ["Adcionar Stop Loss"],
                ro: "Add Stop Loss",
                ru: ["Добавить Стоп-лосс"],
                sv: ["Lägg till en stoppförlust"],
                th: ["เพิ่ม Stop Loss"],
                tr: ["Zarar Durdur'u Ekle"],
                vi: ["Thêm Cắt Lỗ"],
                zh: ["添加止损"],
                zh_TW: ["加停損單"]
            }
        },
        223754: e => {
            e.exports = {
                ar: ["إضافة أمر جني الأرباح"],
                ca_ES: "Add Take Profit",
                cs: "Add Take Profit",
                de: ["Take Profit hinzufügen"],
                el: "Add Take Profit",
                en: "Add Take Profit",
                es: ["Añadir Take Profit"],
                fa: "Add Take Profit",
                fr: ["Ajouter Take Profit"],
                he_IL: ["הוסף Take Profit"],
                hu_HU: "Add Take Profit",
                id_ID: ["Dan Take Profit"],
                it: ["Aggiungi take profit"],
                ja: ["利益確定を追加"],
                ko: ["이익 실현 추가"],
                ms_MY: ["Tambah Ambil Untung"],
                nl_NL: "Add Take Profit",
                pl: ["Dodaj Take Profit"],
                pt: ["Adicionar Take Profit"],
                ro: "Add Take Profit",
                ru: ["Добавить Тейк-профит"],
                sv: ["Lägg till vinstuttag"],
                th: ["เพิ่ม Take Profit"],
                tr: ["Kar Al'ı Ekle"],
                vi: ["Thêm Chốt Lời"],
                zh: ["添加止盈"],
                zh_TW: ["增加停利單"]
            }
        },
        416976: e => {
            e.exports = {
                ar: ["أضف أمر الوقف المتحرك"],
                ca_ES: "Add Trailing Stop",
                cs: "Add Trailing Stop",
                de: ["Trailing Stop hinzufügen"],
                el: "Add Trailing Stop",
                en: "Add Trailing Stop",
                es: ["Añadir tope de pérdida dinámico (Trailing Stop)"],
                fa: "Add Trailing Stop",
                fr: ["Ajouter un Trailing stop"],
                he_IL: ["הוסף סטופ נגרר"],
                hu_HU: "Add Trailing Stop",
                id_ID: ["Tambahkan Trailing Stop"],
                it: ["Aggiungi trailing stop"],
                ja: ["トレーリングストップの追加"],
                ko: ["트레이링 스탑 넣기"],
                ms_MY: ["Tambah Hentian Jejak"],
                nl_NL: "Add Trailing Stop",
                pl: ["Dodaj Trailing Stop"],
                pt: ["Adicionar Trailing Stop"],
                ro: "Add Trailing Stop",
                ru: ["Добавить Трейлинг-стоп"],
                sv: ["Lägg till Trailing Stop"],
                th: ["เพิ่มเทลลิ่งสต็อป"],
                tr: ["Takipli Durdurma Ekle"],
                vi: ["Thêm điểm dừng"],
                zh: ["添加追踪止损"],
                zh_TW: ["增加追蹤停損"]
            }
        },
        618156: e => {
            e.exports = {
                ar: ["شراء"],
                ca_ES: "Buy",
                cs: "Buy",
                de: ["Kauf"],
                el: "Buy",
                en: "Buy",
                es: ["Comprar"],
                fa: "Buy",
                fr: "Buy",
                he_IL: ["קניה"],
                hu_HU: ["Vétel"],
                id_ID: ["Pembelian"],
                it: ["Compra"],
                ja: ["買い"],
                ko: ["바이"],
                ms_MY: ["Beli"],
                nl_NL: "Buy",
                pl: ["Kup"],
                pt: ["Compra"],
                ro: "Buy",
                ru: ["Покупать"],
                sv: ["Köp"],
                th: ["ซื้อ"],
                tr: ["Al"],
                vi: ["Mua"],
                zh: ["买入"],
                zh_TW: ["買入"]
            }
        },
        937385: e => {
            e.exports = {
                ar: ["تعديل مشروع الأمر"],
                ca_ES: "Edit project order",
                cs: "Edit project order",
                de: ["Projekt-Order bearbeiten"],
                el: "Edit project order",
                en: "Edit project order",
                es: ["Editar orden de proyecto"],
                fa: "Edit project order",
                fr: ["Modifier le projet d'ordre"],
                he_IL: ["ערוך פקודת פרויקט"],
                hu_HU: "Edit project order",
                id_ID: ["Edit order proyek"],
                it: ["Modifica ordine del progetto"],
                ja: ["プロジェクトオーダーの作成"],
                ko: ["프로젝트 주문 수정"],
                ms_MY: ["Edit pesanan projek"],
                nl_NL: "Edit project order",
                pl: ["Edytuj projekt zlecenia"],
                pt: ["Editar a ordem do projeto"],
                ro: "Edit project order",
                ru: ["Редактировать проектную заявку"],
                sv: ["Redigera projektorder"],
                th: "Edit project order",
                tr: ["Proje emrini değiştir"],
                vi: ["Chỉnh sửa lệnh dự án"],
                zh: ["编辑项目订单"],
                zh_TW: ["編輯項目訂單"]
            }
        },
        137172: e => {
            e.exports = {
                ar: ["تعديل الأمر..."],
                ca_ES: "Modify Order...",
                cs: "Modify Order...",
                de: ["Order modifizieren..."],
                el: "Modify Order...",
                en: "Modify Order...",
                es: ["Modificar orden..."],
                fa: "Modify Order...",
                fr: ["Modifier l'ordre..."],
                he_IL: ["שנה הוראה..."],
                hu_HU: "Modify Order...",
                id_ID: ["Memodifikasi Order..."],
                it: ["Modifica ordine..."],
                ja: ["注文の変更..."],
                ko: ["오더 고치기..."],
                ms_MY: ["Ubah Suai Pesanan..."],
                nl_NL: "Modify Order...",
                pl: ["Modyfikuj zlecenie..."],
                pt: ["Modificar ordem..."],
                ro: "Modify Order...",
                ru: ["Изменить заявку..."],
                sv: ["Ändra order..."],
                th: ["แก้ไขออเดอร์..."],
                tr: ["Emir Değiştir..."],
                vi: ["Chỉnh Lệnh..."],
                zh: ["调整订单..."],
                zh_TW: ["修改訂單..."]
            }
        },
        305806: e => {
            e.exports = {
                ar: ["تعديل الأمر"],
                ca_ES: "Modify order",
                cs: "Modify order",
                de: ["Order bearbeiten"],
                el: "Modify order",
                en: "Modify order",
                es: ["Modificar orden"],
                fa: "Modify order",
                fr: ["Modifier l'ordre"],
                he_IL: ["שנה פקודה"],
                hu_HU: "Modify order",
                id_ID: ["Ubah order"],
                it: ["Modifica ordine"],
                ja: ["注文を変更する"],
                ko: ["모디파이 오더"],
                ms_MY: ["Ubah suai pesanan"],
                nl_NL: "Modify order",
                pl: ["Modyfikuj zlecenie"],
                pt: ["Modificar ordem"],
                ro: "Modify order",
                ru: ["Изменить заявку"],
                sv: ["Ändra order"],
                th: ["เปลี่ยนแปลงออร์เดอร์"],
                tr: ["Emri değiştir"],
                vi: ["Điều chỉnh lệnh"],
                zh: ["修改订单"],
                zh_TW: ["修改訂單"]
            }
        },
        376303: e => {
            e.exports = {
                ar: ["لا توجد أوامر ومراكز متداخلة"],
                ca_ES: "No overlap orders and positions",
                cs: "No overlap orders and positions",
                de: ["Keine Überschneidungen von Aufträgen und Positionen"],
                el: "No overlap orders and positions",
                en: "No overlap orders and positions",
                es: ["No hay solapamiento de órdenes y posiciones"],
                fa: "No overlap orders and positions",
                fr: ["Pas de chevauchement des ordres et des positions"],
                he_IL: ["אין פקודות ותפקידים חופפים"],
                hu_HU: "No overlap orders and positions",
                id_ID: ["Tidak ada order dan posisi yang tumpang tindih"],
                it: ["No ordini sovrapposti"],
                ja: ["注文やポジションを重ねない"],
                ko: ["겹치는 주문 및 포지션이 없습니다."],
                ms_MY: ["Tiada pesanan dan posisi bertindan"],
                nl_NL: "No overlap orders and positions",
                pl: ["Brak nakładających się zleceń i pozycji"],
                pt: ["Sem sobreposição de ordens e posições"],
                ro: "No overlap orders and positions",
                ru: ["Не перекрывать заявки и позиции"],
                sv: ["Inga överlappande ordrar eller positioner"],
                th: ["ไม่มีออร์เดอร์และโพสิชั่นที่ทับซ้อนกัน"],
                tr: ["Çakışan emir ve pozisyon yok"],
                vi: ["Không có lệnh và vị thế trùng lặp"],
                zh: ["无重叠订单和仓位"],
                zh_TW: ["無重疊訂單和部位"]
            }
        },
        392553: e => {
            e.exports = {
                ar: ["بيع"],
                ca_ES: "Sell",
                cs: "Sell",
                de: ["Verkauf"],
                el: "Sell",
                en: "Sell",
                es: ["Vender"],
                fa: "Sell",
                fr: ["Vendre"],
                he_IL: ["מכירה"],
                hu_HU: ["Eladás"],
                id_ID: ["Penjualan"],
                it: ["Vendi"],
                ja: ["売り"],
                ko: ["셀"],
                ms_MY: ["Jual"],
                nl_NL: "Sell",
                pl: ["Sprzedaj"],
                pt: ["Venda"],
                ro: "Sell",
                ru: ["Продавать"],
                sv: ["Sälj"],
                th: ["ขาย"],
                tr: ["Sat"],
                vi: ["Bán"],
                zh: ["卖出"],
                zh_TW: ["賣出"]
            }
        },
        619397: e => {
            e.exports = {
                ar: ["وقف الخسارة"],
                ca_ES: "Stop loss",
                cs: "Stop loss",
                de: ["Stop-Loss"],
                el: "Stop loss",
                en: "Stop loss",
                es: ["Stop Loss"],
                fa: "Stop loss",
                fr: ["Stop Loss"],
                he_IL: ["סטופ לוס"],
                hu_HU: "Stop loss",
                id_ID: ["Stop Loss"],
                it: "Stop loss",
                ja: ["損切り"],
                ko: ["스탑로스"],
                ms_MY: ["Renti Rugi"],
                nl_NL: ["Stop-loss"],
                pl: ["Stop Loss"],
                pt: ["Stop Loss"],
                ro: ["Stop Loss"],
                ru: ["Стоп-лосс"],
                sv: ["Stop Loss"],
                th: ["ตัดขาดทุน"],
                tr: ["Zarar Durdur"],
                vi: ["Cắt lỗ"],
                zh: ["止损"],
                zh_TW: ["停損"]
            }
        },
        911810: e => {
            e.exports = {
                ar: ["حماية المركز"],
                ca_ES: "Protect Position",
                cs: "Protect Position",
                de: ["Position absichern"],
                el: "Protect Position",
                en: "Protect Position",
                es: ["Proteger posición"],
                fa: "Protect Position",
                fr: ["Protéger la position"],
                he_IL: ["הגן על הפוזיציה."],
                hu_HU: "Protect Position",
                id_ID: ["Lindungi Posisi"],
                it: ["Proteggi posizione"],
                ja: ["ポジション保護"],
                ko: ["프로텍트 포지션"],
                ms_MY: ["Melindungi Kedudukan"],
                nl_NL: "Protect Position",
                pl: ["Zabezpiecz pozycję"],
                pt: ["Proteger a posição"],
                ro: "Protect Position",
                ru: ["Защитить позицию"],
                sv: ["Skydda position"],
                th: ["ป้องกันโพซิชั่น"],
                tr: ["Pozisyonu Koru"],
                vi: ["Bảo vệ Vị thế"],
                zh: ["保护持仓"],
                zh_TW: ["保護倉位"]
            }
        },
        888310: e => {
            e.exports = {
                ar: ["حماية المركز"],
                ca_ES: "Protect position",
                cs: "Protect position",
                de: ["Position absichern"],
                el: "Protect position",
                en: "Protect position",
                es: ["Proteger posición"],
                fa: "Protect position",
                fr: ["Protéger la position"],
                he_IL: ["הגן על הפוזיציה."],
                hu_HU: "Protect position",
                id_ID: ["Lindungi posisi"],
                it: ["Proteggi posizione"],
                ja: ["ポジション保護"],
                ko: ["포지션 보호"],
                ms_MY: ["Lindungi kedudukan"],
                nl_NL: "Protect position",
                pl: ["Zabezpiecz pozycję"],
                pt: ["Posição do projeto"],
                ro: "Protect position",
                ru: ["Защитить позицию"],
                sv: ["Skydda position"],
                th: "Protect position",
                tr: ["Pozisyonu koru"],
                vi: ["Bảo vị vị thế"],
                zh: ["保护仓位"],
                zh_TW: ["保護部位"]
            }
        },
        419780: e => {
            e.exports = {
                ar: ["عكس الصفقة"],
                ca_ES: "Reverse Position",
                cs: "Reverse Position",
                de: ["Position Umkehren"],
                el: "Reverse Position",
                en: "Reverse Position",
                es: ["Revertir posición"],
                fa: "Reverse Position",
                fr: ["Inverser la Position"],
                he_IL: ["הפוך פוזיציה"],
                hu_HU: ["Fordított Pozíció"],
                id_ID: ["Membalik Posisi"],
                it: ["Inverti posizione"],
                ja: ["ポジションを反転"],
                ko: ["리버스 포지션"],
                ms_MY: ["Kedudukan Terbalik"],
                nl_NL: "Reverse Position",
                pl: ["Odwróć pozycje"],
                pt: ["Reverter Posição"],
                ro: "Reverse Position",
                ru: ["Перевернуть позицию"],
                sv: ["Omvänd position"],
                th: ["ตำแหน่งการย้อนกลับ"],
                tr: ["Karşıt Pozisyon"],
                vi: ["Vị thế Đảo ngược"],
                zh: ["平仓反手"],
                zh_TW: ["平倉反手"]
            }
        },
        360538: e => {
            e.exports = {
                ar: ["وقف الخسارة المتحرك"],
                ca_ES: "Trailing stop",
                cs: ["Trailing Stop"],
                de: ["Trailing Stop"],
                el: ["Trailing Stop"],
                en: "Trailing stop",
                es: ["Tope de pérdida dinámico"],
                fa: ["Trailing Stop"],
                fr: ["Trailing Stop"],
                he_IL: ["טריילינג-סטופ"],
                hu_HU: ["Trailing Stop"],
                id_ID: ["Trailing Stop"],
                it: ["Trailing Stop"],
                ja: ["トレーリングストップ"],
                ko: ["트레일링 스탑"],
                ms_MY: ["Jejakan Renti"],
                nl_NL: ["Trailing Stop"],
                pl: ["Zlecenie Trailing Stop"],
                pt: ["Trailing Stop"],
                ro: ["Trailing Stop"],
                ru: ["Трейлинг-стоп"],
                sv: ["Efterföljande stopp"],
                th: ["การเลื่อนจุดตัดขาดทุน"],
                tr: ["İz süren Stop"],
                vi: ["Lệnh cắt lỗ dưới"],
                zh: ["跟踪止损"],
                zh_TW: ["移動停損"]
            }
        },
        777772: e => {
            e.exports = {
                ar: ["‎{pips}‎ نقطة", "‎{pips}‎ نقطة", "‎{pips}‎ نقطة", "‎{pips}‎ نقاط", "‎{pips}‎ نقطة", "‎{pips}‎ نقطة"],
                ca_ES: "{pips} pip",
                cs: "{pips} pip",
                de: ["{pips} Pip", "{pips} Pips"],
                el: "{pips} pip",
                en: "{pips} pip",
                es: "{pips} pip",
                fa: ["{pips} pips"],
                fr: "{pips} pip",
                he_IL: ["פיפ {pips}", "פיפס {pips}", "פיפס {pips}", "פיפס {pips}"],
                hu_HU: ["{pips} pips"],
                id_ID: "{pips} pip",
                it: "{pips} pip",
                ja: ["{pips}pips"],
                ko: ["{pips} 핍"],
                ms_MY: "{pips} pip",
                nl_NL: "{pips} pip",
                pl: "{pips} pip",
                pt: "{pips} pip",
                ro: "{pips} pip",
                ru: ["{pips} пипс", "{pips} пипса", "{pips} пипсов", "{pips} пипсов"],
                sv: "{pips} pip",
                th: "{pips} pip",
                tr: "{pips} pip",
                vi: "{pips} pip",
                zh: ["{pips}点"],
                zh_TW: ["{pips}點"]
            }
        },
        564225: e => {
            e.exports = {
                ar: ["‎{ticks}‎ تيك", "‎{ticks}‎ تيك", "‎{ticks}‎ تيك", "‎{ticks}‎ تيك", "‎{ticks}‎ تيك‏", "‎{ticks}‎ تيك"],
                ca_ES: "{ticks} tick",
                cs: "{ticks} tick",
                de: ["{ticks} Tick", "{ticks} Ticks"],
                el: "{ticks} tick",
                en: "{ticks} tick",
                es: "{ticks} tick",
                fa: ["{ticks} ticks"],
                fr: "{ticks} tick",
                he_IL: ["טיק‎{ticks}‎", "טיקים ‎{ticks}‎", "טיקים ‎{ticks}‎", "טיקים ‎{ticks}‎"],
                hu_HU: ["{ticks} ticks"],
                id_ID: "{ticks} tick",
                it: "{ticks} tick",
                ja: ["{ticks}ティック"],
                ko: ["{ticks} 틱"],
                ms_MY: "{ticks} tick",
                nl_NL: "{ticks} tick",
                pl: "{ticks} tick",
                pt: "{ticks} tick",
                ro: "{ticks} tick",
                ru: ["{ticks} тик", "{ticks} тика", "{ticks} тиков", "{ticks} тиков"],
                sv: "{ticks} tick",
                th: "{ticks} tick",
                tr: ["{ticks} çubuk", "{ticks} çubuk"],
                vi: "{ticks} tick",
                zh: ["{ticks}ticks"],
                zh_TW: ["{ticks}ticks"]
            }
        }
    }
]);
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [90799], {
        88987: e => {
            e.exports = {
                wrap: "wrap-uFE8C8hG",
                input: "input-uFE8C8hG",
                box: "box-uFE8C8hG",
                hoverDot: "hoverDot-uFE8C8hG",
                red: "red-uFE8C8hG",
                blue: "blue-uFE8C8hG",
                green: "green-uFE8C8hG",
                orange: "orange-uFE8C8hG",
                purple: "purple-uFE8C8hG",
                cyan: "cyan-uFE8C8hG",
                pink: "pink-uFE8C8hG",
                large: "large-uFE8C8hG",
                pickerDot: "pickerDot-uFE8C8hG"
            }
        },
        752022: e => {
            e.exports = {
                wrapper: "wrapper-iqgBiQcZ",
                buttons: "buttons-iqgBiQcZ",
                colorSelectButton: "colorSelectButton-iqgBiQcZ"
            }
        },
        218724: e => {
            e.exports = {
                wrapper: "wrapper-AE6toMmz",
                selector: "selector-AE6toMmz",
                arrowLeft: "arrowLeft-AE6toMmz",
                colorSelectButton: "colorSelectButton-AE6toMmz",
                popup: "popup-AE6toMmz"
            }
        },
        756982: e => {
            e.exports = {
                wrap: "wrap-zs6LaC_B",
                uiMarker: "uiMarker-zs6LaC_B",
                red: "red-zs6LaC_B",
                blue: "blue-zs6LaC_B",
                green: "green-zs6LaC_B",
                orange: "orange-zs6LaC_B",
                purple: "purple-zs6LaC_B",
                cyan: "cyan-zs6LaC_B",
                pink: "pink-zs6LaC_B",
                uiMarker__small: "uiMarker__small-zs6LaC_B"
            }
        },
        645469: e => {
            e.exports = {
                "tablet-normal-breakpoint": "screen and (max-width: 768px)",
                "small-height-breakpoint": "screen and (max-height: 360px)",
                "tablet-small-breakpoint": "screen and (max-width: 430px)"
            }
        },
        153716: e => {
            e.exports = {
                container: "container-KVLHJAeI",
                visible: "visible-KVLHJAeI",
                forceVisible: "forceVisible-KVLHJAeI"
            }
        },
        768550: e => {
            e.exports = {
                item: "item-bWEYVlEJ",
                interactive: "interactive-bWEYVlEJ",
                hovered: "hovered-bWEYVlEJ",
                disabled: "disabled-bWEYVlEJ",
                active: "active-bWEYVlEJ",
                shortcut: "shortcut-bWEYVlEJ",
                normal: "normal-bWEYVlEJ",
                big: "big-bWEYVlEJ",
                iconCell: "iconCell-bWEYVlEJ",
                icon: "icon-bWEYVlEJ",
                checkmark: "checkmark-bWEYVlEJ",
                content: "content-bWEYVlEJ",
                label: "label-bWEYVlEJ",
                checked: "checked-bWEYVlEJ",
                toolbox: "toolbox-bWEYVlEJ",
                showToolboxOnHover: "showToolboxOnHover-bWEYVlEJ",
                arrowIcon: "arrowIcon-bWEYVlEJ",
                subMenu: "subMenu-bWEYVlEJ",
                invisibleHotkey: "invisibleHotkey-bWEYVlEJ"
            }
        },
        503651: e => {
            e.exports = {
                item: "item-X2LmiiGx",
                emptyIcons: "emptyIcons-X2LmiiGx",
                loading: "loading-X2LmiiGx",
                disabled: "disabled-X2LmiiGx",
                interactive: "interactive-X2LmiiGx",
                hovered: "hovered-X2LmiiGx",
                normal: "normal-X2LmiiGx",
                big: "big-X2LmiiGx",
                icon: "icon-X2LmiiGx",
                label: "label-X2LmiiGx",
                title: "title-X2LmiiGx",
                nested: "nested-X2LmiiGx",
                shortcut: "shortcut-X2LmiiGx",
                remove: "remove-X2LmiiGx"
            }
        },
        481956: e => {
            e.exports = {
                separator: "separator-blm_vtaP"
            }
        },
        945966: e => {
            e.exports = {
                "default-drawer-min-top-distance": "100px",
                wrap: "wrap-yBUNQyVA",
                positionBottom: "positionBottom-yBUNQyVA",
                backdrop: "backdrop-yBUNQyVA",
                drawer: "drawer-yBUNQyVA",
                positionLeft: "positionLeft-yBUNQyVA"
            }
        },
        190948: e => {
            e.exports = {
                icon: "icon-XIHzWm6B",
                dropped: "dropped-XIHzWm6B"
            }
        },
        559986: (e, t, o) => {
            "use strict";
            o.d(t, {
                LIST_START: () => s,
                getTargetIndex: () => r
            });
            const s = Symbol();

            function r(e, t, o) {
                const r = void 0 === o ? void 0 !== t ? e.indexOf(t) : void 0 : o === s ? 0 : e.indexOf(o) + 1;
                return -1 !== r ? r : void 0
            }
        },
        199669: (e, t, o) => {
            "use strict";

            function s(e) {
                const {
                    id: t,
                    event: o,
                    channel: s,
                    filter: r
                } = e;
                return e => (s.on(o, (o => {
                    const {
                        action: s,
                        emitter: n
                    } = JSON.parse(o);
                    n !== t && r(s) && e.dispatch({ ...s,
                        payload: { ...s.payload,
                            silent: !0
                        }
                    })
                })), e => n => {
                    const l = e(n);
                    return r(n) && (n.payload.silent || s.emit(o, JSON.stringify({
                        action: n,
                        emitter: t
                    }))), l
                })
            }
            o.d(t, {
                createCrossTabSyncMiddleware: () => s
            })
        },
        797035: (e, t, o) => {
            "use strict";
            o.d(t, {
                ListColor: () => s,
                LIST_COLORS: () => u,
                isListColor: () => d,
                markMany: () => y,
                setup: () => g,
                reset: () => _,
                remove: () => f,
                rename: () => E,
                changeDescription: () => k,
                renameSeparator: () => w,
                shiftCommand: () => x,
                share: () => S,
                reducer: () => L,
                createCrossTabSyncMiddleware: () => N,
                getSymbolColor: () => M,
                getListByColor: () => B,
                getSymbolsByColor: () => D,
                getCommands: () => I,
                getTimestamp: () => T
            });
            var s, r = o(826300),
                n = o(438253),
                l = o(650151),
                i = o(199669),
                a = o(50991),
                c = o(340958),
                m = o(173777),
                h = o(559986);
            ! function(e) {
                e.Red = "red", e.Blue = "blue", e.Green = "green", e.Orange = "orange", e.Purple = "purple", e.Cyan = "cyan", e.Pink = "pink"
            }(s || (s = {}));
            const u = [s.Red, s.Blue, s.Green, s.Orange, s.Purple, s.Cyan, s.Pink];

            function d(e) {
                return new Set(u).has(e)
            }
            const p = {
                lists: {
                    colors: [],
                    byColor: {},
                    bySymbol: {}
                },
                commands: [],
                timestamp: null
            };

            function v(e, t) {
                const {
                    lists: o
                } = e, s = o.byColor[t];
                s && 0 === s.symbols.length && (o.colors = o.colors.filter((e => e !== t)))
            }

            function b(e) {
                return (0, m.isSeparatorItem)(e)
            }
            const C = (0, r.createSlice)({
                    name: "marked-lists",
                    initialState: p,
                    reducers: {
                        setup: (e, t) => {
                            const {
                                lists: o,
                                timestamp: s
                            } = t.payload, r = {
                                lists: {
                                    colors: [],
                                    byColor: {},
                                    bySymbol: {}
                                },
                                commands: [],
                                timestamp: null
                            };
                            r.timestamp = s;
                            for (const e of function(e, t) {
                                    return [...e].sort(((e, o) => t.indexOf(e.color) - t.indexOf(o.color)))
                                }(o, u)) {
                                const t = e.symbols.filter((t => void 0 === r.lists.bySymbol[t] && (b(t) || (r.lists.bySymbol[t] = e.color), !0)));
                                r.lists.byColor[e.color] = {
                                    color: e.color,
                                    name: e.name,
                                    description: e.description,
                                    shared: e.shared,
                                    symbols: t
                                }, t.length > 0 && r.lists.colors.push(e.color)
                            }
                            return r
                        },
                        remove: (e, t) => {
                            const {
                                color: o,
                                symbols: s,
                                silent: r
                            } = t.payload, {
                                lists: i,
                                commands: a
                            } = e, m = i.byColor[o];
                            if (void 0 === m || 0 === m.symbols.length) return;
                            const h = new Set(s),
                                u = m.symbols.filter((e => !h.has(e)));
                            if (!(0, c.equalArrays)(u, m.symbols)) {
                                m.symbols = u;
                                for (const e of h) delete i.bySymbol[e];
                                r || a.push({
                                    type: "remove",
                                    color: o,
                                    symbols: [...h],
                                    prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                                }), v(e, o)
                            }
                        },
                        markMany: (e, t) => {
                            const {
                                color: o,
                                before: s,
                                silent: r
                            } = t.payload, {
                                lists: i,
                                commands: a
                            } = e, {
                                unique: m,
                                exclusions: u
                            } = function(e, t) {
                                var o;
                                const {
                                    color: s,
                                    symbols: r,
                                    separators: n
                                } = t.payload, {
                                    lists: i
                                } = e, a = {}, c = new Set, m = e => b(e) ? ((0, l.assert)(null !== s), s) : i.bySymbol[e];
                                for (let e = 0; e < r.length; ++e) {
                                    const t = r[e];
                                    if (c.has(t) || b(t) && !n) continue;
                                    c.add(t);
                                    const s = m(t);
                                    void 0 !== s && (a[s] = null !== (o = a[s]) && void 0 !== o ? o : new Set).add(t)
                                }
                                return {
                                    exclusions: a,
                                    unique: c
                                }
                            }(e, t);
                            if (0 === m.size) return;
                            const d = function(e, t, o, s) {
                                const {
                                    color: r,
                                    before: n
                                } = t.payload, {
                                    lists: l
                                } = e;
                                let i;
                                if (null !== r && void 0 !== n && o.has(n)) {
                                    const e = l.byColor[r];
                                    if (void 0 !== e) {
                                        i = s;
                                        for (let t = e.symbols.indexOf(n); t >= 0; --t)
                                            if (!o.has(e.symbols[t])) {
                                                i = e.symbols[t];
                                                break
                                            }
                                    }
                                }
                                return i
                            }(e, t, m, h.LIST_START);
                            if (null !== o && void 0 !== u[o] && 1 === Object.keys(u).length) {
                                const t = i.byColor[o];
                                (0, l.assert)(void 0 !== t);
                                const p = t.symbols.filter((e => !m.has(e))),
                                    C = (0, h.getTargetIndex)(p, s, d);
                                if (void 0 === C ? p.push(...m) : p.splice(C, 0, ...m), (0, c.equalArrays)(p, t.symbols)) return; {
                                    const s = u[o];
                                    (0,
                                        l.assert)(void 0 !== s), t.symbols = p;
                                    for (const e of s) delete i.bySymbol[e];
                                    for (const e of m) b(e) || (i.bySymbol[e] = o);
                                    return v(e, o), void(r || a.push({
                                        type: "replace",
                                        color: o,
                                        symbols: [...t.symbols],
                                        prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                                    }))
                                }
                            }
                            for (const t in u) {
                                if (!u.hasOwnProperty(t)) continue;
                                const o = u[t];
                                (0, l.assert)(void 0 !== o);
                                const s = i.byColor[t];
                                (0, l.assert)(void 0 !== s), s.symbols = s.symbols.filter((e => !o.has(e) || (delete i.bySymbol[e], !1))), v(e, t)
                            }
                            if (null === o) return void(r || a.push({
                                type: "reset",
                                symbols: [...m],
                                prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                            }));
                            const p = i.byColor[o];
                            if (i.colors.includes(o)) {
                                (0, l.assert)(void 0 !== p);
                                const t = (0, h.getTargetIndex)(p.symbols, s, d);
                                void 0 === t ? (p.symbols.push(...m), r || (void 0 === u[o] ? a.push({
                                    type: "append",
                                    color: o,
                                    symbols: [...m],
                                    prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                                }) : a.push({
                                    type: "replace",
                                    color: o,
                                    symbols: [...p.symbols],
                                    prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                                }))) : (p.symbols.splice(t, 0, ...m), r || a.push({
                                    type: "replace",
                                    color: o,
                                    symbols: [...p.symbols],
                                    prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                                }))
                            } else void 0 === p ? i.byColor[o] = {
                                color: o,
                                symbols: [...m],
                                name: null,
                                description: null,
                                shared: !1
                            } : p.symbols = [...m], i.colors.push(o), r || a.push({
                                type: "append",
                                color: o,
                                symbols: [...m],
                                prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                            });
                            for (const e of m) b(e) || (i.bySymbol[e] = o)
                        },
                        renameSeparator: (e, t) => {
                            const {
                                color: o,
                                separator: s,
                                name: r,
                                silent: i
                            } = t.payload;
                            if (s === r || !b(s) || !b(r)) return;
                            const a = e.lists.byColor[o];
                            (0, l.assert)(void 0 !== a);
                            const c = a.symbols.indexOf(s); - 1 !== c && -1 === a.symbols.indexOf(r) && (a.symbols.splice(c, 1, r), i || e.commands.push({
                                type: "replace",
                                color: o,
                                symbols: a.symbols,
                                prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                            }))
                        },
                        rename: (e, t) => {
                            const {
                                name: o,
                                color: s,
                                silent: r
                            } = t.payload, i = e.lists.byColor[s];
                            (0, l.assert)(void 0 !== i), i.name !== o && (i.name = o, r || e.commands.push({
                                type: "rename",
                                color: s,
                                name: o,
                                prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                            }))
                        },
                        changeDescription: (e, t) => {
                            const {
                                color: o,
                                description: s,
                                silent: r
                            } = t.payload, i = e.lists.byColor[o];
                            (0, l.assert)(void 0 !== i), i.description !== s && (i.description = s, r || e.commands.push({
                                type: "change-description",
                                color: o,
                                description: s,
                                prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                            }))
                        },
                        reset: (e, t) => {
                            const {
                                silent: o
                            } = t.payload, {
                                lists: s
                            } = e;
                            for (const e of u) {
                                const t = s.byColor[e];
                                void 0 !== t && (t.symbols = [])
                            }
                            s.colors = [], s.bySymbol = {}, o || e.commands.push({
                                type: "reset-all",
                                prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                            })
                        },
                        share: (e, t) => {
                            const {
                                lists: o,
                                commands: s
                            } = e, {
                                shared: r,
                                color: i,
                                silent: a
                            } = t.payload, c = o.byColor[i];
                            void 0 !== c && c.shared !== r && (c.shared = r, a || s.push({
                                type: "share",
                                color: i,
                                shared: r,
                                prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                            }))
                        },
                        shiftCommand: (e, t) => {
                            const {
                                count: o
                            } = t.payload;
                            e.commands.splice(0, o)
                        }
                    }
                }),
                {
                    markMany: y,
                    setup: g,
                    reset: _,
                    remove: f,
                    rename: E,
                    changeDescription: k,
                    renameSeparator: w,
                    shiftCommand: x,
                    share: S
                } = C.actions,
                {
                    reducer: L
                } = C;

            function N(e, t, o = C) {
                return (0, i.createCrossTabSyncMiddleware)({
                    id: e,
                    channel: t,
                    event: "marked-list-cross-tab-sync",
                    filter: e => function(e, t) {
                        return t.actions.markMany.match(e) || t.actions.rename.match(e) || t.actions.changeDescription.match(e) || t.actions.remove.match(e) || t.actions.setup.match(e) || t.actions.renameSeparator.match(e) || t.actions.reset.match(e) || t.actions.share.match(e)
                    }(e, o)
                })
            }

            function M(e, t) {
                var o;
                return null !== (o = e.lists.bySymbol[a.qualified.cast(t)]) && void 0 !== o ? o : null
            }

            function B(e, t) {
                var o;
                return null !== (o = e.lists.byColor[t]) && void 0 !== o ? o : null
            }

            function D(e, t) {
                var o, s;
                return null !== (s = null === (o = B(e, t)) || void 0 === o ? void 0 : o.symbols) && void 0 !== s ? s : null
            }

            function I(e) {
                return e.commands
            }

            function T(e) {
                return e.timestamp
            }
        },
        50991: (e, t, o) => {
            "use strict";
            o.d(t, {
                qualified: () => s
            });
            const s = {
                cast: e => e,
                castMany: e => e.map(s.cast)
            }
        },
        340958: (e, t, o) => {
            "use strict";

            function s(e, t) {
                if (e.length !== t.length) return !1;
                for (let o = 0; o < e.length; ++o)
                    if (e[o] !== t[o]) return !1;
                return !0
            }
            o.d(t, {
                equalArrays: () => s
            })
        },
        428019: (e, t, o) => {
            "use strict";
            o.d(t, {
                ColorSelector: () => v
            });
            var s, r = o(50959),
                n = o(797035),
                l = o(451608),
                i = o(497754),
                a = o.n(i),
                c = o(83436),
                m = o(948019),
                h = o(676809),
                u = o(24122),
                d = o(88987);
            const p = (0, l.makeSwitchGroupItem)(((s = class extends r.PureComponent {
                constructor() {
                    super(...arguments), this._onClickIfChecked = () => {
                        this.props.onClickIfChecked && this.props.onClickIfChecked(this.props.value)
                    }, this._onChange = () => {
                        this.props.onChange && this.props.onChange(this.props.value)
                    }
                }
                render() {
                    var e, t;
                    const {
                        className: o,
                        value: s,
                        name: n,
                        checked: l
                    } = this.props, i = null !== (t = null === (e = this.context) || void 0 === e ? void 0 : e.type) && void 0 !== t ? t : "menu", m = s;
                    return r.createElement("label", {
                        className: a()(o, d.wrap, "drawer" === i && d.large)
                    }, r.createElement("input", {
                        className: d.input,
                        type: "radio",
                        name: n,
                        value: s,
                        checked: l,
                        onChange: this._onChange,
                        onClick: l ? this._onClickIfChecked : void 0
                    }), r.createElement("div", {
                        className: a()(d.box, d[m], "drawer" === i && d.large)
                    }, l ? r.createElement(c.Icon, {
                        icon: h
                    }) : r.createElement("div", {
                        className: d.pickerDot
                    }, r.createElement(c.Icon, {
                        className: d.hoverDot,
                        icon: u
                    }))))
                }
            }).contextType = m.ContextMenuContext, s.defaultProps = {
                value: n.ListColor.Red
            }, s));
            class v extends r.PureComponent {
                constructor() {
                    super(...arguments), this._onChange = e => {
                        this.props.onChange && this.props.onChange(e)
                    }
                }
                render() {
                    const {
                        buttonClassName: e,
                        value: t,
                        onSelectedClick: o
                    } = this.props, s = n.LIST_COLORS.map(((t, s) => r.createElement(p, {
                        className: e,
                        onClickIfChecked: o,
                        key: s,
                        value: t
                    })));
                    return r.createElement(l.SwitchGroup, {
                        name: "color-selector",
                        onChange: this._onChange,
                        values: [t || ""]
                    }, s)
                }
            }
        },
        795434: (e, t, o) => {
            "use strict";
            o.d(t, {
                LabelColorSelector: () => i
            });
            var s = o(50959),
                r = o(428019),
                n = o(587080),
                l = o(752022);
            class i extends s.PureComponent {
                constructor() {
                    super(...arguments), this._onChange = e => {
                        this.props.onChange(e)
                    }
                }
                render() {
                    const {
                        value: e
                    } = this.props;
                    return s.createElement("span", {
                        className: l.wrapper
                    }, s.createElement("span", {
                        className: l.buttons,
                        onClick: n.preventDefault
                    }, s.createElement(r.ColorSelector, {
                        buttonClassName: l.colorSelectButton,
                        value: e,
                        onChange: this._onChange,
                        onSelectedClick: this._onChange
                    })))
                }
            }
        },
        589007: (e, t, o) => {
            "use strict";
            o.d(t, {
                PopupColorSelector: () => _
            });
            var s = o(50959),
                r = o(500962),
                n = o(670797),
                l = o(642709),
                i = o(18182),
                a = o(332585),
                c = o(67812),
                m = o(762852),
                h = o(768038),
                u = o(707533),
                d = o(428019),
                p = o(778785),
                v = o(218724);
            class b extends s.PureComponent {
                constructor() {
                    super(...arguments), this._popUpElem = null, this._onChange = e => {
                        this.props.onSelectColor(e), this.props.hide()
                    }, this._onTargetMouseLeave = e => {
                        const t = !!e.relatedTarget.nodeName,
                            o = e.relatedTarget === this._popUpElem,
                            s = this._popUpElem && t && this._popUpElem.contains(e.relatedTarget);
                        o || s || this.props.hide()
                    }, this._onPopUpMouseLeave = e => {
                        const t = !!e.nativeEvent.relatedTarget.nodeName,
                            o = e.nativeEvent.relatedTarget === this.props.elem,
                            s = t && this.props.elem.contains(e.nativeEvent.relatedTarget);
                        o || s || this.props.hide()
                    }, this._onTouchStart = e => {
                        const t = !!e.target.nodeName,
                            o = e.target === this.props.elem,
                            s = e.target === this._popUpElem,
                            r = t && this.props.elem.contains(e.target),
                            n = this._popUpElem && t && this._popUpElem.contains(e.target);
                        o || r || s || n || this.props.hide()
                    }, this._setPopUpElem = e => {
                        this._popUpElem = e
                    }
                }
                componentDidMount() {
                    document.documentElement && (p.mobiletouch ? document.documentElement.addEventListener("touchstart", this._onTouchStart) : (this.props.elem.addEventListener("mouseleave", this._onTargetMouseLeave), document.body.addEventListener("scroll", this.props.hide)))
                }
                componentWillUnmount() {
                    document.documentElement && (p.mobiletouch ? document.documentElement.removeEventListener("touchstart", this._onTouchStart) : this.props.elem && (this.props.elem.removeEventListener("mouseleave", this._onTargetMouseLeave), document.documentElement.removeEventListener("scroll", this.props.hide)))
                }
                render() {
                    const e = {
                        top: 0,
                        left: 0
                    };
                    if (this.props.elem) {
                        const t = this.props.elem.getBoundingClientRect();
                        e.top = t.top + t.height / 2, e.left = t.left + ((0, h.isRtl)() ? 0 : t.width)
                    }
                    return s.createElement(u.Portal, null, s.createElement("div", {
                        style: e,
                        className: v.popup,
                        ref: this._setPopUpElem,
                        onMouseLeave: p.mobiletouch ? void 0 : this._onPopUpMouseLeave
                    }, s.createElement("div", {
                        className: v.wrapper
                    }, s.createElement("div", {
                        className: v.selector
                    }, s.createElement("div", {
                        className: v.arrowLeft
                    }), s.createElement(d.ColorSelector, {
                        buttonClassName: v.colorSelectButton,
                        value: this.props.currentColor,
                        onChange: this._onChange
                    })))))
                }
            }
            var C = o(948019);

            function y(e) {
                const {
                    actions: t,
                    ...o
                } = e;
                return s.createElement(i.MatchMedia, {
                    rule: l.DialogBreakpoints.TabletSmall
                }, (e => e && t ? s.createElement(a.DrawerManager, null, s.createElement(C.ContextMenuContext.Provider, {
                    value: {
                        type: "drawer"
                    }
                }, s.createElement(m.Drawer, {
                    onClose: o.hide,
                    position: "Bottom"
                }, s.createElement(c.ContextMenuList, {
                    items: t
                })))) : s.createElement(b, { ...o
                })))
            }
            let g = null;
            var _;
            ! function(e) {
                function t() {
                    g && r.unmountComponentAtNode(g)
                }
                e.show = function(e) {
                    g || (g = document.createElement("div")), t(), r.render(s.createElement(n.SlotContext.Provider, {
                        value: e.manager || null
                    }, s.createElement(y, { ...e,
                        hide: t
                    })), g)
                }, e.hide = t
            }(_ || (_ = {}))
        },
        371766: (e, t, o) => {
            "use strict";
            o.d(t, {
                SymbolMarker: () => b,
                createSymbolMarkerStandalone: () => y
            });
            o(984919);
            var s = o(346014),
                r = o(586584),
                n = o(589007),
                l = o(963754),
                i = o(642709),
                a = o(50959),
                c = o(777754),
                m = o(795434),
                h = o(973580),
                u = o(779923),
                d = o(494966),
                p = o(345848);

            function v(e, t, s, r) {
                const n = function(e, t, s, r) {
                    const n = c.t(null, void 0, o(182246)).format({
                            symbol: (0, d.safeShortName)(t)
                        }),
                        l = e.getSymbolColor(t) || void 0,
                        i = o => {
                            r(), window.runOrSignIn((() => {
                                s.setColor(o), e.setSymbolsColor([t], s.getColor()), (0, p.trackEvent)("Watchlist", "Context menu", "Flag")
                            }), {
                                source: "Set symbol color"
                            })
                        };
                    return [new h.TVAction({
                        label: n,
                        onExecute: () => i(s.getColor())
                    }), new h.TVAction({
                        jsxLabel: a.createElement(m.LabelColorSelector, {
                            value: l,
                            onChange: i
                        }),
                        doNotCloseOnClick: !0
                    })]
                }(e, t, s, r);
                return null !== e.getSymbolColor(t) && n.push(function(e, t) {
                    return new h.TVAction({
                        label: c.t(null, void 0, o(684114)).format({
                            symbol: (0, d.safeShortName)(t)
                        }),
                        onExecute: () => {
                            e.setSymbolsColor([t], null), (0, p.trackEvent)("Watchlist", "Context menu", "Unflag")
                        }
                    })
                }(e, t)), n.push(function(e) {
                    return new h.TVAction({
                        label: c.t(null, void 0, o(560342)),
                        onExecute: () => {
                            var t;
                            t = () => {
                                e.clearAllSymbolsColor()
                            }, (0, u.showConfirm)({
                                text: c.t(null, void 0, o(654408)),
                                onConfirm: ({
                                    dialogClose: e
                                }) => {
                                    t(), e()
                                }
                            }), (0, p.trackEvent)("Watchlist", "Context menu", "Unflag all")
                        }
                    })
                }(e)), n
            }
            class b {
                constructor(e) {
                    this._service = (0, r.getMarkedSymbolsListServiceInstance)(), this._colorManager = new l.ColorManager({
                        context: l.ColorContext.SymbolMarker
                    }), this._classes = [], this._onClick = e => {
                        e.preventDefault();
                        const t = () => {
                                const e = v(this._service, this._symbol, this._colorManager, n.PopupColorSelector.hide),
                                    t = this._colorManager.getColor(),
                                    o = {
                                        elem: this._uimarker.getElem(),
                                        currentColor: t,
                                        onSelectColor: this._onSelectColor,
                                        actions: e,
                                        manager: this._opts.manager
                                    };
                                window.matchMedia(i.DialogBreakpoints.TabletSmall).matches ? n.PopupColorSelector.show(o) : null === this._color ? (n.PopupColorSelector.show(o), this._service.setSymbolsColor([this._symbol], t)) : (n.PopupColorSelector.hide(), this._service.setSymbolsColor([this._symbol], null))
                            },
                            o = window.is_authenticated;
                        window.runOrSignIn((() => {
                            o && (this._opts.onClick ? this._opts.onClick(this._symbol, t) : t())
                        }), {
                            source: "Set symbol color"
                        })
                    }, this._onSelectColor = e => {
                        this._colorManager.setColor(e), this._service.setSymbolsColor([this._symbol], this._colorManager.getColor())
                    }, this._onDblClick = e => {
                        e.preventDefault()
                    }, this._onChange = () => {
                        this._setState(this._service.getSymbolColor(this._symbol))
                    }, this._opts = e, this._symbol = e.symbol, this._color = e.color || this._service.getSymbolColor(this._symbol), this._uimarker = new s.UiMarker({
                        color: this._color,
                        container: e.container,
                        onClick: this._onClick,
                        onDblClick: this._onDblClick,
                        specialImage: e.specialImage
                    }), e.className && this.setClassName(e.className), null !== this._color && this._addActiveClassName(), this._service.onSymbolChange(this._symbol, this._onChange)
                }
                updateSubscription() {
                    this._setState(this._service.getSymbolColor(this._symbol))
                }
                bindTo(e, t) {
                    this._service.offSymbolChange(this._symbol, this._onChange), this._symbol = e, this._uimarker.appendTo(t), this._setState(this._service.getSymbolColor(e)), this._service.onSymbolChange(e, this._onChange)
                }
                unbind() {
                    this._service.offSymbolChange(this._symbol, this._onChange), this._uimarker.detach()
                }
                getElem() {
                    return this._uimarker.getElem()
                }
                isMarked() {
                    return null !== this._color
                }
                setClassName(e) {
                    this._uimarker.getElem().classList.remove(...this._classes), this._classes = e.split(" ").filter(Boolean), this._uimarker.getElem().classList.add(...this._classes)
                }
                destroy() {
                    this.unbind(), delete this._uimarker, delete this._opts
                }
                _setState(e) {
                    const t = this.isMarked();
                    this._color = e, null !== this._color ? (this._uimarker.setColor(this._color), this._addActiveClassName()) : (this._uimarker.removeColor(), this._removeActiveClassName()), void 0 !== this._opts.onMarkedChanged && t !== this.isMarked() && this._opts.onMarkedChanged()
                }
                _addActiveClassName() {
                    this._opts.activeClassName && this._uimarker.addClass(this._opts.activeClassName)
                }
                _removeActiveClassName() {
                    this._opts.activeClassName && this._uimarker.removeClass(this._opts.activeClassName)
                }
            }
            class C extends b {
                constructor(e) {
                    super(e), this._onInit = () => {
                        this.updateSubscription()
                    }, this._service.onInit(this._onInit)
                }
                destroy() {
                    this._service.offInit(this._onInit), super.destroy()
                }
            }

            function y(e) {
                return new C(e)
            }
        },
        346014: (e, t, o) => {
            "use strict";
            o.d(t, {
                UiMarker: () => c
            });
            var s = o(797035),
                r = o(878134),
                n = o(904799),
                l = o(497754),
                i = o(778785),
                a = o(756982);
            class c {
                constructor(e) {
                    this._onClick = e => {
                        this._opts.onClick && this._opts.onClick(e)
                    }, this._onDblClick = e => {
                        this._opts.onDblClick && this._opts.onDblClick(e)
                    }, this._container = e.container, this._opts = e, this._elem = this._render(e), this._addEventListeners()
                }
                setColor(e) {
                    this.removeColor(), this._elem.classList.add(a[e])
                }
                removeColor() {
                    this._elem.classList.remove(a[s.ListColor.Red], a[s.ListColor.Orange], a[s.ListColor.Purple], a[s.ListColor.Green], a[s.ListColor.Blue], a[s.ListColor.Cyan], a[s.ListColor.Pink])
                }
                addClass(e) {
                    this._elem.classList.add(e)
                }
                removeClass(e) {
                    this._elem.classList.remove(e)
                }
                getElem() {
                    return this._elem
                }
                appendTo(e) {
                    this.detach(), this._container = e, this._container.appendChild(this._elem), this._addEventListeners()
                }
                detach() {
                    this._removeEventListeners(), this._container && (this._container.removeChild(this._elem), delete this._container)
                }
                _render(e) {
                    const t = l(a.uiMarker, {
                            [e.className]: Boolean(e.className),
                            [a[e.color]]: Boolean(e.color)
                        }),
                        o = e.specialImage || n,
                        s = (0, r.parseHtmlElement)(`<div class="${t}">${o}</div>`);
                    if (!s) throw new Error("Can't parse html");
                    return this._container && this._container.appendChild(s), s
                }
                _addEventListeners() {
                    const e = i.mobiletouch ? "touchstart" : "click";
                    this._elem.addEventListener(e, this._onClick), this._opts.onDblClick && this._elem.addEventListener("dblclick", this._onDblClick)
                }
                _removeEventListeners() {
                    const e = i.mobiletouch ? "touchstart" : "click";
                    this._elem.removeEventListener(e, this._onClick), this._opts.onDblClick && this._elem.removeEventListener("dblclick", this._onDblClick)
                }
            }
        },
        642709: (e, t, o) => {
            "use strict";
            o.d(t, {
                DialogBreakpoints: () => r
            });
            var s = o(645469);
            const r = {
                SmallHeight: s["small-height-breakpoint"],
                TabletSmall: s["tablet-small-breakpoint"],
                TabletNormal: s["tablet-normal-breakpoint"]
            }
        },
        478710: (e, t, o) => {
            "use strict";
            o.d(t, {
                Flag: () => i
            });
            var s = o(50959),
                r = o(670797),
                n = o(371766),
                l = o(153716);
            class i extends s.Component {
                constructor() {
                    super(...arguments), this._symbolMarker = null, this._ref = null, this._handleRef = e => {
                        const {
                            symbol: t,
                            onClick: o,
                            className: s,
                            activeClassName: r,
                            forceVisible: i = !1
                        } = this.props;
                        null !== e && (this._symbolMarker = new n.SymbolMarker({
                            symbol: t,
                            className: s,
                            container: e,
                            activeClassName: r || (i ? l.forceVisible : l.visible),
                            onClick: (e, t) => {
                                o ? o(e, t) : t()
                            },
                            manager: this.context
                        })), this._ref = e
                    }
                }
                shouldComponentUpdate(e) {
                    return this.props.symbol !== e.symbol || this.props.className !== e.className
                }
                componentDidUpdate(e) {
                    var t, o;
                    const {
                        symbol: s,
                        className: r
                    } = this.props;
                    null !== this._ref && (s !== e.symbol && (null === (t = this._symbolMarker) || void 0 === t || t.bindTo(this.props.symbol, this._ref)), r !== e.className && r && (null === (o = this._symbolMarker) || void 0 === o || o.setClassName(r)))
                }
                componentWillUnmount() {
                    this._symbolMarker && this._symbolMarker.destroy()
                }
                render() {
                    return s.createElement("span", {
                        className: l.container,
                        ref: this._handleRef
                    })
                }
            }
            i.contextType = r.SlotContext
        },
        948019: (e, t, o) => {
            "use strict";
            o.d(t, {
                ContextMenuContext: () => s
            });
            const s = o(50959).createContext(null)
        },
        582997: (e, t, o) => {
            "use strict";
            o.d(t, {
                Hint: () => i
            });
            var s = o(50959),
                r = o(497754),
                n = o.n(r),
                l = o(768550);

            function i(e) {
                const {
                    text: t = "",
                    className: o
                } = e;
                return s.createElement("span", {
                    className: n()(l.shortcut, o)
                }, t)
            }
        },
        886004: (e, t, o) => {
            "use strict";
            o.d(t, {
                ContextMenuItem: () => p
            });
            var s = o(50959),
                r = o(497754),
                n = o.n(r),
                l = o(83436),
                i = o(612247),
                a = o(302478),
                c = o(582997),
                m = o(339750),
                h = o(379978),
                u = o(69311),
                d = o(503651);

            function p(e) {
                const {
                    isTitle: t,
                    isLoading: o,
                    isHovered: r,
                    active: p,
                    checkable: v,
                    disabled: b,
                    checked: C,
                    icon: y,
                    iconChecked: g,
                    hint: _,
                    subItems: f,
                    label: E,
                    onClick: k,
                    children: w,
                    toolbox: x,
                    jsxLabel: S,
                    size: L = "normal"
                } = e, N = (0, s.useContext)(a.EmptyIconsContext), M = !!f.length;
                return o ? s.createElement("li", {
                    className: n()(d.item, d.loading, d[L])
                }, s.createElement(i.Loader, null)) : s.createElement("li", {
                    className: n()(d.item, d.interactive, t && d.title, b && d.disabled, r && d.hovered, p && d.active, N && d.emptyIcons, d[L]),
                    onClick: k
                }, s.createElement(l.Icon, {
                    className: n()(d.icon),
                    icon: function() {
                        if (v && C) return g || y || m;
                        return y
                    }()
                }), s.createElement("span", {
                    className: n()(d.label)
                }, null != S ? S : E), !!x && s.createElement(l.Icon, {
                    onClick: function() {
                        x && x.action()
                    },
                    className: d.remove,
                    icon: u
                }), !M && _ && s.createElement(c.Hint, {
                    className: d.shortcut,
                    text: _
                }), M && s.createElement(l.Icon, {
                    className: d.nested,
                    icon: h
                }), w)
            }
        },
        67812: (e, t, o) => {
            "use strict";
            o.d(t, {
                ContextMenuList: () => u
            });
            var s = o(50959),
                r = o(481956);

            function n(e) {
                return s.createElement("li", {
                    className: r.separator
                })
            }
            var l = o(886004),
                i = o(762852),
                a = o(224743);

            function c(e) {
                const {
                    action: t
                } = e, [o, r] = (0, s.useState)((() => t.getState())), [n, c] = (0, s.useState)(!1), m = !!o.subItems.length, h = m && n;
                return (0, s.useEffect)((() => {
                    const e = () => r(t.getState());
                    return t.onUpdate().subscribe(null, e), () => {
                        t.onUpdate().unsubscribe(null, e)
                    }
                }), []), s.createElement(l.ContextMenuItem, { ...o,
                    onClick: function(e) {
                        if (o.disabled || e.defaultPrevented) return;
                        if (m) return void c(!0);
                        o.doNotCloseOnClick || (0, a.globalCloseMenu)();
                        t.execute()
                    },
                    isLoading: o.loading,
                    isHovered: h
                }, h && s.createElement(i.Drawer, {
                    onClose: d
                }, s.createElement(u, {
                    items: o.subItems,
                    parentAction: t,
                    closeNested: d
                })));

                function d(e) {
                    e && e.preventDefault(), c(!1)
                }
            }
            var m = o(302478),
                h = o(366493);

            function u(e) {
                const {
                    items: t,
                    parentAction: o,
                    closeNested: r
                } = e, i = !Boolean(o) && t.every((e => !Boolean("separator" !== e.type && (e.getState().icon || e.getState().checkable))));
                return s.createElement(m.EmptyIconsContext.Provider, {
                    value: i
                }, s.createElement("ul", null, o && s.createElement(s.Fragment, null, s.createElement(l.ContextMenuItem, {
                    label: o.getState().label,
                    isTitle: !0,
                    active: !1,
                    disabled: !1,
                    subItems: [],
                    checkable: !1,
                    checked: !1,
                    doNotCloseOnClick: !1,
                    icon: h,
                    onClick: r
                }), s.createElement(n, null)), t.map((e => {
                    switch (e.type) {
                        case "action":
                            return s.createElement(c, {
                                key: e.id,
                                action: e
                            });
                        case "separator":
                            return s.createElement(n, {
                                key: e.id
                            })
                    }
                }))))
            }
        },
        302478: (e, t, o) => {
            "use strict";
            o.d(t, {
                EmptyIconsContext: () => s
            });
            const s = o(50959).createContext(!1)
        },
        332585: (e, t, o) => {
            "use strict";
            o.d(t, {
                DrawerManager: () => n,
                DrawerContext: () => l
            });
            var s = o(50959),
                r = o(575658);
            class n extends s.PureComponent {
                constructor(e) {
                    super(e), this._isBodyFixed = !1, this._addDrawer = e => {
                        this.setState((t => ({
                            stack: [...t.stack, e]
                        })))
                    }, this._removeDrawer = e => {
                        this.setState((t => ({
                            stack: t.stack.filter((t => t !== e))
                        })))
                    }, this.state = {
                        stack: []
                    }
                }
                componentDidUpdate(e, t) {
                    !t.stack.length && this.state.stack.length && ((0, r.setFixedBodyState)(!0), this._isBodyFixed = !0), t.stack.length && !this.state.stack.length && this._isBodyFixed && ((0, r.setFixedBodyState)(!1), this._isBodyFixed = !1)
                }
                componentWillUnmount() {
                    this.state.stack.length && this._isBodyFixed && (0, r.setFixedBodyState)(!1)
                }
                render() {
                    return s.createElement(l.Provider, {
                        value: {
                            addDrawer: this._addDrawer,
                            removeDrawer: this._removeDrawer,
                            currentDrawer: this.state.stack.length ? this.state.stack[this.state.stack.length - 1] : null
                        }
                    }, this.props.children)
                }
            }
            const l = s.createContext(null)
        },
        762852: (e, t, o) => {
            "use strict";
            o.d(t, {
                Drawer: () => u
            });
            var s = o(50959),
                r = o(650151),
                n = o(497754),
                l = o(777491),
                i = o(707533),
                a = o(332585),
                c = o(320116),
                m = o(150881),
                h = o(945966);

            function u(e) {
                const {
                    position: t = "Bottom",
                    onClose: o,
                    children: u,
                    className: d,
                    theme: p = h
                } = e, v = (0, r.ensureNotNull)((0, s.useContext)(a.DrawerContext)), [b] = (0, s.useState)((() => (0, l.randomHash)())), C = (0, s.useRef)(null), y = (0, s.useContext)(c.CloseDelegateContext);
                return (0, s.useLayoutEffect)((() => ((0, r.ensureNotNull)(C.current).focus({
                    preventScroll: !0
                }), y.subscribe(v, o), v.addDrawer(b), () => {
                    v.removeDrawer(b), y.unsubscribe(v, o)
                })), []), s.createElement(i.Portal, null, s.createElement("div", {
                    className: n(h.wrap, h[`position${t}`])
                }, b === v.currentDrawer && s.createElement("div", {
                    className: h.backdrop,
                    onClick: o
                }), s.createElement(m.TouchScrollContainer, {
                    className: n(h.drawer, p.drawer, h[`position${t}`], d),
                    tabIndex: -1,
                    ref: C,
                    "data-name": e["data-name"]
                }, u)))
            }
        },
        443549: (e, t, o) => {
            "use strict";
            o.d(t, {
                Spinner: () => l
            });
            var s = o(50959),
                r = o(497754),
                n = o(607436);
            o(286625);

            function l(e) {
                const t = r(e.className, "tv-spinner", "tv-spinner--shown", `tv-spinner--size_${n.spinnerSizeMap[e.size||n.DEFAULT_SIZE]}`);
                return s.createElement("div", {
                    className: t,
                    style: e.style,
                    role: "progressbar"
                })
            }
        },
        416293: (e, t, o) => {
            "use strict";
            o.d(t, {
                ToolWidgetCaret: () => a
            });
            var s = o(50959),
                r = o(497754),
                n = o(83436),
                l = o(190948),
                i = o(100578);

            function a(e) {
                const {
                    dropped: t,
                    className: o
                } = e;
                return s.createElement(n.Icon, {
                    className: r(o, l.icon, {
                        [l.dropped]: t
                    }),
                    icon: i
                })
            }
        },
        150881: (e, t, o) => {
            "use strict";
            o.d(t, {
                TouchScrollContainer: () => i
            });
            var s = o(50959),
                r = o(259142),
                n = o(650151),
                l = o(638456);
            const i = (0, s.forwardRef)(((e, t) => {
                const {
                    children: o,
                    ...n
                } = e, i = (0, s.useRef)(null);
                return (0, s.useImperativeHandle)(t, (() => i.current)), (0, s.useLayoutEffect)((() => {
                    if (l.CheckMobile.iOS()) return null !== i.current && (0, r.disableBodyScroll)(i.current, {
                        allowTouchMove: a(i)
                    }), () => {
                        null !== i.current && (0, r.enableBodyScroll)(i.current)
                    }
                }), []), s.createElement("div", {
                    ref: i,
                    ...n
                }, o)
            }));

            function a(e) {
                return t => {
                    const o = (0, n.ensureNotNull)(e.current),
                        s = document.activeElement;
                    return !o.contains(t) || null !== s && o.contains(s) && s.contains(t)
                }
            }
        },
        366493: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5 20L11 14.5 16.5 9"/></svg>'
        },
        100578: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>'
        },
        379978: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>'
        },
        339750: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 15l5 5L23 9"/></svg>'
        },
        69311: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.7 9l4.65-4.65-.7-.7L9 8.29 4.35 3.65l-.7.7L8.29 9l-4.64 4.65.7.7L9 9.71l4.65 4.64.7-.7L9.71 9z"/></svg>'
        },
        24122: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M4 8a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/></svg>'
        },
        676809: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M0 8a8 8 0 1 0 16 0A8 8 0 1 0 0 8zm2 0a6 6 0 1 0 12 0A6 6 0 1 0 2 8zm2 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/></svg>'
        },
        904799: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 12" width="14" height="12" fill="currentColor" focusable="false" preserveAspectRatio="none"><path d="M14 12l-4-6 4-6H0v12z"/></svg>'
        }
    }
]);
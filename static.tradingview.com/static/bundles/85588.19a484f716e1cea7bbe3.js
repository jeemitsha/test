(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [85588], {
        890443: e => {
            e.exports = {}
        },
        618161: e => {
            e.exports = {}
        },
        220004: e => {
            e.exports = {}
        },
        48513: e => {
            e.exports = {}
        },
        85813: e => {
            e.exports = {}
        },
        872498: e => {
            e.exports = {}
        },
        357789: e => {
            e.exports = {}
        },
        271834: e => {
            e.exports = {}
        },
        595517: e => {
            e.exports = {}
        },
        114310: e => {
            e.exports = {}
        },
        520256: e => {
            e.exports = {}
        },
        256337: e => {
            e.exports = {}
        },
        842146: e => {
            e.exports = {}
        },
        563345: e => {
            e.exports = {}
        },
        31008: e => {
            e.exports = {}
        },
        61843: e => {
            e.exports = {}
        },
        494386: e => {
            e.exports = {}
        },
        503510: e => {
            e.exports = {}
        },
        733319: e => {
            e.exports = {
                loader: "loader-PZ4hqS2H",
                static: "static-PZ4hqS2H",
                item: "item-PZ4hqS2H",
                "tv-button-loader": "tv-button-loader-PZ4hqS2H",
                medium: "medium-PZ4hqS2H",
                small: "small-PZ4hqS2H",
                black: "black-PZ4hqS2H",
                white: "white-PZ4hqS2H",
                gray: "gray-PZ4hqS2H",
                primary: "primary-PZ4hqS2H",
                "loader-initial": "loader-initial-PZ4hqS2H",
                "loader-appear": "loader-appear-PZ4hqS2H"
            }
        },
        682335: e => {
            e.exports = {
                switcher: "switcher-Wv0rGnT8",
                "thumb-wrapper": "thumb-wrapper-Wv0rGnT8",
                "size-small": "size-small-Wv0rGnT8",
                "size-medium": "size-medium-Wv0rGnT8",
                "size-large": "size-large-Wv0rGnT8",
                input: "input-Wv0rGnT8",
                "intent-default": "intent-default-Wv0rGnT8",
                "disable-active-state-styles": "disable-active-state-styles-Wv0rGnT8",
                "intent-select": "intent-select-Wv0rGnT8",
                track: "track-Wv0rGnT8",
                thumb: "thumb-Wv0rGnT8"
            }
        },
        136680: e => {
            e.exports = {}
        },
        798497: e => {
            e.exports = {
                wrapper: "wrapper-KagMfMbV",
                newLabel: "newLabel-KagMfMbV"
            }
        },
        445437: e => {
            e.exports = {
                elementWrap: "elementWrap-RgmcRkjO",
                itemsWrap: "itemsWrap-RgmcRkjO",
                item: "item-RgmcRkjO",
                active: "active-RgmcRkjO",
                itemContent: "itemContent-RgmcRkjO",
                dropdownItem: "dropdownItem-RgmcRkjO",
                dropdownIcon: "dropdownIcon-RgmcRkjO",
                dropdownListItem: "dropdownListItem-RgmcRkjO"
            }
        },
        728804: (e, t, s) => {
            "use strict";
            s.d(t, {
                CustomBehaviourContext: () => i,
                presetDefault: () => o,
                presetPlatform: () => r
            });
            const i = (0, s(50959).createContext)({
                enableActiveStateStyles: !0
            });
            i.displayName = "CustomBehaviourContext";
            const o = {
                    enableActiveStateStyles: !0
                },
                r = {
                    enableActiveStateStyles: !1
                }
        },
        612247: (e, t, s) => {
            "use strict";
            s.d(t, {
                Loader: () => d
            });
            var i, o = s(50959),
                r = s(497754),
                n = s(745269),
                l = s(733319),
                a = s.n(l);
            ! function(e) {
                e[e.Initial = 0] = "Initial", e[e.Appear = 1] = "Appear", e[e.Active = 2] = "Active"
            }(i || (i = {}));
            class d extends o.PureComponent {
                constructor(e) {
                    super(e), this._stateChangeTimeout = null, this.state = {
                        state: i.Initial
                    }
                }
                render() {
                    const {
                        className: e,
                        color: t = "black",
                        size: s = "medium",
                        staticPosition: i
                    } = this.props, n = r(a().item, a()[t], a()[s]);
                    return o.createElement("span", {
                        className: r(a().loader, i && a().static, this._getStateClass(), e)
                    }, o.createElement("span", {
                        className: n
                    }), o.createElement("span", {
                        className: n
                    }), o.createElement("span", {
                        className: n
                    }))
                }
                componentDidMount() {
                    this.setState({
                        state: i.Appear
                    }), this._stateChangeTimeout = setTimeout((() => {
                        this.setState({
                            state: i.Active
                        })
                    }), 2 * n.dur)
                }
                componentWillUnmount() {
                    this._stateChangeTimeout && (clearTimeout(this._stateChangeTimeout), this._stateChangeTimeout = null)
                }
                _getStateClass() {
                    switch (this.state.state) {
                        case i.Initial:
                            return a()["loader-initial"];
                        case i.Appear:
                            return a()["loader-appear"];
                        default:
                            return ""
                    }
                }
            }
        },
        451608: (e, t, s) => {
            "use strict";
            s.d(t, {
                SwitchGroup: () => i.SwitchGroup,
                makeSwitchGroupItem: () => n
            });
            var i = s(367254),
                o = s(50959),
                r = s(719036);

            function n(e) {
                var t;
                return t = class extends o.PureComponent {
                    constructor() {
                        super(...arguments), this._onChange = e => {
                            this.context.switchGroupContext.getOnChange()(e)
                        }, this._onUpdate = e => {
                            e.includes(this.props.value) && this.forceUpdate()
                        }
                    }
                    componentDidMount() {
                        this.context.switchGroupContext.subscribe(this._onUpdate)
                    }
                    render() {
                        return o.createElement(e, { ...this.props,
                            name: this._getName(),
                            onChange: this._onChange,
                            checked: this._isChecked()
                        })
                    }
                    componentWillUnmount() {
                        this.context.switchGroupContext.unsubscribe(this._onUpdate)
                    }
                    _getName() {
                        return this.context.switchGroupContext.getName()
                    }
                    _isChecked() {
                        return this.context.switchGroupContext.getValues().includes(this.props.value)
                    }
                }, t.contextTypes = {
                    switchGroupContext: r.any.isRequired
                }, t
            }
        },
        367254: (e, t, s) => {
            "use strict";
            s.d(t, {
                SwitchGroup: () => r
            });
            var i = s(50959),
                o = s(719036);
            class r extends i.PureComponent {
                constructor() {
                    super(...arguments), this._subscriptions = new Set, this._getName = () => this.props.name, this._getValues = () => this.props.values, this._getOnChange = () => this.props.onChange, this._subscribe = e => {
                        this._subscriptions.add(e)
                    }, this._unsubscribe = e => {
                        this._subscriptions.delete(e)
                    }
                }
                getChildContext() {
                    return {
                        switchGroupContext: {
                            getName: this._getName,
                            getValues: this._getValues,
                            getOnChange: this._getOnChange,
                            subscribe: this._subscribe,
                            unsubscribe: this._unsubscribe
                        }
                    }
                }
                render() {
                    return this.props.children
                }
                componentDidUpdate(e) {
                    this._notify(this._getUpdates(this.props.values, e.values))
                }
                _notify(e) {
                    this._subscriptions.forEach((t => t(e)))
                }
                _getUpdates(e, t) {
                    return [...t, ...e].filter((s => t.includes(s) ? !e.includes(s) : e.includes(s)))
                }
            }
            r.childContextTypes = {
                switchGroupContext: o.any.isRequired
            }
        },
        694553: (e, t, s) => {
            "use strict";
            s.d(t, {
                Switch: () => d
            });
            var i = s(50959),
                o = s(497754),
                r = s(728804),
                n = s(682335),
                l = s.n(n);

            function a(e) {
                const t = (0, i.useContext)(r.CustomBehaviourContext),
                    {
                        className: s,
                        intent: n = "default",
                        size: a = "small",
                        enableActiveStateStyles: d = t.enableActiveStateStyles
                    } = e;
                return o(s, l().switcher, l()[`size-${a}`], l()[`intent-${n}`], !d && l()["disable-active-state-styles"])
            }

            function d(e) {
                var t;
                const {
                    reference: s,
                    size: o,
                    intent: r,
                    role: n,
                    "aria-checked": d,
                    checked: c,
                    defaultChecked: h,
                    onKeyDown: u,
                    ...p
                } = e, _ = (0, i.useCallback)((e => {
                    13 === e.keyCode && e.target.click(), u && u(e)
                }), [u]);
                return i.createElement("span", {
                    className: a(e)
                }, i.createElement("input", { ...p,
                    type: "checkbox",
                    className: l().input,
                    ref: s,
                    role: null != n ? n : "switch",
                    "aria-checked": null !== (t = null != d ? d : c) && void 0 !== t ? t : h,
                    checked: c,
                    defaultChecked: h,
                    onKeyDown: _
                }), i.createElement("span", {
                    className: l()["thumb-wrapper"]
                }, i.createElement("span", {
                    className: l().track
                }), i.createElement("span", {
                    className: l().thumb
                })))
            }
        },
        791325: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                LEFT_ARROW: () => i,
                UP_ARROW: () => o,
                RIGHT_ARROW: () => r,
                DOWN_ARROW: () => n,
                ENTER: () => l,
                ESC: () => a,
                SPACE: () => d,
                SLASH: () => c
            });
            const i = 37,
                o = 38,
                r = 39,
                n = 40,
                l = 13,
                a = 27,
                d = 32,
                c = 47
        },
        81278: (e, t, s) => {
            "use strict";
            s.d(t, {
                MarketDialogMode: () => i,
                MarketDialogContext: () => r
            });
            var i, o = s(50959);
            ! function(e) {
                e.Single = "single", e.Multi = "multi"
            }(i || (i = {}));
            const r = (0, o.createContext)(null)
        },
        35387: (e, t, s) => {
            "use strict";
            s.d(t, {
                marketGroupName: () => r,
                entireWorldMarket: () => n
            });
            var i = s(777754),
                o = s(19138);
            const r = {
                    "Entire World": "",
                    "North America": i.t(null, void 0, s(380545)),
                    Europe: i.t(null, void 0, s(559592)),
                    "Middle East / Africa": i.t(null, void 0, s(985766)),
                    "Mexico and South America": i.t(null, void 0, s(564135)),
                    "Asia / Pacific": i.t(null, void 0, s(685332)),
                    Worldwide: i.t(null, void 0, s(628584))
                },
                n = {
                    value: "entire_world",
                    name: i.t(null, void 0, s(886460)),
                    desc: "",
                    group: "Entire World",
                    icon: o
                }
        },
        67905: (e, t, s) => {
            "use strict";

            function i(e) {
                const t = new Map;
                return e.forEach((e => {
                    t.has(e.group) ? t.get(e.group).push(e) : t.set(e.group, [e])
                })), t
            }

            function o(e, t) {
                return t.map((t => e.find((e => e.value === t))))
            }
            s.d(t, {
                splitMarketsByGroup: () => i,
                getMarketsByNames: () => o
            })
        },
        740203: (e, t, s) => {
            "use strict";
            s.d(t, {
                createSelectableList: () => g
            });
            class i {
                constructor(e) {
                    this._coll = e
                }
                getItemByIdx(e) {
                    return this._coll.item(e)
                }
                getItems() {
                    return Array.from(this._coll)
                }
                getFirstItem() {
                    return this.getItemByIdx(0)
                }
                getLastItem() {
                    const e = this._coll.length;
                    return this.getItemByIdx(e - 1)
                }
                getItemIdx(e) {
                    return Array.prototype.findIndex.call(this._coll, (t => t === e))
                }
                getLength() {
                    return this._coll.length
                }
                contains(e) {
                    return -1 !== this.getItemIdx(e)
                }
            }
            var o, r = s(799786);
            ! function(e) {
                e[e.Prev = -1] = "Prev", e[e.Next = 1] = "Next"
            }(o || (o = {}));
            const n = "cursor";
            class l {
                constructor(e) {
                    this._list = e.list, this._items = new i(this._list.getElementsByClassName(e.listItemClass)), this._focused = new i(this._list.getElementsByClassName(e.focusedListItemClass)), this._selected = new i(this._list.getElementsByClassName(e.selectedListItemClass)), this._cursor = new i(this._list.getElementsByClassName(n)), this._selectedListItemClass = e.selectedListItemClass, this._focusedListItemClass = e.focusedListItemClass, this._onSelect = e.onSelect, this._onNavigate = e.onNavigate, this._onConfirm = e.onConfirm, this._onDelete = e.onDelete, this._mouseActions = new Map, this.hotkeys = (0, r.createGroup)({
                        desc: "Selectable list"
                    }), e.modes && e.modes.forEach((t => new t({
                        selection: this,
                        localHotkeyElement: this._list,
                        globalHotkeyElement: e.globalHotkeys ? null : this._list
                    })))
                }
                selectItem(e) {
                    e.classList.add(this._selectedListItemClass)
                }
                unselectItem(e) {
                    e.classList.remove(this._selectedListItemClass)
                }
                focusItem(e) {
                    this.removeFocus(), e.classList.add(this._focusedListItemClass), this.setCursor(e)
                }
                getFocusedItemIdx() {
                    const e = this._focused.getFirstItem();
                    return e ? this._items.getItemIdx(e) : -1
                }
                getFocusedItem() {
                    return this._focused.getFirstItem()
                }
                isSelected(e) {
                    return this._selected.contains(e)
                }
                isFocused(e) {
                    return this._focused.contains(e)
                }
                isListItem(e) {
                    return this._items.contains(e)
                }
                removeSelections() {
                    this._selected.getItems().forEach((e => e.classList.remove(this._selectedListItemClass)))
                }
                removeFocus() {
                    this._focused.getItems().forEach((e => e.classList.remove(this._focusedListItemClass)))
                }
                move(e, t, s) {
                    const i = e ? this._items.getItemIdx(e) : -1;
                    let o;
                    o = "number" == typeof t ? this._items.getItemByIdx(this._calcNextItemIdx(i, t)) : t, o && (s(o, e), this._scrollIfNotVisible(o))
                }
                getSelectedItems() {
                    return this._selected.getItems()
                }
                getList() {
                    return this._list
                }
                getItemsCollection() {
                    return this._items
                }
                getSelectedCollection() {
                    return this._selected
                }
                setCursor(e) {
                    this.removeCursor(), e.classList.add(n)
                }
                removeCursor() {
                    this._cursor.getItems().forEach((e => e.classList.remove(n)))
                }
                getCursorItem() {
                    return this._cursor.getFirstItem()
                }
                getCursorItemIdx() {
                    const e = this.getCursorItem();
                    return e ? this._items.getItemIdx(e) : -1
                }
                onSelect(e, t) {
                    this._onSelect && this._onSelect({
                        cursor: t,
                        items: this.getSelectedItems(),
                        action: e
                    })
                }
                onNavigate(e, t) {
                    this._onNavigate && this._onNavigate({
                        cursor: e,
                        cursorIdx: this.getCursorItemIdx(),
                        items: [e],
                        action: t
                    })
                }
                onConfirm(e, t) {
                    this._onConfirm && this._onConfirm({
                        cursor: e,
                        items: [e],
                        action: t
                    })
                }
                onDelete(e, t, s) {
                    this._onDelete && this._onDelete({
                        cursor: s,
                        items: e,
                        action: t
                    })
                }
                registerMouseAction(e, t) {
                    this._mouseActions.set(e, t)
                }
                dispatchMouseEvent(e, t) {
                    const s = this._mouseActions.get(e);
                    s && s(t)
                }
                delegateClick(e) {
                    return t => {
                        if (!t.defaultPrevented) {
                            const s = this._list.contains(t.target);
                            let i = t.target;
                            for (; s && i !== this._list;) {
                                if (i && this.isListItem(i)) return void e(i);
                                i = i && i.parentElement
                            }
                        }
                    }
                }
                clear() {
                    this.removeSelections(), this.removeFocus(), this.removeCursor()
                }
                destroy() {
                    this.hotkeys.destroy(), delete this._list, delete this._items, delete this._selected, delete this._focused, delete this._cursor, delete this._mouseActions
                }
                _scrollIfNotVisible(e) {
                    const t = this._list.getBoundingClientRect(),
                        s = e.getBoundingClientRect(),
                        i = t.top,
                        o = t.bottom,
                        r = s.top,
                        n = s.bottom;
                    r < i ? this._list.scrollTop -= i - r : n > o && (this._list.scrollTop += n - o)
                }
                _calcNextItemIdx(e, t) {
                    const s = this._items.getLength() - 1;
                    let i = e + t;
                    return i < 0 && (i = s), i > s && (i = 0), i
                }
            }
            class a {
                constructor(e) {
                    this._focusNext = () => {
                            if (!this._isValidNavigation()) return;
                            const e = this._selection.getCursorItem();
                            this._selection.move(e, o.Next, this._focusItem.bind(this, "down"))
                        }, this._focusPrev = () => {
                            if (!this._isValidNavigation()) return;
                            const e = this._selection.getCursorItem();
                            this._selection.move(e, o.Prev, this._focusItem.bind(this, "up"))
                        }, this._focusFirst = () => {
                            if (!this._isValidNavigation()) return;
                            const e = this._selection.getItemsCollection().getFirstItem(),
                                t = this._selection.getFocusedItem();
                            this._selection.move(t, e, this._focusItem.bind(this, "home"))
                        }, this._focusLast = () => {
                            if (!this._isValidNavigation()) return;
                            const e = this._selection.getItemsCollection().getLastItem(),
                                t = this._selection.getFocusedItem();
                            this._selection.move(t, e, this._focusItem.bind(this, "end"))
                        }, this._selection = e.selection, this._selection.registerMouseAction("click", this._selection.delegateClick(this._focusItem.bind(this, "click"))), this._selection.hotkeys.add({
                            desc: "Focus Previous",
                            hotkey: 38,
                            handler: this._focusPrev,
                            element: e.globalHotkeyElement
                        }), this._selection.hotkeys.add({
                            desc: "Focus Next",
                            hotkey: 40,
                            handler: this._focusNext,
                            element: e.globalHotkeyElement
                        }), this._selection.hotkeys.add({
                            desc: "Focus Previous",
                            hotkey: r.Modifiers.Shift + 32,
                            handler: this._focusPrev,
                            element: e.globalHotkeyElement
                        }), this._selection.hotkeys.add({
                            desc: "Focus Next",
                            hotkey: 32,
                            handler: this._focusNext,
                            element: e.globalHotkeyElement
                        }), this._selection.hotkeys.add({
                            desc: "Focus First",
                            hotkey: 36,
                            handler: this._focusFirst,
                            element: e.globalHotkeyElement
                        }),
                        this._selection.hotkeys.add({
                            desc: "Focus Last",
                            hotkey: 35,
                            handler: this._focusLast,
                            element: e.globalHotkeyElement
                        })
                }
                _focusItem(e, t) {
                    this._selection.removeSelections(), this._selection.focusItem(t), this._selection.setCursor(t), this._selection.selectItem(t), this._selection.onNavigate(t, e)
                }
                _isValidNavigation() {
                    return document.activeElement === document.body || this._selection.getList().contains(document.activeElement)
                }
            }
            class d {
                constructor(e) {
                    this._selection = e.selection, this._selection.hotkeys.add({
                        hotkey: r.Modifiers.Alt + 13,
                        handler: this._onItemKeyDown.bind(this, "alt+return"),
                        element: e.localHotkeyElement
                    }), this._selection.hotkeys.add({
                        hotkey: r.Modifiers.Alt + r.Modifiers.Shift + 13,
                        handler: this._onItemKeyDown.bind(this, "alt+return"),
                        element: e.localHotkeyElement
                    })
                }
                _onItemKeyDown(e, t) {
                    const s = this._selection.getCursorItem();
                    s && this._selection.onConfirm(s, e)
                }
            }
            class c {
                constructor(e) {
                    this._selection = e.selection, this._selection.registerMouseAction("shift+click", this._selection.delegateClick(this._onItemClick.bind(this, "shift+click"))), this._selection.hotkeys.add({
                        desc: "Extend Selection Down",
                        hotkey: r.Modifiers.Shift + 40,
                        handler: this._nextRangeItem.bind(this, "shift+down"),
                        element: e.localHotkeyElement
                    }), this._selection.hotkeys.add({
                        desc: "Extend Selection Up",
                        hotkey: r.Modifiers.Shift + 38,
                        handler: this._prevRangeItem.bind(this, "shift+up"),
                        element: e.localHotkeyElement
                    })
                }
                _nextRangeItem(e) {
                    const t = this._selection.getItemsCollection(),
                        s = this._selection.getCursorItem();
                    this._selection.getCursorItemIdx() !== t.getLength() - 1 && this._selection.move(s, o.Next, this._addItemToRange(e, ((e, t) => e < t)))
                }
                _prevRangeItem(e) {
                    const t = this._selection.getCursorItem();
                    0 !== this._selection.getCursorItemIdx() && this._selection.move(t, o.Prev, this._addItemToRange(e, ((e, t) => e > t)))
                }
                _onItemClick(e, t) {
                    const s = this._selection.getItemsCollection().getItems(),
                        i = this._getRangeInfo(t);
                    this._selection.removeSelections();
                    for (let e = i.start; e <= i.end; e++) this._selection.isSelected(s[e]) || this._selection.selectItem(s[e]);
                    this._selection.setCursor(t), this._selection.onSelect(e, t)
                }
                _getRangeInfo(e) {
                    const t = this._selection.getItemsCollection().getItemIdx(e),
                        s = this._selection.getFocusedItemIdx(),
                        i = -1 !== s ? s : 0;
                    return t > i ? {
                        start: i,
                        end: t
                    } : {
                        start: t,
                        end: i
                    }
                }
                _addItemToRange(e, t) {
                    return (s, i) => {
                        const o = this._selection.getItemsCollection().getItemIdx(s),
                            r = this._selection.getFocusedItemIdx();
                        0 === this._selection.getSelectedCollection().getLength() && i && this._selection.selectItem(i), t(r, o) ? this._selection.selectItem(s) : i && this._selection.unselectItem(i), this._selection.setCursor(s), this._selection.onSelect(e, s)
                    }
                }
            }
            class h {
                constructor(e) {
                    this._selection = e.selection, this._selection.registerMouseAction("ctrl+click", this._selection.delegateClick(this._onItemClick.bind(this, "ctrl+click"))), this._selection.registerMouseAction("meta+click", this._selection.delegateClick(this._onItemClick.bind(this, "meta+click"))), this._selection.hotkeys.add({
                        hotkey: r.Modifiers.Mod + 65,
                        handler: this._selectAll.bind(this, "ctrl+a"),
                        element: e.localHotkeyElement
                    }), this._selection.hotkeys.add({
                        hotkey: 27,
                        handler: this._unselectAll.bind(this, "esc"),
                        element: e.localHotkeyElement
                    })
                }
                _onItemClick(e, t) {
                    const s = this._selection.getFocusedItem(),
                        i = this._selection.getSelectedCollection().getLength();
                    s && 0 === i && this._selection.selectItem(s), this._toggleSelection(t), this._selection.onSelect(e, t)
                }
                _toggleSelection(e) {
                    this._selection.isSelected(e) ? this._selection.unselectItem(e) : this._selection.selectItem(e), this._selection.setCursor(e)
                }
                _selectAll(e) {
                    this._selection.getItemsCollection().getItems().forEach((e => this._selection.selectItem(e))), this._selection.onSelect(e)
                }
                _unselectAll(e) {
                    this._selection.removeSelections();
                    const t = this._selection.getFocusedItem();
                    t && this._selection.setCursor(t), this._selection.onSelect(e)
                }
            }
            class u {
                constructor(e) {
                    this._selection = e.selection, this._selection.hotkeys.add({
                        desc: "Delete",
                        hotkey: 46,
                        handler: this._delete.bind(this, "del"),
                        element: e.globalHotkeyElement
                    })
                }
                _delete(e) {
                    const t = this._selection.getSelectedItems(),
                        s = this._selection.getCursorItem();
                    s && t.length > 0 ? this._selection.onDelete(t, e, s) : s && this._selection.onDelete([s], e, s)
                }
            }
            var p = s(638456);
            class _ {
                constructor(e) {
                    this._dispatchClick = e => {
                        e.ctrlKey && !(0, p.isMac)() ? this._selection.dispatchMouseEvent("ctrl+click", e) : e.shiftKey ? this._selection.dispatchMouseEvent("shift+click", e) : e.metaKey && (0, p.isMac)() ? this._selection.dispatchMouseEvent("meta+click", e) : this._selection.dispatchMouseEvent("click", e)
                    }, this._onSelect = e => {
                        this._collectKeys(), this._opts.onSelect && this._opts.onSelect(e)
                    }, this._onNavigate = e => {
                        this._collectKeys(), this._opts.onNavigate && this._opts.onNavigate(e)
                    }, this._disableSelection = () => {
                        this._list.onselectstart = () => !1
                    }, this._enableSelection = () => {
                        this._list.onselectstart = () => null
                    }, this._opts = e, this._list = e.list, this._selection = new l({
                        list: e.list,
                        listItemClass: e.listItemClass,
                        selectedListItemClass: e.selectedListItemClass,
                        focusedListItemClass: e.focusedListItemClass,
                        onSelect: this._onSelect,
                        onNavigate: this._onNavigate,
                        onConfirm: e.onConfirm,
                        onDelete: e.onDelete,
                        modes: e.modes,
                        globalHotkeys: Boolean(e.globalHotkeys)
                    }), this._selectedKeys = [], this._focusedKey = null, this._cursorKey = null, this.activate(), this._collectKeys()
                }
                activate() {
                    this._list.addEventListener("click", this._dispatchClick), this._list.addEventListener("keydown", this._disableSelection), this._list.addEventListener("keyup", this._enableSelection), this._selection.hotkeys.promote()
                }
                deactivate() {
                    this._list.removeEventListener("click", this._dispatchClick), this._list.removeEventListener("keydown", this._disableSelection), this._list.removeEventListener("keyup", this._enableSelection)
                }
                focusItem(e) {
                    this._selection.isSelected(e) || this._selection.isFocused(e) || (this._selection.removeSelections(), this._selection.focusItem(e))
                }
                removeFocus() {
                    this._selection.removeFocus()
                }
                restore() {
                    if (this._opts.getNodeKey) {
                        const e = this._selection.getItemsCollection().getItems(),
                            t = this._opts.getNodeKey;
                        e.forEach((e => {
                            const s = t(e);
                            this._focusedKey === s && this._selection.focusItem(e), this._cursorKey === s && this._selection.setCursor(e), this._selectedKeys.includes(s) && this._selection.selectItem(e)
                        }))
                    }
                }
                getSelectedKeys() {
                    return this._collectKeys(), this._selectedKeys
                }
                getFocusedKey() {
                    return this._collectKeys(), this._focusedKey || null
                }
                clear() {
                    this._selection.clear()
                }
                destroy() {
                    this.deactivate(), this._selection.destroy(), delete this._selection, delete this._list, delete this._opts
                }
                _collectKeys() {
                    if (this._opts.getNodeKey) {
                        const e = this._opts.getNodeKey,
                            t = this._selection.getSelectedItems(),
                            s = this._selection.getFocusedItem(),
                            i = this._selection.getCursorItem();
                        this._selectedKeys = t.map((t => e(t))), this._focusedKey = s ? e(s) : null, this._cursorKey = i ? e(i) : null
                    }
                }
            }

            function g(e) {
                return new _(Object.assign({}, {
                    modes: [a, d, u, h, c]
                }, e))
            }
        },
        605324: (e, t, s) => {
            "use strict";
            s.d(t, {
                flagHtml: () => o
            });
            var i = s(713438);

            function o(e) {
                return `<img alt="${e}" src="${(0,i.flagUrl)(e)}" class="tv-flag-country tv-flag-country--${e}">`
            }
        },
        952456: (e, t, s) => {
            "use strict";
            s.d(t, {
                HammerJSLoader: () => o
            });
            var i = s(510013);
            class o extends i.ChunkLoader {
                _startLoading() {
                    return Promise.all([s.e(11553), s.e(42377)]).then(s.bind(s, 825806)).then((e => e.HammerJS))
                }
            }
        },
        763532: (e, t, s) => {
            "use strict";
            s.d(t, {
                saveTextFile: () => o,
                escapeCSVValue: () => a
            });
            var i = s(638456);

            function o(e, t, s = "text/plain") {
                const o = new Blob([t], {
                    type: s
                });
                if (i.CheckMobile.iOS()) {
                    const t = new FileReader;
                    return t.onload = () => {
                        t.result && r(e, t.result.toString())
                    }, void t.readAsDataURL(o)
                }
                const n = window.URL.createObjectURL(o);
                navigator.msSaveOrOpenBlob ? navigator.msSaveOrOpenBlob(o, e) : window.navigator.msSaveBlob ? window.navigator.msSaveBlob(o, e) : (r(e, n), window.URL.revokeObjectURL(n))
            }

            function r(e, t) {
                const s = document.createElement("a");
                s.style.display = "none", document.body.appendChild(s), s.href = t, s.download = e, s.click(), document.body.removeChild(s)
            }
            const n = /[",\r\n]/,
                l = /"/g;

            function a(e) {
                return n.test(e) ? `"${e.replace(l,'""')}"` : e
            }
        },
        362052: (e, t, s) => {
            "use strict";
            s.d(t, {
                CompareLabel: () => n
            });
            var i = s(50959),
                o = s(558470),
                r = s(798497);

            function n(e) {
                return i.createElement("div", {
                    className: r.wrapper
                }, i.createElement("span", null, e.label), i.createElement(o.Badge, {
                    className: r.newLabel,
                    size: o.BadgeSize.XSmall
                }, "New"))
            }
        },
        920389: (e, t, s) => {
            "use strict";
            s.d(t, {
                runOrSignIn: () => o
            });
            const i = s(495046).enabled("widget");

            function o(e, t) {
                i ? e() : window.runOrSignIn(e, t)
            }
        },
        817713: (e, t, s) => {
            "use strict";
            s.d(t, {
                NoScrollChoicer: () => g
            });
            var i = s(50959),
                o = s(500962),
                r = s(497754),
                n = s(445437),
                l = s(396016),
                a = s(389401),
                d = s(400236),
                c = s(83436),
                h = s(157490),
                u = s(444530);

            function p(e) {
                const {
                    children: t,
                    className: s,
                    onResize: o,
                    onClick: r
                } = e, n = (0, u.useResizeObserver)((([e]) => {
                    o(e.target.getBoundingClientRect())
                }));
                return i.createElement("div", {
                    ref: n,
                    className: s,
                    onClick: r
                }, t)
            }
            var _ = s(690863);
            class g extends i.PureComponent {
                constructor(e) {
                    super(e), this._getDropdownHeight = () => {
                            if (!this._dropdownParent) return;
                            const e = window.innerHeight - this._dropdownParent.getBoundingClientRect().bottom - 20;
                            return e && e < 50 ? void 0 : e
                        }, this._getFirstHiddenItemIndex = () => {
                            let e;
                            if (this.state.availableWidth && !this._itemSizes.includes(null)) {
                                let t = 0;
                                for (e = 0; e < this.props.items.length; e++) {
                                    const s = t + (this._itemSizes[e] || 0);
                                    if (!((e === this.props.items.length - 1 ? s : s + 41) < this.state.availableWidth)) break;
                                    t = s
                                }
                            } else e = this.state.availableWidth ? this.props.items.length : 0;
                            return e
                        },
                        this._onElementResize = ([e]) => {
                            this.setState({
                                availableWidth: e.contentRect.width,
                                isOpened: !1
                            })
                        }, this._onSelect = e => {
                            this.props.onSelect && this.props.onSelect(e), this.setState({
                                activeItem: e,
                                isOpened: !1
                            })
                        }, this._onDropdownSelect = (e, t) => {
                            this.props.onSelect && this.props.onSelect(t.actualIndex), this.setState({
                                activeItem: t.actualIndex,
                                isOpened: !1
                            })
                        }, this._onOutsideClick = e => {
                            this.state.isOpened && (this.state.isOpened && (e.preventDefault(), e.stopPropagation()), this.setState({
                                isOpened: !1
                            }))
                        }, this._onDropdownItemClick = () => {
                            this.setState({
                                isOpened: !this.state.isOpened
                            })
                        }, this._onItemResize = (e, t) => {
                            this._itemSizes[e] = t.width, this._itemSizes.includes(null) || this.forceUpdate()
                        }, this._itemSizes = this.props.items.map((e => null)), this.state = {
                            availableWidth: 0,
                            activeItem: this.props.activeItem || 0,
                            isOpened: !1
                        }
                }
                render() {
                    const e = this._getFirstHiddenItemIndex(),
                        t = this.props.items.slice(0, e),
                        s = this.props.items.slice(e),
                        u = t.map(((e, t) => {
                            const s = this.state.activeItem === t,
                                o = r(n.itemContent, {
                                    [n.active]: s
                                });
                            return i.createElement(p, {
                                key: e.title,
                                className: r(n.item, {
                                    [n.active]: s
                                }),
                                onClick: this._onSelect.bind(this, t),
                                onResize: this._onItemResize.bind(this, t)
                            }, i.createElement("div", {
                                className: o
                            }, e.title))
                        })),
                        g = s.map(((e, s) => ({
                            elem: e.title,
                            actualIndex: s + t.length
                        }))),
                        f = this.state.activeItem - e,
                        m = f >= 0,
                        v = i.createElement(h.OutsideEvent, {
                            handler: this._onOutsideClick,
                            click: !0
                        }, (e => i.createElement("div", {
                            ref: e => e && (this._dropdownParent = o.findDOMNode(e))
                        }, i.createElement("div", {
                            className: r(n.item, {
                                [n.active]: m
                            }),
                            ref: e,
                            onClick: this._onDropdownItemClick
                        }, i.createElement("div", {
                            className: r(n.itemContent, n.dropdownItem, {
                                [n.active]: m
                            })
                        }, i.createElement(c.Icon, {
                            className: r(n.dropdownIcon, {
                                [n.active]: this.state.isOpened
                            }),
                            icon: _
                        }), i.createElement(d.DropdownList, {
                            isOpened: this.state.isOpened,
                            items: g,
                            selected: m ? f : void 0,
                            onSelect: this._onDropdownSelect,
                            top: 27,
                            right: 0,
                            itemsClassName: r(l.bluishItem, n.dropdownListItem),
                            selectedClassName: this.props.selectedItemClassName,
                            maxHeight: this._getDropdownHeight()
                        }))))));
                    return i.createElement(a.Measure, {
                        onResize: this._onElementResize
                    }, (e => i.createElement("div", {
                        className: r(n.elementWrap, this.props.className),
                        ref: e
                    }, i.createElement("div", {
                        className: n.itemsWrap
                    }, u, s.length ? v : void 0))))
                }
            }
        },
        523987: e => {
            e.exports = {
                modeTitle: "modeTitle-KK4vaPMw",
                modeTitleActive: "modeTitleActive-KK4vaPMw",
                switcherContainer: "switcherContainer-KK4vaPMw"
            }
        },
        450587: (e, t, s) => {
            "use strict";
            t.operators = {
                less: s(777754).t(null, void 0, s(24442)),
                eless: s(777754).t(null, void 0, s(406758)),
                greater: s(777754).t(null, void 0, s(983929)),
                egreater: s(777754).t(null, void 0, s(685878)),
                crosses: s(777754).t(null, void 0, s(306436)),
                crosses_above: s(777754).t(null, void 0, s(55125)),
                crosses_below: s(777754).t(null, void 0, s(421314)),
                in_range: s(777754).t(null, void 0, s(423367)),
                not_in_range: s(777754).t(null, void 0, s(69362)),
                equal: s(777754).t(null, void 0, s(604613)),
                nequal: s(777754).t(null, void 0, s(739777))
            }
        },
        450132: (e, t, s) => {
            "use strict";
            s.d(t, {
                ScanFields: () => i,
                earningsCalendarFieldSets: () => a,
                getDefaultFieldSetsByScreenerType: () => d
            });
            var i, o = s(777754),
                r = s(650151),
                n = s(695083);
            ! function(e) {
                e.BaseCurrencyLogoId = "base_currency_logoid", e.Change = "change", e.Country = "country", e.CurrencyLogoId = "currency_logoid", e.Description = "description", e.Industry = "industry", e.LogoId = "logoid", e.Name = "name", e.Performance1M = "Perf.1M", e.Performance3M = "Perf.3M", e.Performance6M = "Perf.6M", e.PerformanceW = "Perf.W", e.PerformanceY = "Perf.Y", e.PerformanceYTD = "Perf.YTD", e.Sector = "sector"
            }(i || (i = {}));
            const l = [{
                    id: "overview",
                    title: o.t(null, void 0, s(37260)),
                    screenerTypeContent: {
                        stock: {
                            stock: [i.LogoId, i.Name, "close", "change", "change_abs", "Recommend.All", "volume", "Value.Traded", "market_cap_basic", "price_earnings_ttm", "earnings_per_share_basic_ttm", "number_of_employees", i.Sector, "description", "type"],
                            _sector: [i.LogoId, i.Name, "close", "change", "change_abs", "Recommend.All", "volume", "Value.Traded", "market_cap_basic", "price_earnings_ttm", "earnings_per_share_basic_ttm", "number_of_employees", "industry", "description", "type"]
                        },
                        forex: [i.BaseCurrencyLogoId, i.CurrencyLogoId, i.Name, "close", "change", "change_abs", "bid", "ask", "high", "low", "Recommend.All", "description", "type"],
                        crypto: [i.BaseCurrencyLogoId, i.CurrencyLogoId, i.Name, "close", "change", "change_abs", "high", "low", "volume", "24h_vol|5", "24h_vol_change|5", "Recommend.All", "exchange", "description"],
                        crypto_mkt: [i.BaseCurrencyLogoId, i.Sector, "market_cap_calc", "market_cap_diluted_calc", "close", "total_shares_outstanding", "total_shares_diluted", "total_value_traded", "change"],
                        crypto_mkt_by_symbol: [i.CurrencyLogoId, i.Name, "close", "change", "change_abs", "high", "low", "volume", "Recommend.All", "exchange", "description"],
                        crypto_by_symbol: [i.CurrencyLogoId, i.Name, "exchange", "close", "change", "change_abs", "high", "low", "volume", "Recommend.All", "description"],
                        futures: [i.LogoId, i.Name, "close", "change", "change_abs", "high", "low", "Recommend.All", "description"],
                        continuous_futures: [i.LogoId, i.Name, "expiration", "close", "change", "change_abs", "high", "low", "Recommend.All", "description"],
                        cfd: [i.LogoId, i.Name, "close", "change", "change_abs", "high", "low", "Recommend.All", "description"],
                        sector: ["description", "market_cap_basic", "dividend_yield_recent", "change", "volume", "elements", "basic_elements"],
                        industry: ["description", "market_cap_basic", "dividend_yield_recent", "change", "volume", i.Sector, "elements"],
                        currency: [i.LogoId, i.Name, "close", "change", "change_abs", "high", "low", "Recommend.All", "description"],
                        bonds: [i.LogoId, i.Name, "coupon", "maturity_date", "close", "change", "change_abs", "high", "low", "Recommend.All", "description"],
                        pre_market: [i.LogoId, i.Name, "premarket_close", "premarket_change_abs", "premarket_change", "premarket_volume", "premarket_gap", "close", "change", "volume", "market_cap_basic"],
                        post_market: [i.LogoId, i.Name, "postmarket_close", "postmarket_change_abs", "postmarket_change", "postmarket_volume", "close", "change", "volume", "market_cap_basic"]
                    },
                    content: [],
                    screeners: [n.ScreenerType.Stock, n.ScreenerType.StockCompact, n.ScreenerType.Forex, n.ScreenerType.Futures, n.ScreenerType.ContinuousFutures, n.ScreenerType.Cfd, n.ScreenerType.Crypto, n.ScreenerType.CryptoMkt, n.ScreenerType.CryptoMktBySymbol, n.ScreenerType.CryptoBySymbol, n.ScreenerType.Sector, n.ScreenerType.Industry, n.ScreenerType.Currency, n.ScreenerType.Bonds, n.ScreenerType.PreMarket, n.ScreenerType.PostMarket],
                    showOnWidget: !0
                }, {
                    id: "performance",
                    title: o.t(null, void 0, s(663089)),
                    screenerTypeContent: {
                        stock: [i.LogoId, i.Name, "description", "type", "change.1", "change.5", "change.15", "change.60", "change.240", "change", "change.1W", "change.1M", "Perf.3M", "Perf.6M", "Perf.YTD", "Perf.Y", "Perf.5Y", "Perf.All", "beta_1_year", "Volatility.D"],
                        futures: [i.LogoId, i.Name, "description", "type", "change", "change.1W", "change.1M", "Perf.3M", "Perf.6M", "Perf.YTD", "Perf.Y", "Volatility.D"],
                        continuous_futures: [i.LogoId, i.Name, "description", "type", "change", "change.1W", "change.1M", "Perf.3M", "Perf.6M", "Perf.YTD", "Perf.Y", "Volatility.D"],
                        forex: [i.BaseCurrencyLogoId, i.CurrencyLogoId, i.Name, "description", "type", "change", "change.1W", "change.1M", "Perf.3M", "Perf.6M", "Perf.YTD", "Perf.Y", "Perf.5Y", "Perf.All", "Volatility.D"],
                        crypto: [i.BaseCurrencyLogoId, i.CurrencyLogoId, i.Name, "description", "type", "change", "change.1W", "change.1M", "Perf.3M", "Perf.6M", "Perf.YTD", "Perf.Y", "Perf.5Y", "Perf.All", "Volatility.D"],
                        crypto_mkt: [i.BaseCurrencyLogoId, i.Sector, "description", "type", "change", "change.1W", "change.1M", "Perf.3M", "Perf.6M", "Perf.YTD", "Perf.Y", "Volatility.D"],
                        crypto_mkt_by_symbol: [i.CurrencyLogoId, i.Name, "description", "type", "change", "change.1W", "change.1M", "Perf.3M", "Perf.6M", "Perf.YTD", "Perf.Y", "Volatility.D"],
                        crypto_by_symbol: [i.CurrencyLogoId, i.Name, "exchange", "description", "type", "change", "change.1W", "change.1M", "Perf.3M", "Perf.6M", "Perf.YTD", "Perf.Y", "Volatility.D"],
                        cfd: [i.LogoId, i.Name, "description", "type", "change", "change.1W", "change.1M", "Perf.3M", "Perf.6M", "Perf.YTD", "Perf.Y", "Volatility.D"],
                        sector: ["description", "change", "change.1W", "change.1M", "Perf.3M", "Perf.6M", "Perf.YTD", "Perf.Y"],
                        industry: ["description", "change", "change.1W", "change.1M", "Perf.3M", "Perf.6M", "Perf.YTD", "Perf.Y"],
                        currency: [i.LogoId, i.Name, "description", "type", "change", "change.1W", "change.1M", "Perf.3M", "Perf.6M", "Perf.YTD", "Perf.Y", "Volatility.D"],
                        bonds: [i.LogoId, i.Name, "description", "type", "change", "change.1W", "change.1M", "Perf.3M", "Perf.6M", "Perf.YTD", "Perf.Y", "Volatility.D"]
                    },
                    content: [],
                    screeners: [n.ScreenerType.Stock, n.ScreenerType.StockCompact, n.ScreenerType.Forex, n.ScreenerType.Futures, n.ScreenerType.ContinuousFutures, n.ScreenerType.Cfd, n.ScreenerType.Crypto, n.ScreenerType.CryptoMkt, n.ScreenerType.CryptoBySymbol, n.ScreenerType.CryptoMktBySymbol, n.ScreenerType.Sector, n.ScreenerType.Industry, n.ScreenerType.Currency, n.ScreenerType.Bonds, n.ScreenerType.PreMarket, n.ScreenerType.PostMarket],
                    showOnWidget: !0
                }, {
                    id: "extended_hours",
                    title: o.t(null, void 0, s(516608)),
                    content: [i.LogoId, i.Name, "description", "premarket_close", "premarket_change", "premarket_gap", "premarket_volume", "close", "change", "volume", "postmarket_close", "postmarket_change", "postmarket_volume", "Recommend.All", "market_cap_basic"],
                    screeners: [n.ScreenerType.Stock],
                    showOnWidget: !1
                }, {
                    id: "valuation",
                    title: o.t(null, void 0, s(796032)),
                    content: [i.LogoId, i.Name, "description", "type", "close", "market_cap_basic", "price_earnings_ttm", "price_revenue_ttm", "earnings_per_share_basic_ttm", "last_annual_eps", "enterprise_value_ebitda_ttm", "enterprise_value_fq", "total_shares_outstanding_fundamental"],
                    screeners: [n.ScreenerType.Stock, n.ScreenerType.StockCompact, n.ScreenerType.PreMarket, n.ScreenerType.PostMarket],
                    showOnWidget: !0
                }, {
                    id: "dividends",
                    title: o.t(null, void 0, s(634135)),
                    content: [i.LogoId, i.Name, "description", "type", "close", "dividend_yield_recent", "dividends_paid", "dps_common_stock_prim_issue_fy"],
                    screeners: [n.ScreenerType.Stock, n.ScreenerType.StockCompact, n.ScreenerType.PreMarket, n.ScreenerType.PostMarket],
                    showOnWidget: !0
                }, {
                    id: "margins",
                    title: o.t(null, {
                        context: "screener"
                    }, s(732648)),
                    content: [i.LogoId, i.Name, "description", "type", "gross_margin", "operating_margin", "pre_tax_margin", "after_tax_margin"],
                    screeners: [n.ScreenerType.Stock, n.ScreenerType.StockCompact, n.ScreenerType.PreMarket, n.ScreenerType.PostMarket],
                    showOnWidget: !0
                }, {
                    id: "income_statement",
                    title: o.t(null, void 0, s(506823)),
                    content: [i.LogoId, i.Name, "description", "type", "basic_eps_net_income", "earnings_per_share_basic_ttm", "earnings_per_share_diluted_ttm", "ebitda", "gross_profit_fq", "gross_profit", "total_revenue", "last_annual_eps", "last_annual_revenue", "net_income"],
                    screeners: [n.ScreenerType.Stock, n.ScreenerType.StockCompact, n.ScreenerType.PreMarket, n.ScreenerType.PostMarket],
                    showOnWidget: !0
                }, {
                    id: "balance_sheet",
                    title: o.t(null, void 0, s(730737)),
                    content: [i.LogoId, i.Name, "description", "type", "current_ratio", "debt_to_equity", "net_debt", "quick_ratio", "total_assets", "total_debt", "total_current_assets"],
                    screeners: [n.ScreenerType.Stock, n.ScreenerType.StockCompact, n.ScreenerType.PreMarket, n.ScreenerType.PostMarket],
                    showOnWidget: !0
                }, {
                    id: "oscillators",
                    title: o.t(null, void 0, s(454800)),
                    screenerTypeContent: {
                        stock: [i.LogoId, i.Name, "Recommend.Other", "ADX", "AO", "ATR", "CCI20", "MACD.macd", "MACD.signal", "Mom", "RSI", "Stoch.K", "Stoch.D", "description", "type"],
                        forex: [i.BaseCurrencyLogoId, i.CurrencyLogoId, i.Name, "Recommend.Other", "ADX", "AO", "ATR", "CCI20", "MACD.macd", "MACD.signal", "Mom", "RSI", "Stoch.K", "Stoch.D", "description", "type"],
                        futures: [i.LogoId, i.Name, "Recommend.Other", "ADX", "AO", "ATR", "CCI20", "MACD.macd", "MACD.signal", "Mom", "RSI", "Stoch.K", "Stoch.D", "description", "type"],
                        continuous_futures: [i.LogoId, i.Name, "Recommend.Other", "ADX", "AO", "ATR", "CCI20", "MACD.macd", "MACD.signal", "Mom", "RSI", "Stoch.K", "Stoch.D", "description", "type"],
                        crypto: [i.BaseCurrencyLogoId, i.CurrencyLogoId, i.Name, "Recommend.Other", "ADX", "AO", "ATR", "CCI20", "MACD.macd", "MACD.signal", "Mom", "RSI", "Stoch.K", "Stoch.D", "description", "type"],
                        crypto_mkt: [i.BaseCurrencyLogoId, i.Sector, "Recommend.Other", "ADX", "AO", "ATR", "CCI20", "MACD.macd", "MACD.signal", "Mom", "RSI", "Stoch.K", "Stoch.D", "description", "type"],
                        crypto_mkt_by_symbol: [i.CurrencyLogoId, i.Name, "Recommend.Other", "ADX", "AO", "ATR", "CCI20", "MACD.macd", "MACD.signal", "Mom", "RSI", "Stoch.K", "Stoch.D", "description", "type"],
                        crypto_by_symbol: [i.CurrencyLogoId, i.Name, "exchange", "Recommend.Other", "ADX", "AO", "ATR", "CCI20", "MACD.macd", "MACD.signal", "Mom", "RSI", "Stoch.K", "Stoch.D", "description", "type"],
                        cfd: [i.LogoId, i.Name, "Recommend.Other", "ADX", "AO", "ATR", "CCI20", "MACD.macd", "MACD.signal", "Mom", "RSI", "Stoch.K", "Stoch.D", "description", "type"],
                        currency: [i.LogoId, i.Name, "Recommend.Other", "ADX", "AO", "ATR", "CCI20", "MACD.macd", "MACD.signal", "Mom", "RSI", "Stoch.K", "Stoch.D", "description", "type"],
                        bonds: [i.LogoId, i.Name, "Recommend.Other", "ADX", "AO", "ATR", "CCI20", "MACD.macd", "MACD.signal", "Mom", "RSI", "Stoch.K", "Stoch.D", "description", "type"]
                    },
                    content: [],
                    screeners: [n.ScreenerType.Stock, n.ScreenerType.StockCompact, n.ScreenerType.Forex, n.ScreenerType.Futures, n.ScreenerType.ContinuousFutures, n.ScreenerType.Cfd, n.ScreenerType.Crypto, n.ScreenerType.CryptoMkt, n.ScreenerType.CryptoMktBySymbol, n.ScreenerType.CryptoBySymbol, n.ScreenerType.Currency, n.ScreenerType.Bonds, n.ScreenerType.PreMarket, n.ScreenerType.PostMarket],
                    showOnWidget: !0
                }, {
                    id: "moving_averages",
                    title: o.t(null, void 0, s(518795)),
                    screenerTypeContent: {
                        stock: [i.LogoId, i.Name, "Recommend.MA", "close", "SMA20", "SMA50", "SMA200", "BB.upper", "BB.lower", "description", "type"],
                        forex: [i.BaseCurrencyLogoId, i.CurrencyLogoId, i.Name, "Recommend.MA", "close", "SMA20", "SMA50", "SMA200", "BB.upper", "BB.lower", "description", "type"],
                        futures: [i.LogoId, i.Name, "Recommend.MA", "close", "SMA20", "SMA50", "SMA200", "BB.upper", "BB.lower", "description", "type"],
                        continuous_futures: [i.LogoId, i.Name, "Recommend.MA", "close", "SMA20", "SMA50", "SMA200", "BB.upper", "BB.lower", "description", "type"],
                        crypto: [i.BaseCurrencyLogoId, i.CurrencyLogoId, i.Name, "Recommend.MA", "close", "SMA20", "SMA50", "SMA200", "BB.upper", "BB.lower", "description", "type"],
                        crypto_mkt: [i.BaseCurrencyLogoId, i.Sector, "Recommend.MA", "close", "SMA20", "SMA50", "SMA200", "BB.upper", "BB.lower", "description", "type"],
                        crypto_mkt_by_symbol: [i.CurrencyLogoId, i.Name, "Recommend.MA", "close", "SMA20", "SMA50", "SMA200", "BB.upper", "BB.lower", "description", "type"],
                        crypto_by_symbol: [i.CurrencyLogoId, i.Name, "exchange", "Recommend.MA", "close", "SMA20", "SMA50", "SMA200", "BB.upper", "BB.lower", "description", "type"],
                        cfd: [i.LogoId, i.Name, "Recommend.MA", "close", "SMA20", "SMA50", "SMA200", "BB.upper", "BB.lower", "description", "type"],
                        currency: [i.LogoId, i.Name, "Recommend.MA", "close", "SMA20", "SMA50", "SMA200", "BB.upper", "BB.lower", "description", "type"],
                        bonds: [i.LogoId, i.Name, "Recommend.MA", "close", "SMA20", "SMA50", "SMA200", "BB.upper", "BB.lower", "description", "type"]
                    },
                    content: [],
                    screeners: [n.ScreenerType.Stock, n.ScreenerType.StockCompact, n.ScreenerType.Forex, n.ScreenerType.Futures, n.ScreenerType.ContinuousFutures, n.ScreenerType.Cfd, n.ScreenerType.Crypto, n.ScreenerType.CryptoMkt, n.ScreenerType.CryptoMktBySymbol, n.ScreenerType.CryptoBySymbol, n.ScreenerType.Currency, n.ScreenerType.Bonds, n.ScreenerType.PreMarket, n.ScreenerType.PostMarket],
                    showOnWidget: !0
                }],
                a = [i.LogoId, "name", "market_cap_basic", "earnings_per_share_forecast_next_fq", "earnings_per_share_fq", "eps_surprise_fq", "eps_surprise_percent_fq", "revenue_forecast_next_fq", "revenue_fq", "earnings_release_next_date", "earnings_release_next_calendar_date", "earnings_release_next_time", "description", "type"];

            function d(e) {
                const t = {
                    screenerType: n.ScreenerType.Stock,
                    markets: ["stock"],
                    isCompact: !1,
                    subtype: "",
                    isOnWidget: !1
                };
                let s = l;
                const i = Object.assign(t, e),
                    {
                        screenerType: o,
                        isCompact: a,
                        subtype: d,
                        isOnWidget: c
                    } = i,
                    {
                        markets: h
                    } = i;
                return s = s.filter((e => {
                    if (o === n.ScreenerType.Stock) {
                        const t = a ? `${o}_compact` : o;
                        return e.screeners.includes(t)
                    }
                    return e.screeners.includes(o)
                })), c && (s = s.filter((e => !0 === e.showOnWidget))), s.forEach((e => {
                    if (void 0 !== e.screenerTypeContent) {
                        const s = e.screenerTypeContent[(0, r.ensureDefined)(o)] || e.screenerTypeContent.stock;
                        if (t = s, Array.isArray(t)) e.content = (0, r.ensureDefined)(s);
                        else {
                            const t = Object.keys(s),
                                i = h.reduce(((e, t) => (e.push(`${(0,r.ensureDefined)(t)}_${(0,r.ensureDefined)(d)}`), e.push(`${(0,r.ensureDefined)(d)}`), e.push((0, r.ensureDefined)(t)), e)), []),
                                o = function(e, t) {
                                    for (const s of e)
                                        if (t.includes(s)) return s;
                                    return "stock"
                                }([...new Set(i)], t);
                            e.content = s[o]
                        }
                    }
                    var t;
                    c && (e.content = e.content.filter((e => "description" !== e)))
                })), s
            }
        },
        636467: (e, t, s) => {
            "use strict";
            s.d(t, {
                defaultFilterSets: () => a,
                applyMarketValuesToDefaultFilterSets: () => d,
                fixInvalidFilters: () => c
            });
            var i = s(777754),
                o = s(249219),
                r = s(125316),
                n = s(133373);
            const l = {
                    forex: {
                        top_gainers: i.t(null, void 0, s(325757)),
                        top_losers: i.t(null, void 0, s(41275))
                    },
                    default: {
                        top_gainers: i.t(null, void 0, s(683966)),
                        top_losers: i.t(null, void 0, s(686255))
                    }
                },
                a = [{
                    id: "general",
                    title: i.t(null, void 0, s(337157)),
                    content: {
                        sort_field: "name",
                        sort_direction: "asc",
                        filters: {}
                    }
                }, {
                    id: "most_capitalized",
                    title: i.t(null, void 0, s(636123)),
                    content: {
                        sort_field: "market_cap_basic",
                        sort_direction: "desc",
                        filters: {
                            is_primary: {
                                operator: "equal",
                                value: !0
                            },
                            active_symbol: {
                                operator: "equal",
                                value: !0
                            }
                        }
                    }
                }, {
                    id: "volume_leaders",
                    title: i.t(null, void 0, s(797240)),
                    adjustFilter: {
                        volume: [1]
                    },
                    content: {
                        sort_field: "volume",
                        sort_direction: "desc",
                        filters: {
                            is_primary: {
                                operator: "equal",
                                value: !0
                            },
                            active_symbol: {
                                operator: "equal",
                                value: !0
                            }
                        }
                    }
                }, {
                    id: "top_gainers",
                    title: l.default.top_gainers,
                    adjustFilter: {
                        change: [1]
                    },
                    content: {
                        sort_field: "change",
                        sort_direction: "desc",
                        filters: {
                            change: {
                                operator: "greater",
                                value: 0
                            },
                            is_primary: {
                                operator: "equal",
                                value: !0
                            },
                            active_symbol: {
                                operator: "equal",
                                value: !0
                            }
                        }
                    }
                }, {
                    id: "top_losers",
                    title: l.default.top_losers,
                    adjustFilter: {
                        change: [0]
                    },
                    content: {
                        sort_field: "change",
                        sort_direction: "asc",
                        filters: {
                            change: {
                                operator: "less",
                                value: 0
                            },
                            is_primary: {
                                operator: "equal",
                                value: !0
                            },
                            active_symbol: {
                                operator: "equal",
                                value: !0
                            }
                        }
                    }
                }, {
                    id: "ath",
                    title: i.t(null, void 0, s(546796)),
                    content: {
                        sort_field: "name",
                        sort_direction: "asc",
                        filters: {
                            "High.All": {
                                operator: "eless",
                                value: "high"
                            },
                            is_primary: {
                                operator: "equal",
                                value: !0
                            },
                            active_symbol: {
                                operator: "equal",
                                value: !0
                            }
                        }
                    }
                }, {
                    id: "atl",
                    title: i.t(null, void 0, s(151339)),
                    content: {
                        sort_field: "name",
                        sort_direction: "asc",
                        filters: {
                            "Low.All": {
                                operator: "egreater",
                                value: "low"
                            },
                            is_primary: {
                                operator: "equal",
                                value: !0
                            },
                            active_symbol: {
                                operator: "equal",
                                value: !0
                            }
                        }
                    }
                }, {
                    id: "high_dividend",
                    title: i.t(null, void 0, s(506255)),
                    content: {
                        sort_field: "dividend_yield_recent",
                        sort_direction: "desc",
                        filters: {
                            dividend_yield_recent: {
                                operator: "greater",
                                value: 0
                            },
                            is_primary: {
                                operator: "equal",
                                value: !0
                            },
                            active_symbol: {
                                operator: "equal",
                                value: !0
                            }
                        }
                    }
                }, {
                    id: "above_52wk_high",
                    title: i.t(null, void 0, s(449404)),
                    content: {
                        sort_field: "name",
                        sort_direction: "asc",
                        filters: {
                            price_52_week_high: {
                                operator: "eless",
                                value: "high"
                            },
                            is_primary: {
                                operator: "equal",
                                value: !0
                            },
                            active_symbol: {
                                operator: "equal",
                                value: !0
                            }
                        }
                    }
                }, {
                    id: "below_52wk_low",
                    title: i.t(null, void 0, s(946306)),
                    content: {
                        sort_field: "name",
                        sort_direction: "asc",
                        filters: {
                            price_52_week_low: {
                                operator: "egreater",
                                value: "low"
                            },
                            is_primary: {
                                operator: "equal",
                                value: !0
                            },
                            active_symbol: {
                                operator: "equal",
                                value: !0
                            }
                        }
                    }
                }, {
                    id: "monthly_high",
                    title: i.t(null, void 0, s(628086)),
                    content: {
                        sort_field: "name",
                        sort_direction: "asc",
                        filters: {
                            "High.1M": {
                                operator: "eless",
                                value: "high"
                            },
                            is_primary: {
                                operator: "equal",
                                value: !0
                            },
                            active_symbol: {
                                operator: "equal",
                                value: !0
                            }
                        }
                    }
                }, {
                    id: "monthly_low",
                    title: i.t(null, void 0, s(649381)),
                    content: {
                        sort_field: "name",
                        sort_direction: "asc",
                        filters: {
                            "Low.1M": {
                                operator: "egreater",
                                value: "low"
                            },
                            is_primary: {
                                operator: "equal",
                                value: !0
                            },
                            active_symbol: {
                                operator: "equal",
                                value: !0
                            }
                        }
                    }
                }, {
                    id: "most_volatile",
                    title: i.t(null, void 0, s(247547)),
                    adjustFilter: {
                        "Volatility.D": [1]
                    },
                    content: {
                        sort_field: "Volatility.D",
                        sort_direction: "desc",
                        filters: {
                            is_primary: {
                                operator: "equal",
                                value: !0
                            },
                            active_symbol: {
                                operator: "equal",
                                value: !0
                            }
                        }
                    }
                }, {
                    id: "unusual_volume",
                    title: i.t(null, void 0, s(969162)),
                    adjustFilter: {
                        relative_volume_10d_calc: [1]
                    },
                    content: {
                        sort_field: "relative_volume_10d_calc",
                        sort_direction: "desc",
                        filters: {
                            is_primary: {
                                operator: "equal",
                                value: !0
                            },
                            relative_volume_10d_calc: null,
                            active_symbol: {
                                operator: "equal",
                                value: !0
                            }
                        }
                    }
                }, {
                    id: "overbought",
                    title: i.t(null, void 0, s(610590)),
                    content: {
                        sort_field: "name",
                        sort_direction: "asc",
                        filters: {
                            is_primary: {
                                operator: "equal",
                                value: !0
                            },
                            RSI: {
                                operator: "greater",
                                value: 70
                            },
                            active_symbol: {
                                operator: "equal",
                                value: !0
                            }
                        }
                    }
                }, {
                    id: "oversold",
                    title: i.t(null, void 0, s(728384)),
                    content: {
                        sort_field: "name",
                        sort_direction: "asc",
                        filters: {
                            is_primary: {
                                operator: "equal",
                                value: !0
                            },
                            RSI: {
                                operator: "less",
                                value: 30
                            },
                            active_symbol: {
                                operator: "equal",
                                value: !0
                            }
                        }
                    }
                }, {
                    id: "outperforming_SMA50",
                    title: i.t(null, void 0, s(363177)),
                    content: {
                        sort_field: "name",
                        sort_direction: "asc",
                        filters: {
                            is_primary: {
                                operator: "equal",
                                value: !0
                            },
                            SMA50: {
                                operator: "less",
                                value: "close"
                            },
                            active_symbol: {
                                operator: "equal",
                                value: !0
                            }
                        }
                    }
                }, {
                    id: "underperforming_SMA50",
                    title: i.t(null, void 0, s(859301)),
                    content: {
                        sort_field: "name",
                        sort_direction: "asc",
                        filters: {
                            is_primary: {
                                operator: "equal",
                                value: !0
                            },
                            SMA50: {
                                operator: "greater",
                                value: "close"
                            },
                            active_symbol: {
                                operator: "equal",
                                value: !0
                            }
                        }
                    }
                }, {
                    id: "earnings_this_week",
                    title: i.t(null, void 0, s(419370)),
                    content: {
                        sort_field: "market_cap_basic",
                        sort_direction: "desc",
                        filters: {
                            is_primary: {
                                operator: "equal",
                                value: !0
                            },
                            earnings_release_next_date: null,
                            active_symbol: {
                                operator: "equal",
                                value: !0
                            }
                        }
                    }
                }, {
                    id: "pre_market_gainers",
                    title: i.t(null, void 0, s(972412)),
                    adjustFilter: {
                        premarket_change: [1]
                    },
                    content: {
                        sort_field: "premarket_change",
                        sort_direction: "desc",
                        filters: {
                            is_primary: {
                                operator: "equal",
                                value: !0
                            },
                            premarket_change: {
                                operator: "greater",
                                value: 0
                            },
                            active_symbol: {
                                operator: "equal",
                                value: !0
                            }
                        }
                    }
                }, {
                    id: "after_hours_gainers",
                    title: i.t(null, void 0, s(918164)),
                    adjustFilter: {
                        postmarket_volume: [1]
                    },
                    content: {
                        sort_field: "postmarket_volume",
                        sort_direction: "desc",
                        filters: {
                            is_primary: {
                                operator: "equal",
                                value: !0
                            },
                            postmarket_volume: {
                                operator: "greater",
                                value: 0
                            },
                            active_symbol: {
                                operator: "equal",
                                value: !0
                            }
                        }
                    }
                }];

            function d(e) {
                a.forEach((t => {
                    if (t.disabled = !1, t.id in o.marketFilterValues.america)
                        for (const e in o.marketFilterValues.america[t.id]) t.content.filters[e] = o.marketFilterValues.america[t.id][e];
                    (t => {
                        ["forex", "crypto"].includes(e[0]) || e.includes("brazil") ? delete t.content.filters.name : t.content.filters.name = ["common", "dr", "etf"], 1 === e.length && "america" === e[0] ? t.content.filters.exchange = ["NYSE", "NASDAQ", "AMEX"] : delete t.content.filters.exchange, "general" === t.id && ("crypto" === e[0] && (t.content.sort_field = "24h_vol|5", t.content.sort_direction = "desc"), "forex" === e[0] && (t.content.sort_field = "name", t.content.sort_direction = "asc"));
                        const s = [];
                        for (const i of e) {
                            const e = o.marketFilterValues[i];
                            if (e && t.id in e)
                                if (t.disabled || null !== e[t.id]) {
                                    const i = e[t.id];
                                    for (const e in i) {
                                        const o = i[e];
                                        if (null !== o && (0, r.ofTheSameType)(t.content.filters[e], o))
                                            if (!s.includes(e) && e in t.content.filters) {
                                                const i = (0, n.getWidestFieldValuesBorders)(t.content.filters[e], o);
                                                i ? t.content.filters[e] = i : (delete t.content.filters[e], s.push(e))
                                            } else t.content.filters[e] = o;
                                        else delete t.content.filters[e], s.push(e)
                                    }
                                } else t.disabled = !0
                        }
                        "forex" === e[0] ? l.forex[t.id] && (t.title = l.forex[t.id]) : l.default[t.id] && (t.title = l.default[t.id])
                    })(t), "general" === t.id && (t.disabled = "forex" !== e[0] && "crypto" !== e[0]), ["pre_market_gainers", "after_hours_gainers"].includes(t.id) && (t.disabled = !0)
                }))
            }

            function c(e) {
                return Object.keys(e).forEach((t => {
                    const s = e[t];
                    "market_cap_basic" === t && "nempty" === s.operation && delete e[t]
                })), e
            }
        },
        179670: (e, t, s) => {
            "use strict";

            function i() {
                return Promise.all([s.e(86256), s.e(91901), s.e(59302), s.e(59650), s.e(745), s.e(28083)]).then(s.bind(s, 203409)).then((e => e.showAlertsAreReadonlyWarningDialogImpl()))
            }
            s.d(t, {
                showAlertsAreReadonlyWarningDialog: () => i
            })
        },
        356130: (e, t, s) => {
            "use strict";
            s.d(t, {
                getBackendUrl: () => o
            });
            const i = () => window.SCREENER_HOST || "https://scanner.tradingview.com";

            function o(e, t = e) {
                return Array.isArray(e) ? e.length > 1 ? `${i()}/global/` : `${i()}/${t[0]}/` : `${i()}/${t}/`
            }
        },
        695083: (e, t, s) => {
            "use strict";
            var i;

            function o(e) {
                return void 0 === e ? i.Stock : ["forex", "crypto"].includes(e) ? e : i.Stock
            }
            s.d(t, {
                    ScreenerType: () => i,
                    getScreenerType: () => o
                }),
                function(e) {
                    e.Bonds = "bonds", e.Cfd = "cfd",
                        e.ContinuousFutures = "continuous_futures", e.Crypto = "crypto", e.CryptoBySymbol = "crypto_by_symbol", e.CryptoMkt = "crypto_mkt", e.CryptoMktBySymbol = "crypto_mkt_by_symbol", e.Currency = "currency", e.Forex = "forex", e.Futures = "futures", e.Industry = "industry", e.PostMarket = "post_market", e.PreMarket = "pre_market", e.Sector = "sector", e.Stock = "stock", e.StockCompact = "stock_compact"
                }(i || (i = {}))
        },
        965305: (e, t, s) => {
            "use strict";
            s.d(t, {
                getSectorAndIndustryUrlByMarket: () => o,
                cleanSectorName: () => r
            });
            s(249219);
            const i = {
                america: "usa",
                brazil: "brazilia",
                euronext: "europe",
                hongkong: "hong-kong",
                newzealand: "new-zealand",
                uk: "united-kingdom",
                rsa: "south-africa"
            };

            function o(e, t, s = "sector") {
                return e && t ? (i[t] && (t = i[t]), `/markets/stocks-${t}/sectorandindustry-${s}/${r(e).toLowerCase()}/`) : "/markets/stocks-usa/sectorandindustry-sector/"
            }

            function r(e) {
                return e.replace(/[^a-zA-Z0-9]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "")
            }
        },
        963867: (e, t, s) => {
            "use strict";

            function i(e) {
                return {
                    standalone: Boolean(e.standalone),
                    originalStandalone: Boolean(e.originalStandalone),
                    onWidget: Boolean(e.onWidget)
                }
            }

            function o(e) {
                const t = i(e);
                return t.standalone && t.originalStandalone && !t.onWidget
            }

            function r(e) {
                const t = i(e);
                return t.standalone && !t.originalStandalone && !t.onWidget
            }

            function n(e) {
                const t = i(e);
                return !t.standalone && t.originalStandalone && !t.onWidget
            }

            function l(e) {
                return i(e).onWidget
            }

            function a(e) {
                return o(e) ? "screener" : r(e) ? "market" : n(e) ? "chart" : "widget"
            }
            s.d(t, {
                isScreenerPage: () => o,
                isMarketPage: () => r,
                isChartPage: () => n,
                isExternalWidget: () => l,
                getScreenerPage: () => a
            })
        },
        432241: (e, t, s) => {
            "use strict";
            var i;
            s.d(t, {
                    UserActionState: () => i
                }),
                function(e) {
                    e.Click = "clicked", e.ApplyFilters = "filters_applied", e.Type = "typed", e.Slide = "slided", e.Drag = "drag"
                }(i || (i = {}))
        },
        897925: (e, t, s) => {
            "use strict";
            s.d(t, {
                DispatchContextMenuActionEvent: () => o
            });
            var i = s(432241);
            class o {
                constructor(e, t, s) {
                    this.event = "context_menu_action", this.state = i.UserActionState.Click, this.source = e, this.value = s.toString(), this.location = t
                }
            }
        },
        799148: (e, t, s) => {
            "use strict";
            s.d(t, {
                ChangeMarketEvent: () => i,
                ChangeMarketSelectionModeEvent: () => o
            });
            class i {
                constructor(e) {
                    this.event = "change_market", this.source = "market_selector", this.location = "toolbar", this.state = "", this.value = e
                }
            }
            class o {
                constructor(e) {
                    this.event = "change_market_selection_mode", this.source = "market_selection_mode_switch", this.location = "market_dialog", this.state = "", this.value = e
                }
            }
        },
        426752: (e, t, s) => {
            "use strict";
            s.d(t, {
                initScreenerInstance: () => n,
                sendSnowPlowData: () => l,
                sendNewScreenerSnowplowData: () => a,
                getSnowPlowRefreshInterval: () => d,
                getColumnSetNameForSnowPlow: () => c,
                getFilterSetNameForSnowPlow: () => h
            });
            var i = s(776734),
                o = s(963867);
            let r;

            function n(e) {
                r = e
            }

            function l(e) {
                let t = "",
                    s = "";
                r && (t = (0, o.getScreenerPage)(r.screenerBridge), s = r.screenerType);
                (!r || !(0, o.isExternalWidget)(r.screenerBridge)) && (0, i.getTracker)().then((i => {
                    i && i.trackScreenerHighLevel(e, s, t)
                }))
            }

            function a(e) {
                (0, i.getTracker)().then((t => {
                    t && t.trackScreenerHighLevel(e, "new_screener", "market")
                }))
            }

            function d(e) {
                return 1 === e ? "auto" : -1 === e ? "manual" : `${e}`
            }

            function c(e) {
                return r.defaultFieldSets.find((t => t.id === e)) ? e : "custom"
            }

            function h(e) {
                return r.defaultFilterSets.find((t => t.id === e)) ? e : "custom"
            }
        },
        410138: (e, t, s) => {
            "use strict";
            s.d(t, {
                getScreenerSymbolLogoUrl: () => r
            });
            var i = s(849204);
            const o = (0, i.getLogoUrlResolver)();

            function r(e) {
                if (e && "null" !== e) return o.getSymbolLogoUrl(e, i.LogoSize.Medium)
            }
        },
        902460: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                ScreenerWidget: () => hi
            });
            var i, o = s(133373),
                r = (s(81207), s(786575), s(965426), s(713710), s(61843), s(563345), s(503510), s(454312), s(520256), s(114310), s(595517), s(85813), s(618161), s(271834), s(220004), s(357789), s(48513), s(256337), s(455567)),
                n = s(605324),
                l = s(12481),
                a = s(207678),
                d = s(740203),
                c = s(552279),
                h = s(777754),
                u = s(263605),
                p = (s(875561), s(286974), s(30311), s(218333)),
                _ = (s(136680), s(508846)),
                g = s(264996),
                f = s(779923),
                m = s(237037),
                v = s(397239),
                b = s(249219),
                y = s(194851);
            ! function(e) {
                e[e.None = 0] = "None", e[e.Widget = 1] = "Widget", e[e.Site = 2] = "Site"
            }(i || (i = {}));
            var S = s(868151),
                w = s(833813),
                C = s(768038),
                k = s(426752);
            class $ {
                constructor(e) {
                    this.event = "change_timeframe", this.source = "timeframe_selector", this.location = "toolbar", this.state = "", this.value = e
                }
            }
            class x {
                constructor(e, t) {
                    this.event = "change_columnset", this.source = "columset_selector", this.location = "toolbar", this.state = "", this.value = (0, k.getColumnSetNameForSnowPlow)(t), this.source = e
                }
            }
            class I {
                constructor(e, t) {
                    this.event = "change_favorite_columnsets", this.source = "columnset_star_button", this.location = "toolbar", this.value = (0, k.getColumnSetNameForSnowPlow)(t), this.state = e
                }
            }
            class F {
                constructor() {
                    this.event = "rename_custom_columnset", this.source = "columnset_pen_button", this.location = "toolbar", this.state = "", this.value = ""
                }
            }
            class T {
                constructor(e) {
                    this.event = "change_filterset", this.source = "filterset_selector", this.location = "toolbar", this.state = "", this.value = (0, k.getFilterSetNameForSnowPlow)(e)
                }
            }
            class M {
                constructor() {
                    this.event = "rename_custom_filterset", this.source = "filterset_pen_button", this.location = "toolbar", this.state = "", this.value = ""
                }
            }
            var A = s(432241);
            class E {
                constructor(e, t, s) {
                    this.event = "change_columns", this.source = "column_selector", this.location = "header_fields_popup" === e ? "header" : "toolbar", this.state = t ? "added" : "removed", this.value = s
                }
            }
            class P {
                constructor(e) {
                    this.event = "column_move", this.source = "column_header", this.location = "header", this.state = A.UserActionState.Drag, this.value = e
                }
            }
            class B {
                constructor() {
                    this.event = "refresh_screener_data", this.source = "refresh_button", this.location = "toolbar", this.state = "", this.value = ""
                }
            }
            class D {
                constructor(e) {
                    this.event = "change_refresh_interval", this.source = "refresh_interval_selector", this.location = "toolbar", this.state = "", this.value = (0, k.getSnowPlowRefreshInterval)(e)
                }
            }
            var R = s(648779),
                O = s(823127);
            const L = s(272001).getLogger("Screener.Popups");
            class j {
                constructor(e, t, s) {
                    this._model = e, this._view = t, this._bridge = s, this._markets = null, this._model.fieldSetSaved.subscribe(null, (() => this._view.$fieldSetsButton.removeClass("tv-screener-toolbar__button--unsaved"))), this._model.filterSetSaved.subscribe(null, (() => this._view.$filterSetsButton.removeClass("tv-screener-toolbar__button--unsaved"))), this._fieldsPopupCache = {}
                }
                showPromptDialog(e, t) {
                    return new Promise((i => {
                        (0,
                            f.showRename)({
                            title: e.title,
                            text: e.label,
                            initValue: t,
                            mainButtonText: h.t(null, void 0, s(185520)),
                            maxLength: 128,
                            onRename: ({
                                newValue: e,
                                dialogClose: t
                            }) => {
                                i(e), t()
                            },
                            onClose: i
                        })
                    }))
                }
                showMaintenanceDialog() {
                    (0, p.showNoticeDialog)({
                        type: "modal",
                        title: h.t(null, void 0, s(713991)),
                        content: h.t(null, void 0, s(177513))
                    })
                }
                showConfirmDialog(e) {
                    return new Promise((t => {
                        (0, f.showConfirm)({
                            text: e,
                            onConfirm: ({
                                dialogClose: e
                            }) => {
                                t(!0), e()
                            },
                            onClose: () => t(!1)
                        })
                    }))
                }
                showNotice(e, t) {
                    (0, p.showNoticeDialog)({
                        content: e,
                        title: t
                    })
                }
                setFieldsPopup(e, t, i) {
                    e.addClass("tv-dropdown-behavior__button");
                    const o = O(`<div class="${t||""}">`);
                    o.insertAfter(e).append(e);
                    const r = O('<div class="tv-dropdown__body tv-dropdown__body--over-trigger tv-dropdown-behavior__body tv-screener-fields-popup i-hidden">').appendTo(o);
                    i && r.addClass(i);
                    const n = O('<div class="tv-screener-fields-popup__search-wrap">').appendTo(r),
                        l = O(`<input type="text" placeholder="${h.t(null,void 0,s(973127))}" class="tv-screener-fields-popup__search-input">`).appendTo(n),
                        a = O('<div class="tv-dropdown-behavior__scroll">').appendTo(r),
                        d = O('<div class="tv-screener-fields-popup__items-wrap tv-dropdown-behavior__inscroll">').appendTo(a);
                    "header_fields-button" === e.attr("data-name") && d.attr({
                        "data-name": "header_fields_popup"
                    });
                    const c = O('<div class="tv-screener-fields-popup__item tv-screener-fields-popup__item--no-matches js-hidden">No matches</div>').appendTo(r);
                    l.on("change input", (e => {
                        const t = l.val().trim().toLowerCase();
                        t ? d.find(".js-fields-item").each((function() {
                            const e = O(this);
                            e.toggleClass("js-hidden", !~e.text().toLowerCase().indexOf(t))
                        })) : d.find(".js-fields-item").removeClass("js-hidden"), c.toggleClass("js-hidden", !!d.find(".js-fields-item:not(.js-hidden)").size()), o.tvDropdown("updateScroll")
                    })), o.on("beforeOpenMenu", (() => {
                        l.val(""), d.find(".js-fields-item").removeClass("js-hidden"), c.addClass("js-hidden"), this.resetFieldsPopup(d), a.css("maxHeight", O(window).height() - e.offset().top + O(window).scrollTop() - e.outerHeight() - n.outerHeight() - 20)
                    })).on("afterOpenMenu", (() => {
                        l.focus()
                    })).tvDropdown({
                        scroll: !0,
                        noAnimation: !0
                    }), setTimeout((() => this.resetFieldsPopup(d)), 0)
                }
                resetFieldsPopup(e) {
                    e.empty();
                    const t = e => {
                            if (e in this._fieldsPopupCache) {
                                const t = this._fieldsPopupCache[e];
                                return t.checkbox.prop("checked", u.fields[e].checked), t.item
                            }
                            const t = O('<div class="tv-dropdown-behavior__item">');
                            O(`<label data-field="${e}" class="tv-control-select__option-wrap tv-screener-fields-popup__item js-fields-item">\n\t\t\t\t<input type="checkbox" name="${e}" class="js-field-checkbox"${u.fields[e].checked?" checked":""}>\n\t\t\t\t<span class="tv-control-checkbox__label">${(0,R.triesTranslateScreenerData)(u.fields[e].title)}</span>\n\t\t\t</label>`).appendTo(t);
                            const s = t.find(".js-field-checkbox").tvControlCheckbox();
                            return this._fieldsPopupCache[e] = {
                                item: t,
                                checkbox: s
                            }, t
                        },
                        s = this._view.sortedFields.filter(u.isFieldToDisplay).sort(((e, t) => u.fields[e].title.localeCompare(u.fields[t].title, void 0, {
                            ignorePunctuation: !0,
                            numeric: !0
                        }))),
                        i = s.filter((e => u.fields[e].checked)),
                        o = s.filter((e => !u.fields[e].checked));
                    i.concat(o).forEach((s => {
                        "is_primary" !== s && t(s).appendTo(e)
                    })), e.find(".js-field-checkbox").off("change"), e.find(".js-field-checkbox").on("change", (t => {
                        const s = O(t.currentTarget),
                            i = s.attr("name");
                        u.fields[i].checked = s.prop("checked");
                        const o = e.attr("data-name"),
                            r = u.fields[i].checked;
                        (0, k.sendSnowPlowData)(new E(o, r, i));
                        const n = u.fields[i].checked ? this._view._table.fieldsOrder.concat(i) : this._view._table.fieldsOrder.filter((e => e !== i));
                        this._model.preventPrevScanRequest(), this._model.fieldSetChanged.fire(n.filter((e => u.fields[e] && !0 !== u.fields[e].disabled && !0 !== u.fields[e].hiddenColumn))), this._model.update(), this._view.$fieldSetsButton.toggleClass("tv-screener-toolbar__button--unsaved", this._model.isFieldSetChanged())
                    }))
                }
                setPopup(e, t, s) {
                    e.addClass("tv-dropdown-behavior__button");
                    const i = O(`<div class="${t||""}">`);
                    i.insertAfter(e).append(e);
                    const o = O('<div class="tv-dropdown__body tv-dropdown__body--over-trigger tv-dropdown-behavior__body tv-screener-popup i-hidden">').appendTo(i);
                    s && o.addClass(s);
                    const r = O('<div class="tv-dropdown-behavior__scroll js-container">').appendTo(o);
                    return O('<div class="tv-screener-popup__items-wrap tv-dropdown-behavior__inscroll js-content">').appendTo(r), i.on("beforeOpenMenu", (() => {
                        r.css("maxHeight", O(window).height() - e.offset().top + O(window).scrollTop() - 45)
                    })).tvDropdown({
                        scroll: !0,
                        noAnimation: !0
                    })
                }
                setFieldSetsPopup(e) {
                    const t = this.setPopup(e, "tv-screener-toolbar__button-wrap");
                    t.tvDropdown("disable");
                    const i = t.find(".js-content");
                    i.on("click", ".js-set", (e => {
                        const s = O(e.currentTarget);
                        i.find(".js-item-active").removeClass("tv-screener-popup__item--active js-item-active"), s.addClass("tv-screener-popup__item--active js-item-active");
                        const o = s.attr("data-set");
                        this._model.applyFieldSet(o), this._view.adjustToolbarWidth(), t.tvDropdown("close"), (0, k.sendSnowPlowData)(new x("columnset_selector", o))
                    })).on("click", ".js-set-delete", (e => {
                        const i = O(e.currentTarget),
                            o = this._model.getFieldSetById(i.parent().attr("data-set")),
                            r = this._model.currentFieldSetId() === o.id;
                        this.showConfirmDialog(h.t(null, void 0, s(827007)).format({
                            name: o.title
                        })).then((e => {
                            e && this._model.saveFieldSet({
                                id: o.id,
                                delete: 1
                            }, "Delete field set").then((() => {
                                this._model.removeFavoriteFieldSet(o.id), r && this._model.applyFieldSet(this._model.defaultFieldSets[0].id, null, !0), this._view.adjustToolbarWidth()
                            }))
                        })), t.tvDropdown("close"), e.stopPropagation()
                    })).on("click", ".js-set-star", (e => {
                        const t = O(e.currentTarget),
                            s = t.parent().attr("data-set");
                        t.parent().toggleClass("tv-screener-popup__item--favorite"), this._model.addFavoriteFieldSet(s), e.stopPropagation(), (0, k.sendSnowPlowData)(new I("added", s))
                    })).on("click", ".js-set-star-active", (e => {
                        const t = O(e.currentTarget),
                            s = t.parent().attr("data-set");
                        t.parent().toggleClass("tv-screener-popup__item--favorite"), this._model.removeFavoriteFieldSet(s), e.stopPropagation(), (0, k.sendSnowPlowData)(new I("removed", s))
                    })).on("click", ".js-set-rename", (e => {
                        const i = O(e.currentTarget).parent().attr("data-set"),
                            o = this._model.getFieldSetById(i);
                        this.showPromptDialog({
                            title: h.t(null, void 0, s(962961)),
                            label: h.t(null, void 0, s(150253))
                        }, o.title).then((e => {
                            e && e !== o.title && (this._model.saveFieldSet({
                                id: o.id,
                                title: e
                            }, "Rename field set"), this._view.$fieldSetsButton.removeClass("tv-screener-toolbar__button--active js-no-pointer-events"), this._model.currentFieldSetId() == o.id && this._view.$fieldSetsButton.text(e), (0, k.sendSnowPlowData)(new F))
                        })), t.tvDropdown("close"), e.stopPropagation()
                    })).on("click", ".js-save", (e => {
                        this.confirmAndSaveCurrentFieldSet().then((e => {
                            const t = this._model.getFieldSetById(e.id);
                            this._model.settingsSaver.setValue(this._model.settingKey + ".fieldSetId", e.id, {
                                forceFlush: !0
                            }), this._view.$fieldSetsButton.text(t.title);
                            const s = this.$favoritesBar && this.$favoritesBar.find(`.js-favorite-item[data-set=${e.id}]`) || O();
                            s.size() && s.removeClass("tv-screener-toolbar__favorites-item--active")
                        })).catch((e => {
                            e && L.logError(e)
                        })), t.tvDropdown("close")
                    })), this._model.loadingComplete.subscribe(null, (() => {
                        t.tvDropdown("enable")
                    }), !0), t.on("beforeOpenMenu", (() => this.setFieldSetsPopupContent(i)))
                }
                setFieldSetsPopupContent(e) {
                    e.empty(), this._bridge.onWidget || O(`<div class="tv-control-select__option-wrap tv-screener-popup__item tv-screener-popup__item--save js-save">${(0,S.appendEllipsis)(h.t(null,void 0,s(774331)))}</div>`).prepend(O(s(470088)).attr({
                        class: "tv-screener-toolbar__button-icon",
                        width: "20",
                        height: "14",
                        style: "top: -2px; margin-right: 10px;"
                    })).appendTo(e);
                    const t = O('<div class="tv-screener-popup__item--presets"></div>').appendTo(e);
                    this._model.settings.fieldSets.forEach((e => {
                        const i = O(`<div class="tv-dropdown-behavior__item">\n\t\t\t\t<div data-set="${e.id}"  class="tv-control-select__option-wrap tv-screener-popup__item tv-screener-popup__item--preset js-set" title="${TradingView.clean(e.title)}">\n\t\t\t\t\t<span class="js-field-set-name"></span>\n\t\t\t\t\t<span class="tv-screener-popup__item-delete js-set-delete" title="${h.t(null,void 0,s(614319))}">\n\t\t\t\t\t\t${s(711732)}\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class="tv-screener-popup__item-rename js-set-rename" title="${h.t(null,void 0,s(435038))}">\n\t\t\t\t\t\t${s(663719)}\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class="tv-screener-popup__item-star-active js-set-star-active" title="${h.t(null,void 0,s(572482))}">\n\t\t\t\t\t\t${s(372665)}\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class="tv-screener-popup__item-star js-set-star" title="${h.t(null,void 0,s(44629))}">\n\t\t\t\t\t\t${s(959597)}\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>`).appendTo(t);
                        i.find(".js-field-set-name").text(W(e.title)), i.find(".js-set").toggleClass("tv-screener-popup__item--favorite", -1 !== this._model.favoriteFieldSets.indexOf(e.id))
                    })), this._model.defaultFieldSets.forEach((t => {
                        O(`<div class="tv-dropdown-behavior__item">\n\t\t\t\t<div data-set="${t.id}" class="tv-control-select__option-wrap tv-screener-popup__item js-set">\n\t\t\t\t\t${t.title}\n\t\t\t\t\t${this._bridge.onWidget?"":`<span class="tv-screener-popup__item-star-active js-set-star-active" title="${h.t(null,void 0,s(572482))}">\n\t\t\t\t\t\t\t${s(372665)}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class="tv-screener-popup__item-star js-set-star" title="${h.t(null,void 0,s(44629))}">\n\t\t\t\t\t\t\t${s(959597)}\n\t\t\t\t\t\t</span>`}\n\t\t\t\t</div>\n\t\t\t</div>`).appendTo(e).find(".js-set").toggleClass("tv-screener-popup__item--favorite", -1 !== this._model.favoriteFieldSets.indexOf(t.id))
                    })), e.find(`[data-set="${this._model.currentFieldSetId()}"]`).addClass("tv-screener-popup__item--active js-item-active")
                }
                confirmAndSaveCurrentFieldSet() {
                    const e = this._model.getFieldSetById(this._model.currentFieldSetId()),
                        t = this._view._table.fieldsOrder.slice(0);
                    if (!u.fields.type.disabled && u.fields.type.checked) {
                        const e = t.indexOf("name"); - 1 !== e && t.splice(e + 1, 0, "type")
                    }
                    if (!u.fields.description.disabled && u.fields.description.checked) {
                        const e = t.indexOf("name"); - 1 !== e && t.splice(e + 1, 0, "description")
                    }
                    const i = JSON.stringify(t),
                        o = e && !this._model.defaultFieldSets.find((t => t.id === e.id));
                    return new Promise(((t, r) => runOrSignIn((() => this.showPromptDialog({
                        title: h.t(null, void 0, s(774331)),
                        label: h.t(null, void 0, s(150253))
                    }, e && e.title || "").then((s => {
                        if (void 0 === s) return void r();
                        const n = {
                            title: TradingView.clean(s),
                            content: i
                        };
                        let l = "Create field set";
                        o && e.title === s && (n.id = e.id, l = "Update field set"), this._model.saveFieldSet(n, l).then(t, r)
                    }))), {
                        source: "save columnset"
                    })))
                }
                setFilterSetsPopup(e, t) {
                    const i = this.setPopup(e, "tv-screener-toolbar__button-wrap", "tv-dropdown__body--position_right");
                    i.tvDropdown("disable");
                    const o = i.find(".js-content"),
                        r = this._bridge.$body;

                    function n(e) {
                        if ((0, C.isRtl)()) e.toggleClass("tv-dropdown__body--position_right", !0);
                        else {
                            const t = i.width(),
                                s = r.find(".tv-screener-toolbar").width(),
                                o = i.position().left,
                                n = s - (t + o);
                            e.toggleClass("tv-dropdown__body--position_right", o > n)
                        }
                    }
                    o.on("click", ".js-set", (e => {
                        const t = O(e.currentTarget);
                        o.find(".js-item-active").removeClass("tv-screener-popup__item--active js-item-active"), t.addClass("tv-screener-popup__item--active js-item-active"), this._view.$filterSetsButton.toggleClass("i-disabled", !0), new Promise((e => {
                            this._bridge.onWidget ? e() : this._model.isFilterSetChanged() ? this.showConfirmDialog(h.t(null, void 0, s(124431))).then((t => {
                                t ? this.confirmAndSaveCurrentFilterSet().then(e, (t => {
                                    t && L.logError(t), e()
                                })) : e()
                            })) : e()
                        })).then((() => {
                            const e = W(t.attr("data-set"));
                            this._model.applyFilterSet(e), this._model.trackEvent("Apply filter set " + e), this._view.$filterSetsButton.toggleClass("i-disabled", !1), (0, k.sendSnowPlowData)(new T(e))
                        })), setTimeout((() => i.tvDropdown("close")), 200)
                    })).on("click", ".js-set-delete", (e => {
                        const t = O(e.currentTarget),
                            o = this._model.getFilterSetById(t.parent().attr("data-set")),
                            r = this._model.currentFilterSetId() === o.id;
                        this.showConfirmDialog(h.t(null, void 0, s(833163)).format({
                            name: o.title
                        })).then((e => {
                            e && this._model.saveFilterSet({
                                id: o.id,
                                delete: 1
                            }, "Delete filter set").then((() => {
                                if (r) {
                                    const e = this._model.defaultFilterSets.find((e => !0 !== e.disabled)) || this._model.defaultFilterSets[0];
                                    this._model.applyFilterSet(e.id)
                                }
                            }))
                        })), i.tvDropdown("close"), e.stopPropagation()
                    })).on("click", ".js-set-rename", (e => {
                        const t = O(e.currentTarget).parent().attr("data-set"),
                            o = this._model.getFilterSetById(t);
                        this.showPromptDialog({
                            title: h.t(null, void 0, s(93401)),
                            label: h.t(null, void 0, s(67996))
                        }, o.title).then((e => {
                            e && e !== o.title && (this._model.saveFilterSet({
                                id: o.id,
                                title: e
                            }, "Rename filter set"), this._view.$filterSetsButton.removeClass("tv-screener-toolbar__button--active js-no-pointer-events"), this._model.currentFilterSetId() == o.id && this._view.$filterSetsButtonTitle.text(e), (0, k.sendSnowPlowData)(new M))
                        })), i.tvDropdown("close"), e.stopPropagation()
                    })).on("click", ".js-save", (e => {
                        this.confirmAndSaveCurrentFilterSet().then((e => {
                            void 0 !== e.id ? (this._model.settingsSaver.setValue(this._model.settingKey + ".filterSetId", e.id, {
                                forceFlush: !0
                            }), this._view.$filterSetsButtonTitle.text(this._model.getFilterSetById(e.id).title)) : L.logError("Unable to get id of created set")
                        })).catch((e => {
                            e && L.logError(e)
                        })), i.tvDropdown("close")
                    })).on("click", ".js-set-alert", (e => {
                        const t = O(e.currentTarget),
                            s = t.parent().attr("data-set");
                        this._view.toggleAlert.fire(s, "toggle_alert_bell"), t.is(".js-active") || i.tvDropdown("close"), e.stopPropagation()
                    })), this.$filterSetsPopupContent = o, this._bridge.width ? (n(o.parent().parent()), this._bridge.width.subscribe((() => {
                        n(o.parent().parent())
                    }))) : O(window).on("resize", (() => {
                        n(o.parent().parent())
                    })), this._model.loadingComplete.subscribe(null, (() => {
                        i.tvDropdown("enable")
                    }), !0), i.on("beforeOpenMenu", (() => {
                        this.setFilterSetsPopupContent()
                    }))
                }
                setFilterSetsPopupContent() {
                    const e = this.$filterSetsPopupContent;
                    e.empty(), this._bridge.onWidget || O(`<div class="tv-control-select__option-wrap tv-screener-popup__item tv-screener-popup__item--save tv-screener-popup__item--space-left js-save">${(0,S.appendEllipsis)(h.t(null,void 0,s(409035)))}</div>`).prepend(O(s(470088)).attr({
                        class: "tv-screener-toolbar__button-icon",
                        width: "20",
                        height: "14",
                        style: "top: -2px; margin-right: 10px;"
                    })).appendTo(e);
                    const t = O('<div class="tv-screener-popup__item--presets"></div>').appendTo(e);
                    this._model.settings.filterSets.forEach((e => {
                            const i = O(`<div class="tv-dropdown-behavior__item">\n\t\t\t\t<div data-set="${e.id}" class="tv-control-select__option-wrap tv-screener-popup__item tv-screener-popup__item--preset tv-screener-popup__item--space-left js-set">\n\t\t\t\t\t<span class="js-filter-set-name"></span>\n\t\t\t\t\t<span class="tv-screener-popup__item-rename js-set-rename" title="${h.t(null,void 0,s(435038))}">\n\t\t\t\t\t\t${s(663719)}\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class="tv-screener-popup__item-delete tv-screener-popup__item-delete--right js-set-delete" title="${h.t(null,void 0,s(614319))}">\n\t\t\t\t\t\t${s(711732)}\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>`);
                            i.find(".js-filter-set-name").text(W(e.title)), i.appendTo(t)
                        })),
                        this._model.defaultFilterSets.forEach((t => {
                            t.disabled || O(`<div class="tv-dropdown-behavior__item">\n\t\t\t\t<div data-set="${t.id}" class="tv-control-select__option-wrap tv-screener-popup__item tv-screener-popup__item--space-left js-set">\n\t\t\t\t\t${t.title}\n\t\t\t\t</div>\n\t\t\t</div>`).appendTo(e)
                        })), e.find(`[data-set="${this._model.currentFilterSetId()}"]`).addClass("tv-screener-popup__item--active js-item-active")
                }
                confirmAndSaveCurrentFilterSet() {
                    const e = this._model.getFilterSetById(this._model.currentFilterSetId()),
                        t = JSON.stringify(this._model.currentFilterState()),
                        i = e && !this._model.defaultFilterSets.find((t => t.id === e.id));
                    return new Promise(((o, r) => runOrSignIn((() => this.showPromptDialog({
                        title: h.t(null, void 0, s(409035)),
                        label: h.t(null, void 0, s(67996))
                    }, e.title).then((s => {
                        if (void 0 === s) return void r();
                        const n = {
                            title: TradingView.clean(s),
                            content: t
                        };
                        let l = "Create filter set";
                        i && e.title === s && (n.id = e.id, l = "Update filter set"), this._model.saveFilterSet(n, l).then(o, r)
                    }))), {
                        source: "save screen"
                    })))
                }
                setHiddenFavoritesPopup(e, t, s, i) {
                    e.addClass("tv-dropdown-behavior__button");
                    const o = O('<div class="tv-screener-toolbar__favorites-more-wrap">');
                    o.insertAfter(e).append(e);
                    const r = O('<div class="tv-dropdown__body tv-dropdown__body--over-trigger tv-dropdown-behavior__body tv-dropdown__body--position_right i-hidden">').appendTo(o),
                        n = O('<div class="tv-dropdown-behavior__scroll js-container">').appendTo(r),
                        l = O('<div class="tv-screener-popup__items-wrap tv-dropdown-behavior__inscroll js-content">').appendTo(n);
                    l.on("click", ".js-set", (e => {
                        const t = O(e.currentTarget).attr("data-set");
                        i(t), (0, k.sendSnowPlowData)(new x("columnset_favorites_picker", t)), o.tvDropdown("close")
                    }));
                    const a = () => {
                        l.empty(), t().forEach((e => {
                            O(`<div class="tv-dropdown-behavior__item">\n\t\t\t\t\t<div data-set="${e.id}" class="tv-control-select__option-wrap tv-screener-popup__item js-set">\n\t\t\t\t\t\t${TradingView.clean(e.title)}\n\t\t\t\t\t</div>\n\t\t\t\t</div>`).toggleClass("tv-screener-popup__item--active", s(e.id)).appendTo(l)
                        })), o.tvDropdown("updateScroll")
                    };
                    return o.on("beforeOpenMenu", (() => {
                        a(), n.css("maxHeight", O(window).height() - e.offset().top + O(window).scrollTop() - 45)
                    })).on("resetContent", (() => a())).on("forceClose", (() => o.tvDropdown("close"))).tvDropdown({
                        scroll: !0,
                        noAnimation: !0
                    })
                }
                setSelectPopup(e, t) {
                    const {
                        wrapClass: s,
                        buttonClass: i,
                        dropdownClass: o
                    } = e, {
                        buttonTitle: r
                    } = t, n = O(`<div class="${s} tv-dropdown tv-dropdown--inline tv-dropdown-behavior">`), l = O(`<div class="tv-dropdown__button tv-dropdown-behavior__button ${i}" title="${r}">`).appendTo(n), a = O(`<div class="tv-dropdown__body tv-dropdown-behavior__body tv-dropdown__body--over-trigger tv-dropdown__body--position_right i-hidden ${o}">`).appendTo(n), d = O('<div class="tv-dropdown-behavior__scroll js-container">').appendTo(a), c = O('<div class="tv-dropdown-behavior__inscroll js-content">').appendTo(d);
                    return n.on("beforeOpenMenu", (() => {
                        d.css("maxHeight", O(window).height() - l.offset().top + O(window).scrollTop() - 45)
                    })).on("forceClose", (() => n.tvDropdown("close"))).tvDropdown({
                        scroll: !0,
                        $wrap: l,
                        $body: a,
                        noAnimation: !0
                    }), {
                        $wrap: n,
                        $button: l,
                        $dropdownBody: a,
                        $dropdownContent: c
                    }
                }
                setMarketsList(e) {
                    this._markets = e
                }
                updateRefreshIntervalsPopupContent() {
                    if (!this.$filterRefreshIntervalsPopup || !this.$filterRefreshIntervalsPopup.length) return;
                    this.$filterRefreshIntervalsPopup.empty();
                    const e = this._view.refreshIntervals;
                    for (let t = 0; t < e.length; ++t) {
                        const i = e[t];
                        let o = null;
                        if (-1 === i) o = h.t(null, void 0, s(308525));
                        else {
                            const e = i / 60 | 0;
                            o = 1 === e ? h.t(null, void 0, s(112201)) : e < 1 ? this._model.isFastRefresh ? h.t(null, void 0, s(70224)) : h.t(null, {
                                plural: "Refresh every {0} seconds",
                                count: i
                            }, s(779027)).format(i) : h.t(null, {
                                plural: "Refresh every {0} minutes",
                                count: e
                            }, s(984284)).format(e)
                        }
                        O(`<div class="tv-dropdown-behavior__item">\n\t\t\t\t<label class="tv-control-select__option-wrap tv-screener-popup__item js-interval">\n\t\t\t\t\t<span class="tv-control-radio">\n\t\t\t\t\t\t<input type="radio" name="interval" value="${i}" class="tv-control-radio__input">\n\t\t\t\t\t\t<span class="tv-control-radio__box"></span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class="tv-control-radio__label tv-screener-popup__refresh-interval-label">${o}</span>\n\t\t\t\t</label>\n\t\t\t</div>`).appendTo(this.$filterRefreshIntervalsPopup)
                    }
                }
                setRefreshIntervalsPopup(e) {
                    const t = this.setPopup(e, "tv-screener-toolbar__button-wrap", "tv-screener-popup__refresh-intervals");
                    e.toggleClass("js-prevent-dropdown", !window.is_authenticated), e.on("click", (() => runOrSignIn((() => {}), {
                        source: "Screener refresh mode button"
                    }))), window.loginStateChange.subscribe(null, (() => {
                        e.toggleClass("js-prevent-dropdown", !window.is_authenticated)
                    }));
                    const s = t.find(".js-content");
                    this.$filterRefreshIntervalsPopup = s, this.updateRefreshIntervalsPopupContent(), t.on("beforeOpenMenu", (() => {
                        s.find(`input[value=${this._model.refreshInterval}]`).prop("checked", !0)
                    })), s.on("click", ".js-interval", (e => {
                        e.preventDefault();
                        const i = +O(e.currentTarget).find("input").val();
                        setTimeout((() => t.tvDropdown("close")), r.dur / 2), i !== this._model.refreshInterval && (this._model.isFastRefresh ? (s.find(`input[value=${i}]`).prop("checked", !0), this._model.refreshInterval = i) : (0, c.runOrGoPro)((() => {
                            s.find(`input[value=${i}]`).prop("checked", !0), this._model.refreshInterval = i
                        }), w.ProductFeatures.SCREENER_AUTO_REFRESH, {
                            feature: "screenerAutoRefresh"
                        }, {
                            value: -1 === i
                        }), (0, k.sendSnowPlowData)(new D(i)))
                    }))
                }
                setSelectIntervalContent(e, t, s = (() => {})) {
                    t.empty();
                    const o = this._model.selectedIntervalId;
                    for (const e of g.INTERVALS) O(`<div class="tv-dropdown-behavior__item">\n\t\t\t\t<div data-interval="${e.id}" title="${e.title}" class="tv-control-select__option-wrap tv-screener-popup__item js-select-interval ${e.id===o?"tv-screener-popup__select-interval-active":""}">\n\t\t\t\t\t${e.shortTitle}\n\t\t\t\t</div>\n\t\t\t</div>`).appendTo(t);
                    e.on("afterOpenMenu", (() => {
                        t.on("click", ".js-select-interval", (o => {
                            o.preventDefault();
                            const n = this._model.selectedIntervalId,
                                l = O(o.currentTarget);
                            let a = (0, g.getIntervalById)(l.data("interval"));
                            if (!a || n === a.id) return;
                            const d = this._model.eodRestriction.value();
                            (0, c.runOrGoPro)((() => {
                                d !== i.None && "1d" !== a.id ? ((0, _.createGoProDialog)({
                                    feature: "screenerIntervalsEod"
                                }), a = (0, g.getIntervalById)("1d")) : (t.find(".tv-screener-popup__select-interval-active").removeClass("tv-screener-popup__select-interval-active"), t.find(`[data-interval='${a.id}']`).addClass("tv-screener-popup__select-interval-active"), s(a))
                            }), w.ProductFeatures.SCREENER_INTERVALS, {
                                feature: "screenerIntervals"
                            }, {
                                interval: a.id
                            }), setTimeout((() => {
                                e.tvDropdown("close"), t.off("click")
                            }), r.dur / 2), (0, k.sendSnowPlowData)(new $(a.id))
                        }))
                    }))
                }
                setAlertsPopup(e, t) {
                    e.removeClass("tv-screener-toolbar__button--space_right").addClass("tv-dropdown-behavior__button js-prevent-dropdown");
                    const s = O('<div class="tv-screener-toolbar__button-wrap tv-screener-toolbar__button-wrap--space-right">');
                    s.insertAfter(e).append(e);
                    const i = O('<div class="tv-dropdown__body tv-dropdown__body--over-trigger tv-dropdown-behavior__body tv-dropdown__body--position_right i-hidden">').appendTo(s);
                    let o = s.position().left;
                    const r = s.width(),
                        n = O(".tv-screener-toolbar");
                    let l = n.width(),
                        a = l - (r + o);
                    return this._bridge.width ? (i.toggleClass("tv-dropdown__body--position_right", o > a), this._bridge.width.subscribe((() => {
                        o = s.position().left, l = n.width(), a = l - (r + o);
                        const e = o > a;
                        i.toggleClass("tv-dropdown__body--position_right", e)
                    }))) : O(window).on("resize", (() => {
                        o = s.position().left, l = n.width(), a = l - (r + o);
                        const e = o > a;
                        i.toggleClass("tv-dropdown__body--position_right", e)
                    })), t.on("click", (() => s.tvDropdown("close"))).appendTo(i), e.on("click", (() => runOrSignIn((() => {
                        this._model.alerts.ready.then((() => s.tvDropdown("open")))
                    })))), s.tvDropdown({
                        noAnimation: !0
                    })
                }
            }

            function W(e) {
                return TradingView.clean(e, !0)
            }
            var N = s(343370),
                V = s(316230);
            s(890443), s(872498);
            class H {
                constructor(e, t) {
                    this.event = "open_filters_dialog", this.location = "toolbar", this.value = "", this.source = e, this.state = t > 0 ? "with_counter" : "without_counter"
                }
            }
            class q {
                constructor(e) {
                    this.event = "change_filter_dialog_tab", this.source = "filter_dialog_tab_button", this.location = "filter_dialog", this.value = "", this.state = e
                }
            }
            class z {
                constructor() {
                    this.event = "filter_dialog_search_input_click", this.source = "filter_dialog_search_input", this.location = "filter_dialog", this.state = "user_clicked", this.value = ""
                }
            }
            class U {
                constructor(e) {
                    this.event = "filter_dialog_search_no_terms_found", this.source = "filter_dialog_search_input", this.location = "filter_dialog", this.state = "empty_search_result", this.value = "", this.value = e
                }
            }
            class K {
                constructor(e) {
                    this.event = "filter_dialog_applied_filters", this.source = "unknown", this.location = "filter_dialog", this.state = A.UserActionState.ApplyFilters, this.value = e
                }
            }
            class X {
                constructor(e, t, s, i) {
                    this.event = "filter_use", this.value = e, this.state = t, this.source = s, this.location = i
                }
            }
            class G {
                constructor(e) {
                    this.event = "apply_flagged_filter", this.source = "flagged_marker", this.location = "header", this.state = "enabled", this.value = e
                }
            }
            var Y = s(823127);
            const J = {
                filtersSearch: `<div class="tv-screener-search js-screener-search">\n\t\t<input type="text" class="tv-screener-search__input js-search-input" placeholder="${h.t(null,void 0,s(846939))}">\n\t\t${s(326529)}\n\t\t<div class="tv-screener-search__reset js-search-reset">\n\t\t\t<span class="tv-screener-search__reset-icon">${s(966631)}</span>\n\t\t\t${h.t(null,void 0,s(697861))}\n\t\t</div>\n\t</div>`,
                filtersBody: '<div class="tv-screener-dialog js-screener-dialog">\n\t\t<div class="tv-screener-dialog__wrap js-filters-wrap"></div>\n\t</div>'
            };
            var Z = [h.t(null, void 0, s(695271)), h.t(null, void 0, s(27448)), h.t(null, void 0, s(677720)), h.t(null, void 0, s(960393))];
            class Q {
                constructor(e, t, s) {
                    this._model = e, this._view = t, this._bridge = s, this._dialogTitle = "screener_filters", this._categories = null
                }
                showFiltersDialog(e) {
                    return Promise.all([s.e(36956), s.e(4100), s.e(85783), s.e(64820), s.e(51599), s.e(39694), s.e(1966), s.e(37384)]).then(s.bind(s, 345115)).then((({
                        createTabbedDialog: t
                    }) => {
                        this._categories = this._getCategories();
                        const s = this._categories.map((e => ({
                                name: Z[e]
                            }))),
                            {
                                dialog: i,
                                tabs: o
                            } = t({
                                tabs: s,
                                additionalHeaderContent: J.filtersSearch,
                                width: Math.min(1400, Math.max(646, Y(window).width() - 200)),
                                height: Math.max(450, Y(window).height() - 200),
                                contentAddClass: "js-dialog-content",
                                doNotCreatePages: !0,
                                destroyOnClose: !0
                            }),
                            r = i.$content.find(".js-dialog-content"),
                            n = i.$content.find(".js-screener-search");
                        this.$fieldSearchInput = n.find(".js-search-input"), this.$fieldSearchInput.on("input", (0, N.default)((e => {
                            this._view.updateFilterSearch(), i.updateScroll()
                        }), 100, {
                            leading: !1,
                            trailing: !0
                        })), this.$fieldSearchInput.on("click", (() => {
                            (0, k.sendSnowPlowData)(new z)
                        }));
                        n.find(".js-search-reset").on("click", (e => this._view.resetAllFilters()));
                        const l = () => {
                            const e = this.$filtersPopup.get(0).clientWidth >= 1292;
                            e && !this._$filtersWrap.is(".js-2col") ? this._$filtersWrap.addClass("js-2col tv-screener-dialog__wrap--2col") : !e && this._$filtersWrap.is(".js-2col") && this._$filtersWrap.removeClass("js-2col tv-screener-dialog__wrap--2col")
                        };
                        this.$filtersPopup = Y(J.filtersBody), this._$filtersWrap = this.$filtersPopup.find(".js-filters-wrap");
                        const a = [];
                        this._view.sortedFields.forEach((e => {
                            u.fields[e] && !u.fields[e].disabled && u.fields[e].control && a.push(this._view.addFieldFilter(e, this._$filtersWrap))
                        })), Promise.all(a).then((() => this._$filtersWrap.find(".js-wrap").each(((e, t) => {
                            this._view.initFilterHandlers(Y(t))
                        })))), this.$filtersPopup.appendTo(r), e && this._model.settingsSaver.setValue(this._model.settingKey + ".filters.tab", 0), o.tabChanged.subscribe(null, (e => {
                            this.filtersDialogTabChanged(e), i.scrollToStart(), 0 !== e && (0, k.sendSnowPlowData)(new q(e))
                        })), this._view.$filtersButton.addClass("js-no-pointer-events"), i.on("scroll", (() => {
                            i.$content.find(".js-dropdown-toggle.i-opened").trigger("resetPosition", null, r.parent())
                        }));
                        const d = this._getActiveFilters(!1).sort();
                        i.on("destroy", (e => {
                            const t = this._getActiveFilters(!1).sort();
                            for (const e in u.fields) "condition" === u.fields[e].control && u.fields[e].value && ((0, u.isValueAbsent)(u.fields[e].value.value) || (0,
                                u.isValueAbsent)(u.fields[e].value.operator)) && (u.fields[e].value = null);
                            Y(".tv-screener-dialog__filter-field").removeClass("js-hidden"), this.$fieldSearchInput.val(""), this.$filtersPopup.remove(), delete this.$filtersPopup, this._view.$filtersButton.removeClass("js-no-pointer-events"), delete this._dialog, Y(window).off("resize", l), (0, V.default)(d, t) || (0, k.sendSnowPlowData)(new K(t.join(", ")))
                        })), this._model.trackEvent("Open filters dialog"), i.open(), Y(window).on("resize", l), l(), this.$dialogContainer = i.$content, this._dialog = i
                    }))
                }
                filtersDialogTabChanged(e) {
                    const t = this._categories.map((e => "tv-screener-dialog--cat" + e)).join(" ");
                    this.$filtersPopup.removeClass(t).addClass("tv-screener-dialog--cat" + this._categories[e]).scrollTop(0)
                }
                destroy() {
                    this._dialog && (this._dialog.close(), delete this._dialog)
                }
                _getCategories() {
                    const e = [0];
                    return this._view.sortedFields.forEach((t => {
                        u.fields[t] && !u.fields[t].disabled && u.fields[t].control && (e.includes(u.fields[t].category) || e.push(u.fields[t].category))
                    })), e.sort()
                }
                _getDefaultFiltersForCurrentFilterSet() {
                    const {
                        defaultFilterSets: e
                    } = this._model, t = this._model.currentFilterSetId();
                    return Object.values(e).filter((e => e.id === t))[0].content.filters
                }
                _fieldValueIsEqualToDefaultFilter(e) {
                    const t = this._getDefaultFiltersForCurrentFilterSet()[e],
                        s = u.fields[e].value;
                    switch (u.fields[e].control) {
                        case "condition":
                            return s.operator === t.operator && s.value.toString() === t.value.toString();
                        case "range":
                        case "select":
                            return s.sort().toString() === t.sort().toString();
                        default:
                            return u.fields[e].value === s
                    }
                }
                _getActiveFilters(e = !0) {
                    const t = [];
                    for (const s in u.fields)
                        if (u.fields[s].value) {
                            if ("condition" === u.fields[s].control && ((0, u.isValueAbsent)(u.fields[s].value.operator) || (0, u.isValueAbsent)(u.fields[s].value.value))) continue;
                            e ? t.push((0, u.getFieldTitle)(u.fields[s])) : t.push(s)
                        }
                    return t
                }
            }
            var ee = s(450132),
                te = s(126561),
                se = s(941285),
                ie = s(535799),
                oe = s(791325),
                re = s(763532);
            class ne {
                constructor() {
                    this._handlers = []
                }
                registerHandlers(e) {
                    this._handlers.push(e)
                }
                beforeAppendSymbol(e, t) {
                    this._handlers.forEach((s => {
                        s.beforeAppendSymbol && s.beforeAppendSymbol(e, t)
                    }))
                }
                beforeAppendContextMenuItems(e) {
                    return this._handlers.reduce(((t, s) => s.beforeAppendContextMenuItems ? t.concat(s.beforeAppendContextMenuItems(e)) : t), [])
                }
                afterSymbolConfirm(e, t) {
                    this._handlers.forEach((s => {
                        s.afterSymbolConfirm && s.afterSymbolConfirm(e, t)
                    }))
                }
                beforeAppendSymbolsHeader(e) {
                    this._handlers.forEach((t => {
                        t.beforeAppendSymbolsHeader && t.beforeAppendSymbolsHeader(e)
                    }))
                }
            }
            var le = s(309103),
                ae = s(589007),
                de = s(251954),
                ce = s(952456),
                he = s(50959),
                ue = s(500962),
                pe = s(497754),
                _e = s.n(pe),
                ge = s(728804),
                fe = s(694553),
                me = s(523987);

            function ve(e) {
                const t = Object.keys(e.modes),
                    s = Object.values(e.modes),
                    [i, o] = he.useState(t[0]);
                return he.createElement(ge.CustomBehaviourContext.Provider, {
                    value: window.TradingView.onChartPage ? ge.presetPlatform : ge.presetDefault
                }, he.createElement(be, {
                    isActive: i === t[0],
                    title: s[0]
                }), he.createElement("span", {
                    className: me.switcherContainer
                }, he.createElement(fe.Switch, {
                    onChange: function(s) {
                        const i = s.currentTarget.checked ? t[1] : t[0];
                        o(i), e.onChange(i)
                    }
                })), he.createElement(be, {
                    isActive: i === t[1],
                    title: s[1]
                }))
            }

            function be(e) {
                return he.createElement("span", {
                    className: _e()(me.modeTitle, e.isActive && me.modeTitleActive)
                }, e.title)
            }
            var ye = s(817713);

            function Se(e, t) {
                ue.render(he.createElement(ye.NoScrollChoicer, { ...t
                }), e)
            }
            var we = s(394721);
            const Ce = ["country", "sector", "industry", "description"],
                ke = ["close", "bid", "ask", "candlestick"],
                $e = ["Recommend.All", "Recommend.MA", "Recommend.Other"];

            function xe(e, t) {
                return e.indexOf(t)
            }

            function Ie(e) {
                return e.map((e => (0, re.escapeCSVValue)(e))).join(",")
            }

            function Fe(e) {
                return e.map(((e, t) => Boolean(e) ? t : void 0)).filter(Boolean)
            }

            function Te(e) {
                return we.candlestickRanges.find((t => t.key === e))
            }
            var Me = s(202339),
                Ae = s(838126),
                Ee = s(920389),
                Pe = s(799148);
            class Be {
                constructor() {
                    this.event = "export_screener_data", this.source = "export_button", this.location = "toolbar", this.state = "", this.value = ""
                }
            }
            class De {
                constructor(e, t) {
                    this.event = "change_forex_group", this.source = "forex_group_selector", this.location = "toolbar", this.state = e, this.value = t
                }
            }
            var Re = s(531327);

            function Oe(e) {
                return Promise.all([s.e(86256), s.e(91901), s.e(1428), s.e(1011), s.e(52701), s.e(82098), s.e(89619), s.e(89034), s.e(37845), s.e(51206), s.e(75321), s.e(21910), s.e(46443), s.e(745), s.e(25944), s.e(67911)]).then(s.bind(s, 751411)).then((t => t.showScreenerMarketDialog(e)))
            }
            const Le = new Set(["dps_common_stock_prim_issue_yoy_growth_fy", "earnings_per_share_diluted_qoq_growth_fq", "earnings_per_share_diluted_yoy_growth_fq", "earnings_per_share_diluted_yoy_growth_fy", "earnings_per_share_diluted_yoy_growth_ttm", "ebitda_qoq_growth_fq", "ebitda_yoy_growth_fq", "ebitda_yoy_growth_fy", "ebitda_yoy_growth_ttm", "free_cash_flow_margin_fy", "free_cash_flow_margin_ttm", "free_cash_flow_qoq_growth_fq", "free_cash_flow_yoy_growth_fq", "free_cash_flow_yoy_growth_fy", "free_cash_flow_yoy_growth_ttm", "gross_profit_margin_fy", "gross_profit_qoq_growth_fq", "gross_profit_yoy_growth_fq", "gross_profit_yoy_growth_fy", "gross_profit_yoy_growth_ttm", "net_income_bef_disc_oper_margin_fy", "net_income_qoq_growth_fq", "net_income_yoy_growth_fq", "net_income_yoy_growth_fy", "net_income_yoy_growth_ttm", "oper_income_margin_fy", "total_assets_qoq_growth_fq", "total_assets_yoy_growth_fq", "total_assets_yoy_growth_fy", "total_debt_qoq_growth_fq", "total_debt_yoy_growth_fq", "total_debt_yoy_growth_fy", "total_revenue_qoq_growth_fq", "total_revenue_yoy_growth_fq", "total_revenue_yoy_growth_fy", "total_revenue_yoy_growth_ttm"]);

            function je(e, t) {
                var s;
                return !!t.title && (t.title.toLowerCase() !== (null === (s = t.shortTitle) || void 0 === s ? void 0 : s.toLowerCase()) || function(e) {
                    return Le.has(e)
                }(e))
            }
            var We = s(194577),
                Ne = s(963867),
                Ve = s(159255);

            function He(e, t) {
                const s = setInterval((() => {
                    const i = document.querySelector(e);
                    if (i) {
                        clearInterval(s);
                        new Ve.default(t).observe(i), t()
                    }
                }), 20)
            }
            var qe = s(586240),
                ze = s(823127);
            const Ue = parseInt(qe["size-sticky-symbol-header-height"]);

            function Ke(e) {
                const {
                    $toolbar: t
                } = e, s = t.outerHeight(), i = e.table.$stickyHeader, o = document.querySelector(".js-sticky-symbol-header-container") ? 64 + Ue : 64;

                function r(t) {
                    const r = t || ze(document).scrollTop(),
                        {
                            isSticky: n,
                            upperScrollLimit: l,
                            bottomScrollLimit: a
                        } = function(t) {
                            const r = e.table._$emptyMessage ? e.table._$emptyMessage.outerHeight() : 0,
                                n = e.$content.offset().top + e.$content.outerHeight(),
                                l = r || 48,
                                a = e.$content.offset().top - o - s,
                                d = n - l - o - s - i.outerHeight();
                            return {
                                isSticky: t >= a && t <= d,
                                bottomScrollLimit: d,
                                upperScrollLimit: a
                            }
                        }(r);
                    if (n) return "sticky";
                    return Math.abs(a - l) < 20 || r < l ? "absolute" : "bottom"
                }

                function n() {
                    const s = r(),
                        o = (0, C.isRtl)() ? e.$content.offset().left - ze(window).scrollLeft() : e.$content.offset().left,
                        n = e.$content.width(),
                        l = ze(e.table._table).width(),
                        d = function(t) {
                            const s = a.breakpoints.tablet,
                                i = r();
                            if (ze(window).width() > s) return "absolute" === i ? {
                                left: "",
                                right: ""
                            } : {
                                left: t,
                                right: ""
                            };
                            const o = e.$content.scrollLeft();
                            if ((0, C.isRtl)()) {
                                const t = e._getResizerBridgeWidth();
                                return "absolute" === i ? {
                                    left: "",
                                    right: o
                                } : {
                                    left: "",
                                    right: t + o
                                }
                            }
                            return {
                                left: t - o,
                                right: ""
                            }
                        }(o),
                        c = {
                            left: o,
                            width: n
                        },
                        h = { ...d,
                            width: l
                        };
                    if (t.css({
                            left: "",
                            right: ""
                        }), i.css({
                            left: "",
                            right: ""
                        }), "absolute" === s) return t.css({
                        width: n
                    }), void i.css(h);
                    t.css(c), i.css(h)
                }

                function l(e) {
                    t.css({
                        top: e
                    });
                    const o = e + s;
                    i.css({
                        top: o
                    })
                }
                const d = function() {
                    let e = ze(document).scrollTop(),
                        a = r(e);
                    return () => {
                        const d = ze(document).scrollTop(),
                            c = r(d);
                        if ("bottom" === c) {
                            h(c);
                            return l(e + o - d), void(a = "bottom")
                        }
                        if (a !== c) {
                            if (h(c), "absolute" === c) return t.css({
                                top: 0
                            }), i.css({
                                top: s
                            }), n(), void(a = "absolute");
                            "sticky" === c && (n(), l(o), e = d, a = "sticky")
                        }
                    }
                }();

                function c() {
                    n(), d()
                }

                function h(e) {
                    const s = "absolute" === e;
                    t.toggleClass("tv-screener-toolbar--markets_absolute", s), i.toggleClass("tv-screener-sticky-header-wrapper--markets_absolute", s), t.toggleClass("tv-screener-toolbar--markets_sticky", !s), i.toggleClass("tv-screener-sticky-header-wrapper--standalone_sticky", !0), i.toggleClass("tv-screener-sticky-header-wrapper--markets_sticky", !s)
                }
                const u = function() {
                    let e;
                    return () => {
                        clearTimeout(e), e = setTimeout(c, 0)
                    }
                }();
                document.addEventListener("scroll", (function() {
                    d(), (0, C.isRtl)() && n()
                }), {
                    passive: !0
                }), e.$content[0].addEventListener("scroll", n), window.addEventListener("resize", u), He(".widgetbar-wrap", n), He(".tv-screener-table", n), h(r()), c()
            }
            var Xe = s(778785);

            function Ge(e) {
                const {
                    $before: t = null,
                    $appendTo: s = null,
                    $dropdownContainer: i = null,
                    beforeMakingSelectPopup: o = (() => {}),
                    makeSelectPopup: r,
                    afterMakingSelectPopup: n = (() => {}),
                    afterSelectPopupAppend: l = (() => {})
                } = e, a = {
                    $dropdownContainer: i
                };
                o();
                const {
                    $wrap: d,
                    $button: c,
                    $dropdownContent: h
                } = r(a);
                return n(d, c, h), (t || s) && (t ? d.insertBefore(t) : d.appendTo(s), l(d, c, h)), c
            }
            s(984919);
            var Ye, Je = s(414864),
                Ze = s(696828);
            ! function(e) {
                e[e.Header = 0] = "Header", e[e.Table = 1] = "Table"
            }(Ye || (Ye = {}));
            const Qe = {
                [Ye.Header]: {
                    description: "Open header context menu",
                    prepend: !1
                },
                [Ye.Table]: {
                    description: "Open context menu",
                    prepend: !0
                }
            };

            function et(e, t, i) {
                return async function() {
                    const [{
                        TVAction: e
                    }, {
                        AddToWatchlistAction: t
                    }] = await Promise.all([s.e(34215).then(s.bind(s, 973580)), s.e(26417).then(s.bind(s, 686041))]);
                    return {
                        default: e,
                        addToWatchlist: t
                    }
                }().then((s => t(e, s))).then((t => {
                    const s = Object.values(t);
                    return Qe[i].prepend ? function(e, t) {
                        return e._lifecycle.beforeAppendContextMenuItems(t.length > 0 ? "bottom" : void 0).concat(t)
                    }(e.view, s) : s
                }))
            }

            function tt(e, t, i) {
                const {
                    view: o,
                    e: r
                } = e;
                return et(e, t, i).then((e => {
                    return t = e, i = r, s.e(34215).then(s.bind(s, 263221)).then((({
                        ContextMenuManager: e
                    }) => e.showMenu(t, i)));
                    var t, i
                })).then((() => {
                    const e = Qe[i].description;
                    o._model.trackEvent(e)
                }))
            }
            var st, it = s(897925),
                ot = s(362052),
                rt = s(62802),
                nt = s.n(rt),
                lt = s(324020),
                at = s(823127);

            function dt(e, t) {
                const {
                    view: s
                } = e, i = s._bridge, o = t.default, r = s._selectableList ? s._selectableList.getSelectedKeys().length : 1, n = { ...e,
                    selectedSymbolsCount: r
                };
                if ((0, Ne.isExternalWidget)(i)) return { ...ht(n, o)
                };
                if ((0, Ne.isScreenerPage)(i) || (0, Ne.isMarketPage)(i)) {
                    return { ...0 === r ? ht(n, o) : {},
                        ...ct(n, t.addToWatchlist)
                    }
                }
                return { ...ct(n, t.addToWatchlist),
                    ...ut(n, o),
                    ...pt(n, o)
                }
            }

            function ct(e, t) {
                const {
                    view: i,
                    symbol: o,
                    shortName: r,
                    selectedSymbolsCount: n
                } = e;
                let l, a;
                0 === n ? (l = h.t(null, void 0, s(919604)).format({
                    symbolName: r
                }), a = [o]) : (l = h.t(null, void 0, s(276893)), a = i._selectableList ? i._selectableList.getSelectedKeys().slice(0) : []);
                return {
                    addToWatchListAction: new t({
                        label: l,
                        disabled: !0,
                        onExecute: () => {
                            (0, Ee.runOrSignIn)((() => {
                                const e = i._getWatchlist();
                                e && (e.addSymbols(a), (0, k.sendSnowPlowData)(new it.DispatchContextMenuActionEvent(st.AddToWatchlist, "row", !0)))
                            }), {
                                source: "add symbol to watchlist"
                            })
                        }
                    })
                }
            }

            function ht(e, t) {
                const {
                    view: i
                } = e;
                return ["sector", "industry"].includes(i._model.screener_type) ? function(e, t) {
                    const {
                        e: i
                    } = e, o = at(i.target).closest(".tv-screener-table__result-row").find(".tv-screener__symbol");
                    return {
                        openSymbolPageAction: new t({
                            label: h.t(null, void 0, s(393295)).format({
                                symbol: o.text()
                            }),
                            onExecute: () => {
                                window.open(o.attr("href"), "_blank"), (0, k.sendSnowPlowData)(new it.DispatchContextMenuActionEvent(st.OpenSymbolPage, "row", !0))
                            }
                        })
                    }
                }(e, t) : function(e, t) {
                    const {
                        view: i,
                        shortName: o,
                        symbol: r
                    } = e;
                    return {
                        openChartAction: new t({
                            label: h.t(null, void 0, s(858764)).format({
                                symbol: o
                            }),
                            onExecute: () => {
                                const {
                                    applySymbol: e
                                } = i._bridge;
                                e && (e(r, !0), (0, k.sendSnowPlowData)(new it.DispatchContextMenuActionEvent(st.OpenChart, "row", !0)))
                            }
                        })
                    }
                }(e, t)
            }

            function ut(e, t) {
                const {
                    view: i,
                    symbol: o,
                    shortName: r,
                    selectedSymbolsCount: n
                } = e;
                let l, a;
                0 === n ? (l = h.t(null, void 0, s(465687)).format({
                    symbol: r
                }), a = [o]) : (l = h.t(null, void 0, s(695296)), a = i._selectableList.getSelectedKeys());
                return {
                    compareAction: new t({
                        jsxLabel: he.createElement(ot.CompareLabel, {
                            label: l
                        }),
                        onExecute: async () => {
                            var e;
                            for (const t of a) await (null === (e = i._bridge.chartWidgetCollection) || void 0 === e ? void 0 : e.activeChartWidget.value().addCompareAsOverlay(t, false))
                        }
                    })
                }
            }

            function pt(e, t) {
                const {
                    symbol: i,
                    shortName: o,
                    selectedSymbolsCount: r
                } = e;
                if (r > 0) return {};
                return {
                    addToTextNotesAction: new t({
                        icon: lt,
                        label: h.t(null, void 0, s(878850)).format({
                            symbol: o
                        }),
                        onExecute: () => {
                            (0, Ee.runOrSignIn)((() => {
                                var e;
                                (0, k.sendSnowPlowData)(new it.DispatchContextMenuActionEvent(st.AddTextNote, "row", !0)), null === (e = window.widgetbar) || void 0 === e || e.setPage("base"), (0, Je.createSymbolNote)(i)
                            }), {
                                source: "Add text note in screener"
                            })
                        }
                    })
                }
            }! function(e) {
                e.AddToWatchlist = "add_to_watchlist", e.OpenChart = "open_chart",
                    e.AddToCompare = "add_to_compare", e.AddTextNote = "add_text_note", e.OpenSymbolPage = "open_symbol_page"
            }(st || (st = {}));
            var _t = s(869403),
                gt = s.n(_t),
                ft = s(988411),
                mt = s.n(ft),
                vt = s(919346),
                bt = s(909740),
                yt = s(695083),
                St = s(562840),
                wt = s(315723);

            function Ct(e) {
                const {
                    symbolHtml: t,
                    logoUrl: s,
                    symbolFirstLetter: i,
                    size: o = "xsmall"
                } = e;
                return kt({
                    symbolHtml: t,
                    logoHtml: (0, St.getCircleLogoHtml)({
                        logoUrl: s,
                        size: o,
                        placeholderLetter: i,
                        className: "tv-screener-table__logo-container"
                    })
                })
            }

            function kt(e) {
                const {
                    logoHtml: t = "",
                    symbolHtml: s = "",
                    wrapHtmlClass: i = ""
                } = e;
                return `\n\t\t<div class="tv-screener-table__symbol-container ${i}">\n\t\t\t<div class="tv-screener-table__symbol-addition"></div>\n\t\t\t${t}\n\t\t\t<div class="tv-screener-table__symbol-container-description">\n\t\t\t\t${s}\n\t\t\t</div>\n\t\t</div>\n\t`
            }
            var $t, xt = s(410138);

            function It(e) {
                const {
                    fieldsOrder: t,
                    proSymbol: s,
                    rowData: i,
                    symbolHtml: o
                } = e, r = t.indexOf(ee.ScanFields.LogoId);
                if (-1 !== r) {
                    const e = i[r];
                    return Ct({
                        symbolHtml: o,
                        symbolFirstLetter: Ft(s),
                        logoUrl: (0, xt.getScreenerSymbolLogoUrl)(e)
                    })
                }
                const n = t.indexOf(ee.ScanFields.BaseCurrencyLogoId),
                    l = -1 !== n,
                    a = t.indexOf(ee.ScanFields.CurrencyLogoId),
                    d = -1 !== a;
                if (l && d) {
                    const e = i[n],
                        t = i[a];
                    return function(e, t, s) {
                        return kt({
                            symbolHtml: e,
                            logoHtml: (0, wt.getCircleLogoPairHtml)({
                                primaryLogoUrl: t,
                                secondaryLogoUrl: s,
                                size: "xsmall",
                                className: "tv-screener-table__logo-container"
                            })
                        })
                    }(o, (0, xt.getScreenerSymbolLogoUrl)(e), (0, xt.getScreenerSymbolLogoUrl)(t))
                }
                if (l) {
                    const e = i[n];
                    return Ct({
                        symbolHtml: o,
                        symbolFirstLetter: Ft(s),
                        logoUrl: (0, xt.getScreenerSymbolLogoUrl)(e)
                    })
                }
                if (d) {
                    const e = i[a];
                    return Ct({
                        symbolHtml: o,
                        symbolFirstLetter: Ft(s),
                        logoUrl: (0, xt.getScreenerSymbolLogoUrl)(e)
                    })
                }
                return kt({
                    symbolHtml: o
                })
            }

            function Ft(e) {
                return (0, Ze.shortName)(e)[0]
            }

            function Tt(e, t, s) {
                return e.get((0, g.getFieldNameWithResolution)(t, s))
            }! function(e) {
                e.Bool = "bool", e.FundamentalPrice = "fundamental_price", e.Number = "number", e.Percent = "percent", e.Price = "price", e.Text = "text", e.Time = "time"
            }($t || ($t = {}));
            const Mt = ["&mdash;", '<span class="tv-screener-table__cell--color-normal">—</span>'];

            function At(e, t, s, i, o) {
                if (!Pt() && !o) return "";
                const r = !e && s === $t.Price || !t && s === $t.FundamentalPrice || Mt.includes(i),
                    n = ![$t.Price, $t.FundamentalPrice].includes(s);
                if (r || n) return "";
                let l;
                return l = s === $t.Price ? e : t, `<span class="tv-screener-table__cell-currency-value">${l}</span>`
            }
            const Et = "screener.showCurrencyLabel";

            function Pt() {
                return rt.getBool(Et, !0)
            }
            var Bt = s(366619),
                Dt = s(267562),
                Rt = s(182951),
                Ot = s(891250),
                Lt = s(823127),
                jt = s(823127);
            class Wt {
                constructor(e) {
                    this._setOptions(e), this._fields = {}, this._fieldsOrder = Array.isArray(e.fieldsOrder) && e.fieldsOrder || [], this.fieldsOrderChange = new(gt()), this._columnsMap = new Map, this.afterFixCols = new(gt()), this._additionalColumns = [], this._hiddenColumns = 0, this._debouncedFixCols = (0, l.default)((() => {
                        this._unhideColumns(), this._unhideCells(), this._fixCols()
                    }), 50), this.dragStarted = new(mt()), this._fieldsOrderChange = !1, this._updateEmptyMessageIcon = this._updateEmptyMessageIcon.bind(this), bt.watchedTheme.subscribe(this._updateEmptyMessageIcon)
                }
                _setOptions(e) {
                    this._options = e || {},
                        this._model = this._options.model, this._defaultFormatter = this._options.defaultFormatter || (e => e.value), this._nullFormatter = this._options.nullFormatter || (() => "&mdash;"), this._widthChange = this._options.widthChange, this._visibilityChange = this._options.visibilityChange, this._noDataString = this._options.noDataString, this._isUnavailableWidgetMarket = this._options.isUnavailableWidgetMarket, this._disableStickyHeader = e.disableStickyHeader
                }
                updateSortField(e, t) {
                    const s = this.getTh(e);
                    e && t && s.size() && (this.$theadRow.find(".tv-screener-table__sort--desc,.tv-screener-table__sort--asc").removeClass("tv-screener-table__sort--desc tv-screener-table__sort--asc"), s.find(".js-table-sort").empty().addClass(`tv-screener-table__sort--${t}`).append("asc" === t ? Rt : Ot))
                }
                highlightCell(e, t, s) {
                    const i = this.$tbody[0].querySelector(`tr[data-symbol="${e}"] td[data-field-key="${t}"]`);
                    if (i) {
                        i.classList.add("tv-screener-table__cell--highlighted");
                        const e = i.querySelector("span");
                        if (e) {
                            const t = s ? "tv-screener-table__cell--growing" : "tv-screener-table__cell--falling";
                            e.classList.add(t)
                        }
                    }
                }
                flickRow(e) {
                    this.$tbody[0].querySelectorAll(`tr[data-symbol="${e}"] td`).forEach((e => {
                        const t = e.querySelector("span");
                        t && t.classList.remove("tv-screener-table__cell--growing", "tv-screener-table__cell--falling")
                    }))
                }
                _createTable() {
                    if (this._table) return;
                    const e = document.createElement("table"),
                        t = ["tv-data-table"];
                    this._options.addTableClasses && t.push(...this._options.addTableClasses), e.classList.add(...t);
                    const s = document.createElement("colgroup"),
                        i = document.createElement("thead"),
                        o = ["tv-data-table__thead"];
                    this._options.addTheadClasses && o.push(...this._options.addTheadClasses), i.classList.add(...o);
                    const r = document.createElement("tr"),
                        n = ["tv-data-table__thead-row"];
                    this._options.addTheadRowClasses && n.push(...this._options.addTheadRowClasses), r.classList.add(...n);
                    const l = document.createElement("tbody");
                    l.classList.add("tv-data-table__tbody"), e.appendChild(s), e.appendChild(i), i.appendChild(r), e.appendChild(l), this._table = e, this._colgroup = s, this._theadRow = r, this._tbody = l, window.addEventListener("resize", (() => this._debouncedFixCols())), this._widthChange.subscribe(this, (() => this._debouncedFixCols())), this._visibilityChange && this._visibilityChange.subscribe((e => {
                        e && this._debouncedFixCols()
                    }))
                }
                _createStickyWrapper() {
                    if (this._stickyWrapper) return;
                    const e = ["tv-data-table-sticky-wrapper"];
                    this._options.addStickyHeaderWrapperClasses && e.push(...this._options.addStickyHeaderWrapperClasses);
                    const t = document.createElement("div");
                    t.classList.add(...e);
                    const s = this._table.cloneNode(!0);
                    t.append(s), this._stickyWrapper = t
                }
                _createHeader() {
                    const e = document.createDocumentFragment(),
                        t = document.createDocumentFragment();
                    this._disableStickyHeader || this._createStickyWrapper();
                    for (let i = 0; i < this._columnsOrder.length; ++i) {
                        const o = this._columnsOrder[i];
                        if (!this._fields[o]) continue;
                        const r = document.createElement("th");
                        r.setAttribute("data-field", o);
                        const n = ["tv-data-table__th", "tv-data-table__cell", "js-tv-data-table-th", `js-tv-data-table-th-${this._esc(o)}`];
                        if (this._options.addThClasses) {
                            const e = "function" == typeof this._options.addThClasses ? this._options.addThClasses(o, this._fields[o]) : this._options.addThClasses;
                            n.push(...e)
                        }
                        r.classList.add(...(s = n, s.filter(Boolean)));
                        const l = "function" == typeof this._options.titleFormatter ? this._options.titleFormatter(o, this._fields[o]) : this._fields[o] && (this._fields[o].content || this._fields[o].title) || o;
                        l instanceof Lt ? r.append(l[0]) : r.innerHtml = l, this._setDraggable(r), t.append(r);
                        const a = document.createElement("col");
                        a.classList.add("js-tv-data-table-col", `js-tv-data-table-col-${this._esc(o)}`), e.append(a)
                    }
                    var s;
                    Nt(this._colgroup), Nt(this._theadRow);
                    const i = this._fields[this._model.searchField] ? this._fields[this._model.searchField].searchValue : void 0;
                    if (this._disableStickyHeader) this._colgroup.append(e), this._theadRow.append(t), this._setSearchInput(this._theadRow, i);
                    else {
                        const s = this._stickyWrapper.querySelector("table"),
                            o = s.querySelector("colgroup"),
                            r = s.querySelector("thead tr");
                        Nt(o), Nt(r);
                        const n = e.cloneNode(!0);
                        o.append(e), this._colgroup.append(n);
                        const l = t.cloneNode(!0);
                        r.append(t), this._theadRow.append(l), this._theadRowSticky = r, s.classList.add("tv-screener-table--fixed"), jt(this._theadRow).find(".js-table-sort").remove(), this._setSearchInput(this._theadRowSticky, i)
                    }
                }
                _setDraggable(e) {
                    const t = jt(e);
                    if (t.is(".js-draggable")) return;
                    const i = jt(this._theadRow);
                    let o = !1;
                    t.addClass("js-draggable").on("mousedown touchstart", (e => {
                        if (t.data("field") === this._model.searchField) return;
                        e.preventDefault(), t.css({
                            position: "relative",
                            left: 0
                        });
                        const r = t.offset().left;
                        let n = r;
                        const l = e.pageX || e.originalEvent.touches[0].pageX,
                            a = e => {
                                const d = (e.pageX || e.originalEvent.touches[0].pageX) - l;
                                if (!o) {
                                    if (Math.abs(d) < 10) return;
                                    s.e(34215).then(s.bind(s, 263221)).then((({
                                        ContextMenuManager: e
                                    }) => {
                                        null !== e.getShown() && (o = !1, t.css("left", "auto"), jt(window).off("mousemove touchmove", a), this._onDragStop(t))
                                    })), this._onDragStart(t), t.one("click", (e => {
                                        o && e.stopPropagation()
                                    }))
                                }
                                o = !0;
                                const c = i.offset().left,
                                    h = i.outerWidth(),
                                    u = t.outerWidth(),
                                    p = Math.max(c, Math.min(c + h - u, r + d)),
                                    _ = p + u / 2;
                                let g = jt(),
                                    f = !1;
                                const m = t.prev();
                                if (m.size() && ((0, C.isRtl)() ? _ > m.offset().left + m.outerWidth() / 2 : p <= c || _ < m.offset().left + m.outerWidth() / 2)) g = m;
                                else {
                                    const e = t.next();
                                    if (e.size() && !e.is(".i-hidden")) {
                                        (p + u >= c + h || ((0, C.isRtl)() ? _ < e.offset().left + e.outerWidth() / 2 : _ > e.offset().left + e.outerWidth() / 2)) && (g = e, f = !0)
                                    }
                                }
                                const v = g.data("field");
                                if (g.size() && "name" !== v) {
                                    const e = t.data("field"),
                                        s = jt(this._colgroup).find(`.js-tv-data-table-col-${this._esc(e)}`),
                                        i = jt(this._colgroup).find(`.js-tv-data-table-col-${this._esc(v)}`);
                                    let o = jt(),
                                        r = jt();
                                    this._stickyWrapper && (o = jt(this._stickyWrapper).find(`.js-tv-data-table-col-${this._esc(e)}`), r = jt(this._stickyWrapper).find(`.js-tv-data-table-col-${this._esc(v)}`)), f ? (s.insertAfter(i), o.size() && r.size() && o.insertAfter(r)) : (s.insertBefore(i), o.size() && r.size() && o.insertBefore(r));
                                    let l = jt(),
                                        a = jt();
                                    this._stickyWrapper && (l = jt(this._stickyWrapper).find(`.js-tv-data-table-th-${this._esc(e)}`), a = jt(this._stickyWrapper).find(`.js-tv-data-table-th-${this._esc(v)}`)), f ? (t.insertAfter(g),
                                        n = t.offset().left - g[0].offsetWidth, l.size() && a.size() && l.insertAfter(a)) : (t.insertBefore(g), n = t.offset().left + g[0].offsetWidth, l.size() && a.size() && l.insertBefore(a)), this._swapCols(e, v)
                                }
                                t.css("left", p - n)
                            };
                        jt(window).on("mousemove touchmove", a).one("mouseup touchend", (e => {
                            setTimeout((() => {
                                o = !1
                            }), 0), t.css("left", "auto"), jt(window).off("mousemove touchmove", a), o && this._onDragStop(t)
                        }))
                    }))
                }
                _setSearchInput(e, t) {
                    const s = e.querySelector(".js-search-query");
                    if (!s) return;
                    const i = s.querySelector(".js-search-input"),
                        o = s.querySelector(".js-input-reset");
                    (0, Ne.isScreenerPage)(this._model._bridge) && i.focus();
                    const r = Boolean(t);
                    o.classList.toggle("i-hidden", !r), r && (i.value = t), i.addEventListener("input", (() => {
                        o.classList.toggle("i-hidden", 0 === i.value.length)
                    }));
                    const n = (0, l.default)((() => {
                        this._fields[this._model.searchField].searchValue = i.value, this._model.loading || this._model.update()
                    }), 400);
                    i.addEventListener("input", (() => n()))
                }
                _onDragStart(e) {
                    this._model.preventPrevScanRequest(), this.dragStarted.setValue(!0);
                    const t = e.data("field"),
                        s = this._getColByField(t);
                    s && (this._options.addDraggingThClasses && e[0].classList.add(...this._options.addDraggingThClasses), this._options.addDraggingColClasses && s.classList.add(...this._options.addDraggingColClasses))
                }
                _swapCols(e, t) {
                    const s = this._columnsOrder.indexOf(e),
                        i = this._columnsOrder.indexOf(t);
                    this._columnsOrder[s] = this._columnsOrder.splice(i, 1, this._columnsOrder[s])[0], this._fieldsOrderChanged = !0;
                    const o = Math.min(s, i),
                        r = Math.max(s, i),
                        n = this._tbody.children;
                    for (let e = 0; e < n.length; e++) {
                        const t = n[e].children,
                            s = t[o];
                        t[r].after(s)
                    }
                    const l = this._fieldsOrder.indexOf(e),
                        a = this._fieldsOrder.indexOf(t);
                    this._fieldsOrder[l] = this._fieldsOrder.splice(a, 1, this._fieldsOrder[l])[0]
                }
                _onDragStop(e) {
                    this.dragStarted.setValue(!1);
                    const t = e.data("field"),
                        s = this._getColByField(t);
                    s && (this._options.addDraggingThClasses && e[0].classList.remove(...this._options.addDraggingThClasses), this._options.addDraggingColClasses && s.classList.remove(...this._options.addDraggingColClasses), this._fieldsOrderChanged && (this.fieldsOrderChange.fire(), this._fieldsOrderChanged = !1, this._model.trackEvent(`Drag and drop ${"big"===this._options.table_style?"quotes":"non-quotes"} column`), (0, k.sendSnowPlowData)(new P(t))), this._fixCols())
                }
                _getColByField(e) {
                    return this._colgroup.querySelector(`.js-tv-data-table-col-${this._esc(e)}`)
                }
                _fixCols() {
                    const e = Array.from(this._theadRow.children);
                    if (0 === e.length) return;
                    this._table.classList.remove("tv-screener-table--fixed");
                    const t = this._table.querySelectorAll("col");
                    let s = e.map((e => Math.floor(e.getBoundingClientRect().width)));
                    const i = "big" === this._options.table_style,
                        o = window.innerWidth > a.breakpoints.tablet,
                        r = this._table.parentNode.offsetWidth;
                    let n = Vt(s);
                    if (i && o && n > r) {
                        do {
                            n > r && (s.pop(), this._hideColumn()), n = Vt(s)
                        } while (n > r);
                        const e = Math.floor((r - n) / s.length);
                        s = s.map((t => t + e));
                        const t = s.length - 1,
                            i = s[t],
                            o = r - Vt(s);
                        s[t] = i + o
                    }
                    if (t.forEach(((e, t) => {
                            const i = s[t];
                            i ? e.style.width = `${i}px` : e.classList.add("i-hidden")
                        })), this._stickyWrapper) {
                        const e = this._stickyWrapper,
                            t = e.querySelector("colgroup"),
                            i = e.querySelector("table"),
                            o = this._colgroup.cloneNode(!0);
                        t.replaceWith(o), i.classList.add("tv-screener-table--fixed"), this._stickyWrapper.style.width = function(e, t) {
                            if (!((0, Ne.isMarketPage)(e._model._bridge) && window.innerWidth > a.breakpoints.phone)) return;
                            return e._stickyWrapper.querySelectorAll("th").forEach(((e, s) => {
                                t[s] ? e.classList.remove("i-hidden") : e.classList.add("i-hidden")
                            })), `${ze(e._table).width()}px`
                        }(this, s) || `${n}px`
                    }
                    this._table.classList.add("tv-screener-table--fixed"), this.afterFixCols.fire()
                }
                _hideColumn() {
                    const e = this._theadRow.children;
                    for (let t = e.length - 1; t >= 0; t--) {
                        const s = e[t];
                        if (!s.classList.contains("i-hidden")) {
                            s.classList.add("i-hidden");
                            break
                        }
                    }
                    this._hiddenColumns++
                }
                _unhideColumns() {
                    const e = this._table.querySelectorAll("col"),
                        t = this._theadRow.querySelectorAll("th");
                    e.forEach(((e, s) => {
                        e.style.width = "", e.classList.remove("i-hidden"), t[s].classList.remove("i-hidden")
                    })), this._hiddenColumns = 0
                }
                _unhideCells() {
                    if (!this._tbody) return;
                    this._tbody.querySelectorAll("td.i-hidden").forEach((e => {
                        e.classList.remove("i-hidden")
                    }))
                }
                toggleSignals(e) {
                    const t = this._fields[e];
                    t.displaySignal = !t.displaySignal;
                    const s = this._columnsOrder.indexOf(e);
                    if (-1 === s) return;
                    const i = this._tbody.querySelectorAll(`.tv-data-table__row .tv-data-table__cell:nth-child(${s+1}) .tv-screener-table__signal`);
                    0 !== i.length && (i.forEach((e => e.classList.toggle("i-hidden", !t.displaySignal))), this._fixCols())
                }
                get $element() {
                    return this._createTable(), jt(this._table)
                }
                get $tbody() {
                    return this._createTable(), jt(this._tbody)
                }
                get $stickyHeader() {
                    return this._createTable(), this._createStickyWrapper(), jt(this._stickyWrapper)
                }
                get $theadRow() {
                    return this._disableStickyHeader ? jt(this._theadRow) : jt(this._theadRowSticky)
                }
                get additionalColumns() {
                    return this._additionalColumns
                }
                get fieldsOrder() {
                    return this._fieldsOrder
                }
                get columnsOrder() {
                    return this._columnsOrder
                }
                setColumnsMap(e) {
                    this._columnsMap = e
                }
                setFields(e) {
                    this._fieldsOrder = [], this._columnsOrder = [];
                    for (const [t, s] of Object.entries(e)) this._fieldsOrder.push(t), s.skipField || this._columnsOrder.push(t);
                    this._fields = {}, this._additionalColumns = [], this._fieldsOrder.forEach((t => {
                        this._fields[t] = e[t], e[t] && e[t].additionalColumns && e[t].additionalColumns.forEach((e => {
                            this._additionalColumns.includes(e) || this._additionalColumns.push(e)
                        }))
                    })), this.fieldsOrderChange.fire(), this._fieldsOrderChange = !0
                }
                update(e) {
                    this._fieldsOrderChange && (this._unhideColumns(), this._createTable(), this._createHeader()), this.clearData(), this.append(e), this._fieldsOrderChange && (this._fieldsOrderChange = !1), this._fixCols()
                }
                _updateEmptyMessageIcon() {
                    if (!this._$emptyMessage) return;
                    const e = bt.watchedTheme.value() || ((null === (t = document.querySelector("html")) || void 0 === t ? void 0 : t.classList.contains("theme-dark")) ? vt.StdTheme.Dark : vt.StdTheme.Light);
                    var t;
                    const s = this._$emptyMessage.find("i"),
                        i = e === vt.StdTheme.Light ? Dt : Bt;
                    s.html(i)
                }
                _setEmptyMessage() {
                    let e, t = "";
                    (0, Ne.isScreenerPage)(this._model._bridge) ? t = "tv-screener-table__empty-result--fixed": ((0, Ne.isChartPage)(this._model._bridge) || (0,
                        Ne.isExternalWidget)(this._model._bridge)) && (t = "tv-screener-table__empty-result--relative"), e = this._isUnavailableWidgetMarket ? h.t(null, void 0, s(446367)).format({
                        openLink: '<a href="https://www.tradingview.com/" target="_blank" rel="noopener" class="tv-screener-table__empty-result-link">',
                        closeLink: "</a>"
                    }) : this._noDataString || h.t(null, void 0, s(641379)), this._$emptyMessage = jt(`\n\t\t\t<div class="tv-screener-table__empty-result ${t}">\n\t\t\t\t<i class="js-no-results-icon"></i>\n\t\t\t\t<div class="tv-screener-table__empty-description">${e}</div>\n\t\t\t</div>\n\t\t`).insertAfter(this._table), this._updateEmptyMessageIcon(), (0, Ne.isMarketPage)(this._model._bridge) ? this._fixCols() : this._model._view.fixStandaloneWidth()
                }
                append(e) {
                    this._$emptyMessage && this._$emptyMessage.remove();
                    const t = Tt(this._columnsMap, "currency", this._model.selectedIntervalId),
                        s = Tt(this._columnsMap, "fundamental_currency_code", this._model.selectedIntervalId),
                        i = document.createDocumentFragment();
                    for (let o = 0; o < e.length; o++) {
                        const r = e[o];
                        if (!Array.isArray(r.d)) continue;
                        const n = r.d[t],
                            l = r.d[s],
                            a = ["tv-data-table__row"];
                        if (this._options.addRowClasses) {
                            const e = "function" == typeof this._options.addRowClasses ? this._options.addRowClasses(r) : this._options.addRowClasses;
                            a.push(...e)
                        }
                        const d = [];
                        if (this._options.addRowAttrs) {
                            const e = "function" == typeof this._options.addRowAttrs ? this._options.addRowAttrs(r) : this._options.addRowAttrs;
                            for (const [t, s] of Object.entries(e)) d.push([t, s])
                        }
                        const c = document.createDocumentFragment();
                        let h = this._hiddenColumns;
                        for (let e = this._fieldsOrder.length - 1; e >= 0; --e) {
                            const t = this._fieldsOrder[e],
                                s = this._fields[t];
                            if (!s || s.skipField) continue;
                            const i = Tt(this._columnsMap, t, this._model.selectedIntervalId),
                                o = s.additionalColumns ? s.additionalColumns.map((e => Ht(r.d, Tt(this._columnsMap, e, this._model.selectedIntervalId)))) : [];
                            let a = "";
                            const d = ["tv-data-table__cell"];
                            let p;
                            if (s.tooltip && ("function" == typeof s.tooltip ? a = s.tooltip(...o, s) : "string" == typeof s.tooltip && (a = s.tooltip), d.push("apply-common-tooltip")), "price" === s.type && o.length >= 4) {
                                const e = o.slice(-4);
                                e[2] = "true" === e[2], p = (0, u.getPriceFieldFormatter)(...e)
                            } else p = (0, u.getFieldFormatter)(s, this._model.screener_type, !1);
                            "name" === t && o.push(r.s);
                            const _ = Ht(r.d, i);
                            let g = null === _ ? this._nullFormatter() : p && p.format(_) || this._defaultFormatter({
                                value: _,
                                fieldKey: t,
                                field: s,
                                rowData: r,
                                fieldsOrder: this._fieldsOrder,
                                title: a,
                                columnsMap: this._columnsMap
                            });
                            if (this._options.addCellClasses) {
                                const e = "function" == typeof this._options.addCellClasses ? this._options.addCellClasses({
                                    value: _,
                                    fieldKey: t,
                                    field: s
                                }) : this._options.addCellClasses;
                                d.push(...e)
                            }
                            const f = s.additionalFormatter ? s.additionalFormatter(...o) : "";
                            s.mutateDisplayValue && (g = s.mutateDisplayValue(g, ...o, s)), this._model.hasMarkedSymbols() && d.push("tv-screener-table__cell--with-marker"), h > 0 && (d.push("i-hidden"), h--);
                            let m = g + f + At(n, l, s.type, g, (0, Ne.isMarketPage)(this._model._bridge));
                            (t === ee.ScanFields.Name || t === ee.ScanFields.Sector && this._model.screener_type === yt.ScreenerType.CryptoMkt) && (m = It({
                                symbolHtml: m,
                                fieldsOrder: this._fieldsOrder,
                                rowData: r.d,
                                proSymbol: r.s
                            }));
                            const v = document.createElement("td");
                            v.classList.add(...d), v.title = a && "name" !== t ? a : "", v.setAttribute("data-field-key", t), v.innerHTML = m, c.prepend(v)
                        }
                        const p = document.createElement("tr");
                        p.classList.add(...a), d.forEach((e => p.setAttribute(...e))), p.append(c), this._options.onRowBuild && this._options.onRowBuild(p, r), i.appendChild(p)
                    }
                    this._tbody.appendChild(i), 0 === this._tbody.querySelectorAll("tr").length && this._setEmptyMessage(), this._options.onUpdate && this._options.onUpdate()
                }
                clearData(e) {
                    if (this._tbody)
                        if (e) {
                            const t = this._tbody.children,
                                s = t.length;
                            for (let i = e; i < s; i++) {
                                const s = t[e];
                                this._tbody.removeChild(s)
                            }
                        } else this._tbody.innerHTML = ""
                }
                setThContent(e, t) {
                    const s = this.getTh(e);
                    s.size() && (s.empty(), t instanceof Lt ? s.append(t) : s.html(t), "name" === e && this._setSearchInput(this.$theadRow[0], this._fields[e].searchValue))
                }
                setColumnTitle(e, t) {
                    const s = this.getTh(e);
                    s.size() && s.find(".js-head-title").text(t)
                }
                setSearchText(e) {
                    const t = this.getTh(this._model.searchField);
                    t.size() && t.find(".js-field-total").text(e)
                }
                getTh(e) {
                    const t = this.$theadRow;
                    return t && t.find(`.js-tv-data-table-th-${this._esc(e)}`) || jt()
                }
                _esc(e) {
                    return e.replace(/[\.|]/g, "_")
                }
            }

            function Nt(e) {
                const t = e.children;
                0 !== t.length && Array.from(t).forEach((t => e.removeChild(t)))
            }

            function Vt(e) {
                return e.reduce(((e, t) => e + t))
            }

            function Ht(e, t) {
                return e[t]
            }
            var qt = s(384809),
                zt = s(812191),
                Ut = s(965305);

            function Kt(e) {
                const t = e._model,
                    s = e._bridge,
                    i = {
                        screenerType: Jt(t),
                        market: t.markets[0],
                        utm: t.utm,
                        largeChartUrl: t.largeChartUrl,
                        tableStyle: s.table_style,
                        screenerPlacement: (0, Ne.getScreenerPage)(s),
                        openChartOnSameTab: s.open_chart_on_same_tab,
                        bridgeBaseUrl: s.baseUrl,
                        selectedIntervalId: t.selectedIntervalId
                    };
                return e => function(e) {
                    switch (e.fieldKey) {
                        case ee.ScanFields.Name:
                            return function(e) {
                                const {
                                    value: t,
                                    title: s,
                                    screenerPlacement: i,
                                    openChartOnSameTab: o
                                } = e;
                                if ("chart" !== i) {
                                    const i = Zt(e);
                                    return `<a class="tv-screener__symbol apply-common-tooltip" title="${(0,ie.htmlEscape)(s)}" href="${(0,ie.htmlEscape)(i)}" ${o?"":'target="_blank" rel="noopener"'}>${t}</a>`
                                }
                                return `<div class="tv-screener__symbol tv-screener__symbol--text apply-common-tooltip" title="${s}">${t}</div>`
                            }(e);
                        case ee.ScanFields.Description:
                            return function(e) {
                                const {
                                    value: t,
                                    screenerType: s,
                                    market: i
                                } = e;
                                if (["sector", "industry"].includes(s)) {
                                    const e = Xt(t);
                                    return `<a class="tv-screener__symbol" target="_blank" rel="noopener" href="${(0,Ut.getSectorAndIndustryUrlByMarket)(t,i,s)}">\n\t\t\t\t\t\t${e}\n\t\t\t\t\t</a>`
                                }
                                return Gt(t)
                            }(e);
                        case ee.ScanFields.Sector:
                            return function(e) {
                                const {
                                    value: t,
                                    fieldKey: s,
                                    screenerType: i,
                                    market: o,
                                    tableStyle: r,
                                    utm: n,
                                    openChartOnSameTab: l
                                } = e;
                                if (i === yt.ScreenerType.CryptoMkt) {
                                    const s = Zt(e);
                                    return `<a class="tv-screener__symbol" href="${(0,ie.htmlEscape)((0,qt.addUtmToUrl)(s,n))}" ${l?"":'target="_blank" rel="noopener"'}>\n\t\t\t\t\t\t${t}\n\t\t\t\t\t</a>`
                                }
                                if ("big" === r) return Yt(t, o, s);
                                return t
                            }(e);
                        case ee.ScanFields.Industry:
                            return function(e) {
                                const {
                                    value: t,
                                    fieldKey: s,
                                    screenerType: i,
                                    market: o,
                                    tableStyle: r
                                } = e;
                                if ("big" === r && i !== yt.ScreenerType.CryptoMkt) return Yt(t, o, s);
                                return Gt(t)
                            }(e);
                        case ee.ScanFields.Country:
                            return (0, Me.triesTranslateCountrieName)(e.value);
                        default:
                            return e.value
                    }
                }({ ...e,
                    ...i
                })
            }

            function Xt(e) {
                return (0, R.triesTranslateScreenerData)(e)
            }

            function Gt(e) {
                const t = Xt(e);
                return `<span class="tv-screener-table__cell--fix-width" title="${t}">${t}</span>`
            }

            function Yt(e, t, s) {
                const i = Xt(e);
                return `<a class="tv-screener__symbol" target="_blank" rel="noopener" href="${(0,Ut.getSectorAndIndustryUrlByMarket)(e,t,s)}">\n\t\t\t\t<span class="tv-screener__symbol--secondary">${i}</span>\n\t\t\t</a>`
            }

            function Jt(e) {
                return e.screener_type
            }

            function Zt(e) {
                const {
                    rowData: t,
                    screenerType: s,
                    screenerPlacement: i,
                    utm: o,
                    largeChartUrl: r,
                    columnsMap: n,
                    selectedIntervalId: l
                } = e;
                if (s === yt.ScreenerType.CryptoMkt) {
                    const e = {
                        proName: t.s,
                        type: "crypto"
                    };
                    return "widget" === i && r ? (0, zt.makeTemplateSymbolUrl)(r, e) : (0, zt.makeSymbolPageUrl)(e)
                }
                const a = Tt(n, "exchange", l);
                let d;
                a && (d = t.d[a]);
                const c = {
                    proName: t.s,
                    exchange: d,
                    type: s
                };
                return s === yt.ScreenerType.ContinuousFutures ? (0, zt.makeSymbolChartUrl)(c) : "widget" === i && r ? (0, zt.makeTemplateSymbolUrl)(r, c) : (0, zt.makeSymbolPageUrl)(c, o)
            }
            var Qt, es = s(583912);

            function ts(e) {
                const t = e._fields_order,
                    i = e._disableStickyHeader,
                    o = e._lifecycle,
                    r = e.widthChange,
                    n = e._model,
                    l = n.screener_type,
                    a = e._bridge,
                    d = a.table_style,
                    c = a.hide_controls,
                    p = a.visible,
                    _ = (0, Ne.getScreenerPage)(a),
                    g = u.fields.description,
                    f = {
                        model: n,
                        fieldsOrder: t,
                        titleFormatter: (t, s) => {
                            const i = e._getThContent(t, s);
                            return t === ee.ScanFields.Name && o.beforeAppendSymbolsHeader(i.get(0)), i
                        },
                        defaultFormatter: Kt(e),
                        addTheadClasses: ["tv-screener-table__thead", i ? "tv-screener-table__thead--sticky" : "tv-screener-table__thead--regular"],
                        addThClasses: ["tv-data-table__sortable", "tv-screener-table__sortable", "tv-screener-table__th", d ? `tv-screener-table__th--${d}` : "", "widget" === _ && c ? "tv-screener-table__th--no-toolbar" : ""],
                        addCellClasses: e => {
                            const {
                                value: t,
                                fieldKey: s,
                                field: i
                            } = e, o = ["tv-screener-table__cell"];
                            return o.push(... function(e) {
                                const t = [];
                                e.align === Qt.Right || e.align === Qt.Center || e.control && "select" !== e.control || t.push("tv-screener-table__cell--left");
                                e.align !== Qt.Center || e.control || t.push("tv-screener-table__cell--center");
                                return t
                            }(i)), i.highlightChange && t && o.push(t >= 0 ? "tv-screener-table__cell--up" : "tv-screener-table__cell--down"), s !== ee.ScanFields.Name || !g.disabled && g.checked || o.push("widget" === _ ? "tv-screener-table__cell--widget-without-description" : "tv-screener-table__cell--without-description"), d && o.push(`tv-screener-table__cell--${d}`), "widget" === _ && o.push(... function(e, t, s) {
                                const i = [];
                                e && i.push("tv-screener-table__cell--no-toolbar");
                                t === yt.ScreenerType.CryptoMkt && i.push("tv-screener-table__cell--crypto_mkt");
                                return i
                            }(c, l)), o
                        },
                        widthChange: r,
                        visibilityChange: p,
                        table_style: d,
                        noDataString: e._noDataString,
                        isUnavailableWidgetMarket: e._isUnavailableWidgetMarket,
                        disableStickyHeader: i,
                        onRowBuild: (t, s) => {
                            const i = e._selectableList;
                            "chart" === _ && es.linking.proSymbol.value() === s.s && i && (e._setActiveElem(t), i.focusItem(t)), o.beforeAppendSymbol(s.s, t)
                        },
                        onUpdate: () => {
                            const t = e._selectableList;
                            t && t.restore()
                        }
                    },
                    m = { ...f,
                        sortable: !0,
                        addTableClasses: ["tv-screener-table"],
                        addTheadRowClasses: ["tv-data-table__stroke", "tv-screener-table__head"],
                        addRowClasses: () => ["tv-data-table__stroke", "tv-screener-table__result-row"],
                        addRowAttrs: e => ({
                            "data-symbol": e.s
                        }),
                        addStickyHeaderWrapperClasses: ["tv-screener-sticky-header-wrapper"],
                        addDraggingThClasses: ["tv-screener-table__th--dragging"],
                        addDraggingColClasses: ["tv-screener-table__col--dragging"]
                    },
                    v = new Wt(m);
                return v.setFields({
                    name: {
                        title: h.t(null, void 0, s(423097))
                    }
                }), v
            }! function(e) {
                e.Center = "center", e.Right = "right"
            }(Qt || (Qt = {}));
            var ss, is = s(823127);

            function os(e) {
                const {
                    view: t
                } = e;
                return t._bridge.hide_controls ? Promise.resolve() : tt(e, rs, Ye.Header)
            }

            function rs(e, t) {
                const {
                    fieldKey: s
                } = e, i = t.default, o = u.fields[s], r = { ...e,
                    field: o
                };
                return { ...ns(r, i),
                    ...ls(r, i),
                    ...as(r, i),
                    ...ds(r, i)
                }
            }

            function ns(e, t) {
                const {
                    view: i,
                    fieldKey: o
                } = e;
                if ("name" !== o) return {};
                const r = new t({
                        label: !u.fields.description.disabled && u.fields.description.checked ? h.t(null, void 0, s(335976)) : h.t(null, void 0, s(308014)),
                        disabled: u.fields.description.disabled,
                        onExecute: () => {
                            const e = !u.fields.description.checked;
                            u.fields.description.checked = e, i.table.update(i._data), i.$fieldSetsButton.toggleClass("tv-screener-toolbar__button--unsaved", i._model.isFieldSetChanged()), (0, k.sendSnowPlowData)(new it.DispatchContextMenuActionEvent(ss.ToggleDescription, "header", e))
                        }
                    }),
                    n = new t({
                        label: !u.fields.type.disabled && u.fields.type.checked ? h.t(null, void 0, s(459117)) : h.t(null, void 0, s(107777)),
                        disabled: u.fields.type.disabled,
                        onExecute: () => {
                            const e = !u.fields.type.checked;
                            u.fields.type.checked = e, i.table.update(i._data), i.$fieldSetsButton.toggleClass("tv-screener-toolbar__button--unsaved", i._model.isFieldSetChanged()), (0, k.sendSnowPlowData)(new it.DispatchContextMenuActionEvent(ss.ToggleSymbolType, "header", e))
                        }
                    }),
                    l = !["forex", "crypto"].includes(i._model.screener_type),
                    a = new t({
                        label: Pt() ? h.t(null, void 0, s(417354)) : h.t(null, void 0, s(57473)),
                        onExecute: () => {
                            const e = !Pt();
                            var t;
                            t = e, rt.setValue(Et, t), i.table.update(i._data), (0, k.sendSnowPlowData)(new it.DispatchContextMenuActionEvent(ss.ToggleShowCurrency, "header", e))
                        }
                    });
                return { ...l ? {
                        toggleCurrencyDisplayAction: a
                    } : null,
                    toggleDescriptionAction: r,
                    toggleSymbolTypeAction: n
                }
            }

            function ls(e, t) {
                const {
                    view: i,
                    fieldKey: o,
                    field: r
                } = e;
                if ("name" === o) return {};
                return {
                    removeColumnAction: new t({
                        label: h.t(null, void 0, s(447927)),
                        onExecute: () => {
                            r.checked = !1;
                            const e = i._table.fieldsOrder.filter((e => e !== o));
                            i._model.fieldSetChanged.fire(e.filter((e => u.fields[e] && !0 !== u.fields[e].disabled && !0 !== u.fields[e].hiddenColumn))), i._model.update(), i.$fieldSetsButton.toggleClass("tv-screener-toolbar__button--unsaved", i._model.isFieldSetChanged()), (0, k.sendSnowPlowData)(new it.DispatchContextMenuActionEvent(ss.RemoveColumn, "header", o))
                        }
                    })
                }
            }

            function as(e, t) {
                const {
                    view: i,
                    fieldKey: o,
                    field: r,
                    e: n
                } = e, l = n.currentTarget || n.target, a = new t({
                    label: h.t(null, void 0, s(508359)),
                    onExecute: () => {
                        i.resetFilter(o), (0, k.sendSnowPlowData)(new it.DispatchContextMenuActionEvent(ss.ResetFilter, "header", o))
                    }
                }), d = new t({
                    label: h.t(null, void 0, s(84730)),
                    onExecute: () => {
                        const e = is(l).closest("th");
                        i.showInplaceEditor(o, e),
                            n.stopPropagation(), (0, k.sendSnowPlowData)(new it.DispatchContextMenuActionEvent(ss.ChangeFilter, "header", o))
                    }
                });
                if (r.control) {
                    i.fieldValueString(o) || a.update({
                        disabled: !0
                    })
                } else a.update({
                    disabled: !0
                }), d.update({
                    disabled: !0
                });
                return {
                    resetFilterAction: a,
                    changeFilterAction: d
                }
            }

            function ds(e, t) {
                const {
                    view: i,
                    fieldKey: o,
                    field: r
                } = e;
                if (!r.hasOwnProperty("displaySignal")) return {};
                const {
                    displaySignal: n
                } = r;
                return {
                    toggleSignalAction: new t({
                        label: n ? h.t(null, void 0, s(868189)) : h.t(null, void 0, s(26693)),
                        onExecute: () => {
                            i._table.toggleSignals(o), (0, k.sendSnowPlowData)(new it.DispatchContextMenuActionEvent(ss.ToggleSignal, "header", !n))
                        }
                    })
                }
            }! function(e) {
                e.ActiveOnly = "active_only", e.ToggleDescription = "show_description", e.ToggleSymbolType = "show_symbol_type", e.TogglePrimaryOnly = "show_primary_only", e.RemoveColumn = "remove_column", e.ResetFilter = "reset_filter", e.ChangeFilter = "change_filter", e.ToggleSignal = "show_rating", e.ToggleShowCurrency = "toggle_show_currency"
            }(ss || (ss = {}));
            var cs = s(81278),
                hs = s(125316);
            const us = "screener-market-select-mode";
            var ps = s(35387),
                _s = s(67905),
                gs = s(491540),
                fs = s(823127);
            const ms = s(583912).linking;
            s(875561);
            const vs = s(869403),
                bs = s(272001).getLogger("Screener.View"),
                {
                    operators: ys,
                    fields: Ss
                } = s(450587),
                ws = h.t(null, {
                    context: "forex_screener_pairs_select"
                }, s(735295)),
                Cs = h.t(null, void 0, s(695271)),
                ks = h.t(null, void 0, s(302951)),
                $s = s(182951),
                xs = s(891250),
                Is = [-1, 10, 60],
                Fs = [-1, 1],
                Ts = {
                    bonds: {
                        yields: h.t(null, {
                            context: "Bonds"
                        }, s(143560)),
                        prices: h.t(null, {
                            context: "Bonds"
                        }, s(357096))
                    },
                    crypto_mkt: {
                        USD: "USD",
                        BTC: "BTC"
                    }
                },
                Ms = `<div class="tv-screener-table__search-query js-search-query ${u.fields.description.disabled||!u.fields.description.checked?"tv-screener-table__search-query--without-description":""}">\n\t\t<input\n\t\t\ttype="text"\n\t\t\tautocomplete="off"\n\t\t\tclass="tv-screener-table__search-input js-search-input"\n\t\t/>\n\t\t<span class="tv-search-bar__search-icon tv-screener-table__search-icon">${s(62555)}</span>\n\t\t<span class="tv-search-bar__input-reset tv-screener-table__input-reset i-hidden js-input-reset">${s(83170)}</span>\n\t</div>`;
            class As {
                constructor(e, t) {
                    this._bridge = e, this._model = t, this._onWidget = e.onWidget, this._activeElem = null, this._changeSymbol = (0, l.default)(this._changeSymbol, 500), this._lifecycle = new ne, this.sortedFields = Object.keys(u.fields).filter((e => Boolean((0, u.getFieldTitle)(u.fields[e])))), this._popups = new j(t, this, e), this._dialog = new Q(t, this, e), this._disableStickyHeader = this._bridge.disableStickyHeader, this._periodPicker = e.period_picker, this._noDataString = e.no_data_string, this._isUnavailableWidgetMarket = e.isUnavailableWidgetMarket, this._periodPickerButtons = [{
                        id: "yesterday",
                        title: h.t(null, void 0, s(730141))
                    }, {
                        id: "today",
                        title: h.t(null, void 0, s(963386))
                    }, {
                        id: "tomorrow",
                        title: h.t(null, void 0, s(749930))
                    }, {
                        id: "this_week",
                        title: h.t(null, void 0, s(924267))
                    }, {
                        id: "next_week",
                        title: h.t(null, void 0, s(302032))
                    }], this.toggleAlert = new vs;
                    const i = "undefined" === this._model.settingKey ? this._model.screener_type : this._model.settingKey;
                    this._fields_order = this._model.settingsSaver.getJSON(i + ".fields_order", []),
                        this._data = [], this._lastSetId = null, this.widthChange = new vs, this._bridge.width && this._bridge.width.subscribe((() => {
                            this.widthChange.fire()
                        })), this._$groupSelect = null, this._preventHighlightChanges = !1, this._table = ts(this), this._model.fieldSetChanged.subscribe(null, (e => {
                            const t = {};
                            e.forEach((e => {
                                t[e] = u.fields[e]
                            })), this._table.setFields(t)
                        })), this._model.filterSetChanged.subscribe(null, (() => {
                            this.$filterSetsButton.toggleClass("tv-screener-toolbar__button--unsaved", this._model.isFilterSetChanged())
                        })), this._table.fieldsOrderChange.subscribe(null, (() => {
                            this._model.fieldsOrder.setValue(this._table.fieldsOrder), this.$fieldSetsButton.toggleClass("tv-screener-toolbar__button--unsaved", this._model.isFieldSetChanged()), this._model.settingsSaver.setJSON(i + ".fields_order", this._table.fieldsOrder, {
                                forceFlush: !0
                            })
                        }));
                    let o = 0,
                        r = !1;
                    this._model.loadingStart.subscribe(null, (e => {
                        e ? (r = !0, this._bridge.standalone && (o = fs(document).scrollTop()), this._showSpinner(this.$bottomLoadingScreen)) : (o = 0, this._model.isFastRefresh || this._showSpinner())
                    })), this._model.loadingStart.subscribe(null, (() => this.resetRefreshCounter(!0))), this._model.loadingComplete.subscribe(null, (() => {
                        r && this._bridge.standalone && 0 !== o && fs(document).scrollTop() !== o ? (r = !1, fs(document).scrollTop(o), o = 0) : this._bridge.standalone && this._isScrollBottom() && fs(document).scrollTop(fs(document).scrollTop() / 2), this._hideSpinner(), this.resetRefreshCounter()
                    })), this._model.eodRestriction.subscribe((() => this.updateIntervalButton()), {
                        callWithLast: !0
                    }), window.loginStateChange && window.loginStateChange.subscribe(null, (() => {
                        if (this.resetRefreshCounter(), "forex" === this._model.screener_type) {
                            const e = this._model.selectedGroups;
                            u.fields.sector.value = Array.isArray(e) && e[0] === h.t(null, void 0, s(302951)) ? null : e, this._$groupSelectButton && (this._$groupSelectButton.empty(), this.updateGroupsButton(this._$groupSelectButton, e))
                        }
                    })), this._bridge.standalone && fs(window).on("scroll", (() => {
                        fs(".js-dropdown-toggle.i-opened").trigger("resetPosition")
                    }));
                    const n = (0, l.default)((() => {
                            this._tempBusy = !1
                        }), 250),
                        a = () => {
                            this._tempBusy || (this._tempBusy = !0), n()
                        };
                    this._bridge.standalone && fs(window).on("scroll", a), fs(window).on("resize", a), this.widthChange.subscribe(this, a), this._bridge.standalone || this._model.loadingComplete.subscribe(null, (() => {
                        this.isEndReached() ? (this.$content.addClass("tv-screener__content-pane--fully-loaded"), this._table.$element.css("margin-bottom", -this._contentPadding)) : (this.$content.removeClass("tv-screener__content-pane--fully-loaded"), this._table.$element.css("margin-bottom", ""))
                    })), TradingView.onChartPage && de.subscribe("screener.selected_type_on_chart", (e => {
                        this._model.changeScreenerType(e).then((() => {
                            this._lastSetId = null, this._popups.setMarketsList((0, b.getMarketsByScreenerType)(this._model.screener_type)), "forex" === this._model.screener_type ? this._$groupSelect.removeClass("i-hidden") : this._$groupSelect.addClass("i-hidden"), this.updateIntervalButton(this._$selectIntervalButton, this._model.selectedIntervalId), this._popups.updateRefreshIntervalsPopupContent()
                        })).then((() => this.updateMarketButton())).catch((e => {
                            e && bs.logError(e)
                        }))
                    }))
                }
                getSelectedSymbols() {
                    return this._selectableList ? this._selectableList.getSelectedKeys() : []
                }
                getFocusedSymbol() {
                    if (this._selectableList) return this._selectableList.getFocusedKey()
                }
                registerHooksHandlers(e) {
                    this._lifecycle.registerHandlers(e)
                }
                _isScrollBottom() {
                    return fs(window).scrollTop() + fs(window).height() === fs(document).height()
                }
                _initSelectableList() {
                    this._selectableList = (0, d.createSelectableList)({
                        list: this.$content.get(0),
                        listItemClass: "tv-screener-table__result-row",
                        selectedListItemClass: "tv-screener-table__result-row--selected",
                        focusedListItemClass: "tv-screener-table__result-row--focused",
                        onNavigate: this._onSymbolsNavigate.bind(this),
                        onConfirm: this._onSymbolConfirm.bind(this),
                        getNodeKey: e => e.dataset.symbol
                    })
                }
                _getThContent(e, t) {
                    t || (t = u.fields[e]);
                    const i = je(e, t) ? fs(`<div class="tv-screener-table__head-wrap js-head-wrap apply-common-tooltip common-tooltip-fixed" title="${t.title}" data-field="${e}">`) : fs(`<div class="tv-screener-table__head-wrap js-head-wrap" data-field="${e}">`);
                    t.disableHeaderControl && i.addClass("tv-screener-table__head-wrap--disable-interaction");
                    const o = fs('<div class="tv-screener-table__head-left js-head-left"></div>').appendTo(i),
                        r = fs('<div class="tv-screener-table__head-left--text"></div>').appendTo(o),
                        n = fs(`<div class="js-head-title">${t.shortTitle||t.title}</div>`).appendTo(r);
                    e === this._model.searchField && o.addClass(!u.fields.description.disabled && u.fields.description.checked ? "tv-screener-table__head-left--name-col" : this._onWidget ? "tv-screener-table__head-left--widget-name-col-without-description" : "tv-screener-table__head-left--name-col-without-description");
                    const l = fs(`<span class="tv-screener-table__sort js-table-sort ${this._model._sortField.value()===e?`tv-screener-table__sort--${this._model._sortDirection.value()}`:""}">${"asc"===this._model._sortDirection.value()?$s:xs}</span>`);
                    if (e === this._model.searchField) {
                        let e;
                        e = this._totalCount ? this._bridge.hide_load_more && this._bridge.page_size && this._totalCount >= this._bridge.page_size ? h.t(null, {
                            plural: "{number} matches",
                            count: this._bridge.page_size
                        }, s(462103)).format({
                            number: this._bridge.page_size
                        }) : h.t(null, {
                            plural: "{number} matches",
                            count: this._totalCount
                        }, s(462103)).format({
                            number: this._totalCount
                        }) : h.t(null, void 0, s(566724)), fs(`<div class="js-field-total tv-screener-table__field-value--total">${e}</div>`).appendTo(o), this._onWidget || fs(Ms).appendTo(o)
                    }
                    let a = !1;
                    if (t.control && !this._bridge.hide_controls) {
                        const t = fs(`<i data-field="${e}" class="js-filter-button tv-screener-table__filter-button">${s(630001)}</i>`);
                        t.appendTo(i);
                        if (this.fieldValueString(e)) {
                            t.addClass("tv-screener-table__filter-button--active");
                            const s = fs(`<span class="js-field-value tv-screener-table__field-value apply-overflow-tooltip${"name"===e?" tv-screener-table__field-value--name":""}">${this.fieldValueString(e)}</span>`);
                            o.append(s), a = !0
                        }
                    }
                    return l.appendTo(i), n.addClass(a ? "tv-screener-table__head-left--title-two-lines" : "tv-screener-table__head-left--title-three-lines"), i
                }
                _updateTableSortField() {
                    const e = this._model._sortField.value(),
                        t = this._model._sortDirection.value();
                    this._table.updateSortField(e, t)
                }
                setFieldActive(e, t, s) {
                    this._dialog.$filtersPopup && (s || (s = this._dialog.$filtersPopup.find(`.js-filter-field-${e.replace(/\W/g,"")}`)), s && s.size() && s.toggleClass("tv-screener-dialog__filter-field--active", t))
                }
                _resetSearchCount() {
                    const e = this._getThContent(this._model.searchField).find(".js-field-total").text();
                    this._table.setSearchText(e)
                }
                _resetField(e) {
                    this.setFieldActive(e, this._model.fieldActive(e));
                    const t = this._getThContent(e);
                    if ("name" === e && this._lifecycle.beforeAppendSymbolsHeader(t.get(0)), this._table.setThContent(e, t), !this._dialog.$filtersPopup && this.$inplaceEditor && e === this._inplaceEditorField) {
                        const t = !this._isFilterValueEmpty(e),
                            s = this.$inplaceEditor.find(".js-reset"),
                            i = this.$inplaceEditor.find(".js-wrap");
                        t ? (s.removeClass("i-hidden"), i.removeClass("tv-screener-inplace-editor__filter-without-reset"), this.$inplaceEditor.removeClass("tv-screener-inplace-editor__without-reset")) : (s.addClass("i-hidden"), i.addClass("tv-screener-inplace-editor__filter-without-reset"), this.$inplaceEditor.addClass("tv-screener-inplace-editor__without-reset"))
                    }
                }
                _setupStickyHeader() {
                    if (this._disableStickyHeader) return;
                    const e = this._table.$stickyHeader;
                    e.insertBefore(this.$content);
                    const t = fs('<span class="tv-screener-sticky-header-wrapper__right-substrate"></span>').prependTo(this.$content);
                    let i = Math.round(this.$toolbar.outerHeight());
                    if (this._bridge.width && this._bridge.width.subscribe((() => this.onResizeToolbar())), this._bridge.visible && this._bridge.visible.subscribe((() => this.onResizeToolbar())), (0, Ne.isMarketPage)(this._bridge)) Ke(this);
                    else if (this._bridge.standalone) {
                        const s = 148;
                        let o;
                        this.$toolbar.toggleClass("tv-screener-toolbar--standalone_sticky", !0).css({
                            top: s
                        }), this._bridge.$body.css({
                            "padding-top": i
                        }), e.css({
                            top: i
                        });
                        const r = (o, r) => {
                                r || (r = fs(document).scrollTop()), this._bridge.$body.css({
                                    "padding-top": i
                                }), this.$toolbar.css({
                                    top: o ? 0 : s - r
                                }), e.css({
                                    top: i
                                }), t.css({
                                    top: o ? i : 0
                                })
                            },
                            n = e => fs(document).scrollTop() - (this.$content.offset().top - e) > 0;
                        fs(document).on("scroll", (() => {
                            i = Math.round(this.$toolbar.outerHeight());
                            const s = fs(document).scrollTop(),
                                l = fs(document).scrollLeft();
                            let a;
                            this._onWidget || (a = n(i), r(a, s), this._$mainContainer.css("top", -s)), e.toggleClass("tv-screener-sticky-header-wrapper--standalone_sticky", a);
                            const d = (0, C.isRtl)() ? document.body.clientWidth - this.$content[0].getBoundingClientRect().right : -l;
                            e.css({
                                [(0, C.isRtl)() ? "right" : "left"]: a ? d : "auto"
                            }), t.toggleClass("tv-screener-sticky-header-wrapper__right-substrate--standalone_sticky", a), o !== a && this.updateToolbarButtons(), o = a, this.$bottomLoadingScreen.css({
                                left: l
                            })
                        })), fs(window).on("resize", (() => {
                            this.fixStandaloneWidth(), i = Math.round(this.$toolbar.outerHeight());
                            const e = n(i);
                            r(e), this.onResizeToolbar()
                        })), this.fixStandaloneWidth(), this._table.afterFixCols.subscribe(null, (() => {
                            this.fixStandaloneHorizontalScroll()
                        }))
                    } else {
                        this._bridge.$body.css({
                            overflow: "hidden"
                        });
                        let s = !1,
                            i = !1;
                        this.onResizeToolbar();
                        const o = () => {
                            const s = Math.round(e.outerHeight());
                            t.css({
                                top: -s
                            }), this.$content.css({
                                top: s
                            }), this._table.$element.css({
                                top: -s,
                                position: "relative"
                            })
                        };
                        (TradingView.onChartPage || this._onWidget) && o(), this.$content.on("scroll", (() => {
                            (0, le.hide)(), ae.PopupColorSelector.hide(), (0, C.isRtl)() ? e.css("right", -(this.$content[0].scrollWidth - this.$content[0].clientWidth - (0, C.getLTRScrollLeft)(this.$content[0]))) : e.css("left", -this.$content.scrollLeft()), this._onWidget && this._bridge.hide_controls && e.css({
                                top: 0
                            })
                        })), TradingView.onChartPage && fs(document).on("scroll", (() => {
                            window.innerWidth <= a.breakpoints.tablet && (s = this.$content.get(0).getBoundingClientRect().top < 0), e.toggleClass("tv-screener-sticky-header-wrapper--standalone_sticky", s), i !== s && e.css({
                                left: s ? -this.$content.scrollLeft() : 0
                            }), i = s
                        }))
                    }
                    this._bridge.hide_controls || (this.$headerFieldsButton = fs(`<div class="tv-screener-sticky-header-wrapper__fields-button apply-common-tooltip common-tooltip-vertical common-tooltip-otl" title="${h.t(null,void 0,s(398065))}">\n\t\t\t\t${s(407499)}\n\t\t\t</div>`).appendTo(e), this.$headerFieldsButton.attr({
                        "data-name": "header_fields-button"
                    }), this._popups.setFieldsPopup(this.$headerFieldsButton, "tv-screener-sticky-header-wrapper__fields-button-wrap", "tv-dropdown__body--position_right")), this._model.loadingComplete.subscribe(null, (() => {
                        t.show()
                    }), !0)
                }
                _showSpinner(e = this.$loadingScreen) {
                    e.removeClass("js-hidden"), clearTimeout(this._spinnerTimeoutId), this._spinner || (this._spinnerTimeoutId = setTimeout((() => {
                        this._spinner = (new se.Spinner).spin(e.get(0))
                    }), 100))
                }
                _hideSpinner() {
                    this.$loadingScreen.addClass("js-hidden"), this.$bottomLoadingScreen.addClass("js-hidden"), clearTimeout(this._spinnerTimeoutId), this._spinner && (this._spinner.stop(), delete this._spinner)
                }
                _getResizerBridgeWidth() {
                    return window.widgetbar ? (0, Re.getWidgetBarPadding)(window.widgetbar.resizerBridge.width.value()) : 0
                }
                fixStandaloneWidth() {
                    if (this._bridge.standalone) {
                        this._bridge.$body.css({
                            "padding-right": "",
                            "padding-left": ""
                        });
                        const e = this._getResizerBridgeWidth(),
                            t = (0, C.isRtl)() ? "padding-left" : "padding-right";
                        this.$toolbar.width(fs(window).width() - e), this._$mainHeader.css({
                            [t]: e
                        }), this.updateToolbarButtons(), this._table && this._table._$emptyMessage && !(0, Ne.isMarketPage)(this._model._bridge) && this._table._$emptyMessage.css({
                            width: `calc(100% - ${e}px`
                        }), this.widthChange.fire()
                    }
                }
                fixStandaloneHorizontalScroll() {
                    if (this._bridge.standalone) {
                        const e = this._getResizerBridgeWidth(),
                            t = this._table.$element.width() + ((0, C.isRtl)() ? 0 : e),
                            s = fs(window).width() < t,
                            i = (0, C.isRtl)() ? "padding-left" : "padding-right";
                        this._bridge.$body.css({
                            [i]: s ? t : ""
                        }), this.$toolbar.width(fs(window).width() - e), this.updateToolbarButtons()
                    }
                }
                prepareLayout() {
                    this._bridge.$body.addClass("tv-screener" + (this._bridge.standalone ? " tv-screener--standalone" : "")), this.$loadingScreen = fs(`<div class="tv-screener__loading-screen${this._bridge.standalone&&!this._bridge.table_loading_screen?" tv-screener__loading-screen--standalone":""}">`).appendTo(this._bridge.$body),
                        this.$toolbar = fs(`<div class="tv-screener-toolbar${this._bridge.standalone?" tv-screener-toolbar--standalone":""} ${this._disableStickyHeader?"tv-screener-toolbar--markets":""}">`).appendTo(this._bridge.$body), this.$toolbar.on("contextmenu", (function(e) {
                            e.preventDefault()
                        })), fs(".tv-screener__content-pane").remove(), this.$content = fs('<div class="tv-screener__content-pane" tabindex="100">').data({
                            localScroll: !this._bridge.standalone
                        }).appendTo(this._bridge.$body), this.$content.on("contextmenu", (function(e) {
                            e.target.classList.contains("tv-screener__content-pane") && e.preventDefault()
                        })), this.$bottomLoadingScreen = fs('<div class="tv-screener__bottom-loading-screen">').appendTo(this._bridge.$body), this._$mainContainer = fs(".tv-screener__standalone-main-container"), this._$mainHeader = this._$mainContainer.find(".tv-header"), this._onWidget || (this.$refreshButton = fs(`<div class="tv-screener-toolbar__button tv-screener-toolbar__button--with-options tv-screener-toolbar__button--refresh apply-common-tooltip common-tooltip-fixed" title="${h.t(null,void 0,s(857500))}"></div>`).attr({
                            "data-name": "screener-refresh",
                            "data-role": "button"
                        }).append(fs(s(820713)).attr({
                            class: "tv-screener-toolbar__button-icon tv-screener-toolbar__button-icon--standalone-refresh",
                            width: "18",
                            height: "18"
                        })).appendTo(this.$toolbar), this.$refreshCounter = fs('<span class="tv-screener-toolbar__refresh-counter">').text("00:00").appendTo(this.$refreshButton), this.$refreshIntervalButton = fs(`<div class="tv-screener-toolbar__button tv-screener-toolbar__button--options tv-screener-toolbar__button--space_right apply-common-tooltip common-tooltip-fixed" title="${h.t(null,void 0,s(70322))}"></div>`).attr({
                            "data-name": "screener-refresh-interval",
                            "data-role": "button"
                        }).append(fs(s(407499)).attr({
                            width: 3,
                            height: 13,
                            class: "tv-screener-toolbar__button-icon",
                            style: "top: -1px"
                        })).appendTo(this.$toolbar));
                    const e = this._model.currentFieldSetId(),
                        t = this._model.getFieldSetById(e);
                    this.$fieldSetsButton = fs(`<div class="tv-screener-toolbar__button tv-screener-toolbar__button--animated\n\t\t\ttv-screener-toolbar__button--with-options tv-screener-toolbar__button--arrow-down\n\t\t\ttv-screener-toolbar__button--with-state apply-common-tooltip common-tooltip-fixed js-field-sets" title=" ${h.t(null,void 0,s(523493))}">\n\t\t\t\t${t?t.title:""}\n\t\t\t</div>`).attr({
                        "data-name": "screener-field-sets",
                        "data-role": "button",
                        "data-field-set": e
                    }).appendTo(this.$toolbar), this.$fieldsButton = fs(`<div class="tv-screener-toolbar__button tv-screener-toolbar__button--options\n\t\t\ttv-screener-toolbar__button--square apply-common-tooltip common-tooltip-fixed\n\t\t\ttv-screener-toolbar__button--space_right" title=" ${h.t(null,void 0,s(398065))}">`).attr({
                        "data-name": "screener-fields",
                        "data-role": "button"
                    }).append(fs(s(944499)).attr({
                        class: "tv-screener-toolbar__button-icon"
                    })).appendTo(this.$toolbar), this.$favoritesBar = fs('<div class="tv-screener-toolbar__favorites">').appendTo(this.$toolbar), this.$periodPicker = fs('<div class="tv-screener-toolbar__period-picker">').appendTo(this.$toolbar);
                    const i = Ts[this._model.screener_type];
                    i && (this._createSwitch(i), this.$toolbar.addClass("tv-screener-toolbar--one-line"));
                    const o = this._model.currentFilterSetId(),
                        r = this._model.getFilterSetById(o);
                    this.$filterSetsButton = fs(`<div class="tv-screener-toolbar__button tv-screener-toolbar__button--with-options\n\t\t\ttv-screener-toolbar__button--arrow-down tv-screener-toolbar__button--with-state\n\t\t\tapply-common-tooltip common-tooltip-fixed js-filter-sets" title="${h.t(null,void 0,s(295117))}">`).attr({
                        "data-name": "screener-filter-sets",
                        "data-role": "button",
                        "data-filter-set": o
                    }).appendTo(this.$toolbar), this.$filterSetsButtonTitle = fs(`<span>${r?r.title:""}</span>`).appendTo(this.$filterSetsButton), this.$filtersButton = fs(`<div class="tv-screener-toolbar__button tv-screener-toolbar__button--options tv-screener-toolbar__button--filters apply-common-tooltip i-disabled common-tooltip-fixed" title="${h.t(null,void 0,s(455015))}">${h.t(null,void 0,s(12100))}</div>`).attr({
                        "data-name": "screener-filter",
                        "data-role": "button"
                    }).append(fs(s(630001)).attr({
                        class: "tv-screener-toolbar__button-icon tv-screener-toolbar__button-icon--filters"
                    })).appendTo(this.$toolbar), this._model.loadingComplete.subscribe(null, (() => {
                        this.$filtersButton.removeClass("i-disabled")
                    }), !0);
                    const n = fs('<div class="tv-screener-toolbar__filter-count-wrap">').on("click", (() => {
                        this.showActiveFilters(), (0, k.sendSnowPlowData)(new H("filter_counter_button", this._getFiltersCounterValue()))
                    })).appendTo(this.$toolbar);
                    if (this.$filterCount = fs(`<span class="tv-screener-toolbar__filter-count js-hidden apply-common-tooltip common-tooltip-vertical common-tooltip-otl" title="${h.t(null,void 0,s(652389))}">`).attr({
                            "data-name": "screener-filter-count",
                            "data-role": "button"
                        }).appendTo(n), this._table.$element.appendTo(this.$content), this.initHandlers(), this._bridge.selection_disabled || this._initSelectableList(), this._onWidget && this._bridge.hide_controls && (this._contentPadding = this.$content.innerHeight() - this.$content.height(), this.$content.css("height", `calc(100% - ${this._contentPadding}px)`), this.$toolbar.hide()), this._bridge.hide_controls)[this.$refreshButton, this.$refreshIntervalButton, this.$fieldSetsButton, this.$fieldsButton, this.$filterSetsButton, this.$filtersButton, this.$filterCount].forEach((e => {
                        e && e.hide()
                    })), this._onWidget && (this._bridge.$body.addClass("tv-screener--hidden-toolbar"), this.$loadingScreen.addClass("tv-screener__loading-screen--hidden-toolbar"));
                    else {
                        this._onWidget || (this._$selectIntervalButton = this.addIntervalSelect({
                                $before: this.$filterSetsButton
                            }).attr({
                                "data-name": "screener-time-interval",
                                "data-role": "button"
                            }), this._$downloadButton = fs(`<div class="tv-screener-toolbar__button tv-screener-toolbar__button--space_right tv-screener-toolbar__button--export apply-common-tooltip common-tooltip-fixed i-disabled" title="${h.t(null,void 0,s(410971))}"></div>`).attr({
                                "data-name": "screener-export-data",
                                "data-role": "button"
                            }).append(fs(s(764162)).attr({
                                class: "tv-screener-toolbar__button-icon tv-screener-toolbar__button-icon--export"
                            })),
                            this._$downloadButton.insertBefore(this._$selectIntervalButton), this._$downloadButton.on("click", (e => {
                                (0, c.runOrGoPro)((() => {
                                    this._$downloadButton.toggleClass("i-loading", !0), this._model.getDownloadData().then((e => {
                                        const [t, ...s] = this._table.columnsOrder, i = [t, "description", ...s];
                                        try {
                                            const t = function(e, t, s, i) {
                                                    const o = new Map,
                                                        r = [];
                                                    for (const e of t) r.push(u.fields[e].title), o.set(e, xe(s, e));
                                                    const n = [r];
                                                    for (const t of e) {
                                                        const e = [];
                                                        for (const [r, n] of Array.from(o.entries())) {
                                                            const o = u.fields[r],
                                                                l = t.d[n];
                                                            if (null === l) e.push("");
                                                            else if (Ce.includes(r)) e.push((0, R.triesTranslateScreenerData)(l));
                                                            else if ("earnings_release_date" === r || "earnings_release_next_date" === r) {
                                                                const t = (0, u.getFieldFormatter)(o, i, !1);
                                                                e.push(t.format(l))
                                                            } else if (o.signalComputation) $e.includes(r) ? e.push(o.signalComputation(l).title) : e.push(l.toString());
                                                            else {
                                                                const i = o.additionalColumns ? o.additionalColumns.map((e => t.d[xe(s, e)])) : [];
                                                                if (o.mutateDisplayValue && !ke.includes(r)) e.push(o.mutateDisplayValue(l, ...i, r));
                                                                else if ("candlestick" === r && o.additionalColumns) {
                                                                    const {
                                                                        additionalColumns: t
                                                                    } = o, s = Fe(i);
                                                                    if (0 === s.length) e.push("");
                                                                    else {
                                                                        const i = s.map((e => t[e])).map(Te).filter(Boolean).map((e => e.name)).join(", ");
                                                                        e.push(i)
                                                                    }
                                                                } else e.push(l.toString())
                                                            }
                                                        }
                                                        n.push(e)
                                                    }
                                                    return n
                                                }(e.data, i, this._model.getRequestColumns(), this._model.screener_type),
                                                s = t.map(Ie).join("\r\n"),
                                                o = Ae.dateFormatFunctions["yyyy-MM-dd"](new Date, !0),
                                                r = `${this._model.markets.join("_")}_${o}.csv`;
                                            (0, re.saveTextFile)(r, s, "text/csv")
                                        } catch (e) {
                                            bs.logError(e.toString())
                                        }
                                        this._$downloadButton.toggleClass("i-loading", !1), this._model.trackEvent("Export screener data")
                                    }))
                                }), w.ProductFeatures.SCREENER_EXPORT_DATA, {
                                    feature: "screenerExportData"
                                }), (0, k.sendSnowPlowData)(new Be)
                            })), this._model.loadingComplete.subscribe(null, (() => {
                                this._$downloadButton.removeClass("i-disabled")
                            }), !0));
                        const e = this.addMarketSelect({
                                $before: this.$filterSetsButton
                            }),
                            t = fs('<div class="tv-screener-toolbar__market-count-wrap">').on("click", (() => {
                                this._showMarketsDialog()
                            }));
                        this.$marketCount = fs(`<span class="tv-screener-toolbar__filter-count tv-screener-toolbar__filter-count--market-count js-hidden apply-common-tooltip common-tooltip-vertical common-tooltip-otl" title="${h.t(null,void 0,s(57312))}">`).attr({
                            "data-name": "screener-market-count",
                            "data-role": "button"
                        }).appendTo(t), fs(e).after(t), this._$groupSelectButton = this.addGroupSelect({
                            $before: this.$filterSetsButton
                        }), this._popups.setFieldsPopup(this.$fieldsButton, "tv-screener-toolbar__button-wrap"), this._popups.setFieldSetsPopup(this.$fieldSetsButton), this._popups.setFilterSetsPopup(this.$filterSetsButton, !this._bridge.onWidget), this._onWidget || this._popups.setRefreshIntervalsPopup(this.$refreshIntervalButton)
                    }(0, te.setCurrentTimezone)(this._model.timezone), this._periodPicker ? ((0, u.applyEarningsCalendarToFields)(), this._selectedPeriodId = "today", this._setNewEarningsPeriod(this._selectedPeriodId), this.updatePeriodPicker(), this.$favoritesBar.hide(), u.fields.earnings_release_next_date.onFilterChange = e => {
                        const t = this._periodPickerButtons.find((t => t.title === e));
                        this.changeEarningsPeriod(t ? t.id : "", !0)
                    }) : this.$periodPicker.hide(), this._showSpinner(), this.updateToolbarButtons(), this.onResizeToolbar()
                }
                onResizeToolbar() {
                    if (this._disableStickyHeader) return;
                    if (this._table.$stickyHeader.position().top < 0) return;
                    const e = Math.round(this.$toolbar.outerHeight());
                    (0, Ne.isExternalWidget)(this._bridge) && this._bridge.hide_controls ? this._table.$stickyHeader.css({
                        top: 0
                    }) : this._table.$stickyHeader.css({
                        top: e
                    })
                }
                showMaintenance() {
                    this._bridge.$body.html(`<div class="tv-screener__maintenance">${h.t(null,void 0,s(177513))}</div>`)
                }
                createAlertButtons() {}
                setAlertButtonsDisabledState(e) {}
                setCreateAlertButtonLoading() {}
                setAlertButtonState(e) {}
                initHandlers() {
                    this.$toolbar.on("hover", this.adjustToolbarWidth.bind(this)), this.$fieldSetsButton.on("transitionend", this.updateToolbarButtons.bind(this));
                    const e = e => {
                        const t = e.data("field");
                        if (!1 === u.fields[t].sortableColumn) return;
                        const s = this._model._sortField.value(),
                            i = this._model._sortDirection.value();
                        u.fields[t].disableHeaderControl || (s === t && this._model._sortDirection.setValue("asc" === i ? "desc" : "asc"), this._model._sortField.setValue(t), this._model.update())
                    };
                    if (Xe.mobiletouch) {
                        (new ce.HammerJSLoader).load().then((t => {
                            const s = new t(fs(".tv-screener")[0], {
                                touchAction: "auto"
                            });
                            s.get("press").set({
                                time: 500
                            }), s.on("press", (e => {
                                const t = fs(e.target).closest(".js-head-wrap");
                                if (t.length) {
                                    os({
                                        view: this,
                                        fieldKey: fs(t).data("field"),
                                        e: e.srcEvent
                                    })
                                }
                                e.preventDefault()
                            })), s.on("tap", (t => {
                                if (fs(t.target).closest(".js-search-input").length) return;
                                const s = fs(t.target).closest(".js-head-wrap");
                                s.length && e(s)
                            }))
                        }))
                    } else fs(".tv-screener").on("click", ".js-head-wrap", (t => {
                        const s = fs(t.currentTarget);
                        e(s), t.stopPropagation()
                    })).on("contextmenu", ".js-head-wrap", (e => {
                        os({
                            view: this,
                            fieldKey: fs(e.currentTarget).data("field"),
                            e
                        }), e.preventDefault()
                    })), fs(".tv-screener").on("click", ".js-filter-button", (e => {
                        const t = fs(e.currentTarget).closest("th"),
                            s = t.data("field");
                        this.showInplaceEditor(s, t), e.stopPropagation()
                    }));
                    fs(".tv-screener").on("click", ".js-search-input", (e => {
                        e.stopPropagation()
                    })), fs(".tv-screener").on("click", ".js-input-reset", (e => {
                        fs(e.currentTarget).addClass("i-hidden"), fs(".tv-screener").find(".js-search-input").val(""), u.fields[this._model.searchField].searchValue = "", this._model.update(), e.stopPropagation()
                    })), fs(".tv-screener").on("click", ".js-filter-button", (e => {
                        const t = fs(e.currentTarget).closest("th"),
                            s = t.data("field");
                        this.showInplaceEditor(s, t), e.stopPropagation()
                    })), this._bridge.table_context_menu_disabled || this._initTableContextMenu(), this.$content.on("scrolltoend", (e => {
                        this._model.loading || this._model.update(null, !0)
                    })), this.$refreshButton && this.$refreshButton.click((e => {
                        (0, Ee.runOrSignIn)((() => {
                            this._model.loading || this.refresh(), (0, k.sendSnowPlowData)(new B)
                        }), {
                            source: "Screener refresh button"
                        })
                    })), this.$filtersButton.click((() => {
                        this._dialog.showFiltersDialog(), (0, k.sendSnowPlowData)(new H("filter_button", this._getFiltersCounterValue()))
                    })), ms.proSymbol.subscribe((e => {
                        const t = this.$content.find(`[data-symbol="${e}"]`).get(0);
                        this._setActiveElem(t),
                            this._selectableList && (t ? this._selectableList.focusItem(t) : this._selectableList.clear())
                    })), this.$fieldSetsButton.on("click", (() => {
                        this._lastSetId = null
                    })), this.$toolbar.on("click", ".js-favorite-item", (e => {
                        const t = fs(e.currentTarget).attr("data-set");
                        this._lastSetId !== t && (this._model.preventPrevScanRequest(), this.updateSetId(t, !1, this._bridge.hide_controls)), (0, k.sendSnowPlowData)(new x("columnset_favorites_picker", t))
                    })), this.$toolbar.on("click", ".js-period-picker-item", (e => {
                        const t = fs(e.currentTarget).attr("data-period");
                        this.changeEarningsPeriod(t)
                    })), fs(window).resize((e => this.updateToolbarButtons())), this._bridge.width && this._bridge.width.subscribe((() => this.updateToolbarButtons())), this._bridge.visible && this._bridge.visible.subscribe((e => {
                        e && (this.updateToolbarButtons(), this.adjustToolbarWidth())
                    })), this.updateFavoritesToolbar()
                }
                _initTableContextMenu() {
                    this.$content.on("contextmenu", ".tv-screener-table__result-row", (e => {
                        const t = fs(e.currentTarget).data("symbol");
                        this._selectableList && this._selectableList.focusItem(e.currentTarget),
                            function(e) {
                                const t = (0, Ze.ticker)(e.symbol);
                                tt({ ...e,
                                    shortName: t
                                }, dt, Ye.Table)
                            }({
                                view: this,
                                symbol: t,
                                e
                            }), e.preventDefault()
                    }))
                }
                _onSymbolsNavigate(e) {
                    const t = e.cursor;
                    if (t) {
                        if (TradingView.onChartPage && this._setActiveElem(t), ["sector", "industry"].includes(this._model.screener_type)) return;
                        const e = t.dataset.symbol;
                        this._changeSymbol(e)
                    }
                }
                _changeSymbol(e) {
                    const t = ms.preventFeedBySymbol;
                    ms.setPreventFeedBySymbol(!0), ms.symbol.setValue(e), ms.setPreventFeedBySymbol(t), this._model.trackEvent("Change symbol from table")
                }
                _setActiveElem(e) {
                    this._activeElem && this._activeElem.classList.remove("tv-screener-table__result-row--active"), e ? (e.classList.add("tv-screener-table__result-row--active"), this._activeElem = e) : this._activeElem = null
                }
                _onSymbolConfirm(e) {
                    e.items.forEach((t => {
                        const s = t.dataset.symbol;
                        s && this._lifecycle.afterSymbolConfirm(s, e.action)
                    }))
                }
                changeEarningsPeriod(e, t = !1) {
                    if (this._selectedPeriodId === e) return;
                    this._selectedPeriodId = e, this.updatePeriodPicker(), this._model.applyFieldSetContent(ee.earningsCalendarFieldSets);
                    "tomorrow" === e || "next_week" === e ? (0, u.applyEarningsCalendarNextReleaseDate)() : (0, u.applyEarningsCalendarReleaseDate)(), t || this._setNewEarningsPeriod(e, (() => {
                        this._resetField("earnings_release_next_date"), this._model.preventPrevScanRequest(), this._model.update()
                    }))
                }
                _setNewEarningsPeriod(e, t = (() => {})) {
                    const s = u.fields.earnings_release_next_date.sourceRange.find((t => t.key === e));
                    s && (u.fields.earnings_release_next_date.value = s.name, t())
                }
                get totalCount() {
                    return this._totalCount
                }
                get itemsCount() {
                    return this._itemsCount
                }
                set itemsCount(e) {
                    this._itemsCount = +e
                }
                set lastSetId(e) {
                    this._lastSetId = e
                }
                get popups() {
                    return this._popups
                }
                isEndReached() {
                    return 0 === this._data.length || "number" == typeof this._totalCount && this._data.length >= this._totalCount
                }
                display(e, t, s) {
                    if (this._hideSpinner(), this._setFiltersCount(), this._setMarketsCount(), this.$filterSetsButton.toggleClass("tv-screener-toolbar__button--unsaved", this._model.isFilterSetChanged()), !e || e.error || !e.data && !e.symbols) "abort" !== s && (this.resetItems(), this._table.setColumnsMap(t), this._table.update([]), this._resetField("name"), "error" === s ? bs.logError(e.responseText || s) : e && e.error && bs.logError(e.error));
                    else {
                        let s = e.data || e.symbols;
                        for (let e = 0; e < s.length; ++e) s[e].f && (s[e].d = s[e].f);
                        if (void 0 === this._totalCount) this._bridge.table_style || this.fixStandaloneWidth(), this._table.setColumnsMap(t), this._table.update(s), this._data = s;
                        else {
                            const e = this._getInvalidatedFrom(s);
                            0 === e ? (this._data = s, this._table.setColumnsMap(t), this._table.update(s)) : (e > 0 ? (s = s.slice(e), this._data = this._data.slice(0, e), this._table.clearData(e)) : s = s.slice(this._data.length), this._data = this._data.concat(s), this._table.setColumnsMap(t), this._table.append(s))
                        }
                        setTimeout((() => this.highlightChanges()), 0), this._totalCount = e.totalCount, this._resetSearchCount(), this._model._initialSortField && (this._model._sortField.setValue(this._model._initialSortField, !0), this._model._sortDirection.setValue(this._model._initialSortDirection, !0), delete this._model._initialSortField, delete this._model._initialSortDirection)
                    }
                }
                _getInvalidatedFrom(e) {
                    for (let t = 0; t < this._data.length; ++t) {
                        if (!e[t] || this._data[t].s !== e[t].s || !e[t].d) return t;
                        for (let s = 0; s < this._data[t].d.length; ++s)
                            if (this._data[t].d[s] !== e[t].d[s]) return t
                    }
                    return -1
                }
                get table() {
                    return this._table
                }
                resetItems() {
                    delete this._totalCount, this._data = []
                }
                _getFiltersCounterValue() {
                    const e = this._model.currentFilterState();
                    return e.filters && Object.keys(e.filters).length || 0
                }
                _setFiltersCount() {
                    const e = this._getFiltersCounterValue();
                    this.$filterCount.text(`${e}`).toggleClass("js-hidden", !e)
                }
                _setMarketsCount() {
                    const e = this._model.markets.length;
                    this.$marketCount && this.$marketCount.text(`${e}`).toggleClass("js-hidden", 1 === e || this._model.isEntireWorld)
                }
                _concatFieldValues(e, t) {
                    var s = [];
                    return e.forEach((e => {
                        s.push(this._getFieldValueFromRangeTitles(e, t))
                    })), s.join(", ")
                }
                _getFieldValueFromRangeTitles(e, t, s = !1) {
                    return u.fields[t].rangeTitles && u.fields[t].rangeTitles[e] ? u.fields[t].rangeTitles[e][s ? 1 : 0] : "string" != typeof e ? "" : e
                }
                fieldValueString(e) {
                    const t = u.fields[e].value;
                    if ((0, u.isValueAbsent)(t) || !1 === t) return "";
                    if ("select" === u.fields[e].control) {
                        const i = h.t(null, {
                            plural: "{number} items",
                            count: t.length,
                            context: "combobox_input"
                        }, s(453508)).format({
                            number: t.length
                        });
                        return Array.isArray(t) ? `<span title="${this._concatFieldValues(t,e)}" class="apply-common-tooltip">${i}</span>` : this._getFieldValueFromRangeTitles(t, e, "dr" === t && "name" === e)
                    }
                    return "range" === u.fields[e].control ? Array.isArray(t) ? this._rangeLeftValue(e) + " – " + this._rangeRightValue(e) : "" : "toggle" === u.fields[e].control ? -1 !== e.toLowerCase().indexOf("high") ? h.t(null, void 0, s(59770)) : h.t(null, void 0, s(967532)) : "condition" !== u.fields[e].control || (0, u.isValueAbsent)(t.operator) || (0,
                        u.isValueAbsent)(t.value) ? "" : "in_range" === t.operator ? t.value[0] === t.value[1] ? ys.equal + " " + t.value[0] : -1e100 === t.value[0] || this._isLessThenMin(t.value[0], e) ? ys.less + " " + t.value[1] : 1e100 === t.value[1] || this._isGreaterThenMax(t.value[1], e) ? ys.greater + " " + t.value[0] : this._rangeLeftValue(e) + " – " + this._rangeRightValue(e) : "not_in_range" === t.operator ? t.value[0] === t.value[1] ? ys.nequal + " " + t.value[0] : -1e100 === t.value[0] || this._isLessThenMin(t.value[0], e) ? ys.greater + " " + t.value[1] : 1e100 === t.value[1] || this._isGreaterThenMax(t.value[1], e) ? ys.less + " " + t.value[0] : `${ys.not_in_range} ${this._rangeLeftValue(e)} – ${this._rangeRightValue(e)}` : ys[t.operator] + " " + ("number" == typeof t.value ? t.value : u.fields[t.value].title)
                }
                updateToolbarButtons() {
                    this._bridge.period_picker ? this.updatePeriodPicker() : this._bridge.originalStandalone && this.updateOldFavoritesToolbar()
                }
                updateOldFavoritesToolbar() {
                    this.$hiddenFavoritesButtonWrap && this.$hiddenFavoritesButtonWrap.hide(), this.$favoritesBar.find(".js-favorite-item").remove();
                    let e = 0;
                    this.hiddenFavorites = [];
                    const t = this.$favoritesBar.width(),
                        i = "forex" !== this._model.screener_type || this._bridge.hide_controls ? 40 : 160,
                        o = e => e === this._model.currentFieldSetId();
                    if (this._model.favoriteFieldSets) {
                        let s = null;
                        for (let r = 0; r < this._model.favoriteFieldSets.length; ++r) {
                            const n = this._model.favoriteFieldSets[r],
                                l = this._model.getFieldSetById(n);
                            if (!l) return;
                            const a = fs(`<div class="tv-screener-toolbar__favorites-item js-favorite-item" data-set="${l.id}">\n\t\t\t\t\t${(0,ie.htmlEscape)(l.title)}\n\t\t\t\t</div>`).toggleClass("tv-screener-toolbar__favorites-item--active", o(l.id));
                            s ? a.insertAfter(s) : a.prependTo(this.$favoritesBar);
                            let d = a.outerWidth();
                            a[0].scrollWidth > d && a.addClass("apply-common-tooltip").attr("title", l.title), d += 9, e += d, e + i > t ? (e -= d, a.remove(), this.hiddenFavorites.push({
                                id: l.id,
                                title: l.title
                            })) : s = a
                        }
                    }
                    if (this.hiddenFavorites.length) {
                        if (this.hiddenFavorites.length === this._model.favoriteFieldSets.length && this.$hiddenFavoritesButtonWrap) return void this.$hiddenFavoritesButtonWrap.hide();
                        if (this.$hiddenFavoritesButtonWrap) this.$hiddenFavoritesButtonWrap.trigger("resetContent").show();
                        else {
                            const e = fs(`<div class="tv-screener-toolbar__favorites-item tv-screener-toolbar__favorites-more apply-common-tooltip common-tooltip-fixed" title="${h.t(null,void 0,s(576956))}">`).appendTo(this.$favoritesBar);
                            this.$hiddenFavoritesButtonWrap = this._popups.setHiddenFavoritesPopup(e, (() => this.hiddenFavorites), o, (e => this.updateSetId(e, !1, this._bridge.hide_controls)))
                        }
                    }
                }
                updateSetId(e, t, s) {
                    this._lastSetId = e, this._model.applyFieldSet(e, t, s)
                }
                updateNewFavoritesToolbar() {
                    if (!this._model.favoriteFieldSets) return;
                    const e = {
                        items: this._model.favoriteFieldSets.map((e => ({
                            title: this._model.getFieldSetById(e).title
                        }))),
                        activeItem: this._model.favoriteFieldSets.indexOf(this._model.currentFieldSetId()),
                        onSelect: e => {
                            const t = this._model.favoriteFieldSets[e];
                            this._lastSetId !== t && (this._model.preventPrevScanRequest(), this.updateSetId(t, !1, this._bridge.hide_controls))
                        },
                        className: "tv-screener-toolbar__no-scroll-choicer-react-root",
                        selectedItemClassName: "tv-screener-toolbar__no-scroll-choicer-react-root-dropdown-item--selected"
                    };
                    Se(this.$favoritesBar.get(0), e)
                }
                updateFavoritesToolbar() {
                    this._onWidget || (this._bridge.originalStandalone ? this.updateOldFavoritesToolbar() : this.updateNewFavoritesToolbar())
                }
                updatePeriodPicker() {
                    const e = {
                        items: this._periodPickerButtons.map((e => ({
                            title: e.title
                        }))),
                        activeItem: this._periodPickerButtons.findIndex((e => e.id === this._selectedPeriodId)),
                        onSelect: e => {
                            const t = this._periodPickerButtons[e].id;
                            this.changeEarningsPeriod(t)
                        },
                        className: "tv-screener-toolbar__no-scroll-choicer-react-root",
                        selectedItemClassName: "tv-screener-toolbar__no-scroll-choicer-react-root-dropdown-item--selected"
                    };
                    Se(this.$periodPicker.get(0), e)
                }
                _getWatchlist() {
                    if (window.widgetbar) {
                        const t = window.widgetbar.setPage("base");
                        let s;
                        for (var e = 0; e < t.widgets.length; e++)
                            if ("watchlist" === t.widgets[e].type) {
                                s = t.widgets[e].widgetObject;
                                break
                            }
                        return s
                    }
                    return null
                }
                adjustToolbarWidth(e) {
                    const t = this.$fieldSetsButton[0].getBoundingClientRect();
                    if (e && "mouseenter" === e.type) this.$fieldSetsButton.css("width", t.width);
                    else {
                        this.$fieldSetsButton.css("width", "auto");
                        const e = this.$fieldSetsButton[0].getBoundingClientRect();
                        this.$fieldSetsButton.css("width", t.width), this.$fieldSetsButton[0].offsetWidth, this.$fieldSetsButton.css("width", e.width)
                    }
                }
                initFilterHandlers(e) {
                    const t = function() {
                            const e = {},
                                t = A.UserActionState.Type;
                            return (s, i, o, r) => {
                                let n = o;
                                e.hasOwnProperty(s) && (e[s].state === t && (n = t), clearTimeout(e[s].sender), o === A.UserActionState.Click && !1 === i) || (e[s] = {
                                    state: n,
                                    sender: setTimeout((() => (0, k.sendSnowPlowData)(new X(i.toString(), o, s, r))), 1e4)
                                })
                            }
                        }(),
                        s = (e, t) => t.reduce(((t, s) => (s === e && (s -= 1), t += Math.floor(s / e / (1 / 4)))), "");
                    e.off("change.op").on("change.op", "select.js-filter-operator", (s => {
                        const i = fs(s.target),
                            o = i.attr("name");
                        u.fields[o].value || (u.fields[o].value = {}), u.fields[o].value.operator = i.val(), this._resetField(o), this._model.update();
                        const {
                            operator: r
                        } = u.fields[o].value, n = e.hasClass("tv-screener-dialog__filter-field") ? "filter_dialog" : "columns";
                        t(o, r, A.UserActionState.Click, n)
                    })), e.off("change.op-val").on("change.op-val", "select.js-filter-operator-value", (s => {
                        const i = fs(s.target),
                            {
                                value: o
                            } = s.target,
                            r = i.attr("name");
                        u.fields[r].value || (u.fields[r].value = {}), u.fields[r].value.value = i.val(), this._resetField(r), this._model.update();
                        let {
                            operator: n
                        } = u.fields[r].value;
                        const l = e.hasClass("tv-screener-dialog__filter-field") ? "filter_dialog" : "columns";
                        "" !== o && (n += "." + o), t(r, n, A.UserActionState.Click, l)
                    })), e.off("update.op-arb-val").on("update.op-arb-val", "input.js-filter-operator-arb-value", (s => {
                        const i = fs(s.target),
                            o = i.attr("name");
                        u.fields[o].value || (u.fields[o].value = {});
                        let r = +i.val();
                        isFinite(r) && !(0, u.isValueAbsent)(i.val()) || (r = null), u.fields[o].value.value = r, this._resetField(o), this._model.update();
                        const {
                            operator: n
                        } = u.fields[o].value, l = e.hasClass("tv-screener-dialog__filter-field") ? "filter_dialog" : "columns";
                        t(o, n, A.UserActionState.Click, l)
                    }));
                    const i = e.find("input.js-filter-operator-between-left"),
                        o = e.find("input.js-filter-operator-between-right"),
                        r = e => {
                            const t = fs(e.target).attr("name");
                            u.fields[t].value || (u.fields[t].value = {});
                            let s = +i.val();
                            (!isFinite(s) || (0, u.isValueAbsent)(i.val()) || this._isLessThenMin(s, t) || this._isGreaterThenMax(s, t)) && (s = -1e100);
                            let r = +o.val();
                            if ((!isFinite(r) || (0, u.isValueAbsent)(o.val()) || this._isLessThenMin(r, t) || this._isGreaterThenMax(r, t)) && (r = 1e100), s > r) {
                                const e = s;
                                s = r, r = e
                            }
                            u.fields[t].value.value = [s, r], -1e100 === u.fields[t].value.value[0] && 1e100 === u.fields[t].value.value[1] && (u.fields[t].value.value = ""), this._resetField(t), this._model.update()
                        };
                    e.off("update.op-between-left-val").on("update.op-between-left-val", "input.js-filter-operator-between-left", r), e.off("update.op-between-right-val").on("update.op-between-right-val", "input.js-filter-operator-between-right", r), e.off("change.toggle-val").on("change.toggle-val", "input.js-filter-toggle", (s => {
                        const i = fs(s.target),
                            o = i.attr("name");
                        u.fields[o].value = i.prop("checked"), this._resetField(o), this._model.update();
                        const r = e.hasClass("tv-screener-dialog__filter-field") ? "filter_dialog" : "columns";
                        t(o, i.prop("checked"), A.UserActionState.Click, r)
                    })), e.off("click.reset").on("click.reset", ".js-reset", (e => {
                        const t = fs(e.currentTarget).data("field");
                        this.resetFilter(t)
                    }));
                    let n = "";
                    e.off("keydown.filterInput").on("keydown.filterInput", "input:not(.js-search-input):not(.js-filter-operator-arb-value)", (e => {
                        const t = fs(e.currentTarget);
                        n = t.val()
                    })), e.off("keyup.filterInput").on("keyup.filterInput", "input:not(.js-search-input):not(.js-filter-operator-arb-value)", (i => {
                        const o = fs(i.currentTarget),
                            r = o.data("field"),
                            l = o.data("bound");
                        if (void 0 === r || void 0 === l || n === o.val()) return;
                        const a = [this.parseRangeValue(r, o.val(), l), u.fields[r].value ? u.fields[r].value[1 - l] : u.fields[r].range[1 - l]].sort(this._model.numericSorter),
                            d = this.approximateSliderValues(r, a);
                        if (e.find(`.tv-slider[data-field="${r}"]`).slider("values", d), u.fields[r].value = a, this._resetField(r), this._model.update(), u.fields[r].values) {
                            const i = e.hasClass("tv-screener-dialog__filter-field") ? "filter_dialog" : "columns",
                                o = s(u.fields[r].values.length + 1, d);
                            t(r, o, A.UserActionState.Type, i)
                        }
                    }));
                    e.find(".tv-slider").off("slidechange").on("slidechange", ((e, t) => {
                        const s = fs(e.currentTarget).data("field");
                        u.fields[s].values ? 0 === t.values[0] && t.values[1] === u.fields[s].values.length + 1 ? u.fields[s].value = null : u.fields[s].value = [0 === t.values[0] ? -1e100 : parseInt(u.fields[s].values[t.values[0] - 1], 10), t.values[1] === u.fields[s].values.length + 1 ? 1e100 : parseInt(u.fields[s].values[t.values[1] - 1], 10)] : t.values[0] === u.fields[s].range[0] && t.values[1] === u.fields[s].range[1] ? u.fields[s].value = null : u.fields[s].value = t.values, this._resetField(s), this._model.update()
                    })).off("slide").on("slide", ((e, t) => {
                        const s = fs(e.currentTarget),
                            i = s.data("field");
                        let o = t.values[0],
                            r = t.values[1];
                        if (o === r) return !1;
                        u.fields[i].values && (o = 0 === t.values[0] ? this._rangeMinValue(i) : (0, u.getFieldFormatter)(u.fields[i], this._model.screener_type).format(u.fields[i].values[t.values[0] - 1]), r = t.values[1] === u.fields[i].values.length + 1 ? this._rangeMaxValue(i) : (0,
                            u.getFieldFormatter)(u.fields[i], this._model.screener_type).format(u.fields[i].values[t.values[1] - 1])), t.value === t.values[0] ? s.find(".tv-slider__label--left").val(o) : (t.value === t.values[1] || s.find(".tv-slider__label--left").val(o), s.find(".tv-slider__label--right").val(r))
                    })).on("slidechange", ((i, o) => {
                        const r = fs(i.currentTarget).data("field");
                        if (u.fields[r].values) {
                            const i = e.hasClass("tv-screener-dialog__filter-field") ? "filter_dialog" : "columns",
                                n = s(u.fields[r].values.length + 1, o.values);
                            t(r, n, A.UserActionState.Slide, i)
                        }
                    }))
                }
                parseRangeValue(e, t, s) {
                    if (-1 !== t.indexOf("<")) return u.fields[e].range[0];
                    if (-1 !== t.indexOf(">")) return u.fields[e].range[1];
                    t = t.replace(/%/g, "");
                    let i = (0, u.getFieldFormatter)(u.fields[e], this._model.screener_type).parse(t);
                    if (!i.res) return u.fields[e].range[s];
                    const o = i.value || 0 === i.value ? i.value : i.price;
                    return i = Math.min(u.fields[e].range[1], Math.max(u.fields[e].range[0], o)), i
                }
                approximateSliderValues(e, t) {
                    const s = [0, 0],
                        i = [].concat(-1e100, u.fields[e].values, 1e100);
                    for (let e = 0; e < 2; e++)
                        for (let o = 0; o < i.length; o++) Math.abs(t[e] - i[o]) < Math.abs(t[e] - i[s[e]]) && (s[e] = o);
                    return s
                }
                updateFilterSearch() {
                    const e = this._dialog.$fieldSearchInput.val().trim().replace(/^,\s*|\s*,$/, "").toLowerCase().split(/\s*,\s*/);
                    this._dialog.$filtersPopup.find(".js-filter-field").removeClass("js-found");
                    const t = this._dialog.$filtersPopup.find(".js-filters-wrap").get(0);
                    e.forEach((e => {
                        let s = !1;
                        for (const i in u.fields) {
                            const o = Array.from(t.querySelectorAll(`.js-filter-field-${i.replace(/\W/g,"")}:not(.js-found)`)),
                                r = (0, u.getFieldTitle)(u.fields[i]),
                                n = -1 !== i.toLowerCase().indexOf(e) || Boolean(r) && -1 !== r.toLowerCase().indexOf(e);
                            n && (s = !0), o.forEach((e => {
                                e.classList.toggle("js-hidden", !n), e.classList.toggle("js-found", n)
                            }))
                        }
                        s || 0 === e.length || (0, k.sendSnowPlowData)(new U(e))
                    }))
                }
                showActiveFilters() {
                    if (this._dialog.$filtersPopup) return;
                    const e = this._dialog._getActiveFilters();
                    this._dialog.showFiltersDialog(!0).then((() => {
                        this._dialog.$dialogContainer.find(".js-search-input").val(e.join(", ")), this.updateFilterSearch()
                    }))
                }
                resetAllFilters() {
                    this._resetAllFilters = !0;
                    for (const e in u.fields) this._isFilterValueEmpty(e) || this.resetFilter(e);
                    this._dialog.$dialogContainer.find(".js-search-input").val(""), this.updateFilterSearch(), this._resetAllFilters = !1
                }
                resetFilter(e) {
                    if (!u.fields[e].value || !1 === u.fields[e].resettableFilter) return;
                    u.fields[e].value = null;
                    const t = this._dialog.$filtersPopup || this.$inplaceEditor;
                    if (t)
                        if ("select" === u.fields[e].control) t.find(`.js-filter-field-${e.replace(/\W/g,"")}`).trigger("reset");
                        else if ("condition" === u.fields[e].control) t.find(`[name="${e}"]`).val("").trigger("change");
                    else if ("toggle" === u.fields[e].control) t.find(`[name="${e}"]`).prop("checked", !1);
                    else if ("range" === u.fields[e].control) {
                        let s = u.fields[e].range;
                        u.fields[e].values && (s = [0, u.fields[e].values.length + 1]), t.find(`.ui-slider[data-field="${e}"]`).slider("values", s).trigger("slide", {
                            values: s
                        })
                    }
                    this._resetField(e), this._model.update()
                }
                _rangeLeftValue(e) {
                    let t = u.fields[e].value;
                    return "in_range" !== t.operator && "not_in_range" !== t.operator || (t = t.value),
                        this._isLessThenMin(t[0], e) ? this._rangeMinValue(e) : (0, u.getFieldFormatter)(u.fields[e], this._model.screener_type).format(t[0])
                }
                _rangeRightValue(e) {
                    let t = u.fields[e].value;
                    return "in_range" !== t.operator && "not_in_range" !== t.operator || (t = t.value), this._isGreaterThenMax(t[1], e) ? this._rangeMaxValue(e) : (0, u.getFieldFormatter)(u.fields[e], this._model.screener_type).format(t[1])
                }
                _isGreaterThenMax(e, t) {
                    return u.fields[t].range && e >= u.fields[t].range[1]
                }
                _isLessThenMin(e, t) {
                    return u.fields[t].range && e <= u.fields[t].range[0]
                }
                _rangeMinValue(e) {
                    return "<" + (0, u.getFieldFormatter)(u.fields[e], this._model.screener_type).format(u.fields[e].values[0])
                }
                _rangeMaxValue(e) {
                    return ">" + (0, u.getFieldFormatter)(u.fields[e], this._model.screener_type).format(u.fields[e].values[u.fields[e].values.length - 1])
                }
                _highlightActiveItems(e) {
                    if (!e.find(".js-filter-checkbox:checked").size()) return e.find(".tv-control-select__option-wrap").removeClass("i-active"), void e.find(".js-item-wrap-any .tv-control-select__option-wrap").addClass("i-active");
                    e.find(".js-filter-checkbox:checked, .js-filter-checkbox-any:checked").each((function() {
                        e.find(".tv-control-select__option-wrap").removeClass("i-active"), fs(this).closest(".tv-control-select__option-wrap").addClass("i-active")
                    }))
                }
                _closeDropdown(e) {
                    e.tvDropdown("close"), this.$inplaceEditor && this.$inplaceEditor.focus()
                }
                _createMultiSelectItems(e, t, s, i, o) {
                    const r = (u.fields[e].useDefaultRange ? u.fields[e].defaultRange : u.fields[e].range).slice().sort(((t, s) => {
                        if (!1 !== u.fields[e].sortSelectedFirst) {
                            const i = u.fields[e].value === t || Array.isArray(u.fields[e].value) && ~u.fields[e].value.indexOf(t),
                                o = u.fields[e].value === s || Array.isArray(u.fields[e].value) && ~u.fields[e].value.indexOf(s);
                            if (i && !o) return -1;
                            if (o && !i) return 1
                        }
                        return !1 === u.fields[e].sortable ? 0 : t > s ? 1 : -1
                    }));
                    for (let n = null === s ? 0 : -1; n < r.length; ++n) {
                        let l = -1 === n ? ks : r[n];
                        const a = fs(`<input type="checkbox" name="${l}" class="js-filter-checkbox${-1===n?"-any":""}"${u.fields[e].value===l||Array.isArray(u.fields[e].value)&&~u.fields[e].value.indexOf(l)?"checked":""}>`); - 1 === n && (s = a), -1 === n && o && (l = o);
                        const d = u.fields[e].rangeTitles,
                            c = d && d[l] && d[l][2],
                            h = this._getFieldValueFromRangeTitles(l, e);
                        let p;
                        p = c && !0 === c.nowrap ? `<span class="tv-control-checkbox__label--nowrap">${h}</span>` : "country" === e ? (0, Me.triesTranslateCountrieName)(h) : (0, R.triesTranslateScreenerData)(h);
                        const _ = fs(`<div class="tv-dropdown-behavior__item js-item-wrap${-1===n?"-any":""}">`).appendTo(t);
                        fs(`<label data-field="${e}" class="tv-control-select__option-wrap ${i}__dropdown-checkbox-item">`).append(a).append(`<span class="tv-control-checkbox__label">${p}</span>`).appendTo(_), a.tvControlCheckbox()
                    }
                    return s
                }
                _createMultiSelectItemsElement(e, t, s, i, o = !1, r = (() => {}), n = !1, l) {
                    const a = {
                        changed: !1,
                        resetOptions: null
                    };
                    let d = fs(),
                        c = fs();
                    const h = "forex-group" === s.attr("data-select-name"),
                        p = s => {
                            const i = !t.find(".js-filter-checkbox:checked").size();
                            n ? d && d.prop("checked", !0) : c.prop("checked", i), o && this._highlightActiveItems(t), s || this._resetField(e), this._model.update(), a.changed = !s, r(t, i)
                        };
                    let _ = fs();
                    return a.resetOptions = s => {
                        t.empty(), c = this._createMultiSelectItems(e, t, n ? null : c, i, l), !0 !== s && (this._tryExecuteFilterChangeHandler(e), p(!0)), _ = fs()
                    }, a.resetOptions(), t.on("change", ".js-filter-checkbox", (i => {
                        const r = fs(i.target),
                            l = r.attr("name");
                        if (o && u.fields[e].value === l) return r.prop("checked", !0), void this._closeDropdown(s);
                        d = fs(), r.prop("checked") ? (u.fields[e].value ? o ? (t.find(".js-filter-checkbox").not(r).prop("checked", !1), u.fields[e].value = l) : (Array.isArray(u.fields[e].value) || (u.fields[e].value = [u.fields[e].value]), u.fields[e].value.push(l)) : u.fields[e].value = l, h && (0, k.sendSnowPlowData)(new De("added", l))) : (Array.isArray(u.fields[e].value) ? (u.fields[e].value.splice(u.fields[e].value.indexOf(l), 1), 1 === u.fields[e].value.length ? u.fields[e].value = u.fields[e].value[0] : u.fields[e].value.length || (n ? (d = r, u.fields[e].value = l) : u.fields[e].value = null)) : n ? (d = r, u.fields[e].value = l) : u.fields[e].value = null, h && (0, k.sendSnowPlowData)(new De("removed", l))), this._tryExecuteFilterChangeHandler(e), p(), o && this._closeDropdown(s)
                    })), n || t.on("click touchend", ".js-filter-checkbox-any", (i => {
                        const r = fs(i.target).attr("name");
                        i.preventDefault(), setTimeout((() => {
                            if (!u.fields[e].value) return c.prop("checked", !0), void this._closeDropdown(s);
                            c.prop("checked") ? (_.prop("checked", !0), u.fields[e].value = _.toArray().map((e => e.name)), u.fields[e].value.length ? 1 === u.fields[e].value.length && (u.fields[e].value = u.fields[e].value[0]) : u.fields[e].value = null) : (_ = t.find(".js-filter-checkbox:checked"), t.find(".js-filter-checkbox").prop("checked", !1), u.fields[e].value = null, h && (0, k.sendSnowPlowData)(new De("added", r))), this._tryExecuteFilterChangeHandler(e), p(), o && this._closeDropdown(s)
                        }), 0)
                    })), a
                }
                _tryExecuteFilterChangeHandler(e) {
                    u.fields[e].onFilterChange && u.fields[e].onFilterChange(u.fields[e].value)
                }
                _createMultiselectFilter(e, t, i, o, r = !1) {
                    const n = fs(`<div class="${o}__selectbox-container js-filter-field-${e.replace(/\W/g,"")} js-dropdown-toggle">`).appendTo(t),
                        l = fs(`<i class="${o}__selectbox-dropdown-toggle">`).append(fs(s(376844)).attr({
                            width: 12,
                            height: 7
                        })),
                        a = fs(`<span class="${o}__selectbox-caption ${o}__selectbox-caption--text-overflow">\n\t\t\t<span class="${o}__selectbox-caption-label js-label"></span>\n\t\t</span>`).append(l).appendTo(n),
                        d = a.find(".js-label"),
                        c = fs('<div class="tv-dropdown__body tv-dropdown-behavior__body">');
                    let p = fs();
                    if ((u.fields[e].useDefaultRange ? u.fields[e].defaultRange : u.fields[e].range).length >= 16) {
                        const e = fs(`<div class="${o}__search-wrap">`).appendTo(c);
                        p = fs(`<input type="text" placeholder="${h.t(null,void 0,s(252298))}" class="${o}__search-input">`).appendTo(e);
                        const t = fs(`<div class="tv-control-select__option-wrap ${o}__search-no-matches js-hidden">No matches</div>`).appendTo(c);
                        p.on("change input", (e => {
                            const s = p.val().trim().toLowerCase();
                            s ? g.find(".js-item-wrap").each((function() {
                                    const e = fs(this);
                                    e.toggleClass("js-hidden", !~e.text().toLowerCase().indexOf(s))
                                })) : g.find(".js-item-wrap").removeClass("js-hidden"), g.find(".js-item-wrap-any").toggleClass("js-hidden", !!g.find(".js-item-wrap.js-hidden").size()),
                                t.toggleClass("js-hidden", !!g.find(".js-item-wrap:not(.js-hidden)").size()), n.tvDropdown("updateScroll")
                        }))
                    }
                    const _ = fs('<div class="tv-dropdown-behavior__scroll">').appendTo(c),
                        g = fs('<div class="tv-screener-fields-popup__items-wrap tv-dropdown-behavior__inscroll">').appendTo(_),
                        f = this._createMultiSelectItemsElement(e, g, n, o, r, (() => {
                            d.empty(), g.find(".js-filter-checkbox:checked, .js-filter-checkbox-any:checked").each(((t, s) => {
                                d.append(fs('<span class="tv-screener-dialog__filter-field-content-value">').text(this._getFieldValueFromRangeTitles(fs(s).attr("name"), e)))
                            })), n.focus()
                        }), u.fields[e].noAny),
                        m = e => {
                            if (!0 !== e && !n.is(".i-opened")) return;
                            const t = n.closest(".i-scrollable");
                            if (t.size() && (n.offset().top + n.height() < t.offset().top || n.offset().top > t.offset().top + t.height())) return void n.tvDropdown("close");
                            const s = i.offset(),
                                o = n.offset();
                            let r = fs(window).height() - o.top + fs(window).scrollTop() - 35;
                            p.size() && (r -= 45);
                            const l = Math.max(i.height() - (o.top - s.top), 60);
                            if (_.css("maxHeight", Math.min(l, r)), this._setDropdownPosition(c, n, i), c.parent().is(i)) {
                                const e = n.tvDropdown("getInstance").scroll;
                                e.updateScrollBar(), e.updateScroll()
                            } else c.appendTo(i)
                        };
                    let v;
                    n.tvDropdown({
                        $wrap: a,
                        $body: c,
                        scroll: !0,
                        closeWithEsc: !0,
                        noAnimation: !0
                    }).on("resetPosition", m).on("beforeOpenMenu", (() => {
                        f.changed && (f.resetOptions(!0), f.changed = !1), m(!0), r && (g.find(".tv-control-checkbox__box, .js-filter-checkbox, .js-filter-checkbox-any").hide(), this._highlightActiveItems(g), g.find(".tv-control-checkbox__label").css("margin-right", 0)), l.addClass(`${o}__selectbox-dropdown-toggle--open`)
                    })).on("afterOpenMenu", (() => {
                        v = g.find(".js-filter-checkbox:checked"), p.size() && setTimeout((() => {
                            p.focus().on("focusout", (function() {
                                p.focus(), setTimeout((function() {
                                    p.focus()
                                }), 10)
                            })), p.add(".tv-screener-inplace-editor__dropdown-checkbox-item").on("keypress keyup", (e => {
                                e.keyCode === oe.ESC && this._closeDropdown(n)
                            }))
                        }), 0)
                    })).on("beforeCloseMenu", (() => {
                        l.removeClass(`${o}__selectbox-dropdown-toggle--open`), p.off("focusout keypress keyup")
                    })).on("afterCloseMenu", (() => {
                        n.tvDropdown("updateScroll"), c.detach();
                        const t = g.find(".js-filter-checkbox:checked"),
                            s = "tv-screener-dialog" === o ? "filter_dialog" : "columns",
                            i = Array.from(t).map((e => e.name)).join(",");
                        i !== Array.from(v).map((e => e.name)).join(",") && (0, k.sendSnowPlowData)(new X(i, A.UserActionState.Click, e, s))
                    })).on("reset", f.resetOptions).on("mousedownoutside", (() => {
                        n.tvDropdown("close")
                    })), c.on("mousedown touchstart", (e => e.stopPropagation()))
                }
                _applySelectbox(e, t, i = {}) {
                    const o = i.classPrefix || "tv-screener-dialog",
                        r = fs(`<label class="${o}__selectbox-container js-dropdown-toggle">`);
                    i.addClass && r.addClass(i.addClass), r.insertAfter(e), e.appendTo(r);
                    const n = fs(`<i class="${o}__selectbox-dropdown-toggle">`).append(fs(s(376844)).attr({
                            width: 12,
                            height: 7
                        })),
                        l = fs(`<span class="${o}__selectbox-caption">\n\t\t\t<span class="${o}__selectbox-caption-label js-label"></span>\n\t\t</span>`).append(n).appendTo(r),
                        a = fs('<div class="tv-dropdown__body tv-dropdown-behavior__body">'),
                        d = fs('<div class="tv-dropdown-behavior__scroll">').appendTo(a),
                        c = fs('<div class="tv-screener-fields-popup__items-wrap tv-dropdown-behavior__inscroll">').appendTo(d),
                        h = () => {
                            a.find(".js-option-selected").removeClass("i-active js-option-selected");
                            const t = a.find(`[data-value="${e.val()}"]`),
                                s = !t.data("value");
                            t.addClass("i-active js-option-selected").toggleClass(`${o}__selectbox-option--no-value`, s), l.find(".js-label").toggleClass(`${o}__selectbox-caption--no-value`, s).text(t.text())
                        },
                        u = () => {
                            c.empty();
                            const t = e.get(0).childNodes;
                            for (let e = 0; e < t.length; ++e) fs(`<span data-value="${t[e].value}" class="tv-dropdown-behavior__item tv-control-select__option js-option">\n\t\t\t\t\t<span class="tv-control-select__option-wrap ${o}__selectbox-option-wrap">${t[e].textContent}</span>\n\t\t\t\t</span>`).appendTo(c);
                            h()
                        };
                    u(), e.on("change", h);
                    const p = e => {
                        if (!0 !== e && !r.is(".i-opened")) return;
                        const s = r.closest(".i-scrollable");
                        if (s.size() && (r.offset().top + r.height() < s.offset().top || r.offset().top > s.offset().top + s.height())) return void r.tvDropdown("close");
                        const i = t.offset(),
                            o = r.offset(),
                            n = Math.max(t.height() - (o.top - i.top), 60),
                            l = fs(window).height() - o.top + fs(window).scrollTop() - 35;
                        d.css("maxHeight", Math.min(n, l)), this._setDropdownPosition(a, r, t), a.appendTo(t)
                    };
                    return r.on("resetPosition", p).on("beforeOpenMenu", (() => {
                        p(!0), n.addClass(`${o}__selectbox-dropdown-toggle--open`)
                    })).on("beforeCloseMenu", (() => n.removeClass(`${o}__selectbox-dropdown-toggle--open`))).on("afterCloseMenu", (() => {
                        r.tvDropdown("updateScroll"), a.detach()
                    })).tvDropdown({
                        $wrap: l,
                        $body: a,
                        scroll: !0,
                        closeWithEsc: !0,
                        noAnimation: !0
                    }), c.on("click", ".js-option", (t => {
                        const s = fs(t.currentTarget).data("value");
                        e.val() !== s && (e.val(s), e.trigger("change")), r.tvDropdown("close")
                    })), a.on("mousedown touchstart", (e => e.stopPropagation())), e.on("reset", u), r
                }
                _setDropdownPosition(e, t, s) {
                    const i = s.offset(),
                        o = t.offset();
                    e.css("top", o.top - i.top - 15), (0, C.isRtl)() ? e.css("right", s[0].scrollWidth - (o.left + t.width()) + i.left - (0, C.getLTRScrollLeft)(s[0])) : e.css("left", o.left - i.left)
                }
                _isFilterValueEmpty(e) {
                    const t = u.fields[e].value;
                    return t && "condition" === u.fields[e].control ? "" === t.value || null == t.value : !(t && (!Array.isArray(t) || t.length) && ("object" != typeof t || Object.keys(t).find((e => !!t[e]))))
                }
                addFieldFilter(e, t, i = "tv-screener-dialog", o) {
                    const n = fs('<div class="' + i + "__filter-field js-filter-field js-filter-field-" + e.replace(/\W/g, "") + " " + i + "__filter-field--cat" + u.fields[e].category + ' js-wrap">'),
                        a = !this._isFilterValueEmpty(e);
                    if (a) {
                        const e = t.find(".tv-screener-dialog__filter-field--active");
                        e.length > 0 ? n.insertAfter(e.last()) : t.prepend(n)
                    } else n.appendTo(t);
                    o && (a ? t.removeClass("tv-screener-inplace-editor__without-reset") : (n.addClass("tv-screener-inplace-editor__filter-without-reset"), t.addClass("tv-screener-inplace-editor__without-reset")));
                    let d = u.fields[e].filterTitle || u.fields[e].title;
                    "toggle" === u.fields[e].control && "is_primary" !== e && "active_symbol" !== e && (d = h.t(null, void 0, s(10418)).format({
                        title: d
                    })), fs(`<div class="${i}__filter-field-title js-filter-field-title-${e.replace(/\W/g,"")}">${d}</div>`).appendTo(n), this.setFieldActive(e, a, n);
                    const c = fs(`<div class="${i}__filter-field-content ${i}__filter-field-content--${u.fields[e].control} js-filter-field-_content">`).appendTo(n);
                    return fs(`<div class="${i}__filter-field-reset ${a||!o?"":"i-hidden "}apply-common-tooltip js-reset" data-field="${e}" title="${h.t(null,void 0,s(639140))}">`).append(fs(s(966631))).appendTo(n), new Promise((t => {
                        setTimeout((() => {
                            if ("select" === u.fields[e].control) this._createMultiselectFilter(e, c, o ? this._bridge.$body : this._dialog.$dialogContainer, i, u.fields[e].isSingle);
                            else if ("range" === u.fields[e].control) {
                                const t = {
                                    range: !0
                                };
                                let s = u.fields[e].range[0],
                                    i = u.fields[e].range[1];
                                u.fields[e].values ? (t.min = 0, t.max = u.fields[e].values.length + 1, u.fields[e].value && Array.isArray(u.fields[e].value) ? (t.values = this.approximateSliderValues(e, u.fields[e].value), s = this._rangeLeftValue(e), i = this._rangeRightValue(e)) : (t.values = [0, u.fields[e].values.length + 1], s = this._rangeMinValue(e), i = this._rangeMaxValue(e))) : (t.min = u.fields[e].range[0], t.max = u.fields[e].range[1], t.values = u.fields[e].value || [u.fields[e].range[0], u.fields[e].range[1]]), fs(`<div class="tv-slider" data-field="${e}">\n\t\t\t\t\t\t<div class="tv-slider__labels">\n\t\t\t\t\t\t\t<input type="text" data-field="${e}" data-bound="0" class="tv-slider__label tv-slider__label--left" value="${s}"/>\n\t\t\t\t\t\t\t<input type="text" data-field="${e}" data-bound="1" class="tv-slider__label tv-slider__label--right" value="${i}"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>`).slider(t).appendTo(c)
                            } else if ("condition" === u.fields[e].control) {
                                const t = fs(`<select name="${e}" class="js-filter-operator js-hidden">`).appendTo(c);
                                let r, n = !0;
                                for (const s in ys) u.fields[e].hiddenOperators && -1 !== u.fields[e].hiddenOperators.indexOf(s) || (n && !u.fields[e].value && (n = !1, u.fields[e].value = {
                                    operator: s
                                }), fs(`<option value="${s}"${s===(u.fields[e].value&&u.fields[e].value.operator)?" selected":""}>${ys[s]}</option>`).appendTo(t));
                                this._applySelectbox(t, o ? this._bridge.$body : this._dialog.$dialogContainer, {
                                    classPrefix: i,
                                    addClass: `${i}__filter-field-content--left`
                                }), r = u.fields[e].conditionFields ? Array.isArray(u.fields[e].conditionFields) ? u.fields[e].conditionFields : u.fields[e].conditionFields[this._model.screener_type] || u.fields[e].conditionFields.default || Ss : Ss;
                                const a = fs(`<select name="${e}" class="js-filter-operator-value js-hidden">`).appendTo(c);
                                let d;
                                if (fs(`<option value="">${h.t(null,void 0,s(660187))}</option>`).appendTo(a), 0 === r.length) d = fs(`<label class="${i}__selectbox-container js-dropdown-toggle ${i}__filter-field-content--middle js-hidden" tabindex="0">\n\t\t\t\t\t\t\t<span class="${i}__selectbox-caption-label js-label ${i}__selectbox-caption--no-value">${h.t(null,void 0,s(660187))}</span>\n\t\t\t\t\t\t</label>`).appendTo(c);
                                else {
                                    for (let t = 0; t < r.length; ++t) {
                                        const s = r[t];
                                        fs(`<option value="${s}"${s===(u.fields[e].value&&u.fields[e].value.operator&&u.fields[e].value.value)?" selected":""}>${u.fields[s].title}</option>`).appendTo(a)
                                    }
                                    d = this._applySelectbox(a, o ? this._bridge.$body : this._dialog.$dialogContainer, {
                                        classPrefix: i,
                                        addClass: `${i}__filter-field-content--middle js-hidden`
                                    })
                                }
                                const p = fs(`<input type="text" name="${e}" class="${i}__filter-field-content--right ${i}__filter-field-text js-filter-operator-arb-value">`).appendTo(c);
                                u.fields[e].value && "number" == typeof u.fields[e].value.value && p.val(`${u.fields[e].value.value}`);
                                const _ = e => {
                                        e.ctrlKey || e.metaKey || !e.charCode || !e.which || e.which < 32 || /[\d.-]/.test(String.fromCharCode(e.charCode)) || e.preventDefault()
                                    },
                                    g = e => {
                                        const t = {
                                            value: e.val()
                                        };
                                        return e.on("keypress", _).on("change input", (0, l.default)((s => {
                                            e.val() !== t.value && (e.trigger("update", s), t.value = e.val())
                                        }), 500)), t
                                    },
                                    f = fs(`<input type="text" name="${e}" class="${i}__filter-field-content--right ${i}__filter-between-input js-filter-operator-between-left js-hidden">`).appendTo(c);
                                !u.fields[e].value || "in_range" !== u.fields[e].value.operator && "not_in_range" !== u.fields[e].value.operator || f.val(`${-1e100===u.fields[e].value.value[0]||this._isLessThenMin(u.fields[e].value.value[0],e)?"":u.fields[e].value.value[0]}`);
                                const m = g(f),
                                    v = fs(`<span class="${i}__filter-between-separator js-hidden">—</span>`).appendTo(c),
                                    b = fs(`<input type="text" name="${e}" class="${i}__filter-field-content--right ${i}__filter-between-input js-filter-operator-between-right js-hidden">`).appendTo(c);
                                !u.fields[e].value || "in_range" !== u.fields[e].value.operator && "not_in_range" !== u.fields[e].value.operator || b.val(`${1e100===u.fields[e].value.value[1]||this._isGreaterThenMax(u.fields[e].value.value[1],e)?"":u.fields[e].value.value[1]}`);
                                const y = g(b),
                                    S = g(p),
                                    w = () => {
                                        const e = t.val(),
                                            s = e && "in_range" !== e && "not_in_range" !== e;
                                        d.toggleClass("js-hidden", !s), s || (S.value = "", p.val(""), a.val("").trigger("change"))
                                    },
                                    C = e => {
                                        const s = t.val(),
                                            i = s && "in_range" !== s && "not_in_range" !== s && !a.val();
                                        p.toggleClass("js-hidden", !i), i && !0 !== e && !this._resetAllFilters && setTimeout((() => {
                                            p.focus()
                                        }), 50)
                                    },
                                    k = e => {
                                        const s = "in_range" === t.val() || "not_in_range" === t.val();
                                        f.toggleClass("js-hidden", !s), v.toggleClass("js-hidden", !s), b.toggleClass("js-hidden", !s), s && !0 !== e && !this._resetAllFilters && setTimeout((() => {
                                            f.focus()
                                        }), 50), s || !0 === e || (m.value = "", y.value = "", f.val(""), b.val(""), a.val("").trigger("change"))
                                    };
                                "in_range" === t.val() || "not_in_range" === t.val() ? k(!0) : w(), C(!0), t.on("change", w).on("change", C).on("change", k), a.on("change", C)
                            } else if ("toggle" === u.fields[e].control) {
                                fs(`<label class="${i}__filter-toggle">\n\t\t\t\t\t\t<input type="checkbox" name="${e}" class="${i}__filter-dropdown-item-input tv-screener-filter-rollup__item-input js-filter-toggle" ${u.fields[e].value?"checked":""}>\n\t\t\t\t\t\t<span class="${i}__filter-toggle-checkbox-title tv-control-checkbox__label">\n\t\t\t\t\t\t\t${-1!==e.toLowerCase().indexOf("high")?h.t(null,void 0,s(59770)):h.t(null,void 0,s(967532))}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</label>`).appendTo(c).find(".js-filter-toggle").tvControlCheckbox()
                            }
                            t()
                        }), o ? 0 : r.dur / 3.5)
                    }))
                }
                showInplaceEditor(e, t) {
                    if (!u.fields[e]) return;
                    this._inplaceEditorField = e, this.$inplaceEditorTarget = t, this.$inplaceEditor || (this.$inplaceEditor = fs('<div class="tv-screener-inplace-editor tv-screener-inplace-editor--hidden">').on("mousedownoutside", (e => {
                        const t = u.fields[this._inplaceEditorField];
                        "condition" === t.control && t.value && ((0, u.isValueAbsent)(t.value.value) || (0, u.isValueAbsent)(t.value.operator)) && (this.$inplaceEditor.hasClass("js-hidden") || (t.value = null));
                        const s = this.$inplaceEditor.find(".js-dropdown-toggle.i-opened");
                        s.size() ? s.one("afterCloseMenu", (() => {
                            this.$inplaceEditor.addClass("tv-screener-inplace-editor--hidden js-hidden")
                        })) : this.$inplaceEditor.addClass("tv-screener-inplace-editor--hidden js-hidden")
                    })).on("keypress keyup", (e => {
                        e.keyCode !== oe.ESC || fs(".tv-dropdown__body.i-opened").length || this.$inplaceEditor.trigger("mousedownoutside")
                    })).attr("tabIndex", "0").appendTo(this._bridge.$body), this._bridge.standalone && (this.$inplaceEditor.addClass("tv-screener-inplace-editor--standalone"), fs(document).on("scroll", (() => {
                        this.$inplaceEditor.is(".js-hidden") || this.$inplaceEditor.css("top", this.$inplaceEditorTarget.offset().top - this._bridge.$body.offset().top)
                    })))), this.$inplaceEditor.empty().removeClass("tv-screener-inplace-editor__without-reset").removeClass("js-hidden").toggleClass("tv-screener-inplace-editor--slim", "toggle" === u.fields[e].control).toggleClass("tv-screener-inplace-editor--wide", "condition" === u.fields[e].control), this.addFieldFilter(e, this.$inplaceEditor, "tv-screener-inplace-editor", !0).then((() => {
                        this.initFilterHandlers(this.$inplaceEditor)
                    }));
                    const s = this.$inplaceEditor.find(".js-reset"),
                        i = u.fields[e].inplaceEditorLeftOffset || 0,
                        o = this._getInplaceEditorBound(),
                        r = t.position().left;
                    if (this.$inplaceEditor.css("top", t.offset().top - this._bridge.$body.offset().top), (0, C.isRtl)()) {
                        const e = r + t.width(),
                            n = i + Math.min(this.$content.width() - e, o) - s.width();
                        this.$inplaceEditor.css("right", Math.max(n, 0))
                    } else this.$inplaceEditor.css("left", Math.max(i + Math.min(r, o) - s.width(), 0));
                    this.$inplaceEditor.removeClass("tv-screener-inplace-editor--hidden").focus(), this._model.trackEvent("Open inplace editor")
                }
                _getInplaceEditorBound() {
                    let e = this._bridge.$body.width() - this.$inplaceEditor.outerWidth() + fs(document).scrollLeft();
                    if (this._bridge.standalone) {
                        const t = this._getResizerBridgeWidth(),
                            s = this._table.$element.width() + t;
                        fs(window).width() < s && (e = (0,
                            C.isRtl)() ? fs(window).width() - t - this.$inplaceEditor.outerWidth() - fs(document).scrollLeft() : fs(window).width() - t - this.$inplaceEditor.outerWidth() + fs(document).scrollLeft())
                    }
                    return e
                }
                setFilterSet(e) {
                    const t = this._model.getFilterSetById(e);
                    this.$filterSetsButton.removeClass("tv-screener-toolbar__button--unsaved").attr("data-filter-set", e), this.$filterSetsButtonTitle.text(t.title), this._popups.$filterSetsPopup && (this._popups.$filterSetsPopup.find(".tv-screener-popup__item").removeClass("tv-screener-popup__item--active"), this._popups.$filterSetsPopup.find(`[data-set="${e}"]`).addClass("tv-screener-popup__item--active"))
                }
                setFieldSet(e) {
                    const t = this._model.getFieldSetById(e);
                    this.$fieldSetsButton.removeClass("tv-screener-toolbar__button--unsaved").text(t.title).attr("data-field-set", e)
                }
                updateIntervalButton(e = this._$selectIntervalButton, t = this._model.selectedIntervalId) {
                    if (!e) return;
                    const s = (0, g.getIntervalById)(t);
                    s && e.html(s.shortTitle);
                    const o = this._model.eodRestriction.value();
                    e.toggleClass("i-hidden", o === i.Widget)
                }
                addIntervalSelect({
                    $before: e = null,
                    $appendTo: t = null,
                    $dropdownContainer: i = null
                }) {
                    return Ge({
                        $before: e,
                        $appendTo: t,
                        $dropdownContainer: i,
                        makeSelectPopup: e => {
                            const t = Object.assign({
                                buttonTitle: h.t(null, void 0, s(132916))
                            }, e);
                            return this._popups.setSelectPopup({
                                wrapClass: "tv-screener-toolbar__interval-select",
                                buttonClass: "tv-screener-toolbar__button tv-screener-toolbar__button--arrow-down tv-screener-toolbar__button--with-state apply-common-tooltip common-tooltip-fixed i-disabled"
                            }, t)
                        },
                        afterMakingSelectPopup: (e, t, s) => {
                            this._popups.setSelectIntervalContent(e, s, (e => {
                                this._model.setSelectedIntervalId(e.id), this.updateIntervalButton(t, e.id), this.updateToolbarButtons(), this.preventHighlightChanges(), this.refresh()
                            }))
                        },
                        afterSelectPopupAppend: (e, t) => {
                            this._model.loadingComplete.subscribe(null, (() => {
                                t.removeClass("i-disabled"), this.updateIntervalButton(t, this._model.selectedIntervalId)
                            }), !0)
                        }
                    })
                }
                updateGroupsButton(e, t) {
                    t.sort(((e, t) => u.fields.sector.sourceRange.indexOf(e) > u.fields.sector.sourceRange.indexOf(t) ? 1 : -1));
                    for (let i = 0; i < t.length; i++) {
                        const o = t[i] === ks ? ws : `${t[i]}${i===t.length-1?" "+h.t(null,void 0,s(462435)):""}`;
                        e.append(fs('<span class="tv-screener-dialog__filter-field-content-value">').text(o))
                    }
                    e.attr("data-groups", t)
                }
                addGroupSelect({
                    $before: e = null,
                    $appendTo: t = null,
                    $dropdownContainer: i = null
                }) {
                    return Ge({
                        $before: e,
                        $appendTo: t,
                        $dropdownContainer: i,
                        beforeMakingSelectPopup: () => {
                            if ("forex" === this._model.screener_type) {
                                const e = this._model.selectedGroups; - 1 === e.indexOf(ks) && (u.fields.sector.value = e)
                            }
                        },
                        makeSelectPopup: e => {
                            const t = {
                                wrapClass: "",
                                buttonClass: "tv-screener-toolbar__button tv-screener-toolbar__button--space_right tv-screener-toolbar__button--arrow-down tv-screener-toolbar__button--with-state apply-common-tooltip common-tooltip-fixed i-disabled"
                            };
                            "forex" !== this._model.screener_type && (t.wrapClass += " i-hidden");
                            const i = Object.assign({
                                buttonTitle: h.t(null, void 0, s(712955))
                            }, e);
                            return this._popups.setSelectPopup(t, i)
                        },
                        afterMakingSelectPopup: (e, t, s) => {
                            t.on("click", (() => {
                                s.off("change click touchend"), e.attr({
                                    "data-select-name": "forex-group"
                                }), this._createMultiSelectItemsElement("sector", s, e, "tv-screener-inplace-editor", !1, (e => {
                                    t.empty();
                                    const s = [];
                                    e.find(".js-filter-checkbox:checked, .js-filter-checkbox-any:checked").each(((e, t) => {
                                        const i = fs(t).attr("name");
                                        s.push(i)
                                    })), this._model.setSelectedGroups(s);
                                    const i = s.map((e => u.translatedMetaFieldNames[e] || e));
                                    this.updateGroupsButton(t, i), this.updateToolbarButtons()
                                }), !1, Cs)
                            }))
                        },
                        afterSelectPopupAppend: (e, t) => {
                            this._$groupSelect = e, this._model.loadingComplete.subscribe(null, (() => {
                                t.removeClass("i-disabled"), t.attr({
                                    "data-name": "screener-forex-pairs",
                                    "data-role": "button"
                                }), this.updateGroupsButton(t, this._model.selectedGroups)
                            }), !0)
                        }
                    })
                }
                updateMarketButton(e) {
                    const t = this._model.markets,
                        s = fs(".js-screener-market-button");
                    let i, o, r;
                    if (1 === t.length) {
                        const e = t[0],
                            s = (0, b.getMarketsByScreenerType)(this._model.screener_type);
                        i = t[0], o = s[e].flag ? (0, n.flagHtml)(s[e].flag) : s[e].icon, r = s[e].title
                    } else i = "global", r = "global", o = fs('\n\t\t\t\t<i alt="globe" class="tv-flag-country tv-flag-country--globe">\n\t\t\t\t</i>\n\t\t\t').html(gs);
                    s.attr({
                        "data-name": "screener-markets",
                        "data-role": "button",
                        "data-market": i
                    }), s.html(o), s.parent().toggleClass("tv-screener-market-select--hidden", "stock" !== this._model.screener_type), e && e.append(`<span class="tv-screener-market-select__button-title">\n\t\t\t\t${r}\n\t\t\t</span><span class="tv-caret">`)
                }
                _showMarketsDialog() {
                    Oe(this.getScreenerMarketDialogOptions())
                }
                addMarketSelect({
                    $before: e = null,
                    $appendTo: t = null,
                    $dropdownContainer: i = null,
                    caption: o = !1,
                    classSuffix: r = null
                }) {
                    if (this._onWidget) return;
                    const n = Ge({
                        $before: e,
                        $appendTo: t,
                        $dropdownContainer: i,
                        makeSelectPopup: () => {
                            const e = {
                                    wrapClass: r ? "tv-screener-market-select tv-screener-market-select" + r : "tv-screener-market-select",
                                    buttonClass: "tv-screener-market-select__button js-screener-market-button apply-common-tooltip common-tooltip-fixed"
                                },
                                {
                                    wrapClass: t,
                                    buttonClass: i
                                } = e,
                                o = fs(`<div class="${t} tv-dropdown tv-dropdown--inline tv-dropdown-behavior">`);
                            return {
                                $wrap: o,
                                $button: fs(`<div class="tv-dropdown__button tv-dropdown-behavior__button ${i}" title="${h.t(null,void 0,s(890781))}">`).appendTo(o)
                            }
                        }
                    });
                    return this.getScreenerMarketDialogOptions = () => ({
                        title: h.t(null, void 0, s(166902)),
                        initialSelectedMarkets: this._model.isEntireWorld ? [ps.entireWorldMarket] : (0, _s.getMarketsByNames)(We.markets, this._model.markets),
                        initialIsEntireWorld: this._model.isEntireWorld,
                        autofocus: !0,
                        initialMode: (0, hs.isGlobalScreenerUnavailable)() ? cs.MarketDialogMode.Single : nt().getValue(us, cs.MarketDialogMode.Single),
                        defaultMarket: We.defaultStockMarket,
                        onSelectComplete: e => {
                            const {
                                mode: t,
                                isEntireWorld: s
                            } = e;
                            var i;
                            i = t, nt().setValue(us, i);
                            const r = e.markets.map((e => e.value));
                            this.$filterSetsButton.toggleClass("i-disabled", !0), this.$fieldSetsButton.toggleClass("i-disabled", !0), this.$filtersButton.toggleClass("i-disabled", !0), this._model.isEntireWorld = s, this._model.setMarket(r).then((() => {
                                this.$filterSetsButton.toggleClass("i-disabled", !1), this.$fieldSetsButton.toggleClass("i-disabled", !1), this.$filtersButton.toggleClass("i-disabled", !1),
                                    this.updateMarketButton(o && n || null)
                            })).catch((e => {
                                e && bs.logError(e)
                            }))
                        },
                        onClose: () => {
                            (0, k.sendSnowPlowData)(new Pe.ChangeMarketEvent(this._model.markets.join(",")))
                        }
                    }), n.on("click", (() => {
                        Oe(this.getScreenerMarketDialogOptions())
                    })), this.updateMarketButton(o && n || null), n
                }
                refresh() {
                    fs.tabvisible && !this._tempBusy && (this._data && (this._prevData = this._data.slice()), this._model.invalidateRequest(), this._model.update(null, !1, !1, !1, !0))
                }
                get refreshIntervals() {
                    return this._model.isFastRefresh ? Fs : Is
                }
                resetRefreshCounter(e) {
                    if (clearInterval(this._refreshCounterIntervalId), !0 === e) return;
                    let t = this._model.refreshInterval;
                    const s = -1 === t || !user.is_pro && !this._model.isFastRefresh;
                    if (this.$refreshButton && this.$refreshButton.toggleClass("tv-screener-toolbar__button--with-counter", !s && !this._model.isFastRefresh).toggleClass("tv-screener-toolbar__button--active", !s), s) return;
                    const i = () => {
                        if (!this._model.isFastRefresh) {
                            const e = t / 60 | 0,
                                s = t % 60;
                            this.$refreshCounter.text(`${`00${e}`.slice(-2)}:${`00${s}`.slice(-2)}`)
                        }
                        t <= 0 ? this.refresh() : --t
                    };
                    i(), t >= 0 && (this._refreshCounterIntervalId = setInterval(i, 1e3))
                }
                preventHighlightChanges() {
                    this._preventHighlightChanges = !0
                }
                highlightChanges() {
                    if (this._preventHighlightChanges) return void(this._preventHighlightChanges = !1);
                    if (!this._prevData || !this._data || this._model.marketChangeProcess) return;
                    const e = {};
                    for (let t = 0; t < (this._prevData || []).length; ++t) e[this._prevData[t].s] = this._prevData[t].d;
                    if (delete this._prevData, this._model.isFastRefresh) {
                        const t = ["bid", "ask", "close"];
                        for (let s = 0; s < this._data.length; ++s) {
                            const i = this._data[s].s,
                                o = this._data[s].d,
                                r = e[i];
                            if (!r) continue;
                            const n = () => {
                                this._table.flickRow(i)
                            };
                            for (let e = 0; e < t.length; e++) {
                                const s = t[e],
                                    n = this._table.fieldsOrder.indexOf(s);
                                if (o[n] !== r[n]) {
                                    const e = o[n] > r[n];
                                    this._table.highlightCell(i, s, e)
                                }
                            }
                            setTimeout(n, 1e3)
                        }
                        return
                    }
                    const t = [];
                    for (let s = 0; s < this._data.length; ++s) {
                        const i = this._data[s].s,
                            o = this._data[s].d,
                            r = e[i];
                        if (!r) continue;
                        let n = !1;
                        for (let e = 0; e < o.length; ++e)
                            if (o[e] !== r[e]) {
                                n = !0;
                                break
                            }
                        n && t.push(i)
                    }
                    t.length && this._table.$tbody.find(`tr[data-symbol="${t.join('"],tr[data-symbol="')}"]`).addClass("tv-screener-table__result-row--flick")
                }
                _createSwitch(e) {
                    this.$switch = fs('<div class="tv-screener-toolbar__switch">').appendTo(this.$toolbar);
                    const t = {
                        modes: e,
                        onChange: e => this._model.applySwitch(e)
                    };
                    ! function(e, t) {
                        ue.render(he.createElement(ve, { ...t
                        }), e)
                    }(this.$switch[0], t)
                }
                get conditionOperators() {
                    return ys
                }
            }
            var Es = s(636467),
                Ps = s(822914),
                Bs = s(345848),
                Ds = s(226722),
                Rs = s(125226),
                Os = s(495046),
                Ls = s(356130),
                js = s(758337),
                Ws = s(186521),
                Ns = s(175203);
            class Vs {
                constructor() {
                    this._localSettings = {}
                }
                getValue(e, t) {
                    return this._localSettings.hasOwnProperty(e) ? this._localSettings[e] : t
                }
                setValue(e, t) {
                    this._localSettings[e] = t
                }
                getInt(e, t) {
                    return this.getValue(e, t)
                }
                getBool(e, t) {
                    return this.getValue(e, t)
                }
                setInt(e, t) {
                    this.setValue(e, t)
                }
                getJSON(e, t) {
                    return this.getValue(e, t)
                }
                setJSON(e, t) {
                    this.setValue(e, t)
                }
                remove(e) {
                    this._localSettings.hasOwnProperty(e) && delete this._localSettings[e]
                }
            }
            var Hs = s(632446),
                qs = s(865537);

            function zs(e) {
                const {
                    value: t,
                    isMarketCurrency: i,
                    content: o
                } = e
                ;
                return t === Xs.SYMBOL ? h.t(null, void 0, s(275348)) : i && t === Xs.MARKET ? h.t(null, void 0, s(366627)) : i ? h.t(null, void 0, s(366627)) + ` (${o})` : o
            }

            function Us(e) {
                const {
                    isGlobal: t,
                    financialCurrency: i,
                    symbolCurrencies: o
                } = e;
                let r = [];
                t && r.push({
                    value: Xs.MARKET,
                    isMarketCurrency: !0,
                    content: h.t(null, void 0, s(366627)),
                    description: h.t(null, void 0, s(591187))
                });
                const n = function(e, t) {
                    return e ? {
                        value: Xs.GLOBAL,
                        isMarketCurrency: !1,
                        content: Gs.USD,
                        description: h.t(null, void 0, s(599793))
                    } : {
                        value: t,
                        isMarketCurrency: !0,
                        content: t,
                        description: h.t(null, void 0, s(591187))
                    }
                }(t, i);
                r.push(n);
                const l = Object.keys(Gs).filter((e => e !== i)),
                    a = l.map((e => ({
                        value: e,
                        isMarketCurrency: !1,
                        content: e,
                        description: void 0
                    })));
                r = [...r, ...a];
                return 1 === o.length && [i, ...l].includes(o[0]) || r.unshift({
                    value: Xs.SYMBOL,
                    isMarketCurrency: !1,
                    content: h.t(null, void 0, s(275348)),
                    description: h.t(null, void 0, s(373390))
                }), {
                    defaultCurrency: n,
                    currencies: r
                }
            }
            class Ks {
                constructor(e) {
                    this.event = "convert_currency", this.source = "convert_currency_selector", this.location = "toolbar", this.state = "", this.value = e
                }
            }
            var Xs, Gs, Ys = s(823127);
            ! function(e) {
                e.MARKET = "market", e.SYMBOL = "symbol", e.GLOBAL = "global"
            }(Xs || (Xs = {})),
            function(e) {
                e.USD = "USD"
            }(Gs || (Gs = {}));
            class Js {
                constructor(e, t, i) {
                    this.createCurrencySelect = () => ({
                        selectButton: this._initCurrencySelect({
                            $before: this._view.$filterSetsButton.parent()
                        }).attr({
                            "data-name": "screener-price-currency",
                            "data-role": "button"
                        }),
                        currencySelect: this
                    }), this.getPriceConversionObject = () => {
                        const {
                            value: e,
                            isMarketCurrency: t
                        } = this.getCurrentCurrency();
                        return e === Xs.SYMBOL ? {
                            to_symbol: !0
                        } : t ? {
                            to_symbol: !1
                        } : e === Xs.GLOBAL ? null : {
                            to_symbol: !1,
                            to_currency: e
                        }
                    }, this._initCurrencySelect = e => {
                        const {
                            $before: t = null,
                            $appendTo: s = null,
                            $dropdownContainer: i = null
                        } = e;
                        if (!(t || s)) throw new Error("Provide at least one of $before or $appendTo for SecreenerCurrencySelect");
                        return Ge({
                            $before: t,
                            $appendTo: s,
                            $dropdownContainer: i,
                            makeSelectPopup: this._createSelectButton,
                            afterMakingSelectPopup: this._setSelectContent,
                            afterSelectPopupAppend: this._onLoad
                        })
                    }, this._createSelectButton = e => {
                        const t = {
                            buttonTitle: h.t(null, void 0, s(434847)),
                            ...e
                        };
                        return this._view._popups.setSelectPopup({
                            wrapClass: "tv-screener-toolbar__currency-select",
                            buttonClass: "tv-screener-toolbar__button tv-screener-toolbar__button--arrow-down tv-screener-toolbar__button--with-state apply-common-tooltip common-tooltip-fixed"
                        }, t)
                    }, this._setSelectContent = (e, t, s) => {
                        s.empty();
                        for (const e of this._availableCurrencies) {
                            const {
                                value: t,
                                content: i,
                                description: o
                            } = e, r = zs(e);
                            Ys(`<div class="tv-dropdown-behavior__item">\n\t\t\t\t<div\n\t\t\t\t\tdata-currency="${t}"\n\t\t\t\t\ttitle="${o||i}"\n\t\t\t\t\tclass="tv-control-select__option-wrap tv-screener-popup__item js-currency-select ${t===this._currentCurrency.value?"tv-screener-popup__currency-select--active":""}"\n\t\t\t\t>\n\t\t\t\t\t${r}\n\t\t\t\t</div>\n\t\t\t</div>`).appendTo(s)
                        }
                        e.on("afterOpenMenu", (() => {
                            s.on("click", ".js-currency-select", (t => {
                                t.preventDefault();
                                const i = this._currentCurrency.value,
                                    o = t.currentTarget.dataset.currency;
                                o && o !== i && (s.find(".tv-screener-popup__currency-select--active").removeClass("tv-screener-popup__currency-select--active"), s.find(`[data-currency='${o}']`).addClass("tv-screener-popup__currency-select--active"), this._handleSelect(o), setTimeout((() => {
                                    e.tvDropdown("close"), s.off("click")
                                }), r.dur / 2))
                            }))
                        }))
                    }, this._handleSelect = e => {
                        this._currentCurrency = this._availableCurrencies.filter((t => t.value === e))[0],
                            function(e) {
                                if (e.isMarketCurrency) return void(0, k.sendSnowPlowData)(new Ks("market_currency"));
                                if (e.value === Xs.SYMBOL) return void(0, k.sendSnowPlowData)(new Ks("symbol_currency"));
                                (0, k.sendSnowPlowData)(new Ks("usd"))
                            }(this._currentCurrency), this._updateSelectButton(), this._view.preventHighlightChanges(), this._view.refresh()
                    }, this._onLoad = (e, t) => {
                        this._view._model.loadingComplete.subscribe(null, (() => {
                            t.removeClass("i-disabled"), this._updateSelectButton()
                        }), !0)
                    }, this._updateSelectButton = () => {
                        const {
                            content: e
                        } = this._currentCurrency, t = h.t(null, void 0, s(429026)) + `: ${e}`;
                        this._view._$currencySelectButton.html(t)
                    }, this._availableCurrencies = e, this._currentCurrency = t, this._view = i
                }
                getCurrentCurrency() {
                    return this._currentCurrency
                }
            }

            function Zs(e, t, s) {
                s._$currencySelectButton && (s._$currencySelectButton.parent().remove(), s._model._currencySelect = void 0);
                const i = s._bridge;
                if (!e || (0, Ne.isExternalWidget)(i) || i.hide_controls) return;
                const o = function(e) {
                        return Array.isArray(e._model.markets) && e._model.markets.length > 1
                    }(s),
                    {
                        defaultCurrency: r,
                        currencies: n
                    } = Us({
                        isGlobal: o,
                        financialCurrency: e,
                        symbolCurrencies: t
                    });
                if (1 === n.length) return;
                const l = new Js(n, r, s),
                    {
                        selectButton: a,
                        currencySelect: d
                    } = l.createCurrencySelect();
                s._$currencySelectButton = a, s._model._currencySelect = d
            }
            var Qs = s(179670),
                ei = s(823127);
            s(81207);
            const ti = s(583912).linking,
                si = s(869403),
                ii = s(988411),
                oi = s(66974),
                ri = s(272001).getLogger("Screener.Widget"),
                ni = window.locale || "en";
            let li = 150;
            const ai = e => u.fields[e] && !0 !== u.fields[e].disabled && !0 !== u.fields[e].hiddenColumn,
                di = {
                    forex: "screener-forex",
                    crypto: "screener-crypto",
                    stock: "screener"
                },
                ci = ["pricescale", "minmov", "fractional", "minmove2"];
            class hi {
                constructor(e) {
                    if (this._bridge = e, this._pendingPromise = null, !("$body" in e) && "container" in e && (this._bridge.$body = ei(e.container)), this._bridge.onWidget || "big" === this._bridge.table_style ? this.settingsSaver = new Vs : this.settingsSaver = nt(), this._bridge.page_size && (li = this._bridge.page_size), this._bridge.onWidget) {
                        let t;
                        if (e.widgetSettings.largeChartUrl) {
                            t = e.widgetSettings.largeChartUrl;
                            t.match(/^https?:\/\//) || (t = "http://" + t)
                        }
                        if (this.largeChartUrl = t, this.utm = (0, Ws.filterUtmInfo)(e.widgetSettings), this.screener_type = e.widgetSettings.screener_type, "crypto_mkt" === this.screener_type) {
                            const t = "BTC" === e.widgetSettings.displayCurrency ? "BTC" : "USD";
                            this.switchFilter = {
                                left: "name",
                                operation: "match",
                                right: t + "$"
                            }, Es.defaultFilterSets.unshift({
                                id: "crypto_mkt",
                                title: "crypto_mkt",
                                content: {
                                    sort_field: "market_cap_calc",
                                    sort_direction: "desc",
                                    filters: {
                                        sector: {
                                            operator: "nempty"
                                        }
                                    }
                                }
                            })
                        }
                    } else this._bridge.standalone ? this.screener_type = e.screener_type || "stock" : this.screener_type = this.settingsSaver.getValue("screener.selected_type_on_chart", "stock");
                    this.settingKey = di[this.screener_type] || di.stock, this._bridge.onWidget && this.settingsSaver.setValue(`${ni}.${this.settingKey}.market`, e.widgetSettings.market, {
                            forceFlush: !0
                        }), this.defaultFieldSets = (0, ee.getDefaultFieldSetsByScreenerType)({
                            screenerType: this.screener_type,
                            markets: this.markets,
                            isCompact: this.isServerRender(),
                            subtype: this._screenerSubtype(),
                            isOnWidget: this._bridge.onWidget
                        }), this._bridge.onWidget && (this._widgetInitColumn = e.widgetSettings.defaultColumn || this.defaultFieldSets[0].id, this._widgetInitScreen = e.widgetSettings.defaultScreen || Es.defaultFilterSets[0].id), (0, u.applyScreenerTypeToFields)(this.screener_type, this._screenerSubtype()), "forex" === this.screener_type && (0, Es.applyMarketValuesToDefaultFilterSets)(["forex"]), this._bridge.getCurrentFilterSetId = () => this.currentFilterSetId(), this._bridge.applySymbol = (e, t = !1) => {
                            if (!0 === t || this._bridge.standalone) {
                                let t = "";
                                const s = (0, qs.getShortNameAndProName)(e);
                                t = this._bridge.onWidget && this.largeChartUrl ? (0, zt.makeTemplateSymbolUrl)(this.largeChartUrl, s) : (0, zt.makeSymbolChartUrl)(s, this.utm), window.open(t)
                            } else ti.symbol.setValue(e)
                        }, this._bridge.applyFilterSet = (e, t) => {
                            const s = !(0, V.default)(t.sort(), this.markets.sort()),
                                i = s || e !== this.currentFilterSetId();
                            let o = s ? this.setMarket(t).then((() => this._view.updateMarketButton())) : Promise.resolve();
                            return i && (o = o.then((() => this.applyFilterSet(e)))), o
                        }, this.disabled = new ii, this.fieldsOrder = new ii, this._sortField = new ii, this._sortDirection = new ii, this.eodRestriction = new ii(i.None), this._options = {}, this._initialSortField = e.sort_field || this.settingsSaver.getValue(this.settingKey + ".sort_field", "market_cap_basic"), this._initialSortDirection = e.sort_direction || this.settingsSaver.getValue(this.settingKey + ".sort_direction", "desc"), this.update = (0, l.default)(this.updateImpl.bind(this), 100), this._sortField.subscribe((e => {
                            this._view._updateTableSortField(), this.saveFiltersSettings(), delete this._initialSortField
                        })), this._sortDirection.subscribe((e => {
                            this._view._updateTableSortField(), this.saveFiltersSettings(), delete this._initialSortDirection
                        })), this.isScreenerWidgetUpdatedImpl = !1, this._bridge.visible && (0, Ne.isChartPage)(this._bridge) && this._bridge.visible.subscribe((e => {
                            !this.isScreenerWidgetUpdatedImpl && e && (this.invalidateRequest(), this._bridge.disableStickyHeader ? this.updateImpl() : this.updateImpl(this._view._setupStickyHeader.bind(this._view)), this.isScreenerWidgetUpdatedImpl = !0)
                        })), this.scanRequest = null, this.loadingStart = new si, this.loadingComplete = new si, this.fieldSetChanged = new si, this.fieldSetSaved = new si, this.filterSetChanged = new si, this.filterSetSaved = new si, this.filterSetDeleted = new si, this.maxSafeInteger = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1, this.minSafeInteger = Number.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1), this._tickers = [], "continuous_futures" === this.screener_type && (this._bridge.open_chart_on_same_tab = !1),
                        this._bridge.hide_controls || this._initXWindowHandlers(), this._view = new As(e, this);
                    const t = [this._initMarkedSymbols(this._view), this._initAlerts()];
                    !this._bridge._onWidget && window.pro && t.push(window.pro.ensureValidShopConf()), Promise.all(t).then((() => {
                        if ((0, Rs.isFeatureEnabled)("screener-maintenance")) return void this._view.showMaintenance();
                        this._view.prepareLayout(), this._initAlertsReset(), this._initAlertToggle();
                        const e = () => {
                            this._checkCurrentSets(), this._view._selectedPeriodId && "today" === this._view._selectedPeriodId ? (this.applyFieldSetContent(ee.earningsCalendarFieldSets), this._sortField.setValue("name"), this._sortDirection.setValue("asc")) : this.applyFieldSet(this._widgetInitColumn || this.currentFieldSetId(), !0), this.applyFilterSet(this._widgetInitScreen || this.currentFilterSetId(), !0), this._updateEodRestriction(), (0, Ne.isChartPage)(this._bridge) && this._bridge.visible && !this._bridge.visible.value() || (this._bridge.disableStickyHeader ? this.updateImpl() : this.updateImpl(this._view._setupStickyHeader.bind(this._view)), this.isScreenerWidgetUpdatedImpl = !0)
                        };
                        if (this.isServerRender()) this.getMetaInfo(), this.getUserSettings(), e();
                        else {
                            const t = [this.getMetaInfo(), this.getUserSettings()];
                            Promise.all(t).then(e)
                        }
                        window.loginStateChange && window.loginStateChange.subscribe(null, (e => this.onLoginStateChange(e))), this._bridge.onWidget || s.e(30359).then(s.bind(s, 372006)).then((({
                            SupportTicketData: e
                        }) => {
                            e.setScreener(this)
                        })), oi.isProd() || (window._exposed_screenerWidget = this), this.isServerRender() && delete this._bridge.server_data
                    })), (0, k.initScreenerInstance)(this)
                }
                async _initMarkedSymbols(e) {
                    if (!this.hasMarkedSymbols()) return;
                    const t = await Promise.all([s.e(86256), s.e(12275), s.e(33335), s.e(91901), s.e(83772), s.e(54819), s.e(59302), s.e(36812), s.e(69273), s.e(50500), s.e(745), s.e(86584), s.e(74339)]).then(s.bind(s, 26735)),
                        i = await Promise.all([s.e(86256), s.e(12275), s.e(33335), s.e(91901), s.e(83772), s.e(54819), s.e(59302), s.e(36812), s.e(69273), s.e(50500), s.e(745), s.e(86584), s.e(74339)]).then(s.bind(s, 113237));
                    this.markableSymbols = new t.MarkableSymbols({
                        symbolsView: e,
                        markerContainerSelector: ".tv-screener-table__symbol-addition",
                        activeMarkerClass: "tv-screener-table__marker--active",
                        additionalMarkerClass: "tv-screener-table__marker"
                    });
                    this._markedSymbolsFilter = new i.MarkedSymbolsFilter({
                        symbolsView: e,
                        containerSelector: ".tv-screener-table__head-left--text",
                        className: "tv-screener-table__head-left--marker",
                        disableSaveState: this._bridge.disableSaveMarkedSymbolsFilter
                    });
                    const o = this._markedSymbolsFilter.getStream();
                    this._tickers = this._initTickers || this._markedSymbolsFilter.getSymbolsForScan(), this._markedSymbolsFilter.isActive() && (this._bridge.server_data = null);
                    let r = !0;
                    o.on(i.FilterEvents.Init, (() => {
                        this._tickers = this._initTickers || this._markedSymbolsFilter.getSymbolsForScan(), r = !1
                    })), o.on(i.FilterEvents.FilterByMarkedSymbols, (e => {
                        if (!r) {
                            const e = this._markedSymbolsFilter._colorManager.getColor();
                            (0, k.sendSnowPlowData)(new G(e))
                        }
                        this._tickers = e, this._prevScanData = null, this._prevRequestData = null, this.invalidateRequest(), (0,
                            Ne.isScreenerPage)(this._bridge) && r || this.update()
                    })), o.on(i.FilterEvents.Disable, (() => {
                        this._tickers = this._initTickers || [], this.invalidateRequest(), this.update()
                    }))
                }
                async _initAlerts() {
                    if (this._bridge.onWidget) return;
                    const e = await Promise.all([s.e(6633), s.e(36956), s.e(4100), s.e(85783), s.e(96058), s.e(87078)]).then(s.bind(s, 27627)),
                        t = e.ScreenerAlerts,
                        i = e.ALERT_STATUS;
                    this._alerts = new t(this._bridge, this), this._alerts.currentAlertStateChange.subscribe(null, (e => this._view.setAlertButtonState(e))), this._alerts.alertsUpdated.subscribe(null, (() => this._view.popups.updateFilterSetsPopupAlerts(this._alerts.getFilterSetIdsWithRunningAlerts()))), this._alerts.currentAlertLoading.subscribe(null, (() => this._view.setCreateAlertButtonLoading())), this._alerts.alertStarted.subscribe(null, (e => {
                        e === i.NEW ? this.trackEvent("New alert") : e === i.RESTART && this.trackEvent("Restart alert")
                    }))
                }
                _initAlertsReset() {
                    const e = () => {
                        window.is_authenticated && (this._view.setAlertButtonsDisabledState(!0), this._alerts.ready.then((() => this._view.setAlertButtonsDisabledState(!1))).catch((e => ri.logError(String(e)))))
                    };
                    window.loginStateChange && window.loginStateChange.subscribe(null, e), e()
                }
                _initAlertToggle() {
                    this._view.toggleAlert.subscribe(null, ((e, t) => runOrSignIn((() => {
                        this._alerts.ready.then((() => {
                            if ((0, Rs.isFeatureEnabled)("screener-alerts-read-only")) {
                                if ("toggle_alert_button" === t) return "absent" === this._alerts._currentAlertState ? void(0, Qs.showAlertsAreReadonlyWarningDialog)() : void this._alerts.toggleAlert(e || this.currentFilterSetId(), t);
                                return this._alerts.dispatcher.alerts.getByFilterSetId(e, this._view._model.markets)[0] ? void this._alerts.toggleAlert(e || this.currentFilterSetId(), t) : void(0, Qs.showAlertsAreReadonlyWarningDialog)()
                            }
                            this._alerts.toggleAlert(e || this.currentFilterSetId(), t)
                        }))
                    }))))
                }
                _initXWindowHandlers() {
                    this._bridge.onWidget || (this._registerXWindowHandler("screener.market-changed", (() => {
                            (0, Es.applyMarketValuesToDefaultFilterSets)(this.markets);
                            let e = this.currentFilterSetId();
                            const t = this.defaultFilterSets.find((t => t.id === e));
                            if (t && t.disabled) {
                                const t = this.defaultFilterSets.find((e => !e.disabled));
                                e = t ? t.id : ""
                            }
                            this.getUserSettings().then((() => {
                                this.applyFilterSet(e, !0), this._view.updateMarketButton(), this.invalidateRequest(), this.updateImpl()
                            }))
                        })), this._registerXWindowHandler("screener.save-field-set", (e => {
                            const t = e.setId;
                            this.getUserSettings().then((() => {
                                t && t === this.currentFieldSetId() && this._view.$fieldSetsButton.text(this.getFieldSetById(t).title)
                            }))
                        })), this._registerXWindowHandler("screener.save-filter-set", (e => {
                            const t = e.setId;
                            this.getUserSettings().then((() => {
                                t && t === this.currentFilterSetId() && this._view.$filterSetsButtonTitle.text(this.getFilterSetById(t).title)
                            }))
                        })), this._registerXWindowHandler("screener.add-field-set-to-favorites", (() => {
                            this.getUserSettings()
                        })), this._registerXWindowHandler("screener.remove-field-set-from-favorites", (() => {
                            this.getUserSettings()
                        })), this._registerXWindowHandler("screener.apply-field-set", (e => {
                            this.applyFieldSetImpl(e.setId, e.initial, !1), this._view.lastSetId = e.setId
                        })),
                        this._registerXWindowHandler("screener.apply-filter-set", (e => {
                            this.applyFilterSet(e.setId, e.doNotUpdate, !1)
                        })), this._registerXWindowHandler("screener.change-selected-interval-id", (e => {
                            this._view.updateIntervalButton(null, e.id), this.invalidateRequest(), this.updateImpl()
                        })))
                }
                _registerXWindowHandler(e, t) {
                    Ds.TVXWindowEvents.on(e, (e => {
                        const s = JSON.parse(e);
                        this.settingKey === s.settingKey && t(s)
                    }))
                }
                _sendXWindowEvent(e, t) {
                    this._bridge.onWidget || "big" === this._bridge.table_style || Ds.TVXWindowEvents.emit(e, t)
                }
                _checkCurrentSets() {
                    const e = this.currentFieldSetId();
                    e && !this.getFieldSetById(e) && this.settingsSaver.remove(this.settingKey + ".fieldSetId");
                    const t = this.currentFilterSetId();
                    t && !this.getFilterSetById(t) && this.settingsSaver.remove(this.settingKey + ".filterSetId")
                }
                isServerRender() {
                    return window.initData.screener_metainfo && window.initData.screener_data && this._bridge.server_data
                }
                updateMetaInfo(e) {
                    u.fields.index.disabled = !0, u.fields.submarket.disabled = !0, "crypto" === this.screener_type && (u.fields.currency.useDefaultRange = !0, u.fields.currency.disabled = !1);
                    const t = new Set,
                        s = this.markets || [this.market];
                    u.fields.is_primary.disabled = ["crypto", "forex"].includes(s[0]), e.fields.forEach((e => {
                        if ("currency" === e.n && e.r.forEach((e => t.add(e))), e.n in u.fields) {
                            if (u.fields[e.n].type = e.t, "index" === e.n) return u.fields.index.disabled = !1, u.fields.index.sourceRange = e.r, void(u.fields.index.range = u.fields.index.sourceRange ? u.fields.index.sourceRange.map((e => e.name)) : []);
                            if ("submarket" === e.n && e.r.length >= 1 && (e.r = e.r.filter((e => "" !== e)), e.r.length > 0 && (u.fields.submarket.disabled = !1)), !u.fields[e.n].range && u.fields[e.n].useDefaultRange ? u.fields[e.n].range = u.fields[e.n].defaultRange : u.fields[e.n].useDefaultRange || (u.fields[e.n].range = e.r), "exchange" === e.n && this._bridge.unavailableWidgetExchanges && this._bridge.unavailableWidgetExchanges.length && (u.fields[e.n].range = this._getFilteredExchangesForWidget(u.fields[e.n].range)), (0, o.getFieldWidestRange)(this, e.n), !1 === u.fields[e.n].sortable) return;
                            e.t === $t.Price && (u.fields[e.n].additionalColumns ? u.fields[e.n].additionalColumns = u.fields[e.n].additionalColumns.concat(ci) : u.fields[e.n].additionalColumns = ci), e.t === $t.Text && (u.fields[e.n].range = u.fields[e.n].range.sort()), s = e, [$t.Number, $t.FundamentalPrice].includes(s.t) && u.fields[e.n].range && !u.fields[e.n].useDefaultRange && (u.fields[e.n].range = u.fields[e.n].range.map((e => Math.min(Math.max(e, this.minSafeInteger), this.maxSafeInteger))).sort(this.numericSorter)), u.fields[e.n].values && !u.fields[e.n].range && (u.fields[e.n].range = [this.minSafeInteger, this.maxSafeInteger]), u.fields[e.n].values && u.fields[e.n].range && (u.fields[e.n].range[0] > u.fields[e.n].values[0] && (u.fields[e.n].range[0] = u.fields[e.n].values[0]), u.fields[e.n].range[1] < u.fields[e.n].values[u.fields[e.n].values.length - 1] && (u.fields[e.n].range[1] = u.fields[e.n].values[u.fields[e.n].values.length - 1])), "range" !== u.fields[e.n].control || u.fields[e.n].values || u.fields[e.n].range || (u.fields[e.n].range = [this.minSafeInteger, this.maxSafeInteger], u.fields[e.n].values = [this.minSafeInteger, 0, this.maxSafeInteger])
                        } else if (-1 !== e.n.indexOf("|")) {
                            const t = e.n.split("|");
                            u.fields[t[0]] || (u.fields[t[0]] = {}), u.fields[t[0]].customResolutions || (u.fields[t[0]].customResolutions = []), u.fields[t[0]].customResolutions.push(t[1])
                        }
                        var s
                    })), Zs(e.financial_currency, [...t], this._view), (0, Es.applyMarketValuesToDefaultFilterSets)(this.markets), this.defaultFilterSets = Es.defaultFilterSets
                }
                getMetaInfo() {
                    if (this.isServerRender()) return this.updateMetaInfo(JSON.parse(window.initData.screener_metainfo)), Promise.resolve();
                    const e = this.backendUrl() + "metainfo";
                    return new Promise((t => {
                        this.loadingStart.fire(), this._pendingPromise = ei.ajax({
                            type: "POST",
                            url: e,
                            data: JSON.stringify({
                                markets: this.markets
                            }),
                            beforeSend: () => {
                                null !== this._pendingPromise && this._pendingPromise.abort()
                            },
                            success: e => {
                                this.updateMetaInfo(e), t()
                            },
                            dataType: "json",
                            xhrFields: {
                                withCredentials: !0
                            }
                        }).fail((e => {
                            "abort" !== e.statusText && ri.logError("Failed to load screener metainfo")
                        })).always((() => {
                            this.loadingComplete.fire(), this._pendingPromise = null
                        }))
                    }))
                }
                fieldActive(e) {
                    return !(!u.fields[e] || !u.fields[e].value || "condition" !== u.fields[e].control || "in_range" !== u.fields[e].value.operator || 2 !== u.fields[e].value.value.length) || !(!u.fields[e] || !u.fields[e].value || "condition" === u.fields[e].control && (!u.fields[e].value.operator || "number" != typeof u.fields[e].value.value && !u.fields[e].value.value) || "range" === u.fields[e].control && u.fields[e].value[0] === u.fields[e].range[0] && u.fields[e].value[1] === u.fields[e].range[1])
                }
                patchFiltersForMarketPages(e) {
                    let t = {
                        russia: [{
                            left: "typespecs",
                            operation: "has_none_of",
                            right: "foreign-issuer"
                        }],
                        brazil: [{
                            left: "typespecs",
                            operation: "has_none_of",
                            right: "odd"
                        }],
                        thailand: [{
                            left: "typespecs",
                            operation: "has_none_of",
                            right: "foreign"
                        }],
                        uk: [{
                            left: "typespecs",
                            operation: "has_none_of",
                            right: "cdi"
                        }, {
                            left: "exchange",
                            operation: "equal",
                            right: "LSE"
                        }]
                    }[this.markets[0]];
                    if (["sector", "industry"].includes(this.screener_type) && t && (t = t.filter((e => "exchange" !== e.left))), !t || 0 === t.length) return e;
                    const s = (0, Ps.default)(e);
                    if (!e.filter) return s.filter = [...t], s;
                    for (const e of t) {
                        0 === s.filter.filter((t => (0, V.default)(t, e))).length && s.filter.push(e)
                    }
                    return s
                }
                getScannerParams(e) {
                    let t = null,
                        s = null,
                        o = null,
                        r = {};
                    if (e) {
                        const i = this.getFilterSetById(e);
                        t = i.content.sort_field, s = i.content.filters || {}, o = Object.keys(i.content.filters || {}), r = i.content.options
                    } else o = Object.keys(u.fields).filter((e => this.fieldActive(e))), r = this._options;
                    t || (t = this._sortField.value() || this._initialSortField);
                    const n = {
                        filter: [],
                        _groups: [],
                        options: r
                    };
                    for (let e = 0; e < o.length; ++e) {
                        const t = o[e];
                        if ("condition" === u.fields[t].control && !u.fields[t].value) continue;
                        if ("name" === t && Array.isArray(u.fields[t].value)) {
                            let e = !1;
                            const s = u.fields[t].value;
                            for (let t = 0; t < s.length; ++t)
                                if ("nequal" === s[t].operator) {
                                    e = !0;
                                    break
                                }
                            if (e) continue
                        }
                        const i = u.fields[t].groupFilter ? n._groups : n.filter;
                        let r = (0, u.conditionByField)(t, u.fields[t].value, s, this.selectedIntervalId);
                        if (r.filter2Flag && (r.filter2AndPart.length && (n.filter2 || (n.filter2 = {
                                operator: "and",
                                operands: []
                            }), n.filter2.operands.push({
                                operation: {
                                    operator: "or",
                                    operands: r.filter2AndPart.map((e => ({
                                        expression: e
                                    })))
                                }
                            })), r = r.filter), Array.isArray(r))
                            for (let e = 0; e < r.length; ++e) i.push(r[e]);
                        else i.push(r)
                    }
                    if (this.filterSetChanged.fire(), this.eodRestriction.value() !== i.None && (n.options.data_restrictions = "PREV_BAR"), n.markets = this.markets, (0, Ne.isMarketPage)(this._bridge)) return this.patchFiltersForMarketPages(n);
                    const l = n.filter.filter((e => "is_primary" === e.left));
                    return l && !1 === l.left && (n.filter = n.filter.filter((e => "is_primary" !== e.left))), n
                }
                updateImpl(e, t, s, i = !0, o = !1, r = !1) {
                    if (t && this._view.isEndReached()) return;
                    if (this._view.table.dragStarted.value()) return;
                    if ((0, Rs.isFeatureEnabled)("screener-maintenance")) return void this._view._popups.showMaintenanceDialog();
                    const n = this.generateScanRequest(),
                        l = [0, li];
                    n.range = l.slice(), i ? (t && this._currentItemsRange ? (l[0] = this._currentItemsRange[1], l[1] = l[0] + li, n.range[1] = l[1]) : this._view.resetItems(), this._currentItemsRange = l) : this._currentItemsRange ? n.range[1] = this._currentItemsRange[1] : this._view.resetItems(), !t && this._prevRequest && (0, V.default)(n, this._prevRequest) ? "function" == typeof e && !0 === s && e() : (this._prevRequest = (0, js.clone)(n), "function" == typeof e && e(), this.scan(n, t, o, r))
                }
                _getSymbols() {
                    let e;
                    switch (this.screener_type) {
                        case "forex":
                            e = ["forex"];
                            break;
                        case "sector":
                            e = ["sector"];
                            break;
                        case "industry":
                            e = ["industry"];
                            break;
                        case "continuous_futures":
                            e = ["futures"];
                            break;
                        default:
                            e = this._bridge.types || []
                    }
                    return {
                        query: {
                            types: e
                        },
                        tickers: this._tickers
                    }
                }
                generateScanRequest() {
                    const e = Object.assign({}, this.getScannerParams());
                    if (e.symbols = this._getSymbols(), e.columns = this.getRequestColumns(), e.sort = {
                            sortBy: (0, g.getFieldNameWithResolution)(this._sortField.value() || this._initialSortField, this.selectedIntervalId),
                            sortOrder: this._sortDirection.value() || this._initialSortDirection
                        }, window.language && (e.options || (e.options = {}), e.options.lang = window.language), this._bridge.onWidget && "forex" !== this.markets[0]) {
                        const t = (0, b.getMarketsByScreenerType)(this.screener_type)[this.markets[0]];
                        t && t.stocks && t.stocks.length && (e.symbols.query.exchanges = t.stocks.map((e => "NYSE ARCA" === e ? "AMEX" : e)), this._bridge.unavailableWidgetExchanges && this._bridge.unavailableWidgetExchanges.length && (e.symbols.query.exchanges = this._getFilteredExchangesForWidget(e.symbols.query.exchanges)))
                    }
                    if (e._groups.length > 0 && (e.symbols.groups = e._groups), delete e._groups, "predefined_filter" === this.currentFilterSetId()) {
                        const t = this.getFilterSetById("predefined_filter");
                        if (e.symbols || (e.symbols = {}), (0, js.merge)(e.symbols, t.symbols), t.content && t.content.filters)
                            for (const [s, i] of Object.entries(t.content.filters))
                                if (Array.isArray(i))
                                    for (let t = 0; t < i.length; ++t) {
                                        const o = i[t];
                                        o.operator && "nequal" === o.operator && e.filter.push({
                                            left: s,
                                            operation: o.operator,
                                            right: o.value
                                        })
                                    } else {
                                        let t = {};
                                        void 0 !== i.operator && void 0 !== i.value ? t = {
                                            left: s,
                                            operation: i.operator,
                                            right: i.value
                                        } : void 0 !== i && void 0 !== i.operator ? (t = {
                                            left: s,
                                            operation: i.operator
                                        }, i.right && void 0 !== i.right && (t.right = i.right)) : void 0 !== i && (t = {
                                            left: s,
                                            operation: "equal",
                                            right: i
                                        }), "earnings_release_next_date,earnings_release_date" === t.left && (t.left = "earnings_release_date,earnings_release_next_date");
                                        e.filter.some((e => (0, V.default)(t, e) || e.left === t.left && e.operation === t.operation)) || e.filter.push(t)
                                    }
                    }
                    for (let t = 0; t < e.columns.length; ++t) e.columns[t] = (0, g.getFieldNameWithResolution)(e.columns[t], this.selectedIntervalId);
                    if (u.fields[this.searchField].searchValue) {
                        const t = {
                            left: !u.fields.description.disabled && u.fields.description.checked ? `${this.searchField},description` : this.searchField,
                            operation: "match",
                            right: u.fields[this.searchField].searchValue
                        };
                        e.filter.push(t)
                    }
                    if (this._bridge.screener_field_match && e.filter.push({
                            left: this._bridge.screener_field_match.field,
                            operation: "match",
                            right: this._bridge.screener_field_match.pattern
                        }), this._bridge.hidden_filter && (this._bridge.hidden_filter.filter && (e.filter = e.filter.concat(this._bridge.hidden_filter.filter)), this._bridge.hidden_filter.options && (e.options = Object.assign(e.options || {}, this._bridge.hidden_filter.options))), this.switchFilter && e.filter.push(this.switchFilter), this._currencySelect) {
                        const t = this._currencySelect.getPriceConversionObject();
                        t && (e.price_conversion = t)
                    }
                    return this.eodRestriction.value() !== i.None ? e.options.data_restrictions = "PREV_BAR" : delete e.options.data_restrictions, e
                }
                getRequestColumns() {
                    const e = [yt.ScreenerType.Stock, yt.ScreenerType.Sector, yt.ScreenerType.Industry].includes(this.screener_type) ? ["currency", "fundamental_currency_code"] : [];
                    return Array.from(new Set([...this.fieldsOrder.value(), ...this._view.table.additionalColumns, ...e]))
                }
                getDownloadData() {
                    const e = this._prevRequest ? (0, js.clone)(this._prevRequest) : this.generateScanRequest();
                    delete e.range;
                    const t = this.fieldsOrder.value().slice(0);
                    for (let s = 0; s < t.length; ++s) {
                        const i = t[s];
                        e.columns[s] = (0, g.getFieldNameWithResolution)(i, this.selectedIntervalId)
                    }
                    return new Promise((t => {
                        this._sendScanRequest(JSON.stringify(e), (e => {
                            t(JSON.parse(e))
                        }))
                    }))
                }
                scan(e, t, s, i = !1) {
                    if (!i && this._bridge.visible && !0 !== this._bridge.visible.value()) return;
                    const o = JSON.stringify(e);
                    this.loading = !0, this.loadingStart.fire(t && !s);
                    const r = Date.now(),
                        n = function(e) {
                            const t = e.map(((e, t) => [e, t]));
                            return new Map(t)
                        }(e.columns);
                    if (this._bridge.isUnavailableWidgetMarket) return void this._view.display({
                        data: []
                    }, n);
                    const l = (t, s) => {
                            this.loading = !1;
                            const i = Date.now() - r,
                                o = JSON.parse(t);
                            this._shouldRerender(t, e) && (this._view.display(o, n, s), this._prevScanData = t, this._prevRequestData = (0, js.clone)(e)), this.isServerRender() && o.request && (o.request.symbols && o.request.symbols.tickers && (this._initTickers = o.request.symbols.tickers, this._tickers = this._initTickers), this._options = o.request.options), this.loadingComplete.fire();
                            if (null !== location.pathname.match(/earnings\/{0,1}$/i) && !this.isServerRender()) {
                                const e = "error" === s ? "error" : "ok",
                                    t = void 0 !== o.status && 0 !== o.status ? o.status : "error" === e ? 400 : 200;
                                Ns.telemetry.sendReport("calendars", "earnings_http_status", {
                                    value: t,
                                    additional: {
                                        source: "ScreenerWidget"
                                    }
                                }), Ns.telemetry.sendReport("calendars", "earnings_response_time_frame", {
                                    value: i,
                                    additional: {
                                        source: "ScreenerWidget"
                                    }
                                }), Ns.telemetry.sendReport("calendars", `earnings_${e}`)
                            }
                        },
                        a = (e, t) => {
                            const s = Date.now() - r;
                            this.loading = !1, this._view.display(e, n, t),
                                this.loadingComplete.fire();
                            if (null !== location.pathname.match(/earnings\/{0,1}$/i) && !this.isServerRender()) {
                                const i = "error" === t ? "error" : "ok",
                                    o = void 0 !== e.status && 0 !== e.status ? e.status : "error" === i ? 400 : 200;
                                Ns.telemetry.sendReport("calendars", "earnings_http_status", {
                                    value: o,
                                    additional: {
                                        source: "ScreenerWidget"
                                    }
                                }), Ns.telemetry.sendReport("calendars", "earnings_response_time_frame", {
                                    value: s,
                                    additional: {
                                        source: "ScreenerWidget"
                                    }
                                }), Ns.telemetry.sendReport("calendars", `earnings_${i}`)
                            }
                        };
                    this.isServerRender() ? l(window.initData.screener_data) : this._markedSymbolsFilter && this._markedSymbolsFilter.isActive() && !this._tickers.length ? this._view.display({
                        data: []
                    }, n) : (this.scanRequest && 4 !== this.scanRequest.readyState && this.scanRequest.abort(), this.scanRequest = this._sendScanRequest(o, l), this.scanRequest.fail(a), this.trackEvent("Scan request"), window.initData.filter_id && delete window.initData.filter_id)
                }
                preventPrevScanRequest() {
                    this.loading && this.scanRequest && (this.scanRequest.abort(), this.scanRequest = null)
                }
                _shouldRerender(e, t) {
                    return !this._isPrevScanDataEqual(e) || !this._isPrevRequestDataEqual(t)
                }
                _isPrevScanDataEqual(e) {
                    return this._prevScanData === e
                }
                _isPrevRequestDataEqual(e) {
                    return (0, V.default)(e, this._prevRequestData)
                }
                isFieldSetChanged() {
                    if (this._bridge.onWidget) return !1;
                    const e = this.currentFieldSetId(),
                        t = e && this.getFieldSetById(e);
                    if (!e || !t) return !0;
                    const s = t.content.slice().filter(ai),
                        i = this.fieldsOrder.value().slice().filter(ai),
                        o = !u.fields.type.disabled && -1 !== t.content.indexOf("type") !== u.fields.type.checked,
                        r = !u.fields.description.disabled && -1 !== t.content.indexOf("description") !== u.fields.description.checked;
                    return s.join() !== i.join() || o || r
                }
                applyFieldSetContent(e) {
                    for (const t in u.fields) u.fields[t].checked = -1 !== e.indexOf(t);
                    this.fieldSetChanged.fire(e.filter((e => !0 !== u.fields[e].hiddenColumn)))
                }
                applyFieldSetImpl(e, t, s = !0) {
                    const i = this.getFieldSetById(e),
                        o = i.content.filter((e => u.fields[e] && !u.fields[e].disabled));
                    if (this.applyFieldSetContent(o), t || this.update(), this._view.setFieldSet(e), this.settingsSaver.setValue(this.settingKey + ".fieldSetId", i.id, {
                            forceFlush: !0
                        }), this._view.updateFavoritesToolbar(), !t) {
                        const t = this.defaultFieldSets.find((t => t.id === e)) ? e : "custom";
                        this.trackEvent(`Apply field set ${t}`)
                    }
                    s && this._sendXWindowEvent("screener.apply-field-set", JSON.stringify({
                        setId: e,
                        initial: t,
                        settingKey: this.settingKey
                    }))
                }
                applyFieldSet(e, t, i) {
                    t || i || !this.isFieldSetChanged() ? this.applyFieldSetImpl(e, t) : new Promise((e => {
                        this._bridge.onWidget ? e() : this._view._popups.showConfirmDialog(s(777754).t(null, void 0, s(246367))).then((t => {
                            t ? this._view.popups.confirmAndSaveCurrentFieldSet().then(e, (t => {
                                t && ri.logError(t), e()
                            })) : e()
                        }))
                    })).then((() => {
                        this.applyFieldSetImpl(e, t)
                    }))
                }
                isFilterSetChanged() {
                    if (this._bridge.onWidget) return !1;
                    const e = this.currentFilterSetId(),
                        t = e && this.getFilterSetById(e);
                    if (!e || !t) return !0;
                    const s = this.markets || [this.market];
                    ["forex", "crypto"].includes(s[0]) && delete t.content.filters.is_primary;
                    const i = this.currentFilterState(),
                        o = {};
                    if (t.content.filters)
                        for (const e of Object.keys(t.content.filters)) {
                            const s = t.content.filters[e],
                                i = (0, u.isValueAbsent)(s.operator),
                                r = (0, u.isValueAbsent)(s.value);
                            (i && r || !i && !r) && (o[e] = s)
                        }
                    if (t.content.options && i.options) {
                        if (i.options.active_symbols_only !== t.content.options.active_symbols_only) return !0
                    }
                    const r = i.filters,
                        n = Object.keys(o).concat(Object.keys(r)).filter(((e, t, s) => s.indexOf(e) === t));
                    for (let e = 0; e < n.length; ++e) {
                        const t = n[e];
                        if (!o.hasOwnProperty(t) || !r.hasOwnProperty(t)) return !0;
                        if (Array.isArray(o[t]) ^ Array.isArray(r[t])) return !0;
                        if (Array.isArray(o[t]) && Array.isArray(r[t]) && o[t].sort(this.numericSorter).join() !== r[t].sort(this.numericSorter).join() || !Array.isArray(o[t]) && !(0, V.default)(o[t], r[t])) return !0
                    }
                    return !!(t.content.sort_direction && t.content.sort_direction !== i.sort_direction || t.content.sort_field && t.content.sort_field !== i.sort_field)
                }
                currentFilterState() {
                    const e = {};
                    for (const t in u.fields) {
                        const s = u.fields[t].value;
                        if (["is_primary", "active_symbol"].includes(t)) {
                            if (!s) continue;
                            e[t] = {
                                operator: "equal",
                                value: !0
                            }
                        } else u.fields[t].control && s && ("object" == typeof s ? "condition" === u.fields[t].control ? (0, u.isValueAbsent)(s.operator) || (0, u.isValueAbsent)(s.value) || (e[t] = s) : Object.keys(s).some((e => !!s[e])) && (e[t] = s) : e[t] = s)
                    }
                    return {
                        filters: e,
                        sort_field: this._sortField.value() || this._initialSortField,
                        sort_direction: this._sortDirection.value() || this._initialSortDirection,
                        options: this._options
                    }
                }
                saveFieldSet(e, t) {
                    return this._view.$fieldSetsButton.toggleClass("i-disabled", !0), e.type = "fieldSet", e.screener_type = this.screener_type, this.saveSet(e, t).then((t => {
                        this._view.$fieldSetsButton.toggleClass("i-disabled", !1);
                        const s = t && t.id && `${t.id}`;
                        return e.delete || this.fieldSetSaved.fire(), this._sendXWindowEvent("screener.save-field-set", JSON.stringify({
                            setId: e.delete ? "" : s,
                            settingKey: this.settingKey
                        })), this.applyFieldSetImpl(s), t
                    }))
                }
                saveFilterSet(e, t) {
                    return this._view.$filterSetsButton.toggleClass("i-disabled", !0), e.type = "filterSet", e.screener_type = this.screener_type, e.markets = this.markets, this.saveSet(e, t).then((t => (this._view.$filterSetsButton.toggleClass("i-disabled", !1), e.setId = t && t.id && `${t.id}`, this.applyFilterSet(t.id), e.delete ? this.filterSetDeleted.fire(e.setId) : this.filterSetSaved.fire(e.setId, e.markets, !!e.content), this._sendXWindowEvent("screener.save-filter-set", JSON.stringify({
                        setId: e.delete ? "" : e.setId,
                        settingKey: this.settingKey
                    })), t)))
                }
                saveSet(e, t) {
                    return Promise.resolve({
                        type: "POST",
                        url: "/screener/save/",
                        data: e
                    }).then(ei.ajax).then((e => (e.error ? ri.logError(e.error) : t && this.trackEvent(t), this.getUserSettings().then((() => e)))))
                }
                _isExchangeRelevant(e) {
                    return Array.isArray(e.value) ? e.value.every((t => e.range.includes(t))) : e.range.includes(e.value)
                }
                _isSubmarketRelevant(e) {
                    return (Array.isArray(e.value) ? e.value : [e.value]).every((t => e.range.includes(t)))
                }
                applyFilterSet(e, t, s = !0) {
                    const i = this.getFilterSetById(e);
                    if (i) {
                        i.content.sort_field && this._sortField.setValue(i.content.sort_field), i.content.sort_direction && this._sortDirection.setValue(i.content.sort_direction), this._options = Object.assign({}, i.content.options);
                        for (const e in u.fields) i.content.filters && e in i.content.filters ? ("condition" === u.fields[e].control && Array.isArray(i.content.filters[e]) && 2 === i.content.filters[e].length && (i.content.filters[e] = {
                            operator: "in_range",
                            value: i.content.filters[e]
                        }), u.fields[e].value = (0, js.clone)(i.content.filters[e]), "submarket" !== e || !u.fields[e].disabled && this._isSubmarketRelevant(u.fields[e]) || (u.fields[e].value = null), "is_primary" === e && u.fields[e].disabled && (u.fields[e].value = null), "condition" === u.fields[e].control && u.fields[e].value && ((0, u.isValueAbsent)(u.fields[e].value.value) || (0, u.isValueAbsent)(u.fields[e].value.operator)) && (u.fields[e].value = null), "exchange" !== e || this._isExchangeRelevant(u.fields[e]) || (u.fields[e].value = null)) : !1 !== u.fields[e].resettableFilter && (u.fields[e].value = null), this._view._resetField(e, !1, !0);
                        this._options.hasOwnProperty("active_symbols_only") && (!0 === this._options.active_symbols_only && (u.fields.active_symbol.value = !0), delete this._options.active_symbols_only), this.saveFiltersSettings(), !0 === t ? (this._view.setFilterSet(e), this.filterSetChanged.fire(e)) : this.updateImpl((() => {
                            this._view.setFilterSet(e), this.filterSetChanged.fire(e)
                        }), null, !0), this.settingsSaver.setValue(this.settingKey + ".filterSetId", i.id, {
                            forceFlush: !0
                        }), this.trackEvent("Apply filter set"), s && this._sendXWindowEvent("screener.apply-filter-set", JSON.stringify({
                            setId: e,
                            doNotUpdate: t,
                            settingKey: this.settingKey
                        }))
                    }
                }
                saveFiltersSettings() {
                    this.settingsSaver.setValue(this.settingKey + ".sort_direction", this._sortDirection.value() || this._initialSortDirection), this.settingsSaver.setValue(this.settingKey + ".sort_field", this._sortField.value() || this._initialSortField)
                }
                getUserSettings() {
                    const e = {
                        filterSets: [],
                        fieldSets: []
                    };
                    return this.isServerRender() ? this.favoriteFieldSets = this.defaultFieldSets.map((e => e.id)) : this.favoriteFieldSets = this.settingsSaver.getJSON(this.settingKey + ".favoriteFieldSets", this.defaultFieldSets.map((e => e.id))), window.is_authenticated ? new Promise((t => {
                        ei.get("/screener/settings/", {
                            screener_type: this.screener_type
                        }).done((s => {
                            (s = s || e).filterSets = s.filterSets.map((e => {
                                const t = JSON.parse(e.content);
                                return t.filters = (0, Es.fixInvalidFilters)(t.filters), {
                                    id: e.id + "",
                                    title: e.title,
                                    content: t
                                }
                            })), s.fieldSets = s.fieldSets.map((e => ({
                                id: e.id + "",
                                title: e.title,
                                content: JSON.parse(e.content)
                            }))), this.settings = s, t()
                        }))
                    })) : (this.settings = e, Promise.resolve())
                }
                getFieldSetById(e) {
                    const t = t => t.id == e,
                        s = this.defaultFieldSets.find(t) || (this.settings ? this.settings.fieldSets.find(t) : null);
                    return s ? Object.assign({}, s, {
                        title: TradingView.clean(s.title, !0)
                    }) : null
                }
                getFilterSetById(e) {
                    if ("predefined_filter" === e) return this._bridge.predefined_filter;
                    const t = t => t.id == e,
                        s = Es.defaultFilterSets.find(t) || (this.settings ? this.settings.filterSets.find(t) : null);
                    return s ? Object.assign({}, s, {
                        title: TradingView.clean(s.title, !0)
                    }) : null
                }
                addFavoriteFieldSet(e) {
                    -1 === this.favoriteFieldSets.indexOf(e) && this.favoriteFieldSets.push(e), this.settingsSaver.setJSON(this.settingKey + ".favoriteFieldSets", this.favoriteFieldSets, {
                            forceFlush: !0
                        }), this._view.updateFavoritesToolbar(),
                        this.trackEvent("Add field set to favorites"), this._sendXWindowEvent("screener.add-field-set-to-favorites", JSON.stringify({
                            settingKey: this.settingKey,
                            date: Date.now()
                        }))
                }
                removeFavoriteFieldSet(e) {
                    this.favoriteFieldSets = this.favoriteFieldSets.filter((t => t !== e)), this.settingsSaver.setJSON(this.settingKey + ".favoriteFieldSets", this.favoriteFieldSets, {
                        forceFlush: !0
                    }), this._view.updateFavoritesToolbar(), this._sendXWindowEvent("screener.remove-field-set-from-favorites", JSON.stringify({
                        settingKey: this.settingKey,
                        date: Date.now()
                    }))
                }
                currentFieldSetId() {
                    return this.isServerRender() ? window.initData.fieldset_id : this.settingsSaver.getValue(this.settingKey + ".fieldSetId", this.defaultFieldSets[0].id)
                }
                currentFilterSetId() {
                    const e = Es.defaultFilterSets.find((e => e.hasOwnProperty("disabled") && !e.disabled)) || Es.defaultFilterSets[0];
                    return window.initData.filter_id || this.settingsSaver.getValue(this.settingKey + ".filterSetId", e.id)
                }
                getCurrentState() {
                    return {
                        requestParams: this._prevRequest || "none",
                        fieldSet: this.currentFieldSetId(),
                        filterSet: this.currentFilterSetId()
                    }
                }
                trackEvent(e) {
                    (0, Bs.trackEvent)("Screener", e, this.markets.join(",") + " " + (this._bridge.standalone ? "standalone" : "on chart"))
                }
                numericSorter(e, t) {
                    return e > t ? 1 : -1
                }
                invalidateRequest() {
                    delete this._prevRequest
                }
                get selectedIntervalId() {
                    if (!this._bridge.hide_controls) {
                        if (this.eodRestriction.value() !== i.None) return "1D";
                        const e = this.settingsSaver.getValue(`${this.settingKey}.interval-id`, g.DEFAULT_INTERVAL_ID);
                        return (this._bridge.onWidget || (0, Hs.enabled)(w.ProductFeatures.SCREENER_INTERVALS) && -1 !== (0, Hs.getConfig)(w.ProductFeatures.SCREENER_INTERVALS).interval.indexOf(e)) && (0, g.getIntervalById)(e) ? e : g.DEFAULT_INTERVAL_ID
                    }
                }
                setSelectedIntervalId(e) {
                    this.settingsSaver.setValue(`${this.settingKey}.interval-id`, e, {
                        forceFlush: !0
                    }), this._sendXWindowEvent("screener.change-selected-interval-id", JSON.stringify({
                        settingKey: this.settingKey,
                        id: e
                    }));
                    const t = (0, g.getIntervalById)(e);
                    t && this.trackEvent(`Apply timeframe ${t.id}`)
                }
                get selectedGroups() {
                    return JSON.parse(this.settingsSaver.getValue(`${ni}.screener-forex.groups`, '["Major","Minor"]')).map((e => u.translatedMetaFieldNames[e] || e))
                }
                setSelectedGroups(e) {
                    const t = Object.keys(u.translatedMetaFieldNames),
                        s = e.map((e => t.find((t => u.translatedMetaFieldNames[t] === e)) || e));
                    this.settingsSaver.setValue(`${ni}.screener-forex.groups`, JSON.stringify(s), {
                        forceFlush: !0
                    }), this.trackEvent("Change selected groups")
                }
                set markets(e) {
                    const t = Array.isArray(e) ? e : [e],
                        s = JSON.stringify(t);
                    this.settingsSaver.setValue(`${ni}.${this.settingKey}.market`, s, {
                        forceFlush: !0
                    }), this.trackEvent("Change market"), this._sendXWindowEvent("screener.market-changed", JSON.stringify({
                        settingKey: this.settingKey,
                        date: Date.now()
                    }))
                }
                get markets() {
                    const e = (0, b.getDefaultMarketForLocale)(ni, this.screener_type),
                        t = Object.keys((0, b.getMarketFieldValuesByScreenerType)(this.screener_type)),
                        s = this.settingsSaver.getValue(`${ni}.${this.settingKey}.market`, JSON.stringify([e]));
                    let i;
                    if (this.settingsSaver.getBool(`${ni}.${this.settingKey}.is-entire-world`, !1)) i = t;
                    else try {
                        i = JSON.parse(s),
                            Array.isArray(i) && !i.some((e => !t.includes(e))) || (i = [e])
                    } catch (o) {
                        i = o instanceof SyntaxError && t.includes(s) ? [s] : [e]
                    }
                    if (window.initData.screener_market) return [window.initData.screener_market];
                    if ((0, hs.isGlobalScreenerUnavailable)() && i.length > 1) return i = [e], i;
                    return i.every((e => t.includes(e))) ? i : [e]
                }
                set isEntireWorld(e) {
                    this.settingsSaver.setValue(`${ni}.${this.settingKey}.is-entire-world`, e, {
                        forceFlush: !0
                    })
                }
                get isEntireWorld() {
                    const e = this.settingsSaver.getBool(`${ni}.${this.settingKey}.is-entire-world`, !1);
                    return !((0, hs.isGlobalScreenerUnavailable)() && this.markets.length > 1) && e
                }
                get timezone() {
                    return (0, te.getTimezoneByMarket)(this.markets[0])
                }
                _verifyAllSetsChanges(e) {
                    return (!0 === e ? Promise.resolve() : new Promise(((e, t) => {
                        this._bridge.onWidget ? e() : this.isFieldSetChanged() ? this._view.popups.showConfirmDialog(s(777754).t(null, void 0, s(246367))).then((t => {
                            t ? this._view.popups.confirmAndSaveCurrentFieldSet().then(e, (t => {
                                t && ri.logError(t), e()
                            })) : e()
                        })) : e()
                    }))).then((() => !0 === e ? Promise.resolve() : new Promise(((e, t) => {
                        this._bridge.onWidget ? e() : this.isFilterSetChanged() ? this._view.popups.showConfirmDialog(s(777754).t(null, void 0, s(671517))).then((t => {
                            t ? this._view.popups.confirmAndSaveCurrentFilterSet().then(e, (t => {
                                t && ri.logError(t), e()
                            })) : e()
                        })) : e()
                    }))))
                }
                setMarket(e, t, s) {
                    const i = Array.isArray(e) ? e : [e];
                    return !0 !== t && (0, V.default)(i, this.markets) ? Promise.reject() : (this.markets = i, this._verifyAllSetsChanges(s).then((() => this.loadingStart.fire())).then((() => this.getMetaInfo())).then((() => {
                        this.defaultFieldSets = (0, ee.getDefaultFieldSetsByScreenerType)({
                            screenerType: this.screener_type,
                            isCompact: this.isServerRender(),
                            markets: this.markets,
                            subtype: "",
                            isOnWidget: this._bridge.onWidget
                        });
                        let e = this.currentFilterSetId();
                        const t = this.defaultFilterSets.find((t => t.id === e));
                        if (t && t.disabled) {
                            const t = this.defaultFilterSets.find((e => !e.disabled));
                            e = t ? t.id : ""
                        }
                        this.applyFieldSet(this.currentFieldSetId(), !0), this.applyFilterSet(e, !0), this.invalidateRequest(), this._updateEodRestriction(), this.update()
                    })))
                }
                _updateEodRestriction() {
                    const e = {
                        markets: this.markets,
                        isPro: window.pro && window.pro.isPro(),
                        isAnonymous: !window.is_authenticated,
                        screenerType: this.screener_type,
                        onWidget: (0, Ne.isExternalWidget)(this._bridge)
                    };
                    this.eodRestriction.setValue(function(e) {
                        const {
                            screenerType: t,
                            markets: s,
                            onWidget: o,
                            isPro: r,
                            isAnonymous: n
                        } = e;
                        if (s.length > 1) return i.None;
                        if ("stock" !== t) return i.None;
                        const l = (0, b.getExchangesByMarkets)(s);
                        if (o) return l.every(y.isEmbedUnrestrictedExchange) ? i.None : i.Widget;
                        if (r) return i.None;
                        const a = l.map(y.getProductIdFromStockExchange);
                        return a.some((e => (0, m.isIDCExchange)(e, !0))) && (n || a.some((e => !!e && (0, v.isUserNeedSignAgreement)(e)))) ? i.Site : i.None
                    }(e))
                }
                changeScreenerType(e) {
                    return e === this.screener_type ? Promise.reject() : (this.trackEvent("Change screener type"), this._verifyAllSetsChanges().then((() => {
                        this.disabled.setValue(!0), this.marketChangeProcess = !0, this.screener_type = e, this.settingsSaver.setValue("screener.selected_type_on_chart", e, {
                            forceFlush: !0
                        }), this.settingKey = di[this.screener_type] || di.stock, this.defaultFieldSets = (0,
                            ee.getDefaultFieldSetsByScreenerType)({
                            screenerType: this.screener_type,
                            markets: this.markets,
                            isCompact: this.isServerRender(),
                            subtype: "",
                            isOnWidget: this._bridge.onWidget
                        }), (0, u.applyScreenerTypeToFields)(this.screener_type), (0, Es.applyMarketValuesToDefaultFilterSets)(this.markets);
                        const t = this.selectedGroups;
                        u.fields.sector.value = Array.isArray(t) && t[0] === s(777754).t(null, void 0, s(302951)) ? null : t
                    })).then((() => this.loadingStart.fire())).then((() => this.getMetaInfo())).then((() => this.getUserSettings())).then((() => {
                        this._checkCurrentSets(), this.applyFieldSet(this.currentFieldSetId(), !0), this.applyFilterSet(this.currentFilterSetId(), !0)
                    })).then((() => {
                        let e = this.currentFilterSetId();
                        const t = this.defaultFilterSets.find((t => t.id === e));
                        if (t && t.disabled) {
                            const t = this.defaultFilterSets.find((e => !e.disabled));
                            e = t ? t.id : ""
                        }
                        this.applyFilterSet(e, !0), this.invalidateRequest(), this._updateEodRestriction(), this.updateImpl(void 0, void 0, void 0, void 0, void 0, !0), this.marketChangeProcess = !1, this.loadingComplete.subscribe(null, (() => {
                            this.disabled.setValue(!1)
                        }), !0)
                    })))
                }
                backendUrl(e) {
                    return (0, Ls.getBackendUrl)(this.markets, e)
                }
                onLoginStateChange(e) {
                    e || this.getUserSettings().then((() => this.applyFieldSet(this.currentFieldSetId(), !0))).then((() => this.setMarket(this.markets, !0, !0))).then((() => this._view.updateMarketButton()))
                }
                showNoticeIfNoFilters(e) {
                    let t;
                    if (e) {
                        const s = this.getFilterSetById(e);
                        t = s && s.content
                    } else t = this.currentFilterState();
                    return (!t || !Object.keys(t.filters || {}).length) && (this._view.popups.showNotice(s(777754).t(null, void 0, s(658929)), s(777754).t(null, void 0, s(574673))), !0)
                }
                bindScrollToBottom(e) {
                    const t = () => {
                            this.loading || this.update(null, !0)
                        },
                        s = () => {
                            ei(window).bind("scrollto", {
                                to: "bottom",
                                tolerance: e
                            }, t), this.loadingComplete.unsubscribe(null, s)
                        };
                    this.loadingComplete.subscribe(null, s)
                }
                get isFastRefresh() {
                    return ["forex", "crypto"].includes(this.screener_type)
                }
                get refreshInterval() {
                    return this.isFastRefresh && !this._bridge.onWidget ? this._bridge.hide_controls ? 1 : window.is_authenticated ? this.settingsSaver.getInt(this.settingKey + ".refreshInterval", 1) || 1 : -1 : window.user && window.user.is_pro && this.settingsSaver.getInt(this.settingKey + ".refreshInterval", -1) || -1
                }
                set refreshInterval(e) {
                    this.settingsSaver.setValue(this.settingKey + ".refreshInterval", e, {
                        forceFlush: !0
                    }), this._view.resetRefreshCounter(), -1 !== e && this.trackEvent("Set refresh interval")
                }
                get alerts() {
                    return this._alerts
                }
                get view() {
                    return this._view
                }
                get searchField() {
                    return "sector" === this.screener_type || "industry" === this.screener_type ? "description" : "crypto_mkt" === this.screener_type ? "sector" : "name"
                }
                get screenerType() {
                    return this.screener_type
                }
                get screenerBridge() {
                    return this._bridge
                }
                applySwitch(e) {
                    if (delete this._bridge.screener_field_match, "crypto_mkt" === this.screener_type) this.switchFilter = {
                        left: "name",
                        operation: "match",
                        right: e + "$"
                    };
                    else if ("bonds" === this.screener_type) {
                        this.switchFilter = {
                            left: "description",
                            operation: "yields" === e ? "match" : "nmatch",
                            right: "YIELD$"
                        };
                        const t = "yields" === e ? s(777754).t(null, {
                            context: "Bonds"
                        }, s(187806)) : s(777754).t(null, void 0, s(931691));
                        u.fields.close.title = t,
                            u.fields.close.shortTitle = t, this._view.table.setColumnTitle("close", t)
                    }
                    this.update()
                }
                hasMarkedSymbols() {
                    return (0, Rs.isFeatureEnabled)("marked_symbols_enabled") && Os.enabled("marked_symbols") && !this._bridge.marked_symbols_disabled
                }
                _screenerSubtype() {
                    return this._bridge.screener_subtype || ""
                }
                _sendScanRequest(e, t) {
                    const s = this.backendUrl() + "scan";
                    return ei.ajax({
                        type: "POST",
                        url: s,
                        data: e,
                        success: t,
                        dataType: "text",
                        xhrFields: {
                            withCredentials: !Boolean(this._bridge.onWidget)
                        }
                    })
                }
                _getFilteredExchangesForWidget(e) {
                    return e.filter((e => !this._bridge.unavailableWidgetExchanges.includes(e)))
                }
            }
        },
        194851: (e, t, s) => {
            "use strict";
            s.d(t, {
                getProductIdFromStockExchange: () => l,
                hasStockScannerExchange: () => n,
                isEmbedUnrestrictedExchange: () => a
            });
            var i = s(959941);
            const o = JSON.parse('{"NASDAQ":"exchange-nasdaq","NYSE":"exchange-nyse","NYSE ARCA":"exchange-amex","AMEX":"exchange-amex","OTC":"exchange-otc","DFM":"exchange-dfm","BCBA":"exchange-bcba","ASX":"exchange-asx","EURONEXT":"exchange-euronext_stocks","EURONEXTBRU":"exchange-euronext_stocks","EURONEXTPAR":"exchange-euronext_stocks","EURONEXTLIS":"exchange-euronext_stocks","EURONEXTAMS":"exchange-euronext_stocks","BAHRAIN":"exchange-bahrain","BMFBOVESPA":"exchange-bovespa_stocks","TSX":"exchange-tsx","TSXV":"exchange-tsxv","CSE":"exchange-cse","SIX":"exchange-six","BCS":"exchange-bcs","SSE":"exchange-sse","SZSE":"exchange-szse","BVC":"exchange-bvc","FWB":"exchange-fwb","SWB":"exchange-swb","XETR":"exchange-xetr","OMXCOP":"exchange-omxcop","OMXTSE":"exchange-omxtse","EGX":"exchange-egx","BME":"exchange-bme","OMXHEX":"exchange-omxhex","HKEX":"exchange-hkex","IDX":"exchange-idx","TASE":"exchange-tase","BSE":"exchange-bse","NSE":"exchange-nse","OMXICE":"exchange-omxice","MIL":"exchange-mil","MILSEDEX":"exchange-mil","FSE":"exchange-fse","NAG":"exchange-nag","SAPSE":"exchange-sapse","TSE":"exchange-omxtse","KRX":"exchange-krx_stocks","OMXVSE":"exchange-omxvse","OMXRSE":"exchange-omxrse","BMV":"exchange-bmv","MYX":"exchange-myx","NSENG":"exchange-nseng","NZX":"exchange-nzx","BVL":"exchange-bvl","GPW":"exchange-gpw","QSE":"exchange-qse","BELEX":"exchange-belex","MOEX":"exchange-moex_stocks","TADAWUL":"exchange-tadawul","OMXSTO":"exchange-omxsto","SGX":"exchange-sgx_stocks","SET":"exchange-set","BIST":"exchange-bist","TWSE":"exchange-twse","LSE":"exchange-lse","LSIN":"exchange-lsin","HOSE":"exchange-hose_stocks","JSE":"exchange-jse_stocks","OSE":"exchange-osl"}'),
                r = [];
            for (const e in i) i.hasOwnProperty(e) && i[e].hasOwnProperty("exchangesStocks") && i[e].exchangesStocks.forEach((e => {
                r.push(e)
            }));
            const n = e => (e = {
                OSL: "EURONEXTOSE",
                BCBA: "BYMA",
                AMEX: "NYSE ARCA"
            }[e] || e, r.includes(e));

            function l(e) {
                return o[e] || null
            }

            function a(e) {
                return "ASX" === e
            }
        },
        133373: (e, t, s) => {
            "use strict";
            s.d(t, {
                getWidestFieldValuesBorders: () => n,
                getFieldWidestRange: () => l
            });
            var i = s(263605),
                o = s(249219),
                r = s(695083);

            function n(e, t) {
                return Array.isArray(e) && Array.isArray(t) ? function(e, t) {
                    const s = [...e, ...t];
                    return [Math.min(...s), Math.max(...s)]
                }(e, t) : "string" != typeof e ? function(e, t) {
                    return e.operator !== t.operator ? null : "greater" === t.operator ? {
                        operator: e.operator,
                        value: Math.min(t.value, e.value)
                    } : {
                        operator: e.operator,
                        value: Math.max(e.value, t.value)
                    }
                }(e, t) : e === t ? e : null
            }

            function l(e, t) {
                const s = (0, o.getMarketFieldValuesByScreenerType)(e.screener_type),
                    n = (0, o.getMarketFieldValuesByScreenerType)(r.ScreenerType.Stock).america;
                let l, a = [];
                for (const i of e.markets) s[i] && (l = s[i][t] || n[t], l && Array.isArray(l) && (d = a, c = l, a = [...new Set([...d, ...c])].sort(((e, t) => e - t))));
                var d, c;
                i.fields[t].values = l
            }
        },
        125316: (e, t, s) => {
            "use strict";
            s.d(t, {
                ofTheSameType: () => i,
                isGlobalScreenerUnavailable: () => o
            });
            const i = (e, t) => Object.prototype.toString.call(e) === Object.prototype.toString.call(t),
                o = () => !window.is_authenticated
        },
        194577: (e, t, s) => {
            "use strict";
            s.d(t, {
                defaultStockMarket: () => n,
                markets: () => o
            });
            var i = s(249219);
            const o = (r = (0, i.getMarketsByScreenerType)("stock"), Object.entries(r).map((([e, t]) => {
                const s = t.group;
                return {
                    flag: t.flag,
                    name: t.title,
                    desc: t.stocks.join(", "),
                    country: t.country,
                    group: s,
                    value: e
                }
            })));
            var r;
            const n = o.find((e => e.value === (0, i.getDefaultStockMarket)()))
        },
        286974: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => c
            });
            var i = s(142544),
                o = (s(842146), s(823127)),
                r = s(213398);
            const n = s(272001).getLogger("Ui.TvControlCheckbox"),
                l = {
                    labelWrapper: '{{#hasLabel}}<label>{{#labelLeft}}<span class="tv-control-checkbox__label {{#labelAddClass}}{{labelAddClass}}{{/labelAddClass}}">{{labelLeft}}</span>{{/labelLeft}}{{> inputWrapper }}{{#labelRight}}<span class="tv-control-checkbox__label {{#labelAddClass}}{{labelAddClass}}{{/labelAddClass}}">{{labelRight}}</span>{{/labelRight}}</label>{{/hasLabel}}{{^hasLabel}}{{> inputWrapper }}{{/hasLabel}}',
                    inputWrapper: '<{{ tag }} class="{{ customClass }}{{#disabled}} i-disabled{{/disabled}}">{{^hasCheckbox}}{{> checkbox }}{{/hasCheckbox}}{{> box }}</{{ tag }}>',
                    checkbox: '<input{{#id}} id="{{ id }}"{{/id}} class="{{> checkboxClass }}" type="checkbox"{{#name}} name="{{ name }}"{{/name}}{{#checked}} checked{{/checked}}{{#disabled}} disabled{{/disabled}}>',
                    checkboxClass: "{{ customClass }}__input",
                    box: '<span class="{{ customClass }}__box {{#boxAddClass}}{{boxAddClass}}{{/boxAddClass}}">' + s(481516) + "</span>"
                },
                a = "i-inited";
            class d {
                constructor({
                    customClass: e = "tv-control-checkbox",
                    $checkbox: t,
                    tag: s,
                    id: i,
                    name: r,
                    checked: l,
                    disabled: d,
                    labelLeft: c,
                    labelRight: h,
                    labelAddClass: u,
                    boxAddClass: p
                }) {
                    this.$el = null, void 0 === s && (s = c || h ? "span" : "label");
                    const _ = t instanceof o && !!t.length;
                    if (_) {
                        if (!t.is("input[type=checkbox]")) return void n.logError("`$checkbox` need to be input[type=checkbox]");
                        if (t.hasClass(a)) return;
                        this._setInputId(t, i), this._setInputClass(t, e), this._setInputName(t, r), this._setInputChecked(t, l), this._setInputDisabled(t, d), l = !!t.prop("checked"), d = !!t.attr("disabled")
                    }
                    this.$el = this.render({
                        $checkbox: t,
                        hasCheckbox: _,
                        customClass: e,
                        tag: s,
                        id: i,
                        name: r,
                        checked: l,
                        disabled: d,
                        labelLeft: c,
                        labelRight: h,
                        hasLabel: c || h,
                        labelAddClass: u,
                        boxAddClass: p
                    }), this.$checkbox = _ ? t : this.$el.find("input[type=checkbox]")
                }
                _setInputId(e, t) {
                    void 0 !== t && e.attr("id", t)
                }
                _setInputClass(e, t) {
                    const s = r.render(l.checkboxClass, {
                        customClass: t
                    });
                    e.addClass(s)
                }
                _setInputName(e, t) {
                    void 0 !== t && e.attr("name", t)
                }
                _setInputChecked(e, t) {
                    void 0 !== t && e.prop("checked", !!t)
                }
                _setInputDisabled(e, t) {
                    void 0 !== t && (t ? e.setAttribute("disabled", "disabled") : e.removeAttr("disabled"))
                }
                render(e) {
                    const t = e.$checkbox,
                        s = o(r.render(l.labelWrapper, e, l));
                    if (e.hasCheckbox) {
                        s.insertBefore(t);
                        s.find("." + e.customClass).andSelf().filter("." + e.customClass).eq(0).prepend(t.detach()), t.addClass(a)
                    }
                    return s
                }
                set checked(e) {
                    this._setInputChecked(this.$checkbox, !!e)
                }
                get checked() {
                    return !!this.$checkbox.prop("checked")
                }
            }
            o.fn.tvControlCheckbox = (0, i.createTvBlockWithInstance)("tv-control-checkbox", (function(e, t = {}) {
                return new d(TradingView.merge(t, {
                    $checkbox: e
                }))
            }));
            const c = d
        },
        30311: (e, t, s) => {
            "use strict";
            s.r(t);
            var i = s(777754),
                o = s(778785),
                r = (s(31008), s(142544)),
                n = (s(875561), s(823127)),
                l = s(213398),
                a = s(725977);
            const d = {
                wrap: '<span class="tv-control-select__wrap tv-dropdown-behavior {{ class }}{{# touch }} tv-control-select__wrap--touch{{/ touch }}{{# disabled }} i-disabled{{/ disabled }}{{# readonly }} tv-control-select__wrap--readonly{{/ readonly}}"><span class="tv-control-select__control{{^ touch }} tv-dropdown-behavior__button{{/ touch }}{{# disabled }} i-disabled{{/ disabled }}"><span class="tv-control-select__control-inner"></span></span>{{^ touch }}<span class="tv-control-select__dropdown tv-dropdown-behavior__body {{ dropdown_class }} i-hidden"><span class="tv-control-select__scroll tv-dropdown-behavior__scroll"><span class="tv-dropdown-behavior__inscroll">{{> route }}</span></span></span>{{/ touch }}<span class="tv-control-select__caret js-dropdown-toggle"></span></span>',
                route: "{{# items }}{{# option }}{{> option }}{{/ option }}{{^ option }}{{# optgroup }}{{> optgroup }}{{/ optgroup }}{{/ option }}{{/ items }}",
                optgroup: '{{# label }}<span class="tv-dropdown-behavior__item tv-control-select__optgroup-label">{{ label }}</span>{{/ label }}{{> route }}{{# separator }}<hr class="tv-control-select__optgroup-separator">{{/ separator }}',
                option: `<span data-id="{{ id }}" class="tv-dropdown-behavior__item tv-control-select__option{{# disabled }} i-disabled{{/ disabled }}">\n\t\t\t<span class="tv-control-select__option-wrap">\n\t\t\t{{# multiple }}\n\t\t\t\t<span class="tv-control-checkbox">\n\t\t\t\t\t<input class="tv-control-checkbox__input" type="checkbox" {{# selected }} checked{{/ selected }}>\n\t\t\t\t\t<span class="tv-control-checkbox__box">${s(481516)}</span>\n\t\t\t\t</span>\n\t\t\t\t<span class="tv-control-checkbox__label">{{ label }}</span>\n\t\t\t{{/ multiple }}\n\t\t\t{{^ multiple }}\n\t\t\t\t{{ label }}\n\t\t\t{{/ multiple }}\n\t\t\t</span>\n\t\t</span>`
            };
            class c {
                constructor(e = {}) {
                    this._options = Object.assign({
                            noAnimation: !0
                        }, e), this.touch = o.mobiletouch, this.$select = this._options.$select, this._selectElement = this.$select[0], this.multiple = Boolean(this.$select.attr("multiple")), this._minDisplayCount = this._options.minDisplayCount || 1, this._emptyString = this._options.emptyString || i.t(null, {
                            context: "combobox_input"
                        }, s(196626)), this._defaultPlaceHoder = this._options.defaultPlaceHoder || !1, this.disabled = Boolean(this.$select.is(":disabled")),
                        this.readonly = this._options.readonly, this.options = [], this.filterQuery = [], this.items = this._parseDomItems(this.$select), this._render(), e.initialValue && this.val(e.initialValue), this.$el.insertBefore(this.$select), this.$select.detach().addClass("i-inited").appendTo(this.$el)
                }
                val(e) {
                    this.multiple ? this._setMultipleValues(e) : this._setSingleValue(this._findOption(e))
                }
                enable() {
                    this.disabled = !1, this.$el.add(this.$dropdown).removeClass("i-disabled"), this.touch || (this.$el.tvDropdown("enable"), this.$control.attr("tabindex", this.$select.attr("tabindex") || 0))
                }
                disable() {
                    this.disabled = !0, this.$el.add(this.$dropdown).addClass("i-disabled"), this.touch || (this.$el.tvDropdown("disable"), this.$control.removeAttr("tabindex"))
                }
                setReadonly(e) {
                    this.readonly = e, this.$el.toggleClass("tv-control-select__wrap--readonly", e), this.$controlInner.toggleClass("tv-control-select__control-inner--readonly", e), this.$el.tvDropdown("setReadonly", e)
                }
                toggle() {
                    this.disabled || this.readonly || (this.touch ? this.$select.click() : this.$el.tvDropdown("toggle"))
                }
                open() {
                    this.disabled || this.readonly || (this.touch ? this.$select.click() : this.$el.tvDropdown("open"))
                }
                close() {
                    this.disabled || this.readonly || (this.touch ? this.$select.click() : (this._focusOption(this._selectElement.selectedIndex), this.$el.tvDropdown("close")))
                }
                destroy() {
                    this.$select.off("change"), this.$dropdown && this.$dropdown.off("click"), this.$select.removeClass("i-inited").insertBefore(this.$el), this.$el.tvDropdown("destroy"), this.$el.remove()
                }
                updateItems() {
                    this.options = [], this.items = this._parseDomItems(this.$select);
                    const e = this._renderDropdown();
                    if (!this.touch) {
                        this.$dropdown.find(".tv-control-select__option").remove();
                        const t = this.$dropdown.find(".tv-dropdown-behavior__inscroll");
                        this.$options = e.find(".tv-control-select__option");
                        for (let e = 0; e < this.$options.length; e++) {
                            const s = n(this.$options[e]),
                                i = s.data("id");
                            this.options[i] && (this.options[i].$el = s, t.append(s))
                        }
                    }
                    this.multiple ? (this._updateSelectBoxTitle(), this._updateCheckBoxes()) : this._updateSingleView(this._selectElement.selectedIndex)
                }
                _focusOption(e) {
                    const t = this.options[e].$el;
                    if (this._focusedOption = e, !this.touch) {
                        if (this._clearFocus(), t.addClass("i-active"), !this.dropdownScroll || !this.opened) return;
                        const e = this.dropdownScroll.currentPosition(),
                            s = t.outerHeight(),
                            i = t.position().top,
                            o = this.dropdownScroll.getContainerHeightWithoutHeader(),
                            r = -e + o < i + s;
                        i < -e ? this.dropdownScroll.scrollTo(i) : r && this.dropdownScroll.scrollTo(i + s)
                    }
                }
                _setSingleValue(e) {
                    const t = this.options[e].value;
                    (this.$select.val() && this.$select.val().toString()) !== t.toString() && this.$select.val(t).trigger("change")
                }
                _updateSingleView(e) {
                    const t = this.options[e];
                    t && (this._focusOption(e), this._selectElement.selectedIndex = e, this.$controlInner.text(t.label), this.$controlInner.toggleClass("tv-control-select__control-inner--option-disabled", t.disabled))
                }
                _toggleOption(e) {
                    const t = this.options[e].value,
                        s = this.$select.val() || [],
                        i = s.indexOf(t);
                    if (-1 !== i) s.splice(i, 1);
                    else if (s.length) {
                        const e = this.options[this._findOption(t)].id,
                            i = s.find((t => this.options[this._findOption(t)].id > e));
                        s.splice(i ? s.indexOf(i) : 0, 0, t)
                    } else s.push(t);
                    this._setMultipleValues(s)
                }
                _updateCheckBoxes() {
                    const e = this.$select.val() || [];
                    for (let t = 0; t < this.items.length; t++) {
                        const s = this.items[t];
                        s.$el.find(".tv-control-checkbox__input").prop("checked", -1 !== e.indexOf(s.value))
                    }
                }
                _updateSelectBoxTitle() {
                    const e = this.$select.val() || [];
                    if (e.length && !this._defaultPlaceHoder)
                        if (e.length === this.items.length) this.$controlInner.text(i.t(null, {
                            context: "combobox_input"
                        }, s(117456)));
                        else if (e.length > this._minDisplayCount) this.$controlInner.text(i.t(null, {
                        plural: "{number} items",
                        count: e.length,
                        context: "combobox_input"
                    }, s(453508)).format(e.length));
                    else {
                        const t = e.map((e => this.options[this._findOption(e)].label));
                        this.$controlInner.text(t.join(", "))
                    } else this.$controlInner.text(this._emptyString)
                }
                _setMultipleValues(e) {
                    this.$select.find("option").prop("selected", !1);
                    for (let t = 0; t < e.length; t++) {
                        const s = e[t];
                        this.$select.find(`option[value="${s}"]`).prop("selected", !0)
                    }
                    this.$select.trigger("change")
                }
                _clearFocus() {
                    this.$options.removeClass("i-active")
                }
                _findOption(e) {
                    const t = Object.keys(this.options);
                    for (let s = 0; s < t.length; s++)
                        if (this.options[t[s]].value.toString() === e.toString()) return this.options[t[s]].id
                }
                _parseDomItems(e) {
                    const t = e.children(),
                        s = [];
                    for (let e = 0; e < t.length; e++) {
                        const i = n(t[e]);
                        let o;
                        "optgroup" === i.prop("tagName").toLowerCase() ? o = {
                            optgroup: !0,
                            separator: Boolean(this._options.showOptgroupSeparators),
                            label: i.attr("label"),
                            items: this._parseDomItems(i)
                        } : "option" === i.prop("tagName").toLowerCase() && (o = {
                            id: i[0].index,
                            option: !0,
                            label: i.text().replace(/\//g, "​$&​"),
                            value: i.attr("value"),
                            disabled: i.is(":disabled")
                        }, this.options[o.id] = o), s.push(o)
                    }
                    return s
                }
                _render() {
                    if (this.$el = this._renderDropdown(), this.$control = this.$el.find(".tv-control-select__control"), this.$controlInner = this.$el.find(".tv-control-select__control-inner"), !this.touch) {
                        this.$dropdown = this.$el.find(".tv-control-select__dropdown"), this.$options = this.$el.find(".tv-control-select__option");
                        for (let e = 0; e < this.$options.length; e++) {
                            const t = n(this.$options[e]),
                                s = t.data("id");
                            this.options[s] && (this.options[s].$el = t)
                        }
                    }
                    this.multiple ? (this._updateSelectBoxTitle(), this._updateCheckBoxes()) : (-1 === this._selectElement.selectedIndex && (this._selectElement.selectedIndex = 0), this._updateSingleView(this._selectElement.selectedIndex)), this.$select.on("change", (e => {
                        this.multiple ? (this._updateSelectBoxTitle(), this._updateCheckBoxes()) : this._updateSingleView(this._findOption(this.$select.val()))
                    })), this.touch || (this.$el.tvDropdown({
                        scroll: !0,
                        adaptBody: !0,
                        boundingElement: this._options.boundingElement,
                        maxHeight: this._options.maxHeight,
                        dropdownWidth: this._options.dropdownWidth,
                        noAnimation: this._options.noAnimation,
                        closeWithEsc: this._options.closeWithEsc
                    }), this.dropdownScroll = this.$el.tvDropdown("get", "scroll"), this.$dropdown.on("click", ".tv-control-select__option", (e => {
                        const t = parseInt(n(e.currentTarget).data("id"));
                        this.options[t] && !this.options[t].disabled && (this.multiple ? this._toggleOption(t) : (this._setSingleValue(t), this.close()))
                    })), this.$el.on("beforeOpenMenu", (() => {
                        this.opened = !0
                    })), this.$el.on("afterCloseMenu", (() => {
                        this.opened = !1, this.filterQuery = [], this.multiple || this._focusedOption.toString() === this._selectElement.selectedIndex.toString() || this._focusOption(this._selectElement.selectedIndex), this.multiple && this._clearFocus()
                    })), this.$el.on("click", (() => {
                        this.$control.focus()
                    })), this.$el.on("keydown", (e => {
                        this._filter(e)
                    })), this.disabled ? this.disable() : this.enable())
                }
                _renderDropdown() {
                    return n(l.render(d.wrap, {
                        items: this.items,
                        class: this.$select.attr("class"),
                        touch: this.touch,
                        multiple: this.multiple,
                        disabled: this.disabled,
                        readonly: this.readonly,
                        dropdown_class: this._options.addDropdownClass
                    }, d)).removeClass("tv-control-select")
                }
                _filter(e) {
                    if (9 === e.which) return void this.close();
                    if (13 === e.which && !this.opened) return;
                    if ((40 === e.which || 32 === e.which) && !this.opened) return this.open(), void e.preventDefault();
                    e.preventDefault(), this.opened || this.open();
                    const t = String.fromCharCode(e.which).toLowerCase();
                    if (t && -1 === [9, 13, 27, 38, 40].indexOf(e.which)) {
                        this.filterQuery.push(t);
                        const e = this.filterQuery.join("");
                        let s;
                        const i = Object.keys(this.options);
                        for (let t = 0; t < i.length; t++)
                            if (0 === this.options[i[t]].label.toLowerCase().indexOf(e) && !this.options[i[t]].disabled) {
                                s = this.options[i[t]].id;
                                break
                            }
                        void 0 !== s && this._focusOption(s), this.clearFilter && clearTimeout(this.clearFilter), this.clearFilter = setTimeout((() => {
                            this.filterQuery = []
                        }), 500)
                    }
                    32 !== e.which && 13 !== e.which || !this.opened || (this.multiple ? this._toggleOption(this._focusedOption) : (this._setSingleValue(this._focusedOption), this.close(), this.$el.one("keyup", (e => e.stopPropagation()))));
                    const s = e => {
                        let t;
                        if (this.options[this._focusedOption]) {
                            const s = this.options[this._focusedOption].$el[e](this.$dropdown, ".tv-control-select__option:not(.i-disabled)");
                            t = s.length ? s.data("id") : this._focusedOption
                        } else t = this.$options.first(".tv-control-select__option:not(.i-disabled)").data("id");
                        return t
                    };
                    40 === e.which && (this.filterQuery = [], this._focusOption(s("nextUntil"))), 38 === e.which && (this.filterQuery = [], this._focusOption(s("prevUntil"))), 27 === e.which && this.close()
                }
            }
            n.fn.tvControlSelect = (0, r.createTvBlockWithInstance)("tv-control-select", (function(e, t = {}) {
                return new c(a.extend(t, {
                    $select: e
                }))
            }))
        },
        875561: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                DropdownView: () => l
            });
            s(965426), s(494386);
            var i = s(142544),
                o = s(663989),
                r = s(791325),
                n = s(823127);
            class l {
                constructor(e, t = {}) {
                    this.$el = e, this.$wrap = t.$wrap || e.find(".tv-dropdown-behavior__button"), this.$body = t.$body || e.find(".tv-dropdown-behavior__body"), this.notCloseWithCtrl = !!t.notCloseWithCtrl && t.notCloseWithCtrl, this.closeWithEsc = void 0 === t.closeWithEsc || t.closeWithEsc, this.closeWithEsc && this.$el.attr("tabIndex", 0), (e.data("scroll") || t.scroll) && (this.$scroll = this.$body.find(".tv-dropdown-behavior__scroll"), this.$inScroll = this.$scroll.find(".tv-dropdown-behavior__inscroll"), this.scroll = new o.SidebarCustomScroll(this.$scroll[0], this.$inScroll[0], {
                        showTopShadow: !1,
                        showBottomShadow: !1
                    }), this.$scrollBar = n(this.scroll.getScrollBar()), this.$scrollBar && this.$scrollBar.on("mousedown.tv-dropdown-view-scroll", (() => {
                        this.offClickOutside(),
                            n(document).on("mouseup.tv-dropdown-view-scroll", (() => {
                                this.onClickOutside(), n(document).off("mouseup.tv-dropdown-view-scroll")
                            }))
                    }))), (e.data("adaptBody") || t.adaptBody) && (this._adaptBody = !0), (e.data("adaptOnlyInScrollHeight") || t.adaptOnlyInScrollHeight) && (this._adaptOnlyInScrollHeight = !0), this._fitScreen = e.data("fitScreen") || t.fitScreen, this._maxHeight = e.data("maxHeight") || t.maxHeight, this._dropdownWidth = e.data("dropdownWidth") || t.dropdownWidth, this._boundingElement = t.boundingElement, this.$wrap.add(e.find(".js-dropdown-toggle")).on("click", (e => {
                        n(e.currentTarget).hasClass("js-prevent-dropdown") || this.toggle()
                    })), this._checkIgnoreClickOutside = []
                }
                toggle() {
                    this.opened ? this.close(!0) : this.open()
                }
                open() {
                    this.opened || this.disabled || this.readonly || (this.$el.trigger("beforeOpenMenu"), this.$body.removeClass("i-hidden").addClass("i-opened"), this.$wrap.addClass("i-dropped"), this.$el.addClass("i-opened"), "horz" === this._fitScreen && this.fitHorizontally(), this._adaptBody && this.adaptBody(), this.onClickOutside(), this.$el.trigger("updateScroll"), this.$el.trigger("afterOpenMenu"), this.opened = !0, this.closeWithEsc && this.$el.on("keypress keyup", (e => {
                        e.keyCode === r.ESC && this.close(!0)
                    })))
                }
                onClickOutside() {
                    setTimeout((() => {
                        this.$body.on("clickoutside", (e => {
                            this._checkIgnoreClickOutside.length && this._checkIgnoreClickOutside.some((t => t(e))) || this.close(!0)
                        }))
                    }), 0)
                }
                offClickOutside() {
                    this.$body.off("clickoutside")
                }
                setCheckIgnoreClickOutside(e) {
                    this._checkIgnoreClickOutside.push(e)
                }
                dropCheckIgnoreClickOutside(e) {
                    var t = this._checkIgnoreClickOutside.indexOf(e); - 1 !== t && this._checkIgnoreClickOutside.splice(t, 1)
                }
                close(e = !1) {
                    !this.opened || this.disabled || this.readonly || !e && this.notCloseWithCtrl && (window.event.ctrlKey || window.event.metaKey) || (this.offClickOutside(), this.$wrap.removeClass("i-dropped"), this.$el.trigger("beforeCloseMenu"), this.$body.removeClass("i-opened").addClass("i-hidden"), this.$el.removeClass("i-opened"), this.closeWithEsc && this.$el.off("keypress keyup"), this.opened = !1, this.$el.trigger("afterCloseMenu"))
                }
                isOpened() {
                    return this.opened
                }
                updateScroll() {
                    this.scroll && (this.scroll.updateScrollBar(), this.scroll.scrollToStart())
                }
                enable() {
                    this.$wrap.removeClass("i-disabled"), this.disabled = !1
                }
                disable() {
                    this.$wrap.addClass("i-disabled"), this.disabled = !0
                }
                setReadonly(e) {
                    this.readonly = e
                }
                adaptBody() {
                    const e = this.$body,
                        t = this.$wrap.get(0).getBoundingClientRect(),
                        s = this._boundingElement ? this._boundingElement.getBoundingClientRect() : {
                            top: 0,
                            bottom: window.innerHeight,
                            height: window.innerHeight
                        },
                        i = parseFloat(e.css("padding-top")),
                        o = parseFloat(e.css("padding-bottom")),
                        r = this.$inScroll.outerHeight(!0) + i + o;
                    if (this.scroll && this.scroll.scrollToStart(), this._adaptOnlyInScrollHeight) {
                        const i = e.find(".js-dropdown-dummy"),
                            r = i ? parseFloat(i.css("padding-bottom")) + parseFloat(i.css("margin-bottom")) : 0,
                            n = t.top + t.height + r;
                        return void this.$el.find(".tv-dropdown-behavior__scroll").css("maxHeight", s.bottom - o - n - 25)
                    }
                    const n = this._maxHeight || r,
                        l = t.top + n + 25 <= s.bottom,
                        a = s.top + 15 + n <= t.bottom;
                    let d, c = this._maxHeight || "auto";
                    if (l) d = -i;
                    else if (a) d = -n + t.height + o;
                    else {
                        d = -t.top + s.top + 15;
                        const e = s.height - 15 - 25;
                        n > e && (c = e)
                    }
                    e.css("top", d), e.height(c), this._dropdownWidth && e.width(this._dropdownWidth)
                }
                fitHorizontally() {
                    this.$body.css("marginLeft", 0);
                    const e = document.body.getBoundingClientRect(),
                        t = parseFloat(n(document.body).css("paddingRight")),
                        s = this.$body.offset();
                    s.right = s.left + this.$body.outerWidth();
                    const i = Math.max(Math.min(0, e.right - t - s.right), e.left - s.left);
                    i && this.$body.css("marginLeft", i)
                }
                destroy() {
                    this.scroll && this.scroll.destroy(), this.offClickOutside(), this.$el.find(".js-dropdown-toggle").off("click"), this.$wrap.off("click")
                }
            }
            n.fn.tvDropdown = (0, i.createTvBlockWithInstance)("tv-dropdown", (function(e, t = {}) {
                return new l(e, t)
            }))
        },
        865537: (e, t, s) => {
            "use strict";

            function i(e) {
                if (e.includes("|")) {
                    const [t, s, i] = e.split("|"), {
                        proName: r,
                        shortName: n
                    } = o(t);
                    return {
                        proName: r,
                        shortName: n,
                        interval: s || void 0,
                        currency: i || void 0
                    }
                } {
                    const {
                        proName: t,
                        shortName: s
                    } = o(e);
                    return {
                        proName: t,
                        shortName: s,
                        interval: void 0,
                        currency: void 0
                    }
                }
            }

            function o(e) {
                let t, s;
                return e.includes(":") ? (s = e.split(":")[1], t = e) : s = e, {
                    proName: t,
                    shortName: s
                }
            }
            s.d(t, {
                getSymbolDataFromSymbolString: () => i,
                getShortNameAndProName: () => o
            })
        },
        19138: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M12.65 5.1a9.07 9.07 0 0 1 2.7 0 12.44 12.44 0 0 1 2.13 4.61c-1.06.2-2.24.29-3.48.29a18.6 18.6 0 0 1-3.48-.3 12.44 12.44 0 0 1 2.13-4.6zm-.53-.92a10 10 0 0 0 0 19.65 10.05 10.05 0 0 0 3.76 0 10 10 0 0 0 0-19.65 10.05 10.05 0 0 0-3.76 0zm4.68 1.26a14.4 14.4 0 0 1 1.66 4.05 7.06 7.06 0 0 0 2.5-1.2 9.01 9.01 0 0 0-4.16-2.85zm4.75 3.66a8.12 8.12 0 0 1-2.88 1.37 18.93 18.93 0 0 1 0 7.06c1.1.3 2.08.74 2.88 1.37a8.96 8.96 0 0 0 0-9.8zm-.59 10.6a7.05 7.05 0 0 0-2.5-1.19 14.1 14.1 0 0 1-1.65 4.04 9.01 9.01 0 0 0 4.15-2.85zm-5.61 3.2a12.27 12.27 0 0 0 2.14-4.61c-1.07-.2-2.25-.29-3.49-.29-1.25 0-2.42.09-3.49.3a12.27 12.27 0 0 0 2.14 4.6 9.06 9.06 0 0 0 2.7 0zm-4.16-.35a14.1 14.1 0 0 1-1.65-4.03c-.96.27-1.8.66-2.5 1.19a9.01 9.01 0 0 0 4.15 2.84zM6.45 18.9a8.57 8.57 0 0 1 2.87-1.35 19.19 19.19 0 0 1 .01-7.1A8.58 8.58 0 0 1 6.45 9.1a8.96 8.96 0 0 0 0 9.8zm.6-10.6a9.01 9.01 0 0 1 4.15-2.86 14.38 14.38 0 0 0-1.65 4.04 7.54 7.54 0 0 1-2.5-1.19zM10 14c0-1.15.1-2.27.3-3.32 1.17.23 2.42.32 3.7.32 1.27 0 2.53-.09 3.7-.3a17.93 17.93 0 0 1 0 6.61A20 20 0 0 0 14 17c-1.29 0-2.54.09-3.7.32A18.2 18.2 0 0 1 10 14z"/></svg>'
        },
        470088: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 15" width="22" height="15"><g fill="none" fill-rule="evenodd" stroke-width="2"><path stroke="#757575" d="M6.25 5.812L11 10.087l4.75-4.275M11 9.868V.315"/><path stroke="#ADAEB0" d="M21 10v4H1v-4"/></g></svg>'
        },
        820713: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><g transform="translate(-8 -7)"><path fill-rule="evenodd" d="M17 11c1.38 0 2.63.56 3.54 1.46L18 15h6V9l-2.05 2.05A6.976 6.976 0 0 0 17 9c-3.53 0-6.43 2.61-6.92 6h2.02a5 5 0 0 1 4.9-4zm6.92 6H21.9a5 5 0 0 1-4.9 4c-1.38 0-2.63-.56-3.54-1.46L16 17h-6v6l2.05-2.05A6.976 6.976 0 0 0 17 23c1.55 0 2.98-.51 4.14-1.36l1.5-1.5A6.89 6.89 0 0 0 23.92 17z"/></g></svg>'
        },
        376844: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="299 131 12 7" width="12" height="7"><path fill="none" d="M300 132l5 5 5-5"/></svg>'
        },
        372665: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path d="M10.893 9.512l.458 3.624c.014.105-.006.16-.02.176-.028.03-.109.005-.182-.03L7.812 11.73a1.973 1.973 0 0 0-.811-.16c-.302 0-.59.057-.81.16l-3.338 1.552c-.118.056-.164.051-.182.03-.014-.016-.034-.07-.02-.178L3.11 9.51c.06-.503-.162-1.18-.505-1.54L.087 5.302c-.085-.091-.09-.148-.086-.158.003-.01.04-.053.16-.077l3.621-.689c.491-.09 1.069-.506 1.315-.948L7.004 0l1.902 3.43c.246.442.824.859 1.312.947l3.617.69c.123.024.162.068.164.077.003.01-.003.066-.089.157L11.4 7.97c-.348.367-.57 1.045-.506 1.543z"/></svg>'
        },
        959597: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path d="M9.901 9.639c-.102-.797.218-1.775.77-2.356l1.438-1.527-2.07-.395c-.784-.142-1.615-.742-2.008-1.446L7.003 2.06 5.97 3.917c-.391.702-1.222 1.301-2 1.443l-2.08.396 1.44 1.526c.547.577.866 1.549.77 2.353l-.262 2.086 1.93-.897a2.95 2.95 0 0 1 1.233-.254c.44 0 .87.085 1.233.254l1.93.897-.263-2.082zm.992-.127l.458 3.624c.014.105-.006.16-.02.176-.028.03-.109.005-.182-.03L7.812 11.73a1.973 1.973 0 0 0-.811-.16c-.302 0-.59.057-.81.16l-3.338 1.552c-.118.056-.164.051-.182.03-.014-.016-.034-.07-.02-.178L3.11 9.51c.06-.503-.162-1.18-.505-1.54L.087 5.302c-.085-.091-.09-.148-.086-.158.003-.01.04-.053.16-.077l3.621-.689c.491-.09 1.069-.506 1.315-.948L7.004 0l1.902 3.43c.246.442.824.859 1.312.947l3.617.69c.123.024.162.068.164.077.003.01-.003.066-.089.157L11.4 7.97c-.348.367-.57 1.045-.506 1.543z"/></svg>'
        },
        481516: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11px" height="9px"><path fill="none" fill-rule="evenodd" stroke-width="2" d="M1 3.22l3.415 3.496L10 1"/></svg>'
        },
        690863: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 9" width="6" height="9"><path fill="none" stroke="currentColor" d="M1 1l3.5 3.5L1 8"/></svg>'
        },
        663719: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M0 46l35-35 14 14-35 35H0zM39 7l6-6c5-5 19 9 14 14l-6 6z"/></svg>'
        },
        83170: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 12" width="14" height="12"><g fill="none" fill-rule="evenodd" stroke="#9DB2BD"><path d="M1 0l12 12M13 0L1 12"/></g></svg>'
        },
        630001: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 22" width="19" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M5 1v9.13a4 4 0 0 1 0 7.75V21a1 1 0 1 1-2 0v-3-.12a4 4 0 0 1 0-7.75V1a1 1 0 0 1 2 0zM2 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm12-9.88V1a1 1 0 1 1 2 0v3.12a4 4 0 0 1 0 7.75V21a1 1 0 1 1-2 0v-9.13a4 4 0 0 1 0-7.75zM15 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>'
        },
        62555: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><g fill="none" stroke="currentColor" stroke-width="2" transform="translate(1 1)"><circle cx="6" cy="6" r="6"/><path d="M10 10l4 4"/></g></svg>'
        },
        966631: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path d="M3.06 6.295C2.37 7.397 2 8.67 2 10c0 3.866 3.134 7 7 7s7-3.134 7-7-3.134-7-7-7V2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8c0-1.556.444-3.007 1.212-4.236l.848.53zm0 0C2.37 7.397 2 8.67 2 10c0 3.866 3.134 7 7 7s7-3.134 7-7-3.134-7-7-7V2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8c0-1.556.444-3.007 1.212-4.236l.848.53zM6 2.5L9 0v5L6 2.5z"/></svg>'
        },
        944499: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 12" width="14" height="12" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.71 1.29H1.3v9.42H2.7V1.3zM1.3 0C.58 0 0 .58 0 1.29v9.42C0 11.42.58 12 1.29 12H2.7C3.42 12 4 11.42 4 10.71V1.3C4 .58 3.42 0 2.71 0H1.3zM7.7 1.29H6.3v9.42H7.7V1.3zM6.3 0C5.58 0 5 .58 5 1.29v9.42c0 .71.58 1.29 1.29 1.29H7.7C8.42 12 9 11.42 9 10.71V1.3C9 .58 8.42 0 7.71 0H6.3zm5 1.29h1.42v9.42H11.3V1.3zm-1.29 0C10 .58 10.58 0 11.29 0h1.42C13.42 0 14 .58 14 1.29v9.42c0 .71-.58 1.29-1.29 1.29H11.3c-.71 0-1.29-.58-1.29-1.29V1.3z"/></svg>'
        },
        764162: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14" width="16" height="14"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 9v4H1V9M8 9V0"/><path d="M5 6l3 3 3-3"/></g></svg>'
        },
        326529: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="#ADAEB0" fill-rule="evenodd" d="M12.5 11h-.79l-.28-.27A6.47 6.47 0 0 0 13 6.5 6.5 6.5 0 1 0 6.5 13c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z"/></svg>'
        },
        711732: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10"><g fill="none" stroke="#758696" stroke-width="2"><path d="M1.125 9.11L9.13 1.104M1.125 1.105L9.13 9.11"/></g></svg>'
        },
        891250: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 3" width="8" height="3"><path d="M0 0 L4 3 L8 0 Z"/></svg>'
        },
        182951: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 3" width="8" height="3"><path d="M0 3 L4 0 L8 3 Z"/></svg>'
        },
        407499: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 26" width="3" height="13" fill="currentColor"><circle cx="3" cy="3" r="3"/><circle cx="3" cy="13" r="3"/><circle cx="3" cy="23" r="3"/></svg>'
        }
    }
]);
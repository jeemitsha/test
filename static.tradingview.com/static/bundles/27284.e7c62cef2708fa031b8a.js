(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [27284], {
        946587: e => {
            e.exports = {
                wrapper: "wrapper-bUw_gKIQ",
                input: "input-bUw_gKIQ",
                box: "box-bUw_gKIQ",
                icon: "icon-bUw_gKIQ",
                noOutline: "noOutline-bUw_gKIQ",
                "intent-danger": "intent-danger-bUw_gKIQ",
                check: "check-bUw_gKIQ",
                dot: "dot-bUw_gKIQ"
            }
        },
        776946: e => {
            e.exports = {
                loaderWrap: "loaderWrap-aELfTl0o",
                big: "big-aELfTl0o",
                loader: "loader-aELfTl0o"
            }
        },
        110852: e => {
            e.exports = {
                row: "row-HxlnbRyI",
                line: "line-HxlnbRyI",
                hint: "hint-HxlnbRyI"
            }
        },
        269655: e => {
            e.exports = {
                menu: "menu-Oq10ZTMF"
            }
        },
        308794: e => {
            e.exports = {
                button: "button-cC4UjNEF",
                disabled: "disabled-cC4UjNEF",
                active: "active-cC4UjNEF",
                hidden: "hidden-cC4UjNEF"
            }
        },
        203223: (e, t, n) => {
            "use strict";
            n.d(t, {
                CheckboxInput: () => c
            });
            var s = n(50959),
                o = n(497754),
                i = n(83436),
                a = n(465890),
                r = n(946587),
                l = n.n(r);

            function c(e) {
                const t = o(l().box, l()[`intent-${e.intent}`], {
                        [l().check]: !Boolean(e.indeterminate),
                        [l().dot]: Boolean(e.indeterminate),
                        [l().noOutline]: -1 === e.tabIndex
                    }),
                    n = o(l().wrapper, e.className);
                return s.createElement("span", {
                    className: n,
                    title: e.title,
                    style: e.style
                }, s.createElement("input", {
                    id: e.id,
                    tabIndex: e.tabIndex,
                    className: l().input,
                    type: "checkbox",
                    name: e.name,
                    checked: e.checked,
                    disabled: e.disabled,
                    value: e.value,
                    autoFocus: e.autoFocus,
                    role: e.role,
                    onChange: function() {
                        e.onChange && e.onChange(e.value)
                    },
                    ref: e.reference,
                    "aria-required": e["aria-required"]
                }), s.createElement("span", {
                    className: t
                }, s.createElement(i.Icon, {
                    icon: a,
                    className: l().icon
                })))
            }
        },
        542682: (e, t, n) => {
            "use strict";
            n.d(t, {
                isTouchEvent: () => o
            });
            var s = n(778785);

            function o(e) {
                const t = e.sourceCapabilities;
                let n = t && t.firesTouchEvents;
                return void 0 === n && (n = s.touch), n
            }
        },
        876718: (e, t, n) => {
            "use strict";
            n.d(t, {
                ContextMenuAction: () => v
            });
            var s = n(50959),
                o = n(650151),
                i = n(582305),
                a = n(501181),
                r = n(224743),
                l = n(345848),
                c = n(423582),
                u = n(787684),
                h = n(497754),
                p = n.n(h),
                m = n(612247),
                d = n(776946);

            function b(e) {
                const {
                    size: t = "normal"
                } = e;
                return s.createElement(i.ContextMenuItem, {
                    size: t,
                    label: s.createElement("div", {
                        className: p()(d.loaderWrap, d[t])
                    }, s.createElement(m.Loader, {
                        className: d.loader
                    })),
                    noInteractive: !0,
                    onMouseOver: e.onMouseOver
                })
            }
            class v extends s.PureComponent {
                constructor(e) {
                    super(e), this._itemRef = null, this._menuElementRef = s.createRef(), this._menuRef = null, this._handleClick = e => {
                        e.isDefaultPrevented() || this.state.disabled || (this._hasSubItems() ? this._showSubMenu() : (this.state.doNotCloseOnClick || (0, r.globalCloseMenu)(), this.props.action.execute(), this._trackEvent(), this.props.onExecute && this.props.onExecute(this.props.action)))
                    }, this._handleClickToolbox = () => {
                        (0, r.globalCloseMenu)()
                    }, this._handleItemMouseOver = () => {
                        this._showSubMenu(), this._setCurrentContextValue()
                    }, this._handleMenuMouseOver = () => {
                        this._setCurrentContextValue()
                    }, this._showSubMenu = () => {
                        this.props.onShowSubMenu(this.props.action)
                    }, this._calcSubMenuPos = e => (0, c.calcSubMenuPos)(e, this._itemRef), this._updateState = e => {
                        this.setState(e.getState())
                    }, this._setItemRef = e => {
                        this._itemRef = e
                    }, this._handleMenuRef = e => {
                        this._menuRef = e
                    }, this._registerSubmenu = () => {
                        var e;
                        return null === (e = this.context) || void 0 === e ? void 0 : e.registerSubmenu(this.props.action.id, (e => (0, o.ensureNotNull)(this._itemRef).contains(e) || null !== this._menuElementRef.current && this._menuElementRef.current.contains(e)))
                    }, this.state = { ...this.props.action.getState()
                    }
                }
                componentDidMount() {
                    this.props.action.onUpdate().subscribe(this, this._updateState), this.state.subItems.length && (this._unsubscribe = this._registerSubmenu()), this.props.reference && (this._itemRef = this.props.reference.current)
                }
                componentDidUpdate(e, t) {
                    var n, s, o;
                    t.loading !== this.state.loading && (null === (s = (n = this.props).onRequestUpdate) || void 0 === s || s.call(n)), 0 === t.subItems.length && this.state.subItems.length > 0 && (this._unsubscribe = this._registerSubmenu()), t.subItems.length > 0 && 0 === this.state.subItems.length && (null === (o = this._unsubscribe) || void 0 === o || o.call(this)), t.subItems !== this.state.subItems && null !== this._menuRef && this._menuRef.update()
                }
                componentWillUnmount() {
                    this.props.action.onUpdate().unsubscribe(this, this._updateState), this._unsubscribe && this._unsubscribe()
                }
                render() {
                    var e, t, n;
                    const o = null !== (e = this.state.jsxLabel) && void 0 !== e ? e : this.state.label,
                        r = (null === (t = this.context) || void 0 === t ? void 0 : t.current) ? this.context.current === this.props.action.id : this.props.isSubMenuOpened;
                    return this.state.loading ? s.createElement(b, {
                        size: this.state.size
                    }) : s.createElement(i.ContextMenuItem, {
                        theme: this.props.theme,
                        reference: null !== (n = this.props.reference) && void 0 !== n ? n : this._setItemRef,
                        onClick: this._handleClick,
                        onClickToolbox: this._handleClickToolbox,
                        onMouseOver: this._handleItemMouseOver,
                        hovered: r,
                        hasSubItems: this._hasSubItems(),
                        actionName: this.state.name,
                        checkboxInput: this.props.checkboxInput,
                        selected: this.props.selected,
                        ...this.state,
                        label: o
                    }, s.createElement(a.ContextMenu, {
                        isOpened: r,
                        items: this.state.subItems,
                        position: this._calcSubMenuPos,
                        menuStatName: this.props.menuStatName,
                        parentStatName: this._getStatName(),
                        menuElementReference: this._menuElementRef,
                        onMouseOver: this.state.subItems.length ? this._handleMenuMouseOver : void 0,
                        ref: this._handleMenuRef
                    }))
                }
                _setCurrentContextValue() {
                    var e;
                    this.state.subItems.length && (null === (e = this.context) || void 0 === e || e.setCurrent(this.props.action.id))
                }
                _hasSubItems() {
                    return this.state.subItems.length > 0
                }
                _trackEvent() {
                    const e = this._getStatName();
                    (0, l.trackEvent)("ContextMenuClick", this.props.menuStatName || "", e)
                }
                _getStatName() {
                    return [this.props.parentStatName, this.state.statName].filter((e => Boolean(e))).join(".")
                }
            }
            v.contextType = u.SubmenuContext
        },
        582305: (e, t, n) => {
            "use strict";
            n.d(t, {
                DEFAUL_CONTEXT_MENU_ITEM_THEME: () => b,
                ContextMenuItem: () => v
            });
            var s = n(50959),
                o = n(497754),
                i = n(203223),
                a = n(638456),
                r = n(542682),
                l = n(636268),
                c = n(852668),
                u = n(582997),
                h = n(104436),
                p = n(80802),
                m = n(214665),
                d = n(768550);
            const b = d;
            class v extends s.PureComponent {
                constructor() {
                    super(...arguments), this._handleMouseOver = e => {
                        (0, r.isTouchEvent)(e.nativeEvent) || this.props.onMouseOver && this.props.onMouseOver()
                    }, this._handleClickToolbox = e => {
                        e.stopPropagation(), this.props.onClickToolbox && this.props.onClickToolbox()
                    }
                }
                render() {
                    const {
                        hasSubItems: e,
                        shortcutHint: t,
                        hint: n,
                        invisibleHotkey: i,
                        favourite: r,
                        theme: l = d,
                        size: h = "normal"
                    } = this.props, p = this.props.checkable && this.props.checkboxInput ? "label" : "div";
                    return s.createElement(s.Fragment, null, s.createElement("tr", {
                        className: o(l.item, !this.props.noInteractive && l.interactive, this.props.hovered && l.hovered, this.props.disabled && l.disabled, this.props.active && l.active, this.props.selected && l.selected, l[h]),
                        onClick: this.props.onClick,
                        onMouseOver: this._handleMouseOver,
                        ref: this.props.reference,
                        "data-action-name": this.props.actionName
                    }, void 0 !== r && s.createElement("td", null, s.createElement(c.FavoriteButton, {
                        className: l.favourite,
                        isFilled: r,
                        onClick: this.props.onFavouriteClick
                    })), s.createElement("td", {
                        className: o(l.iconCell),
                        "data-icon-cell": !0
                    }, this._icon(l)), s.createElement("td", {
                        className: l.contentCell
                    }, s.createElement(p, {
                        className: l.content
                    }, s.createElement("span", {
                        className: o(l.label, this.props.checked && l.checked),
                        "data-label": !0
                    }, this.props.label), this._toolbox(l), e && s.createElement("span", {
                        className: l.arrowIcon,
                        dangerouslySetInnerHTML: {
                            __html: m
                        },
                        "data-submenu-arrow": !0
                    }), !e && t && !a.CheckMobile.any() && s.createElement(u.Hint, {
                        className: o(i && l.invisibleHotkey),
                        text: t
                    }), !e && !t && n && s.createElement(u.Hint, {
                        text: n
                    })))), s.createElement("tr", {
                        className: l.subMenu
                    }, s.createElement("td", null, this.props.children)))
                }
                _icon(e) {
                    if (this.props.checkable) {
                        if (this.props.checkboxInput) return s.createElement(i.CheckboxInput, {
                            className: o(e.icon, e.checkboxInput),
                            checked: this.props.checked
                        });
                        if (this.props.checked) {
                            const t = !this.props.icon && !this.props.iconChecked,
                                n = this.props.iconChecked || this.props.icon || p;
                            return s.createElement("span", {
                                className: o(e.icon, t && e.checkmark),
                                dangerouslySetInnerHTML: {
                                    __html: n
                                },
                                "data-icon-checkmark": t
                            })
                        }
                        return this.props.icon ? s.createElement("span", {
                            className: e.icon,
                            dangerouslySetInnerHTML: {
                                __html: this.props.icon
                            }
                        }) : s.createElement("span", {
                            className: e.icon
                        })
                    }
                    return this.props.icon ? s.createElement("span", {
                        className: e.icon,
                        dangerouslySetInnerHTML: {
                            __html: this.props.icon
                        }
                    }) : null
                }
                _toolbox(e) {
                    return this.props.toolbox ? s.createElement("span", {
                        className: o(e.toolbox, this.props.showToolboxOnHover && e.showToolboxOnHover),
                        onClick: this._handleClickToolbox,
                        "data-toolbox": !0
                    }, this._renderToolboxContent()) : null
                }
                _renderToolboxContent() {
                    return this.props.toolbox && this.props.toolbox.type === h.ToolboxType.Delete ? s.createElement(l.RemoveButton, {
                        onClick: this.props.toolbox.action
                    }) : null
                }
            }
        },
        501181: (e, t, n) => {
            "use strict";
            n.d(t, {
                ContextMenu: () => _,
                OverlapContextMenu: () => C
            });
            var s = n(50959),
                o = n(497754),
                i = n.n(o),
                a = n(368337),
                r = n(175071),
                l = n(157490),
                c = n(364489),
                u = n(108708),
                h = n(332585),
                p = n(18182),
                m = n(67812),
                d = n(762852),
                b = n(948019),
                v = n(269655);
            class _ extends s.PureComponent {
                constructor(e) {
                    super(e), this._menuRef = s.createRef(), this._handleRequestUpdate = () => {
                        this.update()
                    }, this._handleClose = () => {
                        this.props.onClose && this.props.onClose()
                    }, this._handleOutsideClickClose = e => {
                        const {
                            doNotCloseOn: t,
                            onClose: n
                        } = this.props;
                        !n || void 0 !== t && t.contains(e.target) || n()
                    }, this._handleFocusOnOpen = () => {
                        var e, t;
                        (null === (e = this.props.menuElementReference) || void 0 === e ? void 0 : e.current) && this.props.takeFocus && (null === (t = this.props.menuElementReference) || void 0 === t || t.current.focus({
                            preventScroll: !0
                        }))
                    }, this.state = {}
                }
                render() {
                    const {
                        isOpened: e,
                        onClose: t,
                        items: n,
                        doNotCloseOn: o,
                        menuStatName: a,
                        parentStatName: _,
                        takeFocus: C,
                        ...x
                    } = this.props;
                    return e ? s.createElement(h.DrawerManager, null, s.createElement(c.KeyboardDocumentListener, {
                        keyCode: 27,
                        eventType: "keyup",
                        handler: this._handleClose
                    }), s.createElement(p.MatchMedia, {
                        rule: "screen and (max-width: 430px)"
                    }, (t => this._isDrawer(t) ? s.createElement(b.ContextMenuContext.Provider, {
                        value: {
                            type: "drawer"
                        }
                    }, s.createElement(d.Drawer, {
                        onClose: this._handleClose,
                        position: "Bottom",
                        "data-name": x["data-name"]
                    }, s.createElement(m.ContextMenuList, {
                        items: n
                    }))) : s.createElement(b.ContextMenuContext.Provider, {
                        value: {
                            type: "menu"
                        }
                    }, s.createElement(l.OutsideEvent, {
                        handler: this._handleOutsideClickClose,
                        mouseDown: !0,
                        touchStart: !0,
                        reference: this.props.menuElementReference
                    }, (t => s.createElement(r.Menu, { ...x,
                        reference: t,
                        className: i()(v.menu, "context-menu"),
                        onClose: this._handleClose,
                        noMomentumBasedScroll: !0,
                        ref: this._menuRef,
                        tabIndex: C ? -1 : void 0,
                        onOpen: this._handleFocusOnOpen
                    }, s.createElement(u.ActionsTable, {
                        items: n,
                        menuStatName: a,
                        parentStatName: _,
                        parentIsOpened: e,
                        onRequestUpdate: this._handleRequestUpdate
                    })))))))) : null
                }
                update() {
                    this._menuRef.current && this._menuRef.current.update()
                }
                _isDrawer(e) {
                    return void 0 === this.props.mode ? e : "drawer" === this.props.mode
                }
            }
            const C = (0, a.makeOverlapable)(_)
        },
        364489: (e, t, n) => {
            "use strict";
            n.d(t, {
                KeyboardDocumentListener: () => o
            });
            var s = n(50959);
            class o extends s.PureComponent {
                constructor() {
                    super(...arguments), this._handleKeyDown = e => {
                        e.keyCode === this.props.keyCode && this.props.handler(e)
                    }
                }
                componentDidMount() {
                    document.addEventListener(this.props.eventType || "keydown", this._handleKeyDown, !1)
                }
                componentWillUnmount() {
                    document.removeEventListener(this.props.eventType || "keydown", this._handleKeyDown, !1)
                }
                render() {
                    return null
                }
            }
        },
        423582: (e, t, n) => {
            "use strict";
            n.d(t, {
                calcSubMenuPos: () => o
            });
            var s = n(768038);

            function o(e, t, n = {
                x: 0,
                y: 10
            }) {
                if (t) {
                    const {
                        left: n,
                        right: o,
                        top: i
                    } = t.getBoundingClientRect(), a = document.documentElement.clientWidth, r = {
                        x: n - e,
                        y: i
                    }, l = {
                        x: o,
                        y: i
                    };
                    return (0, s.isRtl)() ? n <= e ? l : r : a - o >= e ? l : r
                }
                return n
            }
        },
        636268: (e, t, n) => {
            "use strict";
            n.d(t, {
                RemoveButton: () => c
            });
            var s = n(777754),
                o = n(50959),
                i = n(497754),
                a = n(83436),
                r = n(333765),
                l = n(308794);

            function c(e) {
                const {
                    className: t,
                    isActive: c,
                    onClick: u,
                    onMouseDown: h,
                    title: p,
                    hidden: m,
                    "data-name": d = "remove-button",
                    ...b
                } = e;
                return o.createElement(a.Icon, { ...b,
                    "data-name": d,
                    className: i(l.button, "apply-common-tooltip", c && l.active, m && l.hidden, t),
                    icon: r,
                    onClick: u,
                    onMouseDown: h,
                    title: p || s.t(null, void 0, n(734596))
                })
            }
        },
        108708: (e, t, n) => {
            "use strict";
            n.d(t, {
                ActionsTable: () => r
            });
            var s = n(50959),
                o = n(110852);

            function i(e) {
                return s.createElement("tr", {
                    className: o.row
                }, s.createElement("td", null, s.createElement("div", {
                    className: o.line
                })), s.createElement("td", null, s.createElement("div", {
                    className: o.line
                }), e.hint ? s.createElement("div", {
                    className: o.hint
                }, e.hint) : null))
            }
            var a = n(876718);
            class r extends s.PureComponent {
                constructor(e) {
                    super(e), this._handleShowSubMenu = e => {
                        const t = e.getState();
                        this.setState({
                            showSubMenuOf: t.subItems.length ? e : void 0
                        })
                    }, this.state = {}
                }
                render() {
                    return s.createElement("table", null, s.createElement("tbody", null, this.props.items.map((e => this._item(e)))))
                }
                static getDerivedStateFromProps(e, t) {
                    return !e.parentIsOpened && t.showSubMenuOf ? {
                        showSubMenuOf: void 0
                    } : null
                }
                _item(e) {
                    switch (e.type) {
                        case "separator":
                            return s.createElement(i, {
                                key: e.id,
                                hint: e.getHint()
                            });
                        case "action":
                            return s.createElement(a.ContextMenuAction, {
                                key: e.id,
                                action: e,
                                onShowSubMenu: this._handleShowSubMenu,
                                isSubMenuOpened: this.state.showSubMenuOf === e,
                                menuStatName: this.props.menuStatName,
                                parentStatName: this.props.parentStatName,
                                onRequestUpdate: this.props.onRequestUpdate
                            })
                    }
                }
            }
        },
        465890: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>'
        },
        80802: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14" width="18" height="14"><path fill="currentColor" d="M6 11.17l-4.17-4.17-1.42 1.41 5.59 5.59 12-12-1.41-1.41-10.59 10.58z"/></svg>'
        }
    }
]);
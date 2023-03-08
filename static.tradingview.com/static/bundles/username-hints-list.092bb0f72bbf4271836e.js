(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [96911], {
        876971: t => {
            t.exports = {
                user: "user-Sl4ZnMHM",
                userImage: "userImage-Sl4ZnMHM",
                userName: "userName-Sl4ZnMHM",
                active: "active-Sl4ZnMHM",
                online: "online-Sl4ZnMHM"
            }
        },
        416: t => {
            t.exports = {
                list: "list-DSz0ovPY",
                fullBorder: "fullBorder-DSz0ovPY",
                user: "user-DSz0ovPY",
                hidden: "hidden-DSz0ovPY"
            }
        },
        820107: (t, e, s) => {
            "use strict";
            s.r(e), s.d(e, {
                UsernameHintList: () => S,
                getUserChatSuggestListHandler: () => x
            });
            var i = s(50959),
                n = s(497754),
                o = s.n(n),
                r = s(12481),
                a = s(752630),
                h = s(627025),
                c = s(470316),
                l = s(62802),
                d = s(890740);
            const u = "chat.suggest_list",
                p = "chat.suggest_list_v2";
            class m {
                constructor() {
                    this._list = [], this._cache = {}, window.loginStateChange.subscribe(this, (() => {
                        window.is_authenticated || (this._list = [])
                    })), l.getJSON(u) && l.remove(u), this._list = l.getJSON(p) || [], this._cache = {}
                }
                async fetchItems(t) {
                    if ("" === t) return [];
                    const e = await (0, d.fetch)(`/username_hint/?s=${t}`);
                    if (e.ok) {
                        return (await e.json()).filter((t => !t.inactive))
                    }
                    return []
                }
                async getList(t) {
                    return t ? this._list.filter(t) : this._list
                }
                onUserSelect(t) {
                    if (window.user.id === t.id || window.user.username === t.username) return;
                    const e = this._list.map((t => t.id)).indexOf(t.id);
                    e >= 0 ? (this._list.splice(e, 1), this._list.unshift({
                        id: t.id,
                        username: t.username,
                        userpic: t.userpic
                    })) : this._addUser(t), l.setJSON(p, this._list)
                }
                static getUserChatSuggestListHandler() {
                    return this._instance = this._instance || new m, this._instance
                }
                _addUser(t) {
                    this._list.length >= 20 && (this._list.shift(), delete this._cache[t.id]), this._list.unshift({
                        id: t.id,
                        username: t.username,
                        userpic: t.userpic
                    }), t && (this._cache[t.id] = t)
                }
            }
            m._instance = null;
            var g = s(650151),
                v = s(876971),
                f = s.n(v);

            function _(t) {
                const {
                    onItemSelected: e,
                    index: s,
                    item: n,
                    isActiveListItem: r,
                    setActiveItemIndex: a
                } = t;
                return i.createElement("li", {
                    className: o()(f().user, n.online && f().online, r && f().active),
                    onMouseDown: t => {
                        t.preventDefault(), e(n)
                    },
                    onMouseEnter: () => {
                        a(s)
                    }
                }, i.createElement("img", {
                    className: f().userImage,
                    src: n.userpic,
                    alt: n.username
                }), i.createElement("span", {
                    className: f().userName
                }, n.username))
            }
            var I = s(157490),
                w = s(416);
            class S extends i.PureComponent {
                constructor(t) {
                    super(t), this._componentElemRef = i.createRef(), this._eventsBound = !1, this._isMounted = !1, this._debouncedGetSuggestions = (0, r.default)((() => {
                        this._getSuggestions()
                    }), 500), this._changePositionPatched = () => {
                        this._componentElemRef.current && (this.props.setPosition ? this.props.setPosition(this._componentElemRef.current) : this._setDropdownPosition())
                    }, this._setActiveItemIndex = t => {
                        this.setState({
                            activeItemIndex: t
                        })
                    }, this._getSuggestions = () => {
                        const t = this._getInputText(),
                            e = this._getSuggestString(t);
                        "" !== e ? e !== this.state.query && ("@" !== e ? this._getSuggestionsList(e) : this.props.simpleMode || this._suggestLastUsed()) : this._closeList()
                    }, this._onItemSelectedPatched = t => {
                        this._closeList(), this._chatSuggestHandler.onUserSelect(t);
                        const e = this._getUpdatedInputTextData(t.username);
                        this.props.onItemSelected(t, e.text, e.cursorPosition)
                    }, this._handleKeyDown = t => {
                        switch ((0, c.hashFromEvent)(t)) {
                            case 38:
                            case 40:
                            case 13:
                            case 27:
                                this._isVisible() && t.preventDefault()
                        }
                    }, this._handleKeyUp = t => {
                        switch ((0, c.hashFromEvent)(t)) {
                            case 38:
                            case 40:
                            case 13:
                            case 27:
                                break;
                            default:
                                this._debouncedGetSuggestions()
                        }
                    }, this._handleContainerKeyDown = t => {
                        switch ((0, c.hashFromEvent)(t)) {
                            case 38:
                                this.state.reversed ? this._selectNextItem() : this._selectPrevItem();
                                break;
                            case 40:
                                this.state.reversed ? this._selectPrevItem() : this._selectNextItem();
                                break;
                            case 13:
                                t.preventDefault(), -1 !== this.state.activeItemIndex && this._onItemSelectedPatched(this.state.items[this.state.activeItemIndex]);
                                break;
                            case 27:
                                this._closeList()
                        }
                    }, this.state = {
                        container: this.props.container,
                        input: this.props.input,
                        query: "",
                        items: [],
                        activeItemIndex: -1,
                        reversed: !1,
                        top: 0,
                        left: 0
                    }, this._chatSuggestHandler = m.getUserChatSuggestListHandler()
                }
                componentDidMount() {
                    this._isMounted = !0, this._bindEvents()
                }
                componentDidUpdate(t, e) {
                    if (this.state.input && this.state.container) {
                        if (this._bindEvents(), !this._isVisible()) return this.state.container.removeEventListener("keydown", this._handleContainerKeyDown), void(this.props.simpleMode || this.state.input.removeEventListener("scroll", this._changePositionPatched));
                        this.props.simpleMode || this.state.input.addEventListener("scroll", this._changePositionPatched), this._changePositionPatched(), 0 === e.items.length && this.state.container.addEventListener("keydown", this._handleContainerKeyDown)
                    }
                }
                render() {
                    if (!this.state.input || !this.state.container) return i.createElement(i.Fragment, null);
                    const t = this.state.items.map(((t, e) => i.createElement(_, {
                        key: e,
                        index: e,
                        isActiveListItem: e === this.state.activeItemIndex,
                        item: t,
                        onItemSelected: this._onItemSelectedPatched,
                        setActiveItemIndex: this._setActiveItemIndex
                    })));
                    return i.createElement(I.OutsideEvent, {
                        handler: () => {
                            this._isVisible() && (this.props.onMouseDownOutside && this.props.onMouseDownOutside(), this.props.closeOnMouseOutClick && this._closeList())
                        },
                        click: !0
                    }, (e => (this._componentElemRef = e, i.createElement("ul", {
                        ref: e,
                        className: o()(w.list, 0 === this.state.items.length && w.hidden, this.props.fullBorder && w.fullBorder, this.props.className),
                        style: {
                            top: this.state.top,
                            left: this.state.left
                        }
                    }, this.state.reversed ? t.reverse() : t))))
                }
                componentWillUnmount() {
                    const t = this.state.input;
                    this._isMounted = !1, t && (t.removeEventListener("click", this._getSuggestions), t.removeEventListener("keydown", this._handleKeyDown), t.removeEventListener("keyup", this._handleKeyUp), t.removeEventListener("scroll", this._changePositionPatched));
                    const e = this.state.container;
                    e && e.removeEventListener("keydown", this._handleContainerKeyDown)
                }
                setContainer(t) {
                    this.setState({
                        container: t
                    })
                }
                setInput(t) {
                    this.setState({
                        input: t
                    })
                }
                _bindEvents() {
                    if (this._eventsBound || !this.state.input || !this.state.container) return;
                    const t = this.state.input;
                    t.addEventListener("click", this._getSuggestions), t.addEventListener("keydown", this._handleKeyDown), t.addEventListener("keyup", this._handleKeyUp), this._eventsBound = !0
                }
                _getSuggestString(t) {
                    if (t.length <= 0) return "";
                    if ("@" === t) return "@";
                    const e = t.lastIndexOf("@") + 1;
                    return e > 1 && !/\s/.test(t[e - 2]) ? "" : t.substring(e)
                }
                async _suggestLastUsed() {
                    const t = (await this._chatSuggestHandler.getList()).slice(0, this.props.maxItems);
                    this.setState({
                        items: t,
                        activeItemIndex: 0 === t.length ? -1 : 0
                    })
                }
                async _getSuggestionsList(t) {
                    const e = t.split("").map(h.regExpEscape).join(".*"),
                        s = new RegExp(e, "i"),
                        i = this.props.maxItems || 10,
                        n = this.props.suggestLimit || 10,
                        o = await this._chatSuggestHandler.getList((t => s.test(t.username)));
                    if (o.length >= n) {
                        const t = o.slice(0, i);
                        this.setState({
                            items: t,
                            activeItemIndex: 0 === t.length ? -1 : 0
                        })
                    } else if (t !== this.state.query) {
                        const e = await this._chatSuggestHandler.fetchItems(t);
                        if (!this._isMounted) return;
                        const s = e.slice(0, i);
                        this.setState({
                            query: t,
                            items: s,
                            activeItemIndex: 0 === s.length ? -1 : 0
                        })
                    }
                }
                _isVisible() {
                    return 0 !== this.state.items.length
                }
                _selectNextItem() {
                    0 !== this.state.items.length ? this.state.activeItemIndex !== this.state.items.length - 1 ? this._setActiveItemIndex(this.state.activeItemIndex + 1) : this._setActiveItemIndex(0) : this._setActiveItemIndex(-1)
                }
                _selectPrevItem() {
                    0 !== this.state.items.length ? this.state.activeItemIndex <= 0 ? this._setActiveItemIndex(this.state.items.length - 1) : this._setActiveItemIndex(this.state.activeItemIndex - 1) : this._setActiveItemIndex(-1)
                }
                _closeList() {
                    this.setState({
                        query: "",
                        activeItemIndex: -1,
                        items: []
                    })
                }
                _getInputText() {
                    const t = (0, g.ensureNotNull)(this.state.input);
                    return this.props.simpleMode ? t.value : this._getQueryFromInputField()
                }
                _getQueryFromInputField() {
                    const t = (0, g.ensureNotNull)(this.state.input),
                        e = t.value,
                        s = t.selectionStart || 0,
                        i = e.slice(0, s).lastIndexOf("@", s),
                        n = e.slice(i, s);
                    return i < 0 || i > 0 && e[i - 1].match(/[\S]+/) || n.search(/\s/) >= 0 ? "" : n
                }
                _setDropdownPosition() {
                    if (!this._componentElemRef.current) return;
                    const t = this._componentElemRef.current,
                        e = (0, g.ensureNotNull)(this.state.input),
                        s = (0, g.ensureNotNull)(this.state.container),
                        i = a.Caret.getRelativePosition(e),
                        n = e.getBoundingClientRect(),
                        o = s.getBoundingClientRect(),
                        r = o.height,
                        h = o.top,
                        c = s.scrollTop,
                        l = i.top,
                        d = t.getBoundingClientRect().height,
                        u = n.top - h,
                        p = e.scrollTop,
                        m = u + l - c - p,
                        v = r - m;
                    let f, _;
                    const I = l <= p + n.height && l > p;
                    if (!this.props.simpleMode && !I) return void this._closeList();
                    d < v ? (f = !1, _ = m + 20) : (f = !0, _ = m - d);
                    const w = o.width,
                        S = o.left,
                        x = i.left,
                        E = t.clientWidth,
                        b = n.left - S + x,
                        L = b + E - w,
                        y = L > 0 ? b - L : b;
                    this.setState({
                        reversed: f,
                        left: y,
                        top: _
                    })
                }
                _getUpdatedInputTextData(t) {
                    const e = (0, g.ensureNotNull)(this.state.input),
                        s = e.value,
                        i = e.selectionStart,
                        n = s.lastIndexOf("@", i || void 0),
                        o = /\s/.exec(s.substring(n));
                    let r = "@" + t;
                    o || (r += " ");
                    let a = "";
                    o && (a = s.slice(n + o.index));
                    const h = s.slice(0, n) + r;
                    return {
                        text: h + a,
                        cursorPosition: h.length + 1
                    }
                }
            }
            const x = m.getUserChatSuggestListHandler
        },
        314308: (t, e, s) => {
            "use strict";

            function i(t, e, s, i, n) {
                function o(n) {
                    if (t > n.timeStamp) return;
                    const o = n.target;
                    void 0 !== s && null !== e && null !== o && o.ownerDocument === i && (e.contains(o) || s(n))
                }
                return n.click && i.addEventListener("click", o, !1), n.mouseDown && i.addEventListener("mousedown", o, !1), n.touchEnd && i.addEventListener("touchend", o, !1), n.touchStart && i.addEventListener("touchstart", o, !1), () => {
                    i.removeEventListener("click", o, !1), i.removeEventListener("mousedown", o, !1), i.removeEventListener("touchend", o, !1), i.removeEventListener("touchstart", o, !1)
                }
            }
            s.d(e, {
                addOutsideEventListener: () => i
            })
        },
        951292: (t, e, s) => {
            "use strict";
            s.d(e, {
                useOutsideEvent: () => o
            });
            var i = s(50959),
                n = s(314308);

            function o(t) {
                const {
                    click: e,
                    mouseDown: s,
                    touchEnd: o,
                    touchStart: r,
                    handler: a,
                    reference: h,
                    ownerDocument: c = document
                } = t, l = (0, i.useRef)(null), d = (0, i.useRef)(new CustomEvent("timestamp").timeStamp);
                return (0, i.useLayoutEffect)((() => {
                    const t = {
                            click: e,
                            mouseDown: s,
                            touchEnd: o,
                            touchStart: r
                        },
                        i = h ? h.current : l.current;
                    return (0, n.addOutsideEventListener)(d.current, i, a, c, t)
                }), [e, s, o, r, a]), h || l
            }
        },
        157490: (t, e, s) => {
            "use strict";
            s.d(e, {
                OutsideEvent: () => n
            });
            var i = s(951292);

            function n(t) {
                const {
                    children: e,
                    ...s
                } = t;
                return e((0, i.useOutsideEvent)(s))
            }
        },
        752630: (t, e) => {
            "use strict";
            var s;
            (function(t) {
                function e(t) {
                    var e = s(t);
                    return {
                        left: window.scrollX + t.getBoundingClientRect().left + e.left,
                        top: window.scrollY + t.getBoundingClientRect().top + e.top,
                        absolute: !0,
                        height: e.height
                    }
                }

                function s(t, e) {
                    void 0 === e && (e = {
                        debug: !1,
                        useSelectionEnd: !1,
                        checkWidthOverflow: !0
                    });
                    var s = null !== t.selectionStart ? t.selectionStart : 0,
                        i = null !== t.selectionEnd ? t.selectionEnd : 0,
                        n = e.useSelectionEnd ? i : s,
                        o = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
                    if (!("undefined" != typeof window)) throw new Error("textarea-caret-position#getCaretPosition should only be called in a browser");
                    var r = e && e.debug || !1;
                    if (r) {
                        var a = document.querySelector("#input-textarea-caret-position-mirror-div");
                        a && a.parentNode && a.parentNode.removeChild(a)
                    }
                    var h = document.createElement("div");
                    h.id = "input-textarea-caret-position-mirror-div", document.body.appendChild(h);
                    var c = h.style,
                        l = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
                        d = "INPUT" === t.nodeName;
                    c.whiteSpace = "pre-wrap", d || (c.wordWrap = "break-word"), c.position = "absolute", r || (c.visibility = "hidden"), ["direction", "boxSizing", "width", "height", "overflowX", "overflowY", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderStyle", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "fontSizeAdjust", "lineHeight", "fontFamily", "textAlign", "textTransform", "textIndent", "textDecoration", "letterSpacing", "wordSpacing", "tabSize", "MozTabSize"].forEach((function(t) {
                        if (d && "lineHeight" === t)
                            if ("border-box" === l.boxSizing) {
                                var e = parseInt(l.height),
                                    s = parseInt(l.paddingTop) + parseInt(l.paddingBottom) + parseInt(l.borderTopWidth) + parseInt(l.borderBottomWidth),
                                    i = s + parseInt(l.lineHeight);
                                c.lineHeight = e > i ? e - s + "px" : e === i ? l.lineHeight : "0"
                            } else c.lineHeight = l.height;
                        else c[t] = l[t]
                    })), o ? t.scrollHeight > parseInt(l.height) && (c.overflowY = "scroll") : c.overflow = "hidden", h.textContent = t.value.substring(0, n), d && h.textContent && (h.textContent = h.textContent.replace(/\s/g, " "));
                    var u = document.createElement("span");
                    u.textContent = t.value.substring(n) || ".", h.appendChild(u);
                    var p = {
                        top: u.offsetTop + parseInt(l.borderTopWidth),
                        left: u.offsetLeft + parseInt(l.borderLeftWidth),
                        absolute: !1,
                        height: parseInt(l.lineHeight)
                    };
                    return r ? u.style.backgroundColor = "#aaa" : document.body.removeChild(h), p.left >= t.clientWidth && e.checkWidthOverflow && (p.left = t.clientWidth), p
                }
                t.getAbsolutePosition = e, t.getRelativePosition = s, t.setElementPositionBasedOnCaret = function(t, s, i, n, o, r) {
                    void 0 === i && (i = {
                        top: 0,
                        left: 0
                    }), void 0 === n && (n = 2), void 0 === o && (o = !0), void 0 === r && (r = !1);
                    var a = e(s);
                    return o ? (a.left = a.left + (t.clientWidth + n) + i.left > window.scrollX + window.innerWidth ? a.left = window.scrollX + window.innerWidth - (t.clientWidth + n) : a.left += i.left, a.top = a.top + (t.clientWidth + n) + i.top > window.scrollY + window.innerHeight ? a.top -= t.clientWidth + n : a.top += i.top) : (a.top += i.top, a.left += i.left), r || (t.style.top = a.top + "px", t.style.left = a.left + "px"), a
                }
            })(s = e.Caret || (e.Caret = {}))
        }
    }
]);
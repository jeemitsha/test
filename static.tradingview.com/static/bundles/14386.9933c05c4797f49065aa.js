(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [14386], {
        849361: e => {
            e.exports = {
                dialog: "dialog-o2xKpnz8",
                wrapper: "wrapper-o2xKpnz8",
                separator: "separator-o2xKpnz8"
            }
        },
        424810: e => {
            e.exports = {
                "small-height-breakpoint": "screen and (max-height: 360px)",
                container: "container-HS2PTQRJ",
                unsetAlign: "unsetAlign-HS2PTQRJ",
                title: "title-HS2PTQRJ",
                subtitle: "subtitle-HS2PTQRJ",
                textWrap: "textWrap-HS2PTQRJ",
                ellipsis: "ellipsis-HS2PTQRJ",
                close: "close-HS2PTQRJ",
                icon: "icon-HS2PTQRJ"
            }
        },
        139195: (e, t, r) => {
            "use strict";
            r.d(t, {
                userSpecificEncrypt: () => c,
                userSpecificDecrypt: () => p
            });
            var i = r(62802),
                o = r(125226);
            const s = "crypto-key",
                a = "AES-GCM";
            async function n() {
                const e = await async function() {
                    const e = i.getJSON(s, null);
                    if (null !== e) return crypto.subtle.importKey("jwk", e, a, !1, ["encrypt", "decrypt"])
                }();
                return void 0 === e ? async function() {
                    const e = await crypto.subtle.generateKey({
                            name: a,
                            length: 128
                        }, !0, ["encrypt", "decrypt"]),
                        t = await crypto.subtle.exportKey("jwk", e);
                    return i.setJSON(s, {
                        alg: t.alg,
                        kty: t.kty,
                        k: t.k
                    }), e
                }() : e
            }
            const l = (0, o.isFeatureEnabled)("disable_user_specific_encryption");
            async function c(e) {
                if (l) return e;
                const t = (new TextEncoder).encode(e),
                    r = await n(),
                    i = crypto.getRandomValues(new Uint8Array(12)),
                    o = await crypto.subtle.encrypt({
                        name: a,
                        iv: i
                    }, r, t),
                    s = new Uint8Array(12 + o.byteLength);
                return s.set(i, 0), s.set(new Uint8Array(o), 12), Array.from(s, (e => String.fromCharCode(e + 10240))).join("")
            }
            async function p(e) {
                if (l) return u(e) ? null : e;
                if (!u(e)) return null;
                const t = Uint8Array.from(e, (e => e.charCodeAt(0) - 10240)),
                    r = await n(),
                    i = t.subarray(0, 12),
                    o = t.subarray(12);
                try {
                    const e = new Uint8Array(await crypto.subtle.decrypt({
                        name: a,
                        iv: i
                    }, r, o));
                    return (new TextDecoder).decode(e)
                } catch (e) {
                    return null
                }
            }

            function u(e) {
                return /^[\u2800-\u28FF]+$/gi.test(e)
            }
        },
        619027: (e, t, r) => {
            "use strict";
            r.d(t, {
                AdaptivePopupDialog: () => C
            });
            var i = r(50959),
                o = r(650151),
                s = r(424720),
                a = r(497754),
                n = r.n(a),
                l = r(470316),
                c = r(515312),
                p = r(500745),
                u = r(221155),
                d = r(642709),
                h = r(18182),
                b = r(8629),
                g = r(744359),
                m = r(332450),
                v = r(251954),
                f = r(772626),
                _ = r(551080),
                y = r(849361);
            const k = {
                    vertical: 20
                },
                S = {
                    vertical: 0
                };
            class C extends i.PureComponent {
                constructor() {
                    super(...arguments), this._controller = null, this._reference = null, this._orientationMediaQuery = null, this._renderChildren = (e, t) => (this._controller = e, this.props.render({
                        requestResize: this._requestResize,
                        centerAndFit: this._centerAndFit,
                        isSmallWidth: t
                    })), this._handleReference = e => this._reference = e, this._handleCloseBtnClick = () => {
                        this.props.onKeyboardClose && this.props.onKeyboardClose(), this._handleClose()
                    }, this._handleClose = () => {
                        this.props.onClose()
                    }, this._handleOpen = () => {
                        void 0 !== this.props.onOpen && this.props.isOpened && this.props.onOpen(this.props.fullScreen || window.matchMedia(d.DialogBreakpoints.TabletSmall).matches)
                    }, this._handleKeyDown = e => {
                        if (!e.defaultPrevented) {
                            if (this.props.onKeyDown && this.props.onKeyDown(e), 27 === (0, l.hashFromEvent)(e)) {
                                if (e.defaultPrevented) return;
                                if (this.props.forceCloseOnEsc && this.props.forceCloseOnEsc()) return this.props.onKeyboardClose && this.props.onKeyboardClose(), void this._handleClose();
                                const {
                                    activeElement: r
                                } = document, i = (0,
                                    o.ensureNotNull)(this._reference);
                                if (null !== r) {
                                    if (e.preventDefault(), "true" === (t = r).getAttribute("data-haspopup") && "true" !== t.getAttribute("data-expanded")) return void this._handleClose();
                                    if ((0, c.isTextEditingField)(r)) return void i.focus();
                                    if (i.contains(r)) return this.props.onKeyboardClose && this.props.onKeyboardClose(), void this._handleClose()
                                }
                            }
                            var t;
                            (function(e) {
                                if ("function" == typeof e) return e();
                                return Boolean(e)
                            })(this.props.disableTabNavigationContainment) || (0, g.containTabNavigation)(e)
                        }
                    }, this._requestResize = () => {
                        null !== this._controller && this._controller.recalculateBounds()
                    }, this._centerAndFit = () => {
                        null !== this._controller && this._controller.centerAndFit()
                    }
                }
                componentDidMount() {
                    this.props.ignoreClosePopupsAndDialog || v.subscribe(m.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._handleClose, null), this._handleOpen(), void 0 !== this.props.onOpen && (this._orientationMediaQuery = window.matchMedia("(orientation: portrait)"), (0, s.mediaQueryAddEventListener)(this._orientationMediaQuery, this._handleOpen))
                }
                componentWillUnmount() {
                    this.props.ignoreClosePopupsAndDialog || v.unsubscribe(m.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._handleClose, null), null !== this._orientationMediaQuery && (0, s.mediaQueryRemoveEventListener)(this._orientationMediaQuery, this._handleOpen)
                }
                focus() {
                    (0, o.ensureNotNull)(this._reference).focus()
                }
                getElement() {
                    return this._reference
                }
                contains(e) {
                    var t, r;
                    return null !== (r = null === (t = this._reference) || void 0 === t ? void 0 : t.contains(e)) && void 0 !== r && r
                }
                render() {
                    const {
                        className: e,
                        wrapperClassName: t,
                        headerClassName: r,
                        isOpened: o,
                        title: s,
                        titleTextWrap: a,
                        dataName: l,
                        onClickOutside: c,
                        additionalElementPos: g,
                        additionalHeaderElement: m,
                        backdrop: v,
                        shouldForceFocus: C = !0,
                        showSeparator: w,
                        subtitle: P,
                        draggable: T = !0,
                        fullScreen: M = !1,
                        showCloseIcon: O = !0,
                        rounded: B = !0,
                        isAnimationEnabled: E,
                        growPoint: A,
                        dialogTooltip: I,
                        unsetHeaderAlign: D,
                        onDragStart: x,
                        dataDialogName: L,
                        closeAriaLabel: U,
                        containerAriaLabel: F,
                        reference: N,
                        containerTabIndex: R,
                        closeButtonReference: V,
                        onCloseButtonKeyDown: q
                    } = this.props, G = "after" !== g ? m : void 0, W = "after" === g ? m : void 0, z = "string" == typeof s ? s : L || "", K = (0, _.mergeRefs)([this._handleReference, N]);
                    return i.createElement(h.MatchMedia, {
                        rule: d.DialogBreakpoints.SmallHeight
                    }, (g => i.createElement(h.MatchMedia, {
                        rule: d.DialogBreakpoints.TabletSmall
                    }, (d => i.createElement(p.PopupDialog, {
                        rounded: !(d || M) && B,
                        className: n()(y.dialog, e),
                        isOpened: o,
                        reference: K,
                        onKeyDown: this._handleKeyDown,
                        onClickOutside: c,
                        onClickBackdrop: c,
                        fullscreen: d || M,
                        guard: g ? S : k,
                        boundByScreen: d || M,
                        shouldForceFocus: C,
                        backdrop: v,
                        draggable: T,
                        isAnimationEnabled: E,
                        growPoint: A,
                        name: this.props.dataName,
                        dialogTooltip: I,
                        onDragStart: x,
                        containerAriaLabel: F,
                        containerTabIndex: R
                    }, i.createElement("div", {
                        className: n()(y.wrapper, t),
                        "data-name": l,
                        "data-dialog-name": z
                    }, void 0 !== s && i.createElement(f.DialogHeader, {
                        draggable: T && !(d || M),
                        onClose: this._handleCloseBtnClick,
                        renderAfter: W,
                        renderBefore: G,
                        subtitle: P,
                        title: s,
                        titleTextWrap: a,
                        showCloseIcon: O,
                        className: r,
                        unsetAlign: D,
                        closeAriaLabel: U,
                        closeButtonReference: V,
                        onCloseButtonKeyDown: q
                    }), w && i.createElement(u.Separator, {
                        className: y.separator
                    }), i.createElement(b.PopupContext.Consumer, null, (e => this._renderChildren(e, d || M)))))))))
                }
            }
        },
        909591: (e, t, r) => {
            "use strict";
            r.d(t, {
                DialogHeaderContext: () => i
            });
            const i = r(50959).createContext({
                setHideClose: () => {}
            })
        },
        772626: (e, t, r) => {
            "use strict";
            r.d(t, {
                DialogHeader: () => p
            });
            var i = r(50959),
                o = r(497754),
                s = r.n(o),
                a = r(83436),
                n = r(909591),
                l = r(507720),
                c = r(424810);

            function p(e) {
                const {
                    title: t,
                    titleTextWrap: r = !1,
                    subtitle: o,
                    showCloseIcon: p = !0,
                    onClose: u,
                    onCloseButtonKeyDown: d,
                    renderBefore: h,
                    renderAfter: b,
                    draggable: g,
                    className: m,
                    unsetAlign: v,
                    closeAriaLabel: f,
                    closeButtonReference: _
                } = e, [y, k] = (0, i.useState)(!1);
                return i.createElement(n.DialogHeaderContext.Provider, {
                    value: {
                        setHideClose: k
                    }
                }, i.createElement("div", {
                    className: s()(c.container, m, (o || v) && c.unsetAlign)
                }, h, i.createElement("div", {
                    "data-dragg-area": g,
                    className: c.title
                }, i.createElement("div", {
                    className: s()(r ? c.textWrap : c.ellipsis)
                }, t), o && i.createElement("div", {
                    className: s()(c.ellipsis, c.subtitle)
                }, o)), b, p && !y && i.createElement("button", {
                    className: c.close,
                    onClick: u,
                    onKeyDown: d,
                    "data-name": "close",
                    "aria-label": f,
                    type: "button",
                    ref: _
                }, i.createElement(a.Icon, {
                    className: c.icon,
                    icon: l,
                    "data-name": "close",
                    "data-role": "button"
                }))))
            }
        },
        989452: (e, t, r) => {
            "use strict";
            r.d(t, {
                isSymbolSearchPaginationEnabled: () => i
            });
            const i = (0, r(125226).isFeatureEnabled)("enable_symbol_search_pagination")
        },
        795394: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                snapshoter: () => a,
                resolveSymbolName: () => l,
                resolveSymbolNameForAll: () => c,
                resolveSymbolNameForAllDistinct: () => p
            });
            var i = r(611998),
                o = r(675128);
            const s = new Set(["pro_name", "base_name", "short_name", "description", "type", "exchange", "typespecs", "listed_exchange", "country_code", "provider_id", "symbol-primaryname", "logoid", "base-currency-logoid", "currency-logoid", "update_mode", "source", "source2", "pricescale", "minmov", "fractional"]),
                a = (0, o.lazyValue)((() => new i.QuoteSessionSnapshoter({
                    name: "basic-symbol-quotes",
                    fields: [...s]
                }))),
                n = new Set(["pro_name"]);

            function l(e) {
                return a().getSnapshot(e, n).then((e => "error" === e.status ? e.symbolname : e.values.pro_name))
            }

            function c(e) {
                return Promise.all(e.map(l))
            }

            function p(e) {
                return c(e).then((e => [...new Set(e)]))
            }
        },
        744359: (e, t, r) => {
            "use strict";
            r.d(t, {
                containTabNavigation: () => o
            });
            var i = r(470316);

            function o(e) {
                [9, i.Modifiers.Shift + 9].includes((0, i.hashFromEvent)(e)) && e.stopPropagation()
            }
        },
        638910: (e, t, r) => {
            "use strict";
            r.d(t, {
                checkRealtimeDataSubscription: () => p,
                verifyLiveAccount: () => u,
                removeRealtimeDataSubscription: () => d
            });
            var i = r(890740),
                o = r(809350),
                s = r(272001),
                a = r(595300),
                n = r(703819);
            const l = (0, s.getLogger)("Trading.AccountVerifier");

            function c(e, t) {
                return e.hasOwnProperty(t) && e[t].hasOwnProperty("message") ? e[t].message : ""
            }
            async function p(e, t) {
                let r = !1;
                if (0 === Object.keys(t).length) return l.logWarn("Realtime data check skipped: credentials not supplied."), !1;
                const s = {
                        broker_id: e,
                        params: t
                    },
                    p = {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        method: "POST",
                        credentials: "include",
                        body: JSON.stringify(s)
                    };
                try {
                    const e = await (0, a.makeTimeLimited)((0, i.fetch)("/trading/check-realtime/", p), 3e4, "Timeout during check realtime has occurred."),
                        t = await e.json();
                    let o = "fail",
                        s = "";
                    const n = t.hasOwnProperty("get_permissions") ? t.get_permissions.status : "fail";
                    let u = c(t, "check_credentials"),
                        d = c(t, "get_permissions");
                    if (t.hasOwnProperty("check_credentials") && (o = t.check_credentials.status, s = void 0 !== t.check_credentials.exchanges ? `Exchanges: ${t.check_credentials.exchanges.join(", ")}` : ""), "ok" === o) r = !0, u = `realtime data is enabled for the user. ${s}`;
                    else if ("no_exchanges" === o) r = !1, u = "failed to enable realtime data for the user - exchange list is empty.";
                    else {
                        if ("skip" !== o) throw new Error(u);
                        u = "skip enable realtime data for the user - was already enabled."
                    }
                    l.logInfo(`Realtime data check: ${u}`), "ok" === n && (r = !0, d = "permissions applied for the user."), l.logInfo(`Get user permissions: ${d}`)
                } catch (e) {
                    l.logError(`Realtime data check failed: ${(0,o.clean)((0,n.getLoggerMessage)(e))}`)
                }
                return r
            }
            async function u(e) {
                const t = e.metainfo().id;
                try {
                    const r = e.getVerifyLiveAccountParams();
                    if (0 === Object.keys(r).length) throw new Error("Credentials not supplied");
                    if (r.hasOwnProperty("broker_id")) throw new Error("Parameters should not contain broker identifier");
                    const o = {
                            broker_id: t,
                            ...r
                        },
                        s = {
                            method: "PUT",
                            credentials: "include",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(o)
                        },
                        n = await (0, a.makeTimeLimited)((0, i.fetch)("/api/v1/brokers/verify-account/", s), 3e4, "Timeout during verifying account.");
                    if (!n.ok) throw new Error("Response is not ok");
                    const c = await n.json();
                    if ("ok" !== c.status) throw new Error(c.detail);
                    l.logInfo(`Account verified: ${JSON.stringify(c)}`)
                } catch (e) {
                    throw l.logError(`Account verification for broker ${t} failed: ${(0,o.clean)((0,n.getLoggerMessage)(e))}`), e
                }
            }
            async function d(e) {
                let t = !1;
                try {
                    const r = await (0, a.makeTimeLimited)((0, i.fetch)("/trading/remove-subscriptions/", {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        method: "POST",
                        credentials: "include",
                        body: JSON.stringify({
                            broker_id: e
                        })
                    }), 3e4, "Failed to remove subscriptions during timeout period");
                    if (!r.ok) throw new Error(`Response is not ok. Status: ${r.status}`);
                    const o = await r.json();
                    if ("detail" in o) throw new Error(o.detail);
                    l.logInfo(`Successfully removed realtime data subscriptions for broker ${e}`), t = !0
                } catch (t) {
                    l.logError(`Failed to remove realtime data subscriptions for broker ${e}: ${(0,o.clean)((0,n.getLoggerMessage)(t))}`)
                }
                return t
            }
        },
        423450: (e, t, r) => {
            "use strict";
            r.d(t, {
                BrokerRealtimeAdapter: () => l
            });
            var i = r(212686),
                o = r(831471),
                s = r(947809),
                a = r(482494);

            function n(e) {
                return (0, i.isCryptoSymbol)(e.type, e.typespecs) || (0, i.isIndexSymbol)(e.type, e.typespecs)
            }
            class l {
                constructor(e) {
                    this._realtimeSubscriptions = {}, this._domeSubscriptions = {}, this._lastQuoteValues = {}, this._realtimeSubscriptions = {}, this._lastQuoteValues = {}, this._connectionId = e
                }
                isTradable(e) {
                    return Promise.resolve({
                        tradable: !1
                    })
                }
                connectionStatus() {
                    return 3
                }
                formatter(e) {
                    return (0, s.getQuoteSessionInstance)("simple").formatter(e, !0)
                }
                spreadFormatter(e) {
                    const t = (0, s.getQuoteSessionInstance)("simple");
                    return Promise.all([t.snapshot(e), t.formatter(e)]).then((([e, t]) => {
                        const r = t.state();
                        return ("forex" === e.type || (0,
                            i.isCFDSymbol)(e.type, e.typespecs)) && r.minMove2 ? new o.PriceFormatter(r.minMove2) : t
                    }))
                }
                quantityFormatter(e) {
                    return Promise.resolve(new a.QuantityFormatter)
                }
                symbolInfo(e) {
                    return (0, s.getQuoteSessionInstance)("simple").snapshot(e).then((e => ({
                        minTick: e.minmov / e.pricescale,
                        qty: {
                            min: 1,
                            max: 1e10,
                            step: 1
                        },
                        description: e.description,
                        pipValue: NaN,
                        pipSize: NaN
                    })))
                }
                subscribeRealtime(e, t) {
                    let r = !1;
                    this._realtimeSubscriptions[e] || (this._realtimeSubscriptions[e] = [], r = !0);
                    const o = this._realtimeSubscriptions[e];

                    function a(e) {
                        let t;
                        const r = e.values,
                            o = r.ask || r.last_price,
                            s = r.bid || r.last_price;
                        r.spread ? t = r.spread : ("forex" === r.type || (0, i.isCFDSymbol)(r.type, r.typespecs)) && void 0 !== s && void 0 !== o && r.minmove2 && r.pricescale && (t = (o - s) * r.pricescale / r.minmove2);
                        const a = "delayed" === e.values.update_mode || "delayed_streaming" === e.values.update_mode;
                        return {
                            ask: o,
                            ask_size: r.ask_size,
                            bid: s,
                            bid_size: r.bid_size,
                            size: r.volume,
                            spread: t,
                            trade: r.last_price,
                            type: r.type,
                            originalName: r.original_name,
                            isDelayed: a
                        }
                    }
                    if (o.push(t), r)(0, s.getQuoteSessionInstance)("full").subscribe(this._connectionId, e, ((t, r) => {
                        if (t.error || !t.values || !t.values.pricescale) return;
                        this._lastQuoteValues[e] = t;
                        const i = a(t);
                        "is_tradable" in t.values && (i.is_tradable = t.values.is_tradable);
                        for (let t = 0; t < o.length; t++) o[t](e, i)
                    }));
                    else if (this._lastQuoteValues[e]) {
                        const r = a(this._lastQuoteValues[e]);
                        t(e, r)
                    }
                }
                unsubscribeRealtime(e, t) {
                    var r;
                    const i = this._realtimeSubscriptions[e];
                    if (!i) return;
                    const o = i.indexOf(t); - 1 !== o && (i.splice(o, 1), i.length || (delete this._realtimeSubscriptions[e], null === (r = (0, s.getQuoteSessionNoEnsure)("full")) || void 0 === r || r.unsubscribe(this._connectionId, e)))
                }
                subscribeDOME(e, t) {
                    let r = !1;
                    this._domeSubscriptions[e] || (this._domeSubscriptions[e] = [], r = !0);
                    const i = this._domeSubscriptions[e];

                    function o(e) {
                        const t = e.values.ask || e.values.last_price,
                            r = e.values.bid || e.values.last_price,
                            i = n(e.values) ? 0 : e.values.ask_size || 1 / 0,
                            o = n(e.values) ? 0 : e.values.bid_size || 1 / 0;
                        return {
                            snapshot: !0,
                            asks: t ? [{
                                price: t,
                                volume: i
                            }] : [],
                            bids: r ? [{
                                price: r,
                                volume: o
                            }] : []
                        }
                    }
                    if (i.push(t), r)(0, s.getQuoteSessionInstance)("full").subscribe(this._connectionId + "dom", e, ((t, r) => {
                        if (t.error || !t.values || !t.values.pricescale) return;
                        this._lastQuoteValues[e] = t;
                        const s = o(t);
                        for (let t = 0; t < i.length; t++) i[t](e, s)
                    }));
                    else if (this._lastQuoteValues[e]) {
                        const r = o(this._lastQuoteValues[e]);
                        t(e, r)
                    }
                }
                unsubscribeDOME(e, t) {
                    const r = this._domeSubscriptions[e];
                    if (!r) return;
                    const i = r.indexOf(t); - 1 !== i && (r.splice(i, 1), r.length || (delete this._domeSubscriptions[e], (0, s.getQuoteSessionInstance)("full").unsubscribe(this._connectionId + "dom", e)))
                }
                quotesSnapshot(e) {
                    return new Promise((t => {
                        const r = (e, i) => {
                            this.unsubscribeRealtime(e, r), t(i)
                        };
                        this.subscribeRealtime(e, r)
                    }))
                }
            }
        },
        26416: (e, t, r) => {
            "use strict";

            function i(e) {
                const t = new URLSearchParams;
                for (const [r, i] of Object.entries(e)) void 0 !== i && t.set(r, String(i));
                return t.toString()
            }
            r.d(t, {
                createQueryParams: () => i
            })
        },
        203528: (e, t, r) => {
            "use strict";
            r.d(t, {
                addBroker: () => Ue,
                brokersList: () => Fe,
                createBrokerConnection: () => Re
            });
            var i = r(955501),
                o = r(125226),
                s = r(83478),
                a = r(777754),
                n = r(116193),
                l = r(495046),
                c = r(758337),
                p = r(869403),
                u = r.n(p),
                d = r(650151);
            class h {
                constructor(e) {
                    this._objects = {}, this._started = !1, this._isObjectsRequestActual = !1, this._ordersPromise = null, this._getter = e, this.updateDelegate = new(u()), this.partialUpdateDelegate = new(u())
                }
                start() {
                    this._started || (this._started = !0, this._ordersPromise = this._requestObjects())
                }
                stop() {
                    this._objects = {}, this._started = !1, this._ordersPromise = null, this._isObjectsRequestActual = !1
                }
                update(e, t) {
                    this._started && (this._isObjectsRequestActual ? this._isObjectsRequestActual = !1 : (this._objects[e.id] = e, this._onObjectUpdated(e, t)))
                }
                partialUpdate(e, t) {
                    if (!this._started) return;
                    if (this._isObjectsRequestActual) return void(this._isObjectsRequestActual = !1);
                    let r, i;
                    (0, c.isObject)(e) ? (r = e.id, i = e) : (r = e, i = (0, d.ensure)(t));
                    const o = this._objects[r];
                    o && (Object.assign(o, i), this.partialUpdateDelegate.fire(o, i))
                }
                fullUpdate() {
                    this._started && (this._isObjectsRequestActual ? this._isObjectsRequestActual = !1 : this._ordersPromise = this._requestObjects())
                }
                getObjects() {
                    return this._ordersPromise || Promise.resolve(Object.values(this._objects))
                }
                _onObjectUpdated(e, t) {
                    this.updateDelegate.fire(e, t)
                }
                _onAllObjectsUpdated() {
                    this._objectsCache().forEach((e => this.updateDelegate.fire(e, !0)))
                }
                _objectsCache() {
                    return Object.values(this._objects)
                }
                async _requestObjects() {
                    let e = [];
                    do {
                        this._isObjectsRequestActual = !0, e = await this._getter()
                    } while (!this._isObjectsRequestActual);
                    var t;
                    return this._objects = (t = "id", e.reduce(((e, r) => (e[r[t]] = r, e)), {})), this._ordersPromise = null, this._isObjectsRequestActual = !1, this._onAllObjectsUpdated(), e
                }
            }
            var b = r(272001),
                g = r(595300);
            class m extends h {
                constructor(e, t) {
                    super(e), this._brokerConfigGetter = t
                }
                _onObjectUpdated(e, t) {
                    this._patchTrades(this._objectsCache().filter((t => t.symbol === e.symbol && 0 !== t.qty)), e, t), super._onObjectUpdated(e, t)
                }
                _onAllObjectsUpdated() {
                    this._patchTrades(this._objectsCache().filter((e => 0 !== e.qty))), super._onAllObjectsUpdated()
                }
                _patchTrades(e, t, r) {
                    const i = this._brokerConfigGetter();
                    let o;
                    o = i.requiresFIFOCloseTrades ? i.fifoOnlyForSameQty ? _ : f : v;
                    const s = o(e);
                    for (const e of s) t !== e && super._onObjectUpdated(e, r)
                }
            }

            function v(e) {
                const t = [];
                for (const r of e) r.canBeClosed || (r.canBeClosed = !0, t.push(r));
                return t
            }

            function f(e) {
                const t = {};
                for (const r of e) {
                    let e = t[r.symbol];
                    void 0 === e && (e = {
                        oldest: null,
                        all: []
                    }, t[r.symbol] = e), (null === e.oldest || e.oldest.date > r.date) && (e.oldest = r), e.all.push(r)
                }
                const r = [];
                for (const e of Object.keys(t)) {
                    const i = (0, d.ensureDefined)(t[e]);
                    for (const e of i.all) {
                        const t = i.oldest === e,
                            o = t !== e.canBeClosed;
                        e.canBeClosed = t, o && r.push(e)
                    }
                }
                return r
            }

            function _(e) {
                const t = {};
                for (const r of e) {
                    let e = t[r.symbol];
                    void 0 === e && (e = {}, t[r.symbol] = e);
                    let i = e[r.qty];
                    void 0 === i && (i = {
                        oldest: null,
                        all: []
                    }, e[r.qty] = i), (null === i.oldest || i.oldest.date > r.date) && (i.oldest = r), i.all.push(r)
                }
                const r = [];
                for (const e of Object.keys(t)) {
                    const i = (0, d.ensureDefined)(t[e]);
                    for (const e of Object.keys(i)) {
                        const t = (0, d.ensureDefined)(i[e]);
                        for (const e of t.all) {
                            const i = t.oldest === e,
                                o = i !== e.canBeClosed;
                            e.canBeClosed = i, o && r.push(e)
                        }
                    }
                }
                return r
            }
            const y = (0, b.getLogger)("Trading.Migrations");
            var k = r(703819),
                S = r(535799),
                C = r(835343),
                w = r(777491),
                P = r(910368);

            function T(e, t) {
                return {
                    symbol: t.symbol,
                    type: 2,
                    side: 1 === t.side ? -1 : 1,
                    qty: Math.abs(e),
                    seenPrice: null,
                    isClose: !0
                }
            }
            var M = r(276889);
            class O {
                constructor() {
                    this._validators = new Map
                }
                add(e, t) {
                    this._validators.set(t, e)
                }
                validate(e) {
                    const t = {};
                    let r = !0;
                    for (const [i, o] of this._validators.entries()) {
                        const s = o.validate(e);
                        s.isValid || (r = !1, t[i] = s.errorMessage)
                    }
                    return r ? {
                        isValid: r
                    } : {
                        isValid: r,
                        errorMessages: t
                    }
                }
            }
            class B {
                constructor(e, t = []) {
                    this._status = M.PlaceOrEditContextStatus.Undefined, this._onStatusChange = new(u()), this._errors = {}, this._isValidationEnabled = e, this._validator = new O;
                    for (const {
                            validator: e,
                            validatorName: r
                        } of t) this._validator.add(e, r)
                }
                onReady() {
                    return this._onReady
                }
                data() {
                    return this._orderData
                }
                status() {
                    return this._status
                }
                errors() {
                    return this._errors
                }
                onStatusChange() {
                    return this._onStatusChange
                }
                async send(e) {
                    if (this._status !== M.PlaceOrEditContextStatus.Undefined) return !1;
                    this._setStatus(M.PlaceOrEditContextStatus.Loading), await this._onReady;
                    const t = await this._processSend(e),
                        r = t ? M.PlaceOrEditContextStatus.Undefined : M.PlaceOrEditContextStatus.Error;
                    return this._setStatus(r), t
                }
                async _setData(e) {
                    this._orderData = await this._processOrderData(e), this._assertOrderIsValid()
                }
                _assertOrderIsValid() {
                    const {
                        isValid: e,
                        errorMessages: t
                    } = this._validate();
                    let r = !1;
                    if (e) r = this._status !== M.PlaceOrEditContextStatus.Undefined, this._errors = {}, this._status = M.PlaceOrEditContextStatus.Undefined;
                    else {
                        const [e] = (0, c.deepEquals)(this._errors, t);
                        r = !e, this._errors = t, this._status = M.PlaceOrEditContextStatus.Error
                    }
                    r && this._onStatusChange.fire()
                }
                _setStatus(e) {
                    this._status !== e && (this._status = e, this._onStatusChange.fire())
                }
                _validate() {
                    return this._isValidationEnabled ? this._validator.validate(this._orderData) : {
                        isValid: !0
                    }
                }
            }
            var E = r(885129),
                A = r(691520);
            class I {
                constructor(e) {
                    const {
                        priceType: t,
                        quotes: r,
                        formatter: i,
                        instrumentInfo: o,
                        supportStopOrdersInBothDirections: s,
                        supportStopLimitOrdersInBothDirections: a
                    } = e;
                    this._priceType = t, this._quotes = r, this._formatter = i, this._supportStopOrdersInBothDirections = Boolean(s), this._supportStopLimitOrdersInBothDirections = Boolean(a), this._symbolType = o.type || "", this._minTick = o.minTick, this._limitPriceStep = o.limitPriceStep, this._stopPriceStep = o.stopPriceStep, this._variableMinTickData = o.variableMinTick ? (0, A.makeVariableMinTickData)(this._minTick, o.variableMinTick) : void 0
                }
                validate(e) {
                    const {
                        type: t,
                        side: i,
                        stopPrice: o,
                        limitPrice: s
                    } = e, n = 2 === this._priceType;
                    if (2 === t || n && 1 === t || !n && 3 === t) return {
                        isValid: !0
                    };
                    const l = n ? o : s;
                    if (void 0 === l) return {
                        isValid: !1,
                        errorMessage: a.t(null, void 0, r(347957))
                    };
                    const c = (0, P.getPriceStep)({
                            price: l,
                            priceType: this._priceType,
                            minTick: this._minTick,
                            variableMinTickData: this._variableMinTickData,
                            limitPriceStep: this._limitPriceStep,
                            stopPriceStep: this._stopPriceStep
                        }),
                        p = (0, P.roundToStepRequired)({
                            priceType: this._priceType,
                            minTick: this._minTick,
                            limitPriceStep: this._limitPriceStep,
                            stopPriceStep: this._stopPriceStep
                        }),
                        u = (0, E.validatePrice)({
                            price: l,
                            askOrBid: (0, P.getQuotePrice)(this._quotes, i),
                            orderType: t,
                            side: i,
                            isStopPrice: n,
                            isForex: "forex" === this._symbolType,
                            formatter: this._formatter,
                            supportStopOrdersInBothDirections: this._supportStopOrdersInBothDirections,
                            supportStopLimitOrdersInBothDirections: this._supportStopLimitOrdersInBothDirections,
                            step: c,
                            roundedToStep: p
                        });
                    return u.res ? {
                        isValid: !1,
                        errorMessage: u.msg
                    } : {
                        isValid: !0
                    }
                }
            }
            var D = r(812301);
            class x {
                constructor(e) {
                    this._quantityMetainfo = e
                }
                validate(e) {
                    const t = (0, D.checkQtyError)(this._quantityMetainfo, e.qty, !0);
                    return t.res ? {
                        isValid: !1,
                        errorMessage: t.msg
                    } : {
                        isValid: !0
                    }
                }
            }
            class L {
                constructor(e) {
                    const {
                        orderDialogOptions: t
                    } = e;
                    this._orderDialogOptions = t
                }
                validate(e) {
                    var t;
                    const {
                        customFields: i
                    } = e;
                    if (void 0 === (null === (t = this._orderDialogOptions) || void 0 === t ? void 0 : t.customFields) || 0 === this._orderDialogOptions.customFields.length) return {
                        isValid: !0
                    };
                    const o = [];
                    return this._orderDialogOptions.customFields.forEach((e => {
                        void 0 === (null == i ? void 0 : i[e.id]) && o.push(e.title)
                    })), 0 === o.length ? {
                        isValid: !0
                    } : {
                        isValid: !1,
                        errorMessage: a.t(null, void 0, r(346881)).format({
                            customFields: o.join(", ")
                        })
                    }
                }
            }
            class U extends B {
                constructor(e) {
                    const {
                        orderData: t,
                        instrumentInfo: r,
                        quotes: i,
                        configFlags: o,
                        formatter: s,
                        isValidationEnabled: a,
                        orderDialogOptions: n,
                        callbacks: l
                    } = e;
                    super(a, [{
                        validator: new x(r.qty),
                        validatorName: "qty"
                    }, {
                        validator: new I({
                            priceType: 2,
                            quotes: i,
                            formatter: s,
                            instrumentInfo: r,
                            supportStopOrdersInBothDirections: o.supportStopOrdersInBothDirections,
                            supportStopLimitOrdersInBothDirections: o.supportStopLimitOrdersInBothDirections
                        }),
                        validatorName: "stopPrice"
                    }, {
                        validator: new I({
                            priceType: 1,
                            quotes: i,
                            formatter: s,
                            instrumentInfo: r,
                            supportStopOrdersInBothDirections: o.supportStopOrdersInBothDirections,
                            supportStopLimitOrdersInBothDirections: o.supportStopLimitOrdersInBothDirections
                        }),
                        validatorName: "limitPrice"
                    }, {
                        validator: new L({
                            orderDialogOptions: n
                        }),
                        validatorName: "customFields"
                    }]), this._createInitialPreOrder = l.createInitialPreOrder, this._placeOrder = l.placeOrder, this._previewOrder = l.previewOrder, this._onReady = this._setData(t)
                }
                async preview() {
                    return this._status === M.PlaceOrEditContextStatus.Error ? {
                        sections: []
                    } : this._previewOrder(this._orderData)
                }
                externalContext() {
                    return {
                        type: M.PlaceOrEditContextType.PlaceOrder,
                        data: () => this.data(),
                        send: () => this.send(),
                        status: () => this.status(),
                        errors: () => this.errors()
                    }
                }
                _processSend(e) {
                    return this._placeOrder(this._orderData, e)
                }
                _processOrderData(e) {
                    return this._createInitialPreOrder(e)
                }
            }
            var F = r(822914),
                N = r(547623);
            class R extends B {
                constructor(e) {
                    const {
                        orderData: t,
                        callbacks: r
                    } = e;
                    super(!1), this._modifyOrder = r.modifyOrder, this._metainfo = r.metainfo, this._symbolInfo = r.symbolInfo, this._orderById = r.orderById, this._onReady = this._setData(t)
                }
                externalContext() {
                    return {
                        type: M.PlaceOrEditContextType.EditOrder,
                        data: () => this.data(),
                        send: () => this.send(),
                        status: () => this.status(),
                        errors: () => this.errors()
                    }
                }
                async _processOrderData(e) {
                    if (!this._metainfo().configFlags.supportModifyTrailingStop) {
                        const t = await this._orderById(e.id);
                        e.hasTrailingStopBracket = void 0 !== t && void 0 !== t.trailingStopPips
                    }
                    const {
                        limitPriceStep: t,
                        stopPriceStep: r
                    } = await this._symbolInfo(e.symbol);
                    if (e.limitPrice = void 0 !== t && void 0 !== e.limitPrice ? (0, k.roundToStepByPriceTypeAndSide)(e.limitPrice, t, 1, e.side) : e.limitPrice, e.stopPrice = void 0 !== r && void 0 !== e.stopPrice ? (0, k.roundToStepByPriceTypeAndSide)(e.stopPrice, r, 2, e.side) : e.stopPrice, void 0 !== e.parentId && !l.enabled("always_pass_called_order_to_modify")) {
                        let t;
                        try {
                            t = await this._orderById(e.parentId)
                        } catch (e) {
                            (0, k.getLoggerMessage)(e)
                        }
                        if (void 0 !== t && (0, P.isOrderActive)(t.status)) {
                            const r = (0, F.default)(t);
                            return void 0 !== e.limitPrice && (r.takeProfit = e.limitPrice), void 0 !== e.stopPrice && (e.stopType === N.StopType.TrailingStop && void 0 !== e.trailingStopPips ? (r.trailingStopPips = e.trailingStopPips, delete r.stopLoss) : (r.stopLoss = e.stopPrice, delete r.trailingStopPips)), r
                        }
                    }
                    return e
                }
                _processSend(e) {
                    return this._modifyOrder(this._orderData, e)
                }
                _configureValidator() {}
            }
            var V = r(462282);
            const q = (0, b.getLogger)("Trading.BrokerConnectionAdapter"),
                G = a.t(null, void 0, r(473142)),
                W = a.t(null, void 0, r(945593));

            function z(e) {
                (0, d.assert)("object" != typeof e, "Expected not an object")
            }

            function K(e, t) {
                return e.type === t.type && e.qty === t.qty && e.limitPrice === t.limitPrice && e.stopPrice === t.stopPrice && e.takeProfit === t.takeProfit && e.stopLoss === t.stopLoss && e.trailingStopPips === t.trailingStopPips
            }
            class j {
                constructor({
                    brokerMetainfo: e,
                    brokerConnection: t,
                    host: i,
                    brokerRealtimeAdapter: o,
                    tradingStat: s,
                    tradingSettingsStorageGetter: n,
                    brokerPlan: l
                }) {
                    this.connectionStatusUpdate = new(u()), this.executionUpdate = new(u()), this.tradingOperationFinished = new(u()), this.currentAccountUpdate = new(u()), this._brokerPlan = null, this._subscriptions = {}, this._lastFireResult = {}, this._fakeDomeSubscriptions = {}, this._formattersCache = {}, this._spreadFormattersCache = {}, this._quantityFormattersCache = {}, this._tradesCache = null, this._fakePositionUpdateDelegate = null, this._realtimeSubscriptionState = [], this._loggedInManually = !1, this._pendingSubscriptions = [], this._sessionId = (0, w.guid)(), this.leverageInfo = e => {
                            if (this.config.supportLeverage && this._brokerConnection.leverageInfo) return this._brokerConnection.leverageInfo(e);
                            throw new Error("Method leverage is not implemented")
                        }, this.setLeverage = e => {
                            if (this.config.supportLeverage && this._brokerConnection.setLeverage) return this._brokerConnection.setLeverage(e);
                            throw new Error("Method setLeverage is not implemented")
                        }, this.previewLeverage = e => {
                            if (this.config.supportLeverage && this._brokerConnection.previewLeverage) return this._brokerConnection.previewLeverage(e);
                            throw new Error("Method previewLeverage is not implemented")
                        }, this.maintenanceStatus = async () => {
                            try {
                                return void 0 !== this._brokerConnection.maintenanceStatus ? await this._brokerConnection.maintenanceStatus() : {
                                    isMaintenance: !1
                                }
                            } catch (e) {
                                return this._brokerLogger.logError(`Failed to fetch maintenance status: ${(0,k.getLoggerMessage)(e)}`), {
                                    isMaintenance: !0,
                                    message: a.t(null, {
                                        replace: {
                                            brokerName: this._brokerMetainfo.title
                                        }
                                    }, r(8793))
                                }
                            }
                        }, this.config = Object.assign({}, e.configFlags), this._brokerMetainfo = this._patchMetainfo(e), this._brokerPlan = l || null, this._brokerConnection = t, this._host = i, this._tradingStat = s, this._getTradingSettingsStorage = n,
                        this._brokerLogger = (0, b.getLogger)("Trading." + this._brokerMetainfo.id + ".Connection"), i.setBrokerConnectionAdapter(this), this._initializeConnectProtection(), this._positionsCache = t.positions ? new h((() => t.positions ? t.positions() : Promise.resolve([]))) : null, this._tradesCache = t.trades ? new m((() => t.trades ? t.trades() : Promise.resolve([])), (() => this.config)) : null, this._ordersCache = new h((() => t.orders()));
                    const c = e => {
                        1 === e ? (null !== this._positionsCache && this._positionsCache.start(), this._ordersCache.start(), this._tradesCache && this._tradesCache.start()) : (null !== this._positionsCache && this._positionsCache.stop(), this._ordersCache.stop(), this._tradesCache && this._tradesCache.stop())
                    };
                    this.connectionStatusUpdate.subscribe(null, c), c(this.connectionStatus()), this._originalDOMESubscriptionMethods = {
                        subscribeDOME: t.subscribeDOME,
                        unsubscribeDOME: t.unsubscribeDOME
                    }, this._patchBrokerSubscribeUnsubscribeDOMEMethods(), this.connectionStatusUpdate.subscribe(null, (e => {
                        1 === e && this._patchBrokerSubscribeUnsubscribeDOMEMethods()
                    })), e.configFlags.supportPositions || (this._fakePositionUpdateDelegate = new(u())), this._brokerRealtimeAdapter = o
                }
                tryRestoreSession() {
                    if (this._brokerConnection.tryRestoreSession) return this._brokerConnection.tryRestoreSession()
                }
                get orderUpdate() {
                    return this._ordersCache.updateDelegate
                }
                get positionUpdate() {
                    return null === this._fakePositionUpdateDelegate ? (0, d.ensure)(this._positionsCache).updateDelegate : this._fakePositionUpdateDelegate
                }
                get tradeUpdate() {
                    return (0, d.ensure)(this._tradesCache).updateDelegate
                }
                get orderPartialUpdate() {
                    return this._ordersCache.partialUpdateDelegate
                }
                get positionPartialUpdate() {
                    return null === this._fakePositionUpdateDelegate ? (0, d.ensure)(this._positionsCache).partialUpdateDelegate : this._fakePositionUpdateDelegate
                }
                get tradePartialUpdate() {
                    return (0, d.ensure)(this._tradesCache).partialUpdateDelegate
                }
                onOrderUpdate(e) {
                    this._ordersCache.update(e)
                }
                onOrderPartialUpdate(e, t) {
                    this._ordersCache.partialUpdate(e, t)
                }
                onPositionUpdate(e, t) {
                    if ((0, d.assert)(!!this.config.supportPositions, "Broker doesn`t support positions"), 0 === e.qty) {
                        const t = this._lastFireResult[e.id];
                        t && delete t.PL
                    }(0, d.ensure)(this._positionsCache).update(e, t)
                }
                onPositionPartialUpdate(e, t) {
                    (0, d.assert)(!!this.config.supportPositions, "Broker doesn`t support positions"), (0, d.ensure)(this._positionsCache).partialUpdate(e, t)
                }
                onTradeUpdate(e, t) {
                    if ((0, d.assert)(!!this.config.supportTrades, "Broker doesn`t support trades"), 0 === e.qty) {
                        const t = this._lastFireResult[e.symbol];
                        t && delete t.TradePL
                    }(0, d.ensure)(this._tradesCache).update(e, t)
                }
                onTradePartialUpdate(e, t) {
                    (0, d.ensure)(this._tradesCache).partialUpdate(e, t)
                }
                onCurrentAccountChanged() {
                    null !== this._positionsCache && this._positionsCache.fullUpdate(), this._ordersCache.fullUpdate(), this._tradesCache && this._tradesCache.fullUpdate();
                    const e = this.currentAccount();
                    this.currentAccountUpdate.fire(e)
                }
                patchConfig(e) {
                    var t;
                    !(t = e).hasOwnProperty("supportBrackets") || t.hasOwnProperty("supportOrderBrackets") || t.hasOwnProperty("supportPositionBrackets") || (y.logWarn("supportBrackets is deprecated. Use supportOrderBrackets and supportPositionBrackets instead."), t.supportOrderBrackets = t.supportBrackets, t.supportPositionBrackets = t.supportBrackets), t.hasOwnProperty("supportModifyOrder") && (y.logWarn("supportModifyOrder is deprecated. Use supportModifyOrderPrice, supportEditAmount and supportModifyBrackets instead."), t.supportModifyOrderPrice = t.supportModifyOrder, t.supportEditAmount = t.supportModifyOrder, t.supportModifyBrackets = t.supportModifyOrder), Object.assign(this.config, e), Object.assign(this._brokerMetainfo.configFlags, e), this._brokerMetainfo = this._patchMetainfo(this._brokerMetainfo)
                }
                async getOrderDialogOptions(e) {
                    if (void 0 !== this._brokerConnection.getOrderDialogOptions) try {
                        return await this._brokerConnection.getOrderDialogOptions(e)
                    } catch (e) {
                        return void this._brokerLogger.logError(`Failed to fetch options for the order dialog: ${(0,k.getLoggerMessage)(e)}`)
                    }
                }
                getPositionDialogOptions() {
                    return void 0 !== this._brokerConnection.getPositionDialogOptions ? this._brokerConnection.getPositionDialogOptions() : void 0
                }
                getValidationRules(e) {
                    return void 0 !== this._brokerConnection.getValidationRules ? this._brokerConnection.getValidationRules(e) : void 0
                }
                chartContextMenuActions(e, t) {
                    return this._brokerConnection.chartContextMenuActions(e, t)
                }
                buttonDropdownActions() {
                    return this._host.buttonDropdownActions()
                }
                connectionStatus() {
                    return this._brokerConnection.connectionStatus()
                }
                isConnected() {
                    return 1 === this._brokerConnection.connectionStatus()
                }
                signIn(e, t, r, i) {
                    return this._brokerLogger.logNormal(`Try to login with username: ${e}`), this._loggedInManually = !0, this._brokerConnection.signIn(e, t, r, i)
                }
                loggedInManually() {
                    return this._loggedInManually
                }
                disconnect(e = !1) {
                    try {
                        return this._brokerConnection.disconnect(e)
                    } catch (e) {
                        q.logWarn("Failed to disconnect")
                    }
                }
                currentAccount() {
                    return this._brokerConnection.currentAccount ? this._brokerConnection.currentAccount() : ""
                }
                currentAccountType() {
                    return this._brokerConnection.currentAccountType ? this._brokerConnection.currentAccountType() : void 0
                }
                metainfo() {
                    return this._brokerMetainfo
                }
                brokerPlan() {
                    return this._brokerPlan
                }
                bro() {
                    return this._brokerConnection
                }
                fireSubscription(e, t, r, i) {
                    if (void 0 === this._lastFireResult[t] && (this._lastFireResult[t] = {
                            Realtime: null,
                            PL: null,
                            Equity: null,
                            DOME: null,
                            TradePL: null,
                            PipValue: null,
                            MarginAvailable: null,
                            CryptoBalance: null
                        }), (0, d.ensure)(this._lastFireResult[t])[e] = {
                            data: r,
                            time: Date.now()
                        }, void 0 === this._subscriptions[t]) return;
                    const o = (0, d.ensure)(this._subscriptions[t]);
                    (0, d.ensure)(o[e]).forEach((e => e(t, r, i)))
                }
                positions(e) {
                    return this.config.supportPositions ? (this._makeSureBrokerIsConnected(), this._positions().then((t => t.filter((t => void 0 === e || t.symbol === e))))) : Promise.resolve([])
                }
                disconnectWarningMessage() {
                    return this._brokerConnection.disconnectWarningMessage ? this._brokerConnection.disconnectWarningMessage() : null
                }
                connectWarningMessage() {
                    return this._brokerConnection.connectWarningMessage ? this._brokerConnection.connectWarningMessage() : null
                }
                trades(e) {
                    return this._makeSureBrokerIsConnected(), (0, d.assert)(!!this.config.supportTrades, "Broker doesn`t support trades"), this._trades().then((t => t.filter((t => void 0 === e || t.symbol === e))))
                }
                positionById(e) {
                    return this._brokerConnection.positionById ? this._brokerConnection.positionById(e) : this.positions().then((t => t.find((t => t.id === e))))
                }
                tradeById(e) {
                    return (0, d.assert)(!!this.config.supportTrades, "Broker doesn`t support trades"), this.trades().then((t => t.find((t => t.id === e))))
                }
                orders(e) {
                    return this._makeSureBrokerIsConnected(), this._orders().then((t => t.filter((t => void 0 === e || t.symbol === e))))
                }
                ordersHistory() {
                    return this._makeSureBrokerIsConnected(), this.config.supportOrdersHistory && this._brokerConnection.ordersHistory ? this._brokerConnection.ordersHistory() : Promise.resolve([])
                }
                async executions(e) {
                    return this.config.supportExecutions ? (this._makeSureBrokerIsConnected(), this._brokerConnection.executions(e)) : []
                }
                async allExecutions() {
                    return void 0 === this._brokerConnection.allExecutions ? [] : this._brokerConnection.allExecutions()
                }
                orderById(e) {
                    return this._makeSureBrokerIsConnected(), this._brokerConnection.orders().then((t => t.find((t => t.id === e))))
                }
                accountManagerInfo() {
                    return this._brokerConnection.accountManagerInfo()
                }
                isTradable(e) {
                    return this._makeSureBrokerIsConnected(), this._brokerConnection.isTradable(e).then((t => ("object" != typeof t && (t = {
                        tradable: t
                    }), t.tradable || void 0 !== t.reason || (t.reason = (0, k.makeNonTradableSymbolText)((0, S.htmlEscape)(e), this._brokerMetainfo.title)), t)))
                }
                formatter(e, t = !0) {
                    return this._makeSureBrokerIsConnected(), this._formattersCache[e] || (this._formattersCache[e] = this._brokerConnection.formatter && this._brokerConnection.formatter(e, t) || this._host.defaultFormatter(e, t)), (0, g.makeTimeLimited)(this._formattersCache[e], 1e4, "formatter not received")
                }
                spreadFormatter(e) {
                    return this._makeSureBrokerIsConnected(), this._spreadFormattersCache[e] || (this._spreadFormattersCache[e] = this._brokerConnection.spreadFormatter && this._brokerConnection.spreadFormatter(e) || this._host.defaultFormatter(e, !1)), (0, g.makeTimeLimited)(this._spreadFormattersCache[e], 1e4, "spreadFormatter not received")
                }
                quantityFormatter(e) {
                    return this._makeSureBrokerIsConnected(), this._quantityFormattersCache[e] || (this._quantityFormattersCache[e] = this._brokerConnection.quantityFormatter && this._brokerConnection.quantityFormatter(e) || this._host.quantityFormatter()), (0, g.makeTimeLimited)(this._quantityFormattersCache[e], 1e4, "quantityFormatter not received")
                }
                async createInitialPreOrder(e) {
                    return this._createInitialPreOrder(e)
                }
                async createPlaceOrderContext(e, t = !0) {
                    const [r, i, o, s] = await Promise.all([this.symbolInfo(e.symbol), this.formatter(e.symbol), this.quotesSnapshot(e.symbol), this.getOrderDialogOptions(e.symbol)]), {
                        configFlags: a
                    } = this.metainfo(), n = new U({
                        orderData: e,
                        instrumentInfo: r,
                        quotes: o,
                        configFlags: a,
                        formatter: i,
                        isValidationEnabled: t,
                        orderDialogOptions: s,
                        callbacks: {
                            createInitialPreOrder: e => this._createInitialPreOrder(e),
                            placeOrder: (e, t) => this._placeOrder(e, t),
                            previewOrder: e => this._previewOrder(e)
                        }
                    });
                    return await n.onReady(), n
                }
                async createEditOrderContext(e) {
                    const t = new R({
                        orderData: e,
                        callbacks: {
                            modifyOrder: this._modifyOrder.bind(this),
                            metainfo: this.metainfo.bind(this),
                            symbolInfo: this.symbolInfo.bind(this),
                            orderById: this.orderById.bind(this)
                        }
                    });
                    return await t.onReady(), t
                }
                placeOrder(e, t) {
                    return this._placeOrder(e, t)
                }
                previewOrder(e) {
                    return this._previewOrder(e)
                }
                modifyOrder(e, t) {
                    return this._modifyOrder(e, t)
                }
                cancelOrder(e) {
                    return this._isMaintenance() ? (i.maintenance.show(this._brokerMetainfo.title), Promise.resolve(!1)) : this._isBrokerSideMaintenance() ? (s.brokerSideMaintenance.show(this._brokerMetainfo.title), Promise.resolve(!1)) : (z(e), this._makeSureBrokerIsConnected(), this.processErrors(this._brokerConnection.cancelOrder(e), !0, a.t(null, void 0, r(915926))))
                }
                cancelOrders(e, t, o) {
                    return this._isMaintenance() ? (i.maintenance.show(this._brokerMetainfo.title), Promise.resolve(!1)) : this._isBrokerSideMaintenance() ? (s.brokerSideMaintenance.show(this._brokerMetainfo.title), Promise.resolve(!1)) : (this._makeSureBrokerIsConnected(), this.processErrors(this._brokerConnection.cancelOrders(e, t, o), !0, a.t(null, void 0, r(305140))))
                }
                async closePosition(e, t) {
                    if (this._isMaintenance()) return i.maintenance.show(this._brokerMetainfo.title), !1;
                    if (this._isBrokerSideMaintenance()) return s.brokerSideMaintenance.show(this._brokerMetainfo.title), !1;
                    let r;
                    z(e), this._makeSureBrokerIsConnected(), (0, d.assert)(void 0 === t || !!this.config.supportPartialClosePosition, "Broker doesn`t support partial position closing");
                    const o = new Promise((async (i, o) => {
                        try {
                            const o = await this._positionCopyById(e);
                            r = e => {
                                void 0 !== o && e.id === o.id && e.symbol === o.symbol && e.qty !== o.qty && (this.positionUpdate.unsubscribe(this, r), i(!0))
                            }, this.positionUpdate.subscribe(this, r), await this._closePosition(e, t)
                        } catch (e) {
                            o(e)
                        }
                    }));
                    return (0, g.makeTimeLimited)(o, 3e4, "Position closing timeout").catch((e => (this._brokerLogger.logError(`${G}: ${(0,k.getLoggerMessage)(e)}`), this.positionUpdate.unsubscribe(this, r), !1)))
                }
                async closeTrade(e, t) {
                    var o;
                    if (this._isMaintenance()) return i.maintenance.show(this._brokerMetainfo.title), Promise.resolve(!1);
                    if (this._isBrokerSideMaintenance()) return s.brokerSideMaintenance.show(this._brokerMetainfo.title), Promise.resolve(!1);
                    z(e), this._makeSureBrokerIsConnected(), (0, d.assert)(!!this.config.supportTrades, "Broker doesn`t support trades"), (0, d.assert)(void 0 === t || null !== (o = this.config.supportPartialCloseTrade) && void 0 !== o && o, "Broker doesn`t support partial position closing");
                    const n = (0, d.ensureDefined)(await this.tradeById(e));
                    if (0 === n.qty) return this._host.showNotification(a.t(null, void 0, r(791401)), a.t(null, void 0, r(715842)), 0), !1;
                    if (void 0 === t || t <= Math.abs(n.qty)) {
                        if (this._brokerConnection.closeTrade) {
                            const r = T(null != t ? t : Math.abs(n.qty), n);
                            return this.processErrors(this._brokerConnection.closeTrade(e, t), !0, G, (() => (0, d.ensureNotNull)(this._tradingStat).trackOrderPlaced(r)))
                        }
                        throw new Error("Method closeTrade is not implemented")
                    }
                    return this._host.showNotification(a.t(null, void 0, r(791401)), a.t(null, void 0, r(365389)), 0), !1
                }
                reversePosition(e) {
                    if (this._isMaintenance()) return i.maintenance.show(this._brokerMetainfo.title), Promise.resolve(!1);
                    if (this._isBrokerSideMaintenance()) return s.brokerSideMaintenance.show(this._brokerMetainfo.title), Promise.resolve(!1);
                    if (z(e), this._makeSureBrokerIsConnected(), this.config.supportMultiposition && !this.config.supportNativeReversePosition) throw new Error("Cannot reverse position on multiposition account");
                    let t;
                    const r = new Promise((async (r, i) => {
                        try {
                            const i = await this._positionCopyById(e);
                            t = e => {
                                void 0 !== i && e.symbol === i.symbol && e.side !== i.side && (this.positionUpdate.unsubscribe(this, t), r(!0))
                            }, this.positionUpdate.subscribe(this, t), await this._reversePosition(e)
                        } catch (e) {
                            i(e)
                        }
                    }));
                    return (0, g.makeTimeLimited)(r, 3e4, "Position reversing timeout").catch((e => (this._brokerLogger.logError(`${W}: ${(0,k.getLoggerMessage)(e)}`), this.positionUpdate.unsubscribe(this, t), !1)))
                }
                editPositionBrackets(e, t, o) {
                    if (this._isMaintenance()) return i.maintenance.show(this._brokerMetainfo.title), Promise.resolve(!1);
                    if (this._isBrokerSideMaintenance()) return s.brokerSideMaintenance.show(this._brokerMetainfo.title), Promise.resolve(!1);
                    if (this._makeSureBrokerIsConnected(), this._brokerConnection.editPositionBrackets) return this.processErrors(this._brokerConnection.editPositionBrackets(e, t, o), !0, a.t(null, void 0, r(140766)));
                    throw new Error("Method editPositionBrackets is not implemented")
                }
                editTradeBrackets(e, t) {
                    if (this._isMaintenance()) return i.maintenance.show(this._brokerMetainfo.title), Promise.resolve(!1);
                    if (this._isBrokerSideMaintenance()) return s.brokerSideMaintenance.show(this._brokerMetainfo.title), Promise.resolve(!1);
                    if (this._makeSureBrokerIsConnected(), (0, d.assert)(!!this.config.supportTradeBrackets, "Broker doesn`t support brackets on trades"), this._brokerConnection.editTradeBrackets) return this.processErrors(this._brokerConnection.editTradeBrackets(e, t), !0, a.t(null, void 0, r(140766)));
                    throw new Error("Method editTradeBrackets is not implemented")
                }
                async subscribeRealtime(e, t) {
                    this._makeSureBrokerIsConnected();
                    const r = {
                        symbol: e,
                        listener: t,
                        provider: 0
                    };
                    this._realtimeSubscriptionState.push(r);
                    const i = await this.symbolInfo(e),
                        o = this._realtimeSubscriptionState.findIndex((r => r.symbol === e && r.listener === t));
                    if (-1 !== o) return void 0 !== i.hasQuotes && !1 === i.hasQuotes ? (this._realtimeSubscriptionState[o].provider = 1, (0, d.ensure)(this._brokerRealtimeAdapter).subscribeRealtime(e, t)) : (this._realtimeSubscriptionState[o].provider = 2, this._addSubscription("Realtime", e, t))
                }
                async quotesSnapshot(e) {
                    let t, r;
                    const i = (e, o) => {
                            r = o, (o.ask || o.bid) && (this.unsubscribeRealtime(e, i), null == t || t(o))
                        },
                        o = new Promise((r => {
                            t = r, this.subscribeRealtime(e, i)
                        }));
                    try {
                        return await (0, g.makeTimeLimited)(o, 1e4, "quotesSnapshot not received")
                    } catch (t) {
                        if (this.unsubscribeRealtime(e, i), void 0 !== r) return r;
                        throw t
                    }
                }
                subscribeDOME(e, t) {
                    return this._makeSureBrokerIsConnected(), this._addSubscription("DOME", e, t)
                }
                subscribePipValue(e, t) {
                    return this._makeSureBrokerIsConnected(),
                        this._addSubscription("PipValue", e, t)
                }
                subscribePL(e, t) {
                    this._makeSureBrokerIsConnected(), this._addSubscription("PL", e, t)
                }
                subscribeTradePL(e, t) {
                    return this._makeSureBrokerIsConnected(), this._addSubscription("TradePL", e, t)
                }
                subscribeCryptoBalance(e, t) {
                    return this._makeSureBrokerIsConnected(), this._addSubscription("CryptoBalance", e, t)
                }
                subscribeEquity(e) {
                    return this._makeSureBrokerIsConnected(), this._addSubscription("Equity", "Equity", e)
                }
                subscribeMarginAvailable(e) {
                    return this._makeSureBrokerIsConnected(), this._addSubscription("MarginAvailable", "MarginAvailable", e)
                }
                unsubscribeRealtime(e, t) {
                    const r = this._realtimeSubscriptionState.findIndex((r => r.symbol === e && r.listener === t)); - 1 !== r && (1 === this._realtimeSubscriptionState[r].provider ? (0, d.ensure)(this._brokerRealtimeAdapter).unsubscribeRealtime(e, t) : this._removeSubscription("Realtime", e, t), this._realtimeSubscriptionState.splice(r, 1))
                }
                unsubscribeDOME(e, t) {
                    this._removeSubscription("DOME", e, t)
                }
                unsubscribePipValue(e, t) {
                    this._removeSubscription("PipValue", e, t)
                }
                unsubscribePL(e, t) {
                    this._removeSubscription("PL", e, t)
                }
                unsubscribeTradePL(e, t) {
                    this._removeSubscription("TradePL", e, t)
                }
                unsubscribeCryptoBalance(e, t) {
                    this._removeSubscription("CryptoBalance", e, t)
                }
                unsubscribeEquity(e) {
                    this._removeSubscription("Equity", "Equity", e)
                }
                unsubscribeMarginAvailable(e) {
                    this._removeSubscription("MarginAvailable", "MarginAvailable", e)
                }
                async accountMetainfo() {
                    const e = await this.accountsMetainfo(),
                        t = this.currentAccount(),
                        r = e.find((e => e.id === t));
                    if (void 0 === r) throw new Error("accountMetainfo not received");
                    return r
                }
                accountsMetainfo() {
                    return (0, g.makeTimeLimited)(this._brokerConnection.accountsMetainfo(), 1e4, "accountsMetainfo not received")
                }
                setCurrentAccount(e) {
                    if (void 0 === this._brokerConnection.setCurrentAccount) throw new Error(`${this._brokerMetainfo.title} doesn't support sub-accounts`);
                    this._brokerConnection.setCurrentAccount(e)
                }
                symbolInfo(e) {
                    return (0, g.makeTimeLimited)(this._brokerConnection.symbolInfo(e), 1e4, "symbolInfo not received")
                }
                async getPositionCurrency(e) {
                    try {
                        const t = await this._brokerConnection.symbolInfo(e);
                        if (this._brokerMetainfo.configFlags.positionPLInInstrumentCurrency && void 0 !== t.currency) return t.currency;
                        const r = await this.accountMetainfo();
                        return (0, P.getCurrency)(r, !0)
                    } catch (e) {
                        return void q.logError(e)
                    }
                }
                sessionId() {
                    return this._sessionId
                }
                bugReportInfo() {
                    function e(e) {
                        return JSON.parse(JSON.stringify(e))
                    }

                    function t(e) {
                        if ("object" != typeof e) return e;
                        if ((0, c.isArray)(e)) return e.map(t);
                        const r = {};
                        for (const t in e) "object" != typeof e[t] && (r[t] = e[t]);
                        return r
                    }
                    return Promise.all([this.orders(), this.positions(), this.config.supportTrades ? this.trades() : Promise.resolve([])]).then((r => ({
                        activeBroker: this.metainfo().title,
                        orders: t(e(r[0])),
                        positions: t(e(r[1])),
                        trades: t(e(r[2])),
                        silentOrdersPlacement: this._host.silentOrdersPlacement().value(),
                        floatingPanel: (0, d.ensureNotNull)(this._host.sellBuyButtonsVisibility()).value(),
                        account: this.currentAccount(),
                        accountType: this.currentAccountType(),
                        lastUpdates: this._lastFireResult,
                        time: Date.now(),
                        brokerSpecific: this._brokerConnection.bugReportInfo ? this._brokerConnection.bugReportInfo() : null,
                        sessionId: this._sessionId
                    })))
                }
                processErrors(e, t, i, o) {
                    if (!(0, c.isPromise)(e)) throw new Error("Broker incorrectly implements API, should return Promise");
                    return e.then((e => o && o(e))).then((e => "boolean" != typeof e || e)).catch((e => {
                        if ((0, V.isAbortError)((0, k.getErrorCauses)(e)[0])) return Promise.resolve(!1);
                        let o = "";
                        return "string" == typeof e ? o = e : "object" == typeof e && "string" == typeof e.message && (o = (0, S.removeTags)(e.message)), t && l.enabled("trading_notifications") ? (0 !== o.length && ("." !== o.slice(-1) && (o += "."), o += " "), o += a.t(null, void 0, r(352303)), this._host.showNotification(i || "", o, 0)) : q.logWarn(e), Promise.resolve(!1)
                    })).then((e => (this.tradingOperationFinished.fire(e), e)))
                }
                setDurations(e) {
                    this._brokerMetainfo.durations = e.slice()
                }
                setSymbolSearchId(e) {
                    this._brokerMetainfo.backendBrokerName = e
                }
                getRealtimeDataCheckParams() {
                    return this._brokerConnection.getRealtimeDataCheckParams ? this._brokerConnection.getRealtimeDataCheckParams() : {}
                }
                getVerifyLiveAccountParams() {
                    if (void 0 === this._brokerConnection.getVerifyLiveAccountParams) throw new Error(`Method getVerifyLiveAccountParams for broker ${this._brokerMetainfo.id} is not implemented`);
                    return this._brokerConnection.getVerifyLiveAccountParams()
                }
                unhideSymbolSearchGroups() {
                    return this._brokerConnection.unhideSymbolSearchGroups ? this._brokerConnection.unhideSymbolSearchGroups() : []
                }
                destroy() {
                    void 0 !== this._brokerConnection.destroy && this._brokerConnection.destroy()
                }
                currentBroker() {
                    return this._brokerMetainfo.id
                }
                async _createInitialPreOrder(e) {
                    var t, r, i;
                    if (void 0 === e.duration) {
                        const {
                            allowedDurations: o
                        } = await this.symbolInfo(e.symbol), {
                            durations: s
                        } = this.metainfo(), a = (0, P.getOrderDuration)({
                            orderDuration: void 0,
                            orderType: e.type,
                            savedDuration: null !== (i = null === (r = null === (t = this._getTradingSettingsStorage) || void 0 === t ? void 0 : t.call(this)) || void 0 === r ? void 0 : r.duration(e.symbol, e.type)) && void 0 !== i ? i : null,
                            orderDurations: s,
                            symbolDurations: o
                        });
                        null !== a && (e.duration = a)
                    }
                    if (void 0 === e.customFields) {
                        const t = await this._getSavedCustomFields(e.symbol, e.type);
                        void 0 !== t && (e.customFields = t)
                    }
                    return e
                }
                async _getSavedCustomFields(e, t) {
                    var r, i;
                    const o = await this.getOrderDialogOptions(e),
                        s = null !== (i = null === (r = this._getTradingSettingsStorage) || void 0 === r ? void 0 : r.call(this)) && void 0 !== i ? i : void 0;
                    if (void 0 === s || void 0 === (null == o ? void 0 : o.customFields) || 0 === o.customFields.length) return;
                    const a = o.customFields.map((e => e.id)),
                        n = s.customFields(e, t, a),
                        l = (0, P.adjustSavedCustomFieldsValues)(n, o);
                    return 0 !== Object.keys(l).length ? l : void 0
                }
                _placeOrder(e, t) {
                    return this._isMaintenance() ? (i.maintenance.show(this._brokerMetainfo.title), Promise.resolve(!1)) : this._isBrokerSideMaintenance() ? (s.brokerSideMaintenance.show(this._brokerMetainfo.title), Promise.resolve(!1)) : (this._makeSureBrokerIsConnected(), this.processErrors(this._brokerConnection.placeOrder(e, t), !0, a.t(null, void 0, r(842180)), (t => {
                        (0, d.ensureNotNull)(this._tradingStat).trackOrderPlaced({ ...e,
                                id: t.orderId
                            }),
                            this._host.trackEvent("", "SilentMode", this._host.silentOrdersPlacement().value() ? "On" : "Off")
                    })))
                }
                async _modifyOrder(e, t) {
                    if (this._isMaintenance()) return i.maintenance.show(this._brokerMetainfo.title), Promise.resolve(!1);
                    if (this._isBrokerSideMaintenance()) return s.brokerSideMaintenance.show(this._brokerMetainfo.title), Promise.resolve(!1);
                    this._makeSureBrokerIsConnected();
                    const o = new Set((await this._orders()).map((({
                        id: e
                    }) => e)));
                    o.delete(e.id);
                    return await this.processErrors(this._brokerConnection.modifyOrder(e, t), !0, a.t(null, void 0, r(54746)), (() => (0, d.ensureNotNull)(this._tradingStat).trackOrderModified(e))) && this._waitForOrderModification(e, o)
                }
                _previewOrder(e) {
                    if (!this._brokerConnection.previewOrder) throw new Error("Order preview is not supported");
                    return this._brokerConnection.previewOrder(e)
                }
                _initializeConnectProtection() {
                    let e = null;
                    this.connectionStatusUpdate.subscribe(null, (t => {
                        if (e && (clearTimeout(e), e = null), 2 === t) {
                            const t = (0, P.isOAuthAuthType)(this.config.authorizationType) ? 3e5 : 6e4;
                            e = setTimeout((() => {
                                this._host.selectBroker(), this._host.showNotification(a.t(null, void 0, r(170891)), a.t(null, void 0, r(247956)))
                            }), t)
                        }
                    }))
                }
                _fakeSubscribeDOME(e) {
                    this._fakeDomeSubscriptions[e] = (e, t) => {
                        const r = t.ask || t.trade,
                            i = t.bid || t.trade,
                            o = {
                                snapshot: !0,
                                asks: r ? [{
                                    price: r,
                                    volume: t.ask_size || 1 / 0
                                }] : [],
                                bids: i ? [{
                                    price: i,
                                    volume: t.bid_size || 1 / 0
                                }] : []
                            };
                        this._host.domeUpdate(e, o)
                    }, this.subscribeRealtime(e, this._fakeDomeSubscriptions[e])
                }
                _fakeUnsubscribeDOME(e) {
                    this.unsubscribeRealtime(e, this._fakeDomeSubscriptions[e])
                }
                _isMaintenance() {
                    return (0, o.isFeatureEnabled)((0, P.makeMaintananceFeatureToggleName)(this._brokerMetainfo.id))
                }
                _isBrokerSideMaintenance() {
                    return (0, o.isFeatureEnabled)((0, P.makeBrokerSideMaintananceFeatureToggleName)(this._brokerMetainfo.id))
                }
                async _positionCopyById(e) {
                    const t = await this.positionById(e);
                    return void 0 !== t ? (0, n.default)(t) : void 0
                }
                _patchBrokerSubscribeUnsubscribeDOMEMethods() {
                    const e = !this._brokerMetainfo.configFlags.supportLevel2Data;
                    this._brokerConnection.subscribeDOME = e ? e => {
                        this._fakeSubscribeDOME(e)
                    } : this._originalDOMESubscriptionMethods.subscribeDOME, this._brokerConnection.unsubscribeDOME = e ? e => {
                        this._fakeUnsubscribeDOME(e)
                    } : this._originalDOMESubscriptionMethods.unsubscribeDOME
                }
                _patchMetainfo(e) {
                    const t = (0, C.deepCopy)(e);
                    return t.configFlags.supportNativeReversePosition = !this.config.supportMultiposition || this.config.supportNativeReversePosition, t.configFlags.supportClosePosition = !0, t.configFlags.supportPLUpdate = !0, t
                }
                _addSubscription(e, t, r) {
                    this._pendingSubscriptions.push({
                        brokerMethodName: e,
                        symbol: t,
                        listener: r
                    });
                    const i = this._lastFireResult[t];
                    if (void 0 !== i && void 0 !== i[e] && null !== i[e] && r(t, i[e].data), !this._removePendingSubscription({
                            brokerMethodName: e,
                            symbol: t,
                            listener: r
                        })) return;
                    void 0 === this._subscriptions[t] && (this._subscriptions[t] = {
                        Realtime: [],
                        PL: [],
                        Equity: [],
                        DOME: [],
                        TradePL: [],
                        PipValue: [],
                        MarginAvailable: [],
                        CryptoBalance: []
                    });
                    const o = (0, d.ensure)(this._subscriptions[t]),
                        s = o[e].length > 0;
                    if (o[e].push(r), !s && (o[e].length > 0 || "CryptoBalance" === e)) {
                        const r = "subscribe" + e;
                        this._brokerConnection[r] && this._brokerConnection[r](t)
                    }
                }
                _removePendingSubscription(e) {
                    const t = this._pendingSubscriptions.findIndex((t => t.symbol === e.symbol && t.brokerMethodName === e.brokerMethodName && t.listener === e.listener));
                    return -1 !== t && (this._pendingSubscriptions.splice(t, 1), !0)
                }
                _removeSubscription(e, t, r) {
                    if (this._removePendingSubscription({
                            brokerMethodName: e,
                            symbol: t,
                            listener: r
                        })) return;
                    if (void 0 === this._subscriptions[t]) return;
                    const i = (0, d.ensure)(this._subscriptions[t]),
                        o = i[e].indexOf(r);
                    if (o > -1 && i[e].splice(o, 1), 0 === i[e].length) {
                        const r = "unsubscribe" + e;
                        this._brokerConnection[r] && this._brokerConnection[r](t)
                    }
                }
                _positions() {
                    return this._positionsCache ? this._positionsCache.getObjects() : Promise.resolve([])
                }
                _trades() {
                    return this._tradesCache ? this._tradesCache.getObjects() : Promise.resolve([])
                }
                _orders() {
                    return this._ordersCache.getObjects()
                }
                _makeSureBrokerIsConnected() {
                    (0, d.assert)(1 === this.connectionStatus(), "Broker is not connected")
                }
                _placeReversePositionOrder(e) {
                    const t = T(2 * e.qty, e);
                    return this._placeOrder(t)
                }
                async _closePosition(e, t) {
                    const i = (0, d.ensureDefined)(await this.positionById(e));
                    if (0 === i.qty) {
                        const e = a.t(null, void 0, r(715842));
                        throw this._host.showNotification(G, e, 0), new Error(e)
                    }
                    if (void 0 === t || t <= Math.abs(i.qty)) {
                        const r = T(null != t ? t : Math.abs(i.qty), i);
                        return this.config.supportClosePosition && this._brokerConnection.closePosition ? void await this.processErrors(this._brokerConnection.closePosition(e, t), !0, G, (() => (0, d.ensureNotNull)(this._tradingStat).trackOrderPlaced(r))) : void await this.processErrors(this._brokerConnection.placeOrder(r), !0, G, (() => (0, d.ensureNotNull)(this._tradingStat).trackOrderPlaced(r)))
                    } {
                        const e = a.t(null, void 0, r(365389));
                        throw this._host.showNotification(G, e, 0), new Error(e)
                    }
                }
                async _reversePosition(e) {
                    const t = (0, d.ensureDefined)(await this.positionById(e));
                    if (0 === t.qty) {
                        const e = a.t(null, void 0, r(726500));
                        throw this._host.showNotification(W, e, 0), new Error(e)
                    }
                    this.config.supportNativeReversePosition && this._brokerConnection.reversePosition ? await this.processErrors(this._brokerConnection.reversePosition(e), !0, W) : await this.processErrors(this._placeReversePositionOrder(t), !0, W, (() => (0, d.ensureNotNull)(this._tradingStat).trackOrderPlaced()))
                }
                async _waitForOrderModification(e, t) {
                    return new Promise((async r => {
                        const i = () => {
                                r(!0), s(), clearTimeout(a)
                            },
                            o = t => {
                                K(t, e) && i()
                            },
                            s = () => this.orderUpdate.unsubscribe(this, o),
                            a = setTimeout((() => {
                                r(!1), this._brokerLogger.logError("Failed to modify order: timeout waiting for new order"), s()
                            }), 3e4);
                        this.orderUpdate.subscribe(this, o);
                        for (const r of await this._orders())
                            if (!t.has(r.id) && K(e, r)) return void i()
                    }))
                }
            }
            var H = r(960521),
                X = r(62802),
                $ = r.n(X),
                Q = r(988411),
                Y = r.n(Q),
                J = r(747342),
                Z = r(951512),
                ee = r(482494),
                te = r(947809),
                re = r(831471),
                ie = r(175203),
                oe = r(839391),
                se = r.n(oe),
                ae = r(664434),
                ne = r(615494);

            function le(e) {
                ie.telemetry.sendReport("trading", "symbol_mapper_http_status", {
                    value: e
                })
            }
            const ce = (0, b.getLogger)("Trading.SymbolMapperAsync");

            function pe(e) {
                if (!e.includes(":")) return {
                    text: e
                };
                const [t, r] = e.split(":");
                return {
                    exchange: t,
                    text: r
                }
            }

            function ue(e) {
                return ce.logWarn(`Symbol ${e} is not mapped`), null
            }
            class de {
                constructor(e, t) {
                    this._tvToBrokerCache = new Map, this._brokerToTvCache = new Map, this._brokerName = e, this._serverLogger = t, this._requestBrokerToTv = (0, ne.memoize)(se()(this._batchRequestBrokerToTv, 150, {
                        accumulate: !0
                    })), this._requestTvToBroker = (0, ne.memoize)(this._requestTvToBroker)
                }
                async tvToBroker(e) {
                    var t;
                    return null !== (t = this._tvToBrokerCache.get(e)) && void 0 !== t ? t : this._requestTvToBroker(e)
                }
                async brokerToTv(e) {
                    var t;
                    return null !== (t = this._brokerToTvCache.get(e)) && void 0 !== t ? t : this._requestBrokerToTv(e)
                }
                async _requestTvToBroker(e) {
                    const t = this._tvToBrokerCache.get(e);
                    if (void 0 !== t) return t;
                    const r = this._makeTvToBrokerSymbolSearchOptions(e);
                    try {
                        const t = await (0, k.retryWithChangingIntervals)((() => (0, ae.searchSymbols)(r)), [2, 200, 2e3, 1e4]);
                        if (0 === t.length) return this._processNotMappedTvSymbol(e);
                        le(200);
                        const i = this._extractBrokerSymbol(t[0]);
                        return null === this._brokerToTvCache.get(i) ? this._processNotMappedTvSymbol(e) : (this._tvToBrokerCache.set(e, i), this._brokerToTvCache.set(i, e), i)
                    } catch (t) {
                        return le(500), ce.logError(`Symbol search request error: ${(0,k.getLoggerMessage)(t)}`), this._processNotMappedTvSymbol(e)
                    }
                }
                async _batchRequestBrokerToTv(e) {
                    const t = [].concat(...e),
                        r = t.filter((e => !this._brokerToTvCache.has(e)));
                    if (0 === r.length) return this._rearrangeSymbolSearchResult([], t);
                    const i = this._makeBrokerToTvSymbolSearchOptions(r);
                    try {
                        const e = await (0, k.retryWithChangingIntervals)((() => (0, ae.searchSymbols)(i)), [2, 200, 2e3, 1e4]);
                        return 0 === e.length ? r.map(ue) : (le(200), this._rearrangeSymbolSearchResult(e, t))
                    } catch (r) {
                        le(500), ce.logError(`Symbol search request error: ${(0,k.getLoggerMessage)(r)}`);
                        for (const e of t) this._brokerToTvCache.set(e, null);
                        return Array(e.length).fill(null)
                    }
                }
                _rearrangeSymbolSearchResult(e, t) {
                    const r = this._convertSymbolSearchResultsToBrokerToTvMapping(e);
                    return t.map((e => {
                        const t = this._brokerToTvCache.get(e);
                        if (void 0 !== t) return t;
                        const i = r.get(e);
                        return void 0 === i || null === this._tvToBrokerCache.get(i) ? this._processNotMappedBrokerSymbol(e) : (this._brokerToTvCache.set(e, i), this._tvToBrokerCache.set(i, e), i)
                    }))
                }
                _makeCommonSymbolSearchOptions(e) {
                    return {
                        brokerId: e,
                        serverHighlight: !1,
                        onlyTradable: !0,
                        strictMatch: !0,
                        serverLogger: this._serverLogger
                    }
                }
                _makeTvToBrokerSymbolSearchOptions(e) {
                    return { ...this._makeCommonSymbolSearchOptions(this._brokerName),
                        ...pe(e)
                    }
                }
                _makeBrokerToTvSymbolSearchOptions(e) {
                    return { ...this._makeCommonSymbolSearchOptions(this._brokerName),
                        brokerSymbols: e,
                        noLimits: !0
                    }
                }
                _extractBrokerSymbol(e) {
                    return void 0 !== e.contracts ? e.contracts[0].broker_symbol : e.broker_symbol
                }
                _makeMappingPair(e, t, r) {
                    return [t, `${e.prefix||e.exchange}:${r}`]
                }
                _convertSymbolSearchResultsToBrokerToTvMapping(e) {
                    return new Map(e.reduce(((e, t) => (void 0 === t.contracts ? e.push(this._makeMappingPair(t, t.broker_symbol, t.symbol)) : e.push(...t.contracts.map((e => this._makeMappingPair(t, e.broker_symbol, e.symbol)))), e)), []))
                }
                _processNotMappedTvSymbol(e) {
                    return this._tvToBrokerCache.set(e, null), ue(e)
                }
                _processNotMappedBrokerSymbol(e) {
                    return this._brokerToTvCache.set(e, null), ue(e)
                }
            }
            var he = r(345848);
            const be = (0, b.getLogger)("Trading.SymbolMapperSync");

            function ge(e) {
                ie.telemetry.sendReport("trading", "symbol_mapper_sync_http_status", {
                    value: e
                })
            }
            class me {
                constructor(e, t, r) {
                    this._tvToBroker = {}, this._brokerToTv = {}, this.ready = () => this._readyPromise, this._appendSymbol = e => {
                        const t = this._getTvSymbols(e),
                            r = this._getBrokerSymbols(e);
                        t.forEach(((e, t) => {
                            const i = r[t];
                            this._tvToBroker[e] = i, this._brokerToTv[i] = e
                        }))
                    }, this._serverLogger = t, void 0 !== (null == r ? void 0 : r.unhideSymbolSearchGroups) && (this._unhideSymbolSearchGroups = r.unhideSymbolSearchGroups), this._readyPromise = (0, k.retryWithChangingIntervals)((() => this._initSymbolSearch(e, null == r ? void 0 : r.exchange)))
                }
                tvToBroker(e) {
                    return this._tvToBroker[e] || null
                }
                brokerToTv(e) {
                    return this._brokerToTv[e] || null
                }
                async _initSymbolSearch(e, t) {
                    be.logNormal(`Requesting mapping for ${e} broker`);
                    const r = this._getSymbolSearchOptions(e, t);
                    try {
                        const t = await (0, ae.searchSymbols)(r);
                        if (!t.length) throw new Error("cannot get mappings: symbols list is empty");
                        t.forEach(this._appendSymbol), be.logNormal(`Mapping for ${e} is loaded for ${t.length} symbol(s)`), ge(200)
                    } catch (t) {
                        throw be.logWarn(`Symbol search initialization failed: ${t.message}`), ge(400), (0, he.trackEvent)("SymbolMapper", e, t.message), new Error("Cannot get mappings: Symbol search initialization failed")
                    }
                }
                _getBrokerSymbols(e) {
                    return void 0 !== e.contracts ? e.contracts.map((e => e.broker_symbol)) : [e.broker_symbol]
                }
                _getTvSymbols(e) {
                    return void 0 !== e.contracts ? e.contracts.map((t => `${e.prefix||e.exchange}:${t.symbol}`)) : [`${e.prefix||e.exchange}:${e.symbol}`]
                }
                _getSymbolSearchOptions(e, t) {
                    const r = {
                        text: "",
                        brokerId: e,
                        noLimits: !0,
                        serverHighlight: !1,
                        onlyTradable: !0,
                        exchange: t,
                        serverLogger: this._serverLogger
                    };
                    if (void 0 !== this._unhideSymbolSearchGroups) {
                        const e = this._unhideSymbolSearchGroups;
                        e.length && (r.unhideSymbolSearchGroups = e.join(","))
                    }
                    return r
                }
            }
            var ve = r(795394),
                fe = r(779923),
                _e = r(746932),
                ye = r(202118),
                ke = r(400711),
                Se = r(350172),
                Ce = r(507857);
            class we {
                constructor(e, t, r, i) {
                    this._lastPL = 0, this._isActive = !1, this._realtimeUpdate = (e, t) => {
                        this._realtimeData = t, this._updatePL()
                    }, this._symbol = e.symbol, this._adapter = r, this._onPlUpdate = t, this._side = e.side, this._qty = e.qty, this._avgPrice = e.avgPrice, this._instrumentInfo = i, this.positionUpdate(e)
                }
                positionUpdate(e) {
                    this._avgPrice = e.avgPrice, this._qty = e.qty, this._side = e.side, this._updatePL()
                }
                lastPL() {
                    return this._lastPL
                }
                start() {
                    this._isActive || (this._adapter.subscribeRealtime(this._symbol, this._realtimeUpdate), this._isActive = !0)
                }
                stop() {
                    this._isActive && (this._adapter.unsubscribeRealtime(this._symbol, this._realtimeUpdate), this._isActive = !1)
                }
                _updatePL() {
                    var e;
                    if (!this._realtimeData || void 0 === this._realtimeData.bid || void 0 === this._realtimeData.ask) return;
                    const t = Number(new H.Big(1 === this._side ? this._realtimeData.bid : this._realtimeData.ask).minus(Math.abs(this._avgPrice)).mul(1 === this._side ? 1 : -1).mul(this._qty).mul(null !== (e = this._instrumentInfo.lotSize) && void 0 !== e ? e : 1).div(this._instrumentInfo.pipSize).mul(this._instrumentInfo.pipValue));
                    this._lastPL = t, this._onPlUpdate(t)
                }
            }
            new Set(["type", "typespecs", "pricescale", "minmov", "fractional"]);

            function Pe(e, t) {
                return (0, ve.snapshoter)().getSnapshot(e, new Set(t))
            }

            function Te(e) {
                return "error" === e.status
            }
            class Me {
                constructor(e, t, r, i) {
                    var o;
                    this._setDefaultDropdownActionsBound = this._setDefaultDropdownActions.bind(this), this.serverLogger = () => this._serverLogger, this.createMapperAsync = e => new de(e, this._serverLogger), this.createMapperSync = (e, t) => {
                        let r = null;
                        return r = new me(e, this._serverLogger, t), r
                    }, this._trading = e, this._metainfo = t, this._serverLogger = null !== r ? this._makeServerLoggerWithFilledInfo(r) : null, this._setDefaultDropdownActionsBound = this._setDefaultDropdownActions.bind(this), this._defaultDropdownActions = !0, this._credentialsStorage = i, this._setDefaultDropdownActions(), null !== this._trading && (null === (o = this.sellBuyButtonsVisibility()) || void 0 === o || o.subscribe(this._setDefaultDropdownActionsBound), (0, d.ensureNotNull)(this.orderPanelVisibility()).subscribe(this._setDefaultDropdownActionsBound), (0, d.ensureNotNull)(this.domPanelVisibility()).subscribe(this._setDefaultDropdownActionsBound))
                }
                createPLEmitter(e, t, r) {
                    return new we(e, t, this._adapter, r)
                }
                getLogger() {
                    return (0, b.getLogger)("Trading." + this._metainfo.id)
                }
                translate(e) {
                    return e
                }
                setBrokerConnectionAdapter(e) {
                    this._adapter = e
                }
                patchConfig(e) {
                    this._adapter.patchConfig(e)
                }
                showOrderDialog(e, t) {
                    return (0, d.ensureNotNull)(this._trading).orderViewController().showOrderView({
                        order: e,
                        focus: t
                    })
                }
                showPositionBracketsDialog(e, t, r) {
                    return (0, d.ensureNotNull)(this._trading).orderViewController().showPositionView(e, t, r)
                }
                showCancelOrderDialog(e, t) {
                    return ke.ConfirmOrderCancelDialog.get().open(e).then((e => {
                        e && this._adapter.processErrors(t(), !0, a.t(null, void 0, r(915926)))
                    }))
                }
                showCancelMultipleOrdersDialog(e, t, i, o) {
                    return ke.ConfirmOrderCancelDialog.get().multiple(e, t, i).then((e => {
                        e && this._adapter.processErrors(o(), !0, a.t(null, void 0, r(305140)))
                    }))
                }
                showCancelBracketsDialog(e, t) {
                    return Se.ConfirmBracketsCancelDialog.get().open(e).then((e => {
                        e && this._adapter.processErrors(t(), !0, a.t(null, void 0, r(951099)))
                    }))
                }
                showCancelMultipleBracketsDialog(e, t) {
                    return Se.ConfirmBracketsCancelDialog.get().multiple(e).then((e => {
                        e && this._adapter.processErrors(t(), !0, a.t(null, void 0, r(951099)))
                    }))
                }
                showReversePositionDialog(e, t) {
                    return (0, Ce.reversePositionDialog)(e, (0, d.ensureNotNull)(this._trading).showErrorNotification, t)
                }
                showMessageDialog(e, t, r = !1) {
                    r ? (0, fe.showWarning)({
                        title: e,
                        html: t
                    }) : (0, fe.showWarning)({
                        title: e,
                        text: t
                    })
                }
                showConfirmDialog(e, t, r, i, o) {
                    return (0, _e.showConfirmDialog)({
                        title: e,
                        content: t,
                        mainButtonText: r,
                        cancelButtonText: i,
                        showDisableConfirmationsCheckbox: o
                    })
                }
                showSimpleConfirmDialog(e, t, r, i, o) {
                    return (0, ye.showSimpleConfirmDialog)({
                        title: e,
                        text: Array.isArray(t) ? t.join(" ") : t,
                        mainButtonText: r,
                        mainButtonIntent: "primary",
                        cancelButtonText: i,
                        showDisableConfirmationsCheckbox: o
                    })
                }
                showSimpleConfirmDialogAndRespectAbort(e, t, r, i, o, s) {
                    return (0, ye.showSimpleConfirmDialog)({
                        title: e,
                        text: Array.isArray(t) ? t.join(" ") : t,
                        abortSignal: r,
                        mainButtonText: i,
                        mainButtonIntent: "primary",
                        cancelButtonText: o,
                        showDisableConfirmationsCheckbox: s
                    })
                }
                setDurations(e) {
                    this._adapter.setDurations(e)
                }
                setSymbolSearchId(e) {
                    this._adapter.setSymbolSearchId(e)
                }
                activateBottomWidget() {
                    return null !== this._trading ? this._trading.toggleTradingWidget() : Promise.reject("Activate bottom widget failed: trading is not defined")
                }
                trackEvent(e, t, r) {
                    null !== this._trading && this._trading.trackEvent(e, t, r)
                }
                defaultFormatter(e, t) {
                    return (0, te.getQuoteSessionInstance)("simple").formatter(e, t)
                }
                numericFormatter(e) {
                    return Promise.resolve(new Z.NumericFormatter(e))
                }
                quantityFormatter(e) {
                    return Promise.resolve(new ee.QuantityFormatter(e))
                }
                selectBroker() {
                    null !== this._trading && this._trading.selectBroker(null)
                }
                showTradingProperties() {
                    null !== this._trading && this._trading.showTradingProperties()
                }
                async getSymbolTypespecs(e) {
                    var t;
                    const r = await Pe(e, ["typespecs"]);
                    return "values" in r ? Te(r) || void 0 === r.values.typespecs ? [] : r.values.typespecs : null !== (t = r.typespecs) && void 0 !== t ? t : []
                }
                async getSymbolType(e) {
                    var t;
                    const r = await Pe(e, ["type"]);
                    return "values" in r ? Te(r) ? "undefined" : r.values.type : null !== (t = r.type) && void 0 !== t ? t : "undefined"
                }
                async getSymbolMinTick(e) {
                    const t = await Pe(e, ["minmov", "pricescale"]);
                    return "values" in t ? Te(t) || void 0 === t.values.minmov || void 0 === t.values.pricescale ? 1 : (0, H.Big)(t.values.minmov).div(t.values.pricescale).toNumber() : (0, H.Big)(t.minmov).div(t.pricescale).toNumber()
                }
                silentOrdersPlacement() {
                    return (0, d.ensureNotNull)(this._trading).noConfirmEnabled
                }
                sellBuyButtonsVisibility() {
                    return null !== this._trading && l.enabled("buy_sell_buttons") ? this._trading.showSellBuyButtons : null
                }
                domPanelVisibility() {
                    return null !== this._trading ? this._trading.domPanelVisibility() : null
                }
                orderPanelVisibility() {
                    return null !== this._trading ? this._trading.orderPanelVisibility() : null
                }
                showPricesWithZeroVolume() {
                    return (0, d.ensureNotNull)(this._trading).showPricesWith().zeroVolume
                }
                showNotification(e, t, r = 0) {
                    null !== this._trading && (0 === r ? this._trading.showErrorNotification(e, t) : this._trading.showSuccessNotification(e, t))
                }
                connectionStatusUpdate(e, t) {
                    this._adapter.connectionStatusUpdate.fire(e, t), 1 === e && this._setDefaultDropdownActions()
                }
                orderUpdate(e) {
                    this._adapter.onOrderUpdate(e)
                }
                positionUpdate(e, t) {
                    this._adapter.onPositionUpdate(e, t)
                }
                tradeUpdate(e, t) {
                    this._adapter.onTradeUpdate(e, t)
                }
                orderPartialUpdate(e, t) {
                    this._adapter.onOrderPartialUpdate(e, t)
                }
                positionPartialUpdate(e, t) {
                    this._adapter.onPositionPartialUpdate(e, t)
                }
                tradePartialUpdate(e, t) {
                    this._adapter.onTradePartialUpdate(e, t)
                }
                executionUpdate(e) {
                    this._adapter.executionUpdate.fire(e)
                }
                currentAccountUpdate() {
                    this._adapter.onCurrentAccountChanged()
                }
                realtimeUpdate(e, t) {
                    this._adapter.fireSubscription("Realtime", e, t)
                }
                domeUpdate(e, t) {
                    this._adapter.fireSubscription("DOME", e, t)
                }
                pipValueUpdate(e, t) {
                    this._adapter.fireSubscription("PipValue", e, t)
                }
                plUpdate(e, t) {
                    this._adapter.fireSubscription("PL", e, t)
                }
                tradePLUpdate(e, t) {
                    this._adapter.fireSubscription("TradePL", e, t)
                }
                equityUpdate(e) {
                    this._adapter.fireSubscription("Equity", "Equity", e)
                }
                marginAvailableUpdate(e) {
                    this._adapter.fireSubscription("MarginAvailable", "MarginAvailable", e)
                }
                cryptoBalanceUpdate(e, t) {
                    this._adapter.fireSubscription("CryptoBalance", e, t)
                }
                setButtonDropdownActions(e) {
                    var t;
                    null !== this._trading && this._defaultDropdownActions && (this._defaultDropdownActions = !1, null === (t = this.sellBuyButtonsVisibility()) || void 0 === t || t.unsubscribe(this._setDefaultDropdownActionsBound), (0, d.ensureNotNull)(this.orderPanelVisibility()).unsubscribe(this._setDefaultDropdownActionsBound), (0, d.ensureNotNull)(this.domPanelVisibility()).unsubscribe(this._setDefaultDropdownActionsBound)), this._buttonDropdownActions = e
                }
                buttonDropdownActions() {
                    return this._buttonDropdownActions
                }
                defaultContextMenuActions(...e) {
                    return null !== this._trading ? this._trading.defaultContextMenuActions(...e) : Promise.resolve([])
                }
                defaultDropdownMenuActions(e) {
                    return null !== this._trading ? this._trading.defaultDropdownMenuActions(e) : []
                }
                get factory() {
                    return {
                        createDelegate: () => new(u()),
                        createWatchedValue: e => new(Y())(e),
                        createPriceFormatter: (e, t, r, i, o) => new re.PriceFormatter(e, t, r, i, o)
                    }
                }
                get settings() {
                    return {
                        save: (e, t) => $().setJSON(`${this._metainfo.id}.${e}`, t),
                        load: (e, t) => $().getJSON(`${this._metainfo.id}.${e}`, t),
                        clear: (e, t) => $().remove(`${this._metainfo.id}.${e}`, t)
                    }
                }
                get credentialsStorage() {
                    return this._credentialsStorage
                }
                convertTimezone(e, t, r) {
                    const i = J.get_timezone(t),
                        o = J.get_timezone(r),
                        s = J.cal_to_utc(i, e);
                    return J.utc_to_cal(o, s)
                }
                language() {
                    return window.language
                }
                getUserSpecificHash() {
                    return window.user.private_channel || ""
                }
                activateFXCMCFD() {
                    $().setValue("fxcm_cfd", !0)
                }
                async isFractional(e) {
                    var t;
                    const r = await Pe(e, ["fractional"]);
                    return "values" in r ? !Te(r) && void 0 !== r.values.fractional && r.values.fractional : null !== (t = r.fractional) && void 0 !== t && t
                }
                _makeServerLoggerWithFilledInfo(e) {
                    return {
                        log: t => e.log({ ...this._makeServerLoggerEventAdditionalInfo(),
                            ...t
                        }),
                        debounceLog: (t, r, i) => e.debounceLog({ ...this._makeServerLoggerEventAdditionalInfo(),
                            ...t
                        }, r, i)
                    }
                }
                _makeServerLoggerEventAdditionalInfo() {
                    return {
                        accountType: this._adapter.currentAccountType(),
                        brokerId: this._adapter.metainfo().id,
                        sessionId: this._adapter.sessionId(),
                        tvUsername: window.user.username,
                        ref: location.href,
                        online: navigator.onLine
                    }
                }
                _setDefaultDropdownActions() {
                    null !== this._trading && this._defaultDropdownActions && (this._buttonDropdownActions = this.defaultDropdownMenuActions())
                }
            }
            var Oe = r(853093),
                Be = r(865484);
            const Ee = "credentials-storage";
            class Ae {
                constructor(e, t, r) {
                    this._rememberCredentials = e, this._encryptedLocalStorage = t, this._encryptedSessionStorage = r
                }
                async save(e, t) {
                    this._currentEncryptedStorage().setItem(e, t)
                }
                load(e, t) {
                    return this._currentEncryptedStorage().getItem(e, t)
                }
                async clear(e) {
                    this._currentEncryptedStorage().removeItem(e)
                }
                destroy() {
                    this._encryptedLocalStorage.destroy(), this._encryptedSessionStorage.destroy()
                }
                static async create(e, t, r) {
                    const i = await Be.EncryptedWebStorage.create(e, Ee, localStorage, r),
                        o = await Be.EncryptedWebStorage.create(e, Ee, sessionStorage, r);
                    return new Ae(t, i, o)
                }
                _currentEncryptedStorage() {
                    return this._rememberCredentials.value() ? this._encryptedLocalStorage : this._encryptedSessionStorage
                }
            }
            var Ie = r(423450),
                De = r(827963),
                xe = r(851229);
            const Le = [];

            function Ue(e, t) {
                e.configFlags = (0,
                    De.applyDefaultsToConfigFlags)(e.configFlags), Le.push({
                    metainfo: e,
                    createBrokerFunction: t
                })
            }

            function Fe() {
                return Le.map((e => e.metainfo))
            }
            let Ne;
            async function Re(e, t, r, i, o) {
                const s = Le.filter((e => e.metainfo.id === t))[0];
                let a;
                if (null === i) {
                    const r = await Ae.create(t, new xe.RememberCredentials(t), Ne),
                        i = o => {
                            (null == o ? void 0 : o.metainfo().id) !== t && (null == e || e.onBrokerChange.unsubscribe(null, i), r.destroy())
                        };
                    null == e || e.onBrokerChange.subscribe(null, i), a = r
                } else a = i;
                const n = new Me(e, s.metainfo, r, a);
                try {
                    const t = await s.createBrokerFunction(n, null == e ? void 0 : e.brokerTelemetry),
                        r = new Ie.BrokerRealtimeAdapter(s.metainfo.id);
                    return new j({
                        brokerMetainfo: s.metainfo,
                        brokerConnection: t,
                        host: n,
                        brokerRealtimeAdapter: r,
                        tradingStat: e && e.tradingStat(),
                        tradingSettingsStorageGetter: e && e.getBrokerTradingSettingsStorage,
                        brokerPlan: o
                    })
                } catch (e) {
                    return Promise.reject(`${t} broker creation error: ${(0,k.getLoggerMessage)(e)}`)
                }
            }
            Ne = (0, Oe.makeUserSpecificCryptographer)()
        },
        164055: (e, t, r) => {
            "use strict";
            var i = r(125226),
                o = r(495046),
                s = r(210490),
                a = r(203528),
                n = r(827963);
            async function l(e) {
                const t = (0, i.isFeatureEnabled)("enable_trading_server_logger") && (0, i.isFeatureEnabled)("trading_request_server_logger") && (0, i.isFeatureEnabled)("rest_request_server_logger") ? e() : null;
                if (null === t) return;
                const {
                    makeFetchWithServerLogger: o
                } = await r.e(56577).then(r.bind(r, 860431));
                return o(t)
            }

            function c(e, t, o) {
                return async s => {
                    const [{
                        Broker: a
                    }, {
                        makeRestRequestsEnvironments: c
                    }] = await Promise.all([Promise.all([r.e(36221), r.e(83541)]).then(r.bind(r, 174224)), r.e(36533).then(r.bind(r, 179663))]);
                    return new a({
                        host: s,
                        metainfo: Object.assign({}, {
                            configFlags: n.defaultConfigFlags
                        }, t),
                        accessToken: null,
                        isFastRenewTokenEnabled: (0, i.isFeatureEnabled)("trading-fast-renew-oauth-token"),
                        requestsEnvironments: c(e, o),
                        customFetch: await l(s.serverLogger)
                    })
                }
            }
            const p = JSON.parse('{"ACTIVTRADES":{"title":"ActivTrades"},"ALLY":{"title":"Ally Invest"},"ALOR":{"title":"Alor Broker"},"ALPACA":{"title":"Alpaca"},"AMP":{"title":"AMP"},"BINANCE":{"title":"Binance"},"BINGBON":{"title":"BingX"},"BITGET":{"title":"Bitget"},"BITSTAMP":{"title":"Bitstamp"},"BLACKBULL":{"title":"BlackBull Markets"},"CAPITALCOM":{"title":"Capital.com"},"CHAKA":{"title":"Chaka"},"CITYINDEX":{"title":"City Index"},"CURRENCYCOM":{"title":"Currency.com"},"DHAN":{"title":"Dhan"},"DORMAN":{"title":"Dorman Trading"},"EASYMARKETS":{"title":"easyMarkets"},"EIGHTCAP":{"title":"Eightcap"},"FINANZEN":{"title":"Finanzen.net zero"},"FOREXCOM":{"title":"FOREX.com"},"FTX":{"title":"FTX"},"FXCM":{"title":"FXCM"},"FXOPEN":{"title":"FXOpen"},"GEMINI":{"title":"Gemini"},"GLOBALPRIME":{"title":"Global Prime"},"HITBTC":{"title":"HitBTC"},"IBKR":{"title":"Interactive Brokers"},"IBROKER":{"title":"iBroker"},"INFOYATIRIM":{"title":"Info Yatirim"},"IRONBEAM":{"title":"IRONBEAM"},"MODAL":{"title":"Modalmais"},"OANDA":{"title":"OANDA"},"OKX":{"title":"OKX"},"OPTIMUS":{"title":"Optimus Futures"},"ORAMA":{"title":"Orama"},"OSMANLI":{"title":"Osmanli Yatirim"},"PEPPERSTONE":{"title":"Pepperstone"},"PHILLIPNOVA":{"title":"Phillip Nova"},"SAXOBANK":{"title":"Saxo"},"SKILLING":{"title":"Skilling"},"SPREADEX":{"title":"Spreadex Trading"},"STONEX":{"title":"StoneX"},"TICKMILL":{"title":"Tickmill"},"TIGER":{"title":"Tiger Brokers"},"TIMEX":{"title":"Timex"},"TINKOFF":{"title":"Tinkoff Investments"},"TRADESTATION":{"title":"TradeStation"},"TRADIER":{"title":"Tradier"},"TRADOVATE":{"title":"Tradovate"},"VELOCITY":{"title":"Velocity Trade"},"WHSELFINVEST":{"title":"WH Selfinvest"}}');

            function u(e) {
                if (e in p) return p[e];
                throw new Error(`${e} broker does not exist`)
            }
            var d = r(621893),
                h = r(419657),
                b = r(244131),
                g = r(605146);
            var m = r(379832),
                v = r(494224),
                f = r(675654),
                _ = r(170615);
            const y = {
                realtime: 1e3,
                orders: 1e3,
                positions: 1e3,
                pl: 1e3,
                executions: 1e3,
                summaryRow: 1e4,
                summaryTable: 1e4
            };
            var k = r(777754),
                S = r(50738),
                C = r(517227),
                w = r(914193);
            var P = r(886834),
                T = r(397140),
                M = r(276213),
                O = r(938632);
            const B = [{
                    name: "DAY",
                    value: "DAY"
                }, {
                    name: "GTC",
                    value: "GTC"
                }, {
                    name: "GTD",
                    value: "GTD",
                    hasDatePicker: !0
                }, {
                    name: "GTT",
                    value: "GTT",
                    hasDatePicker: !0,
                    hasTimePicker: !0
                }, {
                    name: "FAK",
                    value: "FAK"
                }, {
                    name: "FOK",
                    value: "FOK"
                }, {
                    name: "ATO",
                    value: "ATO"
                }, {
                    name: "ATC",
                    value: "ATC"
                }],
                E = {
                    supportOrderBrackets: !0,
                    supportPositionBrackets: !0,
                    authorizationType: "password",
                    showQuantityInsteadOfAmount: !0,
                    supportLevel2Data: !0,
                    supportPLUpdate: !0,
                    supportStopLimitOrders: !0,
                    supportSymbolSearch: !0,
                    supportRealtimeDataCheck: !1,
                    calculatePLUsingLast: !0,
                    supportTrades: !0,
                    supportCloseTrade: !1,
                    supportOrdersHistory: !0,
                    supportPartialClosePosition: !0,
                    supportPartialCloseTrade: !0,
                    supportTrailingStop: !0,
                    supportModifyTrailingStop: !1,
                    positionPLInInstrumentCurrency: !0,
                    supportExecutions: !0
                };

            function A(e) {
                const {
                    id: t,
                    title: i,
                    configFlags: o,
                    logoUrl: s,
                    logoBlackUrl: n,
                    logoMiniUrl: l,
                    logoMiniWebpUrl: c,
                    note: p,
                    cqgBrokerIdentifier: u,
                    demoConnectionParams: d,
                    connectIssueSolutionId: h
                } = e;
                (0, a.addBroker)({
                    id: t,
                    title: i,
                    telemetryId: "CQG",
                    configFlags: o,
                    customNotificationFields: [],
                    loginPlaceholder: "CQG" !== t ? k.t(null, void 0, r(696561)) : void 0,
                    description: "",
                    durations: B,
                    logoUrl: s,
                    logoBlackUrl: n,
                    logoMiniUrl: l,
                    logoMiniWebpUrl: c,
                    note: p,
                    connectIssueSolutionId: h
                }, function(e, t, i) {
                    return async o => {
                        const [{
                            default: s
                        }, {
                            default: a
                        }] = await Promise.all([Promise.all([r.e(83443), r.e(78672), r.e(53444), r.e(98676), r.e(18577)]).then(r.t.bind(r, 775380, 23)), Promise.all([r.e(83443), r.e(78672), r.e(53444), r.e(98676), r.e(18577)]).then(r.t.bind(r, 19283, 23))]);
                        return new s(o, e, t, a, i)
                    }
                }(t, u, d))
            }
            const I = {
                AMP: {
                    brokerageNames: ["AMP", "AMP3", "AMP-CQG", "AMP School", "AMP Farm"],
                    salesSeries: null
                },
                DORMAN: {
                    brokerageNames: ["Dorman Trading"],
                    salesSeries: null
                },
                IRONBEAM: {
                    salesSeries: ["IRB", "IRONBEAM"]
                },
                OPTIMUS: {
                    salesSeries: null
                },
                STONEX: {
                    salesSeries: ["CQG  Bridge"]
                },
                TICKMILL: {
                    salesSeries: ["House Account", "Internal - Professional Non TTCA", "Internal - Professional TTCA", "Professional", "Retail", "Professional - TTCA", "Corporate", "Internal Connections", "Internal - Retail"]
                }
            };
            var D = r(237095),
                x = r(719044),
                L = r(894045),
                U = r(831145);
            var F = r(272044),
                N = r(967433),
                R = r(272839),
                V = r(306140),
                q = r(480809);
            var G = r(843419),
                W = r(666761),
                z = r(117863),
                K = r(421433);
            var j = r(772087),
                H = r(434468),
                X = r(126458);
            var $ = r(748049),
                Q = r(62982),
                Y = r(852745),
                J = r(115805);
            const Z = () => {
                const e = {
                        id: "BITSTAMP",
                        title: u("BITSTAMP").title,
                        configFlags: {
                            authorizationType: "oauth2-code-flow",
                            supportSymbolSearch: !0,
                            supportDemoLiveSwitcher: !1,
                            supportRealtimeDataCheck: !1,
                            supportVerifyLiveAccount: !0,
                            supportDisplayBrokerNameInSymbolSearch: !1
                        },
                        description: "",
                        logoUrl: $,
                        logoBlackUrl: Q,
                        logoMiniUrl: Y,
                        logoMiniWebpUrl: J,
                        isDevEnvironment: (0, i.isFeatureEnabled)("broker_BITSTAMP_dev"),
                        symbolPrefix: "BITSTAMP"
                    },
                    t = (0, i.isFeatureEnabled)("broker_BITSTAMP_dev") ? "https://front.clients.stagebts.net/api-internal/tradingview/" : "https://www.bitstamp.net/api-internal/tradingview/";
                (0, a.addBroker)(e, c(t, e))
            };
            var ee = r(844349),
                te = r(265737),
                re = r(701989);
            const ie = () => {
                const e = {
                        id: "BLACKBULL",
                        title: u("BLACKBULL").title,
                        configFlags: {
                            authorizationType: "password",
                            supportDemoLiveSwitcher: !1,
                            supportSymbolSearch: !0,
                            supportVerifyLiveAccount: !0,
                            supportDisplayBrokerNameInSymbolSearch: !1,
                            supportUnhideSymbolSearchGroups: !0
                        },
                        description: "",
                        logoUrl: ee,
                        logoBlackUrl: ee,
                        logoMiniUrl: te,
                        logoMiniWebpUrl: re,
                        symbolPrefix: "BLACKBULL",
                        loginPlaceholder: k.t(null, void 0, r(563573))
                    },
                    t = (0, i.isFeatureEnabled)("broker_BLACKBULL_dev") ? "https://tradingview-api-client-staging.blackbullmarkets.com/" : "https://tradingview-api-client.blackbullmarkets.com/";
                (0, a.addBroker)(e, c(t, e))
            };
            var oe = r(887453),
                se = r(993802),
                ae = r(624775),
                ne = r(94857);
            var le = r(989048),
                ce = r(722511),
                pe = r(742657),
                ue = r(928035);
            const de = {
                baseUrl: "https://ciapipreprod.cityindextest9.co.uk/tradingapi",
                streamingUrl: "https://pushpreprod.cityindextest9.co.uk/"
            };

            function he(e, t) {
                return async i => {
                    const {
                        Broker: o
                    } = await Promise.all([r.e(52628), r.e(13130), r.e(89907), r.e(51316)]).then(r.bind(r, 284487));
                    return new o(i, e, t)
                }
            }
            var be = r(504845),
                ge = r(153301),
                me = r(271879),
                ve = r(617975);
            var fe = r(981056),
                _e = r(277242),
                ye = r(429878),
                ke = r(42038);
            var Se = r(265001),
                Ce = r(798077),
                we = r(745500),
                Pe = r(927038);
            var Te = r(214147),
                Me = r(364530),
                Oe = r(819728);
            var Be = r(278338),
                Ee = r(782608),
                Ae = r(746117);
            var Ie = r(916933),
                De = r(843542),
                xe = r(928607),
                Le = r(407725);
            var Ue = r(268183),
                Fe = r(582273),
                Ne = r(494436);
            const Re = () => {
                const e = {
                        id: "EIGHTCAP",
                        title: u("EIGHTCAP").title,
                        configFlags: {
                            authorizationType: "password",
                            supportDemoLiveSwitcher: !1,
                            supportRealtimeDataCheck: !1,
                            supportSymbolSearch: !0,
                            supportVerifyLiveAccount: !0,
                            supportDisplayBrokerNameInSymbolSearch: !1,
                            supportUnhideSymbolSearchGroups: !0
                        },
                        description: "",
                        symbolPrefix: "EIGHTCAP",
                        logoUrl: Ue,
                        logoBlackUrl: Ue,
                        logoMiniUrl: Fe,
                        logoMiniWebpUrl: Ne,
                        loginPlaceholder: k.t(null, void 0, r(430101)),
                        customNotificationFields: ["expiry"],
                        connectIssueSolutionId: 43000692322
                    },
                    t = (0, i.isFeatureEnabled)("broker_EIGHTCAP_dev") ? "https://tradingview-api-client-staging.eightcap.com/" : "https://tradingview-api-client.eightcap.com/";
                (0, a.addBroker)(e, c(t, e))
            };
            var Ve = r(774204),
                qe = r(372706),
                Ge = r(880426),
                We = r(665167);
            var ze = r(20264),
                Ke = r(274067),
                je = r(733703),
                He = r(289841);
            var Xe = r(750642),
                $e = r(687332),
                Qe = r(325034),
                Ye = r(202226),
                Je = r(218081),
                Ze = r(547390);
            const et = {
                positions: 1e3
            };
            var tt = r(721457),
                rt = r(266259),
                it = r(627880),
                ot = r(188815);
            var st = r(239391),
                at = r(808793),
                nt = r(344215),
                lt = r(581971);
            var ct = r(728258),
                pt = r(850494),
                ut = r(520584),
                dt = r(622142);
            var ht = r(305774),
                bt = r(892665),
                gt = r(567679),
                mt = r(56404),
                vt = r(28741),
                ft = r(21966);
            var _t = r(339765),
                yt = r(578386),
                kt = r(736874),
                St = r(665660);
            var Ct = r(458959),
                wt = r(773375),
                Pt = r(288209),
                Tt = r(242155);
            const Mt = [3, 1, 4, 2];
            var Ot = r(314936),
                Bt = r(322597),
                Et = r(672173),
                At = r(506614);
            var It = r(587055),
                Dt = r(798246),
                xt = r(447814);
            const Lt = () => {
                const e = {
                        id: "INFOYATIRIM",
                        title: u("INFOYATIRIM").title,
                        configFlags: {
                            authorizationType: "oauth2-implicit-flow",
                            supportSymbolSearch: !0,
                            supportDemoLiveSwitcher: !1,
                            supportRealtimeDataCheck: !0,
                            supportVerifyLiveAccount: !0,
                            supportDisplayBrokerNameInSymbolSearch: !1,
                            passLocalesLangInOAuth: !0
                        },
                        description: "",
                        isBeta: (0, i.isFeatureEnabled)("INFOYATIRIM_beta"),
                        logoUrl: It,
                        logoBlackUrl: It,
                        logoMiniUrl: Dt,
                        logoMiniWebpUrl: xt,
                        isDevEnvironment: (0, i.isFeatureEnabled)("broker_INFOYATIRIM_dev"),
                        realtimeDataPermissionsToggleConfig: {
                            enableRealtimeDataPermissionsToggleText: k.t(null, void 0, r(628516)),
                            disableRealtimeDataPermissionsToggleText: k.t(null, void 0, r(491717)),
                            realtimeDataPermissionsToggleText: k.t(null, void 0, r(822439))
                        }
                    },
                    t = (0, i.isFeatureEnabled)("broker_INFOYATIRIM_dev") ? "https://info-tv-sandbox.fintables.com/" : "https://info-tv.fintables.com/";
                (0, a.addBroker)(e, c(t, e))
            };
            var Ut = r(410745),
                Ft = r(775827),
                Nt = r(386672);
            var Rt = r(855033),
                Vt = r(889310),
                qt = r(992206),
                Gt = r(223862);
            var Wt = r(741879),
                zt = r(830446),
                Kt = r(946095),
                jt = r(363749);
            var Ht = r(119473),
                Xt = r(346262),
                $t = r(27892),
                Qt = r(26796);
            var Yt = r(701065),
                Jt = r(576450),
                Zt = r(840278),
                er = r(745432),
                tr = r(230934),
                rr = r(577523);
            var ir = r(948944),
                or = r(261536),
                sr = r(587776),
                ar = r(681900);
            var nr = r(370391),
                lr = r(406354),
                cr = r(572286);
            var pr = r(194453),
                ur = r(712842),
                dr = r(95215);
            var hr = r(869403),
                br = r.n(hr),
                gr = r(947809);
            const mr = "USD";
            class vr {
                constructor(e, t) {
                    this.value = NaN, this.equity = NaN, this.onValueChanged = new(br()),
                        this._pointvalue = 1, this._currency = "USD", this._reverseCurrency = !1, this._qsmId = "profit-loss-emitter" + Math.random(), this._tradingModel = e, this._symbol = t.symbol, this._avgPrice = +t.avg_price, this._qty = +t.qty || 0, this._position = t, this._isLastPriceTradedSymbol = this._tradingModel.isLastPriceTradedSymbol(this._symbol);
                    let r = null;
                    if ("forex" === t.symboltype) {
                        const e = /^(?:.*?:)?(\w{3})(\w{3})$/.exec(this._symbol);
                        e && (r = [e[1], e[2]])
                    }
                    r ? r[0] === mr ? this._reverseCurrency = !0 : r[1] === mr ? this._reverseCurrency = !1 : this._currency = r[1] : t.currency && (this._currency = t.currency), t.pointvalue && (this._pointvalue = t.pointvalue), this._boundQuoteListener = (e, r) => {
                        let i;
                        i = e.values.current_session && "market" !== e.values.current_session || this._isLastPriceTradedSymbol ? r.values.last_price : ("sell" === t.side ? e.values.ask : e.values.bid) || r.values.last_price, null != i && (this._lastPrice = i, this._update())
                    }, this._boundPositionListener = e => {
                        e.symbol === this._symbol && (this._qty = e.qty, this._avgPrice = e.avg_price, this._update())
                    }, Promise.resolve().then((() => (0, gr.getQuoteSessionInstance)("full").subscribe(this._qsmId, this._symbol, this._boundQuoteListener))), this._tradingModel.onPositionUpdate.subscribe(null, this._boundPositionListener)
                }
                destroy() {
                    const e = (0, gr.getQuoteSessionNoEnsure)("full");
                    e && e.unsubscribe(this._qsmId, this._symbol), this._tradingModel.onPositionUpdate.unsubscribe(null, this._boundPositionListener)
                }
                _update() {
                    const e = void 0 !== this._lastPrice ? this._lastPrice : NaN;
                    let t, r = (e - this._avgPrice) * this._qty * this._pointvalue;
                    if (t = this._qty < 0 ? r : e * this._qty * this._pointvalue, this._currency !== mr) {
                        const e = this._tradingModel.currencyRate(this._currency);
                        r *= e, t *= e
                    }
                    this._reverseCurrency && (r /= e, t /= e, t += r), isFinite(r) ? (this.value = r, isFinite(t) ? this.equity = t : this.equity = NaN, this._position.pl = r, this.onValueChanged.fire(this)) : this.value = NaN
                }
            }

            function fr(e, t) {
                return new vr(e, t)
            }
            var _r = r(777109),
                yr = r(582477),
                kr = r(384114);
            const Sr = ["exp"];
            var Cr = r(35672),
                wr = r(914305),
                Pr = r(572571),
                Tr = r(977742);
            const Mr = () => {
                const e = (0, i.isFeatureEnabled)("broker_PEPPERSTONE_dev"),
                    t = {
                        id: "PEPPERSTONE",
                        title: u("PEPPERSTONE").title,
                        configFlags: {
                            authorizationType: "oauth2-implicit-flow",
                            supportSymbolSearch: !0,
                            supportDemoLiveSwitcher: !1,
                            supportRealtimeDataCheck: !1,
                            supportVerifyLiveAccount: !0,
                            supportDisplayBrokerNameInSymbolSearch: !1,
                            supportCredentialsHeader: !0,
                            supportUnhideSymbolSearchGroups: !0
                        },
                        description: "",
                        logoUrl: Cr,
                        logoBlackUrl: wr,
                        logoMiniUrl: Pr,
                        logoMiniWebpUrl: Tr,
                        symbolPrefix: "PEPPERSTONE",
                        isDevEnvironment: e
                    },
                    r = e ? "https://ctrader-tradingview-api-staging.pepperstone.com/api/" : "https://ctrader-tradingview-api.pepperstone.com/api/";
                (0, a.addBroker)(t, c(r, t))
            };
            var Or = r(862929),
                Br = r(89895),
                Er = r(95586),
                Ar = r(984224);
            var Ir = r(295129),
                Dr = r(69985),
                xr = r(514180);
            var Lr = r(383459),
                Ur = r(62212),
                Fr = r(284862);
            var Nr = r(220680),
                Rr = r(593771),
                Vr = r(603729),
                qr = r(792043);
            var Gr = r(597181),
                Wr = r(410760),
                zr = r(173099),
                Kr = r(519512);
            var jr = r(672663),
                Hr = r(581687),
                Xr = r(151606),
                $r = r(128310);
            var Qr = r(854297),
                Yr = r(218636),
                Jr = r(219055);
            var Zr = r(256890),
                ei = r(21658),
                ti = r(291922);
            var ri = r(975016),
                ii = r(105324),
                oi = r(304971),
                si = r(628762);
            var ai = r(816467),
                ni = r(244581),
                li = r(148068);
            const ci = [3, 1, 4, 2];
            var pi = r(246258),
                ui = r(423601),
                di = r(456843);
            const hi = () => {
                const e = {
                        id: "TRADIER",
                        title: u("TRADIER").title,
                        configFlags: {
                            authorizationType: "oauth2-code-flow",
                            supportSymbolSearch: !0,
                            supportDemoLiveSwitcher: !1,
                            passLocalesLangInOAuth: !0,
                            supportVerifyLiveAccount: !0,
                            supportRealtimeDataCheck: !0
                        },
                        description: "",
                        logoUrl: pi,
                        logoBlackUrl: pi,
                        logoMiniUrl: ui,
                        logoMiniWebpUrl: di,
                        isDevEnvironment: (0, i.isFeatureEnabled)("broker_TRADIER_dev")
                    },
                    t = (0, i.isFeatureEnabled)("broker_TRADIER_dev") ? "https://staging.api.tradier.com/tv/" : "https://api.tradier.com/tv/";
                (0, a.addBroker)(e, c(t, e))
            };
            var bi = r(352704),
                gi = r(797478),
                mi = r(958957),
                vi = r(694852);
            var fi = r(929282),
                _i = r(376687),
                yi = r(359784),
                ki = r(313642);
            const Si = () => {
                const e = {
                        id: "VELOCITY",
                        title: u("VELOCITY").title,
                        configFlags: {
                            authorizationType: "password",
                            supportDemoLiveSwitcher: !1,
                            supportRealtimeDataCheck: !1,
                            supportSymbolSearch: !0,
                            supportVerifyLiveAccount: !0,
                            supportDisplayBrokerNameInSymbolSearch: !1,
                            supportUnhideSymbolSearchGroups: !0
                        },
                        description: "",
                        isBeta: (0, i.isFeatureEnabled)("VELOCITY_beta"),
                        logoUrl: fi,
                        logoBlackUrl: _i,
                        logoMiniUrl: yi,
                        logoMiniWebpUrl: ki,
                        symbolPrefix: "VELOCITY"
                    },
                    t = (0, i.isFeatureEnabled)("broker_VELOCITY_dev") ? "https://uat-tv1.vtfs.cloud/tradingview/v1/" : "https://prd-tv1.vtfs.cloud/tradingview/v1/";
                (0, a.addBroker)(e, c(t, e))
            };
            var Ci = r(573145),
                wi = r(334965),
                Pi = r(257905);
            if ((0, a.addBroker)({
                    id: "Paper",
                    title: "Paper Trading",
                    configFlags: {
                        authorizationType: "none",
                        showQuantityInsteadOfAmount: !0,
                        supportOrderBrackets: !0,
                        supportPositionBrackets: !0,
                        supportClosePosition: !1,
                        supportPLUpdate: !0,
                        supportNativeReversePosition: !0,
                        supportDemoLiveSwitcher: !1,
                        supportOrdersHistory: !0,
                        supportPartialClosePosition: !0,
                        showNotificationsLog: !1,
                        supportExecutions: !0,
                        supportConcurrentSession: !0
                    },
                    customNotificationFields: Sr,
                    description: "",
                    durations: [{
                        name: k.t(null, void 0, r(465577)),
                        value: "DAY"
                    }, {
                        name: k.t(null, void 0, r(91722)),
                        value: "WEEK",
                        default: !0
                    }, {
                        name: k.t(null, void 0, r(818749)),
                        value: "MONTH"
                    }, {
                        name: k.t(null, void 0, r(911563)),
                        value: "GTD",
                        hasDatePicker: !0,
                        hasTimePicker: !0
                    }],
                    logoUrl: _r,
                    logoBlackUrl: yr,
                    logoMiniUrl: qt,
                    logoMiniBlackUrl: kr,
                    logoMiniWebpUrl: Gt,
                    note: "by TradingView"
                }, (async e => {
                    const {
                        default: t
                    } = await Promise.all([r.e(33696), r.e(92188)]).then(r.t.bind(r, 167485, 23));
                    return new t(e, fr, (0, i.isFeatureEnabled)("use_new_paper_status_mapping"))
                })), o.enabled("real_brokers") && (!(0, s.isMobileTradingAvailable)() || !(0, i.isFeatureEnabled)("hide_real_brokers_on_mobile"))) {
                const e = [
                    ["ACTIVTRADES", function() {
                        const e = {
                                id: "ACTIVTRADES",
                                title: u("ACTIVTRADES").title,
                                configFlags: {
                                    authorizationType: "oauth2-implicit-flow",
                                    supportDemoLiveSwitcher: !1,
                                    supportRealtimeDataCheck: !1,
                                    supportSymbolSearch: !0,
                                    supportVerifyLiveAccount: !0,
                                    supportDisplayBrokerNameInSymbolSearch: !1,
                                    supportUnhideSymbolSearchGroups: !0
                                },
                                description: "",
                                symbolPrefix: "ACTIVTRADES",
                                isBeta: (0, i.isFeatureEnabled)("ACTIVTRADES_beta"),
                                isDevEnvironment: (0, i.isFeatureEnabled)("broker_ACTIVTRADES_dev"),
                                logoUrl: d,
                                logoBlackUrl: h,
                                logoMiniUrl: b,
                                logoMiniWebpUrl: g
                            },
                            t = (0,
                                i.isFeatureEnabled)("broker_ACTIVTRADES_dev") ? "https://staging-tradingapi.activtrades.com/" : "https://tradingapi.activtrades.com/";
                        (0, a.addBroker)(e, c(t, e))
                    }],
                    ["ALLY", function() {
                        const e = {
                            id: "ALLY",
                            title: u("ALLY").title,
                            description: "",
                            configFlags: {
                                authorizationType: "oauth",
                                supportPlaceOrderPreview: !0,
                                supportSymbolSearch: !0,
                                supportStopLimitOrders: !0,
                                supportDemoLiveSwitcher: !1,
                                supportEditAmount: !1,
                                supportPartialClosePosition: !0,
                                supportPLUpdate: !0,
                                supportReversePosition: !1
                            },
                            logoUrl: m,
                            logoBlackUrl: v,
                            logoMiniUrl: f,
                            logoMiniWebpUrl: _,
                            durations: [{
                                name: "DAY",
                                value: "DAY",
                                default: !0,
                                supportedOrderTypes: [1, 3, 4, 2]
                            }, {
                                name: "GTC",
                                value: "GTC",
                                supportedOrderTypes: [1, 3, 4]
                            }]
                        };
                        (0, a.addBroker)(e, function(e) {
                            return async (t, o) => {
                                const [{
                                    AllyInvestAuthorizationProvider: s,
                                    accountFactory: a,
                                    makeVerifyLiveAccountParams: n
                                }, {
                                    BrokerApiAdapter: l
                                }, {
                                    AbortControllerManager: c
                                }, {
                                    makeCommonAccountsManagerFactory: p
                                }] = await Promise.all([Promise.all([r.e(6455), r.e(53215), r.e(3916)]).then(r.bind(r, 14821)), r.e(50072).then(r.bind(r, 660985)), r.e(50072).then(r.bind(r, 640964)), r.e(50072).then(r.bind(r, 802040))]), u = new c, d = t.getLogger();
                                return new l({
                                    host: t,
                                    abortControllerManager: u,
                                    logger: d,
                                    authorizationProvider: new s(t.credentialsStorage, d, u.getSignal),
                                    accountsManagerFactory: p(((...e) => a("https://devapi.invest.ally.com/v1/", ...e))),
                                    metainfo: e,
                                    pullingIntervals: y,
                                    makeVerifyLiveAccountParams: n,
                                    brokerTelemetry: o,
                                    useSyncMapper: (0, i.isFeatureEnabled)("modular_broker_use_sync_mapper")
                                })
                            }
                        }(e))
                    }],
                    ["ALOR", function() {
                        const e = {
                                id: "ALOR",
                                title: u("ALOR").title,
                                configFlags: {
                                    authorizationType: "password",
                                    supportDemoLiveSwitcher: !1,
                                    supportLevel2Data: !0,
                                    supportSymbolSearch: !0
                                },
                                description: "",
                                logoUrl: S,
                                logoBlackUrl: S,
                                logoMiniUrl: C,
                                logoMiniWebpUrl: w,
                                locales: ["ru"],
                                loginPlaceholder: k.t(null, void 0, r(865221)) + ": Pxxxxxx"
                            },
                            t = (0, i.isFeatureEnabled)("broker_ALOR_dev") ? "https://tvcomdev.alorbroker.ru/tradingview/v1/" : "https://tvcom.alorbroker.ru/tradingview/v1/";
                        (0, a.addBroker)(e, c(t, e))
                    }],
                    ["ALPACA", function() {
                        const e = {
                                id: "ALPACA",
                                title: u("ALPACA").title,
                                configFlags: {
                                    authorizationType: "oauth2-implicit-flow",
                                    supportSymbolSearch: !0,
                                    supportDemoLiveSwitcher: !1,
                                    useSessionStorage: !0,
                                    supportDisplayBrokerNameInSymbolSearch: !1
                                },
                                description: "",
                                isDevEnvironment: (0, i.isFeatureEnabled)("broker_ALPACA_dev"),
                                logoUrl: P,
                                logoBlackUrl: T,
                                logoMiniUrl: M,
                                logoMiniWebpUrl: O
                            },
                            t = (0, i.isFeatureEnabled)("broker_ALPACA_dev") ? "https://staging-api.tradetalk.us/tradingview/" : "https://api.alpaca.markets/tradingview/";
                        (0, a.addBroker)(e, c(t, e))
                    }],
                    ["AMP", function() {
                        A({
                            id: "AMP",
                            title: u("AMP").title,
                            configFlags: { ...E,
                                supportVerifyLiveAccount: !0
                            },
                            logoUrl: D,
                            logoBlackUrl: x,
                            logoMiniUrl: L,
                            logoMiniWebpUrl: U,
                            cqgBrokerIdentifier: I.AMP,
                            demoConnectionParams: {
                                clientId: "AMPConnect",
                                privateLabel: "AMPConnect"
                            },
                            connectIssueSolutionId: 43000674990
                        })
                    }],
                    ["BINANCE", function() {
                        const e = (0, i.isFeatureEnabled)("broker_BINANCE_dev"),
                            t = {
                                id: "BINANCE",
                                title: u("BINANCE").title,
                                configFlags: {
                                    authorizationType: "oauth2-code-flow",
                                    supportSymbolSearch: !0,
                                    supportDemoLiveSwitcher: !1,
                                    supportRealtimeDataCheck: !1,
                                    supportVerifyLiveAccount: !0,
                                    supportDisplayBrokerNameInSymbolSearch: !1
                                },
                                isBeta: (0, i.isFeatureEnabled)("BINANCE_beta"),
                                description: "",
                                symbolPrefix: "BINANCE",
                                isDevEnvironment: e,
                                logoUrl: F,
                                logoBlackUrl: F,
                                logoMiniUrl: N,
                                logoMiniBlackUrl: R,
                                logoMiniWebpUrl: V,
                                logoMiniBlackWebpUrl: q
                            },
                            r = e ? "https://qacb.sdtaop.com/oauth-api/v1/tradingview/" : "https://accounts.binance.com/oauth-api/v1/tradingview/";
                        (0, a.addBroker)(t, c(r, t))
                    }],
                    ["BINGBON", function() {
                        const e = {
                                id: "BINGBON",
                                title: u("BINGBON").title,
                                configFlags: {
                                    authorizationType: "oauth2-code-flow",
                                    supportDemoLiveSwitcher: !1,
                                    supportRealtimeDataCheck: !1,
                                    supportSymbolSearch: !0,
                                    supportVerifyLiveAccount: !0,
                                    supportDisplayBrokerNameInSymbolSearch: !1,
                                    supportRiskControls: !1
                                },
                                description: "",
                                isDevEnvironment: (0, i.isFeatureEnabled)("broker_BINGBON_dev"),
                                logoUrl: G,
                                logoBlackUrl: W,
                                logoMiniUrl: z,
                                logoMiniWebpUrl: K,
                                symbolPrefix: "BINGX"
                            },
                            t = (0, i.isFeatureEnabled)("broker_BINGBON_dev") ? "https://pre-api-tv.bingbon.com/api/tv" : "https://api.bingbon.com/api/tv";
                        (0, a.addBroker)(e, c(t, e))
                    }],
                    ["BITGET", function() {
                        const e = {
                                id: "BITGET",
                                title: u("BITGET").title,
                                configFlags: {
                                    authorizationType: "password",
                                    supportDemoLiveSwitcher: !1,
                                    supportRealtimeDataCheck: !1,
                                    supportSymbolSearch: !0,
                                    supportVerifyLiveAccount: !0,
                                    supportDisplayBrokerNameInSymbolSearch: !1
                                },
                                isBeta: (0, i.isFeatureEnabled)("BITGET_beta"),
                                description: "",
                                logoUrl: j,
                                logoBlackUrl: j,
                                logoMiniUrl: H,
                                logoMiniWebpUrl: X,
                                symbolPrefix: "BITGET",
                                loginPlaceholder: k.t(null, void 0, r(509110)),
                                passwordPlaceholder: k.t(null, void 0, r(319241))
                            },
                            t = (0, i.isFeatureEnabled)("broker_BITGET_dev") ? "https://capi.bitget.com/api/tv/v3/" : "https://api.bitget.com/api/tv/v3/";
                        (0, a.addBroker)(e, c(t, e))
                    }],
                    ["BITSTAMP", Z],
                    ["BLACKBULL", ie],
                    ["CAPITALCOM", function() {
                        const e = {
                                id: "CAPITALCOM",
                                title: u("CAPITALCOM").title,
                                configFlags: {
                                    authorizationType: "oauth2-code-flow",
                                    supportSymbolSearch: !0,
                                    supportDemoLiveSwitcher: !1,
                                    supportUnhideSymbolSearchGroups: !0
                                },
                                description: "",
                                logoUrl: oe,
                                logoBlackUrl: se,
                                logoMiniUrl: ae,
                                logoMiniWebpUrl: ne,
                                isDevEnvironment: (0, i.isFeatureEnabled)("broker_CAPITALCOM_dev"),
                                symbolPrefix: "CAPITALCOM"
                            },
                            t = (0, i.isFeatureEnabled)("broker_CAPITALCOM_dev") ? "https://test-tradingview.backend-capital.com/" : "https://cc-tradingview.backend-capital.com/";
                        (0, a.addBroker)(e, c(t, e))
                    }],
                    ["CHAKA", function() {
                        const e = {
                                id: "CHAKA",
                                title: u("CHAKA").title,
                                configFlags: {
                                    authorizationType: "oauth2-implicit-flow",
                                    supportSymbolSearch: !0,
                                    supportDemoLiveSwitcher: !1,
                                    useSessionStorage: !0,
                                    supportDisplayBrokerNameInSymbolSearch: !1
                                },
                                description: "",
                                isDevEnvironment: (0, i.isFeatureEnabled)("broker_CHAKA_dev"),
                                logoUrl: le,
                                logoBlackUrl: ce,
                                logoMiniUrl: pe,
                                logoMiniWebpUrl: ue
                            },
                            t = (0, i.isFeatureEnabled)("broker_CHAKA_dev") ? "https://staging-api.tradetalk.us/tradingview/" : "https://api.alpaca.markets/tradingview/";
                        (0, a.addBroker)(e, c(t, e))
                    }],
                    ["CITYINDEX", function() {
                        const e = (0, i.isFeatureEnabled)("broker_CITYINDEX_dev") ? {
                            baseUrl: "https://trading-test.cityindex.com/tradingapi"
                        } : void 0;
                        (0, a.addBroker)({
                            id: "CITYINDEX",
                            title: u("CITYINDEX").title,
                            telemetryId: "FOREXCOM",
                            configFlags: {
                                authorizationType: "password",
                                supportClosePosition: !0,
                                supportPLUpdate: !0,
                                supportOrderBrackets: !0,
                                supportPositionBrackets: !0,
                                supportMarketBrackets: !1,
                                supportSymbolSearch: !0,
                                supportTrades: !0,
                                showQuantityInsteadOfAmount: !0,
                                supportDemoLiveSwitcher: !1,
                                supportMargin: !0,
                                supportPartialCloseTrade: !0,
                                supportPartialClosePosition: !0,
                                supportDisplayBrokerNameInSymbolSearch: !1,
                                supportTrailingStop: !0
                            },
                            customNotificationFields: ["duration.datetime", "duration.type"],
                            description: "",
                            durations: [{
                                name: k.t(null, void 0, r(652495)),
                                value: "GTC"
                            }, {
                                name: k.t(null, void 0, r(911563)),
                                value: "GTD",
                                hasDatePicker: !0,
                                hasTimePicker: !0
                            }, {
                                name: k.t(null, {
                                    context: "good-for-day"
                                }, r(1042)),
                                value: "GFD"
                            }],
                            logoUrl: be,
                            logoBlackUrl: ge,
                            logoMiniUrl: me,
                            logoMiniBlackUrl: me,
                            logoMiniWebpUrl: ve,
                            logoMiniBlackWebpUrl: ve
                        }, he({
                            id: "CITYINDEX",
                            title: u("CITYINDEX").title,
                            symbolSearchId: "CITYINDEX"
                        }, e))
                    }],
                    ["CQG", function() {
                        A({
                            id: "CQG",
                            title: "CQG",
                            configFlags: E,
                            logoUrl: fe,
                            logoBlackUrl: _e,
                            logoMiniUrl: ye,
                            logoMiniWebpUrl: ke,
                            note: "Multiple FCMs",
                            cqgBrokerIdentifier: {
                                salesSeries: null
                            }
                        })
                    }],
                    ["CURRENCYCOM", function() {
                        const e = {
                                id: "CURRENCYCOM",
                                title: u("CURRENCYCOM").title,
                                configFlags: {
                                    authorizationType: "oauth2-code-flow",
                                    supportSymbolSearch: !0,
                                    supportDemoLiveSwitcher: !1,
                                    supportUnhideSymbolSearchGroups: !0
                                },
                                description: "",
                                logoUrl: Se,
                                logoBlackUrl: Ce,
                                logoMiniUrl: we,
                                logoMiniWebpUrl: Pe,
                                isDevEnvironment: (0, i.isFeatureEnabled)("broker_CURRENCYCOM_dev"),
                                symbolPrefix: "CURRENCYCOM"
                            },
                            t = (0, i.isFeatureEnabled)("broker_CURRENCYCOM_dev") ? "https://test-crx-tradingview.backend.currency.com/" : "https://crx-tradingview.backend.currency.com/";
                        (0, a.addBroker)(e, c(t, e))
                    }],
                    ["DHAN", function() {
                        const e = {
                                id: "DHAN",
                                title: u("DHAN").title,
                                configFlags: {
                                    authorizationType: "oauth2-implicit-flow",
                                    supportDemoLiveSwitcher: !1,
                                    supportRealtimeDataCheck: !1,
                                    supportSymbolSearch: !0,
                                    supportVerifyLiveAccount: !0,
                                    supportDisplayBrokerNameInSymbolSearch: !1
                                },
                                description: "",
                                isBeta: (0, i.isFeatureEnabled)("DHAN_beta"),
                                isDevEnvironment: (0, i.isFeatureEnabled)("broker_DHAN_dev"),
                                logoUrl: Te,
                                logoBlackUrl: Te,
                                logoMiniUrl: Me,
                                logoMiniWebpUrl: Oe
                            },
                            t = (0, i.isFeatureEnabled)("broker_DHAN_dev") ? "https://tvapi.dhanuat.co/" : "https://tv-broker-api.dhan.co/";
                        (0, a.addBroker)(e, c(t, e))
                    }],
                    ["DORMAN", function() {
                        A({
                            id: "DORMAN",
                            title: u("DORMAN").title,
                            configFlags: { ...E,
                                supportVerifyLiveAccount: !0,
                                supportDemoLiveSwitcher: !1
                            },
                            logoUrl: Be,
                            logoBlackUrl: Be,
                            logoMiniUrl: Ee,
                            logoMiniWebpUrl: Ae,
                            cqgBrokerIdentifier: I.DORMAN
                        })
                    }],
                    ["DUMMY", function() {
                        const e = {
                            id: "DUMMY",
                            title: "Dummy Broker",
                            description: "",
                            configFlags: {
                                authorizationType: "none",
                                supportDemoLiveSwitcher: !1
                            },
                            logoUrl: "",
                            logoBlackUrl: "",
                            logoMiniUrl: "",
                            logoMiniWebpUrl: ""
                        };
                        (0, a.addBroker)(e, function(e) {
                            return async (t, i) => {
                                const [{
                                    accountFactory: o,
                                    DummyAuthorizationProvider: s
                                }, {
                                    BrokerApiAdapter: a
                                }, {
                                    AbortControllerManager: n
                                }, {
                                    makeCommonAccountsManagerFactory: l
                                }] = await Promise.all([r.e(38326).then(r.bind(r, 277430)), r.e(50072).then(r.bind(r, 660985)), r.e(50072).then(r.bind(r, 640964)), r.e(50072).then(r.bind(r, 802040))]), c = new n, p = t.getLogger();
                                return new a({
                                    host: t,
                                    abortControllerManager: c,
                                    logger: p,
                                    authorizationProvider: new s(t.credentialsStorage, p, c.getSignal),
                                    accountsManagerFactory: l(o),
                                    metainfo: e
                                })
                            }
                        }(e))
                    }],
                    ["EASYMARKETS", function() {
                        const e = {
                                id: "EASYMARKETS",
                                title: u("EASYMARKETS").title,
                                configFlags: {
                                    authorizationType: "oauth2-implicit-flow",
                                    supportSymbolSearch: !0,
                                    supportDemoLiveSwitcher: !1,
                                    supportVerifyLiveAccount: !0,
                                    supportUnhideSymbolSearchGroups: !0
                                },
                                description: "",
                                logoUrl: Ie,
                                logoBlackUrl: De,
                                logoMiniUrl: xe,
                                logoMiniWebpUrl: Le,
                                isDevEnvironment: (0, i.isFeatureEnabled)("broker_EASYMARKETS_dev"),
                                symbolPrefix: "EASYMARKETS"
                            },
                            t = (0, i.isFeatureEnabled)("broker_EASYMARKETS_dev") ? "https://prp.easymarkets.com/tradingview/api/" : "https://www.easymarkets.com/tradingview/api/";
                        (0, a.addBroker)(e, c(t, e))
                    }],
                    ["EIGHTCAP", Re],
                    ["FINANZEN", function() {
                        const e = (0, i.isFeatureEnabled)("broker_FINANZEN_dev"),
                            t = {
                                id: "FINANZEN",
                                title: u("FINANZEN").title,
                                configFlags: {
                                    authorizationType: "oauth2-code-flow",
                                    supportSymbolSearch: !0,
                                    supportDemoLiveSwitcher: !1,
                                    supportRealtimeDataCheck: !1,
                                    supportVerifyLiveAccount: !0,
                                    supportDisplayBrokerNameInSymbolSearch: !1
                                },
                                description: "",
                                symbolPrefix: "GETTEX",
                                logoUrl: Ve,
                                logoBlackUrl: qe,
                                logoMiniUrl: Ge,
                                logoMiniWebpUrl: We,
                                isBeta: (0, i.isFeatureEnabled)("FINANZEN_beta"),
                                isDevEnvironment: e
                            },
                            r = e ? "https://tv.zeroappt-t2.finanzen.net/api/" : "https://tv.partner.finanzen-zero.net/api/";
                        (0, a.addBroker)(t, c(r, t))
                    }],
                    ["FOREXCOM", function() {
                        const e = (0, i.isFeatureEnabled)("broker_FOREXCOM_dev") ? de : void 0;
                        (0, a.addBroker)({
                            id: "FOREXCOM",
                            title: u("FOREXCOM").title,
                            configFlags: {
                                authorizationType: "password",
                                supportClosePosition: !0,
                                supportPLUpdate: !0,
                                supportOrderBrackets: !0,
                                supportPositionBrackets: !0,
                                supportMarketBrackets: !1,
                                supportSymbolSearch: !0,
                                supportTrades: !0,
                                noAD: !0,
                                showQuantityInsteadOfAmount: !0,
                                supportDemoLiveSwitcher: !1,
                                supportMargin: !0,
                                supportTrailingStop: !0,
                                supportPartialCloseTrade: !0,
                                supportPartialClosePosition: !0,
                                supportDisplayBrokerNameInSymbolSearch: !1
                            },
                            customNotificationFields: ["duration.datetime", "duration.type"],
                            description: "",
                            durations: [{
                                name: k.t(null, void 0, r(652495)),
                                value: "GTC"
                            }, {
                                name: k.t(null, void 0, r(911563)),
                                value: "GTD",
                                hasDatePicker: !0,
                                hasTimePicker: !0
                            }, {
                                name: k.t(null, {
                                    context: "good-for-day"
                                }, r(1042)),
                                value: "GFD"
                            }],
                            backendBrokerName: "forexcom-g2",
                            logoUrl: ze,
                            logoBlackUrl: Ke,
                            logoMiniUrl: je,
                            logoMiniWebpUrl: He
                        }, he({
                            id: "FOREXCOM",
                            title: u("FOREXCOM").title,
                            symbolSearchId: "FOREXCOM-G2"
                        }, e))
                    }],
                    ["FTX", function() {
                        const e = {
                            id: "FTX",
                            title: u("FTX").title,
                            description: "",
                            configFlags: {
                                authorizationType: "oauth2-code-flow",
                                supportModifyOrder: !0,
                                supportPLUpdate: !0,
                                supportDemoLiveSwitcher: !1,
                                supportVerifyLiveAccount: !0,
                                supportSymbolSpecificCryptoOrderTicket: !0,
                                supportExecutions: !0,
                                supportBalances: !0,
                                supportBrackets: !0,
                                supportCryptoBrackets: !0,
                                supportStopLimitOrders: !0,
                                supportOrdersHistory: !0,
                                supportStopOrdersInBothDirections: !0,
                                supportStopLimitOrdersInBothDirections: !0,
                                supportLevel2Data: !0,
                                supportSymbolSearch: !0,
                                supportDisplayBrokerNameInSymbolSearch: !1,
                                supportRiskControls: !1,
                                usesWSConnection: !0
                            },
                            logoUrl: Xe,
                            logoBlackUrl: $e,
                            logoMiniUrl: Qe,
                            logoMiniBlackUrl: Ye,
                            logoMiniWebpUrl: Je,
                            logoMiniBlackWebpUrl: Ze
                        };
                        (0, a.addBroker)(e, function(e) {
                            return async (t, o) => {
                                const [{
                                    accountFactory: s,
                                    FTXAuthorizationProvider: a,
                                    FTXRequestsEnvironment: n,
                                    makeVerifyLiveAccountParams: l
                                }, {
                                    BrokerApiAdapter: c
                                }, {
                                    AbortControllerManager: p
                                }, {
                                    makeCommonAccountsManagerFactory: u
                                }, {
                                    makeFetchWithServerLogger: d
                                }] = await Promise.all([Promise.all([r.e(27232), r.e(72396), r.e(36221), r.e(17159)]).then(r.bind(r, 588756)), r.e(50072).then(r.bind(r, 660985)), r.e(50072).then(r.bind(r, 640964)), r.e(50072).then(r.bind(r, 802040)), r.e(56577).then(r.bind(r, 860431))]), h = new p, b = t.getLogger(), g = new n("https://ftx.com/api/"), m = (0, i.isFeatureEnabled)("enable_trading_server_logger") && (0, i.isFeatureEnabled)("trading_request_server_logger") && (0, i.isFeatureEnabled)("ftx_request_server_logger") ? t.serverLogger() : null, v = null !== m ? d(m) : void 0, f = u(((...[e, t, r]) => s({
                                    requestsEnvironment: g,
                                    holder: e,
                                    abortSignal: t,
                                    mapperFactory: r,
                                    ftxReferralProgram: "TradingView",
                                    customFetch: v
                                })));
                                return new c({
                                    host: t,
                                    abortControllerManager: h,
                                    logger: b,
                                    authorizationProvider: new a({
                                        credentialsStorage: t.credentialsStorage,
                                        logger: b,
                                        abortSignalGetter: h.getSignal,
                                        wsApiUrl: "wss://ftx.com/ws/",
                                        isFastRenewTokenEnabled: (0, i.isFeatureEnabled)("trading-fast-renew-oauth-token")
                                    }),
                                    accountsManagerFactory: f,
                                    metainfo: e,
                                    pullingIntervals: et,
                                    makeVerifyLiveAccountParams: l,
                                    brokerTelemetry: o,
                                    useSyncMapper: (0, i.isFeatureEnabled)("modular_broker_use_sync_mapper")
                                })
                            }
                        }(e))
                    }],
                    ["FXCM", function() {
                        const e = {
                            id: "FXCM",
                            title: u("FXCM").title,
                            configFlags: {
                                authorizationType: "oauth2-code-flow",
                                supportOrderBrackets: !0,
                                supportTradeBrackets: !0,
                                supportStopLimitOrders: !0,
                                supportTrades: !0,
                                supportCloseTrade: !0,
                                supportClosePosition: !0,
                                supportReversePosition: !1,
                                supportMultiposition: !0,
                                supportDemoLiveSwitcher: !1,
                                supportSymbolSearch: !0,
                                supportUnhideSymbolSearchGroups: !0,
                                supportPartialCloseTrade: !0,
                                supportDisplayBrokerNameInSymbolSearch: !1,
                                usesWSConnection: !0
                            },
                            description: "",
                            logoUrl: tt,
                            logoBlackUrl: rt,
                            logoMiniUrl: it,
                            logoMiniWebpUrl: ot,
                            durations: [{
                                name: "GTC",
                                value: "GTC"
                            }, {
                                name: "GTD",
                                value: "GTD",
                                hasDatePicker: !0,
                                hasTimePicker: !0
                            }, {
                                name: "FOK",
                                value: "FOK",
                                supportedOrderTypes: [2]
                            }, {
                                name: "IOK",
                                value: "IOK",
                                supportedOrderTypes: [2]
                            }],
                            orderRules: [{
                                id: "limitPriceDistance",
                                severity: "warning",
                                options: {
                                    buyDirectionPips: 4,
                                    sellDirectionPips: 4
                                }
                            }, {
                                id: "stopPriceDistance",
                                severity: "warning",
                                options: {
                                    buyDirectionPips: 4,
                                    sellDirectionPips: 4
                                }
                            }]
                        };
                        (0, a.addBroker)(e, function(e) {
                            return async t => {
                                const {
                                    Broker: o
                                } = await Promise.all([r.e(37022), r.e(91407), r.e(36221), r.e(42151)]).then(r.bind(r, 575348));
                                return new o(t, e, (0, i.isFeatureEnabled)("broker_FXCM_token_v2"), (0, i.isFeatureEnabled)("broker_FXCM_dev"), (0, i.isFeatureEnabled)("trading-fast-renew-oauth-token"))
                            }
                        }(e))
                    }],
                    ["FXOPEN", function() {
                        const e = (0, i.isFeatureEnabled)("broker_FXOPEN_dev"),
                            t = {
                                id: "FXOPEN",
                                title: u("FXOPEN").title,
                                configFlags: {
                                    authorizationType: "oauth2-code-flow",
                                    supportSymbolSearch: !0,
                                    supportDemoLiveSwitcher: !1,
                                    supportRealtimeDataCheck: !1,
                                    supportVerifyLiveAccount: !0,
                                    passLocalesLangInOAuth: !0,
                                    supportDisplayBrokerNameInSymbolSearch: !1,
                                    supportUnhideSymbolSearchGroups: !0
                                },
                                description: "",
                                isBeta: (0, i.isFeatureEnabled)("FXOPEN_beta"),
                                logoUrl: st,
                                logoBlackUrl: at,
                                logoMiniUrl: nt,
                                logoMiniWebpUrl: lt,
                                isDevEnvironment: e
                            },
                            r = e ? "https://tradingtvapi.st.soft-fx.eu/" : "https://tradingtvapi.fxopen.net/";
                        (0, a.addBroker)(t, c(r, t))
                    }],
                    ["GEMINI", function() {
                        const e = {
                                id: "GEMINI",
                                title: u("GEMINI").title,
                                configFlags: {
                                    authorizationType: "oauth2-implicit-flow",
                                    supportSymbolSearch: !0,
                                    supportDemoLiveSwitcher: !1,
                                    supportMarketOrders: !1,
                                    supportCryptoExchangeOrderTicket: !0,
                                    supportBalances: !0,
                                    supportDisplayBrokerNameInSymbolSearch: !1
                                },
                                description: "",
                                logoUrl: ct,
                                logoBlackUrl: pt,
                                logoMiniUrl: ut,
                                logoMiniWebpUrl: dt,
                                isDevEnvironment: (0, i.isFeatureEnabled)("broker_GEMINI_dev"),
                                symbolPrefix: "GEMINI"
                            },
                            t = (0, i.isFeatureEnabled)("broker_GEMINI_dev") ? "https://api.sandbox.gemini.com/v1/tradingview/" : "https://api.gemini.com/v1/tradingview/";
                        (0, a.addBroker)(e, c(t, e))
                    }],
                    ["GLOBALPRIME", function() {
                        const e = {
                                id: "GLOBALPRIME",
                                title: u("GLOBALPRIME").title,
                                configFlags: {
                                    authorizationType: "password",
                                    supportDemoLiveSwitcher: !1,
                                    supportRealtimeDataCheck: !0,
                                    supportSymbolSearch: !0,
                                    supportVerifyLiveAccount: !0,
                                    supportUnhideSymbolSearchGroups: !0,
                                    supportDisplayBrokerNameInSymbolSearch: !1
                                },
                                description: "",
                                logoUrl: ht,
                                logoBlackUrl: bt,
                                logoMiniUrl: gt,
                                logoMiniBlackUrl: mt,
                                logoMiniWebpUrl: vt,
                                logoMiniBlackWebpUrl: ft,
                                symbolPrefix: "GLOBALPRIME"
                            },
                            t = (0, i.isFeatureEnabled)("broker_GLOBALPRIME_dev") ? "https://trading.traderevolution.com/tradingview/v1" : "https://trading.globalprime.com/tradingview/v1";
                        (0, a.addBroker)(e, c(t, e))
                    }],
                    ["HITBTC", function() {
                        const e = {
                            id: "HITBTC",
                            title: u("HITBTC").title,
                            configFlags: {
                                authorizationType: "password",
                                supportDemoLiveSwitcher: !1,
                                supportSymbolSearch: !0,
                                supportDisplayBrokerNameInSymbolSearch: !1
                            },
                            description: "",
                            logoUrl: _t,
                            logoBlackUrl: yt,
                            logoMiniUrl: kt,
                            logoMiniWebpUrl: St,
                            loginPlaceholder: k.t(null, void 0, r(200189)),
                            passwordPlaceholder: k.t(null, void 0, r(587947)),
                            connectIssueSolutionId: 43000578174,
                            symbolPrefix: "HITBTC"
                        };
                        (0, a.addBroker)(e, c("https://tv.hitbtc.com/", e))
                    }],
                    ["IBKR", function() {
                        const e = {
                            id: "IBKR",
                            title: u("IBKR").title,
                            description: "",
                            configFlags: {
                                authorizationType: "oauth",
                                supportDemoLiveSwitcher: !1,
                                supportOrderBrackets: !0,
                                supportStopLimitOrders: !0,
                                supportStopLimitOrdersInBothDirections: !0,
                                supportPartialClosePosition: !0,
                                supportPlaceOrderPreview: !0,
                                supportRealtimeDataCheck: !0,
                                supportSymbolSearch: !0,
                                supportPLUpdate: !0,
                                supportDisplayBrokerNameInSymbolSearch: !1,
                                supportConfirmations: !0,
                                positionPLInInstrumentCurrency: !0,
                                supportCancellingBothBracketsOnly: !0,
                                supportStopOrdersInBothDirections: !0,
                                supportModifyDuration: !0,
                                supportExecutions: !0,
                                supportTradeHistoryTabInAccountManager: !0,
                                usesWSConnection: !0,
                                closePositionCancelsOrders: !1
                            },
                            durations: [{
                                name: "Day",
                                value: "DAY",
                                default: !0,
                                supportedOrderTypes: Mt
                            }, {
                                name: "Good Till Cancel",
                                value: "GTC",
                                supportedOrderTypes: Mt
                            }, {
                                name: "At The Opening",
                                value: "OPG",
                                supportedOrderTypes: [1, 2]
                            }],
                            logoUrl: Ct,
                            logoBlackUrl: wt,
                            logoMiniUrl: Pt,
                            logoMiniWebpUrl: Tt,
                            importantLoginScreenMessage: k.t(null, void 0, r(145099))
                        };
                        (0, a.addBroker)(e, function(e) {
                            return async (t, o) => {
                                const [{
                                    ibkrAccountsManagerFactory: s,
                                    IBKRAuthorizationProvider: a,
                                    IBKRRequestsEnvironment: n,
                                    makeCheckRealtimeDataParams: l,
                                    makeVerifyLiveAccountParams: c,
                                    getIBKRMaintenanceStatus: p
                                }, {
                                    BrokerApiAdapter: u
                                }, {
                                    AbortControllerManager: d
                                }, {
                                    makeFetchWithServerLogger: h
                                }] = await Promise.all([Promise.all([r.e(7879), r.e(53215), r.e(72143)]).then(r.bind(r, 435098)), r.e(50072).then(r.bind(r, 660985)), r.e(50072).then(r.bind(r, 640964)), r.e(56577).then(r.bind(r, 860431))]), b = new d, g = t.getLogger(), m = (0, i.isFeatureEnabled)("broker_IBKR_dev"), v = m ? "https://api.ibkr.com/alpha/api/" : "https://api.ibkr.com/v1/tv/", f = m ? "wss://api.ibkr.com/alpha/api/ws" : "wss://api.ibkr.com/v1/tv/ws", _ = new n(v), y = (0, i.isFeatureEnabled)("ibkr-demo-maintenance-url") ? "https://api.ibkr.com/v1/gstat/bulletins?p=tv-demo" : "https://api.ibkr.com/v1/gstat/bulletins?p=tv", k = (0, i.isFeatureEnabled)("enable_trading_server_logger") && (0, i.isFeatureEnabled)("trading_request_server_logger") && (0, i.isFeatureEnabled)("ibkr_request_server_logger") ? t.serverLogger() : null, S = null !== k ? h(k) : void 0, C = new a({
                                    credentialsStorage: t.credentialsStorage,
                                    logger: g,
                                    abortSignalGetter: b.getSignal,
                                    wsApiUrl: f,
                                    isStaging: m,
                                    isFastRenewTokenEnabled: (0, i.isFeatureEnabled)("trading-fast-renew-oauth-token"),
                                    requestsEnvironment: _,
                                    customFetch: S
                                }), w = (0, i.isFeatureEnabled)("check_ibkr_side_maintenance") ? () => p(y, S) : void 0;
                                return new u({
                                    host: t,
                                    abortControllerManager: b,
                                    logger: g,
                                    authorizationProvider: C,
                                    accountsManagerFactory: (...[e, t, r]) => s({
                                        holder: e,
                                        abortSignal: t,
                                        mapperFactory: r,
                                        requestsEnvironment: _,
                                        customFetch: S
                                    }),
                                    metainfo: e,
                                    pullingIntervals: {
                                        realtime: 1e3,
                                        orders: 1e3,
                                        positions: 1e3,
                                        pl: 1e3,
                                        executions: 1e3,
                                        summaryRow: 1e4,
                                        summaryTable: 1e4,
                                        equity: 6e4
                                    },
                                    makeVerifyLiveAccountParams: (...e) => c(v, ...e),
                                    makeCheckRealtimeDataParams: (...e) => l(v, ...e),
                                    getMaintenanceStatus: w,
                                    brokerTelemetry: o,
                                    shouldParallelizeProviderInitialization: (0, i.isFeatureEnabled)("ibkr_parallel_provider_initialization"),
                                    useSyncMapper: (0, i.isFeatureEnabled)("modular_broker_use_sync_mapper"),
                                    useCustomizedFormatter: !0
                                })
                            }
                        }(e))
                    }],
                    ["IBROKER", function() {
                        const e = {
                                id: "IBROKER",
                                title: u("IBROKER").title,
                                configFlags: {
                                    authorizationType: "password",
                                    supportDemoLiveSwitcher: !1,
                                    supportRealtimeDataCheck: !0,
                                    supportSymbolSearch: !0,
                                    supportLevel2Data: !0,
                                    supportUnhideSymbolSearchGroups: !0
                                },
                                description: "",
                                logoUrl: Ot,
                                logoBlackUrl: Bt,
                                logoMiniUrl: Et,
                                logoMiniWebpUrl: At,
                                locales: ["es", "it"],
                                symbolPrefix: "IBROKER"
                            },
                            t = (0, i.isFeatureEnabled)("broker_IBROKER_dev") ? "https://beta.ibroker.es/tradingview/api" : "https://www.ibroker.es/tradingview/api";
                        (0, a.addBroker)(e, c(t, e))
                    }],
                    ["INFOYATIRIM", Lt],
                    ["IRONBEAM", function() {
                        A({
                            id: "IRONBEAM",
                            title: u("IRONBEAM").title,
                            configFlags: { ...E,
                                supportVerifyLiveAccount: !0,
                                supportDemoLiveSwitcher: !1
                            },
                            logoUrl: Ut,
                            logoBlackUrl: Ut,
                            logoMiniUrl: Ft,
                            logoMiniWebpUrl: Nt,
                            cqgBrokerIdentifier: I.IRONBEAM
                        })
                    }],
                    ["MOCKBROKER", function() {
                        const e = {
                            id: "MOCKBROKER",
                            title: "Mock Broker",
                            isBeta: (0, i.isFeatureEnabled)("MOCKBROKER_beta"),
                            configFlags: {
                                authorizationType: "password",
                                supportDemoLiveSwitcher: !1,
                                supportRealtimeDataCheck: !1,
                                supportSymbolSearch: !0,
                                supportVerifyLiveAccount: !1
                            },
                            description: "The Mock Broker used for internal testing only. Use only if you know what you are doing.",
                            logoUrl: Rt,
                            logoBlackUrl: Vt,
                            logoMiniUrl: qt,
                            logoMiniWebpUrl: Gt
                        };
                        (0, a.addBroker)(e, c("https://localhost:5001", e))
                    }],
                    ["MODAL", function() {
                        const e = {
                                id: "MODAL",
                                title: u("MODAL").title,
                                configFlags: {
                                    isSuspended: (0, i.isFeatureEnabled)("modal_suspend"),
                                    authorizationType: "password",
                                    supportDemoLiveSwitcher: !1,
                                    supportRealtimeDataCheck: !0,
                                    supportSymbolSearch: !0
                                },
                                description: "",
                                logoUrl: Wt,
                                logoBlackUrl: zt,
                                logoMiniUrl: Kt,
                                logoMiniWebpUrl: jt,
                                locales: ["br"],
                                suspendedLink: "https://www.tradingview.com/blog/pb/os-servicos-da-corretora-modalmais-estarao-pausados-para-manutencao-no-tradingview-a-partir-de-01-07-2019-12810/"
                            },
                            t = (0, i.isFeatureEnabled)("broker_MODAL_dev") ? "https://tradingviewhmg.modalmais.com.br" : "https://tradingview.modalmais.com.br";
                        (0, a.addBroker)(e, c(t, e))
                    }],
                    ["OANDA", function() {
                        (0, a.addBroker)({
                            id: "OANDA",
                            title: u("OANDA").title,
                            configFlags: {
                                authorizationType: "oauth2-implicit-flow",
                                supportOrderBrackets: !0,
                                supportTrailingStop: !0,
                                supportTrades: !0,
                                supportCloseTrade: !0,
                                supportTradeBrackets: !0,
                                requiresFIFOCloseTrades: !0,
                                fifoOnlyForSameQty: !0,
                                supportClosePosition: !0,
                                supportModifyDuration: !0,
                                supportMultiposition: !0,
                                supportPLUpdate: !0,
                                supportSymbolSearch: !0,
                                requiresTermsOfServiceConfirmation: !0,
                                supportMargin: !0,
                                supportUnhideSymbolSearchGroups: !0,
                                supportPartialClosePosition: !0,
                                supportPartialCloseTrade: !0,
                                supportDisplayBrokerNameInSymbolSearch: !1,
                                supportExecutions: !0,
                                supportStopOrdersInBothDirections: !0
                            },
                            description: "",
                            customTermsOfServiceText: k.t(null, void 0, r(894402)),
                            logoUrl: Xt,
                            logoBlackUrl: $t,
                            logoMiniUrl: Ht,
                            logoMiniWebpUrl: Qt
                        }, (async e => {
                            const {
                                Broker: t
                            } = await Promise.all([r.e(78134), r.e(32655)]).then(r.bind(r, 639410));
                            return new t(e, (0, i.isFeatureEnabled)("trading-fast-renew-oauth-token"), (0, i.isFeatureEnabled)("oanda-european-accounts-warning"))
                        }))
                    }],
                    ["OKX", function() {
                        const e = {
                                id: "OKX",
                                title: u("OKX").title,
                                configFlags: {
                                    authorizationType: "oauth2-code-flow",
                                    supportSymbolSearch: !0,
                                    supportDemoLiveSwitcher: !1,
                                    supportRealtimeDataCheck: !1,
                                    supportVerifyLiveAccount: !0,
                                    supportDisplayBrokerNameInSymbolSearch: !1,
                                    supportRiskControls: !1
                                },
                                description: "",
                                logoUrl: Yt,
                                logoBlackUrl: Jt,
                                logoMiniUrl: Zt,
                                logoMiniBlackUrl: er,
                                logoMiniWebpUrl: tr,
                                logoMiniBlackWebpUrl: rr,
                                symbolPrefix: "OKX",
                                isDevEnvironment: (0, i.isFeatureEnabled)("broker_OKX_dev"),
                                connectIssueSolutionId: 43000674832
                            },
                            t = (0, i.isFeatureEnabled)("broker_OKX_dev") ? "https://tvpap.okx.com/api/v5/tp/" : "https://www.okx.com/api/v5/tp/";
                        (0, a.addBroker)(e, c(t, e))
                    }],
                    ["OPTIMUS", function() {
                        A({
                            id: "OPTIMUS",
                            title: u("OPTIMUS").title,
                            configFlags: { ...E,
                                supportVerifyLiveAccount: !0
                            },
                            logoUrl: ir,
                            logoBlackUrl: or,
                            logoMiniUrl: sr,
                            logoMiniWebpUrl: ar,
                            cqgBrokerIdentifier: I.OPTIMUS
                        })
                    }],
                    ["ORAMA", function() {
                        const e = {
                                id: "ORAMA",
                                title: u("ORAMA").title,
                                configFlags: {
                                    authorizationType: "password",
                                    supportDemoLiveSwitcher: !1,
                                    supportSymbolSearch: !0,
                                    supportVerifyLiveAccount: !0,
                                    supportUnhideSymbolSearchGroups: !1,
                                    supportDisplayBrokerNameInSymbolSearch: !1,
                                    supportRealtimeDataCheck: !0
                                },
                                isBeta: (0, i.isFeatureEnabled)("ORAMA_beta"),
                                description: "",
                                logoUrl: nr,
                                logoBlackUrl: nr,
                                logoMiniUrl: lr,
                                logoMiniWebpUrl: cr,
                                loginPlaceholder: "CPF",
                                connectIssueSolutionId: 43000680706
                            },
                            t = (0, i.isFeatureEnabled)("broker_ORAMA_dev") ? "https://zrh3u5m41k.execute-api.sa-east-1.amazonaws.com/sim" : "https://zrh3u5m41k.execute-api.sa-east-1.amazonaws.com/v1";
                        (0, a.addBroker)(e, c(t, e))
                    }],
                    ["OSMANLI", function() {
                        const e = (0, i.isFeatureEnabled)("broker_OSMANLI_dev"),
                            t = {
                                id: "OSMANLI",
                                title: u("OSMANLI").title,
                                configFlags: {
                                    authorizationType: "oauth2-implicit-flow",
                                    supportSymbolSearch: !0,
                                    supportDemoLiveSwitcher: !1,
                                    supportRealtimeDataCheck: !0,
                                    supportVerifyLiveAccount: !0,
                                    supportDisplayBrokerNameInSymbolSearch: !1,
                                    passLocalesLangInOAuth: !0
                                },
                                description: "",
                                isBeta: (0, i.isFeatureEnabled)("OSMANLI_beta"),
                                logoUrl: pr,
                                logoBlackUrl: pr,
                                logoMiniUrl: ur,
                                logoMiniWebpUrl: dr,
                                isDevEnvironment: e,
                                realtimeDataPermissionsToggleConfig: {
                                    enableRealtimeDataPermissionsToggleText: k.t(null, void 0, r(628516)),
                                    disableRealtimeDataPermissionsToggleText: k.t(null, void 0, r(491717)),
                                    realtimeDataPermissionsToggleText: k.t(null, void 0, r(822439))
                                }
                            },
                            o = e ? "https://tbpilot.matriksdata.com/TradingView/TVRestApi/trade/" : "https://tvapi3.osmanlimenkul.com.tr/TradingView/TVRestApi/trade/";
                        (0, a.addBroker)(t, c(o, t))
                    }],
                    ["PEPPERSTONE", Mr],
                    ["PHILLIPNOVA", function() {
                        const e = {
                                id: "PHILLIPNOVA",
                                title: u("PHILLIPNOVA").title,
                                configFlags: {
                                    authorizationType: "password",
                                    supportDemoLiveSwitcher: !1,
                                    supportRealtimeDataCheck: !0,
                                    supportSymbolSearch: !0,
                                    supportVerifyLiveAccount: !0,
                                    supportDisplayBrokerNameInSymbolSearch: !1
                                },
                                isBeta: (0, i.isFeatureEnabled)("PHILLIPNOVA_beta"),
                                description: "",
                                symbolPrefix: "PHILLIPNOVA",
                                logoUrl: Or,
                                logoBlackUrl: Br,
                                logoMiniUrl: Er,
                                logoMiniWebpUrl: Ar
                            },
                            t = (0, i.isFeatureEnabled)("broker_PHILLIPNOVA_dev") ? "https://nova-api.tdt.asia/api/" : "https://novatvapi.phillipmobile.com/api/";
                        (0, a.addBroker)(e, c(t, e))
                    }],
                    ["SAXOBANK", function() {
                        const e = {
                                id: "SAXOBANK",
                                title: u("SAXOBANK").title,
                                configFlags: {
                                    authorizationType: "oauth2-implicit-flow",
                                    supportDemoLiveSwitcher: !1,
                                    supportSymbolSearch: !0,
                                    supportModifyDuration: !0,
                                    requiresTermsOfServiceConfirmation: !0,
                                    passLocalesLangInOAuth: !0,
                                    supportVerifyLiveAccount: !0,
                                    supportReversePosition: !1,
                                    supportDisplayBrokerNameInSymbolSearch: !1,
                                    supportCurrencyInOrderPreview: !1
                                },
                                customTermsOfServiceText: k.t(null, void 0, r(897829)),
                                customNotificationFields: ["duration.datetime", "duration.type"],
                                description: "",
                                logoUrl: Ir,
                                logoBlackUrl: Ir,
                                logoMiniUrl: Dr,
                                logoMiniWebpUrl: xr,
                                customPositionColumnTitles: [{
                                    unrealizedPl: k.t(null, void 0, r(758705))
                                }],
                                isDevEnvironment: (0, i.isFeatureEnabled)("broker_SAXOBANK_dev"),
                                symbolPrefix: "SAXO"
                            },
                            t = (0, i.isFeatureEnabled)("broker_SAXOBANK_dev") ? "https://appsvc-nl2-simtest-tradingviewproxy.azurewebsites.net/api" : "https://api.tradingview.saxo/api";
                        (0, a.addBroker)(e, c(t, e))
                    }],
                    ["SKILLING", function() {
                        const e = (0, i.isFeatureEnabled)("broker_SKILLING_dev"),
                            t = {
                                id: "SKILLING",
                                title: u("SKILLING").title,
                                configFlags: {
                                    authorizationType: "oauth2-code-flow",
                                    supportSymbolSearch: !0,
                                    supportDemoLiveSwitcher: !1,
                                    supportRealtimeDataCheck: !1,
                                    supportVerifyLiveAccount: !0,
                                    supportDisplayBrokerNameInSymbolSearch: !1,
                                    supportUnhideSymbolSearchGroups: !0
                                },
                                description: "",
                                isBeta: (0, i.isFeatureEnabled)("SKILLING_beta"),
                                logoUrl: Lr,
                                logoBlackUrl: Lr,
                                logoMiniUrl: Ur,
                                logoMiniWebpUrl: Fr,
                                isDevEnvironment: e,
                                symbolPrefix: "SKILLING"
                            },
                            r = e ? "https://devtest.skilling.com/g/tv/" : "https://skilling.com/g/tv/";
                        (0, a.addBroker)(t, c(r, t))
                    }],
                    ["SPREADEX", function() {
                        const e = {
                                id: "SPREADEX",
                                title: u("SPREADEX").title,
                                configFlags: {
                                    authorizationType: "password",
                                    supportDemoLiveSwitcher: !1,
                                    supportRealtimeDataCheck: !1,
                                    supportSymbolSearch: !0,
                                    supportVerifyLiveAccount: !0,
                                    supportDisplayBrokerNameInSymbolSearch: !1,
                                    supportUnhideSymbolSearchGroups: !0
                                },
                                isBeta: (0, i.isFeatureEnabled)("SPREADEX_beta"),
                                description: "",
                                logoUrl: Nr,
                                logoBlackUrl: Rr,
                                logoMiniUrl: Vr,
                                logoMiniWebpUrl: qr,
                                symbolPrefix: "SPREADEX"
                            },
                            t = (0, i.isFeatureEnabled)("broker_SPREADEX_dev") ? "https://tradingview-api.test.spreadex.com" : "https://tradingview-api.spreadex.com";
                        (0, a.addBroker)(e, c(t, e))
                    }],
                    ["STONEX", function() {
                        A({
                            id: "STONEX",
                            title: u("STONEX").title,
                            configFlags: { ...E,
                                supportVerifyLiveAccount: !0,
                                supportDemoLiveSwitcher: !1
                            },
                            logoUrl: Gr,
                            logoBlackUrl: Wr,
                            logoMiniUrl: zr,
                            logoMiniWebpUrl: Kr,
                            cqgBrokerIdentifier: I.STONEX
                        })
                    }],
                    ["TICKMILL", function() {
                        A({
                            id: "TICKMILL",
                            title: u("TICKMILL").title,
                            configFlags: { ...E,
                                supportVerifyLiveAccount: !0,
                                supportDemoLiveSwitcher: !1
                            },
                            logoUrl: jr,
                            logoBlackUrl: Hr,
                            logoMiniUrl: Xr,
                            logoMiniWebpUrl: $r,
                            cqgBrokerIdentifier: I.TICKMILL
                        })
                    }],
                    ["TIGER", function() {
                        const e = {
                                id: "TIGER",
                                title: u("TIGER").title,
                                configFlags: {
                                    authorizationType: "oauth2-implicit-flow",
                                    supportSymbolSearch: !0,
                                    supportDemoLiveSwitcher: !1,
                                    supportVerifyLiveAccount: !0
                                },
                                description: "",
                                logoUrl: Qr,
                                logoBlackUrl: Qr,
                                logoMiniUrl: Yr,
                                logoMiniWebpUrl: Jr,
                                isDevEnvironment: (0, i.isFeatureEnabled)("broker_TIGER_dev")
                            },
                            t = (0, i.isFeatureEnabled)("broker_TIGER_dev") ? "https://openapi-sandbox.tigerfintech.com/api" : "https://openapi.itiger.com/api";
                        (0, a.addBroker)(e, c(t, e))
                    }],
                    ["TIMEX", function() {
                        const e = {
                                id: "TIMEX",
                                title: u("TIMEX").title,
                                configFlags: {
                                    authorizationType: "password",
                                    supportDemoLiveSwitcher: !1,
                                    supportRealtimeDataCheck: !1,
                                    supportSymbolSearch: !0,
                                    supportVerifyLiveAccount: !0,
                                    supportDisplayBrokerNameInSymbolSearch: !1
                                },
                                description: "",
                                logoUrl: Zr,
                                logoBlackUrl: Zr,
                                logoMiniUrl: ei,
                                logoMiniWebpUrl: ti,
                                loginPlaceholder: k.t(null, void 0, r(370575)),
                                passwordPlaceholder: k.t(null, void 0, r(484426)),
                                connectIssueSolutionId: 43000629811,
                                symbolPrefix: "TIMEX"
                            },
                            t = (0, i.isFeatureEnabled)("broker_TIMEX_dev") ? "https://plasma-relay-backend-dev.timex.io/tv" : "https://plasma-relay-backend.timex.io/tv";
                        (0, a.addBroker)(e, c(t, e))
                    }],
                    ["TINKOFF", function() {
                        const e = {
                            id: "TINKOFF",
                            title: u("TINKOFF").title,
                            description: "",
                            configFlags: {
                                authorizationType: "token",
                                positionPLInInstrumentCurrency: !0,
                                supportModifyOrder: !1,
                                supportPLUpdate: !0,
                                supportDemoLiveSwitcher: !0,
                                supportStopOrders: !1,
                                supportVerifyLiveAccount: !1
                            },
                            logoUrl: ri,
                            logoBlackUrl: ii,
                            logoMiniUrl: oi,
                            logoMiniWebpUrl: si
                        };
                        (0, a.addBroker)(e, function(e) {
                            return async (t, i) => {
                                const [{
                                    TokenAuthorizationProvider: o
                                }, {
                                    accountFactory: s
                                }, {
                                    BrokerApiAdapter: a
                                }, {
                                    AbortControllerManager: n
                                }, {
                                    makeCommonAccountsManagerFactory: l
                                }] = await Promise.all([r.e(51723).then(r.bind(r, 397560)), r.e(51723).then(r.bind(r, 995925)), r.e(50072).then(r.bind(r, 660985)), r.e(50072).then(r.bind(r, 640964)), r.e(50072).then(r.bind(r, 802040))]), c = new n, p = t.getLogger();
                                return new a({
                                    host: t,
                                    logger: p,
                                    abortControllerManager: c,
                                    authorizationProvider: new o(t.credentialsStorage, p, c.getSignal),
                                    accountsManagerFactory: l(s),
                                    metainfo: e,
                                    pullingIntervals: {
                                        realtime: 5e3,
                                        orders: 5e3,
                                        positions: 5e3,
                                        pl: 5e3,
                                        executions: 5e3,
                                        summaryRow: 1e4,
                                        summaryTable: 1e4,
                                        equity: 6e4
                                    }
                                })
                            }
                        }(e))
                    }],
                    ["TRADESTATION_V3", function() {
                        const e = {
                            id: "TRADESTATION",
                            title: u("TRADESTATION").title,
                            configFlags: {
                                authorizationType: "oauth2-code-flow",
                                supportDemoLiveSwitcher: !0,
                                supportLevel2Data: !0,
                                supportSymbolSearch: !0,
                                supportDOM: !0,
                                supportRealtimeDataCheck: !0,
                                showIPAddressRestrictionMessage: !1,
                                supportPlaceOrderPreview: !0,
                                supportOrdersHistory: !0,
                                supportStopOrders: !0,
                                supportStopLimitOrders: !0,
                                supportOrderBrackets: !0,
                                supportPositionBrackets: !0,
                                supportPLUpdate: !0,
                                supportClosePosition: !0,
                                supportNativeReversePosition: !0,
                                closePositionCancelsOrders: !0,
                                supportOnlyPairPositionBrackets: !0,
                                supportCryptoBrackets: !0,
                                supportExecutions: !0,
                                supportStopLimitOrdersInBothDirections: !0,
                                supportPlacingOrderCancelling: !0
                            },
                            description: "",
                            durations: [{
                                name: "DAY",
                                value: "DAY",
                                default: !0,
                                supportedOrderTypes: ci
                            }, {
                                name: "DAY+",
                                value: "DYP",
                                supportedOrderTypes: ci
                            }, {
                                name: "GTC",
                                value: "GTC",
                                supportedOrderTypes: ci
                            }, {
                                name: "GTC+",
                                value: "GCP",
                                supportedOrderTypes: ci
                            }, {
                                name: "GTD",
                                value: "GTD",
                                hasDatePicker: !0,
                                hasTimePicker: !1,
                                supportedOrderTypes: ci
                            }, {
                                name: "GTD+",
                                value: "GDP",
                                hasDatePicker: !0,
                                hasTimePicker: !1,
                                supportedOrderTypes: ci
                            }, {
                                name: "IOC",
                                value: "IOC",
                                supportedOrderTypes: ci
                            }, {
                                name: "FOK",
                                value: "FOK",
                                supportedOrderTypes: ci
                            }, {
                                name: "OPG",
                                value: "OPG",
                                supportedOrderTypes: [2]
                            }, {
                                name: "CLO",
                                value: "CLO",
                                supportedOrderTypes: [2]
                            }, {
                                name: "1 MIN",
                                value: "1",
                                supportedOrderTypes: ci
                            }, {
                                name: "3 MIN",
                                value: "3",
                                supportedOrderTypes: ci
                            }, {
                                name: "5 MIN",
                                value: "5",
                                supportedOrderTypes: ci
                            }],
                            logoUrl: ai,
                            logoBlackUrl: ai,
                            logoMiniUrl: ni,
                            logoMiniWebpUrl: li
                        };
                        (0, a.addBroker)(e, function(e) {
                            return async t => {
                                const [{
                                    Broker: o
                                }, {
                                    makeFetchWithServerLogger: s
                                }] = await Promise.all([Promise.all([r.e(77795), r.e(36221), r.e(85193)]).then(r.bind(r, 540099)), r.e(56577).then(r.bind(r, 860431))]), a = (0, i.isFeatureEnabled)("enable_trading_server_logger") && (0, i.isFeatureEnabled)("trading_request_server_logger") && (0, i.isFeatureEnabled)("tradestation_request_server_logger") ? t.serverLogger() : null, n = null !== a ? s(a) : void 0;
                                return new o({
                                    host: t,
                                    metainfo: e,
                                    isDev: (0, i.isFeatureEnabled)("broker_TRADESTATION_V3_dev"),
                                    isFastRenewTokenEnabled: (0, i.isFeatureEnabled)("trading-fast-renew-oauth-token"),
                                    useSyncMapper: (0, i.isFeatureEnabled)("tradestation_use_sync_mapper"),
                                    isCountryBlockEnabled: !(0, i.isFeatureEnabled)("disable_tradestation_country_block"),
                                    prohibitedCountryCodes: ["RU"],
                                    customFetch: n
                                })
                            }
                        }(e))
                    }],
                    ["TRADIER", hi],
                    ["TRADOVATE", function() {
                        const e = {
                            id: "TRADOVATE",
                            title: u("TRADOVATE").title,
                            configFlags: {
                                authorizationType: "password",
                                supportLevel2Data: !1,
                                supportDemoLiveSwitcher: !0,
                                supportSymbolSearch: !0,
                                supportRealtimeDataCheck: !0,
                                supportAddBracketsToExistingOrder: !1
                            },
                            description: "",
                            logoUrl: bi,
                            logoBlackUrl: gi,
                            logoMiniUrl: mi,
                            logoMiniWebpUrl: vi
                        };
                        let t = "https://tv-live.tradovateapi.com",
                            r = "https://tv-demo.tradovateapi.com";
                        (0, i.isFeatureEnabled)("broker_TRADOVATE_dev") && (t = "https://tv-live-d.tradovateapi.com", r = "https://tv-demo-d.tradovateapi.com"), (0, a.addBroker)(e, c(t, e, r))
                    }],
                    ["VELOCITY", Si],
                    ["WHSELFINVEST", function() {
                        const e = (0, i.isFeatureEnabled)("broker_WHSELFINVEST_dev") ? de : void 0;
                        (0, a.addBroker)({
                            id: "WHSELFINVEST",
                            title: u("WHSELFINVEST").title,
                            telemetryId: "FOREXCOM",
                            configFlags: {
                                authorizationType: "password",
                                supportClosePosition: !0,
                                supportPLUpdate: !0,
                                supportOrderBrackets: !0,
                                supportPositionBrackets: !0,
                                supportMarketBrackets: !1,
                                supportSymbolSearch: !0,
                                supportTrades: !0,
                                showQuantityInsteadOfAmount: !0,
                                supportDemoLiveSwitcher: !1,
                                supportMargin: !0,
                                supportPartialCloseTrade: !0,
                                supportPartialClosePosition: !0
                            },
                            customNotificationFields: ["duration.datetime", "duration.type"],
                            description: "",
                            durations: [{
                                name: k.t(null, void 0, r(652495)),
                                value: "GTC"
                            }, {
                                name: k.t(null, void 0, r(902643)),
                                value: "GTD",
                                hasDatePicker: !0,
                                hasTimePicker: !0
                            }, {
                                name: k.t(null, {
                                    context: "good-for-day"
                                }, r(487794)),
                                value: "GFD"
                            }],
                            logoUrl: Ci,
                            logoBlackUrl: Ci,
                            logoMiniUrl: wi,
                            logoMiniWebpUrl: Pi
                        }, he({
                            id: "WHSELFINVEST",
                            title: u("WHSELFINVEST").title,
                            symbolSearchId: "WHSELFINVEST"
                        }, e))
                    }]
                ];
                for (const [t, r] of e)(0, i.isFeatureEnabled)(`broker_${t}`) && !(0, s.isBrokerHidden)(t) && r()
            }
        },
        827963: (e, t, r) => {
            "use strict";
            r.d(t, {
                defaultConfigFlags: () => i,
                applyDefaultsToConfigFlags: () => o
            });
            const i = {
                isSuspended: !1,
                supportDemoLiveSwitcher: !0,
                supportModifyOrderPrice: !0,
                supportEditAmount: !0,
                supportModifyBrackets: !0,
                supportMarketBrackets: !0,
                supportMarketOrders: !0,
                supportStopOrders: !0,
                supportLimitOrders: !0,
                supportStopLimitOrders: !1,
                supportPositions: !0,
                supportDOM: !0,
                supportModifyTrailingStop: !0,
                supportAddBracketsToExistingOrder: !0,
                supportVerifyLiveAccount: !0,
                supportReversePosition: !0,
                showNotificationsLog: !0,
                supportPLUpdate: !0,
                supportTwoFactorAuthorization: !1,
                supportDisplayBrokerNameInSymbolSearch: !0,
                supportCurrencyInOrderPreview: !0,
                supportRiskControls: !0
            };

            function o(e) {
                return Object.assign({}, i, e)
            }
        },
        541216: (e, t, r) => {
            "use strict";
            r.d(t, {
                DialogVisibility: () => s
            });
            var i = r(947488),
                o = r(218286);
            class s {
                constructor() {
                    this._value$ = new i.BehaviorSubject({
                        isVisible: !1
                    }), this.value$ = this._value$.asObservable().pipe((0, o.distinctUntilChanged)(((e, t) => e.isVisible === t.isVisible && e.isFullScreen === t.isFullScreen)))
                }
                getValue() {
                    return this._value$.getValue()
                }
                setValue(e) {
                    this._value$.next(e)
                }
            }
        },
        83478: (e, t, r) => {
            "use strict";
            r.d(t, {
                brokerSideMaintenance: () => s
            });
            var i = r(777754),
                o = r(779923);
            const s = {
                show(e) {
                    const t = i.t(null, void 0, r(11167)).replace("{brokerName}", e);
                    (0, o.showWarning)({
                        title: i.t(null, void 0, r(551361)).replace("{brokerName}", e),
                        text: t
                    })
                }
            }
        },
        511485: (e, t, r) => {
            "use strict";
            r.d(t, {
                DisabledConfirmations: () => u
            });
            var i = r(62802),
                o = r.n(i),
                s = r(855385),
                a = r.n(s),
                n = r(962127);
            const l = /[0-9]+([\.,][0-9]+)*([\.,][0-9]+)?|\.[0-9]+/gm,
                c = /[A-Z]+/gm,
                p = n.settingsKeys.DISABLED_CONFIRMATIONS;
            class u {
                add(e) {
                    const t = this._getAll(),
                        r = this._makeMessageHash(e);
                    t.add(r), o().setJSON(p, Array.from(t))
                }
                has(e) {
                    const t = this._getAll(),
                        r = this._makeMessageHash(e);
                    return t.has(r)
                }
                clear() {
                    o().remove(p)
                }
                _getAll() {
                    return new Set(o().getJSON(p))
                }
                _makeMessageHash(e) {
                    const t = e.replace(l, "").replace(c, "");
                    return r = a()(t), btoa(String.fromCharCode.apply(null, new Uint8Array(r)));
                    var r
                }
            }
        },
        979229: (e, t, r) => {
            "use strict";

            function i(e) {
                return "string" == typeof e ? e : Array.isArray(e) ? e.join("") : void 0
            }
            r.d(t, {
                makeConfirmation: () => i
            })
        },
        746932: (e, t, r) => {
            "use strict";
            r.d(t, {
                showConfirmDialog: () => a
            });
            var i = r(777754),
                o = r(979229),
                s = r(511485);
            async function a(e) {
                const {
                    title: t,
                    content: a,
                    mainButtonText: n,
                    cancelButtonText: l,
                    showDisableConfirmationsCheckbox: c,
                    onOpen: p,
                    onClose: u
                } = e, d = new s.DisabledConfirmations, h = (0, o.makeConfirmation)(a);
                if (c && void 0 !== h && d.has(h)) return !0;
                const {
                    ConfirmDialogRenderer: b
                } = await Promise.all([r.e(88230), r.e(18619), r.e(81910), r.e(86256), r.e(12275), r.e(33335), r.e(91901), r.e(83772), r.e(71140), r.e(85761), r.e(64884), r.e(54819), r.e(1428), r.e(1011), r.e(52701), r.e(59302), r.e(36812), r.e(69273), r.e(67177), r.e(69392), r.e(23426), r.e(75514), r.e(745), r.e(3566)]).then(r.bind(r, 851325)), g = new b(d), m = {
                    title: t,
                    message: a,
                    closeButton: null != l ? l : i.t(null, void 0, r(606255)),
                    confirmButton: null != n ? n : i.t(null, void 0, r(879831)),
                    showDisableConfirmationsCheckbox: c,
                    onOpen: p,
                    onClose: u
                };
                return (await g.open(m)).status
            }
        },
        202118: (e, t, r) => {
            "use strict";
            r.d(t, {
                showSimpleConfirmDialog: () => s
            });
            var i = r(462282),
                o = r(511485);
            async function s(e) {
                const {
                    showDisableConfirmationsCheckbox: t,
                    text: s,
                    onConfirm: a,
                    onClose: n,
                    onCancel: l,
                    abortSignal: c
                } = e, p = new o.DisabledConfirmations;
                if (t && p.has(s)) return Promise.resolve(!0);
                if (null == c ? void 0 : c.aborted) return Promise.resolve(!1);
                const [{
                    showSimpleDialog: u
                }, {
                    SimpleConfirmDialog: d
                }] = await Promise.all([Promise.all([r.e(88230), r.e(18619), r.e(81910), r.e(86256), r.e(12275), r.e(33335), r.e(91901), r.e(83772), r.e(71140), r.e(85761), r.e(64884), r.e(54819), r.e(1428), r.e(1011), r.e(52701), r.e(59302), r.e(36812), r.e(69273), r.e(67177), r.e(69392), r.e(23426), r.e(75514), r.e(745), r.e(3566)]).then(r.bind(r, 894185)), Promise.all([r.e(88230), r.e(18619), r.e(81910), r.e(86256), r.e(12275), r.e(33335), r.e(91901), r.e(83772), r.e(71140), r.e(85761), r.e(64884), r.e(54819), r.e(1428), r.e(1011), r.e(52701), r.e(59302), r.e(36812), r.e(69273), r.e(67177), r.e(69392), r.e(23426), r.e(75514), r.e(745), r.e(3566)]).then(r.bind(r, 858921))]);
                return new Promise(((t, r) => {
                    if (null == c ? void 0 : c.aborted) return void r((0, i.createAbortError)());
                    const o = u({ ...e,
                        disabledConfirmations: p,
                        onConfirm: e => {
                            t(!0), void 0 !== a && a(), e.dialogClose()
                        },
                        onClose: () => {
                            t(!1), void 0 !== n && n()
                        },
                        onCancel: e => {
                            t(!1), void 0 !== l && l(e), e.dialogClose()
                        }
                    }, d);
                    null == c || c.addEventListener("abort", (() => {
                        o(), r((0, i.createAbortError)())
                    }), {
                        once: !0
                    })
                }))
            }
        },
        350172: (e, t, r) => {
            "use strict";
            r.d(t, {
                ConfirmBracketsCancelDialog: () => s
            });
            var i = r(777754),
                o = r(202118);
            const s = {
                get() {
                    return this
                },
                open: e => (0, o.showSimpleConfirmDialog)({
                    title: i.t(null, void 0, r(232668)),
                    text: i.t(null, void 0, r(289302)).replace("{orderId}", "" !== e ? e + " " : ""),
                    mainButtonIntent: "primary"
                }),
                multiple: e => (0, o.showSimpleConfirmDialog)({
                    title: i.t(null, void 0, r(232668)),
                    text: i.t(null, void 0, r(915610)).replace("{orderId}", "" !== e ? e + " " : ""),
                    mainButtonIntent: "primary"
                })
            }
        },
        400711: (e, t, r) => {
            "use strict";
            r.d(t, {
                ConfirmOrderCancelDialog: () => s
            });
            r(984919);
            var i = r(777754),
                o = r(202118);
            const s = {
                get() {
                    return this
                },
                open: e => (0, o.showSimpleConfirmDialog)({
                    title: i.t(null, void 0, r(709498)),
                    text: i.t(null, void 0, r(438540)).replace("{orderId}", e),
                    mainButtonIntent: "primary"
                }),
                multiple(e, t, s) {
                    let a = e;
                    if (void 0 !== t) {
                        a = `${a} ${1===t?i.t(null,void 0,r(864351)):i.t(null,void 0,r(807889))}`
                    }
                    return (0, o.showSimpleConfirmDialog)({
                        title: i.t(null, void 0, r(709498)),
                        text: i.t(null, void 0, r(109886)).replace("{qty}", String(s)).replace("{side}", a),
                        mainButtonIntent: "primary"
                    })
                }
            }
        },
        955501: (e, t, r) => {
            "use strict";
            r.d(t, {
                maintenance: () => s
            });
            var i = r(777754),
                o = r(779923);
            const s = {
                show(e) {
                    (0, o.showWarning)({
                        title: i.t(null, void 0, r(933710)).replace("{name}", e),
                        text: i.t(null, void 0, r(453857)).replace("{name}", e)
                    })
                }
            }
        },
        507857: (e, t, r) => {
            "use strict";
            r.d(t, {
                reversePositionDialog: () => s
            });
            var i = r(777754),
                o = r(202118);
            async function s(e, t, s, a) {
                if (!await (0, o.showSimpleConfirmDialog)({
                        title: i.t(null, void 0, r(172361)).replace("{positionId}", e),
                        text: i.t(null, void 0, r(492698)).replace("{positionId}", e) + (a ? " " + i.t(null, void 0, r(893827)) : ""),
                        mainButtonText: i.t(null, void 0, r(920848)),
                        mainButtonIntent: "primary",
                        cancelButtonText: i.t(null, void 0, r(620036)),
                        showBackdrop: !0
                    })) return !1;
                try {
                    return await s()
                } catch (e) {
                    return t(i.t(null, void 0, r(945593)), function(e) {
                        let t = "";
                        null !== e && "object" == typeof e && e.message ? t = e.message : "string" == typeof e && (t = e);
                        return t
                    }(e)), !1
                }
            }
        },
        865484: (e, t, r) => {
            "use strict";
            r.d(t, {
                EncryptedWebStorage: () => n
            });
            var i = r(272001),
                o = r(78792),
                s = r(703819);
            const a = (0, i.getLogger)("Trading.EncryptedWebStorage");
            class n {
                constructor({
                    prefix: e,
                    storageName: t,
                    storage: r,
                    cryptographer: i
                }) {
                    this._transientStorage = {}, this._handleStorageStateChange = e => {
                        const {
                            key: t,
                            storageArea: r
                        } = e;
                        r === this._persistentStorage && this._storageName === t && this._decryptStorage()
                    }, this._storageName = t, this._prefix = null == e ? void 0 : e.toLowerCase(), this._persistentStorage = r, this._cryptographer = i, this._decryptStorage = (0, o.sequentialize)(this._decryptStorage), window.addEventListener("storage", this._handleStorageStateChange)
                }
                async setItem(e, t) {
                    const r = this._addPrefix(e);
                    this._transientStorage[r] = JSON.stringify(t);
                    try {
                        await this._encryptStorageAndSave()
                    } catch (e) {
                        a.logError(`Unable to save value using key ${r}: ${(0,s.getLoggerMessage)(e)}`)
                    }
                }
                getItem(e, t = null) {
                    const r = this._transientStorage[this._addPrefix(e)];
                    if (void 0 === r) return t;
                    if ("string" != typeof r) return r;
                    try {
                        return JSON.parse(r)
                    } catch (e) {
                        return r
                    }
                }
                async removeItem(e) {
                    delete this._transientStorage[this._addPrefix(e)], await this._encryptStorageAndSave()
                }
                destroy() {
                    window.removeEventListener("storage", this._handleStorageStateChange)
                }
                static async create(e, t, r, i) {
                    const o = new n({
                        prefix: e,
                        storageName: t,
                        storage: r,
                        cryptographer: i
                    });
                    return await o._decryptStorage(), o
                }
                _addPrefix(e) {
                    return void 0 !== this._prefix ? `${this._prefix}.${e}` : e
                }
                async _decryptStorage() {
                    const e = this._persistentStorage.getItem(this._storageName);
                    if (null === e) return void(this._transientStorage = {});
                    const t = await this._cryptographer.decrypt(e);
                    if (null === t) return this._persistentStorage.removeItem(this._storageName), void(this._transientStorage = {});
                    try {
                        this._transientStorage = JSON.parse(t)
                    } catch (e) {
                        this._transientStorage = {}
                    }
                }
                async _encryptStorageAndSave() {
                    const e = await this._cryptographer.encrypt(JSON.stringify(this._transientStorage));
                    this._persistentStorage.setItem(this._storageName, e)
                }
            }
        },
        276889: (e, t, r) => {
            "use strict";
            var i, o;

            function s(e) {
                return (null == e ? void 0 : e.type) === o.PlaceOrder
            }
            r.d(t, {
                    PlaceOrEditContextStatus: () => i,
                    PlaceOrEditContextType: () => o,
                    isContextPlaceOrderContext: () => s
                }),
                function(e) {
                    e[e.Undefined = 0] = "Undefined", e[e.Loading = 1] = "Loading", e[e.Error = 2] = "Error"
                }(i || (i = {})),
                function(e) {
                    e[e.PlaceOrder = 0] = "PlaceOrder", e[e.EditOrder = 1] = "EditOrder", e[e.EditPosition = 2] = "EditPosition", e[e.EditTrade = 3] = "EditTrade"
                }(o || (o = {}))
        },
        851229: (e, t, r) => {
            "use strict";
            r.d(t, {
                RememberCredentials: () => s
            });
            var i = r(62802),
                o = r.n(i);
            class s {
                constructor(e) {
                    this._settingsKey = `trading.${e}.rememberCredentials`
                }
                value() {
                    return o().getBool(this._settingsKey, !0)
                }
                setValue(e) {
                    o().setValue(this._settingsKey, e)
                }
            }
        },
        570731: (e, t, r) => {
            "use strict";
            r.d(t, {
                showTradingPanelPopup: () => o
            });
            var i = r(893271);
            async function o() {
                (await (0, i.waitTradingService)()).tradingPanelPopup.show()
            }
        },
        853093: (e, t, r) => {
            "use strict";
            r.d(t, {
                makeUserSpecificCryptographer: () => o
            });
            var i = r(139195);

            function o() {
                return {
                    encrypt: i.userSpecificEncrypt,
                    decrypt: i.userSpecificDecrypt
                }
            }
        },
        885129: (e, t, r) => {
            "use strict";
            r.d(t, {
                validatePrice: () => c
            });
            var i = r(777754),
                o = r(960521),
                s = r.n(o),
                a = r(910368);
            const n = i.t(null, void 0, r(134986));

            function l(e, t) {
                return s()(e).minus(t).abs().gt(s()(e).div(2))
            }

            function c(e) {
                const {
                    price: t,
                    askOrBid: o,
                    orderType: c,
                    side: p,
                    isStopPrice: u,
                    isForex: d,
                    formatter: h,
                    supportStopOrdersInBothDirections: b,
                    supportStopLimitOrdersInBothDirections: g,
                    step: m,
                    roundedToStep: v
                } = e;
                if ((!d || v) && !1 === (0, a.isMintickMultiple)(t, m)) return {
                    res: !0,
                    severity: "error",
                    msg: i.t(null, void 0, r(130927)).format({
                        minTick: h.format(m)
                    })
                };
                const f = t < 0 || s()(o).mul(100).lt(t) || function(e) {
                    const {
                        price: t,
                        askOrBid: r,
                        orderType: i,
                        side: o,
                        isStopPrice: s,
                        supportStopOrdersInBothDirections: a,
                        supportStopLimitOrdersInBothDirections: n
                    } = e;
                    return 1 === i ? 1 === o ? t > r && l(r, t) : t < r && l(r, t) : !!(3 === i && !a || 4 === i && s && !n) && (1 === o ? t < r : t > r)
                }({
                    price: t,
                    askOrBid: o,
                    orderType: c,
                    side: p,
                    isStopPrice: u,
                    supportStopOrdersInBothDirections: b,
                    supportStopLimitOrdersInBothDirections: g
                });
                return f ? {
                    res: !0,
                    severity: "error",
                    msg: n
                } : {
                    res: !1
                }
            }
        },
        482494: (e, t, r) => {
            "use strict";
            r.d(t, {
                QuantityFormatter: () => o
            });
            var i = r(951512);
            class o {
                constructor(e) {
                    this._formatter = new i.NumericFormatter(e)
                }
                format(e) {
                    return this._formatter.format(e)
                }
                parse(e) {
                    const t = this._formatter.parse(e);
                    return Number.isNaN(t) ? {
                        res: !1,
                        error: "Value is NaN"
                    } : {
                        res: !0,
                        value: t
                    }
                }
            }
        },
        664434: (e, t, r) => {
            "use strict";
            r.d(t, {
                isSymbolSearchResult: () => h,
                SYMBOL_SEARCH_VERSION_3_ENABLED: () => m,
                searchSymbols: () => b,
                searchSymbolsPaginated: () => g
            });
            var i = r(650151),
                o = r(66974),
                s = r(175203),
                a = r(26416),
                n = r(703819),
                l = r(989452),
                c = r(495046),
                p = r(125226),
                u = r(711242),
                d = r(890740);

            function h(e) {
                return e.hasOwnProperty("exchange")
            }
            async function b(e) {
                var t, r, i, o;
                const l = y(),
                    c = v(e),
                    p = `${l}?${(0,a.createQueryParams)(c)}`,
                    u = (new Date).getTime();
                try {
                    const o = await (0, d.fetch)(p, {
                        signal: e.signal
                    });
                    if (!o.ok) throw null === (t = e.serverLogger) || void 0 === t || t.log({
                        action: "symbol-search.error-response",
                        level: "error",
                        payload: {
                            request: {
                                url: p,
                                method: "GET"
                            },
                            statusCode: o.status,
                            message: (await o.text()).slice(0, 250)
                        }
                    }), new Error(`${o.status}: ${o.statusText}`);
                    const a = await o.json();
                    return s.telemetry.sendChartReport("symbol_search_http_status", {
                        value: o.status
                    }), 0 === a.length ? null === (r = e.serverLogger) || void 0 === r || r.log({
                        action: "symbol-search.empty-response",
                        level: "error",
                        payload: {
                            request: {
                                url: p,
                                method: "GET"
                            }
                        }
                    }) : null === (i = e.serverLogger) || void 0 === i || i.log({
                        action: "symbol-search.success-response",
                        level: "info",
                        payload: {
                            request: {
                                url: p,
                                method: "GET"
                            },
                            symbolsCount: a.length
                        }
                    }), a
                } catch (t) {
                    throw s.telemetry.sendChartReport("symbol_search_http_error"), null === (o = e.serverLogger) || void 0 === o || o.log({
                        action: "symbol-search.network-error",
                        level: "error",
                        payload: {
                            request: {
                                url: p,
                                method: "GET"
                            },
                            message: (0, n.getLoggerMessage)(t)
                        }
                    }), t
                } finally {
                    f(u)
                }
            }
            async function g(e) {
                var t, r, i, o;
                if (!l.isSymbolSearchPaginationEnabled) {
                    return {
                        symbols: await b(e),
                        symbols_remaining: 0
                    }
                }
                const c = y(!0),
                    p = v(e),
                    u = `${c}?${(0,a.createQueryParams)(p)}`,
                    h = (new Date).getTime();
                try {
                    const o = await (0, d.fetch)(u, {
                        signal: e.signal
                    });
                    if (!o.ok) throw null === (t = e.serverLogger) || void 0 === t || t.log({
                        action: "symbol-search.error-response",
                        level: "error",
                        payload: {
                            request: {
                                url: u,
                                method: "GET"
                            },
                            statusCode: o.status,
                            message: (await o.text()).slice(0, 250)
                        }
                    }), new Error(`${o.status}: ${o.statusText}`);
                    const a = await o.json();
                    return s.telemetry.sendChartReport("symbol_search_http_status", {
                        value: o.status
                    }), 0 === a.symbols.length ? null === (r = e.serverLogger) || void 0 === r || r.log({
                        action: "symbol-search.empty-response",
                        level: "error",
                        payload: {
                            request: {
                                url: u,
                                method: "GET"
                            }
                        }
                    }) : null === (i = e.serverLogger) || void 0 === i || i.log({
                        action: "symbol-search.success-response",
                        level: "info",
                        payload: {
                            request: {
                                url: u,
                                method: "GET"
                            },
                            symbolsCount: a.symbols.length
                        }
                    }), a
                } catch (t) {
                    throw s.telemetry.sendChartReport("symbol_search_http_error"), null === (o = e.serverLogger) || void 0 === o || o.log({
                        action: "symbol-search.network-error",
                        level: "error",
                        payload: {
                            request: {
                                url: u,
                                method: "GET"
                            },
                            message: (0, n.getLoggerMessage)(t)
                        }
                    }), t
                } finally {
                    f(h)
                }
            }
            const m = !c.enabled("widget") && (0, p.isFeatureEnabled)("enable_symbol_search_version_3");

            function v(e) {
                const t = {};
                void 0 !== e.text && (t.text = e.text), void 0 !== e.brokerSymbols && (t.broker_symbols = e.brokerSymbols.sort().join(",")), void 0 !== e.serverHighlight && (t.hl = e.serverHighlight ? "1" : "0"), void 0 !== e.exchange && (t.exchange = e.exchange), void 0 !== e.country && (t.country = e.country), e.strictMatch && (t.strict = "1"), e.noLimits && (t.no_limits = "1"), void 0 !== e.lang && (t.lang = e.lang);
                const {
                    type: r
                } = e;
                var o;
                void 0 !== r && (m ? t.search_type = (o = r, (0, i.ensureDefined)(k.get(o))) : t.type = r), void 0 !== e.start && (t.start = e.start);
                const {
                    filterQueryParams: s
                } = e;
                return void 0 !== s && Object.keys(s).forEach((e => {
                    const r = s[e];
                    r && (t[e] = r)
                })), window.SS_DOMAIN_PARAMETER && (t.domain = window.SS_DOMAIN_PARAMETER), e.brokerId && (t.broker = e.brokerId.toLowerCase(), e.onlyTradable && (t.tradable = "1"), e.unhideSymbolSearchGroups && (t.unhide = e.unhideSymbolSearchGroups)), (0, p.isFeatureEnabled)("enable_symbol_search_sort_by_country") && e.sortByCountry && (t.sort_by_country = e.sortByCountry), t
            }

            function f(e) {
                const t = (new Date).getTime() - e;
                s.telemetry.sendChartReport("symbol_search_time_frame", {
                    value: t
                })
            }
            const _ = {
                0: {
                    0: "/s/",
                    1: "/symbol_search/v3/",
                    2: "/symbol_search/"
                },
                1: {
                    0: "/local_search_v2/",
                    1: "/local_search/v3/",
                    2: "/local_search/"
                }
            };

            function y(e) {
                let t = "https://" + window.SS_HOST;
                const r = (0, o.isProd)() ? 0 : 1;
                return t += _[r][e ? m ? 1 : 0 : 2], window.SS_URL && (t = window.SS_URL), t
            }
            const k = new Map((m ? u : []).map((({
                value: e,
                search_type: t
            }) => [e, t])))
        },
        424720: (e, t, r) => {
            "use strict";
            r.d(t, {
                mediaQueryAddEventListener: () => i,
                mediaQueryRemoveEventListener: () => o
            });
            const i = (e, t) => {
                    (null == e ? void 0 : e.addEventListener) ? e.addEventListener("change", t): e.addListener(t)
                },
                o = (e, t) => {
                    (null == e ? void 0 : e.removeEventListener) ? e.removeEventListener("change", t): e.removeListener(t)
                }
        },
        78792: (e, t, r) => {
            "use strict";

            function i(e) {
                let t = Promise.resolve();
                return function(...r) {
                    const i = t.then((() => e.apply(this, r)));
                    return t = i.catch((() => {})), i
                }
            }

            function o(...e) {
                return (e, t, r) => {
                    const o = r.value,
                        s = Symbol();
                    return {
                        get() {
                            return void 0 === this[s] && (this[s] = i(o)), this[s].bind(this)
                        }
                    }
                }
            }
            r.d(t, {
                sequentialize: () => i,
                sequentializeDecorator: () => o
            })
        },
        621893: (e, t, r) => {
            "use strict";
            e.exports = r.p + "activtrades.5fef7af731effba34f8f.svg"
        },
        379832: (e, t, r) => {
            "use strict";
            e.exports = r.p + "ally.052bcdbf969f1b70b1e3.svg"
        },
        50738: (e, t, r) => {
            "use strict";
            e.exports = r.p + "alor.e502473eb216e684c3c4.svg"
        },
        886834: (e, t, r) => {
            "use strict";
            e.exports = r.p + "alpaca.074e331f96f77242e2ee.svg"
        },
        237095: (e, t, r) => {
            "use strict";
            e.exports = r.p + "amp.a564991597ae67573012.svg"
        },
        272044: (e, t, r) => {
            "use strict";
            e.exports = r.p + "binance.3f27fca3058a37fc22c6.svg"
        },
        843419: (e, t, r) => {
            "use strict";
            e.exports = r.p + "bingbon.5f027c1a4fe2e7b6ac79.svg"
        },
        772087: (e, t, r) => {
            "use strict";
            e.exports = r.p + "bitget.e8c92b4747315c044505.svg"
        },
        748049: (e, t, r) => {
            "use strict";
            e.exports = r.p + "bitstamp.8116969a29b1d8c4e828.svg"
        },
        419657: (e, t, r) => {
            "use strict";
            e.exports = r.p + "activtrades.16ccecf7e2c3a1053a48.svg"
        },
        494224: (e, t, r) => {
            "use strict";
            e.exports = r.p + "ally.5a7b2b4b6a82e3bc60a8.svg"
        },
        397140: (e, t, r) => {
            "use strict";
            e.exports = r.p + "alpaca.08194b4029ba0c7de489.svg"
        },
        719044: (e, t, r) => {
            "use strict";
            e.exports = r.p + "amp.3e4ba7bb902e5bc11d1a.svg"
        },
        666761: (e, t, r) => {
            "use strict";
            e.exports = r.p + "bingbon.5c60b4c30d15a1072597.svg"
        },
        62982: (e, t, r) => {
            "use strict";
            e.exports = r.p + "bitstamp.63827299681d6cb71fa2.svg"
        },
        993802: (e, t, r) => {
            "use strict";
            e.exports = r.p + "capital.743f588fa2f966fdfd9c.svg"
        },
        722511: (e, t, r) => {
            "use strict";
            e.exports = r.p + "chaka.210996e25f5ed8896b4a.svg"
        },
        153301: (e, t, r) => {
            "use strict";
            e.exports = r.p + "cityindex.408ec3a6ac3261e7d7d0.svg"
        },
        277242: (e, t, r) => {
            "use strict";
            e.exports = r.p + "cqg.8302f6496b94bc4a2b86.svg"
        },
        798077: (e, t, r) => {
            "use strict";
            e.exports = r.p + "currencycom.032d16d5e04dbab72a97.svg"
        },
        843542: (e, t, r) => {
            "use strict";
            e.exports = r.p + "easymarkets.2d18561a85cc49b23362.svg"
        },
        372706: (e, t, r) => {
            "use strict";
            e.exports = r.p + "finanzen.2d5bb3e7b438078f33af.svg"
        },
        274067: (e, t, r) => {
            "use strict";
            e.exports = r.p + "forexcom.b6f83a025b4f987d0da4.svg"
        },
        687332: (e, t, r) => {
            "use strict";
            e.exports = r.p + "ftx.3feaaf5051f12e59902f.svg"
        },
        266259: (e, t, r) => {
            "use strict";
            e.exports = r.p + "fxcm.b224493c2f1c7d7c9126.svg"
        },
        808793: (e, t, r) => {
            "use strict";
            e.exports = r.p + "fxopen.7b13898333c48d3d7383.svg"
        },
        850494: (e, t, r) => {
            "use strict";
            e.exports = r.p + "gemini.879ffd73794771604d88.svg"
        },
        892665: (e, t, r) => {
            "use strict";
            e.exports = r.p + "globalprime.d5526092f177b26693cc.svg"
        },
        578386: (e, t, r) => {
            "use strict";
            e.exports = r.p + "hitbtc.482a70f5d39e172172c0.svg"
        },
        773375: (e, t, r) => {
            "use strict";
            e.exports = r.p + "ibkr.870d3cf86e8ad242d9fc.svg"
        },
        322597: (e, t, r) => {
            "use strict";
            e.exports = r.p + "ibroker.32fa37d4d6d98e6dfc18.svg"
        },
        889310: (e, t, r) => {
            "use strict";
            e.exports = r.p + "mockbroker.fbf35c2d6009794a4560.svg"
        },
        830446: (e, t, r) => {
            "use strict";
            e.exports = r.p + "modalmais.c83b86cf4ec7593f7c96.svg"
        },
        27892: (e, t, r) => {
            "use strict";
            e.exports = r.p + "oanda.f7ef22b80d26d7f18e98.svg"
        },
        576450: (e, t, r) => {
            "use strict";
            e.exports = r.p + "okx.012a41554af5f245b3c6.svg"
        },
        261536: (e, t, r) => {
            "use strict";
            e.exports = r.p + "optimus.90d6d4165735b9d4f9c7.svg"
        },
        582477: (e, t, r) => {
            "use strict";
            e.exports = r.p + "paper.3615a71a48dd32f9a8ca.svg"
        },
        914305: (e, t, r) => {
            "use strict";
            e.exports = r.p + "pepperstone.f67f342f551f08f18831.svg"
        },
        89895: (e, t, r) => {
            "use strict";
            e.exports = r.p + "phillipnova.f1bdaef5ad200d8c4c50.svg"
        },
        593771: (e, t, r) => {
            "use strict";
            e.exports = r.p + "spreadex.2f6385b8c1578d365f69.svg"
        },
        410760: (e, t, r) => {
            "use strict";
            e.exports = r.p + "stonex.0c724bec23a4aa28e180.svg"
        },
        581687: (e, t, r) => {
            "use strict";
            e.exports = r.p + "tickmill.17c057bc391e77befc31.svg"
        },
        105324: (e, t, r) => {
            "use strict";
            e.exports = r.p + "tinkoff.00a99d855b9ac8f37d09.svg"
        },
        797478: (e, t, r) => {
            "use strict";
            e.exports = r.p + "tradovate.f0d7d672940a57b44be3.svg"
        },
        376687: (e, t, r) => {
            "use strict";
            e.exports = r.p + "velocity.340f28b42f03501c826f.svg"
        },
        844349: (e, t, r) => {
            "use strict";
            e.exports = r.p + "blackbull.4e6863ed25d24aea63d9.svg"
        },
        887453: (e, t, r) => {
            "use strict";
            e.exports = r.p + "capital.216bd87a9d39b4b8db6c.svg"
        },
        989048: (e, t, r) => {
            "use strict";
            e.exports = r.p + "chaka.633af7c666de6b891827.svg"
        },
        504845: (e, t, r) => {
            "use strict";
            e.exports = r.p + "cityindex.1674ee1afa9e4618f06b.svg"
        },
        981056: (e, t, r) => {
            "use strict";
            e.exports = r.p + "cqg.9a7a45d460d7762046f8.svg"
        },
        265001: (e, t, r) => {
            "use strict";
            e.exports = r.p + "currencycom.b803a0b719bb4026faf7.svg"
        },
        214147: (e, t, r) => {
            "use strict";
            e.exports = r.p + "dhan.b9e617e68ce1e0f7d2bf.svg"
        },
        278338: (e, t, r) => {
            "use strict";
            e.exports = r.p + "dorman.94fedada45257622a0aa.svg"
        },
        916933: (e, t, r) => {
            "use strict";
            e.exports = r.p + "easymarkets.09c75491541b07009dcf.svg"
        },
        268183: (e, t, r) => {
            "use strict";
            e.exports = r.p + "eightcap.03db0e0228e0858bf59f.svg"
        },
        774204: (e, t, r) => {
            "use strict";
            e.exports = r.p + "finanzen.c66e96e387a433d78f20.svg"
        },
        20264: (e, t, r) => {
            "use strict";
            e.exports = r.p + "forexcom.eab68e163a5fc7d32708.svg"
        },
        750642: (e, t, r) => {
            "use strict";
            e.exports = r.p + "ftx.4cf6bd2d7b2d1541d15f.svg"
        },
        721457: (e, t, r) => {
            "use strict";
            e.exports = r.p + "fxcm.0a92c9e560f73d3f6ef8.svg"
        },
        239391: (e, t, r) => {
            "use strict";
            e.exports = r.p + "fxopen.72d4e459d47351259fe5.svg"
        },
        728258: (e, t, r) => {
            "use strict";
            e.exports = r.p + "gemini.6f850a81ae09de291620.svg"
        },
        305774: (e, t, r) => {
            "use strict";
            e.exports = r.p + "globalprime.d657e27a01bbdf02d3a8.svg"
        },
        339765: (e, t, r) => {
            "use strict";
            e.exports = r.p + "hitbtc.8bb0bcfe8c5f7b0a696e.svg"
        },
        458959: (e, t, r) => {
            "use strict";
            e.exports = r.p + "ibkr.0c9f5b9e4bd6dce1e0f2.svg"
        },
        314936: (e, t, r) => {
            "use strict";
            e.exports = r.p + "ibroker.a96b47a28269a9e8583b.svg"
        },
        587055: (e, t, r) => {
            "use strict";
            e.exports = r.p + "infoyatirim.6ee18775a65439890ad5.svg"
        },
        410745: (e, t, r) => {
            "use strict";
            e.exports = r.p + "ironbeam.83cef4594b36f32d4869.svg"
        },
        244131: (e, t, r) => {
            "use strict";
            e.exports = r.p + "activtrades.cbf1216345a2dfb25521.svg"
        },
        675654: (e, t, r) => {
            "use strict";
            e.exports = r.p + "ally.bc67bbc7db7067512870.svg"
        },
        517227: (e, t, r) => {
            "use strict";
            e.exports = r.p + "alor.f59b992353059f6b826d.svg"
        },
        276213: (e, t, r) => {
            "use strict";
            e.exports = r.p + "alpaca.58924bd53719b541a324.svg"
        },
        894045: (e, t, r) => {
            "use strict";
            e.exports = r.p + "amp.934deb23707b18d88e98.svg"
        },
        967433: (e, t, r) => {
            "use strict";
            e.exports = r.p + "binance.686ef99542aae3b68c5c.svg"
        },
        117863: (e, t, r) => {
            "use strict";
            e.exports = r.p + "bingbon.03362cabe31d44c8f166.svg"
        },
        434468: (e, t, r) => {
            "use strict";
            e.exports = r.p + "bitget.2fbd6683949441d146d4.svg"
        },
        852745: (e, t, r) => {
            "use strict";
            e.exports = r.p + "bitstamp.766948fcb866ec979928.svg"
        },
        272839: (e, t, r) => {
            "use strict";
            e.exports = r.p + "binance.72f29c6fb604f8968d59.svg"
        },
        202226: (e, t, r) => {
            "use strict";
            e.exports = r.p + "ftx.c4d896d7186aa7993acf.svg"
        },
        56404: (e, t, r) => {
            "use strict";
            e.exports = r.p + "globalprime.d1a1e045db2439c9e5ed.svg"
        },
        745432: (e, t, r) => {
            "use strict";
            e.exports = r.p + "okx.a78d2df6be4e0f961859.svg"
        },
        384114: (e, t, r) => {
            "use strict";
            e.exports = r.p + "paper.0e255bd6a50a44985778.svg"
        },
        265737: (e, t, r) => {
            "use strict";
            e.exports = r.p + "blackbull.6c6aea5884209d56a41b.svg"
        },
        624775: (e, t, r) => {
            "use strict";
            e.exports = r.p + "capital.cdac334887a4bfcefd24.svg"
        },
        742657: (e, t, r) => {
            "use strict";
            e.exports = r.p + "chaka.ffc9cf393e8584543958.svg"
        },
        271879: (e, t, r) => {
            "use strict";
            e.exports = r.p + "cityindex.314f3f6e37ad3fac3fbc.svg"
        },
        429878: (e, t, r) => {
            "use strict";
            e.exports = r.p + "cqg.b046000335f1aff62d63.svg"
        },
        745500: (e, t, r) => {
            "use strict";
            e.exports = r.p + "currencycom.9761491e38e4fbedc3cc.svg"
        },
        364530: (e, t, r) => {
            "use strict";
            e.exports = r.p + "dhan.cc7844e9eb274e109634.svg"
        },
        782608: (e, t, r) => {
            "use strict";
            e.exports = r.p + "dorman.c2fde89e31d58a7882c7.svg"
        },
        928607: (e, t, r) => {
            "use strict";
            e.exports = r.p + "easymarkets.23481a78aa40333cf1b5.svg"
        },
        582273: (e, t, r) => {
            "use strict";
            e.exports = r.p + "eightcap.82526995704e06a146cd.svg"
        },
        880426: (e, t, r) => {
            "use strict";
            e.exports = r.p + "finanzen.9b8944548d8523ed1978.svg"
        },
        733703: (e, t, r) => {
            "use strict";
            e.exports = r.p + "forexcom.340fec405623eb873aa7.svg"
        },
        325034: (e, t, r) => {
            "use strict";
            e.exports = r.p + "ftx.f573965bf716015dd6be.svg"
        },
        627880: (e, t, r) => {
            "use strict";
            e.exports = r.p + "fxcm.180bee01fa83b09ccc23.svg"
        },
        344215: (e, t, r) => {
            "use strict";
            e.exports = r.p + "fxopen.e46b0a5d4d3184608a08.svg"
        },
        520584: (e, t, r) => {
            "use strict";
            e.exports = r.p + "gemini.7426ddf2b466c8d4f580.svg"
        },
        567679: (e, t, r) => {
            "use strict";
            e.exports = r.p + "globalprime.5d16e9773e1f1ed76e31.svg"
        },
        736874: (e, t, r) => {
            "use strict";
            e.exports = r.p + "hitbtc.8257469f99944fcfd755.svg"
        },
        288209: (e, t, r) => {
            "use strict";
            e.exports = r.p + "ibkr.6841121c4a780f84aa77.svg"
        },
        672173: (e, t, r) => {
            "use strict";
            e.exports = r.p + "ibroker.b2204fd15abc4f4d5cf7.svg"
        },
        798246: (e, t, r) => {
            "use strict";
            e.exports = r.p + "infoyatirim.0445427d61abd7894570.svg"
        },
        775827: (e, t, r) => {
            "use strict";
            e.exports = r.p + "ironbeam.bfd42d97e9c2f067fd9e.svg"
        },
        946095: (e, t, r) => {
            "use strict";
            e.exports = r.p + "modalmais.fa7cd8c5a1f647b402f2.svg"
        },
        119473: (e, t, r) => {
            "use strict";
            e.exports = r.p + "oanda.b214121cae1e570e5ee7.svg"
        },
        840278: (e, t, r) => {
            "use strict";
            e.exports = r.p + "okx.5dcd1eb6f7f72842f0fc.svg"
        },
        587776: (e, t, r) => {
            "use strict";
            e.exports = r.p + "optimus.df7e2d7bbc7f00346cbc.svg"
        },
        406354: (e, t, r) => {
            "use strict";
            e.exports = r.p + "orama.f78b03989daee39987eb.svg"
        },
        712842: (e, t, r) => {
            "use strict";
            e.exports = r.p + "osmanli.ef5fd0be0b27e6d558df.svg"
        },
        992206: (e, t, r) => {
            "use strict";
            e.exports = r.p + "paper.516c136ac73297ecbaa5.svg"
        },
        572571: (e, t, r) => {
            "use strict";
            e.exports = r.p + "pepperstone.6524c63a3a2439ffcf49.svg"
        },
        95586: (e, t, r) => {
            "use strict";
            e.exports = r.p + "phillipnova.b67138de186fc0386a56.svg"
        },
        69985: (e, t, r) => {
            "use strict";
            e.exports = r.p + "saxobank.cba3df9eb49b869bbc2c.svg"
        },
        62212: (e, t, r) => {
            "use strict";
            e.exports = r.p + "skilling.e9a4fa4c04635b63ec7b.svg"
        },
        603729: (e, t, r) => {
            "use strict";
            e.exports = r.p + "spreadex.df1760050ebddb33906e.svg"
        },
        173099: (e, t, r) => {
            "use strict";
            e.exports = r.p + "stonex.97b099514b4ba9fc19ce.svg"
        },
        151606: (e, t, r) => {
            "use strict";
            e.exports = r.p + "tickmill.7ca09138fd2e19b00b94.svg"
        },
        218636: (e, t, r) => {
            "use strict";
            e.exports = r.p + "tiger.62fa40891dd25c8729f1.svg"
        },
        21658: (e, t, r) => {
            "use strict";
            e.exports = r.p + "timex.47c00bc2c90eaeb88687.svg"
        },
        304971: (e, t, r) => {
            "use strict";
            e.exports = r.p + "tinkoff.2dc8c061785a57bed3d4.svg"
        },
        244581: (e, t, r) => {
            "use strict";
            e.exports = r.p + "tradestation.993f2cfd5e730677daaa.svg"
        },
        423601: (e, t, r) => {
            "use strict";
            e.exports = r.p + "tradier.13dddf06bd3bae31979a.svg"
        },
        958957: (e, t, r) => {
            "use strict";
            e.exports = r.p + "tradovate.b97dc416fddc2852d50c.svg"
        },
        359784: (e, t, r) => {
            "use strict";
            e.exports = r.p + "velocity.3b5989afe83479e38bda.svg"
        },
        334965: (e, t, r) => {
            "use strict";
            e.exports = r.p + "wh.5387b2037c1e4ede9f5e.svg"
        },
        855033: (e, t, r) => {
            "use strict";
            e.exports = r.p + "mockbroker.ac9106d8baf124dbfca6.svg"
        },
        741879: (e, t, r) => {
            "use strict";
            e.exports = r.p + "modalmais.02ee16e943622741a8e9.svg"
        },
        346262: (e, t, r) => {
            "use strict";
            e.exports = r.p + "oanda.b2bf59ed838e4ec215d4.svg"
        },
        701065: (e, t, r) => {
            "use strict";
            e.exports = r.p + "okx.eca570c366f5fef3f14e.svg"
        },
        948944: (e, t, r) => {
            "use strict";
            e.exports = r.p + "optimus.8123286a301269da9f64.svg"
        },
        370391: (e, t, r) => {
            "use strict";
            e.exports = r.p + "orama.2a1e52b65617c69a0138.svg"
        },
        194453: (e, t, r) => {
            "use strict";
            e.exports = r.p + "osmanli.1c0f692f990452d16d74.svg"
        },
        777109: (e, t, r) => {
            "use strict";
            e.exports = r.p + "paper.194de2ea75422f126bc2.svg"
        },
        35672: (e, t, r) => {
            "use strict";
            e.exports = r.p + "pepperstone.83da0f438a4c99f367ff.svg"
        },
        862929: (e, t, r) => {
            "use strict";
            e.exports = r.p + "phillipnova.e76db57110ee0459caa5.svg"
        },
        295129: (e, t, r) => {
            "use strict";
            e.exports = r.p + "saxobank.2290c2b67aa277099c3c.svg"
        },
        383459: (e, t, r) => {
            "use strict";
            e.exports = r.p + "skilling.378608ab99b214340cc0.svg"
        },
        220680: (e, t, r) => {
            "use strict";
            e.exports = r.p + "spreadex.751b93c8d27d579e35fd.svg"
        },
        597181: (e, t, r) => {
            "use strict";
            e.exports = r.p + "stonex.d1832a7a590836a4d710.svg"
        },
        672663: (e, t, r) => {
            "use strict";
            e.exports = r.p + "tickmill.c94e7d237c95a5429b32.svg"
        },
        854297: (e, t, r) => {
            "use strict";
            e.exports = r.p + "tiger.262e056b9998a4068a6f.svg"
        },
        256890: (e, t, r) => {
            "use strict";
            e.exports = r.p + "timex.5ed35f082627f858e690.svg"
        },
        975016: (e, t, r) => {
            "use strict";
            e.exports = r.p + "tinkoff.3acb8efc20bf5a2ac768.svg"
        },
        816467: (e, t, r) => {
            "use strict";
            e.exports = r.p + "tradestation.eef87983b4c6905195a9.svg"
        },
        246258: (e, t, r) => {
            "use strict";
            e.exports = r.p + "tradier.9202c839698dbde742ca.svg"
        },
        352704: (e, t, r) => {
            "use strict";
            e.exports = r.p + "tradovate.7ea08119f824ed03413e.svg"
        },
        929282: (e, t, r) => {
            "use strict";
            e.exports = r.p + "velocity.e7c9a3bcadd1d5a2f018.svg"
        },
        573145: (e, t, r) => {
            "use strict";
            e.exports = r.p + "wh.91080242ddff337ea3a9.svg"
        },
        605146: (e, t, r) => {
            "use strict";
            e.exports = r.p + "activtrades.46837772022a8e1cc5d3.webp"
        },
        170615: (e, t, r) => {
            "use strict";
            e.exports = r.p + "ally.de2e6b28a1cdba2dd3bb.webp"
        },
        914193: (e, t, r) => {
            "use strict";
            e.exports = r.p + "alor.808861a211bd148b0db0.webp"
        },
        938632: (e, t, r) => {
            "use strict";
            e.exports = r.p + "alpaca.c60ed68fba65bdfd2917.webp"
        },
        831145: (e, t, r) => {
            "use strict";
            e.exports = r.p + "amp.f7877599bbf128ff6ee8.webp"
        },
        306140: (e, t, r) => {
            "use strict";
            e.exports = r.p + "binance.18fa0556a12e4c37a8ec.webp"
        },
        421433: (e, t, r) => {
            "use strict";
            e.exports = r.p + "bingbon.ad2d46dc390a88ee051c.webp"
        },
        126458: (e, t, r) => {
            "use strict";
            e.exports = r.p + "bitget.85b430b0de4914b9db26.webp"
        },
        115805: (e, t, r) => {
            "use strict";
            e.exports = r.p + "bitstamp.ae40df11680b96b71681.webp"
        },
        480809: (e, t, r) => {
            "use strict";
            e.exports = r.p + "binance.40367bb2470049c8169e.webp"
        },
        547390: (e, t, r) => {
            "use strict";
            e.exports = r.p + "ftx.86251c88332eba427066.webp"
        },
        21966: (e, t, r) => {
            "use strict";
            e.exports = r.p + "globalprime.1f572ab8e957cd23243f.webp"
        },
        577523: (e, t, r) => {
            "use strict";
            e.exports = r.p + "okx.0a03d2f3f3adbb0103e4.webp"
        },
        701989: (e, t, r) => {
            "use strict";
            e.exports = r.p + "blackbull.3f63b0c156a8c8d33d01.webp"
        },
        94857: (e, t, r) => {
            "use strict";
            e.exports = r.p + "capital.9a63aafd0319ff7ca0b7.webp"
        },
        928035: (e, t, r) => {
            "use strict";
            e.exports = r.p + "chaka.d04c38eb1b8d950564e8.webp"
        },
        617975: (e, t, r) => {
            "use strict";
            e.exports = r.p + "cityindex.290d126bdf4d28b7a625.webp"
        },
        42038: (e, t, r) => {
            "use strict";
            e.exports = r.p + "cqg.073477445aa71bb545c9.webp"
        },
        927038: (e, t, r) => {
            "use strict";
            e.exports = r.p + "currencycom.361e8ac6676a8a14affc.webp"
        },
        819728: (e, t, r) => {
            "use strict";
            e.exports = r.p + "dhan.53628678c069c002f97e.webp"
        },
        746117: (e, t, r) => {
            "use strict";
            e.exports = r.p + "dorman.df4a36736b1f4fcf7f19.webp"
        },
        407725: (e, t, r) => {
            "use strict";
            e.exports = r.p + "easymarkets.6e13a325b54d228791bf.webp"
        },
        494436: (e, t, r) => {
            "use strict";
            e.exports = r.p + "eightcap.020c744470342ae01024.webp"
        },
        665167: (e, t, r) => {
            "use strict";
            e.exports = r.p + "finanzen.4dfd77e1ce8c51ed98d2.webp"
        },
        289841: (e, t, r) => {
            "use strict";
            e.exports = r.p + "forexcom.04b95708c6235e9c3e94.webp"
        },
        218081: (e, t, r) => {
            "use strict";
            e.exports = r.p + "ftx.f17042c6fd305c8d0d2e.webp"
        },
        188815: (e, t, r) => {
            "use strict";
            e.exports = r.p + "fxcm.898bb54547b152e39893.webp"
        },
        581971: (e, t, r) => {
            "use strict";
            e.exports = r.p + "fxopen.5cefaac3ec331793b004.webp"
        },
        622142: (e, t, r) => {
            "use strict";
            e.exports = r.p + "gemini.a59dbf4cbfd1219714d0.webp"
        },
        28741: (e, t, r) => {
            "use strict";
            e.exports = r.p + "globalprime.ff367749e87e85bed6cf.webp"
        },
        665660: (e, t, r) => {
            "use strict";
            e.exports = r.p + "hitbtc.ff791bfaf4bce67beb38.webp"
        },
        242155: (e, t, r) => {
            "use strict";
            e.exports = r.p + "ibkr.9ff6c53e093d7f99d392.webp"
        },
        506614: (e, t, r) => {
            "use strict";
            e.exports = r.p + "ibroker.75e32d55b256669d9e51.webp"
        },
        447814: (e, t, r) => {
            "use strict";
            e.exports = r.p + "infoyatirim.ead887838540ce61b8b3.webp"
        },
        386672: (e, t, r) => {
            "use strict";
            e.exports = r.p + "ironbeam.93f908b9ca7b2e077ce0.webp"
        },
        363749: (e, t, r) => {
            "use strict";
            e.exports = r.p + "modalmais.7522eeac3b59f1030156.webp"
        },
        26796: (e, t, r) => {
            "use strict";
            e.exports = r.p + "oanda.1c5b84c98b3fa5e63984.webp"
        },
        230934: (e, t, r) => {
            "use strict";
            e.exports = r.p + "okx.5bfc6e193fcc89284143.webp"
        },
        681900: (e, t, r) => {
            "use strict";
            e.exports = r.p + "optimus.bce303ed6932c65c967c.webp"
        },
        572286: (e, t, r) => {
            "use strict";
            e.exports = r.p + "orama.e6dcfb1e407559188c8b.webp"
        },
        95215: (e, t, r) => {
            "use strict";
            e.exports = r.p + "osmanli.3fa49a2cfb08fe87a822.webp"
        },
        223862: (e, t, r) => {
            "use strict";
            e.exports = r.p + "paper.b49db1bcc1542b628082.webp"
        },
        977742: (e, t, r) => {
            "use strict";
            e.exports = r.p + "pepperstone.b1d5eff44f6caf864aff.webp"
        },
        984224: (e, t, r) => {
            "use strict";
            e.exports = r.p + "phillipnova.a6cc8469f63710e160a8.webp"
        },
        514180: (e, t, r) => {
            "use strict";
            e.exports = r.p + "saxobank.82373a016cb964ef6a0b.webp"
        },
        284862: (e, t, r) => {
            "use strict";
            e.exports = r.p + "skilling.dce1eb4835d3f2870594.webp"
        },
        792043: (e, t, r) => {
            "use strict";
            e.exports = r.p + "spreadex.f1754b263f89710abe32.webp"
        },
        519512: (e, t, r) => {
            "use strict";
            e.exports = r.p + "stonex.390a2e2bf53d526eeaa4.webp"
        },
        128310: (e, t, r) => {
            "use strict";
            e.exports = r.p + "tickmill.4d240e7be6e014602ca3.webp"
        },
        219055: (e, t, r) => {
            "use strict";
            e.exports = r.p + "tiger.e2e102f15bebd025d493.webp"
        },
        291922: (e, t, r) => {
            "use strict";
            e.exports = r.p + "timex.59765928560205228913.webp"
        },
        628762: (e, t, r) => {
            "use strict";
            e.exports = r.p + "tinkoff.0792296025db3958a951.webp"
        },
        148068: (e, t, r) => {
            "use strict";
            e.exports = r.p + "tradestation.c45a5914e75e19523e75.webp"
        },
        456843: (e, t, r) => {
            "use strict";
            e.exports = r.p + "tradier.6f81d2697fade0d833a6.webp"
        },
        694852: (e, t, r) => {
            "use strict";
            e.exports = r.p + "tradovate.7e31971704b66fe83c1e.webp"
        },
        313642: (e, t, r) => {
            "use strict";
            e.exports = r.p + "velocity.67a037c1be4824cfe895.webp"
        },
        257905: (e, t, r) => {
            "use strict";
            e.exports = r.p + "wh.ad65c3ac078c5ab1da56.webp"
        }
    }
]);
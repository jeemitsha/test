(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [76995, 9726], {
        286625: e => {
            e.exports = {
                "tv-spinner__container-rotate": "tv-spinner__container-rotate-OAzoNsnS"
            }
        },
        860309: e => {
            e.exports = {
                container: "container-ArDpmAvc",
                inner: "inner-ArDpmAvc",
                "border-left": "border-left-ArDpmAvc",
                "border-right": "border-right-ArDpmAvc",
                "border-top": "border-top-ArDpmAvc",
                "border-bottom": "border-bottom-ArDpmAvc",
                "top-right-radius": "top-right-radius-ArDpmAvc",
                "top-left-radius": "top-left-radius-ArDpmAvc",
                "bottom-right-radius": "bottom-right-radius-ArDpmAvc",
                "bottom-left-radius": "bottom-left-radius-ArDpmAvc"
            }
        },
        173777: (e, t, i) => {
            "use strict";
            i.d(t, {
                SEPARATOR_PREFIX: () => n,
                isSeparatorItem: () => r
            });
            const n = "###";

            function r(e) {
                return e.startsWith(n)
            }
        },
        223124: (e, t, i) => {
            "use strict";
            i.d(t, {
                makeCancelable: () => r,
                isCancelled: () => o
            });
            class n {}

            function r(e) {
                let t = !1;
                return {
                    promise: new Promise(((i, r) => {
                        e.then((e => t ? r(new n) : i(e))), e.catch((e => r(t ? new n : e)))
                    })),
                    cancel() {
                        t = !0
                    }
                }
            }

            function o(e) {
                return e instanceof n
            }
        },
        164387: (e, t, i) => {
            "use strict";
            i.d(t, {
                setupChartEventHint: () => u
            });
            var n = i(650151),
                r = i(777754),
                o = i(62802),
                s = i(480071),
                a = i(414805),
                l = i(638456),
                c = i(470316),
                d = i(495046);

            function u(e, t = !1) {
                if (!d.enabled("popup_hints")) return;
                const u = e.getContainer();
                let h = null,
                    _ = null;

                function g(e, t) {
                    if (h) h.show(e, m.bind(null, t));
                    else {
                        const n = s.tool.value();
                        Promise.all([i.e(81910), i.e(48348), i.e(75514), i.e(26166)]).then(i.bind(i, 410837)).then((i => {
                            h = new i.ChartEventHintRenderer(u), n === s.tool.value() && h.show(e, m.bind(null, t))
                        }))
                    }
                }

                function p(e) {
                    return !Boolean(o.getBool(e))
                }

                function m(e) {
                    o.setValue(e, !0, {
                        forceFlush: !0
                    }), (0, n.ensureNotNull)(h).destroy(), null !== _ && _(), h = null
                }
                s.tool.subscribe((function() {
                    if (!p("hint.touchPainting")) return;
                    const e = s.tool.value(),
                        t = (0, a.isLineToolDrawWithoutPoints)(e),
                        n = l.CheckMobile.any();
                    !(0, a.isStudyLineToolName)(e) || "LineToolRegressionTrend" === e || t || n ? (0, a.isLineToolName)(e) && !(0, a.isLineDrawnWithPressedButton)(e) && !t && n ? g(r.t(null, void 0, i(967861)), "hint.touchPainting") : h && h.hide() : g(r.t(null, void 0, i(632234)), "hint.touchPainting")
                })), s.createdLineTool.subscribe(null, (function() {
                    const e = s.tool.value();
                    "LineToolPath" === e && p("hint.finishBuildPathByDblClick") ? g(r.t(null, void 0, i(605828)), "hint.finishBuildPathByDblClick") : "LineToolPolyline" === e && p("hint.finishBuildPolylineByDblClick") && g(r.t(null, void 0, i(763898)), "hint.finishBuildPolylineByDblClick")
                })), s.finishedLineTool.subscribe(null, (function() {
                    if (h) {
                        const e = s.tool.value();
                        "LineToolPath" === e ? m("hint.finishBuildPathByDblClick") : "LineToolPolyline" === e && m("hint.finishBuildPolylineByDblClick")
                    }
                })), e.layoutSizesChanged().subscribe((function() {
                    if (!p("hint.startResizingChartInLayout")) return;
                    g(r.t(null, void 0, i(135273)), "hint.startResizingChartInLayout")
                })), t || l.CheckMobile.any() || !p("hint.startFocusedZoom") || (_ = function(e, t) {
                    let i = !1;
                    const n = r => {
                        r ? (i && t(r), e.onZoom().unsubscribe(null, n)) : i || (t(r), i = !0)
                    };
                    return e.onZoom().subscribe(null, n), () => e.onZoom().unsubscribe(null, n)
                }(e, (function(e) {
                    if (!p("hint.startFocusedZoom")) return;
                    if (e) h && (_ = null, m("hint.startFocusedZoom"));
                    else {
                        const e = c.isMacKeyboard ? "⌘" : "Ctrl";
                        g(r.t(null, void 0, i(35963)).format({
                            key: e
                        }), "hint.startFocusedZoom")
                    }
                })))
            }
        },
        229534: (e, t, i) => {
            "use strict";
            async function n(e) {
                return (await Promise.all([i.e(36037), i.e(43082), i.e(36956), i.e(4100), i.e(50251), i.e(85783), i.e(1670), i.e(25977), i.e(4907), i.e(39694), i.e(37757)]).then(i.bind(i, 173403))).createDialog(e)
            }

            function r(e) {
                n(e).then((e => e.open()))
            }
            i.d(t, {
                createErrorDialog: () => n,
                showErrorDialog: () => r
            })
        },
        749028: (e, t, i) => {
            "use strict";
            i.d(t, {
                saveExchangeAgreement: () => o,
                isSignedExchangeAgreement: () => s
            });
            var n = i(890740),
                r = i(897649);

            function o(e) {
                return (0, n.fetch)("/exchange-agreement/", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(e)
                }).then((e => e.ok ? e.json() : e.json().then((t => {
                    throw new r.AggregateError((0, r.accumulateErrors)(t.errors, e.status))
                }))))
            }
            async function s(e) {
                const t = await (0, n.fetch)(`/is-signed-exchange-agreement/?exchange=${e.exchange}`);
                if (!t.ok) {
                    const e = await t.json();
                    throw Error(e.detail)
                }
                return t.json()
            }
        },
        503246: (e, t, i) => {
            "use strict";
            i.d(t, {
                pathsByCategoryId: () => n,
                categoryIdByPaths: () => r,
                isStatementsCategoryPath: () => o
            });
            const n = {
                    "income statements": "/financials-income-statement/",
                    "balance sheet": "/financials-balance-sheet/",
                    "cash flow": "/financials-cash-flow/",
                    statistics: "/financials-statistics-and-ratios/",
                    dividends: "/financials-dividends/",
                    earnings: "/financials-earnings/"
                },
                r = {
                    "/financials-income-statement/": "income statements",
                    "/financials-balance-sheet/": "balance sheet",
                    "/financials-cash-flow/": "cash flow"
                };

            function o(e) {
                return "/financials-income-statement/" === e || "/financials-balance-sheet/" === e || "/financials-cash-flow/" === e
            }
        },
        760641: (e, t, i) => {
            "use strict";
            i.d(t, {
                ChartPage: () => c
            });
            var n = i(988411),
                r = i.n(n),
                o = i(581996),
                s = i(484443),
                a = i(495046);
            const l = a.enabled("no_min_chart_width");
            class c {
                constructor(e) {
                    this._processVisibility = e => {
                        const t = e.container.value();
                        return this.affectsLayout(e.name) ? (t && t.classList.toggle("js-hidden", !1), !0) : (t && t.classList.toggle("js-hidden", !0), !1)
                    }, this._setWidth = (e, t, i) => {
                        let n = i;
                        this._fullscreenArea !== e.name && (e.availWidth.setValue(i), e.canNegotiate.width && (n = (0, s.determineSize)(i, e.negotiations.width))), t || (n = 0);
                        const r = e.container.value();
                        return r && t && (r.style.width = n + "px"), e.width.setValue(n), n
                    }, this._setHeight = (e, t, i) => {
                        let n = i;
                        this._fullscreenArea !== e.name && (e.availHeight.setValue(i), e.canNegotiate.height && (n = (0, s.determineSize)(i, e.negotiations.height))), t || (n = 0);
                        const r = e.container.value();
                        return r && t && (r.style.height = n + "px"), e.height.setValue(n), n
                    };
                    const t = e.container.value();
                    if (!t) throw new Error("bridge.container.value() must be an element");
                    this._container = t, this._availableAreas = ["left", "tradingpanel", "right", "top", "bottom", "center", "topleft", "extratop"], this._areas = {}, this._bridge = e, this._width = e.width, this._height = e.height, this._width.subscribe((() => this.recalculate())), this._height.subscribe((() => this.recalculate())), this._bridge.visible.subscribe((() => this._updateVisibility())), this._bridge.fullscreen.subscribe((() => this._onParentFullscreenChange())), this.recalculate()
                }
                allocate(e) {
                    const t = e && e.areaName;
                    if (-1 === this._availableAreas.indexOf(t)) throw new Error("unknown options.areaName");
                    this.free(t);
                    const i = this._createDOM(t),
                        n = {
                            name: t,
                            canNegotiate: {
                                width: "left" === t || "right" === t || "tradingpanel" === t || "topleft" === t,
                                height: "top" === t || "bottom" === t || "topleft" === t || "extratop" === t
                            },
                            negotiations: {
                                width: [],
                                height: []
                            },
                            remove: () => {
                                for (const e in this._areas) this._areas[e] === n && this.free(e)
                            },
                            negotiateWidth: e => {
                                if (!n.canNegotiate.width) return;
                                const t = (0, s.processNegotiation)(e);
                                (0, s.negotiationsAreEqual)(n.negotiations.width, t) || (n.negotiations.width = t, this.recalculate())
                            },
                            negotiateHeight: e => {
                                if (!n.canNegotiate.height) return;
                                const t = (0, s.processNegotiation)(e);
                                (0, s.negotiationsAreEqual)(n.negotiations.height, t) || (n.negotiations.height = t, this.recalculate())
                            },
                            requestFullscreen: () => {
                                this._fullscreenArea || ("right" !== t && "center" !== t || (this._fullscreenArea = t), "center" === t && this._bridge.requestFullscreen(), this._updateFullscreen())
                            },
                            exitFullscreen: () => {
                                t === this._fullscreenArea && (this._fullscreenArea = void 0, "center" === t && this._bridge.exitFullscreen(), this._updateFullscreen())
                            },
                            width: new(r()),
                            height: new(r()),
                            availWidth: new(r()),
                            availHeight: new(r()),
                            alive: new(r())(!0),
                            container: new(r())(i),
                            visible: new(r())(!0),
                            fullscreen: new(r())(!1),
                            fullscreenable: new(r())("right" === t || "center" === t),
                            rdState: new o.ResizerDetacherState
                        };
                    return n.rdState.pushOwner(n), this._areas[t] = n, n.rdState.owner.subscribe((e => {
                        const i = n.container.value();
                        if (e !== n) i && (i.innerHTML = "", i.parentElement && i.parentElement.removeChild(i));
                        else {
                            let e = null;
                            for (let i = this._availableAreas.indexOf(t); i--;) {
                                const t = this._availableAreas[i];
                                if (this.affectsLayout(t)) {
                                    e = this._areas[t].container.value();
                                    break
                                }
                            }
                            i && (e && i.parentElement ? i.insertAdjacentElement("afterend", e) : this._container.appendChild(i))
                        }
                        this.recalculate()
                    }), {
                        callWithLast: !0
                    }), n.rdState.bridge()
                }
                free(e) {
                    const t = this._areas[e];
                    if (!t) return;
                    this._areas[e] = void 0;
                    const i = t.container.value();
                    i && i.parentElement && i.parentElement.removeChild(i), t.alive.setValue(!1)
                }
                recalculate() {
                    const e = {};
                    this._recalcSingleRunToken = e;
                    const t = this._areas.topleft,
                        i = this._areas.left,
                        n = this._areas.tradingpanel,
                        r = this._areas.right,
                        o = this._areas.top,
                        s = this._areas.bottom,
                        a = this._areas.center,
                        c = this._areas.extratop,
                        d = this._width.value(),
                        u = this._height.value();
                    let h = 0,
                        _ = 0,
                        g = 0,
                        p = 0,
                        m = 0,
                        f = 0,
                        v = 0,
                        b = 0;
                    if (e === this._recalcSingleRunToken && c) {
                        const e = this._processVisibility(c);
                        b = this._setHeight(c, e, u), this._setWidth(c, e, d)
                    }
                    if (e === this._recalcSingleRunToken && t) {
                        const e = this._processVisibility(t);
                        v = this._setHeight(t, e, u), f = this._setWidth(t, e, d);
                        const i = t.container.value();
                        e && i && (i.style.top = b + "px")
                    }
                    let y = 0;
                    if (e === this._recalcSingleRunToken && o) {
                        const e = this._processVisibility(o),
                            t = o.container.value();
                        e && t && (t.style.left = f + "px", t.style.top = b + "px");
                        const i = d - f;
                        this._setWidth(o, e, i), h = this._setHeight(o, e, u), h && (y = 1)
                    }
                    if (e === this._recalcSingleRunToken && i) {
                        const e = this._processVisibility(i),
                            t = Math.max(v, h);
                        g = this._setWidth(i, e, d), g && (g += 4), g && 1 === y && (y = 4);
                        const n = i.container.value();
                        e && n && (n.style.top = t + b + y + "px"), this._setHeight(i, e, u - t - b)
                    }
                    if (e === this._recalcSingleRunToken && n) {
                        const e = this._processVisibility(n);
                        let t = d - g;
                        l || (t -= 300), m = this._setWidth(n, e, t), m && 1 === y && (y = 4), this._setHeight(n, e, u - b - h - y)
                    }
                    if (e === this._recalcSingleRunToken && r) {
                        const e = this._processVisibility(r);
                        let t = d - g - m;
                        l || (t -= 300), p = this._setWidth(r, e, t), p && 1 === y && (y = 4), this._setHeight(r, e, u - b - h - y);
                        const i = r.container.value();
                        e && i && (i.style.top = h + b + y + "px", i.classList.toggle("no-border-top-left-radius", Boolean(m)))
                    }
                    const w = m + p;
                    let S = 0;
                    const C = d - g - m - p - (w ? 4 : 0);
                    if (e === this._recalcSingleRunToken && s) {
                        const e = this._processVisibility(s),
                            t = s.container.value();
                        e && t && (t.style.left = g + "px", t.classList.toggle("no-border-top-left-radius", !g), t.classList.toggle("no-border-top-right-radius", !w)), this._setWidth(s, e, C);
                        const i = u - b;
                        S = Math.min(300, i - 0), _ = this._setHeight(s, e, i) + 4
                    }
                    const P = Boolean(h && (g || w));
                    if (this._container.classList.toggle("layout-with-border-radius", P), e === this._recalcSingleRunToken && a) {
                        const e = this._processVisibility(a),
                            t = a.container.value();
                        e && t && (t.style.left = g + "px", t.style.top = h + b + y + "px", t.classList.toggle("no-border-bottom-left-radius", !_ || !g), t.classList.toggle("no-border-bottom-right-radius", !w || !_), t.classList.toggle("no-border-top-left-radius", Boolean(!g && w)), t.classList.toggle("no-border-top-right-radius", Boolean(g && !w))), this._setWidth(a, e, C);
                        const i = u - h - _ - b - y;
                        this._setHeight(a, e, Math.max(i, S))
                    }
                    if (e === this._recalcSingleRunToken && n && this.affectsLayout("tradingpanel")) {
                        const e = n.container.value();
                        e && (e.style.right = p + "px", e.style.top = b + h + y + "px", e.style.borderTopLeftRadius = P ? "4px" : "0px")
                    }
                    e === this._recalcSingleRunToken && this._updateVisibility()
                }
                affectsLayout(e) {
                    const t = this._areas[e];
                    if (!t) return !1;
                    if (t.rdState.owner.value() !== t) return !1;
                    if (this._fullscreenArea && this._fullscreenArea !== e) return d(e);
                    if (this._width.value() <= 567 || this._height.value() <= 445) {
                        if (!["center", "top", "left", "topleft", "extratop"].includes(e)) return !1
                    }
                    return !0
                }
                _updateVisibility() {
                    const e = this._bridge.visible.value();
                    for (let t = 0; t < this._availableAreas.length; t++) {
                        const i = this._availableAreas[t],
                            n = this._areas[i];
                        n && (e && this.affectsLayout(i) ? n.visible.setValue(!0) : n.visible.setValue(!1))
                    }
                }
                _onParentFullscreenChange() {
                    this._bridge.fullscreen.value() || (this._fullscreenArea = void 0, this._updateFullscreen())
                }
                _updateFullscreen() {
                    const e = void 0 !== this._fullscreenArea;
                    for (let t = 0; t < this._availableAreas.length; t++) {
                        const i = this._availableAreas[t],
                            n = this._areas[i];
                        if (!n) continue;
                        if (i === this._fullscreenArea) {
                            n.fullscreen.setValue(!0);
                            continue
                        }
                        n.fullscreen.setValue(!1);
                        const r = n.container.value();
                        r && r.classList.toggle("js-hidden", e && !d(i))
                    }
                    this._updateVisibility(), this.recalculate()
                }
                _createDOM(e) {
                    const t = document.createElement("div");
                    return t.classList.add("layout__area--" + e), t.style.position = "absolute", "tradingpanel" === e && (t.style.overflow = "hidden", t.style.borderTopLeftRadius = "4px"), "bottom" === e ? t.style.bottom = "0" : t.style.top = "0", "right" === e || "tradingpanel" === e ? t.style.right = "0" : t.style.left = "0", t
                }
            }

            function d(e) {
                const t = a.enabled("side_toolbar_in_fullscreen_mode"),
                    i = a.enabled("header_in_fullscreen_mode");
                return "center" === e || "left" === e && t || "top" === e && i
            }
        },
        484443: (e, t, i) => {
            "use strict";

            function n(e, t) {
                let i = 0;
                for (const {
                        min: n,
                        max: r
                    } of t) {
                    if (e < n || r < n) continue;
                    const t = Math.min(e, r);
                    if (i = Math.max(i, t), e === i) break
                }
                return i
            }

            function r(e) {
                const t = [];
                if (void 0 === e) return [];
                Array.isArray(e) || (e = [e]);
                for (const i of e) {
                    let e, n;
                    isFinite(i) ? e = n = Number(i) : (e = +i.min, n = +i.max), (e < 0 || isNaN(e)) && (e = 0), isNaN(n) && (n = 1 / 0), e <= n && n > 0 && t.push({
                        min: e,
                        max: n
                    })
                }
                return t.sort(((e, t) => e.min - t.min || e.max - t.max)), t
            }

            function o(e, t) {
                if (e.length !== t.length) return !1;
                for (let i = e.length; i--;) {
                    if (e[i].min !== t[i].min) return !1;
                    if (e[i].max !== t[i].max) return !1
                }
                return !0
            }
            i.d(t, {
                determineSize: () => n,
                processNegotiation: () => r,
                negotiationsAreEqual: () => o
            })
        },
        607436: (e, t, i) => {
            "use strict";
            i.d(t, {
                DEFAULT_SIZE: () => n,
                spinnerSizeMap: () => r
            });
            const n = "large",
                r = {
                    mini: "xsmall",
                    xsmall: "xsmall",
                    small: "small",
                    medium: "medium",
                    large: "large"
                }
        },
        941285: (e, t, i) => {
            "use strict";
            i.d(t, {
                Spinner: () => s
            });
            i(286625);
            var n = i(878134),
                r = i(607436);
            const o = (0, n.parseHtmlElement)(function(e = "") {
                return `<div class="tv-spinner ${e}" role="progressbar"></div>`
            }());
            class s {
                constructor(e) {
                    this._shown = !1, this._el = o.cloneNode(!0), this.setSize(r.spinnerSizeMap[e || r.DEFAULT_SIZE])
                }
                spin(e) {
                    return this._el.classList.add("tv-spinner--shown"), void 0 === this._container && (this._container = e, void 0 !== e && e.appendChild(this._el)), this._shown = !0, this
                }
                stop(e) {
                    return e && void 0 !== this._container && this._container.removeChild(this._el), this._el.classList.remove("tv-spinner--shown"), this._shown = !1, this
                }
                setStyle(e) {
                    return Object.keys(e).forEach((t => {
                        const i = e[t];
                        void 0 !== i && this._el.style.setProperty(t, i)
                    })), this
                }
                style() {
                    return this._el.style
                }
                setSize(e) {
                    const t = void 0 !== e ? `tv-spinner--size_${e}` : "";
                    return this._el.className = `tv-spinner ${t} ${this._shown?"tv-spinner--shown":""}`, this
                }
                getEl() {
                    return this._el
                }
                destroy() {
                    this.stop(), delete this._el, delete this._container
                }
            }
        },
        372006: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                SupportTicketData: () => y
            });
            var n = i(890740),
                r = i(495046),
                o = i(849289),
                s = i.n(o),
                a = i(809062),
                l = i(893271),
                c = i(314802),
                d = i(638456),
                u = i(582950),
                h = i(272001),
                _ = (i(659863), i(779665)),
                g = i(62802),
                p = i.n(g);

            function m(e) {
                const t = {
                    name: e.name,
                    time: e.startTime
                };
                return "measure" === e.entryType && (t.duration = e.duration), t
            }

            function f() {
                const e = navigator.connection;
                return {
                    effectiveType: e && e.effectiveType || "unknown",
                    rtt: e && e.rtt || -1
                }
            }
            var v = i(960254);
            const b = (0, h.getLogger)("Support.TicketData");
            class y {
                constructor(e = {}) {
                    this._options = e, this.reset()
                }
                destroy() {
                    delete this._data, delete this._browserInfo, delete this._dialogElement
                }
                reset() {
                    this._data = {
                        event: "support_ticket"
                    }, this._browserInfo = new(s())
                }
                setOptions(e) {
                    this._options = { ...this._options,
                        ...e
                    }
                }
                getData() {
                    return this._data
                }
                addData(e) {
                    Object.assign(this._data, e)
                }
                setDialogElement(e) {
                    this._dialogElement = e
                }
                async getFinalData() {
                    void 0 !== this._beforeCollectingFinalData && await this._beforeCollectingFinalData();
                    const e = this._options.disableAutoCollection ? this.getData() : await this._collectData();
                    return (0,
                        u.isTicketDataComplete)(e) ? e : (b.logError("Not enough data collected. `event` and one of (`userId`, `email`) fields required."), null)
                }
                onBeforeCollectingFinalData(e) {
                    this._beforeCollectingFinalData = e
                }
                tradingDataPromise() {
                    return this._tradingDataPromise
                }
                onTradingData(e) {
                    this._tradingDataPromise = e
                }
                static setChartWidgetCollection(e) {
                    y._chartWidgetCollection = e
                }
                static getChartWidgetCollection() {
                    return y._chartWidgetCollection
                }
                static setScreener(e) {
                    y._screener = e
                }
                static getScreener() {
                    return y._screener
                }
                _collectData() {
                    const e = Promise.all([this._getChartSnapshot(), this._getTradingLogs(), this._getScreenerParams(), this._getPageSnapshot(), this._getLogHistory(), this._getDesktopReports(), this._getAlertHealthchecks()]).then((e => {
                        this.addData(this._filterEmptyFields({
                            snapshotURL: e[0],
                            trading: e[1],
                            screener: e[2],
                            pageSnapshotURL: e[3],
                            log: e[4],
                            desktopReports: e[5],
                            alertHealthchecks: e[6]
                        }))
                    })).then((() => this._data));
                    return this.addData(this._filterEmptyFields({
                        browserInfo: this._getBrowserInfo(),
                        ping: this._getPingInfo(),
                        user: this._getUser(),
                        userId: this._getUserId(),
                        pro_plan: this._getProPlan(),
                        websocketAddress: this._getWebSocketAddress(),
                        sessionid: this._getSessionId(),
                        ref: this._getReferrer(),
                        js_errors: this._getJsErrors(),
                        product: this._getProductId(),
                        symbolSessionId: this._getSymbolSessionId(),
                        dividendsAdjustment: this._getDividendsAdjustment(),
                        backAdjustment: this._getBackAdjustment(),
                        settlementAsClose: this._getSettlementAsClose(),
                        chartSessionDisconnects: this._getChartSessionDisconnects(),
                        marketStatuses: this._getChartMarketStatuses(),
                        seriesStatuses: this._getChartSeriesStatuses(),
                        is_pro: this._getUserIsPro(),
                        subscription_state: this._getSubscriptionState(),
                        proOffers: this._getProOffers(),
                        timezone: this._getTimezone(),
                        performanceMetrics: this._getPerformanceMetrics(),
                        serverInfo: this._getServerInfo(),
                        serverTimeOffset: this._getServerTimeOffset(),
                        settings: this._getUserSettings(),
                        domNodesCount: this._getDomNodesCount(),
                        buildTime: this._getBuildTime(),
                        plugins: this._getPlugins(),
                        locale: this._getLocale()
                    })), e
                }
                _getBrowserInfo() {
                    return this._browserInfo.state()
                }
                _getChartSnapshot() {
                    return new Promise((async e => {
                        const t = y.getChartWidgetCollection();
                        if (void 0 === t) return b.logWarn("Abort generating snapshot. No chartWidgetCollection found."), void e(null);
                        const i = r.enabled("snapshot_trading_drawings");
                        try {
                            r.enable("snapshot_trading_drawings"), await (0, a.takeChartSnapshot)(t, (t => {
                                const i = r.enabled("charting_library_base") ? `https://www.tradingview.com/x/${t}` : `${location.protocol}//${location.host}/x/${t}`;
                                e(i)
                            }), (() => {
                                b.logError("Failed to take chart snapshot."), e(null)
                            }), {
                                showHeaderMainSymbol: !0
                            })
                        } catch (t) {
                            return b.logError(`Error while taking chart snapshot: ${t.message}`), void e(null)
                        } finally {
                            i ? r.enable("snapshot_trading_drawings") : r.disable("snapshot_trading_drawings")
                        }
                    }))
                }
                _getTradingLogs() {
                    return new Promise((e => {
                        if (!this._data.tradingLogsAgree) return b.logWarn("Abort collecting trading logs. User did not agree to send trading logs."), void e(null);
                        const t = (0, l.tradingService)();
                        if (!t) return b.logWarn("Abort collecting trading logs. No trading object found."),
                            void e(null);
                        const i = t.activeBroker();
                        if (null === i || !i.bugReportInfo || 1 !== i.connectionStatus()) return b.logWarn("Abort collecting trading logs because of connection or abscence of info collection method."), void e(null);
                        i.bugReportInfo().then((t => e(JSON.stringify(t)))).catch((t => (b.logError(`Error while collecting activeBroker info: ${t.message}`), e(null))))
                    }))
                }
                _getScreenerParams() {
                    return new Promise((e => {
                        const t = y.getScreener();
                        if (void 0 === t) return b.logWarn("Abort collecting screener params. No screener found."), void e(null);
                        e(t.getCurrentState())
                    }))
                }
                _performHealthCheck(e, t, i = "GET") {
                    return new Promise((async r => {
                        const o = Date.now();
                        try {
                            const s = await (0, n.fetch)(t, {
                                method: i
                            });
                            r({
                                title: e,
                                status: s.status,
                                responseTime: Date.now() - o,
                                responseSize: s.headers.get("content-length") || "unknown"
                            })
                        } catch (t) {
                            r({
                                title: e,
                                status: 0,
                                responseTime: Date.now() - o
                            })
                        }
                    }))
                }
                _getAlertHealthchecks() {
                    return this._data.issueType !== u.TVOnlyActiveIssueType.Alert ? Promise.resolve(null) : Promise.all([this._performHealthCheck("alert_facade", "https://pricealerts.tradingview.com/is_alive", "POST"), this._performHealthCheck("old_alerts", "https://alerts.tradingview.com/alerts/health/"), this._performHealthCheck("pine_facade", "https://pine-facade.tradingview.com/pine-facade/is_auth_to_get/STD%3BSMA/last")])
                }
                _getProductId() {
                    return (0, c.isOnMobileAppPage)("old") ? "ios" : (0, c.isOnMobileAppPage)("new") ? "android" : (0, d.isDesktopApp)() ? "desktop" : r.enabled("charting_library_base") ? "charting_library" : "tv"
                }
                _getSymbolSessionId() {
                    const e = y.getChartWidgetCollection();
                    if (!e) return b.logWarn("Abort getting sessionId property value. No chartWidgetCollection found."), null;
                    let t;
                    try {
                        t = e.activeChartWidget.value().model().mainSeries().properties().childs().sessionId.value()
                    } catch (e) {
                        return b.logError(`Error while getting sessionId property value: ${e.message}`), null
                    }
                    return "string" == typeof t ? t : null
                }
                _getDividendsAdjustment() {
                    const e = y.getChartWidgetCollection();
                    if (!e) return b.logWarn("Abort getting dividendsAdjustment property value. No chartWidgetCollection found."), null;
                    let t;
                    try {
                        t = e.activeChartWidget.value().model().mainSeries().properties().childs().dividendsAdjustment.value()
                    } catch (e) {
                        return b.logError(`Error while getting dividendsAdjustment property value: ${e.message}`), null
                    }
                    return "boolean" == typeof t ? t : null
                }
                _getBackAdjustment() {
                    const e = y.getChartWidgetCollection();
                    if (!e) return b.logWarn("Abort getting backAdjustment property value. No chartWidgetCollection found."), null;
                    let t;
                    try {
                        t = e.activeChartWidget.value().model().mainSeries().properties().childs().backAdjustment.value()
                    } catch (e) {
                        return b.logError(`Error while getting backAdjustment property value: ${null==e?void 0:e.message}`), null
                    }
                    return "boolean" == typeof t ? t : null
                }
                _getSettlementAsClose() {
                    const e = y.getChartWidgetCollection();
                    if (!e) return b.logWarn("Abort getting settlementAsClose property value. No chartWidgetCollection found."), null;
                    let t;
                    try {
                        t = e.activeChartWidget.value().model().mainSeries().properties().childs().settlementAsClose.value()
                    } catch (e) {
                        return b.logError(`Error while getting settlementAsClose property value: ${null==e?void 0:e.message}`), null
                    }
                    return "boolean" == typeof t ? t : null
                }
                _getChartSessionDisconnects() {
                    return window.ChartApiInstance ? window.ChartApiInstance.disconnectCount() : (b.logWarn("Abort getting chart session disconnects count. No ChartApiInstance found."), null)
                }
                _getChartMarketStatuses() {
                    const e = y.getChartWidgetCollection();
                    return e ? e.chartMarketStatuses() : (b.logWarn("Abort getting market statuses. No chartWidgetCollection found."), [])
                }
                _getChartSeriesStatuses() {
                    const e = y.getChartWidgetCollection();
                    return e ? e.chartSeriesStatuses() : (b.logWarn("Abort getting series statuses. No chartWidgetCollection found."), [])
                }
                _getUserIsPro() {
                    return Boolean(window.user && window.user.is_pro)
                }
                _getSubscriptionState() {
                    return window.pro && window.pro.isPaidPro() ? u.SubscriptionState.IsPro : window.user.had_pro ? u.SubscriptionState.ExPro : void 0
                }
                _getProOffers() {
                    return window.pro && window.pro.offers && window.pro.offers() || []
                }
                _getTimezone() {
                    const e = y.getChartWidgetCollection();
                    if (!e) return b.logWarn("Abort getting timezone. No chartWidgetCollection found."), null;
                    let t = null;
                    try {
                        t = e.activeChartWidget.value().model().model().properties().childs().timezone.value()
                    } catch (e) {
                        b.logError(`Error while getting timezone: ${e.message}`)
                    }
                    return t
                }
                _getPerformanceMetrics() {
                    return function() {
                        if (!window.performance || !performance.getEntriesByType) return null;
                        const e = performance.getEntriesByType("navigation");
                        if (0 === e.length) return null;
                        const t = e[0];
                        let i = performance.getEntriesByType("mark");
                        i = i.slice(Math.max(i.length - 1e3, 0));
                        let n = performance.getEntriesByType("paint");
                        n = n.slice(Math.max(n.length - 1e3, 0));
                        let r = performance.getEntriesByType("measure");
                        return r = n.slice(Math.max(r.length - 1e3, 0)), {
                            connection: f(),
                            navigation: t.toJSON && t.toJSON() || "unknown",
                            paints: n.map(m),
                            marks: i.map(m),
                            measures: r.map(m),
                            pushstream: {
                                statusPublic: _.pushStreamMultiplexer.status(),
                                statusPrivate: _.pushStreamMultiplexer.statusPrivate()
                            }
                        }
                    }()
                }
                _sortLogs(e, t) {
                    return e.timestamp - t.timestamp
                }
                async _getLogHistory() {
                    let e;
                    try {
                        let t = (0, h.getRawLogHistory)();
                        _.pushStreamMultiplexer.ownPushStream() || (t = t.concat(await _.pushStreamMultiplexer.getLogs())), e = t.sort(this._sortLogs).map(h.serializeLogHistoryEntry).join("\n").slice(-8e6)
                    } catch (t) {
                        b.logWarn(`Error while collecting log history: ${t.message}`), e = JSON.stringify({
                            error: "logger.getLogHistory(maxLen) failed: " + t.message,
                            stack: t.stack
                        })
                    }
                    return e
                }
                async _getDesktopReports() {
                    return window.TVD && window.TVD.getReports ? window.TVD.getReports() : null
                }
                _getPingInfo() {
                    if (!window.ChartApiInstance) return b.logWarn("Abort getting chart session disconnects count. No ChartApiInstance found."), [];
                    const e = window.ChartApiInstance.getPingInfo();
                    return null !== e ? [e.min, e.max, e.avg] : []
                }
                _getUserId() {
                    return window.user && window.user.id ? window.user.id : null
                }
                _getUser() {
                    return window.user && window.user.username || "Guest"
                }
                _getProPlan() {
                    return window.user && window.user.pro_plan && window.user.pro_plan !== v.ProPlans.Free ? window.user.pro_plan : null
                }
                _getWebSocketAddress() {
                    return window.WSBackendConnection ? window.WSBackendConnection.getHost() : (b.logWarn("Abort getting websocket address. No WSBackendConnection found."), null)
                }
                _getSessionId() {
                    return window.ChartApiInstance ? window.ChartApiInstance.sessionid : (b.logWarn("Abort getting websocket address. No ChartApiInstance found."), null)
                }
                _getReferrer() {
                    return location.href
                }
                _getJsErrors() {
                    return window.__tv_js_errors.slice(0, 10)
                }
                _filterEmptyFields(e) {
                    const t = {};
                    for (const i in e)
                        if (e.hasOwnProperty(i)) {
                            const n = e[i];
                            null != n && (!Array.isArray(n) || n.length > 0) && (t[i] = n)
                        }
                    return t
                }
                _getServerInfo() {
                    const e = document.querySelector('meta[name="tv:server-name"]');
                    return null !== e ? e.getAttribute("content") : null
                }
                _getServerTimeOffset() {
                    return window.ChartApiInstance ? String(Math.round(window.ChartApiInstance.serverTimeOffset())) + "s" : (b.logWarn("Abort getting server time offset. No ChartApiInstance found."), null)
                }
                _getUserSettings() {
                    {
                        const e = p().keys().reduce(((e, t) => {
                            const i = p().getValue(t);
                            if (i) try {
                                e[t] = JSON.parse(i)
                            } catch (n) {
                                e[t] = i
                            }
                            return e
                        }), {});
                        return JSON.stringify(e).slice(0, 5e5)
                    }
                }
                _getDomNodesCount() {
                    return document.querySelectorAll("*").length
                }
                async _getPageSnapshot() {
                    return this._data.screenshotAgree ? Promise.all([i.e(32689), i.e(142)]).then(i.bind(i, 311702)).then((async e => {
                        try {
                            return await e.generatePageSnapshot({
                                logging: !1,
                                ignoreElements: e => e === this._dialogElement
                            })
                        } catch (e) {
                            return b.logError(e), null
                        }
                    })) : (b.logWarn("Abort creating page snapshot. User did not agree to send page snapshot."), null)
                }
                _getBuildTime() {
                    return window.BUILD_TIME
                }
                _getPlugins() {
                    return void 0 !== navigator.plugins ? Array.from(navigator.plugins).map((e => ({
                        name: e.name,
                        filename: e.filename,
                        description: e.description
                    }))) : []
                }
                _getLocale() {
                    var e;
                    return null !== (e = window.locale) && void 0 !== e ? e : "en"
                }
            }
        },
        582950: (e, t, i) => {
            "use strict";
            var n, r, o, s, a, l, c, d, u, h, _;

            function g(e) {
                const t = void 0 !== e.event && void 0 !== e.userId || void 0 !== e.email,
                    i = !e.screenshotAgree || Boolean(e.pageSnapshotURL);
                return t && i
            }
            i.d(t, {
                    CoreActiveIssueType: () => n,
                    CoreLegacyIssueType: () => r,
                    TVOnlyActiveIssueType: () => o,
                    TVOnlyLegacyIssueType: () => s,
                    AdditionalIssueType: () => a,
                    SubscriptionState: () => l,
                    isTicketDataComplete: () => g,
                    TicketNoteState: () => c,
                    TicketPublicStatus: () => d,
                    SatisfactionStatus: () => u,
                    FreshdeskProduct: () => h,
                    FreshdeskTags: () => _
                }),
                function(e) {
                    e.Chart = "Chart", e.Trading = "Trading issue", e.Indicators = "Indicators", e.Drawings = "Drawings"
                }(n || (n = {})),
                function(e) {
                    e.Other = "Other", e.DrawingIssue = "Drawings issue", e.StudyNotLoading = "Study not loading", e.SlowChart = "Slow scrolling or chart loading"
                }(r || (r = {})),
                function(e) {
                    e.Data = "Data", e.PineScript = "Pine Script issue", e.Alert = "Alerts issue", e.Billing = "Billing", e.Screener = "Screener", e.SocialNetwork = "Social network", e.Watchlist = "Watchlist", e.MobileApps = "Mobile apps", e.Desktop = "Desktop", e.Financials = "Financials", e.ProfileSettings = "Profile settings", e.AccountRecovery = "Account recovery", e.Blackfriday = "Black Friday", e.Cybermonday = "Cyber Monday", e.PaymentSearch = "Payment search"
                }(o || (o = {})),
                function(e) {
                    e.Unsubscribe = "Unsubscribe", e.ChartDoesNotLoad = "Chart does not load", e.NoRealTimeData = "No real-time data",
                        e.GapInTheData = "Gap in the data", e.PriceIncorrect = "Price incorrect"
                }(s || (s = {})),
                function(e) {
                    e.Refund = "Refund"
                }(a || (a = {})),
                function(e) {
                    e.IsPro = "Is PRO", e.ExPro = "Ex-PRO"
                }(l || (l = {})),
                function(e) {
                    e.FromAgent = "0", e.FromUser = "2"
                }(c || (c = {})),
                function(e) {
                    e.Received = "Received", e.InProgress = "In Progress", e.Closed = "Closed"
                }(d || (d = {})),
                function(e) {
                    e[e.Good = 103] = "Good", e[e.Average = 100] = "Average", e[e.Bad = -103] = "Bad"
                }(u || (u = {})),
                function(e) {
                    e[e.Production = 43000002188] = "Production", e[e.ProductionFree = 43000002552] = "ProductionFree", e[e.ProductionRefunds = 43000007194] = "ProductionRefunds", e[e.Staging = 43000002187] = "Staging", e[e.StagingFree = 43000002553] = "StagingFree", e[e.StagingRefunds = 43000007193] = "StagingRefunds"
                }(h || (h = {})),
                function(e) {
                    e.NoSatisfactionSurveys = "No satisfaction surveys", e.RefundRequested = "Refund requested"
                }(_ || (_ = {}))
        },
        487381: (e, t, i) => {
            "use strict";
            i.d(t, {
                setupTrackingModePopupHint: () => l
            });
            var n = i(62802),
                r = i(480071),
                o = i(638456),
                s = i(345848),
                a = i(495046);

            function l(e) {
                if (!o.CheckMobile.any() || Boolean(n.getBool("hint.trackingMode")) || !a.enabled("popup_hints")) return;
                const t = o => {
                    const a = r.tool.value();
                    ((0, r.toolIsCursor)(a) || "eraser" === a) && (o.preventDefault(), o.stopPropagation(), Promise.all([i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(91901), i.e(97734), i.e(75514), i.e(745), i.e(35174)]).then(i.bind(i, 416108)).then((e => {
                        e.render(document.createElement("div"), (() => {
                            n.setValue("hint.trackingMode", !0, {
                                forceFlush: !0
                            }), (0, s.trackEvent)("GUI", "Tracking Mode")
                        }))
                    })), e.removeEventListener("touchstart", t, !0))
                };
                e.addEventListener("touchstart", t, !0)
            }
        },
        24958: (e, t, i) => {
            "use strict";
            i.d(t, {
                TradingBootloader: () => u
            });
            var n = i(564894),
                r = i(510013),
                o = i(440135),
                s = i(62802),
                a = i.n(s),
                l = i(495046),
                c = i(962127),
                d = i(768738);
            class u extends r.ChunkLoader {
                constructor(e) {
                    super(), this._options = e;
                    const t = a().getBool(c.settingsKeys.TRADING_PANEL_OPENED, l.enabled("show_order_panel_on_start"));
                    if (window.is_authenticated && t) {
                        const e = (0, o.getThemedColor)("color-pane-bg");
                        this._options.resizerBridge.negotiateWidth(a().getInt(c.settingsKeys.PANEL_WIDTH) || d.panelWidth), this._options.resizerBridge.negotiateHeight(d.panelHeight), this._options.resizerBridge.container.value().style.setProperty("background-color", e)
                    }
                }
                async _startLoading() {
                    return this._loadTrading()
                }
                async _loadTrading() {
                    const {
                        resizerBridge: e,
                        chartWidgetCollection: t
                    } = this._options, [{
                        TRADING_SERVICE: r
                    }, {
                        Trading: o
                    }] = await Promise.all([Promise.all([i.e(85020), i.e(47667), i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(91901), i.e(1428), i.e(1011), i.e(52701), i.e(42301), i.e(93588), i.e(32374), i.e(75514), i.e(1387), i.e(47488), i.e(13130), i.e(40215), i.e(745), i.e(90897), i.e(14386), i.e(87839), i.e(25142)]).then(i.bind(i, 893271)), Promise.all([i.e(85020), i.e(47667), i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(91901), i.e(1428), i.e(1011), i.e(52701), i.e(42301), i.e(93588), i.e(32374), i.e(75514), i.e(1387), i.e(47488), i.e(13130), i.e(40215), i.e(745), i.e(90897), i.e(14386), i.e(87839), i.e(25142)]).then(i.bind(i, 817734))]), s = new o(e, this._options.bottomWidgetBarSettled);
                    return n.registerService(r, s),
                        void 0 !== t && s.setChartWidgetCollection(t), s
                }
            }
        },
        477600: (e, t, i) => {
            "use strict";
            i.d(t, {
                createStubElem: () => r
            });
            var n = i(860309);

            function r(e = [], t = []) {
                const i = document.createElement("div"),
                    r = document.createElement("div");
                return i.appendChild(r), i.classList.add(n.container), r.classList.add(n.inner), e.forEach((e => {
                    i.classList.add(n[e])
                })), t.forEach((e => {
                    i.classList.add(n[e])
                })), i
            }
        },
        975420: (e, t, i) => {
            "use strict";
            i.d(t, {
                initGA: () => c,
                trackTiming: () => d
            });
            var n = i(251954),
                r = i(261030),
                o = i(588948),
                s = i(638456),
                a = i(691805);
            let l = !1;

            function c() {
                if (l) return;
                (0, o.updateInitData)();
                const e = (0, o.getInitData)();
                if (!e.gaId) return void(window.gtag = () => {});
                l = !0, (0, a.appendScript)(`https://www.googletagmanager.com/gtag/js?id=${(0,o.getInitData)().gaId}`), window.dataLayer = window.dataLayer || [], window.gtag = function() {
                    window.dataLayer.push(arguments)
                }, window.gtag("js", new Date);
                const t = {
                    anonymize_ip: !0
                };
                window.TVD && (t.app_name = "TVD", t.app_version = (0, s.desktopAppVersion)()), e.gaVars && window.gtag("set", e.gaVars), window.gtag("consent", "default", {
                    analytics_storage: (0, r.getCookieSetting)(r.CookieSettings.Analytics) ? "granted" : "denied"
                }), window.gtag("config", e.gaId, t), n.subscribe(r.cookieSettingsChangeEvent, ((e, t) => {
                    e === r.CookieSettings.Analytics && window.gtag("consent", "update", {
                        analytics_storage: t ? "granted" : "denied"
                    })
                }), null)
            }

            function d(e, t, i, n) {
                c(), window.gtag("event", "timing_complete", {
                    name: t,
                    value: i,
                    event_category: e,
                    event_label: n
                })
            }
        },
        503595: (e, t, i) => {
            "use strict";
            i.d(t, {
                asyncWindowOpen: () => o
            });
            var n = i(314802);
            const r = i(777754).t(null, void 0, i(390879));

            function o(e, t, i) {
                return window.TVD || (0, n.isOnMobileAppPage)("any") ? function(e, t, i) {
                    return e.then((e => {
                        void 0 !== e && open(e, t, i)
                    }), (() => {}))
                }(e, t, i) : async function(e, t, i) {
                    const n = URL.createObjectURL(new Blob([`<!doctype html><html style="background-color:${getComputedStyle(document.documentElement).backgroundColor}"><head><meta charset="utf-8"><title>${r}</title></head><body style="background-color:${getComputedStyle(document.body).backgroundColor}"></body></html>`], {
                        type: "text/html"
                    }));
                    try {
                        const r = open(n, t, i);
                        if (!r) throw new Error("cound not open a new tab");
                        const o = await e.catch((() => {}));
                        void 0 !== o ? r.location.replace(o) : r.close()
                    } finally {
                        URL.revokeObjectURL(n)
                    }
                }(e, t, i)
            }
        },
        510013: (e, t, i) => {
            "use strict";
            i.d(t, {
                ChunkLoader: () => r
            });
            var n = i(462282);
            class r {
                constructor() {
                    this._retries = 5, this._cache = null, this._tryLoad = (e, t) => {
                        this._retries = this._retries - 1;
                        this._startLoading(e).then(t, 0 !== this._retries ? i => {
                            (0, n.isAbortError)(i) || setTimeout((() => this._tryLoad(e, t)), 3e3)
                        } : void 0)
                    }
                }
                load(e) {
                    return this._cache || (this._cache = new Promise(this._tryLoad.bind(this, null != e ? e : null))), this._cache
                }
            }
        },
        752604: (e, t, i) => {
            "use strict";
            i.d(t, {
                isCountryCode: () => a,
                toCountryCode: () => l,
                getIsoCountryCodeFromLocale: () => c
            });
            var n = i(272001),
                r = i(448641);
            const o = (0, n.getLogger)("Lib.CountryCode"),
                s = /^[A-Z]{2}$/;

            function a(e) {
                return s.test(e)
            }

            function l(e) {
                if (a(e)) return e;
                throw new Error("Invalid country code")
            }

            function c(e) {
                var t, i;
                try {
                    return l(null === (i = null === (t = r[e]) || void 0 === t ? void 0 : t.geoip_code) || void 0 === i ? void 0 : i.toUpperCase())
                } catch (t) {
                    return o.logError(`Get ISO country code from locale "${e}" failed: ${t.message}`), l(r.en.geoip_code.toUpperCase())
                }
            }
        },
        207678: (e, t, i) => {
            "use strict";
            i.d(t, {
                breakpoints: () => n,
                mobileFirstBreakpoints: () => r,
                mobileFirstLegacyBreakpoints: () => o
            });
            const n = {
                    desktop: 1 / 0,
                    desktopHd: 1919,
                    phone: 767,
                    "phone-vertical": 479,
                    tablet: 1019
                },
                r = {
                    base: 0,
                    "media-mf-phone-vertical": 320,
                    "media-mf-phone-landscape": 568,
                    "media-mf-tablet-vertical": 768,
                    "media-mf-tablet-landscape": 1024,
                    "media-mf-laptop": 1280,
                    "media-mf-desktop-medium": 1440,
                    "media-mf-desktop-large": 1920,
                    "media-mf-desktop-extra-large": 2560
                },
                o = {
                    "media-mf-legacy-phone-vertical": 330,
                    "media-mf-legacy-phone": 480,
                    "media-mf-legacy-notebook": 1020,
                    "media-mf-legacy-desktop-medium": 1480,
                    "media-mf-legacy-desktop": 1531
                }
        },
        76107: (e, t, i) => {
            "use strict";
            i.d(t, {
                getScrollbarWidth: () => n,
                matchMediaMinMax: () => r,
                getContentWidth: () => o,
                setStyle: () => s,
                getCSSProperty: () => a,
                getCSSPropertyNumericValue: () => l
            });
            const n = (() => {
                let e;
                return () => {
                    var t;
                    if (void 0 === e) {
                        const i = document.createElement("div"),
                            n = i.style;
                        n.visibility = "hidden", n.width = "100px", n.msOverflowStyle = "scrollbar", document.body.appendChild(i);
                        const r = i.offsetWidth;
                        i.style.overflow = "scroll";
                        const o = document.createElement("div");
                        o.style.width = "100%", i.appendChild(o);
                        const s = o.offsetWidth;
                        null === (t = i.parentNode) || void 0 === t || t.removeChild(i), e = r - s
                    }
                    return e
                }
            })();

            function r(e, t) {
                return t === 1 / 0 ? window.matchMedia(`(min-width: ${e}px)`) : window.matchMedia(`(min-width: ${e}px) and (max-width: ${t}px)`)
            }

            function o(e) {
                return l(e, "width") - l(e, "padding-left") - l(e, "padding-right")
            }

            function s(e, t, i) {
                null !== e && e.style.setProperty(t, i)
            }

            function a(e, t) {
                return getComputedStyle(e, null).getPropertyValue(t)
            }

            function l(e, t) {
                return parseInt(a(e, t))
            }
        },
        850775: (e, t, i) => {
            "use strict";
            i.d(t, {
                mediaState: () => c
            });
            var n = i(685459),
                r = i.n(n),
                o = i(10571),
                s = i(207678),
                a = i(76107);
            class l extends(r()) {
                constructor() {
                    super(), this.width = 0, this.height = 0, this.device = null, this.breakpoints = s.breakpoints, this._checkDevice(), window.addEventListener("resize", this._checkDevice), Object.entries(s.breakpoints).sort((([e, t], [i, n]) => t - n)).forEach((([e, t], i, n) => {
                        let r;
                        if (0 !== i) {
                            const [, e] = n[i - 1];
                            r = e + 1
                        } else r = 0;
                        const o = (0, a.matchMediaMinMax)(r, t);
                        o.matches && this._setNewDevice(e), o.addListener((t => {
                            t.matches && (this._checkDevice(), this._setNewDevice(e))
                        }))
                    })), (0, o.whenDocumentReady)(this._checkDevice.bind(this)), this.isPhoneSizeDevice.bind(this)
                }
                isPhoneSizeDevice() {
                    return "phone" === this.device || "phone-vertical" === this.device
                }
                _checkDevice() {
                    this.width = window.innerWidth, this.height = window.innerHeight
                }
                _setNewDevice(e) {
                    const t = this.device;
                    this.device = e, this.trigger("changeDevice", [e, t])
                }
            }
            const c = new l
        },
        887357: (e, t, i) => {
            "use strict";
            var n, r;
            i.d(t, {
                    NewsItemPermission: () => n,
                    NewsWidgetPlacement: () => r
                }),
                function(e) {
                    e.Headline = "headline", e.Preview = "preview", e.Link = "link", e.Provider = "provider"
                }(n || (n = {})),
                function(e) {
                    e.WidgetBar = "widgetbar", e.Main = "main", e.Chart = "chart"
                }(r || (r = {}))
        },
        321658: (e, t, i) => {
            "use strict";
            i.d(t, {
                addIDCCodes: () => l
            });
            var n = i(890740),
                r = i(777754),
                o = (i(984919), i(345848)),
                s = i(414626),
                a = i(218333);

            function l(e) {
                return (0, o.trackEvent)("IDC Add Delay Service", "Agreed", e), (0, n.fetch)(`/idc-add-delay-service/${e}/`, {
                    credentials: "include"
                }).then((e => e.json())).then((e => e.res === s.SymbolAvailabilityCodes.OK ? 0 : 1)).catch((() => (function(e) {
                    (0, a.showNoticeDialog)({
                        title: r.t(null, void 0, i(717211)),
                        content: r.t(null, void 0, i(703010)).format({
                            exchange: e.toUpperCase()
                        })
                    })
                }(e), Promise.resolve(1))))
            }
        },
        397239: (e, t, i) => {
            "use strict";
            i.d(t, {
                isUserNeedSignAgreement: () => r,
                checkIfExchangeAvailable: () => o,
                exchangeToProductId: () => s
            });
            i(984919);
            var n = i(237037);

            function r(e) {
                if (!(0, n.isIDCExchange)(e)) return !1;
                e = s(e);
                const t = window.pro,
                    i = t.getProduct(e);
                return void 0 !== i.idc_service_codes_delay && ((!Array.isArray(i.included_exchanges) || !i.included_exchanges.some((e => t.hasPackage(s(e))))) && ! function(e) {
                    const t = window.pro;
                    return t.hasPackage(e) || t.hasPackage(e + "_dly")
                }(e))
            }

            function o(e) {
                const t = window.pro;
                return new Promise((i => {
                    window.is_authenticated ? !t.getIDCExchanges(!0).length || t.isInvalidShopConf() ? t.updateShopConf().then((() => {
                        i(!r(e))
                    })).catch((() => {
                        i(!0)
                    })) : i(!r(e)) : i(!0)
                }))
            }

            function s(e) {
                return e.startsWith("exchange-") ? e : "exchange-{0}".format(e.toLowerCase())
            }
        },
        237037: (e, t, i) => {
            "use strict";

            function n(e, t = !1) {
                if (e && e.startsWith("exchange-")) return function(e, t = !1) {
                    const i = window.pro,
                        n = i.getProduct(e);
                    return !!i.isProductDefined(n) && (t ? !!n.idc_service_codes_delay : !!n.idc_service_codes)
                }(e, t);
                const i = (e || "").toLowerCase();
                return window.pro.getIDCExchanges(t).includes(i)
            }
            i.d(t, {
                isIDCExchange: () => n
            })
        },
        651391: (e, t, i) => {
            "use strict";
            i.d(t, {
                checkSymbol: () => L,
                isSymbolAvailable: () => F,
                requestFallbackSymbol: () => N
            });
            var n = i(777754),
                r = i(647757),
                o = i(653564),
                s = i(345848);
            var a = i(321658);
            const l = window.pro;

            function c(e) {
                return new Promise((t => {
                    if (!(e = e && e.toLowerCase())) return void t(!1);
                    const n = i.c[839694];
                    if (n && n.exports.isOpenedModals()) return void t(!1);
                    let r = !1;
                    (0, o.createIdcDelayAddServiceDialog)().then((n => {
                        n.open(), n.on("afterOpen", (() => {
                            (0, s.trackEvent)("IDC Add Delay Service", "Dialog Shown", e)
                        })), n.on("afterClose", (() => {
                            r || t(!1)
                        })), n.on("action:add-service", (n => {
                            r = !0, n.destroy(), (0, a.addIDCCodes)(e).then((e => {
                                0 === e ? (l.invalidateShopConf(), l.updateShopConf(), async function() {
                                    const {
                                        showSubscriptionHasBeenChangedDialog: e
                                    } = await Promise.all([i.e(21646), i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(91901), i.e(13249), i.e(96246), i.e(46951), i.e(65216), i.e(75514), i.e(745), i.e(52328), i.e(60246), i.e(30870)]).then(i.bind(i, 949397));
                                    e({
                                        pushReload: !0
                                    })
                                }(), t(!0)) : t(!1)
                            }))
                        }))
                    }))
                }))
            }
            var d = i(237037),
                u = i(12670),
                h = i(852490),
                _ = i(414626),
                g = i(397239),
                p = i(749028),
                m = i(125226);
            var f = i(696828),
                v = i(508846),
                b = i(583912),
                y = i(416234);
            var w = i(49437),
                S = i(947467),
                C = i(272001),
                P = i(891343);
            const A = "nse_dialog_key",
                E = (0, C.getLogger)("VorAgreementDialog"),
                I = "vorDialogKey",
                T = window.location.hostname.split("."),
                D = T.slice(1, T.length).join("."),
                k = {
                    nyse: {
                        symbolName: "NYSE"
                    },
                    amex: {
                        symbolName: "AMEX"
                    },
                    bist: {
                        symbolName: "BIST",
                        exchange: "BISTMIXED",
                        productId: "bist_mixed"
                    }
                };

            function L(e, t) {
                if (e) {
                    if ((0,
                            m.isFeatureEnabled)("nse_attention_popup") && e.startsWith("NSE") && window.pro && window.pro.isPro()) {
                        if (null !== w.TVLocalStorage.getItem(A)) return void w.TVLocalStorage.removeItem(A);
                        (0, v.createGoProDialog)({
                            feature: "checkingNSE",
                            closeOnOutsideClick: !1,
                            closeOnEsc: !1,
                            closeButton: !1,
                            actions: [{
                                text: n.t(null, void 0, i(639279)),
                                onClick: () => {
                                    w.TVLocalStorage.setItem(A, "viewed"), window.open(`/chart/?symbol=${e}`, "_blank")
                                }
                            }]
                        })
                    }
                    Object.values(k).forEach((({
                        symbolName: i,
                        productId: n,
                        exchange: r
                    }) => {
                        var o, s;
                        e.startsWith(i) && ((0, m.isFeatureEnabled)("nyse_agreement") && (null === (o = window.pro) || void 0 === o ? void 0 : o.hasPackage((0, g.exchangeToProductId)(i))) ? x(i) : (0, m.isFeatureEnabled)("bist_mixed_agreement") && t && t === r && n && (null === (s = window.pro) || void 0 === s ? void 0 : s.hasPackage((0, g.exchangeToProductId)(n))) && x(n, i))
                    }))
                }
            }
            async function x(e, t) {
                try {
                    const i = await (0, p.isSignedExchangeAgreement)({
                        exchange: e
                    });
                    if (i.response) return;
                    const n = null != t ? t : k[e.toLowerCase()].symbolName;
                    if (t) return void W(n);
                    P.get(I) || (P.set(I, "true", 1, "/", D ? `.${D}` : ""), W(n))
                } catch (e) {
                    E.logError(e.message)
                }
            }

            function F(e, t) {
                return (0, r.check)(e).then((() => (L(e, t), !0))).catch((e => {
                    if (e.errCode === _.SymbolAvailabilityCodes.DELAY_NOT_AVAILABLE)(0, v.createGoProDialog)({
                        feature: "idcFreeUser",
                        closeOnOutsideClick: !1,
                        goOnMarkets: !0
                    });
                    else if ((0, d.isIDCExchange)(e.exchange)) {
                        if (e.errCode === _.SymbolAvailabilityCodes.NEED_SIGN_AGREEMENT) return function(e) {
                            return new Promise((t => {
                                if (!(e = e && e.toLowerCase())) return void t(!1);
                                const n = i.c[839694];
                                n && n.exports.isOpenedModals() ? t(!1) : (0, o.createIdcDelayAgreementDialog)({
                                    exchange: e
                                }).then((i => {
                                    i.on("afterOpen", (() => {
                                        (0, s.trackEvent)("IDC Delay", "Dialog Shown", e)
                                    })), i.on("afterClose", (() => {
                                        t(!1)
                                    })), i.on("action:sign-agreement", (() => {
                                        window.saver.saveChartSilently(), (0, s.trackEvent)("IDC Delay", "Go on Agreement", e)
                                    })), i.open()
                                }))
                            }))
                        }(e.exchange);
                        if (e.errCode === _.SymbolAvailabilityCodes.NEED_ADD_SERVICE) return c(e.exchange)
                    }
                    return Promise.resolve(!1)
                }))
            }

            function N(e, t) {
                return new Promise((n => {
                    if ("group_not_permitted" !== t.type) return void n(e);
                    if (!t.symbolGroup) return void n(window.DEFAULT_SYMBOL);
                    const r = t.symbolGroup,
                        o = (0, h.isSfFlag)(r),
                        s = (0, u.isMcxFlag)(r);
                    if (o || s) {
                        const t = i.c[839694];
                        if (t && t.exports.isOpenedModals()) return void n(window.DEFAULT_SYMBOL);
                        a = {
                            exchange: (0, f.getExchange)(b.linking.symbol.value()),
                            onSigninSuccess: () => {
                                n(e)
                            },
                            isRealtime: s
                        }, Promise.all([i.e(13842), i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(91901), i.e(13249), i.e(96246), i.e(46951), i.e(65216), i.e(22725), i.e(75514), i.e(745), i.e(52328), i.e(60246), i.e(27901)]).then(i.bind(i, 623109)).then((e => e.createGoRegisterDialog(a))), F(e).then((t => {
                            t && n(e)
                        }))
                    }
                    var a;
                    const l = (0, y.getSymbolGroupData)(r);
                    l ? function(e) {
                        Promise.all([i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(91901), i.e(13249), i.e(96246), i.e(28745), i.e(75514), i.e(745), i.e(87279)]).then(i.bind(i, 935381)).then((t => t.createAvailableExchangeDialog(e)))
                    }({
                        width: 600,
                        title: l.title,
                        content: l.description,
                        destroy: () => n(window.DEFAULT_SYMBOL)
                    }) : n(window.DEFAULT_SYMBOL)
                }))
            }
            async function W(e) {
                const [{
                    showSimpleDialog: t
                }, {
                    SimpleConfirmDialog: r
                }] = await Promise.all([Promise.all([i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(12275), i.e(33335), i.e(91901), i.e(83772), i.e(71140), i.e(85761), i.e(64884), i.e(54819), i.e(1428), i.e(1011), i.e(52701), i.e(59302), i.e(36812), i.e(69273), i.e(67177), i.e(69392), i.e(23426), i.e(75514), i.e(745), i.e(3566)]).then(i.bind(i, 894185)), Promise.all([i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(12275), i.e(33335), i.e(91901), i.e(83772), i.e(71140), i.e(85761), i.e(64884), i.e(54819), i.e(1428), i.e(1011), i.e(52701), i.e(59302), i.e(36812), i.e(69273), i.e(67177), i.e(69392), i.e(23426), i.e(75514), i.e(745), i.e(3566)]).then(i.bind(i, 858921))]);
                t({
                    text: n.t(null, {
                        replace: {
                            exchange: e
                        }
                    }, i(775795)),
                    title: n.t(null, {
                        replace: {
                            exchange: e
                        }
                    }, i(106672)),
                    mainButtonText: n.t(null, {
                        replace: {
                            exchange: e
                        }
                    }, i(766051)),
                    showCancelButton: !1,
                    onConfirm: e => {
                        (0, S.showExchangeAgreementDialog)({}), e.dialogClose()
                    }
                }, r)
            }
        },
        647757: (e, t, i) => {
            "use strict";
            i.d(t, {
                check: () => c
            });
            var n = i(696828),
                r = i(890740),
                o = i(632446),
                s = i(833813),
                a = i(397239),
                l = i(414626);

            function c(e, t = !0) {
                return new Promise(((i, c) => {
                    const d = (0, n.getExchange)(e);
                    d ? (0, a.checkIfExchangeAvailable)(d).then((n => n ? i(e) : (0, o.enabled)(s.ProductFeatures.IDC_AVAILABLE_DELAY) ? t ? void(0, r.fetch)(`/idc-sign-agreement-check/${d}/`, {
                        credentials: "include"
                    }).then((t => t.json().then((t => t.res === l.SymbolAvailabilityCodes.DELAY_NOT_AVAILABLE ? c({
                        exchange: d,
                        errCode: t.res,
                        reason: "delay not available",
                        symbol: e
                    }) : t.res === l.SymbolAvailabilityCodes.NEED_SIGN_AGREEMENT ? c({
                        exchange: d,
                        errCode: t.res,
                        reason: "need sign agreement",
                        symbol: e
                    }) : t.res === l.SymbolAvailabilityCodes.NEED_ADD_SERVICE ? c({
                        exchange: d,
                        errCode: t.res,
                        reason: "need add service",
                        symbol: e
                    }) : i(e))))).catch((() => {
                        i(e)
                    })) : i(e) : c({
                        exchange: d,
                        errCode: l.SymbolAvailabilityCodes.DELAY_NOT_AVAILABLE,
                        reason: "delay not available",
                        symbol: e
                    }))) : i(e)
                }))
            }
        },
        414626: (e, t, i) => {
            "use strict";
            i.d(t, {
                SymbolAvailabilityCodes: () => n
            });
            const n = JSON.parse('{"OK":"OK","ERR":"ERR","SYMBOL_NOT_AVAILABLE_FOR_ANON":"SYMBOL_NOT_AVAILABLE_FOR_ANON","DELAY_NOT_AVAILABLE":"DELAY_NOT_AVAILABLE","NEED_SIGN_AGREEMENT":"NEED_SIGN_AGREEMENT","NEED_ADD_SERVICE":"NEED_ADD_SERVICE"}')
        },
        519073: (e, t, i) => {
            "use strict";

            function n(e, t) {
                return t.includes("crypto") || ["bitcoin", "crypto"].includes(e)
            }

            function r(e, t) {
                return "stock" === e && t.includes("right") || "right" === e
            }

            function o(e, t) {
                return "fund" === e && t.includes("etf") || "stock" === e && t.includes("fund") && t.includes("etf")
            }

            function s(e) {
                return "economic" === e
            }
            i.d(t, {
                hasCryptoTypespec: () => n,
                isRight: () => r,
                isEtf: () => o,
                isEconomicSymbol: () => s
            })
        },
        975774: (e, t, i) => {
            "use strict";
            i.d(t, {
                loadThemeOnChartInitialization: () => o
            });
            var n = i(440135),
                r = i(919346);

            function o(e) {
                const t = (0, n.getCurrentTheme)().name,
                    i = (0, r.getThemeNameIfStdTheme)((0, n.extractThemeFromModel)(e.activeChartWidget.value().model()));
                null !== i && i !== t && (0, n.loadTheme)(e, {
                    themeName: t,
                    standardTheme: !0,
                    noUndo: !0
                })
            }
        },
        909740: (e, t, i) => {
            "use strict";
            i.d(t, {
                setTheme: () => o,
                watchedTheme: () => r
            });
            var n = i(988411);
            const r = new(i.n(n)());

            function o(e) {
                r.setValue(e)
            }
            r.subscribe((e => {
                ! function(e, t = window) {
                    const i = "theme-" + e,
                        n = t.document.documentElement.classList;
                    for (const e of Array.from(n)) e.startsWith("theme-") && e !== i && n.remove(e);
                    n.add(i)
                }(e, window)
            }))
        },
        707202: (e, t, i) => {
            "use strict";
            i.d(t, {
                IndicatorsPreloader: () => g
            });
            var n = i(293689),
                r = i(604061),
                o = i(825398),
                s = i(777754),
                a = i(304328),
                l = i(650151);
            async function c() {
                const [e, t] = await Promise.all([(0, n.requestFundamentalScripts)(), (0, a.getFinancialsData)()]), i = function(e, t) {
                    const i = {};
                    e.forEach((e => {
                        const t = (0, a.getIdWithoutPeriod)(e.id);
                        t && !i[t] && (i[t] = { ...e,
                            nestingLevel: -1,
                            idWithoutPeriod: t,
                            parentIdWithoutPeriod: (0, a.getIdWithoutPeriod)(e.parent),
                            periodData: [],
                            shortTitle: ""
                        })
                    })), t.forEach((e => {
                        if (!e.extra.fund_id) return;
                        const t = (0, a.getIdWithoutPeriod)(e.extra.fund_id),
                            n = i[(0, l.ensureDefined)(t)];
                        if (!n) return;
                        const r = {
                            period: e.extra.financialPeriod,
                            scriptIdPart: e.scriptIdPart,
                            scriptName: e.scriptName,
                            version: e.version
                        };
                        n.shortTitle = e.extra.shortDescription, n.tags = e.extra.tags, n.periodData.push(r)
                    }));
                    const n = Object.values(i),
                        r = (e, t) => e.period && t.period ? e.period.localeCompare(t.period) : 0;
                    return n.forEach((e => {
                        e.periodData.length > 1 && e.periodData.sort(r)
                    })), n
                }((0, a.filterHiddenItems)(t), e), r = function(e) {
                    const t = [...e].map((e => {
                        var t;
                        if (null === (t = e.children) || void 0 === t ? void 0 : t.length) {
                            const t = (0, a.flattenTree)(e.children);
                            return { ...e,
                                children: t
                            }
                        }
                        return e
                    }));
                    return (0, a.splitByCategory)(t)
                }(function(e) {
                    const t = (0, a.toTree)(e);
                    return (0, a.sortByOrdinal)(t)
                }(i));
                return function(e) {
                    const t = {};
                    return Object.keys(e).forEach((i => {
                        const n = [];
                        e[i].forEach((e => {
                            const t = d([e])[0];
                            if (t)
                                if (t.children) {
                                    const e = d(t.children).map((e => u(e, !0)));
                                    n.push(u(t), ...e)
                                } else n.push(u(t))
                        })), t[i] = n
                    })), t
                }(r)
            }

            function d(e) {
                const t = e.filter((e => void 0 === e.indicatorVisible || e.indicatorVisible));
                return t.filter((e => e.periodData.length > 0))
            }

            function u(e, t = !1) {
                const {
                    id: n,
                    name: r,
                    shortTitle: o,
                    idWithoutPeriod: a,
                    periodData: l,
                    tags: c
                } = e;
                return {
                    id: n,
                    shortTitle: o,
                    periodData: l,
                    tags: c,
                    name: s.t(r, {
                        context: "study"
                    }, i(168716)),
                    solutionId: _(a),
                    isNested: t
                }
            }
            const h = i(384898);

            function _(e) {
                return h[e]
            }
            class g {
                constructor(e) {
                    this._chartWidgetCollection = e
                }
                getIndicatorPromises() {
                    var e, t, i, s, a, l, d, u, h;
                    const _ = (null === (e = this._initIndicatorsPromises) || void 0 === e ? void 0 : e.javaStudiesPromise) || (0, r.requestBuiltInJavaStudies)(this._chartWidgetCollection),
                        g = (null === (t = this._initIndicatorsPromises) || void 0 === t ? void 0 : t.standardScriptsPromise) || (0, n.requestBuiltinScripts)(),
                        p = (null === (i = this._initIndicatorsPromises) || void 0 === i ? void 0 : i.candlestickScriptsPromise) || (0, n.requestCandlestickScripts)(),
                        m = (null === (s = this._initIndicatorsPromises) || void 0 === s ? void 0 : s.publicPineStudiesPromise) || (0, r.fetchPublicPineStudies)((0, r.createPublicStudiesRequestParams)("top")),
                        f = (null === (a = this._initIndicatorsPromises) || void 0 === a ? void 0 : a.trendingStudiesPromise) || (0, r.fetchPublicPineStudies)((0, r.createPublicStudiesRequestParams)("trending")),
                        v = (null === (l = this._initIndicatorsPromises) || void 0 === l ? void 0 : l.editorsPicksStudiesPromise) || (0,
                            r.fetchEditorsPicksStudies)(),
                        b = null === (d = this._initIndicatorsPromises) || void 0 === d ? void 0 : d.addonsPromise,
                        y = (null === (u = this._initIndicatorsPromises) || void 0 === u ? void 0 : u.pinePermissionsPromise) || o.PinePerm.listScripts(),
                        w = (null === (h = this._initIndicatorsPromises) || void 0 === h ? void 0 : h.financialsPromise) || c(),
                        S = (0, n.requestUserScripts)();
                    return this._initIndicatorsPromises = {
                        javaStudiesPromise: _,
                        userScriptsPromise: S,
                        standardScriptsPromise: g,
                        candlestickScriptsPromise: p,
                        publicPineStudiesPromise: m,
                        trendingStudiesPromise: f,
                        addonsPromise: b,
                        pinePermissionsPromise: y,
                        editorsPicksStudiesPromise: v,
                        financialsPromise: w
                    }, this._initIndicatorsPromises
                }
            }
        },
        604061: (e, t, i) => {
            "use strict";
            i.d(t, {
                fetchPublicPineStudies: () => r,
                fetchEditorsPicksStudies: () => o,
                fetchLoadMorePublicStudies: () => s,
                createPublicStudiesRequestParams: () => a,
                requestBuiltInJavaStudies: () => l
            });
            var n = i(890740);
            async function r(e) {
                return (await (0, n.fetch)(`/pubscripts-library/?${e}`)).json()
            }
            async function o() {
                return (await (0, n.fetch)("/pubscripts-library/editors-picks/")).json()
            }
            async function s(e) {
                return (await (0, n.fetch)(e)).json()
            }

            function a(e) {
                const t = {
                    offset: 0,
                    count: 20,
                    type: 0,
                    sort: e
                };
                return new URLSearchParams(Object.entries(t)).toString()
            }

            function l(e) {
                return e.activeChartWidget.value().metaInfoRepository().findAllJavaStudies()
            }
        },
        40541: (e, t, i) => {
            "use strict";
            i.d(t, {
                DEFAULT_CATEGORY_SETTINGS: () => n,
                HISTORIC_VALUES_POSTFIX: () => r,
                PERIOD_POSTFIXES: () => o
            });
            const n = {
                    "income statements": {
                        defaultItems: ["total_revenue", "gross_profit", "oper_income", "pretax_income", "net_income"],
                        additionalField: 1,
                        displayGroups: !1
                    },
                    "balance sheet": {
                        defaultItems: ["total_assets", "total_liabilities"],
                        additionalField: 0,
                        displayGroups: !1
                    },
                    "cash flow": {
                        defaultItems: ["cash_f_operating_activities", "cash_f_investing_activities", "cash_f_financing_activities"],
                        additionalField: 1,
                        displayGroups: !1
                    },
                    statistics: {
                        defaultItems: ["price_earnings", "price_cash_flow"],
                        additionalField: 2,
                        displayGroups: !0
                    },
                    dividends: {
                        defaultItems: ["dps_common_stock_prim_issue", "dividends_yield"],
                        additionalField: 0,
                        displayGroups: !1
                    },
                    earnings: {
                        defaultItems: [],
                        additionalField: 0,
                        displayGroups: !1
                    }
                },
                r = "_h",
                o = ["_fy", "_fq", "_fh", "_ttm"]
        },
        304328: (e, t, i) => {
            "use strict";
            i.d(t, {
                getFinancialsData: () => h,
                isStatementsCategoryId: () => _,
                filterConfig: () => g,
                translateConfig: () => p,
                filterHiddenItems: () => m,
                toTree: () => f,
                sortByOrdinal: () => v,
                flattenTree: () => b,
                splitByCategory: () => y,
                createSortedCategoryList: () => w,
                filterCategoryList: () => S,
                getItemValuesFromQuotes: () => C,
                prepareEarningsData: () => D,
                getPercentChange: () => k,
                getAdditionalFieldPostfix: () => L,
                getIdWithoutPeriod: () => x,
                addOrRemoveIdFromSet: () => F,
                findParentsSet: () => N,
                getAdditionalFieldValue: () => W,
                valueFormatter: () => O,
                getIndicatorPagePath: () => M,
                getOtherAvailablePeriod: () => R,
                isPeriodAvailable: () => B
            });
            var n = i(650151),
                r = i(777754),
                o = i(890740),
                s = i(503246),
                a = i(436901),
                l = i(530254),
                c = i(610203),
                d = i(40541),
                u = i(199687);

            function h() {
                return (0, o.fetch)("/financial/fundamentals_config/", {
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "GET"
                }).then((e => e.json()))
            }

            function _(e) {
                return "balance sheet" === e || "income statements" === e || "cash flow" === e
            }

            function g(e) {
                return e.filter((e => !e.hidden && e.financialVisible))
            }

            function p(e) {
                return e.map((e => {
                    const {
                        name: t,
                        group: n,
                        ...o
                    } = e;
                    return { ...o,
                        name: r.t(t, {
                            context: "study"
                        }, i(168716)),
                        group: r.t(n, {
                            context: "study"
                        }, i(168716))
                    }
                }))
            }

            function m(e) {
                return e.filter((e => !e.hidden))
            }

            function f(e) {
                var t, i;
                const r = Symbol(),
                    o = {},
                    s = {},
                    a = [];
                for (const i of e) {
                    const e = (0, n.ensureDefined)(x(i.id)),
                        l = e,
                        c = x(i.parent),
                        d = null != c ? c : r;
                    d === r && a.push(l);
                    const u = o[l] = { ...i,
                        nestingLevel: -1,
                        idWithoutPeriod: e,
                        parentIdWithoutPeriod: c,
                        periodData: i.periodData || [],
                        shortTitle: i.shortTitle || ""
                    };
                    (s[d] = null !== (t = s[d]) && void 0 !== t ? t : []).push(u)
                }
                for (const t of e) {
                    const e = (0, n.ensureDefined)(x(t.id));
                    o[e].children = s[e], delete s[e]
                }(0, n.assert)(0 === Object.keys(s).length);
                let l = 0;
                for (; a.length > 0 && l < e.length;) {
                    l++;
                    const e = o[(0, n.ensureDefined)(a.shift())],
                        t = e.parentIdWithoutPeriod;
                    e.nestingLevel = t ? o[t].nestingLevel + 1 : 0, null === (i = e.children) || void 0 === i || i.forEach((e => {
                        a.push(e.idWithoutPeriod)
                    }))
                }
                return s[r]
            }

            function v(e) {
                const t = [...e];
                return t.sort(((e, t) => e.ordinal - t.ordinal)), t.forEach((e => {
                    e.children && (e.children = v(e.children))
                })), t
            }

            function b(e, t, i) {
                let n = [];
                return e.forEach((e => {
                    if (!e.children || !e.children.length) return void(n = [...n, e]);
                    const r = i ? e.children.filter(i) : e.children;
                    if (!r.length) return void(n = [...n, { ...e,
                        children: void 0
                    }]);
                    if (!!t && t(e)) return void(n = [...n, e]);
                    const o = b(r, t, i);
                    n = [...n, e, ...o]
                })), n
            }

            function y(e) {
                const t = [...e],
                    i = {
                        dividends: []
                    };
                return t.forEach((e => {
                    const t = e.category.toLowerCase();
                    i[t] ? i[t].push(e) : i[t] = [e]
                })), i
            }

            function w(e) {
                if (!e.length) return {};
                const t = y(f(function(e) {
                        const t = new Map;
                        for (const i of e) {
                            const e = (0, n.ensureDefined)(x(i.id)),
                                r = e && t.get(e);
                            if (r)(0, n.ensureDefined)(r.periodData).push({
                                period: i.period
                            });
                            else {
                                const r = { ...i,
                                    idWithoutPeriod: (0, n.ensureDefined)(x(i.id)),
                                    nestingLevel: -1,
                                    periodData: [],
                                    shortTitle: ""
                                };
                                r.periodData = [{
                                    period: i.period
                                }], t.set(e, r)
                            }
                        }
                        return Array.from(t.values())
                    }(e))),
                    i = {};
                return Object.entries(t).forEach((([e, t]) => {
                    i[e] = function(e) {
                        const t = v(e),
                            i = new Map;
                        return t.forEach((e => {
                            const {
                                group: t,
                                ordinal: n
                            } = e, r = i.get(t);
                            (void 0 === r || r > n) && i.set(t, n)
                        })), t.sort(((e, t) => (0, n.ensureDefined)(i.get(e.group)) - (0, n.ensureDefined)(i.get(t.group)) || e.ordinal - t.ordinal)), t
                    }(t)
                })), i
            }

            function S(e, t, i) {
                function n(e, t) {
                    const {
                        children: r,
                        ...o
                    } = e;
                    if (r) {
                        const e = r.map((e => n(e, t))).filter(Boolean);
                        if (e.length) return { ...o,
                            children: e
                        }
                    }
                    return e.name.toLowerCase().includes(t.toLowerCase()) && e.periodData.find((e => e.period === i)) ? { ...o,
                        children: void 0
                    } : null
                }
                return e.map((e => n(e, t))).filter(Boolean)
            }

            function C(e, t, i = 0, n, r, o = a.DEFAULT_MAX_DATA_ARRAY_LENGTH) {
                const s = `${x(e)}_${n.toLowerCase()}`;
                let l = new Array(o).fill(null),
                    u = [];
                if (t) {
                    const e = t[s + d.HISTORIC_VALUES_POSTFIX];
                    if (e) {
                        const t = function(e, t, i, n) {
                            const r = e.length > i,
                                o = e.slice(0, i).reverse(),
                                s = [];
                            if (n) {
                                const i = e.slice(0, e.length).reverse();
                                i.forEach(((e, n) => {
                                    if (0 === n && r) return;
                                    if (0 === n) return void s.push(NaN);
                                    let o;
                                    if (t !== c.PeriodId.Year) {
                                        const r = n - (t === c.PeriodId.Quarter ? 4 : 2);
                                        o = i[r] ? k(Number(i[r]), Number(e)) : NaN
                                    } else o = k(Number(i[n - 1]), Number(e));
                                    s.push(o)
                                }))
                            }
                            return {
                                values: o,
                                changes: s.slice(-i)
                            }
                        }(e, n, o, r);
                        l = t.values, t.changes && (u = t.changes)
                    }
                    if (0 !== i && 3 !== i) {
                        const e = t[x(s) + L(i)] || null,
                            n = s.endsWith("_fq"),
                            o = 1 === i;
                        return {
                            values: l,
                            changes: r ? u : void 0,
                            additional: e,
                            additionalChange: !r || o && n ? void 0 : k(Number(l[l.length - 1]), Number(e))
                        }
                    }
                }
                return {
                    values: l,
                    changes: r ? u : void 0,
                    additional: 0 === i ? void 0 : null
                }
            }

            function P(e) {
                return null === e.Estimate && null === e.Actual
            }

            function A(e, t) {
                const i = e.length - 1;
                let n = t ? i : 0;
                const r = t ? [...e].reverse().entries() : e.entries();
                for (const [e, t] of r)
                    if (!P(t)) {
                        n = e;
                        break
                    }
                return t ? i - n : n
            }

            function E(e) {
                if (!e || !e.length) return {
                    estimateStartIndex: -1,
                    items: []
                };
                if (! function(e) {
                        return e.every((e => null !== e.FiscalPeriod))
                    }(e) || e.every(P)) return {
                    estimateStartIndex: -1,
                    items: []
                };
                const t = [...e].sort(((e, t) => e.FiscalPeriod > t.FiscalPeriod ? 1 : -1));
                let i = null;
                for (let e = t.length - 1; e--; e >= 0) {
                    if (t[e].IsReported) {
                        i = e;
                        break
                    }
                }
                const n = null !== i ? i + 1 : A(t, !0) - 4,
                    r = Math.max(0, n - 8),
                    o = Math.min(t.length, n + 4),
                    s = t.slice(r, o),
                    a = A(s, !1);
                return {
                    estimateStartIndex: n < 8 ? n - a : 8 - a,
                    items: s.slice(a)
                }
            }

            function I(e, t) {
                if (e.reported.push(t.Actual), e.estimate.push(t.Estimate), null !== t.Actual && null !== t.Estimate) {
                    const i = (t.Actual - t.Estimate) / Math.abs(t.Estimate) * 100;
                    e.surprise.push(isFinite(i) ? i : null)
                } else e.surprise.push(null);
                return e.periods.push(t.FiscalPeriod), e
            }
            const T = {
                [c.PeriodId.Year]: "_fy",
                [c.PeriodId.HalfYear]: "_fh",
                [c.PeriodId.Quarter]: "_fq"
            };

            function D(e, t) {
                if (!e) return null;
                const i = T[t],
                    n = "earnings" + i + d.HISTORIC_VALUES_POSTFIX,
                    r = "revenues" + i + d.HISTORIC_VALUES_POSTFIX,
                    {
                        items: o,
                        estimateStartIndex: s
                    } = E(e[n]),
                    a = o.reduce(I, {
                        reported: [],
                        estimate: [],
                        surprise: [],
                        periods: []
                    }),
                    {
                        items: l
                    } = E(e[r]),
                    c = l.reduce(I, {
                        reported: [],
                        estimate: [],
                        surprise: [],
                        periods: []
                    }),
                    u = e => !e.reported.length && !e.estimate.length;
                return {
                    earnings: u(a) ? null : a,
                    revenues: u(c) ? null : c,
                    estimateStartIndex: s
                }
            }

            function k(e, t) {
                if (0 === e) return NaN;
                return Number(((t - e) / Math.abs(e) * 100).toFixed(2))
            }

            function L(e) {
                switch (e) {
                    case 2:
                        return "_current";
                    case 1:
                        return "_ttm"
                }
                return ""
            }

            function x(e) {
                if (e)
                    for (let t = 0; t < d.PERIOD_POSTFIXES.length; t++) {
                        const i = d.PERIOD_POSTFIXES[t];
                        if (e.endsWith(i)) return e.slice(0, -i.length)
                    }
                return e
            }

            function F(e, t) {
                const i = new Set(t);
                return i.has(e) ? i.delete(e) : i.add(e), i
            }

            function N(e, t) {
                let i = new Set;
                const n = Symbol();
                for (let r = 0; r < e.length; r++) {
                    const {
                        idWithoutPeriod: o,
                        parentIdWithoutPeriod: s = n,
                        children: a
                    } = e[r];
                    if (null == a ? void 0 : a.length) {
                        const e = N(a, t);
                        i = new Set([...Array.from(i), ...Array.from(e)])
                    }(t.has(o) || i.size > 0) && s !== n && i.add(s)
                }
                return i
            }

            function W(e) {
                switch (e) {
                    case 2:
                        return r.t(null, void 0, i(349614));
                    case 1:
                        return r.t(null, void 0, i(794236));
                    case 3:
                        return "";
                    case 0:
                        return
                }
            }

            function O(e) {
                return "string" == typeof e ? e : null === e ? "—" : (0, l.format)(e, "numbers")
            }

            function M(e, t) {
                const i = e.toLowerCase();
                if (!_(i) && "statistics" !== i) throw new Error("Bad item category id");
                return `${s.pathsByCategoryId[i]}${t.replace(/_/g,"-")}/`
            }

            function R(e, t) {
                const i = (0, u.PERIODS)(t);
                return e && B(e, t) ? (0, n.ensureDefined)(i.find((t => t.id !== e))).id : (0, u.DEFAULT_PERIOD)(t)
            }

            function B(e, t) {
                return (0, u.PERIODS)(t).some((t => t.id === e))
            }
        },
        440498: (e, t, i) => {
            "use strict";
            i.d(t, {
                DELETED_SYMBOLS_LIST_ID: () => a,
                isDeletedSymbolsList: () => c,
                DeletedSymbolsList: () => d
            });
            var n = i(49437),
                r = i(738600);
            const o = "deleted_symbols_list",
                s = "is_deleted_symbols_list_active",
                a = "deleted_symbols_list_id",
                l = "There was an error during attempt to set local storage value",
                c = e => e === a;
            class d {
                constructor() {
                    this._logError = (e, t) => {
                        e instanceof Error ? r.logger.logError(e.message) : r.logger.logError(t)
                    }
                }
                createList(e) {
                    this._setList(e)
                }
                removeList() {
                    try {
                        n.TVLocalStorage.removeItem(o)
                    } catch (e) {
                        this._logError(e, "There was an error during local storage item removal")
                    }
                }
                addSymbols(e) {
                    const t = this.getList();
                    if (!t) return;
                    const i = new Set(t.symbols);
                    for (const t of e) i.add(t);
                    const n = Array.from(i);
                    n.length > 100 ? t.symbols = n.reverse().slice(0, 100).reverse() : t.symbols = n, this._setList(t)
                }
                removeSymbols(e) {
                    const t = this.getList();
                    if (!t) return;
                    const i = new Set(t.symbols);
                    for (const t of e) i.delete(t);
                    t.symbols = Array.from(i), this._setList(t)
                }
                replaceSymbols(e) {
                    const t = this.getList();
                    t && (t.symbols = e, this._setList(t))
                }
                getIsActive() {
                    try {
                        return "true" === n.TVLocalStorage.getItem(s)
                    } catch (e) {
                        return this._logError(e, l), !1
                    }
                }
                setIsActive(e) {
                    try {
                        n.TVLocalStorage.setItem(s, String(e))
                    } catch (e) {
                        this._logError(e, l)
                    }
                }
                getList() {
                    try {
                        const e = n.TVLocalStorage.getItem(o);
                        return e ? JSON.parse(e) : null
                    } catch (e) {
                        return this._logError(e, "There was an error during attempt to get local storage value"), null
                    }
                }
                _setList(e) {
                    try {
                        n.TVLocalStorage.setItem(o, JSON.stringify(e))
                    } catch (e) {
                        this._logError(e, l)
                    }
                }
            }
        },
        738600: (e, t, i) => {
            "use strict";
            i.d(t, {
                logger: () => n
            });
            const n = (0, i(272001).getLogger)("Platform.Model.Watchlist")
        },
        889267: (e, t, i) => {
            "use strict";
            i.d(t, {
                symbolTokenEscapeRe: () => s,
                tokenize: () => c
            });
            var n = i(495046),
                r = i(173777);
            const o = n.enabled("charting_library_base") ? /(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF^])(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!:.&])*|'.+?'/ : /(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF])(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&])*|'.+?'/,
                s = /[+\-/*]/,
                a = {
                    number: /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
                    incompleteNumber: /\./,
                    symbol: o,
                    incompleteSymbol: /'[^']*/,
                    separatorPrefix: r.SEPARATOR_PREFIX,
                    openBrace: "(",
                    closeBrace: ")",
                    plus: "+",
                    minus: "-",
                    multiply: "*",
                    divide: "/",
                    power: "^",
                    whitespace: /[\0-\x20\s]+/,
                    unparsed: null
                },
                l = new RegExp(Object.values(a).map((e => {
                    return null === e ? "" : `(${"string"==typeof e?(t=e,t.replace(/[\^$()[\]{}*+?|\\]/g,"\\$&")):e.source})`;
                    var t
                })).filter((e => "" !== e)).concat(".").join("|"), "g");

            function c(e) {
                if (!e) return [];
                const t = [],
                    i = Object.keys(a);
                let n;
                for (; n = l.exec(e);) {
                    let e = !1;
                    for (let r = i.length; r--;)
                        if (n[r + 1]) {
                            i[r] && t.push({
                                value: n[r + 1],
                                type: i[r],
                                precedence: 0,
                                offset: n.index
                            }), e = !0;
                            break
                        }
                    e || t.push({
                        value: n[0],
                        type: "unparsed",
                        precedence: 0,
                        offset: n.index
                    })
                }
                return t
            }
        },
        568515: e => {
            e.exports = {
                "css-value-header-toolbar-height": "38px"
            }
        },
        284187: e => {
            e.exports = {
                "top-left-button-height": "38px",
                "top-left-button-width": "52px"
            }
        },
        521978: e => {
            e.exports = {
                "top-left-button-height": "38px",
                "top-left-button-width": "52px",
                topLeftButton: "topLeftButton-_EJh9u3N",
                stub: "stub-_EJh9u3N"
            }
        },
        905130: (e, t, i) => {
            "use strict";
            i.d(t, {
                ChartSession: () => a
            });
            var n = i(869403),
                r = i.n(n),
                o = i(531636),
                s = i(758337);
            class a extends o.Session {
                constructor(e, t = !1) {
                    super(e, "cs", !1), this._sessionDisabled = !1, this._handler = null, this._criticalError = new(r()), this._symbolResolveMap = new Map, this._disableStatistics = t
                }
                destroy() {
                    this._criticalError.destroy(), this._handler = null, this._symbolResolveMap.clear(), super.destroy()
                }
                serverTimeOffset() {
                    return this._getChartApi().serverTimeOffset()
                }
                switchTimezone(e) {
                    return this._getChartApi().switchTimezone(this.sessionId(), e)
                }
                defaultResolutions() {
                    return this._getChartApi().defaultResolutions()
                }
                availableCurrencies() {
                    return this._getChartApi().availableCurrencies()
                }
                availableUnits() {
                    return this._getChartApi().availableUnits()
                }
                resolveSymbol(e, t, i) {
                    if (this._symbolResolveMap.has(t)) {
                        const [e, n] = this._symbolResolveMap.get(t);
                        return Array.isArray(n) ? n.push(i) : n.then(i), e
                    } {
                        const n = [i];
                        return this._getChartApi().resolveSymbol(this.sessionId(), e, t, (i => {
                            "symbol_error" === i.method ? this._symbolResolveMap.delete(t) : this._symbolResolveMap.set(t, [e, Promise.resolve(i)]), n.forEach((e => e(i)))
                        })), this._symbolResolveMap.set(t, [e, n]), e
                    }
                }
                requestFirstBarTime(e, t, i) {
                    return this._getChartApi().requestFirstBarTime(this.sessionId(), e, t, i)
                }
                createSeries(e, t, i, n, r, o, s) {
                    return this._getChartApi().createSeries(this.sessionId(), e, t, i, n, r, o, s)
                }
                modifySeries(e, t, i, n, r, o) {
                    return this._getChartApi().modifySeries(this.sessionId(), e, t, i, n, r, o)
                }
                removeSeries(e) {
                    return !!this.isConnected().value() && this._getChartApi().removeSeries(this.sessionId(), e)
                }
                requestMoreData(e, t, i) {
                    return "number" == typeof e ? this._getChartApi().requestMoreData(this.sessionId(), e) : this._getChartApi().requestMoreData(this.sessionId(), e, t, i)
                }
                requestMoreTickmarks(e, t, i) {
                    return (0, s.isNumber)(e) ? this._getChartApi().requestMoreTickmarks(this.sessionId(), e) : this._getChartApi().requestMoreTickmarks(this.sessionId(), e, t, i)
                }
                requestMetadata(e, t) {
                    this._getChartApi().requestMetadata(this.sessionId(), e, t)
                }
                canCreateStudy(e) {
                    return this._getChartApi().canCreateStudy(e)
                }
                createStudy(e, t, i, n, r, o, s) {
                    return this._getChartApi().createStudy(this.sessionId(), e, t, i, n, r, o, s)
                }
                rebindStudy(e, t, i, n, r, o, s) {
                    return this._getChartApi().rebindStudy(this.sessionId(), e, t, i, n, r, o, s)
                }
                modifyStudy(e, t, i, n, r) {
                    return this._getChartApi().modifyStudy(this.sessionId(), e, t, i, n, r)
                }
                removeStudy(e, t) {
                    return this._getChartApi().removeStudy(this.sessionId(), e, t)
                }
                createPointset(e, t, i, n, r, o) {
                    return this._getChartApi().createPointset(this.sessionId(), e, t, i, n, r, o)
                }
                modifyPointset(e, t, i, n) {
                    return this._getChartApi().modifyPointset(this.sessionId(), e, t, i, n)
                }
                removePointset(e) {
                    return this._getChartApi().removePointset(this.sessionId(), e)
                }
                setVisibleTimeRange(e, t, i, n, r, o) {
                    0
                }
                criticalError() {
                    return this._criticalError
                }
                connect(e = null) {
                    null !== e && (this._handler = e), this._symbolResolveMap.clear(), super.connect()
                }
                setHandler(e) {
                    this._handler = e
                }
                connected() {
                    return this.isConnected().value() && !this._sessionDisabled
                }
                disable() {
                    this._sessionDisabled = !0
                }
                chartApi() {
                    return this._getChartApi()
                }
                _sendCreateSession() {
                    Object.keys(this).forEach((e => {
                        /^(s|st|symbol_)\d+$/.test(e) && delete this[e]
                    })), this._getChartApi().chartCreateSession(this.sessionId(), this._disableStatistics)
                }
                _sendRemoveSession() {
                    this._getChartApi().chartDeleteSession(this.sessionId())
                }
                _onMessage(e) {
                    this._handler && this._handler(e)
                }
                _onCriticalError(e, t) {
                    this._criticalError.fire(e, t), super._onCriticalError(e, t)
                }
            }
        },
        819593: (e, t, i) => {
            "use strict";
            i.d(t, {
                combineWithFilteredUpdate: () => s,
                combine: () => a
            });
            var n = i(988411),
                r = i.n(n);

            function o(e, t, ...i) {
                const n = (...t) => e(...t.map((e => e.value()))),
                    o = new(r())(n(...i)),
                    s = () => {
                        t(...i.map((e => e.value()))) && o.setValue(n(...i))
                    },
                    a = i.map((e => e.spawn()));
                for (const e of a) e.subscribe(s);
                return o.readonly().spawn((() => a.forEach((e => e.destroy()))))
            }

            function s(e, t, ...i) {
                return o(e, t, ...i)
            }

            function a(e, ...t) {
                return o(e, (() => !0), ...t)
            }
        },
        569689: (e, t, i) => {
            "use strict";
            i.d(t, {
                TOOLBAR_WIDTH_EXPANDED: () => n
            });
            const n = 52
        },
        130618: (e, t, i) => {
            "use strict";
            i.d(t, {
                DrawingToolbarBootloader: () => a
            });
            var n = i(259316),
                r = i(569689),
                o = i(510013),
                s = i(477600);
            class a extends o.ChunkLoader {
                constructor(e) {
                    super(), this._opts = e, n.isDrawingToolbarVisible.value() && (this._opts.resizerBridge.negotiateWidth(r.TOOLBAR_WIDTH_EXPANDED), this._opts.resizerBridge.container.value().appendChild((0, s.createStubElem)()))
                }
                _startLoading() {
                    return Promise.all([i.e(40610), i.e(88230), i.e(18619), i.e(81910), i.e(7624), i.e(59333), i.e(71140), i.e(6092), i.e(24908), i.e(27480), i.e(44412), i.e(94884), i.e(73647), i.e(13626), i.e(56879), i.e(31834), i.e(73813), i.e(75514), i.e(30979), i.e(15640), i.e(91890), i.e(84478), i.e(75499), i.e(12878)]).then(i.bind(i, 46729)).then((e => new e.DrawingToolbarRenderer(this._opts.resizerBridge.container.value(), { ...this._opts
                    })))
                }
            }
        },
        259316: (e, t, i) => {
            "use strict";
            i.d(t, {
                isDrawingToolbarVisible: () => c
            });
            var n = i(62802),
                r = i(495046),
                o = i(988411),
                s = i.n(o);
            const a = !r.enabled("hide_left_toolbar_by_default"),
                l = n.getBool("ChartDrawingToolbarWidget.visible", a),
                c = new(s())(l)
        },
        740026: (e, t, i) => {
            "use strict";
            i.d(t, {
                HeaderToolbarBootloader: () => s
            });
            var n = i(504355),
                r = i(477600),
                o = i(510013);
            class s extends o.ChunkLoader {
                constructor(e, t) {
                    super(), this._toolsBootloader = e, this._headerProps = t, this._headerProps.resizerBridge.negotiateHeight(n.HEADER_TOOLBAR_HEIGHT_EXPANDED), this._headerProps.resizerBridge.container.value().appendChild((0, r.createStubElem)())
                }
                _startLoading() {
                    return Promise.all([this._toolsBootloader.load(), this._loadHeaderToolbar()]).then((([e, t]) => new t(this._headerProps.resizerBridge.container.value(), { ...this._headerProps,
                        tools: e
                    })))
                }
                _loadHeaderToolbar() {
                    return Promise.all([i.e(28955), i.e(8110), i.e(75514), i.e(86918), i.e(63005)]).then(i.bind(i, 670120)).then((e => e.HeaderToolbarRenderer))
                }
            }
        },
        504355: (e, t, i) => {
            "use strict";
            i.d(t, {
                HEADER_TOOLBAR_HEIGHT_EXPANDED: () => r,
                HEADER_TOOLBAR_HEIGHT_COLLAPSED: () => o
            });
            var n = i(568515);
            const r = parseInt(n["css-value-header-toolbar-height"]),
                o = 3
        },
        818653: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                AutoSaveEnabledService: () => r
            });
            var n = i(2741);
            class r extends n.CommonJsonStoreService {
                constructor(e, t) {
                    super(e, t, "AUTO_SAVE_ENABLED_CHANGED", "Chart.autoSaveEnabled", !0)
                }
            }
        },
        479164: (e, t, i) => {
            "use strict";
            i.d(t, {
                FavoriteStudyTemplateService: () => r
            });
            var n = i(2741);
            class r extends n.CommonJsonStoreService {
                constructor(e, t) {
                    super(e, t, "FAVORITE_STUDY_TEMPLATES_CHANGED", "StudyTemplates.quicks", [])
                }
                remove(e) {
                    this.set(this.get().filter((t => t !== e)))
                }
            }
        },
        529306: (e, t, i) => {
            "use strict";
            i.d(t, {
                TopLeftButtonBootloader: () => l
            });
            var n = i(510013),
                r = i(284187);
            const o = parseInt(r["top-left-button-height"]),
                s = parseInt(r["top-left-button-width"]);
            var a = i(521978);
            class l extends n.ChunkLoader {
                constructor(e) {
                    super(), this._props = e, this._props.resizerBridge.negotiateHeight(o), this._props.resizerBridge.negotiateWidth(s), this._props.resizerBridge.container.value().appendChild(function() {
                        const e = document.createElement("div");
                        return e.classList.add(a.topLeftButton, a.stub), e
                    }())
                }
                _startLoading() {
                    return this._loadRenderer().then((e => new e(this._props.resizerBridge.container.value(), this._props)))
                }
                _loadRenderer() {
                    return Promise.all([i.e(63918), i.e(88230), i.e(7624), i.e(59333), i.e(6092), i.e(43082), i.e(36720), i.e(85931), i.e(68825), i.e(53795), i.e(41770), i.e(26024), i.e(24013), i.e(33853), i.e(8580), i.e(27631), i.e(68699), i.e(75514), i.e(36935), i.e(26523), i.e(39863)]).then(i.bind(i, 850249)).then((e => e.TopLeftButtonRenderer))
                }
            }
        },
        298686: (e, t, i) => {
            "use strict";

            function n(e) {
                return e.getAll().some((e => e.isInitialized()))
            }

            function r(e, t) {
                const i = e.getAll(),
                    n = () => {
                        t(), i.forEach((e => {
                            e.chartWidgetInitialized().unsubscribe(null, n)
                        }))
                    };
                i.forEach((e => {
                    e.chartWidgetInitialized().subscribe(null, n, !0)
                }))
            }
            i.d(t, {
                isAnyChartWidgetInitialized: () => n,
                waitAnyChartWidgetInitialized: () => r
            })
        },
        412611: (e, t, i) => {
            "use strict";
            i.d(t, {
                getFavoriteDrawingToolbarPromise: () => s,
                createFavoriteDrawingToolbar: () => a
            });
            var n = i(504355);
            let r = null,
                o = null;

            function s() {
                return o
            }

            function a() {
                null === o && (o = Promise.all([i.e(30697), i.e(88230), i.e(18619), i.e(7624), i.e(59333), i.e(71140), i.e(85761), i.e(6092), i.e(54819), i.e(68825), i.e(105), i.e(45639), i.e(288), i.e(8009), i.e(8819), i.e(44412), i.e(93272), i.e(79105), i.e(60977), i.e(15602), i.e(56879), i.e(43443), i.e(75514), i.e(29594), i.e(91622), i.e(91890), i.e(84478), i.e(27284), i.e(22306)]).then(i.bind(i, 509184)).then((({
                    FavoriteDrawingToolbar: e
                }) => (r = null !== r ? r : new e({
                    left: window.innerWidth / 2,
                    top: n.HEADER_TOOLBAR_HEIGHT_EXPANDED + 61
                }), r))))
            }
        },
        967687: (e, t, i) => {
            "use strict";
            i.d(t, {
                checkAuthBeforeSaveLoad: () => r
            });
            var n = i(495046);

            function r(e, t) {
                n.enabled("saveload_requires_authentication") ? window.runOrSignIn(e, t) : e()
            }
        },
        624378: (e, t, i) => {
            "use strict";
            i.d(t, {
                LoadChartService: () => l
            });
            var n = i(495046),
                r = i(472664),
                o = i(967687),
                s = i(633457),
                a = i(890740);
            class l extends s.DialogRenderer {
                constructor(e = null) {
                    super(), this._chartWidgetCollection = null, this._promise = null, this._dialog = null, this._subscribe = e => {
                        this._setVisibility(e)
                    }, this._getChartEntry = e => ({
                        id: e.id,
                        url: e.url,
                        title: e.name,
                        symbol: e.short_symbol,
                        interval: e.interval,
                        toolsCount: 0,
                        modified: e.modified_iso,
                        favorite: e.favorite,
                        active: () => this._isActiveChart(e.id),
                        openAction: () => r.backend.loadChart(e),
                        deleteAction: () => r.backend.removeChart(e.image_url).then((() => this._deleteChart(e.id))),
                        favoriteAction: t => this._changeFavoriteState(t, e.id, e.image_url)
                    }), this._updateFavorites = e => {
                        var t;
                        null === (t = this._favoriteChartsService) || void 0 === t || t.set(e)
                    }, this._isActiveChart = e => null !== this._chartWidgetCollection && e === this._chartWidgetCollection.metaInfo.id.value(), this._deleteChart = e => {
                        this._isActiveChart(e) && (n.enabled("saveload_storage_customization") ? null !== this._chartWidgetCollection && this._chartWidgetCollection.clearChartMetaInfo() : location.href = "/chart/" + location.search)
                    }, this._chartWidgetCollection = e
                }
                showLoadDialog() {
                    (0, o.checkAuthBeforeSaveLoad)(this._showLoadDialog.bind(this), {
                        source: "Load chart",
                        sourceMeta: "Chart"
                    })
                }
                show() {
                    this.showLoadDialog()
                }
                hide() {
                    var e, t;
                    null === (e = this._dialog) || void 0 === e || e.hide(), null === (t = this._dialog) || void 0 === t || t.visible().unsubscribe(this._subscribe)
                }
                _showLoadDialog() {
                    (n.enabled("saveload_requires_authentication") && !window.is_authenticated ? Promise.resolve([]) : r.backend.getCharts()).then((e => e.map(this._getChartEntry))).then((e => {
                        const t = this._promise = Promise.all([i.e(88230), i.e(81910), i.e(86256), i.e(7624), i.e(59333), i.e(91901), i.e(1428), i.e(1011), i.e(52701), i.e(48484), i.e(82098), i.e(89619), i.e(8009), i.e(44412), i.e(20803), i.e(72122), i.e(7107), i.e(40784), i.e(83168), i.e(52774), i.e(75514), i.e(30979), i.e(90890), i.e(745), i.e(56355), i.e(75009)]).then(i.bind(i, 409742)).then((i => {
                            if (this._promise === t) {
                                this._dialog && (this._dialog.hide(), this._dialog.visible().unsubscribe(this._subscribe));
                                const t = {
                                    charts: e,
                                    favoriteChartsService: this._favoriteChartsService,
                                    chartWidgetCollection: this._chartWidgetCollection
                                };
                                this._dialog = new i.LoadChartDialogRenderer(t), this._dialog.visible().subscribe(this._subscribe), this._dialog.show()
                            }
                        }))
                    }))
                }
                async _changeFavoriteState(e, t, i) {
                    const n = Boolean(e[t]);
                    await (0, a.fetch)(`/my-charts/${i}/change-favorite-state/`, {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        method: "POST",
                        body: JSON.stringify({
                            favorite: n
                        })
                    })
                }
            }
        },
        797102: (e, t, i) => {
            "use strict";
            i.d(t, {
                SaveChartService: () => F
            });
            var n = i(495046),
                r = i(988411),
                o = i.n(r),
                s = i(818653),
                a = i(226722),
                l = i(62802),
                c = i(251954),
                d = i(75733),
                u = i(967687),
                h = i(125226);
            i(984919);
            const _ = n.enabled("atsv2s");
            var g = i(777754),
                p = i(890740),
                m = i(552279),
                f = i(229534),
                v = i(503595),
                b = i(314802);
            const y = g.t(null, void 0, i(439467)),
                w = g.t(null, void 0, i(589117)),
                S = g.t(null, void 0, i(552988));

            function C(e, t = {}) {
                window.runOrSignIn((() => {
                    (0, v.asyncWindowOpen)(async function(e, t) {
                        let i, n;
                        try {
                            n = await (0, p.fetch)(`/charts/${e}/clone/`, {
                                method: "POST",
                                body: JSON.stringify(t),
                                credentials: "include"
                            });
                            const r = n.headers.get("location");
                            if (n.ok && r) return (0, b.urlWithMobileAppParams)(r);
                            i = (await n.json()).code
                        } catch (e) {}
                        "count_limit" === i || "login_required" === i ? (0, m.reloginOrGoPro)({
                            feature: "savedChartsLimit"
                        }) : n || !1 !== navigator.onLine ? n && n.status >= 500 || "feature_disabled" === i ? (0, f.showErrorDialog)({
                            content: w
                        }) : (0, f.showErrorDialog)({
                            content: y
                        }) : (0, f.showErrorDialog)({
                            content: S
                        });
                        return
                    }(e, t))
                }), {
                    source: "Clone_chart_layout"
                })
            }
            var P = i(472664),
                A = i(632446),
                E = i(833813);
            async function I() {
                var e;
                if (!window.is_authenticated) return !1;
                if (!n.enabled("saved_charts_count_restriction")) return !0;
                const t = null === (e = (0, A.getConfig)(E.ProductFeatures.CHART_STORAGE)) || void 0 === e ? void 0 : e.limit;
                if (void 0 === t || t <= 0) return !1;
                try {
                    return t > await new Promise(P.backend.getChartsCount)
                } catch (e) {
                    return !1
                }
            }
            var T = i(779923);
            class D {
                constructor(e, t, i) {
                    this._visibility = new(o())(!1), this._chartWidgetCollection = e, this._doSave = t, this._doLoad = i
                }
                hide() {
                    var e;
                    null === (e = this._hide) || void 0 === e || e.call(this), this._visibility.setValue(!1)
                }
                visible() {
                    return this._visibility.readonly()
                }
                _showRenameDialog(e, t, i, n) {
                    return (0, T.showRename)({
                        title: this._renameDialogTitle(),
                        text: this._renameDialogText(),
                        maxLength: 64,
                        initValue: e,
                        onRename: async e => {
                            this._renameActionHandler(e, t, i, n)
                        },
                        onClose: () => this._visibility.setValue(!1)
                    })
                }
                _doSaveCurrentLayout(e, t, i, n) {
                    const r = this._chartWidgetCollection.metaInfo.name.value();
                    this._chartWidgetCollection.metaInfo.name.setValue(e), this._doSave(t, i, (() => {
                        this._chartWidgetCollection.metaInfo.name.setValue(r), null == n || n()
                    }))
                }
                _doOverwriteExistingLayout(e, t, i, n, r) {
                    const o = this._chartWidgetCollection.metaInfo.name.value();
                    this._chartWidgetCollection.metaInfo.id.setValue(e), this._chartWidgetCollection.metaInfo.name.setValue(t), this._doSave(i, n, (() => {
                        this._chartWidgetCollection.metaInfo.name.setValue(o), null == r || r()
                    }))
                }
            }
            class k extends D {
                cloneChart() {
                    this._cloneChart().then((() => this._visibility.setValue(!0)))
                }
                show() {
                    (0, u.checkAuthBeforeSaveLoad)((() => this.cloneChart()), {
                        source: "Clone chart"
                    })
                }
                _renameDialogTitle() {
                    return g.t(null, void 0, i(287898))
                }
                _renameDialogText() {
                    return g.t(null, void 0, i(724435)) + ":"
                }
                _renameActionHandler({
                    newValue: e,
                    dialogClose: t
                }) {
                    n.enabled("saveload_storage_customization") ? this._doCloneCurrentLayout(e) : C(this._chartWidgetCollection.metaInfo.uid.value(), {
                        name: e
                    }), t()
                }
                async _cloneChart() {
                    await new Promise((e => {
                        window.runOrSignIn(e, {
                            source: "Clone_chart_layout"
                        })
                    }));
                    const e = await I();
                    e ? e && (this._hide = await this._showRenameDialog(this._getInitialRenameDialogInput())) : (0, m.reloginOrGoPro)({
                        feature: "savedChartsLimit"
                    })
                }
                _doCloneCurrentLayout(e) {
                    const t = this._chartWidgetCollection.metaInfo.name.value();
                    this._chartWidgetCollection.metaInfo.uid.deleteValue(), this._chartWidgetCollection.metaInfo.id.deleteValue(), this._chartWidgetCollection.metaInfo.name.setValue(e), this._doSave(void 0, void 0, (() => {
                        this._chartWidgetCollection.metaInfo.name.setValue(t)
                    }))
                }
                _getInitialRenameDialogInput() {
                    return g.t(null, {
                        context: "ex: AAPL chart copy"
                    }, i(416493)).format({
                        title: this._chartWidgetCollection.metaInfo.name.value()
                    })
                }
            }
            class L extends D {
                show(e, t, i) {
                    this._saveNewChart(e, t, i).then((() => this._visibility.setValue(!0)))
                }
                _renameDialogTitle() {
                    return g.t(null, void 0, i(110520))
                }
                _renameDialogText() {
                    return g.t(null, void 0, i(724435)) + ":"
                }
                _renameActionHandler({
                    newValue: e,
                    dialogClose: t
                }, i, n, r) {
                    this._doSaveCurrentLayout(e, i, n, r), t()
                }
                async _saveNewChart(e, t, i) {
                    if (!await I()) return void(0, m.reloginOrGoPro)({
                        feature: "savedChartsLimit"
                    });
                    const n = this._chartWidgetCollection.metaInfo.name.value();
                    this._hide = await this._showRenameDialog(n, e, t, i)
                }
            }
            class x extends D {
                show() {
                    (0, u.checkAuthBeforeSaveLoad)((() => this._show()), {
                        source: "Rename chart"
                    })
                }
                _renameDialogTitle() {
                    return g.t(null, void 0, i(204142))
                }
                _renameDialogText() {
                    return g.t(null, void 0, i(724435)) + ":"
                }
                _renameActionHandler({
                    newValue: e,
                    dialogClose: t
                }) {
                    this._doSaveCurrentLayout(e), t()
                }
                async _show() {
                    await this._renameChart(), this._visibility.setValue(!0)
                }
                async _renameChart() {
                    const e = this._chartWidgetCollection.metaInfo.name.value();
                    this._hide = await this._showRenameDialog(e)
                }
            }
            class F {
                constructor(e, t) {
                    this._autosaveTimer = null, this._watchedAutoSaveEnabled = new(o()), this._toggleAutoSaveEnabledHandler = this._toggleAutoSaveEnabled.bind(this), this._doSave = (e, t, i, n) => {
                        const r = this._chartWidgetCollection;
                        void 0 !== e && e();
                        const o = this._chartChangesWatcher.changes();
                        this._chartSaver.saveChartSilently((e => {
                            var i;
                            i = r.metaInfo.uid.value(), "/chart/" === location.pathname && (location.href = "/chart/" + i), void 0 !== t && t(e)
                        }), (() => {
                            void 0 !== i && i()
                        }), {
                            autoSave: Boolean(n),
                            changes: o
                        })
                    }, this._doLoad = () => P.backend.getCharts(), this._chartWidgetCollection = e, this._chartSaver = t, this._createController = new L(e, this._doSave, this._doLoad), this._renameController = new x(e, this._doSave, this._doLoad), this._saveAsController = new k(e, this._doSave, this._doLoad), this._autoSaveEnabledSetting = new s.AutoSaveEnabledService(a.TVXWindowEvents, l), this._chartSaver.chartSizeLimitExceeded().subscribe(null, (() => {
                        const e = this._chartWidgetCollection.activeChartWidget.value();
                        Promise.all([i.e(43082), i.e(36956), i.e(4100), i.e(50251), i.e(85783), i.e(25977), i.e(88114), i.e(39694), i.e(60549), i.e(26820)]).then(i.bind(i, 502013)).then((({
                            showSizeLimitExceededDialog: t
                        }) => {
                            t(e)
                        }))
                    })), this._chartChangesWatcher = new d.ChartChangesWatcher(e, t, c), e.saveKeysPressed().subscribe(this, this.saveChartOrShowTitleDialog); {
                        const e = this._autoSaveEnabledSetting.get();
                        e && this._enableAutoSave(), this._watchedAutoSaveEnabled.setValue(e), this._watchedAutoSaveEnabled.subscribe(this._toggleAutoSaveEnabledHandler), this._autoSaveEnabledSetting.getOnChange().subscribe(this, this._autoSaveEnabledSettingHandler)
                    }
                }
                autoSaveEnabled() {
                    return this._watchedAutoSaveEnabled
                }
                destroy() {
                    this._watchedAutoSaveEnabled.unsubscribe(), delete this._watchedAutoSaveEnabled, this._autoSaveEnabledSetting.destroy(), delete this._autoSaveEnabledSetting
                }
                getCreateController() {
                    return this._createController
                }
                getRenameController() {
                    return this._renameController
                }
                getSaveAsController() {
                    return this._saveAsController
                }
                cloneChart() {
                    this._saveAsController.cloneChart()
                }
                saveChartAs() {
                    this._saveAsController.show()
                }
                renameChart() {
                    this._renameController.show()
                }
                saveNewChart(e, t, i) {
                    this._createController.show(e, t, i)
                }
                saveExistentChart(e, t, i) {
                    this._doSave(e, t, i)
                }
                changes() {
                    return this._chartChangesWatcher.changes()
                }
                hasChanges() {
                    return 0 !== this._chartChangesWatcher.changes()
                }
                saveChartOrShowTitleDialog(e, t, i) {
                    const n = window.saver.isSaveInProcess(),
                        r = this._chartChangesWatcher.hasChanges(),
                        o = !!this._chartWidgetCollection.metaInfo.id.value();
                    window.is_authenticated && (n || !r && o) || (0, u.checkAuthBeforeSaveLoad)((() => {
                        null != this._chartWidgetCollection.metaInfo.id.value() ? this.saveExistentChart(e, t, i) : this.saveNewChart(e, t, i)
                    }), {
                        source: "Save chart",
                        sourceMeta: "Chart"
                    })
                }
                saveToJSON() {
                    return this._chartSaver.saveToJSON()
                }
                saveChartSilently(e, t, i) {
                    this._chartSaver.saveChartSilently(e, t, i)
                }
                setAutoSaveEnabled(e) {
                    window.is_authenticated && window.saver.isSaveInProcess() || (0, u.checkAuthBeforeSaveLoad)((() => {
                        this._watchedAutoSaveEnabled.setValue(e)
                    }), {
                        source: "AutoSave chart"
                    })
                }
                saveChartLineTools(e, t, i, n) {
                    return this._chartSaver.saveChartLineTools(e, t, i, n)
                }
                _autoSaveEnabledSettingHandler(e) {
                    this._watchedAutoSaveEnabled.setValue(e)
                }
                _toggleAutoSaveEnabled(e) {
                    window.is_authenticated && (e ? this._enableAutoSave() : this._disableAutoSave(), this._autoSaveEnabledSetting.set(e, {
                        forceFlush: !0
                    }))
                }
                _enableAutoSave() {
                    this._chartChangesWatcher.getOnChange().subscribe(this, this._onStateChanged), this._chartChangesWatcher.hasChanges() && this._doSave()
                }
                _disableAutoSave() {
                    this._stopAutosave(), this._chartChangesWatcher.getOnChange().unsubscribeAll(this)
                }
                _onStateChanged(e) {
                    e ? this._startAutosave() : this._stopAutosave()
                }
                _startAutosave() {
                    n.enabled("charts_auto_save") && null === this._autosaveTimer && (this._autosaveTimer = setTimeout((() => {
                        this._autosaveTimer = null, window.is_authenticated ? this._chartWidgetCollection.metaInfo.id.value() && this._doSave(void 0, void 0, void 0, !0) : this._startAutosave()
                    }), _ ? 2e3 : (0, h.isFeatureEnabled)("chart_autosave_2min") ? 12e4 : (0, h.isFeatureEnabled)("chart_autosave_3min") ? 18e4 : (0, h.isFeatureEnabled)("chart_autosave_5min") ? 3e5 : (0, h.isFeatureEnabled)("chart_autosave_7min") ? 42e4 : (0, h.isFeatureEnabled)("chart_autosave_10min") ? 6e5 : (0, h.isFeatureEnabled)("chart_autosave_20min") ? 12e5 : (0, h.isFeatureEnabled)("chart_autosave_30min") ? 18e5 : (0, h.isFeatureEnabled)("chart_autosave_year") ? 31536e6 : 6e4))
                }
                _stopAutosave() {
                    null !== this._autosaveTimer && (clearInterval(this._autosaveTimer), this._autosaveTimer = null)
                }
            }
        },
        197578: (e, t, i) => {
            "use strict";
            i.d(t, {
                SharingChartService: () => s
            });
            var n = i(988411),
                r = i.n(n),
                o = i(226722);
            class s {
                constructor(e, t, i = 0) {
                    this._requestInProgress = !1, this._watchedSharingEnabled = new(r()), this._sharingValueChangedEvent = "SharingValueChanged", this._uid = t, this._chartId = i, this._watchedSharingEnabled.setValue(e), o.TVXWindowEvents.on(this._sharingValueChangedEvent, (e => {
                        const t = JSON.parse(e);
                        this._chartId === t.chartId && this._watchedSharingEnabled.setValue(t.value)
                    }))
                }
                destroy() {
                    this._watchedSharingEnabled.unsubscribe()
                }
                sharingEnabled() {
                    return this._watchedSharingEnabled.readonly()
                }
                setSharingEnabled(e) {
                    window.runOrSignIn((() => this._setSharing(e)), {
                        source: "Sharing chart"
                    })
                }
                toggleSharing() {
                    const e = !this._watchedSharingEnabled.value();
                    return this.setSharingEnabled(e), e
                }
                async _setSharing(e) {
                    if (!1 === this._requestInProgress && this._watchedSharingEnabled.value() !== e) {
                        this._watchedSharingEnabled.setValue(e), this._sendSyncEvent({
                            chartId: this._chartId,
                            value: e
                        });
                        try {
                            this._requestInProgress = !0, await this._saveSharingValue(e)
                        } catch (t) {
                            this._watchedSharingEnabled.setValue(!e), this._sendSyncEvent({
                                chartId: this._chartId,
                                value: !e
                            })
                        } finally {
                            this._requestInProgress = !1
                        }
                    }
                }
                _sendSyncEvent(e) {
                    o.TVXWindowEvents.emit(this._sharingValueChangedEvent, JSON.stringify(e))
                }
                _saveSharingValue(e) {
                    const t = JSON.stringify({
                        is_private: !e
                    });
                    return fetch(`/api/v1/charts/${this._uid}/sharing/`, {
                        headers: new Headers({
                            "Content-Type": "application/json"
                        }),
                        method: "POST",
                        credentials: "same-origin",
                        body: t
                    })
                }
            }
        },
        892026: (e, t, i) => {
            "use strict";
            i.d(t, {
                StudyTemplates: () => _
            });
            var n = i(777754),
                r = i(472664),
                o = i(345848),
                s = i(869403),
                a = i.n(s),
                l = i(988411),
                c = i.n(l),
                d = i(779923);
            const u = (0, i(272001).getLogger)("Platform.StudyTemplates"),
                h = n.t(null, void 0, i(897065));
            class _ {
                constructor(e) {
                    this._chartWidgetCollection = e.chartWidgetCollection, this._favoriteStudyTemplatesService = e.favoriteStudyTemplatesService, window.loginStateChange.subscribe(null, r.backend.invalidateStudyTemplatesList), this._list = new(c())([]), this._onChange = new(a()), this._list.subscribe((() => this._onChange.fire()))
                }
                findRecordByName(e) {
                    return this._list.value().find((t => t.name === e)) || null
                }
                showSaveAsDialog() {
                    const e = this._chartWidgetCollection.activeChartWidget.value().model();
                    Promise.all([i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(12275), i.e(33335), i.e(91901), i.e(83772), i.e(71140), i.e(85761), i.e(64884), i.e(54819), i.e(1428), i.e(1011), i.e(52701), i.e(36812), i.e(67177), i.e(94147), i.e(75514), i.e(745), i.e(36631)]).then(i.bind(i, 37401)).then((t => {
                        new t.StudyTemplateSaver({
                            controller: e,
                            onSave: e => {
                                this._list.setValue(e)
                            }
                        }).show()
                    }))
                }
                applyTemplate(e) {
                    const t = this.findRecordByName(e);
                    null !== t ? window.runOrSignIn((() => {
                        const e = this._chartWidgetCollection.activeChartWidget.value(),
                            i = i => {
                                (0, o.trackEvent)("GUI", "Load Study Template"), e.model().applyStudyTemplate(JSON.parse(i.content), t.name)
                            };
                        void 0 !== t.id ? t.is_default ? r.backend.getStandardStudyTemplateContentById(t.id, i) : r.backend.getStudyTemplateContentById(t.id, i) : r.backend.getStudyTemplateContent(t.name).then(i)
                    }), {
                        source: "Study templates apply"
                    }) : u.logNormal(`Template ${e} not found in cache`)
                }
                deleteStudyTemplate(e) {
                    const t = this.findRecordByName(e);
                    null !== t ? this._removeTemplate(t) : u.logNormal(`Template ${e} not found in cache`)
                }
                list() {
                    return this._list.value()
                }
                getOnChange() {
                    return this._onChange
                }
                refreshStudyTemplateList(e) {
                    r.backend.getStudyTemplatesList().then((t => {
                        this._list.setValue(t), void 0 !== e && e()
                    }))
                }
                invalidate() {
                    r.backend.invalidateStudyTemplatesList()
                }
                _removeTemplate(e) {
                    window.runOrSignIn((() => {
                        (0, d.showConfirm)({
                            text: h.format({
                                name: e.name
                            }),
                            onConfirm: ({
                                dialogClose: t
                            }) => new Promise((i => {
                                const n = () => {
                                    this.refreshStudyTemplateList((() => {
                                        const n = this.list();
                                        this._list.setValue(n.filter((t => t !== e))), this._favoriteStudyTemplatesService && this._favoriteStudyTemplatesService.remove(e.name), i(), t()
                                    }))
                                };
                                r.backend.invalidateStudyTemplatesList(), void 0 !== e.id ? r.backend.removeStudyTemplateById(e.id, n) : r.backend.removeStudyTemplate(e.name).then(n)
                            }))
                        })
                    }), {
                        source: "Study templates delete"
                    })
                }
            }
        },
        809062: (e, t, i) => {
            "use strict";
            i.d(t, {
                takeChartSnapshotPromise: () => a,
                takeChartSnapshot: () => l,
                makeSnapshotRequest: () => c
            });
            i(984919);
            var n = i(777754),
                r = i(495046),
                o = i(229534),
                s = i(890740);

            function a(e, t = {}) {
                return new Promise(((i, n) => {
                    l(e, i, n, t)
                }))
            }
            async function l(e, t, i, n = {}) {
                var r;
                const o = new FormData;
                if (void 0 !== n.previews)
                    for (const e of n.previews) o.append("previews[]", e);
                void 0 !== n.cme && o.append("cme", String(n.cme)), void 0 !== n.wl && o.append("wl", String(n.wl)), void 0 !== n.onWidget && o.append("onWidget", String(n.onWidget)), n.isReport && o.append("isReport", String(n.isReport)), n.asyncSave && o.append("asyncSave", String(n.asyncSave));
                const s = window.urlParams;
                s && s.locale && o.append("language", s.locale);
                const a = e.activeChartWidget.value(),
                    l = a.widgetCustomer();
                void 0 !== l && o.append("customer", l);
                let d = a.properties().childs().timezone.value();
                "exchange" === d && (d = (null === (r = a.model().mainSeries().symbolInfo()) || void 0 === r ? void 0 : r.timezone) || d), o.append("timezone", d), o.append("symbol", a.model().mainSeries().symbol());
                const u = await e.clientSnapshot({
                        showHeaderMainSymbol: n.showHeaderMainSymbol
                    }),
                    h = await new Promise((e => u.toBlob(e)));
                null !== h && o.append("preparedImage", h), c(o, t, i, n)
            }
            async function c(e, t, a, l = {}) {
                const c = r.enabled("charting_library_base") ? l.snapshotUrl || "https://www.tradingview.com/snapshot/" : "/snapshot/";
                try {
                    const r = await (0, s.fetch)(c, {
                            body: e,
                            method: "POST",
                            credentials: "same-origin"
                        }),
                        d = await r.text();
                    if (r.ok) t(d);
                    else {
                        if ("suspicious_chart_snapshots_error" === d) {
                            const e = n.t(null, void 0, i(347362)).format({
                                start_link: '<a class="tv-dialog__link js-send-report-link" href="#" data-issue-type="other">',
                                end_link: "</a>"
                            });
                            l.onInvalidSnapshotImage && l.onInvalidSnapshotImage();
                            return (0, o.createErrorDialog)({
                                title: n.t(null, void 0, i(567137)),
                                content: e,
                                btnType: "danger"
                            }).then((e => {
                                e.on("afterOpen", (() => {
                                    i.e(1484).then(i.bind(i, 742603)).then((({
                                        bugDialogCreationHandler: t
                                    }) => {
                                        t(), e.$el.find(".js-send-report-link").click((() => {
                                            e.close()
                                        }))
                                    }))
                                })), e.open()
                            }))
                        }
                        a()
                    }
                } catch (e) {
                    a()
                }
            }
        },
        768738: (e, t, i) => {
            "use strict";
            var n;
            i.d(t, {
                    TradingPage: () => n,
                    maxPanelWidth: () => r,
                    panelWidth: () => o,
                    panelHeight: () => s
                }),
                function(e) {
                    e.DomPanel = "domPanel", e.OrderPanel = "orderPanel"
                }(n || (n = {}));
            const r = 400,
                o = 315,
                s = 451
        },
        893271: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                TRADING_SERVICE: () => r,
                tradingService: () => o,
                waitTradingService: () => s
            });
            var n = i(564894);
            const r = {
                id: "TradingService"
            };

            function o() {
                return (0, n.hasService)(r) ? (0, n.service)(r) : null
            }

            function s() {
                return (0, n.waitServiceRegistered)(r)
            }
        },
        962127: (e, t, i) => {
            "use strict";
            i.d(t, {
                settingsKeys: () => n
            });
            const n = {
                ACTIVE_BROKER: "trading.active_broker",
                PROPERTIES: "trading.chart.proterty",
                PROFIT_VIEW_TYPE: "trading.dom.profitViewType",
                ORDER_WIDGET_MODE: "trading.orderWidgetMode.",
                DOM_DURATION: "trading.domDuration.",
                TRADING_PANEL_OPENED: "trading.tradingPanelOpened",
                TRADING_PANEL_ACTIVE_PAGE: "trading.tradingPanelActivePage",
                PANEL_WIDTH: "trading.panelWidth",
                PANEL_HEIGHT: "trading.panelHeight",
                ORDER_PANEL_SETTINGS: "trading.orderPanelSettings",
                FAVORITE_BROKERS: "trading.panelFavorite",
                SHOW_TOOLTIP_FOR_SELECT_BROKER: "trading.showTooltipForSelectBroker",
                LOGIN_COUNTER: "trading.brokerLogInCounter",
                LOGOUT_COUNTER: "trading.brokerLogOutCounter",
                DISABLED_CONFIRMATIONS: "trading.disabledConfirmations",
                MOVE_TRADED_SOURCE_WITH_SHIFT: "trading.chart.moveWithShift",
                REALTIME_DATA_ACCEPTED: "trading.realTimeDataAccepted"
            }
        },
        927508: (e, t, i) => {
            "use strict";
            i.d(t, {
                customFormatters: () => n
            });
            const n = {
                dateFormatter: null,
                timeFormatter: null,
                tickMarkFormatter: null,
                priceFormatterFactory: null,
                studyFormatterFactory: null
            }
        },
        838126: (e, t, i) => {
            "use strict";
            i.d(t, {
                monthFormatFunction: () => p,
                dateFormatFunctions: () => m,
                getDateFormatWithWeekday: () => f,
                availableDateFormats: () => v,
                defaultDateFormat: () => b
            });
            var n = i(777754),
                r = i(39654),
                o = i(831471);
            const s = {
                    1: () => n.t(null, void 0, i(795425)),
                    2: () => n.t(null, void 0, i(835050)),
                    3: () => n.t(null, void 0, i(651369)),
                    4: () => n.t(null, void 0, i(442762)),
                    5: () => n.t(null, {
                        context: "short"
                    }, i(227991)),
                    6: () => n.t(null, void 0, i(715224)),
                    7: () => n.t(null, void 0, i(6215)),
                    8: () => n.t(null, void 0, i(38465)),
                    9: () => n.t(null, void 0, i(757902)),
                    10: () => n.t(null, void 0, i(73546)),
                    11: () => n.t(null, void 0, i(671230)),
                    12: () => n.t(null, void 0, i(92203))
                },
                a = (e, t) => (t ? e.getMonth() : e.getUTCMonth()) + 1,
                l = (e, t) => t ? e.getFullYear() : e.getUTCFullYear(),
                c = e => e.toLocaleDateString(window.language ? (0, r.getIsoLanguageCodeFromLanguage)(window.language) : void 0, {
                    weekday: "short",
                    timeZone: "UTC"
                }),
                d = (e, t) => (0, o.numberToStringWithLeadingZero)(((e, t) => t ? e.getDate() : e.getUTCDate())(e, t), 2),
                u = (e, t) => s[a(e, t)](),
                h = (e, t) => (0, o.numberToStringWithLeadingZero)(a(e, t), 2),
                _ = (e, t) => (0, o.numberToStringWithLeadingZero)(l(e, t) % 100, 2),
                g = (e, t) => (0, o.numberToStringWithLeadingZero)(l(e, t), 4),
                p = (e, t) => u(e, t),
                m = {
                    "dd MMM 'yy": (e, t) => `${d(e,t)} ${u(e,t)} '${_(e,t)}`,
                    "MMM dd, yyyy": (e, t) => `${u(e,t)} ${d(e,t)}, ${g(e,t)}`,
                    "MMM dd": (e, t) => `${u(e,t)} ${d(e,t)}`,
                    "dd MMM": (e, t) => `${d(e,t)} ${u(e,t)}`,
                    "yyyy-MM-dd": (e, t) => `${g(e,t)}-${h(e,t)}-${d(e,t)}`,
                    "yy-MM-dd": (e, t) => `${_(e,t)}-${h(e,t)}-${d(e,t)}`,
                    "yy/MM/dd": (e, t) => `${_(e,t)}/${h(e,t)}/${d(e,t)}`,
                    "yyyy/MM/dd": (e, t) => `${g(e,t)}/${h(e,t)}/${d(e,t)}`,
                    "dd-MM-yyyy": (e, t) => `${d(e,t)}-${h(e,t)}-${g(e,t)}`,
                    "dd-MM-yy": (e, t) => `${d(e,t)}-${h(e,t)}-${_(e,t)}`,
                    "dd/MM/yy": (e, t) => `${d(e,t)}/${h(e,t)}/${_(e,t)}`,
                    "dd/MM/yyyy": (e, t) => `${d(e,t)}/${h(e,t)}/${g(e,t)}`,
                    "MM/dd/yy": (e, t) => `${h(e,t)}/${d(e,t)}/${_(e,t)}`,
                    "MM/dd/yyyy": (e, t) => `${h(e,t)}/${d(e,t)}/${g(e,t)}`
                };

            function f(e) {
                return "ja" === window.language ? (t, i) => `${m[e](t,i)} (${c(t)})` : (t, i) => `${c(t)} ${m[e](t,i)}`
            }
            const v = Object.keys(m),
                b = () => -1 !== ["ja", "ko", "zh", "zh_TW"].indexOf(window.language || "") ? "yyyy-MM-dd" : "dd MMM 'yy"
        },
        662598: (e, t, i) => {
            "use strict";
            i.d(t, {
                DateFormatter: () => o
            });
            var n = i(927508),
                r = i(838126);
            class o {
                constructor(e = "yyyy-MM-dd", t = !1) {
                    this._dateFormatFunc = t ? (0, r.getDateFormatWithWeekday)(e) : r.dateFormatFunctions[e]
                }
                format(e) {
                    return n.customFormatters && n.customFormatters.dateFormatter ? n.customFormatters.dateFormatter.format(e) : this._dateFormatFunc(e, !1)
                }
                formatLocal(e) {
                    return n.customFormatters.dateFormatter ? n.customFormatters.dateFormatter.formatLocal ? n.customFormatters.dateFormatter.formatLocal(e) : n.customFormatters.dateFormatter.format(e) : this._dateFormatFunc(e, !0)
                }
            }
        },
        147279: (e, t, i) => {
            "use strict";
            i.d(t, {
                DateTimeFormatter: () => s
            });
            var n = i(164280),
                r = i(662598);
            const o = {
                dateFormat: "yyyy-MM-dd",
                withWeekday: !1,
                timeFormat: n.hourMinuteSecondFormat,
                dateTimeSeparator: " "
            };
            class s {
                constructor(e = {}) {
                    const t = Object.assign({}, o, e);
                    this._dateFormatter = new r.DateFormatter(t.dateFormat, t.withWeekday), this._timeFormatter = new n.TimeFormatter(t.timeFormat), this._separator = t.dateTimeSeparator
                }
                format(e) {
                    return `${this._dateFormatter.format(e)}${this._separator}${this._timeFormatter.format(e)}`
                }
                formatLocal(e) {
                    return `${this._dateFormatter.formatLocal(e)}${this._separator}${this._timeFormatter.formatLocal(e)}`
                }
            }
        },
        164280: (e, t, i) => {
            "use strict";
            i.d(t, {
                hourMinuteSecondFormat: () => o,
                hourMinuteNonZeroSecondFormat: () => s,
                hourMinuteSecondMilisecFormat: () => a,
                hourMinuteFormat: () => l,
                twelveHourMinuteSecondFormat: () => c,
                twelveHourMinuteNonZeroSecondFormat: () => d,
                twelveHourMinuteFormat: () => u,
                TimeFormatter: () => h
            });
            var n = i(927508),
                r = i(831471);
            const o = "%h:%m:%s",
                s = "%h:%m:%s+",
                a = "%h:%m:%s.%ss",
                l = "%h:%m",
                c = "%h:%m:%s %ampm",
                d = "%h:%m:%s+ %ampm",
                u = "%h:%m %ampm";
            class h {
                constructor(e) {
                    this._isTwelveHoursFormat = !1, this._valuesAndDelimeters = [];
                    const t = e || o,
                        i = new RegExp("%h|%m|%s\\+|%ss|%ampm|%s", "g");
                    let n = i.exec(t),
                        r = 0;
                    for (; null !== n;) {
                        const e = n[0];
                        "%ampm" === e && (this._isTwelveHoursFormat = !0);
                        const o = t.substring(r, n.index);
                        "" !== o && this._valuesAndDelimeters.push(o), this._valuesAndDelimeters.push(e), r = n.index + e.length, n = i.exec(t)
                    }
                }
                format(e) {
                    return n.customFormatters.timeFormatter ? n.customFormatters.timeFormatter.format(e) : this._formatTime(e, !1)
                }
                formatLocal(e) {
                    return n.customFormatters.timeFormatter ? n.customFormatters.timeFormatter.formatLocal ? n.customFormatters.timeFormatter.formatLocal(e) : n.customFormatters.timeFormatter.format(e) : this._formatTime(e, !0)
                }
                _formatTime(e, t) {
                    let i = t ? e.getHours() : e.getUTCHours();
                    const n = t ? e.getMinutes() : e.getUTCMinutes(),
                        o = t ? e.getSeconds() : e.getUTCSeconds(),
                        s = t ? e.getMilliseconds() : e.getUTCMilliseconds();
                    let a = "";
                    this._isTwelveHoursFormat && (a = i >= 12 ? "PM" : "AM", i %= 12, i = i || 12);
                    let l = "",
                        c = !1;
                    for (let e = this._valuesAndDelimeters.length - 1; e >= 0; e--) {
                        const t = this._valuesAndDelimeters[e];
                        let d;
                        switch (t) {
                            case "%h":
                                d = (0, r.numberToStringWithLeadingZero)(i, 2);
                                break;
                            case "%m":
                                d = (0, r.numberToStringWithLeadingZero)(n, 2);
                                break;
                            case "%s+":
                                0 !== o ? d = (0, r.numberToStringWithLeadingZero)(o, 2) : (d = "", c = !0);
                                break;
                            case "%s":
                                d = (0, r.numberToStringWithLeadingZero)(o, 2);
                                break;
                            case "%ss":
                                d = (0, r.numberToStringWithLeadingZero)(s, 3);
                                break;
                            case "%ampm":
                                d = a;
                                break;
                            default:
                                if (c) {
                                    c = !1;
                                    continue
                                }
                                d = t
                        }
                        l = d + l
                    }
                    return l
                }
            }
        },
        812363: (e, t, i) => {
            "use strict";
            var n;
            i.d(t, {
                    PlotRowSearchMode: () => n
                }),
                function(e) {
                    e[e.NearestLeft = -1] = "NearestLeft", e[e.Exact = 0] = "Exact", e[e.NearestRight = 1] = "NearestRight"
                }(n || (n = {}))
        },
        710408: (e, t, i) => {
            "use strict";
            i.d(t, {
                newsAvailableOnDevice: () => s
            });
            var n, r = i(314802),
                o = i(638456);
            const s = !((0, r.isOnMobileAppPage)("old") || o.CheckMobile.iOS() && "14" === (null === (n = navigator.userAgent.match(/(Version\/|iPhone OS |iPad; CPU OS )(\d+)/)) || void 0 === n ? void 0 : n[2]))
        },
        825398: (e, t, i) => {
            "use strict";
            i.d(t, {
                PinePerm: () => l
            });
            i(823127);
            var n = i(890740),
                r = i(823127);
            const o = "user__username";

            function s(e) {
                const t = new FormData;
                return t.append("pine_id", e.pine_id), t.append("username_recip", e.username_recip),
                    e.expiration && t.append("expiration", e.expiration), t
            }
            class a extends Error {
                constructor(e, t, i) {
                    super(e), this.title = i, this.code = t
                }
            }
            var l;
            ! function(e) {
                let t;
                ! function(e) {
                    e.UserDoesNotHavePermission = "user_does_not_have_permission", e.UserIsBanned = "user_is_banned", e.Exists = "exists"
                }(t = e.StatusCode || (e.StatusCode = {})), e.add = function(e) {
                    return window.is_authenticated ? (0, n.fetch)("/pine_perm/add/", {
                        body: s(e),
                        credentials: "include",
                        method: "POST"
                    }).then((e => e.json().then((t => {
                        const i = t.status;
                        if ("exists" === i) throw new a(i, i);
                        if (!e.ok) throw new a(t.detail, t.code, t.title)
                    })))) : Promise.reject()
                }, e.remove = function(e, t) {
                    return window.is_authenticated ? r.ajax({
                        data: {
                            pine_id: t,
                            username_recip: e
                        },
                        dataType: "json",
                        type: "POST",
                        url: "/pine_perm/remove/"
                    }) : r.Deferred().reject()
                }, e.listUsers = function(e) {
                    const {
                        pineId: t,
                        next: i,
                        prev: n,
                        username: s,
                        orderBy: a = o,
                        limit: l = 10
                    } = e;
                    return !window.is_authenticated || n && !i ? r.Deferred().reject() : r.ajax({
                        data: {
                            pine_id: t,
                            username: s
                        },
                        dataType: "json",
                        type: "POST",
                        url: i || n ? `${i}` : `/pine_perm/list_users/?limit=${l}&order_by=${a}`
                    })
                }, e.listScripts = function() {
                    return window.is_authenticated ? r.ajax({
                        dataType: "json",
                        type: "POST",
                        url: "/pine_perm/list_scripts/"
                    }) : r.Deferred().reject()
                }, e.modifyUserExpiration = function(e) {
                    return window.is_authenticated ? (0, n.fetch)("/pine_perm/modify_user_expiration/", {
                        body: s(e),
                        credentials: "include",
                        method: "POST"
                    }).then((e => {
                        if (!e.ok) return e.json().then((e => {
                            throw Error(e.detail)
                        }))
                    })) : Promise.reject()
                }, e.numberOfUsersWithAccess = function(e) {
                    return window.is_authenticated ? (0, n.fetch)(`/pine_perm/list_users/?pine_id=${e}`, {
                        method: "GET"
                    }).then((e => e.ok ? e.json() : e.json().then((e => {
                        throw new a(e.detail)
                    })))) : Promise.reject()
                }
            }(l || (l = {}))
        },
        530664: (e, t, i) => {
            "use strict";
            var n;
            i.d(t, {
                    PriceAxisLastValueMode: () => n
                }),
                function(e) {
                    e[e.LastPriceAndPercentageValue = 0] = "LastPriceAndPercentageValue", e[e.LastValueAccordingToScale = 1] = "LastValueAccordingToScale"
                }(n || (n = {}))
        },
        138883: (e, t, i) => {
            "use strict";
            i.d(t, {
                ScriptUpdater: () => h
            });
            var n = i(650151),
                r = i(777754),
                o = i(683890),
                s = i(223616),
                a = i(257857),
                l = i(562726),
                c = i(758337);
            const d = new o.TranslatedString("update {title} script", r.t(null, void 0, i(450728)));

            function u(e, t, i) {
                const n = [],
                    r = t.dataSources();
                for (let t = r.length - 1; t >= 0; t--) {
                    const o = r[t];
                    if (!(0, l.isStudy)(o)) continue;
                    const a = o.metaInfo();
                    if (!a.pine) continue;
                    if (a.scriptIdPart !== e) continue;
                    const c = s.Version.parse(a.pine.version),
                        d = !i || a.pine.version.toString() !== i.toString();
                    c.minor() > 0 && d || n.push(o)
                }
                return n
            }
            class h {
                constructor(e) {
                    this._chartWidgetCollection = e
                }
                onTVScriptLegacyPineProcessed(e) {
                    if (!e.scriptMetaInfo) return;
                    if (!e.scriptMetaInfo.scriptIdPart) return;
                    const t = this._chartModels();
                    for (let i = t.length - 1; i >= 0; i--) {
                        const n = t[i],
                            r = e.scriptMetaInfo;
                        n.model().studyMetaInfoRepository().addPineMetaInfo(r)
                    }
                }
                onTVScriptModified(e) {
                    if (!e.scriptMetaInfo) return;
                    const t = e.scriptMetaInfo.scriptIdPart;
                    if (!t) return;
                    const r = this._chartModels();
                    for (let i = r.length - 1; i >= 0; i--) {
                        const o = r[i],
                            s = u(t, o, e.scriptVersionToUpdate),
                            l = [];
                        for (let e = 0; e < s.length; ++e) {
                            const t = s[e],
                                i = (0,
                                    n.ensureNotNull)(o.paneForSource(t)),
                                r = i.isOverlay(t) ? null : t.priceScale();
                            l.push({
                                pane: i,
                                priceScale: r
                            })
                        }
                        const h = e.scriptMetaInfo;
                        (0, n.assert)(!(0, c.isAbsent)(h), "Cannot update scripts, because script metaInfo is absent");
                        const _ = o.model().studyMetaInfoRepository().addPineMetaInfo(h);
                        o.beginUndoMacro(d.format({
                            title: _.shortDescription || _.description || ""
                        }));
                        for (let e = l.length - 1; e >= 0; e--) {
                            const t = s[e],
                                i = l[e];
                            (0, a.updateStudyAfterScriptRecompilation)(t, _, i, o)
                        }
                        o.endUndoMacro()
                    }
                    const o = i.c[957122];
                    o && o.exports.PineEditorFull.onScriptModified(e, !!e.isSelfCall)
                }
                onTVScriptDeleted(e) {
                    const t = e.scriptIdPart;
                    if (!t) return;
                    const n = this._chartModels();
                    let r = null;
                    for (let e = n.length; e-- && (r = n[e].model().studyMetaInfoRepository().findByIdSync({
                            type: "pine",
                            pineId: t
                        }), null === r););
                    null !== r && r.removeDefaults();
                    const o = i.c[957122];
                    o && o.exports.PineEditorFull.onScriptDeleted(e, !!e.isSelfCall)
                }
                onTVScriptRenamed(e) {
                    if (!e.scriptIdPart) return;
                    const t = i.c[957122];
                    t && t.exports.PineEditorFull.onScriptRenamed(e, !!e.isSelfCall)
                }
                onScriptOpen() {
                    null !== this._chartWidgetCollection && this._chartWidgetCollection.getAll().forEach((e => {
                        const t = e.paneWidgets();
                        for (let e = t.length; e--;) {
                            const i = t[e].statusWidget();
                            null !== i && i.updateLayout()
                        }
                    }))
                }
                _chartModels() {
                    return null === this._chartWidgetCollection ? [] : this._chartWidgetCollection.getAll().map((e => e.model()))
                }
            }
        },
        531636: (e, t, i) => {
            "use strict";
            i.d(t, {
                Session: () => d
            });
            var n = i(650151),
                r = i(988411),
                o = i.n(r),
                s = i(869403),
                a = i.n(s),
                l = i(777491);
            const c = (0, i(272001).getLogger)("ChartApi.AbstractSession");
            class d {
                constructor(e, t, i) {
                    this._isConnected = new(o())(!1), this._state = 0, this._isConnectForbidden = !1, this._sessionId = "", this._sessionIdChanged = new(a()), this._chartApi = e, this._sessionPrefix = t, this._shouldReconnectAfterCriticalError = i
                }
                destroy() {
                    this._logNormal("Destroying session"), this._isConnected.unsubscribe(), this.disconnect(), this._sessionIdChanged.destroy(), delete this._chartApi, this._logNormal("Session has been destroyed")
                }
                isConnected() {
                    return this._isConnected
                }
                sessionId() {
                    return this._sessionId
                }
                onSessionIdChanged() {
                    return this._sessionIdChanged
                }
                connect() {
                    0 === this._state && ((0, n.assert)(!this._isConnectForbidden, "Cannot call connect because it is forbidden at this moment"), this._setSessionId(`${this._sessionPrefix}_${(0,l.randomHash)()}`), this._logNormal("Connecting session - wait until transport stay connected"), this._state = 1, this._chartApi.createSession(this._sessionId, this))
                }
                disconnect() {
                    0 !== this._state && ((0, n.assert)("" !== this._sessionId, "sessionId must not be invalid"), this._logNormal("Disconnecting session..."), this._forbidConnectWhile((() => {
                        this._chartApi.connected() && this._sendRemoveSession(), this._processDestroyingOnServer()
                    })))
                }
                onMessage(e) {
                    switch (e.method) {
                        case "connected":
                            return void this._onChartApiConnected();
                        case "disconnected":
                            return void this._onChartApiDisconnected();
                        case "critical_error":
                            const t = String(e.params[0]),
                                i = String(e.params[1]);
                            return void this._onCriticalError(t, i)
                    }
                    this._onMessage(e)
                }
                _getChartApi() {
                    return this._chartApi
                }
                _generateLogMessage(e) {
                    return `[${this._sessionId}] ${e}`
                }
                _onCriticalError(e, t) {
                    this._logError(`Critical error. Reason=${e}, info=${t}.`), this._forbidConnectWhile((() => {
                        this._processDestroyingOnServer()
                    })), this._shouldReconnectAfterCriticalError ? (this._logNormal("Reconnecting after critical error..."), this.connect()) : this._logNormal("Reconnecting after critical error skipped")
                }
                _onChartApiConnected() {
                    (0, n.assert)(1 === this._state, "Session is not registered"), this._logNormal("Transport is connected. Creating session on the server"), this._sendCreateSession(), this._state = 2, this._isConnected.setValue(!0)
                }
                _onChartApiDisconnected() {
                    this._logNormal("Transport is disconnected. Reconnecting..."), this._forbidConnectWhile((() => {
                        this._processDestroyingOnServer()
                    })), this.connect()
                }
                _setSessionId(e) {
                    const t = this._sessionId;
                    this._logNormal(`Changing sessionId: old=${t}, new=${e}`), this._sessionId = e, this._sessionIdChanged.fire(e, t)
                }
                _logNormal(e) {
                    c.logNormal(this._generateLogMessage(e))
                }
                _logError(e) {
                    c.logError(this._generateLogMessage(e))
                }
                _processDestroyingOnServer() {
                    this._state = 0, this._isConnected.setValue(!1), this._chartApi.removeSession(this._sessionId), this._setSessionId("")
                }
                _forbidConnectWhile(e) {
                    this._isConnectForbidden = !0, e(), this._isConnectForbidden = !1
                }
            }
        },
        941167: (e, t, i) => {
            "use strict";
            i.d(t, {
                getHourMinuteFormat: () => r,
                getHourMinuteSecondFormat: () => o,
                getTimeFormatForInterval: () => s
            });
            var n = i(164280);

            function r(e) {
                return "12-hours" === e ? n.twelveHourMinuteFormat : n.hourMinuteFormat
            }

            function o(e) {
                return "12-hours" === e ? n.twelveHourMinuteSecondFormat : n.hourMinuteSecondFormat
            }

            function s(e, t) {
                if (e.isRange()) return function(e) {
                    return "12-hours" === e ? n.twelveHourMinuteNonZeroSecondFormat : n.hourMinuteNonZeroSecondFormat
                }(t);
                return e.isSeconds() || e.isTicks() ? o(t) : r(t)
            }
        },
        114123: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                generateColor: () => r,
                applyAlpha: () => o,
                alphaToTransparency: () => s,
                transparencyToAlpha: () => a,
                applyTransparency: () => l,
                resetTransparency: () => c,
                getLuminance: () => d,
                isHexColor: () => u,
                colorFromBackground: () => h,
                gradientColorAtPercent: () => _,
                isColorDark: () => g,
                rgbaFromInteger: () => p,
                rgbaToInteger: () => m,
                colorToInteger: () => f
            });
            var n = i(724377);

            function r(e, t, i) {
                if (t = t || 0, !u(e)) return i ? (0, n.rgbaToString)((0, n.rgba)((0, n.parseRgb)(e), (0, n.normalizeAlphaComponent)(a(t)))) : e;
                const [r, o, s] = (0, n.parseRgb)(e), l = (0, n.normalizeAlphaComponent)(a(t));
                return (0, n.rgbaToString)([r, o, s, l])
            }

            function o(e, t) {
                return r(e, s(t))
            }

            function s(e) {
                return 100 * (1 - e)
            }

            function a(e) {
                if (e < 0 || e > 100) throw new Error("invalid transparency");
                return 1 - e / 100
            }

            function l(e, t) {
                if ("transparent" === e) return e;
                const i = (0, n.parseRgba)(e),
                    r = i[3];
                return (0, n.rgbaToString)((0, n.rgba)(i[0], i[1], i[2], a(t) * r))
            }

            function c(e) {
                return "transparent" === e || u(e) ? e : (0, n.rgbaToString)((0, n.rgba)((0, n.parseRgb)(e), (0, n.normalizeAlphaComponent)(1)))
            }

            function d(e) {
                const t = (0, n.parseRgb)(e).map((e => (e /= 255) <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)));
                return Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3))
            }

            function u(e) {
                return 0 === e.indexOf("#")
            }

            function h(e) {
                return "black" === (0, n.rgbToBlackWhiteString)((0, n.parseRgb)(e), 150) ? "#ffffff" : "#000000"
            }

            function _(e, t, i) {
                const [r, o, s, a] = (0, n.parseRgba)(e), [l, c, d, u] = (0, n.parseRgba)(t), h = (0, n.rgba)(Math.round(r + i * (l - r)), Math.round(o + i * (c - o)), Math.round(s + i * (d - s)), a + i * (u - a));
                return (0, n.rgbaToString)(h)
            }

            function g(e) {
                return d(c(e)) < .5
            }

            function p(e) {
                const t = (e = Math.round(e)) % 256;
                e -= t;
                const i = (e /= 256) % 256;
                e -= i;
                const n = (e /= 256) % 256;
                e -= n;
                return `rgba(${t},${i},${n},${(e/=256)/255})`
            }

            function m(e) {
                const t = Math.round(255 * e[3]);
                return e[0] + 256 * e[1] + 65536 * e[2] + 16777216 * t
            }

            function f(e) {
                const t = (0, n.tryParseRgba)(e);
                return null === t ? 0 : m(t)
            }
        },
        368791: (e, t, i) => {
            "use strict";
            i.d(t, {
                doAnimate: () => o
            });
            const n = {
                from: 0,
                duration: 250,
                easing: i(455567).easingFunc.easeOutCubic
            };
            class r {
                constructor(e) {
                    this._doing = !0, this._completed = !1, this._options = { ...n,
                        ...e
                    };
                    const t = performance.now();
                    window.requestAnimationFrame((e => {
                        this._animation(t, this._options.from, e)
                    }))
                }
                stop() {
                    this._doing = !1
                }
                completed() {
                    return this._completed
                }
                _animation(e, t, i) {
                    if (!this._doing) return void this._finishAnimation();
                    const n = (i = !i || i < 1e12 ? performance.now() : i) - e,
                        r = n >= this._options.duration || t === this._options.to,
                        o = (s = this._options.from, a = this._options.to, l = this._options.easing(n / this._options.duration), s * (1 - l) + a * l);
                    var s, a, l;
                    const c = r ? this._options.to : o,
                        d = c - t;
                    this._options.onStep(d, c), r ? this._finishAnimation() : window.requestAnimationFrame((t => {
                        this._animation(e, c, t)
                    }))
                }
                _finishAnimation() {
                    this._options.onComplete && this._options.onComplete(), this._completed = !0
                }
            }

            function o(e) {
                return new r(e)
            }
        },
        667215: (e, t, i) => {
            "use strict";
            i.d(t, {
                SubscriptionEventType: () => c,
                subscriptionNotification: () => u
            });
            var n = i(777754),
                r = i(226722),
                o = i(869403),
                s = i.n(o);
            const a = (0, i(272001).getLogger)("SubscriptionNotification"),
                l = "subscriptionPermissionHasChanged";
            var c;
            ! function(e) {
                e.Subscribe = "subscribe", e.Unsubscribe = "unsubscribe", e.Downgrade = "downgrade", e.Upgrade = "upgrade", e.Change = "change", e.PaymentMethodChanged = "paymentmethodChanged"
            }(c || (c = {}));
            class d {
                constructor() {
                    this.stateChanged = new(s())
                }
                on(e, t) {
                    r.TVXWindowEvents.on(l, (i => {
                        let n = null;
                        try {
                            n = JSON.parse(i)
                        } catch (e) {
                            return void a.logWarn(`Failed to parse JSON: ${i}`)
                        }
                        e !== c.Change && e !== n.type || t(n, {
                            currentTab: !1
                        })
                    })), this.stateChanged.subscribe(null, (i => {
                        e !== c.Change && e !== i.type || t(i, {
                            currentTab: !0
                        })
                    }))
                }
                showNotification() {
                    Promise.all([i.e(21646), i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(91901), i.e(13249), i.e(96246), i.e(46951), i.e(65216), i.e(75514), i.e(745), i.e(52328), i.e(60246), i.e(30870)]).then(i.bind(i, 949397)).then((({
                        showSubscriptionHasBeenChangedDialog: e
                    }) => {
                        e({
                            pushReload: !0
                        })
                    }))
                }
                showChartNotification() {
                    Promise.all([i.e(21646), i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(91901), i.e(13249), i.e(96246), i.e(46951), i.e(65216), i.e(75514), i.e(745), i.e(52328), i.e(60246), i.e(30870)]).then(i.bind(i, 949397)).then((({
                        showSubscriptionHasBeenChangedDialog: e
                    }) => {
                        e({
                            content: n.t(null, void 0, i(653427))
                        })
                    }))
                }
                showBillingTimeoutNotification() {
                    Promise.all([i.e(21646), i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(91901), i.e(13249), i.e(96246), i.e(46951), i.e(65216), i.e(75514), i.e(745), i.e(52328), i.e(60246), i.e(30870)]).then(i.bind(i, 949397)).then((({
                        showSubscriptionHasBeenChangedDialog: e
                    }) => {
                        e({
                            title: n.t(null, void 0, i(323672)),
                            content: n.t(null, void 0, i(436344)),
                            pushReload: !0
                        })
                    }))
                }
                xWindowEventsEmit(e) {
                    r.TVXWindowEvents.emit(l, JSON.stringify(e))
                }
                currentTabEmit(e) {
                    this.stateChanged.fire(e)
                }
                emit(e) {
                    this.currentTabEmit(e), this.xWindowEventsEmit(e)
                }
                static getInstance() {
                    return d._instance || (d._instance = new d), d._instance
                }
            }

            function u() {
                return d.getInstance()
            }
        },
        36715: (e, t, i) => {
            "use strict";
            i.d(t, {
                isCurrencySymbol: () => r
            });
            var n = i(519073);

            function r(e, t) {
                return "forex" === e || (0, n.hasCryptoTypespec)(e, null != t ? t : [])
            }
        },
        450726: (e, t, i) => {
            "use strict";
            i.d(t, {
                defaultCompareSymbols: () => n
            });
            const n = [{
                symbol: "SPX",
                title: "S&P 500"
            }, {
                symbol: "NDX",
                title: "US 100"
            }, {
                symbol: "DJI",
                title: "Dow 30"
            }, {
                symbol: "NI225",
                title: "Nikkei 225"
            }, {
                symbol: "DAX",
                title: "DAX"
            }, {
                symbol: "UKX",
                title: "FTSE 100"
            }]
        },
        738964: (e, t, i) => {
            "use strict";

            function n() {
                return Promise.all([i.e(47940), i.e(45702)]).then(i.bind(i, 27738))
            }

            function r(e) {
                n().then((t => t.showDisconnectedMessage(e)))
            }

            function o(e) {
                n().then((t => t.showCriticalErrorMessage(e)))
            }
            i.d(t, {
                showDisconnectedMessage: () => r,
                showCriticalErrorMessage: () => o
            })
        },
        653564: (e, t, i) => {
            "use strict";

            function n() {
                return Promise.all([i.e(36037), i.e(43082), i.e(36956), i.e(4100), i.e(50251), i.e(85783), i.e(25977), i.e(38150), i.e(39694), i.e(21015)]).then(i.bind(i, 543846))
            }

            function r() {
                n().then((e => e.createIdcAgreementDialog().open()))
            }

            function o(e) {
                return n().then((t => t.createIdcAgreementDelayDialog(e)))
            }

            function s() {
                return n().then((e => e.createIdcDelayAddServiceDialog()))
            }
            i.r(t), i.d(t, {
                showIdcAgreementDialog: () => r,
                createIdcDelayAgreementDialog: () => o,
                createIdcDelayAddServiceDialog: () => s
            })
        },
        947467: (e, t, i) => {
            "use strict";
            async function n(e) {
                (await Promise.all([i.e(76049), i.e(97500), i.e(36099), i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(7624), i.e(59333), i.e(12275), i.e(33335), i.e(91901), i.e(78707), i.e(83772), i.e(85761), i.e(33287), i.e(64884), i.e(37908), i.e(20187), i.e(51907), i.e(62040), i.e(10302), i.e(36509), i.e(47523), i.e(64566), i.e(29583), i.e(4592), i.e(75514), i.e(5043), i.e(40619), i.e(62073), i.e(15180), i.e(78920), i.e(25418), i.e(42660), i.e(61932)]).then(i.bind(i, 143372))).openExchangeAgreementDialog(e)
            }
            i.d(t, {
                showExchangeAgreementDialog: () => n
            })
        },
        897649: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                firstLoginDataUrl: () => r,
                accumulateErrors: () => o,
                fetchPost: () => s,
                firstLoginData: () => a,
                resendLink: () => l,
                signinUrl: () => c,
                signin: () => u,
                signupUrl: () => h,
                signup: () => _,
                ApiError: () => g,
                AggregateError: () => p,
                recoverPasswordUrl: () => m,
                recoverPassword: () => f,
                resetPassword: () => v
            });
            var n = i(890740);
            const r = "/accounts/first_login_data/";

            function o(e, t) {
                return Object.entries(e).map((e => new g(e[1].join("\n"), t, e[0])))
            }

            function s(e, t) {
                return (0, n.fetch)(e, {
                    method: "POST",
                    credentials: "include",
                    mode: "same-origin",
                    body: t
                })
            }

            function a(e) {
                return s(r, e).then((e => e.ok ? e.json() : e.json().then((t => {
                    throw new p(o(t.errors, e.status))
                }))))
            }

            function l() {
                return s("/api/v1/users/anon/change-email/resend/").then((e => e.ok ? e.json() : e.json().then((e => {
                    throw Error(e.error)
                }))))
            }
            const c = "/accounts/signin/";

            function d(e) {
                return e.json().then((t => {
                    if ("error" in t && "" !== t.error || "code" in t || !e.ok) throw new g(t.error || t.detail, e.status, t.code, t.two_factor_types);
                    return t
                }))
            }

            function u(e) {
                return s(c, e).then(d)
            }
            const h = "/accounts/signup/";

            function _(e) {
                return s(h, e).then((e => e.json().then((t => {
                    if ("errors" in t && "" !== t.errors) throw new p(o(t.errors, e.status))
                }))))
            }
            class g extends Error {
                constructor(e, t, i, n) {
                    super(e), this.type = i, this.status = t, this.secondFactorTypes = n
                }
            }
            class p extends Error {
                constructor(e) {
                    super(e.map((e => e.message)).join("\n")), this.errors = [], this.errors = e
                }
            }
            const m = "/api/v1/recover_password/search/";

            function f(e) {
                return s(m, e).then(d)
            }

            function v(e) {
                return s("/accounts/reset_password/", e).then((e => 400 === e.status ? e.json().then((t => {
                    if ("errors" in t) throw new p(o(t.errors, e.status));
                    throw new g(t.detail, e.status, t.code)
                })) : d(e)))
            }
        },
        213128: (e, t, i) => {
            "use strict";
            i.d(t, {
                StudyMarket: () => s
            });
            var n = i(707202),
                r = i(988411),
                o = i.n(r);
            class s {
                constructor(e, t) {
                    this._visibility = new(o())(!1), this._dialogPromise = null, this._dialog = null, this._chartWidgetCollection = e, this._options = t, this._indicatorsPreloader = new n.IndicatorsPreloader(e)
                }
                visible() {
                    return this._visibility.readonly()
                }
                show(e, t, i) {
                    var n, r;
                    const o = (null === (n = this._options) || void 0 === n ? void 0 : n.onWidget) ? void 0 : this._indicatorsPreloader.getIndicatorPromises();
                    null === this._dialog && this._requestDialog(null != e ? e : [], o, t, i), null === (r = this._dialog) || void 0 === r || r.open(null != e ? e : [], o, t, i)
                }
                hide() {
                    var e;
                    null === (e = this._dialog) || void 0 === e || e.hide()
                }
                getDialog() {
                    return this._dialog
                }
                resetAllPages() {
                    var e;
                    null === (e = this._dialog) || void 0 === e || e.resetAllStudies()
                }
                _requestDialog(e, t, n, r) {
                    var o;
                    if (null === this._dialogPromise) {
                        let s;
                        s = (null === (o = this._options) || void 0 === o ? void 0 : o.onWidget) ? Promise.all([i.e(62346), i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(7624), i.e(59333), i.e(91901), i.e(78707), i.e(6092), i.e(36720), i.e(54819), i.e(1428), i.e(1011), i.e(52701), i.e(105), i.e(47507), i.e(82098), i.e(20849), i.e(89619), i.e(7723), i.e(59382), i.e(78122), i.e(52196), i.e(44412), i.e(43188), i.e(33853), i.e(15335), i.e(26304), i.e(33524), i.e(72688), i.e(99247), i.e(80296), i.e(75514), i.e(30979), i.e(41830), i.e(6456)]).then(i.bind(i, 210794)).then((e => new e.IndicatorsLibraryContainer(this._chartWidgetCollection, this._options))) : Promise.all([i.e(62346), i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(7624), i.e(59333), i.e(91901), i.e(78707), i.e(6092), i.e(36720), i.e(54819), i.e(1428), i.e(1011), i.e(52701), i.e(105), i.e(47507), i.e(82098), i.e(20849), i.e(89619), i.e(7723), i.e(59382), i.e(78122), i.e(52196), i.e(44412), i.e(43188), i.e(33853), i.e(15335), i.e(26304), i.e(33524), i.e(72688), i.e(99247), i.e(80296), i.e(75514), i.e(30979), i.e(41830), i.e(6456)]).then(i.bind(i, 915176)).then((e => new e.IndicatorsContainer(this._chartWidgetCollection))), this._dialogPromise = s.then((i => {
                            this._dialog = i, this._dialog.visible().subscribe((e => {
                                    this._visibility.setValue(e)
                                })),
                                this._dialog.open(e, t, n, r)
                        }))
                    }
                    return this._dialogPromise
                }
            }
        },
        812191: (e, t, i) => {
            "use strict";
            i.d(t, {
                getSymbolPagePath: () => a,
                makeSymbolChartUrl: () => p,
                makeSymbolFinancialsPageUrl: () => m,
                makeSymbolPageUrl: () => g,
                makeSymbolTimelinePageUrl: () => f,
                makeTemplateSymbolUrl: () => h
            });
            var n = i(384809);
            var r = i(620031),
                o = i(36715),
                s = i(889267);

            function a(e, t) {
                if ("spread" === e.type || "expression" === e.type) {
                    const t = e.shortName && l(e.shortName),
                        i = e.proName && l(e.proName);
                    e = { ...e,
                        type: void 0,
                        shortName: t,
                        proName: i
                    }
                }
                return d(u(e, t), c(e))
            }

            function l(e) {
                var t;
                return null === (t = (0, s.tokenize)(e).find((e => "symbol" === e.type))) || void 0 === t ? void 0 : t.value
            }

            function c(e) {
                const t = {
                    shortName: e.shortName,
                    exchange: e.exchange,
                    proName: e.proName,
                    type: e.type
                };
                return e.proName && e.proName.includes(":") && ([t.exchange, t.shortName] = e.proName.split(":")), t
            }

            function d(e, t) {
                const i = encodeURIComponent(t.shortName || ""),
                    n = encodeURIComponent(t.exchange || ""),
                    r = encodeURIComponent(t.proName || "");
                return e.replace("{tvexchange}", n).replace("{tvsymbol}", i).replace("{tvprosymbol}", r)
            }

            function u(e, t = "") {
                const i = ["UKOIL", "USOIL", "XAGAUD", "XAGCAD", "XAGCHF", "XAGEUR", "XAGGBP", "XAGHKD", "XAGJPY", "XAGUSD", "XAUAUD", "XAUCAD", "XAUCHF", "XAUEUR", "XAUGBP", "XAUHKD", "XAUJPY", "XAUNZD", "XAUUSD", "XPDUSD", "XPTUSD", "SPX"];
                return void 0 === e.shortName && void 0 === e.proName ? (console.warn("Params missed"), "/") : v(e) ? e.exchange ? "/symbols/{tvsymbol}/?exchange={tvexchange}" : `/symbols/{tvsymbol}/${t}` : e.exchange || e.proName ? e.shortName && i.includes(e.shortName) ? `/symbols/{tvsymbol}/${t}` : `/symbols/{tvexchange}-{tvsymbol}/${t}` : `/symbols/{tvsymbol}/${t}`
            }

            function h(e, t) {
                let i = e;
                if (!/{tvsymbol}|{tvexchange}|{tvprosymbol}/.test(e)) {
                    let n = "tvprosymbol";
                    void 0 === t.proName && (n = "tvsymbol"), i = `${e}?tvwidgetsymbol={${n}}`
                }
                const n = d(i, c(t));
                if (!(0, r.isSafeUrl)(n)) throw new Error(`The symbol URL ${n} is not allowed.`);
                return n
            }

            function _(e, t, i, r) {
                const o = window.locale_domains ? function(e, t) {
                        const i = t || window.locale || "en";
                        let n = e[i] ? e[i] : e.en;
                        return n = "tradingview.com" === n ? "www.tradingview.com" : n, n ? document.location.protocol + "//" + n : ""
                    }(window.locale_domains, r) : window.location.origin,
                    s = o + d(e, c(t));
                return i ? (0, n.addUtmToUrl)(s, i) : s
            }

            function g(e, t, i, n) {
                return _(u(e, n), e, t, i)
            }

            function p(e, t) {
                return _("/chart/?symbol={tvprosymbol}", e, t)
            }

            function m(e, t, i) {
                return g(e, t, i, "financials-overview/")
            }

            function f(e, t, i) {
                return _(function(e) {
                    return e.exchange && !v(e) ? "/symbols/{tvexchange}-{tvsymbol}/history-timeline/" : "/symbols/{tvsymbol}/history-timeline/"
                }(e), e, t, i)
            }

            function v(e) {
                return !!e.type && (0, o.isCurrencySymbol)(e.type, e.typespecs)
            }
        },
        823348: (e, t, i) => {
            "use strict";
            var n, r = i(823127),
                o = (n = {}, {
                    suggest: function(e, t) {
                        var i = r.ajax({
                            url: t || "/pubscripts-suggest-json/",
                            type: "GET",
                            data: {
                                search: e
                            },
                            dataType: "json"
                        });
                        return i.done((function(e) {
                            if (e && e.results)
                                for (var t = 0; t < e.results.length; t++) n[e.results[t].scriptIdPart] = TradingView.clone(e.results[t])
                        })), i
                    },
                    info: function(e, t = !1) {
                        for (var i = r.Deferred(), o = [], s = [], a = 0; a < e.length; a++) {
                            var l = e[a];
                            n[l] ? o.push(TradingView.clone(n[l])) : s.length < 3e3 && s.push(l)
                        }
                        if (!s.length) return i.resolve(o).promise();
                        var c = {
                            scriptIdPart: s.join(","),
                            show_hidden: t
                        };
                        return r.ajax({
                            url: "/pubscripts-get/",
                            type: "POST",
                            data: c,
                            dataType: "json"
                        }).done((function(e) {
                            for (var t in e = e || []) {
                                var r = e[t];
                                n[r.scriptIdPart] = TradingView.clone(r), o.push(r)
                            }
                            i.resolve(o)
                        })).fail((function() {
                            i.reject()
                        })), i
                    },
                    invalidateCache: function(e) {
                        e.forEach((function(e) {
                            delete n[e]
                        }))
                    },
                    cleanCache: function() {
                        n = []
                    }
                });
            e.exports = o
        },
        309936: (e, t, i) => {
            "use strict";
            i.d(t, {
                ChartSaverBase: () => _
            });
            var n = i(316230),
                r = i(75733),
                o = i(388482),
                s = i(758337),
                a = i(175203),
                l = i(869403),
                c = i.n(l);
            const d = new WeakMap;

            function u(e) {
                let t = d.get(e);
                if (void 0 === t) {
                    const i = JSON.parse(e.content);
                    t = void 0 !== i.charts ? i.charts.map(JSON.stringify) : [e.content], d.set(e, t)
                }
                return t
            }
            const h = new TextEncoder;
            class _ {
                constructor(e) {
                    this._prevChartState = null, this._chartSavedDelegate = new(c()), this._chartWidgetCollection = e, window.initData && window.initData.content && (this._prevChartState = {
                        content: JSON.stringify(window.initData.content)
                    })
                }
                saveChartLineTools(e, t, i, n) {
                    {
                        const r = (0, o.getChartStorage)(),
                            s = this._chartWidgetCollection.metaInfo.uid.value();
                        return r.saveLineToolsAndGroups(s, e, t, i, n)
                    }
                }
                _getCommonSavingInfo(e) {
                    const t = this._chartWidgetCollection,
                        i = this._chartWidgetCollection.chartsSymbols(),
                        n = i[t.activeChartWidget.value().id()],
                        r = { ...(o = n, { ...o,
                                legs: JSON.stringify(null !== (s = o.legs) && void 0 !== s ? s : [])
                            })
                        };
                    var o, s;
                    const a = t.metaInfo;
                    return a.id.value() && (r.id = a.id.value()), r.name = a.name.value() || "", r.description = a.description.value() || "", r.charts_symbols = function(e) {
                        const t = {};
                        for (const i of Object.keys(e)) t[i] = {
                            symbol: e[i].symbol
                        };
                        return JSON.stringify(t)
                    }(i), r.is_realtime = r.is_realtime = e ? "0" : "1", r
                }
                async _saveLineToolsToStorage() {
                    {
                        if (!this._chartWidgetCollection.metaInfo.uid.value()) return Promise.reject("Cannot save for new layout");
                        const e = this._chartWidgetCollection.getAll().map((e => {
                            var t, i;
                            return null !== (i = null === (t = e.lineToolsSynchronizer()) || void 0 === t ? void 0 : t.flushPendingSavings()) && void 0 !== i ? i : null
                        })).filter(s.notNull);
                        e.length && await Promise.all(e)
                    }
                }
                async _saveChart(e, t, i, o) {
                    var s;
                    const l = this._chartWidgetCollection.metaInfo;
                    let c = null !== (s = o.changes) && void 0 !== s ? s : r.changedAll,
                        d = !0;
                    if (2 & c) try {
                        await this._saveLineToolsToStorage()
                    } catch (e) {
                        c |= 1, d = !1
                    }
                    if (1 & c) {
                        const r = e(d);
                        if ((0, n.default)(this._prevChartState, r) && null !== l.id.value()) return this._chartSavedDelegate.fire(!0), void t(l, r);
                        (function(e, t) {
                            const i = null === e ? [] : u(e),
                                n = u(t);
                            let r = 0,
                                o = 0;
                            for (let e = 0; e < n.length; ++e) {
                                const t = h.encode(n[e]).length;
                                r += t, n[e] !== i[e] && (o += t)
                            }
                            a.telemetry.sendChartReport("save_layout_changed_to_total_bytes_ratio", {
                                value: o / r
                            })
                        })(this._prevChartState, r);
                        const s = (e, i) => (d || this._chartWidgetCollection.getAll().forEach((e => {
                            var t;
                            return null === (t = e.lineToolsSynchronizer()) || void 0 === t ? void 0 : t.markAsValidatedBecuaseOfSavingToContent(!0)
                        })), t(e, i));
                        return this._saveChartImpl(r, l, s, i, o, e)
                    }
                    this._chartSavedDelegate.fire(!0), t(l, null)
                }
            }
        },
        845297: (e, t, i) => {
            "use strict";
            var n = i(869403),
                r = i(823127),
                o = i(650151).assert,
                s = i(293689),
                a = i(345848).trackEvent,
                l = i(508846).createGoProDialog,
                c = i(552279).reloginOrGoPro,
                d = i(823348),
                u = i(251954),
                h = i(125226).isFeatureEnabled,
                _ = i(503595).asyncWindowOpen,
                g = i(418147),
                p = i(779923).showWarning,
                m = i(472664).backend,
                f = i(309936).ChartSaverBase;
            const v = {
                saverOnPublishError: i(777754).t(null, void 0, i(308162)),
                saveLibraryError: i(777754).t(null, void 0, i(717994)),
                saveScriptError: i(777754).t(null, void 0, i(487375))
            };

            function b(e, t) {
                e.content = JSON.stringify(t)
            }

            function y(e) {
                return e.returnValue = i(777754).t(null, void 0, i(901535)), e.returnValue
            }
            t.ChartSaver = class extends f {
                constructor(e) {
                    super(e), this._chartAboutToBeSavedDelegate = new n, this._chartSavedDelegate = new n, this._chartSizeLimitExceededDelegate = new n, this._savingToken = null
                }
                chartSizeLimitExceeded() {
                    return this._chartSizeLimitExceededDelegate
                }
                chartAboutToBeSaved() {
                    return this._chartAboutToBeSavedDelegate
                }
                chartSaved() {
                    return this._chartSavedDelegate
                }
                saveToJSON() {
                    var e = this._getCommonSavingInfo(!1);
                    return b(e, this._getChartWidgetCollectionState(!1, !0)), e
                }
                _getChartWidgetCollectionState(e, t, i, n, r) {
                    return e || (t = !0, n = !1), t ? this._chartWidgetCollection.state(!!e, i, n, r) : this._chartWidgetCollection.activeChartWidget.value().state(!!e, i, n, r)
                }
                publishChart(e) {
                    var t = this;
                    return new Promise((function(n) {
                        a("GUI", "Publish Chart");
                        var o = t,
                            s = {
                                accessType: (e = e || {}).isPrivate || TVSettings.getBool("publishchart.private", !1) ? 0 : 1,
                                publishSource: e.publishSource,
                                videoFilename: e.videoFilename,
                                videoDuration: e.videoDuration,
                                videoCam: e.videoCam
                            },
                            l = r(".publish-dropdown-container"),
                            c = r(".publish-chart-button"),
                            d = {
                                savePrivacySetting: !e.doNotSavePrivacySetting,
                                onWidget: e.onWidget
                            },
                            u = e.onPublishUrl,
                            h = e.onPublishError;
                        o._ideaPublisher ? n(o._ideaPublisher.openPublication(s, d)) : Promise.all([Promise.all([i.e(57671), i.e(49680), i.e(88230), i.e(18619), i.e(7624), i.e(59333), i.e(12275), i.e(33335), i.e(83772), i.e(71140), i.e(85761), i.e(33287), i.e(64884), i.e(36956), i.e(20187), i.e(51907), i.e(4100), i.e(50251), i.e(85783), i.e(62040), i.e(83186), i.e(51537), i.e(61893), i.e(63594), i.e(39988), i.e(58269), i.e(31872), i.e(31973), i.e(79098), i.e(31630), i.e(39659), i.e(86279), i.e(22434), i.e(15008), i.e(31124), i.e(75514), i.e(25977), i.e(45209), i.e(55625), i.e(9993), i.e(68027), i.e(84373), i.e(50629)]).then(i.bind(i, 777483)), Promise.all([i.e(57671), i.e(49680), i.e(88230), i.e(18619), i.e(7624), i.e(59333), i.e(12275), i.e(33335), i.e(83772), i.e(71140), i.e(85761), i.e(33287), i.e(64884), i.e(36956), i.e(20187), i.e(51907), i.e(4100), i.e(50251), i.e(85783), i.e(62040), i.e(83186), i.e(51537), i.e(61893), i.e(63594), i.e(39988), i.e(58269), i.e(31872), i.e(31973), i.e(79098), i.e(31630), i.e(39659), i.e(86279), i.e(22434), i.e(15008), i.e(31124), i.e(75514), i.e(25977), i.e(45209), i.e(55625), i.e(9993), i.e(68027), i.e(84373), i.e(50629)]).then(i.bind(i, 792011)), Promise.all([i.e(57671), i.e(49680), i.e(88230), i.e(18619), i.e(7624), i.e(59333), i.e(12275), i.e(33335), i.e(83772), i.e(71140), i.e(85761), i.e(33287), i.e(64884), i.e(36956), i.e(20187), i.e(51907), i.e(4100), i.e(50251), i.e(85783), i.e(62040), i.e(83186), i.e(51537), i.e(61893), i.e(63594), i.e(39988), i.e(58269), i.e(31872), i.e(31973), i.e(79098), i.e(31630), i.e(39659), i.e(86279), i.e(22434), i.e(15008), i.e(31124), i.e(75514), i.e(25977), i.e(45209), i.e(55625), i.e(9993), i.e(68027), i.e(84373), i.e(50629)]).then(i.bind(i, 773792)), Promise.all([i.e(57671), i.e(49680), i.e(88230), i.e(18619), i.e(7624), i.e(59333), i.e(12275), i.e(33335), i.e(83772), i.e(71140), i.e(85761), i.e(33287), i.e(64884), i.e(36956), i.e(20187), i.e(51907), i.e(4100), i.e(50251), i.e(85783), i.e(62040), i.e(83186), i.e(51537), i.e(61893), i.e(63594), i.e(39988), i.e(58269), i.e(31872), i.e(31973), i.e(79098), i.e(31630), i.e(39659), i.e(86279), i.e(22434), i.e(15008), i.e(31124), i.e(75514), i.e(25977), i.e(45209), i.e(55625), i.e(9993), i.e(68027), i.e(84373), i.e(50629)]).then(i.bind(i, 318596))]).then((([{
                            CategoriesProvider: e
                        }, {
                            ChartInfoProvider: t
                        }, {
                            IdeasProvider: i
                        }, {
                            IdeaPublisher: r
                        }]) => {
                            var a = new t({
                                    chartWidgetCollection: o._chartWidgetCollection
                                }),
                                _ = new i({
                                    publish: function(e, t) {
                                        return new Promise((function(i, n) {
                                            var r = {
                                                closeForm: function() {
                                                    i()
                                                },
                                                showError: function(e) {
                                                    n(e)
                                                },
                                                onPublishUrl: u,
                                                onPublishError: h
                                            };
                                            try {
                                                o.onPublish(e, Object.assign({}, t, r))
                                            } catch (e) {
                                                n(v.saverOnPublishError)
                                            }
                                        }))
                                    }
                                }),
                                g = new e;
                            o._ideaPublisher = new r({
                                chartInfoProvider: a,
                                ideasProvider: _,
                                categoriesProvider: g,
                                onOpenEditor: function() {
                                    l.addClass("disabled")
                                },
                                onMinimizeEditor: function() {
                                    l.removeClass("disabled"), c.addClass("inprogress")
                                },
                                onCloseEditor: function() {
                                    l.removeClass("disabled"), c.removeClass("inprogress")
                                }
                            }), n(o._ideaPublisher.openPublication(s, d))
                        }))
                    }))
                }
                publishScript(e, t, i) {
                    var n = this;
                    if (e.accessType = TVSettings.getBool("publishscript.private", !1) ? 0 : 1, n._scriptPublisher) n._scriptPublisher.openPublication(e, t);
                    else {
                        var r = i.scriptPublisher,
                            o = i.scriptsProvider,
                            s = i.categoriesProvider,
                            a = new o({
                                publish: function(e) {
                                    return new Promise((function(t, i) {
                                        var r = {
                                            closeForm: function() {
                                                if (e && e.scriptPublication && e.scriptPublication.updateScriptIdPart) {
                                                    var i = e.scriptPublication.updateScriptIdPart;
                                                    d.invalidateCache([i]), window.studyMarket && window.studyMarket.resetAllPages()
                                                }
                                                t()
                                            },
                                            showError: function(e) {
                                                i(e)
                                            },
                                            savePrivacySetting: !0
                                        };
                                        try {
                                            n.onPublish(e, r)
                                        } catch (e) {
                                            i(v.saverOnPublishError)
                                        }
                                    }))
                                }
                            });
                        n._scriptPublisher = new r({
                            scriptsProvider: a,
                            categoriesProvider: new s,
                            scriptType: e.scriptType,
                            scriptTitle: e.title,
                            existingLibraryInfo: e.existingLibraryInfo
                        }), n._scriptPublisher.openPublication(e, t)
                    }
                }
                onPublish(e, t) {
                    {
                        var n = this;
                        if (n.publishInProgress) return;
                        var o = t && t.publishAllLayout,
                            l = n._getCommonSavingInfo(!0),
                            c = !1;
                        e.scriptPublication && (e.scriptPublication.scriptProtection === g.Access.ACCESS_CLOSED_NEEDS_AUTH && (c = !0), l.scriptProtection = parseInt(g.Access.MAP_NAME_TO_ID[e.scriptPublication.scriptProtection])), b(l, this._getChartWidgetCollectionState(!0, o, !0, c)), l.image = JSON.stringify(this._chartWidgetCollection.images({
                            onlyActiveChart: !o
                        }));
                        const f = r => {
                            window.removeEventListener("beforeunload", y), n.publishInProgress = !1;
                            var o = r.responseText || "";
                            if ("ok:" === o.substring(0, 3)) {
                                var s = !1;
                                if (t.savePrivacySetting) {
                                    s = !e.is_public;
                                    TVSettings.setValue(e.scriptPublication ? "publishscript.private" : "publishchart.private", s)
                                }
                                var a = o.substring(3),
                                    l = JSON.parse(a);
                                n._chartWidgetCollection.metaInfo.id.value() || n._chartWidgetCollection.metaInfo.id.setValue(l.id), t.closeForm && t.closeForm(), t.onPublishUrl && t.onPublishUrl(l.publishUrl, l.uuid), u.emit("onPublishUrl", l.uuid), n._lastPublishUrl = l.publishUrl, n.setPopupUrl && n.setPopupUrl(l.publishUrl)
                            } else {
                                (413 === r.status || /^[\d\s]*request.+large/i.test(o.trim())) && (o = i(777754).t(null, void 0, i(701581)));
                                var c = o || i(777754).t(null, void 0, i(669246));
                                t.showError && t.showError(c, {
                                    html: !0
                                }), t.onPublishError && t.onPublishError(c), n.setPopupUrl && n.setPopupUrl(void 0)
                            }
                        };
                        var d = e.scriptPublication,
                            h = !(!d || !d.updateScriptIdPart),
                            m = new Promise((function(e, t) {
                                var i;
                                d ? (h ? (window.addEventListener("beforeunload", y), i = s.publishNext(d.scriptSource, d.updateScriptIdPart)) : i = s.publishNew(d.scriptSource, d.scriptProtection), i.done((function(t) {
                                    e(t.publishedstudyscript_id)
                                })).fail((function(e) {
                                    let i = "";
                                    i = -1 !== e.indexOf("already published library") ? v.saveLibraryError : v.saveScriptError, p({
                                        title: i,
                                        text: e
                                    }), t()
                                }))) : e()
                            }));
                        h ? m.then((function(t) {
                            var i = {
                                publishedstudyscript_id: t,
                                script_terms: e.script_terms,
                                description: e.description,
                                tags: e.tags,
                                preserve_old_chart: e.preserveOldChart
                            };
                            r.ajax({
                                url: "/script-update/",
                                type: "post",
                                dataType: "text",
                                data: r.extend({}, l, i),
                                complete: f
                            })
                        }), f) : m.then((function(t) {
                            t && (e.publishedstudyscript_id = t);
                            for (var i = e.tags.split(","), n = e.scriptPublication ? "Script" : "Idea", o = 0; o < i.length; o++) a(n + " Publication", n + " Tag", i[o]);
                            if (e.scriptPublication) {
                                var s = e.scriptPublication.scriptProtection;
                                a("Script Publication", "Script Visibility", {
                                    open_no_auth: "Open",
                                    closed_no_auth: "Protected",
                                    closed_needs_auth: "Invite Only"
                                }[s])
                            } else {
                                var c = e.is_education ? "Education" : "Analysis",
                                    d = e.is_public ? "Public" : "Private";
                                a("Idea Publication", "Idea Type", c), a("Idea Publication", "Idea Strategy", ["Neutral", "Long", "Short"][e.direction]), a("Idea Publication", "Idea Privacy", d)
                            }
                            r.ajax({
                                url: "/publishchart/",
                                type: "post",
                                dataType: "text",
                                data: r.extend({}, l, e),
                                complete: f
                            })
                        }), f), n.publishInProgress = !0, t.onWidget || "" !== e.name && "" !== e.description && e.description.length <= 7e4 && e.name.length <= 64 && _(new Promise((function(e) {
                            n.setPopupUrl = e
                        })))
                    }
                }
                _saveChartImpl(e, t, i, n, o, s) {
                    var a = i,
                        d = n;
                    if (this._savingToken = String(Math.random()), e.savingToken = this._savingToken, a = function(s) {
                            if (this._savingToken = null, "ok:" === s.substring(0, 3)) {
                                var a = s.substring(3),
                                    c = JSON.parse(a);
                                t.id.value() || (t.id.setValue(c.id), t.uid.setValue(c.uid)), t.lastModified.setValue(c.lastModified), "function" == typeof i && i(t, e)
                            } else if ("saved_chart_limit_reached" === s || "" === s) {
                                if ("function" == typeof n && n(), o.noDefaultOnFail) return;
                                l({
                                    feature: "savedChartsLimit"
                                })
                            } else "function" == typeof n && n(), r("#error").html(s);
                            r(window).off("beforeunload.savechart")
                        }, d = async function(e) {
                            if (this._savingToken = null, e && 413 === e.status) return this._chartSizeLimitExceededDelegate.fire(), void("function" == typeof n && n.apply(null, arguments));
                            if (e && 403 === e.status) {
                                try {
                                    "login_required" === (await e.json()).code && c({
                                        feature: "savedChartsLimit"
                                    })
                                } catch (e) {}
                                "function" == typeof n && n.apply(null, arguments)
                            } else o.retry ? "function" == typeof n && n.apply(null, arguments) : (o.retry = !0, this._saveChart(s, i, n, o))
                        }, !e.name) return console.warn("Saving chart with empty name is not allowed"), void n();
                    m.saveChart(e.name, e.short_name, e.resolution, e, t).then(a.bind(this)).catch(d.bind(this))
                }
                saveChartSilently(e, t, n) {
                    n = n || {};
                    var s = function(e) {
                        var t = e && h("remove_line_tools_from_content"),
                            i = this._getChartWidgetCollectionState(!1, void 0, void 0, void 0, t),
                            r = this._getCommonSavingInfo(!1, t);
                        return b(r, i), n.chartName && (r.name = n.chartName), r.name && 0 !== r.name.length || !n.defaultChartName || (r.name = n.defaultChartName), n.autoSave && (r.autoSave = !0), r
                    }.bind(this);
                    r(window).on("beforeunload.savechart", (function() {
                        return i(777754).t(null, void 0, i(274085))
                    })), this._isSaveInProcess = !0, this._chartAboutToBeSavedDelegate.fire(), this._saveChart(s, function(t, i) {
                        o(!this._chartWidgetCollection.readOnly(), "Trying to save layout in read-only mode"), i && this._chartWidgetCollection.metaInfo.name.setValue(i.name), this._prevChartState = i, this._chartSavedDelegate.fire(!0), this._isSaveInProcess = !1, e && e({
                            uid: t.uid.value(),
                            data: i
                        }), this._prevChartState && delete this._prevChartState.savingToken
                    }.bind(this), function() {
                        this._chartSavedDelegate.fire(!1), this._isSaveInProcess = !1, t && t.apply(null, arguments)
                    }.bind(this), n), r(window).off("beforeunload.savechart")
                }
                isSaveInProcess() {
                    return this._isSaveInProcess
                }
            }
        },
        171072: (e, t, i) => {
            "use strict";
            i.d(t, {
                getTimeFrames: () => r
            });
            var n = i(777754);

            function r() {
                return {
                    "1d": {
                        text: n.t(null, void 0, i(932120)),
                        value: {
                            value: "1D",
                            type: "period-back"
                        },
                        targetResolution: "1",
                        description: n.t(null, {
                            plural: "%d days",
                            count: 1
                        }, i(482792)).replace("%d", "1")
                    },
                    "5d": {
                        text: n.t(null, void 0, i(905486)),
                        value: {
                            value: "5D",
                            type: "period-back"
                        },
                        targetResolution: "5",
                        description: n.t(null, {
                            plural: "%d days",
                            count: 5
                        }, i(482792)).replace("%d", "5")
                    },
                    "1w": {
                        text: n.t(null, void 0, i(234880)),
                        value: {
                            value: "7D",
                            type: "period-back"
                        },
                        targetResolution: "15",
                        description: n.t(null, {
                            plural: "%d weeks",
                            count: 1
                        }, i(632123)).replace("%d", "1")
                    },
                    "1m": {
                        text: n.t(null, void 0, i(460356)),
                        value: {
                            value: "1M",
                            type: "period-back"
                        },
                        targetResolution: "30",
                        description: n.t(null, {
                            plural: "%d months",
                            count: 1
                        }, i(117108)).replace("%d", "1")
                    },
                    "3m": {
                        text: n.t(null, void 0, i(440675)),
                        value: {
                            value: "3M",
                            type: "period-back"
                        },
                        targetResolution: "60",
                        description: n.t(null, {
                            plural: "%d months",
                            count: 3
                        }, i(117108)).replace("%d", "3")
                    },
                    "6m": {
                        text: n.t(null, void 0, i(281788)),
                        value: {
                            value: "6M",
                            type: "period-back"
                        },
                        targetResolution: "120",
                        description: n.t(null, {
                            plural: "%d months",
                            count: 6
                        }, i(117108)).replace("%d", "6")
                    },
                    ytd: {
                        text: n.t(null, void 0, i(989013)),
                        value: {
                            value: "YTD",
                            type: "period-back"
                        },
                        targetResolution: "1D"
                    },
                    "12m": {
                        text: n.t(null, void 0, i(254790)),
                        value: {
                            value: "12M",
                            type: "period-back"
                        },
                        targetResolution: "1D",
                        description: n.t(null, {
                            plural: "%d years",
                            count: 1
                        }, i(406550)).replace("%d", "1")
                    },
                    "24m": {
                        text: n.t(null, void 0, i(440956)),
                        value: {
                            value: "24M",
                            type: "period-back"
                        },
                        targetResolution: "1W",
                        description: n.t(null, {
                            plural: "%d years",
                            count: 2
                        }, i(406550)).replace("%d", "2")
                    },
                    "60m": {
                        text: n.t(null, void 0, i(320013)),
                        value: {
                            value: "60M",
                            type: "period-back"
                        },
                        targetResolution: "1W",
                        description: n.t(null, {
                            plural: "%d years",
                            count: 5
                        }, i(406550)).replace("%d", "5")
                    },
                    all: {
                        text: n.t(null, void 0, i(695271)),
                        value: {
                            value: "ALL",
                            type: "period-back"
                        },
                        targetResolution: "1M"
                    },
                    lastsession: {
                        text: n.t(null, void 0, i(932120)),
                        value: {
                            value: "LASTSESSION",
                            type: "period-back"
                        },
                        targetResolution: "1",
                        description: n.t(null, void 0, i(869213))
                    }
                }
            }
        },
        990536: (e, t, i) => {
            "use strict";
            i.d(t, {
                timeFrames: () => n
            });
            const n = (0, i(171072).getTimeFrames)()
        },
        647706: (e, t, i) => {
            "use strict";

            function n(e, t) {
                const i = Object.create(Object.getPrototypeOf(e));
                for (const n of t) Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
                return i
            }
            i.d(t, {
                pickFields: () => n
            })
        },
        535799: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                htmlEscape: () => o,
                removeTags: () => s,
                removeSpaces: () => a,
                capitalizeFirstLetterInWord: () => l
            });
            const n = /[<"'&>]/g,
                r = e => `&#${e.charCodeAt(0)};`;

            function o(e) {
                return e.replace(n, r)
            }

            function s(e = "") {
                return e.replace(/(<([^>]+)>)/gi, "")
            }

            function a(e = "") {
                return e.replace(/\s+/g, "")
            }

            function l(e = "") {
                return e.replace(/\b\w/g, (e => e.toUpperCase()))
            }
        },
        620031: (e, t, i) => {
            "use strict";

            function n(e) {
                const t = new URL(e, document.baseURI);
                return l(t) && a(t) && s(t)
            }

            function r(e) {
                const t = new URL(e, document.baseURI);
                return a(t) && s(t)
            }

            function o(e) {
                return !e.split(/(\s+)/).filter((e => e.trim().length > 0)).some((e => {
                    try {
                        const t = new URL(e);
                        return !(!t || !t.hostname.length) && !r(e)
                    } catch (e) {
                        return !1
                    }
                }))
            }
            i.d(t, {
                isInternalUrl: () => n,
                isSafeUrl: () => r,
                validateUrlsInText: () => o,
                isInternalHost: () => c,
                isTvLink: () => d
            });
            const s = e => !e.username,
                a = e => "http:" === e.protocol || "https:" === e.protocol,
                l = e => e.hostname === location.hostname || !/^\d+\.\d+\.\d+\.\d+$/.test(e.hostname) && c(e.hostname);

            function c(e, t = window.location.hostname) {
                const i = "." === t.slice(-1) ? 3 : 2,
                    n = t.toLowerCase().split(".").slice(-i),
                    r = e.toLowerCase().split(".").slice(-n.length);
                return n.join(".") === r.join(".")
            }

            function d(e) {
                try {
                    return e.startsWith("/") || c(new URL(e).hostname, "tradingview.com")
                } catch (e) {
                    return !1
                }
            }
        },
        384809: (e, t, i) => {
            "use strict";
            i.d(t, {
                addUtmToUrl: () => r
            });
            var n = i(186521);

            function r(e, t) {
                if (!/([a-zA-Z0-9.-]*tradingview.com)|localhost/.test(e)) return e;
                const i = (0, n.buildUtmQueryString)(t);
                if ("" === i) return e;
                const r = e.indexOf("?"),
                    o = e.indexOf("#"),
                    s = -1 !== o;
                if (-1 !== r && (!s || r < o)) {
                    return `${e.slice(0,r)}?${s?e.slice(r+1,o):e.slice(r+1)}&${i}${s?e.slice(o):""}`
                }
                if (s) {
                    return `${e.slice(0,o)}?${i}${e.slice(o)}`
                }
                return `${e}?${i}`
            }
        },
        186521: (e, t, i) => {
            "use strict";
            i.d(t, {
                filterUtmInfo: () => s,
                buildUtmQueryString: () => a,
                buildUtmQueryStringFromUrlParams: () => l
            });
            var n = i(798062),
                r = i(535799);
            const o = ["utm_source", "utm_medium", "utm_campaign"];

            function s(e) {
                const t = {};
                return o.forEach((i => {
                    const n = e[i];
                    "string" == typeof n && "" !== n && (t[i] = (0, r.htmlEscape)(n))
                })), t
            }

            function a(e, t = !1) {
                const i = (0, n.createUrlParams)(e);
                return i && t ? "?" + i : i
            }

            function l(e) {
                return a(s((0, n.getUrlParams)()), e)
            }
        },
        448641: e => {
            "use strict";
            e.exports = JSON.parse('{"ar_AE":{"language":"ar","language_name":"العربية","flag":"ae","geoip_code":"ae","countries_with_this_language":["ae","bh","dj","dz","eg","er","iq","jo","km","kw","lb","ly","ma","mr","om","qa","sa","sd","so","sy","td","tn","ye"],"priority":500,"dir":"rtl","iso":"ar","iso_639_3":"arb","show_on_widgets":true,"global_name":"Arabic"},"br":{"language":"pt","language_name":"Português","flag":"br","geoip_code":"br","priority":650,"iso":"pt","iso_639_3":"por","show_on_widgets":true,"global_name":"Portuguese"},"ca_ES":{"language":"ca_ES","language_name":"Català","flag":"es","geoip_code":"es","priority":745,"iso":"ca","iso_639_3":"cat","disabled":true,"show_on_widgets":true,"global_name":"Catalan"},"cs":{"language":"cs","language_name":"Czech","flag":"cz","geoip_code":"cz","priority":718,"iso":"cs","iso_639_3":"ces","show_on_widgets":true,"global_name":"Czech","is_in_european_union":true,"isBattle":true},"de_DE":{"language":"de","language_name":"Deutsch","flag":"de","geoip_code":"de","countries_with_this_language":["at","ch"],"priority":756,"iso":"de","iso_639_3":"deu","show_on_widgets":true,"global_name":"German","is_in_european_union":true},"en":{"language":"en","language_name":"English","flag":"us","geoip_code":"us","priority":1000,"iso":"en","iso_639_3":"eng","show_on_widgets":true,"global_name":"English","is_only_recommended_tw_autorepost":true},"es":{"language":"es","language_name":"Español","flag":"es","geoip_code":"es","countries_with_this_language":["mx","ar","ve","cl","co","pe","uy","py","cr","gt","c","bo","pa","pr"],"priority":744,"iso":"es","iso_639_3":"spa","show_on_widgets":true,"global_name":"Spanish","is_in_european_union":true},"fa_IR":{"language":"fa","language_name":"فارسى","flag":"ir","geoip_code":"ir","priority":480,"dir":"rtl","iso":"fa","iso_639_3":"fas","show_on_widgets":false,"global_name":"Iranian","disabled":true},"fr":{"language":"fr","language_name":"Français","flag":"fr","geoip_code":"fr","priority":750,"iso":"fr","iso_639_3":"fra","show_on_widgets":true,"global_name":"French","is_in_european_union":true},"he_IL":{"language":"he_IL","language_name":"עברית","flag":"il","geoip_code":"il","priority":490,"dir":"rtl","iso":"he","iso_639_3":"heb","show_on_widgets":true,"global_name":"Israeli"},"hu_HU":{"language":"hu_HU","language_name":"Magyar","flag":"hu","geoip_code":"hu","priority":724,"iso":"hu","iso_639_3":"hun","show_on_widgets":true,"global_name":"Hungarian","is_in_european_union":true,"disabled":true},"id":{"language":"id_ID","language_name":"Bahasa Indonesia","flag":"id","geoip_code":"id","priority":648,"iso":"id","iso_639_3":"ind","show_on_widgets":true,"global_name":"Indonesian"},"in":{"language":"en","language_name":"English ‎(India)‎","flag":"in","geoip_code":"in","priority":800,"iso":"en","iso_639_3":"eng","show_on_widgets":true,"global_name":"Indian"},"it":{"language":"it","language_name":"Italiano","flag":"it","geoip_code":"it","priority":737,"iso":"it","iso_639_3":"ita","show_on_widgets":true,"global_name":"Italian","is_in_european_union":true},"ja":{"language":"ja","language_name":"日本語","flag":"jp","geoip_code":"jp","priority":600,"iso":"ja","iso_639_3":"jpn","show_on_widgets":true,"global_name":"Japanese"},"kr":{"language":"ko","language_name":"한국어","flag":"kr","geoip_code":"kr","priority":550,"iso":"ko","iso_639_3":"kor","show_on_widgets":true,"global_name":"Korean"},"ms_MY":{"language":"ms_MY","language_name":"Bahasa Melayu","flag":"my","geoip_code":"my","priority":647,"iso":"ms","iso_639_3":"zlm","show_on_widgets":true,"global_name":"Malaysian"},"pl":{"language":"pl","language_name":"Polski","flag":"pl","geoip_code":"pl","priority":725,"iso":"pl","iso_639_3":"pol","show_on_widgets":true,"global_name":"Polish","is_in_european_union":true},"ru":{"language":"ru","language_name":"Русский","flag":"ru","geoip_code":"ru","countries_with_this_language":["am","by","kg","kz","md","tj","tm","uz"],"priority":700,"iso":"ru","iso_639_3":"rus","show_on_widgets":true,"global_name":"Russian","is_only_recommended_tw_autorepost":true},"sv_SE":{"language":"sv","language_name":"Svenska","flag":"se","geoip_code":"se","priority":723,"iso":"sv","iso_639_3":"swe","show_on_widgets":true,"global_name":"Swedish","is_in_european_union":true},"th_TH":{"language":"th","language_name":"ภาษาไทย","flag":"th","geoip_code":"th","priority":646,"iso":"th","iso_639_3":"tha","show_on_widgets":true,"global_name":"Thai"},"tr":{"language":"tr","language_name":"Türkçe","flag":"tr","geoip_code":"tr","priority":713,"iso":"tr","iso_639_3":"tur","show_on_widgets":true,"global_name":"Turkish","is_only_recommended_tw_autorepost":true},"vi_VN":{"language":"vi","language_name":"Tiếng Việt","flag":"vn","geoip_code":"vn","priority":645,"iso":"vi","iso_639_3":"vie","show_on_widgets":true,"global_name":"Vietnamese"},"zh_CN":{"language":"zh","language_name":"简体中文","flag":"cn","geoip_code":"cn","countries_with_this_language":["zh"],"priority":537,"iso":"zh-Hans","iso_639_3":"cmn","show_on_widgets":true,"global_name":"Chinese"},"zh_TW":{"language":"zh_TW","language_name":"繁體中文","flag":"tw","geoip_code":"tw","countries_with_this_language":["hk"],"priority":536,"iso":"zh-Hant","iso_639_3":"cmn","show_on_widgets":true,"global_name":"Taiwanese"},"el":{"language":"el","language_name":"Greek","flag":"gr","geoip_code":"gr","priority":625,"iso":"el","iso_639_3":"ell","global_name":"Greek","is_in_european_union":true,"isBattle":true},"nl_NL":{"language":"nl_NL","language_name":"Dutch","flag":"nl","geoip_code":"nl","priority":731,"iso":"nl","iso_639_3":"nld","global_name":"Dutch","is_in_european_union":true,"isBattle":true},"ro":{"language":"ro","language_name":"Romanian","flag":"ro","geoip_code":"ro","priority":707,"iso":"ro","iso_639_3":"ron","global_name":"Romanian","is_in_european_union":true,"isBattle":true}}')
        },
        384898: e => {
            "use strict";
            e.exports = JSON.parse('{"ebitda":43000553610,"gross_profit":43000553611,"total_revenue":43000553619,"cost_of_goods":43000553618,"dep_amort_exp_income_s":43000563477,"cost_of_goods_excl_dep_amort":43000563478,"operating_expenses":43000563463,"sell_gen_admin_exp_total":43000553613,"sell_gen_admin_exp_other":43000553614,"research_and_dev":43000553612,"other_oper_expense_total":43000563483,"total_oper_expense":43000553615,"earnings_per_share_diluted":43000553616,"net_income":43000553617,"oper_income":43000563464,"total_non_oper_income":43000563465,"non_oper_interest_exp":43000563466,"interest_expense_on_debt":43000563467,"interest_capitalized":43000563468,"non_oper_income":43000563471,"non_oper_interest_income":43000563473,"pretax_equity_in_earnings":43000563474,"other_income":43000563479,"unusual_expense_inc":43000563476,"pretax_income":43000563462,"equity_in_earnings":43000563487,"income_tax":43000563492,"minority_interest_exp":43000563495,"after_tax_other_income":43000563497,"net_income_bef_disc_oper":43000563500,"discontinued_operations":43000563502,"dilution_adjustment":43000563504,"preferred_dividends":43000563506,"diluted_net_income":43000563516,"earnings_per_share_basic":43000563520,"total_liabilities_shrhldrs_equity":43000553626,"total_debt":43000553622,"total_assets":43000553623,"total_current_assets":43000557441,"cash_n_short_term_invest":43000563702,"cash_n_equivalents":43000563709,"short_term_invest":43000563716,"total_receivables_net":43000563738,"accounts_receivables_net":43000563740,"other_receivables":43000563741,"inventory_work_in_progress":43000563746,"inventory_progress_payments":43000563748,"inventory_finished_goods":43000563749,"inventory_raw_materials":43000563753,"prepaid_expenses":43000563757,"other_current_assets_total":43000563761,"total_non_current_assets":43000557440,"long_term_investments":43000563639,"long_term_note_receivable":43000563641,"investments_in_unconcsolidate":43000563645,"other_investments":43000563649,"ppe_total_net":43000563657,"ppe_total_gross":43000563667,"accum_deprec_total":43000563673,"deferred_tax_assests":43000563683,"intangibles_net":43000563686,"goodwill":43000563688,"other_intangibles_net":43000563689,"long_term_other_assets_total":43000563693,"total_liabilities":43000553624,"total_current_liabilities":43000557437,"short_term_debt":43000563554,"current_port_debt_capital_leases":43000563557,"short_term_debt_excl_current_port":43000563563,"notes_payable_short_term_debt":43000563600,"other_short_term_debt":43000563614,"accounts_payable":43000563619,"income_tax_payable":43000563621,"dividends_payable":43000563624,"accrued_payroll":43000563628,"deferred_income_current":43000563631,"other_current_liabilities":43000563635,"total_non_current_liabilities":43000557436,"long_term_debt":43000553621,"long_term_debt_excl_capital_lease":43000563521,"capital_operating_lease_obligations":43000563522,"capital_lease_obligations":43000563527,"operating_lease_liabilities":43000563532,"provision_f_risks":43000563535,"deferred_tax_liabilities":43000563536,"deferred_income_non_current":43000563540,"other_liabilities_total":43000563545,"total_equity":43000553625,"shrhldrs_equity":43000557442,"common_equity_total":43000563866,"retained_earnings":43000563867,"paid_in_capital":43000563871,"common_stock_par":43000563873,"additional_paid_in_capital":43000563874,"treasury_stock_common":43000563875,"other_common_equity":43000563877,"preferred_stock_carrying_value":43000563879,"minority_interest":43000563884,"free_cash_flow":43000553630,"cash_f_operating_activities":43000553627,"funds_f_operations":43000563886,"net_income_starting_line":43000563888,"cash_flow_deprecation_n_amortization":43000563892,"depreciation_depletion":43000564142,"amortization":43000564143,"cash_flow_deferred_taxes":43000564144,"non_cash_items":43000564146,"total_extra_items":43000564145,"changes_in_working_capital":43000564147,"change_in_accounts_receivable":43000564148,"change_in_taxes_payable":43000564149,"change_in_accounts_payable":43000564150,"change_in_accrued_expenses":43000564151,"change_in_inventories":43000564153,"change_in_other_assets":43000564154,"cash_f_investing_activities":43000553628,"purchase_sale_business":43000564156,"sales_of_business":43000564158,"purchase_of_business":43000564159,"purchase_sale_investments":43000564160,"sales_of_investments":43000564161,"purchase_of_investments":43000564162,"other_investing_cash_flow_items_total":43000564163,"other_investing_cash_flow_sources":43000564164,"other_investing_cash_flow_uses":43000564165,"capital_expenditures":43000564166,"capital_expenditures_fixed_assets":43000564167,"capital_expenditures_other_assets":43000564168,"cash_f_financing_activities":43000553629,"issuance_of_stock_net":43000564169,"sale_of_stock":43000564170,"purchase_of_stock":43000564171,"issuance_of_debt_net":43000564172,"issuance_of_short_term_debt":43000564173,"issuance_of_long_term_debt":43000564175,"supplying_of_long_term_debt":43000564176,"reduction_of_long_term_debt":43000564177,"issuance_of_other_debt":43000564178,"other_financing_cash_flow_items_total":43000564179,"other_financing_cash_flow_sources":43000564181,"other_financing_cash_flow_uses":43000564182,"total_cash_dividends_paid":43000564183,"common_dividends_cash_flow":43000564185,"preferred_dividends_cash_flow":43000564186,"market_cap_basic":43000597015,"number_of_employees":43000597080,"dividends_yield":43000597817,"dividend_payout_ratio":43000597738,"price_earnings":43000597017,"price_sales":43000597019,"price_cash_flow":43000597816,"price_book":43000597016,"enterprise_value":43000597077,"enterprise_value_ebitda":43000597064,"ev_ebit":43000597063,"ev_revenue":43000597065,"price_to_free_cash_flow":43000597814,"price_to_tangible_book":43000597815,"price_earnings_forward":43000597831,"price_sales_forward":43000597832,"return_on_assets":43000597054,"return_on_equity":43000597021,"return_on_invested_capital":43000597056,"gross_margin":43000597811,"operating_margin":43000597076,"ebitda_margin":43000597075,"net_margin":43000597074,"return_on_equity_adjust_to_book":43000597055,"return_on_tang_assets":43000597052,"return_on_tang_equity":43000597053,"free_cash_flow_margin":43000597813,"quick_ratio":43000597050,"current_ratio":43000597051,"invent_turnover":43000597046,"asset_turnover":43000597022,"debt_to_asset":43000597031,"debt_to_equity":43000597078,"long_term_debt_to_assets":43000597048,"debt_to_ebitda":43000597032,"debt_to_revenue":43000597033,"effective_interest_rate_on_debt":43000597034,"equity_to_asset":43000597035,"goodwill_to_asset":43000597036,"interst_cover":43000597037,"invent_to_revenue":43000597047,"share_buyback_ratio":43000597057,"sloan_ratio":43000597058,"earnings_estimate":43000597066,"sales_estimates":43000597067,"revenue_one_year_growth":43000597068,"earnings_per_share_basic_one_year_growth":43000597069,"earnings_per_share_diluted_one_year_growth":43000597071,"accruals_ratio":43000597073,"tangible_common_equity_ratio":43000597079,"revenue_per_employee":43000597081,"net_income_per_employee":43000597082,"graham_numbers":43000597084,"ncavps_ratio":43000597085,"quality_ratio":43000597086,"gross_profit_to_asset":43000597087,"buyback_yield":43000597088,"cash_conversion_cycle":43000597089,"peg_ratio":43000597090,"altman_z_score":43000597092,"piotroski_f_score":43000597734,"sustainable_growth_rate":43000597736,"research_and_develop_to_revenue":43000597739,"earnings_yield":43000597010,"tobin_q_ratio":43000597834,"beneish_m_score":43000597835,"kz_index":43000597844,"fulmer_h_factor":43000597847,"springate_score":43000597848,"zmijewski_score":43000597850,"cash_to_debt":43000597023,"cogs_to_revenue":43000597026,"days_invent":43000597028,"days_pay":43000597029,"day_sales_out":43000597030,"price_free_cash_flow":43000597814,"price_tangible_book":43000597815,"book_value_per_share":43000670330,"book_tangible_per_share":43000597072,"return_on_common_equity":43000656797,"ebit":43000670329,"total_shares_outstanding":43000670331,"float_shares_outstanding":43000670341,"dps_common_stock_prim_issue":43000670334,"basic_shares_outstanding":43000670320,"diluted_shares_outstanding":43000670322,"total_inventory":43000563745,"net_debt":43000665310}')
        }
    }
]);
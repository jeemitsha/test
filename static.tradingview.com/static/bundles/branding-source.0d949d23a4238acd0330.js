(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [30187], {
        541483: i => {
            i.exports = {}
        },
        650401: (i, e, t) => {
            "use strict";
            t.d(e, {
                getWidgetSheriffActions: () => d
            });
            var a = t(125226),
                n = t(890740),
                s = t(272001),
                r = t(952598);
            const o = window.WIDGET_SHERIFF_HOST || "https://www.xstaging-widget.tv",
                h = (0, s.getLogger)("WidgetSheriff.Widget");
            let l = null;
            async function d() {
                return null === l && (l = await async function() {
                    if (!(0, a.isFeatureEnabled)("widget-sheriff")) return Promise.resolve([]);
                    const i = document.location.ancestorOrigins && document.location.ancestorOrigins.length ? document.location.ancestorOrigins[document.location.ancestorOrigins.length - 1] : null;
                    if (null === i) return h.logWarn("ancestorOrigin is undefined"), Promise.resolve([]);
                    const e = new URL("/sheriff/api/v1/rules/search", o);
                    e.searchParams.append("origin", i);
                    return (await (0, n.fetch)(e.toJSON()).then((i => {
                        if (!i.ok) throw new Error("Guard request error occured");
                        return 204 === i.status ? Promise.resolve({
                            actions: []
                        }) : i.json()
                    })).catch((i => (h.logWarn(i.message), Promise.resolve({
                        actions: []
                    }))))).actions.filter((i => r.widgetSheriffActions.has(i)))
                }()), Promise.resolve(l)
            }
        },
        952598: (i, e, t) => {
            "use strict";
            var a;
            t.d(e, {
                    KnownAction: () => a,
                    widgetSheriffActions: () => n
                }),
                function(i) {
                    i.Expand = "expand-logo"
                }(a || (a = {}));
            const n = new Set([a.Expand])
        },
        510609: (i, e, t) => {
            "use strict";
            t.r(e), t.d(e, {
                addBrandingSource: () => fi
            });
            var a = t(819593),
                n = t(327714),
                s = t(12481),
                r = t(86441),
                o = t(934026),
                h = t(314967),
                l = t(650151),
                d = t(777754),
                c = t(638456),
                g = t(495046),
                m = t(169323),
                _ = t(858063),
                w = t(455567),
                u = t(114123),
                v = t(368791),
                p = t(741341),
                f = t(399298),
                b = t(812191);
            var V = t(186521);

            function y(i, e) {
                const a = function() {
                        const i = window.initData.hashSettings;
                        if (Object.keys(i).length > 0) return (0, V.filterUtmInfo)(i);
                        const e = new URLSearchParams(location.href);
                        return {
                            utm_campaign: e.get("utm_campaign") || void 0,
                            utm_source: e.get("utm_source") || void 0
                        }
                    }(),
                    n = function(i) {
                        var e;
                        const t = (null === (e = location.ancestorOrigins) || void 0 === e ? void 0 : e[0]) || document.referrer;
                        return i.utm_source || function(i) {
                            try {
                                return new URL(i).host
                            } catch (i) {
                                return ""
                            }
                        }(t)
                    }(a);
                !async function(i) {
                    var e;
                    null === (e = await async function() {
                        return (await Promise.all([t.e(26904), t.e(36683)]).then(t.bind(t, 449946))).getTrackerInstance() || null
                    }()) || void 0 === e || e.trackWidgetTVLinkClick(i)
                }({
                    widget_type: T(a),
                    domain: n,
                    link: i,
                    target_type: e
                })
            }

            function T(i) {
                if (i.utm_campaign) return i.utm_campaign;
                const e = location.pathname;
                return e.includes("embed-widget") ? e.split("/")[2] : e
            }
            var Z = t(650401),
                M = t(952598),
                x = t(125226),
                S = t(632446),
                C = t(914679),
                k = t(837512),
                A = t(623331),
                z = t(854905),
                L = t(267263),
                H = t(845849),
                P = t(77197),
                W = t(287681),
                B = t(89378),
                I = t(594696);
            t(541483);
            const O = [
                ["logo-light", L],
                ["logo-dark", P],
                ["tradingview-light", H],
                ["tradingview-dark", W]
            ];
            O.push(["logo-widget", B], ["tradingview-widget", I]);
            const R = new Map(O),
                D = "site_branding",
                U = "widget_branding",
                F = "widget_referral_branding",
                E = "widget_custom_branding",
                N = "widget_custom_no_powered_branding",
                j = "fundamental_branding",
                G = "fundamental_custom_branding",
                Y = "fundamental_custom_no_powered_branding",
                $ = "library_branding",
                q = "library_custom_branding",
                J = "library_custom_no_powered_branding",
                K = navigator.userAgent.toLowerCase().indexOf("chrome") > -1 && -1 === navigator.userAgent.toLowerCase().indexOf("edge"),
                Q = window.urlParams || {},
                X = window.initData || {};
            (Q.referral_id || Q.no_referral_id) && (0, f.enable)(Q.referral_id || "", "aggressive");
            const ii = (0, x.isFeatureEnabled)("more_branding"),
                ei = (d.t(null, void 0, t(726619)), d.t(null, void 0, t(968111)), d.t(null, void 0, t(782128))),
                ti = d.t(null, void 0, t(988841)),
                ai = d.t(null, void 0, t(299769)) + " ",
                ni = (0, c.onWidget)(),
                si = ni ? {
                    brandCircleSize: 32,
                    brandingLogoImageWidth: 22,
                    brandingLogoImageHeight: 19,
                    textAsImageWidthCompensation: 2,
                    leftOffset: 5,
                    bottomOffset: -1,
                    logoLeftOffset: 1,
                    maximizedWidthsCompensation: 0,
                    logoTextOffset: 4
                } : {
                    brandCircleSize: 48,
                    brandingLogoImageWidth: 30,
                    brandingLogoImageHeight: 28,
                    textAsImageWidthCompensation: 14,
                    leftOffset: -8,
                    bottomOffset: -8,
                    logoLeftOffset: 8,
                    maximizedWidthsCompensation: 12,
                    logoTextOffset: 34
                },
                ri = ni ? 200 : 400;

            function oi(i) {
                return "px EuclidCircular" === i ? .1 : 0
            }
            class hi extends m.CustomSourceBase {
                constructor(i, e, t) {
                    super(i, e), this._canvasWidth = 0, this._paneHeight = 0, this._left = 13, this._bottom = 16, this._layout = D, this._needToShow = !0, this._showBranding = !1, this._customLogoSrc = "", this._customLogoLink = "", this._cubicBezier = new w.CubicBezier(.4, .01, .22, 1), this._openAnimation = null, this._closeAnimation = null, this._powBy = null, this._custom = null, this._destroyed = !1, this._mainSeries = this._model.mainSeries(), this._visibleSpawn = t, this._showForPro = ii && !e.onWidget(), this._visibleSpawn.subscribe((() => {
                        this._model.updateSource(this)
                    })), this._checkLayout(), this._layout !== E && this._layout !== G || (this._left = 8, this._bottom = 5);
                    const a = () => {
                        this._needToShow ? this._showBranding = !0 : this._showBranding = !1
                    };
                    this._resizeHandlerDelayed = (0, s.default)(a, 200), a(), window.addEventListener("resize", this._resizeHandlerDelayed), this._monitorCanvas = (0, p.createDisconnectedBoundCanvas)(document, (0, n.size)({
                        width: 0,
                        height: 0
                    })), this._monitorCanvas.subscribeSuggestedBitmapSizeChanged((() => {
                        this._init()
                    })), this._model.isSnapshot() ? this._init() : (this._mainSeries.dataEvents().symbolResolved().subscribe(this, this._init), null !== this._mainSeries.symbolInfo() && this._init()), this._renderer = {
                        draw: this.draw.bind(this),
                        hitTest: this.hitTest.bind(this)
                    }, ii && !e.onWidget() && window.loginStateChange.subscribe(this, this._init)
                }
                destroy() {
                    window.removeEventListener("resize", this._resizeHandlerDelayed), this._mainSeries.dataEvents().symbolResolved().unsubscribeAll(this), this._powBy && this._powBy.destroy(), ii && !this._model.onWidget() && window.loginStateChange.unsubscribeAll(this), this._visibleSpawn.destroy(), this._destroyed = !0
                }
                paneViews(i) {
                    if (window.TradingView.printing) return [];
                    if (!this._visibleSpawn.value()) return [];
                    if (this._layout === D && !this._showForPro && window.user && window.user.is_pro) return [];
                    const e = g.enabled("move_logo_to_main_pane");
                    let t = !1;
                    if (i.maximized().value()) t = !0;
                    else if (e) t = this._model.mainPane().collapsed().value() ? i === this._model.panes().find((i => !i.collapsed().value())) : i.isMainPane();
                    else if (this._model.lastPane().collapsed().value()) {
                        const e = this._model.panes();
                        for (let a = e.length - 1; a >= 0; --a) {
                            const n = e[a];
                            if (!n.collapsed().value()) {
                                t = n === i;
                                break
                            }
                        }
                    } else t = i.isLast();
                    return t ? [{
                        renderer: this.renderer.bind(this)
                    }] : []
                }
                labelPaneViews(i) {
                    return []
                }
                priceAxisViews(i, e) {
                    return []
                }
                updateAllViews() {}
                updateViewsForPane(i) {}
                priceScale() {
                    return null
                }
                renderer(i, e) {
                    return this._paneHeight = i, this._canvasWidth = e, this._renderer
                }
                hasContextMenu() {
                    return !1
                }
                onClickOutside() {
                    this._hasAnimation() && this._startCloseAnimation()
                }
                hitTest(i) {
                    return !this._showBranding || g.enabled("logo_without_link") ? null : this._powBy && this._layout !== N && this._layout !== Y && (this._powBy.hitTest(i) || this._custom && this._custom.hitTest(i)) ? new _.HitTestResult(_.HitTestResult.CUSTOM, {
                        hideCrosshairLinesOnHover: !0,
                        cursorType: z.PaneCursorType.Default,
                        clickHandler: () => {
                            this._openLink()
                        },
                        tapHandler: () => {
                            this._hasAnimation() ? this._toggleOpenAnimatedOrOpenLink() : this._openLink()
                        },
                        mouseEnterHandler: () => {
                            this._hasAnimation() && this._startOpenAnimation()
                        },
                        mouseLeaveHandler: () => {
                            this._hasAnimation() && this._startCloseAnimation()
                        }
                    }) : null
                }
                tvUrl() {
                    var i;
                    let e = new URL("https://www.tradingview.com/"); {
                        const t = (null === (i = this._mainSeries.symbolInfo()) || void 0 === i ? void 0 : i.pro_name) || "";
                        if (g.enabled("referral_program_for_widget_owners")) {
                            const i = (0, f.referenceToTradingView)(),
                                a = i.indexOf("utm_source");
                            return -1 !== a && (e = new URL(i.slice(0, a))), e.searchParams.append("utm_source", Q.utm_source || ""), e.searchParams.append("utm_medium", Q.utm_medium || ""), e.searchParams.append("utm_campaign", Q.utm_campaign || ""), e.searchParams.append("utm_term", t), e.toString()
                        }
                        const a = this._mainSeries.symbolInfo(),
                            n = (null == a ? void 0 : a.name) || "APPL",
                            s = (null == a ? void 0 : a.listed_exchange) || "";
                        if (!X.customer && n) {
                            const i = (0, b.getSymbolPagePath)({
                                shortName: n,
                                exchange: s
                            });
                            e = new URL(e.toString().replace(/\/$/, "") + i)
                        }
                        e.searchParams.append("utm_source", Q.utm_source || ""), e.searchParams.append("utm_medium", Q.utm_medium || ""), e.searchParams.append("utm_campaign", Q.utm_campaign || ""), e.searchParams.append("utm_term", t)
                    }
                    return e.toString()
                }
                draw(i, e) {
                    if (!this._showBranding) return;
                    let t = 0;
                    Q.utm = !0, (0, p.drawScaled)(i, e.pixelRatio, (() => {
                        this._powBy && this._powBy.show && (t = this._powBy.height, i.save(), i.translate(this._left, this._paneHeight - this._bottom - t), this._powBy.draw(i, e, this._canvasWidth), i.restore()), this._custom && this._custom.show && (i.save(), i.translate(this._left, this._paneHeight - this._bottom - t - this._custom.height), this._custom.draw(i, e), i.restore())
                    }))
                }
                _init() {
                    this._checkLayout();
                    const i = this._mainSeries.symbolInfo();
                    this._powBy && this._powBy.destroy(), this._powBy = new vi(this._layout, (null == i ? void 0 : i.name) || "", this._model, (() => this._model.fullUpdate())), this._custom = new pi(this._layout, this._customLogoSrc, (() => this._model.fullUpdate())), this._openAnimation = null, this._closeAnimation = null, (0,
                        Z.getWidgetSheriffActions)().then((i => {
                        i.includes(M.KnownAction.Expand) && (this._startOpenAnimation(), this._closeAnimation = {
                            stop: () => {},
                            completed: () => !1
                        })
                    })), this._model.lightUpdate()
                }
                _checkLayout() {
                    if (g.enabled("widget")) {
                        const i = X.logo || {},
                            e = g.enabled("fundamental_widget");
                        this._needToShow = !(X.whitelabel || Q.whitelabel || i.whitelabel), i.image ? (this._customLogoSrc = "/static/images/widget-embed-logo/" + i.image, i.no_powered_by ? this._layout = e ? Y : N : this._layout = e ? G : E) : Q.referral_id || Q.no_referral_id ? this._layout = F : this._layout = e ? j : U
                    } else if (g.enabled("charting_library") || g.enabled("trading_terminal")) {
                        const i = JSON.parse(Q.logo) || {};
                        i.image ? (this._customLogoSrc = i.image, this._customLogoLink = i.link, this._needToShow = g.enabled("widget_logo"), g.enabled("link_to_tradingview") ? this._layout = q : this._layout = J) : (this._layout = $, this._needToShow = g.enabled("widget_logo"))
                    } else this._layout = D
                }
                _startOpenAnimation() {
                    null === this._openAnimation && (null !== this._closeAnimation && (this._closeAnimation.stop(), this._closeAnimation = null), this._openAnimation = (0, v.doAnimate)({
                        from: this._currentStateForAnimation(),
                        to: this._openedStateForAnimation(),
                        duration: ri,
                        easing: this._cubicBezier.easingFunc,
                        onStep: this._animatedDrawStep.bind(this)
                    }))
                }
                _startCloseAnimation() {
                    null === this._closeAnimation && (null !== this._openAnimation && (this._openAnimation.stop(), this._openAnimation = null), this._closeAnimation = (0, v.doAnimate)({
                        from: this._currentStateForAnimation(),
                        to: this._closedStateForAnimation(),
                        duration: ri,
                        easing: this._cubicBezier.easingFunc,
                        onStep: this._animatedDrawStep.bind(this)
                    }))
                }
                _currentStateForAnimation() {
                    return (0, l.ensureNotNull)(this._powBy).width
                }
                _closedStateForAnimation() {
                    return (0, l.ensureNotNull)(this._powBy).minimizedAnimationWidth()
                }
                _openedStateForAnimation() {
                    return (0, l.ensureNotNull)(this._powBy).maximizedAnimationWidth()
                }
                _animatedDrawStep(i, e) {
                    (0, l.ensureNotNull)(this._powBy).animatedDrawStep(i, e), this._model.lightUpdate()
                }
                _hasAnimation() {
                    return null !== this._powBy && this._powBy.hasAnimation()
                }
                _openGoPro() {
                    window.runOrSignIn((async () => {
                        if (!(0, S.canUpgradePlan)()) return;
                        const {
                            openGoPro: i
                        } = await Promise.all([t.e(65630), t.e(88230), t.e(18619), t.e(81910), t.e(86256), t.e(91901), t.e(78707), t.e(13249), t.e(96246), t.e(20849), t.e(53262), t.e(46951), t.e(65216), t.e(27565), t.e(75514), t.e(51349), t.e(745), t.e(52328), t.e(60246), t.e(33619), t.e(5246)]).then(t.bind(t, 785446));
                        this._destroyed || i({
                            goproSource: "brading"
                        }, (() => {}))
                    }), {
                        source: "branding"
                    })
                }
                _openLink() {
                    if (this._layout === D) return this._openGoPro(), !1;
                    g.enabled("widget") && y(this.tvUrl(), "copyright");
                    return (0, l.ensureNotNull)(window.open(this.tvUrl(), "_blank")).opener = null, !0
                }
                _toggleOpenAnimatedOrOpenLink() {
                    null !== this._openAnimation && this._openAnimation.completed() ? this._openLink() || this._startCloseAnimation() : this._startOpenAnimation()
                }
            }
            const li = {
                    customBrandingTradingViewText: h.colorsPalette["color-brand"],
                    customBrandingText: h.colorsPalette["color-cold-gray-850"],
                    background: h.colorsPalette["color-cold-gray-900"],
                    shadow: h.colorsPalette["color-cold-gray-700"],
                    text: h.colorsPalette["color-white"],
                    staticTextBackground: (0,
                        u.generateColor)(h.colorsPalette["color-cold-gray-800"], 20),
                    logo: h.colorsPalette["color-white"]
                },
                di = {
                    customBrandingTradingViewText: h.colorsPalette["color-brand"],
                    customBrandingText: h.colorsPalette["color-cold-gray-850"],
                    background: h.colorsPalette["color-white"],
                    shadow: h.colorsPalette["color-cold-gray-150"],
                    text: h.colorsPalette["color-cold-gray-900"],
                    staticTextBackground: (0, u.generateColor)(h.colorsPalette["color-white"], 20),
                    logo: h.colorsPalette["color-cold-gray-900"]
                };

            function ci(i, e) {
                return new Promise((t => {
                    const a = ni ? i.replace(/fill="#[\da-f]{6}"/g, `fill="${e}"`) : i,
                        n = new Image;
                    n.onload = () => {
                        n.onload = null, t(n)
                    }, n.src = URL.createObjectURL(new Blob([a], {
                        type: "image/svg+xml"
                    }))
                }))
            }
            let gi = {},
                mi = {};

            function _i(i, e, t) {
                const a = ni ? mi : gi,
                    n = ni ? e : i,
                    s = a[n];
                if (void 0 !== s) return s;
                const r = ni ? "logo-widget" : `logo-${i}`,
                    o = ni ? "tradingview-widget" : `tradingview-${i}`,
                    h = (0, l.ensureDefined)(R.get(r)),
                    d = (0, l.ensureDefined)(R.get(o)),
                    c = ci(h, e),
                    g = ci(d, e);
                return Promise.all([c, g]).then((([i, e]) => {
                    a[n] = {
                        logoImage: i,
                        textImage: e
                    }, t()
                })), null
            }

            function wi(i) {
                const {
                    a: e,
                    d: t,
                    e: a,
                    f: n
                } = i;
                return new r.Point(a / e, n / t)
            }
            class ui {
                constructor() {
                    this._originPoint = null
                }
                hitTest(i) {
                    const e = this._getHitTestBox();
                    if (e) return (0, o.pointInBox)(i, e)
                }
                _getHitTestBox() {
                    const i = this._originPoint;
                    if (i) {
                        const {
                            x: e,
                            y: t
                        } = i;
                        return (0, r.box)(i, new r.Point(e + this.width, t + this.height))
                    }
                }
            }
            class vi extends ui {
                constructor(i, e, t, a) {
                    super(), this.show = !0, this.borderRadius = 0, this._needDisplayImage = !1, this._imageWidth = si.brandingLogoImageWidth, this._imageHeight = si.brandingLogoImageHeight, this._animatedWidth = si.brandCircleSize, this._font = `px ${A.CHART_FONT_FAMILY}`, this._txt = "TradingView", this._textWidth = 0, this._maximizedAnimationTextWidth = 0, this._textWidthCache = new k.TextWidthCache, this._pixelRatio = 1, this._model = t, this._layout = i, this._symbol = e, this._showAnimatedBranding = g.enabled("show_animated_logo") || this._layout === U, this._alwaysMaximized = g.enabled("logo_always_maximized") || ii && !c.CheckMobile.any() && !this._model.onWidget() && (!window.user || !window.user.is_pro), this._fontSize = this._showAnimatedBranding || this._layout === F ? 11 : 14, this._showAnimatedBranding || this._layout !== E && this._layout !== G || (this._fontSize = 12), this.width = si.brandCircleSize, this.height = this._fontSize + 2, this._requestRepaint = a, this._init(), this._checkFontLoaded(), this._recalculateMetrics()
                }
                destroy() {
                    this._model.properties().childs().paneProperties.childs().background.unsubscribeAll(this), this._model.onChartThemeLoaded().unsubscribeAll(this)
                }
                hasAnimation() {
                    return this._showAnimatedBranding && !this._alwaysMaximized
                }
                minimizedAnimationWidth() {
                    return si.brandCircleSize
                }
                maximizedAnimationWidth() {
                    const i = si.logoLeftOffset;
                    return this._maximizedAnimationTextWidth + si.brandCircleSize - 3 + 2 * i
                }
                animatedDrawStep(i, e) {
                    this._animatedWidth = e
                }
                draw(i, e, t) {
                    e.pixelRatio !== this._pixelRatio && (this._textWidthCache.reset(), this._pixelRatio = e.pixelRatio);
                    const a = this._colors;
                    if (this._showAnimatedBranding) {
                        const e = this._getLogoImage(a.logo);
                        if (this._needDisplayImage && e) {
                            i.save(),
                                i.translate(-Math.ceil((si.brandCircleSize - this._imageWidth) / 2) + si.leftOffset, Math.floor((si.brandCircleSize - this._imageHeight) / 2) - si.bottomOffset), this._originPoint = wi(i.getTransform()), ni && (this.borderRadius = si.brandCircleSize / 2, this._drawFillRectWithRoundedCorner(i, -.5, 0, this._animatedWidth, si.brandCircleSize, this.borderRadius));
                            const t = si.logoLeftOffset;
                            this._drawLogoImage(i, Math.round((si.brandCircleSize - e.logoImage.width) / 2) - 1 + t, Math.floor((si.brandCircleSize - e.logoImage.height) / 2) + 1, e.logoImage);
                            const a = si.logoTextOffset;
                            if (this._animatedWidth > si.brandCircleSize) {
                                const n = this._animatedWidth - si.brandCircleSize - e.textImage.width;
                                i.translate(t + Math.round(.5 * si.brandCircleSize + .5 * e.logoImage.width) - .5, Math.floor((si.brandCircleSize - e.textImage.height) / 2) + 1), this._drawImageCropWidth(i, e.textImage, this._animatedWidth - si.brandCircleSize, n - a)
                            }
                            i.restore(), this.width = this._animatedWidth
                        }
                    } else if (this._layout === E || this._layout === G) {
                        i.font = this._fontSize + this._font;
                        const e = i.measureText(this._txt).width + 2;
                        this.width = e + i.measureText("TradingView").width + 2, this._originPoint = wi(i.getTransform()), i.save(), i.globalAlpha = .7, i.fillStyle = this._colors.customBrandingText, i.fillText(this._txt, 0, 12), i.fillStyle = this._colors.customBrandingTradingViewText, i.fillText("TradingView", e, 12), i.restore()
                    } else if (this._layout === F) {
                        const e = this._getLogoImage(a.logo);
                        if (e) {
                            i.save(), i.translate(-Math.ceil((si.brandCircleSize - this._imageWidth) / 2), Math.floor((si.brandCircleSize - this._imageHeight) / 2)), this.width = si.brandCircleSize;
                            const t = !0;
                            t && (this.width += this._maximizedAnimationTextWidth + 4), ni && this._drawFillRectWithRoundedCorner(i, -.5, 0, this.width, si.brandCircleSize, this.borderRadius), this._drawLogoImage(i, Math.round((si.brandCircleSize - this._imageWidth) / 2) + 4, Math.round((si.brandCircleSize - this._imageHeight) / 2) + 0, e.logoImage), t && (i.translate(si.brandCircleSize + 3, Math.round(this._fontSize * oi(this._font))), this._drawTextFill(i)), i.restore()
                        }
                    } else {
                        {
                            const e = this._getLogoImage(a.logo);
                            if (this._needDisplayImage && e) {
                                i.save(), i.translate(-Math.ceil((si.brandCircleSize - this._imageWidth) / 2), Math.floor((si.brandCircleSize - this._imageHeight) / 2)), this._originPoint = wi(i.getTransform()), ni && (this.borderRadius = si.brandCircleSize / 2, this._drawBgCircle(i)), i.drawImage(e.logoImage, Math.round((si.brandCircleSize - this._imageWidth) / 2), Math.round((si.brandCircleSize - this._imageHeight) / 2) + 0);
                                const t = !0;
                                t && (i.translate(si.brandCircleSize + 5, Math.round(this._fontSize * oi(this._font))), this._drawTextStroke(i), this._drawTextFill(i)), i.restore(), this.width = si.brandCircleSize, t && (this.width += this._maximizedAnimationTextWidth)
                            } else {
                                const e = !0;
                                e && (i.save(), i.translate(K ? -.5 : 0, -.5), this._drawTextStroke(i), this._drawTextFill(i), i.restore()), e && (this.width = this._maximizedAnimationTextWidth)
                            }
                        }
                    }
                }
                _init() {
                    mi = {}, gi = {}, this._checkLayout(), this.show && (this.height = this._needDisplayImage ? si.brandCircleSize : this._fontSize + 2, this._updateColors(), this._model.properties().childs().paneProperties.childs().background.subscribe(this, this._updateColors),
                        this._model.onChartThemeLoaded().subscribe(this, this._updateColors))
                }
                _checkFontLoaded() {
                    if (document.fonts && document.fonts.check && document.fonts.load) {
                        document.fonts.check(`${this._fontSize}px EuclidCircular`) ? this._font = "px EuclidCircular" : document.fonts.load(`${this._fontSize}px EuclidCircular`, this._txt).then((() => {
                            this._font = "px EuclidCircular", this._recalculateMetrics(), this._requestRepaint()
                        }))
                    }
                }
                _recalculateMetrics() {
                    const i = (0, p.createDisconnectedBoundCanvas)(document, (0, n.size)({
                            width: 0,
                            height: 0
                        })),
                        e = (0, p.getPretransformedContext2D)(i, !0);
                    e.font = this._fontSize + this._font;
                    const t = this._needDisplayImage ? _i(this._model.isDark() ? "dark" : "light", this._colors.logo, (() => this._recalculateMetrics())) : null;
                    this._textWidth = t ? t.textImage.width + si.textAsImageWidthCompensation : Math.ceil(e.measureText(this._txt).width) + 2;
                    let a = this._textWidth + 8;
                    a % 2 == 0 && (a += 1), this._maximizedAnimationTextWidth = a, this._textWidthCache.reset(), this._alwaysMaximized && (this._animatedWidth = this.maximizedAnimationWidth())
                }
                _updateColors() {
                    this._colors = this._model.isDark() ? li : di
                }
                _getLogoImage(i) {
                    return _i(this._model.isDark() ? "dark" : "light", i, this._requestRepaint)
                }
                _checkLayout() {
                    switch (this._layout) {
                        case U:
                        case F:
                        case E:
                        case j:
                        case G:
                        case q:
                        case $:
                        case D:
                            this.show = !0;
                            break;
                        case N:
                        case Y:
                        case J:
                            this.show = !1
                    }
                    switch (this._layout) {
                        case U:
                            this._needDisplayImage = !0, this._txt = ei;
                            break;
                        case j:
                            this._txt = ti.format({
                                symbol: this._symbol
                            });
                            break;
                        case F:
                            this._needDisplayImage = !0;
                            break;
                        case E:
                        case G:
                            this._txt = ai;
                            break;
                        case D:
                            this._needDisplayImage = !0
                    }
                }
                _drawTextStroke(i) {
                    i.save(), i.textBaseline = "middle", i.textAlign = "start", i.font = this._fontSize + this._font, i.strokeStyle = this._colors.staticTextBackground, i.lineWidth = 4, i.lineJoin = "round", i.strokeText(this._txt, 0, si.brandCircleSize / 2 + this._textWidthCache.yMidCorrection(i, this._txt)), i.restore()
                }
                _drawTextFill(i) {
                    i.save(), i.textBaseline = "middle", i.textAlign = "start", i.font = this._fontSize + this._font, i.fillStyle = this._colors.text, i.fillText(this._txt, 0, si.brandCircleSize / 2 + this._textWidthCache.yMidCorrection(i, this._txt)), i.restore()
                }
                _drawImageCropWidth(i, e, t, a) {
                    i.save(), i.beginPath(), i.rect(0, 0, t, this.height), i.clip(), i.drawImage(e, a, 0), i.restore()
                }
                _drawBgCircle(i) {
                    const e = this.borderRadius,
                        t = 2 * Math.PI;
                    i.save(), i.beginPath(), i.fillStyle = this._colors.shadow, i.arc(e, e, e + 1, 0, t), i.fill(), i.closePath(), i.restore(), i.save(), i.beginPath(), i.fillStyle = this._colors.background, i.arc(e, e, e, 0, t, !1), i.fill(), i.closePath(), i.restore()
                }
                _drawFillRectWithRoundedCorner(i, e, t, a, n, s) {
                    i.save(), (0, C.drawRoundRect)(i, e - 1, t - 1, a + 2, n + 2, s), i.fillStyle = this._colors.shadow, i.fill(), i.closePath(), i.restore(), i.save(), (0, C.drawRoundRect)(i, e, t, a, n, s), i.fillStyle = this._colors.background, i.fill(), i.closePath(), i.restore()
                }
                _drawLogoImage(i, e, t, a) {
                    i.drawImage(a, e, t)
                }
            }
            class pi extends ui {
                constructor(i, e, t) {
                    super(), this.show = !1, this.width = 0, this.height = 0, this._ready = !1, this._layout = i, this._src = e, this._onReadyCallback = t, this._checkLayout();
                    const a = new Image;
                    this._img = a, this.show && (a.addEventListener("load", (() => {
                        this.width = Math.round(a.width),
                            this.height = Math.round(a.height), this._ready = !0, this._onReadyCallback && this._onReadyCallback()
                    })), a.crossOrigin = "anonymous", a.src = this._src)
                }
                draw(i, e) {
                    this._ready && (i.drawImage(this._img, -.5, -.5, this.width, this.height), this._originPoint = wi(i.getTransform()))
                }
                _checkLayout() {
                    switch (this._layout) {
                        case E:
                        case N:
                        case G:
                        case Y:
                        case q:
                        case J:
                            this.show = !0;
                            break;
                        case D:
                        case U:
                        case F:
                        case j:
                        case $:
                            this.show = !1
                    }
                }
            }

            function fi(i) {
                i.addCustomSource("branding", ((e, t) => {
                    const n = (0, a.combine)(((i, e) => {
                        const a = null != i ? i : e;
                        return null !== a && a.hasModel() && a.model().model() === t
                    }), i.maximizedChartWidget(), i.leftBottomChartWidget());
                    return new hi(e, t, n)
                }))
            }
        },
        399298: (i, e, t) => {
            "use strict";
            t.d(e, {
                enable: () => o,
                referenceToTradingView: () => h
            });
            var a = t(345848),
                n = t(186521),
                s = t(495046);
            let r;

            function o(i, e) {
                r = i, e = e || "aggressive", s.enable("referral_program_for_widget_owners"), s.enable("referral_program_policy_" + e), (0, a.trackEvent)("Referral program enabled", e)
            }

            function h() {
                const i = "https://www.tradingview.com";
                return r ? i + "?aff_id=" + r + "&" + (0, n.buildUtmQueryStringFromUrlParams)(!1) : i + (0, n.buildUtmQueryStringFromUrlParams)(!0)
            }
        },
        77197: i => {
            i.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 28" width="35" height="28"><path fill="#fff" d="M14 6H2v6h6v9h6V6Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><mask width="34" height="19" fill="#000" x="0" y="4" maskUnits="userSpaceOnUse" id="aaw0bcoly"><path fill="#fff" d="M0 4h34v19H0z"/><path d="M14 6.1a.1.1 0 0 0-.1-.1H2.1a.1.1 0 0 0-.1.1v5.8c0 .06.04.1.1.1h5.8c.06 0 .1.04.1.1v8.8c0 .06.04.1.1.1h5.8a.1.1 0 0 0 .1-.1V6.1Zm12.03 14.84a.1.1 0 0 1-.1.06h-6.78a.1.1 0 0 1-.1-.14l5.92-14.8a.1.1 0 0 1 .1-.06h6.78a.1.1 0 0 1 .1.14l-5.92 14.8ZM19 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></mask><path fill="#131722" d="m31.95 6.14-1.86-.75 1.86.75Zm-6.98-.08-1.85-.74 1.85.74Zm-5.92 14.8 1.86.75-1.86-.75ZM2.1 8h11.8V4H2.1v4ZM4 11.9V6.1H0v5.8h4ZM7.9 10H2.1v4h5.8v-4ZM10 20.9v-8.8H6v8.8h4Zm3.9-1.9H8.1v4h5.8v-4ZM12 6.1v14.8h4V6.1h-4ZM19.15 23h6.78v-4h-6.78v4Zm3.97-17.68-5.92 14.8 3.71 1.49 5.92-14.8-3.71-1.49ZM31.85 4h-6.78v4h6.78V4Zm-3.97 17.68 5.92-14.8-3.71-1.49-5.92 14.8 3.71 1.49ZM20 9a1 1 0 0 1-1 1v4a5 5 0 0 0 5-5h-4Zm-1-1a1 1 0 0 1 1 1h4a5 5 0 0 0-5-5v4Zm-1 1a1 1 0 0 1 1-1V4a5 5 0 0 0-5 5h4Zm1 1a1 1 0 0 1-1-1h-4a5 5 0 0 0 5 5v-4Zm12.85-2a1.9 1.9 0 0 1-1.76-2.6l3.71 1.48A2.1 2.1 0 0 0 31.85 4v4Zm-5.02-1.2A1.9 1.9 0 0 1 25.07 8V4a2.1 2.1 0 0 0-1.95 1.32l3.71 1.49Zm-.9 16.2a2.1 2.1 0 0 0 1.95-1.32l-3.71-1.49A1.9 1.9 0 0 1 25.93 19v4Zm-6.78-4a1.9 1.9 0 0 1 1.76 2.6l-3.71-1.48A2.1 2.1 0 0 0 19.15 23v-4Zm-5.25 4a2.1 2.1 0 0 0 2.1-2.1h-4c0-1.05.85-1.9 1.9-1.9v4ZM6 20.9c0 1.16.94 2.1 2.1 2.1v-4c1.05 0 1.9.85 1.9 1.9H6ZM7.9 14A1.9 1.9 0 0 1 6 12.1h4A2.1 2.1 0 0 0 7.9 10v4ZM0 11.9C0 13.06.94 14 2.1 14v-4c1.05 0 1.9.85 1.9 1.9H0ZM13.9 8A1.9 1.9 0 0 1 12 6.1h4A2.1 2.1 0 0 0 13.9 4v4ZM2.1 4A2.1 2.1 0 0 0 0 6.1h4A1.9 1.9 0 0 1 2.1 8V4Z" mask="url(#aaw0bcoly)"/></svg>'
        },
        267263: i => {
            i.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 28" width="35" height="28"><path fill="#131722" d="M14 6H2v6h6v9h6V6Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><mask width="34" height="19" fill="#000" x="0" y="4" maskUnits="userSpaceOnUse" id="ai545borg"><path fill="#fff" d="M0 4h34v19H0z"/><path d="M14 6.1a.1.1 0 0 0-.1-.1H2.1a.1.1 0 0 0-.1.1v5.8c0 .06.04.1.1.1h5.8c.06 0 .1.04.1.1v8.8c0 .06.04.1.1.1h5.8a.1.1 0 0 0 .1-.1V6.1Zm12.03 14.84a.1.1 0 0 1-.1.06h-6.78a.1.1 0 0 1-.1-.14l5.92-14.8a.1.1 0 0 1 .1-.06h6.78a.1.1 0 0 1 .1.14l-5.92 14.8ZM19 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></mask><path fill="#fff" d="m31.95 6.14-1.86-.75 1.86.75Zm-6.98-.08-1.85-.74 1.85.74Zm-5.92 14.8 1.86.75-1.86-.75ZM2.1 8h11.8V4H2.1v4ZM4 11.9V6.1H0v5.8h4ZM7.9 10H2.1v4h5.8v-4ZM10 20.9v-8.8H6v8.8h4Zm3.9-1.9H8.1v4h5.8v-4ZM12 6.1v14.8h4V6.1h-4ZM19.15 23h6.78v-4h-6.78v4Zm3.97-17.68-5.92 14.8 3.71 1.49 5.92-14.8-3.71-1.49ZM31.85 4h-6.78v4h6.78V4Zm-3.97 17.68 5.92-14.8-3.71-1.49-5.92 14.8 3.71 1.49ZM20 9a1 1 0 0 1-1 1v4a5 5 0 0 0 5-5h-4Zm-1-1a1 1 0 0 1 1 1h4a5 5 0 0 0-5-5v4Zm-1 1a1 1 0 0 1 1-1V4a5 5 0 0 0-5 5h4Zm1 1a1 1 0 0 1-1-1h-4a5 5 0 0 0 5 5v-4Zm12.85-2a1.9 1.9 0 0 1-1.76-2.6l3.71 1.48A2.1 2.1 0 0 0 31.85 4v4Zm-5.02-1.2A1.9 1.9 0 0 1 25.07 8V4a2.1 2.1 0 0 0-1.95 1.32l3.71 1.49Zm-.9 16.2a2.1 2.1 0 0 0 1.95-1.32l-3.71-1.49A1.9 1.9 0 0 1 25.93 19v4Zm-6.78-4a1.9 1.9 0 0 1 1.76 2.6l-3.71-1.48A2.1 2.1 0 0 0 19.15 23v-4Zm-5.25 4a2.1 2.1 0 0 0 2.1-2.1h-4c0-1.05.85-1.9 1.9-1.9v4ZM6 20.9c0 1.16.94 2.1 2.1 2.1v-4c1.05 0 1.9.85 1.9 1.9H6ZM7.9 14A1.9 1.9 0 0 1 6 12.1h4A2.1 2.1 0 0 0 7.9 10v4ZM0 11.9C0 13.06.94 14 2.1 14v-4c1.05 0 1.9.85 1.9 1.9H0ZM13.9 8A1.9 1.9 0 0 1 12 6.1h4A2.1 2.1 0 0 0 13.9 4v4ZM2.1 4A2.1 2.1 0 0 0 0 6.1h4A1.9 1.9 0 0 1 2.1 8V4Z" mask="url(#ai545borg)"/></svg>'
        },
        89378: i => {
            i.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 19" width="22" height="19"><path fill="#131722" d="M9 4H0v4h5v7h4V4Zm8 11h-5l4.5-11h5L17 15Zm-5-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>'
        },
        287681: i => {
            i.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 28" width="125" height="28"><path fill="#fff" d="M93.37 7.21c0 .99-.83 1.78-1.87 1.78-1 0-1.84-.8-1.84-1.78s.85-1.77 1.84-1.77c1.04 0 1.87.8 1.87 1.77ZM93 21h-3V10h3v11ZM47.54 9.02c1.04 0 1.87-.8 1.87-1.77 0-.99-.83-1.78-1.87-1.78-1 0-1.84.8-1.84 1.78s.85 1.77 1.84 1.77ZM46 21h3V10h-3v11ZM9 21H6V9H2V6h11v3H9v12ZM16 21l-3 .02V10h3v1.88c.36-1 1.34-1.75 2.53-1.75h.03c.3 0 .6 0 .94.1v2.84a4 4 0 0 0-1.31-.2c-1.38 0-2.19 1-2.19 2.7V21ZM54 21h-3V10.01l3-.01v1c.57-.82 1.53-1.21 2.9-1.21 2.57 0 4.1 1.8 4.1 4.45V21h-3v-6c0-1.47-.56-2.66-1.77-2.66-1.36 0-2.23.93-2.23 2.89V21ZM83 21l6-15h-3.5l-4 10.5L77 6h-3.5L80 21h3ZM119.45 21h-2.93l-2.02-6.25-2 6.25h-2.93L106 10h3.14l2.05 7.04 2.17-7.04h2.26l2.2 7.04 2.02-7.04H123l-3.55 11ZM24.92 21.24c1.52 0 2.57-.77 3.08-1.47V21h3V10h-3v1.23a3.78 3.78 0 0 0-3.08-1.47c-2.93 0-5.17 2.64-5.17 5.74s2.24 5.74 5.17 5.74Zm.64-2.75c-1.68 0-2.78-1.25-2.78-2.99 0-1.74 1.1-3 2.78-3 1.67 0 2.77 1.26 2.77 3s-1.1 3-2.77 3ZM41 19.77c-.5.7-1.56 1.47-3.08 1.47-2.93 0-5.17-2.64-5.17-5.74s2.24-5.74 5.17-5.74c1.52 0 2.57.77 3.08 1.47V6h3v15h-3v-1.23Zm-5.22-4.27c0 1.74 1.1 3 2.78 3 1.67 0 2.77-1.26 2.77-3s-1.1-3-2.77-3c-1.68 0-2.78 1.26-2.78 3ZM68.23 25.82c3.36 0 5.77-1.72 5.77-5.68V10h-3v1.23a3.6 3.6 0 0 0-3.06-1.47c-2.88 0-5.2 2.46-5.2 5.56 0 3.08 2.32 5.68 5.2 5.68A3.8 3.8 0 0 0 71 19.42v.74c0 1.76-1.04 3.02-2.82 3.02a4.84 4.84 0 0 1-3.43-1.37l-1.65 2.25c1.25 1.2 3.21 1.76 5.13 1.76Zm.35-7.68a2.75 2.75 0 0 1-2.8-2.82c0-1.69 1.28-2.81 2.8-2.81 1.52 0 2.8 1.12 2.8 2.81a2.75 2.75 0 0 1-2.8 2.82ZM105.78 18.72a5.96 5.96 0 0 1-5.1 2.47c-3.28 0-5.83-2.27-5.83-5.74a5.62 5.62 0 0 1 5.78-5.75c2.89 0 5.42 1.83 5.42 5.42a6.01 6.01 0 0 1-.04 1.13h-8.24c.18 1.47 1.48 2.19 2.93 2.19 1.39 0 2.33-.62 2.84-1.39l2.24 1.67Zm-5.23-6.53c-1.13 0-2.38.57-2.67 1.91h5.15c-.26-1.32-1.36-1.91-2.48-1.91Z"/><mask width="125" height="25" fill="#000" x="0" y="3.44" maskUnits="userSpaceOnUse" id="azyyo1jim"><path fill="#fff" d="M0 3.44h125v25H0z"/><path d="M93.37 7.21c0 .99-.83 1.78-1.87 1.78-1 0-1.84-.8-1.84-1.78s.85-1.77 1.84-1.77c1.04 0 1.87.8 1.87 1.77ZM93 20.9a.1.1 0 0 1-.1.1h-2.8a.1.1 0 0 1-.1-.1V10.1c0-.06.04-.1.1-.1h2.8c.06 0 .1.04.1.1v10.8ZM47.54 9.02c1.04 0 1.87-.8 1.87-1.77 0-.99-.83-1.78-1.87-1.78-1 0-1.84.8-1.84 1.78s.85 1.77 1.84 1.77ZM46 20.9c0 .05.04.1.1.1h2.8a.1.1 0 0 0 .1-.1V10.1a.1.1 0 0 0-.1-.1h-2.8a.1.1 0 0 0-.1.1v10.8ZM9 20.9a.1.1 0 0 1-.1.1H6.1a.1.1 0 0 1-.1-.1V9.1a.1.1 0 0 0-.1-.1H2.1a.1.1 0 0 1-.1-.1V6.1c0-.06.04-.1.1-.1h10.8c.06 0 .1.04.1.1v2.8a.1.1 0 0 1-.1.1H9.1a.1.1 0 0 0-.1.1v11.8ZM16 20.9a.1.1 0 0 1-.1.1l-2.8.02a.1.1 0 0 1-.1-.1V10.1c0-.06.04-.1.1-.1h2.8c.06 0 .1.04.1.1v1.21c0 .11.2.16.25.06a2.69 2.69 0 0 1 2.28-1.24h.03c.28 0 .55 0 .87.08a.1.1 0 0 1 .07.09v2.63a.1.1 0 0 1-.13.1 4 4 0 0 0-1.18-.16c-1.38 0-2.19 1-2.19 2.7v5.33ZM54 20.9a.1.1 0 0 1-.1.1h-2.8a.1.1 0 0 1-.1-.1V10.11c0-.05.04-.1.1-.1l2.8-.01c.05 0 .1.04.1.1v.58c0 .1.13.14.2.07.58-.65 1.48-.96 2.7-.96 2.57 0 4.1 1.8 4.1 4.45v6.66a.1.1 0 0 1-.1.1h-2.8a.1.1 0 0 1-.1-.1V15c0-1.47-.56-2.66-1.77-2.66-1.36 0-2.23.93-2.23 2.89v5.67ZM82.93 21a.1.1 0 0 0 .1-.06l5.92-14.8a.1.1 0 0 0-.1-.14h-3.28a.1.1 0 0 0-.1.06l-3.88 10.2a.1.1 0 0 1-.19.01L77.03 6.06a.1.1 0 0 0-.1-.06h-3.28a.1.1 0 0 0-.09.14l6.41 14.8a.1.1 0 0 0 .1.06h2.86ZM119.47 20.93a.1.1 0 0 1-.1.07h-2.77a.1.1 0 0 1-.1-.07l-1.9-5.88c-.03-.1-.16-.1-.2 0l-1.88 5.88a.1.1 0 0 1-.1.07h-2.78a.1.1 0 0 1-.09-.07l-3.5-10.8a.1.1 0 0 1 .09-.13h2.93a.1.1 0 0 1 .1.07l1.92 6.65c.03.1.16.1.2 0l2.05-6.65a.1.1 0 0 1 .1-.07h2.1a.1.1 0 0 1 .1.07l2.08 6.65c.02.1.16.1.19 0l1.9-6.65a.1.1 0 0 1 .1-.07h2.95a.1.1 0 0 1 .1.13l-3.49 10.8ZM24.92 21.24c1.34 0 2.33-.6 2.89-1.23.06-.07.19-.03.19.07v.82c0 .05.04.1.1.1h2.8a.1.1 0 0 0 .1-.1V10.1a.1.1 0 0 0-.1-.1h-2.8a.1.1 0 0 0-.1.1v.82c0 .1-.13.14-.19.07a3.84 3.84 0 0 0-2.9-1.23c-2.92 0-5.16 2.64-5.16 5.74s2.24 5.74 5.17 5.74Zm.64-2.75c-1.68 0-2.78-1.25-2.78-2.99 0-1.74 1.1-3 2.78-3 1.67 0 2.77 1.26 2.77 3s-1.1 3-2.77 3ZM41 20.08c0-.1-.13-.14-.2-.07a3.83 3.83 0 0 1-2.88 1.23c-2.93 0-5.17-2.64-5.17-5.74s2.24-5.74 5.17-5.74c1.34 0 2.33.6 2.89 1.23.06.07.19.03.19-.07V6.1c0-.06.04-.1.1-.1h2.8c.06 0 .1.04.1.1v14.8a.1.1 0 0 1-.1.1h-2.8a.1.1 0 0 1-.1-.1v-.82Zm-5.22-4.58c0 1.74 1.1 3 2.78 3 1.67 0 2.77-1.26 2.77-3s-1.1-3-2.77-3c-1.68 0-2.78 1.26-2.78 3ZM68.23 25.82c3.36 0 5.77-1.72 5.77-5.68V10.1a.1.1 0 0 0-.1-.1h-2.8a.1.1 0 0 0-.1.1v.81c0 .1-.13.14-.2.07a3.67 3.67 0 0 0-2.86-1.22c-2.88 0-5.2 2.46-5.2 5.56 0 3.08 2.32 5.68 5.2 5.68 1.27 0 2.25-.63 2.87-1.34.06-.08.19-.03.19.06v.44c0 1.76-1.04 3.02-2.82 3.02-1.2 0-2.4-.4-3.35-1.29a.1.1 0 0 0-.15.02l-1.53 2.08a.1.1 0 0 0 .01.13c1.26 1.17 3.18 1.7 5.07 1.7Zm.35-7.68a2.75 2.75 0 0 1-2.8-2.82c0-1.69 1.28-2.81 2.8-2.81 1.52 0 2.8 1.12 2.8 2.81a2.75 2.75 0 0 1-2.8 2.82ZM105.7 18.67c.05.03.06.09.03.13a5.98 5.98 0 0 1-5.05 2.39c-3.28 0-5.83-2.27-5.83-5.74a5.62 5.62 0 0 1 5.78-5.75c2.89 0 5.42 1.83 5.42 5.42a9 9 0 0 0 0 .16c0 .23 0 .54-.04.88a.1.1 0 0 1-.1.09H97.9a.1.1 0 0 0-.1.11c.23 1.4 1.5 2.08 2.91 2.08 1.33 0 2.26-.57 2.78-1.3a.1.1 0 0 1 .14-.02l2.08 1.55Zm-5.15-6.48c-1.1 0-2.3.54-2.64 1.8a.1.1 0 0 0 .1.11h4.9a.1.1 0 0 0 .1-.12c-.31-1.23-1.38-1.79-2.46-1.79Z"/></mask><path stroke="#131722" stroke-width="4" d="M93.37 7.21c0 .99-.83 1.78-1.87 1.78-1 0-1.84-.8-1.84-1.78s.85-1.77 1.84-1.77c1.04 0 1.87.8 1.87 1.77ZM93 20.9a.1.1 0 0 1-.1.1h-2.8a.1.1 0 0 1-.1-.1V10.1c0-.06.04-.1.1-.1h2.8c.06 0 .1.04.1.1v10.8ZM47.54 9.02c1.04 0 1.87-.8 1.87-1.77 0-.99-.83-1.78-1.87-1.78-1 0-1.84.8-1.84 1.78s.85 1.77 1.84 1.77ZM46 20.9c0 .05.04.1.1.1h2.8a.1.1 0 0 0 .1-.1V10.1a.1.1 0 0 0-.1-.1h-2.8a.1.1 0 0 0-.1.1v10.8ZM9 20.9a.1.1 0 0 1-.1.1H6.1a.1.1 0 0 1-.1-.1V9.1a.1.1 0 0 0-.1-.1H2.1a.1.1 0 0 1-.1-.1V6.1c0-.06.04-.1.1-.1h10.8c.06 0 .1.04.1.1v2.8a.1.1 0 0 1-.1.1H9.1a.1.1 0 0 0-.1.1v11.8ZM16 20.9a.1.1 0 0 1-.1.1l-2.8.02a.1.1 0 0 1-.1-.1V10.1c0-.06.04-.1.1-.1h2.8c.06 0 .1.04.1.1v1.21c0 .11.2.16.25.06a2.69 2.69 0 0 1 2.28-1.24h.03c.28 0 .55 0 .87.08a.1.1 0 0 1 .07.09v2.63a.1.1 0 0 1-.13.1 4 4 0 0 0-1.18-.16c-1.38 0-2.19 1-2.19 2.7v5.33ZM54 20.9a.1.1 0 0 1-.1.1h-2.8a.1.1 0 0 1-.1-.1V10.11c0-.05.04-.1.1-.1l2.8-.01c.05 0 .1.04.1.1v.58c0 .1.13.14.2.07.58-.65 1.48-.96 2.7-.96 2.57 0 4.1 1.8 4.1 4.45v6.66a.1.1 0 0 1-.1.1h-2.8a.1.1 0 0 1-.1-.1V15c0-1.47-.56-2.66-1.77-2.66-1.36 0-2.23.93-2.23 2.89v5.67ZM82.93 21a.1.1 0 0 0 .1-.06l5.92-14.8a.1.1 0 0 0-.1-.14h-3.28a.1.1 0 0 0-.1.06l-3.88 10.2a.1.1 0 0 1-.19.01L77.03 6.06a.1.1 0 0 0-.1-.06h-3.28a.1.1 0 0 0-.09.14l6.41 14.8a.1.1 0 0 0 .1.06h2.86ZM119.47 20.93a.1.1 0 0 1-.1.07h-2.77a.1.1 0 0 1-.1-.07l-1.9-5.88c-.03-.1-.16-.1-.2 0l-1.88 5.88a.1.1 0 0 1-.1.07h-2.78a.1.1 0 0 1-.09-.07l-3.5-10.8a.1.1 0 0 1 .09-.13h2.93a.1.1 0 0 1 .1.07l1.92 6.65c.03.1.16.1.2 0l2.05-6.65a.1.1 0 0 1 .1-.07h2.1a.1.1 0 0 1 .1.07l2.08 6.65c.02.1.16.1.19 0l1.9-6.65a.1.1 0 0 1 .1-.07h2.95a.1.1 0 0 1 .1.13l-3.49 10.8ZM24.92 21.24c1.34 0 2.33-.6 2.89-1.23.06-.07.19-.03.19.07v.82c0 .05.04.1.1.1h2.8a.1.1 0 0 0 .1-.1V10.1a.1.1 0 0 0-.1-.1h-2.8a.1.1 0 0 0-.1.1v.82c0 .1-.13.14-.19.07a3.84 3.84 0 0 0-2.9-1.23c-2.92 0-5.16 2.64-5.16 5.74s2.24 5.74 5.17 5.74Zm.64-2.75c-1.68 0-2.78-1.25-2.78-2.99 0-1.74 1.1-3 2.78-3 1.67 0 2.77 1.26 2.77 3s-1.1 3-2.77 3ZM41 20.08c0-.1-.13-.14-.2-.07a3.83 3.83 0 0 1-2.88 1.23c-2.93 0-5.17-2.64-5.17-5.74s2.24-5.74 5.17-5.74c1.34 0 2.33.6 2.89 1.23.06.07.19.03.19-.07V6.1c0-.06.04-.1.1-.1h2.8c.06 0 .1.04.1.1v14.8a.1.1 0 0 1-.1.1h-2.8a.1.1 0 0 1-.1-.1v-.82Zm-5.22-4.58c0 1.74 1.1 3 2.78 3 1.67 0 2.77-1.26 2.77-3s-1.1-3-2.77-3c-1.68 0-2.78 1.26-2.78 3ZM68.23 25.82c3.36 0 5.77-1.72 5.77-5.68V10.1a.1.1 0 0 0-.1-.1h-2.8a.1.1 0 0 0-.1.1v.81c0 .1-.13.14-.2.07a3.67 3.67 0 0 0-2.86-1.22c-2.88 0-5.2 2.46-5.2 5.56 0 3.08 2.32 5.68 5.2 5.68 1.27 0 2.25-.63 2.87-1.34.06-.08.19-.03.19.06v.44c0 1.76-1.04 3.02-2.82 3.02-1.2 0-2.4-.4-3.35-1.29a.1.1 0 0 0-.15.02l-1.53 2.08a.1.1 0 0 0 .01.13c1.26 1.17 3.18 1.7 5.07 1.7Zm.35-7.68a2.75 2.75 0 0 1-2.8-2.82c0-1.69 1.28-2.81 2.8-2.81 1.52 0 2.8 1.12 2.8 2.81a2.75 2.75 0 0 1-2.8 2.82ZM105.7 18.67c.05.03.06.09.03.13a5.98 5.98 0 0 1-5.05 2.39c-3.28 0-5.83-2.27-5.83-5.74a5.62 5.62 0 0 1 5.78-5.75c2.89 0 5.42 1.83 5.42 5.42a9 9 0 0 0 0 .16c0 .23 0 .54-.04.88a.1.1 0 0 1-.1.09H97.9a.1.1 0 0 0-.1.11c.23 1.4 1.5 2.08 2.91 2.08 1.33 0 2.26-.57 2.78-1.3a.1.1 0 0 1 .14-.02l2.08 1.55Zm-5.15-6.48c-1.1 0-2.3.54-2.64 1.8a.1.1 0 0 0 .1.11h4.9a.1.1 0 0 0 .1-.12c-.31-1.23-1.38-1.79-2.46-1.79Z" mask="url(#azyyo1jim)"/></svg>'
        },
        845849: i => {
            i.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 28" width="125" height="28"><path fill="#131722" d="M93.37 7.21c0 .99-.83 1.78-1.87 1.78-1 0-1.84-.8-1.84-1.78s.85-1.77 1.84-1.77c1.04 0 1.87.8 1.87 1.77ZM93 21h-3V10h3v11ZM47.54 9.02c1.04 0 1.87-.8 1.87-1.77 0-.99-.83-1.78-1.87-1.78-1 0-1.84.8-1.84 1.78s.85 1.77 1.84 1.77ZM46 21h3V10h-3v11ZM9 21H6V9H2V6h11v3H9v12ZM16 21l-3 .02V10h3v1.88c.36-1 1.34-1.75 2.53-1.75h.03c.3 0 .6 0 .94.1v2.84a4 4 0 0 0-1.31-.2c-1.38 0-2.19 1-2.19 2.7V21ZM54 21h-3V10.01l3-.01v1c.57-.82 1.53-1.21 2.9-1.21 2.57 0 4.1 1.8 4.1 4.45V21h-3v-6c0-1.47-.56-2.66-1.77-2.66-1.36 0-2.23.93-2.23 2.89V21ZM83 21l6-15h-3.5l-4 10.5L77 6h-3.5L80 21h3ZM119.45 21h-2.93l-2.02-6.25-2 6.25h-2.93L106 10h3.14l2.05 7.04 2.17-7.04h2.26l2.2 7.04 2.02-7.04H123l-3.55 11ZM24.92 21.24c1.52 0 2.57-.77 3.08-1.47V21h3V10h-3v1.23a3.78 3.78 0 0 0-3.08-1.47c-2.93 0-5.17 2.64-5.17 5.74s2.24 5.74 5.17 5.74Zm.64-2.75c-1.68 0-2.78-1.25-2.78-2.99 0-1.74 1.1-3 2.78-3 1.67 0 2.77 1.26 2.77 3s-1.1 3-2.77 3ZM41 19.77c-.5.7-1.56 1.47-3.08 1.47-2.93 0-5.17-2.64-5.17-5.74s2.24-5.74 5.17-5.74c1.52 0 2.57.77 3.08 1.47V6h3v15h-3v-1.23Zm-5.22-4.27c0 1.74 1.1 3 2.78 3 1.67 0 2.77-1.26 2.77-3s-1.1-3-2.77-3c-1.68 0-2.78 1.26-2.78 3ZM68.23 25.82c3.36 0 5.77-1.72 5.77-5.68V10h-3v1.23a3.6 3.6 0 0 0-3.06-1.47c-2.88 0-5.2 2.46-5.2 5.56 0 3.08 2.32 5.68 5.2 5.68A3.8 3.8 0 0 0 71 19.42v.74c0 1.76-1.04 3.02-2.82 3.02a4.84 4.84 0 0 1-3.43-1.37l-1.65 2.25c1.25 1.2 3.21 1.76 5.13 1.76Zm.35-7.68a2.75 2.75 0 0 1-2.8-2.82c0-1.69 1.28-2.81 2.8-2.81 1.52 0 2.8 1.12 2.8 2.81a2.75 2.75 0 0 1-2.8 2.82ZM105.78 18.72a5.96 5.96 0 0 1-5.1 2.47c-3.28 0-5.83-2.27-5.83-5.74a5.62 5.62 0 0 1 5.78-5.75c2.89 0 5.42 1.83 5.42 5.42a6.01 6.01 0 0 1-.04 1.13h-8.24c.18 1.47 1.48 2.19 2.93 2.19 1.39 0 2.33-.62 2.84-1.39l2.24 1.67Zm-5.23-6.53c-1.13 0-2.38.57-2.67 1.91h5.15c-.26-1.32-1.36-1.91-2.48-1.91Z"/><mask width="125" height="25" fill="#000" x="0" y="3.44" maskUnits="userSpaceOnUse" id="aidcu3cby"><path fill="#fff" d="M0 3.44h125v25H0z"/><path d="M93.37 7.21c0 .99-.83 1.78-1.87 1.78-1 0-1.84-.8-1.84-1.78s.85-1.77 1.84-1.77c1.04 0 1.87.8 1.87 1.77ZM93 20.9a.1.1 0 0 1-.1.1h-2.8a.1.1 0 0 1-.1-.1V10.1c0-.06.04-.1.1-.1h2.8c.06 0 .1.04.1.1v10.8ZM47.54 9.02c1.04 0 1.87-.8 1.87-1.77 0-.99-.83-1.78-1.87-1.78-1 0-1.84.8-1.84 1.78s.85 1.77 1.84 1.77ZM46 20.9c0 .05.04.1.1.1h2.8a.1.1 0 0 0 .1-.1V10.1a.1.1 0 0 0-.1-.1h-2.8a.1.1 0 0 0-.1.1v10.8ZM9 20.9a.1.1 0 0 1-.1.1H6.1a.1.1 0 0 1-.1-.1V9.1a.1.1 0 0 0-.1-.1H2.1a.1.1 0 0 1-.1-.1V6.1c0-.06.04-.1.1-.1h10.8c.06 0 .1.04.1.1v2.8a.1.1 0 0 1-.1.1H9.1a.1.1 0 0 0-.1.1v11.8ZM16 20.9a.1.1 0 0 1-.1.1l-2.8.02a.1.1 0 0 1-.1-.1V10.1c0-.06.04-.1.1-.1h2.8c.06 0 .1.04.1.1v1.21c0 .11.2.16.25.06a2.69 2.69 0 0 1 2.28-1.24h.03c.28 0 .55 0 .87.08a.1.1 0 0 1 .07.09v2.63a.1.1 0 0 1-.13.1 4 4 0 0 0-1.18-.16c-1.38 0-2.19 1-2.19 2.7v5.33ZM54 20.9a.1.1 0 0 1-.1.1h-2.8a.1.1 0 0 1-.1-.1V10.11c0-.05.04-.1.1-.1l2.8-.01c.05 0 .1.04.1.1v.58c0 .1.13.14.2.07.58-.65 1.48-.96 2.7-.96 2.57 0 4.1 1.8 4.1 4.45v6.66a.1.1 0 0 1-.1.1h-2.8a.1.1 0 0 1-.1-.1V15c0-1.47-.56-2.66-1.77-2.66-1.36 0-2.23.93-2.23 2.89v5.67ZM82.93 21a.1.1 0 0 0 .1-.06l5.92-14.8a.1.1 0 0 0-.1-.14h-3.28a.1.1 0 0 0-.1.06l-3.88 10.2a.1.1 0 0 1-.19.01L77.03 6.06a.1.1 0 0 0-.1-.06h-3.28a.1.1 0 0 0-.09.14l6.41 14.8a.1.1 0 0 0 .1.06h2.86ZM119.47 20.93a.1.1 0 0 1-.1.07h-2.77a.1.1 0 0 1-.1-.07l-1.9-5.88c-.03-.1-.16-.1-.2 0l-1.88 5.88a.1.1 0 0 1-.1.07h-2.78a.1.1 0 0 1-.09-.07l-3.5-10.8a.1.1 0 0 1 .09-.13h2.93a.1.1 0 0 1 .1.07l1.92 6.65c.03.1.16.1.2 0l2.05-6.65a.1.1 0 0 1 .1-.07h2.1a.1.1 0 0 1 .1.07l2.08 6.65c.02.1.16.1.19 0l1.9-6.65a.1.1 0 0 1 .1-.07h2.95a.1.1 0 0 1 .1.13l-3.49 10.8ZM24.92 21.24c1.34 0 2.33-.6 2.89-1.23.06-.07.19-.03.19.07v.82c0 .05.04.1.1.1h2.8a.1.1 0 0 0 .1-.1V10.1a.1.1 0 0 0-.1-.1h-2.8a.1.1 0 0 0-.1.1v.82c0 .1-.13.14-.19.07a3.84 3.84 0 0 0-2.9-1.23c-2.92 0-5.16 2.64-5.16 5.74s2.24 5.74 5.17 5.74Zm.64-2.75c-1.68 0-2.78-1.25-2.78-2.99 0-1.74 1.1-3 2.78-3 1.67 0 2.77 1.26 2.77 3s-1.1 3-2.77 3ZM41 20.08c0-.1-.13-.14-.2-.07a3.83 3.83 0 0 1-2.88 1.23c-2.93 0-5.17-2.64-5.17-5.74s2.24-5.74 5.17-5.74c1.34 0 2.33.6 2.89 1.23.06.07.19.03.19-.07V6.1c0-.06.04-.1.1-.1h2.8c.06 0 .1.04.1.1v14.8a.1.1 0 0 1-.1.1h-2.8a.1.1 0 0 1-.1-.1v-.82Zm-5.22-4.58c0 1.74 1.1 3 2.78 3 1.67 0 2.77-1.26 2.77-3s-1.1-3-2.77-3c-1.68 0-2.78 1.26-2.78 3ZM68.23 25.82c3.36 0 5.77-1.72 5.77-5.68V10.1a.1.1 0 0 0-.1-.1h-2.8a.1.1 0 0 0-.1.1v.81c0 .1-.13.14-.2.07a3.67 3.67 0 0 0-2.86-1.22c-2.88 0-5.2 2.46-5.2 5.56 0 3.08 2.32 5.68 5.2 5.68 1.27 0 2.25-.63 2.87-1.34.06-.08.19-.03.19.06v.44c0 1.76-1.04 3.02-2.82 3.02-1.2 0-2.4-.4-3.35-1.29a.1.1 0 0 0-.15.02l-1.53 2.08a.1.1 0 0 0 .01.13c1.26 1.17 3.18 1.7 5.07 1.7Zm.35-7.68a2.75 2.75 0 0 1-2.8-2.82c0-1.69 1.28-2.81 2.8-2.81 1.52 0 2.8 1.12 2.8 2.81a2.75 2.75 0 0 1-2.8 2.82ZM105.7 18.67c.05.03.06.09.03.13a5.98 5.98 0 0 1-5.05 2.39c-3.28 0-5.83-2.27-5.83-5.74a5.62 5.62 0 0 1 5.78-5.75c2.89 0 5.42 1.83 5.42 5.42a9 9 0 0 0 0 .16c0 .23 0 .54-.04.88a.1.1 0 0 1-.1.09H97.9a.1.1 0 0 0-.1.11c.23 1.4 1.5 2.08 2.91 2.08 1.33 0 2.26-.57 2.78-1.3a.1.1 0 0 1 .14-.02l2.08 1.55Zm-5.15-6.48c-1.1 0-2.3.54-2.64 1.8a.1.1 0 0 0 .1.11h4.9a.1.1 0 0 0 .1-.12c-.31-1.23-1.38-1.79-2.46-1.79Z"/></mask><path stroke="#fff" stroke-width="4" d="M93.37 7.21c0 .99-.83 1.78-1.87 1.78-1 0-1.84-.8-1.84-1.78s.85-1.77 1.84-1.77c1.04 0 1.87.8 1.87 1.77ZM93 20.9a.1.1 0 0 1-.1.1h-2.8a.1.1 0 0 1-.1-.1V10.1c0-.06.04-.1.1-.1h2.8c.06 0 .1.04.1.1v10.8ZM47.54 9.02c1.04 0 1.87-.8 1.87-1.77 0-.99-.83-1.78-1.87-1.78-1 0-1.84.8-1.84 1.78s.85 1.77 1.84 1.77ZM46 20.9c0 .05.04.1.1.1h2.8a.1.1 0 0 0 .1-.1V10.1a.1.1 0 0 0-.1-.1h-2.8a.1.1 0 0 0-.1.1v10.8ZM9 20.9a.1.1 0 0 1-.1.1H6.1a.1.1 0 0 1-.1-.1V9.1a.1.1 0 0 0-.1-.1H2.1a.1.1 0 0 1-.1-.1V6.1c0-.06.04-.1.1-.1h10.8c.06 0 .1.04.1.1v2.8a.1.1 0 0 1-.1.1H9.1a.1.1 0 0 0-.1.1v11.8ZM16 20.9a.1.1 0 0 1-.1.1l-2.8.02a.1.1 0 0 1-.1-.1V10.1c0-.06.04-.1.1-.1h2.8c.06 0 .1.04.1.1v1.21c0 .11.2.16.25.06a2.69 2.69 0 0 1 2.28-1.24h.03c.28 0 .55 0 .87.08a.1.1 0 0 1 .07.09v2.63a.1.1 0 0 1-.13.1 4 4 0 0 0-1.18-.16c-1.38 0-2.19 1-2.19 2.7v5.33ZM54 20.9a.1.1 0 0 1-.1.1h-2.8a.1.1 0 0 1-.1-.1V10.11c0-.05.04-.1.1-.1l2.8-.01c.05 0 .1.04.1.1v.58c0 .1.13.14.2.07.58-.65 1.48-.96 2.7-.96 2.57 0 4.1 1.8 4.1 4.45v6.66a.1.1 0 0 1-.1.1h-2.8a.1.1 0 0 1-.1-.1V15c0-1.47-.56-2.66-1.77-2.66-1.36 0-2.23.93-2.23 2.89v5.67ZM82.93 21a.1.1 0 0 0 .1-.06l5.92-14.8a.1.1 0 0 0-.1-.14h-3.28a.1.1 0 0 0-.1.06l-3.88 10.2a.1.1 0 0 1-.19.01L77.03 6.06a.1.1 0 0 0-.1-.06h-3.28a.1.1 0 0 0-.09.14l6.41 14.8a.1.1 0 0 0 .1.06h2.86ZM119.47 20.93a.1.1 0 0 1-.1.07h-2.77a.1.1 0 0 1-.1-.07l-1.9-5.88c-.03-.1-.16-.1-.2 0l-1.88 5.88a.1.1 0 0 1-.1.07h-2.78a.1.1 0 0 1-.09-.07l-3.5-10.8a.1.1 0 0 1 .09-.13h2.93a.1.1 0 0 1 .1.07l1.92 6.65c.03.1.16.1.2 0l2.05-6.65a.1.1 0 0 1 .1-.07h2.1a.1.1 0 0 1 .1.07l2.08 6.65c.02.1.16.1.19 0l1.9-6.65a.1.1 0 0 1 .1-.07h2.95a.1.1 0 0 1 .1.13l-3.49 10.8ZM24.92 21.24c1.34 0 2.33-.6 2.89-1.23.06-.07.19-.03.19.07v.82c0 .05.04.1.1.1h2.8a.1.1 0 0 0 .1-.1V10.1a.1.1 0 0 0-.1-.1h-2.8a.1.1 0 0 0-.1.1v.82c0 .1-.13.14-.19.07a3.84 3.84 0 0 0-2.9-1.23c-2.92 0-5.16 2.64-5.16 5.74s2.24 5.74 5.17 5.74Zm.64-2.75c-1.68 0-2.78-1.25-2.78-2.99 0-1.74 1.1-3 2.78-3 1.67 0 2.77 1.26 2.77 3s-1.1 3-2.77 3ZM41 20.08c0-.1-.13-.14-.2-.07a3.83 3.83 0 0 1-2.88 1.23c-2.93 0-5.17-2.64-5.17-5.74s2.24-5.74 5.17-5.74c1.34 0 2.33.6 2.89 1.23.06.07.19.03.19-.07V6.1c0-.06.04-.1.1-.1h2.8c.06 0 .1.04.1.1v14.8a.1.1 0 0 1-.1.1h-2.8a.1.1 0 0 1-.1-.1v-.82Zm-5.22-4.58c0 1.74 1.1 3 2.78 3 1.67 0 2.77-1.26 2.77-3s-1.1-3-2.77-3c-1.68 0-2.78 1.26-2.78 3ZM68.23 25.82c3.36 0 5.77-1.72 5.77-5.68V10.1a.1.1 0 0 0-.1-.1h-2.8a.1.1 0 0 0-.1.1v.81c0 .1-.13.14-.2.07a3.67 3.67 0 0 0-2.86-1.22c-2.88 0-5.2 2.46-5.2 5.56 0 3.08 2.32 5.68 5.2 5.68 1.27 0 2.25-.63 2.87-1.34.06-.08.19-.03.19.06v.44c0 1.76-1.04 3.02-2.82 3.02-1.2 0-2.4-.4-3.35-1.29a.1.1 0 0 0-.15.02l-1.53 2.08a.1.1 0 0 0 .01.13c1.26 1.17 3.18 1.7 5.07 1.7Zm.35-7.68a2.75 2.75 0 0 1-2.8-2.82c0-1.69 1.28-2.81 2.8-2.81 1.52 0 2.8 1.12 2.8 2.81a2.75 2.75 0 0 1-2.8 2.82ZM105.7 18.67c.05.03.06.09.03.13a5.98 5.98 0 0 1-5.05 2.39c-3.28 0-5.83-2.27-5.83-5.74a5.62 5.62 0 0 1 5.78-5.75c2.89 0 5.42 1.83 5.42 5.42a9 9 0 0 0 0 .16c0 .23 0 .54-.04.88a.1.1 0 0 1-.1.09H97.9a.1.1 0 0 0-.1.11c.23 1.4 1.5 2.08 2.91 2.08 1.33 0 2.26-.57 2.78-1.3a.1.1 0 0 1 .14-.02l2.08 1.55Zm-5.15-6.48c-1.1 0-2.3.54-2.64 1.8a.1.1 0 0 0 .1.11h4.9a.1.1 0 0 0 .1-.12c-.31-1.23-1.38-1.79-2.46-1.79Z" mask="url(#aidcu3cby)"/></svg>'
        },
        594696: i => {
            i.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89 19" width="89" height="19"><path fill="#131722" d="M67.25 4.9c0 .73-.6 1.32-1.37 1.32-.73 0-1.36-.59-1.36-1.31 0-.72.63-1.31 1.36-1.31.76 0 1.37.59 1.37 1.3ZM66.98 15h-2.2V6.96h2.2V15ZM33.52 6.24c.77 0 1.37-.59 1.37-1.3 0-.73-.6-1.32-1.37-1.32-.73 0-1.35.59-1.35 1.31 0 .72.62 1.31 1.35 1.31ZM32.39 15h2.2V6.96h-2.2V15ZM5.15 15h-2.2V6.22H0v-2.2h8.1v2.2H5.15V15ZM10.3 15l-2.2.01V6.96h2.2v1.39c.27-.74 1-1.3 1.86-1.3h.03c.22 0 .44 0 .7.07v2.1c-.34-.1-.62-.15-.98-.15-1 0-1.6.74-1.6 1.99V15ZM38.27 15h-2.2V6.97l2.2-.01v.73c.43-.6 1.13-.89 2.14-.89 1.89 0 3.01 1.33 3.01 3.28V15h-2.2v-4.36c0-1.09-.42-1.96-1.3-1.96-1 0-1.65.68-1.65 2.13V15ZM59.47 15l4.57-10.99h-2.58l-2.94 7.73-3.32-7.73h-2.57L57.26 15h2.21ZM86.45 15h-2.16l-1.48-4.54L81.33 15h-2.15l-2.63-8.04h2.31l1.5 5.18 1.6-5.18h1.67l1.62 5.18 1.48-5.18h2.33L86.45 15ZM16.87 15.23c1.12 0 1.9-.56 2.27-1.08v.9h2.2v-8.1h-2.2v.92a2.78 2.78 0 0 0-2.27-1.09c-2.15 0-3.8 1.94-3.8 4.23 0 2.28 1.65 4.22 3.8 4.22Zm.47-2.02c-1.23 0-2.04-.92-2.04-2.2 0-1.28.8-2.2 2.04-2.2 1.23 0 2.04.92 2.04 2.2 0 1.28-.81 2.2-2.04 2.2ZM28.7 14.15a2.78 2.78 0 0 1-2.26 1.08c-2.16 0-3.8-1.94-3.8-4.22 0-2.29 1.64-4.23 3.8-4.23 1.11 0 1.9.57 2.27 1.09V4.02h2.2v11.03h-2.2v-.9ZM24.88 11c0 1.28.8 2.2 2.04 2.2 1.23 0 2.04-.92 2.04-2.2 0-1.28-.81-2.2-2.04-2.2s-2.04.92-2.04 2.2ZM48.75 18.6c2.47 0 4.25-1.26 4.25-4.18V6.96h-2.21v.9a2.65 2.65 0 0 0-2.25-1.08c-2.13 0-3.83 1.81-3.83 4.1 0 2.26 1.7 4.17 3.83 4.17a2.8 2.8 0 0 0 2.25-1.16v.55c0 1.3-.76 2.22-2.08 2.22-.9 0-1.81-.31-2.52-1l-1.22 1.64c.93.9 2.37 1.3 3.78 1.3Zm.26-5.65a2.02 2.02 0 0 1-2.06-2.07c0-1.25.94-2.08 2.05-2.08 1.12 0 2.06.83 2.06 2.08 0 1.23-.94 2.07-2.05 2.07ZM76.39 13.38a4.4 4.4 0 0 1-3.76 1.81c-2.41 0-4.29-1.67-4.29-4.22 0-2.4 1.8-4.23 4.26-4.23 2.12 0 3.98 1.34 3.98 3.98v.12c0 .19.01.44-.03.72H70.5c.13 1.08 1.09 1.6 2.16 1.6a2.4 2.4 0 0 0 2.09-1.01l1.65 1.23Zm-3.86-4.8c-.82 0-1.74.41-1.95 1.4h3.78c-.19-.97-1-1.4-1.83-1.4Z"/></svg>'
        },
        726619: i => {
            i.exports = {
                ar: ["رسم بياني من TradingView"],
                ca_ES: "Chart by TradingView",
                cs: "Chart by TradingView",
                de: ["Chart von TradingView"],
                el: "Chart by TradingView",
                en: "Chart by TradingView",
                es: ["Gráfico por TradingView"],
                fa: "Chart by TradingView",
                fr: ["Graphique par TradingView"],
                he_IL: ["גרף מאת TradingView"],
                hu_HU: "Chart by TradingView",
                id_ID: ["Chart oleh TradingView"],
                it: ["Grafico da TradingView"],
                ja: ["TradingView提供のチャート"],
                ko: ["트레이딩뷰 제공 차트"],
                ms_MY: ["Carta oleh TradingView"],
                nl_NL: "Chart by TradingView",
                pl: ["Wykresy od TradingView"],
                pt: ["Gráfico por TradingView"],
                ro: "Chart by TradingView",
                ru: ["График от TradingView"],
                sv: ["Diagram av TradingView"],
                th: ["ชาร์ตแนวคิดการซื้อขายหุ้นของเทรดเดอร์โดย TradingView"],
                tr: ["Grafik TradingView tarafından"],
                vi: ["Biểu mẫu do TradingView cung cấp"],
                zh: ["图表由TradingView提供"],
                zh_TW: ["TradingView圖表"]
            }
        },
        782128: i => {
            i.exports = {
                ar: ["بواسطة TradingView"],
                ca_ES: ["Per TradingView"],
                cs: "By TradingView",
                de: ["Von TradingView"],
                el: "By TradingView",
                en: "By TradingView",
                es: ["Por TradingView"],
                fa: "By TradingView",
                fr: ["Par TradingView"],
                he_IL: ["מאת TradingView"],
                hu_HU: ["TradingView Által"],
                id_ID: ["Oleh TradingView"],
                it: ["Da TradingView"],
                ja: ["TradingView提供"],
                ko: ["제공자 TradingView"],
                ms_MY: ["Oleh TradingView"],
                nl_NL: "By TradingView",
                pl: ["od TradingView"],
                pt: ["Pelo TradingView"],
                ro: "By TradingView",
                ru: ["от TradingView"],
                sv: ["Av Tradingview"],
                th: ["โดย TradingView"],
                tr: ["TradingView'den"],
                vi: ["Bởi Tradingview"],
                zh: ["由TradingView提供"],
                zh_TW: "By TradingView"
            }
        },
        105607: i => {
            i.exports = {
                ar: ["بواسطة TradingView"],
                ca_ES: "by TradingView",
                cs: "by TradingView",
                de: ["von TradingView"],
                el: "by TradingView",
                en: "by TradingView",
                es: ["por TradingView"],
                fa: "by TradingView",
                fr: ["par TradingView"],
                he_IL: ["מאת TradingView"],
                hu_HU: "by TradingView",
                id_ID: ["oleh TradingView"],
                it: ["da TradingView"],
                ja: "by TradingView",
                ko: ["제공자 TradingView"],
                ms_MY: ["oleh TradingView"],
                nl_NL: "by TradingView",
                pl: "by TradingView",
                pt: ["do TradingView"],
                ro: "by TradingView",
                ru: ["от TradingView"],
                sv: ["Av TradingView"],
                th: ["โดย TradingView"],
                tr: ["TradingView'den"],
                vi: ["bởi TradingView"],
                zh: ["由TradingView提供"],
                zh_TW: ["由TradingView提供"]
            }
        },
        299769: i => {
            i.exports = {
                ar: ["مدعوم من"],
                ca_ES: ["amb tecnologia de"],
                cs: "powered by",
                de: ["unterstützt von"],
                el: "powered by",
                en: "powered by",
                es: ["con tecnología de"],
                fa: "powered by",
                fr: ["propulsé par"],
                he_IL: ['מופעל ע"י'],
                hu_HU: "powered by",
                id_ID: ["diberdayakan oleh"],
                it: ["fornito da"],
                ja: ["提供元"],
                ko: ["기능 제공"],
                ms_MY: ["dikuasakan oleh"],
                nl_NL: ["mogelijke gemaakt door"],
                pl: ["przygotowane przez"],
                pt: ["desenvolvido por"],
                ro: "powered by",
                ru: ["при поддержке"],
                sv: ["drivs av"],
                th: ["ขับเคลื่อนโดย"],
                tr: ["sağlayıcı"],
                vi: ["được hỗ trợ bởi"],
                zh: ["本站由"],
                zh_TW: ["本站由"]
            }
        },
        968111: i => {
            i.exports = {
                ar: ["بواسطة TradingView"],
                ca_ES: "powered by TradingView",
                cs: "powered by TradingView",
                de: ["unterstützt von TradingView"],
                el: "powered by TradingView",
                en: "powered by TradingView",
                es: ["con tecnología de TradingView"],
                fa: "powered by TradingView",
                fr: ["fourni par TradingView"],
                he_IL: ["מופעל על ידי Tradingview"],
                hu_HU: ["támogatta a TradingView"],
                id_ID: ["diberdayakan oleh TradingView"],
                it: ["fornito da TradingView"],
                ja: ["TradingView提供"],
                ko: ["기능 제공 Tradingview"],
                ms_MY: ["dikuasakan oleh TradingView"],
                nl_NL: "powered by TradingView",
                pl: ["Powered by TradingView"],
                pt: ["patrocinado por TradingView"],
                ro: "powered by TradingView",
                ru: ["технология TradingView"],
                sv: ["drivs av TradingView"],
                th: ["สนับสนุนโดย TradingView"],
                tr: ["grafiği sağlayan TradingView"],
                vi: ["được cung cấp bởi TradingView"],
                zh: ["由TradingView提供"],
                zh_TW: ["由TradingView提供"]
            }
        },
        988841: i => {
            i.exports = {
                ar: ["{symbol} تم تفريغ القوائم المالية عن طريق TradingView"],
                ca_ES: ["Informació financera de {symbol} per TradingView"],
                cs: "{symbol} financials by TradingView",
                de: ["{symbol} Finanzdaten von TradingView"],
                el: "{symbol} financials by TradingView",
                en: "{symbol} financials by TradingView",
                es: ["Información financiera de {symbol} por TradingView"],
                fa: "{symbol} financials by TradingView",
                fr: ["{symbol} données financières par TradingView"],
                he_IL: ["{symbol} פיננסים באדיבות TradingView"],
                hu_HU: ["{symbol} TradingView pénzügyek"],
                id_ID: ["{symbol} finansial oleh TradingView"],
                it: ["{symbol} dati finanziari da TradingView"],
                ja: ["TradingView提供の{symbol}ファンダメンタル"],
                ko: ["{symbol} 파이낸셜 제공 TradingView"],
                ms_MY: ["{symbol} kewangan oleh TradingView"],
                nl_NL: "{symbol} financials by TradingView",
                pl: ["{symbol} dane finansowe od TradingView"],
                pt: ["Finanças {symbol} por TradingView"],
                ro: "{symbol} financials by TradingView",
                ru: ["Финансовые показатели {symbol} от TradingView"],
                sv: ["{symbol} finansinformation av TradingView"],
                th: ["{symbol} ทางการเงินโดย TradingView"],
                tr: ["{symbol} finansal bilgilerini sağlayan TradingView"],
                vi: ["Thông tin tài chính {symbol} do TradingView cung cấp."],
                zh: ["{symbol}财务指标由TradingView提供"],
                zh_TW: ["{symbol}財務數據由TradingView提供"]
            }
        }
    }
]);
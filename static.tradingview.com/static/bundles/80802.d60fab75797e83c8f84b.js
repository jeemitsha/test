(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [80802], {
        44342: t => {
            t.exports = {
                toast: "toast-r9bFT7mJ",
                "intent-success": "intent-success-r9bFT7mJ",
                "intent-warning": "intent-warning-r9bFT7mJ",
                "intent-danger": "intent-danger-r9bFT7mJ",
                image: "image-r9bFT7mJ",
                "main-content": "main-content-r9bFT7mJ",
                title: "title-r9bFT7mJ",
                "main-text": "main-text-r9bFT7mJ",
                "secondary-text": "secondary-text-r9bFT7mJ",
                actions: "actions-r9bFT7mJ",
                "close-icon": "close-icon-r9bFT7mJ",
                "close-button": "close-button-r9bFT7mJ",
                "adjust-for-close-button": "adjust-for-close-button-r9bFT7mJ"
            }
        },
        901767: (t, e, i) => {
            "use strict";
            i.d(e, {
                CloseButton: () => c,
                ToastContainer: () => u,
                ToastImage: () => m,
                ToastTitle: () => h,
                ToastMainText: () => g,
                ToastActions: () => _,
                ToastSecondaryText: () => T
            });
            var o = i(50959),
                n = i(497754),
                s = i(410864),
                a = i(83436),
                r = i(238822),
                l = i(44342),
                d = i.n(l);
            const c = o.forwardRef(((t, e) => {
                const {
                    className: i,
                    onClick: s,
                    tabIndex: l
                } = t;
                return o.createElement("button", {
                    type: "button",
                    className: n(d()["close-button"], i),
                    tabIndex: l,
                    onClick: s,
                    ref: e
                }, o.createElement(a.Icon, {
                    icon: r,
                    className: d()["close-icon"]
                }))
            }));

            function u(t) {
                const {
                    children: e,
                    role: i,
                    className: a,
                    intent: r = s.ToastIntent.Default
                } = t, l = n(d().toast, r !== s.ToastIntent.Default && d()[`intent-${r}`], a);
                return o.createElement("article", {
                    className: l,
                    role: i
                }, e)
            }

            function m(t) {
                const {
                    children: e
                } = t;
                return o.createElement("div", {
                    className: d().image
                }, e)
            }

            function h(t) {
                const {
                    children: e,
                    className: i
                } = t;
                return o.createElement("h2", {
                    className: n(d().title, i)
                }, e)
            }

            function g(t) {
                const {
                    children: e,
                    className: i
                } = t;
                return o.createElement("p", {
                    className: n(d()["main-text"], i)
                }, e)
            }

            function _(t) {
                const {
                    children: e
                } = t;
                return o.createElement("div", {
                    className: d().actions
                }, e)
            }

            function T(t) {
                const {
                    children: e
                } = t;
                return o.createElement("p", {
                    className: d()["secondary-text"]
                }, e)
            }
        },
        548592: (t, e, i) => {
            "use strict";
            i.d(e, {
                isScreenRecordingOn: () => s,
                toggleScreenRecordingState: () => a
            });
            var o = i(49437);
            const n = "scereen-recording-on";

            function s() {
                return null !== o.TVLocalStorage.getItem(n)
            }

            function a(t = !0) {
                var e, i, s, a;
                t ? (o.TVLocalStorage.setItem(n, "true"), null === (i = null === (e = window.TVD) || void 0 === e ? void 0 : e.startedScreenCapture) || void 0 === i || i.call(e)) : (o.TVLocalStorage.removeItem(n), null === (a = null === (s = window.TVD) || void 0 === s ? void 0 : s.stoppedScreenCapture) || void 0 === a || a.call(s))
            }
        },
        239401: (t, e, i) => {
            "use strict";
            var o, n, s;
            i.d(e, {
                    CloseTrigger: () => o,
                    ToastAnimationStage: () => n,
                    ToastPriority: () => s
                }),
                function(t) {
                    t[t.Swipe = 0] = "Swipe", t[t.Click = 1] = "Click"
                }(o || (o = {})),
                function(t) {
                    t[t.Add = 0] = "Add", t[t.Remove = 1] = "Remove", t[t.None = 2] = "None"
                }(n || (n = {})),
                function(t) {
                    t[t.Low = 0] = "Low", t[t.Medium = 1] = "Medium", t[t.High = 2] = "High"
                }(s || (s = {}))
        },
        547213: t => {
            t.exports = {
                toastHidden: "toastHidden-Jhy8835_",
                toast: "toast-Jhy8835_",
                toastCloseButton: "toastCloseButton-Jhy8835_"
            }
        },
        781904: (t, e, i) => {
            "use strict";
            i.d(e, {
                AdPlacement: () => a,
                AdPlacementIntersect: () => r
            });
            var o = i(777491),
                n = i(245009),
                s = i(76797);
            class a {
                constructor(t, e, i, s) {
                    this._adsTargeting = new Map, this._contentId = `div-gpt-ad-${(0,o.guid)()}`, this._onImpressionViewable = () => {}, this._isDisabled = () => !(0, n.isEnabled)(), this._placementId = t,
                        this._size = e, this._adUnit = i, this._placement = s
                }
                addTargeting(t, e) {
                    return this._adsTargeting.set(t, e), this
                }
                setPlacement(t) {
                    return this._placement = t, this
                }
                _setContentId(t) {
                    this._contentId = t
                }
                _getContentId() {
                    return this._contentId
                }
                _trackDisplay(t, e) {
                    this._placement && (0, n.trackAdDialogEvent)(this._adUnit, this._placement, t, e)
                }
                async _displaySlot(t) {
                    const e = {
                        placementId: this._placementId,
                        adUnitPath: await (0, n.getAdUnitPath)(t),
                        size: this._size,
                        optDiv: this._contentId
                    };
                    await (0, n.displaySlot)(e, this._onDisplay, void 0, this._onImpressionViewable, this._adsTargeting)
                }
            }
            class r extends a {
                constructor(t, e, i, o) {
                    super(t, e, i, o), this._onDisplay = t => {
                        this._resolvePromise(t), this._trackDisplay("show", !t)
                    }, this._ready = (0, s.createDeferredPromise)(), this._placement = o, this._adUnit = i
                }
                ready() {
                    return this._ready.promise
                }
                async _display(t, e, i = !1, o) {
                    if (this._isDisabled()) return void this._resolvePromise(!0);
                    const n = () => {
                        t.setAttribute("id", this._getContentId()), this._displaySlot(e)
                    };
                    if (i) {
                        const e = new IntersectionObserver((i => {
                            for (const o of i) o.isIntersecting && (n(), e.unobserve(t))
                        }), o);
                        e.observe(t)
                    } else n()
                }
                _resolvePromise(t) {
                    this._ready.resolve(t), this._ready = (0, s.createDeferredPromise)()
                }
            }
        },
        245009: (t, e, i) => {
            "use strict";
            i.d(e, {
                getAdUnitPath: () => T,
                displaySlot: () => v,
                isEnabled: () => w,
                trackAdDialogEvent: () => b
            });
            var o = i(251954),
                n = i(691805),
                s = i(261030),
                a = i(125226),
                r = i(638456),
                l = i(768038),
                d = i(66974),
                c = i(314802),
                u = i(960254),
                m = i(175203),
                h = i(776734);
            let g = !1;
            const _ = {};
            async function T(t) {
                const e = (0, l.isRtl)();
                if (!e && void 0 === t.darkLtr) return t.lightLtr;
                if (e && void 0 === t.darkRtl) return t.lightRtl;
                const [{
                    StdTheme: o
                }, {
                    getCurrentTheme: n
                }] = await Promise.all([Promise.resolve().then(i.bind(i, 919346)), Promise.all([i.e(16665), i.e(27496)]).then(i.bind(i, 440135))]), s = n().name;
                return e ? s === o.Dark && t.darkRtl ? t.darkRtl : t.lightRtl : s === o.Dark && void 0 !== t.darkLtr ? t.darkLtr : t.lightLtr
            }
            async function p(t, e, i) {
                return g || ((0, n.appendScript)("https://securepubads.g.doubleclick.net/tag/js/gpt.js"), window.googletag = window.googletag || {
                    cmd: []
                }, g = !0, o.subscribe(s.cookieSettingsChangeEvent, ((t, e) => {
                    t === s.CookieSettings.Advertising && window.googletag.cmd.push((() => {
                        window.googletag.pubads().setPrivacySettings({
                            nonPersonalizedAds: !e
                        }), window.googletag.pubads().refresh()
                    }))
                }), null)), new Promise((o => {
                    window.googletag.cmd.push((() => {
                        if (_[t.optDiv]) {
                            const e = _[t.optDiv].onDestroy;
                            void 0 !== e && e(), window.googletag.destroySlots([_[t.optDiv].slot])
                        }
                        const n = window.googletag.defineSlot(t.adUnitPath, t.size, t.optDiv);
                        _[t.optDiv] = {
                                slot: n
                            }, void 0 !== i && (_[t.optDiv].onDestroy = i), n.addService(window.googletag.pubads()), window.googletag.pubads().setPrivacySettings({
                                nonPersonalizedAds: !(0, s.getCookieSetting)(s.CookieSettings.Advertising)
                            }), window.googletag.pubads().enableSingleRequest(), window.googletag.pubads().setTargeting("locale", window.locale), window.googletag.pubads().setTargeting("env", (0, d.isProd)() ? "battle" : "staging"), window.googletag.pubads().setTargeting("app", window.TVD ? "tvd" : (0, c.isOnMobileAppPage)("old") ? "ios" : (0, c.isOnMobileAppPage)("new") ? "android" : r.CheckMobile.any() ? "mobile_web" : "web"),
                            e.forEach(((t, e) => {
                                window.googletag.pubads().setTargeting(e, t)
                            })), window.googletag.enableServices(), o(n)
                    }))
                }))
            }
            async function v(t, e, i, o, n = new Map) {
                const s = setTimeout((() => {
                        e(!0)
                    }), 3e3),
                    a = await p(t, n, i);
                window.googletag.cmd.push((() => {
                    const i = o => {
                        o.slot === a && (clearTimeout(s), e(o.isEmpty), o.isEmpty || m.telemetry.sendReport("site", `${t.placementId}_ad_slot_shown`)), window.googletag.pubads().removeEventListener("slotRenderEnded", i)
                    };
                    if (window.googletag.pubads().addEventListener("slotRenderEnded", i), void 0 !== o) {
                        const t = e => {
                            e.slot === a && o(), window.googletag.pubads().removeEventListener("impressionViewable", t)
                        };
                        window.googletag.pubads().addEventListener("impressionViewable", t)
                    }
                    window.googletag.display(t.optDiv)
                })), m.telemetry.sendReport("site", `${t.placementId}_ad_slot_display`)
            }

            function w() {
                var t;
                return (0, a.isFeatureEnabled)("google-ads") && (null === (t = window.user.active_broker) || void 0 === t ? void 0 : t.plan) !== u.BrokerPlansIds.Platinum
            }
            async function b(t, e, i, o) {
                const n = await (0, h.getTracker)();
                n && n.trackAdDialog(t, e, i, o, window.is_authenticated ? "free" : "visitor")
            }
        },
        580802: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                PlatformPlacement: () => P,
                platformPlacement: () => S
            });
            var o = i(36921),
                n = i(781904);
            const s = JSON.parse('{"de_DE":{"initialTimeout":0,"maxRotations":40,"rotateTimeout":2,"openRotateTimeout":3},"es":{"initialTimeout":0,"maxRotations":0,"rotateTimeout":2,"openRotateTimeout":3},"in":{"initialTimeout":0,"maxRotations":0,"rotateTimeout":0,"openRotateTimeout":0},"it":{"initialTimeout":0,"maxRotations":0,"rotateTimeout":2,"openRotateTimeout":3},"fr":{"initialTimeout":0,"maxRotations":0,"rotateTimeout":2,"openRotateTimeout":3},"zh_CN":{"initialTimeout":0,"maxRotations":0,"rotateTimeout":2,"openRotateTimeout":3},"au":{"initialTimeout":0,"maxRotations":40,"rotateTimeout":3,"openRotateTimeout":3},"za":{"initialTimeout":0,"maxRotations":0,"rotateTimeout":3,"openRotateTimeout":0},"us":{"initialTimeout":0,"maxRotations":0,"rotateTimeout":3,"openRotateTimeout":3},"gb":{"initialTimeout":0,"maxRotations":40,"rotateTimeout":3,"openRotateTimeout":3},"nz":{"initialTimeout":0,"maxRotations":0,"rotateTimeout":3,"openRotateTimeout":3},"ae":{"initialTimeout":0,"maxRotations":40,"rotateTimeout":3,"openRotateTimeout":3},"sg":{"initialTimeout":0,"maxRotations":0,"rotateTimeout":3,"openRotateTimeout":3},"he_IL":{"initialTimeout":0,"maxRotations":40,"rotateTimeout":3,"openRotateTimeout":3},"nl":{"initialTimeout":0,"maxRotations":40,"rotateTimeout":3,"openRotateTimeout":3}}');
            var a = i.t(s, 2),
                r = i(50959),
                l = i(497754),
                d = i(239401),
                c = i(901767),
                u = i(547213);
            let m = null;

            function h() {
                return m
            }
            const g = r.memo((t => {
                const {
                    id: e,
                    bodyWidth: i,
                    onRemove: o
                } = t, n = (0, r.useRef)(null), s = function(t) {
                    const e = t - 32;
                    return Math.max(Math.min(e, 400), 288)
                }(i);
                (0, r.useEffect)((() => {
                    m = n.current
                }), [n.current]);
                const a = (0, r.useCallback)((() => {
                    o(d.CloseTrigger.Click)
                }), []);
                return r.createElement("div", {
                    ref: n,
                    className: l(u.toast, u.toastHidden)
                }, r.createElement(c.ToastContainer, null, r.createElement(c.CloseButton, {
                    onClick: a,
                    className: u.toastCloseButton
                }), r.createElement("div", {
                    id: e,
                    style: {
                        width: `${s}px`
                    }
                })))
            }));

            function _(t) {
                const e = document.body.offsetWidth;
                return ({
                    onRemove: i
                }) => r.createElement(g, {
                    id: t,
                    bodyWidth: e,
                    onRemove: i
                })
            }
            var T = i(508846),
                p = i(345848),
                v = i(125226),
                w = i(548592),
                b = i(632446),
                y = i(833813),
                R = i(114968),
                f = i(199322);
            let C = 0;
            const E = {
                    lightLtr: "/21803441042/native_ad_unit",
                    lightRtl: "/21803441042/native_ad_unit/native_ad_unit_rtl",
                    darkLtr: "/21803441042/native_ad_unit/native_ad_unit_dark",
                    darkRtl: "/21803441042/native_ad_unit/native_ad_unit_rtl_dark"
                },
                D = [];

            function k(t) {
                (0, p.trackEvent)("Advertisement Platform Goog", t)
            }
            class P extends n.AdPlacement {
                constructor(t, e, i) {
                    var n;
                    super("platform", "fluid", o.AdUnit.Platform, i), this._closeCount = 0, this._rotationsCount = 0, this._shortTimeout = !1, this._showTimeout = 6e4, this._showTimeoutShortTimeout = 5e3, this._rotateTimeout = 0, this._openRotateTimeout = 0, this._maxRotations = 0, this._rotationEnabled = !f.registerDialogVisible.value(), this._onImpressionViewable = () => {
                        var t;
                        null === (t = this._toasts) || void 0 === t || t.forceRender()
                    }, this._onDisplay = t => {
                        if (t) this._removeToast();
                        else {
                            const t = h();
                            null !== t && (t.classList.remove(u.toastHidden), k("Shown"), this._openRotateTimeout && this._rotate(this._openRotateTimeout))
                        }
                        this._trackDisplay("show", !t)
                    }, this._toggleRotationEnabled = t => {
                        this._rotationEnabled = !t, this._rotationEnabled ? this._rotate() : clearTimeout(this._updateTimer)
                    }, this._removeToast = () => new Promise((t => {
                        void 0 !== this._removeLastToast ? this._removeLastToast().then((() => {
                            delete this._removeLastToast, t()
                        })) : t()
                    })), this._onCloseToast = () => {
                        this._closeCount++, 1 !== this._closeCount && this._closeCount % 3 != 0 || (0, T.createGoProDialog)({
                            feature: "adFree"
                        }).then((() => {
                            k("Closed")
                        })), this._rotate(), this._trackDisplay("close", !1)
                    }, this._toasts = t, this._shortTimeout = null != e && e, n = this, -1 === D.indexOf(n) && D.push(n), f.registerDialogVisible.subscribe(this._toggleRotationEnabled)
                }
                destroy() {
                    var t;
                    this._removeToast(),
                        function(t, e = !1) {
                            const i = D.indexOf(t); - 1 !== i && D.splice(i, 1), D.length > 0 && D[D.length - 1].display(e)
                        }(this), void 0 !== this._updateTimer && clearTimeout(this._updateTimer), f.registerDialogVisible.unsubscribe(this._toggleRotationEnabled), null === (t = this._toasts) || void 0 === t || t.destroy(), delete this._toasts
                }
                async display(t = !1) {
                    await this._setUpTimeouts(), t ? this._display() : this._setUpdateTrigger(this._shortTimeout ? this._showTimeoutShortTimeout : this._showTimeout)
                }
                setToasts(t) {
                    return this._toasts = t, this
                }
                static getInstance() {
                    return null === this._instance && (this._instance = new P), this._instance
                }
                _showToast() {
                    var t;
                    this._removeLastToast = null === (t = this._toasts) || void 0 === t ? void 0 : t.showCustomToast({
                        render: _(this._getContentId()),
                        priority: d.ToastPriority.High,
                        onLayerChange: this._removeToast,
                        onRemoveEnd: t => {
                            t && this._onCloseToast()
                        }
                    })
                }
                async _display() {
                    this._isDisabled() || (0, w.isScreenRecordingOn)() || (0, b.enabled)(y.ProductFeatures.NO_SPONSORED_ADS) || !this._rotationEnabled || (this._setContentId(function() {
                        const t = "div-gpt-ad-1576758501107-" + String(C);
                        return C += 1, t
                    }()), await this._removeToast(), this._showToast(), await this._displaySlot(E))
                }
                async _setUpTimeouts() {
                    var t, e, i, o;
                    const n = await (0,
                            R.userGeoInfo)(),
                        s = "en" === window.locale ? n.country_code : window.locale;
                    this._maxRotations = (null === (t = a[s]) || void 0 === t ? void 0 : t.maxRotations) || 20, this._openRotateTimeout = 60 * ((null === (e = a[s]) || void 0 === e ? void 0 : e.openRotateTimeout) || 0) * 1e3, this._rotateTimeout = 60 * ((null === (i = a[s]) || void 0 === i ? void 0 : i.rotateTimeout) || 5) * 1e3, this._showTimeout = 1e3 * ((null === (o = a[s]) || void 0 === o ? void 0 : o.initialTimeout) || 60)
                }
                _rotate(t = this._rotateTimeout) {
                    (0, v.isFeatureEnabled)("platform-ads-rotation") && this._rotationsCount < this._maxRotations && this._rotationEnabled && (clearTimeout(this._updateTimer), this._setUpdateTrigger(t))
                }
                _setUpdateTrigger(t = this._rotateTimeout) {
                    this._updateTimer = setTimeout((async () => {
                        await this._whenPageVisible(), this._display(), this._rotationsCount++
                    }), t)
                }
                _whenPageVisible() {
                    return new Promise((t => {
                        if ("visible" === document.visibilityState) t();
                        else {
                            const e = () => {
                                window.removeEventListener("visibilitychange", e), t()
                            };
                            window.addEventListener("visibilitychange", e)
                        }
                    }))
                }
            }
            P._instance = null;
            const S = P.getInstance()
        },
        199322: (t, e, i) => {
            "use strict";
            i.d(e, {
                registerDialogVisible: () => s,
                toggleDialogVisibleValue: () => a
            });
            var o = i(988411);
            const n = new(i.n(o)())(!1),
                s = n.readonly();

            function a(t) {
                n.setValue(t)
            }
        }
    }
]);
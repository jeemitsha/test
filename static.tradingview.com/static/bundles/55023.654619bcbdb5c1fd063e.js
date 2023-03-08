(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [55023], {
        91746: e => {
            e.exports = {}
        },
        881383: (e, t, n) => {
            "use strict";
            n.d(t, {
                getLiveRegionInstance: () => a,
                initLiveRegion: () => r
            });
            n(50959);
            class i {
                constructor(e, t = []) {
                    this._messagesQueue = [], this._alternate = !1, this._renderedMessage = null, this._idCounter = 0, this._containers = [...t], this._type = e
                }
                setContainers(e) {
                    this._containers = [...e]
                }
                addMessage(e, t = 0) {
                    const n = this._generateId(),
                        i = {
                            id: n,
                            message: e,
                            destroyTimeout: this._calculateDestroyTimeout(e, t)
                        };
                    return this._messagesQueue.push(i), this._renderedMessage || this._renderMessage(), { ...i,
                        type: this._type,
                        destroy: this._getDestroyMessageCallback(n)
                    }
                }
                destroyAll() {
                    var e;
                    this._messagesQueue = [], clearTimeout(null === (e = this._renderedMessage) || void 0 === e ? void 0 : e.destroyTimer), this._containers.forEach((e => {
                        e.innerText = ""
                    })), this._renderedMessage = null, this._alternate = !1
                }
                _generateId() {
                    return `live-region-${this._type}-${this._idCounter++}`
                }
                _calculateDestroyTimeout(e, t = 0) {
                    const n = 50 * e.trim().length + 200,
                        i = 250 * e.trim().length;
                    return Math.min(Math.max(n, t), i)
                }
                _findById(e) {
                    var t;
                    return (null === (t = this._renderedMessage) || void 0 === t ? void 0 : t.id) === e ? this._renderedMessage : this._messagesQueue.find((t => t.id === e))
                }
                _getDestroyMessageCallback(e) {
                    return async t => {
                        const n = this._findById(e);
                        return !!n && (n.renderedTo ? !!t && (this._removeRenderedMessage(), this._renderMessage(), !0) : (this._removeFromQueue(n), !0))
                    }
                }
                _removeRenderedMessage() {
                    var e;
                    const t = null === (e = this._renderedMessage) || void 0 === e ? void 0 : e.renderedTo;
                    t && (t.innerText = ""), this._renderedMessage = null
                }
                _removeFromQueue(e) {
                    this._messagesQueue = this._messagesQueue.filter((t => t !== e))
                }
                async _renderMessage() {
                    if (!this._containers.length || !this._messagesQueue.length) return;
                    const e = this._alternate ? this._containers[0] : this._containers[1],
                        t = this._messagesQueue.shift();
                    let n;
                    e.innerText = t.message;
                    const i = new Promise(((e, i) => {
                        n = setTimeout((() => {
                            var n;
                            if ((null === (n = this._renderedMessage) || void 0 === n ? void 0 : n.id) === t.id) return this._removeRenderedMessage(), void this._renderMessage().then(e);
                            i("Currently rendered message is not the one that you 're trying to destroy")
                        }), t.destroyTimeout)
                    }));
                    this._renderedMessage = { ...t,
                        renderedTo: e,
                        destroyTimer: n,
                        destroyPromise: i
                    }, this._alternate = !this._alternate
                }
            }
            class s extends i {}
            const o = new class {
                constructor() {
                    this.isInited = !1, this._politeQueue = new s("polite"), this._assertiveQueue = new s("assertive")
                }
                renderTo(e, t = !1) {
                    return t && this.destroy(), this._init(e)
                }
                destroy() {
                    this._politeQueue.destroyAll(), this._assertiveQueue.destroyAll(), this.isInited = !1
                }
                sayPolitely(e, t) {
                    return this.isInited ? this._politeQueue.addMessage(e, t) : null
                }
                interrupt(e, t) {
                    return this.isInited ? this._assertiveQueue.addMessage(e, t) : null
                }
                _init(e) {
                    if (!e) return !1;
                    if (this.isInited) return !1;
                    return !!this._setContainers(e) && (this.isInited = !0, !0)
                }
                _setContainers(e) {
                    const t = document.getElementById(e);
                    if (!t) return !1;
                    const n = t.querySelectorAll('[aria-live="polite"]'),
                        i = t.querySelectorAll('[aria-live="assertive"]');
                    return !(!n || 2 !== n.length || !i || 2 !== i.length) && (this._politeQueue.setContainers([n[0], n[1]]),
                        this._assertiveQueue.setContainers([i[0], i[1]]), !0)
                }
            };

            function a() {
                return o
            }

            function r(e) {
                return a().renderTo(e), a()
            }
        },
        690936: (e, t, n) => {
            "use strict";
            n.d(t, {
                openStreamMiniPlayer: () => s
            });
            var i = n(320058);

            function s(e) {
                Promise.all([n.e(88230), n.e(18619), n.e(81910), n.e(86256), n.e(91901), n.e(59087), n.e(97610), n.e(75514), n.e(745), n.e(98270), n.e(51701)]).then(n.bind(n, 693567)).then((t => {
                    const n = i.MiniPlayerSessionStorage.getItem(),
                        s = n ? JSON.parse(n) : null,
                        o = s ? s.time : e.currentTime ? e.currentTime : void 0,
                        a = s ? s.speed : e.currentSpeed ? e.currentSpeed : void 0,
                        r = s ? s.currentVolume : e.currentVolume ? e.currentVolume : void 0;
                    t.renderStreamMiniPlayer({
                        stream: e.stream,
                        currentTime: o,
                        currentSpeed: a,
                        currentVolume: r,
                        isTheaterMode: e.isTheaterMode,
                        setMiniModeOnPageStream: e.setMiniModeOnPageStream
                    })
                }))
            }
        },
        320058: (e, t, n) => {
            "use strict";
            n.d(t, {
                MiniPlayerSessionStorage: () => s
            });
            const i = "stream-mini-player";
            var s;
            ! function(e) {
                e.getItem = function() {
                    return window.sessionStorage.getItem(i)
                }, e.setItem = function(e, t, n, s) {
                    const o = {
                        time: t,
                        data: e,
                        url: null == e ? void 0 : e.url,
                        speed: n,
                        currentVolume: s
                    };
                    window.sessionStorage.setItem(i, JSON.stringify(o))
                }, e.removeItem = function() {
                    window.sessionStorage.removeItem(i)
                }
            }(s || (s = {}))
        },
        46277: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                FeatureId: () => i,
                DialogAction: () => s,
                errorCode: () => a,
                trackSocialNetworkEvent: () => r,
                createExtendedSolution: () => c
            });
            var i, s, o = n(776734);
            ! function(e) {
                e.CreateIdea = "free__create_public_idea", e.CreateComment = "free__create_comment", e.CreateMessageChat = "free__create_message_chat"
            }(i || (i = {})),
            function(e) {
                e.Open = "open", e.OpenSolution = "open_solution"
            }(s || (s = {}));
            const a = "permissions_denied";
            async function r(e, t) {
                var n;
                const i = await (0, o.getTracker)();
                if (i) {
                    const s = null === (n = window.user.id) || void 0 === n ? void 0 : n.toString();
                    i.trackPermissionDialog(e, t, s || "")
                }
            }

            function c(e, t) {
                var n;
                const i = null === (n = e.match(/\d+\//gm)) || void 0 === n ? void 0 : n[0];
                return e.replace(i || "", i + t)
            }
        },
        621178: (e, t, n) => {
            "use strict";
            n(505881);
            var i = n(777754),
                s = n(508846),
                o = n(527538),
                a = n(779665),
                r = n(345848),
                c = n(226722),
                l = n(685459),
                u = n.n(l),
                d = n(272001);
            const h = (0, d.getLogger)("UserSessions");
            let m, g = 0,
                f = !1,
                _ = !1;
            const p = new(u());

            function v(e) {
                if (f) {
                    ChartApiInstance.connect({
                        tokenGrabSession: e
                    });
                    const t = ChartApiInstance.connectDfd;
                    return f = !1, m && (t.then((function() {
                        (0, r.trackEvent)("Auth", "Different Device Active Recovery"), m.destroy(), m = void 0
                    })), t.catch((function() {
                        f = !0
                    })), f || p.emitEvent("Session recovered")), t
                }
            }
            c.TVXWindowEvents.on("session_captured", (function() {
                v()
            })), a.pushStreamMultiplexer.on("auth", (function(e) {
                if (is_authenticated && user && user.session_hash && "active_session_changed" === e.type && e.timestamp > g) {
                    if (g = e.timestamp, user.session_hash === e.source_session && e.source_session in e.changes && "cycled" === e.changes[e.source_session].a && (user.session_hash = e.changes[e.source_session].h), user.session_hash in e.changes && "logout" === e.changes[user.session_hash].a) return void(e.source_session !== user.session_hash && (t = e.device_info, (0, s.createGoProDialog)({
                        feature: "sessionLogout",
                        customParams: t,
                        actions: [{
                            action: o.PredefinedAction.Close,
                            text: i.t(null, {
                                context: "input"
                            }, n(309633))
                        }]
                    })));
                    if (!e.active_sessions) return;
                    let a = !1;
                    for (let t = e.active_sessions.length - 1; t >= 0; t--) user.session_hash === e.active_sessions[t] && (a = !0);
                    a ? m && v() : function(e) {
                        if (f) return;
                        let t = !1;
                        if (ChartApiInstance && (ChartApiInstance.disconnect(), t = !0), t) {
                            (0, r.trackEvent)("Auth", "Different Device Active Dialog"), f = !0, h.logNormal("Different device connection detected: " + JSON.stringify(e));
                            const t = function() {
                                _ = !1;
                                const e = v(!0);
                                e && e.then((function() {
                                    c.TVXWindowEvents.emit("session_captured")
                                }))
                            };
                            if (!_) {
                                const a = {
                                    feature: "sessionLock",
                                    customParams: e,
                                    actionAfterClose: t,
                                    actions: [{
                                        action: o.PredefinedAction.Close,
                                        text: i.t(null, void 0, n(436598)),
                                        onClick: t
                                    }]
                                };
                                (0, s.createGoProDialog)(a).then((() => {
                                    _ = !0
                                }))
                            }
                            p.emitEvent("Session broken down.")
                        }
                    }(e.device_info)
                }
                var t
            }));
            n(583912), n(849289);
            var w = n(77034),
                y = n.n(w),
                b = n(799786);
            y().safari && (0, b.createGroup)().add({
                desc: "Prevent exit native fullscreen",
                hotkey: 27,
                handler: () => {}
            });
            n(928841), n(326001);
            var T = n(386981),
                P = n.n(T),
                S = n(733094),
                L = n(638456),
                I = n(19281);

            function M(e) {
                const t = e.target,
                    n = t.closest && t.closest(":link");
                n && n.target && n.relList && n.relList.add("noopener")
            }
            var C = n(43464),
                D = n(261030);

            function k() {
                var e;
                const t = null === (e = (0, L.desktopAppVersion)()) || void 0 === e ? void 0 : e.match(/1.0.(\d+)/);
                ((0, L.isWindows)() || (0, L.isMac)()) && t && Number(t[1]) <= 15 && async function() {
                    const {
                        showUpdateAppDialog: e,
                        updateDesktopAppDialogKey: t,
                        dialogHideValue: i
                    } = await Promise.all([n.e(90599), n.e(88230), n.e(18619), n.e(81910), n.e(86256), n.e(91901), n.e(13249), n.e(96246), n.e(46951), n.e(65216), n.e(75514), n.e(745), n.e(52328), n.e(60246), n.e(7333)]).then(n.bind(n, 158734));
                    window.sessionStorage.getItem(t) !== i && e()
                }()
            }
            var A = n(890740);
            async function E() {
                const e = await Promise.all([n.e(18619), n.e(21009), n.e(91217), n.e(37742), n.e(75514), n.e(13830), n.e(59805)]).then(n.bind(n, 770025));
                await e.showSurveyToast() && async function() {
                    (await Promise.all([n.e(88230), n.e(81910), n.e(86256), n.e(91901), n.e(96246), n.e(18513), n.e(75514), n.e(745), n.e(36320)]).then(n.bind(n, 564655))).renderSurveyDialog()
                }(), (0, A.fetch)("/api/v1/users/accept-survey/", {
                    method: "POST",
                    credentials: "include"
                })
            }
            var x = n(320058),
                O = n(690936),
                V = n(632446),
                $ = n(833813),
                N = n(881383),
                R = n(606911),
                F = (n(659863), n(185675)),
                Q = n(798062),
                j = n(691805),
                G = n(588948);

            function B() {
                if (!window.GOOGLE_CLIENT_ID || (0, G.getFreshInitData)().googleSigninPopupDisabled) return;
                (0, j.appendScript)("https://accounts.google.com/gsi/client"), window.handleGoogleCredentialResponse = e => {
                    const t = (0, Q.getUrlParams)();
                    (0, r.trackEvent)("Login", "one tap sign in"), window.open(`/accounts/complete/android-jwt/?token=${e.credential}&feature_source=google_one_tap&utm_source=${t.utmsource}&utm_medium=${t.utmmedium}`)
                };
                const e = document.createElement("div");
                e.setAttribute("id", "g_id_onload"), e.setAttribute("data-client_id", window.GOOGLE_CLIENT_ID), e.setAttribute("data-callback", "handleGoogleCredentialResponse"), document.body.appendChild(e)
            }
            var q = n(125226);
            var H = n(664224),
                Y = n(18493),
                W = n(115127),
                J = n(241300),
                U = n(12481),
                X = n(49437),
                z = n(175203),
                K = n(777491);
            const Z = "activeBrowserTabsCounter";
            let ee = null;
            class te {
                constructor() {
                    this._isMasterTab = !1, this._lastState = {
                        tabs: [],
                        ts: 0
                    }, this._sendReport = (0, U.default)(((e, t) => {
                        this._isMasterTab && (z.telemetry.sendReport("site", "browsers_tabs_ratio_frame", {
                            value: e
                        }), z.telemetry.sendReport("site", "browsers_tabs_count_frame", {
                            value: t
                        }))
                    }), 2e4), this._guid = (0, K.guid)(), this._initTimer()
                }
                unregisterTab() {
                    clearInterval(this._timerId);
                    const e = this._getState();
                    e.tabs = e.tabs.filter((e => e[0] !== this._guid)), e.ts = Date.now(), this._setState(e)
                }
                static getInstance() {
                    return null === ee && (ee = new te), ee
                }
                _checkIsMaster(e) {
                    const t = 0 === e.tabs.length,
                        n = Date.now() - e.ts > 2e4;
                    return t || n || e.tabs[0][0] === this._guid
                }
                _countVisibleTabsRatio(e) {
                    const t = e.reduce(((e, t) => e + ("visible" === t[1] ? 1 : 0)), 0);
                    return Math.round(t / e.length * 100)
                }
                _getState() {
                    const e = X.TVLocalStorage.getItem(Z),
                        t = null !== e ? JSON.parse(e) : this._lastState;
                    return this._lastState = t, t
                }
                _setState(e) {
                    X.TVLocalStorage.setItem(Z, JSON.stringify(e))
                }
                _pulse() {
                    const e = this._lastState.tabs,
                        t = document.visibilityState,
                        n = this._getState(),
                        i = n.tabs.find((e => e[0] === this._guid)),
                        s = this._isMasterTab;
                    this._isMasterTab = this._checkIsMaster(n);
                    const o = !s && this._isMasterTab;
                    if (void 0 !== i && i[1] !== t && (i[1] = t), o) n.tabs = [
                        [this._guid, t]
                    ], n.ts = Date.now(), this._isMasterTab = !0, this._sendReport(100, 1);
                    else if (this._isMasterTab) {
                        n.ts = Date.now();
                        const t = this._countVisibleTabsRatio(e),
                            i = this._countVisibleTabsRatio(n.tabs);
                        t !== i && this._sendReport(i, n.tabs.length)
                    } else void 0 === i && n.tabs.push([this._guid, t]);
                    this._setState(n)
                }
                _initTimer() {
                    this._pulse(), this._timerId = setInterval((() => this._pulse()), 1e4)
                }
            }
            var ne = n(46277),
                ie = n(891343),
                se = n(823127);
            const oe = (0, d.getLogger)("Chart.Base");
            var ae;
            if (window.initData.lfs && (ae = P().prototype.disconnect, P().prototype.disconnect = function(e) {
                    e || ae.call(this)
                }), loginStateChange.subscribe(window, (function(e) {
                    if (user && is_authenticated) {
                        TVLocalStorage.getItem("paid_account_username") && TVLocalStorage.removeItem("paid_account_username");
                        const e = TVLocalStorage.getItem("last_username"),
                            t = TVLocalStorage.getItem("previous_username");
                        e !== user.username && (TVLocalStorage.setItem("last_username", user.username), e && e !== t && (TVLocalStorage.setItem("previous_username", e), (0, W.paidAccountCheck)({
                            isNeedCancelButton: !0
                        }).catch((() => {}))))
                    } else {
                        const e = TVLocalStorage.getItem("paid_account_username");
                        e && Promise.resolve().then(n.bind(n, 963644)).then((t => t.showSignModal({
                            source: "Paid Account Popup",
                            username: e
                        })))
                    }
                    e || (0, I.reconnectChartApi)()
                })), se((function() {
                    "#signin" === window.location.hash ? Promise.resolve().then(n.bind(n, 963644)).then((e => e.showSignModal({
                        source: "Redirect"
                    }))) : "#signup" === window.location.hash && Promise.resolve().then(n.bind(n, 963644)).then((e => e.showSignModal({
                        mode: "signup",
                        source: "Redirect"
                    }))), se(".tv-control-material-input").tvControlMaterial(), se(".js-time-upd").timeUpdate(), (0, L.checkPageType)("mobile") ? D.cookieSettingsReady.resolve() : (0, C.initCookiesNotification)().then((() => {
                        const e = (0, J.placementFromPageLocation)();
                        e && (0, F.initTrialToast)("chart").then((async () => {
                            if ((0, V.enabled)($.ProductFeatures.NO_SPONSORED_ADS)) return;
                            let t = !0;
                            "ru" === window.locale && (0,
                                q.isFeatureEnabled)("careers_toast") && (t = !await async function() {
                                return (await Promise.all([n.e(18619), n.e(21009), n.e(91217), n.e(37742), n.e(3663), n.e(75514), n.e(13830), n.e(13087)]).then(n.bind(n, 550847))).initNotification()
                            }()), t && await Promise.all([Promise.all([n.e(21009), n.e(34023), n.e(80802), n.e(34136)]).then(n.bind(n, 580802)), Promise.all([n.e(91217), n.e(37742), n.e(75514), n.e(13830), n.e(94291)]).then(n.bind(n, 13830))]).then((([t, n]) => {
                                t.platformPlacement.setPlacement(e.placement).setToasts(n.globalToasts).addTargeting("placement", e.targeting).display()
                            }))
                        }))
                    })), (0, q.isFeatureEnabled)("desktop_version_notification_enabled") && (0, L.isDesktopApp)() && k(), window.initData.show_idc_dialog ? n.e(9726).then(n.bind(n, 653564)).then((e => {
                        e.showIdcAgreementDialog()
                    })) : (window.initData.banned_payments && Promise.all([n.e(36037), n.e(43082), n.e(36956), n.e(4100), n.e(50251), n.e(85783), n.e(25977), n.e(88647), n.e(39694), n.e(29201)]).then(n.bind(n, 363170)).then((({
                        warningDialog: e
                    }) => {
                        e({
                            title: i.t(null, void 0, n(300963)),
                            content: "<p>" + i.t(null, void 0, n(440957)) + "</p>",
                            closeButtonText: i.t(null, {
                                context: "input"
                            }, n(309633))
                        }).open()
                    })), window.initData.show_user_survey && E())
                })), TradingView.onChartPage || (oe.logNormal("low quality mode is enabled"), ChartApiInstance.enableLowQualityMode()), window.pro = new S.Pro(window.shopConf), loginStateChange.fire(!0), Promise.all([n.e(52328), n.e(38578)]).then(n.t.bind(n, 252328, 23)).then((({
                    default: e
                }) => {
                    e.init()
                })), !window.is_authenticated) {
                const e = e => {
                        "1" !== TVLocalStorage.getItem(e) && (Promise.all([n.e(18619), n.e(86256), n.e(78707), n.e(36037), n.e(37908), n.e(36956), n.e(13249), n.e(4100), n.e(50251), n.e(85783), n.e(24091), n.e(48354), n.e(75514), n.e(25977), n.e(39694), n.e(36057)]).then(n.bind(n, 373241)).then((e => e.createReferralWelcomeDialog())).then((function(e) {
                            e.open()
                        })), TVLocalStorage.setItem(e, "1"))
                    },
                    t = (0, Q.getUrlParams)(),
                    i = t.share_your_love,
                    s = t.aff_id;
                if (s || i) {
                    const n = window.location.hostname.split("."),
                        o = n.slice(1, n.length).join(".");
                    if (s && s.length <= 32) {
                        (0, r.trackEvent)("Affiliate Program", "Referral Visit (Direct)", s);
                        const n = {
                            aff_id: s
                        };
                        [{
                            key: "source",
                            maxLength: 64
                        }, {
                            key: "aff_sub",
                            maxLength: 64
                        }, {
                            key: "url_id",
                            maxLength: 256
                        }, {
                            key: "file_id",
                            maxLength: 256
                        }, {
                            key: "aff_sub2",
                            maxLength: 64
                        }, {
                            key: "aff_sub3",
                            maxLength: 64
                        }, {
                            key: "aff_unique1",
                            maxLength: 64
                        }, {
                            key: "aff_click_id",
                            maxLength: 64
                        }, {
                            key: "file_id",
                            maxLength: 256
                        }].forEach((e => {
                            const i = e.key;
                            t[i] && t[i].length <= e.maxLength && (n[i] = t[i])
                        }));
                        const i = `${window.location.origin}${window.location.pathname}`;
                        n.target_link = i, Y.PartnerAPI.addClick({
                            target_link: i,
                            aff_id: n.aff_id,
                            aff_sub: n.aff_sub,
                            aff_source: n.source,
                            aff_unique1: n.aff_unique1,
                            aff_sub2: n.aff_sub2,
                            aff_sub3: n.aff_sub3,
                            aff_click_id: n.aff_click_id,
                            file_id: n.file_id,
                            url_id: n.url_id
                        }).catch((e => oe.logNormal(`Service Partner Program - request error - ${e}`))), ie.set("direct_affiliate_params", JSON.stringify(n), 90, "/", o ? `.${o}` : ""), e("seen_by_direct_link")
                    } else i && i.length <= 150 && (ie.set("_referralProgramId", i, 0, "/", o ? `.${o}` : ""), e("seen_by_referral_program_link"))
                }
            }
            if (document.addEventListener("click", M, !0),
                n.e(14436).then(n.bind(n, 231326)).then((e => {
                    (new e.GdprNotification).showIfNotAccepted()
                })), n.e(72226).then(n.bind(n, 727655)).then((e => {
                    e.openSupportDialogOnLoad()
                })), n.e(14309).then(n.bind(n, 688457)).then((e => {
                    e.openPaymentOrderDialogOnLoad()
                })), n.e(99140).then(n.bind(n, 130179)).then((e => {
                    e.openCoinsDialogOnLoad()
                })), (async () => {
                    await Promise.all([n.e(20146), n.e(18619), n.e(78707), n.e(96972), n.e(75398), n.e(71140), n.e(36037), n.e(43082), n.e(36720), n.e(75667), n.e(37908), n.e(97676), n.e(26024), n.e(9725), n.e(13871), n.e(12768), n.e(27488), n.e(99039), n.e(38184), n.e(69893), n.e(56246), n.e(22682), n.e(1632), n.e(75514), n.e(20651), n.e(32036), n.e(98065), n.e(5952), n.e(20321), n.e(89568)]).then(n.t.bind(n, 201880, 23))
                })(), !window.is_authenticated && (0, q.isFeatureEnabled)("google-one-tap-signin") && (L.CheckMobile.iOS() ? setTimeout((() => {
                    B()
                }), 6e4) : B()), window.initData.offlineAlertEventsOnInit && !window.TradingView.onChartPage && Promise.all([n.e(75514), n.e(56612), n.e(91046)]).then(n.bind(n, 938908)).then((({
                    tryInitAlertsNotifications: e
                }) => e())), async function() {
                    (await Promise.all([n.e(18619), n.e(21009), n.e(91217), n.e(37742), n.e(46079), n.e(75514), n.e(13830), n.e(97276)]).then(n.bind(n, 193e3))).initNotification()
                }(), document.addEventListener("DOMContentLoaded", (function() {
                    document.addEventListener("click", (e => {
                        if (e.target.matches(".js-open-support-dialog") && ((0, H.showSupportDialog)(), e.preventDefault()), e.target.search && !1 === window.location.pathname.startsWith("/support")) {
                            const t = (0, Q.getQueryParams)(e.target.search.substring(1));
                            if ("solution" in t) {
                                const n = t.solution.match(/[a-zA-Z\_]+/g);
                                (0, H.showSupportDialog)({
                                    solutionId: parseInt(t.solution, 10)
                                }), n && !e.defaultPrevented && (0, ne.trackSocialNetworkEvent)(n[0], ne.DialogAction.OpenSolution), e.preventDefault()
                            }
                        }
                    }))
                })), (0, q.isFeatureEnabled)("count-browser-tabs")) {
                const e = te.getInstance();
                window.addEventListener("unload", (() => e.unregisterTab()))
            }
            try {
                var re = x.MiniPlayerSessionStorage.getItem();
                null !== re && (window.location.pathname.startsWith("/streams") && 0 !== window.location.pathname.split("/streams/")[1].length ? x.MiniPlayerSessionStorage.removeItem() : (0, O.openStreamMiniPlayer)({
                    stream: JSON.parse(re).data
                }))
            } catch (e) {}(0, N.initLiveRegion)("aria-live-regions-wrapper"), window.user.is_partner && (0, R.initIrsToast)("tv-coins-partner-dialog")
        },
        241300: (e, t, n) => {
            "use strict";
            n.d(t, {
                placementFromPageLocation: () => s
            });
            var i = n(36921);

            function s() {
                if (window.TradingView.onChartPage) return {
                    placement: i.Placement.Platform,
                    targeting: i.PlacementTargeting.Platform
                };
                const e = window.location.pathname;
                return e.startsWith("/heatmap") ? {
                    placement: i.Placement.HeatMap,
                    targeting: i.PlacementTargeting.HeatMap
                } : /^\/(crypto-|forex-)?screener\//.test(e) ? {
                    placement: i.Placement.Screener,
                    targeting: i.PlacementTargeting.Screener
                } : void 0
            }
        },
        142544: (e, t, n) => {
            "use strict";
            var i = n(823127);
            const s = n(272001).getLogger("CommonUI.CreateTVBlockPlugin");
            e.exports.createTvBlockWithInstance = function(e, t) {
                if (e && t) return e = e.toString(),
                    function(o, a, r) {
                        var c, l, u;
                        return "get" === o ? c = a : (l = a, "object" == typeof o && void 0 === a ? (l = o,
                            o = "init") : "string" != typeof o && (o = "init")), "getInstance" === o ? i(this).eq(0).data(e) : "destroy" === o ? (u = i(this).eq(0).data(e)) ? void("function" == typeof u.destroy ? (n(u, "destroy", l), i(this).eq(0).removeData(e)) : s.logError("[Block Plugin] " + e + " does not support destroy command")) : void console.warn("[Block Plugin] Trying to execute destroy method of " + e + " but it has not been inited") : "get" === o ? (u = i(this).eq(0).data(e)) ? "function" == typeof u[c] ? n(u, c, r) : u[c] : void console.warn("[Block Plugin] Trying to get prop or execute method of " + e + " but it has not been inited") : i(this).each((function() {
                            var a = i(this),
                                r = a.data(e);
                            void 0 === r && (r = void 0 === l ? t(a) : t(a, l), a.data(e, r)), "init" !== o && ("function" == typeof r[o] ? n(r, o, l) : s.logError("[Block Plugin] " + e + " does not support command " + o))
                        }))
                    };

                function n(e, t, n) {
                    return void 0 === n ? e[t]() : e[t](n)
                }
            }
        },
        928841: (e, t, n) => {
            "use strict";
            n.d(t, {
                controlMaterial: () => a
            });
            n(91746);
            var i = n(142544),
                s = n(823127);
            class o {
                constructor(e, t = {}) {
                    var n = e.prop("tagName").toLowerCase(),
                        i = e.prop("readonly"),
                        o = e.prop("disabled"),
                        a = `tv-control-material-${n}`,
                        r = s(document.createElement("span")).addClass(`${a}__label`).text(e.attr("placeholder") || ""),
                        c = s(document.createElement("div")).addClass(`${a}__wrap`),
                        l = e.get(0);
                    if (l && l.classList) {
                        for (var u = [], d = 0; d < l.classList.length; d++) {
                            var h = l.classList[d];
                            if (h.includes(a)) {
                                const e = h.replace(a, "");
                                e && u.push(e)
                            }
                        }
                        for (d = 0; d < u.length; d++) r.addClass(`${a}__label${u[d]}`), c.addClass(`${a}__wrap${u[d]}`)
                    }
                    e.attr("placeholder", "").removeClass(`tv-control-${n}`).addClass(`tv-control-material-${n}__control `).wrap(c).after(r), this.$el = e.parent(), e.on("focus", (() => {
                        i || o || r.addClass("i-up")
                    })), e.on("blur", (() => {
                        "" === e.val() && r.removeClass("i-up")
                    })), e.on("change", (() => {
                        "" !== e.val() && r.addClass("i-up")
                    })), this.$el.on("click", (() => {
                        e.focus()
                    })), "" !== e.attr("value") && void 0 !== e.attr("value") && r.addClass("i-up")
                }
            }

            function a(e, t) {
                return new o(s(e), t)
            }
            s.fn.tvControlMaterial = (0, i.createTvBlockWithInstance)("tv-control-material", (function(e, t) {
                return new o(e, t)
            }))
        },
        488427: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                agoDateFormatter: () => m,
                destroy: () => f,
                getFormattedDataByDate: () => d,
                jQueryCompatibleAgoDateFormatter: () => h,
                jQueryCompatibleDestroy: () => g,
                shortFormat: () => _
            });
            var i = n(777754),
                s = n(298297);
            const o = {
                    L: "MMM D",
                    LL: "YYYY MMM D",
                    LLL: "HH:mm - YYYY MMM D"
                },
                a = {
                    ja: o,
                    ko: o
                };

            function r(e) {
                return 6e4 - e % 6e4
            }

            function c(e) {
                const t = 36e5;
                return t - e % t
            }

            function l(e) {
                const t = 864e5;
                return t - e % t
            }

            function u(e) {
                const t = e.getAttribute("data-ago-date-timer");
                t && clearTimeout(+t)
            }

            function d({
                date: e,
                forceAgoFormat: t,
                customDateFormat: n,
                customDateFormatLocale: i
            }) {
                s.relativeTimeThreshold("h", 24), "number" == typeof e && (e = new Date(e));
                const o = s(new Date).diff(e),
                    u = function(e) {
                        let t = 200;
                        if ((e = Math.floor(e / 6e4)) < 60) t += r(e);
                        else if (e < 1440) t += c(e);
                        else {
                            if (!(e < 43200)) return 0;
                            t += l(e)
                        }
                        return t
                    }(o),
                    d = a[window.language];
                let h = "",
                    m = {
                        L: "L",
                        LL: "LL",
                        LLL: "LLL"
                    };
                d && (m = d), i && (m.LLL = i), h = t || Math.round(o / 36e5) < 24 ? s(e).fromNow() : n ? s(e).format(n) : e.getFullYear() === (new Date).getFullYear() ? s(e).format(m.L) : s(e).format(m.LL);
                return {
                    diff: o,
                    formattedDate: s(e).format(m.LLL),
                    text: h,
                    updateTimeout: u
                }
            }

            function h(e, t, n, i, s) {
                const o = Array.from(e);
                for (const e of o) m(e, t, n, i, s)
            }

            function m(e, t, n, i, s) {
                const {
                    diff: o,
                    formattedDate: a,
                    text: r,
                    updateTimeout: c
                } = d({
                    date: t,
                    forceAgoFormat: n,
                    customDateFormat: s
                }), l = e.parentElement;
                if (null !== l && l.classList.toggle("just-now", o < 45e3), e.setAttribute("title", a), e.textContent = r, c) {
                    u(e);
                    const n = setTimeout((() => {
                        m(e, t)
                    }), c);
                    e.setAttribute("data-ago-date-timer", n.toString())
                } else e.removeAttribute("data-ago-date-timer");
                if (i) {
                    const t = e.closest(".js-visible-after-ago-formatter-inited");
                    null !== t && t.classList.remove("i-invisible", "js-visible-after-ago-formatter-inited")
                }
            }

            function g(e) {
                const t = Array.from(e);
                for (const e of t) f(e)
            }

            function f(e) {
                u(e);
                const t = Array.from(e.querySelectorAll("[data-ago-date-timer]"));
                for (const e of t) u(e)
            }

            function _(e) {
                let t = Math.floor(e / 6e4),
                    s = "",
                    o = 0;
                return t < 60 ? (s = (t < 1 ? 0 : t) + i.t(null, {
                    context: "date_diff_short"
                }, n(242893)), o = r(e)) : t < 1440 ? (t = Math.floor(t / 60), s = t + i.t(null, {
                    context: "date_diff_short"
                }, n(197929)), o = c(e)) : t < 43200 ? (t = Math.floor(t / 1440), s = t + i.t(null, {
                    context: "date_diff_short"
                }, n(291059)), o = l(e)) : t < 15768e3 ? (t = Math.floor(t / 43200), s = t + i.t(null, {
                    context: "date_diff_short"
                }, n(198738))) : (t = Math.floor(t / 15768e3), s = t + i.t(null, {
                    context: "date_diff_short"
                }, n(630424))), o && (o += 200), {
                    text: s,
                    timeout: o
                }
            }
        },
        185675: (e, t, n) => {
            "use strict";
            n.d(t, {
                initTrialToast: () => c,
                trialToast: () => r
            });
            var i = n(985919);
            var s = n(638456),
                o = n(314802);
            class a {
                showAfterTimeout(e, t) {
                    !window.is_authenticated || i.OFFERS.trial in window.user.available_offers ? this._timeoutId = setTimeout((async () => {
                        if (window.is_authenticated && !(i.OFFERS.trial in window.user.available_offers)) return void t();
                        const {
                            globalToasts: s
                        } = await Promise.all([n.e(91217), n.e(37742), n.e(75514), n.e(13830), n.e(94291)]).then(n.bind(n, 13830));
                        !async function(e, t, i) {
                            (await Promise.all([n.e(18619), n.e(21009), n.e(79161), n.e(13886), n.e(64278)]).then(n.bind(n, 413886))).showTrialNotification(e, t, i)
                        }(s, e, t)
                    }), 3e4) : t()
                }
                clear() {
                    clearTimeout(this._timeoutId)
                }
                static getInstance() {
                    return a._instance || (a._instance = new a), a._instance
                }
            }

            function r() {
                return a.getInstance()
            }

            function c(e) {
                return (0, o.isOnMobileAppPage)("any") || s.CheckMobile.Android() || window.TVD || !window.TradingView.onChartPage ? Promise.resolve() : new Promise((t => {
                    r().showAfterTimeout(e, (() => (t(), Promise.resolve())))
                }))
            }
        },
        606911: (e, t, n) => {
            "use strict";
            n.d(t, {
                TITLE_IRS: () => s,
                initIrsToast: () => a
            });
            var i = n(62802);
            const s = "irs_form_toast";
            class o {
                async show(e, t) {
                    const o = i.getValue(s);
                    if (!1 === (o && Number(o) < Date.now() - 864e5)) return;
                    const {
                        globalToasts: a
                    } = await Promise.all([n.e(91217), n.e(37742), n.e(75514), n.e(13830), n.e(94291)]).then(n.bind(n, 13830));
                    !async function(e, t) {
                        (await Promise.all([n.e(18619), n.e(21009), n.e(820), n.e(53230)]).then(n.bind(n, 155525))).showIrsFormNotification(e, t)
                    }(a, e)
                }
                clear() {
                    clearTimeout(this._timeoutId)
                }
                static getInstance() {
                    return o._instance || (o._instance = new o), o._instance
                }
            }

            function a(e) {
                return o.getInstance().show(e, Promise.resolve)
            }
        },
        18493: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                PayoutHistoryType: () => r,
                PartnerAPI: () => c,
                getPartnerDetails: () => h
            });
            const i = window.initData.tvPartnersHost,
                s = `${i}/api/v1`;
            var o, a, r, c;

            function l(e) {
                return `${s}${e}/`
            }

            function u(e, t, n, i) {
                let s = l(e);
                return t && !n && (s = l(`${e}/${t}`)), t && n && (s = l(`${e}/${t}/${n}`)), i && (s += `?sort=${i}`), s
            }
            async function d(e, t, n) {
                const i = {
                    method: e,
                    credentials: "include"
                };
                return i.headers = new Headers, i.headers.set("Content-Type", "application/json"), i.headers.set("Accept", "application/json"), void 0 !== n && (i.body = JSON.stringify(n)), fetch(t, i).then((e => e.json())).then((e => {
                    if (e.error) throw new Error(e.error);
                    return e
                }))
            }
            async function h() {
                const e = {
                    method: "GET"
                };
                return e.headers = new Headers, e.headers.set("Content-Type", "application/json"), fetch("/partners/details/").then((e => e.json()))
            }! function(e) {
                e.Paypal = "paypal"
            }(o || (o = {})),
            function(e) {
                e.USD = "usd"
            }(a || (a = {})),
            function(e) {
                e.Pending = "pending", e.Completed = "completed", e.DjangoError = "django_eror", e.PayoutError = "payout_error"
            }(r || (r = {})),
            function(e) {
                e.isPartner = async function() {
                    return d("GET", l("/is-partner"))
                }, e.createPartner = async function(e) {
                    return d("POST", l("/partner"), e)
                }, e.getStats = async function(e, t, n) {
                    return d("GET", u("/stats", e, t, n))
                }, e.getReport = async function(e, t) {
                    return d("GET", u("/report", e, t))
                }, e.getReportCSV = async function(e, t) {
                    return d("GET", u("/report-csv", e, t))
                }, e.getHistory = async function() {
                    return d("GET", l("/history"))
                }, e.getConversionReport = async function(e, t) {
                    return d("GET", u("/conversion-report", e, t))
                }, e.getSettings = async function() {
                    return d("GET", l("/settings"))
                }, e.postSettings = async function(e) {
                    return d("POST", l("/settings"), e)
                }, e.addClick = async function(e) {
                    return d("POST", `${i}/analytics/`, e)
                }, e.postIRSForm = async function(e) {
                    const t = l("/irs-form"),
                        n = new FormData;
                    n.append("form", e);
                    const i = new Headers({
                        accept: "application/json"
                    });
                    return fetch(t, {
                        method: "POST",
                        credentials: "include",
                        headers: i,
                        body: n
                    }).then((e => e.json()))
                }
            }(c || (c = {}))
        }
    }
]);
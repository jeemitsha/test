(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [25142, 1650], {
        392612: e => {
            e.exports = {
                "trading-panel-content": "trading-panel-content-Rac5AHgL",
                "trading-panel-spinner": "trading-panel-spinner-Rac5AHgL",
                "trading-panel-handle": "trading-panel-handle-Rac5AHgL"
            }
        },
        94725: e => {
            e.exports = {
                separator: "separator-LQ6E1iWj"
            }
        },
        844662: e => {
            e.exports = {
                container: "container-f2q4yHCG",
                content: "content-f2q4yHCG",
                arrowHolder: "arrowHolder-f2q4yHCG",
                "arrowHolder--below": "arrowHolder--below-f2q4yHCG",
                "arrowHolder--above": "arrowHolder--above-f2q4yHCG",
                "arrowHolder--before": "arrowHolder--before-f2q4yHCG",
                "arrowHolder--after": "arrowHolder--after-f2q4yHCG",
                "arrowHolder--above-fix": "arrowHolder--above-fix-f2q4yHCG",
                "arrowHolder--before-rtl-fix": "arrowHolder--before-rtl-fix-f2q4yHCG",
                "arrowHolder--after-ltr-fix": "arrowHolder--after-ltr-fix-f2q4yHCG",
                label: "label-f2q4yHCG",
                closeButton: "closeButton-f2q4yHCG"
            }
        },
        254601: (e, t, i) => {
            "use strict";

            function s(e, t) {
                d().then((i => i.signInAndRunReviewWorkflow(e, t)))
            }

            function r() {
                return d().then((e => e.getStatusOrShowError()))
            }

            function o() {
                return d().then((e => e.getReviewOrShowError()))
            }

            function n(e, t, i) {
                d().then((s => s.openCreateDialog(e, t, i)))
            }

            function a(e) {
                d().then((t => t.openEditDialog(e)))
            }

            function l(e) {
                d().then((t => t.openUpdateDialog(e)))
            }

            function d() {
                return i.e(89125).then(i.bind(i, 209583))
            }
            i.d(t, {
                signInAndRunReviewWorkflow: () => s,
                getBrokerReviewStatusOrShowError: () => r,
                getBrokerReviewOrShowError: () => o,
                openCreateBrokerReviewDialog: () => n,
                openEditBrokerReviewDialog: () => a,
                openUpdateBrokerReviewDialog: () => l
            })
        },
        711803: (e, t, i) => {
            "use strict";
            var s, r;

            function o(e) {
                return !e.hasOwnProperty("errors")
            }

            function n(e) {
                return e.hasOwnProperty("errors")
            }

            function a(e) {
                const t = [];
                for (const i of e) void 0 !== i.detail && t.push(i.detail);
                return t
            }
            i.d(t, {
                    BrokerReviewBaseErrorType: () => s,
                    BrokerReviewStatus: () => r,
                    isSuccessResponse: () => o,
                    isErrorResponse: () => n,
                    getErrorListFromResponse: () => a
                }),
                function(e) {
                    e[e.Unknown = 0] = "Unknown", e[e.Forbidden = 403] = "Forbidden", e[e.NotFound = 404] = "NotFound", e[e.Conflict = 409] = "Conflict", e[e.UnprocessableEntity = 422] = "UnprocessableEntity", e[e.RateLimit = 429] = "RateLimit"
                }(s || (s = {})),
                function(e) {
                    e.Forbidden = "forbidden", e.NonExists = "non-exists", e.Exists = "exists", e.Hidden = "hidden"
                }(r || (r = {}))
        },
        653501: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                BrokerReviewPageData: () => r
            });
            var s, r, o = i(988411),
                n = i.n(o),
                a = i(890740),
                l = i(711803),
                d = i(798062);
            async function c(e, t) {
                try {
                    const i = await (0, a.fetch)(`/api/v1/brokers/${e}/reviews/${function(e){const t=(0,d.createUrlParams)({rating:(null==e?void 0:e.rating)||null,ordering:(null==e?void 0:e.ordering)||null,page:(null==e?void 0:e.page)||null});return t?` ? $ {
                            t
                        }
                        `:""}(t)}`, {
                            method: "GET"
                        });
                    if (!i.ok) {
                        return {
                            errors: [{
                                code: l.BrokerReviewBaseErrorType.Unknown
                            }]
                        }
                    }
                    const {
                        results: s
                    } = await i.json();
                    return {
                        data: s
                    }
                } catch (e) {
                    return {
                        errors: [{
                            code: l.BrokerReviewBaseErrorType.Unknown,
                            detail: e
                        }]
                    }
                }
            }! function(e) {
                e.CreatedAsc = "created", e.CreatedDesc = "-created", e.RatingAsc = "rating", e.RatingDesc = "-rating"
            }(s || (s = {})),
            function(e) {
                let t = null;
                const i = new(n())([]);
                let r = null,
                    o = null;
                e.setBrokerData = function(e) {
                    t = e
                }, e.getBrokerData = function() {
                    return t
                }, e.setReviews = function(e) {
                    i.setValue(e)
                }, e.setReviewsFromBackend = async function() {
                    if (null === t) return;
                    const e = await c(t.brokerId, {
                        rating: r || void 0,
                        ordering: s.CreatedDesc,
                        page: o || void 0
                    });
                    (0, l.isSuccessResponse)(e) && i.setValue(e.data)
                }, e.reviewsSubscription = function() {
                    return i
                }, e.setRatingFilter = function(e) {
                    r = e
                }, e.setPageNumber = function(e) {
                    o = e
                }
            }(r || (r = {}))
        },
        61005: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                DEFAULT_SOUNDS: () => B,
                availableSounds: () => P,
                alertSounds: () => C,
                play: () => T,
                stop: () => E,
                onStopped: () => L,
                isPlaying: () => V,
                enableAlertSoundsForMobile: () => I,
                enableForMobile: () => N
            });
            var s = i(777754),
                r = i(314802),
                o = i(272001),
                n = i(988411),
                a = i.n(n),
                l = i(585161),
                d = i(673503),
                c = i(795192),
                h = i(297868),
                u = i(926109),
                _ = i(797300),
                p = i(549907),
                g = i(840928),
                m = i(878947),
                b = i(77433),
                y = i(621031),
                v = i(313763),
                f = i(421422),
                w = i(522997);
            const k = (0, o.getLogger)("Lib.Sound", {
                    color: "#dea433"
                }),
                B = {
                    sound: "notification/notification",
                    alert: "alert/fired"
                },
                P = [{
                    title: s.t(null, void 0, i(792586)),
                    path: "alert/alarm_clock",
                    soundForAlerts: !0,
                    filePath: l
                }];
            P.unshift({
                path: B.sound,
                title: s.t(null, void 0, i(204329)),
                common: !0,
                filePath: v
            }, {
                title: s.t(null, void 0, i(274471)),
                path: "chat/message",
                filePath: y,
                common: !0
            }, {
                title: s.t(null, void 0, i(307769)),
                path: "chat/popup",
                filePath: f,
                common: !0
            }, {
                title: s.t(null, void 0, i(514561)),
                path: "chat/call",
                filePath: u
            }, {
                title: s.t(null, void 0, i(74210)),
                path: "chat/calling",
                filePath: h
            }, {
                title: s.t(null, void 0, i(719791)),
                path: "chat/hangup",
                filePath: b
            }, {
                title: s.t(null, void 0, i(7246)),
                path: B.alert,
                filePath: g,
                soundForAlerts: !0
            }, {
                title: s.t(null, void 0, i(829406)),
                path: "alert/3_notes_reverb",
                filePath: w,
                soundForAlerts: !0
            }), P.push({
                title: s.t(null, void 0, i(476002)),
                path: "alert/beep_beep",
                filePath: d,
                soundForAlerts: !0
            }, {
                title: s.t(null, void 0, i(115390)),
                path: "alert/calling",
                filePath: c,
                soundForAlerts: !0
            }, {
                title: s.t(null, void 0, i(114579)),
                path: "alert/chirpy",
                filePath: _,
                soundForAlerts: !0
            }, {
                title: s.t(null, void 0, i(926559)),
                path: "alert/fault",
                filePath: p,
                soundForAlerts: !0
            }, {
                title: s.t(null, void 0, i(120021)),
                path: "alert/hand_bell",
                filePath: m,
                soundForAlerts: !0
            });
            const S = {};

            function C() {
                return P.filter((e => !!e.soundForAlerts))
            }

            function T(e = B.sound, t) {
                if ((0, r.isOnMobileAppPage)("any")) return Promise.resolve();
                k.logNormal(`Sound play attempt for "${e}" duration-${t}s;`);
                return A(e).play(t)
            }

            function E(e) {
                if ((0, r.isOnMobileAppPage)("any")) return;
                let t = [];
                e ? t.push(A(e)) : t = Object.values(S), t.forEach((e => {
                    e.stop()
                }))
            }

            function L(e, t) {
                (0, r.isOnMobileAppPage)("any") || A(e).playing.subscribe((e => {
                    e || t()
                }), {
                    once: !0
                })
            }

            function V(e) {
                return !(0, r.isOnMobileAppPage)("any") && A(e).playing.value()
            }

            function I() {
                N(C().map((e => e.path)))
            }

            function N(e) {
                if ((0, r.isOnMobileAppPage)("any")) return;
                if (!e) return;
                if (!/iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(window.navigator.userAgent)) return;
                if (Array.isArray(e) || (e = [e]), 0 === (e = e.filter((e => {
                        const t = A(e);
                        return !(!t || !t.el.load || t._mobilePreloadActive) && (t._mobilePreloadActive = !0, !0)
                    }))).length) return void k.logNormal("enableForMobile no sounds passed");
                const t = () => {
                        const s = [];
                        Array.isArray(e) && e.forEach((e => {
                            const t = A(e);
                            t.el.load();
                            const i = t.play().catch((e => {
                                if ("AbortError" !== e.name) throw k.logError(`enableForMobile for "${t.el.src}" preload error: - ${e.message}`), e
                            }));
                            t.el.pause(), s.push(i)
                        })), Promise.all(s).then((() => {
                            k.logNormal("enableForMobile sounds initialized")
                        })), i.forEach((e => {
                            document.removeEventListener(e, t, !0)
                        }))
                    },
                    i = ["click", "touchend", "keydown"];
                i.forEach((e => {
                    document.addEventListener(e, t, !0)
                }))
            }
            const A = e => {
                if (e in S) return S[e];
                k.logNormal(`requested sound  ${e} not cached, building a new audio element`);
                const t = P.find((t => t.path === e));
                if (void 0 === t) throw new Error(`Cannot find sound "${e}"`);
                const i = new Audio(t.filePath),
                    s = {
                        el: i,
                        playing: new(a())(!1),
                        play: (t = 0) => s.playing.value() ? (k.logNormal("sound already playing"), Promise.reject("already playing")) : (s.playing.setValue(!0), new Promise(((i, r) => {
                            let o = t > 0;
                            const n = () => {
                                const t = function(e) {
                                    try {
                                        k.logNormal(`"${e.el.src}" triggering html5 play method, readyState - ${e.el.readyState}; muted - ${e.el.muted}; volume - ${e.el.volume}; currentTime - ${e.el.currentTime}`);
                                        let t = e.el.play();
                                        return t || (t = Promise.resolve()), t
                                    } catch (t) {
                                        return k.logError(`play method for "${e.el.src}" catch error - ${t.message}`), Promise.reject(t)
                                    }
                                }(s);
                                t.catch((t => {
                                    k.logNormal(`stop counting sound "${e}"; as playing due to an error: ${t.message}`), s.stop(), r(t)
                                }))
                            };
                            s._onEnded = () => {
                                o ? n() : (s.stop(), i())
                            }, s.el.addEventListener("ended", s._onEnded), o && setTimeout((() => {
                                k.logNormal(`"${e}" repeat timeout - ${t}s off`), o = !1
                            }), 1e3 * t), n()
                        }))),
                        stop: () => {
                            s.el.pause(), s.playing.setValue(!1), s._onEnded && s.el.removeEventListener("ended", s._onEnded)
                        }
                    };
                S[e] = s;
                return ["canplaythrough", "error"].forEach((t => {
                    i.addEventListener(t, (() => {
                        k.logNormal(`for sound "${e}", event - ${t} is fired`)
                    }), !1)
                })), k.logNormal(`canPlayType - ${i.canPlayType("audio/mp3")}`), S[e]
            };
            N(P.filter((e => !!e.common)).map((e => e.path)))
        },
        763532: (e, t, i) => {
            "use strict";
            i.d(t, {
                saveTextFile: () => r,
                escapeCSVValue: () => l
            });
            var s = i(638456);

            function r(e, t, i = "text/plain") {
                const r = new Blob([t], {
                    type: i
                });
                if (s.CheckMobile.iOS()) {
                    const t = new FileReader;
                    return t.onload = () => {
                        t.result && o(e, t.result.toString())
                    }, void t.readAsDataURL(r)
                }
                const n = window.URL.createObjectURL(r);
                navigator.msSaveOrOpenBlob ? navigator.msSaveOrOpenBlob(r, e) : window.navigator.msSaveBlob ? window.navigator.msSaveBlob(r, e) : (o(e, n), window.URL.revokeObjectURL(n))
            }

            function o(e, t) {
                const i = document.createElement("a");
                i.style.display = "none", document.body.appendChild(i), i.href = t, i.download = e, i.click(), document.body.removeChild(i)
            }
            const n = /[",\r\n]/,
                a = /"/g;

            function l(e) {
                return n.test(e) ? `"${e.replace(a,'""')}"` : e
            }
        },
        176006: (e, t, i) => {
            "use strict";

            function s(e, t) {
                null === e.firstChild ? e.textContent = t : e.firstChild.nodeValue = t
            }
            i.d(t, {
                updateTextNode: () => s
            })
        },
        221155: (e, t, i) => {
            "use strict";
            i.d(t, {
                Separator: () => n
            });
            var s = i(50959),
                r = i(497754),
                o = i(94725);

            function n(e) {
                return s.createElement("div", {
                    className: r(o.separator, e.className)
                })
            }
        },
        157490: (e, t, i) => {
            "use strict";
            i.d(t, {
                OutsideEvent: () => r
            });
            var s = i(951292);

            function r(e) {
                const {
                    children: t,
                    ...i
                } = e;
                return t((0,
                    s.useOutsideEvent)(i))
            }
        },
        443549: (e, t, i) => {
            "use strict";
            i.d(t, {
                Spinner: () => n
            });
            var s = i(50959),
                r = i(497754),
                o = i(607436);
            i(286625);

            function n(e) {
                const t = r(e.className, "tv-spinner", "tv-spinner--shown", `tv-spinner--size_${o.spinnerSizeMap[e.size||o.DEFAULT_SIZE]}`);
                return s.createElement("div", {
                    className: t,
                    style: e.style,
                    role: "progressbar"
                })
            }
        },
        239401: (e, t, i) => {
            "use strict";
            var s, r, o;
            i.d(t, {
                    CloseTrigger: () => s,
                    ToastAnimationStage: () => r,
                    ToastPriority: () => o
                }),
                function(e) {
                    e[e.Swipe = 0] = "Swipe", e[e.Click = 1] = "Click"
                }(s || (s = {})),
                function(e) {
                    e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e[e.None = 2] = "None"
                }(r || (r = {})),
                function(e) {
                    e[e.Low = 0] = "Low", e[e.Medium = 1] = "Medium", e[e.High = 2] = "High"
                }(o || (o = {}))
        },
        12173: (e, t, i) => {
            "use strict";
            i.d(t, {
                TooltipWizard: () => d,
                TooltipWidget: () => c
            });
            var s = i(50959),
                r = i(497754),
                o = i(83436),
                n = i(707533),
                a = i(333765),
                l = i(844662);
            class d extends s.PureComponent {
                render() {
                    const {
                        children: e,
                        popperChildrenProps: t,
                        onClose: i,
                        reference: o,
                        containerClassName: a,
                        arrowClassName: d
                    } = this.props;
                    return s.createElement(n.Portal, null, s.createElement("div", {
                        ref: o
                    }, s.createElement(c, {
                        reference: t.ref,
                        style: t.style,
                        arrowClassName: r(l.arrowHolder, this._getArrowDirectionClass(), d),
                        arrowReference: t.arrowProps.ref,
                        arrowStyle: t.arrowProps.style,
                        "data-placement": t.placement,
                        onClose: i,
                        containerClassName: a
                    }, e)))
                }
                _getArrowDirectionClass() {
                    const {
                        popperChildrenProps: e
                    } = this.props;
                    switch (e.placement) {
                        case "left":
                        case "left-start":
                            return r(l["arrowHolder--after"], l["arrowHolder--after-ltr-fix"]);
                        case "top":
                            return r(l["arrowHolder--above"], l["arrowHolder--above-fix"]);
                        case "bottom":
                        case "bottom-start":
                        case "bottom-end":
                            return l["arrowHolder--below"];
                        default:
                            return r(l["arrowHolder--before"], l["arrowHolder--before-rtl-fix"])
                    }
                }
            }

            function c(e) {
                const {
                    className: t,
                    containerClassName: i,
                    contentClassName: n,
                    reference: d,
                    style: c,
                    arrow: h = !0,
                    arrowClassName: u,
                    arrowReference: _,
                    onClose: p,
                    arrowStyle: g,
                    children: m,
                    ...b
                } = e;
                return s.createElement("div", { ...b,
                    className: t,
                    ref: d,
                    style: c
                }, h && s.createElement("div", {
                    className: u,
                    ref: _,
                    style: g
                }), s.createElement("div", {
                    className: r(l.container, i)
                }, s.createElement("div", {
                    className: r(l.content, n)
                }, m), p && s.createElement(o.Icon, {
                    className: l.closeButton,
                    icon: a,
                    onClick: p
                })))
            }
        },
        987320: e => {
            e.exports = {
                loader: "loader-HS0L_8Ao",
                "loader-animation": "loader-animation-HS0L_8Ao",
                loaderCircle: "loaderCircle-HS0L_8Ao"
            }
        },
        818940: e => {
            e.exports = {
                loader: "loader-vqx5DqPL",
                loaderItem: "loaderItem-vqx5DqPL",
                "loader-animation": "loader-animation-vqx5DqPL",
                touchMode: "touchMode-vqx5DqPL"
            }
        },
        262927: e => {
            e.exports = {
                blockHidden: "blockHidden-Cky0LHBF",
                "pane-button": "pane-button-Cky0LHBF"
            }
        },
        545287: e => {
            e.exports = {
                wrapper: "wrapper-XOjmVB13",
                button: "button-XOjmVB13"
            }
        },
        228161: e => {
            e.exports = {
                "css-value-padding": "4px"
            }
        },
        899516: e => {
            e.exports = {
                "css-value-padding": "4px",
                wrapper: "wrapper-_W8EGxGy",
                notAvailableOnMobile: "notAvailableOnMobile-_W8EGxGy",
                column: "column-_W8EGxGy",
                button: "button-_W8EGxGy",
                sellButton: "sellButton-_W8EGxGy",
                buyButton: "buyButton-_W8EGxGy",
                brokerButton: "brokerButton-_W8EGxGy",
                highButtons: "highButtons-_W8EGxGy",
                withoutBg: "withoutBg-_W8EGxGy",
                lastCharSup: "lastCharSup-_W8EGxGy",
                spreadQtyWrapper: "spreadQtyWrapper-_W8EGxGy",
                spread: "spread-_W8EGxGy",
                withoutQty: "withoutQty-_W8EGxGy",
                qty: "qty-_W8EGxGy",
                loader: "loader-_W8EGxGy",
                circleLoader: "circleLoader-_W8EGxGy",
                loading: "loading-_W8EGxGy",
                buttonText: "buttonText-_W8EGxGy",
                brokerButtonIconWrap: "brokerButtonIconWrap-_W8EGxGy",
                brokerButtonDefault: "brokerButtonDefault-_W8EGxGy",
                touchMode: "touchMode-_W8EGxGy",
                buttons: "buttons-_W8EGxGy"
            }
        },
        864852: e => {
            e.exports = {
                popupWrapper: "popupWrapper-RRbMYOzv"
            }
        },
        511694: (e, t, i) => {
            "use strict";
            i.d(t, {
                LoaderBaseRenderer: () => r
            });
            var s = i(262927);
            class r {
                constructor(e, t = {}) {
                    this._loadingEl = document.createElement("span"), this._renderLoading(t), this.toggleVisibility(!1), e.appendChild(this._loadingEl)
                }
                toggleVisibility(e) {
                    this._loadingEl.classList.toggle(s.blockHidden, !e)
                }
                _renderLoading(e) {
                    const {
                        className: t
                    } = e;
                    t && this._loadingEl.classList.add(t)
                }
            }
        },
        100037: (e, t, i) => {
            "use strict";
            i.d(t, {
                LoaderPointsRenderer: () => o
            });
            var s = i(511694),
                r = i(818940);
            class o extends s.LoaderBaseRenderer {
                _renderLoading(e) {
                    super._renderLoading(e), this._loadingEl.innerHTML = `\n\t\t\t<span class="${r.loaderItem}"></span>\n\t\t\t<span class="${r.loaderItem}"></span>\n\t\t\t<span class="${r.loaderItem}"></span>\n\t\t`, this._loadingEl.classList.add(r.loader)
                }
            }
        },
        569421: (e, t, i) => {
            "use strict";
            i.d(t, {
                trackingModeIsAvailable: () => s
            });
            const s = i(638456).CheckMobile.any()
        },
        425623: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                TradingToolipRenderer: () => g,
                TradingWizardHintType: () => d
            });
            var s = i(777754),
                r = i(500962),
                o = i(50959),
                n = i(12173),
                a = i(401387);

            function l(e) {
                const {
                    rootReference: t,
                    onClose: i,
                    placement: s
                } = e;
                return o.createElement(a.Popper, {
                    placement: s || "top",
                    strategy: "fixed",
                    referenceElement: t,
                    modifiers: [{
                        name: "offset",
                        options: {
                            offset: [0, 5]
                        }
                    }, {
                        name: "preventOverflow",
                        options: {
                            rootBoundary: "viewport"
                        }
                    }]
                }, (t => o.createElement(n.TooltipWizard, {
                    popperChildrenProps: t,
                    onClose: i
                }, e.children)))
            }
            var d, c = i(915812),
                h = i(951292),
                u = i(545287);

            function _(e) {
                const t = (0, h.useOutsideEvent)({
                    mouseDown: !0,
                    touchStart: !0,
                    handler: e.hide
                });
                return o.createElement("div", {
                    className: u.wrapper,
                    ref: t
                }, e.text, e.action && o.createElement(c.SquareButton, {
                    className: u.button,
                    size: "small",
                    onClick: e.action.action
                }, e.action.text))
            }! function(e) {
                e[e.NeedBrokerSignIn = 0] = "NeedBrokerSignIn", e[e.NeedSignIn = 1] = "NeedSignIn", e[e.AboutFavoritesBrokers = 2] = "AboutFavoritesBrokers"
            }(d || (d = {}));
            const p = {
                loginAttention: s.t(null, void 0, i(566977)),
                needSignIn: s.t(null, void 0, i(224949)),
                aboutFavoritesBrokers: s.t(null, void 0, i(688117))
            };
            class g {
                constructor() {
                    this._wrap = document.createElement("div"), this.hide = () => {
                        r.unmountComponentAtNode(this._wrap)
                    }
                }
                show(e, t, i, s) {
                    this.hide();
                    r.render(o.createElement(l, {
                        rootReference: e,
                        onClose: i ? void 0 : () => {
                            this.hide()
                        },
                        placement: s
                    }, this._generateHintContent(t, i)), this._wrap)
                }
                destroy() {
                    this.hide()
                }
                _generateHintContent(e, t) {
                    let i = "";
                    switch (e) {
                        case d.NeedSignIn:
                            i = p.needSignIn;
                            break;
                        case d.NeedBrokerSignIn:
                            i = p.loginAttention;
                            break;
                        case d.AboutFavoritesBrokers:
                            i = p.aboutFavoritesBrokers
                    }
                    return o.createElement(_, {
                        hide: this.hide,
                        text: i,
                        action: t
                    })
                }
            }
        },
        297948: (e, t, i) => {
            "use strict";
            i.d(t, {
                makeAccountManagerHeaderDropdownsProps: () => u
            });
            var s = i(650151),
                r = i(910368),
                o = i(480802),
                n = i(763532),
                a = i(272001),
                l = i(703819);
            const d = (0, a.getLogger)("Trading.DataExport");
            class c {
                constructor(e, t) {
                    this._prefix = t, this._getDataExporters = e
                }
                tabs() {
                    return [...this._getDataExporters()].map((([e, t]) => ({
                        value: e,
                        content: t.title
                    })))
                }
                async exportData(e) {
                    const {
                        exporters: t,
                        title: i
                    } = (0, s.ensureDefined)(this._getDataExporters().get(e), "data exporter");
                    try {
                        const e = await Promise.all(t.map((({
                            exportData: e
                        }) => e())));
                        e.forEach(((s, r) => {
                            const a = t[r].name,
                                l = void 0 === a || "" === a ? `${(0,o.default)(i)}${e.length>1?`-${r+1}`:""}` : (0, o.default)(a);
                            let d = "";
                            if (0 !== s.length) {
                                const e = [h(Object.keys(s[0]))];
                                for (const t of s) e.push(h(Object.values(t)));
                                d = e.join("\n")
                            }(0, n.saveTextFile)(`${(0,o.default)(this._prefix)}-${l}-${(new Date).toISOString()}.csv`, d, "text/csv")
                        }))
                    } catch (e) {
                        d.logError((0, l.getLoggerMessage)(e))
                    }
                }
            }

            function h(e) {
                return e.map(n.escapeCSVValue).join(",")
            }
            async function u(e, t, i) {
                const o = e.brokersList().filter((e => !e.configFlags.isSuspended)),
                    n = o.length >= 1 ? e.brokersPlans() : Promise.resolve(void 0),
                    a = (0, s.ensureNotNull)(e.activeBroker()),
                    l = await n,
                    d = await a.accountsMetainfo(),
                    h = a.accountManagerInfo();
                if (0 === d.length) return;
                const u = d.map((e => {
                        var t;
                        return {
                            id: e.id,
                            name: e.name,
                            callBack: async () => {
                                e.id !== a.currentAccount() && a.setCurrentAccount(e.id)
                            },
                            currency: "" === e.currency ? void 0 : null !== (t = e.currency) && void 0 !== t ? t : void 0
                        }
                    })),
                    _ = u.find((e => e.id === a.currentAccount())),
                    p = a.metainfo(),
                    g = void 0 !== l ? (0, r.brokersListFromPlans)(o, l) : void 0;
                return {
                    brokerDropdownProps: void 0 === g ? void 0 : {
                        title: h.accountTitle,
                        brokerName: p.title,
                        brokerId: p.id,
                        logo: p.logoMiniUrl,
                        logoBlack: p.logoMiniBlackUrl,
                        actions: a.buttonDropdownActions(),
                        dataExportController: void 0 !== i ? new c(i, p.title) : void 0,
                        trading: e,
                        brokers: g,
                        initialSummaryFieldsVisibilityInfo: t.fieldsVisibilityInfo(),
                        summaryFieldsVisibilityInfo$: t.fieldsVisibilityInfo$,
                        summaryFieldToggler: t.toggleField,
                        isBeta: p.isBeta,
                        realtimeDataPermissionsConfig: p.realtimeDataPermissionsToggleConfig
                    },
                    accountDropdownProps: {
                        currentAccount: (0, s.ensureDefined)(_),
                        accountsList: u,
                        currentAccountUpdate: a.currentAccountUpdate
                    }
                }
            }
        },
        131036: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                SummaryFieldsVisibilityManager: () => r
            });
            var s = i(947488);
            class r {
                constructor(e, t) {
                    var i;
                    this.toggleField = e => {
                        var t;
                        const i = this._fieldsVisibilityInfo$.getValue(),
                            s = new Map(i),
                            r = s.get(e);
                        void 0 !== r && (r.visible = !r.visible, this._fieldsVisibilityInfo$.next(s), null === (t = this._settingsGetter()) || void 0 === t || t.setSummaryFieldsVisibilityInfo(s))
                    }, this._settingsGetter = t;
                    const r = null === (i = this._settingsGetter()) || void 0 === i ? void 0 : i.summaryFieldsVisibilityInfo();
                    this._fieldsVisibilityInfo$ = new s.BehaviorSubject(new Map(e.map((({
                        text: e,
                        isDefault: t
                    }) => {
                        var i, s, o;
                        return [e, {
                            id: e,
                            visible: null === (o = null !== (s = null === (i = null == r ? void 0 : r.get(e)) || void 0 === i ? void 0 : i.visible) && void 0 !== s ? s : t) || void 0 === o || o
                        }]
                    })))), this.fieldsVisibilityInfo$ = this._fieldsVisibilityInfo$.asObservable()
                }
                fieldsVisibilityInfo() {
                    return this._fieldsVisibilityInfo$.getValue()
                }
            }
        },
        39295: (e, t, i) => {
            "use strict";
            i.d(t, {
                PositionsUpdateType: () => h,
                cropPositionData: () => u,
                PositionsService: () => _
            });
            var s = i(650151),
                r = i(869403),
                o = i.n(r),
                n = i(758337),
                a = i(272001),
                l = i(778371),
                d = i(328875);
            const c = (0, a.getLogger)("Trading.PositionService");
            var h;

            function u(e) {
                const t = e;
                return {
                    id: t.id,
                    symbol: t.symbol,
                    side: t.side,
                    avgPrice: t.avgPrice,
                    pl: t.pl,
                    price: t.price,
                    qtyBySide: t.qtyBySide,
                    stopType: t.stopType,
                    takeProfit: t.takeProfit,
                    stopLoss: t.stopLoss,
                    trailingStopPips: t.trailingStopPips
                }
            }! function(e) {
                e[e.Full = 0] = "Full", e[e.Partial = 1] = "Partial"
            }(h || (h = {}));
            class _ extends l.BrokerService {
                constructor() {
                    super(...arguments), this._existingPositionIds = new Set, this._positions = new Map, this._positionUpdate = new(o()), this._positionsRemoved = new(o()), this._displayMode = 1, this._updatePositionPLHandler = this._updatePositionPL.bind(this)
                }
                destroy() {
                    this.stopService()
                }
                positions() {
                    return Array.from(this._positions.values())
                }
                find(e) {
                    return this._positions.get(e) || null
                }
                async realIdFromBroker(e) {
                    const t = (0, s.ensureNotNull)(this.activeBroker());
                    if (1 === this._displayMode) {
                        const i = await t.positionById(e);
                        if (void 0 !== i) return i.id
                    } else {
                        const i = await t.tradeById(e);
                        if (void 0 !== i) return i.id
                    }
                    return null
                }
                positionUpdate() {
                    return this._positionUpdate
                }
                positionsRemoved() {
                    return this._positionsRemoved
                }
                isDisplayModeTrades() {
                    return 0 === this._displayMode
                }
                async getCurrency(e) {
                    return await (0, s.ensureNotNull)(this.activeBroker()).getPositionCurrency(e) || ""
                }
                stopService() {
                    this._clearPositions();
                    const e = (0, s.ensureNotNull)(this.activeBroker());
                    this.isDisplayModeTrades() ? e.tradeUpdate.unsubscribeAll(this) : e.positionUpdate.unsubscribeAll(this)
                }
                startService() {
                    this._clearPositions(), this._displayMode = function(e) {
                        if (null === e) return 1;
                        const t = e.metainfo().configFlags;
                        return t.supportTrades ? t.supportPositionBrackets ? 1 : t.supportCloseTrade ? 0 : 1 : 1
                    }(this.activeBroker()), this._requestPositions()
                }
                _clearPositions() {
                    const e = (0, s.ensureNotNull)(this.activeBroker()),
                        t = Array.from(this._positions.keys());
                    for (const i of t) this.isDisplayModeTrades() ? e.unsubscribeTradePL(i, this._updatePositionPLHandler) : e.unsubscribePL(i, this._updatePositionPLHandler);
                    this._positions.clear(), this._existingPositionIds.clear(), t.length > 0 && c.logNormal(`All positions removed, id's: ${t}`), this._positionsRemoved.fire(t)
                }
                async _requestPositions() {
                    const e = this.activeBroker();
                    if (!e) return;
                    const t = this.isDisplayModeTrades(),
                        i = await (t ? e.trades() : e.positions());
                    for (const e of i) this._addPosition(e);
                    t ? e.tradeUpdate.subscribe(this, this._addPosition) : e.positionUpdate.subscribe(this, this._addPosition)
                }
                _addPosition(e) {
                    const t = e.id,
                        i = this._positions.has(t),
                        r = (0, s.ensureNotNull)(this.activeBroker()),
                        o = this.isDisplayModeTrades();
                    if (!e.qty) return i && (o ? r.unsubscribeTradePL(t, this._updatePositionPLHandler) : r.unsubscribePL(t, this._updatePositionPLHandler), this._positions.delete(t), this._positionsRemoved.fire([t])), void this._logPositionUpdate(e, !0);
                    const n = this._getPositionData(e),
                        a = this._updateType(n);
                    this._logPositionUpdate(n, a === h.Full), this._positions.set(t, n), this._firePositionUpdate(n, a),
                        i || (o ? r.subscribeTradePL(t, this._updatePositionPLHandler) : r.subscribePL(t, this._updatePositionPLHandler))
                }
                _updatePositionPL(e, t) {
                    const i = (0, s.ensureDefined)(this._positions.get(e));
                    i.pl = (0, n.isNumber)(t) ? t : null, i.profitState = (0, d.profitStateByPL)(t), this._firePositionUpdate(i, h.Partial)
                }
                _getPositionData(e) {
                    var t, i;
                    const r = (0, s.ensureNotNull)(this.activeBroker()).metainfo().configFlags,
                        o = this._positions.get(e.id),
                        n = this.isDisplayModeTrades(),
                        a = Boolean(n ? r.supportTradeBrackets : r.supportPositionBrackets);
                    let l, c = "neutral",
                        h = !1,
                        u = null;
                    if (n) {
                        const t = e;
                        l = t.price, h = Boolean(t.canBeClosed)
                    } else {
                        const s = e;
                        l = s.avgPrice, u = null !== (i = null !== (t = s.pl) && void 0 !== t ? t : null == o ? void 0 : o.pl) && void 0 !== i ? i : null, null !== u && (c = (0, d.profitStateByPL)(u))
                    }
                    return { ...e,
                        pl: u,
                        plBasedOnLast: r.calculatePLUsingLast || !1,
                        price: Math.abs((0, s.ensureDefined)(l)),
                        qtyBySide: Math.abs(e.qty) * (1 === e.side ? 1 : -1),
                        profitState: c,
                        supportClose: Boolean(n ? r.supportCloseTrade && h : r.supportClosePosition),
                        supportReverse: Boolean(!n && r.supportReversePosition),
                        supportBrackets: a,
                        supportOnlyPairBrackets: Boolean(r.supportOnlyPairPositionBrackets),
                        supportTrailingStop: a && (0, d.checkTrailingStopAvailability)(r)
                    }
                }
                _firePositionUpdate(e, t) {
                    this._positionUpdate.fire({
                        data: e,
                        type: t
                    })
                }
                _updateType(e) {
                    const t = this._positions.get(e.id);
                    if (void 0 === t) return h.Full;
                    for (const i of Object.keys(t)) {
                        const s = i;
                        if ("pl" !== s && "unrealizedPl" !== s && t[s] !== e[s]) return h.Full
                    }
                    return h.Partial
                }
                _logPositionUpdate(e, t) {
                    if (!t) return;
                    const i = e.id;
                    let s = "update";
                    this._existingPositionIds.has(i) || (s = "add", this._existingPositionIds.add(i)),
                        function(e, t) {
                            t(JSON.stringify(u(e)))
                        }(e, (e => {
                            c.logNormal(`Position  ${s}: ${e}`)
                        }))
                }
            }
        },
        817734: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                Trading: () => qi,
                showSellBuyButtonsDefault: () => Mi
            });
            var s = i(650151),
                r = i(777754),
                o = i(583912),
                n = i(62802),
                a = i(799786),
                l = i(61005),
                d = i(947488),
                c = i(323002),
                h = i(997345),
                u = i(136916),
                _ = i(910368),
                p = i(437181),
                g = i(691520),
                m = i(703819),
                b = i(272001),
                y = i(868151),
                v = i(78792),
                f = i(495046),
                w = i(954760),
                k = i(819593),
                B = i(988411),
                P = i.n(B),
                S = i(869403),
                C = i.n(S),
                T = i(595531);
            var E = i(779923),
                L = i(541216),
                V = i(203528),
                I = i(962127),
                N = i(423450),
                A = i(595300);
            const O = (0, b.getLogger)("Trading.RealtimeProvider");
            class x {
                constructor(e) {
                    this._results = {}, this._getter = e
                }
                get(e) {
                    return this._results[e] || (this._results[e] = this._getter(e)), this._results[e]
                }
            }
            class D {
                constructor(e, t, i, s, r) {
                    this._stopped = !1, this._subscribed = !1, this._provider = null, this._formatters = null, this._symbol = e, this._type = r, this._callback = t, this._providersCache = i, this._formattersCache = s, "Realtime" === this._type ? this._handler = (e, i) => {
                        this._stopped || t(e, i, this._formatters)
                    } : this._handler = (e, i) => {
                        this._stopped || t(e, i)
                    }, this._start().catch((e => {}))
                }
                symbol() {
                    return this._symbol
                }
                type() {
                    return this._type
                }
                callback() {
                    return this._callback
                }
                destroy() {
                    this._ensureNotStopped(), this._subscribed && ("Realtime" === this._type ? (0, s.ensureNotNull)(this._provider).unsubscribeRealtime(this._symbol, this._handler) : (0, s.ensureNotNull)(this._provider).unsubscribeDOME(this._symbol, this._handler)), this._stopped = !0
                }
                async _start() {
                    this._provider = await this._providersCache.get(this._symbol), this._ensureNotStopped(), this._formatters = await this._formattersCache.get(this._symbol), (0, s.ensure)(this._formatters), this._ensureNotStopped(), this._subscribed = !0, "Realtime" === this._type ? this._provider.subscribeRealtime(this._symbol, this._handler) : this._provider.subscribeDOME(this._symbol, this._handler)
                }
                _ensureNotStopped() {
                    (0, s.assert)(!this._stopped, "Should not be stopped")
                }
            }
            class R {
                constructor(e, t, i) {
                    this.onStatusChanged = new(C()), this._subscriptions = [], this._currentBroker = null, this._activeBrokerGetter = e, t.subscribe(this, this._connectionStatusChanged), i.subscribe(this, this._connectionStatusChanged), this._tvProvider = new N.BrokerRealtimeAdapter("RealtimeProvider"), this._connectionStatusChanged()
                }
                isTradable(e) {
                    return this._tradableCache.get(e)
                }
                subscribeRealtime(e, t) {
                    this._subscriptions.some((i => i.symbol() === e && i.callback() === t && "Realtime" === i.type())) || this._subscriptions.push(new D(e, t, this._providersCache, this._formattersCache, "Realtime"))
                }
                unsubscribeRealtime(e, t) {
                    const i = this._subscriptions.findIndex((i => i.symbol() === e && i.callback() === t && "Realtime" === i.type()));
                    if (-1 === i) return;
                    this._subscriptions[i].destroy(), this._subscriptions.splice(i, 1)
                }
                subscribeDOME(e, t) {
                    this._subscriptions.some((i => i.symbol() === e && i.callback() === t && "Dome" === i.type())) || this._subscriptions.push(new D(e, t, this._providersCache, this._formattersCache, "Dome"))
                }
                unsubscribeDOME(e, t) {
                    const i = this._subscriptions.findIndex((i => i.symbol() === e && i.callback() === t && "Dome" === i.type()));
                    if (-1 === i) return void O.logWarn("Subscription not found");
                    this._subscriptions[i].destroy(), this._subscriptions.splice(i, 1)
                }
                formatter(e) {
                    return this._formattersCache.get(e).then((e => e.formatter))
                }
                spreadFormatter(e) {
                    return this._formattersCache.get(e).then((e => e.spreadFormatter))
                }
                quantityFormatter(e) {
                    return this._formattersCache.get(e).then((e => e.quantityFormatter))
                }
                symbolInfo(e) {
                    if (!e) {
                        const e = {
                            minTick: NaN,
                            qty: {
                                min: NaN,
                                max: NaN,
                                step: NaN
                            },
                            pipValue: NaN,
                            pipSize: NaN,
                            description: "no symbol"
                        };
                        return Promise.resolve(e)
                    }
                    return this._providersCache.get(e).then((t => t !== this._tvProvider ? t.symbolInfo(e).then((t => t || this._tvProvider.symbolInfo(e))).catch((t => this._tvProvider.symbolInfo(e))) : this._tvProvider.symbolInfo(e)))
                }
                quotesSnapshot(e) {
                    return this._providersCache.get(e).then((t => t.quotesSnapshot(e)))
                }
                activeBroker() {
                    return null !== this._currentBroker && this._currentBroker !== this._tvProvider ? this._currentBroker : null
                }
                _isTradable(e) {
                    if (null === this._currentBroker || this._currentBroker === this._tvProvider) return Promise.resolve({
                        tradable: !1
                    });
                    try {
                        return (0, A.makeTimeLimited)(this._currentBroker.isTradable(e), 6e4, "isTradable Promise Timeout").catch((() => Promise.resolve({
                            tradable: !1
                        })))
                    } catch (e) {
                        return Promise.resolve({
                            tradable: !1
                        })
                    }
                }
                _haveRealtime(e) {
                    return this._tradableCache.get(e) || Promise.resolve(null === this._currentBroker)
                }
                _connectionStatusChanged() {
                    const e = this._activeBrokerGetter(),
                        t = this._currentBroker,
                        i = e && 1 === e.connectionStatus() ? e : null;
                    if (this._createCaches(), t !== i) {
                        const e = this._subscriptions.map((e => ({
                            symbol: e.symbol(),
                            callback: e.callback(),
                            type: e.type()
                        })));
                        this._unsubscribeAll(), this._currentBroker = i, this._subscribeAll(e), this.onStatusChanged.fire()
                    }
                }
                _createCaches() {
                    this._providersCache = new x((e => this._provider(e))), this._tradableCache = new x((e => this._isTradable(e))), this._formattersCache = new x((e => this._providersCache.get(e).then((t => Promise.all([t.formatter(e, !1), t.spreadFormatter(e), t.quantityFormatter(e)]))).then((([e, t, i]) => ({
                        formatter: e,
                        spreadFormatter: t,
                        quantityFormatter: i
                    })))))
                }
                _provider(e) {
                    return this._haveRealtime(e).then((e => e.tradable && this._currentBroker && 1 === this._currentBroker.connectionStatus() ? this._currentBroker : this._tvProvider))
                }
                _unsubscribeAll() {
                    this._subscriptions.forEach((e => {
                        e.destroy()
                    })), this._subscriptions = []
                }
                _subscribeAll(e) {
                    e.forEach((e => {
                        this._subscriptions.push(new D(e.symbol, e.callback, this._providersCache, this._formattersCache, e.type))
                    }))
                }
            }
            var M = i(776734),
                F = i(778371);
            class W extends F.BrokerService {
                constructor(e) {
                    super(e), this._userId = (window.user.id || "").toString(), window.loginStateChange && window.loginStateChange.subscribe(this, this._onLoginStateChange)
                }
                trackOrderPlaced(e) {
                    this._trackOrderEvent("Placed", e)
                }
                trackOrderModified(e) {
                    this._trackOrderEvent("Modified", e)
                }
                startService() {
                    (0, s.ensure)(this.activeBroker()).orderUpdate.subscribe(this, this._orderUpdate), this._trackTradingBrokerConnnected()
                }
                stopService() {
                    (0, s.ensure)(this.activeBroker()).orderUpdate.unsubscribe(this, this._orderUpdate)
                }
                _orderUpdate(e, t) {
                    t || (5 === e.status ? this._trackOrderEvent("Rejected", e) : 2 === e.status ? this._trackOrderEvent("Executed", e) : 1 === e.status && this._trackOrderEvent("Canceled", e))
                }
                _trackOrderEvent(e, t) {
                    const i = this.activeBroker();
                    if (t && i) {
                        const s = t.id || null;
                        i.symbolInfo(t.symbol).then((i => {
                            const r = {
                                amount: t.qty * (i.lotSize || 1),
                                orderId: s,
                                instrumentType: i.type,
                                eventName: "Order " + e,
                                userId: this._userId,
                                symbol: t.symbol
                            };
                            this._trackTradingOrder(r)
                        }))
                    }
                }
                _trackTradingOrder(e) {
                    const t = this.activeBroker();
                    if (!t) throw new Error("no active broker");
                    const i = t.metainfo().id,
                        s = t.currentAccountType() || "";
                    (0, M.getTracker)().then((t => {
                        if (null === t) return;
                        const r = e.instrumentType || "";
                        t.trackTradingOrder({
                            event: e.eventName,
                            broker_id: i,
                            symbol_name: e.symbol,
                            instrument_type: "bitcoin" === r ? "crypto" : r,
                            amount: Math.min(e.amount, 1e15),
                            account_type: s,
                            user_id: e.userId,
                            order_id: e.orderId
                        })
                    }))
                }
                _trackTradingBrokerConnnected() {
                    const e = this.activeBroker(),
                        t = null !== e && "Paper" === e.metainfo().id;
                    if (!e) throw new Error("no active broker");
                    if (!e.loggedInManually() && t) return;
                    const i = e.metainfo().id,
                        s = e.currentAccountType() || "",
                        r = this._userId;
                    (0, M.getTracker)().then((e => {
                        null !== e && this._lastBrokerId !== i && (this._lastBrokerId = i, e.trackTradingBrokerConnnected(i, s, r))
                    }))
                }
                _onLoginStateChange() {
                    this._userId = (window.user.id || "").toString()
                }
            }
            var q = i(345848),
                H = i(410864),
                Q = i(239401),
                U = i(955501),
                $ = i(83478);

            function G(e = "default") {
                switch (e) {
                    case "danger":
                        return H.ToastIntent.Danger;
                    case "attention":
                        return H.ToastIntent.Warning;
                    case "success":
                        return H.ToastIntent.Success;
                    default:
                        return H.ToastIntent.Default
                }
            }
            class z {
                constructor(e) {
                    this._chartWidgetCollection = e
                }
                proSymbol() {
                    return o.linking.proSymbol.value()
                }
                showTradingProperties() {
                    this._chartWidgetCollection.activeChartWidget.value().showGeneralChartProperties(T.TabNames.trading)
                }
                async closeAllNotifications() {
                    const e = await this._chartWidgetCollection.getToasts();
                    null !== e && e.reset()
                }
                async showNotification(e, t, i, s) {
                    const r = await this._chartWidgetCollection.getToasts();
                    if (null === r) return;
                    let o = "";
                    "string" == typeof t && (o = t), r.showSimpleToast({
                        text: o,
                        time: s,
                        title: e,
                        intent: G(i),
                        priority: Q.ToastPriority.Low
                    })
                }
                showMaintenance(e) {
                    U.maintenance.show(e)
                }
                showBrokerSideMaintenance(e) {
                    $.brokerSideMaintenance.show(e)
                }
                trackEvent(e, t, i) {
                    (0, q.trackEvent)(e, t, i)
                }
                showReplayConfirmationDialog() {
                    return this._chartWidgetCollection.activeChartWidget.value().showReplayOrderConfirmationDialog()
                }
                reconnectChartApi(e) {
                    this._chartWidgetCollection.reconnectChartApi(e)
                }
                setBroker(e) {
                    const t = (null == e ? void 0 : e.metainfo().backendBrokerName) || (null == e ? void 0 : e.metainfo().id.toLowerCase()) || "";
                    this._chartWidgetCollection.setBroker(t)
                }
            }
            var j = i(547623),
                K = (i(984919), i(746932));
            async function Z(e) {
                const {
                    showErrorNotification: t,
                    handler: s,
                    message: o,
                    onOpen: n,
                    onClose: a
                } = e;
                if (!await (0, K.showConfirmDialog)({
                        title: r.t(null, void 0, i(424356)),
                        content: o,
                        mainButtonText: r.t(null, void 0, i(424356)),
                        cancelButtonText: r.t(null, void 0, i(620036)),
                        onOpen: n,
                        onClose: a
                    })) return !1;
                try {
                    return await s()
                } catch (e) {
                    return t(r.t(null, void 0, i(791401)), function(e) {
                        let t = "";
                        null !== e && "object" == typeof e && e.message ? t = e.message : "string" == typeof e && (t = e);
                        return t
                    }(e)), !1
                }
            }
            var J = i(507857),
                X = i(400711),
                Y = i(350172),
                ee = i(919346),
                te = i(909740),
                ie = i(22625),
                se = i(627687),
                re = i(816105);
            async function oe(e, t, s) {
                const o = await async function(e) {
                    const {
                        PartiallyClosingDialogRenderer: t
                    } = await i.e(63168).then(i.bind(i, 406768)), s = new t;
                    return new Promise((t => {
                        s.open({ ...e,
                            dialogActionHandler: t
                        })
                    }))
                }(e);
                if (!o.status) return !1;
                try {
                    return await t(o.qty)
                } catch (e) {
                    return s(r.t(null, void 0, i(791401)), function(e) {
                        let t = "";
                        null !== e && "object" == typeof e && e.message ? t = e.message : "string" == typeof e && (t = e);
                        return t
                    }(e)), !1
                }
            }
            var ne = i(202118);
            const ae = {
                    async show(e) {
                        const t = r.t(null, {
                                replace: {
                                    symbol: e
                                }
                            }, i(97929)),
                            s = r.t(null, {
                                replace: {
                                    symbol: e
                                }
                            }, i(469497));
                        return (0, ne.showSimpleConfirmDialog)({
                            title: s,
                            text: t
                        })
                    }
                },
                le = {
                    async show(e) {
                        const t = r.t(null, {
                                replace: {
                                    symbol: e
                                }
                            }, i(965603)),
                            s = r.t(null, {
                                replace: {
                                    symbol: e
                                }
                            }, i(447600));
                        return (0, ne.showSimpleConfirmDialog)({
                            title: s,
                            text: t
                        })
                    }
                };
            var de = i(50959),
                ce = i(927592);

            function he(e) {
                const {
                    symbol: t,
                    side: s,
                    qty: o,
                    price: n,
                    id: a,
                    closePositionCancelsOrders: l
                } = e, d = (0, ce.splitThousands)(o, " "), c = (0, ce.splitThousands)(n, " ");
                return de.createElement(de.Fragment, null, de.createElement("div", null, void 0 !== a ? r.t(null, void 0, i(170392)).replace("{id}", a) : r.t(null, void 0, i(381617))), de.createElement("div", null, de.createElement("b", null, t)), de.createElement("div", null, de.createElement("b", null, `${s} ${d} @ ${c}`)), de.createElement("div", null, l && ` ${r.t(null,void 0,i(218329))}`))
            }
            var ue = i(125226),
                _e = i(531733);
            const pe = (0, b.getLogger)("Trading.BrokerCommandsUI"),
                ge = {
                    symbol: 1,
                    qty: 1,
                    side: 1,
                    type: 1,
                    seenPrice: 1
                };
            const me = (0,
                    ue.isFeatureEnabled)("enable_place_order_context_in_instant_mode"),
                be = (0, ue.isFeatureEnabled)("enable_edit_order_context_in_instant_mode");
            class ye {
                constructor(e, t, i, s, r, o) {
                    this._closePositionDialogVisibility = new L.DialogVisibility, this._isClosePositionDialogLoading = !1, this._isCloseTradeDialogLoading = !1, this._onClosePositionDialogOpen = e => {
                        this._closePositionDialogVisibility.setValue({
                            isVisible: !0,
                            isFullScreen: e
                        })
                    }, this._onClosePositionDialogClose = () => {
                        this._closePositionDialogVisibility.setValue({
                            isVisible: !1
                        })
                    }, this._activeBroker = e, this._guiAccessor = t, this._orderViewController = s, this._showErrorNotification = r, this._noConfirmEnabled = i, this._trackEvent = o, this.closePositionDialogVisibility = this._closePositionDialogVisibility.value$
                }
                async placeOrder(e, t, s) {
                    const o = t && this._noConfirmEnabled.value(),
                        n = this._guiAccessor && o ? this._guiAccessor.showReplayConfirmationDialog() : Promise.resolve(!1);
                    try {
                        await n
                    } catch (e) {
                        Promise.resolve(!1)
                    }
                    const a = await this._activeBroker.isTradable(e.symbol);
                    if (o && a.tradable && function(e) {
                            for (const t in ge)
                                if (!(t in e)) return !1;
                            return !0
                        }(e)) {
                        if (me) {
                            return (await this._activeBroker.createPlaceOrderContext(e)).send()
                        }
                        const t = await this._activeBroker.createInitialPreOrder(e);
                        return this._activeBroker.placeOrder(t)
                    }
                    return a.tradable ? this._orderViewController().then((t => this._activeBroker ? t.showOrderView({
                        order: e,
                        focus: void 0,
                        forceOrderDialog: s
                    }) : Promise.reject("Broker connection adapter is null"))) : (async function(e) {
                        var t;
                        const {
                            isTradableResult: s,
                            activeBroker: o
                        } = e, n = await (0, ie.prepareTradableSolution)(s, o), [{
                            showSimpleDialog: a
                        }, {
                            SimpleConfirmDialog: l
                        }] = await Promise.all([Promise.all([i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(12275), i.e(33335), i.e(91901), i.e(83772), i.e(71140), i.e(85761), i.e(64884), i.e(54819), i.e(1428), i.e(1011), i.e(52701), i.e(59302), i.e(36812), i.e(69273), i.e(67177), i.e(69392), i.e(23426), i.e(75514), i.e(745), i.e(3566)]).then(i.bind(i, 894185)), Promise.all([i.e(88230), i.e(18619), i.e(81910), i.e(86256), i.e(12275), i.e(33335), i.e(91901), i.e(83772), i.e(71140), i.e(85761), i.e(64884), i.e(54819), i.e(1428), i.e(1011), i.e(52701), i.e(59302), i.e(36812), i.e(69273), i.e(67177), i.e(69392), i.e(23426), i.e(75514), i.e(745), i.e(3566)]).then(i.bind(i, 858921))]);
                        a({
                            text: null !== (t = s.reason) && void 0 !== t ? t : r.t(null, void 0, i(265914)),
                            title: r.t(null, void 0, i(69208)),
                            titleIcon: te.watchedTheme.value() === ee.StdTheme.Light ? se : re,
                            mainButtonText: void 0 !== n ? n.title : r.t(null, void 0, i(468988)),
                            mainButtonIntent: "primary",
                            showCancelButton: !1,
                            onConfirm: e => {
                                void 0 !== n && n.apply(), e.dialogClose()
                            }
                        }, l)
                    }({
                        isTradableResult: a,
                        activeBroker: this._activeBroker
                    }), !1)
                }
                async modifyOrder(e, t, i, s) {
                    if (t && this._noConfirmEnabled.value() && 1 === e.parentType && be) {
                        return (await this._activeBroker.createEditOrderContext(e)).send()
                    }
                    return this._modifyOrder(e, t, i, s)
                }
                async closePosition(e) {
                    var t, i;
                    if (this._isMaintenance()) return this._guiAccessor.showMaintenance(this._activeBroker.metainfo().title), !1;
                    if (this._isBrokerSideMaintenance()) return this._guiAccessor.showBrokerSideMaintenance(this._activeBroker.metainfo().title), !1;
                    if (this._makeSureBrokerIsConnected(), this._isClosePositionDialogLoading) return !1;
                    let s, r;
                    this._isClosePositionDialogLoading = !0;
                    try {
                        if (s = await this._activeBroker.positionById(e), void 0 === s) return !1;
                        const {
                            tradable: t
                        } = await this._activeBroker.isTradable(s.symbol);
                        if (await this._assertPositionExistsAndNotClosed(s.id), !t) return this._closePositionForNonTradableSymbol(s);
                        if (this._noConfirmEnabled.value()) return this._activeBroker.closePosition(e);
                        r = await this._obtainPositionClosingData(s)
                    } finally {
                        this._isClosePositionDialogLoading = !1
                    }
                    if (void 0 === r) return !1;
                    const {
                        supportPartialClosePosition: o,
                        ...n
                    } = r, a = this._activeBroker.metainfo();
                    if (void 0 !== (null === (t = a.customUI) || void 0 === t ? void 0 : t.showClosePositionDialog)) return null === (i = a.customUI) || void 0 === i ? void 0 : i.showClosePositionDialog(s);
                    if (o) {
                        const t = t => (t !== (null == s ? void 0 : s.qty) ? this._trackEvent("", "Close Position Dialog", "partial") : this._trackEvent("", "Close Position Dialog", "full"), this._activeBroker.closePosition(e, t));
                        return oe({ ...n,
                            positionOrTrade: s,
                            onOpen: this._onClosePositionDialogOpen,
                            onClose: this._onClosePositionDialogClose
                        }, t, this._showErrorNotification)
                    } {
                        const t = () => this._activeBroker.closePosition(e);
                        return Z({
                            showErrorNotification: this._showErrorNotification,
                            handler: t,
                            message: r.message,
                            onOpen: this._onClosePositionDialogOpen,
                            onClose: this._onClosePositionDialogClose
                        })
                    }
                }
                async closeTrade(e) {
                    if (this._isMaintenance()) return this._guiAccessor.showMaintenance(this._activeBroker.metainfo().title), !1;
                    if (this._isBrokerSideMaintenance()) return this._guiAccessor.showBrokerSideMaintenance(this._activeBroker.metainfo().title), !1;
                    if (this._makeSureBrokerIsConnected(), (0, s.assert)(!!this._activeBroker.config.supportTrades, "Broker doesn`t support trades"), this._noConfirmEnabled.value()) return this._activeBroker.closeTrade(e); {
                        if (this._isCloseTradeDialogLoading) return !1;
                        const t = await this._obtainTradeClosingData(e);
                        if (void 0 === t) return !1;
                        const {
                            supportPartialCloseTrade: i,
                            trade: s,
                            ...r
                        } = t;
                        if (i) {
                            const t = async t => (t !== s.qty ? this._trackEvent("", "Close Trade Dialog", "partial") : this._trackEvent("", "Close Trade Dialog", "full"), this._activeBroker.closeTrade(e, t));
                            return oe({ ...r,
                                positionOrTrade: s,
                                onOpen: this._onClosePositionDialogOpen,
                                onClose: this._onClosePositionDialogClose
                            }, t, this._showErrorNotification)
                        }
                        return Z({
                            showErrorNotification: this._showErrorNotification,
                            handler: () => this._activeBroker.closeTrade(e),
                            message: t.message,
                            onOpen: this._onClosePositionDialogOpen,
                            onClose: this._onClosePositionDialogClose
                        })
                    }
                }
                editPositionBrackets(e, t, i, r) {
                    return this._isMaintenance() ? (this._guiAccessor.showMaintenance(this._activeBroker.metainfo().title), Promise.resolve(!1)) : this._isBrokerSideMaintenance() ? (this._guiAccessor.showBrokerSideMaintenance(this._activeBroker.metainfo().title), Promise.resolve(!1)) : (this._makeSureBrokerIsConnected(), (0, s.assert)(!!this._activeBroker.config.supportPositionBrackets, "Broker doesn`t support brackets on positions"),
                        r && this._noConfirmEnabled.value() ? this._activeBroker.editPositionBrackets(e, null != t ? t : {}) : this._activeBroker.positionById(e).then((e => this._activeBroker ? this._showPositionDialog((0, s.ensureDefined)(e), t, i) : Promise.reject("Broker connection adapter is null"))))
                }
                editTradeBrackets(e, t, i, r) {
                    return r && this._noConfirmEnabled.value() ? this._activeBroker.editTradeBrackets(e, null != t ? t : {}) : this._activeBroker.tradeById(e).then((e => this._activeBroker ? this._showTradeDialog((0, s.ensureDefined)(e), t, i) : Promise.reject("Broker connection adapter is null")))
                }
                reversePosition(e) {
                    return this._isMaintenance() ? (this._guiAccessor.showMaintenance(this._activeBroker.metainfo().title), Promise.resolve(!1)) : this._isBrokerSideMaintenance() ? (this._guiAccessor.showBrokerSideMaintenance(this._activeBroker.metainfo().title), Promise.resolve(!1)) : (this._makeSureBrokerIsConnected(), this._activeBroker.metainfo().configFlags.supportMultiposition && !this._activeBroker.config.supportNativeReversePosition ? Promise.reject("Cannot reverse position on multiposition acount") : this._noConfirmEnabled.value() ? this._activeBroker.reversePosition(e) : this._activeBroker.positionById(e).then((t => {
                        if (!this._activeBroker) return Promise.reject("Broker connection adapter is null");
                        const i = this._activeBroker.reversePosition.bind(this._activeBroker, e);
                        return (0, J.reversePositionDialog)(e, this._showErrorNotification, i, this._activeBroker.config.closePositionCancelsOrders)
                    })))
                }
                async cancelOrder(e) {
                    var t, i;
                    if (this._isMaintenance()) return this._guiAccessor.showMaintenance(this._activeBroker.metainfo().title), Promise.resolve(!1);
                    if (this._isBrokerSideMaintenance()) return this._guiAccessor.showBrokerSideMaintenance(this._activeBroker.metainfo().title), Promise.resolve(!1);
                    this._makeSureBrokerIsConnected();
                    const s = await this._activeBroker.orderById(e);
                    if (void 0 === s) return Promise.reject("Failed to find order");
                    const {
                        tradable: r
                    } = await this._activeBroker.isTradable(s.symbol);
                    if (await this._assertOrderExistsAndNotCanceled(s.id), !r) return this._cancelOrderForNonTradableSymbol(s.symbol, s.id);
                    if (this._noConfirmEnabled.value()) return this._activeBroker.cancelOrder(e); {
                        const r = this._activeBroker.cancelOrder.bind(this._activeBroker, e),
                            o = this._activeBroker.metainfo();
                        if (void 0 !== (null === (t = o.customUI) || void 0 === t ? void 0 : t.showCancelOrderDialog)) return null === (i = o.customUI) || void 0 === i ? void 0 : i.showCancelOrderDialog(s);
                        if (s.parentId) {
                            const e = (await this._activeBroker.orders()).filter((e => e.refNumber === s.refNumber));
                            return o.configFlags.supportCancellingBothBracketsOnly && e.length > 1 ? this._showCancelMultipleBracketsDialog(s.parentId, r) : this._showCancelBracketsDialog(s.id, r)
                        }
                        return this._showCancelOrderDialog(s.id, r)
                    }
                }
                cancelOrders(e, t) {
                    return this._isMaintenance() ? (this._guiAccessor.showMaintenance(this._activeBroker.metainfo().title), Promise.resolve(!1)) : this._isBrokerSideMaintenance() ? (this._guiAccessor.showBrokerSideMaintenance(this._activeBroker.metainfo().title), Promise.resolve(!1)) : (this._makeSureBrokerIsConnected(), this._activeBroker.orders().then((i => {
                        if (!this._activeBroker) return Promise.reject("Broker connection adapter is null");
                        const s = i.filter((i => i.symbol === e && (!t || i.side === t) && function(e) {
                            return 4 === e.status || 3 === e.status || 6 === e.status
                        }(i)));
                        if (!s.length) return Promise.resolve(!1);
                        if (1 === s.length) return this.cancelOrder(s[0].id);
                        const r = s.map((e => e.id));
                        if (this._noConfirmEnabled.value()) return this._activeBroker.cancelOrders(e, t, r); {
                            const i = this._activeBroker.cancelOrders.bind(this._activeBroker);
                            return this._showCancelMultipleOrdersDialog(e, t, r, i)
                        }
                    })))
                }
                async _modifyOrder(e, t, s, o) {
                    const n = this._activeBroker.metainfo();
                    if (this._isMaintenance()) return this._guiAccessor.showMaintenance(n.title), Promise.resolve(!1);
                    if (this._isBrokerSideMaintenance()) return this._guiAccessor.showBrokerSideMaintenance(n.title), Promise.resolve(!1);
                    if (!n.configFlags.supportModifyTrailingStop) {
                        const t = (await this._activeBroker.orders()).find((t => t.id === e.id));
                        void 0 !== t && void 0 !== t.trailingStopPips ? e.hasTrailingStopBracket = !0 : e.hasTrailingStopBracket = !1
                    }
                    if (this._makeSureBrokerIsConnected(), e.flags && e.flags.trailingStop) return pe.logError("Attempt to modify trailing stop loss order" + e.id), this._showErrorNotification(r.t(null, void 0, i(292559)), r.t(null, void 0, i(507214))), Promise.resolve(!1);
                    const a = await this._activeBroker.symbolInfo(e.symbol);
                    e.limitPrice = void 0 !== a.limitPriceStep && void 0 !== e.limitPrice ? (0, m.roundToStepByPriceTypeAndSide)(e.limitPrice, a.limitPriceStep, 1, e.side) : e.limitPrice, e.stopPrice = void 0 !== a.stopPriceStep && void 0 !== e.stopPrice ? (0, m.roundToStepByPriceTypeAndSide)(e.stopPrice, a.stopPriceStep, 2, e.side) : e.stopPrice;
                    const l = e.limitPrice,
                        d = e.stopPrice,
                        c = e.stopType,
                        h = t && this._noConfirmEnabled.value();
                    let u = s || (1 === e.type ? 1 : 2);
                    if (e.parentId && !f.enabled("always_pass_called_order_to_modify")) {
                        let t, i = this._activeBroker.orderById.bind(this._activeBroker);
                        2 === e.parentType && (i = this._activeBroker.positionById.bind(this._activeBroker)), 3 === e.parentType && (i = this._activeBroker.tradeById.bind(this._activeBroker));
                        try {
                            t = await i(e.parentId)
                        } catch (e) {
                            t = void 0
                        }
                        if (t) {
                            u = s || (1 === e.type ? 3 : 4);
                            const i = {
                                takeProfit: l
                            };
                            if (c === j.StopType.TrailingStop ? i.trailingStopPips = e.trailingStopPips : i.stopLoss = d, h && (i.takeProfit = i.takeProfit || t.takeProfit, i.stopLoss = i.stopLoss || t.stopLoss, i.trailingStopPips = i.trailingStopPips || t.trailingStopPips), 3 === e.parentType) return h ? this._activeBroker.editTradeBrackets(t.id, i) : this._showTradeDialog(t, i, u);
                            if (2 === e.parentType && e.qty === Math.abs(t.qty)) return h ? this._activeBroker.editPositionBrackets(t.id, i) : this._showPositionDialog(t, i, u);
                            const r = t;
                            (0, _.isOrderActive)(r.status) && (e = Object.assign({}, r), l && (e.takeProfit = l), d && (c === j.StopType.TrailingStop ? e.trailingStopPips = i.trailingStopPips || e.trailingStopPips : e.stopLoss = d))
                        }
                    }
                    return h ? this._activeBroker.modifyOrder(e) : this._orderViewController().then((t => this._activeBroker ? t.showOrderView({
                        order: e,
                        focus: u,
                        forceOrderDialog: o
                    }) : Promise.reject("Broker connection adapter is null")))
                }
                _makeSureBrokerIsConnected() {
                    (0, s.assert)(1 === this._activeBroker.connectionStatus(), "Broker is not connected")
                }
                async _showPositionDialog(e, t = {}, s) {
                    const o = await this._activeBroker.isTradable(e.symbol);
                    if (!o.tradable) {
                        const t = void 0 !== o.reason ? o.reason : (0, m.makeNonTradableSymbolText)(e.symbol, this._activeBroker.metainfo().title);
                        return this._showErrorNotification(r.t(null, void 0, i(326704)), t), Promise.resolve(!1)
                    }
                    return this._orderViewController().then((i => this._activeBroker ? i.showPositionView(e, {
                        stopLoss: t.stopLoss,
                        takeProfit: t.takeProfit,
                        trailingStopPips: t.trailingStopPips
                    }, s || e.limitPrice && 3 || e.stopPrice && 4) : Promise.reject("Broker connection adapter is null")))
                }
                _showTradeDialog(e, t = {}, i) {
                    return this._orderViewController().then((s => this._activeBroker ? s.showTradeView(e, {
                        stopLoss: t.stopLoss,
                        takeProfit: t.takeProfit,
                        trailingStopPips: t.trailingStopPips
                    }, i || e.limitPrice && 3 || e.stopPrice && 4) : Promise.reject("Broker connection adapter is null")))
                }
                _isMaintenance() {
                    return (0, ue.isFeatureEnabled)((0, _.makeMaintananceFeatureToggleName)(this._activeBroker.metainfo().id))
                }
                _isBrokerSideMaintenance() {
                    return (0, ue.isFeatureEnabled)((0, _.makeBrokerSideMaintananceFeatureToggleName)(this._activeBroker.metainfo().id))
                }
                _showCancelOrderDialog(e, t) {
                    return X.ConfirmOrderCancelDialog.get().open(e).then((i => i ? t(e) : Promise.resolve(!1)))
                }
                _showCancelMultipleOrdersDialog(e, t, i, s) {
                    const r = i.length;
                    return X.ConfirmOrderCancelDialog.get().multiple(e, t, r).then((r => r ? s(e, t, i) : Promise.resolve(!1)))
                }
                async _showCancelBracketsDialog(e, t) {
                    return Y.ConfirmBracketsCancelDialog.get().open(e).then((i => i ? t(e) : Promise.resolve(!1)))
                }
                _showCancelMultipleBracketsDialog(e, t) {
                    return Y.ConfirmBracketsCancelDialog.get().multiple(e).then((i => i ? t(e) : Promise.resolve(!1)))
                }
                async _obtainPositionClosingData(e) {
                    try {
                        const {
                            supportLots: t,
                            qtyStep: s,
                            uiQtyStep: o,
                            minQty: n,
                            qtyFormatter: a,
                            priceFormatter: l
                        } = await this._obtainPositionOrTradeClosingCommonData(e), d = this._activeBroker.metainfo().configFlags.supportPartialClosePosition, c = he({
                            symbol: e.symbol,
                            side: 1 === e.side ? r.t(null, void 0, i(273064)) : r.t(null, void 0, i(777851)),
                            qty: a.format(e.qty),
                            price: l.format(e.avgPrice),
                            closePositionCancelsOrders: this._activeBroker.config.closePositionCancelsOrders
                        });
                        return {
                            position: e,
                            supportLots: t,
                            qtyStep: s,
                            uiQtyStep: o,
                            minQty: n,
                            supportPartialClosePosition: d,
                            qtyFormatter: a,
                            message: c
                        }
                    } catch (e) {
                        return
                    }
                }
                async _obtainTradeClosingData(e) {
                    try {
                        this._isCloseTradeDialogLoading = !0;
                        const t = (0, s.ensureDefined)(await this._activeBroker.tradeById(e)),
                            {
                                supportLots: o,
                                qtyStep: n,
                                uiQtyStep: a,
                                minQty: l,
                                qtyFormatter: d,
                                priceFormatter: c
                            } = await this._obtainPositionOrTradeClosingCommonData(t),
                            h = this._activeBroker.metainfo().configFlags.supportPartialCloseTrade,
                            u = he({
                                symbol: t.symbol,
                                side: 1 === t.side ? r.t(null, void 0, i(273064)) : r.t(null, void 0, i(777851)),
                                qty: d.format(t.qty),
                                price: c.format(t.price),
                                id: e,
                                closePositionCancelsOrders: this._activeBroker.config.closePositionCancelsOrders
                            });
                        return this._isCloseTradeDialogLoading = !1, {
                            trade: t,
                            supportLots: o,
                            qtyStep: n,
                            uiQtyStep: a,
                            minQty: l,
                            supportPartialCloseTrade: h,
                            qtyFormatter: d,
                            message: u
                        }
                    } catch (e) {
                        return void(this._isCloseTradeDialogLoading = !1)
                    }
                }
                async _obtainPositionOrTradeClosingCommonData(e) {
                    const t = await this._activeBroker.symbolInfo(e.symbol);
                    return {
                        supportLots: void 0 !== t.lotSize,
                        qtyStep: t.qty.step,
                        uiQtyStep: t.qty.uiStep,
                        minQty: t.qty.min,
                        qtyFormatter: await this._activeBroker.quantityFormatter(e.symbol),
                        priceFormatter: await this._activeBroker.formatter(e.symbol, !1)
                    }
                }
                async _closePositionForNonTradableSymbol(e) {
                    const {
                        supportClosePositionForNonTradableSymbol: t,
                        supportClosePosition: s
                    } = this._activeBroker.metainfo().configFlags;
                    if (!t || !s) {
                        const t = r.t(null, {
                            replace: {
                                symbol: e.symbol
                            }
                        }, i(946305));
                        return this._showErrorNotification(t, r.t(null, void 0, i(348434))), !1
                    }
                    return !!await ae.show(e.symbol) && this._activeBroker.closePosition(e.id)
                }
                async _cancelOrderForNonTradableSymbol(e, t) {
                    if (!this._activeBroker.metainfo().configFlags.supportCancelOrderForNonTradableSymbol) {
                        const t = r.t(null, {
                            replace: {
                                symbol: e
                            }
                        }, i(993545));
                        return this._showErrorNotification(t, r.t(null, void 0, i(30665))), !1
                    }
                    return !!await le.show(e) && this._activeBroker.cancelOrder(t)
                }
                async _assertPositionExistsAndNotClosed(e) {
                    const t = await this._activeBroker.positionById(e);
                    if (void 0 === t || 0 === t.qty) throw new _e.UserFriendlyError({
                        userFriendlyMessage: r.t(null, {
                            replace: {
                                positionId: e
                            }
                        }, i(969233)),
                        detailedErrorMessage: `Position ${e} doesn't exist or has already been closed`
                    })
                }
                async _assertOrderExistsAndNotCanceled(e) {
                    const t = await this._activeBroker.orderById(e);
                    if (void 0 === t || 1 === t.status) throw new _e.UserFriendlyError({
                        userFriendlyMessage: r.t(null, {
                            replace: {
                                orderId: e
                            }
                        }, i(579287)),
                        detailedErrorMessage: `Order ${e} doesn't exist or has already been canceled`
                    })
                }
            }
            class ve {
                constructor(e, t, i, s) {
                    this._domePanel = null, this._resizerBridge = e, this._trading = i, this._qtySuggester = s, this._close = () => {
                        this.unmount(), t()
                    }
                }
                mount() {
                    return this._getDomPanel().then((e => {
                        e.setVisibility(!0)
                    }))
                }
                unmount() {
                    this._getDomPanel().then((e => {
                        e.setVisibility(!1)
                    }))
                }
                async _getDomPanel() {
                    if (null !== this._domePanel) return this._domePanel;
                    const {
                        DomePanel: e
                    } = await Promise.all([i.e(53213), i.e(7624), i.e(59333), i.e(12275), i.e(33335), i.e(78707), i.e(83772), i.e(85761), i.e(33287), i.e(6092), i.e(64884), i.e(63737), i.e(54819), i.e(20187), i.e(51907), i.e(68825), i.e(105), i.e(20849), i.e(28385), i.e(84704), i.e(43768), i.e(8819), i.e(28671), i.e(40642), i.e(39988), i.e(62679), i.e(67953), i.e(22975), i.e(59402), i.e(58112), i.e(68985), i.e(33375), i.e(72570), i.e(76195), i.e(7636)]).then(i.bind(i, 170164)), t = this._domePanel = new e(this._trading, this._resizerBridge, this._qtySuggester);
                    return t.setCloseHandler(this._close), t
                }
            }
            class fe {
                mount() {
                    return Promise.resolve()
                }
                unmount() {}
            }
            var we = i(768738),
                ke = i(392612);
            const Be = f.enabled("show_order_panel_on_start");
            class Pe {
                constructor(e) {
                    this.isOpened = new(P())(!1), this.isVisible = new(P())(!1), this.activePage = new(P())(Be ? we.TradingPage.OrderPanel : we.TradingPage.DomPanel), this.isLoading = new(P())(!1), this._pages = {}, this._width = we.panelWidth, this.setPage = e => {
                        this.isOpened.value() && this.activePage.value() !== e && this._pages[this.activePage.value()] && this._pages[this.activePage.value()].unmount(), this.activePage.setValue(e), n.setValue(I.settingsKeys.TRADING_PANEL_ACTIVE_PAGE, e)
                    }, this.openPage = e => {
                        this.setPage(e), this.open()
                    }, this.open = () => {
                        this._pages[this.activePage.value()] && (this._togglePanel(!0), this.isOpened.setValue(!0), this._pages[this.activePage.value()].mount())
                    }, this.close = () => {
                        this.isOpened.setValue(!1), this._pages[this.activePage.value()] && this._pages[this.activePage.value()].unmount(), this._togglePanel(!1)
                    }, this._onLayoutResizeHandleMousedown = e => {
                        if (e.defaultPrevented || !e.cancelable) return;
                        e.preventDefault();
                        const t = Math.max(this._resizerBridge.width.value(), 0);
                        let i;
                        i = "touches" in e ? e.touches[0].clientX : e.clientX;
                        const s = e => {
                                let s;
                                e.preventDefault(), s = "touches" in e ? e.touches[0].clientX : e.clientX;
                                let r = t - (s - i);
                                r < we.panelWidth ? r = we.panelWidth : r > we.maxPanelWidth && (r = we.maxPanelWidth), this._requestWidth(r)
                            },
                            r = () => {
                                document.removeEventListener("mousemove", s), document.removeEventListener("touchmove", s), document.removeEventListener("mouseup", r), document.removeEventListener("touchend", r), n.setValue(I.settingsKeys.PANEL_WIDTH, this._width)
                            };
                        document.addEventListener("mousemove", s), document.addEventListener("touchmove", s, {
                            passive: !1
                        }), document.addEventListener("mouseup", r), document.addEventListener("touchend", r, {
                            passive: !1
                        })
                    }, this._resizerBridge = e, this._rootContainer = this._resizerBridge.container.value(), this.container = document.createElement("div"), this.container.classList.add(ke["trading-panel-content"], "trading-panel-content"), this._rootContainer.appendChild(this.container), this._addSpinner(), this._addResizeHandler(), this._subscribeVisibility(), this.isLoading.subscribe(this._setLoading.bind(this)), this._rootContainer.style.overflow = this.isOpened.value() ? "" : "hidden"
                }
                addPage(e, t) {
                    this._pages[e] = t
                }
                isPageOpened(e) {
                    return this.isOpened.value() && this.activePage.value() === e
                }
                _setLoading(e) {
                    e ? this._rootContainer.appendChild(this._spinnerContainer) : this._rootContainer.contains(this._spinnerContainer) && this._rootContainer.removeChild(this._spinnerContainer)
                }
                _addSpinner() {
                    this._spinnerContainer = document.createElement("div"), this._spinnerContainer.classList.add(ke["trading-panel-spinner"]), i.e(57102).then(i.bind(i, 972717)).then((e => {
                        e.render(this._spinnerContainer)
                    }))
                }
                _addResizeHandler() {
                    this._handle = document.createElement("div"), this._handle.classList.add(ke["trading-panel-handle"]), this._rootContainer.appendChild(this._handle), this._handle.addEventListener("mousedown", this._onLayoutResizeHandleMousedown, {
                        passive: !1
                    }), this._handle.addEventListener("touchstart", this._onLayoutResizeHandleMousedown, {
                        passive: !1
                    }), this._width = n.getInt(I.settingsKeys.PANEL_WIDTH) || we.panelWidth
                }
                _togglePanel(e) {
                    this._resizerBridge.negotiateWidth(e ? this._width : 0), this._resizerBridge.negotiateHeight(e ? we.panelHeight : 0), this._rootContainer.style.overflow = e ? "" : "hidden", n.setValue(I.settingsKeys.TRADING_PANEL_OPENED, e)
                }
                _updateVisibility() {
                    this.isVisible.setValue(Boolean(this._resizerBridge.visible.value() && this._resizerBridge.availHeight.value() >= we.panelHeight && this._resizerBridge.availWidth.value() >= we.panelWidth))
                }
                _subscribeVisibility() {
                    this._updateVisibility(), this._resizerBridge.visible.subscribe((() => {
                            this._updateVisibility()
                        })),
                        this._resizerBridge.availHeight.subscribe((() => {
                            this._updateVisibility()
                        })), this._resizerBridge.availWidth.subscribe((() => {
                            this._updateVisibility()
                        }))
                }
                _requestWidth(e) {
                    this._canOpen(e) && this._resizerBridge.width.value() !== e && (this._resizerBridge.negotiateWidth([{
                        min: we.panelWidth,
                        max: e
                    }]), this._width = e)
                }
                _canOpen(e) {
                    return e + 46 <= this._resizerBridge.availWidth.value()
                }
            }
            var Se = i(12481),
                Ce = i(835343);
            const Te = ["qty", "stopPrice", "limitPrice", "status", "filledQty", "stopType"];

            function Ee(e, t, i) {
                if (void 0 === e || void 0 === t) return !1;
                const s = i.indexOf(".");
                if (-1 !== s) {
                    const r = i.substring(0, s);
                    return Ee(e[r], t[r], i.substring(s + 1))
                }
                return e[i] === t[i]
            }

            function Le(e, t) {
                return e.enabled.value() && (t.soundPath = e.path.value()), t
            }

            function Ve(e) {
                return 6 === e || 3 === e
            }
            class Ie extends F.BrokerService {
                constructor(e) {
                    super(e), this._orders = [], this._playSound = (0, Se.default)(this._playSoundImpl, 50), l.enableAlertSoundsForMobile()
                }
                startService() {
                    const e = (0, s.ensure)(this.activeBroker());
                    e.orders().then((e => this._orders = (0, Ce.deepCopy)(e))), e.orderUpdate.subscribe(this, this._orderUpdate)
                }
                stopService() {
                    (0, s.ensure)(this.activeBroker()).orderUpdate.unsubscribe(this, this._orderUpdate)
                }
                _showNotification(e, t, i) {
                    f.enabled("trading_notifications") && ("error" === i ? this.trading().showErrorNotification(e, t) : this.trading().showSuccessNotification(e, t))
                }
                _formatter(e) {
                    return (0, s.ensureNotNull)(this.activeBroker()).formatter(e, !0)
                }
                _checkOrderModified(e, t) {
                    const i = this.activeBroker(),
                        s = i && i.metainfo().customNotificationFields || [],
                        r = Te.concat(s);
                    let o = !1;
                    return r.forEach((i => {
                        o || Ee(e, t, i) || (o = !0)
                    })), o
                }
                _generateNotificationsInfo(e, t) {
                    const s = [],
                        o = e.statusMessage ? ": " + e.statusMessage : "",
                        n = (1 === e.side ? r.t(null, void 0, i(32241)) : r.t(null, void 0, i(185631))).toUpperCase();
                    const a = this.trading().orderExecutedSoundParams;
                    return t ? (this._checkOrderModified(e, t) && (1 === e.status ? s.push({
                        text: r.t(null, void 0, i(767207)),
                        notificationType: 1
                    }) : 5 === e.status ? s.push({
                        text: r.t(null, void 0, i(442060)) + o,
                        type: "error",
                        notificationType: 2
                    }) : 2 === e.status ? s.push(Le(a, {
                        side: n,
                        text: r.t(null, void 0, i(499577)),
                        notificationType: 6
                    })) : t.filledQty !== e.filledQty ? s.push(Le(a, {
                        side: n,
                        text: r.t(null, void 0, i(23750)),
                        notificationType: 4
                    })) : Ve(e.status) && s.push({
                        text: r.t(null, void 0, i(164105)),
                        notificationType: 5
                    })), Object.assign(t, e)) : Ve(e.status) ? (this._orders.push(e), s.push({
                        text: r.t(null, void 0, i(595536)),
                        notificationType: 0
                    }), this.trading().trackEvent("", "Order placed symbol", e.symbol)) : 1 === e.status ? s.push({
                        text: r.t(null, void 0, i(767207)),
                        notificationType: 1
                    }) : 5 === e.status ? (this._orders.push(e), s.push({
                        text: r.t(null, void 0, i(442060)) + o,
                        type: "error",
                        notificationType: 2
                    })) : 2 === e.status && (this._orders.push(e), s.push({
                        text: r.t(null, void 0, i(595536)),
                        notificationType: 0
                    }, Le(a, {
                        side: n,
                        text: r.t(null, void 0, i(499577)),
                        emptyOrderType: !0,
                        notificationType: 6
                    })), this.trading().trackEvent("", "Order placed symbol", e.symbol)), s
                }
                _orderUpdate(e, t) {
                    const s = (0, Ce.deepCopy)(e),
                        o = this._orders.find((e => e.id === s.id));
                    if (t) return void(void 0 === o && this._orders.push(s));
                    if (o && (0, m.isFinalOrderStatus)(o.status)) return;
                    const n = this._generateNotificationsInfo(s, o);
                    0 !== n.length && this._formatter(s.symbol).then((e => {
                        const t = (0, m.sideToText)(s.side, !0),
                            o = s.qty,
                            a = void 0 !== s.filledQty && s.filledQty > 0 ? s.filledQty : void 0;
                        let l = "",
                            d = "";
                        switch (s.type) {
                            case 2:
                                l = s.avgPrice ? " (" + (0, m.orderTypeToText)({
                                    orderType: s.type
                                }) + ")" : "", d = s.avgPrice ? e.format(s.avgPrice) : (0, m.orderTypeToText)({
                                    orderType: s.type
                                });
                                break;
                            case 4:
                                l = " " + r.t(null, void 0, i(916322)).format({
                                    price: e.format(s.stopPrice)
                                }), d = e.format(s.avgPrice || s.limitPrice);
                                break;
                            default:
                                l = " (" + (0, m.orderTypeToText)({
                                    orderType: s.type
                                }) + ")", d = e.format(s.avgPrice || s.limitPrice || s.stopPrice)
                        }
                        const c = void 0 !== s.message ? `${s.message.text.charAt(0).toUpperCase()}${s.message.text.substring(1)}` : "";
                        n.forEach((({
                            text: e,
                            type: n,
                            side: h,
                            emptyOrderType: u,
                            soundPath: _,
                            notificationType: p
                        }) => {
                            const g = 4 === p && void 0 !== a ? a : o,
                                m = (0, ce.splitThousands)(Math.abs(g), " ") + " " + (s.brokerSymbol || s.symbol) + " " + r.t(null, void 0, i(492903)) + " " + d,
                                b = `${r.t(null,void 0,i(922541))} ${s.id} ${e}`,
                                y = `${h||t} ${m} ${u?"":l}\n${c}`;
                            void 0 !== _ && this._playSound(_), this._showNotification(b, y, n)
                        }))
                    }))
                }
                _playSoundImpl(e) {
                    if (this._playingSound) {
                        if (this._playingSound === e) return;
                        l.stop(this._playingSound)
                    }
                    this._playingSound = e, l.play(e), l.onStopped(e, (() => {
                        delete this._playingSound
                    }))
                }
            }
            var Ne = i(991826);
            const Ae = (0, b.getLogger)("Chart.PointsetManager");
            let Oe = 0;
            class xe {
                constructor(e, t, i, s, r) {
                    this._currentPointsetId = null, this._onUpdate = new(C()), this._requestPoints = [], this._gateway = e, this._pointsetSuffix = t, this._isGatewayConnected = this._gateway.isConnected().spawn(), this._isGatewayConnected.subscribe(this._updateByGatewayConnection.bind(this)), this._addPoints(i, s, r)
                }
                onUpdate() {
                    return this._onUpdate
                }
                destroy() {
                    this._isGatewayConnected.value() && null !== this._currentPointsetId && this._gateway.removePointset(this._currentPointsetId), this._requestPoints = [], this._currentPointsetId = null, this._isGatewayConnected.destroy()
                }
                _updateByGatewayConnection(e) {
                    e || (this._currentPointsetId = null, this._requestPoints = [])
                }
                _addPoints(e, t, i) {
                    var r, o;
                    this._isGatewayConnected.value() && ((0, s.assert)(e.length > 0, "Can't possible create point set for empty array of time points"), this._requestPoints = e.map((e => [e.time_t, e.offset])), this._currentPointsetId = (r = this._pointsetSuffix, o = ++Oe, `pointset_${r}_${o}`), this._gateway.createPointset(this._currentPointsetId, "turnaround", t, (0, Ne.getServerInterval)(i), this._requestPoints, this._onMessage.bind(this)))
                }
                _onMessage(e) {
                    switch (e.method) {
                        case "pointset_error":
                            Ae.logNormal(`Pointset error with id ${e.params[0]} turnaround ${e.params[1]}`);
                            break;
                        case "data_update":
                            {
                                const t = [];
                                for (const i of e.params.plots) t.push({
                                    time_t: this._requestPoints[i.index][0],
                                    index: i.value[0],
                                    barTime: i.value[1]
                                });this._onUpdate.fire(t);
                                break
                            }
                    }
                }
            }
            var De = i(894042);

            function Re(e) {
                const t = e.mainSeries().data().first();
                return null === t ? null : t.value[0]
            }
            async function Me(e, t, s) {
                const [r, o, n] = await Promise.all([Promise.all([i.e(7624), i.e(59333), i.e(6092), i.e(47507), i.e(1972), i.e(97104), i.e(42650)]).then(i.bind(i, 761719)), Promise.all([i.e(7624), i.e(59333), i.e(6092), i.e(47507), i.e(1972), i.e(97104), i.e(42650)]).then(i.bind(i, 17353)), Promise.all([i.e(7624), i.e(59333), i.e(6092), i.e(47507), i.e(1972), i.e(97104), i.e(42650)]).then(i.bind(i, 712731))]);
                e.addCustomSource("executions", ((e, i) => {
                    const a = i.mainSeries(),
                        l = a.dataEvents(),
                        d = (0, De.createPrimitivePropertyFromGetterAndSubscription)(i.isInReplay.bind(i), i.onInReplayStateChanged()),
                        c = (0, De.createPrimitivePropertyFromGetterAndSubscription)((() => a.isConvertedToOtherCurrency() || a.isConvertedToOtherUnit()), a.symbolResolved()),
                        h = {
                            arrowVisibility: (0, De.combineProperty)(((e, t, i) => (i = i && !e) && !t), d, c, i.properties().childs().tradingProperties.childs().showExecutions),
                            labelVisibility: i.properties().childs().tradingProperties.childs().showExecutionsLabels
                        },
                        u = function(e, t, i) {
                            return s => {
                                const r = i.seriesSource().symbolInstanceId(),
                                    o = i.interval();
                                return null === r ? null : new xe(e, t, s, r, o)
                            }
                        }(i.chartApi(), "executions", a),
                        _ = (0, De.createWVFromGetterAndSubscription)(Re.bind(null, i), l.barReceived()),
                        p = new r.ExecutionsService(t, l, function(e) {
                            return () => {
                                const t = e.symbolInfo();
                                return null !== t ? t.pro_name || t.full_name : e.proSymbol()
                            }
                        }(a)),
                        g = new o.ExecutionsPointsManager(p, u, _);
                    return new n.ExecutionsSource(e, i, h, s, g)
                }))
            }
            var Fe = i(39295),
                We = i(113258),
                qe = i(150335),
                He = i(178773),
                Qe = i(831471),
                Ue = i(758337),
                $e = i(210490);
            const Ge = r.t(null, void 0, i(505010)),
                ze = r.t(null, void 0, i(703396)),
                je = r.t(null, void 0, i(538386)),
                Ke = r.t(null, void 0, i(893966)),
                Ze = r.t(null, void 0, i(799559)),
                Je = r.t(null, void 0, i(435312)),
                Xe = r.t(null, void 0, i(422540)),
                Ye = r.t(null, void 0, i(400241)),
                et = r.t(null, void 0, i(766596)),
                tt = (0, $e.isMobileTradingAvailable)();
            class it {
                constructor({
                    dataEvents: e,
                    getSymbolName: t,
                    isNonTradableInstrument: i,
                    qtySuggester: s,
                    tradingCommands: r,
                    settings: o,
                    isInReplay: n
                }) {
                    this.ask = new(P())(null), this.askTooltip = new(P())(Ze), this.bid = new(P())(null), this.bidTooltip = new(P())(Je), this.spread = new(P())(null), this.spreadTooltip = new(P())(Xe), this.qty = new(P())(null), this.qtyTooltip = new(P())(""), this.brokerIconVisible = new(P())(!1), this.brokerIconLoading = new(P())(!1), this.brokerIconUrl = new(P())(null), this.isQtyVisible = new(P())(!1), this.hasAskBidAdditionalPrecision = new(P())(!1), this.canTrade = new(P())(!0), this._globalVisibility = null, this._isSymbolTradableResult = new He.WatchedObject(null), this._formatter = null, this._spreadFormatter = null, this._symbol = null, this.setQty = e => {
                        this.qty.setValue(String(e))
                    }, this._onSuggestedQtyChange = e => {
                        this._lastSuggestedQty = e, this.setQty(e)
                    }, this._dataEvents = e, this._getSymbolName = t, this._qtySuggester = s, this._realtimeProvider = r.realtimeProvider, this._onNeedSelectBroker = r.onNeedSelectBroker, this._toggleTradingWidget = r.toggleTradingWidget, this._toggleTradingPanelPopup = r.toggleTradingPanelPopup, this._brokerCommandsUI = r.brokerCommandsUI, this._updateRealtimeDataHandler = this._updateRealtimeData.bind(this), this._isBrokerConnected = (0,
                        De.createWVFromGetterAndSubscription)((() => null !== this._realtimeProvider.activeBroker()), this._realtimeProvider.onStatusChanged), this._isBrokerConnected.subscribe(this._updateIsSymbolTraded.bind(this), {
                        callWithLast: !0
                    }), this._isBrokerConnected.subscribe(this._updateQtyTooltip.bind(this), {
                        callWithLast: !0
                    }), this._isBrokerConnected.subscribe(this._updateBrokerIcon.bind(this)), this._isBrokerConnected.subscribe(this._resubscribeQtySuggester.bind(this)), this._isBrokerConnecting = (0, De.createWVFromGetterAndSubscription)((() => 2 === r.brokerConnectionStatus()), r.onBrokerConnectionStatusChange), this._isBrokerConnecting.subscribe(this._updateBrokerIcon.bind(this)), this.visible = new(P())(!1), this.visible.subscribe(this._toggleState.bind(this), {
                        callWithLast: !0
                    }), this._showSellBuyButtons = o.showSellBuyButtons.spawn(), this._isInReplay = n.spawn(), this._isNonTradableInstrument = i.spawn(), this._showSellBuyButtons.subscribe(this._updateVisibility.bind(this)), this._isInReplay.subscribe(this._updateVisibility.bind(this)), this._isNonTradableInstrument.subscribe(this._updateVisibility.bind(this)), this._updateVisibility(), this._isInstantMode = o.noConfirmEnabled.spawn(), this._themeName = o.themeName.spawn(), this._themeName.subscribe(this._updateBrokerIcon.bind(this), {
                        callWithLast: !0
                    }), this._tradePossibilityComputedWV = (0, k.combine)((() => ({})), this._isBrokerConnected, this._isSymbolTradableResult, this.ask, this.bid), this._tradePossibilityComputedWV.subscribe(this._updateTradePossibilityAndTooltip.bind(this), {
                        callWithLast: !0
                    }), this._isQtyVisibleComputedWV = (0, k.combine)((() => ({})), this.canTrade, this._isInstantMode), this._isQtyVisibleComputedWV.subscribe(this._updateIsQtyVisible.bind(this), {
                        callWithLast: !0
                    })
                }
                destroy() {
                    var e;
                    this._stop(), this._isBrokerConnected.destroy(), this._showSellBuyButtons.destroy(), this._isInReplay.destroy(), this._isNonTradableInstrument.destroy(), null === (e = this._globalVisibility) || void 0 === e || e.destroy(), this._isInstantMode.destroy(), this._tradePossibilityComputedWV.destroy(), this._isQtyVisibleComputedWV.destroy(), this._themeName.destroy()
                }
                setGlobalVisibility(e) {
                    (0, s.assert)(null === this._globalVisibility, "GlobalVisibility can be set only once"), this._globalVisibility = e.spawn(), this._globalVisibility.subscribe(this._updateVisibility.bind(this), {
                        callWithLast: !0
                    })
                }
                async tryToPlaceSellOrder() {
                    await this._tryToPlaceOrder(parseFloat((0, s.ensureNotNull)(this.bid.value())), -1)
                }
                async tryToPlaceBuyOrder() {
                    await this._tryToPlaceOrder(parseFloat((0, s.ensureNotNull)(this.ask.value())), 1)
                }
                async getQtyInfo() {
                    return null !== this._symbol && this.canTrade.value() ? (await this._realtimeProvider.symbolInfo(this._symbol)).qty : null
                }
                applyQty() {
                    if (null === this._symbol || !this.canTrade.value()) return;
                    const e = this.qty.value(),
                        t = null !== e ? Number(e) : null;
                    null !== t && this._qtySuggester.setQty(this._symbol, t), void 0 !== this._lastSuggestedQty && t !== this._lastSuggestedQty && this.qty.setValue(String(this._lastSuggestedQty))
                }
                canShowMobileTrading() {
                    var e;
                    return (0,
                        $e.isMobileTradingAvailable)() && !(null === (e = window.TradingView.bottomWidgetBar) || void 0 === e ? void 0 : e.isVisible().value())
                }
                _updateVisibility() {
                    const e = (null === this._globalVisibility || this._globalVisibility.value()) && this._showSellBuyButtons.value() && !this._isInReplay.value() && !this._isNonTradableInstrument.value();
                    this.visible.setValue(e)
                }
                async _tryToPlaceOrder(e, t) {
                    var i, r;
                    if (null === this._realtimeProvider.activeBroker()) return this.canShowMobileTrading() ? this._toggleTradingPanelPopup() : await this._toggleTradingWidget(), void this._onNeedSelectBroker.fire();
                    const o = Number(this.qty.value()) || 1,
                        n = this._isMarketOrderSupported() ? 2 : 1,
                        a = 1 === t ? null === (i = this._currentQuotes) || void 0 === i ? void 0 : i.ask : null === (r = this._currentQuotes) || void 0 === r ? void 0 : r.bid,
                        l = {
                            symbol: (0, s.ensureNotNull)(this._symbol),
                            qty: o,
                            side: t,
                            type: n,
                            seenPrice: null != a ? a : null,
                            currentQuotes: this._currentQuotes
                        };
                    1 === n && (l.limitPrice = e), await (0, s.ensureNotNull)(this._brokerCommandsUI()).placeOrder(l, !0)
                }
                _toggleState(e) {
                    e ? this._start() : this._stop()
                }
                _start() {
                    this._dataEvents.symbolResolved().subscribe(this, this._createTradedSymbol), this._dataEvents.symbolError().subscribe(this, this._createTradedSymbol), this._createTradedSymbol()
                }
                _stop() {
                    this._clearTradedSymbol(), this._symbol = null, this._dataEvents.symbolResolved().unsubscribeAll(this), this._dataEvents.symbolError().unsubscribeAll(this)
                }
                _createTradedSymbol() {
                    const e = this._getSymbolName();
                    e !== this._symbol && (this._clearTradedSymbol(), e.length > 0 && this._initTradedSymbol(e))
                }
                _initTradedSymbol(e) {
                    this._symbol = e, this._updateIsSymbolTraded(), this._realtimeProvider.subscribeRealtime(this._symbol, this._updateRealtimeDataHandler), this._resubscribeQtySuggester()
                }
                _clearTradedSymbol() {
                    var e;
                    this._currentQuotes = void 0, this.ask.setValue(null), this.bid.setValue(null), this.spread.setValue(null), this.qty.setValue(null), null !== this._symbol && (this._realtimeProvider.unsubscribeRealtime(this._symbol, this._updateRealtimeDataHandler), null === (e = this._qtySuggesterSubscription) || void 0 === e || e.unsubscribe(), this._symbol = null, this._updateIsSymbolTraded())
                }
                async _resubscribeQtySuggester() {
                    var e;
                    const t = this._symbol;
                    if (null === t) return;
                    null === (e = this._qtySuggesterSubscription) || void 0 === e || e.unsubscribe();
                    const i = this._suggestedQtyPromise = this._qtySuggester.getQty(t),
                        s = await i;
                    i === this._suggestedQtyPromise && t === this._symbol && (this._lastSuggestedQty = s, this.setQty(s), this._qtySuggesterSubscription = this._qtySuggester.suggestedQtyChanged(t).subscribe(this._onSuggestedQtyChange))
                }
                _isMarketOrderSupported() {
                    const e = this._realtimeProvider.activeBroker();
                    return null === e || Boolean(e.metainfo().configFlags.supportMarketOrders)
                }
                _updateTradePossibilityAndTooltip() {
                    this._updateCanTrade(), this._updateSellBuyTooltip()
                }
                _updateCanTrade() {
                    const e = this._isSymbolTradableResult.value(),
                        t = this._isBrokerConnected.value() && null !== e && e.tradable;
                    this.canTrade.setValue(t)
                }
                _updateSellBuyTooltip() {
                    var e, t;
                    const i = this._getNonTradedTooltip();
                    this.askTooltip.setValue(null !== (e = null != i ? i : this._getAskTooltip()) && void 0 !== e ? e : Ze),
                        this.bidTooltip.setValue(null !== (t = null != i ? i : this._getBidTooltip()) && void 0 !== t ? t : Je)
                }
                _getNonTradedTooltip() {
                    const e = this._isSymbolTradableResult.value();
                    if (null !== e && !e.tradable) return void 0 !== e.solutions ? "" : void 0 !== e.shortReason && "" !== e.shortReason ? e.shortReason : this._isBrokerConnected.value() ? ze : Ge
                }
                _getAskTooltip() {
                    return null === this.ask.value() ? Ke : void 0
                }
                _getBidTooltip() {
                    return null === this.bid.value() ? je : void 0
                }
                _updateRealtimeData(e, t, i) {
                    this._formatter = i.formatter, this._spreadFormatter = i.spreadFormatter;
                    const s = t.ask,
                        r = t.bid,
                        o = (0, qe.isNumber)(s),
                        n = (0, qe.isNumber)(r),
                        a = o ? this._formatter.format(s) : null,
                        l = n ? this._formatter.format(r) : null;
                    this.ask.setValue(a), this.bid.setValue(l), o && n && (this._currentQuotes = {
                        ask: s,
                        bid: r
                    });
                    const d = t.spread || (0, qe.isNumber)(s) && (0, qe.isNumber)(r) && s - r || 0,
                        c = (0, qe.isNumber)(t.spread) ? this._spreadFormatter : this._formatter;
                    this.spread.setValue(c.format(d));
                    let h = !1;
                    (0, Qe.isFormatterHasForexAdditionalPrecision)(this._formatter) && (h = this._formatter.hasForexAdditionalPrecision()), this.hasAskBidAdditionalPrecision.setValue(h)
                }
                async _updateIsSymbolTraded() {
                    if (null === this._symbol) return void this._isSymbolTradableResult.setValue(null);
                    const e = await this._realtimeProvider.isTradable(this._symbol);
                    this._isSymbolTradableResult.setValue((0, Ue.clone)(e))
                }
                _updateIsQtyVisible() {
                    const e = this._isInstantMode.value() && this.canTrade.value();
                    this.isQtyVisible.setValue(e)
                }
                _updateQtyTooltip() {
                    this.qtyTooltip.setValue(this._getQtyTooltip())
                }
                _getQtyTooltip() {
                    const e = this._realtimeProvider.activeBroker();
                    return null !== e && e.metainfo().configFlags.showQuantityInsteadOfAmount ? et : Ye
                }
                _updateBrokerIcon() {
                    if (!tt) return;
                    let e;
                    const t = this._realtimeProvider.activeBroker();
                    if (null !== t) {
                        const i = t.metainfo();
                        e = "dark" === this._themeName.value() && i.logoMiniBlackUrl ? i.logoMiniBlackUrl : i.logoMiniUrl
                    }
                    this.brokerIconVisible.setValue(this._isBrokerConnected.value()), this.brokerIconLoading.setValue(this._isBrokerConnecting.value()), this.brokerIconUrl.setValue(e || null)
                }
            }
            var st = i(159255),
                rt = i(343370),
                ot = i(499994),
                nt = i(100037),
                at = i(511694),
                lt = i(987320);
            class dt extends at.LoaderBaseRenderer {
                _renderLoading(e) {
                    super._renderLoading(e), this._loadingEl.innerHTML = `\n\t\t\t<span class="${lt.loaderCircle}"></span>\n\t\t`, this._loadingEl.classList.add(lt.loader)
                }
            }
            var ct = i(569421),
                ht = i(570731),
                ut = i(176006),
                _t = i(899516),
                pt = i(262927),
                gt = i(228161),
                mt = i(829883);
            const bt = parseInt(gt["css-value-padding"]),
                yt = !(0, $e.isMobileTradingAvailable)();

            function vt(e, t, i, r) {
                let o = e.querySelector(`.${r}`);
                if (!i) return null !== o && o.remove(), void(0, ut.updateTextNode)(e, t);
                null === o && (o = document.createElement("span"), o.classList.add(r), e.appendChild(o)), (0, ut.updateTextNode)((0, s.ensureNotNull)(o), t.slice(-1)), (0, ut.updateTextNode)(e, t.slice(0, -1))
            }
            class ft {
                constructor({
                    model: e,
                    highButtonsMode: t,
                    trackEvent: i,
                    toggleMinimizeBottomWidgetBar: s
                }) {
                    this.element = document.createElement("div"), this._sellButtonEl = document.createElement("div"), this._sellButtonTextEl = document.createElement("span"), this._buyButtonEl = document.createElement("div"),
                        this._buyButtonTextEl = document.createElement("span"), this._spreadQtyWrapper = document.createElement("div"), this._spreadEl = document.createElement("div"), this._qtyEl = document.createElement("div"), this._qtyTextEl = document.createElement("span"), this._brokerButtonEl = document.createElement("div"), this._brokerIconWrapEl = document.createElement("div"), this._isCalcOpened = !1, this._calcContainer = document.createElement("div"), this._sellLoader = new nt.LoaderPointsRenderer(this._sellButtonEl, {
                            className: _t.loader
                        }), this._buyLoader = new nt.LoaderPointsRenderer(this._buyButtonEl, {
                            className: _t.loader
                        }), this._brokerLoader = new dt(this._brokerButtonEl, {
                            className: _t.circleLoader
                        }), this._windowResizeHandlerThrottle = (0, rt.default)(this._windowResizeHandler.bind(this), 100), this._isHiddenByViewport = !1, this._mode = 2, this._height = new(P())(0), this._resizeObserver = null, this._cachedBreakPoints = {}, this._parentWidth = 0, this._getCurrentQty = () => {
                            const e = this._qty.value();
                            return null !== e ? Number(e) : null
                        }, this._model = e, this._toggleMinimizeBottomWidgetBar = s, this._ask = this._model.ask.spawn(), this._ask.subscribe(this._updateBuyButton.bind(this)), this._bid = this._model.bid.spawn(), this._bid.subscribe(this._updateSellButton.bind(this)), this._spread = this._model.spread.spawn(), this._spread.subscribe(this._updateSpread.bind(this)), this._qty = this._model.qty.spawn(), this._qty.subscribe(this._updateQty.bind(this)), this._brokerIconVisible = this._model.brokerIconVisible.spawn(), this._brokerIconVisible.subscribe(this._updateBrokerIconImage.bind(this)), this._brokerIconLoading = this._model.brokerIconLoading.spawn(), this._brokerIconLoading.subscribe(this._updateBrokerIconImage.bind(this)), this._brokerIconUrl = this._model.brokerIconUrl.spawn(), this._brokerIconUrl.subscribe(this._updateBrokerIconImage.bind(this), {
                            callWithLast: !0
                        }), this._trackEvent = i, this._render(), this._askTooltip = this._model.askTooltip.spawn(), this._askTooltip.subscribe(this._updateButtonTooltip.bind(this, this._buyButtonEl), {
                            callWithLast: !0
                        }), this._bidTooltip = this._model.bidTooltip.spawn(), this._bidTooltip.subscribe(this._updateButtonTooltip.bind(this, this._sellButtonEl), {
                            callWithLast: !0
                        }), this._spreadTooltip = this._model.spreadTooltip.spawn(), this._spreadTooltip.subscribe(this._updateButtonTooltip.bind(this, this._spreadEl), {
                            callWithLast: !0
                        }), this._qtyTooltip = this._model.qtyTooltip.spawn(), this._qtyTooltip.subscribe(this._updateButtonTooltip.bind(this, this._qtyEl), {
                            callWithLast: !0
                        }), this._isVisible = this._model.visible.spawn(), this._isVisible.subscribe(this._updateVisibility.bind(this), {
                            callWithLast: !0
                        }), this._isQtyVisible = this._model.isQtyVisible.spawn(), this._isQtyVisible.subscribe(this._updateQtyVisibility.bind(this), {
                            callWithLast: !0
                        }), this._isLastDigitSup = this._model.hasAskBidAdditionalPrecision.spawn(), this._isLastDigitSup.subscribe(this._updateLastDigitSup.bind(this)), this._highButtonsMode = t.spawn(), this._highButtonsMode.subscribe(this._updateHighButtonsMode.bind(this), {
                            callWithLast: !0
                        }), this._canTrade = this._model.canTrade.spawn(), this._canTrade.subscribe(this._updateBgButtonsMode.bind(this), {
                            callWithLast: !0
                        }),
                        this._sellButtonHandler = this._onSellButton.bind(this), this._buyButtonHandler = this._onBuyButton.bind(this), this._qtyHandler = this._toggleCalcVisibility.bind(this), this._brokerButtonHandler = this._onBrokerButton.bind(this), this._sellButtonEl.addEventListener("click", this._sellButtonHandler), this._buyButtonEl.addEventListener("click", this._buyButtonHandler), this._qtyEl.addEventListener("click", this._qtyHandler), this._brokerButtonEl.addEventListener("click", this._brokerButtonHandler), window.addEventListener("resize", this._windowResizeHandlerThrottle), this._windowResizeHandler()
                }
                destroy() {
                    var e;
                    this._ask.destroy(), this._askTooltip.destroy(), this._bid.destroy(), this._bidTooltip.destroy(), this._spread.destroy(), this._spreadTooltip.destroy(), this._qty.destroy(), this._qtyTooltip.destroy(), this._isVisible.destroy(), this._isQtyVisible.destroy(), this._isLastDigitSup.destroy(), this._highButtonsMode.destroy(), this._canTrade.destroy(), this._brokerIconUrl.destroy(), this._sellButtonEl.removeEventListener("click", this._sellButtonHandler), this._buyButtonEl.removeEventListener("click", this._buyButtonHandler), this._qtyEl.removeEventListener("click", this._qtyHandler), this._brokerButtonEl.removeEventListener("click", this._brokerButtonHandler), null === (e = this._resizeObserver) || void 0 === e || e.disconnect(), this._resizeObserver = null, this.element.remove(), delete this.element, window.removeEventListener("resize", this._windowResizeHandlerThrottle)
                }
                updateModeByWidth(e) {
                    const t = this._cachedBreakPoints[0],
                        i = this._cachedBreakPoints[1];
                    this._mode = void 0 !== t && e < t ? 0 : void 0 !== i && e < i ? 1 : 2, this._parentWidth = e, this.element.classList.toggle(_t.column, 1 === this._mode), this._updateVisibility()
                }
                height() {
                    return this._height
                }
                renderTo(e, t) {
                    void 0 !== t ? e.insertBefore(this.element, t) : e.appendChild(this.element), null === this._resizeObserver && (this._resizeObserver = new st.default(this._updateBreakPointsAndSize.bind(this))), this._resizeObserver.unobserve(this.element), this._resizeObserver.observe(this.element)
                }
                isHiddenByViewport() {
                    return this._isHiddenByViewport
                }
                _render() {
                    const e = this._bid.value() || "...";
                    this._sellButtonTextEl.appendChild(document.createTextNode(e)), this._sellButtonTextEl.classList.add(_t.buttonText), this._sellButtonEl.append(this._sellButtonTextEl), this._sellButtonEl.classList.add("apply-common-tooltip", _t.button, _t.sellButton);
                    const t = this._spread.value() || "";
                    this._spreadEl.appendChild(document.createTextNode(String(t))), this._spreadEl.classList.add("apply-common-tooltip", _t.spread);
                    const i = this._qty.value() || "";
                    this._qtyTextEl.appendChild(document.createTextNode(i)), this._qtyEl.append(this._qtyTextEl), this._qtyEl.setAttribute("data-name", "qtyEl"), this._qtyEl.classList.add("apply-common-tooltip", _t.button, _t.qty), this._spreadQtyWrapper.classList.add(_t.spreadQtyWrapper), this._spreadQtyWrapper.appendChild(this._spreadEl), this._spreadQtyWrapper.appendChild(this._qtyEl);
                    const s = this._ask.value() || "...";
                    this._buyButtonTextEl.appendChild(document.createTextNode(String(s))), this._buyButtonTextEl.classList.add(_t.buttonText),
                        this._buyButtonEl.append(this._buyButtonTextEl), this._buyButtonEl.classList.add("apply-common-tooltip", _t.button, _t.buyButton), this._brokerButtonEl.appendChild(this._brokerIconWrapEl), this._brokerIconWrapEl.classList.add(_t.brokerButtonIconWrap), this._brokerButtonEl.classList.add(_t.brokerButton), this.element.appendChild(this._sellButtonEl), this.element.appendChild(this._spreadQtyWrapper), this.element.appendChild(this._buyButtonEl), this.element.appendChild(this._brokerButtonEl), this.element.classList.add(_t.wrapper), this.element.classList.toggle(_t.touchMode, ct.trackingModeIsAvailable), this.element.classList.toggle(_t.notAvailableOnMobile, yt)
                }
                _updateBreakPointsAndSize(e) {
                    const t = e[0],
                        i = 2 * bt;
                    2 === this._mode && (this._cachedBreakPoints[1] = Math.round(t.contentRect.width) + i), 1 === this._mode && (this._cachedBreakPoints[0] = Math.round(t.contentRect.width) + i), this.updateModeByWidth(this._parentWidth);
                    const s = t.contentRect.height > 0 ? Math.round(t.contentRect.height) + i : 0;
                    this._height.setValue(s)
                }
                _updateBrokerIconImage() {
                    const e = this._brokerIconLoading.value(),
                        t = !this._brokerIconVisible.value() && !e;
                    if (this._brokerButtonEl.classList.toggle(pt.blockHidden, t), t) return;
                    if (this._toggleLoaderVisibility(this._brokerButtonEl, this._brokerLoader, e), e) return void(this._brokerIconWrapEl.innerHTML = "");
                    const i = this._brokerIconUrl.value(),
                        s = null === i;
                    this._brokerIconWrapEl.innerHTML = s ? mt : `<image src="${i}" alt="Account Manager" />`, this._brokerButtonEl.classList.toggle(_t.brokerButtonDefault, s)
                }
                async _onSellButton() {
                    if (null === this._bid.value()) return;
                    const e = this._highButtonsMode.value();
                    this._trackEvent("Sell/Buy Buttons", "Sell", e ? "Instant" : "Not Instant"), e && this._canTrade.value() && this._toggleLoaderVisibility(this._sellButtonEl, this._sellLoader, !0), await this._model.tryToPlaceSellOrder(), e && this._canTrade.value() && setTimeout((() => this._toggleLoaderVisibility(this._sellButtonEl, this._sellLoader, !1)), 300)
                }
                async _onBuyButton() {
                    if (null === this._ask.value()) return;
                    const e = this._highButtonsMode.value();
                    this._trackEvent("Sell/Buy Buttons", "Buy", e ? "Instant" : "Not Instant"), e && this._canTrade.value() && this._toggleLoaderVisibility(this._buyButtonEl, this._buyLoader, !0), await this._model.tryToPlaceBuyOrder(), e && this._canTrade.value() && setTimeout((() => this._toggleLoaderVisibility(this._buyButtonEl, this._buyLoader, !1)), 300)
                }
                _onBrokerButton() {
                    this._model.canShowMobileTrading() ? (0, ht.showTradingPanelPopup)() : this._toggleMinimizeBottomWidgetBar()
                }
                _toggleLoaderVisibility(e, t, i) {
                    e.classList.toggle(_t.loading, i), t.toggleVisibility(i)
                }
                _updateBuyButton(e) {
                    const t = null !== e && this._isLastDigitSup.value();
                    vt(this._buyButtonTextEl, `${e||"..."}`, t, _t.lastCharSup)
                }
                _updateSellButton(e) {
                    const t = null !== e && this._isLastDigitSup.value();
                    vt(this._sellButtonTextEl, `${e||"..."}`, t, _t.lastCharSup)
                }
                _updateSpread(e) {
                    const t = `${e||""}`;
                    (0, ut.updateTextNode)(this._spreadEl, t), this._updateVisibilityForSpreadQtyWrapper()
                }
                _updateQty(e) {
                    let t = `${e||""}`;
                    !this._isCalcOpened && t.length > 0 && (t = (0, w.abbreviatedNumber)(Number(t))), (0, ut.updateTextNode)(this._qtyTextEl, t)
                }
                _updateHighButtonsMode(e) {
                    this.element.classList.toggle(_t.highButtons, e)
                }
                _updateBgButtonsMode(e) {
                    this.element.classList.toggle(_t.withoutBg, !e)
                }
                _updateVisibilityForSpreadQtyWrapper() {
                    const e = !this._isQtyVisible.value() && null === this._spread.value();
                    this._spreadQtyWrapper.classList.toggle(pt.blockHidden, e)
                }
                _updateQtyVisibility(e) {
                    this._qtyEl.classList.toggle(pt.blockHidden, !e), this._spreadQtyWrapper.classList.toggle(_t.withoutQty, !e), this._updateVisibilityForSpreadQtyWrapper()
                }
                _updateVisibility() {
                    const e = this._isVisible.value() && 0 !== this._mode && !this._isHiddenByViewport;
                    this.element.classList.toggle(pt.blockHidden, !e)
                }
                _updateLastDigitSup() {
                    this._updateBuyButton(this._ask.value()), this._updateSellButton(this._bid.value())
                }
                _updateButtonTooltip(e, t) {
                    if ("" === t) return (0, ot.setTooltipData)(e, "text", t), void e.removeAttribute("title");
                    e.setAttribute("title", t)
                }
                _toggleCalcVisibility() {
                    this._isCalcOpened = !this._isCalcOpened, this._renderCalc()
                }
                _closeCalc() {
                    this._isCalcOpened = !1, this._updateQty(this._qty.value()), this._model.applyQty(), this._renderCalc()
                }
                _renderCalc() {
                    Promise.all([i.e(7624), i.e(12275), i.e(33335), i.e(83772), i.e(33287), i.e(28385), i.e(43768), i.e(6086), i.e(42353), i.e(14108), i.e(93809)]).then(i.bind(i, 290567)).then((async e => {
                        const t = await this._model.getQtyInfo();
                        null !== t && e.render(this._isCalcOpened, this._calcContainer, { ...t,
                            withInput: !0,
                            valueGetter: this._getCurrentQty,
                            position: this._getCalcPosition(),
                            targetEl: this._qtyEl,
                            onClose: this._closeCalc.bind(this),
                            onValueChange: this._model.setQty,
                            trackEventTarget: "Sell/Buy Buttons",
                            trackEvent: this._trackEvent
                        })
                    }))
                }
                _getCalcPosition() {
                    const e = this._qtyEl.getBoundingClientRect();
                    return {
                        x: e.left,
                        y: e.bottom + 2
                    }
                }
                _windowResizeHandler() {
                    const e = yt && (window.innerWidth < 567 || window.innerHeight < 440);
                    this._isHiddenByViewport !== e && (this._isHiddenByViewport = e, this._updateVisibility())
                }
            }
            var wt = i(310399);
            const kt = r.t(null, void 0, i(653709));
            class Bt {
                constructor(e, t, i, s, r, o, n) {
                    this._showSellBuyButtons = o.showSellBuyButtons, this._isEconomySymbol = i, this._isInReplay = n, this._trackEvent = r.trackEvent, this._model = new it({
                        dataEvents: e,
                        getSymbolName: t,
                        isNonTradableInstrument: i,
                        qtySuggester: s,
                        tradingCommands: r,
                        settings: o,
                        isInReplay: n
                    }), this._renderer = new ft({
                        model: this._model,
                        highButtonsMode: o.noConfirmEnabled,
                        trackEvent: r.trackEvent,
                        toggleMinimizeBottomWidgetBar: r.toggleMinimizeBottomWidgetBar
                    })
                }
                destroy() {
                    this._model.destroy(), this._renderer.destroy()
                }
                renderTo(e, t) {
                    this._renderer.renderTo(e, t)
                }
                setGlobalVisibility(e) {
                    this._model.setGlobalVisibility(e)
                }
                visibility() {
                    return this._model.visible
                }
                updateWidgetModeBySize(e) {
                    this._renderer.updateModeByWidth(e.width)
                }
                contextMenuActions() {
                    if (this._renderer.isHiddenByViewport()) return [];
                    return [new wt.Action({
                        actionId: "Trading.SellBuyButtonsToggleVisibility",
                        checkable: !0,
                        checked: this._showSellBuyButtons.value(),
                        label: kt,
                        disabled: this._isInReplay.value() || this._isEconomySymbol.value(),
                        onExecute: () => {
                            const e = !this._showSellBuyButtons.value();
                            this._showSellBuyButtons.setValue(e), this._trackEvent("SellBuyButtonsWidget context menu", "Show Sell/Buy Button", e ? "Check" : "Uncheck")
                        }
                    })]
                }
                height() {
                    return this._renderer.height()
                }
            }
            var Pt = i(500962),
                St = i(633457),
                Ct = i(619027),
                Tt = i(864852);
            const Et = de.forwardRef(((e, t) => de.createElement("div", {
                ref: t,
                className: Tt.popupWrapper
            }, e.children)));
            var Lt = i(670797);
            const Vt = (() => {
                    let e, t, s, r = null,
                        o = null;
                    return async (n, a, l, d) => {
                        const c = null == n ? void 0 : n.currentAccount();
                        if (null === r || o !== n || e !== c || s !== d) {
                            null == t || t.remove();
                            const {
                                AccountManager: h
                            } = await Promise.all([i.e(7624), i.e(59333), i.e(96972), i.e(75398), i.e(85761), i.e(6092), i.e(64884), i.e(36720), i.e(54819), i.e(68825), i.e(53795), i.e(105), i.e(47507), i.e(41770), i.e(56034), i.e(24013), i.e(28671), i.e(90133), i.e(31630), i.e(8580), i.e(14050), i.e(18278), i.e(61486), i.e(27631), i.e(67953), i.e(43691), i.e(9669), i.e(47488), i.e(25292), i.e(33375), i.e(88354)]).then(i.bind(i, 900732)), u = {
                                container: a,
                                visible: new(P())(!0)
                            };
                            r = a, o = n, e = c, s = d, t = await h.create({
                                broker: n,
                                bridge: u,
                                mode: 0,
                                overlapManager: l,
                                summaryFieldsVisibilityManager: d
                            })
                        } else a.appendChild(r)
                    }
                })(),
                It = new(P())(null);

            function Nt(e) {
                const {
                    broker: t,
                    summaryFieldsVisibilityManager: i
                } = e, s = (0, de.useRef)(null), r = (0, de.useContext)(Lt.SlotContext);
                return (0, de.useEffect)((() => {
                    It.setValue(r)
                }), [r]), (0, de.useEffect)((() => {
                    null !== s.current && Vt(t, s.current, It.readonly(), i)
                }), []), de.createElement(Et, {
                    ref: s
                })
            }
            var At = i(443549),
                Ot = i(297948),
                xt = i(131036);
            const Dt = r.t(null, void 0, i(890801));
            class Rt extends St.DialogRenderer {
                constructor(e) {
                    super(), this._title = Dt, this._isSubscribed = !1, this._showSeparator = !0, this._unsetHeaderAlign = !0, this._handleClose = () => {
                        Pt.unmountComponentAtNode(this._container), this._setVisibility(!1)
                    }, this._trading = e
                }
                visible() {
                    return this._visibility.spawn().readonly()
                }
                show() {
                    this._isSubscribed || (this._isSubscribed = !0, this._onStatusChange(this._trading.connectStatus()), this._trading.onConnectionStatusChange.subscribe(this, this._onStatusChange)), this._setVisibility(!0), this._renderComponent()
                }
                hide() {
                    this._handleClose()
                }
                _onStatusChange(e, t) {
                    var i, s;
                    if (null === (i = this._trading.activeBroker()) || void 0 === i || i.currentAccountUpdate.unsubscribe(this, this._renderAccountManager), this._connectStatus !== e)
                        if (this._connectStatus = e, 2 !== e && (null == t ? void 0 : t.disconnectType) !== u.DisconnectType.Offline) {
                            if (3 === e || 4 === e) {
                                if ((null == t ? void 0 : t.disconnectType) === u.DisconnectType.BrokenConnection) return void this._renderSpinner();
                                this._renderBrokerSelectScreen()
                            }
                            1 === e && (null === (s = this._trading.activeBroker()) || void 0 === s || s.currentAccountUpdate.subscribe(this, this._renderAccountManager), this._renderAccountManager())
                        } else this._renderSpinner()
                }
                _renderComponent() {
                    Pt.render(de.createElement(Ct.AdaptivePopupDialog, {
                        dataName: "trading-dialog",
                        isOpened: this.visible().value(),
                        onClose: this._handleClose,
                        showSeparator: this._showSeparator,
                        unsetHeaderAlign: this._unsetHeaderAlign,
                        fullScreen: !0,
                        draggable: !1,
                        title: this._title,
                        render: () => this._content
                    }), this._container)
                }
                _renderSpinner() {
                    this._unsetHeaderAlign = !1, this._showSeparator = !0, this._title = Dt, this._changeDialogContent(de.createElement(At.Spinner, null))
                }
                _renderOfflineScreen() {
                    this._title = Dt, this._changeDialogContent(de.createElement(OfflineScreen, null))
                }
                async _renderBrokerSelectScreen() {
                    {
                        const {
                            BrokerSelectScreenRenderer: e
                        } = await Promise.all([i.e(3616), i.e(15309), i.e(71754)]).then(i.bind(i, 791497)), t = new e(null, this._trading, new(P())(!0)), s = await t.createComponent();
                        this._showSeparator = !0, this._unsetHeaderAlign = !1, this._title = Dt, this._changeDialogContent(s)
                    }
                }
                async _renderAccountManager() {
                    const e = (0, s.ensureNotNull)(this._trading.activeBroker()).accountManagerInfo().summary,
                        t = new xt.SummaryFieldsVisibilityManager(e, this._trading.getBrokerTradingSettingsStorage),
                        r = await (0, Ot.makeAccountManagerHeaderDropdownsProps)(this._trading, t);
                    if (this._showSeparator = !1, this._unsetHeaderAlign = !0, this._title = Dt, void 0 !== r) {
                        const {
                            AccountManagerHeaderDropdowns: e
                        } = await Promise.all([i.e(7624), i.e(59333), i.e(96972), i.e(75398), i.e(85761), i.e(6092), i.e(64884), i.e(36720), i.e(54819), i.e(68825), i.e(53795), i.e(105), i.e(47507), i.e(41770), i.e(56034), i.e(24013), i.e(28671), i.e(90133), i.e(31630), i.e(8580), i.e(14050), i.e(18278), i.e(61486), i.e(27631), i.e(67953), i.e(43691), i.e(9669), i.e(47488), i.e(25292), i.e(33375), i.e(88354)]).then(i.bind(i, 169914));
                        this._title = de.createElement(e, { ...r
                        })
                    }
                    this._content = de.createElement(Nt, {
                        broker: this._trading.activeBroker(),
                        summaryFieldsVisibilityManager: t
                    }), this._renderComponent()
                }
                _changeDialogContent(e) {
                    this._content = de.createElement(Et, null, e), this._renderComponent()
                }
            }
            var Mt, Ft = i(511485),
                Wt = i(638456),
                qt = i(139195);
            async function Ht(e, t) {
                localStorage.setItem(e, await (0, qt.userSpecificEncrypt)(t))
            }! function(e) {
                e.get = async function() {
                    return Wt.CheckMobile.any() || await async function() {
                        const e = n.getValue(I.settingsKeys.ACTIVE_BROKER);
                        if (n.remove(I.settingsKeys.ACTIVE_BROKER, {
                                forceFlush: !0
                            }), void 0 === e) return;
                        await Ht(I.settingsKeys.ACTIVE_BROKER, e)
                    }(), async function(e) {
                        0;
                        const t = localStorage.getItem(e);
                        if (null === t) return null;
                        const i = await (0, qt.userSpecificDecrypt)(t);
                        null === i && localStorage.removeItem(e);
                        return i
                    }(I.settingsKeys.ACTIVE_BROKER)
                }, e.set = async function(e) {
                    await Ht(I.settingsKeys.ACTIVE_BROKER, e)
                }, e.clear = function() {
                    n.remove(I.settingsKeys.ACTIVE_BROKER, {
                        forceFlush: !0
                    }), localStorage.removeItem(I.settingsKeys.ACTIVE_BROKER)
                }
            }(Mt || (Mt = {}));
            var Qt = i(960521),
                Ut = i.n(Qt),
                $t = i(173587),
                Gt = i(233064),
                zt = i(757604),
                jt = i(218286),
                Kt = i(169977),
                Zt = i(312694),
                Jt = i(410923),
                Xt = i(265728),
                Yt = i(482165),
                ei = i(839874),
                ti = i(43329),
                ii = i(812301);
            class si {
                constructor(e) {
                    this._rawAndFilteredQtyMap = new Map, this._qtyInfo = new Map;
                    const {
                        symbolInfoGetter: t,
                        onResetNeeded: i,
                        qtySettingsStorageGetter: s
                    } = e;
                    this._getQtySettingsStorage = s, this._getSymbolInfo = t, i.subscribe(this, this._reset)
                }
                async getQty(e) {
                    return (0, Jt.firstValueFrom)(this._getRawAndFilteredQty(e).filteredQty$)
                }
                setQty(e, t) {
                    this._getRawAndFilteredQty(e).rawQty$.next(t)
                }
                suggestedQtyChanged(e) {
                    return this._getRawAndFilteredQty(e).filteredQty$.pipe((0, $t.skip)(1))
                }
                _getRawAndFilteredQty(e) {
                    var t;
                    return null !== (t = this._rawAndFilteredQtyMap.get(e)) && void 0 !== t ? t : this._makeRawAndFilteredQty(e)
                }
                _makeRawAndFilteredQty(e) {
                    const t = new Xt.ReplaySubject(1),
                        i = this._getInitialQty(e).pipe((0, Gt.switchMap)((e => t.pipe((0, zt.startWith)(e)))), (0,
                            jt.distinctUntilChanged)(), (0, Kt.filter)((t => this._isQtyCorrect(e, t))), (0, Yt.tap)((t => {
                            var i;
                            return null === (i = this._getQtySettingsStorage()) || void 0 === i ? void 0 : i.setSymbolQty(e, t)
                        })), (0, Zt.share)({
                            connector: () => new Xt.ReplaySubject(1),
                            resetOnRefCountZero: !1
                        })),
                        s = {
                            rawQty$: t,
                            filteredQty$: i
                        };
                    return this._rawAndFilteredQtyMap.set(e, s), s
                }
                _isQtyCorrect(e, t) {
                    const i = (0, s.ensureDefined)(this._qtyInfo.get(e));
                    return !(0, ii.checkQtyError)(i, t, !0).res
                }
                _getInitialQty(e) {
                    return (0, ei.from)(this._getSymbolInfo(e)).pipe((0, h.map)((({
                        qty: t
                    }) => {
                        var i;
                        this._qtyInfo.set(e, t);
                        const s = null === (i = this._getQtySettingsStorage()) || void 0 === i ? void 0 : i.symbolQty(e),
                            r = t.default || t.min;
                        return void 0 !== s && s > 0 ? (o = (0, ti.clamp)(s, t.min, t.max), n = t.min, a = t.step, Ut()(o).minus(n).div(a).round(0, 1).mul(a).plus(n).toNumber()) : r;
                        var o, n, a
                    })))
                }
                _reset() {
                    this._rawAndFilteredQtyMap.forEach((({
                        rawQty$: e
                    }) => e.complete())), this._rawAndFilteredQtyMap.clear(), this._qtyInfo.clear()
                }
            }
            var ri = i(316230);
            class oi {
                constructor() {
                    this._context = null, this._onContextChanged = new(C()), this._contextChange = () => {
                        this._onContextChanged.fire(this.context())
                    }
                }
                context() {
                    var e, t;
                    return null !== (t = null === (e = this._context) || void 0 === e ? void 0 : e.externalContext()) && void 0 !== t ? t : null
                }
                setContext(e) {
                    var t;
                    this._isEqualContexts(e) || (this._clearSubscription(), this._context = e, null === (t = this._context) || void 0 === t || t.onStatusChange().subscribe(this, this._contextChange), this._contextChange())
                }
                onContextChanged() {
                    return this._onContextChanged
                }
                clear() {
                    this.setContext(null)
                }
                _clearSubscription() {
                    var e;
                    null === (e = this._context) || void 0 === e || e.onStatusChange().unsubscribeAll(this)
                }
                _isEqualContexts(e) {
                    var t;
                    return null === this._context || null === e ? this._context === e : (null === (t = this.context()) || void 0 === t ? void 0 : t.type) === (null == e ? void 0 : e.externalContext().type) && (this._context.status() === e.status() && (0, ri.default)(this._context.errors(), e.errors()) && (0, ri.default)(this._context.data(), e.data()))
                }
            }
            var ni = i(314802),
                ai = i(890740),
                li = i(425623);
            const di = {
                logIn: r.t(null, void 0, i(571891)),
                GotIt: r.t(null, void 0, i(875139))
            };
            class ci {
                constructor() {
                    this._hintTooltip = null, this._tooltipRendererModulePromise = null
                }
                drawAttention() {
                    const e = document.querySelector("." + _.bottomTradingTabClassName);
                    this._loadOrShowHint(e, li.TradingWizardHintType.NeedBrokerSignIn)
                }
                needSignIn(e, t) {
                    this._loadOrShowHint(e, li.TradingWizardHintType.NeedSignIn, {
                        action: t,
                        text: di.logIn
                    })
                }
                showTooltipOverSelectBrokerButton(e) {
                    this._loadOrShowHint(e, li.TradingWizardHintType.AboutFavoritesBrokers)
                }
                destroy() {
                    null !== this._hintTooltip && this._hintTooltip.destroy()
                }
                _loadOrShowHint(e, t, s, r) {
                    null !== e && f.enabled("popup_hints") && (this._hintTooltip ? this._hintTooltip.show(e, t, s, r) : null === this._tooltipRendererModulePromise && (this._tooltipRendererModulePromise = Promise.resolve().then(i.bind(i, 425623)).then((i => {
                        this._hintTooltip = new i.TradingToolipRenderer, this._hintTooltip.show(e, t, s, r)
                    }))))
                }
            }
            var hi = i(254601),
                ui = i(711803),
                _i = i(653501),
                pi = i(960254),
                gi = i(3566),
                mi = i(621681);
            async function bi(e) {
                const t = { ...e,
                    timestamp: Date.now()
                };
                return t.tvUsername = (await (0,
                    gi.signDataWithSha256Hmac)(t.tvUsername, "dBuCh3nK0")).toBase64(), t
            }

            function yi(e, t) {
                const i = Math.ceil(e),
                    s = Math.floor(t);
                return Math.floor(Math.random() * (s - i)) + i
            }
            let vi;

            function fi(e) {
                return vi = null != vi ? vi : new TextEncoder, vi.encode(e).length
            }

            function wi(e, t, i) {
                const {
                    payload: s,
                    action: r,
                    ...o
                } = e;
                return { ...o,
                    action: "internal-message.large-log",
                    payload: {
                        message: `Too large log, size ${t} bytes is larger than maximum size ${i} bytes`,
                        triggeredLog: JSON.stringify({
                            action: r,
                            payload: s
                        }).slice(0, 1e3) + "..."
                    }
                }
            }
            class ki extends class {
                constructor(e) {
                    this._events = [], this._delayedLogsInfo = new Map, this._isPageUnloading = !1, this._retries = 0, this._pushInterval = yi(5e3, 1e4), this._restorePushingInterval = yi(18e5, 27e5), this._delayLog = async e => {
                        const t = this._delayedLogsInfo.get(e);
                        if (void 0 !== t) return this._delayedLogsInfo.delete(e), this._log(t.event)
                    }, this._pageUnloadingHandler = async () => {
                        this._isPageUnloading || "visible" === document.visibilityState || 0 === this._events.length || (this._isPageUnloading = !0, this._addDelayedEventsToQueue(), await this._push(), this._isPageUnloading = !1)
                    }, this._logger = e, document.addEventListener("beforeunload", this._pageUnloadingHandler), document.addEventListener("visibilitychange", this._pageUnloadingHandler)
                }
                async log(e) {
                    const t = await bi(e);
                    return this._log(t)
                }
                async debounceLog(e, t, i) {
                    const s = await bi(e),
                        r = this._delayedLogsInfo.get(t);
                    if (void 0 !== r) return void(r.event = s);
                    const o = {
                        event: s
                    };
                    this._delayedLogsInfo.set(t, o), o.timerId = setTimeout(this._delayLog, i, t)
                }
                async _log(e) {
                    this._events.push(e), this._setPushTimer()
                }
                _addDelayedEventsToQueue() {
                    const e = Array.from(this._delayedLogsInfo.values()).map((({
                        event: e,
                        timerId: t
                    }) => (clearTimeout(t), e)));
                    this._delayedLogsInfo.clear(), this._events.concat(e)
                }
                _setPushTimer() {
                    void 0 === this._pushTimerId && (this._pushTimerId = setTimeout((async () => {
                        this._pushTimerId = void 0, await this._push()
                    }), this._pushInterval))
                }
                _setRestorePushingTimer() {
                    void 0 === this._restorePushingTimerId && (this._logger.logInfo(`Stop pushing logs. Will try to restore pushing after ${Math.round(this._restorePushingInterval/60/1e3)} minutes`), this._restorePushingTimerId = setTimeout((() => {
                        this._logger.logInfo("Restore pushing logs."), this._restorePushingTimerId = void 0, this._events = [], this._retries = 0
                    }), this._restorePushingInterval))
                }
                async _push() {
                    if (await (0, mi.waitForOnline)(), 0 === this._events.length || this._retries >= 5) return;
                    const e = this._events;
                    try {
                        this._events = [], await this._send(e, this._isPageUnloading), this._retries = 0, 0 !== this._events.length && this._setPushTimer()
                    } catch (t) {
                        if (this._retries++, this._logger.logError(`Failed to send events to Server logger: ${(0,m.getErrorMessage)(t)}. Retries count: ${this._retries}`), this._retries >= 5) return void this._setRestorePushingTimer();
                        this._events.push(...e), this._setPushTimer()
                    }
                }
            } {
                constructor(e, t) {
                    super(t), this._url = e
                }
                async _send(e, t) {
                    const {
                        convertedEvents: i,
                        remainingEvents: r
                    } = function(e, t) {
                        const i = [...e],
                            r = [];
                        let o = 0;
                        for (let n = 0; n < e.length; n++) {
                            let e = (0, s.ensureDefined)(i.shift(), "Logger event"),
                                n = JSON.stringify(e),
                                a = fi(n);
                            if (a > t && (e = wi(e, a, t), n = JSON.stringify(e), a = fi(n)), o += a, o > t) {
                                i.unshift(e);
                                break
                            }
                            r.push({
                                data: e
                            })
                        }
                        return {
                            convertedEvents: JSON.stringify(r),
                            remainingEvents: i
                        }
                    }(e, 5242880);
                    this._events.unshift(...r);
                    const o = new Blob([i], {
                        type: "application/json"
                    });
                    let n = !1;
                    if (t && o.size < 32768) n = navigator.sendBeacon(this._url, o);
                    else {
                        n = (await fetch(this._url, {
                            method: "POST",
                            body: o
                        })).ok
                    }
                    if (!n) throw new Error("The data wasn't queued for transfer.")
                }
            }
            var Bi = i(638910),
                Pi = (i(164055), i(175203));
            class Si {
                constructor(e) {
                    this._subscribedBroker = null, this._trading = e, this._trading.onConnectionStatusChange.subscribe(this, this._onStatusChange)
                }
                sendReport(e, t) {
                    this._sendReport(e, t)
                }
                _onStatusChange(e, t) {
                    if (null !== this._subscribedBroker && (this._subscribedBroker.tradingOperationFinished.unsubscribe(this, this._sendOperationReport), this._subscribedBroker = null), 1 === e) {
                        const e = (0, s.ensureNotNull)(this._trading.activeBroker());
                        e.tradingOperationFinished.subscribe(this, this._sendOperationReport), this._subscribedBroker = e, this._sendReport("connection_success")
                    }
                    4 === e && (this._sendReport("connection_fail"), "Paper" === (0, s.ensureNotNull)(this._trading.activeBroker()).metainfo().id && this._trading.trackEvent("BrokerTelemetry", "Paper Connection Error", navigator.onLine.toString())), (null == t ? void 0 : t.disconnectType) !== u.DisconnectType.BrokenConnection || Wt.CheckMobile.any() && "hidden" === document.visibilityState || this._sendReport("broken_connection")
                }
                _sendOperationReport(e) {
                    this._sendReport(e ? "operation_success" : "operation_fail")
                }
                _sendReport(e, t) {
                    const i = this._subscribedBroker || this._trading.activeBroker();
                    if (null === i) return;
                    const s = (i.metainfo().telemetryId || i.metainfo().id).toLowerCase();
                    Pi.telemetry.sendReport("trading", `${s}_${e}`, void 0 !== t ? {
                        value: t
                    } : void 0)
                }
            }
            var Ci = i(226722);
            class Ti {
                constructor(e) {
                    Ci.TVXWindowEvents.on("CheckConcurrentSession", (t => {
                        const i = e();
                        if (null === i) return;
                        const s = i.metainfo().id,
                            r = i.metainfo().configFlags.supportConcurrentSession,
                            o = i.connectionStatus();
                        (1 === o || 2 === o) && s === t && !r && Ci.TVXWindowEvents.emit("ConcurrentSessionNotAllowed")
                    }))
                }
                async isConcurrentSessionAllowed(e) {
                    let t, i;
                    const s = new Promise((e => {
                        t = e, i = setTimeout((() => e(!0)), 100)
                    }));
                    return Ci.TVXWindowEvents.on("ConcurrentSessionNotAllowed", (() => {
                        null == t || t(!1), clearTimeout(i)
                    })), Ci.TVXWindowEvents.emit("CheckConcurrentSession", e), s
                }
            }
            class Ei {
                constructor(e) {
                    this._transientStorage = {}, this._persistentStorageKey = `trading.${e}`;
                    const t = n.getJSON(this._persistentStorageKey, {});
                    delete t.orderTicketQuantity, this._transientStorage = t
                }
                setTakeProfitPips(e, t, i) {
                    this._setPips("takeProfit", e, t, i)
                }
                takeProfitPips(e) {
                    return this._getSectionValue("takeProfit", e)
                }
                setStopLossPips(e, t, i) {
                    this._setPips("stopLoss", e, t, i)
                }
                stopLossPips(e) {
                    return this._getSectionValue("stopLoss", e)
                }
                setDuration(e, t, i) {
                    const s = this.duration(e, t);
                    null !== i && void 0 !== s && s.type === i.type && s.datetime === i.datetime || null === i && void 0 === s || (this._setDuration(e, t, i), this._syncStorage())
                }
                duration(e, t) {
                    var i;
                    return this._migrateDuration(e, t), null === (i = this._getSectionValue("duration", e)) || void 0 === i ? void 0 : i[t]
                }
                setSymbolQty(e, t) {
                    this._getOrCreateSection("qty")[e] = t, this._syncStorage()
                }
                symbolQty(e) {
                    return this._getSectionValue("qty", e)
                }
                setCustomFields(e, t, i) {
                    var s, r, o;
                    const n = this._getOrCreateSection("customFields");
                    null !== (s = n[e]) && void 0 !== s || (n[e] = {}), null !== (r = (o = n[e])[t]) && void 0 !== r || (o[t] = {});
                    const a = n[e][t];
                    for (const [e, t] of Object.entries(i)) "string" == typeof t && "" !== t || "boolean" == typeof t ? a[e] = t : delete a[e];
                    0 === Object.keys(a).length && delete n[e][t], 0 === Object.keys(n[e]).length && delete n[e], this._syncStorage()
                }
                customFields(e, t, i) {
                    this._migrateCustomFields(e, t, i);
                    const s = {},
                        r = this._transientStorage.customFields;
                    if (void 0 === r || void 0 === r[e]) return s;
                    const o = r[e][t];
                    return void 0 === o || i.forEach((e => {
                        const t = o[e];
                        "" !== t && void 0 !== t && (s[e] = t)
                    })), s
                }
                orderType(e) {
                    return this._getSectionValue("orderType", e)
                }
                setOrderType(e, t) {
                    this._getOrCreateSection("orderType")[e] = t, this._syncStorage()
                }
                setTableColumnsOrder(e, t) {
                    this._getOrCreateSection("tableColumnsOrder")[e] = t, this._syncStorage()
                }
                tableColumnsOrder(e) {
                    return this._getSectionValue("tableColumnsOrder", e)
                }
                summaryFieldsVisibilityInfo() {
                    const e = new Map,
                        t = this._transientStorage.summaryFields;
                    if (void 0 === t) return e;
                    for (const [i, s] of Object.entries(t)) e.set(i, {
                        id: i,
                        visible: s
                    });
                    return e
                }
                setSummaryFieldsVisibilityInfo(e) {
                    e.forEach((({
                        id: e,
                        visible: t
                    }) => {
                        this._getOrCreateSection("summaryFields")[e] = t
                    })), this._syncStorage()
                }
                _getOrCreateSection(e) {
                    return e in this._transientStorage || (this._transientStorage[e] = {}), this._transientStorage[e]
                }
                _getSectionValue(e, t) {
                    const i = this._transientStorage[e];
                    return void 0 !== i ? i[t] : void 0
                }
                _removeValue(e, t) {
                    const i = this._transientStorage[e];
                    void 0 !== i && (delete i[t], 0 === Object.keys(i).length && delete this._transientStorage[e])
                }
                _setPips(e, t, i, s) {
                    const r = this._getSectionValue(e, t);
                    if (!(void 0 !== r && r === i || void 0 === r && i === s)) {
                        if (void 0 !== r && i === s) this._removeValue(e, t);
                        else {
                            this._getOrCreateSection(e)[t] = i
                        }
                        this._syncStorage()
                    }
                }
                _setDuration(e, t, i) {
                    var s;
                    const r = this._getOrCreateSection("duration");
                    if (null === i) {
                        if (void 0 === r[e]) return;
                        return delete r[e][t], void(0 === Object.keys(r[e]).length && delete r[e])
                    }
                    null !== (s = r[e]) && void 0 !== s || (r[e] = {}), r[e][t] = i
                }
                _migrateCustomFields(e, t, i) {
                    const s = {},
                        r = this._transientStorage.customFields;
                    void 0 === r || "object" == typeof r && void 0 !== r[e] || (i.forEach((t => {
                        const i = r[`${e}.${t}`];
                        "" !== i && void 0 !== i && (s[t] = i, this._removeValue("customFields", `${e}.${t}`))
                    })), this.setCustomFields(e, t, s))
                }
                _migrateDuration(e, t) {
                    const i = this._getSectionValue("duration", e);
                    if ("string" != typeof i) return;
                    const s = {
                            type: i
                        },
                        r = this._getSectionValue("durationDatetime", e);
                    "number" == typeof r && (s.datetime = r, this._removeValue("durationDatetime", e)), this._removeValue("duration", e), this._setDuration(e, t, s), this._syncStorage()
                }
                _syncStorage() {
                    n.setJSON(this._persistentStorageKey, this._transientStorage)
                }
            }
            var Li = i(951983),
                Vi = i(472382),
                Ii = i(198083);
            const Ni = (0, b.getLogger)("Trading.Core"),
                Ai = {
                    1: "Connected",
                    2: "Connecting",
                    3: "Disconnected",
                    4: "Error"
                },
                Oi = "alert/alarm_clock";

            function xi(e) {
                return (0, l.alertSounds)().some((t => e === t.path))
            }
            const Di = f.enabled("buy_sell_buttons"),
                Ri = (0,
                    ue.isFeatureEnabled)("show_concurrent_connection_warning"),
                Mi = !0,
                Fi = window.TRADING_SERVER_LOGGER_URL,
                Wi = void 0 !== Fi && (0, ue.isFeatureEnabled)("enable_trading_server_logger");
            class qi {
                constructor(e, t) {
                    this.accountType = new(P()), this.onBrokerChange = new(C()), this.onBrokerLoading = new(C()), this.onConnectionStatusChange = new(C()), this.onNewNotification = new(C()), this.onNeedSelectBroker = new(C()), this.onNotificationsChanged = new(C()), this.showTradedSources = new(P())(!0), this.showSellBuyButtons = new(P()), this.noConfirmEnabled = new(P()), this.showOnlyRejectionNotifications = new(P()), this.showPricesWithZeroVolume = new(P()), this.showSpread = new(P()), this.orderExecutedSoundParams = function() {
                            const e = xi(Oi) ? Oi : (0, l.alertSounds)()[0].path;
                            return {
                                enabled: new(P())(!1),
                                path: new(P())(e)
                            }
                        }(), this._activeBroker = null, this._orderViewController = null, this._orderControllerPromise = null, this._brokerCommandsUI = null, this._showPricesWithZeroVolume = new(P()), this._showSpread = new(P()), this._closePositionDialogVisibility = new L.DialogVisibility, this._orderDialogVisibility = new L.DialogVisibility, this._loginDialogVisibility = new L.DialogVisibility, this._tradingPanelPopupVisibility = new L.DialogVisibility, this._tradingSettingsStorage = null, this._offlineListener = this._offlineHandler.bind(this), this._onlineListener = this._onlineHandler.bind(this), this._notifications = [], this._account = null, this._domPanelVisibility = new(P())(!1), this._orderPanelVisibility = new(P())(!1), this._pipValueType$ = new d.BehaviorSubject(u.PipValueType.None), this._switchingBroker = !1, this._isReconnectNeeded = !1, this._accountVerificationPromise = null, this._chartWidgetCollection = null, this._tradedItemsChartCollectionFacadePromise = null, this._tradeNowBrokerId = null, this.getBrokerTradingSettingsStorage = () => this._tradingSettingsStorage, this.trackEvent = (e, t, i) => {
                            const s = e ? `[${e}] ${t}` : t;
                            if (this._gui()) {
                                const e = this._activeBroker ? this._activeBroker.metainfo().id + " Trading" : "Trading No Broker",
                                    t = this._activeBroker ? this._activeBroker.currentAccountType() : void 0;
                                this._gui().trackEvent(e, s, i || t)
                            }
                        }, this.getTradeNowBrokerId = () => this._tradeNowBrokerId, this.clearTradeNowBrokerId = () => {
                            this._tradeNowBrokerId = null
                        }, this._handleVisibilityChange = () => {
                            null !== this._activeBroker && this._activeBroker.metainfo().configFlags.usesWSConnection && "visible" !== document.visibilityState && (this._isReconnectNeeded = !0, this._selectBrokerInternal({
                                brokerId: null,
                                isUserAction: !1,
                                keepSessionAlive: !1,
                                disconnectInfo: {
                                    disconnectType: u.DisconnectType.BrokenConnection
                                }
                            }).then((() => {
                                if (this._isReconnectNeeded) return this._tryReconnectLastBroker()
                            })))
                        }, this._tryReconnectLastBroker = async () => {
                            if (this._isReconnectNeeded) {
                                if ("hidden" === document.visibilityState) return window.addEventListener("visibilitychange", this._tryReconnectLastBroker, {
                                    once: !0
                                });
                                this._isReconnectNeeded = !1, await this._selectLastBroker()
                            }
                        }, this._onCurrentAccountUpdate = () => {
                            const e = (0, s.ensureNotNull)(this._activeBroker).currentAccount();
                            this._account !== e && (this._tradedContextLinking.clear(), this._account = e, this.onNotificationsChanged.fire(this.getNotifications()))
                        },
                        this._onFullScreenDialogOpen = () => {
                            this._guiAccessor.closeAllNotifications()
                        }, this._setPipValueType = async () => {
                            const e = o.linking.proSymbol.value(),
                                {
                                    type: t
                                } = await this._realtimeProvider.symbolInfo(e);
                            let i = u.PipValueType.Ticks;
                            "crypto" === t ? i = u.PipValueType.None : "forex" === t && (i = u.PipValueType.Pips), this._pipValueType$.next(i)
                        }, this._trackNonTradableSymbol = async () => {
                            var e;
                            if (1 === (null === (e = this._activeBroker) || void 0 === e ? void 0 : e.connectionStatus())) {
                                const e = o.linking.proSymbol.value();
                                if (void 0 === e) return;
                                const t = await this._activeBroker.isTradable(e);
                                t && !t.tradable && this.trackEvent("Symbol is not tradable", e)
                            }
                        }, this._onBrokerChanged = e => {
                            this._tradingSettingsStorage = null !== e ? new Ei(e.metainfo().id) : null
                        }, this._onTradingPanelVisibilityChanged = e => {
                            e && (this.setOrderPanelVisibility(e), this.tradingPanel.isVisible.unsubscribe(this._onTradingPanelVisibilityChanged))
                        }, this._tradeNow = async () => {
                            if (void 0 !== window.TradingView.bottomWidgetBar && null !== this._tradeNowBrokerId) try {
                                await window.TradingView.bottomWidgetBar.toggleWidget("paper_trading", !0)
                            } catch (e) {
                                this._tradingWizard.drawAttention()
                            }
                        }, this._setPipValueType = (0, v.sequentialize)(this._setPipValueType), this._selectBrokerInternal = (0, v.sequentialize)(this._selectBrokerInternal), this._showSellBuyButtonsKey = this._makeShowSellBuyButtonsKey(), this._resizerBridge = e, this._realtimeProvider = new R((() => this.activeBroker()), this.onBrokerChange, this.onConnectionStatusChange), this._positionService = new Fe.PositionsService(this), this._ordersService = new We.OrdersService(this), this._tradingStat = new W(this), this._serverLogger = Wi ? new ki(Fi, Ni) : null, this._tradedContextLinking = new oi, this.onBrokerChange.subscribe(this, this._onBrokerChanged), void 0 !== t && (t.subscribe(null, this._tradeNow, !0), this._tradeNowInit()), this.brokerTelemetry = new Si(this), this._tradingWizard = new ci, this._initPaidBrokersByUserRegion(), Ri && (this._tradingXWindowEvents = new Ti((() => this.activeBroker()))), this.tradingPanelPopup = new Rt(this), this.tradingPanelPopup.visible().subscribe((e => {
                            e ? (this._tradingPanelPopupVisibility.setValue({
                                isVisible: e,
                                isFullScreen: !0
                            }), this._onFullScreenDialogOpen()) : this._tradingPanelPopupVisibility.setValue({
                                isVisible: e
                            })
                        })), this.tradingPanel = new Pe(e);
                    this._qtySuggester = new si({
                        onResetNeeded: this.onConnectionStatusChange,
                        symbolInfoGetter: e => this._realtimeProvider.symbolInfo(e),
                        qtySettingsStorageGetter: () => this._tradingSettingsStorage
                    });
                    const r = new ve(e, (() => this.tradingPanel.close()), this, this._qtySuggester);
                    this.tradingPanel.addPage(we.TradingPage.DomPanel, r);
                    const a = new fe;
                    this.tradingPanel.addPage(we.TradingPage.OrderPanel, a);
                    const _ = n.getValue(I.settingsKeys.TRADING_PANEL_ACTIVE_PAGE),
                        p = n.getBool(I.settingsKeys.TRADING_PANEL_OPENED, f.enabled("show_order_panel_on_start"));
                    window.is_authenticated && !(0, $e.isMobileTradingAvailable)() ? (_ && this.tradingPanel.activePage.setValue(_), p && this.tradingPanel.open(),
                        this.tradingPanel.isPageOpened(we.TradingPage.OrderPanel) && (this.tradingPanel.isVisible.value() ? this.setOrderPanelVisibility(!0) : this.tradingPanel.isVisible.subscribe(this._onTradingPanelVisibilityChanged))) : this.tradingPanel.close(), (0, k.combine)((() => ({})), this.tradingPanel.activePage, this.tradingPanel.isOpened).subscribe((() => {
                        this._domPanelVisibility.setValue(this.tradingPanel.isPageOpened(we.TradingPage.DomPanel)), this._orderPanelVisibility.setValue(this.tradingPanel.isPageOpened(we.TradingPage.OrderPanel))
                    })), this.closePositionDialogVisibility = this._closePositionDialogVisibility.value$, this.orderDialogVisibility = this._orderDialogVisibility.value$, this.loginDialogVisibility = this._loginDialogVisibility.value$, this.possibleFullScreenDialogsVisibility = (0, c.merge)(this.closePositionDialogVisibility.pipe((0, h.map)((e => ({ ...e,
                        name: "close-position-dialog"
                    })))), this.orderDialogVisibility.pipe((0, h.map)((e => ({ ...e,
                        name: "order-dialog"
                    })))), this.loginDialogVisibility.pipe((0, h.map)((e => ({ ...e,
                        name: "login-dialog"
                    })))), this._tradingPanelPopupVisibility.value$.pipe((0, h.map)((e => ({ ...e,
                        name: "trading-panel-popup"
                    }))))), Promise.all([i.e(35730), i.e(12275), i.e(33335), i.e(78707), i.e(83772), i.e(71140), i.e(85761), i.e(33287), i.e(64884), i.e(36720), i.e(62040), i.e(20849), i.e(39988), i.e(31630), i.e(61486), i.e(54201), i.e(42353), i.e(47302)]).then(i.bind(i, 640142)).then((e => {
                        this.loginDialogRenderer = new e.LoginDialogRenderer((() => this.selectBroker(null)), this.trackEvent, this._checkCQGCredentials.bind(this)), this.loginDialogRenderer.visibility.subscribe(this._makeDialogVisibilityHandler(this._loginDialogVisibility))
                    }))
                }
                setChartWidgetCollection(e) {
                    (0, s.assert)(null === this._chartWidgetCollection, "ChartWidgetCollection can be set only once"), this._chartWidgetCollection = e, this._guiAccessor = new z(e), new Ie(this), this._loadState(), n.onSync.subscribe(this, this._loadState);
                    const t = () => {
                        this._save()
                    };
                    this.showSellBuyButtons.subscribe(t), this.noConfirmEnabled.subscribe(t), this.showOnlyRejectionNotifications.subscribe(t), this._showPricesWithZeroVolume.subscribe(t), this._showSpread.subscribe(t), this.orderExecutedSoundParams.enabled.subscribe(t), this.orderExecutedSoundParams.path.subscribe(t), window.addEventListener("offline", this._offlineListener), window.addEventListener("online", this._onlineListener), this.bindShortcuts(), window.loginStateChange.subscribe(null, (async () => {
                        window.is_authenticated && !this._switchingBroker ? await this.pickDefaultBroker() : this.activeBroker() && this.selectBroker(null, !0)
                    })), setTimeout((async () => {
                        window.is_authenticated && !this._switchingBroker && await this.pickDefaultBroker()
                    })), (0, ni.isOnMobileAppPage)("old") && window.addEventListener("visibilitychange", this._handleVisibilityChange), this._tradedItemsChartCollectionFacadePromise = this._createTradedItemsChartCollectionFacade(e), this._registerCustomSources(e), this._registerCustomWidgets(e)
                }
                showPricesWith() {
                    return {
                        zeroVolume: this._showPricesWithZeroVolume,
                        spread: this._showSpread
                    }
                }
                domPanelVisibility() {
                    return this._domPanelVisibility
                }
                orderPanelVisibility() {
                    return this._orderPanelVisibility
                }
                realtimeProvider() {
                    return this._realtimeProvider
                }
                toggleTradingPanelPopup() {
                    this.tradingPanelPopup.visible().value() ? this.tradingPanelPopup.hide() : this.tradingPanelPopup.show()
                }
                toggleTradingWidget() {
                    return window.TradingView.bottomWidgetBar ? window.TradingView.bottomWidgetBar.activateTradingTab() : Promise.resolve()
                }
                toggleMinimizeBottomWidgetBar() {
                    if (window.TradingView.bottomWidgetBar) return window.TradingView.bottomWidgetBar.toggleMinimize()
                }
                tradingWizard() {
                    return this._tradingWizard
                }
                showTradingProperties() {
                    this._gui() && this._gui().showTradingProperties()
                }
                brokersList() {
                    return V.brokersList()
                }
                brokersPlans() {
                    return this._getBrokerPlans()
                }
                activeBroker() {
                    return this._activeBroker
                }
                brokerCommandsUI() {
                    return this._brokerCommandsUI
                }
                async selectBroker(e, t) {
                    await this._selectBrokerInternal({
                        brokerId: e,
                        isUserAction: !0,
                        keepSessionAlive: t
                    })
                }
                async pickDefaultBroker() {
                    if (this._activeBroker) return;
                    let e = null;
                    const t = this.brokersList().filter((e => !e.configFlags.isSuspended)); {
                        const i = await Mt.get();
                        i && t.some((e => e.id === i)) && (e = i)
                    }
                    e && this._selectBrokerInternal({
                        brokerId: e,
                        isUserAction: !1
                    })
                }
                async makeNewOrderContextMenuAction(e, t, s) {
                    const o = await this._qtySuggester.getQty(e);
                    return {
                        name: "trade-new-order",
                        action: () => {
                            this.trackEvent(t, "New Order"), this._checkAndOpenOrderDialog({
                                symbol: e,
                                qty: o,
                                limitPrice: s,
                                stopPrice: s
                            })
                        },
                        text: (0, y.appendEllipsis)(r.t(null, void 0, i(967498))),
                        statName: "NewOrder"
                    }
                }
                async defaultContextMenuActions(e, {
                    onlyMainActions: t = !1,
                    gaOrigin: s = "Chart Context Menu"
                } = {}) {
                    const o = await this._qtySuggester.getQty(e.symbol),
                        n = e.value || void 0,
                        {
                            bid: a,
                            ask: l
                        } = await this.realtimeProvider().quotesSnapshot(e.symbol),
                        d = [];
                    if (null !== e.value && void 0 !== l && void 0 !== a && (e.value >= l || e.value <= a)) {
                        const t = (a + l) / 2;
                        d.push(...await this._makeSubActions(e, o, t, s))
                    }
                    return d.push(await this.makeNewOrderContextMenuAction(e.symbol, s, n)), !t && f.enabled("property_pages") && (d.push({
                        separator: !0
                    }), d.push({
                        name: "trade-properties",
                        action: () => {
                            this.trackEvent(s, "Trading Properties"), this.showTradingProperties()
                        },
                        text: (0, y.appendEllipsis)(r.t(null, void 0, i(873503))),
                        icon: Li,
                        statName: "Properties"
                    })), d
                }
                defaultDropdownMenuActions(e) {
                    const t = "Bottom Panel Dropdown",
                        s = [],
                        o = this.activeBroker(),
                        n = e || {
                            tradingProperties: !0,
                            restoreConfirmations: o && o.metainfo().configFlags.supportConfirmations
                        };
                    return f.enabled("property_pages") || (n.tradingProperties = !1), n.tradingProperties && s.push({
                        action: () => {
                            this.showTradingProperties(), this.trackEvent(t, "Trading Properties")
                        },
                        text: (0, y.appendEllipsis)(r.t(null, void 0, i(873503))),
                        icon: Li
                    }), n.restoreConfirmations && s.push({
                        action: () => {
                            this._showRestoreConfirmations(), this.trackEvent(t, "Restore confirmations")
                        },
                        text: (0, y.appendEllipsis)(r.t(null, void 0, i(102653)))
                    }), s
                }
                chartContextMenuActions(e, t) {
                    return (this._activeBroker && 1 === this._activeBroker.connectionStatus() ? this._activeBroker.chartContextMenuActions(e, t) : this.defaultContextMenuActions(e, t)).then((e => (0, _.convertActionDescriptionsToActions)(e)))
                }
                connectStatus() {
                    return this._activeBroker ? this._activeBroker.connectionStatus() : 3
                }
                bindShortcuts() {
                    if (this._hotkeys) return;
                    this._hotkeys = a.createGroup({
                        desc: "Trading"
                    });
                    const e = async e => {
                        const t = this._gui().proSymbol(),
                            i = {
                                qty: await this._qtySuggester.getQty(t),
                                side: e,
                                symbol: t,
                                type: 2,
                                seenPrice: null
                            };
                        this.trackEvent("Shortcut", -1 === e ? "Sell" : "Buy"), this._checkAndPlaceOrder(i)
                    };
                    this._hotkeys.add({
                        desc: "Buy",
                        hotkey: a.Modifiers.Shift + 66,
                        handler: () => e(1)
                    }), this._hotkeys.add({
                        desc: "Sell",
                        hotkey: a.Modifiers.Shift + 83,
                        handler: () => e(-1)
                    })
                }
                formatter(e) {
                    return this.realtimeProvider().formatter(e)
                }
                showSuccessNotification(e, t, i = 1e4) {
                    this.showOnlyRejectionNotifications.value() || this._showNotification(e, t, "success", i), f.enabled("show_trading_notifications_history") && this._addNotificationRow(e, t, "success", i), this._log(e, t)
                }
                showErrorNotification(e, t, i = 25e3) {
                    this._showNotification(e, t, "danger", i), f.enabled("show_trading_notifications_history") && this._addNotificationRow(e, t, "danger", i), this._log(e, t)
                }
                getNotifications() {
                    return this._notifications.filter((e => e.account === this._account && e.broker === (this._activeBroker ? this._activeBroker.metainfo().id : null)))
                }
                setDomPanelVisibility(e) {
                    e ? this.tradingPanel.openPage(we.TradingPage.DomPanel) : this.tradingPanel.close()
                }
                setOrderPanelVisibility(e) {
                    this._getOrderViewController().then((t => {
                        e ? t.openPanel() : t.closePanel()
                    }))
                }
                orderViewController() {
                    return (0, s.ensureNotNull)(this._orderViewController)
                }
                tradingStat() {
                    return this._tradingStat
                }
                async verifyBrokerLiveAccount() {
                    return this._verifyLiveAccount(), null !== this._accountVerificationPromise ? this._accountVerificationPromise : Promise.reject("Account verification is not needed")
                }
                pipValueType() {
                    return this._pipValueType$.asObservable()
                }
                tradedItemsChartCollectionFacade() {
                    return (0, s.ensureNotNull)(this._tradedItemsChartCollectionFacadePromise)
                }
                async checkRealtimeDataPermissions() {
                    const e = (0, s.ensureNotNull)(this._activeBroker);
                    await (0, Bi.checkRealtimeDataSubscription)(e.metainfo().id, e.getRealtimeDataCheckParams()) && this._guiAccessor.reconnectChartApi(!0)
                }
                async removeRealtimeDataPermissions() {
                    await (0, Bi.removeRealtimeDataSubscription)((0, s.ensureNotNull)(this._activeBroker).metainfo().id) && this._guiAccessor.reconnectChartApi(!0)
                }
                async _getOrderViewController() {
                    return null !== this._orderViewController ? this._orderViewController : (await this._createOrderController(), this._getOrderViewController())
                }
                async _selectBrokerInternal(e) {
                    var t;
                    const {
                        brokerId: s,
                        isUserAction: o,
                        keepSessionAlive: n = !1,
                        disconnectInfo: a
                    } = e;
                    if (this._switchingBroker) return void Ni.logWarn(`Broker is already selected, but a new broker id: ${s} was received.`);
                    const l = this._activeBroker ? this._activeBroker.metainfo().id : null;
                    if (s !== l)
                        if (s && (0, ue.isFeatureEnabled)((0, _.makeMaintananceFeatureToggleName)(s))) {
                            const e = V.brokersList().filter((e => e.id === s))[0];
                            this._gui().showMaintenance(e.title)
                        } else if (s && (0, ue.isFeatureEnabled)((0, _.makeBrokerSideMaintananceFeatureToggleName)(s))) {
                        const e = V.brokersList().filter((e => e.id === s))[0];
                        this._gui().showBrokerSideMaintenance(e.title)
                    } else {
                        if (this._activeBroker) {
                            const e = this._activeBroker && this._activeBroker.disconnectWarningMessage(),
                                t = () => this._showReviewDialogIfNeeded(3, {
                                    disconnectType: u.DisconnectType.LogOut
                                });
                            if (null !== e && window.is_authenticated) {
                                if (!await (0, ne.showSimpleConfirmDialog)({
                                        title: r.t(null, void 0, i(349391)),
                                        text: e,
                                        mainButtonText: r.t(null, void 0, i(162058)),
                                        mainButtonIntent: "danger",
                                        cancelButtonText: r.t(null, void 0, i(620036)),
                                        onConfirm: () => {
                                            t(), this._logOut(o, n, a)
                                        },
                                        onCancel: () => {
                                            t()
                                        }
                                    })) return
                            } else t(), this._logOut(o, n, a)
                        }
                        if (null != s) {
                            if (this._tradeNowBrokerId = null, Ri) {
                                if (!await this._tradingXWindowEvents.isConcurrentSessionAllowed(s)) {
                                    if (!o) return;
                                    if (!await new Promise((e => {
                                            (0, E.showConfirm)({
                                                title: r.t(null, void 0, i(587168)),
                                                text: r.t(null, void 0, i(533773)),
                                                mainButtonText: r.t(null, void 0, i(468988)),
                                                mainButtonIntent: "danger",
                                                cancelButtonText: r.t(null, void 0, i(620036)),
                                                onConfirm: ({
                                                    dialogClose: t
                                                }) => {
                                                    e(!0), t()
                                                },
                                                onCancel: ({
                                                    dialogClose: t
                                                }) => {
                                                    e(!1), t()
                                                }
                                            })
                                        }))) return
                                }
                            }
                            let e;
                            ! function() {
                                if (!window.is_authenticated) throw Ni.logError("User is not logged in"), new Error("Please sign in first.")
                            }(), this._switchingBroker = !0;
                            e = (await this._getBrokerPlans()).filter((e => e.slug_name === s))[0];
                            try {
                                const t = await V.createBrokerConnection(this, s, this._serverLogger, null, e),
                                    {
                                        isMaintenance: i,
                                        message: r
                                    } = await t.maintenanceStatus();
                                if (i) {
                                    if (!await this._showBrokerSideMaintenanceWarning(t.metainfo().id, r)) return this._switchingBroker = !1, void t.disconnect(!0)
                                }
                                window.user.active_broker = e, await this._initBroker(t, n)
                            } catch (e) {
                                this._switchingBroker = !1, Ni.logError((0, m.getLoggerMessage)(e))
                            }
                        } else o && setTimeout((() => {
                            Mt.clear(), delete window.user.active_broker
                        })), this.onBrokerChange.fire(null), null === (t = this._closePositionDialogVisibilitySubscription) || void 0 === t || t.unsubscribe(), this._brokerCommandsUI = null
                    } else Ni.logWarn(`${s} is already selected.`)
                }
                async _initBroker(e, t) {
                    this._activeBroker = e, this._activeBroker.connectionStatusUpdate.subscribe(this, this._connectionListener), this._activeBroker.currentAccountUpdate.subscribe(this, this._onCurrentAccountUpdate), this._realtimeProvider.onStatusChanged.subscribe(null, this._setPipValueType), o.linking.proSymbol.subscribe(this._setPipValueType), this._realtimeProvider.onStatusChanged.subscribe(null, this._trackNonTradableSymbol), o.linking.proSymbol.subscribe(this._trackNonTradableSymbol), this._brokerCommandsUI = new ye(this._activeBroker, this._guiAccessor, this.noConfirmEnabled, this._getOrderViewController.bind(this), this.showErrorNotification.bind(this), this.trackEvent), this._closePositionDialogVisibilitySubscription = this._brokerCommandsUI.closePositionDialogVisibility.subscribe(this._makeDialogVisibilityHandler(this._closePositionDialogVisibility)), this._activeBroker.tryRestoreSession(), await Mt.set(this._activeBroker.metainfo().id), this.onBrokerChange.fire(this._activeBroker), this._getOrderViewController(), this._updateConnectionStatus(this.connectStatus()), this._switchingBroker = !1
                }
                async _showBrokerSideMaintenanceWarning(e, t) {
                    return (0, ne.showSimpleConfirmDialog)({
                        title: r.t(null, {
                            replace: {
                                brokerId: e
                            }
                        }, i(103718)),
                        text: null != t ? t : r.t(null, void 0, i(536263)),
                        cancelButtonText: r.t(null, void 0, i(620036)),
                        mainButtonIntent: "primary",
                        mainButtonText: r.t(null, void 0, i(891268)),
                        showBackdrop: !0
                    })
                }
                _makeDialogVisibilityHandler(e) {
                    return t => {
                        e.setValue(t), t.isFullScreen && this._onFullScreenDialogOpen()
                    }
                }
                _gui() {
                    return this._guiAccessor
                }
                _addNotificationRow(e, t, i, s) {
                    const r = {
                        id: this._notifications.length,
                        account: this._account,
                        broker: this._activeBroker ? this._activeBroker.metainfo().id : null,
                        time: new Date,
                        title: e,
                        text: t,
                        type: i
                    };
                    this._notifications.push(r), this.onNewNotification.fire(r)
                }
                _offlineHandler() {
                    this._selectBrokerInternal({
                        brokerId: null,
                        isUserAction: !1,
                        keepSessionAlive: !1,
                        disconnectInfo: {
                            disconnectType: u.DisconnectType.Offline
                        }
                    }), Ni.logNormal("The connection to the Internet was interrupted")
                }
                async _onlineHandler() {
                    await this._selectLastBroker() && Ni.logNormal("The connection to the Internet was restored")
                }
                _showNotification(e, t, i, s) {
                    this._gui() && this._gui().showNotification(e, t, i, s)
                }
                _showReviewDialogIfNeeded(e, t) {
                    if (null === this._activeBroker) return;
                    const o = this._activeBroker;
                    if ((0, ue.isFeatureEnabled)("review_popup_on_chart") && (1 === e || 3 === e && t && t.disconnectType === u.DisconnectType.LogOut)) {
                        const t = o.brokerPlan();
                        t && t.plan_verbose !== pi.BrokerPlans.Free && this.verifyBrokerLiveAccount().then((() => {
                            _i.BrokerReviewPageData.setBrokerData({
                                brokerId: t.id,
                                brokerName: t.name,
                                brokerUsername: t.username,
                                brokerSlugName: t.slug_name
                            }), window.runOrSignIn((() => (0, hi.getBrokerReviewStatusOrShowError)().then((t => {
                                const a = I.settingsKeys.LOGIN_COUNTER + "." + o.metainfo().id,
                                    l = I.settingsKeys.LOGOUT_COUNTER + "." + o.metainfo().id;
                                if (t === ui.BrokerReviewStatus.NonExists) {
                                    const t = n.getInt(a, 0),
                                        o = n.getInt(l, 0);
                                    if (1 === e && 3 === t || 3 === e && o > 0 && o % 5 == 0) {
                                        const t = (0, s.ensureNotNull)(_i.BrokerReviewPageData.getBrokerData()),
                                            o = "Chart page — connecting status " + (1 === e ? "connected" : "disconnected"),
                                            n = {
                                                title: r.t(null, void 0, i(451622)).format({
                                                    broker_name: t.brokerName
                                                })
                                            };
                                        (0, hi.openCreateBrokerReviewDialog)(0, !1, {
                                            dialogTexts: n,
                                            dataForStats: o
                                        })
                                    }
                                    1 === e && n.setValue(a, t + 1, {
                                        forceFlush: !0
                                    }), 3 === e && n.setValue(l, o + 1, {
                                        forceFlush: !0
                                    })
                                } else n.remove(a), n.remove(l, {
                                    forceFlush: !0
                                })
                            }))), {
                                source: "Trading panel, leave broker review"
                            })
                        })).catch((e => Ni.logWarn(e)))
                    }
                }
                _connectionListener(e, t) {
                    const i = this.connectStatus();
                    this._showReviewDialogIfNeeded(e, t);
                    const s = this._isReconnectNeeded = (null == t ? void 0 : t.disconnectType) === u.DisconnectType.BrokenConnection;
                    3 !== e || (null == t ? void 0 : t.disconnectType) !== u.DisconnectType.LogOut && !this._isReconnectNeeded || this._selectBrokerInternal({
                        brokerId: null,
                        isUserAction: !1,
                        keepSessionAlive: !1,
                        disconnectInfo: t
                    }).then((() => {
                        if (this._isReconnectNeeded) return this._tryReconnectLastBroker()
                    })), (null == t ? void 0 : t.disconnectType) === u.DisconnectType.CancelAuthorization && this.trackEvent("Signin", "OAuth popup closed", "By user"), (null == t ? void 0 : t.disconnectType) === u.DisconnectType.TimeOutForAuthorization && this.trackEvent("Signin", "OAuth popup closed", "By timeout"), this._updateConnectionStatus(i, !s, t)
                }
                async _selectLastBroker() {
                    const e = await Mt.get();
                    return null !== e && (await this._selectBrokerInternal({
                        brokerId: e,
                        isUserAction: !1
                    }), !0)
                }
                _updateOrderPanelSpinnerState() {
                    const e = this._orderViewController,
                        t = 2 === this.connectStatus(),
                        i = null !== e && e.stateChanging.value();
                    this.tradingPanel.isLoading.setValue(t || i)
                }
                async _updateConnectionStatus(e, t = !0, s) {
                    var o;
                    this._updateOrderPanelSpinnerState(), this.onConnectionStatusChange.fire(e, s), this._log("Connection status", Ai[e]);
                    const n = this._activeBroker;
                    if (t) {
                        const e = null === (o = this._activeBroker) || void 0 === o ? void 0 : o.metainfo().id;
                        void 0 !== e ? await Mt.set(e) : Mt.clear()
                    }
                    if (null !== this._activeBroker)
                        if (1 === e) {
                            this._account = this._activeBroker.currentAccount(), this._guiAccessor.setBroker(this._activeBroker); {
                                await this._checkOrRemoveRealtimeDataIfNeeded(this._activeBroker.metainfo());
                                const e = this._activeBroker.connectWarningMessage();
                                null !== e && (0, ne.showSimpleConfirmDialog)({
                                    title: r.t(null, void 0, i(195033)),
                                    text: e,
                                    mainButtonText: r.t(null, void 0, i(468988)),
                                    mainButtonIntent: "primary",
                                    checkboxLabel: r.t(null, void 0, i(913898)),
                                    showDisableConfirmationsCheckbox: !0,
                                    showCancelButton: !1
                                }), this._verifyLiveAccount()
                            }
                        } else this._tradedContextLinking.clear();
                    else this._accountVerificationPromise = null, this._guiAccessor.setBroker(null), this._tradedContextLinking.clear();
                    void 0 !== this.loginDialogRenderer && n === this._activeBroker && (await this.loginDialogRenderer.updateStatus(n, e, s), this.loginDialogRenderer.visible().value() && this.tradingPanelPopup.visible().value() && this.tradingPanelPopup.hide())
                }
                async _checkOrRemoveRealtimeDataIfNeeded(e) {
                    if (!e.configFlags.supportRealtimeDataCheck) return;
                    const {
                        realtimeDataPermissionsToggleConfig: t
                    } = e;
                    if (void 0 === t) return void this.checkRealtimeDataPermissions();
                    const s = `${I.settingsKeys.REALTIME_DATA_ACCEPTED}.${e.id}`;
                    switch (n.getValue(s)) {
                        case "true":
                            return void this.checkRealtimeDataPermissions();
                        case "false":
                            return void this.removeRealtimeDataPermissions();
                        default:
                            const e = await (0, ne.showSimpleConfirmDialog)({
                                title: r.t(null, void 0, i(75715)),
                                text: t.enableRealtimeDataPermissionsToggleText,
                                mainButtonText: r.t(null, void 0, i(83453)),
                                cancelButtonText: r.t(null, void 0, i(546472)),
                                showCloseButton: !1,
                                closeOnOutsideClick: !1,
                                mainButtonIntent: "primary",
                                closeOnEscapePress: !1
                            });
                            e ? await this.checkRealtimeDataPermissions() : await this.removeRealtimeDataPermissions(), n.setValue(s, e)
                    }
                }
                _verifyLiveAccount() {
                    if (null !== this._accountVerificationPromise) return;
                    const e = (0, s.ensureNotNull)(this._activeBroker);
                    e.metainfo().configFlags.supportVerifyLiveAccount && e.currentAccountType() === u.AccountType.Live && (this._accountVerificationPromise = (0, Bi.verifyLiveAccount)(e))
                }
                _save() {
                    const e = n.getJSON(I.settingsKeys.PROPERTIES, {});
                    n.setJSON(I.settingsKeys.PROPERTIES, { ...e,
                        [this._showSellBuyButtonsKey]: +!!this.showSellBuyButtons.value(),
                        noConfirmEnabled: +!!this.noConfirmEnabled.value(),
                        qweqrq: +!!this.showOnlyRejectionNotifications.value(),
                        showPricesWithZeroVolume: +!!this._showPricesWithZeroVolume.value(),
                        showSpread: +!!this._showSpread.value(),
                        orderExecutedSoundParams: JSON.stringify({
                            enabled: +!!this.orderExecutedSoundParams.enabled.value(),
                            name: this.orderExecutedSoundParams.path.value()
                        })
                    })
                }
                _loadState() {
                    const e = n.getJSON(I.settingsKeys.PROPERTIES, {}),
                        t = e[this._showSellBuyButtonsKey];
                    if (this.showSellBuyButtons.setValue(void 0 !== t ? !!t : Mi), this.noConfirmEnabled.setValue(!!e.noConfirmEnabled), this.showOnlyRejectionNotifications.setValue(!!e.qweqrq), this._showPricesWithZeroVolume.setValue(!e.hasOwnProperty("showPricesWithZeroVolume") || e.showPricesWithZeroVolume), this._showSpread.setValue(!e.hasOwnProperty("showSpread") || e.showSpread), e.hasOwnProperty("orderExecutedSoundParams")) {
                        const t = JSON.parse(e.orderExecutedSoundParams);
                        this.orderExecutedSoundParams.enabled.setValue(!!t.enabled), this.orderExecutedSoundParams.path.setValue(xi(t.name) ? t.name : this.orderExecutedSoundParams.path.value())
                    }
                }
                _makeShowSellBuyButtonsKey() {
                    return (0, $e.isMobileTradingAvailable)() ? "showSellBuyButtonsMobile" : "showSellBuyButtons"
                }
                _log(e, t) {
                    Ni.logNormal(`${this._activeBroker?this._activeBroker.metainfo().id+" Trading: ":""}${e} - ${t}`)
                }
                _makeSureCanTrade() {
                    const e = this.activeBroker(),
                        t = this.brokerCommandsUI(),
                        i = (0, $e.isMobileTradingAvailable)();
                    return e && t ? 1 === e.connectionStatus() || (i ? this.toggleTradingPanelPopup() : this.toggleTradingWidget(), !1) : (i ? (this.toggleTradingPanelPopup(), this.onNeedSelectBroker.fire()) : this.toggleTradingWidget().then((() => this.onNeedSelectBroker.fire())), !1)
                }
                _checkAndPlaceOrder(e, t = !0) {
                    this._makeSureCanTrade() && (0, s.ensureNotNull)(this.brokerCommandsUI()).placeOrder(e, t)
                }
                _checkAndOpenOrderDialog(e) {
                    this._makeSureCanTrade() && (0, s.ensureNotNull)(this.brokerCommandsUI()).placeOrder(e)
                }
                _makeSubAction({
                    context: e,
                    side: t,
                    orderType: s,
                    orderPrices: o,
                    currentQuotes: n,
                    qty: a,
                    gaOrigin: l
                }) {
                    const d = 1 === t ? Ii : Vi,
                        c = 1 === t ? "Buy" : "Sell",
                        h = 1 === s ? "Limit" : 3 === s ? "Stop" : "StopLimit",
                        u = function(e) {
                            return "altPrice" in e && "formattedAltPrice" in e
                        }(o),
                        _ = c + h,
                        p = {
                            BuyLimit: r.t(null, void 0, i(302122)).format({
                                symbol: e.displaySymbol,
                                qty: (0, w.abbreviatedNumber)(a),
                                value: o.formattedPrice
                            }),
                            SellStop: r.t(null, void 0, i(627392)).format({
                                symbol: e.displaySymbol,
                                qty: (0, w.abbreviatedNumber)(a),
                                value: o.formattedPrice
                            }),
                            SellLimit: r.t(null, void 0, i(476678)).format({
                                symbol: e.displaySymbol,
                                qty: (0, w.abbreviatedNumber)(a),
                                value: o.formattedPrice
                            }),
                            BuyStop: r.t(null, void 0, i(255481)).format({
                                symbol: e.displaySymbol,
                                qty: (0, w.abbreviatedNumber)(a),
                                value: o.formattedPrice
                            })
                        };
                    return u && (p.SellStopLimit = r.t(null, void 0, i(194240)).format({
                        symbol: e.displaySymbol,
                        qty: (0, w.abbreviatedNumber)(a),
                        value: o.formattedPrice,
                        altValue: o.formattedAltPrice
                    }), p.BuyStopLimit = r.t(null, void 0, i(353343)).format({
                        symbol: e.displaySymbol,
                        qty: (0, w.abbreviatedNumber)(a),
                        value: o.formattedPrice,
                        altValue: o.formattedAltPrice
                    })), {
                        name: `trade-${c}-${h}`.toLowerCase(),
                        action: () => {
                            this.trackEvent(l, `${c} ${h}`);
                            const i = 1 === s ? "limitPrice" : "stopPrice",
                                r = 1 === t ? null == n ? void 0 : n.ask : null == n ? void 0 : n.bid,
                                d = {
                                    qty: a,
                                    side: t,
                                    symbol: e.symbol,
                                    type: s,
                                    seenPrice: null != r ? r : null,
                                    currentQuotes: n
                                };
                            null !== o.price && (d[i] = o.price), 4 === s && u && (d.limitPrice = o.altPrice), this._checkAndPlaceOrder(d)
                        },
                        icon: d,
                        text: p[_],
                        statName: _
                    }
                }
                _createOrderController() {
                    return null === this._orderControllerPromise && (this._orderControllerPromise = Promise.all([i.e(99863), i.e(67953), i.e(71319), i.e(20660)]).then(i.bind(i, 856935)).then((({
                        OrderViewController: e
                    }) => new e({
                        resizerBridge: this._resizerBridge,
                        onNeedSelectBroker: this.onNeedSelectBroker,
                        realtimeProvider: this.realtimeProvider(),
                        pipValueType$: this.pipValueType(),
                        trackEvent: this.trackEvent,
                        toggleTradingWidget: this.toggleTradingWidget.bind(this),
                        toggleTradingPanelPopup: this.toggleTradingPanelPopup.bind(this),
                        showErrorNotification: this.showErrorNotification.bind(this),
                        getTradingSettingsStorage: () => this._tradingSettingsStorage
                    }, {
                        container: this.tradingPanel.container,
                        isOpened: this.tradingPanel.isOpened,
                        isVisible: this.tradingPanel.isVisible,
                        activePage: this.tradingPanel.activePage,
                        close: this.tradingPanel.close.bind(this.tradingPanel),
                        openPage: this.tradingPanel.openPage.bind(this.tradingPanel)
                    }, this._qtySuggester))).then((e => {
                        this._orderControllerPromise = null, this._orderViewController = e, this._orderViewController.stateChanging.subscribe((() => this._updateOrderPanelSpinnerState())), this._orderViewController.dialogVisibility.subscribe(this._makeDialogVisibilityHandler(this._orderDialogVisibility))
                    }))), this._orderControllerPromise
                }
                async _registerCustomSources(e) {
                    !async function(e, t) {
                        const s = await Promise.all([i.e(7624), i.e(59333), i.e(6092), i.e(47507), i.e(1972), i.e(97104), i.e(42650)]).then(i.bind(i, 134829));
                        e.addCustomSource("bidask", ((i, r) => new s.BidAsk(i, r, t.realtimeProvider(), (() => {
                            e.activeChartWidget.value().showGeneralChartProperties(T.TabNames.symbol)
                        }))))
                    }(e, this), Me(e, this, this.showTradedSources);
                    new((await Promise.all([i.e(7624), i.e(59333), i.e(6092), i.e(47507), i.e(1972), i.e(97104), i.e(51652)]).then(i.bind(i, 418649))).TradedSourcesManager)(this._ordersService, this._positionService, e, {
                        activeTradedLinking: this._tradedContextLinking,
                        showTradedSources: this.showTradedSources,
                        realtimeProvider: this._realtimeProvider,
                        qtySuggester: this._qtySuggester,
                        brokerCommandsUI: this.brokerCommandsUI.bind(this),
                        trackEvent: this.trackEvent,
                        pipValueType$: this.pipValueType()
                    })
                }
                _registerCustomWidgets(e) {
                    Di && function(e, t, i) {
                        e.addCustomWidgetToLegend(((e, s) => {
                            const r = e.mainSeries(),
                                o = (0, De.createWVFromGetterAndSubscription)(e.isInReplay.bind(e), e.onInReplayStateChanged()),
                                n = (0, De.createWVFromGetterAndSubscriptions)((() => {
                                    var e;
                                    return "economic" === (null === (e = r.symbolInfo()) || void 0 === e ? void 0 : e.type)
                                }), [r.dataEvents().symbolResolved(), r.dataEvents().symbolError()]);
                            return new Bt(r.dataEvents(), function(e) {
                                return () => {
                                    const t = e.symbolInfo();
                                    return null !== t ? t.pro_name || "" : e.proSymbol()
                                }
                            }(r), n, i, {
                                onNeedSelectBroker: t.onNeedSelectBroker,
                                realtimeProvider: t.realtimeProvider(),
                                onBrokerConnectionStatusChange: t.onConnectionStatusChange,
                                brokerConnectionStatus: t.connectStatus.bind(t),
                                trackEvent: t.trackEvent,
                                toggleTradingWidget: t.toggleTradingWidget.bind(t),
                                toggleTradingPanelPopup: t.toggleTradingPanelPopup.bind(t),
                                brokerCommandsUI: t.brokerCommandsUI.bind(t),
                                toggleMinimizeBottomWidgetBar: () => t.toggleMinimizeBottomWidgetBar()
                            }, {
                                showSellBuyButtons: t.showSellBuyButtons,
                                noConfirmEnabled: t.noConfirmEnabled,
                                themeName: s
                            }, o)
                        }), {
                            block: 0,
                            position: 0
                        })
                    }(e, this, this._qtySuggester)
                }
                async _makeSubActions(e, t, i, s) {
                    const r = [];
                    if (null === e.value) return r;
                    const o = this.activeBroker();
                    let n, a, l, d, c, h, u, _, b, y, v, f, w, k = null === o,
                        B = null === o,
                        P = null === o,
                        S = null !== o,
                        C = null === o;
                    const T = e.symbol;
                    null !== o && 1 === o.connectionStatus() && (w = await o.isTradable(T));
                    const [E, L, V] = await Promise.all([this._realtimeProvider.symbolInfo(T), this._realtimeProvider.formatter(T), this._realtimeProvider.quotesSnapshot(T)]), I = E.variableMinTick ? (0, g.makeVariableMinTickData)(E.minTick, E.variableMinTick) : void 0, N = e => (0, g.getMinTick)({
                        minTick: E.minTick,
                        price: e,
                        variableMinTickData: I
                    });
                    if (null !== o && w && w.tradable) {
                        const t = o.metainfo().configFlags,
                            i = (0, p.alignToStep)(e.value, N(e.value));
                        n = i, l = i, d = i, a = i, c = d + N(d), h = a - N(a), k = Boolean(t.supportLimitOrders), B = Boolean(t.supportStopOrders), P = Boolean(t.supportStopOrdersInBothDirectionsInUI), S = Boolean(t.supportStopLimitOrdersInBothDirections), C = Boolean(t.supportStopLimitOrders), void 0 !== E.limitPriceStep && (n = (0, m.roundToStepByPriceTypeAndSide)(e.value, E.limitPriceStep, 1, 1), l = (0, m.roundToStepByPriceTypeAndSide)(e.value, E.limitPriceStep, 1, -1), c = (0, m.roundToStepByPriceTypeAndSide)(e.value + N(e.value), E.limitPriceStep, 1, 1), h = (0, m.roundToStepByPriceTypeAndSide)(e.value - N(e.value), E.limitPriceStep, 1, -1)), void 0 !== E.stopPriceStep && (d = (0, m.roundToStepByPriceTypeAndSide)(e.value, E.stopPriceStep, 2, 1), a = (0, m.roundToStepByPriceTypeAndSide)(e.value, E.stopPriceStep, 2, -1)), u = L.format(n), _ = L.format(a), b = L.format(l), y = L.format(d), v = L.format(c), f = L.format(h)
                    } else n = l = d = a = e.value, u = _ = b = y = e.formattedValue, c = d + N(d), h = a - N(a), v = L.format(c), f = L.format(h);
                    let A;
                    if (void 0 !== V.ask && void 0 !== V.bid && (A = {
                            ask: V.ask,
                            bid: V.bid
                        }), e.value <= i) {
                        if (k) {
                            const i = {
                                price: n,
                                formattedPrice: u
                            };
                            r.push(this._makeSubAction({
                                context: e,
                                side: 1,
                                orderType: 1,
                                orderPrices: i,
                                qty: t,
                                gaOrigin: s,
                                currentQuotes: A
                            }))
                        }
                        if (P) {
                            const i = {
                                price: d,
                                formattedPrice: y
                            };
                            r.push(this._makeSubAction({
                                context: e,
                                side: 1,
                                orderType: 3,
                                orderPrices: i,
                                qty: t,
                                gaOrigin: s,
                                currentQuotes: A
                            }))
                        }
                        if (B || P) {
                            const i = {
                                price: a,
                                formattedPrice: _
                            };
                            r.push(this._makeSubAction({
                                context: e,
                                side: -1,
                                orderType: 3,
                                orderPrices: i,
                                qty: t,
                                gaOrigin: s,
                                currentQuotes: A
                            }))
                        }
                        if (C) {
                            const i = {
                                context: e,
                                side: -1,
                                orderType: 4,
                                orderPrices: {
                                    price: a,
                                    formattedPrice: _,
                                    altPrice: h,
                                    formattedAltPrice: f
                                },
                                qty: t,
                                gaOrigin: s,
                                currentQuotes: A
                            };
                            r.push(this._makeSubAction(i)), S && (i.side = 1, r.push(this._makeSubAction(i)))
                        }
                    } else {
                        if (k) {
                            const i = {
                                price: l,
                                formattedPrice: b
                            };
                            r.push(this._makeSubAction({
                                context: e,
                                side: -1,
                                orderType: 1,
                                orderPrices: i,
                                qty: t,
                                gaOrigin: s,
                                currentQuotes: A
                            }))
                        }
                        if (P) {
                            const i = {
                                price: a,
                                formattedPrice: _
                            };
                            r.push(this._makeSubAction({
                                context: e,
                                side: -1,
                                orderType: 3,
                                orderPrices: i,
                                qty: t,
                                gaOrigin: s,
                                currentQuotes: A
                            }))
                        }
                        if (B || P) {
                            const i = {
                                price: d,
                                formattedPrice: y
                            };
                            r.push(this._makeSubAction({
                                context: e,
                                side: 1,
                                orderType: 3,
                                orderPrices: i,
                                qty: t,
                                gaOrigin: s,
                                currentQuotes: A
                            }))
                        }
                        if (C) {
                            const i = {
                                context: e,
                                side: 1,
                                orderType: 4,
                                orderPrices: {
                                    price: d,
                                    formattedPrice: y,
                                    altPrice: c,
                                    formattedAltPrice: v
                                },
                                qty: t,
                                gaOrigin: s,
                                currentQuotes: A
                            };
                            r.push(this._makeSubAction(i)),
                                S && (i.side = -1, r.push(this._makeSubAction(i)))
                        }
                    }
                    return r
                }
                _initPaidBrokersByUserRegion() {
                    this._brokersListPromise = (0, ai.fetch)("/api/v1/brokers/trading_panel", {
                        method: "GET"
                    }).then((e => e.json())).catch((e => {
                        Ni.logWarn("Failed to fetch brokers info: " + e)
                    }))
                }
                async _getBrokerPlans() {
                    let e = [];
                    try {
                        if (e = await this._brokersListPromise, !Array.isArray(e)) throw new Error("Request result is not valid")
                    } catch (e) {
                        Ni.logError(`Failed to fetch broker list by user region: ${e.message}`)
                    }
                    return e
                }
                async _checkCQGCredentials(e) {
                    try {
                        if (this._activeBroker) {
                            await (0, Bi.checkRealtimeDataSubscription)(this._activeBroker.metainfo().id, e) && this._guiAccessor.reconnectChartApi(!0)
                        }
                    } catch (e) {
                        Ni.logError(`Failed to fetch credentials verifier: ${e.message}`)
                    }
                }
                async _showRestoreConfirmations() {
                    const e = await (0, ne.showSimpleConfirmDialog)({
                        title: r.t(null, void 0, i(102653)),
                        text: r.t(null, void 0, i(526227)),
                        mainButtonIntent: "primary"
                    });
                    null !== this._activeBroker && e && (new Ft.DisabledConfirmations).clear()
                }
                _logOut(e, t, i) {
                    const r = (0, s.ensureNotNull)(this._activeBroker);
                    r.connectionStatusUpdate.unsubscribe(this, this._connectionListener), r.currentAccountUpdate.unsubscribe(this, this._onCurrentAccountUpdate), this._realtimeProvider.onStatusChanged.unsubscribe(null, this._setPipValueType), o.linking.proSymbol.unsubscribe(this._setPipValueType), this._realtimeProvider.onStatusChanged.unsubscribe(null, this._trackNonTradableSymbol), o.linking.proSymbol.unsubscribe(this._trackNonTradableSymbol), r.disconnect(t || !e), r.destroy(), this._activeBroker = null, this._updateConnectionStatus(3, e, i)
                }
                async _createTradedItemsChartCollectionFacade(e) {
                    return new((await Promise.all([i.e(7624), i.e(59333), i.e(6092), i.e(47507), i.e(1972), i.e(97104), i.e(42650)]).then(i.bind(i, 980889))).TradedItemsChartCollectionFacade)(e)
                }
                _tradeNowInit() {
                    const e = new URL(decodeURIComponent(window.location.href)),
                        t = e.searchParams.get("trade-now");
                    e.searchParams.delete("trade-now"), window.history.replaceState(null, document.title, e.toString()), null === t || (0, $e.isMobileTradingAvailable)() || (this._tradeNowBrokerId = t, Mt.clear())
                }
            }
        },
        3566: (e, t, i) => {
            "use strict";
            async function s(e, t) {
                const i = (s = t, Uint8Array.from(s, (e => e.charCodeAt(0))));
                var s;
                const r = await crypto.subtle.importKey("raw", i, {
                        name: "HMAC",
                        hash: "SHA-256"
                    }, !1, ["sign"]),
                    o = (new TextEncoder).encode(e),
                    n = await crypto.subtle.sign("HMAC", r, o);
                return {
                    value: n,
                    toBase64: () => {
                        return e = n, btoa(String.fromCharCode.apply(null, new Uint8Array(e)));
                        var e
                    },
                    toHex: () => {
                        return e = n, Array.from(new Uint8Array(e)).map((e => e.toString(16).padStart(2, "0"))).join("");
                        var e
                    }
                }
            }
            i.d(t, {
                signDataWithSha256Hmac: () => s
            })
        },
        198083: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M19.9792 16.6205C19.7396 16.8955 19.3241 16.9285 19.044 16.6948L14.3924 12.8117L14.072 12.5442L13.7516 12.8117L9.10009 16.6947C8.82008 16.9285 8.40456 16.8955 8.16495 16.6205C7.92467 16.3447 7.94981 15.9272 8.22144 15.6822L14.0721 10.4057L19.9227 15.6822C20.1943 15.9272 20.2195 16.3447 19.9792 16.6205ZM18.4032 17.4624C19.1009 18.0448 20.1362 17.9626 20.7332 17.2774C21.3318 16.5902 21.2692 15.55 20.5924 14.9396L14.407 9.36109L14.0721 9.05908L13.7373 9.36109L7.55171 14.9396C6.87492 15.55 6.81229 16.5902 7.41096 17.2774C8.00796 17.9626 9.04326 18.0448 9.74094 17.4624L14.072 13.8468L18.4032 17.4624Z"/></svg>'
        },
        472382: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M19.9792 12.2892C19.7396 12.0142 19.3241 11.9812 19.044 12.2149L14.3924 16.098L14.072 16.3655L13.7516 16.098L9.10009 12.2149C8.82008 11.9812 8.40456 12.0142 8.16495 12.2892C7.92467 12.565 7.94981 12.9825 8.22144 13.2275L14.0721 18.504L19.9227 13.2275C20.1943 12.9825 20.2195 12.565 19.9792 12.2892ZM18.4032 11.4472C19.1009 10.8648 20.1362 10.9471 20.7332 11.6323C21.3318 12.3195 21.2692 13.3597 20.5924 13.9701L14.407 19.5486L14.0721 19.8506L13.7373 19.5486L7.55171 13.9701C6.87492 13.3597 6.81229 12.3195 7.41096 11.6323C8.00796 10.9471 9.04326 10.8648 9.74094 11.4473L14.072 15.0628L18.4032 11.4472Z"/></svg>'
        },
        333765: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>'
        },
        816105: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="72" height="72" fill="none"><g clip-path="url(#clip0)"><path fill="#363A45" fill-rule="evenodd" clip-rule="evenodd" d="M62.1259 28.2153C61.4066 28.8157 61.0001 29.7273 61.0858 30.6604C61.6716 37.0347 59.7763 44.3291 55.3181 50.8221C46.9016 63.0797 32.5383 67.839 23.2366 61.4522C13.935 55.0654 13.2174 39.9512 21.6339 27.6935C26.4984 20.6088 33.3496 16.029 40.0619 14.6585C40.9752 14.472 41.731 13.8291 42.1024 12.9741C42.485 12.0934 42.9606 11.2346 43.5313 10.4123C47.906 4.1093 56.2129 2.33004 62.0853 6.4382C67.9578 10.5464 69.172 18.9863 64.7974 25.2892C64.0194 26.4103 63.1169 27.3882 62.1259 28.2153Z"/><rect width="47.2" height="34" fill="#1E222D" stroke="#B2B5BE" stroke-width="2" rx="3.8" x="12.4004" y="16"/><path stroke="#B2B5BE" stroke-linecap="round" stroke-width="2" d="M3.59961 54H67.1996"/><path fill="#B2B5BE" fill-rule="evenodd" clip-rule="evenodd" d="M29.1178 31.1324L30.8107 32.8253L32.225 31.4111L30.5321 29.7182L32.225 28.0253L30.8107 26.6111L29.1178 28.304L27.425 26.6111L26.0107 28.0253L27.7036 29.7182L26.0107 31.4111L27.425 32.8253L29.1178 31.1324Z"/><path fill="#B2B5BE" fill-rule="evenodd" clip-rule="evenodd" d="M43.5182 31.1324L45.2111 32.8253L46.6253 31.4111L44.9325 29.7182L46.6253 28.0253L45.2111 26.6111L43.5182 28.304L41.8253 26.6111L40.4111 28.0253L42.104 29.7182L40.4111 31.4111L41.8253 32.8253L43.5182 31.1324Z"/><path stroke="#B2B5BE" stroke-width="2" d="M30.5996 38.7H40.7996"/></g></svg>'
        },
        627687: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="72" height="72" fill="none"><g clip-path="url(#clip0)"><path fill="#F0F3FA" fill-rule="evenodd" clip-rule="evenodd" d="M62.1259 28.2153C61.4066 28.8157 61.0001 29.7273 61.0858 30.6604C61.6716 37.0347 59.7763 44.3291 55.3181 50.8221C46.9016 63.0797 32.5383 67.839 23.2366 61.4522C13.935 55.0654 13.2174 39.9512 21.6339 27.6935C26.4984 20.6088 33.3496 16.029 40.0619 14.6585C40.9752 14.472 41.731 13.8291 42.1024 12.9741C42.485 12.0934 42.9606 11.2346 43.5313 10.4123C47.906 4.1093 56.2129 2.33004 62.0853 6.4382C67.9578 10.5464 69.172 18.9863 64.7974 25.2892C64.0194 26.4103 63.1169 27.3882 62.1259 28.2153Z"/><rect width="47.2" height="34" fill="#fff" stroke="#1E222D" stroke-width="2" rx="3.8" x="12.4004" y="16"/><path stroke="#1E222D" stroke-linecap="round" stroke-width="2" d="M3.59961 54H67.1996"/><path fill="#000" fill-rule="evenodd" clip-rule="evenodd" d="M29.1178 31.1324L30.8107 32.8253L32.225 31.4111L30.5321 29.7182L32.225 28.0253L30.8107 26.6111L29.1178 28.304L27.425 26.6111L26.0107 28.0253L27.7036 29.7182L26.0107 31.4111L27.425 32.8253L29.1178 31.1324Z"/><path fill="#000" fill-rule="evenodd" clip-rule="evenodd" d="M43.5182 31.1324L45.2111 32.8253L46.6253 31.4111L44.9325 29.7182L46.6253 28.0253L45.2111 26.6111L43.5182 28.304L41.8253 26.6111L40.4111 28.0253L42.104 29.7182L40.4111 31.4111L41.8253 32.8253L43.5182 31.1324Z"/><path stroke="#000" stroke-width="2" d="M30.5996 38.7H40.7996"/></g></svg>'
        },
        829883: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" width="20" height="16"><path fill="currentColor" fill-rule="evenodd" d="M7.5 2.5C7.5 1.67 8.17 1 9 1h2c.83 0 1.5.67 1.5 1.5v.15h-5V2.5zm6 0v.15H17a2.5 2.5 0 0 1 2.5 2.5v8.35A2.5 2.5 0 0 1 17 16H3a2.5 2.5 0 0 1-2.5-2.5V5.15A2.5 2.5 0 0 1 3 2.65h3.5V2.5A2.5 2.5 0 0 1 9 0h2a2.5 2.5 0 0 1 2.5 2.5zm-12 2.65c0-.83.67-1.5 1.5-1.5h14c.83 0 1.5.67 1.5 1.5v8.35c0 .83-.67 1.5-1.5 1.5H3a1.5 1.5 0 0 1-1.5-1.5V5.15zM9.25 6.5a1.75 1.75 0 1 0 0 3.5h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75h-1c0 .97.78 1.75 1.75 1.75h.25v1h1v-1h.25a1.75 1.75 0 1 0 0-3.5h-1.5a.75.75 0 0 1 0-1.5h1.5c.41 0 .75.34.75.75h1c0-.97-.78-1.75-1.75-1.75h-.25v-1h-1v1h-.25z"/></svg>'
        },
        522997: (e, t, i) => {
            "use strict";
            e.exports = i.p + "3_notes_reverb.dc905347b1eda03c1db2.mp3"
        },
        585161: (e, t, i) => {
            "use strict";
            e.exports = i.p + "alarm_clock.ba219c712b5dce956b08.mp3"
        },
        795192: (e, t, i) => {
            "use strict";
            e.exports = i.p + "alert_calling.205c6b5ccb0a10decbc1.mp3"
        },
        673503: (e, t, i) => {
            "use strict";
            e.exports = i.p + "beep_beep.cddbb5d281594d0b4b8d.mp3"
        },
        797300: (e, t, i) => {
            "use strict";
            e.exports = i.p + "chirpy.bcc136ad76d4496efe29.mp3"
        },
        549907: (e, t, i) => {
            "use strict";
            e.exports = i.p + "fault.ca1f77478c28a528be67.mp3"
        },
        840928: (e, t, i) => {
            "use strict";
            e.exports = i.p + "fired.aaee45a643068df3a94b.mp3"
        },
        878947: (e, t, i) => {
            "use strict";
            e.exports = i.p + "hand_bell.bd1c77bbd21a64aa4fe8.mp3"
        },
        926109: (e, t, i) => {
            "use strict";
            e.exports = i.p + "call.6d2888370f40fbb8cd8d.mp3"
        },
        297868: (e, t, i) => {
            "use strict";
            e.exports = i.p + "chat_calling.067c844a001001872f78.mp3"
        },
        77433: (e, t, i) => {
            "use strict";
            e.exports = i.p + "hangup.0a486c8d934145d68c11.mp3"
        },
        621031: (e, t, i) => {
            "use strict";
            e.exports = i.p + "message.c44275a460737d0d50ff.mp3"
        },
        421422: (e, t, i) => {
            "use strict";
            e.exports = i.p + "popup.184287feaec7efccbb27.mp3"
        },
        313763: (e, t, i) => {
            "use strict";
            e.exports = i.p + "notification.01a81746825289ed9423.mp3"
        }
    }
]);
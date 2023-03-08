"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [82846], {
        83436: (e, t, o) => {
            o.d(t, {
                Icon: () => r
            });
            var n = o(50959);
            const r = n.forwardRef(((e, t) => {
                const {
                    icon: o = "",
                    ...r
                } = e;
                return n.createElement("span", { ...r,
                    ref: t,
                    dangerouslySetInnerHTML: {
                        __html: o
                    }
                })
            }))
        },
        581996: (e, t, o) => {
            o.d(t, {
                ResizerDetacherState: () => s
            });
            var n = o(650151),
                r = o(988411),
                i = o.n(r);
            class s {
                constructor(e) {
                    this._alive = new(i()), this._container = new(i()), this._width = new(i()), this._height = new(i()), this._fullscreen = new(i()), this._detachable = new(i()), this._fullscreenable = new(i()), this._visible = new(i()), this._availWidth = new(i()), this._availHeight = new(i()), this._owner = new(i()), this._ownersStack = [], this.owner = this._owner.readonly(), this._bridge = {
                        alive: this._alive.readonly(),
                        container: this._container.readonly(),
                        width: this._width.readonly(),
                        height: this._height.readonly(),
                        fullscreen: this._fullscreen.readonly(),
                        detachable: this._detachable.readonly(),
                        fullscreenable: this._fullscreenable.readonly(),
                        visible: this._visible.readonly(),
                        availWidth: this._availWidth.readonly(),
                        availHeight: this._availHeight.readonly(),
                        remove: () => {
                            const e = this._owner.value();
                            e && e.remove && e.remove()
                        },
                        negotiateWidth: e => {
                            const t = this._owner.value();
                            t && t.negotiateWidth && t.negotiateWidth(e)
                        },
                        negotiateHeight: e => {
                            const t = this._owner.value();
                            t && t.negotiateHeight && t.negotiateHeight(e)
                        },
                        requestFullscreen: () => {
                            const e = this._owner.value();
                            e && e.requestFullscreen && e.requestFullscreen()
                        },
                        exitFullscreen: () => {
                            const e = this._owner.value();
                            e && e.exitFullscreen && e.exitFullscreen()
                        },
                        detach: e => {
                            const t = this._owner.value();
                            t && t.detach && t.detach(e)
                        },
                        attach: () => {
                            const e = this._owner.value();
                            e && e.attach && e.attach()
                        }
                    }, e && this.pushOwner(e)
                }
                bridge() {
                    return this._bridge
                }
                pushOwner(e) {
                    if (!e.alive.value()) return;
                    for (const e of this._ownersStack) this._unsubscribeOwner(e);
                    const t = {
                        owner: e
                    };
                    this._ownersStack.push(t), this._subscribeOwner(t)
                }
                _subscribeOwner(e) {
                    const t = e.owner;
                    if (e.deathWatcher || (this._alive.setValue(!0), e.deathWatcher = t.alive.spawn(), e.deathWatcher.subscribe((t => {
                            t || this._deadHandler(e)
                        }))), this._owner.setValue(t), !e.subscriptions) {
                        const o = e.subscriptions = [];
                        this._visible.setValue(!1);
                        const n = (e, t) => {
                            if (e) {
                                const n = e.spawn();
                                o.push(n), n.subscribe((e => {
                                    t.setValue(e)
                                }), {
                                    callWithLast: !0
                                })
                            } else t.deleteValue()
                        };
                        n(t.container, this._container), n(t.width, this._width), n(t.height, this._height), n(t.fullscreen, this._fullscreen), n(t.detachable, this._detachable), n(t.fullscreenable, this._fullscreenable), n(t.availWidth, this._availWidth), n(t.availHeight, this._availHeight), n(t.visible, this._visible)
                    }
                }
                _unsubscribeOwner(e, t) {
                    if (e.subscriptions) {
                        for (const t of e.subscriptions) t.unsubscribe();
                        e.subscriptions = null
                    }
                    t && e.deathWatcher && (e.deathWatcher.unsubscribe(), e.deathWatcher = null)
                }
                _deadHandler(e) {
                    const t = this._ownersStack.indexOf(e);
                    (0, n.assert)(-1 !== t, "sanitized owner should be in stack");
                    for (let e = this._ownersStack.length - 1; e >= t; e--) this._unsubscribeOwner(this._ownersStack[e], !0);
                    this._ownersStack.length = t, t > 0 ? this._subscribeOwner(this._ownersStack[t - 1]) : (this._alive.setValue(!1), this._owner.deleteValue())
                }
            }
        },
        90523: (e, t, o) => {
            o.d(t, {
                Root: () => u
            });
            var n = o(988411),
                r = o.n(n),
                i = o(581996);
            class s {
                constructor(e) {
                    this._document = e, this.isFullscreen = new(r());
                    const t = () => {
                        const e = ["fullscreenElement", "webkitFullscreenElement", "mozFullscreenElement", "mozFullScreenElement", "msFullscreenElement"];
                        for (let t = 0; t < e.length; t++) {
                            const o = e[t];
                            if (o in this._document) {
                                this.isFullscreen.setValue(!!this._document[o]);
                                break
                            }
                        }
                    };
                    t();
                    for (const o of ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"]) e.addEventListener(o, t, !1)
                }
                enter() {
                    const e = this._document.documentElement;
                    for (const t of ["requestFullscreen", "mozRequestFullScreen", "webkitRequestFullscreen", "msRequestFullscreen"])
                        if ("function" == typeof e[t]) {
                            e[t]();
                            break
                        }
                    this.isFullscreen.setValue(!0)
                }
                exit() {
                    const e = this._document;
                    for (const t of ["exitFullscreen", "mozCancelFullScreen", "mozExitFullscreen", "webkitExitFullscreen", "msExitFullscreen"])
                        if ("function" == typeof e[t]) {
                            e[t]();
                            break
                        }
                    this.isFullscreen.setValue(!1)
                }
            }
            var l = o(554433),
                a = o(314802),
                c = o(650151),
                d = o(638456);
            class u {
                constructor(e) {
                    this._updateDocumentHeight = e => {
                        "visual" === this._viewportType && this._window.document.documentElement.style.setProperty("height", `${e}px`, "important")
                    }, this._window = e, this._fullscreenApi = new s(e.document), this._viewportType = d.CheckMobile.iOS() && !(0, a.isOnMobileAppPage)("any") && this._window.visualViewport ? "visual" : "quirks", "visual" === this._viewportType ? this._viewport = (0, c.ensure)(this._window.visualViewport) : this._viewport = this._window;
                    const t = this._layoutSizeSensor = this._window.document.createElement("div");
                    t.id = "layout-size-sensor", t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.right = "0", t.style.bottom = "0", t.style.pointerEvents = "none", t.style.visibility = "hidden", this._initFullscreen()
                }
                allocate() {
                    this.free();
                    const e = this._window.document,
                        t = e.createElement("div");
                    t.classList.add("js-rootresizer__contents"), t.style.position = "relative", t.style.width = "100%", t.style.height = "100%", e.body.insertAdjacentElement("afterbegin", t), e.body.insertAdjacentElement("afterbegin", this._layoutSizeSensor), this._visibilityApi = new l.VisibilityApi(this._window.document);
                    const o = {
                        alive: new(r())(!0),
                        fullscreenable: new(r())(!0),
                        container: new(r())(t),
                        width: new(r()),
                        height: new(r()),
                        availWidth: new(r()),
                        availHeight: new(r()),
                        visible: this._visibilityApi.isVisible,
                        fullscreen: this._fullscreenApi.isFullscreen,
                        remove: () => {
                            o.alive.setValue(!1)
                        },
                        attach: () => {
                            o.alive.setValue(!1), this._window.close()
                        },
                        requestFullscreen: () => {
                            this._requestFullscreen()
                        },
                        exitFullscreen: () => {
                            this._exitFullscreen()
                        }
                    };
                    return o.alive.subscribe((e => {
                        e || o !== this._area || this.free()
                    })), this._area = o, this._resizeHandler = () => {
                        const e = this._width(o) || 800,
                            t = this._height(o) || 600;
                        o.availHeight.setValue(t), o.availWidth.setValue(e), o.height.setValue(t), o.width.setValue(e)
                    }, this._area.height.subscribe(this._updateDocumentHeight, {
                        callWithLast: !0
                    }), this._resizeHandler(), this._viewport.addEventListener("resize", this._resizeHandler), new i.ResizerDetacherState(o).bridge()
                }
                free() {
                    if (this._resizeHandler && (this._viewport.removeEventListener("resize", this._resizeHandler), this._resizeHandler = void 0), this._visibilityApi && (this._visibilityApi.destroy(), this._visibilityApi = void 0), this._area) {
                        const e = this._area;
                        this._area = void 0, e.height.unsubscribe(this._updateDocumentHeight), e.alive.setValue(!1);
                        const t = e.container.value(),
                            o = null == t ? void 0 : t.parentElement;
                        o && (o.removeChild(t), o.removeChild(this._layoutSizeSensor))
                    }
                }
                _height(e) {
                    if ("visual" === this._viewportType) return this._layoutSizeSensor.clientHeight;
                    return e.container.value().clientHeight
                }
                _width(e) {
                    return e.container.value().clientWidth
                }
                _requestFullscreen() {
                    this._fullscreenApi.enter()
                }
                _exitFullscreen() {
                    this._fullscreenApi.exit()
                }
                _initFullscreen() {
                    this._fullscreenApi.isFullscreen.subscribe((e => {
                        this._resizeHandler && this._resizeHandler()
                    }))
                }
            }
        },
        554433: (e, t, o) => {
            o.d(t, {
                VisibilityApi: () => i
            });
            var n = o(988411),
                r = o.n(n);
            class i {
                constructor(e) {
                    let t;
                    this.isVisible = new(r())(!0);
                    let o = null;
                    for (const n of ["", "moz", "ms", "webkit"]) {
                        const r = n ? `${n}Hidden` : "hidden";
                        if (r in e) {
                            t = `${n}visibilitychange`, o = () => {
                                this.isVisible.setValue(!e[r])
                            }, o(), e.addEventListener(t, o, !1);
                            break
                        }
                    }
                    this.destroy = () => {
                        o && (e.removeEventListener(t, o, !1), o = null)
                    }
                }
            }
        },
        849289: (e, t, o) => {
            var n, r, i, s = o(823127),
                l = o(77034);

            function a() {
                return n || (this instanceof a ? void(n = this) : new a)
            }
            a.prototype.browser = function() {
                return r || (r = l.name + " " + l.version), r
            }, a.prototype.setBrowser = function(e) {
                "string" == typeof e && e && (r = e)
            }, a.prototype.os = function() {
                if (!i) {
                    var e = Object.keys(l);
                    i = ["mac", "windows", "windowsphone", "linux", "chromeos", "android", "ios", "blackberry", "firefoxos", "webos", "bada", "tizen", "sailfish"].filter((function(t) {
                        return e.includes(t)
                    }))[0]
                }
                return i
            }, a.prototype.setOS = function(e) {
                "string" == typeof e && e && (i = e)
            }, a.prototype.cookieEnabled = function() {
                return navigator.cookieEnabled
            }, a.prototype.viewportSize = function() {
                return s(window).width() + " x " + s(window).height()
            }, a.prototype.screenSize = function() {
                return window.screen && (screen.width || screen.availWidth) + " x " + (screen.height || screen.availHeight) || "unknown"
            }, a.prototype.colorDepth = function() {
                return window.screen && screen.colorDepth || "unknown"
            }, a.prototype.pixelRatio = function() {
                return window.devicePixelRatio || 0
            }, a.prototype.wsTestResult = function() {
                return "Pending"
            }, a.prototype.maxTouchPoints = function() {
                return navigator.maxTouchPoints || 0
            }, a.prototype.orientation = function() {
                return "onorientationchange" in window
            }, a.prototype.touchevents = function() {
                return "ontouchstart" in window
            }, a.prototype.hover = function() {
                try {
                    return window.matchMedia("(any-hover: hover)").matches
                } catch (e) {
                    return null
                }
            }, a.prototype.state = function() {
                return {
                    os: this.os(),
                    browser: this.browser(),
                    cookieEnabled: this.cookieEnabled(),
                    viewportSize: this.viewportSize(),
                    screenSize: this.screenSize(),
                    colorDepth: this.colorDepth(),
                    pixelRatio: this.pixelRatio(),
                    maxTouchPoints: this.maxTouchPoints(),
                    orientation: this.orientation(),
                    touchevents: this.touchevents(),
                    hover: this.hover()
                }
            }, e.exports = a
        },
        414879: (e, t, o) => {
            var n, r;
            o.r(t), o.d(t, {
                    WeekDays: () => n,
                    Months: () => r
                }),
                function(e) {
                    e[e.SUNDAY = 1] = "SUNDAY",
                        e[e.MONDAY = 2] = "MONDAY", e[e.TUESDAY = 3] = "TUESDAY", e[e.WEDNESDAY = 4] = "WEDNESDAY", e[e.THURSDAY = 5] = "THURSDAY", e[e.FRIDAY = 6] = "FRIDAY", e[e.SATURDAY = 7] = "SATURDAY"
                }(n || (n = {})),
                function(e) {
                    e[e.JANUARY = 0] = "JANUARY", e[e.FEBRUARY = 1] = "FEBRUARY", e[e.MARCH = 2] = "MARCH", e[e.APRIL = 3] = "APRIL", e[e.MAY = 4] = "MAY", e[e.JUNE = 5] = "JUNE", e[e.JULY = 6] = "JULY", e[e.AUGUST = 7] = "AUGUST", e[e.SEPTEMBER = 8] = "SEPTEMBER", e[e.OCTOBER = 9] = "OCTOBER", e[e.NOVEMBER = 10] = "NOVEMBER", e[e.DECEMBER = 11] = "DECEMBER"
                }(r || (r = {}))
        },
        936410: (e, t, o) => {
            o.r(t), o.d(t, {
                monthsFullNames: () => i,
                monthsShortNames: () => s,
                weekDaysFullNames: () => l,
                weekDaysShortNames: () => a,
                weekDaysMiniNames: () => c
            });
            var n = o(777754),
                r = o(414879);
            const i = {
                    [r.Months.JANUARY]: n.t(null, void 0, o(926910)),
                    [r.Months.FEBRUARY]: n.t(null, void 0, o(316467)),
                    [r.Months.MARCH]: n.t(null, void 0, o(684675)),
                    [r.Months.APRIL]: n.t(null, void 0, o(997637)),
                    [r.Months.MAY]: n.t(null, void 0, o(668327)),
                    [r.Months.JUNE]: n.t(null, void 0, o(49385)),
                    [r.Months.JULY]: n.t(null, void 0, o(323230)),
                    [r.Months.AUGUST]: n.t(null, void 0, o(486797)),
                    [r.Months.SEPTEMBER]: n.t(null, void 0, o(661132)),
                    [r.Months.OCTOBER]: n.t(null, void 0, o(290784)),
                    [r.Months.NOVEMBER]: n.t(null, void 0, o(171194)),
                    [r.Months.DECEMBER]: n.t(null, void 0, o(55669))
                },
                s = {
                    [r.Months.JANUARY]: n.t(null, void 0, o(795425)),
                    [r.Months.FEBRUARY]: n.t(null, void 0, o(835050)),
                    [r.Months.MARCH]: n.t(null, void 0, o(651369)),
                    [r.Months.APRIL]: n.t(null, void 0, o(442762)),
                    [r.Months.MAY]: n.t(null, {
                        context: "short"
                    }, o(227991)),
                    [r.Months.JUNE]: n.t(null, void 0, o(715224)),
                    [r.Months.JULY]: n.t(null, void 0, o(6215)),
                    [r.Months.AUGUST]: n.t(null, void 0, o(38465)),
                    [r.Months.SEPTEMBER]: n.t(null, void 0, o(757902)),
                    [r.Months.OCTOBER]: n.t(null, void 0, o(73546)),
                    [r.Months.NOVEMBER]: n.t(null, void 0, o(671230)),
                    [r.Months.DECEMBER]: n.t(null, void 0, o(92203))
                },
                l = {
                    [r.WeekDays.SUNDAY]: n.t(null, void 0, o(272149)),
                    [r.WeekDays.MONDAY]: n.t(null, void 0, o(561199)),
                    [r.WeekDays.TUESDAY]: n.t(null, void 0, o(944979)),
                    [r.WeekDays.WEDNESDAY]: n.t(null, void 0, o(107147)),
                    [r.WeekDays.THURSDAY]: n.t(null, void 0, o(107951)),
                    [r.WeekDays.FRIDAY]: n.t(null, void 0, o(772970)),
                    [r.WeekDays.SATURDAY]: n.t(null, void 0, o(101144))
                },
                a = {
                    [r.WeekDays.SUNDAY]: n.t(null, void 0, o(186577)),
                    [r.WeekDays.MONDAY]: n.t(null, void 0, o(783085)),
                    [r.WeekDays.TUESDAY]: n.t(null, void 0, o(794316)),
                    [r.WeekDays.WEDNESDAY]: n.t(null, void 0, o(875094)),
                    [r.WeekDays.THURSDAY]: n.t(null, void 0, o(409787)),
                    [r.WeekDays.FRIDAY]: n.t(null, void 0, o(300564)),
                    [r.WeekDays.SATURDAY]: n.t(null, void 0, o(936835))
                },
                c = {
                    [r.WeekDays.SUNDAY]: n.t(null, {
                        context: "day_of_week"
                    }, o(85954)),
                    [r.WeekDays.MONDAY]: n.t(null, {
                        context: "day_of_week"
                    }, o(11268)),
                    [r.WeekDays.TUESDAY]: n.t(null, {
                        context: "day_of_week"
                    }, o(831533)),
                    [r.WeekDays.WEDNESDAY]: n.t(null, {
                        context: "day_of_week"
                    }, o(226230)),
                    [r.WeekDays.THURSDAY]: n.t(null, {
                        context: "day_of_week"
                    }, o(24793)),
                    [r.WeekDays.FRIDAY]: n.t(null, {
                        context: "day_of_week"
                    }, o(519801)),
                    [r.WeekDays.SATURDAY]: n.t(null, {
                        context: "day_of_week"
                    }, o(963331))
                }
        },
        470316: (e, t, o) => {
            o.r(t), o.d(t, {
                Modifiers: () => n.Modifiers,
                hashFromEvent: () => n.hashFromEvent,
                hashShiftPlusEnter: () => n.hashShiftPlusEnter,
                humanReadableHash: () => n.humanReadableHash,
                humanReadableModifiers: () => n.humanReadableModifiers,
                isMacKeyboard: () => n.isMacKeyboard,
                modifiersFromEvent: () => n.modifiersFromEvent
            });
            var n = o(591800)
        },
        564894: (e, t, o) => {
            o.d(t, {
                registerService: () => s,
                unregisterService: () => l,
                hasService: () => a,
                service: () => c,
                waitServiceRegistered: () => d
            });
            var n = o(76797);
            const r = {},
                i = new Map;

            function s(e, t) {
                if (a(e)) throw new Error("Service already registered");
                r[e.id] = t;
                const o = i.get(e.id);
                void 0 !== o && (i.delete(e.id), o.resolve(t))
            }

            function l(e) {
                if (!a(e)) throw new Error("Service not found");
                r[e.id] = void 0
            }

            function a(e) {
                return void 0 !== r[e.id]
            }

            function c(e) {
                const t = r[e.id];
                if (void 0 === t) throw new Error("ServiceLocator: Service " + e.id + " not found");
                return t
            }

            function d(e) {
                if (a(e)) return Promise.resolve(c(e));
                let t = i.get(e.id);
                return void 0 === t && (t = (0, n.createDeferredPromise)(), i.set(e.id, t)), t.promise
            }
        },
        919346: (e, t, o) => {
            o.r(t), o.d(t, {
                StdTheme: () => l.StdTheme,
                getStdChartTheme: () => d,
                getStdThemeNames: () => c,
                getThemeNameIfStdTheme: () => p,
                isStdTheme: () => h,
                translateThemeName: () => u
            });
            var n = o(777754),
                r = o(724377);
            const i = JSON.parse('{"content":{"chartProperties":{"scalesProperties":{"textColor":"#131722","lineColor":"rgba(42, 46, 57, 0)","backgroundColor":"#ffffff"},"paneProperties":{"vertGridProperties":{"color":"rgba(42, 46, 57, 0.06)"},"horzGridProperties":{"color":"rgba(42, 46, 57, 0.06)"},"crossHairProperties":{"color":"#9598A1"},"background":"#ffffff","backgroundGradientStartColor":"#ffffff","backgroundGradientEndColor":"#ffffff","separatorColor":"#E0E3EB"}},"sessions":{"graphics":{"backgrounds":{"outOfSession":{"color":"#2962FF","transparency":92},"preMarket":{"color":"#FF9800","transparency":92},"postMarket":{"color":"#2962FF","transparency":92}},"vertlines":{"sessBreaks":{"color":"#4985e7","style":2,"width":1}}}},"mainSourceProperties":{"baseLineColor":"#B2B5BE","candleStyle":{"borderColor":"#378658","upColor":"#089981","wickColor":"#737375","wickUpColor":"#089981","wickDownColor":"#F23645","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645"},"haStyle":{"borderColor":"#378658","upColor":"#089981","wickColor":"#737375","wickUpColor":"#089981","wickDownColor":"#F23645","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645"},"barStyle":{"downColor":"#F23645","upColor":"#089981"},"pnfStyle":{"downColor":"#F23645","upColor":"#089981","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae"},"baselineStyle":{"baselineColor":"#758696","topFillColor1":"rgba(8, 153, 129, 0.28)","topFillColor2":"rgba(8, 153, 129, 0.05)","bottomFillColor1":"rgba(242, 54, 69, 0.05)","bottomFillColor2":"rgba(242, 54, 69, 0.28)","topLineColor":"#089981","bottomLineColor":"#F23645"},"areaStyle":{"transparency":100,"color1":"rgba(41, 98, 255, 0.28)","color2":"#2962FF","linecolor":"#2962FF","linewidth":2,"linestyle":0},"hiloStyle":{"color":"#2962FF","borderColor":"#2962FF","labelColor":"#2962FF"},"columnStyle":{"upColor":"rgba(8, 153, 129, 0.5)","downColor":"rgba(242, 54, 69, 0.5)","priceSource":"close"},"renkoStyle":{"upColor":"#089981","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae","borderUpColorProjection":"#a9dcc3","borderDownColorProjection":"#f5a6ae","wickUpColor":"#089981","wickDownColor":"#F23645"},"lineStyle":{"color":"#2962FF","linewidth":2,"linestyle":0},"kagiStyle":{"downColor":"#F23645","upColor":"#089981","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae"},"pbStyle":{"upColor":"#089981","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae","borderUpColorProjection":"#a9dcc3","borderDownColorProjection":"#f5a6ae"},"rangeStyle":{"upColor":"#089981","downColor":"#F23645","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae"}}}}'),
                s = JSON.parse('{"content":{"chartProperties":{"scalesProperties":{"textColor":"#B2B5BE","lineColor":"rgba(240, 243, 250, 0)","backgroundColor":"#ffffff"},"paneProperties":{"vertGridProperties":{"color":"rgba(240, 243, 250, 0.06)"},"horzGridProperties":{"color":"rgba(240, 243, 250, 0.06)"},"crossHairProperties":{"color":"#9598A1"},"background":"#131722","backgroundGradientStartColor":"#181C27","backgroundGradientEndColor":"#131722","backgroundType":"gradient","separatorColor":"#2A2E39"}},"sessions":{"graphics":{"backgrounds":{"outOfSession":{"color":"#2962FF","transparency":92},"preMarket":{"color":"#FF9800","transparency":92},"postMarket":{"color":"#2962FF","transparency":92}},"vertlines":{"sessBreaks":{"color":"#4985e7","style":2,"width":1}}}},"mainSourceProperties":{"baseLineColor":"#5d606b","candleStyle":{"borderColor":"#378658","upColor":"#089981","wickColor":"#B5B5B8","wickUpColor":"#089981","wickDownColor":"#F23645","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645"},"haStyle":{"borderColor":"#378658","upColor":"#089981","wickColor":"#B5B5B8","wickUpColor":"#089981","wickDownColor":"#F23645","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645"},"barStyle":{"downColor":"#F23645","upColor":"#089981"},"pnfStyle":{"downColor":"#F23645","upColor":"#089981","upColorProjection":"#336854","downColorProjection":"#7f323f"},"baselineStyle":{"baselineColor":"#758696","topFillColor1":"rgba(8, 153, 129, 0.28)","topFillColor2":"rgba(8, 153, 129, 0.05)","bottomFillColor1":"rgba(242, 54, 69, 0.05)","bottomFillColor2":"rgba(242, 54, 69, 0.28)","topLineColor":"#089981","bottomLineColor":"#F23645"},"areaStyle":{"transparency":100,"color1":"rgba(41, 98, 255, 0.28)","color2":"#2962FF","linecolor":"#2962FF","linewidth":2,"linestyle":0},"hiloStyle":{"color":"#2962FF","borderColor":"#2962FF","labelColor":"#2962FF"},"columnStyle":{"upColor":"rgba(8, 153, 129, 0.5)","downColor":"rgba(242, 54, 69, 0.5)","priceSource":"close"},"renkoStyle":{"upColor":"#089981","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645","upColorProjection":"#336854","downColorProjection":"#7f323f","borderUpColorProjection":"#336854","borderDownColorProjection":"#7f323f","wickUpColor":"#089981","wickDownColor":"#F23645"},"lineStyle":{"color":"#2962FF","linewidth":2,"linestyle":0},"kagiStyle":{"downColor":"#F23645","upColor":"#089981","upColorProjection":"#336854","downColorProjection":"#7f323f"},"pbStyle":{"upColor":"#089981","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645","upColorProjection":"#336854","downColorProjection":"#7f323f","borderUpColorProjection":"#336854","borderDownColorProjection":"#7f323f"},"rangeStyle":{"upColor":"#089981","downColor":"#F23645","upColorProjection":"#336854","downColorProjection":"#7f323f"}}}}');
            var l = o(61499);

            function a() {
                return {
                    [l.StdTheme.Light]: JSON.parse(JSON.stringify(i)),
                    [l.StdTheme.Dark]: JSON.parse(JSON.stringify(s))
                }
            }

            function c() {
                return [l.StdTheme.Light, l.StdTheme.Dark]
            }

            function d(e) {
                return a()[e]
            }

            function u(e) {
                return {
                    [l.StdTheme.Light]: n.t(null, {
                        context: "colorThemeName"
                    }, o(669841)),
                    [l.StdTheme.Dark]: n.t(null, {
                        context: "colorThemeName"
                    }, o(14642))
                }[e] || e
            }

            function h(e) {
                const t = a();
                return c().some((o => f(t[o], e)))
            }

            function p(e) {
                const t = a(),
                    o = c();
                for (const n of o)
                    if (f(t[n], e)) return n;
                return null
            }

            function f(e, t) {
                let o = e.content === t.content;
                return function(e = {}, t) {
                    try {
                        w(e, [], t)
                    } catch (e) {
                        return
                    }
                }(e.content, ((e, n) => {
                    const i = function(e, t = {}) {
                        let o = t;
                        for (let t = 0; t < e.length; t++) {
                            if (!o || "object" != typeof o) return;
                            o = o[e[t]]
                        }
                        if ("string" == typeof o || "number" == typeof o) return o;
                        return
                    }(e, t.content);
                    return o = function(e, t) {
                        if (e === t) return !0;
                        if ("string" != typeof e || "string" != typeof t) return !1;
                        try {
                            return function(e, t) {
                                return Math.hypot(e[3] * e[0] - t[3] * t[0], e[3] * e[1] - t[3] * t[1], e[3] * e[2] - t[3] * t[2], 255 * e[3] - 255 * t[3]) < 48
                            }((0, r.parseRgba)(e), (0, r.parseRgba)(t))
                        } catch (e) {}
                        return !1
                    }(n, i), !o
                })), o
            }

            function w(e, t, o) {
                for (const n in e)
                    if (e.hasOwnProperty(n)) {
                        const r = t.concat(n);
                        if ("object" == typeof e[n]) w(e[n], r, o);
                        else if (o(r, e[n])) throw new Error("exit")
                    }
            }
        },
        61499: (e, t, o) => {
            var n;
            o.d(t, {
                    StdTheme: () => n
                }),
                function(e) {
                    e.Light = "light", e.Dark = "dark"
                }(n || (n = {}))
        },
        224743: (e, t, o) => {
            o.d(t, {
                globalCloseDelegate: () => r,
                globalCloseMenu: () => i
            });
            var n = o(869403);
            const r = new(o.n(n)());

            function i() {
                r.fire()
            }
        },
        19281: (e, t, o) => {
            o.d(t, {
                reconnectChartApi: () => n,
                setBroker: () => r
            });
            o(386981);

            function n(e) {
                const t = window.ChartApiInstance;
                window.is_authenticated && (t.disconnect(), e && t.authTokenManager().reset(), setTimeout((() => t.connect()), 500))
            }

            function r(e) {
                window.ChartApiInstance.setBroker(e)
            }
        },
        36921: (e, t, o) => {
            var n, r, i;
            o.d(t, {
                    AdUnit: () => n,
                    Placement: () => r,
                    PlacementTargeting: () => i
                }),
                function(e) {
                    e.IdeasStream = "ideas stream", e.Platform = "platform", e.PublishedIdea = "published idea", e.NewMainIdeasStream = "new main ideas stream", e.News = "news"
                }(n || (n = {})),
                function(e) {
                    e.Symbols = "symbols", e.Platform = "platform", e.Profile = "profile", e.OpenedIdea = "opened idea", e.Feeds = "feeds", e.HeatMap = "heatmap", e.Screener = "screener", e.MainPage = "main page", e.NewsPage = "news page", e.NewsFeed = "news feed", e.NewsSymbols = "news symbols", e.NewsMarkets = "news markets"
                }(r || (r = {})),
                function(e) {
                    e.Symbols = "symbols", e.Platform = "platform", e.Profile = "profile", e.PublishedOpenedIdea = "published opened idea", e.OpenedIdea = "opened idea chart", e.HeatMap = "heatmap", e.Screener = "screener", e.MainPage = "main page", e.NewsPage = "news page", e.NewsFeed = "news feed", e.NewsSymbols = "news symbols", e.NewsMarkets = "news markets", e.IdeasStreamFeed = "ideas stream feeds"
                }(i || (i = {}))
        },
        622765: (e, t, o) => {
            o.d(t, {
                THIN_SPACE_CHAR: () => r,
                Currencies: () => i,
                currencySignMap: () => s,
                countryToCurrencyMap: () => l,
                currencyEnumToCurrencyMap: () => a,
                paypalSupportedCurrencies: () => c,
                getPriceFormatConfig: () => h
            });
            var n = o(777754);
            const r = " ";
            var i;
            ! function(e) {
                e.Usd = "USD", e.Btc = "BTC", e.Tvc = "TVC", e.Myr = "MYR", e.Gbp = "GBP", e.Inr = "INR"
            }(i || (i = {}));
            const s = {
                    [i.Usd]: "$",
                    [i.Myr]: "RM",
                    [i.Gbp]: "£",
                    [i.Inr]: "₹"
                },
                l = {
                    US: i.Usd,
                    MY: i.Myr,
                    GB: i.Gbp,
                    IN: i.Inr
                },
                a = {
                    USD: i.Usd,
                    MYR: i.Myr,
                    GBP: i.Gbp,
                    INR: i.Inr
                },
                c = (i.Usd, n.t(null, void 0, o(617480)), i.Myr, n.t(null, void 0, o(804162)), i.Gbp, n.t(null, void 0, o(440152)), i.Inr, n.t(null, void 0, o(136418)), [i.Gbp, i.Usd]),
                d = {
                    [i.Usd]: {
                        fraction: ".",
                        thousands: ",",
                        space: ""
                    },
                    [i.Gbp]: {
                        fraction: ".",
                        thousands: ",",
                        space: ""
                    },
                    [i.Myr]: {
                        fraction: ".",
                        thousands: ",",
                        space: r
                    },
                    [i.Inr]: {
                        fraction: ".",
                        thousands: ",",
                        space: r,
                        isLongCurrency: !0
                    }
                },
                u = {
                    fraction: ".",
                    thousands: ",",
                    space: r,
                    signInTheEnd: !1,
                    isLongCurrency: !1
                },
                h = e => {
                    var t;
                    return null !== (t = d[e]) && void 0 !== t ? t : u
                }
        },
        267077: (e, t, o) => {
            o.d(t, {
                getCountries: () => i
            });
            var n = o(890740);
            let r = null;
            async function i() {
                var e;
                if (null !== r) return r;
                const t = await (0, n.fetch)("/accounts/countries/", {
                    credentials: "include"
                });
                if (!t.ok) {
                    const e = await t.json();
                    throw Error(String(e))
                }
                const o = await t.json();
                return r = { ...o,
                    current_country_code: null !== (e = o.current_country_code) && void 0 !== e ? e : "US"
                }, r
            }
        },
        527538: (e, t, o) => {
            o.d(t, {
                PredefinedAction: () => n,
                ContentAlign: () => r,
                ActionButtonsLayout: () => i
            });
            var n, r, i;
            o(919346);
            ! function(e) {
                e.Close = "close", e.OpenGopro = "openGopro"
            }(n || (n = {})),
            function(e) {
                e.Center = "center", e.Left = "left"
            }(r || (r = {})),
            function(e) {
                e.Row = "row", e.Column = "column"
            }(i || (i = {}))
        },
        492630: (e, t, o) => {
            function n(e) {
                return Promise.all([o.e(76049), o.e(96216), o.e(97500), o.e(36099), o.e(74472), o.e(62769), o.e(65023), o.e(88230), o.e(18619), o.e(81910), o.e(86256), o.e(7624), o.e(59333), o.e(12275), o.e(33335), o.e(91901), o.e(78707), o.e(83772), o.e(71140), o.e(85761), o.e(33287), o.e(36037), o.e(34145), o.e(64884), o.e(63737), o.e(36720), o.e(37908), o.e(20187), o.e(51907), o.e(62040), o.e(47507), o.e(10302), o.e(20849), o.e(36509), o.e(47523), o.e(89034), o.e(61893), o.e(52669), o.e(53262), o.e(24263), o.e(12768), o.e(90133), o.e(64566), o.e(32805), o.e(149), o.e(56342), o.e(68849), o.e(36979), o.e(29583), o.e(22986), o.e(46871), o.e(4592), o.e(67089), o.e(75514), o.e(66414), o.e(40619), o.e(55567), o.e(16665), o.e(62073), o.e(65679), o.e(15180), o.e(56708), o.e(54692), o.e(78920), o.e(25418), o.e(53936), o.e(42660), o.e(37768), o.e(78703)]).then(o.bind(o, 919380)).then((t => t.openPaymentOrderDialog(e)))
            }
            o.r(t), o.d(t, {
                showPaymentOrderDialog: () => n
            })
        },
        501578: (e, t, o) => {
            var n;
            o.d(t, {
                    StatusExtraData: () => n
                }),
                function(e) {
                    e.Opened = "opened", e.Closed = "closed"
                }(n || (n = {}))
        },
        619057: (e, t, o) => {
            o.d(t, {
                check: () => r
            });
            var n = o(267077);
            async function r() {
                const {
                    is_restricted: e
                } = await (0, n.getCountries)();
                return e
            }
        },
        997959: (e, t, o) => {
            o.r(t), o.d(t, {
                showRestrictedCountryNotificationDialog: () => i
            });
            var n = o(777754),
                r = o(779923);

            function i() {
                (0, r.showWarning)({
                    title: n.t(null, void 0, o(513111)),
                    text: n.t(null, void 0, o(82352))
                })
            }
        },
        664224: (e, t, o) => {
            o.d(t, {
                showSupportDialog: () => n
            });
            o(659863);

            function n(e) {
                return Promise.all([o.e(48206), o.e(46923), o.e(18619), o.e(12275), o.e(33335), o.e(78707), o.e(83772), o.e(71140), o.e(85761), o.e(33287), o.e(36037), o.e(34145), o.e(64884), o.e(37908), o.e(36956), o.e(96246), o.e(4100), o.e(50251), o.e(85783), o.e(62040), o.e(83186), o.e(51537), o.e(13871), o.e(12768), o.e(59893), o.e(31872), o.e(5292), o.e(34902), o.e(75514), o.e(25977), o.e(23127), o.e(24951), o.e(45666), o.e(32312), o.e(79665), o.e(98065), o.e(61591), o.e(36659), o.e(57274)]).then(o.bind(o, 530304)).then((t => new t.SupportDialog(e).open()))
            }
        },
        298297: (e, t, o) => {
            o(984919);
            var n = o(324951),
                r = o(414879),
                i = r.WeekDays,
                s = r.Months,
                l = o(936410),
                a = l.monthsFullNames,
                c = l.monthsShortNames,
                d = l.weekDaysFullNames,
                u = l.weekDaysShortNames,
                h = l.weekDaysMiniNames;
            window.language && (n.locale(window.language, {
                months: [a[s.JANUARY], a[s.FEBRUARY], a[s.MARCH], a[s.APRIL], a[s.MAY], a[s.JUNE], a[s.JULY], a[s.AUGUST], a[s.SEPTEMBER], a[s.OCTOBER], a[s.NOVEMBER], a[s.DECEMBER]],
                monthsShort: [c[s.JANUARY], c[s.FEBRUARY], c[s.MARCH], c[s.APRIL], c[s.MAY], c[s.JUNE], c[s.JULY], c[s.AUGUST], c[s.SEPTEMBER], c[s.OCTOBER], c[s.NOVEMBER], c[s.DECEMBER]],
                weekdays: [d[i.SUNDAY], d[i.MONDAY], d[i.TUESDAY], d[i.WEDNESDAY], d[i.THURSDAY], d[i.FRIDAY], d[i.SATURDAY]],
                weekdaysShort: [u[i.SUNDAY], u[i.MONDAY], u[i.TUESDAY], u[i.WEDNESDAY], u[i.THURSDAY], u[i.FRIDAY], u[i.SATURDAY]],
                weekdaysMin: [h[i.SUNDAY], h[i.MONDAY], h[i.TUESDAY], h[i.WEDNESDAY], h[i.THURSDAY], h[i.FRIDAY], h[i.SATURDAY]],
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "MMM D",
                    l: "M/D/YYYY",
                    LL: "MMM D, YYYY",
                    ll: "MMM D LT",
                    LLL: "LT - LL",
                    lll: "MMM D, YYYY LT",
                    LLLL: "ddd D MMMM YYYY LT",
                    llll: "ddd D MMM YYYY LT"
                },
                calendar: {
                    sameDay: o(777754).t(null, void 0, o(69130)).format({
                        specialSymbolOpen: "[",
                        specialSymbolClose: "]",
                        dayTime: "LT"
                    }),
                    nextDay: o(777754).t(null, void 0, o(225744)).format({
                        specialSymbolOpen: "[",
                        specialSymbolClose: "]",
                        dayTime: "LT"
                    }),
                    nextWeek: o(777754).t(null, void 0, o(529140)).format({
                        specialSymbolOpen: "[",
                        specialSymbolClose: "]",
                        dayTime: "LT",
                        dayName: "dddd"
                    }),
                    lastDay: o(777754).t(null, void 0, o(393650)).format({
                        specialSymbolOpen: "[",
                        specialSymbolClose: "]",
                        dayTime: "LT"
                    }),
                    lastWeek: o(777754).t(null, void 0, o(448948)).format({
                        specialSymbolOpen: "[",
                        specialSymbolClose: "]",
                        dayTime: "LT",
                        dayName: "dddd"
                    }),
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return e === o(777754).t(null, void 0, o(542974)) ? e : o(777754).t(null, {
                            context: "time_range"
                        }, o(544919)).replace("%s", e)
                    },
                    past: function(e) {
                        return e === o(777754).t(null, void 0, o(542974)) ? e : o(777754).t(null, {
                            context: "time_range"
                        }, o(692466)).replace("%s", e)
                    },
                    s: o(777754).t(null, void 0, o(542974)),
                    m: function(e) {
                        return o(777754).t(null, {
                            plural: "%d minutes",
                            count: e
                        }, o(425821)).replace("%d", e)
                    },
                    mm: function(e) {
                        return o(777754).t(null, {
                            plural: "%d minutes",
                            count: e
                        }, o(425821)).replace("%d", e)
                    },
                    h: o(777754).t(null, void 0, o(290487)),
                    hh: function(e) {
                        return o(777754).t(null, {
                            plural: "%d hours",
                            count: e
                        }, o(189279)).replace("%d", e)
                    },
                    d: o(777754).t(null, void 0, o(19304)),
                    dd: function(e) {
                        return o(777754).t(null, {
                            plural: "%d days",
                            count: e
                        }, o(482792)).replace("%d", e)
                    },
                    M: o(777754).t(null, void 0, o(268733)),
                    MM: function(e) {
                        return o(777754).t(null, {
                            plural: "%d months",
                            count: e
                        }, o(117108)).replace("%d", e)
                    },
                    y: o(777754).t(null, void 0, o(802730)),
                    yy: function(e) {
                        return o(777754).t(null, {
                            plural: "%d years",
                            count: e
                        }, o(406550)).replace("%d", e)
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), n.locale(window.language)), e.exports = n
        },
        733094: (e, t, o) => {
            o.d(t, {
                Pro: () => h
            });
            var n, r = o(890740),
                i = o(51237),
                s = o(960489),
                l = o(869403),
                a = o.n(l),
                c = o(588948),
                d = o(622765);
            ! function(e) {
                e[e.ProPlan = 1] = "ProPlan", e[e.NewsFeed = 3] = "NewsFeed", e[e.Exchange = 4] = "Exchange", e[e.Connection = 6] = "Connection", e[e.Coins = 8] = "Coins"
            }(n || (n = {}));
            const u = (0, c.getFreshInitData)();
            class h {
                constructor(e) {
                    var t;
                    this.packagesUpdated = new(a()), this.currencies = [d.Currencies.Usd, d.Currencies.Myr, d.Currencies.Gbp, d.Currencies.Inr], this.PRODUCT_TYPES = {
                        pro_plan: 1,
                        exchange: 4,
                        connection: 6,
                        coins: 8
                    }, this._products = {}, this._discounts = {}, this._offers = [], this._order = [], this._freeProductIds = ["tv-scripting", "tv-basicstudies", "tv-prostudies", "Script$USER", "Script$EDGR", "ESD$TV"], this._invalidShopConf = !1, e && (this._offers = null !== (t = e.offers) && void 0 !== t ? t : [], this._invalidShopConf = !0, "undefined" != typeof window && window.loginStateChange.subscribe(this, this.onLoginStateChange))
                }
                updateShopConf(e = !1) {
                    return this._shopConfPromise || (this._shopConfPromise = (0, r.fetch)("/market/shopconf/", {
                        credentials: "include"
                    }).then((e => e.json())).then((t => {
                        this._products = t.all_products && JSON.parse(t.all_products) || {}, this._discounts = t.discounts && JSON.parse(t.discounts) || {}, this._offers = t.offers && JSON.parse(t.offers) || [], this._order = t.order && JSON.parse(t.order) || [], this._invalidShopConf = !1, delete this._shopConfPromise, e || this.packagesUpdated.fire()
                    })).catch((() => {
                        delete this._shopConfPromise
                    }))), this._shopConfPromise
                }
                invalidateShopConf() {
                    this._invalidShopConf = !0
                }
                isInvalidShopConf() {
                    return !!this._invalidShopConf
                }
                ensureValidShopConf() {
                    return new Promise((e => this.runOrUpdate(e)))
                }
                onLoginStateChange(e) {
                    e || this.updateShopConf()
                }
                runOrUpdate(e, t) {
                    this.isInvalidShopConf() ? this.updateShopConf(t).then(e) : e()
                }
                getIDCExchanges(e) {
                    const t = this._products;
                    if (u)
                        if (e) {
                            if (u.idc_delay_exchanges_list) return u.idc_delay_exchanges_list
                        } else if (u.idc_exchanges_list) return u.idc_exchanges_list;
                    return Object.keys(t).filter((o => {
                        const n = t[o];
                        return !!this.isExchange(n) && (e ? n.idc_service_codes_delay : n.idc_service_codes)
                    })).map((e => t[e].exchange))
                }
                getProduct(e) {
                    if (e in this._products) return this._products[e];
                    if (this.isDiscountProductId(e)) {
                        const t = this._discounts[e],
                            o = {
                                discount_text_id: e,
                                ...this._products[t.product]
                            };
                        return this.currencies.forEach((e => {
                            const n = "USD" === e ? "" : `_${e}`;
                            t[`cost${n}`] && (o[`cost${n}`] = t[`cost${n}`]), t[`cost_annual${n}`] && (o[`cost_annual${n}`] = t[`cost_annual${n}`]), t[`cost_biennial${n}`] && (o[`cost_biennial${n}`] = t[`cost_biennial${n}`])
                        })), void 0 !== t.fixed_cost && (o.fixed_cost = t.fixed_cost), void 0 !== t.extra_days && (o.extra_days = t.extra_days), void 0 !== t.billing_cycle && (o.billing_cycle = t.billing_cycle), o
                    }
                    return {}
                }
                async findProduct(e) {
                    if (this.isInvalidShopConf()) try {
                        await this.updateShopConf()
                    } catch (e) {}
                    return this.getProduct(e)
                }
                isProductDefined(e) {
                    return !(!e || !Object.keys(e).length)
                }
                getDiscountProduct(e) {
                    var t;
                    return null !== (t = this._discounts[e]) && void 0 !== t ? t : {}
                }
                isOffer(e, t) {
                    return Object.keys(this._discounts).filter((e => !this._discounts[e].expired && this._discounts[e].offer_type === t)).includes(e)
                }
                getProductId(e) {
                    var t, o, n;
                    return e ? this.isExchange(e) || this.isCoinsProduct(e) ? null !== (t = e.text_id) && void 0 !== t ? t : "" : null !== (n = null !== (o = e.discount_text_id) && void 0 !== o ? o : e.text_id) && void 0 !== n ? n : "" : ""
                }
                isDiscountProductId(e) {
                    return e in this._discounts
                }
                isPlan(e) {
                    return e.type === this.PRODUCT_TYPES.pro_plan
                }
                isExchange(e) {
                    return e.type === this.PRODUCT_TYPES.exchange
                }
                isCoinsProduct(e) {
                    return e.type === this.PRODUCT_TYPES.coins
                }
                getActiveExchanges() {
                    return this.getProductsByType(this.PRODUCT_TYPES.exchange).filter((e => !e.disabled && Boolean(e.cost)))
                }
                getExchange(e) {
                    const t = this.getProductsByType(this.PRODUCT_TYPES.exchange);
                    let o;
                    for (let n = 0; n < t.length; n += 1)
                        if (o = t[n], o.exchange === e || o.included_exchanges && o.included_exchanges.includes(e)) return o;
                    return {}
                }
                getCost(e, t, o) {
                    let n = "";
                    void 0 !== o && o !== d.Currencies.Usd && (n = `_${o}`);
                    const r = `cost${n}`,
                        i = `cost_annual${n}`,
                        l = `cost_biennial${n}`;
                    let a = 1;
                    if (s.BillingCycle.TwoYears === t) {
                        if (e.fixed_cost || (a = 24), e[l]) return e[l] * a;
                        if (e[i]) return e[i] * a
                    } else if (s.BillingCycle.OneYear === t) {
                        if (e.fixed_cost || (a = 12), e[i]) return e[i] * a
                    } else s.BillingCycle.ThreeMonths === t && (e.fixed_cost || (a = 3));
                    return e[r] ? e[r] * a : e.cost * a
                }
                getProductsByType(e) {
                    const t = Object.keys(this._products).filter((t => this._products[t].type === e)).map((e => this.getProduct(e)));
                    return e === n.Exchange ? t.sort(((e, t) => Math.sign(e.order - t.order))) : t
                }
                getProPlans() {
                    return this.getProductsByType(this.PRODUCT_TYPES.pro_plan).map((e => e.text_id))
                }
                getSuperProduct(e) {}
                getStudiesOrder() {
                    return []
                }
                hasPackage(e) {
                    return this._offers.includes(e) || this._freeProductIds.includes(e)
                }
                updateUser(e) {}
                isPro() {
                    return !!this._getUser().pro_plan
                }
                isTrial() {
                    return !!this._getUser().is_trial
                }
                isPaidPro() {
                    return this.isPro() && !this.isTrial()
                }
                userHasRealtimeForExchange(e) {
                    const t = (null != e ? e : "").toLowerCase().replace("exchange-", ""),
                        o = this.getExchange(t);
                    if (!this.isProductDefined(o)) return !1;
                    if (this._offers.includes("exchange-" + o.exchange)) return !0;
                    if (o.included_exchanges)
                        for (let e = 0; e < o.included_exchanges.length; e += 1)
                            if (this._offers.includes("exchange-" + o.included_exchanges[e])) return !0;
                    return !1
                }
                hasRealtimeForExchange(e, t) {
                    const o = this.getProductsByType(this.PRODUCT_TYPES.exchange);
                    let n, r;
                    const i = (null != e ? e : "").toLowerCase();
                    for (let e = 0; e < o.length; e += 1)
                        if (n = o[e], n.exchange === i || (n.included_exchanges || []).includes(i)) {
                            if (n.disabled && !n.included_exchanges) return !1;
                            if (!t) return !0;
                            if (n.included_exchanges) {
                                let e;
                                for (let o = 0; o < n.included_exchanges.length; o += 1)
                                    if (r = this.getProduct("exchange-" + n.included_exchanges[o]), this.isProductDefined(r) && this.isExchange(r) && this._exHasRealtimeForType(r, t)) {
                                        e = !0;
                                        break
                                    }
                                if (!e) return !1
                            } else if (!this._exHasRealtimeForType(n, t)) return !1;
                            return !0
                        }
                    return !1
                }
                visitExchangesPage(e = {}) {
                    var t;
                    let o = s.BillingCycle.Monthly,
                        n = !0;
                    const r = this._getUser();
                    r.is_trial || (o = null !== (t = r.pro_plan_billing_cycle) && void 0 !== t ? t : s.BillingCycle.OneYear, n = !1), (0,
                        i.visitPaymentPage)(o, {
                        exchangesOnly: !0,
                        newWindow: e.newWindow,
                        paymentMethod: e.paymentMethod,
                        fixedCycle: n,
                        selectedPackages: e.selectedPackages
                    })
                }
                offers() {
                    return this._offers
                }
                isSupportAvailable() {
                    return Boolean(u.is_support_available)
                }
                discounts() {
                    return this._discounts
                }
                hash() {
                    const e = this._offers.slice(0);
                    e.sort();
                    const t = {
                        offers: e
                    };
                    return JSON.stringify(t)
                }
                _getUser() {
                    return window.user
                }
                _exHasRealtimeForType(e, t) {
                    return !("stock" === t && !e.is_stocks) && (!("index" === t && !e.is_indices) && !("futures" === t && !e.is_futures))
                }
            }
            "undefined" != typeof window && window.TradingView && (window.TradingView.Pro = h)
        },
        798062: (e, t, o) => {
            function n(e) {
                return decodeURIComponent(e.replace(/\+/g, " ")).replace(/<\/?[^>]+(>|$)/g, "")
            }

            function r(e) {
                const t = /([^&=]+)=?([^&]*)/g,
                    o = {};
                if (!e) return o;
                let r = t.exec(e);
                for (; r;) o[n(r[1])] = n(r[2]), r = t.exec(e);
                return o
            }

            function i() {
                return r(window.location.search.substring(1))
            }

            function s() {
                return r(window.location.hash.split("#")[1])
            }

            function l(e) {
                const t = [];
                for (const o in e) e.hasOwnProperty(o) && null != e[o] && t.push({
                    key: o,
                    pair: encodeURIComponent(o) + "=" + encodeURIComponent(e[o])
                });
                return t.sort(((e, t) => e.key > t.key ? 1 : e.key < t.key ? -1 : 0)).map((e => e.pair)).join("&")
            }
            o.r(t), o.d(t, {
                decode: () => n,
                getQueryParams: () => r,
                getUrlParams: () => i,
                getHashUrlParams: () => s,
                createUrlParams: () => l
            })
        },
        51237: (e, t, o) => {
            o.d(t, {
                visitPaymentPage: () => u
            });
            var n = o(777754),
                r = o(878134),
                i = o(492630),
                s = o(960489),
                l = o(125226),
                a = o(501578),
                c = o(619057),
                d = o(997959);

            function u(e = "y", t = {}) {
                var u;
                const h = null !== (u = t.productName) && void 0 !== u ? u : "pro",
                    p = t.paymentMethod || "paypal",
                    f = "bitcoin" === p ? "Bitcoin payment" : "Paypal payment";
                window.runOrSignIn((async () => {
                    if (await (0, c.check)()) return void(0, d.showRestrictedCountryNotificationDialog)();
                    if ("function" == typeof t.canVisit && !t.canVisit()) return void(t.reloadIfCantVisit ? location.reload() : location.href = "/");
                    if ((0, l.isFeatureEnabled)("braintree-trial-implementation")) return void(0, i.showPaymentOrderDialog)({
                        productId: t.productName,
                        billingCycle: t.exchangesOnly ? s.BillingCycle.Monthly : e,
                        fixedCycle: t.fixedCycle,
                        statusExtraData: t.exchangesExpanded ? a.StatusExtraData.Opened : void 0,
                        exchanges: t.selectedPackages
                    });
                    const o = (0, r.parseHtmlElement)(`<form action="/order/" method="post" ${t.newWindow?'target="_blank"':""}>\n\t\t\t\t\t<input type="hidden" name="product" value="${h}"/>\n\t\t\t\t\t<input type="hidden" name="billing_cycle" value="${e}"/>\n\t\t\t\t\t<input type="hidden" name="fixed_billing_cycle" value="${t.fixedCycle?"1":""}"/>\n\t\t\t\t\t<input type="hidden" name="exchanges_only" value="${t.exchangesOnly?"1":""}"/>\n\t\t\t\t\t<input type="hidden" name="exchanges_expanded" value="${t.exchangesExpanded?"1":""}"/>\n\t\t\t\t\t<input type="hidden" name="selected_packages" value="${(t.selectedPackages||[]).join(",")}"/>\n\t\t\t\t\t<input type="hidden" name="payment_method" value="${p}"/>\n\t\t\t\t</form>`);
                    o && (document.body.appendChild(o), o.submit())
                }), {
                    source: f,
                    paidAccountCheck: window.pro && window.pro.getProduct(h).type === window.pro.PRODUCT_TYPES.pro_plan,
                    paidAccountSuccessButtonText: n.t(null, void 0, o(976111))
                })
            }
        }
    }
]);
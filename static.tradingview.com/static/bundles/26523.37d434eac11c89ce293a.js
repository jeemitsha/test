(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [26523], {
        494386: t => {
            t.exports = {}
        },
        454312: t => {
            t.exports = {}
        },
        107631: t => {
            t.exports = {
                wrapper: "wrapper-NSBB5lqy",
                touch: "touch-NSBB5lqy"
            }
        },
        791325: (t, i, e) => {
            "use strict";
            e.r(i), e.d(i, {
                LEFT_ARROW: () => o,
                UP_ARROW: () => s,
                RIGHT_ARROW: () => n,
                DOWN_ARROW: () => a,
                ENTER: () => h,
                ESC: () => l,
                SPACE: () => r,
                SLASH: () => c
            });
            const o = 37,
                s = 38,
                n = 39,
                a = 40,
                h = 13,
                l = 27,
                r = 32,
                c = 47
        },
        155040: (t, i, e) => {
            "use strict";
            var o = e(779665).pushStreamMultiplexer,
                s = e(226722).TVXWindowEvents,
                n = e(345848).trackEvent,
                a = function() {
                    var t = "tvdesktopnotifications.",
                        i = "tabs-hidden";
                    s.on("desktop-notification-tab-visibility-request", (function() {
                        "true" === TVLocalStorage.getItem(t + i) && TVLocalStorage.setItem(t + i, document.hidden)
                    }));

                    function e(t) {
                        var i = t.split("\n");
                        return i.length > 1 && (t = i[0]), ((t = t.trim()).length > 30 || i.length > 1) && (t = t.substring(0, 30) + "..."), t
                    }

                    function a() {
                        return window.Notification.permission
                    }

                    function h(t) {
                        var i = a();
                        "granted" === i && "function" == typeof t ? t() : "default" === i && window.Notification.requestPermission((function(i) {
                            "granted" === i && "function" == typeof t && t()
                        }))
                    }
                    return window.Notification ? {
                        show: function(l, r, c, d) {
                            o.ownPushStream() && (n("Desktop Notifications", "Notification Show Attempt"), "denied" !== a() && h((function() {
                                TVLocalStorage.setItem(t + i, document.hidden), s.emit("desktop-notification-tab-visibility-request"), setTimeout((function() {
                                    "false" !== TVLocalStorage.getItem(t + i) && document.hidden ? (function(t, i, o, s) {
                                        var n = new window.Notification(t, {
                                            body: e(i),
                                            icon: o || "/static/images/desktop-notification.png"
                                        });
                                        n.onclick = function() {
                                            window.focus(), "function" == typeof s && s()
                                        }, setTimeout(n.close.bind(n), 5e3)
                                    }(l, r, c, d), n("Desktop Notifications", "Notification Show Success")) : n("Desktop Notifications", "Notification Show Tab Visible")
                                }), 100)
                            })))
                        },
                        askPermission: h
                    } : {
                        show: function() {},
                        askPermission: function() {}
                    }
                }();
            t.exports = a
        },
        320335: (t, i, e) => {
            "use strict";
            e.d(i, {
                getPixelsFromEvent: () => s
            });
            const o = [() => navigator.userAgent.includes("Win") && navigator.userAgent.includes("Chrome") ? 1 / window.devicePixelRatio : 1, () => 16, (t = (() => 0)) => {
                var i;
                return .8 * (null !== (i = t()) && void 0 !== i ? i : 0)
            }];

            function s(t, i = (() => ({}))) {
                return {
                    x: t.deltaX * o[t.deltaMode]((() => i().width)),
                    y: t.deltaY * o[t.deltaMode]((() => i().height))
                }
            }
        },
        663989: (t, i, e) => {
            "use strict";
            e.d(i, {
                SidebarCustomScroll: () => p
            });
            var o = e(778785),
                s = e(869403),
                n = e.n(s),
                a = e(318557),
                h = e(368791),
                l = e(404573),
                r = e(320335),
                c = (e(454312), e(107631));
            const d = {
                headerHeight: 0,
                additionalClass: "",
                alwaysVisible: !1,
                showBottomShadow: !0,
                scrollMarginTop: 1,
                bubbleScrollEvent: !1
            };
            class p {
                constructor(t, i, e = {}) {
                    if (this.scrolled = new(n()), this.scrolltoend = new(n()), this.scrolltostart = new(n()), this.visibilityCallbacks = [], this._scrollTargetTop = 0, this._scrollSpeed = 40, this._shadowOffset = 10, this._shadowTop = null, this._shadowBottom = null, this._dragInitialized = !1, this._dragging = !1, this._draggable = null, this._atStart = !1, this._atEnd = !1, this._stickyBottom = null, this._animation = null, this._saved = null, this._options = { ...d,
                            ...e
                        }, this._wrapper = t, this._wrapper.classList.add(c.wrapper), this._content = i, this._headerHeight = this._options.headerHeight,
                        this._scrollMarginTop = this._options.scrollMarginTop, this._scrollBar = document.createElement("div"), this._scrollBar.classList.add("sb-scrollbar", "sb-scrollbar-body"), this._options.additionalClass && this._scrollBar.classList.add(this._options.additionalClass), this._scrollBar.classList.toggle("active-always", this._options.alwaysVisible), this._scrollBarWrapper = document.createElement("div"), this._scrollBarWrapper.classList.add("sb-scrollbar-wrap"), this._touch = o.touch, this._touch) return this._content.style.position = "relative", this._wrapper.classList.add(c.touch), void this._wrapper.addEventListener("scroll", (() => this._onScroll()));
                    this._wrapper.style.overflow = "hidden", this._unsubscribe = (() => {
                        const t = () => {
                                this._dragging || (this._options.alwaysVisible || this._scrollBar.classList.add("active"), this._onScroll())
                            },
                            i = () => {
                                this._dragging || (this._options.alwaysVisible || this._scrollBar.classList.remove("active"), this._onScroll())
                            },
                            e = t => {
                                if (!t.defaultPrevented) {
                                    const i = (0, r.getPixelsFromEvent)(t, (() => ({
                                        height: this._wrapper.clientHeight
                                    }))).y;
                                    this.scroll(-i, 1) || (t.stopPropagation(), t.preventDefault())
                                }
                            };
                        return this._wrapper.addEventListener("mouseenter", t), this._wrapper.addEventListener("mouseleave", i), this._wrapper.addEventListener("wheel", e), () => {
                            this._wrapper.removeEventListener("mouseenter", t), this._wrapper.removeEventListener("mouseleave", i), this._wrapper.removeEventListener("wheel", e)
                        }
                    })(), !1 !== this._options.showTopShadow && (this._shadowTop = document.createElement("div"), this._shadowTop.classList.add("sb-inner-shadow", "top", "i-invisible"), this._wrapper.appendChild(this._shadowTop)), !1 !== this._options.showBottomShadow && (this._shadowBottom = document.createElement("div"), this._shadowBottom.classList.add("sb-inner-shadow"), this._wrapper.appendChild(this._shadowBottom)), this._shadowTop && this._headerHeight && (this._shadowTop.style.top = this._headerHeight - this._shadowOffset + "px"), this._wrapper.appendChild(this._scrollBarWrapper), this._scrollBarWrapper.appendChild(this._scrollBar), this._onScroll()
                }
                isTouch() {
                    return this._touch
                }
                getScrollBar() {
                    return this._scrollBar
                }
                initDraggable() {
                    return this._dragInitialized || (this._draggable = new l.Draggable({
                        axis: "y",
                        source: this._scrollBar,
                        containment: this._scrollBarWrapper,
                        start: () => {
                            this._dragging = !0
                        },
                        stop: () => {
                            this._dragging = !1
                        },
                        drag: () => {
                            this.updateScroll()
                        }
                    }), this._dragInitialized = !0), this
                }
                updateScroll() {
                    if (this._touch) return this;
                    const t = Math.ceil((0, a.position)(this._scrollBar).top - this._scrollMarginTop - this._headerHeight),
                        i = this.getContainerHeightWithoutHeader(),
                        e = (0, a.outerHeight)(this._content),
                        o = e - i - 1;
                    return i <= 0 || (this._scrollTargetTop = o <= 0 ? this._headerHeight : Math.min(-t * e / i + this._headerHeight, this._headerHeight), t + (0, a.contentHeight)(this._scrollBar) + 2 >= i ? this.scrollToEnd() : (this._content.style.top = this._scrollTargetTop + "px", this._onScroll())), this
                }
                getContainerHeightWithoutHeader() {
                    return this._wrapper.getBoundingClientRect().height - this._headerHeight
                }
                getContainerHeight() {
                    return this._wrapper.getBoundingClientRect().height
                }
                getContentHeight() {
                    return this._content.getBoundingClientRect().height
                }
                updateScrollBar() {
                    if (this._touch) return this;
                    const t = (0, a.position)(this._content).top,
                        i = this.getContentHeight(),
                        e = this.getContainerHeight(),
                        o = this.getContainerHeightWithoutHeader(),
                        s = 1 + this._headerHeight,
                        n = o - 2,
                        h = (Math.abs(t) - this._headerHeight) * n / i,
                        l = e * e / i;
                    return this.isContentShort() ? (this._scrollBar.classList.add("js-hidden"), this._wrapper.classList.remove("sb-scroll-active")) : (this._scrollBar.classList.remove("js-hidden"), this._scrollBar.style.height = l + "px", this._scrollBar.style.top = s + h + "px", this._wrapper.classList.add("sb-scroll-active"), this.initDraggable()), this
                }
                scroll(t, i) {
                    const e = (0, a.position)(this._content).top,
                        o = (0, a.outerHeight)(this._content) - this.getContainerHeightWithoutHeader() - 1,
                        s = i || this._scrollSpeed;
                    return o <= 0 || (this._scrollTargetTop = Math.max(-o + this._headerHeight, Math.min(this._headerHeight, e + t * s)), this.setContentTop(this._scrollTargetTop), this._onScroll())
                }
                animateTo(t) {
                    if (this._touch) return this;
                    const i = (0, a.outerHeight)(this._content) - this.getContainerHeightWithoutHeader() - 1;
                    if (i <= 0) return !0;
                    this._scrollTargetTop = Math.max(-i + this._headerHeight, Math.min(this._headerHeight, -t)), this._animation && this._animation.stop(), this._animation = (0, h.doAnimate)({
                        duration: 500,
                        from: parseFloat(getComputedStyle(this._content).top),
                        to: this._scrollTargetTop,
                        onStep: (t, i) => {
                            this._content.style.top = i + "px"
                        },
                        onComplete: () => {
                            this._onScroll()
                        }
                    })
                }
                resize() {
                    const t = (0, a.outerHeight)(this._content),
                        i = (0, a.outerHeight)(this._wrapper);
                    !this._options.vAlignBottom && t < i ? this.atStart() || this.scrollToStart() : this.atEnd() ? this.scrollToEnd() : "number" == typeof this._stickyBottom && this.setContentTop(Math.min(0, this._stickyBottom + (0, a.outerHeight)(this._wrapper) - (0, a.outerHeight)(this._content)))
                }
                resizeHeader(t) {
                    const i = t - this._headerHeight;
                    this._headerHeight = t, this._scrollTargetTop += i, this._shadowTop && (this._shadowTop.style.top = this._headerHeight - this._shadowOffset + "px"), this.resize()
                }
                scrollTo(t, i) {
                    const e = {
                        position: "visible",
                        areaHeight: t instanceof HTMLElement ? (0, a.contentHeight)(t) : 0,
                        ...i
                    };
                    t instanceof HTMLElement && (t = e.offsetTop || (0, a.position)(t).top);
                    const o = (0, a.position)(this._content).top,
                        s = this._content.getBoundingClientRect().height,
                        n = this.getContainerHeightWithoutHeader();
                    if (s - n - 1 <= 0) return !0;
                    const h = -1 * (o - this._headerHeight),
                        l = h + n;
                    let r = 0;
                    if ("visible" === e.position) {
                        if (t > h && t + e.areaHeight < l) return !1;
                        r = t + e.areaHeight > l ? l - t - e.areaHeight : h - t
                    } else "top" === e.position && (r = h - t);
                    return this.scroll(r, 1), this._onScroll(), !1
                }
                scrollToEnd() {
                    const t = (0, a.position)(this._content).top,
                        i = (0, a.outerHeight)(this._content),
                        e = (0, a.outerHeight)(this._wrapper),
                        o = i > e ? t + (e - (i + t)) + 1 : 1;
                    return this.setContentTop(o), this._onScroll(), this
                }
                scrollToStart() {
                    return this.setContentTop(this._headerHeight), this._onScroll(), this
                }
                currentPosition() {
                    return Math.round((0, a.position)(this._content).top)
                }
                atStart() {
                    return Math.round((0, a.position)(this._content).top) >= this._headerHeight
                }
                atEnd(t) {
                    "number" == typeof t && isFinite(t) || (t = 0);
                    const i = Math.round((0, a.position)(this._content).top),
                        e = Math.floor((0, a.outerHeight)(this._content)),
                        o = Math.floor((0,
                            a.outerHeight)(this._wrapper));
                    return e - Math.abs(i) - 1 <= o + t
                }
                checkContentVisibility() {
                    this._onContentVisible()
                }
                subscribeToContentVisible(t, i, e) {
                    this.visibilityCallbacks.push({
                        id: t,
                        element: i,
                        callback: e
                    })
                }
                triggerVisibilityCallbacks(t) {
                    this._onContentVisible(t)
                }
                save() {
                    return this._saved = {
                        top: (0, a.position)(this._content).top,
                        height: (0, a.outerHeight)(this._content)
                    }, this
                }
                restore() {
                    if (this._saved) {
                        if (this._saved.top === (0, a.position)(this._content).top && this._saved.height === (0, a.outerHeight)(this._content)) return this._saved = null, this;
                        this._options.vAlignBottom && (this._saved.top -= (0, a.outerHeight)(this._content) - this._saved.height, this._saved.top > this._headerHeight && (this._saved.top = this._headerHeight)), this.setContentTop(this._saved.top), this._saved = null, this._onScroll(!0)
                    }
                    return this
                }
                setContentTop(t) {
                    return this._touch ? this._options.vAlignBottom && (0, a.outerHeight)(this._content) < (0, a.outerHeight)(this._wrapper) ? (this._wrapper.style.overflowY = "visible", this._content.style.position = "absolute", this._content.style.bottom = "0px") : (this._content.style.position = "relative", this._content.style.position = "auto", this._wrapper.style.overflowY = "auto", this._wrapper.scrollTop = -t) : this._content.style.top = t + "px", this
                }
                isContentShort() {
                    return this.getContentHeight() <= this.getContainerHeightWithoutHeader()
                }
                destroy() {
                    var t;
                    this._animation && this._animation.stop(), this._scrollBarWrapper && this._scrollBarWrapper.remove(), this._shadowBottom && this._shadowBottom.remove(), this._shadowTop && this._shadowTop.remove(), this._draggable && (this._draggable.destroy(), this._draggable = null), this._content.style.cssText = "", this._wrapper.style.cssText = "", null === (t = this._unsubscribe) || void 0 === t || t.call(this)
                }
                _onScroll(t) {
                    this._touch || (this._content.style.bottom = "auto"), this.scrolled.fire(), this._dragging && !0 !== t || this.updateScrollBar();
                    const i = this.atStart(),
                        e = this.atEnd();
                    return this._shadowTop && this._shadowTop.classList.toggle("i-invisible", !!i), this._shadowBottom && this._shadowBottom.classList.toggle("i-invisible", !!e), this._onContentVisible(), !this._atStart && i ? (this._atStart = !0, this.scrolltostart.fire()) : this._atStart && !i && (this._atStart = !1), !this._atEnd && e ? (this._atEnd = !0, this.scrolltoend.fire()) : this._atEnd && !e && (this._atEnd = !1), this._options.vAlignBottom && (this._stickyBottom = (0, a.outerHeight)(this._content) - Math.abs((0, a.position)(this._content).top) - (0, a.outerHeight)(this._wrapper)), (this._atStart || this._atEnd) && ("function" == typeof this._options.bubbleScrollEvent ? Boolean(this._options.bubbleScrollEvent()) : Boolean(this._options.bubbleScrollEvent))
                }
                _contentIsVisible(t) {
                    return (0, a.position)(t.element).top > -1 * this.currentPosition()
                }
                _onContentVisible(t) {
                    if (!this.visibilityCallbacks.length) return;
                    const i = t || this._contentIsVisible.bind(this),
                        e = [],
                        o = this.visibilityCallbacks.filter(((t, o) => {
                            if (!this._content.contains(t.element)) return !1;
                            const s = i(t);
                            return s && e.push(o), !s
                        }));
                    e.forEach((i => {
                        this.visibilityCallbacks[i].callback(!!t)
                    })), this.visibilityCallbacks = o
                }
            }
        },
        875561: (t, i, e) => {
            "use strict";
            e.r(i), e.d(i, {
                DropdownView: () => h
            });
            e(965426), e(494386);
            var o = e(142544),
                s = e(663989),
                n = e(791325),
                a = e(823127);
            class h {
                constructor(t, i = {}) {
                    this.$el = t, this.$wrap = i.$wrap || t.find(".tv-dropdown-behavior__button"), this.$body = i.$body || t.find(".tv-dropdown-behavior__body"), this.notCloseWithCtrl = !!i.notCloseWithCtrl && i.notCloseWithCtrl, this.closeWithEsc = void 0 === i.closeWithEsc || i.closeWithEsc, this.closeWithEsc && this.$el.attr("tabIndex", 0), (t.data("scroll") || i.scroll) && (this.$scroll = this.$body.find(".tv-dropdown-behavior__scroll"), this.$inScroll = this.$scroll.find(".tv-dropdown-behavior__inscroll"), this.scroll = new s.SidebarCustomScroll(this.$scroll[0], this.$inScroll[0], {
                        showTopShadow: !1,
                        showBottomShadow: !1
                    }), this.$scrollBar = a(this.scroll.getScrollBar()), this.$scrollBar && this.$scrollBar.on("mousedown.tv-dropdown-view-scroll", (() => {
                        this.offClickOutside(), a(document).on("mouseup.tv-dropdown-view-scroll", (() => {
                            this.onClickOutside(), a(document).off("mouseup.tv-dropdown-view-scroll")
                        }))
                    }))), (t.data("adaptBody") || i.adaptBody) && (this._adaptBody = !0), (t.data("adaptOnlyInScrollHeight") || i.adaptOnlyInScrollHeight) && (this._adaptOnlyInScrollHeight = !0), this._fitScreen = t.data("fitScreen") || i.fitScreen, this._maxHeight = t.data("maxHeight") || i.maxHeight, this._dropdownWidth = t.data("dropdownWidth") || i.dropdownWidth, this._boundingElement = i.boundingElement, this.$wrap.add(t.find(".js-dropdown-toggle")).on("click", (t => {
                        a(t.currentTarget).hasClass("js-prevent-dropdown") || this.toggle()
                    })), this._checkIgnoreClickOutside = []
                }
                toggle() {
                    this.opened ? this.close(!0) : this.open()
                }
                open() {
                    this.opened || this.disabled || this.readonly || (this.$el.trigger("beforeOpenMenu"), this.$body.removeClass("i-hidden").addClass("i-opened"), this.$wrap.addClass("i-dropped"), this.$el.addClass("i-opened"), "horz" === this._fitScreen && this.fitHorizontally(), this._adaptBody && this.adaptBody(), this.onClickOutside(), this.$el.trigger("updateScroll"), this.$el.trigger("afterOpenMenu"), this.opened = !0, this.closeWithEsc && this.$el.on("keypress keyup", (t => {
                        t.keyCode === n.ESC && this.close(!0)
                    })))
                }
                onClickOutside() {
                    setTimeout((() => {
                        this.$body.on("clickoutside", (t => {
                            this._checkIgnoreClickOutside.length && this._checkIgnoreClickOutside.some((i => i(t))) || this.close(!0)
                        }))
                    }), 0)
                }
                offClickOutside() {
                    this.$body.off("clickoutside")
                }
                setCheckIgnoreClickOutside(t) {
                    this._checkIgnoreClickOutside.push(t)
                }
                dropCheckIgnoreClickOutside(t) {
                    var i = this._checkIgnoreClickOutside.indexOf(t); - 1 !== i && this._checkIgnoreClickOutside.splice(i, 1)
                }
                close(t = !1) {
                    !this.opened || this.disabled || this.readonly || !t && this.notCloseWithCtrl && (window.event.ctrlKey || window.event.metaKey) || (this.offClickOutside(), this.$wrap.removeClass("i-dropped"), this.$el.trigger("beforeCloseMenu"), this.$body.removeClass("i-opened").addClass("i-hidden"), this.$el.removeClass("i-opened"), this.closeWithEsc && this.$el.off("keypress keyup"), this.opened = !1, this.$el.trigger("afterCloseMenu"))
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
                setReadonly(t) {
                    this.readonly = t
                }
                adaptBody() {
                    const t = this.$body,
                        i = this.$wrap.get(0).getBoundingClientRect(),
                        e = this._boundingElement ? this._boundingElement.getBoundingClientRect() : {
                            top: 0,
                            bottom: window.innerHeight,
                            height: window.innerHeight
                        },
                        o = parseFloat(t.css("padding-top")),
                        s = parseFloat(t.css("padding-bottom")),
                        n = this.$inScroll.outerHeight(!0) + o + s;
                    if (this.scroll && this.scroll.scrollToStart(), this._adaptOnlyInScrollHeight) {
                        const o = t.find(".js-dropdown-dummy"),
                            n = o ? parseFloat(o.css("padding-bottom")) + parseFloat(o.css("margin-bottom")) : 0,
                            a = i.top + i.height + n;
                        return void this.$el.find(".tv-dropdown-behavior__scroll").css("maxHeight", e.bottom - s - a - 25)
                    }
                    const a = this._maxHeight || n,
                        h = i.top + a + 25 <= e.bottom,
                        l = e.top + 15 + a <= i.bottom;
                    let r, c = this._maxHeight || "auto";
                    if (h) r = -o;
                    else if (l) r = -a + i.height + s;
                    else {
                        r = -i.top + e.top + 15;
                        const t = e.height - 15 - 25;
                        a > t && (c = t)
                    }
                    t.css("top", r), t.height(c), this._dropdownWidth && t.width(this._dropdownWidth)
                }
                fitHorizontally() {
                    this.$body.css("marginLeft", 0);
                    const t = document.body.getBoundingClientRect(),
                        i = parseFloat(a(document.body).css("paddingRight")),
                        e = this.$body.offset();
                    e.right = e.left + this.$body.outerWidth();
                    const o = Math.max(Math.min(0, t.right - i - e.right), t.left - e.left);
                    o && this.$body.css("marginLeft", o)
                }
                destroy() {
                    this.scroll && this.scroll.destroy(), this.offClickOutside(), this.$el.find(".js-dropdown-toggle").off("click"), this.$wrap.off("click")
                }
            }
            a.fn.tvDropdown = (0, o.createTvBlockWithInstance)("tv-dropdown", (function(t, i = {}) {
                return new h(t, i)
            }))
        },
        39371: (t, i, e) => {
            "use strict";

            function o(t) {
                return t.childElementCount ? Array.prototype.map.call(t.childNodes, o).join("") + ("DIV" === t.tagName ? "\n" : "") : "BR" === t.tagName ? "\n" : t.textContent || ""
            }
            e.d(i, {
                getInnerTextContent: () => o
            })
        },
        926523: (t, i, e) => {
            "use strict";
            e.r(i), e.d(i, {
                GlobalNotificationTools: () => g
            });
            e(823127), e(875561);
            var o = e(777754),
                s = e(155040),
                n = e(62802),
                a = e(869403),
                h = e.n(a),
                l = e(988411),
                r = e.n(l),
                c = e(779665),
                d = e(39371);
            e(659863);
            var p = e(226722),
                _ = e(890740),
                u = e(823127);
            class g {
                constructor() {
                    if (g._instance) return g._instance;
                    g._instance = this, this._dialogIsOpened = !1, this._firstTimeDialog = !0, this._newNotificationIds = [], this._deleteNotificationIds = [], this._unreadNotificationsCount = new(r())(0);
                    const t = window.lastGlobalNotificationIds;
                    try {
                        this._lastId = n.getInt(g.settingsKey, 0)
                    } catch (t) {
                        this._lastId = 0
                    }
                    if (this._lastId) {
                        let i = 0;
                        for (let e = 0; e < t.length; e++) t[e] > this._lastId && (i += 1);
                        this._unreadNotificationsCount.setValue(i)
                    } else t.length > 0 && this._changeLastId(t[0]);
                    return g._instance
                }
                destroyGlobalNotificationsDialog() {
                    this._dialogIsOpened = !1
                }
                getUnreadNotificationsCount() {
                    return this._unreadNotificationsCount
                }
                getGlobalNotificationsPromise(t) {
                    return this._dialogIsOpened = !0,
                        function(t, i) {
                            const e = `/global-notifications/?count=${i}${t?`&lastId=${t}`:""}`;
                            return (0, _.fetch)(e, {
                                credentials: "same-origin",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                method: "GET"
                            }).then((t => t.json())).then((t => t))
                        }(t, g.ITEMS_PER_PAGE).then((t => t.globalNotifications && t.globalNotifications.length ? (this._upgradeNotificationsList(t, (() => {
                            g._broadcastReadAllNotifications()
                        })), t) : {
                            globalNotifications: []
                        }))
                }
                subscribeNotificationsDialogToPushStream() {
                    if (this._firstTimeDialog) {
                        this._firstTimeDialog = !1;
                        const t = () => this._dialogIsOpened;
                        this._subscribeNewGlobalNotification(t, (t => {
                            this._dialogIsOpened && this._unreadNotificationsCount.setValue(0), this._changeLastId(t.id), g._broadcastReadAllNotifications()
                        }), void 0, !0), this._subscribeDeleteGlobalNotification(t), this._subscribeTVXWindowReadAllNotifications()
                    }
                }
                _upgradeNotificationsList(t, i) {
                    t.globalNotifications.forEach(((t, i) => {
                        t.unread = i < this._unreadNotificationsCount.value()
                    })), this._unreadNotificationsCount.value() > 0 && this._changeLastId(t.globalNotifications[0].id);
                    let e = this._unreadNotificationsCount.value() - g.ITEMS_PER_PAGE;
                    e < 0 && (e = 0), this._unreadNotificationsCount.setValue(e), i && i()
                }
                _processNewNotification(t) {
                    const i = t.closedListCallBack,
                        n = t.newNotification,
                        a = t.showToast || !1;
                    n.language !== g.locale && "all" !== n.language || (this._newNotificationIds.includes(n.id) || (this._newNotificationIds.push(n.id), this._unreadNotificationsCount.setValue(this._unreadNotificationsCount.value() + 1), n.important && a && async function(t) {
                        (await Promise.all([e.e(21009), e.e(91217), e.e(37742), e.e(82202), e.e(13830), e.e(62628)]).then(e.bind(e, 585932))).showGlobalNotificationToast(t)
                    }(n.notification), s.show(o.t(null, void 0, e(796955)), (0, d.getInnerTextContent)(u("<div>").html(n.notification)[0]), void 0)), i && i())
                }
                _processDeleteNotification(t) {
                    const i = t.deleteNotification;
                    if ((i.language === g.locale || "all" === i.language) && !this._deleteNotificationIds.includes(i.id) && (this._deleteNotificationIds.push(i.id), this._lastId < i.id)) {
                        let t = this._unreadNotificationsCount.value() - 1;
                        t < 0 && (t = 0), this._unreadNotificationsCount.setValue(t), g._deleteNewNotificationDelegate.fire()
                    }
                }
                _subscribeNewGlobalNotification(t, i, e, o) {
                    c.pushStreamMultiplexer.on(g.onPushStreamNewGlobalNotification, (s => {
                        this._processNewNotification({
                            closedListCallBack: e,
                            isListOpened: t(),
                            itemCallBack: i,
                            newNotification: s,
                            showToast: o
                        })
                    }))
                }
                _subscribeDeleteGlobalNotification(t, i) {
                    c.pushStreamMultiplexer.on(g.onPushStreamDeleteGlobalNotification, (e => {
                        this._processDeleteNotification({
                            deleteNotification: e,
                            isListOpened: t(),
                            itemCallBack: i
                        })
                    }))
                }
                _subscribeTVXWindowReadAllNotifications(t) {
                    p.TVXWindowEvents.on(g.onTVXWindowReadAllNotifications, (() => {
                        t && t(), this._unreadNotificationsCount.setValue(0)
                    }))
                }
                _changeLastId(t) {
                    this._lastId !== t && (this._lastId = t, n.setValue(g.settingsKey, t, {
                        forceFlush: !0
                    }))
                }
                static _broadcastReadAllNotifications() {
                    g._readAllNotificationsDelegate.fire(), p.TVXWindowEvents.emit(g.onTVXWindowReadAllNotifications)
                }
            }
            g.ITEMS_PER_PAGE = 10, g.UNREAD_FLAGS_FADE_OUT_TIME = 0, g.locale = window.locale || "en", g.settingsKey = "en" === g.locale ? "globalNotification" : "globalNotification_" + g.locale, g.onTVXWindowReadAllNotifications = "en" === g.locale ? "read-all-global-notifications" : "read-all-global-notifications_" + g.locale, g.onPushStreamNewGlobalNotification = "new-global-notification", g.onPushStreamDeleteGlobalNotification = "delete-global-notification", g._readAllNotificationsDelegate = new(h()), g._deleteNewNotificationDelegate = new(h())
        }
    }
]);
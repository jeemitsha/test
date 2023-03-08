(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [6456, 95937, 59255, 90890, 28557, 9796, 35608], {
        159255: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                default: () => C
            });
            var n = function() {
                    if ("undefined" != typeof Map) return Map;

                    function e(e, t) {
                        var i = -1;
                        return e.some((function(e, n) {
                            return e[0] === t && (i = n, !0)
                        })), i
                    }
                    return function() {
                        function t() {
                            this.__entries__ = []
                        }
                        return Object.defineProperty(t.prototype, "size", {
                            get: function() {
                                return this.__entries__.length
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.prototype.get = function(t) {
                            var i = e(this.__entries__, t),
                                n = this.__entries__[i];
                            return n && n[1]
                        }, t.prototype.set = function(t, i) {
                            var n = e(this.__entries__, t);
                            ~n ? this.__entries__[n][1] = i : this.__entries__.push([t, i])
                        }, t.prototype.delete = function(t) {
                            var i = this.__entries__,
                                n = e(i, t);
                            ~n && i.splice(n, 1)
                        }, t.prototype.has = function(t) {
                            return !!~e(this.__entries__, t)
                        }, t.prototype.clear = function() {
                            this.__entries__.splice(0)
                        }, t.prototype.forEach = function(e, t) {
                            void 0 === t && (t = null);
                            for (var i = 0, n = this.__entries__; i < n.length; i++) {
                                var s = n[i];
                                e.call(t, s[1], s[0])
                            }
                        }, t
                    }()
                }(),
                s = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                r = void 0 !== i.g && i.g.Math === Math ? i.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                a = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(r) : function(e) {
                    return setTimeout((function() {
                        return e(Date.now())
                    }), 1e3 / 60)
                };
            var o = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                l = "undefined" != typeof MutationObserver,
                c = function() {
                    function e() {
                        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e, t) {
                            var i = !1,
                                n = !1,
                                s = 0;

                            function r() {
                                i && (i = !1, e()), n && l()
                            }

                            function o() {
                                a(r)
                            }

                            function l() {
                                var e = Date.now();
                                if (i) {
                                    if (e - s < 2) return;
                                    n = !0
                                } else i = !0, n = !1, setTimeout(o, t);
                                s = e
                            }
                            return l
                        }(this.refresh.bind(this), 20)
                    }
                    return e.prototype.addObserver = function(e) {
                        ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
                    }, e.prototype.removeObserver = function(e) {
                        var t = this.observers_,
                            i = t.indexOf(e);
                        ~i && t.splice(i, 1), !t.length && this.connected_ && this.disconnect_()
                    }, e.prototype.refresh = function() {
                        this.updateObservers_() && this.refresh()
                    }, e.prototype.updateObservers_ = function() {
                        var e = this.observers_.filter((function(e) {
                            return e.gatherActive(), e.hasActive()
                        }));
                        return e.forEach((function(e) {
                            return e.broadcastActive()
                        })), e.length > 0
                    }, e.prototype.connect_ = function() {
                        s && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), l ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                    }, e.prototype.disconnect_ = function() {
                        s && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_),
                            window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                    }, e.prototype.onTransitionEnd_ = function(e) {
                        var t = e.propertyName,
                            i = void 0 === t ? "" : t;
                        o.some((function(e) {
                            return !!~i.indexOf(e)
                        })) && this.refresh()
                    }, e.getInstance = function() {
                        return this.instance_ || (this.instance_ = new e), this.instance_
                    }, e.instance_ = null, e
                }(),
                d = function(e, t) {
                    for (var i = 0, n = Object.keys(t); i < n.length; i++) {
                        var s = n[i];
                        Object.defineProperty(e, s, {
                            value: t[s],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return e
                },
                u = function(e) {
                    return e && e.ownerDocument && e.ownerDocument.defaultView || r
                },
                h = S(0, 0, 0, 0);

            function p(e) {
                return parseFloat(e) || 0
            }

            function v(e) {
                for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                return t.reduce((function(t, i) {
                    return t + p(e["border-" + i + "-width"])
                }), 0)
            }

            function m(e) {
                var t = e.clientWidth,
                    i = e.clientHeight;
                if (!t && !i) return h;
                var n = u(e).getComputedStyle(e),
                    s = function(e) {
                        for (var t = {}, i = 0, n = ["top", "right", "bottom", "left"]; i < n.length; i++) {
                            var s = n[i],
                                r = e["padding-" + s];
                            t[s] = p(r)
                        }
                        return t
                    }(n),
                    r = s.left + s.right,
                    a = s.top + s.bottom,
                    o = p(n.width),
                    l = p(n.height);
                if ("border-box" === n.boxSizing && (Math.round(o + r) !== t && (o -= v(n, "left", "right") + r), Math.round(l + a) !== i && (l -= v(n, "top", "bottom") + a)), ! function(e) {
                        return e === u(e).document.documentElement
                    }(e)) {
                    var c = Math.round(o + r) - t,
                        d = Math.round(l + a) - i;
                    1 !== Math.abs(c) && (o -= c), 1 !== Math.abs(d) && (l -= d)
                }
                return S(s.left, s.top, o, l)
            }
            var g = "undefined" != typeof SVGGraphicsElement ? function(e) {
                return e instanceof u(e).SVGGraphicsElement
            } : function(e) {
                return e instanceof u(e).SVGElement && "function" == typeof e.getBBox
            };

            function f(e) {
                return s ? g(e) ? function(e) {
                    var t = e.getBBox();
                    return S(0, 0, t.width, t.height)
                }(e) : m(e) : h
            }

            function S(e, t, i, n) {
                return {
                    x: e,
                    y: t,
                    width: i,
                    height: n
                }
            }
            var b = function() {
                    function e(e) {
                        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = S(0, 0, 0, 0), this.target = e
                    }
                    return e.prototype.isActive = function() {
                        var e = f(this.target);
                        return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                    }, e.prototype.broadcastRect = function() {
                        var e = this.contentRect_;
                        return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
                    }, e
                }(),
                _ = function(e, t) {
                    var i, n, s, r, a, o, l, c = (n = (i = t).x, s = i.y, r = i.width, a = i.height, o = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, l = Object.create(o.prototype), d(l, {
                        x: n,
                        y: s,
                        width: r,
                        height: a,
                        top: s,
                        right: n + r,
                        bottom: a + s,
                        left: n
                    }), l);
                    d(this, {
                        target: e,
                        contentRect: c
                    })
                },
                y = function() {
                    function e(e, t, i) {
                        if (this.activeObservations_ = [], this.observations_ = new n, "function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
                        this.callback_ = e, this.controller_ = t, this.callbackCtx_ = i
                    }
                    return e.prototype.observe = function(e) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(e instanceof u(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var t = this.observations_;
                            t.has(e) || (t.set(e, new b(e)), this.controller_.addObserver(this), this.controller_.refresh())
                        }
                    }, e.prototype.unobserve = function(e) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(e instanceof u(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var t = this.observations_;
                            t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
                        }
                    }, e.prototype.disconnect = function() {
                        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                    }, e.prototype.gatherActive = function() {
                        var e = this;
                        this.clearActive(), this.observations_.forEach((function(t) {
                            t.isActive() && e.activeObservations_.push(t)
                        }))
                    }, e.prototype.broadcastActive = function() {
                        if (this.hasActive()) {
                            var e = this.callbackCtx_,
                                t = this.activeObservations_.map((function(e) {
                                    return new _(e.target, e.broadcastRect())
                                }));
                            this.callback_.call(e, t, e), this.clearActive()
                        }
                    }, e.prototype.clearActive = function() {
                        this.activeObservations_.splice(0)
                    }, e.prototype.hasActive = function() {
                        return this.activeObservations_.length > 0
                    }, e
                }(),
                w = "undefined" != typeof WeakMap ? new WeakMap : new n,
                I = function e(t) {
                    if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    var i = c.getInstance(),
                        n = new y(t, i, this);
                    w.set(this, n)
                };
            ["observe", "unobserve", "disconnect"].forEach((function(e) {
                I.prototype[e] = function() {
                    var t;
                    return (t = w.get(this))[e].apply(t, arguments)
                }
            }));
            const C = void 0 !== r.ResizeObserver ? r.ResizeObserver : I
        },
        266783: e => {
            "use strict";
            var t = Object.prototype.hasOwnProperty;

            function i(e, t) {
                return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
            }
            e.exports = function(e, n) {
                if (i(e, n)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof n || null === n) return !1;
                var s = Object.keys(e),
                    r = Object.keys(n);
                if (s.length !== r.length) return !1;
                for (var a = 0; a < s.length; a++)
                    if (!t.call(n, s[a]) || !i(e[s[a]], n[s[a]])) return !1;
                return !0
            }
        },
        629084: e => {
            e.exports = {
                badge: "badge-TRXznVu1",
                content: "content-TRXznVu1",
                anchor: "anchor-TRXznVu1",
                button: "button-TRXznVu1",
                "size-xsmall": "size-xsmall-TRXznVu1",
                "size-small": "size-small-TRXznVu1",
                "size-medium": "size-medium-TRXznVu1",
                "size-large": "size-large-TRXznVu1",
                "size-xlarge": "size-xlarge-TRXznVu1"
            }
        },
        906189: e => {
            e.exports = {
                "nav-button": "nav-button-iiT1LQPc",
                link: "link-iiT1LQPc",
                background: "background-iiT1LQPc",
                icon: "icon-iiT1LQPc",
                "flip-icon": "flip-icon-iiT1LQPc",
                "size-large": "size-large-iiT1LQPc",
                "preserve-paddings": "preserve-paddings-iiT1LQPc",
                "size-medium": "size-medium-iiT1LQPc",
                "size-small": "size-small-iiT1LQPc",
                "size-xsmall": "size-xsmall-iiT1LQPc",
                "size-xxsmall": "size-xxsmall-iiT1LQPc",
                "visually-hidden": "visually-hidden-iiT1LQPc"
            }
        },
        538802: e => {
            e.exports = {
                container: "container-Layw3R3g",
                "container-danger": "container-danger-Layw3R3g",
                icon: "icon-Layw3R3g",
                header: "header-Layw3R3g",
                "container-warning": "container-warning-Layw3R3g",
                "container-success": "container-success-Layw3R3g",
                "container-default": "container-default-Layw3R3g",
                "text-wrap": "text-wrap-Layw3R3g",
                "close-button": "close-button-Layw3R3g",
                informerBody: "informerBody-Layw3R3g",
                mainProblem: "mainProblem-Layw3R3g",
                "header-inline": "header-inline-Layw3R3g",
                "header-new-line": "header-new-line-Layw3R3g"
            }
        },
        147461: e => {
            e.exports = {
                backButton: "backButton-pbr_BOzj"
            }
        },
        490585: e => {
            e.exports = {
                container: "container-nVh4c_cg",
                inputContainer: "inputContainer-nVh4c_cg",
                withCancel: "withCancel-nVh4c_cg",
                input: "input-nVh4c_cg",
                icon: "icon-nVh4c_cg",
                cancel: "cancel-nVh4c_cg"
            }
        },
        221703: e => {
            e.exports = {
                wrapper: "wrapper-a7Y2yl3G",
                container: "container-a7Y2yl3G",
                tab: "tab-a7Y2yl3G",
                active: "active-a7Y2yl3G",
                title: "title-a7Y2yl3G",
                icon: "icon-a7Y2yl3G",
                titleText: "titleText-a7Y2yl3G",
                nested: "nested-a7Y2yl3G",
                isTablet: "isTablet-a7Y2yl3G",
                isMobile: "isMobile-a7Y2yl3G"
            }
        },
        158659: e => {
            e.exports = {
                container: "container-yKno_KZY",
                topOffset: "topOffset-yKno_KZY",
                selected: "selected-yKno_KZY",
                favourite: "favourite-yKno_KZY",
                actions: "actions-yKno_KZY",
                highlighted: "highlighted-yKno_KZY",
                light: "light-yKno_KZY",
                "highlight-animation-theme-light": "highlight-animation-theme-light-yKno_KZY",
                dark: "dark-yKno_KZY",
                "highlight-animation-theme-dark": "highlight-animation-theme-dark-yKno_KZY",
                isVisible: "isVisible-yKno_KZY",
                title: "title-yKno_KZY",
                dot: "dot-yKno_KZY"
            }
        },
        691001: e => {
            e.exports = {
                button: "button-EwvVs4tz",
                bordersVisible: "bordersVisible-EwvVs4tz",
                selected: "selected-EwvVs4tz"
            }
        },
        407641: e => {
            e.exports = {
                scriptType: "scriptType-lH4h_tPr",
                active: "active-lH4h_tPr"
            }
        },
        149606: e => {
            e.exports = {
                title: "title-mMhB7Pv3",
                small: "small-mMhB7Pv3",
                normal: "normal-mMhB7Pv3",
                large: "large-mMhB7Pv3"
            }
        },
        142748: e => {
            e.exports = {
                container: "container-soqunFTo"
            }
        },
        973154: e => {
            e.exports = {
                title: "title-qtdSVkva",
                disabled: "disabled-qtdSVkva",
                icon: "icon-qtdSVkva",
                locked: "locked-qtdSVkva",
                open: "open-qtdSVkva",
                actionIcon: "actionIcon-qtdSVkva",
                selected: "selected-qtdSVkva",
                codeIcon: "codeIcon-qtdSVkva",
                solutionIcon: "solutionIcon-qtdSVkva"
            }
        },
        300698: e => {
            e.exports = {
                badgeIndicator: "badgeIndicator-JWXEF_bx",
                "type-beta": "type-beta-JWXEF_bx",
                "type-new": "type-new-JWXEF_bx",
                "type-updated": "type-updated-JWXEF_bx",
                "type-ep": "type-ep-JWXEF_bx"
            }
        },
        828124: e => {
            e.exports = {
                "tablet-small-breakpoint": "screen and (max-width: 430px)",
                container: "container-YSK4uslt",
                selected: "selected-YSK4uslt",
                disabled: "disabled-YSK4uslt",
                favorite: "favorite-YSK4uslt",
                actions: "actions-YSK4uslt",
                highlighted: "highlighted-YSK4uslt",
                light: "light-YSK4uslt",
                "highlight-animation-theme-light": "highlight-animation-theme-light-YSK4uslt",
                dark: "dark-YSK4uslt",
                "highlight-animation-theme-dark": "highlight-animation-theme-dark-YSK4uslt",
                badge: "badge-YSK4uslt",
                main: "main-YSK4uslt",
                paddingLeft: "paddingLeft-YSK4uslt",
                isActive: "isActive-YSK4uslt",
                author: "author-YSK4uslt",
                likes: "likes-YSK4uslt"
            }
        },
        348019: e => {
            e.exports = {
                container: "container-Y8R6tAt1"
            }
        },
        404682: e => {
            e.exports = {
                container: "container-BVGIr_dn"
            }
        },
        922800: e => {
            e.exports = {
                solution: "solution-eX_l5bok",
                hidden: "hidden-eX_l5bok"
            }
        },
        539142: e => {
            e.exports = {
                hint: "hint-vUwM9ATX",
                small: "small-vUwM9ATX",
                link: "link-vUwM9ATX"
            }
        },
        984997: e => {
            e.exports = {
                period: "period-cwUcl6q4"
            }
        },
        683595: e => {
            e.exports = {
                container: "container-Le8Mju54",
                tablet: "tablet-Le8Mju54",
                mobile: "mobile-Le8Mju54"
            }
        },
        874781: e => {
            e.exports = {
                "tablet-small-breakpoint": "screen and (max-width: 430px)",
                dialog: "dialog-Oa3ReD0b",
                dialogLibrary: "dialogLibrary-Oa3ReD0b",
                contentContainer: "contentContainer-Oa3ReD0b",
                listContainer: "listContainer-Oa3ReD0b",
                scroll: "scroll-Oa3ReD0b",
                sidebarContainer: "sidebarContainer-Oa3ReD0b",
                noContentBlock: "noContentBlock-Oa3ReD0b",
                tabWithHint: "tabWithHint-Oa3ReD0b",
                solution: "solution-Oa3ReD0b"
            }
        },
        100266: e => {
            e.exports = {
                bubbles: "bubbles-h48rLhJc",
                multiLine: "multiLine-h48rLhJc",
                bubble: "bubble-h48rLhJc"
            }
        },
        279930: e => {
            e.exports = {
                bubble: "bubble-lboSrOoc",
                animated: "animated-lboSrOoc",
                content: "content-lboSrOoc",
                "appearance-default": "appearance-default-lboSrOoc",
                active: "active-lboSrOoc",
                red: "red-lboSrOoc",
                blue: "blue-lboSrOoc",
                green: "green-lboSrOoc",
                orange: "orange-lboSrOoc",
                purple: "purple-lboSrOoc",
                cyan: "cyan-lboSrOoc",
                pink: "pink-lboSrOoc",
                "appearance-text": "appearance-text-lboSrOoc",
                "fontSize-s": "fontSize-s-lboSrOoc",
                "fontSize-m": "fontSize-m-lboSrOoc",
                "size-m": "size-m-lboSrOoc",
                "size-l": "size-l-lboSrOoc"
            }
        },
        401883: e => {
            e.exports = {
                "css-value-bubbles-margin": "8px",
                row: "row-kpmy89Ct",
                fake: "fake-kpmy89Ct"
            }
        },
        483603: e => {
            e.exports = {
                "css-value-dropdown-bubble-width": "42px",
                "css-value-bubbles-margin": "8px",
                button: "button-rHl3RbY7",
                isOpened: "isOpened-rHl3RbY7"
            }
        },
        672502: e => {
            e.exports = {
                container: "container-A3zSzBK_",
                image: "image-A3zSzBK_",
                title: "title-A3zSzBK_",
                description: "description-A3zSzBK_",
                button: "button-A3zSzBK_"
            }
        },
        683307: e => {
            e.exports = {
                highlighted: "highlighted-sanWmRqQ"
            }
        },
        734393: e => {
            e.exports = {
                button: "button-W4RYPlVi",
                disabled: "disabled-W4RYPlVi"
            }
        },
        774465: (e, t, i) => {
            "use strict";
            i.d(t, {
                AnchorBadge: () => p,
                Badge: () => h,
                BadgeSize: () => a.BadgeSize
            });
            var n = i(50959),
                s = i(497754),
                r = i.n(s),
                a = i(105573),
                o = i(629084),
                l = i.n(o);

            function c(e) {
                const {
                    size: t = a.BadgeSize.Medium,
                    className: i
                } = e;
                return r()(l().badge, t && l()[`size-${t}`], i)
            }

            function d(e) {
                return r()(c(e), l().anchor)
            }

            function u(e) {
                const {
                    children: t,
                    contentClassName: i
                } = e;
                return n.createElement("span", {
                    className: r()(l().content, i)
                }, t)
            }

            function h(e) {
                const {
                    size: t,
                    children: i,
                    className: s,
                    contentClassName: r,
                    ...a
                } = e;
                return n.createElement("span", { ...a,
                    className: c({
                        size: t,
                        className: s
                    })
                }, n.createElement(u, {
                    contentClassName: r
                }, i))
            }

            function p(e) {
                const {
                    size: t,
                    children: i,
                    className: s,
                    contentClassName: r,
                    ...a
                } = e;
                return n.createElement("a", { ...a,
                    className: d({
                        size: t,
                        className: s
                    })
                }, n.createElement(u, {
                    contentClassName: r
                }, i))
            }
        },
        105573: (e, t, i) => {
            "use strict";
            var n;
            i.d(t, {
                    BadgeSize: () => n
                }),
                function(e) {
                    e.XSmall = "xsmall", e.Small = "small", e.Medium = "medium", e.Large = "large", e.XLarge = "xlarge"
                }(n || (n = {}))
        },
        789768: (e, t, i) => {
            "use strict";
            i.d(t, {
                BackButton: () => g
            });
            var n = i(50959),
                s = i(897782),
                r = i(295694),
                a = i(249498),
                o = i(560176),
                l = i(935369),
                c = i(758478),
                d = i(773063),
                u = i(914127),
                h = i(218073),
                p = i(124097),
                v = i(142576);

            function m(e = "large", t = "1.2") {
                switch (e) {
                    case "large":
                        return "1.2" === t ? r : d;
                    case "medium":
                        return "1.2" === t ? a : u;
                    case "small":
                        return "1.2" === t ? o : h;
                    case "xsmall":
                        return "1.2" === t ? l : p;
                    case "xxsmall":
                        return "1.2" === t ? c : v;
                    default:
                        return a
                }
            }
            const g = n.forwardRef(((e, t) => {
                const {
                    "aria-label": i,
                    ...r
                } = e;
                return n.createElement(s.NavButton, { ...r,
                    "aria-label": i,
                    ref: t,
                    icon: m(e.size, e.iconStrokeWidth),
                    flipIconOnRtl: !0
                })
            }))
        },
        4908: (e, t, i) => {
            "use strict";
            i.d(t, {
                CloseButton: () => u
            });
            var n = i(50959),
                s = i(897782),
                r = i(117105),
                a = i(315130),
                o = i(238822),
                l = i(663346),
                c = i(534983);

            function d(e = "large") {
                switch (e) {
                    case "large":
                        return r;
                    case "medium":
                    default:
                        return a;
                    case "small":
                        return o;
                    case "xsmall":
                        return l;
                    case "xxsmall":
                        return c
                }
            }
            const u = n.forwardRef(((e, t) => n.createElement(s.NavButton, { ...e,
                ref: t,
                icon: d(e.size)
            })))
        },
        897782: (e, t, i) => {
            "use strict";
            i.d(t, {
                NavButton: () => c
            });
            var n = i(50959),
                s = i(497754),
                r = i(83436),
                a = i(906189);

            function o(e) {
                const {
                    size: t = "large",
                    preservePaddings: i,
                    isLink: n,
                    flipIconOnRtl: r,
                    className: o
                } = e;
                return s(a["nav-button"], a[`size-${t}`], i && a["preserve-paddings"], r && a["flip-icon"], n && a.link, o)
            }

            function l(e) {
                const {
                    children: t,
                    icon: i
                } = e;
                return n.createElement(n.Fragment, null, n.createElement("span", {
                    className: a.background
                }), n.createElement(r.Icon, {
                    icon: i,
                    className: a.icon,
                    "aria-hidden": !0
                }), t && n.createElement("span", {
                    className: a["visually-hidden"]
                }, t))
            }
            const c = (0, n.forwardRef)(((e, t) => {
                const {
                    icon: i,
                    type: s = "button",
                    preservePaddings: r,
                    flipIconOnRtl: a,
                    size: c,
                    "aria-label": d,
                    ...u
                } = e;
                return n.createElement("button", { ...u,
                    className: o({ ...e,
                        children: d
                    }),
                    ref: t,
                    type: s
                }, n.createElement(l, {
                    icon: i
                }, d))
            }));
            c.displayName = "NavButton";
            var d = i(14388),
                u = i(551080);
            (0, n.forwardRef)(((e, t) => {
                const {
                    icon: i,
                    renderComponent: s,
                    "aria-label": r,
                    ...a
                } = e, c = null != s ? s : d.CustomComponentDefaultLink;
                return n.createElement(c, { ...a,
                    className: o({ ...e,
                        children: r,
                        isLink: !0
                    }),
                    reference: (0, u.isomorphicRef)(t)
                }, n.createElement(l, {
                    icon: i
                }, r))
            })).displayName = "NavAnchorButton"
        },
        834995: (e, t, i) => {
            "use strict";

            function n(e) {
                const {
                    reference: t,
                    ...i
                } = e;
                return { ...i,
                    ref: t
                }
            }
            i.d(t, {
                renameRef: () => n
            })
        },
        14388: (e, t, i) => {
            "use strict";
            i.d(t, {
                CustomComponentDefaultLink: () => r
            });
            var n = i(50959),
                s = i(834995);

            function r(e) {
                return n.createElement("a", { ...(0, s.renameRef)(e)
                })
            }
            n.PureComponent
        },
        267521: (e, t, i) => {
            "use strict";
            i.d(t, {
                useFunctionalRefObject: () => r
            });
            var n = i(50959),
                s = i(774218);

            function r(e) {
                const t = (0, n.useMemo)((() => function(e) {
                        const t = i => {
                            e(i), t.current = i
                        };
                        return t.current = null, t
                    }((e => {
                        o.current(e)
                    }))), []),
                    i = (0, n.useRef)(null),
                    r = t => {
                        if (null === t) return a(i.current, t), void(i.current = null);
                        i.current !== e && (i.current = e, a(i.current, t))
                    },
                    o = (0, n.useRef)(r);
                return o.current = r, (0, s.useIsomorphicLayoutEffect)((() => {
                    if (null !== t.current) return o.current(t.current), () => o.current(null)
                }), [e]), t
            }

            function a(e, t) {
                null !== e && ("function" == typeof e ? e(t) : e.current = t)
            }
        },
        640027: (e, t, i) => {
            "use strict";
            i.d(t, {
                useIsMounted: () => s
            });
            var n = i(50959);
            const s = () => {
                const e = (0, n.useRef)(!1);
                return (0, n.useEffect)((() => (e.current = !0, () => {
                    e.current = !1
                })), []), e
            }
        },
        774218: (e, t, i) => {
            "use strict";
            i.d(t, {
                useIsomorphicLayoutEffect: () => s
            });
            var n = i(50959);

            function s(e, t) {
                ("undefined" == typeof window ? n.useEffect : n.useLayoutEffect)(e, t)
            }
        },
        444530: (e, t, i) => {
            "use strict";
            i.d(t, {
                useResizeObserver: () => o
            });
            var n = i(50959),
                s = i(159255),
                r = i(774218),
                a = i(267521);

            function o(e, t = []) {
                const {
                    callback: i,
                    ref: o = null
                } = function(e) {
                    return "function" == typeof e ? {
                        callback: e
                    } : e
                }(e), l = (0, n.useRef)(null), c = (0, n.useRef)(i);
                c.current = i;
                const d = (0, a.useFunctionalRefObject)(o),
                    u = (0, n.useCallback)((e => {
                        d(e), null !== l.current && (l.current.disconnect(), null !== e && l.current.observe(e))
                    }), [d, l]);
                return (0, r.useIsomorphicLayoutEffect)((() => (l.current = new s.default(((e, t) => {
                    c.current(e, t)
                })), d.current && u(d.current), () => {
                    var e;
                    null === (e = l.current) || void 0 === e || e.disconnect()
                })), [d, ...t]), u
            }
        },
        420548: (e, t, i) => {
            "use strict";
            i.d(t, {
                Informer: () => v
            });
            var n = i(50959),
                s = i(497754),
                r = i(83436),
                a = i(4908),
                o = i(8626),
                l = i(530162),
                c = i(527941),
                d = i(499084),
                u = i(538802),
                h = i.n(u);
            const p = {
                danger: l,
                warning: l,
                success: d,
                default: c
            };

            function v(e) {
                const {
                    informerIntent: t,
                    content: i,
                    className: l,
                    header: c,
                    isIconShown: d = !0,
                    isCloseButtonShown: u,
                    icon: v,
                    onCloseClick: m,
                    closeButtonLabel: g = "Close",
                    headerPlacement: f = "inline",
                    children: S
                } = e;
                return n.createElement("div", {
                    className: s(h().container, h()[`container-${t}`], l),
                    ...(0, o.filterDataProps)(e),
                    ...(0, o.filterAriaProps)(e)
                }, n.createElement("div", {
                    className: h().informerBody
                }, i && n.createElement("div", {
                    className: h().mainProblem
                }, d && n.createElement(r.Icon, {
                    className: h().icon,
                    icon: null != v ? v : p[t]
                }), n.createElement("div", {
                    className: h()["text-wrap"]
                }, c && n.createElement("span", {
                    className: s(h().header, h()[`header-${f}`])
                }, c), " ", i)), S), u && n.createElement(a.CloseButton, {
                    "aria-label": g,
                    onClick: m,
                    className: h()["close-button"],
                    size: "xsmall",
                    preservePaddings: !0
                }))
            }
        },
        621802: (e, t, i) => {
            "use strict";
            i.d(t, {
                DialogHeaderBackButton: () => o
            });
            var n = i(50959),
                s = i(777754),
                r = i(789768),
                a = i(147461);

            function o(e) {
                return n.createElement(r.BackButton, {
                    className: a.backButton,
                    size: "medium",
                    "aria-label": s.t(null, {
                        context: "input"
                    }, i(716936)),
                    preservePaddings: !0,
                    ...e
                })
            }
        },
        986623: (e, t, i) => {
            "use strict";
            i.d(t, {
                DialogSearch: () => d
            });
            var n = i(50959),
                s = i(497754),
                r = i.n(s),
                a = i(777754),
                o = i(83436),
                l = i(969859),
                c = i(490585);

            function d(e) {
                const {
                    children: t,
                    renderInput: s,
                    onCancel: d,
                    containerClassName: h,
                    inputContainerClassName: p,
                    iconClassName: v,
                    ...m
                } = e;
                return n.createElement("div", {
                    className: r()(c.container, h)
                }, n.createElement("div", {
                    className: r()(c.inputContainer, p, d && c.withCancel)
                }, s || n.createElement(u, { ...m
                })), t, n.createElement(o.Icon, {
                    className: r()(c.icon, v),
                    icon: l
                }), d && n.createElement("div", {
                    className: c.cancel,
                    onClick: d
                }, a.t(null, void 0, i(620036))))
            }

            function u(e) {
                const {
                    className: t,
                    reference: i,
                    value: s,
                    onChange: a,
                    onFocus: o,
                    onBlur: l,
                    onKeyDown: d,
                    onSelect: u,
                    placeholder: h,
                    ...p
                } = e;
                return n.createElement("input", { ...p,
                    ref: i,
                    type: "text",
                    className: r()(t, c.input),
                    autoComplete: "off",
                    "data-role": "search",
                    placeholder: h,
                    value: s,
                    onChange: a,
                    onFocus: o,
                    onBlur: l,
                    onSelect: u,
                    onKeyDown: d
                })
            }
        },
        804508: (e, t, i) => {
            "use strict";
            i.d(t, {
                DialogSidebarContainer: () => d,
                DialogSidebarWrapper: () => u,
                DialogSidebarItem: () => h
            });
            var n = i(50959),
                s = i(497754),
                r = i.n(s),
                a = i(83436),
                o = i(568648),
                l = i(221703);

            function c(e) {
                return {
                    isMobile: "mobile" === e,
                    isTablet: "tablet" === e
                }
            }

            function d(e) {
                const {
                    mode: t,
                    className: i,
                    ...s
                } = e, {
                    isMobile: a,
                    isTablet: o
                } = c(t), d = r()(l.container, o && l.isTablet, a && l.isMobile, i);
                return n.createElement("div", { ...s,
                    className: d,
                    "data-role": "dialog-sidebar"
                })
            }

            function u(e) {
                return n.createElement("div", {
                    className: l.wrapper,
                    ...e
                })
            }

            function h(e) {
                const {
                    mode: t,
                    title: i,
                    icon: s,
                    isActive: d,
                    onClick: u,
                    ...h
                } = e, {
                    isMobile: p,
                    isTablet: v
                } = c(t);
                return n.createElement("div", { ...h,
                    className: r()(l.tab, v && l.isTablet, p && l.isMobile, d && l.active),
                    onClick: u
                }, n.createElement(a.Icon, {
                    className: l.icon,
                    icon: s
                }), !v && n.createElement("span", {
                    className: l.title
                }, n.createElement("span", {
                    className: l.titleText
                }, i), p && n.createElement(a.Icon, {
                    className: l.nested,
                    icon: o
                })))
            }
        },
        61825: (e, t, i) => {
            "use strict";
            i.d(t, {
                DEFAULT_LIST_ITEM_OPTION_THEME: () => o,
                ListItemOptionButton: () => l,
                ListOption: () => c
            });
            var n = i(50959),
                s = i(497754),
                r = i.n(s),
                a = i(691001);
            const o = a;

            function l(e) {
                const {
                    theme: t = a,
                    children: i,
                    onClick: s,
                    isSelected: o,
                    areBordersVisible: l,
                    isItemSelected: c,
                    className: d,
                    value: u,
                    name: h
                } = e;
                return n.createElement("button", {
                    type: "button",
                    className: r()(d, t.button, o && t.selected, l && !o && !c && t.bordersVisible),
                    name: h,
                    value: u,
                    onClick: s
                }, i)
            }

            function c(e) {
                const {
                    value: t,
                    onClick: i,
                    ...s
                } = e, r = (0, n.useCallback)((e => i(t, e)), [t, i]);
                return n.createElement(l, { ...s,
                    value: String(t),
                    onClick: r
                })
            }
        },
        863192: (e, t, i) => {
            "use strict";
            i.d(t, {
                ScriptTypeIcon: () => d
            });
            var n = i(50959),
                s = i(497754),
                r = i(83436),
                a = i(394256),
                o = i(225492),
                l = i(194913),
                c = i(407641);

            function d(e) {
                const {
                    className: t,
                    type: i,
                    isActive: d
                } = e;
                return n.createElement(r.Icon, {
                    className: s(c.scriptType, d && c.active, t),
                    icon: (u = i, "strategy" === u ? a : "library" === u ? o : l)
                });
                var u
            }
        },
        272686: (e, t, i) => {
            "use strict";
            i.d(t, {
                ContentHeaderTitle: () => o
            });
            var n = i(50959),
                s = i(497754),
                r = i.n(s),
                a = i(149606);

            function o(e) {
                const {
                    title: t,
                    type: i,
                    className: s
                } = e;
                return n.createElement("h3", {
                    className: r()(a.title, "Small" === i && a.small, "Normal" === i && a.normal, "Large" === i && a.large, s)
                }, t)
            }
        },
        218655: (e, t, i) => {
            "use strict";
            i.d(t, {
                ContentHeader: () => r
            });
            var n = i(50959),
                s = i(142748);

            function r(e) {
                const {
                    style: t,
                    children: i
                } = e;
                return n.createElement("div", {
                    style: t,
                    className: s.container
                }, i)
            }
        },
        270214: (e, t, i) => {
            "use strict";
            i.d(t, {
                ContentIconLock: () => v,
                ContentIconSolution: () => m,
                ContentIconCode: () => g,
                ContentIconPage: () => f,
                ContentIconCross: () => S
            });
            var n = i(50959),
                s = i(497754),
                r = i.n(s),
                a = i(83436),
                o = i(148547),
                l = i(126275),
                c = i(837364),
                d = i(638115),
                u = i(661055),
                h = i(166538),
                p = i(973154);

            function v(e) {
                const {
                    status: t,
                    title: i
                } = e;
                return n.createElement(a.Icon, {
                    title: i,
                    className: r()(p.icon, "apply-common-tooltip", "Locked" === t && p.locked, "Open" === t && p.open),
                    icon: d
                })
            }

            function m(e) {
                const {
                    isSelected: t,
                    className: i,
                    ...s
                } = e;
                return n.createElement(o.ListItemButton, { ...s,
                    className: r()(b(t), p.solutionIcon, i),
                    icon: h
                })
            }

            function g(e) {
                const {
                    isSelected: t,
                    ...i
                } = e;
                return n.createElement(o.ListItemButton, { ...i,
                    className: r()(b(t), p.codeIcon),
                    icon: c
                })
            }

            function f(e) {
                const {
                    isSelected: t,
                    ...i
                } = e;
                return n.createElement(o.ListItemButton, { ...i,
                    className: b(t),
                    icon: l
                })
            }

            function S(e) {
                const {
                    isSelected: t,
                    ...i
                } = e;
                return n.createElement(o.ListItemButton, { ...i,
                    className: b(t),
                    icon: u
                })
            }

            function b(e) {
                return r()(p.actionIcon, "apply-common-tooltip", e && p.selected)
            }
        },
        28983: (e, t, i) => {
            "use strict";
            i.d(t, {
                BadgeIndicator: () => o
            });
            var n = i(50959),
                s = i(497754),
                r = i(558470),
                a = i(300698);

            function o(e) {
                const {
                    type: t,
                    className: i,
                    tooltip: o
                } = e, l = {
                    beta: "Beta",
                    new: "New",
                    updated: "Updated",
                    ep: "EP"
                }, c = s(a.badgeIndicator, a[`type-${t}`], o && "apply-common-tooltip", i);
                return n.createElement(r.Badge, {
                    className: c,
                    size: r.BadgeSize.XSmall,
                    title: o
                }, l[t])
            }
        },
        242546: (e, t, i) => {
            "use strict";
            i.d(t, {
                ContentItem: () => _,
                createItemClickHandler: () => y
            });
            var n = i(50959),
                s = i(497754),
                r = i.n(s),
                a = i(777754),
                o = i(973154);

            function l(e) {
                const {
                    children: t,
                    className: i,
                    disabled: s
                } = e;
                return n.createElement("span", {
                    className: r()(o.title, s && o.disabled, i)
                }, t)
            }
            var c = i(270214),
                d = i(28983),
                u = i(863192),
                h = i(409147),
                p = i(452623),
                v = i(631078),
                m = i(909740),
                g = i(919346),
                f = i(852668),
                S = i(470316),
                b = i(828124);

            function _(e) {
                const t = (0, n.useContext)(h.IndicatorsContext),
                    {
                        style: s,
                        layoutMode: o,
                        item: S,
                        query: _,
                        regExpRules: w,
                        isBeta: I,
                        isNew: C,
                        isUpdated: T,
                        isSelected: P,
                        isHighlighted: k,
                        reference: D,
                        onClick: E,
                        renderActions: x
                    } = e,
                    {
                        isFavorite: B,
                        isLocked: M,
                        public: z,
                        editorsPick: F
                    } = S,
                    A = void 0 !== M,
                    N = void 0 !== B,
                    R = y(E, S),
                    O = (0, n.useCallback)((e => e.stopPropagation()), []),
                    L = (null == t ? void 0 : t.toggleFavorite) ? y(t.toggleFavorite, S) : void 0,
                    V = (0, v.useWatchedValueReadonly)({
                        watchedValue: m.watchedTheme
                    }) === g.StdTheme.Dark ? b.dark : b.light,
                    H = r()(b.container, S.isGrayed && b.disabled, P && b.selected, k && b.highlighted, k && V);
                return n.createElement("div", {
                    ref: D,
                    className: H,
                    onClick: R,
                    style: s,
                    "data-role": "list-item",
                    "data-disabled": S.isGrayed,
                    "data-title": S.title,
                    "data-id": S.id
                }, n.createElement("div", {
                    className: r()(b.main, !N && b.paddingLeft)
                }, N && n.createElement(f.FavoriteButton, {
                    className: r()(b.favorite, B && b.isActive),
                    isFilled: B,
                    onClick: L
                }), n.createElement(l, {
                    disabled: S.isGrayed
                }, n.createElement(p.HighlightedText, {
                    queryString: _,
                    rules: w,
                    text: S.title
                })), n.createElement(n.Fragment, null, S.isStrategy && n.createElement(u.ScriptTypeIcon, {
                    type: "strategy"
                }), A && n.createElement(c.ContentIconLock, {
                    status: M ? "Locked" : "Open",
                    title: M ? a.t(null, void 0, i(236459)) : a.t(null, void 0, i(695262))
                })), I && n.createElement(d.BadgeIndicator, {
                    type: "beta",
                    className: b.badge
                }), C && n.createElement(d.BadgeIndicator, {
                    type: "new",
                    className: b.badge
                }), T && n.createElement(d.BadgeIndicator, {
                    type: "updated",
                    className: b.badge
                }), F && n.createElement(d.BadgeIndicator, {
                    type: "ep",
                    className: b.badge,
                    tooltip: a.t(null, void 0, i(192490))
                })), z && n.createElement("a", {
                    href: z.authorLink,
                    className: b.author,
                    target: "_blank",
                    onClick: O
                }, z.authorName), "mobile" !== o && z && n.createElement("span", {
                    className: b.likes
                }, z.likesCount), n.createElement("div", {
                    className: r()(b.actions)
                }, x))
            }

            function y(e, t) {
                return i => {
                    const n = 0 === (0, S.modifiersFromEvent)(i) && 0 === i.button;
                    !i.defaultPrevented && e && n && (i.preventDefault(), e(t))
                }
            }
        },
        446317: (e, t, i) => {
            "use strict";
            i.d(t, {
                ContentSection: () => o
            });
            var n = i(50959),
                s = i(497754),
                r = i.n(s),
                a = i(348019);

            function o(e) {
                const {
                    reference: t,
                    className: i,
                    ...s
                } = e;
                return n.createElement("div", {
                    ref: t,
                    className: r()(a.container, i),
                    ...s,
                    "data-role": "dialog-content"
                })
            }
        },
        511077: (e, t, i) => {
            "use strict";
            i.d(t, {
                getCommonPineStudies: () => a
            });
            var n = i(735680),
                s = i(293689),
                r = i(86409);
            async function a(e, t) {
                let i = { ...t
                };
                if (e) {
                    const {
                        pineBuiltInStudies: e
                    } = await (0, s.requestBuiltinAndUserScripts)().then(r.sortBuiltinAndUserScripts), t = (0, n.makeStudiesMap)((0, n.prepareStudies)(e.map(r.mapPineStudy), !1));
                    i = { ...i,
                        ...t
                    }
                }
                return [...o(i, "tv-basicstudies"), ...o(i, "Script$STD")].filter((e => !e.isStrategy)).sort(n.sortIndicatorsByName)
            }

            function o(e, t) {
                return e[t] || []
            }
        },
        86409: (e, t, i) => {
            "use strict";
            i.d(t, {
                mapPineStudy: () => u,
                mapPublicStudies: () => h,
                getSolutionId: () => v,
                sortBuiltinAndUserScripts: () => m,
                getStudyPackageName: () => g,
                prepareSearch: () => f,
                getFlattenedContent: () => b,
                isContentItem: () => _,
                hasFilteredContent: () => y,
                prepareAddons: () => w,
                isPublicLibrary: () => I,
                mapFinancialItemToIndicatorItem: () => C,
                isActiveFilterId: () => T
            });
            var n = i(418147),
                s = i(108184),
                r = i(223616),
                a = i(233313),
                o = i(520533),
                l = i(971417),
                c = i(676006),
                d = i(742231);

            function u(e) {
                const {
                    extra: t,
                    scriptIdPart: i,
                    version: n
                } = e, s = t.isAuto ? "auto-standard" : g(i);
                return {
                    id: i,
                    title: e.scriptName,
                    shortDescription: e.scriptName,
                    shortTitle: t.shortDescription,
                    isStrategy: (0, o.isScriptStrategy)(t),
                    isHidden: null == t ? void 0 : t.is_hidden_study,
                    isNew: t.isNew,
                    isUpdated: t.isUpdated,
                    isBeta: t.isBeta,
                    studyData: {
                        id: i,
                        version: n || -1,
                        packageName: s,
                        descriptor: {
                            type: "pine",
                            pineId: i,
                            pineVersion: r.Version.parse(e.version).toString()
                        }
                    },
                    isFundamental: !1,
                    tags: t.tags
                }
            }

            function h(e, t = !1) {
                const {
                    extra: i,
                    scriptIdPart: s,
                    version: l,
                    author: c,
                    userHaveAccess: d,
                    access: u,
                    editorsPick: h
                } = e, p = n.Access.MAP_ID_TO_NAME[u] === n.Access.ACCESS_CLOSED_NEEDS_AUTH ? !d : void 0, v = n.Access.MAP_ID_TO_NAME[u] === n.Access.ACCESS_OPEN_NO_AUTH;
                return {
                    id: s,
                    title: e.scriptName,
                    shortDescription: e.scriptName,
                    shortTitle: i.shortDescription,
                    isStrategy: (0, o.isScriptStrategy)(i),
                    isHidden: (null == i ? void 0 : i.is_hidden_study) || t && (0, o.isScriptLibrary)(i),
                    isNew: i.isNew,
                    isUpdated: i.isUpdated,
                    isBeta: i.isBeta,
                    public: {
                        authorName: c.username,
                        authorLink: (0, a.getUserProfilePath)(c),
                        likesCount: e.agreeCount,
                        imageUrl: e.imageUrl
                    },
                    studyData: {
                        id: s,
                        packageName: g(s),
                        version: l || -1,
                        descriptor: {
                            type: "pine",
                            pineId: s,
                            pineVersion: r.Version.parse(e.version).toString()
                        }
                    },
                    isSourceVisible: v,
                    isLocked: p,
                    editorsPick: h,
                    isFundamental: !1,
                    tags: i.tags
                }
            }
            const p = c;

            function v(e) {
                return p[e]
            }

            function m(e) {
                const t = {
                    pineBuiltInStudies: [],
                    userStudies: []
                };
                return e.forEach((e => {
                    (0, o.isPubPineInfo)(e) && t.pineBuiltInStudies.push(e), (0, o.isSavedPineInfo)(e) && t.userStudies.push(e)
                })), t
            }

            function g(e) {
                var t;
                if (!(0, l.isPineIdString)(e)) return s.StudyMetaInfo.getPackageName(e);
                const i = (0, l.extractPineId)(e);
                if (i && (0, l.isCustomPineId)(i)) return "Script$USER";
                if (i && (0, l.isPublishedPineId)(i)) return "Script$PUB";
                if (i && (0, l.isCandleStickId)(i)) return "candlestick-patterns";
                if (i && (0, l.isStandardPineId)(i)) return "Script$STD";
                const [n] = e.split("@");
                if (n.includes("_")) {
                    const e = "Script$",
                        [i] = n.split("_"),
                        s = i.includes(e) ? i : e + i;
                    return (null === (t = window.pro) || void 0 === t ? void 0 : t.getSuperProduct(s)) || s
                }
                return n
            }

            function f(e, t, i) {
                const n = new Set(["favorites", "financials"]),
                    s = [];
                for (const o of e) {
                    const e = I(o) ? b(o).filter(_) : (r = b(o).filter(_), a = !1, (0,
                        d.rankedSearch)({
                        data: r,
                        rules: t,
                        queryString: i,
                        primaryKey: "shortDescription",
                        secondaryKey: "title",
                        optionalPrimaryKey: "shortTitle",
                        tertiaryKey: "tags",
                        isPreventedFromFiltering: a
                    }));
                    if (e.length) {
                        const t = n.has(o.id) ? e.map((e => ({ ...e,
                            isNested: !1
                        }))) : e;
                        s.push(...S({ ...o,
                            content: t
                        }))
                    }
                }
                var r, a;
                return s
            }

            function S(e) {
                const t = [];
                return t.push({
                    type: "Title",
                    item: {
                        title: e.title
                    }
                }), t.push(...e.content.map((t => ({
                    type: "Item",
                    tabId: e.id,
                    item: t
                })))), t
            }

            function b(e, t) {
                var i, n;
                return y(e) ? t ? null !== (i = e.filteredContent[t]) && void 0 !== i ? i : [] : (n = e.filteredContent, Array.from(Object.values(n)).reduce(((e, t) => (e.push(...t), e)), [])) : e.content
            }

            function _(e) {
                return e.hasOwnProperty("id")
            }

            function y(e) {
                return !("content" in e) && "filteredContent" in e
            }

            function w(e) {
                let t = [];
                const i = {};
                return e.forEach((e => {
                    if (!_(e)) return;
                    const {
                        studyData: t
                    } = e;
                    if (!t) return;
                    const n = g(t.id);
                    n in i ? i[n].push(e) : i[n] = [e]
                })), Object.entries(i).forEach((([e, i]) => {
                    t.push({
                        type: "Title",
                        item: {
                            title: e
                        }
                    }), t = [...t, ...i.map((e => ({
                        type: "Item",
                        item: e
                    })))]
                })), t
            }

            function I(e) {
                return "public-library" === e.id
            }

            function C(e) {
                return { ...e,
                    title: e.name,
                    isFundamental: !0,
                    isStrategy: !1
                }
            }

            function T(e) {
                return ["built-ins", "public-library", "financials"].includes(e)
            }
        },
        735680: (e, t, i) => {
            "use strict";
            i.d(t, {
                getOffset: () => v,
                insertStudy: () => p,
                makeStudiesMap: () => d,
                mapStudyMetaInfo: () => m,
                prepareStudies: () => c,
                searchKeywords: () => h,
                sortIndicatorsByName: () => u
            });
            var n = i(777754),
                s = i(480071),
                r = i(108184),
                a = i(495046);
            var o = i(650151),
                l = i(289397);

            function c(e, t = !0) {
                return e.filter((e => {
                    const i = !!t || ! function(e) {
                        return e.isStrategy
                    }(e);
                    return !e.isHidden && i
                }))
            }

            function d(e) {
                const t = {};
                return e.forEach((e => {
                    const {
                        studyData: i
                    } = e;
                    if (!i) return;
                    const {
                        packageName: n
                    } = i;
                    n in t ? t[n].push(e) : t[n] = [e]
                })), t
            }

            function u(e, t) {
                const i = e.title.toLowerCase(),
                    n = t.title.toLowerCase();
                return i < n ? -1 : i > n ? 1 : 0
            }
            const h = {
                earning: new RegExp("EPS"),
                earnings: new RegExp("EPS"),
                "trailing twelve months": new RegExp("TTM")
            };
            async function p(e, t, i, n, r) {
                const a = e.activeChartWidget.value();
                if (!a) return null;
                const {
                    studyData: c
                } = t;
                if (t.isFundamental && t.periodData) {
                    return function(e, t, i) {
                        let n;
                        return void 0 !== i && (n = (e, t, n) => {
                            const s = {},
                                r = n.symbolInputId();
                            return r && (s[r] = i), {
                                inputs: s,
                                parentSources: []
                            }
                        }), e.insertStudy({
                            type: "pine",
                            pineId: t.scriptIdPart,
                            pineVersion: t.version
                        }, [], t.scriptName, n)
                    }(a, (0, o.ensureDefined)(t.periodData.find((e => e.period === n))), r)
                }
                if (!c) return Promise.resolve(null);
                const d = c.descriptor;
                if ("java" === d.type) {
                    const e = (0, l.tryFindStudyLineToolNameByStudyId)(d.studyId);
                    if (null !== e) return s.tool.setValue(e), null
                }
                return a.insertStudy(c.descriptor, i, t.shortDescription)
            }

            function v(e, t) {
                if (null === e.current || null === t.current) return [0, 0];
                const i = e.current.getBoundingClientRect(),
                    n = t.current.getBoundingClientRect(),
                    {
                        height: s
                    } = i,
                    r = i.top - n.top,
                    a = i.bottom - n.bottom + s < 0 ? 0 : s,
                    o = r - s > 0 ? 0 : s,
                    {
                        scrollTop: l
                    } = t.current;
                return [l - o, l + a]
            }

            function m(e) {
                var t;
                const {
                    id: s,
                    description: o,
                    shortDescription: l,
                    description_localized: c,
                    is_hidden_study: d,
                    version: u,
                    extra: h,
                    tags: p
                } = e, v = a.enabled("graying_disabled_tools_enabled") && (null === (t = window.ChartApiInstance) || void 0 === t ? void 0 : t.studiesAccessController.isToolGrayed(o));
                return {
                    id: s,
                    title: c || n.t(o, {
                        context: "study"
                    }, i(168716)),
                    shortDescription: l,
                    shortTitle: l,
                    isStrategy: r.StudyMetaInfo.isScriptStrategy(e),
                    isHidden: d,
                    isNew: null == h ? void 0 : h.isNew,
                    isUpdated: null == h ? void 0 : h.isUpdated,
                    isBeta: null == h ? void 0 : h.isBeta,
                    isFundamental: !1,
                    studyData: {
                        id: s,
                        version: u,
                        descriptor: {
                            type: "java",
                            studyId: e.id
                        },
                        packageName: g(s, h)
                    },
                    isGrayed: v,
                    tags: p
                }
            }

            function g(e, t) {
                return (null == t ? void 0 : t.isChartPattern) ? "tv-chartpatterns" : (null == t ? void 0 : t.isAuto) ? "auto-java" : r.StudyMetaInfo.getPackageName(e)
            }
        },
        167803: (e, t, i) => {
            "use strict";
            i.d(t, {
                IndicatorsBase: () => p
            });
            var n = i(50959),
                s = i(500962),
                r = i(251954),
                a = i(638456),
                o = i(632446),
                l = i(833813),
                c = i(508846),
                d = i(735680),
                u = i(988411),
                h = i.n(u);
            class p {
                constructor(e) {
                    this._searchInputRef = n.createRef(), this._dialog = n.createRef(), this._visibility = new(h())(!1), this._container = document.createElement("div"), this._isForceRender = !1, this._parentSources = [], this._isDestroyed = !1, this._deepFundamentalsHistoryNotificationHasBeenShown = !1, this._showDeepFundamentalsHistoryNotification = () => {
                        this._deepFundamentalsHistoryNotificationHasBeenShown || (0, o.enabled)(l.ProductFeatures.DEEP_FUNDAMENTALS_HISTORY) || (this._deepFundamentalsHistoryNotificationHasBeenShown = !0, (0, c.createGoProDialog)({
                            feature: "deepFundamentalsNotification",
                            goproSource: "fundamentals_dialog",
                            blank: !0
                        }))
                    }, this._chartWidgetCollection = e
                }
                isDestroyed() {
                    return this._isDestroyed
                }
                visible() {
                    return this._visibility.readonly()
                }
                resetAllStudies() {}
                updateFavorites() {}
                open(e) {
                    this._parentSources = e, this._updateSymbol(), this._setProps({
                        isOpened: !0
                    }), this._visibility.setValue(!0), r.emit("indicators_dialog")
                }
                show() {
                    this.open([])
                }
                hide() {
                    this._parentSources = [], this._setProps({
                        isOpened: !1
                    }), this._visibility.setValue(!1)
                }
                destroy() {
                    this._isDestroyed = !0, s.unmountComponentAtNode(this._container)
                }
                _shouldPreventRender() {
                    return this._isDestroyed || !this._isForceRender && !this._getProps().value().isOpened
                }
                _getRenderData() {
                    return {
                        props: this._getProps().value(),
                        container: this._getContainer()
                    }
                }
                _applyStudy(e, t) {
                    var i;
                    e.isGrayed ? r.emit("onGrayedObjectClicked", {
                        type: "study",
                        name: e.shortDescription
                    }) : (a.CheckMobile.any() || null === (i = this._searchInputRef.current) || void 0 === i || i.select(), (0, d.insertStudy)(this._chartWidgetCollection, e, this._parentSources, t, this._symbol).then((() => {
                        var i;
                        const n = !window.is_authenticated;
                        e.isFundamental && (n || "FY" === t || "TTM" === t) && this._showDeepFundamentalsHistoryNotification(), a.CheckMobile.any() || (null === document.activeElement || document.activeElement === document.body || null !== this._dialog.current && this._dialog.current.contains(document.activeElement)) && (null === (i = this._searchInputRef.current) || void 0 === i || i.focus())
                    })))
                }
                _setProps(e) {
                    const t = this._getProps().value(),
                        {
                            isOpened: i
                        } = t;
                    this._isForceRender = i && "isOpened" in e && !e.isOpened;
                    const n = { ...t,
                        ...e
                    };
                    this._getProps().setValue(n)
                }
                _requestBuiltInJavaStudies() {
                    return this._chartWidgetCollection.activeChartWidget.value().metaInfoRepository().findAllJavaStudies()
                }
                _focus() {
                    var e;
                    this._getProps().value().isOpened && (null === (e = this._dialog.current) || void 0 === e || e.focus())
                }
                _getContainer() {
                    return this._container
                }
                _getDialog() {
                    return this._dialog
                }
                _getSymbol() {
                    return this._symbol
                }
                _updateSymbol() {
                    if (!this._parentSources.length) return void(this._symbol = void 0);
                    const e = this._parentSources[0].symbolSource(),
                        t = e ? e.symbolInfo() : null;
                    this._symbol = null === t ? null == e ? void 0 : e.symbol() : t.ticker || t.full_name
                }
            }
        },
        915176: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                IndicatorsContainer: () => Ct
            });
            var n = i(50959),
                s = i(500962),
                r = i(777754),
                a = i(293689),
                o = i(823348),
                l = i(219423),
                c = i(748826),
                d = i(497754),
                u = i.n(d),
                h = i(650151),
                p = i(638456),
                v = i(470316),
                m = i(742231),
                g = i(619027),
                f = i(804508),
                S = i(986623),
                b = i(874781);

            function _(e) {
                const {
                    tabs: t,
                    searchValue: s,
                    onTabClick: a,
                    searchInputRef: o,
                    layoutMode: l,
                    activeTabId: c,
                    handleSearch: d,
                    onSearchRefBlur: h
                } = e, p = (0, n.useMemo)((() => "mobile" === l), [l]), v = (0, n.useMemo)((() => p && !c && !s || !p), [p, s, c]);
                return n.createElement(n.Fragment, null, n.createElement(S.DialogSearch, {
                    reference: o,
                    placeholder: r.t(null, void 0, i(252298)),
                    value: s,
                    onChange: d,
                    onBlur: h
                }), n.createElement(f.DialogSidebarWrapper, null, v && n.createElement(f.DialogSidebarContainer, {
                    mode: l,
                    className: u()(p && b.sidebarContainer)
                }, t.map((e => n.createElement(f.DialogSidebarItem, {
                    mode: l,
                    key: e.id,
                    title: e.title,
                    icon: e.icon,
                    isActive: c === e.id,
                    onClick: a.bind(null, e.id)
                })))), e.children))
            }
            var y = i(130979),
                w = i(640027),
                I = i(446317),
                C = i(218655),
                T = i(272686),
                P = i(242546),
                k = i(443549),
                D = i(404682);

            function E(e) {
                return n.createElement("div", {
                    style: e.style,
                    className: D.container
                }, n.createElement(k.Spinner, {
                    size: "mini"
                }))
            }
            var x = i(409147),
                B = i(8626),
                M = i(778785),
                z = i(903258),
                F = i(664224),
                A = i(270214),
                N = i(61825),
                R = i(852668),
                O = i(452623),
                L = i(631078),
                V = i(909740),
                H = i(919346),
                K = i(158659);

            function W(e) {
                const {
                    isFavourite: t,
                    isHighlighted: i,
                    isSelected: s,
                    isNested: r,
                    hasTopOffset: a,
                    queryString: o,
                    regExpsRules: l,
                    title: c,
                    style: d,
                    children: h,
                    onClick: p,
                    onClickFavorite: v
                } = e, m = (0, L.useWatchedValueReadonly)({
                    watchedValue: V.watchedTheme
                }) === H.StdTheme.Dark ? K.dark : K.light, g = u()(K.container, a && K.topOffset, s && K.selected, i && K.highlighted, i && m), f = (0, B.filterDataProps)(e);
                return n.createElement("div", {
                    onClick: p,
                    className: g,
                    style: d,
                    ...f
                }, n.createElement(R.FavoriteButton, {
                    className: u()(K.favourite, t && K.isVisible),
                    isFilled: t,
                    onClick: v
                }), n.createElement("span", {
                    className: u()(K.title, r && K.dot)
                }, n.createElement(O.HighlightedText, {
                    queryString: o,
                    rules: l,
                    text: c
                })), n.createElement("div", {
                    className: K.actions
                }, h))
            }
            var q = i(891130),
                U = i(610203),
                $ = i(922800);

            function j(e) {
                const {
                    solutionId: t,
                    periodData: s,
                    isFavorite: a,
                    isNested: o,
                    isSelected: l,
                    isHighlighted: c,
                    title: d,
                    layoutMode: h,
                    onItemClick: p,
                    selectedPeriodIndex: v,
                    queryString: m,
                    regExpsRules: g,
                    style: f,
                    openDrawer: S,
                    onClickFavorite: b
                } = e, _ = "mobile" === h, y = "mobile" !== h && M.touch, w = (0, B.filterDataProps)(e), {
                    reportFrequency: I
                } = (0, q.useEnsuredContext)(x.IndicatorsContext), C = (0,
                    n.useMemo)((() => s.filter((e => I === U.PeriodId.Quarter ? e.period !== U.PeriodId.HalfYear : e.period !== U.PeriodId.Quarter))), [s]), T = {
                    className: u()($.solution, !t && $.hidden),
                    title: r.t(null, void 0, i(308014)),
                    onClick: e => {
                        e.preventDefault(), (0, F.showSupportDialog)({
                            solutionId: t
                        })
                    },
                    isSelected: l
                };
                return n.createElement(W, {
                    style: f,
                    onClick: e => {
                        if (!e.defaultPrevented)
                            if ("mobile" === h && C.length > 1) S(C);
                            else {
                                const e = C[v] ? v : 0;
                                p(e, C[e])
                            }
                    },
                    onClickFavorite: e => {
                        e.preventDefault(), b()
                    },
                    isSelected: l,
                    isHighlighted: c,
                    isFavourite: a,
                    isNested: o,
                    title: d,
                    queryString: m,
                    regExpsRules: g,
                    ...w
                }, !_ && C.map(((e, t) => n.createElement(n.Fragment, {
                    key: e.scriptIdPart
                }, e.period && n.createElement(N.ListItemOptionButton, {
                    isItemSelected: l,
                    isSelected: l && v === t,
                    areBordersVisible: y,
                    onClick: i => {
                        i.preventDefault(), p(t, e)
                    }
                }, (0, z.financialPeriodToString)(e.period))))), n.createElement(A.ContentIconSolution, { ...T
                }))
            }

            function Y(e) {
                const t = (0, n.useContext)(x.IndicatorsContext),
                    {
                        element: i,
                        renderActions: s,
                        isSelected: r,
                        isHighlighted: a,
                        queryString: o,
                        regExpsRules: l,
                        style: c,
                        layoutMode: d,
                        onItemClick: u,
                        openDrawer: h,
                        selectedPeriodIndex: p
                    } = e;
                switch (i.type) {
                    case "Title":
                        {
                            const {
                                item: {
                                    title: e,
                                    secondTitle: t,
                                    thirdTitle: s
                                }
                            } = i;
                            return n.createElement(C.ContentHeader, {
                                style: c
                            }, n.createElement(T.ContentHeaderTitle, {
                                title: e
                            }), t && n.createElement(T.ContentHeaderTitle, {
                                title: t,
                                type: "Normal"
                            }), s && n.createElement(T.ContentHeaderTitle, {
                                title: s,
                                type: "Small"
                            }))
                        }
                    case "Item":
                        {
                            const {
                                item: e
                            } = i;
                            return e.isFundamental ? e.periodData ? n.createElement(j, {
                                solutionId: e.solutionId,
                                periodData: e.periodData,
                                isFavorite: Boolean(e.isFavorite),
                                isNested: Boolean(e.isNested),
                                isSelected: r,
                                isHighlighted: a,
                                title: e.title,
                                layoutMode: d,
                                onItemClick: (t, i) => {
                                    u(e, t, i.period)
                                },
                                selectedPeriodIndex: p,
                                queryString: o,
                                regExpsRules: l,
                                style: c,
                                openDrawer: h,
                                onClickFavorite: () => null == t ? void 0 : t.toggleFavorite(e),
                                "data-role": "list-item"
                            }) : null : n.createElement(P.ContentItem, {
                                style: c,
                                item: e,
                                onClick: () => u(e),
                                query: o,
                                regExpRules: l,
                                layoutMode: d,
                                isSelected: r,
                                isHighlighted: a,
                                isBeta: e.isBeta,
                                isNew: e.isNew,
                                isUpdated: e.isUpdated,
                                renderActions: s
                            })
                        }
                    case "Loader":
                        return n.createElement(E, {
                            style: c
                        })
                }
            }
            var Z = i(725002),
                G = i(366619),
                Q = i(267562);

            function X(e) {
                const t = (0, L.useWatchedValueReadonly)({
                    watchedValue: V.watchedTheme
                }) === H.StdTheme.Dark ? G : Q;
                return n.createElement(Z.ContentIsNotFound, {
                    className: b.noContentBlock,
                    icon: t,
                    description: r.t(null, void 0, i(353170))
                })
            }
            var J = i(512702),
                ee = i(213354);

            function te(e) {
                const t = (0, n.useContext)(x.IndicatorsContext),
                    s = (0, L.useWatchedValueReadonly)({
                        watchedValue: V.watchedTheme
                    }) === H.StdTheme.Dark ? J : ee;
                return n.createElement(Z.ContentIsNotFound, {
                    className: b.noContentBlock,
                    icon: s,
                    title: r.t(null, void 0, i(945162)),
                    description: r.t(null, void 0, i(753986)),
                    buttonText: r.t(null, void 0, i(189938)),
                    buttonAction: function() {
                        null == t || t.openPineEditor(), null == t || t.closeDialog()
                    }
                })
            }
            const ie = (0, i(314802).isOnMobileAppPage)("any");

            function ne(e) {
                const t = (0,
                        n.useContext)(x.IndicatorsContext),
                    {
                        tabId: s,
                        isSelected: a,
                        layoutMode: o,
                        item: l,
                        overlapManager: c
                    } = e,
                    {
                        studyData: d,
                        isSourceVisible: u
                    } = l,
                    h = "mobile" === o,
                    p = d && "Script$USER" === d.packageName,
                    v = d && "Script$PUB" === d.packageName,
                    m = l.solutionId,
                    g = (0, P.createItemClickHandler)((() => {
                        null == t || t.showSourceCode(l, c || void 0)
                    }), l),
                    f = (null == t ? void 0 : t.showScriptIdea) ? (0, P.createItemClickHandler)(t.showScriptIdea, l) : void 0,
                    S = (0, P.createItemClickHandler)((function() {
                        null == t || t.deleteUserStudy(l, c || void 0)
                    }), l),
                    b = (0, P.createItemClickHandler)((() => (0, F.showSupportDialog)({
                        solutionId: m
                    })), l),
                    _ = {
                        title: r.t(null, void 0, i(966324)),
                        onClick: g,
                        isSelected: a
                    },
                    y = {
                        title: r.t(null, void 0, i(244019)),
                        onClick: f,
                        isSelected: a
                    },
                    w = {
                        title: r.t(null, void 0, i(608178)),
                        onClick: S,
                        isSelected: a,
                        "data-name": "indicator-delete-button"
                    },
                    I = {
                        title: r.t(null, void 0, i(308014)),
                        onClick: b,
                        isSelected: a
                    };
                switch (s) {
                    case "built-ins":
                        return n.createElement(n.Fragment, null, m && n.createElement(A.ContentIconSolution, { ...I
                        }));
                    case "favorites":
                        return n.createElement(n.Fragment, null, !h && u && !ie && n.createElement(A.ContentIconCode, { ..._
                        }), v && n.createElement(A.ContentIconPage, { ...y
                        }), p && n.createElement(A.ContentIconCross, { ...w
                        }));
                    case "public-library":
                        return n.createElement(n.Fragment, null, !h && u && !ie && n.createElement(A.ContentIconCode, { ..._
                        }), n.createElement(A.ContentIconPage, { ...y
                        }));
                    case "my-scripts":
                        return n.createElement(n.Fragment, null, !h && u && !ie && n.createElement(A.ContentIconCode, { ..._
                        }), n.createElement(A.ContentIconCross, { ...w
                        }));
                    case "invite-only-scripts":
                        return n.createElement(A.ContentIconPage, { ...y
                        });
                    default:
                        return null
                }
            }
            var se = i(145110),
                re = i(83436),
                ae = i(401993),
                oe = i(634993),
                le = i(995683),
                ce = i(575296),
                de = i(928089);
            const ue = (0, n.createContext)(null);
            var he = i(12481),
                pe = i(444530),
                ve = i(746326);

            function me(e, t, i, s) {
                const r = (0, n.useRef)({
                        widthsMap: new Map,
                        containerWidth: 0,
                        moreButtonWidth: 0
                    }),
                    [a, o] = (0, n.useState)({
                        visible: e,
                        hidden: []
                    }),
                    l = (0, n.useCallback)((() => {
                        const n = e.map((e => {
                                var i;
                                return null !== (i = r.current.widthsMap.get(t(e))) && void 0 !== i ? i : 0
                            })),
                            a = e.findIndex(i);
                        return function({
                            items: e,
                            containerWidth: t,
                            elementsWidths: i,
                            menuItemWidth: n,
                            activeIndex: s,
                            gap: r = 0
                        }) {
                            const a = [...e],
                                o = [],
                                l = [];
                            let c = 0;
                            for (const e of i) c += e;
                            if (c += r * (i.length - 1), c <= t) return {
                                visible: a,
                                hidden: l
                            };
                            const d = [...i],
                                [u] = d.splice(s, 1),
                                [h] = a.splice(s, 1);
                            c = u + r + n;
                            for (let e = 0; e < a.length; e++) c += d[e] + r, c <= t ? o.push(a[e]) : l.push(a[e]);
                            return o.splice(s, 0, h), {
                                visible: o,
                                hidden: l
                            }
                        }({
                            items: e,
                            containerWidth: r.current.containerWidth,
                            elementsWidths: n,
                            menuItemWidth: r.current.moreButtonWidth,
                            activeIndex: a,
                            gap: s
                        })
                    }), [e, t, i, r]),
                    c = (0, n.useCallback)((0, he.default)((() => {
                        const e = l();
                        (function(e, t) {
                            return !fe(e.visible, t.visible) || !fe(e.hidden, t.hidden)
                        })(a, e) && o(e)
                    }), 100), [l, o, a]),
                    d = (0, n.useCallback)((e => {
                        r.current.widthsMap = e(r.current.widthsMap), c()
                    }), [r, c]),
                    u = (0, n.useCallback)((([e]) => {
                        r.current.containerWidth = e.contentRect.width, c()
                    }), [r, c]),
                    h = (0, n.useCallback)((([e]) => {
                        r.current.moreButtonWidth = (0, ve.outerWidth)(e.target, !0), c()
                    }), [r, c]),
                    p = (0, pe.useResizeObserver)(u),
                    v = (0, pe.useResizeObserver)(h);
                return (0, n.useEffect)((() => {
                    if (r.current.widthsMap.size <= e.length) return;
                    const i = new Map;
                    for (const n of e) {
                        const e = t(n),
                            s = r.current.widthsMap.get(e);
                        void 0 !== s && i.set(e, s)
                    }
                    r.current.widthsMap = i, c()
                }), [e, t, r, c]), {
                    containerRefCallback: p,
                    moreButtonRefCb: v,
                    setWidthsMap: d,
                    hiddenTabs: a.hidden,
                    visibleTabs: a.visible
                }
            }

            function ge(e) {
                const t = (0, n.useContext)(ue),
                    i = (0, n.useCallback)((([i]) => {
                        t && t((t => {
                            const n = (0, ve.outerWidth)(i.target, !0);
                            if (t.get(e) === n) return t;
                            const s = new Map(t);
                            return s.set(e, n), s
                        }))
                    }), [t, e]);
                return (0, pe.useResizeObserver)(i, [t])
            }

            function fe(e, t) {
                return e.length === t.length && e.reduce(((e, i, n) => e && i === t[n]), !0)
            }

            function Se(e) {
                return n.createElement(ae.Bubble, { ...e,
                    reference: ge(e.id)
                })
            }
            var be = i(431544),
                _e = i(483603),
                ye = i(401883);
            const we = (0, le.mergeThemes)(ce.DEFAULT_TOOL_WIDGET_MENU_THEME, _e);

            function Ie(e) {
                const {
                    items: t,
                    getItemKey: s,
                    className: a,
                    getItemTitle: o,
                    onBubbleClick: l,
                    activeBubble: c,
                    buttonClassName: u,
                    itemClassName: h,
                    ...p
                } = e, v = (0, n.useCallback)((e => s(e) === c), [s, c]), {
                    containerRefCallback: m,
                    moreButtonRefCb: g,
                    setWidthsMap: f,
                    hiddenTabs: S,
                    visibleTabs: b
                } = me(t, s, v);
                return n.createElement(ue.Provider, {
                    value: f
                }, n.createElement(se.BubbleRow, { ...p,
                    getItemKey: s,
                    getItemTitle: o,
                    onBubbleClick: l,
                    checkItemIsActive: v,
                    className: d(a, ye.row),
                    BubbleComponent: Se,
                    items: b,
                    reference: m,
                    itemClassName: h
                }, S.map((e => n.createElement(Se, {
                    className: d(ye.fake, h),
                    key: s(e),
                    id: s(e),
                    isActive: !1
                }, o(e)))), Boolean(S.length) && n.createElement(ce.ToolWidgetMenu, {
                    theme: we,
                    content: n.createElement(ae.Bubble, {
                        isActive: !1
                    }, n.createElement(re.Icon, {
                        className: ye.icon,
                        icon: be
                    })),
                    arrow: !1,
                    className: u,
                    reference: g
                }, n.createElement(de.ToolWidgetMenuSummary, null, r.t(null, void 0, i(141610))), S.map((e => n.createElement(oe.PopupMenuItem, {
                    key: s(e),
                    label: o(e),
                    onClick: () => l(e)
                }))))))
            }

            function Ce(e) {
                const {
                    isMobile: t,
                    activeBubble: i,
                    checkItemIsActive: s,
                    ...r
                } = e;
                return t ? n.createElement(se.BubbleRow, { ...r,
                    checkItemIsActive: s
                }) : n.createElement(Ie, { ...r,
                    activeBubble: i
                })
            }
            var Te = i(683595);
            const Pe = {
                "built-ins": {
                    indicators: {
                        short: r.t(null, void 0, i(561142))
                    },
                    strategies: {
                        short: r.t(null, void 0, i(332492))
                    },
                    patterns: {
                        short: r.t(null, void 0, i(219693))
                    },
                    profiles: {
                        short: r.t(null, void 0, i(722743))
                    }
                },
                "public-library": {
                    top: {
                        short: r.t(null, {
                            context: "the most liked scripts"
                        }, i(709657)),
                        tooltip: r.t(null, void 0, i(200078))
                    },
                    editorsPicks: {
                        short: r.t(null, void 0, i(192490)),
                        tooltip: r.t(null, void 0, i(963703))
                    },
                    trending: {
                        short: r.t(null, void 0, i(262721)),
                        tooltip: r.t(null, void 0, i(227262))
                    }
                },
                financials: {
                    statistics: {
                        short: r.t(null, void 0, i(751706))
                    },
                    "income statements": {
                        short: r.t(null, void 0, i(676712))
                    },
                    "cash flow": {
                        short: r.t(null, void 0, i(638237))
                    },
                    "balance sheet": {
                        short: r.t(null, void 0, i(342134))
                    }
                }
            };

            function ke(e) {
                const {
                    activeTabId: t,
                    activeFilter: i,
                    setActiveFilter: s,
                    filters: r,
                    layoutMode: a
                } = e;
                return n.createElement(Ce, {
                    items: r,
                    getItemTitle: function(e) {
                        var i, n;
                        return null !== (n = null === (i = Pe[t][e]) || void 0 === i ? void 0 : i.short) && void 0 !== n ? n : ""
                    },
                    activeBubble: i,
                    getItemKey: e => e,
                    onBubbleClick: e => s(e),
                    getItemTooltip: function(e) {
                        var i;
                        if ("public-library" === t) return null === (i = Pe["public-library"][e]) || void 0 === i ? void 0 : i.tooltip;
                        return
                    },
                    fontSize: "s",
                    itemClassName: "apply-common-tooltip",
                    className: u()(Te.container, "tablet" === a && Te.tablet, "mobile" === a && Te.mobile),
                    isMobile: "mobile" === a,
                    checkItemIsActive: e => e === i
                })
            }
            var De = i(324997),
                Ee = i(670797),
                xe = i(762852),
                Be = i(332585),
                Me = i(821190),
                ze = i(984997);

            function Fe(e) {
                const {
                    drawerData: t,
                    onClose: s,
                    onItemClick: a
                } = e;
                return n.createElement(Be.DrawerManager, null, t && t.periodData.length > 0 ? n.createElement(xe.Drawer, {
                    onClose: s,
                    position: "Bottom"
                }, n.createElement("div", null, n.createElement(Me.ToolTitle, {
                    text: r.t(null, void 0, i(958024))
                }), t.periodData.map(((e, t) => n.createElement("div", {
                    key: e.scriptIdPart,
                    className: ze.period,
                    onClick: () => a(t)
                }, e.period && (0, z.financialPeriodToString)(e.period)))))) : null)
            }
            var Ae = i(86409);

            function Ne(e) {
                const {
                    queryString: t,
                    regExpsRules: i,
                    isSearching: s,
                    selectedItemIndex: r,
                    highlightedItemIndex: a,
                    onActiveFilterClick: o,
                    onItemClick: l,
                    activeTabId: c,
                    data: d,
                    layoutMode: u,
                    isLoading: h,
                    requestMorePublicStudies: p,
                    activeFilters: v,
                    filters: m,
                    requestMoreSuggestion: g,
                    selectedPeriodIndex: f
                } = e, S = (0, n.useContext)(Ee.SlotContext), _ = (0, n.useRef)(null), [C, T] = (0, n.useState)(null), P = (0, De.useResizeObserver)((([e]) => {
                    T(e.contentRect.height)
                })), [D, E] = (0, n.useState)({
                    top: !1,
                    editorsPicks: !1,
                    trending: !1
                }), [x, B] = (0, n.useState)(!1), [M, z] = (0, n.useState)(!1), F = (0, n.useMemo)((() => "public-library" === c && D[v[c]] || t && x ? d.concat([{
                    type: "Loader"
                }]) : d), [d, D, x, v, c]), [A, N] = (0, n.useState)(null), R = (0, n.useCallback)((e => {
                    const t = F[e];
                    return "Item" === t.type ? t.tabId && "favorites" === t.tabId ? t.item.id + "_favorites" : t.item.id : "Title" === t.type ? t.item.title : "Loader" === t.type ? "loader" : e.toString()
                }), [F]), O = (0, n.useCallback)((e => F[e] && "Title" === F[e].type ? 40 : 32), [F]), L = (0, n.useCallback)((e => {
                    const {
                        visibleStopIndex: i
                    } = e;
                    ("public-library" === c && !D[v[c]] || t && !x) && z(F.length - 1 === i)
                }), [F, D, x, v, c]), V = (0, w.useIsMounted)();
                return (0, n.useEffect)((() => {
                    M && "public-library" === c ? (E((e => ({ ...e,
                        [v[c]]: !0
                    }))), p(v[c]).then((() => {
                        V.current && E((e => ({ ...e,
                            [v[c]]: !1
                        })))
                    }))) : M && t && (B(!0), g().then((() => {
                        V.current && B(!1)
                    })))
                }), [M, c, v, V]), (0, n.useEffect)((() => {
                    var e;
                    return null === (e = _.current) || void 0 === e ? void 0 : e.scrollToItem(r)
                }), [r]), (0, n.useEffect)((() => {
                    var e;
                    return null === (e = _.current) || void 0 === e ? void 0 : e.scrollToItem(0)
                }), [v]), (0, n.useEffect)((() => {
                    var e;
                    return null === (e = _.current) || void 0 === e ? void 0 : e.resetAfterIndex(0, !0)
                }), [F]), n.createElement("div", {
                    className: b.contentContainer
                }, c && (0, Ae.isActiveFilterId)(c) && n.createElement(ke, {
                    activeTabId: c,
                    activeFilter: v[c],
                    setActiveFilter: e => {
                        o(e)
                    },
                    filters: m,
                    layoutMode: u
                }), n.createElement(I.ContentSection, {
                    className: b.scroll,
                    reference: P
                }, function() {
                    if (t && !F.length && !s) return n.createElement(X, null);
                    if (h) return n.createElement(k.Spinner, null);
                    if ("my-scripts" === c && !F.some((e => "Item" === e.type))) return n.createElement(te, null);
                    return null !== C && n.createElement(n.Fragment, null, n.createElement(y.VariableSizeList, {
                        ref: _,
                        className: b.listContainer,
                        width: "100%",
                        height: C,
                        itemCount: F.length,
                        itemSize: O,
                        itemKey: R,
                        onItemsRendered: L,
                        overscanCount: 20,
                        children: e => {
                            const {
                                index: s,
                                style: o
                            } = e, d = r === s, h = F[s];
                            return n.createElement(Y, {
                                style: o,
                                element: h,
                                onItemClick: l.bind(null, s),
                                queryString: t,
                                regExpsRules: i,
                                isSelected: d,
                                isHighlighted: a === s,
                                layoutMode: u,
                                selectedPeriodIndex: f,
                                openDrawer: e => N({
                                    itemIndex: s,
                                    periodData: e
                                }),
                                renderActions: "Item" === h.type ? n.createElement(ne, {
                                    tabId: c || h.tabId,
                                    item: h.item,
                                    layoutMode: u,
                                    isSelected: d,
                                    overlapManager: S
                                }) : void 0
                            })
                        }
                    }), n.createElement(Fe, {
                        drawerData: A,
                        onClose: () => N(null),
                        onItemClick: e => {
                            if (!A) return;
                            const t = F[A.itemIndex];
                            "Item" === t.type && (l(A.itemIndex, t.item, e, A.periodData[e].period), N(null))
                        }
                    }))
                }()))
            }
            var Re = i(735680);
            const Oe = {
                "built-ins": ["indicators", "strategies", "patterns", "profiles"],
                "public-library": ["top", "editorsPicks", "trending"],
                financials: ["statistics", "income statements", "cash flow", "balance sheet"]
            };
            var Le = i(621802),
                Ve = i(420548),
                He = i(286293),
                Ke = i(539142);

            function We(e) {
                return n.createElement(Ve.Informer, {
                    className: Ke.hint,
                    informerIntent: "warning",
                    header: r.t(null, void 0, i(697174)),
                    content: n.createElement(n.Fragment, null, n.createElement("span", null, r.t(null, void 0, i(616955)) + " "), n.createElement("a", {
                        href: `/support/solutions/${He.solutionIds.FINANCIAL_DATA}/`,
                        className: Ke.link,
                        onClick: function(e) {
                            e.preventDefault(), (0, F.showSupportDialog)({
                                solutionId: He.solutionIds.FINANCIAL_DATA
                            })
                        }
                    }, r.t(null, void 0, i(718429))))
                })
            }
            var qe = i(776734),
                Ue = i(462282);

            function $e(e) {
                const {
                    onSearch: t,
                    isSearching: s,
                    searchResults: a,
                    isLoadingMap: o,
                    requestMorePublicStudies: l,
                    requestMoreSuggestion: c,
                    reference: d,
                    onClose: f,
                    isOpened: S,
                    data: y,
                    activeTabId: w,
                    setActiveTabId: I,
                    lastActiveTabId: C,
                    setLastActiveTabId: T,
                    searchInputRef: P,
                    onSearchRefBlur: k,
                    isMobile: D,
                    isTablet: E,
                    areFinancialsSupported: B,
                    indicatorFilter: M,
                    setIndicatorFilter: z
                } = e, F = (0, n.useContext)(x.IndicatorsContext), A = (0, n.useRef)(!1), [N, R] = (0, n.useState)(""), [O, L] = (0, n.useState)(""), [V, H] = (0, n.useState)(), [K, W] = (0, n.useState)(-1), q = (0, n.useRef)(new AbortController), [$, j] = function() {
                    const [e, t] = (0, n.useState)(-1);
                    return (0, n.useEffect)((() => {
                        let i = 0;
                        return -1 !== e && (i = setTimeout((() => t(-1)), 1500)), () => clearInterval(i)
                    }), [e]), [e, t]
                }(), Y = (0, n.useMemo)((() => y.find((e => w === e.id))), [w, y]), Z = (0, n.useMemo)((() => {
                    const e = r.t(null, void 0, i(464426));
                    return "mobile" !== V ? e : N ? r.t(null, void 0, i(252298)) : Y ? Y.title : e
                }), [V, Y, N]), G = (0, n.useMemo)((() => {
                    const e = {
                        "built-ins": "indicators",
                        "public-library": "editorsPicks",
                        financials: "income statements"
                    };
                    return w && M && (0, Ae.isActiveFilterId)(w) && Oe[w].includes(M) ? { ...e,
                        [w]: M
                    } : e
                }), [M]), Q = (0, n.useMemo)((() => (0, m.createRegExpList)(N, Re.searchKeywords)), [N]), X = (0, n.useMemo)((() => {
                    if (N) return (0, Ae.prepareSearch)(a, Q, N);
                    if (!Y) return [];
                    if ("addons" === Y.id && 0 !== Y.content.length) return (0, Ae.prepareAddons)(Y.content);
                    const e = "public-library" === Y.id || "invite-only-scripts" === Y.id,
                        t = [],
                        n = "built-ins" === Y.id && "patterns" === G[Y.id];
                    "mobile" === V || n || t.push({
                        type: "Title",
                        item: {
                            title: r.t(null, void 0, i(515491)),
                            secondTitle: e ? r.t(null, void 0, i(579096)) : void 0,
                            thirdTitle: e ? r.t(null, {
                                context: "like_button_amount_of_likes"
                            }, i(179545)) : void 0
                        }
                    });
                    const s = "favorites" === Y.id,
                        o = "public-library" === Y.id && "editorsPicks" === G[Y.id],
                        l = (0, Ae.getFlattenedContent)(Y, (0,
                            Ae.hasFilteredContent)(Y) ? G[Y.id] : void 0).map((e => (0, Ae.isContentItem)(e) ? {
                            type: "Item",
                            item: { ...e,
                                editorsPick: e.editorsPick && !o,
                                isNested: e.isNested && !s
                            }
                        } : {
                            type: "Title",
                            item: e
                        }));
                    return t.push(...l), t
                }), [y, Y, a, V, Q, N, G]), [J, ee] = (0, n.useState)(0);
                (0, n.useEffect)((() => {
                    var e;
                    if (!S) return R(""), L(""), W(-1), void(w || I(y[0].id));
                    p.CheckMobile.any() || null === (e = P.current) || void 0 === e || e.focus()
                }), [S]), (0, n.useEffect)((() => {
                    "tablet" !== V || N || w || !y.length || (I(y[0].id), A.current = !0), "mobile" === V && !N && w && A.current && (I(null), A.current = !1)
                }), [V]), (0, n.useEffect)((() => W(-1)), [G]), (0, n.useEffect)((() => {
                    const e = D ? "mobile" : E ? "tablet" : void 0;
                    e !== V && H(e)
                }), [D, E]), (0, n.useEffect)((() => () => q.current.abort()), []);
                const te = (0, n.useCallback)((() => document.activeElement === P.current), []),
                    ie = "financials" === w && !B;
                return n.createElement(g.AdaptivePopupDialog, {
                    isOpened: S,
                    onClose: f,
                    onClickOutside: f,
                    className: u()(b.dialog),
                    forceCloseOnEsc: te,
                    render: () => n.createElement(_, {
                        tabs: y,
                        onTabClick: ae,
                        searchValue: O,
                        searchInputRef: P,
                        handleSearch: re,
                        activeTabId: w,
                        isOpened: S,
                        layoutMode: V,
                        onSearchRefBlur: k
                    }, (w || N) && n.createElement(Ne, {
                        key: w || "search",
                        queryString: N,
                        regExpsRules: Q,
                        data: X,
                        isSearching: s,
                        selectedPeriodIndex: J,
                        onActiveFilterClick: oe,
                        onItemClick: ne,
                        layoutMode: V,
                        activeTabId: w,
                        isLoading: w ? o[w] : void 0,
                        requestMorePublicStudies: l,
                        requestMoreSuggestion: c,
                        selectedItemIndex: K,
                        highlightedItemIndex: $,
                        activeFilters: G,
                        filters: Y && "filters" in Y ? Y.filters : []
                    }), ie && n.createElement(We, null)),
                    title: Z,
                    additionalHeaderElement: D && (w || N) ? n.createElement(Le.DialogHeaderBackButton, {
                        onClick: function() {
                            R(""), L(""), I(C === w ? null : C), T(null)
                        }
                    }) : null,
                    dataName: "indicators-dialog",
                    onKeyDown: function(e) {
                        var t;
                        40 === (0, v.hashFromEvent)(e) && (e.preventDefault(), se());
                        38 === (0, v.hashFromEvent)(e) && (e.preventDefault(), -1 === K && se(), function() {
                            for (let e = K - 1; e > -1; e--) {
                                if ("Item" === X[e].type) {
                                    W(e);
                                    break
                                }
                            }
                        }());
                        if (37 === (0, v.hashFromEvent)(e)) {
                            if (0 === J) return;
                            e.preventDefault(), ee(J - 1)
                        }
                        const i = X[K];
                        if (!i) return;
                        let n;
                        "Item" === i.type && i.item.periodData && (n = i.item.periodData.filter((e => F && F.reportFrequency !== U.PeriodId.Quarter ? e.period !== U.PeriodId.Quarter : e.period !== U.PeriodId.HalfYear)));
                        if (39 === (0, v.hashFromEvent)(e)) {
                            if ("Item" !== i.type || !n || J === n.length - 1) return;
                            e.preventDefault(), ee(J + 1)
                        }
                        13 === (0, v.hashFromEvent)(e) && -1 !== K && "Item" === i.type && (null == F || F.applyStudy(i.item, null === (t = null == n ? void 0 : n[J]) || void 0 === t ? void 0 : t.period), j(K))
                    },
                    ref: d
                });

                function ne(e, t, i, n) {
                    void 0 !== i && ee(i), W(e), null == F || F.applyStudy(t, n), j(e);
                    const s = null === w;
                    je(s ? "search" : w, s ? null : (0, Ae.isActiveFilterId)(w) ? G[w] : null, t.id)
                }

                function se() {
                    for (let e = K + 1; e < X.length; e++) {
                        if ("Item" === X[e].type) {
                            W(e);
                            break
                        }
                    }
                }
                async function re(e) {
                    try {
                        const {
                            value: i
                        } = e.target;
                        L(i), q.current.abort(), q.current = new AbortController, await (0, Ue.delay)(q.current.signal, 200), R(i), W(-1), t(i), 0 === i.length && (I(C), T(null)), i.length > 0 && null !== w && (null === C && T(w), I(null))
                    } catch (e) {
                        (0, Ue.skipAbortError)(e)
                    }
                }

                function ae(e) {
                    A.current = !1, I(e), T(e), R(""), L(""), W(-1), je(e, null, null)
                }

                function oe(e) {
                    z(e), je((0, h.ensureNotNull)(w), e, null)
                }
            }

            function je(e, t, i) {
                (0,
                    qe.getTracker)().then((n => {
                    null !== n && n.trackToolbarIndicators(e, t, i)
                }))
            }
            var Ye = i(272001),
                Ze = i(223616),
                Ge = i(500521),
                Qe = i(711496),
                Xe = i(971417),
                Je = i(779923),
                et = i(218333),
                tt = i(167803),
                it = i(988411),
                nt = i.n(it),
                st = i(642709),
                rt = i(552279),
                at = i(833813),
                ot = i(604061),
                lt = i(707202),
                ct = i(583912),
                dt = i(611998);
            const ut = (0, i(675128).lazyValue)((() => new dt.QuoteSessionSnapshoter({
                name: "indicators-dialog",
                fields: ["last_report_frequency", "type", "typespecs"]
            })));
            var ht = i(125226),
                pt = i(157773),
                vt = i(600204),
                mt = i(438063),
                gt = i(428026),
                ft = i(448770),
                St = i(543081),
                bt = i(2678),
                _t = i(440562);
            const yt = (0, Ye.getLogger)("Chart.IndicatorsContainer"),
                wt = r.t(null, void 0, i(482751)),
                It = r.t(null, void 0, i(189790));
            class Ct extends tt.IndicatorsBase {
                constructor(e) {
                    super(e), this._isMobile = window.matchMedia(st.DialogBreakpoints.TabletSmall).matches, this._favoriteScriptsModel = l.FavoriteScriptsModel.getInstance(), this._favoriteFundamentalsModel = c.FavoriteFundamentals.getInstance(), this._financialsFilters = ["income statements", "balance sheet", "cash flow", "statistics"], this._initializationProgress = "idle", this._loadMoreLinks = {}, this._publicStudiesCanBeLoaded = {
                            top: !0,
                            editorsPicks: !0,
                            trending: !0
                        }, this._publicStudiesIsLoading = {
                            top: !1,
                            editorsPicks: !1,
                            trending: !1
                        }, this._favoriteStudies = new Set, this._studies = {}, this._lastQuery = "", this._publicStudiesUserHaveAccessMap = new Map, this._initPublicStudies = {
                            top: [],
                            editorsPicks: [],
                            trending: []
                        }, this._nextPublicStudiesSuggestionUrl = null, this._publicStudiesSuggestionIsLoading = !1, this._savedActiveTabId = null, this._tempActiveTabId = null, this.resetAllStudies = () => {
                            this._init()
                        }, this.updateFavorites = async () => {
                            this._createFavorites();
                            let e = [];
                            for (const [t, i] of Object.entries(this._studies)) e = [...e, ...i], this._studies[t] = i.map((e => (e.isFavorite = this._isFavorite(e), e)));
                            const t = !this._studies.Script$FAVORITE;
                            this._studies.Script$FAVORITE = [];
                            const i = [],
                                n = new Set;
                            this._favoriteStudies.forEach((t => {
                                const s = e.find((e => e.id === t || e.periodData && e.periodData.some((e => e.scriptIdPart === t))));
                                if (s) {
                                    const {
                                        periodData: e,
                                        id: t
                                    } = s;
                                    if (e && n.has(t)) return;
                                    this._studies.Script$FAVORITE.push(s), n.add(t)
                                } else(0, Xe.isPineIdString)(t) && (0, Xe.isPublishedPineId)(t) ? i.push(t) : yt.logWarn(`Study with id ${t} does not exist in state`)
                            })), this._hasFavorites() || "favorites" !== this._getProps().value().activeTabId || this._setProps({
                                activeTabId: "built-ins",
                                lastActiveTabId: "built-ins"
                            }), i.length && t && await this._fetchFavoritePublicScripts(i)
                        }, this._handleMediaQuery = () => {
                            this._updateIndicatorsData(), this._updateActiveTab()
                        }, this._handleSearch = async e => {
                            this._lastQuery = e, this._nextPublicStudiesSuggestionUrl = null, this._setProps({
                                isSearching: !0,
                                searchResults: this._getIndicatorsData(["invite-only-scripts", "public-library"])
                            });
                            const t = await this._handleRequestPublicStudiesByQuery(e);
                            if (e !== this._lastQuery) return void(this._nextPublicStudiesSuggestionUrl = null);
                            const i = this._getIndicatorsData(["invite-only-scripts"]).map((e => (0, Ae.isPublicLibrary)(e) ? { ...e,
                                content: t.map((e => ({ ...e,
                                    isFavorite: this._isFavorite(e)
                                })))
                            } : e));
                            this._setProps({
                                searchResults: i,
                                isSearching: !1
                            })
                        },
                        this._handleClickOnOpenPineEditor = () => {
                            var e;
                            null === (e = window.TradingView.bottomWidgetBar) || void 0 === e || e.activateScriptEditorTab()
                        }, this._handleClickOnSourceCode = async (e, t) => {
                            const {
                                studyData: i
                            } = e;
                            if (!i || !(0, Xe.isPineIdString)(i.id)) return;
                            const {
                                id: n,
                                version: s
                            } = i;
                            try {
                                const e = await (0, a.getPineSourceCode)(n, s.toString());
                                if (e && window.TradingView.bottomWidgetBar) {
                                    const t = e.lastVersionMaj ? Ze.Version.parse(e.lastVersionMaj) : Ze.Version.ZERO,
                                        i = {
                                            scriptSource: e.source,
                                            scriptIdPart: n,
                                            scriptName: e.scriptName,
                                            scriptTitle: e.scriptTitle,
                                            version: e.version,
                                            isOld: !t.isZero() && t.major() !== Ze.Version.parse(e.version).major()
                                        };
                                    window.TradingView.bottomWidgetBar.activateScriptEditorTab(i)
                                }
                                this.hide()
                            } catch (e) {
                                (0, et.showNoticeDialog)({
                                    title: wt,
                                    content: It,
                                    manager: t
                                }), yt.logError(`Could not getPineSourceCode for pineId=${n} reason: ${e}`)
                            }
                        }, this._handleClickOnShowIdea = e => {
                            e.public && (0, Ge.pushChartPage)({
                                chartId: e.public.imageUrl,
                                chartName: e.title,
                                onClose: this._focus.bind(this)
                            })
                        }, this._clearTempTabIds = () => {
                            (this._tempActiveTabId || this._savedActiveTabId) && (this._tempActiveTabId = null, this._savedActiveTabId = null)
                        }, this._handleClickFilter = e => {
                            this._setProps({
                                indicatorFilter: e
                            })
                        }, this._handleClickOnTab = e => {
                            this._setProps({
                                activeTabId: e
                            }), this._clearTempTabIds()
                        }, this._setLastActiveTabId = e => {
                            if (null !== this._savedActiveTabId) return this._setProps({
                                lastActiveTabId: this._savedActiveTabId
                            }), void this._clearTempTabIds();
                            this._setProps({
                                lastActiveTabId: e
                            })
                        }, this._handleClickOnDeleteStudy = (e, t) => {
                            if (!e.studyData) return;
                            const n = e.studyData.id;
                            (0, Je.showConfirm)({
                                text: r.t(null, void 0, i(857905)).format({
                                    name: e.title
                                }),
                                onConfirm: async ({
                                    dialogClose: t
                                }) => {
                                    const {
                                        id: i
                                    } = e;
                                    if (!(0, Xe.isPineIdString)(n)) return yt.logError(`Could not delete script ${i}, reason: there is no scriptIdPart`), void t();
                                    try {
                                        if (await (0, a.deletePine)(n), this._studies.Script$USER = this._studies.Script$USER.filter((e => i !== e.id)), this._favoriteScriptsModel.isFav(n) && (this._favoriteScriptsModel.toggleFavorite(n), await this.updateFavorites()), this._getProps().value().searchResults.length) {
                                            const e = this._getProps().value().searchResults;
                                            this._setProps({
                                                searchResults: e.map((e => ({ ...e,
                                                    content: (0, Ae.getFlattenedContent)(e).filter(Ae.isContentItem).filter((e => i !== e.id))
                                                })))
                                            })
                                        }
                                        this._updateIndicatorsData(), this._updateActiveTab()
                                    } catch (e) {
                                        yt.logError(`Could not delete script ${i}, reason: ${e}`)
                                    }
                                    t()
                                }
                            }, t)
                        }, this._handleSearchRefBlur = e => {
                            var t, i;
                            p.CheckMobile.any() || e.relatedTarget !== (null === (i = null === (t = this._dialog) || void 0 === t ? void 0 : t.current) || void 0 === i ? void 0 : i.getElement()) || e.target.focus()
                        }, this._handleClickOnFavorite = e => {
                            if (e.isFundamental) {
                                if (!e.periodData) return;
                                const t = e.periodData.map((e => e.scriptIdPart));
                                return void this._favoriteFundamentalsModel.toggleFavoriteArray(t)
                            }
                            if (!e.studyData) return;
                            const t = e.studyData.id;
                            if (this._favoriteScriptsModel.toggleFavorite(t), "public" in e && this._isFavorite(e)) {
                                [...this._getAllPublicStudies(), ...this._studies.Script$INVITE].find((e => e.id === t)) || (e.isFavorite = !0, this._studies.Script$FAVORITE.push(e))
                            }
                        }, this._handleClickOnStudyApply = (e, t) => {
                            if (e.isFundamental) return void window.runOrSignIn((() => this._applyStudy(e, t)), {
                                source: "study-market-apply-study"
                            });
                            if (!e.studyData) return;
                            const i = e.studyData.id;
                            switch ((0, Ae.getStudyPackageName)(i)) {
                                case "tv-volumebyprice":
                                    (0, rt.runOrGoPro)(this._applyStudy.bind(this, e), at.ProductFeatures.TV_VOLUMEBYPRICE, {
                                        feature: "volumeProfile"
                                    });
                                    break;
                                case "tv-chartpatterns":
                                    (0, rt.runOrGoPro)(this._applyStudy.bind(this, e), at.ProductFeatures.CHART_PATTERNS, {
                                        feature: "chartPatterns"
                                    });
                                    break;
                                default:
                                    window.runOrSignIn(this._applyStudy.bind(this, e), {
                                        source: "study-market-apply-study"
                                    })
                            }
                        }, this._updateUserStudies = async () => {
                            const e = await this._initIndicatorsPromises.userScriptsPromise;
                            this._studies.Script$USER = this._preparePineUserStudies(e).sort(Re.sortIndicatorsByName), this._updateIndicatorsData()
                        }, this._handleRequestMorePublicStudies = async e => {
                            if (!this._publicStudiesCanBeLoaded[e] || this._publicStudiesIsLoading[e]) return;
                            const t = await this._requestPublicPineStudies(e, !1, !0),
                                i = this._preparePublicStudies(t),
                                n = this._getPublicStudyKey(e);
                            this._studies[n] = [...this._studies[n], ...i], this._removeDuplicates(n), this._updateIndicatorsData()
                        }, this._handleRequestMorePublicSuggestion = async () => {
                            if (!this._nextPublicStudiesSuggestionUrl || this._publicStudiesSuggestionIsLoading) return;
                            const e = await this._handleRequestPublicStudiesByQuery(this._lastQuery, this._nextPublicStudiesSuggestionUrl);
                            if (!e.length) return;
                            const {
                                searchResults: t
                            } = this._props.value(), i = t.find((e => "public-library" === e.id));
                            i && (i.content.push(...e), this._setProps({
                                searchResults: [...t],
                                isSearching: !1
                            }))
                        }, this._handleRequestPublicStudiesByQuery = async (e, t) => {
                            this._publicStudiesSuggestionIsLoading = !0;
                            const i = await (0, o.suggest)(e, t);
                            if (this._publicStudiesSuggestionIsLoading = !1, !i) return [];
                            const {
                                results: n,
                                next: s
                            } = i;
                            this._nextPublicStudiesSuggestionUrl = s;
                            let r = this._preparePublicStudies(n);
                            if (!(0, ht.isFeatureEnabled)("disable_community_script_client_sort")) {
                                const e = (0, m.createRegExpList)(this._lastQuery, Re.searchKeywords);
                                r = (0, m.rankedSearch)({
                                    data: r,
                                    rules: e,
                                    queryString: this._lastQuery,
                                    primaryKey: "shortDescription",
                                    secondaryKey: "title",
                                    optionalPrimaryKey: "shortTitle",
                                    tertiaryKey: "tags",
                                    isPreventedFromFiltering: !0
                                })
                            }
                            return r
                        }, this._isFavorite = e => e.isFundamental && e.periodData ? Boolean(e.periodData.length) && e.periodData.some((e => this._favoriteStudies.has(e.scriptIdPart))) : !!e.studyData && this._favoriteStudies.has(e.studyData.id), this._getTabStudies = e => {
                            switch (e) {
                                case "favorites":
                                    return this._getStudies("Script$FAVORITE").sort(Re.sortIndicatorsByName);
                                case "my-scripts":
                                    return this._getStudies("Script$USER");
                                case "invite-only-scripts":
                                    return this._getStudies("Script$INVITE").sort(Re.sortIndicatorsByName);
                                case "addons":
                                    return this._getAddons().sort(Re.sortIndicatorsByName);
                                default:
                                    return []
                            }
                        }, this._getStudies = e => this._studies[e] || [], this._getAddons = () => {
                            let e = [];
                            return window.pro && window.is_authenticated ? (window.pro.getStudiesOrder().forEach((t => {
                                "tv-volumebyprice" !== t && (e = [...e, ...this._getStudies(t)])
                            })), e) : e
                        }, this._updateIndicatorsData = () => {
                            const e = this._getIndicatorsData();
                            this._setProps({
                                data: e,
                                isLoadingMap: { ...this._isLoading
                                },
                                searchResults: this._updateSearchResultsFavourites()
                            })
                        }, this._indicatorsPreloader = new lt.IndicatorsPreloader(e), window.loginStateChange.subscribe(this, this._loginStateHandler), this._createFavorites(), this._favoriteScriptsModel.favoritesChanged().subscribe(this, (async () => {
                            await this.updateFavorites(), this._updateIndicatorsData()
                        })), this._favoriteFundamentalsModel.favoritesChanged().subscribe(this, (async () => {
                            await this.updateFavorites(), this._updateIndicatorsData()
                        }));
                    const t = this._hasFavorites(),
                        n = t ? "favorites" : "built-ins";
                    this._isLoading = {
                        favorites: t,
                        "built-ins": !0,
                        "my-scripts": !0,
                        "invite-only-scripts": !0,
                        "public-library": !0,
                        addons: !0,
                        financials: !0
                    }, this._context = {
                        toggleFavorite: this._handleClickOnFavorite,
                        showSourceCode: this._handleClickOnSourceCode,
                        showScriptIdea: this._handleClickOnShowIdea,
                        deleteUserStudy: this._handleClickOnDeleteStudy,
                        openPineEditor: this._handleClickOnOpenPineEditor,
                        closeDialog: this.hide.bind(this),
                        applyStudy: this._handleClickOnStudyApply,
                        reportFrequency: U.PeriodId.Quarter
                    }, this._props = new(nt())({
                        isOpened: !1,
                        reference: this._getDialog(),
                        searchInputRef: this._searchInputRef,
                        data: [],
                        activeTabId: this._isMobile ? null : n,
                        lastActiveTabId: null,
                        indicatorFilter: null,
                        isLoadingMap: this._isLoading,
                        onClose: this.hide.bind(this),
                        onSearch: this._onSearch.bind(this),
                        isSearching: !1,
                        searchResults: [],
                        requestMorePublicStudies: this._handleRequestMorePublicStudies,
                        requestMoreSuggestion: this._handleRequestMorePublicSuggestion,
                        setActiveTabId: this._handleClickOnTab,
                        setLastActiveTabId: this._setLastActiveTabId,
                        setIndicatorFilter: this._handleClickFilter,
                        onSearchRefBlur: this._handleSearchRefBlur
                    }), this._getProps().subscribe(this._render.bind(this)), this._mediaQuery = window.matchMedia("(max-width: 567px), (max-height: 445px)"), this._mediaQuery.addListener(this._handleMediaQuery), this._updateIndicatorsData()
                }
                open(e, t, i, n) {
                    super.open(e), void 0 !== i && (this._savedActiveTabId = this._props.value().activeTabId, this._tempActiveTabId = i, this._setProps({
                        activeTabId: i
                    })), void 0 !== n && this._setProps({
                        indicatorFilter: n
                    }), this._initIndicatorsPromises = t || this._indicatorsPreloader.getIndicatorPromises(), "idle" !== this._initializationProgress && "error" !== this._initializationProgress || this._init(), "ready" === this._initializationProgress && t && (this._isLoading["my-scripts"] = !0, this._updateIndicatorsData(), this._init())
                }
                hide(e) {
                    if (null !== this._savedActiveTabId) {
                        const {
                            activeTabId: e
                        } = this._props.value();
                        e === this._tempActiveTabId && this._setProps({
                            activeTabId: this._savedActiveTabId
                        }), this._clearTempTabIds()
                    }(null == e ? void 0 : e.target) && (e.target.closest('[data-role="toast-container"]') || e.target.closest('[data-dialog-name="gopro"]') || e.target.closest(".tv-dialog__modal-wrap") || e.target.closest("[data-outside-boundary-for=confirm-inputs-dialog]") || e.target.closest(".symbol-edit-popup") || e.target.closest("[data-name=support-dialog]")) || super.hide()
                }
                destroy() {
                    this._favoriteScriptsModel.favoritesChanged().unsubscribeAll(this), this._favoriteFundamentalsModel.favoritesChanged().unsubscribeAll(this),
                        this._mediaQuery.removeListener(this._handleMediaQuery), super.destroy()
                }
                _getProps() {
                    return this._props
                }
                _render() {
                    if (this._shouldPreventRender()) return;
                    const {
                        props: e,
                        container: t
                    } = this._getRenderData();
                    s.render(n.createElement(x.IndicatorsContext.Provider, {
                        value: this._context
                    }, n.createElement(pt.MatchMediaMap, {
                        rules: st.DialogBreakpoints
                    }, (({
                        TabletSmall: t,
                        TabletNormal: i
                    }) => n.createElement($e, {
                        isMobile: t,
                        isTablet: i,
                        ...e
                    })))), t)
                }
                _onSearch(e) {
                    this._handleSearch(e)
                }
                _removeDuplicates(e) {
                    const t = new Set;
                    this._studies[e] = this._studies[e].reduce(((e, i) => (t.has(i.id) || (t.add(i.id), e.push(i)), e)), [])
                }
                async _fetchFavoritePublicScripts(e) {
                    const t = await (0, o.info)(e) || [];
                    this._studies.Script$FAVORITE = [...this._getStudies("Script$FAVORITE"), ...this._preparePublicStudies(t)].sort(Re.sortIndicatorsByName)
                }
                _loginStateHandler() {
                    window.is_authenticated ? this._init() : (this._studies.Script$USER = [], this._studies.Script$FAVORITE = [], this._studies.Script$INVITE = []), this._updateIndicatorsData()
                }
                _init() {
                    this._studies = {}, this._initializationProgress = "initializing", this._getMainInitPromise().then((() => {
                        this._initializationProgress = "ready"
                    })).catch((() => {
                        this._initializationProgress = "error"
                    }))
                }
                async _getMainInitPromise() {
                    const e = this._initBuiltInJavaStudies(),
                        t = this._initStandardStudies(),
                        i = this._initFinancials(),
                        n = Promise.all([e, t]).then((() => {
                            this._studies.strategies = [...this._studies["tv-basicstudies"].filter((e => e.isStrategy)), ...this._studies.Script$STD.filter((e => e.isStrategy))], this._studies["tv-basicstudies"] = this._studies["tv-basicstudies"].filter((e => !e.isStrategy)), this._studies.Script$STD = this._studies.Script$STD.filter((e => !e.isStrategy)), this._isLoading["built-ins"] = !1, this._updateIndicatorsData()
                        })),
                        s = this._updateUserStudies().then((() => {
                            this._isLoading["my-scripts"] = !1, this._updateIndicatorsData()
                        })),
                        r = this._initCandlestickScripts(),
                        a = new Set([this._initAddons(), this._initPublic(), this._initInviteOnly()]),
                        o = new Set([e, t, s, r, i]),
                        l = [...Array.from(a), ...Array.from(o), n];
                    this._hasFavorites() && (this._favoriteStudies.forEach((n => {
                        switch ((0, Ae.getStudyPackageName)(n)) {
                            case "tv-volumebyprice":
                            case "tv-basicstudies":
                            default:
                                a.add(e), o.delete(e);
                                break;
                            case "Script$STD":
                                a.add(t), o.delete(t), a.add(i), o.delete(i);
                                break;
                            case "Script$USER":
                                a.add(s), o.delete(s);
                                break;
                            case "candlestick-patterns":
                                a.add(r), o.delete(r);
                            case "Script$PUB":
                        }
                    })), l.push(Promise.all(Array.from(a)).then((() => this._initFavorites())))), await Promise.all(l)
                }
                _hasFavorites() {
                    return Boolean(this._favoriteStudies.size)
                }
                async _initPublic() {
                    await Promise.all([this._initPublicByType("top"), this._initPublicByType("editorsPicks"), this._initPublicByType("trending")]), this._isLoading["public-library"] = !1, this._updateIndicatorsData()
                }
                _getPublicStudyKey(e) {
                    switch (e) {
                        case "top":
                            return "Script$PUB";
                        case "editorsPicks":
                            return "editorsPicks";
                        case "trending":
                            return "trending"
                    }
                }
                async _initPublicByType(e) {
                    const t = await this._requestPublicPineStudies(e, !0);
                    this._initPublicStudies[e] = t;
                    const i = this._getPublicStudyKey(e);
                    this._studies[i] = this._preparePublicStudies(t), this._removeDuplicates(i)
                }
                async _initInviteOnly() {
                    if (!window.is_authenticated || this._studies.Script$INVITE) return;
                    const e = await this._requestPinePermissions();
                    this._studies.Script$INVITE = e.filter((e => void 0 !== e.isLocked)), this._studies.Script$PUB = this._preparePublicStudies(this._initPublicStudies.top), this._studies.editorsPicks = this._preparePublicStudies(this._initPublicStudies.editorsPicks), this._studies.trending = this._preparePublicStudies(this._initPublicStudies.trending), this._isLoading["invite-only-scripts"] = !1, this._updateIndicatorsData()
                }
                async _initBuiltInJavaStudies() {
                    const e = await this._initIndicatorsPromises.javaStudiesPromise,
                        t = (0, Re.makeStudiesMap)(this._prepareJavaStudies(e));
                    this._studies = { ...this._studies,
                        ...t
                    }, this._isLoading.addons = !1, this._updateIndicatorsData()
                }
                async _initStandardStudies() {
                    const e = await this._initIndicatorsPromises.standardScriptsPromise,
                        {
                            pineBuiltInStudies: t
                        } = (0, Ae.sortBuiltinAndUserScripts)(e),
                        i = (0, Re.makeStudiesMap)(this._preparePineBuiltInStudies(t));
                    this._studies = { ...this._studies,
                        ...i
                    }, this._updateIndicatorsData()
                }
                async _initCandlestickScripts() {
                    const e = await this._initIndicatorsPromises.candlestickScriptsPromise;
                    this._studies["candlestick-patterns"] = this._preparePineBuiltInStudies(e).sort(Re.sortIndicatorsByName), this._updateIndicatorsData()
                }
                async _initFinancials() {
                    const e = this._initIndicatorsPromises.financialsPromise.then((e => {
                        var t;
                        const i = this._financialsFilters;
                        for (const n of i) {
                            const i = null !== (t = e[n]) && void 0 !== t ? t : [];
                            this._studies[n] = i.map(Ae.mapFinancialItemToIndicatorItem).map((e => ({ ...e,
                                isFavorite: this._isFavorite(e)
                            })))
                        }
                    }));
                    await Promise.all([e, this._initFinancialsViewData()]), this._isLoading.financials = !1, this._updateIndicatorsData()
                }
                async _initAddons() {
                    const e = await this._initIndicatorsPromises.addonsPromise;
                    e && this._handleAddons(e)
                }
                _handleAddons(e) {
                    e.forEach((e => {
                        if (!e || 0 === e.length) return;
                        const t = this._preparePineBuiltInStudies(e),
                            {
                                studyData: i
                            } = t[0];
                        i && (this._studies[i.packageName] = t)
                    }))
                }
                async _initFavorites() {
                    this._isLoading.favorites = !0, await this.updateFavorites(), this._isLoading.favorites = !1, this._updateIndicatorsData()
                }
                _getIndicatorsData(e = []) {
                    const t = this._getTabStudies("favorites"),
                        n = this._getTabStudies("my-scripts"),
                        s = this._getTabStudies("invite-only-scripts"),
                        a = this._getTabStudies("addons");
                    return [{
                        id: "favorites",
                        title: r.t(null, void 0, i(933959)),
                        icon: vt,
                        content: t,
                        isVisible: this._hasFavorites()
                    }, {
                        id: "my-scripts",
                        title: r.t(null, void 0, i(666613)),
                        icon: St,
                        content: n,
                        isVisible: !this._mediaQuery.matches || Boolean(n.length)
                    }, {
                        id: "built-ins",
                        title: r.t(null, {
                            context: "study"
                        }, i(950110)),
                        icon: mt,
                        filters: ["indicators", "strategies", "profiles", "patterns"],
                        filteredContent: {
                            indicators: [...this._getStudies("tv-basicstudies"), ...this._getStudies("Script$STD"), ...this._getStudies("auto-java"), ...this._getStudies("auto-standard")].sort(Re.sortIndicatorsByName),
                            strategies: [...this._getStudies("strategies")],
                            patterns: [{
                                title: r.t(null, void 0, i(334404))
                            }, ...this._getStudies("tv-chartpatterns"), {
                                title: r.t(null, void 0, i(986681))
                            }, ...this._getStudies("candlestick-patterns")],
                            profiles: [...this._getStudies("tv-volumebyprice")]
                        },
                        isVisible: !0
                    }, {
                        id: "financials",
                        title: r.t(null, void 0, i(677720)),
                        icon: gt,
                        filters: this._financialsFilters,
                        filteredContent: {
                            "balance sheet": this._getStudies("balance sheet"),
                            "cash flow": this._getStudies("cash flow"),
                            "income statements": this._getStudies("income statements"),
                            statistics: this._getStudies("statistics")
                        },
                        isVisible: !0
                    }, {
                        id: "public-library",
                        title: r.t(null, void 0, i(958999)),
                        icon: ft,
                        filters: ["editorsPicks", "top", "trending"],
                        filteredContent: {
                            editorsPicks: [...this._getStudies("editorsPicks")],
                            top: [...this._getStudies("Script$PUB")],
                            trending: [...this._getStudies("trending")]
                        },
                        isVisible: !0
                    }, {
                        id: "invite-only-scripts",
                        title: r.t(null, void 0, i(279934)),
                        icon: bt,
                        content: s,
                        isVisible: Boolean(s.length)
                    }, {
                        id: "addons",
                        title: r.t(null, void 0, i(669729)),
                        icon: _t,
                        content: a,
                        isVisible: Boolean(a.length)
                    }].filter((t => e.length ? !e.includes(t.id) && t.isVisible : t.isVisible))
                }
                async _initFinancialsViewData() {
                    var e;
                    const t = null !== (e = this._getSymbol()) && void 0 !== e ? e : ct.linking.symbol.value(),
                        i = await ut().getSnapshot(t, new Set(["last_report_frequency", "type", "typespecs"]));
                    if ("ok" !== i.status) return;
                    const {
                        last_report_frequency: n,
                        type: s,
                        typespecs: r
                    } = i.values, a = (0, Qe.hasMoreFinancialsButton)(s, r);
                    this._setProps({
                        areFinancialsSupported: a
                    }), this._context.reportFrequency = (0, U.convertFrequencyToPeriod)(n)
                }
                _updateSearchResultsFavourites() {
                    const {
                        searchResults: e
                    } = this._props.value();
                    return e.map((e => ({ ...e,
                        content: (0, Ae.getFlattenedContent)(e).filter(Ae.isContentItem).map((e => ({ ...e,
                            isFavorite: this._isFavorite(e)
                        })))
                    })))
                }
                _updateActiveTab() {
                    var e;
                    this._mediaQuery.matches && !(null === (e = this._studies.Script$USER) || void 0 === e ? void 0 : e.length) && "my-scripts" === this._getProps().value().activeTabId && this._setProps({
                        activeTabId: "built-ins",
                        lastActiveTabId: "built-ins"
                    })
                }
                async _requestPublicPineStudies(e, t, i) {
                    if (!this._publicStudiesCanBeLoaded[e] && !t) return [];
                    this._publicStudiesIsLoading[e] = !0;
                    const n = this._loadMoreLinks[e];
                    let s;
                    return s = i && void 0 !== n ? await (0, ot.fetchLoadMorePublicStudies)(n) : await this._fetchPublicStudiesByType(e, t), this._publicStudiesCanBeLoaded[e] = Boolean(s.next), this._loadMoreLinks[e] = s.next, this._publicStudiesIsLoading[e] = !1, s.results
                }
                async _fetchPublicStudiesByType(e, t) {
                    let i = {
                        results: []
                    };
                    switch (e) {
                        case "top":
                            i = t ? await this._initIndicatorsPromises.publicPineStudiesPromise : await (0, ot.fetchPublicPineStudies)((0, ot.createPublicStudiesRequestParams)("top"));
                            break;
                        case "trending":
                            i = t ? await this._initIndicatorsPromises.trendingStudiesPromise : await (0, ot.fetchPublicPineStudies)((0, ot.createPublicStudiesRequestParams)("trending"));
                            break;
                        case "editorsPicks":
                            i = t ? await this._initIndicatorsPromises.editorsPicksStudiesPromise : await (0, ot.fetchEditorsPicksStudies)()
                    }
                    return i
                }
                _getAllPublicStudies() {
                    return [...this._getStudies("Script$PUB"), ...this._getStudies("editorsPicks"), ...this._getStudies("trending")]
                }
                async _requestPinePermissions() {
                    const e = [],
                        t = this._getAllPublicStudies(),
                        i = (await this._initIndicatorsPromises.pinePermissionsPromise).filter((i => {
                            const n = t.find((e => e.id.includes(i)));
                            return n && e.push(n), !n
                        })),
                        n = await (0, o.info)(i, !0) || [];
                    return n.forEach((e => {
                        this._publicStudiesUserHaveAccessMap.set(e.scriptIdPart, e.userHaveAccess)
                    })), [...e, ...this._preparePublicStudies(n)]
                }
                _prepareJavaStudies(e) {
                    return (0, Re.prepareStudies)(e.map((e => ({ ...(0, Re.mapStudyMetaInfo)(e),
                        isFavorite: this._favoriteStudies.has(e.id),
                        solutionId: (0, Ae.getSolutionId)(e.id)
                    }))))
                }
                _preparePineBuiltInStudies(e) {
                    return (0, Re.prepareStudies)(e.map((e => ({ ...(0, Ae.mapPineStudy)(e),
                        title: r.t(e.scriptName, {
                            context: "study"
                        }, i(168716)),
                        isFavorite: this._favoriteStudies.has(e.scriptIdPart),
                        solutionId: (0, Ae.getSolutionId)(e.scriptIdPart)
                    }))))
                }
                _preparePineUserStudies(e) {
                    return (0, Re.prepareStudies)(e.map((e => ({ ...(0, Ae.mapPineStudy)(e),
                        isFavorite: this._favoriteStudies.has(e.scriptIdPart),
                        isSourceVisible: !0
                    }))))
                }
                _preparePublicStudies(e) {
                    return (0, Re.prepareStudies)(e.map((e => ({ ...(0, Ae.mapPublicStudies)({ ...e,
                            userHaveAccess: this._publicStudiesUserHaveAccessMap.get(e.scriptIdPart) || !1
                        }, !0),
                        isFavorite: this._favoriteStudies.has(e.scriptIdPart)
                    }))))
                }
                _createFavorites() {
                    this._favoriteStudies = new Set, this._favoriteScriptsModel.favorites().forEach((e => {
                        "java" === e.type ? this._favoriteStudies.add(e.studyId) : this._favoriteStudies.add(e.pineId)
                    })), this._favoriteFundamentalsModel.favorites().forEach((e => this._favoriteStudies.add(e)))
                }
            }
        },
        409147: (e, t, i) => {
            "use strict";
            i.d(t, {
                IndicatorsContext: () => n
            });
            const n = i(50959).createContext(null)
        },
        210794: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                IndicatorsLibraryContainer: () => D
            });
            var n = i(50959),
                s = i(500962),
                r = i(735680),
                a = i(497754),
                o = i.n(a),
                l = i(777754),
                c = i(443549),
                d = i(619027),
                u = i(638456),
                h = i(986623),
                p = i(804508),
                v = i(446317),
                m = i(242546),
                g = i(272686),
                f = i(218655),
                S = i(725002);

            function b(e) {
                const [t, i] = (0, n.useState)(null);

                function s(e) {
                    return e.findIndex((e => (null == t ? void 0 : t.id) === e.id))
                }
                return [t, i, function() {
                    i(function() {
                        var i;
                        const n = s(e),
                            r = n === e.length - 1;
                        return null === t || -1 === n ? null !== (i = e[0]) && void 0 !== i ? i : null : r ? e[n] : e[n + 1]
                    }())
                }, function() {
                    i(function() {
                        var i;
                        const n = s(e);
                        return null === t || 0 === n || -1 === n ? null !== (i = e[0]) && void 0 !== i ? i : null : e[n - 1]
                    }())
                }]
            }
            var _ = i(470316);
            var y = i(742231),
                w = i(874781);

            function I(e) {
                const {
                    reference: t,
                    data: s,
                    isOpened: a,
                    onClose: I,
                    applyStudy: C
                } = e, [T, P] = (0, n.useState)(""), k = (0, n.useMemo)((() => (0, y.createRegExpList)(T, r.searchKeywords)), [T]), D = (0, n.useMemo)((() => T ? (0, y.rankedSearch)({
                    data: s,
                    rules: k,
                    queryString: T,
                    primaryKey: "shortDescription",
                    secondaryKey: "title",
                    optionalPrimaryKey: "shortTitle",
                    tertiaryKey: "tags"
                }) : s), [T, k, s]), {
                    highlightedItem: E,
                    selectedItem: x,
                    selectedNodeReference: B,
                    scrollContainerRef: M,
                    searchInputRef: z,
                    onClickStudy: F,
                    handleKeyDown: A
                } = function(e, t, i, s) {
                    let a = 0;
                    const [o, l] = (0, n.useState)(null), c = (0, n.useRef)(null), d = (0, n.useRef)(null), [u, h, p, v] = b(t), m = (0, n.useRef)(null);
                    return (0, n.useEffect)((() => {
                        e ? g(0) : h(null)
                    }), [e]), (0, n.useEffect)((() => {
                        void 0 !== s && (g(0), h(null))
                    }), [s]), (0, n.useEffect)((() => (o && (a = setTimeout((() => {
                        l(null)
                    }), 1500)), () => {
                        clearInterval(a)
                    })), [o]), {
                        highlightedItem: o,
                        scrollContainerRef: c,
                        selectedNodeReference: d,
                        selectedItem: u,
                        searchInputRef: m,
                        onClickStudy: function(e) {
                            i && (i(e), h(e), l(e))
                        },
                        handleKeyDown: function(e) {
                            const [t, n] = (0, r.getOffset)(d, c);
                            if (40 === (0, _.hashFromEvent)(e) && (e.preventDefault(), p(), g(n)), 38 === (0, _.hashFromEvent)(e) && (e.preventDefault(), v(), g(t)), 13 === (0, _.hashFromEvent)(e) && u) {
                                if (!i) return;
                                i(u), l(u)
                            }
                        }
                    };

                    function g(e) {
                        null !== c.current && c.current.scrollTo && c.current.scrollTo(0, e)
                    }
                }(a, D, C), N = "" === T && !D.length;
                return (0, n.useEffect)((() => {
                    var e;
                    a || P(""), u.CheckMobile.any() || null === (e = z.current) || void 0 === e || e.focus()
                }), [a]), n.createElement(d.AdaptivePopupDialog, {
                    isOpened: a,
                    onClose: I,
                    onClickOutside: I,
                    className: o()(w.dialogLibrary),
                    render: function() {
                        return n.createElement(n.Fragment, null, n.createElement(h.DialogSearch, {
                            reference: z,
                            placeholder: l.t(null, void 0, i(252298)),
                            onChange: R,
                            onFocus: O
                        }), n.createElement(p.DialogSidebarWrapper, null, n.createElement(v.ContentSection, {
                            reference: M,
                            className: w.scroll
                        }, N ? n.createElement(c.Spinner, null) : D.length ? n.createElement(n.Fragment, null, n.createElement(f.ContentHeader, null, n.createElement(g.ContentHeaderTitle, {
                            title: l.t(null, void 0, i(515491))
                        })), D.map((e => {
                            const t = (null == x ? void 0 : x.id) === e.id;
                            return n.createElement(m.ContentItem, {
                                key: e.id,
                                item: e,
                                onClick: () => F(e),
                                query: T,
                                regExpRules: k,
                                reference: t ? B : void 0,
                                isSelected: (null == x ? void 0 : x.id) === e.id,
                                isHighlighted: (null == E ? void 0 : E.id) === e.id
                            })
                        }))) : n.createElement(S.ContentIsNotFound, {
                            className: w.noContentBlock,
                            description: l.t(null, void 0, i(353170))
                        }))))
                    },
                    title: l.t(null, void 0, i(561142)),
                    dataName: "indicators-dialog",
                    onKeyDown: A,
                    ref: t
                });

                function R(e) {
                    P(e.target.value)
                }

                function O() {
                    var e;
                    T.length > 0 && (null === (e = z.current) || void 0 === e || e.select())
                }
            }
            var C = i(167803),
                T = i(988411),
                P = i.n(T),
                k = i(511077);
            class D extends C.IndicatorsBase {
                constructor(e, t) {
                    super(e), this._options = {
                        onWidget: !1
                    }, t && (this._options = t), this._props = new(P())({
                        data: [],
                        applyStudy: this._applyStudy.bind(this),
                        isOpened: !1,
                        reference: this._getDialog(),
                        onClose: this.hide.bind(this)
                    }), this._getProps().subscribe(this._render.bind(this)), this._init()
                }
                _getProps() {
                    return this._props
                }
                async _init() {
                    const e = await this._requestBuiltInJavaStudies(),
                        t = (0, r.makeStudiesMap)((0, r.prepareStudies)(e.map(r.mapStudyMetaInfo))),
                        i = await (0, k.getCommonPineStudies)(this._options.onWidget, t);
                    this._setProps({
                        data: i
                    })
                }
                _render() {
                    if (this._shouldPreventRender()) return;
                    const {
                        props: e,
                        container: t
                    } = this._getRenderData();
                    s.render(n.createElement(I, { ...e
                    }), t)
                }
            }
        },
        558470: (e, t, i) => {
            "use strict";
            i.d(t, {
                AnchorBadge: () => n.AnchorBadge,
                Badge: () => n.Badge,
                BadgeSize: () => n.BadgeSize
            });
            var n = i(774465)
        },
        145110: (e, t, i) => {
            "use strict";
            i.d(t, {
                BubbleRow: () => o
            });
            var n = i(50959),
                s = i(497754),
                r = i(401993),
                a = i(100266);

            function o(e) {
                const {
                    className: t,
                    itemClassName: i,
                    itemContentClassName: o,
                    items: l,
                    getItemTitle: c,
                    getItemTooltip: d,
                    getItemKey: u,
                    checkItemIsActive: h,
                    getItemColor: p,
                    onBubbleClick: v,
                    multiline: m,
                    children: g,
                    BubbleComponent: f = r.Bubble,
                    reference: S,
                    fontSize: b
                } = e;
                return n.createElement("div", {
                    className: s(t, a.bubbles, m && a.multiLine),
                    ref: S
                }, l.map(((e, t) => n.createElement(f, {
                    key: u ? u(e) : t,
                    id: u ? u(e) : t.toString(),
                    className: s(a.bubble, i),
                    contentClassName: o,
                    onClick: function() {
                        v(e)
                    },
                    onMouseDown: function(e) {
                        e.preventDefault()
                    },
                    isActive: !!h && h(e),
                    activeColor: p ? p(e) : void 0,
                    fontSize: b,
                    title: d ? d(e) : void 0
                }, c(e)))), g)
            }
        },
        401993: (e, t, i) => {
            "use strict";
            i.d(t, {
                Bubble: () => c,
                ButtonBubble: () => d
            });
            var n = i(50959),
                s = i(497754),
                r = i.n(s),
                a = i(8626),
                o = i(279930);

            function l(e) {
                const {
                    title: t,
                    isActive: i,
                    isAnimated: n,
                    activeColor: s,
                    size: a = "m",
                    appearance: l = "default",
                    fontSize: c = "m",
                    className: d
                } = e;
                return r()(o.bubble, i && o.active, s && o[s], t && "apply-common-tooltip", a && o[`size-${a}`], c && o[`fontSize-${c}`], l && o[`appearance-${l}`], n && o.animated, d)
            }

            function c(e) {
                const {
                    id: t,
                    title: i,
                    tabIndex: s,
                    role: c,
                    contentClassName: d,
                    children: u,
                    onClick: h,
                    onMouseDown: p,
                    reference: v,
                    ...m
                } = e;
                return n.createElement("span", { ...(0, a.filterAriaProps)(m),
                    ...(0, a.filterDataProps)(m),
                    id: t,
                    title: i,
                    tabIndex: s,
                    role: c,
                    className: l(e),
                    onClick: h,
                    onMouseDown: p,
                    ref: v
                }, n.createElement("span", {
                    className: r()(o.content, d)
                }, u))
            }

            function d(e) {
                const {
                    id: t,
                    title: i,
                    tabIndex: s,
                    role: c,
                    contentClassName: d,
                    children: u,
                    onClick: h,
                    onMouseDown: p,
                    ...v
                } = e;
                return n.createElement("button", { ...(0, a.filterAriaProps)(v),
                    ...(0, a.filterDataProps)(v),
                    id: t,
                    title: i,
                    tabIndex: s,
                    role: c,
                    className: l(e),
                    onClick: h,
                    onMouseDown: p
                }, n.createElement("span", {
                    className: r()(o.content, d)
                }, u))
            }
        },
        725002: (e, t, i) => {
            "use strict";
            i.d(t, {
                ContentIsNotFound: () => c
            });
            var n = i(50959),
                s = i(497754),
                r = i.n(s),
                a = i(83436),
                o = i(540975),
                l = i(672502);

            function c(e) {
                const {
                    className: t,
                    icon: i,
                    title: s,
                    description: c,
                    buttonText: d,
                    buttonAction: u
                } = e;
                return n.createElement("div", {
                    className: r()(l.container, t)
                }, i && n.createElement(a.Icon, {
                    icon: i,
                    className: l.image
                }), s && n.createElement("h3", {
                    className: l.title
                }, s), c && n.createElement("p", {
                    className: l.description
                }, c), d && u && n.createElement(o.Button, {
                    onClick: u,
                    className: l.button
                }, d))
            }
        },
        742231: (e, t, i) => {
            "use strict";
            i.d(t, {
                rankedSearch: () => s,
                createRegExpList: () => r,
                getHighlightedChars: () => a
            });
            var n = i(758337);

            function s(e) {
                const {
                    data: t,
                    rules: i,
                    queryString: s,
                    isPreventedFromFiltering: r,
                    primaryKey: a,
                    secondaryKey: o = a,
                    optionalPrimaryKey: l,
                    tertiaryKey: c
                } = e;
                return t.map((e => {
                    const t = l && e[l] ? e[l] : e[a],
                        r = e[o],
                        d = c && e[c];
                    let u, h = 0;
                    return i.forEach((e => {
                        var i, a, o, l, c;
                        const {
                            re: p,
                            fullMatch: v
                        } = e;
                        if (p.lastIndex = 0, (0, n.isString)(t) && t && t.toLowerCase() === s.toLowerCase()) return h = 4, void(u = null === (i = t.match(v)) || void 0 === i ? void 0 : i.index);
                        if ((0, n.isString)(t) && v.test(t)) return h = 3, void(u = null === (a = t.match(v)) || void 0 === a ? void 0 : a.index);
                        if ((0, n.isString)(r) && v.test(r)) return h = 2, void(u = null === (o = r.match(v)) || void 0 === o ? void 0 : o.index);
                        if ((0, n.isString)(r) && p.test(r)) return h = 2, void(u = null === (l = r.match(p)) || void 0 === l ? void 0 : l.index);
                        if (Array.isArray(d))
                            for (const e of d)
                                if (v.test(e)) return h = 1, void(u = null === (c = e.match(v)) || void 0 === c ? void 0 : c.index)
                    })), {
                        matchPriority: h,
                        matchIndex: u,
                        item: e
                    }
                })).filter((e => r || e.matchPriority)).sort(((e, t) => {
                    if (e.matchPriority < t.matchPriority) return 1;
                    if (e.matchPriority > t.matchPriority) return -1;
                    if (e.matchPriority === t.matchPriority) {
                        if (void 0 === e.matchIndex || void 0 === t.matchIndex) return 0;
                        if (e.matchIndex > t.matchIndex) return 1;
                        if (e.matchIndex < t.matchIndex) return -1
                    }
                    return 0
                })).map((({
                    item: e
                }) => e))
            }

            function r(e, t) {
                const i = [],
                    n = e.toLowerCase(),
                    s = e.split("").map(((e, t) => `(${0!==t?`[/\\s-]${o(e)}`:o(e)})`)).join("(.*?)") + "(.*)";
                return i.push({
                    fullMatch: new RegExp(`(${o(e)})`, "i"),
                    re: new RegExp(`^${s}`, "i"),
                    reserveRe: new RegExp(s, "i"),
                    fuzzyHighlight: !0
                }), t && t.hasOwnProperty(n) && i.push({
                    fullMatch: t[n],
                    re: t[n],
                    fuzzyHighlight: !1
                }), i
            }

            function a(e, t, i) {
                const n = [];
                return e && i ? (i.forEach((e => {
                    const {
                        fullMatch: i,
                        re: s,
                        reserveRe: r
                    } = e;
                    i.lastIndex = 0, s.lastIndex = 0;
                    const a = i.exec(t),
                        o = a || s.exec(t) || r && r.exec(t);
                    if (e.fuzzyHighlight = !a, o)
                        if (e.fuzzyHighlight) {
                            let e = o.index;
                            for (let t = 1; t < o.length; t++) {
                                const i = o[t],
                                    s = o[t].length;
                                if (t % 2) {
                                    const t = i.startsWith(" ") || i.startsWith("/") || i.startsWith("-");
                                    n[t ? e + 1 : e] = !0
                                }
                                e += s
                            }
                        } else
                            for (let e = 0; e < o[0].length; e++) n[o.index + e] = !0
                })), n) : n
            }

            function o(e) {
                return e.replace(/[!-/[-^{-}]/g, "\\$&")
            }
        },
        452623: (e, t, i) => {
            "use strict";
            i.d(t, {
                HighlightedText: () => o
            });
            var n = i(50959),
                s = i(497754),
                r = i(742231),
                a = i(683307);

            function o(e) {
                const {
                    queryString: t,
                    rules: i,
                    text: o,
                    className: l
                } = e, c = (0, n.useMemo)((() => (0, r.getHighlightedChars)(t, o, i)), [t, i, o]);
                return n.createElement(n.Fragment, null, c.length ? o.split("").map(((e, t) => n.createElement(n.Fragment, {
                    key: t
                }, c[t] ? n.createElement("span", {
                    className: s(a.highlighted, l)
                }, e) : n.createElement("span", null, e)))) : o)
            }
        },
        891130: (e, t, i) => {
            "use strict";
            i.d(t, {
                useEnsuredContext: () => r
            });
            var n = i(50959),
                s = i(650151);

            function r(e) {
                return (0, s.ensureNotNull)((0, n.useContext)(e))
            }
        },
        324997: (e, t, i) => {
            "use strict";
            i.d(t, {
                useResizeObserver: () => n.useResizeObserver
            });
            var n = i(444530)
        },
        631078: (e, t, i) => {
            "use strict";
            i.d(t, {
                useWatchedValueReadonly: () => s
            });
            var n = i(50959);
            const s = (e, t = !1) => {
                const i = "watchedValue" in e ? e.watchedValue : void 0,
                    s = "defaultValue" in e ? e.defaultValue : e.watchedValue.value(),
                    [r, a] = (0, n.useState)(i ? i.value() : s);
                return (t ? n.useLayoutEffect : n.useEffect)((() => {
                    if (i) {
                        a(i.value());
                        const e = e => a(e);
                        return i.subscribe(e), () => i.unsubscribe(e)
                    }
                    return () => {}
                }), [i]), r
            }
        },
        148547: (e, t, i) => {
            "use strict";
            i.d(t, {
                ListItemButton: () => l
            });
            var n = i(50959),
                s = i(497754),
                r = i.n(s),
                a = i(83436),
                o = i(734393);

            function l(e) {
                const {
                    className: t,
                    disabled: i,
                    ...s
                } = e;
                return n.createElement(a.Icon, {
                    className: r()(o.button, i && o.disabled, t),
                    ...s
                })
            }
        },
        157773: (e, t, i) => {
            "use strict";
            i.d(t, {
                MatchMediaMap: () => a
            });
            var n = i(50959),
                s = i(266783),
                r = i.n(s);
            class a extends n.Component {
                constructor(e) {
                    super(e), this._handleMediaChange = () => {
                        const e = l(this.state.queries, ((e, t) => t.matches));
                        let t = !1;
                        for (const i in e)
                            if (e.hasOwnProperty(i) && this.state.matches[i] !== e[i]) {
                                t = !0;
                                break
                            }
                        t && this.setState({
                            matches: e
                        })
                    };
                    const {
                        rules: t
                    } = this.props;
                    this.state = o(t)
                }
                shouldComponentUpdate(e, t) {
                    return !r()(e, this.props) || (!r()(t.rules, this.state.rules) || !r()(t.matches, this.state.matches))
                }
                componentDidMount() {
                    this._migrate(null, this.state.queries)
                }
                componentDidUpdate(e, t) {
                    r()(e.rules, this.props.rules) || this._migrate(t.queries, this.state.queries)
                }
                componentWillUnmount() {
                    this._migrate(this.state.queries, null)
                }
                render() {
                    return this.props.children(this.state.matches)
                }
                static getDerivedStateFromProps(e, t) {
                    if (r()(e.rules, t.rules)) return null;
                    const {
                        rules: i
                    } = e;
                    return o(i)
                }
                _migrate(e, t) {
                    null !== e && l(e, ((e, t) => {
                        t.removeListener(this._handleMediaChange)
                    })), null !== t && l(t, ((e, t) => {
                        t.addListener(this._handleMediaChange)
                    }))
                }
            }

            function o(e) {
                const t = l(e, ((e, t) => window.matchMedia(t)));
                return {
                    queries: t,
                    matches: l(t, ((e, t) => t.matches)),
                    rules: { ...e
                    }
                }
            }

            function l(e, t) {
                const i = {};
                for (const n in e) e.hasOwnProperty(n) && (i[n] = t(n, e[n]));
                return i
            }
        },
        995683: (e, t, i) => {
            "use strict";

            function n(e, t, i = {}) {
                return Object.assign({}, e, function(e, t, i = {}) {
                    const n = Object.assign({}, t);
                    for (const s of Object.keys(t)) {
                        const r = i[s] || s;
                        r in e && (n[s] = [e[r], t[s]].join(" "))
                    }
                    return n
                }(e, t, i))
            }
            i.d(t, {
                mergeThemes: () => n
            })
        },
        997228: e => {
            e.exports = {
                title: "title-ujIBirbo"
            }
        },
        821190: (e, t, i) => {
            "use strict";
            i.d(t, {
                ToolTitle: () => o
            });
            var n = i(50959),
                s = i(497754),
                r = i.n(s),
                a = i(997228);

            function o(e) {
                const {
                    className: t,
                    text: i,
                    id: s,
                    role: o,
                    ariaHidden: l
                } = e;
                return n.createElement("div", {
                    className: r()(a.title, t),
                    id: s,
                    role: o,
                    "aria-hidden": l
                }, i)
            }
        },
        748826: (e, t, i) => {
            "use strict";
            i.d(t, {
                FavoriteFundamentals: () => c
            });
            var n = i(62802),
                s = i(226722),
                r = i(869403),
                a = i.n(r);
            const o = "fundamentals.favorites";
            let l = null;
            class c {
                constructor() {
                    this._favorites = [], this._favoritesChanged = new(a()), s.TVXWindowEvents.on("FundFavoritesChanged", (e => {
                        const t = JSON.parse(e);
                        this._loadFromState(t || [])
                    })), n.onSync.subscribe(this, this._loadFavs), this._loadFavs()
                }
                isFav(e) {
                    return -1 !== this._findFavIndex(e)
                }
                toggleFavorite(e) {
                    this.isFav(e) ? this.removeFavorite(e) : this.addFavorite(e)
                }
                toggleFavoriteArray(e) {
                    const t = e.some((e => this.isFav(e)));
                    e.forEach((e => {
                        if (t) {
                            const t = this._findFavIndex(e); - 1 !== t && this._favorites.splice(t, 1)
                        } else this._favorites.push(e)
                    })), this._favoritesChanged.fire(), this._saveFavs()
                }
                addFavorite(e) {
                    this._favorites.push(e), this._favoritesChanged.fire(), this._saveFavs()
                }
                removeFavorite(e) {
                    const t = this._findFavIndex(e); - 1 !== t && (this._favorites.splice(t, 1), this._favoritesChanged.fire()), this._saveFavs()
                }
                favorites() {
                    return this._favorites
                }
                favoritesChanged() {
                    return this._favoritesChanged
                }
                static getInstance() {
                    return null === l && (l = new c), l
                }
                _loadFavs() {
                    const e = n.getJSON(o, []);
                    this._loadFromState(e)
                }
                _saveFavs() {
                    n.setJSON(o, this._favorites, {
                        forceFlush: !0
                    }), s.TVXWindowEvents.emit("FundFavoritesChanged", JSON.stringify(this._favorites))
                }
                _loadFromState(e) {
                    this._favorites = e, this._favoritesChanged.fire()
                }
                _findFavIndex(e) {
                    return this._favorites.indexOf(e)
                }
            }
        },
        431544: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" d="M3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm7-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm1 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/></svg>'
        },
        194913: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M16.37 6.33l-3.4 3.79c-.79.87-2.15.9-2.98.07L7.3 7.51a1.06 1.06 0 0 0-1.54.04l-3.4 3.78-.74-.66 3.4-3.79a2.06 2.06 0 0 1 2.98-.07l2.68 2.68c.43.42 1.13.4 1.54-.04l3.4-3.78.74.66z"/></svg>'
        },
        225492: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M11 11.8V4h1v5.76a3 3 0 1 1 0 4.48V15h-1v-2.8a3.03 3.03 0 0 1 0-.4Zm1 .36a2 2 0 1 0 0-.32v.32ZM2 14.47V4h1v9.97h4.01v1H2v-.5ZM8 15V7.99h1V15H8Zm1-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/></svg>'
        },
        394256: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.97 6.12l3.4-3.79-.74-.66-3.4 3.78c-.4.45-1.1.46-1.54.04L8.01 2.8c-.83-.84-2.2-.8-2.98.07l-3.4 3.79.74.66 3.4-3.78c.4-.45 1.1-.46 1.54-.04L9.99 6.2c.83.84 2.2.8 2.98-.07zM12 11l2.5-3 2.5 3h-2v4h-1v-4h-2zM8 9h1v4h2l-2.5 3L6 13h2V9z"/></svg>'
        },
        499084: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm3.87-12.15c.36.2.49.66.28 1.02l-4 7a.75.75 0 0 1-1.18.16l-3-3a.75.75 0 1 1 1.06-1.06l2.3 2.3 3.52-6.14a.75.75 0 0 1 1.02-.28Z"/></svg>'
        },
        527941: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM8 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 2c.49 0 1 .59 1 1v3.01c0 .42-.51.99-1 .99s-1-.57-1-.99V9c0-.41.51-1 1-1Z"/></svg>'
        },
        117105: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 21 21m0-21-21 21"/></svg>'
        },
        238822: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 11 11m0-11-11 11"/></svg>'
        },
        663346: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 9 9m0-9-9 9"/></svg>'
        },
        534983: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 7 7m0-7-7 7"/></svg>'
        },
        295694: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M17 22.5 6.85 12.35a.5.5 0 0 1 0-.7L17 1.5"/></svg>'
        },
        249498: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M12 16.5 4.85 9.35a.5.5 0 0 1 0-.7L12 1.5"/></svg>'
        },
        560176: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M9.5 12.5 3.9 7.37a.5.5 0 0 1 0-.74L9.5 1.5"/></svg>'
        },
        935369: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M8 10.5 3.85 6.35a.5.5 0 0 1 0-.7L8 1.5"/></svg>'
        },
        758478: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M7 8.5 3.85 5.35a.5.5 0 0 1 0-.7L7 1.5"/></svg>'
        },
        773063: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 22.5 6.85 12.35a.5.5 0 0 1 0-.7L17 1.5"/></svg>'
        },
        914127: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 16.5 4.85 9.35a.5.5 0 0 1 0-.7L12 1.5"/></svg>'
        },
        218073: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.5 12.5 3.9 7.37a.5.5 0 0 1 0-.74L9.5 1.5"/></svg>'
        },
        124097: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 10.5 3.85 6.35a.5.5 0 0 1 0-.7L8 1.5"/></svg>'
        },
        142576: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 8.5 3.85 5.35a.5.5 0 0 1 0-.7L7 1.5"/></svg>'
        },
        661055: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.7 9l4.65-4.65-.7-.7L9 8.29 4.35 3.65l-.7.7L8.29 9l-4.64 4.65.7.7L9 9.71l4.65 4.64.7-.7L9.71 9z"/></svg>'
        },
        440562: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M9 8.5H5.5a1 1 0 0 0-1 1V13c0 .28.22.5.5.5h1.5s2 0 2 2.5-2 2.5-2 2.5H5a.5.5 0 0 0-.5.5v3.5a1 1 0 0 0 1 1H9a.5.5 0 0 0 .5-.5v-1.5s0-2 2.5-2 2.5 2 2.5 2V23c0 .28.22.5.5.5h3.5a1 1 0 0 0 1-1V19c0-.28.22-.5.5-.5h1.5s2 0 2-2.5-2-2.5-2-2.5H20a.5.5 0 0 1-.5-.5V9.5a1 1 0 0 0-1-1H15a.5.5 0 0 1-.5-.5V6.5s0-2-2.5-2-2.5 2-2.5 2V8a.5.5 0 0 1-.5.5z"/></svg>'
        },
        568648: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentcolor" stroke-width="1.3" d="M12 9l5 5-5 5"/></svg>'
        },
        837364: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M.5 9l-.22-.45a.5.5 0 0 0 0 .9L.5 9zm17 0l.22.45a.5.5 0 0 0 0-.9L17.5 9zm-15.66.67l-.22.45.22-.45zM7 2H5.5v1H7V2zM3 4.5v1.15h1V4.5H3zM1.62 7.88l-1.34.67.44.9 1.35-.67-.45-.9zM.28 9.45l1.34.67.45-.9-1.35-.67-.44.9zM3 12.35v1.15h1v-1.15H3zM5.5 16H7v-1H5.5v1zM11 3h1.5V2H11v1zm3 1.5v1.15h1V4.5h-1zm1.93 4.28l1.35.67.44-.9-1.34-.67-.45.9zm1.35-.23l-1.35.67.45.9 1.34-.67-.44-.9zM14 12.35v1.15h1v-1.15h-1zM12.5 15H11v1h1.5v-1zm3.43-5.78A3.5 3.5 0 0 0 14 12.35h1c0-.94.54-1.8 1.38-2.23l-.45-.9zM14 5.65a3.5 3.5 0 0 0 1.93 3.13l.45-.9A2.5 2.5 0 0 1 15 5.65h-1zM12.5 3c.83 0 1.5.67 1.5 1.5h1A2.5 2.5 0 0 0 12.5 2v1zM3 13.5A2.5 2.5 0 0 0 5.5 16v-1A1.5 1.5 0 0 1 4 13.5H3zm-1.38-3.38A2.5 2.5 0 0 1 3 12.35h1a3.5 3.5 0 0 0-1.93-3.13l-.45.9zM3 5.65a2.5 2.5 0 0 1-1.38 2.23l.45.9A3.5 3.5 0 0 0 4 5.65H3zm11 7.85c0 .83-.67 1.5-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5h-1zM5.5 2A2.5 2.5 0 0 0 3 4.5h1C4 3.67 4.67 3 5.5 3V2z"/></svg>'
        },
        438063: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M4.5 13.5l4.59-4.59a2 2 0 0 1 2.82 0l3.18 3.18a2 2 0 0 0 2.82 0L22.5 7.5M4.5 22v-3m3 3v-6m3 6v-8m3 8v-6m3 6v-4m3 4v-6m3 6v-8"/></svg>'
        },
        366619: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120"><path fill="#B2B5BE" fill-rule="evenodd" d="M23 39a36 36 0 0 1 72 0v13.15l15.1 8.44 2.16 1.2-1.64 1.86-12.85 14.59 3.73 4.03L98.57 85 95 81.13V117H77v-12H67v9H50V95H40v22H23V81.28l-3.8 3.61-2.76-2.9 4.05-3.84-12.77-14.5-1.64-1.86 2.16-1.2L23 52.34V39Zm72 36.33 10.98-12.46L95 56.73v18.6ZM23 56.92v18.03L12.35 62.87 23 56.92ZM59 7a32 32 0 0 0-32 32v74h9V91h18v19h9v-9h18v12h10V39A32 32 0 0 0 59 7Zm-7 36a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm19 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>'
        },
        267562: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120"><path fill="#131722" fill-rule="evenodd" d="M23 39a36 36 0 0 1 72 0v13.15l15.1 8.44 2.16 1.2-1.64 1.86-12.85 14.59 3.73 4.03L98.57 85 95 81.13V117H77v-12H67v9H50V95H40v22H23V81.28l-3.8 3.61-2.76-2.9 4.05-3.84-12.77-14.5-1.64-1.86 2.16-1.2L23 52.34V39Zm72 36.33 10.98-12.46L95 56.73v18.6ZM23 56.92v18.03L12.35 62.87 23 56.92ZM59 7a32 32 0 0 0-32 32v74h9V91h18v19h9v-9h18v12h10V39A32 32 0 0 0 59 7Zm-7 36a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm19 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>'
        },
        448770: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M20.5 6.5h-13V22l6.5-5 6.5 5V6.5z"/></svg>'
        },
        2678: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 6a3 3 0 0 0-3 3v3h6V9a3 3 0 0 0-3-3zm4 6V9a4 4 0 0 0-8 0v3H8.5A2.5 2.5 0 0 0 6 14.5v8A2.5 2.5 0 0 0 8.5 25h11a2.5 2.5 0 0 0 2.5-2.5v-8a2.5 2.5 0 0 0-2.5-2.5H18zm-5 7a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2zm-6-4.5c0-.83.67-1.5 1.5-1.5h11c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 7 22.5v-8z"/></svg>'
        },
        638115: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7 5.5a2.5 2.5 0 0 1 5 0V7H7V5.5zM6 7V5.5a3.5 3.5 0 1 1 7 0V7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2zm8 2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9zm-3 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>'
        },
        126275: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4 3h6v3.5c0 .28.22.5.5.5H14v8H4V3zm7 .7L13.3 6H11V3.7zm4 11.8v-9a.5.5 0 0 0 0-.06v.06L10.5 2h-7a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5zM10.63 2.02zM6 7h2V6H6v1zm0 3h6V9H6v1zm0 3h6v-1H6v1z"/></svg>'
        },
        512702: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 121" width="120" height="121" fill="none"><g clip-path="url(#ayot3hdwg)"><path fill="#1E222D" d="M0 .62h120v120H0V.62z"/><path fill="#2A2E39" fill-rule="evenodd" clip-rule="evenodd" d="M87.34 37.2c11.46 19.26 11.88 40.14.95 46.65-10.93 6.5-29.08-3.82-40.54-23.08-11.46-19.25-11.89-40.13-.96-46.63 10.94-6.51 29.09 3.82 40.55 23.07zM70.7 106.65c-4.4-2.95-6.12-8.1-3.85-11.47 2.27-3.39 7.68-3.73 12.08-.77s6.12 8.1 3.85 11.48c-2.28 3.38-7.69 3.72-12.08.76z"/><rect width="86" height="72" stroke="#B2B5BE" stroke-width="1.5" rx="5" x="17" y="24.62"/><path stroke="#B2B5BE" stroke-width="1.5" d="M17 33.12h86"/><path stroke="#B2B5BE" stroke-linecap="round" stroke-width="1.5" d="M22 28.62h5"/><path fill="#B2B5BE" d="M33.83 56.87a.75.75 0 1 0 0-1.5v1.5zm-7.44 8.99l-.34-.67a.75.75 0 0 0 0 1.34l.34-.67zm7.44 10.48a.75.75 0 1 0 0-1.5v1.5zm-5.66-11.37l.33.67-.33-.67zm5.66-9.6h-1v1.5h1v-1.5zm-4.75 3.75v3.17h1.5v-3.17h-1.5zm-1.25 5.18l-1.78.89.68 1.34 1.77-.89-.67-1.34zm-1.78 2.23l1.78.89.67-1.34-1.77-.9-.68 1.35zm3.03 2.9v3.16h1.5v-3.16h-1.5zm3.75 6.91h1v-1.5h-1v1.5zm-3.75-3.75a3.75 3.75 0 0 0 3.75 3.75v-1.5c-1.25 0-2.25-1-2.25-2.25h-1.5zm-1.25-5.17a2.25 2.25 0 0 1 1.25 2.01h1.5c0-1.42-.8-2.72-2.08-3.35l-.67 1.34zm1.25-5.13c0 .85-.49 1.63-1.25 2l.67 1.35a3.75 3.75 0 0 0 2.08-3.35h-1.5zm3.75-6.92a3.75 3.75 0 0 0-3.75 3.75h1.5c0-1.24 1-2.25 2.25-2.25v-1.5zM86.6 56.87a.75.75 0 1 1 0-1.5v1.5zm7.44 8.99l.34-.67a.75.75 0 0 1 0 1.34l-.34-.67zM86.6 76.34a.75.75 0 1 1 0-1.5v1.5zm5.66-11.37l-.33.67.33-.67zm-5.66-9.6h1v1.5h-1v-1.5zm4.76 3.75v3.17h-1.5v-3.17h1.5zm1.24 5.18l1.78.89-.67 1.34-1.78-.89.67-1.34zm1.78 2.23l-1.78.89-.67-1.34 1.78-.9.67 1.35zm-3.02 2.9v3.16h-1.5v-3.16h1.5zm-3.75 6.91H86.6v-1.5h1v1.5zm3.75-3.75a3.75 3.75 0 0 1-3.75 3.75v-1.5c1.24 0 2.25-1 2.25-2.25h1.5zm1.24-5.17a2.25 2.25 0 0 0-1.24 2.01h-1.5c0-1.42.8-2.72 2.07-3.35l.67 1.34zm-1.24-5.13c0 .85.48 1.63 1.24 2l-.67 1.35a3.75 3.75 0 0 1-2.07-3.35h1.5zm-3.75-6.92a3.75 3.75 0 0 1 3.75 3.75h-1.5c0-1.24-1.01-2.25-2.25-2.25v-1.5z"/><path stroke="#B2B5BE" stroke-linecap="round" stroke-width="1.5" d="M41 60.62l6.45-7.16a4 4 0 0 1 5.5-.42l5.48 4.48a4 4 0 0 0 5.11-.04L80 43.62"/><path fill="#1848CC" fill-rule="evenodd" clip-rule="evenodd" d="M76 55.63a2 2 0 1 1 4 0v19a2 2 0 1 1-4 0v-19zm-5 3a2 2 0 0 0-2 2v14a2 2 0 1 0 4 0v-14a2 2 0 0 0-2-2zm-9 6a2 2 0 0 1 4 0v10a2 2 0 1 1-4 0v-10zm-5 1a2 2 0 0 0-2 2v7a2 2 0 1 0 4 0v-7a2 2 0 0 0-2-2zm-14 1a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0v-6a2 2 0 0 0-2-2zm7-6a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0v-12a2 2 0 0 0-2-2z"/></g><defs><clipPath id="ayot3hdwg"><path fill="#fff" d="M0 .62h120v120H0V.62z"/></clipPath></defs></svg>'
        },
        213354: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 121" width="120" height="121" fill="none"><g clip-path="url(#ahbjrznkx)"><path fill="#fff" d="M0 .62h120v120H0V.62z"/><path fill="#F0F3FA" fill-rule="evenodd" clip-rule="evenodd" d="M87.34 37.2c11.46 19.26 11.88 40.14.95 46.65-10.93 6.5-29.08-3.82-40.54-23.08-11.46-19.25-11.89-40.13-.96-46.63 10.94-6.51 29.09 3.82 40.55 23.07zM70.7 106.65c-4.4-2.95-6.12-8.1-3.85-11.47 2.27-3.39 7.68-3.73 12.08-.77s6.12 8.1 3.85 11.48c-2.28 3.38-7.69 3.72-12.08.76z"/><rect width="86" height="72" stroke="#1E222D" stroke-width="1.5" rx="5" x="17" y="24.62"/><path stroke="#1E222D" stroke-width="1.5" d="M17 33.12h86"/><path stroke="#1E222D" stroke-linecap="round" stroke-width="1.5" d="M22 28.62h5"/><path fill="#1E222D" d="M33.83 56.87a.75.75 0 1 0 0-1.5v1.5zm-7.44 8.99l-.34-.67a.75.75 0 0 0 0 1.34l.34-.67zm7.44 10.48a.75.75 0 1 0 0-1.5v1.5zm-5.66-11.37l.33.67-.33-.67zm5.66-9.6h-1v1.5h1v-1.5zm-4.75 3.75v3.17h1.5v-3.17h-1.5zm-1.25 5.18l-1.78.89.68 1.34 1.77-.89-.67-1.34zm-1.78 2.23l1.78.89.67-1.34-1.77-.9-.68 1.35zm3.03 2.9v3.16h1.5v-3.16h-1.5zm3.75 6.91h1v-1.5h-1v1.5zm-3.75-3.75a3.75 3.75 0 0 0 3.75 3.75v-1.5c-1.25 0-2.25-1-2.25-2.25h-1.5zm-1.25-5.17a2.25 2.25 0 0 1 1.25 2.01h1.5c0-1.42-.8-2.72-2.08-3.35l-.67 1.34zm1.25-5.13c0 .85-.49 1.63-1.25 2l.67 1.35a3.75 3.75 0 0 0 2.08-3.35h-1.5zm3.75-6.92a3.75 3.75 0 0 0-3.75 3.75h1.5c0-1.24 1-2.25 2.25-2.25v-1.5zM86.6 56.87a.75.75 0 1 1 0-1.5v1.5zm7.44 8.99l.34-.67a.75.75 0 0 1 0 1.34l-.34-.67zM86.6 76.34a.75.75 0 1 1 0-1.5v1.5zm5.66-11.37l-.33.67.33-.67zm-5.66-9.6h1v1.5h-1v-1.5zm4.76 3.75v3.17h-1.5v-3.17h1.5zm1.24 5.18l1.78.89-.67 1.34-1.78-.89.67-1.34zm1.78 2.23l-1.78.89-.67-1.34 1.78-.9.67 1.35zm-3.02 2.9v3.16h-1.5v-3.16h1.5zm-3.75 6.91H86.6v-1.5h1v1.5zm3.75-3.75a3.75 3.75 0 0 1-3.75 3.75v-1.5c1.24 0 2.25-1 2.25-2.25h1.5zm1.24-5.17a2.25 2.25 0 0 0-1.24 2.01h-1.5c0-1.42.8-2.72 2.07-3.35l.67 1.34zm-1.24-5.13c0 .85.48 1.63 1.24 2l-.67 1.35a3.75 3.75 0 0 1-2.07-3.35h1.5zm-3.75-6.92a3.75 3.75 0 0 1 3.75 3.75h-1.5c0-1.24-1.01-2.25-2.25-2.25v-1.5z"/><path stroke="#1E222D" stroke-linecap="round" stroke-width="1.5" d="M41 60.62l6.45-7.16a4 4 0 0 1 5.5-.42l5.48 4.48a4 4 0 0 0 5.11-.04L80 43.62"/><path fill="url(#bhbjrznkx)" fill-rule="evenodd" clip-rule="evenodd" d="M76 55.63a2 2 0 1 1 4 0v19a2 2 0 1 1-4 0v-19zm-5 3a2 2 0 0 0-2 2v14a2 2 0 1 0 4 0v-14a2 2 0 0 0-2-2zm-9 6a2 2 0 0 1 4 0v10a2 2 0 1 1-4 0v-10zm-5 1a2 2 0 0 0-2 2v7a2 2 0 1 0 4 0v-7a2 2 0 0 0-2-2zm-14 1a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0v-6a2 2 0 0 0-2-2zm7-6a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0v-12a2 2 0 0 0-2-2z"/></g><defs><linearGradient gradientUnits="userSpaceOnUse" x1="60.5" x2="60.5" y1="53.63" y2="76.63" id="bhbjrznkx"><stop stop-color="#2962FF"/><stop offset="1" stop-color="#2962FF"/></linearGradient><clipPath id="ahbjrznkx"><path fill="#fff" d="M0 .62h120v120H0V.62z"/></clipPath></defs></svg>'
        },
        969859: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path stroke="currentColor" d="M12.4 12.5a7 7 0 1 0-4.9 2 7 7 0 0 0 4.9-2zm0 0l5.101 5"/></svg>'
        },
        166538: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM6 7.5a3 3 0 1 1 6 0c0 .96-.6 1.48-1.17 1.98-.55.48-1.08.95-1.08 1.77h-1.5c0-1.37.7-1.9 1.33-2.38.49-.38.92-.71.92-1.37C10.5 6.67 9.82 6 9 6s-1.5.67-1.5 1.5H6Z"/></svg>'
        },
        600204: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M13.1 4.69a1 1 0 0 1 1.8 0l2.37 4.8 5.31.78a1 1 0 0 1 .55 1.7l-3.84 3.75.9 5.29a1 1 0 0 1-1.44 1.05L14 19.56l-4.75 2.5a1 1 0 0 1-1.45-1.05l.9-5.29-3.83-3.75a1 1 0 0 1 .55-1.7l5.3-.77 2.38-4.81zm.9.44l-2.5 5.05-.1.23-.27.04-5.57.8L9.6 15.2l.2.18-.05.26-.95 5.55 4.98-2.62.23-.12.23.12 4.98 2.62-.95-5.55-.04-.26.19-.18 4.03-3.93-5.57-.81-.26-.04-.12-.23L14 5.13z"/></svg>'
        },
        543081: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11 10.5c0-1.02.27-1.89.8-2.5.54-.6 1.39-1 2.7-1 1.31 0 2.16.4 2.7 1 .53.61.8 1.48.8 2.5s-.27 1.89-.8 2.5c-.54.6-1.39 1-2.7 1-1.31 0-2.16-.4-2.7-1-.53-.61-.8-1.48-.8-2.5zM14.5 6c-1.53 0-2.68.49-3.44 1.34A4.67 4.67 0 0 0 10 10.5c0 1.19.31 2.32 1.06 3.16.76.85 1.91 1.34 3.44 1.34s2.68-.49 3.44-1.34A4.67 4.67 0 0 0 19 10.5c0-1.19-.31-2.32-1.06-3.16C17.18 6.49 16.03 6 14.5 6zM7 23c0-2.4 1.83-5 5-5h5c3.17 0 5 2.6 5 5h1c0-2.85-2.17-6-6-6h-5c-3.83 0-6 3.15-6 6h1z"/></svg>'
        },
        519624: (e, t, i) => {
            "use strict";

            function n() {
                return n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                    }
                    return e
                }, n.apply(this, arguments)
            }
            i.d(t, {
                default: () => n
            })
        },
        676006: e => {
            "use strict";
            e.exports = JSON.parse('{"ACCD@tv-basicstudies":43000501770,"AROON@tv-basicstudies":43000501801,"ATR@tv-basicstudies":43000501823,"AwesomeOscillator@tv-basicstudies":43000501826,"BB@tv-basicstudies":43000501840,"BollingerBandsR@tv-basicstudies":43000501971,"BollingerBandsWidth@tv-basicstudies":43000501972,"CMF@tv-basicstudies":43000501974,"ChaikinOscillator@tv-basicstudies":43000501979,"ChoppinessIndex@tv-basicstudies":43000501980,"WilliamR@tv-basicstudies":43000501985,"CCI@tv-basicstudies":43000502001,"CRSI@tv-basicstudies":43000502017,"STD;VWAP":43000502018,"STD;Correlation_Coeff":43000502022,"DetrendedPriceOscillator@tv-basicstudies":43000502246,"DM@tv-basicstudies":43000502250,"DONCH@tv-basicstudies":43000502253,"EaseOfMovement@tv-basicstudies":43000502256,"EFI@tv-basicstudies":43000502259,"ENV@tv-basicstudies":43000502260,"KLTNR@tv-basicstudies":43000502266,"UltimateOsc@tv-basicstudies":43000502328,"KST@tv-basicstudies":43000502329,"Trix@tv-basicstudies":43000502331,"Stochastic@tv-basicstudies":43000502332,"StochasticRSI@tv-basicstudies":43000502333,"RSI@tv-basicstudies":43000502338,"ROC@tv-basicstudies":43000502343,"STD;MACD":43000502344,"STD;Price_Volume_Trend":43000502345,"PriceOsc@tv-basicstudies":43000502346,"MF@tv-basicstudies":43000502348,"MASimple@tv-basicstudies":43000502589,"STD;Multi-Time%Period%Charts":43000502591,"OBV@tv-basicstudies":43000502593,"PSAR@tv-basicstudies":43000502597,"PivotPointsStandard@tv-basicstudies":43000521824,"STD;Pivot%1Points%1Standard":43000521824,"VbPFixed@tv-volumebyprice":43000502040,"VbPVisible@tv-volumebyprice":43000502040,"VbPSessions@tv-volumebyprice":43000502040,"VbPSessionsRoughDetailed@tv-volumebyprice":43000557450,"VbPPeriodic@tv-volumebyprice":43000502040,"STD;Accumulation_Distribution":43000501770,"STD;Aroon":43000501801,"STD;Average_True_Range":43000501823,"STD;Awesome_Oscillator":43000501826,"STD;Bollinger_Bands":43000501840,"STD;Bollinger_Bands_B":43000501971,"STD;Bollinger_Bands_Width":43000501972,"STD;Chaikin_Money_Flow":43000501974,"STD;Chaikin_Oscillator":43000501979,"STD;Choppiness_Index":43000501980,"STD;Willams_R":43000501985,"STD;CCI":43000502001,"STD;Connors_RSI":43000502017,"STD;DPO":43000502246,"STD;DMI":43000502250,"STD;Donchian_Channels":43000502253,"STD;EOM":43000502256,"STD;EFI":43000502259,"STD;ENV":43000502260,"STD;Keltner_Channels":43000502266,"STD;Ultimate_Oscillator":43000502328,"STD;TRIX":43000502331,"STD;Stochastic":43000502332,"STD;Stochastic_RSI":43000502333,"STD;RSI":43000502338,"STD;ROC":43000502343,"STD;Price_Oscillator":43000502346,"STD;Money_Flow":43000502348,"STD;SMA":43000502589,"STD;On_Balance_Volume":43000502593,"STD;PSAR":43000502597,"STD;Candlestick%1Pattern%1Bearish%1Abandoned%1Baby":43000583765,"STD;Candlestick%1Pattern%1Bullish%1Abandoned%1Baby":43000583766,"STD;Candlestick%1Pattern%1Doji":43000583767,"STD;Candlestick%1Pattern%1Bullish%1Dragonfly%1Doji":43000583768,"STD;Candlestick%1Pattern%1Bearish%1Engulfing":43000583769,"STD;Candlestick%1Pattern%1Bullish%1Engulfing":43000583771,"STD;Candlestick%1Pattern%1Bearish%1Evening%1Star":43000583772,"STD;Candlestick%1Pattern%1Bearish%1Gravestone%1Doji":43000583773,"STD;Candlestick%1Pattern%1Bullish%1Hammer":43000583775,"STD;Candlestick%1Pattern%1Bearish%1Hanging%1Man":43000583776,"STD;Candlestick%1Pattern%1Bearish%1Harami":43000583777,"STD;Candlestick%1Pattern%1Bullish%1Harami":43000583778,"STD;Candlestick%1Pattern%1Bullish%1Inverted%1Hammer":43000583780,"STD;Candlestick%1Pattern%1Bearish%1Kicking":43000583781,"STD;Candlestick%1Pattern%1Bullish%1Kicking":43000583782,"STD;Candlestick%1Pattern%1Bullish%1Long%1Lower%1Shadow":43000583783,"STD;Candlestick%1Pattern%1Bearish%1Long%1Upper%1Shadow":43000583784,"STD;Candlestick%1Pattern%1Bearish%1Marubozu%1Black":43000583785,"STD;Candlestick%1Pattern%1Bullish%1Marubozu%1White":43000583786,"STD;Candlestick%1Pattern%1Bullish%1Morning%1Star":43000583787,"STD;Candlestick%1Pattern%1Bearish%1Shooting%1Star":43000583789,"STD;Candlestick%1Pattern%1Spinning%1Top%1Black":43000583791,"STD;Candlestick%1Pattern%1Spinning%1Top%1White":43000583790,"STD;Candlestick%1Pattern%1Bearish%1Three%1Black%1Crows":43000583792,"STD;Candlestick%1Pattern%1Bullish%1Three%1White%1Soldiers":43000583793,"STD;Candlestick%1Pattern%1Bearish%1Tri-Star":43000583794,"STD;Candlestick%1Pattern%1Bullish%1Tri-Star":43000583796,"STD;Auto%1Fib%1Retracement%1":43000585089,"STD;Advance%1Decline%1Line":43000589092,"STD;Advance%1Decline%1Ratio":43000589093,"STD;Average%1Directional%1Index":43000589099,"STD;Balance%1of%1Power":43000589100,"STD;Bollinger%1Bands%1Strategy":43000589104,"STD;Chande%1Kroll%1Stop":43000589105,"STD;Chande_Momentum_Oscillator":43000589109,"STD;Chop%1Zone":43000589111,"STD;Coppock%1Curve":43000589114,"STD;Cumulative%1Volume%1Index":43000589126,"STD;Divergence%1Indicator":43000589127,"STD;DividendYield":43000589129,"STD;DEMA":43000589132,"STD;Fisher_Transform":43000589141,"STD;Historical_Volatility":43000589145,"STD;Hull%1MA":43000589149,"STD;Ichimoku%1Cloud":43000589152,"STD;Klinger%1Oscillator":43000589157,"STD;Mass%1Index":43000589169,"STD;McGinley%1Dynamic":43000589175,"STD;Momentum":43000589187,"STD;EMA":43000592270,"STD;Net%1Volume":43000589192,"PivotPointsHighLow@tv-basicstudies":43000589195,"STD;Pivot%1Points%1High%1Low":43000589195,"STD;Relative_Vigor_Index":43000591593,"STD;Rob%1Booker%1ADX%1Breakout%1Strategy":43000591333,"BookerKnoxvilleDivergence@tv-basicstudies":43000591336,"STD;Smoothed%1Moving%1Average":43000591343,"STD;Stochastic%1Slow%1Strategy":43000592285,"STD;TEMA":43000591346,"STD;True%1Strength%1Indicator":43000592290,"Volume@tv-basicstudies":43000591617,"STD;Volume%1Oscillator":43000591350,"STD;Vortex%1Indicator":43000591352,"STD;VWMA":43000592293,"STD;Williams_Alligator":43000592305,"STD;Whilliams_Fractals":43000591663,"ZigZag@tv-basicstudies":43000591664,"STD;Zig_Zag":43000591664,"STD;InSide%1Bar%1Strategy":43000591665,"STD;Candlestick%1Pattern%1Bearish%1Dark%1Cloud%1Cover":43000592563,"STD;Candlestick%1Pattern%1Bearish%1Doji%1Star":43000592727,"STD;Candlestick%1Pattern%1Bullish%1Doji%1Star":43000592726,"STD;Candlestick%1Pattern%1Bearish%1Downside%1Tasuki%1Gap":43000592723,"STD;Candlestick%1Pattern%1Bearish%1Evening%1Doji%1Star":43000592705,"STD;Candlestick%1Pattern%1Bearish%1Falling%1Three%1Methods":43000592712,"STD;Candlestick%1Pattern%1Bearish%1Falling%1Window":43000592713,"STD;Candlestick%1Pattern%1Bearish%1Harami%1Cross":43000592707,"STD;Candlestick%1Pattern%1Bullish%1Harami%1Cross":43000592708,"STD;Candlestick%1Pattern%1Bullish%1Morning%1Doji%1Star":43000592704,"STD;Candlestick%1Pattern%1Bearish%1On%1Neck":43000592722,"STD;Candlestick%1Pattern%1Bullish%1Piercing":43000592558,"STD;Candlestick%1Pattern%1Bullish%1Rising%1Three%1Methods":43000592711,"STD;Candlestick%1Pattern%1Bullish%1Rising%1Window":43000592721,"STD;Candlestick%1Pattern%1Bullish%1Tweezer%1Bottom":43000592709,"STD;Candlestick%1Pattern%1Bearish%1Tweezer%1Top":43000592710,"STD;Candlestick%1Pattern%1Bullish%1Upside%1Tasuki%1Gap":43000592725,"STD;Auto%1Fib%1Extension%1":43000612397,"STD;Technical%1Ratings":43000614331,"STD;Technical%1Ratings%1Strategy":43000628415,"STD;Arnaud%1Legoux%1Moving%1Average":43000594683,"STD;Bars%1Up%1Dn%1Strategy":43000599823,"STD;Bollinger%1Band%1Directed%1Strategy":43000599826,"STD;Channel%1BreakOut%1Strategy":43000599828,"STD;Consecutive%1Ups%1Downs%1Strategy":43000599836,"STD;Greedy%1Strategy":43000599876,"STD;Know_Sure_Thing":43000502329,"STD;Least%1Squares%1Moving%1Average":43000599877,"STD;MA%1Cross":43000599879,"STD;Momentum%1Strategy":43000599883,"STD;Moon%1Phases":43000599884,"STD;WMA":43000594680,"STD;MovingAvg%1Cross%1Strategy":43000599885,"STD;MovingAvg%1Cross2%1Strategy":43000599886,"STD;OutSide%1Bar%1Strategy":43000599887,"STD;Pivot%1Extension%1Strategy":43000599888,"STD;Pivot%1Reversal%1Strategy":43000594526,"STD;Price%1Channel%1Strategy":43000601862,"STD;Relative_Volatility_Index":43000594684,"BookerIntradayPivots@tv-basicstudies":43000594677,"BookerMissedPivots@tv-basicstudies":43000594678,"BookerReversal@tv-basicstudies":43000599840,"STD;Rob%1Booker%1Ghost%1Pivots%1v2":43000594679,"STD;Supertrend":43000634738,"STD;Volatility_Stop":43000594676,"STD;Volty%1Expan%1Close%1Strategy":43000599890,"STD;Woodies%1CCI":43000594673,"STD;Median":43000644897,"STD;MA%Ribbon":43000644913,"STD;Advance_Decline_Ratio_Bars":43000644914,"STD;Keltner%1Channel%1Strategy":43000644929,"STD;Linear_Regression":43000644936,"STD;MACD%1Strategy":43000644943,"STD;Parabolic%1SAR%1Strategy":43000645065,"STD;RSI%1Strategy":43000645066,"STD;Supertrend%Strategy":43000645068,"VWAPAA@tv-basicstudies":43000652199,"STD;Auto%1Pitchfork":43000657911,"STD;UP_DOWN_Volume":43000672561,"STD;24h%Volume":43000668584,"STD;Gaps":43000675999,"STD;Visible%1Average%1Price":43000678766,"VbPAutoAnchored@tv-volumebyprice":43000502040,"STD;Time%1Weighted%1Average%1Price":43000692939,"DoubleTopCP@tv-chartpatterns":43000653211,"DoubleBottomCP@tv-chartpatterns":43000690659,"TripleTopCP@tv-chartpatterns":43000653218,"TripleBottomCP@tv-chartpatterns":43000690660,"HeadAndShouldersCP@tv-chartpatterns":43000653213,"HeadAndShouldersInverseCP@tv-chartpatterns":43000690666,"STD;Average%Day%Range":43000695003,"STD;SMI_Ergodic_Indicator_Oscillator":43000594669,"STD;SMI_Ergodic_Oscillator":43000594671}')
        }
    }
]);
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [43898, 91622, 59255, 90890, 28557, 86918, 9796, 35608], {
        159255: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => T
            });
            var r = function() {
                    if ("undefined" != typeof Map) return Map;

                    function t(t, e) {
                        var n = -1;
                        return t.some((function(t, r) {
                            return t[0] === e && (n = r, !0)
                        })), n
                    }
                    return function() {
                        function e() {
                            this.__entries__ = []
                        }
                        return Object.defineProperty(e.prototype, "size", {
                            get: function() {
                                return this.__entries__.length
                            },
                            enumerable: !0,
                            configurable: !0
                        }), e.prototype.get = function(e) {
                            var n = t(this.__entries__, e),
                                r = this.__entries__[n];
                            return r && r[1]
                        }, e.prototype.set = function(e, n) {
                            var r = t(this.__entries__, e);
                            ~r ? this.__entries__[r][1] = n : this.__entries__.push([e, n])
                        }, e.prototype.delete = function(e) {
                            var n = this.__entries__,
                                r = t(n, e);
                            ~r && n.splice(r, 1)
                        }, e.prototype.has = function(e) {
                            return !!~t(this.__entries__, e)
                        }, e.prototype.clear = function() {
                            this.__entries__.splice(0)
                        }, e.prototype.forEach = function(t, e) {
                            void 0 === e && (e = null);
                            for (var n = 0, r = this.__entries__; n < r.length; n++) {
                                var o = r[n];
                                t.call(e, o[1], o[0])
                            }
                        }, e
                    }()
                }(),
                o = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                i = void 0 !== n.g && n.g.Math === Math ? n.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                s = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(i) : function(t) {
                    return setTimeout((function() {
                        return t(Date.now())
                    }), 1e3 / 60)
                };
            var a = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                h = "undefined" != typeof MutationObserver,
                c = function() {
                    function t() {
                        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, e) {
                            var n = !1,
                                r = !1,
                                o = 0;

                            function i() {
                                n && (n = !1, t()), r && h()
                            }

                            function a() {
                                s(i)
                            }

                            function h() {
                                var t = Date.now();
                                if (n) {
                                    if (t - o < 2) return;
                                    r = !0
                                } else n = !0, r = !1, setTimeout(a, e);
                                o = t
                            }
                            return h
                        }(this.refresh.bind(this), 20)
                    }
                    return t.prototype.addObserver = function(t) {
                        ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
                    }, t.prototype.removeObserver = function(t) {
                        var e = this.observers_,
                            n = e.indexOf(t);
                        ~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_()
                    }, t.prototype.refresh = function() {
                        this.updateObservers_() && this.refresh()
                    }, t.prototype.updateObservers_ = function() {
                        var t = this.observers_.filter((function(t) {
                            return t.gatherActive(), t.hasActive()
                        }));
                        return t.forEach((function(t) {
                            return t.broadcastActive()
                        })), t.length > 0
                    }, t.prototype.connect_ = function() {
                        o && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), h ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                    }, t.prototype.disconnect_ = function() {
                        o && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_),
                            window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                    }, t.prototype.onTransitionEnd_ = function(t) {
                        var e = t.propertyName,
                            n = void 0 === e ? "" : e;
                        a.some((function(t) {
                            return !!~n.indexOf(t)
                        })) && this.refresh()
                    }, t.getInstance = function() {
                        return this.instance_ || (this.instance_ = new t), this.instance_
                    }, t.instance_ = null, t
                }(),
                u = function(t, e) {
                    for (var n = 0, r = Object.keys(e); n < r.length; n++) {
                        var o = r[n];
                        Object.defineProperty(t, o, {
                            value: e[o],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return t
                },
                d = function(t) {
                    return t && t.ownerDocument && t.ownerDocument.defaultView || i
                },
                l = b(0, 0, 0, 0);

            function f(t) {
                return parseFloat(t) || 0
            }

            function p(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                return e.reduce((function(e, n) {
                    return e + f(t["border-" + n + "-width"])
                }), 0)
            }

            function v(t) {
                var e = t.clientWidth,
                    n = t.clientHeight;
                if (!e && !n) return l;
                var r = d(t).getComputedStyle(t),
                    o = function(t) {
                        for (var e = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                            var o = r[n],
                                i = t["padding-" + o];
                            e[o] = f(i)
                        }
                        return e
                    }(r),
                    i = o.left + o.right,
                    s = o.top + o.bottom,
                    a = f(r.width),
                    h = f(r.height);
                if ("border-box" === r.boxSizing && (Math.round(a + i) !== e && (a -= p(r, "left", "right") + i), Math.round(h + s) !== n && (h -= p(r, "top", "bottom") + s)), ! function(t) {
                        return t === d(t).document.documentElement
                    }(t)) {
                    var c = Math.round(a + i) - e,
                        u = Math.round(h + s) - n;
                    1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(u) && (h -= u)
                }
                return b(o.left, o.top, a, h)
            }
            var g = "undefined" != typeof SVGGraphicsElement ? function(t) {
                return t instanceof d(t).SVGGraphicsElement
            } : function(t) {
                return t instanceof d(t).SVGElement && "function" == typeof t.getBBox
            };

            function m(t) {
                return o ? g(t) ? function(t) {
                    var e = t.getBBox();
                    return b(0, 0, e.width, e.height)
                }(t) : v(t) : l
            }

            function b(t, e, n, r) {
                return {
                    x: t,
                    y: e,
                    width: n,
                    height: r
                }
            }
            var y = function() {
                    function t(t) {
                        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = b(0, 0, 0, 0), this.target = t
                    }
                    return t.prototype.isActive = function() {
                        var t = m(this.target);
                        return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
                    }, t.prototype.broadcastRect = function() {
                        var t = this.contentRect_;
                        return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
                    }, t
                }(),
                _ = function(t, e) {
                    var n, r, o, i, s, a, h, c = (r = (n = e).x, o = n.y, i = n.width, s = n.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, h = Object.create(a.prototype), u(h, {
                        x: r,
                        y: o,
                        width: i,
                        height: s,
                        top: o,
                        right: r + i,
                        bottom: s + o,
                        left: r
                    }), h);
                    u(this, {
                        target: t,
                        contentRect: c
                    })
                },
                w = function() {
                    function t(t, e, n) {
                        if (this.activeObservations_ = [], this.observations_ = new r, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
                        this.callback_ = t, this.controller_ = e, this.callbackCtx_ = n
                    }
                    return t.prototype.observe = function(t) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof d(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var e = this.observations_;
                            e.has(t) || (e.set(t, new y(t)), this.controller_.addObserver(this), this.controller_.refresh())
                        }
                    }, t.prototype.unobserve = function(t) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof d(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var e = this.observations_;
                            e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
                        }
                    }, t.prototype.disconnect = function() {
                        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                    }, t.prototype.gatherActive = function() {
                        var t = this;
                        this.clearActive(), this.observations_.forEach((function(e) {
                            e.isActive() && t.activeObservations_.push(e)
                        }))
                    }, t.prototype.broadcastActive = function() {
                        if (this.hasActive()) {
                            var t = this.callbackCtx_,
                                e = this.activeObservations_.map((function(t) {
                                    return new _(t.target, t.broadcastRect())
                                }));
                            this.callback_.call(t, e, t), this.clearActive()
                        }
                    }, t.prototype.clearActive = function() {
                        this.activeObservations_.splice(0)
                    }, t.prototype.hasActive = function() {
                        return this.activeObservations_.length > 0
                    }, t
                }(),
                E = "undefined" != typeof WeakMap ? new WeakMap : new r,
                O = function t(e) {
                    if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    var n = c.getInstance(),
                        r = new w(e, n, this);
                    E.set(this, r)
                };
            ["observe", "unobserve", "disconnect"].forEach((function(t) {
                O.prototype[t] = function() {
                    var e;
                    return (e = E.get(this))[t].apply(e, arguments)
                }
            }));
            const T = void 0 !== i.ResizeObserver ? i.ResizeObserver : O
        },
        305797: () => {
            ! function() {
                "use strict";
                if ("object" == typeof window)
                    if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                        get: function() {
                            return this.intersectionRatio > 0
                        }
                    });
                    else {
                        var t = window.document,
                            e = [];
                        r.prototype.THROTTLE_TIMEOUT = 100, r.prototype.POLL_INTERVAL = null, r.prototype.USE_MUTATION_OBSERVER = !0, r.prototype.observe = function(t) {
                            if (!this._observationTargets.some((function(e) {
                                    return e.element == t
                                }))) {
                                if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
                                this._registerInstance(), this._observationTargets.push({
                                    element: t,
                                    entry: null
                                }), this._monitorIntersections(), this._checkForIntersections()
                            }
                        }, r.prototype.unobserve = function(t) {
                            this._observationTargets = this._observationTargets.filter((function(e) {
                                return e.element != t
                            })), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
                        }, r.prototype.disconnect = function() {
                            this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
                        }, r.prototype.takeRecords = function() {
                            var t = this._queuedEntries.slice();
                            return this._queuedEntries = [], t
                        }, r.prototype._initThresholds = function(t) {
                            var e = t || [0];
                            return Array.isArray(e) || (e = [e]), e.sort().filter((function(t, e, n) {
                                if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                                return t !== n[e - 1]
                            }))
                        }, r.prototype._parseRootMargin = function(t) {
                            var e = (t || "0px").split(/\s+/).map((function(t) {
                                var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                                if (!e) throw new Error("rootMargin must be specified in pixels or percent");
                                return {
                                    value: parseFloat(e[1]),
                                    unit: e[2]
                                }
                            }));
                            return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
                        }, r.prototype._monitorIntersections = function() {
                            this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(window, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in window && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
                                attributes: !0,
                                childList: !0,
                                characterData: !0,
                                subtree: !0
                            }))))
                        }, r.prototype._unmonitorIntersections = function() {
                            this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(window, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
                        }, r.prototype._checkForIntersections = function() {
                            var t = this._rootIsInDom(),
                                e = t ? this._getRootRect() : {
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    width: 0,
                                    height: 0
                                };
                            this._observationTargets.forEach((function(r) {
                                var o = r.element,
                                    i = s(o),
                                    a = this._rootContainsTarget(o),
                                    h = r.entry,
                                    c = t && a && this._computeTargetAndRootIntersection(o, e),
                                    u = r.entry = new n({
                                        time: window.performance && performance.now && performance.now(),
                                        target: o,
                                        boundingClientRect: i,
                                        rootBounds: e,
                                        intersectionRect: c
                                    });
                                h ? t && a ? this._hasCrossedThreshold(h, u) && this._queuedEntries.push(u) : h && h.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
                            }), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                        }, r.prototype._computeTargetAndRootIntersection = function(e, n) {
                            if ("none" != window.getComputedStyle(e).display) {
                                for (var r, o, i, a, c, u, d, l, f = s(e), p = h(e), v = !1; !v;) {
                                    var g = null,
                                        m = 1 == p.nodeType ? window.getComputedStyle(p) : {};
                                    if ("none" == m.display) return;
                                    if (p == this.root || p == t ? (v = !0, g = n) : p != t.body && p != t.documentElement && "visible" != m.overflow && (g = s(p)), g && (r = g, o = f, i = void 0, a = void 0, c = void 0, u = void 0, d = void 0, l = void 0, i = Math.max(r.top, o.top), a = Math.min(r.bottom, o.bottom), c = Math.max(r.left, o.left), u = Math.min(r.right, o.right), l = a - i, !(f = (d = u - c) >= 0 && l >= 0 && {
                                            top: i,
                                            bottom: a,
                                            left: c,
                                            right: u,
                                            width: d,
                                            height: l
                                        }))) break;
                                    p = h(p)
                                }
                                return f
                            }
                        }, r.prototype._getRootRect = function() {
                            var e;
                            if (this.root) e = s(this.root);
                            else {
                                var n = t.documentElement,
                                    r = t.body;
                                e = {
                                    top: 0,
                                    left: 0,
                                    right: n.clientWidth || r.clientWidth,
                                    width: n.clientWidth || r.clientWidth,
                                    bottom: n.clientHeight || r.clientHeight,
                                    height: n.clientHeight || r.clientHeight
                                }
                            }
                            return this._expandRectByRootMargin(e)
                        }, r.prototype._expandRectByRootMargin = function(t) {
                            var e = this._rootMarginValues.map((function(e, n) {
                                    return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100
                                })),
                                n = {
                                    top: t.top - e[0],
                                    right: t.right + e[1],
                                    bottom: t.bottom + e[2],
                                    left: t.left - e[3]
                                };
                            return n.width = n.right - n.left, n.height = n.bottom - n.top, n
                        }, r.prototype._hasCrossedThreshold = function(t, e) {
                            var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                                r = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                            if (n !== r)
                                for (var o = 0; o < this.thresholds.length; o++) {
                                    var i = this.thresholds[o];
                                    if (i == n || i == r || i < n != i < r) return !0
                                }
                        }, r.prototype._rootIsInDom = function() {
                            return !this.root || a(t, this.root)
                        }, r.prototype._rootContainsTarget = function(e) {
                            return a(this.root || t, e)
                        }, r.prototype._registerInstance = function() {
                            e.indexOf(this) < 0 && e.push(this)
                        }, r.prototype._unregisterInstance = function() {
                            var t = e.indexOf(this); - 1 != t && e.splice(t, 1)
                        }, window.IntersectionObserver = r, window.IntersectionObserverEntry = n
                    }
                function n(t) {
                    this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }, this.isIntersecting = !!t.intersectionRect;
                    var e = this.boundingClientRect,
                        n = e.width * e.height,
                        r = this.intersectionRect,
                        o = r.width * r.height;
                    this.intersectionRatio = n ? Number((o / n).toFixed(4)) : this.isIntersecting ? 1 : 0
                }

                function r(t, e) {
                    var n, r, o, i = e || {};
                    if ("function" != typeof t) throw new Error("callback must be a function");
                    if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
                    this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, o = null, function() {
                        o || (o = setTimeout((function() {
                            n(), o = null
                        }), r))
                    }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map((function(t) {
                        return t.value + t.unit
                    })).join(" ")
                }

                function o(t, e, n, r) {
                    "function" == typeof t.addEventListener ? t.addEventListener(e, n, r || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
                }

                function i(t, e, n, r) {
                    "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, r || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
                }

                function s(t) {
                    var e;
                    try {
                        e = t.getBoundingClientRect()
                    } catch (t) {}
                    return e ? (e.width && e.height || (e = {
                        top: e.top,
                        right: e.right,
                        bottom: e.bottom,
                        left: e.left,
                        width: e.right - e.left,
                        height: e.bottom - e.top
                    }), e) : {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }
                }

                function a(t, e) {
                    for (var n = e; n;) {
                        if (n == t) return !0;
                        n = h(n)
                    }
                    return !1
                }

                function h(t) {
                    var e = t.parentNode;
                    return e && 11 == e.nodeType && e.host ? e.host : e && e.assignedSlot ? e.assignedSlot.parentNode : e
                }
            }()
        },
        39654: (t, e, n) => {
            "use strict";
            n.d(e, {
                getIsoLanguageCodeFromLanguage: () => o
            });
            const r = {
                ar_AE: "ar",
                br: "pt",
                de_DE: "de",
                ca_ES: "ca",
                he_IL: "he",
                id_ID: "id",
                in: "en",
                kr: "ko",
                ms_MY: "ms",
                sv_SE: "sv",
                th_TH: "th",
                uk: "en",
                vi_VN: "vi",
                zh_CN: "zh-Hans",
                zh_TW: "zh-Hant",
                zh: "zh-Hans"
            };

            function o(t) {
                return r[t] || t
            }
        },
        906132: (t, e, n) => {
            "use strict";
            var r = n(522134);

            function o() {}

            function i() {}
            i.resetWarningCache = o, t.exports = function() {
                function t(t, e, n, o, i, s) {
                    if (s !== r) {
                        var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation", a
                    }
                }

                function e() {
                    return t
                }
                t.isRequired = t;
                var n = {
                    array: t,
                    bool: t,
                    func: t,
                    number: t,
                    object: t,
                    string: t,
                    symbol: t,
                    any: t,
                    arrayOf: e,
                    element: t,
                    elementType: t,
                    instanceOf: e,
                    node: t,
                    objectOf: e,
                    oneOf: e,
                    oneOfType: e,
                    shape: e,
                    exact: e,
                    checkPropTypes: i,
                    resetWarningCache: o
                };
                return n.PropTypes = n, n
            }
        },
        719036: (t, e, n) => {
            t.exports = n(906132)()
        },
        522134: t => {
            "use strict";
            t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        457825: (t, e, n) => {
            "use strict";
            var r = n(691622).compose;
            e.composeWithDevTools = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
                if (0 !== arguments.length) return "object" == typeof arguments[0] ? r : r.apply(null, arguments)
            }, "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__
        },
        691622: (t, e, n) => {
            "use strict";

            function r(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function o(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(n), !0).forEach((function(e) {
                        r(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function s(t) {
                return "Minified Redux error #" + t + "; visit https://redux.js.org/Errors?code=" + t + " for the full message or use the non-minified dev environment for full errors. "
            }
            n.d(e, {
                applyMiddleware: () => g,
                bindActionCreators: () => p,
                combineReducers: () => l,
                compose: () => v,
                createStore: () => d
            });
            var a = "function" == typeof Symbol && Symbol.observable || "@@observable",
                h = function() {
                    return Math.random().toString(36).substring(7).split("").join(".")
                },
                c = {
                    INIT: "@@redux/INIT" + h(),
                    REPLACE: "@@redux/REPLACE" + h(),
                    PROBE_UNKNOWN_ACTION: function() {
                        return "@@redux/PROBE_UNKNOWN_ACTION" + h()
                    }
                };

            function u(t) {
                if ("object" != typeof t || null === t) return !1;
                for (var e = t; null !== Object.getPrototypeOf(e);) e = Object.getPrototypeOf(e);
                return Object.getPrototypeOf(t) === e
            }

            function d(t, e, n) {
                var r;
                if ("function" == typeof e && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw new Error(s(0));
                if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
                    if ("function" != typeof n) throw new Error(s(1));
                    return n(d)(t, e)
                }
                if ("function" != typeof t) throw new Error(s(2));
                var o = t,
                    i = e,
                    h = [],
                    l = h,
                    f = !1;

                function p() {
                    l === h && (l = h.slice())
                }

                function v() {
                    if (f) throw new Error(s(3));
                    return i
                }

                function g(t) {
                    if ("function" != typeof t) throw new Error(s(4));
                    if (f) throw new Error(s(5));
                    var e = !0;
                    return p(), l.push(t),
                        function() {
                            if (e) {
                                if (f) throw new Error(s(6));
                                e = !1, p();
                                var n = l.indexOf(t);
                                l.splice(n, 1), h = null
                            }
                        }
                }

                function m(t) {
                    if (!u(t)) throw new Error(s(7));
                    if (void 0 === t.type) throw new Error(s(8));
                    if (f) throw new Error(s(9));
                    try {
                        f = !0, i = o(i, t)
                    } finally {
                        f = !1
                    }
                    for (var e = h = l, n = 0; n < e.length; n++) {
                        (0, e[n])()
                    }
                    return t
                }

                function b(t) {
                    if ("function" != typeof t) throw new Error(s(10));
                    o = t, m({
                        type: c.REPLACE
                    })
                }

                function y() {
                    var t, e = g;
                    return (t = {
                        subscribe: function(t) {
                            if ("object" != typeof t || null === t) throw new Error(s(11));

                            function n() {
                                t.next && t.next(v())
                            }
                            return n(), {
                                unsubscribe: e(n)
                            }
                        }
                    })[a] = function() {
                        return this
                    }, t
                }
                return m({
                    type: c.INIT
                }), (r = {
                    dispatch: m,
                    subscribe: g,
                    getState: v,
                    replaceReducer: b
                })[a] = y, r
            }

            function l(t) {
                for (var e = Object.keys(t), n = {}, r = 0; r < e.length; r++) {
                    var o = e[r];
                    0, "function" == typeof t[o] && (n[o] = t[o])
                }
                var i, a = Object.keys(n);
                try {
                    ! function(t) {
                        Object.keys(t).forEach((function(e) {
                            var n = t[e];
                            if (void 0 === n(void 0, {
                                    type: c.INIT
                                })) throw new Error(s(12));
                            if (void 0 === n(void 0, {
                                    type: c.PROBE_UNKNOWN_ACTION()
                                })) throw new Error(s(13))
                        }))
                    }(n)
                } catch (t) {
                    i = t
                }
                return function(t, e) {
                    if (void 0 === t && (t = {}), i) throw i;
                    for (var r = !1, o = {}, h = 0; h < a.length; h++) {
                        var c = a[h],
                            u = n[c],
                            d = t[c],
                            l = u(d, e);
                        if (void 0 === l) {
                            e && e.type;
                            throw new Error(s(14))
                        }
                        o[c] = l, r = r || l !== d
                    }
                    return (r = r || a.length !== Object.keys(t).length) ? o : t
                }
            }

            function f(t, e) {
                return function() {
                    return e(t.apply(this, arguments))
                }
            }

            function p(t, e) {
                if ("function" == typeof t) return f(t, e);
                if ("object" != typeof t || null === t) throw new Error(s(16));
                var n = {};
                for (var r in t) {
                    var o = t[r];
                    "function" == typeof o && (n[r] = f(o, e))
                }
                return n
            }

            function v() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return 0 === e.length ? function(t) {
                    return t
                } : 1 === e.length ? e[0] : e.reduce((function(t, e) {
                    return function() {
                        return t(e.apply(void 0, arguments))
                    }
                }))
            }

            function g() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return function(t) {
                    return function() {
                        var n = t.apply(void 0, arguments),
                            r = function() {
                                throw new Error(s(15))
                            },
                            o = {
                                getState: n.getState,
                                dispatch: function() {
                                    return r.apply(void 0, arguments)
                                }
                            },
                            a = e.map((function(t) {
                                return t(o)
                            }));
                        return r = v.apply(void 0, a)(n.dispatch), i(i({}, n), {}, {
                            dispatch: r
                        })
                    }
                }
            }
        },
        519624: (t, e, n) => {
            "use strict";

            function r() {
                return r = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, r.apply(this, arguments)
            }
            n.d(e, {
                default: () => r
            })
        },
        298314: (t, e, n) => {
            "use strict";
            let r;

            function o() {
                return r || (r = new Image, r.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), r
            }
            n.d(e, {
                getEmptyImage: () => o
            })
        },
        207809: (t, e, n) => {
            "use strict";
            n.d(e, {
                TouchBackend: () => p
            });
            var r, o = n(6346);
            ! function(t) {
                t.mouse = "mouse", t.touch = "touch", t.keyboard = "keyboard"
            }(r || (r = {}));
            class i {
                get delay() {
                    var t;
                    return null !== (t = this.args.delay) && void 0 !== t ? t : 0
                }
                get scrollAngleRanges() {
                    return this.args.scrollAngleRanges
                }
                get getDropTargetElementsAtPoint() {
                    return this.args.getDropTargetElementsAtPoint
                }
                get ignoreContextMenu() {
                    var t;
                    return null !== (t = this.args.ignoreContextMenu) && void 0 !== t && t
                }
                get enableHoverOutsideTarget() {
                    var t;
                    return null !== (t = this.args.enableHoverOutsideTarget) && void 0 !== t && t
                }
                get enableKeyboardEvents() {
                    var t;
                    return null !== (t = this.args.enableKeyboardEvents) && void 0 !== t && t
                }
                get enableMouseEvents() {
                    var t;
                    return null !== (t = this.args.enableMouseEvents) && void 0 !== t && t
                }
                get enableTouchEvents() {
                    var t;
                    return null === (t = this.args.enableTouchEvents) || void 0 === t || t
                }
                get touchSlop() {
                    return this.args.touchSlop || 0
                }
                get delayTouchStart() {
                    var t, e, n, r;
                    return null !== (r = null !== (n = null === (t = this.args) || void 0 === t ? void 0 : t.delayTouchStart) && void 0 !== n ? n : null === (e = this.args) || void 0 === e ? void 0 : e.delay) && void 0 !== r ? r : 0
                }
                get delayMouseStart() {
                    var t, e, n, r;
                    return null !== (r = null !== (n = null === (t = this.args) || void 0 === t ? void 0 : t.delayMouseStart) && void 0 !== n ? n : null === (e = this.args) || void 0 === e ? void 0 : e.delay) && void 0 !== r ? r : 0
                }
                get window() {
                    return this.context && this.context.window ? this.context.window : "undefined" != typeof window ? window : void 0
                }
                get document() {
                    var t;
                    return (null === (t = this.context) || void 0 === t ? void 0 : t.document) ? this.context.document : this.window ? this.window.document : void 0
                }
                get rootElement() {
                    var t;
                    return (null === (t = this.args) || void 0 === t ? void 0 : t.rootElement) || this.document
                }
                constructor(t, e) {
                    this.args = t, this.context = e
                }
            }
            const s = 1,
                a = 0;

            function h(t) {
                return void 0 === t.button || t.button === a
            }

            function c(t) {
                return !!t.targetTouches
            }

            function u(t, e) {
                return c(t) ? function(t, e) {
                    return 1 === t.targetTouches.length ? u(t.targetTouches[0]) : e && 1 === t.touches.length && t.touches[0].target === e.target ? u(t.touches[0]) : void 0
                }(t, e) : {
                    x: t.clientX,
                    y: t.clientY
                }
            }
            const d = (() => {
                    let t = !1;
                    try {
                        addEventListener("test", (() => {}), Object.defineProperty({}, "passive", {
                            get: () => (t = !0, !0)
                        }))
                    } catch (t) {}
                    return t
                })(),
                l = {
                    [r.mouse]: {
                        start: "mousedown",
                        move: "mousemove",
                        end: "mouseup",
                        contextmenu: "contextmenu"
                    },
                    [r.touch]: {
                        start: "touchstart",
                        move: "touchmove",
                        end: "touchend"
                    },
                    [r.keyboard]: {
                        keydown: "keydown"
                    }
                };
            class f {
                profile() {
                    var t;
                    return {
                        sourceNodes: this.sourceNodes.size,
                        sourcePreviewNodes: this.sourcePreviewNodes.size,
                        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
                        targetNodes: this.targetNodes.size,
                        dragOverTargetIds: (null === (t = this.dragOverTargetIds) || void 0 === t ? void 0 : t.length) || 0
                    }
                }
                get document() {
                    return this.options.document
                }
                setup() {
                    const t = this.options.rootElement;
                    t && ((0, o.invariant)(!f.isSetUp, "Cannot have two Touch backends at the same time."), f.isSetUp = !0, this.addEventListener(t, "start", this.getTopMoveStartHandler()), this.addEventListener(t, "start", this.handleTopMoveStartCapture, !0), this.addEventListener(t, "move", this.handleTopMove), this.addEventListener(t, "move", this.handleTopMoveCapture, !0), this.addEventListener(t, "end", this.handleTopMoveEndCapture, !0), this.options.enableMouseEvents && !this.options.ignoreContextMenu && this.addEventListener(t, "contextmenu", this.handleTopMoveEndCapture), this.options.enableKeyboardEvents && this.addEventListener(t, "keydown", this.handleCancelOnEscape, !0))
                }
                teardown() {
                    const t = this.options.rootElement;
                    t && (f.isSetUp = !1, this._mouseClientOffset = {}, this.removeEventListener(t, "start", this.handleTopMoveStartCapture, !0), this.removeEventListener(t, "start", this.handleTopMoveStart),
                        this.removeEventListener(t, "move", this.handleTopMoveCapture, !0), this.removeEventListener(t, "move", this.handleTopMove), this.removeEventListener(t, "end", this.handleTopMoveEndCapture, !0), this.options.enableMouseEvents && !this.options.ignoreContextMenu && this.removeEventListener(t, "contextmenu", this.handleTopMoveEndCapture), this.options.enableKeyboardEvents && this.removeEventListener(t, "keydown", this.handleCancelOnEscape, !0), this.uninstallSourceNodeRemovalObserver())
                }
                addEventListener(t, e, n, r = !1) {
                    const o = d ? {
                        capture: r,
                        passive: !1
                    } : r;
                    this.listenerTypes.forEach((function(r) {
                        const i = l[r][e];
                        i && t.addEventListener(i, n, o)
                    }))
                }
                removeEventListener(t, e, n, r = !1) {
                    const o = d ? {
                        capture: r,
                        passive: !1
                    } : r;
                    this.listenerTypes.forEach((function(r) {
                        const i = l[r][e];
                        i && t.removeEventListener(i, n, o)
                    }))
                }
                connectDragSource(t, e) {
                    const n = this.handleMoveStart.bind(this, t);
                    return this.sourceNodes.set(t, e), this.addEventListener(e, "start", n), () => {
                        this.sourceNodes.delete(t), this.removeEventListener(e, "start", n)
                    }
                }
                connectDragPreview(t, e, n) {
                    return this.sourcePreviewNodeOptions.set(t, n), this.sourcePreviewNodes.set(t, e), () => {
                        this.sourcePreviewNodes.delete(t), this.sourcePreviewNodeOptions.delete(t)
                    }
                }
                connectDropTarget(t, e) {
                    const n = this.options.rootElement;
                    if (!this.document || !n) return () => {};
                    const r = r => {
                        if (!this.document || !n || !this.monitor.isDragging()) return;
                        let o;
                        switch (r.type) {
                            case l.mouse.move:
                                o = {
                                    x: r.clientX,
                                    y: r.clientY
                                };
                                break;
                            case l.touch.move:
                                var i, s;
                                o = {
                                    x: (null === (i = r.touches[0]) || void 0 === i ? void 0 : i.clientX) || 0,
                                    y: (null === (s = r.touches[0]) || void 0 === s ? void 0 : s.clientY) || 0
                                }
                        }
                        const a = null != o ? this.document.elementFromPoint(o.x, o.y) : void 0,
                            h = a && e.contains(a);
                        return a === e || h ? this.handleMove(r, t) : void 0
                    };
                    return this.addEventListener(this.document.body, "move", r), this.targetNodes.set(t, e), () => {
                        this.document && (this.targetNodes.delete(t), this.removeEventListener(this.document.body, "move", r))
                    }
                }
                getTopMoveStartHandler() {
                    return this.options.delayTouchStart || this.options.delayMouseStart ? this.handleTopMoveStartDelay : this.handleTopMoveStart
                }
                installSourceNodeRemovalObserver(t) {
                    this.uninstallSourceNodeRemovalObserver(), this.draggedSourceNode = t, this.draggedSourceNodeRemovalObserver = new MutationObserver((() => {
                        t && !t.parentElement && (this.resurrectSourceNode(), this.uninstallSourceNodeRemovalObserver())
                    })), t && t.parentElement && this.draggedSourceNodeRemovalObserver.observe(t.parentElement, {
                        childList: !0
                    })
                }
                resurrectSourceNode() {
                    this.document && this.draggedSourceNode && (this.draggedSourceNode.style.display = "none", this.draggedSourceNode.removeAttribute("data-reactid"), this.document.body.appendChild(this.draggedSourceNode))
                }
                uninstallSourceNodeRemovalObserver() {
                    this.draggedSourceNodeRemovalObserver && this.draggedSourceNodeRemovalObserver.disconnect(), this.draggedSourceNodeRemovalObserver = void 0, this.draggedSourceNode = void 0
                }
                constructor(t, e, n) {
                    this.getSourceClientOffset = t => {
                        const e = this.sourceNodes.get(t);
                        return e && function(t) {
                            const e = 1 === t.nodeType ? t : t.parentElement;
                            if (!e) return;
                            const {
                                top: n,
                                left: r
                            } = e.getBoundingClientRect();
                            return {
                                x: r,
                                y: n
                            }
                        }(e)
                    }, this.handleTopMoveStartCapture = t => {
                        h(t) && (this.moveStartSourceIds = [])
                    }, this.handleMoveStart = t => {
                        Array.isArray(this.moveStartSourceIds) && this.moveStartSourceIds.unshift(t)
                    }, this.handleTopMoveStart = t => {
                        if (!h(t)) return;
                        const e = u(t);
                        e && (c(t) && (this.lastTargetTouchFallback = t.targetTouches[0]), this._mouseClientOffset = e), this.waitingForDelay = !1
                    }, this.handleTopMoveStartDelay = t => {
                        if (!h(t)) return;
                        const e = t.type === l.touch.start ? this.options.delayTouchStart : this.options.delayMouseStart;
                        this.timeout = setTimeout(this.handleTopMoveStart.bind(this, t), e), this.waitingForDelay = !0
                    }, this.handleTopMoveCapture = () => {
                        this.dragOverTargetIds = []
                    }, this.handleMove = (t, e) => {
                        this.dragOverTargetIds && this.dragOverTargetIds.unshift(e)
                    }, this.handleTopMove = t => {
                        if (this.timeout && clearTimeout(this.timeout), !this.document || this.waitingForDelay) return;
                        const {
                            moveStartSourceIds: e,
                            dragOverTargetIds: n
                        } = this, r = this.options.enableHoverOutsideTarget, o = u(t, this.lastTargetTouchFallback);
                        if (!o) return;
                        if (this._isScrolling || !this.monitor.isDragging() && function(t, e, n, r, o) {
                                if (!o) return !1;
                                const i = 180 * Math.atan2(r - e, n - t) / Math.PI + 180;
                                for (let t = 0; t < o.length; ++t) {
                                    const e = o[t];
                                    if (e && (null == e.start || i >= e.start) && (null == e.end || i <= e.end)) return !0
                                }
                                return !1
                            }(this._mouseClientOffset.x || 0, this._mouseClientOffset.y || 0, o.x, o.y, this.options.scrollAngleRanges)) return void(this._isScrolling = !0);
                        var i, s, a, h;
                        if (!this.monitor.isDragging() && this._mouseClientOffset.hasOwnProperty("x") && e && (i = this._mouseClientOffset.x || 0, s = this._mouseClientOffset.y || 0, a = o.x, h = o.y, Math.sqrt(Math.pow(Math.abs(a - i), 2) + Math.pow(Math.abs(h - s), 2)) > (this.options.touchSlop ? this.options.touchSlop : 0)) && (this.moveStartSourceIds = void 0, this.actions.beginDrag(e, {
                                clientOffset: this._mouseClientOffset,
                                getSourceClientOffset: this.getSourceClientOffset,
                                publishSource: !1
                            })), !this.monitor.isDragging()) return;
                        const c = this.sourceNodes.get(this.monitor.getSourceId());
                        this.installSourceNodeRemovalObserver(c), this.actions.publishDragSource(), t.cancelable && t.preventDefault();
                        const d = (n || []).map((t => this.targetNodes.get(t))).filter((t => !!t)),
                            l = this.options.getDropTargetElementsAtPoint ? this.options.getDropTargetElementsAtPoint(o.x, o.y, d) : this.document.elementsFromPoint(o.x, o.y),
                            f = [];
                        for (const t in l) {
                            if (!l.hasOwnProperty(t)) continue;
                            let e = l[t];
                            for (null != e && f.push(e); e;) e = e.parentElement, e && -1 === f.indexOf(e) && f.push(e)
                        }
                        const p = f.filter((t => d.indexOf(t) > -1)).map((t => this._getDropTargetId(t))).filter((t => !!t)).filter(((t, e, n) => n.indexOf(t) === e));
                        if (r)
                            for (const t in this.targetNodes) {
                                const e = this.targetNodes.get(t);
                                if (c && e && e.contains(c) && -1 === p.indexOf(t)) {
                                    p.unshift(t);
                                    break
                                }
                            }
                        p.reverse(), this.actions.hover(p, {
                            clientOffset: o
                        })
                    }, this._getDropTargetId = t => {
                        const e = this.targetNodes.keys();
                        let n = e.next();
                        for (; !1 === n.done;) {
                            const r = n.value;
                            if (t === this.targetNodes.get(r)) return r;
                            n = e.next()
                        }
                    }, this.handleTopMoveEndCapture = t => {
                        this._isScrolling = !1, this.lastTargetTouchFallback = void 0,
                            function(t) {
                                return void 0 === t.buttons || 0 == (t.buttons & s)
                            }(t) && (this.monitor.isDragging() && !this.monitor.didDrop() ? (t.cancelable && t.preventDefault(), this._mouseClientOffset = {},
                                this.uninstallSourceNodeRemovalObserver(), this.actions.drop(), this.actions.endDrag()) : this.moveStartSourceIds = void 0)
                    }, this.handleCancelOnEscape = t => {
                        "Escape" === t.key && this.monitor.isDragging() && (this._mouseClientOffset = {}, this.uninstallSourceNodeRemovalObserver(), this.actions.endDrag())
                    }, this.options = new i(n, e), this.actions = t.getActions(), this.monitor = t.getMonitor(), this.sourceNodes = new Map, this.sourcePreviewNodes = new Map, this.sourcePreviewNodeOptions = new Map, this.targetNodes = new Map, this.listenerTypes = [], this._mouseClientOffset = {}, this._isScrolling = !1, this.options.enableMouseEvents && this.listenerTypes.push(r.mouse), this.options.enableTouchEvents && this.listenerTypes.push(r.touch), this.options.enableKeyboardEvents && this.listenerTypes.push(r.keyboard)
                }
            }
            const p = function(t, e = {}, n = {}) {
                return new f(t, e, n)
            }
        },
        85783: (t, e, n) => {
            "use strict";
            n.d(e, {
                useDragLayer: () => s
            });
            var r = n(50959),
                o = n(76121),
                i = n(284570);

            function s(t) {
                const e = (0, i.useDragDropManager)().getMonitor(),
                    [n, s] = (0, o.useCollector)(e, t);
                return (0, r.useEffect)((() => e.subscribeToOffsetChange(s))), (0, r.useEffect)((() => e.subscribeToStateChange(s))), n
            }
        }
    }
]);
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [9669], {
        259142: function(e, t) {
            var r, n, i;
            n = [t], r = function(e) {
                "use strict";

                function t(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                        return r
                    }
                    return Array.from(e)
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = !1;
                if ("undefined" != typeof window) {
                    var n = {
                        get passive() {
                            r = !0
                        }
                    };
                    window.addEventListener("testPassive", null, n), window.removeEventListener("testPassive", null, n)
                }
                var i = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
                    o = [],
                    s = !1,
                    a = -1,
                    c = void 0,
                    u = void 0,
                    d = function(e) {
                        return o.some((function(t) {
                            return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e))
                        }))
                    },
                    l = function(e) {
                        var t = e || window.event;
                        return !!d(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1)
                    },
                    g = function() {
                        setTimeout((function() {
                            void 0 !== u && (document.body.style.paddingRight = u, u = void 0), void 0 !== c && (document.body.style.overflow = c, c = void 0)
                        }))
                    };
                e.disableBodyScroll = function(e, n) {
                    if (i) {
                        if (!e) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
                        if (e && !o.some((function(t) {
                                return t.targetElement === e
                            }))) {
                            var g = {
                                targetElement: e,
                                options: n || {}
                            };
                            o = [].concat(t(o), [g]), e.ontouchstart = function(e) {
                                1 === e.targetTouches.length && (a = e.targetTouches[0].clientY)
                            }, e.ontouchmove = function(t) {
                                var r, n, i, o;
                                1 === t.targetTouches.length && (n = e, o = (r = t).targetTouches[0].clientY - a, !d(r.target) && (n && 0 === n.scrollTop && 0 < o || (i = n) && i.scrollHeight - i.scrollTop <= i.clientHeight && o < 0 ? l(r) : r.stopPropagation()))
                            }, s || (document.addEventListener("touchmove", l, r ? {
                                passive: !1
                            } : void 0), s = !0)
                        }
                    } else {
                        f = n, setTimeout((function() {
                            if (void 0 === u) {
                                var e = !!f && !0 === f.reserveScrollBarGap,
                                    t = window.innerWidth - document.documentElement.clientWidth;
                                e && 0 < t && (u = document.body.style.paddingRight, document.body.style.paddingRight = t + "px")
                            }
                            void 0 === c && (c = document.body.style.overflow, document.body.style.overflow = "hidden")
                        }));
                        var h = {
                            targetElement: e,
                            options: n || {}
                        };
                        o = [].concat(t(o), [h])
                    }
                    var f
                }, e.clearAllBodyScrollLocks = function() {
                    i ? (o.forEach((function(e) {
                        e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null
                    })), s && (document.removeEventListener("touchmove", l, r ? {
                        passive: !1
                    } : void 0), s = !1), o = [], a = -1) : (g(), o = [])
                }, e.enableBodyScroll = function(e) {
                    if (i) {
                        if (!e) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                        e.ontouchstart = null, e.ontouchmove = null, o = o.filter((function(t) {
                            return t.targetElement !== e
                        })), s && 0 === o.length && (document.removeEventListener("touchmove", l, r ? {
                            passive: !1
                        } : void 0), s = !1)
                    } else 1 === o.length && o[0].targetElement === e ? (g(), o = []) : o = o.filter((function(t) {
                        return t.targetElement !== e
                    }))
                }
            }, void 0 === (i = "function" == typeof r ? r.apply(t, n) : r) || (e.exports = i)
        },
        203341: e => {
            "use strict";
            e.exports = function e(t, r) {
                if (t === r) return !0;
                if (t && r && "object" == typeof t && "object" == typeof r) {
                    if (t.constructor !== r.constructor) return !1;
                    var n, i, o;
                    if (Array.isArray(t)) {
                        if ((n = t.length) != r.length) return !1;
                        for (i = n; 0 != i--;)
                            if (!e(t[i], r[i])) return !1;
                        return !0
                    }
                    if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
                    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
                    if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
                    if ((n = (o = Object.keys(t)).length) !== Object.keys(r).length) return !1;
                    for (i = n; 0 != i--;)
                        if (!Object.prototype.hasOwnProperty.call(r, o[i])) return !1;
                    for (i = n; 0 != i--;) {
                        var s = o[i];
                        if (!e(t[s], r[s])) return !1
                    }
                    return !0
                }
                return t != t && r != r
            }
        },
        103354: (e, t, r) => {
            "use strict";
            var n = r(50959),
                i = Symbol.for("react.element"),
                o = Symbol.for("react.fragment"),
                s = Object.prototype.hasOwnProperty,
                a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                c = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function u(e, t, r) {
                var n, o = {},
                    u = null,
                    d = null;
                for (n in void 0 !== r && (u = "" + r), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (d = t.ref), t) s.call(t, n) && !c.hasOwnProperty(n) && (o[n] = t[n]);
                if (e && e.defaultProps)
                    for (n in t = e.defaultProps) void 0 === o[n] && (o[n] = t[n]);
                return {
                    $$typeof: i,
                    type: e,
                    key: u,
                    ref: d,
                    props: o,
                    _owner: a.current
                }
            }
            t.jsx = u
        },
        511527: (e, t, r) => {
            "use strict";
            e.exports = r(103354)
        },
        6346: (e, t, r) => {
            "use strict";

            function n(e, t, ...r) {
                if ("undefined" != typeof process && void 0 === t) throw new Error("invariant requires an error message argument");
                if (!e) {
                    let e;
                    if (void 0 === t) e = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        let n = 0;
                        e = new Error(t.replace(/%s/g, (function() {
                            return r[n++]
                        }))), e.name = "Invariant Violation"
                    }
                    throw e.framesToPop = 1, e
                }
            }
            r.d(t, {
                invariant: () => n
            })
        },
        398789: (e, t, r) => {
            "use strict";

            function n(e, t, r, n) {
                let i = r ? r.call(n, e, t) : void 0;
                if (void 0 !== i) return !!i;
                if (e === t) return !0;
                if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
                const o = Object.keys(e),
                    s = Object.keys(t);
                if (o.length !== s.length) return !1;
                const a = Object.prototype.hasOwnProperty.bind(t);
                for (let s = 0; s < o.length; s++) {
                    const c = o[s];
                    if (!a(c)) return !1;
                    const u = e[c],
                        d = t[c];
                    if (i = r ? r.call(n, u, d, c) : void 0, !1 === i || void 0 === i && u !== d) return !1
                }
                return !0
            }
            r.d(t, {
                shallowEqual: () => n
            })
        },
        10170: (e, t, r) => {
            "use strict";
            r.d(t, {
                HTML5Backend: () => b
            });
            var n = {};

            function i(e) {
                let t = null;
                return () => (null == t && (t = e()), t)
            }
            r.r(n), r.d(n, {
                FILE: () => a,
                HTML: () => d,
                TEXT: () => u,
                URL: () => c
            });
            class o {
                enter(e) {
                    const t = this.entered.length;
                    return this.entered = function(e, t) {
                        const r = new Set,
                            n = e => r.add(e);
                        e.forEach(n), t.forEach(n);
                        const i = [];
                        return r.forEach((e => i.push(e))), i
                    }(this.entered.filter((t => this.isNodeInDocument(t) && (!t.contains || t.contains(e)))), [e]), 0 === t && this.entered.length > 0
                }
                leave(e) {
                    const t = this.entered.length;
                    var r, n;
                    return this.entered = (r = this.entered.filter(this.isNodeInDocument), n = e, r.filter((e => e !== n))), t > 0 && 0 === this.entered.length
                }
                reset() {
                    this.entered = []
                }
                constructor(e) {
                    this.entered = [], this.isNodeInDocument = e
                }
            }
            class s {
                initializeExposedProperties() {
                    Object.keys(this.config.exposeProperties).forEach((e => {
                        Object.defineProperty(this.item, e, {
                            configurable: !0,
                            enumerable: !0,
                            get: () => (console.warn(`Browser doesn't allow reading "${e}" until the drop event.`), null)
                        })
                    }))
                }
                loadDataTransfer(e) {
                    if (e) {
                        const t = {};
                        Object.keys(this.config.exposeProperties).forEach((r => {
                            const n = this.config.exposeProperties[r];
                            null != n && (t[r] = {
                                value: n(e, this.config.matchesTypes),
                                configurable: !0,
                                enumerable: !0
                            })
                        })), Object.defineProperties(this.item, t)
                    }
                }
                canDrag() {
                    return !0
                }
                beginDrag() {
                    return this.item
                }
                isDragging(e, t) {
                    return t === e.getSourceId()
                }
                endDrag() {}
                constructor(e) {
                    this.config = e, this.item = {}, this.initializeExposedProperties()
                }
            }
            const a = "__NATIVE_FILE__",
                c = "__NATIVE_URL__",
                u = "__NATIVE_TEXT__",
                d = "__NATIVE_HTML__";

            function l(e, t, r) {
                const n = t.reduce(((t, r) => t || e.getData(r)), "");
                return null != n ? n : r
            }
            const g = {
                [a]: {
                    exposeProperties: {
                        files: e => Array.prototype.slice.call(e.files),
                        items: e => e.items,
                        dataTransfer: e => e
                    },
                    matchesTypes: ["Files"]
                },
                [d]: {
                    exposeProperties: {
                        html: (e, t) => l(e, t, ""),
                        dataTransfer: e => e
                    },
                    matchesTypes: ["Html", "text/html"]
                },
                [c]: {
                    exposeProperties: {
                        urls: (e, t) => l(e, t, "").split("\n"),
                        dataTransfer: e => e
                    },
                    matchesTypes: ["Url", "text/uri-list"]
                },
                [u]: {
                    exposeProperties: {
                        text: (e, t) => l(e, t, ""),
                        dataTransfer: e => e
                    },
                    matchesTypes: ["Text", "text/plain"]
                }
            };

            function h(e) {
                if (!e) return null;
                const t = Array.prototype.slice.call(e.types || []);
                return Object.keys(g).filter((e => {
                    const r = g[e];
                    return !!(null == r ? void 0 : r.matchesTypes) && r.matchesTypes.some((e => t.indexOf(e) > -1))
                }))[0] || null
            }
            const f = i((() => /firefox/i.test(navigator.userAgent))),
                p = i((() => Boolean(window.safari)));
            class v {
                interpolate(e) {
                    const {
                        xs: t,
                        ys: r,
                        c1s: n,
                        c2s: i,
                        c3s: o
                    } = this;
                    let s = t.length - 1;
                    if (e === t[s]) return r[s];
                    let a, c = 0,
                        u = o.length - 1;
                    for (; c <= u;) {
                        a = Math.floor(.5 * (c + u));
                        const n = t[a];
                        if (n < e) c = a + 1;
                        else {
                            if (!(n > e)) return r[a];
                            u = a - 1
                        }
                    }
                    s = Math.max(0, u);
                    const d = e - t[s],
                        l = d * d;
                    return r[s] + n[s] * d + i[s] * l + o[s] * d * l
                }
                constructor(e, t) {
                    const {
                        length: r
                    } = e, n = [];
                    for (let e = 0; e < r; e++) n.push(e);
                    n.sort(((t, r) => e[t] < e[r] ? -1 : 1));
                    const i = [],
                        o = [],
                        s = [];
                    let a, c;
                    for (let n = 0; n < r - 1; n++) a = e[n + 1] - e[n], c = t[n + 1] - t[n], o.push(a), i.push(c), s.push(c / a);
                    const u = [s[0]];
                    for (let e = 0; e < o.length - 1; e++) {
                        const t = s[e],
                            r = s[e + 1];
                        if (t * r <= 0) u.push(0);
                        else {
                            a = o[e];
                            const n = o[e + 1],
                                i = a + n;
                            u.push(3 * i / ((i + n) / t + (i + a) / r))
                        }
                    }
                    u.push(s[s.length - 1]);
                    const d = [],
                        l = [];
                    let g;
                    for (let e = 0; e < u.length - 1; e++) {
                        g = s[e];
                        const t = u[e],
                            r = 1 / o[e],
                            n = t + u[e + 1] - g - g;
                        d.push((g - t - n) * r), l.push(n * r * r)
                    }
                    this.xs = e, this.ys = t, this.c1s = u, this.c2s = d, this.c3s = l
                }
            }

            function m(e) {
                const t = 1 === e.nodeType ? e : e.parentElement;
                if (!t) return null;
                const {
                    top: r,
                    left: n
                } = t.getBoundingClientRect();
                return {
                    x: n,
                    y: r
                }
            }

            function D(e) {
                return {
                    x: e.clientX,
                    y: e.clientY
                }
            }

            function y(e, t, r, n, i) {
                const o = "IMG" === (s = t).nodeName && (f() || !(null === (a = document.documentElement) || void 0 === a ? void 0 : a.contains(s)));
                var s, a;
                const c = m(o ? e : t),
                    u = {
                        x: r.x - c.x,
                        y: r.y - c.y
                    },
                    {
                        offsetWidth: d,
                        offsetHeight: l
                    } = e,
                    {
                        anchorX: g,
                        anchorY: h
                    } = n,
                    {
                        dragPreviewWidth: D,
                        dragPreviewHeight: y
                    } = function(e, t, r, n) {
                        let i = e ? t.width : r,
                            o = e ? t.height : n;
                        return p() && e && (o /= window.devicePixelRatio, i /= window.devicePixelRatio), {
                            dragPreviewWidth: i,
                            dragPreviewHeight: o
                        }
                    }(o, t, d, l),
                    {
                        offsetX: O,
                        offsetY: S
                    } = i,
                    T = 0 === S || S;
                return {
                    x: 0 === O || O ? O : new v([0, .5, 1], [u.x, u.x / d * D, u.x + D - d]).interpolate(g),
                    y: T ? S : (() => {
                        let e = new v([0, .5, 1], [u.y, u.y / l * y, u.y + y - l]).interpolate(h);
                        return p() && o && (e += (window.devicePixelRatio - 1) * y), e
                    })()
                }
            }
            class O {
                get window() {
                    return this.globalContext ? this.globalContext : "undefined" != typeof window ? window : void 0
                }
                get document() {
                    var e;
                    return (null === (e = this.globalContext) || void 0 === e ? void 0 : e.document) ? this.globalContext.document : this.window ? this.window.document : void 0
                }
                get rootElement() {
                    var e;
                    return (null === (e = this.optionsArgs) || void 0 === e ? void 0 : e.rootElement) || this.window
                }
                constructor(e, t) {
                    this.ownerDocument = null, this.globalContext = e, this.optionsArgs = t
                }
            }

            function S(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    })))), n.forEach((function(t) {
                        S(e, t, r[t])
                    }))
                }
                return e
            }
            class I {
                profile() {
                    var e, t;
                    return {
                        sourcePreviewNodes: this.sourcePreviewNodes.size,
                        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
                        sourceNodeOptions: this.sourceNodeOptions.size,
                        sourceNodes: this.sourceNodes.size,
                        dragStartSourceIds: (null === (e = this.dragStartSourceIds) || void 0 === e ? void 0 : e.length) || 0,
                        dropTargetIds: this.dropTargetIds.length,
                        dragEnterTargetIds: this.dragEnterTargetIds.length,
                        dragOverTargetIds: (null === (t = this.dragOverTargetIds) || void 0 === t ? void 0 : t.length) || 0
                    }
                }
                get window() {
                    return this.options.window
                }
                get document() {
                    return this.options.document
                }
                get rootElement() {
                    return this.options.rootElement
                }
                setup() {
                    const e = this.rootElement;
                    if (void 0 !== e) {
                        if (e.__isReactDndBackendSetUp) throw new Error("Cannot have two HTML5 backends at the same time.");
                        e.__isReactDndBackendSetUp = !0, this.addEventListeners(e)
                    }
                }
                teardown() {
                    const e = this.rootElement;
                    var t;
                    void 0 !== e && (e.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId && (null === (t = this.window) || void 0 === t || t.cancelAnimationFrame(this.asyncEndDragFrameId)))
                }
                connectDragPreview(e, t, r) {
                    return this.sourcePreviewNodeOptions.set(e, r), this.sourcePreviewNodes.set(e, t), () => {
                        this.sourcePreviewNodes.delete(e), this.sourcePreviewNodeOptions.delete(e)
                    }
                }
                connectDragSource(e, t, r) {
                    this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, r);
                    const n = t => this.handleDragStart(t, e),
                        i = e => this.handleSelectStart(e);
                    return t.setAttribute("draggable", "true"), t.addEventListener("dragstart", n), t.addEventListener("selectstart", i), () => {
                        this.sourceNodes.delete(e), this.sourceNodeOptions.delete(e), t.removeEventListener("dragstart", n), t.removeEventListener("selectstart", i), t.setAttribute("draggable", "false")
                    }
                }
                connectDropTarget(e, t) {
                    const r = t => this.handleDragEnter(t, e),
                        n = t => this.handleDragOver(t, e),
                        i = t => this.handleDrop(t, e);
                    return t.addEventListener("dragenter", r), t.addEventListener("dragover", n), t.addEventListener("drop", i), () => {
                        t.removeEventListener("dragenter", r), t.removeEventListener("dragover", n),
                            t.removeEventListener("drop", i)
                    }
                }
                addEventListeners(e) {
                    e.addEventListener && (e.addEventListener("dragstart", this.handleTopDragStart), e.addEventListener("dragstart", this.handleTopDragStartCapture, !0), e.addEventListener("dragend", this.handleTopDragEndCapture, !0), e.addEventListener("dragenter", this.handleTopDragEnter), e.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), e.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), e.addEventListener("dragover", this.handleTopDragOver), e.addEventListener("dragover", this.handleTopDragOverCapture, !0), e.addEventListener("drop", this.handleTopDrop), e.addEventListener("drop", this.handleTopDropCapture, !0))
                }
                removeEventListeners(e) {
                    e.removeEventListener && (e.removeEventListener("dragstart", this.handleTopDragStart), e.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), e.removeEventListener("dragend", this.handleTopDragEndCapture, !0), e.removeEventListener("dragenter", this.handleTopDragEnter), e.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), e.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), e.removeEventListener("dragover", this.handleTopDragOver), e.removeEventListener("dragover", this.handleTopDragOverCapture, !0), e.removeEventListener("drop", this.handleTopDrop), e.removeEventListener("drop", this.handleTopDropCapture, !0))
                }
                getCurrentSourceNodeOptions() {
                    const e = this.monitor.getSourceId(),
                        t = this.sourceNodeOptions.get(e);
                    return T({
                        dropEffect: this.altKeyPressed ? "copy" : "move"
                    }, t || {})
                }
                getCurrentDropEffect() {
                    return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect
                }
                getCurrentSourcePreviewNodeOptions() {
                    const e = this.monitor.getSourceId();
                    return T({
                        anchorX: .5,
                        anchorY: .5,
                        captureDraggingState: !1
                    }, this.sourcePreviewNodeOptions.get(e) || {})
                }
                isDraggingNativeItem() {
                    const e = this.monitor.getItemType();
                    return Object.keys(n).some((t => n[t] === e))
                }
                beginDragNativeItem(e, t) {
                    this.clearCurrentDragSourceNode(), this.currentNativeSource = function(e, t) {
                        const r = g[e];
                        if (!r) throw new Error(`native type ${e} has no configuration`);
                        const n = new s(r);
                        return n.loadDataTransfer(t), n
                    }(e, t), this.currentNativeHandle = this.registry.addSource(e, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle])
                }
                setCurrentDragSourceNode(e) {
                    this.clearCurrentDragSourceNode(), this.currentDragSourceNode = e;
                    this.mouseMoveTimeoutTimer = setTimeout((() => {
                        var e;
                        return null === (e = this.rootElement) || void 0 === e ? void 0 : e.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0)
                    }), 1e3)
                }
                clearCurrentDragSourceNode() {
                    if (this.currentDragSourceNode) {
                        var e;
                        if (this.currentDragSourceNode = null, this.rootElement) null === (e = this.window) || void 0 === e || e.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
                        return this.mouseMoveTimeoutTimer = null, !0
                    }
                    return !1
                }
                handleDragStart(e, t) {
                    e.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(t))
                }
                handleDragEnter(e, t) {
                    this.dragEnterTargetIds.unshift(t)
                }
                handleDragOver(e, t) {
                    null === this.dragOverTargetIds && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(t)
                }
                handleDrop(e, t) {
                    this.dropTargetIds.unshift(t)
                }
                constructor(e, t, r) {
                    this.sourcePreviewNodes = new Map, this.sourcePreviewNodeOptions = new Map, this.sourceNodes = new Map, this.sourceNodeOptions = new Map, this.dragStartSourceIds = null, this.dropTargetIds = [], this.dragEnterTargetIds = [], this.currentNativeSource = null, this.currentNativeHandle = null, this.currentDragSourceNode = null, this.altKeyPressed = !1, this.mouseMoveTimeoutTimer = null, this.asyncEndDragFrameId = null, this.dragOverTargetIds = null, this.lastClientOffset = null, this.hoverRafId = null, this.getSourceClientOffset = e => {
                        const t = this.sourceNodes.get(e);
                        return t && m(t) || null
                    }, this.endDragNativeItem = () => {
                        this.isDraggingNativeItem() && (this.actions.endDrag(), this.currentNativeHandle && this.registry.removeSource(this.currentNativeHandle), this.currentNativeHandle = null, this.currentNativeSource = null)
                    }, this.isNodeInDocument = e => Boolean(e && this.document && this.document.body && this.document.body.contains(e)), this.endDragIfSourceWasRemovedFromDOM = () => {
                        const e = this.currentDragSourceNode;
                        null == e || this.isNodeInDocument(e) || (this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover())
                    }, this.scheduleHover = e => {
                        null === this.hoverRafId && "undefined" != typeof requestAnimationFrame && (this.hoverRafId = requestAnimationFrame((() => {
                            this.monitor.isDragging() && this.actions.hover(e || [], {
                                clientOffset: this.lastClientOffset
                            }), this.hoverRafId = null
                        })))
                    }, this.cancelHover = () => {
                        null !== this.hoverRafId && "undefined" != typeof cancelAnimationFrame && (cancelAnimationFrame(this.hoverRafId), this.hoverRafId = null)
                    }, this.handleTopDragStartCapture = () => {
                        this.clearCurrentDragSourceNode(), this.dragStartSourceIds = []
                    }, this.handleTopDragStart = e => {
                        if (e.defaultPrevented) return;
                        const {
                            dragStartSourceIds: t
                        } = this;
                        this.dragStartSourceIds = null;
                        const r = D(e);
                        this.monitor.isDragging() && (this.actions.endDrag(), this.cancelHover()), this.actions.beginDrag(t || [], {
                            publishSource: !1,
                            getSourceClientOffset: this.getSourceClientOffset,
                            clientOffset: r
                        });
                        const {
                            dataTransfer: n
                        } = e, i = h(n);
                        if (this.monitor.isDragging()) {
                            if (n && "function" == typeof n.setDragImage) {
                                const e = this.monitor.getSourceId(),
                                    t = this.sourceNodes.get(e),
                                    i = this.sourcePreviewNodes.get(e) || t;
                                if (i) {
                                    const {
                                        anchorX: e,
                                        anchorY: o,
                                        offsetX: s,
                                        offsetY: a
                                    } = this.getCurrentSourcePreviewNodeOptions(), c = y(t, i, r, {
                                        anchorX: e,
                                        anchorY: o
                                    }, {
                                        offsetX: s,
                                        offsetY: a
                                    });
                                    n.setDragImage(i, c.x, c.y)
                                }
                            }
                            try {
                                null == n || n.setData("application/json", {})
                            } catch (e) {}
                            this.setCurrentDragSourceNode(e.target);
                            const {
                                captureDraggingState: t
                            } = this.getCurrentSourcePreviewNodeOptions();
                            t ? this.actions.publishDragSource() : setTimeout((() => this.actions.publishDragSource()), 0)
                        } else if (i) this.beginDragNativeItem(i);
                        else {
                            if (n && !n.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable"))) return;
                            e.preventDefault()
                        }
                    }, this.handleTopDragEndCapture = () => {
                        this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover()
                    }, this.handleTopDragEnterCapture = e => {
                        var t;
                        (this.dragEnterTargetIds = [],
                            this.isDraggingNativeItem()) && (null === (t = this.currentNativeSource) || void 0 === t || t.loadDataTransfer(e.dataTransfer));
                        if (!this.enterLeaveCounter.enter(e.target) || this.monitor.isDragging()) return;
                        const {
                            dataTransfer: r
                        } = e, n = h(r);
                        n && this.beginDragNativeItem(n, r)
                    }, this.handleTopDragEnter = e => {
                        const {
                            dragEnterTargetIds: t
                        } = this;
                        if (this.dragEnterTargetIds = [], !this.monitor.isDragging()) return;
                        this.altKeyPressed = e.altKey, t.length > 0 && this.actions.hover(t, {
                            clientOffset: D(e)
                        });
                        t.some((e => this.monitor.canDropOnTarget(e))) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = this.getCurrentDropEffect()))
                    }, this.handleTopDragOverCapture = e => {
                        var t;
                        (this.dragOverTargetIds = [], this.isDraggingNativeItem()) && (null === (t = this.currentNativeSource) || void 0 === t || t.loadDataTransfer(e.dataTransfer))
                    }, this.handleTopDragOver = e => {
                        const {
                            dragOverTargetIds: t
                        } = this;
                        if (this.dragOverTargetIds = [], !this.monitor.isDragging()) return e.preventDefault(), void(e.dataTransfer && (e.dataTransfer.dropEffect = "none"));
                        this.altKeyPressed = e.altKey, this.lastClientOffset = D(e), this.scheduleHover(t);
                        (t || []).some((e => this.monitor.canDropOnTarget(e))) ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = this.getCurrentDropEffect())) : this.isDraggingNativeItem() ? e.preventDefault() : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none"))
                    }, this.handleTopDragLeaveCapture = e => {
                        this.isDraggingNativeItem() && e.preventDefault();
                        this.enterLeaveCounter.leave(e.target) && (this.isDraggingNativeItem() && setTimeout((() => this.endDragNativeItem()), 0), this.cancelHover())
                    }, this.handleTopDropCapture = e => {
                        var t;
                        (this.dropTargetIds = [], this.isDraggingNativeItem()) ? (e.preventDefault(), null === (t = this.currentNativeSource) || void 0 === t || t.loadDataTransfer(e.dataTransfer)) : h(e.dataTransfer) && e.preventDefault();
                        this.enterLeaveCounter.reset()
                    }, this.handleTopDrop = e => {
                        const {
                            dropTargetIds: t
                        } = this;
                        this.dropTargetIds = [], this.actions.hover(t, {
                            clientOffset: D(e)
                        }), this.actions.drop({
                            dropEffect: this.getCurrentDropEffect()
                        }), this.isDraggingNativeItem() ? this.endDragNativeItem() : this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover()
                    }, this.handleSelectStart = e => {
                        const t = e.target;
                        "function" == typeof t.dragDrop && ("INPUT" === t.tagName || "SELECT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable || (e.preventDefault(), t.dragDrop()))
                    }, this.options = new O(t, r), this.actions = e.getActions(), this.monitor = e.getMonitor(), this.registry = e.getRegistry(), this.enterLeaveCounter = new o(this.isNodeInDocument)
                }
            }
            const b = function(e, t, r) {
                return new I(e, t, r)
            }
        },
        181904: (e, t, r) => {
            "use strict";
            r.d(t, {
                DndContext: () => n
            });
            const n = (0, r(50959).createContext)({
                dragDropManager: void 0
            })
        },
        23642: (e, t, r) => {
            "use strict";
            r.d(t, {
                DndProvider: () => ge
            });
            var n = r(511527),
                i = r(721153),
                o = r(6346);

            function s(e) {
                return "object" == typeof e
            }
            const a = "dnd-core/INIT_COORDS",
                c = "dnd-core/BEGIN_DRAG",
                u = "dnd-core/PUBLISH_DRAG_SOURCE",
                d = "dnd-core/HOVER",
                l = "dnd-core/DROP",
                g = "dnd-core/END_DRAG";

            function h(e, t) {
                return {
                    type: a,
                    payload: {
                        sourceClientOffset: t || null,
                        clientOffset: e || null
                    }
                }
            }
            const f = {
                type: a,
                payload: {
                    clientOffset: null,
                    sourceClientOffset: null
                }
            };

            function p(e) {
                return function(t = [], r = {
                    publishSource: !0
                }) {
                    const {
                        publishSource: n = !0,
                        clientOffset: i,
                        getSourceClientOffset: a
                    } = r, u = e.getMonitor(), d = e.getRegistry();
                    e.dispatch(h(i)),
                        function(e, t, r) {
                            (0, o.invariant)(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach((function(e) {
                                (0, o.invariant)(r.getSource(e), "Expected sourceIds to be registered.")
                            }))
                        }(t, u, d);
                    const l = function(e, t) {
                        let r = null;
                        for (let n = e.length - 1; n >= 0; n--)
                            if (t.canDragSource(e[n])) {
                                r = e[n];
                                break
                            }
                        return r
                    }(t, u);
                    if (null == l) return void e.dispatch(f);
                    let g = null;
                    if (i) {
                        if (!a) throw new Error("getSourceClientOffset must be defined");
                        ! function(e) {
                            (0, o.invariant)("function" == typeof e, "When clientOffset is provided, getSourceClientOffset must be a function.")
                        }(a), g = a(l)
                    }
                    e.dispatch(h(i, g));
                    const p = d.getSource(l).beginDrag(u, l);
                    if (null == p) return;
                    ! function(e) {
                        (0, o.invariant)(s(e), "Item must be an object.")
                    }(p), d.pinSource(l);
                    const v = d.getSourceType(l);
                    return {
                        type: c,
                        payload: {
                            itemType: v,
                            item: p,
                            sourceId: l,
                            clientOffset: i || null,
                            sourceClientOffset: g || null,
                            isSourcePublic: !!n
                        }
                    }
                }
            }

            function v(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    })))), n.forEach((function(t) {
                        v(e, t, r[t])
                    }))
                }
                return e
            }

            function D(e) {
                return function(t = {}) {
                    const r = e.getMonitor(),
                        n = e.getRegistry();
                    ! function(e) {
                        (0, o.invariant)(e.isDragging(), "Cannot call drop while not dragging."), (0, o.invariant)(!e.didDrop(), "Cannot call drop twice during one drag operation.")
                    }(r);
                    const i = function(e) {
                        const t = e.getTargetIds().filter(e.canDropOnTarget, e);
                        return t.reverse(), t
                    }(r);
                    i.forEach(((i, a) => {
                        const c = function(e, t, r, n) {
                                const i = r.getTarget(e);
                                let a = i ? i.drop(n, e) : void 0;
                                (function(e) {
                                    (0, o.invariant)(void 0 === e || s(e), "Drop result must either be an object or undefined.")
                                })(a), void 0 === a && (a = 0 === t ? {} : n.getDropResult());
                                return a
                            }(i, a, n, r),
                            u = {
                                type: l,
                                payload: {
                                    dropResult: m({}, t, c)
                                }
                            };
                        e.dispatch(u)
                    }))
                }
            }

            function y(e) {
                return function() {
                    const t = e.getMonitor(),
                        r = e.getRegistry();
                    ! function(e) {
                        (0, o.invariant)(e.isDragging(), "Cannot call endDrag while not dragging.")
                    }(t);
                    const n = t.getSourceId();
                    if (null != n) {
                        r.getSource(n, !0).endDrag(t, n), r.unpinSource()
                    }
                    return {
                        type: g
                    }
                }
            }

            function O(e, t) {
                return null === t ? null === e : Array.isArray(e) ? e.some((e => e === t)) : e === t
            }

            function S(e) {
                return function(t, {
                    clientOffset: r
                } = {}) {
                    ! function(e) {
                        (0, o.invariant)(Array.isArray(e), "Expected targetIds to be an array.")
                    }(t);
                    const n = t.slice(0),
                        i = e.getMonitor(),
                        s = e.getRegistry();
                    return function(e, t, r) {
                            for (let n = e.length - 1; n >= 0; n--) {
                                const i = e[n];
                                O(t.getTargetType(i), r) || e.splice(n, 1)
                            }
                        }(n, s, i.getItemType()),
                        function(e, t, r) {
                            (0, o.invariant)(t.isDragging(), "Cannot call hover while not dragging."), (0, o.invariant)(!t.didDrop(), "Cannot call hover after drop.");
                            for (let t = 0; t < e.length; t++) {
                                const n = e[t];
                                (0,
                                    o.invariant)(e.lastIndexOf(n) === t, "Expected targetIds to be unique in the passed array.");
                                const i = r.getTarget(n);
                                (0, o.invariant)(i, "Expected targetIds to be registered.")
                            }
                        }(n, i, s),
                        function(e, t, r) {
                            e.forEach((function(e) {
                                r.getTarget(e).hover(t, e)
                            }))
                        }(n, i, s), {
                            type: d,
                            payload: {
                                targetIds: n,
                                clientOffset: r || null
                            }
                        }
                }
            }

            function T(e) {
                return function() {
                    if (e.getMonitor().isDragging()) return {
                        type: u
                    }
                }
            }
            class I {
                receiveBackend(e) {
                    this.backend = e
                }
                getMonitor() {
                    return this.monitor
                }
                getBackend() {
                    return this.backend
                }
                getRegistry() {
                    return this.monitor.registry
                }
                getActions() {
                    const e = this,
                        {
                            dispatch: t
                        } = this.store;
                    const r = function(e) {
                        return {
                            beginDrag: p(e),
                            publishDragSource: T(e),
                            hover: S(e),
                            drop: D(e),
                            endDrag: y(e)
                        }
                    }(this);
                    return Object.keys(r).reduce(((n, i) => {
                        const o = r[i];
                        var s;
                        return n[i] = (s = o, (...r) => {
                            const n = s.apply(e, r);
                            void 0 !== n && t(n)
                        }), n
                    }), {})
                }
                dispatch(e) {
                    this.store.dispatch(e)
                }
                constructor(e, t) {
                    this.isSetUp = !1, this.handleRefCountChange = () => {
                        const e = this.store.getState().refCount > 0;
                        this.backend && (e && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !e && this.isSetUp && (this.backend.teardown(), this.isSetUp = !1))
                    }, this.store = e, this.monitor = t, e.subscribe(this.handleRefCountChange)
                }
            }

            function b(e, t) {
                return {
                    x: e.x - t.x,
                    y: e.y - t.y
                }
            }
            const w = [],
                E = [];
            w.__IS_NONE__ = !0, E.__IS_ALL__ = !0;
            class C {
                subscribeToStateChange(e, t = {}) {
                    const {
                        handlerIds: r
                    } = t;
                    (0, o.invariant)("function" == typeof e, "listener must be a function."), (0, o.invariant)(void 0 === r || Array.isArray(r), "handlerIds, when specified, must be an array of strings.");
                    let n = this.store.getState().stateId;
                    return this.store.subscribe((() => {
                        const t = this.store.getState(),
                            i = t.stateId;
                        try {
                            const o = i === n || i === n + 1 && ! function(e, t) {
                                return e !== w && (e === E || void 0 === t || (r = e, t.filter((e => r.indexOf(e) > -1))).length > 0);
                                var r
                            }(t.dirtyHandlerIds, r);
                            o || e()
                        } finally {
                            n = i
                        }
                    }))
                }
                subscribeToOffsetChange(e) {
                    (0, o.invariant)("function" == typeof e, "listener must be a function.");
                    let t = this.store.getState().dragOffset;
                    return this.store.subscribe((() => {
                        const r = this.store.getState().dragOffset;
                        r !== t && (t = r, e())
                    }))
                }
                canDragSource(e) {
                    if (!e) return !1;
                    const t = this.registry.getSource(e);
                    return (0, o.invariant)(t, `Expected to find a valid source. sourceId=${e}`), !this.isDragging() && t.canDrag(this, e)
                }
                canDropOnTarget(e) {
                    if (!e) return !1;
                    const t = this.registry.getTarget(e);
                    if ((0, o.invariant)(t, `Expected to find a valid target. targetId=${e}`), !this.isDragging() || this.didDrop()) return !1;
                    return O(this.registry.getTargetType(e), this.getItemType()) && t.canDrop(this, e)
                }
                isDragging() {
                    return Boolean(this.getItemType())
                }
                isDraggingSource(e) {
                    if (!e) return !1;
                    const t = this.registry.getSource(e, !0);
                    if ((0, o.invariant)(t, `Expected to find a valid source. sourceId=${e}`), !this.isDragging() || !this.isSourcePublic()) return !1;
                    return this.registry.getSourceType(e) === this.getItemType() && t.isDragging(this, e)
                }
                isOverTarget(e, t = {
                    shallow: !1
                }) {
                    if (!e) return !1;
                    const {
                        shallow: r
                    } = t;
                    if (!this.isDragging()) return !1;
                    const n = this.registry.getTargetType(e),
                        i = this.getItemType();
                    if (i && !O(n, i)) return !1;
                    const o = this.getTargetIds();
                    if (!o.length) return !1;
                    const s = o.indexOf(e);
                    return r ? s === o.length - 1 : s > -1
                }
                getItemType() {
                    return this.store.getState().dragOperation.itemType
                }
                getItem() {
                    return this.store.getState().dragOperation.item
                }
                getSourceId() {
                    return this.store.getState().dragOperation.sourceId
                }
                getTargetIds() {
                    return this.store.getState().dragOperation.targetIds
                }
                getDropResult() {
                    return this.store.getState().dragOperation.dropResult
                }
                didDrop() {
                    return this.store.getState().dragOperation.didDrop
                }
                isSourcePublic() {
                    return Boolean(this.store.getState().dragOperation.isSourcePublic)
                }
                getInitialClientOffset() {
                    return this.store.getState().dragOffset.initialClientOffset
                }
                getInitialSourceClientOffset() {
                    return this.store.getState().dragOffset.initialSourceClientOffset
                }
                getClientOffset() {
                    return this.store.getState().dragOffset.clientOffset
                }
                getSourceClientOffset() {
                    return function(e) {
                        const {
                            clientOffset: t,
                            initialClientOffset: r,
                            initialSourceClientOffset: n
                        } = e;
                        return t && r && n ? b((o = n, {
                            x: (i = t).x + o.x,
                            y: i.y + o.y
                        }), r) : null;
                        var i, o
                    }(this.store.getState().dragOffset)
                }
                getDifferenceFromInitialOffset() {
                    return function(e) {
                        const {
                            clientOffset: t,
                            initialClientOffset: r
                        } = e;
                        return t && r ? b(t, r) : null
                    }(this.store.getState().dragOffset)
                }
                constructor(e, t) {
                    this.store = e, this.registry = t
                }
            }
            const P = "undefined" != typeof global ? global : self,
                N = P.MutationObserver || P.WebKitMutationObserver;

            function R(e) {
                return function() {
                    const t = setTimeout(n, 0),
                        r = setInterval(n, 50);

                    function n() {
                        clearTimeout(t), clearInterval(r), e()
                    }
                }
            }
            const x = "function" == typeof N ? function(e) {
                let t = 1;
                const r = new N(e),
                    n = document.createTextNode("");
                return r.observe(n, {
                        characterData: !0
                    }),
                    function() {
                        t = -t, n.data = t
                    }
            } : R;
            class M {
                call() {
                    try {
                        this.task && this.task()
                    } catch (e) {
                        this.onError(e)
                    } finally {
                        this.task = null, this.release(this)
                    }
                }
                constructor(e, t) {
                    this.onError = e, this.release = t, this.task = null
                }
            }
            const L = new class {
                    enqueueTask(e) {
                        const {
                            queue: t,
                            requestFlush: r
                        } = this;
                        t.length || (r(), this.flushing = !0), t[t.length] = e
                    }
                    constructor() {
                        this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
                            const {
                                queue: e
                            } = this;
                            for (; this.index < e.length;) {
                                const t = this.index;
                                if (this.index++, e[t].call(), this.index > this.capacity) {
                                    for (let t = 0, r = e.length - this.index; t < r; t++) e[t] = e[t + this.index];
                                    e.length -= this.index, this.index = 0
                                }
                            }
                            e.length = 0, this.index = 0, this.flushing = !1
                        }, this.registerPendingError = e => {
                            this.pendingErrors.push(e), this.requestErrorThrow()
                        }, this.requestFlush = x(this.flush), this.requestErrorThrow = R((() => {
                            if (this.pendingErrors.length) throw this.pendingErrors.shift()
                        }))
                    }
                },
                _ = new class {
                    create(e) {
                        const t = this.freeTasks,
                            r = t.length ? t.pop() : new M(this.onError, (e => t[t.length] = e));
                        return r.task = e, r
                    }
                    constructor(e) {
                        this.onError = e, this.freeTasks = []
                    }
                }(L.registerPendingError);
            const k = "dnd-core/ADD_SOURCE",
                j = "dnd-core/ADD_TARGET",
                H = "dnd-core/REMOVE_SOURCE",
                A = "dnd-core/REMOVE_TARGET";

            function U(e, t) {
                t && Array.isArray(e) ? e.forEach((e => U(e, !1))) : (0, o.invariant)("string" == typeof e || "symbol" == typeof e, t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.")
            }
            var B;
            ! function(e) {
                e.SOURCE = "SOURCE", e.TARGET = "TARGET"
            }(B || (B = {}));
            let F = 0;

            function q(e) {
                const t = (F++).toString();
                switch (e) {
                    case B.SOURCE:
                        return `S${t}`;
                    case B.TARGET:
                        return `T${t}`;
                    default:
                        throw new Error(`Unknown Handler Role: ${e}`)
                }
            }

            function G(e) {
                switch (e[0]) {
                    case "S":
                        return B.SOURCE;
                    case "T":
                        return B.TARGET;
                    default:
                        throw new Error(`Cannot parse handler ID: ${e}`)
                }
            }

            function Y(e, t) {
                const r = e.entries();
                let n = !1;
                do {
                    const {
                        done: e,
                        value: [, i]
                    } = r.next();
                    if (i === t) return !0;
                    n = !!e
                } while (!n);
                return !1
            }
            class X {
                addSource(e, t) {
                    U(e),
                        function(e) {
                            (0, o.invariant)("function" == typeof e.canDrag, "Expected canDrag to be a function."), (0, o.invariant)("function" == typeof e.beginDrag, "Expected beginDrag to be a function."), (0, o.invariant)("function" == typeof e.endDrag, "Expected endDrag to be a function.")
                        }(t);
                    const r = this.addHandler(B.SOURCE, e, t);
                    return this.store.dispatch(function(e) {
                        return {
                            type: k,
                            payload: {
                                sourceId: e
                            }
                        }
                    }(r)), r
                }
                addTarget(e, t) {
                    U(e, !0),
                        function(e) {
                            (0, o.invariant)("function" == typeof e.canDrop, "Expected canDrop to be a function."), (0, o.invariant)("function" == typeof e.hover, "Expected hover to be a function."), (0, o.invariant)("function" == typeof e.drop, "Expected beginDrag to be a function.")
                        }(t);
                    const r = this.addHandler(B.TARGET, e, t);
                    return this.store.dispatch(function(e) {
                        return {
                            type: j,
                            payload: {
                                targetId: e
                            }
                        }
                    }(r)), r
                }
                containsHandler(e) {
                    return Y(this.dragSources, e) || Y(this.dropTargets, e)
                }
                getSource(e, t = !1) {
                    (0, o.invariant)(this.isSourceId(e), "Expected a valid source ID.");
                    return t && e === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(e)
                }
                getTarget(e) {
                    return (0, o.invariant)(this.isTargetId(e), "Expected a valid target ID."), this.dropTargets.get(e)
                }
                getSourceType(e) {
                    return (0, o.invariant)(this.isSourceId(e), "Expected a valid source ID."), this.types.get(e)
                }
                getTargetType(e) {
                    return (0, o.invariant)(this.isTargetId(e), "Expected a valid target ID."), this.types.get(e)
                }
                isSourceId(e) {
                    return G(e) === B.SOURCE
                }
                isTargetId(e) {
                    return G(e) === B.TARGET
                }
                removeSource(e) {
                    var t;
                    (0, o.invariant)(this.getSource(e), "Expected an existing source."), this.store.dispatch(function(e) {
                        return {
                            type: H,
                            payload: {
                                sourceId: e
                            }
                        }
                    }(e)), t = () => {
                        this.dragSources.delete(e), this.types.delete(e)
                    }, L.enqueueTask(_.create(t))
                }
                removeTarget(e) {
                    (0, o.invariant)(this.getTarget(e), "Expected an existing target."), this.store.dispatch(function(e) {
                        return {
                            type: A,
                            payload: {
                                targetId: e
                            }
                        }
                    }(e)), this.dropTargets.delete(e), this.types.delete(e)
                }
                pinSource(e) {
                    const t = this.getSource(e);
                    (0, o.invariant)(t, "Expected an existing source."), this.pinnedSourceId = e, this.pinnedSource = t
                }
                unpinSource() {
                    (0, o.invariant)(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null
                }
                addHandler(e, t, r) {
                    const n = q(e);
                    return this.types.set(n, t), e === B.SOURCE ? this.dragSources.set(n, r) : e === B.TARGET && this.dropTargets.set(n, r), n
                }
                constructor(e) {
                    this.types = new Map, this.dragSources = new Map, this.dropTargets = new Map, this.pinnedSourceId = null, this.pinnedSource = null, this.store = e
                }
            }
            const W = (e, t) => e === t;

            function $(e = w, t) {
                switch (t.type) {
                    case d:
                        break;
                    case k:
                    case j:
                    case A:
                    case H:
                        return w;
                    default:
                        return E
                }
                const {
                    targetIds: r = [],
                    prevTargetIds: n = []
                } = t.payload, i = function(e, t) {
                    const r = new Map,
                        n = e => {
                            r.set(e, r.has(e) ? r.get(e) + 1 : 1)
                        };
                    e.forEach(n), t.forEach(n);
                    const i = [];
                    return r.forEach(((e, t) => {
                        1 === e && i.push(t)
                    })), i
                }(r, n);
                if (!(i.length > 0 || ! function(e, t, r = W) {
                        if (e.length !== t.length) return !1;
                        for (let n = 0; n < e.length; ++n)
                            if (!r(e[n], t[n])) return !1;
                        return !0
                    }(r, n))) return w;
                const o = n[n.length - 1],
                    s = r[r.length - 1];
                return o !== s && (o && i.push(o), s && i.push(s)), i
            }

            function V(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            const K = {
                initialSourceClientOffset: null,
                initialClientOffset: null,
                clientOffset: null
            };

            function z(e = K, t) {
                const {
                    payload: r
                } = t;
                switch (t.type) {
                    case a:
                    case c:
                        return {
                            initialSourceClientOffset: r.sourceClientOffset,
                            initialClientOffset: r.clientOffset,
                            clientOffset: r.clientOffset
                        };
                    case d:
                        return n = e.clientOffset, i = r.clientOffset, !n && !i || n && i && n.x === i.x && n.y === i.y ? e : function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                })))), n.forEach((function(t) {
                                    V(e, t, r[t])
                                }))
                            }
                            return e
                        }({}, e, {
                            clientOffset: r.clientOffset
                        });
                    case g:
                    case l:
                        return K;
                    default:
                        return e
                }
                var n, i
            }

            function J(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function Q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    })))), n.forEach((function(t) {
                        J(e, t, r[t])
                    }))
                }
                return e
            }
            const Z = {
                itemType: null,
                item: null,
                sourceId: null,
                targetIds: [],
                dropResult: null,
                didDrop: !1,
                isSourcePublic: null
            };

            function ee(e = Z, t) {
                const {
                    payload: r
                } = t;
                switch (t.type) {
                    case c:
                        return Q({}, e, {
                            itemType: r.itemType,
                            item: r.item,
                            sourceId: r.sourceId,
                            isSourcePublic: r.isSourcePublic,
                            dropResult: null,
                            didDrop: !1
                        });
                    case u:
                        return Q({}, e, {
                            isSourcePublic: !0
                        });
                    case d:
                        return Q({}, e, {
                            targetIds: r.targetIds
                        });
                    case A:
                        return -1 === e.targetIds.indexOf(r.targetId) ? e : Q({}, e, {
                            targetIds: (n = e.targetIds, i = r.targetId, n.filter((e => e !== i)))
                        });
                    case l:
                        return Q({}, e, {
                            dropResult: r.dropResult,
                            didDrop: !0,
                            targetIds: []
                        });
                    case g:
                        return Q({}, e, {
                            itemType: null,
                            item: null,
                            sourceId: null,
                            dropResult: null,
                            didDrop: !1,
                            isSourcePublic: null,
                            targetIds: []
                        });
                    default:
                        return e
                }
                var n, i
            }

            function te(e = 0, t) {
                switch (t.type) {
                    case k:
                    case j:
                        return e + 1;
                    case H:
                    case A:
                        return e - 1;
                    default:
                        return e
                }
            }

            function re(e = 0) {
                return e + 1
            }

            function ne(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function ie(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    })))), n.forEach((function(t) {
                        ne(e, t, r[t])
                    }))
                }
                return e
            }

            function oe(e = {}, t) {
                return {
                    dirtyHandlerIds: $(e.dirtyHandlerIds, {
                        type: t.type,
                        payload: ie({}, t.payload, {
                            prevTargetIds: (r = e, n = "dragOperation.targetIds",
                                i = [], n.split(".").reduce(((e, t) => e && e[t] ? e[t] : i || null), r))
                        })
                    }),
                    dragOffset: z(e.dragOffset, t),
                    refCount: te(e.refCount, t),
                    dragOperation: ee(e.dragOperation, t),
                    stateId: re(e.stateId)
                };
                var r, n, i
            }

            function se(e, t, r = {}, n = !1) {
                const o = function(e) {
                        const t = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__;
                        return (0, i.createStore)(oe, e && t && t({
                            name: "dnd-core",
                            instanceId: "dnd-core"
                        }))
                    }(n),
                    s = new C(o, new X(o)),
                    a = new I(o, s),
                    c = e(a, t, r);
                return a.receiveBackend(c), a
            }
            var ae = r(50959),
                ce = r(181904);

            function ue(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }
            let de = 0;
            const le = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
            var ge = (0, ae.memo)((function(e) {
                var {
                    children: t
                } = e, r = ue(e, ["children"]);
                const [i, o] = function(e) {
                    if ("manager" in e) {
                        return [{
                            dragDropManager: e.manager
                        }, !1]
                    }
                    const t = function(e, t = he(), r, n) {
                            const i = t;
                            i[le] || (i[le] = {
                                dragDropManager: se(e, t, r, n)
                            });
                            return i[le]
                        }(e.backend, e.context, e.options, e.debugMode),
                        r = !e.context;
                    return [t, r]
                }(r);
                return (0, ae.useEffect)((() => {
                    if (o) {
                        const e = he();
                        return ++de, () => {
                            0 == --de && (e[le] = null)
                        }
                    }
                }), []), (0, n.jsx)(ce.DndContext.Provider, {
                    value: i,
                    children: t
                })
            }));

            function he() {
                return "undefined" != typeof global ? global : window
            }
        },
        191701: (e, t, r) => {
            "use strict";
            r.d(t, {
                useCollectedProps: () => o
            });
            var n = r(76121),
                i = r(474401);

            function o(e, t, r) {
                return function(e, t, r) {
                    const [o, s] = (0, n.useCollector)(e, t, r);
                    return (0, i.useIsomorphicLayoutEffect)((function() {
                        const t = e.getHandlerId();
                        if (null != t) return e.subscribeToStateChange(s, {
                            handlerIds: [t]
                        })
                    }), [e, s]), o
                }(t, e || (() => ({})), (() => r.reconnect()))
            }
        },
        76121: (e, t, r) => {
            "use strict";
            r.d(t, {
                useCollector: () => s
            });
            var n = r(203341),
                i = r(50959),
                o = r(474401);

            function s(e, t, r) {
                const [s, a] = (0, i.useState)((() => t(e))), c = (0, i.useCallback)((() => {
                    const i = t(e);
                    n(s, i) || (a(i), r && r())
                }), [s, e, r]);
                return (0, o.useIsomorphicLayoutEffect)(c), [s, c]
            }
        },
        42357: (e, t, r) => {
            "use strict";
            r.d(t, {
                useDrag: () => S
            });
            var n = r(6346),
                i = r(191701),
                o = r(582442),
                s = r(50959);

            function a(e) {
                return (0, s.useMemo)((() => e.hooks.dragSource()), [e])
            }

            function c(e) {
                return (0, s.useMemo)((() => e.hooks.dragPreview()), [e])
            }
            var u = r(398789),
                d = r(71982),
                l = r(312406);
            class g {
                receiveHandlerId(e) {
                    this.handlerId !== e && (this.handlerId = e, this.reconnect())
                }
                get connectTarget() {
                    return this.dragSource
                }
                get dragSourceOptions() {
                    return this.dragSourceOptionsInternal
                }
                set dragSourceOptions(e) {
                    this.dragSourceOptionsInternal = e
                }
                get dragPreviewOptions() {
                    return this.dragPreviewOptionsInternal
                }
                set dragPreviewOptions(e) {
                    this.dragPreviewOptionsInternal = e
                }
                reconnect() {
                    const e = this.reconnectDragSource();
                    this.reconnectDragPreview(e)
                }
                reconnectDragSource() {
                    const e = this.dragSource,
                        t = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
                    return t && this.disconnectDragSource(), this.handlerId ? e ? (t && (this.lastConnectedHandlerId = this.handlerId,
                        this.lastConnectedDragSource = e, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, e, this.dragSourceOptions)), t) : (this.lastConnectedDragSource = e, t) : t
                }
                reconnectDragPreview(e = !1) {
                    const t = this.dragPreview,
                        r = e || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
                    r && this.disconnectDragPreview(), this.handlerId && (t ? r && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = t, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, t, this.dragPreviewOptions)) : this.lastConnectedDragPreview = t)
                }
                didHandlerIdChange() {
                    return this.lastConnectedHandlerId !== this.handlerId
                }
                didConnectedDragSourceChange() {
                    return this.lastConnectedDragSource !== this.dragSource
                }
                didConnectedDragPreviewChange() {
                    return this.lastConnectedDragPreview !== this.dragPreview
                }
                didDragSourceOptionsChange() {
                    return !(0, u.shallowEqual)(this.lastConnectedDragSourceOptions, this.dragSourceOptions)
                }
                didDragPreviewOptionsChange() {
                    return !(0, u.shallowEqual)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions)
                }
                disconnectDragSource() {
                    this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0)
                }
                disconnectDragPreview() {
                    this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null)
                }
                get dragSource() {
                    return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current
                }
                get dragPreview() {
                    return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current
                }
                clearDragSource() {
                    this.dragSourceNode = null, this.dragSourceRef = null
                }
                clearDragPreview() {
                    this.dragPreviewNode = null, this.dragPreviewRef = null
                }
                constructor(e) {
                    this.hooks = (0, l.wrapConnectorHooks)({
                        dragSource: (e, t) => {
                            this.clearDragSource(), this.dragSourceOptions = t || null, (0, d.isRef)(e) ? this.dragSourceRef = e : this.dragSourceNode = e, this.reconnectDragSource()
                        },
                        dragPreview: (e, t) => {
                            this.clearDragPreview(), this.dragPreviewOptions = t || null, (0, d.isRef)(e) ? this.dragPreviewRef = e : this.dragPreviewNode = e, this.reconnectDragPreview()
                        }
                    }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = e
                }
            }
            var h = r(284570),
                f = r(474401);
            let p = !1,
                v = !1;
            class m {
                receiveHandlerId(e) {
                    this.sourceId = e
                }
                getHandlerId() {
                    return this.sourceId
                }
                canDrag() {
                    (0, n.invariant)(!p, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
                    try {
                        return p = !0, this.internalMonitor.canDragSource(this.sourceId)
                    } finally {
                        p = !1
                    }
                }
                isDragging() {
                    if (!this.sourceId) return !1;
                    (0,
                        n.invariant)(!v, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
                    try {
                        return v = !0, this.internalMonitor.isDraggingSource(this.sourceId)
                    } finally {
                        v = !1
                    }
                }
                subscribeToStateChange(e, t) {
                    return this.internalMonitor.subscribeToStateChange(e, t)
                }
                isDraggingSource(e) {
                    return this.internalMonitor.isDraggingSource(e)
                }
                isOverTarget(e, t) {
                    return this.internalMonitor.isOverTarget(e, t)
                }
                getTargetIds() {
                    return this.internalMonitor.getTargetIds()
                }
                isSourcePublic() {
                    return this.internalMonitor.isSourcePublic()
                }
                getSourceId() {
                    return this.internalMonitor.getSourceId()
                }
                subscribeToOffsetChange(e) {
                    return this.internalMonitor.subscribeToOffsetChange(e)
                }
                canDragSource(e) {
                    return this.internalMonitor.canDragSource(e)
                }
                canDropOnTarget(e) {
                    return this.internalMonitor.canDropOnTarget(e)
                }
                getItemType() {
                    return this.internalMonitor.getItemType()
                }
                getItem() {
                    return this.internalMonitor.getItem()
                }
                getDropResult() {
                    return this.internalMonitor.getDropResult()
                }
                didDrop() {
                    return this.internalMonitor.didDrop()
                }
                getInitialClientOffset() {
                    return this.internalMonitor.getInitialClientOffset()
                }
                getInitialSourceClientOffset() {
                    return this.internalMonitor.getInitialSourceClientOffset()
                }
                getSourceClientOffset() {
                    return this.internalMonitor.getSourceClientOffset()
                }
                getClientOffset() {
                    return this.internalMonitor.getClientOffset()
                }
                getDifferenceFromInitialOffset() {
                    return this.internalMonitor.getDifferenceFromInitialOffset()
                }
                constructor(e) {
                    this.sourceId = null, this.internalMonitor = e.getMonitor()
                }
            }
            var D = r(887408);
            class y {
                beginDrag() {
                    const e = this.spec,
                        t = this.monitor;
                    let r = null;
                    return r = "object" == typeof e.item ? e.item : "function" == typeof e.item ? e.item(t) : {}, null != r ? r : null
                }
                canDrag() {
                    const e = this.spec,
                        t = this.monitor;
                    return "boolean" == typeof e.canDrag ? e.canDrag : "function" != typeof e.canDrag || e.canDrag(t)
                }
                isDragging(e, t) {
                    const r = this.spec,
                        n = this.monitor,
                        {
                            isDragging: i
                        } = r;
                    return i ? i(n) : t === e.getSourceId()
                }
                endDrag() {
                    const e = this.spec,
                        t = this.monitor,
                        r = this.connector,
                        {
                            end: n
                        } = e;
                    n && n(t.getItem(), t), r.reconnect()
                }
                constructor(e, t, r) {
                    this.spec = e, this.monitor = t, this.connector = r
                }
            }

            function O(e, t, r) {
                const i = (0, h.useDragDropManager)(),
                    o = function(e, t, r) {
                        const n = (0, s.useMemo)((() => new y(e, t, r)), [t, r]);
                        return (0, s.useEffect)((() => {
                            n.spec = e
                        }), [e]), n
                    }(e, t, r),
                    a = function(e) {
                        return (0, s.useMemo)((() => {
                            const t = e.type;
                            return (0, n.invariant)(null != t, "spec.type must be defined"), t
                        }), [e])
                    }(e);
                (0, f.useIsomorphicLayoutEffect)((function() {
                    if (null != a) {
                        const [e, n] = (0, D.registerSource)(a, o, i);
                        return t.receiveHandlerId(e), r.receiveHandlerId(e), n
                    }
                }), [i, t, r, o, a])
            }

            function S(e, t) {
                const r = (0, o.useOptionalFactory)(e, t);
                (0, n.invariant)(!r.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
                const u = function() {
                        const e = (0, h.useDragDropManager)();
                        return (0, s.useMemo)((() => new m(e)), [e])
                    }(),
                    d = function(e, t) {
                        const r = (0, h.useDragDropManager)(),
                            n = (0, s.useMemo)((() => new g(r.getBackend())), [r]);
                        return (0,
                            f.useIsomorphicLayoutEffect)((() => (n.dragSourceOptions = e || null, n.reconnect(), () => n.disconnectDragSource())), [n, e]), (0, f.useIsomorphicLayoutEffect)((() => (n.dragPreviewOptions = t || null, n.reconnect(), () => n.disconnectDragPreview())), [n, t]), n
                    }(r.options, r.previewOptions);
                return O(r, u, d), [(0, i.useCollectedProps)(r.collect, u, d), a(d), c(d)]
            }
        },
        284570: (e, t, r) => {
            "use strict";
            r.d(t, {
                useDragDropManager: () => s
            });
            var n = r(6346),
                i = r(50959),
                o = r(181904);

            function s() {
                const {
                    dragDropManager: e
                } = (0, i.useContext)(o.DndContext);
                return (0, n.invariant)(null != e, "Expected drag drop context"), e
            }
        },
        240933: (e, t, r) => {
            "use strict";
            r.d(t, {
                useDrop: () => y
            });
            var n = r(191701),
                i = r(582442),
                o = r(50959);

            function s(e) {
                return (0, o.useMemo)((() => e.hooks.dropTarget()), [e])
            }
            var a = r(398789),
                c = r(71982),
                u = r(312406);
            class d {
                get connectTarget() {
                    return this.dropTarget
                }
                reconnect() {
                    const e = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
                    e && this.disconnectDropTarget();
                    const t = this.dropTarget;
                    this.handlerId && (t ? e && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = t, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, t, this.dropTargetOptions)) : this.lastConnectedDropTarget = t)
                }
                receiveHandlerId(e) {
                    e !== this.handlerId && (this.handlerId = e, this.reconnect())
                }
                get dropTargetOptions() {
                    return this.dropTargetOptionsInternal
                }
                set dropTargetOptions(e) {
                    this.dropTargetOptionsInternal = e
                }
                didHandlerIdChange() {
                    return this.lastConnectedHandlerId !== this.handlerId
                }
                didDropTargetChange() {
                    return this.lastConnectedDropTarget !== this.dropTarget
                }
                didOptionsChange() {
                    return !(0, a.shallowEqual)(this.lastConnectedDropTargetOptions, this.dropTargetOptions)
                }
                disconnectDropTarget() {
                    this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0)
                }
                get dropTarget() {
                    return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current
                }
                clearDropTarget() {
                    this.dropTargetRef = null, this.dropTargetNode = null
                }
                constructor(e) {
                    this.hooks = (0, u.wrapConnectorHooks)({
                        dropTarget: (e, t) => {
                            this.clearDropTarget(), this.dropTargetOptions = t, (0, c.isRef)(e) ? this.dropTargetRef = e : this.dropTargetNode = e, this.reconnect()
                        }
                    }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = e
                }
            }
            var l = r(284570),
                g = r(474401);
            var h = r(6346);
            let f = !1;
            class p {
                receiveHandlerId(e) {
                    this.targetId = e
                }
                getHandlerId() {
                    return this.targetId
                }
                subscribeToStateChange(e, t) {
                    return this.internalMonitor.subscribeToStateChange(e, t)
                }
                canDrop() {
                    if (!this.targetId) return !1;
                    (0, h.invariant)(!f, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
                    try {
                        return f = !0, this.internalMonitor.canDropOnTarget(this.targetId)
                    } finally {
                        f = !1
                    }
                }
                isOver(e) {
                    return !!this.targetId && this.internalMonitor.isOverTarget(this.targetId, e)
                }
                getItemType() {
                    return this.internalMonitor.getItemType()
                }
                getItem() {
                    return this.internalMonitor.getItem()
                }
                getDropResult() {
                    return this.internalMonitor.getDropResult()
                }
                didDrop() {
                    return this.internalMonitor.didDrop()
                }
                getInitialClientOffset() {
                    return this.internalMonitor.getInitialClientOffset()
                }
                getInitialSourceClientOffset() {
                    return this.internalMonitor.getInitialSourceClientOffset()
                }
                getSourceClientOffset() {
                    return this.internalMonitor.getSourceClientOffset()
                }
                getClientOffset() {
                    return this.internalMonitor.getClientOffset()
                }
                getDifferenceFromInitialOffset() {
                    return this.internalMonitor.getDifferenceFromInitialOffset()
                }
                constructor(e) {
                    this.targetId = null, this.internalMonitor = e.getMonitor()
                }
            }
            var v = r(887408);
            class m {
                canDrop() {
                    const e = this.spec,
                        t = this.monitor;
                    return !e.canDrop || e.canDrop(t.getItem(), t)
                }
                hover() {
                    const e = this.spec,
                        t = this.monitor;
                    e.hover && e.hover(t.getItem(), t)
                }
                drop() {
                    const e = this.spec,
                        t = this.monitor;
                    if (e.drop) return e.drop(t.getItem(), t)
                }
                constructor(e, t) {
                    this.spec = e, this.monitor = t
                }
            }

            function D(e, t, r) {
                const n = (0, l.useDragDropManager)(),
                    i = function(e, t) {
                        const r = (0, o.useMemo)((() => new m(e, t)), [t]);
                        return (0, o.useEffect)((() => {
                            r.spec = e
                        }), [e]), r
                    }(e, t),
                    s = function(e) {
                        const {
                            accept: t
                        } = e;
                        return (0, o.useMemo)((() => ((0, h.invariant)(null != e.accept, "accept must be defined"), Array.isArray(t) ? t : [t])), [t])
                    }(e);
                (0, g.useIsomorphicLayoutEffect)((function() {
                    const [e, o] = (0, v.registerTarget)(s, i, n);
                    return t.receiveHandlerId(e), r.receiveHandlerId(e), o
                }), [n, t, i, r, s.map((e => e.toString())).join("|")])
            }

            function y(e, t) {
                const r = (0, i.useOptionalFactory)(e, t),
                    a = function() {
                        const e = (0, l.useDragDropManager)();
                        return (0, o.useMemo)((() => new p(e)), [e])
                    }(),
                    c = function(e) {
                        const t = (0, l.useDragDropManager)(),
                            r = (0, o.useMemo)((() => new d(t.getBackend())), [t]);
                        return (0, g.useIsomorphicLayoutEffect)((() => (r.dropTargetOptions = e || null, r.reconnect(), () => r.disconnectDropTarget())), [e]), r
                    }(r.options);
                return D(r, a, c), [(0, n.useCollectedProps)(r.collect, a, c), s(c)]
            }
        },
        474401: (e, t, r) => {
            "use strict";
            r.d(t, {
                useIsomorphicLayoutEffect: () => i
            });
            var n = r(50959);
            const i = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect
        },
        582442: (e, t, r) => {
            "use strict";
            r.d(t, {
                useOptionalFactory: () => i
            });
            var n = r(50959);

            function i(e, t) {
                const r = [...t || []];
                return null == t && "function" != typeof e && r.push(e), (0, n.useMemo)((() => "function" == typeof e ? e() : e), r)
            }
        },
        71982: (e, t, r) => {
            "use strict";

            function n(e) {
                return null !== e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
            }
            r.d(t, {
                isRef: () => n
            })
        },
        887408: (e, t, r) => {
            "use strict";

            function n(e, t, r) {
                const n = r.getRegistry(),
                    i = n.addTarget(e, t);
                return [i, () => n.removeTarget(i)]
            }

            function i(e, t, r) {
                const n = r.getRegistry(),
                    i = n.addSource(e, t);
                return [i, () => n.removeSource(i)]
            }
            r.d(t, {
                registerTarget: () => n,
                registerSource: () => i
            })
        },
        312406: (e, t, r) => {
            "use strict";
            r.d(t, {
                wrapConnectorHooks: () => s
            });
            var n = r(6346),
                i = r(50959);

            function o(e) {
                return (t = null, r = null) => {
                    if (!(0, i.isValidElement)(t)) {
                        const n = t;
                        return e(n, r), n
                    }
                    const o = t;
                    ! function(e) {
                        if ("string" == typeof e.type) return;
                        const t = e.type.displayName || e.type.name || "the component";
                        throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`)
                    }(o);
                    return function(e, t) {
                        const r = e.ref;
                        return (0, n.invariant)("string" != typeof r, "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), r ? (0, i.cloneElement)(e, {
                            ref: e => {
                                a(r, e), a(t, e)
                            }
                        }) : (0, i.cloneElement)(e, {
                            ref: t
                        })
                    }(o, r ? t => e(t, r) : e)
                }
            }

            function s(e) {
                const t = {};
                return Object.keys(e).forEach((r => {
                    const n = e[r];
                    if (r.endsWith("Ref")) t[r] = e[r];
                    else {
                        const e = o(n);
                        t[r] = () => e
                    }
                })), t
            }

            function a(e, t) {
                "function" == typeof e ? e(t) : e.current = t
            }
        }
    }
]);
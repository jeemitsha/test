(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [1387], {
        961970: e => {
            var t = "undefined" != typeof Element,
                n = "function" == typeof Map,
                r = "function" == typeof Set,
                o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;

            function i(e, a) {
                if (e === a) return !0;
                if (e && a && "object" == typeof e && "object" == typeof a) {
                    if (e.constructor !== a.constructor) return !1;
                    var s, f, c, u;
                    if (Array.isArray(e)) {
                        if ((s = e.length) != a.length) return !1;
                        for (f = s; 0 != f--;)
                            if (!i(e[f], a[f])) return !1;
                        return !0
                    }
                    if (n && e instanceof Map && a instanceof Map) {
                        if (e.size !== a.size) return !1;
                        for (u = e.entries(); !(f = u.next()).done;)
                            if (!a.has(f.value[0])) return !1;
                        for (u = e.entries(); !(f = u.next()).done;)
                            if (!i(f.value[1], a.get(f.value[0]))) return !1;
                        return !0
                    }
                    if (r && e instanceof Set && a instanceof Set) {
                        if (e.size !== a.size) return !1;
                        for (u = e.entries(); !(f = u.next()).done;)
                            if (!a.has(f.value[0])) return !1;
                        return !0
                    }
                    if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(a)) {
                        if ((s = e.length) != a.length) return !1;
                        for (f = s; 0 != f--;)
                            if (e[f] !== a[f]) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === a.source && e.flags === a.flags;
                    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === a.valueOf();
                    if (e.toString !== Object.prototype.toString) return e.toString() === a.toString();
                    if ((s = (c = Object.keys(e)).length) !== Object.keys(a).length) return !1;
                    for (f = s; 0 != f--;)
                        if (!Object.prototype.hasOwnProperty.call(a, c[f])) return !1;
                    if (t && e instanceof Element) return !1;
                    for (f = s; 0 != f--;)
                        if (("_owner" !== c[f] && "__v" !== c[f] && "__o" !== c[f] || !e.$$typeof) && !i(e[c[f]], a[c[f]])) return !1;
                    return !0
                }
                return e != e && a != a
            }
            e.exports = function(e, t) {
                try {
                    return i(e, t)
                } catch (e) {
                    if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw e
                }
            }
        },
        595320: (e, t, n) => {
            "use strict";
            n.d(t, {
                ManagerReferenceNodeContext: () => o,
                ManagerReferenceNodeSetterContext: () => i,
                Manager: () => a
            });
            var r = n(50959),
                o = r.createContext(),
                i = r.createContext();

            function a(e) {
                var t = e.children,
                    n = r.useState(null),
                    a = n[0],
                    s = n[1];
                return r.useEffect((function() {
                    return function() {
                        s(null)
                    }
                }), [s]), r.createElement(o.Provider, {
                    value: a
                }, r.createElement(i.Provider, {
                    value: s
                }, t))
            }
        },
        401387: (e, t, n) => {
            "use strict";
            n.d(t, {
                Popper: () => u
            });
            var r = n(50959),
                o = n(595320),
                i = n(491854),
                a = n(956594),
                s = function() {},
                f = function() {
                    return Promise.resolve(null)
                },
                c = [];

            function u(e) {
                var t = e.placement,
                    n = void 0 === t ? "bottom" : t,
                    u = e.strategy,
                    p = void 0 === u ? "absolute" : u,
                    l = e.modifiers,
                    d = void 0 === l ? c : l,
                    m = e.referenceElement,
                    h = e.onFirstUpdate,
                    v = e.innerRef,
                    y = e.children,
                    g = r.useContext(o.ManagerReferenceNodeContext),
                    b = r.useState(null),
                    w = b[0],
                    x = b[1],
                    O = r.useState(null),
                    E = O[0],
                    j = O[1];
                r.useEffect((function() {
                    (0, i.setRef)(v, w)
                }), [v, w]);
                var A = r.useMemo((function() {
                        return {
                            placement: n,
                            strategy: p,
                            onFirstUpdate: h,
                            modifiers: [].concat(d, [{
                                name: "arrow",
                                enabled: null != E,
                                options: {
                                    element: E
                                }
                            }])
                        }
                    }), [n, p, h, d, E]),
                    D = (0, a.usePopper)(m || g, w, A),
                    P = D.state,
                    k = D.styles,
                    M = D.forceUpdate,
                    S = D.update,
                    R = r.useMemo((function() {
                        return {
                            ref: x,
                            style: k.popper,
                            placement: P ? P.placement : n,
                            hasPopperEscaped: P && P.modifiersData.hide ? P.modifiersData.hide.hasPopperEscaped : null,
                            isReferenceHidden: P && P.modifiersData.hide ? P.modifiersData.hide.isReferenceHidden : null,
                            arrowProps: {
                                style: k.arrow,
                                ref: j
                            },
                            forceUpdate: M || s,
                            update: S || f
                        }
                    }), [x, j, n, P, k, S, M]);
                return (0, i.unwrapArray)(y)(R)
            }
        },
        956594: (e, t, n) => {
            "use strict";
            n.d(t, {
                usePopper: () => we
            });
            var r = n(50959);

            function o(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function i(e) {
                return e instanceof o(e).Element || e instanceof Element
            }

            function a(e) {
                return e instanceof o(e).HTMLElement || e instanceof HTMLElement
            }

            function s(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof o(e).ShadowRoot || e instanceof ShadowRoot)
            }
            var f = Math.max,
                c = Math.min,
                u = Math.round;

            function p() {
                var e = navigator.userAgentData;
                return null != e && e.brands ? e.brands.map((function(e) {
                    return e.brand + "/" + e.version
                })).join(" ") : navigator.userAgent
            }

            function l() {
                return !/^((?!chrome|android).)*safari/i.test(p())
            }

            function d(e, t, n) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                var r = e.getBoundingClientRect(),
                    s = 1,
                    f = 1;
                t && a(e) && (s = e.offsetWidth > 0 && u(r.width) / e.offsetWidth || 1, f = e.offsetHeight > 0 && u(r.height) / e.offsetHeight || 1);
                var c = (i(e) ? o(e) : window).visualViewport,
                    p = !l() && n,
                    d = (r.left + (p && c ? c.offsetLeft : 0)) / s,
                    m = (r.top + (p && c ? c.offsetTop : 0)) / f,
                    h = r.width / s,
                    v = r.height / f;
                return {
                    width: h,
                    height: v,
                    top: m,
                    right: d + h,
                    bottom: m + v,
                    left: d,
                    x: d,
                    y: m
                }
            }

            function m(e) {
                var t = o(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function h(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function v(e) {
                return ((i(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function y(e) {
                return d(v(e)).left + m(e).scrollLeft
            }

            function g(e) {
                return o(e).getComputedStyle(e)
            }

            function b(e) {
                var t = g(e),
                    n = t.overflow,
                    r = t.overflowX,
                    o = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + o + r)
            }

            function w(e, t, n) {
                void 0 === n && (n = !1);
                var r, i, s = a(t),
                    f = a(t) && function(e) {
                        var t = e.getBoundingClientRect(),
                            n = u(t.width) / e.offsetWidth || 1,
                            r = u(t.height) / e.offsetHeight || 1;
                        return 1 !== n || 1 !== r
                    }(t),
                    c = v(t),
                    p = d(e, f, n),
                    l = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    g = {
                        x: 0,
                        y: 0
                    };
                return (s || !s && !n) && (("body" !== h(t) || b(c)) && (l = (r = t) !== o(r) && a(r) ? {
                    scrollLeft: (i = r).scrollLeft,
                    scrollTop: i.scrollTop
                } : m(r)), a(t) ? ((g = d(t, !0)).x += t.clientLeft, g.y += t.clientTop) : c && (g.x = y(c))), {
                    x: p.left + l.scrollLeft - g.x,
                    y: p.top + l.scrollTop - g.y,
                    width: p.width,
                    height: p.height
                }
            }

            function x(e) {
                var t = d(e),
                    n = e.offsetWidth,
                    r = e.offsetHeight;
                return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: n,
                    height: r
                }
            }

            function O(e) {
                return "html" === h(e) ? e : e.assignedSlot || e.parentNode || (s(e) ? e.host : null) || v(e)
            }

            function E(e) {
                return ["html", "body", "#document"].indexOf(h(e)) >= 0 ? e.ownerDocument.body : a(e) && b(e) ? e : E(O(e))
            }

            function j(e, t) {
                var n;
                void 0 === t && (t = []);
                var r = E(e),
                    i = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    a = o(r),
                    s = i ? [a].concat(a.visualViewport || [], b(r) ? r : []) : r,
                    f = t.concat(s);
                return i ? f : f.concat(j(O(s)))
            }

            function A(e) {
                return ["table", "td", "th"].indexOf(h(e)) >= 0
            }

            function D(e) {
                return a(e) && "fixed" !== g(e).position ? e.offsetParent : null
            }

            function P(e) {
                for (var t = o(e), n = D(e); n && A(n) && "static" === g(n).position;) n = D(n);
                return n && ("html" === h(n) || "body" === h(n) && "static" === g(n).position) ? t : n || function(e) {
                    var t = /firefox/i.test(p());
                    if (/Trident/i.test(p()) && a(e) && "fixed" === g(e).position) return null;
                    var n = O(e);
                    for (s(n) && (n = n.host); a(n) && ["html", "body"].indexOf(h(n)) < 0;) {
                        var r = g(n);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }
            var k = "top",
                M = "bottom",
                S = "right",
                R = "left",
                L = "auto",
                B = [k, M, S, R],
                W = "start",
                H = "end",
                C = "viewport",
                T = "popper",
                U = B.reduce((function(e, t) {
                    return e.concat([t + "-" + W, t + "-" + H])
                }), []),
                V = [].concat(B, [L]).reduce((function(e, t) {
                    return e.concat([t, t + "-" + W, t + "-" + H])
                }), []),
                q = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

            function F(e) {
                var t = new Map,
                    n = new Set,
                    r = [];

                function o(e) {
                    n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                        if (!n.has(e)) {
                            var r = t.get(e);
                            r && o(r)
                        }
                    })), r.push(e)
                }
                return e.forEach((function(e) {
                    t.set(e.name, e)
                })), e.forEach((function(e) {
                    n.has(e.name) || o(e)
                })), r
            }
            var N = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function I() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some((function(e) {
                    return !(e && "function" == typeof e.getBoundingClientRect)
                }))
            }

            function _(e) {
                void 0 === e && (e = {});
                var t = e,
                    n = t.defaultModifiers,
                    r = void 0 === n ? [] : n,
                    o = t.defaultOptions,
                    a = void 0 === o ? N : o;
                return function(e, t, n) {
                    void 0 === n && (n = a);
                    var o, s, f = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, N, a),
                            modifiersData: {},
                            elements: {
                                reference: e,
                                popper: t
                            },
                            attributes: {},
                            styles: {}
                        },
                        c = [],
                        u = !1,
                        p = {
                            state: f,
                            setOptions: function(n) {
                                var o = "function" == typeof n ? n(f.options) : n;
                                l(), f.options = Object.assign({}, a, f.options, o), f.scrollParents = {
                                    reference: i(e) ? j(e) : e.contextElement ? j(e.contextElement) : [],
                                    popper: j(t)
                                };
                                var s = function(e) {
                                    var t = F(e);
                                    return q.reduce((function(e, n) {
                                        return e.concat(t.filter((function(e) {
                                            return e.phase === n
                                        })))
                                    }), [])
                                }(function(e) {
                                    var t = e.reduce((function(e, t) {
                                        var n = e[t.name];
                                        return e[t.name] = n ? Object.assign({}, n, t, {
                                            options: Object.assign({}, n.options, t.options),
                                            data: Object.assign({}, n.data, t.data)
                                        }) : t, e
                                    }), {});
                                    return Object.keys(t).map((function(e) {
                                        return t[e]
                                    }))
                                }([].concat(r, f.options.modifiers)));
                                return f.orderedModifiers = s.filter((function(e) {
                                    return e.enabled
                                })), f.orderedModifiers.forEach((function(e) {
                                    var t = e.name,
                                        n = e.options,
                                        r = void 0 === n ? {} : n,
                                        o = e.effect;
                                    if ("function" == typeof o) {
                                        var i = o({
                                                state: f,
                                                name: t,
                                                instance: p,
                                                options: r
                                            }),
                                            a = function() {};
                                        c.push(i || a)
                                    }
                                })), p.update()
                            },
                            forceUpdate: function() {
                                if (!u) {
                                    var e = f.elements,
                                        t = e.reference,
                                        n = e.popper;
                                    if (I(t, n)) {
                                        f.rects = {
                                            reference: w(t, P(n), "fixed" === f.options.strategy),
                                            popper: x(n)
                                        }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach((function(e) {
                                            return f.modifiersData[e.name] = Object.assign({}, e.data)
                                        }));
                                        for (var r = 0; r < f.orderedModifiers.length; r++)
                                            if (!0 !== f.reset) {
                                                var o = f.orderedModifiers[r],
                                                    i = o.fn,
                                                    a = o.options,
                                                    s = void 0 === a ? {} : a,
                                                    c = o.name;
                                                "function" == typeof i && (f = i({
                                                    state: f,
                                                    options: s,
                                                    name: c,
                                                    instance: p
                                                }) || f)
                                            } else f.reset = !1, r = -1
                                    }
                                }
                            },
                            update: (o = function() {
                                return new Promise((function(e) {
                                    p.forceUpdate(), e(f)
                                }))
                            }, function() {
                                return s || (s = new Promise((function(e) {
                                    Promise.resolve().then((function() {
                                        s = void 0, e(o())
                                    }))
                                }))), s
                            }),
                            destroy: function() {
                                l(), u = !0
                            }
                        };
                    if (!I(e, t)) return p;

                    function l() {
                        c.forEach((function(e) {
                            return e()
                        })), c = []
                    }
                    return p.setOptions(n).then((function(e) {
                        !u && n.onFirstUpdate && n.onFirstUpdate(e)
                    })), p
                }
            }
            var z = {
                passive: !0
            };

            function X(e) {
                return e.split("-")[0]
            }

            function Y(e) {
                return e.split("-")[1]
            }

            function $(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function G(e) {
                var t, n = e.reference,
                    r = e.element,
                    o = e.placement,
                    i = o ? X(o) : null,
                    a = o ? Y(o) : null,
                    s = n.x + n.width / 2 - r.width / 2,
                    f = n.y + n.height / 2 - r.height / 2;
                switch (i) {
                    case k:
                        t = {
                            x: s,
                            y: n.y - r.height
                        };
                        break;
                    case M:
                        t = {
                            x: s,
                            y: n.y + n.height
                        };
                        break;
                    case S:
                        t = {
                            x: n.x + n.width,
                            y: f
                        };
                        break;
                    case R:
                        t = {
                            x: n.x - r.width,
                            y: f
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var c = i ? $(i) : null;
                if (null != c) {
                    var u = "y" === c ? "height" : "width";
                    switch (a) {
                        case W:
                            t[c] = t[c] - (n[u] / 2 - r[u] / 2);
                            break;
                        case H:
                            t[c] = t[c] + (n[u] / 2 - r[u] / 2)
                    }
                }
                return t
            }
            var J = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function K(e) {
                var t, n = e.popper,
                    r = e.popperRect,
                    i = e.placement,
                    a = e.variation,
                    s = e.offsets,
                    f = e.position,
                    c = e.gpuAcceleration,
                    p = e.adaptive,
                    l = e.roundOffsets,
                    d = e.isFixed,
                    m = s.x,
                    h = void 0 === m ? 0 : m,
                    y = s.y,
                    b = void 0 === y ? 0 : y,
                    w = "function" == typeof l ? l({
                        x: h,
                        y: b
                    }) : {
                        x: h,
                        y: b
                    };
                h = w.x, b = w.y;
                var x = s.hasOwnProperty("x"),
                    O = s.hasOwnProperty("y"),
                    E = R,
                    j = k,
                    A = window;
                if (p) {
                    var D = P(n),
                        L = "clientHeight",
                        B = "clientWidth";
                    if (D === o(n) && "static" !== g(D = v(n)).position && "absolute" === f && (L = "scrollHeight", B = "scrollWidth"), D = D, i === k || (i === R || i === S) && a === H) j = M, b -= (d && D === A && A.visualViewport ? A.visualViewport.height : D[L]) - r.height, b *= c ? 1 : -1;
                    if (i === R || (i === k || i === M) && a === H) E = S, h -= (d && D === A && A.visualViewport ? A.visualViewport.width : D[B]) - r.width, h *= c ? 1 : -1
                }
                var W, C = Object.assign({
                        position: f
                    }, p && J),
                    T = !0 === l ? function(e) {
                        var t = e.x,
                            n = e.y,
                            r = window.devicePixelRatio || 1;
                        return {
                            x: u(t * r) / r || 0,
                            y: u(n * r) / r || 0
                        }
                    }({
                        x: h,
                        y: b
                    }) : {
                        x: h,
                        y: b
                    };
                return h = T.x, b = T.y, c ? Object.assign({}, C, ((W = {})[j] = O ? "0" : "", W[E] = x ? "0" : "", W.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + b + "px)" : "translate3d(" + h + "px, " + b + "px, 0)", W)) : Object.assign({}, C, ((t = {})[j] = O ? b + "px" : "", t[E] = x ? h + "px" : "", t.transform = "", t))
            }
            const Q = {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function(e) {
                    var t = e.state,
                        n = e.options,
                        r = e.name,
                        o = n.offset,
                        i = void 0 === o ? [0, 0] : o,
                        a = V.reduce((function(e, n) {
                            return e[n] = function(e, t, n) {
                                var r = X(e),
                                    o = [R, k].indexOf(r) >= 0 ? -1 : 1,
                                    i = "function" == typeof n ? n(Object.assign({}, t, {
                                        placement: e
                                    })) : n,
                                    a = i[0],
                                    s = i[1];
                                return a = a || 0, s = (s || 0) * o, [R, S].indexOf(r) >= 0 ? {
                                    x: s,
                                    y: a
                                } : {
                                    x: a,
                                    y: s
                                }
                            }(n, t.rects, i), e
                        }), {}),
                        s = a[t.placement],
                        f = s.x,
                        c = s.y;
                    null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = a
                }
            };
            var Z = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function ee(e) {
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return Z[e]
                }))
            }
            var te = {
                start: "end",
                end: "start"
            };

            function ne(e) {
                return e.replace(/start|end/g, (function(e) {
                    return te[e]
                }))
            }

            function re(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && s(n)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r)) return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }

            function oe(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function ie(e, t, n) {
                return t === C ? oe(function(e, t) {
                    var n = o(e),
                        r = v(e),
                        i = n.visualViewport,
                        a = r.clientWidth,
                        s = r.clientHeight,
                        f = 0,
                        c = 0;
                    if (i) {
                        a = i.width, s = i.height;
                        var u = l();
                        (u || !u && "fixed" === t) && (f = i.offsetLeft, c = i.offsetTop)
                    }
                    return {
                        width: a,
                        height: s,
                        x: f + y(e),
                        y: c
                    }
                }(e, n)) : i(t) ? function(e, t) {
                    var n = d(e, !1, "fixed" === t);
                    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
                }(t, n) : oe(function(e) {
                    var t, n = v(e),
                        r = m(e),
                        o = null == (t = e.ownerDocument) ? void 0 : t.body,
                        i = f(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                        a = f(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                        s = -r.scrollLeft + y(e),
                        c = -r.scrollTop;
                    return "rtl" === g(o || n).direction && (s += f(n.clientWidth, o ? o.clientWidth : 0) - i), {
                        width: i,
                        height: a,
                        x: s,
                        y: c
                    }
                }(v(e)))
            }

            function ae(e, t, n, r) {
                var o = "clippingParents" === t ? function(e) {
                        var t = j(O(e)),
                            n = ["absolute", "fixed"].indexOf(g(e).position) >= 0 && a(e) ? P(e) : e;
                        return i(n) ? t.filter((function(e) {
                            return i(e) && re(e, n) && "body" !== h(e)
                        })) : []
                    }(e) : [].concat(t),
                    s = [].concat(o, [n]),
                    u = s[0],
                    p = s.reduce((function(t, n) {
                        var o = ie(e, n, r);
                        return t.top = f(o.top, t.top), t.right = c(o.right, t.right), t.bottom = c(o.bottom, t.bottom), t.left = f(o.left, t.left), t
                    }), ie(e, u, r));
                return p.width = p.right - p.left, p.height = p.bottom - p.top, p.x = p.left, p.y = p.top, p
            }

            function se(e) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, e)
            }

            function fe(e, t) {
                return t.reduce((function(t, n) {
                    return t[n] = e, t
                }), {})
            }

            function ce(e, t) {
                void 0 === t && (t = {});
                var n = t,
                    r = n.placement,
                    o = void 0 === r ? e.placement : r,
                    a = n.strategy,
                    s = void 0 === a ? e.strategy : a,
                    f = n.boundary,
                    c = void 0 === f ? "clippingParents" : f,
                    u = n.rootBoundary,
                    p = void 0 === u ? C : u,
                    l = n.elementContext,
                    m = void 0 === l ? T : l,
                    h = n.altBoundary,
                    y = void 0 !== h && h,
                    g = n.padding,
                    b = void 0 === g ? 0 : g,
                    w = se("number" != typeof b ? b : fe(b, B)),
                    x = m === T ? "reference" : T,
                    O = e.rects.popper,
                    E = e.elements[y ? x : m],
                    j = ae(i(E) ? E : E.contextElement || v(e.elements.popper), c, p, s),
                    A = d(e.elements.reference),
                    D = G({
                        reference: A,
                        element: O,
                        strategy: "absolute",
                        placement: o
                    }),
                    P = oe(Object.assign({}, O, D)),
                    R = m === T ? P : A,
                    L = {
                        top: j.top - R.top + w.top,
                        bottom: R.bottom - j.bottom + w.bottom,
                        left: j.left - R.left + w.left,
                        right: R.right - j.right + w.right
                    },
                    W = e.modifiersData.offset;
                if (m === T && W) {
                    var H = W[o];
                    Object.keys(L).forEach((function(e) {
                        var t = [S, M].indexOf(e) >= 0 ? 1 : -1,
                            n = [k, M].indexOf(e) >= 0 ? "y" : "x";
                        L[e] += H[n] * t
                    }))
                }
                return L
            }

            function ue(e, t, n) {
                return f(e, c(t, n))
            }
            const pe = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t = e.state,
                        n = e.options,
                        r = e.name,
                        o = n.mainAxis,
                        i = void 0 === o || o,
                        a = n.altAxis,
                        s = void 0 !== a && a,
                        u = n.boundary,
                        p = n.rootBoundary,
                        l = n.altBoundary,
                        d = n.padding,
                        m = n.tether,
                        h = void 0 === m || m,
                        v = n.tetherOffset,
                        y = void 0 === v ? 0 : v,
                        g = ce(t, {
                            boundary: u,
                            rootBoundary: p,
                            padding: d,
                            altBoundary: l
                        }),
                        b = X(t.placement),
                        w = Y(t.placement),
                        O = !w,
                        E = $(b),
                        j = "x" === E ? "y" : "x",
                        A = t.modifiersData.popperOffsets,
                        D = t.rects.reference,
                        L = t.rects.popper,
                        B = "function" == typeof y ? y(Object.assign({}, t.rects, {
                            placement: t.placement
                        })) : y,
                        H = "number" == typeof B ? {
                            mainAxis: B,
                            altAxis: B
                        } : Object.assign({
                            mainAxis: 0,
                            altAxis: 0
                        }, B),
                        C = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                        T = {
                            x: 0,
                            y: 0
                        };
                    if (A) {
                        if (i) {
                            var U, V = "y" === E ? k : R,
                                q = "y" === E ? M : S,
                                F = "y" === E ? "height" : "width",
                                N = A[E],
                                I = N + g[V],
                                _ = N - g[q],
                                z = h ? -L[F] / 2 : 0,
                                G = w === W ? D[F] : L[F],
                                J = w === W ? -L[F] : -D[F],
                                K = t.elements.arrow,
                                Q = h && K ? x(K) : {
                                    width: 0,
                                    height: 0
                                },
                                Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0
                                },
                                ee = Z[V],
                                te = Z[q],
                                ne = ue(0, D[F], Q[F]),
                                re = O ? D[F] / 2 - z - ne - ee - H.mainAxis : G - ne - ee - H.mainAxis,
                                oe = O ? -D[F] / 2 + z + ne + te + H.mainAxis : J + ne + te + H.mainAxis,
                                ie = t.elements.arrow && P(t.elements.arrow),
                                ae = ie ? "y" === E ? ie.clientTop || 0 : ie.clientLeft || 0 : 0,
                                se = null != (U = null == C ? void 0 : C[E]) ? U : 0,
                                fe = N + oe - se,
                                pe = ue(h ? c(I, N + re - se - ae) : I, N, h ? f(_, fe) : _);
                            A[E] = pe, T[E] = pe - N
                        }
                        if (s) {
                            var le, de = "x" === E ? k : R,
                                me = "x" === E ? M : S,
                                he = A[j],
                                ve = "y" === j ? "height" : "width",
                                ye = he + g[de],
                                ge = he - g[me],
                                be = -1 !== [k, R].indexOf(b),
                                we = null != (le = null == C ? void 0 : C[j]) ? le : 0,
                                xe = be ? ye : he - D[ve] - L[ve] - we + H.altAxis,
                                Oe = be ? he + D[ve] + L[ve] - we - H.altAxis : ge,
                                Ee = h && be ? function(e, t, n) {
                                    var r = ue(e, t, n);
                                    return r > n ? n : r
                                }(xe, he, Oe) : ue(h ? xe : ye, he, h ? Oe : ge);
                            A[j] = Ee, T[j] = Ee - he
                        }
                        t.modifiersData[r] = T
                    }
                },
                requiresIfExists: ["offset"]
            };
            const le = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t, n = e.state,
                        r = e.name,
                        o = e.options,
                        i = n.elements.arrow,
                        a = n.modifiersData.popperOffsets,
                        s = X(n.placement),
                        f = $(s),
                        c = [R, S].indexOf(s) >= 0 ? "height" : "width";
                    if (i && a) {
                        var u = function(e, t) {
                                return se("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                                    placement: t.placement
                                })) : e) ? e : fe(e, B))
                            }(o.padding, n),
                            p = x(i),
                            l = "y" === f ? k : R,
                            d = "y" === f ? M : S,
                            m = n.rects.reference[c] + n.rects.reference[f] - a[f] - n.rects.popper[c],
                            h = a[f] - n.rects.reference[f],
                            v = P(i),
                            y = v ? "y" === f ? v.clientHeight || 0 : v.clientWidth || 0 : 0,
                            g = m / 2 - h / 2,
                            b = u[l],
                            w = y - p[c] - u[d],
                            O = y / 2 - p[c] / 2 + g,
                            E = ue(b, O, w),
                            j = f;
                        n.modifiersData[r] = ((t = {})[j] = E, t.centerOffset = E - O, t)
                    }
                },
                effect: function(e) {
                    var t = e.state,
                        n = e.options.element,
                        r = void 0 === n ? "[data-popper-arrow]" : n;
                    null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && re(t.elements.popper, r) && (t.elements.arrow = r)
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            };

            function de(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
            }

            function me(e) {
                return [k, S, M, R].some((function(t) {
                    return e[t] >= 0
                }))
            }
            var he = _({
                    defaultModifiers: [{
                        name: "eventListeners",
                        enabled: !0,
                        phase: "write",
                        fn: function() {},
                        effect: function(e) {
                            var t = e.state,
                                n = e.instance,
                                r = e.options,
                                i = r.scroll,
                                a = void 0 === i || i,
                                s = r.resize,
                                f = void 0 === s || s,
                                c = o(t.elements.popper),
                                u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                            return a && u.forEach((function(e) {
                                    e.addEventListener("scroll", n.update, z)
                                })), f && c.addEventListener("resize", n.update, z),
                                function() {
                                    a && u.forEach((function(e) {
                                        e.removeEventListener("scroll", n.update, z)
                                    })), f && c.removeEventListener("resize", n.update, z)
                                }
                        },
                        data: {}
                    }, {
                        name: "popperOffsets",
                        enabled: !0,
                        phase: "read",
                        fn: function(e) {
                            var t = e.state,
                                n = e.name;
                            t.modifiersData[n] = G({
                                reference: t.rects.reference,
                                element: t.rects.popper,
                                strategy: "absolute",
                                placement: t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = n.gpuAcceleration,
                                o = void 0 === r || r,
                                i = n.adaptive,
                                a = void 0 === i || i,
                                s = n.roundOffsets,
                                f = void 0 === s || s,
                                c = {
                                    placement: X(t.placement),
                                    variation: Y(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: o,
                                    isFixed: "fixed" === t.options.strategy
                                };
                            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, K(Object.assign({}, c, {
                                offsets: t.modifiersData.popperOffsets,
                                position: t.options.strategy,
                                adaptive: a,
                                roundOffsets: f
                            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, K(Object.assign({}, c, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: f
                            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-placement": t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "applyStyles",
                        enabled: !0,
                        phase: "write",
                        fn: function(e) {
                            var t = e.state;
                            Object.keys(t.elements).forEach((function(e) {
                                var n = t.styles[e] || {},
                                    r = t.attributes[e] || {},
                                    o = t.elements[e];
                                a(o) && h(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
                                    var t = r[e];
                                    !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
                                })))
                            }))
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = {
                                    popper: {
                                        position: t.options.strategy,
                                        left: "0",
                                        top: "0",
                                        margin: "0"
                                    },
                                    arrow: {
                                        position: "absolute"
                                    },
                                    reference: {}
                                };
                            return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                                function() {
                                    Object.keys(t.elements).forEach((function(e) {
                                        var r = t.elements[e],
                                            o = t.attributes[e] || {},
                                            i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                                                return e[t] = "", e
                                            }), {});
                                        a(r) && h(r) && (Object.assign(r.style, i), Object.keys(o).forEach((function(e) {
                                            r.removeAttribute(e)
                                        })))
                                    }))
                                }
                        },
                        requires: ["computeStyles"]
                    }, Q, {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name;
                            if (!t.modifiersData[r]._skip) {
                                for (var o = n.mainAxis, i = void 0 === o || o, a = n.altAxis, s = void 0 === a || a, f = n.fallbackPlacements, c = n.padding, u = n.boundary, p = n.rootBoundary, l = n.altBoundary, d = n.flipVariations, m = void 0 === d || d, h = n.allowedAutoPlacements, v = t.options.placement, y = X(v), g = f || (y === v || !m ? [ee(v)] : function(e) {
                                        if (X(e) === L) return [];
                                        var t = ee(e);
                                        return [ne(e), t, ne(t)]
                                    }(v)), b = [v].concat(g).reduce((function(e, n) {
                                        return e.concat(X(n) === L ? function(e, t) {
                                            void 0 === t && (t = {});
                                            var n = t,
                                                r = n.placement,
                                                o = n.boundary,
                                                i = n.rootBoundary,
                                                a = n.padding,
                                                s = n.flipVariations,
                                                f = n.allowedAutoPlacements,
                                                c = void 0 === f ? V : f,
                                                u = Y(r),
                                                p = u ? s ? U : U.filter((function(e) {
                                                    return Y(e) === u
                                                })) : B,
                                                l = p.filter((function(e) {
                                                    return c.indexOf(e) >= 0
                                                }));
                                            0 === l.length && (l = p);
                                            var d = l.reduce((function(t, n) {
                                                return t[n] = ce(e, {
                                                    placement: n,
                                                    boundary: o,
                                                    rootBoundary: i,
                                                    padding: a
                                                })[X(n)], t
                                            }), {});
                                            return Object.keys(d).sort((function(e, t) {
                                                return d[e] - d[t]
                                            }))
                                        }(t, {
                                            placement: n,
                                            boundary: u,
                                            rootBoundary: p,
                                            padding: c,
                                            flipVariations: m,
                                            allowedAutoPlacements: h
                                        }) : n)
                                    }), []), w = t.rects.reference, x = t.rects.popper, O = new Map, E = !0, j = b[0], A = 0; A < b.length; A++) {
                                    var D = b[A],
                                        P = X(D),
                                        H = Y(D) === W,
                                        C = [k, M].indexOf(P) >= 0,
                                        T = C ? "width" : "height",
                                        q = ce(t, {
                                            placement: D,
                                            boundary: u,
                                            rootBoundary: p,
                                            altBoundary: l,
                                            padding: c
                                        }),
                                        F = C ? H ? S : R : H ? M : k;
                                    w[T] > x[T] && (F = ee(F));
                                    var N = ee(F),
                                        I = [];
                                    if (i && I.push(q[P] <= 0), s && I.push(q[F] <= 0, q[N] <= 0), I.every((function(e) {
                                            return e
                                        }))) {
                                        j = D, E = !1;
                                        break
                                    }
                                    O.set(D, I)
                                }
                                if (E)
                                    for (var _ = function(e) {
                                            var t = b.find((function(t) {
                                                var n = O.get(t);
                                                if (n) return n.slice(0, e).every((function(e) {
                                                    return e
                                                }))
                                            }));
                                            if (t) return j = t, "break"
                                        }, z = m ? 3 : 1; z > 0; z--) {
                                        if ("break" === _(z)) break
                                    }
                                t.placement !== j && (t.modifiersData[r]._skip = !0, t.placement = j, t.reset = !0)
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: {
                            _skip: !1
                        }
                    }, pe, le, {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.name,
                                r = t.rects.reference,
                                o = t.rects.popper,
                                i = t.modifiersData.preventOverflow,
                                a = ce(t, {
                                    elementContext: "reference"
                                }),
                                s = ce(t, {
                                    altBoundary: !0
                                }),
                                f = de(a, r),
                                c = de(s, o, i),
                                u = me(f),
                                p = me(c);
                            t.modifiersData[n] = {
                                referenceClippingOffsets: f,
                                popperEscapeOffsets: c,
                                isReferenceHidden: u,
                                hasPopperEscaped: p
                            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-reference-hidden": u,
                                "data-popper-escaped": p
                            })
                        }
                    }]
                }),
                ve = n(961970),
                ye = n.n(ve),
                ge = n(491854),
                be = [],
                we = function(e, t, n) {
                    void 0 === n && (n = {});
                    var o = r.useRef(null),
                        i = {
                            onFirstUpdate: n.onFirstUpdate,
                            placement: n.placement || "bottom",
                            strategy: n.strategy || "absolute",
                            modifiers: n.modifiers || be
                        },
                        a = r.useState({
                            styles: {
                                popper: {
                                    position: i.strategy,
                                    left: "0",
                                    top: "0"
                                }
                            },
                            attributes: {}
                        }),
                        s = a[0],
                        f = a[1],
                        c = r.useMemo((function() {
                            return {
                                name: "updateState",
                                enabled: !0,
                                phase: "write",
                                fn: function(e) {
                                    var t = e.state,
                                        n = Object.keys(t.elements);
                                    f({
                                        styles: (0, ge.fromEntries)(n.map((function(e) {
                                            return [e, t.styles[e] || {}]
                                        }))),
                                        attributes: (0, ge.fromEntries)(n.map((function(e) {
                                            return [e, t.attributes[e]]
                                        })))
                                    })
                                },
                                requires: ["computeStyles"]
                            }
                        }), []),
                        u = r.useMemo((function() {
                            var e = {
                                onFirstUpdate: i.onFirstUpdate,
                                placement: i.placement,
                                strategy: i.strategy,
                                modifiers: [].concat(i.modifiers, [c, {
                                    name: "applyStyles",
                                    enabled: !1
                                }])
                            };
                            return ye()(o.current, e) ? o.current || e : (o.current = e, e)
                        }), [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, c]),
                        p = r.useRef();
                    return (0, ge.useIsomorphicLayoutEffect)((function() {
                        p.current && p.current.setOptions(u)
                    }), [u]), (0, ge.useIsomorphicLayoutEffect)((function() {
                        if (null != e && null != t) {
                            var r = (n.createPopper || he)(e, t, u);
                            return p.current = r,
                                function() {
                                    r.destroy(), p.current = null
                                }
                        }
                    }), [e, t, n.createPopper]), {
                        state: p.current ? p.current.state : null,
                        styles: s.styles,
                        attributes: s.attributes,
                        update: p.current ? p.current.update : null,
                        forceUpdate: p.current ? p.current.forceUpdate : null
                    }
                }
        },
        491854: (e, t, n) => {
            "use strict";
            n.d(t, {
                unwrapArray: () => o,
                safeInvoke: () => i,
                setRef: () => a,
                fromEntries: () => s,
                useIsomorphicLayoutEffect: () => f
            });
            var r = n(50959),
                o = function(e) {
                    return Array.isArray(e) ? e[0] : e
                },
                i = function(e) {
                    if ("function" == typeof e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        return e.apply(void 0, n)
                    }
                },
                a = function(e, t) {
                    if ("function" == typeof e) return i(e, t);
                    null != e && (e.current = t)
                },
                s = function(e) {
                    return e.reduce((function(e, t) {
                        var n = t[0],
                            r = t[1];
                        return e[n] = r, e
                    }), {})
                },
                f = "undefined" != typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect
        }
    }
]);
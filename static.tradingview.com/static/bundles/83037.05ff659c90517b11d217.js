"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [83037], {
        934026: (n, e, t) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.pointInCircle = e.pointInPolygon = e.pointInBox = e.pointInTriangle = e.pointInHalfplane = void 0;
            var r = t(5531);
            e.pointInHalfplane = function(n, e) {
                var t = e.edge;
                return t.A * n.x + t.B * n.y + t.C > 0 === e.isPositive
            }, e.pointInTriangle = function(n, e, t, a) {
                var u = e.add(t).scaled(.5).add(a).scaled(.5),
                    o = r.intersectLineSegments(e, t, u, n);
                return null === o && (null === (o = r.intersectLineSegments(t, a, u, n)) && null === (o = r.intersectLineSegments(a, e, u, n)))
            }, e.pointInBox = function(n, e) {
                return n.x >= e.min.x && n.x <= e.max.x && n.y >= e.min.y && n.y <= e.max.y
            }, e.pointInPolygon = function(n, e) {
                for (var t = e.length - 1, r = !1, a = n.x, u = n.y, o = 0; o < e.length; o++) {
                    var i = e[o],
                        f = e[t];
                    (i.y < u && f.y >= u || f.y < u && i.y >= u) && i.x + (u - i.y) / (f.y - i.y) * (f.x - i.x) < a && (r = !r), t = o
                }
                return r
            }, e.pointInCircle = function(n, e, t) {
                return (n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y) <= t * t
            }
        },
        204652: (n, e) => {
            function t(n, e, t) {
                var r = e.subtract(n),
                    a = t.subtract(n).dotProduct(r) / r.dotProduct(r);
                return {
                    coeff: a,
                    distance: n.addScaled(r, a).subtract(t).length()
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.distanceToSegment = e.distanceToLine = void 0, e.distanceToLine = t, e.distanceToSegment = function(n, e, r) {
                var a = t(n, e, r);
                if (0 <= a.coeff && a.coeff <= 1) return a;
                var u = n.subtract(r).length(),
                    o = e.subtract(r).length();
                return u < o ? {
                    coeff: 0,
                    distance: u
                } : {
                    coeff: 1,
                    distance: o
                }
            }
        },
        5531: (n, e, t) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.intersectPolygons = e.intersectPolygonAndHalfplane = e.intersectRayAndBox = e.intersectLineAndBox = e.intersectLineSegments = e.intersectLines = e.intersectLineSegmentAndBox = void 0;
            var r = t(650151),
                a = t(86441),
                u = t(204652),
                o = t(934026);

            function i(n, e) {
                var t = n.A,
                    r = e.A,
                    u = n.B,
                    o = e.B,
                    i = n.C,
                    f = e.C,
                    l = t * o - r * u;
                if (Math.abs(l) < 1e-6) return null;
                var c = (u * f - o * i) / l,
                    d = (r * i - t * f) / l;
                return new a.Point(c, d)
            }

            function f(n, e, t, r) {
                var a = function(n, e, t, r) {
                    var a = e.subtract(n),
                        u = r.subtract(t),
                        o = a.x * u.y - a.y * u.x;
                    if (Math.abs(o) < 1e-6) return null;
                    var i = n.subtract(t);
                    return (i.y * u.x - i.x * u.y) / o
                }(n, e, t, r);
                if (null === a) return null;
                var o = e.subtract(n).scaled(a).add(n),
                    i = u.distanceToSegment(t, r, o);
                return Math.abs(i.distance) < 1e-6 ? a : null
            }

            function l(n, e) {
                for (var t = 0, r = n; t < r.length; t++) {
                    var u = r[t];
                    if (a.equalPoints(u, e)) return !1
                }
                return n.push(e), !0
            }

            function c(n, e) {
                return !(n.length > 0 && (a.equalPoints(n[n.length - 1], e) || a.equalPoints(n[0], e))) && (n.push(e), !0)
            }

            function d(n, e) {
                for (var t = [], r = 0; r < n.length; ++r) {
                    var u = n[r],
                        f = n[(r + 1) % n.length],
                        l = a.lineThroughPoints(u, f);
                    if (o.pointInHalfplane(u, e)) {
                        if (c(t, u), !o.pointInHalfplane(f, e)) null !== (d = i(l, e.edge)) && c(t, d)
                    } else if (o.pointInHalfplane(f, e)) {
                        var d;
                        null !== (d = i(l, e.edge)) && c(t, d)
                    }
                }
                return t.length >= 3 ? t : null
            }
            e.intersectLineSegmentAndBox = function(n, e) {
                var t = n[0].x,
                    r = n[0].y,
                    u = n[1].x,
                    o = n[1].y,
                    i = e.min.x,
                    f = e.min.y,
                    l = e.max.x,
                    c = e.max.y;

                function d(n, e, t, r, a, u) {
                    var o = 0;
                    return n < t ? o |= 1 : n > a && (o |= 2), e < r ? o |= 4 : e > u && (o |= 8), o
                }
                for (var s = d(t, r, i, f, l, c), h = d(u, o, i, f, l, c), g = !1, v = 0;;) {
                    if (v > 1e3) throw new Error("Cohen - Sutherland algorithm: infinity loop");
                    if (v++, !(s | h)) {
                        g = !0;
                        break
                    }
                    if (s & h) break;
                    var p = s || h,
                        b = void 0,
                        y = void 0;
                    8 & p ? (b = t + (u - t) * (c - r) / (o - r), y = c) : 4 & p ? (b = t + (u - t) * (f - r) / (o - r), y = f) : 2 & p ? (y = r + (o - r) * (l - t) / (u - t), b = l) : (y = r + (o - r) * (i - t) / (u - t), b = i), p === s ? s = d(t = b, r = y, i, f, l, c) : h = d(u = b, o = y, i, f, l, c)
                }
                return g ? a.equalPoints(a.point(t, r), a.point(u, o)) ? a.point(t, r) : a.lineSegment(a.point(t, r), a.point(u, o)) : null
            }, e.intersectLines = i, e.intersectLineSegments = f, e.intersectLineAndBox = function(n, e) {
                var t = e.min.x,
                    u = e.min.y,
                    o = e.max.x,
                    i = e.max.y;
                if (0 === n.A) {
                    var f = -n.C / n.B;
                    return u <= f && f <= i ? a.lineSegment(a.point(t, f), a.point(o, f)) : null
                }
                if (0 === n.B) {
                    var c = -n.C / n.A;
                    return t <= c && c <= o ? a.lineSegment(a.point(c, u), a.point(c, i)) : null
                }
                var d = [],
                    s = function(e) {
                        var t = function(n, e) {
                            return -(n.C + n.A * e) / n.B
                        }(n, e);
                        u <= t && t <= i && l(d, new a.Point(e, t))
                    },
                    h = function(e) {
                        var r = function(n, e) {
                            return -(n.C + n.B * e) / n.A
                        }(n, e);
                        t <= r && r <= o && l(d, new a.Point(r, e))
                    };
                switch (s(t), h(u), s(o), h(i), d.length) {
                    case 0:
                        return null;
                    case 1:
                        return d[0];
                    case 2:
                        return a.equalPoints(d[0], d[1]) ? d[0] : a.lineSegment(d[0], d[1])
                }
                return r.assert(!1, "We should have at most two intersection points"), null
            }, e.intersectRayAndBox = function(n, e, t) {
                var r = f(n, e, t.min, new a.Point(t.max.x, t.min.y)),
                    u = f(n, e, new a.Point(t.max.x, t.min.y), t.max),
                    i = f(n, e, t.max, new a.Point(t.min.x, t.max.y)),
                    l = f(n, e, new a.Point(t.min.x, t.max.y), t.min),
                    c = [];
                if (null !== r && r >= 0 && c.push(r), null !== u && u >= 0 && c.push(u), null !== i && i >= 0 && c.push(i), null !== l && l >= 0 && c.push(l), 0 === c.length) return null;
                c.sort((function(n, e) {
                    return n - e
                }));
                var d = o.pointInBox(n, t) ? c[0] : c[c.length - 1];
                return n.addScaled(e.subtract(n), d)
            }, e.intersectPolygonAndHalfplane = d, e.intersectPolygons = function(n, e) {
                for (var t = n, r = 0; r < e.length && null !== t; ++r) {
                    var u = e[r],
                        o = e[(r + 1) % e.length],
                        i = e[(r + 2) % e.length],
                        f = a.lineThroughPoints(u, o);
                    t = d(t, a.halfplaneThroughPoint(f, i))
                }
                return t
            }
        },
        86441: (n, e) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.equalBoxes = e.box = e.halfplaneThroughPoint = e.halfplane = e.lineSegment = e.lineThroughPoints = e.line = e.equalPoints = e.point = e.Point = void 0;
            var t = function() {
                function n(n, e) {
                    this.x = n, this.y = e
                }
                return n.prototype.add = function(e) {
                    return new n(this.x + e.x, this.y + e.y)
                }, n.prototype.addScaled = function(e, t) {
                    return new n(this.x + t * e.x, this.y + t * e.y)
                }, n.prototype.subtract = function(e) {
                    return new n(this.x - e.x, this.y - e.y)
                }, n.prototype.dotProduct = function(n) {
                    return this.x * n.x + this.y * n.y
                }, n.prototype.crossProduct = function(n) {
                    return this.x * n.y - this.y * n.x
                }, n.prototype.signedAngle = function(n) {
                    return Math.atan2(this.crossProduct(n), this.dotProduct(n))
                }, n.prototype.angle = function(n) {
                    return Math.acos(this.dotProduct(n) / (this.length() * n.length()))
                }, n.prototype.length = function() {
                    return Math.sqrt(this.x * this.x + this.y * this.y)
                }, n.prototype.scaled = function(e) {
                    return new n(this.x * e, this.y * e)
                }, n.prototype.normalized = function() {
                    return this.scaled(1 / this.length())
                }, n.prototype.transposed = function() {
                    return new n(-this.y, this.x)
                }, n.prototype.clone = function() {
                    return new n(this.x, this.y)
                }, n
            }();

            function r(n, e) {
                return new t(n, e)
            }

            function a(n, e) {
                return n.x === e.x && n.y === e.y
            }

            function u(n, e, t) {
                if (0 === n && 0 === e) throw new Error("A and B can not be both equal to zero.");
                return {
                    A: n,
                    B: e,
                    C: t
                }
            }

            function o(n, e) {
                return {
                    edge: n,
                    isPositive: e
                }
            }
            e.Point = t, e.point = r, e.equalPoints = a, e.line = u, e.lineThroughPoints = function(n, e) {
                if (a(n, e)) throw new Error("Points should be distinct");
                return u(n.y - e.y, e.x - n.x, n.x * e.y - e.x * n.y)
            }, e.lineSegment = function(n, e) {
                if (a(n, e)) throw new Error("Points of a segment should be distinct");
                return [n, e]
            }, e.halfplane = o, e.halfplaneThroughPoint = function(n, e) {
                return o(n, n.A * e.x + n.B * e.y + n.C > 0)
            }, e.box = function(n, e) {
                return {
                    min: r(Math.min(n.x, e.x), Math.min(n.y, e.y)),
                    max: r(Math.max(n.x, e.x), Math.max(n.y, e.y))
                }
            }, e.equalBoxes = function(n, e) {
                return a(n.min, e.min) && a(n.max, e.max)
            }
        },
        724377: (n, e, t) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = t(150335);

            function a(n, e, t) {
                return r.isNaN(e) || e < n ? n : e > t ? t : Math.round(e)
            }

            function u(n, e, t) {
                return r.isNaN(e) || e < n ? n : e > t ? t : Math.round(1e4 * e) / 1e4
            }

            function o(n) {
                return a(0, n, 255)
            }

            function i(n) {
                return a(0, n, 255)
            }

            function f(n) {
                return a(0, n, 255)
            }

            function l(n) {
                return u(0, n, 1)
            }

            function c(n) {
                return u(0, n, 1)
            }

            function d(n) {
                return u(0, n, 1)
            }

            function s(n) {
                return u(0, n, 1)
            }

            function h(n) {
                return u(0, n, 1)
            }

            function g(n) {
                return u(0, n, 1)
            }

            function v(n) {
                var e = n[0] / 255,
                    t = n[1] / 255,
                    r = n[2] / 255,
                    a = Math.min(e, t, r),
                    u = Math.max(e, t, r),
                    o = 0,
                    i = 0,
                    f = (a + u) / 2;
                if (a === u) o = 0, i = 0;
                else {
                    var l = u - a;
                    switch (i = f > .5 ? l / (2 - u - a) : l / (u + a), u) {
                        case e:
                            o = ((t - r) / l + (t < r ? 6 : 0)) / 6;
                            break;
                        case t:
                            o = ((r - e) / l + 2) / 6;
                            break;
                        case r:
                            o = ((e - t) / l + 4) / 6
                    }
                }
                return [o, i, f]
            }

            function p(n, e, t) {
                return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? n + 6 * (e - n) * t : t < .5 ? e : t < 2 / 3 ? n + (e - n) * (2 / 3 - t) * 6 : n
            }

            function b(n) {
                var e, t, r, a = n[0],
                    u = n[1],
                    l = n[2];
                if (0 === u) e = t = r = l;
                else {
                    var c = l < .5 ? l * (1 + u) : l + u - l * u,
                        d = 2 * l - c;
                    e = p(d, c, a + 1 / 3), t = p(d, c, a), r = p(d, c, a - 1 / 3)
                }
                return [o(255 * e), i(255 * t), f(255 * r)]
            }
            e.normalizeRedComponent = o, e.normalizeGreenComponent = i, e.normalizeBlueComponent = f, e.normalizeAlphaComponent = l, e.rgb = function(n, e, t) {
                return [o(n), i(e), f(t)]
            }, e.areEqualRgb = function(n, e) {
                return n[0] === e[0] && n[1] === e[1] && n[2] === e[2]
            }, e.rgba = function(n, e, t, r) {
                if (Array.isArray(n)) {
                    var a = n;
                    return r = e, [a[0], a[1], a[2], l(r)]
                }
                var u = e;
                return t = t || 0, r = r || 0, [o(n), i(u), f(t), l(r)]
            }, e.areEqualRgba = function(n, e) {
                return n[0] === e[0] && n[1] === e[1] && n[2] === e[2] && n[3] === e[3]
            }, e.normalizeHue = c, e.normalizeHslSaturation = d, e.normalizeHsvSaturation = s, e.normalizeLightness = h, e.normalizeValue = g, e.hsl = function(n, e, t) {
                return [c(n), d(e), h(t)]
            }, e.areEqualHsl = function(n, e) {
                return n[0] === e[0] && n[1] === e[1] && n[2] === e[2]
            }, e.hsv = function(n, e, t) {
                return [c(n), s(e), g(t)]
            }, e.areEqualHsv = function(n, e) {
                return n[0] === e[0] && n[1] === e[1] && n[2] === e[2]
            }, e.rgbToHsl = v, e.hslToRgb = b, e.rgbToHsv = function(n) {
                var e = n[0],
                    t = n[1],
                    r = n[2],
                    a = e / 255,
                    u = t / 255,
                    o = r / 255,
                    i = Math.min(a, u, o),
                    f = Math.max(a, u, o),
                    l = f - i,
                    c = 0,
                    d = 0 === f ? 0 : l / f,
                    s = f;
                if (f === i) c = 0;
                else switch (f) {
                    case e:
                        c = ((u - o) / l + (u < o ? 6 : 0)) / 6;
                        break;
                    case t:
                        c = ((o - a) / l + 2) / 6;
                        break;
                    case r:
                        c = ((a - u) / l + 4) / 6
                }
                return [c, d, s]
            }, e.hsvToRgb = function(n) {
                var e = n[0],
                    t = n[1],
                    r = n[2],
                    a = Math.floor(6 * e),
                    u = 6 * e - a,
                    l = r * (1 - t),
                    c = r * (1 - u * t),
                    d = r * (1 - (1 - u) * t),
                    s = 0,
                    h = 0,
                    g = 0;
                switch (a % 6) {
                    case 0:
                        s = r, h = d, g = l;
                        break;
                    case 1:
                        s = c, h = r, g = l;
                        break;
                    case 2:
                        s = l, h = r, g = d;
                        break;
                    case 3:
                        s = l, h = c, g = r;
                        break;
                    case 4:
                        s = d, h = l, g = r;
                        break;
                    case 5:
                        s = r, h = l, g = c
                }
                return [o(255 * s), i(255 * h), f(255 * g)]
            };
            var y = [.199, .687, .114];

            function m(n) {
                return y[0] * n[0] + y[1] * n[1] + y[2] * n[2]
            }

            function x(n, e, t) {
                void 0 === t && (t = .05);
                var r = v(n),
                    a = r[0] + e * t;
                return r[0] = c(a - Math.floor(a)), b(r)
            }

            function w(n, e, t) {
                void 0 === t && (t = .05);
                var r = n[0],
                    a = n[1],
                    u = n[2],
                    o = n[3],
                    i = x([r, a, u], e, t);
                return [i[0], i[1], i[2], o]
            }
            e.rgbToGrayscale = m, e.distanceRgb = function(n, e) {
                var t = n[0],
                    r = n[1],
                    a = n[2],
                    u = e[0] - t,
                    o = e[1] - r,
                    i = e[2] - a;
                return Math.sqrt(u * u + o * o + i * i)
            }, e.invertRgb = function(n) {
                return [255 - n[0], 255 - n[1], 255 - n[2]]
            }, e.darkenRgb = function(n, e) {
                var t = v(n);
                return b([t[0], t[1], h(t[2] - e / 100)])
            }, e.blendRgba = function(n, e) {
                var t = n[0],
                    r = n[1],
                    a = n[2],
                    u = n[3],
                    c = e[0],
                    d = e[1],
                    s = e[2],
                    h = e[3],
                    g = l(1 - (1 - h) * (1 - u));
                return [o(c * h / g + t * u * (1 - h) / g), i(d * h / g + r * u * (1 - h) / g), f(s * h / g + a * u * (1 - h) / g), g]
            }, e.shiftRgb = x, e.shiftRgba = w, e.shiftColor = function(n, e, t) {
                return void 0 === t && (t = .05), R(w(H(n), e, t))
            };
            var k, P, A, S, I = {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dodgerblue: "#1e90ff",
                feldspar: "#d19275",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrodyellow: "#fafad2",
                lightgreen: "#90ee90",
                lightgrey: "#d3d3d3",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslateblue: "#8470ff",
                lightslategray: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370d8",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#d87093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                violetred: "#d02090",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
            };

            function q(n, e) {
                return e in n
            }

            function M(n) {
                var e = k.re.exec(n);
                return null !== e ? k.parse(e) : null
            }

            function C(n) {
                var e = P.re.exec(n);
                return null !== e ? P.parse(e) : null
            }

            function T(n) {
                var e = A.re.exec(n);
                return null !== e ? A.parse(e) : null
            }

            function B(n) {
                var e = S.re.exec(n);
                return null !== e ? S.parse(e) : null
            }

            function R(n) {
                return "rgba(" + n[0] + ", " + n[1] + ", " + n[2] + ", " + n[3] + ")"
            }

            function L(n) {
                if (n = n.toLowerCase(), q(I, n)) {
                    var e = C(I[n]);
                    if (null !== e) return e;
                    throw new Error("Invalid named color definition")
                }
                var t = M(n);
                if (null !== t) return t;
                var r = C(n);
                if (null !== r) return r;
                var a = T(n);
                if (null !== a) return a;
                var u = B(n);
                return null !== u ? [u[0], u[1], u[2]] : null
            }

            function E(n) {
                if (n = n.toLowerCase(), q(I, n)) {
                    var e = C(I[n]);
                    if (null !== e) return [e[0], e[1], e[2], 1];
                    throw new Error("Invalid named color definition")
                }
                var t = M(n);
                if (null !== t) return [t[0], t[1], t[2], 1];
                var r = C(n);
                if (null !== r) return [r[0], r[1], r[2], 1];
                var a = T(n);
                if (null !== a) return [a[0], a[1], a[2], 1];
                var u = B(n);
                return null !== u ? u : null
            }

            function H(n) {
                var e = E(n);
                if (null !== e) return e;
                throw new Error("Passed color string does not match any of the known color representations")
            }! function(n) {
                n.re = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/, n.parse = function(n) {
                    return [o(parseInt(n[1], 10)), i(parseInt(n[2], 10)), f(parseInt(n[3], 10))]
                }
            }(k || (k = {})), e.rgbToString = function(n) {
                    return "rgb(" + n[0] + ", " + n[1] + ", " + n[2] + ")"
                },
                function(n) {
                    n.re = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, n.parse = function(n) {
                        return [o(parseInt(n[1], 16)), i(parseInt(n[2], 16)), f(parseInt(n[3], 16))]
                    }
                }(P || (P = {})), e.rgbToHexString = function(n) {
                    var e = n[0],
                        t = n[1],
                        r = n[2],
                        a = e.toString(16),
                        u = t.toString(16),
                        o = r.toString(16);
                    return "#" + (1 === a.length ? "0" : "") + a + (1 === u.length ? "0" : "") + u + (1 === o.length ? "0" : "") + o
                },
                function(n) {
                    n.re = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/, n.parse = function(n) {
                        return [o(parseInt(n[1] + n[1], 16)), i(parseInt(n[2] + n[2], 16)), f(parseInt(n[3] + n[3], 16))]
                    }
                }(A || (A = {})),
                function(n) {
                    n.re = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/, n.parse = function(n) {
                        return [o(parseInt(n[1], 10)), i(parseInt(n[2], 10)), f(parseInt(n[3], 10)), l(parseFloat(n[4]))]
                    }
                }(S || (S = {})), e.rgbaToString = R, e.rgbToBlackWhiteString = function(n, e) {
                    if (e < 0 || e > 255) throw new Error("invalid threshold value, valid values are [0, 255]");
                    return m(n) >= e ? "white" : "black"
                }, e.tryParseRgb = L, e.parseRgb = function(n) {
                    var e = L(n);
                    if (null !== e) return e;
                    throw new Error("Passed color string does not match any of the known color representations")
                }, e.tryParseRgba = E, e.parseRgba = H
        },
        292893: (n, e, t) => {
            t.d(e, {
                default: () => r
            });
            const r = function(n, e) {
                for (var t = -1, r = null == n ? 0 : n.length, a = Array(r); ++t < r;) a[t] = e(n[t], t, n);
                return a
            }
        },
        429718: (n, e, t) => {
            t.d(e, {
                default: () => r
            });
            const r = function(n) {
                return function(e, t, r) {
                    for (var a = -1, u = Object(e), o = r(e), i = o.length; i--;) {
                        var f = o[n ? i : ++a];
                        if (!1 === t(u[f], f, u)) break
                    }
                    return e
                }
            }()
        },
        580838: (n, e, t) => {
            t.d(e, {
                default: () => u
            });
            var r = t(9757),
                a = t(887844);
            const u = function(n, e) {
                for (var t = 0, u = (e = (0, r.default)(e, n)).length; null != n && t < u;) n = n[(0, a.default)(e[t++])];
                return t && t == u ? n : void 0
            }
        },
        29245: (n, e, t) => {
            t.d(e, {
                default: () => o
            });
            var r = t(999097),
                a = t(893298),
                u = t(826554);
            const o = function(n, e) {
                return (0, u.default)((0, a.default)(n, e, r.default), n + "")
            }
        },
        36746: (n, e, t) => {
            t.d(e, {
                default: () => l
            });
            var r = t(503060),
                a = t(292893),
                u = t(854814),
                o = t(708875),
                i = r.default ? r.default.prototype : void 0,
                f = i ? i.toString : void 0;
            const l = function n(e) {
                if ("string" == typeof e) return e;
                if ((0, u.default)(e)) return (0, a.default)(e, n) + "";
                if ((0, o.default)(e)) return f ? f.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -Infinity ? "-0" : t
            }
        },
        9757: (n, e, t) => {
            t.d(e, {
                default: () => c
            });
            var r = t(854814),
                a = t(973204),
                u = t(448874);
            var o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                i = /\\(\\)?/g;
            const f = function(n) {
                var e = (0, u.default)(n, (function(n) {
                        return 500 === t.size && t.clear(), n
                    })),
                    t = e.cache;
                return e
            }((function(n) {
                var e = [];
                return 46 === n.charCodeAt(0) && e.push(""), n.replace(o, (function(n, t, r, a) {
                    e.push(r ? a.replace(i, "$1") : t || n)
                })), e
            }));
            var l = t(824018);
            const c = function(n, e) {
                return (0, r.default)(n) ? n : (0, a.default)(n, e) ? [n] : f((0, l.default)(n))
            }
        },
        793532: (n, e, t) => {
            t.d(e, {
                default: () => i
            });
            var r = t(872575),
                a = t(29419),
                u = t(817104),
                o = t(598279);
            const i = function(n, e, t) {
                if (!(0, o.default)(t)) return !1;
                var i = typeof e;
                return !!("number" == i ? (0, a.default)(t) && (0, u.default)(e, t.length) : "string" == i && e in t) && (0, r.default)(t[e], n)
            }
        },
        973204: (n, e, t) => {
            t.d(e, {
                default: () => i
            });
            var r = t(854814),
                a = t(708875),
                u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                o = /^\w*$/;
            const i = function(n, e) {
                if ((0, r.default)(n)) return !1;
                var t = typeof n;
                return !("number" != t && "symbol" != t && "boolean" != t && null != n && !(0, a.default)(n)) || (o.test(n) || !u.test(n) || null != e && n in Object(e))
            }
        },
        893298: (n, e, t) => {
            t.d(e, {
                default: () => u
            });
            const r = function(n, e, t) {
                switch (t.length) {
                    case 0:
                        return n.call(e);
                    case 1:
                        return n.call(e, t[0]);
                    case 2:
                        return n.call(e, t[0], t[1]);
                    case 3:
                        return n.call(e, t[0], t[1], t[2])
                }
                return n.apply(e, t)
            };
            var a = Math.max;
            const u = function(n, e, t) {
                return e = a(void 0 === e ? n.length - 1 : e, 0),
                    function() {
                        for (var u = arguments, o = -1, i = a(u.length - e, 0), f = Array(i); ++o < i;) f[o] = u[e + o];
                        o = -1;
                        for (var l = Array(e + 1); ++o < e;) l[o] = u[o];
                        return l[e] = t(f), r(n, this, l)
                    }
            }
        },
        826554: (n, e, t) => {
            t.d(e, {
                default: () => f
            });
            var r = t(63120),
                a = t(776780),
                u = t(999097);
            const o = a.default ? function(n, e) {
                return (0, a.default)(n, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: (0, r.default)(e),
                    writable: !0
                })
            } : u.default;
            var i = Date.now;
            const f = function(n) {
                var e = 0,
                    t = 0;
                return function() {
                    var r = i(),
                        a = 16 - (r - t);
                    if (t = r, a > 0) {
                        if (++e >= 800) return arguments[0]
                    } else e = 0;
                    return n.apply(void 0, arguments)
                }
            }(o)
        },
        887844: (n, e, t) => {
            t.d(e, {
                default: () => a
            });
            var r = t(708875);
            const a = function(n) {
                if ("string" == typeof n || (0, r.default)(n)) return n;
                var e = n + "";
                return "0" == e && 1 / n == -Infinity ? "-0" : e
            }
        },
        63120: (n, e, t) => {
            t.d(e, {
                default: () => r
            });
            const r = function(n) {
                return function() {
                    return n
                }
            }
        },
        22321: (n, e, t) => {
            t.d(e, {
                default: () => d
            });
            const r = function(n, e) {
                return null != n && e in Object(n)
            };
            var a = t(9757),
                u = t(553822),
                o = t(854814),
                i = t(817104),
                f = t(667702),
                l = t(887844);
            const c = function(n, e, t) {
                for (var r = -1, c = (e = (0, a.default)(e, n)).length, d = !1; ++r < c;) {
                    var s = (0, l.default)(e[r]);
                    if (!(d = null != n && t(n, s))) break;
                    n = n[s]
                }
                return d || ++r != c ? d : !!(c = null == n ? 0 : n.length) && (0, f.default)(c) && (0, i.default)(s, c) && ((0, o.default)(n) || (0, u.default)(n))
            };
            const d = function(n, e) {
                return null != n && c(n, e, r)
            }
        },
        999097: (n, e, t) => {
            t.d(e, {
                default: () => r
            });
            const r = function(n) {
                return n
            }
        },
        261702: (n, e, t) => {
            t.d(e, {
                default: () => u
            });
            var r = t(29419),
                a = t(383527);
            const u = function(n) {
                return (0, a.default)(n) && (0, r.default)(n)
            }
        },
        56736: (n, e, t) => {
            t.d(e, {
                default: () => d
            });
            var r = t(128177),
                a = t(156838),
                u = t(383527),
                o = Function.prototype,
                i = Object.prototype,
                f = o.toString,
                l = i.hasOwnProperty,
                c = f.call(Object);
            const d = function(n) {
                if (!(0, u.default)(n) || "[object Object]" != (0, r.default)(n)) return !1;
                var e = (0, a.default)(n);
                if (null === e) return !0;
                var t = l.call(e, "constructor") && e.constructor;
                return "function" == typeof t && t instanceof t && f.call(t) == c
            }
        },
        448874: (n, e, t) => {
            t.d(e, {
                default: () => u
            });
            var r = t(601141);

            function a(n, e) {
                if ("function" != typeof n || null != e && "function" != typeof e) throw new TypeError("Expected a function");
                var t = function() {
                    var r = arguments,
                        a = e ? e.apply(this, r) : r[0],
                        u = t.cache;
                    if (u.has(a)) return u.get(a);
                    var o = n.apply(this, r);
                    return t.cache = u.set(a, o) || u, o
                };
                return t.cache = new(a.Cache || r.default), t
            }
            a.Cache = r.default;
            const u = a
        },
        897304: (n, e, t) => {
            t.d(e, {
                default: () => M
            });
            var r = t(396335),
                a = t(624402),
                u = t(872575);
            const o = function(n, e, t) {
                (void 0 !== t && !(0, u.default)(n[e], t) || void 0 === t && !(e in n)) && (0, a.default)(n, e, t)
            };
            var i = t(429718),
                f = t(157508),
                l = t(839895),
                c = t(458555),
                d = t(852222),
                s = t(553822),
                h = t(854814),
                g = t(261702),
                v = t(925247),
                p = t(162942),
                b = t(598279),
                y = t(56736),
                m = t(54744);
            const x = function(n, e) {
                if (("constructor" !== e || "function" != typeof n[e]) && "__proto__" != e) return n[e]
            };
            var w = t(175969),
                k = t(364162);
            const P = function(n) {
                return (0, w.default)(n, (0, k.default)(n))
            };
            const A = function(n, e, t, r, a, u, i) {
                var w = x(n, t),
                    k = x(e, t),
                    A = i.get(k);
                if (A) o(n, t, A);
                else {
                    var S = u ? u(w, k, t + "", n, e, i) : void 0,
                        I = void 0 === S;
                    if (I) {
                        var q = (0, h.default)(k),
                            M = !q && (0, v.default)(k),
                            C = !q && !M && (0, m.default)(k);
                        S = k, q || M || C ? (0, h.default)(w) ? S = w : (0, g.default)(w) ? S = (0, c.default)(w) : M ? (I = !1, S = (0, f.default)(k, !0)) : C ? (I = !1, S = (0, l.default)(k, !0)) : S = [] : (0, y.default)(k) || (0, s.default)(k) ? (S = w, (0, s.default)(w) ? S = P(w) : (0, b.default)(w) && !(0, p.default)(w) || (S = (0, d.default)(k))) : I = !1
                    }
                    I && (i.set(k, S), a(S, k, r, u, i), i.delete(k)), o(n, t, S)
                }
            };
            const S = function n(e, t, a, u, f) {
                e !== t && (0, i.default)(t, (function(i, l) {
                    if (f || (f = new r.default), (0, b.default)(i)) A(e, t, l, a, n, u, f);
                    else {
                        var c = u ? u(x(e, l), i, l + "", e, t, f) : void 0;
                        void 0 === c && (c = i), o(e, l, c)
                    }
                }), k.default)
            };
            var I = t(29245),
                q = t(793532);
            const M = function(n) {
                return (0, I.default)((function(e, t) {
                    var r = -1,
                        a = t.length,
                        u = a > 1 ? t[a - 1] : void 0,
                        o = a > 2 ? t[2] : void 0;
                    for (u = n.length > 3 && "function" == typeof u ? (a--, u) : void 0, o && (0, q.default)(t[0], t[1], o) && (u = a < 3 ? void 0 : u, a = 1), e = Object(e); ++r < a;) {
                        var i = t[r];
                        i && n(e, i, r, u)
                    }
                    return e
                }))
            }((function(n, e, t) {
                S(n, e, t)
            }))
        },
        824018: (n, e, t) => {
            t.d(e, {
                default: () => a
            });
            var r = t(36746);
            const a = function(n) {
                return null == n ? "" : (0, r.default)(n)
            }
        }
    }
]);
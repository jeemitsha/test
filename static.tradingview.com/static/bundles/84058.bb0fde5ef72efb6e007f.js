(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [84058], {
        636995: (t, e, i) => {
            var n, o;
            void 0 === (o = "function" == typeof(n = ["jquery", "./data", "./disable-selection", "./focusable", "./form", "./ie", "./keycode", "./labels", "./jquery-1-7", "./plugin", "./safe-active-element", "./safe-blur", "./scroll-parent", "./tabbable", "./unique-id", "./version"]) ? n.call(e, i, e, t) : n) || (t.exports = o)
        },
        386727: (t, e, i) => {
            var n, o, s;
            o = [i(823127), i(834912)], n = function(t) {
                var e, i = "ui-effects-",
                    n = "ui-effects-style",
                    o = "ui-effects-animated",
                    s = t;
                return t.effects = {
                        effect: {}
                    },
                    function(t, e) {
                        var i, n = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                            o = /^([\-+])=\s*(\d+\.?\d*)/,
                            s = [{
                                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                                parse: function(t) {
                                    return [t[1], t[2], t[3], t[4]]
                                }
                            }, {
                                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                                parse: function(t) {
                                    return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                                }
                            }, {
                                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                                parse: function(t) {
                                    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                                }
                            }, {
                                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                                parse: function(t) {
                                    return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                                }
                            }, {
                                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                                space: "hsla",
                                parse: function(t) {
                                    return [t[1], t[2] / 100, t[3] / 100, t[4]]
                                }
                            }],
                            r = t.Color = function(e, i, n, o) {
                                return new t.Color.fn.parse(e, i, n, o)
                            },
                            a = {
                                rgba: {
                                    props: {
                                        red: {
                                            idx: 0,
                                            type: "byte"
                                        },
                                        green: {
                                            idx: 1,
                                            type: "byte"
                                        },
                                        blue: {
                                            idx: 2,
                                            type: "byte"
                                        }
                                    }
                                },
                                hsla: {
                                    props: {
                                        hue: {
                                            idx: 0,
                                            type: "degrees"
                                        },
                                        saturation: {
                                            idx: 1,
                                            type: "percent"
                                        },
                                        lightness: {
                                            idx: 2,
                                            type: "percent"
                                        }
                                    }
                                }
                            },
                            l = {
                                byte: {
                                    floor: !0,
                                    max: 255
                                },
                                percent: {
                                    max: 1
                                },
                                degrees: {
                                    mod: 360,
                                    floor: !0
                                }
                            },
                            u = r.support = {},
                            c = t("<p>")[0],
                            f = t.each;

                        function h(t, e, i) {
                            var n = l[e.type] || {};
                            return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : n.max < t ? n.max : t)
                        }

                        function p(e) {
                            var n = r(),
                                o = n._rgba = [];
                            return e = e.toLowerCase(), f(s, (function(t, i) {
                                var s, r = i.re.exec(e),
                                    l = r && i.parse(r),
                                    u = i.space || "rgba";
                                if (l) return s = n[u](l), n[a[u].cache] = s[a[u].cache], o = n._rgba = s._rgba, !1
                            })), o.length ? ("0,0,0,0" === o.join() && t.extend(o, i.transparent), n) : i[e]
                        }

                        function d(t, e, i) {
                            return 6 * (i = (i + 1) % 1) < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
                        }
                        c.style.cssText = "background-color:rgba(1,1,1,.5)", u.rgba = c.style.backgroundColor.indexOf("rgba") > -1, f(a, (function(t, e) {
                            e.cache = "_" + t, e.props.alpha = {
                                idx: 3,
                                type: "percent",
                                def: 1
                            }
                        })), r.fn = t.extend(r.prototype, {
                            parse: function(n, o, s, l) {
                                if (n === e) return this._rgba = [null, null, null, null], this;
                                (n.jquery || n.nodeType) && (n = t(n).css(o), o = e);
                                var u = this,
                                    c = t.type(n),
                                    d = this._rgba = [];
                                return o !== e && (n = [n, o, s, l], c = "array"), "string" === c ? this.parse(p(n) || i._default) : "array" === c ? (f(a.rgba.props, (function(t, e) {
                                    d[e.idx] = h(n[e.idx], e)
                                })), this) : "object" === c ? (f(a, n instanceof r ? function(t, e) {
                                    n[e.cache] && (u[e.cache] = n[e.cache].slice())
                                } : function(e, i) {
                                    var o = i.cache;
                                    f(i.props, (function(t, e) {
                                        if (!u[o] && i.to) {
                                            if ("alpha" === t || null == n[t]) return;
                                            u[o] = i.to(u._rgba)
                                        }
                                        u[o][e.idx] = h(n[t], e, !0)
                                    })), u[o] && t.inArray(null, u[o].slice(0, 3)) < 0 && (u[o][3] = 1, i.from && (u._rgba = i.from(u[o])))
                                }), this) : void 0
                            },
                            is: function(t) {
                                var e = r(t),
                                    i = !0,
                                    n = this;
                                return f(a, (function(t, o) {
                                    var s, r = e[o.cache];
                                    return r && (s = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, (function(t, e) {
                                        if (null != r[e.idx]) return i = r[e.idx] === s[e.idx]
                                    }))), i
                                })), i
                            },
                            _space: function() {
                                var t = [],
                                    e = this;
                                return f(a, (function(i, n) {
                                    e[n.cache] && t.push(i)
                                })), t.pop()
                            },
                            transition: function(t, e) {
                                var i = r(t),
                                    n = i._space(),
                                    o = a[n],
                                    s = 0 === this.alpha() ? r("transparent") : this,
                                    u = s[o.cache] || o.to(s._rgba),
                                    c = u.slice();
                                return i = i[o.cache], f(o.props, (function(t, n) {
                                    var o = n.idx,
                                        s = u[o],
                                        r = i[o],
                                        a = l[n.type] || {};
                                    null !== r && (null === s ? c[o] = r : (a.mod && (r - s > a.mod / 2 ? s += a.mod : s - r > a.mod / 2 && (s -= a.mod)), c[o] = h((r - s) * e + s, n)))
                                })), this[n](c)
                            },
                            blend: function(e) {
                                if (1 === this._rgba[3]) return this;
                                var i = this._rgba.slice(),
                                    n = i.pop(),
                                    o = r(e)._rgba;
                                return r(t.map(i, (function(t, e) {
                                    return (1 - n) * o[e] + n * t
                                })))
                            },
                            toRgbaString: function() {
                                var e = "rgba(",
                                    i = t.map(this._rgba, (function(t, e) {
                                        return null == t ? e > 2 ? 1 : 0 : t
                                    }));
                                return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                            },
                            toHslaString: function() {
                                var e = "hsla(",
                                    i = t.map(this.hsla(), (function(t, e) {
                                        return null == t && (t = e > 2 ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t
                                    }));
                                return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                            },
                            toHexString: function(e) {
                                var i = this._rgba.slice(),
                                    n = i.pop();
                                return e && i.push(~~(255 * n)), "#" + t.map(i, (function(t) {
                                    return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
                                })).join("")
                            },
                            toString: function() {
                                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                            }
                        }), r.fn.parse.prototype = r.fn, a.hsla.to = function(t) {
                            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                            var e, i, n = t[0] / 255,
                                o = t[1] / 255,
                                s = t[2] / 255,
                                r = t[3],
                                a = Math.max(n, o, s),
                                l = Math.min(n, o, s),
                                u = a - l,
                                c = a + l,
                                f = .5 * c;
                            return e = l === a ? 0 : n === a ? 60 * (o - s) / u + 360 : o === a ? 60 * (s - n) / u + 120 : 60 * (n - o) / u + 240, i = 0 === u ? 0 : f <= .5 ? u / c : u / (2 - c), [Math.round(e) % 360, i, f, null == r ? 1 : r]
                        }, a.hsla.from = function(t) {
                            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                            var e = t[0] / 360,
                                i = t[1],
                                n = t[2],
                                o = t[3],
                                s = n <= .5 ? n * (1 + i) : n + i - n * i,
                                r = 2 * n - s;
                            return [Math.round(255 * d(r, s, e + 1 / 3)), Math.round(255 * d(r, s, e)), Math.round(255 * d(r, s, e - 1 / 3)), o]
                        }, f(a, (function(i, n) {
                            var s = n.props,
                                a = n.cache,
                                l = n.to,
                                u = n.from;
                            r.fn[i] = function(i) {
                                if (l && !this[a] && (this[a] = l(this._rgba)), i === e) return this[a].slice();
                                var n, o = t.type(i),
                                    c = "array" === o || "object" === o ? i : arguments,
                                    p = this[a].slice();
                                return f(s, (function(t, e) {
                                    var i = c["object" === o ? t : e.idx];
                                    null == i && (i = p[e.idx]), p[e.idx] = h(i, e)
                                })), u ? ((n = r(u(p)))[a] = p, n) : r(p)
                            }, f(s, (function(e, n) {
                                r.fn[e] || (r.fn[e] = function(s) {
                                    var r, a = t.type(s),
                                        l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : i,
                                        u = this[l](),
                                        c = u[n.idx];
                                    return "undefined" === a ? c : ("function" === a && (s = s.call(this, c), a = t.type(s)), null == s && n.empty ? this : ("string" === a && (r = o.exec(s)) && (s = c + parseFloat(r[2]) * ("+" === r[1] ? 1 : -1)), u[n.idx] = s, this[l](u)))
                                })
                            }))
                        })), r.hook = function(e) {
                            var i = e.split(" ");
                            f(i, (function(e, i) {
                                t.cssHooks[i] = {
                                    set: function(e, n) {
                                        var o, s, a = "";
                                        if ("transparent" !== n && ("string" !== t.type(n) || (o = p(n)))) {
                                            if (n = r(o || n), !u.rgba && 1 !== n._rgba[3]) {
                                                for (s = "backgroundColor" === i ? e.parentNode : e;
                                                    ("" === a || "transparent" === a) && s && s.style;) try {
                                                    a = t.css(s, "backgroundColor"), s = s.parentNode
                                                } catch (t) {}
                                                n = n.blend(a && "transparent" !== a ? a : "_default")
                                            }
                                            n = n.toRgbaString()
                                        }
                                        try {
                                            e.style[i] = n
                                        } catch (t) {}
                                    }
                                }, t.fx.step[i] = function(e) {
                                    e.colorInit || (e.start = r(e.elem, i), e.end = r(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                                }
                            }))
                        }, r.hook(n), t.cssHooks.borderColor = {
                            expand: function(t) {
                                var e = {};
                                return f(["Top", "Right", "Bottom", "Left"], (function(i, n) {
                                    e["border" + n + "Color"] = t
                                })), e
                            }
                        }, i = t.Color.names = {
                            aqua: "#00ffff",
                            black: "#000000",
                            blue: "#0000ff",
                            fuchsia: "#ff00ff",
                            gray: "#808080",
                            green: "#008000",
                            lime: "#00ff00",
                            maroon: "#800000",
                            navy: "#000080",
                            olive: "#808000",
                            purple: "#800080",
                            red: "#ff0000",
                            silver: "#c0c0c0",
                            teal: "#008080",
                            white: "#ffffff",
                            yellow: "#ffff00",
                            transparent: [null, null, null, 0],
                            _default: "#ffffff"
                        }
                    }(s),
                    function() {
                        var e, i = ["add", "remove", "toggle"],
                            n = {
                                border: 1,
                                borderBottom: 1,
                                borderColor: 1,
                                borderLeft: 1,
                                borderRight: 1,
                                borderTop: 1,
                                borderWidth: 1,
                                margin: 1,
                                padding: 1
                            };

                        function o(e) {
                            var i, n, o = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                                s = {};
                            if (o && o.length && o[0] && o[o[0]])
                                for (n = o.length; n--;) "string" == typeof o[i = o[n]] && (s[t.camelCase(i)] = o[i]);
                            else
                                for (i in o) "string" == typeof o[i] && (s[i] = o[i]);
                            return s
                        }

                        function r(e, i) {
                            var o, s, r = {};
                            for (o in i) s = i[o], e[o] !== s && (n[o] || !t.fx.step[o] && isNaN(parseFloat(s)) || (r[o] = s));
                            return r
                        }
                        t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], (function(e, i) {
                            t.fx.step[i] = function(t) {
                                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (s.style(t.elem, i, t.end), t.setAttr = !0)
                            }
                        })), t.fn.addBack || (t.fn.addBack = function(t) {
                            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                        }), t.effects.animateClass = function(e, n, s, a) {
                            var l = t.speed(n, s, a);
                            return this.queue((function() {
                                var n, s = t(this),
                                    a = s.attr("class") || "",
                                    u = l.children ? s.find("*").addBack() : s;
                                u = u.map((function() {
                                    return {
                                        el: t(this),
                                        start: o(this)
                                    }
                                })), (n = function() {
                                    t.each(i, (function(t, i) {
                                        e[i] && s[i + "Class"](e[i])
                                    }))
                                })(), u = u.map((function() {
                                    return this.end = o(this.el[0]), this.diff = r(this.start, this.end), this
                                })), s.attr("class", a), u = u.map((function() {
                                    var e = this,
                                        i = t.Deferred(),
                                        n = t.extend({}, l, {
                                            queue: !1,
                                            complete: function() {
                                                i.resolve(e)
                                            }
                                        });
                                    return this.el.animate(this.diff, n), i.promise()
                                })), t.when.apply(t, u.get()).done((function() {
                                    n(), t.each(arguments, (function() {
                                        var e = this.el;
                                        t.each(this.diff, (function(t) {
                                            e.css(t, "")
                                        }))
                                    })), l.complete.call(s[0])
                                }))
                            }))
                        }, t.fn.extend({
                            addClass: (e = t.fn.addClass, function(i, n, o, s) {
                                return n ? t.effects.animateClass.call(this, {
                                    add: i
                                }, n, o, s) : e.apply(this, arguments)
                            }),
                            removeClass: function(e) {
                                return function(i, n, o, s) {
                                    return arguments.length > 1 ? t.effects.animateClass.call(this, {
                                        remove: i
                                    }, n, o, s) : e.apply(this, arguments)
                                }
                            }(t.fn.removeClass),
                            toggleClass: function(e) {
                                return function(i, n, o, s, r) {
                                    return "boolean" == typeof n || void 0 === n ? o ? t.effects.animateClass.call(this, n ? {
                                        add: i
                                    } : {
                                        remove: i
                                    }, o, s, r) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                                        toggle: i
                                    }, n, o, s)
                                }
                            }(t.fn.toggleClass),
                            switchClass: function(e, i, n, o, s) {
                                return t.effects.animateClass.call(this, {
                                    add: i,
                                    remove: e
                                }, n, o, s)
                            }
                        })
                    }(),
                    function() {
                        var e;

                        function s(e, i, n, o) {
                            return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                                effect: e
                            }, null == i && (i = {}), t.isFunction(i) && (o = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (o = n, n = i, i = {}), t.isFunction(n) && (o = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = o || i.complete, e
                        }

                        function r(e) {
                            return !(e && "number" != typeof e && !t.fx.speeds[e]) || "string" == typeof e && !t.effects.effect[e] || !!t.isFunction(e) || "object" == typeof e && !e.effect
                        }

                        function a(t, e) {
                            var i = e.outerWidth(),
                                n = e.outerHeight(),
                                o = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, n, 0];
                            return {
                                top: parseFloat(o[1]) || 0,
                                right: "auto" === o[2] ? i : parseFloat(o[2]),
                                bottom: "auto" === o[3] ? n : parseFloat(o[3]),
                                left: parseFloat(o[4]) || 0
                            }
                        }
                        t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = (e = t.expr.filters.animated, function(i) {
                            return !!t(i).data(o) || e(i)
                        })), !1 !== t.uiBackCompat && t.extend(t.effects, {
                            save: function(t, e) {
                                for (var n = 0, o = e.length; n < o; n++) null !== e[n] && t.data(i + e[n], t[0].style[e[n]])
                            },
                            restore: function(t, e) {
                                for (var n, o = 0, s = e.length; o < s; o++) null !== e[o] && (n = t.data(i + e[o]), t.css(e[o], n))
                            },
                            setMode: function(t, e) {
                                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                            },
                            createWrapper: function(e) {
                                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                                var i = {
                                        width: e.outerWidth(!0),
                                        height: e.outerHeight(!0),
                                        float: e.css("float")
                                    },
                                    n = t("<div></div>").addClass("ui-effects-wrapper").css({
                                        fontSize: "100%",
                                        background: "transparent",
                                        border: "none",
                                        margin: 0,
                                        padding: 0
                                    }),
                                    o = {
                                        width: e.width(),
                                        height: e.height()
                                    },
                                    s = document.activeElement;
                                try {
                                    s.id
                                } catch (t) {
                                    s = document.body
                                }
                                return e.wrap(n), (e[0] === s || t.contains(e[0], s)) && t(s).trigger("focus"), n = e.parent(), "static" === e.css("position") ? (n.css({
                                    position: "relative"
                                }), e.css({
                                    position: "relative"
                                })) : (t.extend(i, {
                                    position: e.css("position"),
                                    zIndex: e.css("z-index")
                                }), t.each(["top", "left", "bottom", "right"], (function(t, n) {
                                    i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                                })), e.css({
                                    position: "relative",
                                    top: 0,
                                    left: 0,
                                    right: "auto",
                                    bottom: "auto"
                                })), e.css(o), n.css(i).show()
                            },
                            removeWrapper: function(e) {
                                var i = document.activeElement;
                                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
                            }
                        }), t.extend(t.effects, {
                            version: "1.12.1",
                            define: function(e, i, n) {
                                return n || (n = i, i = "effect"), t.effects.effect[e] = n, t.effects.effect[e].mode = i, n
                            },
                            scaledDimensions: function(t, e, i) {
                                if (0 === e) return {
                                    height: 0,
                                    width: 0,
                                    outerHeight: 0,
                                    outerWidth: 0
                                };
                                var n = "horizontal" !== i ? (e || 100) / 100 : 1,
                                    o = "vertical" !== i ? (e || 100) / 100 : 1;
                                return {
                                    height: t.height() * o,
                                    width: t.width() * n,
                                    outerHeight: t.outerHeight() * o,
                                    outerWidth: t.outerWidth() * n
                                }
                            },
                            clipToBox: function(t) {
                                return {
                                    width: t.clip.right - t.clip.left,
                                    height: t.clip.bottom - t.clip.top,
                                    left: t.clip.left,
                                    top: t.clip.top
                                }
                            },
                            unshift: function(t, e, i) {
                                var n = t.queue();
                                e > 1 && n.splice.apply(n, [1, 0].concat(n.splice(e, i))), t.dequeue()
                            },
                            saveStyle: function(t) {
                                t.data(n, t[0].style.cssText)
                            },
                            restoreStyle: function(t) {
                                t[0].style.cssText = t.data(n) || "", t.removeData(n)
                            },
                            mode: function(t, e) {
                                var i = t.is(":hidden");
                                return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
                            },
                            getBaseline: function(t, e) {
                                var i, n;
                                switch (t[0]) {
                                    case "top":
                                        i = 0;
                                        break;
                                    case "middle":
                                        i = .5;
                                        break;
                                    case "bottom":
                                        i = 1;
                                        break;
                                    default:
                                        i = t[0] / e.height
                                }
                                switch (t[1]) {
                                    case "left":
                                        n = 0;
                                        break;
                                    case "center":
                                        n = .5;
                                        break;
                                    case "right":
                                        n = 1;
                                        break;
                                    default:
                                        n = t[1] / e.width
                                }
                                return {
                                    x: n,
                                    y: i
                                }
                            },
                            createPlaceholder: function(e) {
                                var n, o = e.css("position"),
                                    s = e.position();
                                return e.css({
                                    marginTop: e.css("marginTop"),
                                    marginBottom: e.css("marginBottom"),
                                    marginLeft: e.css("marginLeft"),
                                    marginRight: e.css("marginRight")
                                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(o) && (o = "absolute", n = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                                    display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                                    visibility: "hidden",
                                    marginTop: e.css("marginTop"),
                                    marginBottom: e.css("marginBottom"),
                                    marginLeft: e.css("marginLeft"),
                                    marginRight: e.css("marginRight"),
                                    float: e.css("float")
                                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(i + "placeholder", n)), e.css({
                                    position: o,
                                    left: s.left,
                                    top: s.top
                                }), n
                            },
                            removePlaceholder: function(t) {
                                var e = i + "placeholder",
                                    n = t.data(e);
                                n && (n.remove(), t.removeData(e))
                            },
                            cleanUp: function(e) {
                                t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
                            },
                            setTransition: function(e, i, n, o) {
                                return o = o || {}, t.each(i, (function(t, i) {
                                    var s = e.cssUnit(i);
                                    s[0] > 0 && (o[i] = s[0] * n + s[1])
                                })), o
                            }
                        }), t.fn.extend({
                            effect: function() {
                                var e = s.apply(this, arguments),
                                    i = t.effects.effect[e.effect],
                                    n = i.mode,
                                    r = e.queue,
                                    a = r || "fx",
                                    l = e.complete,
                                    u = e.mode,
                                    c = [],
                                    f = function(e) {
                                        var i = t(this),
                                            s = t.effects.mode(i, u) || n;
                                        i.data(o, !0), c.push(s), n && ("show" === s || s === n && "hide" === s) && i.show(), n && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e()
                                    };
                                if (t.fx.off || !i) return u ? this[u](e.duration, l) : this.each((function() {
                                    l && l.call(this)
                                }));

                                function h(s) {
                                    var r = t(this);

                                    function a() {
                                        r.removeData(o), t.effects.cleanUp(r), "hide" === e.mode && r.hide(), f()
                                    }

                                    function f() {
                                        t.isFunction(l) && l.call(r[0]), t.isFunction(s) && s()
                                    }
                                    e.mode = c.shift(), !1 === t.uiBackCompat || n ? "none" === e.mode ? (r[u](), f()) : i.call(r[0], e, a) : (r.is(":hidden") ? "hide" === u : "show" === u) ? (r[u](), f()) : i.call(r[0], e, f)
                                }
                                return !1 === r ? this.each(f).each(h) : this.queue(a, f).queue(a, h)
                            },
                            show: function(t) {
                                return function(e) {
                                    if (r(e)) return t.apply(this, arguments);
                                    var i = s.apply(this, arguments);
                                    return i.mode = "show", this.effect.call(this, i)
                                }
                            }(t.fn.show),
                            hide: function(t) {
                                return function(e) {
                                    if (r(e)) return t.apply(this, arguments);
                                    var i = s.apply(this, arguments);
                                    return i.mode = "hide", this.effect.call(this, i)
                                }
                            }(t.fn.hide),
                            toggle: function(t) {
                                return function(e) {
                                    if (r(e) || "boolean" == typeof e) return t.apply(this, arguments);
                                    var i = s.apply(this, arguments);
                                    return i.mode = "toggle", this.effect.call(this, i)
                                }
                            }(t.fn.toggle),
                            cssUnit: function(e) {
                                var i = this.css(e),
                                    n = [];
                                return t.each(["em", "px", "%", "pt"], (function(t, e) {
                                    i.indexOf(e) > 0 && (n = [parseFloat(i), e])
                                })), n
                            },
                            cssClip: function(t) {
                                return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : a(this.css("clip"), this)
                            },
                            transfer: function(e, i) {
                                var n = t(this),
                                    o = t(e.to),
                                    s = "fixed" === o.css("position"),
                                    r = t("body"),
                                    a = s ? r.scrollTop() : 0,
                                    l = s ? r.scrollLeft() : 0,
                                    u = o.offset(),
                                    c = {
                                        top: u.top - a,
                                        left: u.left - l,
                                        height: o.innerHeight(),
                                        width: o.innerWidth()
                                    },
                                    f = n.offset(),
                                    h = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                                        top: f.top - a,
                                        left: f.left - l,
                                        height: n.innerHeight(),
                                        width: n.innerWidth(),
                                        position: s ? "fixed" : "absolute"
                                    }).animate(c, e.duration, e.easing, (function() {
                                        h.remove(), t.isFunction(i) && i()
                                    }))
                            }
                        }), t.fx.step.clip = function(e) {
                            e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = a(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
                                top: e.pos * (e.end.top - e.start.top) + e.start.top,
                                right: e.pos * (e.end.right - e.start.right) + e.start.right,
                                bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                                left: e.pos * (e.end.left - e.start.left) + e.start.left
                            })
                        }
                    }(), e = {}, t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], (function(t, i) {
                        e[i] = function(e) {
                            return Math.pow(e, t + 2)
                        }
                    })), t.extend(e, {
                        Sine: function(t) {
                            return 1 - Math.cos(t * Math.PI / 2)
                        },
                        Circ: function(t) {
                            return 1 - Math.sqrt(1 - t * t)
                        },
                        Elastic: function(t) {
                            return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                        },
                        Back: function(t) {
                            return t * t * (3 * t - 2)
                        },
                        Bounce: function(t) {
                            for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                        }
                    }), t.each(e, (function(e, i) {
                        t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                            return 1 - i(1 - t)
                        }, t.easing["easeInOut" + e] = function(t) {
                            return t < .5 ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                        }
                    })), t.effects
            }, void 0 === (s = "function" == typeof n ? n.apply(e, o) : n) || (t.exports = s)
        },
        558264: (t, e, i) => {
            var n, o, s;
            o = [i(823127), i(834912)], void 0 === (s = "function" == typeof(n = function(t) {
                return t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
            }) ? n.apply(e, o) : n) || (t.exports = s)
        },
        130420: (t, e, i) => {
            var n, o, s;
            o = [i(823127), i(834912)], n = function(t) {
                return function() {
                    var e, i = Math.max,
                        n = Math.abs,
                        o = /left|center|right/,
                        s = /top|center|bottom/,
                        r = /[\+\-]\d+(\.[\d]+)?%?/,
                        a = /^\w+/,
                        l = /%$/,
                        u = t.fn.position;

                    function c(t, e, i) {
                        return [parseFloat(t[0]) * (l.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (l.test(t[1]) ? i / 100 : 1)]
                    }

                    function f(e, i) {
                        return parseInt(t.css(e, i), 10) || 0
                    }

                    function h(e) {
                        var i = e[0];
                        return 9 === i.nodeType ? {
                            width: e.width(),
                            height: e.height(),
                            offset: {
                                top: 0,
                                left: 0
                            }
                        } : t.isWindow(i) ? {
                            width: e.width(),
                            height: e.height(),
                            offset: {
                                top: e.scrollTop(),
                                left: e.scrollLeft()
                            }
                        } : i.preventDefault ? {
                            width: 0,
                            height: 0,
                            offset: {
                                top: i.pageY,
                                left: i.pageX
                            }
                        } : {
                            width: e.outerWidth(),
                            height: e.outerHeight(),
                            offset: e.offset()
                        }
                    }
                    t.position = {
                        scrollbarWidth: function() {
                            if (void 0 !== e) return e;
                            var i, n, o = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                                s = o.children()[0];
                            return t("body").append(o), i = s.offsetWidth, o.css("overflow", "scroll"),
                                i === (n = s.offsetWidth) && (n = o[0].clientWidth), o.remove(), e = i - n
                        },
                        getScrollInfo: function(e) {
                            var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                                n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                                o = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                            return {
                                width: "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                                height: o ? t.position.scrollbarWidth() : 0
                            }
                        },
                        getWithinInfo: function(e) {
                            var i = t(e || window),
                                n = t.isWindow(i[0]),
                                o = !!i[0] && 9 === i[0].nodeType;
                            return {
                                element: i,
                                isWindow: n,
                                isDocument: o,
                                offset: n || o ? {
                                    left: 0,
                                    top: 0
                                } : t(e).offset(),
                                scrollLeft: i.scrollLeft(),
                                scrollTop: i.scrollTop(),
                                width: i.outerWidth(),
                                height: i.outerHeight()
                            }
                        }
                    }, t.fn.position = function(e) {
                        if (!e || !e.of) return u.apply(this, arguments);
                        e = t.extend({}, e);
                        var l, p, d, g, m, v, y = t(e.of),
                            w = t.position.getWithinInfo(e.within),
                            _ = t.position.getScrollInfo(w),
                            b = (e.collision || "flip").split(" "),
                            x = {};
                        return v = h(y), y[0].preventDefault && (e.at = "left top"), p = v.width, d = v.height, g = v.offset, m = t.extend({}, g), t.each(["my", "at"], (function() {
                            var t, i, n = (e[this] || "").split(" ");
                            1 === n.length && (n = o.test(n[0]) ? n.concat(["center"]) : s.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = o.test(n[0]) ? n[0] : "center", n[1] = s.test(n[1]) ? n[1] : "center", t = r.exec(n[0]), i = r.exec(n[1]), x[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [a.exec(n[0])[0], a.exec(n[1])[0]]
                        })), 1 === b.length && (b[1] = b[0]), "right" === e.at[0] ? m.left += p : "center" === e.at[0] && (m.left += p / 2), "bottom" === e.at[1] ? m.top += d : "center" === e.at[1] && (m.top += d / 2), l = c(x.at, p, d), m.left += l[0], m.top += l[1], this.each((function() {
                            var o, s, r = t(this),
                                a = r.outerWidth(),
                                u = r.outerHeight(),
                                h = f(this, "marginLeft"),
                                v = f(this, "marginTop"),
                                C = a + h + f(this, "marginRight") + _.width,
                                D = u + v + f(this, "marginBottom") + _.height,
                                W = t.extend({}, m),
                                k = c(x.my, r.outerWidth(), r.outerHeight());
                            "right" === e.my[0] ? W.left -= a : "center" === e.my[0] && (W.left -= a / 2), "bottom" === e.my[1] ? W.top -= u : "center" === e.my[1] && (W.top -= u / 2), W.left += k[0], W.top += k[1], o = {
                                marginLeft: h,
                                marginTop: v
                            }, t.each(["left", "top"], (function(i, n) {
                                t.ui.position[b[i]] && t.ui.position[b[i]][n](W, {
                                    targetWidth: p,
                                    targetHeight: d,
                                    elemWidth: a,
                                    elemHeight: u,
                                    collisionPosition: o,
                                    collisionWidth: C,
                                    collisionHeight: D,
                                    offset: [l[0] + k[0], l[1] + k[1]],
                                    my: e.my,
                                    at: e.at,
                                    within: w,
                                    elem: r
                                })
                            })), e.using && (s = function(t) {
                                var o = g.left - W.left,
                                    s = o + p - a,
                                    l = g.top - W.top,
                                    c = l + d - u,
                                    f = {
                                        target: {
                                            element: y,
                                            left: g.left,
                                            top: g.top,
                                            width: p,
                                            height: d
                                        },
                                        element: {
                                            element: r,
                                            left: W.left,
                                            top: W.top,
                                            width: a,
                                            height: u
                                        },
                                        horizontal: s < 0 ? "left" : o > 0 ? "right" : "center",
                                        vertical: c < 0 ? "top" : l > 0 ? "bottom" : "middle"
                                    };
                                p < a && n(o + s) < p && (f.horizontal = "center"), d < u && n(l + c) < d && (f.vertical = "middle"), i(n(o), n(s)) > i(n(l), n(c)) ? f.important = "horizontal" : f.important = "vertical", e.using.call(this, t, f)
                            }), r.offset(t.extend(W, {
                                using: s
                            }))
                        }))
                    }, t.ui.position = {
                        fit: {
                            left: function(t, e) {
                                var n, o = e.within,
                                    s = o.isWindow ? o.scrollLeft : o.offset.left,
                                    r = o.width,
                                    a = t.left - e.collisionPosition.marginLeft,
                                    l = s - a,
                                    u = a + e.collisionWidth - r - s;
                                e.collisionWidth > r ? l > 0 && u <= 0 ? (n = t.left + l + e.collisionWidth - r - s, t.left += l - n) : t.left = u > 0 && l <= 0 ? s : l > u ? s + r - e.collisionWidth : s : l > 0 ? t.left += l : u > 0 ? t.left -= u : t.left = i(t.left - a, t.left)
                            },
                            top: function(t, e) {
                                var n, o = e.within,
                                    s = o.isWindow ? o.scrollTop : o.offset.top,
                                    r = e.within.height,
                                    a = t.top - e.collisionPosition.marginTop,
                                    l = s - a,
                                    u = a + e.collisionHeight - r - s;
                                e.collisionHeight > r ? l > 0 && u <= 0 ? (n = t.top + l + e.collisionHeight - r - s, t.top += l - n) : t.top = u > 0 && l <= 0 ? s : l > u ? s + r - e.collisionHeight : s : l > 0 ? t.top += l : u > 0 ? t.top -= u : t.top = i(t.top - a, t.top)
                            }
                        },
                        flip: {
                            left: function(t, e) {
                                var i, o, s = e.within,
                                    r = s.offset.left + s.scrollLeft,
                                    a = s.width,
                                    l = s.isWindow ? s.scrollLeft : s.offset.left,
                                    u = t.left - e.collisionPosition.marginLeft,
                                    c = u - l,
                                    f = u + e.collisionWidth - a - l,
                                    h = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                                    p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                                    d = -2 * e.offset[0];
                                c < 0 ? ((i = t.left + h + p + d + e.collisionWidth - a - r) < 0 || i < n(c)) && (t.left += h + p + d) : f > 0 && ((o = t.left - e.collisionPosition.marginLeft + h + p + d - l) > 0 || n(o) < f) && (t.left += h + p + d)
                            },
                            top: function(t, e) {
                                var i, o, s = e.within,
                                    r = s.offset.top + s.scrollTop,
                                    a = s.height,
                                    l = s.isWindow ? s.scrollTop : s.offset.top,
                                    u = t.top - e.collisionPosition.marginTop,
                                    c = u - l,
                                    f = u + e.collisionHeight - a - l,
                                    h = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                                    p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                                    d = -2 * e.offset[1];
                                c < 0 ? ((o = t.top + h + p + d + e.collisionHeight - a - r) < 0 || o < n(c)) && (t.top += h + p + d) : f > 0 && ((i = t.top - e.collisionPosition.marginTop + h + p + d - l) > 0 || n(i) < f) && (t.top += h + p + d)
                            }
                        },
                        flipfit: {
                            left: function() {
                                t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                            },
                            top: function() {
                                t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                            }
                        }
                    }
                }(), t.ui.position
            }, void 0 === (s = "function" == typeof n ? n.apply(e, o) : n) || (t.exports = s)
        },
        834912: (t, e, i) => {
            var n, o, s;
            o = [i(823127)], void 0 === (s = "function" == typeof(n = function(t) {
                return t.ui = t.ui || {}, t.ui.version = "1.12.1"
            }) ? n.apply(e, o) : n) || (t.exports = s)
        },
        162066: (t, e, i) => {
            var n, o, s;
            o = [i(823127), i(834912)], n = function(t) {
                var e, i = 0,
                    n = Array.prototype.slice;
                return t.cleanData = (e = t.cleanData, function(i) {
                    var n, o, s;
                    for (s = 0; null != (o = i[s]); s++) try {
                        (n = t._data(o, "events")) && n.remove && t(o).triggerHandler("remove")
                    } catch (t) {}
                    e(i)
                }), t.widget = function(e, i, n) {
                    var o, s, r, a = {},
                        l = e.split(".")[0],
                        u = l + "-" + (e = e.split(".")[1]);
                    return n || (n = i, i = t.Widget), t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))), t.expr[":"][u.toLowerCase()] = function(e) {
                        return !!t.data(e, u)
                    }, t[l] = t[l] || {}, o = t[l][e], s = t[l][e] = function(t, e) {
                        if (!this._createWidget) return new s(t, e);
                        arguments.length && this._createWidget(t, e)
                    }, t.extend(s, o, {
                        version: n.version,
                        _proto: t.extend({}, n),
                        _childConstructors: []
                    }), (r = new i).options = t.widget.extend({}, r.options), t.each(n, (function(e, n) {
                        t.isFunction(n) ? a[e] = function() {
                            function t() {
                                return i.prototype[e].apply(this, arguments)
                            }

                            function o(t) {
                                return i.prototype[e].apply(this, t)
                            }
                            return function() {
                                var e, i = this._super,
                                    s = this._superApply;
                                return this._super = t, this._superApply = o, e = n.apply(this, arguments), this._super = i, this._superApply = s, e
                            }
                        }() : a[e] = n
                    })), s.prototype = t.widget.extend(r, {
                        widgetEventPrefix: o && r.widgetEventPrefix || e
                    }, a, {
                        constructor: s,
                        namespace: l,
                        widgetName: e,
                        widgetFullName: u
                    }), o ? (t.each(o._childConstructors, (function(e, i) {
                        var n = i.prototype;
                        t.widget(n.namespace + "." + n.widgetName, s, i._proto)
                    })), delete o._childConstructors) : i._childConstructors.push(s), t.widget.bridge(e, s), s
                }, t.widget.extend = function(e) {
                    for (var i, o, s = n.call(arguments, 1), r = 0, a = s.length; r < a; r++)
                        for (i in s[r]) o = s[r][i], s[r].hasOwnProperty(i) && void 0 !== o && (t.isPlainObject(o) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], o) : t.widget.extend({}, o) : e[i] = o);
                    return e
                }, t.widget.bridge = function(e, i) {
                    var o = i.prototype.widgetFullName || e;
                    t.fn[e] = function(s) {
                        var r = "string" == typeof s,
                            a = n.call(arguments, 1),
                            l = this;
                        return r ? this.length || "instance" !== s ? this.each((function() {
                            var i, n = t.data(this, o);
                            return "instance" === s ? (l = n, !1) : n ? t.isFunction(n[s]) && "_" !== s.charAt(0) ? (i = n[s].apply(n, a)) !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
                        })) : l = void 0 : (a.length && (s = t.widget.extend.apply(null, [s].concat(a))), this.each((function() {
                            var e = t.data(this, o);
                            e ? (e.option(s || {}), e._init && e._init()) : t.data(this, o, new i(s, this))
                        }))), l
                    }
                }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
                    widgetName: "widget",
                    widgetEventPrefix: "",
                    defaultElement: "<div>",
                    options: {
                        classes: {},
                        disabled: !1,
                        create: null
                    },
                    _createWidget: function(e, n) {
                        n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                            remove: function(t) {
                                t.target === n && this.destroy()
                            }
                        }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
                    },
                    _getCreateOptions: function() {
                        return {}
                    },
                    _getCreateEventData: t.noop,
                    _create: t.noop,
                    _init: t.noop,
                    destroy: function() {
                        var e = this;
                        this._destroy(), t.each(this.classesElementLookup, (function(t, i) {
                            e._removeClass(i, t)
                        })), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
                    },
                    _destroy: t.noop,
                    widget: function() {
                        return this.element
                    },
                    option: function(e, i) {
                        var n, o, s, r = e;
                        if (0 === arguments.length) return t.widget.extend({}, this.options);
                        if ("string" == typeof e)
                            if (r = {}, n = e.split("."), e = n.shift(), n.length) {
                                for (o = r[e] = t.widget.extend({}, this.options[e]), s = 0; s < n.length - 1; s++) o[n[s]] = o[n[s]] || {}, o = o[n[s]];
                                if (e = n.pop(), 1 === arguments.length) return void 0 === o[e] ? null : o[e];
                                o[e] = i
                            } else {
                                if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                                r[e] = i
                            }
                        return this._setOptions(r), this
                    },
                    _setOptions: function(t) {
                        var e;
                        for (e in t) this._setOption(e, t[e]);
                        return this
                    },
                    _setOption: function(t, e) {
                        return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
                    },
                    _setOptionClasses: function(e) {
                        var i, n, o;
                        for (i in e) o = this.classesElementLookup[i], e[i] !== this.options.classes[i] && o && o.length && (n = t(o.get()), this._removeClass(o, i), n.addClass(this._classes({
                            element: n,
                            keys: i,
                            classes: e,
                            add: !0
                        })))
                    },
                    _setOptionDisabled: function(t) {
                        this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
                    },
                    enable: function() {
                        return this._setOptions({
                            disabled: !1
                        })
                    },
                    disable: function() {
                        return this._setOptions({
                            disabled: !0
                        })
                    },
                    _classes: function(e) {
                        var i = [],
                            n = this;

                        function o(o, s) {
                            var r, a;
                            for (a = 0; a < o.length; a++) r = n.classesElementLookup[o[a]] || t(), r = e.add ? t(t.unique(r.get().concat(e.element.get()))) : t(r.not(e.element).get()), n.classesElementLookup[o[a]] = r, i.push(o[a]), s && e.classes[o[a]] && i.push(e.classes[o[a]])
                        }
                        return e = t.extend({
                            element: this.element,
                            classes: this.options.classes || {}
                        }, e), this._on(e.element, {
                            remove: "_untrackClassesElement"
                        }), e.keys && o(e.keys.match(/\S+/g) || [], !0), e.extra && o(e.extra.match(/\S+/g) || []), i.join(" ")
                    },
                    _untrackClassesElement: function(e) {
                        var i = this;
                        t.each(i.classesElementLookup, (function(n, o) {
                            -1 !== t.inArray(e.target, o) && (i.classesElementLookup[n] = t(o.not(e.target).get()))
                        }))
                    },
                    _removeClass: function(t, e, i) {
                        return this._toggleClass(t, e, i, !1)
                    },
                    _addClass: function(t, e, i) {
                        return this._toggleClass(t, e, i, !0)
                    },
                    _toggleClass: function(t, e, i, n) {
                        n = "boolean" == typeof n ? n : i;
                        var o = "string" == typeof t || null === t,
                            s = {
                                extra: o ? e : i,
                                keys: o ? t : e,
                                element: o ? this.element : t,
                                add: n
                            };
                        return s.element.toggleClass(this._classes(s), n), this
                    },
                    _on: function(e, i, n) {
                        var o, s = this;
                        "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = o = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, o = this.widget()), t.each(n, (function(n, r) {
                            function a() {
                                if (e || !0 !== s.options.disabled && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof r ? s[r] : r).apply(s, arguments)
                            }
                            "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                            var l = n.match(/^([\w:-]*)\s*(.*)$/),
                                u = l[1] + s.eventNamespace,
                                c = l[2];
                            c ? o.on(u, c, a) : i.on(u, a)
                        }))
                    },
                    _off: function(e, i) {
                        i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
                    },
                    _delay: function(t, e) {
                        function i() {
                            return ("string" == typeof t ? n[t] : t).apply(n, arguments)
                        }
                        var n = this;
                        return setTimeout(i, e || 0)
                    },
                    _hoverable: function(e) {
                        this.hoverable = this.hoverable.add(e), this._on(e, {
                            mouseenter: function(e) {
                                this._addClass(t(e.currentTarget), null, "ui-state-hover")
                            },
                            mouseleave: function(e) {
                                this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                            }
                        })
                    },
                    _focusable: function(e) {
                        this.focusable = this.focusable.add(e), this._on(e, {
                            focusin: function(e) {
                                this._addClass(t(e.currentTarget), null, "ui-state-focus")
                            },
                            focusout: function(e) {
                                this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                            }
                        })
                    },
                    _trigger: function(e, i, n) {
                        var o, s, r = this.options[e];
                        if (n = n || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], s = i.originalEvent)
                            for (o in s) o in i || (i[o] = s[o]);
                        return this.element.trigger(i, n), !(t.isFunction(r) && !1 === r.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
                    }
                }, t.each({
                    show: "fadeIn",
                    hide: "fadeOut"
                }, (function(e, i) {
                    t.Widget.prototype["_" + e] = function(n, o, s) {
                        var r;
                        "string" == typeof o && (o = {
                            effect: o
                        });
                        var a = o ? !0 === o || "number" == typeof o ? i : o.effect || i : e;
                        "number" == typeof(o = o || {}) && (o = {
                            duration: o
                        }), r = !t.isEmptyObject(o), o.complete = s, o.delay && n.delay(o.delay), r && t.effects && t.effects.effect[a] ? n[e](o) : a !== e && n[a] ? n[a](o.duration, o.easing, s) : n.queue((function(i) {
                            t(this)[e](), s && s.call(n[0]), i()
                        }))
                    }
                })), t.widget
            }, void 0 === (s = "function" == typeof n ? n.apply(e, o) : n) || (t.exports = s)
        },
        452282: (t, e, i) => {
            var n, o, s;
            o = [i(823127), i(558264), i(834912), i(162066)], void 0 === (s = "function" == typeof(n = function(t) {
                var e = !1;
                return t(document).on("mouseup", (function() {
                    e = !1
                })), t.widget("ui.mouse", {
                    version: "1.12.1",
                    options: {
                        cancel: "input, textarea, button, select, option",
                        distance: 1,
                        delay: 0
                    },
                    _mouseInit: function() {
                        var e = this;
                        this.element.on("mousedown." + this.widgetName, (function(t) {
                            return e._mouseDown(t)
                        })).on("click." + this.widgetName, (function(i) {
                            if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
                        })), this.started = !1
                    },
                    _mouseDestroy: function() {
                        this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
                    },
                    _mouseDown: function(i) {
                        if (!e) {
                            this._mouseMoved = !1, this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                            var n = this,
                                o = 1 === i.which,
                                s = !("string" != typeof this.options.cancel || !i.target.nodeName) && t(i.target).closest(this.options.cancel).length;
                            return !(o && !s && this._mouseCapture(i) && (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout((function() {
                                n.mouseDelayMet = !0
                            }), this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = !1 !== this._mouseStart(i), !this._mouseStarted) ? (i.preventDefault(), 0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                                return n._mouseMove(t)
                            }, this._mouseUpDelegate = function(t) {
                                return n._mouseUp(t)
                            }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, 0)))
                        }
                    },
                    _mouseMove: function(e) {
                        if (this._mouseMoved) {
                            if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                            if (!e.which)
                                if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                                else if (!this.ignoreMissingWhich) return this._mouseUp(e)
                        }
                        return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e),
                            e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
                    },
                    _mouseUp: function(i) {
                        this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, i.target === this._mouseDownEvent.target && t.data(i.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(i)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, e = !1, i.preventDefault()
                    },
                    _mouseDistanceMet: function(t) {
                        return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
                    },
                    _mouseDelayMet: function() {
                        return this.mouseDelayMet
                    },
                    _mouseStart: function() {},
                    _mouseDrag: function() {},
                    _mouseStop: function() {},
                    _mouseCapture: function() {
                        return !0
                    }
                })
            }) ? n.apply(e, o) : n) || (t.exports = s)
        },
        332658: () => {
            "use strict";
            var t, e, i, n, o, s;
            window.parent !== window && window.CanvasRenderingContext2D && window.TextMetrics && (e = window.CanvasRenderingContext2D.prototype) && e.hasOwnProperty("font") && e.hasOwnProperty("mozTextStyle") && "function" == typeof e.__lookupSetter__ && (i = e.__lookupSetter__("font")) && (e.__defineSetter__("font", (function(t) {
                try {
                    return i.call(this, t)
                } catch (t) {
                    if ("NS_ERROR_FAILURE" !== t.name) throw t
                }
            })), n = e.measureText, t = function() {
                this.width = 0, this.isFake = !0, this.__proto__ = window.TextMetrics.prototype
            }, e.measureText = function(e) {
                try {
                    return n.apply(this, arguments)
                } catch (e) {
                    if ("NS_ERROR_FAILURE" !== e.name) throw e;
                    return new t
                }
            }, o = e.fillText, e.fillText = function(t, e, i, n) {
                try {
                    o.apply(this, arguments)
                } catch (t) {
                    if ("NS_ERROR_FAILURE" !== t.name) throw t
                }
            }, s = e.strokeText, e.strokeText = function(t, e, i, n) {
                try {
                    s.apply(this, arguments)
                } catch (t) {
                    if ("NS_ERROR_FAILURE" !== t.name) throw t
                }
            })
        },
        801402: (t, e, i) => {
            "use strict";
            i.r(e);
            i(636995), i(162066), i(452282), i(130420), i(386727)
        }
    }
]);
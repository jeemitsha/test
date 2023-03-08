(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [72685], {
        696828: (t, e, n) => {
            "use strict";
            var r = n(495046),
                o = [{
                    d: "E-Mini S&P 500",
                    t: "ES"
                }, {
                    d: "E-Mini Nasdaq 100",
                    t: "NQ"
                }, {
                    d: "Gold",
                    t: "GC"
                }, {
                    d: "Silver",
                    t: "SI"
                }, {
                    d: "Crude Oil WTI",
                    t: "CL"
                }, {
                    d: "Natural Gas",
                    t: "NG"
                }, {
                    d: "Australian Dollar",
                    t: "6A"
                }, {
                    d: "Australian Dollar (Floor)",
                    t: "AD"
                }, {
                    d: "Euro FX",
                    t: "6E"
                }, {
                    d: "Euro FX (Floor)",
                    t: "EC"
                }, {
                    d: "Corn",
                    t: "ZC"
                }, {
                    d: "Corn (Floor)",
                    t: "C"
                }, {
                    d: "Eurodollar",
                    t: "GE"
                }, {
                    d: "Eurodollar (Floor)",
                    t: "ED"
                }],
                i = function() {
                    var t = [{
                        pattern: "(",
                        ctor: a
                    }, {
                        pattern: ")",
                        ctor: s
                    }, {
                        pattern: "+",
                        ctor: c
                    }, {
                        pattern: "-",
                        ctor: u
                    }, {
                        pattern: "*",
                        ctor: d
                    }, {
                        pattern: "/",
                        ctor: p
                    }, {
                        pattern: "^",
                        ctor: _
                    }, {
                        pattern: /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
                        ctor: y
                    }, {
                        pattern: /\./,
                        ctor: S
                    }, {
                        pattern: r.enabled("charting_library_base") ? /[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF^][a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!:.&]*|'.+?'/ : /[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF][a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&]*|'.+?'/,
                        ctor: v
                    }, {
                        pattern: /'[^']*/,
                        ctor: g
                    }, {
                        pattern: /[\0-\x20\s]+/,
                        ctor: i
                    }];

                    function e(t, e) {
                        var n = function() {};
                        return n.prototype = e.prototype, t.prototype = new n, t
                    }

                    function n() {}

                    function i(t) {
                        this.value = t
                    }

                    function a() {}

                    function s() {}

                    function l() {}

                    function c() {}

                    function u() {}

                    function d() {}

                    function p() {}

                    function _() {}
                    n.prototype.toString = function() {
                        return this.value
                    }, e(i, n), e(a, n), a.prototype.value = "(", e(s, n), s.prototype.value = ")", e(l, n), e(c, l), c.prototype.value = "+", c.prototype.precedence = 0, c.prototype.commutative = !0, e(u, l), u.prototype.value = "-", u.prototype.precedence = 0, u.prototype.commutative = !1, e(d, l), d.prototype.value = "*", d.prototype.precedence = 1, d.prototype.commutative = !0, e(p, l), p.prototype.value = "/", p.prototype.precedence = 1, p.prototype.commutative = !1, e(_, l), _.prototype.value = "^", _.prototype.precedence = 2, _.prototype.commutative = !1;
                    var f = /^'?(?:([A-Z0-9_]+):)?(.*?)'?$/i,
                        h = /[+\-/*]/;

                    function v(t) {
                        this.value = t
                    }

                    function y(t) {
                        this.value = t
                    }

                    function m(t) {
                        this.value = t
                    }

                    function g() {
                        v.apply(this, arguments)
                    }

                    function S() {
                        y.apply(this, arguments)
                    }
                    e(v, n), v.prototype.toString = function() {
                        if (this.hasOwnProperty("_ticker")) {
                            var t = h.test(this._ticker) ? "'" : "";
                            return t + (this._exchange ? this._exchange + ":" : "") + this._ticker + t
                        }
                        return this.value
                    }, v.prototype.parse = function() {
                        var t = f.exec(this.value);
                        t[1] && (this._exchange = t[1]), this._ticker = t[2]
                    }, v.prototype.parseAsFutures = function() {
                        this.hasOwnProperty("_ticker") || this.parse();
                        for (var t = function(t) {
                                return o.some((function(e) {
                                    return e.t === t
                                }))
                            }, e = 2; e >= 1; --e) {
                            var n = this._ticker.slice(0, e);
                            if (t(n)) {
                                this._root = n, this._contract = this._ticker.slice(e);
                                break
                            }
                        }
                    }, v.prototype.exchange = function(t) {
                        if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._exchange;
                        null == t ? delete this._exchange : this._exchange = t + ""
                    }, v.prototype.ticker = function(t) {
                        if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._ticker;
                        null == t ? delete this._ticker : this._ticker = t + "", delete this._root, delete this._contract
                    }, v.prototype.root = function(t) {
                        if (this.hasOwnProperty("_root") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
                        null == t ? delete this._root : (this._root = t + "", this._root && (this._ticker = this._root + (this._contract || "")))
                    }, v.prototype.contract = function(t) {
                        if (this.hasOwnProperty("_contract") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
                        null == t ? delete this._contract : (this._contract = t + "", this._root && (this._ticker = this._root + this._contract))
                    }, e(y, n), y.prototype.toString = function() {
                        return this.hasOwnProperty("_normalizedValue") ? this._normalizedValue : this.value
                    }, y.prototype.parse = function() {
                        this._normalizedValue = this.value.replace(/^0+|\.0*$/g, "").replace(/(\.\d*?)0+$/, "$1").replace(/^(\.|$)/, "0$1")
                    }, m.prototype.toString = function() {
                        return this.value
                    }, e(g, v), g.prototype.isIncomplete = !0, g.prototype.incompleteSuggest = function() {
                        if ("'" !== this.value) return String("'")
                    }, e(S, y), S.prototype.isIncomplete = !0;
                    var b = new RegExp(t.map((function(t) {
                        return "(" + ("string" == typeof t.pattern ? t.pattern.replace(/[\^$()[\]{}*+?|\\]/g, "\\$&") : t.pattern.source) + ")"
                    })).concat(".").join("|"), "g");

                    function x(e, n) {
                        var r, o = [];
                        t: for (; r = b.exec(e);) {
                            for (var a = t.length; a--;)
                                if (r[a + 1]) {
                                    if (t[a].ctor) {
                                        var s = new t[a].ctor(r[a + 1]);
                                        s._offset = r.index, o.push(s)
                                    }
                                    continue t
                                }
                            var l = new m(r[0]);
                            l._offset = r.index, o.push(l)
                        }
                        if (n && n.recover) {
                            var c;
                            for (a = o.length; a--;) {
                                var u = o[a];
                                if (u instanceof y || u instanceof v) {
                                    if (void 0 !== c) {
                                        var d = new v(""),
                                            p = o.splice(a, c - a + 1, d);
                                        d.value = p.map((function(t) {
                                            return t.value
                                        })).join("")
                                    }
                                    c = a
                                } else u instanceof i || (c = void 0)
                            }
                        }
                        return o
                    }

                    function A(t) {
                        for (var e = [], n = 0; n < t.length; n++) t[n] instanceof i || e.push(t[n]);
                        return e
                    }

                    function w(t) {
                        t = A(t);
                        for (var e, n = [], r = [], o = 0; o < t.length; o++) {
                            var i = t[o];
                            if (i instanceof l) r.length && r[r.length - 1].minPrecedence > i.precedence && (r[r.length - 1].minPrecedence = i.precedence);
                            else if (i instanceof a) r.push(e = {
                                minPrecedence: 1 / 0,
                                openBraceIndex: o
                            });
                            else if (i instanceof s) {
                                var c = t[(e = r.pop()).openBraceIndex - 1],
                                    u = t[o + 1];
                                u instanceof l && !(u.precedence <= e.minPrecedence) || !(!(c instanceof l) || c.precedence < e.minPrecedence || c.precedence === e.minPrecedence && c.commutative) || (n.unshift(e.openBraceIndex), n.push(o), r.length && r[r.length - 1].minPrecedence > e.minPrecedence && (r[r.length - 1].minPrecedence = e.minPrecedence))
                            }
                        }
                        for (o = n.length; o--;) t.splice(n[o], 1);
                        return t
                    }

                    function I(t) {
                        if ("string" != typeof t) throw new TypeError("expression must be a string");
                        return (t = x(t)).filter((function(t) {
                            return t instanceof v
                        })).map((function(t) {
                            return t.exchange()
                        })).filter((function(t) {
                            return t
                        }))
                    }

                    function O(t) {
                        return 1 !== (t = I(t)).length ? null : t[0]
                    }

                    function E(t, e) {
                        return (t = I(t)).some((function(t) {
                            return e.includes((t || "").toUpperCase())
                        }))
                    }

                    function F(t) {
                        return t.join("")
                    }
                    return {
                        tokenize: x,
                        validate: function(t) {
                            if (r.enabled("charting_library_base")) return {
                                currentState: "var"
                            };
                            for (var e = "init", n = "var", o = e, c = {
                                    warnings: [],
                                    errors: [],
                                    isEmpty: !0
                                }, u = [], d = 0; d < t.length; d++) {
                                if (!((_ = t[d]) instanceof i)) {
                                    if (delete c.isEmpty, _.isIncomplete) {
                                        var p = {
                                            status: "incomplete",
                                            reason: "incomplete_token",
                                            offset: _._offset,
                                            token: _
                                        };
                                        if (_.incompleteSuggest && (p.recover = {
                                                append: _.incompleteSuggest()
                                            }), c.warnings.push(p), d !== t.length - 1) {
                                            p.status = "error";
                                            continue
                                        }
                                    }
                                    if (_ instanceof v || _ instanceof y) {
                                        if (o === n) {
                                            c.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: _._offset,
                                                token: _
                                            });
                                            continue
                                        }
                                        o = n
                                    } else if (_ instanceof l) {
                                        if (o !== n) {
                                            c.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: _._offset,
                                                token: _
                                            });
                                            continue
                                        }
                                        o = "operator"
                                    } else if (_ instanceof a) {
                                        if (o === n) {
                                            c.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: _._offset,
                                                token: _
                                            });
                                            continue
                                        }
                                        u.push(_), o = e
                                    } else if (_ instanceof s) {
                                        if (o !== n) {
                                            c.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: _._offset,
                                                token: _
                                            });
                                            continue
                                        }
                                        u.pop() || c.errors.push({
                                            status: "error",
                                            reason: "unbalanced_brace",
                                            offset: _._offset,
                                            token: _,
                                            recover: {
                                                prepend: new a
                                            }
                                        }), o = n
                                    } else _ instanceof m && c.errors.push({
                                        status: "error",
                                        reason: "unparsed_entity",
                                        offset: _._offset,
                                        token: _
                                    })
                                }
                            }
                            for (c.braceBalance = u.length, o !== n && c.warnings.push({
                                    status: "incomplete"
                                }); u.length;) {
                                var _;
                                p = {
                                    status: "incomplete",
                                    reason: "unbalanced_brace",
                                    offset: (_ = u.pop())._offset,
                                    token: _
                                };
                                o === n && (p.recover = {
                                    append: new s
                                }), c.warnings.push(p)
                            }
                            return c.currentState = o, 0 === c.warnings.length && delete c.warnings, 0 === c.errors.length && delete c.errors, c
                        },
                        factorOutBraces: w,
                        normalizeTokens: function(t) {
                            for (var e = 0; e < t.length; e++) t[e].parse && t[e].parse();
                            return t
                        },
                        flip: function(t) {
                            var e = function(t) {
                                for (var e, n = 0, r = 1, o = 2, c = 3, u = n, d = 0, _ = 0; _ < t.length; _++) {
                                    var f = t[_];
                                    if (!(f instanceof i)) switch (u) {
                                        case n:
                                            if (!(f instanceof y && 1 == +f.value)) return !1;
                                            u = r;
                                            break;
                                        case r:
                                            if (!(u === r && f instanceof p)) return !1;
                                            u = o, e = _ + 1;
                                            break;
                                        case o:
                                            if (f instanceof a) u = c, d = 1;
                                            else if (f instanceof l) return !1;
                                            break;
                                        case c:
                                            f instanceof a ? d++ : f instanceof s && --d <= 0 && (u = o)
                                    }
                                }
                                return t.slice(e)
                            }(t);
                            return w(e || [new y("1"), new p, new a].concat(t).concat(new s))
                        },
                        hasBatsSymbols: function(t) {
                            return E(t, ["BATS"])
                        },
                        hasEodSymbols: function(t) {
                            return (t = O(t)) && -1 !== t.toUpperCase().indexOf("_EOD")
                        },
                        hasChxjpySymbols: function(t) {
                            return E(t, ["CHXJPY"])
                        },
                        hasFreeDelaySymbols: function(t) {
                            return E(t, pro.getProductsByType(pro.PRODUCT_TYPES.exchange).map((function(t) {
                                return t.exchange.toUpperCase() + "_DLY"
                            })))
                        },
                        getExchange: O,
                        getExchanges: I,
                        isExchange: function(t, e) {
                            return !!(t = O(t)) && t.substring(0, e.length) === e
                        },
                        SymbolToken: v,
                        IncompleteSymbolToken: g,
                        NumberToken: y,
                        BinaryOperatorToken: l,
                        OpenBraceToken: a,
                        CloseBraceToken: s,
                        ticker: function(t) {
                            return new v(t).ticker()
                        },
                        shortName: function(t) {
                            if ("string" != typeof t) throw new TypeError("expression must be a string");
                            var e = w(A(x(t)));
                            return e.forEach((function(t) {
                                t instanceof v && t.exchange(null)
                            })), F(e)
                        },
                        normalize: function(t) {
                            if ("string" != typeof t) throw new TypeError("expression must be a string");
                            return F(w(A(x(t))))
                        }
                    }
                }();
            t.exports = i
        },
        508060: (t, e, n) => {
            "use strict";
            n.d(e, {
                AlertExtraUpdateScheduler: () => s
            });
            var r = n(405797),
                o = n(187215);
            const i = (0, n(272001).getLogger)("Alerts.ExtraUpdateScheduler"),
                a = clearTimeout;
            class s {
                constructor() {
                    this._queue = new Map, this._taskHandle = null
                }
                scheduleUpdate(t) {
                    this._queue.set(t.id, t), this._maybeScheduleTask()
                }
                cancelUpdate(t) {
                    this._queue.delete(t), null !== this._taskHandle && 0 === this._queue.size && (a(this._taskHandle), this._taskHandle = null)
                }
                cancelAllUpdates() {
                    this._queue.clear(), null !== this._taskHandle && (a(this._taskHandle), this._taskHandle = null)
                }
                _maybeScheduleTask() {
                    null === this._taskHandle && 0 !== this._queue.size && (this._taskHandle = setTimeout((async () => {
                        const t = this._queue.values().next().value;
                        t && (this._queue.delete(t.id), await
                            function(t) {
                                return i.logDebug(`Sending extra update request for alert ${t.id}`), (0, r.sendRequest)({
                                    method: "update_extra",
                                    params: (0, o.client2serverParams)(t)
                                }).then((() => i.logDebug(`Extra has been updated successfully for alert ${t.id}`)), (e => i.logWarn(`Could not update extra for alert ${t.id}: ${e}`)))
                            }(t)), this._taskHandle = null, this._maybeScheduleTask()
                    }), 1e3))
                }
            }
        },
        483733: (t, e, n) => {
            "use strict";
            n.d(e, {
                alertsConnectionWritableTracker: () => i,
                alertsConnectionTracker: () => a
            });
            var r = n(988411),
                o = n.n(r);
            const i = new class {
                    constructor() {
                        this._state = new(o())(!0)
                    }
                    value() {
                        return this._state.value()
                    }
                    setValue(t) {
                        this._state.setValue(t)
                    }
                    subscribe(t) {
                        this._state.subscribe(t)
                    }
                    unsubscribe(t) {
                        this._state.unsubscribe(t)
                    }
                },
                a = i
        },
        580336: (t, e, n) => {
            "use strict";
            var r = n(823127),
                o = function() {
                    function t(t, e) {
                        return e.id || (e.id = t), e
                    }
                    for (var e, o = {
                            cross: {
                                title: n(777754).t(null, void 0, n(519142)),
                                type: "comparison"
                            },
                            crosses_from_below: {
                                title: n(777754).t(null, void 0, n(323697)),
                                type: "comparison"
                            },
                            crosses_from_above: {
                                title: n(777754).t(null, void 0, n(768605)),
                                type: "comparison"
                            },
                            above: {
                                title: n(777754).t(null, void 0, n(63987)),
                                type: "comparison"
                            },
                            below: {
                                title: n(777754).t(null, void 0, n(993093)),
                                type: "comparison"
                            },
                            enters_channel: {
                                title: n(777754).t(null, void 0, n(455727)),
                                isChannel: !0,
                                type: "comparison"
                            },
                            leaves_channel: {
                                title: n(777754).t(null, void 0, n(292536)),
                                isChannel: !0,
                                type: "comparison"
                            },
                            inside_channel: {
                                title: n(777754).t(null, void 0, n(317094)),
                                isChannel: !0,
                                type: "comparison"
                            },
                            outside_channel: {
                                title: n(777754).t(null, void 0, n(780477)),
                                isChannel: !0,
                                type: "comparison"
                            },
                            moving_up: {
                                title: n(777754).t(null, void 0, n(720488)),
                                type: "moving"
                            },
                            moving_down: {
                                title: n(777754).t(null, void 0, n(185198)),
                                type: "moving"
                            },
                            moving_up_percents: {
                                title: n(777754).t(null, void 0, n(623487)),
                                descriptionTitle: n(777754).t(null, void 0, n(720488)),
                                type: "moving",
                                percents: !0
                            },
                            moving_down_percents: {
                                title: n(777754).t(null, void 0, n(861280)),
                                descriptionTitle: n(777754).t(null, void 0, n(185198)),
                                type: "moving",
                                percents: !0
                            }
                        }, i = Object.keys(o), a = i.length - 1; a >= 0; a--) t(e = i[a], o[e]);

                    function s(e) {
                        var n, i, a, s, l, c, u = {};
                        e && e.getStrategy() ? i = e.prepareAlertConditions() : (a = e && e.drawing(), i = !e || e.getAlertSeries().hasUsualPlots() ? o : {}, a ? c = "LineToolVertLine" === a.type ? function(t) {
                            return "cross" === t.id
                        } : 1 === a.plots.length ? function(t) {
                            return !t.isChannel
                        } : 2 === a.plots.length ? function(t) {
                            return !!t.isChannel
                        } : function(t) {
                            return "comparsion" === t.type
                        } : e && (e.hasAlertCondition() || e.hasAlertFunction()) && (i = r.extend(!0, {}, i, e.prepareAlertConditions()))), n = Object.keys(i);
                        for (var d = 0; d < n.length; d++) t(l = n[d], s = i[l]), c && !c(s) || (u[l] = s);
                        return u
                    }
                    return e = null, {
                        get: s,
                        getData: function(t, e) {
                            var n;
                            return (n = e ? s(e)[t] : o[t]) && !n.id && (n.id = t), n
                        },
                        defaults: function(t) {
                            return void 0 !== t ? o[t] : o
                        },
                        ordered: function(t, e) {
                            var n, r = s(t),
                                o = ["cross", "crosses_from_below", "crosses_from_above", "above", "below", "enters_channel", "leaves_channel", "inside_channel", "outside_channel", "moving_up", "moving_down", "moving_up_percents", "moving_down_percents"],
                                i = ["strategy_and_alerts", "strategy", "alerts"],
                                a = [],
                                l = Object.keys(r);
                            e = e || {};
                            for (var c = [], u = l.length - 1; u >= 0; u--) {
                                var d = r[l[u]];
                                i.includes(d.type) && c.push(d)
                            }
                            c.sort((function(t, e) {
                                return i.indexOf(t.id) - i.indexOf(e.id)
                            })), c.length > 0 && a.push(c);
                            var p = [];
                            for (u = l.length - 1; u >= 0; u--) {
                                d = r[l[u]];
                                ["pine_script", "pine_alertcondition_plot"].includes(d.type) && p.push(d)
                            }
                            p.sort((function(t, e) {
                                return t.title.localeCompare(e.title)
                            })), p.length > 0 && a.push(p);
                            var _ = t && t.alertSeries && t.alertSeries();
                            if (!(_ && _.plots && 0 === _.plots.length)) {
                                var f = [];
                                for (u = 0; u < o.length; u++) n = o[u], r.hasOwnProperty(n) && f.push(r[n]);
                                f.length > 0 && a.push(f)
                            }
                            return e.isGrouped ? a : a.flat()
                        }
                    }
                }();
            TradingView.AlertConditions = o, t.exports = o
        },
        494650: (t, e, n) => {
            "use strict";
            n.d(e, {
                AlertExtra: () => h
            });
            var r = n(272001).getLogger("Alerts.Extra"),
                o = n(835343).deepCopy,
                i = n(519872).isAlertConditionPlot,
                a = n(933813).STYLE_HEIKEN_ASHI,
                s = n(809350).cleanButAmpersand,
                l = n(627025).regExpEscape,
                c = n(925622),
                u = c.isStudyStateForAlertType,
                d = c.StateForAlertType;
            TradingView = "object" == typeof n.g ? n.g.TradingView : TradingView || {}, "function" != typeof TradingView.merge && (TradingView.merge = function(t, e) {
                for (var n in e) "object" == typeof e[n] && t.hasOwnProperty(n) ? TradingView.merge(t[n], e[n]) : t[n] = e[n];
                return t
            });
            var p = n(580336),
                _ = n(921303).alertBandFactory,
                f = n(988411);

            function h(t) {
                this._data = {}, this.crossInterval = new f, this.update(t)
            }
            h.VERSION = 22, h.prototype.update = function(t) {
                return t = this._prepareExtraObject(t), h._isValidExtra(t) ? (this._data = t || {}, this._updateCrossInterval()) : r.logError("Wrong alert extra"), this
            }, h.prototype.addDatasourse = function(t, e) {
                this._addDatasourseToJson(this._data, t, e)
            }, h.prototype._addDatasourseToJson = function(t, e, n) {
                (n || t.condition[e]) && (t.condition[e] = {
                    id: n.id,
                    plotIndex: n.plotIndex
                }, t.statesForAlert[n.id] = n, n.plotIndex && delete t.statesForAlert[n.id].plotIndex)
            }, h.prototype.getDependencies = function() {
                var t = {};
                for (var e in this._data.statesForAlert)
                    if (this._data.statesForAlert.hasOwnProperty(e)) {
                        var n = this._data.statesForAlert[e];
                        u(n.type, !0) && null != n.studyDependencies && n.studyDependencies.forEach((function(e) {
                            t[e.id] = e
                        }))
                    }
                var r = Object.keys(t).map((function(e) {
                    return t[e]
                }));
                return r.map((function(t) {
                    return t.study = t.study.replace(/(\d)$/, "$1!"), t
                }))
            }, h.prototype.updateDataSourseStates = function() {
                var t = this,
                    e = this.getAvailableBands().map((function(e) {
                        return t._data.condition[e]
                    })).filter((function(t) {
                        return !!t
                    })).map((function(t) {
                        return t.id
                    }));
                Object.keys(t._data.statesForAlert).filter((function(t) {
                    return e.indexOf(t) < 0
                })).forEach((function(e) {
                    delete t._data.statesForAlert[e]
                }))
            }, h.prototype._prepareExtraObject = function(t) {
                if ("string" == typeof t ? t = JSON.parse(t) : t instanceof h && (t = t.toJSON()), h._isValidExtra(t)) return t;
                var e = function(e) {
                        var n = p.defaults(t.conditionId || "cross");
                        this._addDatasourseToJson(e, "mainSeries", t.mainSeries),
                            this._addDatasourseToJson(e, "alertSeries", t.alertSeries), "moving" === n.type ? (e.condition.movValue = Number(t.value), e.condition.movPeriod = Number(t.period)) : "comparison" === n.type && n.isChannel ? (this._addDatasourseToJson(e, "upperBand", t.upperBand), this._addDatasourseToJson(e, "lowerBand", t.lowerBand)) : "comparison" !== n.type || n.isChannel ? ["pine_script", "pine_alertcondition_plot", "strategy"].includes(n.type) || r.logError("[Alerts] Unknown condition type: " + n.type) : this._addDatasourseToJson(e, "band", t.band)
                    }.bind(this),
                    n = {
                        version: h.VERSION,
                        condition: {
                            id: t.conditionId,
                            fireInfo: t.fireInfo
                        },
                        statesForAlert: {}
                    };
                return e(n), n
            }, h.prototype.isValid = function() {
                return h._isValidExtra(this._data)
            }, h._isValidExtra = function(t) {
                var e = !!("object" == typeof t && null !== t && t.version >= h.VERSION && t.statesForAlert && t.condition && t.condition.id && t.condition.alertSeries && t.condition.fireInfo && (t.condition.fireInfo.type || t.condition.fireInfo.frequency));
                if (!e) return e;
                var n = Object.keys(t.statesForAlert);
                e = (e = e && n.indexOf(t.condition.alertSeries.id) >= 0) && (!t.condition.mainSeries || n.indexOf(t.condition.mainSeries.id) >= 0);
                var r = p.defaults(t.condition.id);
                r && "comparison" === r.type && !r.isChannel ? e = (e = e && !!t.condition.band) && n.indexOf(t.condition.band.id) >= 0 : r && "comparison" === r.type && r.isChannel ? e = (e = (e = (e = e && !!t.condition.upperBand) && !!t.condition.lowerBand) && n.indexOf(t.condition.upperBand.id) >= 0) && n.indexOf(t.condition.lowerBand.id) >= 0 : r && "moving" === r.type && (e = (e = e && !!t.condition.movPeriod) && !!t.condition.movValue);
                const o = y(Object.values(t.statesForAlert));
                return o && o.type !== d.StudyLineTool && (e = e && function(t) {
                    if (!Array.isArray(t)) return !1;
                    return t.every((t => "number" == typeof t || "object" == typeof t && v.every((([e, n]) => typeof t[e] === n))))
                }(o.plots)), e
            }, h.prototype._prepareToJSON = function() {
                for (var t = this.bandsObject(), e = Object.keys(t), n = 0; n < e.length; n++) {
                    var r = t[e[n]];
                    TradingView.isExistent(r.value) && (r.value = String(r.value))
                }
            }, h.prototype.toJSON = function() {
                return this._prepareToJSON(), o(this._data)
            }, h.prototype.toGenAlertJSON = function(t) {
                const e = this._patchDescription(t),
                    n = this.toJSON();
                return n.message = e, n
            }, h.prototype.state = h.prototype.toJSON, h.prototype.conditionData = function() {
                var t = this._data && this._data.condition && this._data.condition.id;
                if (t) return p.getData(t, this)
            }, h.prototype.bandsObject = function(t) {
                return this._data.statesForAlert
            }, h.prototype.bandsArray = function(t) {
                var e = this;
                t = t || "object";
                return this.getAvailableBands().map((function(n) {
                    return e._getSomeBand(n, t)
                })).filter((function(t) {
                    return !!t
                }))
            }, h.prototype.price = function(t) {
                var e = this,
                    n = e.conditionData();
                if (!n || "comparison" !== n.type) return null;

                function r(t, n) {
                    var r = e._getSomeBand(t, "object");
                    r && "Value" === r.type && void 0 !== n && (r.value = parseFloat(n), e[t](r))
                }

                function o(t) {
                    var n = e._getSomeBand(t, "object");
                    return n && !isNaN(n.value) && void 0 !== n.value && null !== n.value ? parseFloat(n.value) : null
                }
                if (void 0 !== t && (e.conditionData().isChannel ? (r("upperBand", t.upperBand || t.upper), r("lowerBand", t.lowerBand || t.lower)) : r("band", t.band || t), this._updateCrossInterval()), e.conditionData().isChannel) {
                    var i = o("upperBand"),
                        a = o("lowerBand");
                    return null === i || null === a ? null : {
                        upper: i,
                        lower: a
                    }
                }
                return o("band")
            }, h.prototype.conditionId = function(t, e) {
                if (void 0 !== t) {
                    this._data.condition.id = t;
                    var n = p.get(this)[t];
                    if (n && "pine_alertcondition_plot" === n.type) {
                        var r = this.alertSeries();
                        r.plotIndex = n.plotIndex, this.alertSeries(r)
                    }
                    e || this._updateCrossInterval()
                }
                return this._data.condition.id
            };
            h.prototype._patchDescription = function(t) {
                try {
                    const e = ["ohlc_open", "ohlc_high", "ohlc_low", "ohlc_close", "ohlc_colorer"],
                        n = this.getAlertSeries().getPlots();
                    if (n && n.length > 0) {
                        n.filter((t => "alertcondition" !== t.type)).forEach(((n, r) => {
                            if (!e.includes(n.type)) {
                                const e = new RegExp(`{{plot\\("${l(s(n.title,!0))}"\\)}}`, "gm");
                                t = t.replace(e, `{{plot_${r}}}`)
                            }
                        }));
                        for (let e = n.length; e <= 20; e++) t = t.replace(`{{plot_${e}}}`, "null")
                    }
                } catch (t) {
                    r.logError("AlertExtra._patchDescription error: " + t)
                }
                return t
            }, h.prototype.getAvailableConditionParams = function(t) {
                return ["movPeriod", "movValue"]
            }, h.prototype.getAvailableOptionalBands = function(t) {
                return ["band", "lowerBand", "upperBand"]
            }, h.prototype.getAvailableBands = function(t) {
                return ["band", "lowerBand", "upperBand", "alertSeries", "mainSeries"]
            }, h.prototype.getAvailableOptionalConditions = function(t) {
                return this.getAvailableOptionalBands().concat(this.getAvailableOptionalBands())
            }, h.prototype.clearOptionalConditions = function(t) {
                var e = this;
                this.getAvailableOptionalConditions().forEach((function(t) {
                    delete e._data.condition[t]
                })), this.updateDataSourseStates(), t || this._updateCrossInterval()
            }, h.prototype.alertSeries = function(t, e) {
                return void 0 !== t && (this.addDatasourse("alertSeries", t), this.updateDataSourseStates(), e || this._updateCrossInterval(), this.setValidConditionId()), this._getSomeBand("alertSeries", "object")
            }, h.prototype.getAlertSeries = function(t) {
                return this._getSomeBand("alertSeries", t)
            }, h.prototype.mainSeries = function(t, e) {
                return void 0 !== t && (this.addDatasourse("mainSeries", t), this.updateDataSourseStates(), e || this._updateCrossInterval()), this._getSomeBand("mainSeries", "object")
            }, h.prototype.getMainSeries = function(t) {
                return this._getSomeBand("mainSeries", t)
            }, h.prototype._getSomeBand = function(t, e) {
                var n, r = e || "model",
                    o = this._data.condition[t];
                if (o) return n = TradingView.merge(this._data.statesForAlert[o.id], o), "object" === r ? TradingView.merge({}, n) : _.create(n)
            }, h.prototype.upperBand = function(t, e) {
                return void 0 !== t && (this.addDatasourse("upperBand", t), delete this._data.condition.band, this.updateDataSourseStates(), e || this._updateCrossInterval()), this._getSomeBand("upperBand", "object")
            }, h.prototype.getUpperBand = function(t) {
                return this._getSomeBand("upperBand", t)
            }, h.prototype.lowerBand = function(t, e) {
                return void 0 !== t && (this.addDatasourse("lowerBand", t), delete this._data.condition.band, this.updateDataSourseStates(), e || this._updateCrossInterval()), this._getSomeBand("lowerBand", "object")
            }, h.prototype.getLowerBand = function(t) {
                return this._getSomeBand("lowerBand", t)
            }, h.prototype.band = function(t, e) {
                return void 0 !== t && (this.addDatasourse("band", t), delete this._data.condition.upperBand, delete this._data.condition.lowerBand,
                    this.updateDataSourseStates(), e || this._updateCrossInterval()), this._getSomeBand("band", "object")
            }, h.prototype.getBand = function(t) {
                return this._getSomeBand("band", t)
            }, h.prototype.value = function(t, e) {
                return void 0 !== t && (this._data.condition.movValue = Number(t), e || this._updateCrossInterval()), this._data.condition.movValue
            }, h.prototype.movingValue = h.prototype.value, h.prototype.period = function(t, e) {
                return void 0 !== t && (this._data.condition.movPeriod = Number(t), e || this._updateCrossInterval()), this._data.condition.movPeriod
            }, h.prototype.movingPeriod = h.prototype.period, h.prototype._updateCrossInterval = function() {
                var t = this.getAlertSeries(),
                    e = null !== this.price() && t && "MainSeries" === t.type() && !(t.isRangeBasedStyle() || t.getStyle() === a) && !t.isSpread();
                this.crossInterval.setValue(e)
            }, h.prototype.frequency = function(t) {
                return -1 !== ["once", "on_first_fire", "on_bar_close", "60"].indexOf(t) && (this._data.condition.fireInfo.frequency = t), this._data.condition.fireInfo.frequency
            }, h.prototype.hasAlertCondition = function() {
                var t = this.alertSeries();
                return Boolean(t.plots && t.plots.some(i) || t.alerts && t.alerts.conditions)
            }, h.prototype.hasAlertFunction = function() {
                return Boolean(this.alertSeries().hasAlertFunction)
            }, h.prototype.prepareAlertConditions = function() {
                var t = this.alertSeries(),
                    e = {};
                if (!t) return e;
                const r = Boolean(t.isTVScriptStrategy),
                    o = Boolean(t.hasAlertFunction);
                if (r && o) return {
                    strategy_and_alerts: {
                        type: "strategy_and_alerts",
                        title: n(777754).t(null, void 0, n(330336))
                    },
                    strategy: {
                        type: "strategy",
                        title: n(777754).t(null, void 0, n(568375))
                    },
                    alerts: {
                        type: "alerts",
                        title: n(777754).t(null, void 0, n(779451))
                    }
                };
                if (r) return {
                    strategy: {
                        title: null,
                        type: "strategy"
                    }
                };
                if (o && Object.assign(e, {
                        alerts: {
                            type: "alerts",
                            title: n(777754).t(null, void 0, n(244998))
                        }
                    }), t.plots)
                    for (var a = 0; a < t.plots.length; a++) {
                        var s = t.plots[a];
                        if (i(s)) e["alertplot_" + a] = {
                            title: s.title,
                            message: s.text,
                            type: "pine_alertcondition_plot",
                            plotIndex: a
                        }
                    }
                if (t.alerts && t.alerts.conditions)
                    for (var l in t.alerts.conditions) e[l] = t.alerts.conditions[l], e[l].type = "pine_script";
                return e
            }, h.prototype.drawing = function(t) {
                var e = this;
                if (t) {
                    var n = t.plots,
                        o = !!e.conditionData().isChannel;
                    if ((1 === n.length ? !o : o) && "comparison" === e.conditionData().type)
                        if (1 === n.length) {
                            var i = {};
                            (i = TradingView.merge(i, t)).plotIndex = 0, e.band(i)
                        } else {
                            var a = {},
                                s = {};
                            (a = TradingView.merge(a, t)).plotIndex = 0, e.upperBand(a), (s = TradingView.merge(s, t)).plotIndex = 1, e.lowerBand(s)
                        }
                    else r.logError("[Alerts] Can't set drawing to alert with current condition")
                }
                return y(this.bandsArray())
            }, h.prototype.getStrategy = function() {
                for (var t = this.bandsArray(), e = 0; e < t.length; e++) {
                    if (t[e].isTVScriptStrategy) return t[e]
                }
                return null
            }, h.prototype.setValidConditionId = function() {
                var t = this.conditionId(),
                    e = p.get(this);
                e[t] || this.conditionId(Object.keys(e)[0])
            }, h.prototype.verticalLine = function() {
                var t = this.drawing();
                return t && 1 === t.plots.length && t.plots[0].offset1 && t.plots[0].offset1 === t.plots[0].offset2 ? t : null
            };
            const v = Object.entries({
                timestamp: "number",
                offset1: "number",
                offset2: "number",
                price1: "number",
                price2: "number",
                extendBackward: "boolean",
                extendForward: "boolean"
            });

            function y(t) {
                return t.find((t => t.type === d.StudyLineTool || /^LineTool.*/i.test(t.type))) || null
            }
            TradingView.AlertExtra = h
        },
        223292: (t, e, n) => {
            "use strict";
            var r = n(494650).AlertExtra,
                o = n(925622).isStudyStateForAlertType,
                i = n(108184).StudyMetaInfo,
                a = n(309123).StudyVersioning,
                s = n(619276).extractStudyId,
                l = n(971417).extractPineId,
                c = n(212110).prepareCallStudyArgs,
                u = n(777491),
                d = n(272001).getLogger("Alerts.Versioning"),
                p = n(293689),
                _ = n(933024);
            const {
                hash: f
            } = n(948723);
            var h = n(580336),
                v = n(720444),
                y = n(26045).DataSourceDangerReason,
                m = n(508060).AlertExtraUpdateScheduler,
                g = n(125226).isFeatureEnabled;

            function S() {
                this._extraUpdateScheduler = new m
            }
            S.version_10_tv_6611_1a_refactoring = 10, S.version_11_tv_6611_1b_refactoring = 11, S.version_12_tv_6888_fix_plot_index = 12, S.version_13_tv_4164_source_code_protection = 13, S.version_14_tv_4164_source_code_protection_fix = 14, S.version_15_tv_8068_fix_main_series_resolution = 15, S.version_16_jv_298_remove_callstudy = 16, S.version_17_jv_646_fix_mixed_inputs = 17, S.version_18_tv_10636_price_format = 18, S.version_19_tv_11267_fix_frequency_options = 19, S.version_20_tv_14463_extract_dividends_adjustment_from_symbol_string = 20, S.version_21_tv_14886_add_alert_dangerous_source_check = 21, S.version_22_tv_23957_remove_text_input_from_pine_studies = 22, S.prototype.migrate = function(t, e) {
                var n;
                if (e = Object.assign({
                        sendExtraUpdate: g("alerts-send-extra-update")
                    }, e), !t || !t.extra) return Promise.resolve(t);
                if ((n = JSON.parse(t.extra)) && !Object.keys(n).length && n.constructor === Object) return delete t.extra, Promise.resolve(t);
                var o = Promise.resolve(t),
                    i = null == n.version || n.version < r.VERSION;
                return i && (o = this._patchAlert(n, t)), o = o.then(function(t) {
                    var n = JSON.parse(t.extra);
                    return n.version < r.VERSION ? d.logError("Alert version is less than current") : n.version > r.VERSION ? d.logNormal("Alert version is greater than current") : i && e.sendExtraUpdate && this._extraUpdateScheduler.scheduleUpdate({
                        id: t.id,
                        instanceId: t.instanceId,
                        extra: t.extra
                    }), t
                }.bind(this)), o
            }, S.prototype._patchAlert = function(t, e) {
                var n = this;
                t.version || (t.version = 1);
                var r = t.version;
                r < S.version_10_tv_6611_1a_refactoring && (t.condition.mainSeries = this._patchBand_to10(t.condition.mainSeries, e.symbol), t.condition.options.band && (t.condition.options.band = this._patchBand_to10(t.condition.options.band, e.symbol)), t.condition.options.upperBand && (t.condition.options.upperBand = this._patchBand_to10(t.condition.options.upperBand, e.symbol)), t.condition.options.lowerBand && (t.condition.options.lowerBand = this._patchBand_to10(t.condition.options.lowerBand, e.symbol)), t.version = S.version_10_tv_6611_1a_refactoring), r < S.version_11_tv_6611_1b_refactoring && (t = this._patchExtra_to11(t)), r < S.version_12_tv_6888_fix_plot_index && (t = this._patchExtra_to12(t)), r < S.version_13_tv_4164_source_code_protection && (t = this._patchExtra_to13(t, e)), r < S.version_14_tv_4164_source_code_protection_fix && (t = this._patchExtra_to14(t, e)), r < S.version_15_tv_8068_fix_main_series_resolution && (t = this._patchExtra_to15(t, e)), e.extra = JSON.stringify(t);
                var o = Promise.resolve(e);
                return r < S.version_16_jv_298_remove_callstudy && (o = o.then((function(t) {
                    return n._patchAlert_to16(t)
                }))), r < S.version_17_jv_646_fix_mixed_inputs && (o = o.then((function(t) {
                    var e = JSON.parse(t.extra),
                        r = n._patchExtra_to17(e);
                    return t.extra = JSON.stringify(r), t
                }))), r < S.version_18_tv_10636_price_format && (o = o.then((function(t) {
                    var e = JSON.parse(t.extra),
                        r = n._patchExtra_to18(e);
                    return t.extra = JSON.stringify(r), t
                }))), r < S.version_19_tv_11267_fix_frequency_options && (o = o.then((function(t) {
                    return n._patchAlert_to19(t)
                }))), r < S.version_20_tv_14463_extract_dividends_adjustment_from_symbol_string && (o = o.then((function(t) {
                    var e = JSON.parse(t.extra),
                        r = n._patchExtra_to20(e);
                    return t.extra = JSON.stringify(r), t
                }))), r < S.version_21_tv_14886_add_alert_dangerous_source_check && (o = o.then((function(t) {
                    var e = JSON.parse(t.extra),
                        r = n._patchExtra_to21(e);
                    return t.extra = JSON.stringify(r), t
                }))), r < S.version_22_tv_23957_remove_text_input_from_pine_studies && (o = o.then((function(t) {
                    var e = JSON.parse(t.extra),
                        r = n._patchExtra_to22(e);
                    return t.extra = JSON.stringify(r), t
                }))), o
            }, S.prototype.cancelPossibleExtraUpdate = function(t) {
                this._extraUpdateScheduler.cancelUpdate(t)
            }, S.prototype.cancelAllPossibleExtraUpdates = function() {
                this._extraUpdateScheduler.cancelAllUpdates()
            }, S.prototype._patchBand_to10 = function(t, e) {
                return t = this._patchBand_to10_callStudyArgs(t), t = this._patchBand_to10_stateForAlert(t, e)
            }, S.prototype._patchBand_to10_callStudyArgs = function(t) {
                var e = t && "Study" === t.type,
                    n = e && (t.alertsData || {}).callStudyArgs,
                    r = e && t.metaInfo && t.state && t.state.inputs;
                return e && !n && r ? (t.alertsData || (t.alertsData = {}), t.alertsData.callStudyArgs = c(t.state.inputs, t.metaInfo), t) : t
            }, S.prototype._patchBand_to10_stateForAlert = function(t, e) {
                var n, r;
                if (!t) return t;
                if (r = !t.state, "MainSeries" !== (n = t.type) || r) {
                    if (o(n, !1) && !r) {
                        var i = t.metaInfo.plots.map((function(e) {
                            var n = {
                                id: e.id,
                                type: e.type,
                                offset: t.data.completePlotOffsets[e.id]
                            };
                            return t.metaInfo.styles && void 0 !== t.metaInfo.styles[e.id] && (n.title = t.metaInfo.styles[e.id].title || ""), e.target && t.metaInfo.ohlcPlots && t.metaInfo.ohlcPlots[e.target] && (n.ohlcTitle = t.metaInfo.ohlcPlots[e.target].title), n
                        }));
                        return {
                            id: t.id,
                            uniqueId: t.uniqueId,
                            type: t.type,
                            title: "",
                            shortDescription: t.state.shortDescription || "Study",
                            fullId: t.metaInfo.fullId,
                            isTVScript: !!t.metaInfo.isTVScript,
                            plots: i,
                            inputs: t.state.inputs,
                            alerts: t.metaInfo.alerts,
                            callStudyArgs: t.alertsData.callStudyArgs,
                            plotIndex: t.plotIndex,
                            plotOffset: t.plotOffset
                        }
                    }
                    return t
                }
                return {
                    id: t.id,
                    uniqueId: t.uniqueId,
                    type: t.type,
                    proSymbol: t.state.symbol || e,
                    actualSymbol: e,
                    interval: t.state.interval,
                    style: t.state.style,
                    styleInputs: function() {
                        var e = {
                            0: "bar",
                            1: "candle",
                            2: "line",
                            3: "area",
                            4: "renko",
                            5: "kagi",
                            6: "pnf",
                            7: "pb",
                            8: "ha",
                            9: "hollowCandle"
                        }[t.state.style];
                        if (e) {
                            var n = t.state[e + "Style"];
                            if (n) return n.inputs
                        }
                    }(),
                    sessionId: t.state.sessionId,
                    boxSize: t.boxSize,
                    reversalAmount: t.reversalAmount
                }
            }, S.prototype._patchExtra_to11 = function(t) {
                var e = function(t, e, n) {
                        n.id = n.id || u.randomHashN(6), t.condition[e] = {
                            id: n.id,
                            plotIndex: n.plotIndex
                        }, t.statesForAlert[n.id] = n
                    },
                    n = {
                        version: S.version_11_tv_6611_1b_refactoring,
                        condition: {
                            id: t.condition.id,
                            fireInfo: {
                                frequency: t.frequency || "once"
                            },
                            movPeriod: t.condition.options.period,
                            movValue: t.condition.options.value
                        },
                        statesForAlert: {}
                    };
                e(n, "alertSeries", t.condition.mainSeries);
                return ["band", "upperBand", "lowerBand"].filter((function(e) {
                    return !!t.condition.options[e]
                })).forEach((function(r) {
                    e(n, r, t.condition.options[r])
                })), n
            }, S.prototype._patchExtra_to12 = function(t) {
                return ["alertSeries", "band", "upperBand", "lowerBand"].filter((function(e) {
                    return !!t.condition[e] && void 0 !== t.condition[e].plotIndex
                })).map((function(e) {
                    var n = t.condition[e];
                    return {
                        state: t.statesForAlert[n.id],
                        plotIndex: n.plotIndex
                    }
                })).filter((function(t) {
                    return !!t.state.plots
                })).forEach((function(t) {
                    var e = t.state.plots[t.plotIndex];
                    null == e || "object" != typeof e && "function" != typeof e || void 0 === e.pinePlotIndex && (e.pinePlotIndex = t.plotIndex)
                })), t.version = S.version_12_tv_6888_fix_plot_index, t
            }, S.prototype._patchExtra_to13 = function(t, e) {
                var n = t;
                if (!t.condition.mainSeries) {
                    if ("MainSeries" === t.statesForAlert[t.condition.alertSeries.id].type) n.condition.mainSeries = n.condition.alertSeries;
                    else {
                        var r = u.randomHashN(6);
                        n.condition.mainSeries = {
                            id: r
                        }, n.statesForAlert[r] = {
                            id: r
                        }
                    }
                    n.statesForAlert[n.condition.mainSeries.id].symbolString = e.symbol
                }
                for (var o in t.statesForAlert) {
                    var a = t.statesForAlert[o];
                    a.fullId && (a.scriptIdPart = i.parseIdString(a.fullId).shortId.split("$")[1])
                }
                return n.version = S.version_13_tv_4164_source_code_protection, n
            }, S.prototype._patchExtra_to14 = function(t, e) {
                var n = t;
                return t.condition.mainSeries || ("MainSeries" === t.statesForAlert[t.condition.alertSeries.id].type ? n.condition.mainSeries = n.condition.alertSeries : (n.condition.mainSeries = {
                    id: u.randomHashN(6)
                }, n.statesForAlert[n.condition.mainSeries.id] = {})), null == n.statesForAlert[n.condition.mainSeries.id].symbolString && (n.statesForAlert[n.condition.mainSeries.id].symbolString = e.symbol), n.version = S.version_14_tv_4164_source_code_protection_fix, n
            }, S.prototype._patchExtra_to15 = function(t, e) {
                var n = t;
                return null == n.statesForAlert[n.condition.mainSeries.id].interval && (n.statesForAlert[n.condition.mainSeries.id].interval = e.resolution), n.version = S.version_15_tv_8068_fix_main_series_resolution, n
            }, S.prototype._patchAlert_to16 = function(t) {
                var e = JSON.parse(t.extra);

                function n(t) {
                    return t.replace(/tv-scripting-1!?$/, "tv-scripting-88")
                }

                function r(e) {
                    return (r = e, o = i.cutDollarHash(r.fullId), a = S._recoverFullInputs(r.fullId, r.pineId, r.pineVersion, r.inputs).then((function(t) {
                        return {
                            id: _.idForAlert(s(r.fullId), t),
                            study: n(o),
                            inputs: t
                        }
                    })), l = new Promise((function(t, e) {
                        var o = JSON.parse(r.callStudyDependencies || "[]").map((function(t) {
                            return S._recoverFullInputs(null, t.scriptIdPart, t.scriptVersion, t.inputs).then((function(e) {
                                return {
                                    id: t.id,
                                    study: n(t.study),
                                    inputs: e
                                }
                            }))
                        }));
                        Promise.all(o).then((function(e) {
                            t(e)
                        }), e)
                    })), a.then((function(t) {
                        return l.then((function(e) {
                            return [t].concat(e)
                        }))
                    }))).then((function(n) {
                        e.studyDependencies = n;
                        var r = n[0];
                        e.id = r.id, e.uniqueId = e.id, t.scriptDeps = t.scriptDeps.concat(n)
                    }));
                    var r, o, a, l
                }
                t.scriptDeps = [];
                var a = [];
                for (var l in e.statesForAlert)
                    if (e.statesForAlert.hasOwnProperty(l)) {
                        var c = e.statesForAlert[l];
                        if ("MainSeries" === c.type) c.id = f(c.symbolString + c.interval).toString(), c.uniqueId = c.id;
                        else if (o(c.type, !1)) {
                            var u = r(c);
                            a.push(u)
                        } else /^LineTool.*/i.test(c.type) && (c.id = c.uniqueId)
                    }
                var d = Promise.all(a).then((function() {
                    return function(t) {
                        var e = {},
                            n = {};
                        Object.keys(t.statesForAlert).forEach((function(r) {
                            var o = t.statesForAlert[r].id;
                            e[r] = o, n[o] = t.statesForAlert[r]
                        })), Object.keys(t.condition).filter((function(n) {
                            return null != t.condition[n].id && null != e[t.condition[n].id]
                        })).forEach((function(n) {
                            t.condition[n].id = e[t.condition[n].id]
                        })), t.statesForAlert = n
                    }(e), e.version = S.version_16_jv_298_remove_callstudy, t.extra = JSON.stringify(e), t
                }));
                return d
            }, S.prototype.patchAlert_to16_forTestsOnly = S.prototype._patchAlert_to16, S.prototype._patchExtra_to17 = function(t) {
                for (var e in t.statesForAlert)
                    if (t.statesForAlert.hasOwnProperty(e)) {
                        var n = t.statesForAlert[e],
                            r = n.inputs;
                        if (null != r && (n.inputs = a.splitInputs(r).obj), null != n.studyDependencies)
                            for (var o = 0; o < n.studyDependencies.length; o++) {
                                var i = n.studyDependencies[o];
                                i.inputs = a.splitInputs(i.inputs).obj
                            }
                    }
                return t.version = S.version_17_jv_646_fix_mixed_inputs, t
            }, S.prototype.patchExtra_to17_forTestsOnly = S.prototype._patchExtra_to17, S._recoverFullInputs = function(t, e, n, r) {
                if (e = e || t && l(t) || r.pineId, n = n || r.pineVersion || "-1", null == e) return Promise.resolve(r);
                var o = p.translateScriptAsync2(e, n);
                return new Promise((function(t, e) {
                    o.then(t, e)
                })).catch((function(t) {
                    if ("-1" === n && e.startsWith("USER")) {
                        var o = function(t) {
                            var e = {};
                            return Object.keys(t).forEach((function(n) {
                                var r, o = t[n];
                                n.startsWith("in_") ? (r = ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"].indexOf(o) > 0 || /.*\$\d+/.test(o) ? "source" : "string" == typeof o ? "string" : "boolean" == typeof o ? "bool" : "float", e[n] = {
                                    f: !0,
                                    v: o,
                                    t: r
                                }) : e[n] = o
                            })), e
                        }(r);
                        return d.logNormal("A very rare case: alert on legacy script that was never resaved. Trying to guess input types \n\t" + JSON.stringify(r) + " -> " + JSON.stringify(o)), o
                    }
                    return d.logError("Alert migration failed, inputs cannot be migrated: " + JSON.stringify(t)), Promise.reject(t)
                })).then((function(t) {
                    return TVScript.patchInputs(t.inputs, r)
                }))
            }, S.prototype._patchExtra_to18 = function(t) {
                var e, n = {},
                    r = h.getData(t.condition.id);
                if (r && "comparison" === r.type)
                    if (r.isChannel) {
                        var o = t.statesForAlert[t.condition.upperBand.id],
                            i = t.statesForAlert[t.condition.lowerBand.id];
                        "Value" === o.type ? e = o.value : "Value" === i.type && (e = i.value)
                    } else {
                        var a = t.statesForAlert[t.condition.band.id];
                        "Value" === a.type && (e = a.value)
                    }
                if (e && -1 !== (e = e.toString().replace(/^-/, "")).indexOf(".")) {
                    var s = e.replace(/^\d+\./, "").length,
                        l = Math.pow(10, s);
                    n.priceScale = l
                }
                var c = t.condition.alertSeries.id;
                return t.statesForAlert[c].formatter = {
                    type: "price",
                    state: n
                }, t.version = S.version_18_tv_10636_price_format, t
            }, S.prototype._patchAlert_to19 = function(t) {
                var e = JSON.parse(t.extra),
                    n = t.autoDeactivation,
                    r = e.condition.fireInfo.frequency,
                    o = e.statesForAlert[e.condition.mainSeries.id],
                    i = ["band", "lowerBand", "upperBand"].map((function(t) {
                        var n = e.condition[t];
                        return n && e.statesForAlert[n.id]
                    })).filter((function(t) {
                        return !!t
                    })).filter((function(t) {
                        return "LineToolVertLine" === t.type
                    })).length > 0,
                    a = v.hasProjection(o.style),
                    s = t.crossInterval,
                    l = [];

                function c(t) {
                    return -1 !== l.indexOf(t)
                }
                return i ? l.push("once") : (s || a || (l.push("once"), l.push("60"), l.push("on_bar_close")), a ? l.push("on_bar_close") : l.push("on_first_fire")), "once_per_bar" === r && (r = "on_first_fire"), "once" !== r || c("once") || (n = !0, r = l[0]), "once" !== r && n && (r = l[0]), "once" !== r && i && (n = !0, r = "once"), "on_bar_close" === r && !c("on_bar_close") && c("on_first_fire") && (r = "on_first_fire"), t.autoDeactivation = n, e.condition.fireInfo.frequency = r, e.version = S.version_19_tv_11267_fix_frequency_options, t.extra = JSON.stringify(e), t
            }, S.prototype._patchExtra_to20 = function(t) {
                var e = t.condition.mainSeries,
                    n = t.statesForAlert,
                    r = e && n && n[e.id];
                if (r) {
                    var o = r.symbolString;
                    if (o && 0 === o.indexOf("=")) {
                        var i = o.slice(1);
                        "dividends" === (i = JSON.parse(i)).adjustment ? r.dividendsAdjustment = !0 : "splits" === i.adjustment && (r.dividendsAdjustment = !1)
                    }
                }
                return t.version = S.version_20_tv_14463_extract_dividends_adjustment_from_symbol_string, t
            }, S.prototype.patchExtra_to20_forTestsOnly = S.prototype._patchExtra_to20, S.prototype._patchExtra_to21 = function(t) {
                var e = t.statesForAlert;
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        var r = e[n];
                        r.isSpread && (r.dangerReason = y.Spread)
                    }
                return t.version = S.version_21_tv_14886_add_alert_dangerous_source_check, t
            }, S.prototype._patchExtra_to22 = function(t) {
                var e = t.statesForAlert,
                    n = !0;
                for (var r in e) {
                    if (e.hasOwnProperty(r))
                        if (("Study" === (a = e[r]).type || "StudyStrategy" === a.type) && a.isTVScript && 1 !== a.studyDependencies.length) {
                            n = !1;
                            break
                        }
                }
                if (n) {
                    var o = {},
                        i = {};
                    for (var r in e) {
                        var a;
                        if (e.hasOwnProperty(r))
                            if ("Study" !== (a = e[r]).type && "StudyStrategy" !== a.type || !a.isTVScript) o[r] = a;
                            else {
                                var l = a.uniqueId,
                                    c = Object.assign({}, a.inputs);
                                a.isTVScript && delete c.text;
                                var u = _.idForAlert(s(a.fullId), c);
                                a.id = u, a.uniqueId = u, a.studyDependencies[0].id = u, o[u] = a, i[l] = u
                            }
                    }
                    t.statesForAlert = o, t.condition.alertSeries.id = i[t.condition.alertSeries.id] || t.condition.alertSeries.id, t.condition.band && (t.condition.band.id = i[t.condition.band.id] || t.condition.band.id), t.condition.upperBand && (t.condition.upperBand.id = i[t.condition.upperBand.id] || t.condition.upperBand.id), t.condition.lowerBand && (t.condition.lowerBand.id = i[t.condition.lowerBand.id] || t.condition.lowerBand.id)
                }
                return t.version = S.version_22_tv_23957_remove_text_input_from_pine_studies, t
            }, t.exports = {
                AlertVersioning: S
            }
        },
        187215: (t, e) => {
            var n = {
                    active: "active",
                    aid: "alertId",
                    alerts: "alerts",
                    bar_time: "barTime",
                    create_t: "createTime",
                    cross_int: "crossInterval",
                    deact: "autoDeactivation",
                    desc: "description",
                    email: "sendEmail",
                    error: "error",
                    events: "events",
                    exp: "expired",
                    fire_time: "fireTime",
                    inc_cross_int: "includeCrossInterval",
                    inf_exp: "noExpiration",
                    internal_sym: "symbolInternal",
                    popup: "showPopup",
                    reason: "reason",
                    res: "resolution",
                    script_deps: "scriptDeps",
                    script: "script",
                    sms: "sendSms",
                    snd: "playSound",
                    push: "sendPush",
                    snd_duration: "soundDuration",
                    snd_file: "soundFile",
                    sort_by: "sortBy",
                    sort_dir: "sortDirection",
                    start_t: "startTime",
                    stop_t: "stopTime",
                    stop: "stopReason",
                    sym: "symbol",
                    web_hook: "webhookUrl",
                    inst_id: "instanceId",
                    name: "name",
                    alert_type: "alertType"
                },
                r = function() {
                    var t = {};
                    return Object.keys(n).forEach((function(e) {
                        t[n[e]] = e
                    })), t
                }();

            function o(t, e) {
                var n = {};
                return t ? (Object.keys(t).forEach((function(r) {
                    var o = e(r),
                        i = t[r];
                    n[o] = i
                })), n) : t
            }
            e.server2clientParams = function(t) {
                return o(t, (function(t) {
                    return n[t] || t
                }))
            }, e.client2serverParams = function(t) {
                return o(t, (function(t) {
                    return r[t] || t
                }))
            }
        },
        405797: (t, e, n) => {
            "use strict";
            n.d(e, {
                sendRequest: () => m,
                sendRequestImmediately: () => g
            });
            var r = n(495046),
                o = n(272001);
            const i = (0, o.getLogger)("Alerts.Price.RequestCache");
            var a;

            function s(t, e = "") {
                i.logDebug(`${t} ${e}`)
            }! function(t) {
                const e = {};

                function n(t) {
                    const n = o(t);
                    return e[n] && s("got from cache", n), e[n] ? e[n].self : null
                }

                function r(t, n = !1) {
                    const r = o(t),
                        i = e[r];
                    if (i)
                        if (n) i.clearCacheTimeoutId && clearTimeout(i.clearCacheTimeoutId), delete e[r], s("removed immediately", r);
                        else {
                            const t = 5e3;
                            i.clearCacheTimeoutId = setTimeout((() => {
                                delete e[r], s("removed timeout", r)
                            }), t)
                        }
                }

                function o(t) {
                    return JSON.stringify(t)
                }
                t.set = function(t, i) {
                    const a = o(t);
                    n(t) && r(t, !0), e[a] = {
                        self: i
                    }, s("added", a), i.then((e => (r(t), e))).catch((e => (r(t, !0), e)))
                }, t.get = n, t.isCachable = function(t) {
                    return "list_alerts" === t.method || "list_events" === t.method
                }
            }(a || (a = {}));
            var l = n(777491);
            const c = (0, o.getLogger)("Alerts.Price.MergedGetAlertsRequrest");
            var u;

            function d(t, e) {
                const n = e ? JSON.stringify(e) : "";
                c.logDebug(`${t} ${n}`)
            }! function(t) {
                const e = {};
                let n = null,
                    r = null;

                function o(t) {
                    delete e[t], Object.keys(e).length || (r = null, n = null)
                }
                t.isMergable = function(t) {
                    return "get_alert" === t.method || "get_alerts" === t.method
                }, t.mergeRequest = function(t) {
                    const i = (0, l.guid)(),
                        a = new Promise(((e, o) => {
                            d("personal promise - creating", t),
                                function(t) {
                                    let e = [];
                                    "id" in t.params ? e = [t.params.id] : "ids" in t.params && (e = t.params.ids);
                                    r ? r.params.ids = r.params.ids.concat(e) : r = {
                                        method: "get_alerts",
                                        params: {
                                            ids: e
                                        }
                                    }
                                }(t),
                                function() {
                                    n || (d("merged promise - creating"), n = new Promise(((t, e) => {
                                        setTimeout((() => {
                                            r ? (d("send request to server - timeout"), g(r).then((e => {
                                                t(e)
                                            })).catch(e)) : e("No data to send request")
                                        }), 500)
                                    })), n.then((t => d("merged promise - resolved"))), n.catch((t => d("merged promise - rejected"))));
                                    return n
                                }().then((n => {
                                    const r = function(t, e) {
                                        const n = e.alerts || [];
                                        let r = null;
                                        if ("get_alert" === t.method) {
                                            const e = n.filter((e => e.id === t.params.id))[0];
                                            e && (r = {
                                                alert: e
                                            })
                                        } else if ("get_alerts" === t.method) {
                                            const e = t.params.ids,
                                                o = [];
                                            for (let t = e.length - 1; t >= 0; t--) {
                                                const r = e[t];
                                                for (let t = n.length - 1; t >= 0; t--) {
                                                    const e = n[t];
                                                    if (e.id === r) {
                                                        o.push(e);
                                                        break
                                                    }
                                                }
                                            }
                                            o.length && (r = {
                                                alerts: o
                                            })
                                        }
                                        return r
                                    }(t, n);
                                    r ? (d("personal promise - resolved", t), e(r)) : (d("personal promise - rejected", t), o("not_exists"))
                                })).catch(o)
                        }));
                    return a.then((t => (o(i), t))).catch((t => (o(i), t))),
                        function(t, n) {
                            e[t] = n
                        }(i, a), a
                }
            }(u || (u = {}));
            var p = n(483733),
                _ = n(175203),
                f = n(890740);
            const h = (0, o.getLogger)("Alerts.Price.Request"),
                v = window.initData.price_alerts_url || "";
            r.enabled("alerts") && !v && h.logError("Url not passed");
            const y = new Set(["create_alert", "stop_alert", "stop_all", "restart_alert", "restart_all", "delete_alert", "delete_all", "delete_events", "update_extra", "restart_alerts", "stop_alerts", "clone_alerts", "delete_alerts"]);

            function m(t) {
                if (t.method && y.has(t.method)) {
                    const e = Object.assign({}, t.params);
                    t.params && "extra" in t.params && (e.extra = JSON.parse(t.params.extra)), h.logNormal(JSON.stringify({
                        m: t.method,
                        p: e
                    }))
                }
                if (u.isMergable(t)) return u.mergeRequest(t);
                if (a.isCachable(t)) {
                    let e = a.get(t);
                    return e || (e = g(t), a.set(t, e)), e
                }
                return g(t)
            }

            function g(t) {
                if (!v) return Promise.reject("no_alerts_url");
                if (!window.is_authenticated) return Promise.reject("not_authenticated");
                const e = t.method,
                    n = {
                        body: JSON.stringify({
                            m: e,
                            p: t.params
                        }),
                        credentials: "include",
                        method: "POST",
                        headers: t.headers
                    },
                    r = (new Date).getTime(),
                    o = `${v}?log_username=${window.user.username}&log_method=${e}`;
                return (0, f.fetch)(o, n, {
                    logBodyOnError: !0
                }).catch((() => (p.alertsConnectionWritableTracker.setValue(!1), Promise.reject("server_url_unavailable")))).then((t => {
                    _.telemetry.sendReport("alerts", "api_http_status", {
                        value: t.status
                    });
                    const e = (new Date).getTime() - r;
                    return _.telemetry.sendReport("alerts", "api_time_frame", {
                        value: e
                    }), t.json()
                })).then((t => (p.alertsConnectionWritableTracker.setValue(!0), t))).then((t => {
                    const e = "Unexpected server response";
                    return "success" === t.m ? t.p : "error" === t.m ? Promise.reject(t.p.reason || e) : Promise.reject(e)
                })).catch((t => (h.logError(`Failed to fetch price-alerts: ${t}`), Promise.reject(t))))
            }
        },
        835343: (t, e, n) => {
            "use strict";

            function r(t) {
                let e;
                if ("object" != typeof t || null == t || "number" == typeof t.nodeType) e = t;
                else if (t instanceof Date) e = new Date(t.valueOf());
                else if (Array.isArray(t)) {
                    e = [];
                    let n = 0;
                    const o = t.length;
                    for (; n < o; n++) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = r(t[n]))
                } else {
                    e = {};
                    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = r(t[n]))
                }
                return e
            }
            n.d(e, {
                deepCopy: () => r
            })
        }
    }
]);